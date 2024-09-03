import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import bcrypt from "bcrypt";
import Admin from '../models/admin';
import Shop from '../models/shop';
import Product from '../models/product';


// There is a lot happening with the wizard. It'll be broken down into 5 smaller tasks:
// 1. Check the form data, make sure everything is valid and form data needed to create a new schema is provided. 
// 2. Insert the admin data into the microcart DB and fetch the data back for creating the new shop schema.
// 3. Create a new schema using the provided form data for the new shop and add it to the database.   (new schema NOTTTT needed anymore. All tables now under same schema)
// 4. Generate the code were giving to the user to implement into the website of there choice with links to the api to connect to the DB under there schema with schema user.
// 5. Store cookies, return a success message and redirect the user to the shop creation page, and show a demo link of the shop to the new user which will be the auto generated page
export async function POST(req, res) {
    // First lets get the form data back
    const body = await req.json();
    const { username, password, shopName, shopUrl, email, products, theme } = body;

    
    // 1: Let's first check to make sure an admin doesn't exist
    const adminFetch = await Admin.findAll({    
        where: {
            email
        }
    });

    const themeChoice = { 'Theme1': 2, 'Theme2': 3, 'Theme3': 4 };

    
    // Checks if admin already exists
    if(adminFetch.length < 0) { return NextResponse.json({ error: 'Admin already exists. Please login.' }, { status: 401 }); }

    // Now let's hash the password for use
    const generatePassword = async (pass) => { 
        return await bcrypt.hash(pass, 10);
    }
    const hashedPassword = await generatePassword(password);
    
    
    // 2: Let's insert the admin data into the microcart DB
    try{
        await Admin.create({
            username,
            password: hashedPassword, // default password IS [microcart123+]
            email,
            roleid: 2, // This is the shop admin role,
            name: null,
        });

        // Let's fetch the admin id to insert into the shop table
        const lastCreated = await Admin.findAll({
            limit: 1,
            where: {
                email
            },
            order: [ [ 'created', 'DESC' ]]
        });

        if(lastCreated.length == 1) { 
            // The shop Create MAY need to be outside this and we may need to just have a variable to store the admin id
            await Shop.create({
                admin: lastCreated[0].id,
                name: shopName,
                url: (shopUrl) ? shopUrl : null,
                theme: themeChoice[theme] // This is the default theme for all users (for now inserting this way until fixed)
            }); 
        }
        

        // After the shop is created we need to fetch the shop id to insert into the products table but we need to confirm the products variable isn't null before
        // if(products){
        //     await Shop.findAll({
        //         limit: 1,
        //         where: {
        //             name: shopName
        //         },
        //         order: [ [ 'createdAt', 'DESC' ]]
        //     }).then((shop) => {
        //         console.log(shop);
        //         // Now we need to insert the products into the products table
        //         products.forEach(product => {
        //             console.log(product);
        //             // We need to insert the products into the products table
        //             Product.create({
        //                 shop_id: shop[0].id,
        //                 name: product.name,
        //                 price: product.price,
        //                 description: product.description,
        //                 image: product.image
        //             });
        //         });
        //     });
        // }

        return NextResponse.json({ success: 'Shop has been created.', data: body, length: lastCreated.length }, { status: 200 });

    } catch(error){
        return NextResponse.json({ errmsg: 'Wizard has failed. Please try again.', err: error }, { status: 500 });
    }

    // Step 3 no longer needs to happen. We need to just put the data needed in the tables from the information given
    
    // 4: Generate the code were giving to the user to implement into the website of there choice with links to the api to connect to the DB under there schema with schema user
    // Now that I'm thinking more into this, do we just want to write 3 files and compress them into a zip for a download for the user, with all the informaiton?
    // This may need some colloboration with how the site is built. 
    // There is ALSO the possibility we can have them submit the request and we can then process it ourselves instead of having it automated but create automation tools 
    // that could allow it to be easier on the process itself. Think on this! 

    // We will return a JSON response with some dummy data
    return NextResponse.json({});
}
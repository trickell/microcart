import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import bcrypt from "bcrypt";


// There is a lot happening with the wizard. It'll be broken down into 5 smaller tasks:
// 1. Check the form data, make sure everything is valid and form data needed to create a new schema is provided. 
// 2. Insert the admin data into the microcart DB and fetch the data back for creating the new shop schema.
// 3. Create a new schema using the provided form data for the new shop and add it to the database. 
// 4. Generate the code were giving to the user to implement into the website of there choice with links to the api to connect to the DB under there schema with schema user.
// 5. Store cookies, return a success message and redirect the user to the shop creation page, and show a demo link of the shop to the new user which will be the auto generated page
export async function POST(req, res) {
    // First lets get the form data back
    const body = await req.json();
    const { username, password, shopName, email } = body;

    // 1: Let's first check to make sure an admin doesn't exist
    const adminFetch = await Admin.findAll({    
        where: {
            email
        }
    });

    if(adminFetch.length < 0) { return NextResponse.json({ error: 'Admin already exists. Please login.' }, { status: 401 }); }

    // Now let's hash the password for use
    const hashedPassword = await bcrypt.hash(password, 10);

    // 2: Let's insert the admin data into the microcart DB
    try{
        await Admin.create({
            username,
            password: hashedPassword,
            email,

        });
    } catch(error){
        console.error(error);
        return NextResponse.json({ error: 'Failed to create admin. Please try again.' }, { status: 500 });
    }

    // 3: Now let's create a new schema using the provided form data for the new shop 
    //     const req = await fetch("/api/execute");
    //     const data = await req.json();
    //     console.log(data);
    
    // 4: Generate the code were giving to the user to implement into the website of there choice with links to the api to connect to the DB under there schema with schema user
    // Now that I'm thinking more into this, do we just want to write 3 files and compress them into a zip for a download for the user, with all the informaiton?
    // This may need some colloboration with how the site is built. 
    // There is ALSO the possibility we can have them submit the request and we can then process it ourselves instead of having it automated but create automation tools 
    // that could allow it to be easier on the process itself. Think on this! 

    // We will return a JSON response with some dummy data
    return NextResponse.json({});
}
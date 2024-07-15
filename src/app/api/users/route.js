import { NextResponse } from 'next/server';
import seq from '../dbconnect'; 
import User from '../models/user';
import Address from '../models/address';
import { Sequelize } from 'sequelize';

// This will be our GET request from the client
export async function GET(req){
    
    // Let's return the user data as JSON back to the client and wrap it in a temporary cookie
    let userData = { // Temporary cookie
        id: req.nextUrl.searchParams.get('id'),
        username: 'JohnDoe',
        email: 'johndoe@example.com'
    };

    // Relationships for User model are defined here:
    User.hasMany(Address, {
        foreignKey: 'shipping_id',
        foreignKey: 'billing_id'
    });
    // Address model one to many ("user table")
    Address.belongsTo(User, {
        foreignKey:'shipping_id',
        foreignKey: 'billing_id'
    });
    
    // Check if the user_id is defined, or pull by all
    if(userData.id === null) {
        // Allow a filter to happen (working on this atm)
        let filter = {};
        if (req.nextUrl.searchParams.get('filter')) {
            filter = {
                where: {
                    // Gives a unique key based on the like query for usernames under that bracket (will be good for admin requests to manage users)
                    username: { [Sequelize.Op.like]: `${req.nextUrl.searchParams.get('filter')}%` }
                }
            };
        }
        console.log(req.nextUrl.searchParams.get('filter'));

        // Get user data with sequelize and User Model
        User.findAll(filter).then(user => {
            console.log(user[0].dataValues);
            userData = user[0].dataValues;
            // The way shown on sequelize documentation (were in nextjs, will work a little differently)
            // Response.json({
            //     userData: user.dataValues
            // });
        })
    } 
    else {
        // If user_id exists, pull directly from that user information
        User.findByPk(userData.id).then(user => {
            if(user){
                Response.json({
                    user: user.dataValues
                });
            }
            else {
                res.status(404).send();
            }
        })
    }

    // Let's create some random data if createRandomData is true
    if(req.nextUrl.searchParams.get('createRandomData') === 'true'){
        User.create({
            username: 'random_user' + Math.floor(Math.random() * 10000),
            password: 'random_password' + Math.floor(Math.random() * 10000),
            email: 'random_email' + Math.floor(Math.random() * 10000) + '@example.com',
            name: 'random_name' + Math.floor(Math.random() * 10000),
            created: new Date()
        });
    }

    // Return the user data response as JSON 
    return NextResponse.json(userData, {
        headers: {
            'Set-Cookie': 'user=JohnDoe; Path=/; HttpOnly; SameSite=Strict' // Temp setting of the cookie
        },
        status: 200
    });
}

// This will be the POST Request from the client when a new User is being inserted
export async function POST(req){
    const formData = await req.json();

    // Now we can process the form data and store it in a database or use it for authentication (api calls to insert user table data)
    console.log(formData);

    return NextResponse.json({ message: 'Form submitted successfully', status: 200 });
}
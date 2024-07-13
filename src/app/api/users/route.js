import { NextResponse } from 'next/server';
import seq from '../dbconnect'; 
import User from '../models/User';

export async function GET(req){
    // Let's return the user data as JSON back to the client and wrap it in a temporary cookie
    const userData = { // Temporary cookie
        id: req,
        username: 'JohnDoe',
        email: 'johndoe@example.com'
    };

    // Get user data with sequelize and User Model
    if(userData.id === undefined) {
        User.findAll().then(user => {
            Response.json({
                user: user.dataValues
            });
        })
    } 
    else {
        User.findByPk(userData.id).then(user => {
            Response.json({
                user: user.dataValues
            });
        })
    }

    return NextResponse.json(userData, {
        headers: {
            'Set-Cookie': 'user=JohnDoe; Path=/; HttpOnly; SameSite=Strict' // Temp setting of the cookie
        },
        status: 200
    });
}

export async function POST(req){
    const formData = await req.json();

    // Now we can process the form data and store it in a database or use it for authentication (api calls to insert user table data)
    console.log(formData);

    return NextResponse.json({ message: 'Form submitted successfully', status: 200 });
}
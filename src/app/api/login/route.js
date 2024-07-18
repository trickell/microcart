
import { NextResponse } from 'next/server';
import User from '../models/user';
import Admin from '../models/admin';
import { cookies } from 'next/headers';
import bcrypt from "bcrypt";

// This will handle the login process when a user OR admin tries to login via the login form
export async function POST(req, res){
    console.log('POST HAS BEEN HIT');
    // if(!req){ return NextResponse.error({ status: 404, body: 'Please fill out the form correctly.' }); }
    // We need to check if the user logging in is an admin or a normal user.
    // TODO: Need to check the user logging in and see if there in the admin table first.
    const body = await req.json();
    const { username, password } = body;
    
    console.log(username, password);
    
    const adminFetch = await Admin.findAll({
        where: {
            username
        }
    });
    let isUserAdmin = adminFetch.length > 0 ? true : false; 
    
    // Find user in user table
    const userFetch = await User.findAll({
        where: {
            username
        }
    });
    
    // Admin Comparison
    const adminCompare = (isUserAdmin) ?  await bcrypt.compare(password, adminFetch[0].password) : false;
    if(isUserAdmin && adminCompare){
        console.log('admin user hit');
        cookies().set('logged_in', 'true');
        cookies().set('user_data', adminFetch[0]); // userFetch May need
         
        return window.location.href = '/admin';
    }

    if(userFetch.length < 1){ return NextResponse.json({ error: 'User not found. Please check your username and try again.' }, { status: 401 }); }

    // User Comparison
    const userCompare = await bcrypt.compare(password, userFetch[0].password);
    // TODO: If user is not in admin table, validate the password in the user table and confirm the user exists
    // If the user is in the user table, we need to validate the password.
    console.log(password, userFetch[0].password, userCompare);
    if (userCompare) {
        console.log('regular user hit');
        cookies().set('logged_in', 'true');
        cookies().set('user_data', userFetch[0]); // userFetch May need to be converted to JSON before setting the cookie.
        return NextResponse.json({user: userFetch[0]}, { location: '/profile' }, { status: 200 });
    }
    return NextResponse.json({ error: 'Invalid credentials. Please try again.'}, { status: 401 });
    
}
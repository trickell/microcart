
import { NextResponse } from 'next/server';
import User from '../models/user';
import Admin from '../models/admin';
import { cookies } from 'next/headers';
import bcrypt from "bcryptjs-react";

// This will handle the login process when a user OR admin tries to login via the login form
export async function POST(req){
    console.log('POST request received', req.json());
    if(!req){ return NextResponse.error({ status: 404, body: 'Please fill out the form correctly.' }); }
    // We need to check if the user logging in is an admin or a normal user.
    // TODO: Need to check the user logging in and see if there in the admin table first.
    userFetch = await Admin.findAll({
        where: {
            username: req.body.username
        }
    });

    if(userFetch.length > 0){
        // If the user is in the admin table, we need to validate the password.
        if ( bcrypt.compareSync(req.body.password, userFetch[0].password) ) {
            cookies().set('logged_in', 'true');
            cookies().set('user_data', userFetch[0]); // userFetch May need to be converted to JSON before setting the cookie.
            window.location.href = '/admin';
        }
        else {
            NextResponse.error({ status: 404, body: 'Invalid Password. Please check your password and try again.' });
        }
    }
    else {
        // TODO: If user is not in admin table, validate the password in the user table and confirm the user exists
        userFetch = await User.findAll({
            where: {
                username: req.body.username
            }
        });

        if(userFetch.length > 0){
            // If the user is in the user table, we need to validate the password.
            if ( bcrypt.compareSync(req.body.password, userFetch[0].password) ) {
                cookies().set('logged_in', 'true');
                cookies().set('user_data', userFetch[0]); // userFetch May need to be converted to JSON before setting the cookie.
                window.location.href = '/profile';
            }
            else {
                NextResponse.error({ status: 404, body: 'Invalid Password. Please check your password and try again.' });
            }
        }
        else {
            NextResponse.error({ status: 404, body: 'User not found. Please check your username and try again.' });
        }
    }
    // TODO: If all conditions pass, we want to create a cookie, set logged_in to true, and return a response with status 200
    // Cookie URL: https://nextjs.org/docs/api-reference/next/headers#cookies
    // Set a cookie with this command: cookies().set(name, value, options)
    // if(logged_in){
        
    // }

}
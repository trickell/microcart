
import { NextResponse } from 'next/server';
import User from '../models/user';
import Admin from '../models/admin';
import { Sequelize } from'sequelize';

// This will handle the login process when a user OR admin tries to login via the login form
export async function POST(req){
    // We need to check if the user logging in is an admin or a normal user.
    
}
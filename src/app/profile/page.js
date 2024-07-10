"use client"
import React from'react';
// import ProfileBusiness from '.ProfileBusiness';
// import ProfileUser from './ProfileUser';
// import ProfileAdmin from './ProfileAdmin';
import ThemePicker from './ThemePicker';

export default function Profile () {
    return (
        <div>
            <h1 className="pageheader">Profile</h1>
            <div className="profile_wrapper">
                <div className="userpic">THIS IS YOUR FACE OR YOUR LOGO</div>
                <div className="information">
                    Users will fill out a form and it will display here.
                    <p>Company contact information</p>
                    <p>Bio</p>
                    <p>Socials</p>
                </div>
            </div>
            <div className="favorites">This is where the favorites can be reviewed
            <div>
                <div className="placeholderbox">This is a placeholder for the favorites</div>
                <div className="placeholderbox">This is a placeholder for the favorites</div>
                <div className="placeholderbox">This is a placeholder for the favorites</div>
                <div className="placeholderbox">This is a placeholder for the favorites</div>
                <div className="placeholderbox">This is a placeholder for the favorites</div>
            </div>
            
            </div>

            {/* Profile content goes here */}   
            {/* Theme picker to load after clicking a "change theme" button... */}
            <ThemePicker />  {/* Added the ThemePicker component here */}
          
         
            {/* <ProfileBusiness /> */}
            {/* <ProfileUser /> */}
            {/* <ProfileAdmin /> */}
        </div>

    )
}
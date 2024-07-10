"use client"
import React from'react';
// import ProfileBusiness from '.ProfileBusiness';
// import ProfileUser from './ProfileUser';
// import ProfileAdmin from './ProfileAdmin';
import ThemePicker from './ThemePicker';
import Image from 'next/image';


export default function Profile () {
  
        const fileInput = React.useRef();
      
        const uploadFile = async (event) => {
          event.preventDefault();
      
          const formData = new FormData();
          formData.append('file', fileInput.current.files[0]);
      
          const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
          });
      
          if (response.ok) {
            console.log('File uploaded successfully');
          } else {
            console.log('File upload failed');
          }
        }





    return (
        <div>
            <h1 className="pageheader">Profile</h1>
            <div className="profile_wrapper">
                <div className="userpic searchbar">
                    <div className="profile_pic login">
                        <Image className="product product-img" 
                            src="/sunset.png" 
                            alt="woman in cart" 
                            height="300" 
                            width="300" />Mr. Bojangles {/* this will be usernames */}
                    </div>

                    
                </div>

                <div>
                        <h3>Update you profile pic</h3>
                        <form onSubmit={uploadFile}>
                                <input type="file" ref={fileInput} name="Choose a new picture"/>
                                <button type="button" className="nav">Upload</button>
                            </form>
                    </div>

                    {/* <div>
                        Users will fill out a form and it will display here.
                        <p>Company contact information</p>
                        <p>Bio</p>
                        <p>Socials</p>
                    </div> */}

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
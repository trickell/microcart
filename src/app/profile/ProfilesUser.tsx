
"use client"
import React from'react';
// import ProfileBusiness from '.ProfileBusiness';
// import ProfileUser from './ProfileUser';
import Droptheme from './ThemePicker';

import Image from 'next/image';


export default function ProfileUser () {
  
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
            <div className="profile_wrapper login">
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
                  <h3 className="cabinfont login-btn">Update you profile pic</h3>
                  <div className="pic_box searchbar">
                    <form onSubmit={uploadFile} className="change_pic">
                      <div className="buttonaf">
                            <input type="file" ref={fileInput} id="profile_pic_upload" />
                            <label htmlFor="profile_pic_upload" >Choose a file</label>
                            <button type="button" id="pp_upload">Upload</button>
                      </div>
                    </form>
                  </div> 
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
            
        <div className="theme_picker">
          <Droptheme />  {/* Added the ThemePicker component here */}
        </div>
    </div>
    )
}



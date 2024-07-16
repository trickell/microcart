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
        
// toggles open and closed the styler area 
        const togglestyles = () => {
          const styler = document.getElementById("styler");
          styler.hidden = !styler.hidden;
        };

    return (
        <div>
            <h1 className="pageheader">Dashboard</h1>
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
                  <div className="pic_box searchbar">
                    <form onSubmit={uploadFile} className="change_pic">
                      <div className="buttonaf">
                            <h3 className="cabinfont">Change User Icon</h3>
                            <input type="file" ref={fileInput} id="profile_pic_upload" />
                            <label htmlFor="profile_pic_upload" >Choose a file</label>
                            <button type="button" id="pp_upload">Upload</button>
                      </div>
                    </form>
                  </div> 
                </div>     
            </div>
            
          
          
          <div className="user_activities">
            <div className="activity">
              <h1 className="dash_titles">My orders</h1>
              <button className="dash-btn">View</button>           
            </div>

            <div className="activity">
              <h1 className="dash_titles">Favorite Items</h1>
              <button className="dash-btn">View</button>             
            </div>

            <div className="activity">
              <h1 className="dash_titles">History & Feedback</h1>
              <button className="dash-btn">View</button>
            </div>

            <div className="activity">
              <h1 className="dash_titles">Favorite Stores</h1>
              <button className="dash-btn">View</button>            
            </div>

            <div className="activity">
              <h1 className="dash_titles">Inbox</h1>
              <button className="dash-btn">View</button>
            </div>

            <div className="activity">
              <h1 className="dash_titles">My baskets</h1>
              <button className="dash-btn">View</button>
            </div>

            
          </div>
          <div className="activity">
              <button id="showStyles" className="nav" onClick={togglestyles}>Toggle Styler</button>
              <div hidden id="styler" className="theme_picker_container">
                <h1 className="theme_area_header">Micro <span className="fancy">Styler</span></h1>
                <Droptheme /> 
              </div>
            </div>
        </div>
         
         
  
    );
} 



    
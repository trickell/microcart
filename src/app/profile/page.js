"use client"

import ProfileUser from "./ProfilesUser";

export default function Dashboard() {

  return (
    <div>
      <h1>Dashboard</h1>
      <ProfileUser />
    </div>
  )};

//   if (IsLoggedin = true) { // if logged in, show the user profile

//   return (
//     <div>
//       <ProfileUser />
//     </div>
//   )
// } else {
//      <p>Must be logged in to see this page.</p>
// }
// }

// need to: Build a user permissions component that receives an array of permissions 
// from a server for a particular user. Render a list of available actions based on the user’s 
// permissions. If the user doesn’t have any permissions, display a message like “You don’t have any permissions.”
// Create a navigation component that shows different links based on whether the user is
//  logged in or not. For example, show “Home,” “About,” and “Contact” links when not logged 
//  in, and show “Home,” “Dashboard,” and “Logout” links when logged in.
import React from "react";

export default function GuestDash() {

return ( 
        <div>
    <div className="activity">
    <h1 className="dash_titles">Completed</h1>
    <button className="dash-btn">View</button>
  </div>

  <div className="activity">
    <h1 className="dash_titles">Cart Items</h1>
    <button className="dash-btn">View</button>            
  </div>

  <div className="activity">
    <h1 className="dash_titles">Inbox</h1>
    <button className="dash-btn">View</button>
  </div>
  </div>
)};
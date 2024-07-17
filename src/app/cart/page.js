"use client"
import React from'react';

export default function Cart () {
    return (
    
    <div>
        <h1 className="pageheader">Cart Breakdown</h1>



    
        <div className="favorites profile_wrapper">Sub cart 1
            <div>
                <div className="placeholderbox">Cart item</div>
                <div className="placeholderbox">Cart item</div>
             
            </div>
            <h2>Microcart total</h2>
            
            <button className="dash-btn">Checkout</button>
        </div>

        <div className="favorites profile_wrapper">Sub cart 2
            <div>
                <div className="placeholderbox">Cart item</div>
                <div className="placeholderbox">Cart item</div>
     
            </div>
            <h2>Microcart total</h2>
            
            <button className="dash-btn">Checkout</button>
        </div>
        <div className="profile_wrapper">
        <h1>Master Cart Total:</h1>
       
        <button className="dash-btn">Checkout</button>
        </div>
    </div>
)
}
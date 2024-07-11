"use client"
import React from'react';

export default function Cart () {
    return (
    
    <div>
        <h1 className="pageheader">Cart Breakdown</h1>



    
        <div className="favorites">Sub cart 1
            <div>
                <div className="placeholderbox">Cart item</div>
                <div className="placeholderbox">Cart item</div>
                <div className="placeholderbox">Cart item</div>
                <div className="placeholderbox">Cart item</div>
                <div className="placeholderbox">Cart item</div>
            </div>
            <h2>Microcart total</h2>
            
            <button>Checkout</button>
        </div>

        <div className="favorites">Sub cart 2
            <div>
                <div className="placeholderbox">Cart item</div>
                <div className="placeholderbox">Cart item</div>
                <div className="placeholderbox">Cart item</div>
                <div className="placeholderbox">Cart item</div>
                <div className="placeholderbox">Cart item</div>
            </div>
            <h2>Microcart total</h2>
            
            <button>Checkout</button>
        </div>
        <h1>Master Cart Total:</h1>
       
            <button>Checkout</button>

    </div>
)
}
'use client'
 
import { useState } from 'react'
import Product from "../components/product"; 


export default function Shopping () {

    return (
        <div className="container">
            <h1 className="pageheader">Shopping Page</h1>
            <Product />
        </div>
    );
};
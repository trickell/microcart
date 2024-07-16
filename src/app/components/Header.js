"use client";
import React, {Component} from 'react';
import Navbar from './Navbar';
import Link from 'next/link';

function Header() {
  
    return (
      <div className="header_area">
        <div>
          <Navbar></Navbar>
          
        </div>
  
      </div>

      
    );
};

export default Header;
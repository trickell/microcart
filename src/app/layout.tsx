import React from 'react';
import Header from './components/Header';
import "./globals.css";
import "./index.css";




const RootLayout = ({children}) => {
  return (
      <html>
      
        <body>
      
        <div>
          <Header/>
          {children}
        </div>
          
        
        </body>
      </html>
        
    
  );
};

export default RootLayout;

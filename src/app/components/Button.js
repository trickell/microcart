"use client"
import React from'react';

function BtnType(props){
    /* 
    * ======= Button Type Functionality. To add a different button, create a new case with the name of the type ========
    */
    switch(props.type){
        case 'back':
            return <button type="button" onClick={() => {
                document.getElementById(props.showID).classList.remove('hidden');
                document.getElementById(props.hideID).classList.add('hidden');
            }}>Back</button>;
        
        case 'next':
            return <button type="button" onClick={() => {
                document.getElementById(props.showID).classList.remove('hidden');
                document.getElementById(props.hideID).classList.add('hidden');
            }}>Continue</button>;

        case 'submit':
            return <button type="button" onClick={() => {
                form.submit();
            }}>Submit</button>;
        default:
            return null;
    }    

}

export default BtnType;
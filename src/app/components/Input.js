"use client"
import React from 'react';

const Input = ({ label, type, id, placeholder, validate, onChange, inputVal }) => {
  
    const [query, setQuery] = React.useState(""); // Will hold the state change of each input field value
    const [error, setError] = React.useState(""); // Will hold the state change of the error field
    const [starting, setStarting] = React.useState(false); // Flag to indicate if input field is starting to get focus    

    // useEffect hook to validate the input field value every 500ms OR change(default)
    React.useEffect((e) => {
      const timeOutId = setTimeout(() => {
        // setError(() => error)
        
        if(starting == true){ 
          validateInput(query)
          
          // Let's store the input to an object to be used later          
          savedFormData[id] = query;  
          
          // Store it in the summary page for the user to review
          (document.getElementById(id+'-summary')) ? document.getElementById(id+'-summary').innerHTML = query : null;
        };

      }, 500);

      
      return () => clearTimeout(timeOutId);
    }, [query])

    
    
    // Validation Methods for different types of inputs 
    let validateInput = () => {
      // If marked as required validation, will use this validation on input
      // console.log(query.validate);
      if (validate){ 
        // Required Validation for fields marked required
        if (query.trim() == "" && validate.includes("required")) {
          setError("This field is required");
        } 
        // Required Validation for fields marked required (using regex to check for email format)
        else if (validate.includes("email")) {
          if (!/^\S+@\S+\.\S+$/i.test(query)) {
            setError("Please enter a valid email address");
          } else {
            setError("");
          }
        } 
        else if(validate.includes("confirmPass")) {
          if(query!== document.getElementById("password").value){
            setError("Passwords do not match");
          } else {
            setError("");
          }
        }
        // If all fields pass, clear error message
        else {
          setError("");
        };
      }
}
  
    
  return (
    <div className="flex flex-col w-full gap-2 login">

      <div className="flex justify-between w-full">
        <label htmlFor={id} className="font-semibold capitalize px-5 justify-center content-center">
          {label}
        </label>
        <input
          id={id}
          type={type}
          className={`w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60 ${error? "input-error" : ""}`}
          placeholder={placeholder}
          onFocus={() => setStarting(true)}
          onChange={(event) => setQuery(event.target.value)}
          ref={inputVal}
          value={query}
          validate={validate}
        />
        <span className={`text-red-500 ${error? "block" : "hidden"} px-5`}>{error}</span>
      </div>
    </div>
  )
}

export default Input;
"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import BtnType from '../components/Button';

export default function Wizard() {

    const { register, handleSubmit, formState: {errors} } = useForm({ mode: 'all', reValidateMode: 'onChange', criteriaMode: 'all', shouldFocusError: true });
    const [query, setQuery] = React.useState(""); // Will hold the state change of each input field value

    // Validate the password and confirm password fields    
    const validatePassword = (pass) => {
        // Password validation
        const confirmPass = document.getElementById("wizard").elements["passw"].value;
        if(pass !== confirmPass){
            return false;
        }
        else {
            return true;
        }
    }
    
    const updateSummary = (elem) => {
        console.log(elem.target.name);
        (document.getElementById(elem.target.name + '-summary')) ? document.getElementById(elem.target.name +'-summary').innerHTML = elem.target.value : null;
    }

    // Make a POST request to the API to create a new shop
    // This will be the eventual call when I figure out how to watch for an onClick event outside the Input component to handle the summary data
    // ===== Right now data is being stored in the input component and handled there for every input. There needs to be another event listener 
    // ===== to handle the summary data and then submit the form data to the API
    const createShop = async (data) => {    

        console.log(data);
        
        const response = await fetch('/api/createshop', {
            method: 'POST',
            headers: new Headers({
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }),
            body: JSON.stringify({ 
                shopName: data.shopName,
                shopUrl: data.shopUrl,
                email: data.email,
                username: data.username,
                password: data.passw,
                products: data.products,
                theme: data.theme
            }),
          });
          const res = await response.json();
    };
    

    // First part of form has new content from react-hook-form
    return (
        <div>
            <h1 className="p-5 text-2xl my-5 border rounded-md bg-slate-900 border-slate-500 placeholder:opacity-60">Generate Your New Shopping Cart Experience</h1>
            <form className="flex gap-4 flex-col cabinfont" id="wizard" onSubmit={handleSubmit((data) => {
                createShop(data);
            })}>
                <div id="first">
                    {/* <Input label="shopName" type="text" id="shop-name" placeholder="Shop Name" validate={['required']} inputValue={inputVal} onBlur={(e)=>setFormData(e)} />
                    <Input label="shopUrl" type="text" id="shop-url" placeholder="Shop URL" inputValue={inputVal} onBlur={(e)=>setFormData(e)} /> */}
                    
                    <input type="text" id="shopName" className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60" {...register("shopName", {required: 'Input is required'})} placeholder="Shop Name" onChange={(e) => updateSummary(e) } invalid={errors.shopName ? "true" : "false"} />
                    <p class="error-msg">{errors.shopName?.message}</p>
                    <input type="text" id="shopUrl" className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60" {...register("shopUrl", {
                            pattern: {
                                value: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
                                message: 'Wrong URL format for a website. ' // JS only: <p>error message</p> TS only support string
                            }})} placeholder="Shop URL" onChange={(e) => updateSummary(e) }  invalid={errors.shopUrl ? "true" : "false"} />
                    <p class="error-msg">{errors.shopUrl?.message}</p>

                    <BtnType type="next" showID="page2" hideID="first" />
                </div>
                <div id="page2" className="flex-col hidden">
                    {/* <Input label="template" type="text" id="theme" placeholder="Select a Theme" inputValue={inputVal} /> */}
                    <label htmlFor="theme">Select a Theme</label>
                    <select name="theme" id="theme" className="w-full p-5 px-10 font-medium border rounded-none bg-slate-900 border-slate-300 placeholder:opacity-60" {...register("theme")} placeholder="Select a Theme" onChange={(e) => updateSummary(e) } >
                        <option value="0" defaultChecked>Select a Theme</option>
                        <option value="Theme1">Theme 1</option>
                        <option value="Theme2">Theme 2</option>
                        <option value="Theme3">Theme 3</option>
                    </select>                    
                    <div className="flex flex-row">
                        <BtnType type="back" showID="first" hideID="page2" />
                        <BtnType type="next" showID="page3" hideID="page2" />
                    </div>
                </div>
                <div id="page3" className="flex-col hidden">
                    {/* <Input label="username" type="text" id="name" placeholder="Your Admin Username" validate={['required']} inputValue={inputVal} onBlur={(e)=>setFormInput.username = e.target.value} />
                    <Input label="password" type="password" id="password" placeholder="Password" validate={['required','password']} inputValue={inputVal} />
                    <Input label="confirm Pass" type="password" id="confirm-password" placeholder="Confirm Password" validate={['required','confirmPass']} inputValue={inputVal} />
                    <Input label="email" type="email" id="email" placeholder="Email" validate={['required','email']} inputValue={inputVal} onBlur={(e)=>setFormInput.email = e.target.value} /> */}
                    <input type="text" id="username" className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60" {...register("username", {required: 'Username is required'})} placeholder="Your Username" onChange={(e) => updateSummary(e) } />
                    <p class="error-msg">{errors.username?.message}</p>
                    <input type="password" id="passw" className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"{...register("passw", {required: 'Password is required'})} placeholder="Password" />
                    <p class="error-msg">{errors.passw?.message}</p>
                    <input type="password" className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
                    {...register("confirmpassw", 
                        { validate: 
                            { 
                                type: pass => validatePassword(pass) || "Passwords do not match",                                    
                            },
                          required: 'Enter your password again'
                        })
                    }
                    placeholder="Confirm Password" />
                    <p class="error-msg">{errors.confirmpassw?.message}</p>
                    <input type="email" id="email" className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60" {...register("email", {
                            pattern: {
                                value: /^\S+@\S+\.\S+$/i,
                                message: 'This is not the right format for an Email Address.' // JS only: <p>error message</p> TS only support string
                            }
                        })} placeholder="Email" onChange={(e) => updateSummary(e) } />
                    <p class="error-msg">{errors.email?.message}</p>
                    <div className="flex flex-row">
                        <BtnType type="back" showID="page2" hideID="page3" />
                        <BtnType type="next" showID="page4" hideID="page3" />
                    </div>
                </div>
                <div id="page4" className="hidden">
                    <div className="flex flex-row gap-4 my-5">
                        <label htmlFor="wz_products" className="flex px-8 py-3 bg-slate-900 rounded-xl box-shadow-xl hover:cursor-pointer">
                            Upload Products CSV 
                        </label>
                        <input className="opacity-0" type="file" id="wz_products" accept=".csv"></input>
                    </div>
                    <div className="flex flex-row justify-self">
                        <a className="px-10 text-blue-500 text-shadow underline font-light pb-5" href="#" download="products.csv">Download Template Products CSV</a>
                        <span>Please use the CSV template making sure to include all required values.</span>
                    </div>
                    <div className="flex flex-row">
                        <BtnType type="back" showID="page3" hideID="page4" />
                        <BtnType type="next" showID="summary" hideID="page4" />
                    </div>
                </div>
                <div id="summary" className="hidden">
                    <h2>Summary</h2>
                    <p>Shop Name: <span id="shopName-summary"></span></p>
                    <p>Shop URL: <span id="shopUrl-summary"></span></p>
                    <p>Theme: <span id="theme-summary"></span></p>
                    <p>Username: <span id="username-summary"></span></p>
                    <p>Email: <span id="email-summary"></span></p>
                    <div className="flex flex-row">
                        <BtnType type="back" showID="page4" hideID="summary" />                        
                        <input type="submit" value="Submit"></input>
                    </div>
                </div>
            </form>
        </div>
    );
}
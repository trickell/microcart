'use client'
import React from 'react';
import {useState, useEffect} from 'react';
// import "slider-color-picker";
import ColorOptionSlider from './ColorSliders';



 function Droptheme ({ onChange }) {
    const themes = [
        { key:1, value: "Light Theme",  src:"template/theme.css"},
        { key:2, value: "Dark Theme",  src:"template/darkTheme.css"},
        { key:3, value: "Custom Theme",  src:"template/customTheme.css"}
        // add more themes as needed, css styles will be linked to the selected theme file
      ]

    const designElements = [
        { key:1, value: "Header",  src:"template/header.css"},
        { key:2, value: "Footer",  src:"template/footer.css"},
        { key:3, value: "Sidebar",  src:"template/sidebar.css"},
        { key:4, value: "Main Content",  src:"template/mainContent.css"},
        { key:5, value: "Button",  src:"template/button.css"},
        { key:6, value: "Form",  src:"template/form.css"},
        { key:7, value: "Input",  src:"template/input.css"},
        { key:8, value: "Dropdown",  src:"template/dropdown.css"},
        { key:9, value: "List",  src:"template/list.css"},
        { key:10, value: "Table",  src:"template/table.css"},
        { key:11, value: "Card",  src:"template/card.css"},
 
    ]

    let [theme, setTheme] = useState("Select Theme");

    let handleThemeChange = (e) => {
        setTheme(e.target.value);   
    }


        return (
        <div className="theme_picker">
            <div>
            <h1 className="cabinfont">Themes</h1>
                <div>
                    {theme}
                    <br />
                    <select onChange={handleThemeChange} className="login">
                        <option value="Select Theme">Select Theme</option>
                        {themes.map((theme) => <option key={theme.key} value={theme.value} className="nav">{theme.value}</option>)}
                    </select>
                </div>
                <div>
                    {theme}
                    <br />
                    <select onChange={handleThemeChange} className="login">
                        <option value="Select Theme">Select Component</option>
                        {designElements.map((theme) => <option key={theme.key} value={theme.value} className="nav">{theme.value}</option>)}
                    </select>
                </div>
            </div>
             <div>  
            <ColorOptionSlider />
            
   
      
    </div>
</div>
         
      
        )
    }

export default Droptheme;



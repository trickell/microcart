'use client'
import React, {useState} from 'react';

 function Droptheme () {
    const themes = [
        { key:1, value: "Light Theme",  src:"template/theme.css"},
        { key:2, value: "Dark Theme",  src:"template/darkTheme.css"},
        { key:3, value: "Custom Theme",  src:"template/customTheme.css"}
      ]

    let [theme, setTheme] = useState("Select Theme");

    let handleThemeChange = (e) => {
        setTheme(e.target.value);
    }

        return (
            <div className="Droptheme">
                {theme}
                <br />
                <select onChange={handleThemeChange}>
                    <option value="Select Theme">Select Theme</option>
                    {themes.map((theme) => <option key={theme.key} value={theme.value}>{theme.value}</option>)}
                </select>
            </div>

        )
    }

export default Droptheme;

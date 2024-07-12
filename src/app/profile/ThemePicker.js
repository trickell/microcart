'use client'
import React, {useState, useLayoutEffect} from 'react';
import "slider-color-picker";

 function Droptheme () {
    const themes = [
        { key:1, value: "Light Theme",  src:"template/theme.css"},
        { key:2, value: "Dark Theme",  src:"template/darkTheme.css"},
        { key:3, value: "Custom Theme",  src:"template/customTheme.css"}
        // add more themes as needed, css styles will be linked to the selected theme file
      ]

    let [theme, setTheme] = useState("Select Theme");

    let handleThemeChange = (e) => {
        setTheme(e.target.value);
    }

    // color picker-mabobber-------------

    const ref = React.useRef();
    const [color, setColor] = useState("#ff0000");

    const onColorChange = (event) => {
        setColor(event.target.value);
    };

    useLayoutEffect(() => {
        ref.current.addEventListener("change", onColorChange);
    }, [ref]);


        return (
        <div className="theme_picker">
            <div>
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
                        {themes.map((theme) => <option key={theme.key} value={theme.value} className="nav">{theme.value}</option>)}
                    </select>
                </div>
            </div>


            <div>
                <slider-color-picker
                ref={ref}
                onChange={onColorChange}
                ></slider-color-picker>
            </div>
            <div id="preview" style={{ background: color }}>

            </div>
            </div>
       
        )
    }

export default Droptheme;

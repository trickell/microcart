
import React, { useEffect } from 'react';
import {useState} from 'react';
// import "slider-color-picker";
import ColorOptionSlider from './ColorSliders';



const themesSheets = [
    {  value: "Default",  src:"/themes/index.scss"},
    { value: "Pastel Theme",  src:"/themes/pastel.scss"},
    { value: "Gray Theme",  src:"/themes/graytones.scss"},

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
];

 function Droptheme () {
    const loadSCSS = (href) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
        console.log(`CSS loaded: ${href}`);
    };

    const [theme, setTheme] = useState("Default");  

    const handleThemeChange = (e) => {
        const selectedTheme = e.target.value;
        setTheme(selectedTheme);   

        const themeObj = themesSheets.find((obj) => obj.value === selectedTheme);
        if (themeObj) {
            console.log(`Loading theme: ${selectedTheme}), src:${themeObj.src}`);
            loadSCSS(themeObj.src);
        } else {
            console.log(`No theme found for ${selectedTheme}`);
        }
    };

    // use effect to load the selected theme when the component mounts
    useEffect(() => {
        const savedTheme = localStorage.getItem("selectedTheme");
        if (savedTheme) {
            setTheme(savedTheme);
            const themeObj = themesSheets.find((obj) => obj.value === savedTheme);
            if (themeObj) {
                console.log(`Loading theme: ${savedTheme}), src:${themeObj.src}`);
                loadSCSS(themeObj.src);
            }
        }
        }, []);
    
    useEffect(() => {
        if ("selectedTheme") {
            localStorage.setItem("selectedTheme", theme);
        }
    }, [theme]);
    
        return (
        <div className="theme_picker">
            <div>
            <h1 className="cabinfont">Themes</h1>
                <div>
                    <br />
                    <select value={theme} onChange={handleThemeChange} className="login">
                        <option value="selectedTheme" >Select Theme</option>
                        {themesSheets.map((theme) => 
                        <option key={theme.key} value={theme.value} 
                        className="nav">{theme.value}
                        </option>)}
                    </select>
                </div>
                <div>
                    <br />
                    <select onChange={handleThemeChange} className="login">
                        <option value="Select"  >Select Component</option>
                        {designElements.map((element) => 
                        <option key={element.key} 
                        value={element.value} className="nav">{element.value}
                        </option>)}
                    </select>
                </div>
            </div>
             <div>  
            <ColorOptionSlider />  
        </div>
    </div>     
      
 );
    
 }
export default Droptheme;



'use client'
export default function ThemePicker() {
    return (
        <div className="container">
        <h1 className="title_theme_picker">Theme Picker - toggled on</h1>
        <div className="theme_selections">
            
            <button className="themebutton" onClick={() => document.body.classList.toggle('dark-theme')}>Toggle Dark Theme</button>
            <button className="themebutton" onClick={() => document.body.classList.toggle('light-theme')}>Toggle Light Theme</button>
            <button className="themebutton" onClick={() => document.body.classList.toggle('green-theme')}>Toggle Green Theme</button>
            <button className="themebutton" onClick={() => document.body.classList.toggle('red-theme')}>Toggle Red Theme</button>
            <button className="themebutton" onClick={() => document.body.classList.toggle('blue-theme')}>Toggle Blue Theme</button>
            <button className="themebutton" onClick={() => document.body.classList.toggle('purple-theme')}>Toggle Purple Theme</button>
            <button className="themebutton" onClick={() => document.body.classList.toggle('pink-theme')}>Toggle Pink Theme</button>
            <button className="themebutton" onClick={() => document.body.classList.toggle('orange-theme')}>Toggle Orange Theme</button>
            <button className="themebutton" onClick={() => document.body.classList.toggle('yellow-theme')}>Toggle Yellow Theme</button>
            <button className="themebutton" onClick={() => document.body.classList.toggle('rainbow-theme')}>Toggle Teal Theme</button>
            <button className="themebutton" onClick={() => document.body.classList.toggle('space-theme')}>Toggle Black Theme</button>
            <button className="themebutton" onClick={() => document.body.classList.toggle('natural-theme')}>Toggle Metal Theme</button>
        </div>
    </div>
    )
}
import React from 'react';
import { useState } from 'react';


// A component that renders a color picker using React Spectrum's ColorSlider.
const ColorOptionSlider = () => {
  // When the color changes, call the onChange prop
    // color picker previews
    const [styles, setStyles] = useState({
      lightness: 50,
      color: 50,
      opacity: 50,
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setStyles((prevStyles) => ({
        ...prevStyles,
        [name]: value,
      }));
    };

    return (  
      
      <div className="colorpickerwrapper">
        <div className="borderpicker">
        <h3 className="colorpickerheading" style={{
          color: `hsl(${styles.color}, ${styles.opacity}%, ${styles.lightness}%)`,
        }}>Color Picker</h3>
          <div className="preview" style={{
          backgroundColor: `hsl(${styles.color}, ${styles.opacity}%, ${styles.lightness}%)`,
        }}>
      </div>
          </div>
          <div>
            <input type="range" name="color" className="rgb" value={styles.color} onChange={handleChange} min="0" max="360" step="1">
            </input>
          </div>
          <div>
            <input type="range" name="opacity" className="alpha" value={styles.opacity} onChange={handleChange} min="0" max="100" step="1">
            </input>
          </div>
          <div>
            <input type="range" name="lightness" className="lightness" value={styles.lightness} onChange={handleChange} min="0" max="100" step="1">
            </input>
          </div>
      </div>
      
    );
  }


export default ColorOptionSlider;
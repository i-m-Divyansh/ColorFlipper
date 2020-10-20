import React, { useState } from 'react'
import './index.css'


const ColorFlipperApp = () => {
  // Colors Array 
  const colors = ["Red", "Green", "#3495eb", "#eb34e2"];

  // Hook
  const [Color, setColor] = useState("#f1f5f8");

  //ColorChanger Function
  const colorChanger = () => {
    var number = Math.floor(Math.random() * colors.length);
    setColor(colors[number]);
  };
  //Return Function
  return (
    <>
      <div style={{ backgroundColor: Color }} className="main text-center">
        <div className="shadow mydiv">
          <h1>Background Color : <span className="text-primary">{Color}</span> </h1>
        </div>

        {/* Button */}
        <button onClick={colorChanger} className="mybtn p-3 mt-4">Changer Color</button>
      </div>
    </>
  )
}

export default ColorFlipperApp;
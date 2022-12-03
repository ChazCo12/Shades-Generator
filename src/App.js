import React, { useState,useEffect } from 'react';

import { FaLightbulb , FaMoon,FaDice} from 'react-icons/fa';

import { hex2rgb } from './utils';

import { rgb2hex } from './utils';

import Lighter from './Lighter';

import Darker from './Darker';

function App() {
  const [hex,setHex] = useState("#00ffff");
  const [lighter,setLighter] = useState(false);
  const [darker,setDarker] = useState(false);
  const [rgb,setRgb] = useState([])


  const randomHexCode = () => {
    const randomRgb = []
    const r = Math.floor(Math.random() * (255 - 0))
    const g = Math.floor(Math.random() * (255 - 0))
    const b = Math.floor(Math.random() * (255 - 0))
    randomRgb.push(r,g,b)
    setRgb(randomRgb)
    const randomHex = rgb2hex(r,g,b)
    setHex(randomHex);

  }


const handleLight = () => {
  if(lighter){
    setLighter(false);
  }else{
    setLighter(true);
    setDarker(false);
  }

  const rgbVal = hex2rgb(hex);
  setRgb(rgbVal);

}

const handleDark = () => {
  if(darker){
    setDarker(false);
  }else{
    setDarker(true);
    setLighter(false);
  }

  const rgbVal = hex2rgb(hex);
  setRgb(rgbVal);

}
  return (
  <body style={{"backgroundColor": hex}}>
    <div className='container'>
      <h2>Shades Generator</h2>
      <section className='inputContainer'>
        <div className="colourBox" style={{"backgroundColor": hex}}></div>
        <div className="formBox">
          <div className='inputBox'>
            <input 
              type="text" 
              name='hexCode'
              value={hex}
              onChange={(e) => setHex(e.target.value)}
              placeholder="Enter 6-digit Hex Value"
            />
        </div>
        <div className="buttonBox">
          <button type='button' className='toggleButton lightButton' onClick={() => handleLight()}>Lighter <FaLightbulb className='icon'></FaLightbulb></button>
          <button type='button' className='toggleButton darkButton' onClick={() => handleDark()}>Darker <FaMoon className='icon'></FaMoon></button>
          <button type='button' className='random' onClick={() => randomHexCode()}><FaDice className='dice'></FaDice></button>
        </div>
      </div>
      </section>
      <div className='colourGrid'>
        {lighter ? <Lighter props={rgb}/> : null}
        {darker ? <Darker props={rgb}/> : null}
      </div>
    </div>
  </body>
  )
}

export default App

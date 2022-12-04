import React, { useState,useEffect } from 'react';

import {FaDice} from 'react-icons/fa';

import { hex2rgb } from './utils';

import { rgb2hex } from './utils';

import { arrayToString } from './utils';

import Display from './Display';

function App() {
  const [hex,setHex] = useState("");
  const [rgb,setRgb] = useState([])
  const [rgbBackground,setRgbBackground] = useState("")
  const [button,setButton] = useState(false)

  const randomHexCode = () => {
    const randomRgb = []
    const r = Math.floor(Math.random() * (255 - 0))
    const g = Math.floor(Math.random() * (255 - 0))
    const b = Math.floor(Math.random() * (255 - 0))
    randomRgb.push(r,g,b)
    const rgbString = arrayToString(randomRgb)
    setRgbBackground(rgbString)
    setRgb(randomRgb)
    const randomHex = rgb2hex(r,g,b)
    setHex(randomHex);
    setButton(true)
  }

  const handleSubmit = () => {
    const rgbVal = hex2rgb(hex);
    const rgbString = arrayToString(rgbVal)
    setRgbBackground(rgbString)
    setRgb(rgbVal);
  }

  useEffect(() => {
    randomHexCode()
  },[])

  return <>
  <body style={{"backgroundColor": rgbBackground}}>
    <div className='container'>
      <h2>Shades Generator</h2>
      <section className='inputContainer'>
        <div className="colourBox" style={{"backgroundColor": rgbBackground}}></div>
        <div className="formBox">
          <div className='inputBox'>
            <input 
              type="text" 
              name='hexCode'
              value={hex}
              onChange={(e) => setHex(e.target.value)}
              placeholder="Enter 6-digit Hex Value"
            />
            <button type='submit' className='toggleButton' onClick={() => handleSubmit()}>Search</button>
        </div>
        <div className="buttonBox">
          <button type='button' className='random' onClick={() => randomHexCode()}><FaDice className='dice'></FaDice></button>
        </div>
      </div>
      </section>
      <div className='colourGrid'>
        {button ? <Display props={rgb}></Display> : null}
      </div>
    </div>
  </body>
  </>
}

export default App

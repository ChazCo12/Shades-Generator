import React, { useState } from 'react';

import { FaLightbulb , FaMoon} from 'react-icons/fa';

import { hex2rgb } from './utils';

import Lighter from './Lighter';

import Darker from './Darker';

function App() {
  const [hex,setHex] = useState("#000000");
  const [lighter,setLighter] = useState(false);
  const [darker,setDarker] = useState(false);
  const [rgb,setRgb] = useState([])
  const [toggled,setToggled] = useState(false)


  const handleSubmit = (e) => {
    setToggled(!toggled);
    e.preventDefault();
    const rgbVal = hex2rgb(hex);
    setRgb(rgbVal);
    setToggled(!toggled)
  }

  return (<>
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
            <button type='submit' className='btnSearch' onClick={handleSubmit}>Go</button>
        </div>
        <div className="buttonBox">
          <button type='button' className='toggleButton lightButton' onClick={() => setLighter(!lighter)}>Lighter <FaLightbulb className='icon'></FaLightbulb></button>
          <button type='button' className='toggleButton darkButton' onClick={() => setDarker(!darker)}>Darker <FaMoon className='icon'></FaMoon></button>
        </div>
      </div>
      </section>
      <div className='colourGrid'>
        {toggled ? <Darker props={rgb}/>  : null}
      </div>
    </div>
  </>
  )
}

export default App

import React, { useState } from 'react';

import { FaLightbulb , FaMoon} from 'react-icons/fa';

import { hex2rgb } from './utils';

import Lighter from './Lighter';

import Darker from './Darker';

function App() {
  const [colour,setColour] = useState("#000000");
  const [lighter,setLighter] = useState(false);
  const [darker,setDarker] = useState(true)
  const [rgb,setRgb] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault();
    const rgbVal = hex2rgb(colour);
    setRgb(rgbVal)
  }

  return (<>
    <div className='container'>
      <h2>Shades Generator</h2>
      <section className='inputContainer'>
        <div className="colourBox" style={{"backgroundColor": colour}}></div>
        <div className="formBox">
          <div className='inputBox'>
            <input 
              type="text" 
              name='hexCode'
              value={colour}
              onChange={(e) => setColour(e.target.value)}
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
        {darker ? <Darker props={rgb}/> : <Lighter props={rgb}/>}
      </div>
    </div>
  </>
  )
}

export default App

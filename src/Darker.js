import React,{useState,useEffect} from 'react'

import { rgb2hex } from './utils';


export default function Darker({props}) {
    const baseColour = props;
    const shadeArr = [];
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 500)
            return () => clearTimeout(timeout)
        }, [alert])


    const generateShades = (rgbValues) => {
        const darkerShade = rgbValues.map((value,index) => {
          if(index === 0){
            return value - (Math.floor(baseColour[0]/10))
          }
          if(index === 1){
            return value - (Math.floor(baseColour[1]/10))
          }
          if(index === 2){
            return value - (Math.floor(baseColour[2]/10))
          }
        })

        if(shadeArr.length >= 10){

        }else{
            const hexVal = rgb2hex(darkerShade[0],darkerShade[1],darkerShade[2])
            shadeArr.push(hexVal);
            generateShades(darkerShade);
        }

    }
    
    generateShades(baseColour);
    return<>
        {shadeArr.map((shade,index) => {
            console.log(shade)
            return <div key={index} 
            className='colourBlock' 
            style={{"backgroundColor": shade}}
            onClick={() => {
                setAlert(true)
                navigator.clipboard.writeText(shade)
            }}
            >
            <p className='displayHex'>{shade}</p>
            {alert ? <p>Copied</p> : null}
            </div>
        })}
    </>
}

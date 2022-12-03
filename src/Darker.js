import React,{useState} from 'react'



export default function Darker({props}) {
    const baseColour = props;
    const shadeArr = [];


    const rgb2hex = (r,g,b) => {
        return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    const componentToHex = (c) => {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }


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

        if(darkerShade[0] < 0 || darkerShade[1] < 0 || darkerShade[2] < 0){
            console.log("finished");
            console.log(shadeArr)
        }else{
            const hexVal = rgb2hex(darkerShade[0],darkerShade[1],darkerShade[2])
            shadeArr.push(hexVal);
            generateShades(darkerShade);
        }

    }
    
    generateShades(baseColour);
    return<>
        {shadeArr.map((shade,index) => {
          return <div key={index} className='colourBlock' style={{"backgroundColor": shade}}></div>
        })}
    </>
}

import React,{useState,useEffect} from 'react';

import { rgb2hex } from './utils';

import SingleColour from './SingleColour';

export default function Display({props}) {
    const baseColour = props;
    const shadeArr = [];




    const generateLighterShades = (rgbValues) => {
        const darkerShade = rgbValues.map((value,index) => {
          if(index === 0){
            return value + (Math.floor((255-baseColour[0])/10))
          }
          if(index === 1){
            return value + (Math.floor((255-baseColour[1])/10))
          }
          if(index === 2){
            return value + (Math.floor((255-baseColour[2])/10))
          }
        })

        if(shadeArr.length >= 10){
        }else{
            const hexVal = rgb2hex(darkerShade[0],darkerShade[1],darkerShade[2])
            shadeArr.push(hexVal);
            generateLighterShades(darkerShade);
        }

    }    

    const generateDarkerShades = (rgbValues) => {
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

        if(shadeArr.length >= 20){
            console.log("finished")
            console.log(shadeArr)
        }else{
            const hexVal = rgb2hex(darkerShade[0],darkerShade[1],darkerShade[2])
            shadeArr.push(hexVal);
            generateDarkerShades(darkerShade);
        }

    }
    generateLighterShades(baseColour);
    generateDarkerShades(baseColour);
    
    return<>
        {shadeArr.map((shade,index) => {
            return <SingleColour shade={shade}/>
        })}
    </>
}

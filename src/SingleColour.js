
import React,{useState,useEffect} from 'react'

export default function SingleColour({shade}) {
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 500)
            return () => clearTimeout(timeout)
        }, [alert])


    return <div 
    className='colourBlock' 
    style={{"backgroundColor": shade}}
    onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(shade)
    }}
    >
    <p className='displayHex'>{shade}</p>
    {alert ? <p className='copy'>Copied</p> : null}
    </div>
}

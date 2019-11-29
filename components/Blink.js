import React, { useEffect, useState } from 'react'
import SaySomething from './SaySomething'

const Blink = () => {
    const [blinkState, setBlinkState] = useState(false)

    useEffect(() => {
        setInterval(() => {
            blinkState == false ? setBlinkState(true) : setBlinkState(false)
        }, 1500)
    },[])
    
    if (!blinkState) 
        return null;

    return (
        <Text>{ props.text }</Text>
    );
}

export default Blink
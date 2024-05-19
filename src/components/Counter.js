import React, { useState } from 'react'
import { useEffect } from 'react';

const Counter = ({count, number}) => {
 
    const [counter, setCounter]= useState(0);


    useEffect(() => {

        let interval = setInterval(() => {

            setCounter ( prevCount => prevCount+ number)

    }, 10)

    if(counter === count )
        clearInterval(interval);

    return () => clearInterval(interval);
    },[counter])

    return counter
    
}

export default Counter
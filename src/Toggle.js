import React, { useState } from 'react'; 
import ReactDOM  from  'react-dom'; 

const Toggle = () => {
    const [currentValue , setCurrentValue ] = useState(true); 

    const clickHandler = () =>{
        if(  currentValue){
            setCurrentValue(false); 
        }
        else{
            setCurrentValue(true);
        }
            
    } 

    return (

        <button onClick={clickHandler}>  {currentValue?'On':'Off' }  </button>
    ) ; 
}; 

export default Toggle; 
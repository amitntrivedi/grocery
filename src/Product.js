import React, { useState } from 'react'; 
import { button}  from  'react-dom'; 

const Product = (props) => {
    
    const plus=( )=>{
//        console.log('plus clicked for ' + props.name +" "+ props.myIndex); 
        props.voteHandler('UP');

    }; 
   

    const minus=( )=>{
        props.voteHandler('DOWN');
    }; 
    return (
        <div>
          <span>  {props.name }</span>  - 
          <span> votes: {props.vote }</span>
          <button onClick={plus}>+</button> {" "}
          <button onClick={ minus  }>-</button>
          </div>
    ) ; 
}; 

export default Product; 
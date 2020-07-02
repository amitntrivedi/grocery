import React, { useState } from 'react'; 
import ReactDOM  from  'react-dom'; 
import Product from './Product'; 

const Grocery = (props) => {
    const [products , setProducts ] = useState(props.products); 
    const onVote =(dir, index) =>{
        let newProducts = [...products]; 
        index==="UP" ?  newProducts[dir].vote++ : newProducts[dir].vote--  ; 
        setProducts(newProducts); 
    }

    return (

        <ul>
            {products.map( (p,index) => <li > <Product 
            name={p.name}  
            vote={p.vote} 
            voteHandler ={ onVote.bind(this,index) }/> </li> )}

        </ul>
    ) ; 
}; 

export default Grocery; 
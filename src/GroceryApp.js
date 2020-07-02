import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product'

      const GroceryApp = (props) => {
        let [products, setProducts] = React.useState(props.products);
        
      
        const onVote = (dir, index) => {
          console.log("onVote index " + index);
          if (dir === 'plus')
          {
          setProducts(...products, [products[index].name, products[index].votes++]); 
          console.log("Upvoted"); 
      }
          else
          {
      //    setProducts(...products, [products[index].name, products[index].votes--]); 
          console.log("Downvoted")
          }
        };

        return (
            <ul>
               { products.map( (p, index) => 
               <li> <Product 
                name={p.name} 
                votes={p.votes} 
        
                pIndex={index } 
                onVote={ onVote.bind(index) }
                
                /> </li> )} 
            </ul>
          );
    }
export default GroceryApp; 
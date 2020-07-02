import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toogle from './Toggle'; 
import Grocery from './Grocery'; 
import TextInputWithFocusButton from './HookExample';


const clickEventHandler=()=>  {
  console.log('The link was clicked.');
    return ; 

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <button onClick={clickEventHandler} >Click me please</button>
          <Toogle  >       </Toogle>
          <TextInputWithFocusButton />
          <Grocery
              products={[
                  {name:'orange', vote:0},
                  {name:'banana', vote:0}

              ]}

          
          >       </Grocery>
        
      </header>
    </div>
  );
}

export default App;

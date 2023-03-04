import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

let targetNumber = createTargetNumber();
function App() {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [targetNumber, setTargetNumber] = useState(createTargetNumber());

  function add3(){
    let result = currentNumber + 3;
    setCurrentNumber(result);
  }

  function double(){
    let result = currentNumber * 2;
    setCurrentNumber(result);
  }

  function subtract(){
    let result = currentNumber - 2;
    setCurrentNumber(result);
  }

  function reset(){
    let result = 0;
    setCurrentNumber(result);
    let newTargetNumber = createTargetNumber();
    setTargetNumber(newTargetNumber);
    
  }

  if (currentNumber === targetNumber){
    return(<div>
      <p>You Win!</p>
      <button onClick={reset}>Reset Game!</button>
    </div>)
  }

  return (
    <div>
      <p>Numbers Game</p>
      <p>Target Number: {targetNumber}</p>
      <p>Current Number: {currentNumber}</p>
      <button onClick={add3}>Add 3 </button>
      <button onClick={subtract}>Subtract 2</button>
      <button onClick={double}>Double</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

function createTargetNumber(){
  return Math.round(Math.random() * 10)
  
}


export default App

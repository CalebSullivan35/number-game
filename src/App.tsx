import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [currentNumber, setCurrentNumber] = useState(0)
  let targetNumber = 5 

  function add3(){
    let result = currentNumber + 3;
    setCurrentNumber(result);
  }


  return (
    <div>
      <p>Numbers Game</p>
      <p>Target Number {targetNumber}</p>
      <p>Current Number {currentNumber}</p>
      <button onClick={add3}>Add 3 </button>
      <button>Subtract</button>
      <button>Mult by 5</button>

    </div>
  )
}

export default App

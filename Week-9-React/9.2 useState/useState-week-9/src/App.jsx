import { useState } from 'react';
import './App.css'

function App() {

  return  <div>
    <h1>Hello</h1>
    <Counter></Counter>
  </div>

}
  function Counter(){

    const [count, setCount] = useState(0);

    function increaseCount(){
      setCount (count + 1);

    }

    function decreaseCount(){
      setCount (count - 1);
    }

    function resetCount(){
      setCount (0);
    }

    return <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}> Descrease Count</button>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  }

export default App

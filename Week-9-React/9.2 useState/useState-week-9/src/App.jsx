import { useEffect, useState } from 'react';
import './App.css'



/*

// Conditional Rendering

function App() {

let [counterVisible, setCounterVisible] = useState(true);

  useEffect(function() {
    setInterval(function() {
      setCounterVisible(counterVisible => !counterVisible)
    }, 5000);
  }, [])

  return <div> 
    <h1>Hello</h1>
    { counterVisible ? <Counter></Counter> : null}
    <h1>Hi</h1>
  </div>

}

// Mounting, Re-rendering, unmounting

// *** Mounting and unmounting runs when depencency array is empty ***

// conditional rendering
  function Counter(){
    const [count, setCount] = useState(0);

    // For Mounting we use useEffect

    // Guard our setInterval for re-renders

    useEffect(function() {
      console.log("On Mounting logic")
       let clock = setInterval(function() {
        console.log("from insdie the setInterval")
        setCount(count => count + 1);
        // setCount(function(count){
        //   return count + 1;
      }, 1000)

      // unmounting logic 
      return function() {
        console.log("On Un-mounting logic")
        clearInterval(clock)  // this is called unmounting
      }
       
    }, [])
    ; // dependency array, cleanup(unmounting), fetch inside useEffect
  
    function increaseCount(){
      setCount (count + 1);
    }

    // function decreaseCount(){
    //   setCount (count - 1);
    // }

    // function resetCount(){
    //   setCount (0);
    // }

    return <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase Count</button>
      {<button onClick={decreaseCount}> Descrease Count</button>
      <button onClick={resetCount}>Reset Count</button>} 
      </div>
  } 

export default App

*/


// *** Re-Learning Cleanup, useEffect, and Dependency Array ***

function App() {

  const [count, setCount] = useState(0);

  function increase(){
    setCount( c => c +1);
  }

  return <div> 
    <Counter count = {count}/>
    <button onClick={increase}>Increase Count</button>
  </div>

}

// mounting, re-rendering, unmounting

function Counter(props){

  useEffect( function() {
    console.log("mount")

    return function() {
      console.log("unmount");
    }
  }, []);

  useEffect(function() {
    console.log("Count has changed")
  }, [props.count])

  return <div>
    Counter {props.count}
  </div>
}
export default App
import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*

function App() {

  return <div>
     <LightBulb/>
  </div>
}

function LightBulb(){
  const [bulbOn, setBulbOn] = useState(true);

  // BulbOn is a prop to the BulbState component
  // setBulbOn is the prop to the ToggleBulbState
  return <div>
    <BulbState bulbOn={bulbOn}/>
    <ToggleBulbState setBulbOn={setBulbOn}/>
  </div>
}

function BulbState({bulbOn}) {
  return <div>
    {bulbOn ? "Bulb On" : "Bulb Off "}
  </div>
}

function ToggleBulbState({setBulbOn}) {

  function toggle() {
    setBulbOn(currentState => !currentState)
  }
  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}


export default App

*/


// ********* Context API ********

// you will define context outside the function

const BulbContext = createContext();

export function BulbProvider({children}) {
  const [bulbOn, setBulbOn] = useState(true);

  return <BulbContext.Provider value={{
    bulbOn: bulbOn,
    setBulbOn:setBulbOn
  }}>
    {children}
  </BulbContext.Provider>
}

function App() {
  // What we want to send down? we will store value in objects
  return <div>
    <BulbProvider>
    <Light/>
    </BulbProvider>
  </div>
}

function Light(){

  // BulbOn is a prop to the BulbState component
  // setBulbOn is the prop to the ToggleBulbState
  return <div>
    <LightBulb/>
    <LightSwitch/>
  </div>
}

function LightBulb() {
  const {bulbOn} = useContext(BulbContext);
  return <div>
    {bulbOn ? "Bulb On" : "Bulb Off "}
  </div>
}

function LightSwitch() {
  const {bulbOn, setBulbOn} = useContext(BulbContext);

  function toggle() {
    setBulbOn(currentState => !currentState)
  }
  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}


export default App
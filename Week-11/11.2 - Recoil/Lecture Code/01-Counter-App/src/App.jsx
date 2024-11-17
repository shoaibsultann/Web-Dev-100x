//Bad code using useState 

import { useState } from 'react' // Importing useState hook from React
import './App.css' // Importing CSS file for styling

function App() {
  // App component serves as the root of the application
  return (
    <>
      <Counter /> {/* Rendering the Counter component */}
    </>
  )
}

// Counter Component
function Counter() {
  const [count, setCount] = useState(0); // useState hook to manage the count state
  return (
    <div>
      <CurrentCount count={count} /> {/* Displaying the current count */}
      <Increase setCount={setCount} /> {/* Passing setCount function as a prop to Increase */}
      <Decrease setCount={setCount} /> {/* Passing setCount function as a prop to Decrease */}
    </div>
  )
}

function CurrentCount({count}) {
  return <div>
    {count}
  </div>
}

// Decrease Component
function Decrease({ setCount }) {
  // Using destructuring to access setCount from props
  function decrease() {
    setCount(c => c - 1); // Decreasing the count by 1
  }
  return (
    <div>
      <button onClick={decrease}>Decrease</button> {/* Button to trigger decrease */}
    </div>
  )
}

// Increase Component
function Increase({ setCount }) {
  // Using destructuring to access setCount from props
  function increase() {
    setCount(c => c + 1); // Increasing the count by 1
  }
  return (
    <div>
      <button onClick={increase}>Increase</button> {/* Button to trigger increase */}
    </div>
  )
}

export default App; // Exporting the App component for use in other files

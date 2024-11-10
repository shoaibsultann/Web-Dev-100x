import { useState } from 'react';
import reactLogo from './assets/react.svg';  // Importing logo for possible display (not used in the code below)
import viteLogo from '/vite.svg';            // Importing another logo (not used here)
import './App.css';                           // Importing CSS file for styling

// Custom Hook to manage counter state and actions
function useCounter() {
  // State for keeping track of the count value
  const [count, setCount] = useState(0);

  // Function to increase the count by 1
  function increaseCount() {
    setCount(c => c + 1);
  }

  // Function to decrease the count by 1
  function decreaseCount() {
    setCount(c => c - 1);
  }
  
  // Return the count and functions to interact with it
  return {
    count: count,
    increaseCount: increaseCount,
    decreaseCount: decreaseCount
  };
}

// Counter component to display the current count and buttons to modify it
function Counter() {
  // Destructuring count and functions from the useCounter custom hook
  const { count, increaseCount, decreaseCount } = useCounter();

  // Render buttons to increase or decrease the count
  return (
    <div>
      {/* Button to increase the count, displays current count */}
      <button onClick={increaseCount}>Increase: {count}</button><br />
      
      {/* Button to decrease the count */}
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

// Main App component
function App() {
  // Rendering the Counter component within the App
  return (
    <div>
      <Counter />
    </div>
  );
}


export default App; // Exporting App component as the default export

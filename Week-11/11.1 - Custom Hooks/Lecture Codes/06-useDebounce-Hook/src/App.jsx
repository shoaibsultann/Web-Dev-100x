// Importing React hooks and a CSS file for styling
import { useEffect, useRef, useState } from "react";
import "./App.css";


/*

// Example 1: A custom hook for debouncing using a timer
function useDebounce(originalFn) {
  // Ref to store the timer ID
  const currentClock = useRef();

  // Function returned by the hook
  const fn = () => {
    // Clear the previous timer (if any) before starting a new one
    clearTimeout(currentClock.current);
    // Start a new timer, calling the original function after 200ms
    currentClock.current = setTimeout(originalFn, 200);
  };

  // Return the debounced function
  return fn;
}

function App() {
  // Function to simulate sending data to a backend API
  function sendDataToBackend() {
    fetch("api.amazon.com/search/");
  }

  // Use the custom debounce hook to create a debounced version of sendDataToBackend
  const debouncedFn = useDebounce(sendDataToBackend);

  return (
  //Input field that triggers the debounced function on change  
  <>
      <input type="text" onChange={debouncedFn}></input>
    </>
  );
}

// Exporting the first App component
export default App;

*/

// ***********************************END*******************************

// Example 2: A different implementation of a debounce hook

// Custom debounce hook that returns a debounced value
const useDebounce = (value, delay) => {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  // Effect to update the debounced value after the specified delay
  useEffect(() => {
    // Start a timer to update the value after the delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear the timer if the effect re-runs
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Re-run the effect whenever value or delay changes

  // Return the debounced value
  return debouncedValue;
};

function App() {
  // State to track the input field value
  const [inputVal, setInputVal] = useState("");

  // Use the debounce hook to get a debounced version of the input value
  const debouncedValue = useDebounce(inputVal, 200);

  // Function to handle input field changes
  function change(e) {
    setInputVal(e.target.value); // Update the input value in state
  }

  // Effect to perform an "expensive operation" whenever the debounced value changes
  useEffect(() => {
    console.log("Expensive operation");
  }, [debouncedValue]); // Only runs when the debounced value changes

  return (
    <>
      {/* Input field that updates state on change */}
      <input type="text" onChange={change}></input>
    </>
  );
}

// Exporting the second App component
export default App;

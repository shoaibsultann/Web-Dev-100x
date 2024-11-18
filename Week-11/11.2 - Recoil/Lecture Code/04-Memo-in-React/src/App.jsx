import { useState, useEffect, memo } from 'react'; // Import React hooks and memo for optimization
import './App.css'; // Importing styles

function App() {
  // Main App component, rendering the Counter component
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  // State to keep track of the count
  const [count, setCount] = useState(0);

  // useEffect to set up an interval that increments the count every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1); // Increment count by 1
    }, 3000);

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, []);

  return (
    <div>
      <CurrentCount /> {/* Displays the current count */}
      <Increase /> {/* Button to increase count */}
      <Decrease /> {/* Button to decrease count */}
    </div>
  );
}

// Memoized component to prevent unnecessary re-renders
const CurrentCount = memo(function () {
  return (
    <div>
      1 {/* Placeholder value, does not yet display the actual count */}
    </div>
  );
});

// Memoized component for the decrease button
const Decrease = memo(function () {
  function decrease() {
    // Placeholder for logic to decrease count
  }
  return (
    <div>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
});

// Memoized component for the increase button
const Increase = memo(function () {
  function increase() {
    // Placeholder for logic to increase count
  }
  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  );
});

export default App; // Export the main App component

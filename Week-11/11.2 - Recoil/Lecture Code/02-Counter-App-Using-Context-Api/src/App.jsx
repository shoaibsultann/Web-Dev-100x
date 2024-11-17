import React, { createContext, useContext, useState } from 'react';

// Creating a Context for the counter state
const CountContext = createContext();

// Context Provider Component
function CountContextProvider({ children }) {
  // Initializing state for the counter
  const [count, setCount] = useState(0);

  // Providing the state and its updater function to the children components
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

// Parent component that wraps its children with the CountContextProvider
function Parent() {
  return (
    <CountContextProvider>
      {/* Rendering child components */}
      <Incrase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

// Component to decrease the count
function Decrease() {
  // Using the useContext hook to access count and setCount from the context
  const { count, setCount } = useContext(CountContext);

  // Button to decrease the count by 1 when clicked
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

// Component to increase the count
function Incrase() {
  // Using the useContext hook to access count and setCount from the context
  const { count, setCount } = useContext(CountContext);

  // Button to increase the count by 1 when clicked
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

// Component to display the current count
function Value() {
  // Using the useContext hook to access the count from the context
  const { count } = useContext(CountContext);

  // Displaying the current count in a paragraph
  return <p>Count: {count}</p>;
}

// Root App Component
const App = () => {
  return (
    <div>
      {/* Rendering the Parent component */}
      <Parent />
    </div>
  );
};

export default App; // Exporting the App component for use in other files

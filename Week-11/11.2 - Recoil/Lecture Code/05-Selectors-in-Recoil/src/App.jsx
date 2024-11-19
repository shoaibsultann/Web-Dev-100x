import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'; 
// Import RecoilRoot (to initialize Recoil), useRecoilValue (to read state), and useSetRecoilState (to update state)
import { counterAtom, evenSelector } from './store/selector/counter'; 
// Import the atom and selector defined in the store
import './App.css'; // Import CSS for styling

function App() {
  // Main application component
  return (
    <div>
      <RecoilRoot>
        {/* RecoilRoot initializes Recoil state for the application */}
        <Buttons /> {/* Component to control state (increase/decrease) */}
        <Counter /> {/* Component to display the current counter value */}
        <IsEven /> {/* Component to display whether the counter is even or odd */}
      </RecoilRoot>
    </div>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom); 
  // Hook to update the counter state (counterAtom)

  // Function to increase the counter by 2
  function increase() {
    setCount(c => c + 2); // Update counterAtom by adding 2 to the current value
  }

  // Function to decrease the counter by 1
  function decrease() {
    setCount(c => c - 1); // Update counterAtom by subtracting 1 from the current value
  }

  // Render two buttons for increasing and decreasing the counter
  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

function Counter() {
  const count = useRecoilValue(counterAtom); 
  // Hook to read the current value of counterAtom

  // Render the current counter value
  return <div>{count}</div>;
}

function IsEven() {
  const even = useRecoilValue(evenSelector); 
  // Hook to read the derived state from the evenSelector

  // Render whether the counter is even or odd
  return <div>{even ? "Even" : "ODD"}</div>;
}

export default App; 
// Export the App component as the default export

import './App.css'; // Importing the CSS file for styling
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'; // Importing RecoilRoot and hooks
import { counterAtom } from './store/atoms/counter'; // Importing the atom for state management

// Root App Component
function App() {
  return (
    // Wrapping the application with RecoilRoot to provide the Recoil state
    <RecoilRoot>
      <Counter /> {/* Rendering the Counter component */}
    </RecoilRoot>
  );
}

// Counter Component
function Counter() {
  return (
    <div>
      {/* Rendering the CurrentCount, Increase, and Decrease components */}
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}

// Component to display the current count
function CurrentCount() {
  const count = useRecoilValue(counterAtom); // Reading the current value of the counterAtom
  return <div>{count}</div>; // Displaying the current count
}

// Component to decrease the count
function Decrease() {
  const setCount = useSetRecoilState(counterAtom); // Getting the function to update the counterAtom

  function decrease() {
    setCount(c => c - 1); // Decreasing the count by 1
  }

  return (
    <div>
      <button onClick={decrease}>Decrease 😥</button> {/* Button to trigger the decrease function */}
    </div>
  );
}

// Component to increase the count
function Increase() {
  const setCount = useSetRecoilState(counterAtom); // Getting the function to update the counterAtom

  function increase() {
    setCount(c => c + 1); // Increasing the count by 1
  }

  return (
    <div>
      <button onClick={increase}>Increase 😍</button> {/* Button to trigger the increase function */}
    </div>
  );
}

export default App; // Exporting the App component as the default export

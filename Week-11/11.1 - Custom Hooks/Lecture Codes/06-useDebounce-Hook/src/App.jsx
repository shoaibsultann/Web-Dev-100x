import { useEffect, useRef, useState } from "react";
import "./App.css";

// One Way of using a deBounce hook

/*
function useDebounce(originalFn) {
    const currentClock = useRef();

    const fn = () => {
      clearTimeout(currentClock.current);
      currentClock.current = setTimeout(originalFn, 200);
    }
    return fn
}

function App() {
  function sendDataToBackend() {
    fetch("api.amazon.com/search/");
  }

  const debouncedFn = useDebounce(sendDataToBackend);

  return (
    <>
      <input type="text" onChange={debouncedFn}>
      </input>
    </>
  );
}

export default App;

*/


//Another way of using a deBounce hook

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
      const handler = setTimeout(() => {
          setDebouncedValue(value, 200);
      }, delay);

      return () => {
          clearTimeout(handler);
      };
  }, [value, delay]);

  return debouncedValue;
};


function App() {

  const [inputVal, setInputVal] = useState("");
  const debouncedValue = useDebounce(inputVal, 200)

  function change(e) {
    setInputVal(e.target.value)
  }

  useEffect(() =>{
    console.log("Expensive operation")
  }, [debouncedValue])

  return (
    <>
      <input type="text" onChange={change}></input>
    </>
  );
}


export default App;
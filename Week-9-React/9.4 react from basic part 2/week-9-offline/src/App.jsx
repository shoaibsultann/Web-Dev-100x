// import { useState } from 'react'
import { useRef, useState } from 'react';
import './App.css'
import { PostComponent } from "./post";

/*
function App() {
  
  return (
     <ToggleMessage/>
  )
}

const ToggleMessage = () => {
  let [notificationCount, setNotificationCount] = useState(0);

  console.log("Re-render");
  function increment() {
    setNotificationCount(notificationCount +1);
  }

  return (
    <div>
      <button onClick={increment}>Notification Increase</button>
      {notificationCount}
    </div>
  );
};

export default App

*/



// PART # 2

/*
function App() { 

  const [posts, setPost] = useState([]);

  const postComponents = posts.map (post => <PostComponent
    name = {post.name}
    subtitle = {post.subtitle}
    time = {post.time}
    image = {post.image}
    description = {post.description}
  />)

  function addPost() {
    setPost([...posts, {
      name: "Shoaib",
      subtitle: "1000 Followers",
      time: "2m ago",
      image: "src/assets/photo.jpg",
      description: "What to know how to win big? Check out how these folks won $6000 in bounties"
    }])
  };

  return (
    <div style={{
      background: "#dfe6e9", height: "100vh"
    }}>

      <button onClick={addPost}>Add Post</button>
      <div style={{display:"flex", justifyContent:"center"}}>
        <div>
          {postComponents}
        </div>
        
      </div>

    </div>
  )
};

export default App

*/


/*
  function App() {
    return <div>
      HI THERE
      <Greeting name={"Harkirat"}/>
    </div>
  }

  function Greeting(props) {
    return <div>
      Hi There {props.name}
    </div>

  }

  export default App

  
*/



//            ********** CARD COMPONENT **********



/*

import React from 'react';

const Card = ({ children }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            margin: '10px',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
        }}>
            {children}
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Card>
                <h2>Card Title</h2>
                <p>This is some content inside the card.</p>
            </Card>
            <Card>
                <h2>Another Card</h2>
                <p>This card has different content!</p>
            </Card>
        </div>
    );
};

export default App;
*/


//         PART 8 # LISTS & ARRAYS   
//  ********** CARD COMPONENT **********



/*
function App() {
  const inputRef = useRef();

  function focusOnInput() {
    // document.getElementById("name").focus()
    inputRef.current.focus();
  }

  return <div>
    Sign up <br /> <br />
    <input ref={inputRef} id="name" type={"text"}></input> <br />
    <br />
    <input type={"text"}></input> <br />
     <br />
    <button onClick={focusOnInput}>Submit</button>
  </div>
}

export default App
*/



//         PART 8 # = useRef
//  ********** Building A Clock **********



function Stopwatch() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null); // Use state to store the interval ID

  const startTimer = () => {
    if (intervalId !== null) return; // Already running, do nothing

    const newIntervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    
    // Store the interval ID in state (triggers re-render)
    setIntervalId(newIntervalId);
  };

  const stopTimer = () => {
    clearInterval(intervalId);

    // Clear the interval ID in state (triggers re-render)
    setIntervalId(null);
  };

  return (
    <div>
      <h1>Timer: {time}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Stopwatch;

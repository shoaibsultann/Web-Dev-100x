import { useState } from 'react'
import './App.css'

/*
function App() {
  return (
    <div style={{ background:"#dfe6e9" , height: "100vh"}}>
      <div style={{
        display:"flex",
        justifyContent:"center"}}>
      <div>
      <div>
        <br />
      <PostComponent/>
      <br />
      </div>
      <div>
      <PostComponent/>
      <br />
      </div>
      <PostComponent/>
      </div>
      </div>
    </div>
  )
}

function PostComponent() {
  return <div style={{
    width:200,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor:"grey",
    borderWidth: 1,
    color:"black",
    padding:20
  }}>
  <div style = {{
    display:"flex"
    }}>
    <img src={"/src/assets/logo.jpg"} alt={"google image"}
    style={{
      width:30,
      height: 30,
      borderRadius: 20
    }} />
    <div style={{fontSize: 12, marginLeft:10}}>
      <b>
        100xdevs
      </b> 
      <div>23,888 followers</div>
      <div>12m</div>
    </div>
  </div>
    <div style={{
      fontSize: 12,
    }}>
      What to know how to win big? Check out how these folks won $6000 in bounties
    </div>
  </div>
}

export default App

*/


function App() {
  return (
    <div style={{
      background: "dfe6e9",
      height: "100vh"
    }}>
      <ToggleMessage/>
    </div>
  )
}

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false); //defing a state variable
  
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Message
      </button>
      {isVisible && <p>This message is conditionally rendered!</p>}
    </div>
  );
};

export default App

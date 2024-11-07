import { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

/*
function App() {

  return <div>

    <BrowserRouter>
    <Link to="/"> Allen </Link>
    |
    <Link to="/neet/online-coaching-class-11"> Class 11 </Link> 
    |
    <Link to="/neet/online-coaching-class-12"> Class 12 </Link>
    
     <Routes>
       <Route path="/neet/online-coaching-class-11" element={<Class11Program/>}/>
       <Route path="/neet/online-coaching-class-12" element={<Class12Program/>}/>
       <Route path="/" element={<Landing/>}/>
      </Routes>
   </BrowserRouter>
  </div>
}

function Landing() {
  return <div>
   <h1>Welcome to Neet Landing Page</h1>
  </div>
}

function Class11Program() {
  return <div>
    <h1>Welcome to Class 11 Program</h1>
  </div>
}

function Class12Program() {
  return <div>
    <h1>Welcome to Class 12 Program</h1>
  </div>
}

export default App
*/


// ************ PART 2 *************
// ************ useRef *************

function App() {
return <div>
  <input type="text" />
  <input type="text" />
  <button>Submit</button>
</div>

}

export default App
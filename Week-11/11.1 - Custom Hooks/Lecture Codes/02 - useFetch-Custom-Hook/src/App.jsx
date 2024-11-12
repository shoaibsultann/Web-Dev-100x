import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFetch } from './hooks/useFetch';


// function App() {
//   const postTitle = usePostTitle();

//   return (
//     <div>
//       {postTitle}
//     </div>
//   )
// }

// export default App

function App() {
  const[currentPost, setCurrentPost] = useState(1);
  const {finalData, loading} = useFetch("https://jsonplaceholder.typicode.com/posts/1" + currentPost);
  // these are the things libraries like react, SWR, tanstack query provide us
  // either we use these libraries or write our own function like this, we did
   
  if(loading) {
    return <div>
      Loading.....
    </div>
  }
  return (
    <div>
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
      {JSON.stringify(finalData)}
    </div>
  )
}

export default App


import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFetch, usePostTitle } from './hooks/useFetch';


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
  const {finalData} = useFetch("https://jsonplaceholder.typicode.com/posts/2");
  // these are the things libraries like react, SWR, tanstack query provide us
  // either we use these libraries or write our own function like this, we did
   
  return (
    <div>
      {JSON.stringify(finalData)}
    </div>
  )
}

export default App


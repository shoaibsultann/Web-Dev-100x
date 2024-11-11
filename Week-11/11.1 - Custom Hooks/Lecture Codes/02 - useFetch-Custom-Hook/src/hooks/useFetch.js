import { useEffect, useState } from "react";

 export function usePostTitle() {
    const [post, setPost] = useState({});

    async function getPosts() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const json = await response.json();
      setPost(json);
    }
  
      useEffect(() => {
       getPosts();
        }, [])

    return post.title;
 }

 // will take url as input and will give you some data (generic function)
 export function useFetch(url) {

  const [finalData, setFinalData] = useState({});
   
  async function getDetails() {
    const response= await fetch(url);
    const json = await response.json();
    setFinalData(json)
  }

  useEffect(() => {
    getDetails();
  }, [])

  return {
    finalData
  }
 }
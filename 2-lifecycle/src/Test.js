import { useEffect, useState } from "react";

export default function Test() {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(false);

  // Tek sefer calisir
  useEffect(() => {
    console.log("component ilk yuklendiginde calisir");
    let interval = setInterval(() => console.log("interval calisti"), 1000);
    return () => {
      console.log("component destroyed");
      clearInterval(interval);
    };
  }, []);

  //   Her render oldugunda calisir
  //   useEffect(() => {
  //     console.log("component render oldu");
  //   });

  useEffect(() => {
    // console.log("postId degeri degisti =", postId);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  return (
    <>
      <button onClick={() => setPostId((postId) => postId + 1)}>{postId}</button>
      <h3>{postId}</h3>
      {post && JSON.stringify(post)}
    </>
  );
}

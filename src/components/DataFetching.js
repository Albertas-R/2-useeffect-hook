import React, { useState, useEffect } from "react";
import axios from "axios";

// Fetching data with useEffect (100 posts)
// function DataFetching() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         console.log(response);
//         setPosts(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// Fetching data with useEffect (1 post)
function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <div>{post.title}</div>
    </div>
  );
}

export default DataFetching;

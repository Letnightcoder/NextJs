"use client";

import { useEffect, useState } from "react";

const post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function featchPosts() {
      // Add 4 second delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const data = await response.json();
      setPosts(data);
    }
    featchPosts();
  }, []);
  return (
    <>
      <h1>Posts</h1>
      <div className="post-container">
        {posts.map(({ id, title, body }) => (
          <div className="post-card" key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default post;

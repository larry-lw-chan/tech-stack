import React from "react";
import { usePosts } from "../context/PostProvider";

export default function Posts() {
  const { posts } = usePosts();
  return (
    <section>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

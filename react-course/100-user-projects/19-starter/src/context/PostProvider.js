import React, { useContext } from "react";
import createRandomPost from "../utils/seed";
import getSearchPost from "../utils/searchPost";

const PostContext = React.createContext(null);

function PostProvider({ children }) {
  const [posts, setPosts] = React.useState(() => createRandomPosts(30));
  const [searchQuery, setSearchQuery] = React.useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts = getSearchPost(searchQuery, posts);

  // Handler Functions
  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  // Context Provider Values
  const value = {
    posts: searchedPosts,
    onAddPosts: handleAddPost,
    onClearPosts: handleClearPosts,
    searchQuery: searchQuery,
    setSearchQuery: setSearchQuery,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error("Context cannot be used outside the provider");
  }
  return context;
}

export { PostProvider, usePosts };

function createRandomPosts(num) {
  return Array.from({ length: num }, () => createRandomPost());
}

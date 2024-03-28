import React from "react";
import Header from "./components/Header";
import ThemeBtn from "./components/ThemeBtn";
import Main from "./components/Main";
import FormAddPost from "./components/FormAddPost";
import Posts from "./components/Posts";
import Archive from "./components/Archive";
import Footer from "./components/Footer";
import { PostProvider } from "./context/PostProvider";

function App() {
  return (
    // 2. Context Provider provide value to child components
    <section>
      <PostProvider>
        <ThemeBtn />
        <Header />
        <Main>
          <FormAddPost />
          <Posts />
        </Main>
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

export default App;

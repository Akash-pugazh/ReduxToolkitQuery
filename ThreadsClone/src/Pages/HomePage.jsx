import React from "react";

import "../Styles/HomePage.css"

import AddPostForm from "../Components/AddPostForm";
import RenderPosts from "../Components/RenderPosts";



const HomePage = () => {
  return (
    <main>
      <AddPostForm />
      <RenderPosts />
    </main>
  );
};

export default HomePage;

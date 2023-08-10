import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../Features/postsSlice";
import PostCard from "./PostCard";
const RenderPosts = () => {
  const { posts } = useSelector(selectAllPosts);

  const renderPosts = posts.map(post => {
    return (
      <PostCard
        key={post.id}
        id={post.id}
        title={post.title}
        content={post.content}
      />
    );
  });

  return <div>{renderPosts}</div>;
};

export default RenderPosts;

import React from "react";
import "../Styles/PostCard.css";

const PostCard = ({ id, title, content }) => {
  return (
    <div className="post-wrapper">
      <section className="post-title">
        <div>{title}</div>
      </section>
      <section className="post-content">
        <div>{content}</div>
      </section>
    </div>
  );
};

export default PostCard;
    
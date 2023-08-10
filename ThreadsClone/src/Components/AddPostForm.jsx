import React from "react";
import "../Styles/AddPostForm.css";
import { useDispatch } from "react-redux";
import { addPost } from "../Features/postsSlice";

const AddPostForm = () => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const dispatch = useDispatch();

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleContentChange = e => {
    setContent(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (title.length === 0 || content.length === 0) return;
    dispatch(addPost(title, content));
    setTitle("");
    setContent("");
  };

  return (
    <div className="add-post-form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="form-title">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="form-content">
          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            id="content"
            value={content}
            onChange={handleContentChange}
          />
        </div>
        <div className="form-button">
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
};

export default AddPostForm;

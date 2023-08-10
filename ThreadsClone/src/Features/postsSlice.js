import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = {
  posts: [
    {
      id: 1,
      title: "College highlights",
      content: "This is the blog on my college happenings",
    },
    {
      id: 2,
      title: "School highlights",
      content: "This is the blog on my school happenings",
    },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.posts.push(action.payload);
      },
      prepare: (title, content) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const selectAllPosts = state => state.posts;

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;

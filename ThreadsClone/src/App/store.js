import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../Features/postsSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;

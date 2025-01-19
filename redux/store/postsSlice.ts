import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../interfaces";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [] as Post[],
    loadingPosts: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loadingPosts = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loadingPosts = false;
        state.posts = action.payload;
      });
  },
});

export default postsSlice.reducer;

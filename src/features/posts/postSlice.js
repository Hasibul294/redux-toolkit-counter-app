import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  // const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    isLoading: false,
    posts: [],
    error: null,
  },
  extraReducers: (builder) => {},
});

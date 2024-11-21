import { CounterState } from "@/interface/interface";
import {
  addPost,
  deletePost,
  getAllPost,
  updatePost,
} from "@/servives/postservices";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CounterState = {
  post: null,
  loading: false,
  error: null,
  id: 0,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // add post
      .addCase(addPost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = [action.payload];
      })
      .addCase(addPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch posts";
      });

    //get all post
    builder
      .addCase(getAllPost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = [action.payload];
      })
      .addCase(getAllPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch posts";
      });

    //deletePost post
    builder
      .addCase(deletePost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = [action.payload];
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch posts";
      });

    //updatePost post
    builder
      .addCase(updatePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePost.fulfilled, (state: any, action) => {
        state.loading = false;
        if (state.post && state.post[0]?.note) {
          state.post[0].note = state.post[0].note.map((item: any) =>
            item._id === action.payload._id ? action.payload : item
          );
        }
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update post";
      });
  },
});

export default postSlice.reducer;

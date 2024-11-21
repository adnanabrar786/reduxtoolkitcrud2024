import { CounterState } from "@/interface/interface";
import { addPost} from "@/servives/postservices";
import { deletePost, getPost } from "@/servives/postservices copy";
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
      .addCase(addPost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = [action.payload];
      })
      .addCase(addPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload : [];
      });

    // get post
    builder
      .addCase(getPost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = [action.payload];
      })
      .addCase(getPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload : [];
      })

      //delete post
      .addCase(deletePost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload : [];
      });
  },
});

export default postSlice.reducer;

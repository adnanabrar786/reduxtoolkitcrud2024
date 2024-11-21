import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPost:any = createAsyncThunk("post/getPost", async (id: string) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const addPost = createAsyncThunk(
  "post/deletePost",
  async ({
    token,
    firstName,
    lastName,
    quote,
  }: {
    id: number;
    token: string;
    firstName: string;
    lastName: string;
    quote: string;
  }) => {
    try {
      const response = await axios.post(
        `https://jsonplaceholder.typicode.com/posts`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : undefined,
          },
          data: {
            firstName: firstName,
            lastName: lastName,
            quote: quote,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deletePost:any = createAsyncThunk(
  "post/deletePost",
  async (id: string, { getState }) => {
    try {
      const state: any = getState();
      const posts = state.app.post; // Access the current posts from the state

      if (!posts) {
        throw new Error("No posts available to delete.");
      }

      // Simulate deletion by filtering the post
      return posts.filter((post: any) => post.id !== parseInt(id, 10));
    } catch (error) {
      throw error;
    }
  }
);

const dumyPost = createAsyncThunk("post/dumy", async () => {
  try {
    await axios.post("url", {
      headers: {},
      data: {},
    });
  } catch (err) {
    throw err;
  }
});

import { AddPostInteface } from "@/interface/interface";
import { apiAddPost, apiAllPost, apiDeletePost, apiUpdatePost } from "@/routes/api.routes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addPost = createAsyncThunk(
  "post/addePost",
  async ({ title, description }: AddPostInteface) => {
    try {
      const response = await axios.post(
        apiAddPost,
        {
          title: title,
          body: description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getAllPost: any = createAsyncThunk("geall/post", async () => {
  try {
    const response = await axios.get(apiAllPost, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
});

export const deletePost = createAsyncThunk(
  "delete/post",
  async (id: string) => {
    try {
      const response = await axios.delete(`${apiDeletePost}/${id}`);
      if (response.data) {
        getAllPost();
      }
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

export const updatePost = createAsyncThunk(
  "update/post",
  async ({
    id,
    title,
    description,
  }: {
    id: string;
    title: string;
    description: string;
  }) => {
    try {
      const response = await axios.put(
        `${apiUpdatePost}/${id}`,
        {
          title: title,
          body: description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

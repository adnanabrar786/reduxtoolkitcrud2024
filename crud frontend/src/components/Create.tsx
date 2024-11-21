"use client";

import { PostData } from "@/interface/interface";
import { ALL_POST } from "@/routes/page.routes";
import { addPost, getAllPost } from "@/servives/postservices";
import { AppDispatch } from "@/utils/rdeux/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  //  const { post } = useSelector((state: any) => ({ ...state.app }));
  const { post } = useSelector((state: any) => state.app);


  const dispatch: AppDispatch = useDispatch();

  const createUser = async () => {
    try {
      await dispatch(
        addPost({
          title: title,
          description: description,
        })
      );
      dispatch(getAllPost());
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  return (
    <div>
      <h1>Create User</h1>
      <input
        placeholder="Enter Title"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <br />
      <br />
      <input
        placeholder="Enter Description"
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <br />
      <br />
      <button onClick={createUser}>add user</button>

      <br />
      <br />
      <button onClick={() => router.push(ALL_POST)}>All user</button>
    </div>
  );
};

export default Create;

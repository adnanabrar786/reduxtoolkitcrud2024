"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { AppDispatch } from "@/utils/rdeux/store";
import { getAllPost, deletePost, updatePost } from "@/servives/postservices";
import { PostData } from "@/interface/interface";
import { CREATE } from "@/routes/page.routes";

const Post = () => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const { post, loading, error } = useSelector((state: any) => state.app);

  const [editingPost, setEditingPost] = useState<PostData | null>(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  const handleDelete = async (id: string) => {
    try {
      await dispatch(deletePost(id));
      dispatch(getAllPost());
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  const startEditing = (item: any) => {
    setEditingPost(item);
    setUpdatedTitle(item.title);
    setUpdatedDescription(item.body);
  };

  const handleUpdate = async () => {
    if (editingPost) {
      try {
        await dispatch(
          updatePost({ id: editingPost._id, title: updatedTitle, description: updatedDescription })
        );
        setEditingPost(null); // Close the editing UI
        dispatch(getAllPost()); // Refresh posts
      } catch (error) {
        console.error("Failed to update post:", error);
      }
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => router.push(CREATE)}>Add Post</button>
        <h2>All Users</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        <div>
          {post &&
            post[0]?.note &&
            post[0].note.map((item: PostData) => (
              <div key={item._id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <button onClick={() => startEditing(item)}>Edit Post</button>
                <button onClick={() => handleDelete(item._id)}>Delete Post</button>
                <hr />
              </div>
            ))}
        </div>
      </div>

      {/* Editing UI */}
      {editingPost && (
        <div style={{ border: "1px solid black", padding: "10px", marginTop: "20px" }}>
          <h3>Edit Post</h3>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            placeholder="Updated Title"
          />
          <br />
          <textarea
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            placeholder="Updated Description"
          />
          <br />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setEditingPost(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Post;
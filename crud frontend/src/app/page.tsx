"use client";
import { ALL_POST, CREATE } from "@/routes/page.routes";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h3>hello MERN Crud website with redux tool kit</h3>
      <button onClick={() => router.push(CREATE)}>Add Post</button>
      <br />
      <br />
      <button onClick={() => router.push(ALL_POST)}>All user</button>
    </div>
  );
}

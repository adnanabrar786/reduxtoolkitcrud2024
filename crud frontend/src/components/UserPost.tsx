// "use client";

// import { deletePost, getPost } from "@/servives/postservices copy";
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const UserPost = () => {
//   const [inputId, setInputId] = useState("");
//   const dispatch = useDispatch();
//   const { post } = useSelector((state: any) => ({ ...state.app }));

//   const onChangeInput = (e: any) => {
//     setInputId(e.target.value);
//   };

//   const fetchUserPost = (inputId: string) => {
//     if (!inputId) {
//       window.alert("Please enter Title");
//     } else {
//       dispatch(getPost(inputId));
//       setInputId("");
//     }
//   };

//   const deleteUserPost = ({ id }: { id: number }) => {
//     if (!id) {
//       window.alert("Please enter id");
//     } else {
//       dispatch(deletePost(id));
//       setInputId("");
//     }
//   };

//   return (
//     <div>
//       <h1>UserPost</h1>
//       <input
//         placeholder="Enter User Id"
//         type="text"
//         onChange={onChangeInput}
//         value={inputId}
//       />
//       <button onClick={() => fetchUserPost(inputId)}>fetch user</button>

//       <div>
//         {post &&
//           post.map((item: any, index: number) => (
//             <div key={index}>
//               <h1>{item.title}</h1>
//               <p>{item.body}</p>
//               <div>
//                 <button onClick={() => deleteUserPost({ id: item.userId })}>
//                   Delete Post
//                 </button>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default UserPost;

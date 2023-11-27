import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../fbconfig";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
    alert("Note has been saved");
  };

  

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1 className="newnote">Create A New Note</h1>
        <div className="inputGp">
          <label className="titleh"> Title:</label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label className="titleh"> Note:</label>
          <textarea
            placeholder="Note..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost} className="cloud"> Save on Cloud</button>
      </div>
    </div>
  );
}

export default CreatePost;
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreatePost() {
  return (
    <form>
      <input type="text" placeholder={"title"} />
      <input type="text" placeholder={"Summary"} />
      <input type="file" placeholder={"title"} />
      <ReactQuill />
      <button>CreatePost</button>
    </form>
  );
}

export default CreatePost;

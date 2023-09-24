import { useState } from "react";

const AddPost = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addPost(title, body);
    setTitle("");
    setBody("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-300 px-7 py-8 mt-10 rounded-md max-[840px]:w-1/2 max-[450px]:w-2/3"
      >
        <div className="flex flex-col ">
          <h3 className="text-center">Add a New Post</h3>
          <label>Title</label>
          <input
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
          <label>Body</label>
          <textarea
            className=""
            id=""
            cols="80"
            rows="4"
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
            }}
          ></textarea>
          <button disabled={!title || !body} type="submit" className="post-btn">
            Add Post
          </button>
        </div>
      </form>
    </>
  );
};

export default AddPost;

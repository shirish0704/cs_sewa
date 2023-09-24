import { useEffect, useState } from "react";
import AddPost from "./AddPost";
import Post from "./Post";

const ListComp = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const addPost = (title, body, id) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setPosts((prevPosts) => [data, ...prevPosts]));
  };

  const deletePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.status === 200) {
        setPosts(
          posts.filter((post) => {
            return post.id !== id;
          })
        );
      }
    });
  };

  if (!posts) return "No posts!";
  return (
    <>
      <div className="flex items-center justify-center flex-col mt-10 font-bold text-sky-900">
        <div className="heading">
          <h2 className=" text-3xl text-center mb-2">Consuming Rest API</h2>
          <div className="line">
            <div className="left-line"></div>
            <div className="middle-line"></div>
            <div className="right-line"></div>
          </div>
        </div>
        <AddPost addPost={addPost} />
        <section>
          <div className="heading">
            <h2 className="mt-5 text-2xl text-center mb-2">Posts</h2>
            <div className="line">
              <div className="left-line"></div>
              <div className="middle-line"></div>
              <div className="right-line"></div>
            </div>
          </div>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              deletePost={deletePost}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default ListComp;

const Post = ({ title, id, body, deletePost }) => {
  return (
    <>
      <div className="container  px-32 py-5 max-[840px]:px-24">
        <div className="post-card flex flex-col justify-center">
          <h2 className="text-xl font-bold text-black">{title}</h2>
          <p className="text-gray-500 font-thin">{body}</p>
          <button
            className=" bg-red-500 mt-2 font-thin w-32 p-2 rounded-lg text-white"
            onClick={() => deletePost(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Post;

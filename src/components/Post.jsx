import { useState } from "react";
import { FaHeart } from "react-icons/fa";

function Post({ post }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="post">
      <h3>{post.author}</h3>
      <img src={post.imageUrl} width="200" />
      <p>{post.text}</p>

      <button onClick={() => setLiked(!liked)}>
        <FaHeart color={liked ? "red" : "gray"} /> Like
      </button>
    </div>
  );
}

export default Post;
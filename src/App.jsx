import Header from "./components/Header";
import Post from "./components/Post";
import { posts } from "./data/posts";

function App() {
  return (
    <div className="app">
      <Header />

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;

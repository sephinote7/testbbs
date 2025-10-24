import { useState, useEffect } from 'react';
import supabase from './utils/supabase';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const { data: posts } = await supabase.from('posts').select();

      console.log(posts);
      setPosts(posts);
    }

    getPosts();
  }, []);

  return (
    <div>
      <h3>Post</h3>

      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            {post.title} / {post.name} / {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;

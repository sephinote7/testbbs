import React, { useEffect, useState } from 'react';
import supabase from '../../utils/supabase';
import dayjs from 'dayjs';
import { Link, Route, Routes } from 'react-router-dom';
import WriteComp from './WriteComp';
import ViewComp from './ViewComp';

function ListComp() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const { data: posts } = await supabase.from('posts').select();

      console.log(posts);
      setPosts(posts);
      if (!posts) {
        return <p>게시글 없음</p>;
      }
    }

    getPosts();
  }, []);

  return (
    <div className="container py-3">
      <h3 className="mb-3">Post</h3>
      <ul className="mb-3">
        {posts.map((item, i) => (
          <Link className="nav-link" to={`/board/view?id=${item.id}`}>
            <li key={i}>
              {item.title} / {item.name} / {item.content} /
              {dayjs(item.created_at).format('YYYY-MM-DD dd')}
            </li>
          </Link>
        ))}
      </ul>

      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default ListComp;

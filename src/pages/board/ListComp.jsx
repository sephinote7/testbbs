import React, { useEffect, useState } from 'react';
import supabase from '../../utils/supabase';
import dayjs from 'dayjs';
import { Link, Route, Routes } from 'react-router-dom';
import WriteComp from './WriteComp';

function ListComp() {
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
    <div className="container py-3">
      <h3 className="mb-3">Post</h3>

      <ul className="mb-3">
        {posts.map((post, i) => (
          <li key={i}>
            {post.title} / {post.name} / {post.content} /
            {dayjs(post.created_at).format('YYYY-MM-DD dd')}
          </li>
        ))}
      </ul>
      <Link to="write">
        <button className="btn btn-primary text-end">글 작성</button>
      </Link>

      <Routes></Routes>
    </div>
  );
}

export default ListComp;

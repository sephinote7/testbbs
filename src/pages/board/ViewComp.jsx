import React, { useEffect, useState } from 'react';
import supabase from '../../utils/supabase';
import dayjs from 'dayjs';
import { useSearchParams } from 'react-router-dom';

function ViewComp() {
  const [posts, setPosts] = useState([]);

  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  useEffect(() => {
    async function getPosts() {
      const { data: posts } = await supabase.from('posts').select();

      setPosts(posts);
    }

    getPosts();
  }, []);

  return <h2>{posts[id].title}</h2>;
}

export default ViewComp;

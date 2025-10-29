import React, { useEffect, useState } from 'react';
import supabase from '../../utils/supabase';
import dayjs from 'dayjs';
import { useSearchParams } from 'react-router-dom';

function ViewComp() {
  const [posts, setPosts] = useState(null);

  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  console.log(id);

  useEffect(() => {
    async function getOnePost() {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('id', Number(id))
          .single();
        setPosts(data);
      } catch (error) {}
      console.log(posts);
    }
    getOnePost();
  }, [id]);

  return (
    <div>
      <h2>
        {posts?.title} / {posts?.name}
      </h2>
      <p>{posts?.content}</p>
    </div>
  );
}

export default ViewComp;

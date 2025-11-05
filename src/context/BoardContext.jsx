import { createContext, useContext, useEffect, useState } from 'react';

const BoardContext = createContext();

export const useBoard = () => {
  const context = useContext(BoardContext);
  return context;
};

export const BoardProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data: posts } = await supabase.from('posts').select();
      console.log(posts);
      setPosts(posts);
    };

    getPosts();
  }, []);

  const [onePost, setOnePost] = useState({});

  useEffect(() => {
    async function getOnePost() {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('id', Number(id))
          .single();
        setOnePost(onePost);
      } catch (error) {}
      console.log(posts);
    }
    getOnePost();
  }, []);

  const value = {
    posts,
    onePost,
  };

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
};

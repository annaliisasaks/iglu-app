import React, { useState } from 'react';
import { postsData, Post } from '../data/post/postData';

interface Props {
    children:React.ReactNode;
}

export const PostContext = React.createContext<{ posts: Post[]; setPosts: React.Dispatch<React.SetStateAction<Post[]>>; }>({ posts: postsData, setPosts: () => ({}) });

export const PostContextProvider = (props:Props): JSX.Element => {
  const { children } = props;
  const [posts, setPosts] = useState(postsData);

  const value = { posts, setPosts };
  return (
    <PostContext.Provider
      value={value}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;

import React, { useState } from 'react';
import { postsData, Post } from '../data/post/postData';

interface Props {
    children:React.ReactNode;
}
interface IPostContext {
  posts: Post[];
  addPost: (post: Post) => void;
  deletePost: (id: number) => void;
  editPost: (post: Post) => void;
}

const postContextInitial = {
  posts: postsData,
  addPost: () => undefined,
  deletePost: () => undefined,
  editPost: () => undefined,
};

export const PostContext = React.createContext<IPostContext>(postContextInitial);

export const PostContextProvider = (props:Props): JSX.Element => {
  const { children } = props;
  const [posts, setPosts] = useState(postsData);

  const addPost = (addedPost:Post):void => {
    setPosts([addedPost, ...posts]);
  };

  const deletePost = (id:number):void => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const editPost = (editedPost:Post):void => {
    setPosts(posts.map((post) => (post.id === editedPost.id ? { ...post, ...editedPost } : post)));
  };

  const value = {
    posts, addPost, deletePost, editPost,
  };
  return (
    <PostContext.Provider
      value={value}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;

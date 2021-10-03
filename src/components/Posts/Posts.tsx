/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';
import Search from '../Search/Search';
import PostItem from './components/PostItem';
import { postsData, Post } from '../../data/post/postData';
import './posts.css';

const Posts: React.FC = () => {
  const [query, setQuery] = useState('');

  const filterPosts = (postList: Post[], inputValue: string) => {
    if (!inputValue) {
      return postList;
    } return postList.filter((post: Post) => post.header.toLowerCase().includes(query.toLowerCase()));
  };
  const filteredPosts = filterPosts(postsData, query);
  return (
    <>
      <div className="posts">
        <Search onButtonClick={setQuery} />
        {filteredPosts.map((post, index) => <PostItem post={post} key={index} />)}
      </div>
    </>
  );
};

export default Posts;

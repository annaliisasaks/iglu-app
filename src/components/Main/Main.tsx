import React, { useState } from 'react';
import Search from '../Search/Search';
import { postsData, Post } from '../../data/post/postData';
import Article from './Article/Article';

const Main = ():JSX.Element => {
  const [query, setQuery] = useState('');

  const filterPosts = (postList: Post[], inputValue: string): Post[] => {
    if (!inputValue) {
      return postList;
    }
    return postList.filter((post: Post) => post.header.toLowerCase().includes(query.toLowerCase()));
  };

  const filteredPosts = filterPosts(postsData, query);
  return (
    <>
      <div className="main">
        <Search onButtonClick={setQuery} />
        {filteredPosts.map((post, index) => <Article post={post} key={index} />)}
      </div>
    </>
  );
};

export default Main;

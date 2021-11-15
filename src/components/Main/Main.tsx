import React, { useContext, useState } from 'react';
import Search from '../Search/Search';
import { Post } from '../../data/post/postData';
import Article from './Article/Article';
import PostContext from '../../Context/PostContext';

const Main = ():JSX.Element => {
  const [query, setQuery] = useState('');
  const { posts } = useContext(PostContext);
  const filterPosts = (inputValue: string): Post[] => {
    if (!inputValue) {
      return posts;
    }
    return posts.filter((post: Post) => post.header.toLowerCase().includes(query.toLowerCase()));
  };

  const filteredPosts = filterPosts(query);
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

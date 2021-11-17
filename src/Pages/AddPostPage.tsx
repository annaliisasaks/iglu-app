import React from 'react';
import Content from '../components/Content/Content';
import PostForm from '../components/Form/PostForm';

const AddPostPage = ():JSX.Element => (
  <Content direction="column" align="center">
    <h1 className="h1">Add a new post</h1>
    <PostForm />

  </Content>
);

export default AddPostPage;

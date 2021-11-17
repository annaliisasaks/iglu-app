import React from 'react';
import Content from '../components/Content/Content';
import PostForm from '../components/Form/PostForm';

const EditPostPage = ():JSX.Element => (
  <Content direction="column" align="center">
    <h1 className="h1">Edit post</h1>
    <PostForm />

  </Content>
);

export default EditPostPage;

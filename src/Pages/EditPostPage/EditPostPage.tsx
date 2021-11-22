import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import Content from '../../components/Content/Content';
import PostForm, { IFormFields } from '../../components/Form/PostForm';
import PostContext from '../../Context/PostContext';

import './editPostPage.scss';

const EditPostPage = ():JSX.Element => {
  const { posts, editPost } = useContext(PostContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const currentPost = posts.find((post) => post.id.toString() === id);

  const onSave = (post:IFormFields):void => {
    if (currentPost && post.header && post.content) {
      editPost({
        ...currentPost,
        header: post.header,
        content: post.content,
      });
    }
    navigate('/');
  };

  return (
    <Content direction="column" align="center">
      <h1>Edit post</h1>
      {currentPost ? <PostForm onSave={onSave} currentFormFields={{ header: currentPost.header, content: currentPost.content }} /> : <p>Post not found</p>}

    </Content>
  );
};

export default EditPostPage;

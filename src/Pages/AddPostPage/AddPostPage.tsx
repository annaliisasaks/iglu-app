import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import Content from '../../components/Content/Content';
import PostForm, { IFormFields } from '../../components/Form/PostForm';
import PostContext from '../../Context/PostContext';
import './addPostPage.scss';
import coverImg from '../../data/post/coverImg.png';

const AddPostPage = ():JSX.Element => {
  const { addPost, posts } = useContext(PostContext);
  const navigate = useNavigate();
  const onSave = (post:IFormFields):void => {
    addPost({
      id: posts.length + 1,
      ...post,
      author: 'Steven Heidel',
      date: format(new Date(), 'MMM dd, yyyy').toString(),
      tags: ['events', 'programming'],
      image: coverImg,
      likes: 1,
      comments: [
        {
          date: 'Nov 2',
          author: 'Steven Heidel',
          content: 'Instead it focuses on how thinking about composition can make you a better programmer.',
        },
      ],
      views: 3,
    });
    navigate('/');
  };

  return (
    <Content direction="column" align="center">
      <h1>Add a new post</h1>
      <PostForm onSave={onSave} />

    </Content>
  );
};

export default AddPostPage;

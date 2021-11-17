import React, { useContext, useState } from 'react';
import { format } from 'date-fns';
import { useNavigate, useParams } from 'react-router';
import PostContext from '../../Context/PostContext';
import './postForm.scss';
import Button from '../Button/Button';
import coverImg from '../../data/post/coverImg.png';
import Textfield from '../TextField/Textfield';

interface post {
  header?: string,
  content?: string,
}

const AddPostForm = ():JSX.Element => {
  const { posts, addPost, editPost } = useContext(PostContext);
  const { id } = useParams();
  const currentPost = posts.find((post) => post.id.toString() === id);
  const inputValueInitial = {
    header: currentPost?.header,
    content: currentPost?.content,
  };

  const [inputValue, setInputValue] = useState<post>(inputValueInitial);
  const navigate = useNavigate();

  const addPostHandler = (e: React.FormEvent):void => {
    e.preventDefault();
    if (currentPost) {
      editPost({
        ...currentPost,
        id: currentPost.id,
        header: inputValue.header || currentPost.header,
        content: inputValue.content || currentPost.content,
      });
    } else if (inputValue.header && inputValue.content) {
      addPost({
        id: posts.length + 1,
        header: inputValue.header,
        content: inputValue.content,
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
    }
    navigate('/');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className="post-form" onSubmit={addPostHandler}>

      <Textfield className="post-form__input" type="text" name="header" placeholder="Header" onChange={handleInputChange} value={inputValue.header} />
      <textarea
        rows={7}
        cols={5}
        name="content"
        placeholder="Content"
        className="post-form__textarea"
        onChange={handleInputChange}
        value={inputValue.content}
      />

      <Button className="post-form__button" purpose="primary" type="submit">{currentPost ? 'Edit' : 'Post'}</Button>
    </form>
  );
};

export default AddPostForm;

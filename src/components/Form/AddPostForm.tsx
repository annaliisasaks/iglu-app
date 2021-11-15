import React, { useContext, useState } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router';
import PostContext from '../../Context/PostContext';
import './addPostForm.scss';
import SubmitButton from './SubmitButton';

interface post {
  header?: string,
  content?: string,
}

const AddPostForm = ():JSX.Element => {
  const { posts, setPosts } = useContext(PostContext);
  const [newPostValue, setNewPostValue] = useState<post>();
  const navigate = useNavigate();
  const addPostHandler = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    if (newPostValue?.header && newPostValue.content) {
      setPosts([{
        id: 3,
        header: newPostValue.header,
        content: newPostValue.content,
        author: 'Steven Heidel',
        date: format(new Date(), 'MMM dd, yyyy').toString(),
        tags: ['events', 'programming'],
        image: '',
        likes: 1,
        comments: [
          {
            date: 'Nov 2',
            author: 'Steven Heidel',
            content: 'Instead it focuses on how thinking about composition can make you a better programmer.',
          },
        ],
        views: 3,
      }, ...posts]);
    }
    navigate('/');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
    setNewPostValue({
      ...newPostValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className="add-post__form" onSubmit={addPostHandler}>
      <label className="add-post__label" htmlFor="header" />
      <input
        id="header"
        type="text"
        name="header"
        placeholder="Header"
        className="search__input"
        onChange={handleInputChange}
      />
      <label className="add-post__label" htmlFor="content" />
      <textarea
        rows={5}
        cols={5}
        id="content"
        name="content"
        placeholder="Content"
        className="add-post__textarea"
        onChange={handleInputChange}
      />

      <SubmitButton className="add-post__button">Post</SubmitButton>
    </form>
  );
};

export default AddPostForm;

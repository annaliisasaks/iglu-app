import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostContext from '../Context/PostContext';
import Image from '../components/Image/Image';
import Button from '../components/Button/Button';
import './postDetailsPage.scss';
import { Post } from '../data/post/postData';
import Content from '../components/Content/Content';

const PostDetailsPage = ():JSX.Element => {
  const { id } = useParams();
  const { posts, deletePost } = useContext(PostContext);
  const navigate = useNavigate();
  const handlePostDelete = (deletedPost:Post):void => {
    deletePost(deletedPost);
    navigate('/');
  };
  const selectedPost = posts.find((post) => post.id.toString() === id);

  return (
    <Content>
      {selectedPost && (
      <div className="post">
        <div className="post__header">
          <h1 className="h1">{selectedPost.header}</h1>
          <div className="post__button-wrapper">
            <Button className="post__button" type="button" purpose="delete" onClick={() => handlePostDelete(selectedPost)}>Delete</Button>
            <Button className="post__button" type="button" purpose="secondary" onClick={() => navigate(`/post/edit/${selectedPost.id}`)}>Edit</Button>
          </div>
        </div>

        <Image className="post__image" src={selectedPost.image} alt={selectedPost.header} />
        <p className="post__content">{selectedPost.content}</p>
      </div>
      )}

    </Content>
  );
};

export default PostDetailsPage;

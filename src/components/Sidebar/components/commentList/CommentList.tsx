import React from 'react';
import './commentList.css';
import CommentListItem from './commentListItem/CommentListItem';
import { postsData } from '../../../../data/post/postData';

const CommentList: React.FC = () => (
  <div className="comment-list">
    {postsData.map((post) => (
      <CommentListItem
        comments={post.comments}
        header={post.header}
        key={post.id}
      />
    ))}
  </div>

);

export default CommentList;

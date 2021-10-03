import React from 'react';
import './postItemStats.css';
import { PostComment } from '../../../../data/post/postData';

interface Props {
    comments: PostComment[];
    likes: number;
    views: number;
}

const PostItemStats: React.FC<Props> = (props: Props) => {
  const { comments, likes, views } = props;
  return (
    <span className="post-item-stats">
      {likes}
      {likes === 1 ? ' like' : ' likes'}
      <span className="le-dot"> • </span>
      {comments.length}
      {comments.length === 1 ? ' comment' : ' comments'}
      <span className="le-dot"> • </span>
      {views}
      {views === 1 ? ' view ' : ' views '}
    </span>

  );
};

export default PostItemStats;

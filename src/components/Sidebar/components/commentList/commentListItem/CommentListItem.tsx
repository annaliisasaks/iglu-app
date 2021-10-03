import React from 'react';
import './commentListItem.css';
import { PostComment } from '../../../../../data/post/postData';

interface Props {
    comments: PostComment[];
    header: string;
}

const CommentListItem: React.FC<Props> = (props: Props) => {
  const { comments, header } = props;
  return (
    <div className="comment-item">
      <p className="comment-item-header">{header}</p>
      {comments.map((comment, index) => (
        <div className="comment-item-data" key={index}>
          <p className="comment-item-content">{comment.content}</p>
          <p className="comment-item-info">
            {comment.date}
            {' '}
            by
            {' '}
            {comment.author}
          </p>
        </div>
      ))}

    </div>
  );
};

export default CommentListItem;

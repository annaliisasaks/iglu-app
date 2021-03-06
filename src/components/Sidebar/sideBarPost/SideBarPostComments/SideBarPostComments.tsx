import React from 'react';
import { PostComment } from '../../../../data/post/postData';

interface Props {
  comment: PostComment;
}

const SideBarPostComments = (props:Props):JSX.Element => {
  const { comment } = props;

  return (
    <>
      {comment.content}
      <p className="post-data__details">
        {`${comment.date}
        by
        ${comment.author}`}
      </p>
    </>

  );
};

export default SideBarPostComments;

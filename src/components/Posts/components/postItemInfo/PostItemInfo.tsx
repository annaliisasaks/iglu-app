import React from 'react';
import './postItemInfo.css';

interface Props {
    date: string;
    author: string;
}

const PostItemInfo: React.FC<Props> = (props: Props) => {
  const { date, author } = props;
  return (

    <h1 className="post-item-info">
      Published by
      {' '}
      {author}
      {' '}
      on
      {' '}
      {date}
    </h1>

  );
};

export default PostItemInfo;

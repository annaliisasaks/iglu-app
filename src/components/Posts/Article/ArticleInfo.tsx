import React from 'react';

interface Props {
    date: string;
    author: string;
    className: string;
}

const PostItemInfo: React.FC<Props> = (props: Props) => {
  const { date, author, className } = props;
  return (

    <h1 className={className}>
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

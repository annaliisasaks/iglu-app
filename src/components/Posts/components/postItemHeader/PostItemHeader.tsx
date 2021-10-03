import React from 'react';
import './postItemHeader.css';

interface Props {
    header: string;
}

const PostItemHeader: React.FC<Props> = (props: Props) => {
  const { header } = props;
  return (

    <h1 className="post-item-header">{header}</h1>

  );
};

export default PostItemHeader;

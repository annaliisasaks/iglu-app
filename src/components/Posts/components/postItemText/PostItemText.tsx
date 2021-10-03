import React from 'react';
import './postItemText.css';

interface Props {
    content: string;
}

const PostItemText: React.FC<Props> = (props: Props) => {
  const { content } = props;
  return (

    <p className="post-item-text">
      {content}
    </p>

  );
};

export default PostItemText;

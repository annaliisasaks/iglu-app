import React from 'react';

interface Props {
    content: string;
    className: string;
}

const PostItemText: React.FC<Props> = (props: Props) => {
  const { content, className } = props;
  return (

    <p className={className}>
      {content}
    </p>

  );
};

export default PostItemText;

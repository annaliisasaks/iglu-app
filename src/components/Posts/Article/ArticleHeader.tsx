import React from 'react';

interface Props {
    header: string;
    className: string;
}

const PostItemHeader: React.FC<Props> = (props: Props) => {
  const { header, className } = props;
  return (

    <h1 className={className}>{header}</h1>

  );
};

export default PostItemHeader;

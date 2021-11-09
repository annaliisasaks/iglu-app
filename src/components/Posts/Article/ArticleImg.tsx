import React from 'react';

interface Props {
    imgSrc: string;
    altText: string;
    className: string;
}

const PostItemImg: React.FC<Props> = (props: Props) => {
  const { imgSrc, altText, className } = props;
  return (

    <img className={className} src={imgSrc} alt={altText} />

  );
};

export default PostItemImg;

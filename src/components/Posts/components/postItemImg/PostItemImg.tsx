import React from 'react';
import './postItemImg.css';

interface Props {
    imgSrc: string;
    altText: string;
}

const PostItemImg: React.FC<Props> = (props: Props) => {
  const { imgSrc, altText } = props;
  return (

    <img className="post-item-img" src={imgSrc} alt={altText} />

  );
};

export default PostItemImg;

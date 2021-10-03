import React from 'react';
import './postItemTags.css';

interface Props {
    tags: string[];
}

const PostItemTags: React.FC<Props> = (props: Props) => {
  const { tags } = props;
  return (
    <>

      {tags.map((tag, index) => (
        <span className="post-item-tags" key={index}>
          {' '}
          #
          {tag}
          {' '}
        </span>
      ))}

    </>
  );
};

export default PostItemTags;

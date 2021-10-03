import React from 'react';
import './postitem.css';
import PostItemImg from './postItemImg/PostItemImg';
import { Post } from '../../../data/post/postData';
import PostItemHeader from './postItemHeader/PostItemHeader';
import PostItemInfo from './postItemInfo/PostItemInfo';
import PostItemText from './postItemText/PostItemText';
import PostItemTags from './postItemTags/PostItemTags';
import PostItemStats from './postItemStats/PostItemStats';

interface Props {
  post: Post;
}

const PostItem: React.FC<Props> = (props) => {
  const { post } = props;
  return (

    <div className="post-item">
      <PostItemImg imgSrc={post.image} altText={post.header} />
      <div className="post-data-texts">
        <PostItemHeader header={post.header} />
        <PostItemInfo author={post.author} date={post.date} />
        <PostItemText content={post.content} />
        <PostItemTags tags={post.tags} />
        <hr />
        <PostItemStats
          comments={post.comments}
          views={post.views}
          likes={post.likes}
        />
      </div>

    </div>

  );
};

export default PostItem;

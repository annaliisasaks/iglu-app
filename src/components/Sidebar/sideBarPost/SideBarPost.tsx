import React from 'react';
import { PostComment } from '../../../data/post/postData';
import List from '../../List/List';
import ListItem from '../../List/ListItem';
import SideBarPostComments from './SideBarPostComments/SideBarPostComments';
import './sideBarPost.scss';

interface Props {
  header: string;
  comments: PostComment[];
}

const SideBarPost = (props:Props):JSX.Element => {
  const { header, comments } = props;

  return (
    <>
      <h4 className="post-data__header">{header}</h4>
      <List className="post-data__list">
        {comments.map((comment, index) => (
          <ListItem className="post-data__content" key={index}>
            <SideBarPostComments {...{ comment }} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SideBarPost;

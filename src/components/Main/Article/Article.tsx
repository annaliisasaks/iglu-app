import React from 'react';
import './article.scss';
import { Post } from '../../../data/post/postData';
import ListItem from '../../List/ListItem';
import List from '../../List/List';

interface Props {
  post: Post;
}

const Article = (props:Props):JSX.Element => {
  const { post } = props;
  const stats = [
    { count: post.likes, title: 'like' },
    { count: post.comments.length, title: 'comment' },
    { count: post.views, title: 'view' }];
  return (
    <article className="article">
      <img
        className="article__image"
        src={post.image}
        alt={post.header}
      />
      <div className="article__content">
        <h2 className="article__header">{post.header}</h2>
        <p className="article__info">
          {`Published by ${post.author} on ${post.date}`}
        </p>
        <p className="article__text">{post.content}</p>
        <List className="article__tags" direction="horizontal" type="hashtags">
          {post.tags.map((tag) => (<ListItem>{tag}</ListItem>))}
        </List>
        <hr className="separator" />
        <List className="article__stats" direction="horizontal" type="bullets">
          {stats.map((stat) => (
            <ListItem>
              {stat.count}
              {' '}
              {stat.title}
              {stat.count === 1 ? '' : 's'}
            </ListItem>
          ))}

        </List>
      </div>

    </article>

  );
};

export default Article;

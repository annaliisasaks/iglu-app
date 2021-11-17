import React from 'react';
import './article.scss';
import { Link } from 'react-router-dom';
import { Post } from '../../../data/post/postData';
import ListItem from '../../List/ListItem';
import List from '../../List/List';
import Image from '../../Image/Image';
import Separator from '../../Separator/Separator';

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
      <Link to={`/post/${post.id}`}>
        <Image className="article__img" src={post.image} alt={post.header} />

      </Link>
      <div className="article__content">
        <Link to={`/post/${post.id}`}>
          <h2 className="article__header">{post.header}</h2>
          <p className="article__info">
            {`Published by ${post.author} on ${post.date}`}
          </p>
          <p className="article__text">{post.content}</p>
        </Link>
        <List className="article__tags" direction="horizontal" type="hashtags">
          {post.tags.map((tag, index) => (<ListItem key={index}>{tag}</ListItem>))}
        </List>
        <Separator type="div" />
        <List className="article__stats" direction="horizontal" type="bullets">
          {stats.map((stat, index) => (
            <ListItem key={index}>
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

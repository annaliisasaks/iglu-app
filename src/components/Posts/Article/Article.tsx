import React from 'react';
import './article.scss';
import ArticleImg from './ArticleImg';
import ArticleHeader from './ArticleHeader';
import ArticleInfo from './ArticleInfo';
import ArticleText from './ArticleText';
import { Post } from '../../../data/post/postData';
import ListItem from '../../List/ListItem';
import List from '../../List/List';

interface Props {
  post: Post;
}

const Article: React.FC<Props> = (props) => {
  const { post } = props;
  const stats = [
    { count: post.likes, title: 'like' },
    { count: post.comments.length, title: 'comment' },
    { count: post.views, title: 'view' }];
  return (

    <article className="article">
      <ArticleImg
        className="article__image"
        imgSrc={post.image}
        altText={post.header}
      />
      <div className="article__content">
        <ArticleHeader className="article__header" header={post.header} />
        <ArticleInfo
          className="article__info"
          author={post.author}
          date={post.date}
        />

        <ArticleText className="article__text" content={post.content} />

        <List className="article__tags" direction="horizontal" hashtags>
          {post.tags.map((tag) => (<ListItem>{tag}</ListItem>))}

        </List>
        <hr className="separator" />
        <List className="article__stats" direction="horizontal" bullets>
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

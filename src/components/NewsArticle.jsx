import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ article, isFirstArticle }) => {

  if (!article || !article.url) {
    return <p>Error: Invalid article data.</p>;
  }

  const { url, urlToImage, publishedAt, title, description } = article;

  const openArticleInNewTab = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className={` ${isFirstArticle ? 'first-article' : 'news-article'}`} onClick={openArticleInNewTab}>
      <div className={` ${isFirstArticle ? 'first-article-img' : 'img-container'}`}>
        <img src={urlToImage} alt={title} />
        </div>
      <div className={` ${isFirstArticle ? 'first-article-content' : 'content'}`}>
      <p className="published-date">{new Date(publishedAt).toLocaleDateString()}</p>
      <h3 className="article-title">{title}</h3>
      <p className="article-description">{description}</p>
      </div>
    </div>
  );
};

export default NewsArticle;

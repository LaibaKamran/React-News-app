import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ article }) => {
  const { url, urlToImage, publishedAt, title, description } = article;

  const openArticleInNewTab = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="news-article" onClick={openArticleInNewTab}>
      <img src={urlToImage} alt={title} />
      <p className="published-date">{new Date(publishedAt).toLocaleDateString()}</p>
      <h3 className="article-title">{title}</h3>
      <p className="article-description">{description}</p>
    </div>
  );
};

export default NewsArticle;

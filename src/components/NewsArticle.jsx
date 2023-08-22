import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ article, isFirstArticle, isDesktop }) => {
  if (!article || !article.url) {
    return;
  }

  const { url, urlToImage, publishedAt, title, description } = article;

  const openArticleInNewTab = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  const getDescription = () => {
    if (!description) {
      return ''; // Return an empty string if description is null or undefined
    }
  
    if (isFirstArticle || isDesktop) {
      return description;
    } else {
      const words = description.split(' ');
      return words.slice(0, 20).join(' ') + '...'; // Display first 30 words and add ellipsis
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
        <p className="article-description">{getDescription()}</p>
      </div>
    </div>
  );
};

export default NewsArticle;

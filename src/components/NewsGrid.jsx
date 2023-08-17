import React from 'react';
import NewsArticle from './NewsArticle';
import './NewsGrid.css';

const NewsGrid = ({ news }) => {
  return (
    <div className="news-grid">
      {news.map((newsItem, index) => (
        <NewsArticle key={index} article={newsItem} />
      ))}
    </div>
  );
};

export default NewsGrid;
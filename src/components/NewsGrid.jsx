import React, { useState, useEffect } from 'react';
import NewsArticle from './NewsArticle';
import './NewsGrid.css';

const NewsGrid = ({ news }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [firstArticle, ...restArticles] = news; // Separate the first article from the rest

  return (
    <>
      {screenWidth < 768 ? (
        <div className='news-grid'>
        {news.map((newsItem, index) => (
          <NewsArticle key={index} article={newsItem} isFirstArticle={false}/>
        ))}
      </div>   
      ) : (
        <div className='news-grid'>
          <div className="big-article">
            <NewsArticle article={firstArticle} isFirstArticle={true} />
          </div>
          <div className="small-articles">
            {restArticles.map((newsItem, index) => (
              <NewsArticle key={index} article={newsItem} isFirstArticle={false} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NewsGrid;

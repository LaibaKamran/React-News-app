import React, { useState, useEffect } from 'react';
import NewsArticle from './NewsArticle';
import SkeletonLoader from './SkeletonLoader'; // Import the SkeletonLoader component
import './NewsGrid.css';

const NewsGrid = ({ news }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the loading time as needed
  }, []);

  const [firstArticle, ...restArticles] = news; // Separate the first article from the rest

  return (
    <>
      {screenWidth < 1025 ? (
        <div className='parent-div'>
        <div className='news-grid'>
          {news.map((newsItem, index) => (
            loading ? <SkeletonLoader key={index} /> : <NewsArticle key={index} article={newsItem} isFirstArticle={false}/>
          ))}
        </div>
        </div>
      ) : (
        <div className='parent-div'>
        <div className='news-grid'>
          <div className="big-article">
            {loading ? <SkeletonLoader /> : <NewsArticle article={firstArticle} isFirstArticle={true} />}
          </div>
          <div className="small-articles">
            {restArticles.map((newsItem, index) => (
              loading ? <SkeletonLoader key={index} /> : <NewsArticle key={index} article={newsItem} isFirstArticle={false} />
            ))}
          </div>
        </div>
        </div>
      )}
    </>
  );
};

export default NewsGrid;

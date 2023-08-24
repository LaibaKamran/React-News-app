import React from 'react';
import './NewsArticle.css';
import './FirstArticleSkeletonLoader.css'; // Import the skeleton loader styles

const FirstArticleSkeletonLoader = () => {
  return (
    <div className='parent'>
      <div className='first-article-skeleton'>
        <div className='first-article-img skeleton-img'></div>
        <div className='first-article-content skeleton-content'>
          <div className='skeleton-date'></div>
          <div className='skeleton-title'></div>
          <div className='skeleton-description'></div>
        </div>
      </div>
    </div>
  );
};

export default FirstArticleSkeletonLoader;

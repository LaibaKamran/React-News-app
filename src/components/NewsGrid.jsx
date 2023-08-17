import React, { useState, useEffect } from 'react';
import NewsArticle from './NewsArticle';
import Pagination from './Pagination'; // Import the Pagination component
import './NewsGrid.css';

const NewsGrid = ({ news }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalArticles = news.length;
  const totalPages = Math.ceil(totalArticles / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const articlesToShow = news.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const [firstArticle, ...restArticles] = articlesToShow; // Separate the first article from the rest

  return (
    <div className="news-grid">
      {window.innerWidth < 768 ? (
        <div className='news-grid'>
          {articlesToShow.map((newsItem, index) => (
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default NewsGrid;

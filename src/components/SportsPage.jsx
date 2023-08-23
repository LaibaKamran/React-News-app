import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSportsNews, selectSportsNews } from '../features/news/sportsNewsSlice'; // Update the imports
import NewsGrid from '../components/NewsGrid';
import Pagination from '../components/Pagination';
import './SportsPage.css'

function SportsPage() { // Update the component name
  const dispatch = useDispatch();
  const sportsNews = useSelector(selectSportsNews); // Update the selector

  useEffect(() => {
    dispatch(fetchSportsNews()); // Update the action
  }, [dispatch]);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalSportsArticles = sportsNews.length; 
  const totalSportsPages = Math.ceil(totalSportsArticles / itemsPerPage); 
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const sportsArticlesToShow = sportsNews.slice(startIndex, endIndex); 

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="sports-page">
      <div className="news-container">
        <NewsGrid news={sportsArticlesToShow} />
      </div>
      <div className="pagination-container">
        <Pagination
          currentPage={currentPage}
          totalPages={totalSportsPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default SportsPage; 

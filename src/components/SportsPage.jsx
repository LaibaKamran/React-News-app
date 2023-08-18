import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSportsNews, selectSportsNews } from '../features/news/sportsNewsSlice'; // Update the imports
import NewsGrid from '../components/NewsGrid';
import Pagination from '../components/Pagination';

function SportsPage() { // Update the component name
  const dispatch = useDispatch();
  const sportsNews = useSelector(selectSportsNews); // Update the selector

  useEffect(() => {
    dispatch(fetchSportsNews()); // Update the action
  }, [dispatch]);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalSportsArticles = sportsNews.length; // Update the variable name
  const totalSportsPages = Math.ceil(totalSportsArticles / itemsPerPage); // Update the variable name
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const sportsArticlesToShow = sportsNews.slice(startIndex, endIndex); // Update the variable name

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <NewsGrid news={sportsArticlesToShow} /> 
      <Pagination
        currentPage={currentPage}
        totalPages={totalSportsPages} 
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default SportsPage; // Update the export

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusinessNews, selectBusinessNews } from '../features/news/businessNewsSlice'; // Update the import
import NewsGrid from '../components/NewsGrid';
import Pagination from '../components/Pagination';

function BusinessPage() { // Update the function name
  const dispatch = useDispatch();
  const businessNews = useSelector(selectBusinessNews); // Update the selector

  useEffect(() => {
    dispatch(fetchBusinessNews()); // Update the action
  }, [dispatch]);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalBusinessArticles = businessNews.length; // Update the variable name
  const totalBusinessPages = Math.ceil(totalBusinessArticles / itemsPerPage); // Update the variable name
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const businessArticlesToShow = businessNews.slice(startIndex, endIndex); // Update the variable name

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <NewsGrid news={businessArticlesToShow} /> 
      <Pagination
        currentPage={currentPage}
        totalPages={totalBusinessPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default BusinessPage; 
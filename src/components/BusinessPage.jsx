import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusinessNews, selectBusinessNews } from '../features/news/businessNewsSlice'; 
import NewsGrid from '../components/NewsGrid';
import Pagination from '../components/Pagination';
// import './BusinessPage.css'

function BusinessPage() { 
  const dispatch = useDispatch();
  const businessNews = useSelector(selectBusinessNews);

  useEffect(() => {
    dispatch(fetchBusinessNews());
  }, [dispatch]);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalBusinessArticles = businessNews.length; 
  const totalBusinessPages = Math.ceil(totalBusinessArticles / itemsPerPage); 
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const businessArticlesToShow = businessNews.slice(startIndex, endIndex); 

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="business-page">
    <div className="news-container">
      <NewsGrid news={businessArticlesToShow} />
    </div>
    <div className="pagination-container">
      <Pagination
        currentPage={currentPage}
        totalPages={totalBusinessPages}
        onPageChange={handlePageChange}
      />
    </div>
  </div>
  );
}

export default BusinessPage; 
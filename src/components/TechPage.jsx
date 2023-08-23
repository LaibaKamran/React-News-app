import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTechNews, selectTechNews } from '../features/news/techNewsSlice';
import NewsGrid from '../components/NewsGrid';
import Pagination from '../components/Pagination';
import './TechPage.css'

function TechPage() {
  const dispatch = useDispatch();
  const techNews = useSelector(selectTechNews);

  useEffect(() => {
    dispatch(fetchTechNews());
  }, [dispatch]);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalTechArticles = techNews.length;
  const totalTechPages = Math.ceil(totalTechArticles / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const techArticlesToShow = techNews.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="tech-page">
      <div className="news-container">
        <NewsGrid news={techArticlesToShow} />
      </div>
      <div className="pagination-container">
        <Pagination
          currentPage={currentPage}
          totalPages={totalTechPages }
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default TechPage;

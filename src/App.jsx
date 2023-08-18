import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, selectNews } from './features/news/newsSlice';
import NewsGrid from './components/NewsGrid';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

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

  return (
    <div className="App">
      <h1>News App</h1>
      <NewsGrid news={articlesToShow} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;

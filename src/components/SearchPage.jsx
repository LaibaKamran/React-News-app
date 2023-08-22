import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSearchResults } from '../features/news/searchSlice';
import NewsGrid from '../components/NewsGrid';
import Pagination from '../components/Pagination';
import SearchComponent from '../components/SearchComponent';

function SearchPage() {
  const searchResults = useSelector(selectSearchResults);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalArticles = searchResults.length;
  const totalPages = Math.ceil(totalArticles / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const articlesToShow = searchResults.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <SearchComponent />
      <NewsGrid news={articlesToShow} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default SearchPage;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSearchResults, selectError } from '../features/news/searchSlice';
import NewsGrid from '../components/NewsGrid';
import Pagination from '../components/Pagination';
import SearchComponent from '../components/SearchComponent';
import './SearchPage.css'

function SearchPage() {
  const searchResults = useSelector(selectSearchResults);
  const error = useSelector(selectError);

  const [searchStarted, setSearchStarted] = useState(false);

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
      <SearchComponent onSearch={() => setSearchStarted(true)} />

      {/* Conditionally render the error message */}
      {error && <div className="error-message">{error}</div>}

      {/* Conditionally render the NewsGrid only if there are search results */}
      {searchStarted && searchResults.length > 0 ? (
        <div className="search-page">
          <div className="news-container">
            <NewsGrid news={articlesToShow} />
          </div>
          <div className="pagination-container">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      ) : (
        <div className="begin-search-message">
          {searchStarted
            ? "No articles found for the given query."
            : "Begin your search by entering keywords."}
        </div>
      )}
    </div>
  );
}

export default SearchPage;

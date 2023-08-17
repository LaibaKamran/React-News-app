import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        {"<"}
      </button>
      {currentPage > 2 && (
        <button onClick={() => onPageChange(1)}>1</button>
      )}
      {currentPage > 3 && <span>...</span>}
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)}>
          {currentPage - 1}
        </button>
      )}
      <button className="current-page">{currentPage}</button>
      {currentPage < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)}>
          {currentPage + 1}
        </button>
      )}
      {currentPage < totalPages - 2 && <span>...</span>}
      {currentPage < totalPages - 1 && (
        <button onClick={() => onPageChange(totalPages)}>
          {totalPages}
        </button>
      )}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        {">"}
      </button>
    </div>
  );
};

export default Pagination;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchResults } from '../features/news/searchSlice'; // Import the fetchSearchResults action

import './SearchComponent.css';

const SearchComponent = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDateRange, setSelectedDateRange] = useState('');
  const [selectedSortBy, setSelectedSortBy] = useState('');

  const handleSearch = async () => {
    dispatch(fetchSearchResults({ query: searchQuery, selectedDateRange, selectedSortBy }))
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Enter keywords..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select
        className="date-range-select"
        value={selectedDateRange}
        onChange={(e) => setSelectedDateRange(e.target.value)}
      >
        <option value="">Select Date Range</option>
        <option value="last_week">Last Week</option>
        <option value="last_month">Last Month</option>
        <option value="last_six_months">Last Six Months</option>
        <option value="last_year">Last Year</option>
      </select>
      <select
        className="sort-by-select"
        value={selectedSortBy}
        onChange={(e) => setSelectedSortBy(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="date">Date</option>
        <option value="popularity">Popularity</option>
        <option value="relevancy">Relevancy</option>
      </select>
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchComponent;

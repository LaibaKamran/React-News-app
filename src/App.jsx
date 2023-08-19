import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, selectNews } from './features/news/newsSlice';
import NewsGrid from './components/NewsGrid';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TechPage from './components/TechPage';
import BusinessPage from './components/BusinessPage';
import SportsPage from './components/SportsPage';

function App() {
  

  return (
    <div className="App">
      <Navbar />
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tech" element={<TechPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/sports" element={<SportsPage />} />
       </Routes>
    </div>
  );
}

export default App;

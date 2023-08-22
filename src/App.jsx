import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TechPage from './components/TechPage';
import BusinessPage from './components/BusinessPage';
import SportsPage from './components/SportsPage';
import SearchPage from './components/SearchPage';

function App() {
  

  return (
    <div className="App">
      <Navbar />
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tech" element={<TechPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/search" element={<SearchPage />} />
       </Routes>
    </div>
  );
}

export default App;

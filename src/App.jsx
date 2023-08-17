// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, selectNews } from './features/news/newsSlice';
import NewsGrid from './components/NewsGrid';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>News App</h1>
      <NewsGrid news={news} />
    </div>
  );
}

export default App;

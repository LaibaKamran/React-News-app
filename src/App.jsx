import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, selectNews } from './features/news/newsSlice';
import NewsGrid from './components/NewsGrid';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <HomePage/>,
        },
      ],
    },
  ]);
  

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

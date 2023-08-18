// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../features/news/newsSlice';
import techNewsReducer from '../features/news/techNewsSlice';
import businessReducer from '../features/news/businessNewsSlice'
import sportsReducer from '../features/news/sportsNewsSlice'

export default configureStore({
  reducer: {
    news: newsReducer,
    techNews: techNewsReducer,
    businessNews: businessReducer,
    sportsNews: sportsReducer,
  },
});

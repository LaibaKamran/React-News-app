// src/features/newsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '499c68c17a7c4a1ab9ed4e8837a28803';
const PAGE_SIZE = 10; // Number of articles to fetch
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${PAGE_SIZE}&apiKey=${API_KEY}`;

const initialState = {
    loading: false,
    articles: [],
    error: null,
  };

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await axios.get(API_URL);
  return response.data.articles;
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading= true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
export const selectNews = (state) => state.news.articles;
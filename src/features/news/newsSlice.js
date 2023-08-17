// src/features/newsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '499c68c17a7c4a1ab9ed4e8837a28803';
const COUNTRIES = ['us', 'gb', 'ca', 'au']; // Add more countries if needed

const initialState = {
  loading: false,
  articles: [],
  error: null,
};

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const responses = await Promise.all(
    COUNTRIES.map(country =>
      axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`)
    )
  );

  const allArticles = responses.flatMap(response => response.data.articles);
  return allArticles;
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
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

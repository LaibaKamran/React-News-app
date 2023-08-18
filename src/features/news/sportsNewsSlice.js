// src/features/sportsNewsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '499c68c17a7c4a1ab9ed4e8837a28803';
const COUNTRIES = ['us', 'gb', 'ca', 'au']; // Add more countries if needed

const initialState = {
  loading: false,
  articles: [],
  error: null,
};

export const fetchSportsNews = createAsyncThunk('sportsNews/fetchSportsNews', async () => {
  const responses = await Promise.all(
    COUNTRIES.map(country =>
      axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=sports&apiKey=${API_KEY}`)
    )
  );

  const allSportsArticles = responses.flatMap(response => response.data.articles);
  return allSportsArticles;
});

const sportsNewsSlice = createSlice({
  name: 'sportsNews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSportsNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSportsNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchSportsNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default sportsNewsSlice.reducer;
export const selectSportsNews = (state) => state.sportsNews.articles;

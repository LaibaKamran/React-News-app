// src/features/businessNewsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '499c68c17a7c4a1ab9ed4e8837a28803';
const COUNTRIES = ['us', 'gb', 'ca', 'au']; // Add more countries if needed

const initialState = {
  loading: false,
  articles: [],
  error: null,
};

export const fetchBusinessNews = createAsyncThunk('businessNews/fetchBusinessNews', async () => {
  const responses = await Promise.all(
    COUNTRIES.map(country =>
      axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=${API_KEY}`)
    )
  );

  const allBusinessArticles = responses.flatMap(response => response.data.articles);
  return allBusinessArticles;
});

const businessNewsSlice = createSlice({
  name: 'businessNews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBusinessNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBusinessNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchBusinessNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default businessNewsSlice.reducer;
export const selectBusinessNews = (state) => state.businessNews.articles;

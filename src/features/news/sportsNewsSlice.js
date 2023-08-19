// src/features/sportsNewsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '318ff5d9e1834788a7244d0cd604f867';

const initialState = {
  loading: false,
  articles: [],
  error: null,
};

export const fetchSportsNews = createAsyncThunk('sportsNews/fetchSportsNews', async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${API_KEY}`
    );

    if (response) {
      return response.data.articles;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
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

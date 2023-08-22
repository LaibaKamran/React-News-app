// src/features/businessNewsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '318ff5d9e1834788a7244d0cd604f867';

const initialState = {
  loading: false,
  articles: [],
  error: null,
};

export const fetchBusinessNews = createAsyncThunk('businessNews/fetchBusinessNews', async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=business&apiKey=${API_KEY}`
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

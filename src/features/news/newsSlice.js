// src/features/newsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '511532a7abb64bec99b7209267646a73';

const initialState = {
  loading: false,
  articles: [],
  error: null,
};

const generateRandomLetter = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
};

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  try {
    const randomLetter = generateRandomLetter();
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${randomLetter}&apiKey=${API_KEY}`
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

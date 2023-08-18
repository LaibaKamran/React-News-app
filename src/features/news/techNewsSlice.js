// src/features/techNewsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '499c68c17a7c4a1ab9ed4e8837a28803';
const COUNTRIES = ['us', 'gb', 'ca', 'au']; // Add more countries if needed

const initialState = {
  loading: false,
  articles: [],
  error: null,
};

export const fetchTechNews = createAsyncThunk('techNews/fetchTechNews', async () => {
  const responses = await Promise.all(
    COUNTRIES.map(country =>
      axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=technology&apiKey=${API_KEY}`)
    )
  );

  const allTechArticles = responses.flatMap(response => response.data.articles);
  return allTechArticles;
});

const techNewsSlice = createSlice({
  name: 'techNews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTechNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTechNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchTechNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default techNewsSlice.reducer;
export const selectTechNews = (state) => state.techNews.articles;

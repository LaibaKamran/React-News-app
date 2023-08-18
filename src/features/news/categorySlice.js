// src/features/categorySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '499c68c17a7c4a1ab9ed4e8837a28803';
const COUNTRIES = ['us', 'gb', 'ca', 'au']; // Add more countries if needed

const initialState = {
  loading: false,
  categoryNews: {},
  error: null,
};

export const fetchCategoryNews = createAsyncThunk('category/fetchCategoryNews', async (category) => {
  const responses = await Promise.all(
    COUNTRIES.map(country =>
      axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`)
    )
  );

  const categoryArticles = responses.flatMap(response => response.data.articles);
  return { category, articles: categoryArticles };
});

const categorySlice = createSlice({
  name: 'category',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategoryNews.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryNews[action.payload.category] = action.payload.articles;
      })
      .addCase(fetchCategoryNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
export const selectCategoryNews = (state, category) => state.category.categoryNews[category];

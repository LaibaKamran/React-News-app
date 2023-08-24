// src/features/techNewsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY =  import.meta.env.VITE_REACT_APP_API_KEY;

const initialState = {
  loading: false,
  articles: [],
  error: null,
};

export const fetchTechNews = createAsyncThunk('techNews/fetchTechNews', async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=technology&apiKey=${API_KEY}`
    );

    return response.data.articles;
  } catch (error) {
    throw error;
  }
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

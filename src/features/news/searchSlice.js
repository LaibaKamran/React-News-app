import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import moment from 'moment';

const API_KEY =  import.meta.env.VITE_REACT_APP_API_KEY;

const initialState = {
  loading: false,
  searchResults: [],
  error: null,
};


const calculateDateRange = (selectedDateRange) => {
  switch (selectedDateRange) {
    case 'last_week':
      return moment().subtract(1, 'week').format('YYYY-MM-DD');
    case 'last_month':
      return moment().subtract(1, 'month').format('YYYY-MM-DD');
    case 'last_six_months':
      return moment().subtract(6, 'months').format('YYYY-MM-DD');
    case 'last_year':
      return moment().subtract(1, 'year').format('YYYY-MM-DD');
    default:
      return null;
  }
};

export const fetchSearchResults = createAsyncThunk(
    'search/fetchSearchResults',
    async ({ query, selectedDateRange, selectedSortBy }) => {
      const queryParams = [];
  
      if (query) {
        queryParams.push(`q=${query}`);
      }
  
      if (selectedDateRange) {
        const dateRange = calculateDateRange(selectedDateRange);
        queryParams.push(`from=${dateRange}`);
      }
  
      if (selectedSortBy) {
        queryParams.push(`sortBy=${selectedSortBy}`);
      }
  
      const queryString = queryParams.join('&');
      console.log(queryString);

      try{
      const response = await axios.get(
        `https://newsapi.org/v2/everything?${queryString}&apiKey=${API_KEY}`
      );

      return response.data.articles;
      }catch (error) {
        // Use rejectWithValue to pass the error message to the reducer
        return rejectWithValue(error.message);
      }
    }
  );  

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      });
  },
});

export default searchSlice.reducer;
export const selectSearchResults = (state) => state.search.searchResults;
export const selectLoading = (state) => state.search.loading;
export const selectError = (state) => state.search.error;

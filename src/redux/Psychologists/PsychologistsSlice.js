import { createSlice } from '@reduxjs/toolkit';
import { psychologistThunk } from './operations';



const initialState = {
  items:[],
  lastKey: null,
  loading: false,
  error: null,
};

const psychologistsSlice = createSlice({
  name: 'psychologists',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(psychologistThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(psychologistThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        // state.lastKey = action.payload.lastPsychologistKey;
        state.loading = false;
      })
  },
});



export const selectPsychologists = state => state.psychologist.items;
export const selectPsychologistsLastKey = state => state.psychologist.lastKey;
export const selectIsLoading = state => state.psychologists.loading;
export const selectError = state => state.psychologists.error;
export const psychologistsReducer = psychologistsSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';
// import { psychologistThunk } from './operations';




// const initialState = {
//   items:[],
//   limit:3,
//   morePsychologists: true,
//   loading: false,
//   error: null,
// };

// const psychologistsSlice = createSlice({
//   name: 'psychologists',
//   initialState: initialState,
//   extraReducers: builder => {
//     builder
//       .addCase(psychologistThunk.pending, (state, action) => {
//         state.loading = true;
//       })
//       .addCase(psychologistThunk.fulfilled, (state, action) => {
//         state.items = action.payload;
//         state.loading = false;
//       })
//   },
// });



// export const selectPsychologists = state => state.psychologist.items;
// export const selectPsychologistsLimit = state => state.psychologist.limit;
// export const selectMorePsychologists = state => state.psychologist.morePsychologists;
// export const selectIsLoading = state => state.psychologists.loading;
// export const selectError = state => state.psychologists.error;
// export const psychologistsReducer = psychologistsSlice.reducer;



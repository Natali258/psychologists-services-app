import { createSlice } from '@reduxjs/toolkit';
import {
  registerThunk,
} from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    selectIsLoggedIn: state => state.isLoggedIn,
    selectIsLoading: state => state.isLoading,
    selectUser: state => state.user,
  },
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
     
  },
});
export const authReducer = AuthSlice.reducer;
export const { selectIsLoggedIn, selectIsLoading, selectUser } =
AuthSlice.selectors;
 
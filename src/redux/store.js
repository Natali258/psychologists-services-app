import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import { authReducer } from './Auth/AuthSlice';
import { psychologistsReducer } from './Psychologists/PsychologistsSlice';

const persistConfig = {
  key: 'userItem',
  // key: 'psychologistIteam',
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, authReducer);
const peConfig = {
  key: 'psychologistsItem',
  storage,
};
const pedReducer = persistReducer(peConfig, psychologistsReducer);
export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    psychologist: pedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
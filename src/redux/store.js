import { configureStore } from '@reduxjs/toolkit';
import contactSlice, { filterReducer } from './reducer';

const store = configureStore({
  reducer: {
    phoneBook: contactSlice,
    filter: filterReducer,
  },
});

export default store;

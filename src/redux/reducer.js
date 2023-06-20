import { createReducer, createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';
import { setFilter } from './actions';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    //
    // Fetch
    [fetchContacts.fulfilled]: (state, { payload }) => ({
      ...state,
      items: payload,
      isLoading: false,
      error: null,
    }),
    [fetchContacts.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
    [fetchContacts.pending]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    //
    // Delete
    [deleteContact.fulfilled]: (state, { payload }) => ({
      ...state,
      items: state.items.filter(({ id }) => id !== payload),
    }),
    [deleteContact.pending]: state => ({
      ...state,
      isLoading: false,
      error: null,
    }),
    [deleteContact.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
    //
    // Add
    [addContact.fulfilled]: (state, { payload }) => ({
      ...state,
      items: [...state.items, payload],
      isLoading: false,
      error: payload,
    }),
    [addContact.pending]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [addContact.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: true,
      error: payload,
    }),
  },
});

export default contactSlice.reducer;

export const filterReducer = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});

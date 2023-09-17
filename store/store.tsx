import {configureStore, createSlice} from '@reduxjs/toolkit';

const initialState = {};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
});

export const store = configureStore({reducer: eventsSlice.reducer});

import {createReducer} from '@reduxjs/toolkit';
import {failFilmsLoading, loadFilms, requestFilms} from '../action';

const initialState = {
  films: [],
  areFilmsLoading: false,
  loadingError: null
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(requestFilms, (state) => {
      state.films = [];
      state.areFilmsLoading = true;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.areFilmsLoading = false;
    })
    .addCase(failFilmsLoading, (state, action) => {
      state.films = [];
      state.loadingError = action.payload;
    });
});

export default data;

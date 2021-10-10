import {createReducer} from '@reduxjs/toolkit';
import {setGenreFilter} from '../action';

const DEFAULT_GENRE = `All genres`;
const initialState = {
  genre: DEFAULT_GENRE
};

const genre = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenreFilter, (state, action) => {
      state.genre = action.payload;
    });
});

export default genre;

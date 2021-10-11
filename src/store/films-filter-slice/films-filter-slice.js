import {createSlice} from '@reduxjs/toolkit';
import {
  DEFAULT_GENRE_FILTER,
  MAX_FILMS_CARDS_TO_RENDER_ONCE,
  SliceName
} from '../../constants';

const initialState = {
  genreFilter: DEFAULT_GENRE_FILTER,
  cardsCount: MAX_FILMS_CARDS_TO_RENDER_ONCE
};

const filmsFilterSlice = createSlice({
  name: SliceName.FILMS_FILTER,
  initialState,
  reducers: {
    setGenreFilter(state, action) {
      state.genreFilter = action.payload;
    },
    increaseCardsCount(state, action) {
      state.cardsCount = state.cardsCount + action.payload;
    },
    resetCardsCount(state) {
      state.cardsCount = MAX_FILMS_CARDS_TO_RENDER_ONCE;
    }
  },
});

export const {
  setGenreFilter,
  increaseCardsCount,
  resetCardsCount,
} = filmsFilterSlice.actions;

export default filmsFilterSlice.reducer;

export const selectGenreFilter = (state) => state[SliceName.FILMS_FILTER].genreFilter;
export const selectCardsCount = (state) => state[SliceName.FILMS_FILTER].cardsCount;

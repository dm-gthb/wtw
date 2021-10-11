import {createSlice} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {DEFAULT_GENRE_FILTER, LoadingState, SliceName} from '../../constants';
import {films as mockFilms} from '../../mocks/mocks';

const initialState = {
  films: mockFilms,
  status: LoadingState.IDLE,
  genreFilter: DEFAULT_GENRE_FILTER,
  cardsCount: 0
};

const filmsSlice = createSlice({
  name: SliceName.FILMS,
  initialState,
  reducers: {
    requestFilms(state) {
      state.films = [];
      state.status = LoadingState.LOADING;
    },
    loadFilms(state, action) {
      state.films = action.payload;
      state.status = LoadingState.SUCCEEDED;
    },
    failFilmsLoading(state) {
      state.films = [];
      state.status = LoadingState.FAILED;
    },
    setGenreFilter(state, action) {
      state.genreFilter = action.payload;
    },
    increaseCardsCount(state, action) {
      state.cardsCount = state.cardsCount + action.payload;
    },
    resetCardsCount(state) {
      state.cardsCount = 0;
    }
  },
});

export const {
  requestFilms,
  loadFilms,
  failFilmsLoading,
  setGenreFilter,
  increaseCardsCount,
  resetCardsCount,
} = filmsSlice.actions;

export default filmsSlice.reducer;

export const selectFilms = (state) => {
  return state[SliceName.FILMS].films;
};

export const selectGenreFilter = (state) => state[SliceName.FILMS].genreFilter;

export const selectGenres = createSelector(
    selectFilms,
    (films) => [DEFAULT_GENRE_FILTER, ...new Set(films.map((film) => film.genre))]
);

export const selectFilmsByGenre = createSelector(
    selectFilms,
    selectGenreFilter,
    (films, genre) => genre === DEFAULT_GENRE_FILTER ? films : films.filter((film) => film.genre === genre)
);

export const selectCardsCount = (state) => state[SliceName.FILMS].cardsCount;

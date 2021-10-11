import {createSlice} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {DEFAULT_GENRE_FILTER, LoadingState, SliceName} from '../../constants';
import {films as mockFilms} from '../../mocks/mocks';
import {selectGenreFilter} from '../films-filter-slice/films-filter-slice';

const initialState = {
  films: mockFilms,
  status: LoadingState.IDLE,
};

const filmsDataSlice = createSlice({
  name: SliceName.FILMS_DATA,
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
    }
  },
});

export const {
  requestFilms,
  loadFilms,
  failFilmsLoading,
} = filmsDataSlice.actions;

export default filmsDataSlice.reducer;

export const selectFilms = (state) => {
  return state[SliceName.FILMS_DATA].films;
};

export const selectGenres = createSelector(
    selectFilms,
    (films) => [DEFAULT_GENRE_FILTER, ...new Set(films.map((film) => film.genre))]
);

export const selectFilmsByGenre = createSelector(
    selectFilms,
    selectGenreFilter,
    (films, genre) => genre === DEFAULT_GENRE_FILTER ? films : films.filter((film) => film.genre === genre)
);

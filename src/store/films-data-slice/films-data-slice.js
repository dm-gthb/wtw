import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {
  AppRoute,
  DEFAULT_GENRE_FILTER,
  LoadingState,
  SliceName
} from '../../constants';
import api from '../../service/api';
import {selectGenreFilter} from '../films-filter-slice/films-filter-slice';

const initialState = {
  films: [],
  status: LoadingState.IDLE,
};

const FETCH_FILM_ACTION_NAME = `fetchFilms`;

export const fetchFilms = createAsyncThunk(
    `${SliceName.FILMS_DATA}/${FETCH_FILM_ACTION_NAME}`,
    async () => {
      const response = await api.get(AppRoute.FILMS);
      return response.data;
    }
);

const filmsDataSlice = createSlice({
  name: SliceName.FILMS_DATA,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.films = [];
        state.status = LoadingState.LOADING;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.status = LoadingState.SUCCEEDED;
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.films = [];
        state.status = LoadingState.FAILED;
      });
  }
});

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

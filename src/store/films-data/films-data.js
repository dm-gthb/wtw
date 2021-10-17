import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {
  DEFAULT_GENRE_FILTER,
  LoadingStatus,
  SliceName
} from '../../constants';
import {selectGenreFilter} from '../films-filter/films-filter';

const FETCH_FILMS_ACTION = `fetchFilms`;
const FETCH_CURRENT_FILM_ACTION = `fetchCurrentFilm`;

const initialState = {
  films: [],
  filmsLoadingStatus: LoadingStatus.IDLE,
  currentFilm: null,
  currentFilmLoadingStatus: LoadingStatus.IDLE,
};

export const fetchFilms = createAsyncThunk(
    `${SliceName.FILMS_DATA}/${FETCH_FILMS_ACTION}`,
    async (_, {extra: api}) => {
      const films = await api.getFilms();
      return films;
    }
);

export const fetchCurrentFilm = createAsyncThunk(
    `${SliceName.FILMS_DATA}/${FETCH_CURRENT_FILM_ACTION}`,
    async (id, {extra: api}) => {
      const film = await api.getFilm(id);
      return film;
    }
);

const filmsDataSlice = createSlice({
  name: SliceName.FILMS_DATA,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.films = [];
        state.filmsLoadingStatus = LoadingStatus.LOADING;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.filmsLoadingStatus = LoadingStatus.SUCCEEDED;
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.films = [];
        state.filmsLoadingStatus = LoadingStatus.FAILED;
      })
      .addCase(fetchCurrentFilm.pending, (state) => {
        state.currentFilm = null;
        state.currentFilmLoadingStatus = LoadingStatus.LOADING;
      })
      .addCase(fetchCurrentFilm.fulfilled, (state, action) => {
        state.currentFilm = action.payload;
        state.currentFilmLoadingStatus = LoadingStatus.SUCCEEDED;
      })
      .addCase(fetchCurrentFilm.rejected, (state) => {
        state.currentFilm = null;
        state.currentFilmLoadingStatus = LoadingStatus.FAILED;
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

export const selectFilmsListLoadingStatus = (state) => state[SliceName.FILMS_DATA].filmsLoadingStatus;
export const selectCurrentFilmLoadingStatus = (state) => state[SliceName.FILMS_DATA].currentFilmLoadingStatus;
export const selectCurrentFilm = (state) => state[SliceName.FILMS_DATA].currentFilm;
export const selectFilmById = (state, filmId) => state[SliceName.FILMS_DATA].films.find((film) => film.id === filmId);

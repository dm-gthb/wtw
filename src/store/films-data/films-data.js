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
const FETCH_PROMO_FILM_ACTION = `fetchPromoFilm`;
const FETCH_FAVORITES_FILMS_ACTION = `fetchFavoritesFilms`;

const initialState = {
  films: [],
  filmsLoadingStatus: LoadingStatus.IDLE,
  favoriteFilms: [],
  favoriteFilmsLoadingStatus: LoadingStatus.IDLE,
  currentFilm: null,
  currentFilmLoadingStatus: LoadingStatus.IDLE,
  promoFilm: null,
  promoFilmLoadingStatus: LoadingStatus.IDLE,
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

export const fetchPromoFilm = createAsyncThunk(
    `${SliceName.FILMS_DATA}/${FETCH_PROMO_FILM_ACTION}`,
    async (_, {extra: api}) => {
      const film = await api.getPromoFilm();
      return film;
    }
);

export const fetchFavoritesFilms = createAsyncThunk(
    `${SliceName.FILMS_DATA}/${FETCH_FAVORITES_FILMS_ACTION}`,
    async (_, {extra: api}) => {
      const films = await api.getFavoritesFilms();
      return films;
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
      .addCase(fetchFavoritesFilms.pending, (state) => {
        state.favoriteFilms = [];
        state.favoriteFilmsLoadingStatus = LoadingStatus.LOADING;
      })
      .addCase(fetchFavoritesFilms.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.favoriteFilmsLoadingStatus = LoadingStatus.SUCCEEDED;
      })
      .addCase(fetchFavoritesFilms.rejected, (state) => {
        state.favoriteFilms = [];
        state.favoriteFilmsLoadingStatus = LoadingStatus.FAILED;
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
      })
      .addCase(fetchPromoFilm.pending, (state) => {
        state.promoFilm = null;
        state.promoFilmLoadingStatus = LoadingStatus.LOADING;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.promoFilmLoadingStatus = LoadingStatus.SUCCEEDED;
      })
      .addCase(fetchPromoFilm.rejected, (state) => {
        state.promoFilm = null;
        state.promoFilmLoadingStatus = LoadingStatus.FAILED;
      });
  }
});

export default filmsDataSlice.reducer;

export const selectFilms = (state) => state[SliceName.FILMS_DATA].films;

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
export const selectFavoriteFilms = (state) => state[SliceName.FILMS_DATA].favoriteFilms;
export const selectFavoriteFilmsListLoadingStatus = (state) => state[SliceName.FILMS_DATA].favoriteFilmsLoadingStatus;
export const selectCurrentFilmLoadingStatus = (state) => state[SliceName.FILMS_DATA].currentFilmLoadingStatus;
export const selectCurrentFilm = (state) => state[SliceName.FILMS_DATA].currentFilm;
export const selectPromoFilm = (state) => state[SliceName.FILMS_DATA].promoFilm;
export const selectPromoFilmLoadingStatus = (state) => state[SliceName.FILMS_DATA].promoFilmLoadingStatus;
export const selectFilmById = (state, filmId) => state[SliceName.FILMS_DATA].films.find((film) => film.id === filmId);

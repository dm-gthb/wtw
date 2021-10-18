import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {
  DEFAULT_GENRE_FILTER,
  LoadingStatus,
  SliceName
} from '../../constants';
import {selectGenreFilter} from '../films-filter/films-filter';

const FETCH_ALL = `fetchAll`;
const FETCH_PROMO = `fetchPromo`;
const FETCH_FAVORITES = `fetchFavorites`;
const ADD_TO_FAVORITES = `addToFavorites`;
const REMOVE_FROM_FAVORITES = `removeFromFavorites`;

const initialState = {
  films: [],
  filmsLoadingStatus: LoadingStatus.IDLE,

  promoFilm: null,
  promoFilmLoadingStatus: LoadingStatus.IDLE,

  favoriteFilms: [],
  favoriteFilmsLoadingStatus: LoadingStatus.IDLE,
  favoritePostingStatus: LoadingStatus.IDLE,
};

export const fetchAllFilms = createAsyncThunk(
    `${SliceName.FILMS_DATA}/${FETCH_ALL}`,
    async (_, {extra: api}) => {
      const films = await api.getFilms();
      return films;
    }
);

export const fetchPromoFilm = createAsyncThunk(
    `${SliceName.FILMS_DATA}/${FETCH_PROMO}`,
    async (_, {extra: api}) => {
      const film = await api.getPromoFilm();
      return film;
    }
);

export const fetchFavoriteFilms = createAsyncThunk(
    `${SliceName.FILMS_DATA}/${FETCH_FAVORITES}`,
    async (_, {extra: api}) => {
      const films = await api.getFavoritesFilms();
      return films;
    }
);

export const addFilmToFavorites = createAsyncThunk(
    `${SliceName.FILMS_DATA}/${ADD_TO_FAVORITES}`,
    async (filmId, {dispatch, extra: api}) => {
      await api.addFilmToFavorites(filmId);
      dispatch(fetchFavoriteFilms());
    }
);

export const removeFilmFromFavorites = createAsyncThunk(
    `${SliceName.FILMS_DATA}/${REMOVE_FROM_FAVORITES}`,
    async (filmId, {dispatch, extra: api}) => {
      await api.removeFilmFromFavorites(filmId);
      dispatch(fetchFavoriteFilms());
    }
);

const filmsDataSlice = createSlice({
  name: SliceName.FILMS_DATA,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilms.pending, (state) => {
        state.films = [];
        state.filmsLoadingStatus = LoadingStatus.LOADING;
      })
      .addCase(fetchAllFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.filmsLoadingStatus = LoadingStatus.SUCCEEDED;
      })
      .addCase(fetchAllFilms.rejected, (state) => {
        state.films = [];
        state.filmsLoadingStatus = LoadingStatus.FAILED;
      })
      .addCase(fetchFavoriteFilms.pending, (state) => {
        state.favoriteFilms = [];
        state.favoriteFilmsLoadingStatus = LoadingStatus.LOADING;
      })
      .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.favoriteFilmsLoadingStatus = LoadingStatus.SUCCEEDED;
      })
      .addCase(fetchFavoriteFilms.rejected, (state) => {
        state.favoriteFilms = [];
        state.favoriteFilmsLoadingStatus = LoadingStatus.FAILED;
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
      })
      .addCase(addFilmToFavorites.pending, (state) => {
        state.favoritePostingStatus = LoadingStatus.LOADING;
      })
      .addCase(addFilmToFavorites.fulfilled, (state) => {
        state.favoritePostingStatus = LoadingStatus.SUCCEEDED;
      })
      .addCase(addFilmToFavorites.rejected, (state) => {
        state.favoritePostingStatus = LoadingStatus.FAILED;
      })
      .addCase(removeFilmFromFavorites.pending, (state) => {
        state.favoritePostingStatus = LoadingStatus.LOADING;
      })
      .addCase(removeFilmFromFavorites.fulfilled, (state) => {
        state.favoritePostingStatus = LoadingStatus.SUCCEEDED;
      })
      .addCase(removeFilmFromFavorites.rejected, (state) => {
        state.favoritePostingStatus = LoadingStatus.FAILED;
      });
  }
});

export default filmsDataSlice.reducer;

export const selectAllFilms = (state) => state[SliceName.FILMS_DATA].films;

export const selectGenres = createSelector(
    selectAllFilms,
    (films) => [DEFAULT_GENRE_FILTER, ...new Set(films.map((film) => film.genre))]
);

export const selectFilmsByGenre = createSelector(
    selectAllFilms,
    selectGenreFilter,
    (films, genre) => genre === DEFAULT_GENRE_FILTER ? films : films.filter((film) => film.genre === genre)
);

export const selectFilmsLoadingStatus = (state) => state[SliceName.FILMS_DATA].filmsLoadingStatus;
export const selectFilmById = (state, filmId) => state[SliceName.FILMS_DATA].films.find((film) => film.id === filmId);

export const selectPromoFilm = (state) => state[SliceName.FILMS_DATA].promoFilm;
export const selectPromoFilmLoadingStatus = (state) => state[SliceName.FILMS_DATA].promoFilmLoadingStatus;

export const selectFavoriteFilms = (state) => state[SliceName.FILMS_DATA].favoriteFilms;
export const selectFavoriteFilmsLoadingStatus = (state) => state[SliceName.FILMS_DATA].favoriteFilmsLoadingStatus;
export const selectIsFavoriteById = (state, filmId) => selectFavoriteFilms(state).some((film) => film.id === filmId);

export const selectFavoritePostingStatus = (state) => state[SliceName.FILMS_DATA].favoritePostingStatus;

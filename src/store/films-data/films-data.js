import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {
  DEFAULT_GENRE_FILTER,
  LoadingStatus,
  MAX_GENRES_COUNT,
  SliceName
} from '../../constants';
import {getActionNameBySlice} from '../../util/util';
import {selectGenreFilter} from '../films-filter/films-filter';

const getThunkName = (action) => getActionNameBySlice(SliceName.FILMS_DATA, action);

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
    getThunkName(`fetchAll`),
    async (_, {extra: api}) => {
      const films = await api.getFilms();
      return films;
    }
);

export const fetchPromoFilm = createAsyncThunk(
    getThunkName(`fetchPromo`),
    async (_, {extra: api}) => {
      const film = await api.getPromoFilm();
      return film;
    }
);

export const fetchFavoriteFilms = createAsyncThunk(
    getThunkName(`fetchFavorites`),
    async (_, {extra: api}) => {
      const films = await api.getFavoritesFilms();
      return films;
    }
);

export const addFilmToFavorites = createAsyncThunk(
    getThunkName(`addToFavorites`),
    async (filmId, {dispatch, extra: api}) => {
      await api.addFilmToFavorites(filmId);
      dispatch(fetchFavoriteFilms());
    }
);

export const removeFilmFromFavorites = createAsyncThunk(
    getThunkName(`removeFromFavorites`),
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
    (films) => {
      const uniqGenres = new Set(films.map((film) => film.genre));
      if (uniqGenres.size > MAX_GENRES_COUNT - 1) {
        return [DEFAULT_GENRE_FILTER, ...uniqGenres].slice(0, MAX_GENRES_COUNT);
      }
      return [DEFAULT_GENRE_FILTER, ...uniqGenres];
    }
);

export const selectFilmsByGenre = createSelector(
    selectAllFilms,
    selectGenreFilter,
    (films, genre) => {
      return genre === DEFAULT_GENRE_FILTER ? films : films.filter((film) => film.genre === genre);
    }
);

export const selectFilmsLoadingStatus = (state) => state[SliceName.FILMS_DATA].filmsLoadingStatus;
export const selectFilmById = (state, filmId) => state[SliceName.FILMS_DATA].films.find((film) => film.id === filmId);

export const selectPromoFilm = (state) => state[SliceName.FILMS_DATA].promoFilm;
export const selectPromoFilmLoadingStatus = (state) => state[SliceName.FILMS_DATA].promoFilmLoadingStatus;

export const selectFavoriteFilms = (state) => state[SliceName.FILMS_DATA].favoriteFilms;
export const selectFavoriteFilmsLoadingStatus = (state) => state[SliceName.FILMS_DATA].favoriteFilmsLoadingStatus;
export const selectIsFavoriteById = (state, filmId) => selectFavoriteFilms(state).some((film) => film.id === filmId);
export const selectFavoritePostingStatus = (state) => state[SliceName.FILMS_DATA].favoritePostingStatus;

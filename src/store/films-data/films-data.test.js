import {LoadingStatus} from '../../constants';
import reducer, {fetchFavoriteFilms, fetchAllFilms, fetchPromoFilm} from './films-data';

describe(`Reducer works correctly`, () => {
  const initialState = {
    films: [
      {
        id: 1,
        title: `Film 1`,
      },
      {
        id: 2,
        title: `Film 2`,
      },
    ],
    filmsLoadingStatus: LoadingStatus.IDLE,
    favoriteFilms: [
      {
        id: 1,
        title: `Film 1`,
      },
      {
        id: 2,
        title: `Film 2`,
      },
    ],
    favoriteFilmsLoadingStatus: LoadingStatus.IDLE,
    promoFilm: null,
    promoFilmLoadingStatus: LoadingStatus.IDLE,
  };

  describe(`Films list fetching works correctly`, () => {
    it(`should handle requesting films`, () => {
      expect(reducer(initialState, fetchAllFilms.pending())).toEqual({
        ...initialState,
        films: [],
        filmsLoadingStatus: LoadingStatus.LOADING,
      });
    });

    it(`should handle loading films`, () => {
      const loadedFilms = [
        {
          id: 100,
          title: `Loaded Film Title`
        }
      ];

      expect(reducer(initialState, fetchAllFilms.fulfilled(loadedFilms))).toEqual({
        ...initialState,
        films: loadedFilms,
        filmsLoadingStatus: LoadingStatus.SUCCEEDED,
      });
    });

    it(`should handle loading error`, () => {
      expect(reducer(initialState, fetchAllFilms.rejected())).toEqual({
        ...initialState,
        films: [],
        filmsLoadingStatus: LoadingStatus.FAILED,
      });
    });
  });

  describe(`Favorite films fetching works correctly`, () => {
    it(`should handle requesting films`, () => {
      expect(reducer(initialState, fetchFavoriteFilms.pending())).toEqual({
        ...initialState,
        favoriteFilms: [],
        favoriteFilmsLoadingStatus: LoadingStatus.LOADING,
      });
    });

    it(`should handle loading favoriteFilms`, () => {
      const loadedFilms = [
        {
          id: 100,
          title: `Loaded Film Title`
        }
      ];

      expect(reducer(initialState, fetchFavoriteFilms.fulfilled(loadedFilms))).toEqual({
        ...initialState,
        favoriteFilms: loadedFilms,
        favoriteFilmsLoadingStatus: LoadingStatus.SUCCEEDED,
      });
    });

    it(`should handle loading error`, () => {
      expect(reducer(initialState, fetchFavoriteFilms.rejected())).toEqual({
        ...initialState,
        favoriteFilms: [],
        favoriteFilmsLoadingStatus: LoadingStatus.FAILED,
      });
    });
  });

  describe(`Promo film fetching works correctly`, () => {
    it(`should handle pending loading`, () => {
      expect(reducer(initialState, fetchPromoFilm.pending())).toEqual({
        ...initialState,
        promoFilm: null,
        promoFilmLoadingStatus: LoadingStatus.LOADING
      });
    });

    it(`should handle finished film load`, () => {
      expect(reducer(initialState, fetchPromoFilm.fulfilled({id: 1, title: `Test Current Film`}))).toEqual({
        ...initialState,
        promoFilm: {id: 1, title: `Test Current Film`},
        promoFilmLoadingStatus: LoadingStatus.SUCCEEDED
      });
    });

    it(`should handle failed load`, () => {
      expect(reducer(initialState, fetchPromoFilm.rejected())).toEqual({
        ...initialState,
        promoFilm: null,
        promoFilmLoadingStatus: LoadingStatus.FAILED
      });
    });
  });
});

import {LoadingStatus} from '../../constants';
import reducer, {fetchCurrentFilm, fetchFavoritesFilms, fetchFilms, fetchPromoFilm} from './films-data';

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
    currentFilm: null,
    currentFilmLoadingStatus: LoadingStatus.IDLE,
    promoFilm: null,
    promoFilmLoadingStatus: LoadingStatus.IDLE,
  };

  describe(`Films list fetching works correctly`, () => {
    it(`should handle requesting films`, () => {
      expect(reducer(initialState, fetchFilms.pending())).toEqual({
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

      expect(reducer(initialState, fetchFilms.fulfilled(loadedFilms))).toEqual({
        ...initialState,
        films: loadedFilms,
        filmsLoadingStatus: LoadingStatus.SUCCEEDED,
      });
    });

    it(`should handle loading error`, () => {
      expect(reducer(initialState, fetchFilms.rejected())).toEqual({
        ...initialState,
        films: [],
        filmsLoadingStatus: LoadingStatus.FAILED,
      });
    });
  });

  describe(`Favorite films fetching works correctly`, () => {
    it(`should handle requesting films`, () => {
      expect(reducer(initialState, fetchFavoritesFilms.pending())).toEqual({
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

      expect(reducer(initialState, fetchFavoritesFilms.fulfilled(loadedFilms))).toEqual({
        ...initialState,
        favoriteFilms: loadedFilms,
        favoriteFilmsLoadingStatus: LoadingStatus.SUCCEEDED,
      });
    });

    it(`should handle loading error`, () => {
      expect(reducer(initialState, fetchFavoritesFilms.rejected())).toEqual({
        ...initialState,
        favoriteFilms: [],
        favoriteFilmsLoadingStatus: LoadingStatus.FAILED,
      });
    });
  });


  describe(`Current film fetching works correctly`, () => {
    it(`should handle pending loading`, () => {
      expect(reducer(initialState, fetchCurrentFilm.pending())).toEqual({
        ...initialState,
        currentFilm: null,
        currentFilmLoadingStatus: LoadingStatus.LOADING
      });
    });

    it(`should handle finished film load`, () => {
      expect(reducer(initialState, fetchCurrentFilm.fulfilled({id: 1, title: `Test Current Film`}))).toEqual({
        ...initialState,
        currentFilm: {id: 1, title: `Test Current Film`},
        currentFilmLoadingStatus: LoadingStatus.SUCCEEDED
      });
    });

    it(`should handle failed load`, () => {
      expect(reducer(initialState, fetchCurrentFilm.rejected())).toEqual({
        ...initialState,
        currentFilm: null,
        currentFilmLoadingStatus: LoadingStatus.FAILED
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

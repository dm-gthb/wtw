import {LoadingStatus} from '../../constants';
import reducer, {fetchCurrentFilm, fetchFilms} from './films-data-slice';

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
    currentFilm: null,
    currentFilmLoadingStatus: LoadingStatus.IDLE,
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
});

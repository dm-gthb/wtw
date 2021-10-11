import {LoadingState} from '../../constants';
import reducer, {
  failFilmsLoading,
  loadFilms,
  requestFilms,
} from './films-data-slice';

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
    status: LoadingState.IDLE,
    genreFilter: `default`,
    cardsCount: 0,
  };

  it(`should handle requesting films`, () => {
    expect(reducer(initialState, requestFilms())).toEqual({
      ...initialState,
      films: [],
      status: LoadingState.LOADING,
    });
  });

  it(`should handle loading films`, () => {
    const loadedFilms = [
      {
        id: 100,
        title: `Loaded Film Title`
      }
    ];

    expect(reducer(initialState, loadFilms(loadedFilms))).toEqual({
      ...initialState,
      films: loadedFilms,
      status: LoadingState.SUCCEEDED,
    });
  });

  it(`should handle loading error`, () => {
    expect(reducer(initialState, failFilmsLoading(`error`))).toEqual({
      ...initialState,
      films: [],
      status: LoadingState.FAILED,
    });
  });
});

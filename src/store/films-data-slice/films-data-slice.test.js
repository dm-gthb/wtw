import {LoadingStatus} from '../../constants';
import reducer, {fetchFilms} from './films-data-slice';

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
    status: LoadingStatus.IDLE,
    genreFilter: `default`,
    cardsCount: 0,
  };

  it(`should handle requesting films`, () => {
    expect(reducer(initialState, fetchFilms.pending())).toEqual({
      ...initialState,
      films: [],
      status: LoadingStatus.LOADING,
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
      status: LoadingStatus.SUCCEEDED,
    });
  });

  it(`should handle loading error`, () => {
    expect(reducer(initialState, fetchFilms.rejected())).toEqual({
      ...initialState,
      films: [],
      status: LoadingStatus.FAILED,
    });
  });
});

import {ActionType, setGenreFilter, failFilmsLoading, loadFilms, requestFilms} from './action';

describe(`Actions work correctly`, () => {
  it(`setGenreFilter returns correct action`, () => {
    expect(setGenreFilter(`new genre`)).toEqual({
      type: ActionType.SET_GENRE_FILTER,
      payload: `new genre`
    });
  });

  it(`requestFilms returns correct action`, () => {
    expect(requestFilms()).toEqual({
      type: ActionType.FETCH_FILMS_REQUESTED
    });
  });

  it(`loadFilms returns correct action`, () => {
    expect(loadFilms([{id: 0, title: `test`}])).toEqual({
      type: ActionType.FETCH_FILMS_SUCCESS,
      payload: [{id: 0, title: `test`}]
    });
  });

  it(`failFilmsLoading returns correct action`, () => {
    expect(failFilmsLoading(`error`)).toEqual({
      type: ActionType.FETCH_FILMS_FAILURE,
      payload: `error`
    });
  });
});

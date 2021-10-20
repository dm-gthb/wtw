import {DEFAULT_GENRE_FILTER, MAX_FILMS_CARDS_TO_RENDER_ONCE} from '../../constants';
import reducer, {
  increaseCardsCount,
  resetCardsCount,
  resetGenreFilter,
  setGenreFilter
} from './films-filter';

describe(`Reducer works correctly`, () => {
  const initialState = {
    genreFilter: DEFAULT_GENRE_FILTER,
    maxCardsCount: MAX_FILMS_CARDS_TO_RENDER_ONCE,
  };

  it(`should set genre filter`, () => {
    expect(reducer(initialState, setGenreFilter(`test filter`))).toEqual({
      ...initialState,
      genreFilter: `test filter`,
    });
  });

  it(`should reset genre filter`, () => {
    expect(reducer(initialState, resetGenreFilter())).toEqual({
      ...initialState,
      genreFilter: DEFAULT_GENRE_FILTER,
    });
  });

  it(`should increase cards count`, () => {
    expect(reducer(initialState, increaseCardsCount(10))).toEqual({
      ...initialState,
      maxCardsCount: 10 + MAX_FILMS_CARDS_TO_RENDER_ONCE
    });
  });

  it(`should reset cards count`, () => {
    expect(reducer(initialState, resetCardsCount())).toEqual({
      ...initialState,
      maxCardsCount: MAX_FILMS_CARDS_TO_RENDER_ONCE
    });
  });
});

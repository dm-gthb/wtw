import reducer, {
  increaseCardsCount,
  resetCardsCount,
  setGenreFilter
} from './films-filter';

describe(`Reducer works correctly`, () => {
  const initialState = {
    genreFilter: `default`,
    cardsCount: 0,
  };

  it(`should set genre filter`, () => {
    expect(reducer(initialState, setGenreFilter(`test filter`))).toEqual({
      ...initialState,
      genreFilter: `test filter`,
    });
  });

  it(`should increase cards count`, () => {
    expect(reducer(initialState, increaseCardsCount(10))).toEqual({
      ...initialState,
      cardsCount: 10
    });
  });

  it(`should reset cards count`, () => {
    expect(reducer(initialState, resetCardsCount())).toEqual({
      ...initialState,
      cardsCount: 0
    });
  });
});

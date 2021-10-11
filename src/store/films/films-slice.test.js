import reducer, {
  failFilmsLoading,
  loadFilms,
  requestFilms,
  setGenreFilter
} from './films-slice';

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
    areFilmsLoading: false,
    loadingError: null,
    genreFilter: `default`,
  };

  it(`should handle requesting films`, () => {
    expect(reducer(initialState, requestFilms())).toEqual({
      films: [],
      areFilmsLoading: true,
      loadingError: null,
      genreFilter: `default`,
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
    });
  });

  it(`should handle loading error`, () => {
    expect(reducer(initialState, failFilmsLoading(`error`))).toEqual({
      ...initialState,
      loadingError: `error`,
    });
  });

  it(`should set genre filter`, () => {
    expect(reducer(initialState, setGenreFilter(`test filter`))).toEqual({
      ...initialState,
      genreFilter: `test filter`,
    });
  });
});

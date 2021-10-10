import {setGenreFilter} from '../action';
import filter from './filter';

describe(`Genre reducer works correctly`, () => {
  it(`returns init state for unknown action`, () => {
    const initialState = {genre: `all`};
    expect(filter(initialState, {type: `unknown`})).toEqual({genre: `all`});
  });
  it(`changes genre`, () => {
    const initialState = {genre: `all`};
    expect(filter(initialState, setGenreFilter(`new genre`))).toEqual({genre: `new genre`});
  });
});

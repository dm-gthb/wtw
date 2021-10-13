import {AuthStatus} from '../../constants';
import reducer, {checkAuth, login} from './user-slice';

describe(`Reducer works correctly`, () => {
  const initialState = {
    auth: AuthStatus.NO_AUTH,
    userData: null,
  };

  it(`should handle checking authorized`, () => {
    expect(reducer(initialState, checkAuth.fulfilled({
      userData: {id: 0, name: `Test`},
      auth: AuthStatus.AUTH
    }))).toEqual({
      userData: {id: 0, name: `Test`},
      auth: AuthStatus.AUTH,
    });
  });

  it(`should handle checking unauthorized`, () => {
    expect(reducer(initialState, checkAuth.fulfilled({
      userData: null,
      auth: AuthStatus.NO_AUTH
    }))).toEqual({
      userData: null,
      auth: AuthStatus.NO_AUTH
    });
  });

  it(`should handle success login`, () => {
    expect(reducer(initialState, login.fulfilled({
      userData: {id: 0, name: `Test`},
      auth: AuthStatus.AUTH
    }))).toEqual({
      userData: {id: 0, name: `Test`},
      auth: AuthStatus.AUTH
    });
  });

  it(`should handle failed login`, () => {
    expect(reducer(initialState, login.fulfilled({
      userData: null,
      auth: AuthStatus.NO_AUTH
    }))).toEqual({
      userData: null,
      auth: AuthStatus.NO_AUTH
    });
  });
});

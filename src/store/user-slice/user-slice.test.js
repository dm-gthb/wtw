import {AuthStatus, LoadingState} from '../../constants';
import reducer, {checkAuth} from './user-slice';

describe(`Reducer works correctly`, () => {
  const initialState = {
    auth: AuthStatus.NO_AUTH,
    status: LoadingState.IDLE,
  };

  it(`should handle loading auth status`, () => {
    expect(reducer(initialState, checkAuth.pending())).toEqual({
      auth: AuthStatus.NO_AUTH,
      status: LoadingState.LOADING,
    });
  });

  it(`should handle derived auth status`, () => {
    expect(reducer(initialState, checkAuth.fulfilled(AuthStatus.AUTH))).toEqual({
      auth: AuthStatus.AUTH,
      status: LoadingState.SUCCEEDED,
    });
  });

  it(`should handle auth status`, () => {
    expect(reducer(initialState, checkAuth.rejected())).toEqual({
      auth: AuthStatus.NO_AUTH,
      status: LoadingState.FAILED,
    });
  });
});

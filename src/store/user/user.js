import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
import {AuthStatus, SliceName} from '../../constants';

const CHECK_AUTH_STATUS_ACTION = `checkAuth`;
const LOGIN_ACTION = `login`;

const initialState = {
  auth: AuthStatus.NO_AUTH,
  userData: null,
};

const handleUserData = (userData) => ({
  userData,
  auth: userData ? AuthStatus.AUTH : AuthStatus.NO_AUTH
});

export const checkAuth = createAsyncThunk(
    `${SliceName.USER}/${CHECK_AUTH_STATUS_ACTION}`,
    async (_, {extra: api}) => {
      const userData = await api.checkAuth();
      return handleUserData(userData);
    }
);

export const login = createAsyncThunk(
    `${SliceName.USER}/${LOGIN_ACTION}`,
    async (data, {extra: api}) => {
      const userData = await api.login(data);
      if (userData) {
        browserHistory.push(`/`);
      }
      return handleUserData(userData);
    }
);

const userSlice = createSlice({
  name: SliceName.USER,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.userData = action.payload.userData;
        state.auth = action.payload.auth;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.userData = action.payload.userData;
        state.auth = action.payload.auth;
      });
  }
});

export default userSlice.reducer;

export const selectAuthStatus = (state) => state[SliceName.USER].auth;
export const selectUserData = (state) => state[SliceName.USER].userData;

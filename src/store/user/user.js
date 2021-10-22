import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {AuthStatus, SliceName} from '../../constants';
import {getActionNameBySlice} from '../../util/util';

const getThunkName = (action) => getActionNameBySlice(SliceName.FILMS_DATA, action);

const initialState = {
  auth: AuthStatus.NO_AUTH,
  userData: null,
};

const handleUserData = (data) => ({
  userData: data,
  auth: data ? AuthStatus.AUTH : AuthStatus.NO_AUTH
});

export const checkAuth = createAsyncThunk(
    getThunkName(`checkAuth`),
    async (_, {extra: api}) => {
      const userData = await api.checkAuth();
      return handleUserData(userData);
    }
);

export const login = createAsyncThunk(
    getThunkName(`login`),
    async (data, {extra: api}) => {
      const userData = await api.login(data);
      return handleUserData(userData);
    }
);

export const logout = createAsyncThunk(
    getThunkName(`logout`),
    async (_, {extra: api}) => {
      const userData = await api.logout();
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
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.userData = action.payload.userData;
        state.auth = action.payload.auth;
      });
  }
});

export default userSlice.reducer;

export const selectAuthStatus = (state) => state[SliceName.USER].auth;
export const selectUserData = (state) => state[SliceName.USER].userData;

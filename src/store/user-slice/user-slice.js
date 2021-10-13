import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {AuthStatus, LoadingStatus, SliceName} from '../../constants';

const initialState = {
  auth: AuthStatus.NO_AUTH,
  status: LoadingStatus.IDLE,
};

const CHECK_AUTH_STATUS_ACTION_NAME = `checkAuth`;

export const checkAuth = createAsyncThunk(
    `${SliceName.USER}/${CHECK_AUTH_STATUS_ACTION_NAME}`,
    async (_, {extra: api}) => {
      return await api.checkAuth();
    }
);

const userSlice = createSlice({
  name: SliceName.USER,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.auth = AuthStatus.NO_AUTH;
        state.status = LoadingStatus.LOADING;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.auth = action.payload;
        state.status = LoadingStatus.SUCCEEDED;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.auth = AuthStatus.NO_AUTH;
        state.status = LoadingStatus.FAILED;
      });
  }
});

export default userSlice.reducer;

export const selectAuthStatus = (state) => state[SliceName.USER].auth;

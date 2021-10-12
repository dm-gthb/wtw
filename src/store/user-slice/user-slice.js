import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {AuthStatus, LoadingState, SliceName} from '../../constants';

const initialState = {
  auth: AuthStatus.NO_AUTH,
  status: LoadingState.IDLE,
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
        state.status = LoadingState.LOADING;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.auth = action.payload;
        state.status = LoadingState.SUCCEEDED;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.auth = AuthStatus.NO_AUTH;
        state.status = LoadingState.FAILED;
      });
  }
});

export default userSlice.reducer;

export const selectIsAuth = (state) => state[SliceName.USER].auth;

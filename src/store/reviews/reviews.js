import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {LoadingStatus, SliceName} from '../../constants';

const FETCH_REVIEWS_ACTION = `fetchReviews`;

const initialState = {
  reviews: [],
  reviewsLoadingStatus: LoadingStatus.IDLE
};

export const fetchReviews = createAsyncThunk(
    `${SliceName.FILMS_DATA}/${FETCH_REVIEWS_ACTION}`,
    async (filmId, {extra: api}) => {
      const reviews = await api.getFilmReviews(filmId);
      return reviews;
    }
);

const reviewsSlice = createSlice({
  name: SliceName.REVIEWS,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.reviews = [];
        state.reviewsLoadingStatus = LoadingStatus.LOADING;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.reviewsLoadingStatus = LoadingStatus.SUCCEEDED;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.reviews = [];
        state.reviewsLoadingStatus = LoadingStatus.FAILED;
      });
  }
});

export const selectReviews = (state) => state[SliceName.REVIEWS].reviews;
export const selectReviewsLoadingStatus = (state) => state[SliceName.REVIEWS].reviewsLoadingStatus;

export default reviewsSlice.reducer;

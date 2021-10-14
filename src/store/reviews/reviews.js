import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {LoadingStatus, SliceName} from '../../constants';

const FETCH_REVIEWS_ACTION = `fetchReviews`;
const POST_REVIEW_ACTION = `postReview`;

const initialState = {
  reviews: [],
  reviewsLoadingStatus: LoadingStatus.IDLE,
  reviewPostingStatus: LoadingStatus.IDLE,
};

export const fetchReviews = createAsyncThunk(
    `${SliceName.FILMS_DATA}/${FETCH_REVIEWS_ACTION}`,
    async (filmId, {extra: api}) => {
      const reviews = await api.getFilmReviews(filmId);
      return reviews;
    }
);

export const postReview = createAsyncThunk(
    `${SliceName.FILMS_DATA}/${POST_REVIEW_ACTION}`,
    async (data, {extra: api}) => {
      const postedReview = await api.postReview(data);
      return postedReview;
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
      })
      .addCase(postReview.pending, (state) => {
        state.reviewPostingStatus = LoadingStatus.LOADING;
      })
      .addCase(postReview.fulfilled, (state) => {
        state.reviewPostingStatus = LoadingStatus.SUCCEEDED;
      })
      .addCase(postReview.rejected, (state) => {
        state.reviewPostingStatus = LoadingStatus.FAILED;
      });
  }
});

export default reviewsSlice.reducer;

export const selectReviews = (state) => state[SliceName.REVIEWS].reviews;
export const selectReviewsLoadingStatus = (state) => state[SliceName.REVIEWS].reviewsLoadingStatus;
export const selectReviewPostingStatus = (state) => state[SliceName.REVIEWS].reviewPostingStatus;

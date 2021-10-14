import {LoadingStatus} from '../../constants';
import reducer, {fetchReviews, postReview} from './reviews';

describe(`Reducer works correctly`, () => {
  const initialState = {
    reviews: [],
    reviewsLoadingStatus: LoadingStatus.IDLE,
    reviewPostingStatus: LoadingStatus.IDLE,
  };

  describe(`Fetching reviews works correctly`, () => {
    it(`fetchReviews correctly handles pending case`, () => {
      expect(reducer(initialState, fetchReviews.pending())).toEqual({
        ...initialState,
        reviews: [],
        reviewsLoadingStatus: LoadingStatus.LOADING
      });
    });

    it(`fetchReviews correctly handles success fetching`, () => {
      expect(reducer(initialState, fetchReviews.fulfilled([
        {id: 0, comment: `test comment`},
        {id: 1, comment: `test comment`},
      ]))).toEqual({
        ...initialState,
        reviews: [
          {id: 0, comment: `test comment`},
          {id: 1, comment: `test comment`},
        ],
        reviewsLoadingStatus: LoadingStatus.SUCCEEDED
      });
    });

    it(`fetchReviews correctly handles failed fetching`, () => {
      expect(reducer(initialState, fetchReviews.rejected())).toEqual({
        ...initialState,
        reviews: [],
        reviewsLoadingStatus: LoadingStatus.FAILED
      });
    });
  });

  describe(`Posting review works correctly`, () => {
    it(`Pending post review correctly handled`, () => {
      expect(reducer(initialState, postReview.pending())).toEqual({
        ...initialState,
        reviewPostingStatus: LoadingStatus.LOADING
      });
    });

    it(`Success posting review correctly handled`, () => {
      expect(reducer(initialState, postReview.fulfilled())).toEqual({
        ...initialState,
        reviewPostingStatus: LoadingStatus.SUCCEEDED
      });
    });

    it(`Posting failing correctly handled`, () => {
      expect(reducer(initialState, postReview.rejected())).toEqual({
        ...initialState,
        reviewPostingStatus: LoadingStatus.FAILED
      });
    });
  });
});

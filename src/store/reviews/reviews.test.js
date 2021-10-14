import {LoadingStatus} from '../../constants';
import reducer, {fetchReviews} from './reviews';

describe(`Reducer works correctly`, () => {
  const initialState = {
    reviews: [],
    reviewsLoadingStatus: LoadingStatus.IDLE
  };

  it(`fetchReviews correctly handles pending case`, () => {
    expect(reducer(initialState, fetchReviews.pending())).toEqual({
      reviews: [],
      reviewsLoadingStatus: LoadingStatus.LOADING
    });
  });

  it(`fetchReviews correctly handles success fetching`, () => {
    expect(reducer(initialState, fetchReviews.fulfilled([
      {id: 0, comment: `test comment`},
      {id: 1, comment: `test comment`},
    ]))).toEqual({
      reviews: [
        {id: 0, comment: `test comment`},
        {id: 1, comment: `test comment`},
      ],
      reviewsLoadingStatus: LoadingStatus.SUCCEEDED
    });
  });

  it(`fetchReviews correctly handles failed fetching`, () => {
    expect(reducer(initialState, fetchReviews.rejected())).toEqual({
      reviews: [],
      reviewsLoadingStatus: LoadingStatus.FAILED
    });
  });
});

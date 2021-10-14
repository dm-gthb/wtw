import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchReviews, selectReviews, selectReviewsLoadingStatus} from '../../store/reviews/reviews';
import Review from '../review/review';
import Spinner from '../spinner/spinner';
import {LoadingStatus} from '../../constants';

const Reviews = ({filmId}) => {
  const dispatch = useDispatch();
  const reviewsLoadingStatus = useSelector(selectReviewsLoadingStatus);
  const reviews = useSelector(selectReviews);
  const isDataLoaded = reviewsLoadingStatus === LoadingStatus.SUCCEEDED;

  useEffect(() => {
    dispatch(fetchReviews(filmId));
  }, [filmId]);

  if (isDataLoaded) {
    return (
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {reviews.length ? reviews.map((review) => <Review key={review.id} review={review} />) : `no reviews yet`}
        </div>
      </div>
    );
  }

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        <Spinner />
      </div>
    </div>
  );
};

Reviews.propTypes = {
  filmId: PropTypes.number.isRequired
};

export default Reviews;

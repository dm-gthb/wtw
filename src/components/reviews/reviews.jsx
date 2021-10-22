import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchReviews, selectReviews, selectReviewsLoadingStatus} from '../../store/reviews/reviews';
import Review from '../review/review';
import {useLoadingStatus} from '../../hooks/useLoadingStatus';

const Reviews = ({filmId}) => {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);
  const [isDataLoaded, onLoadingComponent] = useLoadingStatus(selectReviewsLoadingStatus);

  useEffect(() => {
    dispatch(fetchReviews(filmId));
  }, [filmId, dispatch]);

  if (!isDataLoaded) {
    return (
      <div className="movie-card__reviews movie-card__row">
        {onLoadingComponent}
      </div>
    );
  }

  if (!reviews.length) {
    return (
      <div className="movie-card__reviews movie-card__row">
        <p>No reviews yet</p>
      </div>
    );
  }

  const midReviewIndex = Math.ceil(reviews.length / 2);
  const firstColData = reviews.slice(0, midReviewIndex);
  const secondColData = reviews.slice(midReviewIndex + 1);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {firstColData.map((review) => <Review key={review.id} review={review} />)}
      </div>
      {
        secondColData.length > 0 &&
        <div className="movie-card__reviews-col">
          {secondColData.map((review) => <Review key={review.id} review={review} />)}
        </div>
      }
    </div>
  );
};

Reviews.propTypes = {
  filmId: PropTypes.number.isRequired
};

export default Reviews;

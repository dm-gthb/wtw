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
        <div className="movie-card__reviews-col">
          {onLoadingComponent}
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (!isDataLoaded) {
      return {onLoadingComponent};
    }

    return reviews.length ?
      reviews.map((review) => <Review key={review.id} review={review} />) :
      `no reviews yet`;
  };

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {renderContent()}
      </div>
    </div>
  );
};

Reviews.propTypes = {
  filmId: PropTypes.number.isRequired
};

export default Reviews;

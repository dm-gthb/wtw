import React from 'react';
import PropTypes from 'prop-types';
import {toLocalDateString} from '../../util/util';

const Review = ({review}) => {
  const {user, rating, comment, date} = review;
  const localDateString = toLocalDateString(date);
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={localDateString}>{localDateString}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired
  }).isRequired
};

export default Review;

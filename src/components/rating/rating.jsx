import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({rating, scoresCount}) => {
  return (
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">Very good</span>
        <span className="movie-rating__count">{scoresCount} ratings</span>
      </p>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
};

export default Rating;

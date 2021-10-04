import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../rating/rating';

const Overview = ({film}) => {
  const {description, director, starring, rating, scoresCount} = film;
  return (
    <>
      <Rating rating={rating} scoresCount={scoresCount} />
      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and other</strong></p>
      </div>
    </>
  );
};

Overview.propTypes = {
  film: PropTypes.object.isRequired
};

export default Overview;

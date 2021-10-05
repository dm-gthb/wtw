import React from 'react';
import Review from '../review/review';

const Reviews = () => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        <Review />
      </div>
    </div>
  );
};

export default Reviews;

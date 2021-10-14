import React from 'react';
import reviewProp from '../../prop-types/review.prop';

const Review = ({review}) => {
  const {user, rating, comment, date} = review;
  const localDateString = new Date(date).toLocaleDateString();
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
  review: reviewProp
};

export default Review;

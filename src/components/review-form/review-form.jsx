import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {postReview, selectReviewPostingStatus} from '../../store/reviews/reviews';
import {AppRoute, LoadingStatus, MAX_RATING, ReviewCommentLength} from '../../constants';
import ErrorMessage from '../error-message/error-message';
import {Redirect} from 'react-router';

const ReviewForm = ({filmId}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState(``);
  const handleRatingChange = (e) => setRating(+e.target.value);
  const handleCommentChange = (e) => setComment(e.target.value);
  const dispatch = useDispatch();
  const reviewPostingStatus = useSelector(selectReviewPostingStatus);
  const isReviewPostingInProgress = reviewPostingStatus === LoadingStatus.LOADING;

  const isValidToSumbit = () => {
    const isCommentValid =
      comment.length >= ReviewCommentLength.MIN &&
      comment.length <= ReviewCommentLength.MAX;
    const isRatingValid = rating > 0;
    return isCommentValid && isRatingValid && !isReviewPostingInProgress;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(postReview({
      filmId,
      formData: {rating, comment}
    }));
  };

  const renderRating = () => {
    return new Array(MAX_RATING).fill(``).map((item, i) => (
      <React.Fragment key={i}>
        <input
          className="rating__input"
          id={`star-${i + 1}`}
          type="radio"
          name={i + 1}
          value={i + 1}
          onChange={handleRatingChange}
          checked={rating === i + 1}
          disabled={isReviewPostingInProgress}
        />
        <label className="rating__label" htmlFor={`star-${i + 1}`}>Rating {i + 1}</label>
      </React.Fragment>
    ));
  };

  if (reviewPostingStatus === LoadingStatus.FAILED) {
    return <ErrorMessage />;
  }

  if (reviewPostingStatus === LoadingStatus.SUCCEEDED) {
    return <Redirect to={`${AppRoute.FILMS}/${filmId}`} />;
  }

  return (
    <form className="add-review__form" onSubmit={handleFormSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {renderRating()}
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={comment}
          onChange={handleCommentChange}
          disabled={isReviewPostingInProgress}
        />
        <div className="add-review__submit">
          <button
            disabled={!isValidToSumbit()}
            className="add-review__btn"
            type="submit"
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  filmId: PropTypes.number.isRequired
};

export default ReviewForm;

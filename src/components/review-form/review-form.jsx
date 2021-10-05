import React, {useState} from 'react';
import {MAX_RATING} from '../../constants';

const ReviewForm = () => {
  const [rating, setRating] = useState(10);
  const [comment, setComment] = useState(``);

  const handleRatingChange = (e) => setRating(+e.target.value);
  const handleCommentChange = (e) => setComment(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {rating, comment};
    console.log(formData);
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
        />
        <label className="rating__label" htmlFor={`star-${i + 1}`}>Rating {i + 1}</label>
      </React.Fragment>
    ));
  };

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
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;

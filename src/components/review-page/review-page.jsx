import React from 'react';
import {PosterSize} from '../../constants';
import filmProp from '../../prop-types/film.prop';
import PageHeader from '../page-header/page-header';
import Poster from '../poster/poster';
import ReviewForm from '../review-form/review-form';

const ReviewPage = ({film}) => {
  const {name, posterImage, backgroundImage} = film;
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <PageHeader isAuth={true} />
        <Poster
          size={PosterSize.SMALL}
          title={name}
          image={posterImage}
        />
      </div>

      <div className="add-review">
        <ReviewForm />
      </div>
    </section>
  );
};

ReviewPage.propTypes = {
  film: filmProp.isRequired
};

export default ReviewPage;

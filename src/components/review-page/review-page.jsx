import React from 'react';
import {PosterSize} from '../../constants';
import PageHeader from '../page-header/page-header';
import Poster from '../poster/poster';
import ReviewForm from '../review-form/review-form';
import {useSelector} from 'react-redux';
import {selectFilmById} from '../../store/films-data/films-data';
import {useParams} from 'react-router';

const ReviewPage = () => {
  const {id} = useParams();
  const film = useSelector((state) => (selectFilmById(state, +id)));
  const {name, posterImage, backgroundImage} = film;
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <PageHeader/>
        <Poster
          size={PosterSize.SMALL}
          title={name}
          image={posterImage}
        />
      </div>
      <div className="add-review">
        <ReviewForm filmId={+id} />
      </div>
    </section>
  );
};

export default ReviewPage;

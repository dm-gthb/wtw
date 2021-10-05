import React from 'react';
import PropTypes from 'prop-types';
import FilmHeadInfo from '../film-head-info/film-head-info';
import PageHeader from '../page-header/page-header';
import Poster from '../poster/poster';

const Promo = ({film}) => {
  const {name, posterImage, backgroundImage} = film;
  const actionButtons = (<>
    <button className="btn btn--play movie-card__button" type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
    <button className="btn btn--list movie-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </button>
  </>);

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <PageHeader className="movie-card__head" isAuth={true} />
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <Poster title={name} image={posterImage} />
          <FilmHeadInfo
            film={film}
            renderButtons={() => actionButtons}
          />
        </div>
      </div>
    </section>
  );
};

Promo.propTypes = {
  film: PropTypes.object.isRequired
};

export default Promo;

import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../page-header/page-header';
import FilmHeadInfo from '../film-head-info/film-head-info';
import Poster from '../poster/poster';
import FilmDetails from '../film-details/film-details';
import {AppRoute, AuthStatus, PosterSize} from '../../constants';
import {useSelector} from 'react-redux';
import {selectAuthStatus} from '../../store/user/user';
import {Link, useRouteMatch} from 'react-router-dom';
import browserHistory from '../../browser-history';

const FilmFullInfo = ({film}) => {
  const {id, name, posterImage, backgroundImage, backgroundColor} = film;
  const authStatus = useSelector(selectAuthStatus);
  const routeMatch = useRouteMatch();
  const handleButtonClick = () => browserHistory.push(`${AppRoute.PLAYER}/${id}`);
  const actionButtons = (
    <>
      <button
        className="btn btn--play movie-card__button"
        type="button"
        onClick={handleButtonClick}
      >
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
      {
        authStatus === AuthStatus.AUTH &&
        <Link to={`${routeMatch.url}${AppRoute.REVIEW}`} className="btn movie-card__button">
          Add review
        </Link>
      }
    </>
  );

  return (
    <section className="movie-card movie-card--full" style={{backgroundColor}}>
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <PageHeader className="movie-card__head" />
        <div className="movie-card__wrap">
          <FilmHeadInfo film={film} renderButtons={() => actionButtons} />
        </div>
      </div>
      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <Poster
            size={PosterSize.LARGE}
            title={name}
            image={posterImage}
          />
          <FilmDetails film={film} />
        </div>
      </div>
    </section>
  );
};

FilmFullInfo.propTypes = {
  film: PropTypes.object.isRequired
};

export default FilmFullInfo;

import React, {useEffect} from 'react';
import FilmHeadInfo from '../film-head-info/film-head-info';
import PageHeader from '../page-header/page-header';
import Poster from '../poster/poster';
import browserHistory from '../../browser-history';
import {AppRoute} from '../../constants';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPromoFilm, selectPromoFilm, selectPromoFilmLoadingStatus} from '../../store/films-data/films-data';
import {useLoadingStatus} from '../../hooks/useLoadingStatus';

const Promo = () => {
  const dispatch = useDispatch();
  const film = useSelector(selectPromoFilm);
  const [isDataLoaded, onLoadingComponent] = useLoadingStatus(selectPromoFilmLoadingStatus);
  const handlePlayButtonClick = () => browserHistory.push(`${AppRoute.PLAYER}/${film.id}`);

  useEffect(() => {
    dispatch(fetchPromoFilm());
  }, []);

  if (!isDataLoaded) {
    return (
      <section className="movie-card">
        <div className="movie-card__bg" />
        <h1 className="visually-hidden">WTW</h1>
        <PageHeader className="movie-card__head" />
        {onLoadingComponent}
      </section>
    );
  }

  const actionButtons = (<>
    <button
      className="btn btn--play movie-card__button"
      type="button"
      onClick={handlePlayButtonClick}
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
  </>);

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={film.backgroundImage} alt={film.name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <PageHeader className="movie-card__head" />
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <Poster title={film.name} image={film.posterImage} />
          <FilmHeadInfo
            film={film}
            renderButtons={() => actionButtons}
          />
        </div>
      </div>
    </section>
  );
};

export default Promo;

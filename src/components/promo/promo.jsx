import React, {useEffect} from 'react';
import FilmHeadInfo from '../film-head-info/film-head-info';
import PageHeader from '../page-header/page-header';
import Poster from '../poster/poster';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPromoFilm, selectPromoFilm, selectPromoFilmLoadingStatus} from '../../store/films-data/films-data';
import {useLoadingStatus} from '../../hooks/useLoadingStatus';

const Promo = () => {
  const dispatch = useDispatch();
  const film = useSelector(selectPromoFilm);
  const [isDataLoaded, onLoadingComponent] = useLoadingStatus(selectPromoFilmLoadingStatus);

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchPromoFilm());
    }
  }, [isDataLoaded, dispatch]);

  const renderBackground = () => {
    if (isDataLoaded && film) {
      const {name, backgroundImage} = film;
      return <div className="movie-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>;
    }

    return <div className="movie-card__bg" />;
  };

  const renderFilmData = () => {
    if (isDataLoaded && film) {
      const {name, posterImage} = film;
      return <div className="movie-card__info">
        <Poster title={name} image={posterImage} />
        <FilmHeadInfo film={film} />
      </div>;
    }

    return <div className="movie-card__info">
      <div className="movie-card__poster"></div>
      {onLoadingComponent}
    </div>;
  };

  return (
    <section className="movie-card">
      {renderBackground()}
      <h1 className="visually-hidden">WTW</h1>
      <PageHeader className="movie-card__head" />
      <div className="movie-card__wrap">
        {renderFilmData()}
      </div>
    </section>
  );
};

export default Promo;

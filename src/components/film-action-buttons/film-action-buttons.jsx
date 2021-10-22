import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {
  addFilmToFavorites,
  removeFilmFromFavorites,
  selectFavoritePostingStatus,
  selectIsFavoriteById
} from '../../store/films-data/films-data';
import {AppRoute, LoadingStatus} from '../../constants';
import browserHistory from '../../browser-history';

const FilmActionButtons = ({filmId, children}) => {
  const dispatch = useDispatch();
  const favoritePostingStatus = useSelector(selectFavoritePostingStatus);
  const isFavoriteStatusLoading = favoritePostingStatus === LoadingStatus.LOADING;
  const isFavorite = useSelector((state) => selectIsFavoriteById(state, filmId));

  const handleFavoriteButtonClick = () => {
    const handleFavoriteStatusPromise =
      isFavorite ?
        dispatch(removeFilmFromFavorites(filmId)) :
        dispatch(addFilmToFavorites(filmId));

    handleFavoriteStatusPromise
      .unwrap()
      .catch(() => {
        browserHistory.push(AppRoute.LOGIN);
      });
  };

  const handlePlayButtonClick = () => browserHistory.push(`${AppRoute.PLAYER}/${filmId}`);

  const renderFavoriteStatusIcon = () => {
    return isFavorite ?
      <svg viewBox="0 0 18 14" width="18" height="14"><use xlinkHref="#in-list"></use></svg> :
      <svg viewBox="0 0 19 20" width="19" height="20"><use xlinkHref="#add"></use></svg>;
  };

  return (
    <>
      <button
        className="btn btn--play movie-card__button"
        type="button"
        onClick={handlePlayButtonClick}
      >
        <svg viewBox="0 0 19 19" width="19" height="19"><use xlinkHref="#play-s"></use></svg>
        <span>Play</span>
      </button>
      <button
        className="btn btn--list movie-card__button"
        type="button"
        onClick={handleFavoriteButtonClick}
        disabled={isFavoriteStatusLoading}
      >
        {renderFavoriteStatusIcon()}
        <span>My list</span>
      </button>
      {children}
    </>
  );
};

FilmActionButtons.propTypes = {
  filmId: PropTypes.number.isRequired,
  children: PropTypes.node
};

export default FilmActionButtons;

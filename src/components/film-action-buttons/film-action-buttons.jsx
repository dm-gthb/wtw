import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {
  addFilmToFavorites,
  removeFilmFromFavorites,
  selectFavoritePostingStatus,
  selectIsFavoriteById
} from '../../store/films-data/films-data';
import {AppRoute, AuthStatus, LoadingStatus} from '../../constants';
import browserHistory from '../../browser-history';
import {selectAuthStatus} from '../../store/user/user';

const FilmActionButtons = ({filmId, children}) => {
  const dispatch = useDispatch();
  const favoritePostingStatus = useSelector(selectFavoritePostingStatus);
  const authStatus = useSelector(selectAuthStatus);
  const isFavorStatusLoading = favoritePostingStatus === LoadingStatus.LOADING;
  const isFavorite = useSelector((state) => selectIsFavoriteById(state, filmId));

  const handleFavoriteButtonClick = () => {
    if (isFavorite) {
      dispatch(removeFilmFromFavorites(filmId));
    } else {
      dispatch(addFilmToFavorites(filmId));
    }
  };

  const handlePlayButtonClick = () => browserHistory.push(`${AppRoute.PLAYER}/${filmId}`);

  const renderFavoriteStatusIcon = () => {
    return isFavorite ?
      <svg viewBox="0 0 18 14" width="18" height="14"><use xlinkHref="#in-list"></use></svg> :
      <svg viewBox="0 0 19 20" width="19" height="20"><use xlinkHref="#add"></use></svg>;
  };

  const renderMyListButton = () => (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={handleFavoriteButtonClick}
      disabled={isFavorStatusLoading}
    >
      {renderFavoriteStatusIcon()}
      <span>My list</span>
    </button>
  );

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
      {authStatus === AuthStatus.AUTH && renderMyListButton()}
      {children}
    </>
  );
};

FilmActionButtons.propTypes = {
  filmId: PropTypes.number.isRequired,
  children: PropTypes.node
};

export default FilmActionButtons;

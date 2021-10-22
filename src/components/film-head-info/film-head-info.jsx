import React from 'react';
import PropTypes from 'prop-types';
import filmProp from '../../prop-types/film.prop';
import FilmActionButtons from '../film-action-buttons/film-action-buttons';

const FilmHeadInfo = ({film, children}) => {
  const {id, name, genre, released} = film;
  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{name}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{released}</span>
      </p>
      <div className="movie-card__buttons">
        <FilmActionButtons filmId={id}>
          {children}
        </FilmActionButtons>
      </div>
    </div>
  );
};

FilmHeadInfo.propTypes = {
  film: filmProp.isRequired,
  children: PropTypes.node,
};

export default FilmHeadInfo;

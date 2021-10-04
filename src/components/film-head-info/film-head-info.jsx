import React from 'react';
import PropTypes from 'prop-types';

const FilmHeadInfo = ({film, renderButtons}) => {
  const {name, genre, released} = film;
  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{name}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{released}</span>
      </p>
      <div className="movie-card__buttons">
        {renderButtons()}
      </div>
    </div>
  );
};

FilmHeadInfo.propTypes = {
  film: PropTypes.object.isRequired,
  renderButtons: PropTypes.func.isRequired,
};

export default FilmHeadInfo;

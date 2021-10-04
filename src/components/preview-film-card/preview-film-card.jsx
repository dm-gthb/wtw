import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import filmProp from '../../prop-types/film.prop';

const PreviewFilmCard = ({className, film}) => {
  const {name, previewImage} = film;
  return (
    <article className={classNames(`small-movie-card`, className)}>
      <div className="small-movie-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};

PreviewFilmCard.propTypes = {
  className: PropTypes.string.isRequired,
  film: filmProp.isRequired,
};

export default PreviewFilmCard;

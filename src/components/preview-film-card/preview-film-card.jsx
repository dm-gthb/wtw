import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import filmProp from '../../prop-types/film.prop';
import {AppRoute} from '../../constants';

const PreviewFilmCard = ({className, film}) => {
  const {id, name, previewImage} = film;
  return (
    <article className={classNames(`small-movie-card`, className)}>
      <div className="small-movie-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`${AppRoute.FILMS}/${id}`}>{name}</Link>
      </h3>
    </article>
  );
};

PreviewFilmCard.propTypes = {
  className: PropTypes.string.isRequired,
  film: filmProp.isRequired,
};

export default PreviewFilmCard;

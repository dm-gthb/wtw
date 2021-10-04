import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PreviewFilmCard = ({className}) => {
  return (
    <article className={classNames(`small-movie-card`, className)}>
      <div className="small-movie-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
      </h3>
    </article>
  );
};

PreviewFilmCard.propTypes = {
  className: PropTypes.string.isRequired
};

export default PreviewFilmCard;

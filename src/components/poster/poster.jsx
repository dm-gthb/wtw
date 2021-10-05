import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {PosterSize} from '../../constants';

const PosterClassName = {
  [PosterSize.REGULAR]: ``,
  [PosterSize.SMALL]: `movie-card__poster--small`,
  [PosterSize.LARGE]: `movie-card__poster--big`,
};

const Poster = ({size = PosterSize.REGULAR, title, image}) => {
  return (
    <div className={classNames(`movie-card__poster`, PosterClassName[size])}>
      <img src={image} alt={title} />
    </div>
  );
};

Poster.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(PosterSize))
};

export default Poster;

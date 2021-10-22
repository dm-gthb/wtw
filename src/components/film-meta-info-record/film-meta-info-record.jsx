import React from 'react';
import PropTypes from 'prop-types';

const FilmMetaInfoRecord = ({label, text}) => (
  <p className="movie-card__details-item">
    <strong className="movie-card__details-name">{label}</strong>
    <span className="movie-card__details-value">{text}</span>
  </p>
);

FilmMetaInfoRecord.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default FilmMetaInfoRecord;

import React from 'react';
import PropTypes from 'prop-types';
import PreviewFilmCard from '../preview-film-card/preview-film-card';

const FilmsList = ({films}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => {
        return (
          <PreviewFilmCard key={i} className="catalog__movies-card" />
        );
      })}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default FilmsList;

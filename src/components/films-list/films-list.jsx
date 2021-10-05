import React from 'react';
import PropTypes from 'prop-types';
import PreviewCard from '../preview-card/preview-card';
import filmProp from '../../prop-types/film.prop';

const FilmsList = ({films}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((film) => {
        return (
          <PreviewCard
            key={film.id}
            film={film}
            className="catalog__movies-card"
          />
        );
      })}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired
};

export default FilmsList;

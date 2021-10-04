import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PreviewFilmCard from '../preview-film-card/preview-film-card';
import filmProp from '../../prop-types/film.prop';

const FilmsList = ({films}) => {
  const [activeItem, setActiveItem] = useState();
  return (
    <div className="catalog__movies-list">
      {films.map((film) => {
        return (
          <PreviewFilmCard
            key={film.id}
            film={film}
            className="catalog__movies-card"
            onMouseEnter={() => setActiveItem(film)}
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

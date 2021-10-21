import React from 'react';
import PropTypes from 'prop-types';
import PreviewCard from '../preview-card/preview-card';
import filmProp from '../../prop-types/film.prop';
import {useHandlingFilmId} from '../../hooks/useHandlingFilmId';

const FilmsList = ({films}) => {
  const [playingFilmId, setHandlingFilmId] = useHandlingFilmId();

  const handleMouseEnter = (id) => {
    setHandlingFilmId(id);
  };

  const handleMouseLeave = () => {
    setHandlingFilmId(null);
  };

  if (!films.length) {
    return (
      <div className="user-page__content">
        <h3 style={{textAlign: `center`}}>No films yet</h3>
      </div>
    );
  }

  return (
    <div className="catalog__movies-list">
      {films.map((film) => {
        const {id} = film;
        return (
          <PreviewCard
            key={id}
            className="catalog__movies-card"
            film={film}
            isVideoPlaying={id === playingFilmId}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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

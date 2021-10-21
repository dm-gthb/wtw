import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PreviewCard from '../preview-card/preview-card';
import filmProp from '../../prop-types/film.prop';

const FilmsList = ({films}) => {
  const [activeCardId, setActiveCardId] = useState();

  const handleCardActivationChange = (id, isActivated) => {
    const activeId = isActivated ? id : null;
    setActiveCardId(activeId);
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
            isVideoPlaying={id === activeCardId}
            onActivationChange={handleCardActivationChange}
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

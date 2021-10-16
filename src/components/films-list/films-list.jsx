import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import PreviewCard from '../preview-card/preview-card';
import filmProp from '../../prop-types/film.prop';
import {PREVIEW_VIDEO_PLAYING_TIMEOUT} from '../../constants';

const FilmsList = ({films}) => {
  let playTimeout;

  const [playingFilmId, setPlayingFilmId] = useState();

  const handleVideoPlay = (id) => {
    playTimeout = setTimeout(() => {
      setPlayingFilmId(id);
    }, PREVIEW_VIDEO_PLAYING_TIMEOUT);
  };

  const handleVideoStop = () => {
    clearTimeout(playTimeout);
    setPlayingFilmId(null);
  };

  useEffect(() => () => clearTimeout(playTimeout), [playTimeout]);

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
            onPlayVideo={handleVideoPlay}
            onStopVideo={handleVideoStop}
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

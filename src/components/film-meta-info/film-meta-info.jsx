import React from 'react';
import FilmMetaInfoRecord from '../film-meta-info-record/film-meta-info-record';
import filmProp from '../../prop-types/film.prop';

const FilmMetaInfo = ({film}) => {
  const {runTime, genre, released, starring, director} = film;
  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <FilmMetaInfoRecord label="Director" text={director} />
        <FilmMetaInfoRecord label="Starring" text={starring.join(`, `)} />
      </div>
      <div className="movie-card__text-col">
        <FilmMetaInfoRecord label="Run Time" text={runTime} />
        <FilmMetaInfoRecord label="Genre" text={genre} />
        <FilmMetaInfoRecord label="Released" text={released} />
      </div>
    </div>
  );
};


FilmMetaInfo.propTypes = {
  film: filmProp.isRequired
};

export default FilmMetaInfo;

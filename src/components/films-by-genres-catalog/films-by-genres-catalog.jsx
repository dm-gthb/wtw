import React from 'react';
import {useSelector} from 'react-redux';
import {DEFAULT_GENRE_FILTER} from '../../constants';
import {selectGenres} from '../../store/films-data/films-data';
import FilmsCatalog from '../films-catalog/films-catalog';
import GenresTabs from '../genres-tabs/genres-tabs';
import {useFilmsGenre} from '../../hooks/useFilmsGenre';

const FilmsByGenresCatalog = () => {
  const genres = useSelector(selectGenres);
  const [filteredFilms, handleGenreChange] = useFilmsGenre();

  return (
    <FilmsCatalog films={filteredFilms}>
      <GenresTabs
        genres={genres}
        onTabClick={handleGenreChange}
        defaultGenre={DEFAULT_GENRE_FILTER}
      />
    </FilmsCatalog>
  );
};

export default FilmsByGenresCatalog;

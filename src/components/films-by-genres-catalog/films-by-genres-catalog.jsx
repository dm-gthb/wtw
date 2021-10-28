import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {selectGenres, selectFilmsLoadingStatus} from '../../store/films-data/films-data';
import FilmsCatalog from '../films-catalog/films-catalog';
import GenresTabs from '../genres-tabs/genres-tabs';
import {useFilmsGenre} from '../../hooks/useFilmsGenre';
import {useLoadingStatus} from '../../hooks/useLoadingStatus';
import {useDispatch} from 'react-redux';
import {
  resetCardsCount,
  selectGenreFilter
} from '../../store/films-filter/films-filter';

const FilmsByGenresCatalog = () => {
  const dispatch = useDispatch();
  const [isDataLoaded, onLoadingComponent] = useLoadingStatus(selectFilmsLoadingStatus);
  const genres = useSelector(selectGenres);
  const genre = useSelector(selectGenreFilter);
  const [filteredFilms, handleGenreChange, resetGenre] = useFilmsGenre();

  useEffect(() => {
    return () => {
      dispatch(resetCardsCount());
    };
  });

  useEffect(() => () => {
    return resetGenre();
  }, [resetGenre]);

  if (!isDataLoaded) {
    return onLoadingComponent;
  }

  return (
    <FilmsCatalog films={filteredFilms}>
      <GenresTabs
        genres={genres}
        onTabClick={handleGenreChange}
        defaultGenre={genre}
      />
    </FilmsCatalog>
  );
};

export default FilmsByGenresCatalog;

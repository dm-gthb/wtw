import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectFilmsByGenre} from '../store/films-data/films-data';
import {resetGenreFilter, setGenreFilter} from '../store/films-filter/films-filter';

export const useFilmsGenre = () => {
  const dispatch = useDispatch();
  const filteredFilms = useSelector(selectFilmsByGenre);

  const handleGenreChange = (genre) => {
    dispatch(setGenreFilter(genre));
  };

  const resetGenre = useCallback(() => {
    return dispatch(resetGenreFilter());
  }, [dispatch]);

  return [filteredFilms, handleGenreChange, resetGenre];
};

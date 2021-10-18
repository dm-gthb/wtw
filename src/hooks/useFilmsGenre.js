import {useDispatch, useSelector} from 'react-redux';
import {selectFilmsByGenre} from '../store/films-data/films-data';
import {resetCardsCount, setGenreFilter} from '../store/films-filter/films-filter';

export const useFilmsGenre = () => {
  const dispatch = useDispatch();
  const filteredFilms = useSelector(selectFilmsByGenre);

  const handleGenreChange = (genre) => {
    dispatch(setGenreFilter(genre));
    dispatch(resetCardsCount());
  };

  return [filteredFilms, handleGenreChange];
};

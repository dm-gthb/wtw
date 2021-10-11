import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FilmsList from '../films-list/films-list';
import GenresTabs from '../genres-tabs/genres-tabs';
import {
  selectFilmsByGenre,
  selectGenres,
  setGenreFilter
} from '../../store/films/films-slice';
import {DEFAULT_GENRE_FILTER} from '../../constants';

const Catalog = () => {
  const dispatch = useDispatch();
  const genres = useSelector(selectGenres);
  const defaultGenre = DEFAULT_GENRE_FILTER;
  const films = useSelector(selectFilmsByGenre);

  const handleTabClick = (genre) => {
    dispatch(setGenreFilter(genre));
  };

  const renderGenres = () => {
    if (genres && genres.length) {
      return (
        <GenresTabs
          genres={genres}
          onTabClick={handleTabClick}
          defaultGenre={defaultGenre}
        />
      );
    }

    return null;
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      {renderGenres()}
      <FilmsList films={films} />
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
};

export default Catalog;

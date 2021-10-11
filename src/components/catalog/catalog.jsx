import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {DEFAULT_GENRE_FILTER} from '../../constants';
import FilmsList from '../films-list/films-list';
import GenresTabs from '../genres-tabs/genres-tabs';
import {
  selectFilmsByGenre,
  selectGenres,
} from '../../store/films-data-slice/films-data-slice';
import {
  increaseCardsCount,
  resetCardsCount,
  selectCardsCount,
  setGenreFilter
} from '../../store/films-filter-slice/films-filter-slice';

const Catalog = () => {
  const MAX_FILMS_CARDS_TO_RENDER_ONCE = 8;
  const dispatch = useDispatch();
  const genres = useSelector(selectGenres);
  const films = useSelector(selectFilmsByGenre);
  const alreadyRenderedFilmCardsCount = useSelector(selectCardsCount);
  const filmCardsToRender = films.slice(0, alreadyRenderedFilmCardsCount + MAX_FILMS_CARDS_TO_RENDER_ONCE);

  const handleTabClick = (genre) => {
    dispatch(setGenreFilter(genre));
    dispatch(resetCardsCount());
  };

  const handleShowMoreButtonClick = () => {
    dispatch(increaseCardsCount(MAX_FILMS_CARDS_TO_RENDER_ONCE));
  };

  const renderGenres = () => {
    if (genres && genres.length) {
      return (
        <GenresTabs
          genres={genres}
          onTabClick={handleTabClick}
          defaultGenre={DEFAULT_GENRE_FILTER}
        />
      );
    }
    return null;
  };

  const renderShowMoreButton = () => {
    if (alreadyRenderedFilmCardsCount + MAX_FILMS_CARDS_TO_RENDER_ONCE < films.length) {
      return (
        <button
          className="catalog__button"
          type="button"
          onClick={handleShowMoreButtonClick}
        >
          Show more
        </button>
      );
    }
    return null;
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      {renderGenres()}
      <FilmsList films={filmCardsToRender} />
      {renderShowMoreButton()}
    </section>
  );
};

export default Catalog;

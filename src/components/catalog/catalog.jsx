import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {DEFAULT_GENRE_FILTER, LoadingStatus, MAX_FILMS_CARDS_TO_RENDER_ONCE} from '../../constants';
import FilmsList from '../films-list/films-list';
import GenresTabs from '../genres-tabs/genres-tabs';
import Spinner from '../spinner/spinner';
import {
  selectFilmsByGenre,
  selectGenres,
  selectFilmsListLoadingStatus,
} from '../../store/films-data-slice/films-data-slice';
import {
  increaseCardsCount,
  resetCardsCount,
  selectCardsCount,
  setGenreFilter
} from '../../store/films-filter-slice/films-filter-slice';

const Catalog = () => {
  const dispatch = useDispatch();
  const genres = useSelector(selectGenres);
  const films = useSelector(selectFilmsByGenre);
  const currentCardsCount = useSelector(selectCardsCount);
  const loadingStatus = useSelector(selectFilmsListLoadingStatus);
  const filmCardsToRender = films.slice(0, currentCardsCount);

  const handleTabClick = (genre) => {
    dispatch(setGenreFilter(genre));
    dispatch(resetCardsCount());
  };

  const handleShowMoreButtonClick = () => {
    const remainingCardsCount = films.length - currentCardsCount;
    const countToIncrease = Math.min(remainingCardsCount, MAX_FILMS_CARDS_TO_RENDER_ONCE);
    dispatch(increaseCardsCount(countToIncrease));
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
    if (currentCardsCount < films.length) {
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

  if (loadingStatus === LoadingStatus.LOADING) {
    return <Spinner />;
  }

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

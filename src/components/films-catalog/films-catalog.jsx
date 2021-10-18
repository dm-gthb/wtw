import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {MAX_FILMS_CARDS_TO_RENDER_ONCE} from '../../constants';
import FilmsList from '../films-list/films-list';
import {
  increaseCardsCount,
  selectCardsCount,
} from '../../store/films-filter/films-filter';
import filmProp from '../../prop-types/film.prop';

const FilmsCatalog = ({films, className, children}) => {
  const dispatch = useDispatch();
  const currentCardsCount = useSelector(selectCardsCount);
  const filmsToRender = films.slice(0, currentCardsCount);

  const handleShowMoreButtonClick = () => {
    const remainingCardsCount = films.length - currentCardsCount;
    const countToIncrease = Math.min(remainingCardsCount, MAX_FILMS_CARDS_TO_RENDER_ONCE);
    dispatch(increaseCardsCount(countToIncrease));
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

  return (
    <section className={classNames(`catalog`, className)}>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      {children}
      <FilmsList films={filmsToRender} />
      {renderShowMoreButton()}
    </section>
  );
};

FilmsCatalog.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

export default FilmsCatalog;

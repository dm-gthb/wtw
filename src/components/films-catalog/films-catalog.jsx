import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import FilmsList from '../films-list/films-list';
import filmProp from '../../prop-types/film.prop';
import {useFilmCardsCount} from '../../hooks/useFilmCardsCount';

const FilmsCatalog = ({films, className, children}) => {
  const [currentCardsCount, increaseCardsCount] = useFilmCardsCount(films.length);
  const filmsToRender = films.slice(0, currentCardsCount);

  const renderShowMoreButton = () => {
    if (currentCardsCount < films.length) {
      return (
        <button
          className="catalog__button"
          type="button"
          onClick={increaseCardsCount}
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

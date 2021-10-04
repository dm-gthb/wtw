import React from 'react';
import PropTypes from 'prop-types';
import FilmsList from '../films-list/films-list';
import GenresList from '../genres-list/genres-list';

const Catalog = ({genres, films}) => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      {genres && genres.length && <GenresList genres={genres} />}
      <FilmsList films={films} />
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
};

Catalog.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Catalog;

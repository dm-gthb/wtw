import React from 'react';
import PropTypes from 'prop-types';
import MoviesList from './movies-list';
import GenresList from './genres-list';

const Catalog = ({genres, movies}) => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList genres={genres} />
      <MoviesList movies={movies} />
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
};

Catalog.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Catalog;

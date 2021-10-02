import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './movie-card';

const MoviesList = ({movies}) => {
  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => {
        return (
          <MovieCard key={movie.id} className="catalog__movies-card" />
        );
      })}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MoviesList;

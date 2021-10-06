import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmsList from '../films-list/films-list';
import GenresTabs from '../genres-tabs/genres-tabs';

const Catalog = ({genres, films}) => {
  const defaultGenre = genres[0];
  const [selectedGenre, setSelectedGenre] = useState(defaultGenre);
  const handleTabClick = (genre) => {
    setSelectedGenre(genre);
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

Catalog.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Catalog;

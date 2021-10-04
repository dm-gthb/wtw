import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

const GenresList = ({genres}) => {
  const [activeItem, setActiveItem] = useState(genres[0]);
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          className={classNames(`catalog__genres-item`, {
            [`catalog__genres-item--active`]: genre === activeItem
          })}
          onClick={() => setActiveItem(genre)}
        >
          <Link to="/" className="catalog__genres-link">{genre}</Link>
        </li>))}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default GenresList;

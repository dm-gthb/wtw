import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

const GenresList = ({genres}) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => (
        <li
          key={genre.name}
          className={classNames(`catalog__genres-item`, {
            [`catalog__genres-item--active`]: i === activeItemIndex
          })}
          onClick={() => setActiveItemIndex(i)}
        >
          <Link to="/" className="catalog__genres-link">{genre.name}</Link>
        </li>))}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default GenresList;

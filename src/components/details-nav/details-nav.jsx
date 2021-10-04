import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {FilmDetailsNavTitle} from '../../constants';

const navItems = Object.values(FilmDetailsNavTitle);

const DetailsNav = ({onItemClick}) => {
  const [activeItem, setActiveItem] = useState(navItems[0]);
  const handleNavItemClick = (item) => {
    setActiveItem(item);
    onItemClick(item);
  };
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {navItems.map((item) => (
          <li key={item} className={classNames(`movie-nav__item`, {
            [`movie-nav__item--active`]: item === activeItem
          })}>
            <a
              href="#"
              className="movie-nav__link"
              onClick={(e) => {
                e.preventDefault();
                handleNavItemClick(item);
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

DetailsNav.propTypes = {
  onItemClick: PropTypes.func.isRequired
};

export default DetailsNav;

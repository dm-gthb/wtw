import React from 'react';
import PropTypes from 'prop-types';
import {FilmDetailsSection} from '../../constants';
import Tabs from '../tabs/tabs';

const tabs = Object.values(FilmDetailsSection);

const DetailsTabs = ({onTabClick}) => {
  return (
    <nav className="movie-nav movie-card__nav">
      <Tabs
        classList={{
          containerClass: `movie-nav__list`,
          tabClass: `movie-nav__item`,
          activeTabClass: `movie-nav__item--active`,
          tabLabelClass: `movie-nav__link`,
        }}
        tabs={tabs}
        onTabClick={onTabClick}
      />
    </nav>
  );
};

DetailsTabs.propTypes = {
  onTabClick: PropTypes.func.isRequired
};

export default DetailsTabs;

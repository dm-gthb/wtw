import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../tabs/tabs';

const GenresTabs = ({genres, defaultGenre, onTabClick}) => {
  return (
    <Tabs
      classList={{
        containerClass: `catalog__genres-list`,
        tabClass: `catalog__genres-item`,
        activeTabClass: `catalog__genres-item--active`,
        tabLabelClass: `catalog__genres-link`,
      }}
      tabs={genres}
      onTabClick={onTabClick}
      defaultTab={defaultGenre}
    />
  );
};

GenresTabs.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultGenre: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default GenresTabs;

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Overview from '../overview/overview';
import DetailsNav from '../details-nav/details-nav';
import {FilmDetailsNavTitle} from '../../constants';
import FilmMetaInfo from '../film-meta-info/film-meta-info';
import Reviews from '../reviews/review';

const FilmDetails = ({film}) => {
  const [activeTab, setActiveTab] = useState(FilmDetailsNavTitle.OVERVIEW);
  const handleNavItemClick = (item) => setActiveTab(item);
  const getSectionToDisplay = () => {
    switch (activeTab) {
      case FilmDetailsNavTitle.OVERVIEW:
        return <Overview film={film} />;
      case FilmDetailsNavTitle.DETAILS:
        return <FilmMetaInfo film={film} />;
      case FilmDetailsNavTitle.REVIEWS:
        return <Reviews />;
      default:
        return null;
    }
  };

  return (
    <div className="movie-card__desc">
      <DetailsNav onItemClick={handleNavItemClick}/>
      {getSectionToDisplay()}
    </div>
  );
};

FilmDetails.propTypes = {
  film: PropTypes.object.isRequired
};

export default FilmDetails;

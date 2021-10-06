import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Overview from '../overview/overview';
import DetailsTabs from '../details-tabs/details-tabs';
import {FilmDetailsSection} from '../../constants';
import FilmMetaInfo from '../film-meta-info/film-meta-info';
import Reviews from '../reviews/reviews';

const FilmDetails = ({film}) => {
  const [activeTab, setActiveTab] = useState(FilmDetailsSection.OVERVIEW);
  const handleTabClick = (item) => setActiveTab(item);
  const getSectionToDisplay = () => {
    switch (activeTab) {
      case FilmDetailsSection.OVERVIEW:
        return <Overview film={film} />;
      case FilmDetailsSection.DETAILS:
        return <FilmMetaInfo film={film} />;
      case FilmDetailsSection.REVIEWS:
        return <Reviews />;
      default:
        return null;
    }
  };

  return (
    <div className="movie-card__desc">
      <DetailsTabs onTabClick={handleTabClick}/>
      {getSectionToDisplay()}
    </div>
  );
};

FilmDetails.propTypes = {
  film: PropTypes.object.isRequired
};

export default FilmDetails;

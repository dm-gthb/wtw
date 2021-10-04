import React from 'react';
import PropTypes from 'prop-types';
import Promo from '../promo/promo';
import Catalog from '../catalog/catalog';
import PageFooter from '../page-footer/page-footer';

const HomePage = ({genres, films}) => {
  const promoFilm = films[0];
  return (
    <div>
      <Promo film={promoFilm} />
      <div className="page-content">
        <Catalog genres={genres} films={films} />
        <PageFooter />
      </div>
    </div>
  );
};

HomePage.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object),
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default HomePage;

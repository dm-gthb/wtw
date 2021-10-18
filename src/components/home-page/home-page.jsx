import React from 'react';
import Promo from '../promo/promo';
import PageFooter from '../page-footer/page-footer';
import FilmsByGenresCatalog from '../films-by-genres-catalog/films-by-genres-catalog';

const HomePage = () => {
  return (
    <div>
      <Promo />
      <div className="page-content">
        <FilmsByGenresCatalog />
        <PageFooter />
      </div>
    </div>
  );
};

export default HomePage;

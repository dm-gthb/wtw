import React from 'react';
import Promo from '../promo/promo';
import Catalog from '../catalog/catalog';
import PageFooter from '../page-footer/page-footer';
import {films} from '../../mocks/mocks';

const HomePage = () => {
  return (
    <div>
      <Promo film={films[0]} />
      <div className="page-content">
        <Catalog />
        <PageFooter />
      </div>
    </div>
  );
};

export default HomePage;

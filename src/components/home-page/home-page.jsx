import React from 'react';
import Promo from '../promo/promo';
import Catalog from '../catalog/catalog';
import PageFooter from '../page-footer/page-footer';

const HomePage = () => {
  return (
    <div>
      <Promo />
      <div className="page-content">
        <Catalog />
        <PageFooter />
      </div>
    </div>
  );
};

export default HomePage;

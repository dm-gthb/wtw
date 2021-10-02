import React from 'react';
import Promo from '../components/promo';
import Catalog from '../components/catalog';
import PageFooter from '../components/page-footer';

const HomePage = () => {
  return (
    <div>
      <Promo />
      <div className="page-content">
        <Catalog genres={[]} movies={[]} />
        <PageFooter />
      </div>
    </div>
  );
};

export default HomePage;

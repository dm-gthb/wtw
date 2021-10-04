import React from 'react';
import Catalog from '../catalog/catalog';
import PageFooter from '../page-footer/page-footer';
import PageHeader from '../page-header/page-header';

const genres = [
  {name: `All`},
  {name: `Comedies`},
  {name: `Crime`},
  {name: `Documentary`},
  {name: `Dramas`},
];
const films = [
  {id: 0},
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
];

const MyFilmsPage = () => {
  return (
    <div className="user-page">
      <PageHeader isAuth={true} className="user-page__head">
        <h1 className="page-title user-page__title">My List</h1>
      </PageHeader>
      <Catalog films={films} />
      <PageFooter />
    </div>
  );
};

export default MyFilmsPage;

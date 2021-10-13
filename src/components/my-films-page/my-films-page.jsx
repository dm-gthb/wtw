import PropTypes from 'prop-types';
import React from 'react';
import filmProp from '../../prop-types/film.prop';
import Catalog from '../catalog/catalog';
import PageFooter from '../page-footer/page-footer';
import PageHeader from '../page-header/page-header';

const MyFilmsPage = ({films}) => {
  return (
    <div className="user-page">
      <PageHeader className="user-page__head">
        <h1 className="page-title user-page__title">My List</h1>
      </PageHeader>
      <Catalog films={films} />
      <PageFooter />
    </div>
  );
};

MyFilmsPage.propTypes = {
  films: PropTypes.arrayOf(filmProp)
};

export default MyFilmsPage;

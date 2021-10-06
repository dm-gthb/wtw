import React from 'react';
import PropTypes from 'prop-types';
import FilmsList from '../films-list/films-list';
import FilmFullInfo from '../film-full-info/film-full-info';

const FilmPage = ({film}) => {
  return (
    <>
      <FilmFullInfo film={film} />
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={[film]} />
        </section>
      </div>
    </>
  );
};

FilmPage.propTypes = {
  film: PropTypes.object.isRequired
};

export default FilmPage;

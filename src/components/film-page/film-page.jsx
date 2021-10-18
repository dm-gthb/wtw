import React from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import FilmsList from '../films-list/films-list';
import FilmFullInfo from '../film-full-info/film-full-info';
import {selectFilmById} from '../../store/films-data/films-data';
import NotFoundPage from '../not-found-page/not-found-page';
import PageFooter from '../page-footer/page-footer';

const FilmPage = () => {
  const {id} = useParams();
  const currentFilm = useSelector((state) => selectFilmById(state, +id));

  if (!currentFilm) {
    return <NotFoundPage />;
  }

  return (
    <>
      <FilmFullInfo film={currentFilm} />
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={[currentFilm]} />
        </section>
        <PageFooter />
      </div>
    </>
  );
};

export default FilmPage;

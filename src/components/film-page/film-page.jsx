import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import FilmFullInfo from '../film-full-info/film-full-info';
import {selectAllFilms, selectFilmById, selectFilmsLoadingStatus} from '../../store/films-data/films-data';
import NotFoundPage from '../not-found-page/not-found-page';
import PageFooter from '../page-footer/page-footer';
import FilmsCatalog from '../films-catalog/films-catalog';
import {getSameFilmsAsCurrentByGenre} from '../../util/util';
import {SIMILAR_GENRE_FILMS_MAX_COUNT} from '../../constants';
import {useLoadingStatus} from '../../hooks/useLoadingStatus';
import WrapperPage from '../wrapper-page/wrapper-page';

const FilmPage = () => {
  const {id} = useParams();
  const currentFilm = useSelector((state) => selectFilmById(state, +id));
  const [isDataLoaded, onLoadingComponent] = useLoadingStatus(selectFilmsLoadingStatus);
  const allFilms = useSelector(selectAllFilms);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: `smooth`
    });
  }, [id]);

  if (!isDataLoaded) {
    return <WrapperPage>{onLoadingComponent}</WrapperPage>;
  }

  if (!currentFilm) {
    return <NotFoundPage />;
  }

  const sameFilmsByGenre = getSameFilmsAsCurrentByGenre(allFilms, currentFilm, SIMILAR_GENRE_FILMS_MAX_COUNT);

  if (sameFilmsByGenre.length) {
    return (
      <>
        <FilmFullInfo film={currentFilm} />
        <div className="page-content">
          <FilmsCatalog
            films={sameFilmsByGenre}
            className={`catalog--like-this`}
          >
            <h2 className="catalog__title">More like this</h2>
          </FilmsCatalog>
          <PageFooter />
        </div>
      </>
    );
  }

  return <FilmFullInfo film={currentFilm} />;
};

export default FilmPage;

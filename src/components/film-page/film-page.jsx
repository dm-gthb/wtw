import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import FilmsList from '../films-list/films-list';
import FilmFullInfo from '../film-full-info/film-full-info';
import WrapperPage from '../wrapper-page/wrapper-page';
import {
  fetchCurrentFilm,
  selectCurrentFilm,
  selectCurrentFilmLoadingStatus
} from '../../store/films-data/films-data';
import {useLoadingStatus} from '../../hooks/useLoadingStatus';

const FilmPage = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const [isDataLoaded, onLoadingComponent] = useLoadingStatus(selectCurrentFilmLoadingStatus);
  const currentFilm = useSelector(selectCurrentFilm);

  useEffect(() => {
    dispatch(fetchCurrentFilm(id));
  }, [id]);

  if (!isDataLoaded) {
    return <WrapperPage>{onLoadingComponent}</WrapperPage>;
  }

  return (
    <>
      <FilmFullInfo film={currentFilm} />
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={[currentFilm]} />
        </section>
      </div>
    </>
  );
};

export default FilmPage;

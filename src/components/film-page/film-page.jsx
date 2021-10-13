import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router';
import FilmsList from '../films-list/films-list';
import FilmFullInfo from '../film-full-info/film-full-info';
import Spinner from '../spinner/spinner';
import {
  fetchCurrentFilm,
  selectCurrentFilm,
  selectCurrentFilmLoadingStatus
} from '../../store/films-data-slice/films-data-slice';
import {LoadingStatus} from '../../constants';

const FilmPage = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const loadingStatus = useSelector(selectCurrentFilmLoadingStatus);
  const currentFilm = useSelector(selectCurrentFilm);
  const isDataLoaded = loadingStatus === LoadingStatus.SUCCEEDED;

  useEffect(() => {
    dispatch(fetchCurrentFilm(id));
  }, [id]);

  if (!isDataLoaded) {
    return <Spinner />;
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

import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  fetchFavoriteFilms,
  selectFavoriteFilms,
  selectFavoriteFilmsLoadingStatus
} from '../../store/films-data/films-data';
import PageFooter from '../page-footer/page-footer';
import PageHeader from '../page-header/page-header';
import {useLoadingStatus} from '../../hooks/useLoadingStatus';
import FilmsCatalog from '../films-catalog/films-catalog';

const MyFilmsPage = () => {
  const dispatch = useDispatch();
  const films = useSelector(selectFavoriteFilms);
  const [isDataLoaded, onLoadingComponent] = useLoadingStatus(selectFavoriteFilmsLoadingStatus);

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchFavoriteFilms());
    }
  }, [isDataLoaded, dispatch]);

  const renderContent = () => {
    if (!isDataLoaded) {
      return (
        <div className="user-page__content">
          {onLoadingComponent}
        </div>
      );
    }
    return <FilmsCatalog films={films} />;
  };

  return (
    <div className="user-page">
      <PageHeader className="user-page__head">
        <h1 className="page-title user-page__title">My List</h1>
      </PageHeader>
      {renderContent()}
      <PageFooter />
    </div>
  );
};

export default MyFilmsPage;

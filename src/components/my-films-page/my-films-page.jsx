import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {LoadingStatus} from '../../constants';
import {
  fetchFavoritesFilms,
  selectFavoriteFilms,
  selectFavoriteFilmsListLoadingStatus
} from '../../store/films-data/films-data';
import LoadingErrorPage from '../loading-error-page/loading-error-page';
import FilmsList from '../films-list/films-list';
import PageFooter from '../page-footer/page-footer';
import PageHeader from '../page-header/page-header';
import Spinner from '../spinner/spinner';

const MyFilmsPage = () => {
  const dispatch = useDispatch();
  const films = useSelector(selectFavoriteFilms);
  const loadingStatus = useSelector(selectFavoriteFilmsListLoadingStatus);
  const isDataLoaded = loadingStatus === LoadingStatus.SUCCEEDED;
  const isLoadingError = loadingStatus === LoadingStatus.FAILED;

  useEffect(() => {
    dispatch(fetchFavoritesFilms());
  }, []);

  if (isLoadingError) {
    return <LoadingErrorPage />;
  }

  const renderContent = () => {
    if (!isDataLoaded) {
      return (
        <div className="user-page__content">
          <Spinner />
        </div>
      );
    }

    return <FilmsList films={films} />;
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

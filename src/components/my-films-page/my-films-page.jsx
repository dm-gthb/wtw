import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  fetchFavoritesFilms,
  selectFavoriteFilms,
  selectFavoriteFilmsListLoadingStatus
} from '../../store/films-data/films-data';
import FilmsList from '../films-list/films-list';
import PageFooter from '../page-footer/page-footer';
import PageHeader from '../page-header/page-header';
import {useLoadingStatus} from '../../hooks/useLoadingStatus';

const MyFilmsPage = () => {
  const dispatch = useDispatch();
  const films = useSelector(selectFavoriteFilms);
  const [isDataLoaded, onLoadingComponent] = useLoadingStatus(selectFavoriteFilmsListLoadingStatus);

  useEffect(() => {
    dispatch(fetchFavoritesFilms());
  }, []);

  const renderContent = () => {
    if (!isDataLoaded) {
      return (
        <div className="user-page__content">
          {onLoadingComponent}
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

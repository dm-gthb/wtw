import React from 'react';
import {useParams} from 'react-router';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {selectFilmById, selectFilmsListLoadingStatus} from '../../store/films-data/films-data';
import {LoadingStatus} from '../../constants';
import Spinner from '../spinner/spinner';
import NotFoundPage from '../not-found-page/not-found-page';
import ErrorPage from '../error-page/error-page';
import FullPlayer from '../full-screen-video-player/full-screen-video-player';

const PlayerPage = () => {
  const {id} = useParams();
  const filmsLoadingState = useSelector(selectFilmsListLoadingStatus);
  const film = useSelector((state) => selectFilmById(state, +id));

  const isDataLoaded = filmsLoadingState === LoadingStatus.SUCCEEDED;
  const isLoadingError = filmsLoadingState === LoadingStatus.FAILED;

  if (isDataLoaded && !film) {
    return (
      <div className="player">
        <NotFoundPage />
      </div>
    );
  }

  if (isLoadingError) {
    return (
      <ErrorPage>
        <h1 style={{textAlign: `center`}}>
          Loading error, please try again.
        </h1>
      </ErrorPage>
    );
  }

  if (!isDataLoaded) {
    return <Spinner />;
  }

  return <FullPlayer film={film} />;
};

PlayerPage.propTypes = {
  name: PropTypes.any,
  src: PropTypes.any,
  poster: PropTypes.any,
  runTime: PropTypes.any,
};
export default PlayerPage;

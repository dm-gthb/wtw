import React from 'react';
import {useParams} from 'react-router';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {selectFilmById, selectFilmsLoadingStatus} from '../../store/films-data/films-data';
import NotFoundPage from '../not-found-page/not-found-page';
import FullPlayer from '../full-screen-video-player/full-screen-video-player';
import WrapperPage from '../wrapper-page/wrapper-page';
import {useLoadingStatus} from '../../hooks/useLoadingStatus';

const PlayerPage = () => {
  const {id} = useParams();
  const film = useSelector((state) => selectFilmById(state, +id));
  const [isDataLoaded, onLoadingComponent] = useLoadingStatus(selectFilmsLoadingStatus);

  if (!isDataLoaded) {
    return <WrapperPage>{onLoadingComponent}</WrapperPage>;
  }

  if (isDataLoaded && !film) {
    return <NotFoundPage />;
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

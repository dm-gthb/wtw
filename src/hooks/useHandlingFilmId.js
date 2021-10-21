import {useEffect, useState} from 'react';
import {PREVIEW_VIDEO_PLAYING_TIMEOUT} from '../constants';

export const useHandlingFilmId = () => {
  const [handlingFilmId, setHandlingdFilmId] = useState();
  const [playingFilmId, setPlayingFilmId] = useState();

  useEffect(() => {
    let playTimeout;
    if (handlingFilmId) {
      playTimeout = setTimeout(() => {
        if (playTimeout) {
          setPlayingFilmId(handlingFilmId);
        }
      }, PREVIEW_VIDEO_PLAYING_TIMEOUT);
    } else {
      clearTimeout(playTimeout);
      setPlayingFilmId(null);
    }

    return () => {
      clearTimeout(playTimeout);
      setPlayingFilmId(null);
    };
  }, [handlingFilmId]);

  return [playingFilmId, setHandlingdFilmId];
};

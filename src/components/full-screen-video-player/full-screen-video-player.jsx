import React, {useCallback, useEffect, useState} from 'react';
import filmProp from '../../prop-types/film.prop';
import {AppRoute, KeyboardKey} from '../../constants';
import browserHistory from '../../browser-history';
import VideoPlayerControls from '../video-player-controls/video-player-controls';
import BaseVideoPlayer from '../base-video-player/base-video-player';

const FullScreenVideoPlayer = ({film}) => {
  const {
    id,
    previewVideoLink,
    previewImage,
    name,
  } = film;

  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [videoRef, setVideoRef] = useState();

  const tryExitFullScreen = () => {
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  const handleFullScreenToggle = () => {
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen();
    } else {
      tryExitFullScreen();
    }
  };

  const handlePlayPauseButtonClick = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setIsVideoEnded(true);
  };

  const handleVideoLoad = useCallback((elementRef) => {
    setVideoRef(elementRef);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.key === KeyboardKey.ESCAPE) {
        tryExitFullScreen();
      }
    };
    window.addEventListener(`keydown`, handleKeyDown);
    return () => {
      window.removeEventListener(`keydown`, handleKeyDown);
    };
  }, []);

  return (
    <div className="player">
      <BaseVideoPlayer
        src={previewVideoLink}
        poster={previewImage}
        isPlaying={isPlaying}
        onEnded={handleVideoEnd}
        onLoad={handleVideoLoad}
        className="player__video"
      />
      <button
        type="button"
        className="player__exit"
        onClick={() => browserHistory.push(`${AppRoute.FILMS}/${id}`)}
      >
        Exit
      </button>
      {!isLoading && <VideoPlayerControls
        name={name}
        videoRef={videoRef}
        isPlaying={isPlaying}
        onToggleFullScreen={handleFullScreenToggle}
        onPlayPauseButtonClick={handlePlayPauseButtonClick}
        isVideoEnded={isVideoEnded}
      />}
    </div>
  );
};

FullScreenVideoPlayer.propTypes = {
  film: filmProp.isRequired
};

export default FullScreenVideoPlayer;

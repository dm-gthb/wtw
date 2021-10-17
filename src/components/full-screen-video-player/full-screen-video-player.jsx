import React, {useEffect, useRef, useState} from 'react';
import filmProp from '../../prop-types/film.prop';
import {AppRoute, KeyboardKey} from '../../constants';
import browserHistory from '../../browser-history';
import VideoPlayerControls from '../video-player-controls/video-player-controls';

const FullScreenVideoPlayer = ({film}) => {
  const {
    id,
    previewVideoLink,
    previewImage,
    name,
  } = film;

  const videoRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

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

  const handleKeyDown = (evt) => {
    if (evt.key === KeyboardKey.ESCAPE) {
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

  useEffect(() => {
    videoRef.current.oncanplaythrough = () => {
      setIsLoading(false);
    };
    return () => {
      videoRef.current.oncanplaythrough = null;
      videoRef.current.onplay = null;
      videoRef.current.onpause = null;
      videoRef.current = null;
    };
  }, [previewVideoLink]);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    window.addEventListener(`keydown`, handleKeyDown);
    return () => {
      window.removeEventListener(`keydown`, handleKeyDown);
    };
  }, []);

  return (
    <div className="player">
      <video
        src={previewVideoLink}
        className="player__video"
        poster={previewImage}
        ref={videoRef}
        muted={true}
        onEnded={handleVideoEnd}
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
  film: filmProp
};

export default FullScreenVideoPlayer;

import React, {useEffect, useRef, useState} from 'react';
import filmProp from '../../prop-types/film.prop';
import {AppRoute, KeyboardKey} from '../../constants';
import browserHistory from '../../browser-history';
import {convertSecondsToTime} from '../../util/util';

const FullScreenVideoPlayer = ({film}) => {
  const {
    id,
    previewVideoLink,
    previewImage,
    name,
  } = film;

  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const [timeToLeft, setTimeToLeft] = useState(0);
  const videoRef = useRef();

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

  const handlePlayButtonClick = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setProgress(0);
    setProgressBarWidth(0);
    setTimeToLeft(Math.floor(videoRef.current.duration));
  };

  useEffect(() => {
    videoRef.current.oncanplaythrough = () => {
      setIsLoading(false);
      setTimeToLeft(Math.floor(videoRef.current.duration));
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

  useEffect(() => {
    const TIME_PROGRESS_ATTRIBUTES_UPDATE_INTERVAL = 1000;
    const PERCENTS_CONVERTATION_VALUE = 100;
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress(Math.floor(videoRef.current.currentTime));
        setProgressBarWidth(`${Math.floor((videoRef.current.currentTime / videoRef.current.duration) * PERCENTS_CONVERTATION_VALUE)}%`);
        setTimeToLeft(Math.floor(videoRef.current.duration - videoRef.current.currentTime));
      }, TIME_PROGRESS_ATTRIBUTES_UPDATE_INTERVAL);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isPlaying]);

  const renderPlayPauseControl = () => {
    const pauseIcon = (
      <svg viewBox="0 0 14 21" width="14" height="21">
        <use xlinkHref="#pause"></use>
      </svg>
    );

    const playIcon = (
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
    );

    return (
      <button
        type="button"
        className="player__play"
        disabled={isLoading}
        onClick={handlePlayButtonClick}
      >
        {isPlaying ? pauseIcon : playIcon}
      </button>
    );
  };

  const renderControls = () => {
    if (isLoading) {
      return null;
    }

    return (
      <>
        <button type="button" className="player__exit" onClick={() => browserHistory.push(`${AppRoute.FILMS}/${id}`)}>Exit</button>
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress
                className="player__progress"
                value={progress}
                max={videoRef.current.duration}
              />
              <div
                className="player__toggler"
                style={{left: progressBarWidth}}
              >
                Toggler
              </div>
            </div>
            <div className="player__time-value">{convertSecondsToTime(timeToLeft)}</div>
          </div>
          <div className="player__controls-row">
            {renderPlayPauseControl()}
            <div className="player__name">{name}</div>
            <button type="button" className="player__full-screen" onClick={handleFullScreenToggle}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </>
    );
  };

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
      {renderControls()}
    </div>
  );
};

FullScreenVideoPlayer.propTypes = {
  film: filmProp
};

export default FullScreenVideoPlayer;

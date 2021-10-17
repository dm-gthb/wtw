import React from 'react';
import PropTypes from 'prop-types';
import TimeProgress from '../time-progress/time-progress';

const VideoPlayerControls = (props) => {
  const {
    name,
    videoRef,
    isPlaying,
    onToggleFullScreen,
    onPlayPauseButtonClick,
    isVideoEnded,
  } = props;

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
        onClick={onPlayPauseButtonClick}
      >
        {isPlaying ? pauseIcon : playIcon}
      </button>
    );
  };

  return (
    <div className="player__controls">
      <div className="player__controls-row">
        <TimeProgress
          isPlaying={isPlaying}
          elementRef={videoRef}
          isEnded={isVideoEnded}
        />
      </div>
      <div className="player__controls-row">
        {renderPlayPauseControl()}
        <div className="player__name">{name}</div>
        <button
          type="button"
          className="player__full-screen"
          onClick={onToggleFullScreen}
        >
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"></use>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  );
};

VideoPlayerControls.propTypes = {
  name: PropTypes.string.isRequired,
  videoRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}),
  isPlaying: PropTypes.bool.isRequired,
  onToggleFullScreen: PropTypes.func.isRequired,
  onPlayPauseButtonClick: PropTypes.func.isRequired,
  isVideoEnded: PropTypes.bool.isRequired,
};

export default VideoPlayerControls;

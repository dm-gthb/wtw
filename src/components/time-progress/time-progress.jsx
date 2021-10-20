import React from 'react';
import PropTypes from 'prop-types';
import {useTimeProgress} from '../../hooks/useTimeProgress';

const TimeProgress = (props) => {
  const {
    elementRef,
    isPlaying,
    isEnded,
  } = props;

  const [
    currentProgress,
    progressBarWidth,
    timeToLeft
  ] = useTimeProgress(elementRef, isPlaying, isEnded);

  return (
    <>
      <div className="player__time">
        <progress
          className="player__progress"
          value={currentProgress}
          max={elementRef.current.duration}
        />
        <div
          className="player__toggler"
          style={{left: progressBarWidth}}
        >
        Toggler
        </div>
      </div>
      <div className="player__time-value">
        {timeToLeft}
      </div>
    </>
  );
};

TimeProgress.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  elementRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}),
  isEnded: PropTypes.bool.isRequired,
};

export default TimeProgress;

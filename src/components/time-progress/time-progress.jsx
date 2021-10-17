import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {convertSecondsToTime} from '../../util/util';

const TimeProgress = (props) => {
  const {
    elementRef,
    isPlaying,
    isEnded,
  } = props;

  const [currentProgress, setCurrentProgress] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const [timeToLeft, setTimeToLeft] = useState(0);

  useEffect(() => {
    const PROGRESS_UPDATE_INTERVAL = 1000;
    const PERCENTS_CONVERTATION_RATIO = 100;
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentProgress(Math.floor(elementRef.current.currentTime));
        setProgressBarWidth(`${Math.floor((elementRef.current.currentTime / elementRef.current.duration) * PERCENTS_CONVERTATION_RATIO)}%`);
        setTimeToLeft(Math.floor(elementRef.current.duration - elementRef.current.currentTime));
      }, PROGRESS_UPDATE_INTERVAL);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (isEnded) {
      setCurrentProgress(0);
      setProgressBarWidth(0);
      setTimeToLeft(Math.floor(elementRef.current.duration));
    }
  }, [isEnded]);

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
      <div className="player__time-value">{convertSecondsToTime(timeToLeft)}</div>
    </>
  );
};

TimeProgress.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  elementRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}),
  isEnded: PropTypes.bool.isRequired,
};

export default TimeProgress;

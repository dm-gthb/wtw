import {useEffect, useState} from 'react';
import {convertSecondsToTime} from '../util/util';

export const useTimeProgress = (
    elementRef,
    isPlaying,
    isEnded
) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const [secondsToLeft, setSecondsToLeft] = useState(0);

  useEffect(() => {
    const PROGRESS_UPDATE_INTERVAL = 1000;
    const PERCENTS_CONVERTATION_RATIO = 100;
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentProgress(Math.floor(elementRef.current.currentTime));
        setProgressBarWidth(`${Math.floor((elementRef.current.currentTime / elementRef.current.duration) * PERCENTS_CONVERTATION_RATIO)}%`);
        setSecondsToLeft(Math.floor(elementRef.current.duration - elementRef.current.currentTime));
      }, PROGRESS_UPDATE_INTERVAL);
    }
    return () => {
      clearInterval(timer);
    };
  }, [elementRef, isPlaying]);

  useEffect(() => {
    if (isEnded) {
      setCurrentProgress(0);
      setProgressBarWidth(0);
      setSecondsToLeft(Math.floor(elementRef.current.duration));
    }
  }, [elementRef, isEnded]);

  return [
    currentProgress,
    progressBarWidth,
    convertSecondsToTime(secondsToLeft),
  ];
};

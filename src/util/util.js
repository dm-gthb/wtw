import {RatingRangeName} from '../constants';

export const convertSecondsToTime = (inputSeconds) => {
  const SECONDS_IN_HOUR = 3600;
  const SECONDS_IN_MINUTE = 60;

  const format = (value) => {
    const FIRST_TWO_DIGIT_NUM = 10;
    return value < FIRST_TWO_DIGIT_NUM ? `0${value}` : value;
  };

  const hours = Math.floor(inputSeconds / SECONDS_IN_HOUR);
  const secondsInResultHours = hours * SECONDS_IN_HOUR;
  const minutes = Math.floor((inputSeconds - (hours * secondsInResultHours)) / SECONDS_IN_MINUTE);
  const secondsInResultMinutes = minutes * SECONDS_IN_MINUTE;
  const seconds = inputSeconds - secondsInResultHours - secondsInResultMinutes;

  const outputHours = format(hours, false);
  const outputMinutes = format(minutes);
  const outputSeconds = format(seconds);

  return `${outputHours}:${outputMinutes}:${outputSeconds}`;
};

export const getSameFilmsAsCurrentByGenre = (allFilms, current, limit) => {
  if (!allFilms.length) {
    return [];
  }

  const filteredItems = [];
  for (const film of allFilms) {
    if (film.genre === current.genre && film.id !== current.id) {
      filteredItems.push(film);
    }
    if (filteredItems.length === limit) {
      break;
    }
  }

  return filteredItems;
};

export const getActionNameBySlice = (slice, action) => `${slice}/${action}`;

export const getRatingName = (rating) => {
  const ratingRanges = {
    [RatingRangeName.BAD]: [0, 3],
    [RatingRangeName.NORMAL]: [3, 5],
    [RatingRangeName.GOOD]: [5, 8],
    [RatingRangeName.VERY_GOOD]: [8, 10],
    [RatingRangeName.AWESOME]: [10, 10],
  };

  for (const [ratingName, ratingNum] of Object.entries(ratingRanges)) {
    const min = ratingNum[0];
    const max = ratingNum[1];

    if (min === max && rating === min) {
      return ratingName;
    }

    if (rating >= min && rating < max) {
      return ratingName;
    }
  }

  return ``;
};

export const toLocalDateString = (date) => new Date(date).toLocaleDateString();

export const getRandomNum = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

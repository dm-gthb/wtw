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

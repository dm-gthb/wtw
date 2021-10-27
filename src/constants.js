export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  MY_LIST: `/mylist`,
  FILMS: `/films`,
  REVIEW: `/review`,
  PLAYER: `/player`,
};

export const PosterSize = {
  SMALL: `SMALL`,
  REGULAR: `REGULAR`,
  LARGE: `LARGE`,
};

export const FilmDetailsSection = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

export const LoadingStatus = {
  IDLE: `IDLE`,
  LOADING: `LOADING`,
  SUCCEEDED: `SUCCEEEDED`,
  FAILED: `FAILED`,
};

export const AuthStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const SliceName = {
  FILMS_DATA: `FILMS_DATA`,
  FILMS_FILTER: `FILMS_FILTER`,
  USER: `USER`,
  REVIEWS: `REVIEWS`,
};

export const HttpCode = {
  UNAUTHORIZED: 401,
};

export const HttpMethod = {
  POST: `POST`,
};

export const APIRoute = {
  FILMS: `/films`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  REVIEWS: `/comments`,
  PROMO: `/promo`,
  FAVORITE: `/favorite`,
};

export const FavoriteStatus = {
  ADDING: 1,
  REMOVING: 0
};

export const ReviewCommentLength = {
  MIN: 5,
  MAX: 400
};

export const KeyboardKey = {
  ESCAPE: `Escape`,
};

export const RatingRangeName = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
};

export const MAX_RATING = 10;
export const MAX_FILMS_CARDS_TO_RENDER_ONCE = 8;
export const PREVIEW_VIDEO_PLAYING_TIMEOUT = 1500;
export const DEFAULT_GENRE_FILTER = `All genres`;
export const SIMILAR_GENRE_FILMS_MAX_COUNT = 4;
export const MAX_GENRES_COUNT = 10;

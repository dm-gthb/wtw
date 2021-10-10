import {createAction} from '@reduxjs/toolkit';
export const ActionType = {
  SET_GENRE_FILTER: `genreFilter/set`,
  FETCH_FILMS_REQUESTED: `filmsFetching/request`,
  FETCH_FILMS_SUCCESS: `filmsFetching/load`,
  FETCH_FILMS_FAILURE: `filmsFetching/fail`,
};

export const setGenreFilter = createAction(ActionType.SET_GENRE_FILTER);
export const requestFilms = createAction(ActionType.FETCH_FILMS_REQUESTED);
export const loadFilms = createAction(ActionType.FETCH_FILMS_SUCCESS);
export const failFilmsLoading = createAction(ActionType.FETCH_FILMS_FAILURE);

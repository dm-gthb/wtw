import {configureStore} from '@reduxjs/toolkit';
import filmsDataReducer from './films-data-slice/films-data-slice';
import filmsFilterReducer from './films-filter-slice/films-filter-slice';
import {SliceName} from '../constants';

export default configureStore(
    {
      reducer: {
        [SliceName.FILMS_DATA]: filmsDataReducer,
        [SliceName.FILMS_FILTER]: filmsFilterReducer,
      }
    },
);

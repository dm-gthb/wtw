import {configureStore} from '@reduxjs/toolkit';
import filmsReducer from './films/films-slice';
import {SliceName} from './slice-name';

export default configureStore(
    {
      reducer: {
        [SliceName.FILMS]: filmsReducer
      }
    },
);

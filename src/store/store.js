import {configureStore} from '@reduxjs/toolkit';
import filmsReducer from './films-slice/films-slice';
import {SliceName} from '../constants';

export default configureStore(
    {
      reducer: {
        [SliceName.FILMS]: filmsReducer
      }
    },
);

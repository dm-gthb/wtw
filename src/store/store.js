import {configureStore} from '@reduxjs/toolkit';
import filmsDataReducer from './films-data-slice/films-data-slice';
import filmsFilterReducer from './films-filter-slice/films-filter-slice';
import userReducer, {checkAuth} from './user-slice/user-slice';
import {AuthStatus, SliceName} from '../constants';
import {createAPI} from '../service/api';

const api = createAPI(() => checkAuth.fulfilled(AuthStatus.NO_AUTH));

export default configureStore(
    {
      reducer: {
        [SliceName.FILMS_DATA]: filmsDataReducer,
        [SliceName.FILMS_FILTER]: filmsFilterReducer,
        [SliceName.USER]: userReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          thunk: {
            extraArgument: api
          },
        })
    },
);

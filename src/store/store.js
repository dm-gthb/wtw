import {configureStore} from '@reduxjs/toolkit';
import filmsDataReducer from './films-data/films-data';
import filmsFilterReducer from './films-filter/films-filter';
import reviewsReducer from './reviews/reviews';
import userReducer, {checkAuth} from './user/user';
import {AuthStatus, SliceName} from '../constants';
import {createAPI} from '../service/api';

const api = createAPI(() => checkAuth.fulfilled(AuthStatus.NO_AUTH));

export default configureStore(
    {
      reducer: {
        [SliceName.FILMS_DATA]: filmsDataReducer,
        [SliceName.FILMS_FILTER]: filmsFilterReducer,
        [SliceName.USER]: userReducer,
        [SliceName.REVIEWS]: reviewsReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          thunk: {
            extraArgument: api
          },
        })
    },
);

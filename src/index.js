import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {fetchFavoriteFilms, fetchAllFilms} from './store/films-data/films-data';
import store from './store/store';
import {checkAuth} from './store/user/user';

store.dispatch(checkAuth());
store.dispatch(fetchAllFilms());
store.dispatch(fetchFavoriteFilms());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);

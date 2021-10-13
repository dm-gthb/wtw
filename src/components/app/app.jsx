import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import {AppRoute} from '../../constants';
import FilmPage from '../film-page/film-page';
import HomePage from '../home-page/home-page';
import LoginPage from '../login-page/login-page';
import MyFilmsPage from '../my-films-page/my-films-page';
import ReviewPage from '../review-page/review-page';
import PlayerPage from '../player-page/player-page';
import NotFoundPage from '../not-found-page/not-found-page';
import {films} from '../../mocks/mocks';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';

const App = () => {
  const {
    ROOT,
    LOGIN,
    MY_LIST,
    FILMS,
    REVIEW,
    PLAYER,
  } = AppRoute;

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route path={ROOT} exact>
          <HomePage />
        </Route>
        <Route path={LOGIN} exact>
          <LoginPage />
        </Route>
        <PrivateRoute
          path={MY_LIST}
          exact
          render={() => <MyFilmsPage films={films} />}
        />
        <Route path={`${FILMS}/:id`} exact>
          <FilmPage film={films[0]} />
        </Route>
        <PrivateRoute
          path={`${FILMS}/:id${REVIEW}`}
          exact
          render={() => <ReviewPage film={films[0]} />}
        />
        <Route path={`${PLAYER}/:id/`} exact>
          <PlayerPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

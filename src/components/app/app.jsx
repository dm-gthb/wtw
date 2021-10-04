import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {AppRoute} from '../../constants';
import FilmPage from '../film-page/film-page';
import HomePage from '../home-page/home-page';
import LoginPage from '../login-page/login-page';
import MyFilmsPage from '../my-films-page/my-films-page';
import ReviewPage from '../review-page/review-page';
import PlayerPage from '../player-page/player-page';
import NotFoundPage from '../not-found-page/not-found-page';
import {genres, films} from '../../mocks/mocks';

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
    <Router>
      <Switch>
        <Route path={ROOT} exact>
          <HomePage genres={genres} films={films} />
        </Route>
        <Route path={LOGIN} exact component={LoginPage} />
        <Route path={MY_LIST} exact>
          <MyFilmsPage films={films} />
        </Route>
        <Route path={`${FILMS}/:id`} exact>
          <FilmPage film={films[0]} />
        </Route>
        <Route path={`${FILMS}/:id${REVIEW}`} component={ReviewPage} />
        <Route path={`${PLAYER}/:id/`} exact component={PlayerPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;

import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute, AuthStatus} from '../../constants';
import {selectAuthStatus} from '../../store/user/user';

const PrivateRoute = ({path, exact, render}) => {
  const authStatus = useSelector(selectAuthStatus);
  const isLoggedIn = authStatus === AuthStatus.AUTH;

  return (
    <Route
      path={path}
      exact={exact}
      render={(renderProps) => {
        return isLoggedIn ? render(renderProps) : <Redirect to={AppRoute.LOGIN} />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  render: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool
};

export default PrivateRoute;

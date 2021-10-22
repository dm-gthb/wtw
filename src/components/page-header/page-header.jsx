import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import {logout, selectAuthStatus, selectUserData} from '../../store/user/user';
import {AppRoute, AuthStatus} from '../../constants';
import {useDispatch} from 'react-redux';

const PageHeader = ({isUserBlockShown = true, className, children}) => {
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuthStatus);
  const userData = useSelector(selectUserData);

  const handleLogoutButtonClick = () => dispatch(logout());

  const renderUserBlock = (isAuthData) => {
    const userAvatar = (
      <>
        <Link to={AppRoute.MY_LIST} className="user-block__link">
          My List
        </Link>
        <button
          onClick={handleLogoutButtonClick}
          className="user-block__link user-block__link--btn"
        >
          Logout
        </button>
        <div className="user-block__avatar">
          <img src={userData && userData.avatar} alt="User avatar" width="63" height="63" />
        </div>
      </>
    );
    const signInLink = <Link to="/login" className="user-block__link">Sign in</Link>;
    return (
      <div className="user-block">
        {isAuthData ? userAvatar : signInLink}
      </div>
    );
  };

  return (
    <header className={classNames(`page-header`, className)}>
      <Logo isLight={false} />
      {children}
      {isUserBlockShown && renderUserBlock(authStatus === AuthStatus.AUTH)}
    </header>
  );
};

PageHeader.propTypes = {
  isUserBlockShown: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default PageHeader;

import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import {selectAuthStatus} from '../../store/user-slice/user-slice';
import {AuthStatus} from '../../constants';

const PageHeader = ({isUserBlockShown = true, className, children}) => {
  const authStatus = useSelector(selectAuthStatus);
  const renderUserBlock = (isAuthData) => {
    const userAvatar = (
      <div className="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
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

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';

const PageHeader = ({isAuth, isUserBlockShown = true, className, children}) => {
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
      {isUserBlockShown && renderUserBlock(isAuth)}
    </header>
  );
};

PageHeader.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  isUserBlockShown: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default PageHeader;

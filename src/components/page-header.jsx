import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

const PageHeader = ({className, isAuth}) => {
  const userAvatar = (
    <div className="user-block__avatar">
      <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
    </div>
  );

  const signInLink = <Link to="/login" className="user-block__link">Sign in</Link>;

  return (
    <header className={classNames(`page-header`, className)}>
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
      <div className="user-block">
        {isAuth ? userAvatar : signInLink}
      </div>
    </header>
  );
};

PageHeader.propTypes = {
  className: PropTypes.string,
  isAuth: PropTypes.bool.isRequired,
};

export default PageHeader;

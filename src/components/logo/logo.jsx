import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Logo = ({isLight}) => {
  const linkClassNames = classNames(`logo__link`, {
    [`logo__link--light`]: isLight
  });

  return (
    <div className="logo">
      <a className={linkClassNames}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
};

Logo.propTypes = {
  isLight: PropTypes.bool.isRequired
};

export default Logo;

import React from 'react';
import PropTypes from 'prop-types';
import PageFooter from '../page-footer/page-footer';

const ErrorPage = ({children}) => {
  return (
    <div className="user-page">
      <div className="user-page__content">
        {children}
      </div>
      <PageFooter />
    </div>
  );
};

ErrorPage.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorPage;

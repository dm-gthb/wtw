import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({children}) => {
  return (
    <>
      <h1 className="page-title">Error</h1>
      {children}
    </>
  );
};

ErrorMessage.propTypes = {
  children: PropTypes.node
};

export default ErrorMessage;

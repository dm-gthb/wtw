import React from 'react';
import PropTypes from 'prop-types';
import PageFooter from '../page-footer/page-footer';

const WrapperPage = ({children}) => {
  return (
    <div className="user-page">
      <div className="user-page__content">
        {children}
      </div>
      <PageFooter />
    </div>
  );
};

WrapperPage.propTypes = {
  children: PropTypes.node.isRequired
};

export default WrapperPage;

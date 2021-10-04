import React from 'react';
import PageFooter from '../page-footer/page-footer';

const NotFoundPage = () => {
  return (
    <div className="user-page">
      <div className="user-page__content">
        <h1 style={{textAlign: `center`}}>404. Page not found</h1>
      </div>
      <PageFooter />
    </div>
  );
};

export default NotFoundPage;

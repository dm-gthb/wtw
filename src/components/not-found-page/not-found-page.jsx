import React from 'react';
import ErrorPage from '../error-page/error-page';

const NotFoundPage = () => {
  return (
    <ErrorPage>
      <h1 style={{textAlign: `center`}}>404. Page not found</h1>
    </ErrorPage>
  );
};

export default NotFoundPage;

import React from 'react';
import ErrorPage from '../error-page/error-page';

const LoadingErrorPage = () => {
  return (
    <ErrorPage>
      <h1 style={{textAlign: `center`}}>Loading error, please try again.</h1>
    </ErrorPage>
  );
};

export default LoadingErrorPage;

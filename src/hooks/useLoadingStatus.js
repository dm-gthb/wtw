import React from 'react';
import {useSelector} from 'react-redux';
import ErrorMessage from '../components/error-message/error-message';
import Spinner from '../components/spinner/spinner';
import {LoadingStatus} from '../constants';

export const useLoadingStatus = (loadingStatusSelector) => {
  let component;
  const loadingStatus = useSelector(loadingStatusSelector);
  const isDataLoaded = loadingStatus === LoadingStatus.SUCCEEDED;
  const isLoadingError = loadingStatus === LoadingStatus.FAILED;

  if (!isDataLoaded) {
    component = <Spinner />;
  }

  if (!isDataLoaded && isLoadingError) {
    component = <ErrorMessage />;
  }

  return [isDataLoaded, component];
};

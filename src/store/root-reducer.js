import {combineReducers} from 'redux';
import data from './data/data';
import filter from './filter/filter';

const NameSpace = {
  DATA: `DATA`,
  FILTER: `FILTER`,
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.FILTER]: filter,
});

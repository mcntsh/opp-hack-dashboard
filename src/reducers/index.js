import { combineReducers } from 'redux';
import collegeReducer from './college';

export default combineReducers({
  colleges: collegeReducer
});

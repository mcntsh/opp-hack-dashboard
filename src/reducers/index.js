import { combineReducers } from 'redux';
import college from './college';
import { reducer as form } from 'redux-form';

export default combineReducers({
    form,
    college
});

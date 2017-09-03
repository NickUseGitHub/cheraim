import { combineReducers } from 'redux';
import counterReducer from './counter';

export default combineReducers({
  numberCounter: counterReducer
});

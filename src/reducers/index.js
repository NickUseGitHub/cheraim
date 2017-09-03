import { combineReducers } from 'redux';
import counterReducer from './counter';
import toggleReducer from './toggleValue';

export default combineReducers({
  numberCounter: counterReducer,
  toggleValue: toggleReducer
});

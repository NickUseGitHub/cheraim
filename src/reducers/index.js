import { combineReducers } from 'redux';
import counterReducer from './counter';
import toggleReducer from './toggleValue';
import markersReducer from './marker';

export default combineReducers({
  numberCounter: counterReducer,
  markers: markersReducer,
  toggleValue: toggleReducer
});

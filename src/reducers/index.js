import { combineReducers } from 'redux';
import { get } from 'lodash';

const initialStateCounter = 0;
const stateType = {
  INCREASE: 1,
  DECREASE: -1,
}

export function counterReducer (number = initialStateCounter, action) {
  const { type } = action;
  return number + get(stateType, type, 0);
}

export default combineReducers({
  numberCounter: counterReducer
});

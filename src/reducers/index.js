import { combineReducers } from 'redux';
import { get } from 'lodash';

const initialStateCounter = 0;
const stateType = {
  INCREASE: 1,
  DECREASE: -1,
}

function counterReducer (state = initialStateCounter, action) {
  const { type } = action;
  return state + get(stateType, type, 0);
}

export default combineReducers({
  counterReducer
});

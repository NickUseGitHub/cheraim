import { get } from 'lodash';

const initialStateCounter = 0;
const stateType = {
  INCREASE: 1,
  DECREASE: -1,
}

export function operateCounter (type) {
  return {type};
}

export default function (number = initialStateCounter, action) {
  const { type } = action;
  return number + get(stateType, type, 0);
}

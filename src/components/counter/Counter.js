import React from 'react';

export default (props) => {
  const {
    number,
    onButtonClick,
    toggleValue,
    onButtonToggleClick
  } = props

  return (
    <div>
      number: {number}
      <button onClick={() => onButtonClick('INCREASE')}>Increase Counter</button>
      toggle: { toggleValue ? 'yes' : 'no' }
      <button onClick={() => onButtonToggleClick('TOGGLE')}>Toggle</button>
    </div>
  )
};

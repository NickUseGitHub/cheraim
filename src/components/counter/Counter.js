import React from 'react';

export default (props) => {
  const {
    number,
    onButtonClick
  } = props

  return (
    <div>
      number: {number}
      <button onClick={() => onButtonClick('INCREASE')}>Increase Counter</button>
    </div>
  )
};

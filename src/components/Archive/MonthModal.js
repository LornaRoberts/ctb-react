import React from 'react';

function MonthModal (props) {
  if (props) {
  const month = props.input;
    return (
        <div>
        <p>Month number: {props.monthNo}</p>
        {month[0].map((spend) => (spend.itemCost))
        .reduce((a, b) => a + b, 0)}
        </div>
    )
  } else {
    return (
      <div>empty</div>
    )
  }
}

export default MonthModal;

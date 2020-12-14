import React from 'react';
import SingleModal from './singleModal';
function MonthModal (props) {
  if (props) {
  const month = props.input;
  const totals = month[0].map((spend) => (spend.itemCost))
  .reduce((a, b) => a + b, 0);
    return (
        <div>
        <SingleModal total={totals} name={props.monthNo} />
        </div>
    )
  } else {
    return (
      <div>empty</div>
    )
  }
}

export default MonthModal;

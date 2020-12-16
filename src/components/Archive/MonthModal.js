import React from 'react';
import SingleModal from './singleModal';
function MonthModal (props) {
  if (props) {
  const monthNames = {
    '1': 'January',
    '2': 'Februay',
    '3': 'March',
    '4': 'April',
    '5': 'May',
    '6': 'June',
    '7': 'July',
    '8': 'August',
    '9': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  }

  const month = props.input;
  const totals = month[0].map((spend) => (spend.itemCost))
  .reduce((a, b) => a + b, 0);
    return (
        <div>
        <SingleModal total={totals} name={monthNames[props.monthNo]} item={props.input} monthNo={props.monthNo}/>
        </div>
    )
  } else {
    return (
      <div>empty</div>
    )
  }
}

export default MonthModal;

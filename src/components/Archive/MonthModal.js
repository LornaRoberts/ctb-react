import React from 'react';
import SingleModal from './singleModal';
function MonthModal (props) {
  if (props) {
  const monthNames = {
    '01': 'January',
    '02': 'Februay',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  }

  const month = props.input;
  const totals = month[0].map((spend) => (spend.itemCost))
  .reduce((a, b) => a + b, 0);
    return (
        <div>
        <SingleModal total={totals} 
                      name={monthNames[props.monthNo]}
                      item={props.input} />
        </div>
    )
  } else {
    return (
      <div>empty</div>
    )
  }
}

export default MonthModal;

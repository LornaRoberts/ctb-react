import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js';

function BarChart(props) {
  console.log(props)
  if (props.expense && props.cost){
return(
<div>
  <Bar
  data={{
    labels:props.expense,
    datasets: [{
      label: 'Monthly Expenses',
   data:props.cost,
   backgroundColor:'red'
}],
}
}
 />
</div>
)
}else{
  return (
 <div>No data available</div>
  )
}
}
export default BarChart;
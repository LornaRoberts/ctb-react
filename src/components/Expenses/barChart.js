import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js';

function BarChart(props) {
console.log(props.expense)
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

}
export default BarChart;

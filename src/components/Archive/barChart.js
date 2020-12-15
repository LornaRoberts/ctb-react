import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js';

function BarChart(props) {
  if (props.items){
    console.log(props.items)
  //  props.items[props.monthNo][0].itemCost); //props.items[0][props.monthNo])
  let spendData = props.items[0].map((item) => item.itemCost)
    console.log('This is the mapped data', spendData);
    let spendLabel = props.items[0].map((item) => item.itemSpent)
      console.log('This is the mapped data', spendLabel);
return(
<div>
  <Bar
  data={{
    labels:spendLabel,
    datasets: [{
      label: 'Monthly Spends',
   data:spendData,
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

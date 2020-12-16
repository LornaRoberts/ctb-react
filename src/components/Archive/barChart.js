import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js';

function BarChart(props) {
  if (props.items){
 
  let spendsByCategory = {};

  props.items[0].map((item) => spendsByCategory[item.itemCat] = 0);
  props.items[0].map((item) => spendsByCategory[item.itemCat] = (spendsByCategory[item.itemCat] + parseFloat(item.itemCost)) );

return(
<div>
  <Bar
  data={{
    labels: Object.keys(spendsByCategory), 
    datasets: [{
      label: 'Monthly Spends',
   data: Object.values(spendsByCategory),
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

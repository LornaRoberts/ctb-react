import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class BarChart extends Component {
 constructor(props) {
   super(props);

   this.state = this.props;




 console.log(this.state)
}
  render() {


  return (<div className="mx-auto">
  <Pie
  data={{
    labels:['Red',
    'Yellow',
    'Blue'],
    datasets: [{
      label: '',
   data: [10, 20, 30],
   backgroundColor:[]
}],
}
}  />

</div>
);
}
}
export default BarChart;

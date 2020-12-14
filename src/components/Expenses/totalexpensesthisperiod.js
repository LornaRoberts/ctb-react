import React, {useState, useEffect} from 'react';
import './totalexpensesthisperiod.css';
import BarChart from './barChart';




function TETP(props){

  const [total, setTotal] = useState('');
  useEffect(()=>{
        const url = 'http://localhost:3080/expenses/total/' + props.userId
         fetch(url, {
          method: 'GET',
          mode: 'cors',
          headers: {'Content-Type': 'application/json'},
         })
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
          setTotal(data.totalExpenseThisPeriod)

        })
        .catch(function(error) {
        });
        }
  , [])





  return (
<div>
    <h1 className="TETP" id="tetp">The total expenses for this period: £<span id="tetp-value">{total}</span></h1>
    <BarChart />
   </div>
  );
}
export default TETP;

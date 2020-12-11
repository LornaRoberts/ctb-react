import React, {useState, useEffect} from 'react';
import './totalexpensesthisperiod.css';



function TETP(){
  const [total, setTotal] = useState('');
  useEffect(()=>{
        const url = 'http://localhost:3080/expenses/total'
         fetch(url, {
          method: 'GET',
          mode: 'cors',
          headers: {'Content-Type': 'application/json'},
         })
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
          console.log('Success', data);
          setTotal(data.totalExpenseThisPeriod)
        })
        .catch(function(error) {
        });
        }
  , [])

  return (

    <h1 className="TETP" id="tetp">The total expenses for this period: £<span id="tetp-value">{total}</span></h1>

  );
}
export default TETP;

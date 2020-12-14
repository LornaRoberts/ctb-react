import React, {useState, useEffect} from 'react';
import './totalspendsthisperiod.css';



function TSTP(props){
  const [total, setTotal] = useState('');
  useEffect(()=>{
      
        const url = 'http://localhost:3080/totals/' + props.userId;
         fetch(url, {
          method: 'GET',
          mode: 'cors',
          headers: {'Content-Type': 'application/json'},
         })
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
          console.log('Success', data);
          setTotal(data.totalSpendThisPeriod)
        })
        .catch(function(error) {
        });
        }
  , [])

  return (

    <h1 className="TSTP" id="tstp">The total spend this period: £<span id="tstp-value">{total}</span></h1>

  );
}
export default TSTP;

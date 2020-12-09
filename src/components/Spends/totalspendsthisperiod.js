import React, {useState, useEffect} from 'react';



function TSTP(){
  const [total, setTotal] = useState('');
  useEffect(()=>{
        const url = 'http://localhost:3080/totals'
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
    <h1>The total spend this period: £{total}</h1>
  );
}
export default TSTP;

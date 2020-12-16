import React, {useState, useEffect} from 'react';
import './totalexpensesthisperiod.css';




function TETP(props){

  const { REACT_APP_BACKENDURL } = process.env;
  const [total, setTotal] = useState('');
  useEffect(()=>{
        const url = `${REACT_APP_BACKENDURL}/expenses/total/` + props.userId
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

    <h1 className="TETP" id="tetp">The total expenses for this period: £<span id="tetp-value">{total}</span></h1>

  );
}
export default TETP;

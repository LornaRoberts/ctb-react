import React, {useState, useEffect} from 'react';
import './moneyleft.css';




function TML(props){

  const { REACT_APP_BACKENDURL } = process.env;
  const [salary, setSalary] = useState('');
  const [expenses, setExpenses] = useState('');
  const [spends, setSpends] = useState('');
  useEffect(()=>{
        const url = `${REACT_APP_BACKENDURL}/totals/` + props.userId
         fetch(url, {
          method: 'GET',
          mode: 'cors',
          headers: {'Content-Type': 'application/json'},
         })
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
          setSalary(data.salary);
          setSpends(data.totalSpendThisPeriod);
        })
        .catch(function(error) {
        });

        const url1 = `${REACT_APP_BACKENDURL}/expenses/total/` + props.userId
         fetch(url1, {
          method: 'GET',
          mode: 'cors',
          headers: {'Content-Type': 'application/json'},
         })
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
          setExpenses(data.totalExpenseThisPeriod);
        })
        .catch(function(error) {
        });
        }
  , [props.userId])





  return (

    <h1 className="TML" id="tetp">Money left this month: £<span id="tetp-value">{(salary - spends - parseFloat(expenses)).toFixed(2)}</span></h1>

  );
}
export default TML;

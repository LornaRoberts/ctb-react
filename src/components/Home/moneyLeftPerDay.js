import React, {useState, useEffect} from 'react';
import './moneyleft.css';




function MLPD(props){

  const [salary, setSalary] = useState('');
  const [expenses, setExpenses] = useState('');
  const [spends, setSpends] = useState('');
  const [days, setDays] = useState(1);

  const getRemanningDays = function() {
    const date = new Date();
    setDays(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() - date.getDate() + 1);
                      };
  useEffect(()=>{
    getRemanningDays();
        const url = 'http://localhost:3080/totals/' + props.userId
         fetch(url, {
          method: 'GET',
          mode: 'cors',
          headers: {'Content-Type': 'application/json'},
         })
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
          console.log('Success', data);
          setSalary(data.salary);
          setSpends(data.totalSpendThisPeriod);
        })
        .catch(function(error) {
        });

        const url1 = 'http://localhost:3080/expenses/total/' + props.userId
         fetch(url1, {
          method: 'GET',
          mode: 'cors',
          headers: {'Content-Type': 'application/json'},
         })
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
          console.log('Success', data);
          setExpenses(data.totalExpenseThisPeriod);
        })
        .catch(function(error) {
        });
        }
  , [props.userId])





  return (
    <div>
    <h1 className="TML">Days left this month: <span id="tetp-value">{days}</span></h1>
    <h1 className="TML" id="tetp">Money left per day: £<span id="tetp-value">{((salary - spends - parseFloat(expenses)) / days).toFixed(2)}</span></h1>
    </div>

  );
}
export default MLPD;

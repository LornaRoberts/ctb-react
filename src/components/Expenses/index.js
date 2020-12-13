import React, { useEffect, useState } from 'react';
import ListOfExpenses from './listofexpenses';
import NewExpense from './new';
import Tetp from './totalexpensesthisperiod';
function Expenses() {

  const [userObj, setUserObj] = useState();

  useEffect(() => {
      var retrievedObject = window.localStorage.getItem('userObj');
      if (retrievedObject) {
        setUserObj(retrievedObject);

      }
  }, [])    

  if (!userObj) {
    return (
        <div> 
          <p>You need to be signed in.</p>
        </div>
    )
} else {

  return (
    <div className="App">
    <Tetp />
     <NewExpense />
      <ListOfExpenses />
    </div>
  );
  }
}

export default Expenses;

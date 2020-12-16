import React, { useEffect, useState } from 'react';
import ListOfExpenses from './listofexpenses';
import NewExpense from './new';
import Tetp from './totalexpensesthisperiod';
import UpdateSalary from './updatesalary';

function Expenses() {

  const [userObj, setUserObj] = useState();
  const [userID, setUserID] = useState();

  useEffect(() => {
      var retrievedObject = window.localStorage.getItem('userObj');
      if (retrievedObject) {
        setUserID(JSON.parse(retrievedObject)._id);
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
    <Tetp userId={userID} />
    <UpdateSalary userId={userID} />
     <NewExpense userId={userID} />
      <ListOfExpenses userId={userID} />
    </div>
  );
  }
}

export default Expenses;

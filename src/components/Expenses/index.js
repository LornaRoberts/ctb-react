import React, { useEffect, useState } from 'react';
import ListOfExpenses from './listofexpenses';
import NewExpense from './new';
import Tetp from './totalexpensesthisperiod';

import './index.css'

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

        <div className="Notice">
          <p>You need to be signed in.</p>
        </div>
    )
} else {

  return (
    <div>
    <Tetp userId={userID} />
    <div className="Buttons">
    <span className="updateSalary"><UpdateSalary userId={userID}/></span>
     <NewExpense userId={userID} />
     </div>
      <ListOfExpenses userId={userID} />
    </div>
  );
  }
}

export default Expenses;

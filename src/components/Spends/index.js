import React, { useEffect, useState } from 'react';
import ListOfSpends from './listofspends';
import NewSpend from './new';
import Tstp from './totalspendsthisperiod';
import './index.css'

function Spends() {

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
            <p> You need to be signed in.</p>
          </div>
      )
  } else {
  return (
    <div className="App">
    <Tstp userId={userID}/>
     <NewSpend userId={userID}/>
      <ListOfSpends userId={userID}/>
    </div>
  );
  }
}

export default Spends;

import React, { useEffect, useState } from 'react';
import ListOfSpends from './listofspends';
import NewSpend from './new';
import Tstp from './totalspendsthisperiod';

function Spends() {

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
    <Tstp />
     <NewSpend />
      <ListOfSpends />
    </div>
  );
  }
}

export default Spends;

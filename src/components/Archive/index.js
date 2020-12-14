import React, { useEffect, useState } from 'react';


function Archive() {

  const [userObj, setUserObj] = useState();
  const [userID, setUserID] = useState();
  const [items, setItems] = useState();

  const yearSpends= (array) => {
    const tempYear = [[], [], [], [], [], [], [], [], [], [], [], []];
    for (let i = 12; i >= 1; i--) {
      tempYear[i - 1].push(array.filter(item => parseInt(item.dateSpent.substring(5, 7)) === i))
    };
    return tempYear;
  };
  useEffect(() => {
      var retrievedObject = window.localStorage.getItem('userObj');
      if (retrievedObject) {
        setUserID(JSON.parse(retrievedObject)._id);
        setUserObj(retrievedObject);

      }
      fetch(`http://localhost:3080/spends/user/${userID}`, {mode: 'cors', method: 'GET'})
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result.spends);
          console.log('Raw data', result.spends)
          console.log(yearSpends(result.spends))
          return result.spends;
        },
        (error) => {
          throw error;
          });

  }, [userID])

  if (!userObj) {
    return (
        <div>
          <p>You need to be signed in.</p>
        </div>
    )
} else {

  return (
    <div className="App">
    </div>
  );
  }
}

export default Archive;

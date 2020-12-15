import React, { useEffect, useState } from 'react';
import MonthModal from './MonthModal';

function Archive() {

  const [userObj, setUserObj] = useState();
  const [userID, setUserID] = useState();
  const [items, setItems] = useState([]);
  const [hasData, setData] = useState(false);
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
      .then( (result) => {
          if (result) {
          setData(true);
          setItems(yearSpends(result.spends));
        }
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
} else if (hasData) {

  return (
    <div className="App">
    {items.map((item) => (<MonthModal key={items.indexOf(item)} 
                                      monthNo={items.indexOf(item) + 1} 
                                      input={item}/>))}
    </div>
  );
} else {
  return (
  <div className="App">
  <p>nothing returned</p>
  </div>
)
}
}

export default Archive;

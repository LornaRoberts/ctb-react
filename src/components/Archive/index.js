import React, { useEffect, useState } from 'react';


function Archive() {

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
    </div>
  );
  }
}

export default Archive;

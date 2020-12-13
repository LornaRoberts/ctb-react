import React, { useEffect, useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import TotalsPage from './TotalsPage';

function Home () {

    const [userObj, setUserObj] = useState();

    useEffect(() => {
        var retrievedObject = window.localStorage.getItem('userObj');
        if (retrievedObject) {
          setUserObj(retrievedObject);

        }
    }, [])    
    
    if (userObj) {
        return (
            <div>
                <TotalsPage />
            </div>
        )
    } else {
        return (
            <div>
            <SignUp /> or <Login />
            </div>
        )
    }
    
}

export default Home;

import React, { useEffect, useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import TotalsPage from './TotalsPage';
import Logo from "../../images/boostlogodesign.png";
import './index.css'


function Home () {

    const [userObj, setUserObj] = useState();
    const [userID, setUserID] = useState();

    useEffect(() => {
        var retrievedObject = window.localStorage.getItem('userObj');
        if (retrievedObject) {
            setUserID(JSON.parse(retrievedObject)._id);
            setUserObj(retrievedObject);

        }
    }, [])

    if (userObj) {
        return (
            <div>
                <TotalsPage userId={userID}/>
            </div>
        )
    } else {
        return (
            <div>
            <img src={Logo} alt="Boost logo" className="LargeLogo"/>
            <div className="Buttons" > <SignUp className="SignUp"/> <Login className="Login"/> </div>
            </div>
        )
    }

}

export default Home;

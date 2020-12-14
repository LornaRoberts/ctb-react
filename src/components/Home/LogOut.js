import React from 'react';
import Button from 'react-bootstrap/Button';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function LogOut () {

    function refreshPage() {
        window.location.reload(false);
      }

    const handleClick = (evt) => {
        evt.preventDefault();
        confirmAlert({
            title: 'Logout',
            message: 'Are you sure you want to do this?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                  window.localStorage.clear();
                  refreshPage();
                }
              },
              {
                label: 'No',
                onClick: () => {}
              }
            ]
          });
    }
    


    return (
        <main className="Login">
            <Button onClick={handleClick}>LogOut</Button>
        </main>
    )

}

export default LogOut;
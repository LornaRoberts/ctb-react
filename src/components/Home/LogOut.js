import React from 'react';
import Button from 'react-bootstrap/Button';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import './logout.css';
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
        <main className="Logout">
            <Button className="shadow p-3 mb-5 logout-buttons" size="sm" onClick={handleClick}>LogOut</Button>
        </main>
    )

}

export default LogOut;

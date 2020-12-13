import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userObj, setUserObj] = useState();
    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false);
      window.sessionStorage.clear();}
    const handleShow = () => {setShow(true);
      window.sessionStorage.clear();}

    function refreshPage() {
        window.location.reload(false);
      }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setEmail(email);
        setPassword(password);
        await checkLogin(email, password);
    }

        async function checkLogin(email, password) {
          const url = 'http://localhost:3080/users/login';
          await fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({email: email, password: password}),
            headers: {'Content-Type': 'application/json'},
          }).then(function(resp) { return resp.text() }) // Convert data to json
          .then(function(data) {
              if (data === "Wrong username or password.") {
                  alert(data);
                  return;
              } else {
                console.log('User Logged In', data.status);
                setUserObj(data);
                window.localStorage.setItem('userObj', data);
                refreshPage();
              }
            
          })
          .catch(function(error) {
          });
        }

        if (userObj) {
            return <div className='loggedIn'>{email} is logged in </div>
          }    

    return (
        <main className="Login">
        <Button variant="primary" onClick={handleShow}>
          Log In
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>

          <h1>Enter your details</h1>
           <form className="Login-form" onSubmit={handleSubmit}>
            <label>
              Email:
              <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required/>
            </label><br></br>
            <label>
              Password:
              <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required/>
            </label>
            <br></br>
            <input type="submit" value="Submit"/>
          </form>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              What am I doing, I don't even have a login?!
            </Button>
          </Modal.Footer>
        </Modal>
      </main>

        )
}



export default Login;

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './login.css';
import Form from 'react-bootstrap/Form';


function Login () {
  const { REACT_APP_BACKENDURL } = process.env;
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
          const url = `${REACT_APP_BACKENDURL}/users/login`;
          await fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({email: email, password: password}),
            headers: {'Content-Type': 'application/json'},
          }).then(function(resp) { return resp.text() }) // Convert data to json
          .then(function(data) {
              if (data === "Wrong username or password." || data === "Wrong username or password") {
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
        <Button variant="primary" className="shadow p-3 mb-5 mx-auto" size="lg" onClick={handleShow}>
          Log In
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="Login-header">
            <Modal.Title className="Login-title mx-auto">Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>

          <h1 className="Login-enter">Enter your details</h1>
           <Form className="Login-form" onSubmit={handleSubmit}>
            <Form.Label>
              Email:
              <Form.Control type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required/>
            </Form.Label><br></br>
            <Form.Label>
              Password:
              <Form.Control type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required/>
            </Form.Label>
            <br></br>
            <Button type="submit" value="Submit" className="shadow p-3 mb-5">Login</Button>
          </Form>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary"  onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </main>

        )
}



export default Login;

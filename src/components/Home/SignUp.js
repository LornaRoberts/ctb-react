import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function SignUp () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function refreshPage() {
        window.location.reload(false);
      }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setEmail(email)
        setPassword(password);
        setPassword2(password2);
            if (password === password2) {
                postUser(email, password);
                console.log("user created")
                refreshPage();
            } else {
                alert('Passwords do not match');
            }
    }

    async function postUser(email, password) {
        const url = 'http://localhost:3080/users/new'
        await fetch(url, {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify({email: email, password: password}),
          headers: {'Content-Type': 'application/json'},
         })
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
          console.log('Success', data);
        })
        .catch(function(error) {
        });
        }

    return (
        <main className="SignUp">
        <Button variant="primary" onClick={handleShow}>
          Sign Up
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>

          <h1>Enter your details</h1>
           <form className="SignUp-form" onSubmit={handleSubmit}>
            <label>
              Email:
              <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required/>
            </label><br></br>
            <label>
              Password:
              <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required/>
            </label>
            <label>
            Confirm Password:
            <input type="password" name="password2" value={password2} onChange={e => setPassword2(e.target.value)} required/>
          </label>
            <br></br>
            <input type="submit" value="Submit"/>
          </form>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Opps I made a booboo
            </Button>
          </Modal.Footer>
        </Modal>
      </main>

        )
}



export default SignUp;

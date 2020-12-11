import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './SignUp.css';
import Form from 'react-bootstrap/Form';



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
        <Button variant="primary" className="shadow p-3 mb-5" size="lg" onClick={handleShow}>
          Sign Up
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="SignUp-header">
            <Modal.Title className="SignUp-title mx-auto">Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>

          <h1 className="SignUp-enter">Enter your details</h1>
           <Form className="SignUp-form mx-auto" onSubmit={handleSubmit}>
            <Form.Label>
              Email:
              <Form.Control type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required/>
            </Form.Label><br></br>
            <Form.Label>
              Password:
              <Form.Control type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required/>
            </Form.Label>
            <br></br>
            <Form.Label>
            Confirm Password:
            <Form.Control type="password" name="password2" value={password2} onChange={e => setPassword2(e.target.value)} required/>
          </Form.Label>
            <br></br>
            <Button type="submit" value="Submit" className="shadow p-3 mb-5">Submit</Button>
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



export default SignUp;

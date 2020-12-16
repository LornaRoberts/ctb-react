import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './SignUp.css';
import Form from 'react-bootstrap/Form';



function SignUp () {
    const { REACT_APP_BACKENDURL } = process.env;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [show, setShow] = useState(false);
    //const [userObj, setUserObj] = useState();

    const handleClose = () => {setShow(false);
      window.sessionStorage.clear();}
    const handleShow = () => {setShow(true);
      window.sessionStorage.clear();}

    function refreshPage() {
        window.location.reload(false);
      }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        window.sessionStorage.clear();
        setEmail(email);
        await checkEmail(email);
        setPassword(password);
        setPassword2(password2);
            if (password === password2 && window.sessionStorage.getItem('status') === "available") {
                await postUser(email, password);
                await setupSalary(window.sessionStorage.getItem('user'));
                refreshPage();
                window.sessionStorage.clear();
            }  else {
              alert('Passwords do not match or the email is already in use');
              window.sessionStorage.clear();
            }
          }


    async function postUser(email, password) {
        const url = `${REACT_APP_BACKENDURL}/users/new`
        await fetch(url, {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify({email: email, password: password}),
          headers: {'Content-Type': 'application/json'},
         })
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
          window.sessionStorage.setItem('user', data.user._id);
          window.localStorage.setItem('userObj', JSON.stringify(data.user));
        })
        .catch(function(error) {
        });
        }

        async function checkEmail(email) {
          const url = `${REACT_APP_BACKENDURL}/users/exist`;
          await fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({email: email}),
            headers: {'Content-Type': 'application/json'},
          }).then(function(resp) { return resp.json() }) // Convert data to json
          .then(function(data) {
            //console.log('Success', data.status);
            window.sessionStorage.setItem('status', data.status);
          })
          .catch(function(error) {
          });
        }

          async function setupSalary(userId) {
            const url1 = `${REACT_APP_BACKENDURL}/totals/salary/${userId}`
            await fetch(url1, {
              method: 'POST',
              mode: 'cors',
              body: JSON.stringify({salary: 1950}),
              headers: {'Content-Type': 'application/json'},
             })
            .then(function(resp) { return resp.json() }) // Convert data to json
            .then(function(data) {
            })
            .catch(function(error) {
            });
            }

    return (
        <main className="SignUp">
        <Button variant="primary" className="shadow p-3 mb-5 mx-auto" onClick={handleShow}>
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

import React, { useState} from 'react';
import './new.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function NewExpense(props){

      const { REACT_APP_BACKENDURL } = process.env;
      const [expense, setExpense] = useState("");
      const [cat, setCat] = useState("");
      const [cost, setCost] = useState("");
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);



      function refreshPage() {
       window.location.reload(false);
     }


      const handleSubmit = (evt) => {
          evt.preventDefault();
          setExpense(expense);
          setCat(cat);
          setCost(cost);
           postExpense(expense, cat, cost, props.userId);
           refreshPage();
      }


      async function postExpense(expense, cat, cost, userid) {
          const url = `${REACT_APP_BACKENDURL}/expenses`
          await fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({userId: userid, expense: expense, expenseCat: cat, expenseCost: cost}),
            headers: {'Content-Type': 'application/json'},
           })
          .then(function(resp) { return resp.json() }) // Convert data to json
          .then(function(data) {
          })
          .catch(function(error) {
          });
          }


          return (
            <main className="NewExpense">
              <Button variant="primary" className="shadow p-3 mb-5 NewExpense-add" onClick={handleShow}>
                Add an Expense
              </Button>

              <Modal show={show} onHide={handleClose} className="modal">
                <Modal.Header className="NewExpense-header">
                  <Modal.Title className="NewExpense-title mx-auto">Add an Expense</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                <div>
                 <Form className="NewExpense-form mx-auto" onSubmit={handleSubmit}>
                  <Form.Label>
                    Expense:
                    <Form.Control type="text" name="name" value={expense} onChange={e => setExpense(e.target.value)} required/>
                  </Form.Label>
                  <br></br>
                  <Form.Label>
                    Category:
                      <select id="categories" name="categories" value={cat} onChange={e => setCat(e.target.value)} required>
                        <option value="" disabled selected> Select a category </option>
                        <option value="Rent/Mortgage">Rent/Mortgage</option>
                        <option value="Electricity">Electricity</option>
                        <option value="Gas">Gas</option>
                        <option value="Water">Water</option>
                        <option value="Council Tax">Council Tax</option>
                        <option value="Insurance">Insurance</option>
                        <option value="Food">Food</option>
                        <option value="Travel">Travel</option>
                        <option value="TV Licence">TV Licence</option>
                        <option value="Internet">Internet</option>
                        <option value="Phone">Phone</option>
                        <option value="Other">Other</option>
                      </select>
                  </Form.Label>
                  <br></br>
                  <Form.Label>
                    Cost:
                    <Form.Control type="number" name="cost" value={cost} step="0.01" placeholder="0.00" onChange={e => setCost(e.target.value)} required/>
                  </Form.Label>
                  <br></br>
                  <Form.Control type="submit" value="Submit"
                  className="btn-primary NewExpense-submit shadow p-3 mb-5 mx-auto"/>

                </Form>
                </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </main>

    );
}

export default NewExpense;

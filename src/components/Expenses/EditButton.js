import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function EditButton (singleExpense) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [expense, setExpense] = useState(singleExpense.expense.expense);
  const [cat, setCat] = useState(singleExpense.expense.expenseCat);
  const [cost, setCost] = useState(singleExpense.expense.expenseCost);
  const [show, setShow] = useState(false);

  console.log(singleExpense.expense);

  function refreshPage() {
   window.location.reload(false);
 }

  const handleSubmit = (evt) => {
      console.log("handleSubmit is fired");
      evt.preventDefault();
      setExpense(expense);
      setCat(cat);
      setCost(cost);
       postExpense(singleExpense.expense._id, expense, cat, cost);
       console.log("expense posted");
       refreshPage();
  }

  const handleDelete = () => {
    console.log("handleDelete is fired");
    // closes the modal so it doesn't obscure the alert
    handleClose();

    confirmAlert({
      title: 'Delete Expense',
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            //run the delete API fetch here
            fetch(`http://localhost:3080/expenses/${singleExpense.expense._id}`, {mode: 'cors', method: 'DELETE'})
            .then(res => res.json())
            .then(() => {
                alert('Expense deleted');
                refreshPage();
              }
            )
            .catch((error) => {throw error;})
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  }

  async function postExpense(expenseId, expense, cat, cost){
      const url = 'http://localhost:3080/expenses/' + expenseId;
      await fetch(url, {
        method: 'PATCH',
        mode: 'cors',
        body: JSON.stringify({expense: expense, expenseCat: cat, expenseCost: cost}),
        headers: {'Content-Type': 'application/json'},
       })
      .then(function(resp) { return resp.json() }) // Convert data to json
      .then(function(data) {
        console.log('Success', data);
      })
      .catch(function(error) {
      });
      }


  return(
              <main className="EditButton">
              <FontAwesomeIcon icon={faEdit} className="EditButton-icon" onClick={handleShow} />

                <Modal show={show} onHide={handleClose}>

                  <Modal.Header className="EditButton-header">
                    <Modal.Title className="mx-auto EditButton-title">Update Your Expenses</Modal.Title>

                  </Modal.Header>
                  <Modal.Body>
                  <div>
                   <Form className="EditButton-form" onSubmit={handleSubmit}>
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
                    <Button variant="danger" className="btn-danger shadow p-3 mb-5 delete" onClick={handleDelete}>Delete</Button>
                 <Button type="submit" className="btn-primary shadow p-3 mb-5">Submit</Button>
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
  )
}

export default EditButton;

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function EditButton (singleExpense) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [date, setDate] = useState(singleExpense.expense.expenseDate);
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
      setDate(date);
      setExpense(expense);
      setCat(cat);
      setCost(cost);
       postExpense(singleExpense.expense._id, date, expense, cat, cost);
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

  async function postExpense(expenseId, date, expense, cat, cost){
      const url = 'http://localhost:3080/expenses/' + expenseId;
      await fetch(url, {
        method: 'PATCH',
        mode: 'cors',
        body: JSON.stringify({expenseDate: date, expense: expense, expenseCat: cat, expenseCost: cost}),
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
                <Button variant="primary" onClick={handleShow}>
                  Edit
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header>
                    <Modal.Title>Edit</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <div>

                  <h1>Update your Expenses</h1>
                   <form className="EditButton-form" onSubmit={handleSubmit}>
                    <label>
                      Date:
                      <input type="date" name="date" value={date.substring(0,10)} onChange={e => setDate(e.target.value)} required/>
                    </label><br></br>
                    <label>
                      Expense:
                      <input type="text" name="name" value={expense} onChange={e => setExpense(e.target.value)} required/>
                    </label>
                    <br></br>
                    <label>
                      Category:
                        <select id="categories" name="categories" value={cat} onChange={e => setCat(e.target.value)} required>
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
                    </label>
                    <br></br>
                    <label>
                      Cost:
                      <input type="number" name="cost" value={cost} step="0.01" placeholder="0.00" onChange={e => setCost(e.target.value)} required/>
                    </label>
                    <br></br>
                    <Button onClick={handleDelete}>Delete</Button><input type="submit" value="Submit"/>
                  </form>
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

import React, { useState} from 'react';
import './new.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'


function NewExpense(props){

      const [date, setDate] = useState("");
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
          console.log("handleSubmit is fired");
          evt.preventDefault();
          setDate(date);
          setExpense(expense);
          setCat(cat);
          setCost(cost);
           postExpense(date, expense, cat, cost, props.userId);
           console.log("expense posted")
           refreshPage();
      }

      async function postExpense(date, expense, cat, cost, userid) {
          const url = 'http://localhost:3080/expenses'
          await fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({userId: userid, expenseDate: date, expense: expense, expenseCat: cat, expenseCost: cost}),
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
            <main className="NewExpense">
              <Button variant="primary" onClick={handleShow}>
                Add an Expense
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                  <Modal.Title>Add an Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div>

                <h1>Add an Expense</h1>
                 <form className="NewExpense-form" onSubmit={handleSubmit}>
                  <label>
                    Date:
                    <input type="date" name="date" value={date} onChange={e => setDate(e.target.value)} required/>
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
                  <input type="submit" value="Submit"/>
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

    );
}

export default NewExpense;

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './EditButton.css';
import Form from 'react-bootstrap/Form';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


function EditButton (singleSpend) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [date, setDate] = useState(singleSpend.spend.dateSpent);
  const [spend, setSpend] = useState(singleSpend.spend.itemSpent);
  const [cat, setCat] = useState(singleSpend.spend.itemCat);
  const [cost, setCost] = useState(singleSpend.spend.itemCost);
  const [show, setShow] = useState(false);


  console.log(singleSpend.spend);

  function refreshPage() {
   window.location.reload(false);
 }

  const handleSubmit = (evt) => {
      console.log("handleSubmit is fired");
      evt.preventDefault();
      setDate(date);
      setSpend(spend);
      setCat(cat);
      setCost(cost);
       postSpend(singleSpend.spend._id, date, spend, cat, cost);
       console.log("spend posted");
       refreshPage();
  }

  const handleDelete = () => {
    console.log("handleDelete is fired");
    // closes the modal so it doesn't obscure the alert
    handleClose();

    confirmAlert({
      title: 'Delete Spend',
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            //run the delete API fetch here
            fetch(`http://localhost:3080/spends/${singleSpend.spend._id}`, {mode: 'cors', method: 'DELETE'})
            .then(res => res.json())
            .then(() => {
                alert('Spend deleted');
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

  async function postSpend(spendId, date, spend, cat, cost){
      const url = 'http://localhost:3080/spends/' + spendId;
      await fetch(url, {
        method: 'PATCH',
        mode: 'cors',
        body: JSON.stringify({dateSpent: date, itemSpent: spend, itemCat: cat, itemCost: cost}),
        headers: {'Content-Type': 'application/json'},
       })
      .then(function(resp) { return resp.json() }) // Convert data to json
      .then(function(data) {
        console.log('Success', data);
      })
      .catch(function(error) {
      });
      }

      const minDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
      const maxDate = new Date(new Date().getFullYear(), new Date().getMonth()+1, 0);


  return(
              <main className="EditButton">

              <FontAwesomeIcon icon={faEdit} className="EditButton-icon" onClick={handleShow} />


                <Modal show={show} onHide={handleClose}>
                  <Modal.Header className="EditButton-header">
                    <Modal.Title className="mx-auto EditButton-title">Update Your Spend</Modal.Title>

                  </Modal.Header>
                  <Modal.Body>
                  <div>

                   <Form className="EditButton-form" onSubmit={handleSubmit}>
                    <Form.Label>
                      Date:
                      <Form.Control type="date" name="date" value={date} min={minDate.toISOString().split("T")[0]} max={maxDate.toISOString().split("T")[0]} onChange={e => setDate(e.target.value)} required/>
                    </Form.Label><br></br>
                    <Form.Label>
                      Item:
                      <Form.Control type="text" name="name" value={spend} onChange={e => setSpend(e.target.value)} required/>
                    </Form.Label>
                    <br></br>
                    <Form.Label>
                      Category:
                        <select id="categories" name="categories" value={cat} onChange={e => setCat(e.target.value)} required>
                          <option value="Entertainment">Entertainment</option>
                          <option value="Sports">Sports</option>
                          <option value="Food & Drink">Food/Drink</option>
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

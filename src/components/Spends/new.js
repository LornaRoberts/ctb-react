import React, { useState} from 'react';
import './new.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function NewSpend(props){

      const { REACT_APP_BACKENDURL } = process.env;
      const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
      const [spend, setSpend] = useState("");
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
          setDate(date);
          setSpend(spend);
          setCat(cat);
          setCost(cost);
           postSpend(date, spend, cat, cost, props.userId);
           refreshPage();
      }

      async function postSpend(date, spend, cat, cost, userid) {
          const url = `${REACT_APP_BACKENDURL}/spends`
          await fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({userId: userid, dateSpent: date, itemSpent: spend, itemCat: cat, itemCost: cost}),
            headers: {'Content-Type': 'application/json'},
           })
          .then(function(resp) { return resp.json() }) // Convert data to json
          .then(function(data) {
          })
          .catch(function(error) {
          });
          }

          const minDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
          const maxDate = new Date(new Date().getFullYear(), new Date().getMonth()+1, 0);


          return (

            <main className="NewSpend">
              <Button variant="primary" className="shadow p-3 mb-5" size="lg" onClick={handleShow}>
                Add a Spend
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header className="NewSpend-header">
                 <Modal.Title className="NewSpend-title mx-auto">Add a Spend</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                <div>

                 <Form className="NewSpend-form" onSubmit={handleSubmit}>
                 <Form.Group controlId="formNewSpend">

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
                        <option value="" disabled selected> Select a category </option>
                        <option value="Leisure">Leisure</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Sports">Sports</option>
                        <option value="Food & Drink">Food/Drink</option>
                        <option value="Health & Beauty">Health & Beauty</option>
                        <option value="Transport">Transport</option>
                        <option value="Other">Other</option>
                      </select>
                  </Form.Label>
                  <br></br>
                  <Form.Label>
                    Cost:
                    <Form.Control type="number" name="cost" value={cost} step="0.01" placeholder="0.00" onChange={e => setCost(e.target.value)} required/>
                  </Form.Label>
                  <br></br>
                  <Form.Control type="submit" value="Submit" className="btn-primary NewSpend-submit shadow p-3 mb-5 mx-auto"/>
                  </Form.Group>
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

export default NewSpend;

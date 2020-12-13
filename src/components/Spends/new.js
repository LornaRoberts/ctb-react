import React, { useState} from 'react';
import './new.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'


function NewSpend(props){

      const [date, setDate] = useState("");
      const [spend, setSpend] = useState("");
      const [cat, setCat] = useState("");
      const [cost, setCost] = useState("");
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      console.log('userprops:', props.user);

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
           postSpend(date, spend, cat, cost, props.user);
           console.log("spend posted")
           refreshPage();
      }

      async function postSpend(date, spend, cat, cost, userid) {
          const url = 'http://localhost:3080/spends'
          await fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({userId: userid, dateSpent: date, itemSpent: spend, itemCat: cat, itemCost: cost}),
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
            <main className="NewSpend">
              <Button id="add" variant="primary" onClick={handleShow}>
                Add a Spend
              </Button>

              <Modal id="addModal" show={show} onHide={handleClose}>
                <Modal.Header>
                  <Modal.Title>Add a Spend</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div>

                <h1>Add a spend</h1>
                 <form className="NewSpend-form" onSubmit={handleSubmit}>
                  <label>
                    Date:
                    <input type="date" name="date" value={date} onChange={e => setDate(e.target.value)} required/>
                  </label><br></br>
                  <label>
                    Item:
                    <input type="text" name="name" value={spend} onChange={e => setSpend(e.target.value)} required/>
                  </label>
                  <br></br>
                  <label>
                    Category:
                      <select id="categories" name="categories" value={cat} onChange={e => setCat(e.target.value)} required>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Sports">Sports</option>
                        <option value="Food & Drink">Food/Drink</option>
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

export default NewSpend;

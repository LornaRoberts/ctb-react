import React, { useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function EditButton (singleSpend) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [date, setDate] = useState(singleSpend.spend.dateSpent);
  const [spend, setSpend] = useState(singleSpend.spend.itemSpent);
  const [cat, setCat] = useState(singleSpend.spend.itemCat);
  const [cost, setCost] = useState(singleSpend.spend.itemCost);
  const [show, setShow] = useState(false);

  console.log(singleSpend.spend);

  // useEffect(() => {
  //   fetch(`http://localhost:3080/spends/${singleSpend.spend._id}`, {mode: 'cors', method: 'GET'})
  //   .then(res => res.json())
  //   .then((result) => {
  //       setDate(result.dateSpent);
  //       setSpend(result.itemSpent);
  //       setCat(result.itemCat);
  //       setCost(result.itemCost);
  //       console.log(result);
  //     }
  //   )
  //   .catch(
  //     (error) => {
  //       if(error) {throw error;}
  //     }
  //   )  
  // }, [])

  
  

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

  async function postSpend(spendId, date, spend, cat, cost){
      const url = 'http://localhost:3080/spends/' + spendId;
      await fetch(url, {
        method: 'FIND',
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


  return(
              <main className="EditButton">
                <Button variant="primary" onClick={handleShow}>
                  Edit
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <div>

                  <h1>Update your spend</h1>
                   <form className="EditButton-form" onSubmit={handleSubmit}>
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
  )
}

export default EditButton;

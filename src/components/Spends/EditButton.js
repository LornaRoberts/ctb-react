import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

function EditButton (spendId) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (evt) => {
      console.log("handleSubmit is fired");
      evt.preventDefault();
      setDate(date);
      setSpend(spend);
      setCat(cat);
      setCost(cost);
       postSpend(date, spend, cat, cost);
       console.log("spend posted")
       refreshPage();
  }

  async function postSpend(spendId, date, spend, cat, cost) {
      const url = 'http://localhost:3080/spends'
      await fetch(url, {
        method: 'GET',
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

  return()


}

export default EditButton;

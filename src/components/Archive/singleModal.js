import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import BarChart from './barChart';

function SingleModal (props) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  if (props.total) {
    console.log(props.item[0][0]);
    return (
        <main>
        <Button className="EditButton-icon" onClick={handleShow}>
        {props.name}
        </Button>
        <Modal show={show} onHide={handleClose}>

          <Modal.Header className="EditButton-header">
            <Modal.Title className="mx-auto EditButton-title"> Total expenses in {props.name}</Modal.Title>

          </Modal.Header>
          <Modal.Body>
          <div>
          <BarChart cost={props.item[0][0].itemCost} expense={props.item[0][0].itemSpent} />

          Total Spend: {props.total}
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
  } else {
    return (
      <div>empty</div>
    )
  }
}

export default SingleModal;

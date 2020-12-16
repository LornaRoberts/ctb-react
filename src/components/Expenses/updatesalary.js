import React, { useState} from 'react';
import './new.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function UpdateSalary(props){

      const [salary, setSalary] = useState();
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = async () => {
        await getSalary(props.userId);
        setShow(true);}



      function refreshPage() {
       window.location.reload(false);
     }


      const handleSubmit = (evt) => {
          console.log("handleSubmit is fired");
          evt.preventDefault();
           update(salary, props.userId);
           alert('Your income was updated.');
           refreshPage();
      }


      async function update(salary, userid) {
          const url = `${REACT_APP_BACKENDURL}/totals/salary/${userid}`
          await fetch(url, {
            method: 'PATCH',
            mode: 'cors',
            body: JSON.stringify({salary: salary}),
            headers: {'Content-Type': 'application/json'},
           })
          .then(function(resp) { return resp.json() }) // Convert data to json
          .then(function(data) {
          })
          .catch(function(error) {
          });
        };

        async function getSalary(userid) {
            const url = `${REACT_APP_BACKENDURL}/totals/salary/${userid}`
            await fetch(url, {
              method: 'GET',
              mode: 'cors',
              headers: {'Content-Type': 'application/json'},
             })
            .then(function(resp) { return resp.json() }) // Convert data to json
            .then(function(data) {
              setSalary(data.salary[0].salary);
            })
            .catch(function(error) {
            });
            }


          return (
            <main className="NewExpense">
              <Button variant="primary" className="shadow p-3 mb-5 NewExpense-add" onClick={handleShow}>
                Update monthly income
              </Button>

              <Modal show={show} onHide={handleClose} className="modal">
                <Modal.Header className="NewExpense-header">
                  <Modal.Title className="NewExpense-title mx-auto">Update monthly income</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                <div>
                 <Form className="NewExpense-form mx-auto" onSubmit={handleSubmit}>
                  <Form.Label>
                    Income:
                    <Form.Control type="number" name="cost" value={salary} step="0.01" placeholder="0.00" onChange={e => setSalary(e.target.value)} required/>
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

export default UpdateSalary;

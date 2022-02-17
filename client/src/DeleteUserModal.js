
import { useState } from 'react';
import { Button, Form, Modal} from 'react-bootstrap';  

function DeleteUserModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="secondary" onClick={handleShow}>
          Delete User
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>User ID</Form.Label>
                <Form.Control type="text" placeholder="Enter User ID" />
            </Form.Group>

        </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Delete User
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default DeleteUserModal;

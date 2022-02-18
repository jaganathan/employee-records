
import React from 'react';
import { Button, Form, Modal} from 'react-bootstrap';  
import RestService from '../RestService';

class AddUserModal extends React.Component {
    // const [show, setShow] = useState(false);
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            address: '',
            joiningDate: '',
            show: false
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleClose() {
        this.setState({
            show: false
        });
    }

    handleShow() {
        this.setState({
            show: true
        });
    }

    handleSubmit() {
        console.log(JSON.stringify(this.state));
        this.saveUser();
    }

    saveUser() {
      RestService.createNewEmployee(this.state).then(d => {
        this.handleClose();
      });
    }

    render() {
        return (
            <>
              <Button variant="primary" className="btn-space"onClick={this.handleShow}>
                Add User
              </Button>
        
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleInputChange}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleInputChange}/>
                  </Form.Group>
      
                  <Form.Group className="mb-3" controlId="formBasicTextarea">
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="text" placeholder="Enter Address" name="address" value={this.state.address} onChange={this.handleInputChange}/>
                  </Form.Group>
      
                  <Form.Group className="mb-3" controlId="joiningDate">
                      <Form.Label>Joining Date</Form.Label>
                      <Form.Control type="date" name="joiningDate" placeholder="Enter joining date" value={this.state.joiningDate} onChange={this.handleInputChange}/>
                  </Form.Group>
              </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={this.handleSubmit}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          ); 
    } 
  }
  
  export default AddUserModal;

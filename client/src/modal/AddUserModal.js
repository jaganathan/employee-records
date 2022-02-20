
import React from 'react';
import { Button, Form, Modal} from 'react-bootstrap';  
import RestService from '../RestService';

class AddUserModal extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            address: '',
            joiningDate: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event) {
      console.log("event" +  event);
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }


    handleSubmit() {
        console.log(JSON.stringify(this.state));
        this.saveUser();
    }

    saveUser() {
      RestService.createNewEmployee(this.state).then(d => {
        this.props.handleClose();
        this.props.whenUserChanged(true);
      });
    }

    render() {
        return (
                <>
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
                        <Form.Control type="text" placeholder="Enter address" name="address" value={this.state.address} onChange={this.handleInputChange}/>
                    </Form.Group>
        
                    <Form.Group className="mb-3" controlId="joiningDate">
                        <Form.Label>Joining Date</Form.Label>
                        <Form.Control type="date" name="joiningDate" placeholder="Enter joining date" value={this.state.joiningDate} onChange={this.handleInputChange}/>
                    </Form.Group>
              </Form>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.handleSubmit}>
                  Save Changes
                </Button>
              </Modal.Footer>
              </>
          ); 
    } 
  }
  
  export default AddUserModal;

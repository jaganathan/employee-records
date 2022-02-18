
import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import RestService from '../RestService';

class DeleteUserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      userId: ''
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
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

  handleChange(e) {
    this.setState({
      userId: e.target.value
    });
  }

  deleteUser() {
    RestService.deleteEmployee(this.state.userId).then(d => {
      this.handleClose();
    });
  }

  render() {
    return (
      <>
        <Button variant="secondary" className='btn-space' onClick={this.handleShow}>
          Delete User
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
            <div className="form-group">
              <label for="userId">User ID</label>
              <input type="text" className="form-control"
                 placeholder="Enter User ID" name="userId" value={this.state.userId} onChange={this.handleChange}/>
            </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.deleteUser}>
              Delete User
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

}

export default DeleteUserModal;

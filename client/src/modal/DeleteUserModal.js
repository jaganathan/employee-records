
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import RestService from '../RestService';

class DeleteUserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  handleChange(e) {
    this.setState({
      userId: e.target.value
    });
  }

  deleteUser() {
    RestService.deleteEmployee(this.state.userId).then(d => {
      this.props.handleClose();
      this.props.whenUserChanged(true);
    });
  }

  render() {
    return (
      <>
        <form>
          <div className="form-group">
            <label>User ID</label>
            <input type="text" className="form-control"
              placeholder="Enter User ID" name="userId" value={this.state.userId} onChange={this.handleChange} />
          </div>
        </form>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.deleteUser}>
            Delete User
          </Button>
        </Modal.Footer>
      </>
    );
  }

}

export default DeleteUserModal;


import React from 'react';
import { Button, Modal} from 'react-bootstrap';  
import AddUserModal from './AddUserModal';
import DeleteUserModal from './DeleteUserModal';

class EmployeeModal extends React.Component {
    constructor() {
        super()
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.state = {
            show: false
        };
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

    render() {
        return (
            <>
              <Button variant={this.props.btnClass} className="btn-space"onClick={this.handleShow}>
                {this.props.title}
              </Button>
        
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        this.props.action  === 'add' ?  
                        <AddUserModal handleClose={this.handleClose} whenUserChanged={this.props.whenUserChanged}/> :
                        <DeleteUserModal handleClose={this.handleClose} whenUserChanged={this.props.whenUserChanged}/>
                    }     
                </Modal.Body>
              </Modal>
            </>
          ); 
    } 
  }
  
  export default EmployeeModal;

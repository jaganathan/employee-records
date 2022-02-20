import React from "react";
import EmployeeModal from "../modal/EmployeeModal";
class EmployeeListTable extends React.Component {

  employeeRows()  {
      return this.props.employees.map((emp) => {
        const row = <tr>
          <td>{emp._id}</td>
          <td>{emp.name}</td>
          <td>{emp.email}</td>
          <td>{emp.address}</td>
          <td>{emp.joiningDate}</td>
        </tr>
        return row;
    });
  }
  render() {
    return (
      <div>
        <h2>Employee List</h2>
        <div className="float-right">
          <EmployeeModal title="Add User" action="add" btnClass="primary" whenUserChanged={this.props.whenUserChanged}/>
          <EmployeeModal title="Delete User" action="delete" btnClass="secondary" whenUserChanged={this.props.whenUserChanged}/>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Joining Date</th>
            </tr>
          </thead>
          <tbody>
            {this.employeeRows()}
          </tbody>
        </table>
      </div>);
  }
}

export default EmployeeListTable;
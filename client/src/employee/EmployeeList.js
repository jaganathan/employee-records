import React from "react";
import EmployeeModal from "../modal/EmployeeModal";

function EmployeeTableData(props) {
  const tableData = props.employees.map((emp) => {
        const row = <tr key={emp._id}>
          <td >{emp._id}</td>
          <td>{emp.name}</td>
          <td>{emp.email}</td>
          <td>{emp.address}</td>
          <td>{emp.joiningDate}</td>
        </tr>
      return row; 
  });
  return tableData;
}
  
class EmployeeListTable extends React.Component {
  render() {
    return (
      <div>
        <h2>Employee List</h2>
        <div className="float-right">
          <EmployeeModal title="Add User" action="add" btnClass="primary" whenUserChanged={this.props.whenUserChanged} />
          {
            this.props.employees.length > 0 &&
            <EmployeeModal title="Delete User" action="delete" btnClass="secondary" whenUserChanged={this.props.whenUserChanged}/>
          }
        </div>
          {
            this.props.employees.length > 0 ?
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
                  <EmployeeTableData employees={this.props.employees} />
                </tbody>
              </table> 
            :
            <p className="text-center"> No employees in the system. Please add to view here. </p>
          }

      </div>);
  }
}

export default EmployeeListTable;
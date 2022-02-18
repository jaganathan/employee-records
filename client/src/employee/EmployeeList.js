import AddUserModal from "../modal/AddUserModal";
import DeleteUserModal from "../modal/DeleteUserModal";

function EmployeeListTable(props) {

  const employeeRows = props.employees.map((emp) => {
    const row = <tr>
      <td>{emp._id}</td>
      <td>{emp.name}</td>
      <td>{emp.email}</td>
      <td>{emp.address}</td>
      <td>{emp.joiningDate}</td>
    </tr>
    return row;
  });

  return (
    <div>
    <h2>Employee List</h2>
    <div className="float-right"> 
      <AddUserModal />
      <DeleteUserModal />
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
      {employeeRows}
    </tbody>
  </table>
  </div>);
}

export default EmployeeListTable;
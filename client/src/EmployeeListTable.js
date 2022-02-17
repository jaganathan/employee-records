function EmployeeListTable(props) {
  console.log(JSON.stringify(props));
    const employeeRows =props.employees.map((emp) => {
            const row = <tr>
                <th>{emp.id}</th>
                <th>{emp.name}</th>
                <th>{emp.email}</th>
                <th>{emp.address}</th>
                <th>{emp.joiningDate}</th>
            </tr>
            return row;
        });
    console.log(employeeRows);
    return (<table className="table">
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
  </table>);
}

export default EmployeeListTable;
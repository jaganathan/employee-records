import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import AddUserModal from "./AddUserModal";
import DeleteUserModal from "./DeleteUserModal";
import EmployeeListTable from "./EmployeeListTable";

function App() {
  const [data, setData] = React.useState(null);

  function addUser() {
    console.log("Add user called");
  }

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.employees));
  }, []);
  return (
    <div className="App">
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>{!data ? "Loading..." : JSON.stringify(data)}</p> */}
      </header>
      <div>
        <AddUserModal />
        <DeleteUserModal />
      </div>
      { data ? <EmployeeListTable employees={data} />  : "No table data" }
    </div>
  );
}

export default App;
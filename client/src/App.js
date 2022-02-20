import React from "react";
import "./App.css";
import EmployeeListTable from "./employee/EmployeeList";
import RestService from "./RestService";

function App() {
  const [data, setData] = React.useState(null);
  const [isUserChanged, setUserChanged] = React.useState(false);

  React.useEffect(() => {
    RestService.getAllEmployees().then((data) => {
      setData(data);
    });
  }, [isUserChanged]);

  function updateUserChanged() {
    setUserChanged(true);
  }

  return (
    <div className="App">
      {data ? <EmployeeListTable employees={data} whenUserChanged = {updateUserChanged}/> : "No table data"}
    </div>
  );
}

export default App;
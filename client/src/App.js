import React from "react";
import "./App.css";
import EmployeeListTable from "./employee/EmployeeList";
import RestService from "./RestService";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    RestService.getAllEmployees().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="App">
      {data ? <EmployeeListTable employees={data} /> : "No table data"}
    </div>
  );
}

export default App;
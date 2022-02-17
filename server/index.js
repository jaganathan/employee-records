const express = require("express");
const Employees  =  require("./employees").Employees;
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
    res.json(Employees);
});
  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
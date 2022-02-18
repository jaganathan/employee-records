const express = require("express");
const mongoose = require('mongoose');

const connectDB = require('./db/dbConnection');
const EmployeeController = require('./controllers/EmployeeController');

const app = express();
const PORT = process.env.PORT || 3001;

/** Configure express to accept both json and form-url-encoded parameters **/
var BodyParser = require('body-parser');
app.use(BodyParser.json()); // support json encoded bodies
app.use(BodyParser.urlencoded({ extended: true })); // support encoded bodies



app.get("/api/v1/employees", (req, res) => {
  EmployeeController.getAllEmployees(req, res);
});

app.post("/api/v1/create/employee", (req, res) => {
  EmployeeController.createNewEmployee(req, res);
});


app.delete("/api/v1/employee/:id", (req, res) => {
  EmployeeController.deleteEmployee(req, res);
});


// Connect to MongoDB
connectDB();

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
});

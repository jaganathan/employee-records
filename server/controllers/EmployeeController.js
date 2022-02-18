const Employee = require('../model/Employee.js');

const getAllEmployees = async (req, res) => {
    const employees = await Employee.find();
    if (!employees) return res.status(204).json({ 'message': 'No employees found.' });
    res.json(employees);
}

const createNewEmployee = async (req, res) => {
    if (!req?.body?.name || !req?.body?.email || !req?.body?.joiningDate) {
        return res.status(400).json({ 'message': 'Name, Email & Joining Date are required' });
    }
    try {
        const result = await Employee.create({
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
            joiningDate: req.body.joiningDate
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

const deleteEmployee = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'Employee ID required.' });

    const employee = await Employee.findOne({ _id: req.params.id }).exec();
    if (!employee) {
        return res.status(204).json({ "message": `No employee matches ID ${req.body.id}.` });
    }
    const result = await employee.deleteOne({ _id: req.body.id });
    res.json(result);
}

module.exports = {
    getAllEmployees,
    createNewEmployee,
    deleteEmployee
}
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    joiningDate: {
        type: String,
        required: true
    },
    id: {
        type: Number
    }

}); 

module.exports = mongoose.model('Employee', employeeSchema);
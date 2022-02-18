
const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/EmployeeManagement';
const connectDB = async () => {
    try {
        await mongoose.connect(databaseUrl, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB;
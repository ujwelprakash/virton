const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/event")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error("Failed to connect", err);
    });

const EstimateSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    text: String
});

const EmployeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    contactNumber: String,
    whatsappNumber: String,
    username: String,
    email: String,
    state: String,
    referralCode: String,
    password: String,
    role: { type: String, default: 'user' }
});


const EmployeeModel = mongoose.model("events", EmployeeSchema);
const EstimateModel = mongoose.model("estimate", EstimateSchema);

module.exports = { EmployeeModel, EstimateModel };
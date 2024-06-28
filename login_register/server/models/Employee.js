const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const EmployeeModal = mongoose.model("employees", EmployeeSchema);

module.exports = EmployeeModal;
// humaesha model ko hi export karte hai


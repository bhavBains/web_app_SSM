const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  position: { type: String, required: true },
  phone: { type: Number, required: true },
  salary: Number,
  dateHired: Date,
  date: { type: Date, default: Date.now }
});

module.exports = Employee = mongoose.model("employee", employeeSchema);

const mongoose = require('mongoose');


const employeeSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  Language: String,
  city: String,
  isManager: Boolean
});
const Kitten = mongoose.model('Employee', employeeSchema);
module.exports = Employee
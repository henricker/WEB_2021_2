const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true, max: 100 },
  program: { type: String, required: true, max: 100 },
  IRA: { type: Number, required: true },
})

const StudentModel = mongoose.model('students', StudentSchema)

module.exports = StudentModel
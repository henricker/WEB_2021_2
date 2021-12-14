const mongoose = require('mongoose')

const TeacherSchema = new mongoose.Schema({
  name: { type: String, required: true, max: 100 },
  studyArea: { type: String, required: true, max: 100 },
})

const TeacherModel = mongoose.model('teachers', TeacherSchema)
module.exports = TeacherModel
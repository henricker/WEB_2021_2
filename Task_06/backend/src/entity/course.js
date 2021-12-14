const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true, max: 100 },
  capacity: { type: Number, required: true }
})

const courseModel = mongoose.model('courses', CourseSchema)

module.exports = courseModel;
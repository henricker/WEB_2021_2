const courseModel = require('../entity/course')

class CourseRepository {
  async create(data) {
    const { name, capacity } = data;
    const dataSaved = await courseModel.create({ name, capacity });
    return { ...data, _id: dataSaved._id  }
  }
  
  async index() {
    return courseModel.find()
  }

  async update(_id, data) {
    const course = await courseModel.findOne({ _id })
    
    if(!course)
      throw new Error('Course not found')

    await courseModel.updateOne({ _id: course._id }, { $set: data })
    return { ...data, _id }
  }
  async delete(id) {
    const course = await courseModel.findOne({ id })
    if(!course)
      throw new Error('Course not found')
    await courseModel.deleteOne({ id })
  }
}

module.exports = new CourseRepository()
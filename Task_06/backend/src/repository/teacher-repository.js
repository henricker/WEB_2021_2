const teacherModel = require('../entity/teacher')

class TeacherRepository {

  async create(data) {
    const { name, studyArea } = data;
    const dataSaved = await teacherModel.create({ name, studyArea });
    return { ...data, _id: dataSaved._id  }
  }
  
  async index() {
    return teacherModel.find()
  }

  async update(_id, data) {
    const teacher = await teacherModel.findOne({ _id })
    
    if(!teacher)
      throw new Error('Student not found')

    await teacherModel.updateOne({ _id: teacher._id }, { $set: data })
    return { ...data, _id }
  }

  async delete(id) {
    const teacher = await teacherModel.findOne({ id })
    if(!teacher)
      throw new Error('Course not found')
    await teacherModel.deleteOne({ id })
  }
}

module.exports = new TeacherRepository()
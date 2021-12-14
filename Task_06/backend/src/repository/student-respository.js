const studentModel = require('../entity/student')

class StudentRepository {
  async create(data) {
    const { name, program, IRA } = data;
    const dataSaved = await studentModel.create({ name, program, IRA });
    return { ...data, _id: dataSaved._id  }
  }
  
  async index() {
    return studentModel.find()
  }

  async update(_id, data) {
    const student = await studentModel.findOne({ _id })
    
    if(!student)
      throw new Error('Student not found')

    await studentModel.updateOne({ _id: student._id }, { $set: data })
    return { ...data, _id }
  }

  async delete(id) {
    const student = await studentModel.findOne({ id })
    if(!student)
      throw new Error('Course not found')
    await studentModel.deleteOne({ id })
  }
}

module.exports = new StudentRepository()
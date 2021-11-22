const fs = require('fs/promises')
const crypto = require('crypto')
const database = require('../../data/database.json')
const path = require('path')
const Student = require('../entity/student')

class StudentRepository {
  async create(data) {
    const { name, program, IRA } = data;
    const student = new Student(name, program, IRA)
    student.id = crypto.randomUUID()
    database.students.push(student.export());
    fs.writeFile(path.resolve(__dirname, '..', '..', 'data', 'database.json'), JSON.stringify(database, null, 2));
    return student
  }
  
  async index() {
    return database.students
  }

  async update(id, data) {
    const studentDatabase = database.students.find((student) => student.id == id)
    
    if(!studentDatabase)
      throw new Error('Student not found')
    
    studentDatabase.name = data.name
    studentDatabase.name = data.name
    studentDatabase.program = data.program
    studentDatabase.IRA = data.IRA

    fs.writeFile(path.resolve(__dirname, '..', '..', 'data', 'database.json'), JSON.stringify(database, null, 2))

    const student = new Student(studentDatabase.name, studentDatabase.program, studentDatabase.IRA)
    student.id = id
    return student
  }
  async delete(id) {
    const studentDatabase = database.students.find((student) => student.id == id)

    if(!studentDatabase)
      throw new Error('Student not found')

    database.students = database.students.filter((student) => student.id != id)
    fs.writeFile(path.resolve(__dirname, '..', '..', 'data', 'database.json'), JSON.stringify(database, null, 2))
  }
}

module.exports = new StudentRepository()
const fs = require('fs/promises')
const crypto = require('crypto')
const database = require('../../data/database.json')
const path = require('path')
const Teacher = require('../entity/teacher')

class TeacherRepository {
  async create(data) {
    const { name, studyArea } = data;
    const teacher = new Teacher(name, studyArea)
    teacher.id = crypto.randomUUID()
    database.teachers.push(teacher.export());
    fs.writeFile(path.resolve(__dirname, '..', '..', 'data', 'database.json'), JSON.stringify(database, null, 2));
    return teacher
  }
  
  async index() {
    return database.teachers
  }

  async update(id, data) {
    const teacherDatabase = database.teachers.find((teacher) => teacher.id == id)
    
    if(!teacherDatabase)
      throw new Error('Teacher not found')
    
    teacherDatabase.name = data.name
    teacherDatabase.studyArea = data.studyArea

    fs.writeFile(path.resolve(__dirname, '..', '..', 'data', 'database.json'), JSON.stringify(database, null, 2))

    const teacher = new Teacher(teacherDatabase.name, teacherDatabase.studyArea)
    teacher.id = id
    return teacher
  }
  async delete(id) {
    const teacherDatabase = database.teachers.find((teacher) => teacher.id == id)
    
    if(!teacherDatabase)
      throw new Error('Teacher not found')

    database.teachers = database.teachers.filter((teacher) => teacher.id != id)
    fs.writeFile(path.resolve(__dirname, '..', '..', 'data', 'database.json'), JSON.stringify(database, null, 2))
  }
}

module.exports = new TeacherRepository()
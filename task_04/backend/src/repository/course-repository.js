const fs = require('fs/promises')
const crypto = require('crypto')
const database = require('../../data/database.json')
const path = require('path')
const Course = require('../entity/course')

class CourseRepository {
  async create(data) {
    const { name, capacity } = data;
    const course = new Course(name, capacity)
    course.id = crypto.randomUUID()
    database.courses.push(course.export());
    fs.writeFile(path.resolve(__dirname, '..', '..', 'data', 'database.json'), JSON.stringify(database, null, 2));
    return course
  }
  
  async index() {
    return database.courses
  }

  async update(id, data) {
    const courseDatabase = database.courses.find((course) => course.id == id)
    
    if(!courseDatabase)
      throw new Error('Course not found')
    
    courseDatabase.name = data.name
    courseDatabase.capacity = data.capacity

    fs.writeFile(path.resolve(__dirname, '..', '..', 'data', 'database.json'), JSON.stringify(database, null, 2))

    const course = new Course(courseDatabase.name, courseDatabase.capacity)
    course.id = id
    return course
  }
  async delete(id) {
    const courseDatabase = database.courses.find((course) => course.id == id)
    
    if(!courseDatabase)
      throw new Error('Course not found')

    database.courses = database.courses.filter((course) => course.id != id)
    fs.writeFile(path.resolve(__dirname, '..', '..', 'data', 'database.json'), JSON.stringify(database, null, 2))
  }
}

module.exports = new CourseRepository()
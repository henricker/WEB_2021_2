const { Router } = require('express')
const StudentController = require('../../controller/StudentController')
const studentRouter = Router()

const studentController = new StudentController()

studentRouter.get('/students', studentController.index)
studentRouter.post('/students', studentController.store)
studentRouter.put('/students/:id', studentController.update)
studentRouter.delete('/students/:id', studentController.delete)

module.exports = studentRouter

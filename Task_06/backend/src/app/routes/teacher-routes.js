const { Router } = require('express')
const TeacherController = require('../../controller/TeacherController')
const teacherRoutes = Router()

const teacherController = new TeacherController()

teacherRoutes.get('/teachers', teacherController.index)
teacherRoutes.post('/teachers', teacherController.store)
teacherRoutes.put('/teachers/:id', teacherController.update)
teacherRoutes.delete('/teachers/:id', teacherController.delete)

module.exports = teacherRoutes

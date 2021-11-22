const { Router } = require('express')
const CourseController = require('../../controller/CourseController')
const courseRoutes = Router()

const courseController = new CourseController()

courseRoutes.get('/courses', courseController.index)
courseRoutes.post('/courses', courseController.store)
courseRoutes.put('/courses/:id', courseController.update)
courseRoutes.delete('/courses/:id', courseController.delete)

module.exports = courseRoutes

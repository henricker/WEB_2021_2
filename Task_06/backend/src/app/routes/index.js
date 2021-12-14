const { Router } = require('express')
const studentRoutes = require('./student-routes')
const teacherRoutes = require('./teacher-routes')
const courseRoutes = require('./course-routes')

const routes = Router()
routes.use(studentRoutes)
routes.use(teacherRoutes)
routes.use(courseRoutes)

module.exports = routes
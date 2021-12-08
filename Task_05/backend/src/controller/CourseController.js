const courseRepository = require('../repository/course-repository')
const isNumberValidator = require('../validators/is-number-validator')
const requiredFieldValidator = require('../validators/required-field-validator')

module.exports = class StudentController {

  async index(request, response) {
    const courses = await courseRepository.index()
    return response.json(courses)
  }

  async store(request, response) {
    const errors = {}
    const requiredFields = ['name', 'capacity']
    
    for(let field of requiredFields) {
      if(!requiredFieldValidator(field, request.body))
        errors[field] = { message: `${field} is required` }
    }

    if(isNumberValidator(request.body.capacity))
      errors['capacity'] = { message: 'capacity is not a number' }

    if(Object.keys(errors).length > 0)
      return response.status(422).json({ errors: errors })

    const courseSaved = await courseRepository.create(request.body)
    return response.json({ course: courseSaved})
  }

  async update(request, response) {
    try {
      const { id }= request.params

      const errors = {}
      const requiredFields = ['name', 'capacity']
      
      for(let field of requiredFields) {
        if(!requiredFieldValidator(field, request.body))
          errors[field] = { message: `${field} is required` }
      }
  
      if(isNumberValidator(request.body.capacity))
        errors['capacity'] = { message: 'capacity is not a number' }
  
      if(Object.keys(errors).length > 0)
        return response.status(422).json({ errors: errors })
  
      const courseUpdated = await courseRepository.update(id, request.body)
      return response.json(courseUpdated)
    } catch(err) {
      if(err.message == 'Course not found')
        return response.status(404).json({ errors: [ 'Course not found' ] })
      console.log(err.message)
      return response.status(500).json({ errors: ['Internal server error'] })
    }
  }

  async delete(request, response) {
    try {
      const { id }= request.params
      await courseRepository.delete(id)
      return response.status(204).send()
    } catch(err) {
      if(err.message == 'Course not found')
        return response.status(404).json({ errors: [ 'Course not found' ] })
      return response.status(500).json({ errors: ['Internal server error'] })
    }

  }

}
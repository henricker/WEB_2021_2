const teacherRepository = require('../repository/teacher-repository')
const requiredFieldValidator = require('../validators/required-field-validator')

module.exports = class TeacherController {

  async index(request, response) {
    return response.json(await teacherRepository.index())
  }

  async store(request, response) {
    const errors = {}
    const requiredFields = ['name', 'studyArea']
    
    for(let field of requiredFields) {
      if(!requiredFieldValidator(field, request.body))
        errors[field] = { message: `${field} is required` }
    }

    if(Object.keys(errors).length > 0)
      return response.status(422).json({ errors: errors })

    const teacherSaved = await teacherRepository.create(request.body)
    return response.json({ teacher: teacherSaved })
  }

  async update(request, response) {
    try {
      const { id }= request.params

      const errors = {}
      const requiredFields = ['name', 'studyArea']

      for(let field of requiredFields) {
        if(!requiredFieldValidator(field, request.body))
          errors[field] = { message: `${field} is required` }
      }
  
      if(Object.keys(errors).length > 0)
        return response.status(422).json({ errors: errors })
  
      const teacherUpdated = await teacherRepository.update(id, request.body)
      return response.json({ teacher: teacherUpdated })
    } catch(err) {
      if(err.message == 'Teacher not found')
        return response.status(404).json({ errors: [ 'Teacher not found' ] })
      return response.status(500).json({ errors: ['Internal server error'] })
    }
  }

  async delete(request, response) {
    try {
      const { id }= request.params
      await teacherRepository.delete(id)
      return response.status(204).send()
    } catch(err) {
      if(err.message == 'Teacher not found')
        return response.status(404).json({ errors: [ 'Teacher not found' ] })
      return response.status(500).json({ errors: ['Internal server error'] })
    }
  }
}
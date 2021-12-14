const studentRepository = require('../repository/student-respository')
const requiredFieldValidator = require('../validators/required-field-validator')
const isNumberValidator = require('../validators/is-number-validator')

module.exports = class StudentController {

  async index(request, response) {
    return response.json(await studentRepository.index())
  }

  async store(request, response) {
    const errors = {}
    const requiredFields = ['name', 'IRA', 'program']
    
    for(let field of requiredFields) {
      if(!requiredFieldValidator(field, request.body))
        errors[field] = { message: `${field} is required` }
    }

    if(isNumberValidator(request.body.IRA))
      errors['IRA'] = { message: 'IRA is not a number' }

    if(Object.keys(errors).length > 0)
      return response.status(422).json({ errors: errors })

    const studentSaved = await studentRepository.create(request.body)
    return response.json({ student: studentSaved })
  }

  async update(request, response) {
    try {
      const { id }= request.params

      const errors = {}
      const requiredFields = ['name', 'IRA', 'program']
      
      for(let field of requiredFields) {
        if(!requiredFieldValidator(field, request.body))
          errors[field] = { message: `${field} is required` }
      }
  
      if(isNumberValidator(request.body.IRA))
        errors['IRA'] = { message: 'IRA is not a number' }
  
      if(Object.keys(errors).length > 0)
        return response.status(422).json({ errors: errors })
  
      const studentUpdated = await studentRepository.update(id, request.body)
      return response.json({ student: studentUpdated })
    } catch(err) {
      if(err.message == 'Student not found')
        return response.status(404).json({ errors: [ 'Student not found' ] })
      console.log(err)
      return response.status(500).json({ errors: ['Internal server error'] })
    }
  }

  async delete(request, response) {
    try {
      const { id }= request.params
      await studentRepository.delete(id)
      return response.status(204).send()
    } catch(err) {
      if(err.message == 'Student not found')
        return response.status(404).json({ errors: [ 'Student not found' ] })
      return response.status(500).json({ errors: ['Internal server error'] })
    }
  }
}
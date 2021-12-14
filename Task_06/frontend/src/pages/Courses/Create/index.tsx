import { useState } from 'react'
import { AlertModal } from '../../../components/Modals/Alert'
import { SuccessModal } from '../../../components/Modals/Success'
import { Course } from '../../../models/course'
import './style.css'

type CourseCreateProps = {
  courseHookContext: {
    courses: Course[]
    addCourse: (course: Course) => void;
  }
}

export const CourseCreate: React.FC<CourseCreateProps> = ({ courseHookContext }: CourseCreateProps) => {
  
  const [showModalError, setShowModalError] = useState(false)
  const [showModalSuccess, setShowModalSuccess] = useState(false)

  const [data, setData] = useState<Course>({
    capacity: 0,
    name: '',
  })

  function handleSubmit(event: React.FormEvent<any>) {
    event.preventDefault()
    if(data.name === '' || data.capacity === 0) {
      setShowModalError(true)
      return
    }
    courseHookContext.addCourse(data)
    setShowModalSuccess(true)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='form-course'>
        <div className='form-group'>
          <label>Nome:</label>
          <input className='form-control' type='text' onChange={(event) => setData({...data, name: event.target.value})}/>
        </div>
        <div className='form-group'>
          <label>Capacidade:</label>
          <input className='form-control' type='number' step='1' onChange={(event) => setData({...data, capacity: Number(event.target.value)})}/>
        </div>
        <button className='btn btn-primary' type='submit'>Criar disciplina</button>
      </form>
      {showModalError === true && <AlertModal text='Todos os campos são requeridos!' setShowModalError={setShowModalError}  />}
      {showModalSuccess === true && <SuccessModal text='Disciplina salva com sucesso!' setShowModal={setShowModalSuccess} />}
    </>
  )
}
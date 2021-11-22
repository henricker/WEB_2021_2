import { useEffect, useState } from 'react'
import { AlertModal } from '../../../components/Modals/Alert'
import { SuccessModal } from '../../../components/Modals/Success'
import { Course } from '../../../models/course'
import './style.css'

type CourseCreateProps = {
  courseHookContext: {
    courses: Course[]
    updateCourse: (id: string, data: Course) => void;
  }
}

export const CourseUpdate: React.FC<CourseCreateProps> = ({ courseHookContext }: CourseCreateProps) => {
  
  const [showModalError, setShowModalError] = useState(false)
  const [showModalSuccess, setShowModalSuccess] = useState(false)

  const [data, setData] = useState<Course>({
    name: '',
    capacity: 0
  })

  useEffect(() => {
    const courseId = global.location.pathname.split('/').pop()
    const course = courseHookContext.courses.find(course => course.id === courseId)!
    setData({ ...course })
  }, [courseHookContext])

  function handleSubmit(event: React.FormEvent<any>) {
    event.preventDefault()
    if(data.name === '' || data.capacity === 0) {
      setShowModalError(true)
      return
    }
    courseHookContext.updateCourse(data.id!, data)
    setShowModalSuccess(true)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='form-course'>
        <div className='form-group'>
          <label>Nome:</label>
          <input className='form-control' value={data.name} type='text' onChange={(event) => setData({...data, name: event.target.value})}/>
        </div>
        <div className='form-group'>
          <label>Capacidade:</label>
          <input className='form-control' value={data.capacity} type='number' step='1' onChange={(event) => setData({...data, capacity: Number(event.target.value)})}/>
        </div>
        <button className='btn btn-primary' type='submit'>Editar disciplina</button>
      </form>
      {showModalError === true && <AlertModal text='Todos os campos são requeridos!' setShowModalError={setShowModalError}  />}
      {showModalSuccess === true && <SuccessModal text='Disciplina editada com sucesso!' setShowModal={setShowModalSuccess} />}
    </>
  )
}
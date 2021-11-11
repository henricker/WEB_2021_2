import { useEffect, useState } from 'react'
import { AlertModal } from '../../../components/Modals/Alert'
import { SuccessModal } from '../../../components/Modals/Success'
import { Teacher } from '../../../models/teacher'
import './style.css'

type TeacherCreateProps = {
  teacherHookContext: {
    teachers: Teacher[]
    updateTeacher: (id: number, data: Teacher) => void;
  }
}

export const TeacherUpdate: React.FC<TeacherCreateProps> = ({ teacherHookContext }: TeacherCreateProps) => {
  
  const [showModalError, setShowModalError] = useState(false)
  const [showModalSuccess, setShowModalSuccess] = useState(false)

  const [data, setData] = useState<Teacher>({
    name: '',
    studyArea: ''
  })

  useEffect(() => {
    const teacherId = Number(global.location.pathname.split('/').pop())
    const teacher = teacherHookContext.teachers.find(teacher => teacher.id === teacherId)!
    setData({ ...teacher })
  }, [teacherHookContext])

  function handleSubmit(event: React.FormEvent<any>) {
    event.preventDefault()
    if(data.name === '' || data.studyArea === '') {
      setShowModalError(true)
      return
    }
    teacherHookContext.updateTeacher(data.id!, data)
    setShowModalSuccess(true)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='form-student'>
        <div className='form-group'>
          <label>Nome:</label>
          <input className='form-control' value={data.name} type='text' onChange={(event) => setData({...data, name: event.target.value})}/>
        </div>
        <div className='form-group'>
          <label>Àrea de estudo:</label>
          <input className='form-control' value={data.studyArea} type='text' onChange={(event) => setData({...data, studyArea: event.target.value})}/>
        </div>
        <button className='btn btn-primary' type='submit'>Editar professor</button>
      </form>
      {showModalError === true && <AlertModal text='Todos os campos são requeridos!' setShowModalError={setShowModalError}  />}
      {showModalSuccess === true && <SuccessModal text='Professor editado com sucesso!' setShowModal={setShowModalSuccess} />}
    </>
  )
}
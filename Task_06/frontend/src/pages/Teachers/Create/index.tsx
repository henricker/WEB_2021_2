import { useState } from 'react'
import { AlertModal } from '../../../components/Modals/Alert'
import { SuccessModal } from '../../../components/Modals/Success'
import { Teacher } from '../../../models/teacher'
import './style.css'

type StudentCreateProps = {
  teacherHookContext: {
    teachers: Teacher[]
    addTeacher: (teacher: Teacher) => void;
  }
}

export const TeacherCreate: React.FC<StudentCreateProps> = ({ teacherHookContext }: StudentCreateProps) => {
  
  const [showModalError, setShowModalError] = useState(false)
  const [showModalSuccess, setShowModalSuccess] = useState(false)

  const [data, setData] = useState<Teacher>({
    name: '',
    studyArea: ''
  })

  function handleSubmit(event: React.FormEvent<any>) {
    event.preventDefault()
    if(data.name === '' || data.studyArea === '') {
      setShowModalError(true)
      return
    }
    teacherHookContext.addTeacher(data)
    setShowModalSuccess(true)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='form-teacher'>
        <div className='form-group'>
          <label>Nome:</label>
          <input className='form-control' type='text' onChange={(event) => setData({...data, name: event.target.value})}/>
        </div>
        <div className='form-group'>
          <label>Área de estudo:</label>
          <input className='form-control' type='text' onChange={(event) => setData({...data, studyArea: event.target.value})}/>
        </div>
        <button className='btn btn-primary' type='submit'>Criar Professor</button>
      </form>
      {showModalError === true && <AlertModal text='Todos os campos são requeridos!' setShowModalError={setShowModalError}  />}
      {showModalSuccess === true && <SuccessModal text='Professor salvo com sucesso!' setShowModal={setShowModalSuccess} />}
    </>
  )
}
import { useEffect, useState } from 'react'
import { AlertModal } from '../../../components/Modals/Alert'
import { SuccessModal } from '../../../components/Modals/Success'
import { Student } from '../../../models/student'
import './style.css'

type StudentCreateProps = {
  studentHookContext: {
    students: Student[]
    addStudent: (student: Student) => void;
    updateStudent: (id: string, data: Student) => void;
  }
}

export const StudentUpdate: React.FC<StudentCreateProps> = ({ studentHookContext }: StudentCreateProps) => {
  
  const [showModalError, setShowModalError] = useState(false)
  const [showModalSuccess, setShowModalSuccess] = useState(false)

  const [data, setData] = useState<Student>({
    name: '',
    IRA: 0,
    program: ''
  })

  useEffect(() => {
    const studentId = global.location.pathname.split('/').pop()
    const student = studentHookContext.students.find(student => student.id === studentId)!
    setData({ ...student })
  }, [studentHookContext])

  function handleSubmit(event: React.FormEvent<any>) {
    event.preventDefault()
    if(data.name === '' || data.program === '') {
      setShowModalError(true)
      return
    }
    studentHookContext.updateStudent(data.id!, data)
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
          <label>IRA:</label>
          <input className='form-control' value={data.IRA} type='number' step='0.1' onChange={(event) => setData({...data, IRA: Number(event.target.value)})}/>
        </div>
        <div className='form-group'>
          <label>Curso:</label>
          <input className='form-control' value={data.program} type='text' onChange={(event) => setData({...data, program: event.target.value})}/>
        </div>
        <button className='btn btn-primary' type='submit'>Editar estudante</button>
      </form>
      {showModalError === true && <AlertModal text='Todos os campos são requeridos!' setShowModalError={setShowModalError}  />}
      {showModalSuccess === true && <SuccessModal text='Estudante editado com sucesso!' setShowModal={setShowModalSuccess} />}
    </>
  )
}
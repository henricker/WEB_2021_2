import { Link } from 'react-router-dom'
import { Student } from '../../../models/student'
import './style.css'

type ListStudentProps = {
  studentHookContext: {
    students: Student[]
    deleteStudent: (id: number) => void
  }
}


export const ListStudent: React.FC<ListStudentProps> = ({ studentHookContext }: ListStudentProps) => {
  return (
    <div className='list-student'>
      <table className='table table-striped' style={{marginTop:20}}>
          <thead>
              <tr>
                  <td>ID</td>
                  <td>Nome</td>
                  <td>Curso</td>
                  <td>IRA</td>
                  <td colSpan={2} style={{textAlign:'center'}}>Ações</td>
              </tr>
          </thead>
          <tbody>
              {studentHookContext.students.map((student, index) => (
                  <tr key={index}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.program}</td>
                    <td>{student.IRA}</td>
                    <td style={{textAlign:'center'}}>
                    <Link to={`/students/update/${student.id}`} className='btn btn-primary'>Editar</Link>
                    </td>
                    <td style={{textAlign:'center'}}>
                      <button className='btn btn-danger' onClick={() => studentHookContext.deleteStudent(student.id!)}>Apagar</button>
                    </td>
                  </tr>
              ))}
          </tbody>
        </table>
    </div>
  )
}
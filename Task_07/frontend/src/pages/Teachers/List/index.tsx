import { Link } from 'react-router-dom'
import { Teacher } from '../../../models/teacher'
import './style.css'

type ListTeacherProps = {
  teacherHookContext: {
    teachers: Teacher[]
    deleteTeacher: (id: string) => void
  }
}


export const ListTeachers: React.FC<ListTeacherProps> = ({ teacherHookContext }: ListTeacherProps) => {
  return (
    <div className='list-student'>
      <table className='table table-striped' style={{marginTop:20}}>
          <thead>
              <tr>
                  <td>Nome</td>
                  <td>Àrea de estudo</td>
                  <td colSpan={2} style={{textAlign:'center'}}>Ações</td>
              </tr>
          </thead>
          <tbody>
              {teacherHookContext.teachers.map((teacher, index) => (
                  <tr key={index}>
                    <td>{teacher.name}</td>
                    <td>{teacher.studyArea}</td>
                    <td style={{textAlign:'center'}}>
                    <Link to={`/teachers/update/${teacher._id}`} className='btn btn-primary'>Editar</Link>
                    </td>
                    <td style={{textAlign:'center'}}>
                      <button className='btn btn-danger' onClick={() => teacherHookContext.deleteTeacher(teacher._id!)}>Apagar</button>
                    </td>
                  </tr>
              ))}
          </tbody>
        </table>
    </div>
  )
}
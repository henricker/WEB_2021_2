import { Link } from 'react-router-dom'
import { Course } from '../../../models/course'
import './style.css'

type ListCourseProps = {
  courseHookContext: {
    courses: Course[]
    deleteCourse: (id: string) => void
  }
}


export const ListCourses: React.FC<ListCourseProps> = ({ courseHookContext }: ListCourseProps) => {
  return (
    <div className='list-student'>
      <table className='table table-striped' style={{marginTop:20}}>
          <thead>
              <tr>
                  <td>ID</td>
                  <td>Nome</td>
                  <td>Capacidade</td>
                  <td colSpan={2} style={{textAlign:'center'}}>Ações</td>
              </tr>
          </thead>
          <tbody>
              {courseHookContext.courses.map((course, index) => (
                  <tr key={index}>
                    <td>{course.id}</td>
                    <td>{course.name}</td>
                    <td>{course.capacity}</td>
                    <td style={{textAlign:'center'}}>
                    <Link to={`/courses/update/${course.id}`} className='btn btn-primary'>Editar</Link>
                    </td>
                    <td style={{textAlign:'center'}}>
                      <button className='btn btn-danger' onClick={() => courseHookContext.deleteCourse(course.id!)}>Apagar</button>
                    </td>
                  </tr>
              ))}
          </tbody>
        </table>
    </div>
  )
}
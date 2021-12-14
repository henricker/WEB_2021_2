import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import './App.css';
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useCourses } from './hooks/useCourses'
import { useStudents } from './hooks/useStudents'
import { useTeacher } from './hooks/useTeachers'
import { Courses } from './pages/Courses'
import { CourseCreate } from './pages/Courses/Create'
import { CourseUpdate } from './pages/Courses/Edit'
import { ListCourses } from './pages/Courses/List'
import { Students } from './pages/Students'
import { StudentCreate } from './pages/Students/Create'
import { StudentUpdate } from './pages/Students/Edit'
import { ListStudent } from './pages/Students/List'
import { Teachers } from './pages/Teachers'
import { TeacherCreate } from './pages/Teachers/Create'
import { TeacherUpdate } from './pages/Teachers/Edit'
import { ListTeachers } from './pages/Teachers/List'

function App() {
  const studentHookContext = useStudents()
  const courseHookContext = useCourses()
  const teacherHookContext = useTeacher()

  return (
    <Router>
          <Header/>
          <Routes>
            <Route path='/students'>
              <Route path='' element={<><Students/> <ListStudent studentHookContext={studentHookContext}/></>}/>
              <Route path='create' element={<><Students/> <StudentCreate studentHookContext={studentHookContext} /></>}/>
              <Route path='update/:id' element={<><Students/> <StudentUpdate studentHookContext={studentHookContext} /></>}/>
            </Route>
            <Route path='/teachers'>
              <Route path='' element={<><Teachers/> <ListTeachers teacherHookContext={teacherHookContext}/></>} />
              <Route path='create' element={<><Teachers/> <TeacherCreate teacherHookContext={teacherHookContext} /></>}/>
              <Route path='update/:id' element={<><Teachers/> <TeacherUpdate teacherHookContext={teacherHookContext} /></>}/>
            </Route>
            <Route path='/courses'>
              <Route path='' element={<><Courses/> <ListCourses courseHookContext={courseHookContext}/></>}/>
              <Route path='create' element={<><Courses/> <CourseCreate courseHookContext={courseHookContext} /></>}/>
              <Route path='update/:id' element={<><Courses/> <CourseUpdate courseHookContext={courseHookContext} /></>}/>
            </Route>
          </Routes>
          <Footer/>
    </Router>
  );
}

export default App;

import axios from 'axios'
import { useEffect, useState } from 'react'
import { Student } from '../models/student'

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([])

  useEffect(() => {
    listStudent().then((students) => setStudents(students))
  }, [])

  function addStudent(student: Student) {
    axios.post<{ student: Student}>('http://localhost:3333/students', student).then(response => {
      students.push(response.data.student)
      setStudents(students)
    })
  }

  function deleteStudent(id: string) {
    axios.delete('http://localhost:3333/students/' + id).then(_ => {
      setStudents(students.filter((student) => student._id !== id))
    })
  }

  function updateStudent(id: string, data: Student) {
    axios.put('http://localhost:3333/students/' + id, data).then(_ => {
      
    })
    const student = students.find((student) => student._id === id)!

    student.IRA = data.IRA
    student.program = data.program
    student.name  = data.name
  }

  async function listStudent() {
    const response = await axios.get<Student[]>('http://localhost:3333/students')
    return response.data
  }

  return {
    students,
    addStudent,
    deleteStudent,
    updateStudent,
  }
}
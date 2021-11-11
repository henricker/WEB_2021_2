import axios from 'axios'
import { useEffect, useState } from 'react'
import { Teacher } from '../models/teacher'

export const useTeacher = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([])

  useEffect(() => {
    listCourse().then((teachers) => setTeachers(teachers))
  }, [])

  function addTeacher(teacher: Teacher) {
    axios.post<Teacher>('http://localhost:3333/teachers', teacher).then(response => {
      teachers.push({ ...response.data })
      setTeachers(teachers)
    })
    setTeachers(teachers)
  }

  function deleteTeacher(id: number) {
    axios.delete('http://localhost:3333/teachers/' + id).then(_ => {
      setTeachers(teachers.filter((teacher) => teacher.id !== id))
    })
  }

  function updateTeacher(id: number, data: Teacher) {
    axios.put('http://localhost:3333/teachers/' + id, data).then(_ => {
      const teacher = teachers.find((teacher) => teacher.id === id)!
      
      teacher.name = data.name
      teacher.studyArea = data.studyArea
    })
  }

  async function listCourse() {
    const response = await axios.get<Teacher[]>('http://localhost:3333/teachers')
    return response.data
  }

  return {
    teachers,
    addTeacher,
    deleteTeacher,
    updateTeacher,
  }
}
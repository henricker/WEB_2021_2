import axios from 'axios'
import { useEffect, useState } from 'react'
import { Teacher } from '../models/teacher'

export const useTeacher = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([])

  useEffect(() => {
    ListTeachers().then((teachers) => setTeachers(teachers))
  }, [])

  function addTeacher(teacher: Teacher) {
    axios.post<{ teacher: Teacher}>('http://localhost:3333/teachers', teacher).then(response => {
      teachers.push(response.data.teacher)
      setTeachers(teachers)
    })
    setTeachers(teachers)
  }

  function deleteTeacher(id: string) {
    axios.delete('http://localhost:3333/teachers/' + id).then(_ => {
      setTeachers(teachers.filter((teacher) => teacher._id !== id))
    })
  }

  function updateTeacher(id: string, data: Teacher) {
    axios.put('http://localhost:3333/teachers/' + id, data).then(_ => {
      const teacher = teachers.find((teacher) => teacher._id === id)!
      
      teacher.name = data.name
      teacher.studyArea = data.studyArea
    })
  }

  async function ListTeachers() {
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
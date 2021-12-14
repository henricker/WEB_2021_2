import axios from 'axios'
import { useEffect, useState } from 'react'
import { Course } from '../models/course'

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    listCourse().then((courses) => setCourses(courses))
  }, [])

  function addCourse(course: Course) {
    axios.post<{ course: Course }>('http://localhost:3333/courses', course).then(response => {
    courses.push({ ...response.data.course })
      setCourses(courses)
    })
  }

  function deleteCourse(id: string) {
    axios.delete('http://localhost:3333/courses/' + id).then(_ => {
      setCourses(courses.filter((course) => course._id !== id))
    })
  }

  function updateCourse(id: string, data: Course) {
    axios.put('http://localhost:3333/courses/' + id, data).then(_ => {
      const course = courses.find((course) => course._id === id)!
      course.name = data.name
    })
  }

  async function listCourse() {
    //const response = await axios.get<Course[]>('http://localhost:3333/courses')
    return []
  }

  return {
    courses,
    addCourse,
    deleteCourse,
    updateCourse,
  }
}
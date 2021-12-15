import { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../context/firebase';
import { Course } from '../models/course'

export const useCourses = () => {
  const firebaseContext = useContext(FirebaseContext);
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    listCourse().then((coursesData) => setCourses(coursesData))
  }, [])

  function addCourse(course: Course) {
    firebaseContext.getFirestore().collection('courses').add(course).then(() => {
      courses.push(course)
      setCourses(courses);
    })
  }

  function deleteCourse(id: string) {
    firebaseContext.getFirestore().collection('courses').doc(id).delete().then(() => {
      setCourses(courses.filter((course) => course._id !== id))
    })
  }

  function updateCourse(id: string, data: Course) {
    firebaseContext.getFirestore().collection('courses').doc(id).set(data).then(() => {
      const course = courses.find((courseData) => courseData._id === id)!
      course.name = data.name
      course.capacity = data.capacity
    })
  }

  async function listCourse() {
    const coursesData: Course[] = (
      await firebaseContext
        .getFirestore()
        .collection('courses')
        .get()
      )
        .docs
        .map((doc) => ({ _id: doc.id, ...doc.data() })) as any;
  
    return coursesData;
  }

  return {
    courses,
    addCourse,
    deleteCourse,
    updateCourse,
  }
}
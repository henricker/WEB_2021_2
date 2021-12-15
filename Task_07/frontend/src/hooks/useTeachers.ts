import { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../context/firebase';
import { Teacher } from '../models/teacher'

export const useTeacher = () => {
  const firebaseContext = useContext(FirebaseContext);
  const [teachers, setTeachers] = useState<Teacher[]>([])

  useEffect(() => {
    ListTeachers().then((teachersData) => setTeachers(teachersData))
  }, [])

  function addTeacher(teacher: Teacher) {
    firebaseContext.getFirestore().collection('teachers').add(teacher).then(() => {
      teachers.push(teacher)
      setTeachers(teachers)
    })
  }

  function deleteTeacher(id: string) {
    firebaseContext.getFirestore().collection('teachers').doc(id).delete().then(() => {
      setTeachers(teachers.filter((teacher) => teacher._id !== id))
    })
  }

  function updateTeacher(id: string, data: Teacher) {
    firebaseContext.getFirestore().collection('teachers').doc(id).set(data).then(() => {
      const teacher = teachers.find((teacherData) => teacherData._id === id)!
      
      teacher.name = data.name
      teacher.studyArea = data.studyArea
    })
  }

  async function ListTeachers() {
    const teachersData: Teacher[] = (
      await firebaseContext
      .getFirestore()
      .collection('teachers')
      .get()
      )
      .docs
      .map((doc) => ({ _id: doc.id, ...doc.data() })) as any;

    return teachersData;
  }

  return {
    teachers,
    addTeacher,
    deleteTeacher,
    updateTeacher,
  }
}
import { useContext, useEffect, useState } from 'react'
import { Student } from '../models/student'
import { FirebaseContext } from '../context/firebase'

export const useStudents = () => {
  const firebaseContext = useContext(FirebaseContext);
  const [students, setStudents] = useState<Student[]>([])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    listStudent().then((studentsData) => setStudents(studentsData))
  }, [])

    function addStudent(student: Student) {
    firebaseContext.getFirestore().collection('students').add(student).then((value) => {
      students.push(student)
      setStudents(students)
    })
  }

  function deleteStudent(id: string) {
    firebaseContext.getFirestore().collection('students').doc(id).delete().then(() => {
      setStudents(students.filter((student) => student._id !== id))
    })
  }

  function updateStudent(id: string, data: Student) {
    firebaseContext.getFirestore().collection('students').doc(id).set(data).then(() => {
      const student = students.find((studentData) => studentData._id === id)!

      student.IRA = data.IRA
      student.program = data.program
      student.name  = data.name
    })
  }

  async function listStudent() {
    const studentsData: Student[] = (
      await firebaseContext
      .getFirestore()
      .collection('students')
      .get()
      )
      .docs
      .map((doc) => ({ _id: doc.id, ...doc.data() })) as any;

    return studentsData;
  }

  return {
    students,
    addStudent,
    deleteStudent,
    updateStudent,
  }
}
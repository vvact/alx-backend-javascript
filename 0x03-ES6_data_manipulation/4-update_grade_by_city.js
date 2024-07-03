/* disable eslint
*/
export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter(
    (student) => student.location === city,
  );

  return cityStudents.map((student) => {
    const gradesfiltered = newGrades.filter(
      (grade) => grade.studentId === student.id,
    );
    if (gradesfiltered.length > 0) {
      return {
        ...student,
        grade: gradesfiltered[0].grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });
}

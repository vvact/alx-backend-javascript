export default function getStudentsByLocation(listOfStudents, city) {
  const filtered = listOfStudents.filter((student) => student.location === city);
  return filtered;
}

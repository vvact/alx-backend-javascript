export default function createReportObject(employeesList) {
  const newObject = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(empList) {
      return Object.keys(empList).length;
    },
  };
  return newObject;
}

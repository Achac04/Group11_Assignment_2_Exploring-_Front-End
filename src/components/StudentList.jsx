const StudentList = ({ students }) => {
  return (
    <div>
      <h2 className="text-danger">List of Students</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.firstName} {student.lastName} - Grade: {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;

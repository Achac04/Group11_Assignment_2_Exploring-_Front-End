const StudentList = ({ students }) => {
  return (
    <div className ='container' style = {{textAlign:'center'}}>
      <h2 className="text-danger">List of Students</h2>
      <ul style={{ listStyle: 'none', display: "inline-block", marginRight: "90px" }}>
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

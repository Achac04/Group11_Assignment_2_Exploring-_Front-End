"use client";
import { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && dob && grade) {
      const newStudent = { firstName, lastName, dob, grade };
      addStudent((prevStudents) => [...prevStudents, newStudent]);
      setFirstName("");
      setLastName("");
      setDob("");
      setGrade("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     placeholder="First Name"
    //     value={firstName}
    //     onChange={(e) => setFirstName(e.target.value)}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Last Name"
    //     value={lastName}
    //     onChange={(e) => setLastName(e.target.value)}
    //   />
    //   <input
    //     type="date"
    //     placeholder="Date of Birth"
    //     value={dob}
    //     onChange={(e) => setDob(e.target.value)}
    //   />
    //   <input
    //     type="number"
    //     placeholder="Grade"
    //     value={grade}
    //     onChange={(e) => setGrade(e.target.value)}
    //   />
    //   <button type="submit">Add Student</button>
    // </form>
    <div class="container mt-4 mb-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="name">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            placeholder="Enter firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="lastname">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Enter lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label for="DOB">First Name</label>
          <input
            type="date"
            className="form-control"
            id="DOB"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label for="grade">Grade</label>
          <input
            type="number"
            className="form-control"
            id="grade"
            placeholder="Enter grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;

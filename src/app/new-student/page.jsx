"use client";
import StudentForm from "@/components/StudentForm";
import { MyContext } from "@/app/context/context-provider";
import React from "react";

const NewStudent = () => {
  const { setStudents } = React.useContext(MyContext);

  return (
    <div>
      <StudentForm addStudent={setStudents} />
    </div>
  );
};

export default NewStudent;

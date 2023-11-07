"use client";
import React, { useState } from "react";

export const MyContext = React.createContext({
  students: [],
});

export const Provider = ({ children }) => {
  const [students, setStudents] = useState([
    {
      firstName: "Emma",
      lastName: "Johnson",
      dob: "2015-03-12",
      grade: 8,
    },
    {
      firstName: "Michael",
      lastName: "Smith",
      dob: "2019-09-25",
      grade: 9,
    },
    {
      firstName: "Olivia",
      lastName: "Williams",
      dob: "2020-01-18",
      grade: 7,
    },
    {
      firstName: "James",
      lastName: "Brown",
      dob: "2023-11-30",
      grade: 10,
    },
    {
      firstName: "Sophia",
      lastName: "Jones",
      dob: "2015-07-04",
      grade: 8,
    },
  ]);

  const values = {
    students,
    setStudents,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};

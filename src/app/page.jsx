"use client";
import StudentList from "@/components/StudentList";
import { MyContext } from "./context/context-provider";
import React from "react";
export default function HomePage() {
  const { students } = React.useContext(MyContext);
  return (
    <div>
      <StudentList students={students} />
    </div>
  );
}

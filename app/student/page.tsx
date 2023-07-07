import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "students",
};

const students = {
  1: {
    name: "John",
    age: 10,
    subjects: ["Math", "English"],
  },
  2: {
    name: "Gozo",
    age: 18,
    subjects: ["Programming", "Chinese"],
  },
};

export default function Page() {
  const student = students[1];

  return (
    <React.Fragment>
      <h1>Student profile</h1>
      <div>Name: {student.name}</div>
      <div>Age: {student.age}</div>
      <div>Studies: {student.subjects.join(", ")}</div>
    </React.Fragment>
  );
}

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import StudentDisplay from "./View/StudentDisplay";
import StudentEdit from "./View/StudentEdit";

function App() {
  const initStudent = {
    _id: uuidv4(),
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "Male",
    DOB: "2005-01-01",
    address: "",
    board: "CBSE",
    city: "",
    state: "",
    zip: "",
    school: "",
    subjects: [],
  };

  const [studentList, setStudentList] = useState([]);

  const [view, setView] = useState("Create");

  const [selectedStudent, setSelectedStudent] = useState();

  function getComponentFromView() {
    switch (view) {
      case "Create":
        return (
          <StudentEdit
            student={initStudent}
            mode={"Create"}
            studentList={studentList}
            setStudentList={setStudentList}
            setView={setView}
          />
        );
      case "Edit":
        return (
          <StudentEdit
            student={selectedStudent}
            mode={"Edit"}
            studentList={studentList}
            setStudentList={setStudentList}
            setView={setView}
          />
        );
      default:
        return (
          <StudentDisplay
            studentList={studentList}
            setSelectedStudent={setSelectedStudent}
            setView={setView}
            deleteStudent={deleteStudent}
          />
        );
    }
  }

  function deleteStudent(_id) {
    const newStudentList = studentList.filter(
      (studentObj) => studentObj._id !== _id
    );
    setStudentList(newStudentList);
  }

  return (
    <div className="App">
      <div className="container p-5">
        <div className="row justify-content-center">
          {getComponentFromView()}
        </div>
      </div>
    </div>
  );
}

export default App;

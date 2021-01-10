import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";

import InputComponent from "../components/InputComponent";
import RadioComponent from "../components/RadioComponent";
import CheckboxComponent from "../components/CheckboxComponent";
import DropdownComponent from "../components/DropdownComponent";
import DatePickerComponent from "../components/DatePickerComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function StudentEdit({
  student,
  studentList,
  setStudentList,
  setView,
  mode,
}) {
  const [fName, setFName] = useState(student.firstName);
  const [mName, setMName] = useState(student.middleName);
  const [lName, setLName] = useState(student.lastName);
  const [gender, setGender] = useState(student.gender);
  const [DOB, setDOB] = useState(student.DOB);
  const [address, setAddress] = useState(student.address);
  const [board, setBoard] = useState(student.board);
  const [city, setCity] = useState(student.city);
  const [state, setState] = useState(student.state);
  const [zip, setZip] = useState(student.zip);
  const [school, setSchool] = useState(student.school);
  const [subjectSelected, setSubjectSelected] = useState(student.subjects);

  const subjects = [
    "Physics",
    "Chemistry",
    "Maths",
    "Biology",
    "Computer Science",
  ];

  const boards = ["CBSE", "ICSE", "State", "IB"];

  function toggleSubject(subject) {
    let newSelectedSubjects;
    if (subjectSelected.includes(subject)) {
      newSelectedSubjects = subjectSelected.filter(
        (selectedSubject) => selectedSubject !== subject
      );
    } else {
      newSelectedSubjects = [...subjectSelected, subject];
    }
    setSubjectSelected(newSelectedSubjects);
  }

  const classes = useStyles();

  function saveStudent(event) {
    event.preventDefault();
    let newStudentList;

    if (mode === "Create") {
      const newStudent = {
        _id: student._id,
        firstName: fName,
        middleName: mName,
        lastName: lName,
        gender,
        DOB,
        address,
        board,
        city,
        state,
        zip,
        school,
        subjects: subjectSelected,
      };

      newStudentList = [...studentList, newStudent];
    } else {
      newStudentList = studentList.map((studentObj) => {
        if (studentObj._id === student._id) {
          return {
            _id: student._id,
            firstName: fName,
            middleName: mName,
            lastName: lName,
            gender,
            DOB,
            address,
            board,
            city,
            state,
            zip,
            school,
            subjects: subjectSelected,
          };
        }
        return studentObj;
      });
    }
    setStudentList(newStudentList);
    setView("Display");
  }

  const nameRow = [
    {
      value: fName,
      setValue: setFName,
      label: "First Name",
      validations: "alpha",
      required: true,
    },
    {
      value: mName,
      setValue: setMName,
      label: "Middle Name",
      validations: "alpha",
      required: false,
    },
    {
      value: lName,
      setValue: setLName,
      label: "Last Name",
      validations: "alpha",
      required: true,
    },
  ];

  const addressRow = [
    {
      value: city,
      setValue: setCity,
      label: "City",
      validations: "alpha",
      required: true,
    },
    {
      value: state,
      setValue: setState,
      label: "State",
      validations: "alpha",
      required: true,
    },
    {
      value: zip,
      setValue: setZip,
      label: "Zip",
      validations: "zip",
      required: true,
    },
  ];

  return (
    <>
      <div className="row">
        <h1>Enter Student Details</h1>
        <Button
          className="col-md-3 "
          variant="contained"
          onClick={() => setView("Display")}
          color="primary"
        >
          Display All Students
        </Button>
      </div>
      <form className={classes.root} onSubmit={saveStudent}>
        <FormGroup row>
          {nameRow.map((rowItem) => (
            <InputComponent {...rowItem} />
          ))}
        </FormGroup>
        <FormGroup row>
          <RadioComponent
            label="Select Gender"
            options={["Male", "Female", "Others"]}
            value={gender}
            setValue={setGender}
          />
          <DatePickerComponent
            value={DOB}
            setValue={setDOB}
            id="DOB"
            label="Date of Birth"
            range={{ low: 12, high: 20 }}
          />
        </FormGroup>
        <FormGroup className="col-md-7">
          <InputComponent
            label="Address"
            required={true}
            value={address}
            setValue={setAddress}
            validations="none"
          />
        </FormGroup>
        <FormGroup row>
          {addressRow.map((rowItem) => (
            <InputComponent {...rowItem} />
          ))}
        </FormGroup>
        <FormGroup row>
          <InputComponent
            label={"School"}
            required={true}
            value={school}
            setValue={setSchool}
            validations="alpha"
          />
          <DropdownComponent
            label="Board"
            value={board}
            setValue={setBoard}
            menuItems={boards}
          />
        </FormGroup>
        <FormGroup row>
          <CheckboxComponent
            label="Subjects"
            items={subjects}
            itemsSelected={subjectSelected}
            toggleItem={toggleSubject}
          />
        </FormGroup>
        <Button
          className="col-md-1 "
          color="primary"
          variant="contained"
          type="submit"
        >
          Save
        </Button>
      </form>
    </>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  table: {
    minWidth: 1000,
  },
});

export default function StudentDisplay({
  studentList,
  setView,
  deleteStudent,
  setSelectedStudent,
}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <div className="row justify-content-center">
        <h1 className="text-center">Students</h1>
        <Button
          className="col-md-2"
          variant="contained"
          onClick={() => setView("Create")}
          color="primary"
        >
          Add a Student
        </Button>
      </div>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>D.O.B</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>School</TableCell>
            <TableCell>Board</TableCell>
            <TableCell>Subjects</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {`${row.firstName} ${row.middleName} ${row.lastName}`}
              </TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.DOB}</TableCell>
              <TableCell>{`${row.address}, ${row.city}, ${row.state}, ${row.zip}`}</TableCell>
              <TableCell>{row.school}</TableCell>
              <TableCell>{row.board}</TableCell>
              <TableCell>
                <ul className="list-unstyled">
                  {row.subjects.map((subject) => (
                    <li>{subject}</li>
                  ))}
                </ul>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    setSelectedStudent(row);
                    setView("Edit");
                  }}
                  variant="outlined"
                  color="primary"
                >
                  Edit
                </Button>
                <br />
                <br />
                <Button
                  onClick={() => deleteStudent(row._id)}
                  variant="outlined"
                  color="secondary"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

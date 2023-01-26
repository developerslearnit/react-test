import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const TodoTable = () => {
  const todos = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();
  return (
    <div>
      <TableContainer component={Paper}>
        {todos && (
          <Table sx={{ minWidth: 100 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todos.map((todo, indx) => (
                <TableRow key={indx.toString()}>
                  <TableCell>{todo.id}</TableCell>
                  <TableCell align="left">{todo.title}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => {
                        dispatch({ type: "todo/removeTodo", payload: todo.id });
                      }} //
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </div>
  );
};

export default TodoTable;

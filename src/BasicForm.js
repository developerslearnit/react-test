import React from "react";
import { Formik, Field, Form } from "formik";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

const BasicForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>TODO</h1>
      <Formik
        initialValues={{
          id: "",
          title: "",
        }}
        onSubmit={(values, { resetForm }) => {
          const id = Date.now();
          values.id = id;
          dispatch({ type: "todo/addTodo", payload: values });
          resetForm();
        }}
        onReset={(values) => {
          values.title = "";
        }}
      >
        <Form>
          <label htmlFor="todo">Add ToDo </label>
          <Field
            className="myInput"
            id="todo"
            name="title"
            placeholder="TextHere"
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default BasicForm;

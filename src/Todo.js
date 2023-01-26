import React from "react";
import { Provider } from "react-redux";
import BasicForm from "./BasicForm";
import store from "./redux/store";
import TodoTable from "./TodoTable";

const Todo = () => {
  return (
    <Provider store={store}>
      <BasicForm />
      <TodoTable />
    </Provider>
  );
};

export default Todo;

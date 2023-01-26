import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AccountMenu from "./AccountMenu";
import BasicForm from "./BasicForm";
import Layout from "./Layout";
import { Route, Routes, useNavigate } from "react-router-dom";
import Todo from "./Todo";

export default function App() {
  //const [openForm, setOpenForm] = React.useState(false);

  const navigate = useNavigate();
  const handleOnClick = (page) => {
    console.log("open");
    navigate("/todo", { replace: true });

  };
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="todo" element={<Todo />} />
      </Route>
    </Routes>
  );
}

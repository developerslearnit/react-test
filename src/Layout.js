import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AccountMenu from "./AccountMenu";
import { useNavigate, Outlet } from "react-router-dom";
const Layout = () => {
  const navigate = useNavigate();
  const handleOnClick = (page) => {
    navigate("/todo", { replace: true });
  };
  return (
    <div>
      <Container maxWidth="sm">
        <AccountMenu onClick={handleOnClick} />
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;

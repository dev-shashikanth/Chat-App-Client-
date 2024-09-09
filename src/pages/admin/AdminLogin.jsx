import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../../components/styles/StylesComponents";
import { bgGradient } from "../../constants/color";
import { useInputValidation } from "6pp";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin, getAdminDetails } from "../../redux/thunks/admin";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const { isAdmin } = useSelector((state) => state.auth);
  const secretKey = useInputValidation("");
  const handleSubmit = (e) => {
    dispatch(adminLogin(secretKey.value));
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(getAdminDetails());
  }, [dispatch]);

  if (isAdmin) return <Navigate to="/admin/dashboard" />;
  return (
    <div
      style={{
        backgroundImage: bgGradient,
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Admin Login</Typography>
          <form
            style={{ width: "100%", marginTop: "1rem" }}
            onSubmit={handleSubmit}
          >
            <TextField
              required
              fullWidth
              label="Secret key"
              type="password"
              margin="normal"
              variant="outlined"
              value={secretKey.value}
              onChange={secretKey.changeHandler}
            />
            <Button
              sx={{ marginTop: "1rem" }}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;

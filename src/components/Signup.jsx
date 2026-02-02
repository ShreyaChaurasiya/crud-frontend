import { TextField, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    const { name, username, email, phone, password } = form;

    if (!name || !username || !email || !phone || !password) {
      alert("All fields are required");
      return;
    }

    // Temporary auth storage (frontend only)
    localStorage.setItem(
      "authUser",
      JSON.stringify({ email, password })
    );

    alert("Signup successful");
    navigate("/login");
  };

  return (
    <Paper sx={{ width: 400, margin: "80px auto", padding: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Sign Up
      </Typography>

      <TextField
        fullWidth
        label="Name"
        name="name"
        margin="normal"
        onChange={handleChange}
      />

      <TextField
        fullWidth
        label="Username"
        name="username"
        margin="normal"
        onChange={handleChange}
      />

      <TextField
        fullWidth
        label="Email"
        name="email"
        margin="normal"
        onChange={handleChange}
      />

      <TextField
        fullWidth
        label="Phone"
        name="phone"
        margin="normal"
        onChange={handleChange}
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        name="password"
        margin="normal"
        onChange={handleChange}
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2 }}
        onClick={handleSignup}
      >
        Sign Up
      </Button>
    </Paper>
  );
};

export default Signup;

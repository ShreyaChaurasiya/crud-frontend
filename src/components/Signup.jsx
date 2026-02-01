import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password) {
      alert("All fields are required");
      return;
    }

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
        label="Email"
        margin="normal"
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        onChange={(e) => setPassword(e.target.value)}
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

import { TextField, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 🔹 Redirect if already logged in
  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");
    if (isAuth) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("authUser"));

    if (!user) {
      alert("No user found. Please sign up.");
      navigate("/signup");
      return;
    }

    if (email === user.email && password === user.password) {
      localStorage.setItem("isAuth", "true");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Paper sx={{ width: 400, margin: "80px auto", padding: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Login
      </Typography>

      <TextField
        fullWidth
        label="Email"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2 }}
        onClick={handleLogin}
      >
        Login
      </Button>

      <Typography align="center" sx={{ mt: 2 }}>
        Don’t have an account?{" "}
        <span
          style={{ color: "#1976d2", cursor: "pointer" }}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </span>
      </Typography>
    </Paper>
  );
};

export default Login;

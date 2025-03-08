import { useState } from "react";
import { useAuth } from "../Auth";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import './style.css'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('---')
    login(username, password);
  };

  return (
    <Box className="container">
    <div className="background"></div>
      <Paper className="form" elevation={6}>
        <Typography variant="h5" component="h2" align="center" gutterBottom>
          Вход в систему управления
        </Typography>
        <Box
        component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}
        >
          <TextField
            label="Логин"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Пароль"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Войти
          </Button>
        </Box>
      </Paper>
  </Box>
);
};


export default Login;
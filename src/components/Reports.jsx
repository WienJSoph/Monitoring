import React from "react";
import {
    Container,
    Box,
    Button,
    TableContainer,
    TableHead,
    TableRow,
    TableBody,
    Fab,
    Typography,
} from "@mui/material";
import { Table } from "@mui/material";
import fiber from '../mockData/fiber.json'
import Header from "../pages/Header";
import { useNavigate } from "react-router-dom";


const Reports = () => {

    const navigate = useNavigate();
    return (
        <>
          <Header />
          <Container maxWidth="sm">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              minHeight="70vh"
              textAlign="center"
            >
              <Typography variant="h1" color="primary" gutterBottom>
                404
              </Typography>
              <Typography variant="h5" gutterBottom>
                Упс! Данная страница еще находится в разработке
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Зайдите позже, я обязательно все сделаю
              </Typography>
              <Button variant="contained" color="primary" onClick={() => navigate("/dashboard")}>
                На главную
              </Button>
            </Box>
          </Container>
        </>
      );
};

export default Reports;
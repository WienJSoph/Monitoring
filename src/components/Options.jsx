import React from "react";
import {
    Container,
    Paper,
    TableCell,
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


const Options = () => {


    return (
        <>
        <Header />
        <Container maxWidth="xl">
            <Typography variant="h5" sx={{mt:3}}>Настройки</Typography>
        </Container>
        </>
    );
};

export default Options;
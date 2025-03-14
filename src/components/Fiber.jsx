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
const FiberPage = () => {

    const fiberHead = ["Оператор", "Система", "Кабель", "Волокно", "Макс. зат. [дБ/км]", "Тек. зат. [дБ/км]", "Cобытия", "Аварии"]; 

    return (
        <>
        <Header />
            <Container maxWidth="xl">
            <Typography variant="h5" sx={{mt: 3}}>Загрузка по волокнам</Typography>
                    <Paper className="container_event">
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    {fiberHead.map((p) => (
                                        <TableCell sx={{ fontWeight: "bold" }}>
                                            {p}
                                        </TableCell>
                                    ))}
                                </TableHead>
                                <TableBody>
                                    {Array.isArray(fiber) && fiber?.map((p, j) => (
                                        <TableRow>
                                            <TableCell>{p.vendor}</TableCell>
                                            <TableCell>{p.system}</TableCell>
                                            <TableCell>{p.cable}</TableCell>
                                            <TableCell>
                                                <Fab
                                                    variant="extended"
                                                    size="small"
                                                    color={
                                                        p.system === '' ? 'warning' :'success'              
                                                    }
                                                    style={{
                                                        zIndex: 0,
                                                        textTransform: "none",
                                                    }}
                                                >
                                                    {p.fiber}
                                                </Fab>
                                                </TableCell>
                                            <TableCell>{p.maxatt}</TableCell>
                                            <TableCell>{p.att}</TableCell>
                                            <TableCell>{p.events}</TableCell>
                                            <TableCell>{p.alarms}</TableCell></TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
            </Container>
        </>
    );
};

export default FiberPage;
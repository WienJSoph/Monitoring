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

    const fiberHead = ["оператор", "система", "кабель", "волокно", "н.затухание", "макс.затухание", "тек.затухание", "событие", "аварии"]; 

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
                                            <TableCell>{p.natt}</TableCell>
                                            <TableCell>{p.matt}</TableCell>
                                            <TableCell>{p.att}</TableCell>
                                            <TableCell>{p.event}</TableCell>
                                            <TableCell>{p.alarm}</TableCell></TableRow>
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
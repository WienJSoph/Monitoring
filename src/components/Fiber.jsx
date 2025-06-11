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
    TablePagination,
} from "@mui/material";
import { Table } from "@mui/material";
import fiber from '../mockData/fiber.json'
import Header from "../pages/Header";
import { useState } from "react";

const FiberPage = () => {

    const fiberHead = ["Оператор", "Система", "Кабель", "Волокно", "Макс. зат. [дБ/км]", "Тек. зат. [дБ/км]", "Cобытия", "Аварии"];

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const pagedFiber = fiber.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    return (
        <>
            <Header />
            <Container maxWidth="xl">
                <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
                    Загрузка по волокнам
                </Typography>
                <Paper sx={{ p: 2 }}>
                    <TableContainer>
                        <Table sx={{ minWidth: 900 }} size="small">
                            <TableHead>
                                <TableRow>
                                    {fiberHead.map((head, i) => (
                                        <TableCell
                                            key={i}
                                            sx={{
                                                fontWeight: "bold",
                                                backgroundColor: "#f5f5f5",
                                                fontSize: 15,
                                                textAlign: 'center',
                                            }}
                                        >
                                            {head}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {pagedFiber.map((p, j) => (
                                    <TableRow
                                        key={j}
                                        sx={{
                                            "&:hover": { backgroundColor: "#f0f6ff" },
                                            transition: "background 0.2s",
                                        }}
                                    >
                                        <TableCell align="center">{p.vendor}</TableCell>
                                        <TableCell align="center">{p.system}</TableCell>
                                        <TableCell align="center">{p.cable}</TableCell>
                                        <TableCell align="center">
                                            <Fab
                                                variant="extended"
                                                size="small"
                                                color={p.system === "" ? "warning" : "success"}
                                                sx={{
                                                    zIndex: 0,
                                                    textTransform: "none",
                                                    minWidth: 40,
                                                    fontSize: 13,
                                                }}
                                            >
                                                {p.fiber}
                                            </Fab>
                                        </TableCell>
                                        <TableCell align="center">{p.maxatt}</TableCell>
                                        <TableCell align="center">{p.att}</TableCell>
                                        <TableCell align="center">{p.events}</TableCell>
                                        <TableCell align="center">{p.alarms}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        component="div"
                        count={fiber.length}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        rowsPerPageOptions={[5, 10, 25, 50]}
                        sx={{
                            ".MuiTablePagination-toolbar": { justifyContent: "center" },
                        }}
                    />
                </Paper>
            </Container>
        </>
    );
};

export default FiberPage;
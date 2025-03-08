import React from "react";
import {
    Container,
    Paper,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Card,
    CardContent,
    Typography,
    Divider,
    CardHeader
} from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import note from '../mockData/note.json';
import alarm from '../mockData/alarm.json';
import warning from '../mockData/warning.json';
import Header from "../pages/Header";
import './event.css';

const Events = () => {

    const tableHead = ["Дата", "Место", "Кабель"];
    const tableEvent = ["Оператор", "Система", "Кабель"];

    return (
        <>
            <Header />
                <Container maxWidth="xl" >
                    <Typography variant="h5" sx={{mt: 3}}>События</Typography>
                    
                    <div className="container_event">
                        <>
                            <Card>
                                <Paper className="tiket_alarm" elevation={8}>
                                    <PriorityHighIcon fontSize="large" />
                                </Paper>
                                <CardContent>
                                    <CardHeader></CardHeader>

                                    <Typography
                                        sx={{ mb: 1.5, marginTop: "10px" }}
                                        color="text.secondary"
                                    >
                                        Всего уведомлений: <b>6</b>
                                    </Typography>
                                    <Divider />
                                    <TableContainer>
                                        <TableHead sx={{ background: "#f5f2f2" }}>


                                            {tableHead.map((row) => (
                                                <TableCell>{row}</TableCell>
                                            ))}
                                        </TableHead>

                                        {alarm.map((row) => (
                                            <TableRow>
                                                <TableCell>{row.data}</TableCell>
                                                <TableCell>{row.loc}</TableCell>
                                                <TableCell>{row.place}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableContainer>
                                </CardContent>
                            </Card>
                        </>
                        <>
                            <Card>
                                <Paper className="tiket_warining" elevation={8}>
                                    <WarningAmberIcon fontSize="large" />
                                </Paper>
                                <CardContent>
                                    <CardHeader></CardHeader>
                                    <Typography
                                        sx={{ mb: 1.5, marginTop: "10px" }}
                                        color="text.secondary"
                                    >
                                        Всего уведомлений: <b>3</b>
                                    </Typography>
                                    <Divider />
                                    <TableContainer>
                                        <TableHead sx={{ background: "#f5f2f2" }}>
                                            {tableHead.map((row) => (
                                                <TableCell>{row}</TableCell>
                                            ))}
                                        </TableHead>

                                        {warning.map((row) => (
                                            <TableRow>
                                                <TableCell>{row.data}</TableCell>
                                                <TableCell>{row.loc}</TableCell>
                                                <TableCell>{row.place}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableContainer>
                                </CardContent>
                            </Card>
                        </>
                        <>
                            <Card>
                                <Paper className="tiket_note" elevation={8}>
                                    <NotificationsNoneIcon fontSize="large" />
                                </Paper>
                                <CardContent>
                                    <CardHeader></CardHeader>
                                    <Typography
                                        sx={{ mb: 1.5, marginTop: "10px" }}
                                        color="text.secondary"
                                    >
                                        Всего уведомлений: <b>5</b>
                                    </Typography>
                                    <Divider />
                                    <TableContainer>
                                        <TableHead sx={{ background: "#f5f2f2" }}>
                                            {tableEvent.map((row) => (
                                                <TableCell>{row}</TableCell>
                                            ))}
                                        </TableHead>
                                        {note.map((row) => (
                                            <TableRow>
                                                <TableCell>{row.data}</TableCell>
                                                <TableCell>{row.loc}</TableCell>
                                                <TableCell>{row.place}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableContainer>
                                </CardContent>
                            </Card>
                        </>
                    </div>
                    <div style={{ height: '50px' }}>

                    </div>
                </Container>
        </>
    );
};

export default Events;
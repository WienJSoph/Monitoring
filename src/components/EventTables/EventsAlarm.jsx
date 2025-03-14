import React from "react";
import {
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
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import alarm from '../../mockData/alarm.json';
import '../event.css';

const EventsAlarm = () => {

    const tableHead = ["Дата", "Узел", "Слот", "Сигнал ошибки"];

    return (
        <>
            <Card>
                <Paper className="tiket_alarm" elevation={8}>
                    <TableContainer>
                        <table>
                            <tr>
                                <td><PriorityHighIcon fontSize="large" /></td>
                                <td><h3>Аварии</h3></td>
                            </tr>
                        </table>
                    </TableContainer>
                </Paper>
                <CardContent>
                    <CardHeader></CardHeader>

                    <Typography
                        sx={{ mb: 1.5, marginTop: "10px" }}
                        color="text.secondary"
                    >
                        Всего уведомлений: <b>{alarm.length}</b>
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
                                <TableCell>{row.node}</TableCell>
                                <TableCell>{row.slot}</TableCell>
                                <TableCell>{row.msg}</TableCell>
                            </TableRow>
                        ))}
                    </TableContainer>
                </CardContent>
            </Card>
        </>
    )
};

export default EventsAlarm;
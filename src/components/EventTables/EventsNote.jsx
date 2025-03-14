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
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import note from '../../mockData/note.json';
import '../event.css';

const EventsNote = () => {

    const tableHead = ["Оператор", "Система", "Место", "Уровень ошибки", "Описание"];

    return (
        <>
        <Card>
            <Paper className="tiket_note" elevation={8}>
                <TableContainer>
                        <table>
                            <tr>
                                <td><NotificationsNoneIcon fontSize="large" /></td>
                                <td><h3>Замечания</h3></td>
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
                    Всего уведомлений: <b>{note.length}</b>
                </Typography>
                <Divider />
                <TableContainer>
                    <TableHead sx={{ background: "#f5f2f2" }}>
                        {tableHead.map((row) => (
                            <TableCell>{row}</TableCell>
                        ))}
                    </TableHead>
                    {note.map((row) => (
                        <TableRow>
                            <TableCell>{row.operator}</TableCell>
                            <TableCell>{row.system}</TableCell>
                            <TableCell>{row.place}</TableCell>
                            <TableCell>{row.level}</TableCell>
                            <TableCell>{row.dsc}</TableCell>
                        </TableRow>
                    ))}
                </TableContainer>
            </CardContent>
        </Card>
    </>
    )
}


export default EventsNote;
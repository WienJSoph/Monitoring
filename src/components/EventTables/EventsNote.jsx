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
import note from '../../mockData/note.json';

import '../event.css';


const EventsNote = () => {

    const tableHeadEvent = ["Дата", "Место", "Система", "Уровень ошибки", "Описание"];

    return (
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
                        {tableHeadEvent.map((row) => (
                            <TableCell>{row}</TableCell>
                        ))}
                    </TableHead>
                    {note.map((row) => (
                        <TableRow>
                            <TableCell>{row.data}</TableCell>
                            <TableCell>{row.loc}</TableCell>
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
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
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import warning from '../../mockData/warning.json';
import '../event.css';

const EventsWarning = () => {

    const tableHead = ["Дата", "Узел", "Кабель", "Волокно", "Тип события"];

    return (
        <>
            <Card>
                <Paper className="tiket_warining" elevation={8}>
                    <TableContainer>
                        <table>
                            <tr>
                                <td><WarningAmberIcon fontSize="large" /></td>
                                <td><h3>Предупреждения</h3></td>
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
                        Всего уведомлений: <b>{warning.length}</b>
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
                                <TableCell>{row.node}</TableCell>
                                <TableCell>{row.cabel}</TableCell>
                                <TableCell>{row.fiber}</TableCell>
                                <TableCell>{row.type}</TableCell>
                            </TableRow>
                        ))}
                    </TableContainer>
                </CardContent>
            </Card>
        </>
    )
};

export default EventsWarning;
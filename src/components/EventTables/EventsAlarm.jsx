import React from "react";
import PropTypes from 'prop-types';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Fab,
  Stack,
  Typography,
  Paper,

} from "@mui/material";
import { useState } from "react";
import alarm from '../../mockData/alarm.json';
import '../event.css';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


const EventsAlarm = () => {

  const tableHead = ["Дата", "Узел", "Слот", "Сигнал ошибки"];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const pagedFiber = alarm.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  return (
    <>
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 3, mb: 2 }}>
          <ErrorOutlineIcon color="error" fontSize="large" />
          <Typography variant="h5" fontWeight="bold">
            Журнал аварий
          </Typography>
        </Stack>
        <Paper sx={{ p: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 900 }} size="small">
              <TableHead>
                <TableRow>
                  {tableHead.map((head, i) => (
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
                {pagedFiber.map((p) => (
                  <TableRow
                    key={p.id}
                    sx={{
                      backgroundColor: p.msg === 'AIS' ? 'red' : '#FFE0B2',
                      "&:hover": { backgroundColor: p.msg === 'AIS' ? '#FFCC80' : "#f0f6ff" },
                      transition: "background 0.2s",
                    }}
                  >
                    <TableCell align="center">{p.data}</TableCell>
                    <TableCell align="center">{p.node}</TableCell>
                    <TableCell align="center">{p.slot}</TableCell>
                    <TableCell align="center">
                      <Fab
                        variant="extended"
                        size="small"
                        color={p.msg === "AIS" ? "error" : "warning"}
                        sx={{
                          zIndex: 0,
                          textTransform: "none",
                          minWidth: 40,
                          fontSize: 13,
                        }}
                      >
                        {p.msg}
                      </Fab>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={alarm.length}
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
  )
};

export default EventsAlarm;
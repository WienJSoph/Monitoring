import React from "react";
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
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import warning from '../../mockData/warning.json';
import '../event.css';
import { useState } from "react";

const EventsWarning = () => {

    const tableHead = ["Дата", "Узел", "Кабель", "Волокно", "Тип события"];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const pagedFiber = warning.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
      <>
        <Container maxWidth="xl">
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 3, mb: 2 }}>
            <WarningAmberIcon color="error" fontSize="large" />
            <Typography variant="h5" fontWeight="bold">
              Журнал волокон
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
                        backgroundColor: p.type === 'Обрыв волокна' ? 'red' : p.type === 'Волокно отсутствует' ? "orange" :'#',
                        "&:hover": { backgroundColor: p.msg === 'AIS' ? '#FFCC80' : "#f0f6ff" },
                        transition: "background 0.2s",
                      }}
                    >
                      <TableCell align="center">{p.data}</TableCell>
                      <TableCell align="center">{p.node}</TableCell>
                      <TableCell align="center">{p.cabel}</TableCell>
                      <TableCell align="center">{p.fiber}</TableCell>
                      <TableCell align="center">
                        <Fab
                          variant="extended"
                          size="small"
                          color={p.type === "Обрыв волокна" ? "default" : p.type === "Волокно отсутствует" ? "warning": "success"}
                          sx={{
                            zIndex: 0,
                            textTransform: "none",
                            minWidth: 40,
                            fontSize: 13,
                          }}
                        >
                          {p.type}
                        </Fab>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              component="div"
              count={warning.length}
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

export default EventsWarning;
import React from "react";
import { AppBar, Toolbar, Typography, Box,  } from "@mui/material";
import { DashboardOutlined, PeopleOutlined, SettingsOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useCallback } from "react";
import Sidebar from "./SideBar";
import { useAuth } from "../Auth";

const Header = () => {
    const [open, setOpen] = useState(false);
    const { user, logout } = useAuth();
    const toggleDrawer = useCallback((newOpen) => {
        setOpen(newOpen);
    }, []);
 
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Панель управления
            </Typography>
            <Button color="inherit" onClick={logout}>Выход</Button>
            </Toolbar>
        </AppBar>
        <Sidebar open={open} toggleDrawer={toggleDrawer}/>
        </Box>
    );
};

export default Header;
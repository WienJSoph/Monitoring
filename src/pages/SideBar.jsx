import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import Divider from '@mui/material/Divider';
import { AppBar, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { DashboardOutlined, PeopleOutlined, SettingsOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import MapIcon from '@mui/icons-material/Map';

const Sidebar = ({open, toggleDrawer}) => {

    const menuItems = [
        { text: "Главная", icon: <DashboardOutlined />, path: "/dashboard" },
        { text: "Карта покрытия", icon: <MapIcon />, path: "/map" },
        { text: "Волокна", icon: <FiberSmartRecordIcon />, path: "/fiber" },
        { text: "Операторы", icon: <SupervisedUserCircleIcon />, path: "/operators" },
        { text: "Статистика", icon: <StackedLineChartIcon />, path: "/events" },
    ];

    const sideItems = [
        
        { text: "Отчеты", icon: <ReportProblemIcon />, path: "/reports" },
        { text: "Настройки", icon: <SettingsOutlined />, path: "/options" },
       
    ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
      <List>
      {menuItems.map((item) => (
            <ListItem button component={Link} to={item.path} key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
      </List>
      <Divider />
      <List>
      {sideItems.map((item) => (
            <ListItem button component={Link} to={item.path} key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={() => toggleDrawer(false)} >
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default Sidebar;
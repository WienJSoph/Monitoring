import React from "react";
import {
    Container,
    Typography,
    AppBar,
    Tabs,
    Tab,
    Button,
    ButtonGroup,
    Box
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import PropTypes from "prop-types";
import Header from "../pages/Header";
import './event.css';
import EventsNote from "./EventTables/EventsNote";
import EventsWarning from "./EventTables/EventsWarning";
import EventsAlarm from "./EventTables/EventsAlarm";
import { alignProperty } from "@mui/material/styles/cssUtils";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Events = () => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    return (
        <>
            <Header />

                    <Box sx={{ bgcolor: 'background.paper'}}>
                    <AppBar position="static">
                        <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        width="50%"
                        centered
                        >
                        <Tab label="Аварии" {...a11yProps(0)} />
                        <Tab label="Предупреждения" {...a11yProps(1)} />
                        <Tab label="Замечания" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <EventsAlarm />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <EventsWarning />
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <EventsNote />
                    </TabPanel>
                    </Box>
                    <div style={{ height: '50px' }}>
                        
                    </div>

        </>
    );
};

export default Events;
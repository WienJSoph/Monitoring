import React from "react";
import {
    Container,
    Typography,
} from "@mui/material";
import Header from "../pages/Header";
import './event.css';
import EventsNote from "./EventTables/EventsNote";
import EventsWarning from "./EventTables/EventsWarning";
import EventsAlarm from "./EventTables/EventsAlarm";

const Events = () => {
    return (
        <>
            <Header />
                <Container maxWidth="xl" >
                    <Typography variant="h5" sx={{mt: 3, mb: 3}}>События</Typography>
                    
                    <div className="container_event">
                        <div style={{width:"34%"}}>
                            <EventsAlarm />
                        </div>
                        <div style={{width:"33%"}}>
                            <EventsWarning />
                        </div>
                        <div style={{width:"333"}}>
                            <EventsNote />
                        </div>
                    </div>
                    <div style={{ height: '50px' }}>

                    </div>
                </Container>
        </>
    );
};

export default Events;
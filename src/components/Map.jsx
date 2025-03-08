import React from "react";
import {
    Container,
    Typography,
} from "@mui/material";
import Header from "../pages/Header";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { useState } from "react";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Map = () => {

    const position = [55.021531, 82.924505];
    const locations = [
        {
            title: "УД 3202/12",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. ",
            coordinates: [55.021531, 82.924505],
        },
        {
            title: "Location 2",
            description: "Сбербанк.",
            coordinates: [55.024563, 82.916845],
        },
        {
            title: "Location 3",
            description: "Отделение связи.",
            coordinates: [55.029423, 82.916191],
        },
        {
            title: "Location 4",
            description: "Nebo fashion.",
            coordinates: [55.030627, 82.917888],
        },
        {
            title: "Location 5",
            description: "СибГУТИ. ",
            coordinates: [55.013384, 82.950994],
        },
    ];

    return (
        <>
            <Header />
            <Container maxWidth="xl">
                <Typography variant="h5" sx={{ mt: 3 }}>Карта покрытия</Typography>

                <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    {locations.map((marker, index) => (
                        <Marker key={index} position={marker.coordinates}>
                            <Popup>
                            <h3>{marker.title}</h3>
                            {marker.description}
                            <hr/>
                            {marker.description}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>

            </Container>
        </>
    );
};

export default Map;
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
import './text.css'

import nodes from "../mockData/nodes.json";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Map = () => {

    const position = [54.895574, 82.973302];

    return (
        <>
            <Header />
            
                <MapContainer center={position} zoom={10} style={{ height: "93vh", width: "100%" }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    {nodes.map((node, index) => (
                        <Marker key={index} position={node.coordinates}>
                            <Popup>
                                <span class="textGray">id: {node.id} | x: {node.coordinates.at(0)}, y: {node.coordinates.at(1)}</span> <br />
                                <span class="header">Название:</span> <span class="textBlue">{node.name}</span> <br />
                                <span class="header">Оператор:</span> <span class="textBlue">{node.operator}</span> <br />
                                <br />
                                <hr/>
                                <span class="header">Описание узла:</span> <br />
                                <br />
                                {node.description} <br />
                                <br />
                                <hr/>
                                <span class="header">Информация о структуре DWDM:</span> <br />
                                <br />
                                Кол-во оборудования: <span class="textRed">{node.equipment.places}</span> <br />
                                Кол-во кабелей: <span class="textRed">{node.cables}</span> <br />
                                Кол-во волокон: <span class="textRed">{node.fibers}</span> <br />
                                Кол-во уведомлений: <span class="textRed">{node.stats}</span>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>

            
        </>
    );
};

export default Map;
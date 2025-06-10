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


// const Map = () => {

//     const position = [55.021531, 82.924505];
//     const locations = [
//         {
//             title: "УД 3202/12",
//             description: "Contrary to popular belief, Lorem Ipsum is not simply random text. ",
//             coordinates: [55.021531, 82.924505],
//         },
//         {
//             title: "Location 2",
//             description: "Сбербанк.",
//             coordinates: [55.024563, 82.916845],
//         },
//         {
//             title: "Location 3",
//             description: "Отделение связи.",
//             coordinates: [55.029423, 82.916191],
//         },
//         {
//             title: "Location 4",
//             description: "Nebo fashion.",
//             coordinates: [55.030627, 82.917888],
//         },
//         {
//             title: "Location 5",
//             description: "СибГУТИ. ",
//             coordinates: [55.013384, 82.950994],
//         },
//     ];

const Map = () => {

    const position = [55.021531, 82.924505];
    // const locations = [
    //     {
    //         title: "УД 3202/12",
    //         description: "Искитим",
    //         coordinates: [54.636680, 83.306508],
    //     },
    //     {
    //         title: "УД 3202/12",
    //         description: "Сбербанк.",
    //         coordinates: [55.024563, 82.916845],
    //     },
    //     {
    //         title: "Location 3",
    //         description: "Левый берег.",
    //         coordinates: [54.986785, 82.862749],
    //     },
    //     {
    //         title: "Location 4",
    //         description: "Бердск.",
    //         coordinates: [54.754914, 83.081061],
    //     },
    //     {
    //         title: "Location 5",
    //         description: "СибГУТИ. ",
    //         coordinates: [55.013384, 82.950994],
    //     },
    // ];

    return (
        <>
            <Header />
            
                <MapContainer center={position} zoom={13} style={{ height: "90vh", width: "100%" }}>
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
                                Вендор: <span class="textBlue">{node.equipment.vendor}</span> <br />
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
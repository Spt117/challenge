"use client";

// components/GoogleMapComponent.js
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "100vh",
};

const center = {
    lat: 49.63206049122254,
    lng: -1.6159196644678055,
};

const api = process.env.NEXT_PUBLIC_API;

const mapStyles = [
    {
        featureType: "poi", // Points d'intérêt
        stylers: [{ visibility: "off" }], // Masquez tous les points d'intérêt par défaut
    },
    {
        featureType: "poi.government",
        elementType: "labels",
        stylers: [{ visibility: "on" }], // Affichez les éléments gouvernementaux (comme les gendarmeries et les commissariats de police)
    },
    {
        featureType: "poi.medical",
        elementType: "labels",
        stylers: [{ visibility: "on" }], // Affichez les points d'intérêt médicaux (comme les hôpitaux)
    },
];

const mapOptions = {
    zoomControl: false, // Cela désactive le contrôle de zoom
    streetViewControl: false, // Cela désactive le contrôle Street View
    fullscreenControl: false, // Cela désactive le contrôle plein écran
    styles: mapStyles,
};

const GoogleMapComponent = () => {
    if (api)
        return (
            <LoadScript googleMapsApiKey={api}>
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15} options={mapOptions}>
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        );
};

export default GoogleMapComponent;

import { useState, useMemo, useCallback, useRef } from "react";
import {
    GoogleMap,
    Marker,
    DirectionsRenderer,
    Circle,
    MarkerClusterer,
} from "@react-google-maps/api";

function Map() {
    const center = useMemo(() => ({lat: 43, lng: -80}), [])
    return ( 
        <div className="map">
            <GoogleMap
                zoom={10}
                center={center}
                mapContainerClassName="map-container"
            ></GoogleMap>
        </div>
    );
}

Map.defaultProps = {};

export default Map;
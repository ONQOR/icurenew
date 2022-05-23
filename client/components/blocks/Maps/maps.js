import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
    return ( 
        <GoogleMap 
        zoom={10}
        defaultCenter={{ lat: 12, lng: 23 }}
        ></GoogleMap>
    );
}


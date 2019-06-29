import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export default withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultOptions={{
            streetViewControl: false,
            scaleControl: false,
            mapTypeControl: false,
            panControl: false,
            zoomControl: false,
            rotateControl: false,
            fullscreenControl: false
        }}
        defaultZoom={11.8}
        defaultCenter={{ lat: 37.4786502, lng: 126.9650535 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 37.4786502, lng: 126.9650535 }} />}
    </GoogleMap>
));
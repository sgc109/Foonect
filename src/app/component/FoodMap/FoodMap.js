/*global google*/

import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import SearchBox from "react-google-maps/lib/components/places/SearchBox";


export default withScriptjs(withGoogleMap((props) => {
    console.log(props.latLng);
    return (
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
            defaultZoom={13}
            defaultCenter={{ lat: props.latLng.lat, lng: props.latLng.lng }}
        >
            {/* <SearchBox
            ref={props.onSearchBoxMounted}
            bounds={props.bounds}
            controlPosition={google.maps.ControlPosition.TOP_LEFT}
            onPlacesChanged={props.onPlacesChanged}
        >
            <input
                type="text"
                placeholder="Customized your placeholder"
                style={{
                    boxSizing: `border-box`,
                    border: `1px solid transparent`,
                    width: `240px`,
                    height: `32px`,
                    marginTop: `27px`,
                    padding: `0 12px`,
                    borderRadius: `3px`,
                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                    fontSize: `14px`,
                    outline: `none`,
                    textOverflow: `ellipses`,
                }}
            />
        </SearchBox> */}
            {
                (props.isMarkerShown
                    && (
                        <>
                            {
                                props.places.map(place =>
                                    <Marker onClick={null} position={{ lat: props.latLng.lat, lng: props.latLng.lng }} />
                                )
                            }
                        </>
                    )
                )
            }
        </GoogleMap>
    )
}
));
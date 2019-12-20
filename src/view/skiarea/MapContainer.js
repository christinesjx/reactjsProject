import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import * as trailData from "./data/get-trails.json";
import mapStyles from "./mapStyles";
import MediaQuery from 'react-responsive';


const breakpoints = {
    desktop: '(min-width: 1025px)',
    tablet: '(min-width: 768px) and (max-width: 1024px)',
    mobile: '(max-width: 767px)'
};

function Map() {
  const [selectedTrail, setSelectedTrail] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedTrail(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={6}
      defaultCenter={{ lat: 42.3556792, lng: -71.1312517 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {trailData.trails.map(trail => (
        <Marker
          key={trail.id}
          position={{
            lat: trail.latitude,
            lng: trail.longitude
          }}
          onClick={() => {
            setSelectedTrail(trail);
          }}
        />
      ))}

      {selectedTrail && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedTrail(null);
          }}
          position={{
            lat: selectedTrail.latitude,
            lng: selectedTrail.longitude
          }}
        >
          <div>
            <h2>{selectedTrail.name}</h2>
            <p>difficulty: {selectedTrail.difficulty}</p>
            <div>
              <img src={selectedTrail.imgSqSmall} alt="" />
            </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>

  );
}


const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function SkiMap() {
  return (
    <div>
    <MediaQuery query={breakpoints.mobile}>
        <div style={{ width: "100vw", height: "50vh" }}>
        <MapWrapped
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%`}} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
        </div>
    </MediaQuery>
    <MediaQuery query={breakpoints.tablet}>
        <div style={{ width: "100vw", height: "50vh" }}>
        <MapWrapped
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%`}} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
        </div>  
    </MediaQuery>
    <MediaQuery query={breakpoints.desktop}>
        <div style={{ width: "100vw", height: "50vh" }}>
        <MapWrapped
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%`}} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
        </div>  
    </MediaQuery>
    </div>
  );
}

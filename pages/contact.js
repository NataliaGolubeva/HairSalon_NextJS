import React, { useRef, useState, useEffect } from "react";
import ReactMapGl, {
  Marker,
  LinearInterpolator,
  WebMercatorViewport,
} from "react-map-gl";
import mapboxgl from "!mapbox-gl";
import { FaMapMarkerAlt } from "react-icons/fa";
import bbox from "@turf/bbox";
function contact() {
  const [viewport, setViewport] = useState({
    latitude: 50.98,
    longitude: 5.04,
    zoom: 9,
    bearing: 0,
    pitch: 10,
  });

  const onClick = (event) => {
    const feature = event.features[0];
    if (feature) {
      // calculate the bounding box of the feature
      const [minLng, minLat, maxLng, maxLat] = bbox(feature);
      // construct a viewport instance from the current state
      const vp = new WebMercatorViewport(viewport);
      const { longitude, latitude, zoom } = vp.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat],
        ],
        {
          padding: 40,
        }
      );

      setViewport({
        ...viewport,
        longitude,
        latitude,
        zoom,
        transitionInterpolator: new LinearInterpolator({
          around: [event.offsetCenter.x, event.offsetCenter.y],
        }),
        transitionDuration: 1000,
      });
    }
  };

  return (
    <div className="wrapper">
      <h1 className="mainTitle">Contact</h1>
      <div className="containerAbout">
        <div className="mapBox">
          <ReactMapGl
            mapboxApiAccessToken={
              "pk.eyJ1IjoibmF0YWxpYWdvbCIsImEiOiJja2p4aDBlZ3MwczA1MnZsN3J0emQyMGgwIn0.u-AzjtzNo8bB3cKZOftmrg"
            }
            {...viewport}
            onViewportChange={(newView) => setViewport(newView)}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            width="350px"
            height="350px"
            onClick={onClick}
          >
            <Marker
              latitude={50.98687108528024}
              longitude={5.052529586729512}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <FaMapMarkerAlt color="red" />
            </Marker>
          </ReactMapGl>
        </div>
        <div className="content">
          <div className="addressContent">
            Address: <span>Koning Albertstraat 42, 3290 Diest</span>
          </div>
          <div className="addressContent">
            Phone Number: <span>+32476 43 88 66</span>
          </div>
          <div className="addressContent">
            Email : <span>victoria_hair@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;

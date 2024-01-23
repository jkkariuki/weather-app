import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "354px",
};

const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

function Map(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
    libraries,
  });
  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={{ lat: props.latitude, lng: props.longitude }}
      >
        <MarkerF position={{ lat: props.latitude, lng: props.longitude }} />
      </GoogleMap>
    </div>
  );
}

export default Map;

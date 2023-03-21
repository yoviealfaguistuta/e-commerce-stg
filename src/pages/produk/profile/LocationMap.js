import React, { useState, useEffect } from "react";

const LocationMap = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&output=embed`;

  return (
    <div className="location-map">
      <iframe src={mapUrl} width="100%" height="250" title="Map" />
    </div>
  );
};

export default LocationMap;

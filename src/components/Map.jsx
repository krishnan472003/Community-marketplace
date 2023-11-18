import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ({coordinates}) => {
  useEffect(() => {
    console.log(coordinates+"====");
    mapboxgl.accessToken = 'pk.eyJ1Ijoia3Jpc2huYW40NyIsImEiOiJjbG90MmR3anIwM3J1MmpsOWFtbWFheGNuIn0.pgY0We6GIYD3x4HVieOYng';
    // console.log(JSON.stringify(coordinates)+"asssssssssssssssss")

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center:coordinates[0].lngLat, // Set the center coordinates of the map
      zoom: 6 // Set the zoom level
    });

    // Add markers to the map
    coordinates.forEach(({ name, lngLat, color }) => {
      const marker = new mapboxgl.Marker({ color })
        .setLngLat(lngLat)
        .addTo(map);

      // Create a popup for each marker
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h3>${name}</h3>`);

      // Attach the popup to the marker
      marker.setPopup(popup);
    });


    // Clean up the map when the component unmounts
    return () => map.remove();
  }, []);

  return (
    <div id="map" style={{ height: '500px', width: '500px' }} />
  );
};

export default Map;

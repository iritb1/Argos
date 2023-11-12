import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

const LeafletMap = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    // Initialize the Leaflet map when the component mounts
    const map = L.map(mapContainer.current).setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    // Add markers, popups, or any other functionality to the map

    return () => {
      // Clean up resources (if needed) when the component unmounts
      map.remove();
    };
  }, []);

  return <div ref={mapContainer} style={{ height: '500px' }} />;
};

export default LeafletMap;   


// in main:
// import React from 'react';
// import LeafletMap from './LeafletMap';

// const App: React.FC = () => {
//   return (
//     <div>
//       <h1>My Leaflet Map</h1>
//       <LeafletMap />
//     </div>
//   );
// };

// export default App;

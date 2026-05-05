// App.tsx
import {
  MapContainer,
  useMap,
  WMSTileLayer,
} from "react-leaflet";
import { CRS, LatLngBounds } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

const bounds = new LatLngBounds(
  [8.0, 68.0], // southwest corner (India)
  [35.5, 97.5] // northeast corner
);

function MapInitializer() {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(bounds);
  }, [map]);
  return null;
}

const Liflet: React.FC = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        bounds={bounds}
        style={{ height: "100%", width: "100%" }}
        crs={CRS.EPSG4326}
      >
        <WMSTileLayer
        url="https://mosdac.gov.in/mapproxy/service"
        layers="osm"
        styles=""
        format="image/png"
        version="1.3.0"
        transparent={true}
      />
        {/* <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <MapInitializer />
      </MapContainer>
    </div>
  );
};

export default Liflet;
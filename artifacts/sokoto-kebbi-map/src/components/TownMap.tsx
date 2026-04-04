import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMap } from "react-leaflet";
import L from "leaflet";
import { towns, type TownStatus } from "@/data/towns";
import { statesGeoJson } from "@/data/stateBorders";
import "leaflet/dist/leaflet.css";

const STATUS_COLORS: Record<TownStatus, string> = {
  green: "#22c55e",
  yellow: "#eab308",
  red: "#ef4444",
  gray: "#9ca3af",
};

const STATUS_LABELS: Record<TownStatus, string> = {
  green: "Low Risk",
  yellow: "Cautious Risk",
  red: "High Risk",
  gray: "Unknown",
};

function createMarkerIcon(status: TownStatus): L.DivIcon {
  const color = STATUS_COLORS[status];
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
      <circle cx="11" cy="11" r="9" fill="${color}" stroke="white" stroke-width="2.5" />
    </svg>
  `;
  return L.divIcon({
    html: svg,
    className: "",
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    popupAnchor: [0, -14],
  });
}

const stateBorderStyle: L.PathOptions = {
  color: "#ffffff",
  weight: 2.5,
  opacity: 0.9,
  fillColor: "#ffffff",
  fillOpacity: 0.06,
  dashArray: "6 4",
};

function onEachStateFeature(feature: GeoJSON.Feature, layer: L.Layer) {
  if (feature.properties?.name) {
    (layer as L.Path).bindTooltip(feature.properties.name as string, {
      permanent: true,
      direction: "center",
      className: "state-label",
    });
  }
}

function InvalidateSizeOnMount() {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => map.invalidateSize(), 100);
  }, [map]);
  return null;
}

export default function TownMap() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative", margin: 0, padding: 0 }}>
      <MapContainer
        center={[12.4, 4.8]}
        zoom={8}
        style={{ width: "100%", height: "100%" }}
        zoomControl={true}
        attributionControl={true}
      >
        <InvalidateSizeOnMount />

        {/* Satellite base — ESRI World Imagery */}
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics"
          maxZoom={19}
        />

        {/* Road & label overlay */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          maxZoom={19}
          opacity={0.85}
        />

        {/* State boundary outlines */}
        <GeoJSON
          data={statesGeoJson}
          style={stateBorderStyle}
          onEachFeature={onEachStateFeature}
        />

        {/* Town markers */}
        {towns.map((town) => (
          <Marker
            key={town.name}
            position={[town.lat, town.lng]}
            icon={createMarkerIcon(town.status)}
          >
            <Popup>
              <div style={{ fontFamily: "sans-serif", minWidth: 150 }}>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>
                  {town.name}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: STATUS_COLORS[town.status],
                      border: "1.5px solid #fff",
                      boxShadow: "0 0 0 1px rgba(0,0,0,0.15)",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 13, color: "#374151" }}>
                    {STATUS_LABELS[town.status]}
                  </span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Floating legend */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          right: 16,
          zIndex: 1000,
          background: "rgba(15, 23, 42, 0.88)",
          backdropFilter: "blur(6px)",
          borderRadius: 10,
          padding: "12px 16px",
          color: "#f1f5f9",
          fontFamily: "sans-serif",
          fontSize: 13,
          boxShadow: "0 4px 20px rgba(0,0,0,0.45)",
          minWidth: 180,
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#94a3b8",
            marginBottom: 10,
          }}
        >
          Town Status
        </div>
        {(Object.entries(STATUS_LABELS) as [TownStatus, string][]).map(
          ([status, label]) => (
            <div
              key={status}
              style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 7 }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 13,
                  height: 13,
                  borderRadius: "50%",
                  background: STATUS_COLORS[status],
                  border: "2px solid rgba(255,255,255,0.25)",
                  flexShrink: 0,
                }}
              />
              <span style={{ color: "#e2e8f0" }}>{label}</span>
            </div>
          )
        )}
        <div
          style={{
            marginTop: 12,
            paddingTop: 10,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 22,
              height: 2,
              background: "rgba(255,255,255,0.7)",
              borderTop: "2px dashed rgba(255,255,255,0.7)",
            }}
          />
          <span style={{ fontSize: 12, color: "#94a3b8" }}>State boundary</span>
        </div>
      </div>

      <style>{`
        .state-label {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          color: rgba(255,255,255,0.75) !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          letter-spacing: 0.06em !important;
          text-transform: uppercase !important;
          text-shadow: 0 1px 3px rgba(0,0,0,0.8), 0 0 6px rgba(0,0,0,0.6) !important;
          pointer-events: none !important;
        }
        .state-label::before { display: none !important; }
      `}</style>
    </div>
  );
}

import type { GeoJsonObject } from "geojson";

// Simplified polygon boundaries for Sokoto and Kebbi states (Nigeria)
// Coordinates are [longitude, latitude] as required by GeoJSON spec
export const statesGeoJson: GeoJsonObject = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Sokoto State" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [4.65, 12.05],
            [4.95, 11.90],
            [5.30, 11.82],
            [5.70, 11.90],
            [6.10, 12.05],
            [6.50, 12.18],
            [6.82, 12.45],
            [7.05, 12.82],
            [7.08, 13.25],
            [7.00, 13.65],
            [6.75, 13.90],
            [6.30, 14.00],
            [5.90, 13.90],
            [5.50, 13.78],
            [5.05, 13.68],
            [4.65, 13.50],
            [4.48, 13.18],
            [4.50, 12.72],
            [4.58, 12.35],
            [4.65, 12.05],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "Kebbi State" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [3.58, 11.48],
            [3.72, 11.05],
            [4.00, 10.60],
            [4.30, 10.42],
            [4.68, 10.42],
            [5.05, 10.58],
            [5.38, 10.90],
            [5.55, 11.30],
            [5.60, 11.72],
            [5.48, 12.02],
            [5.20, 12.25],
            [4.90, 12.40],
            [4.62, 12.55],
            [4.45, 12.80],
            [4.15, 12.90],
            [3.85, 12.85],
            [3.62, 12.62],
            [3.50, 12.25],
            [3.48, 11.92],
            [3.55, 11.68],
            [3.58, 11.48],
          ],
        ],
      },
    },
  ],
} as GeoJsonObject;

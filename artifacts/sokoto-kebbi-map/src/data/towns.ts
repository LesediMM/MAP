export type TownStatus = "green" | "yellow" | "red" | "gray";

export interface Town {
  name: string;
  lat: number;
  lng: number;
  status: TownStatus;
}

// ============================================================
// TOWN DATA — ADD YOUR TOWNS HERE
// Each entry must follow this format:
//   { name: "Town Name", lat: 12.345, lng: 4.567, status: "green" }
//
// Status values:
//   "green"  → Secure / Clear
//   "yellow" → Caution
//   "red"    → Danger
//   "gray"   → Unknown / Pending
//
// To find lat/lng for a town:
//   1. Go to https://www.google.com/maps
//   2. Search for the town name (e.g. "Sokoto, Nigeria")
//   3. Right-click on the exact spot → the coordinates appear at the top of the menu
//   4. Click them to copy: first number is Latitude, second is Longitude
//   Alternatively, use https://www.latlong.net and search by place name.
// ============================================================

export const towns: Town[] = [
  // --- Sokoto State ---
  { name: "Sokoto", lat: 13.0059, lng: 5.2476, status: "green" },
  { name: "Tambuwal", lat: 12.4047, lng: 4.6467, status: "yellow" },
  { name: "Wurno", lat: 13.2931, lng: 5.4219, status: "red" },

  // --- Kebbi State ---
  { name: "Birnin Kebbi", lat: 12.4539, lng: 4.1975, status: "green" },
  { name: "Argungu", lat: 12.7405, lng: 4.5237, status: "gray" },
];

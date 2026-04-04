// ============================================================
// HOW TO ADD / UPDATE TOWNS
// ============================================================
//
// This is the ONLY file you need to edit to change what appears
// on the map. Add or update entries in the `towns` array below.
//
// Each town follows this exact format:
//
//   { name: "Binji", lat: 13.2167, lng: 4.9167, status: "red" }
//
// Fields:
//   name   — Display name shown in the marker popup.
//   lat    — Latitude (decimal degrees). North of the equator = positive.
//   lng    — Longitude (decimal degrees). East of the prime meridian = positive.
//   status — One of exactly four strings (see key below).
//
// Status key:
//   "green"  → Low Risk
//   "yellow" → Cautious Risk
//   "red"    → High Risk
//   "gray"   → Unknown
//
// How to find lat/lng for a town:
//   Option A — Google Maps:
//     1. Go to https://www.google.com/maps
//     2. Search for the town (e.g. "Binji, Sokoto, Nigeria")
//     3. Right-click the exact point on the map
//     4. The first item in the menu shows the coordinates — click to copy
//        (first number = Latitude, second = Longitude)
//
//   Option B — LatLong.net:
//     1. Go to https://www.latlong.net
//     2. Type the place name and click Find
//
// Workflow reminder:
//   Edit this file → save → commit → push to GitHub →
//   Render auto-deploys → map updates on the live site.
// ============================================================

export type TownStatus = "green" | "yellow" | "red" | "gray";

export interface Town {
  name: string;
  lat: number;
  lng: number;
  status: TownStatus;
}

export const towns: Town[] = [
  // ── Sokoto State ──────────────────────────────────────────
  { name: "Sokoto",   lat: 13.0059, lng: 5.2476, status: "green"  },
  { name: "Tambuwal", lat: 12.4047, lng: 4.6467, status: "yellow" },
  { name: "Wurno",    lat: 13.2931, lng: 5.4219, status: "red"    },

  // ── Kebbi State ───────────────────────────────────────────
  { name: "Birnin Kebbi", lat: 12.4539, lng: 4.1975, status: "green" },
  { name: "Argungu",      lat: 12.7405, lng: 4.5237, status: "gray"  },

  // Add more towns here ↓
  // { name: "Binji", lat: 13.2167, lng: 4.9167, status: "red" },
];

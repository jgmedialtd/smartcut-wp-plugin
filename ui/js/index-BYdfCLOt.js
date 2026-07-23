import { d as f, o as C, c as Z, g as v, b, x as o } from "./vendor-vue-CeWGZ1lm.js";
const A = {
  // Arrows & chevrons
  "arrow-down": { stroke: '<path d="M12 4V20"/><path d="M6 14 12 20 18 14"/>' },
  "chevron-down": { stroke: '<path d="M5 9 12 16 19 9"/>' },
  "chevron-left": { stroke: '<path d="M15 5 8 12 15 19"/>' },
  "chevron-right": { stroke: '<path d="M9 5L16 12L9 19"/>' },
  // Editing & files
  pencil: { stroke: '<path d="M4 20 5 16 16 5 19 8 8 19Z"/><path d="M14 7 17 10"/>' },
  copy: { stroke: '<rect x="8" y="8" width="11" height="12"/><path d="M5 16V4H15"/>' },
  trash: { stroke: '<path d="M10 6.8 L10 4 A1 1 0 0 1 11 3 L13 3 A1 1 0 0 1 14 4 L14 6.8"/><path d="M3.5 7 L20.5 7"/><path d="M5 7 L6.5 19 A1.5 1.5 0 0 0 8 20.5 L16 20.5 A1.5 1.5 0 0 0 17.5 19 L19 7"/><path d="M10 10.5 L10 17"/><path d="M14 10.5 L14 17"/>' },
  scissors: { stroke: '<circle cx="6" cy="7.5" r="2.5"/><circle cx="6" cy="16.5" r="2.5"/><path d="M8.2 8.8 19 16"/><path d="M8.2 15.2 19 8"/>' },
  file: { stroke: '<path d="M13 3H6V21H18V8L13 3Z"/><path d="M13 3V8H18"/>' },
  list: { stroke: '<path d="M4 7H6"/><path d="M9 7H20"/><path d="M4 12H6"/><path d="M9 12H20"/><path d="M4 17H6"/><path d="M9 17H20"/>' },
  tag: { stroke: '<path d="M4 4H11L20 13 13 20 4 11Z"/><circle cx="8" cy="8" r="1"/>' },
  // Controls & UI
  plus: { stroke: '<path d="M12 6V18"/><path d="M6 12H18"/>' },
  minus: { stroke: '<path d="M5 12H19"/>' },
  close: { stroke: '<path d="M6 6 18 18"/><path d="M18 6 6 18"/>' },
  check: { stroke: '<path d="M5 13 10 18 19 6"/>' },
  search: { stroke: '<circle cx="10" cy="10" r="6"/><path d="M15 15 20 20"/>' },
  filter: { stroke: '<path d="M4 5H20L14 12V19L10 21V12L4 5Z"/>', solid: '<path d="M4 5H20L14 12V20L10 22V12L4 5Z"/>' },
  sliders: { stroke: '<path d="M4 8H20"/><path d="M4 16H20"/><circle cx="9" cy="8" r="3" fill="currentColor" stroke="none"/><circle cx="15" cy="16" r="3" fill="currentColor" stroke="none"/>' },
  eye: { stroke: '<path d="M2 12 C5.5 3 18.5 3 22 12 C19 21 5.5 21 2 12 Z"/><circle cx="12" cy="12" r="3"/>' },
  play: { stroke: '<path d="M7 5 19 12 7 19Z"/>', solid: '<path d="M7 5 19 12 7 19Z"/>' },
  menu: { stroke: '<path d="M4 7H20"/><path d="M4 12H20"/><path d="M4 17H20"/>' },
  grid: { stroke: '<rect x="2" y="2" width="8" height="8"/><rect x="14" y="2" width="8" height="8"/><rect x="2" y="14" width="8" height="8"/><rect x="14" y="14" width="8" height="8"/>' },
  clock: { stroke: '<circle cx="12" cy="12" r="9"/><path d="M12 7V12L15 14"/>' },
  bolt: { stroke: '<path d="M13 2 5 13H11L9 22 19 10H13Z"/>' },
  // People & security
  users: { stroke: '<circle cx="9" cy="8" r="4"/><path d="M3 19C3 15 15 15 15 19"/><path d="M16 5A4 4 0 0 1 16 12"/><path d="M17 15C20 16 21 17 21 19"/>' },
  "shield-check": { stroke: '<path d="M12 3 20 6V12C20 17 16 20 12 21 8 20 4 17 4 12V6Z"/><path d="M9 12 11 15 16 10"/>' },
  // Data, charts & domain-generic
  table: { stroke: '<rect x="4" y="5" width="16" height="14"/><path d="M4 10H20"/><path d="M4 15H20"/><path d="M10 5V19"/>' },
  "chart-column": { stroke: '<path d="M4 4V20H20"/><path d="M8 17V12"/><path d="M12 17V9"/><path d="M16 17V6"/>' },
  "chart-line": { stroke: '<path d="M4 4V20H20"/><path d="M7 15 11 10 14 13 19 7"/>' },
  database: { stroke: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6V18C5 19.7 8 21 12 21 16 21 19 19.7 19 18V6"/><path d="M5 12C5 13.7 8 15 12 15 16 15 19 13.7 19 12"/>' },
  algorithm: { stroke: '<circle cx="18.5" cy="5.5" r="1.8"/><circle cx="17.5" cy="18.5" r="1.8"/><circle cx="5.5" cy="7.5" r="1.8"/><circle cx="8" cy="17" r="1.8"/><path d="M6.5 9 L8 15"/><path d="M7.5 7 L16.5 5.5"/><path d="M18.5 7.5 L17.5 16.5"/><path d="M16 17.5 L10 17"/><path d="M9.5 15.5 L17 7"/>' },
  flask: { stroke: '<path d="M9 3H15"/><path d="M10 3V9L5 19A1 1 0 0 0 6 21H18A1 1 0 0 0 19 19L14 9V3"/><path d="M8 15H16"/>' },
  rocket: { stroke: '<path d="M12 3C16 6 16 12 14 16H10C8 12 8 6 12 3Z"/><circle cx="12" cy="9" r="2"/><path d="M10 16 7 19 9 20"/><path d="M14 16 17 19 15 20"/>' },
  terminal: { stroke: '<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M7 9 10 12 7 15"/><path d="M12 15H16"/>' },
  // Places & navigation
  home: { stroke: '<path d="M3 11 L12 3 L21 11"/><path d="M5 9.5 L5 20 L19 20 L19 9.5"/><path d="M10 20 L10 14 L14 14 L14 20"/>' },
  map: { stroke: '<path d="M9 4 3 6V20L9 18 15 20 21 18V4L15 6 9 4Z"/><path d="M9 4V18"/><path d="M15 6V20"/>' },
  gauge: { stroke: '<path d="M3.5 16 A9 9 0 1 1 20.5 16"/><path d="M12 13 L16 9"/><circle cx="12" cy="13" r="1.5"/>' },
  api: { stroke: '<circle cx="18.5" cy="5.5" r="1.8"/><circle cx="5.5" cy="18.5" r="1.8"/><circle cx="12" cy="12" r="1.8"/><path d="M7 17 L10.5 13.5"/><path d="M13.5 10.5 L17 7"/>' }
}, z = {
  // Chevrons
  "chevron-up": { stroke: '<path d="M5 15 12 8 19 15"/>' },
  "chevrons-left": { stroke: '<path d="M12 6 6 12 12 18"/><path d="M18 6 12 12 18 18"/>' },
  "chevrons-right": { stroke: '<path d="M12 6 18 12 12 18"/><path d="M6 6 12 12 6 18"/>' },
  // Arrows
  "arrow-left": { stroke: '<path d="M20 12H4"/><path d="M10 6 4 12 10 18"/>' },
  "arrow-right": { stroke: '<path d="M4 12H20"/><path d="M14 6 20 12 14 18"/>' },
  "arrow-up": { stroke: '<path d="M12 20V4"/><path d="M6 10 12 4 18 10"/>' },
  // Bracket / door navigation (house names)
  login: { stroke: '<path d="M3 12H14"/><path d="M10 8 14 12 10 16"/><path d="M16 5H20V19H16"/>' },
  logout: { stroke: '<path d="M10 12H21"/><path d="M17 8 21 12 17 16"/><path d="M13 5H6V19H13"/>' },
  download: { stroke: '<path d="M12 3V15"/><path d="M7 10 12 15 17 10"/><path d="M4 16V20H20V16"/>' },
  "external-link": { stroke: '<path d="M11 5H6V19H19V14"/><path d="M13 11 20 4"/><path d="M14 4H20V10"/>' },
  // Double-headed and rotate arrows
  "arrows-horizontal": { stroke: '<path d="M3 12H21"/><path d="M6 9 3 12 6 15"/><path d="M18 9 21 12 18 15"/>' },
  "arrows-vertical": { stroke: '<path d="M12 3V21"/><path d="M9 6 12 3 15 6"/><path d="M9 18 12 21 15 18"/>' },
  move: { stroke: '<path d="M12 2V22"/><path d="M2 12H22"/><path d="M9 5 12 2 15 5"/><path d="M9 19 12 22 15 19"/><path d="M5 9 2 12 5 15"/><path d="M19 9 22 12 19 15"/>' },
  rotate: { stroke: '<path d="M4 12 A8 8 0 0 1 18 7"/><path d="M18 2.5 L18 7"/><path d="M20 12 A8 8 0 0 1 6 17"/><path d="M6 21.5 L6 17"/>' },
  repeat: { stroke: '<path d="M17 2 21 6 17 10"/><path d="M3 11V10A4 4 0 0 1 7 6H21"/><path d="M7 22 3 18 7 14"/><path d="M21 13V14A4 4 0 0 1 17 18H3"/>' },
  refresh: { stroke: '<path d="M21 12A9 9 0 1 1 12 3C14.5 3 16.9 4 18.7 5.7L21 8"/><path d="M21 3V8H16"/>' },
  swap: { stroke: '<path d="M4 9H19"/><path d="M16 6 19 9 16 12"/><path d="M20 15H5"/><path d="M8 12 5 15 8 18"/>' },
  // Sort
  sort: { stroke: '<path d="M6 9 12 4 18 9"/><path d="M6 15 12 20 18 15"/>' },
  "sort-up": { stroke: '<path d="M4 18 12 6 20 18Z"/>', solid: '<path d="M4 18 12 6 20 18Z"/>' },
  "sort-down": { stroke: '<path d="M4 6 12 18 20 6Z"/>', solid: '<path d="M4 6 12 18 20 6Z"/>' },
  // Undo / redo
  undo: { stroke: '<path d="M9 14 4 9 9 4"/><path d="M4 9H15A4 4 0 1 1 15 17H14"/>' },
  redo: { stroke: '<path d="M15 14 20 9 15 4"/><path d="M20 9H9A4 4 0 1 0 9 17H10"/>' }
}, S = {
  expand: { stroke: '<path d="M4 9V4H9"/><path d="M20 9V4H15"/><path d="M4 15V20H9"/><path d="M20 15V20H15"/>' },
  fit: { stroke: '<path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/>' },
  "plus-large": { stroke: '<path d="M12 4V20"/><path d="M4 12H20"/>' },
  "filter-list": { stroke: '<path d="M4 7H20"/><path d="M6 12H18"/><path d="M9 17H15"/>' },
  dots: { stroke: '<circle cx="5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="19" cy="12" r="1.2"/>' },
  stop: { stroke: '<rect x="6" y="6" width="12" height="12" rx="2"/>' },
  shapes: { stroke: '<path d="M7 3.5 L3.5 9.5 L10 9.5 Z"/><rect x="14.5" y="3.5" width="6" height="6"/><circle cx="12" cy="16.5" r="4"/>' },
  layers: { stroke: '<path d="M12 4L4 8l8 4 8-4-8-4z"/><path d="M4 12l8 4 8-4M4 16l8 4 8-4"/>' },
  "layer-group": { stroke: '<path d="M12 4 L21.5 9 L12 14 L2.5 9 Z"/><path d="M2.5 13 L12 18 L21.5 13"/>' },
  "grid-large": { stroke: '<rect x="4" y="5" width="16" height="14"/><path d="M4 12H20"/><path d="M12 5V19"/>' },
  "list-check": { stroke: '<path d="M10 7H20"/><path d="M10 17H20"/><path d="M3 7 4.5 8.5 7 5.5"/><path d="M3 16 4.5 17.5 7 14.5"/>' },
  "clipboard-list-check": { stroke: '<rect x="6" y="4" width="12" height="16" rx="1"/><path d="M9 5V3.5A1 1 0 0 1 10 2.5H14A1 1 0 0 1 15 3.5V5"/><path d="M9 10L10.5 11.5 13 9"/><path d="M9 15L10.5 16.5 13 14"/>' },
  "square-dashed": { stroke: '<path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/><path d="M11 4h2M11 20h2M4 11v2M20 11v2"/>' },
  note: { stroke: '<path d="M13 20l7-7"/><path d="M13 20v-5a1 1 0 0 1 1-1h6V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7z"/>' },
  pulse: { stroke: '<path d="M3 12h4l2-7 4 14 2-7h6"/>' }
}, $ = {
  "file-lines": { stroke: '<path d="M13 3H6V21H18V8L13 3Z"/><path d="M13 3V8H18"/><path d="M9 12H15"/><path d="M9 15H15"/><path d="M9 18H13"/>' },
  "file-pdf": { stroke: '<path d="M13 3 L6 3 L6 21 L18 21 L18 8 L13 3 Z"/><path d="M13 3 L13 8 L18 8"/><rect x="9" y="12" width="6" height="6"/>' },
  "file-plus": { stroke: '<path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/><path d="M12 11v6M9 14h6"/>' },
  "file-import": { stroke: '<path d="M10 3 L4 3 L4 21 L16 21 L16 9 L10 3 Z"/><path d="M10 3 L10 9 L16 9"/><path d="M21 15 L10 15"/><path d="M13 12 L10 15 L13 17.5"/>' },
  "file-export": { stroke: '<path d="M10 3 L4 3 L4 21 L16 21 L16 9 L10 3 Z"/><path d="M10 3 L10 9 L16 9"/><path d="M14 15 L22 15"/><path d="M19 12 L22 15 L19 17.5"/>' },
  files: { stroke: '<path d="M14 7H9V21H19V12L14 7Z"/><path d="M14 7V12H19"/><path d="M6 17V3H15V5"/>' },
  folder: { stroke: '<path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>' },
  "folder-tree": { stroke: '<path d="M7.5 9.5 L7.5 17.5 L13 17.5"/><rect x="3" y="3.5" width="9" height="6"/><rect x="13" y="14.5" width="8" height="6"/>' },
  save: { stroke: '<path d="M5 5H16L19 8V19H5Z"/><path d="M8 5V9H15V5"/><rect x="8" y="13" width="8" height="6"/>' },
  upload: { stroke: '<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/><path d="M7 9l5-5 5 5M12 4v12"/>' },
  share: { stroke: '<path d="M6 11V20H18V11"/><path d="M12 3V14"/><path d="M8 7 12 3 16 7"/>' },
  link: { stroke: '<path d="M9 15l6-6"/><path d="M11 6l.5-.5a5 5 0 0 1 7 7L18 13"/><path d="M13 18l-.5.5a5 5 0 0 1-7-7L6 11"/>' },
  "cloud-up": { stroke: '<path d="M7 18a4 4 0 0 1-.9-7.9 5.5 5.5 0 0 1 10.6-1.4A4.3 4.3 0 0 1 17.5 17"/><path d="M9.5 14L12 11.5l2.5 2.5M12 11.5V21"/>' },
  "download-cloud": { stroke: '<path d="M7 18a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6-1A4 4 0 0 1 17 18"/><path d="M12 12v6m-2.5-2.5L12 18l2.5-2.5"/>' },
  window: { stroke: '<rect x="3" y="5" width="18" height="14"/><path d="M3 9H21"/>' },
  browser: { stroke: '<rect x="3" y="5" width="18" height="14"/><path d="M3 9H21"/><path d="M7 6.5V9"/><path d="M10 6.5V9"/>' },
  book: { stroke: '<path d="M5 4H17A2 2 0 0 1 19 6V20H7A2 2 0 0 1 5 18Z"/><path d="M5 18A2 2 0 0 1 7 16H19"/>' },
  newspaper: { stroke: '<path d="M4 5 L21 5 L21 19 L5 19 A1 1 0 0 1 4 18 Z"/><path d="M16 9 L18 9"/><path d="M16 12 L18 12"/><path d="M7 16 L19 16"/><rect x="7" y="8" width="6" height="4"/>' },
  rectangle: { stroke: '<rect x="3" y="6" width="18" height="12"/>' },
  cards: { stroke: '<rect x="4" y="9" width="16" height="10"/><path d="M6 6H18"/><path d="M8 3H16"/>' }
}, E = {
  // Circled status
  "circle-info": { stroke: '<rect fill="currentColor" stroke="none" x="10.5" y="10.5" width="3" height="7.5"/><rect fill="currentColor" stroke="none" x="10.5" y="6" width="3" height="3"/><circle cx="12" cy="12" r="9"/>' },
  "circle-check": { stroke: '<circle cx="12" cy="12" r="9"/><path d="M8 12 11 15 16 9"/>' },
  "circle-xmark": { stroke: '<circle cx="12" cy="12" r="9"/><path d="M9 9 15 15"/><path d="M15 9 9 15"/>' },
  "circle-alert": { stroke: '<circle cx="12" cy="12" r="9"/><path d="M12 7V13"/><path d="M12 15V17"/>' },
  "triangle-warning": { stroke: '<path d="M12 3.5 L21 20.5 L3 20.5 Z"/><path d="M12 9 L12 13"/><path d="M12 16.5 L12 18"/>' },
  // Notifications
  bell: { stroke: '<path d="M6 10A6 6 0 0 1 18 10V16H6Z"/><path d="M10 18A2 2 0 0 0 14 18"/><path d="M12 2V4"/>' },
  "bell-slash": { stroke: '<path d="M6 10A6 6 0 0 1 18 10V16H6Z"/><path d="M10 18A2 2 0 0 0 14 18"/><path d="M12 2V4"/><path d="M3 3 21 21"/>' },
  // Communication
  comment: { stroke: '<path d="M4 5H20V16H12L7 20V16H4Z"/>' },
  chat: { stroke: '<path d="M21 14a3 3 0 0 1-3 3H8l-4 3.5V6a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3z"/>' },
  messages: { stroke: '<path d="M2 2.5 L13 2.5 L13 9.5 L7 9.5 L3 13 L3 9.5 L2 9.5 Z"/><path d="M11 12.5 L22 12.5 L22 19.5 L21 19.5 L21 22.5 L18 19.5 L11 19.5 Z"/>' },
  envelope: { stroke: '<rect x="3" y="6" width="18" height="12"/><path d="M3 7 12 13 21 7"/>' },
  send: { stroke: '<path d="M21 4 3 11 10 13 13 20Z"/><path d="M10 13 21 4"/>' },
  // Feedback
  "thumbs-up": { stroke: '<path d="M7 10 11 3A2 2 0 0 1 13 5V9H19A2 2 0 0 1 21 11L19 18A2 2 0 0 1 17 20H7Z"/><rect x="3" y="10" width="4" height="10"/>' },
  star: { stroke: '<path d="M12 3 L15 9 L21 10 L17 15 L18 21 L12 18 L6 21 L8 15 L3 10 L9 9 Z"/>' },
  heart: { stroke: '<path d="M12 20s-7-4.6-7-9.6A3.4 3.4 0 0 1 12 8a3.4 3.4 0 0 1 7 2.4c0 5-7 9.6-7 9.6z"/>' },
  sparkles: { stroke: '<path d="M10 8 L12 13 L18 15 L12 17 L10 22 L8 17 L3 15 L8 13 Z"/><path d="M18 2 L20 5 L22 6 L20 7 L18 10 L17 7 L14 6 L17 5 Z"/>' },
  // Bug & debug
  bug: { stroke: '<path d="M8 11 A4 4 0 0 1 16 11 L16 15 A4 4 0 0 1 8 15 Z"/><path d="M9.5 5.5 L10.5 7.5"/><path d="M14.5 5.5 L13.5 7.5"/><path d="M8 12 L4 12"/><path d="M16 12 L20 12"/><path d="M8 16 L5 18"/><path d="M16 16 L19 18"/><path d="M8.5 9 L6.5 7.5"/><path d="M15.5 9 L17.5 7.5"/>' },
  // Misc visual accents
  "eye-slash": { stroke: '<path d="M2 12 C5.5 3 18.5 3 22 12 C18.5 21 5.5 21 2 12 Z"/><path d="M4 4 L20 20"/><circle cx="12" cy="12" r="3"/>' },
  sparkle: { stroke: '<path d="M12 3l1.9 5.6L20 10l-6.1 1.4L12 17l-1.9-5.6L4 10l6.1-1.4z"/>' },
  circle: { stroke: '<circle cx="12" cy="12" r="9"/>' },
  "circle-dot": { stroke: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/>' }
}, N = {
  user: { stroke: '<circle cx="12" cy="8" r="4"/><path d="M5 20C5 15 19 15 19 20"/>' },
  "user-shield": { stroke: '<circle cx="10" cy="7" r="3"/><path d="M4 19C4 14.5 13 14.5 13 18"/><path d="M18 11 21 12V15C21 17 20 18 18 19 16 18 15 17 15 15V12Z"/>' },
  admin: { stroke: '<circle cx="9" cy="7.5" r="3.5"/><path d="M3.5 19C3.5 14.5 11.5 14.5 11.5 17"/><circle cx="17" cy="16" r="2.5"/><path d="M19.5 16 20.7 16"/><path d="M18.25 18.16 18.85 19.2"/><path d="M15.75 18.16 15.15 19.2"/><path d="M14.5 16 13.3 16"/><path d="M15.75 13.84 15.15 12.8"/><path d="M18.25 13.84 18.85 12.8"/>' },
  group: { stroke: '<circle cx="8" cy="8.5" r="3"/><circle cx="17" cy="10.5" r="2.4"/><path d="M3.5 19c.5-3.5 2-5 4.5-5s4 1.5 4.5 5"/><path d="M14.5 18c.4-2.6 1.3-3.8 2.5-3.8s2.1 1.2 2.5 3.8"/>' },
  "shield-keyhole": { stroke: '<path d="M12 3 20 6V12C20 17 16 20 12 21 8 20 4 17 4 12V6Z"/><circle cx="12" cy="11" r="2"/><path d="M12 13V16"/>' },
  lock: { stroke: '<rect x="5" y="10" width="14" height="11"/><path d="M8 10V7A4 4 0 0 1 16 7V10"/><path d="M12 14V17"/>' },
  key: { stroke: '<circle cx="8" cy="8" r="4"/><path d="M11 11 20 20"/><path d="M17 17 19 15"/><path d="M15 15 17 13"/>' },
  building: { stroke: '<rect x="5" y="3" width="14" height="18"/><path d="M8 7H10"/><path d="M14 7H16"/><path d="M8 11H10"/><path d="M14 11H16"/><path d="M10 21V16H14V21"/>' }
}, O = {
  edit: { stroke: '<path d="M21 6.5 L12.5 16 L7 17 L7.5 11.5 L16 2.5 Z"/><path d="M12.5 5.5 L3 5.5 L3 21 L19.5 21 L19.5 8.5"/><path d="M11.5 16 L7.5 12.5"/>' },
  eraser: { stroke: '<path d="M6 16 L15.5 6 L21.5 11.5 L13.5 20.5 L10.5 20 Z"/><path d="M13 9 L18.5 14"/><path d="M3.5 20.5 L20.5 20.5"/>' },
  settings: { stroke: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/>' },
  palette: { stroke: '<path d="M12 3A9 9 0 0 0 12 21 2 2 0 0 0 12 17 2 2 0 0 1 14 13H17A4 4 0 0 0 21 9 9 9 0 0 0 12 3Z"/><circle cx="8" cy="9" r="1"/><circle cx="12" cy="7" r="1"/><circle cx="16" cy="9" r="1"/>' },
  code: { stroke: '<path d="M9 8 5 12 9 16"/><path d="M15 8 19 12 15 16"/><path d="M13 6 11 18"/>' },
  calculator: { stroke: '<path d="M8.5 13 L10.5 13"/><path d="M14 13 L15.5 13"/><path d="M8.5 17 L10.5 17"/><path d="M14 17 L15.5 17"/><rect x="4.5" y="3" width="15" height="18"/><rect x="8" y="6" width="8" height="3.5"/>' },
  toolbox: { stroke: '<path d="M8 8 L8 5 L16 5 L16 8"/><path d="M3 13 L10 13"/><rect x="3" y="8" width="18" height="11"/><rect x="10" y="11" width="4" height="4"/><path d="M14 13 L21 13"/>' },
  cursor: { stroke: '<path d="M4 3 L4 18 L8 14 L11.5 21.5 L14.5 20.5 L10.5 12.5 L16 12 Z"/>' },
  "input-numeric": { stroke: '<path d="M7.5 15 L7.5 9 L6 10.5"/><path d="M11.5 9 L14 9 L14 12 L11.5 12 L11.5 15 L14 15"/><rect x="3" y="6" width="18" height="12"/>' }
}, _ = {
  image: { stroke: '<path d="M3 18.5 L9 13.5 L13 16.5 L17 12.5 L21 16.5"/><rect x="3" y="3.5" width="18" height="17.5"/><circle cx="8" cy="8" r="2"/>' },
  pause: { stroke: '<path d="M8 5V19"/><path d="M16 5V19"/>', solid: '<rect x="7" y="5" width="4" height="14"/><rect x="13" y="5" width="4" height="14"/>' },
  mobile: { stroke: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M10 18H14"/>' },
  phone: { stroke: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>' },
  mouse: { stroke: '<rect x="4" y="2" width="16" height="20" rx="8"/><path d="M12 2V11"/><path d="M4 11H20"/>' },
  microchip: { stroke: '<rect x="7" y="7" width="10" height="10"/><path d="M10 7V4"/><path d="M14 7V4"/><path d="M10 20V17"/><path d="M14 20V17"/><path d="M7 10H4"/><path d="M7 14H4"/><path d="M20 10H17"/><path d="M20 14H17"/>' },
  server: { stroke: '<rect x="4" y="4" width="16" height="6.5" rx="1.5"/><rect x="4" y="13.5" width="16" height="6.5" rx="1.5"/><path d="M7.5 7.25h.01M7.5 16.75h.01"/>' },
  globe: { stroke: '<circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8"/><path d="M12 3a17 17 0 0 0 0 18M12 3a17 17 0 0 1 0 18"/>' },
  language: { stroke: '<circle cx="12" cy="12" r="9"/><path d="M3 12H21"/><path d="M12 3C15 6 15 18 12 21 9 18 9 6 12 3Z"/>' },
  devices: { stroke: '<rect x="2" y="4" width="13" height="10" rx="1.5"/><path d="M6 18h5"/><path d="M8.5 14v4"/><rect x="15.5" y="9" width="6.5" height="12" rx="1.8"/>' }
}, j = {
  basket: { stroke: '<path d="M8 9 L12 3"/><path d="M16 9 L12 3"/><path d="M3 9 L21 9 L19.5 20 L5 20 Z"/><path d="M9 12.5 L9 16.5"/><path d="M12 12.5 L12 16.5"/><path d="M15 12.5 L15 16.5"/>' },
  cart: { stroke: '<path d="M8 7 L21 7 L19 15 L10 15 Z"/><path d="M8 7 L7 3.5 L4 3.5"/><path d="M2 9 L5 9"/><path d="M1 12 L4 12"/><circle cx="11" cy="19" r="1.5"/><circle cx="18" cy="19" r="1.5"/>' },
  payment: { stroke: '<path d="M9.5 10 L7.5 10 A1.8 1.8 0 0 0 7.5 13 L8.5 13 A1.8 1.8 0 0 1 8.5 16 L6.5 16"/><path d="M8 7.5 L8 10"/><path d="M8 16 L8 17.5"/><path d="M12.5 10 L18.5 10"/><path d="M14 14 L18 14"/><rect x="3" y="5" width="18" height="15"/>' },
  cube: { stroke: '<path d="M12 3 20 7.5V16.5L12 21 4 16.5V7.5Z"/><path d="M4 7.5 12 12 20 7.5"/><path d="M12 12V21"/>' }
}, q = {
  pin: { stroke: '<path d="M9 11a3 3 0 1 0 6 0a3 3 0 1 0-6 0"/><path d="M17.7 16.7L13.4 20.9a2 2 0 0 1-2.8 0l-4.3-4.2a8 8 0 1 1 11.4 0z"/>' },
  flag: { stroke: '<path d="M5 21V4"/><path d="M5 4.5h11l-2 3.2 2 3.3H5"/>' },
  compass: { stroke: '<circle cx="12" cy="12" r="9"/><path d="M14.8 9.2 13 13l-3.8 1.8L11 11z"/>' },
  mountain: { stroke: '<path d="M4 19h16"/><path d="M4 16l4.5-7 3 4.5L15 7l5 9"/>' },
  tent: { stroke: '<path d="M12 4 3 19h18z"/><path d="M12 4v15"/><path d="M9.5 19 12 14l2.5 5"/>' },
  leaf: { stroke: '<path d="M5 19c0-8 6-13 14-13 0 8-5 14-13 14-1 0-1-1-1-1z"/><path d="M5.5 18.5C8.5 14.5 12 12 15.5 10.5"/>' },
  calendar: { stroke: '<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M16 3v4M8 3v4M4 11h16"/>' },
  target: { stroke: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>' },
  help: { stroke: '<path d="M12 3 2.8 19h18.4z"/><path d="M12 9.5v4"/><path d="M12 16.5v.5"/>' }
}, B = {
  ...A,
  ...z,
  ...S,
  ...$,
  ...E,
  ...N,
  ...O,
  ..._,
  ...j,
  ...q
}, I = {
  // common aliases
  cross: "close",
  xmark: "close",
  graph: "chart-line",
  chart: "chart-line",
  corpus: "database",
  // navigation aliases
  login: "login",
  logout: "logout",
  "arrow-right-to-bracket": "login",
  "right-from-bracket": "logout",
  "down-to-bracket": "download",
  "up-right-from-square": "external-link",
  "arrows-left-right": "arrows-horizontal",
  "arrows-up-down": "arrows-vertical",
  "arrows-up-down-left-right": "move",
  "arrows-rotate": "rotate",
  "arrows-retweet": "repeat",
  "arrow-rotate-right": "refresh",
  // controls aliases
  "bars-filter": "filter-list",
  "table-cells-large": "grid-large",
  // files aliases
  "floppy-disk": "save",
  "share-from-square": "share",
  "rectangle-landscape": "rectangle",
  "rectangle-history": "cards",
  "window-alt": "window",
  // editing aliases
  "pen-to-square": "edit",
  gear: "settings",
  // feedback aliases
  "circle-info": "circle-info",
  "circle-check": "circle-check",
  "circle-xmark": "circle-xmark",
  "exclamation-circle": "circle-alert",
  "triangle-exclamation": "triangle-warning",
  "paper-plane-top": "send",
  comment: "comment",
  // people aliases
  envelope: "envelope",
  // media aliases
  "mobile-alt": "mobile",
  "computer-mouse": "mouse",
  // commerce aliases
  "basket-shopping": "basket",
  "cart-shopping-fast": "cart",
  "money-check-dollar": "payment"
}, L = {
  "arrow-right-arrow-left": {
    stroke: '<path d="M4 9H19"/><path d="M16 6 19 9 16 12"/><path d="M20 15H5"/><path d="M8 12 5 15 8 18"/>'
  }
}, n = {
  "circle-small": { stroke: '<circle cx="12" cy="12" r="4"/>', solid: '<circle cx="12" cy="12" r="4"/>' }
}, k = {
  "floppy-disk-circle-arrow-right": { stroke: '<path d="M5 5 L15 5 L18 8 L18 11"/><path d="M5 5 L5 19 L10 19"/><path d="M8 5 L8 9 L14 9 L14 5"/><path d="M15 17 L19 17"/><path d="M17 15 L19 17 L17 19"/><circle cx="17" cy="17" r="4"/>' }
}, g = {
  hammer: {
    stroke: '<path d="M13 4 20 11 17 14 10 7Z"/><path d="M12 9 4 17V20H7L15 12"/>'
  },
  "spray-can": { stroke: '<path d="M17 3.5 L19 2.5"/><path d="M17 5.5 L19 5.5"/><path d="M17 7.5 L19 8.5"/><rect x="5" y="8" width="10" height="13" rx="1"/><rect x="8" y="3" width="4" height="5" rx="1"/>' },
  // Construction cone (renamed 'construction' in public API).
  "person-digging": { stroke: '<path d="M12 4 L17 17 H7 Z"/><path d="M10 12 H14"/><path d="M6 20 H18"/>' },
  // Vector draw tool icons (used by the icon editor toolbar) ───────────────────
  // Arrow/pointer cursor: SELECT tool.
  // Pen nib: PATH/bezier draw tool.
  "pen-nib": { stroke: '<path d="M12 21 L4 12 L12 3 L20 12 Z"/><path d="M12 21 V15"/><path d="M9 13 L12 15 L15 13"/>' },
  // Square anchor: CORNER point — no bezier handles, sharp change of direction.
  "anchor-corner": { stroke: '<rect x="9" y="9" width="6" height="6"/><path d="M3 12 H9"/><path d="M15 12 H21"/>' },
  // Circle anchor: SMOOTH point — bezier handles collinear, curves through the point.
  "anchor-smooth": { stroke: '<circle cx="12" cy="12" r="3"/><path d="M3 12 H9"/><path d="M15 12 H21"/>' },
  // Trim: a stock sheet with a dashed cut line marking the narrow edge strip
  // being trimmed off (dashed = cut-line convention in the diagrams).
  trim: { stroke: '<rect x="2.5" y="5" width="19" height="14"/><path d="M7 5 V8"/><path d="M7 10.5 V13.5"/><path d="M7 16 V19"/>' },
  // Hand saw: toothed blade with a closed grip — hand tools / joinery.
  "hand-saw": { stroke: '<path d="M17.5 6 H2.5 V10.5 L4.75 13 L7 10.5 L9.25 13 L11.5 10.5 L13.75 13 L16 10.5 L17.5 11.7"/><path d="M17.5 4.5 H20 A2.5 2.5 0 0 1 22.5 7 V9.5 A2.5 2.5 0 0 1 20 12 H17.5 Z"/>' },
  // Ruler: a rule with alternating long/short graduation ticks — measurement,
  // decimal & fractional units.
  ruler: { stroke: '<rect x="2" y="9" width="20" height="6"/><path d="M6 9 V12.5"/><path d="M10 9 V11.5"/><path d="M14 9 V12.5"/><path d="M18 9 V11.5"/>' }
}, x = {
  // Storefront: scalloped awning over a shop body with a centred door —
  // retail / cut-to-size counter sales.
  storefront: { stroke: '<path d="M3.5 9.5 L4.5 4.5 H19.5 L20.5 9.5"/><path d="M3.5 9.5 A2.9 2.9 0 0 0 9.17 9.5 A2.9 2.9 0 0 0 14.83 9.5 A2.9 2.9 0 0 0 20.5 9.5"/><path d="M5 13.5 V20.5 H19 V13.5"/><rect x="10.25" y="15.5" width="3.5" height="5"/>' },
  // Receipt: itemised slip with a torn zigzag bottom — quotes, estimates,
  // job costing (currency-neutral).
  receipt: { stroke: '<path d="M5 3 H19 V19.5 L16.7 21.5 L14.3 19.5 L12 21.5 L9.7 19.5 L7.3 21.5 L5 19.5 Z"/><path d="M8.5 8 H15.5"/><path d="M8.5 12 H15.5"/><path d="M8.5 16 H15.5"/>' }
}, y = {
  "rocket-launch": {
    stroke: '<path d="M12 3C16 6 16 12 14 16H10C8 12 8 6 12 3Z"/><circle cx="12" cy="9" r="2"/><path d="M10 16 7 19 9 20"/><path d="M14 16 17 19 15 20"/><path d="M9 20 8 22"/><path d="M12 21V23"/><path d="M15 20 16 22"/>'
  }
}, w = {}, m = {
  "diagram-lean-canvas": { stroke: '<path d="M9 5 L9 19"/><path d="M15 5 L15 12"/><path d="M9 12 L21 12"/><rect x="2.5" y="5" width="19" height="14"/>' },
  // Server rack with an outbound request arrow — "your server" sending a job.
  "server-out": { stroke: '<rect x="2.5" y="4" width="13" height="6.5" rx="1.5"/><rect x="2.5" y="13.5" width="13" height="6.5" rx="1.5"/><path d="M5.5 7.25h.01"/><path d="M5.5 16.75h.01"/><path d="M17.5 12 H22.5"/><path d="M20 9.5 L22.5 12 L20 14.5"/>' },
  // Server rack with an inbound arrow — "our server" receiving and running it.
  "server-in": { stroke: '<rect x="8.5" y="4" width="13" height="6.5" rx="1.5"/><rect x="8.5" y="13.5" width="13" height="6.5" rx="1.5"/><path d="M11.5 7.25h.01"/><path d="M11.5 16.75h.01"/><path d="M1.5 12 H6.5"/><path d="M4 9.5 L6.5 12 L4 14.5"/>' },
  // Browser frame with a cutting-layout split in the viewport — the widget
  // embedded in your website.
  "browser-layout": { stroke: '<rect x="2.5" y="4.5" width="19" height="15"/><path d="M2.5 8.5 H21.5"/><path d="M5 6.5h.01"/><path d="M7.5 6.5h.01"/><path d="M12 8.5 V19.5"/><path d="M12 14 H21.5"/>' },
  // Integration: external system nodes wired into a central block — API /
  // ERP / software integration.
  integration: { stroke: '<rect x="9" y="9" width="6" height="6"/><circle cx="4.5" cy="4.5" r="2"/><circle cx="19.5" cy="4.5" r="2"/><circle cx="12" cy="20.5" r="2"/><path d="M5.9 5.9 L9 9"/><path d="M18.1 5.9 L15 9"/><path d="M12 15 V18.5"/>' }
}, H = {
  // Circular saw blade: fine 12-tooth rim with a central arbor hole.
  saw: {
    stroke: '<path d="M22.5 12 19.73 14.07 21.09 17.25 17.66 17.66 17.25 21.09 14.07 19.73 12 22.5 9.93 19.73 6.75 21.09 6.34 17.66 2.91 17.25 4.27 14.07 1.5 12 4.27 9.93 2.91 6.75 6.34 6.34 6.75 2.91 9.93 4.27 12 1.5 14.07 4.27 17.25 2.91 17.66 6.34 21.09 6.75 19.73 9.93Z"/><circle cx="12" cy="12" r="2"/>'
  },
  // Raw stock: 2 boards stacked in perspective — a batch of uncut sheets.
  stock: { stroke: '<path d="M3 6.5 L21 4.5 L21 8.5 L3 10.5 Z"/><path d="M3 14.5 L21 12.5 L21 16.5 L3 18.5 Z"/>' },
  // Parts: multiple small rectangles — the individual cut pieces that come from stock.
  parts: { stroke: '<rect x="2" y="2.5" width="10" height="7" rx="1"/><rect x="15" y="2.5" width="7" height="12" rx="1"/><rect x="2" y="13" width="10" height="9" rx="1"/><rect x="15" y="18" width="7" height="4" rx="1"/>' },
  // Materials: 3 boards stacked in perspective — the raw material source at the
  // top of the hierarchy (materials → stock → parts). Board gap is 3.25u so the
  // stack stays clear of the 1px-gap floor at 16px (the old 3u spacing violated).
  materials: {
    stroke: '<path d="M3 3.5 L21 1.5 L21 5.5 L3 7.5 Z"/><path d="M3 10.75 L21 8.75 L21 12.75 L3 14.75 Z"/><path d="M3 18 L21 16 L21 20 L3 22 Z"/>'
  },
  // Offcut: an L-shaped remnant (a board with a rectangular piece removed).
  offcut: {
    stroke: '<path d="M3 4H21V13H12V20H3Z"/>'
  },
  // Beam saw: a panel on the bed with the pressure beam's clamp shoes pressed
  // down on it and the saw kerf cutting through — the signature of a panel saw.
  "beam-saw": { stroke: '<path d="M4 3 L20 3"/><path d="M7 3.5 L7 7.5"/><path d="M10 3.5 L10 7.5"/><path d="M14 3.5 L14 7.5"/><path d="M17 3.5 L17 7.5"/><path d="M12 12.5 L12 17.5"/><path d="M6 17.5 L6 21.5"/><path d="M18 17.5 L18 21.5"/><rect x="3" y="12.5" width="18" height="5" rx="1"/>' },
  // CNC machine: a gantry bridge with a spindle/tool head over the bed.
  cnc: { stroke: '<path d="M2.5 21 L21.5 21"/><path d="M5 21 L5 3 L19 3 L19 21"/><path d="M12 11 L12 17"/><rect x="9" y="6" width="6" height="5" rx="1"/>' },
  // Edge banding: a panel corner with banding applied to two adjacent edges (right angle).
  "edge-banding": { stroke: '<path d="M21 3 L21 18"/><path d="M3 21 L18 21"/><rect x="3" y="3" width="15" height="15"/>' },
  // Orientation / grain icons for OrientationButton ─────────────────────────
  // No-change: a centred dash meaning "leave as-is" in multi-edit context.
  "no-change": { stroke: '<path d="M7 12H17"/>' },
  // Horizontal grain: three horizontal parallel lines (grain runs left-right).
  "grain-h": { stroke: '<path d="M3 8H21"/><path d="M3 12H21"/><path d="M3 16H21"/>' },
  // Vertical grain: three vertical parallel lines (grain runs top-bottom).
  "grain-v": { stroke: '<path d="M8 3V21"/><path d="M12 3V21"/><path d="M16 3V21"/>' },
  // No grain: a plain panel outline — no direction set.
  "no-grain": { stroke: '<rect x="3" y="5" width="18" height="14" rx="1"/>' },
  // Planing: a hand plane riding along a board's surface.
  planing: { stroke: '<path d="M3 17.5 L19 17.5 L21.5 10 L5.5 10 Z"/><path d="M13.5 10 L15.5 7 L18.5 7"/><path d="M2.5 20.5 L22 20.5"/>' },
  // Machining: a drill bit above a workpiece.
  machining: { stroke: '<path d="M11.8 11 L11.8 14"/><rect x="6.5" y="2.5" width="10.5" height="8.5" rx="1"/><rect x="2" y="16" width="20" height="5" rx="1"/>' },
  // ── Material types ────────────────────────────────────────────────────────
  // Roll: coil seen end-on — outer ring + core hint, with the flat tongue of
  // material running out tangentially to the right.
  "mat-roll": { stroke: '<circle cx="9" cy="12" r="6"/><circle cx="9" cy="12" r="2.5"/><path d="M9 18H21"/>' },
  // Linear / bar: one long bar with two short cut ticks crossing it — a length
  // of material (extrusion, timber, tube) marked for cutting.
  "mat-bar": { stroke: '<rect x="2.5" y="10" width="19" height="4"/><path d="M9 8V16M15 8V16"/>' },
  // Sheet: a low stack of two sheets lying flush — one slab with a seam, in the
  // same shallow perspective as 'stock' (2 boards) and 'materials' (3 boards).
  "mat-sheet": { stroke: '<path d="M3 8L21 6V16L3 18Z"/><path d="M3 13L21 11"/>' },
  // ── Cutting algorithms ────────────────────────────────────────────────────
  // Linear: a single strip divided into pieces by vertical cut lines —
  // all parts are laid out along one dimension.
  "algo-linear": { stroke: '<rect x="3" y="7" width="18" height="10"/><path d="M8 7V17M13 7V17M18 7V17"/>' },
  // Free: pieces of varying sizes placed without alignment, suggesting
  // unconstrained placement optimisation.
  "algo-free": { stroke: '<rect x="3.5" y="3" width="8" height="6"/><rect x="14.5" y="3" width="6" height="7.5"/><rect x="3.5" y="13" width="5.5" height="7.5"/><rect x="12" y="14.5" width="9" height="6"/>' },
  // Guillotine FAST: two guillotine cuts (one full-width horizontal, one
  // vertical below it) producing 3 pieces — the minimal, fast pattern.
  "guillotine-fast": { stroke: '<path d="M3.5 13 L20.5 13"/><path d="M13 13 L13 20.5"/><rect x="3.5" y="3.5" width="17" height="17"/>' },
  // Guillotine MAX: same cut pattern as FAST; "MAX" lettered in the top strip.
  "guillotine-max": { stroke: '<path d="M3 13 L21 13"/><path d="M13 13 L13 20.5"/><path d="M5.5 10.5 L5.5 6 L7.5 8 L10 6 L10 10.5"/><path d="M10 10.5 L12.5 6 L15 10.5"/><path d="M15.5 6 L18.5 10.5"/><path d="M18.5 6 L15 10.5"/><rect x="3.5" y="3.5" width="17" height="17"/>' },
  // Nesting: two step-cuts inside a bounding rectangle create a pair of
  // interlocking L-shapes — the hallmark visual of shape nesting / bin-packing.
  "algo-nesting": { stroke: '<path d="M3.5 3.5 L12.5 3.5 L3.5 12 Z"/><circle cx="14.5" cy="13.5" r="5.5"/><path d="M3 21 L9 21 L3 15.5 Z"/>' },
  // ── Industry / process glyphs (landing pages) ─────────────────────────────
  // Factory: sawtooth-roof works building with a door — panel manufacturing at
  // industrial scale.
  factory: { stroke: '<path d="M2.5 20.5 V12 L9.5 7.5 V12 L16.5 7.5 V12 H21.5 V20.5 Z"/><rect x="6.5" y="15.5" width="4" height="5"/>' },
  // Saw cut: a spinning blade (arbor dot + motion ticks) over a panel already
  // split by the kerf — a machine mid-cut.
  "saw-cut": { stroke: '<circle cx="12" cy="7" r="4.5"/><path d="M12 7h.01"/><path d="M12 1 V2.5"/><path d="M5.5 7 H7.5"/><path d="M16.5 7 H18.5"/><path d="M15.18 3.82 L16.24 2.76"/><path d="M8.82 3.82 L7.76 2.76"/><path d="M15.18 10.18 L16.24 11.24"/><path d="M8.82 10.18 L7.76 11.24"/><rect x="2.5" y="16.5" width="19" height="5"/><path d="M12 16.5 V21.5"/>' },
  // Wood grain: a panel with two in-phase grain waves — grain/pattern direction
  // as a board property (the bare grain-h/grain-v lines stay for the
  // orientation buttons).
  "wood-grain": { stroke: '<rect x="2.5" y="5" width="19" height="14"/><path d="M2.5 10 C5.5 7.8 9 12.2 12 10 C15 7.8 18.5 12.2 21.5 10"/><path d="M2.5 14.5 C5.5 12.3 9 16.7 12 14.5 C15 12.3 18.5 16.7 21.5 14.5"/>' },
  // Part label: a printable label ticket — rounded card, a punch hole at the
  // left for the tag, and two text-line ticks standing for the part's printed
  // identity (name / dimensions). Distinct from the generic 'tag' glyph, which
  // is a swing ticket. Hole is centred 5u from the card edge and the text runs
  // start 3.5u clear of it, so every parallel run keeps its ≥1px gap at 16px.
  "part-label": {
    stroke: '<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="7" cy="12" r="1.5"/><path d="M12 10H19"/><path d="M12 14H16.5"/>'
  },
  // Move part: a part dragged into place on the sheet (drag arrow toward the
  // empty corner) — manual placement.
  "move-part": { stroke: '<rect x="2.5" y="3.5" width="19" height="17"/><rect x="6" y="7" width="5.5" height="4.5"/><path d="M13 13 L17 17"/><path d="M17 14.2 V17 H14.2"/>' }
}, u = {
  // Globe / translate.
  // Send (paper plane).
  robot: {
    // Arms moved out to clear the body by 3u (were 2u); antenna ball enlarged
    // to r1.5 so its own walls don't merge at small sizes.
    stroke: '<rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 5V8"/><circle cx="12" cy="4" r="1.5"/><path d="M9 12V13"/><path d="M15 12V13"/><path d="M9.5 16H14.5"/><path d="M2 12V15"/><path d="M22 12V15"/>'
  }
}, s = {
  xmark: "close",
  "magnifying-glass": "search",
  "pen-to-square": "edit",
  "floppy-disk": "save",
  "floppy-disk-circle-arrow-right": "save-as",
  gear: "settings",
  "arrow-right-to-bracket": "login",
  "right-from-bracket": "logout",
  "down-to-bracket": "download",
  "up-right-from-square": "external-link",
  "arrows-rotate": "rotate",
  "arrow-rotate-right": "refresh",
  "arrows-retweet": "repeat",
  "arrow-right-arrow-left": "swap",
  "arrows-left-right": "arrows-horizontal",
  "arrows-up-down": "arrows-vertical",
  "arrows-up-down-left-right": "move",
  "triangle-warning": "warning",
  "circle-info": "info",
  "circle-check": "success",
  "circle-xmark": "error",
  "circle-alert": "alert",
  bars: "menu",
  "bars-filter": "filter-list",
  "grid-horizontal": "grid",
  "table-cells-large": "grid-large",
  "person-digging": "construction",
  "input-numeric": "number-field",
  "mobile-alt": "mobile",
  "window-alt": "window",
  "share-from-square": "share",
  "rectangle-history": "cards",
  "rectangle-landscape": "rectangle",
  "computer-mouse": "mouse",
  "diagram-lean-canvas": "canvas",
  "sliders-simple": "sliders",
  "paper-plane-top": "send"
}, D = {
  ...L,
  ...n,
  ...k,
  ...g,
  ...x,
  ...y,
  ...w,
  ...m,
  ...H,
  ...u
}, p = (t) => s[t] ?? t, P = {
  ...Object.fromEntries(Object.entries(B).map(([t, e]) => [p(t), e])),
  ...Object.fromEntries(Object.entries(D).map(([t, e]) => [p(t), e]))
}, R = {
  "info-circle": "info",
  "check-circle": "success",
  "times-circle": "error",
  "exclamation-triangle": "warning",
  "triangle-exclamation": "warning",
  "exclamation-circle": "alert",
  "lock-alt": "lock",
  cut: "scissors",
  "arrow-up-right-from-square": "external-link",
  "external-link-alt": "external-link",
  "gear-solid": "settings",
  "user-solid": "user",
  sync: "rotate",
  comments: "messages",
  // Domain singular/synonyms
  material: "materials",
  part: "parts",
  "saw-blade": "saw",
  blade: "saw",
  offcuts: "offcut",
  box: "cube",
  "cnc-machine": "cnc",
  "edge-band": "edge-banding",
  "panel-saw": "beam-saw",
  "brain-circuit": "algorithm",
  wave: "hand-wave",
  // Material type aliases
  roll: "mat-roll",
  bar: "mat-bar",
  "bar-stock": "mat-bar",
  "linear-material": "mat-bar",
  sheet: "mat-sheet",
  "sheet-material": "mat-sheet",
  // Landing/industry synonyms
  shop: "storefront",
  quote: "receipt",
  "api-nodes": "integration",
  // Algorithm aliases
  "linear-algo": "algo-linear",
  "free-algo": "algo-free",
  nesting: "algo-nesting",
  "algo-guillotine-fast": "guillotine-fast",
  "algo-guillotine-max": "guillotine-max"
}, T = Object.fromEntries(
  Object.entries(s)
), Y = { ...I, ...T, ...R };
function G(t) {
  return Y[t] ?? t;
}
Object.fromEntries(
  Object.entries(s).map(([t, e]) => [e, t])
);
const F = ["smartcut-mark", "smartcut-mark-mono", "google", "youtube", "stripe", "wordpress", "homag", "biesse", "mayer"], r = (t) => Object.keys(t).map(p);
r(L), r(n), r(k), r(g), r(x), r(y), r(w), r(m), r(H), r(u), [...F];
const h = (t, e) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t}" width="1em" height="1em" fill="currentColor" aria-hidden="true">${e}</svg>`, a = {
  // SmartCut family mark — four rounded squares; the offset square is the cut
  // part sliding away. Same geometry as web/src/assets/brand/mark.svg.
  // `smartcut-mark` carries the brand colours (amber sheet + cyan cut);
  // `smartcut-mark-mono` inherits currentColor for single-ink contexts, with
  // the cut square at reduced opacity so the story survives one colour.
  "smartcut-mark": h(
    "0 0 230 230",
    '<g fill="#ffc53d"><rect x="8" y="8" width="84" height="84" rx="15"/><rect x="108" y="8" width="84" height="84" rx="15"/><rect x="8" y="108" width="84" height="84" rx="15"/></g><rect x="138" y="138" width="84" height="84" rx="15" fill="#2fb7e0"/>'
  ),
  "smartcut-mark-mono": h(
    "0 0 230 230",
    '<rect x="8" y="8" width="84" height="84" rx="15"/><rect x="108" y="8" width="84" height="84" rx="15"/><rect x="8" y="108" width="84" height="84" rx="15"/><rect x="138" y="138" width="84" height="84" rx="15" fill-opacity="0.55"/>'
  ),
  google: h(
    "0 0 488 512",
    '<path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>'
  ),
  youtube: h(
    "0 0 576 512",
    '<path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.1 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>'
  )
};
a["square-youtube"] = a.youtube;
a.smartcut = a["smartcut-mark"];
a.stripe = h(
  "0 0 384 512",
  '<path d="M155.3 154.6c0-22.3 18.6-30.9 48.4-30.9 42.8 0 96.9 13 139.7 36.1V26.6C297.4 8.5 251.1 0 203.7 0 88.1 0 0 60.4 0 161.4c0 157.9 217.8 132.7 217.8 200.8 0 26.3-22.9 34.9-54.7 34.9-46.7 0-106.3-19.1-153.5-44.9v128.1c52.3 22.5 105.2 32.1 153.5 32.1 118.6 0 211.8-46.7 211.8-148.5 0-170.2-218.9-140.4-218.9-204.3z"/>'
);
a["stripe-s"] = a.stripe;
a.wordpress = h(
  "0 0 512 512",
  '<path d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8 .9 0 1.8 .1 2.8 .2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7 .3 13.7 .3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.4-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.4-24.3 2l76.9 228.7 21.2-70.9c9.2-29.4 16.2-50.5 16.2-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14.1 1.4 22 0 21.7-4.1 46.1-16.2 76.7l-65 187.9C426.2 403.9 468.7 335 468.7 256c0-37.2-9.5-72.2-26.2-102.8zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 500.3C121.2 500.3 11.7 390.8 11.7 256S121.2 11.7 256 11.7 500.3 121.2 500.3 256 390.8 500.3 256 500.3z"/>'
);
a.homag = h(
  "0 0 200 30",
  '<path d="M161.13,18.8 L154.08,18.8 L157.65,7.4 L161.13,18.8 Z M91.94,23.1 C88.8,23.1 85.46,20.94 85.46,14.87 C85.46,8.8 88.8,6.64 91.94,6.64 C95.07,6.64 98.42,8.8 98.42,14.87 C98.42,20.94 95.07,23.1 91.94,23.1 Z M67.59,29.02 L75.2,29.02 L75.2,0.72 L67.59,0.72 L67.59,10.94 L58.09,10.94 L58.09,0.72 L50.48,0.72 L50.48,29.02 L58.09,29.02 L58.09,17.46 L67.59,17.46 L67.59,29.02 Z M133.32,29.02 L140.5,29.02 L140.5,0.72 L129.42,0.72 L124.58,19.26 L119.74,0.72 L108.66,0.72 L108.66,29.02 L115.84,29.02 L115.84,8.13 L121.68,29.02 L127.49,29.02 L133.32,8.13 L133.32,29.02 Z M164.24,29.02 L172.19,29.02 L161.5,0.72 L153.84,0.72 L143.15,29.02 L150.97,29.02 L152.76,23.99 L162.49,23.99 L164.24,29.02 Z M91.94,0.13 C87.65,0.13 84.05,1.62 81.51,4.43 C79.15,7.05 77.85,10.76 77.85,14.87 C77.85,18.98 79.15,22.69 81.51,25.31 C84.04,28.12 87.65,29.61 91.94,29.61 C96.22,29.61 99.83,28.12 102.36,25.31 C104.73,22.69 106.03,18.98 106.03,14.87 C106.03,10.76 104.72,7.05 102.36,4.43 C99.83,1.62 96.22,0.13 91.94,0.13 Z M185.99,0.13 C181.89,0.13 178.2,1.66 175.62,4.43 C173.12,7.11 171.74,10.82 171.74,14.87 C171.74,18.92 173.12,22.63 175.62,25.31 C178.2,28.08 181.89,29.61 185.99,29.61 C186.45,29.61 190.58,29.53 193.32,26.59 L193.73,26.16 L194.65,29.02 L199.21,29.02 L199.21,13.42 L187.18,13.42 L187.18,19.07 L192.23,19.07 L192.1,19.52 C191.44,21.76 189.1,23.1 185.83,23.1 C182.7,23.1 179.35,20.94 179.35,14.87 C179.35,8.8 182.7,6.64 185.83,6.64 C188.8,6.64 190.89,7.95 191.27,9.99 L198.89,9.99 C198.02,3.19 191.83,0.13 185.99,0.13 Z"/><path d="M37.26,23.21 C35.4,24.71 33.02,25.61 30.43,25.61 C24.44,25.61 19.59,20.8 19.59,14.87 C19.59,8.94 24.44,4.13 30.43,4.13 C33.02,4.13 35.4,5.03 37.26,6.53 L37.26,0.72 L19.79,0.72 L13.65,0.72 L13.65,0.72 L13.65,11.91 L7.2,11.91 L7.2,0.72 L0.62,0.72 L0.62,29.02 L7.2,29.02 L7.2,17.52 L13.65,17.52 L13.65,29.01 L13.65,29.01 L13.65,29.02 L37.26,29.02 L37.26,23.21 Z M30.43,19.8 C33.18,19.8 35.41,17.59 35.41,14.87 C35.41,12.15 33.18,9.94 30.43,9.94 C27.68,9.94 25.45,12.15 25.45,14.87 C25.45,17.59 27.68,19.8 30.43,19.8 Z"/>'
);
a.biesse = h(
  "0 0 219 65",
  '<path d="m56.966 37.417-19.879-19.85c-.878-.876-1.76-1.758-3.518-1.758H15.971a1.764 1.764 0 0 1-1.76-1.758V1.759C14.21.793 13.42 0 12.448 0H.148s-.01 0-.01.009v1.75c0 1.732.875 2.63 1.762 3.512l21.111 21.08c.879.878 1.762 1.76 3.518 1.76h17.594c.967 0 1.761.788 1.761 1.758v21.08c0 .966-.79 1.759-1.761 1.759l-33.932-.009c-1.118 0-1.677 1.347-.887 2.135L19.484 65H33.56c1.735 0 2.64-.882 3.518-1.759l19.879-19.849a4.233 4.233 0 0 0 0-5.975h.009Z"/><path d="M124.546 25.674c-8.021 0-12.714 5.373-12.714 13.803 0 8.429 4.698 13.749 12.714 13.749 6.015 0 10.66-3.11 11.924-7.956.053-.212-.16-.42-.367-.42h-4.539c-.213 0-.315.159-.422.367-1.215 2.583-2.9 3.898-6.596 3.898-5.013 0-7.439-3.264-7.439-7.743 0-.106.106-.261.261-.261h19.577a.36.36 0 0 0 .368-.368v-1.262c0-8.009-4.431-13.803-12.767-13.803v-.004Zm6.965 11.694h-14.036a.359.359 0 0 1-.368-.368c.053-3.69 2.005-7.269 7.386-7.269s7.333 3.584 7.386 7.27a.358.358 0 0 1-.368.367ZM154.304 37.373l-4.378-.687c-2.586-.42-4.17-1.262-4.17-3.264 0-2.109 1.478-3.792 5.701-3.792 4.747 0 6.543 2.263 6.543 4.638 0 .212.159.367.368.367h4.272a.36.36 0 0 0 .369-.367c0-5.64-5.067-8.59-11.557-8.59-4.645 0-10.708 2.215-10.708 7.744 0 4.319 2.794 6.48 6.964 7.114l6.122.948c3.114.474 5.013 1.315 5.013 3.69 0 2.635-2.165 4.004-6.65 4.004-4.747 0-6.912-2.423-6.912-4.532a.358.358 0 0 0-.368-.367h-4.272a.36.36 0 0 0-.368.367c0 4.846 4.326 8.59 11.924 8.59 6.65 0 11.504-2.53 11.504-8.43s-4.698-6.693-9.392-7.429l-.005-.004ZM180.738 37.373l-4.379-.687c-2.585-.42-4.169-1.262-4.169-3.264 0-2.109 1.477-3.792 5.7-3.792 4.747 0 6.544 2.263 6.544 4.638 0 .212.159.367.367.367h4.272c.214 0 .369-.159.369-.367 0-5.64-5.066-8.59-11.557-8.59-4.644 0-10.708 2.215-10.708 7.744 0 4.319 2.794 6.48 6.964 7.114l6.123.948c3.114.474 5.012 1.315 5.012 3.69 0 2.635-2.165 4.004-6.649 4.004-4.747 0-6.912-2.423-6.912-4.532a.359.359 0 0 0-.368-.367h-4.272a.36.36 0 0 0-.368.367c0 4.846 4.325 8.59 11.923 8.59 6.651 0 11.504-2.53 11.504-8.43s-4.697-6.693-9.392-7.429l-.004-.004ZM93.097 33.682c-.314-.159-.314-.42 0-.58 3.377-1.528 4.854-4.372 4.854-7.428-.053-4.74-2.902-9.852-10.816-9.852h-16.25a.359.359 0 0 0-.367.368V52.33c0 .213.16.368.368.368h16.622c7.706 0 11.237-5.059 11.237-10.011 0-3.637-1.163-7.061-5.648-9.01v.005ZM75.474 20.194c0-.212.16-.367.368-.367h10.34c4.747 0 6.752 2.476 6.752 6.427 0 3.951-2.266 5.373-6.223 5.373H75.84a.359.359 0 0 1-.368-.368V20.194ZM86.71 48.593H75.788a.359.359 0 0 1-.368-.368v-12.12c0-.212.16-.367.368-.367h11.29c4.485 0 6.703 2.316 6.703 6.533 0 4.217-2.848 6.322-7.071 6.322ZM107.928 15.822h-4.964a.367.367 0 0 0-.368.368v5.271c0 .203.164.368.368.368h4.964a.368.368 0 0 0 .368-.368V16.19a.368.368 0 0 0-.368-.368ZM107.607 26.201h-4.276a.368.368 0 0 0-.368.368v25.767c0 .203.165.367.368.367h4.276a.368.368 0 0 0 .369-.367V26.569a.368.368 0 0 0-.369-.368ZM205.697 25.674c-8.02 0-12.715 5.373-12.715 13.803 0 8.429 4.698 13.749 12.715 13.749 6.015 0 10.66-3.11 11.924-7.956.053-.212-.16-.42-.369-.42h-4.537c-.213 0-.316.159-.422.367-1.215 2.583-2.902 3.898-6.596 3.898-5.013 0-7.439-3.264-7.439-7.743 0-.106.106-.261.261-.261h19.577a.36.36 0 0 0 .368-.368v-1.262c0-8.009-4.432-13.803-12.767-13.803v-.004Zm6.965 11.694h-14.037a.358.358 0 0 1-.367-.368c.053-3.69 2.004-7.269 7.386-7.269 5.381 0 7.332 3.584 7.386 7.27 0 .212-.16.367-.368.367Z"/>'
);
a.mayer = h(
  "0 0 1321 177",
  '<path fill-rule="evenodd" d="M544.54 0.66L544.54 176.9L480.03 176.9L480.03 118.58L404.23 118.58L404.23 176.9L339.72 176.9L339.72 0.66L544.54 0.66ZM404.23 47.34L404.23 71.92L480.03 71.92L480.03 47.34L404.23 47.34Z"/><path d="M0.68 0.68L0.68 176.67L65.09 176.67L65.09 47.29L114.73 47.29L114.73 176.67L179.15 176.67L179.15 47.29L228.77 47.29L228.77 176.67L293.2 176.67L293.2 0.68L0.68 0.68Z"/><path d="M837.84 0.66L837.84 176.9L902.35 176.9L1007.03 176.9L1007.03 130.22L902.35 130.22L902.35 105.69L1007.03 105.69L1007.03 71.91L902.35 71.91L902.35 47.34L1007.03 47.34L1007.03 0.66L837.84 0.66Z"/><path fill-rule="evenodd" d="M1258.33 0.66L1258.33 118.58L1202.42 118.58L1265.5 176.9L1180.93 176.9L1118.02 118.75L1118.02 176.9L1053.51 176.9L1053.51 0.66L1258.33 0.66ZM1118.02 71.92L1193.82 71.92L1193.82 47.34L1118.02 47.34L1118.02 71.92Z"/><path d="M738.61 0.66L700.76 76.72L657.03 0.66L582.76 0.66L657.26 130.22L588.68 130.22L615.42 176.9L720.19 176.9L720.19 176.38L720.44 176.5L807.94 0.66L738.61 0.66Z"/><path fill-rule="evenodd" d="M1320.51 157.01C1320.51 162.4 1318.61 167 1314.81 170.82C1311.01 174.63 1306.41 176.54 1301.02 176.54C1295.63 176.54 1291.05 174.63 1287.27 170.82C1283.5 167.02 1281.62 162.41 1281.62 157.01C1281.62 151.66 1283.52 147.08 1287.32 143.28C1291.1 139.5 1295.67 137.61 1301.02 137.61C1306.42 137.61 1311.01 139.5 1314.81 143.28C1318.62 147.06 1320.51 151.64 1320.51 157.01ZM1301.03 140.23C1296.42 140.23 1292.48 141.87 1289.21 145.16C1285.96 148.43 1284.33 152.38 1284.33 157.01C1284.33 161.68 1285.95 165.65 1289.18 168.94C1292.44 172.22 1296.39 173.87 1301.03 173.87C1305.68 173.87 1309.63 172.23 1312.88 168.94C1316.12 165.65 1317.75 161.67 1317.75 157.01C1317.75 152.38 1316.13 148.43 1312.88 145.16C1309.61 141.88 1305.66 140.23 1301.03 140.23ZM1293.18 167.64L1293.18 146.27L1300.65 146.27C1303.3 146.27 1305.24 146.53 1306.48 147.04C1308.69 147.96 1309.79 149.76 1309.79 152.45C1309.79 154.36 1309.09 155.76 1307.7 156.66C1306.96 157.14 1305.92 157.49 1304.6 157.7C1306.27 157.96 1307.5 158.66 1308.28 159.79C1309.06 160.92 1309.45 162.02 1309.45 163.1L1309.45 164.67C1309.45 165.17 1309.47 165.7 1309.5 166.26C1309.54 166.83 1309.6 167.2 1309.69 167.37L1309.82 167.64L1306.3 167.64C1306.27 167.57 1306.26 167.5 1306.24 167.43C1306.23 167.36 1306.21 167.28 1306.19 167.19L1306.11 166.5L1306.11 164.8C1306.11 162.33 1305.45 160.69 1304.1 159.9C1303.31 159.44 1301.92 159.21 1299.92 159.21L1296.95 159.21L1296.95 167.64L1293.18 167.64ZM1306.12 152.78C1306.12 151.22 1305.65 150.18 1304.7 149.65C1303.76 149.12 1302.24 148.85 1300.15 148.85L1296.95 148.85L1296.95 156.59L1300.34 156.59C1301.93 156.59 1303.12 156.43 1303.92 156.11C1305.38 155.53 1306.12 154.41 1306.12 152.78Z"/>'
);
const W = 1.5, K = (() => {
  try {
    return !1;
  } catch {
    return !1;
  }
})(), M = /* @__PURE__ */ new Set();
function J(t) {
  K && !M.has(t) && (M.add(t), console.warn(`[icons] no glyph for "${t}" — add it to icons/src/glyphs or ALIASES`));
}
const l = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" shape-rendering="geometricPrecision">';
function Q(t) {
  if (!t) return "";
  if (t in a) return a[t];
  const e = P[G(t)];
  return e ? e.solid ? `${l}<g fill="currentColor" stroke="none">${e.solid}</g></svg>` : `${l}<g fill="none" stroke="currentColor" stroke-width="${W}" stroke-linejoin="round" stroke-linecap="round">${e.stroke}</g></svg>` : (J(t), "");
}
const U = ["innerHTML"], e1 = /* @__PURE__ */ f({
  __name: "Icon",
  props: {
    icon: {},
    name: {}
  },
  setup(t) {
    const e = t, c = o(() => {
      if (e.name) return e.name;
      const d = e.icon;
      return Array.isArray(d) ? d[d.length - 1] ?? "" : typeof d == "string" ? d : "";
    }), i = o(() => Q(c.value)), V = o(() => c.value ? `ck-${c.value}` : null);
    return (d, X) => i.value ? (C(), Z("span", {
      key: 0,
      class: v(["ck-icon", V.value]),
      innerHTML: i.value
    }, null, 10, U)) : b("", !0);
  }
});
export {
  Y as ALIASES,
  a as BRANDS,
  F as BRAND_NAMES,
  P as GLYPHS,
  e1 as Icon,
  Q as iconSvg,
  G as resolveName
};

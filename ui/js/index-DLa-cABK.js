import { d as u, o as f, c as b, g as Z, b as A, x as d } from "./vendor-vue-DcIxm_xE.js";
const M = {
  "chevron-down": { stroke: '<path d="M5 9 12 16 19 9"/>' },
  "chevron-up": { stroke: '<path d="M5 15 12 8 19 15"/>' },
  "chevron-left": { stroke: '<path d="M15 5 8 12 15 19"/>' },
  "chevron-right": { stroke: '<path d="M9 5L16 12L9 19"/>' },
  "chevrons-left": { stroke: '<path d="M12 6 6 12 12 18"/><path d="M18 6 12 12 18 18"/>' },
  "chevrons-right": { stroke: '<path d="M12 6 18 12 12 18"/><path d="M6 6 12 12 6 18"/>' },
  "arrow-down": { stroke: '<path d="M12 4V20"/><path d="M6 14 12 20 18 14"/>' },
  "arrow-left": { stroke: '<path d="M20 12H4"/><path d="M10 6 4 12 10 18"/>' },
  "arrow-right-arrow-left": {
    stroke: '<path d="M4 9H19"/><path d="M16 6 19 9 16 12"/><path d="M20 15H5"/><path d="M8 12 5 15 8 18"/>'
  },
  "arrow-right-to-bracket": {
    stroke: '<path d="M3 12H14"/><path d="M10 8 14 12 10 16"/><path d="M16 5H20V19H16"/>'
  },
  "right-from-bracket": {
    stroke: '<path d="M10 12H21"/><path d="M17 8 21 12 17 16"/><path d="M13 5H6V19H13"/>'
  },
  "down-to-bracket": {
    stroke: '<path d="M12 3V15"/><path d="M7 10 12 15 17 10"/><path d="M4 16V20H20V16"/>'
  },
  "up-right-from-square": {
    stroke: '<path d="M11 5H6V19H19V14"/><path d="M13 11 20 4"/><path d="M14 4H20V10"/>'
  },
  "arrows-left-right": { stroke: '<path d="M3 12 L21 12"/><path d="M6 9 L3 12 L6 15"/><path d="M18 9 L21 12 L18 15"/>' },
  "arrows-up-down": { stroke: '<path d="M12 3 L12 21"/><path d="M9 6 L12 3 L15 6"/><path d="M9 18 L12 21 L15 18"/>' },
  "arrows-up-down-left-right": {
    stroke: '<path d="M12 2V22"/><path d="M2 12H22"/><path d="M9 5 12 2 15 5"/><path d="M9 19 12 22 15 19"/><path d="M5 9 2 12 5 15"/><path d="M19 9 22 12 19 15"/>'
  },
  "arrows-rotate": { stroke: '<path d="M4 12 A8 8 0 0 1 18 7"/><path d="M18 2.5 L18 7"/><path d="M20 12 A8 8 0 0 1 6 17"/><path d="M6 21.5 L6 17"/>' },
  "arrows-retweet": {
    stroke: '<path d="M17 2 21 6 17 10"/><path d="M3 11V10A4 4 0 0 1 7 6H21"/><path d="M7 22 3 18 7 14"/><path d="M21 13V14A4 4 0 0 1 17 18H3"/>'
  },
  "arrow-rotate-right": {
    stroke: '<path d="M21 12A9 9 0 1 1 12 3C14.5 3 16.9 4 18.7 5.7L21 8"/><path d="M21 3V8H16"/>'
  },
  sort: { stroke: '<path d="M6 9 12 4 18 9"/><path d="M6 15 12 20 18 15"/>' },
  "sort-up": { stroke: '<path d="M4 18 12 6 20 18Z"/>', solid: '<path d="M4 18 12 6 20 18Z"/>' },
  "sort-down": { stroke: '<path d="M4 6 12 18 20 6Z"/>', solid: '<path d="M4 6 12 18 20 6Z"/>' }
}, l = {
  xmark: { stroke: '<path d="M6 6 18 18"/><path d="M18 6 6 18"/>' },
  plus: { stroke: '<path d="M12 6V18"/><path d="M6 12H18"/>' },
  "plus-large": { stroke: '<path d="M12 4V20"/><path d="M4 12H20"/>' },
  check: { stroke: '<path d="M5 13 10 18 19 6"/>' },
  expand: {
    stroke: '<path d="M4 9V4H9"/><path d="M20 9V4H15"/><path d="M4 15V20H9"/><path d="M20 15V20H15"/>'
  },
  bars: { stroke: '<path d="M4 7H20"/><path d="M4 12H20"/><path d="M4 17H20"/>' },
  "bars-filter": { stroke: '<path d="M4 7H20"/><path d="M6 12H18"/><path d="M9 17H15"/>' },
  filter: { stroke: '<path d="M4 5H20L14 12V19L10 21V12L4 5Z"/>', solid: '<path d="M4 5H20L14 12V20L10 22V12L4 5Z"/>' },
  // Thumb circles use inline fill/stroke overrides — intentional exception: keeps rails
  // as stroked lines while the handles render filled, without a full solid silhouette.
  "sliders-simple": {
    stroke: '<path d="M4 8H20"/><path d="M4 16H20"/><circle cx="9" cy="8" r="3" fill="currentColor" stroke="none"/><circle cx="15" cy="16" r="3" fill="currentColor" stroke="none"/>'
  },
  "circle-small": { stroke: '<circle cx="12" cy="12" r="4"/>', solid: '<circle cx="12" cy="12" r="4"/>' },
  "grid-horizontal": {
    stroke: '<rect x="2" y="2" width="8" height="8"/><rect x="14" y="2" width="8" height="8"/><rect x="2" y="14" width="8" height="8"/><rect x="14" y="14" width="8" height="8"/>'
  },
  shapes: { stroke: '<path d="M7 3.5 L3.5 9.5 L10 9.5 Z"/><rect x="14.5" y="3.5" width="6" height="6"/><circle cx="12" cy="16.5" r="4.0"/>' },
  "layer-group": { stroke: '<path d="M12 4 L21.5 9 L12 14 L2.5 9 Z"/><path d="M2.5 13 L12 18 L21.5 13"/>' },
  "table-cells-large": {
    stroke: '<rect x="4" y="5" width="16" height="14"/><path d="M4 12H20"/><path d="M12 5V19"/>'
  },
  table: {
    stroke: '<rect x="4" y="5" width="16" height="14"/><path d="M4 10H20"/><path d="M4 15H20"/><path d="M10 5V19"/>'
  },
  list: {
    stroke: '<path d="M4 7H6"/><path d="M9 7H20"/><path d="M4 12H6"/><path d="M9 12H20"/><path d="M4 17H6"/><path d="M9 17H20"/>'
  },
  "list-check": {
    stroke: '<path d="M10 7H20"/><path d="M10 17H20"/><path d="M3 7 4.5 8.5 7 5.5"/><path d="M3 16 4.5 17.5 7 14.5"/>'
  },
  "clipboard-list-check": {
    // Clip is an open ∩ (was a separate rect whose bottom edge sat 2u from the
    // board top and smeared shut at small sizes).
    stroke: '<rect x="6" y="4" width="12" height="16" rx="1"/><path d="M9 5V3.5A1 1 0 0 1 10 2.5H14A1 1 0 0 1 15 3.5V5"/><path d="M9 10L10.5 11.5 13 9"/><path d="M9 15L10.5 16.5 13 14"/>'
  }
}, n = {
  file: {
    stroke: '<path d="M13 3H6V21H18V8L13 3Z"/><path d="M13 3V8H18"/>'
  },
  "file-lines": {
    stroke: '<path d="M13 3H6V21H18V8L13 3Z"/><path d="M13 3V8H18"/><path d="M9 12H15"/><path d="M9 15H15"/><path d="M9 18H13"/>'
  },
  "file-pdf": { stroke: '<path d="M13 3 L6 3 L6 21 L18 21 L18 8 L13 3 Z"/><path d="M13 3 L13 8 L18 8"/><rect x="9" y="12" width="6" height="6"/>' },
  files: {
    stroke: '<path d="M14 7H9V21H19V12L14 7Z"/><path d="M14 7V12H19"/><path d="M6 17V3H15V5"/>'
  },
  "file-import": { stroke: '<path d="M10 3 L4 3 L4 21 L16 21 L16 9 L10 3 Z"/><path d="M10 3 L10 9 L16 9"/><path d="M21 15 L10 15"/><path d="M13 12 L10 15 L13 17.5"/>' },
  "file-export": { stroke: '<path d="M10 3 L4 3 L4 21 L16 21 L16 9 L10 3 Z"/><path d="M10 3 L10 9 L16 9"/><path d="M14 15 L22 15"/><path d="M19 12 L22 15 L19 17.5"/>' },
  "floppy-disk": {
    stroke: '<path d="M5 5H16L19 8V19H5Z"/><path d="M8 5V9H15V5"/><rect x="8" y="13" width="8" height="6"/>'
  },
  "floppy-disk-circle-arrow-right": { stroke: '<path d="M5 5 L15 5 L18 8 L18 11"/><path d="M5 5 L5 19 L10 19"/><path d="M8 5 L8 9 L14 9 L14 5"/><path d="M15 17 L19 17"/><path d="M17 15 L19 17 L17 19"/><circle cx="17" cy="17" r="4"/>' },
  copy: {
    stroke: '<rect x="8" y="8" width="11" height="12"/><path d="M5 16V4H15"/>'
  },
  "share-from-square": {
    stroke: '<path d="M6 11V20H18V11"/><path d="M12 3V14"/><path d="M8 7 12 3 16 7"/>'
  },
  "folder-tree": {
    stroke: '<rect x="3" y="4" width="9" height="6"/><rect x="14" y="14" width="7" height="6"/><path d="M7 10V17H14"/>'
  },
  "rectangle-history": {
    stroke: '<rect x="4" y="9" width="16" height="10"/><path d="M6 6H18"/><path d="M8 3H16"/>'
  },
  "rectangle-landscape": {
    stroke: '<rect x="3" y="6" width="18" height="12"/>'
  },
  "window-alt": {
    // Frame + title bar. (The old 1u button dash sat 2u from the divider and
    // smeared at small sizes — dropped for a clean window.)
    stroke: '<rect x="3" y="5" width="18" height="14"/><path d="M3 9H21"/>'
  },
  browser: {
    // Frame + toolbar + two tabs (vertical, 3u apart) — distinguishes it from
    // `window` without a horizontal stroke cramped inside the 4u toolbar.
    stroke: '<rect x="3" y="5" width="18" height="14"/><path d="M3 9H21"/><path d="M7 6.5V9"/><path d="M10 6.5V9"/>'
  },
  newspaper: { stroke: '<path d="M4 5 L21 5 L21 19 L5 19 A1 1 0 0 1 4 18 Z"/><path d="M16 9 L18 9"/><path d="M16 12 L18 12"/><path d="M7 16 L19 16"/><rect x="7" y="8" width="6" height="4"/>' },
  book: {
    stroke: '<path d="M5 4H17A2 2 0 0 1 19 6V20H7A2 2 0 0 1 5 18Z"/><path d="M5 18A2 2 0 0 1 7 16H19"/>'
  }
}, L = {
  pencil: {
    stroke: '<path d="M4 20 5 16 16 5 19 8 8 19Z"/><path d="M14 7 17 10"/>'
  },
  "pen-to-square": { stroke: '<path d="M21 6.5 L12.5 16 L7 17 L7.5 11.5 L16 2.5 Z"/><path d="M12.5 5.5 L3 5.5 L3 21 L19.5 21 L19.5 8.5"/><path d="M11.5 16 L7.5 12.5"/>' },
  eraser: { stroke: '<path d="M6 16 L15.5 6 L21.5 11.5 L13.5 20.5 L10.5 20 Z"/><path d="M13 9 L18.5 14"/><path d="M3.5 20.5 L20.5 20.5"/>' },
  scissors: {
    stroke: '<circle cx="6" cy="7.5" r="2.5"/><circle cx="6" cy="16.5" r="2.5"/><path d="M8.2 8.8 19 16"/><path d="M8.2 15.2 19 8"/>'
  },
  trash: { stroke: '<path d="M10 6.8 L10 4 A1 1 0 0 1 11 3 L13 3 A1 1 0 0 1 14 4 L14 6.8"/><path d="M3.5 7 L20.5 7"/><path d="M5 7 L6.5 19 A1.5 1.5 0 0 0 8 20.5 L16 20.5 A1.5 1.5 0 0 0 17.5 19 L19 7"/><path d="M10 10.5 L10 17"/><path d="M14 10.5 L14 17"/>' },
  hammer: {
    stroke: '<path d="M13 4 20 11 17 14 10 7Z"/><path d="M12 9 4 17V20H7L15 12"/>'
  },
  "spray-can": { stroke: '<path d="M17 3.5 L19 2.5"/><path d="M17 5.5 L19 5.5"/><path d="M17 7.5 L19 8.5"/><rect x="5" y="8" width="10" height="13" rx="1"/><rect x="8" y="3" width="4" height="5" rx="1"/>' },
  calculator: { stroke: '<path d="M8.5 13 L10.5 13"/><path d="M14 13 L15.5 13"/><path d="M8.5 17 L10.5 17"/><path d="M14 17 L15.5 17"/><rect x="4.5" y="3" width="15" height="18"/><rect x="8" y="6" width="8" height="3.5"/>' },
  toolbox: { stroke: '<path d="M8 8 L8 5 L16 5 L16 8"/><path d="M3 13 L10 13"/><rect x="3" y="8" width="18" height="11"/><rect x="10" y="11" width="4" height="4"/><path d="M14 13 L21 13"/>' },
  gear: {
    stroke: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/>'
  },
  "input-numeric": { stroke: '<path d="M7.5 15 L7.5 9 L6 10.5"/><path d="M11.5 9 L14 9 L14 12 L11.5 12 L11.5 15 L14 15"/><rect x="3" y="6" width="18" height="12"/>' },
  tag: {
    stroke: '<path d="M4 4H11L20 13 13 20 4 11Z"/><circle cx="8" cy="8" r="1"/>'
  },
  palette: {
    stroke: '<path d="M12 3A9 9 0 0 0 12 21 2 2 0 0 0 12 17 2 2 0 0 1 14 13H17A4 4 0 0 0 21 9 9 9 0 0 0 12 3Z"/><circle cx="8" cy="9" r="1"/><circle cx="12" cy="7" r="1"/><circle cx="16" cy="9" r="1"/>'
  },
  // Construction cone (renamed 'construction' in public API).
  "person-digging": { stroke: '<path d="M12 4 L17 17 H7 Z"/><path d="M10 12 H14"/><path d="M6 20 H18"/>' },
  flask: {
    stroke: '<path d="M9 3H15"/><path d="M10 3V9L5 19A1 1 0 0 0 6 21H18A1 1 0 0 0 19 19L14 9V3"/><path d="M8 15H16"/>'
  },
  code: {
    stroke: '<path d="M9 8 5 12 9 16"/><path d="M15 8 19 12 15 16"/><path d="M13 6 11 18"/>'
  },
  // Vector draw tool icons (used by the icon editor toolbar) ───────────────────
  // Arrow/pointer cursor: SELECT tool.
  cursor: { stroke: '<path d="M4 3 L4 18 L8 14 L11.5 21.5 L14.5 20.5 L10.5 12.5 L16 12 Z"/>' },
  // Pen nib: PATH/bezier draw tool.
  "pen-nib": { stroke: '<path d="M12 21 L4 12 L12 3 L20 12 Z"/><path d="M12 21 V15"/><path d="M9 13 L12 15 L15 13"/>' },
  // Square anchor: CORNER point — no bezier handles, sharp change of direction.
  "anchor-corner": { stroke: '<rect x="9" y="9" width="6" height="6"/><path d="M3 12 H9"/><path d="M15 12 H21"/>' },
  // Circle anchor: SMOOTH point — bezier handles collinear, curves through the point.
  "anchor-smooth": { stroke: '<circle cx="12" cy="12" r="3"/><path d="M3 12 H9"/><path d="M15 12 H21"/>' },
  // Trim: a small rectangle with arrows pressing in from top and bottom.
  trim: { stroke: '<path d="M12 2 L12 7.5"/><path d="M9 4.5 L12 7.5 L15 4.5"/><path d="M12 22 L12 16.5"/><path d="M9 19.5 L12 16.5 L15 19.5"/><rect x="7" y="10" width="10" height="4" rx="1"/>' }
}, k = {
  "basket-shopping": { stroke: '<path d="M8 9 L12 3"/><path d="M16 9 L12 3"/><path d="M3 9 L21 9 L19 19 L5 19 Z"/><path d="M9 12 L9 16"/><path d="M12 12 L12 16"/><path d="M15 12 L15 16"/>' },
  "cart-shopping-fast": {
    stroke: '<path d="M8 7H21L19 15H10Z"/><path d="M8 7 7 4H4"/><circle cx="11" cy="19" r="1.5"/><circle cx="18" cy="19" r="1.5"/><path d="M2 9H5"/><path d="M1 12H4"/>'
  },
  "money-check-dollar": { stroke: '<path d="M9.5 10 L7.5 10 A1.8 1.8 0 0 0 7.5 13 L8.5 13 A1.8 1.8 0 0 1 8.5 16 L6.5 16"/><path d="M8 7.5 L8 10"/><path d="M8 16 L8 17.5"/><path d="M12.5 10 L18.5 10"/><path d="M14 14 L18 14"/><rect x="3" y="5" width="18" height="15"/>' },
  cube: {
    stroke: '<path d="M12 3 20 7.5V16.5L12 21 4 16.5V7.5Z"/><path d="M4 7.5 12 12 20 7.5"/><path d="M12 12V21"/>'
  }
}, g = {
  bolt: {
    stroke: '<path d="M13 2 5 13H11L9 22 19 10H13Z"/>'
  },
  "circle-info": { stroke: '<rect fill="currentColor" stroke="none" x="10.5" y="10.5" width="3" height="7.5"/><rect fill="currentColor" stroke="none" x="10.5" y="6" width="3" height="3"/><circle cx="12" cy="12" r="9"/>' },
  "circle-check": {
    stroke: '<circle cx="12" cy="12" r="9"/><path d="M8 12 11 15 16 9"/>'
  },
  "circle-xmark": {
    stroke: '<circle cx="12" cy="12" r="9"/><path d="M9 9 15 15"/><path d="M15 9 9 15"/>'
  },
  "exclamation-circle": {
    stroke: '<circle cx="12" cy="12" r="9"/><path d="M12 7V13"/><path d="M12 15V17"/>'
  },
  "triangle-exclamation": {
    stroke: '<path d="M12 4 21 19H3Z"/><path d="M12 10V14"/><path d="M12 16V18"/>'
  },
  comment: {
    stroke: '<path d="M4 5H20V16H12L7 20V16H4Z"/>'
  },
  messages: { stroke: '<path d="M2 2.5 L13 2.5 L13 9.5 L7 9.5 L3 13 L3 9.5 L2 9.5 Z"/><path d="M11 12.5 L22 12.5 L22 19.5 L21 19.5 L21 22.5 L18 19.5 L11 19.5 Z"/>' },
  bug: { stroke: '<path d="M8 11 A4 4 0 0 1 16 11 L16 15 A4 4 0 0 1 8 15 Z"/><path d="M9.5 5.5 L10.5 7.5"/><path d="M14.5 5.5 L13.5 7.5"/><path d="M8 12 L4 12"/><path d="M16 12 L20 12"/><path d="M8 16 L5 18"/><path d="M16 16 L19 18"/><path d="M8.5 9 L6.5 7.5"/><path d="M15.5 9 L17.5 7.5"/>' },
  "thumbs-up": {
    stroke: '<path d="M7 10 11 3A2 2 0 0 1 13 5V9H19A2 2 0 0 1 21 11L19 18A2 2 0 0 1 17 20H7Z"/><rect x="3" y="10" width="4" height="10"/>'
  },
  eye: { stroke: '<path d="M2 12 C5.5 3 18.5 3 22 12 C19 21 5.5 21 2 12 Z"/><circle cx="12" cy="12" r="3"/>' },
  "eye-slash": { stroke: '<path d="M2 12 C5.5 3 18.5 3 22 12 C18.5 21 5.5 21 2 12 Z"/><path d="M4 4 L20 20"/><circle cx="12" cy="12" r="3"/>' },
  clock: {
    stroke: '<circle cx="12" cy="12" r="9"/><path d="M12 7V12L15 14"/>'
  },
  sparkles: { stroke: '<path d="M10 8 L12 13 L18 15 L12 17 L10 22 L8 17 L3 15 L8 13 Z"/><path d="M18 2 L20 5 L22 6 L20 7 L18 10 L17 7 L14 6 L17 5 Z"/>' },
  star: { stroke: '<path d="M12 3 L15 9 L21 10 L17 15 L18 21 L12 18 L6 21 L8 15 L3 10 L9 9 Z"/>' },
  rocket: {
    stroke: '<path d="M12 3C16 6 16 12 14 16H10C8 12 8 6 12 3Z"/><circle cx="12" cy="9" r="2"/><path d="M10 16 7 19 9 20"/><path d="M14 16 17 19 15 20"/>'
  },
  "rocket-launch": {
    stroke: '<path d="M12 3C16 6 16 12 14 16H10C8 12 8 6 12 3Z"/><circle cx="12" cy="9" r="2"/><path d="M10 16 7 19 9 20"/><path d="M14 16 17 19 15 20"/><path d="M9 20 8 22"/><path d="M12 21V23"/><path d="M15 20 16 22"/>'
  },
  bell: {
    stroke: '<path d="M6 10A6 6 0 0 1 18 10V16H6Z"/><path d="M10 18A2 2 0 0 0 14 18"/><path d="M12 2V4"/>'
  },
  "bell-slash": {
    stroke: '<path d="M6 10A6 6 0 0 1 18 10V16H6Z"/><path d="M10 18A2 2 0 0 0 14 18"/><path d="M12 2V4"/><path d="M3 3 21 21"/>'
  }
}, x = {
  user: {
    stroke: '<circle cx="12" cy="8" r="4"/><path d="M5 20C5 15 19 15 19 20"/>'
  },
  users: {
    stroke: '<circle cx="9" cy="8" r="4"/><path d="M3 19C3 15 15 15 15 19"/><path d="M16 5A4 4 0 0 1 16 12"/><path d="M17 15C20 16 21 17 21 19"/>'
  },
  "user-shield": {
    stroke: '<circle cx="10" cy="7" r="3"/><path d="M4 19C4 14.5 13 14.5 13 18"/><path d="M18 11 21 12V15C21 17 20 18 18 19 16 18 15 17 15 15V12Z"/>'
  },
  // Admin: a person + a settings cog (teeth are radial strokes so they diverge
  // and never sit parallel-close — keeps it legible at small sizes).
  admin: {
    stroke: '<circle cx="9" cy="7.5" r="3.5"/><path d="M3.5 19C3.5 14.5 11.5 14.5 11.5 17"/><circle cx="17" cy="16" r="2.5"/><path d="M19.5 16 20.7 16"/><path d="M18.25 18.16 18.85 19.2"/><path d="M15.75 18.16 15.15 19.2"/><path d="M14.5 16 13.3 16"/><path d="M15.75 13.84 15.15 12.8"/><path d="M18.25 13.84 18.85 12.8"/>'
  },
  "shield-check": {
    stroke: '<path d="M12 3 20 6V12C20 17 16 20 12 21 8 20 4 17 4 12V6Z"/><path d="M9 12 11 15 16 10"/>'
  },
  "shield-keyhole": {
    stroke: '<path d="M12 3 20 6V12C20 17 16 20 12 21 8 20 4 17 4 12V6Z"/><circle cx="12" cy="11" r="2"/><path d="M12 13V16"/>'
  },
  lock: {
    stroke: '<rect x="5" y="10" width="14" height="11"/><path d="M8 10V7A4 4 0 0 1 16 7V10"/><path d="M12 14V17"/>'
  },
  key: {
    stroke: '<circle cx="8" cy="8" r="4"/><path d="M11 11 20 20"/><path d="M17 17 19 15"/><path d="M15 15 17 13"/>'
  },
  building: {
    stroke: '<rect x="5" y="3" width="14" height="18"/><path d="M8 7H10"/><path d="M14 7H16"/><path d="M8 11H10"/><path d="M14 11H16"/><path d="M10 21V16H14V21"/>'
  },
  envelope: {
    stroke: '<rect x="3" y="6" width="18" height="12"/><path d="M3 7 12 13 21 7"/>'
  }
}, w = {
  image: { stroke: '<path d="M3 18.5 L9 13.5 L13 16.5 L17 12.5 L21 16.5"/><rect x="3" y="3.5" width="18" height="17.5"/><circle cx="8" cy="8" r="2"/>' },
  "mobile-alt": {
    stroke: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M10 18H14"/>'
  },
  "computer-mouse": {
    stroke: '<rect x="4" y="2" width="16" height="20" rx="8"/><path d="M12 2V11"/><path d="M4 11H20"/>'
  },
  microchip: {
    stroke: '<rect x="7" y="7" width="10" height="10"/><path d="M10 7V4"/><path d="M14 7V4"/><path d="M10 20V17"/><path d="M14 20V17"/><path d="M7 10H4"/><path d="M7 14H4"/><path d="M20 10H17"/><path d="M20 14H17"/>'
  },
  "chart-line": {
    stroke: '<path d="M4 4V20H20"/><path d="M7 15 11 10 14 13 19 7"/>'
  },
  "chart-column": {
    stroke: '<path d="M4 4V20H20"/><path d="M8 17V12"/><path d="M12 17V9"/><path d="M16 17V6"/>'
  },
  "chart-network": {
    stroke: '<circle cx="6" cy="6" r="2"/><circle cx="18" cy="7" r="2"/><circle cx="9" cy="17" r="2"/><circle cx="18" cy="16" r="2"/><path d="M8 7 8 15"/><path d="M8 6 16 7"/><path d="M11 16 16 16"/><path d="M17 9 18 14"/>'
  },
  algorithm: {
    stroke: '<rect x="9" y="2" width="6" height="4" rx="1"/><path d="M12 6V9"/><path d="M12 9L5 14"/><path d="M12 9L19 14"/><rect x="2" y="14" width="6" height="4" rx="1"/><rect x="16" y="14" width="6" height="4" rx="1"/>'
  },
  "diagram-lean-canvas": { stroke: '<path d="M9 5 L9 19"/><path d="M15 5 L15 12"/><path d="M9 12 L21 12"/><rect x="2.5" y="5" width="19" height="14"/>' },
  "magnifying-glass": {
    stroke: '<circle cx="10" cy="10" r="6"/><path d="M15 15 20 20"/>'
  },
  play: { stroke: '<path d="M7 5 19 12 7 19Z"/>', solid: '<path d="M7 5 19 12 7 19Z"/>' },
  pause: {
    stroke: '<path d="M8 5V19"/><path d="M16 5V19"/>',
    solid: '<rect x="7" y="5" width="4" height="14"/><rect x="13" y="5" width="4" height="14"/>'
  },
  database: {
    stroke: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6V18C5 19.7 8 21 12 21 16 21 19 19.7 19 18V6"/><path d="M5 12C5 13.7 8 15 12 15 16 15 19 13.7 19 12"/>'
  }
}, y = {
  // Circular saw blade: fine 12-tooth rim with a central arbor hole.
  saw: {
    stroke: '<path d="M22.5 12 19.73 14.07 21.09 17.25 17.66 17.66 17.25 21.09 14.07 19.73 12 22.5 9.93 19.73 6.75 21.09 6.34 17.66 2.91 17.25 4.27 14.07 1.5 12 4.27 9.93 2.91 6.75 6.34 6.34 6.75 2.91 9.93 4.27 12 1.5 14.07 4.27 17.25 2.91 17.66 6.34 21.09 6.75 19.73 9.93Z"/><circle cx="12" cy="12" r="2"/>'
  },
  // Raw stock: 2 boards stacked in perspective — a batch of uncut sheets.
  stock: { stroke: '<path d="M3 6.5 L21 4.5 L21 8.5 L3 10.5 Z"/><path d="M3 14.5 L21 12.5 L21 16.5 L3 18.5 Z"/>' },
  // Parts: multiple small rectangles — the individual cut pieces that come from stock.
  parts: { stroke: '<rect x="2" y="2.5" width="10" height="7" rx="1"/><rect x="15" y="2.5" width="7" height="12" rx="1"/><rect x="2" y="13" width="10" height="9" rx="1"/><rect x="15" y="18" width="7" height="4" rx="1"/>' },
  // Materials: 3 boards stacked in perspective — the raw material source at the
  // top of the hierarchy (materials → stock → parts).
  materials: {
    stroke: '<path d="M3 3 L21 1 L21 5 L3 7 Z"/><path d="M3 10 L21 8 L21 12 L3 14 Z"/><path d="M3 17 L21 15 L21 19 L3 21 Z"/>'
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
  machining: { stroke: '<path d="M11.8 11 L11.8 14"/><rect x="6.5" y="2.5" width="10.5" height="8.5" rx="1"/><rect x="2" y="16" width="20" height="5" rx="1"/>' }
}, H = {
  circle: {
    stroke: '<circle cx="12" cy="12" r="9"/>'
  },
  "circle-dot": {
    stroke: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/>'
  },
  // Globe / translate.
  language: {
    stroke: '<circle cx="12" cy="12" r="9"/><path d="M3 12H21"/><path d="M12 3C15 6 15 18 12 21 9 18 9 6 12 3Z"/>'
  },
  // Send (paper plane).
  "paper-plane-top": {
    stroke: '<path d="M21 4 3 11 10 13 13 20Z"/><path d="M10 13 21 4"/>'
  },
  robot: {
    // Arms moved out to clear the body by 3u (were 2u); antenna ball enlarged
    // to r1.5 so its own walls don't merge at small sizes.
    stroke: '<rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 5V8"/><circle cx="12" cy="4" r="1.5"/><path d="M9 12V13"/><path d="M15 12V13"/><path d="M9.5 16H14.5"/><path d="M2 12V15"/><path d="M22 12V15"/>'
  }
}, c = {
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
  "triangle-exclamation": "warning",
  "circle-info": "info",
  "circle-check": "success",
  "circle-xmark": "error",
  "exclamation-circle": "alert",
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
}, v = {
  ...M,
  ...l,
  ...n,
  ...L,
  ...k,
  ...g,
  ...x,
  ...w,
  ...y,
  ...H
}, V = (t) => c[t] ?? t, C = Object.fromEntries(
  Object.entries(v).map(([t, e]) => [V(t), e])
), S = {
  "info-circle": "info",
  "check-circle": "success",
  "times-circle": "error",
  "exclamation-triangle": "warning",
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
  wave: "hand-wave"
}, E = Object.fromEntries(
  Object.entries(c)
), N = { ...E, ...S };
function _(t) {
  return N[t] ?? t;
}
Object.fromEntries(
  Object.entries(c).map(([t, e]) => [e, t])
);
const O = ["google"], a = (t) => Object.keys(t).map(V);
a(M), a(l), a(n), a(L), a(k), a(g), a(x), a(w), a(y), a(H), [...O];
const $ = (t, e) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t}" width="1em" height="1em" fill="currentColor" aria-hidden="true">${e}</svg>`, o = {
  google: $(
    "0 0 488 512",
    '<path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>'
  )
}, j = 1.5, B = (() => {
  try {
    return !1;
  } catch {
    return !1;
  }
})(), s = /* @__PURE__ */ new Set();
function q(t) {
  B && !s.has(t) && (s.add(t), console.warn(`[icons] no glyph for "${t}" — add it to icons/src/glyphs or ALIASES`));
}
const i = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" shape-rendering="geometricPrecision">';
function I(t) {
  if (!t) return "";
  if (t in o) return o[t];
  const e = C[_(t)];
  return e ? e.solid ? `${i}<g fill="currentColor" stroke="none">${e.solid}</g></svg>` : `${i}<g fill="none" stroke="currentColor" stroke-width="${j}" stroke-linejoin="round" stroke-linecap="round">${e.stroke}</g></svg>` : (q(t), "");
}
const z = ["innerHTML"], P = /* @__PURE__ */ u({
  __name: "Icon",
  props: {
    icon: {},
    name: {}
  },
  setup(t) {
    const e = t, h = d(() => {
      if (e.name) return e.name;
      const r = e.icon;
      return Array.isArray(r) ? r[r.length - 1] ?? "" : typeof r == "string" ? r : "";
    }), p = d(() => I(h.value)), m = d(() => h.value ? `ck-${h.value}` : null);
    return (r, D) => p.value ? (f(), b("span", {
      key: 0,
      class: Z(["ck-icon", m.value]),
      innerHTML: p.value
    }, null, 10, z)) : A("", !0);
  }
});
export {
  N as ALIASES,
  o as BRANDS,
  O as BRAND_NAMES,
  C as GLYPHS,
  P as Icon,
  I as iconSvg,
  _ as resolveName
};

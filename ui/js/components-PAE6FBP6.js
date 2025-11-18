import { i as Dr, B as Gl } from "./vendor-i18next-CacwiV0i.js";
import { r as oe, t as ql, c as te, w as He, n as mt, d as We, a as L, o as w, F as Re, b as Ke, e as lt, f as _e, g as $, h as fs, i as ae, v as sn, j as xt, k as Zt, u as Er, l as zl, m as Wl, p as hs, q as Fe, s as P, x as se, y as Ns, T as ca, z as _r, A as Hl, B as ki, C as Ci, D as Gs, E as ci, G as bi, H as Ve, I as Ul, J as Mr, K as os, L as Yl, M as Kl, N as Ri, O as qa, P as Zl, Q as Jl, R as Xl, S as Ql, U as ec, V as tc, W as ic, X as Ln } from "./vendor-vue-WkZl1F8L.js";
import { _ as Pe, o as j, a as re, s as p, n as d, b as _, c as be, r as Se, u as ye, d as ri, z as sc, Z as Fn, e as nc, l as xe, p as Mt, f as zn, g as ac, h as rc, m as oc, i as ji, j as lc, k as cc, q as uc, t as dc, v as fc, w as hc, x as pc } from "./vendor-zod-DtqKDYvi.js";
import { g as Ue, h as gc, s as mc } from "./vendor-lodash-CYGhmG8H.js";
import { u as es, s as za, g as yc, v as bc, a as ua, b as vc, c as wc, d as Sc, e as xc, f as nn, h as kc, i as Ic, j as Pc, k as Cc } from "./composables-qrHQx-Ro.js";
import { a as Rr, b as jr, l as Et, c as qs, d as zs, s as ft, r as qt, e as ls, f as Br, g as Ac, h as Tc, i as Oc, p as Lc, S as Fc, j as $c, k as Dc } from "./vendor-d3-DUCHe88K.js";
import { c as Vr, P as Ec } from "./vendor-tCV_BFOF.js";
import { o as _c, f as Mc, s as Rc, a as jc } from "./vendor-floating-ui-DZfk4g77.js";
import { F as cs } from "./vendor-fraction-3H9P8ENz.js";
function Ht() {
  if (typeof process < "u" && process?.env)
    return process.env?.NODE_ENV === "development";
  if (typeof globalVariables < "u" && typeof globalVariables.isDevelopment == "boolean")
    return globalVariables.isDevelopment;
  if (typeof window < "u") {
    const t = window.location?.hostname || "";
    if (t === "localhost" || t === "127.0.0.1" || t.includes(".local"))
      return !0;
    const e = new URLSearchParams(window.location?.search || "");
    if (e.get("dev") === "true" || e.get("debug") === "true")
      return !0;
  }
  return !1;
}
function Nr() {
  if (typeof process < "u" && process?.env)
    return process.env?.NODE_ENV === "test" || process.env?.VITEST === "true" || !!process.env?.VITEST;
  if (typeof globalVariables < "u")
    return globalVariables.isTest === !0 || globalVariables.NODE_ENV === "test" || globalVariables.VITEST === !0;
  if (typeof window < "u") {
    const t = new URLSearchParams(window.location?.search || "");
    return t.get("test") === "true" || t.get("vitest") === "true" || window.location?.hostname.includes("test") || // Check for test runner globals
    typeof window.vitest < "u" || typeof window.jest < "u";
  }
  return !1;
}
function Gr() {
  return typeof globalVariables < "u" || typeof globalThis.__runtimeVersion < "u" || typeof window < "u" && typeof window.__runtimeVersion < "u";
}
const tw = {
  INVALID_TYPE: "errors.validation.zod.invalid_type",
  TOO_SMALL: "errors.validation.zod.too_small",
  TOO_BIG: "errors.validation.zod.too_big",
  INVALID_STRING: "errors.validation.zod.invalid_string",
  INVALID_ENUM: "errors.validation.zod.invalid_enum",
  REQUIRED: "errors.validation.not_set",
  CUSTOM: "errors.validation.zod.custom"
}, $t = {
  FIELD_REQUIRED: "errors.validation.field.required",
  INVALID_NUMBER: "errors.validation.field.invalid_number",
  INVALID_DECIMAL: "errors.validation.field.invalid_decimal",
  INVALID_FRACTION: "errors.validation.field.invalid_fraction",
  INVALID_FRACTION_CHARS: "errors.validation.field.invalid_fraction_chars",
  INVALID_FRACTION_FORMAT: "errors.validation.field.invalid_fraction_format",
  INVALID_FORMAT: "errors.validation.field.invalid_format",
  ABOVE_MAX: "errors.validation.field.above_max",
  BELOW_MIN: "errors.validation.field.below_min",
  ZERO_NOT_ALLOWED: "errors.validation.field.zero_not_allowed",
  DIVISION_BY_ZERO: "errors.validation.field.division_by_zero"
}, $n = {
  field_required: $t.FIELD_REQUIRED,
  invalid_number: $t.INVALID_NUMBER,
  invalid_decimal: $t.INVALID_DECIMAL,
  invalid_fraction: $t.INVALID_FRACTION,
  invalid_fraction_chars: $t.INVALID_FRACTION_CHARS,
  invalid_fraction_format: $t.INVALID_FRACTION_FORMAT,
  invalid_format: $t.INVALID_FORMAT,
  above_max: $t.ABOVE_MAX,
  below_min: $t.BELOW_MIN,
  zero_not_allowed: $t.ZERO_NOT_ALLOWED,
  division_by_zero: $t.DIVISION_BY_ZERO
};
function Bc(t) {
  if (t in $n) {
    const e = t;
    return Ht() && console.warn(`[Validation] Using legacy validation key "${t}". Please migrate to "${$n[e]}"`), $n[e];
  }
  return t;
}
const qr = Pe(["error", "warning"]), zr = Pe(["saw", "stock", "part", "group", "machining", "extras"]);
j({
  message: p(),
  identifier: p(),
  field: re(re(p())),
  index: re(d()),
  id: p(),
  // Source object's autoId for linking back
  type: qr,
  category: re(zr)
});
const Vc = j({
  item: be().nullable().default(null),
  message: p().default(""),
  params: Se(p(), ye([p(), d(), _(), ri()])).optional(),
  // Translation parameters
  field: re(re(p())).default([]),
  index: re(d()).nullable().default(null),
  id: p().nullable().default(null),
  // Source object's autoId
  issues: re(be()).nullable().default(null),
  // Will be Issue[] at runtime
  type: qr.default("error"),
  category: re(zr).nullable().default(null),
  throwError: _().default(!1),
  shouldTranslate: _().default(!0)
}), Nc = ["lr", "rl", "bt", "tb"];
j({
  x1: d(),
  x2: d(),
  y1: d(),
  y2: d(),
  dimension: Pe(["l", "w"]).optional(),
  shapeCollisions: re(be()).optional()
});
j({
  id: p().nullable().optional(),
  x1: d(),
  x2: d(),
  y1: d(),
  y2: d(),
  origin: p().optional(),
  dimension: Pe(["l", "w"]).optional(),
  direction: Pe(Nc).nullable().optional(),
  type: p().nullable().optional()
});
const Gc = j({
  // ========== Identification ==========
  // Unique identifier for this line
  id: p(),
  // Type classification for this line
  type: p().optional(),
  // ========== Coordinates ==========
  x1: d().default(0),
  x2: d().default(0),
  y1: d().default(0),
  y2: d().default(0),
  // ========== Origin Information ==========
  // Origin point of the line
  origin: p().optional(),
  // ========== Collision Tracking ==========
  // Shapes that collide with this line
  shapeCollisions: re(be()).default([]),
  // ========== Validation ==========
  // Validation issues found with this line
  issues: re(be()).default([])
}), qc = {
  // Line dimension (horizontal or vertical)
  dimension: {
    compute: (t) => {
      const e = Math.abs(t.x2 - t.x1), i = Math.abs(t.y2 - t.y1);
      return e > i ? "l" : i > e ? "w" : null;
    },
    metadata: {
      cache: !1,
      dependencies: ["x1", "x2", "y1", "y2"],
      returnType: "'l' | 'w' | null"
    }
  },
  // Line direction based on coordinates
  direction: {
    compute: (t) => {
      const e = t.x2 - t.x1, i = t.y2 - t.y1;
      return Math.abs(e) > Math.abs(i) ? e > 0 ? "lr" : "rl" : Math.abs(i) > Math.abs(e) ? i > 0 ? "bt" : "tb" : null;
    },
    metadata: {
      cache: !1,
      dependencies: ["x1", "x2", "y1", "y2"],
      returnType: "LineDirection"
    }
  },
  // Calculate line length
  length: {
    compute: (t) => {
      const e = t.x2 - t.x1, i = t.y2 - t.y1;
      return Math.sqrt(e * e + i * i);
    },
    metadata: {
      cache: !1,
      dependencies: ["x1", "x2", "y1", "y2"],
      returnType: "number"
    }
  },
  coords: {
    compute: (t) => ({ x1: t.x1, x2: t.x2, y1: t.y1, y2: t.y2 })
  }
}, Wr = /* @__PURE__ */ new Map();
function ps() {
  return Wr;
}
function iw(t, e) {
  Wr.set(t, e);
}
function an(t, e) {
  const i = t;
  return i._fieldBehavior = { fieldBehavior: e }, i;
}
function Wa(t) {
  let e = t, i = 0;
  for (; e && i < 10; ) {
    i++;
    const s = e._fieldBehavior;
    if (s)
      return s.fieldBehavior;
    if (e._def) {
      if (e._def.innerType !== void 0) {
        e = e._def.innerType;
        continue;
      }
      if (e._def.typeName === "ZodArray")
        break;
    }
    break;
  }
  return null;
}
function Ss(t) {
  const e = {};
  if (t instanceof nc) {
    const i = t.shape;
    for (const [s, n] of Object.entries(i)) {
      const a = Wa(n);
      a && (e[s] = a);
    }
  }
  if (t._def && t._def.shape) {
    const i = t._def.shape;
    for (const [s, n] of Object.entries(i)) {
      const a = Wa(n);
      a && (e[s] = a);
    }
  }
  return e;
}
typeof sc < "u" && Fn && Fn.prototype && (Fn.prototype.behavior = function(t) {
  return an(this, t);
});
function Oe(t, e = {}) {
  let s = be().refine((r) => r == null ? !0 : typeof r == "object" && r !== null ? ("autoId" in r || "id" in r, !0) : !1, {
    message: `Invalid reference to ${t}`
  }).transform((r) => {
    if (r == null || typeof r == "object" && r !== null && typeof r.getType == "function" || typeof r == "object" && r !== null && r.__ref === !0)
      return r;
    if (typeof r == "object" && r !== null && !r.__ref)
      try {
        const o = ps(), l = r.__entityType || t, c = o.get(l);
        if (c && typeof c == "function")
          return typeof c.fromData == "function" ? c.fromData(r) : new c(r);
      } catch (o) {
        console.warn(`Failed to recreate ${t} instance:`, o);
      }
    return r;
  });
  e.nullable && (s = s.nullable());
  let n = s.default(null).describe(e.description || `Reference to ${t}`);
  const a = e.fieldBehavior || {
    serialize: "reference",
    // References should always serialize as references for efficiency
    compress: "reference",
    // Compressed mode also uses references
    clone: "copy",
    // Default clone behavior
    description: `Reference to ${t}`
  };
  return n = an(n, a), Object.defineProperty(n, "__zRefClassName", {
    value: t,
    enumerable: !1,
    writable: !1,
    configurable: !1
  }), n;
}
function Ne(t, e = {}) {
  let i = re(Oe(t)).default([]).describe(
    e.description || `Array of ${t} references`
  );
  const s = e.fieldBehavior || {
    serialize: "reference",
    // Reference arrays should always serialize as references
    compress: "reference",
    // Compressed mode also uses references
    clone: "copy",
    // Default clone behavior
    description: `Array of ${t} references`
  };
  return i = an(i, s), i;
}
function Ds(t, e = {}) {
  const i = t.map((a) => Oe(a));
  let s = re(ye(i)).default([]).describe(
    e.description || `Array of ${t.join(" or ")} references`
  );
  const n = e.fieldBehavior || {
    serialize: "reference",
    // Union reference arrays should always serialize as references
    compress: "reference",
    // Compressed mode also uses references
    clone: "copy",
    // Default clone behavior
    description: `Array of ${t.join(" or ")} references`
  };
  return s = an(s, n), s;
}
const Ha = ["topLeft", "topRight", "bottomLeft", "bottomRight"], zc = [
  "left",
  "centre",
  "right",
  "top",
  "bottom",
  "topLeft",
  "topRight",
  "bottomLeft",
  "bottomRight"
], Wc = ["lr", "rl", "bt", "tb"], Hc = j({
  // ========== Coordinates ==========
  x: d().default(0),
  y: d().default(0),
  z: d().default(0),
  // ========== Shape References ==========
  a: p().optional(),
  b: p().optional(),
  stock: Oe("Stock", { nullable: !0 }).optional(),
  // ========== Direction and Positioning ==========
  direction: Pe(Wc).nullable().optional(),
  type: p().optional(),
  corner: Pe(Ha).optional(),
  shapePosition: Pe(Ha).optional(),
  grid: Pe(zc).optional(),
  // ========== Collision and Raycast Flags ==========
  raycast: _().default(!1),
  collision: _().default(!1),
  tooClose: _().default(!1),
  adjustedForMinSpacing: _().default(!1)
}), Uc = {
  // Get coordinates as object
  coords: {
    compute: (t) => ({
      x: t.x,
      y: t.y
    }),
    metadata: {
      cache: !1,
      dependencies: ["x", "y"],
      returnType: "{ x: number; y: number }"
    }
  }
}, Hr = p().default("").describe('Unique identifier (e.g., "1.0" for shapes/stock, "g1" for groups, "ss-1_a2b3" for segments, "1.0-proximity" for proximity rectangles)'), Yc = p().max(200).default("").describe("User input name"), Kc = p().default("").describe("Parent identifier for tracking copies and relationships"), Zc = _().default(!1).describe("Prevent automatic rotation optimization"), Jc = _().default(!1).describe("Whether this is an offcut piece"), Ur = re(p()).default([]).describe("IDs of identical items").behavior({ clone: "copy" }), Wi = ye([
  xe(""),
  xe("l"),
  xe("w"),
  xe(" ").transform(() => ""),
  ri().transform(() => "")
]).default("").describe("Grain direction of the material"), Yr = ye([
  // String format (legacy support - color name or hex)
  p(),
  // Object format with hex and name
  j({
    hex: p().regex(/^#[0-9A-Fa-f]{6}$/, "Must be valid hex color (#RRGGBB)"),
    name: p().min(1)
  })
]).optional().describe("Material color (hex code + name or legacy string)"), Kr = Mt(
  (t) => t === null || t === " " || t === "n" || t === "none" || !["", "l", "w"].includes(t) ? "" : t,
  Pe(["", "l", "w"]).default("").describe("Orientation lock for rotation constraints")
), Xc = j({
  l1: d().default(0).describe("Long side 1 trim value"),
  l2: d().default(0).describe("Long side 2 trim value"),
  w1: d().default(0).describe("Short side 1 trim value"),
  w2: d().default(0).describe("Short side 2 trim value")
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 });
j({
  material: _(),
  thickness: _(),
  fit: _(),
  width: _()
}).nullable().default(null);
ye([
  xe(""),
  xe("l"),
  xe("w"),
  ri()
]).default(null);
Se(p(), d()).nullable().default(null);
Se(p(), d()).nullable().default(null);
const da = ye([
  xe(0),
  xe(1)
]), Qc = j({
  dimension: d().describe("Dimension of the strip shape batch"),
  rot: da.describe("Rotation: 0 (no rotation) or 1 (90 degrees)"),
  order: d().optional().describe("Order of the batch"),
  id: p().optional().describe("Batch ID"),
  stockId: p().optional().describe("Associated stock ID"),
  rerunning: _().optional().describe("Whether the batch is being rerun"),
  priorityShape: p().nullable().describe("Priority shape identifier (null if none specified)")
});
j({
  subsetUsed: _().optional().describe("Whether a subset was used for strip shape batches"),
  groups: Se(p(), Qc).describe("Groups of strip shape batches keyed by ID")
});
const eu = Pe(["none", "schema", "business", "full"]), Bt = j({
  // Validation issues (errors) - uses zRefArray to avoid type duplication across modules
  issues: Ne("Issue", {
    description: "Validation issues (errors)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Validation warnings (non-critical issues) - uses zRefArray to avoid type duplication
  warnings: Ne("Issue", {
    description: "Validation warnings (non-critical)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Legacy flag to skip validation (backward compatibility)
  skipValidation: _().optional(),
  // New validation control properties
  skipSchemaValidation: _().optional(),
  skipBusinessValidation: _().optional(),
  validationMode: eu.optional(),
  enableStrictMode: _().optional()
}), oi = {
  // Check if valid (no errors)
  isValid: {
    compute: (t) => (t.issues || []).filter((i) => i.type === "error").length === 0,
    cache: !0,
    dependencies: ["issues"],
    returnType: "boolean"
  }
};
function tu(t) {
  if (!t) return "";
  const e = t.indexOf(".");
  return e === -1 ? t : t.substring(0, e);
}
const fa = Bt.extend({
  // Identity
  id: Hr,
  // Description
  name: Yc,
  // Dimensions
  l: Mt((t) => typeof t == "number" && !isFinite(t) ? 1 : t ?? 1, d().positive()).describe("Length (long side dimension)"),
  w: Mt((t) => typeof t == "number" && !isFinite(t) ? 1 : t ?? 1, d().positive()).describe("Width (short side dimension)"),
  t: d().positive().nullable().optional().describe("Thickness (z-axis dimension)"),
  q: d().positive().int().default(1).describe("Quantity"),
  // Calculated dimensions (computed once on init for performance)
  area: d().positive().default(1).describe("Calculated area (l * w)"),
  longSide: d().positive().default(1).describe("Calculated long side Math.max(l, w)"),
  shortSide: d().positive().default(1).describe("Calculated short side Math.min(l, w)"),
  parentId: p().default("").describe("Parent ID extracted from id (integer part before decimal)"),
  // Flags
  duplicate: _().default(!1).describe("Whether this is a duplicate"),
  offcut: Jc,
  // Grain
  grain: Wi,
  preventGrainRotation: _().default(!1).describe("Prevent rotation that would change grain direction"),
  // Orientation
  preventAutoRotation: Zc,
  orientationLock: Kr,
  // Position (reset during cloning - cloned shapes should not have preset positions)
  x: d().nullable().default(null).describe("X coordinate position").behavior({ clone: "reset" }),
  y: d().nullable().default(null).describe("Y coordinate position").behavior({ clone: "reset" }),
  // Stock matching
  material: p().max(200).default("").transform((t) => t ? t.trim().toLowerCase() : "").describe("Material name"),
  // Trim
  trim: Xc.describe("Reduce the dimensions by specified trim values"),
  trimmed: _().default(!1).describe("Whether trim has been applied to dimensions"),
  // Proximity data (excluded from compression)
  proximity: j({
    rectangle: Oe("Rectangle").nullable().default(null),
    // Using 'any' to avoid circular import
    distance: d().nullable().default(null)
  }).default({ rectangle: null, distance: null }).behavior({ compress: "exclude" }),
  // Other properties
  cost: d().min(0).nullable().default(0).describe("Cost per unit"),
  customData: Se(p(), be()).default({}).describe("Custom user-defined data"),
  identicalTo: Ur,
  notes: p().max(500).default("").transform((t) => typeof t == "string" && t.length ? t.replace(/,/g, "").substring(0, 200) : "").describe("Description")
}), ha = {
  // Calculated Dimensions
  isSquare: {
    compute: (t) => t.l === t.w
  },
  perimeter: {
    compute: (t) => 2 * (t.l + t.w)
  },
  aspect: {
    compute: (t) => t.w > 0 ? t.l / t.w : 0
  },
  volume: {
    compute: (t) => t.t ? t.l * t.w * t.t : null
  },
  // Orientation
  canRotate: {
    compute: (t) => !(t.preventAutoRotation || t.preventGrainRotation && t.grain || t.orientationLock)
  },
  rot: {
    compute: (t) => t.w > t.l ? 1 : 0
  },
  rotatedDimensions: {
    compute: (t) => {
      const e = Math.max(t.l, t.w), i = Math.min(t.l, t.w);
      return ["l", "w"].includes(t.orientationLock) ? {
        l: t.orientationLock === "l" ? e : i,
        w: t.orientationLock === "l" ? i : e,
        orientationLock: t.orientationLock
      } : {
        l: e,
        w: i,
        orientationLock: t.orientationLock
      };
    },
    cache: !0
    // Keep cache hint for performance optimization
  },
  // Position
  hasCoords: {
    compute: (t) => t.x !== null && t.y !== null
  },
  coords: {
    compute: (t) => ({ id: t.id, x: t.x, y: t.y })
  },
  dimensions: {
    compute: (t) => ({
      id: t.id,
      l: t.l,
      w: t.w,
      t: t.t
    }),
    cache: !0
    // Keep cache hint for performance optimization
  },
  // Trim
  hasTrim: {
    compute: (t) => !!(t.trim?.l1 || t.trim?.l2 || t.trim?.w1 || t.trim?.w2)
  },
  trimmedDimensions: {
    compute: (t) => t.trimmed ? {
      l: t.l,
      w: t.w
    } : {
      l: t.l - (t.trim?.w1 || 0) - (t.trim?.w2 || 0),
      w: t.w - (t.trim?.l1 || 0) - (t.trim?.l2 || 0)
    }
  },
  untrimmedDimensions: {
    compute: (t) => t.trimmed ? {
      l: t.l + (t.trim?.w1 || 0) + (t.trim?.w2 || 0),
      w: t.w + (t.trim?.l1 || 0) + (t.trim?.l2 || 0)
    } : {
      l: t.l,
      w: t.w
    }
  },
  // Validation
  isValid: {
    compute: (t) => !t.issues || t.issues.length === 0
  }
}, iu = ["x", "y"];
Pe(iu);
const su = ["l", "w"];
Pe(su);
const nu = ["l", "w"], yi = Pe(nu);
ye([
  xe(0),
  xe(1),
  xe(2)
]);
ye([
  xe(0),
  xe(1),
  ri()
]);
const au = ["sheet", "linear", "roll"], rn = Mt(
  // Normalize to lowercase before validation
  (t) => typeof t == "string" ? t.toLowerCase() : t,
  ye([
    Pe(au),
    ri()
  ]).nullable().default(null)
).describe("Type of stock material"), Zr = j({
  // Infinite length flag for rolls and other continuous stock
  infiniteLength: _().default(!1).describe("Whether stock has infinite length (e.g., for rolls)"),
  // Allow shapes that exactly fit the stock dimensions
  allowExactFitShapes: _().default(!1).describe("Allow shapes that exactly fit"),
  // Automatically add stock as needed
  autoAdd: _().default(!1).describe("Automatically add stock as needed")
}), pa = fa.extend({
  // Identity - override id to be required for containers
  id: p().default("").describe("Unique identifier for containers (required for Stock and Segment)"),
  // Parent identifier for tracking copies
  parentId: Kc,
  // Container-specific fields
  stockType: rn,
  // Array of shapes or groups (excluded from compression - runtime only)
  shapes: Ds(["Shape", "Group"], {
    description: "Array of Shape or Group objects contained within this container"
  }).behavior({ clone: "reset", compress: "exclude" }),
  // Saw reference - using zRef for define.ref<Saw>('Saw') (share exact instance during cloning, serialize as reference)
  saw: Oe("Saw", {
    nullable: !0,
    description: "Reference to Saw class"
  }).behavior({ clone: "share", compress: "reference" }),
  // Algorithm benchmark results (reset during cloning)
  algoBenchmark: be().optional().describe("Benchmark results from optimization algorithms").behavior({ clone: "reset" }),
  // Container flag
  isContainer: _().default(!0).describe("Flag indicating this is a container")
}), ga = {
  // Include all Rectangle computed properties
  ...ha,
  // Check if container has shapes
  hasShapes: {
    compute: (t) => (t.shapes?.length || 0) > 0,
    metadata: {
      cache: !1,
      dependencies: ["shapes"],
      returnType: "boolean"
    }
  },
  // Check if container is a sheet
  isSheet: {
    compute: (t) => t.stockType === "sheet",
    metadata: {
      cache: !1,
      dependencies: ["stockType"],
      returnType: "boolean"
    }
  },
  // Check if container is linear
  isLinear: {
    compute: (t) => t.stockType === "linear",
    metadata: {
      cache: !1,
      dependencies: ["stockType"],
      returnType: "boolean"
    }
  },
  // Check if container is a roll
  isRoll: {
    compute: (t) => t.stockType === "roll",
    metadata: {
      cache: !1,
      dependencies: ["stockType"],
      returnType: "boolean"
    }
  },
  // Get cut type from saw
  cutType: {
    compute: (t) => t.saw?.cutType ?? null,
    metadata: {
      cache: !1,
      dependencies: ["saw"],
      returnType: "string | null"
    }
  },
  // Get cut preference from saw
  cutPreference: {
    compute: (t) => t.saw?.cutPreference ?? null,
    metadata: {
      cache: !1,
      dependencies: ["saw"],
      returnType: "string | null"
    }
  },
  // Get primary compression direction
  primaryCompression: {
    compute: (t) => t.saw?.efficiencyOptions?.primaryCompression ?? "w",
    metadata: {
      cache: !1,
      dependencies: ["saw"],
      returnType: "string"
    }
  },
  // Count of shapes
  shapeCount: {
    compute: (t) => t.shapes?.length || 0,
    metadata: {
      cache: !1,
      dependencies: ["shapes"],
      returnType: "number"
    }
  },
  // Total area of all shapes
  totalShapeArea: {
    compute: (t) => t.shapes ? t.shapes.reduce((e, i) => i && typeof i.area == "number" ? e + i.area : i && i.l && i.w ? e + i.l * i.w : e, 0) : 0,
    metadata: {
      cache: !0,
      dependencies: ["shapes"],
      returnType: "number"
    }
  },
  // Blade width from saw
  bladeWidth: {
    compute: (t) => t.saw?.bladeWidth ?? 0,
    metadata: {
      cache: !1,
      dependencies: ["saw"],
      returnType: "number"
    }
  },
  // Half blade width from saw
  halfBladeWidth: {
    compute: (t) => t.saw?.halfBladeWidth ?? 0,
    metadata: {
      cache: !1,
      dependencies: ["saw"],
      returnType: "number"
    }
  }
  // Stock reference removed from computed properties to avoid circular type reference
  // Defined manually in Container.ts as a getter method instead
};
pa.describe(JSON.stringify({
  name: "Container",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(ga)
}));
const ru = j({
  dimension: d().describe("Dimension of the strip shape batch"),
  rot: ye([
    xe(0),
    xe(1)
  ]).describe("Rotation"),
  order: d().optional().describe("Order of the batch"),
  id: p().optional().describe("Batch ID"),
  stockId: p().optional().describe("Associated stock ID"),
  rerunning: _().optional().describe("Whether the batch is being rerun"),
  priorityShape: p().nullable().describe("Priority shape identifier (null if none specified)")
}), Jr = j({
  // Strip direction
  myStripDirection: yi.optional(),
  // Strip parent (can be shape or group)
  myStripParent: ye([
    Oe("Shape", { nullable: !0 }),
    Oe("Group", { nullable: !0 })
  ]).default(null).describe("Parent strip shape or group for guillotine optimization").behavior({
    serialize: "reference",
    compress: "reference",
    clone: "share"
  }),
  // Phase number
  myPhase: d().int().min(0).optional().describe("Phase of the strip this shape belongs to"),
  // Strip shape batches optimization data
  stripShapeBatches: j({
    subsetUsed: _().optional().describe("Whether a subset was used for strip shape batches"),
    groups: Se(p(), ru).default({}).describe("Groups of strip shape batches keyed by ID")
  }).default({ groups: {} }).describe("Strip shape batch optimization data")
});
Jr.describe(JSON.stringify({
  name: "GuillotineState",
  version: "1.0.0"
}));
const ou = {}, lu = j({
  fill: d().default(0),
  similarDimensions: d().default(0),
  compression: d().default(0),
  cohesion: d().default(0),
  area: d().default(0),
  edge: d().default(0),
  alignment: d().default(0),
  exactFit: d().default(0),
  total: d().default(0),
  shapes: ye([
    Oe("Shape", { nullable: !0 }),
    Oe("Group", { nullable: !0 })
  ]).optional(),
  group: Oe("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
  cutDirection: yi.optional()
}).behavior({ clone: "reset" }), cu = j({
  exactStripFill: d().default(0),
  fill: d().default(0),
  cohesion: d().default(0),
  fenceConsistency: d().default(0),
  similarDimensions: d().default(0),
  compression: d().default(0),
  sameStripBonus: d().default(0),
  aspectRatio: d().optional(),
  total: d().default(0),
  cutDirection: yi,
  myStripDirection: yi.optional(),
  myStripParent: ye([
    Oe("Shape", { nullable: !0 }),
    Oe("Group", { nullable: !0 })
  ]).optional().describe("Parent strip shape or group for guillotine optimization"),
  myPhase: d().optional()
}).behavior({ clone: "reset" }), Ua = ye([
  lu,
  cu,
  // Also support the generic object with catchall for backward compatibility
  j({
    cutDirection: yi.optional(),
    myStripParent: ye([
      Oe("Shape", { nullable: !0 }),
      Oe("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group"),
    myStripDirection: yi.optional()
  }).catchall(d())
]).behavior({ clone: "reset" }), on = fa.extend({
  // Stock lock (shared schema) - original was stockLock: define.array(define.string())
  stockLock: re(p()).default([]).describe("Stock lock configuration"),
  // Stock matching - original object structure
  stockMatch: j({
    material: _(),
    thickness: _(),
    fit: _(),
    width: _()
  }).nullish().describe("Matching stock information"),
  // Guillotine state - reference that will be initialized in constructor (reset during cloning)
  // This ensures guillotineState is always a proper GuillotineState instance with methods
  guillotineState: Oe("GuillotineState", {
    nullable: !0,
    // Nullable in schema but always initialized in constructor
    description: "Data for guillotine cutting optimization (always initialized as instance)"
  }).nullable().default(null).behavior({
    clone: "unique",
    serialize: Ht() ? "full" : "exclude",
    compress: Ht() ? "full" : "exclude"
    // Consistent with serialize behavior
  }),
  // Priority and weighting (records) - exact match from original
  priority: Se(p(), d()).default({}).describe("Priority levels for optimization"),
  weighting: Se(p(), d()).optional().describe("Shape weighting for optimization"),
  // Pattern matching for stack detection (reset during cloning)
  patternMatch: _().default(!1).describe("Used for stack detection").behavior({ clone: "reset" }),
  firstShape: j({
    sampleRotations: re(d().int().min(0).max(1)).default([]).describe("Sample rotations (0 or 1) for first shape optimization").behavior({ clone: "reset" }),
    isFirstShape: _().default(!1).describe("Whether this is the first shape in optimization").behavior({ clone: "reset" })
  }).default({ sampleRotations: [], isFirstShape: !1 }),
  // Placement properties (reset during cloning)
  added: _().default(!1).describe("Whether shape has been added to a stock").behavior({ clone: "reset" }),
  placementOrder: d().int().min(0).optional().describe("Order in which shape was placed").behavior({ clone: "reset" }),
  // Stock reference (reset during cloning - cloned shapes should not be pre-placed)
  stock: Oe("Stock", {
    nullable: !0,
    description: "Reference to the stock this item is placed on"
  }).behavior({ clone: "reset" }),
  // Stock fitting data
  fitsStock: Se(
    p(),
    Se(p(), _())
  ).nullable().default(null).describe("Information about which stocks this shape fits"),
  // Scoring properties
  bestScore: j({
    x: d().nullable().default(null),
    y: d().nullable().default(null),
    rot: ye([xe(0), xe(1)]).nullable().default(null),
    total: d().nullable().default(null),
    weighting: Se(p(), d()).optional(),
    group: Oe("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
    score: Ua.optional(),
    point: be().optional().describe("Associated point for placement"),
    myStripParent: ye([
      Oe("Shape", { nullable: !0 }),
      Oe("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group for this score"),
    cutDirection: yi.optional(),
    myStripDirection: yi.optional(),
    stock: Oe("Stock", {
      nullable: !0,
      description: "Stock reference for this score"
    })
  }).nullable().default(null).optional().describe("Best optimization score achieved").behavior({
    clone: "reset",
    serialize: Ht() ? "full" : "exclude"
  }),
  // Current optimization score (can be efficiency or guillotine type, reset during cloning)
  score: Ua.nullable().optional().describe("Current optimization score").behavior({
    clone: "reset",
    serialize: Ht() ? "full" : "exclude"
  }),
  // Minimum spacing
  minSpacing: d().min(0).default(0).describe("Minimum spacing around shape or group")
}), ln = {
  // Include all Rectangle computed properties
  ...ha
  // Placeable doesn't define additional computed properties
};
on.describe(JSON.stringify({
  name: "Placeable",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(ln)
}));
const Xr = ["horizontal", "vertical"], Qr = ["position", "user", "strip", "firstShape"], ma = Pe(Xr).optional(), uu = j({
  x: d(),
  y: d(),
  autoId: p().optional(),
  rot: da
}), du = on.extend({
  // Override quantity - always 1 for groups
  q: d().min(1).max(1).int().default(1),
  // Groups have fixed orientation
  preventAutoRotation: _().default(!0),
  // Group-specific fields
  shapes: Ne("Shape").default([]),
  direction: ma,
  container: ye([
    Oe("Segment"),
    Oe("Stock")
  ]).behavior({ compress: "exclude" }),
  positions: re(uu).default([]),
  type: Pe(Qr).default("position"),
  efficiency: d().min(0).max(100).default(0),
  groupLength: d().min(0).default(0),
  groupWidth: d().min(0).default(0),
  outOfBounds: _().default(!1),
  collision: _().default(!1),
  counter: d().int().min(0).default(0),
  inputId: p().optional()
}), fu = {
  ...ln,
  // Include parent computed properties
  // Count of shapes in the group
  shapeCount: {
    compute: (t) => t.shapes?.length || 0,
    metadata: {
      cache: !1,
      dependencies: ["shapes"],
      returnType: "number"
    }
  },
  // Total area of all shapes in the group
  totalShapeArea: {
    compute: (t) => !t.shapes || t.shapes.length === 0 ? 0 : t.shapes.reduce((e, i) => {
      const s = i.l * i.w * (i.q || 1);
      return e + s;
    }, 0),
    metadata: {
      cache: !0,
      dependencies: ["shapes"],
      returnType: "number"
    }
  },
  // Group area
  groupArea: {
    compute: (t) => (t.groupLength || 0) * (t.groupWidth || 0),
    metadata: {
      cache: !1,
      dependencies: ["groupLength", "groupWidth"],
      returnType: "number"
    }
  },
  // Check if group has shapes
  hasShapes: {
    compute: (t) => (t.shapes?.length || 0) > 0,
    metadata: {
      cache: !1,
      dependencies: ["shapes"],
      returnType: "boolean"
    }
  },
  // Check if group is strip type
  isStripGroup: {
    compute: (t) => t.type === "strip",
    metadata: {
      cache: !1,
      dependencies: ["type"],
      returnType: "boolean"
    }
  },
  // Check if group is user type
  isUserGroup: {
    compute: (t) => t.type === "user",
    metadata: {
      cache: !1,
      dependencies: ["type"],
      returnType: "boolean"
    }
  },
  // Check if group is position type
  isPositionGroup: {
    compute: (t) => t.type === "position",
    metadata: {
      cache: !1,
      dependencies: ["type"],
      returnType: "boolean"
    }
  }
};
j({
  id: p(),
  x: d(),
  y: d(),
  shapes: Ne("Shape"),
  direction: Pe(Xr),
  type: Pe(Qr),
  container: ye([
    Oe("Segment"),
    Oe("Stock")
  ]).optional()
});
const eo = re(p()).default([]).describe("Parent IDs of stock(s) this shape is locked to"), hu = Pe(["l", "w"]).nullable().default(null), to = ye([
  xe("l"),
  xe("w"),
  ri()
]).default(null), pu = j({
  stockId: p().optional(),
  material: p().optional(),
  thickness: d().optional(),
  grain: Wi.optional()
}).describe("Which stock(s) this shape is a match for "), gu = Se(p(), be()).default({});
eo.describe("IDs of stocks this shape is locked to");
const mu = to.describe("Direction that should face up");
j({
  /**
   * Up direction - Direction that should face up during optimization
   */
  upDirection: mu
});
const yu = j({
  // Whether shape is in a user-defined group
  inUserGroup: _().default(!1).describe("Whether shape is in a user-defined group"),
  // Whether shape is in any group
  inGroup: _().default(!1).describe("Whether shape is currently in a group"),
  // Placement order within group
  placementOrder: d().int().min(0).optional().describe("Placement order within group"),
  // Group reference (the actual Group class instance)
  reference: Oe("Group", {
    nullable: !0,
    description: "Group this shape belongs to"
  }).optional().behavior({ clone: "reset", compress: "reference" }),
  // Group this was added as part of (preserved during serialization as reference)
  addedAsGroup: Oe("Group", {
    nullable: !0,
    description: "Group this was added as part of"
  }).optional().behavior({ clone: "reset", compress: "reference" })
}).default({
  inUserGroup: !1,
  inGroup: !1,
  placementOrder: void 0,
  reference: null,
  addedAsGroup: null
}).describe("Group metadata and reference"), Wn = on.extend({
  // ========== Group Metadata ==========
  // Nested object containing all group-related properties
  group: yu,
  // ========== Identity ==========
  // Unique identifier for referencing items (required for shapes)
  id: p().default("").describe("Unique identifier for referencing items"),
  // Array of IDs this shape is identical to
  identicalTo: Ur,
  // Whether this is a duplicate
  duplicate: _().default(!1).describe("Whether this is a duplicate shape"),
  // ========== Orientation ==========
  // Direction that should face up during optimization
  upDirection: hu.describe("Direction that should face up"),
  // ========== Extras ==========
  // Extras container for banding, finish, planing, etc.
  // Override default reference behavior to preserve full data in compressed mode
  extras: Oe("Extras", {
    nullable: !0,
    description: "Extras for this shape",
    fieldBehavior: {
      serialize: "full",
      // Always serialize full extras data
      compress: "full",
      // CRITICAL: Include full extras data in compressed mode (for results)
      clone: "copy"
    }
  }).optional(),
  // ========== Machining ==========
  // Machining operations for this shape (copy value during cloning)
  // Override default reference behavior to preserve full data in compressed mode
  machining: Oe("Machining", {
    nullable: !0,
    description: "Machining operations for this shape",
    fieldBehavior: {
      serialize: "full",
      // Always serialize full machining data
      compress: "full",
      // CRITICAL: Include full machining data in compressed mode (for results)
      clone: "copy"
    }
  }).optional()
}), io = {
  // Include all Placeable computed properties
  ...ln,
  // Check if shape is stacked
  isStacked: {
    compute: (t) => t.added && t.stock && t.stock.isStacked,
    metadata: {
      cache: !1,
      dependencies: ["added", "stock"],
      returnType: "boolean"
    }
  },
  // Total length of banding
  bandingLength: {
    compute: (t) => {
      const i = t.extras?.banding;
      if (!i) return 0;
      if (typeof i.calculateLength == "function")
        return i.calculateLength(t);
      let s = 0;
      return i.sides?.a && (s += t.l), i.sides?.b && (s += t.w), i.sides?.c && (s += t.l), i.sides?.d && (s += t.w), s;
    },
    metadata: {
      cache: !0,
      dependencies: ["extras", "l", "w"],
      returnType: "number"
    }
  },
  // Total cost of extras
  extrasCost: {
    compute: (t) => t.extras?.getTotalCost?.(t) || 0,
    metadata: {
      cache: !0,
      dependencies: ["extras"],
      returnType: "number"
    }
  },
  // Check if shape has extras
  hasExtras: {
    compute: (t) => t.extras?.hasExtras?.() || !1,
    metadata: {
      cache: !1,
      dependencies: ["extras"],
      returnType: "boolean"
    }
  },
  // Check if shape has machining
  hasMachining: {
    compute: (t) => t.machining !== null && t.machining !== void 0,
    metadata: {
      cache: !1,
      dependencies: ["machining"],
      returnType: "boolean"
    }
  },
  // Get proximity rectangle
  proximityRectangle: {
    compute: (t) => ({
      x: t.x,
      y: t.y,
      l: t.l,
      w: t.w
    }),
    metadata: {
      cache: !1,
      dependencies: ["x", "y", "l", "w"],
      returnType: "{ x: number | null; y: number | null; l: number; w: number }"
    }
  }
};
Wn.describe(JSON.stringify({
  name: "Shape",
  description: "Shape to be cut from stock material",
  version: "1.0.0",
  extends: "Placeable",
  computedProperties: Object.keys(io)
}));
const bu = j({
  // Internal-only fields (not exposed in API)
  fitsAll: _().default(!1),
  fitsAny: _().default(!1),
  largestShape: be().nullable(),
  smallestShape: be().nullable(),
  // API-exposed fields
  areaEfficiency: d().default(0),
  finishArea: d().default(0),
  bandingLength: d().default(0),
  partArea: d().default(0),
  totalParts: d().default(0),
  stackedNumberOfCuts: d().default(0),
  numberOfCuts: d().default(0),
  stackedCutLength: d().default(0),
  cutLength: d().default(0),
  rollLength: d().default(0)
}), vu = j({
  stock: Oe("Stock", { nullable: !0 }).optional(),
  number: d().int().min(1).optional()
}), Hn = j({
  ...pa.shape,
  ...Zr.shape,
  // Override x and y to default to 0 for Stock (containers are positioned at origin)
  x: d().nullable().default(0).describe("X coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  y: d().nullable().default(0).describe("Y coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  // Stock analysis results
  analysis: bu.optional().behavior({ clone: "reset" }),
  // Automatically add stock as needed during optimization
  autoAdd: _().optional().describe("Automatically add stock as needed during optimization"),
  // Pattern for identifying duplicate stock sheets
  duplicatePattern: p().default("").describe("Pattern for identifying duplicate stock sheets"),
  // Root segment for guillotine cutting (excluded from compression, reset during cloning)
  rootSegment: Oe("Segment", {
    nullable: !0
  }).optional().behavior({ clone: "reset", compress: "exclude" }),
  // Optimization score (excluded from compression, reset during cloning)
  score: be().nullable().default(null).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stack information (reset during cloning - cloned stocks start fresh)
  stack: vu.optional().describe("Stack information").behavior({ clone: "reset" }),
  // Whether the stock layout has been tidied (excluded from compression, reset during cloning)
  tidy: _().default(!1).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stock type (sheet, linear, roll) - inherited from shared stockType
  type: Pe(["sheet", "linear", "roll"]).optional().describe("Type of stock material"),
  // Whether this stock is unusable for optimization
  unusable: _().default(!1).describe("Whether this stock is unusable for optimization"),
  // Whether this stock has been used in the optimization (reset during cloning)
  used: _().default(!1).describe("Whether this stock has been used in the optimization").behavior({ clone: "reset" }),
  // The optimization strategy that selected this stock (reset during cloning)
  winningStrategy: p().optional().describe("The optimization strategy that selected this stock").behavior({ clone: "reset" }),
  // Display and filtering properties
  color: Yr.describe('Material color ({ hex: "#FF5733", name: "Red" } or legacy string)'),
  weight: d().positive().optional().describe("Weight in kg"),
  imageUrl: p().url().optional().describe("Image URL for stock display")
}), so = {
  // Include all Container computed properties
  ...ga,
  // Check if stock is stacked (is a child) - these get filtered from API
  isStacked: {
    compute: (t) => !!t.stack?.stock,
    metadata: {
      cache: !1,
      dependencies: ["stack"],
      returnType: "boolean"
    }
  },
  // Check if stock has stacks (is a parent with children)
  hasStack: {
    compute: (t) => !!t.stack?.number && t.stack.number > 1,
    metadata: {
      cache: !1,
      dependencies: ["stack"],
      returnType: "boolean"
    }
  }
};
Hn.describe(JSON.stringify({
  name: "Stock",
  description: "Stock material for cutting optimization",
  version: "1.0.0",
  extends: "Container",
  computedProperties: Object.keys(so)
}));
var le = /* @__PURE__ */ ((t) => (t.InputRectangle = "inputRectangle", t.InputShape = "inputShape", t.InputStock = "inputStock", t.InputUserGroup = "inputUserGroup", t.InputSaw = "inputSaw", t.Rectangle = "rectangle", t.Container = "container", t.Saw = "saw", t.Shape = "shape", t.Stock = "stock", t.Group = "group", t.UserGroup = "userGroup", t.StripGroup = "stripGroup", t.FirstShapeGroup = "firstShapeGroup", t.Segment = "segment", t.Offcut = "offcut", t.Cut = "cut", t.Line = "line", t.Placeable = "placeable", t.GuillotineState = "guillotineState", t.Point = "point", t.PointCollection = "pointCollection", t.Optimiser = "optimiser", t.Machining = "machining", t.Extras = "extras", t.Issue = "issue", t))(le || {}), wu = /* @__PURE__ */ ((t) => (t.Full = "full", t.Compressed = "compressed", t))(wu || {});
class st {
  static guardCache = /* @__PURE__ */ new Map();
  /**
   * Create a type guard function for a specific entity type
   */
  static create(e, i, s) {
    const n = `${e}-${i}`;
    if (this.guardCache.has(n))
      return this.guardCache.get(n);
    const a = (r) => {
      if (!r || typeof r != "object") return !1;
      if (r._type === e)
        return s ? s(r) : !0;
      const l = r.constructor?.name === i, u = "getType" in r && typeof r.getType == "function" && r.getType() === e, f = l || u, h = s ? s(r) : !0;
      return f && h;
    };
    return this.guardCache.set(n, a), a;
  }
  /**
   * Clear the cache (useful for testing or memory management)
   */
  static clearCache() {
    this.guardCache.clear();
  }
  /**
   * Get cache stats for debugging
   */
  static getCacheInfo() {
    return {
      size: this.guardCache.size,
      keys: Array.from(this.guardCache.keys())
    };
  }
}
const Su = st.create(le.Cut, "Cut"), ut = st.create(
  le.Shape,
  "Shape",
  (t) => !("shapes" in t)
), Rt = st.create(le.Stock, "Stock"), no = st.create(
  le.Group,
  "Group",
  (t) => "shapes" in t && Array.isArray(t.shapes) && t.type !== "user" && t.type !== "strip"
), gs = st.create(
  le.UserGroup,
  "Group",
  (t) => "shapes" in t && t.type === "user"
), ao = st.create(
  le.StripGroup,
  "Group",
  (t) => "shapes" in t && t.type === "strip"
), ro = st.create(
  le.FirstShapeGroup,
  "Group",
  (t) => "shapes" in t && t.type === "firstShape"
), Ze = (t) => no(t) || gs(t) || ao(t) || ro(t), zt = st.create(
  le.InputUserGroup,
  "InputUserGroup"
), Ni = st.create(le.Segment, "Segment"), xu = st.create(le.Offcut, "Offcut"), oo = (t) => {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  for (; e; ) {
    if (e.constructor?.name === "Container")
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return !1;
}, ku = st.create(le.Saw, "Saw"), lo = (t) => {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  for (; e; ) {
    if (e.constructor?.name === "Rectangle")
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return t.constructor?.name === "Rectangle";
}, Iu = (t) => {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  for (; e; ) {
    if (e.constructor?.name === "Placeable")
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return t.constructor?.name === "Placeable";
}, Te = st.create(
  le.InputShape,
  "InputShape"
), Gi = st.create(
  le.InputStock,
  "InputStock"
);
st.create(
  le.InputSaw,
  "InputSaw"
);
st.create(
  le.GuillotineState,
  "GuillotineState"
);
st.create(le.Line, "Line");
st.create(le.Point, "Point");
st.create(
  le.PointCollection,
  "PointCollection"
);
function Pu(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "__ref" in e && "autoId" in e && typeof e.__ref == "string" && typeof e.autoId == "string";
}
function co(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "trimmed" in e && e.trimmed === !0;
}
function Cu(t) {
  if (!t || typeof t != "object") return null;
  const e = t.__entityType;
  if (e && Object.values(le).includes(e))
    return e;
  if ("getType" in t && typeof t.getType == "function")
    try {
      const i = t.getType();
      if (Object.values(le).includes(i))
        return i;
    } catch {
    }
  return Su(t) ? le.Cut : Te(t) ? le.InputShape : Gi(t) ? le.InputStock : zt(t) ? le.InputUserGroup : gs(t) ? le.UserGroup : ao(t) ? le.StripGroup : ro(t) ? le.FirstShapeGroup : no(t) ? le.Group : ut(t) ? le.Shape : Rt(t) ? le.Stock : oo(t) ? le.Container : Ni(t) ? le.Segment : xu(t) ? le.Offcut : lo(t) ? le.Rectangle : Iu(t) ? le.Placeable : null;
}
const ui = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "sides" in e && (!("type" in e) || e.type === "banding") && (!("validate" in e) || typeof e.validate == "function");
}, Xt = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "faces" in e && (!("type" in e) || e.type === "finish") && (!("validate" in e) || typeof e.validate == "function");
}, Qt = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "faces" in e && "sides" in e && (!("type" in e) || e.type === "planing") && (!("validate" in e) || typeof e.validate == "function");
}, Au = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "images" in e && (!("type" in e) || e.type === "imageUpload") && (!("validate" in e) || typeof e.validate == "function");
};
st.create(
  le.Machining,
  "Machining",
  (t) => ("holes" in t || "corners" in t || "hingeHoles" in t) && "enabled" in t
);
st.create(
  le.Extras,
  "Extras",
  (t) => "banding" in t || "finish" in t || "planing" in t
);
st.create(
  le.Issue,
  "Issue",
  (t) => "type" in t && "message" in t && (t.type === "error" || t.type === "warning")
);
function Tu(t) {
  return t?.__entityType === le.Shape;
}
function sw(t) {
  return t?.__entityType === le.Group || t?.__entityType === le.StripGroup || t?.__entityType === le.FirstShapeGroup;
}
function nw(t) {
  return t?.__entityType === le.UserGroup;
}
function Ai(t) {
  return !(!t || typeof t != "string");
}
function Ou(t) {
  return !Ai(t) || !t || typeof t != "string" ? "" : t.toUpperCase();
}
function Lu(t) {
  return !Ai(t) || !t || typeof t != "string" ? "" : t?.toLowerCase();
}
function Fu(t) {
  return Ai(t) ? t.trim().split(" ").map((e) => Hi(e)).join(" ") : "";
}
function Hi(t) {
  return Ai(t) ? t.trim().charAt(0).toUpperCase() + t.slice(1) : "";
}
function $u(t) {
  return Ai(t) ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z\u00C0-\u024F0-9._\-|\s]/g, ""), t.trim()) : "";
}
function Du(t) {
  return Ai(t) ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), t.trim()) : "";
}
function aw(t, e = 100) {
  return Ai(t) ? (t = t.trim(), t = t.substring(0, e), t) : "";
}
let uo = Dr;
function Eu(t) {
  uo = t;
}
function jt(t, e) {
  if (Nr())
    return t;
  const i = uo.t(t, { ...e });
  return !i || i === t ? t : Hi(i);
}
function _u(t) {
  return typeof t == "string" && (t.startsWith("fields.") || t.startsWith("extras.") || t.startsWith("woodwork.") || t.startsWith("errors."));
}
function Mu(t) {
  if (!t) return;
  const e = {};
  for (const [i, s] of Object.entries(t))
    if (_u(s)) {
      const n = jt(s);
      e[i] = n;
    } else
      e[i] = s;
  return e;
}
function Ru(t, e) {
  const i = Bc(t), s = t.startsWith("errors.validation.") ? t : i, n = Mu(e);
  return {
    message: jt(s, n),
    translationKey: s,
    params: n
  };
}
function fo(t, e) {
  return Ru(t, e).message;
}
class ue {
  /**
   * Issue properties - direct properties without schema inheritance
   */
  message = "";
  identifier = "";
  field = [];
  index = [];
  id = "";
  type = "error";
  category = [];
  /**
   * Reference to the item that has the issue
   */
  item = null;
  constructor(e = {}) {
    const i = Vc.parse(e), s = ue.determineIdentifier(i.item, i.index || []);
    let n = i.id || "";
    !n && i.item && "autoId" in i.item && i.item.autoId && (n = i.item.autoId);
    const a = i.shouldTranslate !== !1 ? fo(i.message, i.params) : i.message;
    if (this.message = a, this.identifier = s, this.field = i.field.map((r) => [...r]), this.index = i.index ? [...i.index] : [], this.id = n, this.type = i.type, this.category = i.category || [], this.item = i.item, this.addToItemIssues(i.item), Array.isArray(i.issues) && i.issues.push(this), i.throwError) {
      const r = `Issue created for ${Cu(i.item)}: ${this.identifier || "N/A"} - ${this.field.map((o) => o.join(".")).join(", ")}`;
      throw new Error(r);
    }
  }
  /**
   * Determine identifier from item properties or index
   */
  static determineIdentifier(e, i) {
    if (!e) return "";
    const s = e;
    return s.name?.length ? s.name.toLocaleUpperCase() : s.id?.length ? s.id : s.parentId?.length ? s.parentId : typeof i[0] == "number" ? String(i[0] + 1) : "";
  }
  /**
   * Add this issue to the item's issues array
   */
  addToItemIssues(e) {
    if (!e) return;
    const i = e;
    "issues" in i && Array.isArray(i.issues) && i.issues.push(this);
  }
  /**
   * Get human-readable indexes (1-based instead of 0-based)
   */
  getHumanReadableIndexes() {
    return this.index.length ? this.index.map((e) => {
      const i = typeof e == "number" ? e : parseInt(String(e), 10);
      return isNaN(i) ? "" : String(i + 1);
    }).filter(Boolean).join(",") : "";
  }
  /**
   * Check if this issue matches a specific field path and index
   */
  isMatch(e, i) {
    const s = this.field.some((a) => this.isFieldPathEqual(a, e)), n = this.index.includes(i);
    return s && n;
  }
  /**
   * Compare field paths for equality
   */
  isFieldPathEqual(e, i) {
    return e.length !== i.length ? !1 : e.every((s, n) => s === i[n]);
  }
  /**
   * Convert Issue to plain data for serialization
   */
  toData() {
    return {
      __entityType: "Issue",
      message: this.message,
      identifier: this.identifier,
      field: this.field.map((e) => [...e]),
      index: [...this.index],
      id: this.id,
      type: this.type,
      category: [...this.category]
      // Exclude 'item' to avoid circular references
    };
  }
  /**
   * Create Issue from plain data
   */
  static fromData(e, i) {
    return new ue({
      ...e,
      item: i,
      shouldTranslate: !1
      // Message is already translated
    });
  }
  /**
   * Get entity type for serialization
   */
  getType() {
    return "Issue";
  }
}
zn(
  (t) => t instanceof ue,
  { message: "Must be an Issue instance" }
);
const Dn = 10, Ya = 0;
class Ws extends Error {
  constructor(e) {
    super(e), this.name = "NumberFormatError";
  }
}
const ns = {
  "½": "1/2",
  "⅓": "1/3",
  "¼": "1/4",
  "⅔": "2/3",
  "¾": "3/4",
  "⅕": "1/5",
  "⅖": "2/5",
  "⅗": "3/5",
  "⅘": "4/5",
  "⅙": "1/6",
  "⅚": "5/6",
  "⅛": "1/8",
  "⅜": "3/8",
  "⅝": "5/8",
  "⅞": "7/8"
};
function ju(t, e) {
  let i;
  if (typeof t == "number" ? i = t : i = new cs(t).valueOf(), typeof e == "number") {
    const s = Math.pow(10, e);
    return Math.round(i * s) / s;
  }
  return i;
}
function Bu(t, e) {
  const i = new cs(t);
  if (e > 0) {
    const s = i.mul(e), n = Math.round(s.valueOf());
    return new cs(n, e).toFraction(!0);
  }
  return i.simplify().toFraction(!0);
}
function Vu(t, e, i = !1) {
  const s = t == null || String(t).trim() === "";
  if (i && s)
    return { value: null, valid: !1, message: "errors.validation.field.required" };
  if (!i && s)
    return { value: null, valid: !0 };
  const n = String(t);
  try {
    const a = ho(n, !0), r = parseFloat(a ?? ""), o = a !== null && a !== "" && !isNaN(r) && isFinite(r);
    return {
      value: o ? r : t,
      valid: o,
      message: o ? void 0 : "invalid_number",
      messageData: o ? void 0 : "Could not parse as decimal."
    };
  } catch (a) {
    return {
      value: t,
      valid: !1,
      message: "errors.validation.field.invalid_number",
      messageData: a.message || "Parsing error"
    };
  }
  return {
    value: t,
    valid: !1,
    message: "errors.validation.field.invalid_format",
    messageData: e
  };
}
function Nu(t = "en-US") {
  try {
    const e = Intl.NumberFormat(t).formatToParts(123456789e-2);
    return {
      thousandsSeparator: e.find((i) => i.type === "group")?.value || ",",
      decimalSeparator: e.find((i) => i.type === "decimal")?.value || "."
    };
  } catch {
    return console.warn("Failed to detect number separators. Using defaults."), { thousandsSeparator: ",", decimalSeparator: "." };
  }
}
function Es(t) {
  if (t == null || t === "") return null;
  const e = String(t).trim();
  if (!e) return null;
  try {
    const { thousandsSeparator: i, decimalSeparator: s } = Nu(), n = e.replace(new RegExp(`\\${i}`, "g"), "").replace(new RegExp(`\\${s}`, "g"), "."), a = Number(n);
    return isFinite(a) ? a : null;
  } catch (i) {
    throw new Ws(`Failed to parse locale number: "${t}". ${i.message || "Parsing error"}`);
  }
}
function ya(t) {
  if (!t) return !1;
  const e = t.toString().trim();
  if (!e) return !1;
  const i = Object.keys(ns).join("");
  return new RegExp(
    `^-?((\\d+\\s+)?\\d+\\/\\d+|\\d+|\\d+[${i}]|[${i}]|\\d+'(?:\\s*\\d+(?:\\/\\d+)?"?)?|(\\d+\\s+)?\\d+\\/\\d+"|\\d+")$`
  ).test(e);
}
function ho(t, e = !1) {
  if (t == null || t === "") return null;
  let i = String(t).trim();
  if (!i) return null;
  const s = Object.keys(ns).join("");
  i = i.replace(new RegExp(`(\\d)\\s+([${s}])`, "g"), "$1$2");
  try {
    const n = Object.keys(ns).join(""), a = new RegExp(`^(-?)(\\d+)([${n}])$`), r = new RegExp(`^(-?)([${n}])$`), o = i.match(a), l = i.match(r);
    if (o) {
      const c = o[1], u = o[2], f = o[3], h = ns[f];
      if (h)
        return `${c}${u} ${h}`;
      throw new Error(`Unknown vulgar fraction character: ${f}`);
    } else if (l) {
      const c = l[1] || "", u = l[2], f = ns[u];
      if (f)
        return `${c}${f}`;
      throw new Error(`Unknown vulgar fraction character: ${u}`);
    } else if (ya(i)) {
      let c = "";
      i.startsWith("-") && (c = "-", i = i.substring(1).trim());
      const u = i.replace(/[^0-9\s/]/g, "").replace(/\s+/g, " ").trim();
      if ((u.match(/\//g) || []).length > 1)
        throw new Error("Invalid fraction format: multiple slashes.");
      return c + u;
    } else {
      e ? (i = i.replace(/[^0-9,. -]/g, ""), i = i.replace(/\s/g, "")) : (i = i.replace(/[^0-9.-]/g, ""), i = i.replace(/,/g, "")), i.startsWith(".") && (i = "0" + i), i.startsWith("-.") && (i = "-0." + i.substring(2));
      const c = i.split(".");
      c.length > 2 && (i = c[0] + "." + c.slice(1).join(""));
      const u = e ? Es(i) : parseFloat(i);
      return u === null || isNaN(u) || !isFinite(u) ? null : u.toString();
    }
  } catch (n) {
    throw new Ws(
      `Failed to clean numeric input: "${t}". ${n.message || "Cleaning error"}`
    );
  }
}
function Ka(t, e, i = null, s = null) {
  if (t && !(!Te(t) && !Gi(t))) {
    if (!["decimal", "fraction"].includes(e)) {
      console.warn("Attempting to update to an invalid number format:", e);
      return;
    }
    for (const n of t.numberFormatKeys)
      if (typeof t[n] == "object" && t[n] !== null)
        for (const a in t[n])
          Object.prototype.hasOwnProperty.call(t[n], a) && (t[n][a] = Q({ v: t[n][a], nf: e, dp: i, pl: !1, fr: s }));
      else
        t[n] = Q({ v: t[n], nf: e, dp: i, pl: !1, fr: s });
  }
}
function Gu(t) {
  return /^-?\d*\.?\d+$/.test(t);
}
function qu(t) {
  return /^-?(\d+\s+)?\d+\/\d+$/.test(t) || /^-?\d+$/.test(t);
}
function Q(t) {
  if (t.v == null || t.v === "")
    return t.nf === "decimal" || !t.nf && t.o?.numberFormat !== "fraction" ? null : "";
  const e = t.o ?? {}, i = t.nf ?? e?.numberFormat ?? "decimal", s = t.dp ?? e?.decimalPlaces ?? Dn, n = t.pl ?? e?.parseLocale ?? !1, a = t.fr ?? e?.fractionRoundTo ?? Ya;
  if (i === "decimal") {
    if (typeof t.v == "number") {
      if (typeof s == "number" && s !== Dn) {
        const r = Math.pow(10, s);
        return Math.round(t.v * r) / r;
      }
      return t.v;
    }
    if (typeof t.v == "string") {
      const r = t.v.trim();
      if (Gu(r) && !n) {
        const o = parseFloat(r);
        if (isFinite(o)) {
          if (typeof s == "number" && s !== Dn) {
            const l = Math.pow(10, s);
            return Math.round(o * l) / l;
          }
          return o;
        }
      }
    }
  } else if (i === "fraction" && typeof t.v == "string") {
    const r = t.v.trim();
    if (qu(r))
      try {
        const o = new cs(r);
        if (isFinite(o.valueOf())) {
          if (a === 0 || a === Ya)
            return o.toFraction(!0);
          const l = o.mul(a), c = Math.round(l.valueOf());
          return new cs(c, a).toFraction(!0);
        }
      } catch {
      }
  }
  try {
    const r = ho(t.v, n);
    return r === null || r === "" ? i === "decimal" ? null : "" : i === "decimal" ? ju(r, s) : Bu(r, a);
  } catch (r) {
    throw r instanceof Ws ? r : new Ws(
      `Failed to convert number format: "${t.v}" to ${i}. ${r.message}`
    );
  }
}
const Ut = {
  x: "X",
  y: "Y",
  l: "Length",
  w: "Width",
  t: "Thickness",
  q: "Quantity",
  orientationLock: "Rotation",
  name: "Name",
  material: "Material",
  banding: "Banding",
  finish: "Finish",
  cost: "Cost",
  grain: "Grain",
  trim: "Trim",
  autoAdd: "Auto Add",
  machining: "Machining",
  planing: "Planing",
  dxfPreview: "DXF Preview",
  customData: "Custom Data",
  l1: "L1",
  l2: "L2",
  w1: "W1",
  w2: "W2",
  a: "a",
  b: "b",
  c: "c",
  d: "d",
  all: "all",
  "face.a": "face A",
  "face.b": "face B",
  "side.a": "corner A",
  "side.b": "corner B",
  "side.c": "corner C",
  "side.d": "corner D",
  "side.l1": "side L1",
  "side.l2": "side L2",
  "side.w1": "side W1",
  "side.w2": "side W2"
};
function tt(t, e) {
  if (e?.returnKey)
    return `fields.${t}`;
  const i = `fields.${t}`, s = jt(i);
  if (s === i) {
    const n = Ut[t] || t;
    return Ht() && !Ut[t] && console.warn(`[field-mappings] No translation or fallback for field: "${t}"`), n;
  }
  return Ht() && console.log(`[field-mappings] Translated "${t}" -> "${s}"`), s;
}
const po = (t, e, i, s, n, a) => {
  const r = Ue(t, e);
  if (r == null || r === "") return;
  if (typeof r != "string") {
    new ue({
      item: t,
      message: jt("errors.validation.must_be_string", {
        0: Ut[e]
      }),
      shouldTranslate: !1,
      field: [[e]],
      index: s !== void 0 ? [s] : null,
      type: n ? "warning" : "error",
      issues: a
    });
    return;
  }
  const o = r?.toLowerCase();
  i.includes(o) || new ue({
    item: t,
    message: jt("errors.validation.must_be_values", {
      0: Ut[e],
      1: i.join(", ")
    }),
    shouldTranslate: !1,
    field: [[e]],
    index: s !== void 0 ? [s] : null,
    type: n ? "warning" : "error",
    issues: a
  });
};
function go(t) {
  return t.filter((e) => e.type === "error");
}
function zu(t, e) {
  return typeof t == "object" && t !== null && e in t;
}
function Wu(t) {
  return zu(t, "issues") && Array.isArray(t.issues);
}
function Za(t, e, i = !1) {
  if (!Wu(t) || !t.issues?.length)
    return !1;
  const s = i ? "warning" : "error";
  return t.issues.filter((r) => r.type === s).some((r) => r.field?.length ? r.field.some((o) => o.every((l, c) => l === Uu(e[c]))) : !1);
}
const Hu = {
  partMaterial: "material",
  stockMaterial: "material"
};
function Uu(t) {
  return Hu[t] ?? t;
}
const Yu = ["banding", "finish", "planing", "info"], En = p().refine(
  (t) => t.startsWith("side.") || t.startsWith("face."),
  { message: 'Location must start with "side." or "face."' }
).transform((t) => t), At = ye([
  _(),
  p(),
  Se(p(), ye([_(), p()]))
  // Object-based values: { type: 'oak', thickness: '1mm', test: true }
]), cn = Bt.extend({
  // ========== Identity ==========
  type: Pe(Yu).optional().describe("Type of extra"),
  enabled: _().default(!0).describe("Whether extra is enabled"),
  // ========== Face/Side mappings (superset - each extra uses what it needs) ==========
  // Face values (front/back) - partial record to allow any subset of faces
  faces: j({
    a: At.optional(),
    b: At.optional()
  }).optional().describe("Partial mapping of face keys to extra values"),
  // Side values (edges) - partial record to allow any subset of sides
  sides: j({
    a: At.optional(),
    b: At.optional(),
    c: At.optional(),
    d: At.optional(),
    l1: At.optional(),
    l2: At.optional(),
    w1: At.optional(),
    w2: At.optional()
  }).optional().describe("Partial mapping of side keys to extra values")
  // NOTE: Options are now centralized in CalculationData.extrasOptions
  // No per-shape options are stored - all extras use centralized configuration
}), ba = {
  // Inherit computed properties from validation base
  ...oi
  // Add any extra-specific computed properties here
};
Se(
  Pe(["a", "b"]),
  At
);
Se(
  Pe(["l1", "l2", "w1", "w2", "a", "b", "c", "d"]),
  At
);
const mo = j({
  min: d().optional().describe("Minimum value"),
  max: d().optional().describe("Maximum value"),
  message: p().optional().describe("Custom error message")
});
j({
  scope: Pe(["face", "side"]),
  key: p(),
  // Face or Side key
  original: p()
  // Original ExtraLocation string
});
const Ku = j({
  location: p().describe("Location identifier (e.g., face.a, side.l1)"),
  properties: Se(p(), mo).optional(),
  disabledMessage: p().optional().describe("Message when location is disabled")
}), Zu = j({
  global: Se(p(), mo).optional(),
  locations: re(Ku).optional().describe("Location-specific constraints"),
  defaultMessage: p().optional().describe("Default message when constraints not met")
});
j({
  scope: re(Pe(["faces", "sides"])).describe("Scopes this extra type supports"),
  faces: re(zn()).optional().describe("Available face locations"),
  sides: re(zn()).optional().describe("Available side locations"),
  constraints: Zu.optional()
});
const yo = cn, Ju = {
  // Check if any banding is applied
  hasAnyBanding: {
    compute: (t) => t.sides ? Object.keys(t.sides).some((e) => {
      const i = t.sides[e];
      return i !== void 0 && i !== !1 && i !== "";
    }) : !1,
    metadata: {
      cache: !1,
      dependencies: ["sides"],
      returnType: "boolean"
    }
  },
  // Get all sides with banding
  activeSides: {
    compute: (t) => t.sides ? Object.keys(t.sides).filter((e) => {
      const i = t.sides[e];
      return i !== void 0 && i !== !1 && i !== "";
    }) : [],
    metadata: {
      cache: !1,
      dependencies: ["sides"],
      returnType: "string[]"
    }
  }
}, Xu = ["radius", "bevel"], Qu = Bt.extend({
  // Corner type
  type: Pe(Xu).nullable().optional().describe("Type of corner modification"),
  // Size of the corner modification
  size: d().nonnegative().nullable().default(0).describe("Size of the corner modification in mm"),
  // Corner index
  index: d().min(0).max(3).default(0).describe("Corner index (0=BL, 1=BR, 2=TR, 3=TL)")
}), ed = {
  // Inherit computed properties from validation base
  ...oi,
  // Check if corner has any operation
  hasOperation: {
    compute: (t) => t.type !== void 0 && t.size > 0,
    metadata: {
      cache: !0,
      dependencies: ["type", "size"],
      returnType: "boolean"
    }
  }
}, td = ["l", "w"], id = ["top", "bottom", "left", "right", "merged"], sd = j({
  // Coordinates
  x1: d().default(0),
  x2: d().default(0),
  y1: d().default(0),
  y2: d().default(0),
  // Dimension and position
  dimension: Pe(td).optional(),
  position: Pe(id).optional(),
  // Stock reference - required as cuts cannot exist without a stock
  stock: Oe("Stock"),
  // Guillotine properties
  isGuillotine: _().default(!1),
  guillotineState: j({
    order: d().nullable().optional(),
    parentSegmentID: p().nullable().optional(),
    phase: d().nullable().optional(),
    segmentCutOrder: d().nullable().optional(),
    partProduced: p().nullable().optional()
  }).nullable().default({}),
  // PTX properties
  ptxData: j({
    order: d().nullable().optional(),
    function: d().nullable().optional(),
    isDummy: _().nullable().optional(),
    headCutStrip: _().nullable().optional()
  }).nullable().optional(),
  // Cut properties
  isHead: _().default(!1),
  isTrim: _().default(!1),
  beamTrimL1: _().default(!1),
  beamTrimL2: _().default(!1),
  beamTrimW1: _().default(!1),
  beamTrimW2: _().default(!1),
  // Distances
  distances: j({
    bottom: d().nullable().optional(),
    left: d().nullable().optional(),
    right: d().nullable().optional(),
    top: d().nullable().optional(),
    partSize: d().nullable().optional()
  }).nullable().optional(),
  // Runtime flags
  remove: _().optional().behavior({ compress: "exclude" })
}), nd = {
  // Check if cut is inside stock boundaries
  isInsideStock: {
    compute: (t) => {
      const e = t.stock;
      if (!e) return !1;
      const i = (e.bladeWidth || 0) / 2;
      switch (t.position) {
        case "bottom":
          return t.y1 + i > 0;
        case "left":
          return t.x1 + i > 0;
        case "top":
          return t.y1 - i < (e.w || 0);
        case "right":
          return t.x1 - i < (e.l || 0);
        default:
          return t.x1 >= 0 && t.x2 <= (e.l || 0) && t.y1 >= 0 && t.y2 <= (e.w || 0);
      }
    },
    metadata: {
      cache: !1,
      dependencies: ["x1", "x2", "y1", "y2", "position", "stock"],
      returnType: "boolean"
    }
  },
  // Check if cut is horizontal
  isHorizontal: {
    compute: (t) => t.dimension === "l",
    metadata: {
      cache: !1,
      dependencies: ["dimension"],
      returnType: "boolean"
    }
  },
  // Check if cut is vertical
  isVertical: {
    compute: (t) => t.dimension === "w",
    metadata: {
      cache: !1,
      dependencies: ["dimension"],
      returnType: "boolean"
    }
  },
  // Check if this is a trim cut
  isTrimCut: {
    compute: (t) => t.isTrim || t.beamTrimL1 || t.beamTrimW1,
    metadata: {
      cache: !1,
      dependencies: ["isTrim", "beamTrimL1", "beamTrimW1"],
      returnType: "boolean"
    }
  },
  // Check if cut is marked for removal
  isMarkedForRemoval: {
    compute: (t) => t.remove === !0,
    metadata: {
      cache: !1,
      dependencies: ["remove"],
      returnType: "boolean"
    }
  },
  // Calculate line dimension from coordinates
  lineDimension: {
    compute: (t) => t.x1 === t.x2 && t.y1 !== t.y2 ? "w" : t.y1 === t.y2 && t.x1 !== t.x2 ? "l" : null,
    metadata: {
      cache: !1,
      dependencies: ["x1", "x2", "y1", "y2"],
      returnType: "'l' | 'w' | null"
    }
  },
  // Get cut coordinates as object
  coordinates: {
    compute: (t) => ({
      x1: t.x1,
      x2: t.x2,
      y1: t.y1,
      y2: t.y2
    }),
    metadata: {
      cache: !1,
      dependencies: ["x1", "x2", "y1", "y2"],
      returnType: "{ x1: number; x2: number; y1: number; y2: number }"
    }
  },
  // Calculate cut length
  length: {
    compute: (t) => {
      if (t.dimension === "l")
        return t.x2 - t.x1;
      if (t.dimension === "w")
        return t.y2 - t.y1;
      switch (t.position) {
        case "top":
        case "bottom":
          return t.x2 - t.x1;
        case "left":
        case "right":
          return t.y2 - t.y1;
        default:
          return 0;
      }
    },
    metadata: {
      cache: !1,
      dependencies: ["dimension", "x1", "x2", "y1", "y2", "position", "stock"],
      returnType: "number"
    }
  },
  // Calculate cut area
  area: {
    compute: (t) => {
      const i = t.stock?.bladeWidth ?? 0;
      if (t.dimension === "l")
        return (t.x2 - t.x1) * i;
      if (t.dimension === "w")
        return (t.y2 - t.y1) * i;
      switch (t.position) {
        case "top":
        case "bottom":
          return (t.x2 - t.x1) * i;
        case "left":
        case "right":
          return (t.y2 - t.y1) * i;
        default:
          return 0;
      }
    },
    metadata: {
      cache: !1,
      dependencies: ["dimension", "x1", "x2", "y1", "y2", "position", "stock"],
      returnType: "number"
    }
  }
}, ad = Bt.extend({
  // Identity
  id: p().optional().describe("Unique identifier for the extras container"),
  // Individual extras - using ref for proper typing
  // Override default reference behavior to serialize full data for proper __entityType markers
  banding: Oe("Banding", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Edge banding configuration"),
  finish: Oe("Finish", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Surface finish configuration"),
  planing: Oe("Planing", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Planing configuration")
  // imageUpload: zRef<ImageUpload>( 'ImageUpload', { nullable: true } ).describe( 'Uploaded images' )
  // issues and warnings are now properly inherited from validationBasePropertiesSchema
}), rd = {
  // Calculate total cost of all extras
  totalCost: {
    compute: (t) => {
      let e = 0;
      return t.banding && typeof t.banding.getCost == "function" && (e += t.banding.getCost()), t.finish && typeof t.finish.getCost == "function" && (e += t.finish.getCost()), t.planing && typeof t.planing.getCost == "function" && (e += t.planing.getCost()), e;
    },
    metadata: {
      cache: !1,
      dependencies: ["banding", "finish", "planing"],
      returnType: "number"
    }
  },
  // Check if any extras are applied
  hasAnyExtras: {
    compute: (t) => !!(t.banding || t.finish || t.planing),
    metadata: {
      cache: !1,
      dependencies: ["banding", "finish", "planing"],
      returnType: "boolean"
    }
  },
  // Check if valid
  isValid: {
    compute: (t) => (t.issues || []).filter((i) => i.type === "error").length === 0,
    metadata: {
      cache: !0,
      dependencies: ["issues"],
      returnType: "boolean"
    }
  }
}, bo = cn, od = {
  // Inherit computed properties from Extra base (includes validation base)
  ...ba,
  // Check if any finish is applied
  hasAnyFinish: {
    compute: (t) => t.faces ? Object.keys(t.faces).some((e) => {
      const i = t.faces[e];
      return i !== void 0 && i !== !1 && i !== "";
    }) : !1,
    metadata: {
      cache: !1,
      dependencies: ["faces"],
      returnType: "boolean"
    }
  },
  // Get all faces with finish
  activeFaces: {
    compute: (t) => t.faces ? Object.keys(t.faces).filter((e) => {
      const i = t.faces[e];
      return i !== void 0 && i !== !1 && i !== "";
    }) : [],
    metadata: {
      cache: !1,
      dependencies: ["faces"],
      returnType: "string[]"
    }
  }
}, ld = ["l1", "l2", "w1", "w2"], cd = Bt.extend({
  // Position
  position: d().min(0).default(0).describe("Position along the side"),
  side: Pe(ld).describe("Side where hinge is placed"),
  face: d().min(0).max(1).default(0).describe("Face side (0 = front, 1 = back)"),
  // Hole configuration
  numHoles: d().min(1).default(2).describe("Number of holes"),
  diameter: d().min(0.1).default(35).describe("Hole diameter in mm"),
  depth: d().min(0).default(13).describe("Hole depth in mm"),
  // Hinge dimensions
  hingeLength: d().min(0).default(52).describe("Length of the hinge"),
  distanceFromEdge: d().min(0).default(22.5).describe("Distance from edge to hole center"),
  outerSpacing: d().min(0).default(9.5).describe("Spacing from hinge ends to outer holes"),
  // Constraints
  minimumHoleDistance: d().min(0).optional().describe("Minimum distance between holes"),
  positionLimit: d().min(0).optional().describe("Maximum position along side")
}), ud = {
  // Inherit computed properties from validation base
  ...oi,
  // Calculate individual hole positions
  holePositions: {
    compute: (t) => {
      const e = [];
      if (t.numHoles === 1)
        e.push(t.position + t.hingeLength / 2);
      else if (t.numHoles === 2)
        e.push(t.position + t.outerSpacing), e.push(t.position + t.hingeLength - t.outerSpacing);
      else {
        const i = (t.hingeLength - 2 * t.outerSpacing) / (t.numHoles - 1);
        for (let s = 0; s < t.numHoles; s++)
          e.push(t.position + t.outerSpacing + s * i);
      }
      return e;
    },
    metadata: {
      cache: !0,
      dependencies: ["position", "numHoles", "hingeLength", "outerSpacing"],
      returnType: "number[]"
    }
  }
}, dd = ["regular", "hinge", "shelf"], fd = Bt.extend({
  // Position
  x: d().min(0).default(0).describe("X position from left edge"),
  y: d().min(0).default(0).describe("Y position from bottom edge"),
  // Dimensions
  diameter: d().min(0.1).default(5).describe("Hole diameter in mm"),
  depth: d().min(0).optional().describe("Hole depth (undefined for through hole)"),
  // Configuration
  face: d().default(0).describe("Face index (0=front, 1=back)"),
  type: Pe(dd).default("regular").describe("Type of hole")
}), hd = {
  // Inherit computed properties from validation base
  ...oi,
  // Check if it's a through hole
  isThrough: {
    compute: (t) => t.depth === void 0 || t.depth === 0,
    metadata: {
      cache: !0,
      dependencies: ["depth"],
      returnType: "boolean"
    }
  }
};
function Ee(t, e) {
  return t._metadata = e, e.description ? t.describe(e.description) : t;
}
const pd = (t, e) => Ee(t, e), Bi = (t) => {
  const { min: e, allowZero: i = !1, nullable: s = !0 } = t || {};
  let n;
  return e !== void 0 ? n = i ? d().min(e) : d().min(e) : n = i ? d().min(0) : d().gt(0), s ? ye([
    n,
    p(),
    ri()
  ]).transform((a) => a == null || a === "" ? null : typeof a == "string" ? Q({ v: a }) ?? null : a) : ye([
    n,
    p()
  ]).transform((a) => a === "" ? 0 : typeof a == "string" ? Q({ v: a }) ?? 0 : a);
}, vo = () => Ee(
  Wi,
  {
    label: "fields.grain",
    group: "properties",
    options: [
      { value: "n", label: "fields.grain.none" },
      { value: "l", label: "fields.grain.length" },
      { value: "w", label: "fields.grain.width" },
      { value: "y", label: "fields.grain.either" }
    ]
  }
), gd = () => Ee(
  Kr,
  {
    label: "fields.orientationLock",
    group: "properties",
    options: [
      { value: "", label: "fields.orientationLock.free" },
      { value: "l", label: "fields.orientationLock.length" },
      { value: "w", label: "fields.orientationLock.width" }
    ]
  }
), _s = (t) => Ee(
  Bi({ allowZero: t.allowZero, nullable: !0 }).default(null),
  {
    label: t.label,
    placeholder: t.placeholder || "",
    group: "dimensions",
    allowZero: t.allowZero || !1,
    output: "number"
  }
), md = () => Ee(
  Mt(
    (t) => {
      if (t === "" || t === null || t === void 0) return 1;
      if (typeof t == "string") {
        const e = parseInt(t, 10);
        return isNaN(e) ? 1 : e;
      }
      return t;
    },
    d().min(0, { message: "Quantity should be greater than or equal to 0" }).int({ message: "Quantity must be a whole number" }).default(1)
  ),
  {
    label: "fields.q",
    placeholder: "fields.q",
    group: "general",
    step: 1,
    output: "number"
  }
), yd = (t) => Ee(
  p().max(200).optional().transform((e) => e ? e.trim().toUpperCase() : ""),
  {
    label: "fields.name",
    placeholder: t?.placeholder || "",
    group: "general"
  }
), bd = () => Ee(
  p().max(200).optional().transform((t) => t ? t.trim().toUpperCase() : ""),
  {
    label: "fields.material",
    placeholder: "fields.material",
    group: "properties"
  }
), vd = () => Ee(
  Bi({ allowZero: !0, nullable: !0 }).optional().transform((t) => {
    if (t != null)
      return t;
  }),
  {
    label: "fields.cost",
    placeholder: "fields.cost",
    group: "pricing",
    step: 0.01,
    output: "number"
  }
), wd = () => Ee(
  ac().max(500).transform((t) => t.replace(/,/g, " ")).optional(),
  {
    label: "fields.notes",
    placeholder: "fields.notes",
    group: "general"
  }
), Sd = (t) => Ee(
  _().default(!1),
  t
), xd = (t, e) => Ee(
  Pe(t),
  e
), ii = {
  field: Ee,
  boolean: Sd,
  enum: xd,
  custom: pd
}, kd = ["efficiency", "guillotine", "beam", "none"], Un = ["l", "w", "flex", "none"], Id = ["efficiency", "time"], Pd = ["l", "w"], wo = ["efficiency", "smallest"], Cd = ["dimensions", "identical", "none"], Hs = ["sheet", "linear", "roll"], un = ye([
  d().int().positive(),
  ri(),
  rc()
]).transform((t) => t ?? 100).describe("Maximum stack height for beam saw stacking"), dn = Pe(kd).nullable().optional().transform((t) => t === null ? void 0 : t), fn = Pe(Un).nullable().optional().transform((t) => t === null ? void 0 : t), va = Pe(wo).default("efficiency").describe("Method for selecting stocks"), wa = Pe(Cd).default("identical").describe("How to stack identical parts"), hn = j({
  strategy: Pe(Id).default("efficiency"),
  maxPhase: d().int().min(0).max(10).default(0),
  headCuts: _().default(!1)
}).default({
  strategy: "efficiency",
  maxPhase: 0,
  headCuts: !1
}), Sa = j({
  primaryCompression: Pe(Pd).default("w")
}).default({
  primaryCompression: "w"
});
j({
  stockType: rn,
  /**
   * Stack height - Maximum stack height
   */
  stackHeight: un,
  /**
   * Cut type - Type of cutting algorithm
   */
  cutType: dn,
  /**
   * Cut preference - Preferred cutting direction
   */
  cutPreference: fn,
  /**
   * Guillotine options - Configuration for guillotine cutting
   */
  guillotineOptions: hn,
  /**
   * Efficiency options - Configuration for efficiency optimization
   */
  efficiencyOptions: Sa,
  /**
   * Stock selection - Method for selecting stocks
   */
  stockSelection: va,
  /**
   * Stacking mode - How to stack identical parts
   */
  stackingMode: wa
});
const So = d().min(0).default(0), xo = d().min(0).default(0), ko = d().min(0).default(0), Ad = j({
  dimension: xo,
  minSpacing: ko
});
function Yn(t) {
  switch (t) {
    case "sheet":
      return ["guillotine", "efficiency", "beam"];
    case "roll":
      return ["guillotine", "efficiency"];
    case "linear":
      return [];
    // Linear materials have no cut types - they're simply cut to length
    default:
      return ["guillotine"];
  }
}
function Kn(t, e) {
  if (t === "sheet") {
    if (e === "guillotine") return ["l", "w", "flex"];
    if (e === "beam") return ["l"];
    if (e === "efficiency") return [];
  } else if (t === "roll") {
    if (e === "guillotine") return ["w"];
    if (e === "efficiency") return [];
  } else if (t === "linear")
    return [];
  return [];
}
const Td = Ee(
  dn,
  {
    label: "fields.cutType",
    group: "cutting",
    order: 1,
    type: "enum",
    placeholder: "options.select",
    options: [
      { value: "efficiency", label: "options.efficiency_title", info: "options.efficiency_description" },
      { value: "guillotine", label: "options.guillotine_title", info: "options.guillotine_description" },
      { value: "beam", label: "options.beam", info: "options.beam_description" }
    ]
  }
), Od = Ee(
  fn,
  {
    label: "fields.cutPreference",
    group: "cutting",
    order: 2,
    type: "enum",
    defaultValue: "l",
    placeholder: "options.select",
    options: [
      { value: "l", label: "options.length_cuts", info: "options.length_cuts_description" },
      { value: "w", label: "options.width_cuts", info: "options.width_cuts_description" },
      // { value: 'flex', label: 'options.flexible', info: 'options.flexible_description' },
      { value: "none", label: "options.none" }
    ]
  }
), Ld = Ee(
  va,
  {
    label: "fields.stockSelection",
    group: "general",
    order: 1,
    type: "enum",
    placeholder: "options.select",
    options: [
      { value: "efficiency", label: "options.most_efficient", info: "options.most_efficient_description" },
      { value: "smallest", label: "options.smallest_first", info: "options.smallest_first_description" }
    ]
  }
), Fd = Ee(
  wa,
  {
    label: "fields.stackingMode",
    group: "stacking",
    order: 1,
    type: "enum",
    placeholder: "options.select",
    options: [
      { value: "dimensions", label: "options.by_dimensions", info: "options.by_dimensions_description" },
      { value: "identical", label: "options.identical_only", info: "options.identical_only_description" },
      { value: "none", label: "options.no_stacking", info: "options.no_stacking_description" }
    ]
  }
), $d = Ee(
  hn,
  {
    label: "fields.guillotineOptions",
    group: "guillotine",
    order: 1,
    type: "object"
  }
), Dd = Ee(
  Sa,
  {
    label: "fields.efficiencyOptions",
    group: "efficiency",
    order: 1,
    type: "object"
  }
), Ii = j({
  ...Bt.shape,
  // ========== Stock Type ==========
  stockType: Ee(
    Pe([...Hs]).default("sheet"),
    {
      label: "fields.stockType",
      group: "general",
      order: 1,
      placeholder: "options.select",
      options: [
        { value: "sheet", label: "options.sheet", info: "options.sheet_description" },
        { value: "linear", label: "options.linear", info: "options.linear_description" },
        { value: "roll", label: "options.roll", info: "options.roll_description" }
      ]
    }
  ),
  // ========== Blade Configuration ==========
  bladeWidth: Ee(
    Bi({ allowZero: !0, nullable: !1 }).default(0),
    {
      label: "fields.bladeWidth",
      placeholder: "fields.bladeWidth",
      group: "blade",
      order: 1,
      output: "number",
      info: "Enter your blade width in the current unit (saw kerf)."
    }
  ),
  // ========== Cutting Configuration ==========
  stackHeight: Ee(
    un,
    {
      label: "fields.stackHeight",
      group: "stacking",
      order: 1,
      step: 1,
      info: "If your saw supports cutting multiple stock simultaneously, set the maximum total allowed height."
    }
  ),
  cutType: Td,
  cutPreference: Od,
  // ========== Guillotine Options ==========
  guillotineOptions: $d,
  // ========== Efficiency Options ==========
  efficiencyOptions: Dd,
  // ========== General Options ==========
  options: j({
    stockSelection: Ld,
    minSpacing: Bi({ allowZero: !0, nullable: !1 }).default(0),
    stackingMode: Fd,
    minSpacingDimension: j({
      dimension: Bi({ allowZero: !0, nullable: !0 }).optional(),
      minSpacing: Bi({ allowZero: !0, nullable: !0 }).optional()
    }).optional()
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical"
  })
}), Ed = {
  // Include validation computed properties (isValid)
  ...oi,
  // Get valid cut types for current stock type
  validCutTypes: {
    compute: (t) => Yn(t.stockType),
    metadata: {
      cache: !0,
      dependencies: ["stockType"],
      description: "Valid cut types for current stock type",
      returnType: "CutType[]"
    }
  },
  // Get valid cut preferences for current stock type and cut type
  validCutPreferences: {
    compute: (t) => Kn(t.stockType, t.cutType),
    metadata: {
      cache: !0,
      dependencies: ["stockType", "cutType"],
      description: "Valid cut preferences for current stock type and cut type",
      returnType: "CutPreference[]"
    }
  }
}, _d = j({
  // Entity type added during serialization by toData() method
  // Used for automatic class recreation during deserialization
  __entityType: p().optional().describe("Entity type added during serialization by AutoSerializable.toData()"),
  // Reference marker for reference-based recreation
  // Used when objects reference each other
  __ref: p().optional().describe("Reference marker for object recreation")
}), Md = j({
  // ========== Selection State (excluded from compression) ==========
  selected: ii.boolean({
    label: "fields.selected",
    description: "Whether item is selected for multi-edit"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  multiEdit: ii.boolean({
    label: "fields.multiEdit",
    description: "Whether this is the multi-edit item"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  readonly: ii.boolean({
    label: "fields.readonly",
    description: "Whether input is readonly"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Validation State (excluded from compression and serialization) ==========
  isNew: ii.boolean({
    label: "fields.isNew",
    description: "Whether this is a newly created item that should skip validation until first user interaction",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" })
}), Rd = j({
  l1: Ee(
    Mt((t) => t ?? 0, d()).default(0),
    { label: "fields.l1", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  l2: Ee(
    Mt((t) => t ?? 0, d()).default(0),
    { label: "fields.l2", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  w1: Ee(
    Mt((t) => t ?? 0, d()).default(0),
    { label: "fields.w1", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  w2: Ee(
    Mt((t) => t ?? 0, d()).default(0),
    { label: "fields.w2", group: "trim", allowZero: !0, min: 0, required: !1 }
  )
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 }), jd = Mt(
  (t) => {
    if (t == null)
      return { l1: 0, l2: 0, w1: 0, w2: 0 };
    if (typeof t == "object" && t !== null) {
      const e = t, i = (s) => {
        if (s == null) return 0;
        if (typeof s == "string") {
          const n = Q({ v: s });
          return n === null ? 0 : n;
        }
        return typeof s == "number" ? s : 0;
      };
      return {
        l1: i(e.l1),
        l2: i(e.l2),
        w1: i(e.w1),
        w2: i(e.w2)
      };
    }
    return t;
  },
  Rd
), Bd = j({
  // ========== Identity ==========
  id: Hr,
  index: d().int().min(0).optional(),
  // ========== Dimensions ==========
  // Input dimensions can be strings (for fractions) or numbers
  l: _s({
    label: "fields.l",
    placeholder: "fields.l"
  }),
  w: _s({
    label: "fields.w",
    placeholder: "fields.w"
  }),
  t: _s({
    label: "fields.t",
    placeholder: "fields.t"
  }),
  q: md(),
  // ========== Material Properties ==========
  // Input name with uppercase transform
  name: yd(),
  material: bd(),
  // ========== Cost ==========
  cost: vd(),
  // ========== Trim Configuration ==========
  trim: jd,
  // ========== Rotation (Runtime) ==========
  rot: da.default(0),
  // ========== Flags ==========
  preventAutoRotation: ii.boolean({
    label: "fields.preventAutoRotation",
    description: "Prevent automatic rotation during optimization",
    group: "options"
  }),
  offcut: ii.boolean({
    label: "fields.offcut",
    description: "Mark as offcut material",
    group: "options"
  }),
  processed: ii.boolean({
    label: "fields.processed",
    description: "Has been processed",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Notes ==========
  notes: wd()
}), Us = j({
  ..._d.shape,
  // System properties from AutoSerializable
  ...Bt.shape,
  ...Bd.shape,
  // Core business fields
  ...Md.shape,
  // Input-specific UI fields
  // Override id with strict validation for input shapes/stock (allows blank)
  id: p().regex(/^(\d+\.\d+)?$/, 'ID must be blank or in format "1.0" (e.g., "1.0", "2.1")').default("").describe('Structured identifier for input shapes/stock in format 1.0 (e.g., "1.0") or blank')
}), xa = {
  // Include validation computed properties (isValid)
  ...oi,
  // Get the longer side dimension
  longSide: {
    compute: (t) => {
      const e = Q({ v: t.l }) ?? 0, i = Q({ v: t.w }) ?? 0;
      return Math.max(e, i);
    },
    metadata: {
      cache: !1,
      dependencies: ["l", "w"],
      description: "The longer of the two dimensions",
      returnType: "number"
    }
  },
  // Get the short side dimension
  shortSide: {
    compute: (t) => {
      const e = Q({ v: t.l }) ?? 0, i = Q({ v: t.w }) ?? 0;
      return Math.min(e, i);
    },
    metadata: {
      cache: !1,
      dependencies: ["l", "w"],
      description: "The shorter of the two dimensions",
      returnType: "number"
    }
  },
  // Check if has trim
  hasTrim: {
    compute: (t) => {
      const e = t.trim;
      return !!(e && (e.l1 || e.l2 || e.w1 || e.w2));
    },
    metadata: {
      cache: !1,
      dependencies: ["trim"],
      returnType: "boolean"
    }
  },
  // Check if rotated
  isRotated: {
    compute: (t) => t.rot === 1,
    metadata: {
      cache: !1,
      dependencies: ["rot"],
      returnType: "boolean"
    }
  },
  // Check if the rectangle is square (length equals width)
  isSquare: {
    compute: (t) => {
      const e = Q({ v: t.l }) ?? 0, i = Q({ v: t.w }) ?? 0;
      return e === i;
    },
    metadata: {
      cache: !1,
      dependencies: ["l", "w"],
      description: "Whether the rectangle is square (l === w)",
      returnType: "boolean"
    }
  }
}, mi = Us.extend({
  // Add grain field for shapes
  //[] is grain needed for inputs?
  grain: vo(),
  // Add orientationLock with input-specific transform
  orientationLock: gd(),
  // ========== Shared Shape Properties ==========
  upDirection: Ee(
    to,
    {
      label: "fields.upDirection",
      description: "Direction that should face up",
      group: "properties",
      order: 5,
      options: [
        { value: null, label: "fields.upDirection.none" },
        { value: "l", label: "fields.upDirection.length" },
        { value: "w", label: "fields.upDirection.width" }
      ]
    }
  ),
  stockLock: Ee(
    eo,
    { label: "fields.stockLock" }
  ),
  // ========== Stock Matching ==========
  stockMatch: pu.nullable().optional(),
  // ========== Custom Data ==========
  customData: Ee(
    gu,
    { label: "fields.customData", description: "Custom user-defined data" }
  ),
  // ========== UI Extension (excluded from compression) ==========
  selectedMaterial: Ee(
    be().optional(),
    { label: "fields.selectedMaterial", description: "Selected material object" }
  ).behavior({ compress: "exclude" }),
  // ========== Machining ==========
  // Override default reference behavior to serialize full data
  machining: Oe("Machining", {
    nullable: !0,
    description: "Machining operations for this shape",
    fieldBehavior: {
      serialize: "full",
      // Always serialize full machining data, not just a reference
      compress: "full",
      // Include full data in compressed mode too
      clone: "copy"
    }
  }).optional(),
  // ========== Extras ==========
  // Container for all extras (banding, finish, planing, etc.)
  // Override default reference behavior to serialize full data
  extras: Oe("Extras", {
    nullable: !0,
    description: "Extras container for this shape",
    fieldBehavior: {
      serialize: "full",
      // Always serialize full extras data, not just a reference
      compress: "full",
      // Include full data in compressed mode too
      clone: "copy"
    }
  }).optional()
}), Vd = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...xa,
  // Check if has grain direction
  hasGrain: {
    compute: (t) => t.grain === "l" || t.grain === "w",
    metadata: {
      cache: !1,
      dependencies: ["grain"],
      returnType: "boolean"
    }
  }
}, Yt = j({
  ...Us.shape,
  ...Zr.shape,
  // ========== Stock-specific Properties ==========
  // Override l to allow 0 for infinite length rolls
  l: _s({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !0
  }),
  // Add grain field for stock
  grain: vo(),
  preventGrainRotation: ii.boolean({
    label: "fields.preventGrainRotation",
    description: "Prevent rotation that would change grain direction",
    group: "options",
    order: 4
  }),
  // Stock-specific flags (infiniteLength is now in sharedStockPropertiesSchema from merge above)
  used: ii.boolean({
    label: "fields.used",
    description: "Whether stock has been used"
  }),
  // Display and filtering properties
  color: Ee(
    Yr,
    {
      label: "fields.color",
      description: 'Material color ({ hex: "#FF5733", name: "Red" } or legacy string)',
      group: "display",
      order: 1
    }
  ),
  weight: Ee(
    d().positive().optional(),
    {
      label: "fields.weight",
      description: "Weight in kg",
      group: "display",
      order: 2
    }
  ),
  imageUrl: Ee(
    p().url().optional(),
    {
      label: "fields.imageUrl",
      description: "Image URL for stock display",
      group: "display",
      order: 3
    }
  ),
  // Stock filter and categorization properties
  tags: Ee(
    re(p()).optional(),
    {
      label: "fields.tags",
      description: "Searchable tags for filtering",
      group: "display",
      order: 4
    }
  ),
  available: Ee(
    _().optional(),
    {
      label: "fields.available",
      description: "Whether stock is available for selection (defaults to true)",
      group: "display",
      order: 5
    }
  ),
  // Saw configuration (excluded from compression)
  saw: Ee(
    be().optional(),
    { label: "fields.saw", description: "Saw configuration data" }
  ).behavior({ compress: "exclude" })
}), Nd = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...xa
  // InputStock doesn't define additional computed properties
}, ka = Bt.extend({
  // ========== Identification ==========
  id: p().optional().describe("Unique identifier"),
  // ========== Shape References ==========
  shapeIds: re(p()).default([]).describe("List of shape IDs in this group"),
  shapes: re(p()).default([]).transform((t) => t?.map(String) ?? []).describe("Shape identifiers"),
  // ========== Group Properties ==========
  direction: ma,
  // 'horizontal' | 'vertical'
  q: d().int().min(1).default(1).describe("Quantity of groups"),
  duplicate: _().default(!1).describe("If a duplicate"),
  // ========== Material Properties (from Group) ==========
  name: p().optional().describe("Group name"),
  material: p().optional().describe("Material type"),
  grain: Wi.describe("Grain direction"),
  // ========== Stock Matching (excluded during compression) ==========
  stockMatch: j({
    stockId: p().optional(),
    material: p().optional(),
    thickness: d().optional(),
    grain: Wi.optional()
  }).optional().describe("Matching stock information").behavior({ compress: "exclude" }),
  // ========== Runtime Properties ==========
  shapeList: re(be()).optional().describe("Runtime shape list for validation").behavior({ compress: "exclude" })
}), Gd = {
  // Include validation computed properties (isValid)
  ...oi
  // InputUserGroup doesn't define additional computed properties
};
j({
  parts: re(d()).describe("Indices of shapes/parts in the parts array (user-friendly name for shapes)"),
  direction: ma,
  q: d().int().min(1).describe("Quantity of groups")
});
const qd = Bt.extend({
  // Collections of machining operations
  holes: Ne("Hole").default([]).describe("Array of holes").behavior({
    serialize: "full",
    clone: "copy"
  }),
  hingeHoles: Ne("HingeHole").default([]).describe("Array of hinge hole sets").behavior({
    serialize: "full",
    clone: "copy"
  }),
  corners: Ne("Corner").default([]).describe("Array of corner operations").behavior({
    serialize: "full",
    clone: "copy"
  }),
  // Validation
  enabled: _().default(!0).describe("Whether machining is enabled")
}), zd = {
  // Inherit computed properties from validation base
  ...oi,
  // Check if any machining exists
  hasAnyMachining: {
    compute: (t) => t.holes && t.holes.length > 0 || t.hingeHoles && t.hingeHoles.length > 0 || t.corners && t.corners.length > 0,
    metadata: {
      cache: !1,
      dependencies: ["holes", "hingeHoles", "corners"],
      returnType: "boolean"
    }
  },
  // Count total operations
  operationCount: {
    compute: (t) => (t.holes?.length || 0) + (t.hingeHoles?.length || 0) + (t.corners?.length || 0),
    metadata: {
      cache: !1,
      dependencies: ["holes", "hingeHoles", "corners"],
      returnType: "number"
    }
  }
}, Wd = {
  cacheResults: !1,
  successMetric: "efficiency",
  calculateCuts: !0,
  stack: !0,
  findDuplicatePatterns: !0,
  captureProfile: !1,
  runTests: !1,
  throwErrorsOnFailedTests: !1,
  enableLogging: !0,
  sample: {
    enable: !0,
    groupSize: 4,
    efficiency: 4,
    guillotine: 4
  },
  priority: {
    enable: !0,
    variationThreshold: 0.3
  },
  filtering: {
    enable: !0,
    minTotal: 400,
    similarityThreshold: 0.1
  },
  secondRun: {
    enabled: !1,
    efficiencyCutoff: 0.5,
    stack: !1
  },
  efficiency: {
    tidy: !1,
    rayCasting: !0
  },
  groups: {
    shapeAreaCutOff: 0.7,
    tolerance: 0.05,
    guillotine: {
      firstShape: !0,
      strips: !0,
      position: !0,
      runWithout: !1
    },
    efficiency: {
      firstShapes: !0,
      position: !0,
      limit: 100
    }
  },
  guillotine: {
    extendSegments: !0,
    allowHeadCuts: !0,
    viableShapeArea: 0.5,
    maxSegmentGroups: 15,
    stripShapes: {
      allocation: !0,
      iterations: 4,
      numPriorityShapes: 1
    },
    secondPass: !1,
    strips: {
      rearrange: !1,
      efficiencyThreshold: 0.7
    }
  },
  subset: {
    shuffles: 80,
    guillotine: {
      shuffles: 80
    },
    efficiency: {
      limit: 0.8
    }
  },
  evo: {
    disable: !1,
    stockLimit: 40
  }
}, Io = cn, Hd = {
  // Inherit computed properties from Extra base
  ...ba,
  // Check if any planing is applied
  hasAnyPlaning: {
    compute: (t) => {
      const e = t.faces && Object.keys(t.faces).some((s) => {
        const n = t.faces[s];
        return n !== void 0 && n !== !1 && n !== "";
      }), i = t.sides && Object.keys(t.sides).some((s) => {
        const n = t.sides[s];
        return n !== void 0 && n !== !1 && n !== "";
      });
      return e || i;
    },
    metadata: {
      cache: !1,
      dependencies: ["faces", "sides"],
      returnType: "boolean"
    }
  },
  // Get all faces with planing
  activeFaces: {
    compute: (t) => t.faces ? Object.keys(t.faces).filter((e) => {
      const i = t.faces[e];
      return i !== void 0 && i !== !1 && i !== "";
    }) : [],
    metadata: {
      cache: !1,
      dependencies: ["faces"],
      returnType: "string[]"
    }
  },
  // Get all sides with planing
  activeSides: {
    compute: (t) => t.sides ? Object.keys(t.sides).filter((e) => {
      const i = t.sides[e];
      return i !== void 0 && i !== !1 && i !== "";
    }) : [],
    metadata: {
      cache: !1,
      dependencies: ["sides"],
      returnType: "string[]"
    }
  }
}, Ud = j({
  // ========== Storage ==========
  // Points stored as a map (will be converted to/from Map in class)
  // In serialized form this is a record, at runtime it's a Map
  points: ye([
    oc(p(), Oe("Point")),
    Se(p(), Oe("Point"))
  ]).default(() => /* @__PURE__ */ new Map())
}), Yd = {
  // Get the number of points in the collection
  size: {
    compute: (t) => t.points instanceof Map ? t.points.size : Object.keys(t.points || {}).length,
    metadata: {
      cache: !1,
      dependencies: ["points"],
      returnType: "number"
    }
  },
  // Check if the collection is empty
  isEmpty: {
    compute: (t) => t.points instanceof Map ? t.points.size === 0 : Object.keys(t.points || {}).length === 0,
    metadata: {
      cache: !1,
      dependencies: ["points"],
      returnType: "boolean"
    }
  }
}, Zn = Bt.extend({
  // Core properties from shared schema
  stockType: rn,
  stackHeight: un.describe("Maximum stack height"),
  cutType: dn,
  cutPreference: fn,
  // Blade width (numeric for runtime)
  bladeWidth: So.describe("Blade width"),
  // Guillotine options
  guillotineOptions: hn,
  // Efficiency options
  efficiencyOptions: Sa,
  // General options (nested stockSelection and stackingMode)
  options: j({
    stockSelection: va,
    minSpacing: ko,
    stackingMode: wa,
    minSpacingDimension: Ad
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical",
    minSpacingDimension: {
      dimension: 0,
      minSpacing: 0
    }
  }).describe("General saw options")
}), Kd = {
  // Include validation computed properties
  ...oi,
  // Blade width / 2 for convenience
  halfBladeWidth: {
    compute: (t) => t.bladeWidth / 2,
    metadata: {
      cache: !1,
      dependencies: ["bladeWidth"],
      returnType: "number"
    }
  },
  // Is guillotine cutting
  isGuillotine: {
    compute: (t) => t.cutType === "guillotine",
    metadata: {
      cache: !1,
      dependencies: ["cutType"],
      returnType: "boolean"
    }
  },
  // Is beam saw cutting
  isBeamSaw: {
    compute: (t) => t.cutType === "beam",
    metadata: {
      cache: !1,
      dependencies: ["cutType"],
      returnType: "boolean"
    }
  },
  // Is efficiency optimization
  isEfficiency: {
    compute: (t) => t.cutType === "efficiency",
    metadata: {
      cache: !1,
      dependencies: ["cutType"],
      returnType: "boolean"
    }
  }
};
Zn.describe(JSON.stringify({
  name: "Saw",
  description: "Runtime saw configuration for optimization",
  version: "1.0.0",
  category: "configuration"
}));
const _i = 1e-10, Zd = 10, Jd = Number.MAX_SAFE_INTEGER, Xd = 4294967295, wt = (t) => typeof t == "number" && Number.isFinite(t), Ms = (t) => Array.isArray(t) && t.length > 0;
function ts(t, e, i = _i) {
  if (t === e) return 0;
  if (Number.isInteger(t) && Number.isInteger(e))
    return t > e ? 1 : -1;
  const s = t - e;
  return Math.abs(s) < i ? 0 : s;
}
const Qd = {
  greaterThan: (t, e, i = _i) => !wt(t) || !wt(e) ? !1 : ts(t, e, i) > 0,
  greaterThanOrEqualTo: (t, e, i = _i) => !wt(t) || !wt(e) ? !1 : ts(t, e, i) >= 0,
  lessThan: (t, e, i = _i) => !wt(t) || !wt(e) ? !1 : ts(t, e, i) < 0,
  lessThanOrEqualTo: (t, e, i = _i) => !wt(t) || !wt(e) ? !1 : ts(t, e, i) <= 0,
  equalTo: (t, e, i = _i) => !wt(t) || !wt(e) ? !1 : ts(t, e, i) === 0
};
function ef(t) {
  return wt(t) ? Number.isInteger(t) ? t : Number(t.toFixed(Zd)) : !1;
}
function tf(t) {
  if (!wt(t) || t < 0 || t > Jd)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (Xd + 1) * t);
}
function sf(t, e) {
  if (!Ms(t))
    throw new Error("Invalid array parameter");
  if (!wt(e) || e < 0 || e > t.length)
    throw new Error("Invalid size parameter");
  const i = t.slice(), s = t.length - e;
  for (let n = t.length - 1; n >= s; n--) {
    const a = Math.floor(Math.random() * (n + 1));
    [i[n], i[a]] = [i[a], i[n]];
  }
  return i.slice(s);
}
class xs {
  static calculateMean(e) {
    if (!Ms(e))
      throw new Error("Invalid input array");
    return e.reduce((i, s) => i + s, 0) / e.length;
  }
  static calculateStandardDeviation(e, i = null) {
    if (!Ms(e))
      throw new Error("Invalid input array");
    const s = i ?? this.calculateMean(e), n = e.reduce((a, r) => {
      const o = r - s;
      return a + o * o;
    }, 0) / e.length;
    return Math.sqrt(n);
  }
  static calculateCoefficientOfVariation(e) {
    if (!Ms(e))
      throw new Error("Invalid input array");
    const i = this.calculateMean(e);
    if (i === 0)
      throw new Error("Mean is zero, coefficient of variation undefined");
    return this.calculateStandardDeviation(e, i) / i;
  }
}
const he = {
  ...Qd,
  isNumber: wt,
  round: ef,
  getRandom: tf,
  getRandomSample: sf,
  calculateStandardDeviation: xs.calculateStandardDeviation.bind(xs),
  calculateCoefficientOfVariation: xs.calculateCoefficientOfVariation.bind(xs)
};
function Ja(t) {
  return t && typeof t == "object" && typeof t.toData == "function";
}
let Xa = 0, Qa = Date.now();
const nf = 1e4;
function af() {
  return Xa % nf === 0 && (Qa = Date.now()), `${Qa}-${(Xa++).toString(36)}`;
}
class rf {
  // System-generated unique ID for tracking and reassociation
  // This is different from user-facing 'id' which is for display
  autoId;
  /**
   * Get the base autoId without version suffix
   * For cloned objects with autoIds like "base.1", returns "base"
   * For non-cloned objects, returns the autoId as-is
   */
  getBaseAutoId() {
    return this.autoId.includes(".") ? this.autoId.substring(0, this.autoId.indexOf(".")) : this.autoId;
  }
  // Static serialization fields - override in subclasses
  static serializationProperties = [];
  // Legacy static exclusions - deprecated, use schema behaviors instead
  static serializationExcludedProperties = [];
  // Static schema reference - override in subclasses that have schemas
  // All schemas should be Zod schemas with field behaviors defined
  static schema;
  // Static computed properties for Zod schemas
  static computedProperties;
  // Static cache for field behaviors - computed once per class
  static _fieldBehaviorCache;
  // Private flag for compression mode (will be set as non-enumerable in constructor)
  _serializationMode;
  constructor(e) {
    this.autoId = e?.autoId || af(), Object.defineProperty(this, "_serializationMode", {
      value: "full",
      writable: !0,
      enumerable: !1,
      // CRITICAL: Must be non-enumerable to prevent serialization
      configurable: !0
    });
  }
  /**
   * Set serialization mode
   */
  setSerializationMode(e) {
    this._serializationMode = e;
  }
  /**
   * Get current serialization mode
   */
  getSerializationMode() {
    return this._serializationMode;
  }
  /**
   * Get serialization fields for this class
   * If serializationProperties is not defined, falls back to schema fields if available
   * Always includes autoId for tracking
   */
  getSerializationFields() {
    let e = [];
    const i = this.constructor.serializationProperties;
    return i && i.length > 0 ? (e = [...i], e.includes("autoId") || e.unshift("autoId")) : this.constructor.schema && (e = []), e;
  }
  /**
   * Get field behaviors from the schema
   * Returns a map of field name -> field behavior
   * Supports nested paths like 'group.reference' recursively
   * Cached per class for performance
   */
  getFieldBehaviors() {
    const e = this.constructor;
    if (e._fieldBehaviorCache)
      return e._fieldBehaviorCache;
    if (e.schema && typeof e.schema == "object" && "_def" in e.schema) {
      const i = Ss(e.schema), s = e.schema;
      return s.shape && this.extractNestedBehaviors(s.shape, i, ""), e._fieldBehaviorCache = i, i;
    }
    return {};
  }
  /**
   * Recursively extract nested field behaviors from a schema shape
   * @private
   */
  extractNestedBehaviors(e, i, s) {
    for (const [n, a] of Object.entries(e))
      if (a && typeof a == "object" && "_def" in a) {
        let r = a;
        for (; r && r._def; ) {
          const l = r._def.typeName || r.constructor?.name;
          if (l === "ZodDefault" || l === "ZodOptional" || l === "ZodNullable") {
            if (r = r._def.innerType || r._def.type, !r) break;
          } else
            break;
        }
        const o = Ss(r);
        for (const [l, c] of Object.entries(o)) {
          const u = s ? `${s}.${n}.${l}` : `${n}.${l}`;
          i[u] = c;
        }
        if (r && r.shape) {
          const l = s ? `${s}.${n}` : n;
          this.extractNestedBehaviors(r.shape, i, l);
        }
      }
  }
  /**
   * Check if a property is a getter-only property (computed property)
   * Properties with both getter and setter are treated as regular properties
   */
  isGetterProperty(e) {
    const i = Object.getOwnPropertyDescriptor(this, e);
    if (i && i.get && !i.set)
      return !0;
    let s = Object.getPrototypeOf(this);
    for (; s && s !== Object.prototype; ) {
      const n = Object.getOwnPropertyDescriptor(s, e);
      if (n && n.get && !n.set)
        return !0;
      s = Object.getPrototypeOf(s);
    }
    return !1;
  }
  /**
   * Serialize this entity to a plain data object
   * @final Do NOT override this method - use getSerializationFields() to customize serialization
   */
  toData(e = this._serializationMode) {
    const i = {}, s = this.getSerializationFields(), n = this.getFieldBehaviors(), a = e === "compressed" ? "compressed" : "full";
    if (s.length === 0) {
      const r = /* @__PURE__ */ new Set();
      Object.getOwnPropertyNames(this).forEach((o) => r.add(o));
      for (const o in this) r.add(o);
      for (const o of r) {
        if (o.startsWith("_")) continue;
        const l = this.constructor.serializationExcludedProperties;
        if (l && l.includes(o) || this.isGetterProperty(o)) continue;
        const c = this[o];
        if (typeof c == "function" || c === void 0) continue;
        const u = n[o];
        a === "compressed" && u?.compress === "exclude" || u?.serialize === "exclude" || (i[o] = this.serializeValue(c, u, a, o, n));
      }
    } else
      for (const r of s) {
        const o = this[r], l = n[r];
        a === "compressed" && l?.compress === "exclude" || l?.serialize === "exclude" || (i[r] = this.serializeValue(o, l, a, r, n));
      }
    return i.__entityType = this.getType(), i;
  }
  /**
   * Create a compressed version of this entity for worker/optimization use
   * Uses schema-defined compression behaviors
   */
  compress() {
    return this.toData(
      "compressed"
      /* Compressed */
    );
  }
  // Legacy compression behavior methods removed - use unified field behavior system
  /**
   * Update this entity with partial data
   * Can be overridden in subclasses for custom behavior
   */
  update(e) {
    const s = this.constructor.schema;
    if (s && typeof s == "object" && "_def" in s) {
      const r = e.validationMode === "none" || e.skipSchemaValidation;
      let o;
      r ? o = e : o = s.partial().parse(e);
      for (const l in o) {
        if (!Object.prototype.hasOwnProperty.call(e, l))
          continue;
        const c = o[l];
        if (c !== void 0) {
          const u = Object.getOwnPropertyDescriptor(this, l) || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this), l);
          if (u && u.get && !u.set)
            continue;
          this[l] = c;
        }
      }
    } else
      for (const r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          const o = e[r];
          if (o !== void 0 && r in this) {
            const l = Object.getOwnPropertyDescriptor(this, r) || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this), r);
            if (l && l.get && !l.set)
              continue;
            this[r] = o;
          }
        }
    !(e.validationMode === "none" || e.validationMode === "schema" || e.skipValidation) && "validate" in this && typeof this.validate == "function" && this.validate();
  }
  /**
   * Async validation using the schema and validation engine
   * @final Do NOT override this method - use static schema property for validation
   * For custom validation logic, override validate() instead
   *
   * NOTE: All classes should extend SchemaClass for proper Zod integration
   */
  async validateAsync() {
    const e = this.constructor.schema;
    if (e && typeof e == "object" && "_def" in e)
      try {
        return e.parse(this.toData()), "issues" in this && (this.issues = []), "warnings" in this && (this.warnings = []), "valid" in this && (this.valid = !0), [];
      } catch (s) {
        if (s instanceof ji) {
          const n = s.issues.map((a) => new ue({
            message: a.message,
            type: "error",
            field: a.path.length > 0 ? [a.path.map(String)] : void 0,
            item: this
          }));
          return "issues" in this && (this.issues = n), "warnings" in this && (this.warnings = []), "valid" in this && (this.valid = !1), n;
        }
        throw s;
      }
    return "validate" in this && typeof this.validate == "function" ? this.validate() : [];
  }
  /**
   * Clone this instance with a new versioned ID
   * Preserves all properties except those specified to reset to defaults
   *
   * @param version - Optional version number/string. If not provided, auto-increments
   * @returns A new instance with versioned ID and selectively reset properties
   */
  clone(e = null, i = {}) {
    const s = "id" in this && this.id ? String(this.id).split(".") : ["clone"];
    let n;
    if (e) {
      const g = s.pop() || "0", k = parseInt(g, 10);
      isNaN(k) && s.push(g), n = String(e);
    } else {
      const g = s.pop() || "0", k = parseInt(g, 10);
      isNaN(k) ? (s.push(g), n = "1") : n = String(k + 1);
    }
    s.push(n);
    const a = s.join("."), o = `${this.autoId.includes(".") ? this.autoId.substring(0, this.autoId.indexOf(".")) : this.autoId}.${n}`, l = this.constructor, c = this.getDirectPropertyCopy(i), u = l.schema;
    let f = {};
    u && (f = Ss(u));
    const h = l.defaults || (u ? u.parse({}) : {}) || {};
    for (const [g, k] of Object.entries(f))
      k.clone === "reset" && (g in h ? c[g] = h[g] : delete c[g]);
    return "id" in c && (c.id = a), c.autoId = o, c.duplicate = !0, c.skipValidation = !0, new l(c);
  }
  /**
   * Get a direct copy of all properties with selective serialization
   * This preserves class instances (like Saw) but handles zRef references properly
   * @private
   */
  getDirectPropertyCopy(e = {}) {
    const i = {}, s = this.getSerializationFields();
    if (s.length === 0)
      for (const n in this) {
        if (!Object.prototype.hasOwnProperty.call(this, n) || n.startsWith("_")) continue;
        let a = !1;
        const r = Object.getOwnPropertyDescriptor(this, n);
        if (r && r.get && !r.set)
          a = !0;
        else if (!r) {
          let l = Object.getPrototypeOf(this);
          for (; l && l !== Object.prototype; ) {
            const c = Object.getOwnPropertyDescriptor(l, n);
            if (c && c.get) {
              a = !0;
              break;
            }
            l = Object.getPrototypeOf(l);
          }
        }
        if (a) continue;
        const o = this[n];
        typeof o == "function" || o === void 0 || (i[n] = this.handleReferenceForCloning(o, n, e));
      }
    else
      for (const n of s) {
        const a = this[n];
        i[n] = this.handleReferenceForCloning(a, n, e);
      }
    return i;
  }
  /**
   * Handle reference values during cloning with schema and options control
   * Uses schema-defined behaviors first, then options, then defaults
   * @private
   */
  handleReferenceForCloning(e, i, s) {
    if (!e) return e;
    const a = this.constructor.schema;
    let r = null;
    if (a && (r = Ss(a)[i] || null), r?.clone)
      switch (r.clone) {
        case "share":
          return e;
        // Keep exact same instance
        case "unique":
          return this.cloneValueAsNewInstance(e);
        case "reset":
          return e;
        case "copy":
        default:
          return this.cloneValueByCopy(e);
      }
    return s.shareInstances?.includes(i) ? e : s.cloneUnique?.includes(i) ? this.cloneValueAsNewInstance(e) : this.cloneValueByCopy(e);
  }
  /**
   * Clone a value by making an appropriate copy
   * For references (objects with autoId): maintain the reference
   * For plain objects/arrays: make a shallow copy
   * For primitives: return as-is
   * @private
   */
  cloneValueByCopy(e) {
    if (!e || typeof e != "object") return e;
    if (Array.isArray(e))
      return [...e];
    if ("autoId" in e && typeof e.getType == "function")
      return e;
    const i = e.constructor?.name;
    return i && ["Saw"].includes(i) ? e : e.constructor === Object ? { ...e } : e;
  }
  /**
   * Clone a value as a new unique instance
   * @private
   */
  cloneValueAsNewInstance(e) {
    if (!e || typeof e != "object") return e;
    if (Array.isArray(e))
      return e.map((i) => this.cloneValueAsNewInstance(i));
    if ("toData" in e && typeof e.toData == "function") {
      const i = e.constructor, s = e.toData();
      return new i(s);
    }
    return "clone" in e && typeof e.clone == "function" ? e.clone() : { ...e };
  }
  // convertValueToReference() method removed - reference conversion now handled in serializeValue()
  // getDefaultCloneBehavior() method removed - clone behavior now handled by schema-based behaviors
  // Clone behaviors are now defined in Zod schemas using .behavior() method
  // No need for getCloneResetProperties() and getCloneOverrides() methods
  /**
   * Serialize a single value using field behavior
   */
  serializeValue(e, i, s, n, a) {
    if (e == null)
      return e;
    if (Array.isArray(e))
      return e.map((r) => {
        if (Ja(r)) {
          if (i?.serialize === "reference" || s === "compressed" && i?.compress === "reference") {
            const c = "autoId" in r && r.autoId, u = typeof r.getType == "function";
            if (c) {
              const f = u ? r.getType() : r.constructor.name;
              return {
                __ref: !0,
                id: r?.id,
                autoId: r.autoId,
                __entityType: f
              };
            }
          }
          const l = s === "compressed" ? "compressed" : "full";
          return r.toData(l);
        }
        return r;
      });
    if (Ja(e)) {
      if (i?.serialize === "reference" || s === "compressed" && i?.compress === "reference") {
        const l = "autoId" in e && e.autoId, c = typeof e.getType == "function";
        if (l) {
          const u = c ? e.getType() : e.constructor.name;
          return {
            __ref: !0,
            id: e?.id,
            autoId: e.autoId,
            __entityType: u
          };
        }
      }
      const o = s === "compressed" ? "compressed" : "full";
      return e.toData(o);
    }
    if (e && typeof e == "object" && e.constructor === Object) {
      const r = {}, o = a || this.getFieldBehaviors();
      for (const l in e)
        if (Object.prototype.hasOwnProperty.call(e, l)) {
          const c = n ? `${n}.${l}` : l, u = o[c];
          if (s === "compressed" && u?.compress === "exclude" || u?.serialize === "exclude")
            continue;
          r[l] = this.serializeValue(e[l], u, s, c, o);
        }
      return r;
    }
    return e;
  }
  /**
   * Build a reference map for reassociation
   * Maps autoId to object instances for resolving references
   */
  static buildReferenceMap(e) {
    const i = /* @__PURE__ */ new Map();
    for (const s of e)
      s && s.autoId && i.set(s.autoId, s);
    return i;
  }
  /**
   * Find an object by autoId in a collection
   */
  static findByAutoId(e, i) {
    return e.find((s) => s && s.autoId === i);
  }
  /**
   * Lazy recreation to avoid circular dependencies with class registry
   */
  lazyRecreate(e) {
    if (!e || typeof e != "object" || typeof e.getType == "function") return e;
    const i = e.__entityType || e.__ref || e.type || e._type;
    if (!i)
      return e;
    const n = ps().get(i);
    if (n) {
      const { ...a } = e;
      try {
        return "fromData" in n && typeof n.fromData == "function" ? n.fromData(a) : new n(a);
      } catch (r) {
        return console.warn(`Failed to recreate ${i}:`, r), e;
      }
    }
    return e;
  }
  /**
   * Deserialize a value, creating class instances where appropriate
   * Uses the recreation system for automatic class discovery
   * @param value The value to deserialize
   * @param ClassConstructor Optional class constructor for creating instances
   * @param referenceMap Optional map for resolving autoId references
   */
  deserializeValue(e, i, s) {
    if (e == null || e._type || typeof e.getType == "function")
      return e;
    if (e && typeof e == "object" && e.__ref && e.autoId)
      return s && s.has(e.autoId) ? s.get(e.autoId) : this.lazyRecreate(e);
    if (e && typeof e == "object" && (e.__entityType || e.__ref))
      return this.lazyRecreate(e);
    if (i && typeof i == "function")
      return typeof i.fromData == "function" ? i.fromData(e) : new i(e);
    if (Array.isArray(e))
      return e.map((n) => this.deserializeValue(n, void 0, s));
    if (e && typeof e == "object" && e.constructor === Object) {
      const n = {};
      for (const [a, r] of Object.entries(e))
        n[a] = this.deserializeValue(r, void 0, s);
      return n;
    }
    return e;
  }
}
class it extends rf {
  /**
   * Fast type identification property
   * Set during construction for O(1) type checking via guards
   * This eliminates the need for expensive instanceof checks
   */
  _type;
  /**
   * Flag indicating this instance has been validated by Zod
   * Prevents redundant validation when cloning or updating already-validated instances
   * Performance optimization: ~6% speedup by skipping unnecessary validation
   */
  _validated = !1;
  // Cached reference to recreate function to avoid circular dependency
  static recreateFunc = null;
  /**
   * Register the recreate function from the recreation module
   * Called by recreation.ts after it's loaded to break circular dependency
   */
  static registerRecreateFunction(e) {
    it.recreateFunc = e;
  }
  /**
   * Zod schema for validation and property definition
   * Must be defined in subclasses
   */
  static schema;
  /**
   * Computed property definitions
   * Must be defined in subclasses (can be empty object if no computed properties)
   */
  static computedProperties = {};
  /**
   * Default values inferred from schema
   * Automatically set by subclasses using schema.parse({})
   */
  static defaults;
  /**
   * Constructor that handles Zod parsing and property application
   */
  constructor(e = {}) {
    super(e);
    const i = this.constructor.schema;
    if (!i)
      throw new Error(`${this.constructor.name} must define a static 'schema' property`);
    const s = this.extractValidationOptions(e), a = e._validated === !0 || s.skipSchemaValidation || s.validationMode === "none" || s.validationMode === "business";
    let r;
    if (a)
      r = this.recreateNestedClasses(e, i);
    else if (s.enableStrictMode) {
      const o = i.safeParse(e);
      o.success ? r = o.data : r = this.filterInvalidFields(e, o.error, i);
    } else {
      const o = i.safeParse(e);
      if (o.success)
        r = o.data;
      else {
        const l = i.partial().safeParse(e);
        l.success ? r = l.data : r = this.filterInvalidFields(e, l.error, i);
      }
    }
    if (i && r) {
      const o = i.shape || i._def?.shape;
      if (o) {
        const l = Object.keys(o), c = {};
        for (const u of l)
          u in r && (c[u] = r[u]);
        r = c;
      }
    }
    Object.assign(this, r), this.applyComputedProperties(), Object.defineProperty(this, "_type", {
      value: this.getType(),
      writable: !0,
      enumerable: !1,
      // CRITICAL: Must be non-enumerable to prevent serialization
      configurable: !0
    }), a || Object.defineProperty(this, "_validated", {
      value: !0,
      writable: !0,
      enumerable: !1,
      // CRITICAL: Must be non-enumerable to prevent serialization
      configurable: !0
    });
  }
  /**
   * Filter out fields that failed validation while preserving internal fields
   * This is a last-resort fallback to prevent constructor/update from throwing
   *
   * @param data - Original data that failed validation
   * @param error - The ZodError containing validation issues
   * @param schema - The schema to use for re-parsing
   * @returns Cleaned and parsed data, or raw data if all else fails
   */
  filterInvalidFields(e, i, s) {
    const n = [
      "autoId",
      "__context",
      "__entityType",
      "__ref",
      "_validated",
      "_type",
      "_metadata",
      "skipSchemaValidation",
      "skipBusinessValidation",
      "skipValidation",
      "validationMode",
      "enableStrictMode"
    ], a = { ...e }, r = /* @__PURE__ */ new Set();
    for (const l of i.issues)
      if (l.path.length > 0) {
        const c = l.path[0];
        n.includes(c) || r.add(c);
      }
    r.forEach((l) => {
      delete a[l];
    });
    const o = s.partial().safeParse(a);
    return o.success ? o.data : a;
  }
  /**
   * Recreate nested class instances based on schema metadata
   * This handles zRef and zRefArray fields automatically when schema validation is skipped
   *
   * When validation runs, the zRef transforms handle instantiation automatically.
   * This method is only used when skipValidation=true to ensure nested classes are still instantiated.
   */
  recreateNestedClasses(e, i) {
    if (!e || typeof e != "object" || Array.isArray(e)) return e;
    const s = { ...e }, n = i.shape;
    for (const [a, r] of Object.entries(n)) {
      const o = s[a];
      if (o == null || typeof o == "object" && typeof o.getType == "function")
        continue;
      const l = this.extractClassNameFromSchema(r);
      l ? s[a] = this.deserializeValueWithClassName(o, l) : s[a] = this.deserializeValue(o);
    }
    return s;
  }
  /**
   * Extract className from a zRef schema field
   * Handles zRef, zRefArray, and optional/nullable wrappers
   */
  extractClassNameFromSchema(e) {
    let i = e;
    for (; i; ) {
      if (i.__zRefClassName)
        return i.__zRefClassName;
      i = i._def?.innerType || i._def?.schema || i._def?.type || null;
    }
    i = e;
    let s = "";
    for (; i; ) {
      if (i._def?.description) {
        s = i._def.description;
        break;
      }
      i = i._def?.innerType || i._def?.schema || i._def?.type || null;
    }
    const n = s.match(/Reference to (\w+)/);
    return n ? n[1] : null;
  }
  /**
   * Deserialize a value with a known className hint
   * Used when schema validation is skipped but we know what class to instantiate
   */
  deserializeValueWithClassName(e, i) {
    if (e == null || typeof e == "object" && typeof e.getType == "function")
      return e;
    if (Array.isArray(e))
      return e.map((s) => this.deserializeValueWithClassName(s, i));
    if (typeof e == "object" && e !== null) {
      const s = e.__entityType || i, a = ps().get(s);
      if (a)
        try {
          return typeof a.fromData == "function" ? a.fromData(e) : new a(e);
        } catch {
          return e;
        }
    }
    return e;
  }
  /**
   * Recreate a single reference based on class name
   * This method tries to find existing instances in the context before creating new ones
   *
   * Context structure:
   * - entities: Map of id -> instance for quick lookups
   * - stockList: Array of Stock instances
   * - shapeList: Array of Shape instances
   * - groupList: Array of Group instances
   * - [className.toLowerCase() + 'List']: Generic list lookup pattern
   */
  recreateReference(e, i, s) {
    if (e == null || e && typeof e == "object" && typeof e.getType == "function")
      return e;
    if (s && e && typeof e == "object") {
      const n = e.autoId || e.id;
      if (n && s.entities?.has?.(n))
        return s.entities.get(n);
      if (i === "Stock" && s.stockList) {
        const r = s.stockList.find((o) => o.id === n || o.autoId === n);
        if (r) return r;
      }
      if (i === "Shape" && s.shapeList) {
        const r = s.shapeList.find((o) => o.id === n || o.autoId === n);
        if (r) return r;
      }
      if (i === "Group" && s.groupList) {
        const r = s.groupList.find((o) => o.id === n || o.autoId === n);
        if (r) return r;
      }
      const a = i.toLowerCase() + "List";
      if (s[a] && Array.isArray(s[a])) {
        const r = s[a].find((o) => o.id === n || o.autoId === n);
        if (r) return r;
      }
    }
    return e && typeof e == "object" ? (s && (e.id || e.autoId), it.recreateFunc ? it.recreateFunc(e, s, i) : { ...e, __ref: i }) : e;
  }
  /**
   * Apply computed properties as getters
   * This is called automatically in the constructor
   */
  applyComputedProperties() {
    const e = this.constructor.computedProperties;
    if (e)
      for (const [i, s] of Object.entries(e)) {
        if (!s || typeof s != "object") continue;
        const n = s;
        n.compute && Object.defineProperty(this, i, {
          get() {
            return n.compute(this);
          },
          enumerable: !1,
          // Don't enumerate computed properties - they shouldn't be serialized
          configurable: !0
        });
      }
  }
  /**
   * Update properties with validation
   * Parses data through Zod schema before applying
   *
   * @param data - The properties to update, can include __context for reference resolution
   */
  update(e) {
    const i = this.constructor.schema;
    if (!i) {
      super.update(e);
      return;
    }
    const s = this.extractValidationOptions(e), n = s.skipSchemaValidation || s.validationMode === "none" || s.validationMode === "business";
    let a;
    if (n)
      a = this.recreateNestedClasses(e, i);
    else {
      const r = i.partial().safeParse(e);
      r.success ? a = r.data : a = this.filterInvalidFields(e, r.error, i);
    }
    for (const r in a)
      if (Object.prototype.hasOwnProperty.call(a, r)) {
        if (!Object.prototype.hasOwnProperty.call(e, r))
          continue;
        const o = Object.getOwnPropertyDescriptor(this, r) || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this), r);
        if (o && o.get && !o.set)
          continue;
        this[r] = a[r];
      }
  }
  /**
   * Get default values from schema
   * Subclasses can use this to initialize static defaults
   */
  static getDefaults(e) {
    return e.parse({});
  }
  /**
   * Extract validation options from data
   * These control how validation is performed
   */
  extractValidationOptions(e) {
    return {
      skipSchemaValidation: e?.skipSchemaValidation,
      skipBusinessValidation: e?.skipBusinessValidation || e?.skipValidation,
      validationMode: e?.validationMode,
      enableStrictMode: e?.enableStrictMode
    };
  }
  /**
   * Perform schema validation using Zod
   * Returns validation issues if any
   */
  validateSchema() {
    const e = this.constructor.schema;
    if (!e) return [];
    try {
      const i = this.toData ? this.toData() : { ...this };
      return e.parse(i), [];
    } catch (i) {
      if (i instanceof ji)
        return i.issues.map((s) => ({
          code: s.code,
          path: s.path.map((n) => typeof n == "symbol" ? n.toString() : n),
          message: s.message
        }));
      throw i;
    }
  }
  /**
   * Clean internal fields from entity or array of entities for API output
   * Removes all system-internal fields that should not be exposed in API responses
   */
  static cleanEntityForAPI(e) {
    if (!e) return e;
    if (Array.isArray(e))
      return e.map((s) => it.cleanEntityForAPI(s));
    if (typeof e != "object")
      return e;
    const i = { ...e };
    return delete i.autoId, delete i.__ref, delete i.__entityType, delete i.__context, delete i._metadata, delete i.validationIssues, delete i.isValid, delete i.issues, delete i.warnings, i;
  }
  /**
   * Extract field names that need number format conversion from a schema
   * Identifies fields that accept both number and string inputs and need conversion between decimal/fraction formats
   */
  static extractNumberFormatFields(e) {
    const i = [], s = e.shape;
    for (const [n, a] of Object.entries(s)) {
      if (n.startsWith("_"))
        continue;
      if (n === "trim") {
        i.push(n);
        continue;
      }
      const r = this.unwrapSchema(a);
      if (r instanceof lc) {
        const o = r.options.some((c) => c instanceof cc), l = r.options.some((c) => c instanceof uc);
        o && l && i.push(n);
      }
    }
    return i;
  }
  /**
   * Unwrap schema to get the base type (handles ZodEffects, ZodOptional, etc.)
   */
  static unwrapSchema(e) {
    const i = e._def?.typeName;
    if (e instanceof dc || e instanceof fc)
      return this.unwrapSchema(e._def?.innerType);
    if (e instanceof hc)
      return this.unwrapSchema(e._def?.innerType);
    if (i === "ZodEffects")
      return this.unwrapSchema(e._def?.schema);
    if (e._def?.type === "pipe") {
      const s = e._def?.out;
      if (s)
        return this.unwrapSchema(s);
    }
    return e;
  }
}
class xi extends it {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Gc;
  static computedProperties = qc;
  /**
   * Leave serializationProperties empty to trigger automatic enumeration
   * We use serializationExcludedProperties for exclusion-based approach
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   */
  static serializationExcludedProperties = [
    "shapeCollisions"
    // Runtime-calculated collision data
  ];
  constructor(e) {
    super(e);
  }
  /**
    * Get entity type
    */
  getType() {
    return le.Line;
  }
  /**
    * Validate line
    */
  validate() {
    const e = [];
    return (!he.isNumber(this.x1) || !he.isNumber(this.x2) || !he.isNumber(this.y1) || !he.isNumber(this.y2)) && e.push(new ue({
      message: "Line coordinates must be valid numbers",
      type: "error"
    })), this.x1 === this.x2 && this.y1 === this.y2 && e.push(new ue({
      message: "Line must have non-zero length",
      type: "error"
    })), this.issues = e, e;
  }
  /**
    * Check collision with shapes
    */
  checkCollisionWithShapes(e, i, s = !1) {
    if (!i || !i.length) return !1;
    if (!this.dimension)
      throw new Error("No line dimension for collision check");
    const n = e.halfBladeWidth;
    this.shapeCollisions = this.shapeCollisions || [];
    const a = i.filter((r) => r.added);
    for (const r of a) {
      let o = !1, l = !1;
      if (this.dimension === "l" ? (o = he.greaterThan(this.x2, r.x) && he.lessThan(this.x1, r.x + r.l), l = he.greaterThan(this.y1 + n, r.y) && he.lessThan(this.y1 - n, r.y + r.w)) : this.dimension === "w" && (o = he.greaterThan(this.x1 + n, r.x) && he.lessThan(this.x1 - n, r.x + r.l), l = he.greaterThan(this.y2, r.y) && he.lessThan(this.y1, r.y + r.w)), o && l)
        if (s)
          this.shapeCollisions.push(r);
        else
          return !0;
    }
    return s ? this.shapeCollisions : this.shapeCollisions.length > 0;
  }
  /**
    * Check if line is horizontal
    */
  isHorizontal() {
    return this.dimension === "l";
  }
  /**
    * Check if line is vertical
    */
  isVertical() {
    return this.dimension === "w";
  }
  // toData() method removed - using base class implementation
  // Base class uses serializationProperties to determine what to serialize
  // Removed by cleanup script on 2025-08-18
  /**
    * Update properties from data
    */
  update(e) {
    super.update(e), this.validate();
  }
  /**
    * Create line from coordinates
    */
  static fromCoordinates(e, i, s, n, a, r) {
    return new xi({ x1: e, y1: i, x2: s, y2: n, origin: a, type: r });
  }
  get lineDimension() {
    return !he.isNumber(this.x1) || !he.isNumber(this.x2) || !he.isNumber(this.y1) || !he.isNumber(this.y2) ? null : this.x1 === this.x2 && this.y1 !== this.y2 ? "w" : this.y1 === this.y2 && this.x1 !== this.x2 ? "l" : null;
  }
  get lineDirection() {
    return !he.isNumber(this.x1) || !he.isNumber(this.x2) || !he.isNumber(this.y1) || !he.isNumber(this.y2) ? null : this.x1 < this.x2 ? "lr" : this.x1 > this.x2 ? "rl" : this.y1 < this.y2 ? "bt" : this.y1 > this.y2 ? "tb" : null;
  }
  get coordinates() {
    return {
      x1: this.x1,
      x2: this.x2,
      y1: this.y1,
      y2: this.y2
    };
  }
  // length is a computed property defined in the schema
  // It is automatically added as a getter by applySchemaComputedProperties
}
const of = {
  tb: {
    bottomLeft: {
      top: "topRight",
      topLeft: "topLeft"
    },
    bottomRight: {
      top: "topLeft",
      topRight: "topRight"
    }
  },
  bt: {
    topLeft: {
      bottom: "bottomRight",
      bottomLeft: "bottomLeft"
    },
    topRight: {
      bottom: "bottomLeft",
      bottomRight: "bottomRight"
    }
  },
  lr: {
    topRight: {
      left: "bottomLeft",
      topLeft: "topLeft"
    },
    bottomRight: {
      left: "topLeft",
      bottomLeft: "bottomLeft"
    }
  },
  rl: {
    topLeft: {
      right: "bottomRight",
      topRight: "topRight"
    },
    bottomLeft: {
      right: "topRight",
      bottomRight: "bottomRight"
    }
  }
}, ks = {
  topLeft: {
    top: ["topRight"],
    default: ["topRight"]
  },
  bottomRight: {
    right: ["topRight"],
    default: ["topRight"]
  }
}, Is = {
  topRight: {
    top: ["topLeft"],
    right: ["bottomRight"],
    default: ["topLeft", "bottomRight"]
  },
  topLeft: {
    top: ["topRight"],
    left: ["bottomLeft"],
    default: ["topRight", "bottomLeft"]
  },
  bottomRight: {
    bottom: ["bottomLeft"],
    right: ["topRight"],
    default: ["bottomLeft", "topRight"]
  },
  bottomLeft: {
    bottom: ["bottomRight"],
    left: ["topLeft"],
    default: ["bottomRight", "topLeft"]
  }
};
class ct extends it {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Hc;
  static computedProperties = Uc;
  /**
   * Leave serializationProperties empty to trigger automatic enumeration
   * We use serializationExcludedProperties for exclusion-based approach
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   */
  static serializationExcludedProperties = [
    // All private fields (starting with _) are automatically excluded by AutoSerializable
  ];
  constructor(e, i, s) {
    typeof e == "object" ? super(e) : super({
      x: parseFloat(String(e)),
      y: parseFloat(String(i)),
      z: s !== void 0 ? parseFloat(String(s)) : 0
    }), this.validate();
  }
  /**
   * Get entity type
   */
  getType() {
    return le.Point;
  }
  /**
   * Validate point coordinates
   */
  validate() {
    if (isNaN(this.x) || isNaN(this.y))
      throw new Error("invalid point coordinates");
  }
  /**
   * Distance to another point
   */
  distanceTo(e) {
    const i = this.x - e.x, s = this.y - e.y, n = (this.z || 0) - (e.z || 0);
    return Math.sqrt(i * i + s * s + n * n);
  }
  /**
   * Check if this point equals another
   */
  equals(e, i = 1e-4) {
    return Math.abs(this.x - e.x) < i && Math.abs(this.y - e.y) < i && Math.abs((this.z || 0) - (e.z || 0)) < i;
  }
  /**
   * Create a point from coordinates
   */
  static fromCoords(e, i, s) {
    return new ct(e, i, s);
  }
  /**
   * Get unique key for this point (used by PointCollection)
   */
  getKey() {
    return `${this.x},${this.y}`;
  }
  /**
   * Clone point with optional new coordinates
   * NOTE: optimized for performance
   */
  cloneAt(e = null, i = null) {
    const s = new ct(e ?? this.x, i ?? this.y);
    for (const n in this)
      n !== "x" && n !== "y" && n !== "autoId" && (s[n] = this[n]);
    return s;
  }
  /**
   * Check if point collides with a shape
   */
  collidesWith(e) {
    return this.x >= e.x && this.x <= e.x + e.l && this.y >= e.y && this.y <= e.y + e.w;
  }
  /**
   * Check if this point is identical to another
   */
  isIdenticalTo(e) {
    return this.x === e.x && this.y === e.y;
  }
  /**
   * Get available shape positions for placement
   * @returns the position of the shape relative to the point e.g. bottomRight means the shape is placed to the bottom right of the point
   * @remarks does not cater for diagonals
   */
  getAvailableShapePositions(e) {
    const i = /* @__PURE__ */ new Set();
    if (this.raycast) {
      const s = of[this.direction];
      return s && s[this.corner] && s[this.corner][this.grid] && i.add(s[this.corner][this.grid]), i;
    }
    return e?.cutType !== "efficiency" ? (ks[this.corner] && (this.grid ? ks[this.corner][this.grid] && ks[this.corner][this.grid].forEach((s) => i.add(s)) : ks[this.corner].default?.forEach((s) => i.add(s))), i) : (Is[this.corner] && (this.grid ? Is[this.corner][this.grid] && Is[this.corner][this.grid].forEach((s) => i.add(s)) : Is[this.corner].default?.forEach((s) => i.add(s))), i);
  }
}
function Ae(t) {
  return !(t === void 0 || t === null || t === "" || typeof t == "object" && !Object.values(t).length);
}
function ni(t) {
  return t ? t === "l" ? "w" : "l" : null;
}
function lf(t) {
  return t ? t === "x" ? "y" : "x" : null;
}
function er(t, e) {
  return gc(t, e);
}
function hi(t, e) {
  return Ue(t, e);
}
function Mi(t, e, i) {
  mc(t, e, i);
}
function tr(t, e = !1) {
  if (!Ae(t) || typeof t != "object") return !1;
  const i = Object.values(t);
  return i.length === 0 ? !1 : e ? i.some((s) => Ae(s) && s) : i.some((s) => Ae(s));
}
function rw(t) {
  if (!t?.length) return [];
  const e = t.filter((s) => !s.added).map((s) => s), i = {};
  return e.forEach((s) => {
    const n = cf(s.stock) || 1;
    i[s.parentId] ? i[s.parentId].count += n : (i[s.parentId] = {}, i[s.parentId].count = n, i[s.parentId].id = s.parentId, i[s.parentId].name = s?.name ? s.name : s.id, i[s.parentId].l = s.l, i[s.parentId].w = s.w, i[s.parentId].t = s.t, i[s.parentId].material = s.material, i[s.parentId].rot = s.rot);
  }), Object.values(i);
}
function cf(t, e = []) {
  if (!t) return 1;
  if (t?.stack?.number) return t.stack.number;
  if (t?.stack?.stock) {
    const i = typeof t.stack.stock == "string" ? t.stack.stock : t.stack.stock?.id;
    if (i && e.length > 0)
      return e.find((n) => n.id === i)?.stack?.number || 1;
  }
  return typeof t?.stack == "string" && e.find((s) => s.id === t.stack)?.stack?.number || 1;
}
function uf() {
  const t = document.documentElement;
  return "requestFullscreen" in t || "webkitRequestFullscreen" in t || "mozRequestFullScreen" in t || "msRequestFullscreen" in t;
}
function ow(t, e) {
  if (t == null) return "-";
  let i = Math.round(t).toString();
  for (; i.length < e; ) i = "0" + i;
  return i;
}
function qi(t, e = !1) {
  const i = typeof t.l == "string" ? Q({ v: t.l }) : t.l, s = typeof t.w == "string" ? Q({ v: t.w }) : t.w;
  if (!e || !("trim" in t))
    return { l: i, w: s };
  if (co(t))
    return { l: i, w: s };
  if (lo(t) && !t.hasTrim)
    return { l: i, w: s };
  const n = t.trim, a = Q({ v: n.w1 ?? 0 }) + Q({ v: n.w2 ?? 0 }), r = Q({ v: n.l1 ?? 0 }) + Q({ v: n.l2 ?? 0 });
  return {
    l: i - (typeof a == "string" ? Q({ v: a }) : a),
    w: s - (typeof r == "string" ? Q({ v: r }) : r)
  };
}
function df(t, e) {
  if ("trim" in t && !co(t)) {
    const i = t.trim;
    e.l = e.l - (Q({ v: i.w1 ?? 0 }) + Q({ v: i.w2 ?? 0 })), e.w = e.w - (Q({ v: i.l1 ?? 0 }) + Q({ v: i.l2 ?? 0 }));
  }
  return e;
}
function Fi(t, e, i = !1) {
  let s = {
    l: t.l,
    w: t.w
  };
  (Gi(t) || Te(t) || gs(t)) && (s = {
    l: Q({ v: t.l }),
    w: Q({ v: t.w })
  });
  const n = ("rot" in t ? t.rot : 0) ?? 0;
  return i && (s = df(t, s)), n === e || ([s.l, s.w] = [s.w, s.l]), s;
}
function Po(t) {
  if (!("l" in t) || !("w" in t)) throw new Error("rotatable item must have l & w properties");
}
function ff(t) {
  Ze(t) || (Po(t), [t.l, t.w] = [t.w, t.l]);
}
function Ui(t, e, i = null, s) {
  if (!e || !t)
    throw new Error("Container and shape are required");
  let n = 0;
  s && ku(s) ? n = s.options.minSpacing : s && s?.options?.minSpacing ? n = Q({ v: s.options.minSpacing }) : oo(e) && (n = e?.saw?.options.minSpacing);
  const a = "allowExactFitShapes" in e && e.allowExactFitShapes === !0, r = qi(e, !0), o = a ? qi(e, !1) : r, l = qi(t, !0);
  let c = r;
  if (a && (he.equalTo(l.l, o.l) && he.equalTo(l.w, o.w) || he.equalTo(l.l, o.w) && he.equalTo(l.w, o.l)) && (c = o), l.l * l.w > c.l * c.w)
    return !1;
  function u(E, V) {
    return he.equalTo(E, V) || he.lessThanOrEqualTo(E, V - n * 2);
  }
  function f(E) {
    return u(E.l, c.l) && u(E.w, c.w);
  }
  const h = Ys(t, e);
  if (t.orientationLock || i !== null) {
    const E = i ?? (h === "w" ? 1 : 0), V = Fi(t, E, !0);
    if (a) {
      const A = Fi(t, E, !1);
      if (he.equalTo(A.l, o.l) && he.equalTo(A.w, o.w))
        return f(A);
    }
    return f(V);
  }
  const g = Fi(t, 0, !0);
  if (a) {
    const E = Fi(t, 0, !1);
    if (he.equalTo(E.l, o.l) && he.equalTo(E.w, o.w) && f(E)) return !0;
  }
  if (f(g)) return !0;
  const k = Fi(t, 1, !0);
  if (a) {
    const E = Fi(t, 1, !1);
    if (he.equalTo(E.l, o.l) && he.equalTo(E.w, o.w) && f(E)) return !0;
  }
  return f(k);
}
function hf(t) {
  if ("orientationLock" in t)
    return t.orientationLock;
  let e = null;
  return (Ze(t) || gs(t) || ut(t) || Te(t)) && (e = t.orientationLock), e;
}
function Ys(t, e) {
  const i = hf(t);
  if (!Ae(i)) return null;
  if (!e || "direction" in t) return i;
  if (!Ze(t) && Ia(t)) return null;
  if ("getStock" in e) {
    const s = e.getStock;
    if (s && Ae(s.grain))
      return i === s.grain ? "l" : "w";
  }
  return i;
}
function Co(t, e) {
  if (Ze(t))
    return Ui(t, e, t.rot) ? [t.rot] : [];
  const i = [];
  for (let s = 0; s <= 1; s++)
    Ct(t, s, e) && Ui(t, e, s) && i.push(s);
  return i;
}
function Ct(t, e = null, i = null) {
  if (!Ae(e))
    throw new Error("no rotation provided to canRotate");
  if (e === !0 && (e = 1), e === !1 && (e = 0), t.preventAutoRotation && e !== 0 || !Ze(t) && Ia(t) && e !== 0 || i && !Ui(t, i, e))
    return !1;
  const s = Ys(t, i);
  return !(s === "l" && e === 1 || s === "w" && e === 0);
}
function pf(t, e = null, i = null) {
  const s = "rot" in t ? t.rot : 0;
  return e === null && (e = s === 0 ? 1 : 0), !Ze(t) && Ia(t) ? !0 : Ct(t, e, i) ? (s === e || ff(t), !0) : !1;
}
function ht(t, e = null, i = null) {
  return e ? e = 1 : e = 0, i && e && !Ui(t, i, e) ? !1 : pf(t, e, i);
}
function lw(t, e) {
  if (Ze(t)) return t.rot;
  if (!Ae(t.orientationLock)) return null;
  const i = e.getStock;
  return !t.orientationLock || !Ae(i?.grain) ? null : t.orientationLock === i?.grain ? 0 : 1;
}
function ir(t, e, i, s, n = null) {
  if (!s) throw new Error("requiredSide not supplied to canRotateToDimensionRange");
  const a = qi(t);
  if (a.l >= e && a.l <= i || a.w >= e && a.w <= i) {
    if (t.l === t.w) return !0;
    const r = Math.max(a.l, a.w), o = Math.min(a.l, a.w);
    if (n) {
      if (s === "l") {
        if (r >= e && r <= i && Ct(t, 0, n) || o >= e && o <= i && Ct(t, 1, n)) return !0;
      } else if (s === "w" && (o >= e && o <= i && Ct(t, 0, n) || r >= e && r <= i && Ct(t, 1, n)))
        return !0;
    } else if (t.orientationLock) {
      if (t.orientationLock === "l")
        return s === "l" && r >= e && r <= i;
      if (t.orientationLock === "w")
        return s === "l" && o >= e && o <= i;
    }
  }
  return !1;
}
function gf(t, e, i, s) {
  if (!i) throw new Error("requiredSide not supplied to rotateToDimension");
  if (t.l !== e && t.w !== e) return !1;
  if (t.l === t.w) return !0;
  const n = qi(t), a = Math.max(n.l, n.w), r = Math.min(n.l, n.w);
  if (i === "l") {
    if (a === e && Ct(t, 0, s)) return ht(t, 0);
    if (r === e && Ct(t, 1, s)) return ht(t, 1);
  } else if (i === "w") {
    if (r === e && Ct(t, 0, s)) return ht(t, 0);
    if (a === e && Ct(t, 1, s)) return ht(t, 1);
  }
  return !1;
}
function Ia(t) {
  Po(t);
  const e = qi(t);
  return he.equalTo(e.l, e.w);
}
class pn extends it {
  // Zod schema for validation and serialization
  static schema = fa;
  static computedProperties = ha;
  constructor(e = {}) {
    super(e);
    let i = !1;
    Rt(this) && (i = this.infiniteLength), !e?.preventAutoRotation && !i && (this.orientationLock ? (this.orientationLock === "l" && ht(this, 0), this.orientationLock === "w" && ht(this, 1)) : this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !e?.preventGrainRotation && (this.grain = ni(this.grain)))), this.calculateDimensions(), e.skipValidation || e.skipBusinessValidation || e.validationMode === "none" || e.validationMode === "schema" || this.validate();
  }
  /**
   * Calculate derived dimensions (area, longSide, shortSide, parentId)
   * Called automatically in constructor and after dimension changes
   */
  calculateDimensions() {
    this.area = this.l * this.w, this.longSide = Math.max(this.l, this.w), this.shortSide = Math.min(this.l, this.w), this.parentId = tu(this.id);
  }
  /**
   * Get entity type
   */
  getType() {
    return le.Rectangle;
  }
  /**
   * Validate business rules for the rectangle
   * This is separate from schema validation which happens in the constructor
   * Override this method in subclasses for domain-specific validation
   */
  validate() {
    if (this.issues = [], this.warnings = [], (this.l <= 0 || this.w <= 0) && this.issues.push(new ue({
      message: "Rectangle dimensions must be positive",
      type: "error",
      field: [["l"], ["w"]],
      item: this
    })), this.hasTrim) {
      const e = {
        x: (this.trim.w1 || 0) + (this.trim.w2 || 0),
        y: (this.trim.l1 || 0) + (this.trim.l2 || 0)
      };
      e.x >= this.l && this.warnings.push(new ue({
        message: "Trim values exceed length",
        type: "warning",
        field: [["trim"]],
        item: this
      })), e.y >= this.w && this.warnings.push(new ue({
        message: "Trim values exceed width",
        type: "warning",
        field: [["trim"]],
        item: this
      }));
    }
    return this.needsAsyncValidation() && Promise.resolve().then(() => this.validateAsync()), this.issues;
  }
  /**
   * Check if async validation is needed
   * Override in subclasses that need async validation
   */
  needsAsyncValidation() {
    return !1;
  }
  /**
   * Async business rule validation
   * Override in subclasses for complex async validations
   */
  async validateAsync() {
    return this.issues;
  }
  /**
   * Leave serializationProperties empty to trigger automatic enumeration
   * We use serializationExcludedProperties for exclusion-based approach
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   */
  static serializationExcludedProperties = [
    "numberFormat",
    // Non-serializable formatting options
    "proximity"
    // Runtime-generated cache object
  ];
  // Legacy compressionExcludedProperties removed - use schema-based .behavior() instead
  /**
   * Update properties from data
   * Uses SchemaClass validation handling which respects validation options
   */
  update(e) {
    super.update(e), (e.l !== void 0 || e.w !== void 0 || e.id !== void 0) && this.calculateDimensions(), e.skipValidation || e.validationMode === "none" || e.validationMode === "schema" || this.validate();
  }
  /**
   * Check if this rectangle fits within another
   */
  fitsWithin(e) {
    const i = this.trimmedDimensions, s = e.trimmedDimensions;
    return i.l <= s.l && i.w <= s.w || this.canRotate && i.l <= s.w && i.w <= s.l;
  }
  /**
   * Apply trim to dimensions
   */
  applyTrim() {
    !this.hasTrim || this.trimmed || (this.l = this.l - this.trim.w1 - this.trim.w2, this.w = this.w - this.trim.l1 - this.trim.l2, this.trimmed = !0);
  }
  removeTrim() {
    !this.hasTrim || !this.trimmed || (this.l = this.l + this.trim.w1 + this.trim.w2, this.w = this.w + this.trim.l1 + this.trim.l2, this.trimmed = !1);
  }
  /**
   * Rotate the rectangle 90 degrees
   */
  rotate() {
    if (!this.canRotate) return;
    [this.l, this.w] = [this.w, this.l];
    const e = {
      l1: this.trim.w1,
      l2: this.trim.w2,
      w1: this.trim.l1,
      w2: this.trim.l2
    };
    this.trim = e, this.grain === "l" ? this.grain = "w" : this.grain === "w" && (this.grain = "l");
  }
  // Clone methods now inherited from AutoSerializable
  // Subclasses can override getCloneResetProperties() and getCloneOverrides() for customization
  /**
   * Check if grain matches another entity
   * No grain means it matches anything
   */
  hasMatchingGrain(e) {
    return !this.grain || !e.grain ? !0 : this.grain === e.grain;
  }
  /**
   * Get grain-aware dimensions
   * Returns dimensions along and across the grain
   */
  getGrainDimensions() {
    return this.grain === "l" ? { along: this.l, across: this.w } : this.grain === "w" ? { along: this.w, across: this.l } : {
      along: Math.max(this.l, this.w),
      across: Math.min(this.l, this.w)
    };
  }
  /**
   * Check equality with another rectangle
   */
  equals(e, i = !0, s = !1) {
    return !(i && (this.l !== e.l || this.w !== e.w || this.t !== e.t) || s && (this.material !== e.material || this.name !== e.name || this.grain !== e.grain));
  }
  /**
   * Get all sides of the rectangle as Line objects
   */
  getSides() {
    return [
      this.getSide("bottom"),
      this.getSide("right"),
      this.getSide("top"),
      this.getSide("left")
    ];
  }
  /**
   * Get a specific side of the rectangle as a Line object
   */
  getSide(e) {
    const i = this.x ?? 0, s = this.y ?? 0;
    switch (e) {
      case "bottom":
        return new xi({
          x1: i,
          x2: i + this.l,
          y1: s,
          y2: s,
          type: "bottom",
          validationMode: "none"
          // parentId: this.id
        });
      case "right":
        return new xi({
          x1: i + this.l,
          x2: i + this.l,
          y1: s,
          y2: s + this.w,
          type: "right",
          validationMode: "none"
          // parentId: this.id
        });
      case "top":
        return new xi({
          x1: i,
          x2: i + this.l,
          y1: s + this.w,
          y2: s + this.w,
          type: "top",
          validationMode: "none"
          // parentId: this.id
        });
      case "left":
        return new xi({
          x1: i,
          x2: i,
          y1: s,
          y2: s + this.w,
          type: "left",
          validationMode: "none"
          // parentId: this.id
        });
    }
  }
  sharesSide(e, i = 0, s = null) {
    switch (s) {
      case "left":
        return e.x + e.l + i === this.x;
      case "right":
        return e.x === this.x + this.l + i;
      case "bottom":
        return e.y + e.w + i === this.y;
      case "top":
        return e.y === this.y + this.w + i;
    }
    return !1;
  }
  sameSide(e, i = null) {
    switch (i) {
      case "left":
        return e.x === this.x;
      case "right":
        return e.x + e.l === this.x + this.l;
      case "bottom":
        return e.y === this.y;
      case "top":
        return e.y + e.w === this.y + this.w;
    }
    return !1;
  }
  getCorners() {
    return {
      bottomLeft: new ct(this.x, this.y),
      topLeft: new ct(this.x, this.y + this.w),
      topRight: new ct(this.x + this.l, this.y + this.w),
      bottomRight: new ct(this.x + this.l, this.y)
    };
  }
  /**
   * Creates or retrieves a cached rectangle used for proximity detection.
   * Optimized for frequent calls with the same distance parameter.
   */
  createProximityRectangle(e) {
    if (!e || e < 0) return null;
    const i = this.proximity;
    if (i?.distance === e) {
      const n = i.rectangle;
      return this.x === 0 ? (n.x = 0, n.l = this.l + e) : (n.x = this.x - e, n.l = this.l + e * 2), this.y === 0 ? (n.y = 0, n.w = this.w + e) : (n.y = this.y - e, n.w = this.w + e * 2), n;
    }
    const s = new pn({
      id: `${this.id}-proximity`,
      name: "proximity",
      x: this.x === 0 ? 0 : this.x - e,
      y: this.y === 0 ? 0 : this.y - e,
      l: this.x === 0 ? this.l + e : this.l + e * 2,
      w: this.y === 0 ? this.w + e : this.w + e * 2,
      preventAutoRotation: !0
    });
    return this.proximity = { rectangle: s, distance: e }, s;
  }
}
class Pa extends pn {
  // Zod schema for validation and serialization
  static schema = pa;
  static computedProperties = ga;
  constructor(e = {}) {
    super(e), e.skipValidation || this.validateContainer(e);
  }
  // applyComputedProperties removed - handled by SchemaClass base
  // Container.computedProperties includes Rectangle.computedProperties via spread
  /**
    * Get entity type
    */
  getType() {
    return le.Container;
  }
  /**
    * Validate container-specific properties
    */
  validateContainer(e) {
    const i = ["sheet", "linear", "roll", null, void 0, ""], s = this?.stockType;
    if (!i.includes(s)) {
      const n = new ue({
        item: this,
        field: [["type"]],
        message: `Container type ${s ?? "N/A"} is not valid`
      });
      this.issues.push(n);
    }
  }
  /**
    * Add a shape to the container
    */
  addShape(e) {
    this.shapes || (this.shapes = []), this.shapes.push(e);
  }
  /**
    * Remove a shape from the container
    */
  removeShape(e) {
    if (!this.shapes) return !1;
    const i = this.shapes.indexOf(e);
    return i > -1 ? (this.shapes.splice(i, 1), !0) : !1;
  }
  /**
    * Clear all shapes from the container
    */
  clearShapes() {
    this.shapes = [];
  }
  // serializationProperties removed - now uses schema fields automatically
  // compressionExcludedProperties removed - now defined in Container.zod.ts schema using .behavior()
  /**
    * Update properties from data
    * Automatically updates all schema-defined properties
    */
  update(e) {
    const i = Pa.schema.partial().parse(e);
    for (const s in i)
      this[s] = i[s];
  }
  /**
    * Check if this container can fit a shape
    */
  canFitShape(e) {
    if (!e || !e.l || !e.w) return !1;
    const i = this.trimmedDimensions;
    return e.l <= i.l && e.w <= i.w || !e.preventAutoRotation && e.l <= i.w && e.w <= i.l;
  }
  /**
    * Check if container is a specific stock type
    */
  isStockType(e) {
    return this.stockType === e;
  }
  /**
    * Get stock reference
    * Defined as a getter to avoid circular type reference in generated properties
    */
  get getStock() {
    return Rt(this) ? this : Ni(this) ? this.stock : Ze(this) ? this.stock : null;
  }
}
class ei extends it {
  // Required: Define schema and computed properties
  static schema = Jr;
  static computedProperties = ou;
  /**
   * Leave serializationProperties empty to trigger automatic enumeration
   * We use serializationExcludedProperties for exclusion-based approach
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   */
  static serializationExcludedProperties = [
    // All private fields (starting with _) are automatically excluded by AutoSerializable
  ];
  /**
   * Constructor with automated property application
   */
  constructor(e = {}) {
    super(e);
  }
  /**
   * Check if this has strip shape batch data
   */
  hasStripShapeBatches() {
    return this.stripShapeBatches != null && this.stripShapeBatches.groups != null && Object.keys(this.stripShapeBatches.groups).length > 0;
  }
  /**
   * Get the phase or default to 0
   */
  getPhase() {
    return this.myPhase ?? 0;
  }
  /**
   * Set the phase
   */
  setPhase(e) {
    this.myPhase = e;
  }
  /**
   * Get strip direction with type safety
   */
  getStripDirection() {
    return this.myStripDirection;
  }
  /**
   * Set strip direction with flexible input
   */
  setStripDirection(e) {
    this.myStripDirection = e;
  }
  /**
   * Reset to default values (preserves stripShapeBatches)
   */
  reset() {
    const e = this.stripShapeBatches, i = this.constructor.getDefaults(
      this.constructor.schema
    );
    Object.assign(this, i), e && (this.stripShapeBatches = e);
  }
  /**
   * Get entity type
   */
  getType() {
    return le.GuillotineState;
  }
  getStripShapeBatchData(e) {
    return typeof e != "number" || !this?.stripShapeBatches || !this.stripShapeBatches.groups || !(e in this.stripShapeBatches.groups) ? !1 : this.stripShapeBatches.groups[e];
  }
  isInStripShapeBatch(e) {
    return !!this.getStripShapeBatchData(e);
  }
  /**
   * Reset strip shape batch groups to empty object
   */
  resetStripShapeBatchGroups() {
    this.stripShapeBatches ? this.stripShapeBatches.groups = {} : this.stripShapeBatches = { groups: {} };
  }
  /**
   * Set a specific strip shape batch group
   */
  setStripShapeBatchGroup(e, i) {
    this.stripShapeBatches || (this.stripShapeBatches = { groups: {} }), this.stripShapeBatches.groups || (this.stripShapeBatches.groups = {}), this.stripShapeBatches.groups[e] = i;
  }
}
function Ao(t, e = "cc") {
  if (!t) return t;
  const i = {
    l1: "w2",
    l2: "w1",
    w1: "l1",
    w2: "l2"
  }, s = {
    x1: "y1",
    x2: "y2",
    y1: "x2",
    y2: "x1"
  }, n = {
    a: "d",
    // bottom left -> bottom right
    b: "a",
    // top left -> bottom left
    c: "b",
    // top right -> top left
    d: "c"
    // bottom right -> top right
  }, a = {}, o = Object.keys(t).some((l) => ["x1", "x2", "y1", "y2"].includes(l)) ? s : i;
  if (e === "cc") {
    for (const [l, c] of Object.entries(o))
      l in t && (a[c] = t[l]);
    for (const [l, c] of Object.entries(n))
      l in t && (a[c] = t[l]);
  } else {
    for (const [l, c] of Object.entries(o))
      c in t && (a[l] = t[c]);
    for (const [l, c] of Object.entries(n))
      c in t && (a[l] = t[c]);
  }
  return a;
}
function Jn(t = 0, e, i = null, s = null, n = null) {
  if (!Te(i) && !zt || s === "stock") return !1;
  let a, r;
  if (Te(i) ? a = i.orientationLock : zt(i) ? a = i.direction : s === "shape" && (a = n), t === 0 || zt(i))
    switch (e) {
      case "n":
        r = a === "w" || n === "w";
        break;
      case "l":
      case "y":
        r = a === "w" || n === "w";
        break;
      case "w":
        r = a === "l" || n === "l";
        break;
      default:
        r = n === "w";
    }
  else if (t === 1)
    if (i) r = i.w > i.l;
    else return !1;
  else if (t === 2) {
    if (!i) return !1;
    switch (e) {
      case "n":
        r = i.w > i.l;
        break;
      case "y":
      case "l":
        r = i.w > i.l;
        break;
      case "w":
        r = i.l >= i.w;
        break;
      default:
        r = !1;
    }
  }
  return r;
}
function mf(t, e, i = null, s = null, n = null) {
  if (!Te(i) || s === "shape") return !1;
  let a;
  return t === 0 || t === 1 ? Jn(t, e, i, s, n) ? "cc" : !1 : t === 2 ? e === "w" ? i.l < i.w ? "c" : "cc" : !1 : a;
}
class Ca extends it {
  // Required: Define schema and computed properties for SchemaClass
  static schema = sd;
  static computedProperties = nd;
  /**
   * Leave serializationProperties empty to trigger automatic enumeration
   * We use serializationExcludedProperties for exclusion-based approach
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   */
  static serializationExcludedProperties = [
    // All private fields (starting with _) are automatically excluded by AutoSerializable
  ];
  // Compression exclusions now defined in schema using .behavior()
  // Note: stock is handled specially in serializeValue to create a reference
  constructor(e) {
    if (!e.stock)
      throw new Error("Stock is required for Cut creation");
    const i = { ...e };
    i.x2 < i.x1 && ([i.x1, i.x2] = [i.x2, i.x1]), i.y2 < i.y1 && ([i.y1, i.y2] = [i.y2, i.y1]), super(i), this.dimension || (this.dimension = this.lineDimension);
  }
  /**
    * Get entity type
    */
  getType() {
    return le.Cut;
  }
  /**
    * Validate cut
    */
  validate() {
    return [];
  }
  // Note: bladeWidth and halfBladeWidth are now computed properties from schema
  /**
    * Trim cut coordinates to fit within stock boundaries
    */
  trim() {
    this.dimension === "l" ? (this.x1 < 0 && (this.x1 = 0), this.x2 > this.stock.l && (this.x2 = this.stock.l)) : this.dimension === "w" && (this.y1 < 0 && (this.y1 = 0), this.y2 > this.stock.w && (this.y2 = this.stock.w));
  }
  // Note: isInsideStock, isHorizontal, isVertical, isTrimCut are now computed properties from schema
  /**
    * Mark cut for removal
    */
  markForRemoval() {
    this.remove = !0;
  }
  /**
    * Update properties from data
    */
  update(e) {
    super.update(e), ("x1" in e || "x2" in e || "y1" in e || "y2" in e) && (this.dimension = this.lineDimension);
  }
  /**
    * Create cut from coordinates
    */
  static fromCoordinates(e, i, s, n, a, r) {
    return new Ca({ x1: e, y1: i, x2: s, y2: n, position: r, stock: a });
  }
  // Note: lineDimension, coordinates, and length are now computed properties from schema
  /**
   * Override serializeValue to handle stock reference in compressed mode
   */
  // serializeValue removed - AutoSerializable handles compression automatically via schema behaviors
  get classReferences() {
    return {
      stock: "autoId"
    };
  }
}
class To extends pn {
  // Zod schema for validation and serialization
  static schema = on;
  static computedProperties = ln;
  constructor(e = {}) {
    if (super(e), !this.guillotineState)
      this.guillotineState = new ei();
    else if (!(this.guillotineState instanceof ei)) {
      const i = typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new ei(i);
    }
    (!this.firstShape || typeof this.firstShape != "object") && (this.firstShape = { sampleRotations: [], isFirstShape: !1 }), (!this.priority || typeof this.priority != "object") && (this.priority = {}), ut(this) && (!this.group || typeof this.group != "object") && (this.group = {
      inUserGroup: !1,
      inGroup: !1,
      reference: null,
      addedAsGroup: null
    });
  }
  /**
   * Ensure guillotineState is always a valid GuillotineState instance
   * Can be called anytime to ensure validity, especially after cloning or deserialization
   */
  ensureGuillotineState() {
    if (!this.guillotineState || !(this.guillotineState instanceof ei)) {
      const e = this.guillotineState && typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new ei(e);
    }
  }
  /**
   * Override update to ensure guillotineState is properly handled
   */
  update(e) {
    const i = this.guillotineState instanceof ei ? this.guillotineState : null;
    super.update(e), e.guillotineState !== void 0 ? this.ensureGuillotineState() : !this.guillotineState && i ? this.guillotineState = i : this.ensureGuillotineState();
  }
  /**
   * Apply computed properties as getters
   */
  applyComputedProperties() {
    super.applyComputedProperties?.();
  }
  /**
   * Get entity type
   */
  getType() {
    return le.Placeable;
  }
  /**
   * Validate business rules for the placeable
   * This is separate from schema validation which happens in the constructor
   * Override this method in subclasses for domain-specific validation
   */
  validate() {
    return this.issues = [], this.warnings = [], super.validate(), this.issues;
  }
  reset({
    keepScores: e = !1,
    keepGuillotineBatchData: i = !0,
    keepGroupData: s = !1,
    keepFirstShapeSampleRotations: n = !1
  } = {}) {
    if (this.added = !1, this.stock = null, this.placementOrder = void 0, this.x = 0, this.y = 0, e || (this.score = null, this.bestScore = null), this.firstShape.isFirstShape = !1, n || (this.firstShape.sampleRotations = []), this.patternMatch = !1, this.fitsStock = null, this.guillotineState instanceof ei)
      if (i) {
        const a = this.guillotineState.stripShapeBatches;
        this.guillotineState.reset(), a && (this.guillotineState.stripShapeBatches = a);
      } else
        this.guillotineState.reset();
    else
      this.guillotineState = new ei();
    ut(this) && (s || "group" in this && this.group && (delete this.group.placementOrder, this.group.inGroup = !1, this.group.inUserGroup = !1, this.group.reference = null, this.group.addedAsGroup = null)), Ze(this) && "shapes" in this && Array.isArray(this.shapes) && this.shapes.forEach((a) => {
      "reset" in a && typeof a.reset == "function" && a.reset(e, i, s);
    });
  }
  /**
   * Add shape to stock (placeholder for optimization logic)
   */
  addToStock(e) {
    this.stock = e, this.added = !0, e.used = !0, this.grain = e.grain, !Ze(this) && e?.grain && this.rot && (this.grain = ni(e.grain));
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.added = !1, ut(this) && (this.group.addedAsGroup = null, this.firstShape.isFirstShape = !1), Ze(this) && this.shapes.forEach((e) => {
      "removeFromStock" in e && typeof e.removeFromStock == "function" && e.removeFromStock();
    });
  }
  getPriority(e) {
    if (!e) return 0;
    const i = e.parentId;
    return this.priority?.[i] ? this.priority[i] : 0;
  }
  getStripShapeBatchData(e) {
    if (typeof e != "number") return !1;
    const i = this.guillotineState;
    return !i || Pu(i) || !i.stripShapeBatches?.groups || !(e in i.stripShapeBatches.groups) ? !1 : i.stripShapeBatches.groups[e];
  }
  /**
   * Set best score
   */
  setBestScore(e, i = null) {
    const s = (n) => "cutDirection" in n;
    this.bestScore = {
      x: e.x,
      y: e.y,
      rot: e.rot,
      total: e.score.total,
      score: e.score,
      group: ut(e) ? e.group.reference : null,
      stock: e.stock,
      weighting: {},
      // Use empty object instead of null
      point: i,
      // Copy guillotine-specific properties from score if they exist
      myStripParent: s(e.score) ? e.score.myStripParent : void 0,
      myStripDirection: s(e.score) ? e.score.myStripDirection : void 0,
      cutDirection: s(e.score) ? e.score.cutDirection : void 0
    };
  }
  setPositionToBestScore() {
    ht(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
  }
  resetPosition() {
    this.x = 0, this.y = 0, this.placementOrder = null, this.ensureGuillotineState(), this.guillotineState.reset();
  }
  /**
   * Reset both scores
   */
  resetBothScores() {
    this.score = null, this.bestScore = null;
  }
  /**
   * Reset score
   */
  resetScore() {
    this.score = null, this.ensureGuillotineState(), this.guillotineState.reset();
  }
  /**
   * Reset best score
   */
  resetBestScore() {
    this.bestScore = null, this.ensureGuillotineState(), this.guillotineState.reset();
  }
  /**
   * Check if shape will fit in given dimensions
   */
  willItFit(e, i = null) {
    return Rt(e) && typeof this.fitsStock?.[e.parentId] < "u" ? this.fitsStock?.[e.parentId]?.[i ?? "any"] === !0 : Ui(this, e, i);
  }
  /**
   * Check if shape is an exact fit
   */
  isExactFit(e) {
    return this.orientationLock === "w" && this.w === e.w || this.orientationLock === "l" && this.l === e.l || !this.orientationLock && this.w === e.w && this.l === e.l;
  }
  /**
   * Get distances from placeable edges to container edges
   * @returns Object with distances: { left, right, top, bottom }
   * Positive values mean placeable is inside container bounds
   * Negative values mean placeable extends beyond container edge
   */
  getDistancesToContainerEdges(e) {
    if (this.x == null || this.y == null)
      throw new Error("Placeable must be positioned before checking edge distances");
    return {
      left: this.x - (e.x ?? 0),
      right: e.l + (e.x ?? 0) - (this.x + this.l),
      top: e.w + (e.y ?? 0) - (this.y + this.w),
      bottom: this.y - (e.y ?? 0)
    };
  }
  /**
   * Check if placeable is too close to container edges
   * Note: minSpacing is for part-to-part spacing only, not part-to-edge.
   * Parts are allowed to be placed directly against container edges.
   * This method now only checks if the part extends beyond the container bounds.
   *
   * @param container - The container to check against
   * @returns true if any part of the placeable extends outside the container
   */
  isTooCloseToEdges(e) {
    const i = this.getDistancesToContainerEdges(e);
    return Object.values(i).some((s) => s < 0);
  }
  getMinSpacing(e, i = !1) {
    const s = e.bladeWidth;
    if (e.cutType !== "efficiency")
      return i ? 0 : s;
    if (this.minSpacing > 0) return this.minSpacing;
    let n = e?.options?.minSpacing || 0;
    if (s > n && (n = s), e.options?.minSpacingDimension?.dimension && e.options?.minSpacingDimension?.minSpacing) {
      const a = e.options?.minSpacingDimension?.dimension;
      (this.l <= a || this.w <= a) && (n = e.options?.minSpacingDimension?.minSpacing || n);
    }
    return i && (n -= s), n < 0 && (n = 0), this.minSpacing = n, n;
  }
  /**
   * Set the stock this item is placed on
   */
  setStock(e) {
    this.stock = e;
  }
  getCoords(e, i = !1) {
    const s = new ct(this.x + this.l, this.y);
    s.corner = "bottomRight";
    const n = new ct(this.x, this.y + this.w);
    if (n.corner = "topLeft", e?.cutType !== "efficiency" && !i)
      return [n, s];
    const a = new ct(this.x, this.y);
    a.corner = "bottomLeft";
    const r = new ct(this.x + this.l, this.y + this.w);
    return r.corner = "topRight", [a, n, r, s];
  }
  getTopPosition(e = !0, i = null) {
    if (e && typeof this.stock?.bladeWidth > "u" && i === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return e ? this.y + this.w + ((this.stock?.bladeWidth || i) ?? 0) : this.y + this.w;
  }
  getRightPosition(e = !0, i = null) {
    if (e && typeof this.stock?.bladeWidth > "u" && i === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return e ? this.x + this.l + ((this.stock?.bladeWidth || i) ?? 0) : this.x + this.l;
  }
  getBottomPosition(e = !0, i = null) {
    if (e && typeof this.stock?.bladeWidth > "u" && i === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return e ? this.y - ((this.stock?.bladeWidth || i) ?? 0) : this.y;
  }
  getLeftPosition(e = !0, i = null) {
    if (e && typeof this.stock?.bladeWidth > "u" && i === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return e ? this.x - ((this.stock?.bladeWidth || i) ?? 0) : this.x;
  }
  isInsideStock(e) {
    return !(this.x + this.l > e.l || this.y + this.w > e.w || this.x < 0 || this.y < 0);
  }
  isSameSize(e) {
    const { w: i, l: s } = this, { w: n, l: a } = e;
    return i === n && s === a;
  }
  isIdentical(e, i = !1) {
    if (this.constructor !== e.constructor || this.t !== e.t || this.orientationLock !== e.orientationLock || this.material !== e.material)
      return !1;
    if (this.getType() === le.Shape && this.identicalTo?.length && (this.parentId === e.parentId || this.identicalTo.includes(e.parentId)))
      return !0;
    if (this.getType() !== le.Group) {
      if (e.parentId === this.parentId) return !0;
      if (this.getType() === le.Shape && i && this.parentId !== e.parentId) return !1;
    } else if (e.autoId === this.autoId) return !0;
    const { w: s, l: n } = this, { w: a, l: r } = e;
    if (!(s === a && n === r) && !(s === r && n === a)) return !1;
    const o = this.trim, l = e.trim;
    return !o || !l ? o === l : o.l1 === l.l1 && o.l2 === l.l2 && o.w1 === l.w1 && o.w2 === l.w2;
  }
  /**
   * Get perimeter cut vectors (for export)
   */
  getPerimeterCutVectors(e = null) {
    return e === null && (e = Rt(this.stock) ? this.stock.bladeWidth / 2 : 0), [
      //bottom
      {
        x1: this.x - e,
        x2: this.x + this.l + e,
        y1: this.y - e,
        y2: this.y - e,
        type: "bottom"
      },
      //right
      {
        x1: this.x + this.l + e,
        x2: this.x + this.l + e,
        y1: this.y - e,
        y2: this.y + this.w + e,
        type: "right"
      },
      //top
      {
        x1: this.x - e,
        x2: this.x + this.l + e,
        y1: this.y + this.w + e,
        y2: this.y + this.w + e,
        type: "top"
      },
      //left
      {
        x1: this.x - e,
        x2: this.x - e,
        y1: this.y - e,
        y2: this.y + this.w + e,
        type: "left"
      }
    ];
  }
  createPerimeterCuts(e = null) {
    let i = [];
    if (e = e || this.stock, !e) throw new Error("stock is required to create a cut");
    return this.getPerimeterCutVectors().forEach((n) => i.push(new Ca({
      stock: Rt(this.stock) ? this.stock : e,
      x1: n.x1,
      x2: n.x2,
      y1: n.y1,
      y2: n.y2,
      position: n.type
    }))), i = i.filter((n) => n.isInsideStock), i;
  }
}
let Ps = null, _n = !1;
function yf() {
  if (_n)
    return Ps;
  try {
    Ps = { runTests: !1, throwErrorsOnFailedTests: !1 }, _n = !0;
  } catch {
    Ps = { runTests: !1, throwErrorsOnFailedTests: !1 }, _n = !0;
  }
  return Ps;
}
const sr = Vr("tests");
Vr("timers");
let bf, Je;
try {
  {
    const t = new Proxy({}, { get: () => () => t });
    Je = () => t;
  }
} catch {
  const e = new Proxy({}, { get: () => () => e });
  Je = () => e;
}
function yt(t = [], e = null) {
  if (!t?.length) return;
  const i = yf();
  if (Ht() && i && i.runTests) {
    const n = i?.testCollector || bf;
    for (const a of t) {
      if (!a || typeof a != "function") {
        console.error("Invalid test function provided:", a);
        continue;
      }
      const r = Date.now();
      let o = !1, l;
      try {
        a(), o = !0;
      } catch (c) {
        if (o = !1, l = c instanceof Error ? c.message : String(c), e ? sr(e, l) : sr(l), n && n.addResult({
          passed: !1,
          error: l,
          issueMessage: e || void 0,
          timestamp: r
        }), i && i.throwErrorsOnFailedTests) throw c;
      }
      o && n && n.addResult({
        passed: !0,
        issueMessage: e || void 0,
        timestamp: r
      });
    }
  }
}
function vf(t) {
  return t === "horizontal" ? "x" : t === "vertical" ? "y" : null;
}
function nr(t) {
  return t === "horizontal" ? "l" : t === "vertical" ? "w" : null;
}
class gn extends To {
  // Compatibility getters for direct access
  //[] deprecate
  get banding() {
    return this.extras?.banding;
  }
  get finish() {
    return this.extras?.finish;
  }
  get planing() {
    return this.extras?.planing;
  }
  get imageUpload() {
    return this.extras?.imageUpload;
  }
  static schema = Wn;
  static computedProperties = io;
  static defaults = Wn.parse({});
  constructor(e = {}) {
    super(e);
  }
  /**
    * Get entity type
    */
  getType() {
    return le.Shape;
  }
  /**
    * Create shape with live objects
    */
  static create(e) {
    const i = new gn(e.data);
    return e.group && (i.group.reference = e.group, i.group.inGroup = !0), e.machining && (i.machining = e.machining), i;
  }
  /**
    * Add to group
    */
  addToGroup(e) {
    this.group.reference = e, this.group.inGroup = !0;
  }
  /**
    * Remove from group
    */
  removeFromGroup() {
    this.group.reference = null, this.group.inGroup = !1, this.group.inUserGroup = !1, this.group.addedAsGroup = "";
  }
  /**
    * Clone the shape
    */
  // Clone behaviors now defined in Shape.zod.ts schema
  // No need for getCloneResetProperties() and getCloneOverrides() methods
  /**
   * Clone this shape with a new version number
   * Uses the clone() method from Rectangle base class which preserves
   * most properties (like stockLock, material, dimensions, extras, machining)
   * but resets placement-related properties
   */
  clone(e = null, i = {}) {
    return super.clone(e, i);
  }
  resetGroupData() {
    this.group.inGroup = !1, this.group.reference = null, delete this.group.placementOrder;
  }
  /**
   * Check if shape is identical to another
   * @param rectangle - The placeable to compare against
   * @param matchparentId - Whether to match parent IDs (optional)
   */
  isIdentical(e, i = !1) {
    const s = e;
    return s.identicalTo && Array.isArray(s.identicalTo) ? this.identicalTo.includes(s.parentId) || s.identicalTo.includes(this.parentId) || this.l === s.l && this.w === s.w && this.material === s.material : super.isIdentical(e, i);
  }
  /**
   * Apply best score position
   */
  setPositionToBestScore() {
    ht(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
  }
  clearPriority() {
    this.priority = {};
  }
  createOffset(e) {
    if (!this.stock) throw new Error("createOffset - stock not defined");
    const i = {
      x: this.x - e,
      y: this.y - e,
      l: this.l + e * 2,
      w: this.w + e * 2
    };
    return i.x < 0 && (i.x = 0, i.l -= e), i.y < 0 && (i.y = 0, i.w -= e), i.x + i.l > this.stock.l && (i.l = this.stock.l - i.x), i.y + i.w > this.stock.w && (i.w = this.stock.w - i.y), i;
  }
}
class mn extends To {
  // Required: Define schema and computed properties for SchemaClass
  static schema = du;
  static computedProperties = fu;
  constructor(e = {}) {
    const i = { ...e };
    e.skipValidation === void 0 && (i.skipValidation = !0), super(i), this.initGroup(i);
  }
  /**
    * Initialize group-specific logic after property application
    */
  initGroup(e) {
    const i = e.__context;
    if (e.shapes && (this.shapes = this.initShapes(e.shapes, i)), this.direction && this.id) {
      const s = this.direction === "horizontal" ? "-h" : "-v";
      !this.id.endsWith("-h") && !this.id.endsWith("-v") && (this.id = this.id + s);
    }
    !e.groupLength || !e.groupWidth ? this.shapes && this.shapes.length > 0 && this.updatePositions() : this.direction && (this.direction === "horizontal" ? (this.l = this.groupLength, this.w = this.groupWidth) : (this.l = this.groupWidth, this.w = this.groupLength)), this.w > this.l ? this.orientationLock = "w" : this.orientationLock = "l";
  }
  /**
    * Get entity type
    */
  getType() {
    return this.type === "user" ? le.UserGroup : this.type === "strip" ? le.StripGroup : this.type === "firstShape" ? le.FirstShapeGroup : le.Group;
  }
  /**
    * Initialize shapes array with optional context for reference resolution
    */
  initShapes(e, i) {
    return e.map((s) => {
      if (!ut(s) && !Tu(s))
        throw console.log(s), new Error("[GROUP] attempted to init a group with an item other than a shape");
      if (ut(s))
        return s.group.reference = this, s.group.inGroup = !0, s;
      if (i && i.shapeList && s) {
        const a = i.shapeList.find((r) => r.autoId === s.autoId);
        if (a)
          return a.group.reference = this, a.group.inGroup = !0, a;
      }
      const n = i ? { ...s, __context: i } : s;
      return new gn(n);
    });
  }
  /**
    * Add a shape to the group
    */
  addShape(e, i) {
    this.shapes.push(e), e.group.reference = this, e.group.inGroup = !0, i && this.positions.push(i), this.updatePositions();
  }
  /**
    * Remove a shape from the group
    */
  removeShape(e) {
    const i = this.shapes.indexOf(e);
    if (i > -1) {
      this.shapes.splice(i, 1), e.group.reference = null, e.group.inGroup = !1;
      const s = this.positions.findIndex((n) => n.autoId === e.autoId);
      return s > -1 && this.positions.splice(s, 1), this.updatePositions(), !0;
    }
    return !1;
  }
  /**
    * Set group direction
    */
  setDirection(e) {
    if (this.id && (this.id = this.id.replace(/-[hv]$/, "")), this.direction = e, this.direction && this.id) {
      const i = this.direction === "horizontal" ? "-h" : "-v";
      this.id = this.id + i;
    }
  }
  /**
    * Calculate efficiency
    */
  calculateEfficiency() {
    return this.hasShapes ? this.groupArea === 0 ? (this.efficiency = 0, 0) : (this.efficiency = this.totalShapeArea / this.groupArea * 100, this.efficiency) : (this.efficiency = 0, 0);
  }
  /**
    * Mark group as out of bounds
    */
  markOutOfBounds(e = !0) {
    this.outOfBounds = e;
  }
  /**
    * Mark group as having collision
    */
  markCollision(e = !0) {
    this.collision = e;
  }
  /**
    * Create group with live objects
    */
  static create(e) {
    const i = { ...e.data, shapes: e.shapes }, s = new mn(i);
    return e.container && (s.container = e.container), s;
  }
  /**
    * Clone the group with different shapes
    * @param shapes Array of shapes to use for the new group (maintains references, doesn't clone)
    */
  cloneWithNewShapes(e = []) {
    const i = this.shapes, s = this.container, n = this.stock;
    this.shapes = [], this.container = null, this.stock = null;
    const a = this.clone();
    return this.shapes = i, this.container = s, this.stock = n, a.container = s, a.shapes = e, a.skipValidation = !0, a.positions = [], a.container && a.updatePositions(), a;
  }
  /**
   * Leave serializationProperties empty to trigger automatic enumeration of all enumerable properties
   * This ensures groupLength, groupWidth, direction, and all other necessary fields are serialized
   * We use serializationExcludedProperties for exclusion-based approach
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   * This is cleaner than maintaining a long inclusion list
   */
  static serializationExcludedProperties = [
    "container"
    // Exclude complex container object to avoid circular references
  ];
  // Compression exclusions now defined in schema using .behavior()
  /**
    * Update properties from data
    * Using SchemaClass built-in update method with context support
    */
  update(e) {
    const i = e.__context;
    if ("shapes" in e) {
      const { shapes: s, ...n } = e;
      super.update(n), this.shapes = this.initShapes(s, i), this.updatePositions();
    } else
      super.update(e);
  }
  /**
   * Place shapes from this group onto a stock
   *
   * This method:
   * 1. Recalculates positions (which restores shapes to their original rotations)
   * 2. Places each shape at the correct position with the correct rotation from positions array
   */
  placeMyShapes(e) {
    if (!e) throw new Error("placeShapes requires stock");
    if (!(!this.shapes || this.shapes.length === 0)) {
      if (this.x === null || this.x === void 0 || this.y === null || this.y === void 0)
        throw new Error(`Group ${this.id} cannot place shapes: group position is not set (x=${this.x}, y=${this.y})`);
      if (this.positions && this.positions.length > 0)
        for (const i of this.positions) {
          const s = this.shapes.find((n) => n.autoId === i.autoId);
          s && (ht(s, i.rot, this.container) || console.error(`  ❌ FAILED to restore rotation for ${s.id} from ${s.rot} to ${i.rot}`));
        }
      if (this.positions && this.positions.length > 0)
        for (const i of this.positions) {
          const s = this.shapes.find((n) => n.autoId === i.autoId);
          s && s.rot !== i.rot && (console.warn(`[placeMyShapes] Shape ${s.id} has wrong rotation ${s.rot}, expected ${i.rot} - forcing rotation now`), ht(s, i.rot, this.container) || console.error(`[placeMyShapes] ❌ CRITICAL: Cannot fix rotation for ${s.id}`));
        }
      if (this.updatePositions(), !this.positions || this.positions.length === 0)
        throw new Error(`Group ${this.id} cannot place shapes: positions array could not be initialized`);
      for (let i = 0; i < this.shapes.length; i++) {
        const s = this.shapes[i];
        if (!s) continue;
        const n = this.positions.find((o) => o.autoId === s.autoId);
        if (!n) {
          const o = this.shapes.map((c) => c.autoId).join(", "), l = this.positions.map((c) => c.autoId).join(", ");
          throw new Error(`Position not found for shape ${s.autoId} in group ${this.id}. Shapes: [${o}]. Positions: [${l}]`);
        }
        if (s.x = this.x + n.x, s.y = this.y + n.y, !ht(s, n.rot, this.container)) throw new Error("placeMyShapes - unable to set rotation for shape in group");
        i === 0 && this.x === 0 && this.y === 0 && (s.firstShape.isFirstShape = !0), s.group.addedAsGroup = this, yt([
          () => Je(this.type === "position" ? s.group.inGroup : !s.group.inGroup).toBe(!0)
        ], `placeMyShapes: Shape ${s.id} inGroup flag should match group type (${this.type})`), yt([
          () => Je(s.group.addedAsGroup).toBe(this),
          () => Je(typeof s.group.addedAsGroup).not.toBe("string")
        ], `placeMyShapes: Shape ${s.id} addedAsGroup should be Group reference`), s.score = this.score;
        const r = s.guillotineState?.stripShapeBatches;
        if (this.guillotineState) {
          const o = this.guillotineState.constructor, l = this.guillotineState.toData();
          s.guillotineState = new o(l), r && (s.guillotineState.stripShapeBatches = r);
        }
        s.bestScore = this.bestScore, typeof this.placementOrder == "number" && (s.group.placementOrder = i, s.placementOrder = this.placementOrder), s.addToStock(e);
      }
      if (this.type === "position" && this.container && "shapes" in this.container) {
        const i = this.container;
        for (const s of this.shapes)
          i.shapes.some((n) => n.autoId === s.autoId) || i.shapes.push(s);
      }
    }
  }
  /**
   * Update group dimensions for a specific container
   * Used for user groups when being placed on different containers with different blade widths
   * This recalculates groupLength/groupWidth based on the container's saw spacing
   */
  updateShapeSpacing(e) {
    if (this.container = e, this.updatePositions(), this.w > this.l ? this.orientationLock = "w" : this.orientationLock = "l", this.container && this.direction) {
      const i = this.direction === "horizontal" ? e.l : e.w;
      this.efficiency = this.groupLength / i;
    }
  }
  /**
   * Set shape positions within the group
   *
   * This method:
   * - On initial call (positions.length === 0): Captures current shape rotations
   * - On recalculation: Restores shapes to their original rotations from positions array
   */
  updatePositions() {
    if (!this.shapes || this.shapes.length === 0)
      throw new Error("updatePositions requires shapes");
    if (!this.container) return;
    const e = /* @__PURE__ */ new Map();
    if (this.positions && this.positions.length > 0) {
      for (const l of this.positions)
        e.set(l.autoId, l.rot);
      for (const [l, c] of e) {
        const u = this.shapes.find((f) => f.autoId === l);
        u && u.rot !== c && ht(u, c, this.container);
      }
    }
    this.positions = [], this.type !== "user" && this.sortShapes();
    let i = 0;
    const s = vf(this.direction), n = nr(this.direction);
    let a = 0;
    for (const l of this.shapes) {
      if (!l) continue;
      const c = a === this.shapes.length - 1 ? 0 : l.getMinSpacing(this.container.saw), u = e.get(l.autoId) ?? l.rot.valueOf();
      let f;
      u !== l.rot ? f = n === "l" ? l.w : l.l : f = l[n];
      const h = {
        autoId: l.autoId,
        x: 0,
        y: 0,
        rot: u
      };
      s === "x" ? h.x = i : h.y = i, this.positions.push(h), l.group.inGroup = !0, i += a === this.shapes.length - 1 ? f : f + c, a++;
    }
    this.groupLength = i;
    const r = ni(n), o = this.shapes.reduce(
      (l, c) => {
        const u = e.get(c.autoId);
        let f;
        return u !== void 0 && u !== c.rot ? f = r === "l" ? c.w : c.l : f = c[r], f > l ? f : l;
      },
      0
    );
    if (this.groupWidth = o, Ht()) {
      const l = this.shapes.slice(0, -1).reduce((f, h) => f + h.getMinSpacing(this.container.saw), 0), u = this.shapes.reduce((f, h) => f + h[n], 0) + l;
      yt([
        () => Je(
          he.equalTo(u, this.groupLength),
          "group dimension is incorrect in direction"
        ).to.be.true,
        () => Je(
          i,
          "currentPosition is incorrect in direction"
        ).to.equal(this.groupLength),
        () => Je(
          o,
          "group dimension in other direction is not correct"
        ).to.equal(this.groupWidth)
      ]);
    }
    this.direction === "horizontal" ? (this.l = this.groupLength, this.w = this.groupWidth) : (this.l = this.groupWidth, this.w = this.groupLength), this.calculateDimensions();
  }
  /**
   * Calculate the required rotation for a shape to fit in the group
   * All shapes must have the same rotation for proper alignment
   *
   * For vertical groups (stack along y): groupLength is the fixed horizontal (l) dimension
   * For horizontal groups (stack along x): groupWidth is the fixed vertical (w) dimension
   */
  /* private calculateRequiredRotation( shape: Shape, stackingDimension: 'l' | 'w' ): Rotation
  	{
  		// If shape is square, rotation doesn't matter
  		if ( shape.isSquare ) return 0 as Rotation
  
  		// FALLBACK: If this is being called before group dimensions are set,
  		// just use the current rotation
  		if ( !this.groupLength || !this.groupWidth )
  		{
  			return shape.rot.valueOf() as Rotation
  		}
  
  		// Determine the target dimension value that all shapes must match
  		// For vertical groups: all shapes must have the same l value (groupLength)
  		// For horizontal groups: all shapes must have the same w value (groupWidth)
  		const targetDimension = stackingDimension === 'w' ? 'l' : 'w'
  		const targetValue = stackingDimension === 'w' ? this.groupLength : this.groupWidth
  
  		// Get shape's base dimensions (at rot=0)
  		const baseDimensions = shape.rot === 0
  			? { l: shape.l, w: shape.w }
  			: { l: shape.w, w: shape.l }
  
  		// If the shape's base dimension matches the target, use rot=0
  		// Otherwise, the shape needs to be rotated (rot=1)
  		const requiredRot = baseDimensions[targetDimension] === targetValue ? 0 as Rotation : 1 as Rotation
  
  		log( 'groups', `    calculateRequiredRotation for ${shape.id}: targetDim=${targetDimension}, targetVal=${targetValue}, baseDims=${baseDimensions.l}x${baseDimensions.w}, requiredRot=${requiredRot}` )
  
  		return requiredRot
  	} */
  /**
   * Sort shapes within the group
   * Sorts by reverse dimension first (for strip packing efficiency)
   * Then by direction dimension, then by ID
   */
  sortShapes() {
    const e = nr(this.direction), i = ni(e);
    this.shapes.sort((s, n) => n[i] !== s[i] ? n[i] - s[i] : n[e] !== s[e] ? n[e] - s[e] : s.id.localeCompare(n.id, void 0, { numeric: !0 }));
  }
  /**
   * Clean up group resources
   */
  destroy() {
    const e = this.shapes || [], i = this.type;
    if (!this.added && this.shapes && this.shapes.length > 0) {
      for (const s of this.shapes)
        s.reset({
          keepScores: !0,
          keepGuillotineBatchData: !0,
          keepGroupData: !1
        }), s.group && (s.group.inGroup = !1, s.group.reference = void 0, s.group.addedAsGroup = void 0);
      yt([
        () => Je(e.every((s) => !s.group?.inGroup)).toBe(!0),
        () => Je(e.every((s) => !s.group?.reference)).toBe(!0)
      ], `destroy: All children of ${i} group should be released`);
    }
    this.shapes = [], this.positions = [], this.container = void 0, this.added = !1;
  }
  /**
   * Override isIdentical for groups
   * Auto-generated groups (segment groups) with the same dimensions should be considered identical
   * even if they contain different child shapes, to prevent duplicate first-shape candidates
   */
  isIdentical(e, i = !1) {
    if (e.autoId === this.autoId) return !0;
    const s = this.autoId?.split(".")[0], n = e.autoId?.split(".")[0];
    return s && n && s === n ? !0 : this.type === "position" && e.type === "position" ? this.isSameSize(e) : super.isIdentical(e, i);
  }
}
function wf(t, e) {
  return t?.length ? t.reduce((n, a) => n[e] + n.l > a[e] + a.l ? n : a) : null;
}
function cw(t, e = null) {
  return e ? t.filter((i) => i.added && i?.stock?.id === e.id) : t.filter((i) => i.added);
}
const Sf = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return po(t, "orientationLock", ["l", "w"], e, i, s), s;
}, xf = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return po(t, "grain", ["l", "w"], e, i, s), s;
}, kf = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [], n = Ue(t, "banding");
  return n != null && (typeof n != "object" || n === null) && new ue({
    item: t,
    message: jt("errors.validation.must_be_object", { 0: "banding" }),
    shouldTranslate: !1,
    field: [["banding"]],
    index: [e],
    type: i ? "warning" : "error",
    issues: s,
    category: ["part"]
  }), s;
}, If = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], a = Ue(t, "customData");
  if (a == null) return n;
  if (typeof a != "object" || a === null)
    return new ue({
      item: t,
      message: jt("errors.validation.must_be_object", {
        0: Ut.customData
      }),
      shouldTranslate: !1,
      field: [["customData"]],
      index: [e],
      issues: n,
      category: s
    }), n;
  for (const [, r] of Object.entries(a))
    if (r != null) {
      const o = typeof r;
      ["string", "number", "boolean"].includes(o) || new ue({
        item: t,
        message: jt("errors.validation.must_be_string_number_boolean", {
          0: Ut.customData
        }),
        shouldTranslate: !1,
        field: [["customData"]],
        index: [e],
        type: i ? "warning" : "error",
        issues: n,
        category: s
      });
    }
  return n;
}, Pf = ({ item: t, index: e }) => {
  const i = Ue(t, "machining");
  i && "validateEverything" in i && i.validateEverything(t, e);
}, Cf = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], r = Ue(t, "x");
  return r === null || r === "" || r === void 0 || i != null && Q({ v: r }) > i && new ue({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: tt("x", { returnKey: !0 }),
      // positional (legacy)
      field: tt("x", { returnKey: !0 }),
      // named (new)
      1: i,
      // positional (legacy)
      max: i
      // named (new)
    },
    field: [["x"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: a,
    category: n
  }), a;
}, Af = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], r = Ue(t, "y");
  return r === null || r === "" || r === void 0 || i != null && Q({ v: r }) > i && new ue({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: tt("y", { returnKey: !0 }),
      // positional (legacy)
      field: tt("y", { returnKey: !0 }),
      // named (new)
      1: i,
      // positional (legacy)
      max: i
      // named (new)
    },
    field: [["y"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: a,
    category: n
  }), a;
}, Tf = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], r = Ue(t, "l");
  return Ue(t, "infiniteLength") || (r === null || r === "" || r === void 0 || r === 0) && new ue({
    item: t,
    message: "errors.validation.not_set",
    params: {
      0: tt("l", { returnKey: !0 }),
      // positional (legacy)
      field: tt("l", { returnKey: !0 })
      // named (new)
    },
    field: [["l"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: a,
    category: n
  }), a;
}, Of = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], r = Ue(t, "w");
  return (r === null || r === "" || r === void 0) && new ue({
    item: t,
    message: "errors.validation.not_set",
    params: {
      0: tt("w", { returnKey: !0 }),
      // positional (legacy)
      field: tt("w", { returnKey: !0 })
      // named (new)
    },
    field: [["w"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: a,
    category: n
  }), a;
}, Lf = ({ item: t, index: e, max: i, isWarning: s = !1, saw: n, category: a = [] }) => {
  const r = [], o = Ue(t, "t");
  return n?.cutType === "beam" && !o && new ue({
    item: t,
    message: "errors.saw.thickness_required_for_beam_saw",
    field: [["t"]],
    index: [e],
    type: "error",
    issues: r,
    category: a
  }), r;
}, Ff = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], a = Ue(t, "q"), r = Ue(t, "autoAdd");
  return a == null || r === !0, n;
}, $f = ({
  item: t,
  index: e,
  shapes: i,
  requiredCount: s = 2,
  isWarning: n = !1,
  category: a = ["group"]
}) => {
  const r = [];
  return i.length < s && new ue({
    item: t,
    message: "errors.groups.min_parts",
    index: [e],
    type: n ? "warning" : "error",
    issues: r,
    category: a
  }), r;
}, Df = ({
  item: t,
  index: e,
  shapes: i,
  isWarning: s = !1,
  category: n = ["group"]
}) => {
  const a = [];
  return i.forEach((r, o) => {
    !(typeof r.isSquare == "function", r.isSquare) && !["l", "w"].includes(r.orientationLock) && new ue({
      item: t,
      message: jt("errors.groups.part_needs_orientation_lock", { 0: o + 1 }),
      shouldTranslate: !1,
      field: [["orientationLock"]],
      index: [e],
      type: s ? "warning" : "error",
      issues: a,
      category: n
    });
  }), a;
}, Ef = ({
  item: t,
  index: e,
  shapes: i,
  joinDirection: s,
  isWarning: n = !1,
  category: a = ["group"]
}) => {
  const r = [];
  if (i.length < 2) return r;
  const o = i[0], l = o.trimmedDimensions ? o.trimmedDimensions[s] : o[s];
  return i.slice(1).forEach((c, u) => {
    const f = c.trimmedDimensions ? c.trimmedDimensions[s] : c[s];
    he.equalTo(f, l) || new ue({
      item: t,
      message: jt("errors.groups.dimension_not_correct", {
        0: u + 2,
        1: s === "l" ? "length" : "width",
        2: l,
        3: f
      }),
      shouldTranslate: !1,
      index: [e],
      type: n ? "warning" : "error",
      issues: r,
      category: a
    });
  }), r;
}, Oo = ({
  item: t,
  index: e,
  shapeId: i,
  requiredQuantity: s,
  availableQuantity: n,
  shapeName: a,
  shapeIndex: r,
  isWarning: o = !1,
  category: l = ["group"]
}) => {
  const c = [];
  return s > n && new ue({
    item: t,
    message: jt("errors.groups.not_enough_of_part", {
      0: a || (r ?? 0) + 1,
      1: s,
      2: n
    }),
    shouldTranslate: !1,
    index: [e],
    type: o ? "warning" : "error",
    issues: c,
    category: l
  }), n === 0 && new ue({
    item: t,
    message: "errors.groups.no_parts",
    index: [e],
    type: o ? "warning" : "error",
    issues: c,
    category: l
  }), c;
};
function Ks(t) {
  return t && typeof t == "object" && "area" in t;
}
const Xn = {
  missingProperty: (t, e) => `[Sorting Warning] Missing property "${t}" in ${e}`,
  missingMethod: (t, e) => `[Sorting Warning] Missing method "${t}" in ${e}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
}, rt = (t, e, i) => e in t ? t[e] : (console.warn(Xn.missingProperty(String(e), i)), null), Cs = (t, e) => (i, s) => {
  const n = t(i, s);
  return n !== 0 ? n : e(i, s);
}, $i = (t, e) => {
  if (Ks(t) && Ks(e))
    return t.area < e.area ? -1 : t.area > e.area ? 1 : 0;
  const i = "l" in t && "w" in t ? Number(t.l) * Number(t.w) : 0, s = "l" in e && "w" in e ? Number(e.l) * Number(e.w) : 0;
  return i < s ? -1 : i > s ? 1 : 0;
}, Dt = (t, e) => {
  const i = rt(t, "id", "first item"), s = rt(e, "id", "second item");
  if (i === null || s === null || i === void 0 || s === void 0) return 0;
  const n = i.toString().split("."), a = s.toString().split(".");
  return n[0] !== a[0] ? parseInt(n[0]) - parseInt(a[0]) : parseInt(n[1]) - parseInt(a[1]);
};
function Nt(t) {
  const e = Array.isArray(t[0]) ? t.map(([i, s]) => ({ key: i, direction: s })) : t;
  return (i, s) => {
    for (const { key: n, direction: a } of e) {
      const r = rt(i, n, "first item"), o = rt(s, n, "second item");
      if (!(r === null || o === null) && r !== o)
        return a === "desc" ? r < o ? 1 : -1 : r < o ? -1 : 1;
    }
    return 0;
  };
}
function Lo(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s > n ? i : e;
  }) : null;
}
function _f(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s < n ? i : e;
  }) : null;
}
const Kt = {
  // Dimension-based sorts
  WDLD: Nt([
    ["w", "desc"],
    ["l", "desc"]
  ]),
  WALA: Nt([
    ["w", "asc"],
    ["l", "asc"]
  ]),
  LDWD: Nt([
    ["l", "desc"],
    ["w", "desc"]
  ]),
  LAWA: Nt([
    ["l", "asc"],
    ["w", "asc"]
  ]),
  WD: Nt([["w", "desc"]]),
  LD: Nt([["l", "desc"]]),
  // ID-based sorts
  LDIDA: Cs(
    Nt([["l", "desc"]]),
    Dt
  ),
  WDIDA: Cs(
    Nt([["w", "desc"]]),
    Dt
  ),
  // Area-based sorts
  AD: (t, e) => -$i(t, e),
  AA: $i,
  AAID: Cs(
    $i,
    Dt
  ),
  ADID: Cs(
    (t, e) => -$i(t, e),
    Dt
  ),
  // ID sorts
  ID: Dt,
  IDDesc: (t, e) => -Dt(t, e),
  StockID: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    return !i || !s ? 0 : Dt(i, s);
  },
  StockIDAD: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s) return 0;
    const n = Dt(i, s);
    return n !== 0 ? n : -$i(t, e);
  },
  // Position sorts
  YX: Nt([
    ["y", "asc"],
    ["x", "asc"]
  ]),
  XY: Nt([
    ["x", "asc"],
    ["y", "asc"]
  ]),
  // Placement order sorts
  placementOrder: (t, e) => {
    const i = rt(t, "placementOrder", "first item") ?? 0, s = rt(e, "placementOrder", "second item") ?? 0;
    return i - s;
  },
  typePlacementOrder: (t, e) => {
    const i = rt(t, "offcut", "first item"), s = rt(e, "offcut", "second item"), n = rt(t, "placementOrder", "first item") ?? 0, a = rt(e, "placementOrder", "second item") ?? 0;
    return i && !s ? 1 : !i && s ? -1 : n - a;
  },
  typeID: (t, e) => {
    const i = rt(t, "offcut", "first item"), s = rt(e, "offcut", "second item");
    return i && !s ? 1 : !i && s ? -1 : Dt(t, e);
  },
  stockIDTypePlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s) return 0;
    const n = Dt(i, s);
    if (n !== 0) return n;
    const a = rt(t, "offcut", "first item"), r = rt(e, "offcut", "second item");
    if (a && !r) return 1;
    if (!a && r) return -1;
    const o = rt(t, "placementOrder", "first item") ?? 0, l = rt(e, "placementOrder", "second item") ?? 0;
    return o - l;
  },
  offcutPlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i?.id || !s?.id) return 0;
    const n = Dt(i, s);
    if (n !== 0) return n;
    if ("placementOrder" in t && "placementOrder" in e) {
      const a = rt(t, "placementOrder", "first item") ?? 0, r = rt(e, "placementOrder", "second item") ?? 0;
      return a - r;
    }
    return 0;
  },
  groupPlacementOrder: (t, e) => {
    const i = rt(t, "placementOrder", "first item") ?? 0, s = rt(e, "placementOrder", "second item") ?? 0, n = i - s;
    if (n !== 0) return n;
    const a = t.group?.placementOrder ?? 0, r = e.group?.placementOrder ?? 0;
    return a - r;
  },
  // Array manipulation utilities
  swapFirstTwo(t) {
    t.length < 2 || ([t[0], t[1]] = [t[1], t[0]]);
  },
  shuffle(t) {
    for (let e = t.length - 1; e > 0; e--) {
      const i = Math.floor(Math.random() * (e + 1));
      [t[e], t[i]] = [t[i], t[e]];
    }
  },
  // Aspect and area sorts
  aspect(t, e) {
    if (Ks(t) && Ks(e) && t.aspect && e.aspect)
      return e.aspect - t.aspect;
    if (!("l" in t) || !("w" in t) || !("l" in e) || !("w" in e))
      return console.warn(Xn.missingAspect), 0;
    const i = Math.max(Number(t.l), Number(t.w)) / Math.min(Number(t.l), Number(t.w));
    return Math.max(Number(e.l), Number(e.w)) / Math.min(Number(e.l), Number(e.w)) - i;
  },
  fillThenArea(t) {
    return (e, i) => !("l" in e) || !("w" in e) || !("l" in i) || !("w" in i) ? (console.warn(Xn.missingLongSide), 0) : i[t] === e[t] ? -$i(e, i) : parseFloat(String(i[t])) - parseFloat(String(e[t]));
  },
  // Utility functions
  getLargest: Lo,
  getSmallest: _f
};
function Mf(t) {
  return Te(t) || ut(t) || gs(t);
}
function Rf(t, e, i) {
  if (!i) return !0;
  const s = e?.material?.toLowerCase(), n = t?.material?.toLowerCase();
  return !s && !n || s === n;
}
function jf(t, e, i) {
  return i ? !Ae(t.t) || !Ae(e.t) ? !1 : he.equalTo(Q({ v: t.t }), Q({ v: e.t })) : !0;
}
function Bf(t, e, i) {
  return i?.stockType !== "linear" || !ut(t) && !Te(t) ? !0 : Ct(t, 0, e) && he.equalTo(Q({ v: t.w }), Q({ v: e.w })) || Ct(t, 1, e) && he.equalTo(Q({ v: t.l }), Q({ v: e.w }));
}
function Fo(t, e, i, s = 0) {
  const n = Te(t[0]), a = i.stockType;
  if (t.some((A) => Ae(A.stockLock) && A.stockLock.length))
    return { stockList: e, shapeList: t, unusableShapes: [], unusableStock: [], newIssues: [] };
  e = e.filter((A) => n || A.autoAdd === !0 || Ae(A.q) && Number(A.q) > 0);
  const o = e.some((A) => Ae(A.material)), l = e.some((A) => Ae(A.t)), c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), g = [];
  let k = s;
  for (const A of t) {
    const S = e.map((F, Y) => {
      const M = Mf(A) && Ui(A, F, void 0, i), ce = Rf(A, F, o), z = jf(A, F, l), m = Bf(A, F, i);
      return {
        stockItem: F,
        stockIndex: Y,
        fit: M,
        material: ce,
        thickness: z,
        width: m,
        // For this stock item, does it satisfy all requirements?
        satisfiesAll: M && ce && z && (a !== "linear" || m)
      };
    });
    A.stockMatch = {
      fit: S.some((F) => F.fit),
      material: !o || S.some((F) => F.material),
      thickness: !l || S.some((F) => F.thickness),
      width: a !== "linear" || S.some((F) => F.width)
    };
    const D = S.filter((F) => F.satisfiesAll), C = D.length > 0;
    if (!n && C) {
      const F = D.map((Y) => Y.stockItem.parentId);
      A.stockLock = F, F.forEach((Y) => c.add(Y));
    }
    A.stockMatch.fit ? C || (o && !A.stockMatch.material && (h.add(A), g.push(new ue({
      category: ["part", "stock"],
      item: A,
      field: [["material"]],
      index: [k],
      message: "errors.validation.no_matching_stock_material"
    }))), l && !A.stockMatch.thickness && (h.add(A), g.push(new ue({
      category: ["part", "stock"],
      item: A,
      field: [["t"]],
      index: [k],
      message: "errors.validation.no_matching_stock_thickness"
    }))), a === "linear" && !A.stockMatch.width && (f.add(A), g.push(new ue({
      category: ["part", "stock"],
      item: A,
      field: [["w"]],
      index: [k],
      message: "errors.validation.no_matching_stock_width"
    }))), A.stockMatch.material && A.stockMatch.thickness && (a !== "linear" || A.stockMatch.width) && (h.add(A), g.push(new ue({
      category: ["part", "stock"],
      item: A,
      field: [["material"], ["t"]],
      index: [k],
      message: "errors.validation.no_stock_matches_all_requirements"
    })))) : (u.add(A), g.push(new ue({
      category: ["part", "stock"],
      item: A,
      field: [["l"], ["w"]],
      index: [k],
      message: "errors.validation.will_not_fit"
    }))), k++;
  }
  t.forEach((A) => A.stockMatch = null);
  let E, V;
  return n ? (E = t.filter((A) => u.has(A) || f.has(A) || h.has(A)).sort(Kt.ID), V = []) : (E = t.filter((A) => u.has(A) || f.has(A) || h.has(A) || !A.stockLock || !A.stockLock.length).sort(Kt.ID), V = e.filter((A) => !c.has(A.parentId)).sort(Kt.ID), e = e.filter((A) => Rt(A)).filter((A) => c.has(A.parentId)), t = t.filter((A) => !u.has(A) && !f.has(A) && !h.has(A) && A?.stockLock?.length)), {
    stockList: e,
    unusableStock: V,
    shapeList: t,
    unusableShapes: E,
    newIssues: g
  };
}
function Vf(t) {
  return t?.issues?.length > 0;
}
const Nf = ({
  item: t,
  inputStockList: e,
  saw: i,
  partTrim: s = 0,
  index: n
}) => {
  const a = [], r = i.stockType, o = Ue(t, "q"), l = Ue(t, "l"), c = Ue(t, "w");
  return !o || !l || !c || ("applyPartTrim" in t && typeof t.applyPartTrim == "function" && t.applyPartTrim(s, r), Vf(t)) || Fo([t], e, i, n).newIssues.forEach((f) => {
    a.push(f);
  }), a;
}, Gf = ({
  item: t,
  partTrim: e,
  index: i,
  isWarning: s = !1
}) => {
  const n = [];
  if (!e) return n;
  const a = Ue(t, "l"), r = Ue(t, "w");
  if (!a || !r) return n;
  try {
    const o = Q({ v: e }), l = Q({ v: a }), c = Q({ v: r }), u = l - o * 2, f = c - o * 2;
    (u <= 0 || f <= 0) && new ue({
      item: t,
      message: "errors.trim.too_much",
      params: {
        0: "part",
        // positional (legacy)
        1: o,
        // positional (legacy)
        2: `${u}x${f}`,
        // positional (legacy)
        item: "part",
        // named (new)
        trimValue: o,
        // named (new)
        result: `${u}x${f}`
        // named (new)
      },
      field: [["l"], ["w"], ["trim"]],
      index: [i],
      type: s ? "warning" : "error",
      issues: n,
      category: ["part"]
    });
  } catch {
  }
  return n;
}, qf = ({
  item: t,
  index: e,
  isWarning: i = !1,
  category: s = []
}) => {
  const n = [], a = Ue(t, "l"), r = Ue(t, "w"), o = Ue(t, "trim");
  if (!a || !r || !o) return n;
  if ((!Rt(t) || Rt(t) && !("trimmed" in t && t.trimmed)) && typeof o == "object" && o !== null)
    try {
      const c = Q({ v: a }), u = Q({ v: r }), f = (E) => {
        if (E == null) return 0;
        if (typeof E == "number" || typeof E == "string")
          try {
            return Q({ v: E }) || 0;
          } catch {
            return 0;
          }
        return 0;
      }, h = {
        w1: f(Ue(o, "w1")),
        w2: f(Ue(o, "w2")),
        l1: f(Ue(o, "l1")),
        l2: f(Ue(o, "l2"))
      }, g = h.w1 + h.w2, k = h.l1 + h.l2;
      g >= c && new ue({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${tt("w1").toUpperCase()} + ${tt("w2").toUpperCase()}`,
          // positional (legacy)
          1: tt("l"),
          // positional (legacy)
          2: c,
          // positional (legacy)
          trimFields: `${tt("l1", { returnKey: !0 })} + ${tt("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: tt("l", { returnKey: !0 }),
          // named (new)
          maxValue: c
          // named (new)
        },
        field: [["trim", "w1"], ["trim", "w2"]],
        index: [e],
        type: i ? "warning" : "error",
        issues: n,
        category: s
      }), k >= u && new ue({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${tt("l1").toUpperCase()} + ${tt("l2").toUpperCase()}`,
          // positional (legacy)
          1: tt("w"),
          // positional (legacy)
          2: u,
          // positional (legacy)
          trimFields: `${tt("l1", { returnKey: !0 })} + ${tt("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: tt("w", { returnKey: !0 }),
          // named (new)
          maxValue: u
          // named (new)
        },
        field: [["trim", "l1"], ["trim", "l2"]],
        index: [e],
        type: i ? "warning" : "error",
        issues: n,
        category: s
      });
    } catch {
    }
  return n;
}, pt = {
  // Dimensions
  x: Cf,
  y: Af,
  l: Tf,
  w: Of,
  t: Lf,
  q: Ff,
  // Trim
  trim: qf,
  partTrim: Gf,
  // Custom
  customData: If,
  banding: kf,
  orientationLock: Sf,
  grain: xf,
  machining: Pf,
  // Stock
  stockMatch: Nf,
  // Groups
  groupShapeCount: $f,
  groupOrientationLock: Df,
  groupDimensions: Ef,
  groupQuantity: Oo
};
class Zs extends Pa {
  static schema = Hn;
  static computedProperties = so;
  static defaults = Hn.parse({});
  constructor(e = {}) {
    const i = Zs.preprocessData(e);
    super(i), (this.x === null || this.x === void 0) && (this.x = 0), (this.y === null || this.y === void 0) && (this.y = 0), this.stack || (this.stack = { number: 1 }), e.skipValidation || this.validateStock(e);
  }
  /**
    * Preprocess stock data before initialization
    */
  static preprocessData(e) {
    const i = { ...e };
    return i.autoAdd && !i.q && (i.q = 1), i.type === "roll" && (i.preventAutoRotation = !0), i;
  }
  /**
    * Get entity type
    */
  getType() {
    return le.Stock;
  }
  /**
    * Validate stock-specific properties
    */
  validateStock(e) {
    if (e.skipValidation) {
      this.issues = [];
      return;
    }
    const i = [];
    if (!e.autoAdd) {
      const n = pt.q({ item: e, index: e?.index });
      i.push(...n);
    }
    const s = pt.grain({ item: e, index: e?.index });
    i.push(...s), this.issues.push(...i.filter((n) => n));
  }
  /**
    * Create stock instance with live objects
    */
  static create(e) {
    const i = { ...e.data };
    e.saw && (i.saw = e.saw);
    const s = new Zs(i);
    return e.shapes && (s.shapes = e.shapes), s;
  }
  /**
    * Reset stock to initial state
    */
  reset() {
    this.used = !1, this.stack = { number: 1 }, this.score = null, this.rootSegment = null, this.tidy = !1, this.analysis = void 0, this.duplicatePattern = "", this.shapes = [], this.winningStrategy = void 0, this.unusable = void 0;
  }
  /**
    * Reset optimization strategies
    */
  resetStrategies() {
    this.algoBenchmark = void 0, this.winningStrategy = void 0, this.score = null;
  }
  /**
    * Increment stack
    */
  incrementStack(e = 1) {
    this.stack || (this.stack = { number: 1 }), this.stack.number = this.stack.number + e;
  }
  /**
    * Decrement stack
    */
  decrementStack(e = 1) {
    return this.stack || (this.stack = { number: 1 }), this.stack.number < e ? !1 : (this.stack.number = this.stack.number - e, !0);
  }
  /**
   * Override serializeValue to handle circular references in stack.stock
   * Always serializes stack.stock as a reference to avoid infinite recursion
   */
  // serializeValue removed - AutoSerializable handles all serialization automatically via schema behaviors
  /**
    * Check if stock can fit all shapes
    */
  canFitAllShapes(e) {
    if (!e || e.length === 0) return !0;
    const i = this.area;
    return e.reduce((n, a) => {
      const r = a.l * a.w * (a.q || 1);
      return n + r;
    }, 0) > i * (this?.stack?.number ?? 1) ? !1 : this.analysis?.fitsAll ?? !1;
  }
  /**
    * Check if stock can fit any shape
    */
  canFitAnyShape(e) {
    return !e || e.length === 0 ? !1 : e.some((i) => this.canFitShape(i));
  }
  /**
    * Analyze stock against shapes
    */
  analyzeStock(e) {
    const i = {
      fitsAll: !1,
      fitsAny: !1,
      largestShape: null,
      smallestShape: null,
      areaEfficiency: 0,
      finishArea: 0,
      bandingLength: 0,
      partArea: 0,
      totalParts: 0,
      stackedNumberOfCuts: 0,
      numberOfCuts: 0,
      stackedCutLength: 0,
      cutLength: 0,
      rollLength: 0
    };
    if (!e || e.length === 0)
      return this.analysis = i, i;
    const s = [...e].sort((n, a) => {
      const r = n.l * n.w;
      return a.l * a.w - r;
    });
    return i.largestShape = s[0], i.smallestShape = s[s.length - 1], i.fitsAny = this.canFitAnyShape(e), i.fitsAll = this.canFitAllShapes(e), this.analysis = i, i;
  }
  /**
    * Mark stock as used
    */
  markUsed() {
    this.used = !0;
  }
  /**
    * Mark stock as unused
    */
  markUnused() {
    this.used = !1;
  }
  /**
     * Clone the shape
     */
  /**
   * Clone this stock with a new version number
   * Stock preserves most properties when cloning
   * Only resets placement/optimization state
   */
  clone(e = null, i = {}) {
    return super.clone(e, i);
  }
  // Clone behaviors now defined in Stock.zod.ts schema
  // No need for getCloneResetProperties() method
  // The base class properly returns 'this' type for polymorphic cloning
  /**
   * Leave serializationProperties empty to trigger automatic enumeration
   * We use serializationExcludedProperties for exclusion-based approach
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   * This is cleaner than maintaining a long inclusion list
   */
  static serializationExcludedProperties = [
    "rootSegment"
    // May contain circular references during optimization
  ];
  getCroppedLength(e = [], i = 0) {
    if (!e?.length) return;
    const s = wf(e.filter((a) => a.added && a.stock.id === this.id), "x"), n = s.x + s.l;
    if (n > this.l) throw new Error("Furthest shape position exceeds stock length");
    return he.equalTo(n, this.l) ? n : n + i;
  }
}
const ai = ["l1", "l2", "w1", "w2"], zf = ["a", "b", "c", "d"], Tt = [...ai, ...zf], bt = ["a", "b"];
class Js extends it {
  // Required: Define schema and computed properties for SchemaClass
  static schema = cn;
  static computedProperties = ba;
  /**
   * Leave serializationProperties empty to trigger automatic enumeration
   * We use serializationExcludedProperties for exclusion-based approach
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   */
  static serializationExcludedProperties = [
    // All private fields (starting with _) are automatically excluded by AutoSerializable
  ];
  // Validation properties are inherited from validation base through SchemaClass
  // isValid is now a computed property from validation base
  /**
   * Get entity type
   */
  getType() {
    return "extra";
  }
  /**
   * Check if this extra is applicable to the given shape
   * Used for UI validation to prevent invalid selections
   * @param shape The shape to check
   * @returns True if this extra can be applied to the shape
   */
  isApplicable(e) {
    return this.enabled;
  }
}
class _t extends Js {
  // Required: Define schema and computed properties for SchemaClass
  static schema = yo;
  static computedProperties = {
    ...Js.computedProperties,
    ...Ju
  };
  /**
   * Get entity type
   */
  getType() {
    return "banding";
  }
  constructor(e = {}) {
    super(e), this.validate();
  }
  /**
   * Validate banding configuration
   * @param shape Optional shape for context-aware validation
   */
  validate(e) {
    const i = [];
    for (const s in this.sides)
      ai.includes(s) || i.push(new ue({
        item: e,
        message: `Invalid banding side: ${s}`,
        type: "warning"
      }));
    return this.issues = i, i;
  }
  /**
   * Calculate the cost of this banding
   * @param shape Optional shape for context-aware pricing
   */
  getCost(e) {
    return this.hasValues() ? e ? this.calculateLength(e) * 0.1 : this.getActiveSides().length * 5 : 0;
  }
  /**
   * Get a human-readable description
   */
  getDescription() {
    const e = this.getActiveSides();
    return e.length === 0 ? "No banding" : e.length === 4 && e.every((i) => ["a", "b", "c", "d"].includes(i)) ? "Banding on all sides" : `Banding on sides: ${e.join(", ")}`;
  }
  /**
   * Check if this extra has any active values
   */
  hasValues() {
    return this.hasAnyBanding;
  }
  /**
   * Set banding for a specific side
   */
  setSide(e, i) {
    i === !1 || i === "" || i === void 0 ? delete this.sides[e] : this.sides[e] = i;
  }
  /**
   * Get banding for a specific side
   */
  getSide(e) {
    const i = this.sides[e];
    return i ? typeof i == "object" && !Array.isArray(i) ? Object.values(i)[0] || !1 : i : !1;
  }
  /**
   * Check if a side has banding
   */
  hasSide(e) {
    if (!this.sides) return !1;
    const i = this.sides?.[e];
    return i !== void 0 && i !== !1 && i !== "";
  }
  /**
   * Remove banding from a side
   */
  removeSide(e) {
    delete this.sides[e];
  }
  /**
   * Clear all banding
   */
  clear() {
    for (const e in this.sides)
      delete this.sides[e];
  }
  /**
   * Get all sides with banding
   * Compatibility method - uses computed property
   */
  getActiveSides() {
    return this.activeSides;
  }
  /**
   * Set all sides to the same value
   */
  setAllSides(e) {
    for (const i of ai)
      this.setSide(i, e);
  }
  /**
   * Get the length for a specific side
   */
  getSideLength(e, i) {
    return !this.sides || !this.sides[e] ? 0 : {
      l1: i.longSide,
      l2: i.longSide,
      w1: i.shortSide,
      w2: i.shortSide
    }[e] || 0;
  }
  /**
   * Calculate total banding length
   */
  calculateLength(e) {
    let i = 0;
    const s = {
      l1: e.longSide,
      l2: e.longSide,
      w1: e.shortSide,
      w2: e.shortSide
    };
    for (const n in this.sides)
      this.hasSide(n) && s[n] && (i += s[n]);
    return i;
  }
  /**
   * Clone the banding
   */
  // clone() method removed - using base class implementation from AutoSerializable
  /**
   * Check if banding is applicable to shape
   * Banding requires the shape to have dimensions
   */
  isApplicable(e) {
    return e ? e.l > 0 && e.w > 0 : super.isApplicable(e);
  }
  // update() method removed - using base class schema-aware implementation
  // The base AutoSerializable.update() will:
  // 1. Use bandingSchema to update properties
  // 2. Skip computed properties automatically
  // 3. Call validate() at the end
  /**
   * Create from plain data (for deserialization)
   */
  static fromData(e) {
    return new _t(e);
  }
  /**
   * Create empty banding
   */
  static empty() {
    return new _t();
  }
  /**
   * Create with all sides
   */
  static allSides(e = !0) {
    const i = new _t();
    return i.setAllSides(e), i;
  }
}
class zi extends it {
  // Zod schema for validation and serialization
  static schema = Qu;
  static computedProperties = ed;
  /**
   * Get entity type (required for AutoSerializable)
   */
  getType() {
    return "corner";
  }
  constructor(e = {}) {
    super(e);
  }
  /**
   * Validate the corner
   */
  validate() {
    const e = [];
    return this.type && this.size !== null && this.size <= 0 && e.push(new ue({
      message: `Corner ${this.index + 1}: Size must be positive`,
      type: "error"
    })), (this.index < 0 || this.index > 3) && e.push(new ue({
      message: "Corner index must be between 0 and 3",
      type: "error"
    })), this.issues = e, e;
  }
  /**
   * Validate against shape dimensions
   */
  validateAgainstShape(e, i) {
    const s = this.validate();
    if (!this.type || !this.size || this.size <= 0) return s;
    const n = Math.min(e, i);
    return this.size > n / 2 && s.push(new ue({
      message: `Corner ${this.index + 1}: Size cannot exceed half of shortest side (${n / 2})`,
      type: "error"
    })), this.issues = s, s;
  }
  /**
   * Async validation with schema
   */
  // validateAsync() method removed - using base class schema-aware implementation
  // The base AutoSerializable.validateAsync() will:
  // 1. Use cornerSchema to validate properties
  // 2. Set the valid flag
  // 3. Map errors to Issue objects
  // 4. Return the issues array
  /**
   * Get the corner position name
   */
  getCornerName() {
    return ["Bottom Left", "Bottom Right", "Top Right", "Top Left"][this.index] || "Unknown";
  }
  /**
   * Get the corner side identifier (a, b, c, d)
   */
  getCornerSide() {
    return ["a", "b", "c", "d"][this.index] || "";
  }
  /**
   * Calculate the length of the corner cut
   */
  getLength() {
    return !this.type || !this.size || this.size <= 0 ? 0 : this.type === "radius" ? Math.PI * this.size / 2 : this.type === "bevel" ? Math.sqrt(2) * this.size : 0;
  }
  /**
   * Check if corner is present/active
   */
  isPresent() {
    return this.isValid !== !1 && this.type !== null && this.size !== null && this.size > 0;
  }
  /**
   * Clear the corner
   */
  clear() {
    this.type = null, this.size = 0;
  }
  /**
   * Clone the corner
   */
  // clone() method removed - using base class implementation from AutoSerializable
  // toData() method removed - using base class implementation from AutoSerializable
  // The base class automatically returns CornerProperties as the TData type parameter
  /**
   * Update from data
   */
  // update() method removed - using base class schema-aware implementation
  // The base AutoSerializable.update() will:
  // 1. Use cornerSchema to update properties
  // 2. Skip computed properties automatically
  // 3. Call validate() at the end
  /**
   * Create from plain data (for deserialization)
   */
  static fromData(e) {
    return new zi(e);
  }
  /**
   * Create a radius corner
   */
  static radius(e, i) {
    return new zi({ type: "radius", size: e, index: i });
  }
  /**
   * Create a bevel corner
   */
  static bevel(e, i) {
    return new zi({ type: "bevel", size: e, index: i });
  }
}
class Pt extends Js {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = bo;
  static computedProperties = od;
  // serializationProperties removed - automatically derived from schema
  // The base class will use all schema fields for serialization
  /**
   * Get entity type
   */
  getType() {
    return "finish";
  }
  constructor(e = {}) {
    super(e), this.validate();
  }
  /**
   * Validate finish configuration
   * @param shape Optional shape for context-aware validation
   */
  validate(e) {
    const i = [], s = ["a", "b"];
    for (const n in this.faces)
      s.includes(n) || i.push(new ue({
        item: e,
        message: `Invalid finish face: ${n}. Valid faces are 'a' (front) and 'b' (back)`,
        type: "warning"
      }));
    return this.issues = i, i;
  }
  /**
   * Calculate the cost of this finish
   * @param shape Optional shape for context-aware pricing
   */
  getCost(e) {
    if (!this.hasValues()) return 0;
    if (e) {
      let s = 0;
      const n = e.l * e.w;
      return this.hasFace("a") && (s += n * 0.05), this.hasFace("b") && (s += n * 0.05), s;
    }
    return this.getActiveFaces().length * 10;
  }
  /**
   * Get a human-readable description
   */
  getDescription() {
    const e = this.getActiveFaces();
    return e.length === 0 ? "No finish" : e.length === 2 ? "Finish on both faces" : `Finish on face${e.length > 1 ? "s" : ""}: ${e.join(", ")}`;
  }
  /**
   * Check if this extra has any active values
   */
  hasValues() {
    return this.hasAnyFinish;
  }
  /**
   * Set finish for a specific face
   */
  setFace(e, i) {
    if (!this.faces) {
      this.faces = {};
      for (const s of bt)
        this.faces[s] = !1;
    }
    i === !1 || i === "" || i === void 0 ? this.faces[e] = !1 : this.faces[e] = i;
  }
  /**
   * Get finish for a specific face
   */
  getFace(e) {
    const i = this.faces?.[e];
    return i ? typeof i == "object" && !Array.isArray(i) ? Object.values(i)[0] || !1 : i : !1;
  }
  /**
   * Check if a face has finish
   */
  hasFace(e) {
    const i = this.faces?.[e];
    return i !== void 0 && i !== !1 && i !== "";
  }
  /**
   * Remove finish from a face
   */
  removeFace(e) {
    this.faces && (this.faces[e] = !1);
  }
  /**
   * Clear all finish
   */
  clear() {
    if (this.faces)
      for (const e of bt)
        this.faces[e] = !1;
  }
  /**
   * Get all faces with finish
   * Compatibility method - uses computed property
   */
  getActiveFaces() {
    return this.activeFaces;
  }
  /**
   * Set both faces to the same value
   */
  setBothFaces(e) {
    for (const i of bt)
      this.setFace(i, e);
  }
  /**
   * Calculate finish area
   */
  calculateArea(e, i) {
    let s = 0;
    const n = e * i;
    return this.hasFace("a") && (s += n), this.hasFace("b") && (s += n), s;
  }
  /**
   * Get finish type for a face
   */
  getFinishType(e) {
    const i = this.faces[e];
    return typeof i == "string" && i ? i : i === !0 ? "standard" : "";
  }
  /**
   * Clone the finish
   */
  // clone() method removed - using base class implementation from AutoSerializable
  /**
   * Check if finish is applicable to shape
   * Finish requires the shape to have surface area
   */
  isApplicable(e) {
    return e ? e.l > 0 && e.w > 0 : super.isApplicable(e);
  }
  // update() method removed - using base class schema-aware implementation
  // The base AutoSerializable.update() will:
  // 1. Use finishSchema to update properties
  // 2. Skip computed properties automatically
  // 3. Call validate() at the end
  /**
   * Create from plain data (for deserialization)
   */
  static fromData(e) {
    return new Pt(e);
  }
  /**
   * Create empty finish
   */
  static empty() {
    return new Pt();
  }
  /**
   * Create with both faces
   */
  static bothFaces(e = !0) {
    const i = new Pt();
    return i.setBothFaces(e), i;
  }
  /**
   * Create with front face only
   */
  static frontOnly(e = !0) {
    const i = new Pt();
    return i.setFace("a", e), i;
  }
  /**
   * Create with back face only
   */
  static backOnly(e = !0) {
    const i = new Pt();
    return i.setFace("b", e), i;
  }
}
class pi extends Js {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = Io;
  static computedProperties = Hd;
  // serializationProperties removed - automatically derived from schema
  // The base class will use all schema fields for serialization
  /**
   * Get entity type
   */
  getType() {
    return "planing";
  }
  constructor(e = {}) {
    super(e), this.validate();
  }
  /**
   * Validate planing configuration
   * @param shape Optional shape for context-aware validation
   */
  validate(e) {
    const i = [];
    if (this.faces) {
      const s = ["a", "b"];
      for (const n in this.faces)
        s.includes(n) || i.push(new ue({
          message: `Invalid planing face: ${n}. Valid faces are 'a' (front) and 'b' (back)`,
          type: "warning"
        }));
    }
    if (this.sides) {
      const s = ["a", "b", "c", "d", "l1", "l2", "w1", "w2"];
      for (const n in this.sides)
        s.includes(n) || i.push(new ue({
          message: `Invalid planing side: ${n}`,
          type: "warning"
        }));
    }
    return this.issues = i, i;
  }
  /**
   * Validate against shape thickness
   */
  validateAgainstShape(e) {
    const i = this.validate();
    return this.faces && Object.keys(this.faces).length > 0 && e < 15 && i.push(new ue({
      message: `Face planing requires at least 15mm thickness (current: ${e}mm)`,
      type: "error"
    })), this.hasAnyPlaning && e < 10 && i.push(new ue({
      message: `Planing requires at least 10mm thickness (current: ${e}mm)`,
      type: "error"
    })), this.issues = i, i;
  }
  /**
   * Set planing for a specific face
   */
  setFace(e, i) {
    if (!this.faces) {
      this.faces = {};
      for (const s of bt)
        this.faces[s] = !1;
    }
    i === !1 || i === "" || i === void 0 ? this.faces[e] = !1 : this.faces[e] = i;
  }
  /**
   * Get planing for a specific face
   */
  getFace(e) {
    const i = this.faces?.[e];
    return i ? typeof i == "object" && !Array.isArray(i) ? Object.values(i)[0] || !1 : i : !1;
  }
  /**
   * Check if a face has planing
   */
  hasFace(e) {
    const i = this.faces?.[e];
    return i !== void 0 && i !== !1 && i !== "";
  }
  /**
   * Set planing for a specific side
   */
  setSide(e, i) {
    if (!this.sides) {
      this.sides = {};
      for (const s of Tt)
        this.sides[s] = !1;
    }
    i === !1 || i === "" || i === void 0 ? this.sides[e] = !1 : this.sides[e] = i;
  }
  /**
   * Get planing for a specific side
   */
  getSide(e) {
    const i = this.sides?.[e];
    return i ? typeof i == "object" && !Array.isArray(i) ? Object.values(i)[0] || !1 : i : !1;
  }
  /**
   * Check if a side has planing
   */
  hasSide(e) {
    const i = this.sides?.[e];
    return i !== void 0 && i !== !1 && i !== "";
  }
  /**
   * Clear all planing
   */
  clear() {
    if (this.faces)
      for (const e of bt)
        this.faces[e] = !1;
    if (this.sides)
      for (const e of Tt)
        this.sides[e] = !1;
  }
  /**
   * Get all faces with planing
   * Compatibility method - uses computed property
   */
  getActiveFaces() {
    return this.activeFaces;
  }
  /**
   * Get all sides with planing
   * Compatibility method - uses computed property
   */
  getActiveSides() {
    return this.activeSides;
  }
  /**
   * Set all faces to the same value
   */
  setAllFaces(e) {
    for (const i of bt)
      this.setFace(i, e);
  }
  /**
   * Set all sides to the same value
   */
  setAllSides(e) {
    for (const i of Tt)
      this.setSide(i, e);
  }
  /**
   * Calculate total planing area
   */
  calculateArea(e, i) {
    let s = 0;
    if (this.faces) {
      const n = e * i;
      for (const a of bt)
        this.hasFace(a) && (s += n);
    }
    if (this.sides) {
      const n = {
        a: e,
        b: i,
        c: e,
        d: i,
        l1: i,
        l2: i,
        w1: e,
        w2: e
      };
      for (const a of Tt)
        this.hasSide(a) && n[a] && (s += n[a]);
    }
    return s;
  }
  /**
   * Calculate the cost of this planing
   * @param shape Optional shape for context-aware pricing
   */
  getCost(e) {
    if (!this.hasValues()) return 0;
    let i = 0;
    if (e) {
      const s = e.l * e.w, n = this.faces ? this.getActiveFaces().length : 0;
      i += n * s * 0.01;
      const a = this.sides ? this.getActiveSides().length : 0;
      if (e.t) {
        const r = e.l * e.t, o = e.w * e.t;
        i += a * ((r + o) / 2) * 0.01;
      }
    } else {
      const s = this.faces ? this.getActiveFaces().length : 0, n = this.sides ? this.getActiveSides().length : 0;
      i = s * 15 + n * 10;
    }
    return i;
  }
  /**
   * Get a human-readable description
   */
  getDescription() {
    const e = [], i = this.faces ? this.getActiveFaces() : [];
    i.length > 0 && e.push(`Face planing: ${i.join(", ")}`);
    const s = this.sides ? this.getActiveSides() : [];
    return s.length > 0 && e.push(`Side planing: ${s.join(", ")}`), e.length > 0 ? e.join(", ") : "No planing";
  }
  /**
   * Check if this extra has any active values
   */
  hasValues() {
    return this.hasAnyPlaning;
  }
  /**
   * Get total face planing thickness
   */
  getTotalFacePlaning() {
    if (!this.faces) return 0;
    let e = 0;
    for (const i in this.faces) {
      const s = this.faces[i];
      typeof s == "number" ? e += s : (s === !0 || typeof s == "string") && (e += 1);
    }
    return e;
  }
  /**
   * Get total side planing amount
   */
  getTotalSidePlaning() {
    if (!this.sides) return 0;
    let e = 0;
    for (const i in this.sides) {
      const s = this.sides[i];
      typeof s == "number" ? e += s : (s === !0 || typeof s == "string") && (e += 1);
    }
    return e;
  }
  /**
   * Check if planing is applicable to shape
   * Planing requires minimum material thickness
   */
  isApplicable(e) {
    return e ? e.t !== void 0 && e.t >= 10 : super.isApplicable(e);
  }
  /**
   * Clone the planing
   */
  // clone() method removed - using base class implementation from AutoSerializable
  /**
   * Update from data
   */
  // update() method removed - using base class schema-aware implementation
  // The base AutoSerializable.update() will:
  // 1. Use planingSchema to update properties
  // 2. Skip computed properties automatically
  // 3. Call validate() at the end
  /**
   * Create from plain data (for deserialization)
   */
  static fromData(e) {
    return new pi(e);
  }
  /**
   * Create empty planing
   */
  static empty() {
    return new pi();
  }
  /**
   * Create with all faces and sides
   */
  static full(e = !0) {
    const i = new pi();
    return i.setAllFaces(e), i.setAllSides(e), i;
  }
  /**
   * Create with faces only
   */
  static facesOnly(e = !0) {
    const i = new pi();
    return i.setAllFaces(e), i;
  }
  /**
   * Create with sides only
   */
  static sidesOnly(e = !0) {
    const i = new pi();
    return i.setAllSides(e), i;
  }
}
class et extends it {
  // Zod schema for validation and serialization
  static schema = ad;
  static computedProperties = rd;
  /**
   * Leave serializationProperties empty to trigger automatic enumeration
   * We use serializationExcludedProperties for exclusion-based approach
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   */
  static serializationExcludedProperties = [
    // All private fields (starting with _) are automatically excluded by AutoSerializable
  ];
  /**
   * Get entity type
   */
  getType() {
    return le.Extras;
  }
  constructor(e = {}) {
    const i = { ...e };
    if (i.banding && typeof i.banding == "object" && "sides" in i.banding) {
      const s = i.banding.sides;
      s && typeof s == "object" && ("x1" in s || "x2" in s || "y1" in s || "y2" in s) && (i.banding.sides = {
        l1: s.x1 ?? s.l1,
        l2: s.x2 ?? s.l2,
        w1: s.y1 ?? s.w1,
        w2: s.y2 ?? s.w2
      });
    }
    if (i.finish && typeof i.finish == "object" && "sides" in i.finish) {
      const s = i.finish.sides;
      s && typeof s == "object" && ("x1" in s || "x2" in s || "y1" in s || "y2" in s) && (i.finish.sides = {
        l1: s.x1 ?? s.l1,
        l2: s.x2 ?? s.l2,
        w1: s.y1 ?? s.w1,
        w2: s.y2 ?? s.w2
      });
    }
    if (i.planing && typeof i.planing == "object" && "sides" in i.planing) {
      const s = i.planing.sides;
      s && typeof s == "object" && ("x1" in s || "x2" in s || "y1" in s || "y2" in s) && (i.planing.sides = {
        l1: s.x1 ?? s.l1,
        l2: s.x2 ?? s.l2,
        w1: s.y1 ?? s.w1,
        w2: s.y2 ?? s.w2
      });
    }
    super(i), this.validate();
  }
  /**
   * Validate all extras
   * @param shape Optional shape for context-aware validation
   */
  validate(e) {
    const i = [];
    if (ui(this.banding)) {
      const s = this.banding.validate(e);
      i.push(...s);
    }
    if (Xt(this.finish)) {
      const s = this.finish.validate(e);
      i.push(...s);
    }
    if (Qt(this.planing)) {
      const s = this.planing.validate(e);
      i.push(...s);
    }
    if (Qt(this.planing) && Xt(this.finish) && e?.t) {
      const s = this.planing.getTotalFacePlaning();
      s > 0 && e.t - s < 5 && i.push(new ue({
        message: "Planing may not leave enough material for finish application",
        type: "warning"
      }));
    }
    return this.issues = i, i;
  }
  /**
   * Async validation using the validation engine
   * @param shape Optional shape for context-aware validation
   */
  async validateAsync(e) {
    const i = this.validate(e);
    return this.issues = i, this.issues;
  }
  /**
   * Calculate total cost of all extras
   * @param shape Optional shape for context-aware pricing
   */
  getTotalCost(e) {
    let i = 0;
    return ui(this.banding) && (i += this.banding.getCost(e)), Xt(this.finish) && (i += this.finish.getCost(e)), Qt(this.planing) && (i += this.planing.getCost(e)), i;
  }
  /**
   * Get human-readable description of all extras
   */
  getDescription() {
    const e = [];
    return ui(this.banding) && this.banding.hasValues() && e.push(this.banding.getDescription()), Xt(this.finish) && this.finish.hasValues() && e.push(this.finish.getDescription()), Qt(this.planing) && this.planing.hasValues() && e.push(this.planing.getDescription()), e.length > 0 ? e.join("; ") : "No extras";
  }
  /**
   * Check if any extras are applied
   */
  hasExtras() {
    return !!(ui(this.banding) && this.banding.hasValues() || Xt(this.finish) && this.finish.hasValues() || Qt(this.planing) && this.planing.hasValues());
  }
  /**
   * Clear all extras
   */
  clear() {
    ui(this.banding) && this.banding.clear(), Xt(this.finish) && this.finish.clear(), Qt(this.planing) && this.planing.clear();
  }
  /**
   * Remove a specific extra type
   */
  removeExtra(e) {
    switch (e) {
      case "banding":
        this.banding = void 0;
        break;
      case "finish":
        this.finish = void 0;
        break;
      case "planing":
        this.planing = void 0;
        break;
    }
  }
  /**
   * Set banding
   */
  setBanding(e) {
    e ? e instanceof _t ? this.banding = e : this.banding = new _t(e) : this.banding = void 0;
  }
  /**
   * Set finish
   */
  setFinish(e) {
    e ? e instanceof Pt ? this.finish = e : this.finish = new Pt(e) : this.finish = void 0;
  }
  /**
   * Set planing
   */
  setPlaning(e) {
    e ? e instanceof pi ? this.planing = e : this.planing = new pi(e) : this.planing = void 0;
  }
  /**
   * Set image upload
   */
  /* setImageUpload( imageUpload: ImageUpload | ImageUploadData | undefined ): void
  {
  	if ( !imageUpload )
  	{
  		this.imageUpload = undefined
  	}
  	else if ( imageUpload instanceof ImageUpload )
  	{
  		this.imageUpload = imageUpload
  	}
  	else
  	{
  		this.imageUpload = new ImageUpload( imageUpload )
  	}
  } */
  // clone() method removed - using base class implementation
  // The base AutoSerializable.clone() properly returns 'this' type
  /**
   * Update from data
   */
  update(e) {
    const i = { ...e };
    "banding" in i && (this.setBanding(i.banding), delete i.banding), "finish" in i && (this.setFinish(i.finish), delete i.finish), "planing" in i && (this.setPlaning(i.planing), delete i.planing), super.update(i), this.validate();
  }
  /**
   * Create from plain data (for deserialization)
   */
  static fromData(e) {
    return new et(e);
  }
  /**
   * Create empty extras container
   */
  static empty() {
    return new et();
  }
  /**
   * Create with specific extras
   */
  static create(e) {
    return new et(e);
  }
  /**
   * Check if any extras are applicable to shape
   * Used for UI validation to determine if extras tab should be enabled
   */
  isApplicable(e) {
    return !!(ui(this.banding) && this.banding.isApplicable(e) || Xt(this.finish) && this.finish.isApplicable(e) || Qt(this.planing) && this.planing.isApplicable(e));
  }
  /**
   * Get summary of active extras
   */
  getSummary() {
    return {
      hasBanding: ui(this.banding) && this.banding.hasValues() || !1,
      hasFinish: Xt(this.finish) && this.finish.hasValues() || !1,
      hasPlaning: Qt(this.planing) && this.planing.hasValues() || !1,
      // hasImageUpload: ( isImageUpload( this.imageUpload ) && this.imageUpload.hasValues() ) || false,
      totalCost: this.getTotalCost(),
      description: this.getDescription()
    };
  }
  // =================== STATIC HELPER METHODS ===================
  /**
   * Check if a shape has banding extras with actual values
   * Works with both InputShape and Shape instances, and plain objects
   */
  static hasBanding(e) {
    const i = e?.extras;
    if (!i) return !1;
    const s = i.banding;
    return s ? ui(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" ? Object.keys(s.sides).some((n) => {
      const a = s.sides[n];
      return a !== void 0 && a !== !1 && a !== "";
    }) : !1 : !1;
  }
  /**
   * Check if a shape has finish extras with actual values
   * Works with both InputShape and Shape instances, and plain objects
   */
  static hasFinish(e) {
    const i = e?.extras;
    if (!i) return !1;
    const s = i.finish;
    return s ? Xt(s) && typeof s.hasValues == "function" ? s.hasValues() : s.faces && typeof s.faces == "object" ? Object.keys(s.faces).some((n) => {
      const a = s.faces[n];
      return a !== void 0 && a !== !1 && a !== "";
    }) : !1 : !1;
  }
  /**
   * Check if a shape has planing extras with actual values
   * Works with both InputShape and Shape instances, and plain objects
   */
  static hasPlaning(e) {
    const i = e?.extras;
    if (!i) return !1;
    const s = i.planing;
    return s ? Qt(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" && Object.keys(s.sides).some((a) => {
      const r = s.sides[a];
      return r !== void 0 && r !== !1 && r !== "";
    }) ? !0 : s.faces && typeof s.faces == "object" ? Object.keys(s.faces).some((n) => {
      const a = s.faces[n];
      return a !== void 0 && a !== !1 && a !== "";
    }) : !1 : !1;
  }
  /**
   * Check if a shape has image upload extras with actual values
   * Works with both InputShape and Shape instances, and plain objects
   */
  static hasImageUpload(e) {
    const i = e?.extras;
    if (!i) return !1;
    const s = i.imageUpload;
    return s ? Au(s) && typeof s.hasValues == "function" ? s.hasValues() : s.images && Array.isArray(s.images) ? s.images.length > 0 : !1 : !1;
  }
  /**
   * Check if a shape has any extras of a specific type with actual values
   * Works with both InputShape and Shape instances
   *
   * @param shape - The shape to check
   * @param type - The extra type to check for (optional - if not provided, checks for any extras)
   * @returns true if the shape has the specified extra type with values, or any extras if type not specified
   */
  static hasExtras(e, i) {
    if (!e?.extras) return !1;
    if (i)
      switch (i) {
        case "banding":
          return et.hasBanding(e);
        case "finish":
          return et.hasFinish(e);
        case "planing":
          return et.hasPlaning(e);
        case "imageUpload":
          return et.hasImageUpload(e);
      }
    return et.hasBanding(e) || et.hasFinish(e) || et.hasPlaning(e) || et.hasImageUpload(e);
  }
  /**
   * Get array of active extra types for a shape
   * Works with both InputShape and Shape instances
   *
   * @param shape - The shape to check
   * @returns Array of extra type names that have values
   */
  static getActiveExtrasTypes(e) {
    const i = [];
    return et.hasBanding(e) && i.push("banding"), et.hasFinish(e) && i.push("finish"), et.hasPlaning(e) && i.push("planing"), i;
  }
}
class Wt extends it {
  // Zod schema for validation and serialization
  static schema = fd;
  static computedProperties = hd;
  /**
   * Get entity type (required for AutoSerializable)
   */
  getType() {
    return "hole";
  }
  constructor(e = {}) {
    super(e), this.validate();
  }
  /**
    * Validate the hole
    */
  validate() {
    const e = [];
    return (this.x < 0 || this.y < 0) && e.push(new ue({
      message: "Position cannot be negative",
      type: "error"
    })), this.diameter <= 0 && e.push(new ue({
      message: "Diameter must be positive",
      type: "error"
    })), this.depth !== void 0 && this.depth < 0 && e.push(new ue({
      message: "Depth cannot be negative",
      type: "error"
    })), this.issues = e, e;
  }
  /**
    * Async validation with schema
    */
  // validateAsync() method removed - using base class schema-aware implementation
  // The base AutoSerializable.validateAsync() will:
  // 1. Use holeSchema to validate properties
  // 2. Set the valid flag
  // 3. Map errors to Issue objects
  // 4. Return the issues array
  /**
    * Check if hole goes through given thickness (legacy method)
    */
  isThroughThickness(e) {
    return !this.depth || this.depth >= e;
  }
  /**
    * Check if hole should be shown on a given face
    */
  shouldShow(e, i) {
    return this.face === i || this.isThroughShape(e) === !0;
  }
  /**
    * Check if hole goes through the entire shape
    */
  isThroughShape(e) {
    const i = e.t || 0;
    return !this.depth || this.depth >= i;
  }
  /**
    * Get Y drawing position for visualization
    */
  getYDrawPosition(e, i, s) {
    let n = e.rot ? this.x : this.y;
    return n += e.y || 0, i === 1 && (s ? n = (s.w || 0) - n : n = (e.w || 0) - n), n;
  }
  /**
    * Get X drawing position for visualization
    */
  getXDrawPosition(e) {
    let i = 0;
    const s = this.x;
    return e.rot ? i = (e.l || 0) - this.y + (e.x || 0) : i = s + (e.x || 0), i;
  }
  /**
    * Get distance to another hole
    */
  getDistanceTo(e) {
    return this.face !== e.face ? 1 / 0 : Math.sqrt(
      Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2)
    );
  }
  /**
    * Check if overlaps with another hole
    */
  overlaps(e) {
    if (this.face !== e.face)
      return !1;
    const i = this.getDistanceTo(e), s = (this.diameter + e.diameter) / 2;
    return i < s;
  }
  /**
    * Clone the hole
    */
  // clone() method removed - using base class implementation from AutoSerializable
  // toData() method removed - using base class implementation
  // The base class automatically returns the correct type
  // Removed by cleanup script on 2025-08-18
  /**
    * Update from data
    */
  // update() method removed - using base class schema-aware implementation
  // The base AutoSerializable.update() will:
  // 1. Use holeSchema to update properties
  // 2. Skip computed properties automatically
  // 3. Call validate() at the end
  /**
    * Create hole from coordinates
    */
  static fromCoordinates(e, i, s, n = 0) {
    return new Wt({ x: e, y: i, diameter: s, face: n });
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new Wt(e);
  }
  get area() {
    const e = this.diameter / 2;
    return Math.PI * e * e;
  }
}
class Xs extends it {
  // Zod schema for validation and serialization
  static schema = cd;
  static computedProperties = ud;
  /**
   * Get entity type (required for AutoSerializable)
   */
  getType() {
    return "hingeHole";
  }
  constructor(e = {}) {
    super(e), this.validate();
  }
  /**
   * Validate the hinge hole set
   */
  validate() {
    const e = [];
    if (this.position < 0 && e.push(new ue({
      message: "Position cannot be negative",
      type: "error"
    })), this.numHoles <= 0 && e.push(new ue({
      message: "Number of holes must be positive",
      type: "error"
    })), this.diameter <= 0 && e.push(new ue({
      message: "Diameter must be positive",
      type: "error"
    })), this.hingeLength <= 0 && e.push(new ue({
      message: "Hinge length must be positive",
      type: "error"
    })), this.depth !== void 0 && this.depth < 0 && e.push(new ue({
      message: "Depth cannot be negative",
      type: "error"
    })), this.numHoles > 1) {
      const i = this.hingeLength - 2 * this.outerSpacing;
      this.diameter * this.numHoles > i && e.push(new ue({
        message: "Holes do not fit within hinge length",
        type: "error"
      }));
    }
    return this.issues = e, e;
  }
  /**
   * Async validation with schema
   */
  // validateAsync() method removed - using base class schema-aware implementation
  // The base AutoSerializable.validateAsync() will:
  // 1. Use hingeHoleSchema to validate properties
  // 2. Map errors to Issue objects
  // 3. Return the issues array
  /**
   * Create individual Hole instances from this hinge hole set (legacy compatibility)
   */
  createHoles(e) {
    const i = e?.l || e?.getLongSide?.() || e?.longSide || 0, s = e?.w || e?.getShortSide?.() || e?.shortSide || 0;
    return this.generateHoles(i, s).map((a) => new Wt(a));
  }
  /**
   * Generate individual holes from this hinge hole set
   */
  generateHoles(e, i) {
    const s = [];
    if (this.numHoles <= 0) return s;
    const n = this.numHoles > 1 ? (this.hingeLength - 2 * this.outerSpacing) / (this.numHoles - 1) : 0;
    for (let a = 0; a < this.numHoles; a++) {
      const r = this.outerSpacing + a * n;
      let o, l;
      switch (this.side) {
        case "l1":
          o = this.distanceFromEdge, l = this.position + r;
          break;
        case "l2":
          o = e - this.distanceFromEdge, l = this.position + r;
          break;
        case "w1":
          o = this.position + r, l = this.distanceFromEdge;
          break;
        case "w2":
          o = this.position + r, l = i - this.distanceFromEdge;
          break;
        default:
          o = 0, l = 0;
      }
      s.push(new Wt({
        x: o,
        y: l,
        diameter: this.diameter,
        depth: this.depth,
        face: this.face,
        type: "hinge"
      }));
    }
    return s;
  }
  /**
   * Get hole spacing
   */
  getHoleSpacing() {
    if (this.numHoles <= 1) return 0;
    const e = this.hingeLength - this.outerSpacing * 2, i = this.numHoles - 1;
    return e / i;
  }
  /**
   * Clone the hinge hole
   */
  // clone() method removed - using base class implementation from AutoSerializable
  // toData() method removed - using base class implementation
  // The base class automatically returns the correct type
  // Removed by cleanup script on 2025-08-18
  /**
   * Update from data
   */
  // update() method removed - using base class schema-aware implementation
  // The base AutoSerializable.update() will:
  // 1. Use hingeHoleSchema to update properties
  // 2. Skip computed properties automatically
  // 3. Call validate() at the end
  /**
   * Create from plain data (for deserialization)
   */
  static fromData(e) {
    return new Xs(e);
  }
}
class $o extends it {
  // Validation properties (issues, warnings) are inherited from validationBasePropertiesSchema
  // via sawPropertiesSchema which extends it - they are initialized automatically
  // when the Zod schema is parsed in the constructor
  // isValid is also provided as a computed property from validationBaseComputedProperties
  // Zod schema for validation and serialization
  static schema = Zn;
  static computedProperties = Kd;
  /**
   * Leave serializationProperties empty to trigger automatic enumeration
   * We use serializationExcludedProperties for exclusion-based approach
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   */
  static serializationExcludedProperties = [
    // All private fields (starting with _) are automatically excluded by AutoSerializable
  ];
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  // Static defaults inferred from Zod schema
  static defaults = Zn.parse({});
  constructor(e = {}) {
    super(e), this.stockType === "linear" && (this.cutType = void 0, this.cutPreference = void 0);
  }
  /**
   * Get entity type
   */
  getType() {
    return le.Saw;
  }
  /**
    * Validate the saw data
    * For backward compatibility, returns Issue[] synchronously
    * Delegates to async validation which uses the schema
    */
  validate() {
    return this.issues = [], this.warnings = [], this.bladeWidth < 0 && this.issues.push(new ue({
      message: "Blade width cannot be negative",
      field: [["bladeWidth"]],
      type: "error",
      shouldTranslate: !1
    })), this.issues;
  }
}
function Aa(t, e, i = "decimal") {
  const s = { ...t };
  for (const [n, a] of Object.entries(e)) {
    const r = t[n];
    switch (a.type) {
      case "number":
        r != null ? s[n] = typeof r == "string" ? Q({ v: r, nf: i }) : r : r === null && (s[n] = null);
        break;
      case "trim":
        if (r) {
          const o = {};
          for (const [l, c] of Object.entries(r))
            o[l] = typeof c == "string" ? Q({ v: c, nf: i }) : c;
          s[n] = o;
        }
        break;
      case "omit":
        delete s[n];
        break;
      case "set":
        s[n] = a.value;
        break;
      case "transform":
        s[n] = a.transform(r);
        break;
      case "rename":
        r !== void 0 && (s[a.to] = r, delete s[n]);
        break;
    }
  }
  return s;
}
const Wf = {
  // Numeric fields that need conversion
  l: { type: "number" },
  w: { type: "number" },
  t: { type: "number" },
  q: { type: "transform", transform: (t) => t || 1 },
  cost: { type: "number" },
  // Trim needs special handling
  trim: { type: "trim" },
  // Transform fields
  orientationLock: { type: "transform", transform: (t) => t || null },
  // Add missing fields for Shape
  grain: { type: "set", value: null },
  // Pass through tracking fields
  autoId: { type: "pass" },
  // Pass autoId through to runtime classes
  // Extras and machining pass through as-is (already proper instances)
  extras: { type: "pass" },
  machining: { type: "pass" },
  // Remove UI-only fields
  selected: { type: "omit" },
  multiEdit: { type: "omit" },
  selectedMaterial: { type: "omit" },
  readonly: { type: "omit" }
}, Hf = {
  // Numeric fields that need conversion
  l: { type: "number" },
  // Will be handled specially with default 0 in Stock constructor
  w: { type: "number" },
  // Will be handled specially with default 0 in Stock constructor
  t: { type: "number" },
  q: { type: "transform", transform: (t) => t || 1 },
  cost: { type: "number" },
  // Trim needs special handling
  trim: { type: "trim" },
  // Transform fields
  grain: { type: "transform", transform: (t) => t || null },
  // Pass through tracking fields
  autoId: { type: "pass" },
  // Pass autoId through to runtime classes
  // Remove UI-only fields
  selected: { type: "omit" },
  multiEdit: { type: "omit" },
  readonly: { type: "omit" }
}, Uf = {
  // Numeric field that needs conversion
  bladeWidth: { type: "number" },
  // Stack height should ensure it's a number
  stackHeight: { type: "transform", transform: (t) => typeof t == "number" ? t : t ? Number(t) : 100 },
  // Convert options field to handle minSpacing string/number conversions
  options: {
    type: "transform",
    transform: (t) => ({
      ...t,
      minSpacing: typeof t?.minSpacing == "string" ? Q({ v: t.minSpacing, nf: "decimal" }) : t?.minSpacing ?? 0,
      minSpacingDimension: {
        dimension: typeof t?.minSpacingDimension?.dimension == "string" ? Q({ v: t.minSpacingDimension.dimension, nf: "decimal" }) : t?.minSpacingDimension?.dimension ?? 0,
        minSpacing: typeof t?.minSpacingDimension?.minSpacing == "string" ? Q({ v: t.minSpacingDimension.minSpacing, nf: "decimal" }) : t?.minSpacingDimension?.minSpacing ?? 0
      }
    })
  },
  // Remove UI/validation fields that shouldn't be in runtime
  issues: { type: "omit" },
  warnings: { type: "omit" },
  // Remove the input-specific id
  id: { type: "omit" }
  // All other fields (stockType, cutType, cutPreference, etc.)
  // are already in the correct format and will pass through as-is
};
function Qs() {
  this.issues = [], this.warnings && (this.warnings = []);
}
function Vi(t) {
  t.type === "warning" && this.warnings ? this.warnings.push(t) : this.issues.push(t);
}
function Yi(t) {
  return t.issues.map((e) => {
    const i = {}, s = e.path.length > 0 ? e.path[e.path.length - 1] : "field", n = typeof s == "symbol" ? String(s) : s;
    if (i.field = `fields.${n}`, e.code === "too_small") {
      const a = e;
      a.minimum !== void 0 && (i.minimum = a.minimum, i.min = a.minimum);
    }
    if (e.code === "too_big") {
      const a = e;
      a.maximum !== void 0 && (i.maximum = a.maximum, i.max = a.maximum);
    }
    return new ue({
      field: [[e.path.join(".")]],
      message: e.message,
      // Should be a translation key from our custom error map
      type: "error",
      shouldTranslate: !0,
      // Let Issue class handle translation
      params: i,
      // Pass parameters for translation interpolation
      item: null
      // Explicitly set to null to avoid circular references
    });
  });
}
function ar(t, e) {
  const i = t.safeParse(e);
  return i.success ? [] : Yi(i.error);
}
const Do = {
  clearValidation: Qs,
  addIssue: Vi,
  validateWithSchema: ar,
  zodErrorsToIssues: Yi,
  /**
   * Run standard validation flow
   */
  runValidation(t, e = {}) {
    return Qs.call(this), e.skipSchemaValidation || ar(t, this).forEach((s) => Vi.call(this, s)), this.issues || [];
  }
};
class ti extends it {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Ii;
  static computedProperties = Ed;
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}) {
    super(e);
    const i = Yn(this.stockType);
    i.includes(this.cutType) || (this.cutType = i.length > 0 ? i[0] : void 0);
    const s = Kn(this.stockType, this.cutType);
    this.cutPreference && !s.includes(this.cutPreference) ? this.cutPreference = s[0] || void 0 : !this.cutPreference && s.length > 0 && (this.cutPreference = s.includes("l") ? "l" : s[0]);
  }
  /**
   * Get entity type
   */
  getType() {
    return le.InputSaw;
  }
  // Validation properties (issues, warnings, isValid) come from the schema via SchemaClass
  // clearValidation and addIssue are provided by validation-helpers
  /**
   * Validate to perform InputSaw-specific validation
   * Implements the Validatable interface requirement
   */
  validate(e) {
    if (Qs.call(this), e?.skipSchemaValidation || Do.runValidation.call(
      this,
      Ii,
      e
    ), !e?.skipBusinessValidation) {
      if (this.bladeWidth !== void 0 && this.bladeWidth !== null) {
        const i = Q({ v: this.bladeWidth });
        i === null || isNaN(i) || i < 0 ? Vi.call(this, new ue({
          message: "Blade width must be a non-negative number",
          type: "error",
          field: [["bladeWidth"]]
        })) : i > 100 && Vi.call(this, new ue({
          message: "Blade width seems unusually large (> 100)",
          type: "warning",
          field: [["bladeWidth"]]
        }));
      }
      this.stackHeight !== void 0 && this.stackHeight !== null && (this.stackHeight < 1 ? Vi.call(this, new ue({
        message: "Stack height must be at least 1",
        type: "error",
        field: [["stackHeight"]]
      })) : this.stackHeight > 1e3 && Vi.call(this, new ue({
        message: "Stack height seems unusually large (> 1000)",
        type: "warning",
        field: [["stackHeight"]]
      })));
    }
    return this.issues;
  }
  // Removed async validateSaw method - validation is now handled in validate() method
  // Note: getValidCutTypesForStock and getValidCutPreferencesForStockAndCut removed
  // These are now imported from '../saw/utils' and used in schema computed properties
  /**
    * Check if cut type is valid
    */
  isValidCutType(e) {
    return this.validCutTypes.includes(e);
  }
  /**
    * Check if cut preference is valid
    */
  isValidCutPreference(e) {
    return this.validCutPreferences.includes(e);
  }
  // isValid is now provided as a computed property from the validation schema
  /**
   * Update properties from data
   * Override to handle field dependencies
   */
  update(e) {
    const i = this.stockType, s = this.cutType;
    super.update(e);
    const n = Yn(this.stockType);
    n.includes(this.cutType) || (this.cutType = n.length > 0 ? n[0] : void 0);
    const a = i !== this.stockType, r = s !== this.cutType;
    if (a || r) {
      const o = Kn(this.stockType, this.cutType);
      this.cutPreference && !o.includes(this.cutPreference) ? o.length > 0 ? this.cutPreference = o.includes("l") ? "l" : o[0] : this.cutPreference = void 0 : !this.cutPreference && o.length > 0 && (this.cutPreference = o.includes("l") ? "l" : o[0]);
    }
    this.validate();
  }
  // Note: validCutTypes, validCutPreferences, and numericBladeWidth are now computed properties from the schema
  /**
   * Override toData to ensure correct return type
   * Returns InputSawData (schema properties only, no computed properties)
   */
  toData(e) {
    return super.toData(e);
  }
  /**
   * Convert to Saw instance for runtime use
   */
  toSaw() {
    const e = this.toData(), i = Aa(
      e,
      Uf
    );
    return new $o(i);
  }
}
const Eo = Tt, rr = bt;
ai.map((t) => `side.${t}`), rr.map((t) => `face.${t}`), rr.map((t) => `face.${t}`), Eo.map((t) => `side.${t}`);
let Yf = class Qn extends it {
  // Zod schema for validation and serialization
  static schema = qd;
  static computedProperties = zd;
  /**
   * Get entity type (required for AutoSerializable)
   */
  getType() {
    return le.Machining;
  }
  constructor(e = {}) {
    super(e);
  }
  /**
    * Validate machining operations - all or specific type
    */
  validate(e, i, s) {
    const n = [];
    return i === "holes" ? this.holes.forEach((a, r) => {
      (a.x < 0 || a.y < 0) && n.push(new ue({
        message: `Hole ${r + 1}: Position cannot be negative`,
        type: "error"
      })), a.diameter <= 0 && n.push(new ue({
        message: `Hole ${r + 1}: Diameter must be positive`,
        type: "error"
      }));
    }) : i === "hingeHoles" ? this.hingeHoles.forEach((a, r) => {
      a.position < 0 && n.push(new ue({
        message: `Hinge ${r + 1}: Position cannot be negative`,
        type: "error"
      }));
    }) : i === "corners" ? this.corners.forEach((a, r) => {
      a.size <= 0 && n.push(new ue({
        message: `Corner ${r + 1}: Size must be positive`,
        type: "error"
      }));
    }) : (n.push(...this.validate(e, "holes", s)), n.push(...this.validate(e, "hingeHoles", s)), n.push(...this.validate(e, "corners", s))), i || (this.issues = n), n;
  }
  /**
    * Add a hole
    */
  addHole(e) {
    this.holes.push(e instanceof Wt ? e : new Wt(e)), this.validate();
  }
  /**
    * Remove a hole by index
    */
  removeHole(e) {
    return e >= 0 && e < this.holes.length ? (this.holes.splice(e, 1), this.validate(), !0) : !1;
  }
  /**
    * Remove a hole by autoId
    */
  removeHoleByAutoId(e) {
    const i = this.holes.findIndex((s) => s.autoId === e);
    return this.removeHole(i);
  }
  /**
    * Add a hinge hole set
    */
  addHingeHole(e) {
    this.hingeHoles.push(e instanceof Xs ? e : new Xs(e)), this.validate();
  }
  /**
    * Remove a hinge hole set by index
    */
  removeHingeHole(e) {
    return e >= 0 && e < this.hingeHoles.length ? (this.hingeHoles.splice(e, 1), this.validate(), !0) : !1;
  }
  /**
    * Remove a hinge hole set by autoId
    */
  removeHingeHoleByAutoId(e) {
    const i = this.hingeHoles.findIndex((s) => s.autoId === e);
    return this.removeHingeHole(i);
  }
  /**
    * Add or update a corner
    */
  setCorner(e) {
    const i = e instanceof zi ? e : new zi(e);
    this.corners = this.corners.filter((s) => s.index !== i.index), this.corners.push(i), this.validate();
  }
  /**
    * Remove a corner by index
    */
  removeCorner(e) {
    const i = this.corners.findIndex((s) => s.index === e);
    return i >= 0 ? (this.corners.splice(i, 1), this.validate(), !0) : !1;
  }
  /**
    * Get corner by index
    */
  getCorner(e) {
    return this.corners.find((i) => i.index === e);
  }
  /**
    * Get all hinge holes as individual Hole objects
    */
  getAllHingeHoles(e) {
    const i = [];
    return this.hingeHoles.forEach((s) => {
      this.generateHingeHoles(s, e).forEach((a) => {
        i.push(a instanceof Wt ? a : new Wt(a));
      });
    }), i;
  }
  /**
    * Generate individual holes from a hinge hole set
    */
  generateHingeHoles(e, i) {
    const s = [];
    if (e.numHoles <= 0) return s;
    const n = e.numHoles > 1 ? (e.hingeLength - 2 * e.outerSpacing) / (e.numHoles - 1) : 0, a = i?.l || i?.longSide || 0, r = i?.w || i?.shortSide || 0;
    for (let o = 0; o < e.numHoles; o++) {
      const l = e.outerSpacing + o * n;
      let c, u;
      switch (e.side) {
        case "l1":
          c = e.distanceFromEdge, u = e.position + l;
          break;
        case "l2":
          c = a - e.distanceFromEdge, u = e.position + l;
          break;
        case "w1":
          c = e.position + l, u = e.distanceFromEdge;
          break;
        case "w2":
          c = e.position + l, u = r - e.distanceFromEdge;
          break;
        default:
          c = 0, u = 0;
      }
      s.push({
        x: c,
        y: u,
        diameter: e.diameter,
        depth: e.depth,
        face: e.face,
        type: "hinge"
      });
    }
    return s;
  }
  /**
    * Clear all machining
    */
  clear() {
    this.holes = [], this.hingeHoles = [], this.corners = [], this.validate();
  }
  // clone() method removed - using base class implementation
  // The base AutoSerializable.clone() properly returns 'this' type
  // toData() is now provided by AutoSerializable base class
  /**
    * Create empty machining
    */
  static empty() {
    return new Qn();
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new Qn(e);
  }
  get allHoles() {
    const e = [...this.holes];
    return this.hingeHoles.forEach((i) => {
      this.generateHingeHoles(i, null).forEach((n) => {
        e.push(new Wt(n));
      });
    }), e;
  }
  /**
   * Get number of holes
   */
  getNumHoles() {
    return (this.holes || []).length;
  }
  /**
   * Get number of corners
   */
  getNumCorners() {
    return (this.corners || []).length;
  }
};
function Kf(t, e, i) {
  return i ? typeof t == "number" ? isNaN(t) ? null : t : typeof t == "string" ? t : null : e === "decimal" ? t ? Q({ v: t, nf: "decimal" }) : null : t;
}
function Zf(t, e, i, s = !1) {
  const n = s ? Object.fromEntries(ai.map((o) => [o, 0])) : { l1: 0, l2: 0, w1: 0, w2: 0 };
  if (!t) return n;
  const r = t && ("x1" in t || "x2" in t || "y1" in t || "y2" in t) ? {
    // CORRECT mapping: y1→l1, y2→l2, x1→w1, x2→w2
    l1: t.y1 ?? t.l1 ?? 0,
    l2: t.y2 ?? t.l2 ?? 0,
    w1: t.x1 ?? t.w1 ?? 0,
    w2: t.x2 ?? t.w2 ?? 0
  } : t;
  return i ? Object.keys(n).forEach((o) => {
    n[o] = r[o] ?? 0;
  }) : Object.keys(n).forEach((o) => {
    const l = r[o];
    l != null && (n[o] = Q({ v: l, nf: e }));
  }), n;
}
class _o extends it {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Us;
  static computedProperties = xa;
  // Validation properties (issues, warnings, isValid) come from the schema via SchemaClass
  // The Validatable interface is satisfied by:
  // - issues: Issue[] - from validationBasePropertiesSchema
  // - warnings: Issue[] - from validationBasePropertiesSchema
  // - isValid: boolean - from validationBaseComputedProperties
  // - validate(): Issue[] - implemented below
  // UI helper properties - derived from schema metadata
  get numberFormatKeys() {
    const e = this.constructor;
    return e._cachedNumberFormatKeys || (e._cachedNumberFormatKeys = e.extractNumberFormatFields(e.schema)), e._cachedNumberFormatKeys;
  }
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}, i = "decimal") {
    const s = { ...e }, n = !!s.skipValidation, a = ["l", "w", "t", "cost"];
    for (const r of a)
      s[r] === null || s[r] === void 0 ? delete s[r] : s[r] !== void 0 && (s[r] = Kf(s[r], i, n), s[r] === null && delete s[r]);
    s.name?.length ? s.name = $u(s.name)?.toUpperCase() : s.name = "", s.material ? s.material = s.material.trim().toUpperCase() : s.material = "", typeof s.notes == "string" ? s.notes = s.notes.replace(/,/g, " ") : s.notes = "", s.trim && (s.trim = Zf(s.trim, i, n, !0)), super(s), this.issues || (this.issues = []), this.warnings || (this.warnings = []);
  }
  /**
   * Get entity type
   */
  getType() {
    return le.InputRectangle;
  }
  /**
     * Create ID for shape (override parent implementation)
     * Format: "1.0", "2.0", "3.0" etc.
     */
  createId(e) {
    const i = `${e + 1}.0`;
    return this.id = i, i;
  }
  /**
   * Validate the input rectangle
   * Implements the Validatable interface requirement
   * Base implementation - subclasses should override with specific validation
   */
  validate(e) {
    return Qs.call(this), e?.skipSchemaValidation || Do.runValidation.call(
      this,
      Us,
      e
    ), this.issues;
  }
  // isValid is provided as a computed property from validationBaseComputedProperties
  /**
   * Get trimmed dimensions
   */
  get trimmedDimensions() {
    const e = this.longSide, i = this.shortSide, s = Q({ v: this.trim.l1 }) ?? 0, n = Q({ v: this.trim.l2 }) ?? 0, a = Q({ v: this.trim.w1 }) ?? 0, r = Q({ v: this.trim.w2 }) ?? 0;
    return {
      name: this.name,
      id: this.id,
      autoId: this.autoId,
      l: e - (a + r),
      w: i - (s + n)
    };
  }
}
class as extends _o {
  // Required: Define schema and computed properties for SchemaClass
  // Use getters to defer schema access and avoid circular dependency
  static get schema() {
    return mi;
  }
  static get computedProperties() {
    return Vd;
  }
  // UI helper properties (extends parent)
  warningKeys = ["q"];
  issueKeys = ["l", "w", "t", "trim"];
  // Note: isNew flag now comes from schema (inputUIStateSchema)
  // Note: Options properties removed - now centralized in CalculationData.extrasOptions
  // Compatibility getters/setters for direct access to extras
  get banding() {
    return this.extras?.banding;
  }
  set banding(e) {
    this.extras || (this.extras = new et()), this.extras.banding = e;
  }
  get finish() {
    return this.extras?.finish;
  }
  set finish(e) {
    this.extras || (this.extras = new et()), this.extras.finish = e;
  }
  get planing() {
    return this.extras?.planing;
  }
  set planing(e) {
    this.extras || (this.extras = new et()), this.extras.planing = e;
  }
  get imageUpload() {
    return this.extras?.imageUpload;
  }
  set imageUpload(e) {
    this.extras || (this.extras = new et()), this.extras.imageUpload = e;
  }
  // Note: Options getters/setters removed - options now centralized in CalculationData.extrasOptions
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}, i = "decimal") {
    const s = {
      ...e,
      // orientationLock transform is now handled by Zod schema
      machining: e.machining || new Yf({
        holes: [],
        hingeHoles: [],
        corners: []
      }),
      extras: e.extras || new et()
    };
    super(s, i);
  }
  /**
   * Get entity type
   */
  getType() {
    return le.InputShape;
  }
  /**
    * Apply part trim
    */
  applyPartTrim(e, i) {
    if (!this.readonly)
      if (e = Q({ v: e }), this.trim) {
        for (const s in this.trim)
          this.trim[s] = e;
        i === "linear" && (this.trim.w1 = 0, this.trim.w2 = 0);
      } else
        this.trim = {
          l1: e,
          l2: e,
          w1: i !== "linear" ? e : 0,
          w2: i !== "linear" ? e : 0
        };
  }
  /**
   * Validate shape data
   * Overrides parent implementation to add shape-specific validation
   */
  validate(e = {}) {
    if (this.isNew && !e?.fields)
      return this.issues;
    if (e?.fields && Array.isArray(e.fields)) {
      const l = e.fields;
      for (let h = this.issues.length - 1; h >= 0; h--)
        this.issues[h].field.some((g) => l.includes(g[0])) && this.issues.splice(h, 1);
      for (let h = this.warnings.length - 1; h >= 0; h--)
        this.warnings[h].field.some((g) => l.includes(g[0])) && this.warnings.splice(h, 1);
      const c = e.fields.reduce((h, g) => {
        const k = g.split(".")[0];
        return h[k] = !0, h;
      }, {}), f = mi.pick(c).safeParse(this.toData());
      if (!f.success) {
        const h = Yi(f.error);
        this.issues.push(...h);
      }
    } else {
      this.issues.length = 0, this.warnings.length = 0;
      const l = mi.safeParse(this.toData());
      if (!l.success) {
        const c = Yi(l.error);
        this.issues.push(...c);
      }
    }
    if (e.skipBusinessValidation)
      return this.issues;
    if (this.isNew && e.fields)
      return this.issues;
    const {
      inputStockList: i = [],
      index: s = null,
      useInventory: n = !1,
      fields: a = null
    } = e, r = (l) => !a || a.includes(l);
    r("l") && pt.l({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), r("w") && pt.w({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), r("t") && pt.t({
      item: this,
      index: s ?? this.index,
      category: ["part"],
      saw: e.saw
    }), r("q") && pt.q({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), r("trim") && pt.trim({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), !n && i.length > 0, r("customData") && pt.customData({
      item: this,
      index: s ?? this.index
    });
    const o = [];
    this.issues.forEach((l, c) => {
      l || o.push(c);
    });
    for (let l = o.length - 1; l >= 0; l--)
      this.issues.splice(o[l], 1);
    return this.issues;
  }
  /**
   * Convert to Shape instance
   */
  toShape(e) {
    const i = Aa(
      this.toData(),
      Wf,
      e
    );
    return new gn(i);
  }
  changeStockType(e) {
    switch (e) {
      case "sheet":
      case "roll":
        this.orientationLock = "", e === "roll" && (this.t = null);
        break;
      case "linear":
        this.orientationLock = "", this.banding = Object.fromEntries(
          Eo.map((i) => [i, !1])
        );
        break;
    }
  }
}
class As extends _o {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Yt;
  static computedProperties = Nd;
  // UI helper properties (extends parent)
  warningKeys = ["q"];
  issueKeys = ["l", "w", "t", "trim"];
  // Note: isNew flag now comes from schema (inputUIStateSchema)
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}, i = "decimal") {
    const s = {
      ...e,
      grain: e.grain ? e.grain.toLowerCase() : ""
    };
    super(s, i);
  }
  /**
   * Get entity type
   */
  getType() {
    return le.InputStock;
  }
  // isSquare is now a computed property inherited from InputRectangle
  /**
   * Validate stock data
   * Overrides parent implementation to add stock-specific validation
   */
  validate(e, i) {
    let s = null, n = null;
    if (e && typeof e == "object" && !("skipSchemaValidation" in e) ? (s = e, n = i || null, e = {}) : (s = e?.saw || null, n = e?.index || null), this.isNew && !e?.fields)
      return this.issues;
    if (e?.fields && Array.isArray(e.fields)) {
      const c = e.fields;
      for (let h = this.issues.length - 1; h >= 0; h--)
        this.issues[h].field.some((k) => c.includes(k[0])) && this.issues.splice(h, 1);
      for (let h = this.warnings.length - 1; h >= 0; h--)
        this.warnings[h].field.some((k) => c.includes(k[0])) && this.warnings.splice(h, 1);
      const u = this.toData();
      console.log("[InputStock.validate] Field-level validation requested for fields:", e.fields), console.log("[InputStock.validate] Data to validate:", u);
      const f = e.fields.reduce((h, g) => {
        const k = g.split(".")[0];
        return h[k] = !0, h;
      }, {});
      try {
        const h = Yt.pick(f);
        console.log("[InputStock.validate] Created partial schema for fields:", Object.keys(f));
        const g = h.safeParse(u);
        if (console.log("[InputStock.validate] Validation result:", g.success ? "SUCCESS" : "FAILED"), g.success)
          console.log("[InputStock.validate] No validation errors found");
        else {
          console.log("[InputStock.validate] Validation errors:", g.error.issues);
          const k = Yi(g.error);
          this.issues = [...this.issues, ...k];
        }
      } catch (h) {
        console.warn(`Failed to validate fields ${e.fields.join(", ")}:`, h);
      }
      this.isNew && (console.log("[InputStock.validate] Clearing isNew flag"), this.isNew = !1);
    } else {
      this.issues = [], this.warnings = [];
      const c = Yt.safeParse(this.toData());
      if (!c.success) {
        const u = Yi(c.error);
        this.issues = u;
      }
    }
    if (e?.skipBusinessValidation)
      return this.issues;
    const a = e?.fields, r = (c) => !a || a.includes(c);
    ["l", "w", "t"].forEach((c) => {
      r(c) && pt[c]({
        item: this,
        saw: s,
        index: n ?? this.index,
        category: ["stock"]
      });
    }), r("grain") && pt.grain({
      item: this,
      index: n ?? this.index,
      category: ["stock"]
    }), r("trim") && pt.trim({
      item: this,
      index: n ?? this.index,
      category: ["stock"]
    }), r("q") && pt.q({
      item: this,
      index: n ?? this.index,
      isWarning: !0,
      category: ["stock"]
    });
    const l = [];
    this.issues.forEach((c, u) => {
      c || l.push(u);
    });
    for (let c = l.length - 1; c >= 0; c--)
      this.issues.splice(l[c], 1);
    return this.issues;
  }
  // isValid is now provided as a computed property from the validation schema
  // Update method inherited from SchemaClass - no override needed
  // toData() is now inherited from AutoSerializable with correct return type InputStockProperties
  /**
   * Convert to Stock instance
   */
  toStock(e, i) {
    const s = this.toData(), n = i?.stockType || this.saw?.stockType;
    s.trim && n && (n === "linear" ? (s.trim.w1 = 0, s.trim.w2 = 0) : n === "roll" && (s.trim.w2 = 0));
    const a = Aa(
      s,
      Hf,
      e
    );
    return (i || this.saw) && (a.saw = i || this.saw), new Zs(a);
  }
  changeType(e) {
    switch (e !== "sheet" && (this.grain = ""), e) {
      case "linear":
        this.trim.w1 = 0, this.trim.w2 = 0;
        break;
      case "roll":
        this.trim.l1 = 0, this.trim.l2 = 0, this.trim.w1 = 0, this.trim.w2 = 0, this.t = null;
        break;
    }
  }
}
class Mo extends it {
  // Required: Define schema and computed properties for SchemaClass
  static schema = ka;
  static computedProperties = Gd;
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}) {
    const i = {
      ...e,
      shapes: e.shapes?.map(String) ?? []
    };
    if (super(i), this.validateInputUserGroup(i), e.shapeList?.length) {
      const s = this.validateWithShapes(e.shapeList);
      this.issues.push(...s.filter((n) => !this.issues.find((a) => a.message === n.message)));
    }
  }
  /**
    * Get entity type
    */
  getType() {
    return le.Group;
  }
  /**
   * Clear all validation issues and warnings
   */
  clearValidation() {
    this.issues = [], this.warnings = [];
  }
  /**
   * Add a validation issue
   */
  addIssue(e) {
    e.type === "warning" ? this.warnings.push(e) : this.issues.push(e);
  }
  /**
    * Validate input (sync version - basic validation only)
    */
  validateInputUserGroup(e) {
    if ("skipValidation" in e && e.skipValidation) {
      this.clearValidation();
      return;
    }
    this.clearValidation(), e.q !== void 0 && pt.q({ item: e, index: "index" in e && typeof e.index == "number" ? e.index : 0 }).filter((s) => s).forEach((s) => this.addIssue(s));
  }
  /**
    * Validate with actual shape data
    */
  validateWithShapes(e = []) {
    if (!e.length)
      throw new Error("A shapeList is required to validate an InputUserGroup.");
    const i = [...this.issues], s = this.findShapes(e), n = pt.groupShapeCount({
      item: this,
      index: 0,
      shapes: s,
      requiredCount: 2
    });
    if (i.push(...n), i.length) return i;
    const a = pt.groupOrientationLock({
      item: this,
      index: 0,
      shapes: s
    });
    if (i.push(...a), i.length) return i;
    const r = this.joinDimension, o = pt.groupDimensions({
      item: this,
      index: 0,
      shapes: s,
      joinDirection: r
    });
    return i.push(...o), i;
  }
  /**
    * Find shapes from shape list
    */
  findShapes(e) {
    if (this.shapeIds?.length && e.length) {
      const s = [];
      for (const n of this.shapeIds) {
        const a = e.find((r) => !!(r.autoId === n || Te(r) && r.autoId === n || "id" in r && r.id === n));
        a && (Te(a) || ut(a)) && s.push(a);
      }
      return s.length < this.shapeIds.length && this.addIssue(new ue({
        message: "Could not find all shapes in the shape list",
        type: "error"
      })), s;
    }
    if (!this.shapes.length) return [];
    const i = [];
    for (const s of this.shapes) {
      const n = e.find((a) => !!(a.autoId === s || String(a.autoId) === String(s) || "id" in a && (a.id === s || String(a.id) === String(s)) || Te(a) && (a.autoId === s || String(a.autoId) === String(s))));
      n && (Te(n) || ut(n)) && i.push(n);
    }
    return i;
  }
  // isValid is now provided as a computed property from the validation schema
  /**
   * Populate parent IDs from shape list IDs
   */
  populateParentID(e) {
    e?.length && this?.shapeIds?.length && (this.shapes = this.shapeIds.map((i) => {
      const s = e.find((n) => n.autoId === i || Te(n) && n.autoId === i);
      return s ? (e.indexOf(s) + 1).toString() : null;
    }).filter((i) => i !== null));
  }
  /**
    * Create runtime Group from this user input
    * @param groupParentID - Parent ID for the group (optional, for compatibility)
    * @param groupIndex - Index for the group (optional, for compatibility)
    * @param shapeList - List of shapes to create group from
    * @param stock - Optional stock reference for spacing calculations
    */
  toGroup(e, i, s, n) {
    if (Array.isArray(e) && (s = e, e = void 0, n = void 0), s) {
      const h = s.filter((k) => Te(k) || ut(k)), g = this.validateWithShapes(h);
      if (g.filter((k) => k.type === "error").length > 0)
        throw new Error(`Cannot create Group: ${g[0].message}`);
    }
    const a = this.findShapes(s || []);
    if (a.length === 0)
      throw new Error("No shapes found for Group creation");
    const r = a.map((h) => Te(h) ? h.toShape() : h), o = r[0];
    r.forEach((h) => {
      if (s && Array.isArray(s)) {
        const g = s.findIndex((k) => "group" in k && k.group?.inUserGroup ? !1 : "parentId" in k && "parentId" in h && k.parentId === h.parentId || "id" in k && "id" in h && k.id === h.id);
        g !== -1 && s.splice(g, 1);
      }
      if ("setRotationToOrientationLockWithoutContainer" in h && typeof h.setRotationToOrientationLockWithoutContainer == "function")
        h.setRotationToOrientationLockWithoutContainer();
      else if ("orientationLock" in h && h.orientationLock) {
        const g = h.orientationLock;
        try {
          g === "l" && "rot" in h ? h.rot = 0 : g === "w" && "rot" in h && (h.rot = 1);
        } catch {
        }
      }
      "group" in h && h.group && (h.group.inUserGroup = !0);
    });
    let l = 0, c = 0;
    this.direction === "horizontal" ? (c = o.w, r.forEach((h) => l += h.l)) : (l = o.l, r.forEach((h) => c += h.w));
    const u = {
      autoId: this.autoId,
      // Use the same autoId as the InputUserGroup
      shapes: r,
      direction: this.direction,
      // Already 'horizontal' or 'vertical'
      l,
      w: c,
      t: o?.t,
      material: o?.material,
      orientationLock: c > l ? "w" : "l",
      // Set based on which dimension is longer
      type: "user",
      q: 1,
      // Groups always have q=1
      preventAutoRotation: !0,
      container: n,
      skipValidation: !0
      // Already validated
    }, f = new mn(u);
    return n && "updateShapeSpacing" in f && typeof f.updateShapeSpacing == "function" && f.updateShapeSpacing(n), f;
  }
  /**
    * Convert to plain data object
    */
  toData() {
    const e = super.toData();
    if ("__entityType" in e) {
      const { __entityType: i, ...s } = e;
      return s;
    }
    return e;
  }
  /**
    * Update properties from data
    */
  update(e) {
    super.update(e), this.validateInputUserGroup(e);
  }
  /**
    * Get validation issues
    */
  validate() {
    return this.issues;
  }
  get joinDimension() {
    return this.direction === "horizontal" ? "w" : "l";
  }
  get excludedFields() {
    return ["proximity"];
  }
  get compressExcludedFields() {
    return ["issues", "stockMatch"];
  }
}
function Ro(t) {
  return {
    entities: /* @__PURE__ */ new Map(),
    stockList: [],
    shapeList: [],
    ...t
  };
}
function Rs(t, e) {
  if (Array.isArray(e))
    for (const i of e)
      i && typeof i == "object" && (i.autoId && t.entities.set(i.autoId, i), i.id && i.id !== i.autoId && t.entities.set(i.id, i));
}
function Jf(t, e) {
  if (e) {
    if (e && typeof e == "object" && typeof e.getType == "function")
      return e;
    if (typeof e == "string")
      return t.entities.get(e);
    if (e && typeof e == "object" && e.autoId)
      return t.entities.get(e.autoId);
  }
}
function ea(t, e) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t))
    return t.map((s) => ea(s, e));
  if (typeof t.getType == "function")
    return t;
  if (t.__ref && (t.id || t.autoId)) {
    const s = t.autoId || t.id;
    return Jf(e, s) || t;
  }
  const i = { ...t };
  for (const s in i)
    Object.prototype.hasOwnProperty.call(i, s) && (i[s] = ea(i[s], e));
  return i;
}
function Ta(t, e, i) {
  if (t == null || t && typeof t == "object" && typeof t.getType == "function")
    return t;
  if (Array.isArray(t))
    return t.every((o) => o && typeof o == "object" && typeof o.getType == "function") ? t : t.map((o) => Ta(o, e));
  if (!t || typeof t != "object" || !t.__entityType && !t.__ref && !t.type)
    return t;
  const s = t.__entityType;
  e?.preventAutoRotation && s && (s === le.Rectangle || s === le.Placeable || s === le.Container || s === le.Shape || s === le.Group || s === le.Offcut || s === le.Stock || s === le.Segment) && (t.preventAutoRotation = !0), e && (t.__context = e);
  const n = t.__ref || s, a = ps();
  if (n && a.has(n)) {
    const r = a.get(n), { __ref: o, __entityType: l, __context: c, ...u } = t, f = new r(u);
    return f.issues && Array.isArray(f.issues) && (f.issues = f.issues.map((h) => h instanceof ue ? h : ue.fromData(h, f))), f.warnings && Array.isArray(f.warnings) && (f.warnings = f.warnings.map((h) => h instanceof ue ? h : ue.fromData(h, f))), f;
  }
  return delete t.__context, t;
}
function Si(t, e) {
  if (e || (e = Ro()), Array.isArray(t)) {
    const n = [];
    for (const a of t) {
      const r = Si(a, e);
      n.push(r), r && typeof r == "object" && (r.autoId || r.id) && Rs(e, [r]);
    }
    return n;
  }
  if (t && typeof t == "object" && typeof t.getType == "function")
    return (t.autoId || t.id) && Rs(e, [t]), t;
  const i = ea(t, e), s = Ta(i, e);
  return s && typeof s == "object" && (s.autoId || s.id) && Rs(e, [s]), s;
}
function uw(t, e) {
  const i = Ro(e), s = t?.saw ? Si(t.saw, i) : void 0;
  s && Rs(i, [s]);
  const n = t?.stockList ? Si(t.stockList, i) : [];
  n.length > 0 && (i.stockList = n);
  const a = t?.shapeList ? Si(t.shapeList, i) : [];
  a.length > 0 && (i.shapeList = a);
  const r = t?.cutList ? Si(t.cutList, i) : [], o = t?.segmentList ? Si(t.segmentList, i) : [];
  o.length > 0 && (i.segmentList = o);
  const l = t?.offcuts ? Si(t.offcuts, i) : [];
  return {
    saw: s,
    stockList: n,
    shapeList: a,
    cutList: r,
    segmentList: o,
    offcuts: l,
    context: i
  };
}
function dw(t, e = [], i) {
  return t?.length ? e?.length ? t.map((n) => Xf(n, e, i)).filter((n) => Ze(n)) : [] : [];
}
function Xf(t, e, i) {
  if (t.type === "user") {
    const n = e.find((a) => a.id === t.id);
    n && (e = n.shapes);
  }
  t.container = i;
  let s = [];
  t.shapes && (s = t.shapes.map((n) => {
    if (n && n.__ref && (n.autoId || n.id)) {
      const a = n.autoId || n.id;
      return e.find((r) => r.autoId === a || r.id === a);
    }
    return n && n.id ? e.find((a) => a.id === n.id) : n;
  }).filter(Boolean)), t.shapes = s;
  try {
    const n = ps(), a = n.get("Group") || n.get(le.Group);
    if (a) {
      const r = new a(t);
      return r.shapes && Array.isArray(r.shapes) && r.shapes.forEach((o) => {
        o && typeof o == "object" && o.group && (o.group.reference = r, o.group.inGroup = !0, r.added && (o.group.addedAsGroup = r.id || r.autoId));
      }), r;
    }
    return !1;
  } catch {
    return !1;
  }
}
function fw(t, e) {
  Ht() && (t.stocks && t.stocks.forEach((i, s) => {
    Rt(i) || console.warn(`[${e}] Stock at index ${s} is not a proper Stock instance:`, i);
  }), t.shapes && t.shapes.forEach((i, s) => {
    !ut(i) && !Ze(i) && console.warn(`[${e}] Shape at index ${s} is not a proper Shape/Group instance:`, i);
  }), t.segments && t.segments.forEach((i, s) => {
    Ni(i) || console.warn(`[${e}] Segment at index ${s} is not a proper Segment instance:`, i);
  }), t.groups && t.groups.forEach((i, s) => {
    Ze(i) || console.warn(`[${e}] Group at index ${s} is not a proper Group instance:`, i);
  }), t.inputUserGroups && t.inputUserGroups.forEach((i, s) => {
    zt(i) || console.warn(`[${e}] InputUserGroup at index ${s} is not a proper InputUserGroup instance:`, i);
  }));
}
function hw(t, e) {
  return Math.random() * (e - t) + t;
}
function pw(t, e, i = "x") {
  if (!e) return !1;
  const s = i === "x" ? "l" : "w";
  return !!(he.greaterThanOrEqualTo(t[i], e[i]) && he.lessThanOrEqualTo(t[i] + t[s], e[i] + e[s]));
}
function gw(t, e, i = "x") {
  if (!e) return !1;
  const s = Qf(i);
  return !!(he.greaterThanOrEqualTo(t[i], e[i]) && he.lessThan(t[i], e[i] + e[s]));
}
function mw(t) {
  return t === "l" ? "x" : t === "w" ? "y" : null;
}
function Qf(t) {
  return t === "x" ? "l" : t === "y" ? "w" : null;
}
const eh = lf;
function yw(t, e = null) {
  return e ? t.filter((i) => i.added && i?.stock?.id === e.id) : t.filter((i) => i.added);
}
function or(t, e) {
  if (!Ae(t.stockLock) || Array.isArray(t.stockLock) && !t?.stockLock?.length)
    return !0;
  if (Array.isArray(t.stockLock)) {
    if (t.stockLock.includes(e.parentId)) return !0;
  } else if (t.stockLock === e.parentId) return !0;
  return !1;
}
function bw(t, e = null, i = "filter", s = !1) {
  if (!t?.length) return [];
  function n(a) {
    if (s === !0) return a.added;
    if (s === !1) return !a.added;
    if (s === null) return !0;
  }
  if (e) {
    if (e?.saw?.stockType === "linear")
      return t[i]((a) => n(a) && !a.group?.inGroup && or(a, e) && a.l <= e.l);
    if (e?.saw?.stockType !== "roll")
      return e && Rt(e) ? t[i]((a) => n(a) && !a.group?.inGroup && or(a, e) && a.willItFit(e)) : t[i]((a) => n(a) && !a.group?.inGroup && a.willItFit(e));
  }
  return t[i]((a) => n(a) && !a.group?.inGroup);
}
function vw(t, e = !1, i = !1) {
  if (!t?.length) return [];
  let s = t;
  if (e !== null && (s = t.filter((o) => o.added === e), !s.length))
    return [];
  const n = /* @__PURE__ */ new Map(), a = i ? /* @__PURE__ */ new Map() : null, r = [];
  for (const o of s) {
    let l;
    if (ut(o))
      l = o.parentId;
    else if (Ze(o))
      l = o.id;
    else
      continue;
    if (!n.has(l)) {
      if (n.set(l, !0), a) {
        const c = o.l <= o.w, u = c ? o.l : o.w, f = c ? o.w : o.l, h = u + "-" + f + "-" + o.orientationLock;
        if (a.has(h)) continue;
        a.set(h, !0);
      }
      r.push(o);
    }
  }
  return r;
}
function ww(t, e = null) {
  const i = t.filter((a) => !a?.unusable && (e === null || a.used === e)), s = /* @__PURE__ */ new Map();
  for (const a of i) {
    const r = a.parentId;
    s.has(r) || s.set(r, a);
  }
  return Array.from(s.values());
}
function Sw(t, e = null) {
  function i(n) {
    if (e === !0) return n.used;
    if (e === !1) return !n.used;
    if (e === null) return !0;
  }
  t.sort((n, a) => n.material && a.material && n.material !== a.material ? n.material.localeCompare(a.material) : n.t && a.t && n.t !== a.t ? n.t - a.t : n.id.localeCompare(a.id));
  const s = /* @__PURE__ */ new Map();
  for (const n of t) {
    if (!i(n)) continue;
    const a = `${n.l}-${n.w}-${n.t}-${n.material}`;
    s.has(a) || s.set(a, n);
  }
  return Array.from(s.values());
}
function xw(t, e, i) {
  const s = t.filter((a) => a[e] === 0), n = e === "y" ? "l" : "w";
  return s.reduce((a, r, o) => o > 0 ? a + r[n] + i : a + r[n], 0);
}
function kw(t, e) {
  const i = e === "x" ? "l" : "w", s = eh(e);
  if (!t?.length) return null;
  const n = t.reduce((r, o) => r[e] + r[i] > o[e] + o[i] ? r : o);
  return t.filter((r) => r[e] === n[e] && r[i] === n[i]).sort((r, o) => r[s] - o[s])[0];
}
function th(t, e, i) {
  if (e.length <= 1) return t;
  const s = nh(e, i), n = t.reduce((o, l) => (o[l.id] = ah(l, s), o), {}), a = Math.min(...Object.values(n));
  return t.filter((o) => !o.added && n[o.id] === a);
}
function ih(t, e) {
  const i = e.parentId;
  return t.filter((s) => s.parentId === i).length;
}
function sh(t, e) {
  const i = e.parentId, s = t.filter((n) => n.used && n.parentId === i).length;
  return e.q - s;
}
function Iw(t, e) {
  return ih(t, e) < e.q;
}
function nh(t, e) {
  const i = {};
  return t.forEach((s) => i[s.parentId] = sh(e, s)), i;
}
function ah(t, e) {
  return t.stockLock.reduce((s, n) => s + (e?.[n] ? e[n] : 0), 0);
}
function rh(t, e, i = !1) {
  const s = /* @__PURE__ */ new Map(), n = [], a = /* @__PURE__ */ new Set();
  for (let r = 0; r < t.length; r++) {
    const o = t[r], l = o.autoId;
    if (s.has(l)) {
      const c = s.get(l);
      c && (n.push(c.item), s.set(l, null)), n.push(o), a.add(r);
    } else
      s.set(l, { item: o, index: r });
  }
  if (n.length > 0) {
    const r = e ? ` [${e}]` : "", o = [...new Set(n.map((l) => l.autoId))];
    if (console.warn(`[duplicateIdsPresent]${r} Found duplicates!`), console.warn(`  Total items: ${t.length}`), console.warn(`  Duplicate autoIds: ${o.join(", ")}`), n.forEach((l) => {
      console.warn(`  ${l.id} (autoId=${l.autoId}): added=${l.added}, x=${l.x}, y=${l.y}, isGroup=${!!l.shapes}`);
    }), i) {
      const l = Array.from(a).sort((c, u) => u - c);
      for (const c of l)
        t.splice(c, 1);
      console.warn(`  Removed ${l.length} duplicate items. New length: ${t.length}`);
    }
  }
  return n.length > 0;
}
function Pw(t, e) {
  return t.filter((i) => i.l >= e && i.w >= e);
}
function oh(t, e) {
  if (t.stock?.autoId !== e.stock?.autoId) return !1;
  const i = t.x, s = t.x + t.l, n = t.y, a = t.y + t.w, r = e.x, o = e.x + e.l, l = e.y, c = e.y + e.w;
  return !(s <= r || // shape1 is completely to the left of shape2
  o <= i || // shape2 is completely to the left of shape1
  a <= l || // shape1 is completely below shape2
  c <= n);
}
function Cw(t) {
  const e = [], i = t.filter((s) => s.added);
  for (let s = 0; s < i.length; s++)
    for (let n = s + 1; n < i.length; n++)
      oh(i[s], i[n]) && e.push({
        shape1: i[s],
        shape2: i[n]
      });
  return e;
}
function Aw(t) {
  t.sort(Kt.groupPlacementOrder);
  for (let e = 0; e < t.length; e++)
    t[e].placementOrder = e;
}
function Tw(t, e) {
  e && t && (e.score = t.score, e.duplicatePattern = t.id);
}
let jo = () => {
};
function Ow(t) {
  jo = t;
}
function en(t, e, i, s, n) {
  jo(t, e, i, s, n);
}
class li extends it {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Ud;
  static computedProperties = Yd;
  /**
   * Leave serializationProperties empty to trigger automatic enumeration
   * We use serializationExcludedProperties for exclusion-based approach
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   */
  static serializationExcludedProperties = [
    // All private fields (starting with _) are automatically excluded by AutoSerializable
  ];
  constructor(e = {}) {
    super(e), this.points instanceof Map || (this.points = new Map(Object.entries(this.points || {})));
  }
  /**
   * Get entity type
   */
  getType() {
    return le.PointCollection;
  }
  /**
   * Add a point to the collection
   */
  add(e, i) {
    if (this.contains(e)) {
      const n = this.getPoint(e);
      n.type === "group" && !i && (n.type = void 0);
      return;
    }
    e.validate(), i && (e.type = i);
    const s = this.createKey(e);
    this.points.set(s, e);
  }
  /**
   * Add multiple points to the collection
   */
  addPoints(e, i) {
    for (const s of e) {
      if (!s) return;
      s.validate(), this.add(s, i);
    }
  }
  /**
   * Get a point by coordinates
   */
  get(e, i) {
    const s = `${e},${i}`;
    return this.points.get(s);
  }
  /**
   * Check if a point exists
   */
  has(e, i) {
    const s = `${e},${i}`;
    return this.points.has(s);
  }
  /**
   * Remove a point
   */
  remove(e, i) {
    const s = `${e},${i}`;
    return this.points.delete(s);
  }
  /**
   * Clear all points
   */
  clear() {
    this.points.clear();
  }
  /**
   * Get all points as array
   */
  toArray() {
    return Array.from(this.points.values());
  }
  /**
   * Iterate over points
   */
  forEach(e) {
    this.points.forEach(e);
  }
  /**
   * Create from array of points
   */
  static fromArray(e) {
    const i = new li();
    return e.forEach((s) => i.add(s)), i;
  }
  /**
   * Add multiple points at once
   */
  addMultiple(e) {
    e.forEach((i) => this.add(i));
  }
  /**
   * Alias for addMultiple
   */
  adds(e) {
    this.addMultiple(e);
  }
  /**
   * Create a key from a point
   */
  createKey(e) {
    return `${e.x},${e.y}`;
  }
  /**
   * Get a point by Point object
   */
  getPoint(e) {
    return this.points.get(this.createKey(e));
  }
  /**
   * Check if a point exists by Point object
   */
  contains(e) {
    return this.points.has(this.createKey(e));
  }
  /**
   * Delete a point by Point object
   */
  deletePoint(e) {
    e.validate(), this.points.delete(this.createKey(e));
  }
  /**
   * Delete multiple points
   */
  deletePoints(e) {
    for (const i of e)
      i.validate(), this.deletePoint(i);
  }
}
function lh(t, e, i, s = !0) {
  if (!t || !e || !i) return !1;
  if (t.autoId === e.autoId)
    throw console.error("[collision] ERROR: Shape/group is in testShapes array!"), console.error(`  thisShape: ${t.autoId} (${t.id})`), console.error(`  testShape: ${e.autoId} (${e.id})`), console.error(`  thisShape === testShape: ${t === e}`), new Error(`collision comparing to self ${t.autoId}, ${e.autoId}`);
  const n = s ? i.bladeWidth : 0, a = t.x + t.l + n, r = e.x + e.l + n;
  if (!he.lessThan(t.x, r) || !he.greaterThan(a, e.x))
    return !1;
  const o = t.y + t.w + n, l = e.y + e.w + n;
  return he.lessThan(t.y, l) && he.greaterThan(o, e.y);
}
function ch(t, e, i) {
  for (const s of e)
    if (t.autoId !== s.autoId && lh(t, s, i))
      return !0;
  return !1;
}
function Lw(t, e, i, s = !1) {
  if (!i || !i.length) return !1;
  if (!t?.dimension)
    throw new Error("no line direction provided to collisionWithShapes");
  const n = e.bladeWidth / 2;
  t.shapeCollisions = t.shapeCollisions || [], i = i.filter((a) => a.added);
  for (const a of i) {
    let r = !1, o = !1;
    if (t.dimension === "l" ? (r = he.greaterThan(t.x2, a.x) && he.lessThan(t.x1, a.x + a.l), o = he.greaterThan(t.y1 + n, a.y) && he.lessThan(t.y1 - n, a.y + a.w)) : t.dimension === "w" && (r = he.greaterThan(t.x1 + n, a.x) && he.lessThan(t.x1 - n, a.x + a.l), o = he.greaterThan(t.y2, a.y) && he.lessThan(t.y1, a.y + a.w)), r && o)
      if (s) t.shapeCollisions.push(a);
      else return !0;
  }
  return s ? t.shapeCollisions : t.shapeCollisions.length > 0;
}
function di(t, e, i, s, n = null, a = null) {
  return new xi({ x1: t, y1: e, x2: i, y2: s, origin: n, type: a });
}
function uh(t, e) {
  const i = t.getCorners(), s = {};
  return i.bottomLeft.x > 0 && i.bottomLeft.y > 0 && (s.bottomLeftDown = di(
    i.bottomLeft.x,
    i.bottomLeft.y,
    i.bottomLeft.x,
    0,
    "bottomLeft",
    "bottomLeftDown"
  ), s.bottomLeftLeft = di(
    i.bottomLeft.x,
    i.bottomLeft.y,
    0,
    i.bottomLeft.y,
    "bottomLeft",
    "bottomLeftLeft"
  )), i.topLeft.x > 0 && i.topLeft.y < e.w && (s.topLeftLeft = di(
    i.topLeft.x,
    i.topLeft.y,
    0,
    i.topLeft.y,
    "topLeft",
    "topLeftLeft"
  ), s.topLeftTop = di(
    i.topLeft.x,
    i.topLeft.y,
    i.topLeft.x,
    e.w,
    "topLeft",
    "topLeftTop"
  )), i.topRight.y < e.w && i.topRight.x < e.l && (s.topRightTop = di(
    i.topRight.x,
    i.topRight.y,
    i.topRight.x,
    e.w,
    "topRight",
    "topRightTop"
  ), s.topRightRight = di(
    i.topRight.x,
    i.topRight.y,
    e.l,
    i.topRight.y,
    "topRight",
    "topRightRight"
  )), i.bottomRight.x < e.l && i.bottomRight.y > 0 && (s.bottomRightRight = di(
    i.bottomRight.x,
    i.bottomRight.y,
    e.l,
    i.bottomRight.y,
    "bottomRight",
    "bottomRightRight"
  ), s.bottomRightDown = di(
    i.bottomRight.x,
    i.bottomRight.y,
    i.bottomRight.x,
    0,
    "bottomRight",
    "bottomRightDown"
  )), s;
}
function ms(t, e, i = null) {
  if (t.has(e.x, e.y)) {
    const s = t.get(e.x, e.y);
    s.type === "group" && !i && (s.type = void 0);
    return;
  }
  i && (e.type = i), t.add(e);
}
function js(t, e, i = null) {
  for (const s of e) {
    if (!s) return;
    ms(t, s, i);
  }
}
function Be(t, e, i, s, n) {
  const a = dh[t](e, i);
  return s && (a.corner = s), n && (a.direction = n), a;
}
const dh = {
  bottom: (t, e) => {
    const i = t.cloneAt(t.x, t.y - e);
    return i.grid = "bottom", i;
  },
  bottomLeft: (t, e) => {
    const i = t.cloneAt(t.x - e, t.y - e);
    return i.grid = "bottomLeft", i;
  },
  bottomRight: (t, e) => {
    const i = t.cloneAt(t.x + e, t.y - e);
    return i.grid = "bottomRight", i;
  },
  left: (t, e) => {
    const i = t.cloneAt(t.x - e, t.y);
    return i.grid = "left", i;
  },
  centre: (t) => {
    const e = t.cloneAt(t.x, t.y);
    return e.grid = "centre", e;
  },
  right: (t, e) => {
    const i = t.cloneAt(t.x + e, t.y);
    return i.grid = "right", i;
  },
  top: (t, e) => {
    const i = t.cloneAt(t.x, t.y + e);
    return i.grid = "top", i;
  },
  topLeft: (t, e) => {
    const i = t.cloneAt(t.x - e, t.y + e);
    return i.grid = "topLeft", i;
  },
  topRight: (t, e) => {
    const i = t.cloneAt(t.x + e, t.y + e);
    return i.grid = "topRight", i;
  }
};
function fh(t, e, i) {
  const s = new li(), n = i.toArray().sort(Bo), a = e.bladeWidth;
  if (n.forEach((r) => {
    const o = r.corner, l = r.type;
    if (!a)
      s.add(r);
    else
      switch (o) {
        case "topRight":
          {
            const c = Be("top", r, a, o);
            l && (c.type = l), s.add(c);
            const u = Be("right", r, a, o);
            l && (u.type = l), s.add(u);
          }
          break;
        case "topLeft":
          {
            const c = Be("top", r, a, o);
            l && (c.type = l), s.add(c);
            const u = Be("left", r, a, o);
            l && (u.type = l), s.add(u);
          }
          break;
        case "bottomRight":
          {
            const c = Be("bottom", r, a, o);
            l && (c.type = l), s.add(c);
            const u = Be("right", r, a, o);
            l && (u.type = l), s.add(u);
          }
          break;
        case "bottomLeft":
          {
            const c = Be("bottom", r, a, o);
            l && (c.type = l), s.add(c);
            const u = Be("left", r, a, o);
            l && (u.type = l), s.add(u);
          }
          break;
      }
  }), a) {
    const r = s.toArray();
    for (let o = r.length; o--; ) {
      const l = r[o];
      i.has(l.x, l.y) && s.remove(l.x, l.y);
    }
  } else {
    const r = s.toArray();
    for (let o = r.length; o--; ) {
      const l = r[o];
      for (let c = t.length; c--; ) {
        const u = t[c];
        if (l.x === u.x && l.y === u.y) {
          s.remove(l.x, l.y);
          break;
        }
      }
    }
  }
  if (a) {
    const r = /* @__PURE__ */ new Set();
    let o, l, c, u;
    e?.constructor?.name === "Stock" && e?.trimmed || e?.constructor?.name === "Segment" ? (o = e.x, l = e.y, c = e.x + e.l, u = e.y + e.w) : (o = e.x + e?.trim?.l1, l = e.y + e?.trim?.w1, c = e.x + e.l - e?.trim?.l2, u = e.y + e.w - e?.trim?.w2);
    let f = s.toArray();
    for (let h = f.length; h--; ) {
      const g = f[h];
      (he.lessThan(g.x, o) || he.lessThan(g.y, l) || he.greaterThan(g.x, c) || he.greaterThan(g.y, u)) && f.splice(h, 1);
    }
    s.clear(), f.forEach((h) => s.add(h)), r.clear(), f = s.toArray();
    for (let h = f.length; h--; ) {
      const g = f[h];
      for (let k = t.length; k--; ) {
        const E = t[k];
        if (g.collidesWith(E)) {
          s.remove(g.x, g.y);
          break;
        }
      }
    }
  }
  return s;
}
function hh(t, e, i) {
  let s = [];
  const n = t.minSpacing, a = e.corner, r = e.direction;
  if (e.type === "shape")
    switch (a) {
      case "topLeft":
        r === "rl" && (s.push(Be("right", e, n, a, r)), s.push(Be("topRight", e, n, a, r))), r === "bt" && (s.push(Be("bottom", e, n, a, r)), s.push(Be("bottomLeft", e, n, a, r)));
        break;
      case "topRight":
        r === "lr" && (s.push(Be("left", e, n, a, r)), s.push(Be("topLeft", e, n, a, r))), r === "bt" && (s.push(Be("bottom", e, n, a, r)), s.push(Be("bottomRight", e, n, a, r)));
        break;
      case "bottomRight":
        r === "lr" && (s.push(Be("left", e, n, a, r)), s.push(Be("bottomLeft", e, n, a, r))), r === "tb" && (s.push(Be("top", e, n, a, r)), s.push(Be("topRight", e, n, a, r)));
        break;
      case "bottomLeft":
        r === "rl" && (s.push(Be("right", e, n, a, r)), s.push(Be("bottomRight", e, n, a, r))), r === "tb" && (s.push(Be("top", e, n, a, r)), s.push(Be("topLeft", e, n, a, r)));
        break;
    }
  else if (e.type === "edge")
    switch (r) {
      case "rl":
      case "lr":
        s.push(Be("top", e, 0)), s.push(Be("centre", e, 0)), s.push(Be("bottom", e, 0));
        break;
      case "tb":
      case "bt":
        s.push(Be("left", e, 0)), s.push(Be("right", e, 0)), s.push(Be("centre", e, 0));
        break;
    }
  if (s = s.filter((l) => l.x >= 0 && l.y >= 0), !s.length) return null;
  const o = new li();
  for (const l of s)
    l.raycast = !0, js(o, Go(t, l, i).toArray());
  return qo(t, i, o), o;
}
function ph(t, e) {
  const i = new li();
  return t.sort(Bo), t.forEach((s) => {
    Ze(s) ? (js(i, s.getCoords(e)), s.shapes.forEach((n) => {
      const a = n.getCoords(e);
      js(i, a, "group");
    })) : js(i, s.getCoords(e));
  }), i.points.forEach((s) => {
    s.stock = e.getStock;
  }), i;
}
function gh(t = [], e, i) {
  const s = ph(
    t === null ? e : t,
    i
  );
  return fh(
    e,
    i,
    s
  );
}
function Bo(t, e) {
  return t.y === e.y ? e.x - t.x : e.y - t.y;
}
function Vo(t, e, i, s, n, a) {
  t.a = e.id, t.b = i ? i.id : null, t.direction = s, t.raycast = !0, t.type = n, t.corner = a;
}
function mh(t, e) {
  if (t.saw.cutType !== "efficiency" || e.length <= 1) return null;
  let i = new li();
  const s = No(e, t);
  for (const o of e)
    for (const l of s) {
      if (l.shape.id === o.id) continue;
      const c = Object.values(l.rays).filter((u) => u !== void 0);
      for (const u of c)
        yh(
          u,
          l.shape,
          o,
          i
        );
    }
  const a = t.saw.efficiencyOptions.primaryCompression === "l" ? "lr" : "tb", r = e.reduce((o, l) => (a === "tb" ? o.x + o.l > l.x + l.l : o.y + o.w > l.y + l.w) ? o : l);
  return s.filter(({ shape: o }) => o.id === r.id).forEach(({ shape: o, rays: l }) => {
    const c = Object.values(l).filter((u) => u !== void 0);
    for (const u of c) {
      const f = new ct(u.x2, u.y2);
      a === u.direction && (Vo(f, o, null, u.direction, "edge"), ms(i, f));
    }
  }), i = bh(i), i;
}
function No(t, e) {
  return t.map((i) => {
    const s = uh(i, e);
    return {
      shape: i,
      rays: s
    };
  });
}
function yh(t, e, i, s) {
  switch (t.direction) {
    case "rl":
      Ts(
        t,
        e,
        i,
        s,
        i.x + i.l
      );
      break;
    case "lr":
      Ts(
        t,
        e,
        i,
        s,
        i.x
      );
      break;
    case "tb":
      Ts(
        t,
        e,
        i,
        s,
        i.y + i.w
      );
      break;
    case "bt":
      Ts(
        t,
        e,
        i,
        s,
        i.y
      );
      break;
  }
}
function Ts(t, e, i, s, n) {
  const a = t.dimension === "w", r = a ? "y" : "x", o = a ? "x" : "y", l = a ? "l" : "w";
  if (t[`${o}1`] >= i[o] && t[`${o}1`] <= i[o] + i[l]) {
    const c = t.direction === "lr" && t[`${r}1`] <= n && t[`${r}2`] >= n, u = t.direction === "rl" && t[`${r}1`] >= n && t[`${r}2`] <= n, f = t.direction === "bt" && t[`${r}1`] <= n && t[`${r}2`] >= n, h = t.direction === "tb" && t[`${r}1`] >= n && t[`${r}2`] <= n;
    if (c || u || f || h) {
      const k = a ? t[`${o}1`] : n, E = a ? n : t[`${o}1`], V = new ct(k, E), A = t.origin;
      Vo(V, e, i, t.direction, "shape", A), ms(s, V);
    }
  }
}
function bh(t) {
  const e = new li();
  return t.points.size === 0 || new Set(t.toArray().map((s) => s.a)).forEach((s) => {
    const n = t.toArray().filter((a) => a.a === s);
    ["right", "left", "top", "bottom"].forEach((a) => {
      const r = vh(
        n,
        a
      );
      r && ms(e, r);
    });
  }), e;
}
function vh(t, e) {
  return t.length === 0 ? null : t.reduce((i, s) => {
    switch (e) {
      case "left":
        return !i || s.x < i.x ? s : i;
      case "right":
        return !i || s.x > i.x ? s : i;
      case "top":
        return !i || s.y > i.y ? s : i;
      case "bottom":
        return !i || s.y < i.y ? s : i;
      default:
        return null;
    }
  }, null);
}
function Go(t, e, i) {
  const s = new li(), n = e.getAvailableShapePositions(i);
  for (const a of n) {
    let r;
    switch (r = wh(e, t, i), a) {
      case "bottomLeft":
        r = r.cloneAt(r.x - t.l, r.y - t.w), r.shapePosition = "bottomLeft";
        break;
      case "bottomRight":
        r = r.cloneAt(r.x, r.y - t.w), r.shapePosition = "bottomRight";
        break;
      case "topLeft":
        r = r.cloneAt(r.x - t.l, r.y), r.shapePosition = "topLeft";
        break;
      case "topRight":
        r = r.cloneAt(r.x, r.y), r.shapePosition = "topRight";
        break;
    }
    ms(s, r);
  }
  return qo(t, i, s), s;
}
function wh(t, e, i) {
  if (i.saw.cutType !== "efficiency") return t;
  const s = e.getMinSpacing(i.saw), n = i.bladeWidth;
  if (!s || s === n) return t;
  let a;
  if (!t.grid) return t;
  switch (t.grid) {
    case "bottom":
      a = t.cloneAt(t.x, t.y - s + n);
      break;
    case "top":
      a = t.cloneAt(t.x, t.y + s - n);
      break;
    case "left":
      a = t.cloneAt(t.x - s + n, t.y);
      break;
    case "right":
      a = t.cloneAt(t.x + s - n, t.y);
      break;
  }
  return a ? (a.x < 0 && (a.x = 0), a.y < 0 && (a.y = 0), a.adjustedForMinSpacing = !0, a) : t;
}
function qo(t, e, i) {
  let s, n, a, r;
  e?.constructor?.name === "Stock" && e?.trimmed || e?.constructor?.name === "Segment" ? (s = 0, n = 0, a = e.x + e.l - t.l, r = e.y + e.w - t.w) : (s = e?.trim?.l1, n = e?.trim?.w1, a = e.l - e?.trim?.l2 - t.l, r = e.w - e?.trim?.w2 - t.w);
  const o = i.toArray();
  for (let l = o.length; l--; ) {
    const c = o[l];
    (he.lessThan(c.x, s) || he.lessThan(c.y, n) || he.greaterThan(c.x, a) || he.greaterThan(c.y, r) || c.x < 0 || c.y < 0) && i.remove(c.x, c.y);
  }
}
function Sh(t, e, i = null) {
  const s = /* @__PURE__ */ new Map();
  for (let n = t.length; n--; ) {
    const a = t[n], r = Co(a, e.getStock), o = a.shortSide, l = a.longSide;
    r.forEach((c) => {
      if (!a.willItFit(e, c)) return;
      let u;
      !i || i === "l" ? u = c === 0 ? l : o : i === "w" && (u = c === 0 ? o : l), u && s.set(
        u,
        s.has(u) ? s.get(u) + 1 : 1
      );
    });
  }
  return s;
}
function ta(t, e) {
  if (t?.length)
    for (let i = t.length; i--; ) {
      const s = t[i];
      xh(
        s,
        e
      );
    }
}
function xh(t, e) {
  if (!t.isSquare) {
    if (t.shortSide === e.w && t.rot) {
      if (!ht(
        t,
        0,
        e
      ))
        throw new Error(
          "could not rotate shape correctly for subset calculation"
        );
    } else if (!e.isSquare && t.longSide === e.w && !t.rot && !ht(
      t,
      1,
      e
    ))
      throw new Error(
        "could not rotate shape correctly for subset calculation"
      );
  }
}
function Fw(t, e, i = "l", s = null) {
  if (!t || !e?.length) return !1;
  e.forEach((u) => u.orientationLock = null), ta(
    e,
    t
  );
  const n = t.bladeWidth, a = [];
  let r = this.config.subset.shuffles;
  (e.length === 1 || e[0].parentId === e[e.length - 1].parentId) && (r = 1), i === "l" ? e.sort(
    Kt.LD
  ) : e.sort(
    Kt.WD
  ), s || (s = e[0]);
  function o(u, f = !0) {
    f && Kt.shuffle(
      e
    );
    const h = ia(
      n,
      e,
      t.getStock,
      i,
      t[i],
      !1,
      s
    );
    h !== !1 && u.push(
      h
    );
  }
  o(
    a,
    !1
  );
  for (let u = r; u--; ) o(
    a
  );
  if (a.sort(
    (u, f) => f.score.efficiency - u.score.efficiency
  ), !a.length) return !1;
  const l = a[0];
  let c = null;
  return l.totalLength + n < t.l && (c = t.l - (l.totalLength + n), l.offcut = c), l;
}
function kh(t, e, i, s = "l", n, a = !1, r = this.config.subset.shuffles, o = null, l = this.config.subset.efficiency.limit) {
  if (!e?.length) return !1;
  const c = [], u = [
    (k, E) => E[s] - k[s],
    // Largest first
    (k, E) => k[s] - E[s],
    // Smallest first
    (k, E) => E[s] / E.area - k[s] / k.area,
    // Best dimension-to-area ratio
    (k, E) => E.area - k.area,
    // Largest area first
    (k, E) => k.area - E.area
    // Smallest area first
  ], f = e.every(
    (k, E, V) => E === 0 || k.isIdentical(V[E - 1])
  );
  if (!a) {
    const k = e.reduce((E, V) => E + V[s] + t, 0) - t;
    if (k <= n)
      return k / n > l ? {
        totalLength: k,
        shapes: e,
        firstShape: e[0],
        firstShapeRotation: e[0].rot,
        stock: i,
        cutType: "guillotine",
        type: "subset",
        score: {
          efficiency: k / n,
          totalShapesPlaced: e.length
        },
        area: e.reduce((E, V) => E + V.area, 0)
      } : !1;
  }
  const h = ia(t, e, i, s, n, a, o);
  if (h !== !1 && (c.push(h), h.score.efficiency > 0.95 && e.length > 10))
    return h;
  if (f)
    return c[0] || !1;
  const g = Math.min(r, u.length);
  for (let k = 0; k < g; k++) {
    const E = [...e];
    E.sort(u[k % u.length]);
    const V = ia(t, E, i, s, n, a, o);
    if (V !== !1 && (c.push(V), V.score.efficiency > 0.98 && e.length > 30))
      break;
  }
  return c.sort((k, E) => E.score.efficiency - k.score.efficiency), c[0] || !1;
}
function ia(t, e, i, s = "l", n, a = !1, r = null) {
  if (!n || n <= 0 || e?.length < 1) return !1;
  let o = 0;
  const l = [];
  if (r || (r = e[0]), l.push(r), o = r[s], o > n) return !1;
  const c = e.findIndex(
    (u) => u.id === r?.id
  );
  c > -1 && e.splice(c, 1);
  for (const u of e) {
    const f = u[s], h = u.getMinSpacing(
      i.saw,
      !0
    );
    if (!(o + t + h + f > n) && (o += t + h + f, l.push(u), o + t + h >= n))
      break;
  }
  if (r && e.splice(
    c,
    0,
    r
  ), !a && o <= n || a && o + t >= n && o <= n) {
    const u = o / n;
    return u > 1 && console.error(
      "subset created effieciency > 1"
    ), {
      type: "subset",
      totalLength: o,
      shapes: l,
      stock: i,
      cutType: "guillotine",
      score: { efficiency: u, totalShapesPlaced: l.length },
      firstShape: r,
      firstShapeRotation: r?.rot,
      area: l.reduce(
        (f, h) => f + h.area,
        0
      )
    };
  }
  return !1;
}
function Ih(t, e, i = null, s = "l", n = !0, a = !0) {
  if (!t?.length) return;
  if (!e) throw new Error(
    "positionShapes requires stock"
  );
  const r = s === "l" ? "x" : "y", o = s === "l" ? "y" : "x";
  let l = 0;
  Ze(i) ? ta(
    t,
    i
  ) : ta(
    t,
    i ?? e
  ), a && (s === "l" ? t.sort(
    Kt.LDIDA
  ) : t.sort(
    Kt.WDIDA
  )), t.forEach(
    (c, u) => {
      c[r] = i ? i[r] + l : l, i && (c[o] = i[o]), l += c[r === "x" ? "l" : "w"] + e.bladeWidth + c.getMinSpacing(e.saw, !0), yt(
        [() => Je(
          l
        ).to.be.a(
          "number"
        )]
      ), Ze(i) ? c.group.placementOrder = u : c.placementOrder = u, n && c.addToStock(e);
    }
  );
}
function $w(t = null, e, i, s = "l") {
  if (!e) return [];
  if (!t) return [];
  i.sort(
    Kt.ID
  );
  const n = t.shapes;
  return Ih(
    n,
    e,
    null,
    s
  ), n;
}
function Dw(t, e, i) {
  en("subset", `guillotine subset for segment ${t.id}`);
  function s(S, D = []) {
    const { shapes: C } = a(S);
    return C.filter((F) => {
      if (F.added || D.find((Y) => Y.id === F.id)) return !1;
      if (F.orientationLock)
        return he.equalTo(F[u], S) ? he.lessThanOrEqualTo(F.l, t.l) && he.lessThanOrEqualTo(F.w, t.w) : !1;
      if (he.equalTo(F.l, S) || he.equalTo(F.w, S)) {
        const Y = he.equalTo(F.l, S) ? F.w : F.l;
        return he.lessThanOrEqualTo(Y, t[t.cutPreference]);
      }
      return !1;
    });
  }
  function n(S, D, C, F = null) {
    let Y = s(
      S,
      D
    );
    if (F) {
      const z = Y.find(
        (m) => m.parentId === F.parentId
      );
      if (z) return z;
    }
    if (!Y.length) return !1;
    const M = [];
    for (const z of Y) {
      const m = z.l === S ? z.w : z.l;
      C.includes(m) && M.push(z);
    }
    return Y = M.length ? M : Y, Lo(Y);
  }
  function a(S) {
    const D = S;
    return A.has(D) || A.set(D, { shapes: [], priorities: [] }), A.get(D);
  }
  function r(S = null) {
    function D(F, Y, M) {
      const { shapes: ce, priorities: z } = a(Y);
      ce.includes(F) || (ce.push(F), z.push(M));
    }
    if (!g?.length) return A;
    const C = t.getStock;
    for (const F of g) {
      let Y = F.getPriority(C);
      S && F.parentId !== S.parentId && (Y = 0);
      const M = ni(u);
      if (!F.orientationLock)
        F.longSide <= h && F.shortSide <= t[M] && D(F, F.l, Y), !F.isSquare && F.shortSide <= h && F.longSide <= t[M] && D(F, F.w, Y);
      else {
        const ce = Co(
          F,
          t.getStock
        );
        if (yt([() => Je(ce.length).to.equal(1)]), ht(
          F,
          ce[0],
          t.getStock
        ) === !1)
          throw new Error(
            "could not rotate shape correctly for subset calculation"
          );
        const m = ni(u);
        F[u] <= h && F[m] <= t[m] && D(F, F[u], Y);
      }
    }
    return A;
  }
  function o() {
    const S = [], D = Array.from(A.entries()).map(([F, { shapes: Y, priorities: M }]) => ({
      dimension: F,
      count: Y.length,
      totalPriority: Y.length * Math.max(...M, 0)
    }));
    let C = D.reduce((F, { totalPriority: Y }) => F + Y, 0);
    for (; D.length > 0; )
      if (C <= 0 || !Number.isFinite(C)) {
        const F = [];
        D.forEach(({ dimension: Y, count: M }) => {
          F.push(...Array(M).fill(Y));
        });
        for (let Y = F.length - 1; Y > 0; Y--) {
          const M = Math.floor(Math.random() * (Y + 1));
          [F[Y], F[M]] = [F[M], F[Y]];
        }
        S.push(...F);
        break;
      } else {
        const F = Math.random() * C;
        let Y = 0, M = -1;
        for (let W = 0; W < D.length; W++)
          if (Y += D[W].totalPriority, Y > F) {
            M = W;
            break;
          }
        M === -1 && (M = Math.floor(Math.random() * D.length));
        const { dimension: ce, count: z, totalPriority: m } = D[M];
        S.push(ce), D[M].count--, D[M].totalPriority -= m / z, D[M].count === 0 ? (C -= m, D.splice(M, 1)) : C -= m / z;
      }
    return S;
  }
  function l(S, D, C, F, Y, M, ce) {
    return C += S + D, F.push(S), Y.push(
      M.l === S ? M.w : M.l
    ), ce.push(M), C;
  }
  function c(S = null) {
    if (!g?.length) return [];
    if (!A.size) return [];
    const D = /* @__PURE__ */ new Map();
    let C = 0;
    const F = [], Y = [], M = [];
    let ce = null, z = !0;
    for (let K = 0; K < this.config.subset.guillotine.shuffles; K++) {
      C = 0, F.length = 0, Y.length = 0, M.length = 0, ce = null, z = !0;
      const R = o();
      for (const B of R) {
        if (z ? ce = B : ce = f + B, C + ce > h) continue;
        const G = n(
          B,
          Y,
          M,
          S
        );
        G && (C = l(
          B,
          z ? 0 : f,
          C,
          F,
          M,
          G,
          Y
        ), z = !1);
      }
      if (C) {
        const B = C / h;
        if (yt([() => Je(B).to.lessThanOrEqual(1)]), B < this.config.subset.efficiency.limit) continue;
        const G = Y.map((ne, ve) => ve);
        G.sort((ne, ve) => M[ve] !== M[ne] ? M[ve] - M[ne] : F[ve] - F[ne]);
        const N = G.map(
          (ne) => F[ne]
        ), U = G.map(
          (ne) => Y[ne]
        );
        yt([
          () => Je(rh(U)).to.be.false
        ]), D.set(
          N.join("-"),
          {
            usedDimensions: N,
            usedShapes: U,
            efficiency: B,
            target: h,
            totalLength: C,
            priorityShape: S ? S.parentId : null
          }
        );
      }
    }
    if (D.size === 0) return [];
    const m = Array.from(
      D.values()
    );
    m.sort(
      (K, R) => K.efficiency > R.efficiency ? -1 : K.efficiency < R.efficiency ? 1 : K.efficiency === R.efficiency ? R.usedDimensions.length - K.usedDimensions.length : 0
    );
    const W = m.slice(
      0,
      20
    );
    if (!W.length) return [];
    const ee = W.slice(
      0,
      typeof this.config.guillotine.stripShapes.iterations == "number" ? this.config.guillotine.stripShapes.iterations : 1
    );
    return ee.length ? (ee.forEach(
      (K) => {
        K.usedShapes.forEach(
          (R, B) => {
            const G = K.usedDimensions[B];
            yt([() => Je([R.l, R.w].includes(G)).to.be.true]);
            let N;
            R.isSquare ? N = 0 : R.longSide === G ? N = t.getStock.cutPreference === "l" ? 1 : 0 : N = t.getStock.cutPreference === "l" ? 0 : 1, R.guillotineState || (R.guillotineState = new ei({})), R.guillotineState.setStripShapeBatchGroup(V, {
              stockId: t.getStock.autoId,
              dimension: G,
              rot: N,
              order: B,
              //by this point sorting should have taken place
              priorityShape: K.priorityShape
            });
          }
        ), V++, yt(
          [
            () => {
              const R = K.usedDimensions.reduce(
                (N, U) => N + U,
                0
              ), B = (K.usedDimensions.length - 1) * f, G = R + B;
              return Je(he.lessThanOrEqualTo(G, h)).to.be.true;
            },
            () => Je(
              ee.every((R) => R.efficiency >= this.config.subset.efficiency.limit)
            ).to.be.true,
            () => Je(
              ee.every(
                (R) => R.usedDimensions.length === R.usedShapes.length
              )
            ).to.be.true
          ]
        );
      }
    ), ee) : [];
  }
  const u = ni(t.cutPreference), f = t.getStock.bladeWidth, h = t[u];
  yt([() => Je(h).to.be.a("number")]);
  const g = th(
    t.shapes.filter((S) => !Ze(S)),
    e,
    i
  ), k = t.getStock;
  g.sort((S, D) => {
    const C = D.getPriority(k) - S.getPriority(k);
    if (C !== 0) return C;
    const F = S.id.toString().split("."), Y = D.id.toString().split(".");
    return F[0] !== Y[0] ? parseInt(F[0]) - parseInt(Y[0]) : parseInt(F[1]) - parseInt(Y[1]);
  });
  const E = [];
  let V = 0;
  const A = /* @__PURE__ */ new Map();
  if (!this.config.priority.enable || t.type !== "root" || !t.shapes[0].getPriority(k)) {
    r();
    const S = c.call(this);
    E.push(...S);
  } else {
    const S = t.shapes[0];
    r(S);
    const D = Math.min(t.shapes.length, this.config.guillotine.stripShapes.numPriorityShapes);
    for (let C = 0; C < D; C++) {
      const F = c.call(this, S);
      E.push(...F);
    }
  }
  return en("subset", `${E.length} strip shape results ${E.map((S) => S.usedShapes.map((D) => D.id).join()).join(" | ")}`), E?.length ? E.length : 0;
}
function Ph(t) {
  const e = {};
  return t.forEach((i) => {
    i.shapeIds.forEach((s) => {
      const n = i.q || 1;
      e[s] ? e[s] += n : e[s] = n;
    });
  }), e;
}
function Ch(t, e, i = !0) {
  const s = Ph(t), n = [];
  for (const a in s) {
    const r = s[a], o = e.findIndex((u) => u.autoId === a), l = e[o], c = Oo({
      item: null,
      // No specific item context for this validation
      index: o >= 0 ? o : 0,
      shapeId: a,
      requiredQuantity: r,
      availableQuantity: Number(l?.q ?? 0),
      shapeName: l?.name,
      shapeIndex: o >= 0 ? o : void 0
    });
    n.push(...c);
  }
  return i && t.forEach((a) => {
    const r = a.validateWithShapes(e);
    r?.length && n.push(...r);
  }), n;
}
function zo(t) {
  const {
    shapes: e,
    container: i,
    targetSize: s,
    d: n,
    id: a,
    exact: r,
    groupDirection: o = "horizontal",
    firstShape: l = null,
    iterations: c,
    type: u = "position",
    tolerance: f = 1e-3,
    config: h
  } = t, g = c ?? h?.subset?.shuffles ?? 10;
  yt([
    () => Je(s).to.be.greaterThan(0)
  ]);
  const k = Ah(e, o, n, i, f);
  if (k.length < 2) return !1;
  const E = { config: h }, V = kh.call(
    E,
    i.bladeWidth,
    k,
    i.getStock,
    Oh(o),
    s,
    r,
    g,
    l
  );
  if (!V) return !1;
  if (V?.shapes?.length > 1 && V?.totalLength) {
    let A;
    try {
      A = new mn({
        id: a,
        direction: o,
        shapes: V.shapes,
        container: i,
        type: u
      }), en("groups", `[createGroup] Created group ${A.id} direction=${o} dims=${A.l}x${A.w} with ${A.shapes.length} shapes, [${A.shapes.map((S) => S.id).join()} for ${i.getType()} ${i.id}]`);
    } catch (S) {
      return console.error("group error", S), !1;
    }
    return A;
  }
  return !1;
}
function Ew(t) {
  const {
    shapes: e,
    container: i,
    targetSize: s,
    exact: n = !1,
    direction: a = "l",
    firstShape: r = null,
    preventDuplicates: o = !1,
    tolerance: l,
    maxGroups: c,
    config: u,
    counters: f,
    type: h
  } = t, g = l ?? u?.groups?.tolerance ?? 0.05;
  if (!Ae(s))
    throw new Error("attempting to create a group with no target size");
  if (s <= 0)
    return console.warn(`Invalid targetSize ${s} - cannot create groups with zero or negative target size`), [];
  if (!Ae(i))
    throw new Error("attempting to create a group with no container");
  if (!e?.length || e.length < 2) return [];
  const k = Wo(a), E = ni(a), V = k === "horizontal" ? i.w : i.l, A = i.getStock;
  let S = [...e], D = r;
  if (D)
    if (gf(
      D,
      D[E],
      E,
      A
    ) === !1)
      D = null;
    else {
      const ee = D[E], K = ee * (1 - g);
      let R = ee * (1 + g);
      R > i[E] && (R = i[E]), S = e.filter((B) => !ut(B) || B.autoId === D.autoId ? !1 : ir(
        B,
        K,
        R,
        E,
        A
      ));
    }
  const C = Sh(
    S,
    i,
    E
  ), F = Array.from(C.keys()).filter((W) => W <= V).sort((W, ee) => ee - W);
  if (F.length === 0) return [];
  const Y = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map();
  for (const W of S) {
    const ee = /* @__PURE__ */ new Map();
    for (const K of F) {
      const R = K * (1 - g);
      let B = K * (1 + g);
      B > i[E] && (B = i[E]);
      const G = ir(
        W,
        R,
        B,
        E,
        A
      );
      ee.set(K, G);
    }
    M.set(W.autoId, ee);
  }
  for (const W of F) {
    const ee = [];
    for (const K of S) {
      if (!ut(K)) continue;
      M.get(K.autoId)?.get(W) && ee.push(K);
    }
    Y.set(W, ee);
  }
  const ce = [], z = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Map();
  for (const W of F) {
    if (c !== void 0 && ce.length >= c)
      break;
    const ee = [];
    let K = Y.get(W).filter((R) => !z.has(R.autoId));
    if (!(K.length < 2)) {
      for (; K.length >= 2 && !(c !== void 0 && ce.length >= c); ) {
        let R, B = !1;
        if (ee.length && !o) {
          const G = ee[ee.length - 1], N = G.shapes.slice(), U = /* @__PURE__ */ new Set(), ne = new Set(K.map((we) => we.autoId)), ve = [];
          let ge = !0;
          for (const we of N) {
            let Le = !1;
            if (ne.has(we.autoId) && !U.has(we.autoId)) {
              const X = K.find((Ge) => Ge.autoId === we.autoId);
              X && (ve.push(X), U.add(we.autoId), Le = !0);
            }
            if (!Le)
              for (const X of K) {
                if (U.has(X.autoId)) continue;
                const Ge = `${X.autoId}-${we.autoId}`;
                if (m.has(Ge) || m.set(Ge, X.isIdentical(we)), m.get(Ge)) {
                  ve.push(X), U.add(X.autoId), Le = !0;
                  break;
                }
              }
            if (!Le) {
              ge = !1;
              break;
            }
          }
          if (ge && ve.length === N.length) {
            if (B = !0, G.positions?.length === ve.length)
              for (let we = 0; we < ve.length; we++) {
                const Le = ve[we], X = N[we], Ge = G.positions[we]?.rot ?? X.rot;
                if (Le.rot !== Ge && !ht(Le, Ge, i)) {
                  console.warn(`  Failed to rotate ${Le.id} to ${Ge} - skipping clone`), B = !1;
                  break;
                }
              }
            B && (yt([
              () => Je(ve.every((we, Le) => {
                const X = G.positions[Le]?.rot ?? N[Le].rot;
                return we.rot === X;
              }), "at least one identical group shape not rotated correctly").to.be.true
            ]), R = G.cloneWithNewShapes(ve));
          }
        }
        if (!B) {
          let G = "g" + (typeof f?.group == "number" ? f.group : 0);
          h === "firstShape" && (G = "fs-" + G), R = zo({
            shapes: K,
            container: i,
            targetSize: s,
            d: W,
            id: G,
            exact: n,
            groupDirection: k,
            firstShape: D,
            tolerance: g,
            config: u,
            type: h
          });
        }
        if (R) {
          typeof f?.group == "number" && f.group++, ee.push(R), R.shapes.forEach((N) => z.add(N.autoId));
          const G = [];
          for (const N of K)
            z.has(N.autoId) || G.push(N);
          if (K = G, K.length < 2) break;
        } else
          break;
      }
      ce.push(...ee);
    }
  }
  return ce;
}
function Ah(t, e, i, s, n = 1e-3) {
  return t.filter((a) => {
    const r = Ys(a, s);
    if (r) {
      const h = r === "w" ? 1 : 0;
      if (a.rot !== h && !ht(a, h, s))
        return !1;
    }
    if (a.isSquare) return !0;
    const o = i * (1 - n), l = i * (1 + n), c = a.l >= o && a.l <= l, u = a.w >= o && a.w <= l;
    let f = null;
    if (c && u) {
      const h = Math.abs(a.l - i), g = Math.abs(a.w - i);
      f = h <= g ? "l" : "w";
    } else c ? f = "l" : u && (f = "w");
    if (f !== null) {
      const h = Th(
        f,
        e,
        a.rot
      ), g = Ys(a, s), k = h ? 1 : 0;
      return g && (g === "l" && k === 1 || g === "w" && k === 0) || !Ct(a, h, s) ? !1 : ht(a, h, s);
    }
    return !1;
  });
}
function Th(t, e, i) {
  return e === null ? t === "l" : t === (e === "vertical" ? "l" : "w") ? i === 1 : i === 0;
}
function Wo(t) {
  if (!["l", "w"].includes(t)) throw new Error("incorrect direction value");
  if (t === "l") return "horizontal";
  if (t === "w") return "vertical";
}
function Oh(t) {
  if (!["horizontal", "vertical"].includes(t)) throw new Error("incorrect groupDirection value");
  if (t === "horizontal") return "l";
  if (t === "vertical") return "w";
}
function Lh(t, e, i) {
  return t.filter((s) => s.l === e[i] || s.w === e[i]);
}
function Fh(t, e) {
  const i = Array.isArray(e) ? e : [e], s = /* @__PURE__ */ new Set();
  for (const n of i)
    if (n.shapes?.length)
      for (const a of n.shapes)
        s.add(a.autoId);
  return t.filter((n) => Ze(n) || !s.has(n.autoId));
}
function $h(t, e = "") {
  const i = /* @__PURE__ */ new Set();
  t.filter(Ze).forEach((r) => {
    r.shapes?.forEach((o) => {
      i.add(o.autoId);
    });
  });
  const n = t.filter((r) => ut(r)).filter((r) => i.has(r.autoId)), a = e ? ` [${e}]` : "";
  Je(
    n.length,
    `${a} Found ${n.length} shapes that exist both in groups and independently: ${n.map((r) => r.id || r.autoId).join(", ")}`
  ).to.equal(0);
}
function Dh(t, e) {
  const i = [...t, e];
  i.sort((n, a) => (a.score?.total || 0) - (n.score?.total || 0));
  const s = i[0];
  if (s.score?.total && Ze(s) && (s.score?.total ?? 0) > (e.bestScore?.total ?? 0))
    return e.setBestScore(s), e.bestScore.group = s, s;
}
function _w(t) {
  const { container: e, containerPlacedShapes: i, unplacedShapes: s, shape: n, point: a, config: r, scoreFunction: o } = t;
  if (s.length < 3) return;
  let l = !1;
  n.orientationLock || (l = !0, n.orientationLock = n.rot === 1 ? "w" : "l");
  let c = [], u = [];
  Ni(e) ? u = [e.cutDirection] : u = e?.saw?.stockType === "roll" ? ["w"] : ["l", "w"];
  for (const g of u) {
    const k = ni(g), E = g === "l" ? "x" : "y", V = e[g] - n[E] - e.bladeWidth;
    if (V <= 0) continue;
    const A = Lh(
      s,
      n,
      k
    );
    if (A.length < 2) continue;
    const S = zo({
      shapes: A,
      container: e,
      targetSize: V,
      d: n[k],
      id: "g" + n.id + "-" + n.rot + "-" + g.substring(0, 1),
      exact: !1,
      groupDirection: Wo(g),
      firstShape: n,
      iterations: 40,
      config: {
        subset: r.subset
      }
    });
    S && c.push(S);
  }
  c.sort((g, k) => k.efficiency - g.efficiency), c.length > r.sample.groupSize && (c = c.slice(0, r.sample.groupSize)), yt([() => c.every((g) => !ut(g), "shapes in the groups array")]);
  for (const g of c)
    g.x = a.x, g.y = a.y, g.outOfBounds = g.x + g.l > e.l || g.y + g.w > e.w, !g.outOfBounds && (ch(g, i, e) || o(g, e, i, s, a));
  s.forEach((g) => g.resetGroupData());
  const f = Dh(c, n), h = c.filter((g) => Ze(g) && g !== f);
  return h.length > 0 && h.forEach((g) => {
    en("groups", `  Destroying group ${g.id} (${g.shapes?.length || 0} shapes)`), g.destroy();
  }), f && Ni(e) && (e.shapes.push(f), e.shapes = Fh(e.shapes, f)), l && (n.orientationLock = null), f && Ni(e) && yt([
    () => $h(e.shapes, "POSITION GROUPS")
  ]), f;
}
const Eh = j({
  id: p(),
  count: d(),
  name: p(),
  l: d(),
  w: d(),
  t: d(),
  material: p()
}), Oa = j({
  inputStock: re(Yt),
  inputShapes: re(mi),
  inputSaw: Ii,
  inputUserGroups: re(ka),
  // Centralized extras options for UI dropdowns
  extrasOptions: j({
    banding: j({
      options: re(p())
    }).optional(),
    finish: j({
      options: re(p())
    }).optional(),
    planing: j({
      options: re(p())
    }).optional()
  }).optional()
}).optional(), _h = j({
  // Banding metrics
  bandingLengthByType: Se(p(), d()).default({}),
  // Finish metrics (by face)
  finishAreaByType: Se(p(), d()).default({}),
  // Material summary with nested structure
  materialSummary: Se(
    p(),
    // material name
    Se(
      p(),
      // thickness
      j({
        used: d(),
        stacks: d(),
        bandingLengthByType: Se(p(), d())
      })
    )
  ).default({}),
  // Tallies
  usedStockTally: Se(p(), d()).default({}),
  addedPartTally: Se(p(), d()).default({}),
  // Cost metrics
  stockAreaCost: d().default(0),
  totalStockCost: d().default(0),
  // Machining metrics
  hasMachining: _().default(!1),
  numHoles: d().default(0),
  numCorners: d().default(0),
  // Efficiency metrics
  totalBandingLength: d().default(0),
  totalFinishArea: d().default(0),
  totalEfficiency: d().default(0),
  // Cutting metrics
  totalCutLength: d().default(0),
  totalStackedCutLength: d().default(0),
  totalCuts: d().default(0),
  totalStackedCuts: d().default(0),
  // Area metrics
  totalStockArea: d().default(0),
  totalStockUsedArea: d().default(0),
  totalStockUnusedArea: d().default(0),
  totalPartArea: d().optional(),
  // Legacy name
  totalPartsArea: d().default(0),
  totalUnusedPartsArea: d().default(0),
  totalOffcutsArea: d().default(0),
  totalOffcuts: d().default(0),
  totalBladeArea: d().default(0),
  totalTrimArea: d().default(0),
  // Additional metrics
  totalPartsProduced: d().optional(),
  totalUsedStock: d().optional(),
  totalRollLength: d().optional(),
  totalStockWeight: d().optional(),
  totalPartWeight: d().optional()
}), yn = _h.extend({
  bandingLengthByType: Se(p(), d()).default({}),
  unplacedParts: re(Eh).default([])
}), Mh = j({
  // Core optimization results
  stockList: Ne("Stock"),
  shapeList: Ne("Shape"),
  cutList: Ne("Cut").optional(),
  segmentList: Ne("Segment").optional(),
  offcuts: Ne("Offcut").optional(),
  saw: Oe("Saw"),
  unusableShapes: Ne("Shape").optional(),
  unavailableStock: Ne("Stock").optional(),
  evolutionVisData: re(j({})).optional(),
  performance: p().optional(),
  apiVersion: d().optional(),
  // Renamed from 'v'
  metadata: yn.optional(),
  credits: d().optional(),
  // Optional input data for debugging/API reporting
  inputs: Oa
});
j({
  // Job execution metadata
  success: _(),
  socketId: p().nullable().default(null),
  userId: p(),
  api: _(),
  app: _(),
  widget: _().optional(),
  cached: _().optional(),
  hash: p().optional(),
  webhook: p().optional(),
  config: be().optional(),
  error: p().optional(),
  jobId: d().optional(),
  // Input data
  inputs: Oa,
  // The actual optimization results
  optimisation: Mh
});
j({
  // Database metadata
  jobId: d().optional(),
  // Job execution data
  success: _(),
  socketId: p().nullable().default(null),
  userId: p(),
  api: _(),
  app: _(),
  widget: _().optional(),
  cached: _().optional(),
  hash: p().optional(),
  webhook: p().optional(),
  config: be().optional(),
  error: p().optional(),
  // Optimization results (flattened from optimization object)
  stockList: Ne("Stock"),
  shapeList: Ne("Shape"),
  cutList: Ne("Cut").optional(),
  segmentList: Ne("Segment").optional(),
  offcuts: Ne("Offcut").optional(),
  saw: Oe("Saw"),
  unusableShapes: Ne("Shape").optional(),
  unavailableStock: Ne("Stock").optional(),
  performance: p().optional(),
  metadata: yn.optional(),
  apiVersion: d().optional(),
  credits: d().optional(),
  // Input data
  inputs: Oa,
  // Computed fields for easier querying/display
  numParts: d().optional(),
  numStock: d().optional()
});
j({
  id: p().optional(),
  name: p().optional(),
  l: d(),
  w: d(),
  t: d().nullable().optional(),
  material: p().optional(),
  q: d().optional(),
  orientationLock: ye([
    xe(""),
    xe("l"),
    xe("w")
  ]).nullable().optional(),
  // Basic extras for display
  banding: be().optional(),
  finish: be().optional(),
  planing: be().optional()
});
const Rh = j({
  issues: re(p()),
  id: p(),
  duplicate: _(),
  name: p(),
  added: _(),
  x: d(),
  y: d(),
  l: d(),
  w: d(),
  t: d(),
  q: d().optional(),
  // Add quantity for checkout compatibility
  orientationLock: ye([
    xe(""),
    xe("l"),
    xe("w")
  ]),
  trim: j({
    l1: d(),
    l2: d(),
    w1: d(),
    w2: d()
  }),
  material: p(),
  banding: be(),
  // Using any for now, could use bandingPropertiesSchema
  bandingType: be(),
  // Legacy field
  finish: be(),
  // Using any for now, could use finishPropertiesSchema
  stock: j({ id: p() }),
  rot: _(),
  notes: p(),
  customData: Se(p(), ye([p(), d(), _()]))
});
j({
  issues: re(p()),
  id: p(),
  duplicate: _().optional(),
  name: p(),
  l: d(),
  w: d(),
  t: d().nullable(),
  material: p(),
  cost: d(),
  used: _(),
  grain: ye([
    xe(""),
    xe("l"),
    xe("w"),
    ri()
  ]).nullable(),
  trim: j({
    l1: d(),
    l2: d(),
    w1: d(),
    w2: d()
  }),
  parts: re(Rh),
  efficiency: d(),
  notes: p().optional(),
  // Legacy V1 fields
  blade: j({
    width: d()
  }).optional(),
  cutPreference: ye([
    xe("l"),
    xe("w"),
    xe("flex")
  ]).optional(),
  // Analysis data
  analysis: j({
    partArea: d(),
    totalParts: d(),
    areaEfficiency: d(),
    cutLength: d(),
    bandingLength: d(),
    numberOfCuts: d(),
    rollLength: d().optional()
  }).optional(),
  // Stack info
  stack: be().optional(),
  // Stock quantity for checkout compatibility
  q: d().optional()
});
const jh = (t, e, i) => {
  const s = t[e];
  return s ? typeof s == "function" ? s() : Promise.resolve(s) : new Promise((n, a) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
      a.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + e + (e.split("/").length !== i ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
}, Bh = /* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-CPHm8s6P.js"), "../translation/cs.json": () => import("./cs-C2S6J-mx.js"), "../translation/da.json": () => import("./da-CXzNOM9l.js"), "../translation/de.json": () => import("./de-B0qoHPXv.js"), "../translation/el.json": () => import("./el-B4FKY8xI.js"), "../translation/en.json": () => import("./en-D93wBCcl.js"), "../translation/es.json": () => import("./es-DRC67gaz.js"), "../translation/fi.json": () => import("./fi-D_GIqIcs.js"), "../translation/fr.json": () => import("./fr-Dist6drR.js"), "../translation/hi.json": () => import("./hi-BVnvWste.js"), "../translation/hr.json": () => import("./hr-DAxaRBza.js"), "../translation/hu.json": () => import("./hu-Clgva1zP.js"), "../translation/id.json": () => import("./id-DNHaXBcy.js"), "../translation/it.json": () => import("./it-D1A5KCdL.js"), "../translation/ja.json": () => import("./ja-ChQIIPoa.js"), "../translation/ko.json": () => import("./ko-B11PDMEM.js"), "../translation/ms.json": () => import("./ms-CQG5CzrQ.js"), "../translation/nl.json": () => import("./nl-B8K2sLmq.js"), "../translation/no.json": () => import("./no-DCE4N7Tb.js"), "../translation/pl.json": () => import("./pl-2ZUqXFM6.js"), "../translation/pt.json": () => import("./pt-BloOdAzA.js"), "../translation/ro.json": () => import("./ro-Y3DTWab1.js"), "../translation/ru.json": () => import("./ru-C1exjNAG.js"), "../translation/sk.json": () => import("./sk-Dlz6v4ti.js"), "../translation/sv.json": () => import("./sv-C7ajM1BQ.js"), "../translation/th.json": () => import("./th-CtTENspU.js"), "../translation/tr.json": () => import("./tr-bSDPqmmi.js"), "../translation/uk.json": () => import("./uk-DuECGuzi.js"), "../translation/vi.json": () => import("./vi-zAYpELt8.js"), "../translation/zh.json": () => import("./zh-CLUzozQ4.js") }), Ki = Object.keys(Bh).map((t) => {
  const e = t.match(/\/([a-zA-Z0-9_-]+)\.json$/);
  return e ? e[1] : "";
}).filter((t) => t !== "");
Ki.length === 0 && console.warn("[i18n] No language files found in ../translation/. Check paths and bundler setup for import.meta.glob.");
const sa = "en", It = Dr.createInstance();
function H(t, e) {
  if (Nr())
    return t;
  if (!It.isInitialized) {
    const s = Array.isArray(t) ? t.join(", ") : String(t);
    return console.warn(`[i18n] t function called before i18next was initialized. Key: ${s}. Returning key.`), s;
  }
  let i = It.t(t, e);
  return i = typeof i == "string" ? i : String(i), Hi(i);
}
const Os = {}, Vh = {
  type: "backend",
  init: () => {
  },
  // The `namespace` parameter will now be ignored by your backend logic
  read: async (t, e, i) => {
    try {
      if (Os[t]) {
        i(null, Os[t]);
        return;
      }
      const s = await jh(/* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-CPHm8s6P.js"), "../translation/cs.json": () => import("./cs-C2S6J-mx.js"), "../translation/da.json": () => import("./da-CXzNOM9l.js"), "../translation/de.json": () => import("./de-B0qoHPXv.js"), "../translation/el.json": () => import("./el-B4FKY8xI.js"), "../translation/en.json": () => import("./en-D93wBCcl.js"), "../translation/es.json": () => import("./es-DRC67gaz.js"), "../translation/fi.json": () => import("./fi-D_GIqIcs.js"), "../translation/fr.json": () => import("./fr-Dist6drR.js"), "../translation/hi.json": () => import("./hi-BVnvWste.js"), "../translation/hr.json": () => import("./hr-DAxaRBza.js"), "../translation/hu.json": () => import("./hu-Clgva1zP.js"), "../translation/id.json": () => import("./id-DNHaXBcy.js"), "../translation/it.json": () => import("./it-D1A5KCdL.js"), "../translation/ja.json": () => import("./ja-ChQIIPoa.js"), "../translation/ko.json": () => import("./ko-B11PDMEM.js"), "../translation/ms.json": () => import("./ms-CQG5CzrQ.js"), "../translation/nl.json": () => import("./nl-B8K2sLmq.js"), "../translation/no.json": () => import("./no-DCE4N7Tb.js"), "../translation/pl.json": () => import("./pl-2ZUqXFM6.js"), "../translation/pt.json": () => import("./pt-BloOdAzA.js"), "../translation/ro.json": () => import("./ro-Y3DTWab1.js"), "../translation/ru.json": () => import("./ru-C1exjNAG.js"), "../translation/sk.json": () => import("./sk-Dlz6v4ti.js"), "../translation/sv.json": () => import("./sv-C7ajM1BQ.js"), "../translation/th.json": () => import("./th-CtTENspU.js"), "../translation/tr.json": () => import("./tr-bSDPqmmi.js"), "../translation/uk.json": () => import("./uk-DuECGuzi.js"), "../translation/vi.json": () => import("./vi-zAYpELt8.js"), "../translation/zh.json": () => import("./zh-CLUzozQ4.js") }), `../translation/${t}.json`, 3);
      Os[t] = s.default, i(null, Os[t]);
    } catch (s) {
      const n = `[i18n] Failed to load local resource module for language '${t}'. Error: ${s.message}`;
      console.warn(n, s), i(s, null);
    }
  }
};
async function Nh() {
  return Eu(It), await It.use(Gl).use(Vh).init({
    debug: !1,
    fallbackLng: sa,
    supportedLngs: Ki.length > 0 ? Ki : [sa],
    interpolation: {
      format: function(t, e) {
        return e === "c" ? Fu(t) : e === "sc" ? Hi(t) : t;
      }
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"]
    }
  }), It;
}
const Ho = Nh().catch((t) => {
  console.error("[i18n] CRITICAL: Initialization failed.", t);
});
function Gh() {
  return It.isInitialized;
}
const qh = async (t) => {
  if (Ki.length > 0 && !Ki.includes(t))
    return console.warn(`[i18n] Attempted to change to unsupported language: ${t}. Current: ${It.language}`), It.language;
  It.isInitialized || (console.warn("[i18n] changeLanguage called before initialization. Awaiting i18nextReady."), await Ho);
  try {
    return await It.changeLanguage(t), console.log(`[i18n] Language changed to ${t}`), It.language;
  } catch (e) {
    return console.error(`[i18n] Failed to change language to ${t}:`, e), It.language;
  }
}, Mw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, FALLBACK_LANGUAGE: sa, SUPPORTED_LANGUAGES: Ki, changeLanguage: qh, i18nextInstance: It, i18nextReady: Ho, isI18nInitialized: Gh, t: H }, Symbol.toStringTag, { value: "Module" })), Ot = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [s, n] of e)
    i[s] = n;
  return i;
};
function zh(t, e = []) {
  if (!t?.length) return [];
  const i = t.map((s) => s && typeof s.getType == "function" ? s : Ta(s)).filter((s) => s instanceof Mo);
  return e.length && Wh(i, e), i;
}
function Wh(t = [], e = []) {
  t.length && e.length && t.forEach((i) => {
    i.shapeIds = i.shapeIds.filter((s) => e.find((n) => n.autoId === s));
  });
}
let Uo = {};
const Rw = (t, e) => {
  Uo[t] = e;
}, bn = (t) => Uo[t] || null, Mn = (t, e, i, s) => {
  t.extras || (t.extras = {}), t.extras[e] || (t.extras[e] = { sides: {}, faces: {} });
  const { scope: n, key: a } = vi(i), r = n === "face" ? t.extras[e].faces : t.extras[e].sides;
  r[a] = s;
}, vn = (t, e, i) => {
  const { scope: s, key: n } = vi(i), a = s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides;
  return a?.[n]?.value || a?.[n] || null;
}, Hh = (t, e, i) => {
  const { scope: s, key: n } = vi(i), a = s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides;
  a && n in a && delete a[n];
}, Uh = (t) => {
  const e = bn(t);
  return !e || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 1 && e.options[0][0] === !0 || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 0 ? "boolean" : e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].every((i) => typeof i == "string") ? "string" : e.options.length > 1 ? "object" : "string";
}, lr = !1;
function Yh() {
  return {
    banding: {
      scope: ["sides"],
      sides: ai.map((t) => `side.${t}`)
      // Only use main sides (l1/l2/w1/w2), not corners
    },
    finish: {
      scope: ["faces"],
      faces: bt.map((t) => `face.${t}`)
    },
    planing: {
      scope: ["faces", "sides"],
      faces: bt.map((t) => `face.${t}`),
      sides: ai.map((t) => `side.${t}`),
      // Only use main sides (l1/l2/w1/w2)
      constraints: {
        // Example constraints for planing - you can customize these
        global: {
          t: { min: 10, message: "Thickness must be at least 10mm for planing" }
        },
        locations: [
          {
            location: "face.a",
            properties: {
              t: { min: 15, message: "Face A planing requires at least 15mm thickness" }
            }
          },
          {
            location: "face.b",
            properties: {
              t: { min: 15, message: "Face B planing requires at least 15mm thickness" }
            }
          }
        ],
        defaultMessage: "Shape does not meet requirements for planing"
      }
    },
    info: {
      scope: ["sides"],
      sides: Tt.map((t) => `side.${t}`)
    }
    /* imageUpload: {
    	scope: [ 'sides' ],
    	sides: ALL_SIDES.map( side => `side.${side}` as const )
    } */
  };
}
const Kh = Yh(), Jt = (t) => Kh[t] || {
  scope: ["sides"],
  sides: Tt.map((e) => `side.${e}`)
}, na = (t) => {
  const e = Jt(t), i = [];
  return e.faces && i.push(...e.faces), e.sides && i.push(...e.sides), i;
}, jw = (t) => (Jt(t).faces || []).map((i) => {
  const s = vi(i);
  return s.scope === "face" ? s.key : void 0;
}).filter((i) => i !== void 0), Bw = (t) => (Jt(t).sides || []).map((i) => {
  const s = vi(i);
  return s.scope === "side" ? s.key : void 0;
}).filter((i) => typeof i == "string"), vi = (t) => {
  const e = t.split(".");
  if (e.length !== 2 || e[0] !== "face" && e[0] !== "side")
    throw new Error(`Invalid ExtraLocation format: ${t}. Must be 'face.X' or 'side.X'`);
  const i = e[0], s = e[1];
  if (i === "face" && !bt.includes(s))
    throw new Error(`Invalid face key '${s}' in location '${t}'`);
  if (i === "side" && !Tt.includes(s))
    throw new Error(`Invalid side key '${s}' in location '${t}'`);
  return {
    scope: i,
    key: s,
    original: t
  };
}, cr = (t) => vi(t).scope, Yo = (t) => Jt(t).scope.includes("faces"), Ko = (t) => Jt(t).scope.includes("sides"), Vw = (t) => {
  const e = Jt(t);
  return e.scope.includes("faces") && e.scope.includes("sides");
}, Zh = (t, e) => {
  if (t.length === 1 && t[0].length === 1 && t[0][0] === !0)
    return "boolean";
  const i = t.flat().filter((a) => typeof a == "string"), n = [.../* @__PURE__ */ new Set([...i, ...e || []])].length;
  return n === 0 ? "multiple" : n === 1 ? "single" : "multiple";
}, Jh = (t, e) => {
  const i = t;
  i.extras || (i.extras = {}), i.extras[e] || (i.extras[e] = {});
  const s = i.extras[e];
  Yo(e) && (s.faces || (s.faces = {})), Ko(e) && (s.sides || (s.sides = {}));
}, Xh = (t, e, i) => {
  Jh(t, e);
  const n = t.extras[e], { scope: a } = vi(i);
  return a === "face" ? {
    extraContainer: n.faces || {}
  } : {
    extraContainer: n.sides || {}
  };
}, gi = (t, e, i) => !!vn(t, e, i), Qh = (t, e, i, s, n) => {
  const a = bn(e);
  if (a) {
    const r = vn(t, e, i);
    if (r !== null) {
      if (typeof r == "boolean")
        return r;
      if (typeof r == "string") {
        const o = a.labels.indexOf(s);
        return o !== -1 && a.options[o] && Array.isArray(a.options[o]) && !a.options[o].includes(r) ? null : r;
      }
      if (typeof r == "object" && s in r) {
        const o = r[s];
        if (o === !0) {
          const l = a.labels.indexOf(s);
          if (l !== -1 && a.options[l] && Array.isArray(a.options[l])) {
            const c = a.options[l];
            if (c.length === 1)
              return c[0];
          }
          return s;
        }
        if (typeof o == "string") {
          const l = a.labels.indexOf(s);
          if (l !== -1 && a.options[l] && Array.isArray(a.options[l]) && !a.options[l].includes(o))
            return null;
        }
        return o;
      }
    }
  }
  return !1;
}, Nw = (t, e, i, s, n, a, r) => {
  const o = bn(e);
  if (o)
    switch (Uh(e)) {
      case "boolean":
        Mn(t, e, i, !!n);
        break;
      case "string":
        Mn(t, e, i, String(n));
        break;
      case "object":
        {
          let c = vn(t, e, i) || {};
          typeof c != "object" && (c = {});
          const u = o.labels.indexOf(s);
          if (u !== -1 && o.options[u] && Array.isArray(o.options[u])) {
            const f = o.options[u];
            f.length === 1 && f[0] === n ? c[s] = !0 : c[s] = n;
          } else
            c[s] = n;
          Mn(t, e, i, c);
        }
        break;
    }
}, ep = (t, e, i, s) => {
  Hh(t, e, i);
}, Gw = (t, e, i, s, n) => {
  if (i.length === 0) return null;
  const a = i.map((r) => Qh(t, e, r, s));
  if (n === "boolean" || n === "single") {
    const r = a.every((l) => !!l), o = a.every((l) => !l);
    return r ? !0 : o ? !1 : null;
  }
  if (n === "multiple") {
    const r = a[0];
    return a.every((l) => l === r) ? r : null;
  }
  return null;
}, qw = (t, e, i, s) => {
  i.forEach((n) => {
    ep(t, e, n);
  });
}, Rn = (t, e, i, s, n, a) => {
  const r = vn(t, e, i), o = [];
  if (r && a?.length)
    if (typeof r == "object" && !Array.isArray(r)) {
      const c = r;
      for (const u of a) {
        const f = c[u];
        if (f)
          if (f === !0) {
            const h = bn(e);
            if (h) {
              const g = h.labels.indexOf(u);
              if (g !== -1 && h.options[g] && Array.isArray(h.options[g])) {
                const k = h.options[g];
                k.length === 1 ? o.push(k[0]) : o.push(u);
              } else
                o.push(u);
            } else
              o.push(u);
          } else
            o.push(String(f));
        else
          o.push("");
      }
    } else if (typeof r == "string") {
      const c = r.split("|");
      a.forEach((u, f) => {
        o.push(c[f] || "");
      });
    } else
      o.push(String(r));
  else if (r)
    if (typeof r == "string" && a?.length) {
      const c = r.split("|");
      a.forEach((u, f) => {
        o.push(c[f] || "");
      });
    } else
      o.push(String(r));
  const l = o.filter((c) => c && typeof c == "string" && c.trim() !== "");
  if (!Array.isArray(l) || !l.length)
    return !1;
  if (!s)
    return 0;
  try {
    const c = l.map((f, h) => {
      if (typeof f == "boolean" && f === !0 && n) {
        const g = n[h];
        if (g && g.length === 1)
          return String(g[0]);
      }
      return String(f);
    });
    return s(e, c);
  } catch (c) {
    return console.error("Error calculating extras price:", c), !1;
  }
}, zw = (t, e, i) => {
  const s = /* @__PURE__ */ new Set(), n = Jt(e);
  if (t.forEach((a) => {
    const o = a.extras[e];
    o && (n.faces && "faces" in o && o.faces && Object.values(o.faces).forEach((l) => {
      typeof l == "string" && l.trim() && l !== "Y" && s.add(l);
    }), n.sides && "sides" in o && o.sides && Object.values(o.sides).forEach((l) => {
      typeof l == "string" && l.trim() && l !== "Y" && s.add(l);
    }));
  }), s.size > 0) {
    const a = [.../* @__PURE__ */ new Set([...i.value, ...Array.from(s)])];
    i.value = a;
  }
}, Ww = (t, e, i, s) => {
  const n = s[0], a = Jt(e);
  n && t.forEach((r) => {
    const l = r.extras[e];
    if (!l) return;
    l.options || (l.options = {});
    const c = l.options;
    if (a.faces && l.faces) {
      c.faces || (c.faces = {});
      for (const u in l.faces)
        l.faces[u] === !0 && (l.faces[u] = i);
    }
    if (a.sides && l.sides) {
      c.sides || (c.sides = {});
      for (const u in l.sides)
        l.sides[u] === !0 && (l.sides[u] = i);
    }
  });
}, Hw = (t, e, i) => {
  const s = Jt(e);
  t.forEach((n) => {
    const r = n.extras[e];
    if (r) {
      if (r.options || (r.options = {}), s.faces && r.faces)
        for (const o in r.faces)
          r.faces[o] === i && (r.faces[o] = !0);
      if (s.sides && r.sides)
        for (const o in r.sides)
          r.sides[o] === i && (r.sides[o] = !0);
    }
  });
}, tp = (t, e, i, s = !1) => {
  const n = Jt(e), a = t;
  a.extras[e] || (a.extras[e] = {});
  const r = a.extras[e];
  r.options || (r.options = {});
  const o = r.options;
  if (Yo(e) && (r.faces || (r.faces = {}), o.faces || (o.faces = {})), Ko(e) && (r.sides || (r.sides = {}), o.sides || (o.sides = {})), s) {
    if (n.faces && r.faces) {
      for (const l in r.faces) {
        const c = r.faces[l];
        typeof c == "string" && (r.faces[l] = c.trim() !== "");
      }
      o.faces && Object.keys(o.faces).forEach((l) => {
        l !== "all" && delete o.faces[l];
      });
    }
    if (n.sides && r.sides) {
      for (const l in r.sides) {
        const c = r.sides[l];
        typeof c == "string" && (r.sides[l] = c.trim() !== "");
      }
      o.sides && Object.keys(o.sides).forEach((l) => {
        l !== "all" && delete o.sides[l];
      });
    }
  } else
    n.faces && o.faces, n.sides && o.sides;
}, wi = (t, e, i, s = [], n = []) => {
  const a = Zh(i, n);
  tp(t, e, a === "boolean" ? [] : s, a === "boolean");
}, ip = (t, e, i, s) => {
  if (!i || !Object.keys(i).length)
    return { valid: !0, messages: [], incompleteLocations: [] };
  const n = [], a = [], r = na(e), o = Object.keys(i), l = Math.max(...o.map((u) => u.split("|").length));
  if (l <= 1)
    return { valid: !0, messages: [], incompleteLocations: [] };
  for (const u of r) {
    const { extraContainer: f } = Xh(t, e, u), { key: h } = vi(u), g = f[h];
    if (!g)
      continue;
    let k;
    if (typeof g == "object" && !Array.isArray(g) && g !== null)
      if ("value" in g && typeof g.value == "string") {
        const D = g.value;
        k = D.includes("|") ? D.split("|") : [D];
      } else
        k = Object.values(g).filter((D) => D != null && D !== "" && D !== !1).map((D) => String(D));
    else typeof g == "string" ? k = g.includes("|") ? g.split("|") : [g] : typeof g == "boolean" ? k = g ? ["true"] : [] : k = [String(g)];
    const E = k.length;
    if (E === 0)
      continue;
    let V = !1, A = !1, S = "";
    if (E > 0) {
      if (s)
        try {
          const D = k.filter((F) => F.trim() !== ""), C = s(e, D);
          A = C !== null && C > 0;
        } catch (D) {
          console.error("[validateExtrasCompleteness] Error getting price:", D), A = !1;
        }
      else {
        const D = k.join("|");
        A = o.some((C) => C === D || C.startsWith(D + "|"));
      }
      if (E < l) {
        V = !0;
        const D = k.join("|");
        if (o.some((F) => F.startsWith(D + "|")) && !A) {
          const F = l - E, Y = k.join(", ");
          S = `${e} selection incomplete for ${u}. Selected: "${Y}" but ${F} more level${F > 1 ? "s" : ""} required.`;
        }
      }
      !A && !V && (S = `${e} selection invalid for ${u}. No pricing available for "${k.join(", ")}".`);
    }
    E > 0 && !A && (a.push(u), n.push(S || `${e} pricing incomplete for ${u}: ${E}/${l} levels selected`));
  }
  return { valid: a.length === 0, messages: n, incompleteLocations: a };
}, sp = (t, e, i) => {
  if (!i || !i[e])
    return { valid: !0, violations: [] };
  const s = i[e], n = [], a = (o, l, c) => {
    l == null || c === void 0 || (c.min !== void 0 && l < c.min && n.push({
      dimension: o,
      value: l,
      constraint: "min",
      limit: c.min
    }), c.max !== void 0 && l > c.max && n.push({
      dimension: o,
      value: l,
      constraint: "max",
      limit: c.max
    }));
  };
  a("longSide", t.longSide, s.longSide), a("shortSide", t.shortSide, s.shortSide);
  const r = typeof t.t == "string" ? parseFloat(t.t) : t.t;
  return isNaN(r) || a("t", r, s.t), {
    valid: n.length === 0,
    violations: n,
    message: s.message
  };
}, np = (t, e, i) => {
  if (i)
    return i;
  const s = e.dimension === "t" ? "thickness" : e.dimension === "longSide" ? "long side" : "short side", n = e.constraint === "min" ? "minimum" : "maximum";
  return `${t.charAt(0).toUpperCase() + t.slice(1)} requires ${s} ${n} of ${e.limit} (current: ${e.value})`;
};
function ur(t) {
  try {
    if (Gr()) {
      try {
        const e = require("~/store");
        if (e?.applicationSettings)
          return e.applicationSettings.getString(t);
      } catch (e) {
        console.warn("[getStorageValue] Could not access ApplicationSettings:", e);
      }
      return null;
    } else if (typeof window < "u" && window.localStorage)
      return localStorage.getItem(t);
    return null;
  } catch (e) {
    return console.error(`[getStorageValue] Error getting storage value for key ${t}:`, e), null;
  }
}
function dr(t) {
  try {
    if (Gr())
      try {
        const e = require("~/store");
        e?.applicationSettings && e.applicationSettings.remove(t);
      } catch (e) {
        console.warn("[removeStorageValue] Could not access ApplicationSettings:", e);
      }
    else typeof window < "u" && window.localStorage && localStorage.removeItem(t);
  } catch (e) {
    console.error(`[removeStorageValue] Error removing storage value for key ${t}:`, e);
  }
}
function Zo(t) {
  const e = {}, i = t, s = i.code;
  if (s === "invalid_type") {
    let n = "unknown";
    if ("input" in i)
      n = typeof i.input;
    else if ("received" in i) {
      const a = i.received;
      n = typeof a == "string" ? a : typeof a;
    }
    e.expected = i.expected, e.received = n;
  } else s === "too_small" ? (e.minimum = i.minimum, e.min = i.minimum, e.inclusive = i.inclusive) : s === "too_big" ? (e.maximum = i.maximum, e.max = i.maximum, e.inclusive = i.inclusive) : s === "invalid_string" && (e.validation = i.validation);
  return e;
}
function ap(t) {
  return t.map((e) => {
    const i = e.path.length > 0 ? e.path.join(".") : "root", s = Zo(e), n = fo(e.message, s);
    return `[${i}] ${n}`;
  });
}
function is(t, e) {
  const i = t.safeParse(e);
  return {
    success: i.success,
    data: i.success ? i.data : void 0,
    errors: i.success ? void 0 : i.error.issues
  };
}
function rp(t = {}) {
  try {
    let e = function(I) {
      if (!I || typeof I != "object") return I;
      const T = { ...I };
      if (delete T.issues, delete T.warnings, T.trim && typeof T.trim == "object") {
        const x = T.trim;
        ("x1" in x || "x2" in x || "y1" in x || "y2" in x) && (T.trim = {
          l1: x.y1 ?? x.l1 ?? 0,
          l2: x.y2 ?? x.l2 ?? 0,
          w1: x.x1 ?? x.w1 ?? 0,
          w2: x.x2 ?? x.w2 ?? 0
        });
      }
      if (T.extras?.banding?.sides && typeof T.extras.banding.sides == "object") {
        const x = T.extras.banding.sides;
        ("x1" in x || "x2" in x || "y1" in x || "y2" in x) && (T.extras.banding.sides = {
          l1: x.y1 ?? x.l1,
          l2: x.y2 ?? x.l2,
          w1: x.x1 ?? x.w1,
          w2: x.x2 ?? x.w2
        });
      }
      if (T.extras?.finish?.sides && typeof T.extras.finish.sides == "object") {
        const x = T.extras.finish.sides;
        ("x1" in x || "x2" in x || "y1" in x || "y2" in x) && (T.extras.finish.sides = {
          l1: x.y1 ?? x.l1,
          l2: x.y2 ?? x.l2,
          w1: x.x1 ?? x.w1,
          w2: x.x2 ?? x.w2
        });
      }
      if (T.extras?.planing?.sides && typeof T.extras.planing.sides == "object") {
        const x = T.extras.planing.sides;
        ("x1" in x || "x2" in x || "y1" in x || "y2" in x) && (T.extras.planing.sides = {
          l1: x.y1 ?? x.l1,
          l2: x.y2 ?? x.l2,
          w1: x.x1 ?? x.w1,
          w2: x.x2 ?? x.w2
        });
      }
      if (T.efficiencyOptions?.primaryCompression) {
        const x = T.efficiencyOptions.primaryCompression;
        x === "x" ? T.efficiencyOptions = {
          ...T.efficiencyOptions,
          primaryCompression: "l"
        } : x === "y" && (T.efficiencyOptions = {
          ...T.efficiencyOptions,
          primaryCompression: "w"
        });
      }
      for (const x in T)
        T[x] === null && delete T[x];
      return T;
    }, i = function(I, T) {
      if (!Array.isArray(I))
        return [];
      const x = [];
      for (let Z = 0; Z < I.length; Z++) {
        const J = I[Z], me = e(J);
        try {
          const Ie = {
            ...me,
            skipSchemaValidation: !0
            // Skip Zod validation during construction
          };
          J.autoId && (Ie.autoId = J.autoId), delete Ie.issues, delete Ie.warnings;
          const De = new as(Ie, T);
          x.push(De);
        } catch (Ie) {
          console.error(`Failed to create InputShape at index ${Z}:`, Ie);
        }
      }
      return x;
    }, s = function(I, T) {
      if (!Array.isArray(I)) return [];
      const x = [];
      for (let Z = 0; Z < I.length; Z++) {
        const J = I[Z], me = e(J);
        try {
          const Ie = {
            ...me,
            skipSchemaValidation: !0
            // Skip Zod validation during construction
          };
          J.autoId && (Ie.autoId = J.autoId);
          const De = new As(Ie, T);
          x.push(De);
        } catch (Ie) {
          console.error(`Failed to create InputStock at index ${Z}:`, Ie);
        }
      }
      return x;
    }, n = function(I) {
      const T = e(I), x = is(Ii, T);
      if (x.success && x.data) {
        const Z = {
          ...x.data,
          issues: [],
          warnings: []
        };
        return I?.autoId && (Z.autoId = I.autoId), new ti(Z);
      } else
        return console.error("Failed to parse input saw:", x.errors), new ti({});
    }, a = function(I, T) {
      return Array.isArray(I) ? T && T.length ? zh(I, T) : I.map((x) => new Mo(x)).filter(Boolean) : [];
    }, r = function(I = {}) {
      try {
        const Z = { ...Mt(
          (me) => {
            if (typeof me != "object" || me === null) return me;
            const Ie = { ...me };
            for (const De in Ie)
              Ie[De] === null && delete Ie[De];
            return Ie;
          },
          mi
        ).parse(I), isNew: !0 }, J = new as(Z, ee);
        return J.createId(K.value.length), K.value.push(J), J;
      } catch (T) {
        return T instanceof ji && (console.error("Shape validation failed:", T.issues), S("part", "Invalid shape data", T.issues)), null;
      }
    }, o = function(I = {}) {
      try {
        const x = { ...Yt.parse(I), isNew: !0 }, Z = new As(x, ee);
        return Z.createId(R.value.length), R.value.push(Z), Z;
      } catch (T) {
        return T instanceof ji && (console.error("Stock validation failed:", T.issues), S("stock", "Invalid stock data", T.issues)), null;
      }
    }, l = function(I) {
      try {
        const T = I.toData(), x = mi.parse(T);
        return new as(x, ee);
      } catch (T) {
        return T instanceof ji && (console.error("Shape clone validation failed:", T.issues), S("part", "Invalid shape data during cloning", T.issues)), null;
      }
    }, c = function(I) {
      try {
        const T = I.toData(), x = Yt.parse(T);
        return new As(x, ee);
      } catch (T) {
        return T instanceof ji && (console.error("Stock clone validation failed:", T.issues), S("stock", "Invalid stock data during cloning", T.issues)), null;
      }
    }, u = function(I, T) {
      const x = K.value.find((me) => me.autoId === I);
      if (!x) return !1;
      const Z = { ...x.toData(), ...T }, J = is(mi, Z);
      if (J.success && J.data)
        return x.update(J.data), x.isNew || x.validate(), !0;
      {
        const me = J.errors ? ap(J.errors) : [];
        console.error("Shape update validation failed:", me);
        const Ie = J.errors?.[0];
        if (Ie) {
          const De = Zo(Ie);
          new ue({
            category: ["part"],
            message: Ie.message,
            // This is the translation key from Zod error map
            params: De,
            issues: U.value
          });
        } else
          S("part", "Invalid shape update");
        return !1;
      }
    }, f = function(I, T) {
      const x = K.value.findIndex((J) => J.autoId === I);
      if (x === -1) return !1;
      const Z = K.value[x];
      return Z.validate({ fields: [T] }), Z.issues.length === 0;
    }, h = function(I, T) {
      const x = R.value.find((me) => me.autoId === I);
      if (!x) return !1;
      const Z = { ...x.toData(), ...T }, J = is(Yt, Z);
      return J.success && J.data ? (x.update(J.data), x.isNew || A(), !0) : (console.error("Stock update validation failed:", J.errors), S("stock", "Invalid stock update", J.errors), !1);
    }, g = function(I, T) {
      const x = R.value.findIndex((J) => J.autoId === I);
      if (x === -1) return !1;
      const Z = R.value[x];
      return Z.validate({ fields: [T] }), ql(R), Z.issues.length === 0;
    }, k = function(I) {
      if (K.value.length === 1) return !1;
      const T = K.value.findIndex((x) => x.autoId === I);
      return T === -1 ? !1 : (K.value.splice(T, 1), !0);
    }, E = function(I) {
      if (R.value.length === 1) return !1;
      const T = R.value.findIndex((x) => x.autoId === I);
      return T === -1 ? !1 : (R.value.splice(T, 1), !0);
    }, V = function(I) {
      ne.value = !0;
      const T = [];
      try {
        K.value.forEach((x) => x.issues = []);
        for (let x = 0; x < K.value.length; x++) {
          const Z = K.value[x];
          if (Z.isNew)
            continue;
          const J = Z.validate({
            inputStockList: R.value,
            index: x,
            stockType: I?.stockType ?? null,
            partTrim: 0,
            useInventory: !1,
            saw: I
          });
          T.push(...J);
        }
        K.value.some((x) => Number(x.q) > 0) || new ue({
          category: ["part"],
          message: "errors.validation.no_parts",
          issues: T
        });
      } finally {
        ne.value = !1;
      }
      return U.value = T, T;
    }, A = function(I) {
      ne.value = !0;
      const T = [];
      try {
        R.value.forEach((x) => x.issues = []);
        for (let x = 0; x < R.value.length; x++) {
          const J = R.value[x].validate({ saw: I }, x);
          T.push(...J);
        }
        R.value.some((x) => Number(x.q) > 0 || x.autoAdd) || new ue({
          category: ["stock"],
          message: "errors.validation.no_stock",
          issues: T
        });
      } finally {
        ne.value = !1;
      }
      return U.value = T, T;
    }, S = function(I, T, x) {
      new ue({
        category: [I],
        message: T,
        issues: U.value
      }), x && console.log("Validation details:", x);
    }, D = function() {
      U.value = [], K.value.forEach((I) => I.issues = []), R.value.forEach((I) => I.issues = []);
    }, C = function(I = {}) {
      const T = [], x = [], Z = I.inputShapesOverride ?? K.value;
      if (!Z.length)
        return { shapeList: [], issues: [] };
      for (let J = 0; J < Z.length; J++) {
        const me = Z[J];
        if (!me.q) continue;
        me.createId(J), me.applyPartTrim(I.trim, I.stockType);
        const Ie = me.toShape();
        I.minSpacing && I.maxDimension && (Ie.l <= I.maxDimension || Ie.w <= I.maxDimension) && (Ie.minSpacing = I.minSpacing), T.push(Ie), x.push(...Ie.issues);
      }
      return { shapeList: T, issues: x };
    }, F = function(I) {
      if (!R.value.length)
        return { stockList: [], issues: [] };
      const T = [], x = [];
      for (let Z = 0; Z < R.value.length; Z++) {
        const J = R.value[Z];
        if (!J.q && !J.autoAdd) continue;
        J.createId(Z), J.saw = I;
        const me = J.toStock();
        T.push(me), x.push(...me.issues);
      }
      return { stockList: T, issues: x };
    }, Y = function(I, T = ee) {
      const x = {
        saw: { success: !1, failed: !1 },
        shapes: { success: 0, failed: 0 },
        stock: { success: 0, failed: 0 },
        groups: { success: 0, failed: 0 }
      };
      if (I.saw) {
        const Z = is(Ii, e(I.saw));
        if (Z.success && Z.data) {
          const J = { ...Z.data };
          I.saw?.autoId && (J.autoId = I.saw.autoId), B.value = new ti(J), x.saw.success = !0;
        } else
          console.error("Failed to parse input saw:", Z.errors), x.saw.failed = !0;
      }
      if (I.shapes) {
        const Z = i(I.shapes, T);
        x.shapes.success = Z.length, x.shapes.failed = I.shapes.length - Z.length, K.value = Z;
      }
      if (I.stock) {
        const Z = s(I.stock, T);
        x.stock.success = Z.length, x.stock.failed = I.stock.length - Z.length, R.value = Z;
      }
      if (I.groups) {
        const Z = a(I.groups);
        x.groups.success = Z.length, x.groups.failed = I.groups.length - Z.length, G.value = Z;
      }
      return I.extrasOptions && (N.value = { ...I.extrasOptions }), x;
    }, M = function() {
      return {
        shapes: K.value.map((I) => I.toData()),
        stock: R.value.map((I) => I.toData()),
        inputUserGroups: G.value.map((I) => I.toData()),
        extrasOptions: N.value
      };
    }, ce = function() {
      K.value = [], R.value = [], G.value = [], D();
    }, z = function(I) {
      const T = { ...B.value.toData(), ...I }, x = is(Ii, T);
      return x.success && x.data ? (B.value.update(x.data), !0) : (console.error("InputSaw update validation failed:", x.errors), S("saw", "Invalid saw update", x.errors), !1);
    }, m = function() {
      B.value = new ti({});
    }, W = function() {
      const I = B.value.validate();
      return U.value = [...U.value.filter((T) => T.category?.[0] !== "saw"), ...I], I;
    };
    const { numberFormat: ee = "decimal" } = t, K = es("inputs/inputShapes", [], {
      serializer: {
        read: (I) => {
          if (!I) {
            const Z = "GlobalStore/inputShapes", J = ur(Z);
            if (J)
              I = J, dr(Z);
            else return [];
          }
          let T;
          try {
            T = JSON.parse(I);
          } catch (Z) {
            return console.error("Failed to parse input shapes JSON:", Z), [];
          }
          return i(T, ee);
        },
        write: (I) => {
          const x = I.filter((J) => !J?.multiEdit).map((J) => J.toData());
          return JSON.stringify(x);
        }
      },
      listenToStorageChanges: !1
    }), R = es("inputs/inputStock", [], {
      serializer: {
        read: (I) => {
          if (!I) return [];
          let T;
          try {
            T = JSON.parse(I);
          } catch (Z) {
            return console.error("  Failed to parse stock JSON:", Z), [];
          }
          return s(T, ee);
        },
        write: (I) => {
          const x = I.filter((J) => !J?.multiEdit).map((J) => J.toData());
          return JSON.stringify(x);
        }
      },
      listenToStorageChanges: !1
    }), B = es("inputs/inputSaw", new ti({}), {
      serializer: {
        read: (I) => {
          if (!I) {
            const x = ur("saw");
            if (x)
              I = x, dr("saw");
            else return new ti({});
          }
          try {
            const T = JSON.parse(I);
            return n(T);
          } catch (T) {
            return console.error("  Failed to parse saw JSON:", T), new ti({});
          }
        },
        write: (I) => {
          if (!I)
            return JSON.stringify({});
          const T = I.toData();
          return JSON.stringify(T);
        }
      },
      listenToStorageChanges: !1
    }), G = es("inputs/inputUserGroups", [], {
      serializer: {
        read: (I) => a(I ? JSON.parse(I) : []),
        write: (I) => JSON.stringify(I.map((T) => T.toData()))
      }
    }), N = es("inputs/extrasOptions", {
      banding: { options: [] },
      finish: { options: [] },
      planing: { options: [] }
    }, {
      serializer: {
        read: (I) => {
          if (!I) return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          try {
            return JSON.parse(I);
          } catch {
            return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          }
        },
        write: (I) => JSON.stringify(I)
      }
    }), U = oe([]), ne = oe(!1);
    K.value.length === 0 && (K.value = [new as({ isNew: !0 })]), R.value.length === 0 && (R.value = [new As({ isNew: !0 })]);
    const ve = te(() => K.value.reduce((I, T) => {
      const x = Number(T?.q);
      return x && x > 0 && !T?.multiEdit ? I + x : I;
    }, 0)), ge = te(() => R.value.reduce((I, T) => {
      const x = Number(T?.q);
      return x && x > 0 && !T?.multiEdit ? I + x : I;
    }, 0)), we = te(() => K.value.reduce((I, T) => T?.multiEdit ? I : I + 1, 0)), Le = te(() => R.value.reduce((I, T) => T?.multiEdit ? I : I + 1, 0)), X = te(() => U.value.length > 0), Ge = () => [
      {
        name: "banding",
        type: "object",
        label: "fields.banding",
        fieldMap: "banding",
        w: "32px",
        required: !1
      },
      {
        name: "finish",
        type: "object",
        label: "fields.finish",
        fieldMap: "finish",
        w: "32px",
        required: !1
      },
      {
        name: "planing",
        type: "object",
        label: "fields.planing",
        fieldMap: "planing",
        w: "32px",
        required: !1
      },
      {
        name: "machining",
        type: "object",
        label: "fields.machining",
        fieldMap: "machining",
        w: "32px",
        required: !1
      }
      // Temporarily removed DXF field
      // {
      // 	name: 'dxfPreview',
      // 	type: 'object' as const,
      // 	label: 'fields.dxfPreview',
      // 	fieldMap: 'dxfPreview',
      // 	w: '80px',
      // 	required: false
      // }
    ], nt = oe(null), Xe = oe(null), St = () => {
      nt.value = null;
    }, ie = D, je = (I = null) => {
      const T = I?.inputShapesOverride ?? K.value, x = V(I?.saw || void 0);
      if (T.length) {
        Fo(T, R.value, I?.saw || B.value);
        const Z = T.flatMap((J) => J.issues);
        return [...x, ...Z];
      }
      return x;
    }, Lt = (I, T = "decimal") => {
      const x = I?.inputSaw, Z = I?.inputShapes, J = I?.inputStock, me = I?.inputUserGroups;
      return Y({
        saw: x,
        shapes: Z,
        stock: J,
        groups: me
      }, T);
    }, Ft = (I, T = "decimal") => Y({ shapes: I }, T).shapes.success > 0, Zi = (I, T = "decimal") => Y({ stock: I }, T).stock.success > 0, vt = (I, T, x, Z) => {
      T[0]?.length > 0 && (N.value[I] || (N.value[I] = { options: [] }), N.value[I].options = [...T[0]]), x && Z && T.length > 0 ? za(I, {
        options: T,
        // Use all columns extracted from pricing
        labels: x,
        pricing: Z
      }) : console.warn("[setExtrasOptionsFromPricing] Missing data for centralized config:", { labels: x, pricingData: Z, pricingOptionsLength: T.length });
    }, fe = () => {
      if (!Object.values(N.value).some(
        (x) => x.options.length > 0
      )) return;
      const T = (x, Z) => {
        const J = {};
        for (const me of Z)
          J[me] = [...x];
        return J;
      };
      return {
        banding: N.value.banding.options.length > 0 ? {
          options: {
            sides: T(N.value.banding.options, ["l1", "l2", "w1", "w2"])
          }
        } : void 0,
        finish: N.value.finish.options.length > 0 ? {
          options: {
            faces: T(N.value.finish.options, ["a", "b"])
          }
        } : void 0,
        planing: N.value.planing.options.length > 0 ? {
          options: {
            sides: T(N.value.planing.options, ["l1", "l2", "w1", "w2"]),
            faces: T(N.value.planing.options, ["a", "b"])
          }
        } : void 0
      };
    }, pe = (I) => {
      if (!R.value.length) return "n";
      const T = I.material, x = I.t, Z = R.value.filter((De) => De.material === T && De.t === x);
      if (!Z.length)
        return "n";
      let J = !1, me = !1, Ie = !1;
      for (const De of Z)
        De.grain === "l" ? (J = !0, me = !0) : De.grain === "w" && (J = !0, Ie = !0);
      return J ? me && Ie ? "y" : me ? "l" : Ie ? "w" : "n" : "n";
    }, de = (I) => {
      for (const T of K.value)
        Ka(T, I);
      for (const T of R.value)
        Ka(T, I);
    };
    let Ce = !1;
    return He(K, (I) => {
      Ce || !I.length || mt(() => {
        const T = ["banding", "finish", "planing"], x = [];
        T.forEach((Z) => {
          const J = /* @__PURE__ */ new Set();
          if (I.forEach((me) => {
            const Ie = me.extras?.[Z];
            Ie && (Ie.faces && Object.values(Ie.faces).forEach((De) => {
              typeof De == "string" && De.trim() && De !== "Y" && J.add(De);
            }), Ie.sides && Object.values(Ie.sides).forEach((De) => {
              typeof De == "string" && De.trim() && De !== "Y" && J.add(De);
            }));
          }), J.size > 0) {
            const me = yc(Z);
            if (me) {
              const Ie = me.options[0];
              if (Array.isArray(Ie) && (Ie.length === 0 || typeof Ie[0] == "string")) {
                const De = new Set(Ie), Me = Array.from(J).filter((ze) => !De.has(ze));
                if (Me.length > 0) {
                  const ze = [...Ie, ...Me];
                  za(Z, {
                    ...me,
                    options: [ze, ...me.options.slice(1)]
                  });
                }
              }
            }
          }
        }), T.forEach((Z) => {
          const J = bc(Z, I);
          J.cleanedCount > 0 && x.push(
            `${Z}: ${J.invalidOptions.join(", ")}`
          );
        }), x.length > 0 && (console.warn(
          `Some extras options no longer exist and have been reset:
` + x.join(`
`)
        ), typeof window < "u" && window.alert && setTimeout(() => {
          alert(
            `Some extras options no longer exist and have been reset:
` + x.join(`
`)
          );
        }, 500)), Ce = !0;
      });
    }, { immediate: !0 }), {
      // Bundled object
      inputs: {
        inputStock: R,
        inputShapes: K,
        inputUserGroups: G,
        currentInputShape: nt,
        selectedSaw: Xe,
        inputSaw: B
      },
      // State
      inputShapes: K,
      inputStock: R,
      inputUserGroups: G,
      inputSaw: B,
      currentInputShape: nt,
      selectedSaw: Xe,
      validationIssues: U,
      isValidating: ne,
      // Computed
      totalInputShapes: ve,
      totalInputStock: ge,
      totalInputShapeLines: we,
      totalInputStockLines: Le,
      hasValidationIssues: X,
      // Actions
      addInputShape: r,
      addInputStock: o,
      cloneInputShape: l,
      cloneInputStock: c,
      updateInputShape: u,
      updateInputStock: h,
      updateInputSaw: z,
      removeInputShape: k,
      removeInputStock: E,
      reset: St,
      resetInputSaw: m,
      clear: ce,
      clearIssues: ie,
      // Validation
      validateInputShapes: je,
      validateInputShapeField: f,
      validateInputStock: A,
      validateInputStockField: g,
      validateInputSaw: W,
      clearValidationIssues: D,
      // Conversion
      createShapeList: C,
      createStockList: F,
      // Import/Export/Update
      importData: Y,
      exportData: M,
      updateInputs: Lt,
      importInputShapes: Ft,
      importInputStock: Zi,
      // Additional functions
      getShapeGrainSummary: pe,
      updateNumberFormat: de,
      getSpecialShapeFields: Ge,
      // Extras Options Management
      extrasOptions: N,
      setExtrasOptionsFromPricing: vt,
      getCentralizedOptions: fe
    };
  } catch (e) {
    throw console.error("[createInputs] Fatal error during initialization:", e), e;
  }
}
let jn = null;
function Jo(t = { numberFormat: "decimal" }) {
  try {
    return jn || (jn = rp(t)), jn;
  } catch (e) {
    throw console.error("[useInputs] FATAL ERROR in useInputs:", e), console.error("[useInputs] Error stack:", e?.stack), e;
  }
}
class fr {
  /**
   * Migrate a single shape from old structure to new structure
   */
  static migrateShape(e) {
    this.migrateBanding(e), this.migrateFinish(e);
  }
  /**
   * Migrate multiple shapes at once
   */
  static migrateShapes(e) {
    e.forEach((i) => {
      const s = Object.keys(i);
      this.migrateShape(i);
      const n = Object.keys(i);
      s.length, n.length;
    });
  }
  /**
   * Migrate old side format (x1/x2/y1/y2) to new format (l1/l2/w1/w2)
   */
  static migrateSideNames(e) {
    const i = {};
    for (const [s, n] of Object.entries(e)) {
      let a = s;
      s === "x1" ? a = "l1" : s === "x2" ? a = "l2" : s === "y1" ? a = "w1" : s === "y2" && (a = "w2"), i[a] = n;
    }
    return i;
  }
  /**
   * Migrate banding from flat to nested structure
   * Also handles migration from old side names (x1/x2/y1/y2) to new names (l1/l2/w1/w2)
   */
  static migrateBanding(e) {
    const i = e.banding, s = "_banding" in e ? e._banding : void 0, n = Te(e) ? e.bandingOptions : void 0;
    if (!i && !s && !n) return !1;
    if (i && i instanceof _t) {
      const u = i.sides;
      if (u && typeof u == "object" && ("x1" in u || "x2" in u || "y1" in u || "y2" in u)) {
        const h = this.migrateSideNames(u);
        return i.sides = h, !0;
      }
      return !1;
    }
    const a = {}, r = {}, o = { sides: {} };
    if (i && typeof i == "object") {
      const u = this.migrateSideNames(i);
      for (const [f, h] of Object.entries(u))
        Tt.includes(f) && (a[f] = h);
    }
    if (s && typeof s == "object") {
      const u = this.migrateSideNames(s);
      for (const [f, h] of Object.entries(u))
        Tt.includes(f) && (r[f] = h);
    }
    if (n && typeof n == "object") {
      n.all && (o.sides.all = n.all);
      for (const [u, f] of Object.entries(n))
        u !== "all" && Tt.includes(u) && f && (o.sides[u] = f);
    }
    const l = new _t(Object.keys(a).length > 0 ? { sides: a } : {}), c = Object.keys(r).length > 0 ? new _t({ sides: r }) : void 0;
    return "extras" in e && e.extras ? e.extras.banding = l : Te(e) && (e.banding = l), c && "_banding" in e && (e._banding = c), Te(e) && n && (e.bandingOptions = o), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(e) {
    const i = e.finish, s = "_finish" in e ? e._finish : void 0, n = Te(e) ? e.finishOptions : void 0;
    if (!i && !s && !n || i && i instanceof Pt)
      return !1;
    const a = {}, r = {}, o = { faces: {} };
    if (i && typeof i == "object")
      for (const [u, f] of Object.entries(i))
        bt.includes(u) && (a[u] = f);
    if (s && typeof s == "object")
      for (const [u, f] of Object.entries(s))
        bt.includes(u) && (r[u] = f);
    if (n && typeof n == "object") {
      n.all && (o.faces.all = n.all);
      for (const [u, f] of Object.entries(n))
        u !== "all" && bt.includes(u) && f && (o.faces[u] = f);
    }
    const l = new Pt(Object.keys(a).length > 0 ? { faces: a } : {}), c = Object.keys(r).length > 0 ? new Pt({ faces: r }) : void 0;
    return "extras" in e && e.extras ? e.extras.finish = l : Te(e) && (e.finish = l), c && "_finish" in e && (e._finish = c), Te(e) && n && (e.finishOptions = o), !0;
  }
  /**
   * Check if shape needs migration (has old structure)
   */
  static needsMigration(e) {
    const i = e.banding;
    if (i && typeof i == "object" && !(i instanceof _t) && !("sides" in i) && !("faces" in i))
      return !0;
    if ("_banding" in e) {
      const n = e._banding;
      if (n && typeof n == "object" && !(n instanceof _t) && !("sides" in n) && !("faces" in n))
        return !0;
    }
    const s = e.finish;
    if (s && typeof s == "object" && !(s instanceof Pt) && !("sides" in s) && !("faces" in s))
      return !0;
    if ("_finish" in e) {
      const n = e._finish;
      if (n && typeof n == "object" && !(n instanceof Pt) && !("sides" in n) && !("faces" in n))
        return !0;
    }
    return !1;
  }
  /**
   * Validate that migrated data is in correct new format
   */
  static validateMigratedShape(e) {
    try {
      const i = e.banding;
      if (i) {
        if ("faces" in i && i.faces)
          throw new Error("Banding should not have faces property");
        if ("sides" in i && i.sides) {
          const n = Object.keys(i.sides).filter((a) => !Tt.includes(a));
          if (n.length > 0)
            throw new Error(`Invalid side keys in banding: ${n.join(", ")}`);
        }
      }
      const s = e.finish;
      if (s) {
        if ("sides" in s && s.sides)
          throw new Error("Finish should not have sides property");
        if ("faces" in s && s.faces) {
          const n = Object.keys(s.faces).filter((a) => !bt.includes(a));
          if (n.length > 0)
            throw new Error(`Invalid face keys in finish: ${n.join(", ")}`);
        }
      }
      return !0;
    } catch {
      return !1;
    }
  }
  /**
   * Get migration summary
   */
  static getMigrationSummary(e) {
    const i = {
      totalShapes: e.length,
      shapesNeedingMigration: 0,
      shapesWithBanding: 0,
      shapesWithFinish: 0,
      shapesAlreadyMigrated: 0
    };
    return e.forEach((s) => {
      this.needsMigration(s) ? i.shapesNeedingMigration++ : (s.banding || s.finish) && i.shapesAlreadyMigrated++, s.banding && i.shapesWithBanding++, s.finish && i.shapesWithFinish++;
    }), i;
  }
  /**
   * Create backup of shape before migration
   */
  static createBackup(e) {
    const i = {
      banding: e.banding ? JSON.parse(JSON.stringify(e.banding)) : void 0,
      finish: e.finish ? JSON.parse(JSON.stringify(e.finish)) : void 0
    };
    return "_banding" in e && e._banding && (i._banding = JSON.parse(JSON.stringify(e._banding))), "_finish" in e && e._finish && (i._finish = JSON.parse(JSON.stringify(e._finish))), Te(e) && (e.bandingOptions && (i.bandingOptions = JSON.parse(JSON.stringify(e.bandingOptions))), e.finishOptions && (i.finishOptions = JSON.parse(JSON.stringify(e.finishOptions)))), i;
  }
  /**
   * Restore shape from backup
   */
  static restoreFromBackup(e, i) {
    "extras" in e && e.extras ? (i.banding && (e.extras.banding = i.banding), i.finish && (e.extras.finish = i.finish)) : Te(e) && (i.banding && (e.banding = i.banding), i.finish && (e.finish = i.finish)), i._banding && "_banding" in e && (e._banding = i._banding), i._finish && "_finish" in e && (e._finish = i._finish), Te(e) && (i.bandingOptions && (e.bandingOptions = i.bandingOptions), i.finishOptions && (e.finishOptions = i.finishOptions));
  }
}
const op = {
  y1: "l1",
  y2: "l2",
  x1: "w1",
  x2: "w2"
}, lp = {
  l1: "y1",
  l2: "y2",
  w1: "x1",
  w2: "x2"
};
function aa(t = !1) {
  return {
    l1: t,
    l2: t,
    w1: t,
    w2: t
  };
}
function cp(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t
  };
}
function tn(t = !1) {
  return {
    a: t,
    b: t
  };
}
function up(t = !1) {
  return {
    sides: aa(t),
    faces: tn(t)
  };
}
function dp(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t,
    a: t,
    b: t
  };
}
function fp(t) {
  const e = {};
  for (const [i, s] of Object.entries(op))
    i in t && (e[s] = t[i]);
  return e;
}
function hp(t) {
  const e = {};
  for (const [i, s] of Object.entries(lp))
    i in t && (e[s] = t[i]);
  return e;
}
function kt(t) {
  return t === 1 ? !0 : t === 0 ? !1 : t;
}
function si(t) {
  if (!t) return t;
  const e = "x1" in t || "x2" in t || "y1" in t || "y2" in t, i = "l1" in t || "l2" in t || "w1" in t || "w2" in t;
  if (e && i && console.warn("Mixed side format detected in data - using old format (x/y) and ignoring new format (l/w)", t), e) {
    const n = fp(t), a = {};
    return "l1" in n && (a.l1 = kt(n.l1)), "l2" in n && (a.l2 = kt(n.l2)), "w1" in n && (a.w1 = kt(n.w1)), "w2" in n && (a.w2 = kt(n.w2)), a;
  }
  const s = {};
  return "l1" in t && (s.l1 = kt(t.l1)), "l2" in t && (s.l2 = kt(t.l2)), "w1" in t && (s.w1 = kt(t.w1)), "w2" in t && (s.w2 = kt(t.w2)), Object.keys(s).length > 0 ? s : t;
}
function pp(t) {
  return !t || typeof t != "string" ? t : {
    "side.x1": "side.w1",
    "side.x2": "side.w2",
    "side.y1": "side.l1",
    "side.y2": "side.l2"
  }[t] || t;
}
function Di(t) {
  return !t || !Array.isArray(t) ? t : t.map(pp);
}
function gp(t) {
  const e = {};
  if (t.banding && typeof t.banding == "object")
    for (const [i, s] of Object.entries(t.banding))
      s === !0 || s === !1 ? e[i] = s : typeof s == "number" ? e[i] = kt(s) : typeof s == "string" && s.length > 0 && (e[i] = s);
  if (t.bandingType && typeof t.bandingType == "object")
    for (const [i, s] of Object.entries(t.bandingType))
      if (t.banding) {
        const n = e[i];
        (n === !0 || typeof n == "string" && n.length > 0) && (typeof s == "string" && s.length > 0 ? e[i] = s : typeof s == "number" && s !== 0 && (e[i] = String(s)));
      } else
        typeof s == "string" && s.length > 0 ? e[i] = s : typeof s == "number" && s !== 0 && (e[i] = String(s));
  return Object.keys(e).length > 0 ? e : void 0;
}
function ra(t) {
  return t && hp(t);
}
function mp(t) {
  t?.type && delete t.type, yp.call(this, t), bp.call(this, t), vp.call(this, t), t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => oa(e));
}
function yp(t) {
  if (!t?.banding || typeof t.banding != "object") return;
  const e = Object.keys(t.banding);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.banding = {
    labels: Object.keys(t.banding),
    pricing: t.bandingPricing || {}
  }, t.bandingPricing && delete t.bandingPricing);
}
function bp(t) {
  if (!t?.finish || typeof t.finish != "object") return;
  const e = Object.keys(t.finish);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.finish = {
    labels: Object.keys(t.finish),
    pricing: t.finishPricing || {}
  }, t.finishPricing && delete t.finishPricing);
}
function vp(t) {
  if (!t?.planing || typeof t.planing != "object") return;
  const e = Object.keys(t.planing);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.planing = {
    labels: Object.keys(t.planing),
    pricing: t.planingPricing || {}
  }, t.planingPricing && delete t.planingPricing);
}
function oa(t) {
  !t || typeof t != "object" || (fr.needsMigration(t) && fr.migrateShape(t), t._banding && delete t._banding, t._finish && delete t._finish, t._bandingType && delete t._bandingType);
}
function Xo(t) {
  if (t?.enable) return;
  t.enable = {};
  const e = {
    // Existing mappings
    showDiagram: { new: "diagram", map: "equal" },
    enableFocus: { new: "focus", map: "equal" },
    enableMachining: { new: "machining", map: "equal" },
    enableCSVImport: { new: "csvImport", map: "equal" },
    showProgressNumber: { new: "progressNumber", map: "equal" },
    // Extras mappings
    disableBanding: { new: "banding", map: "reverse" },
    disableFinish: { new: "finish", map: "reverse" },
    disablePlaning: { new: "planing", map: "reverse" },
    // NEW
    disableInfo: { new: "info", map: "reverse" },
    // NEW
    disableImageUpload: { new: "imageUpload", map: "reverse" },
    // NEW
    // Other mappings
    disableOrientation: { new: "orientation", map: "reverse" },
    disableClick: { new: "click", map: "reverse" },
    disablePartName: { new: "partName", map: "reverse" }
  };
  for (const i of Object.keys(e))
    if (i in t) {
      const s = e[i];
      t.enable[s.new] = s.map === "reverse" ? !t[i] : t[i], delete t[i];
    }
}
function Uw(t) {
  if (!(!t || typeof t != "object")) {
    if (mp(t), t.parts && Array.isArray(t.parts) && (t.parts = t.parts.map((e) => (e.extras?.banding?.sides && (e.extras.banding.sides = si(e.extras.banding.sides)), e.extras?.finish?.sides && (e.extras.finish.sides = si(e.extras.finish.sides)), e.extras?.planing?.sides && (e.extras.planing.sides = si(e.extras.planing.sides)), e))), t.stock && Array.isArray(t.stock) && (t.stock = t.stock.map((e) => e?.trim ? {
      ...e,
      trim: si(e.trim)
    } : e)), t.options) {
      if (Xo(t.options), t.options.bandingLocations && (t.options.bandingLocations = Di(t.options.bandingLocations)), t.options.finishLocations && (t.options.finishLocations = Di(t.options.finishLocations)), t.options.planingLocations && (t.options.planingLocations = Di(t.options.planingLocations)), t.options.extrasLocationGroups)
        for (const e of ["banding", "finish", "planing"]) {
          const i = t.options.extrasLocationGroups[e];
          i && Array.isArray(i) && i.forEach((s) => {
            s.locations && (s.locations = Di(s.locations));
          });
        }
      if (!t.saw) {
        const e = {}, i = ["bladeWidth", "cutType", "cutPreference", "guillotineOptions", "stackHeight", "stockType"];
        for (const s of i)
          s in t.options && (e[s] = t.options[s], delete t.options[s]);
        Object.keys(e).length > 0 && (console.log("[migrateLegacyData] Migrating saw properties from options to saw:", e), t.saw = e);
      }
    }
    for (const e of ["banding", "finish", "planing"])
      if (t[e]) {
        const i = t[e];
        i.locations && Array.isArray(i.locations) && (i.locations = Di(i.locations)), i.groups && Array.isArray(i.groups) && i.groups.forEach((s) => {
          s.locations && (s.locations = Di(s.locations));
        });
      }
    if (t.saw?.cutPreference && ["efficiency", "length", "width", "beam"].includes(t.saw.cutPreference)) {
      const s = {
        efficiency: { cutType: "guillotine", cutPreference: null },
        length: { cutType: "guillotine", cutPreference: "l" },
        width: { cutType: "guillotine", cutPreference: "w" },
        beam: { cutType: "beam", cutPreference: "l" }
      }[t.saw.cutPreference];
      s && (t.saw.cutType = s.cutType, t.saw.cutPreference = s.cutPreference);
    }
    t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => oa(e)), (t.l !== void 0 || t.w !== void 0 || t.banding !== void 0) && oa(t);
  }
}
function wp(t) {
  if (!t || typeof t != "object")
    return t;
  const e = { ...t };
  return e.saw && (e.saw = Sp(e.saw)), Array.isArray(e.stock) && (e.stock = e.stock.map(xp)), Array.isArray(e.parts) && (e.parts = e.parts.map(kp)), e;
}
function Sp(t) {
  const e = { ...t };
  if (e.guillotineOptions && (e.guillotineOptions = { ...e.guillotineOptions }, e.guillotineOptions.strategy === "stock" && (e.guillotineOptions.strategy = "efficiency")), e.efficiencyOptions) {
    e.efficiencyOptions = { ...e.efficiencyOptions };
    const i = e.efficiencyOptions.primaryCompression;
    i === "x" ? e.efficiencyOptions.primaryCompression = "l" : i === "y" && (e.efficiencyOptions.primaryCompression = "w");
  }
  return e.bladeWidth !== void 0 && (e.bladeWidth = Number(e.bladeWidth)), e.stackHeight !== void 0 && (e.stackHeight = Number(e.stackHeight)), (e.cutPreference === null || e.cutPreference === void 0) && (e.cutType === "guillotine" || e.cutType === "beam") && (e.cutPreference = "l"), e;
}
function xp(t) {
  const e = { ...t };
  return delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.trim && (e.trim = si(e.trim)), e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e.cost !== void 0 && (e.cost = Number(e.cost)), e;
}
function kp(t) {
  const e = { ...t };
  if (delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.banding || e.bandingType) {
    const i = gp(e);
    i && Object.keys(i).length > 0 && (e.extras || (e.extras = {}), e.extras.banding || (e.extras.banding = {}), e.extras.banding.sides = si(i)), delete e.banding, delete e.bandingType;
  }
  if (e.extras?.banding?.sides && (e.extras = { ...e.extras }, e.extras.banding = { ...e.extras.banding }, e.extras.banding.sides = si(e.extras.banding.sides)), e.finish && !e.extras?.finish) {
    if (e.extras || (e.extras = {}), e.extras.finish || (e.extras.finish = {}), e.finish.a !== void 0 || e.finish.b !== void 0) {
      const i = {};
      "a" in e.finish && (i.a = kt(e.finish.a)), "b" in e.finish && (i.b = kt(e.finish.b)), e.extras.finish.faces = i;
    } else
      e.extras.finish.sides = si(e.finish);
    delete e.finish;
  }
  if (e.extras?.finish?.sides && (e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish }, e.extras.finish.sides = si(e.extras.finish.sides)), e.extras?.finish?.faces) {
    e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish };
    const i = e.extras.finish.faces;
    "a" in i && (i.a = kt(i.a)), "b" in i && (i.b = kt(i.b));
  }
  return e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e;
}
const Ip = { id: "mini-stock-nav" }, Pp = ["onMousedown"], Cp = { class: "id" }, Ap = /* @__PURE__ */ We({
  __name: "StockNavigation",
  props: {
    stockList: {
      type: Array,
      default: () => []
    },
    primaryColor: {
      type: String,
      default: ""
    },
    secondaryColor: {
      type: String,
      default: ""
    },
    activeStockAutoId: {
      type: String,
      default: null
    }
  },
  emits: ["show-stock"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = (a) => {
      s("show-stock", a);
    };
    return (a, r) => (w(), L("div", Ip, [
      (w(!0), L(Re, null, Ke(i.stockList, (o, l) => (w(), L("button", {
        type: "button",
        key: l,
        class: _e(["c-btn c-btn--col-4 c-btn--sm", { selected: o.autoId === i.activeStockAutoId }]),
        style: lt({
          backgroundColor: o.autoId === i.activeStockAutoId ? "#" + i.secondaryColor : "#" + i.primaryColor
        }),
        onMousedown: (c) => n(o.autoId)
      }, [
        $("div", Cp, ae(l + 1), 1),
        fs($("div", { class: "stack legibility" }, ae(o.stack), 513), [
          [sn, typeof o?.stack == "number" && o.stack > 1]
        ])
      ], 46, Pp))), 128))
    ]));
  }
});
function Tp(t) {
  const e = t.x, i = t.x + t.l, s = Et().domain([e, i]).range([this.scales.xPositionScale(e), this.scales.xPositionScale(i)]), n = t.y, a = t.y + t.w, r = Et().domain([n, a]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(a)]), o = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + o})`).call(qs(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + o})`).attr("class", "axis shape x").call(qs(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), t?.stock?.saw?.stockType !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - o}, 0)`).call(zs(r).tickValues(r.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - o}, 0)`).attr("class", "axis shape y").call(zs(r).tickValues(r.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Op() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((e) => {
    e.transition().duration(0).call(Rr(this.scales.xScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dy", -5);
  });
  const t = this.requiresStretch(this.props.stock.value);
  (!t || t && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((e) => {
    e.transition().duration(0).call(jr(this.scales.yAxisScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dx", 5);
  });
}
function Qo(t, e, i) {
  !i || !t?.length || t.forEach((s, n) => {
    const [a, r] = s;
    i === "x" ? Lp.call(this, a, r, e[n]) : Fp.call(this, a, r, e[n]);
  });
}
function Lp(t, e, i) {
  const s = Et().domain([t, e]).range([
    this.scales.xPositionScale(t),
    this.scales.xPositionScale(e)
  ]), n = el(s.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(qs(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(i)));
  a.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (r, o, l) => l[o]?.getBBox()?.height + 10), this.axes.cutMeasurementXAxes.push(a);
}
function Fp(t, e, i) {
  const s = Et().domain([t, e]).range([
    this.scales.yPositionScale(t),
    this.scales.yPositionScale(e)
  ]), n = el(s.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(zs(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(i)));
  $p(a), this.axes.cutMeasurementYAxes.push(a);
}
function el(t) {
  return (t[1] - t[0]) / 2 + t[0];
}
function $p(t) {
  t.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (e, i, s) => s[i]?.getBBox()?.height + 10).attr("dx", (e, i, s) => s[i]?.getBBox()?.width / 4).attr("transform", (e, i, s) => "rotate(90) translate(" + s[i]?.getBBox()?.width / 4 + ")");
}
function us() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Dp() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function wn() {
  this.axes.cutMeasurementXAxes?.length && (this.axes.cutMeasurementXAxes.forEach((t) => t.remove()), this.axes.cutMeasurementXAxes.length = 0), this.axes.cutMeasurementYAxes?.length && (this.axes.cutMeasurementYAxes.forEach((t) => t.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function tl(t) {
  return t.autoId;
}
function Ep(t, e) {
  const i = /* @__PURE__ */ new Set();
  function s(n) {
    if (!(!n || i.has(n.autoId))) {
      if (i.add(n.autoId), n.autoId === e)
        return n;
      if (n.children && Array.isArray(n.children)) {
        for (const a of n.children)
          if (a && a.autoId !== n.autoId) {
            const r = s(a);
            if (r) return r;
          }
      }
    }
  }
  return s(t);
}
function Ls({ parent: t, near: e, far: i }) {
  if (!this.props.containerWidth)
    return !1;
  const s = [t, e, i].filter((n) => n);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(s, tl).join(
    (n) => n.append("rect").attr("class", "segment").call((a) => hr.call(this, a)),
    (n) => n.call((a) => hr.call(this, a)),
    (n) => n.remove()
  ), this.state.env === "development" && _p.call(this, s), !this.settings.app && this.state.env === "development" && Mp.call(this);
}
function hr(t) {
  return t.classed("offcut", (e) => e.offcut).classed("near", (e) => e.type === "near").classed("far", (e) => e.type === "far").classed("parent", (e, i) => e.id !== "root" && i === 0).attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e));
}
function _p(t) {
  this.selections.segmentGroup.selectAll("text").data(t, tl).join(
    (e) => e.append("text").attr("class", "segment-text").call((i) => pr.call(this, i)),
    (e) => e.call((i) => pr.call(this, i)),
    (e) => e.remove()
  );
}
function pr(t) {
  return t.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function Mp() {
  this.selections.segmentRectangles.on("mousedown", function(t, e) {
    console.log("segment", `[${e?.parentId || "-"}]->[${e.id}] {P${e.phase}} ${e.l}x${e.w} ${e.cutDirection} ${e.hasHeadCut ? "HEAD" : "NORM"}`), console.log(e);
  });
}
function il(t) {
  const e = t?.guillotineState?.parentSegmentID;
  if (!this.props.segments?.value?.length)
    return !1;
  let i;
  if (e) {
    for (const n of this.props.segments.value)
      if (i = Ep(n, e), i) break;
  } else {
    const n = t?.stock?.autoId;
    i = this.props.segments.value.find((a) => a.stock?.autoId === n);
  }
  if (i === void 0)
    return !1;
  const s = i?.children;
  return s?.length ? {
    parent: i,
    children: s
  } : !1;
}
const { currentCutIndex: sl } = ua();
function Rp() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (t, e) => e).join(
    (t) => t.append("line").attr("class", "cut").call((e) => gr.call(this, e)),
    (t) => t.call((e) => gr.call(this, e)),
    (t) => t.remove()
  ), rl.call(this));
}
function gr(t) {
  return t.attr("stroke-width", (e) => {
    const i = this.scales.measurementScale(this.getBladeWidth(e.stock));
    return i < 1 ? 1 : Math.ceil(i);
  }).attr("x1", (e) => {
    let i = e.x1;
    if (e.isTrim && e.stock?.cutType === "beam") {
      const s = this.getBladeWidth(e.stock) / 2;
      e.x1 === e.x2 && (i = e.x1 < e.stock.l / 2 ? e.x1 - s : e.x1 + s);
    }
    return this.scales.xPositionScale(i);
  }).attr("x2", (e) => {
    let i = e.x2;
    if (e.isTrim && e.stock?.cutType === "beam") {
      const s = this.getBladeWidth(e.stock) / 2;
      e.x1 === e.x2 && (i = e.x2 < e.stock.l / 2 ? e.x2 - s : e.x2 + s);
    }
    return this.scales.xPositionScale(i);
  }).attr("y1", (e) => {
    let i = e.y1;
    if (e.isTrim && e.stock?.cutType === "beam") {
      const s = this.getBladeWidth(e.stock) / 2;
      e.y1 === e.y2 && (i = e.y1 < e.stock.w / 2 ? e.y1 - s : e.y1 + s);
    }
    return this.scales.yPositionScale(i);
  }).attr("y2", (e) => {
    let i = e.y2;
    if (e.isTrim && e.stock?.cutType === "beam") {
      const s = this.getBladeWidth(e.stock) / 2;
      e.y1 === e.y2 && (i = e.y2 < e.stock.w / 2 ? e.y2 - s : e.y2 + s);
    }
    return this.scales.yPositionScale(i);
  }).classed("trim", (e) => e.isTrim).classed("head", (e) => e.isHead);
}
function nl(t, e, i) {
  return t.guillotineState.parentSegmentID === e && i && t.guillotineState.segmentCutOrder < i;
}
function al(t, e) {
  return t.guillotineState?.parentSegmentID !== null && !t?.isTrim ? t.guillotineState.parentSegmentID === e : !1;
}
function jp(t, e, i, s) {
  this.selections.cutLines.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] || !s && a.guillotineState.parentSegmentID === e ? "visible" : "hidden"), sl.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] ? "visible" : "hidden")), this.selections.cutLines.classed("highlight", (a) => t.stock.cutType === "guillotine" && a.isTrim ? a.position === t.type : a.guillotineState[i] === t.guillotineState[i]), this.selections.cutLines.classed("ptx-dummy", (a) => a?.ptxData?.isDummy), s || Vp.call(this, t, e);
}
function Bp(t, e, i, s, n) {
  this.selections.cutLines.style("visibility", (r, o) => o <= e ? "visible" : "hidden"), this.state.env === "development" && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (r, o) => o <= e ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (r, o) => o <= e ? "visible" : "hidden"));
  let a;
  if (t?.dimension === "l" ? a = [
    [0 + (i.l1 ?? 0), t.y1 - n],
    [t.y1 + n, t.stock.w - (i?.y2 ? i.y2 : 0)]
  ] : t?.dimension === "w" && (a = [
    [0 + (i.w1 ?? 0), t.x1 - n],
    [t.x1 + n, t.stock.l - (i?.x2 ? i.x2 : 0)]
  ]), a?.length) {
    const r = [
      a[0][1] - a[0][0],
      a[1][1] - a[1][0]
    ];
    this.state.device === "desktop" && !t.isTrim && Qo.call(this, a, r, s);
  }
  this.selections.cutLines.classed("highlight", (r, o) => o === e);
}
function rl() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1), this.selections?.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), this.selections?.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return Math.max(1, Math.ceil(e));
  }), us.call(this), wn.call(this);
}
function Vp(t, e) {
  const i = t?.guillotineState?.segmentCutOrder;
  if (i == null) return;
  this.selections.cutLines.classed("completed", (f) => nl(f, e, i)), this.selections.cutLines.classed("inside-segment", (f) => al(f, e));
  const s = il.call(this, t);
  if (s === !1) return;
  const { parent: n, children: a } = s, { near: r } = ol(t, a);
  if (!r) return;
  let o = [], l;
  const c = this.getHalfBladeWidth(t.stock), u = t.dimension === "l" ? "y" : "x";
  t?.dimension === "l" ? (o = [
    [
      r.y,
      r.y + r.w
    ],
    [
      t.y1 + c,
      n.y + n.w
    ]
  ], l = [t?.distances?.bottom, t?.distances.top]) : t?.dimension === "w" && (o = [
    [
      r.x,
      r.x + r.l
    ],
    [
      t.x1 + c,
      n.x + n.l
    ]
  ], l = [t?.distances?.left, t?.distances?.right]), this.state.device === "desktop" && !t.isTrim && l && Qo.call(this, o, l, u);
}
function Np(t = null, e = "") {
  if (t === null || this.selections.cutLines.empty()) return;
  if (this.props.stock.value.saw.cutType === "guillotine") {
    const g = this.props.cuts.value.filter((k) => k.isTrim);
    t = t + g.length, t - g.length >= this.props.cuts.value.length - g.length && (sl.value = this.props.cuts.value.length - g.length - 1);
  }
  const i = this.props.cuts.value[t];
  if (!i) return;
  if (us.call(this), wn.call(this), t !== null && t >= 0 && t < this.selections.cutLines.size()) {
    const g = this.selections.cutLines.nodes()[t].parentElement;
    if (!g) return;
    ft(g).raise();
  }
  const s = i.guillotineState?.parentSegmentID, n = this.getHalfBladeWidth(i.stock), a = i.dimension === "l" ? "y" : "x", r = i?.stock?.trim, o = e === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes(i?.stock?.cutType) && s !== null && typeof s < "u" ? jp.call(this, i, s, o, e) : Bp.call(this, i, t, r, a, n), Gp.call(this, i, t, s), e === "ptx") {
    this.removeSegments();
    return;
  }
  const l = il.call(this, i);
  if (l === !1)
    return;
  const { parent: c, children: u } = l;
  if (!i?.guillotineState?.parentSegmentID)
    return Ls.call(this, { parent: c });
  const { near: f, far: h } = ol(i, u);
  if (i.beamTrimL1 || i.beamTrimW1) {
    if (i.beamTrimL1) {
      const g = u.find((V) => V.offcut === !0 && V.x === 0 && V.l === i.stock?.trim?.l1), k = u.find((V) => V.type === "near" && V !== g), E = u.find((V) => V.type === "far" && V !== g && V.phase > c.phase);
      if (g)
        return Ls.call(this, { parent: g, near: k, far: E });
    } else if (i.beamTrimW1) {
      const g = u.find((V) => V.offcut === !0 && V.y === 0 && V.w === i.stock?.trim?.w1);
      let k = u.find((V) => V.type === "near" && V !== g);
      const E = u.find((V) => V.type === "far" && V !== g && V.y > (g?.y || 0));
      if (k && i.stock && (k = {
        ...k,
        x: 0,
        l: i.stock.l
      }), g)
        return Ls.call(this, { parent: g, near: k, far: E });
    }
  }
  Ls.call(this, { parent: c, near: f, far: h });
}
function ol(t, e) {
  const i = t.dimension === "l" ? "y" : "x", s = t.dimension === "l" ? "w" : "l", n = e.find((r) => r.type === "near" && r[i] + r[s] === t[i + "1"] - t.stock.halfBladeWidth), a = e.find((r) => r.type === "far" && r[i] === t[i + "1"] + t.stock.halfBladeWidth);
  return { near: n, far: a };
}
function Gp(t, e, i) {
  this.selections.cutLines.attr("stroke-width", (s, n) => {
    const a = this.scales.measurementScale(this.getBladeWidth(s.stock));
    let r = Math.max(1, Math.ceil(a));
    const o = t?.guillotineState?.segmentCutOrder;
    return (nl(s, i, o) || al(s, i)) && (r += 1), n === e && Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock))) < 5 && (r = 5), r;
  });
}
function qp(t) {
  if (console.log("[Diagram] drawPositions called:", {
    shapeId: t?.id,
    shapeRot: t?.rot,
    stockId: this.props.stock?.value?.id,
    hasStock: !!this.props.stock,
    isMain: this.settings.main
  }), !this.props.stock)
    return console.warn("[Diagram] drawPositions: no stock"), !1;
  if (!t || !this.settings.main)
    return console.warn("[Diagram] drawPositions: no shape or not main", {
      hasShape: !!t,
      isMain: this.settings.main
    }), !1;
  let e;
  const i = t.willItFit(this.props.stock.value, t.rot);
  if (console.log("[Diagram] drawPositions: willItFit check:", {
    willFit: i,
    shapeL: t.l,
    shapeW: t.w,
    shapeRot: t.rot,
    stockL: this.props.stock.value.l,
    stockW: this.props.stock.value.w
  }), !i) return !1;
  const s = gh(
    null,
    this.props.shapes.value,
    this.props.stock.value
  );
  let n;
  if (this.props.stock.value.cutType === "efficiency") {
    if (this.state.env === "development") {
      let r = function(u) {
        return `${u.x1}-${u.y1}-${u.x2}-${u.y2}`;
      }, o = function(u) {
        u.attr("class", "ray").attr("x1", (f) => this.scales.xPositionScale(f.x1)).attr("x2", (f) => this.scales.xPositionScale(f.x2)).attr("y1", (f) => this.scales.yPositionScale(f.y1)).attr("y2", (f) => this.scales.yPositionScale(f.y2));
      };
      if (this.state.env !== "development") return;
      const c = No(this.props.shapes.value, this.props.stock.value).flatMap((u) => Object.values(u.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(c, r).join(
        (u) => u.append("line").call((f) => o.call(this, f)),
        (u) => u.call((f) => o.call(this, f)),
        (u) => u.remove()
      );
    }
    n = mh(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const a = new li();
  for (const r of s.toArray()) {
    const o = Go(t, r, this.props.stock.value);
    o && a.addPoints(o.toArray());
  }
  if (n) {
    const r = n.toArray();
    for (const o of r) {
      const l = hh(t, o, this.props.stock.value);
      l && a.addPoints(l.toArray());
    }
  }
  this.props.stock.value.cutType === "efficiency" ? ([
    new ct(0 + (this.props.stock.value.trim.l1 ?? 0), 0 + (this.props.stock.value.trim.w1 ?? 0)),
    new ct(0 + (this.props.stock.value.trim.l1 ?? 0), 0 + (this.props.stock.value.trim.w1 ?? 0)),
    new ct(
      this.props.stock.value.l - t.l - (this.props.stock.value.trim.l2 ?? 0),
      0 + (this.props.stock.value.trim.w1 ?? 0)
    ),
    new ct(
      0 + (this.props.stock.value.trim.l1 ?? 0),
      this.props.stock.value.w - t.w - (this.props.stock.value.trim.w2 ?? 0)
    ),
    new ct(
      this.props.stock.value.l - t.l - (this.props.stock.value.trim.l2 ?? 0),
      this.props.stock.value.w - t.w - (this.props.stock.value.trim.w2 ?? 0)
    )
  ].forEach((r) => a.add(r)), e = a.toArray()) : (a.add(new ct(0 + (this.props.stock.value.trim.l1 ?? 0), 0 + (this.props.stock.value.trim.w1 ?? 0))), e = a.toArray());
  for (let r = e.length; r--; ) {
    const o = e[r];
    t.x = o.x, t.y = o.y;
    for (const l of this.props.shapes.value)
      if (this.collision(t, l, this.props.stock.value)) {
        e.splice(r, 1);
        break;
      }
  }
  return console.log("[Diagram] drawPositions: filtered positions count:", e?.length), zp.call(this, e, t), Wp.call(this, e, t), e?.length ? (console.log("[Diagram] drawPositions: success, returning true"), !0) : (console.warn("[Diagram] drawPositions: no valid positions after filtering"), !1);
}
function zp(t, e) {
  function i(n) {
    return `${n.x}-${n.y}`;
  }
  function s(n, a) {
    n.attr("data-id", (r, o) => o).attr("class", "shape ghost").attr("x", (r) => (a.x = r.x, this.getRectangleCoordinate(a, "x"))).attr("y", (r) => (a.y = r.y, this.getRectangleCoordinate(a, "y"))).attr("width", this.getWidthAttribute(a)).attr("height", this.getHeightAttribute(a)).on("mousedown", (r, o) => {
      console.log("[Diagram] ghostShape mousedown (position click):", {
        shapeId: a.id,
        shapeParentId: a.parentId,
        position: { x: o.x, y: o.y },
        shapeRot: a.rot
      }), this.callbacks.onMoveShape(a, o);
    });
  }
  this.selections.ghostShapeGroup.selectAll("rect").data(t, i).join(
    (n) => n.append("rect").call((a) => s.call(this, a, e)),
    (n) => n.call((a) => s.call(this, a, e)),
    (n) => n.remove()
  ), this.state.hasTouch || this.selections.ghostShapeGroup.selectAll("rect").on(
    "mouseover",
    function(n) {
      n.stopPropagation(), ft(this).classed("hover", !0), ft(this).raise();
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), ft(this).classed("hover", !1);
    },
    {
      passive: !0
    }
  );
}
function Wp(t, e) {
  function i(n) {
    return `${n.x}-${n.y}`;
  }
  function s(n) {
    n.attr("class", "dot").attr("cx", (a) => this.scales.xPositionScale(a.x)).attr("cy", (a) => this.scales.yPositionScale(a.y)).attr("r", 6).on("mousedown", (a, r) => {
      this.callbacks.onMoveShape(e, r);
    });
  }
  this.selections.dotGroup.selectAll("circle").data(t, i).join(
    (n) => n.append("circle").call((a) => s.call(this, a)),
    (n) => n.call((a) => s.call(this, a)),
    (n) => n.remove()
  ), e.x = 0, e.y = 0, this.state.hasTouch || this.selections.dotGroup.selectAll("circle").on(
    "mouseover",
    function(n) {
      n.stopPropagation(), ft(this).classed("hover", !0);
      const a = ft(this).attr("data-id"), r = ft(`.ghost[data-id="${a}"]`);
      r.raise(), r.classed("highlight", !0);
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), ft(this).classed("hover", !1);
      const a = ft(this).attr("data-id");
      ft(`.ghost[data-id="${a}"]`).classed(
        "highlight",
        !1
      );
    },
    {
      passive: !0
    }
  );
}
function Hp() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text id").text((e) => mr.call(this, e)).classed("hidden", (e, i, s) => this.isTextHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1),
    (t) => t.text((e) => mr.call(this, e)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text name").text((e) => yr.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, i, s) => this.isNameHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const n = s[i];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    }),
    (t) => t.text((e) => yr.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, i, s) => this.isNameHidden(e, i, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const n = s[i];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text length").text((e) => br.call(this, e)).classed("hidden", (e, i, s) => this.isLengthHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const a = s[i].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    }),
    (t) => t.text((e) => br.call(this, e)).classed("hidden", (e, i, s) => this.isLengthHidden(e, i, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const a = s[i].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text width").text((e) => vr.call(this, e)).classed("hidden", (e, i, s) => this.isWidthHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (e, i, s) => {
      const n = s[i], a = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), r = this.getRectangleCoordinate(e, "y", "center"), o = this.state.device === "mobile" ? 90 : -90;
      return `translate(${a},${r}) rotate(${o})`;
    }),
    (t) => t.text((e) => vr.call(this, e)).classed("hidden", (e, i, s) => this.isWidthHidden(e, i, s)).attr("transform", (e, i, s) => {
      const n = s[i], a = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), r = this.getRectangleCoordinate(e, "y", "center"), o = this.state.device === "mobile" ? 90 : -90;
      return `translate(${a},${r}) rotate(${o})`;
    })
  );
}
function mr(t) {
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        {
          const e = t.guillotineState.myStripDirection, i = t.group.addedAsGroup;
          let s = "";
          if (e === "l" ? s = `→ ${t.id}` : e === "w" && (s = `↑ ${t.id}`), t?.priority?.[t?.stock?.parentId] && (s += "P"), i && (s += "G"), s.length) return s;
        }
        break;
      case "groups":
        {
          const e = t.group.reference, i = t.group.addedAsGroup;
          let s = null;
          if (e?.id ? s = e.id : i && (s = i.id.split(".")[0]), s) {
            const n = s.replace(/-[hv]$/, "").toUpperCase();
            return s.endsWith("-h") ? `→ ${n}` : s.endsWith("-v") ? `↑ ${n}` : n;
          }
        }
        break;
      case "positions":
        return t.id;
      case "placementOrder":
        return t.placementOrder?.toString() || "";
    }
  return t.parentId, t.parentId;
}
function yr(t) {
  return !t?.name || typeof t?.name != "string" ? null : t.name.toUpperCase().trim();
}
function br(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : Q({ v: t.l, o: this.numberConfig }).toString();
}
function vr(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : Q({ v: t.w, o: this.numberConfig }).toString();
}
const Up = (t) => t.id;
function Yp() {
  if (!this.props.containerWidth) return;
  us.call(this);
  const t = this.props.shapes.value.reduce((e, i) => {
    const s = parseInt(i.parentId);
    return s > e ? s : e;
  }, 0);
  this.scales.shapeColorScale.domain([1, t]), this.state.env === "development" && Zp.call(this), Kp.call(this);
}
function Kp() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, Up).join(
    (t) => {
      const e = t.append("g").attr("class", "shape-group");
      return wr.call(this, e), Sr.call(this, e), e.on("mousedown", xr.bind(this)), e;
    },
    (t) => (wr.call(this, t), Sr.call(this, t), t.on("mousedown", xr.bind(this)), t),
    (t) => t.remove()
  ), ig.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => Hp.call(this)), this.selections.shapeWrappers.size() > 0;
}
function Zp() {
  let t = 1 / 0, e = -1 / 0;
  for (const n of this.props.shapes.value) {
    const a = n?.bestScore?.total;
    if (a !== 0 && a !== null && a !== void 0) {
      t = a, e = a;
      break;
    }
  }
  const i = this.props.shapes.value.reduce((n, a) => {
    const r = a?.bestScore?.total;
    return r === 0 || r === null || r === void 0 ? n : r < n ? r : n;
  }, t), s = this.props.shapes.value.reduce((n, a) => {
    const r = a?.bestScore?.total;
    return r == null ? n : r > n ? r : n;
  }, e);
  this.scales.scoreColorScale = ls([qt(251, 224, 255), qt(122, 0, 138)]).domain([i, s]);
}
function wr(t) {
  const e = t.selectAll("rect.shape").data((i) => [i]).join("rect").attr("class", "shape").attr("x", (i) => this.getRectangleCoordinate(i, "x")).attr("y", (i) => this.getRectangleCoordinate(i, "y")).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i)).style("fill", (i) => ds.call(this, i));
  this.selections.shapeRectangles ? this.selections.shapeRectangles = Br(
    this.selections.shapeRectangles.nodes().concat(e.nodes())
  ) : this.selections.shapeRectangles = e;
}
function Sr(t) {
  !this.settings.main || this.settings.app || this.state.hasTouch || t.on("mouseover", (e) => {
    if (this?.props.moveMode && this.state.moving) return;
    const i = ft(e.target);
    i.classed("hover", !0), i.classed("selected") || i.style("fill", this.config.colors.partSelected.toString());
  }, { passive: !0 }).on("mouseout", (e, i) => {
    const s = ft(e.target);
    s.classed("hover", !1), s.classed("selected") || s.style("fill", ds.call(this, i));
  }, { passive: !0 });
}
function xr(t, e) {
  if (console.log("[Diagram] handleShapeClick:", {
    shapeId: e.id,
    shapeParentId: e.parentId,
    moving: this.state.moving,
    moveMode: this.props.moveMode.value,
    isMain: this.settings.main
  }), this.state.moving || !this.settings.main)
    return console.log("[Diagram] handleShapeClick: blocked", {
      moving: this.state.moving,
      main: this.settings.main
    }), !1;
  this.state.env === "development" && !this.props.moveMode.value && Jp.call(this, t, e), (this.settings.app || this.settings.embed) && eg.call(this, t, e), this.state.device === "desktop" && !this.props.moveMode.value && (wn.call(this), Tp.call(this, e)), this.props.moveMode.value ? (console.log("[Diagram] handleShapeClick: calling onAddToPartsBin", {
    shapeId: e.id
  }), this.callbacks.onAddToPartsBin(e)) : (console.log("[Diagram] handleShapeClick: calling findShape", {
    shapeId: e.id
  }), this.findShape.call(this, e.id));
}
function Jp(t, e) {
  if (e) {
    let i;
    switch (this.state.debug) {
      case "guillotine":
        i = [
          "id",
          "placementOrder",
          "priority",
          "guillotineState.myPhase",
          "guillotineState.myStripDirection",
          "guillotineState.myStripParent.id",
          "group.addedAsGroup"
        ], Qp.call(this, e);
        break;
      case "groups":
        i = ["id", "placementOrder", "group.addedAsGroup", "group.reference"];
        break;
      case "score":
        i = ["id", "placementOrder", "bestScore.score"];
        break;
      default:
        i = ["id", "placementOrder", "priority", "group.addedAsGroup", "bestScore.score", "upDirection"];
    }
    console.table(Xp(e, i));
  }
}
function Xp(t, e) {
  return e.reduce((i, s) => {
    const n = og(t, s);
    return i[s] = Array.isArray(n) ? n.join(", ") : n, i;
  }, {});
}
function Qp(t) {
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const e = t.guillotineData?.myStripParent;
  e && this.selections.shapeWrappers.filter((n) => n.id === e || n.group.addedAsGroup === e).select("rect").classed("highlight-a", !0);
  const i = this.props.shapes.value.find((s) => s.id === e)?.guillotineState?.myStripParent;
  i && this.selections.shapeWrappers.filter((n) => n.id === i || n.group.addedAsGroup === e).select("rect").classed("highlight-b", !0);
}
function eg(t, e) {
  if (this.settings.app || this.settings.embed) {
    const i = {
      name: e.name,
      id: e.id,
      x: e.x,
      y: e.y,
      l: e.l,
      w: e.w,
      banding: e?.extras?.banding && typeof e.extras.banding == "object" ? e.extras.banding : null,
      rot: e.rot,
      stock: e?.stock?.id,
      color: ds.call(this, e),
      notes: e?.notes
    };
    if (typeof this.callbacks.onPartClick == "function" && this.callbacks.onPartClick(i), this.settings.app) return !1;
  }
  if (this.settings.app) return !1;
}
function ds(t) {
  const e = qt(204, 204, 204);
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        if (t.group.addedAsGroup)
          return qt(43, 156, 16);
        if (t.firstShape.isFirstShape)
          return qt(255, 171, 231);
        if (typeof t.guillotineState.myPhase == "number") {
          const n = [0, 115, 255], a = [176, 255, 231];
          return `rgb(${n.map((o, l) => Math.round(o + t.guillotineState.myPhase / 5 * (a[l] - o))).join(",")})`;
        }
        break;
      case "groups":
        if (t.group.addedAsGroup)
          return qt(43, 156, 16);
        break;
      case "priorityShapes":
        if (t?.priority && t.priority?.[t.stock.parentId])
          return qt(139, 171, 46);
        break;
      case "placementOrder": {
        const n = this.props.shapes.value.reduce((a, r) => {
          const o = r.placementOrder ?? 0;
          return o > a ? o : a;
        }, 0);
        if (n > 0 && typeof t.placementOrder == "number") {
          const a = [0, 115, 255], r = [255, 50, 50], o = t.placementOrder / n;
          return `rgb(${a.map((c, u) => Math.round(c + o * (r[u] - c))).join(",")})`;
        }
        break;
      }
      case "score": {
        const n = t?.bestScore?.total ? this.scales.scoreColorScale(t.bestScore.total) : null;
        if (n != null && typeof n.toString == "function")
          return n;
        if (n != null && typeof n.r == "number" && typeof n.g == "number" && typeof n.b == "number")
          return console.warn("Detected corrupted score color object from scale:", n, "for shape:", t), qt(n.r, n.g, n.b, n.opacity ?? 1);
      }
    }
  const i = parseInt(t.parentId);
  let s;
  return this.scales.shapeColorScale && typeof this.scales.shapeColorScale == "function" ? s = this.scales.shapeColorScale(i) : (console.error("shapeColorScale is not initialized or is not a function!", this.scales.shapeColorScale), s = null), s != null && typeof s.toString == "function" ? s : s != null && typeof s.r == "number" && typeof s.g == "number" && typeof s.b == "number" ? qt(s.r, s.g, s.b, s.opacity ?? 1) : (console.warn("Shape color scale returned null, undefined, or unexpected non-color value for shape:", t, s), e);
}
const kr = 3;
function tg(t) {
  const e = [];
  for (const i of t) {
    const s = i.extras?.banding;
    if (i.added && s?.sides)
      for (const [n, a] of Object.entries(s.sides)) {
        if (!a || ["a", "b", "c", "d"].includes(n)) continue;
        let r = n;
        if (i.rot) {
          const l = Ao({ [n]: !0 }, "cc");
          r = Object.keys(l)[0];
        }
        const o = sg.call(this, i, r);
        o && e.push(o);
      }
  }
  return e;
}
function Ir(t) {
  const e = kr / 2;
  return t.attr("class", "banding").attr("x1", (i) => this.scales.xPositionScale(i.l1) + Fs.call(this, i.type, "x", e)).attr("x2", (i) => this.scales.xPositionScale(i.l2) + Fs.call(this, i.type, "x", e)).attr("y1", (i) => this.scales.yPositionScale(i.w1) + Fs.call(this, i.type, "y", e)).attr("y2", (i) => this.scales.yPositionScale(i.w2) + Fs.call(this, i.type, "y", e)).attr("stroke-width", kr).attr("stroke", "white");
}
function ig(t) {
  if (!this.settings.main) return;
  const e = tg.call(this, t);
  if (e.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(e, (i, s) => s).join(
    (i) => i.append("line").call((s) => Ir.call(this, s)),
    (i) => i.call((s) => Ir.call(this, s)),
    (i) => i.remove()
  );
}
function Fs(t, e, i) {
  return {
    l1: { x: 0, y: (this.flipY, -i) },
    // length side 1 (bottom): move up in screen space (inward)
    l2: { x: 0, y: (this.flipY, i) },
    // length side 2 (top): move down in screen space (inward)
    w1: { x: this.flipX ? -i : i, y: 0 },
    // width side 1 (left): move right (inward)
    w2: { x: this.flipX ? i : -i, y: 0 }
    // width side 2 (right): move left (inward)
  }[t]?.[e] ?? 0;
}
function sg(t, e) {
  const i = {
    l1: t.x,
    l2: t.x,
    w1: t.y,
    w2: t.y,
    type: e
  };
  switch (e) {
    case "l1":
      i.w1 = i.w2 = t.y, i.l2 = t.x + t.l;
      break;
    case "l2":
      i.w1 = i.w2 = t.y + t.w, i.l2 = t.x + t.l;
      break;
    case "w1":
      i.l1 = i.l2 = t.x, i.w2 = t.y + t.w;
      break;
    case "w2":
      i.l1 = i.l2 = t.x + t.l, i.w2 = t.y + t.w;
      break;
    default:
      return null;
  }
  return i;
}
function ng(t) {
  this.selections.shapeWrappers.style("visibility", (e) => e?.placementOrder >= t ? "hidden" : "visible");
}
const Pr = (t) => t.id;
function Cr(t) {
  return t.style("fill", this.config.colors.stock).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Ar(t) {
  return t.style("fill", "url(#stripes)").attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function ag() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), Op.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], Pr).join(
    (t) => t.append("rect").attr("class", "background stock").call((e) => Cr.call(this, e)),
    (t) => t.call((e) => Cr.call(this, e)),
    (t) => t.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], Pr).join(
    (t) => t.append("rect").attr("class", "stock-pattern").call((e) => Ar.call(this, e)),
    (t) => t.call((e) => Ar.call(this, e)),
    (t) => t.remove()
  );
}
function rg(t) {
  return typeof t == "string" && t.length === 6 && !isNaN(+("0x" + t.replace("#", "")));
}
function og(t, e) {
  return Ue(t, e);
}
class lg {
  config;
  props;
  settings;
  options;
  numberConfig;
  callbacks;
  selections;
  state;
  scales;
  axes;
  constructor(e) {
    if (this.config = e, this.selections = {}, !e.elementID || (this.selections.el = ft(e.elementID), this.selections.el === null)) return;
    const i = this.selections.el.node();
    i !== null && (this.selections.htmlEl = i, this.scales = {
      xScale: Et(),
      yScale: Et(),
      yPositionScale: Et(),
      xPositionScale: Et(),
      yAxisScale: Et(),
      measurementScale: Et(),
      shapeColorScale: ls(),
      scoreColorScale: ls()
    }, this.axes = {
      cutMeasurementXAxes: [],
      cutMeasurementYAxes: []
    }, this.state = {
      env: "production",
      device: "desktop",
      debug: "",
      hasTouch: !1,
      stretched: !1,
      moving: !1,
      moveRotation: !1,
      highlightguillotine: !1,
      width: 0,
      height: 0,
      w: 0,
      h: 0,
      padding: 0,
      mobileBreakpoint: 768,
      axisSpacing: 20,
      shapeColors: {}
    }, this.props = e.props, this.settings = e.settings, this.options = e.options, this.callbacks = e.callbacks, this.numberConfig = e.numberConfig, this.initColors(e), this.initNumbers(e), this.init());
  }
  initColors(e) {
    const i = {
      partA: "#1d9bc4",
      partB: "#127da1",
      partSelected: "#1bc319",
      stock: "#ffd166",
      text: "#ffffff"
    }, s = (n, a) => qt("#" + (rg(n?.replace("#", "")) ? n.replace("#", "") : a.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(i).map(([n, a]) => [
        n,
        s(e.colors?.[n], a)
      ])
    ), this.scales.shapeColorScale = ls([
      this.config.colors.partA,
      this.config.colors.partB
    ]);
  }
  initNumbers(e) {
    this.numberConfig = e.numberConfig, (this.numberConfig.decimalPlaces === null || this.numberConfig.decimalPlaces === void 0 || isNaN(this.numberConfig.decimalPlaces)) && (this.numberConfig.decimalPlaces = 2), (this.numberConfig.fractionRoundTo === null || this.numberConfig.fractionRoundTo === void 0 || isNaN(this.numberConfig.fractionRoundTo)) && (this.numberConfig.fractionRoundTo = 0);
  }
  init() {
    this.state.hasTouch = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    const e = this.selections.htmlEl.querySelector("svg");
    if (e === null) {
      const i = this.selections.el.append("svg").attr("class", "vis");
      if (i === null) return;
      i.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), i.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(90)").attr("id", "grain-l").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), i.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("id", "grain-w").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), this.selections.svgCanvas = i;
    } else
      this.selections.svgCanvas = ft(e);
    this.selections.axisGroup = this.selections.svgCanvas.append("g").attr("class", "axis-group"), this.axes.xAxis = this.selections.axisGroup.append("g").attr("class", "axis stock x"), this.axes.yAxis = this.selections.axisGroup.append("g").attr("class", "axis stock y"), this.selections.stockGroup = this.selections.svgCanvas.append("g").attr("class", "stock-group"), this.selections.shapeGroup = this.selections.svgCanvas.append("g").attr("class", "shapes"), this.selections.bandingGroup = this.selections.svgCanvas.append("g").attr("class", "banding-group"), this.selections.cutGroup = this.selections.svgCanvas.append("g").attr("class", "cuts"), this.selections.segmentGroup = this.selections.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.selections.groupGroup = this.selections.svgCanvas.append("g").attr("class", "groups").attr("display", "none"), this.selections.ghostShapeGroup = this.selections.svgCanvas.append("g").attr("class", "positions"), this.selections.dotGroup = this.selections.svgCanvas.append("g").attr("class", "dots"), this.state.env === "development" && (this.selections.positionGroup = this.selections.svgCanvas.append("g").attr("class", "placements"));
  }
  updateNumberFormat(e, i, s) {
    this.numberConfig && (e && (this.numberConfig.numberFormat = e), i && (this.numberConfig.decimalPlaces = i), s && (this.numberConfig.fractionRoundTo = s));
  }
  formatNumber = (e) => {
    const i = Q({
      v: e,
      o: this.numberConfig
    });
    if (i !== null) return i.toString();
  };
  trimNameToFit(e, i) {
    function s(n, a, r) {
      const o = r[a], l = ft(o);
      l.text(n.name);
      let c = l.text();
      const u = l.node();
      if (!u) return;
      let f = u.getComputedTextLength();
      const h = this.getWidthAttribute(n) - 20;
      for (; f > h && c.length > 0; )
        c = c.slice(0, -1), l.text(c.length ? c + "..." : ""), f = l.node().getComputedTextLength();
    }
    e.each(s.bind(i));
  }
  setDevice() {
    if (!(!this.selections.htmlEl || this.selections.htmlEl.style.display === "none") && this.selections.htmlEl.offsetWidth) {
      if (this.props.containerWidth.value === 0) return !1;
      this.settings.main ? this.props.containerWidth.value <= this.state.mobileBreakpoint || this.settings.app ? (this.state.device = "mobile", this.state.padding = 0) : (this.state.device = "desktop", this.state.padding = 50) : this.state.padding = 0, this.state.w = this.props.containerWidth.value;
    }
  }
  // find the largest dimensions of all the stock (not just the active one)
  findLargestStockDimensions() {
    const e = this.props.stockList.value.filter((n) => n.used);
    if (!e) return [null, null];
    const i = e.reduce((n, a) => n.l > a.l ? n : a), s = e.reduce((n, a) => n.w > a.w ? n : a);
    return [i, s];
  }
  debounce(e, i, s = !1) {
    let n;
    return (...a) => new Promise((r) => {
      const o = () => {
        n = null, s || r(e.apply(this, a));
      };
      clearTimeout(n), s && !n && r(e.apply(this, a)), n = setTimeout(o, i);
    });
  }
  requiresStretch(e, i = null) {
    return e ? (i === null && (i = e.w / e.l), i < 0.15) : !1;
  }
  setAspectRatio() {
    if (!this.props.stock || !this.props.stock.value || !this.selections.htmlEl) return;
    const e = this.props.stock.value, i = this.props.containerWidth.value;
    if (i <= 0) return;
    const s = i - 2 * this.state.padding;
    if (s <= 0) return;
    this.scales.xScale.domain([0, e.l]), this.scales.yScale.domain([0, e.w]), this.scales.yAxisScale.domain(this.settings.flipY ? [0, e.w] : [e.w, 0]), this.scales.xPositionScale.domain([0, e.l]), this.scales.yPositionScale.domain([0, e.w]), this.scales.measurementScale.domain([0, e.l]);
    const n = e.l > 0 ? s * e.w / e.l : 0;
    this.state.w = s + 2 * this.state.padding, this.state.h = n + 2 * this.state.padding;
    const a = e.l > 0 ? e.w / e.l : 0;
    this.state.stretched = !1, this.requiresStretch(e, a) && this.options.enableStretch && (this.state.h = i * 0.15 + this.state.padding * 2, this.state.stretched = !0), this.scales.xScale.range([this.state.padding, this.state.w - this.state.padding]), this.scales.yScale.range([this.state.padding, this.state.h - this.state.padding]), this.scales.yAxisScale.range([this.state.padding, this.state.h - this.state.padding]), this.scales.xPositionScale.range(
      this.settings.flipX ? [this.state.w - this.state.padding, this.state.padding] : [this.state.padding, this.state.w - this.state.padding]
    ), this.scales.yPositionScale.range(
      this.settings.flipY ? [this.state.padding, this.state.h - this.state.padding] : [this.state.h - this.state.padding, this.state.padding]
      // Use calculated h
    ), this.scales.measurementScale.range([0, this.state.w - this.state.padding * 2]), this.state.w > 0 && this.state.h > 0 ? (this.selections.el.style("height", this.state.h + "px"), this.props.containerHeight.value = this.state.h, this.selections.svgCanvas.attr("width", this.state.w).attr("height", this.state.h).attr("viewBox", `0 0 ${this.state.w} ${this.state.h}`)) : (this.selections.el.style("height", null), this.props.containerHeight.value = 0, this.selections.svgCanvas.attr("width", null).attr("height", null).attr("viewBox", null));
  }
  //--------------------------------------------------------
  // FIND
  //--------------------------------------------------------
  findShapeElement(e) {
    const i = this.selections.shapeWrappers.filter((s) => s.id === e);
    return i.empty() ? null : i.node();
  }
  findShape(e) {
    const i = this.findShapeElement.call(this, e);
    i && this.selectShape.call(this, i);
  }
  selectShape(e) {
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (s) => ds.call(this, s));
    const i = ft(e).select("rect");
    if (i) {
      i.classed("selected", !0), i.style("fill", this.config.colors.partSelected.toString());
      const s = ft(e).datum();
      this.callbacks.onShapeSelect(s, e);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    Yp.call(this);
  }
  drawStock() {
    ag.call(this);
  }
  drawCuts() {
    Rp.call(this);
  }
  drawAll() {
    this.drawStock(), this.drawShapes(), this.drawCuts();
  }
  // Measurement & Calculation Methods
  getWidthAttribute(e) {
    return e?.l ? this.scales.xScale(e.l) - this.state.padding : 0;
  }
  getHeightAttribute(e) {
    return e?.w ? this.scales.yScale(e.w) - this.state.padding : 0;
  }
  getRectangleCoordinate(e, i, s, n) {
    let a;
    if (i === "x") {
      let r;
      switch (s) {
        case "center":
          r = this.scales.xPositionScale(e.x + e.l / 2), n && (r += n);
          break;
        case "right":
          r = this.scales.xPositionScale(e.x + e.l), n && (r -= n);
          break;
        case "left":
        default:
          r = this.scales.xPositionScale(this.settings.flipX ? e.x - e.l : e.x), n && (r -= n);
      }
      a = r;
    } else if (i === "y") {
      let r;
      switch (s) {
        case "center":
          r = this.scales.yPositionScale(e.y + e.w / 2), n && (r += n);
          break;
        case "bottom":
          r = this.scales.yPositionScale(this.settings.flipY ? e.y + e.w : e.y), n && (r += n);
          break;
        case "top":
        default:
          r = this.scales.yPositionScale(this.settings.flipY ? e.y : e.y + e.w), n && (r -= n);
      }
      a = r;
    }
    return a;
  }
  // Blade Width Methods
  getBladeWidth(e = null) {
    return Ae(e) && e !== null ? e.bladeWidth : 0;
  }
  getHalfBladeWidth(e = null) {
    const i = e.bladeWidth;
    return i !== void 0 && i > 0 ? i / 2 : 0;
  }
  // Reset Methods
  removeShapes() {
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), us.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), Dp.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), wn.call(this);
  }
  removeSegments() {
    this.selections.segmentGroup && this.selections.segmentGroup.selectAll("*").remove();
  }
  removeGroups() {
    this.selections.groupGroup && this.selections.groupGroup.selectAll("*").remove();
  }
  removePositions() {
    this.selections.ghostShapeGroup && this.selections.ghostShapeGroup.selectAll("*").remove(), this.removePlacementPositions();
  }
  removePlacementPositions() {
    this.selections.dotGroup && this.selections.dotGroup.selectAll("*").remove();
  }
  removeAll() {
    this.removePositions(), this.removePlacementPositions(), this.removeShapes(), this.removeStock(), this.removeCuts(), this.removeSegments();
  }
  // Collision Detection
  collision(e, i, s) {
    if (e.id === i.id)
      throw new Error("collision comparing to self");
    return (
      // 1 left
      e.x < i.x + i.l + this.getBladeWidth(s) && // 2 right
      e.x + e.l + this.getBladeWidth(s) > i.x && // 3 bottom
      e.y < i.y + i.w + this.getBladeWidth(s) && // 4 top
      e.y + e.w + this.getBladeWidth(s) > i.y
    );
  }
  // TOGGLE
  //--------------------------------------------------------
  toggleShapes(e = !1) {
    this.selections.shapeGroup && (e ? (this.selections.shapeGroup.attr("display", "block"), this.selections.bandingGroup.attr("display", "block")) : (this.selections.shapeGroup.attr("display", "none"), this.selections.bandingGroup.attr("display", "none")));
  }
  toggleSegments(e = !0) {
    this.selections.segmentGroup && (e ? this.selections.segmentGroup.attr("display", "block") : this.selections.segmentGroup.attr("display", "none"));
  }
  toggleCuts(e = !0) {
    this.selections.cutGroup && (e ? this.selections.cutGroup.attr("display", "block") : this.selections.cutGroup.attr("display", "none"));
  }
  // Padding Helper
  addPadding(e) {
    return e + this.state.padding;
  }
  // Text Visibility Helpers
  isTextHidden(e, i, s) {
    const n = s[i];
    if (!n) return !0;
    const a = n.getBBox(), r = this.scales.measurementScale(e.l), o = this.scales.yScale(e.w);
    return a.width >= r || a.height >= o - this.state.padding;
  }
  isNameHidden(e, i, s) {
    const n = s[i];
    if (!n) return !0;
    const a = n.getBBox(), r = this.scales.measurementScale(e.l), o = this.scales.measurementScale(e.w);
    return a.width >= r || o < 40;
  }
  isLengthHidden(e, i, s) {
    if (this.settings.app) {
      const l = this.scales.measurementScale(e.l), c = this.scales.measurementScale(e.w);
      return l < 50 || c < 50;
    }
    if (e?.stock?.saw?.stockType === "linear") return !1;
    const n = s[i];
    if (!n) return !0;
    const a = n.getBBox(), r = this.scales.measurementScale(e.l), o = this.scales.measurementScale(e.w);
    return a.width >= r || o < 30;
  }
  isWidthHidden(e, i, s) {
    if (this.settings.app)
      return this.scales.measurementScale(e.l) < 50 || this.scales.measurementScale(e.w) < 50;
    const a = s[i].getBBox();
    return this.scales.measurementScale(e.l) < 30 || a.height >= this.scales.measurementScale(e.w);
  }
  // Group Management
  /* initGroups( groups: InputUserGroup[] )
  	{
  		if ( !groups || !groups?.length || !this.settings.main || !this.props.containerWidth )
  			return false;
  
  		this.resetGroups();
  
  		this.selections.groupRectangles = this.selections.groupGroup
  			.selectAll( 'rect' )
  			.data( groups )
  			.join( 'rect' )
  			.attr( 'class', 'group' )
  			.attr( 'x', ( g ) => this.getRectangleCoordinate( g, 'x' ) )
  			.attr( 'y', ( g ) => this.getRectangleCoordinate( g, 'y' ) )
  			.attr( 'width', ( g ) => this.getWidthAttribute( g ) )
  			.attr( 'height', ( g ) => this.getHeightAttribute( g ) );
  
  		this.selections.groupGroup.attr( 'display', 'block' );
  
  		if ( this.state.env === 'development' )
  		{
  			this.setupGroupDebugEvents();
  		}
  	} */
  /* private setupGroupDebugEvents()
  {
  	if ( !this.state.hasTouch )
  	{
  		this.selections.groupRectangles
  			.on( 'mouseover', function()
  			{
  				d3.select( this ).classed( 'hover', true );
  			} )
  			.on( 'mouseout', function()
  			{
  				d3.select( this ).classed( 'hover', false );
  			} )
  			.on( 'mousedown', ( event, group ) =>
  			{
  				console.log( 'Group:', {
  					dimensions: {
  						x: group.x,
  						y: group.y,
  						width: group.w,
  						length: group.l
  					},
  					shapes: group.shapes.map( s => ( {
  						id: s.id,
  						parentId: s.parentId,
  						addedAsGroup: s.group.addedAsGroup
  					} ) )
  				} );
  			} );
  	}
  } */
  // Clear Selection
  clearSelection() {
    this?.selections?.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (e) => ds.call(this, e)), this?.selections?.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (e) => {
      const i = this.scales.measurementScale(this.getBladeWidth(e.stock));
      return i < 1 ? 1 : Math.ceil(i);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    us.call(this);
  }
  updateShapeVisibility() {
    ng.call(this);
  }
  drawPositions(e) {
    return qp.call(this, e);
  }
  showCut(e) {
    Np.call(this, e);
  }
  resetCuts() {
    rl.call(this);
  }
}
const cg = ["id"], ug = /* @__PURE__ */ We({
  __name: "Diagram",
  props: {
    elementId: {},
    app: { type: Boolean, default: !1 },
    embed: { type: Boolean },
    numberFormat: { default: "decimal" },
    decimalPlaces: { default: 2 },
    main: { type: Boolean, default: !0 },
    stockAutoId: { default: null },
    colors: { default: null },
    disableClick: { type: Boolean, default: !1 },
    enableStretch: { type: Boolean, default: !0 },
    moveMode: { default: () => oe(!1) }
  },
  emits: ["shape-select", "shape-colour-update", "add-to-parts-bin", "move-shape", "part-click", "resize"],
  setup(t, { expose: e, emit: i }) {
    const {
      r: s,
      activeStock: n,
      activeShapes: a,
      activeCuts: r,
      activeSegments: o,
      currentCutIndex: l,
      getStock: c,
      getShapes: u,
      getSegments: f,
      getCuts: h
    } = ua(), g = t, k = i, E = (ie) => {
      k("part-click", ie);
    }, V = (ie) => {
      k("shape-colour-update", ie);
    }, A = (ie, je) => {
      ie?.autoId && k("shape-select", ie.autoId, je);
    }, S = (ie) => {
      ie && k("add-to-parts-bin", ie);
    }, D = (ie, je) => {
      ie && k("move-shape", ie, je);
    }, C = oe(0), F = oe(0), Y = oe(null);
    let M, ce = oe(!1);
    const z = xt({
      debug: ""
    });
    Zt(() => G());
    const m = te(() => ({
      format: g.numberFormat,
      decimals: g.decimalPlaces
    })), W = te(() => g.stockAutoId ? c(g.stockAutoId) : n.value), ee = te(() => g.stockAutoId ? u(g.stockAutoId) : a.value), K = te(() => g.main ? g.stockAutoId ? h(g.stockAutoId) : r.value : []), R = te(() => g.main ? g.stockAutoId ? f(g.stockAutoId) : o.value : []);
    Er(Y, (ie) => {
      const je = ie[0], { width: Lt, height: Ft } = je.contentRect;
      Lt > 0 && (C.value = Lt), k("resize", { width: Lt, height: Ft });
    }), zl(
      C,
      (ie) => {
        M && (ie <= 0 || (M.setDevice(), M.resetShapeAxes(), M.drawAll(), l.value !== null && (M.toggleSegments(!0), M.showCut(l.value))));
      },
      { throttle: 100 }
    );
    let B = !1;
    He(() => W.value, (ie) => {
      ie && (C.value <= 0 || (B = !0, M.setDevice(), M.resetCuts(), M.removeSegments(), M.drawStock(), M.drawShapes(), M.drawCuts(), mt(() => B = !1)));
    }, { immediate: !1 }), He(() => ee.value, (ie) => {
      B || ie && (C.value <= 0 || (M.setDevice(), M.drawShapes()));
    }, { immediate: !1, deep: !0 }), g.main && (He(() => K.value, () => {
      B || C.value <= 0 || M.drawCuts();
    }, { immediate: !1, deep: !0 }), He(l, () => {
      l.value !== null && (C.value <= 0 || (M.toggleSegments(!0), M.showCut(l.value)));
    }, { immediate: !1 }), He(m, (ie) => {
      M.updateNumberFormat(ie.format, ie.decimals, null);
    }, { immediate: !1 }));
    const G = () => {
      const ie = {
        // STATIC
        //--------------------------------------------------------
        elementID: `#${g.elementId}`,
        env: "production",
        numberConfig: {
          numberFormat: g.numberFormat,
          decimalPlaces: g.decimalPlaces,
          fractionRoundTo: 0
        },
        colors: g.colors || null,
        settings: {
          main: g.main,
          app: g.app,
          embed: g.embed,
          flipY: !1,
          flipX: !1
        },
        props: {
          containerHeight: F,
          containerWidth: C,
          stock: W,
          shapes: ee,
          cuts: K,
          segments: R,
          stockList: s.stockList,
          moveMode: g.moveMode,
          app: g.app
        },
        options: {
          disableClick: g.disableClick,
          enableStretch: g.enableStretch
        },
        // EVENTS
        //--------------------------------------------------------
        callbacks: {
          onShapeColourUpdate: V,
          onShapeSelect: A,
          onAddToPartsBin: S,
          onMoveShape: D,
          onPartClick: E
        }
      };
      M = new lg(ie), z.debug = M.state.debug, ce.value = !0;
    }, N = (ie = !1) => {
      M && M.toggleShapes(ie);
    }, U = (ie = !1) => {
      M && M.toggleCuts(ie);
    }, ne = (ie = !1) => {
      M && M.toggleSegments(ie);
    }, ve = () => {
      M && M.drawShapes();
    }, ge = () => {
      M && M.drawStock();
    }, we = () => {
      M && (M.toggleSegments(!1), M.resetCuts());
    }, Le = (ie) => {
      M && (M.toggleSegments(!0), M.showCut(ie));
    }, X = (ie) => M ? M.drawPositions(ie) : !1, Ge = () => {
      M && M.removePositions();
    }, nt = (ie) => {
      M && M.findShape(ie);
    }, Xe = () => {
      M && M.clearSelection();
    }, St = (ie) => {
      M && M.requiresStretch(ie);
    };
    return He(() => z.debug, (ie) => {
      M?.state && (M.state.debug = ie);
    }), e({
      loaded: ce,
      toggleShapes: N,
      toggleCuts: U,
      toggleSegments: ne,
      drawShapes: ve,
      drawStock: ge,
      drawPositions: X,
      resetPositions: Ge,
      findShape: nt,
      clearSelection: Xe,
      resetCuts: we,
      showCut: Le,
      requiresStretch: St,
      state: z
    }), (ie, je) => (w(), L("div", {
      id: t.elementId,
      ref_key: "diagramContainerRef",
      ref: Y,
      class: _e([{ app: t.app }, "diagram-container"])
    }, null, 10, cg));
  }
}), dg = { class: "action-menu" }, fg = ["textContent"], hg = {
  key: 0,
  class: "menu-divider"
}, pg = {
  key: 1,
  class: "group-label"
}, gg = /* @__PURE__ */ We({
  __name: "ActionMenu",
  props: {
    menuItems: {},
    label: { default: "Actions" },
    showLabel: { type: Boolean, default: !0 },
    icon: { default: () => ["fas", "ellipsis-v"] },
    placement: { default: "bottom-start" },
    closeOnLinkClick: { type: Boolean, default: !0 },
    offset: { default: 8 },
    menuId: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["action"],
  setup(t, { emit: e }) {
    const i = t, s = e, { isOpen: n, close: a, toggle: r } = vc(i.menuId), o = oe(), l = oe(), c = te(() => i.disabled), u = te(() => i.label), f = te(() => i.showLabel), h = te(() => i.icon), { floatingStyles: g } = Wl(o, l, {
      placement: i.placement,
      whileElementsMounted: jc,
      middleware: [
        _c(i.offset),
        Mc(),
        Rc({ padding: 8 })
      ]
    }), k = (m) => {
      if (!m) return ["fas", "question"];
      if (typeof m == "function" && (m = m(i)), Array.isArray(m))
        return m;
      if (typeof m == "string") {
        const W = m.split(" ");
        if (W.length >= 2) {
          const ee = W[0], K = W.slice(1).join("-").replace("fa-", "");
          return [ee, K];
        }
        return ["fas", m.replace("fa-", "")];
      }
      return ["fas", "question"];
    }, E = te(() => k(h.value)), V = (m) => typeof m.active == "function" ? m.active(i) : typeof m.active == "boolean" ? m.active : !1, A = (m) => {
      if (!m.href) return !1;
      try {
        const W = typeof m.href == "function" ? m.href(i) : m.href;
        return new URL(W, window.location.origin).origin !== window.location.origin;
      } catch {
        return !1;
      }
    }, S = (m) => m.href ? "a" : "div", D = (m) => {
      const W = {};
      if (m.href) {
        const ee = typeof m.href == "function" ? m.href(i) : m.href;
        if (W.href = ee, A(m)) {
          const K = typeof m.target == "function" ? m.target(i) : m.target;
          W.target = K || "_blank", W.rel = m.rel || "noopener noreferrer";
        } else if (m.target) {
          const K = typeof m.target == "function" ? m.target(i) : m.target;
          W.target = K;
        }
        m.rel && (W.rel = m.rel);
      }
      return m.attrs && Object.assign(W, m.attrs), W;
    }, C = te(() => i.menuItems.map((m) => {
      const W = { ...m };
      return typeof m.href == "function" && (W.href = m.href(i)), typeof m.icon == "function" && (W.icon = m.icon(i)), typeof m.disabled == "function" && (W.disabled = m.disabled(i)), typeof m.label == "function" && (W.label = m.label(i)), typeof m.variant == "function" && (W.variant = m.variant(i)), typeof m.active == "function" && (W.active = m.active(i)), typeof m.target == "function" && (W.target = m.target(i)), typeof m.show == "function" && (W.show = m.show(i)), W;
    })), F = (m) => {
      m.stopPropagation(), m.preventDefault(), !c.value && r();
    }, Y = (m, W) => {
      if (W.stopPropagation(), m.disabled && !m.href) {
        W.preventDefault();
        return;
      }
      if (typeof m.action == "function" && m.action(m) === !1 && m.href) {
        W.preventDefault();
        return;
      }
      s("action", {
        id: m.id,
        item: m
      }), m.href && i.closeOnLinkClick ? a() : m.href || a();
    }, M = (m) => {
      const W = [];
      if (m.variant) {
        const K = typeof m.variant == "function" ? m.variant(i) : m.variant;
        W.push(`variant-${K}`);
      }
      if ((typeof m.disabled == "function" ? m.disabled(i) : m.disabled) && !m.href && W.push("disabled"), V(m) && W.push("active"), m.href && W.push("menu-link"), A(m) && W.push("external-link"), m.class) {
        const K = typeof m.class == "function" ? m.class(i) : m.class;
        W.push(K);
      }
      return W.join(" ");
    }, ce = (m) => {
      const W = m.target;
      n.value && o.value && l.value && !o.value.contains(W) && !l.value.contains(W) && a();
    }, z = (m) => {
      m.key === "Escape" && n.value && a();
    };
    return Zt(() => {
      document.addEventListener("click", ce), document.addEventListener("keydown", z);
    }), hs(() => {
      document.removeEventListener("click", ce), document.removeEventListener("keydown", z);
    }), (m, W) => (w(), L("div", dg, [
      $("div", {
        ref_key: "trigger",
        ref: o,
        onClick: F,
        class: _e(["actions-btn", { active: P(n), disabled: c.value }])
      }, [
        h.value ? (w(), Fe(P(Ns), {
          key: 0,
          icon: E.value,
          class: "icon"
        }, null, 8, ["icon"])) : se("", !0),
        f.value ? (w(), L("span", {
          key: 1,
          class: "label",
          textContent: ae(u.value)
        }, null, 8, fg)) : se("", !0)
      ], 2),
      (w(), Fe(ca, { to: "body" }, [
        P(n) && !c.value ? (w(), L("div", {
          key: 0,
          ref_key: "floating",
          ref: l,
          style: lt(P(g)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: W[0] || (W[0] = _r(() => {
          }, ["stop"]))
        }, [
          (w(!0), L(Re, null, Ke(C.value, (ee, K) => (w(), L(Re, { key: K }, [
            ee.type === "divider" ? (w(), L("div", hg)) : ee.type === "group" ? (w(), L("div", pg, ae(ee.label), 1)) : ee.show !== !1 ? (w(), Fe(Hl(S(ee)), ki({
              key: 2,
              ref_for: !0
            }, D(ee), {
              onClick: (R) => Y(ee, R),
              id: ee.id,
              class: ["menu-item", M(ee)],
              disabled: ee.disabled && !ee.href
            }), {
              default: Ci(() => [
                ee.icon || V(ee) ? (w(), Fe(P(Ns), {
                  key: 0,
                  icon: V(ee) ? ["fass", "check"] : k(ee.icon)
                }, null, 8, ["icon"])) : se("", !0),
                $("span", null, ae(ee.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : se("", !0)
          ], 64))), 128))
        ], 4)) : se("", !0),
        P(n) && !c.value ? (w(), L("div", {
          key: 1,
          class: "backdrop",
          onClick: W[1] || (W[1] = //@ts-ignore
          (...ee) => P(a) && P(a)(...ee))
        })) : se("", !0)
      ]))
    ]));
  }
}), Tr = (t, e, i) => {
  if (e === "unitDependent")
    if (i === "fraction") {
      if (/\/0$/.test(t))
        return {
          value: t,
          valid: !1,
          message: "division_by_zero"
        };
      const s = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(t), n = ya(t);
      return {
        value: t,
        valid: s || n
      };
    } else {
      const n = /^-?\d*\.?\d*$/.test(t);
      if (n && t !== "" && t !== "-" && t !== "." && !t.endsWith(".")) {
        const a = parseFloat(t);
        if (!isNaN(a))
          return {
            value: a,
            valid: !0
          };
      }
      return {
        value: t,
        // Keep as string for partial inputs
        valid: n
      };
    }
  if (e === "integer") {
    const n = /^-?\d*$/.test(t);
    if (n && t !== "" && t !== "-") {
      const a = parseInt(t, 10);
      if (!isNaN(a))
        return {
          value: a,
          valid: !0
        };
    }
    return {
      value: t,
      // Keep as string for partial inputs
      valid: n
    };
  }
  if (e === "float") {
    const n = /^-?\d*\.?\d*$/.test(t);
    if (n && t !== "" && t !== "-" && t !== "." && !t.endsWith(".")) {
      const a = parseFloat(t);
      if (!isNaN(a))
        return {
          value: a,
          valid: !0
        };
    }
    return {
      value: t,
      // Keep as string for partial inputs
      valid: n
    };
  }
  return { value: t, valid: !0 };
};
function mg({
  props: t,
  emit: e,
  isMounted: i
}) {
  const s = oe({
    isTyping: !1,
    isMouseDown: !1,
    isComposing: !1,
    lastValidValue: String(t.value ?? "")
  }), n = (o, l = !1) => {
    if (o == null || o === "") {
      const u = t.required && !t.disableRequiredValidation;
      return t.type === "string" ? u ? { value: null, valid: !1, message: "field_required" } : { value: o === null ? null : "", valid: !0 } : Vu(o, "decimal", u);
    }
    const c = String(o);
    switch (t.type) {
      case "string":
        return { value: c, valid: !0 };
      case "unitDependent":
        if (l)
          return Tr(c, t.type, t.numberFormat);
        try {
          const u = Q({
            v: o,
            nf: t.numberFormat,
            dp: t.decimalPlaces,
            fr: t.fractionRoundTo
          });
          if (typeof u == "number") {
            let f = u, h = !0, g;
            return typeof t.min == "number" && f < t.min && (f = t.min, h = !1, g = "below_min"), typeof t.max == "number" && f > t.max && (f = t.max, h = !1, g = "above_max"), { value: f, valid: h, message: g };
          }
          return { value: u, valid: !0 };
        } catch (u) {
          return console.warn("Error converting value:", u), {
            value: null,
            valid: !1,
            message: "invalid_number"
          };
        }
      case "integer":
      case "float":
        if (l)
          return Tr(c, t.type);
        try {
          const f = Q({
            v: o,
            nf: "decimal"
          });
          if (f === null)
            return t.required && !t.disableRequiredValidation ? { value: null, valid: !1, message: "errors.validation.field.required" } : { value: null, valid: !0 };
          let h = f;
          if (t.type === "integer" && (h = Math.round(h)), t.allowZero === !1 && h === 0)
            return {
              value: h,
              valid: !1,
              message: "zero_not_allowed"
            };
          let g = !0, k;
          return typeof t.min == "number" && h < t.min && (h = t.min, g = !1, k = "below_min"), typeof t.max == "number" && h > t.max && (h = t.max, g = !1, k = "above_max"), { value: h, valid: g, message: k };
        } catch {
          return {
            value: null,
            valid: !1,
            message: "invalid_number"
          };
        }
      default:
        return { value: o, valid: !0 };
    }
  }, a = (o, l = !1) => l && t.type === "unitDependent" && t.numberFormat === "fraction" ? !1 : l && (t.type === "integer" || t.type === "float" || t.type === "unitDependent" && t.numberFormat === "decimal") ? typeof o.value == "number" && o.valid : o.valid ? !0 : o.message === "zero_not_allowed" ? !1 : o.message === "below_min" || o.message === "above_max" || o.message === "errors.validation.field.required" && !t.disableRequiredValidation;
  return {
    state: s,
    ...{
      //Handler to set the flag on mouse down
      handleMouseDown: () => {
        i.value && (s.value.isMouseDown = !0);
      },
      //Handler to reset the flag on mouse up
      handleMouseUp: () => {
        i.value && (s.value.isMouseDown = !1);
      },
      handleInput: (o) => {
        if (!i.value) return;
        const l = o.target;
        if (s.value.isMouseDown) {
          const u = n(l.value, !1);
          a(u, !1) && (e("update:value", u.value), e("validation", u, t.id)), s.value.isMouseDown = !1;
          return;
        }
        s.value.isTyping = !0;
        const c = n(l.value, !0);
        e("validation", c, t.id), e("input", l.value), a(c, !0) && e("update:value", c.value);
      },
      handleBlur: (o) => {
        if (!i.value) return;
        s.value.isTyping = !1;
        const l = o.target, c = n(l.value, !1);
        e("validation", c, t.id), a(c) && (e("update:value", c.value), s.value.lastValidValue = String(c.value ?? "")), e("blur", o);
      },
      handleFocus: (o) => {
        i.value && (s.value.isTyping = !0, e("focus", o));
      },
      handleKeydown: (o) => {
        if (i.value && !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(o.key)) {
          if (!["Backspace", "Delete", "Tab", "Enter", "Escape"].includes(o.key))
            if (t.type === "unitDependent" && t.numberFormat === "fraction") {
              const l = o.target, c = l.value, u = l.selectionStart || 0, f = c.substring(0, u);
              if (o.key === "/" && c.includes("/")) {
                o.preventDefault();
                return;
              }
              if (o.key === " " && /\s$/.test(f)) {
                o.preventDefault();
                return;
              }
              /^[-0-9\s/]$/.test(o.key) || o.preventDefault();
            } else (t.type === "integer" || t.type === "float") && ((t.type === "integer" ? /^[-0-9]$/.test(o.key) : /^[-0-9.]$/.test(o.key)) || o.preventDefault());
          if (o.key === "Enter") {
            s.value.isTyping = !1;
            const l = o.target, c = n(l.value, !1);
            e("validation", c, t.id), a(c) && (e("update:value", c.value), s.value.lastValidValue = String(c.value ?? "")), e("enter", c);
          }
          o.key === "Escape" && (s.value.isTyping = !1, e("escape"));
        }
      },
      // Better input pattern for HTML validation
      getInputPattern: () => {
        switch (t.type) {
          case "integer":
            return "-?[0-9]*";
          case "float":
            return "-?[0-9]*\\.?[0-9]*";
          case "unitDependent":
            return t.numberFormat === "fraction" ? "-?([0-9]+( [0-9]+)?)?(/[0-9]+)?" : "-?[0-9]*\\.?[0-9]*";
          default:
            return;
        }
      },
      getInputMode: () => {
        switch (t.type) {
          case "integer":
            return "numeric";
          case "float":
            return "decimal";
          case "unitDependent":
            return t.numberFormat === "fraction" ? "numeric" : "decimal";
          default:
            return "text";
        }
      },
      handleCompositionStart: () => {
        s.value.isComposing = !0;
      },
      handleCompositionEnd: (o) => {
        s.value.isComposing = !1, s.value.isTyping = !1;
        const l = o.target, c = n(l.value, !1);
        e("validation", c, t.id), a(c) && (e("update:value", c.value), s.value.lastValidValue = String(c.value ?? ""));
      },
      handlePaste: (o) => {
        if (!i.value) return;
        const l = o.clipboardData?.getData("text")?.trim() || "";
        if (t.type === "unitDependent" && t.numberFormat === "fraction") {
          const c = l.replace(/[""'']/g, "").replace(/\s+/g, " ");
          if (!ya(c)) {
            o.preventDefault(), e("validation", {
              value: c,
              valid: !1,
              message: `Pasted text "${l}" is not a valid fraction format`
            }, t.id);
            return;
          }
          if (c !== l) {
            o.preventDefault();
            const u = o.target;
            u.value = c;
            const f = n(c, !0);
            e("validation", f, t.id), e("input", c);
          }
        }
        e("paste", o);
      }
    },
    processValue: n
  };
}
function yg({
  props: t,
  emit: e,
  isMounted: i
}) {
  const s = oe({
    isTyping: !1,
    isComposing: !1,
    lastValidValue: String(t.value ?? "")
  }), n = (a) => {
    if (!t?.output || t.output === "string")
      return {
        value: a,
        valid: !0
      };
    if (t.options && t.options.length > 0) {
      let r = a;
      return t.numberFormat && (t.numberFormat === "fraction" ? r = String(a) : r = Number(a)), t.options.some((l) => l.value === r) ? {
        value: r,
        valid: !0
      } : {
        value: r,
        valid: !1,
        message: "invalid_option"
      };
    }
    return {
      value: a,
      valid: !0
    };
  };
  return {
    state: s,
    processValue: n,
    handleSelectChange: (a) => {
      if (!i.value) return;
      const r = a.target;
      if (t.multiEdit && r.value === " ") {
        e("update:value", null);
        return;
      }
      const o = n(r.value);
      e("validation", o, t.id), o.valid && e("update:value", o.value);
    }
  };
}
function bg({
  props: t,
  emit: e,
  isMounted: i
}) {
  return {
    handleCheckboxChange: (s) => {
      if (!i.value) return;
      const a = s.target.checked ? t.trueValue : t.falseValue;
      if (a === void 0) {
        console.warn("Checkbox true/false values not properly configured");
        return;
      }
      e("update:value", a);
    },
    handleFocus: (s) => {
      i.value && e("focus", s);
    },
    handleBlur: (s) => {
      i.value && e("blur", s);
    }
  };
}
const vg = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], wg = /* @__PURE__ */ We({
  __name: "CheckBoxInput",
  props: {
    trueValue: {},
    falseValue: {},
    id: {},
    value: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    issue: { type: Boolean },
    ariaLabel: {},
    errorId: {},
    inputClasses: {},
    decimalPlaces: {},
    fractionRoundTo: {}
  },
  emits: ["update:value", "input", "focus", "blur"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = oe(!0), a = oe(null), r = te(() => i.value === i.trueValue), {
      handleCheckboxChange: o,
      handleFocus: l,
      handleBlur: c
    } = bg({
      props: i,
      emit: s,
      isMounted: n
    });
    return (u, f) => (w(), L("input", {
      id: i.id,
      ref_key: "inputRef",
      ref: a,
      type: "checkbox",
      checked: r.value,
      disabled: i.readonly || i.disabled,
      required: i.required,
      "aria-label": i.ariaLabel,
      "aria-invalid": !!i.issue,
      "aria-describedby": i.errorId,
      onChange: f[0] || (f[0] = //@ts-ignore
      (...h) => P(o) && P(o)(...h)),
      onFocus: f[1] || (f[1] = //@ts-ignore
      (...h) => P(l) && P(l)(...h)),
      onBlur: f[2] || (f[2] = //@ts-ignore
      (...h) => P(c) && P(c)(...h))
    }, null, 40, vg));
  }
}), Sg = ["for"], $s = /* @__PURE__ */ We({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(t) {
    return (e, i) => (w(), L("label", {
      for: t.id,
      class: "input-label"
    }, ae(t.label), 9, Sg));
  }
}), xg = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], kg = ["disabled", "selected"], Ig = {
  key: 0,
  value: " "
}, Pg = ["hidden", "value", "disabled"], Cg = /* @__PURE__ */ We({
  __name: "SelectInput",
  props: {
    options: {},
    selectFirstOptionDisabled: { type: Boolean },
    multiEdit: { type: Boolean },
    numberFormat: {},
    output: {},
    text: {},
    id: {},
    value: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    issue: { type: Boolean },
    ariaLabel: {},
    errorId: {},
    inputClasses: {},
    decimalPlaces: {},
    fractionRoundTo: {}
  },
  emits: ["update:value", "focus", "blur", "validation"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = oe(!0), a = oe(null), r = te(() => i.options.map((l) => ({
      value: l.value,
      label: l.label?.toUpperCase() ?? l.value?.toString()?.toUpperCase(),
      hidden: l.hidden ?? !1,
      disabled: l.disabled ?? !1
    }))), {
      handleSelectChange: o
    } = yg({
      props: i,
      emit: s,
      isMounted: n
    });
    return (l, c) => (w(), L("select", ki(l.$attrs, {
      id: i.id,
      ref_key: "inputRef",
      ref: a,
      value: i.value,
      disabled: i.readonly || i.disabled,
      required: i.required,
      "aria-label": i.ariaLabel,
      "aria-invalid": !!i.issue,
      "aria-describedby": i.errorId,
      onChange: c[0] || (c[0] = //@ts-ignore
      (...u) => P(o) && P(o)(...u))
    }), [
      $("option", {
        value: "",
        disabled: i.selectFirstOptionDisabled,
        selected: !i.value
      }, ae(i.text?.select?.toUpperCase() ?? "SELECT"), 9, kg),
      i.multiEdit ? (w(), L("option", Ig, ae(i.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : se("", !0),
      (w(!0), L(Re, null, Ke(r.value, (u) => (w(), L("option", {
        key: u.value,
        hidden: u.hidden,
        value: u.value,
        disabled: u.disabled
      }, ae(u.label), 9, Pg))), 128))
    ], 16, xg));
  }
}), Ag = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "aria-label", "aria-invalid", "aria-describedby"], ll = /* @__PURE__ */ We({
  __name: "TextInput",
  props: {
    type: {},
    inputType: {},
    inputMode: {},
    placeholder: {},
    focus: { type: Boolean },
    allowZero: { type: Boolean },
    min: {},
    max: {},
    default: {},
    debounceMs: {},
    numberFormat: {},
    id: {},
    value: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    issue: { type: Boolean },
    ariaLabel: {},
    errorId: {},
    inputClasses: {},
    decimalPlaces: {},
    fractionRoundTo: {},
    disableRequiredValidation: { type: Boolean, default: !1 }
  },
  emits: ["update:value", "input", "focus", "blur", "validation", "enter", "escape", "paste"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = oe(!0), a = oe(null), {
      handleInput: r,
      handleMouseDown: o,
      handleMouseUp: l,
      handleFocus: c,
      handleBlur: u,
      handleKeydown: f,
      handleCompositionStart: h,
      handleCompositionEnd: g,
      handlePaste: k
    } = mg({
      props: i,
      emit: s,
      isMounted: n
    }), E = (V) => {
      const A = V.getBoundingClientRect(), S = window.getComputedStyle(V);
      return A.width > 0 && A.height > 0 && S.display !== "none" && S.visibility !== "hidden";
    };
    return Zt(() => {
      (Ae(i.default) && i.value === void 0 || i.value === null) && s("update:value", i.default), i.focus && a.value && E(a.value) && mt(() => a.value.focus());
    }), hs(() => {
      n.value = !1;
    }), (V, A) => (w(), L("input", ki(V.$attrs, {
      id: i.id,
      ref_key: "inputRef",
      ref: a,
      name: i.id,
      value: i.value,
      inputmode: i.inputMode,
      type: i.inputType,
      placeholder: i.placeholder,
      disabled: i.disabled,
      default: i.default,
      readonly: i.readonly,
      min: i.min,
      max: i.max,
      "aria-label": i.ariaLabel,
      "aria-invalid": !!i.issue,
      "aria-describedby": i.errorId,
      onInput: A[0] || (A[0] = //@ts-ignore
      (...S) => P(r) && P(r)(...S)),
      onFocus: A[1] || (A[1] = //@ts-ignore
      (...S) => P(c) && P(c)(...S)),
      onBlur: A[2] || (A[2] = //@ts-ignore
      (...S) => P(u) && P(u)(...S)),
      onKeydown: A[3] || (A[3] = //@ts-ignore
      (...S) => P(f) && P(f)(...S)),
      onCompositionstart: A[4] || (A[4] = //@ts-ignore
      (...S) => P(h) && P(h)(...S)),
      onCompositionend: A[5] || (A[5] = //@ts-ignore
      (...S) => P(g) && P(g)(...S)),
      onPaste: A[6] || (A[6] = //@ts-ignore
      (...S) => P(k) && P(k)(...S)),
      onMousedown: A[7] || (A[7] = //@ts-ignore
      (...S) => P(o) && P(o)(...S)),
      onMouseup: A[8] || (A[8] = //@ts-ignore
      (...S) => P(l) && P(l)(...S))
    }), null, 16, Ag));
  }
}), Tg = ["data-field-id"], Og = {
  key: 0,
  class: "input-label-group"
}, Lg = ["disabled", "selected"], Fg = {
  key: 0,
  value: " "
}, $g = ["hidden", "value", "disabled"], Pi = /* @__PURE__ */ We({
  inheritAttrs: !0,
  __name: "InputField",
  props: {
    value: { default: null },
    id: { default: "" },
    type: { default: "string" },
    focus: { type: Boolean, default: !1 },
    label: { default: "" },
    enableLabel: { type: Boolean, default: !0 },
    labelPosition: { default: "first" },
    output: { default: null },
    options: { default: () => [] },
    selectFirstOptionDisabled: { type: Boolean, default: !0 },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    allowZero: { type: Boolean, default: !0 },
    trueValue: { default: !0 },
    falseValue: { default: !1 },
    default: { default: null },
    numberFormat: { default: "decimal" },
    shouldConvertNumberFormat: { type: Boolean, default: !0 },
    min: { default: null },
    max: { default: null },
    custom: { type: Boolean, default: !1 },
    multiEdit: { type: Boolean, default: !1 },
    text: { default: () => ({ select: "Select", delete: "Delete" }) },
    issue: { type: Boolean, default: !1 },
    warning: { type: Boolean, default: !1 },
    additional: {},
    debounceMs: {},
    inputClasses: {},
    ariaLabel: {},
    disableRequiredValidation: { type: Boolean, default: !1 }
  },
  emits: ["update:value", "validation"],
  setup(t, { emit: e }) {
    const i = e, s = t, n = oe(null), a = oe(null), r = oe(!0), o = oe(s.numberFormat), l = te(() => s.custom ? "custom-" + s.id : s.id), c = te(() => `${l.value}-error`), u = te(() => s.label || s.placeholder), f = te(() => m(s.type, s.numberFormat)), h = te(() => W(s.type, s.numberFormat)), g = te(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), k = te(() => {
      let R = s.value;
      if (s.type !== "unitDependent" || !R) return R;
      try {
        return Q({ v: R, nf: s.numberFormat });
      } catch {
        return s.numberFormat === "decimal" ? 0 : "0";
      }
    }), E = te(() => s.options.map((R) => ({
      value: R.value,
      label: R.label || R.value?.toString(),
      hidden: R.hidden || !1,
      disabled: R.disabled || !1
    }))), V = te(() => E.value.map((R) => {
      const B = R.label ? H(R.label) : R.value?.toString();
      return {
        ...R,
        // Translate the label key first, then uppercase the translated result
        label: B?.toUpperCase() || R.value?.toString().toUpperCase()
      };
    })), A = te(() => ({
      input: !0,
      issue: s.issue || !r.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), S = te(() => ({
      id: l.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": u.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? c.value : void 0
    })), D = te(() => ({
      ...S.value,
      type: s.type,
      inputMode: h.value,
      inputType: f.value,
      placeholder: s.placeholder,
      allowZero: s.allowZero,
      min: s.min,
      max: s.max,
      focus: s.focus,
      numberFormat: s.numberFormat,
      default: s.default,
      disableRequiredValidation: s.disableRequiredValidation
    })), C = te(() => ({
      ...S.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), F = te(() => ({
      ...S.value,
      options: V.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      numberFormat: s.numberFormat,
      text: s.text,
      output: s.output
    })), Y = te(() => (s.text?.select || "SELECT").toUpperCase()), M = te(() => (s.text?.delete || "DELETE").toUpperCase()), ce = (R) => {
      a.value = R;
    }, z = (R) => s.label && s.enableLabel && s.labelPosition === R, m = (R, B) => {
      switch (R) {
        case "integer":
        case "float":
          return "number";
        case "unitDependent":
          return B === "fraction" ? "text" : "number";
        case "string":
        default:
          return "text";
      }
    }, W = (R, B) => {
      if (R === "unitDependent")
        return B === "fraction" ? "text" : "decimal";
      switch (R) {
        case "integer":
          return "numeric";
        case "float":
          return "decimal";
        case "string":
          return "text";
        default:
          return "text";
      }
    }, ee = (R) => {
      i("update:value", R);
    }, K = (R, B) => {
      R.valid === void 0 || R.valid === !0 ? (r.value = !0, i("validation", n.value, R)) : R.valid === !1 && R.message && (r.value = !1, console.warn(`Field validation error for field ${B} - ${R.message}`), i("validation", n.value, R));
    };
    return He(() => s.numberFormat, (R, B) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && R !== B && s.value !== null && s.value !== void 0 && s.value !== "")
          try {
            const G = Q({ v: s.value, nf: R });
            i("update:value", G);
          } catch {
            i("update:value", R === "decimal" ? 0 : "0");
          }
        o.value = R;
      }
    }), (R, B) => (w(), L("div", {
      ref_key: "fieldRef",
      ref: n,
      class: _e(["input-wrapper", A.value]),
      "data-field-id": l.value
    }, [
      t.type === "checkbox" ? (w(), L("div", Og, [
        z("first") ? (w(), Fe($s, {
          key: 0,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : se("", !0),
        t.type === "checkbox" ? (w(), Fe(wg, ki({
          key: 1,
          ref: ce,
          type: "checkbox"
        }, C.value, {
          value: t.value,
          "onUpdate:value": B[0] || (B[0] = (G) => i("update:value", G))
        }), null, 16, ["value"])) : se("", !0),
        z("last") ? (w(), Fe($s, {
          key: 2,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : se("", !0)
      ])) : (w(), L(Re, { key: 1 }, [
        z("first") ? (w(), Fe($s, {
          key: 0,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : se("", !0),
        g.value ? (w(), Fe(ll, ki({
          key: 1,
          ref: ce
        }, D.value, {
          "input-type": f.value,
          "input-mode": h.value,
          value: k.value,
          "disable-required-validation": t.disableRequiredValidation,
          onValidation: K,
          "onUpdate:value": ee
        }), null, 16, ["input-type", "input-mode", "value", "disable-required-validation"])) : t.type === "select" ? (w(), Fe(Cg, ki({
          key: 2,
          ref: ce
        }, F.value, {
          "onUpdate:value": B[1] || (B[1] = (G) => i("update:value", G))
        }), {
          default: Ci(() => [
            $("option", {
              value: "",
              disabled: t.selectFirstOptionDisabled,
              selected: !t.value
            }, ae(Y.value), 9, Lg),
            t.multiEdit ? (w(), L("option", Fg, ae(M.value), 1)) : se("", !0),
            (w(!0), L(Re, null, Ke(V.value, (G) => (w(), L("option", {
              key: G.value,
              hidden: G.hidden,
              value: G.value,
              disabled: G.disabled
            }, ae(G.label), 9, $g))), 128))
          ]),
          _: 1
        }, 16)) : se("", !0),
        z("last") ? (w(), Fe($s, {
          key: 3,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : se("", !0)
      ], 64)),
      Gs(R.$slots, "default")
    ], 10, Tg));
  }
}), Dg = {
  key: 0,
  class: "action-bar"
}, Eg = { class: "add-custom" }, _g = ["disabled"], Mg = ["disabled", "title", "onClick"], Rg = {
  key: 1,
  class: "price"
}, jg = /* @__PURE__ */ We({
  __name: "ExtrasInputs",
  props: {
    translate: { type: Boolean, default: !0 },
    shape: {},
    shapeIndex: { default: 0 },
    extraType: {},
    extraLabel: {},
    allOptions: {},
    labels: {},
    userFriendlyFieldMap: {},
    partColumns: {},
    orientationModel: { default: 0 },
    allowCustomNames: { type: Boolean, default: !1 },
    customNames: { default: () => [] },
    usedNames: { default: () => [] },
    existingTypes: {},
    enablePricing: { type: Boolean, default: !0 },
    pricing: { default: () => ({}) },
    locations: { default: () => [] },
    locationGroups: { default: () => [] },
    getPrice: {},
    formatPrice: {},
    getAvailablePricingOptions: {},
    findExtrasPrice: {}
  },
  emits: ["update-all", "set", "custom-name-added", "custom-name-deleted"],
  setup(t, { emit: e }) {
    const i = t, s = e, {
      mode: n,
      shouldShowAll: a,
      supportsFaces: r,
      supportsSides: o,
      canDelete: l,
      getLocationLabel: c,
      getInputType: u,
      getInputConfigForLocation: f,
      getSelectOptions: h,
      getPriceDisplay: g,
      shouldShowDeleteButton: k,
      getLocationGroup: E,
      isLocationVisible: V,
      handleInputChange: A,
      handleDelete: S
    } = wc({
      shape: ci(i, "shape"),
      extraType: i.extraType,
      allOptions: i.allOptions,
      labels: i.labels,
      userFriendlyFieldMap: i.userFriendlyFieldMap,
      allowCustomNames: i.allowCustomNames,
      customNames: ci(i, "customNames"),
      enablePricing: i.enablePricing,
      pricing: i.pricing,
      getAvailablePricingOptions: i.getAvailablePricingOptions,
      getPrice: i.getPrice,
      formatPrice: i.formatPrice,
      findExtrasPrice: i.findExtrasPrice,
      locations: ci(i, "locations"),
      locationGroups: ci(i, "locationGroups")
    }), {
      newCustomName: D,
      canAddCustomName: C,
      isActionMenuDisabled: F,
      customNameActions: Y,
      handleAddCustomName: M,
      handleCustomNameAction: ce
    } = Sc({
      extraType: i.extraType,
      customNames: ci(i, "customNames"),
      usedNames: ci(i, "usedNames"),
      allowCustomNames: i.allowCustomNames,
      getSelectOptions: h,
      onCustomNameAdded: (U) => s("custom-name-added", i.extraType, U),
      onCustomNameDeleted: (U) => s("custom-name-deleted", i.extraType, U)
    }), {
      renderLocations: z,
      gridStyle: m,
      getInputId: W,
      getDeleteConfig: ee
    } = xc({
      extraType: i.extraType,
      allOptions: i.allOptions,
      labels: i.labels,
      shapeIndex: i.shapeIndex || 0,
      enablePricing: i.enablePricing,
      mode: n,
      shouldShowAll: a,
      getInputType: u,
      getInputConfig: (U, ne) => f(U, ne),
      getAllInputConfig: (U) => f("all", U),
      getInputConfigForLocation: f,
      canDelete: l,
      getLocationLabel: c,
      shouldShowDeleteButton: k,
      locations: ci(i, "locations"),
      locationGroups: ci(i, "locationGroups")
    }), K = oe(!1), R = te(() => (U) => {
      const ne = E(U);
      return ne === "all" || ne === "faces" || ne === "sides";
    }), B = te(() => (U) => na(i.extraType).includes(U) ? cr(U) === "face" : !1), G = te(() => (U) => na(i.extraType).includes(U) ? cr(U) === "side" : !1), N = te(() => (U) => i.shape.issues?.some((ne) => ne.category?.includes("extras") && ne.field?.some((ve) => ve[0] === "extras" && ve[1] === i.extraType && ve[2] === U)) ?? !1);
    return Zt(() => {
      const ne = i.shape.extras?.[i.extraType];
      if (!ne || typeof ne != "object") {
        K.value = !0, console.error(`Missing or invalid ${i.extraType} in shape`);
        return;
      }
      if (r.value && !("faces" in ne)) {
        K.value = !0, console.error(`Missing faces property in ${i.extraType}`);
        return;
      }
      if (o.value && !("sides" in ne)) {
        K.value = !0, console.error(`Missing sides property in ${i.extraType}`);
        return;
      }
    }), (U, ne) => {
      const ve = bi("FontAwesomeIcon");
      return K.value ? se("", !0) : (w(), L("div", {
        key: 0,
        class: _e(["extras group", [t.extraType]]),
        style: lt({ "grid-column-end": "span " + t.partColumns })
      }, [
        t.allowCustomNames ? (w(), L("div", Dg, [
          $("div", Eg, [
            Ve(ll, {
              id: `${t.extraType}-custom-input-${t.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: P(D),
              placeholder: `Add ${t.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": ne[0] || (ne[0] = (ge) => D.value = ge || ""),
              onKeydown: Ul(P(M), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            $("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !P(C),
              onClick: ne[1] || (ne[1] = //@ts-ignore
              (...ge) => P(M) && P(M)(...ge))
            }, " Add ", 8, _g)
          ]),
          Ve(gg, {
            "menu-items": P(Y),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: P(F),
            onAction: P(ce)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : se("", !0),
        $("div", {
          class: "inputs grid-layout",
          style: lt({ "grid-template-columns": P(m) })
        }, [
          (w(!0), L(Re, null, Ke(P(z), (ge) => (w(), L(Re, { key: ge }, [
            P(V)(ge) ? (w(), L(Re, { key: 0 }, [
              $("div", {
                class: _e(["label", {
                  "group-label": R.value(ge),
                  "face-label": B.value(ge),
                  "side-label": G.value(ge),
                  "has-validation-issue": N.value(ge)
                }])
              }, ae(P(c)(ge)), 3),
              (w(!0), L(Re, null, Ke(t.allOptions, (we, Le) => (w(), L("div", {
                key: `${ge}-${Le}`,
                class: "input-cell"
              }, [
                Ve(Pi, ki({
                  id: P(W)(ge, Le),
                  "data-field": `${t.extraType}-${ge}`,
                  "data-index": t.shapeIndex,
                  "data-option-index": Le
                }, { ref_for: !0 }, P(f)(ge, Le), {
                  "onUpdate:value": (X) => P(A)(ge, Le, X)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"])
              ]))), 128)),
              P(ee)(ge).show ? (w(), L("button", {
                key: 0,
                type: "button",
                class: "c-btn c-btn--delete",
                disabled: !P(ee)(ge).enabled,
                title: P(ee)(ge).ariaLabel,
                onClick: (we) => P(S)(ge)
              }, [
                Ve(ve, { icon: ["fass", "trash"] })
              ], 8, Mg)) : se("", !0),
              t.enablePricing ? (w(), L("div", Rg, ae(P(g)(ge)), 1)) : se("", !0)
            ], 64)) : se("", !0)
          ], 64))), 128))
        ], 4)
      ], 6));
    };
  }
}), Bs = /* @__PURE__ */ Ot(jg, [["__scopeId", "data-v-8e18cea6"]]), Bg = {
  name: "Spinner",
  props: {
    size: {
      type: Number,
      default: 100
    },
    showNumber: {
      type: Boolean,
      default: !0
    },
    number: {
      type: Number,
      default: 0
    },
    complete: {
      type: Boolean,
      default: !1
    }
  }
}, Vg = { id: "spinner" }, Ng = ["width", "height"], Gg = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function qg(t, e, i, s, n, a) {
  return w(), L("div", Vg, [
    i.complete ? se("", !0) : (w(), L("svg", {
      key: 0,
      class: "loading",
      style: lt({ width: i.size + "px", height: i.size + "px" }),
      width: i.size,
      height: i.size,
      viewBox: "0 0 300 300"
    }, [...e[0] || (e[0] = [
      Mr('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ])], 12, Ng)),
    i.complete ? (w(), L("svg", {
      key: 1,
      class: "complete",
      style: lt({ width: i.size + "px", height: i.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[1] || (e[1] = [
      $("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ])], 4)) : se("", !0),
    i.showNumber ? (w(), L("div", Gg, ae(i.number), 1)) : se("", !0)
  ]);
}
const Or = /* @__PURE__ */ Ot(Bg, [["render", qg]]);
j({
  // Context - using z.any() for complex external types
  job: be().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: p().nullable().default(null).describe("Socket.io connection ID"),
  user: be().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: be().describe("Configuration object"),
  // Type: Config
  api: _().nullable().default(null).describe("API mode flag"),
  app: _().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: Oe("Saw").describe("Saw configuration"),
  stockList: Ne("Stock").default([]).describe("List of stock materials"),
  shapeList: Ds(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: Ne("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: Ne("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: Ne("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: Ds(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: Ds(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: rn,
  // Results storage
  cutList: Ne("Cut").default([]).describe("List of cuts to make"),
  segmentList: Ne("Segment").default([]).describe("List of segments"),
  offcuts: Ne("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: Ne("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: _().default(!1).describe("Use inventory system"),
  successMetric: p().default(Wd.successMetric).describe("Metric for optimization success"),
  enableEvo: _().default(!0).describe("Enable evolutionary algorithm"),
  weighting: Se(p(), be()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: be().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: be().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: j({
    placement: d().default(0),
    group: d().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: _().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: _().default(!1).describe("Run guillotine second pass"),
  runningEvo: _().default(!1).describe("Currently running evolution"),
  evolutionVisData: re(Se(p(), pc())).default([]).describe("Evolution visualization data"),
  final: _().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: _().default(!1).describe("Has minimum spacing requirement"),
  hasShapeLevelMinSpacing: _().default(!1).describe("Has shape-level minimum spacing")
});
const zg = Pe(["decimal", "fraction"]), Wg = j({
  job: be().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Allow additional properties like __entityType and autoId
  inputSaw: Ii,
  inputShapes: re(mi),
  inputStock: re(Yt),
  inputUserGroups: re(ka).optional(),
  // Number format for conversion
  numberFormat: zg.optional(),
  // Algorithm configuration
  enableEvo: _().default(!0),
  weighting: be().optional(),
  successMetric: p().optional(),
  useInventory: _().default(!1),
  // Context
  socketId: p().optional(),
  user: be().optional(),
  // IUser type
  // Application flags
  widget: _().optional(),
  api: _().optional(),
  app: _().optional(),
  domain: p().optional(),
  // Extras options (centralized configuration)
  extrasOptions: j({
    banding: j({
      options: j({
        sides: Se(p(), re(p())).optional()
      }).optional()
    }).optional(),
    finish: j({
      options: j({
        faces: Se(p(), re(p())).optional()
      }).optional()
    }).optional(),
    planing: j({
      options: j({
        sides: Se(p(), re(p())).optional(),
        faces: Se(p(), re(p())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // API specific
  config: be().optional(),
  v: d().optional(),
  // API version
  webhook: p().optional(),
  //source
  sourceVersion: p().nullish(),
  source: p().optional()
});
j({
  job: be().optional(),
  // Type: Job from BullMQ
  saw: be(),
  // Runtime Saw instance
  shapeList: re(be()),
  // Runtime Shape instances
  stockList: re(be()),
  // Runtime Stock instances
  userGroups: re(be()).optional(),
  // Runtime Group instances
  enableEvo: _(),
  weighting: be().optional(),
  successMetric: p().optional(),
  useInventory: _(),
  socketId: p().optional(),
  user: be().optional(),
  widget: _().optional(),
  api: _().optional(),
  app: _().optional(),
  domain: p().optional(),
  config: be().optional(),
  v: d().optional(),
  webhook: p().optional()
});
const { addNotice: Ei } = nn();
let Bn = null;
function Hg() {
  return Bn || (Bn = Jo()), Bn;
}
function Lr(t) {
  return t.filter((e) => e?.l || e?.w);
}
async function Ug(t) {
  const e = t.t, i = [];
  try {
    const { inputs: s, validateInputShapes: n, validateInputStock: a } = Hg(), r = t.inputShapes ?? s.inputShapes.value, o = t.inputStock ?? s.inputStock.value, l = t.inputUserGroups ?? s.inputUserGroups?.value ?? [], c = Lr(r), u = Lr(o);
    if (!t.isAdmin && !t.shared && t.maxShapes !== 1 / 0) {
      const V = c.reduce((S, D) => S + (D.q || 1), 0), A = u.reduce((S, D) => S + (D.q || 1), 0);
      if (V > t.maxShapes || A > t.maxStock)
        return Ei({
          type: "error",
          message: e("errors.validation.above_max_parts")
        }), t.onLimit?.(), { valid: !1, issues: i };
    }
    if (!c.length)
      return Ei({
        type: "error",
        message: e("errors.validation.no_parts_list")
      }), { valid: !1, issues: i };
    if (!t.useInventory && !u.length)
      return Ei({
        type: "error",
        message: e("errors.validation.no_stock")
      }), { valid: !1, issues: i };
    let f;
    if (t.useInventory && t.selectedSaw)
      f = t.selectedSaw;
    else if (t.inputSaw instanceof ti) {
      const V = t.inputSaw.validate();
      i.push(...V), f = t.inputSaw.toData();
    } else {
      f = t.inputSaw;
      const V = new $o(f);
      i.push(...V.issues);
    }
    const h = n({
      saw: f,
      partTrim: Q({ v: t.partTrim }),
      useInventory: t.useInventory,
      inputShapesOverride: c
    });
    if (i.push(...h), t.useInventory) {
      if (t.materialStore)
        for (const V of c)
          V.material || i.push(new ue({
            item: V,
            category: ["part"],
            message: "errors.validation.business.no_material"
          }));
    } else {
      const V = a(f);
      i.push(...V);
    }
    if (l.length > 0) {
      l.forEach((A) => A.populateParentID(c));
      const V = Ch(l, c);
      i.push(...V);
    }
    await Yg(c, t, i);
    const g = go(i);
    if (g.length > 0) {
      const V = {
        saw: g.filter((A) => A.category?.includes("saw")),
        stock: g.filter((A) => A.category?.includes("stock")),
        part: g.filter((A) => A.category?.includes("part") && !A.category?.includes("extras")),
        extras: g.filter((A) => A.category?.includes("extras")),
        group: g.filter((A) => A.category?.includes("group"))
      };
      for (const [A, S] of Object.entries(V))
        if (S.length > 0) {
          Ei({
            type: "error",
            message: e("errors.validation.inputs_issue", { 0: A }),
            additional: S.map((D) => e(D.message))
          });
          break;
        }
      return { valid: !1, issues: i };
    }
    const k = {
      inputSaw: f,
      inputShapes: c.map((V) => V.toData()),
      inputStock: u.map((V) => V.toData()),
      inputGroups: l.map((V) => V.toData()),
      enableEvo: !0,
      useInventory: t.useInventory || !1
    }, E = Wg.safeParse(k);
    return E.success ? {
      valid: !0,
      issues: i,
      sawData: f
    } : (console.error("[Validation] Zod validation failed:", E.error.issues), Ei({
      type: "error",
      message: e("errors.validation.invalid_data_structure"),
      additional: E.error.issues.map((V) => `${V.path.join(".")}: ${V.message}`)
    }), { valid: !1, issues: i });
  } catch (s) {
    return console.error("[Validation] error:", s), Ei({
      type: "error",
      message: e("errors.general.unexpected"),
      additional: [s?.message ?? ""]
    }), { valid: !1, issues: i };
  }
}
async function Yg(t, e, i) {
  if (!e.findExtrasPrice)
    return;
  const s = [
    { type: "banding", pricing: e.bandingPricing },
    { type: "finish", pricing: e.finishPricing },
    { type: "planing", pricing: e.planingPricing }
  ];
  for (const n of t)
    for (const { type: a, pricing: r } of s) {
      if (e.extrasValidationRules && et.hasExtras(n, a)) {
        const c = sp(n, a, e.extrasValidationRules);
        c.valid || c.violations.forEach((u) => {
          const f = np(a, u, c.message);
          i.push(new ue({
            item: n,
            category: ["part", "extras"],
            message: f,
            field: [["extras", a]],
            shouldTranslate: !1
          }));
        });
      }
      if (!r || !Object.keys(r).length)
        continue;
      const o = ip(n, a, r, e.findExtrasPrice);
      o.valid || o.incompleteLocations.forEach((l) => {
        i.push(new ue({
          item: n,
          category: ["part", "extras"],
          message: "errors.extras.selection_incomplete",
          params: {
            extraType: `extras.${a}`,
            // Translation key for extra type (banding, finish, planing)
            location: tt(l, { returnKey: !0 })
            // Translation key for location
          },
          field: [["extras", a, l]]
        }));
      });
    }
}
const Vs = j({
  // Unique identifier for this group (used internally)
  id: p().min(1),
  // Display label for the group (shown in UI)
  label: p().min(1),
  // Array of location strings in this group
  // Examples: ['side.l1', 'side.l2'], ['face.a', 'face.b']
  locations: re(p().min(1)).min(1),
  // Optional price override for this group
  // When set, this price will be used instead of calculating from individual locations
  price: d().optional(),
  // Hide individual location inputs when this group is enabled
  // When true, only shows the group control, hiding the individual face/side inputs
  hideIndividualLocations: _().optional().default(!1)
}), Kg = j({
  banding: re(Vs).optional(),
  finish: re(Vs).optional(),
  planing: re(Vs).optional()
}).optional();
class fi extends Error {
  constructor(e, i) {
    super(e), this.code = i, this.name = "FormulaError";
  }
}
class la {
  url;
  spec;
  // private formulaCache: FormulaCache = new Map();
  // Update the evaluate method to use the type guard
  evaluate(e, i = {}) {
    if (typeof e == "number" || typeof e == "boolean") return e;
    if (typeof e == "string") {
      if (this.isStringLiteral(e))
        return e.slice(1, -1);
      if (!(e in i))
        throw new Error(`Undefined variable: ${e}`);
      return i[e];
    }
    const { operation: s, operands: n } = e;
    if (!s)
      throw new Error("Invalid formula structure");
    if (!this.isFormulaOperation(s))
      throw new Error(`Invalid operation: ${s}`);
    if (s === "ternary") {
      const o = this.evaluate(e.condition, i), l = this.evaluate(e.trueExpr, i), c = this.evaluate(e.falseExpr, i);
      return o ? l : c;
    }
    if (!n || !Array.isArray(n) || n.length !== 2)
      throw new Error("Invalid formula structure");
    const [a, r] = n.map((o) => this.evaluate(o, i));
    return [">", "<", ">=", "<=", "=="].includes(s) ? this.evaluateComparison(s, a, r) : this.operations[s](a, r);
  }
  // Update the operations object to use the FormulaOperation type
  operations = {
    add: (e, i) => e + i,
    subtract: (e, i) => e - i,
    multiply: (e, i) => e * i,
    divide: (e, i) => {
      if (i === 0) throw new fi("Division by zero", "DIVISION_BY_ZERO");
      return e / i;
    },
    ">": (e, i) => e > i,
    "<": (e, i) => e < i,
    ">=": (e, i) => e >= i,
    "<=": (e, i) => e <= i,
    "==": (e, i) => e === i
  };
  // Update getOperation to use the type guard
  getOperation(e) {
    const s = {
      "+": "add",
      "-": "subtract",
      "*": "multiply",
      "/": "divide",
      ">": ">",
      "<": "<",
      ">=": ">=",
      "<=": "<=",
      "==": "==",
      "?:": "ternary"
    }[e];
    if (!this.isFormulaOperation(s))
      throw new Error(`Unsupported operator: ${e}`);
    return s;
  }
  precedence = {
    "+": 4,
    "-": 4,
    "*": 5,
    "/": 5,
    ">": 3,
    "<": 3,
    ">=": 3,
    "<=": 3,
    "==": 3,
    "?": 2,
    ":": 2
  };
  constructor({ url: e = null, spec: i = null }) {
    e && (this.url = e), i && (this.spec = i);
  }
  isFormulaOperation(e) {
    return ["add", "subtract", "multiply", "divide", ">", "<", ">=", "<=", "==", "ternary"].includes(e);
  }
  isFormula(e) {
    return typeof e == "string" && e.startsWith("=");
  }
  stripFormulaPrefix(e) {
    return e.substring(1);
  }
  evaluateValue(e, i, s = {}) {
    return typeof e == "number" || !this.isFormula(e) ? e : this.evaluateFormula(this.stripFormulaPrefix(e), i, s);
  }
  extractDependencies(e) {
    const i = /* @__PURE__ */ new Set();
    if (typeof e == "string") {
      const s = Array.from(e.matchAll(/panels\.(\w+)\.([lwt])/g));
      for (const r of s)
        i.add(`${r[1]}.${r[2]}`);
      const n = Array.from(e.matchAll(/inputs\.(\w+)/g));
      for (const r of n)
        i.add(`input.${r[1]}`);
      const a = /* @__PURE__ */ new Set(["width", "depth", "height", "quantity"]);
      for (const r of a)
        e.includes(r) && i.add(`input.${r}`);
    }
    return i;
  }
  buildFormulaGraph(e, i) {
    const s = {
      nodes: /* @__PURE__ */ new Map(),
      edges: /* @__PURE__ */ new Map()
    }, n = (a, r) => {
      const o = `${e}.${a}`;
      s.nodes.set(o, {
        panelKey: e,
        attribute: a,
        formula: r
      }), s.edges.set(o, this.isFormula(r) ? this.extractDependencies(this.stripFormulaPrefix(r.toString())) : /* @__PURE__ */ new Set());
    };
    return n("l", i.l), n("w", i.w), n("t", i.t), n("q", i.q), s;
  }
  resolveFormulas(e, i, s, n = {}) {
    const a = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), o = (l) => {
      if (a.has(l))
        return a.get(l);
      const [c, u] = l.split(".");
      if (!e.nodes.has(l)) {
        const E = n[c];
        if (E)
          return u === "q" ? E.q : E[u];
        throw new Error(`Node not found: ${l}`);
      }
      if (r.has(l))
        throw new Error(`Circular dependency detected at ${l}`);
      const f = e.nodes.get(l);
      if (typeof f.formula == "number")
        return a.set(l, f.formula), f.formula;
      r.add(l);
      const h = e.edges.get(l) || /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Map();
      for (const E of h)
        if (E.startsWith("input.")) {
          const V = E.split(".")[1];
          g.set(E, s[V]);
        } else
          g.set(E, o(E));
      const k = this.evaluateFormulaWithDeps(f.formula, g, s);
      return a.set(l, k), r.delete(l), k;
    };
    for (const l of e.nodes.keys())
      o(l);
    return Object.fromEntries(a);
  }
  evaluateFormulaWithDeps(e, i, s, n) {
    if (!this.isFormula(e)) return e;
    let a = this.stripFormulaPrefix(e.toString());
    return a = a.replace(
      /inputs\.(\w+)/g,
      (r, o) => s[o]?.toString() || "0"
    ), a = a.replace(
      /panels\.(\w+)\.(\w+)/g,
      (r, o, l) => {
        if (o === n?.panelKey && n[l] !== void 0)
          return n[l].toString();
        if (i.has(`${o}.${l}`))
          return i.get(`${o}.${l}`).toString();
        throw new Error(`Undefined variable in formula: ${r}`);
      }
    ), this.evaluate(this.parse(a), s);
  }
  calculatePanels(e) {
    if (!this.spec?.panels) return {};
    const i = {};
    for (const [s, n] of Object.entries(this.spec.panels)) {
      const a = this.buildFormulaGraph(s, n), r = this.resolveFormulas(a, n, e, i), o = {
        panelKey: s,
        l: r[`${s}.l`],
        w: r[`${s}.w`],
        t: r[`${s}.t`],
        q: r[`${s}.q`] || 1
      };
      i[s] = {
        name: n.name,
        material: n.material,
        bandingOptions: n.bandingOptions ?? {},
        finishOptions: n.finishOptions ?? {},
        orientationLock: n.orientationLock !== void 0 ? this.evaluateFormulaWithDeps(n.orientationLock, /* @__PURE__ */ new Map(), e, o) : void 0,
        ...o
      };
    }
    return i;
  }
  evaluateFormula(e, i, s = {}) {
    if (typeof e == "number") return e;
    if (typeof e == "string") {
      const n = e.replace(/inputs\.(\w+)/g, (r, o) => {
        if (!(o in i))
          throw new Error(`Input not found: ${o}`);
        return i[o].toString();
      }), a = n.match(/panels\.(\w+)\.(l|w|t|q)/);
      if (a) {
        const [, r, o] = a;
        if (!s[r])
          throw new Error(`Panel not found: ${r}`);
        return o === "q" ? s[r].q ?? 1 : s[r].dimensions[o];
      }
      return this.evaluate(this.parse(n), i);
    }
    throw new Error("Invalid formula type");
  }
  tokenize(e) {
    const i = /('(?:\\'|[^'])*'|[0-9.]+|>=|<=|==|!=|\+|-|\*|\/|>|<|\?|:|\(|\)|\w+|\.)/g;
    return e.match(i) || [];
  }
  isValidToken(e) {
    return this.isNumber(e) || this.isVariable(e) || e in this.precedence || e === "(" || e === ")" || e === "." || this.isIdentifier(e);
  }
  isIdentifier(e) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e);
  }
  evaluateComparison(e, i, s) {
    switch (e) {
      case ">":
        return i > s;
      case "<":
        return i < s;
      case ">=":
        return i >= s;
      case "<=":
        return i <= s;
      case "==":
        return i === s;
      default:
        throw new Error(`Unsupported comparison operator: ${e}`);
    }
  }
  isNumber(e) {
    return !isNaN(Number(e));
  }
  isVariable(e) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e);
  }
  toPostfix(e) {
    const i = [], s = [];
    for (const n of e)
      if (this.isNumber(n) || this.isStringLiteral(n) || this.isIdentifier(n))
        i.push(this.isNumber(n) ? Number(n) : n);
      else if (n === "(")
        s.push(n);
      else if (n === ")") {
        for (; s.length && s[s.length - 1] !== "("; )
          i.push(s.pop());
        if (s.length === 0)
          throw new Error("Mismatched parentheses");
        s.pop();
      } else if (n === "?") {
        for (; s.length && this.precedence[s[s.length - 1]] > this.precedence[n]; )
          i.push(s.pop());
        s.push(n);
      } else if (n === ":") {
        for (; s.length && s[s.length - 1] !== "?"; )
          i.push(s.pop());
        if (s.length === 0)
          throw new Error("Mismatched ternary operator");
        s.pop(), s.push("?:");
      } else if (n in this.precedence) {
        for (; s.length && this.precedence[s[s.length - 1]] >= this.precedence[n]; )
          i.push(s.pop());
        s.push(n);
      } else
        throw new Error(`Invalid token: ${n}`);
    for (; s.length; ) {
      const n = s.pop();
      if (n === "(" || n === ")")
        throw new Error("Mismatched parentheses");
      i.push(n);
    }
    return i;
  }
  parse(e) {
    if (typeof e != "string")
      throw new Error("Parse input must be a string");
    if (!e.trim())
      throw new Error("Empty input");
    const i = this.tokenize(e), s = this.toPostfix(i);
    return this.toFormulaJSON(s);
  }
  isStringLiteral(e) {
    return /^'.*'$/.test(e);
  }
  toFormulaJSON(e) {
    const i = [];
    for (const s of e)
      if (typeof s == "number" || this.isStringLiteral(s.toString()) || this.isVariable(s.toString()))
        i.push(s);
      else if (s === "?:") {
        if (i.length < 3)
          throw new Error("Invalid ternary expression");
        const n = i.pop(), a = i.pop(), r = i.pop();
        i.push({
          operation: "ternary",
          condition: r,
          trueExpr: a,
          falseExpr: n
        });
      } else {
        if (i.length < 2)
          throw new Error("Invalid expression: insufficient operands");
        const n = i.pop(), a = i.pop();
        i.push({
          operation: this.getOperation(s.toString()),
          operands: [a, n]
        });
      }
    if (i.length !== 1)
      throw new Error("Invalid expression: too many operands");
    return i[0];
  }
  calculateHardware(e) {
    return this.spec?.hardware ? Object.entries(this.spec.hardware).reduce((i, [s, n]) => {
      const a = this.evaluateValue(n.q, e);
      return i[s] = {
        name: n.name,
        q: Math.ceil(a),
        totalCost: Math.ceil(a) * n.cost
      }, i;
    }, {}) : {};
  }
  calculateAll(e) {
    this.validateInputs(e);
    const i = this.calculatePanels(e), s = this.calculateHardware(e);
    return {
      inputs: e,
      panels: i,
      hardware: s
    };
  }
  validateInputs(e) {
    if (!this.spec?.inputs) throw new fi("No input specifications defined", "NO_INPUTS");
    for (const [i, s] of Object.entries(this.spec.inputs)) {
      const n = e[i];
      if (n === void 0)
        throw new fi(`Missing required input: ${i}`, "MISSING_INPUT");
      if (n < s.min || n > s.max)
        throw new fi(`Input ${i} value ${n} out of range [min: ${s.min}, max: ${s.max}]`, "INPUT_OUT_OF_RANGE");
    }
  }
  async getSpec() {
    if (this.spec)
      return this.validateSpec(), this.spec;
    if (!this.url) return null;
    try {
      const e = await fetch(this.url);
      if (!e.ok)
        throw new Error(`HTTP error! status: ${e.status}`);
      const i = await e.json();
      return this.spec = i, this.validateSpec(), i;
    } catch (e) {
      return console.error("Error fetching or parsing JSON file:", e), null;
    }
  }
  validateSpec() {
    const e = [];
    return this.spec ? ((!this.spec.inputs || Object.keys(this.spec.inputs).length === 0) && e.push("Specification must contain inputs"), { isValid: e.length === 0, errors: e }) : (e.push("Specification is required"), { isValid: !1, errors: e });
  }
  validateFields(e) {
    if (!this.spec?.inputs)
      throw new fi("No input specifications defined", "NO_INPUTS");
    const i = Object.keys(this.spec.inputs);
    if (e.length !== i.length)
      throw new fi(`Expected ${i.length} fields, got ${e.length}`, "INVALID_FIELD_COUNT");
    let s = 0;
    for (const n of e) {
      const a = i[s], r = this.spec.inputs[a];
      if (n.value === null || n.value === void 0)
        throw new fi(`Missing value for field ${s}`, "MISSING_FIELD_VALUE");
      if (n.value < r.min || n.value > r.max)
        throw new fi(`Field ${s} value ${n.value} out of range [min: ${r.min}, max: ${r.max}]`, "FIELD_OUT_OF_RANGE");
      s++;
    }
  }
  fieldsToInputs(e) {
    const i = Object.keys(this.spec?.inputs || {});
    return e.reduce((s, n, a) => {
      const r = i[a];
      return r && (s[r] = n.value), s;
    }, {});
  }
  getEmptyFields() {
    const e = {};
    return this.spec?.inputs && Object.keys(this.spec.inputs).forEach((i, s) => {
      e[s] = { value: 0 };
    }), e;
  }
  getDefaultFields() {
    const e = {};
    return this.spec?.inputs && Object.values(this.spec.inputs).forEach((i, s) => {
      e[s] = { value: i.default };
    }), e;
  }
  calculatePanelsFromFields(e) {
    this.validateFields(e);
    const i = this.fieldsToInputs(e);
    return this.calculatePanels(i);
  }
  calculateHardwareFromFields(e) {
    this.validateFields(e);
    const i = this.fieldsToInputs(e);
    return this.calculateHardware(i);
  }
  calculateAllFromFields(e) {
    this.validateFields(e);
    const i = this.fieldsToInputs(e);
    return this.calculateAll(i);
  }
  getFieldMetadata() {
    const e = [];
    return this.spec?.inputs && Object.entries(this.spec.inputs).forEach(([i, s], n) => {
      e.push({
        index: n,
        name: i,
        label: s.label,
        type: s.type,
        min: s.min,
        max: s.max,
        default: s.default
      });
    }), e;
  }
}
const Vn = j({
  min: d().min(0).optional(),
  max: d().min(0).optional()
}).optional(), Nn = j({
  // Shape dimension constraints
  longSide: Vn,
  shortSide: Vn,
  t: Vn,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: p().optional(),
  // Custom validation message (optional)
  message: p().optional()
}), Zg = j({
  banding: Nn.optional(),
  finish: Nn.optional(),
  planing: Nn.optional()
}).optional(), Jg = Pe(["decimal", "fraction"]), Xg = Pe(wo), Fr = ye([
  xe(0),
  xe(1),
  xe(2)
]).catch(0), Qg = j({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: p().optional(),
  partB: p().optional(),
  partSelected: p().optional(),
  stock: p().optional(),
  text: p().optional(),
  // Checkout-specific colors
  button: p(),
  buttonText: p()
}), em = j({
  banding: _().default(!1),
  finish: _().default(!1),
  planing: _().default(!1),
  orientation: _().default(!0),
  diagram: _().default(!0),
  focus: _().default(!0),
  machining: _().default(!1),
  csvImport: _().default(!1),
  click: _().default(!0),
  partName: _().default(!0),
  progressNumber: _().default(!0)
  // imageUpload: z.boolean().default( false )
}), tm = j({
  // Localization
  locale: p().default("en-US"),
  currency: p().default("USD"),
  apiVersion: d().min(2).default(3),
  // Number formatting
  numberFormat: Jg.default("decimal"),
  decimalPlaces: d().min(0).max(10).default(2),
  fractionRoundTo: d().default(0),
  // Stock configuration
  stockSelection: Xg.optional(),
  stockGrain: Wi.optional(),
  // Part configuration
  minSpacing: xo.optional(),
  maxParts: d().min(0).default(0),
  orientationModel: Fr.default(0),
  resultOrientationModel: Fr.default(0),
  minDimension: d().min(0).default(0),
  partTrim: d().min(0).default(0),
  // UI configuration
  debug: _().default(!1),
  enable: em.optional(),
  colors: Qg.optional(),
  // Custom fields
  customFields: re(be()).optional(),
  fieldOrder: re(p()).optional(),
  // Extras location filtering
  bandingLocations: re(En).optional(),
  finishLocations: re(En).optional(),
  planingLocations: re(En).optional(),
  // Extras location groups
  extrasLocationGroups: Kg,
  // Extras validation rules
  extrasValidationRules: Zg
}), ss = j({
  min: d().min(0).optional(),
  max: d().min(0).optional()
}).optional(), im = j({
  // Basic dimension constraints
  l: ss,
  w: ss,
  t: ss,
  longSide: ss,
  shortSide: ss,
  // Cross-dimensional rules
  // These require that at least one dimension meets a threshold while the other meets a different threshold
  crossDimensionalRule: j({
    // At least one side must be >= primaryMin
    primaryMin: d().min(0).optional(),
    // The other side must be >= secondaryMin
    secondaryMin: d().min(0).optional()
  }).optional(),
  // Formula-based validation using JavaScript expression
  // Formula can reference: l, w, t, longSide, shortSide
  // Examples: "(l * w) > 100", "l >= 50 || w >= 50"
  formula: p().optional(),
  // Custom validation message (optional)
  message: p().optional()
});
function sm(t, e) {
  const i = [], s = (a, r, o) => {
    r == null || o === void 0 || (o.min !== void 0 && r < o.min && i.push({
      valid: !1,
      dimension: a,
      value: r,
      constraint: "min",
      limit: o.min
    }), o.max !== void 0 && r > o.max && i.push({
      valid: !1,
      dimension: a,
      value: r,
      constraint: "max",
      limit: o.max
    }));
  };
  s("l", t.l, e.l), s("w", t.w, e.w), s("longSide", t.longSide, e.longSide), s("shortSide", t.shortSide, e.shortSide);
  const n = typeof t.t == "string" ? parseFloat(t.t) : t.t;
  if (isNaN(n) || s("t", n, e.t), e.crossDimensionalRule) {
    const { primaryMin: a, secondaryMin: r } = e.crossDimensionalRule, o = t.l || 0, l = t.w || 0;
    if (a !== void 0 && r !== void 0) {
      const c = o >= a && l >= r, u = l >= a && o >= r;
      !c && !u && i.push({
        valid: !1,
        dimension: "crossDimensional",
        constraint: "crossDimensional",
        message: e.message || `At least one side must be ≥ ${a} mm and the other side must be ≥ ${r} mm`
      });
    }
  }
  return e.formula && (nm(e.formula, {
    l: t.l,
    w: t.w,
    t: n,
    longSide: t.longSide,
    shortSide: t.shortSide
  }) || i.push({
    valid: !1,
    dimension: "longSide",
    value: t.longSide || 0,
    constraint: "min",
    limit: 0,
    message: e.message || "Part does not meet validation requirements"
  })), {
    valid: i.length === 0,
    violations: i
  };
}
function nm(t, e) {
  try {
    const i = new la({}), s = i.parse(t);
    return !!i.evaluate(s, {
      l: e.l || 0,
      w: e.w || 0,
      t: e.t || 0,
      longSide: e.longSide || 0,
      shortSide: e.shortSide || 0
    });
  } catch (i) {
    return console.warn("Formula evaluation error:", i, "Formula:", t), !0;
  }
}
function am(t) {
  if (t.message)
    return t.message;
  if (t.constraint === "crossDimensional")
    return t.message || "Part dimensions do not meet requirements";
  const e = t.dimension === "t" ? "thickness" : t.dimension === "longSide" ? "long side" : t.dimension === "shortSide" ? "short side" : t.dimension, i = t.constraint === "min" ? "minimum" : "maximum";
  return `Part requires ${e} ${i} of ${t.limit} (current: ${t.value})`;
}
Pe([
  "full_stock",
  "part_area",
  "cut_length",
  "full_stock_plus_cut_length",
  "full_stock_plus_num_parts",
  "roll_length"
]);
const rs = Se(
  p(),
  d().min(0)
).default({}), rm = j({
  name: p().trim().min(1),
  thicknesses: re(
    ye([
      p().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      d()
    ])
  ).min(1)
}), Gn = j({
  labels: re(p()),
  pricing: Se(p(), d().min(0)).refine((t) => Object.keys(t).length > 0, {
    message: "Pricing must contain at least one value"
  }),
  options: be().optional(),
  keys: re(p()).optional(),
  // if not all the default keys should be set
  locations: re(p()).optional(),
  // available locations for this extras type
  groups: re(Vs).optional(),
  // custom location groups
  rules: be().optional()
  // validation rules for this extras type
});
j({
  success: _(),
  price: d().optional(),
  error: p().optional(),
  cacheHit: _().optional()
});
j({
  valid: _(),
  errors: re(p()),
  warnings: re(p())
});
j({
  pricing: rs,
  labels: re(p()),
  options: re(re(p())),
  // Simplified to string arrays only
  keys: re(p()),
  maxLevels: d().min(1)
});
j({
  enableCaching: _().default(!0),
  enableLogging: _().default(!1),
  maxCacheSize: d().min(1).default(1e3)
});
const cl = j({
  l: d(),
  w: d(),
  t: d().nullable(),
  q: d(),
  stockId: p()
}), ul = j({
  areaEfficiency: d(),
  finishArea: d(),
  bandingLength: d(),
  partArea: d(),
  totalParts: d(),
  stackedNumberOfCuts: d(),
  numberOfCuts: d(),
  stackedCutLength: d(),
  cutLength: d(),
  rollLength: d()
}), om = j({
  l: d(),
  w: d(),
  t: d().nullable(),
  material: p().nullable(),
  orientationLock: ye([
    xe(""),
    xe("l"),
    xe("w")
  ]).nullable(),
  q: d(),
  name: p().nullable(),
  rot: ye([xe(0), xe(1)]).default(0),
  // V2 format: flat banding/finish (x1/x2/y1/y2 for banding, a/b for finish)
  banding: Se(p(), ye([p(), _()])).nullable().optional(),
  finish: Se(p(), ye([p(), _()])).nullable().optional(),
  planing: Se(p(), ye([p(), _()])).nullable().optional(),
  customData: Se(p(), be()).nullable().optional(),
  stockId: p().nullable()
}), lm = j({
  id: p(),
  name: p().nullable(),
  l: d(),
  w: d(),
  t: d().nullable(),
  material: p().nullable(),
  q: d(),
  trim: j({
    x1: d(),
    x2: d(),
    y1: d(),
    y2: d()
  }).nullable().optional(),
  cost: d().nullable().optional(),
  analysis: ul.nullable().optional()
}), cm = j({
  id: p().optional(),
  name: p().optional(),
  l: d(),
  w: d(),
  t: d().nullable().optional(),
  material: p().optional(),
  q: d().optional(),
  orientationLock: ye([
    xe(""),
    xe("l"),
    xe("w")
  ]).nullable().optional(),
  // V2 format: flat banding/finish
  banding: Se(p(), ye([p(), _()])).nullable().optional(),
  finish: Se(p(), ye([p(), _()])).nullable().optional(),
  planing: Se(p(), ye([p(), _()])).nullable().optional(),
  customData: Se(p(), be()).nullable().optional()
});
j({
  jobId: d(),
  metadata: yn.optional(),
  parts: re(om),
  stock: re(lm),
  offcuts: re(cl),
  inputs: j({
    parts: re(cm)
  })
});
const um = j({
  l: d(),
  w: d(),
  t: d().nullable(),
  material: p().nullable(),
  orientationLock: ye([
    xe(""),
    xe("l"),
    xe("w")
  ]).nullable(),
  q: d(),
  name: p().nullable(),
  rot: ye([xe(0), xe(1)]).default(0),
  // V3 format: nested extras structure
  extras: j({
    banding: j({
      sides: Se(p(), ye([p(), _()]))
    }).nullable().optional(),
    finish: j({
      faces: Se(p(), ye([p(), _()]))
    }).nullable().optional(),
    planing: j({
      sides: Se(p(), ye([p(), _()])).optional(),
      faces: Se(p(), ye([p(), _()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: Se(p(), be()).nullable().optional(),
  stockId: p().nullable()
}), dm = j({
  id: p(),
  name: p().nullable(),
  l: d(),
  w: d(),
  t: d().nullable(),
  material: p().nullable(),
  q: d(),
  trim: j({
    l1: d(),
    l2: d(),
    w1: d(),
    w2: d()
  }).nullable().optional(),
  cost: d().nullable().optional(),
  analysis: ul.nullable().optional(),
  // New stock fields
  color: ye([
    j({
      hex: p(),
      name: p()
    }),
    p()
  ]).nullable().optional(),
  weight: d().positive().nullable().optional(),
  imageUrl: p().nullable().optional(),
  tags: re(p()).nullable().optional(),
  available: _().nullable().optional()
}), fm = j({
  id: p().optional(),
  name: p().optional(),
  l: d(),
  w: d(),
  t: d().nullable().optional(),
  material: p().optional(),
  q: d().optional(),
  orientationLock: ye([
    xe(""),
    xe("l"),
    xe("w")
  ]).nullable().optional(),
  // V3 format: nested extras structure
  extras: j({
    banding: j({
      sides: Se(p(), ye([p(), _()]))
    }).nullable().optional(),
    finish: j({
      faces: Se(p(), ye([p(), _()]))
    }).nullable().optional(),
    planing: j({
      sides: Se(p(), ye([p(), _()])).optional(),
      faces: Se(p(), ye([p(), _()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: Se(p(), be()).nullable().optional()
});
j({
  jobId: d(),
  metadata: yn.optional(),
  parts: re(um),
  stock: re(dm),
  offcuts: re(cl),
  inputs: j({
    parts: re(fm)
  })
});
function dl(t) {
  return {
    l: t.l,
    w: t.w,
    t: t.t ?? null,
    q: t.q,
    stockId: t?.stock?.id || t?.stockId || ""
  };
}
function fl(t) {
  return t ? {
    areaEfficiency: t.areaEfficiency ?? 0,
    finishArea: t.finishArea ?? 0,
    bandingLength: t.bandingLength ?? 0,
    partArea: t.partArea ?? 0,
    totalParts: t.totalParts ?? 0,
    stackedNumberOfCuts: t.stackedNumberOfCuts ?? 0,
    numberOfCuts: t.numberOfCuts ?? 0,
    stackedCutLength: t.stackedCutLength ?? 0,
    cutLength: t.cutLength ?? 0,
    rollLength: t.rollLength ?? 0
  } : null;
}
const hm = j({
  stockType: Pe([...Hs]).optional(),
  bladeWidth: ye([
    So,
    p()
  ]).optional(),
  cutType: dn,
  cutPreference: fn,
  stackHeight: un,
  guillotineOptions: hn
}).optional();
j({
  l: d().nullable(),
  w: d().nullable(),
  t: ye([d(), p()]).nullable().optional(),
  material: p().nullable().optional(),
  orientationLock: ye([
    xe("l"),
    xe("w"),
    xe("")
  ]).nullable().optional(),
  q: d().min(1).nullable().optional(),
  name: p().nullable().optional(),
  // Import existing schemas for extras
  banding: yo.nullable().optional(),
  finish: bo.nullable().optional(),
  planing: Io.nullable().optional(),
  // Custom data as record
  customData: Se(p(), be()).nullable().optional(),
  stockId: p().nullable().optional()
});
const pm = j({
  // Required fields
  stock: re(Yt).default([]),
  options: tm,
  // Optional fields
  type: p().optional(),
  // variable | simple
  materials: re(rm).optional(),
  banding: Gn.nullable().optional(),
  finish: Gn.nullable().optional(),
  planing: Gn.nullable().optional(),
  machining: be().optional(),
  bandingPricing: rs.optional(),
  finishPricing: rs.optional(),
  planingPricing: rs.optional(),
  machiningPricing: rs.optional(),
  // colors field removed in version 6.1.0 - was deprecated and unused
  variations: be().optional(),
  // NOTE: extrasValidationRules and extrasLocationGroups moved to optionsSchema
  // Part validation rules
  partRules: im.optional(),
  // Saw configuration
  saw: hm,
  // Stock filter (optional)
  // When enabled, the stock array is used as available filter options
  // and the actual stock list starts empty (built by user selections)
  stockFilter: j({
    enabled: _(),
    config: be().optional()
    // Use any to avoid circular dependency
    // Note: availableStock removed - uses stock array instead
  }).optional()
});
function gm(t) {
  const e = pm.safeParse(t);
  return {
    success: e.success,
    data: e.success ? e.data : void 0,
    error: e.success ? void 0 : e.error
  };
}
function mm(t) {
  const e = gm(t);
  if (!e.success) {
    const i = e.error?.issues.map((s) => `${s.path.join(".")}: ${s.message}`).join(", ") || "Unknown validation error";
    throw console.error("Invalid checkout data:", JSON.stringify(t, null, 2)), console.error("Validation errors:", i), new Error(`Invalid checkout data: ${i}`);
  }
  return e.data;
}
function Gt(t) {
  return t == null ? !1 : typeof t == "object" && t.value !== void 0 ? t.value : t;
}
function ym(t) {
  if (t.extras?.banding?.sides) {
    const e = t.extras.banding.sides, i = {};
    if (Ae(e.a) || Ae(e.b) || Ae(e.c) || Ae(e.d))
      i.x1 = Ae(e.a) ? Gt(e.a) : !1, i.y1 = Ae(e.b) ? Gt(e.b) : !1, i.x2 = Ae(e.c) ? Gt(e.c) : !1, i.y2 = Ae(e.d) ? Gt(e.d) : !1;
    else {
      const n = ra(e);
      i.x1 = Ae(n.x1) ? Gt(n.x1) : !1, i.x2 = Ae(n.x2) ? Gt(n.x2) : !1, i.y1 = Ae(n.y1) ? Gt(n.y1) : !1, i.y2 = Ae(n.y2) ? Gt(n.y2) : !1;
    }
    t.banding = i;
  }
  if (t.extras?.finish?.faces) {
    const e = t.extras.finish.faces, i = {};
    i.a = Ae(e.a) ? Gt(e.a) : !1, i.b = Ae(e.b) ? Gt(e.b) : !1, t.finish = i;
  }
  if (t.extras?.planing) {
    const e = t.extras.planing, i = {}, s = ra(e.sides || {});
    e.sides && (Ae(s.x1) && (i.x1 = s.x1), Ae(s.x2) && (i.x2 = s.x2), Ae(s.y1) && (i.y1 = s.y1), Ae(s.y2) && (i.y2 = s.y2)), e.faces && (Ae(e.faces.a) && (i.a = e.faces.a), Ae(e.faces.b) && (i.b = e.faces.b)), Object.keys(i).length > 0 && (t.planing = i);
  }
  (t.extras?.banding || t.extras?.finish || t.extras?.planing) && delete t.extras;
}
function bm(t, e = 0) {
  if (e === 0)
    return t;
  if (e === 1 || e === 2) {
    const i = Math.max(t.l, t.w), s = Math.min(t.l, t.w);
    t.w > t.l && (t.l = i, t.w = s);
  }
  return t;
}
function hl(t, e = 0) {
  return e === 0 || t.forEach((i) => bm(i, e)), t;
}
function vm(t, e, i, s, n, a, r) {
  const o = e.map((u) => {
    const f = {
      l: u.l,
      w: u.w,
      t: u?.t ?? null,
      material: u.material ?? null,
      orientationLock: u.orientationLock ?? null,
      q: a?.addedPartTally?.[u.parentId] || u.q,
      name: u.name ?? null,
      customData: u.customData ?? null,
      stockId: u?.stock?.id || u?.stockId || null,
      rot: u?.rot ?? 0,
      // Always include extras properties even if not set (using API format)
      banding: cp(),
      finish: tn(),
      planing: dp()
    }, h = { ...u };
    return ym(h), h.banding && (f.banding = h.banding), h.finish && (f.finish = h.finish), h.planing && (f.planing = h.planing), f;
  }), l = i.map((u) => {
    const f = {
      id: u.id,
      name: u?.name ?? null,
      l: u.l,
      w: u.w,
      t: u?.t ?? null,
      material: u.material ?? null,
      q: a?.usedStockTally?.[u.parentId] || u.q,
      cost: u?.cost ?? null,
      analysis: fl(u?.analysis)
    };
    return u?.trim && (f.trim = ra(u.trim)), f;
  }), c = {
    parts: n.map((u) => {
      const f = {
        id: u.id,
        name: u.name,
        l: u.l,
        w: u.w,
        t: u.t ?? null,
        material: u.material,
        q: u.q,
        orientationLock: u.orientationLock ?? null,
        customData: u.customData ?? null
      };
      return u.extras && (f.extras = {}, u.extras.banding?.sides && (f.extras.banding = { sides: u.extras.banding.sides }), u.extras.finish?.faces && (f.extras.finish = { faces: u.extras.finish.faces }), u.extras.planing && (f.extras.planing = {
        ...u.extras.planing.sides && { sides: u.extras.planing.sides },
        ...u.extras.planing.faces && { faces: u.extras.planing.faces }
      })), f;
    })
  };
  return r && hl(o, r), {
    jobId: t,
    metadata: a,
    parts: o,
    stock: l,
    offcuts: s?.map(dl) || [],
    inputs: c
  };
}
function wm(t, e, i, s, n, a, r) {
  const o = e.map((u) => {
    const f = {
      l: u.l,
      w: u.w,
      t: u?.t ?? null,
      material: u.material ?? null,
      orientationLock: u.orientationLock ?? null,
      q: a?.addedPartTally?.[u.parentId] || u.q,
      name: u.name ?? null,
      customData: u.customData ?? null,
      stockId: u?.stock?.id || u?.stockId || null,
      rot: u?.rot ?? 0,
      // Always include extras structure even if not set (using internal format)
      extras: {
        banding: { sides: aa() },
        finish: { faces: tn() },
        planing: up()
      }
    };
    return u.extras && (u.extras.banding?.sides && (f.extras.banding = { sides: u.extras.banding.sides }), u.extras.finish?.faces && (f.extras.finish = { faces: u.extras.finish.faces }), u.extras.planing && (f.extras.planing = {
      sides: u.extras.planing.sides || aa(),
      faces: u.extras.planing.faces || tn()
    })), f;
  }), l = i.map((u) => ({
    id: u.id,
    name: u?.name ?? null,
    l: u.l,
    w: u.w,
    t: u?.t ?? null,
    material: u.material ?? null,
    q: a?.usedStockTally?.[u.parentId] || u.q,
    trim: u?.trim ?? null,
    // Keep internal format (l1/l2/w1/w2)
    cost: u?.cost ?? null,
    analysis: fl(u?.analysis),
    // New stock fields
    color: u?.color ?? null,
    weight: u?.weight ?? null,
    imageUrl: u?.imageUrl ?? null,
    tags: u?.tags ?? null,
    available: u?.available ?? null
  })), c = {
    parts: n.map((u) => {
      const f = {
        id: u.id,
        name: u.name,
        l: u.l,
        w: u.w,
        t: u.t ?? null,
        material: u.material,
        q: u.q,
        orientationLock: u.orientationLock ?? null,
        customData: u.customData ?? null
      };
      return u.extras && (f.extras = {}, u.extras.banding?.sides && (f.extras.banding = { sides: u.extras.banding.sides }), u.extras.finish?.faces && (f.extras.finish = { faces: u.extras.finish.faces }), u.extras.planing && (f.extras.planing = {
        ...u.extras.planing.sides && { sides: u.extras.planing.sides },
        ...u.extras.planing.faces && { faces: u.extras.planing.faces }
      })), f;
    })
  };
  return r && hl(o, r), {
    jobId: t,
    metadata: a,
    parts: o,
    stock: l,
    offcuts: s?.map(dl) || [],
    inputs: c
  };
}
const Sm = ["id", "data-index"], xm = /* @__PURE__ */ We({
  __name: "BandingButton",
  props: {
    inputShape: { default: null },
    open: { type: Boolean, default: !1 },
    id: { default: "" },
    orientationModel: { default: 0 },
    stockGrain: { default: "n" },
    disabled: { type: Boolean, default: !1 },
    index: { default: 0 }
  },
  emits: ["clicked"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = oe({
      l1: !1,
      l2: !1,
      w1: !1,
      w2: !1
    }), a = () => {
      if (!i.inputShape) return;
      let l = {
        l1: gi(i.inputShape, "banding", "side.l1"),
        l2: gi(i.inputShape, "banding", "side.l2"),
        w1: gi(i.inputShape, "banding", "side.w1"),
        w2: gi(i.inputShape, "banding", "side.w2")
      };
      const c = mf(
        i.orientationModel,
        i.stockGrain,
        i.inputShape
      );
      c && (l = Ao(l, c)), n.value = l;
    };
    He([
      () => i.inputShape,
      // Watching the entire inputShape for deep changes
      () => i.orientationModel,
      () => i.stockGrain,
      () => i.inputShape?.orientationLock
      // Still watch orientationLock explicitly if it triggers a re-evaluation
    ], () => {
      a();
    }, { deep: !0, immediate: !0 });
    const r = (l) => {
      (l.key === "Enter" || l.key === " ") && o();
    }, o = () => {
      i.disabled || s("clicked");
    };
    return Zt(() => {
      document.getElementById(i.id)?.addEventListener("keydown", r);
    }), hs(() => {
      document.getElementById(i.id)?.removeEventListener("keydown", r);
    }), (l, c) => (w(), L("div", {
      id: t.id,
      class: _e(["banding-button", { open: t.open, disabled: t.disabled }]),
      "data-field": "banding",
      "data-index": t.index,
      tabindex: "0",
      onClick: o
    }, [
      $("div", {
        class: _e(["outer", {
          l1: n.value.l1,
          l2: n.value.l2,
          w1: n.value.w1,
          w2: n.value.w2
        }])
      }, [...c[0] || (c[0] = [
        $("div", { class: "inner" }, null, -1)
      ])], 2)
    ], 10, Sm));
  }
}), km = ["id", "data-index", "disabled"], Im = /* @__PURE__ */ We({
  __name: "FinishButton",
  props: {
    inputShape: { default: null },
    open: { type: Boolean, default: !1 },
    id: { default: "" },
    disabled: { type: Boolean, default: !1 },
    index: { default: 0 }
  },
  emits: ["clicked"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = te(() => i.inputShape ? gi(i.inputShape, "finish", "face.a") : !1), a = te(() => i.inputShape ? gi(i.inputShape, "finish", "face.b") : !1), r = () => {
      i.disabled || s("clicked");
    };
    return (o, l) => {
      const c = bi("FontAwesomeIcon");
      return w(), L("button", {
        id: t.id,
        class: _e(["c-btn finish-button", {
          "face-a": n.value,
          // Use computed property
          "face-b": a.value,
          // Use computed property
          selected: t.open
        }]),
        "data-field": "finish",
        "data-index": t.index,
        type: "button",
        tabindex: "0",
        disabled: t.disabled,
        onClick: r
      }, [
        Ve(c, { icon: ["fass", "spray-can"] })
      ], 10, km);
    };
  }
});
function Pm(t) {
  return t.machining ? "toData" in t.machining ? t.machining.toData() : t.machining : { holes: [], hingeHoles: [], corners: {} };
}
function pl(t) {
  const e = Pm(t);
  return e ? !!(e.holes && e.holes.length > 0 || e.hingeHoles && e.hingeHoles.length > 0 || e.corners && Object.values(e.corners).some((i) => i && i.type && i.size > 0)) : !1;
}
const Cm = We({
  name: "MachiningButton",
  props: {
    inputShape: {
      type: Object,
      default: null
    },
    id: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["open"],
  computed: {
    hasMachining() {
      return pl(this.inputShape);
    },
    disabledOrReadonly() {
      return this.disabled || !!this.inputShape?.readonly;
    }
  },
  methods: {
    openMachining() {
      this.disabled || this.$emit("open");
    }
  }
}), Am = ["id", "disabled"];
function Tm(t, e, i, s, n, a) {
  const r = bi("FontAwesomeIcon");
  return w(), L("button", {
    id: t.id,
    class: _e(["c-btn machining-button", { selected: t.hasMachining }]),
    type: "button",
    disabled: t.disabled,
    onClick: e[0] || (e[0] = (...o) => t.openMachining && t.openMachining(...o))
  }, [
    Ve(r, { icon: ["fass", "hammer"] })
  ], 10, Am);
}
const Om = /* @__PURE__ */ Ot(Cm, [["render", Tm]]), Lm = ["id"], Fm = {
  key: 0,
  class: "del",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, $m = {
  key: 1,
  class: "no-change",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Dm = {
  key: 2,
  class: "arrow",
  viewBox: "0 0 67 63",
  xmlns: "http://www.w3.org/2000/svg"
}, Em = {
  key: 3,
  class: "arrow",
  viewBox: "0 0 72 39",
  xmlns: "http://www.w3.org/2000/svg"
}, _m = {
  key: 4,
  class: "arrow",
  viewBox: "0 0 39 72",
  xmlns: "http://www.w3.org/2000/svg"
}, Mm = {
  key: 5,
  class: "grain",
  viewBox: "0 0 106 64",
  xmlns: "http://www.w3.org/2000/svg"
}, Rm = {
  key: 6,
  class: "grain",
  viewBox: "0 0 64 106",
  xmlns: "http://www.w3.org/2000/svg"
}, $r = /* @__PURE__ */ We({
  __name: "OrientationButton",
  props: {
    id: { default: "" },
    orientationModel: { default: 0 },
    rectangleType: { default: null },
    rectangle: { default: () => null },
    shapeOrientation: { default: "" },
    stockGrain: { default: "n" },
    disabled: { type: Boolean, default: !1 },
    debug: { type: Boolean, default: !1 }
  },
  emits: ["updateOrientation"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = oe(0), a = oe(!1), r = (z, m, W, ee) => {
      if (!Te(W) || m === 0)
        return z;
      const K = o();
      return m === 1 || m === 2 && ee !== "n" && z ? K : z;
    }, o = (z) => {
      const m = { ...i, ...z };
      if (!m.rectangle || !Te(m.rectangle)) return "";
      let W = "";
      switch (m.orientationModel) {
        case 0:
          W = C.value;
          break;
        case 1:
          m.stockGrain === "y" || m.stockGrain === "n" ? W = m.rectangle.l >= m.rectangle.w ? "l" : "w" : m.rectangle.l >= m.rectangle.w ? W = m.stockGrain : W = W = m.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          W = m.rectangle.l >= m.rectangle.w ? "l" : "w";
          break;
      }
      return W;
    }, l = () => {
      if (i.disabled || S.value.length <= 1)
        return;
      const z = c(C.value);
      "multiEdit" in i.rectangle && i.rectangle.multiEdit && C.value === "" && n.value !== z && n.value === 0 && (n.value = z);
      let W = null;
      [1, 2].includes(i.orientationModel) ? W = f() : W = u(), n.value = W;
    }, c = (z) => {
      const m = S.value.findIndex((W) => W === z);
      return m === -1 ? 0 : m;
    }, u = () => {
      let z = n.value + 1;
      return z > S.value.length - 1 && (z = 0), z;
    }, f = () => {
      let z = 0;
      if (C.value === "") {
        const m = o();
        z = S.value.findIndex((W) => W === m);
      } else
        z = S.value.findIndex((m) => m === "");
      return z;
    }, h = (z) => {
      s("updateOrientation", z);
    }, g = () => {
      const z = C.value;
      if ("multiEdit" in i.rectangle && i.rectangle.multiEdit)
        return z === " " ? " " : z === "" ? "" : z === "l" ? "l" : z === "w" ? "w" : "default";
      switch (i.orientationModel) {
        case 0:
          return z === " " ? " " : z ? i.stockGrain === "n" ? z || i.shapeOrientation || "default" : i.stockGrain === "w" ? z === "w" ? "w" : "l" : z === "l" ? "l" : "w" : "default";
        case 1:
          return z === " " ? " " : z ? i.stockGrain === "n" ? z || i.shapeOrientation || "default" : i.stockGrain === "w" ? z === "w" ? "w" : "l" : z === "l" ? "l" : "w" : "default";
        case 2:
          return z === " " ? " " : z ? i.stockGrain === "n" ? z || i.shapeOrientation || "default" : i.stockGrain === "w" ? z === "w" ? "w" : "l" : z === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, k = () => {
      if (!i.rectangle)
        return;
      if ("multiEdit" in i.rectangle && i.rectangle.multiEdit && !C.value) {
        V("");
        return;
      }
      const z = r(
        C.value,
        i.orientationModel,
        i.rectangle,
        i.stockGrain
      );
      if (z !== C.value) {
        V(z);
        return;
      }
      if (!a.value || n.value === -1) {
        const m = c(C.value);
        n.value = m;
      }
      if (Te(i.rectangle)) {
        if (i.orientationModel === 1) {
          const m = Y.value ? o() : C.value;
          V(m);
          return;
        }
        if (i.orientationModel === 2) {
          let m;
          Y.value ? m = i.stockGrain !== "n" ? o() : "" : m = C.value, V(m);
        }
      }
    }, E = oe(!1), V = (z) => {
      const m = c(z);
      E.value = !0, n.value = m, E.value = !1, h(z);
    }, A = () => {
      const z = [
        { l: 100, w: 50, desc: "l > w" },
        { l: 50, w: 50, desc: "l === w" },
        { l: 50, w: 100, desc: "w > l" }
      ], m = ["l", "w", "y", "n"], W = [0, 1, 2], ee = {
        "": "Free rotation",
        l: "Long side follows grain",
        w: "Short side follows grain"
      }, K = {
        "": "Free rotation",
        l: "Long side follows stock length (long side)",
        w: "Long side follows stock width (short side)"
      }, R = {
        l: "Grain along stock length (long side)",
        w: "Grain along stock width (short side)",
        y: "Grain along a mix of stock length (long side) and width (short side)",
        n: "No stock grain set"
      }, B = [];
      z.forEach((G) => {
        m.forEach((N) => {
          W.forEach((U) => {
            const ne = new as({
              l: G.l,
              w: G.w
            }), ge = o({
              orientationModel: U,
              rectangle: ne,
              stockGrain: N
            });
            let we = "";
            ne.l === ne.w ? we = "l === w" : ne.l > ne.w ? we = "l >= w" : we = "w > l";
            const Le = ["l", "w", "y"].includes(N) ? ee : K;
            B.push({
              Model: U,
              "Stock grain": N,
              "Stock grain description": R[N],
              Dimensions: we,
              "Orientation lock": ge || "N/A",
              "Orientation Lock description": Le[ge] || "N/A"
            });
          });
        });
      }), B.sort((G, N) => {
        if (G.Model !== N.Model)
          return G.Model - N.Model;
        if (G["Stock grain"] !== N["Stock grain"])
          return G["Stock grain"].localeCompare(N["Stock grain"]);
        const U = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return U[G.Dimensions] - U[N.Dimensions];
      }), console.table(B);
    }, S = te(() => {
      if (!i.rectangle) return ["l", "w"];
      if (zt(i.rectangle)) return ["l", "w"];
      let z = ["", "l", "w"];
      return i.rectangle.multiEdit ? [" ", "", "l", "w"] : (D.value && (z = z.filter((m) => m !== "w")), z);
    }), D = te(() => Te(i.rectangle) || Gi(i.rectangle) ? i.rectangle.isSquare : i.rectangleType && i.rectangle?.l && i.rectangle?.w ? i.rectangle?.l === i.rectangle?.w : !1), C = te(() => {
      let z = "";
      if (zt(i.rectangle))
        z = i.rectangle.direction === "horizontal" ? "l" : "w";
      else if (Te(i.rectangle)) {
        const m = i.rectangle.orientationLock;
        z = m === null ? "" : m;
      } else if (Gi(i.rectangle)) {
        const W = i.rectangle.grain ?? "";
        W === "l" || W === "w" || W === "" || W === " " ? z = W : z = "";
      }
      return z;
    }), F = te(() => zt(i.rectangle) || !i.rectangle ? {
      l: null,
      w: null
    } : {
      l: i.rectangle.l,
      w: i.rectangle.w
    }), Y = te(() => !F.value.l && !F.value.w), M = te(() => zt(i.rectangle) ? !1 : Jn(
      i.orientationModel,
      i.stockGrain,
      i.rectangle,
      i.rectangleType,
      i.shapeOrientation
    )), ce = te(() => {
      if (!i.rectangle)
        return i.shapeOrientation ? "noGrain" : "freeRotation";
      if (Gi(i.rectangle) || i.rectangleType === "stock") {
        const K = i.rectangle.grain;
        return "multiEdit" in i.rectangle && i.rectangle.multiEdit ? {
          " ": "noGrain",
          // Clear to no grain
          "": "noChange",
          // No change
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[K] || "noGrain" : {
          "": "noGrain",
          // No grain
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[K] || "noGrain";
      }
      const z = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, m = i.stockGrain || "default";
      let W = "default";
      Te(i.rectangle) || i.rectangleType === "shape" ? W = g() : zt(i.rectangle) && (W = i.rectangle.direction || "default");
      const ee = z[m]?.[W];
      return ee || z[m]?.default || "freeRotation";
    });
    return He(n, (z, m) => {
      a.value && m !== void 0 && (E.value || h(S.value[z]));
    }, { immediate: !1 }), He(F, (z, m) => {
      if (!i.rectangle || i.orientationModel === 0 || !Te(i.rectangle) || Te(i.rectangle) && (i.orientationModel === 2 && m.l && m.w && !C.value || i.stockGrain === "n" && !C.value))
        return;
      const W = o();
      C.value !== W && h(W);
    }, { immediate: !1 }), He(() => i.stockGrain, (z, m) => {
      z !== m && k();
    }, { immediate: !0 }), Zt(() => {
      k(), mt(() => {
        a.value = !0, i.debug && A();
      });
    }), (z, m) => (w(), L("button", {
      type: "button",
      id: t.id,
      class: _e(["c-btn orientation-button", { rot: M.value, square: D.value, disabled: t.disabled, [ce.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      onClick: l
    }, [
      ce.value === "delete" ? (w(), L("svg", Fm, [...m[0] || (m[0] = [
        $("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ])])) : se("", !0),
      ce.value === "noChange" ? (w(), L("svg", $m, [...m[1] || (m[1] = [
        $("path", {
          d: "M5 12h14",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        }, null, -1)
      ])])) : se("", !0),
      ce.value === "freeRotation" ? (w(), L("svg", Dm, [...m[2] || (m[2] = [
        $("g", null, [
          $("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          $("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          $("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          $("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ])])) : se("", !0),
      ce.value === "leftRight" ? (w(), L("svg", Em, [...m[3] || (m[3] = [
        $("g", null, [
          $("path", { d: "m5.408 19.408h61.095" }),
          $("g", null, [
            $("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            $("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ])])) : se("", !0),
      ce.value === "topBottom" ? (w(), L("svg", _m, [...m[4] || (m[4] = [
        $("g", null, [
          $("path", { d: "m19.408 66.503v-61.095" }),
          $("g", null, [
            $("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            $("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ])])) : se("", !0),
      ce.value === "grainLeftRight" ? (w(), L("svg", Mm, [...m[5] || (m[5] = [
        $("g", null, [
          $("path", { d: "m3 3h99.887" }),
          $("path", { d: "m3.113 32h99.887" }),
          $("path", { d: "m3.113 61h99.887" })
        ], -1)
      ])])) : se("", !0),
      ce.value === "grainTopBottom" ? (w(), L("svg", Rm, [...m[6] || (m[6] = [
        $("g", null, [
          $("path", { d: "m61 3v99.887" }),
          $("path", { d: "m32 3.113v99.887" }),
          $("path", { d: "m3 3.113v99.887" })
        ], -1)
      ])])) : se("", !0)
    ], 10, Lm));
  }
}), jm = ["id", "data-index", "disabled"], Bm = /* @__PURE__ */ We({
  __name: "PlaningButton",
  props: {
    inputShape: { default: null },
    open: { type: Boolean, default: !1 },
    id: { default: "" },
    disabled: { type: Boolean, default: !1 },
    index: { default: 0 }
  },
  emits: ["clicked"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = te(() => i.inputShape ? gi(i.inputShape, "planing", "face.a") : !1), a = te(() => i.inputShape ? gi(i.inputShape, "planing", "face.b") : !1), r = () => {
      i.disabled || s("clicked");
    };
    return (o, l) => {
      const c = bi("FontAwesomeIcon");
      return w(), L("button", {
        id: t.id,
        class: _e(["c-btn planing-button", {
          "face-a": n.value,
          "face-b": a.value,
          selected: t.open
        }]),
        "data-field": "planing",
        "data-index": t.index,
        type: "button",
        tabindex: "0",
        disabled: t.disabled,
        onClick: r
      }, [
        Ve(c, { icon: ["fass", "hammer"] })
      ], 10, jm);
    };
  }
}), Vm = {
  key: 0,
  class: "info"
}, Nm = ["disabled"], Gm = /* @__PURE__ */ We({
  __name: "CheckoutField",
  props: {
    field: {
      type: Object,
      required: !0
    },
    item: {
      type: Object,
      required: !0
    },
    index: {
      type: Number,
      required: !0
    },
    typePrefix: {
      type: String,
      required: !0
    },
    numberFormat: {
      type: String,
      default: "decimal"
    },
    multiEdit: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    enableLabel: {
      type: Boolean,
      default: !1
    },
    stockGrain: {
      type: String,
      default: "n"
    },
    orientationModel: {
      type: Number,
      default: 0
    },
    bandingEnabled: {
      type: Object,
      default: null
    },
    materialOptions: {
      type: Array,
      default: () => []
    },
    thicknessOptions: {
      type: Array,
      default: () => []
    },
    issue: {
      type: Boolean,
      default: !1
    },
    warning: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update", "validation", "open-banding", "open-machining", "open-finish", "open-planing", "open-image-upload"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = ["orientationLock", "grain", "banding", "bandingOptions", "machining", "finish", "planing", "imageUpload"], a = te(() => n.includes(i.field.name) || i.field.name === "material" && i.typePrefix === "part" || i.field.name === "t" && i.thicknessOptions?.length > 0), r = te(() => {
      try {
        const S = i.field.propertyPath || i.field.name;
        return S.includes(".") ? hi(i.item, S) ?? null : i.item[S] ?? null;
      } catch (S) {
        return console.error("[CheckoutField] Error getting field value:", S), null;
      }
    }), o = te(() => {
      if (i.field.custom && i.field.type) {
        const C = i.field.type;
        if (["checkbox", "select", "string", "integer", "unitDependent"].includes(C))
          return C;
      }
      const S = {
        number: "unitDependent",
        integer: "integer",
        string: "string",
        boolean: "checkbox",
        enum: "select"
      };
      if (i.field.name === "q") return "integer";
      if (i.field.name === "cost") return "string";
      if (i.field.name === "autoAdd") return "checkbox";
      if (i.field.name === "material" && i.typePrefix === "stock") return "string";
      if (["l", "w", "t", "trim"].includes(i.field.name)) return "unitDependent";
      const D = S[i.field.type];
      return D || "string";
    }), l = te(() => i.field.output ? i.field.output : null), c = te(() => i.field.options || []), u = te(() => !1), f = te(() => Za(i.item, [i.field.name])), h = te(() => Za(i.item, [i.field.name], !0)), g = te(() => i.multiEdit || !1), k = te(() => i.materialOptions?.length > 0 && Te(i.item) ? !i.item.material : !1), E = te(() => i.field.info ? typeof i.field.info == "string" ? i.field.info : typeof i.field.info == "object" && r.value !== null && i.field.info[r.value] || null : null), V = (S) => {
      s("update", S);
    }, A = (S, D) => {
      s("validation", S, D);
    };
    return (S, D) => a.value ? (w(), L(Re, { key: 1 }, [
      t.field.name === "orientationLock" ? (w(), Fe($r, {
        key: 0,
        rectangle: t.item,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        "button-background": "#2c8d8f",
        onUpdateOrientation: V
      }, null, 8, ["rectangle", "stock-grain", "orientation-model"])) : t.field.name === "grain" ? (w(), Fe($r, {
        key: 1,
        rectangle: t.item,
        "button-background": "#2c8d8f",
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        onUpdateOrientation: V
      }, null, 8, ["rectangle", "stock-grain", "orientation-model"])) : t.field.name === "banding" ? (w(), Fe(xm, {
        key: 2,
        "input-shape": P(Te)(t.item) ? t.item : null,
        open: t.bandingEnabled?.autoId === t.item.autoId,
        "stock-grain": t.stockGrain,
        index: t.index,
        onClicked: D[0] || (D[0] = (C) => S.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "index"])) : t.field.name === "finish" ? (w(), Fe(Im, {
        key: 3,
        "input-shape": P(Te)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        onClicked: D[1] || (D[1] = (C) => S.$emit("open-finish"))
      }, null, 8, ["input-shape", "index"])) : t.field.name === "planing" ? (w(), Fe(Bm, {
        key: 4,
        "input-shape": P(Te)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        onClicked: D[2] || (D[2] = (C) => S.$emit("open-planing"))
      }, null, 8, ["input-shape", "index"])) : t.field.name === "machining" ? (w(), Fe(Om, {
        key: 5,
        "input-shape": P(Te)(t.item) ? t.item : null,
        onOpen: D[3] || (D[3] = (C) => S.$emit("open-machining"))
      }, null, 8, ["input-shape"])) : t.field.name === "material" && t.typePrefix === "part" ? (w(), Fe(Pi, {
        key: 6,
        id: `${t.typePrefix}-material-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: r.value,
        label: P(H)(t.field.label || "fields.material"),
        placeholder: P(H)(t.field.placeholder || "fields.material"),
        "enable-label": !1,
        output: "string",
        options: t.materialOptions,
        "select-first-option-disabled": !1,
        disabled: !t.materialOptions?.length,
        required: !1,
        text: {
          select: P(H)("actions.select"),
          delete: P(H)("actions.delete")
        },
        "onUpdate:value": V,
        onValidation: A
      }, {
        default: Ci(() => [
          Gs(S.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : t.field.name === "t" && t.thicknessOptions?.length > 0 ? (w(), Fe(Pi, {
        key: 7,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: r.value,
        label: P(H)(t.field.label || "fields.t"),
        "enable-label": !1,
        options: t.thicknessOptions,
        readonly: t.readonly,
        disabled: k.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: P(H)("actions.select"),
          delete: P(H)("actions.delete")
        },
        output: "number",
        "onUpdate:value": V,
        onValidation: A
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "imageUpload" ? (w(), L("button", {
        key: 8,
        type: "button",
        disabled: t.readonly,
        onClick: D[4] || (D[4] = (C) => S.$emit("open-image-upload"))
      }, [
        Ve(P(Ns), { icon: ["fass", "image"] })
      ], 8, Nm)) : se("", !0)
    ], 64)) : (w(), Fe(Pi, {
      key: 0,
      id: `${t.typePrefix}-${t.field.name}-${t.index}`,
      "data-field": t.field.name,
      "data-index": t.index,
      type: o.value,
      value: r.value,
      label: P(H)(t.field.label || t.field.name),
      placeholder: P(H)(t.field.placeholder || t.field.name),
      "enable-label": t.enableLabel,
      output: l.value,
      options: c.value,
      "select-first-option-disabled": t.field.selectFirstOptionDisabled ?? !0,
      disabled: t.field.disabled || u.value,
      readonly: t.readonly || t.field.readonly,
      required: t.field.required || !1,
      "allow-zero": t.field.allowZero ?? !1,
      "true-value": t.field.trueValue ?? !0,
      "false-value": t.field.falseValue ?? !1,
      default: t.field.defaultValue,
      "number-format": t.numberFormat,
      min: t.field.min || null,
      max: t.field.max || null,
      "multi-edit": t.multiEdit,
      text: t.field.text,
      issue: f.value,
      warning: h.value,
      "disable-required-validation": g.value,
      "onUpdate:value": V,
      onValidation: A
    }, {
      default: Ci(() => [
        E.value ? (w(), L("p", Vm, [
          Ve(P(Ns), { icon: ["fass", "info-circle"] }),
          os(" " + ae(E.value), 1)
        ])) : se("", !0),
        Gs(S.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "data-field", "data-index", "type", "value", "label", "placeholder", "enable-label", "output", "options", "select-first-option-disabled", "disabled", "readonly", "required", "allow-zero", "true-value", "false-value", "default", "number-format", "min", "max", "multi-edit", "text", "issue", "warning", "disable-required-validation"]));
  }
}), qm = { class: "checkout-calculator-wrapper" }, zm = {
  key: 0,
  class: "row table-heading"
}, Wm = {
  key: 0,
  class: "cell center"
}, Hm = { class: "cell" }, Um = {
  key: 0,
  class: "cell"
}, Ym = ["onClick"], Km = { class: "cell" }, Zm = ["disabled", "aria-label", "onClick"], Jm = { class: "button-wrapper main" }, Xm = ["aria-label"], Qm = ["aria-label", "disabled"], ey = ["aria-label"], ty = { id: "part-count" }, iy = {
  key: 3,
  id: "messages"
}, sy = {
  key: 0,
  class: "heading"
}, ny = { class: "content" }, ay = {
  key: 4,
  id: "progress"
}, ry = { id: "diagram-wrapper" }, oy = {
  key: 0,
  id: "stack"
}, ly = {
  key: 3,
  class: "debug"
}, qn = !0, cy = /* @__PURE__ */ We({
  __name: "CheckoutCalculator",
  props: {
    debug: {
      type: Boolean,
      default: !1
    },
    inputStock: {
      type: Array,
      default: () => []
    },
    findExtrasPrice: {
      type: Function,
      required: !0
    },
    formatPrice: {
      type: Function,
      required: !0
    },
    inputType: {
      type: String,
      default: "manual"
    },
    readonly: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["inputs-changed", "calculating", "validation-error", "result", "no-result", "log", "error"],
  setup(t, { expose: e, emit: i }) {
    const s = Ri(() => Promise.resolve().then(() => yy)), n = Ri(() => Promise.resolve().then(() => Ry)), a = Ri(() => Promise.resolve().then(() => qy)), r = Ri(() => Promise.resolve().then(() => La)), {
      inputs: o,
      totalInputShapes: l,
      getShapeGrainSummary: c,
      updateNumberFormat: u,
      validateInputStock: f,
      // validateInputShapeField,
      // validateInputStockField,
      removeInputShape: h,
      addInputShape: g,
      addInputStock: k,
      cloneInputShape: E,
      updateInputShape: V,
      validationIssues: A,
      setExtrasOptionsFromPricing: S,
      getCentralizedOptions: D
    } = Jo(), { r: C, updateFromResult: F, stackedStock: Y, uniqueAddedShapes: M, uniqueUsedStock: ce, activeStockAutoId: z, activeStock: m, setActiveStockAutoId: W } = ua(), { progress: ee, reset: K } = Pc(), { addNotice: R } = nn(), B = te(() => o.inputShapes.value.filter(Te)), G = (b) => !b || !Array.isArray(b) ? [] : b.map((v) => wp({ parts: [v] }).parts?.[0] || v), N = t, U = i, ne = oe(!1), ve = "production", ge = oe(navigator?.language || "en-US"), we = Yl(null), Le = window.location.hostname, X = oe(!1), Ge = oe(!0), nt = Kl("Checkout/currentURL", window.location.href), Xe = oe(null), St = oe(!1), ie = oe(!1), je = oe(!1), Lt = oe(!1), Ft = oe(!1), Zi = oe(uf()), vt = oe(!1), { socket: fe } = kc({
      refs: {
        connected: X,
        thinking: je
      },
      callbacks: {
        onResult(b) {
          const v = b.optimisation;
          if (F(v), !v.shapeList?.length || !v.stockList?.length) {
            K(), R({
              type: "error",
              message: H("errors.calculation.no_result"),
              additional: [H("errors.validation.check_inputs")]
            }), je.value = !1;
            return;
          }
          if ((de.apiVersion || 3) === 2 ? Xe.value = vm(
            b.jobId,
            M.value,
            ce.value,
            C.offcuts?.value || [],
            o.inputShapes.value,
            C.metadata.value,
            de.resultOrientationModel
          ) : Xe.value = wm(
            b.jobId,
            M.value,
            ce.value,
            C.offcuts?.value || [],
            o.inputShapes.value,
            C.metadata.value,
            de.resultOrientationModel
          ), C?.metadata?.value?.unplacedParts?.length) {
            const y = C.metadata.value.unplacedParts.map((q) => q.id).join();
            R({
              type: "warning",
              message: H("woodwork.parts_not_fit") + ": " + y
            });
          }
          Xe.value && U("result", Xe.value), je.value = !1;
        },
        onUser(b) {
          we.value = b;
        },
        onConnectError(b) {
          R({
            type: "error",
            message: H("errors.network.cannot_connect"),
            additional: [b]
          });
        },
        onError(b) {
          R({
            type: "error",
            message: H("errors.general.error_occurred"),
            additional: [b]
          });
        }
      }
    }), pe = {
      enable: {
        diagram: !0,
        focus: !0,
        click: !0,
        partName: !0,
        progressNumber: !0,
        orientation: !0,
        banding: !1,
        finish: !1,
        planing: !1,
        machining: !1,
        csvImport: !1
        // imageUpload: false
      },
      colors: {
        partA: "#118ab2",
        partB: null,
        partSelected: null,
        stock: "#ffd166",
        button: "#118ab2",
        buttonText: "#ffffff",
        text: "#ffffff"
      },
      apiVersion: 3,
      numberFormat: "decimal",
      decimalPlaces: 2,
      fractionRoundTo: 0,
      maxParts: 10,
      locale: navigator?.language || "en-US",
      orientationModel: 0,
      resultOrientationModel: 2,
      customFields: [],
      fieldOrder: [],
      minDimension: 0,
      stockSelection: null,
      stockGrain: null,
      partTrim: 0,
      currency: "USD",
      debug: !1
    }, de = xt(pe), Ce = xt({
      issues: [],
      warnings: [],
      bladeWidth: 1,
      cutPreference: "l",
      cutType: "guillotine",
      stockType: "sheet",
      stackHeight: 0,
      guillotineOptions: {
        headCuts: !1,
        strategy: "efficiency",
        maxPhase: 3
      },
      efficiencyOptions: {
        primaryCompression: "w"
      },
      options: {
        stockSelection: "efficiency",
        minSpacing: 0,
        stackingMode: "identical",
        minSpacingDimension: {
          dimension: 0,
          minSpacing: 0
        }
      }
    }), at = oe(null), I = oe(!1), T = oe(""), x = oe("");
    He(A, (b) => {
      b?.length > 0 ? (I.value = !0, T.value = "Validation Errors", x.value = b.map((v) => `${v.message} (${v.category.join(", ")})`).join(`

`)) : T.value === "Validation Errors" && (I.value = !1, T.value = "", x.value = "");
    }, { deep: !0 });
    const Z = xt({
      banding: null,
      finish: null,
      info: null,
      planing: null
      // imageUpload: null
    }), J = oe([]), me = oe([]), Ie = oe([]), De = xt({
      numberFormat: "decimal",
      decimalPlaces: 2,
      fractionRoundTo: 0,
      faces: { enabled: !0 },
      holes: { enabled: !1 },
      corners: {
        enabled: !1,
        types: []
      },
      banding: { enabled: !1 },
      hingeHoles: { enabled: !1 },
      shelfHoles: { enabled: !1 }
    }), Me = xt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2"]
    }), ze = xt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["a", "b"]
    }), Qe = xt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]
      // All sides and faces by default
    }), Fa = oe(null), Ti = xt({}), Oi = xt({}), Li = xt({}), ys = oe(null), bl = te(() => ({
      banding: Ti.rules,
      finish: Oi.rules,
      planing: Li.rules
    })), $a = te(() => Ic({
      stockType: Ce.stockType,
      materials: J.value,
      minDimension: de.minDimension,
      ...de.fieldOrder && de.fieldOrder.length > 0 ? { allowedFieldIds: de.fieldOrder } : {}
    })), Sn = oe([]), xn = oe({
      material: !1,
      l: !0,
      w: !0,
      t: !1,
      q: !0,
      name: !0,
      banding: !1,
      orientationLock: !0,
      finish: !1,
      planing: !1,
      machining: !1,
      imageUpload: !1
    }), Ji = te(() => {
      const b = $a.value.fields.value, v = $a.value.allFieldsMap.value, O = b.filter((qe) => xn.value[qe.name] ?? !0), y = ["banding", "finish", "planing", "machining", "imageUpload"], q = [];
      for (const qe of y) {
        const ot = xn.value[qe], dt = O.find((Ye) => Ye.name === qe);
        if (ot && !dt) {
          const Ye = v.get(qe);
          Ye && q.push(Ye);
        }
      }
      const ke = Sn.value || [];
      return [...O, ...q, ...ke];
    }), Xi = te(() => Ji.value.length + 2), vl = te(() => {
      const b = {
        id: 34,
        del: 32
      }, v = {
        id: `${b.id}px`,
        del: `${b.del}px`
      }, O = [];
      for (const y of Ji.value) {
        if (y.name === "trim") continue;
        const q = y.w ?? "minmax(20px, 1fr)";
        O.push(q);
      }
      return O.unshift(v.id), O.push(v.del), O.join(" ");
    }), bs = te(() => ({
      "--btn-color": de.colors.buttonText,
      "--btn-bg": de.colors.button,
      "--btn-hover-bg": wl(de.colors.button, -8),
      "--btn-focus-ring": de.colors.button
    }));
    function wl(b, v) {
      const O = b.replace("#", ""), y = parseInt(O, 16), q = Math.round(2.55 * v), ke = (y >> 16) + q, $e = (y >> 8 & 255) + q, qe = (y & 255) + q;
      return `#${(16777216 + (ke < 255 ? ke < 1 ? 0 : ke : 255) * 65536 + ($e < 255 ? $e < 1 ? 0 : $e : 255) * 256 + (qe < 255 ? qe < 1 ? 0 : qe : 255)).toString(16).slice(1)}`;
    }
    const Sl = {
      position: "absolute",
      display: "inline-block",
      left: "auto",
      right: "0px",
      top: "0px",
      bottom: "auto",
      margin: "0px",
      padding: "0px",
      visibility: "visible",
      opacity: "1",
      height: "auto",
      width: "auto",
      color: "#4e4e4e",
      border: "none",
      fontSize: "12px"
    }, Da = te(() => we.value ? !(we.value && we.value?.api?.whiteLabel) : !0), vs = {
      stockSelection: (b) => {
        const v = ["efficiency", "smallest"];
        b && !v.includes(b) ? console.warn(`${b} is not a valid stockSelection, expected ${v.join("|")}`) : Ce.options.stockSelection = b;
      },
      minSpacing: (b) => {
        Ce.options.minSpacing = b;
      },
      maxParts: (b) => {
        de.maxParts = b;
      },
      locale: (b) => {
        ge.value = b.replace(/_/g, "-");
      },
      enable: (b) => {
        const v = {
          banding: "banding",
          name: "partName",
          finish: "finish",
          planing: "planing",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload"
        };
        for (const O in pe.enable)
          O in b && (de.enable[O] = b[O]);
        for (const O in v) {
          const y = v[O], q = hi(b, [y]), ke = pe.enable[y];
          Vt(O, q !== void 0 ? q : ke);
        }
        Ft.value = hi(b, ["csvImport"]) ?? pe.enable.csvImport;
      },
      colors: (b) => {
        for (const v in pe.colors)
          v in b && (de.colors[v] = b[v]);
      },
      orientationModel: (b) => {
        if (![0, 1, 2].includes(b)) {
          de.orientationModel = 0;
          return;
        }
        de.orientationModel = b;
      },
      numberFormat: (b) => {
        if (!["decimal", "fraction"].includes(b)) {
          de.numberFormat = "decimal";
          return;
        }
        de.numberFormat = b;
      },
      customFields: (b) => {
        if (!Array.isArray(b) || !b?.length)
          return;
        const v = [];
        b.forEach((O) => {
          const y = Ea(O.id), q = {
            ...O,
            custom: !0,
            id: y,
            name: y,
            // CheckoutField expects 'name' property
            propertyPath: "customData." + y,
            fieldMap: "customData." + y
          };
          O.type === "checkbox" && (q.w = "32px"), O.type === "integer" || O.type === "float" ? q.output = O.output ?? "number" : O.type === "select" && (q.output = O.output ?? "string", q.options = O.options), v.push(q);
        }), Sn.value = v, mt(() => {
          for (const O of o.inputShapes.value)
            O.customData = b.reduce((y, q) => {
              const ke = Ea(q.id);
              return y[ke] = O.customData[ke] || q.default || "", y;
            }, {});
        });
      }
    }, xl = (b) => {
      N.debug && U("log", ["checkout init...", b]), b?.stockFilterEnabled && (localStorage.removeItem("inputs/inputStock"), o.inputStock.value = []), b?.parts && (b.parts = G(b.parts));
      let v;
      try {
        v = mm(b);
      } catch (y) {
        U("error", y.message || "Invalid init data");
        return;
      }
      if (v.saw) {
        const y = v.saw;
        if (y.stockType !== void 0 && (Hs.includes(y.stockType) || console.warn(`${y.stockType} is not a valid stockType, expected ${Hs.join("|")}`), Ce.stockType = y.stockType, y.stockType === "linear" && (Ce.cutType = null, Ce.cutPreference = null)), y.bladeWidth !== void 0) {
          const q = typeof y.bladeWidth == "string" ? parseFloat(y.bladeWidth) : y.bladeWidth;
          q >= 0 ? Ce.bladeWidth = q : console.warn(`SmartCut - you provided an incorrect blade width of: ${y.bladeWidth}`);
        }
        if (y.cutType !== void 0 && (Ce.cutType = y.cutType), y.cutPreference !== void 0 && (Un.includes(y.cutPreference) ? Ce.cutPreference = y.cutPreference : console.warn(`SmartCut - cut preference ${y.cutPreference || "N/A"} is not valid. Expected: ${Un.join("|")}`)), y.guillotineOptions !== void 0 && typeof y.guillotineOptions == "object" && Object.assign(Ce.guillotineOptions, y.guillotineOptions), y.stackHeight !== void 0) {
          const q = typeof y.stackHeight == "string" ? parseFloat(y.stackHeight) : y.stackHeight;
          Ce.stackHeight = q;
        }
      }
      if (v?.options) {
        const y = v.options;
        Xo(y), v.saw ? (["stockType", "bladeWidth"].forEach(($e) => {
          $e in v.saw || U("error", `${$e} is a required saw property`);
        }), (v.saw.cutType === "guillotine" || v.saw.cutType === "beam") && !("cutPreference" in v.saw) && U("error", "cutPreference is a required saw property for guillotine and beam cut types")) : U("error", "saw configuration is required");
        const q = ["enable", "colors"];
        for (const ke in y)
          q.includes(ke) || (de[ke] = y[ke]), ke in vs && vs[ke](y[ke]);
      }
      if (v.options.colors && "colors" in vs && vs.colors(v.options.colors), v.banding) {
        const y = v.banding;
        "locations" in y && y.locations && (Ti.locations = y.locations), "groups" in y && y.groups && (Ti.groups = y.groups), "rules" in y && y.rules && (Ti.rules = y.rules);
      }
      if (v.finish) {
        const y = v.finish;
        "locations" in y && y.locations && (Oi.locations = y.locations), "groups" in y && y.groups && (Oi.groups = y.groups), "rules" in y && y.rules && (Oi.rules = y.rules);
      }
      if (v.planing) {
        const y = v.planing;
        "locations" in y && y.locations && (Li.locations = y.locations), "groups" in y && y.groups && (Li.groups = y.groups), "rules" in y && y.rules && (Li.rules = y.rules);
      }
      v.partRules && (ys.value = v.partRules), Tn("banding", v), Tn("finish", v), Tn("planing", v), Pl(v), Ra(v), ie.value = !0, N.debug && U("log", ["init complete"]);
      const O = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(O), mt(() => {
        Da.value && !El() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, Vt = (b, v = !1) => {
      xn.value[b] = v;
    }, Ea = (b) => b ? Du(b)?.toLowerCase() : null, kl = (b, v, O) => {
      try {
        if (!b || !v) return;
        const y = O !== null && O !== "" && O !== void 0 && O !== 0;
        if (v === "material" && (!O || O === "")) {
          const $e = { material: null, t: null };
          V(b.autoId, $e) || (Mi(b, "material", null), Mi(b, "t", null), b.isNew || b.validate());
          return;
        }
        if (b.isNew)
          if (y)
            b.isNew = !1;
          else {
            Mi(b, v, O);
            return;
          }
        let q;
        if (v.includes(".")) {
          const $e = v.split("."), qe = $e[0], ot = $e.slice(1).join("."), Ye = { ...b[qe] || {} };
          Mi(Ye, ot, O), q = { [qe]: Ye };
        } else
          q = { [v]: O };
        V(b.autoId, q) || (Mi(b, v, O), b.validate()), ["l", "w", "t"].includes(v) && mt(() => {
          _a(b);
        });
      } catch (y) {
        console.error("[CHECKOUT] Error updating field:", y);
      }
    }, Il = () => {
    }, _a = (b) => {
      if (ys.value && b && !b.isNew && !(!b.l && !b.w))
        try {
          const v = sm(b, ys.value);
          if (b.issues && (b.issues = b.issues.filter((O) => !(O.category?.includes("part") && O.identifier === "part-validation-rules"))), !v.valid && v.violations.length > 0)
            for (const O of v.violations) {
              const y = am(O);
              new ue({
                item: b,
                type: "error",
                category: ["part"],
                message: y,
                shouldTranslate: !1,
                issues: b.issues || []
              });
            }
        } catch (v) {
          console.error("[CHECKOUT] Error validating part:", v);
        }
    }, Pl = (b) => {
      if (hi(de, ["enable", "machining"]) && b?.machining) {
        for (const v in De)
          b.machining[v] && (De[v] = b.machining[v]);
        if (["holes", "hingeHoles"].forEach((v) => {
          b?.machining?.[v] && (De[v].enabled = b?.machining?.[v].enabled);
        }), b?.machining?.corners?.types?.length && (De.corners.enabled = !0, De.corners.types = b.machining.corners.types), b.banding && b?.options?.enable?.banding) {
          if (!Me) return;
          De.banding = {
            enabled: !0
          }, Me.options.length && (De.banding.options = Me.options), Me.labels.length && (De.banding.labels = Me.labels), tr(Me.pricing) && (De.banding.pricing = Me.pricing);
        }
      }
    }, Cl = (b = null) => {
      at.value = b, b && Te(b) && b.l && b.w ? ne.value = !0 : alert(H("machining.enter_dimensions_first"));
    }, Al = () => {
      ne.value = !1;
    }, Ma = (b = []) => {
      if (me.value = [], Ie.value = [], Vt("t", !1), !!b.length) {
        for (const v of b)
          if (v?.t)
            if (typeof v.t == "string" && v.t.includes(",")) {
              const O = ja(v.t, !0);
              O.length === 2 ? (Ol(O), Vt("t", !0), v.t = me.value[0]) : U("error", "bonded thickness found which does not have 2 options");
            } else me.value.includes(v.t) || me.value.push(v.t);
        me.value.length > 1 && Vt("t", !0);
      }
    }, Tl = (b) => {
      if (!b) return { thicknesses: [], bondedThicknesses: [] };
      if (!J.value?.length)
        return {
          thicknesses: me.value,
          bondedThicknesses: []
        };
      if (!b.material)
        return {
          thicknesses: me.value,
          bondedThicknesses: []
        };
      const v = J.value.find((q) => q.name === b.material);
      if (!v)
        return {
          thicknesses: me.value,
          bondedThicknesses: []
        };
      const O = [...v.thicknesses], y = [];
      for (let q = 0; q < O.length; q++) {
        const ke = O[q], $e = ja(ke), qe = [];
        if ($e.length) {
          for (const ot of $e)
            O[q] = ot, qe.push(q);
          q++;
        }
        qe.length && y.push(qe);
      }
      return {
        thicknesses: O,
        bondedThicknesses: y
      };
    }, Ra = (b) => {
      if (b?.stock?.some((v) => v?.material)) {
        J.value = [], me.value = [], Ie.value = [];
        const v = /* @__PURE__ */ new Map();
        for (const y of b.stock) {
          if (!y.material) continue;
          const q = y.material.toUpperCase();
          v.has(q) || v.set(q, /* @__PURE__ */ new Set()), y.t != null && v.get(q)?.add(Q({ v: y.t }));
        }
        J.value = Array.from(v.entries()).map(([y, q]) => ({
          name: y,
          thicknesses: Array.from(q).sort(($e, qe) => $e - qe)
        }));
        const O = /* @__PURE__ */ new Set();
        for (const y of J.value)
          for (const q of y.thicknesses)
            O.add(Q({ v: q }));
        me.value = Array.from(O).sort((y, q) => y - q), J.value.length > 1 ? Vt("material", !0) : Vt("material", !1), me.value.length > 1 ? Vt("t", !0) : Vt("t", !1);
      } else
        Ma(b.stock);
    }, Ol = (b, v = null) => {
      if (!Array.isArray(b)) {
        U("error", "addBondedThicknesses expects an array");
        return;
      }
      const O = [];
      for (let y of b)
        de.numberFormat === "decimal" && (y = parseFloat(y)), me.value.push(y), v && v.thicknesses.push(y), O.push(me.value.length - 1);
      Ie.value.push(O);
    }, Ll = (b) => {
      const { thicknesses: v } = Tl(b);
      return v?.length ? v.map((O) => ({
        label: O?.toString(),
        value: O
      })) : [];
    }, ja = (b, v = !1) => {
      if (typeof b == "string" && b.includes(",")) {
        const O = b.split(",");
        return v ? O.map((y) => Q({ v: y })) : O;
      }
      return [];
    }, Fl = () => {
      vt.value ? Dl() : $l();
    }, $l = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), vt.value = !0;
    }, Dl = () => {
      document.exitFullscreen && document.exitFullscreen(), vt.value = !1;
    }, El = () => {
      if (we.value?.api?.whiteLabel) return !0;
      let b = !0;
      const v = document.querySelector("#smartcut-checkout a#credit");
      if (!v) return b = !1;
      const O = window.getComputedStyle(v);
      return O.display === "none" || O.display === "hidden" || O.opacity === "0" || O.color === "transparent" || O.position !== "absolute" || O.color !== "#4e4e4e" && O.color !== "rgb(78, 78, 78)" ? b = !1 : (Ge.value = b, b);
    }, kn = te(() => typeof N.findExtrasPrice == "function"), Ba = (b, v) => {
      let O, y;
      switch (v) {
        case "banding":
          O = Me.options, y = Me.labels;
          break;
        case "finish":
          O = ze.options, y = ze.labels;
          break;
        case "planing":
          O = Qe.options, y = Qe.labels;
          break;
        default:
          O = [], y = [];
      }
      wi(b, v, O, y);
    }, Va = (b) => {
      const v = Object.keys(b);
      return Math.max(...v.map((y) => y.split("|").length));
    }, Qi = (b, v, O) => {
      if (!b)
        return [];
      if (O > 0 && !v[O - 1])
        return [];
      const y = /* @__PURE__ */ new Set();
      for (const ke of Object.keys(b)) {
        const $e = ke.split("|");
        if ($e.length > O) {
          let qe = !0;
          for (let ot = 0; ot < O; ot++) {
            const dt = v[ot], Ye = $e[ot];
            if (dt && dt !== Ye) {
              qe = !1;
              break;
            }
          }
          qe && y.add($e[O]);
        }
      }
      return Array.from(y);
    }, In = (b, v, O, y) => {
      let q, ke;
      switch (v) {
        case "banding":
          q = Me.options, ke = Me.labels;
          break;
        case "finish":
          q = ze.options, ke = ze.labels;
          break;
        case "planing":
          q = Qe.options, ke = Qe.labels;
          break;
        default:
          q = [], ke = [];
      }
      return Rn(b, v, O, y, q, ke);
    }, _l = (b, v, O) => {
      let y, q;
      switch (v) {
        case "banding":
          y = Me.options, q = Me.labels;
          break;
        case "finish":
          y = ze.options, q = ze.labels;
          break;
        case "planing":
          y = Qe.options, q = Qe.labels;
          break;
        default:
          y = [], q = [];
      }
      return Rn(b, v, O, N.findExtrasPrice, y, q);
    }, Ml = oe({}), Pn = (b = 1) => {
      for (let v = b; v--; ) {
        let O = {
          l: null,
          w: Ce.stockType === "linear" ? o.inputStock.value[0]?.w : null,
          t: me.value.length ? me.value[0] : null,
          q: 1,
          material: J.value?.length === 1 ? J.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (o.inputShapes.value.length > 0) {
          const q = o.inputShapes.value[o.inputShapes.value.length - 1];
          O.material = q.material, O.t = q.t;
        }
        const y = g(O);
        y && (Me?.labels?.length && wi(y, "banding", Me.options, Me.labels), ze?.labels?.length && wi(y, "finish", ze.options, ze.labels), Qe?.labels?.length && wi(y, "planing", Qe.options, Qe.labels));
      }
    }, Cn = (b = {}) => {
      const v = {
        q: 1,
        // Always set quantity to 1
        ...b
      }, O = g(v);
      return O && (Ce.stockType === "linear" && o.inputStock.value[0]?.w && (O.w = o.inputStock.value[0].w), me.value.length && (O.t = me.value[0]), J.value?.length === 1 && (O.material = J.value[0].name), Me?.labels?.length && wi(O, "banding", Me.options, Me.labels), ze?.labels?.length && wi(O, "finish", ze.options, ze.labels), Qe?.labels?.length && wi(O, "planing", Qe.options, Qe.labels)), O;
    }, Rl = (b) => {
      if (me.value.length)
        for (const v of b) {
          if (!v.t) return;
          const O = me.value.findIndex(
            (ke) => Q({ v: ke }) === v.t
          ), y = Ie.value.find((ke) => ke.includes(O));
          if (!y) return;
          const q = Math.min(
            ...y.map((ke) => me.value[ke])
          );
          Q({ v: v.t }) > q && (v.q = Number(v.q) * (Q({ v: v.t }) / q), v.notes = `Bond to form ${v.t.valueOf()}`, v.t = q);
        }
    }, Na = () => {
      K(), W(null), C.stockList.value = [], C.shapeList.value = [], C.cutList.value = [];
    }, An = () => {
      o.inputShapes.value.length = 0, N.inputType !== "formula" && mt(() => Pn());
    }, jl = async () => {
      if (U("calculating"), je.value) return !1;
      je.value = !0, Lt.value = !1;
      const b = await Ug({
        t: H,
        partTrim: de.partTrim,
        maxShapes: de.maxParts || 1e3,
        maxStock: 1 / 0,
        // CheckoutCalculator doesn't have stock limits
        inputSaw: o.inputSaw.value,
        // Extras validation data
        bandingPricing: Me.pricing,
        finishPricing: ze.pricing,
        planingPricing: Qe.pricing,
        findExtrasPrice: N.findExtrasPrice,
        extrasValidationRules: bl.value,
        onLimit: () => {
          R({
            type: "error",
            message: H("limits.max_parts") + " " + de.maxParts
          });
        }
      });
      if (ys.value)
        for (const q of o.inputShapes.value)
          _a(q);
      const v = o.inputShapes.value.flatMap((q) => q.issues || []).filter((q) => q.type === "error" && q.category?.includes("part"));
      if (v.length > 0) {
        R({
          type: "error",
          message: H("errors.validation.inputs_issue", { 0: "part" }),
          additional: v.map((q) => q.message)
        }), U("validation-error"), je.value = !1;
        return;
      }
      if (!b.valid) {
        U("validation-error"), je.value = !1;
        return;
      }
      Na();
      const O = o.inputShapes.value.map((q) => E(q)).filter(Boolean);
      if (O.length !== o.inputShapes.value.length)
        return R({
          type: "error",
          message: "Some parts have validation errors and cannot be processed",
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), je.value = !1, !1;
      Rl(O), N.debug && console.log(
        "SmartCut - calculating",
        "stock",
        o.inputStock.value.map((q) => ({ l: q.l, w: q.w })),
        "parts",
        O.map((q) => ({ l: q.l, w: q.w }))
      );
      const y = {
        inputSaw: o.inputSaw.value.toData(),
        inputShapes: O.map((q) => q.toData()),
        inputStock: o.inputStock.value.map((q) => q.toData()),
        inputUserGroups: [],
        enableEvo: !0,
        useInventory: !1,
        domain: Le,
        extrasOptions: D(),
        source: "checkout",
        sourceVersion: "4.0.54"
      };
      await fe.connect(), fe.emit("calculate", y);
    }, Tn = (b, v) => {
      if (Vt(b, !1), !b || !v || !v?.[b] || !hi(de, ["enable", b]))
        return;
      const O = [b, "pricing"];
      if (!er(v, O)) {
        U("error", `${O.join(".")} not found in sent data`);
        return;
      }
      const y = hi(v, O);
      if (typeof y != "object") {
        U("error", `${O.join(".")} data must be an object`);
        return;
      }
      if (!tr(y)) {
        U("error", `if provided, ${O.join(".")} data must contain some values`);
        return;
      }
      const q = Object.keys(y), ke = Object.values(y);
      if (!q.length) {
        U("error", `no ${O.join(".")} pricing found`);
        return;
      }
      const $e = /,/;
      for (const Ye of q)
        if ($e.test(Ye)) {
          U("error", `${O} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (ke.some((Ye) => isNaN(Ye))) {
        U("error", `${O} values must be a number`);
        return;
      }
      const qe = Va(y), ot = [b, "labels"];
      let dt = [];
      if (er(v, ot))
        dt = hi(v, ot);
      else {
        U("error", `${ot.join(".")} not found`);
        return;
      }
      if (!dt) {
        U("error", `${ot.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(dt)) {
        U("error", `${ot.join(".")} data must be an array`);
        return;
      }
      if (!dt?.length) {
        U("error", `if provided, ${ot.join(".")} data must contain values`);
        return;
      }
      if (dt.length !== qe) {
        U("error", `${ot.join(".")} length (${dt.length}) must match the number of levels in ${O.join(".")} (${qe})`);
        return;
      }
      switch (b) {
        case "banding": {
          Me.labels = dt, Me.pricing = y;
          const Ye = On(y);
          Me.options = Ye, S("banding", Ye, dt, y);
          break;
        }
        case "finish": {
          ze.labels = dt, ze.pricing = y;
          const Ye = On(y);
          ze.options = Ye, S("finish", Ye, dt, y);
          break;
        }
        case "planing": {
          Qe.labels = dt, Qe.pricing = y;
          const Ye = On(y);
          Qe.options = Ye, S("planing", Ye, dt, y);
          break;
        }
      }
      if (Fa.value = D(), Vt(b, !0), !!o.inputShapes.value?.length)
        for (const Ye of o.inputShapes.value)
          Ba(Ye, b);
    }, On = (b) => {
      const v = [], O = Object.keys(b), y = Va(b);
      for (let q = y; q--; ) v.push(/* @__PURE__ */ new Set());
      for (const q of O)
        q.split("|").forEach(($e, qe) => v[qe].add($e));
      for (let q = 0; q < y; q++)
        v[q] = Array.from(v[q]);
      return v;
    }, ws = (b, v) => {
      if (!v) return;
      b !== "info" && Object.keys(Z).forEach((y) => {
        y !== b && y !== "info" && (Z[y] = null);
      });
      const O = o.inputShapes.value.indexOf(v);
      Z[b] === O ? (at.value = null, Z[b] = null, Ml.value[b] = void 0) : (at.value = v, Z[b] = O);
    }, Ga = (b) => {
      if (U("log", ["load event received"]), !ie.value) {
        U("log", ["load event received"]);
        return;
      }
      Bl(b.detail);
    }, Bl = (b) => {
      if (U("log", ["loading parts..."]), !b || !b?.inputs?.parts?.length) {
        U("log", ["could not find any parts to import"]);
        return;
      }
      o.inputShapes.value.length = 0;
      let v = 0;
      for (const y of b.inputs.parts) {
        const q = Cn(y);
        q ? q.issues?.length && U("log", [`SmartCut - issues found while importing part at index ${v}`, q.issues]) : U("log", [`SmartCut - error loading part at index ${v}`, y]), v++;
      }
      o.inputShapes.value.flatMap((y) => go(y.issues)).length && R({
        type: "error",
        message: H("errors.general.issues_found")
      }), U("log", [`loaded ${o.inputShapes.value.length} parts`]);
    }, Vl = (b) => {
      o.inputShapes.value.length = 0, mt(() => {
        for (const v of b)
          v.t = o.inputStock.value?.[0]?.t ?? null, Cn(v);
      });
    };
    He(() => N.inputStock, (b) => {
      if (Na(), Array.isArray(b) || console.warn("SmartCut - stock must be passed as an array"), !!b?.length) {
        o.inputStock.value.length = 0, J.value.length || Ma(b.map((v) => v.toData()));
        for (const v of b)
          k({
            ...v.toData(),
            autoAdd: !0
          }) || (console.error("Failed to add stock item:", v), R({
            type: "error",
            message: "Failed to add some stock items due to validation errors"
          }));
        if (o.inputStock.value.length) {
          o.inputShapes.value.length ? mt(() => {
            o.inputShapes.value.forEach((O) => {
              const y = O.material ? J.value.find((q) => q.name === O.material) : null;
              if (y)
                y.thicknesses.includes(Q({ v: O.t })) || (O.t = Q({ v: y.thicknesses[0] }));
              else if (J.value?.length === 1) {
                O.material = J.value[0].name;
                const q = J.value[0];
                q.thicknesses.includes(Q({ v: O.t })) || (O.t = Q({ v: q.thicknesses[0] }));
              } else if (J.value?.length > 1 && O.t) {
                const q = J.value.find((ke) => ke.thicknesses.some(($e) => Q({ v: $e }) === Q({ v: O.t })));
                q ? O.material = q.name : (O.material = J.value[0].name, O.t = Q({ v: J.value[0].thicknesses[0] }));
              } else J.value?.length > 1 ? (O.material = J.value[0].name, O.t = Q({ v: J.value[0].thicknesses[0] })) : !O.t && o.inputStock.value[0]?.t && (O.t = Q({ v: o.inputStock.value[0].t }));
            });
          }) : N.inputType !== "formula" && mt(() => Pn());
          const v = f(o.inputSaw.value);
          v.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(v))), R({
            type: "error",
            message: H("errors.validation.stock_issue"),
            additional: v.map((O) => O.message)
          }));
        }
      }
    }, { immediate: !0 }), He(o.inputShapes, (b) => {
      U("inputs-changed"), b.forEach((v) => {
        Ce.stockType === "linear" && (v.w = o.inputShapes.value[0]?.w);
        const O = J.value.find((y) => y.name === v.material);
        O && (O.thicknesses.includes(Q({ v: v.t })) || (v.t = Q({ v: O.thicknesses[0] })));
      });
    }, { deep: !0 }), He(() => de.numberFormat, (b) => {
      u(b);
    }), He(() => Ce, (b) => {
      o.inputSaw.value = new ti(b);
    }, { deep: !0 }), Zt(async () => {
      if (St.value) return;
      St.value = !0;
      const b = new URL(window.location.href), v = b.searchParams.toString(), O = b.origin + b.pathname + (v ? `?${v}` : "");
      nt.value !== O && An(), nt.value = O, ge.value = de.locale, await fe.connect(), fe.emit("getUserFromDomain"), window.addEventListener("smartcut/load", Ga), N.debug && U("log", [
        "ready...",
        "fields:",
        Ji.value.map((y) => y.name)
      ]);
    });
    const Nl = () => {
      fe && fe.disconnect();
    };
    return hs(() => {
      window.removeEventListener("smartcut/load", Ga), Nl(), delete window.smartcutCheckout;
    }), e({
      init: xl,
      clear: An,
      getAvailablePricingOptions: Qi,
      getExtrasPrice: _l,
      formatPrice: N.formatPrice,
      findExtrasPrice: N.findExtrasPrice,
      inputShapes: o.inputShapes,
      initExtrasOptions: Ba,
      createAndAddInputShape: Cn,
      initMaterialsThicknesses: Ra
    }), (b, v) => {
      const O = bi("FontAwesomeIcon");
      return w(), L("div", qm, [
        ie.value ? se("", !0) : (w(), Fe(Or, {
          key: 0,
          size: 50,
          "show-number": !1
        })),
        at.value?.machining && ne.value ? (w(), Fe(P(n), {
          key: 1,
          "input-shape": at.value,
          "onUpdate:inputShape": v[0] || (v[0] = (y) => at.value = y),
          translate: !0,
          options: De,
          "find-extras-price": t.findExtrasPrice,
          "get-extras-price": P(Rn),
          "get-available-pricing-options": Qi,
          "format-price": t.formatPrice,
          onClose: Al
        }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price"])) : se("", !0),
        ie.value ? (w(), L("section", {
          key: 2,
          id: "smartcut-checkout",
          class: _e(["smartcut-content", { fullscreen: vt.value }])
        }, [
          Zi.value && !t.readonly ? (w(), L("button", {
            key: 0,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            style: lt(bs.value),
            onClick: v[1] || (v[1] = (y) => Fl())
          }, [
            Ve(O, { icon: ["fass", "expand"] }),
            os(" " + ae(P(H)("general.full_screen")), 1)
          ], 4)) : se("", !0),
          Da.value ? (w(), L("a", {
            key: 1,
            id: "credit",
            style: Sl,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, ae(P(Ou)(P(H)("general.powered_by"))), 1)) : se("", !0),
          $("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: lt({ "grid-template-columns": vl.value })
          }, [
            P(o).inputShapes.value.length ? (w(), L("div", zm, [
              v[6] || (v[6] = $("div", { class: "cell id" }, null, -1)),
              (w(!0), L(Re, null, Ke(Ji.value, (y) => (w(), L("div", {
                key: y.name,
                class: _e(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(y.name) || y.type === "boolean" }])
              }, ae(P(H)(y.label)), 3))), 128)),
              P(ve) === "development" && qn ? (w(), L("div", Wm, " Info ")) : se("", !0),
              v[7] || (v[7] = $("div", { class: "cell del" }, null, -1))
            ])) : se("", !0),
            (w(!0), L(Re, null, Ke(B.value, (y, q) => (w(), L("div", {
              key: q,
              class: "row inputs"
            }, [
              $("div", Hm, [
                $("div", {
                  class: "id",
                  style: lt({
                    background: de.colors.partA,
                    color: de.colors.text
                  })
                }, ae(q + 1), 5)
              ]),
              (w(!0), L(Re, null, Ke(Ji.value, (ke) => (w(), L("div", {
                key: ke.name,
                class: "cell"
              }, [
                y ? (w(), Fe(Gm, {
                  key: 0,
                  field: ke,
                  item: y,
                  index: q,
                  "type-prefix": "part",
                  readonly: t.readonly,
                  "number-format": de.numberFormat,
                  "orientation-model": de.orientationModel,
                  "stock-grain": P(c)(y),
                  "material-options": J.value?.map(($e) => ({ label: $e.name, value: $e.name })) || [],
                  "thickness-options": ke.name === "t" ? Ll(y) : [],
                  "banding-enabled": Z.banding === q ? y : null,
                  onUpdate: ($e) => kl(y, ke.propertyPath || ke.fieldMap || ke.name, $e),
                  onValidation: v[2] || (v[2] = ($e, qe) => Il()),
                  onOpenBanding: ($e) => ws("banding", y),
                  onOpenMachining: ($e) => Cl(y),
                  onOpenFinish: ($e) => ws("finish", y),
                  onOpenPlaning: ($e) => ws("planing", y)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "orientation-model", "stock-grain", "material-options", "thickness-options", "banding-enabled", "onUpdate", "onOpenBanding", "onOpenMachining", "onOpenFinish", "onOpenPlaning"])) : se("", !0)
              ]))), 128)),
              P(ve) === "development" && qn ? (w(), L("div", Um, [
                $("button", {
                  class: _e(["c-btn", { selected: Z.info === q }]),
                  style: lt(bs.value),
                  type: "button",
                  onClick: (ke) => ws("info", y)
                }, " i ", 14, Ym)
              ])) : se("", !0),
              $("div", Km, [
                $("button", {
                  disabled: P(o).inputShapes.value.length <= 1,
                  type: "button",
                  class: "delete",
                  "aria-label": `${P(H)("actions.remove")} ${P(Lu)(P(H)("woodwork.part"))}`,
                  onClick: (ke) => P(h)(y.autoId)
                }, [
                  Ve(O, { icon: ["fass", "trash"] })
                ], 8, Zm)
              ]),
              Ve(P(s), {
                item: y,
                "num-columns": Xi.value
              }, null, 8, ["item", "num-columns"]),
              Z.banding === q && Me.options.length > 0 && kn.value ? (w(), Fe(Bs, {
                key: 1,
                shape: y,
                "shape-index": q,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": Me.keys,
                "all-options": Me.options,
                pricing: Me.pricing,
                labels: Me.labels,
                locations: Ti.locations,
                "location-groups": Ti.groups,
                "user-friendly-field-map": P(Ut),
                "part-columns": Xi.value,
                "format-price": t.formatPrice,
                "find-extras-price": N.findExtrasPrice,
                "get-price": In,
                "orientation-model": de.orientationModel,
                "get-available-pricing-options": Qi,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : se("", !0),
              Z.finish === q && ze.options.length > 0 && kn.value ? (w(), Fe(Bs, {
                key: 2,
                shape: y,
                "shape-index": q,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": ze.keys,
                "all-options": ze.options,
                pricing: ze.pricing,
                labels: ze.labels,
                locations: Oi.locations,
                "location-groups": Oi.groups,
                "user-friendly-field-map": P(Ut),
                "part-columns": Xi.value,
                "format-price": t.formatPrice,
                "find-extras-price": N.findExtrasPrice,
                "get-price": In,
                "orientation-model": de.orientationModel,
                "get-available-pricing-options": Qi,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : se("", !0),
              Z.planing === q && Qe.options.length > 0 && kn.value && !0 ? (w(), Fe(Bs, {
                key: 3,
                shape: y,
                "shape-index": q,
                "extra-type": "planing",
                "extra-label": "planing",
                "extra-keys": Qe.keys,
                "all-options": Qe.options,
                pricing: Qe.pricing,
                labels: Qe.labels,
                locations: Li.locations,
                "location-groups": Li.groups,
                "user-friendly-field-map": P(Ut),
                "part-columns": Xi.value,
                "format-price": t.formatPrice,
                "find-extras-price": N.findExtrasPrice,
                "get-price": In,
                "orientation-model": de.orientationModel,
                "get-available-pricing-options": Qi,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : se("", !0),
              Z.info === q ? (w(), L("div", {
                key: 4,
                id: "shape-info",
                style: lt({ "grid-column-end": "span " + Xi.value })
              }, [
                $("div", null, ae(y?.banding), 1),
                $("div", null, ae(Fa.value?.banding?.options || "No options"), 1)
              ], 4)) : se("", !0)
            ]))), 128))
          ], 4),
          $("div", Jm, [
            t.readonly ? se("", !0) : (w(), L("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${P(H)("actions.add")} ${P(H)("woodwork.part")}`,
              style: lt(bs.value),
              onClick: v[3] || (v[3] = (y) => Pn())
            }, [
              Ve(O, { icon: ["fass", "plus-large"] }),
              os(" " + ae(`${P(H)("actions.add")} ${P(H)("woodwork.part")}`), 1)
            ], 12, Xm)),
            $("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": P(H)("actions.calculate"),
              style: lt(bs.value),
              disabled: !P(o).inputStock.value?.length || je.value,
              onClick: v[4] || (v[4] = (y) => jl())
            }, [
              Ve(O, { icon: ["fass", "calculator"] }),
              os(ae(P(H)("actions.calculate")), 1)
            ], 12, Qm),
            t.readonly ? se("", !0) : (w(), L("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": P(H)("actions.clear"),
              onClick: v[5] || (v[5] = (y) => An())
            }, [
              Ve(O, { icon: ["fass", "trash"] })
            ], 8, ey)),
            $("div", ty, ae(P(l)) + ae(de?.maxParts ? "/" + de.maxParts : ""), 1)
          ]),
          Ft.value && !t.readonly ? (w(), Fe(P(a), {
            key: 2,
            ref: "import",
            "number-format": de.numberFormat,
            "custom-fields": Sn.value,
            "banding-options": Me.options,
            "banding-labels": Me.labels,
            "finish-options": ze.options,
            "finish-labels": ze.labels,
            onImport: Vl
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : se("", !0),
          I.value ? (w(), L("div", iy, [
            T.value ? (w(), L("div", sy, ae(T.value), 1)) : se("", !0),
            $("pre", ny, ae(x.value), 1)
          ])) : se("", !0),
          (de.enable.diagram ? je.value && !P(ee).complete : je.value || P(ee).complete) ? (w(), L("div", ay, [
            Ve(Or, {
              size: 50,
              number: P(ee).shapeCount,
              complete: P(ee).complete,
              "show-number": de.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : se("", !0),
          fs($("div", ry, [
            P(m)?.saw?.stockType !== "roll" ? (w(), L("div", oy, ae(P(m)?.stack?.number ? P(m).stack.number : 1), 1)) : se("", !0),
            Ve(ug, {
              "element-id": "diagram",
              "number-format": de.numberFormat,
              "decimal-places": de.decimalPlaces,
              colors: de.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [sn, de.enable.diagram && P(ee).complete]
          ]),
          de.enable.diagram && P(Y).length > 1 && P(ee).complete ? (w(), Fe(Ap, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-auto-id": P(z),
            "stock-list": P(Y),
            onShowStock: P(W)
          }, null, 8, ["active-stock-auto-id", "stock-list", "onShowStock"])) : se("", !0)
        ], 2)) : se("", !0),
        P(ve) === "development" && qn ? (w(), L("div", ly, [
          Ve(P(r), {
            data: [P(o)?.inputShapes?.value?.[0]?.extras?.banding?.sides],
            paths: ["inputShapes"]
          }, null, 8, ["data"]),
          Ve(P(r), {
            data: [P(o)?.inputShapes?.value?.[0]?.extras?.finish?.faces],
            paths: ["inputShapes"]
          }, null, 8, ["data"]),
          v[8] || (v[8] = $("div", null, "Result data", -1)),
          Ve(P(r), {
            data: [Xe.value?.parts?.[0]],
            paths: ["checkoutResult.parts"]
          }, null, 8, ["data"]),
          Ve(P(r), {
            data: [Xe.value?.metadata],
            paths: ["checkoutResult.metadata"]
          }, null, 8, ["data"])
        ])) : se("", !0)
      ]);
    };
  }
}), Yw = /* @__PURE__ */ Ot(cy, [["__scopeId", "data-v-f01e445c"]]), gl = Pe(["select", "multiselect", "range", "boolean", "search"]), ml = Pe(["asc", "desc"]), yl = Pe(["grid", "list"]), uy = j({
  // Visual (Note: color, weight, imageUrl, tags, available are now in InputStock base schema)
  name: p().optional().describe("User-friendly display name"),
  description: p().optional().describe("Detailed description"),
  // Categorization
  supplier: p().optional().describe("Supplier name"),
  category: p().optional().describe("Stock category"),
  // UI metadata
  leadTime: d().int().optional().describe("Lead time in days"),
  minQuantity: d().int().positive().optional().describe("Minimum order quantity")
});
Yt.merge(uy).describe("Stock option with filtering and display metadata");
const dy = j({
  field: p().describe("Property name to filter on"),
  type: gl,
  label: p().describe("Display label"),
  custom: _().default(!1).describe("Whether this is a custom property"),
  // Range filter options
  min: d().optional().describe("Minimum value for range filter"),
  max: d().optional().describe("Maximum value for range filter"),
  step: d().optional().describe("Step size for range filter"),
  // Select filter options
  options: re(j({
    label: p(),
    value: be()
  })).optional().describe("Predefined options for select filters"),
  // Display options
  visible: _().default(!0).describe("Whether filter is visible"),
  collapsible: _().default(!0).describe("Whether filter panel is collapsible"),
  order: d().int().optional().describe("Display order")
}), fy = j({
  field: p().describe("Field to sort by"),
  order: ml,
  label: p().optional().describe("Display label for sort option")
}), hy = j({
  // Filter configuration
  availableFilters: re(dy).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: re(p()).default(["cost", "material", "t"]).describe("Sortable fields"),
  defaultSort: fy.default({
    field: "cost",
    order: "asc"
  }).describe("Default sort configuration"),
  // Display configuration
  displayMode: yl.default("grid").describe("Default display mode"),
  itemsPerPage: d().int().positive().default(20).describe("Items per page for pagination"),
  // Feature toggles
  enableSearch: _().default(!0).describe("Enable search functionality"),
  // Selection behavior
  allowMultipleSelection: _().default(!0).describe("Allow multiple stock selection"),
  maxSelection: d().int().positive().optional().describe("Maximum number of stock items to select")
}), py = j({
  field: p(),
  value: be(),
  type: gl
});
j({
  // Active filters
  activeFilters: re(py).default([]).describe("Currently active filters"),
  // Search
  searchQuery: p().default("").describe("Current search query"),
  // Sort
  sortBy: p().default("cost").describe("Current sort field"),
  sortOrder: ml.default("asc").describe("Current sort order"),
  // Display
  displayMode: yl.default("grid").describe("Current display mode"),
  currentPage: d().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: re(p()).default([]).describe("IDs of selected stock items")
});
function gy() {
  return hy.parse({});
}
const my = /* @__PURE__ */ We({
  __name: "InputIssues",
  props: {
    item: {
      type: Object,
      required: !0
    },
    numColumns: {
      type: Number,
      required: !0
    }
  },
  setup(t) {
    const e = t;
    return (i, s) => (w(), L(Re, null, [
      e.item.issues?.filter((n) => n.type === "error")?.length ? (w(), L("div", {
        key: 0,
        class: "group issues",
        style: lt({
          "grid-column-end": "span " + e.numColumns
        })
      }, [
        $("pre", null, ae(e.item.issues.filter((n) => n.type === "error").flatMap((n) => P(Hi)(n.message)).join(`
`)), 1)
      ], 4)) : se("", !0),
      e.item.issues?.filter((n) => n.type === "warning")?.length ? (w(), L("div", {
        key: 1,
        class: "group warnings",
        style: lt({
          "grid-column-end": "span " + e.numColumns
        })
      }, [
        $("pre", null, ae(e.item.issues.filter((n) => n.type === "warning").flatMap((n) => P(Hi)(n.message)).join(`
`)), 1)
      ], 4)) : se("", !0)
    ], 64));
  }
}), yy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: my }, Symbol.toStringTag, { value: "Module" })), gt = {
  precisionFixed: Dc,
  format: $c,
  select: ft,
  selectAll: Br,
  scaleLinear: Et,
  scaleSequential: ls,
  axisTop: Rr,
  axisBottom: qs,
  axisRight: jr,
  axisLeft: zs,
  symbol: Fc,
  path: Lc,
  arc: Oc,
  symbolTriangle: Tc,
  symbolSquare: Ac
};
class by {
  HTMLElement;
  HTMLElementWidth;
  el;
  numberFormat;
  decimalPlaces;
  vueComponent;
  shape;
  h;
  w;
  shapeL;
  shapeW;
  // Padding values - responsive based on size
  edgePadding = 15;
  // For left and bottom when axes shown
  axisPadding = 30;
  // For top and right when axes shown
  minSizeForAxes = 400;
  // Minimum width/height to show axes
  xScale = gt.scaleLinear();
  yScale = gt.scaleLinear();
  yScaleFlipped = gt.scaleLinear();
  measurementScale = gt.scaleLinear();
  xAxis;
  yAxis;
  formatDp;
  svgCanvas;
  currentSide = 0;
  bandingStrokeWidth = 4;
  shapeGroup;
  bandingGroup;
  holeGroup;
  hingeHoleGroup;
  cornerGroup;
  legendGroup;
  pointGroup;
  loaded = !1;
  constructor({
    HTMLElement: e,
    vueComponent: i = null,
    shape: s,
    numberFormat: n = "decimal",
    decimalPlaces: a = 2
  }) {
    this.HTMLElement = e, this.numberFormat = n, this.decimalPlaces = a, this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.vueComponent = i, this.shape = s, this.w = 0, this.h = 0;
  }
  init() {
    if (!this.loaded) {
      if (!this.HTMLElement || !this.shape || !this.shape.l || !this.shape.w) return !1;
      if (this.el = gt.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = gt.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.longSide, this.shapeW = this.shape.shortSide, !this.svgCanvas)
        if (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null) {
          const e = this.el.append("svg").attr("class", "vis").attr("width", "100%").attr("height", "100%");
          if (e === null) return;
          this.svgCanvas = e;
        } else
          this.svgCanvas = gt.select(this.svgCanvas);
      this.loaded = !0;
    }
  }
  create() {
    if (!this.shape) return !1;
    const e = this.shouldShowAxes(), i = e ? this.edgePadding : 0, s = e ? this.edgePadding : 0, n = e ? this.axisPadding : 0, a = e ? this.axisPadding : 0;
    if (!this.shape.l || !this.shape.w || !this.w || !this.h || this.w - (i + n) < 0 || this.h - (a + s) < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createBanding(), e && (this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${a})`).attr("class", "axis x"), this.xAxis.call(
      gt.axisTop(this.xScale).ticks(10).tickSize(-this.h + (a + s))
    ), this.svgCanvas.selectAll(".axis.x .tick").each(function(r, o, l) {
      (o === 0 || o === l.length - 1) && gt.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - n}, 0)`).attr("class", "axis y"), this.yAxis.call(
      gt.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (i + n))
    ), this.svgCanvas.selectAll(".axis.y .tick").each(function(r, o, l) {
      (o === 0 || o === l.length - 1) && gt.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px"), console.log("Axes created:", { xAxis: !!this.xAxis, yAxis: !!this.yAxis })), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(e, i) {
    this.pointGroup.append("circle").attr("cx", this.xScale(e)).attr("cy", this.getYScale()(i)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    const e = this.shouldShowAxes(), i = e ? this.edgePadding : 0, s = e ? this.edgePadding : 0, n = e ? this.axisPadding : 0, a = e ? this.axisPadding : 0;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", i).attr("y", a).attr("width", this.w - (i + n)).attr("height", this.h - (a + s)), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", i).attr("y", a).attr("width", this.w - (i + n)).attr("height", this.h - (a + s)).style("fill", "url(#stripes)");
    const r = gt.path(), o = [], l = [];
    [0, 1, 2, 3].forEach((u) => {
      const f = this.shape.machining.getCorner(u);
      f && f.type ? (o.push(f.size ? Q({ v: f.size ?? 0, o: this }) : 0), l.push(f.type)) : (o.push(0), l.push(null));
    });
    const c = (u, f, h, g, k) => {
      l[u] === "radius" ? r.arcTo(
        this.xScale(f),
        this.getYScale()(h),
        this.xScale(g),
        this.getYScale()(k),
        this.measurementScale(o[u])
      ) : l[u] === "bevel" ? r.lineTo(this.xScale(g), this.getYScale()(k)) : (r.lineTo(this.xScale(f), this.getYScale()(h)), r.lineTo(this.xScale(g), this.getYScale()(k)));
    };
    r.moveTo(this.xScale(0), this.getYScale()(o[0])), c(0, 0, 0, o[0], 0), (l[0] === "bevel" || l[1] === "bevel") && r.lineTo(this.xScale(this.shapeL - o[1]), this.getYScale()(0)), c(1, this.shapeL, 0, this.shapeL, o[1]), (l[1] === "bevel" || l[2] === "bevel") && r.lineTo(
      this.xScale(this.shapeL),
      this.getYScale()(this.shapeW - o[2])
    ), c(
      2,
      this.shapeL,
      this.shapeW,
      this.shapeL - o[2],
      this.shapeW
    ), (l[2] === "bevel" || l[3] === "bevel") && r.lineTo(this.xScale(o[3]), this.getYScale()(this.shapeW)), c(3, 0, this.shapeW, 0, this.shapeW - o[3]), r.closePath(), this.shapeGroup.append("path").attr("id", "shape").attr("d", r.toString());
  }
  createLegend() {
    this.legendGroup.selectAll("*").remove();
    let e;
    e = this.legendGroup.append("text").text("L1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(0)), e.attr(
      "dy",
      e.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), e = this.legendGroup.append("text").text("L2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(this.shapeW)), e.attr(
      "dy",
      e.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    ), this.legendGroup.append("text").text("W1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("y", this.yScale(this.shapeW / 2)).attr("dx", "5px"), this.legendGroup.append("text").text("W2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.yScale(this.shapeW / 2)), e = this.legendGroup.append("text").text("A").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(0)), e.attr(
      "dy",
      e.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), e = this.legendGroup.append("text").text("B").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(0)), e.attr(
      "dy",
      e.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), e = this.legendGroup.append("text").text("C").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(this.shapeW)), e.attr(
      "dy",
      e.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    ), e = this.legendGroup.append("text").text("D").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(this.shapeW)), e.attr(
      "dy",
      e.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    );
  }
  createHoles() {
    this.svgCanvas.selectAll(".hole-group > *").remove(), this.holeGroup.selectAll("circle").data(
      this.shape.machining.holes.filter((e) => e.shouldShow(this.shape, this.currentSide))
    ).join("circle").attr("class", "hole").classed("invalid", (e) => e.isValid === !1).classed("partial", (e) => !e.isThroughShape(this.shape)).attr("cx", (e) => this.xScale(e.x)).attr("cy", (e) => {
      const i = e.getYDrawPosition(this.shape, this.currentSide);
      return this.getYScale()(i);
    }).attr("r", (e) => this.measurementScale(e.diameter / 2));
  }
  createHingeHoles() {
    this.svgCanvas.selectAll(".hinge-hole-group > *").remove();
    const i = this.shape.machining.getAllHingeHoles(this.shape).filter((s) => s.shouldShow(this.shape, this.currentSide));
    this.hingeHoleGroup.selectAll("circle").data(i).join("circle").attr("class", "hole").classed("invalid", (s) => s.isValid === !1).classed("partial", (s) => !s.isThroughShape(this.shape)).attr("cx", (s) => this.xScale(s.x)).attr("cy", (s) => this.getYScale()(s.getYDrawPosition(this.shape, this.currentSide))).attr("r", (s) => this.measurementScale(s.diameter / 2));
  }
  createBanding() {
    this.svgCanvas.selectAll(".banding-group > *").remove();
    const e = this.shape.banding;
    if (!e) return;
    const i = -1, s = this.shouldShowAxes(), n = s ? this.edgePadding : 0, a = s ? this.axisPadding : 0, r = [];
    for (const l of ai)
      if (e[l])
        switch (l) {
          case "l1":
            r.push({
              x1: n - i,
              x2: n - i,
              y1: this.getYScale()(this.shape.machining.getCorner(0)?.size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.getCorner(3)?.size ?? 0)
              )
            });
            break;
          case "l2":
            r.push({
              x1: this.w - a + i,
              x2: this.w - a + i,
              y1: this.getYScale()(this.shape.machining.getCorner(1)?.size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.getCorner(2)?.size ?? 0)
              )
            });
            break;
          case "w1":
            r.push({
              x1: n + this.getCornerBandingSize(0),
              x2: this.w - a - this.getCornerBandingSize(1),
              y1: this.getYScale()(0) + (this.currentSide === 0 ? i : -i),
              y2: this.getYScale()(0) + (this.currentSide === 0 ? i : -i)
            });
            break;
          case "w2":
            r.push({
              x1: n + this.getCornerBandingSize(3),
              x2: this.w - a - this.getCornerBandingSize(2),
              y1: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -i : i),
              y2: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -i : i)
            });
            break;
        }
    this.bandingGroup.selectAll("line").data(r).join("line").attr("class", "banding").attr("x1", (l) => l.x1).attr("x2", (l) => l.x2).attr("y1", (l) => l.y1).attr("y2", (l) => l.y2).attr("stroke-width", this.bandingStrokeWidth);
    const o = gt.path();
    [0, 1, 2, 3].forEach((l) => {
      const c = this.shape.machining.getCorner(l);
      if (!c?.type) return;
      let u, f, h;
      switch (l) {
        case 0:
          if (!Ae(e.sides.a) || e.sides.a === !1) return;
          u = {
            x: this.xScale(0) - i,
            y: this.getYScale()(Q({ v: c.size ?? 0, o: this }))
          }, f = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, h = {
            x: this.xScale(Q({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? i : -i)
          };
          break;
        case 1:
          if (!Ae(e.sides.b) || e.sides.b === !1) return;
          u = {
            x: this.xScale(this.shapeL - Q({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? i : -i)
          }, f = {
            x: this.xScale(this.shapeL) - i,
            y: this.getYScale()(0)
          }, h = {
            x: this.xScale(this.shapeL) + i,
            y: this.getYScale()(Q({ v: c.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!Ae(e.sides.c) || e.sides.c === !1) return;
          u = {
            x: this.xScale(this.shapeL) + i,
            y: this.getYScale()(this.shapeW - Q({ v: c.size ?? 0, o: this }))
          }, f = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, h = {
            x: this.xScale(this.shapeL - Q({ v: c.size ?? 0, o: this })) - i,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? i : -i)
          };
          break;
        case 3:
          if (!Ae(e.sides.d) || e.sides.d === !1) return;
          u = {
            x: this.xScale(Q({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? i : -i)
          }, f = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, h = {
            x: this.xScale(0) - i,
            y: this.getYScale()(this.shapeW - Q({ v: c.size ?? 0, o: this })) + i
          };
          break;
        default:
          return;
      }
      if (o.moveTo(u.x, u.y), c.type === "radius")
        switch (o.arcTo(
          f.x,
          f.y,
          h.x,
          h.y,
          this.measurementScale(c.size ?? 0)
        ), l) {
          case 0:
          case 2:
            o.lineTo(h.x + i, h.y);
            break;
          case 1:
          case 3:
            o.lineTo(h.x, h.y - (this.currentSide === 0 ? i : -1));
            break;
        }
      else c.type === "bevel" && o.lineTo(h.x, h.y);
      this.bandingGroup.append("path").attr("class", () => `banding corner ${["a", "b", "c", "d"][l]}`).attr("stroke-width", this.bandingStrokeWidth).attr("d", o.toString());
    });
  }
  getYScale() {
    return this.currentSide === 0 ? this.yScale : this.yScaleFlipped;
  }
  reset() {
    this.svgCanvas && this.svgCanvas.selectAll("*").remove();
  }
  shouldShowAxes() {
    return this.w >= this.minSizeForAxes;
  }
  flip() {
    this.currentSide = this.currentSide === 0 ? 1 : 0;
    const e = this.shouldShowAxes(), i = e ? this.edgePadding : 0, s = e ? this.axisPadding : 0;
    if (e && this.yAxis) {
      const n = this.currentSide === 0 ? this.yScale : this.yScaleFlipped;
      this.yAxis.call(
        gt.axisRight(n).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (i + s))
      ), this.svgCanvas.selectAll(".axis.y .tick").each(function(a, r, o) {
        (r === 0 || r === o.length - 1) && gt.select(this).select("line").style("display", "none");
      }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px");
    }
    this.createShape(), this.createHoles(), this.createHingeHoles(), this.createLegend(), this.createBanding();
  }
  getCornerBandingSize(e) {
    const i = this.shape.machining.getCorner(e);
    return i?.type ? this.measurementScale(i.size ?? 0) : 0;
  }
  updateSize() {
    if (this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.HTMLElementWidth === 0) return;
    this.reset();
    let e = this.shape.shortSide / this.shape.longSide;
    this.w = this.HTMLElementWidth;
    const i = this.shouldShowAxes(), s = i ? this.edgePadding : 0, n = i ? this.edgePadding : 0, a = i ? this.axisPadding : 0, r = i ? this.axisPadding : 0;
    if (this.w - (s + a) < 0) return;
    let o = window.innerHeight - (r + n) - 20;
    o > 600 && (o = 600), this.xScale.domain([0, this.shapeL]).range([s, this.w - a]), e > 0.3 ? this.h = this.xScale(this.shape.shortSide) + r : (e = 0.3, this.h = this.w * e), this.h > o && (this.h = o, this.w = this.h / e, this.xScale.domain([0, this.shapeL]).range([s, this.w - a])), this.yScale.domain([this.shapeW, 0]).range([r, this.h - n]), this.yScaleFlipped.domain([0, this.shapeW]).range([r, this.h - n]), this.measurementScale.domain([0, this.shapeL]).range([0, this.w - (s + a)]), this.HTMLElement.style.height = this.h + "px", this.HTMLElement.style.width = this.w + "px", this.svgCanvas && this.svgCanvas.attr("width", this.w).attr("height", this.h).attr("viewBox", `0 0 ${this.w} ${this.h}`), this.create();
  }
}
const vy = { id: "machining" }, wy = { class: "inputs" }, Sy = {
  key: 0,
  class: "debug"
}, xy = {
  key: 1,
  class: "shape-name"
}, ky = { class: "shape-dimensions" }, Iy = {
  key: 2,
  class: "sides-wrapper"
}, Py = { class: "menu" }, Cy = {
  key: 4,
  class: "button-wrapper"
}, Ay = { class: "grid-table" }, Ty = { class: "row table-heading" }, Oy = {
  key: 0,
  class: "cell id"
}, Ly = {
  key: 0,
  class: "cell"
}, Fy = { class: "id" }, $y = { class: "cell" }, Dy = ["onClick"], Ey = {
  key: 6,
  class: "menu-prompt"
}, _y = !1, My = /* @__PURE__ */ We({
  __name: "Machining",
  props: /* @__PURE__ */ qa({
    env: { default: "production" },
    inputShape: { default: null },
    translate: { type: Boolean, default: !1 },
    findExtrasPrice: { type: Function, default: () => null },
    getExtrasPrice: { type: Function, default: () => null },
    getAvailablePricingOptions: { type: Function, default: () => [] },
    formatPrice: { type: Function, default: () => "" },
    options: { default: () => ({
      numberFormat: "decimal",
      decimalPlaces: 2,
      fractionRoundTo: 0,
      faces: { enabled: !0 },
      holes: {
        enabled: !0,
        defaultDiameter: 10,
        diameters: [],
        minDiameter: 0,
        maxDiameter: 100,
        enableDepth: !0,
        depths: [],
        defaultDepth: 0,
        minDepth: 0,
        maxDepth: 100
      },
      hingeHoles: {
        enabled: !0,
        minimumHoleDistance: 0,
        defaultDistanceFromEdge: 22,
        defaultOuterSpacing: 10,
        defaultHingeLength: 50
      },
      shelfHoles: {
        enabled: !1,
        diameters: [],
        depths: []
      },
      corners: {
        enabled: !0,
        minValue: 0,
        types: ["bevel", "radius"]
      },
      banding: {
        enabled: !1,
        options: [[]],
        labels: [],
        pricing: {},
        enableCorners: !1
      }
    }) }
  }, {
    inputShape: {
      required: !0
    },
    inputShapeModifiers: {}
  }),
  emits: /* @__PURE__ */ qa(["update:shape", "close"], ["update:inputShape"]),
  setup(t, { emit: e }) {
    const i = Ri(() => Promise.resolve().then(() => La)), s = t, n = e, a = "production", r = oe(), o = te(() => pl(X.value)), l = te(() => {
      if (!f.value?.length) return 0;
      if (ie.value === "banding") return 1;
      let fe = Object.values(u.value).filter((pe) => pe.enabled).length;
      return fe += 2, fe;
    }), c = te(() => {
      if (!f.value.length || ie.value === "banding") return;
      const fe = {
        id: "34px",
        del: "30px"
      }, pe = [];
      return f.value.forEach((de) => {
        const Ce = u.value[de];
        Ce.enabled && pe.push(Ce.w ?? "1fr");
      }), pe.unshift(fe.id), pe.push(fe.del), pe.join(" ");
    }), u = te(() => !ie.value || ie.value === "banding" ? null : Lt[ie.value]), f = te(() => !ie.value || ie.value === "banding" ? [] : Object.keys(Lt[ie.value]).filter((fe) => Lt[ie.value][fe].enabled)), h = te(() => ie.value ? D() : []), g = te(() => {
      const fe = X.value?.machining?.corners?.map((pe) => pe?.isPresent?.() ? pe.getCorner() : null)?.filter((pe) => pe) ?? [];
      return [...ai, ...fe];
    }), k = (fe = !0) => {
      fe ? Xe.value = fe : mt(() => Xe.value = !1);
    }, E = () => {
      ee(), K(), R(), B();
    }, V = (fe) => {
      if (ie.value === "corners")
        switch (fe) {
          case 0:
            return "a";
          case 1:
            return "b";
          case 2:
            return "c";
          case 3:
            return "d";
          default:
            return fe;
        }
      return fe + 1;
    }, A = () => ie.value !== "banding", S = (fe, pe = null) => {
      if (!fe?.length) return [];
      let de = "None";
      pe === "depth" && (de = "Through");
      const Ce = [{ label: de, value: null }];
      return fe.forEach((at) => {
        const I = at.toString().charAt(0).toUpperCase() + at.toString().slice(1);
        Ce.push({ label: I, value: at });
      }), Ce;
    }, D = () => {
      if (!ie.value) return [];
      if (ie.value === "banding") return [];
      const fe = X.value.machining[ie.value];
      return Array.isArray(fe) ? fe : [fe];
    };
    let C = null;
    const F = () => {
      if (!X.value || !r.value) {
        console.warn("Missing shape or diagram ref for vis initialization");
        return;
      }
      console.log("Initializing vis with diagramRef:", r.value), C = new by({
        HTMLElement: r.value,
        shape: X.value,
        vueComponent: null
      }), C.init(), C.updateSize(), nt.value = !0;
    }, Y = Jl(() => {
      nt.value && C && C.updateSize();
    }, 10);
    Er(r, () => {
      Y();
    });
    const M = () => {
      St.value = St.value === 0 ? 1 : 0, C.flip();
    }, ce = () => {
      switch (ie.value) {
        case "holes":
          z();
          break;
        case "hingeHoles":
          m();
          break;
        case "corners":
          W();
          break;
      }
    }, z = () => {
      X.value.machining.addHole({
        x: Q({ v: X.value.longSide }) / 2,
        y: Q({ v: X.value.shortSide }) / 2,
        diameter: s.options.holes.defaultDiameter ?? 1,
        depth: s.options.holes.defaultDepth ?? Q({ v: X.value.t }) ?? 0,
        face: St.value
      }), C.createHoles();
    }, m = () => {
      X.value.machining.addHingeHole({
        numHoles: 3,
        position: 0,
        diameter: s.options.holes.defaultDiameter ?? 0,
        depth: s.options.holes.defaultDepth ?? 0,
        side: "x1",
        face: St.value,
        distanceFromEdge: s.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: s.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: s.options.hingeHoles.minimumHoleDistance,
        hingeLength: s.options.hingeHoles.defaultHingeLength
      }), C.createHingeHoles();
    }, W = () => {
      const fe = s.options.corners.types?.[0] || "radius", pe = s.options.corners.minValue || 5;
      for (let de = 0; de < 4; de++)
        X.value.machining.setCorner({
          index: de,
          type: fe,
          size: pe
        });
      C.createCorners();
    }, ee = () => {
      X.value.machining.holes.length = 0;
    }, K = () => {
      X.value.machining.hingeHoles.length = 0;
    }, R = () => {
      X.value.machining.corners.forEach((fe) => {
        fe.size = null, fe.type = null;
      }), X.value.banding.sides.a = !1, X.value.banding.sides.b = !1, X.value.banding.sides.c = !1, X.value.banding.sides.d = !1;
    }, B = () => {
      X.value.banding = {
        sides: {
          a: "",
          b: "",
          c: "",
          d: "",
          y1: "",
          y2: "",
          x1: "",
          x2: ""
        }
      };
    }, G = (fe) => {
      switch (ie.value) {
        case "holes":
          return X.value.machining.holes.splice(fe, 1);
        case "hingeHoles":
          return X.value.machining.hingeHoles.splice(fe, 1);
        case "corners":
          X.value.machining.corners[fe].size = null, X.value.machining.corners[fe].type = null;
          return;
      }
    }, N = () => {
      switch (ie.value) {
        case "holes":
          return ee();
        case "hingeHoles":
          return K();
        case "corners":
          return R();
      }
    }, U = () => {
      if (je.value = [], !!s.options.banding.enabled) {
        k();
        for (const fe in X.value.banding)
          X.value.banding[fe] ? s.options.banding.enableTypes && s.options.banding.types?.length && (X.value.banding[fe] || je.value.push({
            index: fe,
            message: "Please select a type"
          })) : X.value.banding[fe] = "";
        k(!1);
      }
    }, ne = (fe) => {
      const pe = je.value.filter((de) => de.index === fe);
      return pe.length ? pe.map((de) => de.message) : [];
    }, ve = (fe) => {
      const pe = je.value.filter((Ce) => Ce.index === fe && Ce?.fields), de = pe.flatMap((Ce) => Ce.fields);
      return pe.length ? de : [];
    }, ge = (fe, pe) => {
      const de = ve(fe);
      return de?.length ? de.includes(pe) : !1;
    }, we = () => n("close"), Le = (fe) => fe && typeof fe.disabled == "function" ? fe.disabled : !1, X = Zl(t, "inputShape");
    if (!X.value?.machining)
      throw new Error("Machining component requires a shape with machining initialized");
    const Ge = oe(!1), nt = oe(!1), Xe = oe(!1), St = oe(0), ie = oe(null), je = oe([]), Lt = xt({
      holes: {
        x: {
          enabled: !0,
          type: "unitDependent",
          label: H("woodwork.x"),
          required: !0
        },
        y: {
          enabled: !0,
          type: "unitDependent",
          label: H("woodwork.y"),
          required: !0
        },
        diameter: {
          enabled: !0,
          type: s.options.holes.diameters?.length ? "select" : "unitDependent",
          label: H("machining.diameter"),
          output: s.options.holes.diameters?.length ? "float" : void 0,
          options: s.options.holes.diameters?.length ? S(s.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: s.options.holes.enableDepth && typeof X.value.t < "u" && Q({ v: X.value.t }) > 0,
          required: !1,
          type: s.options.holes.depths?.length ? "select" : "unitDependent",
          output: s.options.holes.depths?.length ? "float" : void 0,
          options: s.options.holes.depths?.length ? S(s.options.holes.depths) : void 0
        },
        face: {
          required: !0,
          enabled: s.options.faces.enabled,
          type: "select",
          output: "integer",
          options: [
            {
              label: H("faces.a"),
              value: 0
            },
            {
              label: H("faces.a"),
              value: 1
            }
          ]
        }
      },
      hingeHoles: {
        position: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          min: 0
        },
        hingeLength: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: H("machining.hinge_length"),
          min: 0
        },
        outerSpacing: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: H("machining.outer_spacing"),
          min: 0
        },
        distanceFromEdge: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: H("machining.distance_from_edge"),
          min: 0
        },
        //[] separate option for hinges
        depth: {
          enabled: s.options.holes.enableDepth && typeof X.value.t < "u" && Q({ v: X.value.t }) > 0,
          required: !1,
          type: s.options.holes.depths?.length ? "select" : "unitDependent",
          output: s.options.holes.depths?.length ? "float" : void 0,
          options: s.options.holes.depths?.length ? S(s.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: s.options.holes.diameters?.length ? "select" : "unitDependent",
          label: H("machining.diameter"),
          output: s.options.holes.diameters?.length ? "float" : void 0,
          options: s.options.holes.diameters?.length ? S(s.options.holes.diameters) : void 0
        },
        numHoles: {
          enabled: !0,
          required: !0,
          type: "integer",
          label: H("machining.num_holes"),
          min: 2
        },
        face: {
          enabled: s.options.faces.enabled,
          type: "select",
          required: !0,
          output: "integer",
          options: [
            {
              label: H("faces.a"),
              value: 0
            },
            {
              label: H("faces.b"),
              value: 1
            }
          ]
        },
        edge: {
          enabled: !0,
          required: !0,
          type: "select",
          output: "string",
          options: [
            {
              label: H("sides.w1"),
              value: "x1"
            },
            {
              label: H("sides.w2"),
              value: "x2"
            },
            {
              label: H("sides.l1"),
              value: "y1"
            },
            {
              label: H("sides.l2"),
              value: "y2"
            }
          ]
        }
      },
      shelfHoles: {
        x: {
          enabled: !0,
          required: !0,
          type: "unitDependent"
        },
        y: {
          enabled: !0,
          required: !0,
          type: "unitDependent"
        },
        depth: {
          required: !1,
          enabled: !0,
          type: "unitDependent"
        }
      },
      corners: {
        type: {
          enabled: !0,
          required: !0,
          label: H("machining.type"),
          type: "select",
          output: "string",
          options: S(s.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: H("machining.size"),
          type: "unitDependent",
          min: () => typeof s.options.corners.minValue < "u" ? Q({ v: s.options.corners.minValue, o: s.options }) : 0,
          max: () => typeof s.options.corners.maxValue < "u" ? Q({ v: s.options.corners.maxValue, o: s.options }) : Q({ v: X.value.shortSide, o: s.options }) / 2
        }
      }
    }), Ft = xt({
      holes: {
        diameter: {
          min: s.options.holes.minDiameter,
          max: s.options.holes.maxDiameter
        },
        depth: {
          min: s.options.holes.minDepth,
          max: s.options.holes.maxDepth
        }
      },
      hingeHoles: {
        holeDistance: {
          min: s.options.hingeHoles.minimumHoleDistance
        }
      },
      corners: {
        size: {
          min: s.options.corners.minValue,
          max: s.options.corners.maxValue
        }
      }
    }), Zi = (fe) => {
      fe.target === fe.currentTarget && we();
    }, vt = () => !(!X?.value?.machining || !Ge.value || Xe.value);
    return He(() => X.value?.autoId, () => {
      vt() && F();
    }), He(() => X.value?.id, () => {
      vt() && F();
    }), He(ie, (fe) => {
      if (!vt()) return;
      if (fe === "banding") {
        k(), U(), k(!1);
        return;
      }
      if (!fe) {
        je.value = [];
        return;
      }
      k();
      const pe = X.value.machining.validate(
        X.value,
        fe,
        Ft?.[fe]
      );
      je.value = pe?.map((de, Ce) => ({
        index: Ce,
        message: de.message || "Validation error",
        fields: de.field || []
      })) || [], k(!1);
    }, { deep: !0, immediate: !0 }), He(() => X?.value?.machining?.holes, () => {
      if (!vt()) return;
      k();
      const fe = X.value.machining.validate(
        X.value,
        "holes",
        Ft?.holes
      );
      je.value = fe?.map((pe, de) => ({
        index: de,
        message: pe.message || "Validation error",
        fields: pe.field || []
      })) || [], C.createHoles(), k(!1);
    }, { deep: !0, immediate: !0 }), He(() => X?.value?.machining?.hingeHoles, () => {
      if (!vt()) return;
      k();
      const fe = X.value.machining.validate(
        X.value,
        "hingeHoles",
        Ft?.hingeHoles
      );
      je.value = fe?.map((pe, de) => ({
        index: de,
        message: pe.message || "Validation error",
        fields: pe.field || []
      })) || [], C.createHingeHoles(), k(!1);
    }, { deep: !0, immediate: !0 }), He(() => X?.value?.machining?.corners, () => {
      if (!vt()) return;
      k();
      const fe = X.value.machining.validate(
        X.value,
        "corners",
        Ft?.corners
      );
      je.value = fe?.map((pe, de) => ({
        index: de,
        message: pe.message || "Validation error",
        fields: pe.field || []
      })) || [], X.value.machining.validate(X.value, "holes"), X.value.machining.validate(X.value, "hingeHoles"), C.createShape(), C.createHoles(), C.createHingeHoles();
      for (const pe of X.value.machining.corners)
        X.value.banding && pe?.getCorner && (X.value.banding[pe.getCorner()] = "");
      C.createBanding(), k(!1);
    }, { deep: !0, immediate: !0 }), He(() => X?.value?.banding, () => {
      vt() && (U(), C.createBanding());
    }, { deep: !0, immediate: !0 }), Zt(() => {
      if (document.body.style.overflow = "hidden", !X.value || !X.value.l || !X.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      mt(() => F()), Ge.value = !0;
    }), hs(() => document.body.style.overflow = ""), (fe, pe) => {
      const de = bi("FontAwesomeIcon");
      return w(), Fe(ca, { to: "body" }, [
        $("section", {
          id: "smartcut-machining",
          class: "smartcut-content",
          onClick: Zi
        }, [
          $("div", vy, [
            $("div", wy, [
              P(a) === "development" && _y ? (w(), L("div", Sy, [
                Ve(P(i), {
                  data: [X.value.machining],
                  paths: ["shape.machining"]
                }, null, 8, ["data"])
              ])) : se("", !0),
              $("button", {
                class: "c-btn close",
                type: "button",
                onClick: pe[0] || (pe[0] = (Ce) => we())
              }, "×"),
              X.value?.name ? (w(), L("div", xy, ae(X.value.name), 1)) : se("", !0),
              $("div", ky, ae(X.value?.l) + " x " + ae(X.value?.w) + " " + ae(X.value?.t ? "x " + X.value?.t : null), 1),
              t.options.faces.enabled ? (w(), L("div", Iy, [
                $("div", {
                  ref: "sides",
                  class: _e(["sides", { flipped: St.value === 1 }]),
                  onClick: M
                }, [...pe[6] || (pe[6] = [
                  $("div", { class: "side-a" }, " A ", -1),
                  $("div", { class: "side-b" }, " B ", -1)
                ])], 2),
                pe[7] || (pe[7] = $("div", { class: "text" }, " [Click to flip] ", -1))
              ])) : se("", !0),
              o.value ? (w(), L("button", {
                key: 3,
                class: "c-btn c-btn--delete",
                type: "button",
                onClick: E
              }, " Delete all machining ")) : se("", !0),
              $("div", Py, [
                t.options.holes.enabled ? (w(), L("div", {
                  key: 0,
                  class: _e({ selected: ie.value === "holes" }),
                  onClick: pe[1] || (pe[1] = (Ce) => ie.value = "holes")
                }, " Holes ", 2)) : se("", !0),
                t.options.hingeHoles.enabled ? (w(), L("div", {
                  key: 1,
                  class: _e({ selected: ie.value === "hingeHoles" }),
                  onClick: pe[2] || (pe[2] = (Ce) => ie.value = "hingeHoles")
                }, " Hinge holes ", 2)) : se("", !0),
                t.options.corners.enabled ? (w(), L("div", {
                  key: 2,
                  class: _e({ selected: ie.value === "corners" }),
                  onClick: pe[3] || (pe[3] = (Ce) => ie.value = "corners")
                }, " Corners ", 2)) : se("", !0),
                t.options.banding.enabled ? (w(), L("div", {
                  key: 3,
                  class: _e({ selected: ie.value === "banding" }),
                  onClick: pe[4] || (pe[4] = (Ce) => ie.value = "banding")
                }, " Banding ", 2)) : se("", !0)
              ]),
              ie.value === "holes" || ie.value === "hingeHoles" || ie.value && ie.value !== "banding" ? (w(), L("div", Cy, [
                ie.value === "holes" || ie.value === "hingeHoles" || ie.value === "corners" ? (w(), L("button", {
                  key: 0,
                  class: "c-btn",
                  type: "button",
                  onClick: ce
                }, " Create ")) : se("", !0),
                ie.value && ie.value !== "banding" ? (w(), L("button", {
                  key: 1,
                  class: "c-btn c-btn--delete",
                  type: "button",
                  onClick: N
                }, " Delete all ")) : se("", !0)
              ])) : se("", !0),
              $("div", Ay, [
                ie.value === "banding" && X.value ? (w(), Fe(Bs, {
                  key: 0,
                  shape: X.value,
                  "onUpdate:shape": pe[5] || (pe[5] = (Ce) => X.value = Ce),
                  "extra-type": "banding",
                  "extra-label": "Banding",
                  "extra-keys": g.value,
                  labels: t.options.banding.labels,
                  "all-options": t.options.banding.options,
                  "user-friendly-field-map": P(Ut),
                  "part-columns": 1,
                  "allow-custom-names": !0,
                  "enable-pricing": !0,
                  pricing: t.options.banding.pricing,
                  "get-price": t.getExtrasPrice,
                  "format-price": t.formatPrice,
                  "get-available-pricing-options": t.getAvailablePricingOptions
                }, null, 8, ["shape", "extra-keys", "labels", "all-options", "user-friendly-field-map", "pricing", "get-price", "format-price", "get-available-pricing-options"])) : se("", !0)
              ]),
              ie.value !== "banding" && h.value.length ? (w(), L("div", {
                key: 5,
                class: _e(["grid-table", ie.value]),
                style: lt({ "grid-template-columns": c.value })
              }, [
                $("div", Ty, [
                  A() ? (w(), L("div", Oy)) : se("", !0),
                  (w(!0), L(Re, null, Ke(u.value, (Ce, at) => fs((w(), L("div", {
                    key: at,
                    class: "cell"
                  }, ae(Ce.label ?? at), 1)), [
                    [sn, Ce.enabled]
                  ])), 128)),
                  pe[8] || (pe[8] = $("div", { class: "cell" }, null, -1))
                ]),
                (w(!0), L(Re, null, Ke(h.value, (Ce, at) => (w(), L("div", {
                  key: at,
                  class: "row"
                }, [
                  A() ? (w(), L("div", Ly, [
                    $("div", Fy, ae(V(at)), 1)
                  ])) : se("", !0),
                  (w(!0), L(Re, null, Ke(f.value, (I, T) => (w(), L("div", {
                    key: T,
                    class: "cell"
                  }, [
                    Ve(Pi, {
                      type: u.value[I].type,
                      id: I + "-" + T,
                      warning: ge(at, I),
                      "enable-label": !1,
                      placeholder: u.value[I].label ?? I,
                      disabled: Le(u.value[I]),
                      value: P(hi)(Ce, I),
                      output: u.value[I].output,
                      options: u.value[I].options,
                      "onUpdate:value": (x) => P(Mi)(Ce, I, x)
                    }, null, 8, ["type", "id", "warning", "placeholder", "disabled", "value", "output", "options", "onUpdate:value"])
                  ]))), 128)),
                  $("div", $y, [
                    $("button", {
                      class: "c-btn delete",
                      type: "button",
                      onClick: (I) => G(at)
                    }, [
                      Ve(de, { icon: ["fass", "trash"] })
                    ], 8, Dy)
                  ]),
                  (w(!0), L(Re, null, Ke(ne(at), (I, T) => (w(), L("div", {
                    key: T,
                    class: "group validation",
                    style: lt({ "grid-column-end": "span " + l.value })
                  }, ae(I), 5))), 128))
                ]))), 128))
              ], 6)) : ie.value ? se("", !0) : (w(), L("div", Ey, "Please select from the menu above"))
            ]),
            $("div", {
              id: "machining-diagram",
              class: _e(["diagram", { flipped: St.value === 1 }]),
              ref_key: "diagramRef",
              ref: r
            }, null, 2)
          ])
        ])
      ]);
    };
  }
}), Ry = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: My }, Symbol.toStringTag, { value: "Module" })), jy = {
  name: "Drop",
  props: {
    requiredType: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "Drop file here"
    },
    thinking: {
      type: Boolean,
      default: !1
    },
    maxFiles: {
      type: Number,
      default: 1
    }
  },
  emits: ["drop"],
  data() {
    return {
      dropClass: null,
      events: ["dragenter", "dragover", "dragleave", "dragend", "drop"],
      loadingProgress: 0,
      files: Xl([])
    };
  },
  mounted() {
    this.events.forEach((t) => {
      this.$el.addEventListener(t, this.eventHandler);
    });
  },
  unmounted() {
    this.events.forEach((t) => {
      this.$el.removeEventListener(t, this.eventHandler);
    });
  },
  methods: {
    readFileAsync(t) {
      return new Promise((e, i) => {
        const s = new FileReader();
        s.onloadend = () => {
          e(s.result);
        }, s.onerror = i, s.readAsText(t);
      });
    },
    async onDrop(t) {
      const e = [...t.dataTransfer.files];
      if (this.maxFiles && e.length > this.maxFiles) {
        alert(`You can only drop ${this.maxFiles} file${this.maxFiles > 1 ? "s" : ""} at a time`);
        return;
      }
      this.requiredType && (e.every((i) => i.type === this.requiredType) || alert("We did not detect a valid file type - this might be safe to ignore")), this.files.length = 0;
      for (let i = 0; i < e.length; i++) {
        const s = e[i];
        let n;
        try {
          n = await this.readFileAsync(s);
        } catch (o) {
          console.error(o), alert(`Error reading file ${i + 1}`);
          return;
        }
        const a = {
          data: n,
          name: s.name
        };
        this.files.push(a);
        const r = i / e.length * 100;
        this.loadingProgress = r;
      }
      this.$emit("drop", structuredClone(this.files)), this.files.length = 0;
    },
    eventHandler(t) {
      this.dropClass = t?.type ?? null, t.preventDefault();
    }
  }
};
function By(t, e, i, s, n, a) {
  return w(), L("div", {
    id: "drop",
    class: _e({ thinking: i.thinking, [n.dropClass]: !0 }),
    onDrop: e[0] || (e[0] = _r((...r) => a.onDrop && a.onDrop(...r), ["prevent"]))
  }, [
    $("div", null, ae(i.thinking ? "Loading, please wait..." : i.label), 1)
  ], 34);
}
const Vy = /* @__PURE__ */ Ot(jy, [["render", By]]), Ny = { id: "import-file" }, Gy = /* @__PURE__ */ We({
  __name: "ImportCSV",
  props: {
    numberFormat: {
      type: String,
      default: "decimal"
    },
    bandingOptions: {
      type: [Object, Array],
      default: () => []
    },
    finishOptions: {
      type: [Object, Array],
      default: () => []
    },
    bandingLabels: {
      type: Array,
      default: () => []
    },
    finishLabels: {
      type: Array,
      default: () => []
    },
    customFields: {
      type: Array,
      default: () => []
    }
  },
  emits: ["error", "import"],
  setup(t, { emit: e }) {
    const { addNotice: i } = nn(), s = t, n = e, a = oe([]), r = oe([]), o = oe([]), l = oe([]), c = oe({}), u = oe([]), f = oe(!1), h = oe(null), g = oe(null), k = oe({}), E = [
      "l",
      "w",
      "t",
      "q",
      "orientationLock",
      "name",
      "material",
      "banding",
      "finish",
      "cost"
    ], V = te(() => {
      if (Object.keys(k.value).length === a.value.length)
        return k.value;
      const B = {};
      return a.value.forEach((G, N) => {
        B[N] = {};
        for (const [U, ne] of Object.entries(G)) {
          if (!E.includes(U)) continue;
          const ve = D(U, ne);
          (ve === !0 || ve === !1) && (B[N][U] = ve);
        }
      }), k.value = B, B;
    }), A = te(() => s.customFields.map((B) => B.label)), S = (B, G) => {
      if (!G || Array.isArray(G) && G.length === 0 || typeof G == "object" && Object.keys(G).length === 0)
        return;
      const N = (Array.isArray(G), G), U = (Array.isArray(N), Object.keys(N));
      if (U.length === 0)
        return;
      const ne = [[]];
      U.forEach((ge) => {
        const we = N[ge], Le = [];
        ne.forEach((X) => {
          Array.isArray(we) && we.forEach((Ge) => Le.push([...X, Ge]));
        }), ne.splice(0, ne.length, ...Le);
      });
      const ve = /* @__PURE__ */ new Set();
      ne.forEach((ge) => ve.add(ge.join("|").toLowerCase())), B === "banding" ? h.value = ve : g.value = ve;
    }, D = (B, G) => {
      if (G === "???") return !0;
      function N(ne) {
        return ne ? (ne = ne?.trim()?.toLowerCase(), ne === "l" || ne === "w") : !0;
      }
      const U = {
        banding: (ne) => C(ne, h.value, "banding"),
        finish: (ne) => C(ne, g.value, "finish"),
        orientationLock: N
      };
      return B in U ? U[B](G) : null;
    }, C = (B, G, N) => {
      if (B = W(B), !B) return !0;
      const U = B.split(","), ne = U.every((ve) => {
        if (!ve) return !0;
        const ge = ve.toLowerCase();
        return G.has(ge) ? !0 : Array.from(G).some((Le) => Le.startsWith(ge + "|") || Le === ge);
      });
      if (!ne) {
        const ve = U.filter((ge) => {
          if (!ge) return !1;
          const we = ge.toLowerCase();
          return G.has(we) ? !1 : !Array.from(G).some((Le) => Le.startsWith(we + "|") || Le === we);
        });
        console.log(`Valid ${N} choices...`), console.log(Array.from(G).join()), console.log(`The following ${N} choices are invalid`, ve), i({
          type: "error",
          message: H("errors.validation.options_invalid", [H(`woodwork.${N}`).toLowerCase()]),
          additional: ve
        });
      }
      return ne;
    }, F = (B, G) => {
      const N = V.value[G]?.banding !== !1, U = V.value[G]?.finish !== !1, ne = !!B.banding, ve = !!B.finish;
      if (!ne && !ve)
        return;
      const ge = {};
      if (N && ne) {
        const we = W(B.banding);
        if (we) {
          const Le = we.split(","), X = ["l1", "l2", "w1", "w2"], Ge = {};
          Le.forEach((nt, Xe) => {
            nt && nt.trim() && X[Xe] && (Ge[X[Xe]] = nt.trim());
          }), Object.keys(Ge).length > 0 && (ge.banding = { sides: Ge });
        }
      }
      if (U && ve) {
        const we = W(B.finish);
        if (we) {
          const Le = we.split(","), X = ["a", "b"], Ge = {};
          Le.forEach((nt, Xe) => {
            nt && nt.trim() && X[Xe] && (Ge[X[Xe]] = nt.trim());
          }), Object.keys(Ge).length > 0 && (ge.finish = { faces: Ge });
        }
      }
      return Object.keys(ge).length > 0 ? ge : void 0;
    }, Y = () => a.value.map((B, G) => ({
      l: s.numberFormat === "decimal" ? Es(B.l) : B.l,
      w: s.numberFormat === "decimal" ? Es(B.w) : B.w,
      t: s.numberFormat === "decimal" ? Es(B.t) : B.t,
      q: typeof B.q == "string" ? parseInt(B.q, 10) : B.q,
      orientationLock: B.orientationLock,
      name: B.name,
      material: B.material,
      extras: F(B, G),
      customData: K(B)
    })), M = (B) => {
      const G = B?.[0]?.data;
      G && Ec.parse(G, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (N) => ce(N),
        error: () => n("error")
      });
    }, ce = (B) => {
      r.value = B.data.filter((G) => G.some((N) => N)), o.value = r.value[0], c.value = {};
      for (let G = o.value.length; G--; ) {
        const N = o.value[G], U = z(N);
        U ? c.value[G] = U : (c.value[G] = null, A.value.includes(N) && (c.value[G] = "customData." + s.customFields.find((ne) => ne.label === N).id));
      }
      m(), r.value.shift(), ee(), R();
    }, z = (B) => {
      const G = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", H("l"), H("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", H("w"), H("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", H("t"), H("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", H("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", H("quantity"), H("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", H("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", H("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", H("banding")],
        finish: ["finish", "paint"]
      }, N = Object.entries(G).reduce(
        (U, [ne, ve]) => (ve.some((ge) => B && B.toLowerCase() === ge) && U.push(ne), U),
        []
      );
      return N.length > 1 ? null : N[0];
    }, m = () => {
      f.value = !1, l.value = Object.values(c.value).map((G) => !G || G === "N" ? null : E.includes(G) ? G : (f.value = !0, null));
      const B = l.value.filter((G, N) => l.value.indexOf(G) !== N);
      u.value = B.map((G) => l.value.reduce(
        (N, U, ne) => (U && U === G && N.push(ne), N),
        []
      ));
    }, W = (B) => B && B.replace(/\s*,\s*/g, ","), ee = () => {
      const B = r.value.map((G) => {
        const N = {};
        return o.value.forEach((U, ne) => {
          if (u.value.flat().includes(ne))
            return N[c.value[ne]] = "???";
          N[c.value[ne]] = G[ne];
        }), N;
      });
      a.value = B;
    }, K = (B) => {
      let G = {};
      for (let N in B)
        if (N.startsWith("customData.")) {
          let U = N.slice(11);
          G[U] = B[N];
        }
      return G;
    }, R = () => {
      const B = Y();
      B?.length && n("import", B);
    };
    return Zt(() => {
      S("banding", s.bandingOptions), S("finish", s.finishOptions);
    }), (B, G) => (w(), L("div", Ny, [
      Ve(Vy, {
        label: P(H)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: M
      }, null, 8, ["label"])
    ]));
  }
}), qy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Gy }, Symbol.toStringTag, { value: "Module" })), zy = {
  name: "ObjectViewer",
  props: {
    data: {
      type: Array,
      required: !0
    },
    paths: {
      type: Array,
      required: !0
    },
    root: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      expanded: []
    };
  },
  created() {
    this.data.forEach((t, e) => {
      this.expanded[e] = this.root;
    });
  },
  methods: {
    toggle(t) {
      this.expanded[t] = !this.expanded[t];
    },
    getValueType(t) {
      return t === null ? "null" : Array.isArray(t) ? "array" : typeof t;
    },
    isObjectOrArray(t) {
      return t && typeof t == "object";
    },
    getArrayPaths(t, e) {
      return Array.isArray(t) ? t.map((i, s) => s) : [e];
    },
    formatValue(t) {
      return t === null ? "null" : t === void 0 ? "undefined" : typeof t == "boolean" ? t.toString() : typeof t != "object" ? typeof t == "string" ? `'${t}'` : String(t) : "";
    }
  }
}, Wy = { class: "smartcut-object-viewer" }, Hy = ["onClick"], Uy = { class: "toggle-icon" }, Yy = { class: "path-label" }, Ky = {
  key: 0,
  class: "object-properties"
}, Zy = {
  key: 0,
  class: "key"
}, Jy = {
  key: 1,
  class: "null-value"
}, Xy = { key: 2 };
function Qy(t, e, i, s, n, a) {
  const r = bi("ObjectViewer", !0);
  return w(), L("div", Wy, [
    (w(!0), L(Re, null, Ke(i.data, (o, l) => (w(), L("div", {
      key: l,
      class: "array-item"
    }, [
      $("div", {
        class: "item-header",
        onClick: (c) => a.toggle(l)
      }, [
        $("div", Uy, ae(n.expanded[l] ? "▼" : "▶"), 1),
        $("div", Yy, ae(i.paths[l] || l), 1)
      ], 8, Hy),
      n.expanded[l] ? (w(), L("div", Ky, [
        (w(!0), L(Re, null, Ke(o, (c, u) => (w(), L("div", {
          key: u,
          class: "property-item"
        }, [
          !a.isObjectOrArray(c) || c === null || Array.isArray(c) ? (w(), L("div", Zy, ae(u) + ": ", 1)) : se("", !0),
          $("div", {
            class: _e(["value", a.getValueType(c)])
          }, [
            a.isObjectOrArray(c) && c !== null ? (w(), Fe(r, {
              key: 0,
              data: Array.isArray(c) ? c : [c],
              paths: a.getArrayPaths(c, u),
              root: !1
            }, null, 8, ["data", "paths"])) : c === null ? (w(), L("span", Jy, "null")) : (w(), L("span", Xy, ae(a.formatValue(c)), 1))
          ], 2)
        ]))), 128))
      ])) : se("", !0)
    ]))), 128))
  ]);
}
const eb = /* @__PURE__ */ Ot(zy, [["render", Qy]]), La = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: eb }, Symbol.toStringTag, { value: "Module" })), tb = {
  key: 0,
  class: "debug"
}, ib = { id: "formula-pricing" }, sb = {
  key: 1,
  class: "extras"
}, nb = { class: "heading" }, ab = { id: "hardware-total" }, rb = { class: "heading panels" }, ob = !1, lb = /* @__PURE__ */ We({
  __name: "FormulaPricing",
  props: {
    currency: {
      type: String,
      default: "GBP"
    },
    url: {
      type: String,
      default: ""
    },
    spec: {
      type: Object,
      default: () => ({})
    },
    debug: {
      type: Boolean,
      default: !1
    },
    units: {
      type: String,
      default: "mm"
    },
    formatPrice: {
      type: Function,
      default: (t) => t.toFixed(2)
    }
  },
  emits: ["hardware-result", "panel-result"],
  setup(t, { emit: e }) {
    const i = Ri(() => Promise.resolve().then(() => La)), s = t, n = e, a = Ql("calculator"), r = te(() => a()), o = oe("production");
    let l = null;
    const c = oe(null), u = oe([]), f = oe(!1), h = oe(""), g = te(() => {
      if (!f.value || !u.value.length || u.value.every((M) => M.value === null)) return null;
      const Y = D();
      return mt(() => n("panel-result", Y)), Y;
    }), k = te(() => {
      if (!r.value || !f.value || !u.value.length || u.value.every((M) => M.value === null)) return;
      const Y = C();
      return mt(() => n("hardware-result", Y, E.value)), Y;
    }), E = te(() => {
      if (k.value)
        return Object.values(k.value).reduce((Y, M) => Y + M.totalCost, 0);
    });
    He(g, (Y) => {
      if (!f.value || !Y || !r.value || !r.value?.inputShapes) return;
      const M = (m) => m?.name ? m.name.toLowerCase() : "", ce = new Map(
        r.value.inputShapes.map((m) => [M(m), m])
      ), z = /* @__PURE__ */ new Set();
      for (const m of Object.values(g.value)) {
        if (!m.name) continue;
        const W = M(m), ee = ce.get(W), K = {
          ...m,
          name: m.name.toUpperCase() || ee?.name.toUpperCase(),
          material: m.material?.toUpperCase() || ee?.material?.toUpperCase(),
          bandingOptions: m.bandingOptions || {},
          finishOptions: m.finishOptions || {},
          orientationLock: m.orientationLock || null,
          notes: h.value,
          readonly: !0
        }, R = ee || r.value.createInputShape(K);
        if (ee) {
          Object.assign(ee, K);
          for (const B of ["banding", "finish"])
            r.value.initExtrasOptions(ee, B);
        } else
          r.value.inputShapes.push(R);
        z.add(W);
      }
      r.value.inputShapes = r.value.inputShapes.filter(
        (m) => z.has(M(m))
      );
    }, { immediate: !1 }), Zt(() => F());
    const V = (Y) => {
      s.debug && console.log(Y);
    }, A = () => {
      u.value = Object.values(c.value.inputs).map((Y) => ({
        value: Y.default ?? null
      })), console.log(u.value);
    }, S = (Y, M) => {
      u.value[Y] && (u.value[Y].value = M);
    }, D = () => {
      try {
        return l.calculatePanelsFromFields(u.value);
      } catch (Y) {
        return r.value.inputShapes.length = 0, console.error(Y), null;
      }
    }, C = () => {
      try {
        return l.calculateHardwareFromFields(u.value);
      } catch (Y) {
        return console.error(Y), null;
      }
    }, F = async () => {
      if (!s.url && !s.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      s.url ? (V(`SmartCut - Formula calculator init from url: ${s.url}`), l = new la({ url: s.url }), c.value = await l.getSpec()) : s.spec && (V("SmartCut - Formula calculator init with JSON"), l = new la({ spec: s.spec }), c.value = await l.getSpec()), A(), f.value = !0;
    };
    return (Y, M) => (w(), L(Re, null, [
      o.value === "development" && ob ? (w(), L("div", tb, [
        M[1] || (M[1] = $("div", null, "Developer information", -1)),
        Ve(P(i), {
          data: [g.value],
          paths: ["panelResult"]
        }, null, 8, ["data"])
      ])) : se("", !0),
      $("div", ib, [
        c.value?.projectName ? (w(), Fe(Pi, {
          key: 0,
          id: "project-name",
          type: "string",
          label: "Project name",
          placeholder: "Name",
          value: h.value,
          "onUpdate:value": M[0] || (M[0] = (ce) => h.value = ce)
        }, null, 8, ["value"])) : se("", !0),
        (w(!0), L(Re, null, Ke(c.value?.inputs, (ce, z, m) => (w(), Fe(Pi, {
          id: "formula-field-" + m,
          key: m,
          type: ce.type,
          label: ce.label,
          placeholder: ce.label,
          min: ce.min ?? 0,
          max: ce.max ?? null,
          default: ce.default ?? 0,
          value: u.value[m]?.value,
          "onUpdate:value": (W) => S(m, W)
        }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]))), 128)),
        k.value ? (w(), L("div", sb, [
          $("div", nb, ae(P(H)("Hardware")), 1),
          (w(!0), L(Re, null, Ke(k.value, (ce, z) => (w(), L("div", { key: z }, ae(ce.name) + " x" + ae(ce.q) + " = " + ae(t.formatPrice(ce.totalCost)), 1))), 128)),
          $("div", ab, ae(P(H)("Hardware total")) + " = " + ae(t.formatPrice(E.value)), 1)
        ])) : se("", !0),
        $("div", rb, ae(P(H)("Panels")), 1)
      ])
    ], 64));
  }
}), Kw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: lb }, Symbol.toStringTag, { value: "Module" })), cb = {
  id: "smartcut-notices",
  class: "smartcut-content"
}, ub = { class: "content" }, db = ["onClick"], fb = ["innerHTML"], hb = /* @__PURE__ */ We({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(t) {
    const e = t, { notices: i, dismissNotice: s } = nn(), n = oe({}), a = te(() => e.position.includes("right") ? "notice-right" : "notice-left");
    return (r, o) => {
      const l = bi("FontAwesomeIcon");
      return w(), Fe(ca, { to: "body" }, [
        $("div", cb, [
          Ve(ec, {
            name: a.value,
            "move-class": "notice-move",
            tag: "div",
            class: _e(["notices-container", e.position])
          }, {
            default: Ci(() => [
              (w(!0), L(Re, null, Ke(P(i), (c) => (w(), L("div", {
                key: c.id,
                ref_for: !0,
                ref: (u) => {
                  u && (n.value[c.id] = u);
                },
                class: _e([
                  "notice",
                  `notice--${c.type}`
                ])
              }, [
                $("div", ub, [
                  $("div", {
                    class: "message",
                    onClick: (u) => c.action()
                  }, ae(c.message), 9, db),
                  $("div", {
                    class: "additional-info",
                    innerHTML: c.additional
                  }, null, 8, fb)
                ]),
                c.persistent ? se("", !0) : (w(), Fe(l, {
                  key: 0,
                  icon: ["fass", "trash"],
                  class: "dismiss",
                  onClick: (u) => P(s)(c.id)
                }, null, 8, ["onClick"]))
              ], 2))), 128))
            ]),
            _: 1
          }, 8, ["name", "class"])
        ])
      ]);
    };
  }
}), Zw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: hb }, Symbol.toStringTag, { value: "Module" })), pb = { class: "stock-filter-search" }, gb = { class: "search-input-wrapper" }, mb = ["placeholder"], yb = /* @__PURE__ */ We({
  __name: "StockFilterSearch",
  props: {
    modelValue: {},
    placeholder: { default: "Search materials, colors, tags..." },
    debounce: { default: 300 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = oe(i.modelValue);
    let a = null;
    He(() => i.modelValue, (l) => {
      n.value = l;
    });
    function r() {
      a && clearTimeout(a), a = setTimeout(() => {
        s("update:modelValue", n.value);
      }, i.debounce);
    }
    function o() {
      n.value = "", s("update:modelValue", "");
    }
    return (l, c) => (w(), L("div", pb, [
      $("div", gb, [
        fs($("input", {
          "onUpdate:modelValue": c[0] || (c[0] = (u) => n.value = u),
          type: "text",
          class: "search-input",
          placeholder: t.placeholder,
          onInput: r
        }, null, 40, mb), [
          [tc, n.value]
        ]),
        n.value ? (w(), L("button", {
          key: 0,
          type: "button",
          class: "search-clear",
          onClick: o
        }, " × ")) : se("", !0)
      ])
    ]));
  }
}), bb = /* @__PURE__ */ Ot(yb, [["__scopeId", "data-v-45127fff"]]), vb = { class: "filter-panel-header" }, wb = { class: "filter-panel-title" }, Sb = { class: "filter-panel-content" }, xb = {
  key: 0,
  class: "filter-summary"
}, kb = { class: "filter-summary__count" }, Ib = { class: "filter-groups" }, Pb = { class: "filter-group__header" }, Cb = { class: "filter-group__label" }, Ab = { class: "filter-group__content" }, Tb = {
  key: 0,
  class: "filter-select"
}, Ob = ["checked", "onChange"], Lb = ["value", "onChange"], Fb = { value: "" }, $b = ["value"], Db = {
  key: 1,
  class: "filter-range"
}, Eb = { class: "filter-range__inputs" }, _b = ["value", "min", "max", "step", "onInput"], Mb = ["value", "min", "max", "step", "onInput"], Rb = {
  key: 2,
  class: "filter-boolean"
}, jb = { class: "filter-checkbox" }, Bb = ["checked", "onChange"], Vb = /* @__PURE__ */ We({
  __name: "StockFilterPanel",
  props: {
    filterConfigs: {},
    activeFilters: {},
    getUniqueValues: { type: Function },
    getFieldRange: { type: Function }
  },
  emits: ["apply-filter", "remove-filter", "clear-filters"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = oe(!0), a = oe({}), r = te(() => i.activeFilters.length);
    function o() {
      n.value = !n.value;
    }
    function l(S) {
      return {
        material: H("woodwork.material"),
        t: H("woodwork.thickness") + " (mm)",
        cost: H("stockFilter.price"),
        color: H("fields.color"),
        l: H("woodwork.length"),
        w: H("woodwork.width"),
        weight: H("fields.weight"),
        name: H("fields.name"),
        category: H("general.category"),
        leadTime: H("stockFilter.lead_time")
      }[S.field] || S.label;
    }
    function c(S) {
      return S.options?.length ? S.options : i.getUniqueValues(S.field).map((C) => S.field === "color" && typeof C == "object" && C !== null ? "name" in C && C.name ? {
        label: C.name,
        value: C
      } : {
        label: C.hex || String(C),
        value: C
      } : {
        label: String(C),
        value: C
      });
    }
    function u(S) {
      return i.activeFilters.find((C) => C.field === S)?.value;
    }
    function f(S, D) {
      const C = u(S);
      return Array.isArray(C) ? S === "color" && typeof D == "object" && D !== null && "hex" in D ? C.some(
        (F) => typeof F == "object" && F !== null && "hex" in F && F.hex === D.hex
      ) : C.includes(D) : S === "color" && typeof D == "object" && D !== null && "hex" in D ? typeof C == "object" && C !== null && "hex" in C && C.hex === D.hex : C === D;
    }
    function h(S, D) {
      const F = D.target.value;
      F === "" ? s("remove-filter", S) : s("apply-filter", S, F, "select");
    }
    function g(S, D, C) {
      const F = C.target, Y = u(S) || [], M = Array.isArray(Y) ? [...Y] : [];
      if (F.checked)
        M.includes(D) || M.push(D);
      else {
        const ce = M.indexOf(D);
        ce !== -1 && M.splice(ce, 1);
      }
      M.length === 0 ? s("remove-filter", S) : s("apply-filter", S, M, "multiselect");
    }
    function k(S, D) {
      if (a.value[S]?.[D] !== void 0)
        return a.value[S][D];
      const C = i.activeFilters.find((F) => F.field === S);
      if (C?.value && typeof C.value == "object")
        return C.value[D];
    }
    function E(S, D, C) {
      const F = C.target, Y = F.value ? Number(F.value) : void 0;
      a.value[S] || (a.value[S] = {}), a.value[S][D] = Y;
      const M = a.value[S].min, ce = a.value[S].max;
      M !== void 0 || ce !== void 0 ? s("apply-filter", S, { min: M, max: ce }, "range") : s("remove-filter", S);
    }
    function V(S, D) {
      D.target.checked ? s("apply-filter", S, !0, "boolean") : s("remove-filter", S);
    }
    function A() {
      a.value = {}, s("clear-filters");
    }
    return (S, D) => (w(), L("div", {
      class: _e(["stock-filter-panel", { "stock-filter-panel--open": n.value }])
    }, [
      $("div", vb, [
        $("h3", wb, ae(P(H)("stockFilter.filters")), 1),
        $("button", {
          type: "button",
          class: "filter-panel-toggle",
          onClick: o
        }, ae(n.value ? "−" : "+"), 1)
      ]),
      Ve(ic, { name: "filter-panel-content" }, {
        default: Ci(() => [
          fs($("div", Sb, [
            r.value > 0 ? (w(), L("div", xb, [
              $("span", kb, ae(P(H)("stockFilter.active_filters", [r.value])), 1),
              $("button", {
                type: "button",
                class: "filter-summary__clear",
                onClick: A
              }, ae(P(H)("stockFilter.clear_all")), 1)
            ])) : se("", !0),
            $("div", Ib, [
              (w(!0), L(Re, null, Ke(t.filterConfigs, (C) => (w(), L("div", {
                key: C.field,
                class: "filter-group"
              }, [
                $("div", Pb, [
                  $("label", Cb, ae(l(C)), 1)
                ]),
                $("div", Ab, [
                  C.type === "select" || C.type === "multiselect" ? (w(), L("div", Tb, [
                    C.type === "multiselect" ? (w(!0), L(Re, { key: 0 }, Ke(c(C), (F) => (w(), L("label", {
                      key: F.value,
                      class: "filter-checkbox"
                    }, [
                      $("input", {
                        checked: f(C.field, F.value),
                        type: "checkbox",
                        onChange: (Y) => g(C.field, F.value, Y)
                      }, null, 40, Ob),
                      $("span", null, ae(F.label), 1)
                    ]))), 128)) : (w(), L("select", {
                      key: 1,
                      value: u(C.field),
                      class: "filter-select-input",
                      onChange: (F) => h(C.field, F)
                    }, [
                      $("option", Fb, ae(P(H)("stockFilter.all")), 1),
                      (w(!0), L(Re, null, Ke(c(C), (F) => (w(), L("option", {
                        key: F.value,
                        value: F.value
                      }, ae(F.label), 9, $b))), 128))
                    ], 40, Lb))
                  ])) : C.type === "range" ? (w(), L("div", Db, [
                    $("div", Eb, [
                      $("input", {
                        value: k(C.field, "min"),
                        min: C.min,
                        max: C.max,
                        step: C.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Min",
                        onInput: (F) => E(C.field, "min", F)
                      }, null, 40, _b),
                      D[0] || (D[0] = $("span", { class: "filter-range__separator" }, "–", -1)),
                      $("input", {
                        value: k(C.field, "max"),
                        min: C.min,
                        max: C.max,
                        step: C.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Max",
                        onInput: (F) => E(C.field, "max", F)
                      }, null, 40, Mb)
                    ])
                  ])) : C.type === "boolean" ? (w(), L("div", Rb, [
                    $("label", jb, [
                      $("input", {
                        checked: u(C.field) === !0,
                        type: "checkbox",
                        onChange: (F) => V(C.field, F)
                      }, null, 40, Bb),
                      $("span", null, ae(C.label), 1)
                    ])
                  ])) : se("", !0)
                ])
              ]))), 128))
            ])
          ], 512), [
            [sn, n.value]
          ])
        ]),
        _: 1
      })
    ], 2));
  }
}), Nb = /* @__PURE__ */ Ot(Vb, [["__scopeId", "data-v-096696f3"]]), Gb = { class: "stock-filter-sort" }, qb = { class: "sort-controls" }, zb = { class: "sort-label" }, Wb = ["value"], Hb = ["value"], Ub = ["title"], Yb = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Kb = {
  key: 0,
  d: "M8 3l4 5H4z"
}, Zb = {
  key: 1,
  d: "M8 13l4-5H4z"
}, Jb = /* @__PURE__ */ We({
  __name: "StockFilterSort",
  props: {
    sortBy: {},
    sortOrder: {},
    availableFields: { default: () => ["cost", "material", "t", "l", "w"] }
  },
  emits: ["update:sortBy", "update:sortOrder"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = i.availableFields.map((l) => ({
      value: l,
      label: a(l)
    }));
    function a(l) {
      return {
        cost: H("stockFilter.price"),
        material: H("woodwork.material"),
        t: H("woodwork.thickness"),
        l: H("woodwork.length"),
        w: H("woodwork.width"),
        pricePerKg: H("stockFilter.price") + " per kg",
        pricePerM2: H("stockFilter.price") + " per m²",
        weight: H("fields.weight"),
        name: H("fields.name"),
        leadTime: H("stockFilter.lead_time")
      }[l] || l.charAt(0).toUpperCase() + l.slice(1);
    }
    function r(l) {
      const c = l.target;
      s("update:sortBy", c.value);
    }
    function o() {
      s("update:sortOrder", i.sortOrder === "asc" ? "desc" : "asc");
    }
    return (l, c) => (w(), L("div", Gb, [
      $("div", qb, [
        $("label", zb, ae(P(H)("stockFilter.sort_by")) + ":", 1),
        $("select", {
          value: t.sortBy,
          class: "sort-select",
          onChange: r
        }, [
          (w(!0), L(Re, null, Ke(P(n), (u) => (w(), L("option", {
            key: u.value,
            value: u.value
          }, ae(u.label), 9, Hb))), 128))
        ], 40, Wb),
        $("button", {
          type: "button",
          class: _e(["sort-order-btn", { "sort-order-btn--desc": t.sortOrder === "desc" }]),
          title: t.sortOrder === "asc" ? P(H)("options.by_dimensions") : P(H)("options.by_dimensions"),
          onClick: o
        }, [
          (w(), L("svg", Yb, [
            t.sortOrder === "asc" ? (w(), L("path", Kb)) : (w(), L("path", Zb))
          ]))
        ], 10, Ub)
      ])
    ]));
  }
}), Xb = /* @__PURE__ */ Ot(Jb, [["__scopeId", "data-v-bb32c593"]]), Qb = { class: "stock-filter-results" }, ev = { class: "results-header" }, tv = { class: "results-info" }, iv = { class: "results-count" }, sv = { class: "results-controls" }, nv = { class: "display-mode-toggle" }, av = ["title"], rv = ["title"], ov = {
  key: 0,
  class: "results-loading"
}, lv = {
  key: 1,
  class: "results-empty"
}, cv = { class: "empty-message" }, uv = {
  key: 3,
  class: "results-pagination"
}, dv = ["disabled"], fv = { class: "pagination-pages" }, hv = ["onClick"], pv = ["disabled"], gv = /* @__PURE__ */ We({
  __name: "StockFilterResults",
  props: {
    totalResults: {},
    displayMode: {},
    loading: { type: Boolean, default: !1 },
    hasActiveFilters: { type: Boolean, default: !1 },
    currentPage: { default: 1 },
    totalPages: { default: 1 }
  },
  emits: ["update:displayMode", "clear-filters", "go-to-page"],
  setup(t) {
    const e = t, i = te(() => {
      const s = [], a = Math.floor(2.5);
      let r = Math.max(1, e.currentPage - a), o = Math.min(e.totalPages, r + 5 - 1);
      o === e.totalPages && (r = Math.max(1, o - 5 + 1));
      for (let l = r; l <= o; l++)
        s.push(l);
      return s;
    });
    return (s, n) => (w(), L("div", Qb, [
      $("div", ev, [
        $("div", tv, [
          $("span", iv, ae(t.totalResults) + " " + ae(t.totalResults === 1 ? P(H)("stockFilter.result_one") : P(H)("stockFilter.result_other")), 1)
        ]),
        $("div", sv, [
          $("div", nv, [
            $("button", {
              type: "button",
              class: _e(["display-mode-btn", { "display-mode-btn--active": t.displayMode === "grid" }]),
              title: P(H)("stockFilter.grid_view"),
              onClick: n[0] || (n[0] = (a) => s.$emit("update:displayMode", "grid"))
            }, [...n[5] || (n[5] = [
              Mr('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-702dc044><rect x="1" y="1" width="6" height="6" data-v-702dc044></rect><rect x="9" y="1" width="6" height="6" data-v-702dc044></rect><rect x="1" y="9" width="6" height="6" data-v-702dc044></rect><rect x="9" y="9" width="6" height="6" data-v-702dc044></rect></svg>', 1)
            ])], 10, av),
            $("button", {
              type: "button",
              class: _e(["display-mode-btn", { "display-mode-btn--active": t.displayMode === "list" }]),
              title: P(H)("stockFilter.list_view"),
              onClick: n[1] || (n[1] = (a) => s.$emit("update:displayMode", "list"))
            }, [...n[6] || (n[6] = [
              $("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                $("rect", {
                  x: "1",
                  y: "1",
                  width: "14",
                  height: "2"
                }),
                $("rect", {
                  x: "1",
                  y: "7",
                  width: "14",
                  height: "2"
                }),
                $("rect", {
                  x: "1",
                  y: "13",
                  width: "14",
                  height: "2"
                })
              ], -1)
            ])], 10, rv)
          ])
        ])
      ]),
      t.loading ? (w(), L("div", ov, [
        n[7] || (n[7] = $("div", { class: "spinner" }, null, -1)),
        $("p", null, ae(P(H)("actions.loading")) + "...", 1)
      ])) : t.totalResults === 0 ? (w(), L("div", lv, [
        n[8] || (n[8] = $("svg", {
          width: "64",
          height: "64",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2"
        }, [
          $("circle", {
            cx: "12",
            cy: "12",
            r: "10"
          }),
          $("line", {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "12"
          }),
          $("line", {
            x1: "12",
            y1: "16",
            x2: "12.01",
            y2: "16"
          })
        ], -1)),
        $("p", cv, ae(P(H)("stockFilter.no_results")), 1),
        t.hasActiveFilters ? (w(), L("button", {
          key: 0,
          type: "button",
          class: "clear-filters-btn",
          onClick: n[2] || (n[2] = (a) => s.$emit("clear-filters"))
        }, ae(P(H)("stockFilter.clear_filters")), 1)) : se("", !0)
      ])) : (w(), L("div", {
        key: 2,
        class: _e(["results-grid", { "results-grid--list": t.displayMode === "list" }])
      }, [
        Gs(s.$slots, "default", {}, void 0, !0)
      ], 2)),
      t.totalPages > 1 ? (w(), L("div", uv, [
        $("button", {
          type: "button",
          class: "pagination-btn",
          disabled: t.currentPage === 1,
          onClick: n[3] || (n[3] = (a) => s.$emit("go-to-page", t.currentPage - 1))
        }, ae(P(H)("pagination.previous")), 9, dv),
        $("div", fv, [
          (w(!0), L(Re, null, Ke(i.value, (a) => (w(), L("button", {
            key: a,
            type: "button",
            class: _e(["pagination-page", { "pagination-page--active": a === t.currentPage }]),
            onClick: (r) => s.$emit("go-to-page", a)
          }, ae(a), 11, hv))), 128))
        ]),
        $("button", {
          type: "button",
          class: "pagination-btn",
          disabled: t.currentPage === t.totalPages,
          onClick: n[4] || (n[4] = (a) => s.$emit("go-to-page", t.currentPage + 1))
        }, ae(P(H)("pagination.next")), 9, pv)
      ])) : se("", !0)
    ]));
  }
}), mv = /* @__PURE__ */ Ot(gv, [["__scopeId", "data-v-702dc044"]]), yv = {
  key: 0,
  class: "stock-filter-card__image"
}, bv = ["src", "alt"], vv = { class: "stock-filter-card__content" }, wv = { class: "stock-filter-card__title" }, Sv = { class: "stock-filter-card__specs" }, xv = { class: "spec" }, kv = { class: "spec__label" }, Iv = { class: "spec__value" }, Pv = { class: "spec" }, Cv = { class: "spec__label" }, Av = { class: "spec__value" }, Tv = {
  key: 0,
  class: "spec"
}, Ov = { class: "spec__label" }, Lv = { class: "spec__value spec__value--color" }, Fv = {
  key: 1,
  class: "spec"
}, $v = { class: "spec__label" }, Dv = { class: "spec__value" }, Ev = {
  key: 0,
  class: "stock-filter-card__description"
}, _v = { class: "stock-filter-card__footer" }, Mv = {
  key: 0,
  class: "stock-filter-card__price"
}, Rv = { class: "price__label" }, jv = { class: "price__value" }, Bv = ["disabled"], Vv = {
  key: 1,
  class: "stock-filter-card__lead-time"
}, Nv = /* @__PURE__ */ We({
  __name: "StockFilterCard",
  props: {
    stock: {},
    isSelected: { type: Boolean },
    formatPrice: {},
    buttonColor: { default: "#118ab2" },
    buttonTextColor: { default: "#ffffff" },
    locale: { default: "en-US" }
  },
  emits: ["toggle-selection"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = te(() => i.stock.available !== !1), a = te(() => i.stock.cost ? i.formatPrice(i.stock.cost, i.locale) : "N/A"), r = te(() => i.stock.color ? typeof i.stock.color == "object" && "hex" in i.stock.color ? i.stock.color.hex : typeof i.stock.color == "string" ? i.stock.color : "" : ""), o = te(() => i.stock.color ? typeof i.stock.color == "object" && "name" in i.stock.color ? i.stock.color.name : typeof i.stock.color == "string" ? i.stock.color : "" : ""), l = te(() => ({
      "--btn-color": i.buttonTextColor,
      "--btn-bg": i.buttonColor,
      "--btn-hover-bg": c(i.buttonColor, -8)
    }));
    function c(f, h) {
      const g = f.replace("#", ""), k = parseInt(g, 16), E = Math.round(2.55 * h), V = (k >> 16) + E, A = (k >> 8 & 255) + E, S = (k & 255) + E;
      return `#${(16777216 + (V < 255 ? V < 1 ? 0 : V : 255) * 65536 + (A < 255 ? A < 1 ? 0 : A : 255) * 256 + (S < 255 ? S < 1 ? 0 : S : 255)).toString(16).slice(1)}`;
    }
    function u() {
      s("toggle-selection", i.stock);
    }
    return (f, h) => (w(), L("div", {
      class: _e(["stock-filter-card", {
        "stock-filter-card--selected": t.isSelected,
        "stock-filter-card--unavailable": !n.value
      }])
    }, [
      t.stock.imageUrl ? (w(), L("div", yv, [
        $("img", {
          src: t.stock.imageUrl,
          alt: t.stock.name || t.stock.name || t.stock.material,
          loading: "lazy"
        }, null, 8, bv)
      ])) : se("", !0),
      $("div", vv, [
        $("h3", wv, ae(t.stock.name || t.stock.name || `${t.stock.material} ${t.stock.l}×${t.stock.w}`), 1),
        $("div", Sv, [
          $("div", xv, [
            $("span", kv, ae(P(H)("woodwork.material")) + ":", 1),
            $("span", Iv, ae(t.stock.material || P(H)("general.na")), 1)
          ]),
          $("div", Pv, [
            $("span", Cv, ae(P(H)("stockFilter.dimensions")) + ":", 1),
            $("span", Av, ae(t.stock.l) + " × " + ae(t.stock.w) + ae(t.stock.t ? ` × ${t.stock.t}mm` : ""), 1)
          ]),
          t.stock.color ? (w(), L("div", Tv, [
            $("span", Ov, ae(P(H)("fields.color")) + ":", 1),
            $("span", Lv, [
              $("span", {
                class: "color-swatch",
                style: lt({ backgroundColor: r.value })
              }, null, 4),
              os(" " + ae(o.value), 1)
            ])
          ])) : se("", !0),
          t.stock.weight ? (w(), L("div", Fv, [
            $("span", $v, ae(P(H)("fields.weight")) + ":", 1),
            $("span", Dv, ae(t.stock.weight) + " kg", 1)
          ])) : se("", !0)
        ]),
        t.stock.description ? (w(), L("div", Ev, ae(t.stock.description), 1)) : se("", !0),
        $("div", _v, [
          t.stock.cost ? (w(), L("div", Mv, [
            $("span", Rv, ae(P(H)("stockFilter.price")) + ":", 1),
            $("span", jv, ae(a.value), 1)
          ])) : se("", !0),
          $("button", {
            type: "button",
            class: _e(["stock-filter-card__btn", { "stock-filter-card__btn--selected": t.isSelected }]),
            style: lt(l.value),
            disabled: !n.value,
            onClick: u
          }, ae(t.isSelected ? P(H)("stockFilter.remove") : n.value ? P(H)("stockFilter.select") : P(H)("stockFilter.unavailable")), 15, Bv)
        ]),
        t.stock.leadTime ? (w(), L("div", Vv, ae(P(H)("stockFilter.lead_time_days", [t.stock.leadTime])), 1)) : se("", !0)
      ])
    ], 2));
  }
}), Gv = /* @__PURE__ */ Ot(Nv, [["__scopeId", "data-v-9056cd2a"]]), qv = { class: "stock-filter" }, zv = /* @__PURE__ */ We({
  __name: "StockFilter",
  props: {
    stockOptions: {
      type: Array,
      required: !0
    },
    config: {
      type: Object,
      default: () => gy()
    },
    formatPrice: {
      type: Function,
      required: !0
    },
    numberFormat: {
      type: String,
      default: "decimal"
    },
    colors: {
      type: Object,
      default: () => ({
        button: "#118ab2",
        buttonText: "#ffffff"
      })
    },
    locale: {
      type: String,
      default: "en-US"
    },
    loading: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["stock-added", "stock-removed", "selection-changed", "selection-confirmed"],
  setup(t, { expose: e, emit: i }) {
    const s = t, n = i, a = oe(s.stockOptions), r = oe(s.config), o = oe(s.numberFormat), {
      activeFilters: l,
      searchQuery: c,
      sortBy: u,
      sortOrder: f,
      displayMode: h,
      currentPage: g,
      filteredStock: k,
      paginatedStock: E,
      selectedStock: V,
      totalPages: A,
      applyFilter: S,
      removeFilter: D,
      clearFilters: C,
      goToPage: F,
      toggleStockSelection: Y,
      isStockSelected: M,
      clearSelection: ce,
      createInputStock: z,
      getUniqueValues: m,
      getFieldRange: W
    } = Cc({
      stockOptions: a,
      config: r,
      numberFormat: o
    }), ee = te(() => s.config.availableFilters.filter((B) => {
      const G = m(B.field);
      return G.length > 0 && G.some((N) => N != null);
    }));
    te(() => ({
      "--btn-color": s.colors.buttonText,
      "--btn-bg": s.colors.button,
      "--btn-hover-bg": K(s.colors.button, -8)
    }));
    function K(B, G) {
      const N = B.replace("#", ""), U = parseInt(N, 16), ne = Math.round(2.55 * G), ve = (U >> 16) + ne, ge = (U >> 8 & 255) + ne, we = (U & 255) + ne;
      return `#${(16777216 + (ve < 255 ? ve < 1 ? 0 : ve : 255) * 65536 + (ge < 255 ? ge < 1 ? 0 : ge : 255) * 256 + (we < 255 ? we < 1 ? 0 : we : 255)).toString(16).slice(1)}`;
    }
    function R(B) {
      const G = M(B);
      if (Y(B), G) {
        const N = z(B);
        n("stock-removed", N);
      } else {
        const N = z(B);
        n("stock-added", [N]);
      }
    }
    return e({
      applyFilter: S,
      removeFilter: D,
      clearFilters: C,
      clearSelection: ce,
      selectedStock: V,
      filteredStock: k,
      getUniqueValues: m,
      getFieldRange: W
    }), (B, G) => (w(), L("div", qv, [
      t.config.enableSearch ? (w(), Fe(bb, {
        key: 0,
        modelValue: P(c),
        "onUpdate:modelValue": G[0] || (G[0] = (N) => Ln(c) ? c.value = N : null)
      }, null, 8, ["modelValue"])) : se("", !0),
      ee.value.length > 0 ? (w(), Fe(Nb, {
        key: 1,
        "filter-configs": ee.value,
        "active-filters": P(l),
        "get-unique-values": P(m),
        "get-field-range": P(W),
        onApplyFilter: P(S),
        onRemoveFilter: P(D),
        onClearFilters: P(C)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : se("", !0),
      t.config.sortOptions.length > 0 ? (w(), Fe(Xb, {
        key: 2,
        "sort-by": P(u),
        "onUpdate:sortBy": G[1] || (G[1] = (N) => Ln(u) ? u.value = N : null),
        "sort-order": P(f),
        "onUpdate:sortOrder": G[2] || (G[2] = (N) => Ln(f) ? f.value = N : null),
        "available-fields": t.config.sortOptions
      }, null, 8, ["sort-by", "sort-order", "available-fields"])) : se("", !0),
      Ve(mv, {
        "total-results": P(E).length,
        "display-mode": P(h),
        loading: t.loading,
        "has-active-filters": P(l).length > 0,
        "current-page": P(g),
        "total-pages": P(A),
        "onUpdate:displayMode": G[3] || (G[3] = (N) => h.value = N),
        onClearFilters: P(C),
        onGoToPage: P(F)
      }, {
        default: Ci(() => [
          (w(!0), L(Re, null, Ke(P(E), (N) => (w(), Fe(Gv, {
            key: N.id || `${N.material}-${N.l}-${N.w}-${N.t}`,
            stock: N,
            "is-selected": P(M)(N),
            "format-price": t.formatPrice,
            "button-color": t.colors.button,
            "button-text-color": t.colors.buttonText,
            locale: t.locale,
            onToggleSelection: R
          }, null, 8, ["stock", "is-selected", "format-price", "button-color", "button-text-color", "locale"]))), 128))
        ]),
        _: 1
      }, 8, ["total-results", "display-mode", "loading", "has-active-filters", "current-page", "total-pages", "onClearFilters", "onGoToPage"])
    ]));
  }
}), Wv = /* @__PURE__ */ Ot(zv, [["__scopeId", "data-v-2be207a9"]]), Jw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Wv }, Symbol.toStringTag, { value: "Module" }));
export {
  ue as $,
  yd as A,
  _s as B,
  Q as C,
  on as D,
  ln as E,
  pa as F,
  Oe as G,
  Ne as H,
  As as I,
  nu as J,
  ga as K,
  cn as L,
  ba as M,
  Wd as N,
  Ds as O,
  rn as P,
  Ii as Q,
  ka as R,
  $o as S,
  Yt as T,
  mi as U,
  To as V,
  le as W,
  Pa as X,
  Ht as Y,
  tw as Z,
  Js as _,
  cr as a,
  hh as a$,
  Ow as a0,
  Ze as a1,
  Rt as a2,
  vw as a3,
  hw as a4,
  he as a5,
  lf as a6,
  ni as a7,
  Ni as a8,
  en as a9,
  no as aA,
  ht as aB,
  Ct as aC,
  pf as aD,
  ro as aE,
  Fh as aF,
  Cw as aG,
  xi as aH,
  Pw as aI,
  Ew as aJ,
  gw as aK,
  ch as aL,
  Dw as aM,
  mn as aN,
  Wo as aO,
  Ae as aP,
  Co as aQ,
  lh as aR,
  oo as aS,
  or as aT,
  Fw as aU,
  $w as aV,
  lw as aW,
  gh as aX,
  mh as aY,
  ct as aZ,
  li as a_,
  ow as aa,
  ut as ab,
  yt as ac,
  Je as ad,
  sd as ae,
  Ca as af,
  Lw as ag,
  mw as ah,
  ao as ai,
  $h as aj,
  rh as ak,
  ei as al,
  pw as am,
  Ui as an,
  yw as ao,
  xw as ap,
  kw as aq,
  bw as ar,
  wu as as,
  ku as at,
  Tu as au,
  nw as av,
  fw as aw,
  sw as ax,
  dw as ay,
  gs as az,
  Ko as b,
  Go as b0,
  _w as b1,
  Hn as b2,
  Zs as b3,
  Ta as b4,
  Tw as b5,
  cw as b6,
  it as b7,
  ww as b8,
  Fo as b9,
  er as bA,
  tr as bB,
  gy as bC,
  Uw as bD,
  Mw as bE,
  La as bF,
  Kw as bG,
  Zw as bH,
  Jw as bI,
  Sw as ba,
  Aw as bb,
  Iw as bc,
  ih as bd,
  iw as be,
  pn as bf,
  gn as bg,
  _t as bh,
  zi as bi,
  et as bj,
  Pt as bk,
  Xs as bl,
  Wt as bm,
  ti as bn,
  as as bo,
  Mo as bp,
  Yf as bq,
  pi as br,
  Ot as bs,
  ai as bt,
  bt as bu,
  Jo as bv,
  hi as bw,
  Yw as bx,
  aw as by,
  Du as bz,
  Vw as c,
  jw as d,
  Yo as e,
  Bw as f,
  na as g,
  wi as h,
  Gr as i,
  bn as j,
  Qh as k,
  Gw as l,
  Hw as m,
  Ww as n,
  qw as o,
  ep as p,
  Rw as q,
  zw as r,
  Nw as s,
  H as t,
  rw as u,
  cf as v,
  uw as w,
  Kt as x,
  Hi as y,
  Ee as z
};

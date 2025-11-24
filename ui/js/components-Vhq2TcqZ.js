import { i as jr, B as Ul } from "./vendor-i18next-CacwiV0i.js";
import { r as oe, t as Yl, c as ie, w as He, n as mt, d as Ue, a as F, o as w, F as Be, b as Ke, e as ut, f as je, g as $, h as ys, i as re, v as on, j as Ct, k as Jt, u as Br, l as Kl, m as Zl, p as bs, q as De, s as A, x as se, y as Ws, T as ha, z as Vr, A as Jl, B as Ai, C as Oi, D as Hs, E as di, G as xi, H as We, I as Xl, J as Nr, K as ds, L as Ql, M as ec, N as Bi, O as Ka, P as tc, Q as ic, R as sc, S as nc, U as ac, V as rc, W as oc, X as Dn } from "./vendor-vue-WkZl1F8L.js";
import { _ as Ae, o as B, a as ae, s as p, n as f, b as R, c as we, r as Ie, u as ve, d as li, z as lc, Z as En, e as cc, l as Pe, p as jt, f as Hn, g as uc, h as dc, m as fc, i as Vi, j as hc, k as pc, q as gc, t as mc, v as yc, w as bc, x as vc } from "./vendor-zod-DtqKDYvi.js";
import { g as Ye, h as wc, s as Sc } from "./vendor-lodash-CYGhmG8H.js";
import { u as ss, s as Za, g as xc, v as kc, a as pa, b as Ic, c as Pc, d as Cc, e as Ac, f as ln, h as Tc, i as Oc, j as Lc, k as Fc } from "./composables-CSzEHYQt.js";
import { a as Gr, b as qr, l as Rt, c as Us, d as Ys, s as ht, r as Wt, e as fs, f as zr, g as $c, h as Dc, i as Ec, p as Mc, S as Rc, j as _c, k as jc } from "./vendor-d3-DUCHe88K.js";
import { c as Wr, P as Bc } from "./vendor-tCV_BFOF.js";
import { o as Vc, f as Nc, s as Gc, a as qc } from "./vendor-floating-ui-DZfk4g77.js";
import { F as ps } from "./vendor-fraction-3H9P8ENz.js";
function wi() {
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
function Hr() {
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
function Ur() {
  return typeof globalVariables < "u" || typeof globalThis.__runtimeVersion < "u" || typeof window < "u" && typeof window.__runtimeVersion < "u";
}
const rw = {
  INVALID_TYPE: "errors.validation.zod.invalid_type",
  TOO_SMALL: "errors.validation.zod.too_small",
  TOO_BIG: "errors.validation.zod.too_big",
  INVALID_STRING: "errors.validation.zod.invalid_string",
  INVALID_ENUM: "errors.validation.zod.invalid_enum",
  REQUIRED: "errors.validation.not_set",
  CUSTOM: "errors.validation.zod.custom"
}, Et = {
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
}, Mn = {
  field_required: Et.FIELD_REQUIRED,
  invalid_number: Et.INVALID_NUMBER,
  invalid_decimal: Et.INVALID_DECIMAL,
  invalid_fraction: Et.INVALID_FRACTION,
  invalid_fraction_chars: Et.INVALID_FRACTION_CHARS,
  invalid_fraction_format: Et.INVALID_FRACTION_FORMAT,
  invalid_format: Et.INVALID_FORMAT,
  above_max: Et.ABOVE_MAX,
  below_min: Et.BELOW_MIN,
  zero_not_allowed: Et.ZERO_NOT_ALLOWED,
  division_by_zero: Et.DIVISION_BY_ZERO
};
function zc(t) {
  if (t in Mn) {
    const e = t;
    return wi() && console.warn(`[Validation] Using legacy validation key "${t}". Please migrate to "${Mn[e]}"`), Mn[e];
  }
  return t;
}
const Yr = Ae(["error", "warning"]), Kr = Ae(["saw", "stock", "part", "group", "machining", "extras"]);
B({
  message: p(),
  identifier: p(),
  field: ae(ae(p())),
  index: ae(f()),
  id: p(),
  // Source object's autoId for linking back
  type: Yr,
  category: ae(Kr)
});
const Wc = B({
  item: we().nullable().default(null),
  message: p().default(""),
  params: Ie(p(), ve([p(), f(), R(), li()])).optional(),
  // Translation parameters
  field: ae(ae(p())).default([]),
  index: ae(f()).nullable().default(null),
  id: p().nullable().default(null),
  // Source object's autoId
  issues: ae(we()).nullable().default(null),
  // Will be Issue[] at runtime
  type: Yr.default("error"),
  category: ae(Kr).nullable().default(null),
  throwError: R().default(!1),
  shouldTranslate: R().default(!0)
}), Hc = ["lr", "rl", "bt", "tb"];
B({
  x1: f(),
  x2: f(),
  y1: f(),
  y2: f(),
  dimension: Ae(["l", "w"]).optional(),
  shapeCollisions: ae(we()).optional()
});
B({
  id: p().nullable().optional(),
  x1: f(),
  x2: f(),
  y1: f(),
  y2: f(),
  origin: p().optional(),
  dimension: Ae(["l", "w"]).optional(),
  direction: Ae(Hc).nullable().optional(),
  type: p().nullable().optional()
});
const Uc = B({
  // ========== Identification ==========
  // Unique identifier for this line
  id: p(),
  // Type classification for this line
  type: p().optional(),
  // ========== Coordinates ==========
  x1: f().default(0),
  x2: f().default(0),
  y1: f().default(0),
  y2: f().default(0),
  // ========== Origin Information ==========
  // Origin point of the line
  origin: p().optional(),
  // ========== Collision Tracking ==========
  // Shapes that collide with this line
  shapeCollisions: ae(we()).default([]),
  // ========== Validation ==========
  // Validation issues found with this line
  issues: ae(we()).default([])
}), Yc = {
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
}, Zr = /* @__PURE__ */ new Map();
function vs() {
  return Zr;
}
function ow(t, e) {
  Zr.set(t, e);
}
function cn(t, e) {
  const i = t, s = i._fieldBehavior?.fieldBehavior || {};
  return i._fieldBehavior = {
    fieldBehavior: {
      ...s,
      ...e
    }
  }, i;
}
function Un(t) {
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
      if (e._def.typeName === "ZodUnion" && e._def.options?.length > 0) {
        e = e._def.options[0];
        continue;
      }
      if (e._def.typeName === "ZodArray")
        break;
    }
    break;
  }
  return null;
}
function ns(t) {
  const e = {};
  if (t instanceof cc) {
    const i = t.shape;
    for (const [s, n] of Object.entries(i)) {
      const a = Un(n);
      a && (e[s] = a);
    }
  }
  if (t._def && t._def.shape) {
    const i = t._def.shape;
    for (const [s, n] of Object.entries(i)) {
      const a = Un(n);
      a && (e[s] = a);
    }
  }
  return e;
}
typeof lc < "u" && En && En.prototype && (En.prototype.behavior = function(t) {
  return cn(this, t);
});
function Fe(t, e = {}) {
  let s = we().refine((r) => r == null ? !0 : typeof r == "object" && r !== null ? ("autoId" in r || "id" in r, !0) : !1, {
    message: `Invalid reference to ${t}`
  }).transform((r) => {
    if (r == null || typeof r == "object" && r !== null && typeof r.getType == "function" || typeof r == "object" && r !== null && r.__ref === !0)
      return r;
    if (typeof r == "object" && r !== null && !r.__ref)
      try {
        const o = vs(), l = r.__entityType || t, c = o.get(l);
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
  return n = cn(n, a), Object.defineProperty(n, "__zRefClassName", {
    value: t,
    enumerable: !1,
    writable: !1,
    configurable: !1
  }), n;
}
function ze(t, e = {}) {
  let i = ae(Fe(t)).default([]).describe(
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
  return i = cn(i, s), i;
}
function _s(t, e = {}) {
  const i = t.map((a) => Fe(a));
  let s = ae(ve(i)).default([]).describe(
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
  return s = cn(s, n), s;
}
const Ja = ["topLeft", "topRight", "bottomLeft", "bottomRight"], Kc = [
  "left",
  "centre",
  "right",
  "top",
  "bottom",
  "topLeft",
  "topRight",
  "bottomLeft",
  "bottomRight"
], Zc = ["lr", "rl", "bt", "tb"], Jc = B({
  // ========== Coordinates ==========
  x: f().default(0),
  y: f().default(0),
  z: f().default(0),
  // ========== Shape References ==========
  a: p().optional(),
  b: p().optional(),
  stock: Fe("Stock", { nullable: !0 }).optional(),
  // ========== Direction and Positioning ==========
  direction: Ae(Zc).nullable().optional(),
  type: p().optional(),
  corner: Ae(Ja).optional(),
  shapePosition: Ae(Ja).optional(),
  grid: Ae(Kc).optional(),
  // ========== Collision and Raycast Flags ==========
  raycast: R().default(!1),
  collision: R().default(!1),
  tooClose: R().default(!1),
  adjustedForMinSpacing: R().default(!1)
}), Xc = {
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
}, Jr = p().default("").describe('Unique identifier (e.g., "1.0" for shapes/stock, "g1" for groups, "ss-1_a2b3" for segments, "1.0-proximity" for proximity rectangles)'), Qc = p().max(200).default("").describe("User input name"), eu = p().default("").describe("Parent identifier for tracking copies and relationships"), tu = R().default(!1).describe("Prevent automatic rotation optimization"), iu = R().default(!1).describe("Whether this is an offcut piece"), Xr = ae(p()).default([]).describe("IDs of identical items").behavior({ clone: "copy" }), Ui = ve([
  Pe(""),
  Pe("l"),
  Pe("w"),
  Pe(" ").transform(() => ""),
  li().transform(() => "")
]).default("").describe("Grain direction of the material"), Qr = ve([
  // String format (legacy support - color name or hex)
  p(),
  // Object format with hex and name
  B({
    hex: p().regex(/^#[0-9A-Fa-f]{6}$/, "Must be valid hex color (#RRGGBB)"),
    name: p().min(1)
  })
]).optional().describe("Material color (hex code + name or legacy string)"), eo = jt(
  (t) => t === null || t === " " || t === "n" || t === "none" || !["", "l", "w"].includes(t) ? "" : t,
  Ae(["", "l", "w"]).default("").describe("Orientation lock for rotation constraints")
), su = B({
  l1: f().default(0).describe("Long side 1 trim value"),
  l2: f().default(0).describe("Long side 2 trim value"),
  w1: f().default(0).describe("Short side 1 trim value"),
  w2: f().default(0).describe("Short side 2 trim value")
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 });
B({
  material: R(),
  thickness: R(),
  fit: R(),
  width: R()
}).nullable().default(null);
ve([
  Pe(""),
  Pe("l"),
  Pe("w"),
  li()
]).default(null);
Ie(p(), f()).nullable().default(null);
Ie(p(), f()).nullable().default(null);
const ga = ve([
  Pe(0),
  Pe(1)
]), nu = B({
  dimension: f().describe("Dimension of the strip shape batch"),
  rot: ga.describe("Rotation: 0 (no rotation) or 1 (90 degrees)"),
  order: f().optional().describe("Order of the batch"),
  id: p().optional().describe("Batch ID"),
  stockId: p().optional().describe("Associated stock ID"),
  rerunning: R().optional().describe("Whether the batch is being rerun"),
  priorityShape: p().nullable().describe("Priority shape identifier (null if none specified)")
});
B({
  subsetUsed: R().optional().describe("Whether a subset was used for strip shape batches"),
  groups: Ie(p(), nu).describe("Groups of strip shape batches keyed by ID")
});
const au = Ae(["none", "schema", "business", "full"]), Gt = B({
  // Validation issues (errors) - uses zRefArray to avoid type duplication across modules
  issues: ze("Issue", {
    description: "Validation issues (errors)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Validation warnings (non-critical issues) - uses zRefArray to avoid type duplication
  warnings: ze("Issue", {
    description: "Validation warnings (non-critical)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Legacy flag to skip validation (backward compatibility)
  skipValidation: R().optional(),
  // New validation control properties
  skipSchemaValidation: R().optional(),
  skipBusinessValidation: R().optional(),
  validationMode: au.optional(),
  enableStrictMode: R().optional()
}), ci = {
  // Check if valid (no errors)
  isValid: {
    compute: (t) => (t.issues || []).filter((i) => i.type === "error").length === 0,
    cache: !0,
    dependencies: ["issues"],
    returnType: "boolean"
  }
};
function ru(t) {
  if (!t) return "";
  const e = t.indexOf(".");
  return e === -1 ? t : t.substring(0, e);
}
const ma = Gt.extend({
  // Identity
  id: Jr,
  // Description
  name: Qc,
  // Dimensions
  l: jt((t) => typeof t == "number" && !isFinite(t) ? 1 : t ?? 1, f().positive()).describe("Length (long side dimension)"),
  w: jt((t) => typeof t == "number" && !isFinite(t) ? 1 : t ?? 1, f().positive()).describe("Width (short side dimension)"),
  t: f().positive().nullable().optional().describe("Thickness (z-axis dimension)"),
  q: f().positive().int().default(1).describe("Quantity"),
  // Calculated dimensions (computed once on init for performance)
  area: f().positive().default(1).describe("Calculated area (l * w)"),
  longSide: f().positive().default(1).describe("Calculated long side Math.max(l, w)"),
  shortSide: f().positive().default(1).describe("Calculated short side Math.min(l, w)"),
  parentId: p().default("").describe("Parent ID extracted from id (integer part before decimal)"),
  // Flags
  duplicate: R().default(!1).describe("Whether this is a duplicate"),
  offcut: iu,
  // Grain
  grain: Ui,
  preventGrainRotation: R().default(!1).describe("Prevent rotation that would change grain direction"),
  // Orientation
  preventAutoRotation: tu,
  orientationLock: eo,
  // Position (reset during cloning - cloned shapes should not have preset positions)
  x: f().nullable().default(null).describe("X coordinate position").behavior({ clone: "reset" }),
  y: f().nullable().default(null).describe("Y coordinate position").behavior({ clone: "reset" }),
  // Stock matching
  material: p().max(200).default("").transform((t) => t ? t.trim().toLowerCase() : "").describe("Material name"),
  // Trim
  trim: su.describe("Reduce the dimensions by specified trim values"),
  trimmed: R().default(!1).describe("Whether trim has been applied to dimensions"),
  // Proximity data (excluded from compression)
  proximity: B({
    rectangle: Fe("Rectangle").nullable().default(null),
    // Using 'any' to avoid circular import
    distance: f().nullable().default(null)
  }).default({ rectangle: null, distance: null }).behavior({ compress: "exclude" }),
  // Other properties
  cost: f().min(0).nullable().default(0).describe("Cost per unit"),
  customData: Ie(p(), we()).default({}).describe("Custom user-defined data"),
  identicalTo: Xr,
  notes: p().max(500).default("").transform((t) => typeof t == "string" && t.length ? t.replace(/,/g, "").substring(0, 200) : "").describe("Description")
}), ya = {
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
}, ou = ["x", "y"];
Ae(ou);
const lu = ["l", "w"];
Ae(lu);
const cu = ["l", "w"], Si = Ae(cu);
ve([
  Pe(0),
  Pe(1),
  Pe(2)
]);
ve([
  Pe(0),
  Pe(1),
  li()
]);
const uu = ["sheet", "linear", "roll"], un = jt(
  // Normalize to lowercase before validation
  (t) => typeof t == "string" ? t.toLowerCase() : t,
  ve([
    Ae(uu),
    li()
  ]).nullable().default(null)
).describe("Type of stock material"), to = B({
  // Infinite length flag for rolls and other continuous stock
  infiniteLength: R().default(!1).describe("Whether stock has infinite length (e.g., for rolls)"),
  // Allow shapes that exactly fit the stock dimensions
  allowExactFitShapes: R().default(!1).describe("Allow shapes that exactly fit"),
  // Automatically add stock as needed
  autoAdd: R().default(!1).describe("Automatically add stock as needed")
}), ba = ma.extend({
  // Identity - override id to be required for containers
  id: p().default("").describe("Unique identifier for containers (required for Stock and Segment)"),
  // Parent identifier for tracking copies
  parentId: eu,
  // Container-specific fields
  stockType: un,
  // Array of shapes or groups (excluded from compression - runtime only)
  shapes: _s(["Shape", "Group"], {
    description: "Array of Shape or Group objects contained within this container"
  }).behavior({ clone: "reset", compress: "exclude" }),
  // Saw reference - using zRef for define.ref<Saw>('Saw') (share exact instance during cloning, serialize as reference)
  saw: Fe("Saw", {
    nullable: !0,
    description: "Reference to Saw class"
  }).behavior({ clone: "share", compress: "reference" }),
  // Algorithm benchmark results (reset during cloning)
  algoBenchmark: we().optional().describe("Benchmark results from optimization algorithms").behavior({ clone: "reset" }),
  // Container flag
  isContainer: R().default(!0).describe("Flag indicating this is a container")
}), va = {
  // Include all Rectangle computed properties
  ...ya,
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
ba.describe(JSON.stringify({
  name: "Container",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(va)
}));
const du = B({
  dimension: f().describe("Dimension of the strip shape batch"),
  rot: ve([
    Pe(0),
    Pe(1)
  ]).describe("Rotation"),
  order: f().optional().describe("Order of the batch"),
  id: p().optional().describe("Batch ID"),
  stockId: p().optional().describe("Associated stock ID"),
  rerunning: R().optional().describe("Whether the batch is being rerun"),
  priorityShape: p().nullable().describe("Priority shape identifier (null if none specified)")
}), io = B({
  // Strip direction
  myStripDirection: Si.optional(),
  // Strip parent (can be shape or group)
  myStripParent: ve([
    Fe("Shape", { nullable: !0 }),
    Fe("Group", { nullable: !0 })
  ]).default(null).describe("Parent strip shape or group for guillotine optimization").behavior({
    serialize: "reference",
    compress: "reference",
    clone: "share"
  }),
  // Phase number
  myPhase: f().int().min(0).optional().describe("Phase of the strip this shape belongs to"),
  // Strip shape batches optimization data
  stripShapeBatches: B({
    subsetUsed: R().optional().describe("Whether a subset was used for strip shape batches"),
    groups: Ie(p(), du).default({}).describe("Groups of strip shape batches keyed by ID")
  }).default({ groups: {} }).describe("Strip shape batch optimization data")
});
io.describe(JSON.stringify({
  name: "GuillotineState",
  version: "1.0.0"
}));
const fu = {}, hu = B({
  fill: f().default(0),
  similarDimensions: f().default(0),
  compression: f().default(0),
  cohesion: f().default(0),
  area: f().default(0),
  edge: f().default(0),
  alignment: f().default(0),
  exactFit: f().default(0),
  total: f().default(0),
  shapes: ve([
    Fe("Shape", { nullable: !0 }),
    Fe("Group", { nullable: !0 })
  ]).optional(),
  group: Fe("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
  cutDirection: Si.optional()
}).behavior({ clone: "reset" }), pu = B({
  exactStripFill: f().default(0),
  fill: f().default(0),
  cohesion: f().default(0),
  fenceConsistency: f().default(0),
  similarDimensions: f().default(0),
  compression: f().default(0),
  sameStripBonus: f().default(0),
  aspectRatio: f().optional(),
  total: f().default(0),
  cutDirection: Si,
  myStripDirection: Si.optional(),
  myStripParent: ve([
    Fe("Shape", { nullable: !0 }),
    Fe("Group", { nullable: !0 })
  ]).optional().describe("Parent strip shape or group for guillotine optimization"),
  myPhase: f().optional()
}).behavior({ clone: "reset" }), Xa = ve([
  hu,
  pu,
  // Also support the generic object with catchall for backward compatibility
  B({
    cutDirection: Si.optional(),
    myStripParent: ve([
      Fe("Shape", { nullable: !0 }),
      Fe("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group"),
    myStripDirection: Si.optional()
  }).catchall(f())
]).behavior({ clone: "reset" }), dn = ma.extend({
  // Stock lock (shared schema) - original was stockLock: define.array(define.string())
  stockLock: ae(p()).default([]).describe("Stock lock configuration"),
  // Stock matching - original object structure
  stockMatch: B({
    material: R(),
    thickness: R(),
    fit: R(),
    width: R()
  }).nullish().describe("Matching stock information"),
  // Guillotine state - reference that will be initialized in constructor (reset during cloning)
  // This ensures guillotineState is always a proper GuillotineState instance with methods
  guillotineState: Fe("GuillotineState", {
    nullable: !0,
    // Nullable in schema but always initialized in constructor
    description: "Data for guillotine cutting optimization (always initialized as instance)"
  }).nullable().default(null).behavior({
    clone: "unique",
    serialize: wi() ? "full" : "exclude",
    compress: wi() ? "full" : "exclude"
    // Consistent with serialize behavior
  }),
  // Priority and weighting (records) - exact match from original
  priority: Ie(p(), f()).default({}).describe("Priority levels for optimization"),
  weighting: Ie(p(), f()).optional().describe("Shape weighting for optimization"),
  // Pattern matching for stack detection (reset during cloning)
  patternMatch: R().default(!1).describe("Used for stack detection").behavior({ clone: "reset" }),
  firstShape: B({
    sampleRotations: ae(f().int().min(0).max(1)).default([]).describe("Sample rotations (0 or 1) for first shape optimization").behavior({ clone: "reset" }),
    isFirstShape: R().default(!1).describe("Whether this is the first shape in optimization").behavior({ clone: "reset" })
  }).default({ sampleRotations: [], isFirstShape: !1 }),
  // Placement properties (reset during cloning)
  added: R().default(!1).describe("Whether shape has been added to a stock").behavior({ clone: "reset" }),
  placementOrder: f().int().min(0).optional().describe("Order in which shape was placed").behavior({ clone: "reset" }),
  // Stock reference (reset during cloning - cloned shapes should not be pre-placed)
  stock: Fe("Stock", {
    nullable: !0,
    description: "Reference to the stock this item is placed on"
  }).behavior({ clone: "reset" }),
  // Stock fitting data
  fitsStock: Ie(
    p(),
    Ie(p(), R())
  ).nullable().default(null).describe("Information about which stocks this shape fits"),
  // Scoring properties
  bestScore: B({
    x: f().nullable().default(null),
    y: f().nullable().default(null),
    rot: ve([Pe(0), Pe(1)]).nullable().default(null),
    total: f().nullable().default(null),
    weighting: Ie(p(), f()).optional(),
    group: Fe("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
    score: Xa.optional(),
    point: we().optional().describe("Associated point for placement"),
    myStripParent: ve([
      Fe("Shape", { nullable: !0 }),
      Fe("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group for this score"),
    cutDirection: Si.optional(),
    myStripDirection: Si.optional(),
    stock: Fe("Stock", {
      nullable: !0,
      description: "Stock reference for this score"
    })
  }).nullable().default(null).optional().describe("Best optimization score achieved").behavior({
    clone: "reset",
    serialize: "exclude"
    // Always exclude - transient optimization data
  }),
  // Current optimization score (can be efficiency or guillotine type, reset during cloning)
  score: Xa.nullable().optional().describe("Current optimization score").behavior({
    clone: "reset",
    serialize: "exclude"
    // Always exclude - transient optimization data
  }),
  // Minimum spacing
  minSpacing: f().min(0).default(0).describe("Minimum spacing around shape or group")
}), fn = {
  // Include all Rectangle computed properties
  ...ya
  // Placeable doesn't define additional computed properties
};
dn.describe(JSON.stringify({
  name: "Placeable",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(fn)
}));
const so = ["horizontal", "vertical"], no = ["position", "user", "strip", "firstShape"], wa = Ae(so).optional(), gu = B({
  x: f(),
  y: f(),
  autoId: p().optional(),
  rot: ga
}), mu = dn.extend({
  // Override quantity - always 1 for groups
  q: f().min(1).max(1).int().default(1),
  // Groups have fixed orientation
  preventAutoRotation: R().default(!0),
  // Group-specific fields
  shapes: ze("Shape").default([]),
  direction: wa,
  container: ve([
    Fe("Segment"),
    Fe("Stock")
  ]).behavior({ compress: "exclude" }),
  positions: ae(gu).default([]),
  type: Ae(no).default("position"),
  efficiency: f().min(0).max(100).default(0),
  groupLength: f().min(0).default(0),
  groupWidth: f().min(0).default(0),
  outOfBounds: R().default(!1),
  collision: R().default(!1),
  counter: f().int().min(0).default(0),
  inputId: p().optional()
}), yu = {
  ...fn,
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
B({
  id: p(),
  x: f(),
  y: f(),
  shapes: ze("Shape"),
  direction: Ae(so),
  type: Ae(no),
  container: ve([
    Fe("Segment"),
    Fe("Stock")
  ]).optional()
});
const ao = ae(p()).default([]).describe("Parent IDs of stock(s) this shape is locked to"), bu = Ae(["l", "w"]).nullable().default(null), ro = ve([
  Pe("l"),
  Pe("w"),
  li()
]).default(null), vu = B({
  stockId: p().optional(),
  material: p().optional(),
  thickness: f().optional(),
  grain: Ui.optional()
}).describe("Which stock(s) this shape is a match for "), wu = Ie(p(), we()).default({});
ao.describe("IDs of stocks this shape is locked to");
const Su = ro.describe("Direction that should face up");
B({
  /**
   * Up direction - Direction that should face up during optimization
   */
  upDirection: Su
});
const xu = B({
  // Whether shape is in a user-defined group
  inUserGroup: R().default(!1).describe("Whether shape is in a user-defined group"),
  // Whether shape is in any group
  inGroup: R().default(!1).describe("Whether shape is currently in a group"),
  // Placement order within group
  placementOrder: f().int().min(0).optional().describe("Placement order within group"),
  // Group reference (the actual Group class instance)
  reference: Fe("Group", {
    nullable: !0,
    description: "Group this shape belongs to"
  }).optional().behavior({ clone: "reset", compress: "reference" }),
  // Group this was added as part of (preserved during serialization as reference)
  addedAsGroup: Fe("Group", {
    nullable: !0,
    description: "Group this was added as part of"
  }).optional().behavior({ clone: "reset", compress: "reference" })
}).default({
  inUserGroup: !1,
  inGroup: !1,
  placementOrder: void 0,
  reference: null,
  addedAsGroup: null
}).describe("Group metadata and reference"), Yn = dn.extend({
  // ========== Group Metadata ==========
  // Nested object containing all group-related properties
  group: xu,
  // ========== Identity ==========
  // Unique identifier for referencing items (required for shapes)
  id: p().default("").describe("Unique identifier for referencing items"),
  // Array of IDs this shape is identical to
  identicalTo: Xr,
  // Whether this is a duplicate
  duplicate: R().default(!1).describe("Whether this is a duplicate shape"),
  // ========== Orientation ==========
  // Direction that should face up during optimization
  upDirection: bu.describe("Direction that should face up"),
  // ========== Extras ==========
  // Extras container for banding, finish, planing, etc.
  // Override default reference behavior to preserve full data in compressed mode
  extras: Fe("Extras", {
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
  machining: Fe("Machining", {
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
}), oo = {
  // Include all Placeable computed properties
  ...fn,
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
Yn.describe(JSON.stringify({
  name: "Shape",
  description: "Shape to be cut from stock material",
  version: "1.0.0",
  extends: "Placeable",
  computedProperties: Object.keys(oo)
}));
const ku = B({
  // Internal-only fields (not exposed in API)
  fitsAll: R().default(!1),
  fitsAny: R().default(!1),
  largestShape: we().nullable(),
  smallestShape: we().nullable(),
  // API-exposed fields
  areaEfficiency: f().default(0),
  finishArea: f().default(0),
  bandingLength: f().default(0),
  partArea: f().default(0),
  totalParts: f().default(0),
  stackedNumberOfCuts: f().default(0),
  numberOfCuts: f().default(0),
  stackedCutLength: f().default(0),
  cutLength: f().default(0),
  rollLength: f().default(0)
}), Iu = B({
  stock: Fe("Stock", { nullable: !0 }).optional(),
  number: f().int().min(1).optional()
}), Kn = B({
  ...ba.shape,
  ...to.shape,
  // Override x and y to default to 0 for Stock (containers are positioned at origin)
  x: f().nullable().default(0).describe("X coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  y: f().nullable().default(0).describe("Y coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  // Stock analysis results
  analysis: ku.optional().behavior({ clone: "reset" }),
  // Automatically add stock as needed during optimization
  autoAdd: R().optional().describe("Automatically add stock as needed during optimization"),
  // Pattern for identifying duplicate stock sheets
  duplicatePattern: p().default("").describe("Pattern for identifying duplicate stock sheets"),
  // Root segment for guillotine cutting (excluded from compression, reset during cloning)
  rootSegment: Fe("Segment", {
    nullable: !0
  }).optional().behavior({ clone: "reset", compress: "exclude" }),
  // Optimization score (excluded from compression, reset during cloning)
  score: we().nullable().default(null).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stack information (reset during cloning - cloned stocks start fresh)
  stack: Iu.optional().describe("Stack information").behavior({ clone: "reset" }),
  // Whether the stock layout has been tidied (excluded from compression, reset during cloning)
  tidy: R().default(!1).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stock type (sheet, linear, roll) - inherited from shared stockType
  type: Ae(["sheet", "linear", "roll"]).optional().describe("Type of stock material"),
  // Whether this stock is unusable for optimization
  unusable: R().default(!1).describe("Whether this stock is unusable for optimization"),
  // Whether this stock has been used in the optimization (reset during cloning)
  used: R().default(!1).describe("Whether this stock has been used in the optimization").behavior({ clone: "reset" }),
  // The optimization strategy that selected this stock (reset during cloning)
  winningStrategy: p().optional().describe("The optimization strategy that selected this stock").behavior({ clone: "reset" }),
  // Display and filtering properties
  color: Qr.describe('Material color ({ hex: "#FF5733", name: "Red" } or legacy string)'),
  weight: f().positive().optional().describe("Weight in kg"),
  imageUrl: p().url().optional().describe("Image URL for stock display")
}), lo = {
  // Include all Container computed properties
  ...va,
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
Kn.describe(JSON.stringify({
  name: "Stock",
  description: "Stock material for cutting optimization",
  version: "1.0.0",
  extends: "Container",
  computedProperties: Object.keys(lo)
}));
var le = /* @__PURE__ */ ((t) => (t.InputRectangle = "inputRectangle", t.InputShape = "inputShape", t.InputStock = "inputStock", t.InputUserGroup = "inputUserGroup", t.InputSaw = "inputSaw", t.Rectangle = "rectangle", t.Container = "container", t.Saw = "saw", t.Shape = "shape", t.Stock = "stock", t.Group = "group", t.UserGroup = "userGroup", t.StripGroup = "stripGroup", t.FirstShapeGroup = "firstShapeGroup", t.Segment = "segment", t.Offcut = "offcut", t.Cut = "cut", t.Line = "line", t.Placeable = "placeable", t.GuillotineState = "guillotineState", t.Point = "point", t.PointCollection = "pointCollection", t.Optimiser = "optimiser", t.Machining = "machining", t.Extras = "extras", t.Issue = "issue", t))(le || {}), Pu = /* @__PURE__ */ ((t) => (t.Full = "full", t.Compressed = "compressed", t))(Pu || {});
class rt {
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
      const l = r.constructor?.name === i, u = "getType" in r && typeof r.getType == "function" && r.getType() === e, d = l || u, h = s ? s(r) : !0;
      return d && h;
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
const Cu = rt.create(le.Cut, "Cut"), ft = rt.create(
  le.Shape,
  "Shape",
  (t) => !("shapes" in t)
), Bt = rt.create(le.Stock, "Stock"), co = rt.create(
  le.Group,
  "Group",
  (t) => "shapes" in t && Array.isArray(t.shapes) && t.type !== "user" && t.type !== "strip"
), ws = rt.create(
  le.UserGroup,
  "Group",
  (t) => "shapes" in t && t.type === "user"
), uo = rt.create(
  le.StripGroup,
  "Group",
  (t) => "shapes" in t && t.type === "strip"
), fo = rt.create(
  le.FirstShapeGroup,
  "Group",
  (t) => "shapes" in t && t.type === "firstShape"
), Je = (t) => co(t) || ws(t) || uo(t) || fo(t), Ht = rt.create(
  le.InputUserGroup,
  "InputUserGroup"
), qi = rt.create(le.Segment, "Segment"), Au = rt.create(le.Offcut, "Offcut"), ho = (t) => {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  for (; e; ) {
    if (e.constructor?.name === "Container")
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return !1;
}, Tu = rt.create(le.Saw, "Saw"), po = (t) => {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  for (; e; ) {
    if (e.constructor?.name === "Rectangle")
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return t.constructor?.name === "Rectangle";
}, Ou = (t) => {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  for (; e; ) {
    if (e.constructor?.name === "Placeable")
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return t.constructor?.name === "Placeable";
}, Le = rt.create(
  le.InputShape,
  "InputShape"
), zi = rt.create(
  le.InputStock,
  "InputStock"
);
rt.create(
  le.InputSaw,
  "InputSaw"
);
rt.create(
  le.GuillotineState,
  "GuillotineState"
);
rt.create(le.Line, "Line");
rt.create(le.Point, "Point");
rt.create(
  le.PointCollection,
  "PointCollection"
);
function Lu(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "__ref" in e && "autoId" in e && typeof e.__ref == "string" && typeof e.autoId == "string";
}
function go(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "trimmed" in e && e.trimmed === !0;
}
function Fu(t) {
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
  return Cu(t) ? le.Cut : Le(t) ? le.InputShape : zi(t) ? le.InputStock : Ht(t) ? le.InputUserGroup : ws(t) ? le.UserGroup : uo(t) ? le.StripGroup : fo(t) ? le.FirstShapeGroup : co(t) ? le.Group : ft(t) ? le.Shape : Bt(t) ? le.Stock : ho(t) ? le.Container : qi(t) ? le.Segment : Au(t) ? le.Offcut : po(t) ? le.Rectangle : Ou(t) ? le.Placeable : null;
}
const fi = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "sides" in e && (!("type" in e) || e.type === "banding") && (!("validate" in e) || typeof e.validate == "function");
}, Qt = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "faces" in e && (!("type" in e) || e.type === "finish") && (!("validate" in e) || typeof e.validate == "function");
}, ei = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "faces" in e && "sides" in e && (!("type" in e) || e.type === "planing") && (!("validate" in e) || typeof e.validate == "function");
}, $u = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "images" in e && (!("type" in e) || e.type === "imageUpload") && (!("validate" in e) || typeof e.validate == "function");
};
rt.create(
  le.Machining,
  "Machining",
  (t) => ("holes" in t || "corners" in t || "hingeHoles" in t) && "enabled" in t
);
rt.create(
  le.Extras,
  "Extras",
  (t) => "banding" in t || "finish" in t || "planing" in t
);
rt.create(
  le.Issue,
  "Issue",
  (t) => "type" in t && "message" in t && (t.type === "error" || t.type === "warning")
);
function Du(t) {
  return t?.__entityType === le.Shape;
}
function lw(t) {
  return t?.__entityType === le.Group || t?.__entityType === le.StripGroup || t?.__entityType === le.FirstShapeGroup;
}
function cw(t) {
  return t?.__entityType === le.UserGroup;
}
function Li(t) {
  return !(!t || typeof t != "string");
}
function Eu(t) {
  return !Li(t) || !t || typeof t != "string" ? "" : t.toUpperCase();
}
function Mu(t) {
  return !Li(t) || !t || typeof t != "string" ? "" : t?.toLowerCase();
}
function Ru(t) {
  return Li(t) ? t.trim().split(" ").map((e) => Yi(e)).join(" ") : "";
}
function Yi(t) {
  return Li(t) ? t.trim().charAt(0).toUpperCase() + t.slice(1) : "";
}
function _u(t) {
  return Li(t) ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z\u00C0-\u024F0-9._\-|\s]/g, ""), t.trim()) : "";
}
function ju(t) {
  return Li(t) ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), t.trim()) : "";
}
function uw(t, e = 100) {
  return Li(t) ? (t = t.trim(), t = t.substring(0, e), t) : "";
}
let mo = jr;
function Bu(t) {
  mo = t;
}
function Vt(t, e) {
  if (Hr())
    return t;
  const i = mo.t(t, { ...e });
  return !i || i === t ? t : Yi(i);
}
function Vu(t) {
  return typeof t == "string" && (t.startsWith("fields.") || t.startsWith("extras.") || t.startsWith("woodwork.") || t.startsWith("errors."));
}
function Nu(t) {
  if (!t) return;
  const e = {};
  for (const [i, s] of Object.entries(t))
    if (Vu(s)) {
      const n = Vt(s);
      e[i] = n;
    } else
      e[i] = s;
  return e;
}
function Gu(t, e) {
  const i = zc(t), s = t.startsWith("errors.validation.") ? t : i, n = Nu(e);
  return {
    message: Vt(s, n),
    translationKey: s,
    params: n
  };
}
function yo(t, e) {
  return Gu(t, e).message;
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
    const i = Wc.parse(e), s = ue.determineIdentifier(i.item, i.index || []);
    let n = i.id || "";
    !n && i.item && "autoId" in i.item && i.item.autoId && (n = i.item.autoId);
    const a = i.shouldTranslate !== !1 ? yo(i.message, i.params) : i.message;
    if (this.message = a, this.identifier = s, this.field = i.field.map((r) => [...r]), this.index = i.index ? [...i.index] : [], this.id = n, this.type = i.type, this.category = i.category || [], this.item = i.item, this.addToItemIssues(i.item), Array.isArray(i.issues) && i.issues.push(this), i.throwError) {
      const r = `Issue created for ${Fu(i.item)}: ${this.identifier || "N/A"} - ${this.field.map((o) => o.join(".")).join(", ")}`;
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
Hn(
  (t) => t instanceof ue,
  { message: "Must be an Issue instance" }
);
const Rn = 10, Qa = 0;
class Ks extends Error {
  constructor(e) {
    super(e), this.name = "NumberFormatError";
  }
}
const ls = {
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
function qu(t, e) {
  let i;
  if (typeof t == "number" ? i = t : i = new ps(t).valueOf(), typeof e == "number") {
    const s = Math.pow(10, e);
    return Math.round(i * s) / s;
  }
  return i;
}
function zu(t, e) {
  const i = new ps(t);
  if (e > 0) {
    const s = i.mul(e), n = Math.round(s.valueOf());
    return new ps(n, e).toFraction(!0);
  }
  return i.simplify().toFraction(!0);
}
function Wu(t, e, i = !1) {
  const s = t == null || String(t).trim() === "";
  if (i && s)
    return { value: null, valid: !1, message: "errors.validation.field.required" };
  if (!i && s)
    return { value: null, valid: !0 };
  const n = String(t);
  try {
    const a = bo(n, !0), r = parseFloat(a ?? ""), o = a !== null && a !== "" && !isNaN(r) && isFinite(r);
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
function Hu(t = "en-US") {
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
function js(t) {
  if (t == null || t === "") return null;
  const e = String(t).trim();
  if (!e) return null;
  try {
    const { thousandsSeparator: i, decimalSeparator: s } = Hu(), n = e.replace(new RegExp(`\\${i}`, "g"), "").replace(new RegExp(`\\${s}`, "g"), "."), a = Number(n);
    return isFinite(a) ? a : null;
  } catch (i) {
    throw new Ks(`Failed to parse locale number: "${t}". ${i.message || "Parsing error"}`);
  }
}
function Sa(t) {
  if (!t) return !1;
  const e = t.toString().trim();
  if (!e) return !1;
  const i = Object.keys(ls).join("");
  return new RegExp(
    `^-?((\\d+\\s+)?\\d+\\/\\d+|\\d+|\\d+[${i}]|[${i}]|\\d+'(?:\\s*\\d+(?:\\/\\d+)?"?)?|(\\d+\\s+)?\\d+\\/\\d+"|\\d+")$`
  ).test(e);
}
function bo(t, e = !1) {
  if (t == null || t === "") return null;
  let i = String(t).trim();
  if (!i) return null;
  const s = Object.keys(ls).join("");
  i = i.replace(new RegExp(`(\\d)\\s+([${s}])`, "g"), "$1$2");
  try {
    const n = Object.keys(ls).join(""), a = new RegExp(`^(-?)(\\d+)([${n}])$`), r = new RegExp(`^(-?)([${n}])$`), o = i.match(a), l = i.match(r);
    if (o) {
      const c = o[1], u = o[2], d = o[3], h = ls[d];
      if (h)
        return `${c}${u} ${h}`;
      throw new Error(`Unknown vulgar fraction character: ${d}`);
    } else if (l) {
      const c = l[1] || "", u = l[2], d = ls[u];
      if (d)
        return `${c}${d}`;
      throw new Error(`Unknown vulgar fraction character: ${u}`);
    } else if (Sa(i)) {
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
      const u = e ? js(i) : parseFloat(i);
      return u === null || isNaN(u) || !isFinite(u) ? null : u.toString();
    }
  } catch (n) {
    throw new Ks(
      `Failed to clean numeric input: "${t}". ${n.message || "Cleaning error"}`
    );
  }
}
function er(t, e, i = null, s = null) {
  if (t && !(!Le(t) && !zi(t))) {
    if (!["decimal", "fraction"].includes(e)) {
      console.warn("Attempting to update to an invalid number format:", e);
      return;
    }
    for (const n of t.numberFormatKeys)
      if (typeof t[n] == "object" && t[n] !== null)
        for (const a in t[n])
          Object.prototype.hasOwnProperty.call(t[n], a) && (t[n][a] = K({ v: t[n][a], nf: e, dp: i, pl: !1, fr: s }));
      else
        t[n] = K({ v: t[n], nf: e, dp: i, pl: !1, fr: s });
  }
}
function Uu(t) {
  return /^-?\d*\.?\d+$/.test(t);
}
function Yu(t) {
  return /^-?(\d+\s+)?\d+\/\d+$/.test(t) || /^-?\d+$/.test(t);
}
function K(t) {
  if (t.v == null || t.v === "")
    return t.nf === "decimal" || !t.nf && t.o?.numberFormat !== "fraction" ? null : "";
  const e = t.o ?? {}, i = t.nf ?? e?.numberFormat ?? "decimal", s = t.dp ?? e?.decimalPlaces ?? Rn, n = t.pl ?? e?.parseLocale ?? !1, a = t.fr ?? e?.fractionRoundTo ?? Qa;
  if (i === "decimal") {
    if (typeof t.v == "number") {
      if (typeof s == "number" && s !== Rn) {
        const r = Math.pow(10, s);
        return Math.round(t.v * r) / r;
      }
      return t.v;
    }
    if (typeof t.v == "string") {
      const r = t.v.trim();
      if (Uu(r) && !n) {
        const o = parseFloat(r);
        if (isFinite(o)) {
          if (typeof s == "number" && s !== Rn) {
            const l = Math.pow(10, s);
            return Math.round(o * l) / l;
          }
          return o;
        }
      }
    }
  } else if (i === "fraction" && typeof t.v == "string") {
    const r = t.v.trim();
    if (Yu(r))
      try {
        const o = new ps(r);
        if (isFinite(o.valueOf())) {
          if (a === 0 || a === Qa)
            return o.toFraction(!0);
          const l = o.mul(a), c = Math.round(l.valueOf());
          return new ps(c, a).toFraction(!0);
        }
      } catch {
      }
  }
  try {
    const r = bo(t.v, n);
    return r === null || r === "" ? i === "decimal" ? null : "" : i === "decimal" ? qu(r, s) : zu(r, a);
  } catch (r) {
    throw r instanceof Ks ? r : new Ks(
      `Failed to convert number format: "${t.v}" to ${i}. ${r.message}`
    );
  }
}
const Yt = {
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
function nt(t, e) {
  if (e?.returnKey)
    return `fields.${t}`;
  const i = `fields.${t}`, s = Vt(i);
  if (s === i) {
    const n = Yt[t] || t;
    return wi() && !Yt[t] && console.warn(`[field-mappings] No translation or fallback for field: "${t}"`), n;
  }
  return wi() && console.log(`[field-mappings] Translated "${t}" -> "${s}"`), s;
}
const vo = (t, e, i, s, n, a) => {
  const r = Ye(t, e);
  if (r == null || r === "") return;
  if (typeof r != "string") {
    new ue({
      item: t,
      message: Vt("errors.validation.must_be_string", {
        0: Yt[e]
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
    message: Vt("errors.validation.must_be_values", {
      0: Yt[e],
      1: i.join(", ")
    }),
    shouldTranslate: !1,
    field: [[e]],
    index: s !== void 0 ? [s] : null,
    type: n ? "warning" : "error",
    issues: a
  });
};
function wo(t) {
  return t.filter((e) => e.type === "error");
}
function Ku(t, e) {
  return typeof t == "object" && t !== null && e in t;
}
function Zu(t) {
  return Ku(t, "issues") && Array.isArray(t.issues);
}
function tr(t, e, i = !1) {
  if (!Zu(t) || !t.issues?.length)
    return !1;
  const s = i ? "warning" : "error";
  return t.issues.filter((r) => r.type === s).some((r) => r.field?.length ? r.field.some((o) => o.every((l, c) => l === Xu(e[c]))) : !1);
}
const Ju = {
  partMaterial: "material",
  stockMaterial: "material"
};
function Xu(t) {
  return Ju[t] ?? t;
}
const Qu = ["banding", "finish", "planing", "info"], _n = p().refine(
  (t) => t.startsWith("side.") || t.startsWith("face."),
  { message: 'Location must start with "side." or "face."' }
).transform((t) => t), $t = ve([
  R(),
  p(),
  Ie(p(), ve([R(), p()]))
  // Object-based values: { type: 'oak', thickness: '1mm', test: true }
]), hn = Gt.extend({
  // ========== Identity ==========
  type: Ae(Qu).optional().describe("Type of extra"),
  enabled: R().default(!0).describe("Whether extra is enabled"),
  // ========== Face/Side mappings (superset - each extra uses what it needs) ==========
  // Face values (front/back) - partial record to allow any subset of faces
  faces: B({
    a: $t.optional(),
    b: $t.optional()
  }).optional().describe("Partial mapping of face keys to extra values"),
  // Side values (edges) - partial record to allow any subset of sides
  sides: B({
    a: $t.optional(),
    b: $t.optional(),
    c: $t.optional(),
    d: $t.optional(),
    l1: $t.optional(),
    l2: $t.optional(),
    w1: $t.optional(),
    w2: $t.optional()
  }).optional().describe("Partial mapping of side keys to extra values")
  // NOTE: Options are now centralized in CalculationData.extrasOptions
  // No per-shape options are stored - all extras use centralized configuration
}), xa = {
  // Inherit computed properties from validation base
  ...ci
  // Add any extra-specific computed properties here
};
Ie(
  Ae(["a", "b"]),
  $t
);
Ie(
  Ae(["l1", "l2", "w1", "w2", "a", "b", "c", "d"]),
  $t
);
const So = B({
  min: f().optional().describe("Minimum value"),
  max: f().optional().describe("Maximum value"),
  message: p().optional().describe("Custom error message")
});
B({
  scope: Ae(["face", "side"]),
  key: p(),
  // Face or Side key
  original: p()
  // Original ExtraLocation string
});
const ed = B({
  location: p().describe("Location identifier (e.g., face.a, side.l1)"),
  properties: Ie(p(), So).optional(),
  disabledMessage: p().optional().describe("Message when location is disabled")
}), td = B({
  global: Ie(p(), So).optional(),
  locations: ae(ed).optional().describe("Location-specific constraints"),
  defaultMessage: p().optional().describe("Default message when constraints not met")
});
B({
  scope: ae(Ae(["faces", "sides"])).describe("Scopes this extra type supports"),
  faces: ae(Hn()).optional().describe("Available face locations"),
  sides: ae(Hn()).optional().describe("Available side locations"),
  constraints: td.optional()
});
const xo = hn, id = {
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
}, sd = ["radius", "bevel"], nd = Gt.extend({
  // Corner type
  type: Ae(sd).nullable().optional().describe("Type of corner modification"),
  // Size of the corner modification
  size: f().nonnegative().nullable().default(0).describe("Size of the corner modification in mm"),
  // Corner index
  index: f().min(0).max(3).default(0).describe("Corner index (0=BL, 1=BR, 2=TR, 3=TL)")
}), ad = {
  // Inherit computed properties from validation base
  ...ci,
  // Check if corner has any operation
  hasOperation: {
    compute: (t) => t.type !== void 0 && t.size > 0,
    metadata: {
      cache: !0,
      dependencies: ["type", "size"],
      returnType: "boolean"
    }
  }
}, rd = ["l", "w"], od = ["top", "bottom", "left", "right", "merged"], ld = B({
  // Coordinates
  x1: f().default(0),
  x2: f().default(0),
  y1: f().default(0),
  y2: f().default(0),
  // Dimension and position
  dimension: Ae(rd).optional(),
  position: Ae(od).optional(),
  // Stock reference - required as cuts cannot exist without a stock
  stock: Fe("Stock"),
  // Guillotine properties
  isGuillotine: R().default(!1),
  guillotineState: B({
    order: f().nullable().optional(),
    parentSegmentID: p().nullable().optional(),
    phase: f().nullable().optional(),
    segmentCutOrder: f().nullable().optional(),
    partProduced: p().nullable().optional()
  }).nullable().default({}),
  // PTX properties
  ptxData: B({
    order: f().nullable().optional(),
    function: f().nullable().optional(),
    isDummy: R().nullable().optional(),
    headCutStrip: R().nullable().optional()
  }).nullable().optional(),
  // Cut properties
  isHead: R().default(!1),
  isTrim: R().default(!1),
  beamTrimL1: R().default(!1),
  beamTrimL2: R().default(!1),
  beamTrimW1: R().default(!1),
  beamTrimW2: R().default(!1),
  // Distances
  distances: B({
    bottom: f().nullable().optional(),
    left: f().nullable().optional(),
    right: f().nullable().optional(),
    top: f().nullable().optional(),
    partSize: f().nullable().optional()
  }).nullable().optional(),
  // Runtime flags
  remove: R().optional().behavior({ compress: "exclude" })
}), cd = {
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
}, ud = Gt.extend({
  // Identity
  id: p().optional().describe("Unique identifier for the extras container"),
  // Individual extras - using ref for proper typing
  // Override default reference behavior to serialize full data for proper __entityType markers
  banding: Fe("Banding", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Edge banding configuration"),
  finish: Fe("Finish", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Surface finish configuration"),
  planing: Fe("Planing", {
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
}), dd = {
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
}, ko = hn, fd = {
  // Inherit computed properties from Extra base (includes validation base)
  ...xa,
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
}, hd = ["l1", "l2", "w1", "w2"], pd = Gt.extend({
  // Position
  position: f().min(0).default(0).describe("Position along the side"),
  side: Ae(hd).describe("Side where hinge is placed"),
  face: f().min(0).max(1).default(0).describe("Face side (0 = front, 1 = back)"),
  // Hole configuration
  numHoles: f().min(1).default(2).describe("Number of holes"),
  diameter: f().min(0.1).default(35).describe("Hole diameter in mm"),
  depth: f().min(0).default(13).describe("Hole depth in mm"),
  // Hinge dimensions
  hingeLength: f().min(0).default(52).describe("Length of the hinge"),
  distanceFromEdge: f().min(0).default(22.5).describe("Distance from edge to hole center"),
  outerSpacing: f().min(0).default(9.5).describe("Spacing from hinge ends to outer holes"),
  // Constraints
  minimumHoleDistance: f().min(0).optional().describe("Minimum distance between holes"),
  positionLimit: f().min(0).optional().describe("Maximum position along side")
}), gd = {
  // Inherit computed properties from validation base
  ...ci,
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
}, md = ["regular", "hinge", "shelf"], yd = Gt.extend({
  // Position
  x: f().min(0).default(0).describe("X position from left edge"),
  y: f().min(0).default(0).describe("Y position from bottom edge"),
  // Dimensions
  diameter: f().min(0.1).default(5).describe("Hole diameter in mm"),
  depth: f().min(0).optional().describe("Hole depth (undefined for through hole)"),
  // Configuration
  face: f().default(0).describe("Face index (0=front, 1=back)"),
  type: Ae(md).default("regular").describe("Type of hole")
}), bd = {
  // Inherit computed properties from validation base
  ...ci,
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
function Re(t, e) {
  return t._metadata = e, e.description ? t.describe(e.description) : t;
}
const vd = (t, e) => Re(t, e), Ni = (t) => {
  const { min: e, allowZero: i = !1, nullable: s = !0 } = t || {};
  let n;
  return e !== void 0 ? n = i ? f().min(e) : f().min(e) : n = i ? f().min(0) : f().gt(0), s ? ve([
    n,
    p(),
    li()
  ]).transform((a) => a == null || a === "" ? null : typeof a == "string" ? K({ v: a }) ?? null : a) : ve([
    n,
    p()
  ]).transform((a) => a === "" ? 0 : typeof a == "string" ? K({ v: a }) ?? 0 : a);
}, Io = () => Re(
  Ui,
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
), wd = () => Re(
  eo,
  {
    label: "fields.orientationLock",
    group: "properties",
    options: [
      { value: "", label: "fields.orientationLock.free" },
      { value: "l", label: "fields.orientationLock.length" },
      { value: "w", label: "fields.orientationLock.width" }
    ]
  }
), Bs = (t) => Re(
  Ni({ allowZero: t.allowZero, nullable: !0 }).default(null),
  {
    label: t.label,
    placeholder: t.placeholder || "",
    group: "dimensions",
    allowZero: t.allowZero || !1,
    output: "number"
  }
), Sd = () => Re(
  jt(
    (t) => {
      if (t === "" || t === null || t === void 0) return 1;
      if (typeof t == "string") {
        const e = parseInt(t, 10);
        return isNaN(e) ? 1 : e;
      }
      return t;
    },
    f().min(0, { message: "Quantity should be greater than or equal to 0" }).int({ message: "Quantity must be a whole number" }).default(1)
  ),
  {
    label: "fields.q",
    placeholder: "fields.q",
    group: "general",
    step: 1,
    output: "number"
  }
), xd = (t) => Re(
  p().max(200).optional().transform((e) => e ? e.trim().toUpperCase() : ""),
  {
    label: "fields.name",
    placeholder: t?.placeholder || "",
    group: "general"
  }
), kd = () => Re(
  p().max(200).optional().transform((t) => t ? t.trim().toUpperCase() : ""),
  {
    label: "fields.material",
    placeholder: "fields.material",
    group: "properties"
  }
), Id = () => Re(
  Ni({ allowZero: !0, nullable: !0 }).optional().transform((t) => {
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
), Pd = () => Re(
  uc().max(500).transform((t) => t.replace(/,/g, " ")).optional(),
  {
    label: "fields.notes",
    placeholder: "fields.notes",
    group: "general"
  }
), Cd = (t) => Re(
  R().default(!1),
  t
), Ad = (t, e) => Re(
  Ae(t),
  e
), ni = {
  field: Re,
  boolean: Cd,
  enum: Ad,
  custom: vd
}, Td = ["efficiency", "guillotine", "beam", "none"], Zn = ["l", "w", "flex", "none"], Od = ["efficiency", "time"], Ld = ["l", "w"], Po = ["efficiency", "smallest"], Fd = ["dimensions", "identical", "none"], Zs = ["sheet", "linear", "roll"], pn = ve([
  f().int().positive(),
  li(),
  dc()
]).transform((t) => t ?? 100).describe("Maximum stack height for beam saw stacking"), gn = Ae(Td).nullable().optional().transform((t) => t === null ? void 0 : t), mn = Ae(Zn).nullable().optional().transform((t) => t === null ? void 0 : t), ka = Ae(Po).default("efficiency").describe("Method for selecting stocks"), Ia = Ae(Fd).default("identical").describe("How to stack identical parts"), yn = B({
  strategy: Ae(Od).default("efficiency"),
  maxPhase: f().int().min(0).max(10).default(0),
  headCuts: R().default(!1)
}).default({
  strategy: "efficiency",
  maxPhase: 0,
  headCuts: !1
}), Pa = B({
  primaryCompression: Ae(Ld).default("w")
}).default({
  primaryCompression: "w"
});
B({
  stockType: un,
  /**
   * Stack height - Maximum stack height
   */
  stackHeight: pn,
  /**
   * Cut type - Type of cutting algorithm
   */
  cutType: gn,
  /**
   * Cut preference - Preferred cutting direction
   */
  cutPreference: mn,
  /**
   * Guillotine options - Configuration for guillotine cutting
   */
  guillotineOptions: yn,
  /**
   * Efficiency options - Configuration for efficiency optimization
   */
  efficiencyOptions: Pa,
  /**
   * Stock selection - Method for selecting stocks
   */
  stockSelection: ka,
  /**
   * Stacking mode - How to stack identical parts
   */
  stackingMode: Ia
});
const Co = f().min(0).default(0), Ao = f().min(0).default(0), To = f().min(0).default(0), $d = B({
  dimension: Ao,
  minSpacing: To
});
function Jn(t) {
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
function Xn(t, e) {
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
const Dd = Re(
  gn,
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
), Ed = Re(
  mn,
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
), Md = Re(
  ka,
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
), Rd = Re(
  Ia,
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
), _d = Re(
  yn,
  {
    label: "fields.guillotineOptions",
    group: "guillotine",
    order: 1,
    type: "object"
  }
), jd = Re(
  Pa,
  {
    label: "fields.efficiencyOptions",
    group: "efficiency",
    order: 1,
    type: "object"
  }
), Ti = B({
  ...Gt.shape,
  // ========== Stock Type ==========
  stockType: Re(
    Ae([...Zs]).default("sheet"),
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
  bladeWidth: Re(
    Ni({ allowZero: !0, nullable: !1 }).default(0),
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
  stackHeight: Re(
    pn,
    {
      label: "fields.stackHeight",
      group: "stacking",
      order: 1,
      step: 1,
      info: "If your saw supports cutting multiple stock simultaneously, set the maximum total allowed height."
    }
  ),
  cutType: Dd,
  cutPreference: Ed,
  // ========== Guillotine Options ==========
  guillotineOptions: _d,
  // ========== Efficiency Options ==========
  efficiencyOptions: jd,
  // ========== General Options ==========
  options: B({
    stockSelection: Md,
    minSpacing: Ni({ allowZero: !0, nullable: !1 }).default(0),
    stackingMode: Rd,
    minSpacingDimension: B({
      dimension: Ni({ allowZero: !0, nullable: !0 }).optional(),
      minSpacing: Ni({ allowZero: !0, nullable: !0 }).optional()
    }).optional()
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical"
  })
}), Bd = {
  // Include validation computed properties (isValid)
  ...ci,
  // Get valid cut types for current stock type
  validCutTypes: {
    compute: (t) => Jn(t.stockType),
    metadata: {
      cache: !0,
      dependencies: ["stockType"],
      description: "Valid cut types for current stock type",
      returnType: "CutType[]"
    }
  },
  // Get valid cut preferences for current stock type and cut type
  validCutPreferences: {
    compute: (t) => Xn(t.stockType, t.cutType),
    metadata: {
      cache: !0,
      dependencies: ["stockType", "cutType"],
      description: "Valid cut preferences for current stock type and cut type",
      returnType: "CutPreference[]"
    }
  }
}, Vd = B({
  // Entity type added during serialization by toData() method
  // Used for automatic class recreation during deserialization
  __entityType: p().optional().describe("Entity type added during serialization by AutoSerializable.toData()"),
  // Reference marker for reference-based recreation
  // Used when objects reference each other
  __ref: p().optional().describe("Reference marker for object recreation")
}), Nd = B({
  // ========== Selection State (excluded from compression) ==========
  selected: ni.boolean({
    label: "fields.selected",
    description: "Whether item is selected for multi-edit"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  multiEdit: ni.boolean({
    label: "fields.multiEdit",
    description: "Whether this is the multi-edit item"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  readonly: ni.boolean({
    label: "fields.readonly",
    description: "Whether input is readonly"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Validation State (excluded from compression and serialization) ==========
  isNew: ni.boolean({
    label: "fields.isNew",
    description: "Whether this is a newly created item that should skip validation until first user interaction",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" })
}), Gd = B({
  l1: Re(
    jt((t) => t ?? 0, f()).default(0),
    { label: "fields.l1", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  l2: Re(
    jt((t) => t ?? 0, f()).default(0),
    { label: "fields.l2", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  w1: Re(
    jt((t) => t ?? 0, f()).default(0),
    { label: "fields.w1", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  w2: Re(
    jt((t) => t ?? 0, f()).default(0),
    { label: "fields.w2", group: "trim", allowZero: !0, min: 0, required: !1 }
  )
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 }), qd = jt(
  (t) => {
    if (t == null)
      return { l1: 0, l2: 0, w1: 0, w2: 0 };
    if (typeof t == "object" && t !== null) {
      const e = t, i = (s) => {
        if (s == null) return 0;
        if (typeof s == "string") {
          const n = K({ v: s });
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
  Gd
), zd = B({
  // ========== Identity ==========
  id: Jr,
  index: f().int().min(0).optional(),
  // ========== Dimensions ==========
  // Input dimensions can be strings (for fractions) or numbers
  l: Bs({
    label: "fields.l",
    placeholder: "fields.l"
  }),
  w: Bs({
    label: "fields.w",
    placeholder: "fields.w"
  }),
  t: Bs({
    label: "fields.t",
    placeholder: "fields.t"
  }),
  q: Sd(),
  // ========== Material Properties ==========
  // Input name with uppercase transform
  name: xd(),
  material: kd(),
  // ========== Cost ==========
  cost: Id(),
  // ========== Trim Configuration ==========
  trim: qd,
  // ========== Rotation (Runtime) ==========
  rot: ga.default(0),
  // ========== Flags ==========
  preventAutoRotation: ni.boolean({
    label: "fields.preventAutoRotation",
    description: "Prevent automatic rotation during optimization",
    group: "options"
  }),
  offcut: ni.boolean({
    label: "fields.offcut",
    description: "Mark as offcut material",
    group: "options"
  }),
  processed: ni.boolean({
    label: "fields.processed",
    description: "Has been processed",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Notes ==========
  notes: Pd()
}), Js = B({
  ...Vd.shape,
  // System properties from AutoSerializable
  ...Gt.shape,
  ...zd.shape,
  // Core business fields
  ...Nd.shape,
  // Input-specific UI fields
  // Override id with strict validation for input shapes/stock (allows blank)
  id: p().regex(/^(\d+\.\d+)?$/, 'ID must be blank or in format "1.0" (e.g., "1.0", "2.1")').default("").describe('Structured identifier for input shapes/stock in format 1.0 (e.g., "1.0") or blank')
}), Ca = {
  // Include validation computed properties (isValid)
  ...ci,
  // Get the longer side dimension
  longSide: {
    compute: (t) => {
      const e = K({ v: t.l }) ?? 0, i = K({ v: t.w }) ?? 0;
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
      const e = K({ v: t.l }) ?? 0, i = K({ v: t.w }) ?? 0;
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
      const e = K({ v: t.l }) ?? 0, i = K({ v: t.w }) ?? 0;
      return e === i;
    },
    metadata: {
      cache: !1,
      dependencies: ["l", "w"],
      description: "Whether the rectangle is square (l === w)",
      returnType: "boolean"
    }
  }
}, vi = Js.extend({
  // Add grain field for shapes
  //[] is grain needed for inputs?
  grain: Io(),
  // Add orientationLock with input-specific transform
  orientationLock: wd(),
  // ========== Shared Shape Properties ==========
  upDirection: Re(
    ro,
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
  stockLock: Re(
    ao,
    { label: "fields.stockLock" }
  ),
  // ========== Stock Matching ==========
  stockMatch: vu.nullable().optional(),
  // ========== Custom Data ==========
  customData: Re(
    wu,
    { label: "fields.customData", description: "Custom user-defined data" }
  ),
  // ========== UI Extension (excluded from compression) ==========
  selectedMaterial: Re(
    we().optional(),
    { label: "fields.selectedMaterial", description: "Selected material object" }
  ).behavior({ compress: "exclude" }),
  // ========== Machining ==========
  // Override default reference behavior to serialize full data
  machining: Fe("Machining", {
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
  extras: Fe("Extras", {
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
}), Wd = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...Ca,
  // Check if has grain direction
  hasGrain: {
    compute: (t) => t.grain === "l" || t.grain === "w",
    metadata: {
      cache: !1,
      dependencies: ["grain"],
      returnType: "boolean"
    }
  }
}, Kt = B({
  ...Js.shape,
  ...to.shape,
  // ========== Stock-specific Properties ==========
  // Override l to allow 0 for infinite length rolls
  l: Bs({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !0
  }),
  // Add grain field for stock
  grain: Io(),
  preventGrainRotation: ni.boolean({
    label: "fields.preventGrainRotation",
    description: "Prevent rotation that would change grain direction",
    group: "options",
    order: 4
  }),
  // Stock-specific flags (infiniteLength is now in sharedStockPropertiesSchema from merge above)
  used: ni.boolean({
    label: "fields.used",
    description: "Whether stock has been used"
  }),
  // Display and filtering properties
  color: Re(
    Qr,
    {
      label: "fields.color",
      description: 'Material color ({ hex: "#FF5733", name: "Red" } or legacy string)',
      group: "display",
      order: 1
    }
  ),
  weight: Re(
    f().positive().optional(),
    {
      label: "fields.weight",
      description: "Weight in kg",
      group: "display",
      order: 2
    }
  ),
  imageUrl: Re(
    p().url().optional(),
    {
      label: "fields.imageUrl",
      description: "Image URL for stock display",
      group: "display",
      order: 3
    }
  ),
  // Stock filter and categorization properties
  tags: Re(
    ae(p()).optional(),
    {
      label: "fields.tags",
      description: "Searchable tags for filtering",
      group: "display",
      order: 4
    }
  ),
  available: Re(
    R().optional(),
    {
      label: "fields.available",
      description: "Whether stock is available for selection (defaults to true)",
      group: "display",
      order: 5
    }
  ),
  // Saw configuration (excluded from compression)
  saw: Re(
    we().optional(),
    { label: "fields.saw", description: "Saw configuration data" }
  ).behavior({ compress: "exclude" })
}), Hd = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...Ca
  // InputStock doesn't define additional computed properties
}, Aa = Gt.extend({
  // ========== Identification ==========
  id: p().optional().describe("Unique identifier"),
  // ========== Shape References ==========
  shapeIds: ae(p()).default([]).describe("List of shape IDs in this group"),
  shapes: ae(p()).default([]).transform((t) => t?.map(String) ?? []).describe("Shape identifiers"),
  // ========== Group Properties ==========
  direction: wa,
  // 'horizontal' | 'vertical'
  q: f().int().min(1).default(1).describe("Quantity of groups"),
  duplicate: R().default(!1).describe("If a duplicate"),
  // ========== Material Properties (from Group) ==========
  name: p().optional().describe("Group name"),
  material: p().optional().describe("Material type"),
  grain: Ui.describe("Grain direction"),
  // ========== Stock Matching (excluded during compression) ==========
  stockMatch: B({
    stockId: p().optional(),
    material: p().optional(),
    thickness: f().optional(),
    grain: Ui.optional()
  }).optional().describe("Matching stock information").behavior({ compress: "exclude" }),
  // ========== Runtime Properties ==========
  shapeList: ae(we()).optional().describe("Runtime shape list for validation").behavior({ compress: "exclude" })
}), Ud = {
  // Include validation computed properties (isValid)
  ...ci
  // InputUserGroup doesn't define additional computed properties
};
B({
  parts: ae(f()).describe("Indices of shapes/parts in the parts array (user-friendly name for shapes)"),
  direction: wa,
  q: f().int().min(1).describe("Quantity of groups")
});
const Yd = Gt.extend({
  // Collections of machining operations
  holes: ze("Hole").default([]).describe("Array of holes").behavior({
    serialize: "full",
    clone: "copy"
  }),
  hingeHoles: ze("HingeHole").default([]).describe("Array of hinge hole sets").behavior({
    serialize: "full",
    clone: "copy"
  }),
  corners: ze("Corner").default([]).describe("Array of corner operations").behavior({
    serialize: "full",
    clone: "copy"
  }),
  // Validation
  enabled: R().default(!0).describe("Whether machining is enabled")
}), Kd = {
  // Inherit computed properties from validation base
  ...ci,
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
}, Zd = {
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
}, Oo = hn, Jd = {
  // Inherit computed properties from Extra base
  ...xa,
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
}, Xd = B({
  // ========== Storage ==========
  // Points stored as a map (will be converted to/from Map in class)
  // In serialized form this is a record, at runtime it's a Map
  points: ve([
    fc(p(), Fe("Point")),
    Ie(p(), Fe("Point"))
  ]).default(() => /* @__PURE__ */ new Map())
}), Qd = {
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
}, Qn = Gt.extend({
  // Core properties from shared schema
  stockType: un,
  stackHeight: pn.describe("Maximum stack height"),
  cutType: gn,
  cutPreference: mn,
  // Blade width (numeric for runtime)
  bladeWidth: Co.describe("Blade width"),
  // Guillotine options
  guillotineOptions: yn,
  // Efficiency options
  efficiencyOptions: Pa,
  // General options (nested stockSelection and stackingMode)
  options: B({
    stockSelection: ka,
    minSpacing: To,
    stackingMode: Ia,
    minSpacingDimension: $d
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical",
    minSpacingDimension: {
      dimension: 0,
      minSpacing: 0
    }
  }).describe("General saw options")
}), ef = {
  // Include validation computed properties
  ...ci,
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
Qn.describe(JSON.stringify({
  name: "Saw",
  description: "Runtime saw configuration for optimization",
  version: "1.0.0",
  category: "configuration"
}));
const ji = 1e-10, tf = 10, sf = Number.MAX_SAFE_INTEGER, nf = 4294967295, It = (t) => typeof t == "number" && Number.isFinite(t), Vs = (t) => Array.isArray(t) && t.length > 0;
function as(t, e, i = ji) {
  if (t === e) return 0;
  if (Number.isInteger(t) && Number.isInteger(e))
    return t > e ? 1 : -1;
  const s = t - e;
  return Math.abs(s) < i ? 0 : s;
}
const af = {
  greaterThan: (t, e, i = ji) => !It(t) || !It(e) ? !1 : as(t, e, i) > 0,
  greaterThanOrEqualTo: (t, e, i = ji) => !It(t) || !It(e) ? !1 : as(t, e, i) >= 0,
  lessThan: (t, e, i = ji) => !It(t) || !It(e) ? !1 : as(t, e, i) < 0,
  lessThanOrEqualTo: (t, e, i = ji) => !It(t) || !It(e) ? !1 : as(t, e, i) <= 0,
  equalTo: (t, e, i = ji) => !It(t) || !It(e) ? !1 : as(t, e, i) === 0
};
function rf(t) {
  return It(t) ? Number.isInteger(t) ? t : Number(t.toFixed(tf)) : !1;
}
function of(t) {
  if (!It(t) || t < 0 || t > sf)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (nf + 1) * t);
}
function lf(t, e) {
  if (!Vs(t))
    throw new Error("Invalid array parameter");
  if (!It(e) || e < 0 || e > t.length)
    throw new Error("Invalid size parameter");
  const i = t.slice(), s = t.length - e;
  for (let n = t.length - 1; n >= s; n--) {
    const a = Math.floor(Math.random() * (n + 1));
    [i[n], i[a]] = [i[a], i[n]];
  }
  return i.slice(s);
}
class Cs {
  static calculateMean(e) {
    if (!Vs(e))
      throw new Error("Invalid input array");
    return e.reduce((i, s) => i + s, 0) / e.length;
  }
  static calculateStandardDeviation(e, i = null) {
    if (!Vs(e))
      throw new Error("Invalid input array");
    const s = i ?? this.calculateMean(e), n = e.reduce((a, r) => {
      const o = r - s;
      return a + o * o;
    }, 0) / e.length;
    return Math.sqrt(n);
  }
  static calculateCoefficientOfVariation(e) {
    if (!Vs(e))
      throw new Error("Invalid input array");
    const i = this.calculateMean(e);
    if (i === 0)
      throw new Error("Mean is zero, coefficient of variation undefined");
    return this.calculateStandardDeviation(e, i) / i;
  }
}
const he = {
  ...af,
  isNumber: It,
  round: rf,
  getRandom: of,
  getRandomSample: lf,
  calculateStandardDeviation: Cs.calculateStandardDeviation.bind(Cs),
  calculateCoefficientOfVariation: Cs.calculateCoefficientOfVariation.bind(Cs)
};
function ir(t) {
  return t && typeof t == "object" && typeof t.toData == "function";
}
let sr = 0, nr = Date.now();
const cf = 1e4;
function uf() {
  return sr % cf === 0 && (nr = Date.now()), `${nr}-${(sr++).toString(36)}`;
}
class df {
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
    this.autoId = e?.autoId || uf(), Object.defineProperty(this, "_serializationMode", {
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
      const i = ns(e.schema), s = e.schema;
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
          } else if (l === "ZodUnion" && r._def.options?.length > 0) {
            const c = r._def.options, u = s ? `${s}.${n}` : n;
            for (const d of c) {
              if (!d) continue;
              const h = Un(d);
              if (h) {
                const g = u;
                i[g] || (i[g] = h);
                break;
              }
            }
            for (const d of c) {
              if (!d || !d._def) continue;
              const h = ns(d);
              for (const [g, k] of Object.entries(h)) {
                const M = s ? `${s}.${n}.${g}` : `${n}.${g}`;
                i[M] || (i[M] = k);
              }
              if (d && d.shape) {
                const g = s ? `${s}.${n}` : n;
                this.extractNestedBehaviors(d.shape, i, g);
              }
            }
            r = null;
            break;
          } else
            break;
        }
        if (!r) continue;
        const o = ns(r);
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
        if (s instanceof Vi) {
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
    let d = {};
    u && (d = ns(u));
    const h = l.defaults || (u ? u.parse({}) : {}) || {};
    for (const [g, k] of Object.entries(d))
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
    if (a && (r = ns(a)[i] || null), r?.clone)
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
        if (ir(r)) {
          if (i?.serialize === "reference" || s === "compressed" && i?.compress === "reference") {
            const c = "autoId" in r && r.autoId, u = typeof r.getType == "function";
            if (c) {
              const d = u ? r.getType() : r.constructor.name;
              return {
                __ref: !0,
                id: r?.id,
                autoId: r.autoId,
                __entityType: d
              };
            }
          }
          const l = s === "compressed" ? "compressed" : "full";
          return r.toData(l);
        }
        return r;
      });
    if (ir(e)) {
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
    const n = vs().get(i);
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
class at extends df {
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
    at.recreateFunc = e;
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
      const s = e.__entityType || i, a = vs().get(s);
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
    return e && typeof e == "object" ? (s && (e.id || e.autoId), at.recreateFunc ? at.recreateFunc(e, s, i) : { ...e, __ref: i }) : e;
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
      if (i instanceof Vi)
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
      return e.map((s) => at.cleanEntityForAPI(s));
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
      if (r instanceof hc) {
        const o = r.options.some((c) => c instanceof pc), l = r.options.some((c) => c instanceof gc);
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
    if (e instanceof mc || e instanceof yc)
      return this.unwrapSchema(e._def?.innerType);
    if (e instanceof bc)
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
class Ci extends at {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Uc;
  static computedProperties = Yc;
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
    return new Ci({ x1: e, y1: i, x2: s, y2: n, origin: a, type: r });
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
const ff = {
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
}, As = {
  topLeft: {
    top: ["topRight"],
    default: ["topRight"]
  },
  bottomRight: {
    right: ["topRight"],
    default: ["topRight"]
  }
}, Ts = {
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
class dt extends at {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Jc;
  static computedProperties = Xc;
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
    return new dt(e, i, s);
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
    const s = new dt(e ?? this.x, i ?? this.y);
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
      const s = ff[this.direction];
      return s && s[this.corner] && s[this.corner][this.grid] && i.add(s[this.corner][this.grid]), i;
    }
    return e?.cutType !== "efficiency" ? (As[this.corner] && (this.grid ? As[this.corner][this.grid] && As[this.corner][this.grid].forEach((s) => i.add(s)) : As[this.corner].default?.forEach((s) => i.add(s))), i) : (Ts[this.corner] && (this.grid ? Ts[this.corner][this.grid] && Ts[this.corner][this.grid].forEach((s) => i.add(s)) : Ts[this.corner].default?.forEach((s) => i.add(s))), i);
  }
}
function Oe(t) {
  return !(t === void 0 || t === null || t === "" || typeof t == "object" && !Object.values(t).length);
}
function ri(t) {
  return t ? t === "l" ? "w" : "l" : null;
}
function hf(t) {
  return t ? t === "x" ? "y" : "x" : null;
}
function ar(t, e) {
  return wc(t, e);
}
function gi(t, e) {
  return Ye(t, e);
}
function ti(t, e, i) {
  Sc(t, e, i);
}
function rr(t, e = !1) {
  if (!Oe(t) || typeof t != "object") return !1;
  const i = Object.values(t);
  return i.length === 0 ? !1 : e ? i.some((s) => Oe(s) && s) : i.some((s) => Oe(s));
}
function dw(t) {
  if (!t?.length) return [];
  const e = t.filter((s) => !s.added).map((s) => s), i = {};
  return e.forEach((s) => {
    const n = pf(s.stock) || 1;
    i[s.parentId] ? i[s.parentId].count += n : (i[s.parentId] = {}, i[s.parentId].count = n, i[s.parentId].id = s.parentId, i[s.parentId].name = s?.name ? s.name : s.id, i[s.parentId].l = s.l, i[s.parentId].w = s.w, i[s.parentId].t = s.t, i[s.parentId].material = s.material, i[s.parentId].rot = s.rot);
  }), Object.values(i);
}
function pf(t, e = []) {
  if (!t) return 1;
  if (t?.stack?.number) return t.stack.number;
  if (t?.stack?.stock) {
    const i = typeof t.stack.stock == "string" ? t.stack.stock : t.stack.stock?.id;
    if (i && e.length > 0)
      return e.find((n) => n.id === i)?.stack?.number || 1;
  }
  return typeof t?.stack == "string" && e.find((s) => s.id === t.stack)?.stack?.number || 1;
}
function gf() {
  const t = document.documentElement;
  return "requestFullscreen" in t || "webkitRequestFullscreen" in t || "mozRequestFullScreen" in t || "msRequestFullscreen" in t;
}
function fw(t, e) {
  if (t == null) return "-";
  let i = Math.round(t).toString();
  for (; i.length < e; ) i = "0" + i;
  return i;
}
function Wi(t, e = !1) {
  const i = typeof t.l == "string" ? K({ v: t.l }) : t.l, s = typeof t.w == "string" ? K({ v: t.w }) : t.w;
  if (!e || !("trim" in t))
    return { l: i, w: s };
  if (go(t))
    return { l: i, w: s };
  if (po(t) && !t.hasTrim)
    return { l: i, w: s };
  const n = t.trim, a = K({ v: n.w1 ?? 0 }) + K({ v: n.w2 ?? 0 }), r = K({ v: n.l1 ?? 0 }) + K({ v: n.l2 ?? 0 });
  return {
    l: i - (typeof a == "string" ? K({ v: a }) : a),
    w: s - (typeof r == "string" ? K({ v: r }) : r)
  };
}
function mf(t, e) {
  if ("trim" in t && !go(t)) {
    const i = t.trim;
    e.l = e.l - (K({ v: i.w1 ?? 0 }) + K({ v: i.w2 ?? 0 })), e.w = e.w - (K({ v: i.l1 ?? 0 }) + K({ v: i.l2 ?? 0 }));
  }
  return e;
}
function Ei(t, e, i = !1) {
  let s = {
    l: t.l,
    w: t.w
  };
  (zi(t) || Le(t) || ws(t)) && (s = {
    l: K({ v: t.l }),
    w: K({ v: t.w })
  });
  const n = ("rot" in t ? t.rot : 0) ?? 0;
  return i && (s = mf(t, s)), n === e || ([s.l, s.w] = [s.w, s.l]), s;
}
function Lo(t) {
  if (!("l" in t) || !("w" in t)) throw new Error("rotatable item must have l & w properties");
}
function yf(t) {
  Je(t) || (Lo(t), [t.l, t.w] = [t.w, t.l]);
}
function Ki(t, e, i = null, s) {
  if (!e || !t)
    throw new Error("Container and shape are required");
  let n = 0;
  s && Tu(s) ? n = s.options.minSpacing : s && s?.options?.minSpacing ? n = K({ v: s.options.minSpacing }) : ho(e) && (n = e?.saw?.options.minSpacing);
  const a = "allowExactFitShapes" in e && e.allowExactFitShapes === !0, r = Wi(e, !0), o = a ? Wi(e, !1) : r, l = Wi(t, !0);
  let c = r;
  if (a && (he.equalTo(l.l, o.l) && he.equalTo(l.w, o.w) || he.equalTo(l.l, o.w) && he.equalTo(l.w, o.l)) && (c = o), l.l * l.w > c.l * c.w)
    return !1;
  function u(M, N) {
    return he.equalTo(M, N) || he.lessThanOrEqualTo(M, N - n * 2);
  }
  function d(M) {
    return u(M.l, c.l) && u(M.w, c.w);
  }
  const h = Xs(t, e);
  if (t.orientationLock || i !== null) {
    const M = i ?? (h === "w" ? 1 : 0), N = Ei(t, M, !0);
    if (a) {
      const T = Ei(t, M, !1);
      if (he.equalTo(T.l, o.l) && he.equalTo(T.w, o.w))
        return d(T);
    }
    return d(N);
  }
  const g = Ei(t, 0, !0);
  if (a) {
    const M = Ei(t, 0, !1);
    if (he.equalTo(M.l, o.l) && he.equalTo(M.w, o.w) && d(M)) return !0;
  }
  if (d(g)) return !0;
  const k = Ei(t, 1, !0);
  if (a) {
    const M = Ei(t, 1, !1);
    if (he.equalTo(M.l, o.l) && he.equalTo(M.w, o.w) && d(M)) return !0;
  }
  return d(k);
}
function bf(t) {
  if ("orientationLock" in t)
    return t.orientationLock;
  let e = null;
  return (Je(t) || ws(t) || ft(t) || Le(t)) && (e = t.orientationLock), e;
}
function Xs(t, e) {
  const i = bf(t);
  if (!Oe(i)) return null;
  if (!e || "direction" in t) return i;
  if (!Je(t) && Ta(t)) return null;
  if ("getStock" in e) {
    const s = e.getStock;
    if (s && Oe(s.grain))
      return i === s.grain ? "l" : "w";
  }
  return i;
}
function Fo(t, e) {
  if (Je(t))
    return Ki(t, e, t.rot) ? [t.rot] : [];
  const i = [];
  for (let s = 0; s <= 1; s++)
    Ft(t, s, e) && Ki(t, e, s) && i.push(s);
  return i;
}
function Ft(t, e = null, i = null) {
  if (!Oe(e))
    throw new Error("no rotation provided to canRotate");
  if (e === !0 && (e = 1), e === !1 && (e = 0), t.preventAutoRotation && e !== 0 || !Je(t) && Ta(t) && e !== 0 || i && !Ki(t, i, e))
    return !1;
  const s = Xs(t, i);
  return !(s === "l" && e === 1 || s === "w" && e === 0);
}
function vf(t, e = null, i = null) {
  const s = "rot" in t ? t.rot : 0;
  return e === null && (e = s === 0 ? 1 : 0), !Je(t) && Ta(t) ? !0 : Ft(t, e, i) ? (s === e || yf(t), !0) : !1;
}
function pt(t, e = null, i = null) {
  return e ? e = 1 : e = 0, i && e && !Ki(t, i, e) ? !1 : vf(t, e, i);
}
function hw(t, e) {
  if (Je(t)) return t.rot;
  if (!Oe(t.orientationLock)) return null;
  const i = e.getStock;
  return !t.orientationLock || !Oe(i?.grain) ? null : t.orientationLock === i?.grain ? 0 : 1;
}
function or(t, e, i, s, n = null) {
  if (!s) throw new Error("requiredSide not supplied to canRotateToDimensionRange");
  const a = Wi(t);
  if (a.l >= e && a.l <= i || a.w >= e && a.w <= i) {
    if (t.l === t.w) return !0;
    const r = Math.max(a.l, a.w), o = Math.min(a.l, a.w);
    if (n) {
      if (s === "l") {
        if (r >= e && r <= i && Ft(t, 0, n) || o >= e && o <= i && Ft(t, 1, n)) return !0;
      } else if (s === "w" && (o >= e && o <= i && Ft(t, 0, n) || r >= e && r <= i && Ft(t, 1, n)))
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
function wf(t, e, i, s) {
  if (!i) throw new Error("requiredSide not supplied to rotateToDimension");
  if (t.l !== e && t.w !== e) return !1;
  if (t.l === t.w) return !0;
  const n = Wi(t), a = Math.max(n.l, n.w), r = Math.min(n.l, n.w);
  if (i === "l") {
    if (a === e && Ft(t, 0, s)) return pt(t, 0);
    if (r === e && Ft(t, 1, s)) return pt(t, 1);
  } else if (i === "w") {
    if (r === e && Ft(t, 0, s)) return pt(t, 0);
    if (a === e && Ft(t, 1, s)) return pt(t, 1);
  }
  return !1;
}
function Ta(t) {
  Lo(t);
  const e = Wi(t);
  return he.equalTo(e.l, e.w);
}
class bn extends at {
  // Zod schema for validation and serialization
  static schema = ma;
  static computedProperties = ya;
  constructor(e = {}) {
    super(e);
    let i = !1;
    Bt(this) && (i = this.infiniteLength), !e?.preventAutoRotation && !i && (this.orientationLock ? (this.orientationLock === "l" && pt(this, 0), this.orientationLock === "w" && pt(this, 1)) : this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !e?.preventGrainRotation && (this.grain = ri(this.grain)))), this.calculateDimensions(), e.skipValidation || e.skipBusinessValidation || e.validationMode === "none" || e.validationMode === "schema" || this.validate();
  }
  /**
   * Calculate derived dimensions (area, longSide, shortSide, parentId)
   * Called automatically in constructor and after dimension changes
   */
  calculateDimensions() {
    this.area = this.l * this.w, this.longSide = Math.max(this.l, this.w), this.shortSide = Math.min(this.l, this.w), this.parentId = ru(this.id);
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
        return new Ci({
          x1: i,
          x2: i + this.l,
          y1: s,
          y2: s,
          type: "bottom",
          validationMode: "none"
          // parentId: this.id
        });
      case "right":
        return new Ci({
          x1: i + this.l,
          x2: i + this.l,
          y1: s,
          y2: s + this.w,
          type: "right",
          validationMode: "none"
          // parentId: this.id
        });
      case "top":
        return new Ci({
          x1: i,
          x2: i + this.l,
          y1: s + this.w,
          y2: s + this.w,
          type: "top",
          validationMode: "none"
          // parentId: this.id
        });
      case "left":
        return new Ci({
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
      bottomLeft: new dt(this.x, this.y),
      topLeft: new dt(this.x, this.y + this.w),
      topRight: new dt(this.x + this.l, this.y + this.w),
      bottomRight: new dt(this.x + this.l, this.y)
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
    const s = new bn({
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
class Oa extends bn {
  // Zod schema for validation and serialization
  static schema = ba;
  static computedProperties = va;
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
    const i = Oa.schema.partial().parse(e);
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
    return Bt(this) ? this : qi(this) ? this.stock : Je(this) ? this.stock : null;
  }
}
class ii extends at {
  // Required: Define schema and computed properties
  static schema = io;
  static computedProperties = fu;
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
function $o(t, e = "cc") {
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
function ea(t = 0, e, i = null, s = null, n = null) {
  if (!Le(i) && !Ht || s === "stock") return !1;
  let a, r;
  if (Le(i) ? a = i.orientationLock : Ht(i) ? a = i.direction : s === "shape" && (a = n), t === 0 || Ht(i))
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
function Sf(t, e, i = null, s = null, n = null) {
  if (!Le(i) || s === "shape") return !1;
  let a;
  return t === 0 || t === 1 ? ea(t, e, i, s, n) ? "cc" : !1 : t === 2 ? e === "w" ? i.l < i.w ? "c" : "cc" : !1 : a;
}
class La extends at {
  // Required: Define schema and computed properties for SchemaClass
  static schema = ld;
  static computedProperties = cd;
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
    return new La({ x1: e, y1: i, x2: s, y2: n, position: r, stock: a });
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
class Do extends bn {
  // Zod schema for validation and serialization
  static schema = dn;
  static computedProperties = fn;
  constructor(e = {}) {
    if (super(e), !this.guillotineState)
      this.guillotineState = new ii();
    else if (!(this.guillotineState instanceof ii)) {
      const i = typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new ii(i);
    }
    (!this.firstShape || typeof this.firstShape != "object") && (this.firstShape = { sampleRotations: [], isFirstShape: !1 }), (!this.priority || typeof this.priority != "object") && (this.priority = {}), ft(this) && (!this.group || typeof this.group != "object") && (this.group = {
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
    if (!this.guillotineState || !(this.guillotineState instanceof ii)) {
      const e = this.guillotineState && typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new ii(e);
    }
  }
  /**
   * Override update to ensure guillotineState is properly handled
   */
  update(e) {
    const i = this.guillotineState instanceof ii ? this.guillotineState : null;
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
    if (this.added = !1, this.stock = null, this.placementOrder = void 0, this.x = 0, this.y = 0, e || (this.score = null, this.bestScore = null), this.firstShape.isFirstShape = !1, n || (this.firstShape.sampleRotations = []), this.patternMatch = !1, this.fitsStock = null, this.guillotineState instanceof ii)
      if (i) {
        const a = this.guillotineState.stripShapeBatches;
        this.guillotineState.reset(), a && (this.guillotineState.stripShapeBatches = a);
      } else
        this.guillotineState.reset();
    else
      this.guillotineState = new ii();
    ft(this) && (s || "group" in this && this.group && (delete this.group.placementOrder, this.group.inGroup = !1, this.group.inUserGroup = !1, this.group.reference = null, this.group.addedAsGroup = null)), Je(this) && "shapes" in this && Array.isArray(this.shapes) && this.shapes.forEach((a) => {
      "reset" in a && typeof a.reset == "function" && a.reset(e, i, s);
    });
  }
  /**
   * Add shape to stock (placeholder for optimization logic)
   */
  addToStock(e) {
    this.stock = e, this.added = !0, e.used = !0, this.grain = e.grain, !Je(this) && e?.grain && this.rot && (this.grain = ri(e.grain));
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.added = !1, ft(this) && (this.group.addedAsGroup = null, this.firstShape.isFirstShape = !1), Je(this) && this.shapes.forEach((e) => {
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
    return !i || Lu(i) || !i.stripShapeBatches?.groups || !(e in i.stripShapeBatches.groups) ? !1 : i.stripShapeBatches.groups[e];
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
      group: ft(e) ? e.group.reference : null,
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
    pt(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
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
    return Bt(e) && typeof this.fitsStock?.[e.parentId] < "u" ? this.fitsStock?.[e.parentId]?.[i ?? "any"] === !0 : Ki(this, e, i);
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
    const s = new dt(this.x + this.l, this.y);
    s.corner = "bottomRight";
    const n = new dt(this.x, this.y + this.w);
    if (n.corner = "topLeft", e?.cutType !== "efficiency" && !i)
      return [n, s];
    const a = new dt(this.x, this.y);
    a.corner = "bottomLeft";
    const r = new dt(this.x + this.l, this.y + this.w);
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
    return e === null && (e = Bt(this.stock) ? this.stock.bladeWidth / 2 : 0), [
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
    return this.getPerimeterCutVectors().forEach((n) => i.push(new La({
      stock: Bt(this.stock) ? this.stock : e,
      x1: n.x1,
      x2: n.x2,
      y1: n.y1,
      y2: n.y2,
      position: n.type
    }))), i = i.filter((n) => n.isInsideStock), i;
  }
}
let Os = null, jn = !1;
function xf() {
  if (jn)
    return Os;
  try {
    Os = { runTests: !1, throwErrorsOnFailedTests: !1 }, jn = !0;
  } catch {
    Os = { runTests: !1, throwErrorsOnFailedTests: !1 }, jn = !0;
  }
  return Os;
}
const lr = Wr("tests");
Wr("timers");
let kf, Qe;
try {
  {
    const t = new Proxy({}, { get: () => () => t });
    Qe = () => t;
  }
} catch {
  const e = new Proxy({}, { get: () => () => e });
  Qe = () => e;
}
function xt(t = [], e = null) {
  if (!t?.length) return;
  const i = xf();
  if (wi() && i && i.runTests) {
    const n = i?.testCollector || kf;
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
        if (o = !1, l = c instanceof Error ? c.message : String(c), e ? lr(e, l) : lr(l), n && n.addResult({
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
function If(t) {
  return t === "horizontal" ? "x" : t === "vertical" ? "y" : null;
}
function cr(t) {
  return t === "horizontal" ? "l" : t === "vertical" ? "w" : null;
}
class vn extends Do {
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
  static schema = Yn;
  static computedProperties = oo;
  static defaults = Yn.parse({});
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
    const i = new vn(e.data);
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
    pt(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
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
class wn extends Do {
  // Required: Define schema and computed properties for SchemaClass
  static schema = mu;
  static computedProperties = yu;
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
      if (!ft(s) && !Du(s))
        throw console.log(s), new Error("[GROUP] attempted to init a group with an item other than a shape");
      if (ft(s))
        return s.group.reference = this, s.group.inGroup = !0, s;
      if (i && i.shapeList && s) {
        const a = i.shapeList.find((r) => r.autoId === s.autoId);
        if (a)
          return a.group.reference = this, a.group.inGroup = !0, a;
      }
      const n = i ? { ...s, __context: i } : s;
      return new vn(n);
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
    const i = { ...e.data, shapes: e.shapes }, s = new wn(i);
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
          s && (pt(s, i.rot, this.container) || console.error(`  ❌ FAILED to restore rotation for ${s.id} from ${s.rot} to ${i.rot}`));
        }
      if (this.positions && this.positions.length > 0)
        for (const i of this.positions) {
          const s = this.shapes.find((n) => n.autoId === i.autoId);
          s && s.rot !== i.rot && (console.warn(`[placeMyShapes] Shape ${s.id} has wrong rotation ${s.rot}, expected ${i.rot} - forcing rotation now`), pt(s, i.rot, this.container) || console.error(`[placeMyShapes] ❌ CRITICAL: Cannot fix rotation for ${s.id}`));
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
        if (s.x = this.x + n.x, s.y = this.y + n.y, !pt(s, n.rot, this.container)) throw new Error("placeMyShapes - unable to set rotation for shape in group");
        i === 0 && this.x === 0 && this.y === 0 && (s.firstShape.isFirstShape = !0), s.group.addedAsGroup = this, xt([
          () => Qe(this.type === "position" ? s.group.inGroup : !s.group.inGroup).toBe(!0)
        ], `placeMyShapes: Shape ${s.id} inGroup flag should match group type (${this.type})`), xt([
          () => Qe(s.group.addedAsGroup).toBe(this),
          () => Qe(typeof s.group.addedAsGroup).not.toBe("string")
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
        const u = this.shapes.find((d) => d.autoId === l);
        u && u.rot !== c && pt(u, c, this.container);
      }
    }
    this.positions = [], this.type !== "user" && this.sortShapes();
    let i = 0;
    const s = If(this.direction), n = cr(this.direction);
    let a = 0;
    for (const l of this.shapes) {
      if (!l) continue;
      const c = a === this.shapes.length - 1 ? 0 : l.getMinSpacing(this.container.saw), u = e.get(l.autoId) ?? l.rot.valueOf();
      let d;
      u !== l.rot ? d = n === "l" ? l.w : l.l : d = l[n];
      const h = {
        autoId: l.autoId,
        x: 0,
        y: 0,
        rot: u
      };
      s === "x" ? h.x = i : h.y = i, this.positions.push(h), l.group.inGroup = !0, i += a === this.shapes.length - 1 ? d : d + c, a++;
    }
    this.groupLength = i;
    const r = ri(n), o = this.shapes.reduce(
      (l, c) => {
        const u = e.get(c.autoId);
        let d;
        return u !== void 0 && u !== c.rot ? d = r === "l" ? c.w : c.l : d = c[r], d > l ? d : l;
      },
      0
    );
    if (this.groupWidth = o, wi()) {
      const l = this.shapes.slice(0, -1).reduce((d, h) => d + h.getMinSpacing(this.container.saw), 0), u = this.shapes.reduce((d, h) => d + h[n], 0) + l;
      xt([
        () => Qe(
          he.equalTo(u, this.groupLength),
          "group dimension is incorrect in direction"
        ).to.be.true,
        () => Qe(
          i,
          "currentPosition is incorrect in direction"
        ).to.equal(this.groupLength),
        () => Qe(
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
    const e = cr(this.direction), i = ri(e);
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
      xt([
        () => Qe(e.every((s) => !s.group?.inGroup)).toBe(!0),
        () => Qe(e.every((s) => !s.group?.reference)).toBe(!0)
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
function Pf(t, e) {
  return t?.length ? t.reduce((n, a) => n[e] + n.l > a[e] + a.l ? n : a) : null;
}
function pw(t, e = null) {
  return e ? t.filter((i) => i.added && i?.stock?.id === e.id) : t.filter((i) => i.added);
}
const Cf = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return vo(t, "orientationLock", ["l", "w"], e, i, s), s;
}, Af = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return vo(t, "grain", ["l", "w"], e, i, s), s;
}, Tf = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [], n = Ye(t, "banding");
  return n != null && (typeof n != "object" || n === null) && new ue({
    item: t,
    message: Vt("errors.validation.must_be_object", { 0: "banding" }),
    shouldTranslate: !1,
    field: [["banding"]],
    index: [e],
    type: i ? "warning" : "error",
    issues: s,
    category: ["part"]
  }), s;
}, Of = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], a = Ye(t, "customData");
  if (a == null) return n;
  if (typeof a != "object" || a === null)
    return new ue({
      item: t,
      message: Vt("errors.validation.must_be_object", {
        0: Yt.customData
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
        message: Vt("errors.validation.must_be_string_number_boolean", {
          0: Yt.customData
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
}, Lf = ({ item: t, index: e }) => {
  const i = Ye(t, "machining");
  i && "validateEverything" in i && i.validateEverything(t, e);
}, Ff = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], r = Ye(t, "x");
  return r === null || r === "" || r === void 0 || i != null && K({ v: r }) > i && new ue({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: nt("x", { returnKey: !0 }),
      // positional (legacy)
      field: nt("x", { returnKey: !0 }),
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
}, $f = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], r = Ye(t, "y");
  return r === null || r === "" || r === void 0 || i != null && K({ v: r }) > i && new ue({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: nt("y", { returnKey: !0 }),
      // positional (legacy)
      field: nt("y", { returnKey: !0 }),
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
}, Df = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], r = Ye(t, "l");
  return Ye(t, "infiniteLength") || (r === null || r === "" || r === void 0 || r === 0) && new ue({
    item: t,
    message: "errors.validation.not_set",
    params: {
      0: nt("l", { returnKey: !0 }),
      // positional (legacy)
      field: nt("l", { returnKey: !0 })
      // named (new)
    },
    field: [["l"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: a,
    category: n
  }), a;
}, Ef = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], r = Ye(t, "w");
  return (r === null || r === "" || r === void 0) && new ue({
    item: t,
    message: "errors.validation.not_set",
    params: {
      0: nt("w", { returnKey: !0 }),
      // positional (legacy)
      field: nt("w", { returnKey: !0 })
      // named (new)
    },
    field: [["w"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: a,
    category: n
  }), a;
}, Mf = ({ item: t, index: e, max: i, isWarning: s = !1, saw: n, category: a = [] }) => {
  const r = [], o = Ye(t, "t");
  return n?.cutType === "beam" && !o && new ue({
    item: t,
    message: "errors.saw.thickness_required_for_beam_saw",
    field: [["t"]],
    index: [e],
    type: "error",
    issues: r,
    category: a
  }), r;
}, Rf = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], a = Ye(t, "q"), r = Ye(t, "autoAdd");
  return a == null || r === !0, n;
}, _f = ({
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
}, jf = ({
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
      message: Vt("errors.groups.part_needs_orientation_lock", { 0: o + 1 }),
      shouldTranslate: !1,
      field: [["orientationLock"]],
      index: [e],
      type: s ? "warning" : "error",
      issues: a,
      category: n
    });
  }), a;
}, Bf = ({
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
    const d = c.trimmedDimensions ? c.trimmedDimensions[s] : c[s];
    he.equalTo(d, l) || new ue({
      item: t,
      message: Vt("errors.groups.dimension_not_correct", {
        0: u + 2,
        1: s === "l" ? "length" : "width",
        2: l,
        3: d
      }),
      shouldTranslate: !1,
      index: [e],
      type: n ? "warning" : "error",
      issues: r,
      category: a
    });
  }), r;
}, Eo = ({
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
    message: Vt("errors.groups.not_enough_of_part", {
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
function Qs(t) {
  return t && typeof t == "object" && "area" in t;
}
const ta = {
  missingProperty: (t, e) => `[Sorting Warning] Missing property "${t}" in ${e}`,
  missingMethod: (t, e) => `[Sorting Warning] Missing method "${t}" in ${e}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
}, ct = (t, e, i) => e in t ? t[e] : (console.warn(ta.missingProperty(String(e), i)), null), Ls = (t, e) => (i, s) => {
  const n = t(i, s);
  return n !== 0 ? n : e(i, s);
}, Mi = (t, e) => {
  if (Qs(t) && Qs(e))
    return t.area < e.area ? -1 : t.area > e.area ? 1 : 0;
  const i = "l" in t && "w" in t ? Number(t.l) * Number(t.w) : 0, s = "l" in e && "w" in e ? Number(e.l) * Number(e.w) : 0;
  return i < s ? -1 : i > s ? 1 : 0;
}, Mt = (t, e) => {
  const i = ct(t, "id", "first item"), s = ct(e, "id", "second item");
  if (i === null || s === null || i === void 0 || s === void 0) return 0;
  const n = i.toString().split("."), a = s.toString().split(".");
  return n[0] !== a[0] ? parseInt(n[0]) - parseInt(a[0]) : parseInt(n[1]) - parseInt(a[1]);
};
function qt(t) {
  const e = Array.isArray(t[0]) ? t.map(([i, s]) => ({ key: i, direction: s })) : t;
  return (i, s) => {
    for (const { key: n, direction: a } of e) {
      const r = ct(i, n, "first item"), o = ct(s, n, "second item");
      if (!(r === null || o === null) && r !== o)
        return a === "desc" ? r < o ? 1 : -1 : r < o ? -1 : 1;
    }
    return 0;
  };
}
function Mo(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s > n ? i : e;
  }) : null;
}
function Vf(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s < n ? i : e;
  }) : null;
}
const Zt = {
  // Dimension-based sorts
  WDLD: qt([
    ["w", "desc"],
    ["l", "desc"]
  ]),
  WALA: qt([
    ["w", "asc"],
    ["l", "asc"]
  ]),
  LDWD: qt([
    ["l", "desc"],
    ["w", "desc"]
  ]),
  LAWA: qt([
    ["l", "asc"],
    ["w", "asc"]
  ]),
  WD: qt([["w", "desc"]]),
  LD: qt([["l", "desc"]]),
  // ID-based sorts
  LDIDA: Ls(
    qt([["l", "desc"]]),
    Mt
  ),
  WDIDA: Ls(
    qt([["w", "desc"]]),
    Mt
  ),
  // Area-based sorts
  AD: (t, e) => -Mi(t, e),
  AA: Mi,
  AAID: Ls(
    Mi,
    Mt
  ),
  ADID: Ls(
    (t, e) => -Mi(t, e),
    Mt
  ),
  // ID sorts
  ID: Mt,
  IDDesc: (t, e) => -Mt(t, e),
  StockID: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    return !i || !s ? 0 : Mt(i, s);
  },
  StockIDAD: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s) return 0;
    const n = Mt(i, s);
    return n !== 0 ? n : -Mi(t, e);
  },
  // Position sorts
  YX: qt([
    ["y", "asc"],
    ["x", "asc"]
  ]),
  XY: qt([
    ["x", "asc"],
    ["y", "asc"]
  ]),
  // Placement order sorts
  placementOrder: (t, e) => {
    const i = ct(t, "placementOrder", "first item") ?? 0, s = ct(e, "placementOrder", "second item") ?? 0;
    return i - s;
  },
  typePlacementOrder: (t, e) => {
    const i = ct(t, "offcut", "first item"), s = ct(e, "offcut", "second item"), n = ct(t, "placementOrder", "first item") ?? 0, a = ct(e, "placementOrder", "second item") ?? 0;
    return i && !s ? 1 : !i && s ? -1 : n - a;
  },
  typeID: (t, e) => {
    const i = ct(t, "offcut", "first item"), s = ct(e, "offcut", "second item");
    return i && !s ? 1 : !i && s ? -1 : Mt(t, e);
  },
  stockIDTypePlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s) return 0;
    const n = Mt(i, s);
    if (n !== 0) return n;
    const a = ct(t, "offcut", "first item"), r = ct(e, "offcut", "second item");
    if (a && !r) return 1;
    if (!a && r) return -1;
    const o = ct(t, "placementOrder", "first item") ?? 0, l = ct(e, "placementOrder", "second item") ?? 0;
    return o - l;
  },
  offcutPlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i?.id || !s?.id) return 0;
    const n = Mt(i, s);
    if (n !== 0) return n;
    if ("placementOrder" in t && "placementOrder" in e) {
      const a = ct(t, "placementOrder", "first item") ?? 0, r = ct(e, "placementOrder", "second item") ?? 0;
      return a - r;
    }
    return 0;
  },
  groupPlacementOrder: (t, e) => {
    const i = ct(t, "placementOrder", "first item") ?? 0, s = ct(e, "placementOrder", "second item") ?? 0, n = i - s;
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
    if (Qs(t) && Qs(e) && t.aspect && e.aspect)
      return e.aspect - t.aspect;
    if (!("l" in t) || !("w" in t) || !("l" in e) || !("w" in e))
      return console.warn(ta.missingAspect), 0;
    const i = Math.max(Number(t.l), Number(t.w)) / Math.min(Number(t.l), Number(t.w));
    return Math.max(Number(e.l), Number(e.w)) / Math.min(Number(e.l), Number(e.w)) - i;
  },
  fillThenArea(t) {
    return (e, i) => !("l" in e) || !("w" in e) || !("l" in i) || !("w" in i) ? (console.warn(ta.missingLongSide), 0) : i[t] === e[t] ? -Mi(e, i) : parseFloat(String(i[t])) - parseFloat(String(e[t]));
  },
  // Utility functions
  getLargest: Mo,
  getSmallest: Vf
};
function Nf(t) {
  return Le(t) || ft(t) || ws(t);
}
function Gf(t, e, i) {
  if (!i) return !0;
  const s = e?.material?.toLowerCase(), n = t?.material?.toLowerCase();
  return !s && !n || s === n;
}
function qf(t, e, i) {
  return i ? !Oe(t.t) || !Oe(e.t) ? !1 : he.equalTo(K({ v: t.t }), K({ v: e.t })) : !0;
}
function zf(t, e, i) {
  return i?.stockType !== "linear" || !ft(t) && !Le(t) ? !0 : Ft(t, 0, e) && he.equalTo(K({ v: t.w }), K({ v: e.w })) || Ft(t, 1, e) && he.equalTo(K({ v: t.l }), K({ v: e.w }));
}
function Ro(t, e, i, s = 0) {
  const n = Le(t[0]), a = i.stockType;
  if (t.some((T) => Oe(T.stockLock) && T.stockLock.length))
    return { stockList: e, shapeList: t, unusableShapes: [], unusableStock: [], newIssues: [] };
  e = e.filter((T) => n || T.autoAdd === !0 || Oe(T.q) && Number(T.q) > 0);
  const o = e.some((T) => Oe(T.material)), l = e.some((T) => Oe(T.t)), c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), g = [];
  let k = s;
  for (const T of t) {
    const C = e.map((L, Y) => {
      const _ = Nf(T) && Ki(T, L, void 0, i), ce = Gf(T, L, o), z = qf(T, L, l), y = zf(T, L, i);
      return {
        stockItem: L,
        stockIndex: Y,
        fit: _,
        material: ce,
        thickness: z,
        width: y,
        // For this stock item, does it satisfy all requirements?
        satisfiesAll: _ && ce && z && (a !== "linear" || y)
      };
    });
    T.stockMatch = {
      fit: C.some((L) => L.fit),
      material: !o || C.some((L) => L.material),
      thickness: !l || C.some((L) => L.thickness),
      width: a !== "linear" || C.some((L) => L.width)
    };
    const D = C.filter((L) => L.satisfiesAll), x = D.length > 0;
    if (!n && x) {
      const L = D.map((Y) => Y.stockItem.parentId);
      T.stockLock = L, L.forEach((Y) => c.add(Y));
    }
    T.stockMatch.fit ? x || (o && !T.stockMatch.material && (h.add(T), g.push(new ue({
      category: ["part", "stock"],
      item: T,
      field: [["material"]],
      index: [k],
      message: "errors.validation.no_matching_stock_material"
    }))), l && !T.stockMatch.thickness && (h.add(T), g.push(new ue({
      category: ["part", "stock"],
      item: T,
      field: [["t"]],
      index: [k],
      message: "errors.validation.no_matching_stock_thickness"
    }))), a === "linear" && !T.stockMatch.width && (d.add(T), g.push(new ue({
      category: ["part", "stock"],
      item: T,
      field: [["w"]],
      index: [k],
      message: "errors.validation.no_matching_stock_width"
    }))), T.stockMatch.material && T.stockMatch.thickness && (a !== "linear" || T.stockMatch.width) && (h.add(T), g.push(new ue({
      category: ["part", "stock"],
      item: T,
      field: [["material"], ["t"]],
      index: [k],
      message: "errors.validation.no_stock_matches_all_requirements"
    })))) : (u.add(T), g.push(new ue({
      category: ["part", "stock"],
      item: T,
      field: [["l"], ["w"]],
      index: [k],
      message: "errors.validation.will_not_fit"
    }))), k++;
  }
  t.forEach((T) => T.stockMatch = null);
  let M, N;
  return n ? (M = t.filter((T) => u.has(T) || d.has(T) || h.has(T)).sort(Zt.ID), N = []) : (M = t.filter((T) => u.has(T) || d.has(T) || h.has(T) || !T.stockLock || !T.stockLock.length).sort(Zt.ID), N = e.filter((T) => !c.has(T.parentId)).sort(Zt.ID), e = e.filter((T) => Bt(T)).filter((T) => c.has(T.parentId)), t = t.filter((T) => !u.has(T) && !d.has(T) && !h.has(T) && T?.stockLock?.length)), {
    stockList: e,
    unusableStock: N,
    shapeList: t,
    unusableShapes: M,
    newIssues: g
  };
}
function Wf(t) {
  return t?.issues?.length > 0;
}
const Hf = ({
  item: t,
  inputStockList: e,
  saw: i,
  partTrim: s = 0,
  index: n
}) => {
  const a = [], r = i.stockType, o = Ye(t, "q"), l = Ye(t, "l"), c = Ye(t, "w");
  return !o || !l || !c || ("applyPartTrim" in t && typeof t.applyPartTrim == "function" && t.applyPartTrim(s, r), Wf(t)) || Ro([t], e, i, n).newIssues.forEach((d) => {
    a.push(d);
  }), a;
}, Uf = ({
  item: t,
  partTrim: e,
  index: i,
  isWarning: s = !1
}) => {
  const n = [];
  if (!e) return n;
  const a = Ye(t, "l"), r = Ye(t, "w");
  if (!a || !r) return n;
  try {
    const o = K({ v: e }), l = K({ v: a }), c = K({ v: r }), u = l - o * 2, d = c - o * 2;
    (u <= 0 || d <= 0) && new ue({
      item: t,
      message: "errors.trim.too_much",
      params: {
        0: "part",
        // positional (legacy)
        1: o,
        // positional (legacy)
        2: `${u}x${d}`,
        // positional (legacy)
        item: "part",
        // named (new)
        trimValue: o,
        // named (new)
        result: `${u}x${d}`
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
}, Yf = ({
  item: t,
  index: e,
  isWarning: i = !1,
  category: s = []
}) => {
  const n = [], a = Ye(t, "l"), r = Ye(t, "w"), o = Ye(t, "trim");
  if (!a || !r || !o) return n;
  if ((!Bt(t) || Bt(t) && !("trimmed" in t && t.trimmed)) && typeof o == "object" && o !== null)
    try {
      const c = K({ v: a }), u = K({ v: r }), d = (M) => {
        if (M == null) return 0;
        if (typeof M == "number" || typeof M == "string")
          try {
            return K({ v: M }) || 0;
          } catch {
            return 0;
          }
        return 0;
      }, h = {
        w1: d(Ye(o, "w1")),
        w2: d(Ye(o, "w2")),
        l1: d(Ye(o, "l1")),
        l2: d(Ye(o, "l2"))
      }, g = h.w1 + h.w2, k = h.l1 + h.l2;
      g >= c && new ue({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${nt("w1").toUpperCase()} + ${nt("w2").toUpperCase()}`,
          // positional (legacy)
          1: nt("l"),
          // positional (legacy)
          2: c,
          // positional (legacy)
          trimFields: `${nt("l1", { returnKey: !0 })} + ${nt("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: nt("l", { returnKey: !0 }),
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
          0: `${nt("l1").toUpperCase()} + ${nt("l2").toUpperCase()}`,
          // positional (legacy)
          1: nt("w"),
          // positional (legacy)
          2: u,
          // positional (legacy)
          trimFields: `${nt("l1", { returnKey: !0 })} + ${nt("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: nt("w", { returnKey: !0 }),
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
}, yt = {
  // Dimensions
  x: Ff,
  y: $f,
  l: Df,
  w: Ef,
  t: Mf,
  q: Rf,
  // Trim
  trim: Yf,
  partTrim: Uf,
  // Custom
  customData: Of,
  banding: Tf,
  orientationLock: Cf,
  grain: Af,
  machining: Lf,
  // Stock
  stockMatch: Hf,
  // Groups
  groupShapeCount: _f,
  groupOrientationLock: jf,
  groupDimensions: Bf,
  groupQuantity: Eo
};
class en extends Oa {
  static schema = Kn;
  static computedProperties = lo;
  static defaults = Kn.parse({});
  constructor(e = {}) {
    const i = en.preprocessData(e);
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
      const n = yt.q({ item: e, index: e?.index });
      i.push(...n);
    }
    const s = yt.grain({ item: e, index: e?.index });
    i.push(...s), this.issues.push(...i.filter((n) => n));
  }
  /**
    * Create stock instance with live objects
    */
  static create(e) {
    const i = { ...e.data };
    e.saw && (i.saw = e.saw);
    const s = new en(i);
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
    const s = Pf(e.filter((a) => a.added && a.stock.id === this.id), "x"), n = s.x + s.l;
    if (n > this.l) throw new Error("Furthest shape position exceeds stock length");
    return he.equalTo(n, this.l) ? n : n + i;
  }
}
const oi = ["l1", "l2", "w1", "w2"], Kf = ["a", "b", "c", "d"], Ot = [...oi, ...Kf], bt = ["a", "b"];
class tn extends at {
  // Required: Define schema and computed properties for SchemaClass
  static schema = hn;
  static computedProperties = xa;
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
class Lt extends tn {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = ko;
  static computedProperties = fd;
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
    if (!i) return !1;
    if (typeof i == "object" && !Array.isArray(i)) {
      const s = i, n = Nt("finish");
      if (n && n.labels && n.labels.length > 0) {
        const r = n.labels.map((o) => {
          const l = s[o];
          return typeof l == "string" ? l : typeof l == "boolean" && l ? "Y" : "";
        }).filter((o) => o !== "");
        return r.length > 0 ? r.join("|") : !1;
      }
      const a = Object.values(s).map((r) => typeof r == "string" ? r : typeof r == "boolean" && r ? "Y" : "").filter((r) => r !== "");
      return a.length > 0 ? a.join("|") : !1;
    }
    return i;
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
    return new Lt(e);
  }
  /**
   * Create empty finish
   */
  static empty() {
    return new Lt();
  }
  /**
   * Create with both faces
   */
  static bothFaces(e = !0) {
    const i = new Lt();
    return i.setBothFaces(e), i;
  }
  /**
   * Create with front face only
   */
  static frontOnly(e = !0) {
    const i = new Lt();
    return i.setFace("a", e), i;
  }
  /**
   * Create with back face only
   */
  static backOnly(e = !0) {
    const i = new Lt();
    return i.setFace("b", e), i;
  }
}
class mi extends tn {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = Oo;
  static computedProperties = Jd;
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
    if (!i) return !1;
    if (typeof i == "object" && !Array.isArray(i)) {
      const s = i, n = Nt("planing");
      if (n && n.labels && n.labels.length > 0) {
        const r = n.labels.map((o) => {
          const l = s[o];
          return typeof l == "string" ? l : typeof l == "boolean" && l ? "Y" : "";
        }).filter((o) => o !== "");
        return r.length > 0 ? r.join("|") : !1;
      }
      const a = Object.values(s).map((r) => typeof r == "string" ? r : typeof r == "boolean" && r ? "Y" : "").filter((r) => r !== "");
      return a.length > 0 ? a.join("|") : !1;
    }
    return i;
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
      for (const s of Ot)
        this.sides[s] = !1;
    }
    i === !1 || i === "" || i === void 0 ? this.sides[e] = !1 : this.sides[e] = i;
  }
  /**
   * Get planing for a specific side
   */
  getSide(e) {
    const i = this.sides?.[e];
    if (!i) return !1;
    if (typeof i == "object" && !Array.isArray(i)) {
      const s = i, n = Nt("planing");
      if (n && n.labels && n.labels.length > 0) {
        const r = n.labels.map((o) => {
          const l = s[o];
          return typeof l == "string" ? l : typeof l == "boolean" && l ? "Y" : "";
        }).filter((o) => o !== "");
        return r.length > 0 ? r.join("|") : !1;
      }
      const a = Object.values(s).map((r) => typeof r == "string" ? r : typeof r == "boolean" && r ? "Y" : "").filter((r) => r !== "");
      return a.length > 0 ? a.join("|") : !1;
    }
    return i;
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
      for (const e of Ot)
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
    for (const i of Ot)
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
      for (const a of Ot)
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
    return new mi(e);
  }
  /**
   * Create empty planing
   */
  static empty() {
    return new mi();
  }
  /**
   * Create with all faces and sides
   */
  static full(e = !0) {
    const i = new mi();
    return i.setAllFaces(e), i.setAllSides(e), i;
  }
  /**
   * Create with faces only
   */
  static facesOnly(e = !0) {
    const i = new mi();
    return i.setAllFaces(e), i;
  }
  /**
   * Create with sides only
   */
  static sidesOnly(e = !0) {
    const i = new mi();
    return i.setAllSides(e), i;
  }
}
class st extends at {
  // Zod schema for validation and serialization
  static schema = ud;
  static computedProperties = dd;
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
    const i = { ...e }, s = (n) => {
      if (!n || typeof n != "object" || !("sides" in n)) return;
      const a = n.sides;
      if (!a || typeof a != "object") return;
      ("x1" in a || "x2" in a || "y1" in a || "y2" in a) && (n.sides = {
        l1: a.x1 ?? a.l1,
        l2: a.x2 ?? a.l2,
        w1: a.y1 ?? a.w1,
        w2: a.y2 ?? a.w2
      });
    };
    s(i.banding), s(i.finish), s(i.planing), super(i), this.validate();
  }
  /**
   * Validate all extras
   * @param shape Optional shape for context-aware validation
   */
  validate(e) {
    const i = [];
    if (fi(this.banding)) {
      const s = this.banding.validate(e);
      i.push(...s);
    }
    if (Qt(this.finish)) {
      const s = this.finish.validate(e);
      i.push(...s);
    }
    if (ei(this.planing)) {
      const s = this.planing.validate(e);
      i.push(...s);
    }
    if (ei(this.planing) && Qt(this.finish) && e?.t) {
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
    return fi(this.banding) && (i += this.banding.getCost(e)), Qt(this.finish) && (i += this.finish.getCost(e)), ei(this.planing) && (i += this.planing.getCost(e)), i;
  }
  /**
   * Get human-readable description of all extras
   */
  getDescription() {
    const e = [];
    return fi(this.banding) && this.banding.hasValues() && e.push(this.banding.getDescription()), Qt(this.finish) && this.finish.hasValues() && e.push(this.finish.getDescription()), ei(this.planing) && this.planing.hasValues() && e.push(this.planing.getDescription()), e.length > 0 ? e.join("; ") : "No extras";
  }
  /**
   * Check if any extras are applied
   */
  hasExtras() {
    return !!(fi(this.banding) && this.banding.hasValues() || Qt(this.finish) && this.finish.hasValues() || ei(this.planing) && this.planing.hasValues());
  }
  /**
   * Clear all extras
   */
  clear() {
    fi(this.banding) && this.banding.clear(), Qt(this.finish) && this.finish.clear(), ei(this.planing) && this.planing.clear();
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
    e ? e instanceof Lt ? this.finish = e : this.finish = new Lt(e) : this.finish = void 0;
  }
  /**
   * Set planing
   */
  setPlaning(e) {
    e ? e instanceof mi ? this.planing = e : this.planing = new mi(e) : this.planing = void 0;
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
    return new st(e);
  }
  /**
   * Create empty extras container
   */
  static empty() {
    return new st();
  }
  /**
   * Create with specific extras
   */
  static create(e) {
    return new st(e);
  }
  /**
   * Check if any extras are applicable to shape
   * Used for UI validation to determine if extras tab should be enabled
   */
  isApplicable(e) {
    return !!(fi(this.banding) && this.banding.isApplicable(e) || Qt(this.finish) && this.finish.isApplicable(e) || ei(this.planing) && this.planing.isApplicable(e));
  }
  /**
   * Get summary of active extras
   */
  getSummary() {
    return {
      hasBanding: fi(this.banding) && this.banding.hasValues() || !1,
      hasFinish: Qt(this.finish) && this.finish.hasValues() || !1,
      hasPlaning: ei(this.planing) && this.planing.hasValues() || !1,
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
    return s ? fi(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" ? Object.keys(s.sides).some((n) => {
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
    return s ? Qt(s) && typeof s.hasValues == "function" ? s.hasValues() : s.faces && typeof s.faces == "object" ? Object.keys(s.faces).some((n) => {
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
    return s ? ei(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" && Object.keys(s.sides).some((a) => {
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
    return s ? $u(s) && typeof s.hasValues == "function" ? s.hasValues() : s.images && Array.isArray(s.images) ? s.images.length > 0 : !1 : !1;
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
          return st.hasBanding(e);
        case "finish":
          return st.hasFinish(e);
        case "planing":
          return st.hasPlaning(e);
        case "imageUpload":
          return st.hasImageUpload(e);
      }
    return st.hasBanding(e) || st.hasFinish(e) || st.hasPlaning(e) || st.hasImageUpload(e);
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
    return st.hasBanding(e) && i.push("banding"), st.hasFinish(e) && i.push("finish"), st.hasPlaning(e) && i.push("planing"), i;
  }
}
const ur = !1;
function Zf() {
  return {
    banding: {
      scope: ["sides"],
      sides: oi.map((t) => `side.${t}`)
      // Only use main sides (l1/l2/w1/w2), not corners
    },
    finish: {
      scope: ["faces"],
      faces: bt.map((t) => `face.${t}`)
    },
    planing: {
      scope: ["faces", "sides"],
      faces: bt.map((t) => `face.${t}`),
      sides: oi.map((t) => `side.${t}`),
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
      sides: Ot.map((t) => `side.${t}`)
    }
    /* imageUpload: {
    	scope: [ 'sides' ],
    	sides: ALL_SIDES.map( side => `side.${side}` as const )
    } */
  };
}
const Jf = Zf(), Xt = (t) => Jf[t] || {
  scope: ["sides"],
  sides: Ot.map((e) => `side.${e}`)
}, ia = (t) => {
  const e = Xt(t), i = [];
  return e.faces && i.push(...e.faces), e.sides && i.push(...e.sides), i;
}, gw = (t) => (Xt(t).faces || []).map((i) => {
  const s = ki(i);
  return s.scope === "face" ? s.key : void 0;
}).filter((i) => i !== void 0), mw = (t) => (Xt(t).sides || []).map((i) => {
  const s = ki(i);
  return s.scope === "side" ? s.key : void 0;
}).filter((i) => typeof i == "string"), ki = (t) => {
  const e = t.split(".");
  if (e.length !== 2 || e[0] !== "face" && e[0] !== "side")
    throw new Error(`Invalid ExtraLocation format: ${t}. Must be 'face.X' or 'side.X'`);
  const i = e[0], s = e[1];
  if (i === "face" && !bt.includes(s))
    throw new Error(`Invalid face key '${s}' in location '${t}'`);
  if (i === "side" && !Ot.includes(s))
    throw new Error(`Invalid side key '${s}' in location '${t}'`);
  return {
    scope: i,
    key: s,
    original: t
  };
}, dr = (t) => ki(t).scope, _o = (t) => Xt(t).scope.includes("faces"), jo = (t) => Xt(t).scope.includes("sides"), yw = (t) => {
  const e = Xt(t);
  return e.scope.includes("faces") && e.scope.includes("sides");
}, Xf = (t, e) => {
  if (t.length === 1 && t[0].length === 1 && t[0][0] === !0)
    return "boolean";
  const i = t.flat().filter((a) => typeof a == "string"), n = [.../* @__PURE__ */ new Set([...i, ...e || []])].length;
  return n === 0 ? "multiple" : n === 1 ? "single" : "multiple";
}, bw = (t, e = "") => {
  if (typeof t == "string") return t;
  if (typeof t == "boolean") return t ? "Y" : e;
  if (typeof t == "object" && t !== null && !Array.isArray(t)) {
    const i = Object.values(t).map((s) => typeof s == "string" ? s : typeof s == "boolean" && s ? "Y" : "").filter((s) => s !== "");
    return i.length > 0 ? i.join("|") : e;
  }
  return e;
}, Qf = (t, e) => {
  const i = t;
  i.extras || (i.extras = {}), i.extras[e] || (i.extras[e] = {});
  const s = i.extras[e];
  _o(e) && (s.faces || (s.faces = {})), jo(e) && (s.sides || (s.sides = {}));
}, eh = (t, e, i) => {
  Qf(t, e);
  const n = t.extras[e], { scope: a } = ki(i);
  return a === "face" ? {
    extraContainer: n.faces || {}
  } : {
    extraContainer: n.sides || {}
  };
}, yi = (t, e, i) => {
  const s = Zi(t, e, i);
  if (s == null || s === !1 || s === "")
    return !1;
  if (typeof s != "object" || Array.isArray(s))
    return typeof s == "boolean" ? s : typeof s == "string" ? s.trim() !== "" : !!s;
  const n = Nt(e);
  if (!n || !n.labels || n.labels.length === 0)
    return !!s;
  const a = s, r = [];
  for (const l of n.labels) {
    const c = a[l];
    !c || c === "" || r.push(String(c).trim());
  }
  if (r.length === 0)
    return !1;
  const o = r.join("|");
  return n.pricing && o in n.pricing ? !0 : n.labels.every((l) => {
    const c = a[l];
    return !(c == null || c === !1 || c === "" || typeof c == "string" && c.trim() === "");
  });
}, th = (t, e, i, s, n) => {
  const a = Nt(e);
  if (a) {
    const r = Zi(t, e, i);
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
}, vw = (t, e, i, s, n, a, r) => {
  if (Nt(e))
    switch (lh(e)) {
      case "boolean":
        hs(t, e, i, !!n);
        break;
      case "string":
        hs(t, e, i, String(n));
        break;
      case "object":
        {
          let c = Zi(t, e, i) || {};
          typeof c != "object" && (c = {}), c[s] = n, hs(t, e, i, c);
        }
        break;
    }
}, ih = (t, e, i, s) => {
  oh(t, e, i);
}, ww = (t, e, i, s, n) => {
  if (i.length === 0) return null;
  const a = i.map((r) => th(t, e, r, s));
  if (n === "boolean" || n === "single") {
    const r = a.every((l) => !!l), o = a.every((l) => !l);
    return r ? !0 : o ? !1 : null;
  }
  if (n === "multiple") {
    const r = a[0];
    return a.every((l) => l === r) ? r : null;
  }
  return null;
}, Sw = (t, e, i, s) => {
  i.forEach((n) => {
    ih(t, e, n);
  });
}, Bn = (t, e, i, s, n, a) => {
  const r = Zi(t, e, i), o = [];
  if (r && a?.length)
    if (typeof r == "object" && !Array.isArray(r)) {
      const c = r;
      for (const u of a) {
        const d = c[u];
        if (!d) {
          o.push("");
          continue;
        }
        if (d === !0) {
          const h = Nt(e), g = h?.labels.indexOf(u) ?? -1, k = g !== -1 && h?.options[g], M = k?.length === 1 ? k[0] : u;
          o.push(M);
          continue;
        }
        o.push(String(d));
      }
    } else if (typeof r == "string") {
      const c = r.split("|");
      a.forEach((u, d) => {
        o.push(c[d] || "");
      });
    } else
      o.push(String(r));
  else if (r)
    if (typeof r == "string" && a?.length) {
      const c = r.split("|");
      a.forEach((u, d) => {
        o.push(c[d] || "");
      });
    } else
      o.push(String(r));
  const l = o.filter((c) => c && typeof c == "string" && c.trim() !== "");
  if (!Array.isArray(l) || !l.length)
    return !1;
  if (!s)
    return 0;
  try {
    const c = l.map((d, h) => {
      if (typeof d == "boolean" && d === !0 && n) {
        const g = n[h];
        if (g && g.length === 1)
          return String(g[0]);
      }
      return String(d);
    });
    return s(e, c);
  } catch (c) {
    return console.error("Error calculating extras price:", c), !1;
  }
}, xw = (t, e, i) => {
  const s = /* @__PURE__ */ new Set(), n = Xt(e);
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
}, kw = (t, e, i, s) => {
  const n = s[0], a = Xt(e);
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
}, Iw = (t, e, i) => {
  const s = Xt(e);
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
}, sh = (t, e, i, s = !1) => {
  const n = Xt(e), a = t;
  a.extras[e] || (a.extras[e] = {});
  const r = a.extras[e];
  r.options || (r.options = {});
  const o = r.options;
  if (_o(e) && (r.faces || (r.faces = {}), o.faces || (o.faces = {})), jo(e) && (r.sides || (r.sides = {}), o.sides || (o.sides = {})), s) {
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
}, Ii = (t, e, i, s = [], n = []) => {
  const a = Xf(i, n);
  sh(t, e, a === "boolean" ? [] : s, a === "boolean");
}, nh = (t, e, i, s) => {
  if (!i || !Object.keys(i).length)
    return { valid: !0, messages: [], incompleteLocations: [] };
  const n = [], a = [], r = ia(e), o = Object.keys(i), l = Math.max(...o.map((u) => u.split("|").length));
  if (l <= 1)
    return { valid: !0, messages: [], incompleteLocations: [] };
  for (const u of r) {
    const { extraContainer: d } = eh(t, e, u), { key: h } = ki(u), g = d[h];
    if (!g)
      continue;
    let k;
    typeof g == "string" ? k = g.includes("|") ? g.split("|") : [g] : typeof g == "boolean" ? k = g ? ["true"] : [] : typeof g == "object" && !Array.isArray(g) && g !== null ? k = Object.values(g).filter((D) => D != null && D !== "" && D !== !1).map((D) => String(D)) : k = [String(g)];
    const M = k.length;
    if (M === 0)
      continue;
    let N = !1, T = !1, C = "";
    if (M > 0) {
      if (s)
        try {
          const D = k.filter((L) => L.trim() !== ""), x = s(e, D);
          T = x !== null && x > 0;
        } catch (D) {
          console.error("[validateExtrasCompleteness] Error getting price:", D), T = !1;
        }
      else {
        const D = k.join("|");
        T = o.some((x) => x === D || x.startsWith(D + "|"));
      }
      if (M < l) {
        N = !0;
        const D = k.join("|");
        if (o.some((L) => L.startsWith(D + "|")) && !T) {
          const L = l - M, Y = k.join(", ");
          C = `${e} selection incomplete for ${u}. Selected: "${Y}" but ${L} more level${L > 1 ? "s" : ""} required.`;
        }
      }
      !T && !N && (C = `${e} selection invalid for ${u}. No pricing available for "${k.join(", ")}".`);
    }
    M > 0 && !T && (a.push(u), n.push(C || `${e} pricing incomplete for ${u}: ${M}/${l} levels selected`));
  }
  return { valid: a.length === 0, messages: n, incompleteLocations: a };
}, ah = (t, e, i) => {
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
}, rh = (t, e, i) => {
  if (i)
    return i;
  const s = e.dimension === "t" ? "thickness" : e.dimension === "longSide" ? "long side" : "short side", n = e.constraint === "min" ? "minimum" : "maximum";
  return `${t.charAt(0).toUpperCase() + t.slice(1)} requires ${s} ${n} of ${e.limit} (current: ${e.value})`;
};
let sa = null;
const Pw = (t) => {
  sa = t;
}, Nt = (t) => sa ? sa.getExtrasConfig(t) : null, hs = (t, e, i, s) => {
  t.extras || (t.extras = {}), t.extras[e] || (t.extras[e] = { sides: {}, faces: {} });
  const { scope: n, key: a } = ki(i), r = n === "face" ? t.extras[e].faces : t.extras[e].sides;
  r[a] = s;
}, Zi = (t, e, i) => {
  const { scope: s, key: n } = ki(i), a = s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides;
  return a?.[n]?.value || a?.[n] || null;
}, oh = (t, e, i) => {
  const { scope: s, key: n } = ki(i), a = s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides;
  a && n in a && delete a[n];
}, lh = (t) => {
  const e = Nt(t);
  return !e || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 1 && e.options[0][0] === !0 || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 0 ? "boolean" : e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].every((i) => typeof i == "string") ? "string" : e.options.length > 1 ? "object" : "string";
};
class _t extends tn {
  // Required: Define schema and computed properties for SchemaClass
  static schema = xo;
  static computedProperties = {
    ...tn.computedProperties,
    ...id
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
      oi.includes(s) || i.push(new ue({
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
    if (!i) return !1;
    if (typeof i == "object" && !Array.isArray(i)) {
      const s = i, n = Nt("banding");
      if (n && n.labels && n.labels.length > 0) {
        const r = n.labels.map((o) => {
          const l = s[o];
          return typeof l == "string" ? l : typeof l == "boolean" && l ? "Y" : "";
        }).filter((o) => o !== "");
        return r.length > 0 ? r.join("|") : !1;
      }
      const a = Object.values(s).map((r) => typeof r == "string" ? r : typeof r == "boolean" && r ? "Y" : "").filter((r) => r !== "");
      return a.length > 0 ? a.join("|") : !1;
    }
    return i;
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
    for (const i of oi)
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
class Hi extends at {
  // Zod schema for validation and serialization
  static schema = nd;
  static computedProperties = ad;
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
    return new Hi(e);
  }
  /**
   * Create a radius corner
   */
  static radius(e, i) {
    return new Hi({ type: "radius", size: e, index: i });
  }
  /**
   * Create a bevel corner
   */
  static bevel(e, i) {
    return new Hi({ type: "bevel", size: e, index: i });
  }
}
class Ut extends at {
  // Zod schema for validation and serialization
  static schema = yd;
  static computedProperties = bd;
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
    return new Ut({ x: e, y: i, diameter: s, face: n });
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new Ut(e);
  }
  get area() {
    const e = this.diameter / 2;
    return Math.PI * e * e;
  }
}
class sn extends at {
  // Zod schema for validation and serialization
  static schema = pd;
  static computedProperties = gd;
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
    return this.generateHoles(i, s).map((a) => new Ut(a));
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
      s.push(new Ut({
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
    return new sn(e);
  }
}
class Bo extends at {
  // Validation properties (issues, warnings) are inherited from validationBasePropertiesSchema
  // via sawPropertiesSchema which extends it - they are initialized automatically
  // when the Zod schema is parsed in the constructor
  // isValid is also provided as a computed property from validationBaseComputedProperties
  // Zod schema for validation and serialization
  static schema = Qn;
  static computedProperties = ef;
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
  static defaults = Qn.parse({});
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
function Fa(t, e, i = "decimal") {
  const s = { ...t };
  for (const [n, a] of Object.entries(e)) {
    const r = t[n];
    switch (a.type) {
      case "number":
        r != null ? s[n] = typeof r == "string" ? K({ v: r, nf: i }) : r : r === null && (s[n] = null);
        break;
      case "trim":
        if (r) {
          const o = {};
          for (const [l, c] of Object.entries(r))
            o[l] = typeof c == "string" ? K({ v: c, nf: i }) : c;
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
const ch = {
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
}, uh = {
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
}, dh = {
  // Numeric field that needs conversion
  bladeWidth: { type: "number" },
  // Stack height should ensure it's a number
  stackHeight: { type: "transform", transform: (t) => typeof t == "number" ? t : t ? Number(t) : 100 },
  // Convert options field to handle minSpacing string/number conversions
  options: {
    type: "transform",
    transform: (t) => ({
      ...t,
      minSpacing: typeof t?.minSpacing == "string" ? K({ v: t.minSpacing, nf: "decimal" }) : t?.minSpacing ?? 0,
      minSpacingDimension: {
        dimension: typeof t?.minSpacingDimension?.dimension == "string" ? K({ v: t.minSpacingDimension.dimension, nf: "decimal" }) : t?.minSpacingDimension?.dimension ?? 0,
        minSpacing: typeof t?.minSpacingDimension?.minSpacing == "string" ? K({ v: t.minSpacingDimension.minSpacing, nf: "decimal" }) : t?.minSpacingDimension?.minSpacing ?? 0
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
function nn() {
  this.issues = [], this.warnings && (this.warnings = []);
}
function Gi(t) {
  t.type === "warning" && this.warnings ? this.warnings.push(t) : this.issues.push(t);
}
function Ji(t) {
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
function fr(t, e) {
  const i = t.safeParse(e);
  return i.success ? [] : Ji(i.error);
}
const Vo = {
  clearValidation: nn,
  addIssue: Gi,
  validateWithSchema: fr,
  zodErrorsToIssues: Ji,
  /**
   * Run standard validation flow
   */
  runValidation(t, e = {}) {
    return nn.call(this), e.skipSchemaValidation || fr(t, this).forEach((s) => Gi.call(this, s)), this.issues || [];
  }
};
class si extends at {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Ti;
  static computedProperties = Bd;
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}) {
    super(e);
    const i = Jn(this.stockType);
    i.includes(this.cutType) || (this.cutType = i.length > 0 ? i[0] : void 0);
    const s = Xn(this.stockType, this.cutType);
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
    if (nn.call(this), e?.skipSchemaValidation || Vo.runValidation.call(
      this,
      Ti,
      e
    ), !e?.skipBusinessValidation) {
      if (this.bladeWidth !== void 0 && this.bladeWidth !== null) {
        const i = K({ v: this.bladeWidth });
        i === null || isNaN(i) || i < 0 ? Gi.call(this, new ue({
          message: "Blade width must be a non-negative number",
          type: "error",
          field: [["bladeWidth"]]
        })) : i > 100 && Gi.call(this, new ue({
          message: "Blade width seems unusually large (> 100)",
          type: "warning",
          field: [["bladeWidth"]]
        }));
      }
      this.stackHeight !== void 0 && this.stackHeight !== null && (this.stackHeight < 1 ? Gi.call(this, new ue({
        message: "Stack height must be at least 1",
        type: "error",
        field: [["stackHeight"]]
      })) : this.stackHeight > 1e3 && Gi.call(this, new ue({
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
    const n = Jn(this.stockType);
    n.includes(this.cutType) || (this.cutType = n.length > 0 ? n[0] : void 0);
    const a = i !== this.stockType, r = s !== this.cutType;
    if (a || r) {
      const o = Xn(this.stockType, this.cutType);
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
    const e = this.toData(), i = Fa(
      e,
      dh
    );
    return new Bo(i);
  }
}
const No = Ot, hr = bt;
oi.map((t) => `side.${t}`), hr.map((t) => `face.${t}`), hr.map((t) => `face.${t}`), No.map((t) => `side.${t}`);
let fh = class na extends at {
  // Zod schema for validation and serialization
  static schema = Yd;
  static computedProperties = Kd;
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
    this.holes.push(e instanceof Ut ? e : new Ut(e)), this.validate();
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
    this.hingeHoles.push(e instanceof sn ? e : new sn(e)), this.validate();
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
    const i = e instanceof Hi ? e : new Hi(e);
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
        i.push(a instanceof Ut ? a : new Ut(a));
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
    return new na();
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new na(e);
  }
  get allHoles() {
    const e = [...this.holes];
    return this.hingeHoles.forEach((i) => {
      this.generateHingeHoles(i, null).forEach((n) => {
        e.push(new Ut(n));
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
function hh(t, e, i) {
  return i ? typeof t == "number" ? isNaN(t) ? null : t : typeof t == "string" ? t : null : e === "decimal" ? t ? K({ v: t, nf: "decimal" }) : null : t;
}
function ph(t, e, i, s = !1) {
  const n = s ? Object.fromEntries(oi.map((o) => [o, 0])) : { l1: 0, l2: 0, w1: 0, w2: 0 };
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
    l != null && (n[o] = K({ v: l, nf: e }));
  }), n;
}
class Go extends at {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Js;
  static computedProperties = Ca;
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
      s[r] === null || s[r] === void 0 ? delete s[r] : s[r] !== void 0 && (s[r] = hh(s[r], i, n), s[r] === null && delete s[r]);
    s.name?.length ? s.name = _u(s.name)?.toUpperCase() : s.name = "", s.material ? s.material = s.material.trim().toUpperCase() : s.material = "", typeof s.notes == "string" ? s.notes = s.notes.replace(/,/g, " ") : s.notes = "", s.trim && (s.trim = ph(s.trim, i, n, !0)), super(s), this.issues || (this.issues = []), this.warnings || (this.warnings = []);
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
    return nn.call(this), e?.skipSchemaValidation || Vo.runValidation.call(
      this,
      Js,
      e
    ), this.issues;
  }
  // isValid is provided as a computed property from validationBaseComputedProperties
  /**
   * Get trimmed dimensions
   */
  get trimmedDimensions() {
    const e = this.longSide, i = this.shortSide, s = K({ v: this.trim.l1 }) ?? 0, n = K({ v: this.trim.l2 }) ?? 0, a = K({ v: this.trim.w1 }) ?? 0, r = K({ v: this.trim.w2 }) ?? 0;
    return {
      name: this.name,
      id: this.id,
      autoId: this.autoId,
      l: e - (a + r),
      w: i - (s + n)
    };
  }
}
class cs extends Go {
  // Required: Define schema and computed properties for SchemaClass
  // Use getters to defer schema access and avoid circular dependency
  static get schema() {
    return vi;
  }
  static get computedProperties() {
    return Wd;
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
    this.extras || (this.extras = new st()), this.extras.banding = e;
  }
  get finish() {
    return this.extras?.finish;
  }
  set finish(e) {
    this.extras || (this.extras = new st()), this.extras.finish = e;
  }
  get planing() {
    return this.extras?.planing;
  }
  set planing(e) {
    this.extras || (this.extras = new st()), this.extras.planing = e;
  }
  get imageUpload() {
    return this.extras?.imageUpload;
  }
  set imageUpload(e) {
    this.extras || (this.extras = new st()), this.extras.imageUpload = e;
  }
  // Note: Options getters/setters removed - options now centralized in CalculationData.extrasOptions
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}, i = "decimal") {
    const s = {
      ...e,
      // orientationLock transform is now handled by Zod schema
      machining: e.machining || new fh({
        holes: [],
        hingeHoles: [],
        corners: []
      }),
      extras: e.extras || new st()
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
      if (e = K({ v: e }), this.trim) {
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
      }, {}), d = vi.pick(c).safeParse(this.toData());
      if (!d.success) {
        const h = Ji(d.error);
        this.issues.push(...h);
      }
    } else {
      this.issues.length = 0, this.warnings.length = 0;
      const l = vi.safeParse(this.toData());
      if (!l.success) {
        const c = Ji(l.error);
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
    r("l") && yt.l({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), r("w") && yt.w({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), r("t") && yt.t({
      item: this,
      index: s ?? this.index,
      category: ["part"],
      saw: e.saw
    }), r("q") && yt.q({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), r("trim") && yt.trim({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), !n && i.length > 0, r("customData") && yt.customData({
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
    const i = Fa(
      this.toData(),
      ch,
      e
    );
    return new vn(i);
  }
  changeStockType(e) {
    switch (e) {
      case "sheet":
      case "roll":
        this.orientationLock = "", e === "roll" && (this.t = null);
        break;
      case "linear":
        this.orientationLock = "", this.banding = Object.fromEntries(
          No.map((i) => [i, !1])
        );
        break;
    }
  }
}
class Fs extends Go {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Kt;
  static computedProperties = Hd;
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
      const d = e.fields.reduce((h, g) => {
        const k = g.split(".")[0];
        return h[k] = !0, h;
      }, {});
      try {
        const h = Kt.pick(d);
        console.log("[InputStock.validate] Created partial schema for fields:", Object.keys(d));
        const g = h.safeParse(u);
        if (console.log("[InputStock.validate] Validation result:", g.success ? "SUCCESS" : "FAILED"), g.success)
          console.log("[InputStock.validate] No validation errors found");
        else {
          console.log("[InputStock.validate] Validation errors:", g.error.issues);
          const k = Ji(g.error);
          this.issues = [...this.issues, ...k];
        }
      } catch (h) {
        console.warn(`Failed to validate fields ${e.fields.join(", ")}:`, h);
      }
      this.isNew && (console.log("[InputStock.validate] Clearing isNew flag"), this.isNew = !1);
    } else {
      this.issues = [], this.warnings = [];
      const c = Kt.safeParse(this.toData());
      if (!c.success) {
        const u = Ji(c.error);
        this.issues = u;
      }
    }
    if (e?.skipBusinessValidation)
      return this.issues;
    const a = e?.fields, r = (c) => !a || a.includes(c);
    ["l", "w", "t"].forEach((c) => {
      r(c) && yt[c]({
        item: this,
        saw: s,
        index: n ?? this.index,
        category: ["stock"]
      });
    }), r("grain") && yt.grain({
      item: this,
      index: n ?? this.index,
      category: ["stock"]
    }), r("trim") && yt.trim({
      item: this,
      index: n ?? this.index,
      category: ["stock"]
    }), r("q") && yt.q({
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
    const a = Fa(
      s,
      uh,
      e
    );
    return (i || this.saw) && (a.saw = i || this.saw), new en(a);
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
class qo extends at {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Aa;
  static computedProperties = Ud;
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
    this.clearValidation(), e.q !== void 0 && yt.q({ item: e, index: "index" in e && typeof e.index == "number" ? e.index : 0 }).filter((s) => s).forEach((s) => this.addIssue(s));
  }
  /**
    * Validate with actual shape data
    */
  validateWithShapes(e = []) {
    if (!e.length)
      throw new Error("A shapeList is required to validate an InputUserGroup.");
    const i = [...this.issues], s = this.findShapes(e), n = yt.groupShapeCount({
      item: this,
      index: 0,
      shapes: s,
      requiredCount: 2
    });
    if (i.push(...n), i.length) return i;
    const a = yt.groupOrientationLock({
      item: this,
      index: 0,
      shapes: s
    });
    if (i.push(...a), i.length) return i;
    const r = this.joinDimension, o = yt.groupDimensions({
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
        const a = e.find((r) => !!(r.autoId === n || Le(r) && r.autoId === n || "id" in r && r.id === n));
        a && (Le(a) || ft(a)) && s.push(a);
      }
      return s.length < this.shapeIds.length && this.addIssue(new ue({
        message: "Could not find all shapes in the shape list",
        type: "error"
      })), s;
    }
    if (!this.shapes.length) return [];
    const i = [];
    for (const s of this.shapes) {
      const n = e.find((a) => !!(a.autoId === s || String(a.autoId) === String(s) || "id" in a && (a.id === s || String(a.id) === String(s)) || Le(a) && (a.autoId === s || String(a.autoId) === String(s))));
      n && (Le(n) || ft(n)) && i.push(n);
    }
    return i;
  }
  // isValid is now provided as a computed property from the validation schema
  /**
   * Populate parent IDs from shape list IDs
   */
  populateParentID(e) {
    e?.length && this?.shapeIds?.length && (this.shapes = this.shapeIds.map((i) => {
      const s = e.find((n) => n.autoId === i || Le(n) && n.autoId === i);
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
      const h = s.filter((k) => Le(k) || ft(k)), g = this.validateWithShapes(h);
      if (g.filter((k) => k.type === "error").length > 0)
        throw new Error(`Cannot create Group: ${g[0].message}`);
    }
    const a = this.findShapes(s || []);
    if (a.length === 0)
      throw new Error("No shapes found for Group creation");
    const r = a.map((h) => Le(h) ? h.toShape() : h), o = r[0];
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
    }, d = new wn(u);
    return n && "updateShapeSpacing" in d && typeof d.updateShapeSpacing == "function" && d.updateShapeSpacing(n), d;
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
function zo(t) {
  return {
    entities: /* @__PURE__ */ new Map(),
    stockList: [],
    shapeList: [],
    ...t
  };
}
function Ns(t, e) {
  if (Array.isArray(e))
    for (const i of e)
      i && typeof i == "object" && (i.autoId && t.entities.set(i.autoId, i), i.id && i.id !== i.autoId && t.entities.set(i.id, i));
}
function gh(t, e) {
  if (e) {
    if (e && typeof e == "object" && typeof e.getType == "function")
      return e;
    if (typeof e == "string")
      return t.entities.get(e);
    if (e && typeof e == "object" && e.autoId)
      return t.entities.get(e.autoId);
  }
}
function aa(t, e) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t))
    return t.map((s) => aa(s, e));
  if (typeof t.getType == "function")
    return t;
  if (t.__ref && (t.id || t.autoId)) {
    const s = t.autoId || t.id;
    return gh(e, s) || t;
  }
  const i = { ...t };
  for (const s in i)
    Object.prototype.hasOwnProperty.call(i, s) && (i[s] = aa(i[s], e));
  return i;
}
function $a(t, e, i) {
  if (t == null || t && typeof t == "object" && typeof t.getType == "function")
    return t;
  if (Array.isArray(t))
    return t.every((o) => o && typeof o == "object" && typeof o.getType == "function") ? t : t.map((o) => $a(o, e));
  if (!t || typeof t != "object" || !t.__entityType && !t.__ref && !t.type)
    return t;
  const s = t.__entityType;
  e?.preventAutoRotation && s && (s === le.Rectangle || s === le.Placeable || s === le.Container || s === le.Shape || s === le.Group || s === le.Offcut || s === le.Stock || s === le.Segment) && (t.preventAutoRotation = !0), e && (t.__context = e);
  const n = t.__ref || s, a = vs();
  if (n && a.has(n)) {
    const r = a.get(n), { __ref: o, __entityType: l, __context: c, ...u } = t, d = new r(u);
    return d.issues && Array.isArray(d.issues) && (d.issues = d.issues.map((h) => h instanceof ue ? h : ue.fromData(h, d))), d.warnings && Array.isArray(d.warnings) && (d.warnings = d.warnings.map((h) => h instanceof ue ? h : ue.fromData(h, d))), d;
  }
  return delete t.__context, t;
}
function Pi(t, e) {
  if (e || (e = zo()), Array.isArray(t)) {
    const n = [];
    for (const a of t) {
      const r = Pi(a, e);
      n.push(r), r && typeof r == "object" && (r.autoId || r.id) && Ns(e, [r]);
    }
    return n;
  }
  if (t && typeof t == "object" && typeof t.getType == "function")
    return (t.autoId || t.id) && Ns(e, [t]), t;
  const i = aa(t, e), s = $a(i, e);
  return s && typeof s == "object" && (s.autoId || s.id) && Ns(e, [s]), s;
}
function Cw(t, e) {
  const i = zo(e), s = t?.saw ? Pi(t.saw, i) : void 0;
  s && Ns(i, [s]);
  const n = t?.stockList ? Pi(t.stockList, i) : [];
  n.length > 0 && (i.stockList = n);
  const a = t?.shapeList ? Pi(t.shapeList, i) : [];
  a.length > 0 && (i.shapeList = a);
  const r = t?.cutList ? Pi(t.cutList, i) : [], o = t?.segmentList ? Pi(t.segmentList, i) : [];
  o.length > 0 && (i.segmentList = o);
  const l = t?.offcuts ? Pi(t.offcuts, i) : [];
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
function Aw(t, e = [], i) {
  return t?.length ? e?.length ? t.map((n) => mh(n, e, i)).filter((n) => Je(n)) : [] : [];
}
function mh(t, e, i) {
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
    const n = vs(), a = n.get("Group") || n.get(le.Group);
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
function Tw(t, e) {
  wi() && (t.stocks && t.stocks.forEach((i, s) => {
    Bt(i) || console.warn(`[${e}] Stock at index ${s} is not a proper Stock instance:`, i);
  }), t.shapes && t.shapes.forEach((i, s) => {
    !ft(i) && !Je(i) && console.warn(`[${e}] Shape at index ${s} is not a proper Shape/Group instance:`, i);
  }), t.segments && t.segments.forEach((i, s) => {
    qi(i) || console.warn(`[${e}] Segment at index ${s} is not a proper Segment instance:`, i);
  }), t.groups && t.groups.forEach((i, s) => {
    Je(i) || console.warn(`[${e}] Group at index ${s} is not a proper Group instance:`, i);
  }), t.inputUserGroups && t.inputUserGroups.forEach((i, s) => {
    Ht(i) || console.warn(`[${e}] InputUserGroup at index ${s} is not a proper InputUserGroup instance:`, i);
  }));
}
function Ow(t, e) {
  return Math.random() * (e - t) + t;
}
function Lw(t, e, i = "x") {
  if (!e) return !1;
  const s = i === "x" ? "l" : "w";
  return !!(he.greaterThanOrEqualTo(t[i], e[i]) && he.lessThanOrEqualTo(t[i] + t[s], e[i] + e[s]));
}
function Fw(t, e, i = "x") {
  if (!e) return !1;
  const s = yh(i);
  return !!(he.greaterThanOrEqualTo(t[i], e[i]) && he.lessThan(t[i], e[i] + e[s]));
}
function $w(t) {
  return t === "l" ? "x" : t === "w" ? "y" : null;
}
function yh(t) {
  return t === "x" ? "l" : t === "y" ? "w" : null;
}
const bh = hf;
function Dw(t, e = null) {
  return e ? t.filter((i) => i.added && i?.stock?.id === e.id) : t.filter((i) => i.added);
}
function pr(t, e) {
  if (!Oe(t.stockLock) || Array.isArray(t.stockLock) && !t?.stockLock?.length)
    return !0;
  if (Array.isArray(t.stockLock)) {
    if (t.stockLock.includes(e.parentId)) return !0;
  } else if (t.stockLock === e.parentId) return !0;
  return !1;
}
function Ew(t, e = null, i = "filter", s = !1) {
  if (!t?.length) return [];
  function n(a) {
    if (s === !0) return a.added;
    if (s === !1) return !a.added;
    if (s === null) return !0;
  }
  if (e) {
    if (e?.saw?.stockType === "linear")
      return t[i]((a) => n(a) && !a.group?.inGroup && pr(a, e) && a.l <= e.l);
    if (e?.saw?.stockType !== "roll")
      return e && Bt(e) ? t[i]((a) => n(a) && !a.group?.inGroup && pr(a, e) && a.willItFit(e)) : t[i]((a) => n(a) && !a.group?.inGroup && a.willItFit(e));
  }
  return t[i]((a) => n(a) && !a.group?.inGroup);
}
function Mw(t, e = !1, i = !1) {
  if (!t?.length) return [];
  let s = t;
  if (e !== null && (s = t.filter((o) => o.added === e), !s.length))
    return [];
  const n = /* @__PURE__ */ new Map(), a = i ? /* @__PURE__ */ new Map() : null, r = [];
  for (const o of s) {
    let l;
    if (ft(o))
      l = o.parentId;
    else if (Je(o))
      l = o.id;
    else
      continue;
    if (!n.has(l)) {
      if (n.set(l, !0), a) {
        const c = o.l <= o.w, u = c ? o.l : o.w, d = c ? o.w : o.l, h = u + "-" + d + "-" + o.orientationLock;
        if (a.has(h)) continue;
        a.set(h, !0);
      }
      r.push(o);
    }
  }
  return r;
}
function Rw(t, e = null) {
  const i = t.filter((a) => !a?.unusable && (e === null || a.used === e)), s = /* @__PURE__ */ new Map();
  for (const a of i) {
    const r = a.parentId;
    s.has(r) || s.set(r, a);
  }
  return Array.from(s.values());
}
function _w(t, e = null) {
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
function jw(t, e, i) {
  const s = t.filter((a) => a[e] === 0), n = e === "y" ? "l" : "w";
  return s.reduce((a, r, o) => o > 0 ? a + r[n] + i : a + r[n], 0);
}
function Bw(t, e) {
  const i = e === "x" ? "l" : "w", s = bh(e);
  if (!t?.length) return null;
  const n = t.reduce((r, o) => r[e] + r[i] > o[e] + o[i] ? r : o);
  return t.filter((r) => r[e] === n[e] && r[i] === n[i]).sort((r, o) => r[s] - o[s])[0];
}
function vh(t, e, i) {
  if (e.length <= 1) return t;
  const s = xh(e, i), n = t.reduce((o, l) => (o[l.id] = kh(l, s), o), {}), a = Math.min(...Object.values(n));
  return t.filter((o) => !o.added && n[o.id] === a);
}
function wh(t, e) {
  const i = e.parentId;
  return t.filter((s) => s.parentId === i).length;
}
function Sh(t, e) {
  const i = e.parentId, s = t.filter((n) => n.used && n.parentId === i).length;
  return e.q - s;
}
function Vw(t, e) {
  return wh(t, e) < e.q;
}
function xh(t, e) {
  const i = {};
  return t.forEach((s) => i[s.parentId] = Sh(e, s)), i;
}
function kh(t, e) {
  return t.stockLock.reduce((s, n) => s + (e?.[n] ? e[n] : 0), 0);
}
function Ih(t, e, i = !1) {
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
function Nw(t, e) {
  return t.filter((i) => i.l >= e && i.w >= e);
}
function Ph(t, e) {
  if (t.stock?.autoId !== e.stock?.autoId) return !1;
  const i = t.x, s = t.x + t.l, n = t.y, a = t.y + t.w, r = e.x, o = e.x + e.l, l = e.y, c = e.y + e.w;
  return !(s <= r || // shape1 is completely to the left of shape2
  o <= i || // shape2 is completely to the left of shape1
  a <= l || // shape1 is completely below shape2
  c <= n);
}
function Gw(t) {
  const e = [], i = t.filter((s) => s.added);
  for (let s = 0; s < i.length; s++)
    for (let n = s + 1; n < i.length; n++)
      Ph(i[s], i[n]) && e.push({
        shape1: i[s],
        shape2: i[n]
      });
  return e;
}
function qw(t) {
  t.sort(Zt.groupPlacementOrder);
  for (let e = 0; e < t.length; e++)
    t[e].placementOrder = e;
}
function zw(t, e) {
  e && t && (e.score = t.score, e.duplicatePattern = t.id);
}
let Wo = () => {
};
function Ww(t) {
  Wo = t;
}
function an(t, e, i, s, n) {
  Wo(t, e, i, s, n);
}
class ui extends at {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Xd;
  static computedProperties = Qd;
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
    const i = new ui();
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
function Ch(t, e, i, s = !0) {
  if (!t || !e || !i) return !1;
  if (t.autoId === e.autoId)
    throw console.error("[collision] ERROR: Shape/group is in testShapes array!"), console.error(`  thisShape: ${t.autoId} (${t.id})`), console.error(`  testShape: ${e.autoId} (${e.id})`), console.error(`  thisShape === testShape: ${t === e}`), new Error(`collision comparing to self ${t.autoId}, ${e.autoId}`);
  const n = s ? i.bladeWidth : 0, a = t.x + t.l + n, r = e.x + e.l + n;
  if (!he.lessThan(t.x, r) || !he.greaterThan(a, e.x))
    return !1;
  const o = t.y + t.w + n, l = e.y + e.w + n;
  return he.lessThan(t.y, l) && he.greaterThan(o, e.y);
}
function Ah(t, e, i) {
  for (const s of e)
    if (t.autoId !== s.autoId && Ch(t, s, i))
      return !0;
  return !1;
}
function Hw(t, e, i, s = !1) {
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
function hi(t, e, i, s, n = null, a = null) {
  return new Ci({ x1: t, y1: e, x2: i, y2: s, origin: n, type: a });
}
function Th(t, e) {
  const i = t.getCorners(), s = {};
  return i.bottomLeft.x > 0 && i.bottomLeft.y > 0 && (s.bottomLeftDown = hi(
    i.bottomLeft.x,
    i.bottomLeft.y,
    i.bottomLeft.x,
    0,
    "bottomLeft",
    "bottomLeftDown"
  ), s.bottomLeftLeft = hi(
    i.bottomLeft.x,
    i.bottomLeft.y,
    0,
    i.bottomLeft.y,
    "bottomLeft",
    "bottomLeftLeft"
  )), i.topLeft.x > 0 && i.topLeft.y < e.w && (s.topLeftLeft = hi(
    i.topLeft.x,
    i.topLeft.y,
    0,
    i.topLeft.y,
    "topLeft",
    "topLeftLeft"
  ), s.topLeftTop = hi(
    i.topLeft.x,
    i.topLeft.y,
    i.topLeft.x,
    e.w,
    "topLeft",
    "topLeftTop"
  )), i.topRight.y < e.w && i.topRight.x < e.l && (s.topRightTop = hi(
    i.topRight.x,
    i.topRight.y,
    i.topRight.x,
    e.w,
    "topRight",
    "topRightTop"
  ), s.topRightRight = hi(
    i.topRight.x,
    i.topRight.y,
    e.l,
    i.topRight.y,
    "topRight",
    "topRightRight"
  )), i.bottomRight.x < e.l && i.bottomRight.y > 0 && (s.bottomRightRight = hi(
    i.bottomRight.x,
    i.bottomRight.y,
    e.l,
    i.bottomRight.y,
    "bottomRight",
    "bottomRightRight"
  ), s.bottomRightDown = hi(
    i.bottomRight.x,
    i.bottomRight.y,
    i.bottomRight.x,
    0,
    "bottomRight",
    "bottomRightDown"
  )), s;
}
function Ss(t, e, i = null) {
  if (t.has(e.x, e.y)) {
    const s = t.get(e.x, e.y);
    s.type === "group" && !i && (s.type = void 0);
    return;
  }
  i && (e.type = i), t.add(e);
}
function Gs(t, e, i = null) {
  for (const s of e) {
    if (!s) return;
    Ss(t, s, i);
  }
}
function Ne(t, e, i, s, n) {
  const a = Oh[t](e, i);
  return s && (a.corner = s), n && (a.direction = n), a;
}
const Oh = {
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
function Lh(t, e, i) {
  const s = new ui(), n = i.toArray().sort(Ho), a = e.bladeWidth;
  if (n.forEach((r) => {
    const o = r.corner, l = r.type;
    if (!a)
      s.add(r);
    else
      switch (o) {
        case "topRight":
          {
            const c = Ne("top", r, a, o);
            l && (c.type = l), s.add(c);
            const u = Ne("right", r, a, o);
            l && (u.type = l), s.add(u);
          }
          break;
        case "topLeft":
          {
            const c = Ne("top", r, a, o);
            l && (c.type = l), s.add(c);
            const u = Ne("left", r, a, o);
            l && (u.type = l), s.add(u);
          }
          break;
        case "bottomRight":
          {
            const c = Ne("bottom", r, a, o);
            l && (c.type = l), s.add(c);
            const u = Ne("right", r, a, o);
            l && (u.type = l), s.add(u);
          }
          break;
        case "bottomLeft":
          {
            const c = Ne("bottom", r, a, o);
            l && (c.type = l), s.add(c);
            const u = Ne("left", r, a, o);
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
    let d = s.toArray();
    for (let h = d.length; h--; ) {
      const g = d[h];
      (he.lessThan(g.x, o) || he.lessThan(g.y, l) || he.greaterThan(g.x, c) || he.greaterThan(g.y, u)) && d.splice(h, 1);
    }
    s.clear(), d.forEach((h) => s.add(h)), r.clear(), d = s.toArray();
    for (let h = d.length; h--; ) {
      const g = d[h];
      for (let k = t.length; k--; ) {
        const M = t[k];
        if (g.collidesWith(M)) {
          s.remove(g.x, g.y);
          break;
        }
      }
    }
  }
  return s;
}
function Fh(t, e, i) {
  let s = [];
  const n = t.minSpacing, a = e.corner, r = e.direction;
  if (e.type === "shape")
    switch (a) {
      case "topLeft":
        r === "rl" && (s.push(Ne("right", e, n, a, r)), s.push(Ne("topRight", e, n, a, r))), r === "bt" && (s.push(Ne("bottom", e, n, a, r)), s.push(Ne("bottomLeft", e, n, a, r)));
        break;
      case "topRight":
        r === "lr" && (s.push(Ne("left", e, n, a, r)), s.push(Ne("topLeft", e, n, a, r))), r === "bt" && (s.push(Ne("bottom", e, n, a, r)), s.push(Ne("bottomRight", e, n, a, r)));
        break;
      case "bottomRight":
        r === "lr" && (s.push(Ne("left", e, n, a, r)), s.push(Ne("bottomLeft", e, n, a, r))), r === "tb" && (s.push(Ne("top", e, n, a, r)), s.push(Ne("topRight", e, n, a, r)));
        break;
      case "bottomLeft":
        r === "rl" && (s.push(Ne("right", e, n, a, r)), s.push(Ne("bottomRight", e, n, a, r))), r === "tb" && (s.push(Ne("top", e, n, a, r)), s.push(Ne("topLeft", e, n, a, r)));
        break;
    }
  else if (e.type === "edge")
    switch (r) {
      case "rl":
      case "lr":
        s.push(Ne("top", e, 0)), s.push(Ne("centre", e, 0)), s.push(Ne("bottom", e, 0));
        break;
      case "tb":
      case "bt":
        s.push(Ne("left", e, 0)), s.push(Ne("right", e, 0)), s.push(Ne("centre", e, 0));
        break;
    }
  if (s = s.filter((l) => l.x >= 0 && l.y >= 0), !s.length) return null;
  const o = new ui();
  for (const l of s)
    l.raycast = !0, Gs(o, Ko(t, l, i).toArray());
  return Zo(t, i, o), o;
}
function $h(t, e) {
  const i = new ui();
  return t.sort(Ho), t.forEach((s) => {
    Je(s) ? (Gs(i, s.getCoords(e)), s.shapes.forEach((n) => {
      const a = n.getCoords(e);
      Gs(i, a, "group");
    })) : Gs(i, s.getCoords(e));
  }), i.points.forEach((s) => {
    s.stock = e.getStock;
  }), i;
}
function Dh(t = [], e, i) {
  const s = $h(
    t === null ? e : t,
    i
  );
  return Lh(
    e,
    i,
    s
  );
}
function Ho(t, e) {
  return t.y === e.y ? e.x - t.x : e.y - t.y;
}
function Uo(t, e, i, s, n, a) {
  t.a = e.id, t.b = i ? i.id : null, t.direction = s, t.raycast = !0, t.type = n, t.corner = a;
}
function Eh(t, e) {
  if (t.saw.cutType !== "efficiency" || e.length <= 1) return null;
  let i = new ui();
  const s = Yo(e, t);
  for (const o of e)
    for (const l of s) {
      if (l.shape.id === o.id) continue;
      const c = Object.values(l.rays).filter((u) => u !== void 0);
      for (const u of c)
        Mh(
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
      const d = new dt(u.x2, u.y2);
      a === u.direction && (Uo(d, o, null, u.direction, "edge"), Ss(i, d));
    }
  }), i = Rh(i), i;
}
function Yo(t, e) {
  return t.map((i) => {
    const s = Th(i, e);
    return {
      shape: i,
      rays: s
    };
  });
}
function Mh(t, e, i, s) {
  switch (t.direction) {
    case "rl":
      $s(
        t,
        e,
        i,
        s,
        i.x + i.l
      );
      break;
    case "lr":
      $s(
        t,
        e,
        i,
        s,
        i.x
      );
      break;
    case "tb":
      $s(
        t,
        e,
        i,
        s,
        i.y + i.w
      );
      break;
    case "bt":
      $s(
        t,
        e,
        i,
        s,
        i.y
      );
      break;
  }
}
function $s(t, e, i, s, n) {
  const a = t.dimension === "w", r = a ? "y" : "x", o = a ? "x" : "y", l = a ? "l" : "w";
  if (t[`${o}1`] >= i[o] && t[`${o}1`] <= i[o] + i[l]) {
    const c = t.direction === "lr" && t[`${r}1`] <= n && t[`${r}2`] >= n, u = t.direction === "rl" && t[`${r}1`] >= n && t[`${r}2`] <= n, d = t.direction === "bt" && t[`${r}1`] <= n && t[`${r}2`] >= n, h = t.direction === "tb" && t[`${r}1`] >= n && t[`${r}2`] <= n;
    if (c || u || d || h) {
      const k = a ? t[`${o}1`] : n, M = a ? n : t[`${o}1`], N = new dt(k, M), T = t.origin;
      Uo(N, e, i, t.direction, "shape", T), Ss(s, N);
    }
  }
}
function Rh(t) {
  const e = new ui();
  return t.points.size === 0 || new Set(t.toArray().map((s) => s.a)).forEach((s) => {
    const n = t.toArray().filter((a) => a.a === s);
    ["right", "left", "top", "bottom"].forEach((a) => {
      const r = _h(
        n,
        a
      );
      r && Ss(e, r);
    });
  }), e;
}
function _h(t, e) {
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
function Ko(t, e, i) {
  const s = new ui(), n = e.getAvailableShapePositions(i);
  for (const a of n) {
    let r;
    switch (r = jh(e, t, i), a) {
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
    Ss(s, r);
  }
  return Zo(t, i, s), s;
}
function jh(t, e, i) {
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
function Zo(t, e, i) {
  let s, n, a, r;
  e?.constructor?.name === "Stock" && e?.trimmed || e?.constructor?.name === "Segment" ? (s = 0, n = 0, a = e.x + e.l - t.l, r = e.y + e.w - t.w) : (s = e?.trim?.l1, n = e?.trim?.w1, a = e.l - e?.trim?.l2 - t.l, r = e.w - e?.trim?.w2 - t.w);
  const o = i.toArray();
  for (let l = o.length; l--; ) {
    const c = o[l];
    (he.lessThan(c.x, s) || he.lessThan(c.y, n) || he.greaterThan(c.x, a) || he.greaterThan(c.y, r) || c.x < 0 || c.y < 0) && i.remove(c.x, c.y);
  }
}
function Bh(t, e, i = null) {
  const s = /* @__PURE__ */ new Map();
  for (let n = t.length; n--; ) {
    const a = t[n], r = Fo(a, e.getStock), o = a.shortSide, l = a.longSide;
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
function ra(t, e) {
  if (t?.length)
    for (let i = t.length; i--; ) {
      const s = t[i];
      Vh(
        s,
        e
      );
    }
}
function Vh(t, e) {
  if (!t.isSquare) {
    if (t.shortSide === e.w && t.rot) {
      if (!pt(
        t,
        0,
        e
      ))
        throw new Error(
          "could not rotate shape correctly for subset calculation"
        );
    } else if (!e.isSquare && t.longSide === e.w && !t.rot && !pt(
      t,
      1,
      e
    ))
      throw new Error(
        "could not rotate shape correctly for subset calculation"
      );
  }
}
function Uw(t, e, i = "l", s = null) {
  if (!t || !e?.length) return !1;
  e.forEach((u) => u.orientationLock = null), ra(
    e,
    t
  );
  const n = t.bladeWidth, a = [];
  let r = this.config.subset.shuffles;
  (e.length === 1 || e[0].parentId === e[e.length - 1].parentId) && (r = 1), i === "l" ? e.sort(
    Zt.LD
  ) : e.sort(
    Zt.WD
  ), s || (s = e[0]);
  function o(u, d = !0) {
    d && Zt.shuffle(
      e
    );
    const h = oa(
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
    (u, d) => d.score.efficiency - u.score.efficiency
  ), !a.length) return !1;
  const l = a[0];
  let c = null;
  return l.totalLength + n < t.l && (c = t.l - (l.totalLength + n), l.offcut = c), l;
}
function Nh(t, e, i, s = "l", n, a = !1, r = this.config.subset.shuffles, o = null, l = this.config.subset.efficiency.limit) {
  if (!e?.length) return !1;
  const c = [], u = [
    (k, M) => M[s] - k[s],
    // Largest first
    (k, M) => k[s] - M[s],
    // Smallest first
    (k, M) => M[s] / M.area - k[s] / k.area,
    // Best dimension-to-area ratio
    (k, M) => M.area - k.area,
    // Largest area first
    (k, M) => k.area - M.area
    // Smallest area first
  ], d = e.every(
    (k, M, N) => M === 0 || k.isIdentical(N[M - 1])
  );
  if (!a) {
    const k = e.reduce((M, N) => M + N[s] + t, 0) - t;
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
        area: e.reduce((M, N) => M + N.area, 0)
      } : !1;
  }
  const h = oa(t, e, i, s, n, a, o);
  if (h !== !1 && (c.push(h), h.score.efficiency > 0.95 && e.length > 10))
    return h;
  if (d)
    return c[0] || !1;
  const g = Math.min(r, u.length);
  for (let k = 0; k < g; k++) {
    const M = [...e];
    M.sort(u[k % u.length]);
    const N = oa(t, M, i, s, n, a, o);
    if (N !== !1 && (c.push(N), N.score.efficiency > 0.98 && e.length > 30))
      break;
  }
  return c.sort((k, M) => M.score.efficiency - k.score.efficiency), c[0] || !1;
}
function oa(t, e, i, s = "l", n, a = !1, r = null) {
  if (!n || n <= 0 || e?.length < 1) return !1;
  let o = 0;
  const l = [];
  if (r || (r = e[0]), l.push(r), o = r[s], o > n) return !1;
  const c = e.findIndex(
    (u) => u.id === r?.id
  );
  c > -1 && e.splice(c, 1);
  for (const u of e) {
    const d = u[s], h = u.getMinSpacing(
      i.saw,
      !0
    );
    if (!(o + t + h + d > n) && (o += t + h + d, l.push(u), o + t + h >= n))
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
        (d, h) => d + h.area,
        0
      )
    };
  }
  return !1;
}
function Gh(t, e, i = null, s = "l", n = !0, a = !0) {
  if (!t?.length) return;
  if (!e) throw new Error(
    "positionShapes requires stock"
  );
  const r = s === "l" ? "x" : "y", o = s === "l" ? "y" : "x";
  let l = 0;
  Je(i) ? ra(
    t,
    i
  ) : ra(
    t,
    i ?? e
  ), a && (s === "l" ? t.sort(
    Zt.LDIDA
  ) : t.sort(
    Zt.WDIDA
  )), t.forEach(
    (c, u) => {
      c[r] = i ? i[r] + l : l, i && (c[o] = i[o]), l += c[r === "x" ? "l" : "w"] + e.bladeWidth + c.getMinSpacing(e.saw, !0), xt(
        [() => Qe(
          l
        ).to.be.a(
          "number"
        )]
      ), Je(i) ? c.group.placementOrder = u : c.placementOrder = u, n && c.addToStock(e);
    }
  );
}
function Yw(t = null, e, i, s = "l") {
  if (!e) return [];
  if (!t) return [];
  i.sort(
    Zt.ID
  );
  const n = t.shapes;
  return Gh(
    n,
    e,
    null,
    s
  ), n;
}
function Kw(t, e, i) {
  an("subset", `guillotine subset for segment ${t.id}`);
  function s(C, D = []) {
    const { shapes: x } = a(C);
    return x.filter((L) => {
      if (L.added || D.find((Y) => Y.id === L.id)) return !1;
      if (L.orientationLock)
        return he.equalTo(L[u], C) ? he.lessThanOrEqualTo(L.l, t.l) && he.lessThanOrEqualTo(L.w, t.w) : !1;
      if (he.equalTo(L.l, C) || he.equalTo(L.w, C)) {
        const Y = he.equalTo(L.l, C) ? L.w : L.l;
        return he.lessThanOrEqualTo(Y, t[t.cutPreference]);
      }
      return !1;
    });
  }
  function n(C, D, x, L = null) {
    let Y = s(
      C,
      D
    );
    if (L) {
      const z = Y.find(
        (y) => y.parentId === L.parentId
      );
      if (z) return z;
    }
    if (!Y.length) return !1;
    const _ = [];
    for (const z of Y) {
      const y = z.l === C ? z.w : z.l;
      x.includes(y) && _.push(z);
    }
    return Y = _.length ? _ : Y, Mo(Y);
  }
  function a(C) {
    const D = C;
    return T.has(D) || T.set(D, { shapes: [], priorities: [] }), T.get(D);
  }
  function r(C = null) {
    function D(L, Y, _) {
      const { shapes: ce, priorities: z } = a(Y);
      ce.includes(L) || (ce.push(L), z.push(_));
    }
    if (!g?.length) return T;
    const x = t.getStock;
    for (const L of g) {
      let Y = L.getPriority(x);
      C && L.parentId !== C.parentId && (Y = 0);
      const _ = ri(u);
      if (!L.orientationLock)
        L.longSide <= h && L.shortSide <= t[_] && D(L, L.l, Y), !L.isSquare && L.shortSide <= h && L.longSide <= t[_] && D(L, L.w, Y);
      else {
        const ce = Fo(
          L,
          t.getStock
        );
        if (xt([() => Qe(ce.length).to.equal(1)]), pt(
          L,
          ce[0],
          t.getStock
        ) === !1)
          throw new Error(
            "could not rotate shape correctly for subset calculation"
          );
        const y = ri(u);
        L[u] <= h && L[y] <= t[y] && D(L, L[u], Y);
      }
    }
    return T;
  }
  function o() {
    const C = [], D = Array.from(T.entries()).map(([L, { shapes: Y, priorities: _ }]) => ({
      dimension: L,
      count: Y.length,
      totalPriority: Y.length * Math.max(..._, 0)
    }));
    let x = D.reduce((L, { totalPriority: Y }) => L + Y, 0);
    for (; D.length > 0; )
      if (x <= 0 || !Number.isFinite(x)) {
        const L = [];
        D.forEach(({ dimension: Y, count: _ }) => {
          L.push(...Array(_).fill(Y));
        });
        for (let Y = L.length - 1; Y > 0; Y--) {
          const _ = Math.floor(Math.random() * (Y + 1));
          [L[Y], L[_]] = [L[_], L[Y]];
        }
        C.push(...L);
        break;
      } else {
        const L = Math.random() * x;
        let Y = 0, _ = -1;
        for (let W = 0; W < D.length; W++)
          if (Y += D[W].totalPriority, Y > L) {
            _ = W;
            break;
          }
        _ === -1 && (_ = Math.floor(Math.random() * D.length));
        const { dimension: ce, count: z, totalPriority: y } = D[_];
        C.push(ce), D[_].count--, D[_].totalPriority -= y / z, D[_].count === 0 ? (x -= y, D.splice(_, 1)) : x -= y / z;
      }
    return C;
  }
  function l(C, D, x, L, Y, _, ce) {
    return x += C + D, L.push(C), Y.push(
      _.l === C ? _.w : _.l
    ), ce.push(_), x;
  }
  function c(C = null) {
    if (!g?.length) return [];
    if (!T.size) return [];
    const D = /* @__PURE__ */ new Map();
    let x = 0;
    const L = [], Y = [], _ = [];
    let ce = null, z = !0;
    for (let J = 0; J < this.config.subset.guillotine.shuffles; J++) {
      x = 0, L.length = 0, Y.length = 0, _.length = 0, ce = null, z = !0;
      const j = o();
      for (const V of j) {
        if (z ? ce = V : ce = d + V, x + ce > h) continue;
        const q = n(
          V,
          Y,
          _,
          C
        );
        q && (x = l(
          V,
          z ? 0 : d,
          x,
          L,
          _,
          q,
          Y
        ), z = !1);
      }
      if (x) {
        const V = x / h;
        if (xt([() => Qe(V).to.lessThanOrEqual(1)]), V < this.config.subset.efficiency.limit) continue;
        const q = Y.map((ne, Se) => Se);
        q.sort((ne, Se) => _[Se] !== _[ne] ? _[Se] - _[ne] : L[Se] - L[ne]);
        const G = q.map(
          (ne) => L[ne]
        ), U = q.map(
          (ne) => Y[ne]
        );
        xt([
          () => Qe(Ih(U)).to.be.false
        ]), D.set(
          G.join("-"),
          {
            usedDimensions: G,
            usedShapes: U,
            efficiency: V,
            target: h,
            totalLength: x,
            priorityShape: C ? C.parentId : null
          }
        );
      }
    }
    if (D.size === 0) return [];
    const y = Array.from(
      D.values()
    );
    y.sort(
      (J, j) => J.efficiency > j.efficiency ? -1 : J.efficiency < j.efficiency ? 1 : J.efficiency === j.efficiency ? j.usedDimensions.length - J.usedDimensions.length : 0
    );
    const W = y.slice(
      0,
      20
    );
    if (!W.length) return [];
    const te = W.slice(
      0,
      typeof this.config.guillotine.stripShapes.iterations == "number" ? this.config.guillotine.stripShapes.iterations : 1
    );
    return te.length ? (te.forEach(
      (J) => {
        J.usedShapes.forEach(
          (j, V) => {
            const q = J.usedDimensions[V];
            xt([() => Qe([j.l, j.w].includes(q)).to.be.true]);
            let G;
            j.isSquare ? G = 0 : j.longSide === q ? G = t.getStock.cutPreference === "l" ? 1 : 0 : G = t.getStock.cutPreference === "l" ? 0 : 1, j.guillotineState || (j.guillotineState = new ii({})), j.guillotineState.setStripShapeBatchGroup(N, {
              stockId: t.getStock.autoId,
              dimension: q,
              rot: G,
              order: V,
              //by this point sorting should have taken place
              priorityShape: J.priorityShape
            });
          }
        ), N++, xt(
          [
            () => {
              const j = J.usedDimensions.reduce(
                (G, U) => G + U,
                0
              ), V = (J.usedDimensions.length - 1) * d, q = j + V;
              return Qe(he.lessThanOrEqualTo(q, h)).to.be.true;
            },
            () => Qe(
              te.every((j) => j.efficiency >= this.config.subset.efficiency.limit)
            ).to.be.true,
            () => Qe(
              te.every(
                (j) => j.usedDimensions.length === j.usedShapes.length
              )
            ).to.be.true
          ]
        );
      }
    ), te) : [];
  }
  const u = ri(t.cutPreference), d = t.getStock.bladeWidth, h = t[u];
  xt([() => Qe(h).to.be.a("number")]);
  const g = vh(
    t.shapes.filter((C) => !Je(C)),
    e,
    i
  ), k = t.getStock;
  g.sort((C, D) => {
    const x = D.getPriority(k) - C.getPriority(k);
    if (x !== 0) return x;
    const L = C.id.toString().split("."), Y = D.id.toString().split(".");
    return L[0] !== Y[0] ? parseInt(L[0]) - parseInt(Y[0]) : parseInt(L[1]) - parseInt(Y[1]);
  });
  const M = [];
  let N = 0;
  const T = /* @__PURE__ */ new Map();
  if (!this.config.priority.enable || t.type !== "root" || !t.shapes[0].getPriority(k)) {
    r();
    const C = c.call(this);
    M.push(...C);
  } else {
    const C = t.shapes[0];
    r(C);
    const D = Math.min(t.shapes.length, this.config.guillotine.stripShapes.numPriorityShapes);
    for (let x = 0; x < D; x++) {
      const L = c.call(this, C);
      M.push(...L);
    }
  }
  return an("subset", `${M.length} strip shape results ${M.map((C) => C.usedShapes.map((D) => D.id).join()).join(" | ")}`), M?.length ? M.length : 0;
}
function qh(t) {
  const e = {};
  return t.forEach((i) => {
    i.shapeIds.forEach((s) => {
      const n = i.q || 1;
      e[s] ? e[s] += n : e[s] = n;
    });
  }), e;
}
function zh(t, e, i = !0) {
  const s = qh(t), n = [];
  for (const a in s) {
    const r = s[a], o = e.findIndex((u) => u.autoId === a), l = e[o], c = Eo({
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
function Jo(t) {
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
    tolerance: d = 1e-3,
    config: h
  } = t, g = c ?? h?.subset?.shuffles ?? 10;
  xt([
    () => Qe(s).to.be.greaterThan(0)
  ]);
  const k = Wh(e, o, n, i, d);
  if (k.length < 2) return !1;
  const M = { config: h }, N = Nh.call(
    M,
    i.bladeWidth,
    k,
    i.getStock,
    Uh(o),
    s,
    r,
    g,
    l
  );
  if (!N) return !1;
  if (N?.shapes?.length > 1 && N?.totalLength) {
    let T;
    try {
      T = new wn({
        id: a,
        direction: o,
        shapes: N.shapes,
        container: i,
        type: u
      }), an("groups", `[createGroup] Created group ${T.id} direction=${o} dims=${T.l}x${T.w} with ${T.shapes.length} shapes, [${T.shapes.map((C) => C.id).join()} for ${i.getType()} ${i.id}]`);
    } catch (C) {
      return console.error("group error", C), !1;
    }
    return T;
  }
  return !1;
}
function Zw(t) {
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
    counters: d,
    type: h
  } = t, g = l ?? u?.groups?.tolerance ?? 0.05;
  if (!Oe(s))
    throw new Error("attempting to create a group with no target size");
  if (s <= 0)
    return console.warn(`Invalid targetSize ${s} - cannot create groups with zero or negative target size`), [];
  if (!Oe(i))
    throw new Error("attempting to create a group with no container");
  if (!e?.length || e.length < 2) return [];
  const k = Xo(a), M = ri(a), N = k === "horizontal" ? i.w : i.l, T = i.getStock;
  let C = [...e], D = r;
  if (D)
    if (wf(
      D,
      D[M],
      M,
      T
    ) === !1)
      D = null;
    else {
      const te = D[M], J = te * (1 - g);
      let j = te * (1 + g);
      j > i[M] && (j = i[M]), C = e.filter((V) => !ft(V) || V.autoId === D.autoId ? !1 : or(
        V,
        J,
        j,
        M,
        T
      ));
    }
  const x = Bh(
    C,
    i,
    M
  ), L = Array.from(x.keys()).filter((W) => W <= N).sort((W, te) => te - W);
  if (L.length === 0) return [];
  const Y = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
  for (const W of C) {
    const te = /* @__PURE__ */ new Map();
    for (const J of L) {
      const j = J * (1 - g);
      let V = J * (1 + g);
      V > i[M] && (V = i[M]);
      const q = or(
        W,
        j,
        V,
        M,
        T
      );
      te.set(J, q);
    }
    _.set(W.autoId, te);
  }
  for (const W of L) {
    const te = [];
    for (const J of C) {
      if (!ft(J)) continue;
      _.get(J.autoId)?.get(W) && te.push(J);
    }
    Y.set(W, te);
  }
  const ce = [], z = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Map();
  for (const W of L) {
    if (c !== void 0 && ce.length >= c)
      break;
    const te = [];
    let J = Y.get(W).filter((j) => !z.has(j.autoId));
    if (!(J.length < 2)) {
      for (; J.length >= 2 && !(c !== void 0 && ce.length >= c); ) {
        let j, V = !1;
        if (te.length && !o) {
          const q = te[te.length - 1], G = q.shapes.slice(), U = /* @__PURE__ */ new Set(), ne = new Set(J.map((xe) => xe.autoId)), Se = [];
          let me = !0;
          for (const xe of G) {
            let $e = !1;
            if (ne.has(xe.autoId) && !U.has(xe.autoId)) {
              const Q = J.find((Ve) => Ve.autoId === xe.autoId);
              Q && (Se.push(Q), U.add(xe.autoId), $e = !0);
            }
            if (!$e)
              for (const Q of J) {
                if (U.has(Q.autoId)) continue;
                const Ve = `${Q.autoId}-${xe.autoId}`;
                if (y.has(Ve) || y.set(Ve, Q.isIdentical(xe)), y.get(Ve)) {
                  Se.push(Q), U.add(Q.autoId), $e = !0;
                  break;
                }
              }
            if (!$e) {
              me = !1;
              break;
            }
          }
          if (me && Se.length === G.length) {
            if (V = !0, q.positions?.length === Se.length)
              for (let xe = 0; xe < Se.length; xe++) {
                const $e = Se[xe], Q = G[xe], Ve = q.positions[xe]?.rot ?? Q.rot;
                if ($e.rot !== Ve && !pt($e, Ve, i)) {
                  console.warn(`  Failed to rotate ${$e.id} to ${Ve} - skipping clone`), V = !1;
                  break;
                }
              }
            V && (xt([
              () => Qe(Se.every((xe, $e) => {
                const Q = q.positions[$e]?.rot ?? G[$e].rot;
                return xe.rot === Q;
              }), "at least one identical group shape not rotated correctly").to.be.true
            ]), j = q.cloneWithNewShapes(Se));
          }
        }
        if (!V) {
          let q = "g" + (typeof d?.group == "number" ? d.group : 0);
          h === "firstShape" && (q = "fs-" + q), j = Jo({
            shapes: J,
            container: i,
            targetSize: s,
            d: W,
            id: q,
            exact: n,
            groupDirection: k,
            firstShape: D,
            tolerance: g,
            config: u,
            type: h
          });
        }
        if (j) {
          typeof d?.group == "number" && d.group++, te.push(j), j.shapes.forEach((G) => z.add(G.autoId));
          const q = [];
          for (const G of J)
            z.has(G.autoId) || q.push(G);
          if (J = q, J.length < 2) break;
        } else
          break;
      }
      ce.push(...te);
    }
  }
  return ce;
}
function Wh(t, e, i, s, n = 1e-3) {
  return t.filter((a) => {
    const r = Xs(a, s);
    if (r) {
      const h = r === "w" ? 1 : 0;
      if (a.rot !== h && !pt(a, h, s))
        return !1;
    }
    if (a.isSquare) return !0;
    const o = i * (1 - n), l = i * (1 + n), c = a.l >= o && a.l <= l, u = a.w >= o && a.w <= l;
    let d = null;
    if (c && u) {
      const h = Math.abs(a.l - i), g = Math.abs(a.w - i);
      d = h <= g ? "l" : "w";
    } else c ? d = "l" : u && (d = "w");
    if (d !== null) {
      const h = Hh(
        d,
        e,
        a.rot
      ), g = Xs(a, s), k = h ? 1 : 0;
      return g && (g === "l" && k === 1 || g === "w" && k === 0) || !Ft(a, h, s) ? !1 : pt(a, h, s);
    }
    return !1;
  });
}
function Hh(t, e, i) {
  return e === null ? t === "l" : t === (e === "vertical" ? "l" : "w") ? i === 1 : i === 0;
}
function Xo(t) {
  if (!["l", "w"].includes(t)) throw new Error("incorrect direction value");
  if (t === "l") return "horizontal";
  if (t === "w") return "vertical";
}
function Uh(t) {
  if (!["horizontal", "vertical"].includes(t)) throw new Error("incorrect groupDirection value");
  if (t === "horizontal") return "l";
  if (t === "vertical") return "w";
}
function Yh(t, e, i) {
  return t.filter((s) => s.l === e[i] || s.w === e[i]);
}
function Kh(t, e) {
  const i = Array.isArray(e) ? e : [e], s = /* @__PURE__ */ new Set();
  for (const n of i)
    if (n.shapes?.length)
      for (const a of n.shapes)
        s.add(a.autoId);
  return t.filter((n) => Je(n) || !s.has(n.autoId));
}
function Zh(t, e = "") {
  const i = /* @__PURE__ */ new Set();
  t.filter(Je).forEach((r) => {
    r.shapes?.forEach((o) => {
      i.add(o.autoId);
    });
  });
  const n = t.filter((r) => ft(r)).filter((r) => i.has(r.autoId)), a = e ? ` [${e}]` : "";
  Qe(
    n.length,
    `${a} Found ${n.length} shapes that exist both in groups and independently: ${n.map((r) => r.id || r.autoId).join(", ")}`
  ).to.equal(0);
}
function Jh(t, e) {
  const i = [...t, e];
  i.sort((n, a) => (a.score?.total || 0) - (n.score?.total || 0));
  const s = i[0];
  if (s.score?.total && Je(s) && (s.score?.total ?? 0) > (e.bestScore?.total ?? 0))
    return e.setBestScore(s), e.bestScore.group = s, s;
}
function Jw(t) {
  const { container: e, containerPlacedShapes: i, unplacedShapes: s, shape: n, point: a, config: r, scoreFunction: o } = t;
  if (s.length < 3) return;
  let l = !1;
  n.orientationLock || (l = !0, n.orientationLock = n.rot === 1 ? "w" : "l");
  let c = [], u = [];
  qi(e) ? u = [e.cutDirection] : u = e?.saw?.stockType === "roll" ? ["w"] : ["l", "w"];
  for (const g of u) {
    const k = ri(g), M = g === "l" ? "x" : "y", N = e[g] - n[M] - e.bladeWidth;
    if (N <= 0) continue;
    const T = Yh(
      s,
      n,
      k
    );
    if (T.length < 2) continue;
    const C = Jo({
      shapes: T,
      container: e,
      targetSize: N,
      d: n[k],
      id: "g" + n.id + "-" + n.rot + "-" + g.substring(0, 1),
      exact: !1,
      groupDirection: Xo(g),
      firstShape: n,
      iterations: 40,
      config: {
        subset: r.subset
      }
    });
    C && c.push(C);
  }
  c.sort((g, k) => k.efficiency - g.efficiency), c.length > r.sample.groupSize && (c = c.slice(0, r.sample.groupSize)), xt([() => c.every((g) => !ft(g), "shapes in the groups array")]);
  for (const g of c)
    g.x = a.x, g.y = a.y, g.outOfBounds = g.x + g.l > e.l || g.y + g.w > e.w, !g.outOfBounds && (Ah(g, i, e) || o(g, e, i, s, a));
  s.forEach((g) => g.resetGroupData());
  const d = Jh(c, n), h = c.filter((g) => Je(g) && g !== d);
  return h.length > 0 && h.forEach((g) => {
    an("groups", `  Destroying group ${g.id} (${g.shapes?.length || 0} shapes)`), g.destroy();
  }), d && qi(e) && (e.shapes.push(d), e.shapes = Kh(e.shapes, d)), l && (n.orientationLock = null), d && qi(e) && xt([
    () => Zh(e.shapes, "POSITION GROUPS")
  ]), d;
}
const Xh = B({
  id: p(),
  count: f(),
  name: p(),
  l: f(),
  w: f(),
  t: f(),
  material: p()
}), Da = B({
  inputStock: ae(Kt),
  inputShapes: ae(vi),
  inputSaw: Ti,
  inputUserGroups: ae(Aa),
  // Centralized extras options for UI dropdowns
  extrasOptions: B({
    banding: B({
      options: ae(p())
    }).optional(),
    finish: B({
      options: ae(p())
    }).optional(),
    planing: B({
      options: ae(p())
    }).optional()
  }).optional()
}).optional(), Qh = B({
  // Banding metrics
  bandingLengthByType: Ie(p(), f()).default({}),
  // Finish metrics (by face)
  finishAreaByType: Ie(p(), f()).default({}),
  // Material summary with nested structure
  materialSummary: Ie(
    p(),
    // material name
    Ie(
      p(),
      // thickness
      B({
        used: f(),
        stacks: f(),
        bandingLengthByType: Ie(p(), f())
      })
    )
  ).default({}),
  // Tallies
  usedStockTally: Ie(p(), f()).default({}),
  addedPartTally: Ie(p(), f()).default({}),
  // Cost metrics
  stockAreaCost: f().default(0),
  totalStockCost: f().default(0),
  // Machining metrics
  hasMachining: R().default(!1),
  numHoles: f().default(0),
  numCorners: f().default(0),
  // Efficiency metrics
  totalBandingLength: f().default(0),
  totalFinishArea: f().default(0),
  totalEfficiency: f().default(0),
  // Cutting metrics
  totalCutLength: f().default(0),
  totalStackedCutLength: f().default(0),
  totalCuts: f().default(0),
  totalStackedCuts: f().default(0),
  // Area metrics
  totalStockArea: f().default(0),
  totalStockUsedArea: f().default(0),
  totalStockUnusedArea: f().default(0),
  totalPartArea: f().optional(),
  // Legacy name
  totalPartsArea: f().default(0),
  totalUnusedPartsArea: f().default(0),
  totalOffcutsArea: f().default(0),
  totalOffcuts: f().default(0),
  totalBladeArea: f().default(0),
  totalTrimArea: f().default(0),
  // Additional metrics
  totalPartsProduced: f().optional(),
  totalUsedStock: f().optional(),
  totalRollLength: f().optional(),
  totalStockWeight: f().optional(),
  totalPartWeight: f().optional()
}), Sn = Qh.extend({
  bandingLengthByType: Ie(p(), f()).default({}),
  unplacedParts: ae(Xh).default([])
}), ep = B({
  // Core optimization results
  stockList: ze("Stock"),
  shapeList: ze("Shape"),
  cutList: ze("Cut").optional(),
  segmentList: ze("Segment").optional(),
  offcuts: ze("Offcut").optional(),
  saw: Fe("Saw"),
  unusableShapes: ze("Shape").optional(),
  unavailableStock: ze("Stock").optional(),
  evolutionVisData: ae(B({})).optional(),
  performance: p().optional(),
  apiVersion: f().optional(),
  // Renamed from 'v'
  metadata: Sn.optional(),
  credits: f().optional(),
  // Optional input data for debugging/API reporting
  inputs: Da
});
B({
  // Job execution metadata
  success: R(),
  socketId: p().nullable().default(null),
  userId: p(),
  api: R(),
  app: R(),
  widget: R().optional(),
  cached: R().optional(),
  hash: p().optional(),
  webhook: p().optional(),
  config: we().optional(),
  error: p().optional(),
  jobId: f().optional(),
  // Input data
  inputs: Da,
  // The actual optimization results
  optimisation: ep
});
B({
  // Database metadata
  jobId: f().optional(),
  // Job execution data
  success: R(),
  socketId: p().nullable().default(null),
  userId: p(),
  api: R(),
  app: R(),
  widget: R().optional(),
  cached: R().optional(),
  hash: p().optional(),
  webhook: p().optional(),
  config: we().optional(),
  error: p().optional(),
  // Optimization results (flattened from optimization object)
  stockList: ze("Stock"),
  shapeList: ze("Shape"),
  cutList: ze("Cut").optional(),
  segmentList: ze("Segment").optional(),
  offcuts: ze("Offcut").optional(),
  saw: Fe("Saw"),
  unusableShapes: ze("Shape").optional(),
  unavailableStock: ze("Stock").optional(),
  performance: p().optional(),
  metadata: Sn.optional(),
  apiVersion: f().optional(),
  credits: f().optional(),
  // Input data
  inputs: Da,
  // Computed fields for easier querying/display
  numParts: f().optional(),
  numStock: f().optional()
});
B({
  id: p().optional(),
  name: p().optional(),
  l: f(),
  w: f(),
  t: f().nullable().optional(),
  material: p().optional(),
  q: f().optional(),
  orientationLock: ve([
    Pe(""),
    Pe("l"),
    Pe("w")
  ]).nullable().optional(),
  // Basic extras for display
  banding: we().optional(),
  finish: we().optional(),
  planing: we().optional()
});
const tp = B({
  issues: ae(p()),
  id: p(),
  duplicate: R(),
  name: p(),
  added: R(),
  x: f(),
  y: f(),
  l: f(),
  w: f(),
  t: f(),
  q: f().optional(),
  // Add quantity for checkout compatibility
  orientationLock: ve([
    Pe(""),
    Pe("l"),
    Pe("w")
  ]),
  trim: B({
    l1: f(),
    l2: f(),
    w1: f(),
    w2: f()
  }),
  material: p(),
  banding: we(),
  // Using any for now, could use bandingPropertiesSchema
  bandingType: we(),
  // Legacy field
  finish: we(),
  // Using any for now, could use finishPropertiesSchema
  stock: B({ id: p() }),
  rot: R(),
  notes: p(),
  customData: Ie(p(), ve([p(), f(), R()]))
});
B({
  issues: ae(p()),
  id: p(),
  duplicate: R().optional(),
  name: p(),
  l: f(),
  w: f(),
  t: f().nullable(),
  material: p(),
  cost: f(),
  used: R(),
  grain: ve([
    Pe(""),
    Pe("l"),
    Pe("w"),
    li()
  ]).nullable(),
  trim: B({
    l1: f(),
    l2: f(),
    w1: f(),
    w2: f()
  }),
  parts: ae(tp),
  efficiency: f(),
  notes: p().optional(),
  // Legacy V1 fields
  blade: B({
    width: f()
  }).optional(),
  cutPreference: ve([
    Pe("l"),
    Pe("w"),
    Pe("flex")
  ]).optional(),
  // Analysis data
  analysis: B({
    partArea: f(),
    totalParts: f(),
    areaEfficiency: f(),
    cutLength: f(),
    bandingLength: f(),
    numberOfCuts: f(),
    rollLength: f().optional()
  }).optional(),
  // Stack info
  stack: we().optional(),
  // Stock quantity for checkout compatibility
  q: f().optional()
});
const ip = (t, e, i) => {
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
}, sp = /* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-CPHm8s6P.js"), "../translation/cs.json": () => import("./cs-C2S6J-mx.js"), "../translation/da.json": () => import("./da-CXzNOM9l.js"), "../translation/de.json": () => import("./de-B0qoHPXv.js"), "../translation/el.json": () => import("./el-B4FKY8xI.js"), "../translation/en.json": () => import("./en-BZzrJ3fK.js"), "../translation/es.json": () => import("./es-DRC67gaz.js"), "../translation/fi.json": () => import("./fi-D_GIqIcs.js"), "../translation/fr.json": () => import("./fr-Dist6drR.js"), "../translation/hi.json": () => import("./hi-BVnvWste.js"), "../translation/hr.json": () => import("./hr-DAxaRBza.js"), "../translation/hu.json": () => import("./hu-Clgva1zP.js"), "../translation/id.json": () => import("./id-DNHaXBcy.js"), "../translation/it.json": () => import("./it-D1A5KCdL.js"), "../translation/ja.json": () => import("./ja-ChQIIPoa.js"), "../translation/ko.json": () => import("./ko-B11PDMEM.js"), "../translation/ms.json": () => import("./ms-CQG5CzrQ.js"), "../translation/nl.json": () => import("./nl-B8K2sLmq.js"), "../translation/no.json": () => import("./no-DCE4N7Tb.js"), "../translation/pl.json": () => import("./pl-2ZUqXFM6.js"), "../translation/pt.json": () => import("./pt-BloOdAzA.js"), "../translation/ro.json": () => import("./ro-Y3DTWab1.js"), "../translation/ru.json": () => import("./ru-C1exjNAG.js"), "../translation/sk.json": () => import("./sk-Dlz6v4ti.js"), "../translation/sv.json": () => import("./sv-C7ajM1BQ.js"), "../translation/th.json": () => import("./th-CtTENspU.js"), "../translation/tr.json": () => import("./tr-bSDPqmmi.js"), "../translation/uk.json": () => import("./uk-DuECGuzi.js"), "../translation/vi.json": () => import("./vi-zAYpELt8.js"), "../translation/zh.json": () => import("./zh-CLUzozQ4.js") }), Xi = Object.keys(sp).map((t) => {
  const e = t.match(/\/([a-zA-Z0-9_-]+)\.json$/);
  return e ? e[1] : "";
}).filter((t) => t !== "");
Xi.length === 0 && console.warn("[i18n] No language files found in ../translation/. Check paths and bundler setup for import.meta.glob.");
const la = "en", Tt = jr.createInstance();
function H(t, e) {
  if (Hr())
    return t;
  if (!Tt.isInitialized) {
    const s = Array.isArray(t) ? t.join(", ") : String(t);
    return console.warn(`[i18n] t function called before i18next was initialized. Key: ${s}. Returning key.`), s;
  }
  let i = Tt.t(t, e);
  return i = typeof i == "string" ? i : String(i), Yi(i);
}
const Ds = {}, np = {
  type: "backend",
  init: () => {
  },
  // The `namespace` parameter will now be ignored by your backend logic
  read: async (t, e, i) => {
    try {
      if (Ds[t]) {
        i(null, Ds[t]);
        return;
      }
      const s = await ip(/* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-CPHm8s6P.js"), "../translation/cs.json": () => import("./cs-C2S6J-mx.js"), "../translation/da.json": () => import("./da-CXzNOM9l.js"), "../translation/de.json": () => import("./de-B0qoHPXv.js"), "../translation/el.json": () => import("./el-B4FKY8xI.js"), "../translation/en.json": () => import("./en-BZzrJ3fK.js"), "../translation/es.json": () => import("./es-DRC67gaz.js"), "../translation/fi.json": () => import("./fi-D_GIqIcs.js"), "../translation/fr.json": () => import("./fr-Dist6drR.js"), "../translation/hi.json": () => import("./hi-BVnvWste.js"), "../translation/hr.json": () => import("./hr-DAxaRBza.js"), "../translation/hu.json": () => import("./hu-Clgva1zP.js"), "../translation/id.json": () => import("./id-DNHaXBcy.js"), "../translation/it.json": () => import("./it-D1A5KCdL.js"), "../translation/ja.json": () => import("./ja-ChQIIPoa.js"), "../translation/ko.json": () => import("./ko-B11PDMEM.js"), "../translation/ms.json": () => import("./ms-CQG5CzrQ.js"), "../translation/nl.json": () => import("./nl-B8K2sLmq.js"), "../translation/no.json": () => import("./no-DCE4N7Tb.js"), "../translation/pl.json": () => import("./pl-2ZUqXFM6.js"), "../translation/pt.json": () => import("./pt-BloOdAzA.js"), "../translation/ro.json": () => import("./ro-Y3DTWab1.js"), "../translation/ru.json": () => import("./ru-C1exjNAG.js"), "../translation/sk.json": () => import("./sk-Dlz6v4ti.js"), "../translation/sv.json": () => import("./sv-C7ajM1BQ.js"), "../translation/th.json": () => import("./th-CtTENspU.js"), "../translation/tr.json": () => import("./tr-bSDPqmmi.js"), "../translation/uk.json": () => import("./uk-DuECGuzi.js"), "../translation/vi.json": () => import("./vi-zAYpELt8.js"), "../translation/zh.json": () => import("./zh-CLUzozQ4.js") }), `../translation/${t}.json`, 3);
      Ds[t] = s.default, i(null, Ds[t]);
    } catch (s) {
      const n = `[i18n] Failed to load local resource module for language '${t}'. Error: ${s.message}`;
      console.warn(n, s), i(s, null);
    }
  }
};
async function ap() {
  return Bu(Tt), await Tt.use(Ul).use(np).init({
    debug: !1,
    fallbackLng: la,
    supportedLngs: Xi.length > 0 ? Xi : [la],
    interpolation: {
      format: function(t, e) {
        return e === "c" ? Ru(t) : e === "sc" ? Yi(t) : t;
      }
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"]
    }
  }), Tt;
}
const Qo = ap().catch((t) => {
  console.error("[i18n] CRITICAL: Initialization failed.", t);
});
function rp() {
  return Tt.isInitialized;
}
const op = async (t) => {
  if (Xi.length > 0 && !Xi.includes(t))
    return console.warn(`[i18n] Attempted to change to unsupported language: ${t}. Current: ${Tt.language}`), Tt.language;
  Tt.isInitialized || (console.warn("[i18n] changeLanguage called before initialization. Awaiting i18nextReady."), await Qo);
  try {
    return await Tt.changeLanguage(t), console.log(`[i18n] Language changed to ${t}`), Tt.language;
  } catch (e) {
    return console.error(`[i18n] Failed to change language to ${t}:`, e), Tt.language;
  }
}, Xw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, FALLBACK_LANGUAGE: la, SUPPORTED_LANGUAGES: Xi, changeLanguage: op, i18nextInstance: Tt, i18nextReady: Qo, isI18nInitialized: rp, t: H }, Symbol.toStringTag, { value: "Module" })), Dt = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [s, n] of e)
    i[s] = n;
  return i;
};
function lp(t, e = []) {
  if (!t?.length) return [];
  const i = t.map((s) => s && typeof s.getType == "function" ? s : $a(s)).filter((s) => s instanceof qo);
  return e.length && cp(i, e), i;
}
function cp(t = [], e = []) {
  t.length && e.length && t.forEach((i) => {
    i.shapeIds = i.shapeIds.filter((s) => e.find((n) => n.autoId === s));
  });
}
function gr(t) {
  try {
    if (Ur()) {
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
function mr(t) {
  try {
    if (Ur())
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
function el(t) {
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
function up(t) {
  return t.map((e) => {
    const i = e.path.length > 0 ? e.path.join(".") : "root", s = el(e), n = yo(e.message, s);
    return `[${i}] ${n}`;
  });
}
function rs(t, e) {
  const i = t.safeParse(e);
  return {
    success: i.success,
    data: i.success ? i.data : void 0,
    errors: i.success ? void 0 : i.error.issues
  };
}
function dp(t = {}) {
  try {
    let e = function(P) {
      if (!P || typeof P != "object") return P;
      const O = { ...P };
      if (delete O.issues, delete O.warnings, O.trim && typeof O.trim == "object") {
        const S = O.trim;
        ("x1" in S || "x2" in S || "y1" in S || "y2" in S) && (O.trim = {
          l1: S.y1 ?? S.l1 ?? 0,
          l2: S.y2 ?? S.l2 ?? 0,
          w1: S.x1 ?? S.w1 ?? 0,
          w2: S.x2 ?? S.w2 ?? 0
        });
      }
      if (O.extras?.banding?.sides && typeof O.extras.banding.sides == "object") {
        const S = O.extras.banding.sides;
        ("x1" in S || "x2" in S || "y1" in S || "y2" in S) && (O.extras.banding.sides = {
          l1: S.y1 ?? S.l1,
          l2: S.y2 ?? S.l2,
          w1: S.x1 ?? S.w1,
          w2: S.x2 ?? S.w2
        });
      }
      if (O.extras?.finish?.sides && typeof O.extras.finish.sides == "object") {
        const S = O.extras.finish.sides;
        ("x1" in S || "x2" in S || "y1" in S || "y2" in S) && (O.extras.finish.sides = {
          l1: S.y1 ?? S.l1,
          l2: S.y2 ?? S.l2,
          w1: S.x1 ?? S.w1,
          w2: S.x2 ?? S.w2
        });
      }
      if (O.extras?.planing?.sides && typeof O.extras.planing.sides == "object") {
        const S = O.extras.planing.sides;
        ("x1" in S || "x2" in S || "y1" in S || "y2" in S) && (O.extras.planing.sides = {
          l1: S.y1 ?? S.l1,
          l2: S.y2 ?? S.l2,
          w1: S.x1 ?? S.w1,
          w2: S.x2 ?? S.w2
        });
      }
      if (O.efficiencyOptions?.primaryCompression) {
        const S = O.efficiencyOptions.primaryCompression;
        S === "x" ? O.efficiencyOptions = {
          ...O.efficiencyOptions,
          primaryCompression: "l"
        } : S === "y" && (O.efficiencyOptions = {
          ...O.efficiencyOptions,
          primaryCompression: "w"
        });
      }
      for (const S in O)
        O[S] === null && delete O[S];
      return O;
    }, i = function(P, O) {
      if (!Array.isArray(P))
        return [];
      const S = [];
      for (let X = 0; X < P.length; X++) {
        const Z = P[X], be = e(Z);
        try {
          const Ce = {
            ...be,
            skipSchemaValidation: !0
            // Skip Zod validation during construction
          };
          Z.autoId && (Ce.autoId = Z.autoId), delete Ce.issues, delete Ce.warnings;
          const Te = new cs(Ce, O);
          S.push(Te);
        } catch (Ce) {
          console.error(`Failed to create InputShape at index ${X}:`, Ce);
        }
      }
      return S;
    }, s = function(P, O) {
      if (!Array.isArray(P)) return [];
      const S = [];
      for (let X = 0; X < P.length; X++) {
        const Z = P[X], be = e(Z);
        try {
          const Ce = {
            ...be,
            skipSchemaValidation: !0
            // Skip Zod validation during construction
          };
          Z.autoId && (Ce.autoId = Z.autoId);
          const Te = new Fs(Ce, O);
          S.push(Te);
        } catch (Ce) {
          console.error(`Failed to create InputStock at index ${X}:`, Ce);
        }
      }
      return S;
    }, n = function(P) {
      const O = e(P), S = rs(Ti, O);
      if (S.success && S.data) {
        const X = {
          ...S.data,
          issues: [],
          warnings: []
        };
        return P?.autoId && (X.autoId = P.autoId), new si(X);
      } else
        return console.error("Failed to parse input saw:", S.errors), new si({});
    }, a = function(P, O) {
      return Array.isArray(P) ? O && O.length ? lp(P, O) : P.map((S) => new qo(S)).filter(Boolean) : [];
    }, r = function(P = {}) {
      try {
        const X = { ...jt(
          (be) => {
            if (typeof be != "object" || be === null) return be;
            const Ce = { ...be };
            for (const Te in Ce)
              Ce[Te] === null && delete Ce[Te];
            return Ce;
          },
          vi
        ).parse(P), isNew: !0 }, Z = new cs(X, te);
        return Z.createId(J.value.length), J.value.push(Z), Z;
      } catch (O) {
        return O instanceof Vi && (console.error("Shape validation failed:", O.issues), C("part", "Invalid shape data", O.issues)), null;
      }
    }, o = function(P = {}) {
      try {
        const S = { ...Kt.parse(P), isNew: !0 }, X = new Fs(S, te);
        return X.createId(j.value.length), j.value.push(X), X;
      } catch (O) {
        return O instanceof Vi && (console.error("Stock validation failed:", O.issues), C("stock", "Invalid stock data", O.issues)), null;
      }
    }, l = function(P) {
      try {
        const O = P.toData(), S = vi.parse(O);
        return new cs(S, te);
      } catch (O) {
        return O instanceof Vi && (console.error("Shape clone validation failed:", O.issues), C("part", "Invalid shape data during cloning", O.issues)), null;
      }
    }, c = function(P) {
      try {
        const O = P.toData(), S = Kt.parse(O);
        return new Fs(S, te);
      } catch (O) {
        return O instanceof Vi && (console.error("Stock clone validation failed:", O.issues), C("stock", "Invalid stock data during cloning", O.issues)), null;
      }
    }, u = function(P, O) {
      const S = J.value.find((be) => be.autoId === P);
      if (!S) return !1;
      const X = { ...S.toData(), ...O }, Z = rs(vi, X);
      if (Z.success && Z.data)
        return S.update(Z.data), S.isNew || S.validate(), !0;
      {
        const be = Z.errors ? up(Z.errors) : [];
        console.error("Shape update validation failed:", be);
        const Ce = Z.errors?.[0];
        if (Ce) {
          const Te = el(Ce);
          new ue({
            category: ["part"],
            message: Ce.message,
            // This is the translation key from Zod error map
            params: Te,
            issues: U.value
          });
        } else
          C("part", "Invalid shape update");
        return !1;
      }
    }, d = function(P, O) {
      const S = J.value.findIndex((Z) => Z.autoId === P);
      if (S === -1) return !1;
      const X = J.value[S];
      return X.validate({ fields: [O] }), X.issues.length === 0;
    }, h = function(P, O) {
      const S = j.value.find((be) => be.autoId === P);
      if (!S) return !1;
      const X = { ...S.toData(), ...O }, Z = rs(Kt, X);
      return Z.success && Z.data ? (S.update(Z.data), S.isNew || T(), !0) : (console.error("Stock update validation failed:", Z.errors), C("stock", "Invalid stock update", Z.errors), !1);
    }, g = function(P, O) {
      const S = j.value.findIndex((Z) => Z.autoId === P);
      if (S === -1) return !1;
      const X = j.value[S];
      return X.validate({ fields: [O] }), Yl(j), X.issues.length === 0;
    }, k = function(P) {
      if (J.value.length === 1) return !1;
      const O = J.value.findIndex((S) => S.autoId === P);
      return O === -1 ? !1 : (J.value.splice(O, 1), !0);
    }, M = function(P) {
      if (j.value.length === 1) return !1;
      const O = j.value.findIndex((S) => S.autoId === P);
      return O === -1 ? !1 : (j.value.splice(O, 1), !0);
    }, N = function(P) {
      ne.value = !0;
      const O = [];
      try {
        J.value.forEach((S) => S.issues = []);
        for (let S = 0; S < J.value.length; S++) {
          const X = J.value[S];
          if (X.isNew)
            continue;
          const Z = X.validate({
            inputStockList: j.value,
            index: S,
            stockType: P?.stockType ?? null,
            partTrim: 0,
            useInventory: !1,
            saw: P
          });
          O.push(...Z);
        }
        J.value.some((S) => Number(S.q) > 0) || new ue({
          category: ["part"],
          message: "errors.validation.no_parts",
          issues: O
        });
      } finally {
        ne.value = !1;
      }
      return U.value = O, O;
    }, T = function(P) {
      ne.value = !0;
      const O = [];
      try {
        j.value.forEach((S) => S.issues = []);
        for (let S = 0; S < j.value.length; S++) {
          const Z = j.value[S].validate({ saw: P }, S);
          O.push(...Z);
        }
        j.value.some((S) => Number(S.q) > 0 || S.autoAdd) || new ue({
          category: ["stock"],
          message: "errors.validation.no_stock",
          issues: O
        });
      } finally {
        ne.value = !1;
      }
      return U.value = O, O;
    }, C = function(P, O, S) {
      new ue({
        category: [P],
        message: O,
        issues: U.value
      }), S && console.log("Validation details:", S);
    }, D = function() {
      U.value = [], J.value.forEach((P) => P.issues = []), j.value.forEach((P) => P.issues = []);
    }, x = function(P = {}) {
      const O = [], S = [], X = P.inputShapesOverride ?? J.value;
      if (!X.length)
        return { shapeList: [], issues: [] };
      for (let Z = 0; Z < X.length; Z++) {
        const be = X[Z];
        if (!be.q) continue;
        be.createId(Z), be.applyPartTrim(P.trim, P.stockType);
        const Ce = be.toShape();
        P.minSpacing && P.maxDimension && (Ce.l <= P.maxDimension || Ce.w <= P.maxDimension) && (Ce.minSpacing = P.minSpacing), O.push(Ce), S.push(...Ce.issues);
      }
      return { shapeList: O, issues: S };
    }, L = function(P) {
      if (!j.value.length)
        return { stockList: [], issues: [] };
      const O = [], S = [];
      for (let X = 0; X < j.value.length; X++) {
        const Z = j.value[X];
        if (!Z.q && !Z.autoAdd) continue;
        Z.createId(X), Z.saw = P;
        const be = Z.toStock();
        O.push(be), S.push(...be.issues);
      }
      return { stockList: O, issues: S };
    }, Y = function(P, O = te) {
      const S = {
        saw: { success: !1, failed: !1 },
        shapes: { success: 0, failed: 0 },
        stock: { success: 0, failed: 0 },
        groups: { success: 0, failed: 0 }
      };
      if (P.saw) {
        const X = rs(Ti, e(P.saw));
        if (X.success && X.data) {
          const Z = { ...X.data };
          P.saw?.autoId && (Z.autoId = P.saw.autoId), V.value = new si(Z), S.saw.success = !0;
        } else
          console.error("Failed to parse input saw:", X.errors), S.saw.failed = !0;
      }
      if (P.shapes) {
        const X = i(P.shapes, O);
        S.shapes.success = X.length, S.shapes.failed = P.shapes.length - X.length, J.value = X;
      }
      if (P.stock) {
        const X = s(P.stock, O);
        S.stock.success = X.length, S.stock.failed = P.stock.length - X.length, j.value = X;
      }
      if (P.groups) {
        const X = a(P.groups);
        S.groups.success = X.length, S.groups.failed = P.groups.length - X.length, q.value = X;
      }
      return P.extrasOptions && (G.value = { ...P.extrasOptions }), S;
    }, _ = function() {
      return {
        shapes: J.value.map((P) => P.toData()),
        stock: j.value.map((P) => P.toData()),
        inputUserGroups: q.value.map((P) => P.toData()),
        extrasOptions: G.value
      };
    }, ce = function() {
      J.value = [], j.value = [], q.value = [], D();
    }, z = function(P) {
      const O = { ...V.value.toData(), ...P }, S = rs(Ti, O);
      return S.success && S.data ? (V.value.update(S.data), !0) : (console.error("InputSaw update validation failed:", S.errors), C("saw", "Invalid saw update", S.errors), !1);
    }, y = function() {
      V.value = new si({});
    }, W = function() {
      const P = V.value.validate();
      return U.value = [...U.value.filter((O) => O.category?.[0] !== "saw"), ...P], P;
    };
    const { numberFormat: te = "decimal" } = t, J = ss("inputs/inputShapes", [], {
      serializer: {
        read: (P) => {
          if (!P) {
            const X = "GlobalStore/inputShapes", Z = gr(X);
            if (Z)
              P = Z, mr(X);
            else return [];
          }
          let O;
          try {
            O = JSON.parse(P);
          } catch (X) {
            return console.error("Failed to parse input shapes JSON:", X), [];
          }
          return i(O, te);
        },
        write: (P) => {
          const S = P.filter((Z) => !Z?.multiEdit).map((Z) => Z.toData());
          return JSON.stringify(S);
        }
      },
      listenToStorageChanges: !1
    }), j = ss("inputs/inputStock", [], {
      serializer: {
        read: (P) => {
          if (!P) return [];
          let O;
          try {
            O = JSON.parse(P);
          } catch (X) {
            return console.error("  Failed to parse stock JSON:", X), [];
          }
          return s(O, te);
        },
        write: (P) => {
          const S = P.filter((Z) => !Z?.multiEdit).map((Z) => Z.toData());
          return JSON.stringify(S);
        }
      },
      listenToStorageChanges: !1
    }), V = ss("inputs/inputSaw", new si({}), {
      serializer: {
        read: (P) => {
          if (!P) {
            const S = gr("saw");
            if (S)
              P = S, mr("saw");
            else return new si({});
          }
          try {
            const O = JSON.parse(P);
            return n(O);
          } catch (O) {
            return console.error("  Failed to parse saw JSON:", O), new si({});
          }
        },
        write: (P) => {
          if (!P)
            return JSON.stringify({});
          const O = P.toData();
          return JSON.stringify(O);
        }
      },
      listenToStorageChanges: !1
    }), q = ss("inputs/inputUserGroups", [], {
      serializer: {
        read: (P) => a(P ? JSON.parse(P) : []),
        write: (P) => JSON.stringify(P.map((O) => O.toData()))
      }
    }), G = ss("inputs/extrasOptions", {
      banding: { options: [] },
      finish: { options: [] },
      planing: { options: [] }
    }, {
      serializer: {
        read: (P) => {
          if (!P) return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          try {
            return JSON.parse(P);
          } catch {
            return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          }
        },
        write: (P) => JSON.stringify(P)
      }
    }), U = oe([]), ne = oe(!1);
    J.value.length === 0 && (J.value = [new cs({ isNew: !0 })]), j.value.length === 0 && (j.value = [new Fs({ isNew: !0 })]);
    const Se = ie(() => J.value.reduce((P, O) => {
      const S = Number(O?.q);
      return S && S > 0 && !O?.multiEdit ? P + S : P;
    }, 0)), me = ie(() => j.value.reduce((P, O) => {
      const S = Number(O?.q);
      return S && S > 0 && !O?.multiEdit ? P + S : P;
    }, 0)), xe = ie(() => J.value.reduce((P, O) => O?.multiEdit ? P : P + 1, 0)), $e = ie(() => j.value.reduce((P, O) => O?.multiEdit ? P : P + 1, 0)), Q = ie(() => U.value.length > 0), Ve = () => [
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
    ], ot = oe(null), Xe = oe(null), et = () => {
      ot.value = null;
    }, ee = D, Me = (P = null) => {
      const O = P?.inputShapesOverride ?? J.value, S = N(P?.saw || void 0);
      if (O.length) {
        Ro(O, j.value, P?.saw || V.value);
        const X = O.flatMap((Z) => Z.issues);
        return [...S, ...X];
      }
      return S;
    }, vt = (P, O = "decimal") => {
      const S = P?.inputSaw, X = P?.inputShapes, Z = P?.inputStock, be = P?.inputUserGroups;
      return Y({
        saw: S,
        shapes: X,
        stock: Z,
        groups: be
      }, O);
    }, gt = (P, O = "decimal") => Y({ shapes: P }, O).shapes.success > 0, Qi = (P, O = "decimal") => Y({ stock: P }, O).stock.success > 0, kt = (P, O, S, X) => {
      O[0]?.length > 0 && (G.value[P] || (G.value[P] = { options: [] }), G.value[P].options = [...O[0]]), S && X && O.length > 0 ? Za(P, {
        options: O,
        // Use all columns extracted from pricing
        labels: S,
        pricing: X
      }) : console.warn("[setExtrasOptionsFromPricing] Missing data for centralized config:", { labels: S, pricingData: X, pricingOptionsLength: O.length });
    }, fe = () => {
      if (!Object.values(G.value).some(
        (S) => S.options.length > 0
      )) return;
      const O = (S, X) => {
        const Z = {};
        for (const be of X)
          Z[be] = [...S];
        return Z;
      };
      return {
        banding: G.value.banding.options.length > 0 ? {
          options: {
            sides: O(G.value.banding.options, ["l1", "l2", "w1", "w2"])
          }
        } : void 0,
        finish: G.value.finish.options.length > 0 ? {
          options: {
            faces: O(G.value.finish.options, ["a", "b"])
          }
        } : void 0,
        planing: G.value.planing.options.length > 0 ? {
          options: {
            sides: O(G.value.planing.options, ["l1", "l2", "w1", "w2"]),
            faces: O(G.value.planing.options, ["a", "b"])
          }
        } : void 0
      };
    }, pe = (P) => {
      if (!j.value.length) return "n";
      const O = P.material, S = P.t, X = j.value.filter((Te) => Te.material === O && Te.t === S);
      if (!X.length)
        return "n";
      let Z = !1, be = !1, Ce = !1;
      for (const Te of X)
        Te.grain === "l" ? (Z = !0, be = !0) : Te.grain === "w" && (Z = !0, Ce = !0);
      return Z ? be && Ce ? "y" : be ? "l" : Ce ? "w" : "n" : "n";
    }, de = (P) => {
      for (const O of J.value)
        er(O, P);
      for (const O of j.value)
        er(O, P);
    };
    let ye = !1;
    return He(J, (P) => {
      ye || !P.length || mt(() => {
        const O = ["banding", "finish", "planing"], S = [];
        O.forEach((X) => {
          const Z = /* @__PURE__ */ new Set();
          if (P.forEach((be) => {
            const Ce = be.extras?.[X];
            Ce && (Ce.faces && Object.values(Ce.faces).forEach((Te) => {
              typeof Te == "string" && Te.trim() && Te !== "Y" && Z.add(Te);
            }), Ce.sides && Object.values(Ce.sides).forEach((Te) => {
              typeof Te == "string" && Te.trim() && Te !== "Y" && Z.add(Te);
            }));
          }), Z.size > 0) {
            const be = xc(X);
            if (be) {
              const Ce = be.options[0];
              if (Array.isArray(Ce) && (Ce.length === 0 || typeof Ce[0] == "string")) {
                const Te = new Set(Ce), Pt = Array.from(Z).filter((_e) => !Te.has(_e));
                if (Pt.length > 0) {
                  const _e = [...Ce, ...Pt];
                  Za(X, {
                    ...be,
                    options: [_e, ...be.options.slice(1)]
                  });
                }
              }
            }
          }
        }), O.forEach((X) => {
          const Z = kc(X, P);
          Z.cleanedCount > 0 && S.push(
            `${X}: ${Z.invalidOptions.join(", ")}`
          );
        }), S.length > 0 && (console.warn(
          `Some extras options no longer exist and have been reset:
` + S.join(`
`)
        ), typeof window < "u" && window.alert && setTimeout(() => {
          alert(
            `Some extras options no longer exist and have been reset:
` + S.join(`
`)
          );
        }, 500)), ye = !0;
      });
    }, { immediate: !0 }), {
      // Bundled object
      inputs: {
        inputStock: j,
        inputShapes: J,
        inputUserGroups: q,
        currentInputShape: ot,
        selectedSaw: Xe,
        inputSaw: V
      },
      // State
      inputShapes: J,
      inputStock: j,
      inputUserGroups: q,
      inputSaw: V,
      currentInputShape: ot,
      selectedSaw: Xe,
      validationIssues: U,
      isValidating: ne,
      // Computed
      totalInputShapes: Se,
      totalInputStock: me,
      totalInputShapeLines: xe,
      totalInputStockLines: $e,
      hasValidationIssues: Q,
      // Actions
      addInputShape: r,
      addInputStock: o,
      cloneInputShape: l,
      cloneInputStock: c,
      updateInputShape: u,
      updateInputStock: h,
      updateInputSaw: z,
      removeInputShape: k,
      removeInputStock: M,
      reset: et,
      resetInputSaw: y,
      clear: ce,
      clearIssues: ee,
      // Validation
      validateInputShapes: Me,
      validateInputShapeField: d,
      validateInputStock: T,
      validateInputStockField: g,
      validateInputSaw: W,
      clearValidationIssues: D,
      // Conversion
      createShapeList: x,
      createStockList: L,
      // Import/Export/Update
      importData: Y,
      exportData: _,
      updateInputs: vt,
      importInputShapes: gt,
      importInputStock: Qi,
      // Additional functions
      getShapeGrainSummary: pe,
      updateNumberFormat: de,
      getSpecialShapeFields: Ve,
      // Extras Options Management
      extrasOptions: G,
      setExtrasOptionsFromPricing: kt,
      getCentralizedOptions: fe
    };
  } catch (e) {
    throw console.error("[createInputs] Fatal error during initialization:", e), e;
  }
}
let Vn = null;
function tl(t = { numberFormat: "decimal" }) {
  try {
    return Vn || (Vn = dp(t)), Vn;
  } catch (e) {
    throw console.error("[useInputs] FATAL ERROR in useInputs:", e), console.error("[useInputs] Error stack:", e?.stack), e;
  }
}
class yr {
  /**
   * Migrate a single shape from old structure to new structure
   */
  static migrateShape(e) {
    this.migrateBanding(e), this.migrateFinish(e), this.migrateStorageFormat(e);
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
    const i = e.banding, s = "_banding" in e ? e._banding : void 0, n = Le(e) ? e.bandingOptions : void 0;
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
      for (const [d, h] of Object.entries(u))
        Ot.includes(d) && (a[d] = h);
    }
    if (s && typeof s == "object") {
      const u = this.migrateSideNames(s);
      for (const [d, h] of Object.entries(u))
        Ot.includes(d) && (r[d] = h);
    }
    if (n && typeof n == "object") {
      n.all && (o.sides.all = n.all);
      for (const [u, d] of Object.entries(n))
        u !== "all" && Ot.includes(u) && d && (o.sides[u] = d);
    }
    const l = new _t(Object.keys(a).length > 0 ? { sides: a } : {}), c = Object.keys(r).length > 0 ? new _t({ sides: r }) : void 0;
    return "extras" in e && e.extras ? e.extras.banding = l : Le(e) && (e.banding = l), c && "_banding" in e && (e._banding = c), Le(e) && n && (e.bandingOptions = o), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(e) {
    const i = e.finish, s = "_finish" in e ? e._finish : void 0, n = Le(e) ? e.finishOptions : void 0;
    if (!i && !s && !n || i && i instanceof Lt)
      return !1;
    const a = {}, r = {}, o = { faces: {} };
    if (i && typeof i == "object")
      for (const [u, d] of Object.entries(i))
        bt.includes(u) && (a[u] = d);
    if (s && typeof s == "object")
      for (const [u, d] of Object.entries(s))
        bt.includes(u) && (r[u] = d);
    if (n && typeof n == "object") {
      n.all && (o.faces.all = n.all);
      for (const [u, d] of Object.entries(n))
        u !== "all" && bt.includes(u) && d && (o.faces[u] = d);
    }
    const l = new Lt(Object.keys(a).length > 0 ? { faces: a } : {}), c = Object.keys(r).length > 0 ? new Lt({ faces: r }) : void 0;
    return "extras" in e && e.extras ? e.extras.finish = l : Le(e) && (e.finish = l), c && "_finish" in e && (e._finish = c), Le(e) && n && (e.finishOptions = o), !0;
  }
  /**
   * Migrate storage format: Convert boolean true to option name strings in multi-column configs
   * This handles legacy data where single-option checkboxes stored boolean true instead of the option name
   */
  static migrateStorageFormat(e) {
    let i = !1;
    const s = "extras" in e && e.extras ? e.extras : e;
    if (s.banding) {
      const n = Nt("banding");
      if (n && n.labels && n.labels.length > 1)
        for (const a of Ot) {
          const r = `side.${a}`, o = Zi(e, "banding", r);
          if (o && typeof o == "object" && !Array.isArray(o)) {
            let l = !1;
            const c = { ...o };
            for (const u of n.labels)
              if (c[u] === !0) {
                const h = n.labels.indexOf(u);
                if (h !== -1 && n.options[h] && Array.isArray(n.options[h])) {
                  const g = n.options[h];
                  g.length === 1 && (c[u] = g[0], l = !0);
                }
              }
            l && (hs(e, "banding", r, c), i = !0);
          }
        }
    }
    if (s.finish) {
      const n = Nt("finish");
      if (n && n.labels && n.labels.length > 1)
        for (const a of bt) {
          const r = `face.${a}`, o = Zi(e, "finish", r);
          if (o && typeof o == "object" && !Array.isArray(o)) {
            let l = !1;
            const c = { ...o };
            for (const u of n.labels)
              if (c[u] === !0) {
                const h = n.labels.indexOf(u);
                if (h !== -1 && n.options[h] && Array.isArray(n.options[h])) {
                  const g = n.options[h];
                  g.length === 1 && (c[u] = g[0], l = !0);
                }
              }
            l && (hs(e, "finish", r, c), i = !0);
          }
        }
    }
    return i;
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
    if (s && typeof s == "object" && !(s instanceof Lt) && !("sides" in s) && !("faces" in s))
      return !0;
    if ("_finish" in e) {
      const n = e._finish;
      if (n && typeof n == "object" && !(n instanceof Lt) && !("sides" in n) && !("faces" in n))
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
          const n = Object.keys(i.sides).filter((a) => !Ot.includes(a));
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
    return "_banding" in e && e._banding && (i._banding = JSON.parse(JSON.stringify(e._banding))), "_finish" in e && e._finish && (i._finish = JSON.parse(JSON.stringify(e._finish))), Le(e) && (e.bandingOptions && (i.bandingOptions = JSON.parse(JSON.stringify(e.bandingOptions))), e.finishOptions && (i.finishOptions = JSON.parse(JSON.stringify(e.finishOptions)))), i;
  }
  /**
   * Restore shape from backup
   */
  static restoreFromBackup(e, i) {
    "extras" in e && e.extras ? (i.banding && (e.extras.banding = i.banding), i.finish && (e.extras.finish = i.finish)) : Le(e) && (i.banding && (e.banding = i.banding), i.finish && (e.finish = i.finish)), i._banding && "_banding" in e && (e._banding = i._banding), i._finish && "_finish" in e && (e._finish = i._finish), Le(e) && (i.bandingOptions && (e.bandingOptions = i.bandingOptions), i.finishOptions && (e.finishOptions = i.finishOptions));
  }
}
const fp = {
  y1: "l1",
  y2: "l2",
  x1: "w1",
  x2: "w2"
}, hp = {
  l1: "y1",
  l2: "y2",
  w1: "x1",
  w2: "x2"
};
function ca(t = !1) {
  return {
    l1: t,
    l2: t,
    w1: t,
    w2: t
  };
}
function pp(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t
  };
}
function rn(t = !1) {
  return {
    a: t,
    b: t
  };
}
function gp(t = !1) {
  return {
    sides: ca(t),
    faces: rn(t)
  };
}
function mp(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t,
    a: t,
    b: t
  };
}
function yp(t) {
  const e = {};
  for (const [i, s] of Object.entries(fp))
    i in t && (e[s] = t[i]);
  return e;
}
function bp(t) {
  const e = {};
  for (const [i, s] of Object.entries(hp))
    i in t && (e[s] = t[i]);
  return e;
}
function At(t) {
  return t === 1 ? !0 : t === 0 ? !1 : t;
}
function ai(t) {
  if (!t) return t;
  const e = "x1" in t || "x2" in t || "y1" in t || "y2" in t, i = "l1" in t || "l2" in t || "w1" in t || "w2" in t;
  if (e && i && console.warn("Mixed side format detected in data - using old format (x/y) and ignoring new format (l/w)", t), e) {
    const n = yp(t), a = {};
    return "l1" in n && (a.l1 = At(n.l1)), "l2" in n && (a.l2 = At(n.l2)), "w1" in n && (a.w1 = At(n.w1)), "w2" in n && (a.w2 = At(n.w2)), a;
  }
  const s = {};
  return "l1" in t && (s.l1 = At(t.l1)), "l2" in t && (s.l2 = At(t.l2)), "w1" in t && (s.w1 = At(t.w1)), "w2" in t && (s.w2 = At(t.w2)), Object.keys(s).length > 0 ? s : t;
}
function vp(t) {
  return !t || typeof t != "string" ? t : {
    "side.x1": "side.w1",
    "side.x2": "side.w2",
    "side.y1": "side.l1",
    "side.y2": "side.l2"
  }[t] || t;
}
function Ri(t) {
  return !t || !Array.isArray(t) ? t : t.map(vp);
}
function wp(t) {
  const e = {};
  if (t.banding && typeof t.banding == "object")
    for (const [i, s] of Object.entries(t.banding))
      s === !0 || s === !1 ? e[i] = s : typeof s == "number" ? e[i] = At(s) : typeof s == "string" && s.length > 0 && (e[i] = s);
  if (t.bandingType && typeof t.bandingType == "object")
    for (const [i, s] of Object.entries(t.bandingType))
      if (t.banding) {
        const n = e[i];
        (n === !0 || typeof n == "string" && n.length > 0) && (typeof s == "string" && s.length > 0 ? e[i] = s : typeof s == "number" && s !== 0 && (e[i] = String(s)));
      } else
        typeof s == "string" && s.length > 0 ? e[i] = s : typeof s == "number" && s !== 0 && (e[i] = String(s));
  return Object.keys(e).length > 0 ? e : void 0;
}
function ua(t) {
  return t && bp(t);
}
function Sp(t) {
  t?.type && delete t.type, xp.call(this, t), kp.call(this, t), Ip.call(this, t), t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => da(e));
}
function xp(t) {
  if (!t?.banding || typeof t.banding != "object") return;
  const e = Object.keys(t.banding);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.banding = {
    labels: Object.keys(t.banding),
    pricing: t.bandingPricing || {}
  }, t.bandingPricing && delete t.bandingPricing);
}
function kp(t) {
  if (!t?.finish || typeof t.finish != "object") return;
  const e = Object.keys(t.finish);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.finish = {
    labels: Object.keys(t.finish),
    pricing: t.finishPricing || {}
  }, t.finishPricing && delete t.finishPricing);
}
function Ip(t) {
  if (!t?.planing || typeof t.planing != "object") return;
  const e = Object.keys(t.planing);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.planing = {
    labels: Object.keys(t.planing),
    pricing: t.planingPricing || {}
  }, t.planingPricing && delete t.planingPricing);
}
function da(t) {
  !t || typeof t != "object" || (yr.needsMigration(t) && yr.migrateShape(t), t._banding && delete t._banding, t._finish && delete t._finish, t._bandingType && delete t._bandingType);
}
function il(t) {
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
function Qw(t) {
  if (!(!t || typeof t != "object")) {
    if (Sp(t), t.parts && Array.isArray(t.parts) && (t.parts = t.parts.map((e) => (e.extras?.banding?.sides && (e.extras.banding.sides = ai(e.extras.banding.sides)), e.extras?.finish?.sides && (e.extras.finish.sides = ai(e.extras.finish.sides)), e.extras?.planing?.sides && (e.extras.planing.sides = ai(e.extras.planing.sides)), e))), t.stock && Array.isArray(t.stock) && (t.stock = t.stock.map((e) => e?.trim ? {
      ...e,
      trim: ai(e.trim)
    } : e)), t.options) {
      if (il(t.options), t.options.bandingLocations && (t.options.bandingLocations = Ri(t.options.bandingLocations)), t.options.finishLocations && (t.options.finishLocations = Ri(t.options.finishLocations)), t.options.planingLocations && (t.options.planingLocations = Ri(t.options.planingLocations)), t.options.extrasLocationGroups)
        for (const e of ["banding", "finish", "planing"]) {
          const i = t.options.extrasLocationGroups[e];
          i && Array.isArray(i) && i.forEach((s) => {
            s.locations && (s.locations = Ri(s.locations));
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
        i.locations && Array.isArray(i.locations) && (i.locations = Ri(i.locations)), i.groups && Array.isArray(i.groups) && i.groups.forEach((s) => {
          s.locations && (s.locations = Ri(s.locations));
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
    t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => da(e)), (t.l !== void 0 || t.w !== void 0 || t.banding !== void 0) && da(t);
  }
}
function Pp(t) {
  if (!t || typeof t != "object")
    return t;
  const e = { ...t };
  return e.saw && (e.saw = Cp(e.saw)), Array.isArray(e.stock) && (e.stock = e.stock.map(Ap)), Array.isArray(e.parts) && (e.parts = e.parts.map(Tp)), e;
}
function Cp(t) {
  const e = { ...t };
  if (e.guillotineOptions && (e.guillotineOptions = { ...e.guillotineOptions }, e.guillotineOptions.strategy === "stock" && (e.guillotineOptions.strategy = "efficiency")), e.efficiencyOptions) {
    e.efficiencyOptions = { ...e.efficiencyOptions };
    const i = e.efficiencyOptions.primaryCompression;
    i === "x" ? e.efficiencyOptions.primaryCompression = "l" : i === "y" && (e.efficiencyOptions.primaryCompression = "w");
  }
  return e.bladeWidth !== void 0 && (e.bladeWidth = Number(e.bladeWidth)), e.stackHeight !== void 0 && (e.stackHeight = Number(e.stackHeight)), (e.cutPreference === null || e.cutPreference === void 0) && (e.cutType === "guillotine" || e.cutType === "beam") && (e.cutPreference = "l"), e;
}
function Ap(t) {
  const e = { ...t };
  return delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.trim && (e.trim = ai(e.trim)), e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e.cost !== void 0 && (e.cost = Number(e.cost)), e;
}
function Tp(t) {
  const e = { ...t };
  if (delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.banding || e.bandingType) {
    const i = wp(e);
    i && Object.keys(i).length > 0 && (e.extras || (e.extras = {}), e.extras.banding || (e.extras.banding = {}), e.extras.banding.sides = ai(i)), delete e.banding, delete e.bandingType;
  }
  if (e.extras?.banding?.sides && (e.extras = { ...e.extras }, e.extras.banding = { ...e.extras.banding }, e.extras.banding.sides = ai(e.extras.banding.sides)), e.finish && !e.extras?.finish) {
    if (e.extras || (e.extras = {}), e.extras.finish || (e.extras.finish = {}), e.finish.a !== void 0 || e.finish.b !== void 0) {
      const i = {};
      "a" in e.finish && (i.a = At(e.finish.a)), "b" in e.finish && (i.b = At(e.finish.b)), e.extras.finish.faces = i;
    } else
      e.extras.finish.sides = ai(e.finish);
    delete e.finish;
  }
  if (e.extras?.finish?.sides && (e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish }, e.extras.finish.sides = ai(e.extras.finish.sides)), e.extras?.finish?.faces) {
    e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish };
    const i = e.extras.finish.faces;
    "a" in i && (i.a = At(i.a)), "b" in i && (i.b = At(i.b));
  }
  return e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e;
}
const Op = { id: "mini-stock-nav" }, Lp = ["onMousedown"], Fp = { class: "id" }, $p = /* @__PURE__ */ Ue({
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
    activeStockId: {
      type: String,
      default: null
    }
  },
  emits: ["show-stock"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = (a) => {
      s("show-stock", a);
    };
    return (a, r) => (w(), F("div", Op, [
      (w(!0), F(Be, null, Ke(i.stockList, (o, l) => (w(), F("button", {
        type: "button",
        key: l,
        class: je(["c-btn c-btn--col-4 c-btn--sm", { selected: o.autoId === i.activeStockId }]),
        style: ut({
          backgroundColor: o.autoId === i.activeStockId ? "#" + i.secondaryColor : "#" + i.primaryColor
        }),
        onMousedown: (c) => n(o.autoId)
      }, [
        $("div", Fp, re(l + 1), 1),
        ys($("div", { class: "stack legibility" }, re(o.stack.number), 513), [
          [on, typeof o?.stack?.number == "number" && o.stack.number > 1]
        ])
      ], 46, Lp))), 128))
    ]));
  }
});
function Dp(t) {
  const e = t.x, i = t.x + t.l, s = Rt().domain([e, i]).range([this.scales.xPositionScale(e), this.scales.xPositionScale(i)]), n = t.y, a = t.y + t.w, r = Rt().domain([n, a]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(a)]), o = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + o})`).call(Us(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + o})`).attr("class", "axis shape x").call(Us(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), t?.stock?.saw?.stockType !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - o}, 0)`).call(Ys(r).tickValues(r.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - o}, 0)`).attr("class", "axis shape y").call(Ys(r).tickValues(r.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Ep() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((e) => {
    e.transition().duration(0).call(Gr(this.scales.xScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dy", -5);
  });
  const t = this.requiresStretch(this.props.stock.value);
  (!t || t && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((e) => {
    e.transition().duration(0).call(qr(this.scales.yAxisScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dx", 5);
  });
}
function sl(t, e, i) {
  !i || !t?.length || t.forEach((s, n) => {
    const [a, r] = s;
    i === "x" ? Mp.call(this, a, r, e[n]) : Rp.call(this, a, r, e[n]);
  });
}
function Mp(t, e, i) {
  const s = Rt().domain([t, e]).range([
    this.scales.xPositionScale(t),
    this.scales.xPositionScale(e)
  ]), n = nl(s.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(Us(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(i)));
  a.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (r, o, l) => l[o]?.getBBox()?.height + 10), this.axes.cutMeasurementXAxes.push(a);
}
function Rp(t, e, i) {
  const s = Rt().domain([t, e]).range([
    this.scales.yPositionScale(t),
    this.scales.yPositionScale(e)
  ]), n = nl(s.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(Ys(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(i)));
  _p(a), this.axes.cutMeasurementYAxes.push(a);
}
function nl(t) {
  return (t[1] - t[0]) / 2 + t[0];
}
function _p(t) {
  t.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (e, i, s) => s[i]?.getBBox()?.height + 10).attr("dx", (e, i, s) => s[i]?.getBBox()?.width / 4).attr("transform", (e, i, s) => "rotate(90) translate(" + s[i]?.getBBox()?.width / 4 + ")");
}
function gs() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function jp() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function xn() {
  this.axes.cutMeasurementXAxes?.length && (this.axes.cutMeasurementXAxes.forEach((t) => t.remove()), this.axes.cutMeasurementXAxes.length = 0), this.axes.cutMeasurementYAxes?.length && (this.axes.cutMeasurementYAxes.forEach((t) => t.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function al(t) {
  return t.autoId;
}
function Bp(t, e) {
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
function Es({ parent: t, near: e, far: i }) {
  if (!this.props.containerWidth)
    return !1;
  const s = [t, e, i].filter((n) => n);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(s, al).join(
    (n) => n.append("rect").attr("class", "segment").call((a) => br.call(this, a)),
    (n) => n.call((a) => br.call(this, a)),
    (n) => n.remove()
  ), this.state.env === "development" && Vp.call(this, s), !this.settings.app && this.state.env === "development" && Np.call(this);
}
function br(t) {
  return t.classed("offcut", (e) => e.offcut).classed("near", (e) => e.type === "near").classed("far", (e) => e.type === "far").classed("parent", (e, i) => e.id !== "root" && i === 0).attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e));
}
function Vp(t) {
  this.selections.segmentGroup.selectAll("text").data(t, al).join(
    (e) => e.append("text").attr("class", "segment-text").call((i) => vr.call(this, i)),
    (e) => e.call((i) => vr.call(this, i)),
    (e) => e.remove()
  );
}
function vr(t) {
  return t.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function Np() {
  this.selections.segmentRectangles.on("mousedown", function(t, e) {
    console.log("segment", `[${e?.parentId || "-"}]->[${e.id}] {P${e.phase}} ${e.l}x${e.w} ${e.cutDirection} ${e.hasHeadCut ? "HEAD" : "NORM"}`), console.log(e);
  });
}
function rl(t) {
  const e = t?.guillotineState?.parentSegmentID;
  if (!this.props.segments?.value?.length)
    return !1;
  let i;
  if (e) {
    for (const n of this.props.segments.value)
      if (i = Bp(n, e), i) break;
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
const { currentCutIndex: ol } = pa();
function Gp() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (t, e) => e).join(
    (t) => t.append("line").attr("class", "cut").call((e) => wr.call(this, e)),
    (t) => t.call((e) => wr.call(this, e)),
    (t) => t.remove()
  ), ul.call(this));
}
function wr(t) {
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
function ll(t, e, i) {
  return t.guillotineState.parentSegmentID === e && i && t.guillotineState.segmentCutOrder < i;
}
function cl(t, e) {
  return t.guillotineState?.parentSegmentID !== null && !t?.isTrim ? t.guillotineState.parentSegmentID === e : !1;
}
function qp(t, e, i, s) {
  this.selections.cutLines.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] || !s && a.guillotineState.parentSegmentID === e ? "visible" : "hidden"), ol.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] ? "visible" : "hidden")), this.selections.cutLines.classed("highlight", (a) => t.stock.cutType === "guillotine" && a.isTrim ? a.position === t.type : a.guillotineState[i] === t.guillotineState[i]), this.selections.cutLines.classed("ptx-dummy", (a) => a?.ptxData?.isDummy), s || Wp.call(this, t, e);
}
function zp(t, e, i, s, n) {
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
    this.state.device === "desktop" && !t.isTrim && sl.call(this, a, r, s);
  }
  this.selections.cutLines.classed("highlight", (r, o) => o === e);
}
function ul() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1), this.selections?.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), this.selections?.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return Math.max(1, Math.ceil(e));
  }), gs.call(this), xn.call(this);
}
function Wp(t, e) {
  const i = t?.guillotineState?.segmentCutOrder;
  if (i == null) return;
  this.selections.cutLines.classed("completed", (d) => ll(d, e, i)), this.selections.cutLines.classed("inside-segment", (d) => cl(d, e));
  const s = rl.call(this, t);
  if (s === !1) return;
  const { parent: n, children: a } = s, { near: r } = dl(t, a);
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
  ], l = [t?.distances?.left, t?.distances?.right]), this.state.device === "desktop" && !t.isTrim && l && sl.call(this, o, l, u);
}
function Hp(t = null, e = "") {
  if (t === null || this.selections.cutLines.empty()) return;
  if (this.props.stock.value.saw.cutType === "guillotine") {
    const g = this.props.cuts.value.filter((k) => k.isTrim);
    t = t + g.length, t - g.length >= this.props.cuts.value.length - g.length && (ol.value = this.props.cuts.value.length - g.length - 1);
  }
  const i = this.props.cuts.value[t];
  if (!i) return;
  if (gs.call(this), xn.call(this), t !== null && t >= 0 && t < this.selections.cutLines.size()) {
    const g = this.selections.cutLines.nodes()[t].parentElement;
    if (!g) return;
    ht(g).raise();
  }
  const s = i.guillotineState?.parentSegmentID, n = this.getHalfBladeWidth(i.stock), a = i.dimension === "l" ? "y" : "x", r = i?.stock?.trim, o = e === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes(i?.stock?.cutType) && s !== null && typeof s < "u" ? qp.call(this, i, s, o, e) : zp.call(this, i, t, r, a, n), Up.call(this, i, t, s), e === "ptx") {
    this.removeSegments();
    return;
  }
  const l = rl.call(this, i);
  if (l === !1)
    return;
  const { parent: c, children: u } = l;
  if (!i?.guillotineState?.parentSegmentID)
    return Es.call(this, { parent: c });
  const { near: d, far: h } = dl(i, u);
  if (i.beamTrimL1 || i.beamTrimW1) {
    if (i.beamTrimL1) {
      const g = u.find((N) => N.offcut === !0 && N.x === 0 && N.l === i.stock?.trim?.l1), k = u.find((N) => N.type === "near" && N !== g), M = u.find((N) => N.type === "far" && N !== g && N.phase > c.phase);
      if (g)
        return Es.call(this, { parent: g, near: k, far: M });
    } else if (i.beamTrimW1) {
      const g = u.find((N) => N.offcut === !0 && N.y === 0 && N.w === i.stock?.trim?.w1);
      let k = u.find((N) => N.type === "near" && N !== g);
      const M = u.find((N) => N.type === "far" && N !== g && N.y > (g?.y || 0));
      if (k && i.stock && (k = {
        ...k,
        x: 0,
        l: i.stock.l
      }), g)
        return Es.call(this, { parent: g, near: k, far: M });
    }
  }
  Es.call(this, { parent: c, near: d, far: h });
}
function dl(t, e) {
  const i = t.dimension === "l" ? "y" : "x", s = t.dimension === "l" ? "w" : "l", n = e.find((r) => r.type === "near" && r[i] + r[s] === t[i + "1"] - t.stock.halfBladeWidth), a = e.find((r) => r.type === "far" && r[i] === t[i + "1"] + t.stock.halfBladeWidth);
  return { near: n, far: a };
}
function Up(t, e, i) {
  this.selections.cutLines.attr("stroke-width", (s, n) => {
    const a = this.scales.measurementScale(this.getBladeWidth(s.stock));
    let r = Math.max(1, Math.ceil(a));
    const o = t?.guillotineState?.segmentCutOrder;
    return (ll(s, i, o) || cl(s, i)) && (r += 1), n === e && Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock))) < 5 && (r = 5), r;
  });
}
function Yp(t) {
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
  const s = Dh(
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
        u.attr("class", "ray").attr("x1", (d) => this.scales.xPositionScale(d.x1)).attr("x2", (d) => this.scales.xPositionScale(d.x2)).attr("y1", (d) => this.scales.yPositionScale(d.y1)).attr("y2", (d) => this.scales.yPositionScale(d.y2));
      };
      if (this.state.env !== "development") return;
      const c = Yo(this.props.shapes.value, this.props.stock.value).flatMap((u) => Object.values(u.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(c, r).join(
        (u) => u.append("line").call((d) => o.call(this, d)),
        (u) => u.call((d) => o.call(this, d)),
        (u) => u.remove()
      );
    }
    n = Eh(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const a = new ui();
  for (const r of s.toArray()) {
    const o = Ko(t, r, this.props.stock.value);
    o && a.addPoints(o.toArray());
  }
  if (n) {
    const r = n.toArray();
    for (const o of r) {
      const l = Fh(t, o, this.props.stock.value);
      l && a.addPoints(l.toArray());
    }
  }
  this.props.stock.value.cutType === "efficiency" ? ([
    new dt(0 + (this.props.stock.value.trim.l1 ?? 0), 0 + (this.props.stock.value.trim.w1 ?? 0)),
    new dt(0 + (this.props.stock.value.trim.l1 ?? 0), 0 + (this.props.stock.value.trim.w1 ?? 0)),
    new dt(
      this.props.stock.value.l - t.l - (this.props.stock.value.trim.l2 ?? 0),
      0 + (this.props.stock.value.trim.w1 ?? 0)
    ),
    new dt(
      0 + (this.props.stock.value.trim.l1 ?? 0),
      this.props.stock.value.w - t.w - (this.props.stock.value.trim.w2 ?? 0)
    ),
    new dt(
      this.props.stock.value.l - t.l - (this.props.stock.value.trim.l2 ?? 0),
      this.props.stock.value.w - t.w - (this.props.stock.value.trim.w2 ?? 0)
    )
  ].forEach((r) => a.add(r)), e = a.toArray()) : (a.add(new dt(0 + (this.props.stock.value.trim.l1 ?? 0), 0 + (this.props.stock.value.trim.w1 ?? 0))), e = a.toArray());
  for (let r = e.length; r--; ) {
    const o = e[r];
    t.x = o.x, t.y = o.y;
    for (const l of this.props.shapes.value)
      if (this.collision(t, l, this.props.stock.value)) {
        e.splice(r, 1);
        break;
      }
  }
  return console.log("[Diagram] drawPositions: filtered positions count:", e?.length), Kp.call(this, e, t), Zp.call(this, e, t), e?.length ? (console.log("[Diagram] drawPositions: success, returning true"), !0) : (console.warn("[Diagram] drawPositions: no valid positions after filtering"), !1);
}
function Kp(t, e) {
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
      n.stopPropagation(), ht(this).classed("hover", !0), ht(this).raise();
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), ht(this).classed("hover", !1);
    },
    {
      passive: !0
    }
  );
}
function Zp(t, e) {
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
      n.stopPropagation(), ht(this).classed("hover", !0);
      const a = ht(this).attr("data-id"), r = ht(`.ghost[data-id="${a}"]`);
      r.raise(), r.classed("highlight", !0);
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), ht(this).classed("hover", !1);
      const a = ht(this).attr("data-id");
      ht(`.ghost[data-id="${a}"]`).classed(
        "highlight",
        !1
      );
    },
    {
      passive: !0
    }
  );
}
function Jp() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text id").text((e) => Sr.call(this, e)).classed("hidden", (e, i, s) => this.isTextHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1),
    (t) => t.text((e) => Sr.call(this, e)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text name").text((e) => xr.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, i, s) => this.isNameHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const n = s[i];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    }),
    (t) => t.text((e) => xr.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, i, s) => this.isNameHidden(e, i, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const n = s[i];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text length").text((e) => kr.call(this, e)).classed("hidden", (e, i, s) => this.isLengthHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const a = s[i].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    }),
    (t) => t.text((e) => kr.call(this, e)).classed("hidden", (e, i, s) => this.isLengthHidden(e, i, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const a = s[i].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text width").text((e) => Ir.call(this, e)).classed("hidden", (e, i, s) => this.isWidthHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (e, i, s) => {
      const n = s[i], a = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), r = this.getRectangleCoordinate(e, "y", "center"), o = this.state.device === "mobile" ? 90 : -90;
      return `translate(${a},${r}) rotate(${o})`;
    }),
    (t) => t.text((e) => Ir.call(this, e)).classed("hidden", (e, i, s) => this.isWidthHidden(e, i, s)).attr("transform", (e, i, s) => {
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
function Sr(t) {
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
function xr(t) {
  return !t?.name || typeof t?.name != "string" ? null : t.name.toUpperCase().trim();
}
function kr(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : K({ v: t.l, o: this.numberConfig }).toString();
}
function Ir(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : K({ v: t.w, o: this.numberConfig }).toString();
}
const Xp = (t) => t.id;
function Qp() {
  if (!this.props.containerWidth) return;
  gs.call(this);
  const t = this.props.shapes.value.reduce((e, i) => {
    const s = parseInt(i.parentId);
    return s > e ? s : e;
  }, 0);
  this.scales.shapeColorScale.domain([1, t]), this.state.env === "development" && tg.call(this), eg.call(this);
}
function eg() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, Xp).join(
    (t) => {
      const e = t.append("g").attr("class", "shape-group");
      return Pr.call(this, e), Cr.call(this, e), e.on("mousedown", Ar.bind(this)), e;
    },
    (t) => (Pr.call(this, t), Cr.call(this, t), t.on("mousedown", Ar.bind(this)), t),
    (t) => t.remove()
  ), og.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => Jp.call(this)), this.selections.shapeWrappers.size() > 0;
}
function tg() {
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
  this.scales.scoreColorScale = fs([Wt(251, 224, 255), Wt(122, 0, 138)]).domain([i, s]);
}
function Pr(t) {
  const e = t.selectAll("rect.shape").data((i) => [i]).join("rect").attr("class", "shape").attr("x", (i) => this.getRectangleCoordinate(i, "x")).attr("y", (i) => this.getRectangleCoordinate(i, "y")).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i)).style("fill", (i) => ms.call(this, i));
  this.selections.shapeRectangles ? this.selections.shapeRectangles = zr(
    this.selections.shapeRectangles.nodes().concat(e.nodes())
  ) : this.selections.shapeRectangles = e;
}
function Cr(t) {
  !this.settings.main || this.settings.app || this.state.hasTouch || t.on("mouseover", (e) => {
    if (this?.props.moveMode && this.state.moving) return;
    const i = ht(e.target);
    i.classed("hover", !0), i.classed("selected") || i.style("fill", this.config.colors.partSelected.toString());
  }, { passive: !0 }).on("mouseout", (e, i) => {
    const s = ht(e.target);
    s.classed("hover", !1), s.classed("selected") || s.style("fill", ms.call(this, i));
  }, { passive: !0 });
}
function Ar(t, e) {
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
  this.state.env === "development" && !this.props.moveMode.value && ig.call(this, t, e), (this.settings.app || this.settings.embed) && ag.call(this, t, e), this.state.device === "desktop" && !this.props.moveMode.value && (xn.call(this), Dp.call(this, e)), this.props.moveMode.value ? (console.log("[Diagram] handleShapeClick: calling onAddToPartsBin", {
    shapeId: e.id
  }), this.callbacks.onAddToPartsBin(e)) : (console.log("[Diagram] handleShapeClick: calling findShape", {
    shapeId: e.id
  }), this.findShape.call(this, e.id));
}
function ig(t, e) {
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
        ], ng.call(this, e);
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
    console.table(sg(e, i));
  }
}
function sg(t, e) {
  return e.reduce((i, s) => {
    const n = fg(t, s);
    return i[s] = Array.isArray(n) ? n.join(", ") : n, i;
  }, {});
}
function ng(t) {
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const e = t.guillotineData?.myStripParent;
  e && this.selections.shapeWrappers.filter((n) => n.id === e || n.group.addedAsGroup === e).select("rect").classed("highlight-a", !0);
  const i = this.props.shapes.value.find((s) => s.id === e)?.guillotineState?.myStripParent;
  i && this.selections.shapeWrappers.filter((n) => n.id === i || n.group.addedAsGroup === e).select("rect").classed("highlight-b", !0);
}
function ag(t, e) {
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
      color: ms.call(this, e),
      notes: e?.notes
    };
    if (typeof this.callbacks.onPartClick == "function" && this.callbacks.onPartClick(i), this.settings.app) return !1;
  }
  if (this.settings.app) return !1;
}
function ms(t) {
  const e = Wt(204, 204, 204);
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        if (t.group.addedAsGroup)
          return Wt(43, 156, 16);
        if (t.firstShape.isFirstShape)
          return Wt(255, 171, 231);
        if (typeof t.guillotineState.myPhase == "number") {
          const n = [0, 115, 255], a = [176, 255, 231];
          return `rgb(${n.map((o, l) => Math.round(o + t.guillotineState.myPhase / 5 * (a[l] - o))).join(",")})`;
        }
        break;
      case "groups":
        if (t.group.addedAsGroup)
          return Wt(43, 156, 16);
        break;
      case "priorityShapes":
        if (t?.priority && t.priority?.[t.stock.parentId])
          return Wt(139, 171, 46);
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
          return console.warn("Detected corrupted score color object from scale:", n, "for shape:", t), Wt(n.r, n.g, n.b, n.opacity ?? 1);
      }
    }
  const i = parseInt(t.parentId);
  let s;
  return this.scales.shapeColorScale && typeof this.scales.shapeColorScale == "function" ? s = this.scales.shapeColorScale(i) : (console.error("shapeColorScale is not initialized or is not a function!", this.scales.shapeColorScale), s = null), s != null && typeof s.toString == "function" ? s : s != null && typeof s.r == "number" && typeof s.g == "number" && typeof s.b == "number" ? Wt(s.r, s.g, s.b, s.opacity ?? 1) : (console.warn("Shape color scale returned null, undefined, or unexpected non-color value for shape:", t, s), e);
}
const Tr = 3;
function rg(t) {
  const e = [];
  for (const i of t) {
    const s = i.extras?.banding;
    if (i.added && s?.sides)
      for (const [n, a] of Object.entries(s.sides)) {
        if (!a || ["a", "b", "c", "d"].includes(n)) continue;
        let r = n;
        if (i.rot) {
          const l = $o({ [n]: !0 }, "cc");
          r = Object.keys(l)[0];
        }
        const o = lg.call(this, i, r);
        o && e.push(o);
      }
  }
  return e;
}
function Or(t) {
  const e = Tr / 2;
  return t.attr("class", "banding").attr("x1", (i) => this.scales.xPositionScale(i.l1) + Ms.call(this, i.type, "x", e)).attr("x2", (i) => this.scales.xPositionScale(i.l2) + Ms.call(this, i.type, "x", e)).attr("y1", (i) => this.scales.yPositionScale(i.w1) + Ms.call(this, i.type, "y", e)).attr("y2", (i) => this.scales.yPositionScale(i.w2) + Ms.call(this, i.type, "y", e)).attr("stroke-width", Tr).attr("stroke", "white");
}
function og(t) {
  if (!this.settings.main) return;
  const e = rg.call(this, t);
  if (e.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(e, (i, s) => s).join(
    (i) => i.append("line").call((s) => Or.call(this, s)),
    (i) => i.call((s) => Or.call(this, s)),
    (i) => i.remove()
  );
}
function Ms(t, e, i) {
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
function lg(t, e) {
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
function cg(t) {
  this.selections.shapeWrappers.style("visibility", (e) => e?.placementOrder >= t ? "hidden" : "visible");
}
const Lr = (t) => t.id;
function Fr(t) {
  return t.style("fill", this.config.colors.stock).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function $r(t) {
  return t.style("fill", "url(#stripes)").attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function ug() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), Ep.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], Lr).join(
    (t) => t.append("rect").attr("class", "background stock").call((e) => Fr.call(this, e)),
    (t) => t.call((e) => Fr.call(this, e)),
    (t) => t.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], Lr).join(
    (t) => t.append("rect").attr("class", "stock-pattern").call((e) => $r.call(this, e)),
    (t) => t.call((e) => $r.call(this, e)),
    (t) => t.remove()
  );
}
function dg(t) {
  return typeof t == "string" && t.length === 6 && !isNaN(+("0x" + t.replace("#", "")));
}
function fg(t, e) {
  return Ye(t, e);
}
class hg {
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
    if (this.config = e, this.selections = {}, !e.elementID || (this.selections.el = ht(e.elementID), this.selections.el === null)) return;
    const i = this.selections.el.node();
    i !== null && (this.selections.htmlEl = i, this.scales = {
      xScale: Rt(),
      yScale: Rt(),
      yPositionScale: Rt(),
      xPositionScale: Rt(),
      yAxisScale: Rt(),
      measurementScale: Rt(),
      shapeColorScale: fs(),
      scoreColorScale: fs()
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
    }, s = (n, a) => Wt("#" + (dg(n?.replace("#", "")) ? n.replace("#", "") : a.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(i).map(([n, a]) => [
        n,
        s(e.colors?.[n], a)
      ])
    ), this.scales.shapeColorScale = fs([
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
      this.selections.svgCanvas = ht(e);
    this.selections.axisGroup = this.selections.svgCanvas.append("g").attr("class", "axis-group"), this.axes.xAxis = this.selections.axisGroup.append("g").attr("class", "axis stock x"), this.axes.yAxis = this.selections.axisGroup.append("g").attr("class", "axis stock y"), this.selections.stockGroup = this.selections.svgCanvas.append("g").attr("class", "stock-group"), this.selections.shapeGroup = this.selections.svgCanvas.append("g").attr("class", "shapes"), this.selections.bandingGroup = this.selections.svgCanvas.append("g").attr("class", "banding-group"), this.selections.cutGroup = this.selections.svgCanvas.append("g").attr("class", "cuts"), this.selections.segmentGroup = this.selections.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.selections.groupGroup = this.selections.svgCanvas.append("g").attr("class", "groups").attr("display", "none"), this.selections.ghostShapeGroup = this.selections.svgCanvas.append("g").attr("class", "positions"), this.selections.dotGroup = this.selections.svgCanvas.append("g").attr("class", "dots"), this.state.env === "development" && (this.selections.positionGroup = this.selections.svgCanvas.append("g").attr("class", "placements"));
  }
  updateNumberFormat(e, i, s) {
    this.numberConfig && (e && (this.numberConfig.numberFormat = e), i && (this.numberConfig.decimalPlaces = i), s && (this.numberConfig.fractionRoundTo = s));
  }
  formatNumber = (e) => {
    const i = K({
      v: e,
      o: this.numberConfig
    });
    if (i !== null) return i.toString();
  };
  trimNameToFit(e, i) {
    function s(n, a, r) {
      const o = r[a], l = ht(o);
      l.text(n.name);
      let c = l.text();
      const u = l.node();
      if (!u) return;
      let d = u.getComputedTextLength();
      const h = this.getWidthAttribute(n) - 20;
      for (; d > h && c.length > 0; )
        c = c.slice(0, -1), l.text(c.length ? c + "..." : ""), d = l.node().getComputedTextLength();
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
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (s) => ms.call(this, s));
    const i = ht(e).select("rect");
    if (i) {
      i.classed("selected", !0), i.style("fill", this.config.colors.partSelected.toString());
      const s = ht(e).datum();
      this.callbacks.onShapeSelect(s, e);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    Qp.call(this);
  }
  drawStock() {
    ug.call(this);
  }
  drawCuts() {
    Gp.call(this);
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
    return Oe(e) && e !== null ? e.bladeWidth : 0;
  }
  getHalfBladeWidth(e = null) {
    const i = e.bladeWidth;
    return i !== void 0 && i > 0 ? i / 2 : 0;
  }
  // Reset Methods
  removeShapes() {
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), gs.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), jp.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), xn.call(this);
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
    this?.selections?.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (e) => ms.call(this, e)), this?.selections?.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (e) => {
      const i = this.scales.measurementScale(this.getBladeWidth(e.stock));
      return i < 1 ? 1 : Math.ceil(i);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    gs.call(this);
  }
  updateShapeVisibility() {
    cg.call(this);
  }
  drawPositions(e) {
    return Yp.call(this, e);
  }
  showCut(e) {
    Hp.call(this, e);
  }
  resetCuts() {
    ul.call(this);
  }
}
const pg = ["id"], gg = /* @__PURE__ */ Ue({
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
      getSegments: d,
      getCuts: h
    } = pa(), g = t, k = i, M = (ee) => {
      k("part-click", ee);
    }, N = (ee) => {
      k("shape-colour-update", ee);
    }, T = (ee, Me) => {
      ee?.autoId && k("shape-select", ee.autoId, Me);
    }, C = (ee) => {
      ee && k("add-to-parts-bin", ee);
    }, D = (ee, Me) => {
      ee && k("move-shape", ee, Me);
    }, x = oe(0), L = oe(0), Y = oe(null);
    let _, ce = oe(!1);
    const z = Ct({
      debug: ""
    });
    Jt(() => q());
    const y = ie(() => ({
      format: g.numberFormat,
      decimals: g.decimalPlaces
    })), W = ie(() => g.stockAutoId ? c(g.stockAutoId) : n.value), te = ie(() => g.stockAutoId ? u(g.stockAutoId) : a.value), J = ie(() => g.main ? g.stockAutoId ? h(g.stockAutoId) : r.value : []), j = ie(() => g.main ? g.stockAutoId ? d(g.stockAutoId) : o.value : []);
    Br(Y, (ee) => {
      const Me = ee[0], { width: vt, height: gt } = Me.contentRect;
      vt > 0 && (x.value = vt), k("resize", { width: vt, height: gt });
    }), Kl(
      x,
      (ee) => {
        _ && (ee <= 0 || (_.setDevice(), _.resetShapeAxes(), _.drawAll(), l.value !== null && (_.toggleSegments(!0), _.showCut(l.value))));
      },
      { throttle: 100 }
    );
    let V = !1;
    He(() => W.value, (ee) => {
      ee && (x.value <= 0 || (V = !0, _.setDevice(), _.resetCuts(), _.removeSegments(), _.drawStock(), _.drawShapes(), _.drawCuts(), mt(() => V = !1)));
    }, { immediate: !1 }), He(() => te.value, (ee) => {
      V || ee && (x.value <= 0 || (_.setDevice(), _.drawShapes()));
    }, { immediate: !1, deep: !0 }), g.main && (He(() => J.value, () => {
      V || x.value <= 0 || _.drawCuts();
    }, { immediate: !1, deep: !0 }), He(l, () => {
      l.value !== null && (x.value <= 0 || (_.toggleSegments(!0), _.showCut(l.value)));
    }, { immediate: !1 }), He(y, (ee) => {
      _.updateNumberFormat(ee.format, ee.decimals, null);
    }, { immediate: !1 }));
    const q = () => {
      const ee = {
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
          containerHeight: L,
          containerWidth: x,
          stock: W,
          shapes: te,
          cuts: J,
          segments: j,
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
          onShapeColourUpdate: N,
          onShapeSelect: T,
          onAddToPartsBin: C,
          onMoveShape: D,
          onPartClick: M
        }
      };
      _ = new hg(ee), z.debug = _.state.debug, ce.value = !0;
    }, G = (ee = !1) => {
      _ && _.toggleShapes(ee);
    }, U = (ee = !1) => {
      _ && _.toggleCuts(ee);
    }, ne = (ee = !1) => {
      _ && _.toggleSegments(ee);
    }, Se = () => {
      _ && _.drawShapes();
    }, me = () => {
      _ && _.drawStock();
    }, xe = () => {
      _ && (_.toggleSegments(!1), _.resetCuts());
    }, $e = (ee) => {
      _ && (_.toggleSegments(!0), _.showCut(ee));
    }, Q = (ee) => _ ? _.drawPositions(ee) : !1, Ve = () => {
      _ && _.removePositions();
    }, ot = (ee) => {
      _ && _.findShape(ee);
    }, Xe = () => {
      _ && _.clearSelection();
    }, et = (ee) => {
      _ && _.requiresStretch(ee);
    };
    return He(() => z.debug, (ee) => {
      _?.state && (_.state.debug = ee);
    }), e({
      loaded: ce,
      toggleShapes: G,
      toggleCuts: U,
      toggleSegments: ne,
      drawShapes: Se,
      drawStock: me,
      drawPositions: Q,
      resetPositions: Ve,
      findShape: ot,
      clearSelection: Xe,
      resetCuts: xe,
      showCut: $e,
      requiresStretch: et,
      state: z
    }), (ee, Me) => (w(), F("div", {
      id: t.elementId,
      ref_key: "diagramContainerRef",
      ref: Y,
      class: je([{ app: t.app }, "diagram-container"])
    }, null, 10, pg));
  }
}), mg = { class: "action-menu" }, yg = ["textContent"], bg = {
  key: 0,
  class: "menu-divider"
}, vg = {
  key: 1,
  class: "group-label"
}, wg = /* @__PURE__ */ Ue({
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
    const i = t, s = e, { isOpen: n, close: a, toggle: r } = Ic(i.menuId), o = oe(), l = oe(), c = ie(() => i.disabled), u = ie(() => i.label), d = ie(() => i.showLabel), h = ie(() => i.icon), { floatingStyles: g } = Zl(o, l, {
      placement: i.placement,
      whileElementsMounted: qc,
      middleware: [
        Vc(i.offset),
        Nc(),
        Gc({ padding: 8 })
      ]
    }), k = (y) => {
      if (!y) return ["fas", "question"];
      if (typeof y == "function" && (y = y(i)), Array.isArray(y))
        return y;
      if (typeof y == "string") {
        const W = y.split(" ");
        if (W.length >= 2) {
          const te = W[0], J = W.slice(1).join("-").replace("fa-", "");
          return [te, J];
        }
        return ["fas", y.replace("fa-", "")];
      }
      return ["fas", "question"];
    }, M = ie(() => k(h.value)), N = (y) => typeof y.active == "function" ? y.active(i) : typeof y.active == "boolean" ? y.active : !1, T = (y) => {
      if (!y.href) return !1;
      try {
        const W = typeof y.href == "function" ? y.href(i) : y.href;
        return new URL(W, window.location.origin).origin !== window.location.origin;
      } catch {
        return !1;
      }
    }, C = (y) => y.href ? "a" : "div", D = (y) => {
      const W = {};
      if (y.href) {
        const te = typeof y.href == "function" ? y.href(i) : y.href;
        if (W.href = te, T(y)) {
          const J = typeof y.target == "function" ? y.target(i) : y.target;
          W.target = J || "_blank", W.rel = y.rel || "noopener noreferrer";
        } else if (y.target) {
          const J = typeof y.target == "function" ? y.target(i) : y.target;
          W.target = J;
        }
        y.rel && (W.rel = y.rel);
      }
      return y.attrs && Object.assign(W, y.attrs), W;
    }, x = ie(() => i.menuItems.map((y) => {
      const W = { ...y };
      return typeof y.href == "function" && (W.href = y.href(i)), typeof y.icon == "function" && (W.icon = y.icon(i)), typeof y.disabled == "function" && (W.disabled = y.disabled(i)), typeof y.label == "function" && (W.label = y.label(i)), typeof y.variant == "function" && (W.variant = y.variant(i)), typeof y.active == "function" && (W.active = y.active(i)), typeof y.target == "function" && (W.target = y.target(i)), typeof y.show == "function" && (W.show = y.show(i)), W;
    })), L = (y) => {
      y.stopPropagation(), y.preventDefault(), !c.value && r();
    }, Y = (y, W) => {
      if (W.stopPropagation(), y.disabled && !y.href) {
        W.preventDefault();
        return;
      }
      if (typeof y.action == "function" && y.action(y) === !1 && y.href) {
        W.preventDefault();
        return;
      }
      s("action", {
        id: y.id,
        item: y
      }), y.href && i.closeOnLinkClick ? a() : y.href || a();
    }, _ = (y) => {
      const W = [];
      if (y.variant) {
        const J = typeof y.variant == "function" ? y.variant(i) : y.variant;
        W.push(`variant-${J}`);
      }
      if ((typeof y.disabled == "function" ? y.disabled(i) : y.disabled) && !y.href && W.push("disabled"), N(y) && W.push("active"), y.href && W.push("menu-link"), T(y) && W.push("external-link"), y.class) {
        const J = typeof y.class == "function" ? y.class(i) : y.class;
        W.push(J);
      }
      return W.join(" ");
    }, ce = (y) => {
      const W = y.target;
      n.value && o.value && l.value && !o.value.contains(W) && !l.value.contains(W) && a();
    }, z = (y) => {
      y.key === "Escape" && n.value && a();
    };
    return Jt(() => {
      document.addEventListener("click", ce), document.addEventListener("keydown", z);
    }), bs(() => {
      document.removeEventListener("click", ce), document.removeEventListener("keydown", z);
    }), (y, W) => (w(), F("div", mg, [
      $("div", {
        ref_key: "trigger",
        ref: o,
        onClick: L,
        class: je(["actions-btn", { active: A(n), disabled: c.value }])
      }, [
        h.value ? (w(), De(A(Ws), {
          key: 0,
          icon: M.value,
          class: "icon"
        }, null, 8, ["icon"])) : se("", !0),
        d.value ? (w(), F("span", {
          key: 1,
          class: "label",
          textContent: re(u.value)
        }, null, 8, yg)) : se("", !0)
      ], 2),
      (w(), De(ha, { to: "body" }, [
        A(n) && !c.value ? (w(), F("div", {
          key: 0,
          ref_key: "floating",
          ref: l,
          style: ut(A(g)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: W[0] || (W[0] = Vr(() => {
          }, ["stop"]))
        }, [
          (w(!0), F(Be, null, Ke(x.value, (te, J) => (w(), F(Be, { key: J }, [
            te.type === "divider" ? (w(), F("div", bg)) : te.type === "group" ? (w(), F("div", vg, re(te.label), 1)) : te.show !== !1 ? (w(), De(Jl(C(te)), Ai({
              key: 2,
              ref_for: !0
            }, D(te), {
              onClick: (j) => Y(te, j),
              id: te.id,
              class: ["menu-item", _(te)],
              disabled: te.disabled && !te.href
            }), {
              default: Oi(() => [
                te.icon || N(te) ? (w(), De(A(Ws), {
                  key: 0,
                  icon: N(te) ? ["fass", "check"] : k(te.icon)
                }, null, 8, ["icon"])) : se("", !0),
                $("span", null, re(te.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : se("", !0)
          ], 64))), 128))
        ], 4)) : se("", !0),
        A(n) && !c.value ? (w(), F("div", {
          key: 1,
          class: "backdrop",
          onClick: W[1] || (W[1] = //@ts-ignore
          (...te) => A(a) && A(a)(...te))
        })) : se("", !0)
      ]))
    ]));
  }
}), Dr = (t, e, i) => {
  if (e === "unitDependent")
    if (i === "fraction") {
      if (/\/0$/.test(t))
        return {
          value: t,
          valid: !1,
          message: "division_by_zero"
        };
      const s = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(t), n = Sa(t);
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
function Sg({
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
      return t.type === "string" ? u ? { value: null, valid: !1, message: "field_required" } : { value: o === null ? null : "", valid: !0 } : Wu(o, "decimal", u);
    }
    const c = String(o);
    switch (t.type) {
      case "string":
        return { value: c, valid: !0 };
      case "unitDependent":
        if (l)
          return Dr(c, t.type, t.numberFormat);
        try {
          const u = K({
            v: o,
            nf: t.numberFormat,
            dp: t.decimalPlaces,
            fr: t.fractionRoundTo
          });
          if (typeof u == "number") {
            let d = u, h = !0, g;
            return typeof t.min == "number" && d < t.min && (d = t.min, h = !1, g = "below_min"), typeof t.max == "number" && d > t.max && (d = t.max, h = !1, g = "above_max"), { value: d, valid: h, message: g };
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
          return Dr(c, t.type);
        try {
          const d = K({
            v: o,
            nf: "decimal"
          });
          if (d === null)
            return t.required && !t.disableRequiredValidation ? { value: null, valid: !1, message: "errors.validation.field.required" } : { value: null, valid: !0 };
          let h = d;
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
              const l = o.target, c = l.value, u = l.selectionStart || 0, d = c.substring(0, u);
              if (o.key === "/" && c.includes("/")) {
                o.preventDefault();
                return;
              }
              if (o.key === " " && /\s$/.test(d)) {
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
          if (!Sa(c)) {
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
            const d = n(c, !0);
            e("validation", d, t.id), e("input", c);
          }
        }
        e("paste", o);
      }
    },
    processValue: n
  };
}
function xg({
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
function kg({
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
const Ig = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Pg = /* @__PURE__ */ Ue({
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
    const i = t, s = e, n = oe(!0), a = oe(null), r = ie(() => i.value === i.trueValue), {
      handleCheckboxChange: o,
      handleFocus: l,
      handleBlur: c
    } = kg({
      props: i,
      emit: s,
      isMounted: n
    });
    return (u, d) => (w(), F("input", {
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
      onChange: d[0] || (d[0] = //@ts-ignore
      (...h) => A(o) && A(o)(...h)),
      onFocus: d[1] || (d[1] = //@ts-ignore
      (...h) => A(l) && A(l)(...h)),
      onBlur: d[2] || (d[2] = //@ts-ignore
      (...h) => A(c) && A(c)(...h))
    }, null, 40, Ig));
  }
}), Cg = ["for"], Rs = /* @__PURE__ */ Ue({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(t) {
    return (e, i) => (w(), F("label", {
      for: t.id,
      class: "input-label"
    }, re(t.label), 9, Cg));
  }
}), Ag = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Tg = ["disabled", "selected"], Og = {
  key: 0,
  value: " "
}, Lg = ["hidden", "value", "disabled"], Fg = /* @__PURE__ */ Ue({
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
    const i = t, s = e, n = oe(!0), a = oe(null), r = ie(() => i.options.map((l) => ({
      value: l.value,
      label: l.label?.toUpperCase() ?? l.value?.toString()?.toUpperCase(),
      hidden: l.hidden ?? !1,
      disabled: l.disabled ?? !1
    }))), {
      handleSelectChange: o
    } = xg({
      props: i,
      emit: s,
      isMounted: n
    });
    return (l, c) => (w(), F("select", Ai(l.$attrs, {
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
      (...u) => A(o) && A(o)(...u))
    }), [
      $("option", {
        value: "",
        disabled: i.selectFirstOptionDisabled,
        selected: !i.value
      }, re(i.text?.select?.toUpperCase() ?? "SELECT"), 9, Tg),
      i.multiEdit ? (w(), F("option", Og, re(i.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : se("", !0),
      (w(!0), F(Be, null, Ke(r.value, (u) => (w(), F("option", {
        key: u.value,
        hidden: u.hidden,
        value: u.value,
        disabled: u.disabled
      }, re(u.label), 9, Lg))), 128))
    ], 16, Ag));
  }
}), $g = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "aria-label", "aria-invalid", "aria-describedby"], fl = /* @__PURE__ */ Ue({
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
      handleKeydown: d,
      handleCompositionStart: h,
      handleCompositionEnd: g,
      handlePaste: k
    } = Sg({
      props: i,
      emit: s,
      isMounted: n
    }), M = (N) => {
      const T = N.getBoundingClientRect(), C = window.getComputedStyle(N);
      return T.width > 0 && T.height > 0 && C.display !== "none" && C.visibility !== "hidden";
    };
    return Jt(() => {
      (Oe(i.default) && i.value === void 0 || i.value === null) && s("update:value", i.default), i.focus && a.value && M(a.value) && mt(() => a.value.focus());
    }), bs(() => {
      n.value = !1;
    }), (N, T) => (w(), F("input", Ai(N.$attrs, {
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
      onInput: T[0] || (T[0] = //@ts-ignore
      (...C) => A(r) && A(r)(...C)),
      onFocus: T[1] || (T[1] = //@ts-ignore
      (...C) => A(c) && A(c)(...C)),
      onBlur: T[2] || (T[2] = //@ts-ignore
      (...C) => A(u) && A(u)(...C)),
      onKeydown: T[3] || (T[3] = //@ts-ignore
      (...C) => A(d) && A(d)(...C)),
      onCompositionstart: T[4] || (T[4] = //@ts-ignore
      (...C) => A(h) && A(h)(...C)),
      onCompositionend: T[5] || (T[5] = //@ts-ignore
      (...C) => A(g) && A(g)(...C)),
      onPaste: T[6] || (T[6] = //@ts-ignore
      (...C) => A(k) && A(k)(...C)),
      onMousedown: T[7] || (T[7] = //@ts-ignore
      (...C) => A(o) && A(o)(...C)),
      onMouseup: T[8] || (T[8] = //@ts-ignore
      (...C) => A(l) && A(l)(...C))
    }), null, 16, $g));
  }
}), Dg = ["data-field-id"], Eg = {
  key: 0,
  class: "input-label-group"
}, Mg = ["disabled", "selected"], Rg = {
  key: 0,
  value: " "
}, _g = ["hidden", "value", "disabled"], bi = /* @__PURE__ */ Ue({
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
    const i = e, s = t, n = oe(null), a = oe(null), r = oe(!0), o = oe(s.numberFormat), l = ie(() => s.custom ? "custom-" + s.id : s.id), c = ie(() => `${l.value}-error`), u = ie(() => s.label || s.placeholder), d = ie(() => y(s.type, s.numberFormat)), h = ie(() => W(s.type, s.numberFormat)), g = ie(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), k = ie(() => {
      let j = s.value;
      if (s.type !== "unitDependent" || !j) return j;
      try {
        return K({ v: j, nf: s.numberFormat });
      } catch {
        return s.numberFormat === "decimal" ? 0 : "0";
      }
    }), M = ie(() => s.options.map((j) => ({
      value: j.value,
      label: j.label || j.value?.toString(),
      hidden: j.hidden || !1,
      disabled: j.disabled || !1
    }))), N = ie(() => M.value.map((j) => {
      const V = j.label ? H(j.label) : j.value?.toString();
      return {
        ...j,
        // Translate the label key first, then uppercase the translated result
        label: V?.toUpperCase() || j.value?.toString().toUpperCase()
      };
    })), T = ie(() => ({
      input: !0,
      issue: s.issue || !r.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), C = ie(() => ({
      id: l.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": u.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? c.value : void 0
    })), D = ie(() => ({
      ...C.value,
      type: s.type,
      inputMode: h.value,
      inputType: d.value,
      placeholder: s.placeholder,
      allowZero: s.allowZero,
      min: s.min,
      max: s.max,
      focus: s.focus,
      numberFormat: s.numberFormat,
      default: s.default,
      disableRequiredValidation: s.disableRequiredValidation
    })), x = ie(() => ({
      ...C.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), L = ie(() => ({
      ...C.value,
      options: N.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      numberFormat: s.numberFormat,
      text: s.text,
      output: s.output
    })), Y = ie(() => (s.text?.select || "SELECT").toUpperCase()), _ = ie(() => (s.text?.delete || "DELETE").toUpperCase()), ce = (j) => {
      a.value = j;
    }, z = (j) => s.label && s.enableLabel && s.labelPosition === j, y = (j, V) => {
      switch (j) {
        case "integer":
        case "float":
          return "number";
        case "unitDependent":
          return V === "fraction" ? "text" : "number";
        case "string":
        default:
          return "text";
      }
    }, W = (j, V) => {
      if (j === "unitDependent")
        return V === "fraction" ? "text" : "decimal";
      switch (j) {
        case "integer":
          return "numeric";
        case "float":
          return "decimal";
        case "string":
          return "text";
        default:
          return "text";
      }
    }, te = (j) => {
      i("update:value", j);
    }, J = (j, V) => {
      j.valid === void 0 || j.valid === !0 ? (r.value = !0, i("validation", n.value, j)) : j.valid === !1 && j.message && (r.value = !1, console.warn(`Field validation error for field ${V} - ${j.message}`), i("validation", n.value, j));
    };
    return He(() => s.numberFormat, (j, V) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && j !== V && s.value !== null && s.value !== void 0 && s.value !== "")
          try {
            const q = K({ v: s.value, nf: j });
            i("update:value", q);
          } catch {
            i("update:value", j === "decimal" ? 0 : "0");
          }
        o.value = j;
      }
    }), (j, V) => (w(), F("div", {
      ref_key: "fieldRef",
      ref: n,
      class: je(["input-wrapper", T.value]),
      "data-field-id": l.value
    }, [
      t.type === "checkbox" ? (w(), F("div", Eg, [
        z("first") ? (w(), De(Rs, {
          key: 0,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : se("", !0),
        t.type === "checkbox" ? (w(), De(Pg, Ai({
          key: 1,
          ref: ce,
          type: "checkbox"
        }, x.value, {
          value: t.value,
          "onUpdate:value": V[0] || (V[0] = (q) => i("update:value", q))
        }), null, 16, ["value"])) : se("", !0),
        z("last") ? (w(), De(Rs, {
          key: 2,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : se("", !0)
      ])) : (w(), F(Be, { key: 1 }, [
        z("first") ? (w(), De(Rs, {
          key: 0,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : se("", !0),
        g.value ? (w(), De(fl, Ai({
          key: 1,
          ref: ce
        }, D.value, {
          "input-type": d.value,
          "input-mode": h.value,
          value: k.value,
          "disable-required-validation": t.disableRequiredValidation,
          onValidation: J,
          "onUpdate:value": te
        }), null, 16, ["input-type", "input-mode", "value", "disable-required-validation"])) : t.type === "select" ? (w(), De(Fg, Ai({
          key: 2,
          ref: ce
        }, L.value, {
          "onUpdate:value": V[1] || (V[1] = (q) => i("update:value", q))
        }), {
          default: Oi(() => [
            $("option", {
              value: "",
              disabled: t.selectFirstOptionDisabled,
              selected: !t.value
            }, re(Y.value), 9, Mg),
            t.multiEdit ? (w(), F("option", Rg, re(_.value), 1)) : se("", !0),
            (w(!0), F(Be, null, Ke(N.value, (q) => (w(), F("option", {
              key: q.value,
              hidden: q.hidden,
              value: q.value,
              disabled: q.disabled
            }, re(q.label), 9, _g))), 128))
          ]),
          _: 1
        }, 16)) : se("", !0),
        z("last") ? (w(), De(Rs, {
          key: 3,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : se("", !0)
      ], 64)),
      Hs(j.$slots, "default")
    ], 10, Dg));
  }
}), jg = {
  key: 0,
  class: "action-bar"
}, Bg = { class: "add-custom" }, Vg = ["disabled"], Ng = ["disabled", "title", "onClick"], Gg = {
  key: 1,
  class: "price"
}, qg = /* @__PURE__ */ Ue({
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
      getInputConfigForLocation: d,
      getSelectOptions: h,
      getPriceDisplay: g,
      shouldShowDeleteButton: k,
      getLocationGroup: M,
      isLocationVisible: N,
      handleInputChange: T,
      handleDelete: C
    } = Pc({
      shape: di(i, "shape"),
      extraType: i.extraType,
      allOptions: i.allOptions,
      labels: i.labels,
      userFriendlyFieldMap: i.userFriendlyFieldMap,
      allowCustomNames: i.allowCustomNames,
      customNames: di(i, "customNames"),
      enablePricing: i.enablePricing,
      pricing: i.pricing,
      getAvailablePricingOptions: i.getAvailablePricingOptions,
      getPrice: i.getPrice,
      formatPrice: i.formatPrice,
      findExtrasPrice: i.findExtrasPrice,
      locations: di(i, "locations"),
      locationGroups: di(i, "locationGroups")
    }), {
      newCustomName: D,
      canAddCustomName: x,
      isActionMenuDisabled: L,
      customNameActions: Y,
      handleAddCustomName: _,
      handleCustomNameAction: ce
    } = Cc({
      extraType: i.extraType,
      customNames: di(i, "customNames"),
      usedNames: di(i, "usedNames"),
      allowCustomNames: i.allowCustomNames,
      getSelectOptions: h,
      onCustomNameAdded: (U) => s("custom-name-added", i.extraType, U),
      onCustomNameDeleted: (U) => s("custom-name-deleted", i.extraType, U)
    }), {
      renderLocations: z,
      gridStyle: y,
      getInputId: W,
      getDeleteConfig: te
    } = Ac({
      extraType: i.extraType,
      allOptions: i.allOptions,
      labels: i.labels,
      shapeIndex: i.shapeIndex || 0,
      enablePricing: i.enablePricing,
      mode: n,
      shouldShowAll: a,
      getInputType: u,
      getInputConfig: (U, ne) => d(U, ne),
      getAllInputConfig: (U) => d("all", U),
      getInputConfigForLocation: d,
      canDelete: l,
      getLocationLabel: c,
      shouldShowDeleteButton: k,
      locations: di(i, "locations"),
      locationGroups: di(i, "locationGroups")
    }), J = oe(!1), j = ie(() => (U) => {
      const ne = M(U);
      return ne === "all" || ne === "faces" || ne === "sides";
    }), V = ie(() => (U) => ia(i.extraType).includes(U) ? dr(U) === "face" : !1), q = ie(() => (U) => ia(i.extraType).includes(U) ? dr(U) === "side" : !1), G = ie(() => (U) => i.shape.issues?.some((ne) => ne.category?.includes("extras") && ne.field?.some((Se) => Se[0] === "extras" && Se[1] === i.extraType && Se[2] === U)) ?? !1);
    return Jt(() => {
      const ne = i.shape.extras?.[i.extraType];
      if (!ne || typeof ne != "object") {
        J.value = !0, console.error(`Missing or invalid ${i.extraType} in shape`);
        return;
      }
      if (r.value && !("faces" in ne)) {
        J.value = !0, console.error(`Missing faces property in ${i.extraType}`);
        return;
      }
      if (o.value && !("sides" in ne)) {
        J.value = !0, console.error(`Missing sides property in ${i.extraType}`);
        return;
      }
    }), (U, ne) => {
      const Se = xi("FontAwesomeIcon");
      return J.value ? se("", !0) : (w(), F("div", {
        key: 0,
        class: je(["extras group", [t.extraType]]),
        style: ut({ "grid-column-end": "span " + t.partColumns })
      }, [
        t.allowCustomNames ? (w(), F("div", jg, [
          $("div", Bg, [
            We(fl, {
              id: `${t.extraType}-custom-input-${t.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: A(D),
              placeholder: `Add ${t.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": ne[0] || (ne[0] = (me) => D.value = me || ""),
              onKeydown: Xl(A(_), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            $("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !A(x),
              onClick: ne[1] || (ne[1] = //@ts-ignore
              (...me) => A(_) && A(_)(...me))
            }, " Add ", 8, Vg)
          ]),
          We(wg, {
            "menu-items": A(Y),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: A(L),
            onAction: A(ce)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : se("", !0),
        $("div", {
          class: "inputs grid-layout",
          style: ut({ "grid-template-columns": A(y) })
        }, [
          (w(!0), F(Be, null, Ke(A(z), (me) => (w(), F(Be, { key: me }, [
            A(N)(me) ? (w(), F(Be, { key: 0 }, [
              $("div", {
                class: je(["label", {
                  "group-label": j.value(me),
                  "face-label": V.value(me),
                  "side-label": q.value(me),
                  "has-validation-issue": G.value(me)
                }])
              }, re(A(c)(me)), 3),
              (w(!0), F(Be, null, Ke(t.allOptions, (xe, $e) => (w(), F("div", {
                key: `${me}-${$e}`,
                class: "input-cell"
              }, [
                We(bi, Ai({
                  id: A(W)(me, $e),
                  "data-field": `${t.extraType}-${me}`,
                  "data-index": t.shapeIndex,
                  "data-option-index": $e
                }, { ref_for: !0 }, A(d)(me, $e), {
                  "onUpdate:value": (Q) => A(T)(me, $e, Q)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"])
              ]))), 128)),
              A(te)(me).show ? (w(), F("button", {
                key: 0,
                type: "button",
                class: "c-btn c-btn--delete",
                disabled: !A(te)(me).enabled,
                title: A(te)(me).ariaLabel,
                onClick: (xe) => A(C)(me)
              }, [
                We(Se, { icon: ["fass", "trash"] })
              ], 8, Ng)) : se("", !0),
              t.enablePricing ? (w(), F("div", Gg, re(A(g)(me)), 1)) : se("", !0)
            ], 64)) : se("", !0)
          ], 64))), 128))
        ], 4)
      ], 6));
    };
  }
}), qs = /* @__PURE__ */ Dt(qg, [["__scopeId", "data-v-8e18cea6"]]), zg = {
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
}, Wg = { id: "spinner" }, Hg = ["width", "height"], Ug = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function Yg(t, e, i, s, n, a) {
  return w(), F("div", Wg, [
    i.complete ? se("", !0) : (w(), F("svg", {
      key: 0,
      class: "loading",
      style: ut({ width: i.size + "px", height: i.size + "px" }),
      width: i.size,
      height: i.size,
      viewBox: "0 0 300 300"
    }, [...e[0] || (e[0] = [
      Nr('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ])], 12, Hg)),
    i.complete ? (w(), F("svg", {
      key: 1,
      class: "complete",
      style: ut({ width: i.size + "px", height: i.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[1] || (e[1] = [
      $("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ])], 4)) : se("", !0),
    i.showNumber ? (w(), F("div", Ug, re(i.number), 1)) : se("", !0)
  ]);
}
const Er = /* @__PURE__ */ Dt(zg, [["render", Yg]]);
B({
  // Context - using z.any() for complex external types
  job: we().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: p().nullable().default(null).describe("Socket.io connection ID"),
  user: we().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: we().describe("Configuration object"),
  // Type: Config
  api: R().nullable().default(null).describe("API mode flag"),
  app: R().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: Fe("Saw").describe("Saw configuration"),
  stockList: ze("Stock").default([]).describe("List of stock materials"),
  shapeList: _s(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: ze("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: ze("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: ze("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: _s(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: _s(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: un,
  // Results storage
  cutList: ze("Cut").default([]).describe("List of cuts to make"),
  segmentList: ze("Segment").default([]).describe("List of segments"),
  offcuts: ze("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: ze("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: R().default(!1).describe("Use inventory system"),
  successMetric: p().default(Zd.successMetric).describe("Metric for optimization success"),
  enableEvo: R().default(!0).describe("Enable evolutionary algorithm"),
  weighting: Ie(p(), we()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: we().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: we().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: B({
    placement: f().default(0),
    group: f().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: R().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: R().default(!1).describe("Run guillotine second pass"),
  runningEvo: R().default(!1).describe("Currently running evolution"),
  evolutionVisData: ae(Ie(p(), vc())).default([]).describe("Evolution visualization data"),
  final: R().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: R().default(!1).describe("Has minimum spacing requirement"),
  hasShapeLevelMinSpacing: R().default(!1).describe("Has shape-level minimum spacing")
});
const Kg = Ae(["decimal", "fraction"]), Zg = B({
  job: we().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Allow additional properties like __entityType and autoId
  inputSaw: Ti,
  inputShapes: ae(vi),
  inputStock: ae(Kt),
  inputUserGroups: ae(Aa).optional(),
  // Number format for conversion
  numberFormat: Kg.optional(),
  // Algorithm configuration
  enableEvo: R().default(!0),
  weighting: we().optional(),
  successMetric: p().optional(),
  useInventory: R().default(!1),
  // Context
  socketId: p().optional(),
  user: we().optional(),
  // IUser type
  // Application flags
  widget: R().optional(),
  api: R().optional(),
  app: R().optional(),
  domain: p().optional(),
  // Extras options (centralized configuration)
  extrasOptions: B({
    banding: B({
      options: B({
        sides: Ie(p(), ae(p())).optional()
      }).optional()
    }).optional(),
    finish: B({
      options: B({
        faces: Ie(p(), ae(p())).optional()
      }).optional()
    }).optional(),
    planing: B({
      options: B({
        sides: Ie(p(), ae(p())).optional(),
        faces: Ie(p(), ae(p())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // API specific
  config: we().optional(),
  v: f().optional(),
  // API version
  webhook: p().optional(),
  //source
  sourceVersion: p().nullish(),
  source: p().optional()
});
B({
  job: we().optional(),
  // Type: Job from BullMQ
  saw: we(),
  // Runtime Saw instance
  shapeList: ae(we()),
  // Runtime Shape instances
  stockList: ae(we()),
  // Runtime Stock instances
  userGroups: ae(we()).optional(),
  // Runtime Group instances
  enableEvo: R(),
  weighting: we().optional(),
  successMetric: p().optional(),
  useInventory: R(),
  socketId: p().optional(),
  user: we().optional(),
  widget: R().optional(),
  api: R().optional(),
  app: R().optional(),
  domain: p().optional(),
  config: we().optional(),
  v: f().optional(),
  webhook: p().optional()
});
const { addNotice: _i } = ln();
let Nn = null;
function Jg() {
  return Nn || (Nn = tl()), Nn;
}
function Mr(t) {
  return t.filter((e) => e?.l || e?.w);
}
async function Xg(t) {
  const e = t.t, i = [];
  try {
    const { inputs: s, validateInputShapes: n, validateInputStock: a } = Jg(), r = t.inputShapes ?? s.inputShapes.value, o = t.inputStock ?? s.inputStock.value, l = t.inputUserGroups ?? s.inputUserGroups?.value ?? [], c = Mr(r), u = Mr(o);
    if (!t.isAdmin && !t.shared && t.maxShapes !== 1 / 0) {
      const N = c.reduce((C, D) => C + (D.q || 1), 0), T = u.reduce((C, D) => C + (D.q || 1), 0);
      if (N > t.maxShapes || T > t.maxStock)
        return _i({
          type: "error",
          message: e("errors.validation.above_max_parts")
        }), t.onLimit?.(), { valid: !1, issues: i };
    }
    if (!c.length)
      return _i({
        type: "error",
        message: e("errors.validation.no_parts_list")
      }), { valid: !1, issues: i };
    if (!t.useInventory && !u.length)
      return _i({
        type: "error",
        message: e("errors.validation.no_stock")
      }), { valid: !1, issues: i };
    let d;
    if (t.useInventory && t.selectedSaw)
      d = t.selectedSaw;
    else if (t.inputSaw instanceof si) {
      const N = t.inputSaw.validate();
      i.push(...N), d = t.inputSaw.toData();
    } else {
      d = t.inputSaw;
      const N = new Bo(d);
      i.push(...N.issues);
    }
    const h = n({
      saw: d,
      partTrim: K({ v: t.partTrim }),
      useInventory: t.useInventory,
      inputShapesOverride: c
    });
    if (i.push(...h), t.useInventory) {
      if (t.materialStore)
        for (const N of c)
          N.material || i.push(new ue({
            item: N,
            category: ["part"],
            message: "errors.validation.business.no_material"
          }));
    } else {
      const N = a(d);
      i.push(...N);
    }
    if (l.length > 0) {
      l.forEach((T) => T.populateParentID(c));
      const N = zh(l, c);
      i.push(...N);
    }
    await Qg(c, t, i);
    const g = wo(i);
    if (g.length > 0) {
      const N = {
        saw: g.filter((T) => T.category?.includes("saw")),
        stock: g.filter((T) => T.category?.includes("stock")),
        part: g.filter((T) => T.category?.includes("part") && !T.category?.includes("extras")),
        extras: g.filter((T) => T.category?.includes("extras")),
        group: g.filter((T) => T.category?.includes("group"))
      };
      for (const [T, C] of Object.entries(N))
        if (C.length > 0) {
          _i({
            type: "error",
            message: e("errors.validation.inputs_issue", { 0: T }),
            additional: C.map((D) => e(D.message))
          });
          break;
        }
      return { valid: !1, issues: i };
    }
    const k = {
      inputSaw: d,
      inputShapes: c.map((N) => N.toData()),
      inputStock: u.map((N) => N.toData()),
      inputGroups: l.map((N) => N.toData()),
      enableEvo: !0,
      useInventory: t.useInventory || !1
    }, M = Zg.safeParse(k);
    return M.success ? {
      valid: !0,
      issues: i,
      sawData: d
    } : (console.error("[Validation] Zod validation failed:", M.error.issues), _i({
      type: "error",
      message: e("errors.validation.invalid_data_structure"),
      additional: M.error.issues.map((N) => `${N.path.join(".")}: ${N.message}`)
    }), { valid: !1, issues: i });
  } catch (s) {
    return console.error("[Validation] error:", s), _i({
      type: "error",
      message: e("errors.general.unexpected"),
      additional: [s?.message ?? ""]
    }), { valid: !1, issues: i };
  }
}
async function Qg(t, e, i) {
  if (!e.findExtrasPrice)
    return;
  const s = [
    { type: "banding", pricing: e.bandingPricing },
    { type: "finish", pricing: e.finishPricing },
    { type: "planing", pricing: e.planingPricing }
  ];
  for (const n of t)
    for (const { type: a, pricing: r } of s) {
      if (e.extrasValidationRules && st.hasExtras(n, a)) {
        const c = ah(n, a, e.extrasValidationRules);
        c.valid || c.violations.forEach((u) => {
          const d = rh(a, u, c.message);
          i.push(new ue({
            item: n,
            category: ["part", "extras"],
            message: d,
            field: [["extras", a]],
            shouldTranslate: !1
          }));
        });
      }
      if (!r || !Object.keys(r).length)
        continue;
      const o = nh(n, a, r, e.findExtrasPrice);
      o.valid || o.incompleteLocations.forEach((l) => {
        i.push(new ue({
          item: n,
          category: ["part", "extras"],
          message: "errors.extras.selection_incomplete",
          params: {
            extraType: `extras.${a}`,
            // Translation key for extra type (banding, finish, planing)
            location: nt(l, { returnKey: !0 })
            // Translation key for location
          },
          field: [["extras", a, l]]
        }));
      });
    }
}
const zs = B({
  // Unique identifier for this group (used internally)
  id: p().min(1),
  // Display label for the group (shown in UI)
  label: p().min(1),
  // Array of location strings in this group
  // Examples: ['side.l1', 'side.l2'], ['face.a', 'face.b']
  locations: ae(p().min(1)).min(1),
  // Optional price override for this group
  // When set, this price will be used instead of calculating from individual locations
  price: f().optional(),
  // Hide individual location inputs when this group is enabled
  // When true, only shows the group control, hiding the individual face/side inputs
  hideIndividualLocations: R().optional().default(!1)
}), em = B({
  banding: ae(zs).optional(),
  finish: ae(zs).optional(),
  planing: ae(zs).optional()
}).optional();
class pi extends Error {
  constructor(e, i) {
    super(e), this.code = i, this.name = "FormulaError";
  }
}
class fa {
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
      if (i === 0) throw new pi("Division by zero", "DIVISION_BY_ZERO");
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
        const M = n[c];
        if (M)
          return u === "q" ? M.q : M[u];
        throw new Error(`Node not found: ${l}`);
      }
      if (r.has(l))
        throw new Error(`Circular dependency detected at ${l}`);
      const d = e.nodes.get(l);
      if (typeof d.formula == "number")
        return a.set(l, d.formula), d.formula;
      r.add(l);
      const h = e.edges.get(l) || /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Map();
      for (const M of h)
        if (M.startsWith("input.")) {
          const N = M.split(".")[1];
          g.set(M, s[N]);
        } else
          g.set(M, o(M));
      const k = this.evaluateFormulaWithDeps(d.formula, g, s);
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
    if (!this.spec?.inputs) throw new pi("No input specifications defined", "NO_INPUTS");
    for (const [i, s] of Object.entries(this.spec.inputs)) {
      const n = e[i];
      if (n === void 0)
        throw new pi(`Missing required input: ${i}`, "MISSING_INPUT");
      if (n < s.min || n > s.max)
        throw new pi(`Input ${i} value ${n} out of range [min: ${s.min}, max: ${s.max}]`, "INPUT_OUT_OF_RANGE");
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
      throw new pi("No input specifications defined", "NO_INPUTS");
    const i = Object.keys(this.spec.inputs);
    if (e.length !== i.length)
      throw new pi(`Expected ${i.length} fields, got ${e.length}`, "INVALID_FIELD_COUNT");
    let s = 0;
    for (const n of e) {
      const a = i[s], r = this.spec.inputs[a];
      if (n.value === null || n.value === void 0)
        throw new pi(`Missing value for field ${s}`, "MISSING_FIELD_VALUE");
      if (n.value < r.min || n.value > r.max)
        throw new pi(`Field ${s} value ${n.value} out of range [min: ${r.min}, max: ${r.max}]`, "FIELD_OUT_OF_RANGE");
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
const Gn = B({
  min: f().min(0).optional(),
  max: f().min(0).optional()
}).optional(), qn = B({
  // Shape dimension constraints
  longSide: Gn,
  shortSide: Gn,
  t: Gn,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: p().optional(),
  // Custom validation message (optional)
  message: p().optional()
}), tm = B({
  banding: qn.optional(),
  finish: qn.optional(),
  planing: qn.optional()
}).optional(), im = Ae(["decimal", "fraction"]), sm = Ae(Po), Rr = ve([
  Pe(0),
  Pe(1),
  Pe(2)
]).catch(0), nm = B({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: p().optional(),
  partB: p().optional(),
  partSelected: p().optional(),
  stock: p().optional(),
  text: p().optional(),
  // Checkout-specific colors
  button: p(),
  buttonText: p()
}), am = B({
  banding: R().default(!1),
  finish: R().default(!1),
  planing: R().default(!1),
  orientation: R().default(!0),
  diagram: R().default(!0),
  focus: R().default(!0),
  machining: R().default(!1),
  csvImport: R().default(!1),
  click: R().default(!0),
  partName: R().default(!0),
  progressNumber: R().default(!0)
  // imageUpload: z.boolean().default( false )
}), rm = B({
  // Localization
  locale: p().default("en-US"),
  currency: p().default("USD"),
  apiVersion: f().min(2).default(3),
  // Number formatting
  numberFormat: im.default("decimal"),
  decimalPlaces: f().min(0).max(10).default(2),
  fractionRoundTo: f().default(0),
  // Stock configuration
  stockSelection: sm.optional(),
  stockGrain: Ui.optional(),
  // Part configuration
  minSpacing: Ao.optional(),
  maxParts: f().min(0).default(0),
  orientationModel: Rr.default(0),
  resultOrientationModel: Rr.default(0),
  minDimension: f().min(0).default(0),
  partTrim: f().min(0).default(0),
  // UI configuration
  debug: R().default(!1),
  enable: am.optional(),
  colors: nm.optional(),
  // Custom fields
  customFields: ae(we()).optional(),
  fieldOrder: ae(p()).optional(),
  // Extras location filtering
  bandingLocations: ae(_n).optional(),
  finishLocations: ae(_n).optional(),
  planingLocations: ae(_n).optional(),
  // Extras location groups
  extrasLocationGroups: em,
  // Extras validation rules
  extrasValidationRules: tm
}), os = B({
  min: f().min(0).optional(),
  max: f().min(0).optional()
}).optional(), om = B({
  // Basic dimension constraints
  l: os,
  w: os,
  t: os,
  longSide: os,
  shortSide: os,
  // Cross-dimensional rules
  // These require that at least one dimension meets a threshold while the other meets a different threshold
  crossDimensionalRule: B({
    // At least one side must be >= primaryMin
    primaryMin: f().min(0).optional(),
    // The other side must be >= secondaryMin
    secondaryMin: f().min(0).optional()
  }).optional(),
  // Formula-based validation using JavaScript expression
  // Formula can reference: l, w, t, longSide, shortSide
  // Examples: "(l * w) > 100", "l >= 50 || w >= 50"
  formula: p().optional(),
  // Custom validation message (optional)
  message: p().optional()
});
function lm(t, e) {
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
  return e.formula && (cm(e.formula, {
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
function cm(t, e) {
  try {
    const i = new fa({}), s = i.parse(t);
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
function um(t) {
  if (t.message)
    return t.message;
  if (t.constraint === "crossDimensional")
    return t.message || "Part dimensions do not meet requirements";
  const e = t.dimension === "t" ? "thickness" : t.dimension === "longSide" ? "long side" : t.dimension === "shortSide" ? "short side" : t.dimension, i = t.constraint === "min" ? "minimum" : "maximum";
  return `Part requires ${e} ${i} of ${t.limit} (current: ${t.value})`;
}
Ae([
  "full_stock",
  "part_area",
  "cut_length",
  "full_stock_plus_cut_length",
  "full_stock_plus_num_parts",
  "roll_length"
]);
const us = Ie(
  p(),
  f().min(0)
).default({}), dm = B({
  name: p().trim().min(1),
  thicknesses: ae(
    ve([
      p().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      f()
    ])
  ).min(1),
  widths: ae(
    ve([
      p().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      f()
    ])
  ).optional()
}), zn = B({
  labels: ae(p()),
  pricing: Ie(p(), f().min(0)).refine((t) => Object.keys(t).length > 0, {
    message: "Pricing must contain at least one value"
  }),
  options: we().optional(),
  keys: ae(p()).optional(),
  // if not all the default keys should be set
  locations: ae(p()).optional(),
  // available locations for this extras type
  groups: ae(zs).optional(),
  // custom location groups
  rules: we().optional()
  // validation rules for this extras type
});
B({
  success: R(),
  price: f().optional(),
  error: p().optional(),
  cacheHit: R().optional()
});
B({
  valid: R(),
  errors: ae(p()),
  warnings: ae(p())
});
B({
  pricing: us,
  labels: ae(p()),
  options: ae(ae(p())),
  // Simplified to string arrays only
  keys: ae(p()),
  maxLevels: f().min(1)
});
B({
  enableCaching: R().default(!0),
  enableLogging: R().default(!1),
  maxCacheSize: f().min(1).default(1e3)
});
const hl = B({
  l: f(),
  w: f(),
  t: f().nullable(),
  q: f(),
  stockId: p()
}), pl = B({
  areaEfficiency: f(),
  finishArea: f(),
  bandingLength: f(),
  partArea: f(),
  totalParts: f(),
  stackedNumberOfCuts: f(),
  numberOfCuts: f(),
  stackedCutLength: f(),
  cutLength: f(),
  rollLength: f()
}), fm = B({
  l: f(),
  w: f(),
  t: f().nullable(),
  material: p().nullable(),
  orientationLock: ve([
    Pe(""),
    Pe("l"),
    Pe("w")
  ]).nullable(),
  q: f(),
  name: p().nullable(),
  rot: ve([Pe(0), Pe(1)]).default(0),
  // V2 format: flat banding/finish (x1/x2/y1/y2 for banding, a/b for finish)
  banding: Ie(p(), ve([p(), R()])).nullable().optional(),
  finish: Ie(p(), ve([p(), R()])).nullable().optional(),
  planing: Ie(p(), ve([p(), R()])).nullable().optional(),
  customData: Ie(p(), we()).nullable().optional(),
  stockId: p().nullable()
}), hm = B({
  id: p(),
  name: p().nullable(),
  l: f(),
  w: f(),
  t: f().nullable(),
  material: p().nullable(),
  q: f(),
  trim: B({
    x1: f(),
    x2: f(),
    y1: f(),
    y2: f()
  }).nullable().optional(),
  cost: f().nullable().optional(),
  analysis: pl.nullable().optional()
}), pm = B({
  id: p().optional(),
  name: p().optional(),
  l: f(),
  w: f(),
  t: f().nullable().optional(),
  material: p().optional(),
  q: f().optional(),
  orientationLock: ve([
    Pe(""),
    Pe("l"),
    Pe("w")
  ]).nullable().optional(),
  // V2 format: flat banding/finish
  banding: Ie(p(), ve([p(), R()])).nullable().optional(),
  finish: Ie(p(), ve([p(), R()])).nullable().optional(),
  planing: Ie(p(), ve([p(), R()])).nullable().optional(),
  customData: Ie(p(), we()).nullable().optional()
});
B({
  jobId: f(),
  metadata: Sn.optional(),
  parts: ae(fm),
  stock: ae(hm),
  offcuts: ae(hl),
  inputs: B({
    parts: ae(pm)
  })
});
const gm = B({
  l: f(),
  w: f(),
  t: f().nullable(),
  material: p().nullable(),
  orientationLock: ve([
    Pe(""),
    Pe("l"),
    Pe("w")
  ]).nullable(),
  q: f(),
  name: p().nullable(),
  rot: ve([Pe(0), Pe(1)]).default(0),
  // V3 format: nested extras structure
  extras: B({
    banding: B({
      sides: Ie(p(), ve([p(), R()]))
    }).nullable().optional(),
    finish: B({
      faces: Ie(p(), ve([p(), R()]))
    }).nullable().optional(),
    planing: B({
      sides: Ie(p(), ve([p(), R()])).optional(),
      faces: Ie(p(), ve([p(), R()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: Ie(p(), we()).nullable().optional(),
  stockId: p().nullable()
}), mm = B({
  id: p(),
  name: p().nullable(),
  l: f(),
  w: f(),
  t: f().nullable(),
  material: p().nullable(),
  q: f(),
  trim: B({
    l1: f(),
    l2: f(),
    w1: f(),
    w2: f()
  }).nullable().optional(),
  cost: f().nullable().optional(),
  analysis: pl.nullable().optional(),
  // New stock fields
  color: ve([
    B({
      hex: p(),
      name: p()
    }),
    p()
  ]).nullable().optional(),
  weight: f().positive().nullable().optional(),
  imageUrl: p().nullable().optional(),
  tags: ae(p()).nullable().optional(),
  available: R().nullable().optional()
}), ym = B({
  id: p().optional(),
  name: p().optional(),
  l: f(),
  w: f(),
  t: f().nullable().optional(),
  material: p().optional(),
  q: f().optional(),
  orientationLock: ve([
    Pe(""),
    Pe("l"),
    Pe("w")
  ]).nullable().optional(),
  // V3 format: nested extras structure
  extras: B({
    banding: B({
      sides: Ie(p(), ve([p(), R()]))
    }).nullable().optional(),
    finish: B({
      faces: Ie(p(), ve([p(), R()]))
    }).nullable().optional(),
    planing: B({
      sides: Ie(p(), ve([p(), R()])).optional(),
      faces: Ie(p(), ve([p(), R()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: Ie(p(), we()).nullable().optional()
});
B({
  jobId: f(),
  metadata: Sn.optional(),
  parts: ae(gm),
  stock: ae(mm),
  offcuts: ae(hl),
  inputs: B({
    parts: ae(ym)
  })
});
function gl(t) {
  return {
    l: t.l,
    w: t.w,
    t: t.t ?? null,
    q: t.q,
    stockId: t?.stock?.id || t?.stockId || ""
  };
}
function ml(t) {
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
const bm = B({
  stockType: Ae([...Zs]).optional(),
  bladeWidth: ve([
    Co,
    p()
  ]).optional(),
  cutType: gn,
  cutPreference: mn,
  stackHeight: pn,
  guillotineOptions: yn
}).optional();
B({
  l: f().nullable(),
  w: f().nullable(),
  t: ve([f(), p()]).nullable().optional(),
  material: p().nullable().optional(),
  orientationLock: ve([
    Pe("l"),
    Pe("w"),
    Pe("")
  ]).nullable().optional(),
  q: f().min(1).nullable().optional(),
  name: p().nullable().optional(),
  // Import existing schemas for extras
  banding: xo.nullable().optional(),
  finish: ko.nullable().optional(),
  planing: Oo.nullable().optional(),
  // Custom data as record
  customData: Ie(p(), we()).nullable().optional(),
  stockId: p().nullable().optional()
});
const vm = B({
  // Required fields
  stock: ae(Kt).default([]),
  options: rm,
  // Optional fields
  type: p().optional(),
  // variable | simple
  materials: ae(dm).optional(),
  banding: zn.nullable().optional(),
  finish: zn.nullable().optional(),
  planing: zn.nullable().optional(),
  machining: we().optional(),
  bandingPricing: us.optional(),
  finishPricing: us.optional(),
  planingPricing: us.optional(),
  machiningPricing: us.optional(),
  // colors field removed in version 6.1.0 - was deprecated and unused
  variations: we().optional(),
  // NOTE: extrasValidationRules and extrasLocationGroups moved to optionsSchema
  // Part validation rules
  partRules: om.optional(),
  // Saw configuration
  saw: bm,
  // Stock filter (optional)
  // When enabled, the stock array is used as available filter options
  // and the actual stock list starts empty (built by user selections)
  stockFilter: B({
    enabled: R(),
    config: we().optional()
    // Use any to avoid circular dependency
    // Note: availableStock removed - uses stock array instead
  }).optional()
});
function wm(t) {
  const e = vm.safeParse(t);
  return {
    success: e.success,
    data: e.success ? e.data : void 0,
    error: e.success ? void 0 : e.error
  };
}
function Sm(t) {
  const e = wm(t);
  if (!e.success) {
    const i = e.error?.issues.map((s) => `${s.path.join(".")}: ${s.message}`).join(", ") || "Unknown validation error";
    throw console.error("Invalid checkout data:", JSON.stringify(t, null, 2)), console.error("Validation errors:", i), new Error(`Invalid checkout data: ${i}`);
  }
  return e.data;
}
function zt(t) {
  return t == null ? !1 : typeof t == "object" && t.value !== void 0 ? t.value : t;
}
function xm(t) {
  if (t.extras?.banding?.sides) {
    const e = t.extras.banding.sides, i = {};
    if (Oe(e.a) || Oe(e.b) || Oe(e.c) || Oe(e.d))
      i.x1 = Oe(e.a) ? zt(e.a) : !1, i.y1 = Oe(e.b) ? zt(e.b) : !1, i.x2 = Oe(e.c) ? zt(e.c) : !1, i.y2 = Oe(e.d) ? zt(e.d) : !1;
    else {
      const n = ua(e);
      i.x1 = Oe(n.x1) ? zt(n.x1) : !1, i.x2 = Oe(n.x2) ? zt(n.x2) : !1, i.y1 = Oe(n.y1) ? zt(n.y1) : !1, i.y2 = Oe(n.y2) ? zt(n.y2) : !1;
    }
    t.banding = i;
  }
  if (t.extras?.finish?.faces) {
    const e = t.extras.finish.faces, i = {};
    i.a = Oe(e.a) ? zt(e.a) : !1, i.b = Oe(e.b) ? zt(e.b) : !1, t.finish = i;
  }
  if (t.extras?.planing) {
    const e = t.extras.planing, i = {}, s = ua(e.sides || {});
    e.sides && (Oe(s.x1) && (i.x1 = s.x1), Oe(s.x2) && (i.x2 = s.x2), Oe(s.y1) && (i.y1 = s.y1), Oe(s.y2) && (i.y2 = s.y2)), e.faces && (Oe(e.faces.a) && (i.a = e.faces.a), Oe(e.faces.b) && (i.b = e.faces.b)), Object.keys(i).length > 0 && (t.planing = i);
  }
  (t.extras?.banding || t.extras?.finish || t.extras?.planing) && delete t.extras;
}
function km(t, e = 0) {
  if (e === 0)
    return t;
  if (e === 1 || e === 2) {
    const i = Math.max(t.l, t.w), s = Math.min(t.l, t.w);
    t.w > t.l && (t.l = i, t.w = s);
  }
  return t;
}
function yl(t, e = 0) {
  return e === 0 || t.forEach((i) => km(i, e)), t;
}
function Im(t, e, i, s, n, a, r) {
  const o = e.map((u) => {
    const d = {
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
      banding: pp(),
      finish: rn(),
      planing: mp()
    }, h = { ...u };
    return xm(h), h.banding && (d.banding = h.banding), h.finish && (d.finish = h.finish), h.planing && (d.planing = h.planing), d;
  }), l = i.map((u) => {
    const d = {
      id: u.id,
      name: u?.name ?? null,
      l: u.l,
      w: u.w,
      t: u?.t ?? null,
      material: u.material ?? null,
      q: a?.usedStockTally?.[u.parentId] || u.q,
      cost: u?.cost ?? null,
      analysis: ml(u?.analysis)
    };
    return u?.trim && (d.trim = ua(u.trim)), d;
  }), c = {
    parts: n.map((u) => {
      const d = {
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
      return u.extras && (d.extras = {}, u.extras.banding?.sides && (d.extras.banding = { sides: u.extras.banding.sides }), u.extras.finish?.faces && (d.extras.finish = { faces: u.extras.finish.faces }), u.extras.planing && (d.extras.planing = {
        ...u.extras.planing.sides && { sides: u.extras.planing.sides },
        ...u.extras.planing.faces && { faces: u.extras.planing.faces }
      })), d;
    })
  };
  return r && yl(o, r), {
    jobId: t,
    metadata: a,
    parts: o,
    stock: l,
    offcuts: s?.map(gl) || [],
    inputs: c
  };
}
function Pm(t, e, i, s, n, a, r) {
  const o = e.map((u) => {
    const d = {
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
        banding: { sides: ca() },
        finish: { faces: rn() },
        planing: gp()
      }
    };
    return u.extras && (u.extras.banding?.sides && (d.extras.banding = { sides: u.extras.banding.sides }), u.extras.finish?.faces && (d.extras.finish = { faces: u.extras.finish.faces }), u.extras.planing && (d.extras.planing = {
      sides: u.extras.planing.sides || ca(),
      faces: u.extras.planing.faces || rn()
    })), d;
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
    analysis: ml(u?.analysis),
    // New stock fields
    color: u?.color ?? null,
    weight: u?.weight ?? null,
    imageUrl: u?.imageUrl ?? null,
    tags: u?.tags ?? null,
    available: u?.available ?? null
  })), c = {
    parts: n.map((u) => {
      const d = {
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
      return u.extras && (d.extras = {}, u.extras.banding?.sides && (d.extras.banding = { sides: u.extras.banding.sides }), u.extras.finish?.faces && (d.extras.finish = { faces: u.extras.finish.faces }), u.extras.planing && (d.extras.planing = {
        ...u.extras.planing.sides && { sides: u.extras.planing.sides },
        ...u.extras.planing.faces && { faces: u.extras.planing.faces }
      })), d;
    })
  };
  return r && yl(o, r), {
    jobId: t,
    metadata: a,
    parts: o,
    stock: l,
    offcuts: s?.map(gl) || [],
    inputs: c
  };
}
const Cm = ["id", "data-index"], Am = /* @__PURE__ */ Ue({
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
        l1: yi(i.inputShape, "banding", "side.l1"),
        l2: yi(i.inputShape, "banding", "side.l2"),
        w1: yi(i.inputShape, "banding", "side.w1"),
        w2: yi(i.inputShape, "banding", "side.w2")
      };
      const c = Sf(
        i.orientationModel,
        i.stockGrain,
        i.inputShape
      );
      c && (l = $o(l, c)), n.value = l;
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
    return Jt(() => {
      document.getElementById(i.id)?.addEventListener("keydown", r);
    }), bs(() => {
      document.getElementById(i.id)?.removeEventListener("keydown", r);
    }), (l, c) => (w(), F("div", {
      id: t.id,
      class: je(["banding-button", { open: t.open, disabled: t.disabled }]),
      "data-field": "banding",
      "data-index": t.index,
      tabindex: "0",
      onClick: o
    }, [
      $("div", {
        class: je(["outer", {
          l1: n.value.l1,
          l2: n.value.l2,
          w1: n.value.w1,
          w2: n.value.w2
        }])
      }, [...c[0] || (c[0] = [
        $("div", { class: "inner" }, null, -1)
      ])], 2)
    ], 10, Cm));
  }
}), Tm = ["id", "data-index", "disabled"], Om = /* @__PURE__ */ Ue({
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
    const i = t, s = e, n = ie(() => i.inputShape ? yi(i.inputShape, "finish", "face.a") : !1), a = ie(() => i.inputShape ? yi(i.inputShape, "finish", "face.b") : !1), r = () => {
      i.disabled || s("clicked");
    };
    return (o, l) => {
      const c = xi("FontAwesomeIcon");
      return w(), F("button", {
        id: t.id,
        class: je(["c-btn finish-button", {
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
        We(c, { icon: ["fass", "spray-can"] })
      ], 10, Tm);
    };
  }
});
function Lm(t) {
  return t.machining ? "toData" in t.machining ? t.machining.toData() : t.machining : { holes: [], hingeHoles: [], corners: {} };
}
function bl(t) {
  const e = Lm(t);
  return e ? !!(e.holes && e.holes.length > 0 || e.hingeHoles && e.hingeHoles.length > 0 || e.corners && Object.values(e.corners).some((i) => i && i.type && i.size > 0)) : !1;
}
const Fm = Ue({
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
      return bl(this.inputShape);
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
}), $m = ["id", "disabled"];
function Dm(t, e, i, s, n, a) {
  const r = xi("FontAwesomeIcon");
  return w(), F("button", {
    id: t.id,
    class: je(["c-btn machining-button", { selected: t.hasMachining }]),
    type: "button",
    disabled: t.disabled,
    onClick: e[0] || (e[0] = (...o) => t.openMachining && t.openMachining(...o))
  }, [
    We(r, { icon: ["fass", "hammer"] })
  ], 10, $m);
}
const Em = /* @__PURE__ */ Dt(Fm, [["render", Dm]]), Mm = ["id"], Rm = {
  key: 0,
  class: "del",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, _m = {
  key: 1,
  class: "no-change",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, jm = {
  key: 2,
  class: "arrow",
  viewBox: "0 0 67 63",
  xmlns: "http://www.w3.org/2000/svg"
}, Bm = {
  key: 3,
  class: "arrow",
  viewBox: "0 0 72 39",
  xmlns: "http://www.w3.org/2000/svg"
}, Vm = {
  key: 4,
  class: "arrow",
  viewBox: "0 0 39 72",
  xmlns: "http://www.w3.org/2000/svg"
}, Nm = {
  key: 5,
  class: "grain",
  viewBox: "0 0 106 64",
  xmlns: "http://www.w3.org/2000/svg"
}, Gm = {
  key: 6,
  class: "grain",
  viewBox: "0 0 64 106",
  xmlns: "http://www.w3.org/2000/svg"
}, _r = /* @__PURE__ */ Ue({
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
    const i = t, s = e, n = oe(0), a = oe(!1), r = (z, y, W, te) => {
      if (!Le(W) || y === 0)
        return z;
      const J = o();
      return y === 1 || y === 2 && te !== "n" && z ? J : z;
    }, o = (z) => {
      const y = { ...i, ...z };
      if (!y.rectangle || !Le(y.rectangle)) return "";
      let W = "";
      switch (y.orientationModel) {
        case 0:
          W = x.value;
          break;
        case 1:
          y.stockGrain === "y" || y.stockGrain === "n" ? W = y.rectangle.l >= y.rectangle.w ? "l" : "w" : y.rectangle.l >= y.rectangle.w ? W = y.stockGrain : W = W = y.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          W = y.rectangle.l >= y.rectangle.w ? "l" : "w";
          break;
      }
      return W;
    }, l = () => {
      if (i.disabled || C.value.length <= 1)
        return;
      const z = c(x.value);
      "multiEdit" in i.rectangle && i.rectangle.multiEdit && x.value === "" && n.value !== z && n.value === 0 && (n.value = z);
      let W = null;
      [1, 2].includes(i.orientationModel) ? W = d() : W = u(), n.value = W;
    }, c = (z) => {
      const y = C.value.findIndex((W) => W === z);
      return y === -1 ? 0 : y;
    }, u = () => {
      let z = n.value + 1;
      return z > C.value.length - 1 && (z = 0), z;
    }, d = () => {
      let z = 0;
      if (x.value === "") {
        const y = o();
        z = C.value.findIndex((W) => W === y);
      } else
        z = C.value.findIndex((y) => y === "");
      return z;
    }, h = (z) => {
      s("updateOrientation", z);
    }, g = () => {
      const z = x.value;
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
      if ("multiEdit" in i.rectangle && i.rectangle.multiEdit && !x.value) {
        N("");
        return;
      }
      const z = r(
        x.value,
        i.orientationModel,
        i.rectangle,
        i.stockGrain
      );
      if (z !== x.value) {
        N(z);
        return;
      }
      if (!a.value || n.value === -1) {
        const y = c(x.value);
        n.value = y;
      }
      if (Le(i.rectangle)) {
        if (i.orientationModel === 1) {
          const y = Y.value ? o() : x.value;
          N(y);
          return;
        }
        if (i.orientationModel === 2) {
          let y;
          Y.value ? y = i.stockGrain !== "n" ? o() : "" : y = x.value, N(y);
        }
      }
    }, M = oe(!1), N = (z) => {
      const y = c(z);
      M.value = !0, n.value = y, M.value = !1, h(z);
    }, T = () => {
      const z = [
        { l: 100, w: 50, desc: "l > w" },
        { l: 50, w: 50, desc: "l === w" },
        { l: 50, w: 100, desc: "w > l" }
      ], y = ["l", "w", "y", "n"], W = [0, 1, 2], te = {
        "": "Free rotation",
        l: "Long side follows grain",
        w: "Short side follows grain"
      }, J = {
        "": "Free rotation",
        l: "Long side follows stock length (long side)",
        w: "Long side follows stock width (short side)"
      }, j = {
        l: "Grain along stock length (long side)",
        w: "Grain along stock width (short side)",
        y: "Grain along a mix of stock length (long side) and width (short side)",
        n: "No stock grain set"
      }, V = [];
      z.forEach((q) => {
        y.forEach((G) => {
          W.forEach((U) => {
            const ne = new cs({
              l: q.l,
              w: q.w
            }), me = o({
              orientationModel: U,
              rectangle: ne,
              stockGrain: G
            });
            let xe = "";
            ne.l === ne.w ? xe = "l === w" : ne.l > ne.w ? xe = "l >= w" : xe = "w > l";
            const $e = ["l", "w", "y"].includes(G) ? te : J;
            V.push({
              Model: U,
              "Stock grain": G,
              "Stock grain description": j[G],
              Dimensions: xe,
              "Orientation lock": me || "N/A",
              "Orientation Lock description": $e[me] || "N/A"
            });
          });
        });
      }), V.sort((q, G) => {
        if (q.Model !== G.Model)
          return q.Model - G.Model;
        if (q["Stock grain"] !== G["Stock grain"])
          return q["Stock grain"].localeCompare(G["Stock grain"]);
        const U = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return U[q.Dimensions] - U[G.Dimensions];
      }), console.table(V);
    }, C = ie(() => {
      if (!i.rectangle) return ["l", "w"];
      if (Ht(i.rectangle)) return ["l", "w"];
      let z = ["", "l", "w"];
      return i.rectangle.multiEdit ? [" ", "", "l", "w"] : (D.value && (z = z.filter((y) => y !== "w")), z);
    }), D = ie(() => Le(i.rectangle) || zi(i.rectangle) ? i.rectangle.isSquare : i.rectangleType && i.rectangle?.l && i.rectangle?.w ? i.rectangle?.l === i.rectangle?.w : !1), x = ie(() => {
      let z = "";
      if (Ht(i.rectangle))
        z = i.rectangle.direction === "horizontal" ? "l" : "w";
      else if (Le(i.rectangle)) {
        const y = i.rectangle.orientationLock;
        z = y === null ? "" : y;
      } else if (zi(i.rectangle)) {
        const W = i.rectangle.grain ?? "";
        W === "l" || W === "w" || W === "" || W === " " ? z = W : z = "";
      }
      return z;
    }), L = ie(() => Ht(i.rectangle) || !i.rectangle ? {
      l: null,
      w: null
    } : {
      l: i.rectangle.l,
      w: i.rectangle.w
    }), Y = ie(() => !L.value.l && !L.value.w), _ = ie(() => Ht(i.rectangle) ? !1 : ea(
      i.orientationModel,
      i.stockGrain,
      i.rectangle,
      i.rectangleType,
      i.shapeOrientation
    )), ce = ie(() => {
      if (!i.rectangle)
        return i.shapeOrientation ? "noGrain" : "freeRotation";
      if (zi(i.rectangle) || i.rectangleType === "stock") {
        const J = i.rectangle.grain;
        return "multiEdit" in i.rectangle && i.rectangle.multiEdit ? {
          " ": "noGrain",
          // Clear to no grain
          "": "noChange",
          // No change
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[J] || "noGrain" : {
          "": "noGrain",
          // No grain
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[J] || "noGrain";
      }
      const z = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, y = i.stockGrain || "default";
      let W = "default";
      Le(i.rectangle) || i.rectangleType === "shape" ? W = g() : Ht(i.rectangle) && (W = i.rectangle.direction || "default");
      const te = z[y]?.[W];
      return te || z[y]?.default || "freeRotation";
    });
    return He(n, (z, y) => {
      a.value && y !== void 0 && (M.value || h(C.value[z]));
    }, { immediate: !1 }), He(L, (z, y) => {
      if (!i.rectangle || i.orientationModel === 0 || !Le(i.rectangle) || Le(i.rectangle) && (i.orientationModel === 2 && y.l && y.w && !x.value || i.stockGrain === "n" && !x.value))
        return;
      const W = o();
      x.value !== W && h(W);
    }, { immediate: !1 }), He(() => i.stockGrain, (z, y) => {
      z !== y && k();
    }, { immediate: !0 }), Jt(() => {
      k(), mt(() => {
        a.value = !0, i.debug && T();
      });
    }), (z, y) => (w(), F("button", {
      type: "button",
      id: t.id,
      class: je(["c-btn orientation-button", { rot: _.value, square: D.value, disabled: t.disabled, [ce.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      onClick: l
    }, [
      ce.value === "delete" ? (w(), F("svg", Rm, [...y[0] || (y[0] = [
        $("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ])])) : se("", !0),
      ce.value === "noChange" ? (w(), F("svg", _m, [...y[1] || (y[1] = [
        $("path", {
          d: "M5 12h14",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        }, null, -1)
      ])])) : se("", !0),
      ce.value === "freeRotation" ? (w(), F("svg", jm, [...y[2] || (y[2] = [
        $("g", null, [
          $("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          $("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          $("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          $("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ])])) : se("", !0),
      ce.value === "leftRight" ? (w(), F("svg", Bm, [...y[3] || (y[3] = [
        $("g", null, [
          $("path", { d: "m5.408 19.408h61.095" }),
          $("g", null, [
            $("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            $("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ])])) : se("", !0),
      ce.value === "topBottom" ? (w(), F("svg", Vm, [...y[4] || (y[4] = [
        $("g", null, [
          $("path", { d: "m19.408 66.503v-61.095" }),
          $("g", null, [
            $("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            $("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ])])) : se("", !0),
      ce.value === "grainLeftRight" ? (w(), F("svg", Nm, [...y[5] || (y[5] = [
        $("g", null, [
          $("path", { d: "m3 3h99.887" }),
          $("path", { d: "m3.113 32h99.887" }),
          $("path", { d: "m3.113 61h99.887" })
        ], -1)
      ])])) : se("", !0),
      ce.value === "grainTopBottom" ? (w(), F("svg", Gm, [...y[6] || (y[6] = [
        $("g", null, [
          $("path", { d: "m61 3v99.887" }),
          $("path", { d: "m32 3.113v99.887" }),
          $("path", { d: "m3 3.113v99.887" })
        ], -1)
      ])])) : se("", !0)
    ], 10, Mm));
  }
}), qm = ["id", "data-index", "disabled"], zm = /* @__PURE__ */ Ue({
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
    const i = t, s = e, n = ie(() => i.inputShape ? yi(i.inputShape, "planing", "face.a") : !1), a = ie(() => i.inputShape ? yi(i.inputShape, "planing", "face.b") : !1), r = () => {
      i.disabled || s("clicked");
    };
    return (o, l) => {
      const c = xi("FontAwesomeIcon");
      return w(), F("button", {
        id: t.id,
        class: je(["c-btn planing-button", {
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
        We(c, { icon: ["fass", "hammer"] })
      ], 10, qm);
    };
  }
}), Wm = {
  key: 0,
  class: "info"
}, Hm = ["disabled"], Um = /* @__PURE__ */ Ue({
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
    widthOptions: {
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
    const i = t, s = e, n = ["orientationLock", "grain", "banding", "bandingOptions", "machining", "finish", "planing", "imageUpload"], a = ie(() => n.includes(i.field.name) || i.field.name === "material" && i.typePrefix === "part" || i.field.name === "t" && i.thicknessOptions?.length > 0 || i.field.name === "w" && i.widthOptions?.length > 0), r = ie(() => {
      try {
        const D = i.field.propertyPath || i.field.name;
        return D.includes(".") ? gi(i.item, D) ?? null : i.item[D] ?? null;
      } catch (D) {
        return console.error("[CheckoutField] Error getting field value:", D), null;
      }
    }), o = ie(() => {
      if (i.field.custom && i.field.type) {
        const L = i.field.type;
        if (["checkbox", "select", "string", "integer", "unitDependent"].includes(L))
          return L;
      }
      const D = {
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
      const x = D[i.field.type];
      return x || "string";
    }), l = ie(() => i.field.output ? i.field.output : null), c = ie(() => i.field.options || []), u = ie(() => !1), d = ie(() => tr(i.item, [i.field.name])), h = ie(() => tr(i.item, [i.field.name], !0)), g = ie(() => i.multiEdit || !1), k = ie(() => i.materialOptions?.length > 0 && Le(i.item) ? !i.item.material : !1), M = ie(() => i.widthOptions?.length === 1), N = ie(() => i.field.info ? typeof i.field.info == "string" ? i.field.info : typeof i.field.info == "object" && r.value !== null && i.field.info[r.value] || null : null), T = (D) => {
      s("update", D);
    }, C = (D, x) => {
      s("validation", D, x);
    };
    return (D, x) => a.value ? (w(), F(Be, { key: 1 }, [
      t.field.name === "orientationLock" ? (w(), De(_r, {
        key: 0,
        rectangle: t.item,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        "button-background": "#2c8d8f",
        onUpdateOrientation: T
      }, null, 8, ["rectangle", "stock-grain", "orientation-model"])) : t.field.name === "grain" ? (w(), De(_r, {
        key: 1,
        rectangle: t.item,
        "button-background": "#2c8d8f",
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        onUpdateOrientation: T
      }, null, 8, ["rectangle", "stock-grain", "orientation-model"])) : t.field.name === "banding" ? (w(), De(Am, {
        key: 2,
        "input-shape": A(Le)(t.item) ? t.item : null,
        open: t.bandingEnabled?.autoId === t.item.autoId,
        "stock-grain": t.stockGrain,
        index: t.index,
        onClicked: x[0] || (x[0] = (L) => D.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "index"])) : t.field.name === "finish" ? (w(), De(Om, {
        key: 3,
        "input-shape": A(Le)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        onClicked: x[1] || (x[1] = (L) => D.$emit("open-finish"))
      }, null, 8, ["input-shape", "index"])) : t.field.name === "planing" ? (w(), De(zm, {
        key: 4,
        "input-shape": A(Le)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        onClicked: x[2] || (x[2] = (L) => D.$emit("open-planing"))
      }, null, 8, ["input-shape", "index"])) : t.field.name === "machining" ? (w(), De(Em, {
        key: 5,
        "input-shape": A(Le)(t.item) ? t.item : null,
        onOpen: x[3] || (x[3] = (L) => D.$emit("open-machining"))
      }, null, 8, ["input-shape"])) : t.field.name === "material" && t.typePrefix === "part" ? (w(), De(bi, {
        key: 6,
        id: `${t.typePrefix}-material-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: r.value,
        label: A(H)(t.field.label || "fields.material"),
        placeholder: A(H)(t.field.placeholder || "fields.material"),
        "enable-label": !1,
        output: "string",
        options: t.materialOptions,
        "select-first-option-disabled": !0,
        disabled: !t.materialOptions?.length,
        required: !1,
        text: {
          select: A(H)("actions.select"),
          delete: A(H)("actions.delete")
        },
        "onUpdate:value": T,
        onValidation: C
      }, {
        default: Oi(() => [
          Hs(D.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : t.field.name === "t" && t.thicknessOptions?.length > 0 ? (w(), De(bi, {
        key: 7,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: r.value,
        label: A(H)(t.field.label || "fields.t"),
        "enable-label": !1,
        options: t.thicknessOptions,
        readonly: t.readonly,
        disabled: k.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: A(H)("actions.select"),
          delete: A(H)("actions.delete")
        },
        output: "number",
        "onUpdate:value": T,
        onValidation: C
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "w" && t.widthOptions?.length > 0 ? (w(), De(bi, {
        key: 8,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: r.value,
        label: A(H)(t.field.label || "fields.w"),
        "enable-label": !1,
        options: t.widthOptions,
        readonly: t.readonly,
        disabled: M.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: A(H)("actions.select"),
          delete: A(H)("actions.delete")
        },
        output: "number",
        "onUpdate:value": T,
        onValidation: C
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "imageUpload" ? (w(), F("button", {
        key: 9,
        type: "button",
        disabled: t.readonly,
        onClick: x[4] || (x[4] = (L) => D.$emit("open-image-upload"))
      }, [
        We(A(Ws), { icon: ["fass", "image"] })
      ], 8, Hm)) : se("", !0)
    ], 64)) : (w(), De(bi, {
      key: 0,
      id: `${t.typePrefix}-${t.field.name}-${t.index}`,
      "data-field": t.field.name,
      "data-index": t.index,
      type: o.value,
      value: r.value,
      label: A(H)(t.field.label || t.field.name),
      placeholder: A(H)(t.field.placeholder || t.field.name),
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
      issue: d.value,
      warning: h.value,
      "disable-required-validation": g.value,
      "onUpdate:value": T,
      onValidation: C
    }, {
      default: Oi(() => [
        N.value ? (w(), F("p", Wm, [
          We(A(Ws), { icon: ["fass", "info-circle"] }),
          ds(" " + re(N.value), 1)
        ])) : se("", !0),
        Hs(D.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "data-field", "data-index", "type", "value", "label", "placeholder", "enable-label", "output", "options", "select-first-option-disabled", "disabled", "readonly", "required", "allow-zero", "true-value", "false-value", "default", "number-format", "min", "max", "multi-edit", "text", "issue", "warning", "disable-required-validation"]));
  }
}), Ym = { class: "checkout-calculator-wrapper" }, Km = {
  key: 0,
  class: "row table-heading"
}, Zm = {
  key: 0,
  class: "cell center"
}, Jm = { class: "cell" }, Xm = {
  key: 0,
  class: "cell"
}, Qm = ["onClick"], ey = { class: "cell" }, ty = ["disabled", "aria-label", "onClick"], iy = { class: "button-wrapper main" }, sy = ["aria-label"], ny = ["aria-label", "disabled"], ay = ["aria-label"], ry = { id: "part-count" }, oy = {
  key: 3,
  id: "messages"
}, ly = {
  key: 0,
  class: "heading"
}, cy = { class: "content" }, uy = {
  key: 4,
  id: "progress"
}, dy = { id: "diagram-wrapper" }, fy = {
  key: 0,
  id: "stack"
}, hy = {
  key: 3,
  class: "debug"
}, Wn = !0, py = /* @__PURE__ */ Ue({
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
    const s = Bi(() => Promise.resolve().then(() => xy)), n = Bi(() => Promise.resolve().then(() => Gy)), a = Bi(() => Promise.resolve().then(() => Yy)), r = Bi(() => Promise.resolve().then(() => Ea)), {
      inputs: o,
      totalInputShapes: l,
      getShapeGrainSummary: c,
      updateNumberFormat: u,
      validateInputStock: d,
      // validateInputShapeField,
      // validateInputStockField,
      removeInputShape: h,
      addInputShape: g,
      addInputStock: k,
      cloneInputShape: M,
      updateInputShape: N,
      validationIssues: T,
      setExtrasOptionsFromPricing: C,
      getCentralizedOptions: D
    } = tl(), { r: x, updateFromResult: L, stackedStock: Y, uniqueAddedShapes: _, uniqueUsedStock: ce, activeStockAutoId: z, activeStock: y, setActiveStockAutoId: W } = pa(), { progress: te, reset: J } = Lc(), { addNotice: j } = ln(), V = ie(() => o.inputShapes.value.filter(Le)), q = (m) => !m || !Array.isArray(m) ? [] : m.map((b) => Pp({ parts: [b] }).parts?.[0] || b), G = t, U = i, ne = oe(!1), Se = "production", me = oe(navigator?.language || "en-US"), xe = Ql(null), $e = window.location.hostname, Q = oe(!1), Ve = oe(!0), ot = ec("Checkout/currentURL", window.location.href), Xe = oe(null), et = oe(!1), ee = oe(!1), Me = oe(!1), vt = oe(!1), gt = oe(!1), Qi = oe(gf()), kt = oe(!1), { socket: fe } = Tc({
      refs: {
        connected: Q,
        thinking: Me
      },
      callbacks: {
        onResult(m) {
          const b = m.optimisation;
          if (L(b), !b.shapeList?.length || !b.stockList?.length) {
            J(), j({
              type: "error",
              message: H("errors.calculation.no_result"),
              additional: [H("errors.validation.check_inputs")]
            }), Me.value = !1;
            return;
          }
          if ((de.apiVersion || 3) === 2 ? Xe.value = Im(
            m.jobId,
            _.value,
            ce.value,
            x.offcuts?.value || [],
            o.inputShapes.value,
            x.metadata.value,
            de.resultOrientationModel
          ) : Xe.value = Pm(
            m.jobId,
            _.value,
            ce.value,
            x.offcuts?.value || [],
            o.inputShapes.value,
            x.metadata.value,
            de.resultOrientationModel
          ), x?.metadata?.value?.unplacedParts?.length) {
            const v = x.metadata.value.unplacedParts.map((E) => E.id).join();
            j({
              type: "warning",
              message: H("woodwork.parts_not_fit") + ": " + v
            });
          }
          Xe.value && U("result", Xe.value), Me.value = !1;
        },
        onUser(m) {
          xe.value = m;
        },
        onConnectError(m) {
          j({
            type: "error",
            message: H("errors.network.cannot_connect"),
            additional: [m]
          });
        },
        onError(m) {
          j({
            type: "error",
            message: H("errors.general.error_occurred"),
            additional: [m]
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
    }, de = Ct(pe), ye = Ct({
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
    }), lt = oe(null), P = oe(!1), O = oe(""), S = oe("");
    He(T, (m) => {
      m?.length > 0 ? (P.value = !0, O.value = "Validation Errors", S.value = m.map((b) => `${b.message} (${b.category.join(", ")})`).join(`

`)) : O.value === "Validation Errors" && (P.value = !1, O.value = "", S.value = "");
    }, { deep: !0 });
    const X = Ct({
      banding: null,
      finish: null,
      info: null,
      planing: null
      // imageUpload: null
    }), Z = oe([]), be = oe([]), Ce = oe([]), Te = oe([]), Pt = Ct({
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
    }), _e = Ct({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2"]
    }), Ze = Ct({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["a", "b"]
    }), tt = Ct({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]
      // All sides and faces by default
    }), Ma = oe(null), Fi = Ct({}), $i = Ct({}), Di = Ct({}), xs = oe(null), xl = ie(() => ({
      banding: Fi.rules,
      finish: $i.rules,
      planing: Di.rules
    })), Ra = ie(() => Oc({
      stockType: ye.stockType,
      materials: Z.value,
      minDimension: de.minDimension,
      ...de.fieldOrder && de.fieldOrder.length > 0 ? { allowedFieldIds: de.fieldOrder } : {}
    })), kn = oe([]), In = oe({
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
    }), es = ie(() => {
      const m = Ra.value.fields.value, b = Ra.value.allFieldsMap.value, I = m.filter((Ee) => In.value[Ee.name] ?? !0), v = ["banding", "finish", "planing", "machining", "imageUpload"], E = [];
      for (const Ee of v) {
        const it = In.value[Ee], Ge = I.find((qe) => qe.name === Ee);
        if (it && !Ge) {
          const qe = b.get(Ee);
          qe && E.push(qe);
        }
      }
      const ge = kn.value || [];
      return [...I, ...E, ...ge];
    }), ts = ie(() => es.value.length + 2), kl = ie(() => {
      const m = {
        id: 34,
        del: 32
      }, b = {
        id: `${m.id}px`,
        del: `${m.del}px`
      }, I = [];
      for (const v of es.value) {
        if (v.name === "trim") continue;
        const E = v.w ?? "minmax(20px, 1fr)";
        I.push(E);
      }
      return I.unshift(b.id), I.push(b.del), I.join(" ");
    }), ks = ie(() => ({
      "--btn-color": de.colors.buttonText,
      "--btn-bg": de.colors.button,
      "--btn-hover-bg": Il(de.colors.button, -8),
      "--btn-focus-ring": de.colors.button
    }));
    function Il(m, b) {
      const I = m.replace("#", ""), v = parseInt(I, 16), E = Math.round(2.55 * b), ge = (v >> 16) + E, ke = (v >> 8 & 255) + E, Ee = (v & 255) + E;
      return `#${(16777216 + (ge < 255 ? ge < 1 ? 0 : ge : 255) * 65536 + (ke < 255 ? ke < 1 ? 0 : ke : 255) * 256 + (Ee < 255 ? Ee < 1 ? 0 : Ee : 255)).toString(16).slice(1)}`;
    }
    const Pl = {
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
    }, _a = ie(() => xe.value ? !(xe.value && xe.value?.api?.whiteLabel) : !0), Is = {
      stockSelection: (m) => {
        const b = ["efficiency", "smallest"];
        m && !b.includes(m) ? console.warn(`${m} is not a valid stockSelection, expected ${b.join("|")}`) : ye.options.stockSelection = m;
      },
      minSpacing: (m) => {
        ye.options.minSpacing = m;
      },
      maxParts: (m) => {
        de.maxParts = m;
      },
      locale: (m) => {
        me.value = m.replace(/_/g, "-");
      },
      enable: (m) => {
        const b = {
          banding: "banding",
          name: "partName",
          finish: "finish",
          planing: "planing",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload"
        };
        for (const I in pe.enable)
          I in m && (de.enable[I] = m[I]);
        for (const I in b) {
          const v = b[I], E = gi(m, [v]), ge = pe.enable[v];
          wt(I, E !== void 0 ? E : ge);
        }
        gt.value = gi(m, ["csvImport"]) ?? pe.enable.csvImport;
      },
      colors: (m) => {
        for (const b in pe.colors)
          b in m && (de.colors[b] = m[b]);
      },
      orientationModel: (m) => {
        if (![0, 1, 2].includes(m)) {
          de.orientationModel = 0;
          return;
        }
        de.orientationModel = m;
      },
      numberFormat: (m) => {
        if (!["decimal", "fraction"].includes(m)) {
          de.numberFormat = "decimal";
          return;
        }
        de.numberFormat = m;
      },
      customFields: (m) => {
        if (!Array.isArray(m) || !m?.length)
          return;
        const b = [];
        m.forEach((I) => {
          const v = ja(I.id), E = {
            ...I,
            custom: !0,
            id: v,
            name: v,
            // CheckoutField expects 'name' property
            propertyPath: "customData." + v,
            fieldMap: "customData." + v
          };
          I.type === "checkbox" && (E.w = "32px"), I.type === "integer" || I.type === "float" ? E.output = I.output ?? "number" : I.type === "select" && (E.output = I.output ?? "string", E.options = I.options), b.push(E);
        }), kn.value = b, mt(() => {
          for (const I of o.inputShapes.value)
            I.customData = m.reduce((v, E) => {
              const ge = ja(E.id);
              return v[ge] = I.customData[ge] || E.default || "", v;
            }, {});
        });
      }
    }, Cl = (m) => {
      G.debug && U("log", ["checkout init...", m]), m?.stockFilterEnabled && (localStorage.removeItem("inputs/inputStock"), o.inputStock.value = []), m?.parts && (m.parts = q(m.parts));
      let b;
      try {
        b = Sm(m);
      } catch (v) {
        U("error", v.message || "Invalid init data");
        return;
      }
      if (b.saw) {
        const v = b.saw;
        if (v.stockType !== void 0 && (Zs.includes(v.stockType) || console.warn(`${v.stockType} is not a valid stockType, expected ${Zs.join("|")}`), ye.stockType = v.stockType, v.stockType === "linear" && (ye.cutType = null, ye.cutPreference = null)), v.bladeWidth !== void 0) {
          const E = typeof v.bladeWidth == "string" ? parseFloat(v.bladeWidth) : v.bladeWidth;
          E >= 0 ? ye.bladeWidth = E : console.warn(`SmartCut - you provided an incorrect blade width of: ${v.bladeWidth}`);
        }
        if (v.cutType !== void 0 && (ye.cutType = v.cutType), v.cutPreference !== void 0 && (Zn.includes(v.cutPreference) ? ye.cutPreference = v.cutPreference : console.warn(`SmartCut - cut preference ${v.cutPreference || "N/A"} is not valid. Expected: ${Zn.join("|")}`)), v.guillotineOptions !== void 0 && typeof v.guillotineOptions == "object" && Object.assign(ye.guillotineOptions, v.guillotineOptions), v.stackHeight !== void 0) {
          const E = typeof v.stackHeight == "string" ? parseFloat(v.stackHeight) : v.stackHeight;
          ye.stackHeight = E;
        }
      }
      if (b?.options) {
        const v = b.options;
        il(v), b.saw ? (["stockType", "bladeWidth"].forEach((ke) => {
          ke in b.saw || U("error", `${ke} is a required saw property`);
        }), (b.saw.cutType === "guillotine" || b.saw.cutType === "beam") && !("cutPreference" in b.saw) && U("error", "cutPreference is a required saw property for guillotine and beam cut types")) : U("error", "saw configuration is required");
        const E = ["enable", "colors"];
        for (const ge in v)
          E.includes(ge) || (de[ge] = v[ge]), ge in Is && Is[ge](v[ge]);
      }
      if (b.options.colors && "colors" in Is && Is.colors(b.options.colors), b.banding) {
        const v = b.banding;
        "locations" in v && v.locations && (Fi.locations = v.locations), "groups" in v && v.groups && (Fi.groups = v.groups), "rules" in v && v.rules && (Fi.rules = v.rules);
      }
      if (b.finish) {
        const v = b.finish;
        "locations" in v && v.locations && ($i.locations = v.locations), "groups" in v && v.groups && ($i.groups = v.groups), "rules" in v && v.rules && ($i.rules = v.rules);
      }
      if (b.planing) {
        const v = b.planing;
        "locations" in v && v.locations && (Di.locations = v.locations), "groups" in v && v.groups && (Di.groups = v.groups), "rules" in v && v.rules && (Di.rules = v.rules);
      }
      b.partRules && (xs.value = b.partRules), Ln("banding", b), Ln("finish", b), Ln("planing", b), Ol(b), qa(b), ee.value = !0, G.debug && U("log", ["init complete"]);
      const I = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(I), mt(() => {
        _a.value && !Bl() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, wt = (m, b = !1) => {
      In.value[m] = b;
    }, ja = (m) => m ? ju(m)?.toLowerCase() : null, Al = (m, b, I) => {
      try {
        if (!m || !b) return;
        const v = I !== null && I !== "" && I !== void 0 && I !== 0;
        if (b === "material" && (!I || I === "")) {
          const ke = { material: null, t: null };
          ye.stockType === "linear" && (ke.w = null), N(m.autoId, ke) || (ti(m, "material", null), ti(m, "t", null), ye.stockType === "linear" && ti(m, "w", null), m.isNew || m.validate());
          return;
        }
        if (b === "material" && I && Z.value?.length) {
          const ke = Z.value.find((Ee) => Ee.name === I);
          if (ke) {
            const Ee = { material: I };
            if (m.t != null) {
              const Ge = K({ v: m.t });
              !ke.thicknesses.some(($n) => K({ v: $n }) === Ge) && ke.thicknesses.length > 0 && (Ee.t = K({ v: ke.thicknesses[0] }));
            }
            if (ye.stockType === "linear" && m.w != null && ke.widths) {
              const Ge = K({ v: m.w });
              !ke.widths.some(($n) => K({ v: $n }) === Ge) && ke.widths.length > 0 && (Ee.w = K({ v: ke.widths[0] }));
            }
            if (!N(m.autoId, Ee)) {
              for (const [Ge, qe] of Object.entries(Ee))
                ti(m, Ge, qe);
              m.isNew || m.validate();
            }
            return;
          }
        }
        if (m.isNew)
          if (v)
            m.isNew = !1;
          else {
            ti(m, b, I);
            return;
          }
        let E;
        if (b.includes(".")) {
          const ke = b.split("."), Ee = ke[0], it = ke.slice(1).join("."), qe = { ...m[Ee] || {} };
          ti(qe, it, I), E = { [Ee]: qe };
        } else
          E = { [b]: I };
        N(m.autoId, E) || (ti(m, b, I), m.validate()), b === "t" && ye.stockType === "linear" && Z.value?.length && m.material && mt(() => {
          const ke = Ga(m);
          if (ke.length > 0 && m.w != null) {
            const Ee = K({ v: m.w });
            if (!ke.some((Ge) => K({ v: Ge }) === Ee)) {
              const Ge = { w: K({ v: ke[0] }) };
              N(m.autoId, Ge) || (ti(m, "w", Ge.w), m.validate());
            }
          }
        }), ["l", "w", "t"].includes(b) && mt(() => {
          Ba(m);
        });
      } catch (v) {
        console.error("[CHECKOUT] Error updating field:", v);
      }
    }, Tl = () => {
    }, Ba = (m) => {
      if (xs.value && m && !m.isNew && !(!m.l && !m.w))
        try {
          const b = lm(m, xs.value);
          if (m.issues && (m.issues = m.issues.filter((I) => !(I.category?.includes("part") && I.identifier === "part-validation-rules"))), !b.valid && b.violations.length > 0)
            for (const I of b.violations) {
              const v = um(I);
              new ue({
                item: m,
                type: "error",
                category: ["part"],
                message: v,
                shouldTranslate: !1,
                issues: m.issues || []
              });
            }
        } catch (b) {
          console.error("[CHECKOUT] Error validating part:", b);
        }
    }, Ol = (m) => {
      if (gi(de, ["enable", "machining"]) && m?.machining) {
        for (const b in Pt)
          m.machining[b] && (Pt[b] = m.machining[b]);
        if (["holes", "hingeHoles"].forEach((b) => {
          m?.machining?.[b] && (Pt[b].enabled = m?.machining?.[b].enabled);
        }), m?.machining?.corners?.types?.length && (Pt.corners.enabled = !0, Pt.corners.types = m.machining.corners.types), m.banding && m?.options?.enable?.banding) {
          if (!_e) return;
          Pt.banding = {
            enabled: !0
          }, _e.options.length && (Pt.banding.options = _e.options), _e.labels.length && (Pt.banding.labels = _e.labels), rr(_e.pricing) && (Pt.banding.pricing = _e.pricing);
        }
      }
    }, Ll = (m = null) => {
      lt.value = m, m && Le(m) && m.l && m.w ? ne.value = !0 : alert(H("machining.enter_dimensions_first"));
    }, Fl = () => {
      ne.value = !1;
    }, Va = (m = []) => {
      if (be.value = [], Ce.value = [], wt("t", !1), !!m.length) {
        for (const b of m)
          if (b?.t)
            if (typeof b.t == "string" && b.t.includes(",")) {
              const I = za(b.t, !0);
              I.length === 2 ? (Dl(I), wt("t", !0), b.t = be.value[0]) : U("error", "bonded thickness found which does not have 2 options");
            } else be.value.includes(b.t) || be.value.push(b.t);
        be.value.length > 1 && wt("t", !0);
      }
    }, Na = (m = []) => {
      if (Te.value = [], !m.length) {
        wt("w", !1);
        return;
      }
      for (const b of m) {
        if (!b?.w) continue;
        const I = K({ v: b.w });
        Te.value.includes(I) || Te.value.push(I);
      }
      Te.value.length >= 1 ? wt("w", !0) : wt("w", !1);
    }, $l = (m) => {
      if (!m) return { thicknesses: [], bondedThicknesses: [] };
      if (!Z.value?.length)
        return {
          thicknesses: be.value,
          bondedThicknesses: []
        };
      if (!m.material)
        return {
          thicknesses: be.value,
          bondedThicknesses: []
        };
      const b = Z.value.find((E) => E.name === m.material);
      if (!b)
        return {
          thicknesses: be.value,
          bondedThicknesses: []
        };
      const I = [...b.thicknesses], v = [];
      for (let E = 0; E < I.length; E++) {
        const ge = I[E], ke = za(ge), Ee = [];
        if (ke.length) {
          for (const it of ke)
            I[E] = it, Ee.push(E);
          E++;
        }
        Ee.length && v.push(Ee);
      }
      return {
        thicknesses: I,
        bondedThicknesses: v
      };
    }, Ga = (m) => {
      if (!m) return [];
      if (!Z.value?.length || !m.material)
        return Te.value;
      const b = Z.value.find((I) => I.name === m.material);
      if (!b)
        return Te.value;
      if (m.t != null && o.inputStock?.value?.length) {
        const I = K({ v: m.t }), v = /* @__PURE__ */ new Set();
        for (const E of o.inputStock.value)
          E.material?.toUpperCase() === m.material && K({ v: E.t }) === I && E.w != null && v.add(K({ v: E.w }));
        if (v.size > 0)
          return Array.from(v).sort((E, ge) => E - ge);
      }
      return b.widths || Te.value;
    }, qa = (m) => {
      if (m?.stock?.some((b) => b?.material)) {
        Z.value = [], be.value = [], Ce.value = [];
        const b = /* @__PURE__ */ new Map();
        for (const v of m.stock) {
          if (!v.material) continue;
          const E = v.material.toUpperCase();
          b.has(E) || b.set(E, { thicknesses: /* @__PURE__ */ new Set(), widths: /* @__PURE__ */ new Set() }), v.t != null && b.get(E)?.thicknesses.add(K({ v: v.t })), ye.stockType === "linear" && v.w != null && b.get(E)?.widths.add(K({ v: v.w }));
        }
        Z.value = Array.from(b.entries()).map(([v, E]) => {
          const ge = {
            name: v,
            thicknesses: Array.from(E.thicknesses).sort((ke, Ee) => ke - Ee)
          };
          return ye.stockType === "linear" && E.widths.size > 0 && (ge.widths = Array.from(E.widths).sort((ke, Ee) => ke - Ee)), ge;
        });
        const I = /* @__PURE__ */ new Set();
        for (const v of Z.value)
          for (const E of v.thicknesses)
            I.add(K({ v: E }));
        if (be.value = Array.from(I).sort((v, E) => v - E), ye.stockType === "linear") {
          const v = /* @__PURE__ */ new Set();
          for (const E of Z.value)
            if (E.widths)
              for (const ge of E.widths)
                v.add(K({ v: ge }));
          Te.value = Array.from(v).sort((E, ge) => E - ge);
        }
        Z.value.length > 1 ? wt("material", !0) : wt("material", !1), be.value.length > 1 ? wt("t", !0) : wt("t", !1), ye.stockType === "linear" && Te.value.length > 1 ? wt("w", !0) : ye.stockType === "linear" && wt("w", !1);
      } else
        Va(m.stock);
      ye.stockType === "linear" && !Z.value?.length && Na(m.stock);
    }, Dl = (m, b = null) => {
      if (!Array.isArray(m)) {
        U("error", "addBondedThicknesses expects an array");
        return;
      }
      const I = [];
      for (let v of m)
        de.numberFormat === "decimal" && (v = parseFloat(v)), be.value.push(v), b && b.thicknesses.push(v), I.push(be.value.length - 1);
      Ce.value.push(I);
    }, El = (m) => {
      const { thicknesses: b } = $l(m);
      return b?.length ? b.map((I) => ({
        label: I?.toString(),
        value: I
      })) : [];
    }, Ml = (m) => {
      const b = Ga(m);
      return b?.length ? b.map((I) => ({
        label: I?.toString(),
        value: I
      })) : [];
    }, za = (m, b = !1) => {
      if (typeof m == "string" && m.includes(",")) {
        const I = m.split(",");
        return b ? I.map((v) => K({ v })) : I;
      }
      return [];
    }, Rl = () => {
      kt.value ? jl() : _l();
    }, _l = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), kt.value = !0;
    }, jl = () => {
      document.exitFullscreen && document.exitFullscreen(), kt.value = !1;
    }, Bl = () => {
      if (xe.value?.api?.whiteLabel) return !0;
      let m = !0;
      const b = document.querySelector("#smartcut-checkout a#credit");
      if (!b) return m = !1;
      const I = window.getComputedStyle(b);
      return I.display === "none" || I.display === "hidden" || I.opacity === "0" || I.color === "transparent" || I.position !== "absolute" || I.color !== "#4e4e4e" && I.color !== "rgb(78, 78, 78)" ? m = !1 : (Ve.value = m, m);
    }, Pn = ie(() => typeof G.findExtrasPrice == "function"), Wa = (m, b) => {
      let I, v;
      switch (b) {
        case "banding":
          I = _e.options, v = _e.labels;
          break;
        case "finish":
          I = Ze.options, v = Ze.labels;
          break;
        case "planing":
          I = tt.options, v = tt.labels;
          break;
        default:
          I = [], v = [];
      }
      Ii(m, b, I, v);
    }, Ha = (m) => {
      const b = Object.keys(m);
      return Math.max(...b.map((v) => v.split("|").length));
    }, is = (m, b, I) => {
      if (!m)
        return [];
      if (I > 0 && !b[I - 1])
        return [];
      const v = /* @__PURE__ */ new Set();
      for (const ge of Object.keys(m)) {
        const ke = ge.split("|");
        if (ke.length > I) {
          let Ee = !0;
          for (let it = 0; it < I; it++) {
            const Ge = b[it], qe = ke[it];
            if (Ge && Ge !== qe) {
              Ee = !1;
              break;
            }
          }
          Ee && v.add(ke[I]);
        }
      }
      return Array.from(v);
    }, Cn = (m, b, I, v) => {
      let E, ge;
      switch (b) {
        case "banding":
          E = _e.options, ge = _e.labels;
          break;
        case "finish":
          E = Ze.options, ge = Ze.labels;
          break;
        case "planing":
          E = tt.options, ge = tt.labels;
          break;
        default:
          E = [], ge = [];
      }
      return Bn(m, b, I, v, E, ge);
    }, Vl = (m, b, I) => {
      let v, E;
      switch (b) {
        case "banding":
          v = _e.options, E = _e.labels;
          break;
        case "finish":
          v = Ze.options, E = Ze.labels;
          break;
        case "planing":
          v = tt.options, E = tt.labels;
          break;
        default:
          v = [], E = [];
      }
      return Bn(m, b, I, G.findExtrasPrice, v, E);
    }, Nl = oe({}), An = (m = 1) => {
      for (let b = m; b--; ) {
        let I = {
          l: null,
          w: ye.stockType === "linear" && Te.value.length === 1 ? Te.value[0] : null,
          t: be.value.length ? be.value[0] : null,
          q: 1,
          material: Z.value?.length === 1 ? Z.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (o.inputShapes.value.length > 0) {
          const E = o.inputShapes.value[o.inputShapes.value.length - 1];
          I.material = E.material, I.t = E.t, ye.stockType === "linear" && E.w && (I.w = E.w);
        }
        const v = g(I);
        v && (_e?.labels?.length && Ii(v, "banding", _e.options, _e.labels), Ze?.labels?.length && Ii(v, "finish", Ze.options, Ze.labels), tt?.labels?.length && Ii(v, "planing", tt.options, tt.labels));
      }
    }, Tn = (m = {}) => {
      const b = {
        q: 1,
        // Always set quantity to 1
        ...m
      }, I = g(b);
      return I && (ye.stockType === "linear" && Te.value.length === 1 && !I.w && (I.w = Te.value[0]), be.value.length && !I.t && (I.t = be.value[0]), Z.value?.length === 1 && !I.material && (I.material = Z.value[0].name), _e?.labels?.length && Ii(I, "banding", _e.options, _e.labels), Ze?.labels?.length && Ii(I, "finish", Ze.options, Ze.labels), tt?.labels?.length && Ii(I, "planing", tt.options, tt.labels)), I;
    }, Gl = (m) => {
      if (be.value.length)
        for (const b of m) {
          if (!b.t) return;
          const I = be.value.findIndex(
            (ge) => K({ v: ge }) === b.t
          ), v = Ce.value.find((ge) => ge.includes(I));
          if (!v) return;
          const E = Math.min(
            ...v.map((ge) => be.value[ge])
          );
          K({ v: b.t }) > E && (b.q = Number(b.q) * (K({ v: b.t }) / E), b.notes = `Bond to form ${b.t.valueOf()}`, b.t = E);
        }
    }, Ua = () => {
      J(), W(null), x.stockList.value = [], x.shapeList.value = [], x.cutList.value = [];
    }, On = () => {
      o.inputShapes.value.length = 0, G.inputType !== "formula" && mt(() => An());
    }, ql = async () => {
      if (U("calculating"), Me.value) return !1;
      Me.value = !0, vt.value = !1;
      const m = await Xg({
        t: H,
        partTrim: de.partTrim,
        maxShapes: de.maxParts || 1e3,
        maxStock: 1 / 0,
        // CheckoutCalculator doesn't have stock limits
        inputSaw: o.inputSaw.value,
        // Extras validation data
        bandingPricing: _e.pricing,
        finishPricing: Ze.pricing,
        planingPricing: tt.pricing,
        findExtrasPrice: G.findExtrasPrice,
        extrasValidationRules: xl.value,
        onLimit: () => {
          j({
            type: "error",
            message: H("limits.max_parts") + " " + de.maxParts
          });
        }
      });
      if (xs.value)
        for (const E of o.inputShapes.value)
          Ba(E);
      const b = o.inputShapes.value.flatMap((E) => E.issues || []).filter((E) => E.type === "error" && E.category?.includes("part"));
      if (b.length > 0) {
        j({
          type: "error",
          message: H("errors.validation.inputs_issue", { 0: "part" }),
          additional: b.map((E) => E.message)
        }), U("validation-error"), Me.value = !1;
        return;
      }
      if (!m.valid) {
        U("validation-error"), Me.value = !1;
        return;
      }
      Ua();
      const I = o.inputShapes.value.map((E) => M(E)).filter(Boolean);
      if (I.length !== o.inputShapes.value.length)
        return j({
          type: "error",
          message: "Some parts have validation errors and cannot be processed",
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), Me.value = !1, !1;
      Gl(I), G.debug && console.log(
        "SmartCut - calculating",
        "stock",
        o.inputStock.value.map((E) => ({ l: E.l, w: E.w })),
        "parts",
        I.map((E) => ({ l: E.l, w: E.w }))
      );
      const v = {
        inputSaw: o.inputSaw.value.toData(),
        inputShapes: I.map((E) => E.toData()),
        inputStock: o.inputStock.value.map((E) => E.toData()),
        inputUserGroups: [],
        enableEvo: !0,
        useInventory: !1,
        domain: $e,
        extrasOptions: D(),
        source: "checkout",
        sourceVersion: "4.0.72"
      };
      await fe.connect(), fe.emit("calculate", v);
    }, Ln = (m, b) => {
      if (wt(m, !1), !m || !b || !b?.[m] || !gi(de, ["enable", m]))
        return;
      const I = [m, "pricing"];
      if (!ar(b, I)) {
        U("error", `${I.join(".")} not found in sent data`);
        return;
      }
      const v = gi(b, I);
      if (typeof v != "object") {
        U("error", `${I.join(".")} data must be an object`);
        return;
      }
      if (!rr(v)) {
        U("error", `if provided, ${I.join(".")} data must contain some values`);
        return;
      }
      const E = Object.keys(v), ge = Object.values(v);
      if (!E.length) {
        U("error", `no ${I.join(".")} pricing found`);
        return;
      }
      const ke = /,/;
      for (const qe of E)
        if (ke.test(qe)) {
          U("error", `${I} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (ge.some((qe) => isNaN(qe))) {
        U("error", `${I} values must be a number`);
        return;
      }
      const Ee = Ha(v), it = [m, "labels"];
      let Ge = [];
      if (ar(b, it))
        Ge = gi(b, it);
      else {
        U("error", `${it.join(".")} not found`);
        return;
      }
      if (!Ge) {
        U("error", `${it.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(Ge)) {
        U("error", `${it.join(".")} data must be an array`);
        return;
      }
      if (!Ge?.length) {
        U("error", `if provided, ${it.join(".")} data must contain values`);
        return;
      }
      if (Ge.length !== Ee) {
        U("error", `${it.join(".")} length (${Ge.length}) must match the number of levels in ${I.join(".")} (${Ee})`);
        return;
      }
      switch (m) {
        case "banding": {
          _e.labels = Ge, _e.pricing = v;
          const qe = Fn(v);
          _e.options = qe, C("banding", qe, Ge, v);
          break;
        }
        case "finish": {
          Ze.labels = Ge, Ze.pricing = v;
          const qe = Fn(v);
          Ze.options = qe, C("finish", qe, Ge, v);
          break;
        }
        case "planing": {
          tt.labels = Ge, tt.pricing = v;
          const qe = Fn(v);
          tt.options = qe, C("planing", qe, Ge, v);
          break;
        }
      }
      if (Ma.value = D(), wt(m, !0), !!o.inputShapes.value?.length)
        for (const qe of o.inputShapes.value)
          Wa(qe, m);
    }, Fn = (m) => {
      const b = [], I = Object.keys(m), v = Ha(m);
      for (let E = v; E--; ) b.push(/* @__PURE__ */ new Set());
      for (const E of I)
        E.split("|").forEach((ke, Ee) => b[Ee].add(ke));
      for (let E = 0; E < v; E++)
        b[E] = Array.from(b[E]);
      return b;
    }, Ps = (m, b) => {
      if (!b) return;
      m !== "info" && Object.keys(X).forEach((v) => {
        v !== m && v !== "info" && (X[v] = null);
      });
      const I = o.inputShapes.value.indexOf(b);
      X[m] === I ? (lt.value = null, X[m] = null, Nl.value[m] = void 0) : (lt.value = b, X[m] = I);
    }, Ya = (m) => {
      if (U("log", ["load event received"]), !ee.value) {
        U("log", ["load event received"]);
        return;
      }
      zl(m.detail);
    }, zl = (m) => {
      if (U("log", ["loading parts..."]), !m || !m?.inputs?.parts?.length) {
        U("log", ["could not find any parts to import"]);
        return;
      }
      o.inputShapes.value.length = 0;
      let b = 0;
      for (const v of m.inputs.parts) {
        const E = Tn(v);
        E ? E.issues?.length && U("log", [`SmartCut - issues found while importing part at index ${b}`, E.issues]) : U("log", [`SmartCut - error loading part at index ${b}`, v]), b++;
      }
      o.inputShapes.value.flatMap((v) => wo(v.issues)).length && j({
        type: "error",
        message: H("errors.general.issues_found")
      }), U("log", [`loaded ${o.inputShapes.value.length} parts`]);
    }, Wl = (m) => {
      o.inputShapes.value.length = 0, mt(() => {
        for (const b of m)
          b.t = o.inputStock.value?.[0]?.t ?? null, ye.stockType === "linear" && Te.value.length === 1 && !b.w && (b.w = Te.value[0]), Tn(b);
      });
    };
    He(() => G.inputStock, (m) => {
      if (Ua(), Array.isArray(m) || console.warn("SmartCut - stock must be passed as an array"), !!m?.length) {
        o.inputStock.value.length = 0, Z.value.length || Va(m.map((b) => b.toData()));
        for (const b of m)
          k({
            ...b.toData(),
            autoAdd: !0
          }) || (console.error("Failed to add stock item:", b), j({
            type: "error",
            message: "Failed to add some stock items due to validation errors"
          }));
        if (o.inputStock.value.length) {
          o.inputShapes.value.length ? mt(() => {
            o.inputShapes.value.forEach((I) => {
              const v = I.material ? Z.value.find((E) => E.name === I.material) : null;
              if (v)
                v.thicknesses.includes(K({ v: I.t })) || (I.t = K({ v: v.thicknesses[0] }));
              else if (Z.value?.length === 1) {
                I.material = Z.value[0].name;
                const E = Z.value[0];
                E.thicknesses.includes(K({ v: I.t })) || (I.t = K({ v: E.thicknesses[0] }));
              } else if (Z.value?.length > 1 && I.t) {
                const E = Z.value.find((ge) => ge.thicknesses.some((ke) => K({ v: ke }) === K({ v: I.t })));
                E ? I.material = E.name : (I.material = Z.value[0].name, I.t = K({ v: Z.value[0].thicknesses[0] }));
              } else Z.value?.length > 1 ? (I.material = Z.value[0].name, I.t = K({ v: Z.value[0].thicknesses[0] })) : !I.t && o.inputStock.value[0]?.t && (I.t = K({ v: o.inputStock.value[0].t }));
            });
          }) : G.inputType !== "formula" && mt(() => An());
          const b = d(o.inputSaw.value);
          b.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(b))), j({
            type: "error",
            message: H("errors.validation.stock_issue"),
            additional: b.map((I) => I.message)
          }));
        }
      }
    }, { immediate: !0 }), He(o.inputShapes, (m) => {
      U("inputs-changed"), m.forEach((b) => {
        ye.stockType === "linear" && Te.value.length && (!b.w || !Te.value.includes(K({ v: b.w }))) && (b.w = Te.value[0]);
        const I = Z.value.find((v) => v.name === b.material);
        I && (I.thicknesses.includes(K({ v: b.t })) || (b.t = K({ v: I.thicknesses[0] })));
      });
    }, { deep: !0 }), He(() => de.numberFormat, (m) => {
      u(m);
    }), He(o.inputStock, (m) => {
      ye.stockType === "linear" && Na(m.map((b) => b.toData()));
    }, { deep: !0 }), He(() => ye, (m) => {
      o.inputSaw.value = new si(m);
    }, { deep: !0 }), Jt(async () => {
      if (et.value) return;
      et.value = !0;
      const m = new URL(window.location.href), b = m.searchParams.toString(), I = m.origin + m.pathname + (b ? `?${b}` : "");
      ot.value !== I && On(), ot.value = I, me.value = de.locale, await fe.connect(), fe.emit("getUserFromDomain"), window.addEventListener("smartcut/load", Ya), G.debug && U("log", [
        "ready...",
        "fields:",
        es.value.map((v) => v.name)
      ]);
    });
    const Hl = () => {
      fe && fe.disconnect();
    };
    return bs(() => {
      window.removeEventListener("smartcut/load", Ya), Hl(), delete window.smartcutCheckout;
    }), e({
      init: Cl,
      clear: On,
      getAvailablePricingOptions: is,
      getExtrasPrice: Vl,
      formatPrice: G.formatPrice,
      findExtrasPrice: G.findExtrasPrice,
      inputShapes: o.inputShapes,
      initExtrasOptions: Wa,
      createAndAddInputShape: Tn,
      initMaterialsThicknesses: qa
    }), (m, b) => {
      const I = xi("FontAwesomeIcon");
      return w(), F("div", Ym, [
        ee.value ? se("", !0) : (w(), De(Er, {
          key: 0,
          size: 50,
          "show-number": !1
        })),
        lt.value?.machining && ne.value ? (w(), De(A(n), {
          key: 1,
          "input-shape": lt.value,
          "onUpdate:inputShape": b[0] || (b[0] = (v) => lt.value = v),
          translate: !0,
          options: Pt,
          "find-extras-price": t.findExtrasPrice,
          "get-extras-price": A(Bn),
          "get-available-pricing-options": is,
          "format-price": t.formatPrice,
          onClose: Fl
        }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price"])) : se("", !0),
        ee.value ? (w(), F("section", {
          key: 2,
          id: "smartcut-checkout",
          class: je(["smartcut-content", { fullscreen: kt.value }])
        }, [
          Qi.value && !t.readonly ? (w(), F("button", {
            key: 0,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            style: ut(ks.value),
            onClick: b[1] || (b[1] = (v) => Rl())
          }, [
            We(I, { icon: ["fass", "expand"] }),
            ds(" " + re(A(H)("general.full_screen")), 1)
          ], 4)) : se("", !0),
          _a.value ? (w(), F("a", {
            key: 1,
            id: "credit",
            style: Pl,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, re(A(Eu)(A(H)("general.powered_by"))), 1)) : se("", !0),
          $("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: ut({ "grid-template-columns": kl.value })
          }, [
            A(o).inputShapes.value.length ? (w(), F("div", Km, [
              b[6] || (b[6] = $("div", { class: "cell id" }, null, -1)),
              (w(!0), F(Be, null, Ke(es.value, (v) => (w(), F("div", {
                key: v.name,
                class: je(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(v.name) || v.type === "boolean" }])
              }, re(A(H)(v.label)), 3))), 128)),
              A(Se) === "development" && Wn ? (w(), F("div", Zm, " Info ")) : se("", !0),
              b[7] || (b[7] = $("div", { class: "cell del" }, null, -1))
            ])) : se("", !0),
            (w(!0), F(Be, null, Ke(V.value, (v, E) => (w(), F("div", {
              key: E,
              class: "row inputs"
            }, [
              $("div", Jm, [
                $("div", {
                  class: "id",
                  style: ut({
                    background: de.colors.partA,
                    color: de.colors.text
                  })
                }, re(E + 1), 5)
              ]),
              (w(!0), F(Be, null, Ke(es.value, (ge) => (w(), F("div", {
                key: ge.name,
                class: "cell"
              }, [
                v ? (w(), De(Um, {
                  key: 0,
                  field: ge,
                  item: v,
                  index: E,
                  "type-prefix": "part",
                  readonly: t.readonly,
                  "number-format": de.numberFormat,
                  "orientation-model": de.orientationModel,
                  "stock-grain": A(c)(v),
                  "material-options": Z.value?.map((ke) => ({ label: ke.name, value: ke.name })) || [],
                  "thickness-options": ge.name === "t" ? El(v) : [],
                  "width-options": ge.name === "w" && ye.stockType === "linear" ? Ml(v) : [],
                  "banding-enabled": X.banding === E ? v : null,
                  onUpdate: (ke) => Al(v, ge.propertyPath || ge.fieldMap || ge.name, ke),
                  onValidation: b[2] || (b[2] = (ke, Ee) => Tl()),
                  onOpenBanding: (ke) => Ps("banding", v),
                  onOpenMachining: (ke) => Ll(v),
                  onOpenFinish: (ke) => Ps("finish", v),
                  onOpenPlaning: (ke) => Ps("planing", v)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "orientation-model", "stock-grain", "material-options", "thickness-options", "width-options", "banding-enabled", "onUpdate", "onOpenBanding", "onOpenMachining", "onOpenFinish", "onOpenPlaning"])) : se("", !0)
              ]))), 128)),
              A(Se) === "development" && Wn ? (w(), F("div", Xm, [
                $("button", {
                  class: je(["c-btn", { selected: X.info === E }]),
                  style: ut(ks.value),
                  type: "button",
                  onClick: (ge) => Ps("info", v)
                }, " i ", 14, Qm)
              ])) : se("", !0),
              $("div", ey, [
                $("button", {
                  disabled: A(o).inputShapes.value.length <= 1,
                  type: "button",
                  class: "delete",
                  "aria-label": `${A(H)("actions.remove")} ${A(Mu)(A(H)("woodwork.part"))}`,
                  onClick: (ge) => A(h)(v.autoId)
                }, [
                  We(I, { icon: ["fass", "trash"] })
                ], 8, ty)
              ]),
              We(A(s), {
                item: v,
                "num-columns": ts.value
              }, null, 8, ["item", "num-columns"]),
              X.banding === E && _e.options.length > 0 && Pn.value ? (w(), De(qs, {
                key: 1,
                shape: v,
                "shape-index": E,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": _e.keys,
                "all-options": _e.options,
                pricing: _e.pricing,
                labels: _e.labels,
                locations: Fi.locations,
                "location-groups": Fi.groups,
                "user-friendly-field-map": A(Yt),
                "part-columns": ts.value,
                "format-price": t.formatPrice,
                "find-extras-price": G.findExtrasPrice,
                "get-price": Cn,
                "orientation-model": de.orientationModel,
                "get-available-pricing-options": is,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : se("", !0),
              X.finish === E && Ze.options.length > 0 && Pn.value ? (w(), De(qs, {
                key: 2,
                shape: v,
                "shape-index": E,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": Ze.keys,
                "all-options": Ze.options,
                pricing: Ze.pricing,
                labels: Ze.labels,
                locations: $i.locations,
                "location-groups": $i.groups,
                "user-friendly-field-map": A(Yt),
                "part-columns": ts.value,
                "format-price": t.formatPrice,
                "find-extras-price": G.findExtrasPrice,
                "get-price": Cn,
                "orientation-model": de.orientationModel,
                "get-available-pricing-options": is,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : se("", !0),
              X.planing === E && tt.options.length > 0 && Pn.value && !0 ? (w(), De(qs, {
                key: 3,
                shape: v,
                "shape-index": E,
                "extra-type": "planing",
                "extra-label": "planing",
                "extra-keys": tt.keys,
                "all-options": tt.options,
                pricing: tt.pricing,
                labels: tt.labels,
                locations: Di.locations,
                "location-groups": Di.groups,
                "user-friendly-field-map": A(Yt),
                "part-columns": ts.value,
                "format-price": t.formatPrice,
                "find-extras-price": G.findExtrasPrice,
                "get-price": Cn,
                "orientation-model": de.orientationModel,
                "get-available-pricing-options": is,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : se("", !0),
              X.info === E ? (w(), F("div", {
                key: 4,
                id: "shape-info",
                style: ut({ "grid-column-end": "span " + ts.value })
              }, [
                $("div", null, re(v?.banding), 1),
                $("div", null, re(Ma.value?.banding?.options || "No options"), 1)
              ], 4)) : se("", !0)
            ]))), 128))
          ], 4),
          $("div", iy, [
            t.readonly ? se("", !0) : (w(), F("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${A(H)("actions.add")} ${A(H)("woodwork.part")}`,
              style: ut(ks.value),
              onClick: b[3] || (b[3] = (v) => An())
            }, [
              We(I, { icon: ["fass", "plus-large"] }),
              ds(" " + re(`${A(H)("actions.add")} ${A(H)("woodwork.part")}`), 1)
            ], 12, sy)),
            $("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": A(H)("actions.calculate"),
              style: ut(ks.value),
              disabled: !A(o).inputStock.value?.length || Me.value,
              onClick: b[4] || (b[4] = (v) => ql())
            }, [
              We(I, { icon: ["fass", "calculator"] }),
              ds(re(A(H)("actions.calculate")), 1)
            ], 12, ny),
            t.readonly ? se("", !0) : (w(), F("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": A(H)("actions.clear"),
              onClick: b[5] || (b[5] = (v) => On())
            }, [
              We(I, { icon: ["fass", "trash"] })
            ], 8, ay)),
            $("div", ry, re(A(l)) + re(de?.maxParts ? "/" + de.maxParts : ""), 1)
          ]),
          gt.value && !t.readonly ? (w(), De(A(a), {
            key: 2,
            ref: "import",
            "number-format": de.numberFormat,
            "custom-fields": kn.value,
            "banding-options": _e.options,
            "banding-labels": _e.labels,
            "finish-options": Ze.options,
            "finish-labels": Ze.labels,
            onImport: Wl
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : se("", !0),
          P.value ? (w(), F("div", oy, [
            O.value ? (w(), F("div", ly, re(O.value), 1)) : se("", !0),
            $("pre", cy, re(S.value), 1)
          ])) : se("", !0),
          (de.enable.diagram ? Me.value && !A(te).complete : Me.value || A(te).complete) ? (w(), F("div", uy, [
            We(Er, {
              size: 50,
              number: A(te).shapeCount,
              complete: A(te).complete,
              "show-number": de.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : se("", !0),
          ys($("div", dy, [
            A(y)?.saw?.stockType !== "roll" ? (w(), F("div", fy, re(A(y)?.stack?.number ? A(y).stack.number : 1), 1)) : se("", !0),
            We(gg, {
              "element-id": "diagram",
              "number-format": de.numberFormat,
              "decimal-places": de.decimalPlaces,
              colors: de.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [on, de.enable.diagram && A(te).complete]
          ]),
          de.enable.diagram && A(Y).length > 1 && A(te).complete ? (w(), De($p, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-auto-id": A(z),
            "stock-list": A(Y),
            onShowStock: A(W)
          }, null, 8, ["active-stock-auto-id", "stock-list", "onShowStock"])) : se("", !0)
        ], 2)) : se("", !0),
        A(Se) === "development" && Wn ? (w(), F("div", hy, [
          We(A(r), {
            data: [A(o)?.inputShapes?.value?.[0]],
            paths: ["inputShapes"]
          }, null, 8, ["data"]),
          b[8] || (b[8] = $("div", null, "Result data", -1)),
          We(A(r), {
            data: [Xe.value?.metadata],
            paths: ["checkoutResult.metadata"]
          }, null, 8, ["data"])
        ])) : se("", !0)
      ]);
    };
  }
}), eS = /* @__PURE__ */ Dt(py, [["__scopeId", "data-v-2ac6c896"]]), vl = Ae(["select", "multiselect", "range", "boolean", "search"]), wl = Ae(["asc", "desc"]), Sl = Ae(["grid", "list"]), gy = B({
  // Visual (Note: color, weight, imageUrl, tags, available are now in InputStock base schema)
  name: p().optional().describe("User-friendly display name"),
  description: p().optional().describe("Detailed description"),
  // Categorization
  supplier: p().optional().describe("Supplier name"),
  category: p().optional().describe("Stock category"),
  // UI metadata
  leadTime: f().int().optional().describe("Lead time in days"),
  minQuantity: f().int().positive().optional().describe("Minimum order quantity")
});
Kt.merge(gy).describe("Stock option with filtering and display metadata");
const my = B({
  field: p().describe("Property name to filter on"),
  type: vl,
  label: p().describe("Display label"),
  custom: R().default(!1).describe("Whether this is a custom property"),
  // Range filter options
  min: f().optional().describe("Minimum value for range filter"),
  max: f().optional().describe("Maximum value for range filter"),
  step: f().optional().describe("Step size for range filter"),
  // Select filter options
  options: ae(B({
    label: p(),
    value: we()
  })).optional().describe("Predefined options for select filters"),
  // Display options
  visible: R().default(!0).describe("Whether filter is visible"),
  collapsible: R().default(!0).describe("Whether filter panel is collapsible"),
  order: f().int().optional().describe("Display order")
}), yy = B({
  field: p().describe("Field to sort by"),
  order: wl,
  label: p().optional().describe("Display label for sort option")
}), by = B({
  // Filter configuration
  availableFilters: ae(my).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: ae(p()).default(["cost", "material", "t"]).describe("Sortable fields"),
  defaultSort: yy.default({
    field: "cost",
    order: "asc"
  }).describe("Default sort configuration"),
  // Display configuration
  displayMode: Sl.default("grid").describe("Default display mode"),
  itemsPerPage: f().int().positive().default(20).describe("Items per page for pagination"),
  // Feature toggles
  enableSearch: R().default(!0).describe("Enable search functionality"),
  // Selection behavior
  allowMultipleSelection: R().default(!0).describe("Allow multiple stock selection"),
  maxSelection: f().int().positive().optional().describe("Maximum number of stock items to select")
}), vy = B({
  field: p(),
  value: we(),
  type: vl
});
B({
  // Active filters
  activeFilters: ae(vy).default([]).describe("Currently active filters"),
  // Search
  searchQuery: p().default("").describe("Current search query"),
  // Sort
  sortBy: p().default("cost").describe("Current sort field"),
  sortOrder: wl.default("asc").describe("Current sort order"),
  // Display
  displayMode: Sl.default("grid").describe("Current display mode"),
  currentPage: f().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: ae(p()).default([]).describe("IDs of selected stock items")
});
function wy() {
  return by.parse({});
}
const Sy = /* @__PURE__ */ Ue({
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
    return (i, s) => (w(), F(Be, null, [
      e.item.issues?.filter((n) => n.type === "error")?.length ? (w(), F("div", {
        key: 0,
        class: "group issues",
        style: ut({
          "grid-column-end": "span " + e.numColumns
        })
      }, [
        $("pre", null, re(e.item.issues.filter((n) => n.type === "error").flatMap((n) => A(Yi)(n.message)).join(`
`)), 1)
      ], 4)) : se("", !0),
      e.item.issues?.filter((n) => n.type === "warning")?.length ? (w(), F("div", {
        key: 1,
        class: "group warnings",
        style: ut({
          "grid-column-end": "span " + e.numColumns
        })
      }, [
        $("pre", null, re(e.item.issues.filter((n) => n.type === "warning").flatMap((n) => A(Yi)(n.message)).join(`
`)), 1)
      ], 4)) : se("", !0)
    ], 64));
  }
}), xy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Sy }, Symbol.toStringTag, { value: "Module" })), St = {
  precisionFixed: jc,
  format: _c,
  select: ht,
  selectAll: zr,
  scaleLinear: Rt,
  scaleSequential: fs,
  axisTop: Gr,
  axisBottom: Us,
  axisRight: qr,
  axisLeft: Ys,
  symbol: Rc,
  path: Mc,
  arc: Ec,
  symbolTriangle: Dc,
  symbolSquare: $c
};
class ky {
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
  xScale = St.scaleLinear();
  yScale = St.scaleLinear();
  yScaleFlipped = St.scaleLinear();
  measurementScale = St.scaleLinear();
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
      if (this.el = St.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = St.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.longSide, this.shapeW = this.shape.shortSide, !this.svgCanvas)
        if (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null) {
          const e = this.el.append("svg").attr("class", "vis").attr("width", "100%").attr("height", "100%");
          if (e === null) return;
          this.svgCanvas = e;
        } else
          this.svgCanvas = St.select(this.svgCanvas);
      this.loaded = !0;
    }
  }
  create() {
    if (!this.shape) return !1;
    const e = this.shouldShowAxes(), i = e ? this.edgePadding : 0, s = e ? this.edgePadding : 0, n = e ? this.axisPadding : 0, a = e ? this.axisPadding : 0;
    if (!this.shape.l || !this.shape.w || !this.w || !this.h || this.w - (i + n) < 0 || this.h - (a + s) < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createBanding(), e && (this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${a})`).attr("class", "axis x"), this.xAxis.call(
      St.axisTop(this.xScale).ticks(10).tickSize(-this.h + (a + s))
    ), this.svgCanvas.selectAll(".axis.x .tick").each(function(r, o, l) {
      (o === 0 || o === l.length - 1) && St.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - n}, 0)`).attr("class", "axis y"), this.yAxis.call(
      St.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (i + n))
    ), this.svgCanvas.selectAll(".axis.y .tick").each(function(r, o, l) {
      (o === 0 || o === l.length - 1) && St.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px"), console.log("Axes created:", { xAxis: !!this.xAxis, yAxis: !!this.yAxis })), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(e, i) {
    this.pointGroup.append("circle").attr("cx", this.xScale(e)).attr("cy", this.getYScale()(i)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    const e = this.shouldShowAxes(), i = e ? this.edgePadding : 0, s = e ? this.edgePadding : 0, n = e ? this.axisPadding : 0, a = e ? this.axisPadding : 0;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", i).attr("y", a).attr("width", this.w - (i + n)).attr("height", this.h - (a + s)), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", i).attr("y", a).attr("width", this.w - (i + n)).attr("height", this.h - (a + s)).style("fill", "url(#stripes)");
    const r = St.path(), o = [], l = [];
    [0, 1, 2, 3].forEach((u) => {
      const d = this.shape.machining.getCorner(u);
      d && d.type ? (o.push(d.size ? K({ v: d.size ?? 0, o: this }) : 0), l.push(d.type)) : (o.push(0), l.push(null));
    });
    const c = (u, d, h, g, k) => {
      l[u] === "radius" ? r.arcTo(
        this.xScale(d),
        this.getYScale()(h),
        this.xScale(g),
        this.getYScale()(k),
        this.measurementScale(o[u])
      ) : l[u] === "bevel" ? r.lineTo(this.xScale(g), this.getYScale()(k)) : (r.lineTo(this.xScale(d), this.getYScale()(h)), r.lineTo(this.xScale(g), this.getYScale()(k)));
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
    for (const l of oi)
      if (e.getSide(l))
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
    const o = St.path();
    [0, 1, 2, 3].forEach((l) => {
      const c = this.shape.machining.getCorner(l);
      if (!c?.type) return;
      let u, d, h;
      switch (l) {
        case 0:
          if (!Oe(e.sides.a) || e.sides.a === !1) return;
          u = {
            x: this.xScale(0) - i,
            y: this.getYScale()(K({ v: c.size ?? 0, o: this }))
          }, d = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, h = {
            x: this.xScale(K({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? i : -i)
          };
          break;
        case 1:
          if (!Oe(e.sides.b) || e.sides.b === !1) return;
          u = {
            x: this.xScale(this.shapeL - K({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? i : -i)
          }, d = {
            x: this.xScale(this.shapeL) - i,
            y: this.getYScale()(0)
          }, h = {
            x: this.xScale(this.shapeL) + i,
            y: this.getYScale()(K({ v: c.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!Oe(e.sides.c) || e.sides.c === !1) return;
          u = {
            x: this.xScale(this.shapeL) + i,
            y: this.getYScale()(this.shapeW - K({ v: c.size ?? 0, o: this }))
          }, d = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, h = {
            x: this.xScale(this.shapeL - K({ v: c.size ?? 0, o: this })) - i,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? i : -i)
          };
          break;
        case 3:
          if (!Oe(e.sides.d) || e.sides.d === !1) return;
          u = {
            x: this.xScale(K({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? i : -i)
          }, d = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, h = {
            x: this.xScale(0) - i,
            y: this.getYScale()(this.shapeW - K({ v: c.size ?? 0, o: this })) + i
          };
          break;
        default:
          return;
      }
      if (o.moveTo(u.x, u.y), c.type === "radius")
        switch (o.arcTo(
          d.x,
          d.y,
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
        St.axisRight(n).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (i + s))
      ), this.svgCanvas.selectAll(".axis.y .tick").each(function(a, r, o) {
        (r === 0 || r === o.length - 1) && St.select(this).select("line").style("display", "none");
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
const Iy = { id: "machining" }, Py = { class: "inputs" }, Cy = {
  key: 0,
  class: "debug"
}, Ay = {
  key: 1,
  class: "shape-name"
}, Ty = { class: "shape-dimensions" }, Oy = {
  key: 2,
  class: "sides-wrapper"
}, Ly = { class: "menu" }, Fy = {
  key: 4,
  class: "button-wrapper"
}, $y = { class: "grid-table" }, Dy = { class: "row table-heading" }, Ey = {
  key: 0,
  class: "cell id"
}, My = {
  key: 0,
  class: "cell"
}, Ry = { class: "id" }, _y = { class: "cell" }, jy = ["onClick"], By = {
  key: 6,
  class: "menu-prompt"
}, Vy = !1, Ny = /* @__PURE__ */ Ue({
  __name: "Machining",
  props: /* @__PURE__ */ Ka({
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
  emits: /* @__PURE__ */ Ka(["update:shape", "close"], ["update:inputShape"]),
  setup(t, { emit: e }) {
    const i = Bi(() => Promise.resolve().then(() => Ea)), s = t, n = e, a = "production", r = oe(), o = ie(() => bl(Q.value)), l = ie(() => {
      if (!d.value?.length) return 0;
      if (ee.value === "banding") return 1;
      let fe = Object.values(u.value).filter((pe) => pe.enabled).length;
      return fe += 2, fe;
    }), c = ie(() => {
      if (!d.value.length || ee.value === "banding") return;
      const fe = {
        id: "34px",
        del: "30px"
      }, pe = [];
      return d.value.forEach((de) => {
        const ye = u.value[de];
        ye.enabled && pe.push(ye.w ?? "1fr");
      }), pe.unshift(fe.id), pe.push(fe.del), pe.join(" ");
    }), u = ie(() => !ee.value || ee.value === "banding" ? null : vt[ee.value]), d = ie(() => !ee.value || ee.value === "banding" ? [] : Object.keys(vt[ee.value]).filter((fe) => vt[ee.value][fe].enabled)), h = ie(() => ee.value ? D() : []), g = ie(() => {
      const fe = Q.value?.machining?.corners?.map((pe) => pe?.isPresent?.() ? pe.getCorner() : null)?.filter((pe) => pe) ?? [];
      return [...oi, ...fe];
    }), k = (fe = !0) => {
      fe ? Xe.value = fe : mt(() => Xe.value = !1);
    }, M = () => {
      te(), J(), j(), V();
    }, N = (fe) => {
      if (ee.value === "corners")
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
    }, T = () => ee.value !== "banding", C = (fe, pe = null) => {
      if (!fe?.length) return [];
      let de = "None";
      pe === "depth" && (de = "Through");
      const ye = [{ label: de, value: null }];
      return fe.forEach((lt) => {
        const P = lt.toString().charAt(0).toUpperCase() + lt.toString().slice(1);
        ye.push({ label: P, value: lt });
      }), ye;
    }, D = () => {
      if (!ee.value) return [];
      if (ee.value === "banding") return [];
      const fe = Q.value.machining[ee.value];
      return Array.isArray(fe) ? fe : [fe];
    };
    let x = null;
    const L = () => {
      if (!Q.value || !r.value) {
        console.warn("Missing shape or diagram ref for vis initialization");
        return;
      }
      console.log("Initializing vis with diagramRef:", r.value), x = new ky({
        HTMLElement: r.value,
        shape: Q.value,
        vueComponent: null
      }), x.init(), x.updateSize(), ot.value = !0;
    }, Y = ic(() => {
      ot.value && x && x.updateSize();
    }, 10);
    Br(r, () => {
      Y();
    });
    const _ = () => {
      et.value = et.value === 0 ? 1 : 0, x.flip();
    }, ce = () => {
      switch (ee.value) {
        case "holes":
          z();
          break;
        case "hingeHoles":
          y();
          break;
        case "corners":
          W();
          break;
      }
    }, z = () => {
      Q.value.machining.addHole({
        x: K({ v: Q.value.longSide }) / 2,
        y: K({ v: Q.value.shortSide }) / 2,
        diameter: s.options.holes.defaultDiameter ?? 1,
        depth: s.options.holes.defaultDepth ?? K({ v: Q.value.t }) ?? 0,
        face: et.value
      }), x.createHoles();
    }, y = () => {
      Q.value.machining.addHingeHole({
        numHoles: 3,
        position: 0,
        diameter: s.options.holes.defaultDiameter ?? 0,
        depth: s.options.holes.defaultDepth ?? 0,
        side: "x1",
        face: et.value,
        distanceFromEdge: s.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: s.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: s.options.hingeHoles.minimumHoleDistance,
        hingeLength: s.options.hingeHoles.defaultHingeLength
      }), x.createHingeHoles();
    }, W = () => {
      const fe = s.options.corners.types?.[0] || "radius", pe = s.options.corners.minValue || 5;
      for (let de = 0; de < 4; de++)
        Q.value.machining.setCorner({
          index: de,
          type: fe,
          size: pe
        });
      x.createCorners();
    }, te = () => {
      Q.value.machining.holes.length = 0;
    }, J = () => {
      Q.value.machining.hingeHoles.length = 0;
    }, j = () => {
      Q.value.machining.corners.forEach((fe) => {
        fe.size = null, fe.type = null;
      }), Q.value.banding.sides.a = !1, Q.value.banding.sides.b = !1, Q.value.banding.sides.c = !1, Q.value.banding.sides.d = !1;
    }, V = () => {
      Q.value.banding = {
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
    }, q = (fe) => {
      switch (ee.value) {
        case "holes":
          return Q.value.machining.holes.splice(fe, 1);
        case "hingeHoles":
          return Q.value.machining.hingeHoles.splice(fe, 1);
        case "corners":
          Q.value.machining.corners[fe].size = null, Q.value.machining.corners[fe].type = null;
          return;
      }
    }, G = () => {
      switch (ee.value) {
        case "holes":
          return te();
        case "hingeHoles":
          return J();
        case "corners":
          return j();
      }
    }, U = () => {
      if (Me.value = [], !!s.options.banding.enabled) {
        k();
        for (const fe in Q.value.banding.sides)
          Q.value.banding.sides[fe] ? s.options.banding.enableTypes && s.options.banding.types?.length && (Q.value.banding.sides[fe] || Me.value.push({
            index: fe,
            message: "Please select a type"
          })) : Q.value.banding.sides[fe] = "";
        k(!1);
      }
    }, ne = (fe) => {
      const pe = Me.value.filter((de) => de.index === fe);
      return pe.length ? pe.map((de) => de.message) : [];
    }, Se = (fe) => {
      const pe = Me.value.filter((ye) => ye.index === fe && ye?.fields), de = pe.flatMap((ye) => ye.fields);
      return pe.length ? de : [];
    }, me = (fe, pe) => {
      const de = Se(fe);
      return de?.length ? de.includes(pe) : !1;
    }, xe = () => n("close"), $e = (fe) => fe && typeof fe.disabled == "function" ? fe.disabled : !1, Q = tc(t, "inputShape");
    if (!Q.value?.machining)
      throw new Error("Machining component requires a shape with machining initialized");
    const Ve = oe(!1), ot = oe(!1), Xe = oe(!1), et = oe(0), ee = oe(null), Me = oe([]), vt = Ct({
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
          options: s.options.holes.diameters?.length ? C(s.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: s.options.holes.enableDepth && typeof Q.value.t < "u" && K({ v: Q.value.t }) > 0,
          required: !1,
          type: s.options.holes.depths?.length ? "select" : "unitDependent",
          output: s.options.holes.depths?.length ? "float" : void 0,
          options: s.options.holes.depths?.length ? C(s.options.holes.depths) : void 0
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
          enabled: s.options.holes.enableDepth && typeof Q.value.t < "u" && K({ v: Q.value.t }) > 0,
          required: !1,
          type: s.options.holes.depths?.length ? "select" : "unitDependent",
          output: s.options.holes.depths?.length ? "float" : void 0,
          options: s.options.holes.depths?.length ? C(s.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: s.options.holes.diameters?.length ? "select" : "unitDependent",
          label: H("machining.diameter"),
          output: s.options.holes.diameters?.length ? "float" : void 0,
          options: s.options.holes.diameters?.length ? C(s.options.holes.diameters) : void 0
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
          options: C(s.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: H("machining.size"),
          type: "unitDependent",
          min: () => typeof s.options.corners.minValue < "u" ? K({ v: s.options.corners.minValue, o: s.options }) : 0,
          max: () => typeof s.options.corners.maxValue < "u" ? K({ v: s.options.corners.maxValue, o: s.options }) : K({ v: Q.value.shortSide, o: s.options }) / 2
        }
      }
    }), gt = Ct({
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
    }), Qi = (fe) => {
      fe.target === fe.currentTarget && xe();
    }, kt = () => !(!Q?.value?.machining || !Ve.value || Xe.value);
    return He(() => Q.value?.autoId, () => {
      kt() && L();
    }), He(() => Q.value?.id, () => {
      kt() && L();
    }), He(ee, (fe) => {
      if (!kt()) return;
      if (fe === "banding") {
        k(), U(), k(!1);
        return;
      }
      if (!fe) {
        Me.value = [];
        return;
      }
      k();
      const pe = Q.value.machining.validate(
        Q.value,
        fe,
        gt?.[fe]
      );
      Me.value = pe?.map((de, ye) => ({
        index: ye,
        message: de.message || "Validation error",
        fields: de.field || []
      })) || [], k(!1);
    }, { deep: !0, immediate: !0 }), He(() => Q?.value?.machining?.holes, () => {
      if (!kt()) return;
      k();
      const fe = Q.value.machining.validate(
        Q.value,
        "holes",
        gt?.holes
      );
      Me.value = fe?.map((pe, de) => ({
        index: de,
        message: pe.message || "Validation error",
        fields: pe.field || []
      })) || [], x.createHoles(), k(!1);
    }, { deep: !0, immediate: !0 }), He(() => Q?.value?.machining?.hingeHoles, () => {
      if (!kt()) return;
      k();
      const fe = Q.value.machining.validate(
        Q.value,
        "hingeHoles",
        gt?.hingeHoles
      );
      Me.value = fe?.map((pe, de) => ({
        index: de,
        message: pe.message || "Validation error",
        fields: pe.field || []
      })) || [], x.createHingeHoles(), k(!1);
    }, { deep: !0, immediate: !0 }), He(() => Q?.value?.machining?.corners, () => {
      if (!kt()) return;
      k();
      const fe = Q.value.machining.validate(
        Q.value,
        "corners",
        gt?.corners
      );
      Me.value = fe?.map((pe, de) => ({
        index: de,
        message: pe.message || "Validation error",
        fields: pe.field || []
      })) || [], Q.value.machining.validate(Q.value, "holes"), Q.value.machining.validate(Q.value, "hingeHoles"), x.createShape(), x.createHoles(), x.createHingeHoles();
      for (const pe of Q.value.machining.corners)
        Q.value.banding && pe?.getCorner && (Q.value.banding.sides[pe.getCorner()] = "");
      x.createBanding(), k(!1);
    }, { deep: !0, immediate: !0 }), He(() => Q?.value?.banding, () => {
      kt() && (U(), x.createBanding());
    }, { deep: !0, immediate: !0 }), Jt(() => {
      if (document.body.style.overflow = "hidden", !Q.value || !Q.value.l || !Q.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      mt(() => L()), Ve.value = !0;
    }), bs(() => document.body.style.overflow = ""), (fe, pe) => {
      const de = xi("FontAwesomeIcon");
      return w(), De(ha, { to: "body" }, [
        $("section", {
          id: "smartcut-machining",
          class: "smartcut-content",
          onClick: Qi
        }, [
          $("div", Iy, [
            $("div", Py, [
              A(a) === "development" && Vy ? (w(), F("div", Cy, [
                We(A(i), {
                  data: [Q.value.machining],
                  paths: ["shape.machining"]
                }, null, 8, ["data"])
              ])) : se("", !0),
              $("button", {
                class: "c-btn close",
                type: "button",
                onClick: pe[0] || (pe[0] = (ye) => xe())
              }, "×"),
              Q.value?.name ? (w(), F("div", Ay, re(Q.value.name), 1)) : se("", !0),
              $("div", Ty, re(Q.value?.l) + " x " + re(Q.value?.w) + " " + re(Q.value?.t ? "x " + Q.value?.t : null), 1),
              t.options.faces.enabled ? (w(), F("div", Oy, [
                $("div", {
                  ref: "sides",
                  class: je(["sides", { flipped: et.value === 1 }]),
                  onClick: _
                }, [...pe[6] || (pe[6] = [
                  $("div", { class: "side-a" }, " A ", -1),
                  $("div", { class: "side-b" }, " B ", -1)
                ])], 2),
                pe[7] || (pe[7] = $("div", { class: "text" }, " [Click to flip] ", -1))
              ])) : se("", !0),
              o.value ? (w(), F("button", {
                key: 3,
                class: "c-btn c-btn--delete",
                type: "button",
                onClick: M
              }, " Delete all machining ")) : se("", !0),
              $("div", Ly, [
                t.options.holes.enabled ? (w(), F("div", {
                  key: 0,
                  class: je({ selected: ee.value === "holes" }),
                  onClick: pe[1] || (pe[1] = (ye) => ee.value = "holes")
                }, " Holes ", 2)) : se("", !0),
                t.options.hingeHoles.enabled ? (w(), F("div", {
                  key: 1,
                  class: je({ selected: ee.value === "hingeHoles" }),
                  onClick: pe[2] || (pe[2] = (ye) => ee.value = "hingeHoles")
                }, " Hinge holes ", 2)) : se("", !0),
                t.options.corners.enabled ? (w(), F("div", {
                  key: 2,
                  class: je({ selected: ee.value === "corners" }),
                  onClick: pe[3] || (pe[3] = (ye) => ee.value = "corners")
                }, " Corners ", 2)) : se("", !0),
                t.options.banding.enabled ? (w(), F("div", {
                  key: 3,
                  class: je({ selected: ee.value === "banding" }),
                  onClick: pe[4] || (pe[4] = (ye) => ee.value = "banding")
                }, " Banding ", 2)) : se("", !0)
              ]),
              ee.value === "holes" || ee.value === "hingeHoles" || ee.value && ee.value !== "banding" ? (w(), F("div", Fy, [
                ee.value === "holes" || ee.value === "hingeHoles" || ee.value === "corners" ? (w(), F("button", {
                  key: 0,
                  class: "c-btn",
                  type: "button",
                  onClick: ce
                }, " Create ")) : se("", !0),
                ee.value && ee.value !== "banding" ? (w(), F("button", {
                  key: 1,
                  class: "c-btn c-btn--delete",
                  type: "button",
                  onClick: G
                }, " Delete all ")) : se("", !0)
              ])) : se("", !0),
              $("div", $y, [
                ee.value === "banding" && Q.value ? (w(), De(qs, {
                  key: 0,
                  shape: Q.value,
                  "onUpdate:shape": pe[5] || (pe[5] = (ye) => Q.value = ye),
                  "extra-type": "banding",
                  "extra-label": "Banding",
                  "extra-keys": g.value,
                  labels: t.options.banding.labels,
                  "all-options": t.options.banding.options,
                  "user-friendly-field-map": A(Yt),
                  "part-columns": 1,
                  "allow-custom-names": !0,
                  "enable-pricing": !0,
                  pricing: t.options.banding.pricing,
                  "get-price": t.getExtrasPrice,
                  "format-price": t.formatPrice,
                  "get-available-pricing-options": t.getAvailablePricingOptions
                }, null, 8, ["shape", "extra-keys", "labels", "all-options", "user-friendly-field-map", "pricing", "get-price", "format-price", "get-available-pricing-options"])) : se("", !0)
              ]),
              ee.value !== "banding" && h.value.length ? (w(), F("div", {
                key: 5,
                class: je(["grid-table", ee.value]),
                style: ut({ "grid-template-columns": c.value })
              }, [
                $("div", Dy, [
                  T() ? (w(), F("div", Ey)) : se("", !0),
                  (w(!0), F(Be, null, Ke(u.value, (ye, lt) => ys((w(), F("div", {
                    key: lt,
                    class: "cell"
                  }, re(ye.label ?? lt), 1)), [
                    [on, ye.enabled]
                  ])), 128)),
                  pe[8] || (pe[8] = $("div", { class: "cell" }, null, -1))
                ]),
                (w(!0), F(Be, null, Ke(h.value, (ye, lt) => (w(), F("div", {
                  key: lt,
                  class: "row"
                }, [
                  T() ? (w(), F("div", My, [
                    $("div", Ry, re(N(lt)), 1)
                  ])) : se("", !0),
                  (w(!0), F(Be, null, Ke(d.value, (P, O) => (w(), F("div", {
                    key: O,
                    class: "cell"
                  }, [
                    We(bi, {
                      type: u.value[P].type,
                      id: P + "-" + O,
                      warning: me(lt, P),
                      "enable-label": !1,
                      placeholder: u.value[P].label ?? P,
                      disabled: $e(u.value[P]),
                      value: A(gi)(ye, P),
                      output: u.value[P].output,
                      options: u.value[P].options,
                      "onUpdate:value": (S) => A(ti)(ye, P, S)
                    }, null, 8, ["type", "id", "warning", "placeholder", "disabled", "value", "output", "options", "onUpdate:value"])
                  ]))), 128)),
                  $("div", _y, [
                    $("button", {
                      class: "c-btn delete",
                      type: "button",
                      onClick: (P) => q(lt)
                    }, [
                      We(de, { icon: ["fass", "trash"] })
                    ], 8, jy)
                  ]),
                  (w(!0), F(Be, null, Ke(ne(lt), (P, O) => (w(), F("div", {
                    key: O,
                    class: "group validation",
                    style: ut({ "grid-column-end": "span " + l.value })
                  }, re(P), 5))), 128))
                ]))), 128))
              ], 6)) : ee.value ? se("", !0) : (w(), F("div", By, "Please select from the menu above"))
            ]),
            $("div", {
              id: "machining-diagram",
              class: je(["diagram", { flipped: et.value === 1 }]),
              ref_key: "diagramRef",
              ref: r
            }, null, 2)
          ])
        ])
      ]);
    };
  }
}), Gy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Ny }, Symbol.toStringTag, { value: "Module" })), qy = {
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
      files: sc([])
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
function zy(t, e, i, s, n, a) {
  return w(), F("div", {
    id: "drop",
    class: je({ thinking: i.thinking, [n.dropClass]: !0 }),
    onDrop: e[0] || (e[0] = Vr((...r) => a.onDrop && a.onDrop(...r), ["prevent"]))
  }, [
    $("div", null, re(i.thinking ? "Loading, please wait..." : i.label), 1)
  ], 34);
}
const Wy = /* @__PURE__ */ Dt(qy, [["render", zy]]), Hy = { id: "import-file" }, Uy = /* @__PURE__ */ Ue({
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
    const { addNotice: i } = ln(), s = t, n = e, a = oe([]), r = oe([]), o = oe([]), l = oe([]), c = oe({}), u = oe([]), d = oe(!1), h = oe(null), g = oe(null), k = oe({}), M = [
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
    ], N = ie(() => {
      if (Object.keys(k.value).length === a.value.length)
        return k.value;
      const V = {};
      return a.value.forEach((q, G) => {
        V[G] = {};
        for (const [U, ne] of Object.entries(q)) {
          if (!M.includes(U)) continue;
          const Se = D(U, ne);
          (Se === !0 || Se === !1) && (V[G][U] = Se);
        }
      }), k.value = V, V;
    }), T = ie(() => s.customFields.map((V) => V.label)), C = (V, q) => {
      if (!q || Array.isArray(q) && q.length === 0 || typeof q == "object" && Object.keys(q).length === 0)
        return;
      const G = (Array.isArray(q), q), U = (Array.isArray(G), Object.keys(G));
      if (U.length === 0)
        return;
      const ne = [[]];
      U.forEach((me) => {
        const xe = G[me], $e = [];
        ne.forEach((Q) => {
          Array.isArray(xe) && xe.forEach((Ve) => $e.push([...Q, Ve]));
        }), ne.splice(0, ne.length, ...$e);
      });
      const Se = /* @__PURE__ */ new Set();
      ne.forEach((me) => Se.add(me.join("|").toLowerCase())), V === "banding" ? h.value = Se : g.value = Se;
    }, D = (V, q) => {
      if (q === "???") return !0;
      function G(ne) {
        return ne ? (ne = ne?.trim()?.toLowerCase(), ne === "l" || ne === "w") : !0;
      }
      const U = {
        banding: (ne) => x(ne, h.value, "banding"),
        finish: (ne) => x(ne, g.value, "finish"),
        orientationLock: G
      };
      return V in U ? U[V](q) : null;
    }, x = (V, q, G) => {
      if (V = W(V), !V) return !0;
      const U = V.split(","), ne = U.every((Se) => {
        if (!Se) return !0;
        const me = Se.toLowerCase();
        return q.has(me) ? !0 : Array.from(q).some(($e) => $e.startsWith(me + "|") || $e === me);
      });
      if (!ne) {
        const Se = U.filter((me) => {
          if (!me) return !1;
          const xe = me.toLowerCase();
          return q.has(xe) ? !1 : !Array.from(q).some(($e) => $e.startsWith(xe + "|") || $e === xe);
        });
        console.log(`Valid ${G} choices...`), console.log(Array.from(q).join()), console.log(`The following ${G} choices are invalid`, Se), i({
          type: "error",
          message: H("errors.validation.options_invalid", [H(`woodwork.${G}`).toLowerCase()]),
          additional: Se
        });
      }
      return ne;
    }, L = (V, q) => {
      const G = N.value[q]?.banding !== !1, U = N.value[q]?.finish !== !1, ne = !!V.banding, Se = !!V.finish;
      if (!ne && !Se)
        return;
      const me = {};
      if (G && ne) {
        const xe = W(V.banding);
        if (xe) {
          const $e = xe.split(","), Q = ["l1", "l2", "w1", "w2"], Ve = {};
          $e.forEach((ot, Xe) => {
            if (ot && ot.trim() && Q[Xe]) {
              const et = ot.trim();
              if (et.includes("|") && s.bandingLabels.length > 1) {
                const ee = et.split("|"), Me = {};
                s.bandingLabels.forEach((vt, gt) => {
                  ee[gt] && (Me[vt] = ee[gt]);
                }), Ve[Q[Xe]] = Me;
              } else
                Ve[Q[Xe]] = et;
            }
          }), Object.keys(Ve).length > 0 && (me.banding = { sides: Ve });
        }
      }
      if (U && Se) {
        const xe = W(V.finish);
        if (xe) {
          const $e = xe.split(","), Q = ["a", "b"], Ve = {};
          $e.forEach((ot, Xe) => {
            if (ot && ot.trim() && Q[Xe]) {
              const et = ot.trim();
              if (et.includes("|") && s.finishLabels.length > 1) {
                const ee = et.split("|"), Me = {};
                s.finishLabels.forEach((vt, gt) => {
                  ee[gt] && (Me[vt] = ee[gt]);
                }), Ve[Q[Xe]] = Me;
              } else
                Ve[Q[Xe]] = et;
            }
          }), Object.keys(Ve).length > 0 && (me.finish = { faces: Ve });
        }
      }
      return Object.keys(me).length > 0 ? me : void 0;
    }, Y = () => a.value.map((V, q) => ({
      l: s.numberFormat === "decimal" ? js(V.l) : V.l,
      w: s.numberFormat === "decimal" ? js(V.w) : V.w,
      t: s.numberFormat === "decimal" ? js(V.t) : V.t,
      q: typeof V.q == "string" ? parseInt(V.q, 10) : V.q,
      orientationLock: V.orientationLock,
      name: V.name,
      material: V.material,
      extras: L(V, q),
      customData: J(V)
    })), _ = (V) => {
      const q = V?.[0]?.data;
      q && Bc.parse(q, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (G) => ce(G),
        error: () => n("error")
      });
    }, ce = (V) => {
      r.value = V.data.filter((q) => q.some((G) => G)), o.value = r.value[0], c.value = {};
      for (let q = o.value.length; q--; ) {
        const G = o.value[q], U = z(G);
        U ? c.value[q] = U : (c.value[q] = null, T.value.includes(G) && (c.value[q] = "customData." + s.customFields.find((ne) => ne.label === G).id));
      }
      y(), r.value.shift(), te(), j();
    }, z = (V) => {
      const q = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", H("l"), H("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", H("w"), H("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", H("t"), H("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", H("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", H("quantity"), H("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", H("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", H("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", H("banding")],
        finish: ["finish", "paint"]
      }, G = Object.entries(q).reduce(
        (U, [ne, Se]) => (Se.some((me) => V && V.toLowerCase() === me) && U.push(ne), U),
        []
      );
      return G.length > 1 ? null : G[0];
    }, y = () => {
      d.value = !1, l.value = Object.values(c.value).map((q) => !q || q === "N" ? null : M.includes(q) ? q : (d.value = !0, null));
      const V = l.value.filter((q, G) => l.value.indexOf(q) !== G);
      u.value = V.map((q) => l.value.reduce(
        (G, U, ne) => (U && U === q && G.push(ne), G),
        []
      ));
    }, W = (V) => V && V.replace(/\s*,\s*/g, ","), te = () => {
      const V = r.value.map((q) => {
        const G = {};
        return o.value.forEach((U, ne) => {
          if (u.value.flat().includes(ne))
            return G[c.value[ne]] = "???";
          G[c.value[ne]] = q[ne];
        }), G;
      });
      a.value = V;
    }, J = (V) => {
      let q = {};
      for (let G in V)
        if (G.startsWith("customData.")) {
          let U = G.slice(11);
          q[U] = V[G];
        }
      return q;
    }, j = () => {
      const V = Y();
      V?.length && n("import", V);
    };
    return Jt(() => {
      C("banding", s.bandingOptions), C("finish", s.finishOptions);
    }), (V, q) => (w(), F("div", Hy, [
      We(Wy, {
        label: A(H)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: _
      }, null, 8, ["label"])
    ]));
  }
}), Yy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Uy }, Symbol.toStringTag, { value: "Module" })), Ky = {
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
}, Zy = { class: "smartcut-object-viewer" }, Jy = ["onClick"], Xy = { class: "toggle-icon" }, Qy = { class: "path-label" }, eb = {
  key: 0,
  class: "object-properties"
}, tb = {
  key: 0,
  class: "key"
}, ib = {
  key: 1,
  class: "null-value"
}, sb = { key: 2 };
function nb(t, e, i, s, n, a) {
  const r = xi("ObjectViewer", !0);
  return w(), F("div", Zy, [
    (w(!0), F(Be, null, Ke(i.data, (o, l) => (w(), F("div", {
      key: l,
      class: "array-item"
    }, [
      $("div", {
        class: "item-header",
        onClick: (c) => a.toggle(l)
      }, [
        $("div", Xy, re(n.expanded[l] ? "▼" : "▶"), 1),
        $("div", Qy, re(i.paths[l] || l), 1)
      ], 8, Jy),
      n.expanded[l] ? (w(), F("div", eb, [
        (w(!0), F(Be, null, Ke(o, (c, u) => (w(), F("div", {
          key: u,
          class: "property-item"
        }, [
          !a.isObjectOrArray(c) || c === null || Array.isArray(c) ? (w(), F("div", tb, re(u) + ": ", 1)) : se("", !0),
          $("div", {
            class: je(["value", a.getValueType(c)])
          }, [
            a.isObjectOrArray(c) && c !== null ? (w(), De(r, {
              key: 0,
              data: Array.isArray(c) ? c : [c],
              paths: a.getArrayPaths(c, u),
              root: !1
            }, null, 8, ["data", "paths"])) : c === null ? (w(), F("span", ib, "null")) : (w(), F("span", sb, re(a.formatValue(c)), 1))
          ], 2)
        ]))), 128))
      ])) : se("", !0)
    ]))), 128))
  ]);
}
const ab = /* @__PURE__ */ Dt(Ky, [["render", nb]]), Ea = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: ab }, Symbol.toStringTag, { value: "Module" })), rb = {
  key: 0,
  class: "debug"
}, ob = { id: "formula-pricing" }, lb = {
  key: 1,
  class: "extras"
}, cb = { class: "heading" }, ub = { id: "hardware-total" }, db = { class: "heading panels" }, fb = !1, hb = /* @__PURE__ */ Ue({
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
    const i = Bi(() => Promise.resolve().then(() => Ea)), s = t, n = e, a = nc("calculator"), r = ie(() => a()), o = oe("production");
    let l = null;
    const c = oe(null), u = oe([]), d = oe(!1), h = oe(""), g = ie(() => {
      if (!d.value || !u.value.length || u.value.every((_) => _.value === null)) return null;
      const Y = D();
      return mt(() => n("panel-result", Y)), Y;
    }), k = ie(() => {
      if (!r.value || !d.value || !u.value.length || u.value.every((_) => _.value === null)) return;
      const Y = x();
      return mt(() => n("hardware-result", Y, M.value)), Y;
    }), M = ie(() => {
      if (k.value)
        return Object.values(k.value).reduce((Y, _) => Y + _.totalCost, 0);
    });
    He(g, (Y) => {
      if (!d.value || !Y || !r.value || !r.value?.inputShapes) return;
      const _ = (y) => y?.name ? y.name.toLowerCase() : "", ce = new Map(
        r.value.inputShapes.map((y) => [_(y), y])
      ), z = /* @__PURE__ */ new Set();
      for (const y of Object.values(g.value)) {
        if (!y.name) continue;
        const W = _(y), te = ce.get(W), J = {
          ...y,
          name: y.name.toUpperCase() || te?.name.toUpperCase(),
          material: y.material?.toUpperCase() || te?.material?.toUpperCase(),
          bandingOptions: y.bandingOptions || {},
          finishOptions: y.finishOptions || {},
          orientationLock: y.orientationLock || null,
          notes: h.value,
          readonly: !0
        }, j = te || r.value.createInputShape(J);
        if (te) {
          Object.assign(te, J);
          for (const V of ["banding", "finish"])
            r.value.initExtrasOptions(te, V);
        } else
          r.value.inputShapes.push(j);
        z.add(W);
      }
      r.value.inputShapes = r.value.inputShapes.filter(
        (y) => z.has(_(y))
      );
    }, { immediate: !1 }), Jt(() => L());
    const N = (Y) => {
      s.debug && console.log(Y);
    }, T = () => {
      u.value = Object.values(c.value.inputs).map((Y) => ({
        value: Y.default ?? null
      })), console.log(u.value);
    }, C = (Y, _) => {
      u.value[Y] && (u.value[Y].value = _);
    }, D = () => {
      try {
        return l.calculatePanelsFromFields(u.value);
      } catch (Y) {
        return r.value.inputShapes.length = 0, console.error(Y), null;
      }
    }, x = () => {
      try {
        return l.calculateHardwareFromFields(u.value);
      } catch (Y) {
        return console.error(Y), null;
      }
    }, L = async () => {
      if (!s.url && !s.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      s.url ? (N(`SmartCut - Formula calculator init from url: ${s.url}`), l = new fa({ url: s.url }), c.value = await l.getSpec()) : s.spec && (N("SmartCut - Formula calculator init with JSON"), l = new fa({ spec: s.spec }), c.value = await l.getSpec()), T(), d.value = !0;
    };
    return (Y, _) => (w(), F(Be, null, [
      o.value === "development" && fb ? (w(), F("div", rb, [
        _[1] || (_[1] = $("div", null, "Developer information", -1)),
        We(A(i), {
          data: [g.value],
          paths: ["panelResult"]
        }, null, 8, ["data"])
      ])) : se("", !0),
      $("div", ob, [
        c.value?.projectName ? (w(), De(bi, {
          key: 0,
          id: "project-name",
          type: "string",
          label: "Project name",
          placeholder: "Name",
          value: h.value,
          "onUpdate:value": _[0] || (_[0] = (ce) => h.value = ce)
        }, null, 8, ["value"])) : se("", !0),
        (w(!0), F(Be, null, Ke(c.value?.inputs, (ce, z, y) => (w(), De(bi, {
          id: "formula-field-" + y,
          key: y,
          type: ce.type,
          label: ce.label,
          placeholder: ce.label,
          min: ce.min ?? 0,
          max: ce.max ?? null,
          default: ce.default ?? 0,
          value: u.value[y]?.value,
          "onUpdate:value": (W) => C(y, W)
        }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]))), 128)),
        k.value ? (w(), F("div", lb, [
          $("div", cb, re(A(H)("Hardware")), 1),
          (w(!0), F(Be, null, Ke(k.value, (ce, z) => (w(), F("div", { key: z }, re(ce.name) + " x" + re(ce.q) + " = " + re(t.formatPrice(ce.totalCost)), 1))), 128)),
          $("div", ub, re(A(H)("Hardware total")) + " = " + re(t.formatPrice(M.value)), 1)
        ])) : se("", !0),
        $("div", db, re(A(H)("Panels")), 1)
      ])
    ], 64));
  }
}), tS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: hb }, Symbol.toStringTag, { value: "Module" })), pb = {
  id: "smartcut-notices",
  class: "smartcut-content"
}, gb = { class: "content" }, mb = ["onClick"], yb = ["innerHTML"], bb = /* @__PURE__ */ Ue({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(t) {
    const e = t, { notices: i, dismissNotice: s } = ln(), n = oe({}), a = ie(() => e.position.includes("right") ? "notice-right" : "notice-left");
    return (r, o) => {
      const l = xi("FontAwesomeIcon");
      return w(), De(ha, { to: "body" }, [
        $("div", pb, [
          We(ac, {
            name: a.value,
            "move-class": "notice-move",
            tag: "div",
            class: je(["notices-container", e.position])
          }, {
            default: Oi(() => [
              (w(!0), F(Be, null, Ke(A(i), (c) => (w(), F("div", {
                key: c.id,
                ref_for: !0,
                ref: (u) => {
                  u && (n.value[c.id] = u);
                },
                class: je([
                  "notice",
                  `notice--${c.type}`
                ])
              }, [
                $("div", gb, [
                  $("div", {
                    class: "message",
                    onClick: (u) => c.action()
                  }, re(c.message), 9, mb),
                  $("div", {
                    class: "additional-info",
                    innerHTML: c.additional
                  }, null, 8, yb)
                ]),
                c.persistent ? se("", !0) : (w(), De(l, {
                  key: 0,
                  icon: ["fass", "trash"],
                  class: "dismiss",
                  onClick: (u) => A(s)(c.id)
                }, null, 8, ["onClick"]))
              ], 2))), 128))
            ]),
            _: 1
          }, 8, ["name", "class"])
        ])
      ]);
    };
  }
}), iS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: bb }, Symbol.toStringTag, { value: "Module" })), vb = { class: "stock-filter-search" }, wb = { class: "search-input-wrapper" }, Sb = ["placeholder"], xb = /* @__PURE__ */ Ue({
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
    return (l, c) => (w(), F("div", vb, [
      $("div", wb, [
        ys($("input", {
          "onUpdate:modelValue": c[0] || (c[0] = (u) => n.value = u),
          type: "text",
          class: "search-input",
          placeholder: t.placeholder,
          onInput: r
        }, null, 40, Sb), [
          [rc, n.value]
        ]),
        n.value ? (w(), F("button", {
          key: 0,
          type: "button",
          class: "search-clear",
          onClick: o
        }, " × ")) : se("", !0)
      ])
    ]));
  }
}), kb = /* @__PURE__ */ Dt(xb, [["__scopeId", "data-v-f780d286"]]), Ib = { class: "filter-panel-header" }, Pb = { class: "filter-panel-title" }, Cb = { class: "filter-panel-content" }, Ab = {
  key: 0,
  class: "filter-summary"
}, Tb = { class: "filter-summary__count" }, Ob = { class: "filter-groups" }, Lb = { class: "filter-group__header" }, Fb = { class: "filter-group__label" }, $b = { class: "filter-group__content" }, Db = {
  key: 0,
  class: "filter-select"
}, Eb = ["checked", "onChange"], Mb = ["value", "onChange"], Rb = { value: "" }, _b = ["value"], jb = {
  key: 1,
  class: "filter-range"
}, Bb = { class: "filter-range__inputs" }, Vb = ["value", "min", "max", "step", "onInput"], Nb = ["value", "min", "max", "step", "onInput"], Gb = {
  key: 2,
  class: "filter-boolean"
}, qb = { class: "filter-checkbox" }, zb = ["checked", "onChange"], Wb = /* @__PURE__ */ Ue({
  __name: "StockFilterPanel",
  props: {
    filterConfigs: {},
    activeFilters: {},
    getUniqueValues: { type: Function },
    getFieldRange: { type: Function }
  },
  emits: ["apply-filter", "remove-filter", "clear-filters"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = oe(!0), a = oe({}), r = ie(() => i.activeFilters.length);
    function o() {
      n.value = !n.value;
    }
    function l(C) {
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
      }[C.field] || C.label;
    }
    function c(C) {
      return C.options?.length ? C.options : i.getUniqueValues(C.field).map((x) => C.field === "color" && typeof x == "object" && x !== null ? "name" in x && x.name ? {
        label: x.name,
        value: x
      } : {
        label: x.hex || String(x),
        value: x
      } : {
        label: String(x),
        value: x
      });
    }
    function u(C) {
      return i.activeFilters.find((x) => x.field === C)?.value;
    }
    function d(C, D) {
      const x = u(C);
      return Array.isArray(x) ? C === "color" && typeof D == "object" && D !== null && "hex" in D ? x.some(
        (L) => typeof L == "object" && L !== null && "hex" in L && L.hex === D.hex
      ) : x.includes(D) : C === "color" && typeof D == "object" && D !== null && "hex" in D ? typeof x == "object" && x !== null && "hex" in x && x.hex === D.hex : x === D;
    }
    function h(C, D) {
      const L = D.target.value;
      L === "" ? s("remove-filter", C) : s("apply-filter", C, L, "select");
    }
    function g(C, D, x) {
      const L = x.target, Y = u(C) || [], _ = Array.isArray(Y) ? [...Y] : [];
      if (L.checked)
        _.includes(D) || _.push(D);
      else {
        const ce = _.indexOf(D);
        ce !== -1 && _.splice(ce, 1);
      }
      _.length === 0 ? s("remove-filter", C) : s("apply-filter", C, _, "multiselect");
    }
    function k(C, D) {
      if (a.value[C]?.[D] !== void 0)
        return a.value[C][D];
      const x = i.activeFilters.find((L) => L.field === C);
      if (x?.value && typeof x.value == "object")
        return x.value[D];
    }
    function M(C, D, x) {
      const L = x.target, Y = L.value ? Number(L.value) : void 0;
      a.value[C] || (a.value[C] = {}), a.value[C][D] = Y;
      const _ = a.value[C].min, ce = a.value[C].max;
      _ !== void 0 || ce !== void 0 ? s("apply-filter", C, { min: _, max: ce }, "range") : s("remove-filter", C);
    }
    function N(C, D) {
      D.target.checked ? s("apply-filter", C, !0, "boolean") : s("remove-filter", C);
    }
    function T() {
      a.value = {}, s("clear-filters");
    }
    return (C, D) => (w(), F("div", {
      class: je(["stock-filter-panel", { "stock-filter-panel--open": n.value }])
    }, [
      $("div", Ib, [
        $("h3", Pb, re(A(H)("stockFilter.filters")), 1),
        $("button", {
          type: "button",
          class: "filter-panel-toggle",
          onClick: o
        }, re(n.value ? "−" : "+"), 1)
      ]),
      We(oc, { name: "filter-panel-content" }, {
        default: Oi(() => [
          ys($("div", Cb, [
            r.value > 0 ? (w(), F("div", Ab, [
              $("span", Tb, re(A(H)("stockFilter.active_filters", [r.value])), 1),
              $("button", {
                type: "button",
                class: "filter-summary__clear",
                onClick: T
              }, re(A(H)("stockFilter.clear_all")), 1)
            ])) : se("", !0),
            $("div", Ob, [
              (w(!0), F(Be, null, Ke(t.filterConfigs, (x) => (w(), F("div", {
                key: x.field,
                class: "filter-group"
              }, [
                $("div", Lb, [
                  $("label", Fb, re(l(x)), 1)
                ]),
                $("div", $b, [
                  x.type === "select" || x.type === "multiselect" ? (w(), F("div", Db, [
                    x.type === "multiselect" ? (w(!0), F(Be, { key: 0 }, Ke(c(x), (L) => (w(), F("label", {
                      key: L.value,
                      class: "filter-checkbox"
                    }, [
                      $("input", {
                        checked: d(x.field, L.value),
                        type: "checkbox",
                        onChange: (Y) => g(x.field, L.value, Y)
                      }, null, 40, Eb),
                      $("span", null, re(L.label), 1)
                    ]))), 128)) : (w(), F("select", {
                      key: 1,
                      value: u(x.field),
                      class: "filter-select-input",
                      onChange: (L) => h(x.field, L)
                    }, [
                      $("option", Rb, re(A(H)("stockFilter.all")), 1),
                      (w(!0), F(Be, null, Ke(c(x), (L) => (w(), F("option", {
                        key: L.value,
                        value: L.value
                      }, re(L.label), 9, _b))), 128))
                    ], 40, Mb))
                  ])) : x.type === "range" ? (w(), F("div", jb, [
                    $("div", Bb, [
                      $("input", {
                        value: k(x.field, "min"),
                        min: x.min,
                        max: x.max,
                        step: x.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Min",
                        onInput: (L) => M(x.field, "min", L)
                      }, null, 40, Vb),
                      D[0] || (D[0] = $("span", { class: "filter-range__separator" }, "–", -1)),
                      $("input", {
                        value: k(x.field, "max"),
                        min: x.min,
                        max: x.max,
                        step: x.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Max",
                        onInput: (L) => M(x.field, "max", L)
                      }, null, 40, Nb)
                    ])
                  ])) : x.type === "boolean" ? (w(), F("div", Gb, [
                    $("label", qb, [
                      $("input", {
                        checked: u(x.field) === !0,
                        type: "checkbox",
                        onChange: (L) => N(x.field, L)
                      }, null, 40, zb),
                      $("span", null, re(x.label), 1)
                    ])
                  ])) : se("", !0)
                ])
              ]))), 128))
            ])
          ], 512), [
            [on, n.value]
          ])
        ]),
        _: 1
      })
    ], 2));
  }
}), Hb = /* @__PURE__ */ Dt(Wb, [["__scopeId", "data-v-0bf41a2d"]]), Ub = { class: "stock-filter-sort" }, Yb = { class: "sort-controls" }, Kb = { class: "sort-label" }, Zb = ["value"], Jb = ["value"], Xb = ["title"], Qb = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, ev = {
  key: 0,
  d: "M8 3l4 5H4z"
}, tv = {
  key: 1,
  d: "M8 13l4-5H4z"
}, iv = /* @__PURE__ */ Ue({
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
    return (l, c) => (w(), F("div", Ub, [
      $("div", Yb, [
        $("label", Kb, re(A(H)("stockFilter.sort_by")) + ":", 1),
        $("select", {
          value: t.sortBy,
          class: "sort-select",
          onChange: r
        }, [
          (w(!0), F(Be, null, Ke(A(n), (u) => (w(), F("option", {
            key: u.value,
            value: u.value
          }, re(u.label), 9, Jb))), 128))
        ], 40, Zb),
        $("button", {
          type: "button",
          class: je(["sort-order-btn", { "sort-order-btn--desc": t.sortOrder === "desc" }]),
          title: t.sortOrder === "asc" ? A(H)("options.by_dimensions") : A(H)("options.by_dimensions"),
          onClick: o
        }, [
          (w(), F("svg", Qb, [
            t.sortOrder === "asc" ? (w(), F("path", ev)) : (w(), F("path", tv))
          ]))
        ], 10, Xb)
      ])
    ]));
  }
}), sv = /* @__PURE__ */ Dt(iv, [["__scopeId", "data-v-6e437deb"]]), nv = { class: "stock-filter-results" }, av = { class: "results-header" }, rv = { class: "results-info" }, ov = { class: "results-count" }, lv = { class: "results-controls" }, cv = { class: "display-mode-toggle" }, uv = ["title"], dv = ["title"], fv = {
  key: 0,
  class: "results-loading"
}, hv = {
  key: 1,
  class: "results-empty"
}, pv = { class: "empty-message" }, gv = {
  key: 3,
  class: "results-pagination"
}, mv = ["disabled"], yv = { class: "pagination-pages" }, bv = ["onClick"], vv = ["disabled"], wv = /* @__PURE__ */ Ue({
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
    const e = t, i = ie(() => {
      const s = [], a = Math.floor(2.5);
      let r = Math.max(1, e.currentPage - a), o = Math.min(e.totalPages, r + 5 - 1);
      o === e.totalPages && (r = Math.max(1, o - 5 + 1));
      for (let l = r; l <= o; l++)
        s.push(l);
      return s;
    });
    return (s, n) => (w(), F("div", nv, [
      $("div", av, [
        $("div", rv, [
          $("span", ov, re(t.totalResults) + " " + re(t.totalResults === 1 ? A(H)("stockFilter.result_one") : A(H)("stockFilter.result_other")), 1)
        ]),
        $("div", lv, [
          $("div", cv, [
            $("button", {
              type: "button",
              class: je(["display-mode-btn", { "display-mode-btn--active": t.displayMode === "grid" }]),
              title: A(H)("stockFilter.grid_view"),
              onClick: n[0] || (n[0] = (a) => s.$emit("update:displayMode", "grid"))
            }, [...n[5] || (n[5] = [
              Nr('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-cbba2130><rect x="1" y="1" width="6" height="6" data-v-cbba2130></rect><rect x="9" y="1" width="6" height="6" data-v-cbba2130></rect><rect x="1" y="9" width="6" height="6" data-v-cbba2130></rect><rect x="9" y="9" width="6" height="6" data-v-cbba2130></rect></svg>', 1)
            ])], 10, uv),
            $("button", {
              type: "button",
              class: je(["display-mode-btn", { "display-mode-btn--active": t.displayMode === "list" }]),
              title: A(H)("stockFilter.list_view"),
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
            ])], 10, dv)
          ])
        ])
      ]),
      t.loading ? (w(), F("div", fv, [
        n[7] || (n[7] = $("div", { class: "spinner" }, null, -1)),
        $("p", null, re(A(H)("actions.loading")) + "...", 1)
      ])) : t.totalResults === 0 ? (w(), F("div", hv, [
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
        $("p", pv, re(A(H)("stockFilter.no_results")), 1),
        t.hasActiveFilters ? (w(), F("button", {
          key: 0,
          type: "button",
          class: "clear-filters-btn",
          onClick: n[2] || (n[2] = (a) => s.$emit("clear-filters"))
        }, re(A(H)("stockFilter.clear_filters")), 1)) : se("", !0)
      ])) : (w(), F("div", {
        key: 2,
        class: je(["results-grid", { "results-grid--list": t.displayMode === "list" }])
      }, [
        Hs(s.$slots, "default", {}, void 0, !0)
      ], 2)),
      t.totalPages > 1 ? (w(), F("div", gv, [
        $("button", {
          type: "button",
          class: "pagination-btn",
          disabled: t.currentPage === 1,
          onClick: n[3] || (n[3] = (a) => s.$emit("go-to-page", t.currentPage - 1))
        }, re(A(H)("pagination.previous")), 9, mv),
        $("div", yv, [
          (w(!0), F(Be, null, Ke(i.value, (a) => (w(), F("button", {
            key: a,
            type: "button",
            class: je(["pagination-page", { "pagination-page--active": a === t.currentPage }]),
            onClick: (r) => s.$emit("go-to-page", a)
          }, re(a), 11, bv))), 128))
        ]),
        $("button", {
          type: "button",
          class: "pagination-btn",
          disabled: t.currentPage === t.totalPages,
          onClick: n[4] || (n[4] = (a) => s.$emit("go-to-page", t.currentPage + 1))
        }, re(A(H)("pagination.next")), 9, vv)
      ])) : se("", !0)
    ]));
  }
}), Sv = /* @__PURE__ */ Dt(wv, [["__scopeId", "data-v-cbba2130"]]), xv = {
  key: 0,
  class: "stock-filter-card__image"
}, kv = ["src", "alt"], Iv = { class: "stock-filter-card__content" }, Pv = { class: "stock-filter-card__title" }, Cv = { class: "stock-filter-card__specs" }, Av = { class: "spec" }, Tv = { class: "spec__label" }, Ov = { class: "spec__value" }, Lv = { class: "spec" }, Fv = { class: "spec__label" }, $v = { class: "spec__value" }, Dv = {
  key: 0,
  class: "spec"
}, Ev = { class: "spec__label" }, Mv = { class: "spec__value spec__value--color" }, Rv = {
  key: 1,
  class: "spec"
}, _v = { class: "spec__label" }, jv = { class: "spec__value" }, Bv = {
  key: 0,
  class: "stock-filter-card__description"
}, Vv = { class: "stock-filter-card__footer" }, Nv = {
  key: 0,
  class: "stock-filter-card__price"
}, Gv = { class: "price__label" }, qv = { class: "price__value" }, zv = ["disabled"], Wv = {
  key: 1,
  class: "stock-filter-card__lead-time"
}, Hv = /* @__PURE__ */ Ue({
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
    const i = t, s = e, n = ie(() => i.stock.available !== !1), a = ie(() => i.stock.cost ? i.formatPrice(i.stock.cost, i.locale) : "N/A"), r = ie(() => i.stock.color ? typeof i.stock.color == "object" && "hex" in i.stock.color ? i.stock.color.hex : typeof i.stock.color == "string" ? i.stock.color : "" : ""), o = ie(() => i.stock.color ? typeof i.stock.color == "object" && "name" in i.stock.color ? i.stock.color.name : typeof i.stock.color == "string" ? i.stock.color : "" : ""), l = ie(() => ({
      "--btn-color": i.buttonTextColor,
      "--btn-bg": i.buttonColor,
      "--btn-hover-bg": c(i.buttonColor, -8)
    }));
    function c(d, h) {
      const g = d.replace("#", ""), k = parseInt(g, 16), M = Math.round(2.55 * h), N = (k >> 16) + M, T = (k >> 8 & 255) + M, C = (k & 255) + M;
      return `#${(16777216 + (N < 255 ? N < 1 ? 0 : N : 255) * 65536 + (T < 255 ? T < 1 ? 0 : T : 255) * 256 + (C < 255 ? C < 1 ? 0 : C : 255)).toString(16).slice(1)}`;
    }
    function u() {
      s("toggle-selection", i.stock);
    }
    return (d, h) => (w(), F("div", {
      class: je(["stock-filter-card", {
        "stock-filter-card--selected": t.isSelected,
        "stock-filter-card--unavailable": !n.value
      }])
    }, [
      t.stock.imageUrl ? (w(), F("div", xv, [
        $("img", {
          src: t.stock.imageUrl,
          alt: t.stock.name || t.stock.name || t.stock.material,
          loading: "lazy"
        }, null, 8, kv)
      ])) : se("", !0),
      $("div", Iv, [
        $("h3", Pv, re(t.stock.name || t.stock.name || `${t.stock.material} ${t.stock.l}×${t.stock.w}`), 1),
        $("div", Cv, [
          $("div", Av, [
            $("span", Tv, re(A(H)("woodwork.material")) + ":", 1),
            $("span", Ov, re(t.stock.material || A(H)("general.na")), 1)
          ]),
          $("div", Lv, [
            $("span", Fv, re(A(H)("stockFilter.dimensions")) + ":", 1),
            $("span", $v, re(t.stock.l) + " × " + re(t.stock.w) + re(t.stock.t ? ` × ${t.stock.t}mm` : ""), 1)
          ]),
          t.stock.color ? (w(), F("div", Dv, [
            $("span", Ev, re(A(H)("fields.color")) + ":", 1),
            $("span", Mv, [
              $("span", {
                class: "color-swatch",
                style: ut({ backgroundColor: r.value })
              }, null, 4),
              ds(" " + re(o.value), 1)
            ])
          ])) : se("", !0),
          t.stock.weight ? (w(), F("div", Rv, [
            $("span", _v, re(A(H)("fields.weight")) + ":", 1),
            $("span", jv, re(t.stock.weight) + " kg", 1)
          ])) : se("", !0)
        ]),
        t.stock.description ? (w(), F("div", Bv, re(t.stock.description), 1)) : se("", !0),
        $("div", Vv, [
          t.stock.cost ? (w(), F("div", Nv, [
            $("span", Gv, re(A(H)("stockFilter.price")) + ":", 1),
            $("span", qv, re(a.value), 1)
          ])) : se("", !0),
          $("button", {
            type: "button",
            class: je(["stock-filter-card__btn", { "stock-filter-card__btn--selected": t.isSelected }]),
            style: ut(l.value),
            disabled: !n.value,
            onClick: u
          }, re(t.isSelected ? A(H)("stockFilter.remove") : n.value ? A(H)("stockFilter.select") : A(H)("stockFilter.unavailable")), 15, zv)
        ]),
        t.stock.leadTime ? (w(), F("div", Wv, re(A(H)("stockFilter.lead_time_days", [t.stock.leadTime])), 1)) : se("", !0)
      ])
    ], 2));
  }
}), Uv = /* @__PURE__ */ Dt(Hv, [["__scopeId", "data-v-e7d07bd6"]]), Yv = { class: "stock-filter" }, Kv = /* @__PURE__ */ Ue({
  __name: "StockFilter",
  props: {
    stockOptions: {
      type: Array,
      required: !0
    },
    config: {
      type: Object,
      default: () => wy()
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
      sortOrder: d,
      displayMode: h,
      currentPage: g,
      filteredStock: k,
      paginatedStock: M,
      selectedStock: N,
      totalPages: T,
      applyFilter: C,
      removeFilter: D,
      clearFilters: x,
      goToPage: L,
      toggleStockSelection: Y,
      isStockSelected: _,
      clearSelection: ce,
      createInputStock: z,
      getUniqueValues: y,
      getFieldRange: W
    } = Fc({
      stockOptions: a,
      config: r,
      numberFormat: o
    }), te = ie(() => s.config.availableFilters.filter((V) => {
      const q = y(V.field);
      return q.length > 0 && q.some((G) => G != null);
    }));
    ie(() => ({
      "--btn-color": s.colors.buttonText,
      "--btn-bg": s.colors.button,
      "--btn-hover-bg": J(s.colors.button, -8)
    }));
    function J(V, q) {
      const G = V.replace("#", ""), U = parseInt(G, 16), ne = Math.round(2.55 * q), Se = (U >> 16) + ne, me = (U >> 8 & 255) + ne, xe = (U & 255) + ne;
      return `#${(16777216 + (Se < 255 ? Se < 1 ? 0 : Se : 255) * 65536 + (me < 255 ? me < 1 ? 0 : me : 255) * 256 + (xe < 255 ? xe < 1 ? 0 : xe : 255)).toString(16).slice(1)}`;
    }
    function j(V) {
      const q = _(V);
      if (Y(V), q) {
        const G = z(V);
        n("stock-removed", G);
      } else {
        const G = z(V);
        n("stock-added", [G]);
      }
    }
    return e({
      applyFilter: C,
      removeFilter: D,
      clearFilters: x,
      clearSelection: ce,
      selectedStock: N,
      filteredStock: k,
      getUniqueValues: y,
      getFieldRange: W
    }), (V, q) => (w(), F("div", Yv, [
      t.config.enableSearch ? (w(), De(kb, {
        key: 0,
        modelValue: A(c),
        "onUpdate:modelValue": q[0] || (q[0] = (G) => Dn(c) ? c.value = G : null)
      }, null, 8, ["modelValue"])) : se("", !0),
      te.value.length > 0 ? (w(), De(Hb, {
        key: 1,
        "filter-configs": te.value,
        "active-filters": A(l),
        "get-unique-values": A(y),
        "get-field-range": A(W),
        onApplyFilter: A(C),
        onRemoveFilter: A(D),
        onClearFilters: A(x)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : se("", !0),
      t.config.sortOptions.length > 0 ? (w(), De(sv, {
        key: 2,
        "sort-by": A(u),
        "onUpdate:sortBy": q[1] || (q[1] = (G) => Dn(u) ? u.value = G : null),
        "sort-order": A(d),
        "onUpdate:sortOrder": q[2] || (q[2] = (G) => Dn(d) ? d.value = G : null),
        "available-fields": t.config.sortOptions
      }, null, 8, ["sort-by", "sort-order", "available-fields"])) : se("", !0),
      We(Sv, {
        "total-results": A(M).length,
        "display-mode": A(h),
        loading: t.loading,
        "has-active-filters": A(l).length > 0,
        "current-page": A(g),
        "total-pages": A(T),
        "onUpdate:displayMode": q[3] || (q[3] = (G) => h.value = G),
        onClearFilters: A(x),
        onGoToPage: A(L)
      }, {
        default: Oi(() => [
          (w(!0), F(Be, null, Ke(A(M), (G) => (w(), De(Uv, {
            key: G.id || `${G.material}-${G.l}-${G.w}-${G.t}`,
            stock: G,
            "is-selected": A(_)(G),
            "format-price": t.formatPrice,
            "button-color": t.colors.button,
            "button-text-color": t.colors.buttonText,
            locale: t.locale,
            onToggleSelection: j
          }, null, 8, ["stock", "is-selected", "format-price", "button-color", "button-text-color", "locale"]))), 128))
        ]),
        _: 1
      }, 8, ["total-results", "display-mode", "loading", "has-active-filters", "current-page", "total-pages", "onClearFilters", "onGoToPage"])
    ]));
  }
}), Zv = /* @__PURE__ */ Dt(Kv, [["__scopeId", "data-v-3d558ce6"]]), sS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Zv }, Symbol.toStringTag, { value: "Module" }));
export {
  ue as $,
  xd as A,
  Bs as B,
  K as C,
  dn as D,
  fn as E,
  ba as F,
  Fe as G,
  ze as H,
  Fs as I,
  cu as J,
  va as K,
  hn as L,
  xa as M,
  Zd as N,
  _s as O,
  un as P,
  Ti as Q,
  Aa as R,
  Bo as S,
  Kt as T,
  vi as U,
  Do as V,
  le as W,
  Oa as X,
  wi as Y,
  rw as Z,
  tn as _,
  dr as a,
  Fh as a$,
  Ww as a0,
  Je as a1,
  Bt as a2,
  Mw as a3,
  Ow as a4,
  he as a5,
  hf as a6,
  ri as a7,
  qi as a8,
  an as a9,
  co as aA,
  pt as aB,
  Ft as aC,
  vf as aD,
  fo as aE,
  Kh as aF,
  Gw as aG,
  Ci as aH,
  Nw as aI,
  Zw as aJ,
  Fw as aK,
  Ah as aL,
  Kw as aM,
  wn as aN,
  Xo as aO,
  Oe as aP,
  Fo as aQ,
  Ch as aR,
  ho as aS,
  pr as aT,
  Uw as aU,
  Yw as aV,
  hw as aW,
  Dh as aX,
  Eh as aY,
  dt as aZ,
  ui as a_,
  fw as aa,
  ft as ab,
  xt as ac,
  Qe as ad,
  ld as ae,
  La as af,
  Hw as ag,
  $w as ah,
  uo as ai,
  Zh as aj,
  Ih as ak,
  ii as al,
  Lw as am,
  Ki as an,
  Dw as ao,
  jw as ap,
  Bw as aq,
  Ew as ar,
  Pu as as,
  Tu as at,
  Du as au,
  cw as av,
  Tw as aw,
  lw as ax,
  Aw as ay,
  ws as az,
  jo as b,
  Ko as b0,
  Jw as b1,
  Kn as b2,
  en as b3,
  $a as b4,
  zw as b5,
  pw as b6,
  at as b7,
  Rw as b8,
  Ro as b9,
  ju as bA,
  ar as bB,
  rr as bC,
  wy as bD,
  Qw as bE,
  Xw as bF,
  Ea as bG,
  tS as bH,
  iS as bI,
  sS as bJ,
  _w as ba,
  qw as bb,
  Vw as bc,
  wh as bd,
  ow as be,
  bn as bf,
  vn as bg,
  _t as bh,
  Hi as bi,
  st as bj,
  Lt as bk,
  sn as bl,
  Ut as bm,
  si as bn,
  cs as bo,
  qo as bp,
  fh as bq,
  mi as br,
  Dt as bs,
  oi as bt,
  bt as bu,
  bw as bv,
  tl as bw,
  gi as bx,
  eS as by,
  uw as bz,
  yw as c,
  gw as d,
  _o as e,
  mw as f,
  ia as g,
  Ii as h,
  Ur as i,
  Zi as j,
  th as k,
  ww as l,
  Iw as m,
  kw as n,
  Sw as o,
  ih as p,
  Pw as q,
  xw as r,
  vw as s,
  H as t,
  dw as u,
  pf as v,
  Cw as w,
  Zt as x,
  Yi as y,
  Re as z
};

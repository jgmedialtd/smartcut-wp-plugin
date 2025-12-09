import { i as Yr, B as ac } from "./vendor-i18next-CacwiV0i.js";
import { r as le, t as Bn, c as ne, n as bt, w as Ue, d as Ye, a as F, o as w, F as Ve, b as Qe, e as ht, f as Re, g as L, h as ws, i as oe, v as gn, j as Tt, k as ti, u as Kr, l as rc, m as oc, p as Ss, q as De, s as I, x as ae, y as Js, T as va, z as Zr, A as lc, B as Fi, C as $i, D as Xs, E as Kt, G as Ci, H as He, I as cc, J as Jr, K as hs, L as uc, M as dc, N as qi, O as ir, P as fc, Q as hc, R as pc, S as gc, U as mc, V as yc, W as bc, X as Nn } from "./vendor-vue-WkZl1F8L.js";
import { _ as Te, o as j, a as ie, s as p, n as f, b as R, c as ve, r as Se, u as xe, d as gi, z as vc, Z as Gn, e as wc, l as Ce, p as Bt, f as ta, g as Sc, h as xc, m as kc, i as zi, j as Ic, k as Pc, q as Cc, t as Ac, v as Tc, w as Oc, x as sr, y as Lc } from "./vendor-zod-PVURV34D.js";
import { g as Ze, h as Fc, s as $c } from "./vendor-lodash-CYGhmG8H.js";
import { u as rs, s as nr, g as Dc, v as Ec, a as wa, b as Mc, c as _c, d as Rc, e as jc, f as mn, h as Vc, i as Bc, j as Nc, k as Gc, l as qc } from "./composables-r8dnnDRW.js";
import { a as Xr, b as Qr, l as jt, c as Qs, d as en, s as mt, r as Zt, e as ps, f as eo, g as zc, h as Wc, i as Hc, p as Uc, S as Yc, j as Kc, k as Zc } from "./vendor-d3-DUCHe88K.js";
import { c as to, P as Jc } from "./vendor-tCV_BFOF.js";
import { o as Xc, f as Qc, s as eu, a as tu } from "./vendor-floating-ui-DZfk4g77.js";
import { F as ms } from "./vendor-fraction-3H9P8ENz.js";
function ui() {
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
function io() {
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
function so() {
  return typeof globalVariables < "u" || typeof globalThis.__runtimeVersion < "u" || typeof window < "u" && typeof window.__runtimeVersion < "u";
}
const Ow = {
  INVALID_TYPE: "errors.validation.zod.invalid_type",
  TOO_SMALL: "errors.validation.zod.too_small",
  TOO_BIG: "errors.validation.zod.too_big",
  INVALID_STRING: "errors.validation.zod.invalid_string",
  INVALID_ENUM: "errors.validation.zod.invalid_enum",
  REQUIRED: "errors.validation.not_set",
  CUSTOM: "errors.validation.zod.custom"
}, _t = {
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
}, qn = {
  field_required: _t.FIELD_REQUIRED,
  invalid_number: _t.INVALID_NUMBER,
  invalid_decimal: _t.INVALID_DECIMAL,
  invalid_fraction: _t.INVALID_FRACTION,
  invalid_fraction_chars: _t.INVALID_FRACTION_CHARS,
  invalid_fraction_format: _t.INVALID_FRACTION_FORMAT,
  invalid_format: _t.INVALID_FORMAT,
  above_max: _t.ABOVE_MAX,
  below_min: _t.BELOW_MIN,
  zero_not_allowed: _t.ZERO_NOT_ALLOWED,
  division_by_zero: _t.DIVISION_BY_ZERO
};
function iu(t) {
  if (t in qn) {
    const e = t;
    return ui() && console.warn(`[Validation] Using legacy validation key "${t}". Please migrate to "${qn[e]}"`), qn[e];
  }
  return t;
}
const no = Te(["error", "warning"]), ao = Te(["saw", "stock", "part", "group", "machining", "extras"]);
j({
  message: p(),
  identifier: p(),
  field: ie(ie(p())),
  index: ie(f()),
  id: p(),
  // Source object's autoId for linking back
  type: no,
  category: ie(ao)
});
const su = j({
  item: ve().nullable().default(null),
  message: p().default(""),
  params: Se(p(), xe([p(), f(), R(), gi()])).optional(),
  // Translation parameters
  field: ie(ie(p())).default([]),
  index: ie(f()).nullable().default(null),
  id: p().nullable().default(null),
  // Source object's autoId
  issues: ie(ve()).nullable().default(null),
  // Will be Issue[] at runtime
  type: no.default("error"),
  category: ie(ao).nullable().default(null),
  throwError: R().default(!1),
  shouldTranslate: R().default(!0)
}), nu = ["lr", "rl", "bt", "tb"];
j({
  x1: f(),
  x2: f(),
  y1: f(),
  y2: f(),
  dimension: Te(["l", "w"]).optional(),
  shapeCollisions: ie(ve()).optional()
});
j({
  id: p().nullable().optional(),
  x1: f(),
  x2: f(),
  y1: f(),
  y2: f(),
  origin: p().optional(),
  dimension: Te(["l", "w"]).optional(),
  direction: Te(nu).nullable().optional(),
  type: p().nullable().optional()
});
const au = j({
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
  shapeCollisions: ie(ve()).default([]),
  // ========== Validation ==========
  // Validation issues found with this line
  issues: ie(ve()).default([])
}), ru = {
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
}, ro = /* @__PURE__ */ new Map();
function xs() {
  return ro;
}
function Lw(t, e) {
  ro.set(t, e);
}
function yn(t, e) {
  const i = t, s = i._fieldBehavior?.fieldBehavior || {};
  return i._fieldBehavior = {
    fieldBehavior: {
      ...s,
      ...e
    }
  }, i;
}
function ia(t) {
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
function os(t) {
  const e = {};
  if (t instanceof wc) {
    const i = t.shape;
    for (const [s, n] of Object.entries(i)) {
      const a = ia(n);
      a && (e[s] = a);
    }
  }
  if (t._def && t._def.shape) {
    const i = t._def.shape;
    for (const [s, n] of Object.entries(i)) {
      const a = ia(n);
      a && (e[s] = a);
    }
  }
  return e;
}
typeof vc < "u" && Gn && Gn.prototype && (Gn.prototype.behavior = function(t) {
  return yn(this, t);
});
function $e(t, e = {}) {
  let s = ve().refine((r) => r == null ? !0 : typeof r == "object" && r !== null ? ("autoId" in r || "id" in r, !0) : !1, {
    message: `Invalid reference to ${t}`
  }).transform((r) => {
    if (r == null || typeof r == "object" && r !== null && typeof r.getType == "function" || typeof r == "object" && r !== null && r.__ref === !0)
      return r;
    if (typeof r == "object" && r !== null && !r.__ref)
      try {
        const o = xs(), l = r.__entityType || t, c = o.get(l);
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
  return n = yn(n, a), Object.defineProperty(n, "__zRefClassName", {
    value: t,
    enumerable: !1,
    writable: !1,
    configurable: !1
  }), n;
}
function We(t, e = {}) {
  let i = ie($e(t)).default([]).describe(
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
  return i = yn(i, s), i;
}
function Gs(t, e = {}) {
  const i = t.map((a) => $e(a));
  let s = ie(xe(i)).default([]).describe(
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
  return s = yn(s, n), s;
}
const ar = ["topLeft", "topRight", "bottomLeft", "bottomRight"], ou = [
  "left",
  "centre",
  "right",
  "top",
  "bottom",
  "topLeft",
  "topRight",
  "bottomLeft",
  "bottomRight"
], lu = ["lr", "rl", "bt", "tb"], cu = j({
  // ========== Coordinates ==========
  x: f().default(0),
  y: f().default(0),
  z: f().default(0),
  // ========== Shape References ==========
  a: p().optional(),
  b: p().optional(),
  stock: $e("Stock", { nullable: !0 }).optional(),
  // ========== Direction and Positioning ==========
  direction: Te(lu).nullable().optional(),
  type: p().optional(),
  corner: Te(ar).optional(),
  shapePosition: Te(ar).optional(),
  grid: Te(ou).optional(),
  // ========== Collision and Raycast Flags ==========
  raycast: R().default(!1),
  collision: R().default(!1),
  tooClose: R().default(!1),
  adjustedForMinSpacing: R().default(!1)
}), uu = {
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
}, oo = p().default("").describe('Unique identifier (e.g., "1.0" for shapes/stock, "g1" for groups, "ss-1_a2b3" for segments, "1.0-proximity" for proximity rectangles)'), du = p().max(200).default("").describe("User input name"), fu = p().default("").describe("Parent identifier for tracking copies and relationships"), hu = R().default(!1).describe("Prevent automatic rotation optimization"), pu = R().default(!1).describe("Whether this is an offcut piece"), lo = ie(p()).default([]).describe("IDs of identical items").behavior({ clone: "copy" }), Ji = xe([
  Ce(""),
  Ce("l"),
  Ce("w"),
  Ce(" ").transform(() => ""),
  gi().transform(() => "")
]).default("").describe("Grain direction of the material"), co = xe([
  // String format (legacy support - color name or hex)
  p(),
  // Object format with hex and name
  j({
    hex: p().regex(/^#[0-9A-Fa-f]{6}$/, "Must be valid hex color (#RRGGBB)"),
    name: p().min(1)
  })
]).optional().describe("Material color (hex code + name or legacy string)"), uo = Bt(
  (t) => t === null || t === " " || t === "n" || t === "none" || !["", "l", "w"].includes(t) ? "" : t,
  Te(["", "l", "w"]).default("").describe("Orientation lock for rotation constraints")
), gu = j({
  l1: f().default(0).describe("Long side 1 trim value"),
  l2: f().default(0).describe("Long side 2 trim value"),
  w1: f().default(0).describe("Short side 1 trim value"),
  w2: f().default(0).describe("Short side 2 trim value")
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 });
j({
  material: R(),
  thickness: R(),
  fit: R(),
  width: R()
}).nullable().default(null);
xe([
  Ce(""),
  Ce("l"),
  Ce("w"),
  gi()
]).default(null);
Se(p(), f()).nullable().default(null);
Se(p(), f()).nullable().default(null);
const Sa = xe([
  Ce(0),
  Ce(1)
]), mu = j({
  dimension: f().describe("Dimension of the strip shape batch"),
  rot: Sa.describe("Rotation: 0 (no rotation) or 1 (90 degrees)"),
  order: f().optional().describe("Order of the batch"),
  id: p().optional().describe("Batch ID"),
  stockId: p().optional().describe("Associated stock ID"),
  rerunning: R().optional().describe("Whether the batch is being rerun"),
  priorityShape: p().nullable().describe("Priority shape identifier (null if none specified)")
});
j({
  subsetUsed: R().optional().describe("Whether a subset was used for strip shape batches"),
  groups: Se(p(), mu).describe("Groups of strip shape batches keyed by ID")
});
const yu = Te(["none", "schema", "business", "full"]), Ht = j({
  // Validation issues (errors) - uses zRefArray to avoid type duplication across modules
  issues: We("Issue", {
    description: "Validation issues (errors)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Validation warnings (non-critical issues) - uses zRefArray to avoid type duplication
  warnings: We("Issue", {
    description: "Validation warnings (non-critical)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Legacy flag to skip validation (backward compatibility)
  skipValidation: R().optional(),
  // New validation control properties
  skipSchemaValidation: R().optional(),
  skipBusinessValidation: R().optional(),
  validationMode: yu.optional(),
  enableStrictMode: R().optional()
}), mi = {
  // Check if valid (no errors)
  isValid: {
    compute: (t) => (t.issues || []).filter((i) => i.type === "error").length === 0,
    cache: !0,
    dependencies: ["issues"],
    returnType: "boolean"
  }
};
function bu(t) {
  if (!t) return "";
  const e = t.indexOf(".");
  return e === -1 ? t : t.substring(0, e);
}
const xa = Ht.extend({
  // Identity
  id: oo,
  // Description
  name: du,
  // Dimensions
  l: Bt((t) => typeof t == "number" && !isFinite(t) ? 1 : t ?? 1, f().positive()).describe("Length (long side dimension)"),
  w: Bt((t) => typeof t == "number" && !isFinite(t) ? 1 : t ?? 1, f().positive()).describe("Width (short side dimension)"),
  t: f().positive().nullable().optional().describe("Thickness (z-axis dimension)"),
  q: f().positive().int().default(1).describe("Quantity"),
  // Calculated dimensions (computed once on init for performance)
  area: f().positive().default(1).describe("Calculated area (l * w)"),
  longSide: f().positive().default(1).describe("Calculated long side Math.max(l, w)"),
  shortSide: f().positive().default(1).describe("Calculated short side Math.min(l, w)"),
  parentId: p().default("").describe("Parent ID extracted from id (integer part before decimal)"),
  // Flags
  duplicate: R().default(!1).describe("Whether this is a duplicate"),
  offcut: pu,
  // Grain
  grain: Ji,
  preventGrainRotation: R().default(!1).describe("Prevent rotation that would change grain direction"),
  // Orientation
  preventAutoRotation: hu,
  orientationLock: uo,
  // Position (reset during cloning - cloned shapes should not have preset positions)
  x: f().nullable().default(null).describe("X coordinate position").behavior({ clone: "reset" }),
  y: f().nullable().default(null).describe("Y coordinate position").behavior({ clone: "reset" }),
  // Stock matching
  material: p().max(200).default("").transform((t) => t ? t.trim().toLowerCase() : "").describe("Material name"),
  // Trim
  trim: gu.describe("Reduce the dimensions by specified trim values"),
  trimmed: R().default(!1).describe("Whether trim has been applied to dimensions"),
  // Proximity data (excluded from compression)
  proximity: j({
    rectangle: $e("Rectangle").nullable().default(null),
    // Using 'any' to avoid circular import
    distance: f().nullable().default(null)
  }).default({ rectangle: null, distance: null }).behavior({ compress: "exclude" }),
  // Other properties
  cost: f().min(0).nullable().default(0).describe("Cost per unit"),
  customData: Se(p(), ve()).default({}).describe("Custom user-defined data"),
  identicalTo: lo,
  notes: p().max(500).default("").transform((t) => typeof t == "string" && t.length ? t.replace(/,/g, "").substring(0, 200) : "").describe("Description")
}), ka = {
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
    compute: (t) => t.trim?.l1 !== void 0 && t.trim.l1 !== 0 || t.trim?.l2 !== void 0 && t.trim.l2 !== 0 || t.trim?.w1 !== void 0 && t.trim.w1 !== 0 || t.trim?.w2 !== void 0 && t.trim.w2 !== 0
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
}, vu = ["x", "y"];
Te(vu);
const wu = ["l", "w"];
Te(wu);
const Su = ["l", "w"], Pi = Te(Su);
xe([
  Ce(0),
  Ce(1),
  Ce(2)
]);
xe([
  Ce(0),
  Ce(1),
  gi()
]);
const xu = ["sheet", "linear", "roll"], bn = Bt(
  // Normalize to lowercase before validation
  (t) => typeof t == "string" ? t.toLowerCase() : t,
  xe([
    Te(xu),
    gi()
  ]).nullable().default(null)
).describe("Type of stock material"), fo = j({
  // Infinite length flag for rolls and other continuous stock
  infiniteLength: R().default(!1).describe("Whether stock has infinite length (e.g., for rolls)"),
  // Allow shapes that exactly fit the stock dimensions
  allowExactFitShapes: R().default(!1).describe("Allow shapes that exactly fit"),
  // Automatically add stock as needed
  autoAdd: R().default(!1).describe("Automatically add stock as needed")
}), Ia = xa.extend({
  // Identity - override id to be required for containers
  id: p().default("").describe("Unique identifier for containers (required for Stock and Segment)"),
  // Parent identifier for tracking copies
  parentId: fu,
  // Container-specific fields
  stockType: bn,
  // Array of shapes or groups (excluded from compression - runtime only)
  shapes: Gs(["Shape", "Group"], {
    description: "Array of Shape or Group objects contained within this container"
  }).behavior({ clone: "reset", compress: "exclude" }),
  // Saw reference - using zRef for define.ref<Saw>('Saw') (share exact instance during cloning, serialize as reference)
  saw: $e("Saw", {
    nullable: !0,
    description: "Reference to Saw class"
  }).behavior({ clone: "share", compress: "reference" }),
  // Algorithm benchmark results (reset during cloning)
  algoBenchmark: ve().optional().describe("Benchmark results from optimization algorithms").behavior({ clone: "reset" }),
  // Container flag
  isContainer: R().default(!0).describe("Flag indicating this is a container")
}), Pa = {
  // Include all Rectangle computed properties
  ...ka,
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
Ia.describe(JSON.stringify({
  name: "Container",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(Pa)
}));
const ku = j({
  dimension: f().describe("Dimension of the strip shape batch"),
  rot: xe([
    Ce(0),
    Ce(1)
  ]).describe("Rotation"),
  order: f().optional().describe("Order of the batch"),
  id: p().optional().describe("Batch ID"),
  stockId: p().optional().describe("Associated stock ID"),
  rerunning: R().optional().describe("Whether the batch is being rerun"),
  priorityShape: p().nullable().describe("Priority shape identifier (null if none specified)")
}), ho = j({
  // Strip direction
  myStripDirection: Pi.optional(),
  // Strip parent (can be shape or group)
  myStripParent: xe([
    $e("Shape", { nullable: !0 }),
    $e("Group", { nullable: !0 })
  ]).default(null).describe("Parent strip shape or group for guillotine optimization").behavior({
    serialize: "reference",
    compress: "reference",
    clone: "share"
  }),
  // Phase number
  myPhase: f().int().min(0).optional().describe("Phase of the strip this shape belongs to"),
  // Strip shape batches optimization data
  stripShapeBatches: j({
    subsetUsed: R().optional().describe("Whether a subset was used for strip shape batches"),
    groups: Se(p(), ku).default({}).describe("Groups of strip shape batches keyed by ID")
  }).default({ groups: {} }).describe("Strip shape batch optimization data")
});
ho.describe(JSON.stringify({
  name: "GuillotineState",
  version: "1.0.0"
}));
const Iu = {}, Pu = j({
  fill: f().default(0),
  similarDimensions: f().default(0),
  compression: f().default(0),
  cohesion: f().default(0),
  area: f().default(0),
  edge: f().default(0),
  alignment: f().default(0),
  exactFit: f().default(0),
  total: f().default(0),
  shapes: xe([
    $e("Shape", { nullable: !0 }),
    $e("Group", { nullable: !0 })
  ]).optional(),
  group: $e("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
  cutDirection: Pi.optional()
}).behavior({ clone: "reset" }), Cu = j({
  exactStripFill: f().default(0),
  fill: f().default(0),
  cohesion: f().default(0),
  fenceConsistency: f().default(0),
  similarDimensions: f().default(0),
  compression: f().default(0),
  sameStripBonus: f().default(0),
  aspectRatio: f().optional(),
  total: f().default(0),
  cutDirection: Pi,
  myStripDirection: Pi.optional(),
  myStripParent: xe([
    $e("Shape", { nullable: !0 }),
    $e("Group", { nullable: !0 })
  ]).optional().describe("Parent strip shape or group for guillotine optimization"),
  myPhase: f().optional()
}).behavior({ clone: "reset" }), rr = xe([
  Pu,
  Cu,
  // Also support the generic object with catchall for backward compatibility
  j({
    cutDirection: Pi.optional(),
    myStripParent: xe([
      $e("Shape", { nullable: !0 }),
      $e("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group"),
    myStripDirection: Pi.optional()
  }).catchall(f())
]).behavior({ clone: "reset" }), ks = xa.extend({
  // Stock lock (shared schema) - original was stockLock: define.array(define.string())
  stockLock: ie(p()).default([]).describe("Stock lock configuration"),
  // Stock matching - original object structure
  stockMatch: j({
    material: R(),
    thickness: R(),
    fit: R(),
    width: R()
  }).nullish().describe("Matching stock information"),
  // Guillotine state - reference that will be initialized in constructor (reset during cloning)
  // This ensures guillotineState is always a proper GuillotineState instance with methods
  guillotineState: $e("GuillotineState", {
    nullable: !0,
    // Nullable in schema but always initialized in constructor
    description: "Data for guillotine cutting optimization (always initialized as instance)"
  }).nullable().default(null).behavior({
    clone: "unique",
    serialize: ui() ? "full" : "exclude",
    compress: ui() ? "full" : "exclude"
    // Consistent with serialize behavior
  }),
  // Priority and weighting (records) - exact match from original
  priority: Se(p(), f()).default({}).describe("Priority levels for optimization"),
  weighting: Se(p(), f()).optional().describe("Shape weighting for optimization"),
  // Pattern matching for stack detection (reset during cloning)
  patternMatch: R().default(!1).describe("Used for stack detection").behavior({ clone: "reset" }),
  firstShape: j({
    sampleRotations: ie(f().int().min(0).max(1)).default([]).describe("Sample rotations (0 or 1) for first shape optimization").behavior({ clone: "reset" }),
    isFirstShape: R().default(!1).describe("Whether this is the first shape in optimization").behavior({ clone: "reset" })
  }).default({ sampleRotations: [], isFirstShape: !1 }),
  // Placement properties (reset during cloning)
  added: R().default(!1).describe("Whether shape has been added to a stock").behavior({ clone: "reset" }),
  placementOrder: f().int().min(0).optional().describe("Order in which shape was placed").behavior({ clone: "reset" }),
  // Stock reference (reset during cloning - cloned shapes should not be pre-placed)
  stock: $e("Stock", {
    nullable: !0,
    description: "Reference to the stock this item is placed on"
  }).behavior({ clone: "reset" }),
  // Stock fitting data
  fitsStock: Se(
    p(),
    Se(p(), R())
  ).nullable().default(null).describe("Information about which stocks this shape fits"),
  // Scoring properties
  bestScore: j({
    x: f().nullable().default(null),
    y: f().nullable().default(null),
    rot: xe([Ce(0), Ce(1)]).nullable().default(null),
    total: f().nullable().default(null),
    weighting: Se(p(), f()).optional(),
    group: $e("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
    score: rr.optional(),
    point: ve().optional().describe("Associated point for placement"),
    myStripParent: xe([
      $e("Shape", { nullable: !0 }),
      $e("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group for this score"),
    cutDirection: Pi.optional(),
    myStripDirection: Pi.optional(),
    stock: $e("Stock", {
      nullable: !0,
      description: "Stock reference for this score"
    })
  }).nullable().default(null).optional().describe("Best optimization score achieved").behavior({
    clone: "reset",
    serialize: ui() ? "full" : "exclude"
    // Retain in development mode for debugging
  }),
  // Current optimization score (can be efficiency or guillotine type, reset during cloning)
  score: rr.nullable().optional().describe("Current optimization score").behavior({
    clone: "reset",
    serialize: "exclude"
    // Always exclude - transient optimization data
  })
}), Is = {
  // Include all Rectangle computed properties
  ...ka
  // Placeable doesn't define additional computed properties
};
ks.describe(JSON.stringify({
  name: "Placeable",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(Is)
}));
const po = ["horizontal", "vertical"], go = ["position", "user", "strip", "firstShape"], Ca = Te(po).optional(), Au = j({
  x: f(),
  y: f(),
  autoId: p().optional(),
  rot: Sa
}), Tu = ks.extend({
  // Override quantity - always 1 for groups
  q: f().min(1).max(1).int().default(1),
  // Groups have fixed orientation
  preventAutoRotation: R().default(!0),
  // Group-specific fields
  shapes: We("Shape").default([]),
  direction: Ca,
  container: xe([
    $e("Segment"),
    $e("Stock")
  ]).behavior({ compress: "exclude" }),
  positions: ie(Au).default([]),
  type: Te(go).default("position"),
  efficiency: f().min(0).max(100).default(0),
  groupLength: f().min(0).default(0),
  groupWidth: f().min(0).default(0),
  outOfBounds: R().default(!1),
  collision: R().default(!1),
  counter: f().int().min(0).default(0),
  inputId: p().optional()
}), Ou = {
  ...Is,
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
  x: f(),
  y: f(),
  shapes: We("Shape"),
  direction: Te(po),
  type: Te(go),
  container: xe([
    $e("Segment"),
    $e("Stock")
  ]).optional()
});
const Lu = ["l", "w"], Fu = ks.extend({
  // Identity - offcuts need IDs for tracking and export
  id: p().default(""),
  // Note: offcut property is inherited from Rectangle schema (boolean default false)
  // The Offcut constructor ensures it's always true
  // Offcut-specific fields
  addToInventory: R().default(!1),
  flex: Te(Lu).optional(),
  // Cost is calculated, not set
  cost: f().min(0).nullable().default(0)
}), Fw = {
  ...Is,
  // Include parent computed properties
  // Check if offcut has been added
  hasBeenAdded: {
    compute: (t) => t.added === !0,
    metadata: {
      cache: !1,
      dependencies: [],
      // added is inherited from Placeable
      returnType: "boolean"
    }
  },
  // Get flex direction (alias for flex property)
  flexDirection: {
    compute: (t) => t.flex,
    metadata: {
      cache: !1,
      dependencies: ["flex"],
      returnType: "string | undefined"
    }
  },
  // Calculate utilization percentage
  utilization: {
    compute: (t) => t.added ? 100 : t.addToInventory ? 50 : 0,
    metadata: {
      cache: !1,
      dependencies: ["addToInventory"],
      // added is inherited from Placeable
      returnType: "number"
    }
  }
}, mo = ie(p()).default([]).describe("Parent IDs of stock(s) this shape is locked to"), $u = Te(["l", "w"]).nullable().default(null), yo = xe([
  Ce("l"),
  Ce("w"),
  gi()
]).default(null), Du = j({
  stockId: p().optional(),
  material: p().optional(),
  thickness: f().optional(),
  grain: Ji.optional()
}).describe("Which stock(s) this shape is a match for "), bo = Se(p(), ve()).default({});
mo.describe("IDs of stocks this shape is locked to");
const Eu = yo.describe("Direction that should face up");
j({
  /**
   * Up direction - Direction that should face up during optimization
   */
  upDirection: Eu
});
const Mu = j({
  // Whether shape is in a user-defined group
  inUserGroup: R().default(!1).describe("Whether shape is in a user-defined group"),
  // Whether shape is in any group
  inGroup: R().default(!1).describe("Whether shape is currently in a group"),
  // Placement order within group
  placementOrder: f().int().min(0).optional().describe("Placement order within group"),
  // Group reference (the actual Group class instance)
  reference: $e("Group", {
    nullable: !0,
    description: "Group this shape belongs to"
  }).optional().behavior({ clone: "reset", compress: "reference" }),
  // Group this was added as part of (preserved during serialization as reference)
  addedAsGroup: $e("Group", {
    nullable: !0,
    description: "Group this was added as part of"
  }).optional().behavior({ clone: "reset", compress: "reference" })
}).default({
  inUserGroup: !1,
  inGroup: !1,
  placementOrder: void 0,
  reference: null,
  addedAsGroup: null
}).describe("Group metadata and reference"), ys = ks.extend({
  // ========== Group Metadata ==========
  // Nested object containing all group-related properties
  group: Mu,
  // ========== Identity ==========
  // Unique identifier for referencing items (required for shapes)
  id: p().default("").describe("Unique identifier for referencing items"),
  // Array of IDs this shape is identical to
  identicalTo: lo,
  // Whether this is a duplicate
  duplicate: R().default(!1).describe("Whether this is a duplicate shape"),
  // ========== Orientation ==========
  // Direction that should face up during optimization
  upDirection: $u.describe("Direction that should face up"),
  // ========== Extras ==========
  // Extras container for banding, finish, planing, etc.
  // Override default reference behavior to preserve full data in compressed mode
  extras: $e("Extras", {
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
  machining: $e("Machining", {
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
}), vo = {
  // Include all Placeable computed properties
  ...Is,
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
ys.describe(JSON.stringify({
  name: "Shape",
  description: "Shape to be cut from stock material",
  version: "1.0.0",
  extends: "Placeable",
  computedProperties: Object.keys(vo)
}));
const _u = j({
  // Internal-only fields (not exposed in API)
  fitsAll: R().default(!1),
  fitsAny: R().default(!1),
  largestShape: ve().nullable(),
  smallestShape: ve().nullable(),
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
}), Ru = j({
  stock: $e("Stock", { nullable: !0 }).optional(),
  number: f().int().min(1).optional()
}), tn = j({
  ...Ia.shape,
  ...fo.shape,
  // Override x and y to default to 0 for Stock (containers are positioned at origin)
  x: f().nullable().default(0).describe("X coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  y: f().nullable().default(0).describe("Y coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  // Stock analysis results
  analysis: _u.optional().behavior({ clone: "reset" }),
  // Automatically add stock as needed during optimization
  autoAdd: R().optional().describe("Automatically add stock as needed during optimization"),
  // Pattern for identifying duplicate stock sheets
  duplicatePattern: p().default("").describe("Pattern for identifying duplicate stock sheets"),
  // Root segment for guillotine cutting (excluded from compression, reset during cloning)
  rootSegment: $e("Segment", {
    nullable: !0
  }).optional().behavior({ clone: "reset", compress: "exclude" }),
  // Optimization score (excluded from compression, reset during cloning)
  score: ve().nullable().default(null).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stack information (reset during cloning - cloned stocks start fresh)
  stack: Ru.optional().describe("Stack information").behavior({ clone: "reset" }),
  // Whether the stock layout has been tidied (excluded from compression, reset during cloning)
  tidy: R().default(!1).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stock type (sheet, linear, roll) - inherited from shared stockType
  type: Te(["sheet", "linear", "roll"]).optional().describe("Type of stock material"),
  // Original length before cropping (for rolls)
  originalLength: f().positive().optional().describe("Original length before cropping (for rolls)"),
  // Whether this stock is unusable for optimization
  unusable: R().default(!1).describe("Whether this stock is unusable for optimization"),
  // Whether this stock has been used in the optimization (reset during cloning)
  used: R().default(!1).describe("Whether this stock has been used in the optimization").behavior({ clone: "reset" }),
  // The optimization strategy that selected this stock (reset during cloning)
  winningStrategy: p().optional().describe("The optimization strategy that selected this stock").behavior({ clone: "reset" }),
  // Display and filtering properties
  color: co.describe('Material color ({ hex: "#FF5733", name: "Red" } or legacy string)'),
  weight: f().positive().optional().describe("Weight"),
  imageUrl: p().url().optional().describe("Image URL for stock display"),
  tags: ie(p()).optional().describe("Tags for categorizing stock"),
  available: R().default(!0).describe("Whether the stock is available")
}), wo = {
  // Include all Container computed properties
  ...Pa,
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
tn.describe(JSON.stringify({
  name: "Stock",
  description: "Stock material for cutting optimization",
  version: "1.0.0",
  extends: "Container",
  computedProperties: Object.keys(wo)
}));
var J = /* @__PURE__ */ ((t) => (t.InputRectangle = "inputRectangle", t.InputShape = "inputShape", t.InputStock = "inputStock", t.InputUserGroup = "inputUserGroup", t.InputSaw = "inputSaw", t.Rectangle = "rectangle", t.Container = "container", t.Saw = "saw", t.Shape = "shape", t.Stock = "stock", t.Group = "group", t.UserGroup = "userGroup", t.StripGroup = "stripGroup", t.FirstShapeGroup = "firstShapeGroup", t.Segment = "segment", t.Offcut = "offcut", t.Cut = "cut", t.Line = "line", t.Placeable = "placeable", t.GuillotineState = "guillotineState", t.Point = "point", t.PointCollection = "pointCollection", t.Optimiser = "optimiser", t.Machining = "machining", t.Extras = "extras", t.Issue = "issue", t))(J || {}), ju = /* @__PURE__ */ ((t) => (t.Full = "full", t.Compressed = "compressed", t))(ju || {});
const Vu = /* @__PURE__ */ new Set([
  J.Container,
  J.Stock,
  J.Segment
]), Bu = /* @__PURE__ */ new Set([
  J.Rectangle,
  J.Container,
  J.Stock,
  J.Segment,
  J.Placeable,
  J.Shape,
  J.Group,
  J.UserGroup,
  J.StripGroup,
  J.FirstShapeGroup,
  J.Offcut
]), Nu = /* @__PURE__ */ new Set([
  J.Placeable,
  J.Shape,
  J.Group,
  J.UserGroup,
  J.StripGroup,
  J.FirstShapeGroup,
  J.Offcut
]);
J.InputRectangle, J.InputShape, J.InputStock;
class ct {
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
      const l = r.constructor?.name === i, u = "getType" in r && typeof r.getType == "function" && r.getType() === e, h = l || u, d = s ? s(r) : !0;
      return h && d;
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
const Gu = ct.create(J.Cut, "Cut"), gt = ct.create(
  J.Shape,
  "Shape",
  (t) => !("shapes" in t)
), Nt = ct.create(J.Stock, "Stock"), So = ct.create(
  J.Group,
  "Group",
  (t) => "shapes" in t && Array.isArray(t.shapes) && t.type !== "user" && t.type !== "strip"
), Ps = ct.create(
  J.UserGroup,
  "Group",
  (t) => "shapes" in t && t.type === "user"
), xo = ct.create(
  J.StripGroup,
  "Group",
  (t) => "shapes" in t && t.type === "strip"
), ko = ct.create(
  J.FirstShapeGroup,
  "Group",
  (t) => "shapes" in t && t.type === "firstShape"
), it = (t) => So(t) || Ps(t) || xo(t) || ko(t), Jt = ct.create(
  J.InputUserGroup,
  "InputUserGroup"
), Ui = ct.create(J.Segment, "Segment"), qu = ct.create(J.Offcut, "Offcut"), zu = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t._type;
  if (e && Vu.has(e)) return !0;
  let i = Object.getPrototypeOf(t);
  for (; i; ) {
    if (i.constructor?.name === "Container")
      return !0;
    i = Object.getPrototypeOf(i);
  }
  return !1;
}, $w = ct.create(J.Saw, "Saw"), Io = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t._type;
  if (e && Bu.has(e)) return !0;
  let i = Object.getPrototypeOf(t);
  for (; i; ) {
    if (i.constructor?.name === "Rectangle")
      return !0;
    i = Object.getPrototypeOf(i);
  }
  return t.constructor?.name === "Rectangle";
}, Wu = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t._type;
  if (e && Nu.has(e)) return !0;
  let i = Object.getPrototypeOf(t);
  for (; i; ) {
    if (i.constructor?.name === "Placeable")
      return !0;
    i = Object.getPrototypeOf(i);
  }
  return t.constructor?.name === "Placeable";
}, Fe = ct.create(
  J.InputShape,
  "InputShape"
), Yi = ct.create(
  J.InputStock,
  "InputStock"
);
ct.create(
  J.InputSaw,
  "InputSaw"
);
ct.create(
  J.GuillotineState,
  "GuillotineState"
);
ct.create(J.Line, "Line");
ct.create(J.Point, "Point");
ct.create(
  J.PointCollection,
  "PointCollection"
);
function Hu(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "__ref" in e && "autoId" in e && typeof e.__ref == "string" && typeof e.autoId == "string";
}
function Po(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "trimmed" in e && e.trimmed === !0;
}
function Uu(t) {
  if (!t || typeof t != "object") return null;
  const e = t.__entityType;
  if (e && Object.values(J).includes(e))
    return e;
  if ("getType" in t && typeof t.getType == "function")
    try {
      const i = t.getType();
      if (Object.values(J).includes(i))
        return i;
    } catch {
    }
  return Gu(t) ? J.Cut : Fe(t) ? J.InputShape : Yi(t) ? J.InputStock : Jt(t) ? J.InputUserGroup : Ps(t) ? J.UserGroup : xo(t) ? J.StripGroup : ko(t) ? J.FirstShapeGroup : So(t) ? J.Group : gt(t) ? J.Shape : Nt(t) ? J.Stock : zu(t) ? J.Container : Ui(t) ? J.Segment : qu(t) ? J.Offcut : Io(t) ? J.Rectangle : Wu(t) ? J.Placeable : null;
}
const bi = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "sides" in e && (!("type" in e) || e.type === "banding") && (!("validate" in e) || typeof e.validate == "function");
}, si = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "faces" in e && (!("type" in e) || e.type === "finish") && (!("validate" in e) || typeof e.validate == "function");
}, ni = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "faces" in e && "sides" in e && (!("type" in e) || e.type === "planing") && (!("validate" in e) || typeof e.validate == "function");
}, Yu = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "images" in e && (!("type" in e) || e.type === "imageUpload") && (!("validate" in e) || typeof e.validate == "function");
};
ct.create(
  J.Machining,
  "Machining",
  (t) => ("holes" in t || "corners" in t || "hingeHoles" in t) && "enabled" in t
);
ct.create(
  J.Extras,
  "Extras",
  (t) => "banding" in t || "finish" in t || "planing" in t
);
ct.create(
  J.Issue,
  "Issue",
  (t) => "type" in t && "message" in t && (t.type === "error" || t.type === "warning")
);
function Ku(t) {
  return t?.__entityType === J.Shape;
}
function Dw(t) {
  return t?.__entityType === J.Group || t?.__entityType === J.StripGroup || t?.__entityType === J.FirstShapeGroup;
}
function Ew(t) {
  return t?.__entityType === J.Group || t?.__entityType === J.StripGroup || t?.__entityType === J.UserGroup || t?.__entityType === J.FirstShapeGroup;
}
function Mw(t) {
  return t?.__entityType === J.UserGroup;
}
function Di(t) {
  return !(!t || typeof t != "string");
}
function Zu(t) {
  return !Di(t) || !t || typeof t != "string" ? "" : t.toUpperCase();
}
function Ju(t) {
  return !Di(t) || !t || typeof t != "string" ? "" : t?.toLowerCase();
}
function Xu(t) {
  return Di(t) ? t.trim().split(" ").map((e) => Xi(e)).join(" ") : "";
}
function Xi(t) {
  return Di(t) ? t.trim().charAt(0).toUpperCase() + t.slice(1) : "";
}
function Qu(t) {
  return Di(t) ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z\u00C0-\u024F0-9._\-|\s]/g, ""), t.trim()) : "";
}
function ed(t) {
  return Di(t) ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), t.trim()) : "";
}
function _w(t, e = 100) {
  return Di(t) ? (t = t.trim(), t = t.substring(0, e), t) : "";
}
let Co = Yr;
function td(t) {
  Co = t;
}
function zt(t, e) {
  if (io())
    return t;
  const i = Co.t(t, { ...e });
  return !i || i === t ? t : Xi(i);
}
function id(t) {
  return typeof t == "string" && (t.startsWith("fields.") || t.startsWith("extras.") || t.startsWith("woodwork.") || t.startsWith("errors."));
}
function sd(t) {
  if (!t) return;
  const e = {};
  for (const [i, s] of Object.entries(t))
    if (id(s)) {
      const n = zt(s);
      e[i] = n;
    } else
      e[i] = s;
  return e;
}
function nd(t, e) {
  const i = iu(t), s = t.startsWith("errors.validation.") ? t : i, n = sd(e);
  return {
    message: zt(s, n),
    translationKey: s,
    params: n
  };
}
function Ao(t, e) {
  return nd(t, e).message;
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
    const i = su.parse(e), s = ue.determineIdentifier(i.item, i.index || []);
    let n = i.id || "";
    !n && i.item && "autoId" in i.item && i.item.autoId && (n = i.item.autoId);
    const a = i.shouldTranslate !== !1 ? Ao(i.message, i.params) : i.message;
    if (this.message = a, this.identifier = s, this.field = i.field.map((r) => [...r]), this.index = i.index ? [...i.index] : [], this.id = n, this.type = i.type, this.category = i.category || [], this.item = i.item, this.addToItemIssues(i.item), Array.isArray(i.issues) && i.issues.push(this), i.throwError) {
      const r = `Issue created for ${Uu(i.item)}: ${this.identifier || "N/A"} - ${this.field.map((o) => o.join(".")).join(", ")}`;
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
ta(
  (t) => t instanceof ue,
  { message: "Must be an Issue instance" }
);
const zn = 10, or = 0;
class sn extends Error {
  constructor(e) {
    super(e), this.name = "NumberFormatError";
  }
}
const ds = {
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
function ad(t, e) {
  let i;
  if (typeof t == "number" ? i = t : i = new ms(t).valueOf(), typeof e == "number") {
    const s = Math.pow(10, e);
    return Math.round(i * s) / s;
  }
  return i;
}
function rd(t, e) {
  const i = new ms(t);
  if (e > 0) {
    const s = i.mul(e), n = Math.round(s.valueOf());
    return new ms(n, e).toFraction(!0);
  }
  return i.simplify().toFraction(!0);
}
function od(t, e, i = !1) {
  const s = t == null || String(t).trim() === "";
  if (i && s)
    return { value: null, valid: !1, message: "errors.validation.field.required" };
  if (!i && s)
    return { value: null, valid: !0 };
  const n = String(t);
  try {
    const a = To(n, !0), r = parseFloat(a ?? ""), o = a !== null && a !== "" && !isNaN(r) && isFinite(r);
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
function ld(t = "en-US") {
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
function qs(t) {
  if (t == null || t === "") return null;
  const e = String(t).trim();
  if (!e) return null;
  try {
    const { thousandsSeparator: i, decimalSeparator: s } = ld(), n = e.replace(new RegExp(`\\${i}`, "g"), "").replace(new RegExp(`\\${s}`, "g"), "."), a = Number(n);
    return isFinite(a) ? a : null;
  } catch (i) {
    throw new sn(`Failed to parse locale number: "${t}". ${i.message || "Parsing error"}`);
  }
}
function Aa(t) {
  if (!t) return !1;
  const e = t.toString().trim();
  if (!e) return !1;
  const i = Object.keys(ds).join("");
  return new RegExp(
    `^-?((\\d+\\s+)?\\d+\\/\\d+|\\d+|\\d+[${i}]|[${i}]|\\d+'(?:\\s*\\d+(?:\\/\\d+)?"?)?|(\\d+\\s+)?\\d+\\/\\d+"|\\d+")$`
  ).test(e);
}
function To(t, e = !1) {
  if (t == null || t === "") return null;
  let i = String(t).trim();
  if (!i) return null;
  const s = Object.keys(ds).join("");
  i = i.replace(new RegExp(`(\\d)\\s+([${s}])`, "g"), "$1$2");
  try {
    const n = Object.keys(ds).join(""), a = new RegExp(`^(-?)(\\d+)([${n}])$`), r = new RegExp(`^(-?)([${n}])$`), o = i.match(a), l = i.match(r);
    if (o) {
      const c = o[1], u = o[2], h = o[3], d = ds[h];
      if (d)
        return `${c}${u} ${d}`;
      throw new Error(`Unknown vulgar fraction character: ${h}`);
    } else if (l) {
      const c = l[1] || "", u = l[2], h = ds[u];
      if (h)
        return `${c}${h}`;
      throw new Error(`Unknown vulgar fraction character: ${u}`);
    } else if (Aa(i)) {
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
      const u = e ? qs(i) : parseFloat(i);
      return u === null || isNaN(u) || !isFinite(u) ? null : u.toString();
    }
  } catch (n) {
    throw new sn(
      `Failed to clean numeric input: "${t}". ${n.message || "Cleaning error"}`
    );
  }
}
function lr(t, e, i = null, s = null) {
  if (t && !(!Fe(t) && !Yi(t))) {
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
function cd(t) {
  return /^-?\d*\.?\d+$/.test(t);
}
function ud(t) {
  return /^-?(\d+\s+)?\d+\/\d+$/.test(t) || /^-?\d+$/.test(t);
}
function K(t) {
  if (t.v == null || t.v === "")
    return t.nf === "decimal" || !t.nf && t.o?.numberFormat !== "fraction" ? null : "";
  const e = t.o ?? {}, i = t.nf ?? e?.numberFormat ?? "decimal", s = t.dp ?? e?.decimalPlaces ?? zn, n = t.pl ?? e?.parseLocale ?? !1, a = t.fr ?? e?.fractionRoundTo ?? or;
  if (i === "decimal") {
    if (typeof t.v == "number") {
      if (typeof s == "number" && s !== zn) {
        const r = Math.pow(10, s);
        return Math.round(t.v * r) / r;
      }
      return t.v;
    }
    if (typeof t.v == "string") {
      const r = t.v.trim();
      if (cd(r) && !n) {
        const o = parseFloat(r);
        if (isFinite(o)) {
          if (typeof s == "number" && s !== zn) {
            const l = Math.pow(10, s);
            return Math.round(o * l) / l;
          }
          return o;
        }
      }
    }
  } else if (i === "fraction" && typeof t.v == "string") {
    const r = t.v.trim();
    if (ud(r))
      try {
        const o = new ms(r);
        if (isFinite(o.valueOf())) {
          if (a === 0 || a === or)
            return o.toFraction(!0);
          const l = o.mul(a), c = Math.round(l.valueOf());
          return new ms(c, a).toFraction(!0);
        }
      } catch {
      }
  }
  try {
    const r = To(t.v, n);
    return r === null || r === "" ? i === "decimal" ? null : "" : i === "decimal" ? ad(r, s) : rd(r, a);
  } catch (r) {
    throw r instanceof sn ? r : new sn(
      `Failed to convert number format: "${t.v}" to ${i}. ${r.message}`
    );
  }
}
const Qt = {
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
function lt(t, e) {
  if (e?.returnKey)
    return `fields.${t}`;
  const i = `fields.${t}`, s = zt(i);
  if (s === i) {
    const n = Qt[t] || t;
    return ui() && !Qt[t] && console.warn(`[field-mappings] No translation or fallback for field: "${t}"`), n;
  }
  return ui() && console.log(`[field-mappings] Translated "${t}" -> "${s}"`), s;
}
const Oo = (t, e, i, s, n, a) => {
  const r = Ze(t, e);
  if (r == null || r === "") return;
  if (typeof r != "string") {
    new ue({
      item: t,
      message: zt("errors.validation.must_be_string", {
        0: Qt[e]
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
    message: zt("errors.validation.must_be_values", {
      0: Qt[e],
      1: i.join(", ")
    }),
    shouldTranslate: !1,
    field: [[e]],
    index: s !== void 0 ? [s] : null,
    type: n ? "warning" : "error",
    issues: a
  });
};
function Lo(t) {
  return t.filter((e) => e.type === "error");
}
function dd(t, e) {
  return typeof t == "object" && t !== null && e in t;
}
function fd(t) {
  return dd(t, "issues") && Array.isArray(t.issues);
}
function cr(t, e, i = !1) {
  if (!fd(t) || !t.issues?.length)
    return !1;
  const s = i ? "warning" : "error";
  return t.issues.filter((r) => r.type === s).some((r) => r.field?.length ? r.field.some((o) => o.every((l, c) => l === pd(e[c]))) : !1);
}
const hd = {
  partMaterial: "material",
  stockMaterial: "material"
};
function pd(t) {
  return hd[t] ?? t;
}
const gd = ["banding", "finish", "planing", "info"], Wn = p().refine(
  (t) => t.startsWith("side.") || t.startsWith("face."),
  { message: 'Location must start with "side." or "face."' }
).transform((t) => t), Et = xe([
  R(),
  p(),
  Se(p(), xe([R(), p()]))
  // Object-based values: { type: 'oak', thickness: '1mm', test: true }
]), vn = Ht.extend({
  // ========== Identity ==========
  type: Te(gd).optional().describe("Type of extra"),
  enabled: R().default(!0).describe("Whether extra is enabled"),
  // ========== Face/Side mappings (superset - each extra uses what it needs) ==========
  // Face values (front/back) - partial record to allow any subset of faces
  faces: j({
    a: Et.optional(),
    b: Et.optional()
  }).optional().describe("Partial mapping of face keys to extra values"),
  // Side values (edges) - partial record to allow any subset of sides
  sides: j({
    a: Et.optional(),
    b: Et.optional(),
    c: Et.optional(),
    d: Et.optional(),
    l1: Et.optional(),
    l2: Et.optional(),
    w1: Et.optional(),
    w2: Et.optional()
  }).optional().describe("Partial mapping of side keys to extra values")
  // NOTE: Options are now centralized in CalculationData.extrasOptions
  // No per-shape options are stored - all extras use centralized configuration
}), Ta = {
  // Inherit computed properties from validation base
  ...mi
  // Add any extra-specific computed properties here
};
Se(
  Te(["a", "b"]),
  Et
);
Se(
  Te(["l1", "l2", "w1", "w2", "a", "b", "c", "d"]),
  Et
);
const Fo = j({
  min: f().optional().describe("Minimum value"),
  max: f().optional().describe("Maximum value"),
  message: p().optional().describe("Custom error message")
});
j({
  scope: Te(["face", "side"]),
  key: p(),
  // Face or Side key
  original: p()
  // Original ExtraLocation string
});
const md = j({
  location: p().describe("Location identifier (e.g., face.a, side.l1)"),
  properties: Se(p(), Fo).optional(),
  disabledMessage: p().optional().describe("Message when location is disabled")
}), yd = j({
  global: Se(p(), Fo).optional(),
  locations: ie(md).optional().describe("Location-specific constraints"),
  defaultMessage: p().optional().describe("Default message when constraints not met")
});
j({
  scope: ie(Te(["faces", "sides"])).describe("Scopes this extra type supports"),
  faces: ie(ta()).optional().describe("Available face locations"),
  sides: ie(ta()).optional().describe("Available side locations"),
  constraints: yd.optional()
});
const $o = vn, bd = {
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
}, vd = ["radius", "bevel"], wd = Ht.extend({
  // Corner type
  type: Te(vd).nullable().optional().describe("Type of corner modification"),
  // Size of the corner modification
  size: f().nonnegative().nullable().default(0).describe("Size of the corner modification in mm"),
  // Corner index
  index: f().min(0).max(3).default(0).describe("Corner index (0=BL, 1=BR, 2=TR, 3=TL)")
}), Sd = {
  // Inherit computed properties from validation base
  ...mi,
  // Check if corner has any operation
  hasOperation: {
    compute: (t) => t.type !== void 0 && t.size > 0,
    metadata: {
      cache: !0,
      dependencies: ["type", "size"],
      returnType: "boolean"
    }
  }
}, xd = ["l", "w"], kd = ["top", "bottom", "left", "right", "merged"], Do = j({
  // Coordinates
  x1: f().default(0),
  x2: f().default(0),
  y1: f().default(0),
  y2: f().default(0),
  // Dimension and position
  dimension: Te(xd).optional(),
  position: Te(kd).optional(),
  // Stock reference - required as cuts cannot exist without a stock
  stock: $e("Stock"),
  // Guillotine properties
  isGuillotine: R().default(!1),
  guillotineState: j({
    order: f().nullable().optional(),
    parentSegmentID: p().nullable().optional(),
    phase: f().nullable().optional(),
    segmentCutOrder: f().nullable().optional(),
    partProduced: p().nullable().optional()
  }).nullable().default({}),
  // PTX properties
  ptxData: j({
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
  distances: j({
    bottom: f().nullable().optional(),
    left: f().nullable().optional(),
    right: f().nullable().optional(),
    top: f().nullable().optional(),
    partSize: f().nullable().optional()
  }).nullable().optional(),
  // Runtime flags
  remove: R().optional().behavior({ compress: "exclude" })
}), Id = {
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
}, Pd = Ht.extend({
  // Identity
  id: p().optional().describe("Unique identifier for the extras container"),
  // Individual extras - using ref for proper typing
  // Override default reference behavior to serialize full data for proper __entityType markers
  banding: $e("Banding", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Edge banding configuration"),
  finish: $e("Finish", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Surface finish configuration"),
  planing: $e("Planing", {
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
}), Cd = {
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
}, Eo = vn, Ad = {
  // Inherit computed properties from Extra base (includes validation base)
  ...Ta,
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
}, Td = ["l1", "l2", "w1", "w2"], Od = Ht.extend({
  // Position
  position: f().min(0).default(0).describe("Position along the side"),
  side: Te(Td).describe("Side where hinge is placed"),
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
}), Ld = {
  // Inherit computed properties from validation base
  ...mi,
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
}, Fd = ["regular", "hinge", "shelf"], $d = Ht.extend({
  // Position
  x: f().min(0).default(0).describe("X position from left edge"),
  y: f().min(0).default(0).describe("Y position from bottom edge"),
  // Dimensions
  diameter: f().min(0.1).default(5).describe("Hole diameter in mm"),
  depth: f().min(0).optional().describe("Hole depth (undefined for through hole)"),
  // Configuration
  face: f().default(0).describe("Face index (0=front, 1=back)"),
  type: Te(Fd).default("regular").describe("Type of hole")
}), Dd = {
  // Inherit computed properties from validation base
  ...mi,
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
function _e(t, e) {
  return t._metadata = e, e.description ? t.describe(e.description) : t;
}
const Ed = (t, e) => _e(t, e), Md = ["efficiency", "guillotine", "beam", "none"], sa = ["l", "w", "none"], _d = ["efficiency", "time"], Rd = ["l", "w"], Mo = ["efficiency", "smallest"], jd = ["dimensions", "identical", "none"], nn = ["sheet", "linear", "roll"], wn = xe([
  f().int().positive(),
  gi(),
  Sc()
]).transform((t) => t ?? 100).describe("Maximum stack height for beam saw stacking"), Sn = Te(Md).nullable().optional().transform((t) => t === null ? void 0 : t), xn = Te(sa).nullable().optional().transform((t) => t === null ? void 0 : t), Oa = Te(Mo).default("efficiency").describe("Method for selecting stocks"), La = Te(jd).default("identical").describe("How to stack identical parts"), kn = j({
  strategy: Te(_d).default("efficiency"),
  maxPhase: f().int().min(0).max(10).default(0),
  headCuts: R().default(!1)
}).default({
  strategy: "efficiency",
  maxPhase: 0,
  headCuts: !1
}), Fa = j({
  primaryCompression: Te(Rd).default("w")
}).default({
  primaryCompression: "w"
});
j({
  stockType: bn,
  /**
   * Stack height - Maximum stack height
   */
  stackHeight: wn,
  /**
   * Cut type - Type of cutting algorithm
   */
  cutType: Sn,
  /**
   * Cut preference - Preferred cutting direction
   */
  cutPreference: xn,
  /**
   * Guillotine options - Configuration for guillotine cutting
   */
  guillotineOptions: kn,
  /**
   * Efficiency options - Configuration for efficiency optimization
   */
  efficiencyOptions: Fa,
  /**
   * Stock selection - Method for selecting stocks
   */
  stockSelection: Oa,
  /**
   * Stacking mode - How to stack identical parts
   */
  stackingMode: La
});
const _o = f().min(0).default(0), Ro = f().min(0).default(0), jo = f().min(0).default(0), Vd = j({
  dimension: Ro,
  minSpacing: jo
});
function na(t) {
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
function aa(t, e) {
  if (t === "sheet") {
    if (e === "guillotine") return ["l", "w"];
    if (e === "beam") return ["l"];
    if (e === "efficiency") return [];
  } else if (t === "roll") {
    if (e === "guillotine") return ["w"];
    if (e === "efficiency") return [];
  } else if (t === "linear")
    return [];
  return [];
}
const Bd = _e(
  Sn,
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
), Nd = _e(
  xn,
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
), Gd = _e(
  Oa,
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
), qd = _e(
  La,
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
), zd = _e(
  kn,
  {
    label: "fields.guillotineOptions",
    group: "guillotine",
    order: 1,
    type: "object"
  }
), Wd = _e(
  Fa,
  {
    label: "fields.efficiencyOptions",
    group: "efficiency",
    order: 1,
    type: "object"
  }
), Wi = (t) => {
  const { min: e, allowZero: i = !1, nullable: s = !0 } = t || {};
  let n;
  return e !== void 0 ? n = i ? f().min(e) : f().min(e) : n = i ? f().min(0) : f().gt(0), s ? xe([
    n,
    p(),
    gi()
  ]).transform((a) => a == null || a === "" ? null : typeof a == "string" ? K({ v: a }) ?? null : a) : xe([
    n,
    p()
  ]).transform((a) => a === "" ? 0 : typeof a == "string" ? K({ v: a }) ?? 0 : a);
}, Vo = () => _e(
  Ji,
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
), Hd = () => _e(
  uo,
  {
    label: "fields.orientationLock",
    group: "properties",
    options: [
      { value: "", label: "fields.orientationLock.free" },
      { value: "l", label: "fields.orientationLock.length" },
      { value: "w", label: "fields.orientationLock.width" }
    ]
  }
), zs = (t) => _e(
  Wi({ allowZero: t.allowZero, nullable: !0 }).default(null),
  {
    label: t.label,
    placeholder: t.placeholder || "",
    group: "dimensions",
    allowZero: t.allowZero || !1,
    output: "number"
  }
), Ud = () => _e(
  Bt(
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
), Yd = (t) => _e(
  p().max(200).optional().transform((e) => e ? e.trim().toUpperCase() : ""),
  {
    label: "fields.name",
    placeholder: t?.placeholder || "",
    group: "general"
  }
), Kd = () => _e(
  p().max(200).optional().transform((t) => t ? t.trim().toUpperCase() : ""),
  {
    label: "fields.material",
    placeholder: "fields.material",
    group: "properties"
  }
), Zd = () => _e(
  Wi({ allowZero: !0, nullable: !0 }).optional().transform((t) => {
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
), Jd = () => _e(
  xc().max(500).transform((t) => t.replace(/,/g, " ")).optional(),
  {
    label: "fields.notes",
    placeholder: "fields.notes",
    group: "general"
  }
), Xd = (t) => _e(
  R().default(!1),
  t
), Qd = (t, e) => _e(
  Te(t),
  e
), li = {
  field: _e,
  boolean: Xd,
  enum: Qd,
  custom: Ed
}, di = j({
  ...Ht.shape,
  // ========== Stock Type ==========
  stockType: _e(
    Te([...nn]).default("sheet"),
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
  bladeWidth: _e(
    Wi({ allowZero: !0, nullable: !1 }).default(0),
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
  stackHeight: _e(
    wn,
    {
      label: "fields.stackHeight",
      group: "stacking",
      order: 1,
      step: 1,
      info: "If your saw supports cutting multiple stock simultaneously, set the maximum total allowed height."
    }
  ),
  cutType: Bd,
  cutPreference: Nd,
  // ========== Guillotine Options ==========
  guillotineOptions: zd,
  // ========== Efficiency Options ==========
  efficiencyOptions: Wd,
  // ========== General Options ==========
  options: j({
    stockSelection: Gd,
    minSpacing: Wi({ allowZero: !0, nullable: !1 }).default(0),
    stackingMode: qd,
    minSpacingDimension: j({
      dimension: Wi({ allowZero: !0, nullable: !0 }).optional(),
      minSpacing: Wi({ allowZero: !0, nullable: !0 }).optional()
    }).optional()
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical"
  })
}), ef = {
  // Include validation computed properties (isValid)
  ...mi,
  // Get valid cut types for current stock type
  validCutTypes: {
    compute: (t) => na(t.stockType),
    metadata: {
      cache: !0,
      dependencies: ["stockType"],
      description: "Valid cut types for current stock type",
      returnType: "CutType[]"
    }
  },
  // Get valid cut preferences for current stock type and cut type
  validCutPreferences: {
    compute: (t) => aa(t.stockType, t.cutType),
    metadata: {
      cache: !0,
      dependencies: ["stockType", "cutType"],
      description: "Valid cut preferences for current stock type and cut type",
      returnType: "CutPreference[]"
    }
  }
}, tf = j({
  // Entity type added during serialization by toData() method
  // Used for automatic class recreation during deserialization
  __entityType: p().optional().describe("Entity type added during serialization by AutoSerializable.toData()"),
  // Reference marker for reference-based recreation
  // Used when objects reference each other
  __ref: p().optional().describe("Reference marker for object recreation")
}), sf = j({
  // ========== Selection State (excluded from compression) ==========
  selected: li.boolean({
    label: "fields.selected",
    description: "Whether item is selected for multi-edit"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  multiEdit: li.boolean({
    label: "fields.multiEdit",
    description: "Whether this is the multi-edit item"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  readonly: li.boolean({
    label: "fields.readonly",
    description: "Whether input is readonly"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Validation State (excluded from compression and serialization) ==========
  isNew: li.boolean({
    label: "fields.isNew",
    description: "Whether this is a newly created item that should skip validation until first user interaction",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" })
}), nf = j({
  l1: _e(
    Bt((t) => t ?? 0, f()).default(0),
    { label: "fields.l1", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  l2: _e(
    Bt((t) => t ?? 0, f()).default(0),
    { label: "fields.l2", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  w1: _e(
    Bt((t) => t ?? 0, f()).default(0),
    { label: "fields.w1", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  w2: _e(
    Bt((t) => t ?? 0, f()).default(0),
    { label: "fields.w2", group: "trim", allowZero: !0, min: 0, required: !1 }
  )
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 }), af = Bt(
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
  nf
), rf = j({
  // ========== Identity ==========
  id: oo,
  index: f().int().min(0).optional(),
  // ========== Dimensions ==========
  // Input dimensions can be strings (for fractions) or numbers
  l: zs({
    label: "fields.l",
    placeholder: "fields.l"
  }),
  w: zs({
    label: "fields.w",
    placeholder: "fields.w"
  }),
  t: zs({
    label: "fields.t",
    placeholder: "fields.t"
  }),
  q: Ud(),
  // ========== Material Properties ==========
  // Input name with uppercase transform
  name: Yd(),
  material: Kd(),
  // ========== Cost ==========
  cost: Zd(),
  // ========== Trim Configuration ==========
  trim: af,
  // ========== Rotation (Runtime) ==========
  rot: Sa.default(0),
  // ========== Flags ==========
  preventAutoRotation: li.boolean({
    label: "fields.preventAutoRotation",
    description: "Prevent automatic rotation during optimization",
    group: "options"
  }),
  offcut: li.boolean({
    label: "fields.offcut",
    description: "Mark as offcut material",
    group: "options"
  }),
  processed: li.boolean({
    label: "fields.processed",
    description: "Has been processed",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Notes ==========
  notes: Jd()
}), an = j({
  ...tf.shape,
  // System properties from AutoSerializable
  ...Ht.shape,
  ...rf.shape,
  // Core business fields
  ...sf.shape,
  // Input-specific UI fields
  // Override id with strict validation for input shapes/stock (allows blank)
  id: p().regex(/^(\d+\.\d+)?$/, 'ID must be blank or in format "1.0" (e.g., "1.0", "2.1")').default("").describe('Structured identifier for input shapes/stock in format 1.0 (e.g., "1.0") or blank')
}), $a = {
  // Include validation computed properties (isValid)
  ...mi,
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
}, fi = an.extend({
  // Add grain field for shapes
  //[] is grain needed for inputs?
  grain: Vo(),
  // Add orientationLock with input-specific transform
  orientationLock: Hd(),
  // ========== Shared Shape Properties ==========
  upDirection: _e(
    yo,
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
  stockLock: _e(
    mo,
    { label: "fields.stockLock" }
  ),
  // ========== Stock Matching ==========
  stockMatch: Du.nullable().optional(),
  // ========== Custom Data ==========
  customData: _e(
    bo,
    { label: "fields.customData", description: "Custom user-defined data" }
  ),
  // ========== UI Extension (excluded from compression) ==========
  selectedMaterial: _e(
    ve().optional(),
    { label: "fields.selectedMaterial", description: "Selected material object" }
  ).behavior({ compress: "exclude" }),
  // ========== Machining ==========
  // Override default reference behavior to serialize full data
  machining: $e("Machining", {
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
  extras: $e("Extras", {
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
}), of = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...$a,
  // Check if has grain direction
  hasGrain: {
    compute: (t) => t.grain === "l" || t.grain === "w",
    metadata: {
      cache: !1,
      dependencies: ["grain"],
      returnType: "boolean"
    }
  }
}, Gt = j({
  ...an.shape,
  ...fo.shape,
  // ========== Stock-specific Properties ==========
  // Override l to allow 0 for infinite length rolls
  l: zs({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !0
  }),
  // Add grain field for stock
  grain: Vo(),
  preventGrainRotation: li.boolean({
    label: "fields.preventGrainRotation",
    description: "Prevent rotation that would change grain direction",
    group: "options",
    order: 4
  }),
  // Stock-specific flags (infiniteLength is now in sharedStockPropertiesSchema from merge above)
  used: li.boolean({
    label: "fields.used",
    description: "Whether stock has been used"
  }),
  // Display and filtering properties
  color: _e(
    co,
    {
      label: "fields.color",
      description: 'Material color ({ hex: "#FF5733", name: "Red" } or legacy string)',
      group: "display",
      order: 1
    }
  ),
  weight: _e(
    f().positive().optional(),
    {
      label: "fields.weight",
      description: "Weight in kg",
      group: "display",
      order: 2
    }
  ),
  imageUrl: _e(
    p().url().optional(),
    {
      label: "fields.imageUrl",
      description: "Image URL for stock display",
      group: "display",
      order: 3
    }
  ),
  // Stock filter and categorization properties
  tags: _e(
    ie(p()).optional(),
    {
      label: "fields.tags",
      description: "Searchable tags for filtering",
      group: "display",
      order: 4
    }
  ),
  available: _e(
    R().optional(),
    {
      label: "fields.available",
      description: "Whether stock is available for selection (defaults to true)",
      group: "display",
      order: 5
    }
  ),
  // ========== Custom Data ==========
  customData: _e(
    bo,
    { label: "fields.customData", description: "Custom user-defined data" }
  ),
  // Saw configuration (excluded from compression)
  saw: _e(
    ve().optional(),
    { label: "fields.saw", description: "Saw configuration data" }
  ).behavior({ compress: "exclude" })
}), lf = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...$a
  // InputStock doesn't define additional computed properties
}, In = Ht.extend({
  // ========== Identification ==========
  id: p().optional().describe("Unique identifier"),
  // ========== Shape References ==========
  shapeIds: ie(p()).default([]).describe("List of shape IDs in this group"),
  shapes: ie(p()).default([]).transform((t) => t?.map(String) ?? []).describe("Shape identifiers"),
  // ========== Group Properties ==========
  direction: Ca,
  // 'horizontal' | 'vertical'
  q: f().int().min(1).default(1).describe("Quantity of groups"),
  duplicate: R().default(!1).describe("If a duplicate"),
  // ========== Material Properties (from Group) ==========
  name: p().optional().describe("Group name"),
  material: p().optional().describe("Material type"),
  grain: Ji.describe("Grain direction"),
  // ========== Stock Matching (excluded during compression) ==========
  stockMatch: j({
    stockId: p().optional(),
    material: p().optional(),
    thickness: f().optional(),
    grain: Ji.optional()
  }).optional().describe("Matching stock information").behavior({ compress: "exclude" }),
  // ========== Runtime Properties ==========
  shapeList: ie(ve()).optional().describe("Runtime shape list for validation").behavior({ compress: "exclude" })
}), cf = {
  // Include validation computed properties (isValid)
  ...mi
  // InputUserGroup doesn't define additional computed properties
};
j({
  parts: ie(f()).describe("Indices of shapes/parts in the parts array (user-friendly name for shapes)"),
  direction: Ca,
  q: f().int().min(1).describe("Quantity of groups")
});
const uf = Ht.extend({
  // Collections of machining operations
  holes: We("Hole").default([]).describe("Array of holes").behavior({
    serialize: "full",
    clone: "copy"
  }),
  hingeHoles: We("HingeHole").default([]).describe("Array of hinge hole sets").behavior({
    serialize: "full",
    clone: "copy"
  }),
  corners: We("Corner").default([]).describe("Array of corner operations").behavior({
    serialize: "full",
    clone: "copy"
  }),
  // Validation
  enabled: R().default(!0).describe("Whether machining is enabled")
}), df = {
  // Inherit computed properties from validation base
  ...mi,
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
}, ff = {
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
    firstShapeFullSizeThreshold: 0.95,
    stripShapes: {
      allocation: !0,
      iterations: 4,
      numPriorityShapes: 1
    },
    secondPass: !1,
    strips: {
      rearrange: !1
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
}, Bo = vn, hf = {
  // Inherit computed properties from Extra base
  ...Ta,
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
}, pf = j({
  // ========== Storage ==========
  // Points stored as a map (will be converted to/from Map in class)
  // In serialized form this is a record, at runtime it's a Map
  points: xe([
    kc(p(), $e("Point")),
    Se(p(), $e("Point"))
  ]).default(() => /* @__PURE__ */ new Map())
}), gf = {
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
}, ra = Ht.extend({
  // Core properties from shared schema
  stockType: bn,
  stackHeight: wn.describe("Maximum stack height"),
  cutType: Sn,
  cutPreference: xn,
  // Blade width (numeric for runtime)
  bladeWidth: _o.describe("Blade width"),
  // Guillotine options
  guillotineOptions: kn,
  // Efficiency options
  efficiencyOptions: Fa,
  // General options (nested stockSelection and stackingMode)
  options: j({
    stockSelection: Oa,
    minSpacing: jo,
    stackingMode: La,
    minSpacingDimension: Vd
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical",
    minSpacingDimension: {
      dimension: 0,
      minSpacing: 0
    }
  }).describe("General saw options")
}), mf = {
  // Include validation computed properties
  ...mi,
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
ra.describe(JSON.stringify({
  name: "Saw",
  description: "Runtime saw configuration for optimization",
  version: "1.0.0",
  category: "configuration"
}));
const Gi = 1e-10, yf = 10, bf = Number.MAX_SAFE_INTEGER, vf = 4294967295, Ct = (t) => typeof t == "number" && Number.isFinite(t), Ws = (t) => Array.isArray(t) && t.length > 0;
function ls(t, e, i = Gi) {
  if (t === e) return 0;
  if (Number.isInteger(t) && Number.isInteger(e))
    return t > e ? 1 : -1;
  const s = t - e;
  return Math.abs(s) < i ? 0 : s;
}
const wf = {
  greaterThan: (t, e, i = Gi) => !Ct(t) || !Ct(e) ? !1 : ls(t, e, i) > 0,
  greaterThanOrEqualTo: (t, e, i = Gi) => !Ct(t) || !Ct(e) ? !1 : ls(t, e, i) >= 0,
  lessThan: (t, e, i = Gi) => !Ct(t) || !Ct(e) ? !1 : ls(t, e, i) < 0,
  lessThanOrEqualTo: (t, e, i = Gi) => !Ct(t) || !Ct(e) ? !1 : ls(t, e, i) <= 0,
  equalTo: (t, e, i = Gi) => !Ct(t) || !Ct(e) ? !1 : ls(t, e, i) === 0
};
function Sf(t) {
  return Ct(t) ? Number.isInteger(t) ? t : Number(t.toFixed(yf)) : !1;
}
function xf(t) {
  if (!Ct(t) || t < 0 || t > bf)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (vf + 1) * t);
}
function kf(t, e) {
  if (!Ws(t))
    throw new Error("Invalid array parameter");
  if (!Ct(e) || e < 0 || e > t.length)
    throw new Error("Invalid size parameter");
  const i = t.slice(), s = t.length - e;
  for (let n = t.length - 1; n >= s; n--) {
    const a = Math.floor(Math.random() * (n + 1));
    [i[n], i[a]] = [i[a], i[n]];
  }
  return i.slice(s);
}
class Fs {
  static calculateMean(e) {
    if (!Ws(e))
      throw new Error("Invalid input array");
    return e.reduce((i, s) => i + s, 0) / e.length;
  }
  static calculateStandardDeviation(e, i = null) {
    if (!Ws(e))
      throw new Error("Invalid input array");
    const s = i ?? this.calculateMean(e), n = e.reduce((a, r) => {
      const o = r - s;
      return a + o * o;
    }, 0) / e.length;
    return Math.sqrt(n);
  }
  static calculateCoefficientOfVariation(e) {
    if (!Ws(e))
      throw new Error("Invalid input array");
    const i = this.calculateMean(e);
    if (i === 0)
      throw new Error("Mean is zero, coefficient of variation undefined");
    return this.calculateStandardDeviation(e, i) / i;
  }
}
const pe = {
  ...wf,
  isNumber: Ct,
  round: Sf,
  getRandom: xf,
  getRandomSample: kf,
  calculateStandardDeviation: Fs.calculateStandardDeviation.bind(Fs),
  calculateCoefficientOfVariation: Fs.calculateCoefficientOfVariation.bind(Fs)
};
function ur(t) {
  return t && typeof t == "object" && typeof t.toData == "function";
}
let dr = 0, fr = Date.now();
const If = 1e4;
function Pf() {
  return dr % If === 0 && (fr = Date.now()), `${fr}-${(dr++).toString(36)}`;
}
class Cf {
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
    this.autoId = e?.autoId || Pf(), Object.defineProperty(this, "_serializationMode", {
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
      const i = os(e.schema), s = e.schema;
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
            for (const h of c) {
              if (!h) continue;
              const d = ia(h);
              if (d) {
                const g = u;
                i[g] || (i[g] = d);
                break;
              }
            }
            for (const h of c) {
              if (!h || !h._def) continue;
              const d = os(h);
              for (const [g, x] of Object.entries(d)) {
                const V = s ? `${s}.${n}.${g}` : `${n}.${g}`;
                i[V] || (i[V] = x);
              }
              if (h && h.shape) {
                const g = s ? `${s}.${n}` : n;
                this.extractNestedBehaviors(h.shape, i, g);
              }
            }
            r = null;
            break;
          } else
            break;
        }
        if (!r) continue;
        const o = os(r);
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
        if (s instanceof zi) {
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
      const g = s.pop() || "0", x = parseInt(g, 10);
      isNaN(x) && s.push(g), n = String(e);
    } else {
      const g = s.pop() || "0", x = parseInt(g, 10);
      isNaN(x) ? (s.push(g), n = "1") : n = String(x + 1);
    }
    s.push(n);
    const a = s.join("."), o = `${this.autoId.includes(".") ? this.autoId.substring(0, this.autoId.indexOf(".")) : this.autoId}.${n}`, l = this.constructor, c = this.getDirectPropertyCopy(i), u = l.schema;
    let h = {};
    u && (h = os(u));
    const d = l.defaults || (u ? u.parse({}) : {}) || {};
    for (const [g, x] of Object.entries(h))
      x.clone === "reset" && (g in d ? c[g] = d[g] : delete c[g]);
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
    if (a && (r = os(a)[i] || null), r?.clone)
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
        if (ur(r)) {
          if (i?.serialize === "reference" || s === "compressed" && i?.compress === "reference") {
            const c = "autoId" in r && r.autoId, u = typeof r.getType == "function";
            if (c) {
              const h = u ? r.getType() : r.constructor.name;
              return {
                __ref: !0,
                id: r?.id,
                autoId: r.autoId,
                __entityType: h
              };
            }
          }
          const l = s === "compressed" ? "compressed" : "full";
          return r.toData(l);
        }
        return r;
      });
    if (ur(e)) {
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
    const n = xs().get(i);
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
class Ke extends Cf {
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
    Ke.recreateFunc = e;
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
      let o = Ke._schemaKeysCache.get(i);
      if (!o) {
        const l = i.shape || i._def?.shape;
        l && (o = Object.keys(l), Ke._schemaKeysCache.set(i, o));
      }
      if (o) {
        const l = {};
        for (const c of o)
          c in r && (l[c] = r[c]);
        r = l;
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
      const s = e.__entityType || i, a = xs().get(s);
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
    return e && typeof e == "object" ? (s && (e.id || e.autoId), Ke.recreateFunc ? Ke.recreateFunc(e, s, i) : { ...e, __ref: i }) : e;
  }
  /**
   * Static cache tracking which classes have had computed properties initialized on their prototype
   */
  static _computedPropsInitialized = /* @__PURE__ */ new WeakSet();
  /**
   * Static cache for schema keys per class (avoids Object.keys() on every construction)
   */
  static _schemaKeysCache = /* @__PURE__ */ new WeakMap();
  /**
   * Apply computed properties as getters
   * Optimized: Defines getters on prototype once per class, not on every instance
   */
  applyComputedProperties() {
    const e = this.constructor;
    if (Ke._computedPropsInitialized.has(e)) return;
    const i = e.computedProperties;
    if (!i) {
      Ke._computedPropsInitialized.add(e);
      return;
    }
    const s = e.prototype;
    for (const [n, a] of Object.entries(i)) {
      if (!a || typeof a != "object") continue;
      const r = a;
      r.compute && (Object.prototype.hasOwnProperty.call(s, n) && Object.getOwnPropertyDescriptor(s, n)?.get || Object.defineProperty(s, n, {
        get() {
          return r.compute(this);
        },
        enumerable: !1,
        configurable: !0
      }));
    }
    Ke._computedPropsInitialized.add(e);
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
      if (i instanceof zi)
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
      return e.map((s) => Ke.cleanEntityForAPI(s));
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
      if (r instanceof Ic) {
        const o = r.options.some((c) => c instanceof Pc), l = r.options.some((c) => c instanceof Cc);
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
    if (e instanceof Ac || e instanceof Tc)
      return this.unwrapSchema(e._def?.innerType);
    if (e instanceof Oc)
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
class Li extends Ke {
  // Required: Define schema and computed properties for SchemaClass
  static schema = au;
  static computedProperties = ru;
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
    return J.Line;
  }
  /**
    * Validate line
    */
  validate() {
    const e = [];
    return (!pe.isNumber(this.x1) || !pe.isNumber(this.x2) || !pe.isNumber(this.y1) || !pe.isNumber(this.y2)) && e.push(new ue({
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
      if (this.dimension === "l" ? (o = pe.greaterThan(this.x2, r.x) && pe.lessThan(this.x1, r.x + r.l), l = pe.greaterThan(this.y1 + n, r.y) && pe.lessThan(this.y1 - n, r.y + r.w)) : this.dimension === "w" && (o = pe.greaterThan(this.x1 + n, r.x) && pe.lessThan(this.x1 - n, r.x + r.l), l = pe.greaterThan(this.y2, r.y) && pe.lessThan(this.y1, r.y + r.w)), o && l)
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
    return new Li({ x1: e, y1: i, x2: s, y2: n, origin: a, type: r });
  }
  get lineDimension() {
    return !pe.isNumber(this.x1) || !pe.isNumber(this.x2) || !pe.isNumber(this.y1) || !pe.isNumber(this.y2) ? null : this.x1 === this.x2 && this.y1 !== this.y2 ? "w" : this.y1 === this.y2 && this.x1 !== this.x2 ? "l" : null;
  }
  get lineDirection() {
    return !pe.isNumber(this.x1) || !pe.isNumber(this.x2) || !pe.isNumber(this.y1) || !pe.isNumber(this.y2) ? null : this.x1 < this.x2 ? "lr" : this.x1 > this.x2 ? "rl" : this.y1 < this.y2 ? "bt" : this.y1 > this.y2 ? "tb" : null;
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
const Af = {
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
}, $s = {
  topLeft: {
    top: ["topRight"],
    default: ["topRight"]
  },
  bottomRight: {
    right: ["topRight"],
    default: ["topRight"]
  }
}, Ds = {
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
class pt extends Ke {
  // Required: Define schema and computed properties for SchemaClass
  static schema = cu;
  static computedProperties = uu;
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
    return J.Point;
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
    return new pt(e, i, s);
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
    const s = new pt(e ?? this.x, i ?? this.y);
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
      const s = Af[this.direction];
      return s && s[this.corner] && s[this.corner][this.grid] && i.add(s[this.corner][this.grid]), i;
    }
    return e?.cutType !== "efficiency" ? ($s[this.corner] && (this.grid ? $s[this.corner][this.grid] && $s[this.corner][this.grid].forEach((s) => i.add(s)) : $s[this.corner].default?.forEach((s) => i.add(s))), i) : (Ds[this.corner] && (this.grid ? Ds[this.corner][this.grid] && Ds[this.corner][this.grid].forEach((s) => i.add(s)) : Ds[this.corner].default?.forEach((s) => i.add(s))), i);
  }
}
function Le(t) {
  return !(t === void 0 || t === null || t === "" || typeof t == "object" && !Object.values(t).length);
}
function hi(t) {
  return t ? t === "l" ? "w" : "l" : null;
}
function Rw(t) {
  return t ? t === "x" ? "y" : "x" : null;
}
function jw(t) {
  return t === "l" ? "x" : t === "w" ? "y" : null;
}
function Vw(t) {
  return t === "x" ? "l" : t === "y" ? "w" : null;
}
function hr(t, e) {
  return Fc(t, e);
}
function Si(t, e) {
  return Ze(t, e);
}
function ai(t, e, i) {
  $c(t, e, i);
}
function pr(t, e = !1) {
  if (!Le(t) || typeof t != "object") return !1;
  const i = Object.values(t);
  return i.length === 0 ? !1 : e ? i.some((s) => Le(s) && s) : i.some((s) => Le(s));
}
function Bw(t) {
  if (!t?.length) return [];
  const e = t.filter((s) => !s.added), i = {};
  return e.forEach((s) => {
    const n = Tf(s.stock) || 1;
    i[s.parentId] ? i[s.parentId].count += n : (i[s.parentId] = {}, i[s.parentId].count = n, i[s.parentId].id = s.parentId, i[s.parentId].name = s?.name ? s.name : s.id, i[s.parentId].l = s.l, i[s.parentId].w = s.w, i[s.parentId].t = s.t, i[s.parentId].material = s.material, i[s.parentId].rot = s.rot, i[s.parentId].orientationLock = s.orientationLock);
  }), Object.values(i);
}
function Tf(t, e = []) {
  if (!t) return 1;
  if (t?.stack?.number) return t.stack.number;
  if (t?.stack?.stock) {
    const i = typeof t.stack.stock == "string" ? t.stack.stock : t.stack.stock?.id;
    if (i && e.length > 0)
      return e.find((n) => n.id === i)?.stack?.number || 1;
  }
  return typeof t?.stack == "string" && e.find((s) => s.id === t.stack)?.stack?.number || 1;
}
function Of() {
  const t = document.documentElement;
  return "requestFullscreen" in t || "webkitRequestFullscreen" in t || "mozRequestFullScreen" in t || "msRequestFullscreen" in t;
}
function Nw(t, e) {
  if (t == null) return "-";
  let i = Math.round(t).toString();
  for (; i.length < e; ) i = "0" + i;
  return i;
}
function Ki(t, e = !1) {
  const i = typeof t.l == "string" ? K({ v: t.l }) : t.l, s = typeof t.w == "string" ? K({ v: t.w }) : t.w;
  if (!e || !("trim" in t))
    return { l: i, w: s };
  if (Po(t))
    return { l: i, w: s };
  if (Io(t) && !t.hasTrim)
    return { l: i, w: s };
  const n = t.trim, a = K({ v: n.w1 ?? 0 }) + K({ v: n.w2 ?? 0 }), r = K({ v: n.l1 ?? 0 }) + K({ v: n.l2 ?? 0 });
  return {
    l: i - (typeof a == "string" ? K({ v: a }) : a),
    w: s - (typeof r == "string" ? K({ v: r }) : r)
  };
}
function Lf(t, e) {
  if ("trim" in t && !Po(t)) {
    const i = t.trim;
    e.l = e.l - (K({ v: i.w1 ?? 0 }) + K({ v: i.w2 ?? 0 })), e.w = e.w - (K({ v: i.l1 ?? 0 }) + K({ v: i.l2 ?? 0 }));
  }
  return e;
}
function Ri(t, e, i = !1) {
  let s = {
    l: t.l,
    w: t.w
  };
  (Yi(t) || Fe(t) || Ps(t)) && (s = {
    l: K({ v: t.l }),
    w: K({ v: t.w })
  });
  const n = ("rot" in t ? t.rot : 0) ?? 0;
  return i && (s = Lf(t, s)), n === e || ([s.l, s.w] = [s.w, s.l]), s;
}
function No(t) {
  if (!("l" in t) || !("w" in t)) throw new Error("rotatable item must have l & w properties");
}
function Ff(t) {
  it(t) || (No(t), [t.l, t.w] = [t.w, t.l]);
}
function gr(t, e) {
  return pe.lessThanOrEqualTo(t, e);
}
function ji(t, e) {
  return gr(t.l, e.l) && gr(t.w, e.w);
}
function Qi(t, e, i = null) {
  if (!e || !t)
    throw new Error("Container and shape are required");
  const s = "allowExactFitShapes" in e && e.allowExactFitShapes === !0, n = Ki(e, !0), a = s ? Ki(e, !1) : n, r = Ki(t, !0);
  let o = n;
  if (s && (pe.equalTo(r.l, a.l) && pe.equalTo(r.w, a.w) || pe.equalTo(r.l, a.w) && pe.equalTo(r.w, a.l)) && (o = a), r.l * r.w > o.l * o.w)
    return !1;
  const l = rn(t, e);
  if (t.orientationLock || i !== null) {
    const h = i ?? (l === "w" ? 1 : 0), d = Ri(t, h, !0);
    if (s) {
      const g = Ri(t, h, !1);
      if (pe.equalTo(g.l, a.l) && pe.equalTo(g.w, a.w))
        return ji(g, o);
    }
    return ji(d, o);
  }
  const c = Ri(t, 0, !0);
  if (s) {
    const h = Ri(t, 0, !1);
    if (pe.equalTo(h.l, a.l) && pe.equalTo(h.w, a.w) && ji(h, o)) return !0;
  }
  if (ji(c, o)) return !0;
  const u = Ri(t, 1, !0);
  if (s) {
    const h = Ri(t, 1, !1);
    if (pe.equalTo(h.l, a.l) && pe.equalTo(h.w, a.w) && ji(h, o)) return !0;
  }
  return ji(u, o);
}
function $f(t) {
  if ("orientationLock" in t)
    return t.orientationLock;
  let e = null;
  return (it(t) || Ps(t) || gt(t) || Fe(t)) && (e = t.orientationLock), e;
}
function rn(t, e) {
  const i = $f(t);
  if (!Le(i)) return null;
  if (!e || "direction" in t) return i;
  if (!it(t) && Da(t)) return null;
  if ("getStock" in e) {
    const s = e.getStock;
    if (s && Le(s.grain))
      return i === s.grain ? "l" : "w";
  }
  return i;
}
function Go(t, e) {
  if (it(t))
    return Qi(t, e, t.rot) ? [t.rot] : [];
  const i = [];
  for (let s = 0; s <= 1; s++)
    Dt(t, s, e) && Qi(t, e, s) && i.push(s);
  return i;
}
function Dt(t, e = null, i = null) {
  if (!Le(e))
    throw new Error("no rotation provided to canRotate");
  if (e === !0 && (e = 1), e === !1 && (e = 0), t.preventAutoRotation && e !== 0 || !it(t) && Da(t) && e !== 0 || i && !Qi(t, i, e))
    return !1;
  const s = rn(t, i);
  return !(s === "l" && e === 1 || s === "w" && e === 0);
}
function Df(t, e = null, i = null) {
  const s = "rot" in t ? t.rot : 0;
  return e === null && (e = s === 0 ? 1 : 0), !it(t) && Da(t) ? !0 : Dt(t, e, i) ? (s === e || Ff(t), !0) : !1;
}
function yt(t, e = null, i = null) {
  return e ? e = 1 : e = 0, i && e && !Qi(t, i, e) ? !1 : Df(t, e, i);
}
function Gw(t, e) {
  if (it(t)) return t.rot;
  if (!Le(t.orientationLock)) return null;
  const i = e.getStock;
  return !t.orientationLock || !Le(i?.grain) ? null : t.orientationLock === i?.grain ? 0 : 1;
}
function mr(t, e, i, s, n = null) {
  if (!s) throw new Error("requiredSide not supplied to canRotateToDimensionRange");
  const a = Ki(t);
  if (a.l >= e && a.l <= i || a.w >= e && a.w <= i) {
    if (t.l === t.w) return !0;
    const r = Math.max(a.l, a.w), o = Math.min(a.l, a.w);
    if (n) {
      if (s === "l") {
        if (r >= e && r <= i && Dt(t, 0, n) || o >= e && o <= i && Dt(t, 1, n)) return !0;
      } else if (s === "w" && (o >= e && o <= i && Dt(t, 0, n) || r >= e && r <= i && Dt(t, 1, n)))
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
function Ef(t, e, i, s) {
  if (!i) throw new Error("requiredSide not supplied to rotateToDimension");
  if (t.l !== e && t.w !== e) return !1;
  if (t.l === t.w) return !0;
  const n = Ki(t), a = Math.max(n.l, n.w), r = Math.min(n.l, n.w);
  if (i === "l") {
    if (a === e && Dt(t, 0, s)) return yt(t, 0);
    if (r === e && Dt(t, 1, s)) return yt(t, 1);
  } else if (i === "w") {
    if (r === e && Dt(t, 0, s)) return yt(t, 0);
    if (a === e && Dt(t, 1, s)) return yt(t, 1);
  }
  return !1;
}
function Da(t) {
  No(t);
  const e = Ki(t);
  return pe.equalTo(e.l, e.w);
}
class Pn extends Ke {
  // Zod schema for validation and serialization
  static schema = xa;
  static computedProperties = ka;
  constructor(e = {}) {
    super(e);
    let i = !1;
    Nt(this) && (i = this.infiniteLength), !e?.preventAutoRotation && !i && (this.orientationLock ? (this.orientationLock === "l" && yt(this, 0), this.orientationLock === "w" && yt(this, 1)) : this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !e?.preventGrainRotation && (this.grain = hi(this.grain)))), this.calculateDimensions(), e.skipValidation || e.skipBusinessValidation || e.validationMode === "none" || e.validationMode === "schema" || this.validate();
  }
  /**
   * Calculate derived dimensions (area, longSide, shortSide, parentId)
   * Called automatically in constructor and after dimension changes
   */
  calculateDimensions() {
    this.area = this.l * this.w, this.longSide = Math.max(this.l, this.w), this.shortSide = Math.min(this.l, this.w), this.parentId = bu(this.id);
  }
  /**
   * Get entity type
   */
  getType() {
    return J.Rectangle;
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
        return new Li({
          x1: i,
          x2: i + this.l,
          y1: s,
          y2: s,
          type: "bottom",
          validationMode: "none"
          // parentId: this.id
        });
      case "right":
        return new Li({
          x1: i + this.l,
          x2: i + this.l,
          y1: s,
          y2: s + this.w,
          type: "right",
          validationMode: "none"
          // parentId: this.id
        });
      case "top":
        return new Li({
          x1: i,
          x2: i + this.l,
          y1: s + this.w,
          y2: s + this.w,
          type: "top",
          validationMode: "none"
          // parentId: this.id
        });
      case "left":
        return new Li({
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
      bottomLeft: new pt(this.x, this.y),
      topLeft: new pt(this.x, this.y + this.w),
      topRight: new pt(this.x + this.l, this.y + this.w),
      bottomRight: new pt(this.x + this.l, this.y)
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
    const s = new Pn({
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
class Ea extends Pn {
  // Zod schema for validation and serialization
  static schema = Ia;
  static computedProperties = Pa;
  constructor(e = {}) {
    super(e), e.skipValidation || this.validateContainer(e);
  }
  // applyComputedProperties removed - handled by SchemaClass base
  // Container.computedProperties includes Rectangle.computedProperties via spread
  /**
    * Get entity type
    */
  getType() {
    return J.Container;
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
    const i = Ea.schema.partial().parse(e);
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
    return Nt(this) ? this : Ui(this) ? this.stock : it(this) ? this.stock : null;
  }
}
class ri extends Ke {
  // Required: Define schema and computed properties
  static schema = ho;
  static computedProperties = Iu;
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
    return J.GuillotineState;
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
function qo(t, e = "cc") {
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
const zo = {
  /**
   * Model 0: Original behavior
   * - L column means larger dimension
   * - L and W order does not matter
   * - Orientation set by orientationLock
   */
  0: {
    name: "Original",
    lColumnMeaning: "Larger dimension (visual)",
    orientationBasedOnDimensions: !1,
    sidesLMatchShapeL: !1,
    affectedExtraTypes: [],
    calculateOrientationLock: () => "",
    defaultOrientationLock: () => ""
  },
  /**
   * Model 1: L = stock length dimension
   * - Orientation and banding controlled by L/W order
   * - Clicking orientation button allows free rotation
   */
  1: {
    name: "L = Stock Length",
    lColumnMeaning: "Stock length dimension",
    orientationBasedOnDimensions: !0,
    sidesLMatchShapeL: !0,
    affectedExtraTypes: ["banding", "planing"],
    calculateOrientationLock: (t, e, i) => e >= i ? t === "n" ? "l" : t === "y" ? "" : t : t === "n" ? "w" : t === "y" ? "" : t === "l" ? "w" : "l",
    defaultOrientationLock: () => ""
  },
  /**
   * Model 2: L = grain direction
   * - L field means direction of GRAIN
   * - Banding L values match L column values
   */
  2: {
    name: "L = Grain Direction",
    lColumnMeaning: "Grain direction",
    orientationBasedOnDimensions: !0,
    sidesLMatchShapeL: !0,
    affectedExtraTypes: ["banding", "planing"],
    calculateOrientationLock: (t, e, i) => t === "n" || t === "y" ? "" : e >= i ? t : t === "l" ? "w" : "l",
    defaultOrientationLock: (t) => t === "n" || t === "y" ? "" : "l"
  }
};
function qw(t) {
  return t !== 0 && t !== 1 && t !== 2 ? !1 : zo[t].sidesLMatchShapeL;
}
function zw(t) {
  return t !== 0 && t !== 1 && t !== 2 ? [] : zo[t].affectedExtraTypes;
}
function Hs(t = 0, e, i = null, s = null, n = null) {
  if (!Fe(i) && !Jt || s === "stock") return !1;
  let a, r;
  if (Fe(i) ? a = i.orientationLock : Jt(i) ? a = i.direction : s === "shape" && (a = n), t === 0 || Jt(i))
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
function Mf(t, e, i = null, s = null, n = null) {
  if (!Fe(i) || s === "shape") return !1;
  let a;
  return t === 0 || t === 1 || t === 2 ? Hs(t, e, i, s, n) ? "cc" : !1 : a;
}
class Ma extends Ke {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Do;
  static computedProperties = Id;
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
    return J.Cut;
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
    return new Ma({ x1: e, y1: i, x2: s, y2: n, position: r, stock: a });
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
class Wo extends Pn {
  // Zod schema for validation and serialization
  static schema = ks;
  static computedProperties = Is;
  constructor(e = {}) {
    if (super(e), !this.guillotineState)
      this.guillotineState = new ri();
    else if (!(this.guillotineState instanceof ri)) {
      const i = typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new ri(i);
    }
    (!this.firstShape || typeof this.firstShape != "object") && (this.firstShape = { sampleRotations: [], isFirstShape: !1 }), (!this.priority || typeof this.priority != "object") && (this.priority = {}), gt(this) && (!this.group || typeof this.group != "object") && (this.group = {
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
    if (!this.guillotineState || !(this.guillotineState instanceof ri)) {
      const e = this.guillotineState && typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new ri(e);
    }
  }
  /**
   * Override update to ensure guillotineState is properly handled
   */
  update(e) {
    const i = this.guillotineState instanceof ri ? this.guillotineState : null;
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
    return J.Placeable;
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
    if (this.added = !1, this.stock = null, this.placementOrder = void 0, this.x = 0, this.y = 0, e || (this.score = null, this.bestScore = null), this.firstShape.isFirstShape = !1, n || (this.firstShape.sampleRotations = []), this.patternMatch = !1, this.fitsStock = null, this.guillotineState instanceof ri)
      if (i) {
        const a = this.guillotineState.stripShapeBatches;
        this.guillotineState.reset(), a && (this.guillotineState.stripShapeBatches = a);
      } else
        this.guillotineState.reset();
    else
      this.guillotineState = new ri();
    gt(this) && (s || "group" in this && this.group && (delete this.group.placementOrder, this.group.inGroup = !1, this.group.inUserGroup = !1, this.group.reference = null, this.group.addedAsGroup = null)), it(this) && "shapes" in this && Array.isArray(this.shapes) && this.shapes.forEach((a) => {
      "reset" in a && typeof a.reset == "function" && a.reset(e, i, s);
    });
  }
  /**
   * Add shape to stock (placeholder for optimization logic)
   */
  addToStock(e) {
    this.stock = e, this.added = !0, e.used = !0, this.grain = e.grain, !it(this) && e?.grain && this.rot && (this.grain = hi(e.grain));
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.added = !1, gt(this) && (this.group.addedAsGroup = null, this.firstShape.isFirstShape = !1), it(this) && this.shapes.forEach((e) => {
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
    return !i || Hu(i) || !i.stripShapeBatches?.groups || !(e in i.stripShapeBatches.groups) ? !1 : i.stripShapeBatches.groups[e];
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
      group: gt(e) ? e.group.reference : null,
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
    yt(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
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
    return Nt(e) && typeof this.fitsStock?.[e.parentId] < "u" ? this.fitsStock?.[e.parentId]?.[i ?? "any"] === !0 : Qi(this, e, i);
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
    let n = e?.options?.minSpacing || 0;
    if (s > n && (n = s), e.options?.minSpacingDimension?.dimension && e.options?.minSpacingDimension?.minSpacing) {
      const a = e.options?.minSpacingDimension?.dimension;
      (this.l <= a || this.w <= a) && (n = e.options?.minSpacingDimension?.minSpacing || n);
    }
    return i && (n -= s), n < 0 && (n = 0), n;
  }
  /**
   * Set the stock this item is placed on
   */
  setStock(e) {
    this.stock = e;
  }
  getCoords(e, i = !1) {
    const s = new pt(this.x + this.l, this.y);
    s.corner = "bottomRight";
    const n = new pt(this.x, this.y + this.w);
    if (n.corner = "topLeft", e?.cutType !== "efficiency" && !i)
      return [n, s];
    const a = new pt(this.x, this.y);
    a.corner = "bottomLeft";
    const r = new pt(this.x + this.l, this.y + this.w);
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
    if (this.getType() === J.Shape && this.identicalTo?.length && (this.parentId === e.parentId || this.identicalTo.includes(e.parentId)))
      return !0;
    if (this.getType() !== J.Group) {
      if (e.parentId === this.parentId) return !0;
      if (this.getType() === J.Shape && i && this.parentId !== e.parentId) return !1;
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
    return e === null && (e = Nt(this.stock) ? this.stock.bladeWidth / 2 : 0), [
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
    return this.getPerimeterCutVectors().forEach((n) => i.push(new Ma({
      stock: Nt(this.stock) ? this.stock : e,
      x1: n.x1,
      x2: n.x2,
      y1: n.y1,
      y2: n.y2,
      position: n.type
    }))), i = i.filter((n) => n.isInsideStock), i;
  }
}
let Es = null, Hn = !1;
function _f() {
  if (Hn)
    return Es;
  try {
    Es = { runTests: !1, throwErrorsOnFailedTests: !1 }, Hn = !0;
  } catch {
    Es = { runTests: !1, throwErrorsOnFailedTests: !1 }, Hn = !0;
  }
  return Es;
}
const yr = to("tests");
to("timers");
let Rf, nt;
try {
  {
    const t = new Proxy({}, { get: () => () => t });
    nt = () => t;
  }
} catch {
  const e = new Proxy({}, { get: () => () => e });
  nt = () => e;
}
function It(t = [], e = null) {
  if (!t?.length) return;
  const i = _f();
  if (ui() && i && i.runTests) {
    const n = i?.testCollector || Rf;
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
        if (o = !1, l = c instanceof Error ? c.message : String(c), e ? yr(e, l) : yr(l), n && n.addResult({
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
function jf(t) {
  return t === "horizontal" ? "x" : t === "vertical" ? "y" : null;
}
function br(t) {
  return t === "horizontal" ? "l" : t === "vertical" ? "w" : null;
}
class Cn extends Wo {
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
  static schema = ys;
  static computedProperties = vo;
  static defaults = ys.parse({});
  constructor(e = {}) {
    super(e);
  }
  /**
    * Get entity type
    */
  getType() {
    return J.Shape;
  }
  /**
    * Create shape with live objects
    */
  static create(e) {
    const i = new Cn(e.data);
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
    yt(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
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
class An extends Wo {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Tu;
  static computedProperties = Ou;
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
    return this.type === "user" ? J.UserGroup : this.type === "strip" ? J.StripGroup : this.type === "firstShape" ? J.FirstShapeGroup : J.Group;
  }
  /**
    * Initialize shapes array with optional context for reference resolution
    */
  initShapes(e, i) {
    return e.map((s) => {
      if (!gt(s) && !Ku(s))
        throw console.log(s), new Error("[GROUP] attempted to init a group with an item other than a shape");
      if (gt(s))
        return s.group.reference = this, s.group.inGroup = !0, s;
      if (i && i.shapeList && s) {
        const a = i.shapeList.find((r) => r.autoId === s.autoId);
        if (a)
          return a.group.reference = this, a.group.inGroup = !0, a;
      }
      const n = i ? { ...s, __context: i } : s;
      return new Cn(n);
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
    const i = { ...e.data, shapes: e.shapes }, s = new An(i);
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
          s && (yt(s, i.rot, this.container) || console.error(`  ❌ FAILED to restore rotation for ${s.id} from ${s.rot} to ${i.rot}`));
        }
      if (this.positions && this.positions.length > 0)
        for (const i of this.positions) {
          const s = this.shapes.find((n) => n.autoId === i.autoId);
          s && s.rot !== i.rot && (console.warn(`[placeMyShapes] Shape ${s.id} has wrong rotation ${s.rot}, expected ${i.rot} - forcing rotation now`), yt(s, i.rot, this.container) || console.error(`[placeMyShapes] ❌ CRITICAL: Cannot fix rotation for ${s.id}`));
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
        if (s.x = this.x + n.x, s.y = this.y + n.y, !yt(s, n.rot, this.container)) throw new Error("placeMyShapes - unable to set rotation for shape in group");
        i === 0 && this.x === 0 && this.y === 0 && (s.firstShape.isFirstShape = !0), s.group.addedAsGroup = this, It([
          () => nt(this.type === "position" ? s.group.inGroup : !s.group.inGroup).toBe(!0)
        ], `placeMyShapes: Shape ${s.id} inGroup flag should match group type (${this.type})`), It([
          () => nt(s.group.addedAsGroup).toBe(this),
          () => nt(typeof s.group.addedAsGroup).not.toBe("string")
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
        const u = this.shapes.find((h) => h.autoId === l);
        u && u.rot !== c && yt(u, c, this.container);
      }
    }
    this.positions = [], this.type !== "user" && this.sortShapes();
    let i = 0;
    const s = jf(this.direction), n = br(this.direction);
    let a = 0;
    for (const l of this.shapes) {
      if (!l) continue;
      const c = a === this.shapes.length - 1 ? 0 : l.getMinSpacing(this.container.saw), u = e.get(l.autoId) ?? l.rot.valueOf();
      let h;
      u !== l.rot ? h = n === "l" ? l.w : l.l : h = l[n];
      const d = {
        autoId: l.autoId,
        x: 0,
        y: 0,
        rot: u
      };
      s === "x" ? d.x = i : d.y = i, this.positions.push(d), l.group.inGroup = !0, i += a === this.shapes.length - 1 ? h : h + c, a++;
    }
    this.groupLength = i;
    const r = hi(n), o = this.shapes.reduce(
      (l, c) => {
        const u = e.get(c.autoId);
        let h;
        return u !== void 0 && u !== c.rot ? h = r === "l" ? c.w : c.l : h = c[r], h > l ? h : l;
      },
      0
    );
    if (this.groupWidth = o, ui()) {
      const l = this.shapes.slice(0, -1).reduce((h, d) => h + d.getMinSpacing(this.container.saw), 0), u = this.shapes.reduce((h, d) => h + d[n], 0) + l;
      It([
        () => nt(
          pe.equalTo(u, this.groupLength),
          "group dimension is incorrect in direction"
        ).to.be.true,
        () => nt(
          i,
          "currentPosition is incorrect in direction"
        ).to.equal(this.groupLength),
        () => nt(
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
    const e = br(this.direction), i = hi(e);
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
      It([
        () => nt(e.every((s) => !s.group?.inGroup)).toBe(!0),
        () => nt(e.every((s) => !s.group?.reference)).toBe(!0)
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
function Vf(t, e) {
  const i = e === "x" ? "l" : "w", s = e === "x" ? "y" : "x";
  return t?.length ? t.reduce((a, r) => {
    const o = a[e] + a[i], l = r[e] + r[i];
    return o > l ? a : l > o ? r : a[s] < r[s] ? a : r;
  }) : null;
}
function Ww(t, e = null) {
  return e ? t.filter((i) => i.added && i?.stock?.id === e.id) : t.filter((i) => i.added);
}
function Hw(t, e = !1, i = !1) {
  if (!t?.length) return [];
  let s = t;
  if (e !== null && (s = t.filter((o) => o.added === e), !s.length))
    return [];
  const n = /* @__PURE__ */ new Map(), a = i ? /* @__PURE__ */ new Map() : null, r = [];
  for (const o of s) {
    let l;
    if (gt(o))
      l = o.parentId;
    else if (it(o))
      l = o.id;
    else
      continue;
    if (!n.has(l)) {
      if (n.set(l, !0), a) {
        const c = o.l <= o.w, u = c ? o.l : o.w, h = c ? o.w : o.l, d = u + "-" + h + "-" + o.orientationLock;
        if (a.has(d)) continue;
        a.set(d, !0);
      }
      r.push(o);
    }
  }
  return r;
}
const Bf = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return Oo(t, "orientationLock", ["l", "w"], e, i, s), s;
}, Nf = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return Oo(t, "grain", ["l", "w"], e, i, s), s;
}, Gf = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [], n = Ze(t, "banding");
  return n != null && (typeof n != "object" || n === null) && new ue({
    item: t,
    message: zt("errors.validation.must_be_object", { 0: "banding" }),
    shouldTranslate: !1,
    field: [["banding"]],
    index: [e],
    type: i ? "warning" : "error",
    issues: s,
    category: ["part"]
  }), s;
}, qf = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], a = Ze(t, "customData");
  if (a == null) return n;
  if (typeof a != "object" || a === null)
    return new ue({
      item: t,
      message: zt("errors.validation.must_be_object", {
        0: Qt.customData
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
        message: zt("errors.validation.must_be_string_number_boolean", {
          0: Qt.customData
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
}, zf = ({ item: t, index: e }) => {
  const i = Ze(t, "machining");
  i && "validateEverything" in i && i.validateEverything(t, e);
}, Wf = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], r = Ze(t, "x");
  return r === null || r === "" || r === void 0 || i != null && K({ v: r }) > i && new ue({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: lt("x", { returnKey: !0 }),
      // positional (legacy)
      field: lt("x", { returnKey: !0 }),
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
}, Hf = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], r = Ze(t, "y");
  return r === null || r === "" || r === void 0 || i != null && K({ v: r }) > i && new ue({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: lt("y", { returnKey: !0 }),
      // positional (legacy)
      field: lt("y", { returnKey: !0 }),
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
}, Uf = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], r = Ze(t, "l");
  return Ze(t, "infiniteLength") || (r === null || r === "" || r === void 0 || r === 0) && new ue({
    item: t,
    message: "errors.validation.not_set",
    params: {
      0: lt("l", { returnKey: !0 }),
      // positional (legacy)
      field: lt("l", { returnKey: !0 })
      // named (new)
    },
    field: [["l"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: a,
    category: n
  }), a;
}, Yf = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], r = Ze(t, "w");
  return (r === null || r === "" || r === void 0) && new ue({
    item: t,
    message: "errors.validation.not_set",
    params: {
      0: lt("w", { returnKey: !0 }),
      // positional (legacy)
      field: lt("w", { returnKey: !0 })
      // named (new)
    },
    field: [["w"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: a,
    category: n
  }), a;
}, Kf = ({ item: t, index: e, max: i, isWarning: s = !1, saw: n, category: a = [] }) => {
  const r = [], o = Ze(t, "t");
  return n?.cutType === "beam" && !o && new ue({
    item: t,
    message: "errors.saw.thickness_required_for_beam_saw",
    field: [["t"]],
    index: [e],
    type: "error",
    issues: r,
    category: a
  }), r;
}, Zf = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], a = Ze(t, "q"), r = Ze(t, "autoAdd");
  return a == null || r === !0, n;
}, Jf = ({
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
}, Xf = ({
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
      message: zt("errors.groups.part_needs_orientation_lock", { 0: o + 1 }),
      shouldTranslate: !1,
      field: [["orientationLock"]],
      index: [e],
      type: s ? "warning" : "error",
      issues: a,
      category: n
    });
  }), a;
}, Qf = ({
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
    const h = c.trimmedDimensions ? c.trimmedDimensions[s] : c[s];
    pe.equalTo(h, l) || new ue({
      item: t,
      message: zt("errors.groups.dimension_not_correct", {
        0: u + 2,
        1: s === "l" ? "length" : "width",
        2: l,
        3: h
      }),
      shouldTranslate: !1,
      index: [e],
      type: n ? "warning" : "error",
      issues: r,
      category: a
    });
  }), r;
}, Ho = ({
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
    message: zt("errors.groups.not_enough_of_part", {
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
function on(t) {
  return t && typeof t == "object" && "area" in t;
}
const oa = {
  missingProperty: (t, e) => `[Sorting Warning] Missing property "${t}" in ${e}`,
  missingMethod: (t, e) => `[Sorting Warning] Missing method "${t}" in ${e}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
}, ut = (t, e, i) => e in t ? t[e] : (console.warn(oa.missingProperty(String(e), i)), null), Ms = (t, e) => (i, s) => {
  const n = t(i, s);
  return n !== 0 ? n : e(i, s);
}, Vi = (t, e) => {
  if (on(t) && on(e))
    return t.area < e.area ? -1 : t.area > e.area ? 1 : 0;
  const i = "l" in t && "w" in t ? Number(t.l) * Number(t.w) : 0, s = "l" in e && "w" in e ? Number(e.l) * Number(e.w) : 0;
  return i < s ? -1 : i > s ? 1 : 0;
}, Rt = (t, e) => {
  const i = ut(t, "id", "first item"), s = ut(e, "id", "second item");
  if (i === null || s === null || i === void 0 || s === void 0) return 0;
  const n = i.toString().split("."), a = s.toString().split(".");
  return n[0] !== a[0] ? parseInt(n[0]) - parseInt(a[0]) : parseInt(n[1]) - parseInt(a[1]);
};
function Ut(t) {
  const e = Array.isArray(t[0]) ? t.map(([i, s]) => ({ key: i, direction: s })) : t;
  return (i, s) => {
    for (const { key: n, direction: a } of e) {
      const r = ut(i, n, "first item"), o = ut(s, n, "second item");
      if (!(r === null || o === null) && r !== o)
        return a === "desc" ? r < o ? 1 : -1 : r < o ? -1 : 1;
    }
    return 0;
  };
}
function Uo(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s > n ? i : e;
  }) : null;
}
function eh(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s < n ? i : e;
  }) : null;
}
const ei = {
  // Dimension-based sorts
  WDLD: Ut([
    ["w", "desc"],
    ["l", "desc"]
  ]),
  WALA: Ut([
    ["w", "asc"],
    ["l", "asc"]
  ]),
  LDWD: Ut([
    ["l", "desc"],
    ["w", "desc"]
  ]),
  LAWA: Ut([
    ["l", "asc"],
    ["w", "asc"]
  ]),
  WD: Ut([["w", "desc"]]),
  LD: Ut([["l", "desc"]]),
  // ID-based sorts
  LDIDA: Ms(
    Ut([["l", "desc"]]),
    Rt
  ),
  WDIDA: Ms(
    Ut([["w", "desc"]]),
    Rt
  ),
  // Area-based sorts
  AD: (t, e) => -Vi(t, e),
  AA: Vi,
  AAID: Ms(
    Vi,
    Rt
  ),
  ADID: Ms(
    (t, e) => -Vi(t, e),
    Rt
  ),
  // ID sorts
  ID: Rt,
  IDDesc: (t, e) => -Rt(t, e),
  StockID: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    return !i || !s ? 0 : Rt(i, s);
  },
  StockIDAD: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s) return 0;
    const n = Rt(i, s);
    return n !== 0 ? n : -Vi(t, e);
  },
  // Position sorts
  YX: Ut([
    ["y", "asc"],
    ["x", "asc"]
  ]),
  XY: Ut([
    ["x", "asc"],
    ["y", "asc"]
  ]),
  // Placement order sorts
  placementOrder: (t, e) => {
    const i = ut(t, "placementOrder", "first item") ?? 0, s = ut(e, "placementOrder", "second item") ?? 0;
    return i - s;
  },
  typePlacementOrder: (t, e) => {
    const i = ut(t, "offcut", "first item"), s = ut(e, "offcut", "second item"), n = ut(t, "placementOrder", "first item") ?? 0, a = ut(e, "placementOrder", "second item") ?? 0;
    return i && !s ? 1 : !i && s ? -1 : n - a;
  },
  typeID: (t, e) => {
    const i = ut(t, "offcut", "first item"), s = ut(e, "offcut", "second item");
    return i && !s ? 1 : !i && s ? -1 : Rt(t, e);
  },
  stockIDTypePlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s) return 0;
    const n = Rt(i, s);
    if (n !== 0) return n;
    const a = ut(t, "offcut", "first item"), r = ut(e, "offcut", "second item");
    if (a && !r) return 1;
    if (!a && r) return -1;
    const o = ut(t, "placementOrder", "first item") ?? 0, l = ut(e, "placementOrder", "second item") ?? 0;
    return o - l;
  },
  offcutPlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i?.id || !s?.id) return 0;
    const n = Rt(i, s);
    if (n !== 0) return n;
    if ("placementOrder" in t && "placementOrder" in e) {
      const a = ut(t, "placementOrder", "first item") ?? 0, r = ut(e, "placementOrder", "second item") ?? 0;
      return a - r;
    }
    return 0;
  },
  groupPlacementOrder: (t, e) => {
    const i = ut(t, "placementOrder", "first item") ?? 0, s = ut(e, "placementOrder", "second item") ?? 0, n = i - s;
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
    if (on(t) && on(e) && t.aspect && e.aspect)
      return e.aspect - t.aspect;
    if (!("l" in t) || !("w" in t) || !("l" in e) || !("w" in e))
      return console.warn(oa.missingAspect), 0;
    const i = Math.max(Number(t.l), Number(t.w)) / Math.min(Number(t.l), Number(t.w));
    return Math.max(Number(e.l), Number(e.w)) / Math.min(Number(e.l), Number(e.w)) - i;
  },
  fillThenArea(t) {
    return (e, i) => !("l" in e) || !("w" in e) || !("l" in i) || !("w" in i) ? (console.warn(oa.missingLongSide), 0) : i[t] === e[t] ? -Vi(e, i) : parseFloat(String(i[t])) - parseFloat(String(e[t]));
  },
  // Utility functions
  getLargest: Uo,
  getSmallest: eh
};
function th(t) {
  return Fe(t) || gt(t) || Ps(t);
}
function ih(t, e, i) {
  if (!i) return !0;
  const s = e?.material?.toLowerCase(), n = t?.material?.toLowerCase();
  return !s && !n || s === n;
}
function sh(t, e, i) {
  return i ? !Le(t.t) || !Le(e.t) ? !1 : pe.equalTo(K({ v: t.t }), K({ v: e.t })) : !0;
}
function nh(t, e, i) {
  return i?.stockType !== "linear" || !gt(t) && !Fe(t) ? !0 : Dt(t, 0, e) && pe.equalTo(K({ v: t.w }), K({ v: e.w })) || Dt(t, 1, e) && pe.equalTo(K({ v: t.l }), K({ v: e.w }));
}
function Yo(t, e, i, s = 0) {
  const n = Fe(t[0]), a = i.stockType;
  if (t.some((A) => Le(A.stockLock) && A.stockLock.length))
    return { stockList: e, shapeList: t, unusableShapes: [], unusableStock: [], newIssues: [] };
  e = e.filter((A) => n || A.autoAdd === !0 || Le(A.q) && Number(A.q) > 0);
  const o = e.some((A) => Le(A.material)), l = e.some((A) => Le(A.t)), c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), g = [];
  let x = s;
  for (const A of t) {
    const E = e.map((M, N) => {
      const D = th(A) && Qi(A, M), k = ih(A, M, o), $ = sh(A, M, l), b = nh(A, M, i);
      return {
        stockItem: M,
        stockIndex: N,
        fit: D,
        material: k,
        thickness: $,
        width: b,
        // For this stock item, does it satisfy all requirements?
        satisfiesAll: D && k && $ && (a !== "linear" || b)
      };
    });
    A.stockMatch = {
      fit: E.some((M) => M.fit),
      material: !o || E.some((M) => M.material),
      thickness: !l || E.some((M) => M.thickness),
      width: a !== "linear" || E.some((M) => M.width)
    };
    const Y = E.filter((M) => M.satisfiesAll), O = Y.length > 0;
    if (!n && O) {
      const M = Y.map((N) => N.stockItem.parentId);
      A.stockLock = M, M.forEach((N) => c.add(N));
    }
    A.stockMatch.fit ? O || (o && !A.stockMatch.material && (d.add(A), g.push(new ue({
      category: ["part", "stock"],
      item: A,
      field: [["material"]],
      index: [x],
      message: "errors.validation.no_matching_stock_material"
    }))), l && !A.stockMatch.thickness && (d.add(A), g.push(new ue({
      category: ["part", "stock"],
      item: A,
      field: [["t"]],
      index: [x],
      message: "errors.validation.no_matching_stock_thickness"
    }))), a === "linear" && !A.stockMatch.width && (h.add(A), g.push(new ue({
      category: ["part", "stock"],
      item: A,
      field: [["w"]],
      index: [x],
      message: "errors.validation.no_matching_stock_width"
    }))), A.stockMatch.material && A.stockMatch.thickness && (a !== "linear" || A.stockMatch.width) && (d.add(A), g.push(new ue({
      category: ["part", "stock"],
      item: A,
      field: [["material"], ["t"]],
      index: [x],
      message: "errors.validation.no_stock_matches_all_requirements"
    })))) : (u.add(A), g.push(new ue({
      category: ["part", "stock"],
      item: A,
      field: [["l"], ["w"]],
      index: [x],
      message: "errors.validation.will_not_fit"
    }))), x++;
  }
  t.forEach((A) => A.stockMatch = null);
  let V, H;
  return n ? (V = t.filter((A) => u.has(A) || h.has(A) || d.has(A)).sort(ei.ID), H = []) : (V = t.filter((A) => u.has(A) || h.has(A) || d.has(A) || !A.stockLock || !A.stockLock.length).sort(ei.ID), H = e.filter((A) => !c.has(A.parentId)).sort(ei.ID), e = e.filter((A) => Nt(A)).filter((A) => c.has(A.parentId)), t = t.filter((A) => !u.has(A) && !h.has(A) && !d.has(A) && A?.stockLock?.length)), {
    stockList: e,
    unusableStock: H,
    shapeList: t,
    unusableShapes: V,
    newIssues: g
  };
}
function ah(t) {
  return t?.issues?.length > 0;
}
const rh = ({
  item: t,
  inputStockList: e,
  saw: i,
  partTrim: s = 0,
  index: n
}) => {
  const a = [], r = i.stockType, o = Ze(t, "q"), l = Ze(t, "l"), c = Ze(t, "w");
  return !o || !l || !c || ("applyPartTrim" in t && typeof t.applyPartTrim == "function" && t.applyPartTrim(s, r), ah(t)) || Yo([t], e, i, n).newIssues.forEach((h) => {
    a.push(h);
  }), a;
}, oh = ({
  item: t,
  partTrim: e,
  index: i,
  isWarning: s = !1
}) => {
  const n = [];
  if (!e) return n;
  const a = Ze(t, "l"), r = Ze(t, "w");
  if (!a || !r) return n;
  try {
    const o = K({ v: e }), l = K({ v: a }), c = K({ v: r }), u = l - o * 2, h = c - o * 2;
    (u <= 0 || h <= 0) && new ue({
      item: t,
      message: "errors.trim.too_much",
      params: {
        0: "part",
        // positional (legacy)
        1: o,
        // positional (legacy)
        2: `${u}x${h}`,
        // positional (legacy)
        item: "part",
        // named (new)
        trimValue: o,
        // named (new)
        result: `${u}x${h}`
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
}, lh = ({
  item: t,
  index: e,
  isWarning: i = !1,
  category: s = []
}) => {
  const n = [], a = Ze(t, "l"), r = Ze(t, "w"), o = Ze(t, "trim");
  if (!a || !r || !o) return n;
  if ((!Nt(t) || Nt(t) && !("trimmed" in t && t.trimmed)) && typeof o == "object" && o !== null)
    try {
      const c = K({ v: a }), u = K({ v: r }), h = (V) => {
        if (V == null) return 0;
        if (typeof V == "number" || typeof V == "string")
          try {
            return K({ v: V }) || 0;
          } catch {
            return 0;
          }
        return 0;
      }, d = {
        w1: h(Ze(o, "w1")),
        w2: h(Ze(o, "w2")),
        l1: h(Ze(o, "l1")),
        l2: h(Ze(o, "l2"))
      }, g = d.w1 + d.w2, x = d.l1 + d.l2;
      g >= c && new ue({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${lt("w1").toUpperCase()} + ${lt("w2").toUpperCase()}`,
          // positional (legacy)
          1: lt("l"),
          // positional (legacy)
          2: c,
          // positional (legacy)
          trimFields: `${lt("l1", { returnKey: !0 })} + ${lt("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: lt("l", { returnKey: !0 }),
          // named (new)
          maxValue: c
          // named (new)
        },
        field: [["trim", "w1"], ["trim", "w2"]],
        index: [e],
        type: i ? "warning" : "error",
        issues: n,
        category: s
      }), x >= u && new ue({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${lt("l1").toUpperCase()} + ${lt("l2").toUpperCase()}`,
          // positional (legacy)
          1: lt("w"),
          // positional (legacy)
          2: u,
          // positional (legacy)
          trimFields: `${lt("l1", { returnKey: !0 })} + ${lt("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: lt("w", { returnKey: !0 }),
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
}, vt = {
  // Dimensions
  x: Wf,
  y: Hf,
  l: Uf,
  w: Yf,
  t: Kf,
  q: Zf,
  // Trim
  trim: lh,
  partTrim: oh,
  // Custom
  customData: qf,
  banding: Gf,
  orientationLock: Bf,
  grain: Nf,
  machining: zf,
  // Stock
  stockMatch: rh,
  // Groups
  groupShapeCount: Jf,
  groupOrientationLock: Xf,
  groupDimensions: Qf,
  groupQuantity: Ho
};
class ln extends Ea {
  static schema = tn;
  static computedProperties = wo;
  static defaults = tn.parse({});
  constructor(e = {}) {
    const i = ln.preprocessData(e);
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
    return J.Stock;
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
      const n = vt.q({ item: e, index: e?.index });
      i.push(...n);
    }
    const s = vt.grain({ item: e, index: e?.index });
    i.push(...s), this.issues.push(...i.filter((n) => n));
  }
  /**
    * Create stock instance with live objects
    */
  static create(e) {
    const i = { ...e.data };
    e.saw && (i.saw = e.saw);
    const s = new ln(i);
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
    const s = Vf(e.filter((a) => a.added && a.stock.id === this.id), "x"), n = s.x + s.l;
    if (n > this.l) throw new Error("Furthest shape position exceeds stock length");
    return pe.equalTo(n, this.l) ? n : n + i;
  }
}
const pi = ["l1", "l2", "w1", "w2"], ch = ["a", "b", "c", "d"], Ft = [...pi, ...ch], wt = ["a", "b"];
class cn extends Ke {
  // Required: Define schema and computed properties for SchemaClass
  static schema = vn;
  static computedProperties = Ta;
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
class $t extends cn {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = Eo;
  static computedProperties = Ad;
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
      for (const s of wt)
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
      const s = i, n = Wt("finish");
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
      for (const e of wt)
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
    for (const i of wt)
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
    return new $t(e);
  }
  /**
   * Create empty finish
   */
  static empty() {
    return new $t();
  }
  /**
   * Create with both faces
   */
  static bothFaces(e = !0) {
    const i = new $t();
    return i.setBothFaces(e), i;
  }
  /**
   * Create with front face only
   */
  static frontOnly(e = !0) {
    const i = new $t();
    return i.setFace("a", e), i;
  }
  /**
   * Create with back face only
   */
  static backOnly(e = !0) {
    const i = new $t();
    return i.setFace("b", e), i;
  }
}
class xi extends cn {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = Bo;
  static computedProperties = hf;
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
  validateAgainstShape() {
    const e = this.validate();
    return this.issues = e, e;
  }
  /**
   * Set planing for a specific face
   */
  setFace(e, i) {
    if (!this.faces) {
      this.faces = {};
      for (const s of wt)
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
      const s = i, n = Wt("planing");
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
      for (const s of Ft)
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
      const s = i, n = Wt("planing");
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
      for (const e of wt)
        this.faces[e] = !1;
    if (this.sides)
      for (const e of Ft)
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
    for (const i of wt)
      this.setFace(i, e);
  }
  /**
   * Set all sides to the same value
   */
  setAllSides(e) {
    for (const i of Ft)
      this.setSide(i, e);
  }
  /**
   * Calculate total planing area
   */
  calculateArea(e, i) {
    let s = 0;
    if (this.faces) {
      const n = e * i;
      for (const a of wt)
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
      for (const a of Ft)
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
    return new xi(e);
  }
  /**
   * Create empty planing
   */
  static empty() {
    return new xi();
  }
  /**
   * Create with all faces and sides
   */
  static full(e = !0) {
    const i = new xi();
    return i.setAllFaces(e), i.setAllSides(e), i;
  }
  /**
   * Create with faces only
   */
  static facesOnly(e = !0) {
    const i = new xi();
    return i.setAllFaces(e), i;
  }
  /**
   * Create with sides only
   */
  static sidesOnly(e = !0) {
    const i = new xi();
    return i.setAllSides(e), i;
  }
}
class ot extends Ke {
  // Zod schema for validation and serialization
  static schema = Pd;
  static computedProperties = Cd;
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
    return J.Extras;
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
    if (bi(this.banding)) {
      const s = this.banding.validate(e);
      i.push(...s);
    }
    if (si(this.finish)) {
      const s = this.finish.validate(e);
      i.push(...s);
    }
    if (ni(this.planing)) {
      const s = this.planing.validate(e);
      i.push(...s);
    }
    if (ni(this.planing) && si(this.finish) && e?.t) {
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
    return bi(this.banding) && (i += this.banding.getCost(e)), si(this.finish) && (i += this.finish.getCost(e)), ni(this.planing) && (i += this.planing.getCost(e)), i;
  }
  /**
   * Get human-readable description of all extras
   */
  getDescription() {
    const e = [];
    return bi(this.banding) && this.banding.hasValues() && e.push(this.banding.getDescription()), si(this.finish) && this.finish.hasValues() && e.push(this.finish.getDescription()), ni(this.planing) && this.planing.hasValues() && e.push(this.planing.getDescription()), e.length > 0 ? e.join("; ") : "No extras";
  }
  /**
   * Check if any extras are applied
   */
  hasExtras() {
    return !!(bi(this.banding) && this.banding.hasValues() || si(this.finish) && this.finish.hasValues() || ni(this.planing) && this.planing.hasValues());
  }
  /**
   * Clear all extras
   */
  clear() {
    bi(this.banding) && this.banding.clear(), si(this.finish) && this.finish.clear(), ni(this.planing) && this.planing.clear();
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
    e ? e instanceof Vt ? this.banding = e : this.banding = new Vt(e) : this.banding = void 0;
  }
  /**
   * Set finish
   */
  setFinish(e) {
    e ? e instanceof $t ? this.finish = e : this.finish = new $t(e) : this.finish = void 0;
  }
  /**
   * Set planing
   */
  setPlaning(e) {
    e ? e instanceof xi ? this.planing = e : this.planing = new xi(e) : this.planing = void 0;
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
    return new ot(e);
  }
  /**
   * Create empty extras container
   */
  static empty() {
    return new ot();
  }
  /**
   * Create with specific extras
   */
  static create(e) {
    return new ot(e);
  }
  /**
   * Check if any extras are applicable to shape
   * Used for UI validation to determine if extras tab should be enabled
   */
  isApplicable(e) {
    return !!(bi(this.banding) && this.banding.isApplicable(e) || si(this.finish) && this.finish.isApplicable(e) || ni(this.planing) && this.planing.isApplicable(e));
  }
  /**
   * Get summary of active extras
   */
  getSummary() {
    return {
      hasBanding: bi(this.banding) && this.banding.hasValues() || !1,
      hasFinish: si(this.finish) && this.finish.hasValues() || !1,
      hasPlaning: ni(this.planing) && this.planing.hasValues() || !1,
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
    return s ? bi(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" ? Object.keys(s.sides).some((n) => {
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
    return s ? si(s) && typeof s.hasValues == "function" ? s.hasValues() : s.faces && typeof s.faces == "object" ? Object.keys(s.faces).some((n) => {
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
    return s ? ni(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" && Object.keys(s.sides).some((a) => {
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
    return s ? Yu(s) && typeof s.hasValues == "function" ? s.hasValues() : s.images && Array.isArray(s.images) ? s.images.length > 0 : !1 : !1;
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
          return ot.hasBanding(e);
        case "finish":
          return ot.hasFinish(e);
        case "planing":
          return ot.hasPlaning(e);
        case "imageUpload":
          return ot.hasImageUpload(e);
      }
    return ot.hasBanding(e) || ot.hasFinish(e) || ot.hasPlaning(e) || ot.hasImageUpload(e);
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
    return ot.hasBanding(e) && i.push("banding"), ot.hasFinish(e) && i.push("finish"), ot.hasPlaning(e) && i.push("planing"), i;
  }
}
const vr = !1;
function uh() {
  return {
    banding: {
      scope: ["sides"],
      sides: pi.map((t) => `side.${t}`)
      // Only use main sides (l1/l2/w1/w2), not corners
    },
    finish: {
      scope: ["faces"],
      faces: wt.map((t) => `face.${t}`)
    },
    planing: {
      scope: ["faces", "sides"],
      faces: wt.map((t) => `face.${t}`),
      sides: pi.map((t) => `side.${t}`)
      // Only use main sides (l1/l2/w1/w2)
      /* constraints: {
      	// Example constraints for planing - you can customize these
      	global: {
      		t: { min: 10, message: 'Thickness must be at least 10mm for planing' }
      	},
      	locations: [
      		{
      			location: 'face.a',
      			properties: {
      				t: { min: 15, message: 'Face A planing requires at least 15mm thickness' }
      			}
      		},
      		{
      			location: 'face.b',
      			properties: {
      				t: { min: 15, message: 'Face B planing requires at least 15mm thickness' }
      			}
      		}
      	],
      	defaultMessage: 'Shape does not meet requirements for planing'
      } */
    },
    info: {
      scope: ["sides"],
      sides: Ft.map((t) => `side.${t}`)
    }
    /* imageUpload: {
    	scope: [ 'sides' ],
    	sides: ALL_SIDES.map( side => `side.${side}` as const )
    } */
  };
}
const dh = uh(), ii = (t) => dh[t] || {
  scope: ["sides"],
  sides: Ft.map((e) => `side.${e}`)
}, la = (t) => {
  const e = ii(t), i = [];
  return e.faces && i.push(...e.faces), e.sides && i.push(...e.sides), i;
}, Uw = (t) => (ii(t).faces || []).map((i) => {
  const s = Ai(i);
  return s.scope === "face" ? s.key : void 0;
}).filter((i) => i !== void 0), Yw = (t) => (ii(t).sides || []).map((i) => {
  const s = Ai(i);
  return s.scope === "side" ? s.key : void 0;
}).filter((i) => typeof i == "string"), Ai = (t) => {
  const e = t.split(".");
  if (e.length !== 2 || e[0] !== "face" && e[0] !== "side")
    throw new Error(`Invalid ExtraLocation format: ${t}. Must be 'face.X' or 'side.X'`);
  const i = e[0], s = e[1];
  if (i === "face" && !wt.includes(s))
    throw new Error(`Invalid face key '${s}' in location '${t}'`);
  if (i === "side" && !Ft.includes(s))
    throw new Error(`Invalid side key '${s}' in location '${t}'`);
  return {
    scope: i,
    key: s,
    original: t
  };
}, wr = (t) => Ai(t).scope, Ko = (t) => ii(t).scope.includes("faces"), Zo = (t) => ii(t).scope.includes("sides"), Kw = (t) => {
  const e = ii(t);
  return e.scope.includes("faces") && e.scope.includes("sides");
}, fh = (t, e) => {
  if (t.length === 1 && t[0].length === 1 && t[0][0] === !0)
    return "boolean";
  const i = t.flat().filter((a) => typeof a == "string"), n = [.../* @__PURE__ */ new Set([...i, ...e || []])].length;
  return n === 0 ? "multiple" : n === 1 ? "single" : "multiple";
}, Zw = (t, e = "") => {
  if (typeof t == "string") return t;
  if (typeof t == "boolean") return t ? "Y" : e;
  if (typeof t == "object" && t !== null && !Array.isArray(t)) {
    const i = Object.values(t).map((s) => typeof s == "string" ? s : typeof s == "boolean" && s ? "Y" : "").filter((s) => s !== "");
    return i.length > 0 ? i.join("|") : e;
  }
  return e;
}, hh = (t, e) => {
  const i = t;
  i.extras || (i.extras = {}), i.extras[e] || (i.extras[e] = {});
  const s = i.extras[e];
  Ko(e) && (s.faces || (s.faces = {})), Zo(e) && (s.sides || (s.sides = {}));
}, ph = (t, e, i) => {
  hh(t, e);
  const n = t.extras[e], { scope: a } = Ai(i);
  return a === "face" ? {
    extraContainer: n.faces || {}
  } : {
    extraContainer: n.sides || {}
  };
}, ki = (t, e, i) => {
  const s = es(t, e, i);
  if (s == null || s === !1 || s === "")
    return !1;
  if (typeof s != "object" || Array.isArray(s))
    return typeof s == "boolean" ? s : typeof s == "string" ? s.trim() !== "" : !!s;
  const n = Wt(e);
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
}, gh = (t, e, i, s, n) => {
  const a = Wt(e);
  if (a) {
    const r = es(t, e, i);
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
}, Jw = (t, e, i, s, n, a, r) => {
  if (Wt(e))
    switch (xh(e)) {
      case "boolean":
        gs(t, e, i, !!n);
        break;
      case "string":
        gs(t, e, i, String(n));
        break;
      case "object":
        {
          let c = es(t, e, i) || {};
          typeof c != "object" && (c = {}), c[s] = n, gs(t, e, i, c);
        }
        break;
    }
}, mh = (t, e, i, s) => {
  Sh(t, e, i);
}, Xw = (t, e, i, s, n) => {
  if (i.length === 0) return null;
  const a = i.map((r) => gh(t, e, r, s));
  if (n === "boolean" || n === "single") {
    const r = a.every((l) => !!l), o = a.every((l) => !l);
    return r ? !0 : o ? !1 : null;
  }
  if (n === "multiple") {
    const r = a[0];
    return a.every((l) => l === r) ? r : null;
  }
  return null;
}, Qw = (t, e, i, s) => {
  i.forEach((n) => {
    mh(t, e, n);
  });
}, Un = (t, e, i, s, n, a) => {
  const r = es(t, e, i), o = [];
  if (r && a?.length)
    if (typeof r == "object" && !Array.isArray(r)) {
      const c = r;
      for (const u of a) {
        const h = c[u];
        if (!h) {
          o.push("");
          continue;
        }
        if (h === !0) {
          const d = Wt(e), g = d?.labels.indexOf(u) ?? -1, x = g !== -1 && d?.options[g], V = x?.length === 1 ? x[0] : u;
          o.push(V);
          continue;
        }
        o.push(String(h));
      }
    } else if (typeof r == "string") {
      const c = r.split("|");
      a.forEach((u, h) => {
        o.push(c[h] || "");
      });
    } else
      o.push(String(r));
  else if (r)
    if (typeof r == "string" && a?.length) {
      const c = r.split("|");
      a.forEach((u, h) => {
        o.push(c[h] || "");
      });
    } else
      o.push(String(r));
  const l = o.filter((c) => c && typeof c == "string" && c.trim() !== "");
  if (!Array.isArray(l) || !l.length)
    return !1;
  if (!s)
    return 0;
  try {
    const c = l.map((h, d) => {
      if (typeof h == "boolean" && h === !0 && n) {
        const g = n[d];
        if (g && g.length === 1)
          return String(g[0]);
      }
      return String(h);
    });
    return s(e, c);
  } catch (c) {
    return console.error("Error calculating extras price:", c), !1;
  }
}, eS = (t, e, i) => {
  const s = /* @__PURE__ */ new Set(), n = ii(e);
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
}, tS = (t, e, i, s) => {
  const n = s[0], a = ii(e);
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
}, iS = (t, e, i) => {
  const s = ii(e);
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
}, yh = (t, e, i, s = !1) => {
  const n = ii(e), a = t;
  a.extras[e] || (a.extras[e] = {});
  const r = a.extras[e];
  r.options || (r.options = {});
  const o = r.options;
  if (Ko(e) && (r.faces || (r.faces = {}), o.faces || (o.faces = {})), Zo(e) && (r.sides || (r.sides = {}), o.sides || (o.sides = {})), s) {
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
}, Ti = (t, e, i, s = [], n = []) => {
  const a = fh(i, n);
  yh(t, e, a === "boolean" ? [] : s, a === "boolean");
}, bh = (t, e, i, s) => {
  if (!i || !Object.keys(i).length)
    return { valid: !0, messages: [], incompleteLocations: [] };
  const n = [], a = [], r = la(e), o = Object.keys(i), l = Math.max(...o.map((u) => u.split("|").length));
  if (l <= 1)
    return { valid: !0, messages: [], incompleteLocations: [] };
  for (const u of r) {
    const { extraContainer: h } = ph(t, e, u), { key: d } = Ai(u), g = h[d];
    if (!g)
      continue;
    let x;
    typeof g == "string" ? x = g.includes("|") ? g.split("|") : [g] : typeof g == "boolean" ? x = g ? ["true"] : [] : typeof g == "object" && !Array.isArray(g) && g !== null ? x = Object.values(g).filter((Y) => Y != null && Y !== "" && Y !== !1).map((Y) => String(Y)) : x = [String(g)];
    const V = x.length;
    if (V === 0)
      continue;
    let H = !1, A = !1, E = "";
    if (V > 0) {
      if (s)
        try {
          const Y = x.filter((M) => M.trim() !== ""), O = s(e, Y);
          A = O !== null && O > 0;
        } catch (Y) {
          console.error("[validateExtrasCompleteness] Error getting price:", Y), A = !1;
        }
      else {
        const Y = x.join("|");
        A = o.some((O) => O === Y || O.startsWith(Y + "|"));
      }
      if (V < l) {
        H = !0;
        const Y = x.join("|");
        if (o.some((M) => M.startsWith(Y + "|")) && !A) {
          const M = l - V, N = x.join(", ");
          E = `${e} selection incomplete for ${u}. Selected: "${N}" but ${M} more level${M > 1 ? "s" : ""} required.`;
        }
      }
      !A && !H && (E = `${e} selection invalid for ${u}. No pricing available for "${x.join(", ")}".`);
    }
    V > 0 && !A && (a.push(u), n.push(E || `${e} pricing incomplete for ${u}: ${V}/${l} levels selected`));
  }
  return { valid: a.length === 0, messages: n, incompleteLocations: a };
}, vh = (t, e, i) => {
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
}, wh = (t, e, i) => {
  if (i)
    return i;
  const s = e.dimension === "t" ? "thickness" : e.dimension === "longSide" ? "long side" : "short side", n = e.constraint === "min" ? "minimum" : "maximum";
  return `${t.charAt(0).toUpperCase() + t.slice(1)} requires ${s} ${n} of ${e.limit} (current: ${e.value})`;
};
function sS(t, e = "banding") {
  const i = t.extras?.[e];
  if (!i?.sides) return;
  const s = i.sides, n = s.l1, a = s.l2, r = s.w1, o = s.w2;
  s.l1 = r, s.l2 = o, s.w1 = n, s.w2 = a;
}
let ca = null;
const nS = (t) => {
  ca = t;
}, Wt = (t) => ca ? ca.getExtrasConfig(t) : null, gs = (t, e, i, s) => {
  t.extras || (t.extras = {}), t.extras[e] || (t.extras[e] = { sides: {}, faces: {} });
  const { scope: n, key: a } = Ai(i), r = n === "face" ? t.extras[e].faces : t.extras[e].sides;
  r[a] = s;
}, es = (t, e, i) => {
  const { scope: s, key: n } = Ai(i), a = s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides;
  return a?.[n]?.value || a?.[n] || null;
}, Sh = (t, e, i) => {
  const { scope: s, key: n } = Ai(i), a = s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides;
  a && n in a && delete a[n];
}, xh = (t) => {
  const e = Wt(t);
  return !e || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 1 && e.options[0][0] === !0 || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 0 ? "boolean" : e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].every((i) => typeof i == "string") ? "string" : e.options.length > 1 ? "object" : "string";
};
class Vt extends cn {
  // Required: Define schema and computed properties for SchemaClass
  static schema = $o;
  static computedProperties = {
    ...cn.computedProperties,
    ...bd
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
      pi.includes(s) || i.push(new ue({
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
      const s = i, n = Wt("banding");
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
    for (const i of pi)
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
    return new Vt(e);
  }
  /**
   * Create empty banding
   */
  static empty() {
    return new Vt();
  }
  /**
   * Create with all sides
   */
  static allSides(e = !0) {
    const i = new Vt();
    return i.setAllSides(e), i;
  }
}
class Zi extends Ke {
  // Zod schema for validation and serialization
  static schema = wd;
  static computedProperties = Sd;
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
    return new Zi(e);
  }
  /**
   * Create a radius corner
   */
  static radius(e, i) {
    return new Zi({ type: "radius", size: e, index: i });
  }
  /**
   * Create a bevel corner
   */
  static bevel(e, i) {
    return new Zi({ type: "bevel", size: e, index: i });
  }
}
class Xt extends Ke {
  // Zod schema for validation and serialization
  static schema = $d;
  static computedProperties = Dd;
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
    return new Xt({ x: e, y: i, diameter: s, face: n });
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new Xt(e);
  }
  get area() {
    const e = this.diameter / 2;
    return Math.PI * e * e;
  }
}
class un extends Ke {
  // Zod schema for validation and serialization
  static schema = Od;
  static computedProperties = Ld;
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
    return this.generateHoles(i, s).map((a) => new Xt(a));
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
      s.push(new Xt({
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
    return new un(e);
  }
}
class Jo extends Ke {
  // Validation properties (issues, warnings) are inherited from validationBasePropertiesSchema
  // via sawPropertiesSchema which extends it - they are initialized automatically
  // when the Zod schema is parsed in the constructor
  // isValid is also provided as a computed property from validationBaseComputedProperties
  // Zod schema for validation and serialization
  static schema = ra;
  static computedProperties = mf;
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
  static defaults = ra.parse({});
  constructor(e = {}) {
    super(e), this.stockType === "linear" && (this.cutType = void 0, this.cutPreference = void 0), this.cutType !== "efficiency" && this.options?.minSpacing !== 0 && (this.options = { ...this.options, minSpacing: 0 });
  }
  /**
   * Get entity type
   */
  getType() {
    return J.Saw;
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
function _a(t, e, i = "decimal") {
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
const kh = {
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
}, Ih = {
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
}, Ph = {
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
function dn() {
  this.issues = [], this.warnings && (this.warnings = []);
}
function Hi(t) {
  t.type === "warning" && this.warnings ? this.warnings.push(t) : this.issues.push(t);
}
function ts(t) {
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
function Sr(t, e) {
  const i = t.safeParse(e);
  return i.success ? [] : ts(i.error);
}
const Xo = {
  clearValidation: dn,
  addIssue: Hi,
  validateWithSchema: Sr,
  zodErrorsToIssues: ts,
  /**
   * Run standard validation flow
   */
  runValidation(t, e = {}) {
    return dn.call(this), e.skipSchemaValidation || Sr(t, this).forEach((s) => Hi.call(this, s)), this.issues || [];
  }
};
class oi extends Ke {
  // Required: Define schema and computed properties for SchemaClass
  static schema = di;
  static computedProperties = ef;
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}) {
    super(e);
    const i = na(this.stockType);
    i.includes(this.cutType) || (this.cutType = i.length > 0 ? i[0] : void 0);
    const s = aa(this.stockType, this.cutType);
    this.cutPreference && !s.includes(this.cutPreference) ? this.cutPreference = s[0] || void 0 : !this.cutPreference && s.length > 0 && (this.cutPreference = s.includes("l") ? "l" : s[0]), this.stockType === "roll" && this.options?.stackingMode !== "none" && (this.options = { ...this.options, stackingMode: "none" }), this.cutType !== "efficiency" && this.options?.minSpacing !== 0 && (this.options = { ...this.options, minSpacing: 0 });
  }
  /**
   * Get entity type
   */
  getType() {
    return J.InputSaw;
  }
  // Validation properties (issues, warnings, isValid) come from the schema via SchemaClass
  // clearValidation and addIssue are provided by validation-helpers
  /**
   * Validate to perform InputSaw-specific validation
   * Implements the Validatable interface requirement
   */
  validate(e) {
    if (dn.call(this), e?.skipSchemaValidation || Xo.runValidation.call(
      this,
      di,
      e
    ), !e?.skipBusinessValidation) {
      if (this.bladeWidth !== void 0 && this.bladeWidth !== null) {
        const i = K({ v: this.bladeWidth });
        i === null || isNaN(i) || i < 0 ? Hi.call(this, new ue({
          message: "Blade width must be a non-negative number",
          type: "error",
          field: [["bladeWidth"]]
        })) : i > 100 && Hi.call(this, new ue({
          message: "Blade width seems unusually large (> 100)",
          type: "warning",
          field: [["bladeWidth"]]
        }));
      }
      this.stackHeight !== void 0 && this.stackHeight !== null && (this.stackHeight < 1 ? Hi.call(this, new ue({
        message: "Stack height must be at least 1",
        type: "error",
        field: [["stackHeight"]]
      })) : this.stackHeight > 1e3 && Hi.call(this, new ue({
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
    const n = na(this.stockType);
    n.includes(this.cutType) || (this.cutType = n.length > 0 ? n[0] : void 0);
    const a = i !== this.stockType, r = s !== this.cutType;
    if (a || r) {
      const o = aa(this.stockType, this.cutType);
      this.cutPreference && !o.includes(this.cutPreference) ? o.length > 0 ? this.cutPreference = o.includes("l") ? "l" : o[0] : this.cutPreference = void 0 : !this.cutPreference && o.length > 0 && (this.cutPreference = o.includes("l") ? "l" : o[0]);
    }
    this.stockType === "roll" && this.options?.stackingMode !== "none" && (this.options = { ...this.options, stackingMode: "none" }), this.cutType !== "efficiency" && this.options?.minSpacing !== 0 && (this.options = { ...this.options, minSpacing: 0 }), this.validate();
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
    const e = this.toData(), i = _a(
      e,
      Ph
    );
    return new Jo(i);
  }
}
const Qo = Ft, xr = wt;
pi.map((t) => `side.${t}`), xr.map((t) => `face.${t}`), xr.map((t) => `face.${t}`), Qo.map((t) => `side.${t}`);
let Ch = class ua extends Ke {
  // Zod schema for validation and serialization
  static schema = uf;
  static computedProperties = df;
  /**
   * Get entity type (required for AutoSerializable)
   */
  getType() {
    return J.Machining;
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
    this.holes.push(e instanceof Xt ? e : new Xt(e)), this.validate();
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
    this.hingeHoles.push(e instanceof un ? e : new un(e)), this.validate();
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
    const i = e instanceof Zi ? e : new Zi(e);
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
        i.push(a instanceof Xt ? a : new Xt(a));
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
    return new ua();
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new ua(e);
  }
  get allHoles() {
    const e = [...this.holes];
    return this.hingeHoles.forEach((i) => {
      this.generateHingeHoles(i, null).forEach((n) => {
        e.push(new Xt(n));
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
function Ah(t, e, i) {
  return i ? typeof t == "number" ? isNaN(t) ? null : t : typeof t == "string" ? t : null : e === "decimal" ? t ? K({ v: t, nf: "decimal" }) : null : t;
}
function Th(t, e, i, s = !1) {
  const n = s ? Object.fromEntries(pi.map((o) => [o, 0])) : { l1: 0, l2: 0, w1: 0, w2: 0 };
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
class el extends Ke {
  // Required: Define schema and computed properties for SchemaClass
  static schema = an;
  static computedProperties = $a;
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
      s[r] === null || s[r] === void 0 ? delete s[r] : s[r] !== void 0 && (s[r] = Ah(s[r], i, n), s[r] === null && delete s[r]);
    s.name?.length ? s.name = Qu(s.name)?.toUpperCase() : s.name = "", s.material ? s.material = s.material.trim().toUpperCase() : s.material = "", typeof s.notes == "string" ? s.notes = s.notes.replace(/,/g, " ") : s.notes = "", s.trim && (s.trim = Th(s.trim, i, n, !0)), super(s), this.issues || (this.issues = []), this.warnings || (this.warnings = []);
  }
  /**
   * Get entity type
   */
  getType() {
    return J.InputRectangle;
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
    return dn.call(this), e?.skipSchemaValidation || Xo.runValidation.call(
      this,
      an,
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
class _s extends el {
  // Required: Define schema and computed properties for SchemaClass
  // Use getters to defer schema access and avoid circular dependency
  static get schema() {
    return fi;
  }
  static get computedProperties() {
    return of;
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
    this.extras || (this.extras = new ot()), this.extras.banding = e;
  }
  get finish() {
    return this.extras?.finish;
  }
  set finish(e) {
    this.extras || (this.extras = new ot()), this.extras.finish = e;
  }
  get planing() {
    return this.extras?.planing;
  }
  set planing(e) {
    this.extras || (this.extras = new ot()), this.extras.planing = e;
  }
  get imageUpload() {
    return this.extras?.imageUpload;
  }
  set imageUpload(e) {
    this.extras || (this.extras = new ot()), this.extras.imageUpload = e;
  }
  // Note: Options getters/setters removed - options now centralized in CalculationData.extrasOptions
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}, i = "decimal") {
    const s = {
      ...e,
      // orientationLock transform is now handled by Zod schema
      machining: e.machining || new Ch({
        holes: [],
        hingeHoles: [],
        corners: []
      }),
      extras: e.extras || new ot()
    };
    super(s, i);
  }
  /**
   * Get entity type
   */
  getType() {
    return J.InputShape;
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
      for (let d = this.issues.length - 1; d >= 0; d--)
        this.issues[d].field.some((g) => l.includes(g[0])) && this.issues.splice(d, 1);
      for (let d = this.warnings.length - 1; d >= 0; d--)
        this.warnings[d].field.some((g) => l.includes(g[0])) && this.warnings.splice(d, 1);
      const c = e.fields.reduce((d, g) => {
        const x = g.split(".")[0];
        return d[x] = !0, d;
      }, {}), h = fi.pick(c).safeParse(this.toData());
      if (!h.success) {
        const d = ts(h.error);
        this.issues.push(...d);
      }
    } else {
      this.issues.length = 0, this.warnings.length = 0;
      const l = fi.safeParse(this.toData());
      if (!l.success) {
        const c = ts(l.error);
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
    r("l") && vt.l({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), r("w") && vt.w({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), r("t") && vt.t({
      item: this,
      index: s ?? this.index,
      category: ["part"],
      saw: e.saw
    }), r("q") && vt.q({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), r("trim") && vt.trim({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), !n && i.length > 0, r("customData") && vt.customData({
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
    const i = _a(
      this.toData(),
      kh,
      e
    );
    return new Cn(i);
  }
  changeStockType(e) {
    switch (e) {
      case "sheet":
      case "roll":
        this.orientationLock = "", e === "roll" && (this.t = null);
        break;
      case "linear":
        this.orientationLock = "", this.banding = Object.fromEntries(
          Qo.map((i) => [i, !1])
        );
        break;
    }
  }
}
class Rs extends el {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Gt;
  static computedProperties = lf;
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
    return J.InputStock;
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
      for (let d = this.issues.length - 1; d >= 0; d--)
        this.issues[d].field.some((x) => c.includes(x[0])) && this.issues.splice(d, 1);
      for (let d = this.warnings.length - 1; d >= 0; d--)
        this.warnings[d].field.some((x) => c.includes(x[0])) && this.warnings.splice(d, 1);
      const u = this.toData();
      console.log("[InputStock.validate] Field-level validation requested for fields:", e.fields), console.log("[InputStock.validate] Data to validate:", u);
      const h = e.fields.reduce((d, g) => {
        const x = g.split(".")[0];
        return d[x] = !0, d;
      }, {});
      try {
        const d = Gt.pick(h);
        console.log("[InputStock.validate] Created partial schema for fields:", Object.keys(h));
        const g = d.safeParse(u);
        if (console.log("[InputStock.validate] Validation result:", g.success ? "SUCCESS" : "FAILED"), g.success)
          console.log("[InputStock.validate] No validation errors found");
        else {
          console.log("[InputStock.validate] Validation errors:", g.error.issues);
          const x = ts(g.error);
          this.issues = [...this.issues, ...x];
        }
      } catch (d) {
        console.warn(`Failed to validate fields ${e.fields.join(", ")}:`, d);
      }
      this.isNew && (console.log("[InputStock.validate] Clearing isNew flag"), this.isNew = !1);
    } else {
      this.issues = [], this.warnings = [];
      const c = Gt.safeParse(this.toData());
      if (!c.success) {
        const u = ts(c.error);
        this.issues = u;
      }
    }
    if (e?.skipBusinessValidation)
      return this.issues;
    const a = e?.fields, r = (c) => !a || a.includes(c);
    ["l", "w", "t"].forEach((c) => {
      r(c) && vt[c]({
        item: this,
        saw: s,
        index: n ?? this.index,
        category: ["stock"]
      });
    }), r("grain") && vt.grain({
      item: this,
      index: n ?? this.index,
      category: ["stock"]
    }), r("trim") && vt.trim({
      item: this,
      index: n ?? this.index,
      category: ["stock"]
    }), r("q") && vt.q({
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
    s.trim && n && n === "linear" && (s.trim.w1 = 0, s.trim.w2 = 0);
    const a = _a(
      s,
      Ih,
      e
    );
    return (i || this.saw) && (a.saw = i || this.saw), new ln(a);
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
class tl extends Ke {
  // Required: Define schema and computed properties for SchemaClass
  static schema = In;
  static computedProperties = cf;
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
    return J.Group;
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
    this.clearValidation(), e.q !== void 0 && vt.q({ item: e, index: "index" in e && typeof e.index == "number" ? e.index : 0 }).filter((s) => s).forEach((s) => this.addIssue(s));
  }
  /**
    * Validate with actual shape data
    */
  validateWithShapes(e = []) {
    if (!e.length)
      throw new Error("A shapeList is required to validate an InputUserGroup.");
    const i = [...this.issues], s = this.findShapes(e), n = vt.groupShapeCount({
      item: this,
      index: 0,
      shapes: s,
      requiredCount: 2
    });
    if (i.push(...n), i.length) return i;
    const a = vt.groupOrientationLock({
      item: this,
      index: 0,
      shapes: s
    });
    if (i.push(...a), i.length) return i;
    const r = this.joinDimension, o = vt.groupDimensions({
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
        const a = e.find((r) => !!(r.autoId === n || Fe(r) && r.autoId === n || "id" in r && r.id === n));
        a && (Fe(a) || gt(a)) && s.push(a);
      }
      return s.length < this.shapeIds.length && this.addIssue(new ue({
        message: "Could not find all shapes in the shape list",
        type: "error"
      })), s;
    }
    if (!this.shapes.length) return [];
    const i = [];
    for (const s of this.shapes) {
      const n = e.find((a) => !!(a.autoId === s || String(a.autoId) === String(s) || "id" in a && (a.id === s || String(a.id) === String(s)) || Fe(a) && (a.autoId === s || String(a.autoId) === String(s))));
      n && (Fe(n) || gt(n)) && i.push(n);
    }
    return i;
  }
  // isValid is now provided as a computed property from the validation schema
  /**
   * Populate parent IDs from shape list IDs
   */
  populateParentID(e) {
    e?.length && this?.shapeIds?.length && (this.shapes = this.shapeIds.map((i) => {
      const s = e.find((n) => n.autoId === i || Fe(n) && n.autoId === i);
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
      const d = s.filter((x) => Fe(x) || gt(x)), g = this.validateWithShapes(d);
      if (g.filter((x) => x.type === "error").length > 0)
        throw new Error(`Cannot create Group: ${g[0].message}`);
    }
    const a = this.findShapes(s || []);
    if (a.length === 0)
      throw new Error("No shapes found for Group creation");
    const r = a.map((d) => Fe(d) ? d.toShape() : d), o = r[0];
    r.forEach((d) => {
      if (s && Array.isArray(s)) {
        const g = s.findIndex((x) => "group" in x && x.group?.inUserGroup ? !1 : "parentId" in x && "parentId" in d && x.parentId === d.parentId || "id" in x && "id" in d && x.id === d.id);
        g !== -1 && s.splice(g, 1);
      }
      if ("setRotationToOrientationLockWithoutContainer" in d && typeof d.setRotationToOrientationLockWithoutContainer == "function")
        d.setRotationToOrientationLockWithoutContainer();
      else if ("orientationLock" in d && d.orientationLock) {
        const g = d.orientationLock;
        try {
          g === "l" && "rot" in d ? d.rot = 0 : g === "w" && "rot" in d && (d.rot = 1);
        } catch {
        }
      }
      "group" in d && d.group && (d.group.inUserGroup = !0);
    });
    let l = 0, c = 0;
    this.direction === "horizontal" ? (c = o.w, r.forEach((d) => l += d.l)) : (l = o.l, r.forEach((d) => c += d.w));
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
    }, h = new An(u);
    return n && "updateShapeSpacing" in h && typeof h.updateShapeSpacing == "function" && h.updateShapeSpacing(n), h;
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
function il(t) {
  return {
    entities: /* @__PURE__ */ new Map(),
    stockList: [],
    shapeList: [],
    ...t
  };
}
function Us(t, e) {
  if (Array.isArray(e))
    for (const i of e)
      i && typeof i == "object" && (i.autoId && t.entities.set(i.autoId, i), i.id && i.id !== i.autoId && t.entities.set(i.id, i));
}
function Oh(t, e) {
  if (e) {
    if (e && typeof e == "object" && typeof e.getType == "function")
      return e;
    if (typeof e == "string")
      return t.entities.get(e);
    if (e && typeof e == "object" && e.autoId)
      return t.entities.get(e.autoId);
  }
}
function da(t, e) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t))
    return t.map((s) => da(s, e));
  if (typeof t.getType == "function")
    return t;
  if (t.__ref && (t.id || t.autoId)) {
    const s = t.autoId || t.id;
    return Oh(e, s) || t;
  }
  const i = { ...t };
  for (const s in i)
    Object.prototype.hasOwnProperty.call(i, s) && (i[s] = da(i[s], e));
  return i;
}
function Ra(t, e, i) {
  if (t == null || t && typeof t == "object" && typeof t.getType == "function")
    return t;
  if (Array.isArray(t))
    return t.every((o) => o && typeof o == "object" && typeof o.getType == "function") ? t : t.map((o) => Ra(o, e));
  if (!t || typeof t != "object" || !t.__entityType && !t.__ref && !t.type)
    return t;
  const s = t.__entityType;
  e?.preventAutoRotation && s && (s === J.Rectangle || s === J.Placeable || s === J.Container || s === J.Shape || s === J.Group || s === J.Offcut || s === J.Stock || s === J.Segment) && (t.preventAutoRotation = !0), e && (t.__context = e);
  const n = t.__ref || s, a = xs();
  if (n && a.has(n)) {
    const r = a.get(n), { __ref: o, __entityType: l, __context: c, ...u } = t, h = new r(u);
    return h.issues && Array.isArray(h.issues) && (h.issues = h.issues.map((d) => d instanceof ue ? d : ue.fromData(d, h))), h.warnings && Array.isArray(h.warnings) && (h.warnings = h.warnings.map((d) => d instanceof ue ? d : ue.fromData(d, h))), h;
  }
  return delete t.__context, t;
}
function Oi(t, e) {
  if (e || (e = il()), Array.isArray(t)) {
    const n = [];
    for (const a of t) {
      const r = Oi(a, e);
      n.push(r), r && typeof r == "object" && (r.autoId || r.id) && Us(e, [r]);
    }
    return n;
  }
  if (t && typeof t == "object" && typeof t.getType == "function")
    return (t.autoId || t.id) && Us(e, [t]), t;
  const i = da(t, e), s = Ra(i, e);
  return s && typeof s == "object" && (s.autoId || s.id) && Us(e, [s]), s;
}
function aS(t, e) {
  const i = il(e), s = t?.saw ? Oi(t.saw, i) : void 0;
  s && Us(i, [s]);
  const n = t?.stockList ? Oi(t.stockList, i) : [];
  n.length > 0 && (i.stockList = n);
  const a = t?.shapeList ? Oi(t.shapeList, i) : [];
  a.length > 0 && (i.shapeList = a);
  const r = t?.cutList ? Oi(t.cutList, i) : [], o = t?.segmentList ? Oi(t.segmentList, i) : [];
  o.length > 0 && (i.segmentList = o);
  const l = t?.offcuts ? Oi(t.offcuts, i) : [];
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
function rS(t, e = [], i) {
  return t?.length ? e?.length ? t.map((n) => Lh(n, e, i)).filter((n) => it(n)) : [] : [];
}
function Lh(t, e, i) {
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
    const n = xs(), a = n.get("Group") || n.get(J.Group);
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
function oS(t, e) {
  ui() && (t.stocks && t.stocks.forEach((i, s) => {
    Nt(i) || console.warn(`[${e}] Stock at index ${s} is not a proper Stock instance:`, i);
  }), t.shapes && t.shapes.forEach((i, s) => {
    !gt(i) && !it(i) && console.warn(`[${e}] Shape at index ${s} is not a proper Shape/Group instance:`, i);
  }), t.segments && t.segments.forEach((i, s) => {
    Ui(i) || console.warn(`[${e}] Segment at index ${s} is not a proper Segment instance:`, i);
  }), t.groups && t.groups.forEach((i, s) => {
    it(i) || console.warn(`[${e}] Group at index ${s} is not a proper Group instance:`, i);
  }), t.inputUserGroups && t.inputUserGroups.forEach((i, s) => {
    Jt(i) || console.warn(`[${e}] InputUserGroup at index ${s} is not a proper InputUserGroup instance:`, i);
  }));
}
function lS(t, e) {
  return Math.random() * (e - t) + t;
}
function kr(t, e) {
  if (!Le(t.stockLock) || Array.isArray(t.stockLock) && !t?.stockLock?.length)
    return !0;
  if (Array.isArray(t.stockLock)) {
    if (t.stockLock.includes(e.parentId)) return !0;
  } else if (t.stockLock === e.parentId) return !0;
  return !1;
}
function cS(t, e = null, i = "filter", s = !1) {
  if (!t?.length) return [];
  function n(a) {
    if (s === !0) return a.added;
    if (s === !1) return !a.added;
    if (s === null) return !0;
  }
  if (e) {
    if (e?.saw?.stockType === "linear")
      return t[i]((a) => n(a) && !a.group?.inGroup && kr(a, e) && a.l <= e.l);
    if (e?.saw?.stockType !== "roll")
      return e && Nt(e) ? t[i]((a) => n(a) && !a.group?.inGroup && kr(a, e) && a.willItFit(e)) : t[i]((a) => n(a) && !a.group?.inGroup && a.willItFit(e));
  }
  return t[i]((a) => n(a) && !a.group?.inGroup);
}
function uS(t, e = null) {
  const i = t.filter((a) => !a?.unusable && (e === null || a.used === e)), s = /* @__PURE__ */ new Map();
  for (const a of i) {
    const r = a.parentId;
    s.has(r) || s.set(r, a);
  }
  return Array.from(s.values());
}
function dS(t, e = null) {
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
function fS(t, e, i) {
  const s = t.filter((a) => a[e] === 0), n = e === "y" ? "l" : "w";
  return s.reduce((a, r, o) => o > 0 ? a + r[n] + i : a + r[n], 0);
}
function Fh(t, e, i) {
  if (e.length <= 1) return t;
  const s = Eh(e, i), n = t.reduce((o, l) => (o[l.id] = Mh(l, s), o), {}), a = Math.min(...Object.values(n));
  return t.filter((o) => !o.added && n[o.id] === a);
}
function $h(t, e) {
  const i = e.parentId;
  return t.filter((s) => s.parentId === i).length;
}
function Dh(t, e) {
  const i = e.parentId, s = t.filter((n) => n.used && n.parentId === i).length;
  return e.q - s;
}
function hS(t, e) {
  return $h(t, e) < e.q;
}
function Eh(t, e) {
  const i = {};
  return t.forEach((s) => i[s.parentId] = Dh(e, s)), i;
}
function Mh(t, e) {
  return t.stockLock.reduce((s, n) => s + (e?.[n] ? e[n] : 0), 0);
}
function _h(t, e, i = !1) {
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
function pS(t, e) {
  return t.filter((i) => i.l >= e && i.w >= e);
}
function Rh(t, e) {
  if (t.stock?.autoId !== e.stock?.autoId) return !1;
  const i = t.x, s = t.x + t.l, n = t.y, a = t.y + t.w, r = e.x, o = e.x + e.l, l = e.y, c = e.y + e.w;
  return !(s <= r || // shape1 is completely to the left of shape2
  o <= i || // shape2 is completely to the left of shape1
  a <= l || // shape1 is completely below shape2
  c <= n);
}
function gS(t) {
  const e = [], i = t.filter((s) => s.added);
  for (let s = 0; s < i.length; s++)
    for (let n = s + 1; n < i.length; n++)
      Rh(i[s], i[n]) && e.push({
        shape1: i[s],
        shape2: i[n]
      });
  return e;
}
function mS(t) {
  t.sort(ei.groupPlacementOrder);
  for (let e = 0; e < t.length; e++)
    t[e].placementOrder = e;
}
function yS(t, e) {
  e && t && (e.score = t.score, e.duplicatePattern = t.id);
}
let sl = () => {
};
function bS(t) {
  sl = t;
}
function fn(t, e, i, s, n) {
  sl(t, e, i, s, n);
}
class yi extends Ke {
  // Required: Define schema and computed properties for SchemaClass
  static schema = pf;
  static computedProperties = gf;
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
    return J.PointCollection;
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
    const i = new yi();
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
function jh(t, e, i, s = !0) {
  if (!t || !e || !i) return !1;
  if (t.autoId === e.autoId)
    throw console.error("[collision] ERROR: Shape/group is in testShapes array!"), console.error(`  thisShape: ${t.autoId} (${t.id})`), console.error(`  testShape: ${e.autoId} (${e.id})`), console.error(`  thisShape === testShape: ${t === e}`), new Error(`collision comparing to self ${t.autoId}, ${e.autoId}`);
  const n = s ? i.bladeWidth : 0, a = t.x + t.l + n, r = e.x + e.l + n;
  if (!pe.lessThan(t.x, r) || !pe.greaterThan(a, e.x))
    return !1;
  const o = t.y + t.w + n, l = e.y + e.w + n;
  return pe.lessThan(t.y, l) && pe.greaterThan(o, e.y);
}
function Vh(t, e, i) {
  for (const s of e)
    if (t.autoId !== s.autoId && jh(t, s, i))
      return !0;
  return !1;
}
function vS(t, e, i, s = !1) {
  if (!i || !i.length) return !1;
  if (!t?.dimension)
    throw new Error("no line direction provided to collisionWithShapes");
  const n = e.bladeWidth / 2;
  t.shapeCollisions = t.shapeCollisions || [], i = i.filter((a) => a.added);
  for (const a of i) {
    let r = !1, o = !1;
    if (t.dimension === "l" ? (r = pe.greaterThan(t.x2, a.x) && pe.lessThan(t.x1, a.x + a.l), o = pe.greaterThan(t.y1 + n, a.y) && pe.lessThan(t.y1 - n, a.y + a.w)) : t.dimension === "w" && (r = pe.greaterThan(t.x1 + n, a.x) && pe.lessThan(t.x1 - n, a.x + a.l), o = pe.greaterThan(t.y2, a.y) && pe.lessThan(t.y1, a.y + a.w)), r && o)
      if (s) t.shapeCollisions.push(a);
      else return !0;
  }
  return s ? t.shapeCollisions : t.shapeCollisions.length > 0;
}
function vi(t, e, i, s, n = null, a = null) {
  return new Li({ x1: t, y1: e, x2: i, y2: s, origin: n, type: a });
}
function Bh(t, e) {
  const i = t.getCorners(), s = {};
  return i.bottomLeft.x > 0 && i.bottomLeft.y > 0 && (s.bottomLeftDown = vi(
    i.bottomLeft.x,
    i.bottomLeft.y,
    i.bottomLeft.x,
    0,
    "bottomLeft",
    "bottomLeftDown"
  ), s.bottomLeftLeft = vi(
    i.bottomLeft.x,
    i.bottomLeft.y,
    0,
    i.bottomLeft.y,
    "bottomLeft",
    "bottomLeftLeft"
  )), i.topLeft.x > 0 && i.topLeft.y < e.w && (s.topLeftLeft = vi(
    i.topLeft.x,
    i.topLeft.y,
    0,
    i.topLeft.y,
    "topLeft",
    "topLeftLeft"
  ), s.topLeftTop = vi(
    i.topLeft.x,
    i.topLeft.y,
    i.topLeft.x,
    e.w,
    "topLeft",
    "topLeftTop"
  )), i.topRight.y < e.w && i.topRight.x < e.l && (s.topRightTop = vi(
    i.topRight.x,
    i.topRight.y,
    i.topRight.x,
    e.w,
    "topRight",
    "topRightTop"
  ), s.topRightRight = vi(
    i.topRight.x,
    i.topRight.y,
    e.l,
    i.topRight.y,
    "topRight",
    "topRightRight"
  )), i.bottomRight.x < e.l && i.bottomRight.y > 0 && (s.bottomRightRight = vi(
    i.bottomRight.x,
    i.bottomRight.y,
    e.l,
    i.bottomRight.y,
    "bottomRight",
    "bottomRightRight"
  ), s.bottomRightDown = vi(
    i.bottomRight.x,
    i.bottomRight.y,
    i.bottomRight.x,
    0,
    "bottomRight",
    "bottomRightDown"
  )), s;
}
function Cs(t, e, i = null) {
  if (t.has(e.x, e.y)) {
    const s = t.get(e.x, e.y);
    s.type === "group" && !i && (s.type = void 0);
    return;
  }
  i && (e.type = i), t.add(e);
}
function Ys(t, e, i = null) {
  for (const s of e) {
    if (!s) return;
    Cs(t, s, i);
  }
}
function Ge(t, e, i, s, n) {
  const a = Nh[t](e, i);
  return s && (a.corner = s), n && (a.direction = n), a;
}
const Nh = {
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
function Gh(t, e, i) {
  const s = new yi(), n = i.toArray().sort(nl), a = e.bladeWidth;
  if (n.forEach((r) => {
    const o = r.corner, l = r.type;
    if (!a)
      s.add(r);
    else
      switch (o) {
        case "topRight":
          {
            const c = Ge("top", r, a, o);
            l && (c.type = l), s.add(c);
            const u = Ge("right", r, a, o);
            l && (u.type = l), s.add(u);
          }
          break;
        case "topLeft":
          {
            const c = Ge("top", r, a, o);
            l && (c.type = l), s.add(c);
            const u = Ge("left", r, a, o);
            l && (u.type = l), s.add(u);
          }
          break;
        case "bottomRight":
          {
            const c = Ge("bottom", r, a, o);
            l && (c.type = l), s.add(c);
            const u = Ge("right", r, a, o);
            l && (u.type = l), s.add(u);
          }
          break;
        case "bottomLeft":
          {
            const c = Ge("bottom", r, a, o);
            l && (c.type = l), s.add(c);
            const u = Ge("left", r, a, o);
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
    e?.constructor?.name === "Stock" && e?.trimmed || e?.constructor?.name === "Segment" ? (o = e.x, l = e.y, c = e.x + e.l, u = e.y + e.w) : (o = e.x + (e?.trim?.w1 ?? 0), l = e.y + (e?.trim?.l1 ?? 0), c = e.x + e.l - (e?.trim?.w2 ?? 0), u = e.y + e.w - (e?.trim?.l2 ?? 0));
    let h = s.toArray();
    for (let d = h.length; d--; ) {
      const g = h[d];
      (pe.lessThan(g.x, o) || pe.lessThan(g.y, l) || pe.greaterThan(g.x, c) || pe.greaterThan(g.y, u)) && h.splice(d, 1);
    }
    s.clear(), h.forEach((d) => s.add(d)), r.clear(), h = s.toArray();
    for (let d = h.length; d--; ) {
      const g = h[d];
      for (let x = t.length; x--; ) {
        const V = t[x];
        if (g.collidesWith(V)) {
          s.remove(g.x, g.y);
          break;
        }
      }
    }
  }
  return s;
}
function qh(t, e, i) {
  let s = [];
  const n = t.getMinSpacing(i.saw), a = e.corner, r = e.direction;
  if (e.type === "shape")
    switch (a) {
      case "topLeft":
        r === "rl" && (s.push(Ge("right", e, n, a, r)), s.push(Ge("topRight", e, n, a, r))), r === "bt" && (s.push(Ge("bottom", e, n, a, r)), s.push(Ge("bottomLeft", e, n, a, r)));
        break;
      case "topRight":
        r === "lr" && (s.push(Ge("left", e, n, a, r)), s.push(Ge("topLeft", e, n, a, r))), r === "bt" && (s.push(Ge("bottom", e, n, a, r)), s.push(Ge("bottomRight", e, n, a, r)));
        break;
      case "bottomRight":
        r === "lr" && (s.push(Ge("left", e, n, a, r)), s.push(Ge("bottomLeft", e, n, a, r))), r === "tb" && (s.push(Ge("top", e, n, a, r)), s.push(Ge("topRight", e, n, a, r)));
        break;
      case "bottomLeft":
        r === "rl" && (s.push(Ge("right", e, n, a, r)), s.push(Ge("bottomRight", e, n, a, r))), r === "tb" && (s.push(Ge("top", e, n, a, r)), s.push(Ge("topLeft", e, n, a, r)));
        break;
    }
  else if (e.type === "edge")
    switch (r) {
      case "rl":
      case "lr":
        s.push(Ge("top", e, 0)), s.push(Ge("centre", e, 0)), s.push(Ge("bottom", e, 0));
        break;
      case "tb":
      case "bt":
        s.push(Ge("left", e, 0)), s.push(Ge("right", e, 0)), s.push(Ge("centre", e, 0));
        break;
    }
  if (s = s.filter((l) => l.x >= 0 && l.y >= 0), !s.length) return null;
  const o = new yi();
  for (const l of s)
    l.raycast = !0, Ys(o, ol(t, l, i).toArray());
  return ll(t, i, o), o;
}
function zh(t, e) {
  const i = new yi();
  return t.sort(nl), t.forEach((s) => {
    it(s) ? (Ys(i, s.getCoords(e)), s.shapes.forEach((n) => {
      const a = n.getCoords(e);
      Ys(i, a, "group");
    })) : Ys(i, s.getCoords(e));
  }), i.points.forEach((s) => {
    s.stock = e.getStock;
  }), i;
}
function Wh(t = [], e, i) {
  const s = zh(
    t === null ? e : t,
    i
  );
  return Gh(
    e,
    i,
    s
  );
}
function nl(t, e) {
  return t.y === e.y ? e.x - t.x : e.y - t.y;
}
function al(t, e, i, s, n, a) {
  t.a = e.id, t.b = i ? i.id : null, t.direction = s, t.raycast = !0, t.type = n, t.corner = a;
}
function Hh(t, e) {
  if (t.saw.cutType !== "efficiency" || e.length <= 1) return null;
  let i = new yi();
  const s = rl(e, t);
  for (const o of e)
    for (const l of s) {
      if (l.shape.id === o.id) continue;
      const c = Object.values(l.rays).filter((u) => u !== void 0);
      for (const u of c)
        Uh(
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
      const h = new pt(u.x2, u.y2);
      a === u.direction && (al(h, o, null, u.direction, "edge"), Cs(i, h));
    }
  }), i = Yh(i), i;
}
function rl(t, e) {
  return t.map((i) => {
    const s = Bh(i, e);
    return {
      shape: i,
      rays: s
    };
  });
}
function Uh(t, e, i, s) {
  switch (t.direction) {
    case "rl":
      js(
        t,
        e,
        i,
        s,
        i.x + i.l
      );
      break;
    case "lr":
      js(
        t,
        e,
        i,
        s,
        i.x
      );
      break;
    case "tb":
      js(
        t,
        e,
        i,
        s,
        i.y + i.w
      );
      break;
    case "bt":
      js(
        t,
        e,
        i,
        s,
        i.y
      );
      break;
  }
}
function js(t, e, i, s, n) {
  const a = t.dimension === "w", r = a ? "y" : "x", o = a ? "x" : "y", l = a ? "l" : "w";
  if (t[`${o}1`] >= i[o] && t[`${o}1`] <= i[o] + i[l]) {
    const c = t.direction === "lr" && t[`${r}1`] <= n && t[`${r}2`] >= n, u = t.direction === "rl" && t[`${r}1`] >= n && t[`${r}2`] <= n, h = t.direction === "bt" && t[`${r}1`] <= n && t[`${r}2`] >= n, d = t.direction === "tb" && t[`${r}1`] >= n && t[`${r}2`] <= n;
    if (c || u || h || d) {
      const x = a ? t[`${o}1`] : n, V = a ? n : t[`${o}1`], H = new pt(x, V), A = t.origin;
      al(H, e, i, t.direction, "shape", A), Cs(s, H);
    }
  }
}
function Yh(t) {
  const e = new yi();
  return t.points.size === 0 || new Set(t.toArray().map((s) => s.a)).forEach((s) => {
    const n = t.toArray().filter((a) => a.a === s);
    ["right", "left", "top", "bottom"].forEach((a) => {
      const r = Kh(
        n,
        a
      );
      r && Cs(e, r);
    });
  }), e;
}
function Kh(t, e) {
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
function ol(t, e, i) {
  const s = new yi(), n = e.getAvailableShapePositions(i);
  for (const a of n) {
    let r;
    switch (r = Zh(e, t, i), a) {
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
    Cs(s, r);
  }
  return ll(t, i, s), s;
}
function Zh(t, e, i) {
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
function ll(t, e, i) {
  let s, n, a, r;
  e?.constructor?.name === "Stock" && e?.trimmed || e?.constructor?.name === "Segment" ? (s = 0, n = 0, a = e.x + e.l - t.l, r = e.y + e.w - t.w) : (s = e?.trim?.w1 ?? 0, n = e?.trim?.l1 ?? 0, a = e.l - (e?.trim?.w2 ?? 0) - t.l, r = e.w - (e?.trim?.l2 ?? 0) - t.w);
  const o = i.toArray();
  for (let l = o.length; l--; ) {
    const c = o[l];
    (pe.lessThan(c.x, s) || pe.lessThan(c.y, n) || pe.greaterThan(c.x, a) || pe.greaterThan(c.y, r) || c.x < 0 || c.y < 0) && i.remove(c.x, c.y);
  }
}
function Jh(t, e, i = null) {
  const s = /* @__PURE__ */ new Map();
  for (let n = t.length; n--; ) {
    const a = t[n], r = Go(a, e.getStock), o = a.shortSide, l = a.longSide;
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
function fa(t, e) {
  if (t?.length)
    for (let i = t.length; i--; ) {
      const s = t[i];
      Xh(
        s,
        e
      );
    }
}
function Xh(t, e) {
  if (!t.isSquare) {
    if (t.shortSide === e.w && t.rot) {
      if (!yt(
        t,
        0,
        e
      ))
        throw new Error(
          "could not rotate shape correctly for subset calculation"
        );
    } else if (!e.isSquare && t.longSide === e.w && !t.rot && !yt(
      t,
      1,
      e
    ))
      throw new Error(
        "could not rotate shape correctly for subset calculation"
      );
  }
}
function wS(t, e, i = "l", s = null) {
  if (!t || !e?.length) return !1;
  e.forEach((u) => u.orientationLock = null), fa(
    e,
    t
  );
  const n = t.bladeWidth, a = [];
  let r = this.config.subset.shuffles;
  (e.length === 1 || e[0].parentId === e[e.length - 1].parentId) && (r = 1), i === "l" ? e.sort(
    ei.LD
  ) : e.sort(
    ei.WD
  ), s || (s = e[0]);
  function o(u, h = !0) {
    h && ei.shuffle(
      e
    );
    const d = ha(
      n,
      e,
      t.getStock,
      i,
      t[i],
      !1,
      s
    );
    d !== !1 && u.push(
      d
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
    (u, h) => h.score.efficiency - u.score.efficiency
  ), !a.length) return !1;
  const l = a[0];
  let c = null;
  return l.totalLength + n < t.l && (c = t.l - (l.totalLength + n), l.offcut = c), l;
}
function Qh(t, e, i, s = "l", n, a = !1, r = this.config.subset.shuffles, o = null, l = this.config.subset.efficiency.limit) {
  if (!e?.length) return !1;
  const c = [], u = [
    (x, V) => V[s] - x[s],
    // Largest first
    (x, V) => x[s] - V[s],
    // Smallest first
    (x, V) => V[s] / V.area - x[s] / x.area,
    // Best dimension-to-area ratio
    (x, V) => V.area - x.area,
    // Largest area first
    (x, V) => x.area - V.area
    // Smallest area first
  ], h = e.every(
    (x, V, H) => V === 0 || x.isIdentical(H[V - 1])
  );
  if (!a) {
    const x = e.reduce((V, H) => V + H[s] + t, 0) - t;
    if (x <= n)
      return x / n > l ? {
        totalLength: x,
        shapes: e,
        firstShape: e[0],
        firstShapeRotation: e[0].rot,
        stock: i,
        cutType: "guillotine",
        type: "subset",
        score: {
          efficiency: x / n,
          totalShapesPlaced: e.length
        },
        area: e.reduce((V, H) => V + H.area, 0)
      } : !1;
  }
  const d = ha(t, e, i, s, n, a, o);
  if (d !== !1 && (c.push(d), d.score.efficiency > 0.95 && e.length > 10))
    return d;
  if (h)
    return c[0] || !1;
  const g = Math.min(r, u.length);
  for (let x = 0; x < g; x++) {
    const V = [...e];
    V.sort(u[x % u.length]);
    const H = ha(t, V, i, s, n, a, o);
    if (H !== !1 && (c.push(H), H.score.efficiency > 0.98 && e.length > 30))
      break;
  }
  return c.sort((x, V) => V.score.efficiency - x.score.efficiency), c[0] || !1;
}
function ha(t, e, i, s = "l", n, a = !1, r = null) {
  if (!n || n <= 0 || e?.length < 1) return !1;
  let o = 0;
  const l = [];
  if (r || (r = e[0]), l.push(r), o = r[s], o > n) return !1;
  const c = e.findIndex(
    (u) => u.id === r?.id
  );
  c > -1 && e.splice(c, 1);
  for (const u of e) {
    const h = u[s], d = u.getMinSpacing(
      i.saw,
      !0
    );
    if (!(o + t + d + h > n) && (o += t + d + h, l.push(u), o + t + d >= n))
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
        (h, d) => h + d.area,
        0
      )
    };
  }
  return !1;
}
function ep(t, e, i = null, s = "l", n = !0, a = !0) {
  if (!t?.length) return;
  if (!e) throw new Error(
    "positionShapes requires stock"
  );
  const r = s === "l" ? "x" : "y", o = s === "l" ? "y" : "x";
  let l = 0;
  it(i) ? fa(
    t,
    i
  ) : fa(
    t,
    i ?? e
  ), a && (s === "l" ? t.sort(
    ei.LDIDA
  ) : t.sort(
    ei.WDIDA
  )), t.forEach(
    (c, u) => {
      c[r] = i ? i[r] + l : l, i && (c[o] = i[o]), l += c[r === "x" ? "l" : "w"] + e.bladeWidth + c.getMinSpacing(e.saw, !0), It(
        [() => nt(
          l
        ).to.be.a(
          "number"
        )]
      ), it(i) ? c.group.placementOrder = u : c.placementOrder = u, n && c.addToStock(e);
    }
  );
}
function SS(t = null, e, i, s = "l") {
  if (!e) return [];
  if (!t) return [];
  i.sort(
    ei.ID
  );
  const n = t.shapes;
  return ep(
    n,
    e,
    null,
    s
  ), n;
}
function xS(t, e, i) {
  fn("subset", `guillotine subset for segment ${t.id}`);
  function s(M, N = []) {
    const { shapes: D } = a(M);
    return D.filter((k) => {
      if (k.added || N.find(($) => $.id === k.id)) return !1;
      if (k.orientationLock)
        return pe.equalTo(k[u], M) ? pe.lessThanOrEqualTo(k.l, t.l) && pe.lessThanOrEqualTo(k.w, t.w) : !1;
      if (pe.equalTo(k.l, M) || pe.equalTo(k.w, M)) {
        const $ = pe.equalTo(k.l, M) ? k.w : k.l;
        return pe.lessThanOrEqualTo($, t[t.cutPreference]);
      }
      return !1;
    });
  }
  function n(M, N, D, k = null) {
    let $ = s(
      M,
      N
    );
    if (k) {
      const X = $.find(
        (Q) => Q.parentId === k.parentId
      );
      if (X) return X;
    }
    if (!$.length) return !1;
    const b = [];
    for (const X of $) {
      const Q = X.l === M ? X.w : X.l;
      D.includes(Q) && b.push(X);
    }
    return $ = b.length ? b : $, Uo($);
  }
  function a(M) {
    const N = M;
    return O.has(N) || O.set(N, { shapes: [], priorities: [] }), O.get(N);
  }
  function r(M = null) {
    function N(k, $, b) {
      const { shapes: Z, priorities: X } = a($);
      Z.includes(k) || (Z.push(k), X.push(b));
    }
    if (!g?.length) return O;
    const D = t.getStock;
    for (const k of g) {
      let $ = k.getPriority(D);
      M && k.parentId !== M.parentId && ($ = 0);
      const b = hi(u);
      if (!k.orientationLock)
        k.longSide <= d && k.shortSide <= t[b] && N(k, k.l, $), !k.isSquare && k.shortSide <= d && k.longSide <= t[b] && N(k, k.w, $);
      else {
        const Z = Go(
          k,
          t.getStock
        );
        if (It([() => nt(Z.length).to.equal(1)]), yt(
          k,
          Z[0],
          t.getStock
        ) === !1)
          throw new Error(
            "could not rotate shape correctly for subset calculation"
          );
        const Q = hi(u);
        k[u] <= d && k[Q] <= t[Q] && N(k, k[u], $);
      }
    }
    return O;
  }
  function o() {
    const M = [], N = Array.from(O.entries()).map(([k, { shapes: $, priorities: b }]) => ({
      dimension: k,
      count: $.length,
      totalPriority: $.length * Math.max(...b, 0)
    }));
    let D = N.reduce((k, { totalPriority: $ }) => k + $, 0);
    for (; N.length > 0; )
      if (D <= 0 || !Number.isFinite(D)) {
        const k = [];
        N.forEach(({ dimension: $, count: b }) => {
          k.push(...Array(b).fill($));
        });
        for (let $ = k.length - 1; $ > 0; $--) {
          const b = Math.floor(Math.random() * ($ + 1));
          [k[$], k[b]] = [k[b], k[$]];
        }
        M.push(...k);
        break;
      } else {
        const k = Math.random() * D;
        let $ = 0, b = -1;
        for (let z = 0; z < N.length; z++)
          if ($ += N[z].totalPriority, $ > k) {
            b = z;
            break;
          }
        b === -1 && (b = Math.floor(Math.random() * N.length));
        const { dimension: Z, count: X, totalPriority: Q } = N[b];
        M.push(Z), N[b].count--, N[b].totalPriority -= Q / X, N[b].count === 0 ? (D -= Q, N.splice(b, 1)) : D -= Q / X;
      }
    return M;
  }
  function l(M, N, D, k, $, b, Z) {
    return D += M + N, k.push(M), $.push(
      b.l === M ? b.w : b.l
    ), Z.push(b), D;
  }
  function c(M = null) {
    if (!g?.length) return [];
    if (!O.size) return [];
    const N = /* @__PURE__ */ new Map();
    let D = 0;
    const k = [], $ = [], b = [];
    let Z = null, X = !0;
    for (let G = 0; G < this.config.subset.guillotine.shuffles; G++) {
      D = 0, k.length = 0, $.length = 0, b.length = 0, Z = null, X = !0;
      const q = o();
      for (const ee of q) {
        if (X ? Z = ee : Z = h + ee, D + Z > d) continue;
        const U = n(
          ee,
          $,
          b,
          M
        );
        U && (D = l(
          ee,
          X ? 0 : h,
          D,
          k,
          b,
          U,
          $
        ), X = !1);
      }
      if (D) {
        const ee = D / d;
        if (It([() => nt(ee).to.lessThanOrEqual(1)]), ee < this.config.subset.efficiency.limit) continue;
        const U = $.map((ke, Ae) => Ae);
        U.sort((ke, Ae) => b[Ae] !== b[ke] ? b[Ae] - b[ke] : k[Ae] - k[ke]);
        const we = U.map(
          (ke) => k[ke]
        ), me = U.map(
          (ke) => $[ke]
        );
        It([
          () => nt(_h(me)).to.be.false
        ]), N.set(
          we.join("-"),
          {
            usedDimensions: we,
            usedShapes: me,
            efficiency: ee,
            target: d,
            totalLength: D,
            priorityShape: M ? M.parentId : null
          }
        );
      }
    }
    if (N.size === 0) return [];
    const Q = Array.from(
      N.values()
    );
    Q.sort(
      (G, q) => G.efficiency > q.efficiency ? -1 : G.efficiency < q.efficiency ? 1 : G.efficiency === q.efficiency ? q.usedDimensions.length - G.usedDimensions.length : 0
    );
    const z = Q.slice(
      0,
      20
    );
    if (!z.length) return [];
    const B = z.slice(
      0,
      typeof this.config.guillotine.stripShapes.iterations == "number" ? this.config.guillotine.stripShapes.iterations : 1
    );
    return B.length ? (B.forEach(
      (G) => {
        G.usedShapes.forEach(
          (q, ee) => {
            const U = G.usedDimensions[ee];
            It([() => nt([q.l, q.w].includes(U)).to.be.true]);
            let we;
            q.isSquare ? we = 0 : q.longSide === U ? we = t.getStock.cutPreference === "l" ? 1 : 0 : we = t.getStock.cutPreference === "l" ? 0 : 1, q.guillotineState || (q.guillotineState = new ri({})), q.guillotineState.setStripShapeBatchGroup(Y, {
              stockId: t.getStock.autoId,
              dimension: U,
              rot: we,
              order: ee,
              //by this point sorting should have taken place
              priorityShape: G.priorityShape
            });
          }
        ), Y++, It(
          [
            () => {
              const q = G.usedDimensions.reduce(
                (we, me) => we + me,
                0
              ), ee = (G.usedDimensions.length - 1) * h, U = q + ee;
              return nt(pe.lessThanOrEqualTo(U, d)).to.be.true;
            },
            () => nt(
              B.every((q) => q.efficiency >= this.config.subset.efficiency.limit)
            ).to.be.true,
            () => nt(
              B.every(
                (q) => q.usedDimensions.length === q.usedShapes.length
              )
            ).to.be.true
          ]
        );
      }
    ), B) : [];
  }
  const u = hi(t.cutPreference), h = t.getStock.bladeWidth, d = t[u];
  It([() => nt(d).to.be.a("number")]);
  const g = Fh(
    t.shapes.filter((M) => !it(M)),
    e,
    i
  ), x = t.getStock, V = t.cutPreference, H = x[V], A = this.config.guillotine.firstShapeFullSizeThreshold;
  g.sort((M, N) => {
    const D = M[V] >= A * H, k = N[V] >= A * H;
    if (D && !k) return -1;
    if (k && !D) return 1;
    const $ = N.getPriority(x) - M.getPriority(x);
    if ($ !== 0) return $;
    const b = M.id.toString().split("."), Z = N.id.toString().split(".");
    return b[0] !== Z[0] ? parseInt(b[0]) - parseInt(Z[0]) : parseInt(b[1]) - parseInt(Z[1]);
  });
  const E = [];
  let Y = 0;
  const O = /* @__PURE__ */ new Map();
  if (!this.config.priority.enable || t.type !== "root" || !t.shapes[0].getPriority(x)) {
    r();
    const M = c.call(this);
    E.push(...M);
  } else {
    const M = t.shapes[0];
    r(M);
    const N = Math.min(t.shapes.length, this.config.guillotine.stripShapes.numPriorityShapes);
    for (let D = 0; D < N; D++) {
      const k = c.call(this, M);
      E.push(...k);
    }
  }
  return fn("subset", `${E.length} strip shape results ${E.map((M) => M.usedShapes.map((N) => N.id).join()).join(" | ")}`), E?.length ? E.length : 0;
}
function tp(t) {
  const e = {};
  return t.forEach((i) => {
    i.shapeIds.forEach((s) => {
      const n = i.q || 1;
      e[s] ? e[s] += n : e[s] = n;
    });
  }), e;
}
function ip(t, e, i = !0) {
  const s = tp(t), n = [];
  for (const a in s) {
    const r = s[a], o = e.findIndex((u) => u.autoId === a), l = e[o], c = Ho({
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
function cl(t) {
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
    tolerance: h = 1e-3,
    config: d
  } = t, g = c ?? d?.subset?.shuffles ?? 10;
  It([
    () => nt(s).to.be.greaterThan(0)
  ]);
  const x = sp(e, o, n, i, h);
  if (x.length < 2) return !1;
  const V = { config: d }, H = Qh.call(
    V,
    i.bladeWidth,
    x,
    i.getStock,
    ap(o),
    s,
    r,
    g,
    l
  );
  if (!H) return !1;
  if (H?.shapes?.length > 1 && H?.totalLength) {
    let A;
    try {
      A = new An({
        id: a,
        direction: o,
        shapes: H.shapes,
        container: i,
        type: u
      }), fn("groups", `[createGroup] Created group ${A.id} direction=${o} dims=${A.l}x${A.w} with ${A.shapes.length} shapes, [${A.shapes.map((E) => E.id).join()} for ${i.getType()} ${i.id}]`);
    } catch (E) {
      return console.error("group error", E), !1;
    }
    return A;
  }
  return !1;
}
function kS(t) {
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
    counters: h,
    type: d
  } = t, g = l ?? u?.groups?.tolerance ?? 0.05;
  if (!Le(s))
    throw new Error("attempting to create a group with no target size");
  if (s <= 0)
    return console.warn(`Invalid targetSize ${s} - cannot create groups with zero or negative target size`), [];
  if (!Le(i))
    throw new Error("attempting to create a group with no container");
  if (!e?.length || e.length < 2) return [];
  const x = ul(a), V = hi(a), H = x === "horizontal" ? i.w : i.l, A = i.getStock;
  let E = [...e], Y = r;
  if (Y)
    if (Ef(
      Y,
      Y[V],
      V,
      A
    ) === !1)
      Y = null;
    else {
      const X = Y[V], Q = X * (1 - g);
      let z = X * (1 + g);
      z > i[V] && (z = i[V]), E = e.filter((B) => !gt(B) || B.autoId === Y.autoId ? !1 : mr(
        B,
        Q,
        z,
        V,
        A
      ));
    }
  const O = Jh(
    E,
    i,
    V
  ), M = Array.from(O.keys()).filter((Z) => Z <= H).sort((Z, X) => X - Z);
  if (M.length === 0) return [];
  const N = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map();
  for (const Z of E) {
    const X = /* @__PURE__ */ new Map();
    for (const Q of M) {
      const z = Q * (1 - g);
      let B = Q * (1 + g);
      B > i[V] && (B = i[V]);
      const G = mr(
        Z,
        z,
        B,
        V,
        A
      );
      X.set(Q, G);
    }
    D.set(Z.autoId, X);
  }
  for (const Z of M) {
    const X = [];
    for (const Q of E) {
      if (!gt(Q)) continue;
      D.get(Q.autoId)?.get(Z) && X.push(Q);
    }
    N.set(Z, X);
  }
  const k = [], $ = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Map();
  for (const Z of M) {
    if (c !== void 0 && k.length >= c)
      break;
    const X = [];
    let Q = N.get(Z).filter((z) => !$.has(z.autoId));
    if (!(Q.length < 2)) {
      for (; Q.length >= 2 && !(c !== void 0 && k.length + X.length >= c); ) {
        let z, B = !1;
        if (X.length && !o) {
          const G = X[X.length - 1], q = G.shapes.slice(), ee = /* @__PURE__ */ new Set(), U = new Set(Q.map((ke) => ke.autoId)), we = [];
          let me = !0;
          for (const ke of q) {
            let Ae = !1;
            if (U.has(ke.autoId) && !ee.has(ke.autoId)) {
              const te = Q.find((Be) => Be.autoId === ke.autoId);
              te && (we.push(te), ee.add(ke.autoId), Ae = !0);
            }
            if (!Ae)
              for (const te of Q) {
                if (ee.has(te.autoId)) continue;
                const Be = `${te.autoId}-${ke.autoId}`;
                if (b.has(Be) || b.set(Be, te.isIdentical(ke)), b.get(Be)) {
                  we.push(te), ee.add(te.autoId), Ae = !0;
                  break;
                }
              }
            if (!Ae) {
              me = !1;
              break;
            }
          }
          if (me && we.length === q.length) {
            if (B = !0, G.positions?.length === we.length)
              for (let ke = 0; ke < we.length; ke++) {
                const Ae = we[ke], te = q[ke], Be = G.positions[ke]?.rot ?? te.rot;
                if (Ae.rot !== Be && !yt(Ae, Be, i)) {
                  console.warn(`  Failed to rotate ${Ae.id} to ${Be} - skipping clone`), B = !1;
                  break;
                }
              }
            B && (It([
              () => nt(we.every((ke, Ae) => {
                const te = G.positions[Ae]?.rot ?? q[Ae].rot;
                return ke.rot === te;
              }), "at least one identical group shape not rotated correctly").to.be.true
            ]), z = G.cloneWithNewShapes(we));
          }
        }
        if (!B) {
          let G = "g" + (typeof h?.group == "number" ? h.group : 0);
          d === "firstShape" && (G = "fs-" + G), z = cl({
            shapes: Q,
            container: i,
            targetSize: s,
            d: Z,
            id: G,
            exact: n,
            groupDirection: x,
            firstShape: Y,
            tolerance: g,
            config: u,
            type: d
          });
        }
        if (z) {
          typeof h?.group == "number" && h.group++, X.push(z), z.shapes.forEach((q) => $.add(q.autoId));
          const G = [];
          for (const q of Q)
            $.has(q.autoId) || G.push(q);
          if (Q = G, Q.length < 2) break;
        } else
          break;
      }
      k.push(...X);
    }
  }
  return k;
}
function sp(t, e, i, s, n = 1e-3) {
  return t.filter((a) => {
    const r = rn(a, s);
    if (r) {
      const d = r === "w" ? 1 : 0;
      if (a.rot !== d && !yt(a, d, s))
        return !1;
    }
    if (a.isSquare) return !0;
    const o = i * (1 - n), l = i * (1 + n), c = a.l >= o && a.l <= l, u = a.w >= o && a.w <= l;
    let h = null;
    if (c && u) {
      const d = Math.abs(a.l - i), g = Math.abs(a.w - i);
      h = d <= g ? "l" : "w";
    } else c ? h = "l" : u && (h = "w");
    if (h !== null) {
      const d = np(
        h,
        e,
        a.rot
      ), g = rn(a, s), x = d ? 1 : 0;
      return g && (g === "l" && x === 1 || g === "w" && x === 0) || !Dt(a, d, s) ? !1 : yt(a, d, s);
    }
    return !1;
  });
}
function np(t, e, i) {
  return e === null ? t === "l" : t === (e === "vertical" ? "l" : "w") ? i === 1 : i === 0;
}
function ul(t) {
  if (!["l", "w"].includes(t)) throw new Error("incorrect direction value");
  if (t === "l") return "horizontal";
  if (t === "w") return "vertical";
}
function ap(t) {
  if (!["horizontal", "vertical"].includes(t)) throw new Error("incorrect groupDirection value");
  if (t === "horizontal") return "l";
  if (t === "vertical") return "w";
}
function rp(t, e, i) {
  return t.filter((s) => s.l === e[i] || s.w === e[i]);
}
function op(t, e) {
  const i = Array.isArray(e) ? e : [e], s = /* @__PURE__ */ new Set();
  for (const n of i)
    if (n.shapes?.length)
      for (const a of n.shapes)
        s.add(a.autoId);
  return t.filter((n) => it(n) || !s.has(n.autoId));
}
function lp(t, e = "") {
  const i = /* @__PURE__ */ new Set();
  t.filter(it).forEach((r) => {
    r.shapes?.forEach((o) => {
      i.add(o.autoId);
    });
  });
  const n = t.filter((r) => gt(r)).filter((r) => i.has(r.autoId)), a = e ? ` [${e}]` : "";
  nt(
    n.length,
    `${a} Found ${n.length} shapes that exist both in groups and independently: ${n.map((r) => r.id || r.autoId).join(", ")}`
  ).to.equal(0);
}
function cp(t, e) {
  const i = [...t, e];
  i.sort((n, a) => (a.score?.total || 0) - (n.score?.total || 0));
  const s = i[0];
  if (s.score?.total && it(s) && (s.score?.total ?? 0) > (e.bestScore?.total ?? 0))
    return e.setBestScore(s), e.bestScore.group = s, s;
}
function IS(t) {
  const { container: e, containerPlacedShapes: i, unplacedShapes: s, shape: n, point: a, config: r, scoreFunction: o } = t;
  if (s.length < 3) return;
  let l = !1;
  n.orientationLock || (l = !0, n.orientationLock = n.rot === 1 ? "w" : "l");
  let c = [], u = [];
  Ui(e) ? u = [e.cutDirection] : u = e?.saw?.stockType === "roll" ? ["w"] : ["l", "w"];
  for (const g of u) {
    const x = hi(g), V = g === "l" ? "x" : "y", H = e[g] - n[V] - e.bladeWidth;
    if (H <= 0) continue;
    const A = rp(
      s,
      n,
      x
    );
    if (A.length < 2) continue;
    const E = cl({
      shapes: A,
      container: e,
      targetSize: H,
      d: n[x],
      id: "g" + n.id + "-" + n.rot + "-" + g.substring(0, 1),
      exact: !1,
      groupDirection: ul(g),
      firstShape: n,
      iterations: 40,
      config: {
        subset: r.subset
      }
    });
    E && c.push(E);
  }
  c.sort((g, x) => x.efficiency - g.efficiency), c.length > r.sample.groupSize && (c = c.slice(0, r.sample.groupSize)), It([() => c.every((g) => !gt(g), "shapes in the groups array")]);
  for (const g of c)
    g.x = a.x, g.y = a.y, g.outOfBounds = g.x + g.l > e.l || g.y + g.w > e.w, !g.outOfBounds && (Vh(g, i, e) || o(g, e, i, s, a));
  s.forEach((g) => g.resetGroupData());
  const h = cp(c, n), d = c.filter((g) => it(g) && g !== h);
  return d.length > 0 && d.forEach((g) => {
    fn("groups", `  Destroying group ${g.id} (${g.shapes?.length || 0} shapes)`), g.destroy();
  }), h && Ui(e) && (e.shapes.push(h), e.shapes = op(e.shapes, h)), l && (n.orientationLock = null), h && Ui(e) && It([
    () => lp(e.shapes, "POSITION GROUPS")
  ]), h;
}
const up = j({
  id: p(),
  count: f(),
  name: p(),
  l: f(),
  w: f(),
  t: f(),
  material: p()
}), ja = j({
  inputStock: ie(Gt),
  inputShapes: ie(fi),
  inputSaw: di,
  inputUserGroups: ie(In),
  // Centralized extras options for UI dropdowns
  extrasOptions: j({
    banding: j({
      options: ie(p())
    }).optional(),
    finish: j({
      options: ie(p())
    }).optional(),
    planing: j({
      options: ie(p())
    }).optional()
  }).optional()
}).optional(), dl = j({
  // Banding metrics
  bandingLengthByType: Se(p(), f()).default({}),
  // Finish metrics (by face)
  finishAreaByType: Se(p(), f()).default({}),
  // Material summary with nested structure
  materialSummary: Se(
    p(),
    // material name
    Se(
      p(),
      // thickness
      j({
        used: f(),
        stacks: f(),
        bandingLengthByType: Se(p(), f())
      })
    )
  ).default({}),
  // Tallies
  usedStockTally: Se(p(), f()).default({}),
  addedPartTally: Se(p(), f()).default({}),
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
}), Tn = dl.extend({
  bandingLengthByType: Se(p(), f()).default({}),
  unplacedParts: ie(up).default([])
}), dp = j({
  // Core optimization results
  stockList: We("Stock"),
  shapeList: We("Shape"),
  cutList: We("Cut").optional(),
  segmentList: We("Segment").optional(),
  offcuts: We("Offcut").optional(),
  saw: $e("Saw"),
  unusableShapes: We("Shape").optional(),
  unavailableStock: We("Stock").optional(),
  evolutionVisData: ie(j({})).optional(),
  performance: p().optional(),
  apiVersion: f().optional(),
  // Renamed from 'v'
  metadata: Tn.optional(),
  credits: f().optional(),
  // Optional input data for debugging/API reporting
  inputs: ja
});
j({
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
  config: ve().optional(),
  error: p().optional(),
  jobId: f().optional(),
  // Input data
  inputs: ja,
  // The actual optimization results
  optimisation: dp
});
j({
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
  config: ve().optional(),
  error: p().optional(),
  // Optimization results (flattened from optimization object)
  stockList: We("Stock"),
  shapeList: We("Shape"),
  cutList: We("Cut").optional(),
  segmentList: We("Segment").optional(),
  offcuts: We("Offcut").optional(),
  saw: $e("Saw"),
  unusableShapes: We("Shape").optional(),
  unavailableStock: We("Stock").optional(),
  performance: p().optional(),
  metadata: Tn.optional(),
  apiVersion: f().optional(),
  credits: f().optional(),
  // Input data
  inputs: ja,
  // Computed fields for easier querying/display
  numParts: f().optional(),
  numStock: f().optional()
});
j({
  id: p().optional(),
  name: p().optional(),
  l: f(),
  w: f(),
  t: f().nullable().optional(),
  material: p().optional(),
  q: f().optional(),
  orientationLock: xe([
    Ce(""),
    Ce("l"),
    Ce("w")
  ]).nullable().optional(),
  // Basic extras for display
  banding: ve().optional(),
  finish: ve().optional(),
  planing: ve().optional()
});
const fp = j({
  issues: ie(p()),
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
  orientationLock: xe([
    Ce(""),
    Ce("l"),
    Ce("w")
  ]),
  trim: j({
    l1: f(),
    l2: f(),
    w1: f(),
    w2: f()
  }),
  material: p(),
  banding: ve(),
  // Using any for now, could use bandingPropertiesSchema
  bandingType: ve(),
  // Legacy field
  finish: ve(),
  // Using any for now, could use finishPropertiesSchema
  stock: j({ id: p() }),
  rot: R(),
  notes: p(),
  customData: Se(p(), xe([p(), f(), R()]))
});
j({
  issues: ie(p()),
  id: p(),
  duplicate: R().optional(),
  name: p(),
  l: f(),
  w: f(),
  t: f().nullable(),
  material: p(),
  cost: f(),
  used: R(),
  grain: xe([
    Ce(""),
    Ce("l"),
    Ce("w"),
    gi()
  ]).nullable(),
  trim: j({
    l1: f(),
    l2: f(),
    w1: f(),
    w2: f()
  }),
  parts: ie(fp),
  efficiency: f(),
  notes: p().optional(),
  // Legacy V1 fields
  blade: j({
    width: f()
  }).optional(),
  cutPreference: xe([
    Ce("l"),
    Ce("w")
  ]).optional(),
  // Analysis data
  analysis: j({
    partArea: f(),
    totalParts: f(),
    areaEfficiency: f(),
    cutLength: f(),
    bandingLength: f(),
    numberOfCuts: f(),
    rollLength: f().optional()
  }).optional(),
  // Stack info
  stack: ve().optional(),
  // Stock quantity for checkout compatibility
  q: f().optional()
});
const hp = (t, e, i) => {
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
}, pp = /* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-BvE1DRtx.js"), "../translation/cs.json": () => import("./cs-CKgrA8uh.js"), "../translation/da.json": () => import("./da-CdV3I4kG.js"), "../translation/de.json": () => import("./de-DebqEgEE.js"), "../translation/el.json": () => import("./el-DteECDtO.js"), "../translation/en.json": () => import("./en-BsMiYcKN.js"), "../translation/es.json": () => import("./es-DTmimBvh.js"), "../translation/fi.json": () => import("./fi-BMstyxT9.js"), "../translation/fr.json": () => import("./fr-D8OHU2yd.js"), "../translation/hi.json": () => import("./hi-ChKUhGx0.js"), "../translation/hr.json": () => import("./hr-Dy5ywHLY.js"), "../translation/hu.json": () => import("./hu-DlAtjZSE.js"), "../translation/id.json": () => import("./id-CPSq5wJT.js"), "../translation/it.json": () => import("./it-Ds4nYtFW.js"), "../translation/ja.json": () => import("./ja-CYPMkww1.js"), "../translation/ko.json": () => import("./ko-CmuF00ME.js"), "../translation/ms.json": () => import("./ms-DXlG28bc.js"), "../translation/nl.json": () => import("./nl-BpuPDthc.js"), "../translation/no.json": () => import("./no-CPhvBGjn.js"), "../translation/pl.json": () => import("./pl-Cm5sx7HD.js"), "../translation/pt.json": () => import("./pt-X3yL3V7z.js"), "../translation/ro.json": () => import("./ro-BYvim0yN.js"), "../translation/ru.json": () => import("./ru-BPrbsLxm.js"), "../translation/sk.json": () => import("./sk-DErM7pfh.js"), "../translation/sv.json": () => import("./sv-CAtsF7_5.js"), "../translation/th.json": () => import("./th-hSZDpkeN.js"), "../translation/tr.json": () => import("./tr-qmYsqNGK.js"), "../translation/uk.json": () => import("./uk-BhANW4Ij.js"), "../translation/vi.json": () => import("./vi-BqaskQJ1.js"), "../translation/zh.json": () => import("./zh-ji67RGpu.js") }), is = Object.keys(pp).map((t) => {
  const e = t.match(/\/([a-zA-Z0-9_-]+)\.json$/);
  return e ? e[1] : "";
}).filter((t) => t !== "");
is.length === 0 && console.warn("[i18n] No language files found in ../translation/. Check paths and bundler setup for import.meta.glob.");
const pa = "en", Lt = Yr.createInstance();
function W(t, e) {
  if (io())
    return t;
  if (!Lt.isInitialized) {
    const s = Array.isArray(t) ? t.join(", ") : String(t);
    return console.warn(`[i18n] t function called before i18next was initialized. Key: ${s}. Returning key.`), s;
  }
  let i = Lt.t(t, e);
  return i = typeof i == "string" ? i : String(i), Xi(i);
}
const Vs = {}, gp = {
  type: "backend",
  init: () => {
  },
  // The `namespace` parameter will now be ignored by your backend logic
  read: async (t, e, i) => {
    try {
      if (Vs[t]) {
        i(null, Vs[t]);
        return;
      }
      const s = await hp(/* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-BvE1DRtx.js"), "../translation/cs.json": () => import("./cs-CKgrA8uh.js"), "../translation/da.json": () => import("./da-CdV3I4kG.js"), "../translation/de.json": () => import("./de-DebqEgEE.js"), "../translation/el.json": () => import("./el-DteECDtO.js"), "../translation/en.json": () => import("./en-BsMiYcKN.js"), "../translation/es.json": () => import("./es-DTmimBvh.js"), "../translation/fi.json": () => import("./fi-BMstyxT9.js"), "../translation/fr.json": () => import("./fr-D8OHU2yd.js"), "../translation/hi.json": () => import("./hi-ChKUhGx0.js"), "../translation/hr.json": () => import("./hr-Dy5ywHLY.js"), "../translation/hu.json": () => import("./hu-DlAtjZSE.js"), "../translation/id.json": () => import("./id-CPSq5wJT.js"), "../translation/it.json": () => import("./it-Ds4nYtFW.js"), "../translation/ja.json": () => import("./ja-CYPMkww1.js"), "../translation/ko.json": () => import("./ko-CmuF00ME.js"), "../translation/ms.json": () => import("./ms-DXlG28bc.js"), "../translation/nl.json": () => import("./nl-BpuPDthc.js"), "../translation/no.json": () => import("./no-CPhvBGjn.js"), "../translation/pl.json": () => import("./pl-Cm5sx7HD.js"), "../translation/pt.json": () => import("./pt-X3yL3V7z.js"), "../translation/ro.json": () => import("./ro-BYvim0yN.js"), "../translation/ru.json": () => import("./ru-BPrbsLxm.js"), "../translation/sk.json": () => import("./sk-DErM7pfh.js"), "../translation/sv.json": () => import("./sv-CAtsF7_5.js"), "../translation/th.json": () => import("./th-hSZDpkeN.js"), "../translation/tr.json": () => import("./tr-qmYsqNGK.js"), "../translation/uk.json": () => import("./uk-BhANW4Ij.js"), "../translation/vi.json": () => import("./vi-BqaskQJ1.js"), "../translation/zh.json": () => import("./zh-ji67RGpu.js") }), `../translation/${t}.json`, 3);
      Vs[t] = s.default, i(null, Vs[t]);
    } catch (s) {
      const n = `[i18n] Failed to load local resource module for language '${t}'. Error: ${s.message}`;
      console.warn(n, s), i(s, null);
    }
  }
};
async function mp() {
  return td(Lt), await Lt.use(ac).use(gp).init({
    debug: !1,
    fallbackLng: pa,
    supportedLngs: is.length > 0 ? is : [pa],
    interpolation: {
      format: function(t, e) {
        return e === "c" ? Xu(t) : e === "sc" ? Xi(t) : t;
      }
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"]
    }
  }), Lt;
}
const fl = mp().catch((t) => {
  console.error("[i18n] CRITICAL: Initialization failed.", t);
});
function yp() {
  return Lt.isInitialized;
}
const bp = async (t) => {
  if (is.length > 0 && !is.includes(t))
    return console.warn(`[i18n] Attempted to change to unsupported language: ${t}. Current: ${Lt.language}`), Lt.language;
  Lt.isInitialized || (console.warn("[i18n] changeLanguage called before initialization. Awaiting i18nextReady."), await fl);
  try {
    return await Lt.changeLanguage(t), console.log(`[i18n] Language changed to ${t}`), Lt.language;
  } catch (e) {
    return console.error(`[i18n] Failed to change language to ${t}:`, e), Lt.language;
  }
}, PS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, FALLBACK_LANGUAGE: pa, SUPPORTED_LANGUAGES: is, changeLanguage: bp, i18nextInstance: Lt, i18nextReady: fl, isI18nInitialized: yp, t: W }, Symbol.toStringTag, { value: "Module" })), Mt = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [s, n] of e)
    i[s] = n;
  return i;
};
function vp(t, e = []) {
  if (!t?.length) return [];
  const i = t.map((s) => s && typeof s.getType == "function" ? s : Ra(s)).filter((s) => s instanceof tl);
  return e.length && wp(i, e), i;
}
function wp(t = [], e = []) {
  t.length && e.length && t.forEach((i) => {
    i.shapeIds = i.shapeIds.filter((s) => e.find((n) => n.autoId === s));
  });
}
function Ir(t) {
  try {
    if (so()) {
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
function Pr(t) {
  try {
    if (so())
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
function hl(t) {
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
function Sp(t) {
  return t.map((e) => {
    const i = e.path.length > 0 ? e.path.join(".") : "root", s = hl(e), n = Ao(e.message, s);
    return `[${i}] ${n}`;
  });
}
function cs(t, e) {
  const i = t.safeParse(e);
  return {
    success: i.success,
    data: i.success ? i.data : void 0,
    errors: i.success ? void 0 : i.error.issues
  };
}
function xp(t = {}) {
  try {
    let e = function(P) {
      if (!P || typeof P != "object") return P;
      const T = { ...P };
      if (delete T.issues, delete T.warnings, T.trim && typeof T.trim == "object") {
        const S = T.trim;
        ("x1" in S || "x2" in S || "y1" in S || "y2" in S) && (T.trim = {
          l1: S.y1 ?? S.l1 ?? 0,
          l2: S.y2 ?? S.l2 ?? 0,
          w1: S.x1 ?? S.w1 ?? 0,
          w2: S.x2 ?? S.w2 ?? 0
        });
      }
      if (T.extras?.banding?.sides && typeof T.extras.banding.sides == "object") {
        const S = T.extras.banding.sides;
        ("x1" in S || "x2" in S || "y1" in S || "y2" in S) && (T.extras.banding.sides = {
          l1: S.y1 ?? S.l1,
          l2: S.y2 ?? S.l2,
          w1: S.x1 ?? S.w1,
          w2: S.x2 ?? S.w2
        });
      }
      if (T.extras?.finish?.sides && typeof T.extras.finish.sides == "object") {
        const S = T.extras.finish.sides;
        ("x1" in S || "x2" in S || "y1" in S || "y2" in S) && (T.extras.finish.sides = {
          l1: S.y1 ?? S.l1,
          l2: S.y2 ?? S.l2,
          w1: S.x1 ?? S.w1,
          w2: S.x2 ?? S.w2
        });
      }
      if (T.extras?.planing?.sides && typeof T.extras.planing.sides == "object") {
        const S = T.extras.planing.sides;
        ("x1" in S || "x2" in S || "y1" in S || "y2" in S) && (T.extras.planing.sides = {
          l1: S.y1 ?? S.l1,
          l2: S.y2 ?? S.l2,
          w1: S.x1 ?? S.w1,
          w2: S.x2 ?? S.w2
        });
      }
      if (T.efficiencyOptions?.primaryCompression) {
        const S = T.efficiencyOptions.primaryCompression;
        S === "x" ? T.efficiencyOptions = {
          ...T.efficiencyOptions,
          primaryCompression: "l"
        } : S === "y" && (T.efficiencyOptions = {
          ...T.efficiencyOptions,
          primaryCompression: "w"
        });
      }
      for (const S in T)
        T[S] === null && delete T[S];
      return T;
    }, i = function(P, T) {
      if (!Array.isArray(P))
        return [];
      const S = [];
      for (let se = 0; se < P.length; se++) {
        const re = P[se], fe = e(re);
        try {
          const ge = {
            ...fe,
            skipSchemaValidation: !0
            // Skip Zod validation during construction
          };
          re.autoId && (ge.autoId = re.autoId), delete ge.issues, delete ge.warnings;
          const je = new _s(ge, T);
          S.push(je);
        } catch (ge) {
          console.error(`Failed to create InputShape at index ${se}:`, ge);
        }
      }
      return S;
    }, s = function(P, T) {
      if (!Array.isArray(P)) return [];
      const S = [];
      for (let se = 0; se < P.length; se++) {
        const re = P[se], fe = e(re);
        try {
          const ge = {
            ...fe,
            skipSchemaValidation: !0
            // Skip Zod validation during construction
          };
          re.autoId && (ge.autoId = re.autoId);
          const je = new Rs(ge, T);
          S.push(je);
        } catch (ge) {
          console.error(`Failed to create InputStock at index ${se}:`, ge);
        }
      }
      return S;
    }, n = function(P) {
      const T = e(P), S = cs(di, T);
      if (S.success && S.data) {
        const se = {
          ...S.data,
          issues: [],
          warnings: []
        };
        return P?.autoId && (se.autoId = P.autoId), new oi(se);
      } else
        return console.error("Failed to parse input saw:", S.errors), new oi({});
    }, a = function(P, T) {
      return Array.isArray(P) ? T && T.length ? vp(P, T) : P.map((S) => new tl(S)).filter(Boolean) : [];
    }, r = function(P = {}) {
      try {
        const se = { ...Bt(
          (fe) => {
            if (typeof fe != "object" || fe === null) return fe;
            const ge = { ...fe };
            for (const je in ge)
              ge[je] === null && delete ge[je];
            return ge;
          },
          fi
        ).parse(P), isNew: !0 }, re = new _s(se, X);
        return re.createId(Q.value.length), Q.value.push(re), re;
      } catch (T) {
        return T instanceof zi && (console.error("Shape validation failed:", T.issues), E("part", "Invalid shape data", T.issues)), null;
      }
    }, o = function(P = {}) {
      try {
        const S = { ...Gt.parse(P), isNew: !0 }, se = new Rs(S, X);
        return se.createId(z.value.length), z.value.push(se), se;
      } catch (T) {
        return T instanceof zi && (console.error("Stock validation failed:", T.issues), E("stock", "Invalid stock data", T.issues)), null;
      }
    }, l = function(P) {
      try {
        const T = P.toData(), S = fi.parse(T);
        return new _s(S, X);
      } catch (T) {
        return T instanceof zi && (console.error("Shape clone validation failed:", T.issues), E("part", "Invalid shape data during cloning", T.issues)), null;
      }
    }, c = function(P) {
      try {
        const T = P.toData(), S = Gt.parse(T);
        return new Rs(S, X);
      } catch (T) {
        return T instanceof zi && (console.error("Stock clone validation failed:", T.issues), E("stock", "Invalid stock data during cloning", T.issues)), null;
      }
    }, u = function(P, T) {
      const S = Q.value.find((fe) => fe.autoId === P);
      if (!S) return !1;
      const se = { ...S.toData(), ...T }, re = cs(fi, se);
      if (re.success && re.data)
        return S.update(re.data), S.isNew || S.validate(), !0;
      {
        const fe = re.errors ? Sp(re.errors) : [];
        console.error("Shape update validation failed:", fe);
        const ge = re.errors?.[0];
        if (ge) {
          const je = hl(ge);
          new ue({
            category: ["part"],
            message: ge.message,
            // This is the translation key from Zod error map
            params: je,
            issues: ee.value
          });
        } else
          E("part", "Invalid shape update");
        return !1;
      }
    }, h = function(P, T) {
      const S = Q.value.findIndex((re) => re.autoId === P);
      if (S === -1) return !1;
      const se = Q.value[S];
      return se.validate({ fields: [T] }), se.issues.length === 0;
    }, d = function(P, T) {
      const S = z.value.find((fe) => fe.autoId === P);
      if (!S) return !1;
      const se = { ...S.toData(), ...T }, re = cs(Gt, se);
      return re.success && re.data ? (S.update(re.data), S.isNew || A(), !0) : (console.error("Stock update validation failed:", re.errors), E("stock", "Invalid stock update", re.errors), !1);
    }, g = function(P, T) {
      const S = z.value.findIndex((re) => re.autoId === P);
      if (S === -1) return !1;
      const se = z.value[S];
      return se.validate({ fields: [T] }), Bn(z), se.issues.length === 0;
    }, x = function(P) {
      if (Q.value.length === 1) return !1;
      const T = Q.value.findIndex((S) => S.autoId === P);
      return T === -1 ? !1 : (Q.value.splice(T, 1), !0);
    }, V = function(P) {
      if (z.value.length === 1) return !1;
      const T = z.value.findIndex((S) => S.autoId === P);
      return T === -1 ? !1 : (z.value.splice(T, 1), !0);
    }, H = function(P) {
      U.value = !0;
      const T = [];
      try {
        Q.value.forEach((S) => S.issues = []);
        for (let S = 0; S < Q.value.length; S++) {
          const se = Q.value[S];
          if (se.isNew)
            continue;
          const re = se.validate({
            inputStockList: z.value,
            index: S,
            stockType: P?.stockType ?? null,
            partTrim: 0,
            useInventory: !1,
            saw: P
          });
          T.push(...re);
        }
        Q.value.some((S) => Number(S.q) > 0) || new ue({
          category: ["part"],
          message: "errors.validation.no_parts",
          issues: T
        });
      } finally {
        U.value = !1;
      }
      return ee.value = T, T;
    }, A = function(P) {
      U.value = !0;
      const T = [];
      try {
        z.value.forEach((S) => S.issues = []);
        for (let S = 0; S < z.value.length; S++) {
          const re = z.value[S].validate({ saw: P }, S);
          T.push(...re);
        }
        z.value.some((S) => Number(S.q) > 0 || S.autoAdd) || new ue({
          category: ["stock"],
          message: "errors.validation.no_stock",
          issues: T
        });
      } finally {
        U.value = !1;
      }
      return ee.value = T, T;
    }, E = function(P, T, S) {
      new ue({
        category: [P],
        message: T,
        issues: ee.value
      }), S && console.log("Validation details:", S);
    }, Y = function() {
      ee.value = [], Q.value.forEach((P) => P.issues = []), z.value.forEach((P) => P.issues = []);
    }, O = function(P = {}) {
      const T = [], S = [], se = P.inputShapesOverride ?? Q.value;
      if (!se.length)
        return { shapeList: [], issues: [] };
      for (let re = 0; re < se.length; re++) {
        const fe = se[re];
        if (!fe.q) continue;
        fe.createId(re), fe.applyPartTrim(P.trim, P.stockType);
        const ge = fe.toShape();
        T.push(ge), S.push(...ge.issues);
      }
      return { shapeList: T, issues: S };
    }, M = function(P) {
      if (!z.value.length)
        return { stockList: [], issues: [] };
      const T = [], S = [];
      for (let se = 0; se < z.value.length; se++) {
        const re = z.value[se];
        if (!re.q && !re.autoAdd) continue;
        re.createId(se), re.saw = P;
        const fe = re.toStock();
        T.push(fe), S.push(...fe.issues);
      }
      return { stockList: T, issues: S };
    }, N = function(P, T = X) {
      const S = {
        saw: { success: !1, failed: !1 },
        shapes: { success: 0, failed: 0 },
        stock: { success: 0, failed: 0 },
        groups: { success: 0, failed: 0 }
      };
      if (P.saw) {
        const se = cs(di, e(P.saw));
        if (se.success && se.data) {
          const re = { ...se.data };
          P.saw?.autoId && (re.autoId = P.saw.autoId), B.value = new oi(re), S.saw.success = !0;
        } else
          console.error("Failed to parse input saw:", se.errors), S.saw.failed = !0;
      }
      if (P.shapes) {
        const se = i(P.shapes, T);
        S.shapes.success = se.length, S.shapes.failed = P.shapes.length - se.length, Q.value = se;
      }
      if (P.stock) {
        const se = s(P.stock, T);
        S.stock.success = se.length, S.stock.failed = P.stock.length - se.length, z.value = se;
      }
      if (P.groups) {
        const se = a(P.groups);
        S.groups.success = se.length, S.groups.failed = P.groups.length - se.length, G.value = se;
      }
      return P.extrasOptions && (q.value = { ...P.extrasOptions }), S;
    }, D = function() {
      return {
        shapes: Q.value.map((P) => P.toData()),
        stock: z.value.map((P) => P.toData()),
        inputUserGroups: G.value.map((P) => P.toData()),
        extrasOptions: q.value
      };
    }, k = function() {
      Q.value = [], z.value = [], G.value = [], Y();
    }, $ = function(P) {
      const T = { ...B.value.toData(), ...P }, S = cs(di, T);
      return S.success && S.data ? (B.value.update(S.data), !0) : (console.error("InputSaw update validation failed:", S.errors), E("saw", "Invalid saw update", S.errors), !1);
    }, b = function() {
      B.value = new oi({});
    }, Z = function() {
      const P = B.value.validate();
      return ee.value = [...ee.value.filter((T) => T.category?.[0] !== "saw"), ...P], P;
    };
    const { numberFormat: X = "decimal" } = t, Q = rs("inputs/inputShapes", [], {
      serializer: {
        read: (P) => {
          if (!P) {
            const se = "GlobalStore/inputShapes", re = Ir(se);
            if (re)
              P = re, Pr(se);
            else return [];
          }
          let T;
          try {
            T = JSON.parse(P);
          } catch (se) {
            return console.error("Failed to parse input shapes JSON:", se), [];
          }
          return i(T, X);
        },
        write: (P) => {
          const S = P.filter((re) => !re?.multiEdit).map((re) => re.toData());
          return JSON.stringify(S);
        }
      },
      listenToStorageChanges: !1
    }), z = rs("inputs/inputStock", [], {
      serializer: {
        read: (P) => {
          if (!P) return [];
          let T;
          try {
            T = JSON.parse(P);
          } catch (se) {
            return console.error("  Failed to parse stock JSON:", se), [];
          }
          return s(T, X);
        },
        write: (P) => {
          const S = P.filter((re) => !re?.multiEdit).map((re) => re.toData());
          return JSON.stringify(S);
        }
      },
      listenToStorageChanges: !1
    }), B = rs("inputs/inputSaw", new oi({}), {
      serializer: {
        read: (P) => {
          if (!P) {
            const S = Ir("saw");
            if (S)
              P = S, Pr("saw");
            else return new oi({});
          }
          try {
            const T = JSON.parse(P);
            return n(T);
          } catch (T) {
            return console.error("  Failed to parse saw JSON:", T), new oi({});
          }
        },
        write: (P) => {
          if (!P)
            return JSON.stringify({});
          const T = P.toData();
          return JSON.stringify(T);
        }
      },
      listenToStorageChanges: !1
    }), G = rs("inputs/inputUserGroups", [], {
      serializer: {
        read: (P) => a(P ? JSON.parse(P) : []),
        write: (P) => JSON.stringify(P.map((T) => T.toData()))
      }
    }), q = rs("inputs/extrasOptions", {
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
    }), ee = le([]), U = le(!1);
    Q.value.length === 0 && (Q.value = [new _s({ isNew: !0 })]), z.value.length === 0 && (z.value = [new Rs({ isNew: !0 })]);
    const we = ne(() => Q.value.reduce((P, T) => {
      const S = Number(T?.q);
      return S && S > 0 && !T?.multiEdit ? P + S : P;
    }, 0)), me = ne(() => z.value.reduce((P, T) => {
      const S = Number(T?.q);
      return S && S > 0 && !T?.multiEdit ? P + S : P;
    }, 0)), ke = ne(() => Q.value.reduce((P, T) => T?.multiEdit ? P : P + 1, 0)), Ae = ne(() => z.value.reduce((P, T) => T?.multiEdit ? P : P + 1, 0)), te = ne(() => ee.value.length > 0), Be = () => [
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
    ], dt = le(null), ft = le(null), Je = () => {
      dt.value = null;
    }, Ie = Y, Xe = (P = null) => {
      const T = P?.inputShapesOverride ?? Q.value, S = H(P?.saw || void 0);
      if (T.length) {
        Yo(T, z.value, P?.saw || B.value);
        const se = T.flatMap((re) => re.issues);
        return [...S, ...se];
      }
      return S;
    }, et = async (P, T = "decimal") => {
      const S = P?.inputSaw, se = P?.inputShapes, re = P?.inputStock, fe = P?.inputUserGroups, ge = N({
        saw: S,
        shapes: se,
        stock: re,
        groups: fe
      }, T);
      return Bn(Q), Bn(z), await bt(), ge;
    }, ye = (P, T = "decimal") => N({ shapes: P }, T).shapes.success > 0, At = (P, T = "decimal") => N({ stock: P }, T).stock.success > 0, St = (P, T, S, se) => {
      T[0]?.length > 0 && (q.value[P] || (q.value[P] = { options: [] }), q.value[P].options = [...T[0]]), S && se && T.length > 0 ? nr(P, {
        options: T,
        // Use all columns extracted from pricing
        labels: S,
        pricing: se
      }) : console.warn("[setExtrasOptionsFromPricing] Missing data for centralized config:", { labels: S, pricingData: se, pricingOptionsLength: T.length });
    }, de = () => {
      if (!Object.values(q.value).some(
        (S) => S.options.length > 0
      )) return;
      const T = (S, se) => {
        const re = {};
        for (const fe of se)
          re[fe] = [...S];
        return re;
      };
      return {
        banding: q.value.banding.options.length > 0 ? {
          options: {
            sides: T(q.value.banding.options, ["l1", "l2", "w1", "w2"])
          }
        } : void 0,
        finish: q.value.finish.options.length > 0 ? {
          options: {
            faces: T(q.value.finish.options, ["a", "b"])
          }
        } : void 0,
        planing: q.value.planing.options.length > 0 ? {
          options: {
            sides: T(q.value.planing.options, ["l1", "l2", "w1", "w2"]),
            faces: T(q.value.planing.options, ["a", "b"])
          }
        } : void 0
      };
    }, he = (P) => {
      if (!z.value.length) return "n";
      const T = P.material, S = P.t, se = z.value.filter((je) => je.material === T && je.t === S);
      if (!se.length)
        return "n";
      let re = !1, fe = !1, ge = !1;
      for (const je of se)
        je.grain === "l" ? (re = !0, fe = !0) : je.grain === "w" && (re = !0, ge = !0);
      return re ? fe && ge ? "y" : fe ? "l" : ge ? "w" : "n" : "n";
    }, Me = (P) => {
      for (const T of Q.value)
        lr(T, P);
      for (const T of z.value)
        lr(T, P);
    };
    let ce = !1;
    return Ue(Q, (P) => {
      ce || !P.length || bt(() => {
        const T = ["banding", "finish", "planing"], S = [];
        T.forEach((se) => {
          const re = /* @__PURE__ */ new Set();
          if (P.forEach((fe) => {
            const ge = fe.extras?.[se];
            ge && (ge.faces && Object.values(ge.faces).forEach((je) => {
              typeof je == "string" && je.trim() && je !== "Y" && re.add(je);
            }), ge.sides && Object.values(ge.sides).forEach((je) => {
              typeof je == "string" && je.trim() && je !== "Y" && re.add(je);
            }));
          }), re.size > 0) {
            const fe = Dc(se);
            if (fe) {
              const ge = fe.options[0];
              if (Array.isArray(ge) && (ge.length === 0 || typeof ge[0] == "string")) {
                const je = new Set(ge), st = Array.from(re).filter((Pt) => !je.has(Pt));
                if (st.length > 0) {
                  const Pt = [...ge, ...st];
                  nr(se, {
                    ...fe,
                    options: [Pt, ...fe.options.slice(1)]
                  });
                }
              }
            }
          }
        }), T.forEach((se) => {
          const re = Ec(se, P);
          re.cleanedCount > 0 && S.push(
            `${se}: ${re.invalidOptions.join(", ")}`
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
        }, 500)), ce = !0;
      });
    }, { immediate: !0 }), {
      // Bundled object
      inputs: {
        inputStock: z,
        inputShapes: Q,
        inputUserGroups: G,
        currentInputShape: dt,
        selectedSaw: ft,
        inputSaw: B
      },
      // State
      inputShapes: Q,
      inputStock: z,
      inputUserGroups: G,
      inputSaw: B,
      currentInputShape: dt,
      selectedSaw: ft,
      validationIssues: ee,
      isValidating: U,
      // Computed
      totalInputShapes: we,
      totalInputStock: me,
      totalInputShapeLines: ke,
      totalInputStockLines: Ae,
      hasValidationIssues: te,
      // Actions
      addInputShape: r,
      addInputStock: o,
      cloneInputShape: l,
      cloneInputStock: c,
      updateInputShape: u,
      updateInputStock: d,
      updateInputSaw: $,
      removeInputShape: x,
      removeInputStock: V,
      reset: Je,
      resetInputSaw: b,
      clear: k,
      clearIssues: Ie,
      // Validation
      validateInputShapes: Xe,
      validateInputShapeField: h,
      validateInputStock: A,
      validateInputStockField: g,
      validateInputSaw: Z,
      clearValidationIssues: Y,
      // Conversion
      createShapeList: O,
      createStockList: M,
      // Import/Export/Update
      importData: N,
      exportData: D,
      updateInputs: et,
      importInputShapes: ye,
      importInputStock: At,
      // Additional functions
      getShapeGrainSummary: he,
      updateNumberFormat: Me,
      getSpecialShapeFields: Be,
      // Extras Options Management
      extrasOptions: q,
      setExtrasOptionsFromPricing: St,
      getCentralizedOptions: de
    };
  } catch (e) {
    throw console.error("[createInputs] Fatal error during initialization:", e), e;
  }
}
let Yn = null;
function pl(t = { numberFormat: "decimal" }) {
  try {
    return Yn || (Yn = xp(t)), Yn;
  } catch (e) {
    throw console.error("[useInputs] FATAL ERROR in useInputs:", e), console.error("[useInputs] Error stack:", e?.stack), e;
  }
}
class Cr {
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
    const i = e.banding, s = "_banding" in e ? e._banding : void 0, n = Fe(e) ? e.bandingOptions : void 0;
    if (!i && !s && !n) return !1;
    if (i && i instanceof Vt) {
      const u = i.sides;
      if (u && typeof u == "object" && ("x1" in u || "x2" in u || "y1" in u || "y2" in u)) {
        const d = this.migrateSideNames(u);
        return i.sides = d, !0;
      }
      return !1;
    }
    const a = {}, r = {}, o = { sides: {} };
    if (i && typeof i == "object") {
      const u = this.migrateSideNames(i);
      for (const [h, d] of Object.entries(u))
        Ft.includes(h) && (a[h] = d);
    }
    if (s && typeof s == "object") {
      const u = this.migrateSideNames(s);
      for (const [h, d] of Object.entries(u))
        Ft.includes(h) && (r[h] = d);
    }
    if (n && typeof n == "object") {
      n.all && (o.sides.all = n.all);
      for (const [u, h] of Object.entries(n))
        u !== "all" && Ft.includes(u) && h && (o.sides[u] = h);
    }
    const l = new Vt(Object.keys(a).length > 0 ? { sides: a } : {}), c = Object.keys(r).length > 0 ? new Vt({ sides: r }) : void 0;
    return "extras" in e && e.extras ? e.extras.banding = l : Fe(e) && (e.banding = l), c && "_banding" in e && (e._banding = c), Fe(e) && n && (e.bandingOptions = o), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(e) {
    const i = e.finish, s = "_finish" in e ? e._finish : void 0, n = Fe(e) ? e.finishOptions : void 0;
    if (!i && !s && !n || i && i instanceof $t)
      return !1;
    const a = {}, r = {}, o = { faces: {} };
    if (i && typeof i == "object")
      for (const [u, h] of Object.entries(i))
        wt.includes(u) && (a[u] = h);
    if (s && typeof s == "object")
      for (const [u, h] of Object.entries(s))
        wt.includes(u) && (r[u] = h);
    if (n && typeof n == "object") {
      n.all && (o.faces.all = n.all);
      for (const [u, h] of Object.entries(n))
        u !== "all" && wt.includes(u) && h && (o.faces[u] = h);
    }
    const l = new $t(Object.keys(a).length > 0 ? { faces: a } : {}), c = Object.keys(r).length > 0 ? new $t({ faces: r }) : void 0;
    return "extras" in e && e.extras ? e.extras.finish = l : Fe(e) && (e.finish = l), c && "_finish" in e && (e._finish = c), Fe(e) && n && (e.finishOptions = o), !0;
  }
  /**
   * Migrate storage format: Convert boolean true to option name strings in multi-column configs
   * This handles legacy data where single-option checkboxes stored boolean true instead of the option name
   */
  static migrateStorageFormat(e) {
    let i = !1;
    const s = "extras" in e && e.extras ? e.extras : e;
    if (s.banding) {
      const n = Wt("banding");
      if (n && n.labels && n.labels.length > 1)
        for (const a of Ft) {
          const r = `side.${a}`, o = es(e, "banding", r);
          if (o && typeof o == "object" && !Array.isArray(o)) {
            let l = !1;
            const c = { ...o };
            for (const u of n.labels)
              if (c[u] === !0) {
                const d = n.labels.indexOf(u);
                if (d !== -1 && n.options[d] && Array.isArray(n.options[d])) {
                  const g = n.options[d];
                  g.length === 1 && (c[u] = g[0], l = !0);
                }
              }
            l && (gs(e, "banding", r, c), i = !0);
          }
        }
    }
    if (s.finish) {
      const n = Wt("finish");
      if (n && n.labels && n.labels.length > 1)
        for (const a of wt) {
          const r = `face.${a}`, o = es(e, "finish", r);
          if (o && typeof o == "object" && !Array.isArray(o)) {
            let l = !1;
            const c = { ...o };
            for (const u of n.labels)
              if (c[u] === !0) {
                const d = n.labels.indexOf(u);
                if (d !== -1 && n.options[d] && Array.isArray(n.options[d])) {
                  const g = n.options[d];
                  g.length === 1 && (c[u] = g[0], l = !0);
                }
              }
            l && (gs(e, "finish", r, c), i = !0);
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
    if (i && typeof i == "object" && !(i instanceof Vt) && !("sides" in i) && !("faces" in i))
      return !0;
    if ("_banding" in e) {
      const n = e._banding;
      if (n && typeof n == "object" && !(n instanceof Vt) && !("sides" in n) && !("faces" in n))
        return !0;
    }
    const s = e.finish;
    if (s && typeof s == "object" && !(s instanceof $t) && !("sides" in s) && !("faces" in s))
      return !0;
    if ("_finish" in e) {
      const n = e._finish;
      if (n && typeof n == "object" && !(n instanceof $t) && !("sides" in n) && !("faces" in n))
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
          const n = Object.keys(i.sides).filter((a) => !Ft.includes(a));
          if (n.length > 0)
            throw new Error(`Invalid side keys in banding: ${n.join(", ")}`);
        }
      }
      const s = e.finish;
      if (s) {
        if ("sides" in s && s.sides)
          throw new Error("Finish should not have sides property");
        if ("faces" in s && s.faces) {
          const n = Object.keys(s.faces).filter((a) => !wt.includes(a));
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
    return "_banding" in e && e._banding && (i._banding = JSON.parse(JSON.stringify(e._banding))), "_finish" in e && e._finish && (i._finish = JSON.parse(JSON.stringify(e._finish))), Fe(e) && (e.bandingOptions && (i.bandingOptions = JSON.parse(JSON.stringify(e.bandingOptions))), e.finishOptions && (i.finishOptions = JSON.parse(JSON.stringify(e.finishOptions)))), i;
  }
  /**
   * Restore shape from backup
   */
  static restoreFromBackup(e, i) {
    "extras" in e && e.extras ? (i.banding && (e.extras.banding = i.banding), i.finish && (e.extras.finish = i.finish)) : Fe(e) && (i.banding && (e.banding = i.banding), i.finish && (e.finish = i.finish)), i._banding && "_banding" in e && (e._banding = i._banding), i._finish && "_finish" in e && (e._finish = i._finish), Fe(e) && (i.bandingOptions && (e.bandingOptions = i.bandingOptions), i.finishOptions && (e.finishOptions = i.finishOptions));
  }
}
const kp = {
  y1: "l1",
  y2: "l2",
  x1: "w1",
  x2: "w2"
}, Ip = {
  l1: "y1",
  l2: "y2",
  w1: "x1",
  w2: "x2"
};
function ga(t = !1) {
  return {
    l1: t,
    l2: t,
    w1: t,
    w2: t
  };
}
function Pp(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t
  };
}
function hn(t = !1) {
  return {
    a: t,
    b: t
  };
}
function Cp(t = !1) {
  return {
    sides: ga(t),
    faces: hn(t)
  };
}
function Ap(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t,
    a: t,
    b: t
  };
}
function Tp(t) {
  const e = {};
  for (const [i, s] of Object.entries(kp))
    i in t && (e[s] = t[i]);
  return e;
}
function Op(t) {
  const e = {};
  for (const [i, s] of Object.entries(Ip))
    i in t && (e[s] = t[i]);
  return e;
}
function Ot(t) {
  return t === 1 ? !0 : t === 0 ? !1 : t;
}
function ci(t) {
  if (!t) return t;
  const e = "x1" in t || "x2" in t || "y1" in t || "y2" in t, i = "l1" in t || "l2" in t || "w1" in t || "w2" in t;
  if (e && i && console.warn("Mixed side format detected in data - using old format (x/y) and ignoring new format (l/w)", t), e) {
    const n = Tp(t), a = {};
    return "l1" in n && (a.l1 = Ot(n.l1)), "l2" in n && (a.l2 = Ot(n.l2)), "w1" in n && (a.w1 = Ot(n.w1)), "w2" in n && (a.w2 = Ot(n.w2)), a;
  }
  const s = {};
  return "l1" in t && (s.l1 = Ot(t.l1)), "l2" in t && (s.l2 = Ot(t.l2)), "w1" in t && (s.w1 = Ot(t.w1)), "w2" in t && (s.w2 = Ot(t.w2)), Object.keys(s).length > 0 ? s : t;
}
function Lp(t) {
  return !t || typeof t != "string" ? t : {
    "side.x1": "side.w1",
    "side.x2": "side.w2",
    "side.y1": "side.l1",
    "side.y2": "side.l2"
  }[t] || t;
}
function Bi(t) {
  return !t || !Array.isArray(t) ? t : t.map(Lp);
}
function Fp(t) {
  const e = {};
  if (t.banding && typeof t.banding == "object")
    for (const [i, s] of Object.entries(t.banding))
      s === !0 || s === !1 ? e[i] = s : typeof s == "number" ? e[i] = Ot(s) : typeof s == "string" && s.length > 0 && (e[i] = s);
  if (t.bandingType && typeof t.bandingType == "object")
    for (const [i, s] of Object.entries(t.bandingType))
      if (t.banding) {
        const n = e[i];
        (n === !0 || typeof n == "string" && n.length > 0) && (typeof s == "string" && s.length > 0 ? e[i] = s : typeof s == "number" && s !== 0 && (e[i] = String(s)));
      } else
        typeof s == "string" && s.length > 0 ? e[i] = s : typeof s == "number" && s !== 0 && (e[i] = String(s));
  return Object.keys(e).length > 0 ? e : void 0;
}
function ma(t) {
  return t && Op(t);
}
function $p(t) {
  t?.type && delete t.type, Dp.call(this, t), Ep.call(this, t), Mp.call(this, t), t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => ya(e));
}
function Dp(t) {
  if (!t?.banding || typeof t.banding != "object") return;
  const e = Object.keys(t.banding);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.banding = {
    labels: Object.keys(t.banding),
    pricing: t.bandingPricing || {}
  }, t.bandingPricing && delete t.bandingPricing);
}
function Ep(t) {
  if (!t?.finish || typeof t.finish != "object") return;
  const e = Object.keys(t.finish);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.finish = {
    labels: Object.keys(t.finish),
    pricing: t.finishPricing || {}
  }, t.finishPricing && delete t.finishPricing);
}
function Mp(t) {
  if (!t?.planing || typeof t.planing != "object") return;
  const e = Object.keys(t.planing);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.planing = {
    labels: Object.keys(t.planing),
    pricing: t.planingPricing || {}
  }, t.planingPricing && delete t.planingPricing);
}
function ya(t) {
  !t || typeof t != "object" || (Cr.needsMigration(t) && Cr.migrateShape(t), t._banding && delete t._banding, t._finish && delete t._finish, t._bandingType && delete t._bandingType);
}
function gl(t) {
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
function CS(t) {
  if (!(!t || typeof t != "object")) {
    if ($p(t), t.parts && Array.isArray(t.parts) && (t.parts = t.parts.map((e) => (e.extras?.banding?.sides && (e.extras.banding.sides = ci(e.extras.banding.sides)), e.extras?.finish?.sides && (e.extras.finish.sides = ci(e.extras.finish.sides)), e.extras?.planing?.sides && (e.extras.planing.sides = ci(e.extras.planing.sides)), e))), t.stock && Array.isArray(t.stock) && (t.stock = t.stock.map((e) => e?.trim ? {
      ...e,
      trim: ci(e.trim)
    } : e)), t.options) {
      if (gl(t.options), t.options.bandingLocations && (t.options.bandingLocations = Bi(t.options.bandingLocations)), t.options.finishLocations && (t.options.finishLocations = Bi(t.options.finishLocations)), t.options.planingLocations && (t.options.planingLocations = Bi(t.options.planingLocations)), t.options.extrasLocationGroups)
        for (const e of ["banding", "finish", "planing"]) {
          const i = t.options.extrasLocationGroups[e];
          i && Array.isArray(i) && i.forEach((s) => {
            s.locations && (s.locations = Bi(s.locations));
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
        i.locations && Array.isArray(i.locations) && (i.locations = Bi(i.locations)), i.groups && Array.isArray(i.groups) && i.groups.forEach((s) => {
          s.locations && (s.locations = Bi(s.locations));
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
    t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => ya(e)), (t.l !== void 0 || t.w !== void 0 || t.banding !== void 0) && ya(t);
  }
}
function _p(t) {
  if (!t || typeof t != "object")
    return t;
  const e = { ...t };
  return e.saw && (e.saw = Rp(e.saw)), Array.isArray(e.stock) && (e.stock = e.stock.map(jp)), Array.isArray(e.parts) && (e.parts = e.parts.map(Vp)), e;
}
function Rp(t) {
  const e = { ...t };
  if (e.guillotineOptions && (e.guillotineOptions = { ...e.guillotineOptions }, e.guillotineOptions.strategy === "stock" && (e.guillotineOptions.strategy = "efficiency")), e.efficiencyOptions) {
    e.efficiencyOptions = { ...e.efficiencyOptions };
    const i = e.efficiencyOptions.primaryCompression;
    i === "x" ? e.efficiencyOptions.primaryCompression = "l" : i === "y" && (e.efficiencyOptions.primaryCompression = "w");
  }
  return e.bladeWidth !== void 0 && (e.bladeWidth = Number(e.bladeWidth)), e.stackHeight !== void 0 && (e.stackHeight = Number(e.stackHeight)), (e.cutPreference === null || e.cutPreference === void 0) && (e.cutType === "guillotine" || e.cutType === "beam") && (e.cutPreference = "l"), e;
}
function jp(t) {
  const e = { ...t };
  return delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.trim && (e.trim = ci(e.trim)), e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e.cost !== void 0 && (e.cost = Number(e.cost)), e;
}
function Vp(t) {
  const e = { ...t };
  if (delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.banding || e.bandingType) {
    const i = Fp(e);
    i && Object.keys(i).length > 0 && (e.extras || (e.extras = {}), e.extras.banding || (e.extras.banding = {}), e.extras.banding.sides = ci(i)), delete e.banding, delete e.bandingType;
  }
  if (e.extras?.banding?.sides && (e.extras = { ...e.extras }, e.extras.banding = { ...e.extras.banding }, e.extras.banding.sides = ci(e.extras.banding.sides)), e.finish && !e.extras?.finish) {
    if (e.extras || (e.extras = {}), e.extras.finish || (e.extras.finish = {}), e.finish.a !== void 0 || e.finish.b !== void 0) {
      const i = {};
      "a" in e.finish && (i.a = Ot(e.finish.a)), "b" in e.finish && (i.b = Ot(e.finish.b)), e.extras.finish.faces = i;
    } else
      e.extras.finish.sides = ci(e.finish);
    delete e.finish;
  }
  if (e.extras?.finish?.sides && (e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish }, e.extras.finish.sides = ci(e.extras.finish.sides)), e.extras?.finish?.faces) {
    e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish };
    const i = e.extras.finish.faces;
    "a" in i && (i.a = Ot(i.a)), "b" in i && (i.b = Ot(i.b));
  }
  return e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e;
}
function qt(t) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t)) return t.map(qt);
  const e = {};
  for (const [i, s] of Object.entries(t))
    i === "__entityType" || i === "autoId" || (e[i] = qt(s));
  return e;
}
function Bp(t) {
  if (!t) return null;
  const {
    enabled: e,
    __entityType: i,
    autoId: s,
    ...n
  } = t;
  return qt(n);
}
function Np(t) {
  return t ? typeof t == "string" ? t : t.id ? t.id : t.autoId ? t.autoId : "" : "";
}
function Gp(t) {
  const e = Np(t);
  return e ? { id: e } : null;
}
function qp(t) {
  return t.rot !== void 0 ? t.rot ? 1 : 0 : t.rotated !== void 0 ? t.rotated ? 1 : 0 : t.isRotated !== void 0 ? t.isRotated ? 1 : 0 : t.w > t.l ? 1 : 0;
}
const ml = j({
  // Job metadata
  jobId: f().describe("Job identifier"),
  // Input configuration (preserved)
  saw: di.describe("Saw configuration used"),
  // Result data (internal format - l1/l2/w1/w2)
  // Using actual schemas to strip internal-only fields
  stock: ie(tn).describe("Stock items with placement layouts"),
  parts: ie(ys).describe("Parts with coordinates and properties"),
  cuts: ie(Do).optional().describe("Cut instructions"),
  offcuts: ie(Fu).optional().describe("Remaining offcut pieces"),
  unusableParts: ie(ys).optional().describe("Parts that could not be placed"),
  // Complete metadata (ALL internal analysis fields)
  metadata: dl.describe("Complete analysis and metrics")
});
j({
  saw: di.describe("Saw configuration"),
  stock: ie(Gt).describe("Stock items"),
  parts: ie(fi).describe("Parts to cut"),
  groups: ie(In).optional().describe("User-defined groups"),
  webhook: p().url().optional().describe("Webhook URL for async result delivery")
});
j({
  error: p().describe("Error message"),
  details: sr().optional().describe("Detailed error information (Zod validation errors, etc.)"),
  version: Ce("V3").describe("API version"),
  help: p().optional().describe("Helpful migration guidance"),
  example: sr().optional().describe("Example of correct format"),
  docs: p().url().optional().describe("Link to V3 documentation")
});
function zp(t) {
  if (!t) return null;
  const {
    ...e
  } = t;
  return qt(e);
}
function Wp(t) {
  return t ? {
    id: t.id,
    name: t.name,
    l: t.l,
    w: t.w,
    t: t.t,
    material: t.material,
    grain: t.grain ?? null,
    type: t.type ?? "sheet",
    used: t.used ?? !1,
    trim: qt(t.trim),
    cost: t.cost ?? 0,
    notes: t.notes ?? "",
    analysis: zp(t.analysis),
    stack: t.stack?.number ?? 1,
    customData: qt(t.customData)
  } : null;
}
function Ar(t) {
  if (!t) return null;
  const e = {
    id: t.id,
    name: t.name,
    l: t.l,
    w: t.w,
    t: t.t,
    material: t.material ?? "",
    x: t.x,
    y: t.y,
    rot: qp(t),
    added: t.added ?? !1,
    notes: t.notes ?? "",
    stock: Gp(t.stock),
    trim: qt(t.trim),
    extras: qt(t.extras),
    customData: qt(t.customData)
  };
  return t.machining && (e.machining = Bp(t.machining)), e;
}
function Hp(t) {
  return t ? {
    x1: t.x1,
    x2: t.x2,
    y1: t.y1,
    y2: t.y2,
    dimension: t.dimension,
    position: t.position,
    isTrim: t.isTrim ?? !1,
    order: t.order ?? null,
    stock: t.stock ? { id: t.stock.id || t.stock.autoId } : null
  } : null;
}
function Up(t) {
  return t ? {
    id: t.id,
    l: t.l,
    w: t.w,
    t: t.t,
    x: t.x,
    y: t.y,
    q: t.q ?? 1,
    material: t.material,
    grain: t.grain ?? null,
    stock: t.stock ? { id: t.stock.id || t.stock.autoId } : null
  } : null;
}
function Yp(t) {
  const e = (t.stockList || t.stock || []).map(Wp), i = (t.shapeList || t.parts || []).map(Ar), s = (t.unusableShapes || []).map(Ar), n = (t.cutList || t.cuts || []).map(Hp), a = (t.offcuts || []).map(Up);
  return {
    jobId: t.jobId,
    saw: qt(t.saw),
    stock: e,
    parts: i,
    cuts: n,
    offcuts: a,
    unusableParts: s,
    metadata: qt(t.metadata)
  };
}
const Kp = { id: "mini-stock-nav" }, Zp = ["onMousedown"], Jp = { class: "id" }, Xp = /* @__PURE__ */ Ye({
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
    return (a, r) => (w(), F("div", Kp, [
      (w(!0), F(Ve, null, Qe(i.stockList, (o, l) => (w(), F("button", {
        type: "button",
        key: l,
        class: Re(["c-btn c-btn--col-4 c-btn--sm", { selected: o.autoId === i.activeStockId }]),
        style: ht({
          backgroundColor: o.autoId === i.activeStockId ? "#" + i.secondaryColor : "#" + i.primaryColor
        }),
        onMousedown: (c) => n(o.autoId)
      }, [
        L("div", Jp, oe(l + 1), 1),
        ws(L("div", { class: "stack legibility" }, oe(o.stack.number), 513), [
          [gn, typeof o?.stack?.number == "number" && o.stack.number > 1]
        ])
      ], 46, Zp))), 128))
    ]));
  }
});
function Qp(t) {
  const e = t.x, i = t.x + t.l, s = jt().domain([e, i]).range([this.scales.xPositionScale(e), this.scales.xPositionScale(i)]), n = t.y, a = t.y + t.w, r = jt().domain([n, a]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(a)]), o = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + o})`).call(Qs(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + o})`).attr("class", "axis shape x").call(Qs(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), t?.stock?.saw?.stockType !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - o}, 0)`).call(en(r).tickValues(r.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - o}, 0)`).attr("class", "axis shape y").call(en(r).tickValues(r.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function eg() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((e) => {
    e.transition().duration(0).call(Xr(this.scales.xScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dy", -5);
  });
  const t = this.requiresStretch(this.props.stock.value);
  (!t || t && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((e) => {
    e.transition().duration(0).call(Qr(this.scales.yAxisScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dx", 5);
  });
}
function pn(t, e, i) {
  !i || !t?.length || t.forEach((s, n) => {
    const [a, r] = s;
    i === "x" ? tg.call(this, a, r, e[n]) : ig.call(this, a, r, e[n]);
  });
}
function tg(t, e, i) {
  const s = jt().domain([t, e]).range([
    this.scales.xPositionScale(t),
    this.scales.xPositionScale(e)
  ]), n = yl(s.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(Qs(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(i)));
  a.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (r, o, l) => l[o]?.getBBox()?.height + 10), this.axes.cutMeasurementXAxes.push(a);
}
function ig(t, e, i) {
  const s = jt().domain([t, e]).range([
    this.scales.yPositionScale(t),
    this.scales.yPositionScale(e)
  ]), n = yl(s.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(en(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(i)));
  sg(a), this.axes.cutMeasurementYAxes.push(a);
}
function yl(t) {
  return (t[1] - t[0]) / 2 + t[0];
}
function sg(t) {
  t.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (e, i, s) => s[i]?.getBBox()?.height + 10).attr("dx", (e, i, s) => s[i]?.getBBox()?.width / 4).attr("transform", (e, i, s) => "rotate(90) translate(" + s[i]?.getBBox()?.width / 4 + ")");
}
function bs() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function ng() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function On() {
  this.axes.cutMeasurementXAxes?.length && (this.axes.cutMeasurementXAxes.forEach((t) => t.remove()), this.axes.cutMeasurementXAxes.length = 0), this.axes.cutMeasurementYAxes?.length && (this.axes.cutMeasurementYAxes.forEach((t) => t.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function Va(t) {
  return t.autoId;
}
function ag(t, e) {
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
function Kn({ parent: t, near: e, far: i, offcuts: s = [] }) {
  if (!this.props.containerWidth)
    return !1;
  const n = [t, e, i, ...s].filter((a) => a);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(n, Va).join(
    (a) => a.append("rect").attr("class", "segment").call((r) => Tr.call(this, r)),
    (a) => a.call((r) => Tr.call(this, r)),
    (a) => a.remove()
  ), this.state.env === "development" && rg.call(this, n), !this.settings.app && this.state.env === "development" && og.call(this);
}
function Tr(t) {
  return t.classed("offcut", (e) => e.offcut).classed("near", (e) => e.type === "near").classed("far", (e) => e.type === "far").classed("parent", (e, i) => e.id !== "root" && i === 0).attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e));
}
function rg(t) {
  this.selections.segmentGroup.selectAll("text").data(t, Va).join(
    (e) => e.append("text").attr("class", "segment-text").call((i) => Or.call(this, i)),
    (e) => e.call((i) => Or.call(this, i)),
    (e) => e.remove()
  );
}
function Or(t) {
  return t.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function og() {
  this.selections.segmentRectangles.on("mousedown", function(t, e) {
    console.log("segment", `[${e?.parentId || "-"}]->[${e.id}] {P${e.phase}} ${e.l}x${e.w} ${e.cutDirection} ${e.hasHeadCut ? "HEAD" : "NORM"}`), console.log(e);
  });
}
function bl(t) {
  const e = t?.guillotineState?.parentSegmentID;
  if (!this.props.segments?.value?.length)
    return !1;
  let i;
  if (e) {
    for (const n of this.props.segments.value)
      if (i = ag(n, e), i) break;
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
function vl(t, e = []) {
  if (!t) return e;
  if (t.offcut && e.push(t), t.children && Array.isArray(t.children))
    for (const i of t.children)
      vl(i, e);
  return e;
}
function lg() {
  if (!this.props.containerWidth || !this.props.segments?.value?.length)
    return;
  const t = [];
  for (const i of this.props.segments.value)
    vl(i, t);
  if (!t.length) return;
  this.selections.segmentGroup.attr("display", "block");
  const e = (i) => i.attr("x", (s) => this.getRectangleCoordinate(s, "x")).attr("y", (s) => this.getRectangleCoordinate(s, "y")).attr("width", (s) => this.getWidthAttribute(s)).attr("height", (s) => this.getHeightAttribute(s));
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(t, Va).join(
    (i) => i.append("rect").attr("class", "segment offcut").call(e),
    (i) => i.call(e),
    (i) => i.remove()
  );
}
const { currentCutIndex: cg } = wa();
function ug() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (t, e) => e).join(
    (t) => t.append("line").attr("class", "cut").call((e) => Lr.call(this, e)),
    (t) => t.call((e) => Lr.call(this, e)),
    (t) => t.remove()
  ), xl.call(this));
}
function Lr(t) {
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
function wl(t, e, i) {
  return t.guillotineState.parentSegmentID === e && i && t.guillotineState.segmentCutOrder < i;
}
function Sl(t, e) {
  return t.guillotineState?.parentSegmentID !== null && !t?.isTrim ? t.guillotineState.parentSegmentID === e : !1;
}
function dg(t, e, i, s) {
  this.selections.cutLines.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] || !s && a.guillotineState.parentSegmentID === e ? "visible" : "hidden"), cg.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] ? "visible" : "hidden")), this.selections.cutLines.classed("highlight", (a) => t.stock.cutType === "guillotine" && a.isTrim ? a.position === t.type : a.guillotineState[i] === t.guillotineState[i]), this.selections.cutLines.classed("ptx-dummy", (a) => a?.ptxData?.isDummy), s || hg.call(this, t, e);
}
function fg(t, e, i, s, n) {
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
    this.state.device === "desktop" && !t.isTrim && pn.call(this, a, r, s);
  }
  this.selections.cutLines.classed("highlight", (r, o) => o === e);
}
function xl() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1), this.selections?.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), this.selections?.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return Math.max(1, Math.ceil(e));
  }), bs.call(this), On.call(this);
}
function hg(t, e) {
  const i = t?.guillotineState?.segmentCutOrder;
  if (i == null) return;
  this.selections.cutLines.classed("completed", (h) => wl(h, e, i)), this.selections.cutLines.classed("inside-segment", (h) => Sl(h, e));
  const s = bl.call(this, t);
  if (s === !1) return;
  const { parent: n, children: a } = s, { near: r } = kl(t, a);
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
  ], l = [t?.distances?.left, t?.distances?.right]), this.state.device === "desktop" && !t.isTrim && l && pn.call(this, o, l, u);
}
function pg(t = null, e = "") {
  if (t === null || this.selections.cutLines.empty()) return;
  const i = this.props.cuts.value[t];
  if (!i) return;
  if (bs.call(this), On.call(this), t !== null && t >= 0 && t < this.selections.cutLines.size()) {
    const x = this.selections.cutLines.nodes()[t].parentElement;
    if (!x) return;
    mt(x).raise();
  }
  const s = i.guillotineState?.parentSegmentID, n = this.getHalfBladeWidth(i.stock), a = i.dimension === "l" ? "y" : "x", r = i?.stock?.trim, o = e === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes(i?.stock?.cutType) && s !== null && typeof s < "u" ? dg.call(this, i, s, o, e) : fg.call(this, i, t, r, a, n), gg.call(this, i, t, s), e === "ptx") {
    this.removeSegments();
    return;
  }
  if (i.isTrim) {
    if (this.removeSegments(), this.state.device === "desktop") {
      const x = i.stock;
      if (i.dimension === "l") {
        const V = i.position === "bottom", H = V ? i.distances?.bottom : i.distances?.top;
        if (H) {
          const A = V ? [[0, H]] : [[x.w - H, x.w]];
          pn.call(this, A, [H], "y");
        }
      } else if (i.dimension === "w") {
        const V = i.position === "left", H = V ? i.distances?.left : i.distances?.right;
        if (H) {
          const A = V ? [[0, H]] : [[x.l - H, x.l]];
          pn.call(this, A, [H], "x");
        }
      }
    }
    return;
  }
  const l = bl.call(this, i);
  if (l === !1)
    return;
  const { parent: c, children: u } = l;
  if (!i?.guillotineState?.parentSegmentID)
    return Kn.call(this, { parent: c });
  if (i.stock?.cutType === "beam" && c.phase === 0) {
    const V = this.props.segments.value.find((N) => N.stock?.autoId === i.stock?.autoId)?.children || u, H = V.find((N) => N.offcut === !0 && N.y === 0 && N.isTrimOffcut === !0), A = V.find((N) => N.offcut === !0 && N !== H && N.y + N.w >= i.stock.w - (i.stock.trim?.l2 || 0)), E = V.filter((N) => !N.offcut), Y = E.find((N) => N.type === "near"), O = E.find((N) => N.type === "far"), M = [H, A].filter(Boolean);
    return Kn.call(this, { parent: c, near: Y, far: O, offcuts: M });
  }
  const { near: h, far: d, offcuts: g } = kl(i, u);
  Kn.call(this, { parent: c, near: h, far: d, offcuts: g });
}
function kl(t, e) {
  const i = t.dimension === "l" ? "y" : "x", s = t.dimension === "l" ? "w" : "l", n = t.stock?.cutType === "beam";
  let a, r;
  n ? (a = e.find((l) => l.type === "near" && !l.offcut), r = e.find((l) => l.type === "far" && !l.offcut)) : (a = e.find((l) => l.type === "near" && l[i] + l[s] === t[i + "1"] - t.stock.halfBladeWidth), r = e.find((l) => l.type === "far" && l[i] === t[i + "1"] + t.stock.halfBladeWidth));
  const o = e.filter((l) => l.offcut === !0 && l !== a && l !== r);
  return { near: a, far: r, offcuts: o };
}
function gg(t, e, i) {
  this.selections.cutLines.attr("stroke-width", (s, n) => {
    const a = this.scales.measurementScale(this.getBladeWidth(s.stock));
    let r = Math.max(1, Math.ceil(a));
    const o = t?.guillotineState?.segmentCutOrder;
    return (wl(s, i, o) || Sl(s, i)) && (r += 1), n === e && Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock))) < 5 && (r = 5), r;
  });
}
function mg(t) {
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
  const s = Wh(
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
        u.attr("class", "ray").attr("x1", (h) => this.scales.xPositionScale(h.x1)).attr("x2", (h) => this.scales.xPositionScale(h.x2)).attr("y1", (h) => this.scales.yPositionScale(h.y1)).attr("y2", (h) => this.scales.yPositionScale(h.y2));
      };
      if (this.state.env !== "development") return;
      const c = rl(this.props.shapes.value, this.props.stock.value).flatMap((u) => Object.values(u.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(c, r).join(
        (u) => u.append("line").call((h) => o.call(this, h)),
        (u) => u.call((h) => o.call(this, h)),
        (u) => u.remove()
      );
    }
    n = Hh(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const a = new yi();
  for (const r of s.toArray()) {
    const o = ol(t, r, this.props.stock.value);
    o && a.addPoints(o.toArray());
  }
  if (n) {
    const r = n.toArray();
    for (const o of r) {
      const l = qh(t, o, this.props.stock.value);
      l && a.addPoints(l.toArray());
    }
  }
  if (this.props.stock.value.cutType === "efficiency") {
    const r = this.props.stock.value;
    [
      new pt(r.trim.w1 ?? 0, r.trim.l1 ?? 0),
      new pt(r.trim.w1 ?? 0, r.trim.l1 ?? 0),
      new pt(
        r.l - t.l - (r.trim.w2 ?? 0),
        r.trim.l1 ?? 0
      ),
      new pt(
        r.trim.w1 ?? 0,
        r.w - t.w - (r.trim.l2 ?? 0)
      ),
      new pt(
        r.l - t.l - (r.trim.w2 ?? 0),
        r.w - t.w - (r.trim.l2 ?? 0)
      )
    ].forEach((o) => a.add(o)), e = a.toArray();
  } else {
    const r = this.props.stock.value;
    a.add(new pt(r.trim.w1 ?? 0, r.trim.l1 ?? 0)), e = a.toArray();
  }
  for (let r = e.length; r--; ) {
    const o = e[r];
    t.x = o.x, t.y = o.y;
    for (const l of this.props.shapes.value)
      if (this.collision(t, l, this.props.stock.value)) {
        e.splice(r, 1);
        break;
      }
  }
  return console.log("[Diagram] drawPositions: filtered positions count:", e?.length), yg.call(this, e, t), bg.call(this, e, t), e?.length ? (console.log("[Diagram] drawPositions: success, returning true"), !0) : (console.warn("[Diagram] drawPositions: no valid positions after filtering"), !1);
}
function yg(t, e) {
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
      n.stopPropagation(), mt(this).classed("hover", !0), mt(this).raise();
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), mt(this).classed("hover", !1);
    },
    {
      passive: !0
    }
  );
}
function bg(t, e) {
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
      n.stopPropagation(), mt(this).classed("hover", !0);
      const a = mt(this).attr("data-id"), r = mt(`.ghost[data-id="${a}"]`);
      r.raise(), r.classed("highlight", !0);
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), mt(this).classed("hover", !1);
      const a = mt(this).attr("data-id");
      mt(`.ghost[data-id="${a}"]`).classed(
        "highlight",
        !1
      );
    },
    {
      passive: !0
    }
  );
}
function vg() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text id").text((e) => Fr.call(this, e)).classed("hidden", (e, i, s) => this.isTextHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1),
    (t) => t.text((e) => Fr.call(this, e)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text name").text((e) => $r.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, i, s) => this.isNameHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const n = s[i];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    }),
    (t) => t.text((e) => $r.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, i, s) => this.isNameHidden(e, i, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const n = s[i];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text length").text((e) => Dr.call(this, e)).classed("hidden", (e, i, s) => this.isLengthHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const a = s[i].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    }),
    (t) => t.text((e) => Dr.call(this, e)).classed("hidden", (e, i, s) => this.isLengthHidden(e, i, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const a = s[i].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text width").text((e) => Er.call(this, e)).classed("hidden", (e, i, s) => this.isWidthHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (e, i, s) => {
      const n = s[i], a = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), r = this.getRectangleCoordinate(e, "y", "center"), o = this.state.device === "mobile" ? 90 : -90;
      return `translate(${a},${r}) rotate(${o})`;
    }),
    (t) => t.text((e) => Er.call(this, e)).classed("hidden", (e, i, s) => this.isWidthHidden(e, i, s)).attr("transform", (e, i, s) => {
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
function Fr(t) {
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
function $r(t) {
  return !t?.name || typeof t?.name != "string" ? null : t.name.toUpperCase().trim();
}
function Dr(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : K({ v: t.l, o: this.numberConfig }).toString();
}
function Er(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : K({ v: t.w, o: this.numberConfig }).toString();
}
const wg = (t) => t.id;
function Sg() {
  if (!this.props.containerWidth) return;
  bs.call(this);
  const t = this.props.shapes.value.reduce((e, i) => {
    const s = parseInt(i.parentId);
    return s > e ? s : e;
  }, 0);
  this.scales.shapeColorScale.domain([1, t]), this.state.env === "development" && kg.call(this), xg.call(this);
}
function xg() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, wg).join(
    (t) => {
      const e = t.append("g").attr("class", "shape-group");
      return Mr.call(this, e), _r.call(this, e), e.on("mousedown", Rr.bind(this)), e;
    },
    (t) => (Mr.call(this, t), _r.call(this, t), t.on("mousedown", Rr.bind(this)), t),
    (t) => t.remove()
  ), Og.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => vg.call(this)), this.selections.shapeWrappers.size() > 0;
}
function kg() {
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
  this.scales.scoreColorScale = ps([Zt(251, 224, 255), Zt(122, 0, 138)]).domain([i, s]);
}
function Mr(t) {
  const e = t.selectAll("rect.shape").data((i) => [i]).join("rect").attr("class", "shape").attr("x", (i) => this.getRectangleCoordinate(i, "x")).attr("y", (i) => this.getRectangleCoordinate(i, "y")).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i)).style("fill", (i) => vs.call(this, i));
  this.selections.shapeRectangles ? this.selections.shapeRectangles = eo(
    this.selections.shapeRectangles.nodes().concat(e.nodes())
  ) : this.selections.shapeRectangles = e;
}
function _r(t) {
  !this.settings.main || this.settings.app || this.state.hasTouch || t.on("mouseover", (e) => {
    if (this?.props.moveMode && this.state.moving) return;
    const i = mt(e.target);
    i.classed("hover", !0), i.classed("selected") || i.style("fill", this.config.colors.partSelected.toString());
  }, { passive: !0 }).on("mouseout", (e, i) => {
    const s = mt(e.target);
    s.classed("hover", !1), s.classed("selected") || s.style("fill", vs.call(this, i));
  }, { passive: !0 });
}
function Rr(t, e) {
  if (this.state.moving || !this.settings.main)
    return !1;
  this.state.env === "development" && !this.props.moveMode.value && Ig.call(this, t, e), (this.settings.app || this.settings.embed) && Ag.call(this, t, e), this.state.device === "desktop" && !this.props.moveMode.value && (On.call(this), Qp.call(this, e)), this.props.moveMode.value ? (console.log("[Diagram] handleShapeClick: calling onAddToPartsBin", {
    shapeId: e.id
  }), this.callbacks.onAddToPartsBin(e)) : (console.log("[Diagram] handleShapeClick: calling findShape", {
    shapeId: e.id
  }), this.findShape.call(this, e.id));
}
function Ig(t, e) {
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
        ], Cg.call(this, e);
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
    console.table(Pg(e, i));
  }
}
function Pg(t, e) {
  return e.reduce((i, s) => {
    const n = Eg(t, s);
    return i[s] = Array.isArray(n) ? n.join(", ") : n, i;
  }, {});
}
function Cg(t) {
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const e = t.guillotineData?.myStripParent;
  e && this.selections.shapeWrappers.filter((n) => n.id === e || n.group.addedAsGroup === e).select("rect").classed("highlight-a", !0);
  const i = this.props.shapes.value.find((s) => s.id === e)?.guillotineState?.myStripParent;
  i && this.selections.shapeWrappers.filter((n) => n.id === i || n.group.addedAsGroup === e).select("rect").classed("highlight-b", !0);
}
function Ag(t, e) {
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
      color: vs.call(this, e),
      notes: e?.notes
    };
    if (typeof this.callbacks.onPartClick == "function" && this.callbacks.onPartClick(i), this.settings.app) return !1;
  }
  if (this.settings.app) return !1;
}
function vs(t) {
  const e = Zt(204, 204, 204);
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        if (t.group.addedAsGroup)
          return Zt(43, 156, 16);
        if (t.firstShape.isFirstShape)
          return Zt(255, 171, 231);
        if (typeof t.guillotineState.myPhase == "number") {
          const n = [0, 115, 255], a = [176, 255, 231];
          return `rgb(${n.map((o, l) => Math.round(o + t.guillotineState.myPhase / 5 * (a[l] - o))).join(",")})`;
        }
        break;
      case "groups":
        if (t.group.addedAsGroup)
          return Zt(43, 156, 16);
        break;
      case "priorityShapes":
        if (t?.priority && t.priority?.[t.stock.parentId])
          return Zt(139, 171, 46);
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
          return console.warn("Detected corrupted score color object from scale:", n, "for shape:", t), Zt(n.r, n.g, n.b, n.opacity ?? 1);
      }
    }
  const i = parseInt(t.parentId);
  let s;
  return this.scales.shapeColorScale && typeof this.scales.shapeColorScale == "function" ? s = this.scales.shapeColorScale(i) : (console.error("shapeColorScale is not initialized or is not a function!", this.scales.shapeColorScale), s = null), s != null && typeof s.toString == "function" ? s : s != null && typeof s.r == "number" && typeof s.g == "number" && typeof s.b == "number" ? Zt(s.r, s.g, s.b, s.opacity ?? 1) : (console.warn("Shape color scale returned null, undefined, or unexpected non-color value for shape:", t, s), e);
}
const jr = 3;
function Tg(t) {
  const e = [];
  for (const i of t) {
    const s = i.extras?.banding;
    if (i.added && s?.sides)
      for (const [n, a] of Object.entries(s.sides)) {
        if (!a || ["a", "b", "c", "d"].includes(n)) continue;
        let r = n;
        if (i.rot) {
          const l = qo({ [n]: !0 }, "cc");
          r = Object.keys(l)[0];
        }
        const o = Lg.call(this, i, r);
        o && e.push(o);
      }
  }
  return e;
}
function Vr(t) {
  const e = jr / 2;
  return t.attr("class", "banding").attr("x1", (i) => this.scales.xPositionScale(i.l1) + Bs.call(this, i.type, "x", e)).attr("x2", (i) => this.scales.xPositionScale(i.l2) + Bs.call(this, i.type, "x", e)).attr("y1", (i) => this.scales.yPositionScale(i.w1) + Bs.call(this, i.type, "y", e)).attr("y2", (i) => this.scales.yPositionScale(i.w2) + Bs.call(this, i.type, "y", e)).attr("stroke-width", jr).attr("stroke", "white");
}
function Og(t) {
  if (!this.settings.main) return;
  const e = Tg.call(this, t);
  if (e.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(e, (i, s) => s).join(
    (i) => i.append("line").call((s) => Vr.call(this, s)),
    (i) => i.call((s) => Vr.call(this, s)),
    (i) => i.remove()
  );
}
function Bs(t, e, i) {
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
function Lg(t, e) {
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
function Fg(t) {
  this.selections.shapeWrappers.style("visibility", (e) => e?.placementOrder >= t ? "hidden" : "visible");
}
const Br = (t) => t.id;
function Nr(t) {
  return t.style("fill", this.config.colors.stock).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Gr(t) {
  return t.style("fill", (e) => `url(#grain-${e.grain || "l"})`).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function $g() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), eg.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], Br).join(
    (t) => t.append("rect").attr("class", "background stock").call((e) => Nr.call(this, e)),
    (t) => t.call((e) => Nr.call(this, e)),
    (t) => t.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], Br).join(
    (t) => t.append("rect").attr("class", "stock-pattern").call((e) => Gr.call(this, e)),
    (t) => t.call((e) => Gr.call(this, e)),
    (t) => t.remove()
  );
}
function Dg(t) {
  return typeof t == "string" && t.length === 6 && !isNaN(+("0x" + t.replace("#", "")));
}
function Eg(t, e) {
  return Ze(t, e);
}
class Mg {
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
    if (this.config = e, this.selections = {}, !e.elementID || (this.selections.el = mt(e.elementID), this.selections.el === null)) return;
    const i = this.selections.el.node();
    i !== null && (this.selections.htmlEl = i, this.scales = {
      xScale: jt(),
      yScale: jt(),
      yPositionScale: jt(),
      xPositionScale: jt(),
      yAxisScale: jt(),
      measurementScale: jt(),
      shapeColorScale: ps(),
      scoreColorScale: ps()
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
    }, s = (n, a) => Zt("#" + (Dg(n?.replace("#", "")) ? n.replace("#", "") : a.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(i).map(([n, a]) => [
        n,
        s(e.colors?.[n], a)
      ])
    ), this.scales.shapeColorScale = ps([
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
      i.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), i.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(90)").attr("id", "grain-l").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), i.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("id", "grain-w").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), i.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "grain-n").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), this.selections.svgCanvas = i;
    } else
      this.selections.svgCanvas = mt(e);
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
      const o = r[a], l = mt(o);
      l.text(n.name);
      let c = l.text();
      const u = l.node();
      if (!u) return;
      let h = u.getComputedTextLength();
      const d = this.getWidthAttribute(n) - 20;
      for (; h > d && c.length > 0; )
        c = c.slice(0, -1), l.text(c.length ? c + "..." : ""), h = l.node().getComputedTextLength();
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
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (s) => vs.call(this, s));
    const i = mt(e).select("rect");
    if (i) {
      i.classed("selected", !0), i.style("fill", this.config.colors.partSelected.toString());
      const s = mt(e).datum();
      this.callbacks.onShapeSelect(s, e);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    Sg.call(this);
  }
  drawStock() {
    $g.call(this);
  }
  drawCuts() {
    ug.call(this);
  }
  drawAllOffcuts() {
    lg.call(this);
  }
  drawAll() {
    this.drawStock(), this.drawShapes(), this.drawCuts(), this.state.debug === "offcuts" && this.drawAllOffcuts();
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
    return Le(e) && e !== null ? e.bladeWidth : 0;
  }
  getHalfBladeWidth(e = null) {
    const i = e.bladeWidth;
    return i !== void 0 && i > 0 ? i / 2 : 0;
  }
  // Reset Methods
  removeShapes() {
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), bs.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), ng.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), On.call(this);
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
    this?.selections?.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (e) => vs.call(this, e)), this?.selections?.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (e) => {
      const i = this.scales.measurementScale(this.getBladeWidth(e.stock));
      return i < 1 ? 1 : Math.ceil(i);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    bs.call(this);
  }
  updateShapeVisibility() {
    Fg.call(this);
  }
  drawPositions(e) {
    return mg.call(this, e);
  }
  showCut(e) {
    pg.call(this, e);
  }
  resetCuts() {
    xl.call(this);
  }
}
const _g = ["id"], Rg = /* @__PURE__ */ Ye({
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
    moveMode: { default: () => le(!1) }
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
      getSegments: h,
      getCuts: d
    } = wa(), g = t, x = i, V = (ye) => {
      x("part-click", ye);
    }, H = (ye) => {
      x("shape-colour-update", ye);
    }, A = (ye, At) => {
      ye?.autoId && x("shape-select", ye.autoId, At);
    }, E = (ye) => {
      ye && x("add-to-parts-bin", ye);
    }, Y = (ye, At) => {
      ye && x("move-shape", ye, At);
    }, O = le(0), M = le(0), N = le(null);
    let D, k = le(!1);
    const $ = Tt({
      debug: "",
      stretched: !1
    }), b = () => {
      D?.state && ($.stretched = D.state.stretched);
    };
    ti(() => q());
    const Z = ne(() => ({
      format: g.numberFormat,
      decimals: g.decimalPlaces
    })), X = ne(() => g.stockAutoId ? c(g.stockAutoId) : n.value), Q = ne(() => g.stockAutoId ? u(g.stockAutoId) : a.value), z = ne(() => g.main ? g.stockAutoId ? d(g.stockAutoId) : r.value : []), B = ne(() => g.main ? g.stockAutoId ? h(g.stockAutoId) : o.value : []);
    Kr(N, (ye) => {
      const At = ye[0], { width: St, height: de } = At.contentRect;
      St > 0 && (O.value = St), x("resize", { width: St, height: de });
    }), rc(
      O,
      (ye) => {
        D && (ye <= 0 || (D.setDevice(), D.resetShapeAxes(), D.drawAll(), b(), l.value !== null && (D.toggleSegments(!0), D.showCut(l.value))));
      },
      { throttle: 100 }
    );
    let G = !1;
    Ue(() => X.value, (ye) => {
      ye && (O.value <= 0 || (G = !0, D.setDevice(), D.resetCuts(), D.removeSegments(), D.drawStock(), D.drawShapes(), D.drawCuts(), b(), bt(() => G = !1)));
    }, { immediate: !1 }), Ue(() => Q.value, (ye) => {
      G || ye && (O.value <= 0 || (D.setDevice(), D.drawShapes()));
    }, { immediate: !1, deep: !0 }), g.main && (Ue(() => z.value, () => {
      G || O.value <= 0 || D.drawCuts();
    }, { immediate: !1, deep: !0 }), Ue(l, () => {
      l.value !== null && (O.value <= 0 || (D.toggleSegments(!0), D.showCut(l.value)));
    }, { immediate: !1 }), Ue(Z, (ye) => {
      D.updateNumberFormat(ye.format, ye.decimals, null);
    }, { immediate: !1 }));
    const q = () => {
      const ye = {
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
          containerHeight: M,
          containerWidth: O,
          stock: X,
          shapes: Q,
          cuts: z,
          segments: B,
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
          onShapeColourUpdate: H,
          onShapeSelect: A,
          onAddToPartsBin: E,
          onMoveShape: Y,
          onPartClick: V
        }
      };
      D = new Mg(ye), $.debug = D.state.debug, k.value = !0;
    }, ee = (ye = !1) => {
      D && D.toggleShapes(ye);
    }, U = (ye = !1) => {
      D && D.toggleCuts(ye);
    }, we = (ye = !1) => {
      D && D.toggleSegments(ye);
    }, me = () => {
      D && D.drawShapes();
    }, ke = () => {
      D && (D.drawStock(), b());
    }, Ae = () => {
      D && (D.toggleSegments(!1), D.resetCuts());
    }, te = (ye) => {
      D && (D.toggleSegments(!0), D.showCut(ye));
    }, Be = (ye) => D ? D.drawPositions(ye) : !1, dt = () => {
      D && D.removePositions();
    }, ft = (ye) => {
      D && D.findShape(ye);
    }, Je = () => {
      D && D.clearSelection();
    }, Ie = (ye) => D ? D.requiresStretch(ye) : !1, Xe = (ye) => {
      D?.options && (D.options.enableStretch = ye, D.setAspectRatio(), D.drawAll(), b());
    }, et = () => D?.options?.enableStretch ?? !0;
    return Ue(() => $.debug, (ye) => {
      D?.state && (D.state.debug = ye);
    }), e({
      loaded: k,
      toggleShapes: ee,
      toggleCuts: U,
      toggleSegments: we,
      drawShapes: me,
      drawStock: ke,
      drawPositions: Be,
      resetPositions: dt,
      findShape: ft,
      clearSelection: Je,
      resetCuts: Ae,
      showCut: te,
      requiresStretch: Ie,
      setEnableStretch: Xe,
      getEnableStretch: et,
      state: $,
      get stretched() {
        return $.stretched;
      },
      set moving(ye) {
        D?.state && (D.state.moving = ye);
      }
    }), (ye, At) => (w(), F("div", {
      id: t.elementId,
      ref_key: "diagramContainerRef",
      ref: N,
      class: Re([{ app: t.app }, "diagram-container"])
    }, null, 10, _g));
  }
}), jg = { class: "action-menu" }, Vg = ["textContent"], Bg = {
  key: 0,
  class: "menu-divider"
}, Ng = {
  key: 1,
  class: "group-label"
}, Gg = /* @__PURE__ */ Ye({
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
    const i = t, s = e, { isOpen: n, close: a, toggle: r } = Mc(i.menuId), o = le(), l = le(), c = ne(() => i.disabled), u = ne(() => i.label), h = ne(() => i.showLabel), d = ne(() => i.icon), { floatingStyles: g } = oc(o, l, {
      placement: i.placement,
      whileElementsMounted: tu,
      middleware: [
        Xc(i.offset),
        Qc(),
        eu({ padding: 8 })
      ]
    }), x = (b) => {
      if (!b) return ["fas", "question"];
      if (typeof b == "function" && (b = b(i)), Array.isArray(b))
        return b;
      if (typeof b == "string") {
        const Z = b.split(" ");
        if (Z.length >= 2) {
          const X = Z[0], Q = Z.slice(1).join("-").replace("fa-", "");
          return [X, Q];
        }
        return ["fas", b.replace("fa-", "")];
      }
      return ["fas", "question"];
    }, V = ne(() => x(d.value)), H = (b) => typeof b.active == "function" ? b.active(i) : typeof b.active == "boolean" ? b.active : !1, A = (b) => {
      if (!b.href) return !1;
      try {
        const Z = typeof b.href == "function" ? b.href(i) : b.href;
        return new URL(Z, window.location.origin).origin !== window.location.origin;
      } catch {
        return !1;
      }
    }, E = (b) => b.href ? "a" : "div", Y = (b) => {
      const Z = {};
      if (b.href) {
        const X = typeof b.href == "function" ? b.href(i) : b.href;
        if (Z.href = X, A(b)) {
          const Q = typeof b.target == "function" ? b.target(i) : b.target;
          Z.target = Q || "_blank", Z.rel = b.rel || "noopener noreferrer";
        } else if (b.target) {
          const Q = typeof b.target == "function" ? b.target(i) : b.target;
          Z.target = Q;
        }
        b.rel && (Z.rel = b.rel);
      }
      return b.attrs && Object.assign(Z, b.attrs), Z;
    }, O = ne(() => i.menuItems.map((b) => {
      const Z = { ...b };
      return typeof b.href == "function" && (Z.href = b.href(i)), typeof b.icon == "function" && (Z.icon = b.icon(i)), typeof b.disabled == "function" && (Z.disabled = b.disabled(i)), typeof b.label == "function" && (Z.label = b.label(i)), typeof b.variant == "function" && (Z.variant = b.variant(i)), typeof b.active == "function" && (Z.active = b.active(i)), typeof b.target == "function" && (Z.target = b.target(i)), typeof b.show == "function" && (Z.show = b.show(i)), Z;
    })), M = (b) => {
      b.stopPropagation(), b.preventDefault(), !c.value && r();
    }, N = (b, Z) => {
      if (Z.stopPropagation(), b.disabled && !b.href) {
        Z.preventDefault();
        return;
      }
      if (typeof b.action == "function" && b.action(b) === !1 && b.href) {
        Z.preventDefault();
        return;
      }
      s("action", {
        id: b.id,
        item: b
      }), b.href && i.closeOnLinkClick ? a() : b.href || a();
    }, D = (b) => {
      const Z = [];
      if (b.variant) {
        const Q = typeof b.variant == "function" ? b.variant(i) : b.variant;
        Z.push(`variant-${Q}`);
      }
      if ((typeof b.disabled == "function" ? b.disabled(i) : b.disabled) && !b.href && Z.push("disabled"), H(b) && Z.push("active"), b.href && Z.push("menu-link"), A(b) && Z.push("external-link"), b.class) {
        const Q = typeof b.class == "function" ? b.class(i) : b.class;
        Z.push(Q);
      }
      return Z.join(" ");
    }, k = (b) => {
      const Z = b.target;
      n.value && o.value && l.value && !o.value.contains(Z) && !l.value.contains(Z) && a();
    }, $ = (b) => {
      b.key === "Escape" && n.value && a();
    };
    return ti(() => {
      document.addEventListener("click", k), document.addEventListener("keydown", $);
    }), Ss(() => {
      document.removeEventListener("click", k), document.removeEventListener("keydown", $);
    }), (b, Z) => (w(), F("div", jg, [
      L("div", {
        ref_key: "trigger",
        ref: o,
        onClick: M,
        class: Re(["actions-btn", { active: I(n), disabled: c.value }])
      }, [
        d.value ? (w(), De(I(Js), {
          key: 0,
          icon: V.value,
          class: "icon"
        }, null, 8, ["icon"])) : ae("", !0),
        h.value ? (w(), F("span", {
          key: 1,
          class: "label",
          textContent: oe(u.value)
        }, null, 8, Vg)) : ae("", !0)
      ], 2),
      (w(), De(va, { to: "body" }, [
        I(n) && !c.value ? (w(), F("div", {
          key: 0,
          ref_key: "floating",
          ref: l,
          style: ht(I(g)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: Z[0] || (Z[0] = Zr(() => {
          }, ["stop"]))
        }, [
          (w(!0), F(Ve, null, Qe(O.value, (X, Q) => (w(), F(Ve, { key: Q }, [
            X.type === "divider" ? (w(), F("div", Bg)) : X.type === "group" ? (w(), F("div", Ng, oe(X.label), 1)) : X.show !== !1 ? (w(), De(lc(E(X)), Fi({
              key: 2,
              ref_for: !0
            }, Y(X), {
              onClick: (z) => N(X, z),
              id: X.id,
              class: ["menu-item", D(X)],
              disabled: X.disabled && !X.href
            }), {
              default: $i(() => [
                X.icon || H(X) ? (w(), De(I(Js), {
                  key: 0,
                  icon: H(X) ? ["fass", "check"] : x(X.icon)
                }, null, 8, ["icon"])) : ae("", !0),
                L("span", null, oe(X.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : ae("", !0)
          ], 64))), 128))
        ], 4)) : ae("", !0),
        I(n) && !c.value ? (w(), F("div", {
          key: 1,
          class: "backdrop",
          onClick: Z[1] || (Z[1] = //@ts-ignore
          (...X) => I(a) && I(a)(...X))
        })) : ae("", !0)
      ]))
    ]));
  }
}), qr = (t, e, i) => {
  if (e === "unitDependent")
    if (i === "fraction") {
      if (/\/0$/.test(t))
        return {
          value: t,
          valid: !1,
          message: "division_by_zero"
        };
      const s = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(t), n = Aa(t);
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
function qg({
  props: t,
  emit: e,
  isMounted: i
}) {
  const s = le({
    isTyping: !1,
    isMouseDown: !1,
    isComposing: !1,
    lastValidValue: String(t.value ?? "")
  }), n = (o, l = !1) => {
    if (o == null || o === "") {
      const u = t.required && !t.disableRequiredValidation;
      return t.type === "string" ? u ? { value: null, valid: !1, message: "field_required" } : { value: o === null ? null : "", valid: !0 } : od(o, "decimal", u);
    }
    const c = String(o);
    switch (t.type) {
      case "string":
        return { value: c, valid: !0 };
      case "unitDependent":
        if (l)
          return qr(c, t.type, t.numberFormat);
        try {
          const u = K({
            v: o,
            nf: t.numberFormat,
            dp: t.decimalPlaces,
            fr: t.fractionRoundTo
          });
          if (typeof u == "number") {
            let h = u, d = !0, g;
            return typeof t.min == "number" && h < t.min && (h = t.min, d = !1, g = "below_min"), typeof t.max == "number" && h > t.max && (h = t.max, d = !1, g = "above_max"), { value: h, valid: d, message: g };
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
          return qr(c, t.type);
        try {
          const h = K({
            v: o,
            nf: "decimal"
          });
          if (h === null)
            return t.required && !t.disableRequiredValidation ? { value: null, valid: !1, message: "errors.validation.field.required" } : { value: null, valid: !0 };
          let d = h;
          if (t.type === "integer" && (d = Math.round(d)), t.allowZero === !1 && d === 0)
            return {
              value: d,
              valid: !1,
              message: "zero_not_allowed"
            };
          let g = !0, x;
          return typeof t.min == "number" && d < t.min && (d = t.min, g = !1, x = "below_min"), typeof t.max == "number" && d > t.max && (d = t.max, g = !1, x = "above_max"), { value: d, valid: g, message: x };
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
              const l = o.target, c = l.value, u = l.selectionStart || 0, h = c.substring(0, u);
              if (o.key === "/" && c.includes("/")) {
                o.preventDefault();
                return;
              }
              if (o.key === " " && /\s$/.test(h)) {
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
          if (!Aa(c)) {
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
            const h = n(c, !0);
            e("validation", h, t.id), e("input", c);
          }
        }
        e("paste", o);
      }
    },
    processValue: n
  };
}
function zg({
  props: t,
  emit: e,
  isMounted: i
}) {
  const s = le({
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
function Wg({
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
const Hg = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Ug = /* @__PURE__ */ Ye({
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
    const i = t, s = e, n = le(!0), a = le(null), r = ne(() => i.value === i.trueValue), {
      handleCheckboxChange: o,
      handleFocus: l,
      handleBlur: c
    } = Wg({
      props: i,
      emit: s,
      isMounted: n
    });
    return (u, h) => (w(), F("input", {
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
      onChange: h[0] || (h[0] = //@ts-ignore
      (...d) => I(o) && I(o)(...d)),
      onFocus: h[1] || (h[1] = //@ts-ignore
      (...d) => I(l) && I(l)(...d)),
      onBlur: h[2] || (h[2] = //@ts-ignore
      (...d) => I(c) && I(c)(...d))
    }, null, 40, Hg));
  }
}), Yg = ["for"], Ns = /* @__PURE__ */ Ye({
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
    }, oe(t.label), 9, Yg));
  }
}), Kg = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Zg = ["disabled", "selected"], Jg = {
  key: 0,
  value: " "
}, Xg = ["hidden", "value", "disabled"], Qg = /* @__PURE__ */ Ye({
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
    const i = t, s = e, n = le(!0), a = le(null), r = ne(() => i.options.map((l) => ({
      value: l.value,
      label: l.label?.toUpperCase() ?? l.value?.toString()?.toUpperCase(),
      hidden: l.hidden ?? !1,
      disabled: l.disabled ?? !1
    }))), {
      handleSelectChange: o
    } = zg({
      props: i,
      emit: s,
      isMounted: n
    });
    return (l, c) => (w(), F("select", Fi(l.$attrs, {
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
      (...u) => I(o) && I(o)(...u))
    }), [
      L("option", {
        value: "",
        disabled: i.selectFirstOptionDisabled,
        selected: !i.value
      }, oe(i.text?.select?.toUpperCase() ?? "SELECT"), 9, Zg),
      i.multiEdit ? (w(), F("option", Jg, oe(i.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : ae("", !0),
      (w(!0), F(Ve, null, Qe(r.value, (u) => (w(), F("option", {
        key: u.value,
        hidden: u.hidden,
        value: u.value,
        disabled: u.disabled
      }, oe(u.label), 9, Xg))), 128))
    ], 16, Kg));
  }
}), em = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "aria-label", "aria-invalid", "aria-describedby"], Il = /* @__PURE__ */ Ye({
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
    const i = t, s = e, n = le(!0), a = le(null), {
      handleInput: r,
      handleMouseDown: o,
      handleMouseUp: l,
      handleFocus: c,
      handleBlur: u,
      handleKeydown: h,
      handleCompositionStart: d,
      handleCompositionEnd: g,
      handlePaste: x
    } = qg({
      props: i,
      emit: s,
      isMounted: n
    }), V = (H) => {
      const A = H.getBoundingClientRect(), E = window.getComputedStyle(H);
      return A.width > 0 && A.height > 0 && E.display !== "none" && E.visibility !== "hidden";
    };
    return ti(() => {
      (Le(i.default) && i.value === void 0 || i.value === null) && s("update:value", i.default), i.focus && a.value && V(a.value) && bt(() => a.value.focus());
    }), Ss(() => {
      n.value = !1;
    }), (H, A) => (w(), F("input", Fi(H.$attrs, {
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
      (...E) => I(r) && I(r)(...E)),
      onFocus: A[1] || (A[1] = //@ts-ignore
      (...E) => I(c) && I(c)(...E)),
      onBlur: A[2] || (A[2] = //@ts-ignore
      (...E) => I(u) && I(u)(...E)),
      onKeydown: A[3] || (A[3] = //@ts-ignore
      (...E) => I(h) && I(h)(...E)),
      onCompositionstart: A[4] || (A[4] = //@ts-ignore
      (...E) => I(d) && I(d)(...E)),
      onCompositionend: A[5] || (A[5] = //@ts-ignore
      (...E) => I(g) && I(g)(...E)),
      onPaste: A[6] || (A[6] = //@ts-ignore
      (...E) => I(x) && I(x)(...E)),
      onMousedown: A[7] || (A[7] = //@ts-ignore
      (...E) => I(o) && I(o)(...E)),
      onMouseup: A[8] || (A[8] = //@ts-ignore
      (...E) => I(l) && I(l)(...E))
    }), null, 16, em));
  }
}), tm = ["data-field-id"], im = {
  key: 0,
  class: "input-label-group"
}, sm = ["disabled", "selected"], nm = {
  key: 0,
  value: " "
}, am = ["hidden", "value", "disabled"], Ii = /* @__PURE__ */ Ye({
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
    const i = e, s = t, n = le(null), a = le(null), r = le(!0), o = le(s.numberFormat), l = ne(() => s.custom ? "custom-" + s.id : s.id), c = ne(() => `${l.value}-error`), u = ne(() => s.label || s.placeholder), h = ne(() => b(s.type, s.numberFormat)), d = ne(() => Z(s.type, s.numberFormat)), g = ne(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), x = ne(() => {
      let z = s.value;
      if (s.type !== "unitDependent" || !z) return z;
      try {
        return K({ v: z, nf: s.numberFormat });
      } catch {
        return s.numberFormat === "decimal" ? 0 : "0";
      }
    }), V = ne(() => s.options.map((z) => ({
      value: z.value,
      label: z.label || z.value?.toString(),
      hidden: z.hidden || !1,
      disabled: z.disabled || !1
    }))), H = ne(() => V.value.map((z) => {
      const B = z.label ? W(z.label) : z.value?.toString();
      return {
        ...z,
        // Translate the label key first, then uppercase the translated result
        label: B?.toUpperCase() || z.value?.toString().toUpperCase()
      };
    })), A = ne(() => ({
      input: !0,
      issue: s.issue || !r.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), E = ne(() => ({
      id: l.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": u.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? c.value : void 0
    })), Y = ne(() => ({
      ...E.value,
      type: s.type,
      inputMode: d.value,
      inputType: h.value,
      placeholder: s.placeholder,
      allowZero: s.allowZero,
      min: s.min,
      max: s.max,
      focus: s.focus,
      numberFormat: s.numberFormat,
      default: s.default,
      disableRequiredValidation: s.disableRequiredValidation
    })), O = ne(() => ({
      ...E.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), M = ne(() => ({
      ...E.value,
      options: H.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      numberFormat: s.numberFormat,
      text: s.text,
      output: s.output
    })), N = ne(() => (s.text?.select || "SELECT").toUpperCase()), D = ne(() => (s.text?.delete || "DELETE").toUpperCase()), k = (z) => {
      a.value = z;
    }, $ = (z) => s.label && s.enableLabel && s.labelPosition === z, b = (z, B) => {
      switch (z) {
        case "integer":
        case "float":
          return "number";
        case "unitDependent":
          return B === "fraction" ? "text" : "number";
        case "string":
        default:
          return "text";
      }
    }, Z = (z, B) => {
      if (z === "unitDependent")
        return B === "fraction" ? "text" : "decimal";
      switch (z) {
        case "integer":
          return "numeric";
        case "float":
          return "decimal";
        case "string":
          return "text";
        default:
          return "text";
      }
    }, X = (z) => {
      i("update:value", z);
    }, Q = (z, B) => {
      z.valid === void 0 || z.valid === !0 ? (r.value = !0, i("validation", n.value, z)) : z.valid === !1 && z.message && (r.value = !1, console.warn(`Field validation error for field ${B} - ${z.message}`), i("validation", n.value, z));
    };
    return Ue(() => s.numberFormat, (z, B) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && z !== B && s.value !== null && s.value !== void 0 && s.value !== "")
          try {
            const G = K({ v: s.value, nf: z });
            i("update:value", G);
          } catch {
            i("update:value", z === "decimal" ? 0 : "0");
          }
        o.value = z;
      }
    }), (z, B) => (w(), F("div", {
      ref_key: "fieldRef",
      ref: n,
      class: Re(["input-wrapper", A.value]),
      "data-field-id": l.value
    }, [
      t.type === "checkbox" ? (w(), F("div", im, [
        $("first") ? (w(), De(Ns, {
          key: 0,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : ae("", !0),
        t.type === "checkbox" ? (w(), De(Ug, Fi({
          key: 1,
          ref: k,
          type: "checkbox"
        }, O.value, {
          value: t.value,
          "onUpdate:value": B[0] || (B[0] = (G) => i("update:value", G))
        }), null, 16, ["value"])) : ae("", !0),
        $("last") ? (w(), De(Ns, {
          key: 2,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : ae("", !0)
      ])) : (w(), F(Ve, { key: 1 }, [
        $("first") ? (w(), De(Ns, {
          key: 0,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : ae("", !0),
        g.value ? (w(), De(Il, Fi({
          key: 1,
          ref: k
        }, Y.value, {
          "input-type": h.value,
          "input-mode": d.value,
          value: x.value,
          "disable-required-validation": t.disableRequiredValidation,
          onValidation: Q,
          "onUpdate:value": X
        }), null, 16, ["input-type", "input-mode", "value", "disable-required-validation"])) : t.type === "select" ? (w(), De(Qg, Fi({
          key: 2,
          ref: k
        }, M.value, {
          "onUpdate:value": B[1] || (B[1] = (G) => i("update:value", G))
        }), {
          default: $i(() => [
            L("option", {
              value: "",
              disabled: t.selectFirstOptionDisabled,
              selected: !t.value
            }, oe(N.value), 9, sm),
            t.multiEdit ? (w(), F("option", nm, oe(D.value), 1)) : ae("", !0),
            (w(!0), F(Ve, null, Qe(H.value, (G) => (w(), F("option", {
              key: G.value,
              hidden: G.hidden,
              value: G.value,
              disabled: G.disabled
            }, oe(G.label), 9, am))), 128))
          ]),
          _: 1
        }, 16)) : ae("", !0),
        $("last") ? (w(), De(Ns, {
          key: 3,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : ae("", !0)
      ], 64)),
      Xs(z.$slots, "default")
    ], 10, tm));
  }
}), rm = {
  key: 0,
  class: "action-bar"
}, om = { class: "add-custom" }, lm = ["disabled"], cm = ["disabled", "title", "onClick"], um = {
  key: 1,
  class: "price"
}, dm = /* @__PURE__ */ Ye({
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
    stockGrain: { default: "n" },
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
      getInputConfigForLocation: h,
      getSelectOptions: d,
      getPriceDisplay: g,
      shouldShowDeleteButton: x,
      getLocationGroup: V,
      isLocationVisible: H,
      handleInputChange: A,
      handleDelete: E
    } = _c({
      shape: Kt(i, "shape"),
      extraType: i.extraType,
      allOptions: i.allOptions,
      labels: i.labels,
      userFriendlyFieldMap: i.userFriendlyFieldMap,
      allowCustomNames: i.allowCustomNames,
      customNames: Kt(i, "customNames"),
      enablePricing: i.enablePricing,
      pricing: i.pricing,
      orientationModel: i.orientationModel,
      stockGrain: i.stockGrain,
      getAvailablePricingOptions: i.getAvailablePricingOptions,
      getPrice: i.getPrice,
      formatPrice: i.formatPrice,
      findExtrasPrice: i.findExtrasPrice,
      locations: Kt(i, "locations"),
      locationGroups: Kt(i, "locationGroups")
    }), {
      newCustomName: Y,
      canAddCustomName: O,
      isActionMenuDisabled: M,
      customNameActions: N,
      handleAddCustomName: D,
      handleCustomNameAction: k
    } = Rc({
      extraType: i.extraType,
      customNames: Kt(i, "customNames"),
      usedNames: Kt(i, "usedNames"),
      allowCustomNames: i.allowCustomNames,
      getSelectOptions: d,
      onCustomNameAdded: (ee) => s("custom-name-added", i.extraType, ee),
      onCustomNameDeleted: (ee) => s("custom-name-deleted", i.extraType, ee)
    }), {
      renderLocations: $,
      gridStyle: b,
      getInputId: Z,
      getDeleteConfig: X
    } = jc({
      extraType: i.extraType,
      allOptions: i.allOptions,
      labels: i.labels,
      shapeIndex: i.shapeIndex || 0,
      enablePricing: i.enablePricing,
      mode: n,
      shouldShowAll: a,
      getInputType: u,
      getInputConfig: (ee, U) => h(ee, U),
      getAllInputConfig: (ee) => h("all", ee),
      getInputConfigForLocation: h,
      canDelete: l,
      getLocationLabel: c,
      shouldShowDeleteButton: x,
      locations: Kt(i, "locations"),
      locationGroups: Kt(i, "locationGroups"),
      shape: Kt(i, "shape"),
      orientationModel: i.orientationModel
    }), Q = le(!1), z = ne(() => (ee) => {
      const U = V(ee);
      return U === "all" || U === "faces" || U === "sides";
    }), B = ne(() => (ee) => la(i.extraType).includes(ee) ? wr(ee) === "face" : !1), G = ne(() => (ee) => la(i.extraType).includes(ee) ? wr(ee) === "side" : !1), q = ne(() => (ee) => i.shape.issues?.some((U) => U.category?.includes("extras") && U.field?.some((we) => we[0] === "extras" && we[1] === i.extraType && we[2] === ee)) ?? !1);
    return ti(() => {
      const U = i.shape.extras?.[i.extraType];
      if (!U || typeof U != "object") {
        Q.value = !0, console.error(`Missing or invalid ${i.extraType} in shape`);
        return;
      }
      if (r.value && !("faces" in U)) {
        Q.value = !0, console.error(`Missing faces property in ${i.extraType}`);
        return;
      }
      if (o.value && !("sides" in U)) {
        Q.value = !0, console.error(`Missing sides property in ${i.extraType}`);
        return;
      }
    }), (ee, U) => {
      const we = Ci("FontAwesomeIcon");
      return Q.value ? ae("", !0) : (w(), F("div", {
        key: 0,
        class: Re(["extras group", [t.extraType]]),
        style: ht({ "grid-column-end": "span " + t.partColumns })
      }, [
        t.allowCustomNames ? (w(), F("div", rm, [
          L("div", om, [
            He(Il, {
              id: `${t.extraType}-custom-input-${t.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: I(Y),
              placeholder: `Add ${t.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": U[0] || (U[0] = (me) => Y.value = me || ""),
              onKeydown: cc(I(D), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            L("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !I(O),
              onClick: U[1] || (U[1] = //@ts-ignore
              (...me) => I(D) && I(D)(...me))
            }, " Add ", 8, lm)
          ]),
          He(Gg, {
            "menu-items": I(N),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: I(M),
            onAction: I(k)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : ae("", !0),
        L("div", {
          class: "inputs grid-layout",
          style: ht({ "grid-template-columns": I(b) })
        }, [
          (w(!0), F(Ve, null, Qe(I($), (me) => (w(), F(Ve, { key: me }, [
            I(H)(me) ? (w(), F(Ve, { key: 0 }, [
              L("div", {
                class: Re(["label", {
                  "group-label": z.value(me),
                  "face-label": B.value(me),
                  "side-label": G.value(me),
                  "has-validation-issue": q.value(me)
                }])
              }, oe(I(c)(me)), 3),
              (w(!0), F(Ve, null, Qe(t.allOptions, (ke, Ae) => (w(), F("div", {
                key: `${me}-${Ae}`,
                class: "input-cell"
              }, [
                He(Ii, Fi({
                  id: I(Z)(me, Ae),
                  "data-field": `${t.extraType}-${me}`,
                  "data-index": t.shapeIndex,
                  "data-option-index": Ae
                }, { ref_for: !0 }, I(h)(me, Ae), {
                  "onUpdate:value": (te) => I(A)(me, Ae, te)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"])
              ]))), 128)),
              I(X)(me).show ? (w(), F("button", {
                key: 0,
                type: "button",
                class: "c-btn c-btn--delete",
                disabled: !I(X)(me).enabled,
                title: I(X)(me).ariaLabel,
                onClick: (ke) => I(E)(me)
              }, [
                He(we, { icon: ["fass", "trash"] })
              ], 8, cm)) : ae("", !0),
              t.enablePricing ? (w(), F("div", um, oe(I(g)(me)), 1)) : ae("", !0)
            ], 64)) : ae("", !0)
          ], 64))), 128))
        ], 4)
      ], 6));
    };
  }
}), Ks = /* @__PURE__ */ Mt(dm, [["__scopeId", "data-v-5c40d310"]]), fm = {
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
}, hm = { id: "spinner" }, pm = ["width", "height"], gm = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function mm(t, e, i, s, n, a) {
  return w(), F("div", hm, [
    i.complete ? ae("", !0) : (w(), F("svg", {
      key: 0,
      class: "loading",
      style: ht({ width: i.size + "px", height: i.size + "px" }),
      width: i.size,
      height: i.size,
      viewBox: "0 0 300 300"
    }, [...e[0] || (e[0] = [
      Jr('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ])], 12, pm)),
    i.complete ? (w(), F("svg", {
      key: 1,
      class: "complete",
      style: ht({ width: i.size + "px", height: i.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[1] || (e[1] = [
      L("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ])], 4)) : ae("", !0),
    i.showNumber ? (w(), F("div", gm, oe(i.number), 1)) : ae("", !0)
  ]);
}
const zr = /* @__PURE__ */ Mt(fm, [["render", mm]]);
j({
  // Context - using z.any() for complex external types
  job: ve().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: p().nullable().default(null).describe("Socket.io connection ID"),
  user: ve().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: ve().describe("Configuration object"),
  // Type: Config
  api: R().nullable().default(null).describe("API mode flag"),
  app: R().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: $e("Saw").describe("Saw configuration"),
  stockList: We("Stock").default([]).describe("List of stock materials"),
  shapeList: Gs(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: We("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: We("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: We("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: Gs(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: Gs(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: bn,
  // Results storage
  cutList: We("Cut").default([]).describe("List of cuts to make"),
  segmentList: We("Segment").default([]).describe("List of segments"),
  offcuts: We("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: We("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: R().default(!1).describe("Use inventory system"),
  successMetric: p().default(ff.successMetric).describe("Metric for optimization success"),
  enableEvo: R().default(!0).describe("Enable evolutionary algorithm"),
  weighting: Se(p(), ve()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: ve().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: ve().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: j({
    placement: f().default(0),
    group: f().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: R().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: R().default(!1).describe("Run guillotine second pass"),
  runningEvo: R().default(!1).describe("Currently running evolution"),
  evolutionVisData: ie(Se(p(), Lc())).default([]).describe("Evolution visualization data"),
  final: R().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: R().default(!1).describe("Has minimum spacing requirement")
});
const ym = Te(["decimal", "fraction"]), bm = j({
  job: ve().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Allow additional properties like __entityType and autoId
  inputSaw: di,
  inputShapes: ie(fi),
  inputStock: ie(Gt),
  inputUserGroups: ie(In).optional(),
  // Number format for conversion
  numberFormat: ym.optional(),
  // Algorithm configuration
  enableEvo: R().default(!0),
  weighting: ve().optional(),
  successMetric: p().optional(),
  useInventory: R().default(!1),
  // Context
  socketId: p().optional(),
  user: ve().optional(),
  // IUser type
  // Application flags
  widget: R().optional(),
  api: R().optional(),
  app: R().optional(),
  domain: p().optional(),
  // Extras options (centralized configuration)
  extrasOptions: j({
    banding: j({
      options: j({
        sides: Se(p(), ie(p())).optional()
      }).optional()
    }).optional(),
    finish: j({
      options: j({
        faces: Se(p(), ie(p())).optional()
      }).optional()
    }).optional(),
    planing: j({
      options: j({
        sides: Se(p(), ie(p())).optional(),
        faces: Se(p(), ie(p())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // API specific
  config: ve().optional(),
  v: f().optional(),
  // API version
  webhook: p().optional(),
  //source
  sourceVersion: p().nullish(),
  source: p().optional()
});
j({
  job: ve().optional(),
  // Type: Job from BullMQ
  saw: ve(),
  // Runtime Saw instance
  shapeList: ie(ve()),
  // Runtime Shape instances
  stockList: ie(ve()),
  // Runtime Stock instances
  userGroups: ie(ve()).optional(),
  // Runtime Group instances
  enableEvo: R(),
  weighting: ve().optional(),
  successMetric: p().optional(),
  useInventory: R(),
  socketId: p().optional(),
  user: ve().optional(),
  widget: R().optional(),
  api: R().optional(),
  app: R().optional(),
  domain: p().optional(),
  config: ve().optional(),
  v: f().optional(),
  webhook: p().optional()
});
const { addNotice: Ni } = mn();
let Zn = null;
function vm() {
  return Zn || (Zn = pl()), Zn;
}
function Wr(t) {
  return t.filter((e) => e?.l || e?.w);
}
async function wm(t) {
  const e = t.t, i = [];
  try {
    const { inputs: s, validateInputShapes: n, validateInputStock: a } = vm(), r = t.inputShapes ?? s.inputShapes.value, o = t.inputStock ?? s.inputStock.value, l = t.inputUserGroups ?? s.inputUserGroups?.value ?? [], c = Wr(r), u = Wr(o);
    if (!t.isAdmin && !t.shared && t.maxShapes !== 1 / 0) {
      const H = c.reduce((E, Y) => E + (Y.q || 1), 0), A = u.reduce((E, Y) => E + (Y.q || 1), 0);
      if (H > t.maxShapes || A > t.maxStock)
        return Ni({
          type: "error",
          message: e("errors.validation.above_max_parts")
        }), t.onLimit?.(), { valid: !1, issues: i };
    }
    if (!c.length)
      return Ni({
        type: "error",
        message: e("errors.validation.no_parts_list")
      }), { valid: !1, issues: i };
    if (!t.useInventory && !u.length)
      return Ni({
        type: "error",
        message: e("errors.validation.no_stock")
      }), { valid: !1, issues: i };
    let h;
    if (t.useInventory && t.selectedSaw)
      h = t.selectedSaw;
    else if (t.inputSaw instanceof oi) {
      const H = t.inputSaw.validate();
      i.push(...H), h = t.inputSaw.toData();
    } else {
      h = t.inputSaw;
      const H = new Jo(h);
      i.push(...H.issues);
    }
    const d = n({
      saw: h,
      partTrim: K({ v: t.partTrim }),
      useInventory: t.useInventory,
      inputShapesOverride: c
    });
    if (i.push(...d), t.useInventory) {
      if (t.materialStore)
        for (const H of c)
          H.material || i.push(new ue({
            item: H,
            category: ["part"],
            message: "errors.validation.business.no_material"
          }));
    } else {
      const H = a(h);
      i.push(...H);
    }
    if (l.length > 0) {
      l.forEach((A) => A.populateParentID(c));
      const H = ip(l, c);
      i.push(...H);
    }
    await Sm(c, t, i);
    const g = Lo(i);
    if (g.length > 0) {
      const H = {
        saw: g.filter((A) => A.category?.includes("saw")),
        stock: g.filter((A) => A.category?.includes("stock")),
        part: g.filter((A) => A.category?.includes("part") && !A.category?.includes("extras")),
        extras: g.filter((A) => A.category?.includes("extras")),
        group: g.filter((A) => A.category?.includes("group"))
      };
      for (const [A, E] of Object.entries(H))
        if (E.length > 0) {
          Ni({
            type: "error",
            message: e("errors.validation.inputs_issue", { 0: A }),
            additional: E.map((Y) => e(Y.message))
          });
          break;
        }
      return { valid: !1, issues: i };
    }
    const x = {
      inputSaw: h,
      inputShapes: c.map((H) => H.toData()),
      inputStock: u.map((H) => H.toData()),
      inputGroups: l.map((H) => H.toData()),
      enableEvo: !0,
      useInventory: t.useInventory || !1
    }, V = bm.safeParse(x);
    return V.success ? {
      valid: !0,
      issues: i,
      sawData: h
    } : (console.error("[Validation] Zod validation failed:", V.error.issues), Ni({
      type: "error",
      message: e("errors.validation.invalid_data_structure"),
      additional: V.error.issues.map((H) => `${H.path.join(".")}: ${H.message}`)
    }), { valid: !1, issues: i });
  } catch (s) {
    return console.error("[Validation] error:", s), Ni({
      type: "error",
      message: e("errors.general.unexpected"),
      additional: [s?.message ?? ""]
    }), { valid: !1, issues: i };
  }
}
async function Sm(t, e, i) {
  if (!e.findExtrasPrice)
    return;
  const s = [
    { type: "banding", pricing: e.bandingPricing },
    { type: "finish", pricing: e.finishPricing },
    { type: "planing", pricing: e.planingPricing }
  ];
  for (const n of t)
    for (const { type: a, pricing: r } of s) {
      if (e.extrasValidationRules && ot.hasExtras(n, a)) {
        const c = vh(n, a, e.extrasValidationRules);
        c.valid || c.violations.forEach((u) => {
          const h = wh(a, u, c.message);
          i.push(new ue({
            item: n,
            category: ["part", "extras"],
            message: h,
            field: [["extras", a]],
            shouldTranslate: !1
          }));
        });
      }
      if (!r || !Object.keys(r).length)
        continue;
      const o = bh(n, a, r, e.findExtrasPrice);
      o.valid || o.incompleteLocations.forEach((l) => {
        i.push(new ue({
          item: n,
          category: ["part", "extras"],
          message: "errors.extras.selection_incomplete",
          params: {
            extraType: `extras.${a}`,
            // Translation key for extra type (banding, finish, planing)
            location: lt(l, { returnKey: !0 })
            // Translation key for location
          },
          field: [["extras", a, l]]
        }));
      });
    }
}
const Zs = j({
  // Unique identifier for this group (used internally)
  id: p().min(1),
  // Display label for the group (shown in UI)
  label: p().min(1),
  // Array of location strings in this group
  // Examples: ['side.l1', 'side.l2'], ['face.a', 'face.b']
  locations: ie(p().min(1)).min(1),
  // Optional price override for this group
  // When set, this price will be used instead of calculating from individual locations
  price: f().optional(),
  // Hide individual location inputs when this group is enabled
  // When true, only shows the group control, hiding the individual face/side inputs
  hideIndividualLocations: R().optional().default(!1)
}), xm = j({
  banding: ie(Zs).optional(),
  finish: ie(Zs).optional(),
  planing: ie(Zs).optional()
}).optional();
class wi extends Error {
  constructor(e, i) {
    super(e), this.code = i, this.name = "FormulaError";
  }
}
class ba {
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
      if (i === 0) throw new wi("Division by zero", "DIVISION_BY_ZERO");
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
        const V = n[c];
        if (V)
          return u === "q" ? V.q : V[u];
        throw new Error(`Node not found: ${l}`);
      }
      if (r.has(l))
        throw new Error(`Circular dependency detected at ${l}`);
      const h = e.nodes.get(l);
      if (typeof h.formula == "number")
        return a.set(l, h.formula), h.formula;
      r.add(l);
      const d = e.edges.get(l) || /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Map();
      for (const V of d)
        if (V.startsWith("input.")) {
          const H = V.split(".")[1];
          g.set(V, s[H]);
        } else
          g.set(V, o(V));
      const x = this.evaluateFormulaWithDeps(h.formula, g, s);
      return a.set(l, x), r.delete(l), x;
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
    if (!this.spec?.inputs) throw new wi("No input specifications defined", "NO_INPUTS");
    for (const [i, s] of Object.entries(this.spec.inputs)) {
      const n = e[i];
      if (n === void 0)
        throw new wi(`Missing required input: ${i}`, "MISSING_INPUT");
      if (n < s.min || n > s.max)
        throw new wi(`Input ${i} value ${n} out of range [min: ${s.min}, max: ${s.max}]`, "INPUT_OUT_OF_RANGE");
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
      throw new wi("No input specifications defined", "NO_INPUTS");
    const i = Object.keys(this.spec.inputs);
    if (e.length !== i.length)
      throw new wi(`Expected ${i.length} fields, got ${e.length}`, "INVALID_FIELD_COUNT");
    let s = 0;
    for (const n of e) {
      const a = i[s], r = this.spec.inputs[a];
      if (n.value === null || n.value === void 0)
        throw new wi(`Missing value for field ${s}`, "MISSING_FIELD_VALUE");
      if (n.value < r.min || n.value > r.max)
        throw new wi(`Field ${s} value ${n.value} out of range [min: ${r.min}, max: ${r.max}]`, "FIELD_OUT_OF_RANGE");
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
const Jn = j({
  min: f().min(0).optional(),
  max: f().min(0).optional()
}).optional(), Xn = j({
  // Shape dimension constraints
  longSide: Jn,
  shortSide: Jn,
  t: Jn,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: p().optional(),
  // Custom validation message (optional)
  message: p().optional()
}), km = j({
  banding: Xn.optional(),
  finish: Xn.optional(),
  planing: Xn.optional()
}).optional(), Im = Te(["decimal", "fraction"]), Pm = Te(Mo), Hr = xe([
  Ce(0),
  Ce(1),
  Ce(2)
]).catch(0), Cm = j({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: p().optional(),
  partB: p().optional(),
  partSelected: p().optional(),
  stock: p().optional(),
  text: p().optional(),
  // Checkout-specific colors
  button: p(),
  buttonText: p()
}), Am = j({
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
}), Tm = j({
  // Localization
  locale: p().default("en-US"),
  currency: p().default("USD"),
  apiVersion: f().min(2).default(3),
  // Number formatting
  numberFormat: Im.default("decimal"),
  decimalPlaces: f().min(0).max(10).default(2),
  fractionRoundTo: f().default(0),
  // Stock configuration
  stockSelection: Pm.optional(),
  stockGrain: Ji.optional(),
  // Part configuration
  minSpacing: Ro.optional(),
  maxParts: f().min(0).default(0),
  orientationModel: Hr.default(0),
  resultOrientationModel: Hr.default(0),
  minDimension: f().min(0).default(0),
  partTrim: f().min(0).default(0),
  // UI configuration
  debug: R().default(!1),
  emitAPIResult: R().default(!1),
  enable: Am.optional(),
  colors: Cm.optional(),
  // Custom fields
  customFields: ie(ve()).optional(),
  fieldOrder: ie(p()).optional(),
  // Extras location filtering
  bandingLocations: ie(Wn).optional(),
  finishLocations: ie(Wn).optional(),
  planingLocations: ie(Wn).optional(),
  // Extras location groups
  extrasLocationGroups: xm,
  // Extras validation rules
  extrasValidationRules: km
}), us = j({
  min: f().min(0).optional(),
  max: f().min(0).optional()
}).optional(), Om = j({
  // Basic dimension constraints
  l: us,
  w: us,
  t: us,
  longSide: us,
  shortSide: us,
  // Cross-dimensional rules
  // These require that at least one dimension meets a threshold while the other meets a different threshold
  crossDimensionalRule: j({
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
function Lm(t, e) {
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
  return e.formula && (Fm(e.formula, {
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
function Fm(t, e) {
  try {
    const i = new ba({}), s = i.parse(t);
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
function $m(t) {
  if (t.message)
    return t.message;
  if (t.constraint === "crossDimensional")
    return t.message || "Part dimensions do not meet requirements";
  const e = t.dimension === "t" ? "thickness" : t.dimension === "longSide" ? "long side" : t.dimension === "shortSide" ? "short side" : t.dimension, i = t.constraint === "min" ? "minimum" : "maximum";
  return `Part requires ${e} ${i} of ${t.limit} (current: ${t.value})`;
}
Te([
  "full_stock",
  "part_area",
  "cut_length",
  "full_stock_plus_cut_length",
  "full_stock_plus_num_parts",
  "roll_length"
]);
const fs = Se(
  p(),
  f().min(0)
).default({}), Dm = j({
  name: p().trim().min(1),
  thicknesses: ie(
    xe([
      p().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      f()
    ])
  ).min(1),
  widths: ie(
    xe([
      p().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      f()
    ])
  ).optional()
}), Qn = j({
  labels: ie(p()),
  pricing: Se(p(), f().min(0)).refine((t) => Object.keys(t).length > 0, {
    message: "Pricing must contain at least one value"
  }),
  options: ve().optional(),
  keys: ie(p()).optional(),
  // if not all the default keys should be set
  locations: ie(p()).optional(),
  // available locations for this extras type
  groups: ie(Zs).optional(),
  // custom location groups
  rules: ve().optional()
  // validation rules for this extras type
});
j({
  success: R(),
  price: f().optional(),
  error: p().optional(),
  cacheHit: R().optional()
});
j({
  valid: R(),
  errors: ie(p()),
  warnings: ie(p())
});
j({
  pricing: fs,
  labels: ie(p()),
  options: ie(ie(p())),
  // Simplified to string arrays only
  keys: ie(p()),
  maxLevels: f().min(1)
});
j({
  enableCaching: R().default(!0),
  enableLogging: R().default(!1),
  maxCacheSize: f().min(1).default(1e3)
});
const Pl = j({
  l: f(),
  w: f(),
  t: f().nullable(),
  q: f(),
  stockId: p()
}), Cl = j({
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
}), Em = j({
  l: f(),
  w: f(),
  t: f().nullable(),
  material: p().nullable(),
  orientationLock: xe([
    Ce(""),
    Ce("l"),
    Ce("w")
  ]).nullable(),
  q: f(),
  name: p().nullable(),
  // V2 format: flat banding/finish (x1/x2/y1/y2 for banding, a/b for finish)
  banding: Se(p(), xe([p(), R()])).nullable().optional(),
  finish: Se(p(), xe([p(), R()])).nullable().optional(),
  planing: Se(p(), xe([p(), R()])).nullable().optional(),
  customData: Se(p(), ve()).nullable().optional()
}), Mm = j({
  id: p(),
  name: p().nullable(),
  l: f(),
  w: f(),
  t: f().nullable(),
  material: p().nullable(),
  q: f(),
  trim: j({
    x1: f(),
    x2: f(),
    y1: f(),
    y2: f()
  }).nullable().optional(),
  cost: f().nullable().optional(),
  analysis: Cl.nullable().optional(),
  customData: Se(p(), ve()).nullable().optional()
}), _m = j({
  id: p().optional(),
  name: p().optional(),
  l: f(),
  w: f(),
  t: f().nullable().optional(),
  material: p().optional(),
  q: f().optional(),
  orientationLock: xe([
    Ce(""),
    Ce("l"),
    Ce("w")
  ]).nullable().optional(),
  // V2 format: flat banding/finish
  banding: Se(p(), xe([p(), R()])).nullable().optional(),
  finish: Se(p(), xe([p(), R()])).nullable().optional(),
  planing: Se(p(), xe([p(), R()])).nullable().optional(),
  customData: Se(p(), ve()).nullable().optional()
});
j({
  jobId: f(),
  metadata: Tn.optional(),
  parts: ie(Em),
  stock: ie(Mm),
  offcuts: ie(Pl),
  inputs: j({
    parts: ie(_m)
  }),
  apiResultV3: ml.optional()
});
const Rm = j({
  l: f(),
  w: f(),
  t: f().nullable(),
  material: p().nullable(),
  orientationLock: xe([
    Ce(""),
    Ce("l"),
    Ce("w")
  ]).nullable(),
  q: f(),
  name: p().nullable(),
  // V3 format: nested extras structure
  extras: j({
    banding: j({
      sides: Se(p(), xe([p(), R()]))
    }).nullable().optional(),
    finish: j({
      faces: Se(p(), xe([p(), R()]))
    }).nullable().optional(),
    planing: j({
      sides: Se(p(), xe([p(), R()])).optional(),
      faces: Se(p(), xe([p(), R()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: Se(p(), ve()).nullable().optional()
}), jm = j({
  id: p(),
  name: p().nullable(),
  l: f(),
  w: f(),
  t: f().nullable(),
  material: p().nullable(),
  q: f(),
  trim: j({
    l1: f(),
    l2: f(),
    w1: f(),
    w2: f()
  }).nullable().optional(),
  cost: f().nullable().optional(),
  analysis: Cl.nullable().optional(),
  // New stock fields
  color: xe([
    j({
      hex: p(),
      name: p()
    }),
    p()
  ]).nullable().optional(),
  weight: f().positive().nullable().optional(),
  imageUrl: p().nullable().optional(),
  tags: ie(p()).nullable().optional(),
  available: R().nullable().optional(),
  customData: Se(p(), ve()).nullable().optional()
}), Vm = j({
  id: p().optional(),
  name: p().optional(),
  l: f(),
  w: f(),
  t: f().nullable().optional(),
  material: p().optional(),
  q: f().optional(),
  orientationLock: xe([
    Ce(""),
    Ce("l"),
    Ce("w")
  ]).nullable().optional(),
  // V3 format: nested extras structure
  extras: j({
    banding: j({
      sides: Se(p(), xe([p(), R()]))
    }).nullable().optional(),
    finish: j({
      faces: Se(p(), xe([p(), R()]))
    }).nullable().optional(),
    planing: j({
      sides: Se(p(), xe([p(), R()])).optional(),
      faces: Se(p(), xe([p(), R()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: Se(p(), ve()).nullable().optional()
});
j({
  jobId: f(),
  metadata: Tn.optional(),
  parts: ie(Rm),
  stock: ie(jm),
  offcuts: ie(Pl),
  inputs: j({
    parts: ie(Vm)
  }),
  apiResultV3: ml.optional()
});
function Al(t) {
  return {
    l: t.l,
    w: t.w,
    t: t.t ?? null,
    q: t.q,
    stockId: t?.stock?.parentId || ""
  };
}
function Tl(t) {
  const e = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  for (const s of t) {
    if (!s?.analysis || !s?.parentId) continue;
    const n = s.parentId, a = s.analysis;
    if (!e.has(n))
      e.set(n, {
        areaEfficiency: a.areaEfficiency ?? 0,
        finishArea: a.finishArea ?? 0,
        bandingLength: a.bandingLength ?? 0,
        partArea: a.partArea ?? 0,
        totalParts: a.totalParts ?? 0,
        stackedNumberOfCuts: a.stackedNumberOfCuts ?? 0,
        numberOfCuts: a.numberOfCuts ?? 0,
        stackedCutLength: a.stackedCutLength ?? 0,
        cutLength: a.cutLength ?? 0,
        rollLength: a.rollLength ?? 0
      }), i.set(n, 1);
    else {
      const r = e.get(n), o = i.get(n) + 1;
      i.set(n, o), e.set(n, {
        // Sum for areaEfficiency (we'll average it at the end)
        areaEfficiency: r.areaEfficiency + (a.areaEfficiency ?? 0),
        // Sum all other fields
        finishArea: r.finishArea + (a.finishArea ?? 0),
        bandingLength: r.bandingLength + (a.bandingLength ?? 0),
        partArea: r.partArea + (a.partArea ?? 0),
        totalParts: r.totalParts + (a.totalParts ?? 0),
        stackedNumberOfCuts: r.stackedNumberOfCuts + (a.stackedNumberOfCuts ?? 0),
        numberOfCuts: r.numberOfCuts + (a.numberOfCuts ?? 0),
        stackedCutLength: r.stackedCutLength + (a.stackedCutLength ?? 0),
        cutLength: r.cutLength + (a.cutLength ?? 0),
        rollLength: r.rollLength + (a.rollLength ?? 0)
      });
    }
  }
  for (const [s, n] of e) {
    const a = i.get(s) ?? 1;
    n.areaEfficiency = n.areaEfficiency / a;
  }
  return e;
}
const Bm = j({
  stockType: Te([...nn]).optional(),
  bladeWidth: xe([
    _o,
    p()
  ]).optional(),
  cutType: Sn,
  cutPreference: xn,
  stackHeight: wn,
  guillotineOptions: kn
}).optional();
j({
  l: f().nullable(),
  w: f().nullable(),
  t: xe([f(), p()]).nullable().optional(),
  material: p().nullable().optional(),
  orientationLock: xe([
    Ce("l"),
    Ce("w"),
    Ce("")
  ]).nullable().optional(),
  q: f().min(1).nullable().optional(),
  name: p().nullable().optional(),
  // Import existing schemas for extras
  banding: $o.nullable().optional(),
  finish: Eo.nullable().optional(),
  planing: Bo.nullable().optional(),
  // Custom data as record
  customData: Se(p(), ve()).nullable().optional(),
  stockId: p().nullable().optional()
});
const Nm = j({
  // Required fields
  stock: ie(Gt).default([]),
  options: Tm,
  // Optional fields
  type: p().optional(),
  // variable | simple
  materials: ie(Dm).optional(),
  banding: Qn.nullable().optional(),
  finish: Qn.nullable().optional(),
  planing: Qn.nullable().optional(),
  machining: ve().optional(),
  bandingPricing: fs.optional(),
  finishPricing: fs.optional(),
  planingPricing: fs.optional(),
  machiningPricing: fs.optional(),
  // colors field removed in version 6.1.0 - was deprecated and unused
  variations: ve().optional(),
  // NOTE: extrasValidationRules and extrasLocationGroups moved to optionsSchema
  // Part validation rules
  partRules: Om.optional(),
  // Saw configuration
  saw: Bm,
  // Stock filter (optional)
  // When enabled, the stock array is used as available filter options
  // and the actual stock list starts empty (built by user selections)
  stockFilter: j({
    enabled: R(),
    config: ve().optional()
    // Use any to avoid circular dependency
    // Note: availableStock removed - uses stock array instead
  }).optional()
});
function Gm(t) {
  const e = Nm.safeParse(t);
  return {
    success: e.success,
    data: e.success ? e.data : void 0,
    error: e.success ? void 0 : e.error
  };
}
function qm(t) {
  const e = Gm(t);
  if (!e.success) {
    const i = e.error?.issues.map((s) => `${s.path.join(".")}: ${s.message}`).join(", ") || "Unknown validation error";
    throw console.error("Invalid checkout data:", JSON.stringify(t, null, 2)), console.error("Validation errors:", i), new Error(`Invalid checkout data: ${i}`);
  }
  return e.data;
}
function Yt(t) {
  return t == null ? !1 : typeof t == "object" && t.value !== void 0 ? t.value : t;
}
function zm(t) {
  if (t.extras?.banding?.sides) {
    const e = t.extras.banding.sides, i = {};
    if (Le(e.a) || Le(e.b) || Le(e.c) || Le(e.d))
      i.x1 = Le(e.a) ? Yt(e.a) : !1, i.y1 = Le(e.b) ? Yt(e.b) : !1, i.x2 = Le(e.c) ? Yt(e.c) : !1, i.y2 = Le(e.d) ? Yt(e.d) : !1;
    else {
      const n = ma(e);
      i.x1 = Le(n.x1) ? Yt(n.x1) : !1, i.x2 = Le(n.x2) ? Yt(n.x2) : !1, i.y1 = Le(n.y1) ? Yt(n.y1) : !1, i.y2 = Le(n.y2) ? Yt(n.y2) : !1;
    }
    t.banding = i;
  }
  if (t.extras?.finish?.faces) {
    const e = t.extras.finish.faces, i = {};
    i.a = Le(e.a) ? Yt(e.a) : !1, i.b = Le(e.b) ? Yt(e.b) : !1, t.finish = i;
  }
  if (t.extras?.planing) {
    const e = t.extras.planing, i = {}, s = ma(e.sides || {});
    e.sides && (Le(s.x1) && (i.x1 = s.x1), Le(s.x2) && (i.x2 = s.x2), Le(s.y1) && (i.y1 = s.y1), Le(s.y2) && (i.y2 = s.y2)), e.faces && (Le(e.faces.a) && (i.a = e.faces.a), Le(e.faces.b) && (i.b = e.faces.b)), Object.keys(i).length > 0 && (t.planing = i);
  }
  (t.extras?.banding || t.extras?.finish || t.extras?.planing) && delete t.extras;
}
function Wm(t, e = 0) {
  if (e === 0)
    return t;
  if (e === 1 || e === 2) {
    const i = Math.max(t.l, t.w), s = Math.min(t.l, t.w);
    t.w > t.l && (t.l = i, t.w = s);
  }
  return t;
}
function Ol(t, e = 0) {
  return e === 0 || t.forEach((i) => Wm(i, e)), t;
}
function Hm(t, e, i, s, n, a, r, o) {
  const l = Tl(s), c = e.map((d) => {
    const g = {
      l: d.l,
      w: d.w,
      t: d?.t ?? null,
      material: d.material ?? null,
      orientationLock: d.orientationLock ?? null,
      q: r?.addedPartTally?.[d.parentId] || d.q,
      name: d.name ?? null,
      customData: d.customData ?? null,
      // Always include extras properties even if not set (using API format)
      banding: Pp(),
      finish: hn(),
      planing: Ap()
    }, x = { ...d };
    return zm(x), x.banding && (g.banding = x.banding), x.finish && (g.finish = x.finish), x.planing && (g.planing = x.planing), g;
  }), u = i.map((d) => {
    const g = {
      id: d.id,
      name: d?.name ?? null,
      l: d.l,
      w: d.w,
      t: d?.t ?? null,
      material: d.material ?? null,
      q: r?.usedStockTally?.[d.parentId] || d.q,
      cost: d?.cost ?? null,
      analysis: l.get(d.parentId) ?? null,
      customData: d?.customData ?? null
    };
    return d?.trim && (g.trim = ma(d.trim)), g;
  }), h = {
    parts: a.map((d) => {
      const g = {
        id: d.id,
        name: d.name,
        l: d.l,
        w: d.w,
        t: d.t ?? null,
        material: d.material,
        q: d.q,
        orientationLock: d.orientationLock ?? null,
        customData: d.customData ?? null
      };
      return d.extras && (g.extras = {}, d.extras.banding?.sides && (g.extras.banding = { sides: d.extras.banding.sides }), d.extras.finish?.faces && (g.extras.finish = { faces: d.extras.finish.faces }), d.extras.planing && (g.extras.planing = {
        ...d.extras.planing.sides && { sides: d.extras.planing.sides },
        ...d.extras.planing.faces && { faces: d.extras.planing.faces }
      })), g;
    })
  };
  return o && Ol(c, o), {
    jobId: t,
    metadata: r,
    parts: c,
    stock: u,
    offcuts: n?.map(Al) || [],
    inputs: h
  };
}
function Um(t, e, i, s, n, a, r, o) {
  const l = Tl(s), c = e.map((d) => {
    const g = {
      l: d.l,
      w: d.w,
      t: d?.t ?? null,
      material: d.material ?? null,
      orientationLock: d.orientationLock ?? null,
      q: r?.addedPartTally?.[d.parentId] || d.q,
      name: d.name ?? null,
      customData: d.customData ?? null,
      // Always include extras structure even if not set (using internal format)
      extras: {
        banding: { sides: ga() },
        finish: { faces: hn() },
        planing: Cp()
      }
    };
    return d.extras && (d.extras.banding?.sides && (g.extras.banding = { sides: d.extras.banding.sides }), d.extras.finish?.faces && (g.extras.finish = { faces: d.extras.finish.faces }), d.extras.planing && (g.extras.planing = {
      sides: d.extras.planing.sides || ga(),
      faces: d.extras.planing.faces || hn()
    })), g;
  }), u = i.map((d) => ({
    id: d.id,
    name: d?.name ?? null,
    l: d.l,
    w: d.w,
    t: d?.t ?? null,
    material: d.material ?? null,
    q: r?.usedStockTally?.[d.parentId] || d.q,
    trim: d?.trim ?? null,
    // Keep internal format (l1/l2/w1/w2)
    cost: d?.cost ?? null,
    analysis: l.get(d.parentId) ?? null,
    // New stock fields
    color: d?.color ?? null,
    weight: d?.weight ?? null,
    imageUrl: d?.imageUrl ?? null,
    tags: d?.tags ?? null,
    available: d?.available ?? null,
    customData: d?.customData ?? null
  })), h = {
    parts: a.map((d) => {
      const g = {
        id: d.id,
        name: d.name,
        l: d.l,
        w: d.w,
        t: d.t ?? null,
        material: d.material,
        q: d.q,
        orientationLock: d.orientationLock ?? null,
        customData: d.customData ?? null
      };
      return d.extras && (g.extras = {}, d.extras.banding?.sides && (g.extras.banding = { sides: d.extras.banding.sides }), d.extras.finish?.faces && (g.extras.finish = { faces: d.extras.finish.faces }), d.extras.planing && (g.extras.planing = {
        ...d.extras.planing.sides && { sides: d.extras.planing.sides },
        ...d.extras.planing.faces && { faces: d.extras.planing.faces }
      })), g;
    })
  };
  return o && Ol(c, o), {
    jobId: t,
    metadata: r,
    parts: c,
    stock: u,
    offcuts: n?.map(Al) || [],
    inputs: h
  };
}
const Ym = ["id", "data-index"], Km = /* @__PURE__ */ Ye({
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
    const i = t, s = e, n = le({
      l1: !1,
      l2: !1,
      w1: !1,
      w2: !1
    }), a = () => {
      if (!i.inputShape) return;
      let l = {
        l1: ki(i.inputShape, "banding", "side.l1"),
        l2: ki(i.inputShape, "banding", "side.l2"),
        w1: ki(i.inputShape, "banding", "side.w1"),
        w2: ki(i.inputShape, "banding", "side.w2")
      };
      const c = Mf(
        i.orientationModel,
        i.stockGrain,
        i.inputShape
      );
      c && (l = qo(l, c)), n.value = l;
    };
    Ue([
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
    return ti(() => {
      document.getElementById(i.id)?.addEventListener("keydown", r);
    }), Ss(() => {
      document.getElementById(i.id)?.removeEventListener("keydown", r);
    }), (l, c) => (w(), F("div", {
      id: t.id,
      class: Re(["banding-button", { open: t.open, disabled: t.disabled }]),
      "data-field": "banding",
      "data-index": t.index,
      tabindex: "0",
      onClick: o
    }, [
      L("div", {
        class: Re(["outer", {
          l1: n.value.l1,
          l2: n.value.l2,
          w1: n.value.w1,
          w2: n.value.w2
        }])
      }, [...c[0] || (c[0] = [
        L("div", { class: "inner" }, null, -1)
      ])], 2)
    ], 10, Ym));
  }
}), Zm = ["id", "data-index", "disabled"], Jm = /* @__PURE__ */ Ye({
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
    const i = t, s = e, n = ne(() => i.inputShape ? ki(i.inputShape, "finish", "face.a") : !1), a = ne(() => i.inputShape ? ki(i.inputShape, "finish", "face.b") : !1), r = () => {
      i.disabled || s("clicked");
    };
    return (o, l) => {
      const c = Ci("FontAwesomeIcon");
      return w(), F("button", {
        id: t.id,
        class: Re(["c-btn finish-button", {
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
        He(c, { icon: ["fass", "spray-can"] })
      ], 10, Zm);
    };
  }
});
function Xm(t) {
  return t.machining ? "toData" in t.machining ? t.machining.toData() : t.machining : { holes: [], hingeHoles: [], corners: {} };
}
function Ll(t) {
  const e = Xm(t);
  return e ? !!(e.holes && e.holes.length > 0 || e.hingeHoles && e.hingeHoles.length > 0 || e.corners && Object.values(e.corners).some((i) => i && i.type && i.size > 0)) : !1;
}
const Qm = Ye({
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
      return Ll(this.inputShape);
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
}), ey = ["id", "disabled"];
function ty(t, e, i, s, n, a) {
  const r = Ci("FontAwesomeIcon");
  return w(), F("button", {
    id: t.id,
    class: Re(["c-btn machining-button", { selected: t.hasMachining }]),
    type: "button",
    disabled: t.disabled,
    onClick: e[0] || (e[0] = (...o) => t.openMachining && t.openMachining(...o))
  }, [
    He(r, { icon: ["fass", "hammer"] })
  ], 10, ey);
}
const iy = /* @__PURE__ */ Mt(Qm, [["render", ty]]), sy = ["id"], ny = {
  key: 0,
  class: "del",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, ay = {
  key: 1,
  class: "no-change",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, ry = {
  key: 2,
  class: "arrow",
  viewBox: "0 0 67 63",
  xmlns: "http://www.w3.org/2000/svg"
}, oy = {
  key: 3,
  class: "arrow",
  viewBox: "0 0 72 39",
  xmlns: "http://www.w3.org/2000/svg"
}, ly = {
  key: 4,
  class: "arrow",
  viewBox: "0 0 39 72",
  xmlns: "http://www.w3.org/2000/svg"
}, cy = {
  key: 5,
  class: "grain",
  viewBox: "0 0 106 64",
  xmlns: "http://www.w3.org/2000/svg"
}, uy = {
  key: 6,
  class: "grain",
  viewBox: "0 0 64 106",
  xmlns: "http://www.w3.org/2000/svg"
}, Ur = /* @__PURE__ */ Ye({
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
    const i = t, s = e, n = le(0), a = le(!1), r = (k, $, b, Z) => {
      if (!Fe(b) || $ === 0)
        return k;
      const X = o();
      return $ === 1 || $ === 2 && Z !== "n" && k ? X : k;
    }, o = (k) => {
      const $ = { ...i, ...k };
      if (!$.rectangle || !Fe($.rectangle)) return "";
      let b = "";
      switch ($.orientationModel) {
        case 0:
          b = Y.value;
          break;
        case 1:
          $.stockGrain === "y" || $.stockGrain === "n" ? b = $.rectangle.l >= $.rectangle.w ? "l" : "w" : $.rectangle.l >= $.rectangle.w ? b = $.stockGrain : b = b = $.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          b = $.rectangle.l >= $.rectangle.w ? "l" : "w";
          break;
      }
      return b;
    }, l = () => {
      if (i.disabled || A.value.length <= 1)
        return;
      const k = c(Y.value);
      "multiEdit" in i.rectangle && i.rectangle.multiEdit && Y.value === "" && n.value !== k && n.value === 0 && (n.value = k);
      let b = null;
      [1, 2].includes(i.orientationModel) ? b = h() : b = u(), n.value = b;
    }, c = (k) => {
      const $ = A.value.findIndex((b) => b === k);
      return $ === -1 ? 0 : $;
    }, u = () => {
      let k = n.value + 1;
      return k > A.value.length - 1 && (k = 0), k;
    }, h = () => {
      let k = 0;
      if (Y.value === "") {
        const $ = o();
        k = A.value.findIndex((b) => b === $);
      } else
        k = A.value.findIndex(($) => $ === "");
      return k;
    }, d = (k) => {
      s("updateOrientation", k);
    }, g = () => {
      const k = Y.value;
      if ("multiEdit" in i.rectangle && i.rectangle.multiEdit)
        return k === " " ? " " : k === "" ? "" : k === "l" ? "l" : k === "w" ? "w" : "default";
      switch (i.orientationModel) {
        case 0:
          return k === " " ? " " : k ? i.stockGrain === "n" ? k || i.shapeOrientation || "default" : i.stockGrain === "w" ? k === "w" ? "w" : "l" : k === "l" ? "l" : "w" : "default";
        case 1:
          return k === " " ? " " : k ? i.stockGrain === "n" ? k || i.shapeOrientation || "default" : i.stockGrain === "w" ? k === "w" ? "w" : "l" : k === "l" ? "l" : "w" : "default";
        case 2:
          return k === " " ? " " : k ? i.stockGrain === "n" ? k || i.shapeOrientation || "default" : i.stockGrain === "w" ? k === "w" ? "w" : "l" : k === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, x = () => {
      if (!i.rectangle)
        return;
      if ("multiEdit" in i.rectangle && i.rectangle.multiEdit && !Y.value) {
        H("");
        return;
      }
      const k = r(
        Y.value,
        i.orientationModel,
        i.rectangle,
        i.stockGrain
      );
      if (k !== Y.value) {
        H(k);
        return;
      }
      if (!a.value || n.value === -1) {
        const $ = c(Y.value);
        n.value = $;
      }
      if (Fe(i.rectangle)) {
        if (i.orientationModel === 1) {
          const $ = M.value ? o() : Y.value;
          H($);
          return;
        }
        if (i.orientationModel === 2) {
          let $;
          M.value ? $ = i.stockGrain !== "n" ? o() : "" : $ = Y.value, H($);
        }
      }
    }, V = le(!1), H = (k) => {
      const $ = c(k);
      V.value = !0, n.value = $, V.value = !1, d(k);
    }, A = ne(() => {
      if (!i.rectangle) return ["l", "w"];
      if (Jt(i.rectangle)) return ["l", "w"];
      let k = ["", "l", "w"];
      return i.rectangle.multiEdit ? [" ", "", "l", "w"] : (E.value && (k = k.filter(($) => $ !== "w")), k);
    }), E = ne(() => Fe(i.rectangle) || Yi(i.rectangle) ? i.rectangle.isSquare : i.rectangleType && i.rectangle?.l && i.rectangle?.w ? i.rectangle?.l === i.rectangle?.w : !1), Y = ne(() => {
      let k = "";
      if (Jt(i.rectangle))
        k = i.rectangle.direction === "horizontal" ? "l" : "w";
      else if (Fe(i.rectangle)) {
        const $ = i.rectangle.orientationLock;
        k = $ === null ? "" : $;
      } else if (Yi(i.rectangle)) {
        const b = i.rectangle.grain ?? "";
        b === "l" || b === "w" || b === "" || b === " " ? k = b : k = "";
      }
      return k;
    }), O = ne(() => Jt(i.rectangle) || !i.rectangle ? {
      l: null,
      w: null
    } : {
      l: i.rectangle.l,
      w: i.rectangle.w
    }), M = ne(() => !O.value.l && !O.value.w), N = ne(() => Jt(i.rectangle) ? !1 : Hs(
      i.orientationModel,
      i.stockGrain,
      i.rectangle,
      i.rectangleType,
      i.shapeOrientation
    )), D = ne(() => {
      if (!i.rectangle)
        return i.shapeOrientation ? "noGrain" : "freeRotation";
      if (Yi(i.rectangle) || i.rectangleType === "stock") {
        const X = i.rectangle.grain;
        return "multiEdit" in i.rectangle && i.rectangle.multiEdit ? {
          " ": "noGrain",
          // Clear to no grain
          "": "noChange",
          // No change
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[X] || "noGrain" : {
          "": "noGrain",
          // No grain
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[X] || "noGrain";
      }
      const k = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, $ = i.stockGrain || "default";
      let b = "default";
      Fe(i.rectangle) || i.rectangleType === "shape" ? b = g() : Jt(i.rectangle) && (b = i.rectangle.direction || "default");
      const Z = k[$]?.[b];
      return Z || k[$]?.default || "freeRotation";
    });
    return Ue(n, (k, $) => {
      a.value && $ !== void 0 && (V.value || d(A.value[k]));
    }, { immediate: !1 }), Ue(O, (k, $) => {
      if (!i.rectangle || i.orientationModel === 0 || !Fe(i.rectangle) || Fe(i.rectangle) && (i.orientationModel === 2 && $.l && $.w && !Y.value || i.stockGrain === "n" && !Y.value))
        return;
      const b = o();
      Y.value !== b && d(b);
    }, { immediate: !1 }), Ue(() => i.stockGrain, (k, $) => {
      k !== $ && x();
    }, { immediate: !0 }), ti(() => {
      x(), bt(() => a.value = !0);
    }), (k, $) => (w(), F("button", {
      type: "button",
      id: t.id,
      class: Re(["c-btn orientation-button", { rot: N.value, square: E.value, disabled: t.disabled, [D.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      onClick: l
    }, [
      D.value === "delete" ? (w(), F("svg", ny, [...$[0] || ($[0] = [
        L("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ])])) : ae("", !0),
      D.value === "noChange" ? (w(), F("svg", ay, [...$[1] || ($[1] = [
        L("path", {
          d: "M5 12h14",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        }, null, -1)
      ])])) : ae("", !0),
      D.value === "freeRotation" ? (w(), F("svg", ry, [...$[2] || ($[2] = [
        L("g", null, [
          L("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          L("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          L("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          L("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ])])) : ae("", !0),
      D.value === "leftRight" ? (w(), F("svg", oy, [...$[3] || ($[3] = [
        L("g", null, [
          L("path", { d: "m5.408 19.408h61.095" }),
          L("g", null, [
            L("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            L("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ])])) : ae("", !0),
      D.value === "topBottom" ? (w(), F("svg", ly, [...$[4] || ($[4] = [
        L("g", null, [
          L("path", { d: "m19.408 66.503v-61.095" }),
          L("g", null, [
            L("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            L("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ])])) : ae("", !0),
      D.value === "grainLeftRight" ? (w(), F("svg", cy, [...$[5] || ($[5] = [
        L("g", null, [
          L("path", { d: "m3 3h99.887" }),
          L("path", { d: "m3.113 32h99.887" }),
          L("path", { d: "m3.113 61h99.887" })
        ], -1)
      ])])) : ae("", !0),
      D.value === "grainTopBottom" ? (w(), F("svg", uy, [...$[6] || ($[6] = [
        L("g", null, [
          L("path", { d: "m61 3v99.887" }),
          L("path", { d: "m32 3.113v99.887" }),
          L("path", { d: "m3 3.113v99.887" })
        ], -1)
      ])])) : ae("", !0)
    ], 10, sy));
  }
}), dy = ["id", "data-index", "disabled"], fy = /* @__PURE__ */ Ye({
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
    const i = t, s = e, n = ne(() => i.inputShape ? ki(i.inputShape, "planing", "face.a") : !1), a = ne(() => i.inputShape ? ki(i.inputShape, "planing", "face.b") : !1), r = () => {
      i.disabled || s("clicked");
    };
    return (o, l) => {
      const c = Ci("FontAwesomeIcon");
      return w(), F("button", {
        id: t.id,
        class: Re(["c-btn planing-button", {
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
        He(c, { icon: ["fass", "hammer"] })
      ], 10, dy);
    };
  }
}), hy = {
  key: 0,
  class: "info"
}, py = ["disabled"], gy = /* @__PURE__ */ Ye({
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
    const i = t, s = e, n = ne(
      () => i.field.name === "banding" && Fe(i.item) ? i.item : null
    );
    Vc(n, Kt(i, "orientationModel"));
    const a = ["orientationLock", "grain", "banding", "bandingOptions", "machining", "finish", "planing", "imageUpload"], r = ne(() => a.includes(i.field.name) || i.field.name === "material" && i.typePrefix === "part" || i.field.name === "t" && i.thicknessOptions?.length > 0 || i.field.name === "w" && i.widthOptions?.length > 0), o = ne(() => {
      try {
        const O = i.field.propertyPath || i.field.name;
        return O.includes(".") ? Si(i.item, O) ?? null : i.item[O] ?? null;
      } catch (O) {
        return console.error("[CheckoutField] Error getting field value:", O), null;
      }
    }), l = ne(() => {
      if (i.field.custom && i.field.type) {
        const N = i.field.type;
        if (["checkbox", "select", "string", "integer", "unitDependent"].includes(N))
          return N;
      }
      const O = {
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
      const M = O[i.field.type];
      return M || "string";
    }), c = ne(() => i.field.output ? i.field.output : null), u = ne(() => i.field.options || []), h = ne(() => !1), d = ne(() => cr(i.item, [i.field.name])), g = ne(() => cr(i.item, [i.field.name], !0)), x = ne(() => i.multiEdit || !1), V = ne(() => i.materialOptions?.length > 0 && Fe(i.item) ? !i.item.material : !1), H = ne(() => i.widthOptions?.length === 1), A = ne(() => i.field.info ? typeof i.field.info == "string" ? i.field.info : typeof i.field.info == "object" && o.value !== null && i.field.info[o.value] || null : null), E = (O) => {
      s("update", O);
    }, Y = (O, M) => {
      s("validation", O, M);
    };
    return (O, M) => r.value ? (w(), F(Ve, { key: 1 }, [
      t.field.name === "orientationLock" ? (w(), De(Ur, {
        key: 0,
        rectangle: t.item,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        "button-background": "#2c8d8f",
        onUpdateOrientation: E
      }, null, 8, ["rectangle", "stock-grain", "orientation-model"])) : t.field.name === "grain" ? (w(), De(Ur, {
        key: 1,
        rectangle: t.item,
        "button-background": "#2c8d8f",
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        onUpdateOrientation: E
      }, null, 8, ["rectangle", "stock-grain", "orientation-model"])) : t.field.name === "banding" ? (w(), De(Km, {
        key: 2,
        "input-shape": I(Fe)(t.item) ? t.item : null,
        open: t.bandingEnabled?.autoId === t.item.autoId,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        index: t.index,
        onClicked: M[0] || (M[0] = (N) => O.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "orientation-model", "index"])) : t.field.name === "finish" ? (w(), De(Jm, {
        key: 3,
        "input-shape": I(Fe)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        onClicked: M[1] || (M[1] = (N) => O.$emit("open-finish"))
      }, null, 8, ["input-shape", "index"])) : t.field.name === "planing" ? (w(), De(fy, {
        key: 4,
        "input-shape": I(Fe)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        onClicked: M[2] || (M[2] = (N) => O.$emit("open-planing"))
      }, null, 8, ["input-shape", "index"])) : t.field.name === "machining" ? (w(), De(iy, {
        key: 5,
        "input-shape": I(Fe)(t.item) ? t.item : null,
        onOpen: M[3] || (M[3] = (N) => O.$emit("open-machining"))
      }, null, 8, ["input-shape"])) : t.field.name === "material" && t.typePrefix === "part" ? (w(), De(Ii, {
        key: 6,
        id: `${t.typePrefix}-material-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: o.value,
        label: I(W)(t.field.label || "fields.material"),
        placeholder: I(W)(t.field.placeholder || "fields.material"),
        "enable-label": !1,
        output: "string",
        options: t.materialOptions,
        "select-first-option-disabled": !0,
        disabled: !t.materialOptions?.length,
        required: !1,
        text: {
          select: I(W)("actions.select"),
          delete: I(W)("actions.delete")
        },
        "onUpdate:value": E,
        onValidation: Y
      }, {
        default: $i(() => [
          Xs(O.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : t.field.name === "t" && t.thicknessOptions?.length > 0 ? (w(), De(Ii, {
        key: 7,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: o.value,
        label: I(W)(t.field.label || "fields.t"),
        "enable-label": !1,
        options: t.thicknessOptions,
        readonly: t.readonly,
        disabled: V.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: I(W)("actions.select"),
          delete: I(W)("actions.delete")
        },
        output: "number",
        "onUpdate:value": E,
        onValidation: Y
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "w" && t.widthOptions?.length > 0 ? (w(), De(Ii, {
        key: 8,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: o.value,
        label: I(W)(t.field.label || "fields.w"),
        "enable-label": !1,
        options: t.widthOptions,
        readonly: t.readonly,
        disabled: H.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: I(W)("actions.select"),
          delete: I(W)("actions.delete")
        },
        output: "number",
        "onUpdate:value": E,
        onValidation: Y
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "imageUpload" ? (w(), F("button", {
        key: 9,
        type: "button",
        disabled: t.readonly,
        onClick: M[4] || (M[4] = (N) => O.$emit("open-image-upload"))
      }, [
        He(I(Js), { icon: ["fass", "image"] })
      ], 8, py)) : ae("", !0)
    ], 64)) : (w(), De(Ii, {
      key: 0,
      id: `${t.typePrefix}-${t.field.name}-${t.index}`,
      "data-field": t.field.name,
      "data-index": t.index,
      type: l.value,
      value: o.value,
      label: I(W)(t.field.label || t.field.name),
      placeholder: I(W)(t.field.placeholder || t.field.name),
      "enable-label": t.enableLabel,
      output: c.value,
      options: u.value,
      "select-first-option-disabled": t.field.selectFirstOptionDisabled ?? !0,
      disabled: t.field.disabled || h.value,
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
      warning: g.value,
      "disable-required-validation": x.value,
      "onUpdate:value": E,
      onValidation: Y
    }, {
      default: $i(() => [
        A.value ? (w(), F("p", hy, [
          He(I(Js), { icon: ["fass", "info-circle"] }),
          hs(" " + oe(A.value), 1)
        ])) : ae("", !0),
        Xs(O.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "data-field", "data-index", "type", "value", "label", "placeholder", "enable-label", "output", "options", "select-first-option-disabled", "disabled", "readonly", "required", "allow-zero", "true-value", "false-value", "default", "number-format", "min", "max", "multi-edit", "text", "issue", "warning", "disable-required-validation"]));
  }
}), my = { class: "checkout-calculator-wrapper" }, yy = { class: "debug" }, by = {
  key: 0,
  class: "row table-heading"
}, vy = {
  key: 0,
  class: "cell center"
}, wy = { class: "cell" }, Sy = {
  key: 0,
  class: "cell"
}, xy = ["onClick"], ky = { class: "cell" }, Iy = ["disabled", "aria-label", "onClick"], Py = { class: "button-wrapper main" }, Cy = ["aria-label"], Ay = ["aria-label", "disabled"], Ty = ["aria-label"], Oy = { id: "part-count" }, Ly = {
  key: 3,
  id: "messages"
}, Fy = {
  key: 0,
  class: "heading"
}, $y = { class: "content" }, Dy = {
  key: 4,
  id: "progress"
}, Ey = { id: "diagram-wrapper" }, My = {
  key: 0,
  id: "stack"
}, _y = {
  key: 3,
  class: "debug"
}, ea = !0, Ry = /* @__PURE__ */ Ye({
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
    const s = qi(() => Promise.resolve().then(() => Wy)), n = qi(() => Promise.resolve().then(() => db)), a = qi(() => Promise.resolve().then(() => yb)), r = qi(() => Promise.resolve().then(() => Ba)), {
      inputs: o,
      totalInputShapes: l,
      getShapeGrainSummary: c,
      updateNumberFormat: u,
      validateInputStock: h,
      // validateInputShapeField,
      // validateInputStockField,
      removeInputShape: d,
      addInputShape: g,
      addInputStock: x,
      cloneInputShape: V,
      updateInputShape: H,
      validationIssues: A,
      setExtrasOptionsFromPricing: E,
      getCentralizedOptions: Y
    } = pl(), { r: O, updateFromResult: M, stackedStock: N, uniqueAddedShapes: D, uniqueUsedStock: k, usedStock: $, activeStockAutoId: b, activeStock: Z, setActiveStockAutoId: X } = wa(), { progress: Q, reset: z } = Gc(), { addNotice: B } = mn(), G = ne(() => o.inputShapes.value.filter(Fe)), q = (m) => !m || !Array.isArray(m) ? [] : m.map((y) => _p({ parts: [y] }).parts?.[0] || y), ee = t, U = i, we = le(!1), me = "production", ke = le(navigator?.language || "en-US"), Ae = uc(null), te = window.location.hostname, Be = le(!1), dt = le(!0), ft = dc("Checkout/currentURL", window.location.href), Je = le(null), Ie = le(!1), Xe = le(!1), et = le(!1), ye = le(!1), At = le(!1), St = le(Of()), de = le(!1), { socket: he } = Bc({
      refs: {
        connected: Be,
        thinking: et
      },
      callbacks: {
        onResult(m) {
          const y = m.optimisation;
          if (M(y), !y.shapeList?.length || !y.stockList?.length) {
            z(), B({
              type: "error",
              message: W("errors.calculation.no_result"),
              additional: [W("errors.validation.check_inputs")]
            }), et.value = !1;
            return;
          }
          if ((ce.apiVersion || 3) === 2 ? Je.value = Hm(
            m.jobId,
            D.value,
            k.value,
            $.value,
            O.offcuts?.value || [],
            o.inputShapes.value,
            O.metadata.value,
            ce.resultOrientationModel
          ) : Je.value = Um(
            m.jobId,
            D.value,
            k.value,
            $.value,
            O.offcuts?.value || [],
            o.inputShapes.value,
            O.metadata.value,
            ce.resultOrientationModel
          ), O?.metadata?.value?.unplacedParts?.length) {
            const v = O.metadata.value.unplacedParts.map((_) => _.id).join();
            B({
              type: "warning",
              message: W("woodwork.parts_not_fit") + ": " + v
            });
          }
          Je.value && (ce.emitAPIResult && (Je.value.apiResultV3 = Yp({
            jobId: m.jobId,
            saw: y.saw,
            stockList: y.stockList,
            shapeList: y.shapeList,
            cutList: y.cutList,
            offcuts: O.offcuts?.value || [],
            unusableShapes: y.unusableShapes,
            metadata: O.metadata.value
          })), U("result", Je.value)), et.value = !1;
        },
        onUser(m) {
          Ae.value = m;
        },
        onConnectError(m) {
          B({
            type: "error",
            message: W("errors.network.cannot_connect"),
            additional: [m]
          });
        },
        onError(m) {
          B({
            type: "error",
            message: W("errors.general.error_occurred"),
            additional: [m]
          });
        }
      }
    }), Me = {
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
      debug: !1,
      emitAPIResult: !1
    }, ce = Tt(Me), Oe = Tt({
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
    }), P = le(null), T = le(!1), S = le(""), se = le("");
    Ue(A, (m) => {
      m?.length > 0 ? (T.value = !0, S.value = "Validation Errors", se.value = m.map((y) => `${y.message} (${y.category.join(", ")})`).join(`

`)) : S.value === "Validation Errors" && (T.value = !1, S.value = "", se.value = "");
    }, { deep: !0 });
    const re = Tt({
      banding: null,
      finish: null,
      info: null,
      planing: null
      // imageUpload: null
    }), fe = le([]), ge = le([]), je = le([]), st = le([]), Pt = Tt({
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
    }), Ne = Tt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2"]
    }), tt = Tt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["a", "b"]
    }), at = Tt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]
      // All sides and faces by default
    }), Na = le(null), Ei = Tt({}), Mi = Tt({}), _i = Tt({}), As = le(null), El = ne(() => ({
      banding: Ei.rules,
      finish: Mi.rules,
      planing: _i.rules
    })), Ga = ne(() => Nc({
      stockType: Oe.stockType,
      materials: fe.value,
      minDimension: ce.minDimension,
      ...ce.fieldOrder && ce.fieldOrder.length > 0 ? { allowedFieldIds: ce.fieldOrder } : {}
    })), Ln = le([]), Fn = le({
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
    }), ss = ne(() => {
      const m = Ga.value.fields.value, y = Ga.value.allFieldsMap.value, C = m.filter((Ee) => Fn.value[Ee.name] ?? !0), v = ["banding", "finish", "planing", "machining", "imageUpload"], _ = [];
      for (const Ee of v) {
        const rt = Fn.value[Ee], qe = C.find((ze) => ze.name === Ee);
        if (rt && !qe) {
          const ze = y.get(Ee);
          ze && _.push(ze);
        }
      }
      const be = Ln.value || [];
      return [...C, ..._, ...be];
    }), ns = ne(() => ss.value.length + 2), Ml = ne(() => {
      const m = {
        id: 34,
        del: 32
      }, y = {
        id: `${m.id}px`,
        del: `${m.del}px`
      }, C = [];
      for (const v of ss.value) {
        if (v.name === "trim") continue;
        const _ = v.w ?? "minmax(20px, 1fr)";
        C.push(_);
      }
      return C.unshift(y.id), C.push(y.del), C.join(" ");
    }), Ts = ne(() => ({
      "--btn-color": ce.colors.buttonText,
      "--btn-bg": ce.colors.button,
      "--btn-hover-bg": _l(ce.colors.button, -8),
      "--btn-focus-ring": ce.colors.button
    }));
    function _l(m, y) {
      const C = m.replace("#", ""), v = parseInt(C, 16), _ = Math.round(2.55 * y), be = (v >> 16) + _, Pe = (v >> 8 & 255) + _, Ee = (v & 255) + _;
      return `#${(16777216 + (be < 255 ? be < 1 ? 0 : be : 255) * 65536 + (Pe < 255 ? Pe < 1 ? 0 : Pe : 255) * 256 + (Ee < 255 ? Ee < 1 ? 0 : Ee : 255)).toString(16).slice(1)}`;
    }
    const Rl = {
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
    }, qa = ne(() => Ae.value ? !(Ae.value && Ae.value?.api?.whiteLabel) : !0), Os = {
      stockSelection: (m) => {
        const y = ["efficiency", "smallest"];
        m && !y.includes(m) ? console.warn(`${m} is not a valid stockSelection, expected ${y.join("|")}`) : Oe.options.stockSelection = m;
      },
      minSpacing: (m) => {
        Oe.options.minSpacing = m;
      },
      maxParts: (m) => {
        ce.maxParts = m;
      },
      locale: (m) => {
        ke.value = m.replace(/_/g, "-");
      },
      enable: (m) => {
        const y = {
          banding: "banding",
          name: "partName",
          finish: "finish",
          planing: "planing",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload"
        };
        for (const C in Me.enable)
          C in m && (ce.enable[C] = m[C]);
        for (const C in y) {
          const v = y[C], _ = Si(m, [v]), be = Me.enable[v];
          xt(C, _ !== void 0 ? _ : be);
        }
        At.value = Si(m, ["csvImport"]) ?? Me.enable.csvImport;
      },
      colors: (m) => {
        for (const y in Me.colors)
          y in m && (ce.colors[y] = m[y]);
      },
      orientationModel: (m) => {
        if (![0, 1, 2].includes(m)) {
          ce.orientationModel = 0;
          return;
        }
        ce.orientationModel = m;
      },
      numberFormat: (m) => {
        if (!["decimal", "fraction"].includes(m)) {
          ce.numberFormat = "decimal";
          return;
        }
        ce.numberFormat = m;
      },
      customFields: (m) => {
        if (!Array.isArray(m) || !m?.length)
          return;
        const y = [];
        m.forEach((C) => {
          const v = za(C.id), _ = {
            ...C,
            custom: !0,
            id: v,
            name: v,
            // CheckoutField expects 'name' property
            propertyPath: "customData." + v,
            fieldMap: "customData." + v
          };
          C.type === "checkbox" && (_.w = "32px"), C.type === "integer" || C.type === "float" ? _.output = C.output ?? "number" : C.type === "select" && (_.output = C.output ?? "string", _.options = C.options), y.push(_);
        }), Ln.value = y, bt(() => {
          for (const C of o.inputShapes.value)
            C.customData = m.reduce((v, _) => {
              const be = za(_.id);
              return v[be] = C.customData[be] || _.default || "", v;
            }, {});
        });
      }
    }, jl = (m) => {
      ee.debug && U("log", ["checkout init...", m]), m?.stockFilterEnabled && (localStorage.removeItem("inputs/inputStock"), o.inputStock.value = []), m?.parts && (m.parts = q(m.parts));
      let y;
      try {
        y = qm(m);
      } catch (v) {
        U("error", v.message || "Invalid init data");
        return;
      }
      if (y.saw) {
        const v = y.saw;
        if (v.stockType !== void 0 && (nn.includes(v.stockType) || console.warn(`${v.stockType} is not a valid stockType, expected ${nn.join("|")}`), Oe.stockType = v.stockType, v.stockType === "linear" && (Oe.cutType = null, Oe.cutPreference = null)), v.bladeWidth !== void 0) {
          const _ = typeof v.bladeWidth == "string" ? parseFloat(v.bladeWidth) : v.bladeWidth;
          _ >= 0 ? Oe.bladeWidth = _ : console.warn(`SmartCut - you provided an incorrect blade width of: ${v.bladeWidth}`);
        }
        if (v.cutType !== void 0 && (Oe.cutType = v.cutType), v.cutPreference !== void 0 && (sa.includes(v.cutPreference) ? Oe.cutPreference = v.cutPreference : console.warn(`SmartCut - cut preference ${v.cutPreference || "N/A"} is not valid. Expected: ${sa.join("|")}`)), v.guillotineOptions !== void 0 && typeof v.guillotineOptions == "object" && Object.assign(Oe.guillotineOptions, v.guillotineOptions), v.stackHeight !== void 0) {
          const _ = typeof v.stackHeight == "string" ? parseFloat(v.stackHeight) : v.stackHeight;
          Oe.stackHeight = _;
        }
      }
      if (y?.options) {
        const v = y.options;
        gl(v), y.saw ? (["stockType", "bladeWidth"].forEach((Pe) => {
          Pe in y.saw || U("error", `${Pe} is a required saw property`);
        }), (y.saw.cutType === "guillotine" || y.saw.cutType === "beam") && !("cutPreference" in y.saw) && U("error", "cutPreference is a required saw property for guillotine and beam cut types")) : U("error", "saw configuration is required");
        const _ = ["enable", "colors"];
        for (const be in v)
          _.includes(be) || (ce[be] = v[be]), be in Os && Os[be](v[be]);
      }
      if (y.options.colors && "colors" in Os && Os.colors(y.options.colors), y.banding) {
        const v = y.banding;
        "locations" in v && v.locations && (Ei.locations = v.locations), "groups" in v && v.groups && (Ei.groups = v.groups), "rules" in v && v.rules && (Ei.rules = v.rules);
      }
      if (y.finish) {
        const v = y.finish;
        "locations" in v && v.locations && (Mi.locations = v.locations), "groups" in v && v.groups && (Mi.groups = v.groups), "rules" in v && v.rules && (Mi.rules = v.rules);
      }
      if (y.planing) {
        const v = y.planing;
        "locations" in v && v.locations && (_i.locations = v.locations), "groups" in v && v.groups && (_i.groups = v.groups), "rules" in v && v.rules && (_i.rules = v.rules);
      }
      y.partRules && (As.value = y.partRules), Rn("banding", y), Rn("finish", y), Rn("planing", y), Nl(y), Ka(y), Xe.value = !0, ee.debug && U("log", ["init complete"]);
      const C = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(C), bt(() => {
        qa.value && !Jl() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, xt = (m, y = !1) => {
      Fn.value[m] = y;
    }, za = (m) => m ? ed(m)?.toLowerCase() : null, Vl = (m, y, C) => {
      try {
        if (!m || !y) return;
        const v = C !== null && C !== "" && C !== void 0 && C !== 0;
        if (y === "material" && (!C || C === "")) {
          const Pe = { material: null, t: null };
          Oe.stockType === "linear" && (Pe.w = null), H(m.autoId, Pe) || (ai(m, "material", null), ai(m, "t", null), Oe.stockType === "linear" && ai(m, "w", null), m.isNew || m.validate());
          return;
        }
        if (y === "material" && C && fe.value?.length) {
          const Pe = fe.value.find((Ee) => Ee.name === C);
          if (Pe) {
            const Ee = { material: C };
            if (m.t != null) {
              const qe = K({ v: m.t });
              !Pe.thicknesses.some((Vn) => K({ v: Vn }) === qe) && Pe.thicknesses.length > 0 && (Ee.t = K({ v: Pe.thicknesses[0] }));
            }
            if (Oe.stockType === "linear" && m.w != null && Pe.widths) {
              const qe = K({ v: m.w });
              !Pe.widths.some((Vn) => K({ v: Vn }) === qe) && Pe.widths.length > 0 && (Ee.w = K({ v: Pe.widths[0] }));
            }
            if (!H(m.autoId, Ee)) {
              for (const [qe, ze] of Object.entries(Ee))
                ai(m, qe, ze);
              m.isNew || m.validate();
            }
            return;
          }
        }
        if (m.isNew)
          if (v)
            m.isNew = !1;
          else {
            ai(m, y, C);
            return;
          }
        let _;
        if (y.includes(".")) {
          const Pe = y.split("."), Ee = Pe[0], rt = Pe.slice(1).join("."), ze = { ...m[Ee] || {} };
          ai(ze, rt, C), _ = { [Ee]: ze };
        } else
          _ = { [y]: C };
        H(m.autoId, _) || (ai(m, y, C), m.validate()), y === "t" && Oe.stockType === "linear" && fe.value?.length && m.material && bt(() => {
          const Pe = Ya(m);
          if (Pe.length > 0 && m.w != null) {
            const Ee = K({ v: m.w });
            if (!Pe.some((qe) => K({ v: qe }) === Ee)) {
              const qe = { w: K({ v: Pe[0] }) };
              H(m.autoId, qe) || (ai(m, "w", qe.w), m.validate());
            }
          }
        }), ["l", "w", "t"].includes(y) && bt(() => {
          Wa(m);
        });
      } catch (v) {
        console.error("[CHECKOUT] Error updating field:", v);
      }
    }, Bl = () => {
    }, Wa = (m) => {
      if (As.value && m && !m.isNew && !(!m.l && !m.w))
        try {
          const y = Lm(m, As.value);
          if (m.issues && (m.issues = m.issues.filter((C) => !(C.category?.includes("part") && C.identifier === "part-validation-rules"))), !y.valid && y.violations.length > 0)
            for (const C of y.violations) {
              const v = $m(C);
              new ue({
                item: m,
                type: "error",
                category: ["part"],
                message: v,
                shouldTranslate: !1,
                issues: m.issues || []
              });
            }
        } catch (y) {
          console.error("[CHECKOUT] Error validating part:", y);
        }
    }, Nl = (m) => {
      if (Si(ce, ["enable", "machining"]) && m?.machining) {
        for (const y in Pt)
          m.machining[y] && (Pt[y] = m.machining[y]);
        if (["holes", "hingeHoles"].forEach((y) => {
          m?.machining?.[y] && (Pt[y].enabled = m?.machining?.[y].enabled);
        }), m?.machining?.corners?.types?.length && (Pt.corners.enabled = !0, Pt.corners.types = m.machining.corners.types), m.banding && m?.options?.enable?.banding) {
          if (!Ne) return;
          Pt.banding = {
            enabled: !0
          }, Ne.options.length && (Pt.banding.options = Ne.options), Ne.labels.length && (Pt.banding.labels = Ne.labels), pr(Ne.pricing) && (Pt.banding.pricing = Ne.pricing);
        }
      }
    }, Gl = (m = null) => {
      P.value = m, m && Fe(m) && m.l && m.w ? we.value = !0 : alert(W("machining.enter_dimensions_first"));
    }, ql = () => {
      we.value = !1;
    }, Ha = (m = []) => {
      if (ge.value = [], je.value = [], xt("t", !1), !!m.length) {
        for (const y of m)
          if (y?.t)
            if (typeof y.t == "string" && y.t.includes(",")) {
              const C = Za(y.t, !0);
              C.length === 2 ? (Wl(C), xt("t", !0), y.t = ge.value[0]) : U("error", "bonded thickness found which does not have 2 options");
            } else ge.value.includes(y.t) || ge.value.push(y.t);
        ge.value.length > 1 && xt("t", !0);
      }
    }, Ua = (m = []) => {
      if (st.value = [], !m.length) {
        xt("w", !1);
        return;
      }
      for (const y of m) {
        if (!y?.w) continue;
        const C = K({ v: y.w });
        st.value.includes(C) || st.value.push(C);
      }
      st.value.length >= 1 ? xt("w", !0) : xt("w", !1);
    }, zl = (m) => {
      if (!m) return { thicknesses: [], bondedThicknesses: [] };
      if (!fe.value?.length)
        return {
          thicknesses: ge.value,
          bondedThicknesses: []
        };
      if (!m.material)
        return {
          thicknesses: ge.value,
          bondedThicknesses: []
        };
      const y = fe.value.find((_) => _.name === m.material);
      if (!y)
        return {
          thicknesses: ge.value,
          bondedThicknesses: []
        };
      const C = [...y.thicknesses], v = [];
      for (let _ = 0; _ < C.length; _++) {
        const be = C[_], Pe = Za(be), Ee = [];
        if (Pe.length) {
          for (const rt of Pe)
            C[_] = rt, Ee.push(_);
          _++;
        }
        Ee.length && v.push(Ee);
      }
      return {
        thicknesses: C,
        bondedThicknesses: v
      };
    }, Ya = (m) => {
      if (!m) return [];
      if (!fe.value?.length || !m.material)
        return st.value;
      const y = fe.value.find((C) => C.name === m.material);
      if (!y)
        return st.value;
      if (m.t != null && o.inputStock?.value?.length) {
        const C = K({ v: m.t }), v = /* @__PURE__ */ new Set();
        for (const _ of o.inputStock.value)
          _.material?.toUpperCase() === m.material && K({ v: _.t }) === C && _.w != null && v.add(K({ v: _.w }));
        if (v.size > 0)
          return Array.from(v).sort((_, be) => _ - be);
      }
      return y.widths || st.value;
    }, Ka = (m) => {
      if (m?.stock?.some((y) => y?.material)) {
        fe.value = [], ge.value = [], je.value = [];
        const y = /* @__PURE__ */ new Map();
        for (const v of m.stock) {
          if (!v.material) continue;
          const _ = v.material.toUpperCase();
          y.has(_) || y.set(_, { thicknesses: /* @__PURE__ */ new Set(), widths: /* @__PURE__ */ new Set() }), v.t != null && y.get(_)?.thicknesses.add(K({ v: v.t })), Oe.stockType === "linear" && v.w != null && y.get(_)?.widths.add(K({ v: v.w }));
        }
        fe.value = Array.from(y.entries()).map(([v, _]) => {
          const be = {
            name: v,
            thicknesses: Array.from(_.thicknesses).sort((Pe, Ee) => Pe - Ee)
          };
          return Oe.stockType === "linear" && _.widths.size > 0 && (be.widths = Array.from(_.widths).sort((Pe, Ee) => Pe - Ee)), be;
        });
        const C = /* @__PURE__ */ new Set();
        for (const v of fe.value)
          for (const _ of v.thicknesses)
            C.add(K({ v: _ }));
        if (ge.value = Array.from(C).sort((v, _) => v - _), Oe.stockType === "linear") {
          const v = /* @__PURE__ */ new Set();
          for (const _ of fe.value)
            if (_.widths)
              for (const be of _.widths)
                v.add(K({ v: be }));
          st.value = Array.from(v).sort((_, be) => _ - be);
        }
        fe.value.length > 1 ? xt("material", !0) : xt("material", !1), ge.value.length > 1 ? xt("t", !0) : xt("t", !1), Oe.stockType === "linear" && st.value.length > 1 ? xt("w", !0) : Oe.stockType === "linear" && xt("w", !1);
      } else
        Ha(m.stock);
      Oe.stockType === "linear" && !fe.value?.length && Ua(m.stock);
    }, Wl = (m, y = null) => {
      if (!Array.isArray(m)) {
        U("error", "addBondedThicknesses expects an array");
        return;
      }
      const C = [];
      for (let v of m)
        ce.numberFormat === "decimal" && (v = parseFloat(v)), ge.value.push(v), y && y.thicknesses.push(v), C.push(ge.value.length - 1);
      je.value.push(C);
    }, Hl = (m) => {
      const { thicknesses: y } = zl(m);
      return y?.length ? y.map((C) => ({
        label: C?.toString(),
        value: C
      })) : [];
    }, Ul = (m) => {
      const y = Ya(m);
      return y?.length ? y.map((C) => ({
        label: C?.toString(),
        value: C
      })) : [];
    }, Za = (m, y = !1) => {
      if (typeof m == "string" && m.includes(",")) {
        const C = m.split(",");
        return y ? C.map((v) => K({ v })) : C;
      }
      return [];
    }, Yl = () => {
      de.value ? Zl() : Kl();
    }, Kl = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), de.value = !0;
    }, Zl = () => {
      document.exitFullscreen && document.exitFullscreen(), de.value = !1;
    }, Jl = () => {
      if (Ae.value?.api?.whiteLabel) return !0;
      let m = !0;
      const y = document.querySelector("#smartcut-checkout a#credit");
      if (!y) return m = !1;
      const C = window.getComputedStyle(y);
      return C.display === "none" || C.display === "hidden" || C.opacity === "0" || C.color === "transparent" || C.position !== "absolute" || C.color !== "#4e4e4e" && C.color !== "rgb(78, 78, 78)" ? m = !1 : (dt.value = m, m);
    }, $n = ne(() => typeof ee.findExtrasPrice == "function"), Ja = (m, y) => {
      let C, v;
      switch (y) {
        case "banding":
          C = Ne.options, v = Ne.labels;
          break;
        case "finish":
          C = tt.options, v = tt.labels;
          break;
        case "planing":
          C = at.options, v = at.labels;
          break;
        default:
          C = [], v = [];
      }
      Ti(m, y, C, v);
    }, Xa = (m) => {
      const y = Object.keys(m);
      return Math.max(...y.map((v) => v.split("|").length));
    }, as = (m, y, C) => {
      if (!m)
        return [];
      if (C > 0 && !y[C - 1])
        return [];
      const v = /* @__PURE__ */ new Set();
      for (const be of Object.keys(m)) {
        const Pe = be.split("|");
        if (Pe.length > C) {
          let Ee = !0;
          for (let rt = 0; rt < C; rt++) {
            const qe = y[rt], ze = Pe[rt];
            if (qe && qe !== ze) {
              Ee = !1;
              break;
            }
          }
          Ee && v.add(Pe[C]);
        }
      }
      return Array.from(v);
    }, Dn = (m, y, C, v) => {
      let _, be;
      switch (y) {
        case "banding":
          _ = Ne.options, be = Ne.labels;
          break;
        case "finish":
          _ = tt.options, be = tt.labels;
          break;
        case "planing":
          _ = at.options, be = at.labels;
          break;
        default:
          _ = [], be = [];
      }
      return Un(m, y, C, v, _, be);
    }, Xl = (m, y, C) => {
      let v, _;
      switch (y) {
        case "banding":
          v = Ne.options, _ = Ne.labels;
          break;
        case "finish":
          v = tt.options, _ = tt.labels;
          break;
        case "planing":
          v = at.options, _ = at.labels;
          break;
        default:
          v = [], _ = [];
      }
      return Un(m, y, C, ee.findExtrasPrice, v, _);
    }, Ql = le({}), En = (m = 1) => {
      for (let y = m; y--; ) {
        let C = {
          l: null,
          w: Oe.stockType === "linear" && st.value.length === 1 ? st.value[0] : null,
          t: ge.value.length ? ge.value[0] : null,
          q: 1,
          material: fe.value?.length === 1 ? fe.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (o.inputShapes.value.length > 0) {
          const _ = o.inputShapes.value[o.inputShapes.value.length - 1];
          C.material = _.material, C.t = _.t, Oe.stockType === "linear" && _.w && (C.w = _.w);
        }
        const v = g(C);
        v && (Ne?.labels?.length && Ti(v, "banding", Ne.options, Ne.labels), tt?.labels?.length && Ti(v, "finish", tt.options, tt.labels), at?.labels?.length && Ti(v, "planing", at.options, at.labels));
      }
    }, Mn = (m = {}) => {
      const y = {
        q: 1,
        // Always set quantity to 1
        ...m
      }, C = g(y);
      return C && (Oe.stockType === "linear" && st.value.length === 1 && !C.w && (C.w = st.value[0]), ge.value.length && !C.t && (C.t = ge.value[0]), fe.value?.length === 1 && !C.material && (C.material = fe.value[0].name), Ne?.labels?.length && Ti(C, "banding", Ne.options, Ne.labels), tt?.labels?.length && Ti(C, "finish", tt.options, tt.labels), at?.labels?.length && Ti(C, "planing", at.options, at.labels)), C;
    }, ec = (m) => {
      if (ge.value.length)
        for (const y of m) {
          if (!y.t) return;
          const C = ge.value.findIndex(
            (be) => K({ v: be }) === y.t
          ), v = je.value.find((be) => be.includes(C));
          if (!v) return;
          const _ = Math.min(
            ...v.map((be) => ge.value[be])
          );
          K({ v: y.t }) > _ && (y.q = Number(y.q) * (K({ v: y.t }) / _), y.notes = `Bond to form ${y.t.valueOf()}`, y.t = _);
        }
    }, Qa = () => {
      z(), X(null), O.stockList.value = [], O.shapeList.value = [], O.cutList.value = [];
    }, _n = () => {
      o.inputShapes.value.length = 0, ee.inputType !== "formula" && bt(() => En());
    }, er = () => {
      for (const m of o.inputShapes.value) {
        const y = m.material ? fe.value.find((C) => C.name === m.material) : null;
        if (y)
          y.thicknesses.includes(K({ v: m.t })) || (m.t = K({ v: y.thicknesses[0] }));
        else if (fe.value?.length === 1) {
          m.material = fe.value[0].name;
          const C = fe.value[0];
          C.thicknesses.includes(K({ v: m.t })) || (m.t = K({ v: C.thicknesses[0] }));
        } else if (fe.value?.length > 1 && m.t) {
          const C = fe.value.find((v) => v.thicknesses.some((_) => K({ v: _ }) === K({ v: m.t })));
          C ? m.material = C.name : (m.material = fe.value[0].name, m.t = K({ v: fe.value[0].thicknesses[0] }));
        } else fe.value?.length > 1 ? (m.material = fe.value[0].name, m.t = K({ v: fe.value[0].thicknesses[0] })) : !m.t && o.inputStock.value[0]?.t && (m.t = K({ v: o.inputStock.value[0].t }));
      }
    }, tc = async () => {
      if (U("calculating"), et.value) return !1;
      et.value = !0, ye.value = !1, er();
      const m = await wm({
        t: W,
        partTrim: ce.partTrim,
        maxShapes: ce.maxParts || 1e3,
        maxStock: 1 / 0,
        // CheckoutCalculator doesn't have stock limits
        inputSaw: o.inputSaw.value,
        // Extras validation data
        bandingPricing: Ne.pricing,
        finishPricing: tt.pricing,
        planingPricing: at.pricing,
        findExtrasPrice: ee.findExtrasPrice,
        extrasValidationRules: El.value,
        onLimit: () => {
          B({
            type: "error",
            message: W("limits.max_parts") + " " + ce.maxParts
          });
        }
      });
      if (As.value)
        for (const _ of o.inputShapes.value)
          Wa(_);
      const y = o.inputShapes.value.flatMap((_) => _.issues || []).filter((_) => _.type === "error" && _.category?.includes("part"));
      if (y.length > 0) {
        B({
          type: "error",
          message: W("errors.validation.inputs_issue", { 0: "part" }),
          additional: y.map((_) => _.message)
        }), U("validation-error"), et.value = !1;
        return;
      }
      if (!m.valid) {
        U("validation-error"), et.value = !1;
        return;
      }
      Qa(), o.inputShapes.value.forEach((_, be) => {
        _.createId(be);
      }), o.inputStock.value.forEach((_, be) => {
        _.createId(be);
      });
      const C = o.inputShapes.value.map((_) => V(_)).filter(Boolean);
      if (C.length !== o.inputShapes.value.length)
        return B({
          type: "error",
          message: "Some parts have validation errors and cannot be processed",
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), et.value = !1, !1;
      ec(C), ee.debug && console.log(
        "SmartCut - calculating",
        "stock",
        o.inputStock.value.map((_) => ({ l: _.l, w: _.w })),
        "parts",
        C.map((_) => ({ l: _.l, w: _.w }))
      );
      const v = {
        inputSaw: o.inputSaw.value.toData(),
        inputShapes: C.map((_) => _.toData()),
        inputStock: o.inputStock.value.map((_) => _.toData()),
        inputUserGroups: [],
        enableEvo: !0,
        useInventory: !1,
        domain: te,
        extrasOptions: Y(),
        source: "checkout",
        sourceVersion: "4.0.86"
      };
      await he.connect(), he.emit("calculate", v);
    }, Rn = (m, y) => {
      if (xt(m, !1), !m || !y || !y?.[m] || !Si(ce, ["enable", m]))
        return;
      const C = [m, "pricing"];
      if (!hr(y, C)) {
        U("error", `${C.join(".")} not found in sent data`);
        return;
      }
      const v = Si(y, C);
      if (typeof v != "object") {
        U("error", `${C.join(".")} data must be an object`);
        return;
      }
      if (!pr(v)) {
        U("error", `if provided, ${C.join(".")} data must contain some values`);
        return;
      }
      const _ = Object.keys(v), be = Object.values(v);
      if (!_.length) {
        U("error", `no ${C.join(".")} pricing found`);
        return;
      }
      const Pe = /,/;
      for (const ze of _)
        if (Pe.test(ze)) {
          U("error", `${C} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (be.some((ze) => isNaN(ze))) {
        U("error", `${C} values must be a number`);
        return;
      }
      const Ee = Xa(v), rt = [m, "labels"];
      let qe = [];
      if (hr(y, rt))
        qe = Si(y, rt);
      else {
        U("error", `${rt.join(".")} not found`);
        return;
      }
      if (!qe) {
        U("error", `${rt.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(qe)) {
        U("error", `${rt.join(".")} data must be an array`);
        return;
      }
      if (!qe?.length) {
        U("error", `if provided, ${rt.join(".")} data must contain values`);
        return;
      }
      if (qe.length !== Ee) {
        U("error", `${rt.join(".")} length (${qe.length}) must match the number of levels in ${C.join(".")} (${Ee})`);
        return;
      }
      switch (m) {
        case "banding": {
          Ne.labels = qe, Ne.pricing = v;
          const ze = jn(v);
          Ne.options = ze, E("banding", ze, qe, v);
          break;
        }
        case "finish": {
          tt.labels = qe, tt.pricing = v;
          const ze = jn(v);
          tt.options = ze, E("finish", ze, qe, v);
          break;
        }
        case "planing": {
          at.labels = qe, at.pricing = v;
          const ze = jn(v);
          at.options = ze, E("planing", ze, qe, v);
          break;
        }
      }
      if (Na.value = Y(), xt(m, !0), !!o.inputShapes.value?.length)
        for (const ze of o.inputShapes.value)
          Ja(ze, m);
    }, jn = (m) => {
      const y = [], C = Object.keys(m), v = Xa(m);
      for (let _ = v; _--; ) y.push(/* @__PURE__ */ new Set());
      for (const _ of C)
        _.split("|").forEach((Pe, Ee) => y[Ee].add(Pe));
      for (let _ = 0; _ < v; _++)
        y[_] = Array.from(y[_]);
      return y;
    }, Ls = (m, y) => {
      if (!y) return;
      m !== "info" && Object.keys(re).forEach((v) => {
        v !== m && v !== "info" && (re[v] = null);
      });
      const C = o.inputShapes.value.indexOf(y);
      re[m] === C ? (P.value = null, re[m] = null, Ql.value[m] = void 0) : (P.value = y, re[m] = C);
    }, tr = (m) => {
      if (U("log", ["load event received"]), !Xe.value) {
        U("log", ["load event received"]);
        return;
      }
      ic(m.detail);
    }, ic = (m) => {
      if (U("log", ["loading parts..."]), !m || !m?.inputs?.parts?.length) {
        U("log", ["could not find any parts to import"]);
        return;
      }
      o.inputShapes.value.length = 0;
      let y = 0;
      for (const v of m.inputs.parts) {
        const _ = Mn(v);
        _ ? _.issues?.length && U("log", [`SmartCut - issues found while importing part at index ${y}`, _.issues]) : U("log", [`SmartCut - error loading part at index ${y}`, v]), y++;
      }
      o.inputShapes.value.flatMap((v) => Lo(v.issues)).length && B({
        type: "error",
        message: W("errors.general.issues_found")
      }), U("log", [`loaded ${o.inputShapes.value.length} parts`]);
    }, sc = (m) => {
      o.inputShapes.value.length = 0, bt(() => {
        for (const y of m)
          y.t = o.inputStock.value?.[0]?.t ?? null, Oe.stockType === "linear" && st.value.length === 1 && !y.w && (y.w = st.value[0]), Mn(y);
      });
    };
    Ue(() => ee.inputStock, (m) => {
      if (Qa(), Array.isArray(m) || console.warn("SmartCut - stock must be passed as an array"), !!m?.length) {
        o.inputStock.value.length = 0, fe.value.length || Ha(m.map((y) => y.toData()));
        for (const y of m)
          x({
            ...y.toData(),
            autoAdd: !0
          }) || (console.error("Failed to add stock item:", y), B({
            type: "error",
            message: "Failed to add some stock items due to validation errors"
          }));
        if (o.inputStock.value.length) {
          o.inputShapes.value.length ? bt(() => er()) : ee.inputType !== "formula" && bt(() => En());
          const y = h(o.inputSaw.value);
          y.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(y))), B({
            type: "error",
            message: W("errors.validation.stock_issue"),
            additional: y.map((C) => C.message)
          }));
        }
      }
    }, { immediate: !0 }), Ue(o.inputShapes, (m) => {
      U("inputs-changed"), m.forEach((y) => {
        Oe.stockType === "linear" && st.value.length && (!y.w || !st.value.includes(K({ v: y.w }))) && (y.w = st.value[0]);
        const C = fe.value.find((v) => v.name === y.material);
        C && (C.thicknesses.includes(K({ v: y.t })) || (y.t = K({ v: C.thicknesses[0] })));
      });
    }, { deep: !0 }), Ue(() => ce.numberFormat, (m) => {
      u(m);
    }), Ue(o.inputStock, (m) => {
      Oe.stockType === "linear" && Ua(m.map((y) => y.toData()));
    }, { deep: !0 }), Ue(() => Oe, (m) => {
      o.inputSaw.value = new oi(m);
    }, { deep: !0 }), ti(async () => {
      if (Ie.value) return;
      Ie.value = !0;
      const m = new URL(window.location.href), y = m.searchParams.toString(), C = m.origin + m.pathname + (y ? `?${y}` : "");
      ft.value !== C && _n(), ft.value = C, ke.value = ce.locale, await he.connect(), he.emit("getUserFromDomain"), window.addEventListener("smartcut/load", tr), ee.debug && U("log", [
        "ready...",
        "fields:",
        ss.value.map((v) => v.name)
      ]);
    });
    const nc = () => {
      he && he.disconnect();
    };
    return Ss(() => {
      window.removeEventListener("smartcut/load", tr), nc(), delete window.smartcutCheckout;
    }), e({
      init: jl,
      clear: _n,
      getAvailablePricingOptions: as,
      getExtrasPrice: Xl,
      formatPrice: ee.formatPrice,
      findExtrasPrice: ee.findExtrasPrice,
      inputShapes: o.inputShapes,
      initExtrasOptions: Ja,
      createAndAddInputShape: Mn,
      initMaterialsThicknesses: Ka
    }), (m, y) => {
      const C = Ci("FontAwesomeIcon");
      return w(), F("div", my, [
        Xe.value ? ae("", !0) : (w(), De(zr, {
          key: 0,
          size: 50,
          "show-number": !1
        })),
        P.value?.machining && we.value ? (w(), De(I(n), {
          key: 1,
          "input-shape": P.value,
          "onUpdate:inputShape": y[0] || (y[0] = (v) => P.value = v),
          translate: !0,
          options: Pt,
          "find-extras-price": t.findExtrasPrice,
          "get-extras-price": I(Un),
          "get-available-pricing-options": as,
          "format-price": t.formatPrice,
          onClose: ql
        }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price"])) : ae("", !0),
        L("div", yy, [
          L("div", null, "Orientation model " + oe(ce.orientationModel), 1),
          L("div", null, oe(I(o)?.inputShapes?.value[0]?.extras?.banding?.sides) + " parts", 1)
        ]),
        Xe.value ? (w(), F("section", {
          key: 2,
          id: "smartcut-checkout",
          class: Re(["smartcut-content", { fullscreen: de.value }])
        }, [
          St.value && !t.readonly ? (w(), F("button", {
            key: 0,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            style: ht(Ts.value),
            onClick: y[1] || (y[1] = (v) => Yl())
          }, [
            He(C, { icon: ["fass", "expand"] }),
            hs(" " + oe(I(W)("general.full_screen")), 1)
          ], 4)) : ae("", !0),
          qa.value ? (w(), F("a", {
            key: 1,
            id: "credit",
            style: Rl,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, oe(I(Zu)(I(W)("general.powered_by"))), 1)) : ae("", !0),
          L("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: ht({ "grid-template-columns": Ml.value })
          }, [
            I(o).inputShapes.value.length ? (w(), F("div", by, [
              y[6] || (y[6] = L("div", { class: "cell id" }, null, -1)),
              (w(!0), F(Ve, null, Qe(ss.value, (v) => (w(), F("div", {
                key: v.name,
                class: Re(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(v.name) || v.type === "boolean" }])
              }, oe(I(W)(v.label)), 3))), 128)),
              I(me) === "development" && ea ? (w(), F("div", vy, " Info ")) : ae("", !0),
              y[7] || (y[7] = L("div", { class: "cell del" }, null, -1))
            ])) : ae("", !0),
            (w(!0), F(Ve, null, Qe(G.value, (v, _) => (w(), F("div", {
              key: _,
              class: "row inputs"
            }, [
              L("div", wy, [
                L("div", {
                  class: "id",
                  style: ht({
                    background: ce.colors.partA,
                    color: ce.colors.text
                  })
                }, oe(_ + 1), 5)
              ]),
              (w(!0), F(Ve, null, Qe(ss.value, (be) => (w(), F("div", {
                key: be.name,
                class: "cell"
              }, [
                v ? (w(), De(gy, {
                  key: 0,
                  field: be,
                  item: v,
                  index: _,
                  "type-prefix": "part",
                  readonly: t.readonly,
                  "number-format": ce.numberFormat,
                  "orientation-model": ce.orientationModel,
                  "stock-grain": I(c)(v),
                  "material-options": fe.value?.map((Pe) => ({ label: Pe.name, value: Pe.name })) || [],
                  "thickness-options": be.name === "t" ? Hl(v) : [],
                  "width-options": be.name === "w" && Oe.stockType === "linear" ? Ul(v) : [],
                  "banding-enabled": re.banding === _ ? v : null,
                  onUpdate: (Pe) => Vl(v, be.propertyPath || be.fieldMap || be.name, Pe),
                  onValidation: y[2] || (y[2] = (Pe, Ee) => Bl()),
                  onOpenBanding: (Pe) => Ls("banding", v),
                  onOpenMachining: (Pe) => Gl(v),
                  onOpenFinish: (Pe) => Ls("finish", v),
                  onOpenPlaning: (Pe) => Ls("planing", v)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "orientation-model", "stock-grain", "material-options", "thickness-options", "width-options", "banding-enabled", "onUpdate", "onOpenBanding", "onOpenMachining", "onOpenFinish", "onOpenPlaning"])) : ae("", !0)
              ]))), 128)),
              I(me) === "development" && ea ? (w(), F("div", Sy, [
                L("button", {
                  class: Re(["c-btn", { selected: re.info === _ }]),
                  style: ht(Ts.value),
                  type: "button",
                  onClick: (be) => Ls("info", v)
                }, " i ", 14, xy)
              ])) : ae("", !0),
              L("div", ky, [
                L("button", {
                  disabled: I(o).inputShapes.value.length <= 1,
                  type: "button",
                  class: "delete",
                  "aria-label": `${I(W)("actions.remove")} ${I(Ju)(I(W)("woodwork.part"))}`,
                  onClick: (be) => I(d)(v.autoId)
                }, [
                  He(C, { icon: ["fass", "trash"] })
                ], 8, Iy)
              ]),
              He(I(s), {
                item: v,
                "num-columns": ns.value
              }, null, 8, ["item", "num-columns"]),
              re.banding === _ && Ne.options.length > 0 && $n.value ? (w(), De(Ks, {
                key: 1,
                shape: v,
                "shape-index": _,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": Ne.keys,
                "all-options": Ne.options,
                pricing: Ne.pricing,
                labels: Ne.labels,
                locations: Ei.locations,
                "location-groups": Ei.groups,
                "user-friendly-field-map": I(Qt),
                "part-columns": ns.value,
                "format-price": t.formatPrice,
                "find-extras-price": ee.findExtrasPrice,
                "get-price": Dn,
                "orientation-model": ce.orientationModel,
                "stock-grain": I(c)(v),
                "get-available-pricing-options": as,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain"])) : ae("", !0),
              re.finish === _ && tt.options.length > 0 && $n.value ? (w(), De(Ks, {
                key: 2,
                shape: v,
                "shape-index": _,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": tt.keys,
                "all-options": tt.options,
                pricing: tt.pricing,
                labels: tt.labels,
                locations: Mi.locations,
                "location-groups": Mi.groups,
                "user-friendly-field-map": I(Qt),
                "part-columns": ns.value,
                "format-price": t.formatPrice,
                "find-extras-price": ee.findExtrasPrice,
                "get-price": Dn,
                "orientation-model": ce.orientationModel,
                "stock-grain": I(c)(v),
                "get-available-pricing-options": as,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain"])) : ae("", !0),
              re.planing === _ && at.options.length > 0 && $n.value && !0 ? (w(), De(Ks, {
                key: 3,
                shape: v,
                "shape-index": _,
                "extra-type": "planing",
                "extra-label": "planing",
                "extra-keys": at.keys,
                "all-options": at.options,
                pricing: at.pricing,
                labels: at.labels,
                locations: _i.locations,
                "location-groups": _i.groups,
                "user-friendly-field-map": I(Qt),
                "part-columns": ns.value,
                "format-price": t.formatPrice,
                "find-extras-price": ee.findExtrasPrice,
                "get-price": Dn,
                "orientation-model": ce.orientationModel,
                "stock-grain": I(c)(v),
                "get-available-pricing-options": as,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain"])) : ae("", !0),
              re.info === _ ? (w(), F("div", {
                key: 4,
                id: "shape-info",
                style: ht({ "grid-column-end": "span " + ns.value })
              }, [
                L("div", null, oe(v?.banding), 1),
                L("div", null, oe(Na.value?.banding?.options || "No options"), 1)
              ], 4)) : ae("", !0)
            ]))), 128))
          ], 4),
          L("div", Py, [
            t.readonly ? ae("", !0) : (w(), F("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${I(W)("actions.add")} ${I(W)("woodwork.part")}`,
              style: ht(Ts.value),
              onClick: y[3] || (y[3] = (v) => En())
            }, [
              He(C, { icon: ["fass", "plus-large"] }),
              hs(" " + oe(`${I(W)("actions.add")} ${I(W)("woodwork.part")}`), 1)
            ], 12, Cy)),
            L("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": I(W)("actions.calculate"),
              style: ht(Ts.value),
              disabled: !I(o).inputStock.value?.length || et.value,
              onClick: y[4] || (y[4] = (v) => tc())
            }, [
              He(C, { icon: ["fass", "calculator"] }),
              hs(oe(I(W)("actions.calculate")), 1)
            ], 12, Ay),
            t.readonly ? ae("", !0) : (w(), F("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": I(W)("actions.clear"),
              onClick: y[5] || (y[5] = (v) => _n())
            }, [
              He(C, { icon: ["fass", "trash"] })
            ], 8, Ty)),
            L("div", Oy, oe(I(l)) + oe(ce?.maxParts ? "/" + ce.maxParts : ""), 1)
          ]),
          At.value && !t.readonly ? (w(), De(I(a), {
            key: 2,
            ref: "import",
            "number-format": ce.numberFormat,
            "custom-fields": Ln.value,
            "banding-options": Ne.options,
            "banding-labels": Ne.labels,
            "finish-options": tt.options,
            "finish-labels": tt.labels,
            onImport: sc
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : ae("", !0),
          T.value ? (w(), F("div", Ly, [
            S.value ? (w(), F("div", Fy, oe(S.value), 1)) : ae("", !0),
            L("pre", $y, oe(se.value), 1)
          ])) : ae("", !0),
          (ce.enable.diagram ? et.value && !I(Q).complete : et.value || I(Q).complete) ? (w(), F("div", Dy, [
            He(zr, {
              size: 50,
              number: I(Q).shapeCount,
              complete: I(Q).complete,
              "show-number": ce.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : ae("", !0),
          ws(L("div", Ey, [
            I(Z)?.saw?.stockType !== "roll" ? (w(), F("div", My, oe(I(Z)?.stack?.number ? I(Z).stack.number : 1), 1)) : ae("", !0),
            He(Rg, {
              "element-id": "diagram",
              "number-format": ce.numberFormat,
              "decimal-places": ce.decimalPlaces,
              colors: ce.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [gn, ce.enable.diagram && I(Q).complete]
          ]),
          ce.enable.diagram && I(N).length > 1 && I(Q).complete ? (w(), De(Xp, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-auto-id": I(b),
            "stock-list": I(N),
            onShowStock: I(X)
          }, null, 8, ["active-stock-auto-id", "stock-list", "onShowStock"])) : ae("", !0)
        ], 2)) : ae("", !0),
        I(me) === "development" && ea ? (w(), F("div", _y, [
          He(I(r), {
            data: [I(o)?.inputShapes?.value?.[0]],
            paths: ["inputShapes"]
          }, null, 8, ["data"]),
          y[8] || (y[8] = L("div", null, "Result data", -1)),
          He(I(r), {
            data: [Je.value],
            paths: ["checkoutResult"]
          }, null, 8, ["data"])
        ])) : ae("", !0)
      ]);
    };
  }
}), AS = /* @__PURE__ */ Mt(Ry, [["__scopeId", "data-v-d0ca1d0b"]]), Fl = Te(["select", "multiselect", "range", "boolean", "search"]), $l = Te(["asc", "desc"]), Dl = Te(["grid", "list"]), jy = j({
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
Gt.merge(jy).describe("Stock option with filtering and display metadata");
const Vy = j({
  field: p().describe("Property name to filter on"),
  type: Fl,
  label: p().describe("Display label"),
  custom: R().default(!1).describe("Whether this is a custom property"),
  // Range filter options
  min: f().optional().describe("Minimum value for range filter"),
  max: f().optional().describe("Maximum value for range filter"),
  step: f().optional().describe("Step size for range filter"),
  // Select filter options
  options: ie(j({
    label: p(),
    value: ve()
  })).optional().describe("Predefined options for select filters"),
  // Display options
  visible: R().default(!0).describe("Whether filter is visible"),
  collapsible: R().default(!0).describe("Whether filter panel is collapsible"),
  order: f().int().optional().describe("Display order")
}), By = j({
  field: p().describe("Field to sort by"),
  order: $l,
  label: p().optional().describe("Display label for sort option")
}), Ny = j({
  // Filter configuration
  availableFilters: ie(Vy).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: ie(p()).default(["cost", "material", "t"]).describe("Sortable fields"),
  defaultSort: By.default({
    field: "cost",
    order: "asc"
  }).describe("Default sort configuration"),
  // Display configuration
  displayMode: Dl.default("grid").describe("Default display mode"),
  itemsPerPage: f().int().positive().default(20).describe("Items per page for pagination"),
  // Feature toggles
  enableSearch: R().default(!0).describe("Enable search functionality"),
  // Selection behavior
  allowMultipleSelection: R().default(!0).describe("Allow multiple stock selection"),
  maxSelection: f().int().positive().optional().describe("Maximum number of stock items to select")
}), Gy = j({
  field: p(),
  value: ve(),
  type: Fl
});
j({
  // Active filters
  activeFilters: ie(Gy).default([]).describe("Currently active filters"),
  // Search
  searchQuery: p().default("").describe("Current search query"),
  // Sort
  sortBy: p().default("cost").describe("Current sort field"),
  sortOrder: $l.default("asc").describe("Current sort order"),
  // Display
  displayMode: Dl.default("grid").describe("Current display mode"),
  currentPage: f().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: ie(p()).default([]).describe("IDs of selected stock items")
});
function qy() {
  return Ny.parse({});
}
const zy = /* @__PURE__ */ Ye({
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
    return (i, s) => (w(), F(Ve, null, [
      e.item.issues?.filter((n) => n.type === "error")?.length ? (w(), F("div", {
        key: 0,
        class: "group issues",
        style: ht({
          "grid-column-end": "span " + e.numColumns
        })
      }, [
        L("pre", null, oe(e.item.issues.filter((n) => n.type === "error").flatMap((n) => I(Xi)(n.message)).join(`
`)), 1)
      ], 4)) : ae("", !0),
      e.item.issues?.filter((n) => n.type === "warning")?.length ? (w(), F("div", {
        key: 1,
        class: "group warnings",
        style: ht({
          "grid-column-end": "span " + e.numColumns
        })
      }, [
        L("pre", null, oe(e.item.issues.filter((n) => n.type === "warning").flatMap((n) => I(Xi)(n.message)).join(`
`)), 1)
      ], 4)) : ae("", !0)
    ], 64));
  }
}), Wy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: zy }, Symbol.toStringTag, { value: "Module" })), kt = {
  precisionFixed: Zc,
  format: Kc,
  select: mt,
  selectAll: eo,
  scaleLinear: jt,
  scaleSequential: ps,
  axisTop: Xr,
  axisBottom: Qs,
  axisRight: Qr,
  axisLeft: en,
  symbol: Yc,
  path: Uc,
  arc: Hc,
  symbolTriangle: Wc,
  symbolSquare: zc
};
class Hy {
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
  xScale = kt.scaleLinear();
  yScale = kt.scaleLinear();
  yScaleFlipped = kt.scaleLinear();
  measurementScale = kt.scaleLinear();
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
      if (this.el = kt.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = kt.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.longSide, this.shapeW = this.shape.shortSide, !this.svgCanvas)
        if (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null) {
          const e = this.el.append("svg").attr("class", "vis").attr("width", "100%").attr("height", "100%");
          if (e === null) return;
          this.svgCanvas = e;
        } else
          this.svgCanvas = kt.select(this.svgCanvas);
      this.loaded = !0;
    }
  }
  create() {
    if (!this.shape) return !1;
    const e = this.shouldShowAxes(), i = e ? this.edgePadding : 0, s = e ? this.edgePadding : 0, n = e ? this.axisPadding : 0, a = e ? this.axisPadding : 0;
    if (!this.shape.l || !this.shape.w || !this.w || !this.h || this.w - (i + n) < 0 || this.h - (a + s) < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createBanding(), e && (this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${a})`).attr("class", "axis x"), this.xAxis.call(
      kt.axisTop(this.xScale).ticks(10).tickSize(-this.h + (a + s))
    ), this.svgCanvas.selectAll(".axis.x .tick").each(function(r, o, l) {
      (o === 0 || o === l.length - 1) && kt.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - n}, 0)`).attr("class", "axis y"), this.yAxis.call(
      kt.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (i + n))
    ), this.svgCanvas.selectAll(".axis.y .tick").each(function(r, o, l) {
      (o === 0 || o === l.length - 1) && kt.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px"), console.log("Axes created:", { xAxis: !!this.xAxis, yAxis: !!this.yAxis })), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(e, i) {
    this.pointGroup.append("circle").attr("cx", this.xScale(e)).attr("cy", this.getYScale()(i)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    const e = this.shouldShowAxes(), i = e ? this.edgePadding : 0, s = e ? this.edgePadding : 0, n = e ? this.axisPadding : 0, a = e ? this.axisPadding : 0;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", i).attr("y", a).attr("width", this.w - (i + n)).attr("height", this.h - (a + s)), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", i).attr("y", a).attr("width", this.w - (i + n)).attr("height", this.h - (a + s)).style("fill", "url(#stripes)");
    const r = kt.path(), o = [], l = [];
    [0, 1, 2, 3].forEach((u) => {
      const h = this.shape.machining.getCorner(u);
      h && h.type ? (o.push(h.size ? K({ v: h.size ?? 0, o: this }) : 0), l.push(h.type)) : (o.push(0), l.push(null));
    });
    const c = (u, h, d, g, x) => {
      l[u] === "radius" ? r.arcTo(
        this.xScale(h),
        this.getYScale()(d),
        this.xScale(g),
        this.getYScale()(x),
        this.measurementScale(o[u])
      ) : l[u] === "bevel" ? r.lineTo(this.xScale(g), this.getYScale()(x)) : (r.lineTo(this.xScale(h), this.getYScale()(d)), r.lineTo(this.xScale(g), this.getYScale()(x)));
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
    for (const l of pi)
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
    const o = kt.path();
    [0, 1, 2, 3].forEach((l) => {
      const c = this.shape.machining.getCorner(l);
      if (!c?.type) return;
      let u, h, d;
      switch (l) {
        case 0:
          if (!Le(e.sides.a) || e.sides.a === !1) return;
          u = {
            x: this.xScale(0) - i,
            y: this.getYScale()(K({ v: c.size ?? 0, o: this }))
          }, h = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, d = {
            x: this.xScale(K({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? i : -i)
          };
          break;
        case 1:
          if (!Le(e.sides.b) || e.sides.b === !1) return;
          u = {
            x: this.xScale(this.shapeL - K({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? i : -i)
          }, h = {
            x: this.xScale(this.shapeL) - i,
            y: this.getYScale()(0)
          }, d = {
            x: this.xScale(this.shapeL) + i,
            y: this.getYScale()(K({ v: c.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!Le(e.sides.c) || e.sides.c === !1) return;
          u = {
            x: this.xScale(this.shapeL) + i,
            y: this.getYScale()(this.shapeW - K({ v: c.size ?? 0, o: this }))
          }, h = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, d = {
            x: this.xScale(this.shapeL - K({ v: c.size ?? 0, o: this })) - i,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? i : -i)
          };
          break;
        case 3:
          if (!Le(e.sides.d) || e.sides.d === !1) return;
          u = {
            x: this.xScale(K({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? i : -i)
          }, h = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, d = {
            x: this.xScale(0) - i,
            y: this.getYScale()(this.shapeW - K({ v: c.size ?? 0, o: this })) + i
          };
          break;
        default:
          return;
      }
      if (o.moveTo(u.x, u.y), c.type === "radius")
        switch (o.arcTo(
          h.x,
          h.y,
          d.x,
          d.y,
          this.measurementScale(c.size ?? 0)
        ), l) {
          case 0:
          case 2:
            o.lineTo(d.x + i, d.y);
            break;
          case 1:
          case 3:
            o.lineTo(d.x, d.y - (this.currentSide === 0 ? i : -1));
            break;
        }
      else c.type === "bevel" && o.lineTo(d.x, d.y);
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
        kt.axisRight(n).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (i + s))
      ), this.svgCanvas.selectAll(".axis.y .tick").each(function(a, r, o) {
        (r === 0 || r === o.length - 1) && kt.select(this).select("line").style("display", "none");
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
const Uy = { id: "machining" }, Yy = { class: "inputs" }, Ky = {
  key: 0,
  class: "debug"
}, Zy = {
  key: 1,
  class: "shape-name"
}, Jy = { class: "shape-dimensions" }, Xy = {
  key: 2,
  class: "sides-wrapper"
}, Qy = { class: "menu" }, eb = {
  key: 4,
  class: "button-wrapper"
}, tb = { class: "grid-table" }, ib = { class: "row table-heading" }, sb = {
  key: 0,
  class: "cell id"
}, nb = {
  key: 0,
  class: "cell"
}, ab = { class: "id" }, rb = { class: "cell" }, ob = ["onClick"], lb = {
  key: 6,
  class: "menu-prompt"
}, cb = !1, ub = /* @__PURE__ */ Ye({
  __name: "Machining",
  props: /* @__PURE__ */ ir({
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
  emits: /* @__PURE__ */ ir(["update:shape", "close"], ["update:inputShape"]),
  setup(t, { emit: e }) {
    const i = qi(() => Promise.resolve().then(() => Ba)), s = t, n = e, a = "production", r = le(), o = ne(() => Ll(te.value)), l = ne(() => {
      if (!h.value?.length) return 0;
      if (Ie.value === "banding") return 1;
      let de = Object.values(u.value).filter((he) => he.enabled).length;
      return de += 2, de;
    }), c = ne(() => {
      if (!h.value.length || Ie.value === "banding") return;
      const de = {
        id: "34px",
        del: "30px"
      }, he = [];
      return h.value.forEach((Me) => {
        const ce = u.value[Me];
        ce.enabled && he.push(ce.w ?? "1fr");
      }), he.unshift(de.id), he.push(de.del), he.join(" ");
    }), u = ne(() => !Ie.value || Ie.value === "banding" ? null : et[Ie.value]), h = ne(() => !Ie.value || Ie.value === "banding" ? [] : Object.keys(et[Ie.value]).filter((de) => et[Ie.value][de].enabled)), d = ne(() => Ie.value ? Y() : []), g = ne(() => {
      const de = te.value?.machining?.corners?.map((he) => he?.isPresent?.() ? he.getCorner() : null)?.filter((he) => he) ?? [];
      return [...pi, ...de];
    }), x = (de = !0) => {
      de ? ft.value = de : bt(() => ft.value = !1);
    }, V = () => {
      X(), Q(), z(), B();
    }, H = (de) => {
      if (Ie.value === "corners")
        switch (de) {
          case 0:
            return "a";
          case 1:
            return "b";
          case 2:
            return "c";
          case 3:
            return "d";
          default:
            return de;
        }
      return de + 1;
    }, A = () => Ie.value !== "banding", E = (de, he = null) => {
      if (!de?.length) return [];
      let Me = "None";
      he === "depth" && (Me = "Through");
      const ce = [{ label: Me, value: null }];
      return de.forEach((Oe) => {
        const P = Oe.toString().charAt(0).toUpperCase() + Oe.toString().slice(1);
        ce.push({ label: P, value: Oe });
      }), ce;
    }, Y = () => {
      if (!Ie.value) return [];
      if (Ie.value === "banding") return [];
      const de = te.value.machining[Ie.value];
      return Array.isArray(de) ? de : [de];
    };
    let O = null;
    const M = () => {
      if (!te.value || !r.value) {
        console.warn("Missing shape or diagram ref for vis initialization");
        return;
      }
      console.log("Initializing vis with diagramRef:", r.value), O = new Hy({
        HTMLElement: r.value,
        shape: te.value,
        vueComponent: null
      }), O.init(), O.updateSize(), dt.value = !0;
    }, N = hc(() => {
      dt.value && O && O.updateSize();
    }, 10);
    Kr(r, () => {
      N();
    });
    const D = () => {
      Je.value = Je.value === 0 ? 1 : 0, O.flip();
    }, k = () => {
      switch (Ie.value) {
        case "holes":
          $();
          break;
        case "hingeHoles":
          b();
          break;
        case "corners":
          Z();
          break;
      }
    }, $ = () => {
      te.value.machining.addHole({
        x: K({ v: te.value.longSide }) / 2,
        y: K({ v: te.value.shortSide }) / 2,
        diameter: s.options.holes.defaultDiameter ?? 1,
        depth: s.options.holes.defaultDepth ?? K({ v: te.value.t }) ?? 0,
        face: Je.value
      }), O.createHoles();
    }, b = () => {
      te.value.machining.addHingeHole({
        numHoles: 3,
        position: 0,
        diameter: s.options.holes.defaultDiameter ?? 0,
        depth: s.options.holes.defaultDepth ?? 0,
        side: "x1",
        face: Je.value,
        distanceFromEdge: s.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: s.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: s.options.hingeHoles.minimumHoleDistance,
        hingeLength: s.options.hingeHoles.defaultHingeLength
      }), O.createHingeHoles();
    }, Z = () => {
      const de = s.options.corners.types?.[0] || "radius", he = s.options.corners.minValue || 5;
      for (let Me = 0; Me < 4; Me++)
        te.value.machining.setCorner({
          index: Me,
          type: de,
          size: he
        });
      O.createCorners();
    }, X = () => {
      te.value.machining.holes.length = 0;
    }, Q = () => {
      te.value.machining.hingeHoles.length = 0;
    }, z = () => {
      te.value.machining.corners.forEach((de) => {
        de.size = null, de.type = null;
      }), te.value.banding.sides.a = !1, te.value.banding.sides.b = !1, te.value.banding.sides.c = !1, te.value.banding.sides.d = !1;
    }, B = () => {
      te.value.banding = {
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
    }, G = (de) => {
      switch (Ie.value) {
        case "holes":
          return te.value.machining.holes.splice(de, 1);
        case "hingeHoles":
          return te.value.machining.hingeHoles.splice(de, 1);
        case "corners":
          te.value.machining.corners[de].size = null, te.value.machining.corners[de].type = null;
          return;
      }
    }, q = () => {
      switch (Ie.value) {
        case "holes":
          return X();
        case "hingeHoles":
          return Q();
        case "corners":
          return z();
      }
    }, ee = () => {
      if (Xe.value = [], !!s.options.banding.enabled) {
        x();
        for (const de in te.value.banding.sides)
          te.value.banding.sides[de] ? s.options.banding.enableTypes && s.options.banding.types?.length && (te.value.banding.sides[de] || Xe.value.push({
            index: de,
            message: "Please select a type"
          })) : te.value.banding.sides[de] = "";
        x(!1);
      }
    }, U = (de) => {
      const he = Xe.value.filter((Me) => Me.index === de);
      return he.length ? he.map((Me) => Me.message) : [];
    }, we = (de) => {
      const he = Xe.value.filter((ce) => ce.index === de && ce?.fields), Me = he.flatMap((ce) => ce.fields);
      return he.length ? Me : [];
    }, me = (de, he) => {
      const Me = we(de);
      return Me?.length ? Me.includes(he) : !1;
    }, ke = () => n("close"), Ae = (de) => de && typeof de.disabled == "function" ? de.disabled : !1, te = fc(t, "inputShape");
    if (!te.value?.machining)
      throw new Error("Machining component requires a shape with machining initialized");
    const Be = le(!1), dt = le(!1), ft = le(!1), Je = le(0), Ie = le(null), Xe = le([]), et = Tt({
      holes: {
        x: {
          enabled: !0,
          type: "unitDependent",
          label: W("woodwork.x"),
          required: !0
        },
        y: {
          enabled: !0,
          type: "unitDependent",
          label: W("woodwork.y"),
          required: !0
        },
        diameter: {
          enabled: !0,
          type: s.options.holes.diameters?.length ? "select" : "unitDependent",
          label: W("machining.diameter"),
          output: s.options.holes.diameters?.length ? "float" : void 0,
          options: s.options.holes.diameters?.length ? E(s.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: s.options.holes.enableDepth && typeof te.value.t < "u" && K({ v: te.value.t }) > 0,
          required: !1,
          type: s.options.holes.depths?.length ? "select" : "unitDependent",
          output: s.options.holes.depths?.length ? "float" : void 0,
          options: s.options.holes.depths?.length ? E(s.options.holes.depths) : void 0
        },
        face: {
          required: !0,
          enabled: s.options.faces.enabled,
          type: "select",
          output: "integer",
          options: [
            {
              label: W("faces.a"),
              value: 0
            },
            {
              label: W("faces.a"),
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
          label: W("machining.hinge_length"),
          min: 0
        },
        outerSpacing: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: W("machining.outer_spacing"),
          min: 0
        },
        distanceFromEdge: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: W("machining.distance_from_edge"),
          min: 0
        },
        //[] separate option for hinges
        depth: {
          enabled: s.options.holes.enableDepth && typeof te.value.t < "u" && K({ v: te.value.t }) > 0,
          required: !1,
          type: s.options.holes.depths?.length ? "select" : "unitDependent",
          output: s.options.holes.depths?.length ? "float" : void 0,
          options: s.options.holes.depths?.length ? E(s.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: s.options.holes.diameters?.length ? "select" : "unitDependent",
          label: W("machining.diameter"),
          output: s.options.holes.diameters?.length ? "float" : void 0,
          options: s.options.holes.diameters?.length ? E(s.options.holes.diameters) : void 0
        },
        numHoles: {
          enabled: !0,
          required: !0,
          type: "integer",
          label: W("machining.num_holes"),
          min: 2
        },
        face: {
          enabled: s.options.faces.enabled,
          type: "select",
          required: !0,
          output: "integer",
          options: [
            {
              label: W("faces.a"),
              value: 0
            },
            {
              label: W("faces.b"),
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
              label: W("sides.w1"),
              value: "x1"
            },
            {
              label: W("sides.w2"),
              value: "x2"
            },
            {
              label: W("sides.l1"),
              value: "y1"
            },
            {
              label: W("sides.l2"),
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
          label: W("machining.type"),
          type: "select",
          output: "string",
          options: E(s.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: W("machining.size"),
          type: "unitDependent",
          min: () => typeof s.options.corners.minValue < "u" ? K({ v: s.options.corners.minValue, o: s.options }) : 0,
          max: () => typeof s.options.corners.maxValue < "u" ? K({ v: s.options.corners.maxValue, o: s.options }) : K({ v: te.value.shortSide, o: s.options }) / 2
        }
      }
    }), ye = Tt({
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
    }), At = (de) => {
      de.target === de.currentTarget && ke();
    }, St = () => !(!te?.value?.machining || !Be.value || ft.value);
    return Ue(() => te.value?.autoId, () => {
      St() && M();
    }), Ue(() => te.value?.id, () => {
      St() && M();
    }), Ue(Ie, (de) => {
      if (!St()) return;
      if (de === "banding") {
        x(), ee(), x(!1);
        return;
      }
      if (!de) {
        Xe.value = [];
        return;
      }
      x();
      const he = te.value.machining.validate(
        te.value,
        de,
        ye?.[de]
      );
      Xe.value = he?.map((Me, ce) => ({
        index: ce,
        message: Me.message || "Validation error",
        fields: Me.field || []
      })) || [], x(!1);
    }, { deep: !0, immediate: !0 }), Ue(() => te?.value?.machining?.holes, () => {
      if (!St()) return;
      x();
      const de = te.value.machining.validate(
        te.value,
        "holes",
        ye?.holes
      );
      Xe.value = de?.map((he, Me) => ({
        index: Me,
        message: he.message || "Validation error",
        fields: he.field || []
      })) || [], O.createHoles(), x(!1);
    }, { deep: !0, immediate: !0 }), Ue(() => te?.value?.machining?.hingeHoles, () => {
      if (!St()) return;
      x();
      const de = te.value.machining.validate(
        te.value,
        "hingeHoles",
        ye?.hingeHoles
      );
      Xe.value = de?.map((he, Me) => ({
        index: Me,
        message: he.message || "Validation error",
        fields: he.field || []
      })) || [], O.createHingeHoles(), x(!1);
    }, { deep: !0, immediate: !0 }), Ue(() => te?.value?.machining?.corners, () => {
      if (!St()) return;
      x();
      const de = te.value.machining.validate(
        te.value,
        "corners",
        ye?.corners
      );
      Xe.value = de?.map((he, Me) => ({
        index: Me,
        message: he.message || "Validation error",
        fields: he.field || []
      })) || [], te.value.machining.validate(te.value, "holes"), te.value.machining.validate(te.value, "hingeHoles"), O.createShape(), O.createHoles(), O.createHingeHoles();
      for (const he of te.value.machining.corners)
        te.value.banding && he?.getCorner && (te.value.banding.sides[he.getCorner()] = "");
      O.createBanding(), x(!1);
    }, { deep: !0, immediate: !0 }), Ue(() => te?.value?.banding, () => {
      St() && (ee(), O.createBanding());
    }, { deep: !0, immediate: !0 }), ti(() => {
      if (document.body.style.overflow = "hidden", !te.value || !te.value.l || !te.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      bt(() => M()), Be.value = !0;
    }), Ss(() => document.body.style.overflow = ""), (de, he) => {
      const Me = Ci("FontAwesomeIcon");
      return w(), De(va, { to: "body" }, [
        L("section", {
          id: "smartcut-machining",
          class: "smartcut-content",
          onClick: At
        }, [
          L("div", Uy, [
            L("div", Yy, [
              I(a) === "development" && cb ? (w(), F("div", Ky, [
                He(I(i), {
                  data: [te.value.machining],
                  paths: ["shape.machining"]
                }, null, 8, ["data"])
              ])) : ae("", !0),
              L("button", {
                class: "c-btn close",
                type: "button",
                onClick: he[0] || (he[0] = (ce) => ke())
              }, "×"),
              te.value?.name ? (w(), F("div", Zy, oe(te.value.name), 1)) : ae("", !0),
              L("div", Jy, oe(te.value?.l) + " x " + oe(te.value?.w) + " " + oe(te.value?.t ? "x " + te.value?.t : null), 1),
              t.options.faces.enabled ? (w(), F("div", Xy, [
                L("div", {
                  ref: "sides",
                  class: Re(["sides", { flipped: Je.value === 1 }]),
                  onClick: D
                }, [...he[6] || (he[6] = [
                  L("div", { class: "side-a" }, " A ", -1),
                  L("div", { class: "side-b" }, " B ", -1)
                ])], 2),
                he[7] || (he[7] = L("div", { class: "text" }, " [Click to flip] ", -1))
              ])) : ae("", !0),
              o.value ? (w(), F("button", {
                key: 3,
                class: "c-btn c-btn--delete",
                type: "button",
                onClick: V
              }, " Delete all machining ")) : ae("", !0),
              L("div", Qy, [
                t.options.holes.enabled ? (w(), F("div", {
                  key: 0,
                  class: Re({ selected: Ie.value === "holes" }),
                  onClick: he[1] || (he[1] = (ce) => Ie.value = "holes")
                }, " Holes ", 2)) : ae("", !0),
                t.options.hingeHoles.enabled ? (w(), F("div", {
                  key: 1,
                  class: Re({ selected: Ie.value === "hingeHoles" }),
                  onClick: he[2] || (he[2] = (ce) => Ie.value = "hingeHoles")
                }, " Hinge holes ", 2)) : ae("", !0),
                t.options.corners.enabled ? (w(), F("div", {
                  key: 2,
                  class: Re({ selected: Ie.value === "corners" }),
                  onClick: he[3] || (he[3] = (ce) => Ie.value = "corners")
                }, " Corners ", 2)) : ae("", !0),
                t.options.banding.enabled ? (w(), F("div", {
                  key: 3,
                  class: Re({ selected: Ie.value === "banding" }),
                  onClick: he[4] || (he[4] = (ce) => Ie.value = "banding")
                }, " Banding ", 2)) : ae("", !0)
              ]),
              Ie.value === "holes" || Ie.value === "hingeHoles" || Ie.value && Ie.value !== "banding" ? (w(), F("div", eb, [
                Ie.value === "holes" || Ie.value === "hingeHoles" || Ie.value === "corners" ? (w(), F("button", {
                  key: 0,
                  class: "c-btn",
                  type: "button",
                  onClick: k
                }, " Create ")) : ae("", !0),
                Ie.value && Ie.value !== "banding" ? (w(), F("button", {
                  key: 1,
                  class: "c-btn c-btn--delete",
                  type: "button",
                  onClick: q
                }, " Delete all ")) : ae("", !0)
              ])) : ae("", !0),
              L("div", tb, [
                Ie.value === "banding" && te.value ? (w(), De(Ks, {
                  key: 0,
                  shape: te.value,
                  "onUpdate:shape": he[5] || (he[5] = (ce) => te.value = ce),
                  "extra-type": "banding",
                  "extra-label": "Banding",
                  "extra-keys": g.value,
                  labels: t.options.banding.labels,
                  "all-options": t.options.banding.options,
                  "user-friendly-field-map": I(Qt),
                  "part-columns": 1,
                  "allow-custom-names": !0,
                  "enable-pricing": !0,
                  pricing: t.options.banding.pricing,
                  "get-price": t.getExtrasPrice,
                  "format-price": t.formatPrice,
                  "get-available-pricing-options": t.getAvailablePricingOptions
                }, null, 8, ["shape", "extra-keys", "labels", "all-options", "user-friendly-field-map", "pricing", "get-price", "format-price", "get-available-pricing-options"])) : ae("", !0)
              ]),
              Ie.value !== "banding" && d.value.length ? (w(), F("div", {
                key: 5,
                class: Re(["grid-table", Ie.value]),
                style: ht({ "grid-template-columns": c.value })
              }, [
                L("div", ib, [
                  A() ? (w(), F("div", sb)) : ae("", !0),
                  (w(!0), F(Ve, null, Qe(u.value, (ce, Oe) => ws((w(), F("div", {
                    key: Oe,
                    class: "cell"
                  }, oe(ce.label ?? Oe), 1)), [
                    [gn, ce.enabled]
                  ])), 128)),
                  he[8] || (he[8] = L("div", { class: "cell" }, null, -1))
                ]),
                (w(!0), F(Ve, null, Qe(d.value, (ce, Oe) => (w(), F("div", {
                  key: Oe,
                  class: "row"
                }, [
                  A() ? (w(), F("div", nb, [
                    L("div", ab, oe(H(Oe)), 1)
                  ])) : ae("", !0),
                  (w(!0), F(Ve, null, Qe(h.value, (P, T) => (w(), F("div", {
                    key: T,
                    class: "cell"
                  }, [
                    He(Ii, {
                      type: u.value[P].type,
                      id: P + "-" + T,
                      warning: me(Oe, P),
                      "enable-label": !1,
                      placeholder: u.value[P].label ?? P,
                      disabled: Ae(u.value[P]),
                      value: I(Si)(ce, P),
                      output: u.value[P].output,
                      options: u.value[P].options,
                      "onUpdate:value": (S) => I(ai)(ce, P, S)
                    }, null, 8, ["type", "id", "warning", "placeholder", "disabled", "value", "output", "options", "onUpdate:value"])
                  ]))), 128)),
                  L("div", rb, [
                    L("button", {
                      class: "c-btn delete",
                      type: "button",
                      onClick: (P) => G(Oe)
                    }, [
                      He(Me, { icon: ["fass", "trash"] })
                    ], 8, ob)
                  ]),
                  (w(!0), F(Ve, null, Qe(U(Oe), (P, T) => (w(), F("div", {
                    key: T,
                    class: "group validation",
                    style: ht({ "grid-column-end": "span " + l.value })
                  }, oe(P), 5))), 128))
                ]))), 128))
              ], 6)) : Ie.value ? ae("", !0) : (w(), F("div", lb, "Please select from the menu above"))
            ]),
            L("div", {
              id: "machining-diagram",
              class: Re(["diagram", { flipped: Je.value === 1 }]),
              ref_key: "diagramRef",
              ref: r
            }, null, 2)
          ])
        ])
      ]);
    };
  }
}), db = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: ub }, Symbol.toStringTag, { value: "Module" })), fb = {
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
      files: pc([])
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
function hb(t, e, i, s, n, a) {
  return w(), F("div", {
    id: "drop",
    class: Re({ thinking: i.thinking, [n.dropClass]: !0 }),
    onDrop: e[0] || (e[0] = Zr((...r) => a.onDrop && a.onDrop(...r), ["prevent"]))
  }, [
    L("div", null, oe(i.thinking ? "Loading, please wait..." : i.label), 1)
  ], 34);
}
const pb = /* @__PURE__ */ Mt(fb, [["render", hb]]), gb = { id: "import-file" }, mb = /* @__PURE__ */ Ye({
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
    const { addNotice: i } = mn(), s = t, n = e, a = le([]), r = le([]), o = le([]), l = le([]), c = le({}), u = le([]), h = le(!1), d = le(null), g = le(null), x = le({}), V = [
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
    ], H = ne(() => {
      if (Object.keys(x.value).length === a.value.length)
        return x.value;
      const B = {};
      return a.value.forEach((G, q) => {
        B[q] = {};
        for (const [ee, U] of Object.entries(G)) {
          if (!V.includes(ee)) continue;
          const we = Y(ee, U);
          (we === !0 || we === !1) && (B[q][ee] = we);
        }
      }), x.value = B, B;
    }), A = ne(() => s.customFields.map((B) => B.label)), E = (B, G) => {
      if (!G || Array.isArray(G) && G.length === 0 || typeof G == "object" && Object.keys(G).length === 0)
        return;
      const q = (Array.isArray(G), G), ee = (Array.isArray(q), Object.keys(q));
      if (ee.length === 0)
        return;
      const U = [[]];
      ee.forEach((me) => {
        const ke = q[me], Ae = [];
        U.forEach((te) => {
          Array.isArray(ke) && ke.forEach((Be) => Ae.push([...te, Be]));
        }), U.splice(0, U.length, ...Ae);
      });
      const we = /* @__PURE__ */ new Set();
      U.forEach((me) => we.add(me.join("|").toLowerCase())), B === "banding" ? d.value = we : g.value = we;
    }, Y = (B, G) => {
      if (G === "???") return !0;
      function q(U) {
        return U ? (U = U?.trim()?.toLowerCase(), U === "l" || U === "w") : !0;
      }
      const ee = {
        banding: (U) => O(U, d.value, "banding"),
        finish: (U) => O(U, g.value, "finish"),
        orientationLock: q
      };
      return B in ee ? ee[B](G) : null;
    }, O = (B, G, q) => {
      if (B = Z(B), !B) return !0;
      const ee = B.split(","), U = ee.every((we) => {
        if (!we) return !0;
        const me = we.toLowerCase();
        return G.has(me) ? !0 : Array.from(G).some((Ae) => Ae.startsWith(me + "|") || Ae === me);
      });
      if (!U) {
        const we = ee.filter((me) => {
          if (!me) return !1;
          const ke = me.toLowerCase();
          return G.has(ke) ? !1 : !Array.from(G).some((Ae) => Ae.startsWith(ke + "|") || Ae === ke);
        });
        console.log(`Valid ${q} choices...`), console.log(Array.from(G).join()), console.log(`The following ${q} choices are invalid`, we), i({
          type: "error",
          message: W("errors.validation.options_invalid", [W(`woodwork.${q}`).toLowerCase()]),
          additional: we
        });
      }
      return U;
    }, M = (B, G) => {
      const q = H.value[G]?.banding !== !1, ee = H.value[G]?.finish !== !1, U = !!B.banding, we = !!B.finish;
      if (!U && !we)
        return;
      const me = {};
      if (q && U) {
        const ke = Z(B.banding);
        if (ke) {
          const Ae = ke.split(","), te = ["l1", "l2", "w1", "w2"], Be = {};
          Ae.forEach((dt, ft) => {
            if (dt && dt.trim() && te[ft]) {
              const Je = dt.trim();
              if (Je.includes("|") && s.bandingLabels.length > 1) {
                const Ie = Je.split("|"), Xe = {};
                s.bandingLabels.forEach((et, ye) => {
                  Ie[ye] && (Xe[et] = Ie[ye]);
                }), Be[te[ft]] = Xe;
              } else
                Be[te[ft]] = Je;
            }
          }), Object.keys(Be).length > 0 && (me.banding = { sides: Be });
        }
      }
      if (ee && we) {
        const ke = Z(B.finish);
        if (ke) {
          const Ae = ke.split(","), te = ["a", "b"], Be = {};
          Ae.forEach((dt, ft) => {
            if (dt && dt.trim() && te[ft]) {
              const Je = dt.trim();
              if (Je.includes("|") && s.finishLabels.length > 1) {
                const Ie = Je.split("|"), Xe = {};
                s.finishLabels.forEach((et, ye) => {
                  Ie[ye] && (Xe[et] = Ie[ye]);
                }), Be[te[ft]] = Xe;
              } else
                Be[te[ft]] = Je;
            }
          }), Object.keys(Be).length > 0 && (me.finish = { faces: Be });
        }
      }
      return Object.keys(me).length > 0 ? me : void 0;
    }, N = () => a.value.map((B, G) => ({
      l: s.numberFormat === "decimal" ? qs(B.l) : B.l,
      w: s.numberFormat === "decimal" ? qs(B.w) : B.w,
      t: s.numberFormat === "decimal" ? qs(B.t) : B.t,
      q: typeof B.q == "string" ? parseInt(B.q, 10) : B.q,
      orientationLock: B.orientationLock,
      name: B.name,
      material: B.material,
      extras: M(B, G),
      customData: Q(B)
    })), D = (B) => {
      const G = B?.[0]?.data;
      G && Jc.parse(G, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (q) => k(q),
        error: () => n("error")
      });
    }, k = (B) => {
      r.value = B.data.filter((G) => G.some((q) => q)), o.value = r.value[0], c.value = {};
      for (let G = o.value.length; G--; ) {
        const q = o.value[G], ee = $(q);
        ee ? c.value[G] = ee : (c.value[G] = null, A.value.includes(q) && (c.value[G] = "customData." + s.customFields.find((U) => U.label === q).id));
      }
      b(), r.value.shift(), X(), z();
    }, $ = (B) => {
      const G = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", W("l"), W("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", W("w"), W("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", W("t"), W("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", W("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", W("quantity"), W("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", W("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", W("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", W("banding")],
        finish: ["finish", "paint"]
      }, q = Object.entries(G).reduce(
        (ee, [U, we]) => (we.some((me) => B && B.toLowerCase() === me) && ee.push(U), ee),
        []
      );
      return q.length > 1 ? null : q[0];
    }, b = () => {
      h.value = !1, l.value = Object.values(c.value).map((G) => !G || G === "N" ? null : V.includes(G) ? G : (h.value = !0, null));
      const B = l.value.filter((G, q) => l.value.indexOf(G) !== q);
      u.value = B.map((G) => l.value.reduce(
        (q, ee, U) => (ee && ee === G && q.push(U), q),
        []
      ));
    }, Z = (B) => B && B.replace(/\s*,\s*/g, ","), X = () => {
      const B = r.value.map((G) => {
        const q = {};
        return o.value.forEach((ee, U) => {
          if (u.value.flat().includes(U))
            return q[c.value[U]] = "???";
          q[c.value[U]] = G[U];
        }), q;
      });
      a.value = B;
    }, Q = (B) => {
      let G = {};
      for (let q in B)
        if (q.startsWith("customData.")) {
          let ee = q.slice(11);
          G[ee] = B[q];
        }
      return G;
    }, z = () => {
      const B = N();
      B?.length && n("import", B);
    };
    return ti(() => {
      E("banding", s.bandingOptions), E("finish", s.finishOptions);
    }), (B, G) => (w(), F("div", gb, [
      He(pb, {
        label: I(W)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: D
      }, null, 8, ["label"])
    ]));
  }
}), yb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: mb }, Symbol.toStringTag, { value: "Module" })), bb = {
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
}, vb = { class: "smartcut-object-viewer" }, wb = ["onClick"], Sb = { class: "toggle-icon" }, xb = { class: "path-label" }, kb = {
  key: 0,
  class: "object-properties"
}, Ib = {
  key: 0,
  class: "key"
}, Pb = {
  key: 1,
  class: "null-value"
}, Cb = { key: 2 };
function Ab(t, e, i, s, n, a) {
  const r = Ci("ObjectViewer", !0);
  return w(), F("div", vb, [
    (w(!0), F(Ve, null, Qe(i.data, (o, l) => (w(), F("div", {
      key: l,
      class: "array-item"
    }, [
      L("div", {
        class: "item-header",
        onClick: (c) => a.toggle(l)
      }, [
        L("div", Sb, oe(n.expanded[l] ? "▼" : "▶"), 1),
        L("div", xb, oe(i.paths[l] || l), 1)
      ], 8, wb),
      n.expanded[l] ? (w(), F("div", kb, [
        (w(!0), F(Ve, null, Qe(o, (c, u) => (w(), F("div", {
          key: u,
          class: "property-item"
        }, [
          !a.isObjectOrArray(c) || c === null || Array.isArray(c) ? (w(), F("div", Ib, oe(u) + ": ", 1)) : ae("", !0),
          L("div", {
            class: Re(["value", a.getValueType(c)])
          }, [
            a.isObjectOrArray(c) && c !== null ? (w(), De(r, {
              key: 0,
              data: Array.isArray(c) ? c : [c],
              paths: a.getArrayPaths(c, u),
              root: !1
            }, null, 8, ["data", "paths"])) : c === null ? (w(), F("span", Pb, "null")) : (w(), F("span", Cb, oe(a.formatValue(c)), 1))
          ], 2)
        ]))), 128))
      ])) : ae("", !0)
    ]))), 128))
  ]);
}
const Tb = /* @__PURE__ */ Mt(bb, [["render", Ab]]), Ba = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Tb }, Symbol.toStringTag, { value: "Module" })), Ob = {
  key: 0,
  class: "debug"
}, Lb = { id: "formula-pricing" }, Fb = {
  key: 1,
  class: "extras"
}, $b = { class: "heading" }, Db = { id: "hardware-total" }, Eb = { class: "heading panels" }, Mb = !1, _b = /* @__PURE__ */ Ye({
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
    const i = qi(() => Promise.resolve().then(() => Ba)), s = t, n = e, a = gc("calculator"), r = ne(() => a()), o = le("production");
    let l = null;
    const c = le(null), u = le([]), h = le(!1), d = le(""), g = ne(() => {
      if (!h.value || !u.value.length || u.value.every((D) => D.value === null)) return null;
      const N = Y();
      return bt(() => n("panel-result", N)), N;
    }), x = ne(() => {
      if (!r.value || !h.value || !u.value.length || u.value.every((D) => D.value === null)) return;
      const N = O();
      return bt(() => n("hardware-result", N, V.value)), N;
    }), V = ne(() => {
      if (x.value)
        return Object.values(x.value).reduce((N, D) => N + D.totalCost, 0);
    });
    Ue(g, (N) => {
      if (!h.value || !N || !r.value || !r.value?.inputShapes) return;
      const D = (b) => b?.name ? b.name.toLowerCase() : "", k = new Map(
        r.value.inputShapes.map((b) => [D(b), b])
      ), $ = /* @__PURE__ */ new Set();
      for (const b of Object.values(g.value)) {
        if (!b.name) continue;
        const Z = D(b), X = k.get(Z), Q = {
          ...b,
          name: b.name.toUpperCase() || X?.name.toUpperCase(),
          material: b.material?.toUpperCase() || X?.material?.toUpperCase(),
          bandingOptions: b.bandingOptions || {},
          finishOptions: b.finishOptions || {},
          orientationLock: b.orientationLock || null,
          notes: d.value,
          readonly: !0
        }, z = X || r.value.createInputShape(Q);
        if (X) {
          Object.assign(X, Q);
          for (const B of ["banding", "finish"])
            r.value.initExtrasOptions(X, B);
        } else
          r.value.inputShapes.push(z);
        $.add(Z);
      }
      r.value.inputShapes = r.value.inputShapes.filter(
        (b) => $.has(D(b))
      );
    }, { immediate: !1 }), ti(() => M());
    const H = (N) => {
      s.debug && console.log(N);
    }, A = () => {
      u.value = Object.values(c.value.inputs).map((N) => ({
        value: N.default ?? null
      })), console.log(u.value);
    }, E = (N, D) => {
      u.value[N] && (u.value[N].value = D);
    }, Y = () => {
      try {
        return l.calculatePanelsFromFields(u.value);
      } catch (N) {
        return r.value.inputShapes.length = 0, console.error(N), null;
      }
    }, O = () => {
      try {
        return l.calculateHardwareFromFields(u.value);
      } catch (N) {
        return console.error(N), null;
      }
    }, M = async () => {
      if (!s.url && !s.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      s.url ? (H(`SmartCut - Formula calculator init from url: ${s.url}`), l = new ba({ url: s.url }), c.value = await l.getSpec()) : s.spec && (H("SmartCut - Formula calculator init with JSON"), l = new ba({ spec: s.spec }), c.value = await l.getSpec()), A(), h.value = !0;
    };
    return (N, D) => (w(), F(Ve, null, [
      o.value === "development" && Mb ? (w(), F("div", Ob, [
        D[1] || (D[1] = L("div", null, "Developer information", -1)),
        He(I(i), {
          data: [g.value],
          paths: ["panelResult"]
        }, null, 8, ["data"])
      ])) : ae("", !0),
      L("div", Lb, [
        c.value?.projectName ? (w(), De(Ii, {
          key: 0,
          id: "project-name",
          type: "string",
          label: "Project name",
          placeholder: "Name",
          value: d.value,
          "onUpdate:value": D[0] || (D[0] = (k) => d.value = k)
        }, null, 8, ["value"])) : ae("", !0),
        (w(!0), F(Ve, null, Qe(c.value?.inputs, (k, $, b) => (w(), De(Ii, {
          id: "formula-field-" + b,
          key: b,
          type: k.type,
          label: k.label,
          placeholder: k.label,
          min: k.min ?? 0,
          max: k.max ?? null,
          default: k.default ?? 0,
          value: u.value[b]?.value,
          "onUpdate:value": (Z) => E(b, Z)
        }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]))), 128)),
        x.value ? (w(), F("div", Fb, [
          L("div", $b, oe(I(W)("Hardware")), 1),
          (w(!0), F(Ve, null, Qe(x.value, (k, $) => (w(), F("div", { key: $ }, oe(k.name) + " x" + oe(k.q) + " = " + oe(t.formatPrice(k.totalCost)), 1))), 128)),
          L("div", Db, oe(I(W)("Hardware total")) + " = " + oe(t.formatPrice(V.value)), 1)
        ])) : ae("", !0),
        L("div", Eb, oe(I(W)("Panels")), 1)
      ])
    ], 64));
  }
}), TS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: _b }, Symbol.toStringTag, { value: "Module" })), Rb = {
  id: "smartcut-notices",
  class: "smartcut-content"
}, jb = { class: "content" }, Vb = ["onClick"], Bb = ["innerHTML"], Nb = /* @__PURE__ */ Ye({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(t) {
    const e = t, { notices: i, dismissNotice: s } = mn(), n = le({}), a = ne(() => e.position.includes("right") ? "notice-right" : "notice-left");
    return (r, o) => {
      const l = Ci("FontAwesomeIcon");
      return w(), De(va, { to: "body" }, [
        L("div", Rb, [
          He(mc, {
            name: a.value,
            "move-class": "notice-move",
            tag: "div",
            class: Re(["notices-container", e.position])
          }, {
            default: $i(() => [
              (w(!0), F(Ve, null, Qe(I(i), (c) => (w(), F("div", {
                key: c.id,
                ref_for: !0,
                ref: (u) => {
                  u && (n.value[c.id] = u);
                },
                class: Re([
                  "notice",
                  `notice--${c.type}`
                ])
              }, [
                L("div", jb, [
                  L("div", {
                    class: "message",
                    onClick: (u) => c.action()
                  }, oe(c.message), 9, Vb),
                  L("div", {
                    class: "additional-info",
                    innerHTML: c.additional
                  }, null, 8, Bb)
                ]),
                c.persistent ? ae("", !0) : (w(), De(l, {
                  key: 0,
                  icon: ["fass", "trash"],
                  class: "dismiss",
                  onClick: (u) => I(s)(c.id)
                }, null, 8, ["onClick"]))
              ], 2))), 128))
            ]),
            _: 1
          }, 8, ["name", "class"])
        ])
      ]);
    };
  }
}), OS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Nb }, Symbol.toStringTag, { value: "Module" })), Gb = { class: "stock-filter-search" }, qb = { class: "search-input-wrapper" }, zb = ["placeholder"], Wb = /* @__PURE__ */ Ye({
  __name: "StockFilterSearch",
  props: {
    modelValue: {},
    placeholder: { default: "Search materials, colors, tags..." },
    debounce: { default: 300 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = le(i.modelValue);
    let a = null;
    Ue(() => i.modelValue, (l) => {
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
    return (l, c) => (w(), F("div", Gb, [
      L("div", qb, [
        ws(L("input", {
          "onUpdate:modelValue": c[0] || (c[0] = (u) => n.value = u),
          type: "text",
          class: "search-input",
          placeholder: t.placeholder,
          onInput: r
        }, null, 40, zb), [
          [yc, n.value]
        ]),
        n.value ? (w(), F("button", {
          key: 0,
          type: "button",
          class: "search-clear",
          onClick: o
        }, " × ")) : ae("", !0)
      ])
    ]));
  }
}), Hb = /* @__PURE__ */ Mt(Wb, [["__scopeId", "data-v-f780d286"]]), Ub = { class: "filter-panel-header" }, Yb = { class: "filter-panel-title" }, Kb = { class: "filter-panel-content" }, Zb = {
  key: 0,
  class: "filter-summary"
}, Jb = { class: "filter-summary__count" }, Xb = { class: "filter-groups" }, Qb = { class: "filter-group__header" }, ev = { class: "filter-group__label" }, tv = { class: "filter-group__content" }, iv = {
  key: 0,
  class: "filter-select"
}, sv = ["checked", "onChange"], nv = ["value", "onChange"], av = { value: "" }, rv = ["value"], ov = {
  key: 1,
  class: "filter-range"
}, lv = { class: "filter-range__inputs" }, cv = ["value", "min", "max", "step", "onInput"], uv = ["value", "min", "max", "step", "onInput"], dv = {
  key: 2,
  class: "filter-boolean"
}, fv = { class: "filter-checkbox" }, hv = ["checked", "onChange"], pv = /* @__PURE__ */ Ye({
  __name: "StockFilterPanel",
  props: {
    filterConfigs: {},
    activeFilters: {},
    getUniqueValues: { type: Function },
    getFieldRange: { type: Function }
  },
  emits: ["apply-filter", "remove-filter", "clear-filters"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = le(!0), a = le({}), r = ne(() => i.activeFilters.length);
    function o() {
      n.value = !n.value;
    }
    function l(E) {
      return {
        material: W("woodwork.material"),
        t: W("woodwork.thickness") + " (mm)",
        cost: W("stockFilter.price"),
        color: W("fields.color"),
        l: W("woodwork.length"),
        w: W("woodwork.width"),
        weight: W("fields.weight"),
        name: W("fields.name"),
        category: W("general.category"),
        leadTime: W("stockFilter.lead_time")
      }[E.field] || E.label;
    }
    function c(E) {
      return E.options?.length ? E.options : i.getUniqueValues(E.field).map((O) => E.field === "color" && typeof O == "object" && O !== null ? "name" in O && O.name ? {
        label: O.name,
        value: O
      } : {
        label: O.hex || String(O),
        value: O
      } : {
        label: String(O),
        value: O
      });
    }
    function u(E) {
      return i.activeFilters.find((O) => O.field === E)?.value;
    }
    function h(E, Y) {
      const O = u(E);
      return Array.isArray(O) ? E === "color" && typeof Y == "object" && Y !== null && "hex" in Y ? O.some(
        (M) => typeof M == "object" && M !== null && "hex" in M && M.hex === Y.hex
      ) : O.includes(Y) : E === "color" && typeof Y == "object" && Y !== null && "hex" in Y ? typeof O == "object" && O !== null && "hex" in O && O.hex === Y.hex : O === Y;
    }
    function d(E, Y) {
      const M = Y.target.value;
      M === "" ? s("remove-filter", E) : s("apply-filter", E, M, "select");
    }
    function g(E, Y, O) {
      const M = O.target, N = u(E) || [], D = Array.isArray(N) ? [...N] : [];
      if (M.checked)
        D.includes(Y) || D.push(Y);
      else {
        const k = D.indexOf(Y);
        k !== -1 && D.splice(k, 1);
      }
      D.length === 0 ? s("remove-filter", E) : s("apply-filter", E, D, "multiselect");
    }
    function x(E, Y) {
      if (a.value[E]?.[Y] !== void 0)
        return a.value[E][Y];
      const O = i.activeFilters.find((M) => M.field === E);
      if (O?.value && typeof O.value == "object")
        return O.value[Y];
    }
    function V(E, Y, O) {
      const M = O.target, N = M.value ? Number(M.value) : void 0;
      a.value[E] || (a.value[E] = {}), a.value[E][Y] = N;
      const D = a.value[E].min, k = a.value[E].max;
      D !== void 0 || k !== void 0 ? s("apply-filter", E, { min: D, max: k }, "range") : s("remove-filter", E);
    }
    function H(E, Y) {
      Y.target.checked ? s("apply-filter", E, !0, "boolean") : s("remove-filter", E);
    }
    function A() {
      a.value = {}, s("clear-filters");
    }
    return (E, Y) => (w(), F("div", {
      class: Re(["stock-filter-panel", { "stock-filter-panel--open": n.value }])
    }, [
      L("div", Ub, [
        L("h3", Yb, oe(I(W)("stockFilter.filters")), 1),
        L("button", {
          type: "button",
          class: "filter-panel-toggle",
          onClick: o
        }, oe(n.value ? "−" : "+"), 1)
      ]),
      He(bc, { name: "filter-panel-content" }, {
        default: $i(() => [
          ws(L("div", Kb, [
            r.value > 0 ? (w(), F("div", Zb, [
              L("span", Jb, oe(I(W)("stockFilter.active_filters", [r.value])), 1),
              L("button", {
                type: "button",
                class: "filter-summary__clear",
                onClick: A
              }, oe(I(W)("stockFilter.clear_all")), 1)
            ])) : ae("", !0),
            L("div", Xb, [
              (w(!0), F(Ve, null, Qe(t.filterConfigs, (O) => (w(), F("div", {
                key: O.field,
                class: "filter-group"
              }, [
                L("div", Qb, [
                  L("label", ev, oe(l(O)), 1)
                ]),
                L("div", tv, [
                  O.type === "select" || O.type === "multiselect" ? (w(), F("div", iv, [
                    O.type === "multiselect" ? (w(!0), F(Ve, { key: 0 }, Qe(c(O), (M) => (w(), F("label", {
                      key: M.value,
                      class: "filter-checkbox"
                    }, [
                      L("input", {
                        checked: h(O.field, M.value),
                        type: "checkbox",
                        onChange: (N) => g(O.field, M.value, N)
                      }, null, 40, sv),
                      L("span", null, oe(M.label), 1)
                    ]))), 128)) : (w(), F("select", {
                      key: 1,
                      value: u(O.field),
                      class: "filter-select-input",
                      onChange: (M) => d(O.field, M)
                    }, [
                      L("option", av, oe(I(W)("stockFilter.all")), 1),
                      (w(!0), F(Ve, null, Qe(c(O), (M) => (w(), F("option", {
                        key: M.value,
                        value: M.value
                      }, oe(M.label), 9, rv))), 128))
                    ], 40, nv))
                  ])) : O.type === "range" ? (w(), F("div", ov, [
                    L("div", lv, [
                      L("input", {
                        value: x(O.field, "min"),
                        min: O.min,
                        max: O.max,
                        step: O.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Min",
                        onInput: (M) => V(O.field, "min", M)
                      }, null, 40, cv),
                      Y[0] || (Y[0] = L("span", { class: "filter-range__separator" }, "–", -1)),
                      L("input", {
                        value: x(O.field, "max"),
                        min: O.min,
                        max: O.max,
                        step: O.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Max",
                        onInput: (M) => V(O.field, "max", M)
                      }, null, 40, uv)
                    ])
                  ])) : O.type === "boolean" ? (w(), F("div", dv, [
                    L("label", fv, [
                      L("input", {
                        checked: u(O.field) === !0,
                        type: "checkbox",
                        onChange: (M) => H(O.field, M)
                      }, null, 40, hv),
                      L("span", null, oe(O.label), 1)
                    ])
                  ])) : ae("", !0)
                ])
              ]))), 128))
            ])
          ], 512), [
            [gn, n.value]
          ])
        ]),
        _: 1
      })
    ], 2));
  }
}), gv = /* @__PURE__ */ Mt(pv, [["__scopeId", "data-v-0bf41a2d"]]), mv = { class: "stock-filter-sort" }, yv = { class: "sort-controls" }, bv = { class: "sort-label" }, vv = ["value"], wv = ["value"], Sv = ["title"], xv = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, kv = {
  key: 0,
  d: "M8 3l4 5H4z"
}, Iv = {
  key: 1,
  d: "M8 13l4-5H4z"
}, Pv = /* @__PURE__ */ Ye({
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
        cost: W("stockFilter.price"),
        material: W("woodwork.material"),
        t: W("woodwork.thickness"),
        l: W("woodwork.length"),
        w: W("woodwork.width"),
        pricePerKg: W("stockFilter.price") + " per kg",
        pricePerM2: W("stockFilter.price") + " per m²",
        weight: W("fields.weight"),
        name: W("fields.name"),
        leadTime: W("stockFilter.lead_time")
      }[l] || l.charAt(0).toUpperCase() + l.slice(1);
    }
    function r(l) {
      const c = l.target;
      s("update:sortBy", c.value);
    }
    function o() {
      s("update:sortOrder", i.sortOrder === "asc" ? "desc" : "asc");
    }
    return (l, c) => (w(), F("div", mv, [
      L("div", yv, [
        L("label", bv, oe(I(W)("stockFilter.sort_by")) + ":", 1),
        L("select", {
          value: t.sortBy,
          class: "sort-select",
          onChange: r
        }, [
          (w(!0), F(Ve, null, Qe(I(n), (u) => (w(), F("option", {
            key: u.value,
            value: u.value
          }, oe(u.label), 9, wv))), 128))
        ], 40, vv),
        L("button", {
          type: "button",
          class: Re(["sort-order-btn", { "sort-order-btn--desc": t.sortOrder === "desc" }]),
          title: t.sortOrder === "asc" ? I(W)("options.by_dimensions") : I(W)("options.by_dimensions"),
          onClick: o
        }, [
          (w(), F("svg", xv, [
            t.sortOrder === "asc" ? (w(), F("path", kv)) : (w(), F("path", Iv))
          ]))
        ], 10, Sv)
      ])
    ]));
  }
}), Cv = /* @__PURE__ */ Mt(Pv, [["__scopeId", "data-v-6e437deb"]]), Av = { class: "stock-filter-results" }, Tv = { class: "results-header" }, Ov = { class: "results-info" }, Lv = { class: "results-count" }, Fv = { class: "results-controls" }, $v = { class: "display-mode-toggle" }, Dv = ["title"], Ev = ["title"], Mv = {
  key: 0,
  class: "results-loading"
}, _v = {
  key: 1,
  class: "results-empty"
}, Rv = { class: "empty-message" }, jv = {
  key: 3,
  class: "results-pagination"
}, Vv = ["disabled"], Bv = { class: "pagination-pages" }, Nv = ["onClick"], Gv = ["disabled"], qv = /* @__PURE__ */ Ye({
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
    const e = t, i = ne(() => {
      const s = [], a = Math.floor(2.5);
      let r = Math.max(1, e.currentPage - a), o = Math.min(e.totalPages, r + 5 - 1);
      o === e.totalPages && (r = Math.max(1, o - 5 + 1));
      for (let l = r; l <= o; l++)
        s.push(l);
      return s;
    });
    return (s, n) => (w(), F("div", Av, [
      L("div", Tv, [
        L("div", Ov, [
          L("span", Lv, oe(t.totalResults) + " " + oe(t.totalResults === 1 ? I(W)("stockFilter.result_one") : I(W)("stockFilter.result_other")), 1)
        ]),
        L("div", Fv, [
          L("div", $v, [
            L("button", {
              type: "button",
              class: Re(["display-mode-btn", { "display-mode-btn--active": t.displayMode === "grid" }]),
              title: I(W)("stockFilter.grid_view"),
              onClick: n[0] || (n[0] = (a) => s.$emit("update:displayMode", "grid"))
            }, [...n[5] || (n[5] = [
              Jr('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-cbba2130><rect x="1" y="1" width="6" height="6" data-v-cbba2130></rect><rect x="9" y="1" width="6" height="6" data-v-cbba2130></rect><rect x="1" y="9" width="6" height="6" data-v-cbba2130></rect><rect x="9" y="9" width="6" height="6" data-v-cbba2130></rect></svg>', 1)
            ])], 10, Dv),
            L("button", {
              type: "button",
              class: Re(["display-mode-btn", { "display-mode-btn--active": t.displayMode === "list" }]),
              title: I(W)("stockFilter.list_view"),
              onClick: n[1] || (n[1] = (a) => s.$emit("update:displayMode", "list"))
            }, [...n[6] || (n[6] = [
              L("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                L("rect", {
                  x: "1",
                  y: "1",
                  width: "14",
                  height: "2"
                }),
                L("rect", {
                  x: "1",
                  y: "7",
                  width: "14",
                  height: "2"
                }),
                L("rect", {
                  x: "1",
                  y: "13",
                  width: "14",
                  height: "2"
                })
              ], -1)
            ])], 10, Ev)
          ])
        ])
      ]),
      t.loading ? (w(), F("div", Mv, [
        n[7] || (n[7] = L("div", { class: "spinner" }, null, -1)),
        L("p", null, oe(I(W)("actions.loading")) + "...", 1)
      ])) : t.totalResults === 0 ? (w(), F("div", _v, [
        n[8] || (n[8] = L("svg", {
          width: "64",
          height: "64",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2"
        }, [
          L("circle", {
            cx: "12",
            cy: "12",
            r: "10"
          }),
          L("line", {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "12"
          }),
          L("line", {
            x1: "12",
            y1: "16",
            x2: "12.01",
            y2: "16"
          })
        ], -1)),
        L("p", Rv, oe(I(W)("stockFilter.no_results")), 1),
        t.hasActiveFilters ? (w(), F("button", {
          key: 0,
          type: "button",
          class: "clear-filters-btn",
          onClick: n[2] || (n[2] = (a) => s.$emit("clear-filters"))
        }, oe(I(W)("stockFilter.clear_filters")), 1)) : ae("", !0)
      ])) : (w(), F("div", {
        key: 2,
        class: Re(["results-grid", { "results-grid--list": t.displayMode === "list" }])
      }, [
        Xs(s.$slots, "default", {}, void 0, !0)
      ], 2)),
      t.totalPages > 1 ? (w(), F("div", jv, [
        L("button", {
          type: "button",
          class: "pagination-btn",
          disabled: t.currentPage === 1,
          onClick: n[3] || (n[3] = (a) => s.$emit("go-to-page", t.currentPage - 1))
        }, oe(I(W)("pagination.previous")), 9, Vv),
        L("div", Bv, [
          (w(!0), F(Ve, null, Qe(i.value, (a) => (w(), F("button", {
            key: a,
            type: "button",
            class: Re(["pagination-page", { "pagination-page--active": a === t.currentPage }]),
            onClick: (r) => s.$emit("go-to-page", a)
          }, oe(a), 11, Nv))), 128))
        ]),
        L("button", {
          type: "button",
          class: "pagination-btn",
          disabled: t.currentPage === t.totalPages,
          onClick: n[4] || (n[4] = (a) => s.$emit("go-to-page", t.currentPage + 1))
        }, oe(I(W)("pagination.next")), 9, Gv)
      ])) : ae("", !0)
    ]));
  }
}), zv = /* @__PURE__ */ Mt(qv, [["__scopeId", "data-v-cbba2130"]]), Wv = {
  key: 0,
  class: "stock-filter-card__image"
}, Hv = ["src", "alt"], Uv = { class: "stock-filter-card__content" }, Yv = { class: "stock-filter-card__title" }, Kv = { class: "stock-filter-card__specs" }, Zv = { class: "spec" }, Jv = { class: "spec__label" }, Xv = { class: "spec__value" }, Qv = { class: "spec" }, ew = { class: "spec__label" }, tw = { class: "spec__value" }, iw = {
  key: 0,
  class: "spec"
}, sw = { class: "spec__label" }, nw = { class: "spec__value spec__value--color" }, aw = {
  key: 1,
  class: "spec"
}, rw = { class: "spec__label" }, ow = { class: "spec__value" }, lw = {
  key: 0,
  class: "stock-filter-card__description"
}, cw = { class: "stock-filter-card__footer" }, uw = {
  key: 0,
  class: "stock-filter-card__price"
}, dw = { class: "price__label" }, fw = { class: "price__value" }, hw = ["disabled"], pw = {
  key: 1,
  class: "stock-filter-card__lead-time"
}, gw = /* @__PURE__ */ Ye({
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
    const i = t, s = e, n = ne(() => i.stock.available !== !1), a = ne(() => i.stock.cost ? i.formatPrice(i.stock.cost, i.locale) : "N/A"), r = ne(() => i.stock.color ? typeof i.stock.color == "object" && "hex" in i.stock.color ? i.stock.color.hex : typeof i.stock.color == "string" ? i.stock.color : "" : ""), o = ne(() => i.stock.color ? typeof i.stock.color == "object" && "name" in i.stock.color ? i.stock.color.name : typeof i.stock.color == "string" ? i.stock.color : "" : ""), l = ne(() => ({
      "--btn-color": i.buttonTextColor,
      "--btn-bg": i.buttonColor,
      "--btn-hover-bg": c(i.buttonColor, -8)
    }));
    function c(h, d) {
      const g = h.replace("#", ""), x = parseInt(g, 16), V = Math.round(2.55 * d), H = (x >> 16) + V, A = (x >> 8 & 255) + V, E = (x & 255) + V;
      return `#${(16777216 + (H < 255 ? H < 1 ? 0 : H : 255) * 65536 + (A < 255 ? A < 1 ? 0 : A : 255) * 256 + (E < 255 ? E < 1 ? 0 : E : 255)).toString(16).slice(1)}`;
    }
    function u() {
      s("toggle-selection", i.stock);
    }
    return (h, d) => (w(), F("div", {
      class: Re(["stock-filter-card", {
        "stock-filter-card--selected": t.isSelected,
        "stock-filter-card--unavailable": !n.value
      }])
    }, [
      t.stock.imageUrl ? (w(), F("div", Wv, [
        L("img", {
          src: t.stock.imageUrl,
          alt: t.stock.name || t.stock.name || t.stock.material,
          loading: "lazy"
        }, null, 8, Hv)
      ])) : ae("", !0),
      L("div", Uv, [
        L("h3", Yv, oe(t.stock.name || t.stock.name || `${t.stock.material} ${t.stock.l}×${t.stock.w}`), 1),
        L("div", Kv, [
          L("div", Zv, [
            L("span", Jv, oe(I(W)("woodwork.material")) + ":", 1),
            L("span", Xv, oe(t.stock.material || I(W)("general.na")), 1)
          ]),
          L("div", Qv, [
            L("span", ew, oe(I(W)("stockFilter.dimensions")) + ":", 1),
            L("span", tw, oe(t.stock.l) + " × " + oe(t.stock.w) + oe(t.stock.t ? ` × ${t.stock.t}mm` : ""), 1)
          ]),
          t.stock.color ? (w(), F("div", iw, [
            L("span", sw, oe(I(W)("fields.color")) + ":", 1),
            L("span", nw, [
              L("span", {
                class: "color-swatch",
                style: ht({ backgroundColor: r.value })
              }, null, 4),
              hs(" " + oe(o.value), 1)
            ])
          ])) : ae("", !0),
          t.stock.weight ? (w(), F("div", aw, [
            L("span", rw, oe(I(W)("fields.weight")) + ":", 1),
            L("span", ow, oe(t.stock.weight) + " kg", 1)
          ])) : ae("", !0)
        ]),
        t.stock.description ? (w(), F("div", lw, oe(t.stock.description), 1)) : ae("", !0),
        L("div", cw, [
          t.stock.cost ? (w(), F("div", uw, [
            L("span", dw, oe(I(W)("stockFilter.price")) + ":", 1),
            L("span", fw, oe(a.value), 1)
          ])) : ae("", !0),
          L("button", {
            type: "button",
            class: Re(["stock-filter-card__btn", { "stock-filter-card__btn--selected": t.isSelected }]),
            style: ht(l.value),
            disabled: !n.value,
            onClick: u
          }, oe(t.isSelected ? I(W)("stockFilter.remove") : n.value ? I(W)("stockFilter.select") : I(W)("stockFilter.unavailable")), 15, hw)
        ]),
        t.stock.leadTime ? (w(), F("div", pw, oe(I(W)("stockFilter.lead_time_days", [t.stock.leadTime])), 1)) : ae("", !0)
      ])
    ], 2));
  }
}), mw = /* @__PURE__ */ Mt(gw, [["__scopeId", "data-v-e7d07bd6"]]), yw = { class: "stock-filter" }, bw = /* @__PURE__ */ Ye({
  __name: "StockFilter",
  props: {
    stockOptions: {
      type: Array,
      required: !0
    },
    config: {
      type: Object,
      default: () => qy()
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
    const s = t, n = i, a = le(s.stockOptions), r = le(s.config), o = le(s.numberFormat), {
      activeFilters: l,
      searchQuery: c,
      sortBy: u,
      sortOrder: h,
      displayMode: d,
      currentPage: g,
      filteredStock: x,
      paginatedStock: V,
      selectedStock: H,
      totalPages: A,
      applyFilter: E,
      removeFilter: Y,
      clearFilters: O,
      goToPage: M,
      toggleStockSelection: N,
      isStockSelected: D,
      clearSelection: k,
      createInputStock: $,
      getUniqueValues: b,
      getFieldRange: Z
    } = qc({
      stockOptions: a,
      config: r,
      numberFormat: o
    }), X = ne(() => s.config.availableFilters.filter((B) => {
      const G = b(B.field);
      return G.length > 0 && G.some((q) => q != null);
    }));
    ne(() => ({
      "--btn-color": s.colors.buttonText,
      "--btn-bg": s.colors.button,
      "--btn-hover-bg": Q(s.colors.button, -8)
    }));
    function Q(B, G) {
      const q = B.replace("#", ""), ee = parseInt(q, 16), U = Math.round(2.55 * G), we = (ee >> 16) + U, me = (ee >> 8 & 255) + U, ke = (ee & 255) + U;
      return `#${(16777216 + (we < 255 ? we < 1 ? 0 : we : 255) * 65536 + (me < 255 ? me < 1 ? 0 : me : 255) * 256 + (ke < 255 ? ke < 1 ? 0 : ke : 255)).toString(16).slice(1)}`;
    }
    function z(B) {
      const G = D(B);
      if (N(B), G) {
        const q = $(B);
        n("stock-removed", q);
      } else {
        const q = $(B);
        n("stock-added", [q]);
      }
    }
    return e({
      applyFilter: E,
      removeFilter: Y,
      clearFilters: O,
      clearSelection: k,
      selectedStock: H,
      filteredStock: x,
      getUniqueValues: b,
      getFieldRange: Z
    }), (B, G) => (w(), F("div", yw, [
      t.config.enableSearch ? (w(), De(Hb, {
        key: 0,
        modelValue: I(c),
        "onUpdate:modelValue": G[0] || (G[0] = (q) => Nn(c) ? c.value = q : null)
      }, null, 8, ["modelValue"])) : ae("", !0),
      X.value.length > 0 ? (w(), De(gv, {
        key: 1,
        "filter-configs": X.value,
        "active-filters": I(l),
        "get-unique-values": I(b),
        "get-field-range": I(Z),
        onApplyFilter: I(E),
        onRemoveFilter: I(Y),
        onClearFilters: I(O)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : ae("", !0),
      t.config.sortOptions.length > 0 ? (w(), De(Cv, {
        key: 2,
        "sort-by": I(u),
        "onUpdate:sortBy": G[1] || (G[1] = (q) => Nn(u) ? u.value = q : null),
        "sort-order": I(h),
        "onUpdate:sortOrder": G[2] || (G[2] = (q) => Nn(h) ? h.value = q : null),
        "available-fields": t.config.sortOptions
      }, null, 8, ["sort-by", "sort-order", "available-fields"])) : ae("", !0),
      He(zv, {
        "total-results": I(V).length,
        "display-mode": I(d),
        loading: t.loading,
        "has-active-filters": I(l).length > 0,
        "current-page": I(g),
        "total-pages": I(A),
        "onUpdate:displayMode": G[3] || (G[3] = (q) => d.value = q),
        onClearFilters: I(O),
        onGoToPage: I(M)
      }, {
        default: $i(() => [
          (w(!0), F(Ve, null, Qe(I(V), (q) => (w(), De(mw, {
            key: q.id || `${q.material}-${q.l}-${q.w}-${q.t}`,
            stock: q,
            "is-selected": I(D)(q),
            "format-price": t.formatPrice,
            "button-color": t.colors.button,
            "button-text-color": t.colors.buttonText,
            locale: t.locale,
            onToggleSelection: z
          }, null, 8, ["stock", "is-selected", "format-price", "button-color", "button-text-color", "locale"]))), 128))
        ]),
        _: 1
      }, 8, ["total-results", "display-mode", "loading", "has-active-filters", "current-page", "total-pages", "onClearFilters", "onGoToPage"])
    ]));
  }
}), vw = /* @__PURE__ */ Mt(bw, [["__scopeId", "data-v-3d558ce6"]]), LS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: vw }, Symbol.toStringTag, { value: "Module" }));
export {
  Ea as $,
  Xi as A,
  _e as B,
  Yd as C,
  zs as D,
  zw as E,
  K as F,
  Ia as G,
  $e as H,
  Rs as I,
  We as J,
  Su as K,
  Pa as L,
  vn as M,
  Ta as N,
  ff as O,
  Gs as P,
  bn as Q,
  di as R,
  Jo as S,
  In as T,
  Gt as U,
  fi as V,
  Wo as W,
  Fu as X,
  Fw as Y,
  Ow as Z,
  J as _,
  sS as a,
  Hh as a$,
  ui as a0,
  cn as a1,
  ue as a2,
  bS as a3,
  it as a4,
  Nt as a5,
  Hw as a6,
  fn as a7,
  lS as a8,
  pe as a9,
  rS as aA,
  Ps as aB,
  So as aC,
  yt as aD,
  Dt as aE,
  Qi as aF,
  Df as aG,
  ko as aH,
  op as aI,
  gS as aJ,
  Li as aK,
  pS as aL,
  kS as aM,
  Vh as aN,
  xS as aO,
  An as aP,
  ul as aQ,
  Le as aR,
  Go as aS,
  jh as aT,
  zu as aU,
  kr as aV,
  Ew as aW,
  wS as aX,
  SS as aY,
  Gw as aZ,
  Wh as a_,
  Vw as aa,
  hi as ab,
  Ui as ac,
  Nw as ad,
  gt as ae,
  Vf as af,
  It as ag,
  nt as ah,
  Rw as ai,
  Do as aj,
  Ma as ak,
  vS as al,
  jw as am,
  xo as an,
  lp as ao,
  _h as ap,
  ri as aq,
  Ww as ar,
  fS as as,
  cS as at,
  ju as au,
  $w as av,
  Ku as aw,
  Mw as ax,
  oS as ay,
  Dw as az,
  wr as b,
  pt as b0,
  yi as b1,
  qh as b2,
  ol as b3,
  IS as b4,
  tn as b5,
  ln as b6,
  Ra as b7,
  yS as b8,
  Ke as b9,
  AS as bA,
  _w as bB,
  ed as bC,
  hr as bD,
  pr as bE,
  qy as bF,
  CS as bG,
  PS as bH,
  Ba as bI,
  TS as bJ,
  OS as bK,
  LS as bL,
  uS as ba,
  Yo as bb,
  dS as bc,
  mS as bd,
  hS as be,
  $h as bf,
  Lw as bg,
  Pn as bh,
  Cn as bi,
  Vt as bj,
  Zi as bk,
  ot as bl,
  $t as bm,
  un as bn,
  Xt as bo,
  oi as bp,
  _s as bq,
  tl as br,
  Ch as bs,
  xi as bt,
  Mt as bu,
  pi as bv,
  wt as bw,
  Zw as bx,
  pl as by,
  Si as bz,
  Zo as c,
  Kw as d,
  Ko as e,
  Uw as f,
  la as g,
  Yw as h,
  so as i,
  Ti as j,
  es as k,
  gh as l,
  Xw as m,
  iS as n,
  tS as o,
  Qw as p,
  mh as q,
  eS as r,
  qw as s,
  W as t,
  Jw as u,
  nS as v,
  Bw as w,
  Tf as x,
  aS as y,
  ei as z
};

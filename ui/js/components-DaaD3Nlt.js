import { i as Eo, B as Gl } from "./vendor-i18next-CacwiV0i.js";
import { r as oe, t as ql, c as ee, w as We, n as gt, d as ze, a as F, o as S, F as Me, b as Ye, e as at, f as Ee, g as D, h as hs, i as ne, v as sn, j as St, k as Zt, u as Ro, l as zl, m as Wl, p as ps, q as Le, s as T, x as ie, y as Gs, T as la, z as _o, A as Hl, B as Ii, C as Ti, D as qs, E as ui, G as vi, H as Ge, I as Ul, J as Mo, K as ls, L as Yl, M as Kl, N as ji, O as qa, P as Zl, Q as Jl, R as Xl, S as Ql, U as ec, V as tc, W as ic, X as On } from "./vendor-vue-WkZl1F8L.js";
import { _ as Ie, o as j, a as ae, s as p, n as d, b as _, c as ye, r as be, u as me, d as ri, z as sc, Z as Ln, e as nc, l as ve, p as _t, f as qn, g as ac, h as oc, m as rc, i as Bi, j as lc, k as cc, q as uc, t as dc, v as fc, w as hc, x as pc } from "./vendor-zod-DtqKDYvi.js";
import { g as He, h as gc, s as mc } from "./vendor-lodash-CYGhmG8H.js";
import { u as ts, s as za, g as yc, v as bc, a as ca, b as vc, c as wc, d as Sc, e as xc, f as ua, h as kc, i as Ic, j as Pc, k as Cc } from "./composables-Dr5gJ-9j.js";
import { a as jo, b as Bo, l as Et, c as zs, d as Ws, s as ut, r as qt, e as cs, f as No, g as Tc, h as Ac, i as Oc, p as Lc, S as Fc, j as $c, k as Dc } from "./vendor-d3-DUCHe88K.js";
import { c as Vo, P as Ec } from "./vendor-tCV_BFOF.js";
import { o as Rc, f as _c, s as Mc, a as jc } from "./vendor-floating-ui-DZfk4g77.js";
import { F as us } from "./vendor-fraction-3H9P8ENz.js";
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
function Go() {
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
function qo() {
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
}, Fn = {
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
  if (t in Fn) {
    const e = t;
    return Ht() && console.warn(`[Validation] Using legacy validation key "${t}". Please migrate to "${Fn[e]}"`), Fn[e];
  }
  return t;
}
const zo = Ie(["error", "warning"]), Wo = Ie(["saw", "stock", "part", "group", "machining", "extras"]);
j({
  message: p(),
  identifier: p(),
  field: ae(ae(p())),
  index: ae(d()),
  id: p(),
  // Source object's autoId for linking back
  type: zo,
  category: ae(Wo)
});
const Nc = j({
  item: ye().nullable().default(null),
  message: p().default(""),
  params: be(p(), me([p(), d(), _(), ri()])).optional(),
  // Translation parameters
  field: ae(ae(p())).default([]),
  index: ae(d()).nullable().default(null),
  id: p().nullable().default(null),
  // Source object's autoId
  issues: ae(ye()).nullable().default(null),
  // Will be Issue[] at runtime
  type: zo.default("error"),
  category: ae(Wo).nullable().default(null),
  throwError: _().default(!1),
  shouldTranslate: _().default(!0)
}), Vc = ["lr", "rl", "bt", "tb"];
j({
  x1: d(),
  x2: d(),
  y1: d(),
  y2: d(),
  dimension: Ie(["l", "w"]).optional(),
  shapeCollisions: ae(ye()).optional()
});
j({
  id: p().nullable().optional(),
  x1: d(),
  x2: d(),
  y1: d(),
  y2: d(),
  origin: p().optional(),
  dimension: Ie(["l", "w"]).optional(),
  direction: Ie(Vc).nullable().optional(),
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
  shapeCollisions: ae(ye()).default([]),
  // ========== Validation ==========
  // Validation issues found with this line
  issues: ae(ye()).default([])
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
}, Ho = /* @__PURE__ */ new Map();
function gs() {
  return Ho;
}
function iw(t, e) {
  Ho.set(t, e);
}
function nn(t, e) {
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
function xs(t) {
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
typeof sc < "u" && Ln && Ln.prototype && (Ln.prototype.behavior = function(t) {
  return nn(this, t);
});
function Oe(t, e = {}) {
  let s = ye().refine((o) => o == null ? !0 : typeof o == "object" && o !== null ? ("autoId" in o || "id" in o, !0) : !1, {
    message: `Invalid reference to ${t}`
  }).transform((o) => {
    if (o == null || typeof o == "object" && o !== null && typeof o.getType == "function" || typeof o == "object" && o !== null && o.__ref === !0)
      return o;
    if (typeof o == "object" && o !== null && !o.__ref)
      try {
        const r = gs(), l = o.__entityType || t, u = r.get(l);
        if (u && typeof u == "function")
          return typeof u.fromData == "function" ? u.fromData(o) : new u(o);
      } catch (r) {
        console.warn(`Failed to recreate ${t} instance:`, r);
      }
    return o;
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
  return n = nn(n, a), Object.defineProperty(n, "__zRefClassName", {
    value: t,
    enumerable: !1,
    writable: !1,
    configurable: !1
  }), n;
}
function Ne(t, e = {}) {
  let i = ae(Oe(t)).default([]).describe(
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
  return i = nn(i, s), i;
}
function Es(t, e = {}) {
  const i = t.map((a) => Oe(a));
  let s = ae(me(i)).default([]).describe(
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
  return s = nn(s, n), s;
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
  direction: Ie(Wc).nullable().optional(),
  type: p().optional(),
  corner: Ie(Ha).optional(),
  shapePosition: Ie(Ha).optional(),
  grid: Ie(zc).optional(),
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
}, Uo = p().default("").describe('Unique identifier (e.g., "1.0" for shapes/stock, "g1" for groups, "ss-1_a2b3" for segments, "1.0-proximity" for proximity rectangles)'), Yc = p().max(200).default("").describe("User input name"), Kc = p().default("").describe("Parent identifier for tracking copies and relationships"), Zc = _().default(!1).describe("Prevent automatic rotation optimization"), Jc = _().default(!1).describe("Whether this is an offcut piece"), Yo = ae(p()).default([]).describe("IDs of identical items").behavior({ clone: "copy" }), Hi = me([
  ve(""),
  ve("l"),
  ve("w"),
  ve(" ").transform(() => ""),
  ri().transform(() => "")
]).default("").describe("Grain direction of the material"), Ko = me([
  // String format (legacy support - color name or hex)
  p(),
  // Object format with hex and name
  j({
    hex: p().regex(/^#[0-9A-Fa-f]{6}$/, "Must be valid hex color (#RRGGBB)"),
    name: p().min(1)
  })
]).optional().describe("Material color (hex code + name or legacy string)"), Zo = _t(
  (t) => t === null || t === " " || t === "n" || t === "none" || !["", "l", "w"].includes(t) ? "" : t,
  Ie(["", "l", "w"]).default("").describe("Orientation lock for rotation constraints")
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
me([
  ve(""),
  ve("l"),
  ve("w"),
  ri()
]).default(null);
be(p(), d()).nullable().default(null);
be(p(), d()).nullable().default(null);
const da = me([
  ve(0),
  ve(1)
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
  groups: be(p(), Qc).describe("Groups of strip shape batches keyed by ID")
});
const eu = Ie(["none", "schema", "business", "full"]), Bt = j({
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
}), li = {
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
  id: Uo,
  // Description
  name: Yc,
  // Dimensions
  l: _t((t) => typeof t == "number" && !isFinite(t) ? 1 : t ?? 1, d().positive()).describe("Length (long side dimension)"),
  w: _t((t) => typeof t == "number" && !isFinite(t) ? 1 : t ?? 1, d().positive()).describe("Width (short side dimension)"),
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
  grain: Hi,
  preventGrainRotation: _().default(!1).describe("Prevent rotation that would change grain direction"),
  // Orientation
  preventAutoRotation: Zc,
  orientationLock: Zo,
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
  customData: be(p(), ye()).default({}).describe("Custom user-defined data"),
  identicalTo: Yo,
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
Ie(iu);
const su = ["l", "w"];
Ie(su);
const nu = ["l", "w"], bi = Ie(nu);
me([
  ve(0),
  ve(1),
  ve(2)
]);
me([
  ve(0),
  ve(1),
  ri()
]);
const au = ["sheet", "linear", "roll"], an = _t(
  // Normalize to lowercase before validation
  (t) => typeof t == "string" ? t.toLowerCase() : t,
  me([
    Ie(au),
    ri()
  ]).nullable().default(null)
).describe("Type of stock material"), Jo = j({
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
  stockType: an,
  // Array of shapes or groups (excluded from compression - runtime only)
  shapes: Es(["Shape", "Group"], {
    description: "Array of Shape or Group objects contained within this container"
  }).behavior({ clone: "reset", compress: "exclude" }),
  // Saw reference - using zRef for define.ref<Saw>('Saw') (share exact instance during cloning, serialize as reference)
  saw: Oe("Saw", {
    nullable: !0,
    description: "Reference to Saw class"
  }).behavior({ clone: "share", compress: "reference" }),
  // Algorithm benchmark results (reset during cloning)
  algoBenchmark: ye().optional().describe("Benchmark results from optimization algorithms").behavior({ clone: "reset" }),
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
const ou = j({
  dimension: d().describe("Dimension of the strip shape batch"),
  rot: me([
    ve(0),
    ve(1)
  ]).describe("Rotation"),
  order: d().optional().describe("Order of the batch"),
  id: p().optional().describe("Batch ID"),
  stockId: p().optional().describe("Associated stock ID"),
  rerunning: _().optional().describe("Whether the batch is being rerun"),
  priorityShape: p().nullable().describe("Priority shape identifier (null if none specified)")
}), Xo = j({
  // Strip direction
  myStripDirection: bi.optional(),
  // Strip parent (can be shape or group)
  myStripParent: me([
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
    groups: be(p(), ou).default({}).describe("Groups of strip shape batches keyed by ID")
  }).default({ groups: {} }).describe("Strip shape batch optimization data")
});
Xo.describe(JSON.stringify({
  name: "GuillotineState",
  version: "1.0.0"
}));
const ru = {}, lu = j({
  fill: d().default(0),
  similarDimensions: d().default(0),
  compression: d().default(0),
  cohesion: d().default(0),
  area: d().default(0),
  edge: d().default(0),
  alignment: d().default(0),
  exactFit: d().default(0),
  total: d().default(0),
  shapes: me([
    Oe("Shape", { nullable: !0 }),
    Oe("Group", { nullable: !0 })
  ]).optional(),
  group: Oe("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
  cutDirection: bi.optional()
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
  cutDirection: bi,
  myStripDirection: bi.optional(),
  myStripParent: me([
    Oe("Shape", { nullable: !0 }),
    Oe("Group", { nullable: !0 })
  ]).optional().describe("Parent strip shape or group for guillotine optimization"),
  myPhase: d().optional()
}).behavior({ clone: "reset" }), Ua = me([
  lu,
  cu,
  // Also support the generic object with catchall for backward compatibility
  j({
    cutDirection: bi.optional(),
    myStripParent: me([
      Oe("Shape", { nullable: !0 }),
      Oe("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group"),
    myStripDirection: bi.optional()
  }).catchall(d())
]).behavior({ clone: "reset" }), on = fa.extend({
  // Stock lock (shared schema) - original was stockLock: define.array(define.string())
  stockLock: ae(p()).default([]).describe("Stock lock configuration"),
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
  priority: be(p(), d()).default({}).describe("Priority levels for optimization"),
  weighting: be(p(), d()).optional().describe("Shape weighting for optimization"),
  // Pattern matching for stack detection (reset during cloning)
  patternMatch: _().default(!1).describe("Used for stack detection").behavior({ clone: "reset" }),
  firstShape: j({
    sampleRotations: ae(d().int().min(0).max(1)).default([]).describe("Sample rotations (0 or 1) for first shape optimization").behavior({ clone: "reset" }),
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
  fitsStock: be(
    p(),
    be(p(), _())
  ).nullable().default(null).describe("Information about which stocks this shape fits"),
  // Scoring properties
  bestScore: j({
    x: d().nullable().default(null),
    y: d().nullable().default(null),
    rot: me([ve(0), ve(1)]).nullable().default(null),
    total: d().nullable().default(null),
    weighting: be(p(), d()).optional(),
    group: Oe("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
    score: Ua.optional(),
    point: ye().optional().describe("Associated point for placement"),
    myStripParent: me([
      Oe("Shape", { nullable: !0 }),
      Oe("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group for this score"),
    cutDirection: bi.optional(),
    myStripDirection: bi.optional(),
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
}), rn = {
  // Include all Rectangle computed properties
  ...ha
  // Placeable doesn't define additional computed properties
};
on.describe(JSON.stringify({
  name: "Placeable",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(rn)
}));
const Qo = ["horizontal", "vertical"], er = ["position", "user", "strip", "firstShape"], ma = Ie(Qo).optional(), uu = j({
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
  container: me([
    Oe("Segment"),
    Oe("Stock")
  ]).behavior({ compress: "exclude" }),
  positions: ae(uu).default([]),
  type: Ie(er).default("position"),
  efficiency: d().min(0).max(100).default(0),
  groupLength: d().min(0).default(0),
  groupWidth: d().min(0).default(0),
  outOfBounds: _().default(!1),
  collision: _().default(!1),
  counter: d().int().min(0).default(0),
  inputId: p().optional()
}), fu = {
  ...rn,
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
  direction: Ie(Qo),
  type: Ie(er),
  container: me([
    Oe("Segment"),
    Oe("Stock")
  ]).optional()
});
const tr = ae(p()).default([]).describe("Parent IDs of stock(s) this shape is locked to"), hu = Ie(["l", "w"]).nullable().default(null), ir = me([
  ve("l"),
  ve("w"),
  ri()
]).default(null), pu = j({
  stockId: p().optional(),
  material: p().optional(),
  thickness: d().optional(),
  grain: Hi.optional()
}).describe("Which stock(s) this shape is a match for "), gu = be(p(), ye()).default({});
tr.describe("IDs of stocks this shape is locked to");
const mu = ir.describe("Direction that should face up");
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
}).describe("Group metadata and reference"), zn = on.extend({
  // ========== Group Metadata ==========
  // Nested object containing all group-related properties
  group: yu,
  // ========== Identity ==========
  // Unique identifier for referencing items (required for shapes)
  id: p().default("").describe("Unique identifier for referencing items"),
  // Array of IDs this shape is identical to
  identicalTo: Yo,
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
}), sr = {
  // Include all Placeable computed properties
  ...rn,
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
zn.describe(JSON.stringify({
  name: "Shape",
  description: "Shape to be cut from stock material",
  version: "1.0.0",
  extends: "Placeable",
  computedProperties: Object.keys(sr)
}));
const bu = j({
  // Internal-only fields (not exposed in API)
  fitsAll: _().default(!1),
  fitsAny: _().default(!1),
  largestShape: ye().nullable(),
  smallestShape: ye().nullable(),
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
}), Wn = j({
  ...pa.shape,
  ...Jo.shape,
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
  score: ye().nullable().default(null).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stack information (reset during cloning - cloned stocks start fresh)
  stack: vu.optional().describe("Stack information").behavior({ clone: "reset" }),
  // Whether the stock layout has been tidied (excluded from compression, reset during cloning)
  tidy: _().default(!1).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stock type (sheet, linear, roll) - inherited from shared stockType
  type: Ie(["sheet", "linear", "roll"]).optional().describe("Type of stock material"),
  // Whether this stock is unusable for optimization
  unusable: _().default(!1).describe("Whether this stock is unusable for optimization"),
  // Whether this stock has been used in the optimization (reset during cloning)
  used: _().default(!1).describe("Whether this stock has been used in the optimization").behavior({ clone: "reset" }),
  // The optimization strategy that selected this stock (reset during cloning)
  winningStrategy: p().optional().describe("The optimization strategy that selected this stock").behavior({ clone: "reset" }),
  // Display and filtering properties
  color: Ko.describe('Material color ({ hex: "#FF5733", name: "Red" } or legacy string)'),
  weight: d().positive().optional().describe("Weight in kg"),
  imageUrl: p().url().optional().describe("Image URL for stock display")
}), nr = {
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
Wn.describe(JSON.stringify({
  name: "Stock",
  description: "Stock material for cutting optimization",
  version: "1.0.0",
  extends: "Container",
  computedProperties: Object.keys(nr)
}));
var re = /* @__PURE__ */ ((t) => (t.InputRectangle = "inputRectangle", t.InputShape = "inputShape", t.InputStock = "inputStock", t.InputUserGroup = "inputUserGroup", t.InputSaw = "inputSaw", t.Rectangle = "rectangle", t.Container = "container", t.Saw = "saw", t.Shape = "shape", t.Stock = "stock", t.Group = "group", t.UserGroup = "userGroup", t.StripGroup = "stripGroup", t.FirstShapeGroup = "firstShapeGroup", t.Segment = "segment", t.Offcut = "offcut", t.Cut = "cut", t.Line = "line", t.Placeable = "placeable", t.GuillotineState = "guillotineState", t.Point = "point", t.PointCollection = "pointCollection", t.Optimiser = "optimiser", t.Machining = "machining", t.Extras = "extras", t.Issue = "issue", t))(re || {}), wu = /* @__PURE__ */ ((t) => (t.Full = "full", t.Compressed = "compressed", t))(wu || {});
class tt {
  static guardCache = /* @__PURE__ */ new Map();
  /**
   * Create a type guard function for a specific entity type
   */
  static create(e, i, s) {
    const n = `${e}-${i}`;
    if (this.guardCache.has(n))
      return this.guardCache.get(n);
    const a = (o) => {
      if (!o || typeof o != "object") return !1;
      if (o._type === e)
        return s ? s(o) : !0;
      const l = o.constructor?.name === i, c = "getType" in o && typeof o.getType == "function" && o.getType() === e, f = l || c, h = s ? s(o) : !0;
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
const Su = tt.create(re.Cut, "Cut"), rt = tt.create(
  re.Shape,
  "Shape",
  (t) => !("shapes" in t)
), Mt = tt.create(re.Stock, "Stock"), ar = tt.create(
  re.Group,
  "Group",
  (t) => "shapes" in t && Array.isArray(t.shapes) && t.type !== "user" && t.type !== "strip"
), ms = tt.create(
  re.UserGroup,
  "Group",
  (t) => "shapes" in t && t.type === "user"
), or = tt.create(
  re.StripGroup,
  "Group",
  (t) => "shapes" in t && t.type === "strip"
), rr = tt.create(
  re.FirstShapeGroup,
  "Group",
  (t) => "shapes" in t && t.type === "firstShape"
), Ke = (t) => ar(t) || ms(t) || or(t) || rr(t), zt = tt.create(
  re.InputUserGroup,
  "InputUserGroup"
), Gi = tt.create(re.Segment, "Segment"), xu = tt.create(re.Offcut, "Offcut"), lr = (t) => {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  for (; e; ) {
    if (e.constructor?.name === "Container")
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return !1;
}, ku = tt.create(re.Saw, "Saw"), cr = (t) => {
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
}, Ae = tt.create(
  re.InputShape,
  "InputShape"
), qi = tt.create(
  re.InputStock,
  "InputStock"
);
tt.create(
  re.InputSaw,
  "InputSaw"
);
tt.create(
  re.GuillotineState,
  "GuillotineState"
);
tt.create(re.Line, "Line");
tt.create(re.Point, "Point");
tt.create(
  re.PointCollection,
  "PointCollection"
);
function Pu(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "__ref" in e && "autoId" in e && typeof e.__ref == "string" && typeof e.autoId == "string";
}
function ur(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "trimmed" in e && e.trimmed === !0;
}
function Cu(t) {
  if (!t || typeof t != "object") return null;
  const e = t.__entityType;
  if (e && Object.values(re).includes(e))
    return e;
  if ("getType" in t && typeof t.getType == "function")
    try {
      const i = t.getType();
      if (Object.values(re).includes(i))
        return i;
    } catch {
    }
  return Su(t) ? re.Cut : Ae(t) ? re.InputShape : qi(t) ? re.InputStock : zt(t) ? re.InputUserGroup : ms(t) ? re.UserGroup : or(t) ? re.StripGroup : rr(t) ? re.FirstShapeGroup : ar(t) ? re.Group : rt(t) ? re.Shape : Mt(t) ? re.Stock : lr(t) ? re.Container : Gi(t) ? re.Segment : xu(t) ? re.Offcut : cr(t) ? re.Rectangle : Iu(t) ? re.Placeable : null;
}
const di = (t) => {
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
}, Tu = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "images" in e && (!("type" in e) || e.type === "imageUpload") && (!("validate" in e) || typeof e.validate == "function");
};
tt.create(
  re.Machining,
  "Machining",
  (t) => ("holes" in t || "corners" in t || "hingeHoles" in t) && "enabled" in t
);
tt.create(
  re.Extras,
  "Extras",
  (t) => "banding" in t || "finish" in t || "planing" in t
);
tt.create(
  re.Issue,
  "Issue",
  (t) => "type" in t && "message" in t && (t.type === "error" || t.type === "warning")
);
function Au(t) {
  return t?.__entityType === re.Shape;
}
function sw(t) {
  return t?.__entityType === re.Group || t?.__entityType === re.StripGroup || t?.__entityType === re.FirstShapeGroup;
}
function nw(t) {
  return t?.__entityType === re.UserGroup;
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
  return Ai(t) ? t.trim().split(" ").map((e) => Ui(e)).join(" ") : "";
}
function Ui(t) {
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
let dr = Eo;
function Eu(t) {
  dr = t;
}
function jt(t, e) {
  if (Go())
    return t;
  const i = dr.t(t, { ...e });
  return !i || i === t ? t : Ui(i);
}
function Ru(t) {
  return typeof t == "string" && (t.startsWith("fields.") || t.startsWith("extras.") || t.startsWith("woodwork.") || t.startsWith("errors."));
}
function _u(t) {
  if (!t) return;
  const e = {};
  for (const [i, s] of Object.entries(t))
    if (Ru(s)) {
      const n = jt(s);
      e[i] = n;
    } else
      e[i] = s;
  return e;
}
function Mu(t, e) {
  const i = Bc(t), s = t.startsWith("errors.validation.") ? t : i, n = _u(e);
  return {
    message: jt(s, n),
    translationKey: s,
    params: n
  };
}
function fr(t, e) {
  return Mu(t, e).message;
}
class ce {
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
    const i = Nc.parse(e), s = ce.determineIdentifier(i.item, i.index || []);
    let n = i.id || "";
    !n && i.item && "autoId" in i.item && i.item.autoId && (n = i.item.autoId);
    const a = i.shouldTranslate !== !1 ? fr(i.message, i.params) : i.message;
    if (this.message = a, this.identifier = s, this.field = i.field.map((o) => [...o]), this.index = i.index ? [...i.index] : [], this.id = n, this.type = i.type, this.category = i.category || [], this.item = i.item, this.addToItemIssues(i.item), Array.isArray(i.issues) && i.issues.push(this), i.throwError) {
      const o = `Issue created for ${Cu(i.item)}: ${this.identifier || "N/A"} - ${this.field.map((r) => r.join(".")).join(", ")}`;
      throw new Error(o);
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
    return new ce({
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
qn(
  (t) => t instanceof ce,
  { message: "Must be an Issue instance" }
);
const $n = 10, Ya = 0;
class Hs extends Error {
  constructor(e) {
    super(e), this.name = "NumberFormatError";
  }
}
const as = {
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
  if (typeof t == "number" ? i = t : i = new us(t).valueOf(), typeof e == "number") {
    const s = Math.pow(10, e);
    return Math.round(i * s) / s;
  }
  return i;
}
function Bu(t, e) {
  const i = new us(t);
  if (e > 0) {
    const s = i.mul(e), n = Math.round(s.valueOf());
    return new us(n, e).toFraction(!0);
  }
  return i.simplify().toFraction(!0);
}
function Nu(t, e, i = !1) {
  const s = t == null || String(t).trim() === "";
  if (i && s)
    return { value: null, valid: !1, message: "errors.validation.field.required" };
  if (!i && s)
    return { value: null, valid: !0 };
  const n = String(t);
  try {
    const a = hr(n, !0), o = parseFloat(a ?? ""), r = a !== null && a !== "" && !isNaN(o) && isFinite(o);
    return {
      value: r ? o : t,
      valid: r,
      message: r ? void 0 : "invalid_number",
      messageData: r ? void 0 : "Could not parse as decimal."
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
function Vu(t = "en-US") {
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
function Rs(t) {
  if (t == null || t === "") return null;
  const e = String(t).trim();
  if (!e) return null;
  try {
    const { thousandsSeparator: i, decimalSeparator: s } = Vu(), n = e.replace(new RegExp(`\\${i}`, "g"), "").replace(new RegExp(`\\${s}`, "g"), "."), a = Number(n);
    return isFinite(a) ? a : null;
  } catch (i) {
    throw new Hs(`Failed to parse locale number: "${t}". ${i.message || "Parsing error"}`);
  }
}
function ya(t) {
  if (!t) return !1;
  const e = t.toString().trim();
  if (!e) return !1;
  const i = Object.keys(as).join("");
  return new RegExp(
    `^-?((\\d+\\s+)?\\d+\\/\\d+|\\d+|\\d+[${i}]|[${i}]|\\d+'(?:\\s*\\d+(?:\\/\\d+)?"?)?|(\\d+\\s+)?\\d+\\/\\d+"|\\d+")$`
  ).test(e);
}
function hr(t, e = !1) {
  if (t == null || t === "") return null;
  let i = String(t).trim();
  if (!i) return null;
  const s = Object.keys(as).join("");
  i = i.replace(new RegExp(`(\\d)\\s+([${s}])`, "g"), "$1$2");
  try {
    const n = Object.keys(as).join(""), a = new RegExp(`^(-?)(\\d+)([${n}])$`), o = new RegExp(`^(-?)([${n}])$`), r = i.match(a), l = i.match(o);
    if (r) {
      const u = r[1], c = r[2], f = r[3], h = as[f];
      if (h)
        return `${u}${c} ${h}`;
      throw new Error(`Unknown vulgar fraction character: ${f}`);
    } else if (l) {
      const u = l[1] || "", c = l[2], f = as[c];
      if (f)
        return `${u}${f}`;
      throw new Error(`Unknown vulgar fraction character: ${c}`);
    } else if (ya(i)) {
      let u = "";
      i.startsWith("-") && (u = "-", i = i.substring(1).trim());
      const c = i.replace(/[^0-9\s/]/g, "").replace(/\s+/g, " ").trim();
      if ((c.match(/\//g) || []).length > 1)
        throw new Error("Invalid fraction format: multiple slashes.");
      return u + c;
    } else {
      e ? (i = i.replace(/[^0-9,. -]/g, ""), i = i.replace(/\s/g, "")) : (i = i.replace(/[^0-9.-]/g, ""), i = i.replace(/,/g, "")), i.startsWith(".") && (i = "0" + i), i.startsWith("-.") && (i = "-0." + i.substring(2));
      const u = i.split(".");
      u.length > 2 && (i = u[0] + "." + u.slice(1).join(""));
      const c = e ? Rs(i) : parseFloat(i);
      return c === null || isNaN(c) || !isFinite(c) ? null : c.toString();
    }
  } catch (n) {
    throw new Hs(
      `Failed to clean numeric input: "${t}". ${n.message || "Cleaning error"}`
    );
  }
}
function Ka(t, e, i = null, s = null) {
  if (t && !(!Ae(t) && !qi(t))) {
    if (!["decimal", "fraction"].includes(e)) {
      console.warn("Attempting to update to an invalid number format:", e);
      return;
    }
    for (const n of t.numberFormatKeys)
      if (typeof t[n] == "object" && t[n] !== null)
        for (const a in t[n])
          Object.prototype.hasOwnProperty.call(t[n], a) && (t[n][a] = X({ v: t[n][a], nf: e, dp: i, pl: !1, fr: s }));
      else
        t[n] = X({ v: t[n], nf: e, dp: i, pl: !1, fr: s });
  }
}
function Gu(t) {
  return /^-?\d*\.?\d+$/.test(t);
}
function qu(t) {
  return /^-?(\d+\s+)?\d+\/\d+$/.test(t) || /^-?\d+$/.test(t);
}
function X(t) {
  if (t.v == null || t.v === "")
    return t.nf === "decimal" || !t.nf && t.o?.numberFormat !== "fraction" ? null : "";
  const e = t.o ?? {}, i = t.nf ?? e?.numberFormat ?? "decimal", s = t.dp ?? e?.decimalPlaces ?? $n, n = t.pl ?? e?.parseLocale ?? !1, a = t.fr ?? e?.fractionRoundTo ?? Ya;
  if (i === "decimal") {
    if (typeof t.v == "number") {
      if (typeof s == "number" && s !== $n) {
        const o = Math.pow(10, s);
        return Math.round(t.v * o) / o;
      }
      return t.v;
    }
    if (typeof t.v == "string") {
      const o = t.v.trim();
      if (Gu(o) && !n) {
        const r = parseFloat(o);
        if (isFinite(r)) {
          if (typeof s == "number" && s !== $n) {
            const l = Math.pow(10, s);
            return Math.round(r * l) / l;
          }
          return r;
        }
      }
    }
  } else if (i === "fraction" && typeof t.v == "string") {
    const o = t.v.trim();
    if (qu(o))
      try {
        const r = new us(o);
        if (isFinite(r.valueOf())) {
          if (a === 0 || a === Ya)
            return r.toFraction(!0);
          const l = r.mul(a), u = Math.round(l.valueOf());
          return new us(u, a).toFraction(!0);
        }
      } catch {
      }
  }
  try {
    const o = hr(t.v, n);
    return o === null || o === "" ? i === "decimal" ? null : "" : i === "decimal" ? ju(o, s) : Bu(o, a);
  } catch (o) {
    throw o instanceof Hs ? o : new Hs(
      `Failed to convert number format: "${t.v}" to ${i}. ${o.message}`
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
function Qe(t, e) {
  if (e?.returnKey)
    return `fields.${t}`;
  const i = `fields.${t}`, s = jt(i);
  if (s === i) {
    const n = Ut[t] || t;
    return Ht() && !Ut[t] && console.warn(`[field-mappings] No translation or fallback for field: "${t}"`), n;
  }
  return Ht() && console.log(`[field-mappings] Translated "${t}" -> "${s}"`), s;
}
const pr = (t, e, i, s, n, a) => {
  const o = He(t, e);
  if (o == null || o === "") return;
  if (typeof o != "string") {
    new ce({
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
  const r = o?.toLowerCase();
  i.includes(r) || new ce({
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
function gr(t) {
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
  return t.issues.filter((o) => o.type === s).some((o) => o.field?.length ? o.field.some((r) => r.every((l, u) => l === Uu(e[u]))) : !1);
}
const Hu = {
  partMaterial: "material",
  stockMaterial: "material"
};
function Uu(t) {
  return Hu[t] ?? t;
}
const Yu = ["banding", "finish", "planing", "info"], Dn = p().refine(
  (t) => t.startsWith("side.") || t.startsWith("face."),
  { message: 'Location must start with "side." or "face."' }
).transform((t) => t), Tt = me([
  _(),
  p(),
  be(p(), me([_(), p()]))
  // Object-based values: { type: 'oak', thickness: '1mm', test: true }
]), ln = Bt.extend({
  // ========== Identity ==========
  type: Ie(Yu).optional().describe("Type of extra"),
  enabled: _().default(!0).describe("Whether extra is enabled"),
  // ========== Face/Side mappings (superset - each extra uses what it needs) ==========
  // Face values (front/back) - partial record to allow any subset of faces
  faces: j({
    a: Tt.optional(),
    b: Tt.optional()
  }).optional().describe("Partial mapping of face keys to extra values"),
  // Side values (edges) - partial record to allow any subset of sides
  sides: j({
    a: Tt.optional(),
    b: Tt.optional(),
    c: Tt.optional(),
    d: Tt.optional(),
    l1: Tt.optional(),
    l2: Tt.optional(),
    w1: Tt.optional(),
    w2: Tt.optional()
  }).optional().describe("Partial mapping of side keys to extra values")
  // NOTE: Options are now centralized in CalculationData.extrasOptions
  // No per-shape options are stored - all extras use centralized configuration
}), ba = {
  // Inherit computed properties from validation base
  ...li
  // Add any extra-specific computed properties here
};
be(
  Ie(["a", "b"]),
  Tt
);
be(
  Ie(["l1", "l2", "w1", "w2", "a", "b", "c", "d"]),
  Tt
);
const mr = j({
  min: d().optional().describe("Minimum value"),
  max: d().optional().describe("Maximum value"),
  message: p().optional().describe("Custom error message")
});
j({
  scope: Ie(["face", "side"]),
  key: p(),
  // Face or Side key
  original: p()
  // Original ExtraLocation string
});
const Ku = j({
  location: p().describe("Location identifier (e.g., face.a, side.l1)"),
  properties: be(p(), mr).optional(),
  disabledMessage: p().optional().describe("Message when location is disabled")
}), Zu = j({
  global: be(p(), mr).optional(),
  locations: ae(Ku).optional().describe("Location-specific constraints"),
  defaultMessage: p().optional().describe("Default message when constraints not met")
});
j({
  scope: ae(Ie(["faces", "sides"])).describe("Scopes this extra type supports"),
  faces: ae(qn()).optional().describe("Available face locations"),
  sides: ae(qn()).optional().describe("Available side locations"),
  constraints: Zu.optional()
});
const yr = ln, Ju = {
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
  type: Ie(Xu).nullable().optional().describe("Type of corner modification"),
  // Size of the corner modification
  size: d().nonnegative().nullable().default(0).describe("Size of the corner modification in mm"),
  // Corner index
  index: d().min(0).max(3).default(0).describe("Corner index (0=BL, 1=BR, 2=TR, 3=TL)")
}), ed = {
  // Inherit computed properties from validation base
  ...li,
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
  dimension: Ie(td).optional(),
  position: Ie(id).optional(),
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
}), od = {
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
}, br = ln, rd = {
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
  side: Ie(ld).describe("Side where hinge is placed"),
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
  ...li,
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
  type: Ie(dd).default("regular").describe("Type of hole")
}), hd = {
  // Inherit computed properties from validation base
  ...li,
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
function De(t, e) {
  return t._metadata = e, e.description ? t.describe(e.description) : t;
}
const pd = (t, e) => De(t, e), Ni = (t) => {
  const { min: e, allowZero: i = !1, nullable: s = !0 } = t || {};
  let n;
  return e !== void 0 ? n = i ? d().min(e) : d().min(e) : n = i ? d().min(0) : d().gt(0), s ? me([
    n,
    p(),
    ri()
  ]).transform((a) => a == null || a === "" ? null : typeof a == "string" ? X({ v: a }) ?? null : a) : me([
    n,
    p()
  ]).transform((a) => a === "" ? 0 : typeof a == "string" ? X({ v: a }) ?? 0 : a);
}, vr = () => De(
  Hi,
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
), gd = () => De(
  Zo,
  {
    label: "fields.orientationLock",
    group: "properties",
    options: [
      { value: "", label: "fields.orientationLock.free" },
      { value: "l", label: "fields.orientationLock.length" },
      { value: "w", label: "fields.orientationLock.width" }
    ]
  }
), _s = (t) => De(
  Ni({ allowZero: t.allowZero, nullable: !0 }).default(null),
  {
    label: t.label,
    placeholder: t.placeholder || "",
    group: "dimensions",
    allowZero: t.allowZero || !1,
    output: "number"
  }
), md = () => De(
  _t(
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
), yd = (t) => De(
  p().max(200).optional().transform((e) => e ? e.trim().toUpperCase() : ""),
  {
    label: "fields.name",
    placeholder: t?.placeholder || "",
    group: "general"
  }
), bd = () => De(
  p().max(200).optional().transform((t) => t ? t.trim().toUpperCase() : ""),
  {
    label: "fields.material",
    placeholder: "fields.material",
    group: "properties"
  }
), vd = () => De(
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
), wd = () => De(
  ac().max(500).transform((t) => t.replace(/,/g, " ")).optional(),
  {
    label: "fields.notes",
    placeholder: "fields.notes",
    group: "general"
  }
), Sd = (t) => De(
  _().default(!1),
  t
), xd = (t, e) => De(
  Ie(t),
  e
), si = {
  field: De,
  boolean: Sd,
  enum: xd,
  custom: pd
}, kd = ["efficiency", "guillotine", "beam", "none"], Hn = ["l", "w", "flex", "none"], Id = ["efficiency", "time"], Pd = ["l", "w"], wr = ["efficiency", "smallest"], Cd = ["dimensions", "identical", "none"], Us = ["sheet", "linear", "roll"], cn = me([
  d().int().positive(),
  ri(),
  oc()
]).transform((t) => t ?? 100).describe("Maximum stack height for beam saw stacking"), un = Ie(kd).nullable().optional().transform((t) => t === null ? void 0 : t), dn = Ie(Hn).nullable().optional().transform((t) => t === null ? void 0 : t), va = Ie(wr).default("efficiency").describe("Method for selecting stocks"), wa = Ie(Cd).default("identical").describe("How to stack identical parts"), fn = j({
  strategy: Ie(Id).default("efficiency"),
  maxPhase: d().int().min(0).max(10).default(0),
  headCuts: _().default(!1)
}).default({
  strategy: "efficiency",
  maxPhase: 0,
  headCuts: !1
}), Sa = j({
  primaryCompression: Ie(Pd).default("w")
}).default({
  primaryCompression: "w"
});
j({
  stockType: an,
  /**
   * Stack height - Maximum stack height
   */
  stackHeight: cn,
  /**
   * Cut type - Type of cutting algorithm
   */
  cutType: un,
  /**
   * Cut preference - Preferred cutting direction
   */
  cutPreference: dn,
  /**
   * Guillotine options - Configuration for guillotine cutting
   */
  guillotineOptions: fn,
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
const Sr = d().min(0).default(0), xr = d().min(0).default(0), kr = d().min(0).default(0), Td = j({
  dimension: xr,
  minSpacing: kr
});
function Un(t) {
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
function Yn(t, e) {
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
const Ad = De(
  un,
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
), Od = De(
  dn,
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
), Ld = De(
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
), Fd = De(
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
), $d = De(
  fn,
  {
    label: "fields.guillotineOptions",
    group: "guillotine",
    order: 1,
    type: "object"
  }
), Dd = De(
  Sa,
  {
    label: "fields.efficiencyOptions",
    group: "efficiency",
    order: 1,
    type: "object"
  }
), Pi = j({
  ...Bt.shape,
  // ========== Stock Type ==========
  stockType: De(
    Ie([...Us]).default("sheet"),
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
  bladeWidth: De(
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
  stackHeight: De(
    cn,
    {
      label: "fields.stackHeight",
      group: "stacking",
      order: 1,
      step: 1,
      info: "If your saw supports cutting multiple stock simultaneously, set the maximum total allowed height."
    }
  ),
  cutType: Ad,
  cutPreference: Od,
  // ========== Guillotine Options ==========
  guillotineOptions: $d,
  // ========== Efficiency Options ==========
  efficiencyOptions: Dd,
  // ========== General Options ==========
  options: j({
    stockSelection: Ld,
    minSpacing: Ni({ allowZero: !0, nullable: !1 }).default(0),
    stackingMode: Fd,
    minSpacingDimension: j({
      dimension: Ni({ allowZero: !0, nullable: !0 }).optional(),
      minSpacing: Ni({ allowZero: !0, nullable: !0 }).optional()
    }).optional()
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical"
  })
}), Ed = {
  // Include validation computed properties (isValid)
  ...li,
  // Get valid cut types for current stock type
  validCutTypes: {
    compute: (t) => Un(t.stockType),
    metadata: {
      cache: !0,
      dependencies: ["stockType"],
      description: "Valid cut types for current stock type",
      returnType: "CutType[]"
    }
  },
  // Get valid cut preferences for current stock type and cut type
  validCutPreferences: {
    compute: (t) => Yn(t.stockType, t.cutType),
    metadata: {
      cache: !0,
      dependencies: ["stockType", "cutType"],
      description: "Valid cut preferences for current stock type and cut type",
      returnType: "CutPreference[]"
    }
  }
}, Rd = j({
  // Entity type added during serialization by toData() method
  // Used for automatic class recreation during deserialization
  __entityType: p().optional().describe("Entity type added during serialization by AutoSerializable.toData()"),
  // Reference marker for reference-based recreation
  // Used when objects reference each other
  __ref: p().optional().describe("Reference marker for object recreation")
}), _d = j({
  // ========== Selection State (excluded from compression) ==========
  selected: si.boolean({
    label: "fields.selected",
    description: "Whether item is selected for multi-edit"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  multiEdit: si.boolean({
    label: "fields.multiEdit",
    description: "Whether this is the multi-edit item"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  readonly: si.boolean({
    label: "fields.readonly",
    description: "Whether input is readonly"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Validation State (excluded from compression and serialization) ==========
  isNew: si.boolean({
    label: "fields.isNew",
    description: "Whether this is a newly created item that should skip validation until first user interaction",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" })
}), Md = j({
  l1: De(
    _t((t) => t ?? 0, d()).default(0),
    { label: "fields.l1", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  l2: De(
    _t((t) => t ?? 0, d()).default(0),
    { label: "fields.l2", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  w1: De(
    _t((t) => t ?? 0, d()).default(0),
    { label: "fields.w1", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  w2: De(
    _t((t) => t ?? 0, d()).default(0),
    { label: "fields.w2", group: "trim", allowZero: !0, min: 0, required: !1 }
  )
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 }), jd = _t(
  (t) => {
    if (t == null)
      return { l1: 0, l2: 0, w1: 0, w2: 0 };
    if (typeof t == "object" && t !== null) {
      const e = t, i = (s) => {
        if (s == null) return 0;
        if (typeof s == "string") {
          const n = X({ v: s });
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
  Md
), Bd = j({
  // ========== Identity ==========
  id: Uo,
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
  preventAutoRotation: si.boolean({
    label: "fields.preventAutoRotation",
    description: "Prevent automatic rotation during optimization",
    group: "options"
  }),
  offcut: si.boolean({
    label: "fields.offcut",
    description: "Mark as offcut material",
    group: "options"
  }),
  processed: si.boolean({
    label: "fields.processed",
    description: "Has been processed",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Notes ==========
  notes: wd()
}), Ys = j({
  ...Rd.shape,
  // System properties from AutoSerializable
  ...Bt.shape,
  ...Bd.shape,
  // Core business fields
  ..._d.shape,
  // Input-specific UI fields
  // Override id with strict validation for input shapes/stock (allows blank)
  id: p().regex(/^(\d+\.\d+)?$/, 'ID must be blank or in format "1.0" (e.g., "1.0", "2.1")').default("").describe('Structured identifier for input shapes/stock in format 1.0 (e.g., "1.0") or blank')
}), xa = {
  // Include validation computed properties (isValid)
  ...li,
  // Get the longer side dimension
  longSide: {
    compute: (t) => {
      const e = X({ v: t.l }) ?? 0, i = X({ v: t.w }) ?? 0;
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
      const e = X({ v: t.l }) ?? 0, i = X({ v: t.w }) ?? 0;
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
      const e = X({ v: t.l }) ?? 0, i = X({ v: t.w }) ?? 0;
      return e === i;
    },
    metadata: {
      cache: !1,
      dependencies: ["l", "w"],
      description: "Whether the rectangle is square (l === w)",
      returnType: "boolean"
    }
  }
}, yi = Ys.extend({
  // Add grain field for shapes
  //[] is grain needed for inputs?
  grain: vr(),
  // Add orientationLock with input-specific transform
  orientationLock: gd(),
  // ========== Shared Shape Properties ==========
  upDirection: De(
    ir,
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
  stockLock: De(
    tr,
    { label: "fields.stockLock" }
  ),
  // ========== Stock Matching ==========
  stockMatch: pu.nullable().optional(),
  // ========== Custom Data ==========
  customData: De(
    gu,
    { label: "fields.customData", description: "Custom user-defined data" }
  ),
  // ========== UI Extension (excluded from compression) ==========
  selectedMaterial: De(
    ye().optional(),
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
}), Nd = {
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
  ...Ys.shape,
  ...Jo.shape,
  // ========== Stock-specific Properties ==========
  // Override l to allow 0 for infinite length rolls
  l: _s({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !0
  }),
  // Add grain field for stock
  grain: vr(),
  preventGrainRotation: si.boolean({
    label: "fields.preventGrainRotation",
    description: "Prevent rotation that would change grain direction",
    group: "options",
    order: 4
  }),
  // Stock-specific flags (infiniteLength is now in sharedStockPropertiesSchema from merge above)
  used: si.boolean({
    label: "fields.used",
    description: "Whether stock has been used"
  }),
  // Display and filtering properties
  color: De(
    Ko,
    {
      label: "fields.color",
      description: 'Material color ({ hex: "#FF5733", name: "Red" } or legacy string)',
      group: "display",
      order: 1
    }
  ),
  weight: De(
    d().positive().optional(),
    {
      label: "fields.weight",
      description: "Weight in kg",
      group: "display",
      order: 2
    }
  ),
  imageUrl: De(
    p().url().optional(),
    {
      label: "fields.imageUrl",
      description: "Image URL for stock display",
      group: "display",
      order: 3
    }
  ),
  // Stock filter and categorization properties
  tags: De(
    ae(p()).optional(),
    {
      label: "fields.tags",
      description: "Searchable tags for filtering",
      group: "display",
      order: 4
    }
  ),
  available: De(
    _().optional(),
    {
      label: "fields.available",
      description: "Whether stock is available for selection (defaults to true)",
      group: "display",
      order: 5
    }
  ),
  // Saw configuration (excluded from compression)
  saw: De(
    ye().optional(),
    { label: "fields.saw", description: "Saw configuration data" }
  ).behavior({ compress: "exclude" })
}), Vd = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...xa
  // InputStock doesn't define additional computed properties
}, ka = Bt.extend({
  // ========== Identification ==========
  id: p().optional().describe("Unique identifier"),
  // ========== Shape References ==========
  shapeIds: ae(p()).default([]).describe("List of shape IDs in this group"),
  shapes: ae(p()).default([]).transform((t) => t?.map(String) ?? []).describe("Shape identifiers"),
  // ========== Group Properties ==========
  direction: ma,
  // 'horizontal' | 'vertical'
  q: d().int().min(1).default(1).describe("Quantity of groups"),
  duplicate: _().default(!1).describe("If a duplicate"),
  // ========== Material Properties (from Group) ==========
  name: p().optional().describe("Group name"),
  material: p().optional().describe("Material type"),
  grain: Hi.describe("Grain direction"),
  // ========== Stock Matching (excluded during compression) ==========
  stockMatch: j({
    stockId: p().optional(),
    material: p().optional(),
    thickness: d().optional(),
    grain: Hi.optional()
  }).optional().describe("Matching stock information").behavior({ compress: "exclude" }),
  // ========== Runtime Properties ==========
  shapeList: ae(ye()).optional().describe("Runtime shape list for validation").behavior({ compress: "exclude" })
}), Gd = {
  // Include validation computed properties (isValid)
  ...li
  // InputUserGroup doesn't define additional computed properties
};
j({
  parts: ae(d()).describe("Indices of shapes/parts in the parts array (user-friendly name for shapes)"),
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
  ...li,
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
      firstShape: !1,
      strips: !1,
      position: !1,
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
}, Ir = ln, Hd = {
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
  points: me([
    rc(p(), Oe("Point")),
    be(p(), Oe("Point"))
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
}, Kn = Bt.extend({
  // Core properties from shared schema
  stockType: an,
  stackHeight: cn.describe("Maximum stack height"),
  cutType: un,
  cutPreference: dn,
  // Blade width (numeric for runtime)
  bladeWidth: Sr.describe("Blade width"),
  // Guillotine options
  guillotineOptions: fn,
  // Efficiency options
  efficiencyOptions: Sa,
  // General options (nested stockSelection and stackingMode)
  options: j({
    stockSelection: va,
    minSpacing: kr,
    stackingMode: wa,
    minSpacingDimension: Td
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
  ...li,
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
Kn.describe(JSON.stringify({
  name: "Saw",
  description: "Runtime saw configuration for optimization",
  version: "1.0.0",
  category: "configuration"
}));
const _i = 1e-10, Zd = 10, Jd = Number.MAX_SAFE_INTEGER, Xd = 4294967295, bt = (t) => typeof t == "number" && Number.isFinite(t), Ms = (t) => Array.isArray(t) && t.length > 0;
function is(t, e, i = _i) {
  if (t === e) return 0;
  if (Number.isInteger(t) && Number.isInteger(e))
    return t > e ? 1 : -1;
  const s = t - e;
  return Math.abs(s) < i ? 0 : s;
}
const Qd = {
  greaterThan: (t, e, i = _i) => !bt(t) || !bt(e) ? !1 : is(t, e, i) > 0,
  greaterThanOrEqualTo: (t, e, i = _i) => !bt(t) || !bt(e) ? !1 : is(t, e, i) >= 0,
  lessThan: (t, e, i = _i) => !bt(t) || !bt(e) ? !1 : is(t, e, i) < 0,
  lessThanOrEqualTo: (t, e, i = _i) => !bt(t) || !bt(e) ? !1 : is(t, e, i) <= 0,
  equalTo: (t, e, i = _i) => !bt(t) || !bt(e) ? !1 : is(t, e, i) === 0
};
function ef(t) {
  return bt(t) ? Number.isInteger(t) ? t : Number(t.toFixed(Zd)) : !1;
}
function tf(t) {
  if (!bt(t) || t < 0 || t > Jd)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (Xd + 1) * t);
}
function sf(t, e) {
  if (!Ms(t))
    throw new Error("Invalid array parameter");
  if (!bt(e) || e < 0 || e > t.length)
    throw new Error("Invalid size parameter");
  const i = t.slice(), s = t.length - e;
  for (let n = t.length - 1; n >= s; n--) {
    const a = Math.floor(Math.random() * (n + 1));
    [i[n], i[a]] = [i[a], i[n]];
  }
  return i.slice(s);
}
class ks {
  static calculateMean(e) {
    if (!Ms(e))
      throw new Error("Invalid input array");
    return e.reduce((i, s) => i + s, 0) / e.length;
  }
  static calculateStandardDeviation(e, i = null) {
    if (!Ms(e))
      throw new Error("Invalid input array");
    const s = i ?? this.calculateMean(e), n = e.reduce((a, o) => {
      const r = o - s;
      return a + r * r;
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
  isNumber: bt,
  round: ef,
  getRandom: tf,
  getRandomSample: sf,
  calculateStandardDeviation: ks.calculateStandardDeviation.bind(ks),
  calculateCoefficientOfVariation: ks.calculateCoefficientOfVariation.bind(ks)
};
function Ja(t) {
  return t && typeof t == "object" && typeof t.toData == "function";
}
let Xa = 0, Qa = Date.now();
const nf = 1e4;
function af() {
  return Xa % nf === 0 && (Qa = Date.now()), `${Qa}-${(Xa++).toString(36)}`;
}
class of {
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
      const i = xs(e.schema), s = e.schema;
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
        let o = a;
        for (; o && o._def; ) {
          const l = o._def.typeName || o.constructor?.name;
          if (l === "ZodDefault" || l === "ZodOptional" || l === "ZodNullable") {
            if (o = o._def.innerType || o._def.type, !o) break;
          } else
            break;
        }
        const r = xs(o);
        for (const [l, u] of Object.entries(r)) {
          const c = s ? `${s}.${n}.${l}` : `${n}.${l}`;
          i[c] = u;
        }
        if (o && o.shape) {
          const l = s ? `${s}.${n}` : n;
          this.extractNestedBehaviors(o.shape, i, l);
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
      const o = /* @__PURE__ */ new Set();
      Object.getOwnPropertyNames(this).forEach((r) => o.add(r));
      for (const r in this) o.add(r);
      for (const r of o) {
        if (r.startsWith("_")) continue;
        const l = this.constructor.serializationExcludedProperties;
        if (l && l.includes(r) || this.isGetterProperty(r)) continue;
        const u = this[r];
        if (typeof u == "function" || u === void 0) continue;
        const c = n[r];
        a === "compressed" && c?.compress === "exclude" || c?.serialize === "exclude" || (i[r] = this.serializeValue(u, c, a, r, n));
      }
    } else
      for (const o of s) {
        const r = this[o], l = n[o];
        a === "compressed" && l?.compress === "exclude" || l?.serialize === "exclude" || (i[o] = this.serializeValue(r, l, a, o, n));
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
      const o = e.validationMode === "none" || e.skipSchemaValidation;
      let r;
      o ? r = e : r = s.partial().parse(e);
      for (const l in r) {
        if (!Object.prototype.hasOwnProperty.call(e, l))
          continue;
        const u = r[l];
        if (u !== void 0) {
          const c = Object.getOwnPropertyDescriptor(this, l) || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this), l);
          if (c && c.get && !c.set)
            continue;
          this[l] = u;
        }
      }
    } else
      for (const o in e)
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          const r = e[o];
          if (r !== void 0 && o in this) {
            const l = Object.getOwnPropertyDescriptor(this, o) || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this), o);
            if (l && l.get && !l.set)
              continue;
            this[o] = r;
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
        if (s instanceof Bi) {
          const n = s.issues.map((a) => new ce({
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
      const g = s.pop() || "0", I = parseInt(g, 10);
      isNaN(I) && s.push(g), n = String(e);
    } else {
      const g = s.pop() || "0", I = parseInt(g, 10);
      isNaN(I) ? (s.push(g), n = "1") : n = String(I + 1);
    }
    s.push(n);
    const a = s.join("."), r = `${this.autoId.includes(".") ? this.autoId.substring(0, this.autoId.indexOf(".")) : this.autoId}.${n}`, l = this.constructor, u = this.getDirectPropertyCopy(i), c = l.schema;
    let f = {};
    c && (f = xs(c));
    const h = l.defaults || (c ? c.parse({}) : {}) || {};
    for (const [g, I] of Object.entries(f))
      I.clone === "reset" && (g in h ? u[g] = h[g] : delete u[g]);
    return "id" in u && (u.id = a), u.autoId = r, u.duplicate = !0, u.skipValidation = !0, new l(u);
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
        const o = Object.getOwnPropertyDescriptor(this, n);
        if (o && o.get && !o.set)
          a = !0;
        else if (!o) {
          let l = Object.getPrototypeOf(this);
          for (; l && l !== Object.prototype; ) {
            const u = Object.getOwnPropertyDescriptor(l, n);
            if (u && u.get) {
              a = !0;
              break;
            }
            l = Object.getPrototypeOf(l);
          }
        }
        if (a) continue;
        const r = this[n];
        typeof r == "function" || r === void 0 || (i[n] = this.handleReferenceForCloning(r, n, e));
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
    let o = null;
    if (a && (o = xs(a)[i] || null), o?.clone)
      switch (o.clone) {
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
      return e.map((o) => {
        if (Ja(o)) {
          if (i?.serialize === "reference" || s === "compressed" && i?.compress === "reference") {
            const u = "autoId" in o && o.autoId, c = typeof o.getType == "function";
            if (u) {
              const f = c ? o.getType() : o.constructor.name;
              return {
                __ref: !0,
                id: o?.id,
                autoId: o.autoId,
                __entityType: f
              };
            }
          }
          const l = s === "compressed" ? "compressed" : "full";
          return o.toData(l);
        }
        return o;
      });
    if (Ja(e)) {
      if (i?.serialize === "reference" || s === "compressed" && i?.compress === "reference") {
        const l = "autoId" in e && e.autoId, u = typeof e.getType == "function";
        if (l) {
          const c = u ? e.getType() : e.constructor.name;
          return {
            __ref: !0,
            id: e?.id,
            autoId: e.autoId,
            __entityType: c
          };
        }
      }
      const r = s === "compressed" ? "compressed" : "full";
      return e.toData(r);
    }
    if (e && typeof e == "object" && e.constructor === Object) {
      const o = {}, r = a || this.getFieldBehaviors();
      for (const l in e)
        if (Object.prototype.hasOwnProperty.call(e, l)) {
          const u = n ? `${n}.${l}` : l, c = r[u];
          if (s === "compressed" && c?.compress === "exclude" || c?.serialize === "exclude")
            continue;
          o[l] = this.serializeValue(e[l], c, s, u, r);
        }
      return o;
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
    const n = gs().get(i);
    if (n) {
      const { ...a } = e;
      try {
        return "fromData" in n && typeof n.fromData == "function" ? n.fromData(a) : new n(a);
      } catch (o) {
        return console.warn(`Failed to recreate ${i}:`, o), e;
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
      for (const [a, o] of Object.entries(e))
        n[a] = this.deserializeValue(o, void 0, s);
      return n;
    }
    return e;
  }
}
class et extends of {
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
    et.recreateFunc = e;
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
    let o;
    if (a)
      o = this.recreateNestedClasses(e, i);
    else if (s.enableStrictMode) {
      const r = i.safeParse(e);
      r.success ? o = r.data : o = this.filterInvalidFields(e, r.error, i);
    } else {
      const r = i.safeParse(e);
      if (r.success)
        o = r.data;
      else {
        const l = i.partial().safeParse(e);
        l.success ? o = l.data : o = this.filterInvalidFields(e, l.error, i);
      }
    }
    if (i && o) {
      const r = i.shape || i._def?.shape;
      if (r) {
        const l = Object.keys(r), u = {};
        for (const c of l)
          c in o && (u[c] = o[c]);
        o = u;
      }
    }
    Object.assign(this, o), this.applyComputedProperties(), Object.defineProperty(this, "_type", {
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
    ], a = { ...e }, o = /* @__PURE__ */ new Set();
    for (const l of i.issues)
      if (l.path.length > 0) {
        const u = l.path[0];
        n.includes(u) || o.add(u);
      }
    o.forEach((l) => {
      delete a[l];
    });
    const r = s.partial().safeParse(a);
    return r.success ? r.data : a;
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
    for (const [a, o] of Object.entries(n)) {
      const r = s[a];
      if (r == null || typeof r == "object" && typeof r.getType == "function")
        continue;
      const l = this.extractClassNameFromSchema(o);
      l ? s[a] = this.deserializeValueWithClassName(r, l) : s[a] = this.deserializeValue(r);
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
      const s = e.__entityType || i, a = gs().get(s);
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
        const o = s.stockList.find((r) => r.id === n || r.autoId === n);
        if (o) return o;
      }
      if (i === "Shape" && s.shapeList) {
        const o = s.shapeList.find((r) => r.id === n || r.autoId === n);
        if (o) return o;
      }
      if (i === "Group" && s.groupList) {
        const o = s.groupList.find((r) => r.id === n || r.autoId === n);
        if (o) return o;
      }
      const a = i.toLowerCase() + "List";
      if (s[a] && Array.isArray(s[a])) {
        const o = s[a].find((r) => r.id === n || r.autoId === n);
        if (o) return o;
      }
    }
    return e && typeof e == "object" ? (s && (e.id || e.autoId), et.recreateFunc ? et.recreateFunc(e, s, i) : { ...e, __ref: i }) : e;
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
      const o = i.partial().safeParse(e);
      o.success ? a = o.data : a = this.filterInvalidFields(e, o.error, i);
    }
    for (const o in a)
      if (Object.prototype.hasOwnProperty.call(a, o)) {
        if (!Object.prototype.hasOwnProperty.call(e, o))
          continue;
        const r = Object.getOwnPropertyDescriptor(this, o) || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this), o);
        if (r && r.get && !r.set)
          continue;
        this[o] = a[o];
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
      if (i instanceof Bi)
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
      return e.map((s) => et.cleanEntityForAPI(s));
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
      const o = this.unwrapSchema(a);
      if (o instanceof lc) {
        const r = o.options.some((u) => u instanceof cc), l = o.options.some((u) => u instanceof uc);
        r && l && i.push(n);
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
class ki extends et {
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
    return re.Line;
  }
  /**
    * Validate line
    */
  validate() {
    const e = [];
    return (!he.isNumber(this.x1) || !he.isNumber(this.x2) || !he.isNumber(this.y1) || !he.isNumber(this.y2)) && e.push(new ce({
      message: "Line coordinates must be valid numbers",
      type: "error"
    })), this.x1 === this.x2 && this.y1 === this.y2 && e.push(new ce({
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
    const a = i.filter((o) => o.added);
    for (const o of a) {
      let r = !1, l = !1;
      if (this.dimension === "l" ? (r = he.greaterThan(this.x2, o.x) && he.lessThan(this.x1, o.x + o.l), l = he.greaterThan(this.y1 + n, o.y) && he.lessThan(this.y1 - n, o.y + o.w)) : this.dimension === "w" && (r = he.greaterThan(this.x1 + n, o.x) && he.lessThan(this.x1 - n, o.x + o.l), l = he.greaterThan(this.y2, o.y) && he.lessThan(this.y1, o.y + o.w)), r && l)
        if (s)
          this.shapeCollisions.push(o);
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
  static fromCoordinates(e, i, s, n, a, o) {
    return new ki({ x1: e, y1: i, x2: s, y2: n, origin: a, type: o });
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
const rf = {
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
}, Is = {
  topLeft: {
    top: ["topRight"],
    default: ["topRight"]
  },
  bottomRight: {
    right: ["topRight"],
    default: ["topRight"]
  }
}, Ps = {
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
class ot extends et {
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
    return re.Point;
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
    return new ot(e, i, s);
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
    const s = new ot(e ?? this.x, i ?? this.y);
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
      const s = rf[this.direction];
      return s && s[this.corner] && s[this.corner][this.grid] && i.add(s[this.corner][this.grid]), i;
    }
    return e?.cutType !== "efficiency" ? (Is[this.corner] && (this.grid ? Is[this.corner][this.grid] && Is[this.corner][this.grid].forEach((s) => i.add(s)) : Is[this.corner].default?.forEach((s) => i.add(s))), i) : (Ps[this.corner] && (this.grid ? Ps[this.corner][this.grid] && Ps[this.corner][this.grid].forEach((s) => i.add(s)) : Ps[this.corner].default?.forEach((s) => i.add(s))), i);
  }
}
function Te(t) {
  return !(t === void 0 || t === null || t === "" || typeof t == "object" && !Object.values(t).length);
}
function zi(t, e = !1) {
  const i = typeof t.l == "string" ? X({ v: t.l }) : t.l, s = typeof t.w == "string" ? X({ v: t.w }) : t.w;
  if (!e)
    return { l: i, w: s };
  if (!("trim" in t))
    return { l: i, w: s };
  if (ur(t))
    return { l: i, w: s };
  if (cr(t) && !t.hasTrim)
    return { l: i, w: s };
  const n = t.trim, a = X({ v: n.l1 ?? 0 }) + X({ v: n.l2 ?? 0 }), o = X({ v: n.w1 ?? 0 }) + X({ v: n.w2 ?? 0 });
  return {
    l: i - (typeof a == "string" ? X({ v: a }) : a),
    w: s - (typeof o == "string" ? X({ v: o }) : o)
  };
}
function lf(t, e) {
  if ("trim" in t && !ur(t)) {
    const i = t.trim;
    e.l = e.l - (X({ v: i.w1 ?? 0 }) + X({ v: i.w2 ?? 0 })), e.w = e.w - (X({ v: i.l1 ?? 0 }) + X({ v: i.l2 ?? 0 }));
  }
  return e;
}
function $i(t, e, i = !1) {
  let s = {
    l: t.l,
    w: t.w
  };
  (qi(t) || Ae(t) || ms(t)) && (s = {
    l: X({ v: t.l }),
    w: X({ v: t.w })
  });
  const n = ("rot" in t ? t.rot : 0) ?? 0;
  return i && (s = lf(t, s)), n === e || ([s.l, s.w] = [s.w, s.l]), s;
}
function Pr(t) {
  if (!("l" in t) || !("w" in t)) throw new Error("rotatable item must have l & w properties");
}
function cf(t) {
  Ke(t) || (Pr(t), [t.l, t.w] = [t.w, t.l]);
}
function Yi(t, e, i = null, s) {
  if (!e || !t)
    throw new Error("Container and shape are required");
  let n = 0;
  s && ku(s) ? n = s.options.minSpacing : s && s?.options?.minSpacing ? n = X({ v: s.options.minSpacing }) : lr(e) && (n = e?.saw?.options.minSpacing);
  const a = "allowExactFitShapes" in e && e.allowExactFitShapes === !0, o = zi(e, !0), r = a ? zi(e, !1) : o, l = zi(t, !0);
  let u = o;
  if (a && (he.equalTo(l.l, r.l) && he.equalTo(l.w, r.w) || he.equalTo(l.l, r.w) && he.equalTo(l.w, r.l)) && (u = r), l.l * l.w > u.l * u.w)
    return !1;
  function c(R, B) {
    return he.equalTo(R, B) || he.lessThanOrEqualTo(R, B - n * 2);
  }
  function f(R) {
    return c(R.l, u.l) && c(R.w, u.w);
  }
  const h = Ks(t, e);
  if (t.orientationLock || i !== null) {
    const R = i ?? (h === "w" ? 1 : 0), B = $i(t, R, !0);
    if (a) {
      const A = $i(t, R, !1);
      if (he.equalTo(A.l, r.l) && he.equalTo(A.w, r.w))
        return f(A);
    }
    return f(B);
  }
  const g = $i(t, 0, !0);
  if (a) {
    const R = $i(t, 0, !1);
    if (he.equalTo(R.l, r.l) && he.equalTo(R.w, r.w) && f(R)) return !0;
  }
  if (f(g)) return !0;
  const I = $i(t, 1, !0);
  if (a) {
    const R = $i(t, 1, !1);
    if (he.equalTo(R.l, r.l) && he.equalTo(R.w, r.w) && f(R)) return !0;
  }
  return f(I);
}
function uf(t) {
  if ("orientationLock" in t)
    return t.orientationLock;
  let e = null;
  return (Ke(t) || ms(t) || rt(t) || Ae(t)) && (e = t.orientationLock), e;
}
function Ks(t, e) {
  const i = uf(t);
  if (!Te(i)) return null;
  if (!e || "direction" in t) return i;
  if (!Ke(t) && Ia(t)) return null;
  if ("getStock" in e) {
    const s = e.getStock;
    if (s && Te(s.grain))
      return i === s.grain ? "l" : "w";
  }
  return i;
}
function Cr(t, e) {
  if (Ke(t))
    return Yi(t, e, t.rot) ? [t.rot] : [];
  const i = [];
  for (let s = 0; s <= 1; s++)
    Pt(t, s, e) && Yi(t, e, s) && i.push(s);
  return i;
}
function Pt(t, e = null, i = null) {
  if (!Te(e))
    throw new Error("no rotation provided to canRotate");
  if (e === !0 && (e = 1), e === !1 && (e = 0), t.preventAutoRotation && e !== 0 || !Ke(t) && Ia(t) && e !== 0 || i && !Yi(t, i, e))
    return !1;
  const s = Ks(t, i);
  return !(s === "l" && e === 1 || s === "w" && e === 0);
}
function df(t, e = null, i = null) {
  const s = "rot" in t ? t.rot : 0;
  return e === null && (e = s === 0 ? 1 : 0), !Ke(t) && Ia(t) ? !0 : Pt(t, e, i) ? (s === e || cf(t), !0) : !1;
}
function dt(t, e = null, i = null) {
  e ? e = 1 : e = 0;
  const s = t.id || t.autoId || "unknown";
  return i && e && !Yi(t, i, e) ? (console.warn(`[setRotation] ${s}: Cannot rotate to ${e} - won't fit in container`), !1) : df(t, e, i);
}
function ow(t, e) {
  if (Ke(t)) return t.rot;
  if (!Te(t.orientationLock)) return null;
  const i = e.getStock;
  return !t.orientationLock || !Te(i?.grain) ? null : t.orientationLock === i?.grain ? 0 : 1;
}
function eo(t, e, i, s, n = null) {
  if (!s) throw new Error("requiredSide not supplied to canRotateToDimensionRange");
  const a = zi(t);
  if (a.l >= e && a.l <= i || a.w >= e && a.w <= i) {
    if (t.l === t.w) return !0;
    const o = Math.max(a.l, a.w), r = Math.min(a.l, a.w);
    if (n) {
      if (s === "l") {
        if (o >= e && o <= i && Pt(t, 0, n) || r >= e && r <= i && Pt(t, 1, n)) return !0;
      } else if (s === "w" && (r >= e && r <= i && Pt(t, 0, n) || o >= e && o <= i && Pt(t, 1, n)))
        return !0;
    } else if (t.orientationLock) {
      if (t.orientationLock === "l")
        return s === "l" && o >= e && o <= i;
      if (t.orientationLock === "w")
        return s === "l" && r >= e && r <= i;
    }
  }
  return !1;
}
function ff(t, e, i, s) {
  if (!i) throw new Error("requiredSide not supplied to rotateToDimension");
  if (t.l !== e && t.w !== e) return !1;
  if (t.l === t.w) return !0;
  const n = zi(t), a = Math.max(n.l, n.w), o = Math.min(n.l, n.w);
  if (i === "l") {
    if (a === e && Pt(t, 0, s)) return dt(t, 0);
    if (o === e && Pt(t, 1, s)) return dt(t, 1);
  } else if (i === "w") {
    if (o === e && Pt(t, 0, s)) return dt(t, 0);
    if (a === e && Pt(t, 1, s)) return dt(t, 1);
  }
  return !1;
}
function Ia(t) {
  Pr(t);
  const e = zi(t);
  return he.equalTo(e.l, e.w);
}
function ai(t) {
  return t ? t === "l" ? "w" : "l" : null;
}
function hf(t) {
  return t ? t === "x" ? "y" : "x" : null;
}
function to(t, e) {
  return gc(t, e);
}
function pi(t, e) {
  return He(t, e);
}
function Mi(t, e, i) {
  mc(t, e, i);
}
function io(t, e = !1) {
  if (!Te(t) || typeof t != "object") return !1;
  const i = Object.values(t);
  return i.length === 0 ? !1 : e ? i.some((s) => Te(s) && s) : i.some((s) => Te(s));
}
function rw(t) {
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
function lw(t, e) {
  if (t == null) return "-";
  let i = Math.round(t).toString();
  for (; i.length < e; ) i = "0" + i;
  return i;
}
class hn extends et {
  // Zod schema for validation and serialization
  static schema = fa;
  static computedProperties = ha;
  constructor(e = {}) {
    super(e);
    let i = !1;
    Mt(this) && (i = this.infiniteLength), !e?.preventAutoRotation && !i && (this.orientationLock ? (this.orientationLock === "l" && dt(this, 0), this.orientationLock === "w" && dt(this, 1)) : this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !e?.preventGrainRotation && (this.grain = ai(this.grain)))), this.calculateDimensions(), e.skipValidation || e.skipBusinessValidation || e.validationMode === "none" || e.validationMode === "schema" || this.validate();
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
    return re.Rectangle;
  }
  /**
   * Validate business rules for the rectangle
   * This is separate from schema validation which happens in the constructor
   * Override this method in subclasses for domain-specific validation
   */
  validate() {
    if (this.issues = [], this.warnings = [], (this.l <= 0 || this.w <= 0) && this.issues.push(new ce({
      message: "Rectangle dimensions must be positive",
      type: "error",
      field: [["l"], ["w"]],
      item: this
    })), this.hasTrim) {
      const e = {
        x: (this.trim.w1 || 0) + (this.trim.w2 || 0),
        y: (this.trim.l1 || 0) + (this.trim.l2 || 0)
      };
      e.x >= this.l && this.warnings.push(new ce({
        message: "Trim values exceed length",
        type: "warning",
        field: [["trim"]],
        item: this
      })), e.y >= this.w && this.warnings.push(new ce({
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
        return new ki({
          x1: i,
          x2: i + this.l,
          y1: s,
          y2: s,
          type: "bottom",
          validationMode: "none"
          // parentId: this.id
        });
      case "right":
        return new ki({
          x1: i + this.l,
          x2: i + this.l,
          y1: s,
          y2: s + this.w,
          type: "right",
          validationMode: "none"
          // parentId: this.id
        });
      case "top":
        return new ki({
          x1: i,
          x2: i + this.l,
          y1: s + this.w,
          y2: s + this.w,
          type: "top",
          validationMode: "none"
          // parentId: this.id
        });
      case "left":
        return new ki({
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
      bottomLeft: new ot(this.x, this.y),
      topLeft: new ot(this.x, this.y + this.w),
      topRight: new ot(this.x + this.l, this.y + this.w),
      bottomRight: new ot(this.x + this.l, this.y)
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
    const s = new hn({
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
class Pa extends hn {
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
    return re.Container;
  }
  /**
    * Validate container-specific properties
    */
  validateContainer(e) {
    const i = ["sheet", "linear", "roll", null, void 0, ""], s = this?.stockType;
    if (!i.includes(s)) {
      const n = new ce({
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
    return Mt(this) ? this : Gi(this) ? this.stock : Ke(this) ? this.stock : null;
  }
}
class ei extends et {
  // Required: Define schema and computed properties
  static schema = Xo;
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
    return re.GuillotineState;
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
function Tr(t, e = "cc") {
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
  }, a = {}, r = Object.keys(t).some((l) => ["x1", "x2", "y1", "y2"].includes(l)) ? s : i;
  if (e === "cc") {
    for (const [l, u] of Object.entries(r))
      l in t && (a[u] = t[l]);
    for (const [l, u] of Object.entries(n))
      l in t && (a[u] = t[l]);
  } else {
    for (const [l, u] of Object.entries(r))
      u in t && (a[l] = t[u]);
    for (const [l, u] of Object.entries(n))
      u in t && (a[l] = t[u]);
  }
  return a;
}
function Zn(t = 0, e, i = null, s = null, n = null) {
  if (!Ae(i) && !zt || s === "stock") return !1;
  let a, o;
  if (Ae(i) ? a = i.orientationLock : zt(i) ? a = i.direction : s === "shape" && (a = n), t === 0 || zt(i))
    switch (e) {
      case "n":
        o = a === "w" || n === "w";
        break;
      case "l":
      case "y":
        o = a === "w" || n === "w";
        break;
      case "w":
        o = a === "l" || n === "l";
        break;
      default:
        o = n === "w";
    }
  else if (t === 1)
    if (i) o = i.w > i.l;
    else return !1;
  else if (t === 2) {
    if (!i) return !1;
    switch (e) {
      case "n":
        o = i.w > i.l;
        break;
      case "y":
      case "l":
        o = i.w > i.l;
        break;
      case "w":
        o = i.l >= i.w;
        break;
      default:
        o = !1;
    }
  }
  return o;
}
function mf(t, e, i = null, s = null, n = null) {
  if (!Ae(i) || s === "shape") return !1;
  let a;
  return t === 0 || t === 1 ? Zn(t, e, i, s, n) ? "cc" : !1 : t === 2 ? e === "w" ? i.l < i.w ? "c" : "cc" : !1 : a;
}
class Ca extends et {
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
    return re.Cut;
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
  static fromCoordinates(e, i, s, n, a, o) {
    return new Ca({ x1: e, y1: i, x2: s, y2: n, position: o, stock: a });
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
class Ar extends hn {
  // Zod schema for validation and serialization
  static schema = on;
  static computedProperties = rn;
  constructor(e = {}) {
    if (super(e), !this.guillotineState)
      this.guillotineState = new ei();
    else if (!(this.guillotineState instanceof ei)) {
      const i = typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new ei(i);
    }
    (!this.firstShape || typeof this.firstShape != "object") && (this.firstShape = { sampleRotations: [], isFirstShape: !1 }), (!this.priority || typeof this.priority != "object") && (this.priority = {}), rt(this) && (!this.group || typeof this.group != "object") && (this.group = {
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
    return re.Placeable;
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
    rt(this) && (s || "group" in this && this.group && (delete this.group.placementOrder, this.group.inGroup = !1, this.group.inUserGroup = !1, this.group.reference = null, this.group.addedAsGroup = null)), Ke(this) && "shapes" in this && Array.isArray(this.shapes) && this.shapes.forEach((a) => {
      "reset" in a && typeof a.reset == "function" && a.reset(e, i, s);
    });
  }
  /**
   * Add shape to stock (placeholder for optimization logic)
   */
  addToStock(e) {
    this.stock = e, this.added = !0, e.used = !0, this.grain = e.grain, !Ke(this) && e?.grain && this.rot && (this.grain = ai(e.grain));
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.added = !1, rt(this) && (this.group.addedAsGroup = null, this.firstShape.isFirstShape = !1), Ke(this) && this.shapes.forEach((e) => {
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
      group: rt(e) ? e.group.reference : null,
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
    dt(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
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
    return Mt(e) && typeof this.fitsStock?.[e.parentId] < "u" ? this.fitsStock?.[e.parentId]?.[i ?? "any"] === !0 : Yi(this, e, i);
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
    const s = new ot(this.x + this.l, this.y);
    s.corner = "bottomRight";
    const n = new ot(this.x, this.y + this.w);
    if (n.corner = "topLeft", e?.cutType !== "efficiency" && !i)
      return [n, s];
    const a = new ot(this.x, this.y);
    a.corner = "bottomLeft";
    const o = new ot(this.x + this.l, this.y + this.w);
    return o.corner = "topRight", [a, n, o, s];
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
    if (this.getType() === re.Shape && this.identicalTo?.length && (this.parentId === e.parentId || this.identicalTo.includes(e.parentId)))
      return !0;
    if (this.getType() !== re.Group) {
      if (e.parentId === this.parentId) return !0;
      if (this.getType() === re.Shape && i && this.parentId !== e.parentId) return !1;
    } else if (e.autoId === this.autoId) return !0;
    const { w: s, l: n } = this, { w: a, l: o } = e;
    if (!(s === a && n === o) && !(s === o && n === a)) return !1;
    const r = this.trim, l = e.trim;
    return !r || !l ? r === l : r.l1 === l.l1 && r.l2 === l.l2 && r.w1 === l.w1 && r.w2 === l.w2;
  }
  /**
   * Get perimeter cut vectors (for export)
   */
  getPerimeterCutVectors(e = null) {
    return e === null && (e = Mt(this.stock) ? this.stock.bladeWidth / 2 : 0), [
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
      stock: Mt(this.stock) ? this.stock : e,
      x1: n.x1,
      x2: n.x2,
      y1: n.y1,
      y2: n.y2,
      position: n.type
    }))), i = i.filter((n) => n.isInsideStock), i;
  }
}
let Cs = null, En = !1;
function yf() {
  if (En)
    return Cs;
  try {
    Cs = { runTests: !1, throwErrorsOnFailedTests: !1 }, En = !0;
  } catch {
    Cs = { runTests: !1, throwErrorsOnFailedTests: !1 }, En = !0;
  }
  return Cs;
}
const so = Vo("tests");
Vo("timers");
let bf, Ze;
try {
  {
    const t = new Proxy({}, { get: () => () => t });
    Ze = () => t;
  }
} catch {
  const e = new Proxy({}, { get: () => () => e });
  Ze = () => e;
}
function vt(t = [], e = null) {
  if (!t?.length) return;
  const i = yf();
  if (Ht() && i && i.runTests) {
    const n = i?.testCollector || bf;
    for (const a of t) {
      if (!a || typeof a != "function") {
        console.error("Invalid test function provided:", a);
        continue;
      }
      const o = Date.now();
      let r = !1, l;
      try {
        a(), r = !0;
      } catch (u) {
        if (r = !1, l = u instanceof Error ? u.message : String(u), e ? so(e, l) : so(l), n && n.addResult({
          passed: !1,
          error: l,
          issueMessage: e || void 0,
          timestamp: o
        }), i && i.throwErrorsOnFailedTests) throw u;
      }
      r && n && n.addResult({
        passed: !0,
        issueMessage: e || void 0,
        timestamp: o
      });
    }
  }
}
function vf(t) {
  return t === "horizontal" ? "x" : t === "vertical" ? "y" : null;
}
function no(t) {
  return t === "horizontal" ? "l" : t === "vertical" ? "w" : null;
}
class pn extends Ar {
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
  static schema = zn;
  static computedProperties = sr;
  static defaults = zn.parse({});
  constructor(e = {}) {
    super(e);
  }
  /**
    * Get entity type
    */
  getType() {
    return re.Shape;
  }
  /**
    * Create shape with live objects
    */
  static create(e) {
    const i = new pn(e.data);
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
    dt(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
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
class gn extends Ar {
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
    return this.type === "user" ? re.UserGroup : this.type === "strip" ? re.StripGroup : this.type === "firstShape" ? re.FirstShapeGroup : re.Group;
  }
  /**
    * Initialize shapes array with optional context for reference resolution
    */
  initShapes(e, i) {
    return e.map((s) => {
      if (!rt(s) && !Au(s))
        throw console.log(s), new Error("[GROUP] attempted to init a group with an item other than a shape");
      if (rt(s))
        return s.group.reference = this, s.group.inGroup = !0, s;
      if (i && i.shapeList && s) {
        const a = i.shapeList.find((o) => o.autoId === s.autoId);
        if (a)
          return a.group.reference = this, a.group.inGroup = !0, a;
      }
      const n = i ? { ...s, __context: i } : s;
      return new pn(n);
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
    const i = { ...e.data, shapes: e.shapes }, s = new gn(i);
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
          s && (dt(s, i.rot, this.container) || console.error(`  ❌ FAILED to restore rotation for ${s.id} from ${s.rot} to ${i.rot}`));
        }
      if (this.positions && this.positions.length > 0)
        for (const i of this.positions) {
          const s = this.shapes.find((n) => n.autoId === i.autoId);
          s && s.rot !== i.rot && (console.warn(`[placeMyShapes] Shape ${s.id} has wrong rotation ${s.rot}, expected ${i.rot} - forcing rotation now`), dt(s, i.rot, this.container) || console.error(`[placeMyShapes] ❌ CRITICAL: Cannot fix rotation for ${s.id}`));
        }
      if (this.updatePositions(), !this.positions || this.positions.length === 0)
        throw new Error(`Group ${this.id} cannot place shapes: positions array could not be initialized`);
      for (let i = 0; i < this.shapes.length; i++) {
        const s = this.shapes[i];
        if (!s) continue;
        const n = this.positions.find((r) => r.autoId === s.autoId);
        if (!n) {
          const r = this.shapes.map((u) => u.autoId).join(", "), l = this.positions.map((u) => u.autoId).join(", ");
          throw new Error(`Position not found for shape ${s.autoId} in group ${this.id}. Shapes: [${r}]. Positions: [${l}]`);
        }
        if (s.x = this.x + n.x, s.y = this.y + n.y, !dt(s, n.rot, this.container)) throw new Error("placeMyShapes - unable to set rotation for shape in group");
        i === 0 && this.x === 0 && this.y === 0 && (s.firstShape.isFirstShape = !0), s.group.addedAsGroup = this, s.group.inGroup = this.type === "position", vt([
          () => Ze(this.type === "position" ? s.group.inGroup : !s.group.inGroup).toBe(!0)
        ], `placeMyShapes: Shape ${s.id} inGroup flag should match group type (${this.type})`), vt([
          () => Ze(s.group.addedAsGroup).toBe(this),
          () => Ze(typeof s.group.addedAsGroup).not.toBe("string")
        ], `placeMyShapes: Shape ${s.id} addedAsGroup should be Group reference`), s.score = this.score;
        const o = s.guillotineState?.stripShapeBatches;
        if (this.guillotineState) {
          const r = this.guillotineState.constructor, l = this.guillotineState.toData();
          s.guillotineState = new r(l), o && (s.guillotineState.stripShapeBatches = o);
        }
        s.bestScore = this.bestScore, typeof this.placementOrder == "number" && (s.group.placementOrder = i, s.placementOrder = this.placementOrder), s.addToStock(e);
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
      for (const [l, u] of e) {
        const c = this.shapes.find((f) => f.autoId === l);
        c && c.rot !== u && dt(c, u, this.container);
      }
    }
    this.positions = [], this.type !== "user" && this.sortShapes();
    let i = 0;
    const s = vf(this.direction), n = no(this.direction);
    let a = 0;
    for (const l of this.shapes) {
      if (!l) continue;
      const u = a === this.shapes.length - 1 ? 0 : l.getMinSpacing(this.container.saw), c = e.get(l.autoId) ?? l.rot.valueOf();
      let f;
      c !== l.rot ? f = n === "l" ? l.w : l.l : f = l[n];
      const h = {
        autoId: l.autoId,
        x: 0,
        y: 0,
        rot: c
      };
      s === "x" ? h.x = i : h.y = i, this.positions.push(h), l.group.inGroup = !0, i += a === this.shapes.length - 1 ? f : f + u, a++;
    }
    this.groupLength = i;
    const o = ai(n), r = this.shapes.reduce(
      (l, u) => {
        const c = e.get(u.autoId);
        let f;
        return c !== void 0 && c !== u.rot ? f = o === "l" ? u.w : u.l : f = u[o], f > l ? f : l;
      },
      0
    );
    if (this.groupWidth = r, Ht()) {
      const l = this.shapes.slice(0, -1).reduce((f, h) => f + h.getMinSpacing(this.container.saw), 0), c = this.shapes.reduce((f, h) => f + h[n], 0) + l;
      vt([
        () => Ze(
          he.equalTo(c, this.groupLength),
          "group dimension is incorrect in direction"
        ).to.be.true,
        () => Ze(
          i,
          "currentPosition is incorrect in direction"
        ).to.equal(this.groupLength),
        () => Ze(
          r,
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
    const e = no(this.direction), i = ai(e);
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
      vt([
        () => Ze(e.every((s) => !s.group?.inGroup)).toBe(!0),
        () => Ze(e.every((s) => !s.group?.reference)).toBe(!0)
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
  return pr(t, "orientationLock", ["l", "w"], e, i, s), s;
}, xf = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return pr(t, "grain", ["l", "w"], e, i, s), s;
}, kf = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [], n = He(t, "banding");
  return n != null && (typeof n != "object" || n === null) && new ce({
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
  const n = [], a = He(t, "customData");
  if (a == null) return n;
  if (typeof a != "object" || a === null)
    return new ce({
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
  for (const [, o] of Object.entries(a))
    if (o != null) {
      const r = typeof o;
      ["string", "number", "boolean"].includes(r) || new ce({
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
  const i = He(t, "machining");
  i && "validateEverything" in i && i.validateEverything(t, e);
}, Cf = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], o = He(t, "x");
  return o === null || o === "" || o === void 0 || i != null && X({ v: o }) > i && new ce({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: Qe("x", { returnKey: !0 }),
      // positional (legacy)
      field: Qe("x", { returnKey: !0 }),
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
}, Tf = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], o = He(t, "y");
  return o === null || o === "" || o === void 0 || i != null && X({ v: o }) > i && new ce({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: Qe("y", { returnKey: !0 }),
      // positional (legacy)
      field: Qe("y", { returnKey: !0 }),
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
}, Af = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], o = He(t, "l");
  return He(t, "infiniteLength") || (o === null || o === "" || o === void 0 || o === 0) && new ce({
    item: t,
    message: "errors.validation.not_set",
    params: {
      0: Qe("l", { returnKey: !0 }),
      // positional (legacy)
      field: Qe("l", { returnKey: !0 })
      // named (new)
    },
    field: [["l"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: a,
    category: n
  }), a;
}, Of = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], o = He(t, "w");
  return (o === null || o === "" || o === void 0) && new ce({
    item: t,
    message: "errors.validation.not_set",
    params: {
      0: Qe("w", { returnKey: !0 }),
      // positional (legacy)
      field: Qe("w", { returnKey: !0 })
      // named (new)
    },
    field: [["w"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: a,
    category: n
  }), a;
}, Lf = ({ item: t, index: e, max: i, isWarning: s = !1, saw: n, category: a = [] }) => {
  const o = [], r = He(t, "t");
  return n?.cutType === "beam" && !r && new ce({
    item: t,
    message: "errors.saw.thickness_required_for_beam_saw",
    field: [["t"]],
    index: [e],
    type: "error",
    issues: o,
    category: a
  }), o;
}, Ff = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], a = He(t, "q"), o = He(t, "autoAdd");
  return a == null || o === !0, n;
}, $f = ({
  item: t,
  index: e,
  shapes: i,
  requiredCount: s = 2,
  isWarning: n = !1,
  category: a = ["group"]
}) => {
  const o = [];
  return i.length < s && new ce({
    item: t,
    message: "errors.groups.min_parts",
    index: [e],
    type: n ? "warning" : "error",
    issues: o,
    category: a
  }), o;
}, Df = ({
  item: t,
  index: e,
  shapes: i,
  isWarning: s = !1,
  category: n = ["group"]
}) => {
  const a = [];
  return i.forEach((o, r) => {
    !(typeof o.isSquare == "function", o.isSquare) && !["l", "w"].includes(o.orientationLock) && new ce({
      item: t,
      message: jt("errors.groups.part_needs_orientation_lock", { 0: r + 1 }),
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
  const o = [];
  if (i.length < 2) return o;
  const r = i[0], l = r.trimmedDimensions ? r.trimmedDimensions[s] : r[s];
  return i.slice(1).forEach((u, c) => {
    const f = u.trimmedDimensions ? u.trimmedDimensions[s] : u[s];
    he.equalTo(f, l) || new ce({
      item: t,
      message: jt("errors.groups.dimension_not_correct", {
        0: c + 2,
        1: s === "l" ? "length" : "width",
        2: l,
        3: f
      }),
      shouldTranslate: !1,
      index: [e],
      type: n ? "warning" : "error",
      issues: o,
      category: a
    });
  }), o;
}, Or = ({
  item: t,
  index: e,
  shapeId: i,
  requiredQuantity: s,
  availableQuantity: n,
  shapeName: a,
  shapeIndex: o,
  isWarning: r = !1,
  category: l = ["group"]
}) => {
  const u = [];
  return s > n && new ce({
    item: t,
    message: jt("errors.groups.not_enough_of_part", {
      0: a || (o ?? 0) + 1,
      1: s,
      2: n
    }),
    shouldTranslate: !1,
    index: [e],
    type: r ? "warning" : "error",
    issues: u,
    category: l
  }), n === 0 && new ce({
    item: t,
    message: "errors.groups.no_parts",
    index: [e],
    type: r ? "warning" : "error",
    issues: u,
    category: l
  }), u;
};
function Zs(t) {
  return t && typeof t == "object" && "area" in t;
}
const Jn = {
  missingProperty: (t, e) => `[Sorting Warning] Missing property "${t}" in ${e}`,
  missingMethod: (t, e) => `[Sorting Warning] Missing method "${t}" in ${e}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
}, st = (t, e, i) => e in t ? t[e] : (console.warn(Jn.missingProperty(String(e), i)), null), Ts = (t, e) => (i, s) => {
  const n = t(i, s);
  return n !== 0 ? n : e(i, s);
}, Di = (t, e) => {
  if (Zs(t) && Zs(e))
    return t.area < e.area ? -1 : t.area > e.area ? 1 : 0;
  const i = "l" in t && "w" in t ? Number(t.l) * Number(t.w) : 0, s = "l" in e && "w" in e ? Number(e.l) * Number(e.w) : 0;
  return i < s ? -1 : i > s ? 1 : 0;
}, Dt = (t, e) => {
  const i = st(t, "id", "first item"), s = st(e, "id", "second item");
  if (i === null || s === null || i === void 0 || s === void 0) return 0;
  const n = i.toString().split("."), a = s.toString().split(".");
  return n[0] !== a[0] ? parseInt(n[0]) - parseInt(a[0]) : parseInt(n[1]) - parseInt(a[1]);
};
function Vt(t) {
  const e = Array.isArray(t[0]) ? t.map(([i, s]) => ({ key: i, direction: s })) : t;
  return (i, s) => {
    for (const { key: n, direction: a } of e) {
      const o = st(i, n, "first item"), r = st(s, n, "second item");
      if (!(o === null || r === null) && o !== r)
        return a === "desc" ? o < r ? 1 : -1 : o < r ? -1 : 1;
    }
    return 0;
  };
}
function Lr(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s > n ? i : e;
  }) : null;
}
function Rf(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s < n ? i : e;
  }) : null;
}
const Kt = {
  // Dimension-based sorts
  WDLD: Vt([
    ["w", "desc"],
    ["l", "desc"]
  ]),
  WALA: Vt([
    ["w", "asc"],
    ["l", "asc"]
  ]),
  LDWD: Vt([
    ["l", "desc"],
    ["w", "desc"]
  ]),
  LAWA: Vt([
    ["l", "asc"],
    ["w", "asc"]
  ]),
  WD: Vt([["w", "desc"]]),
  LD: Vt([["l", "desc"]]),
  // ID-based sorts
  LDIDA: Ts(
    Vt([["l", "desc"]]),
    Dt
  ),
  WDIDA: Ts(
    Vt([["w", "desc"]]),
    Dt
  ),
  // Area-based sorts
  AD: (t, e) => -Di(t, e),
  AA: Di,
  AAID: Ts(
    Di,
    Dt
  ),
  ADID: Ts(
    (t, e) => -Di(t, e),
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
    return n !== 0 ? n : -Di(t, e);
  },
  // Position sorts
  YX: Vt([
    ["y", "asc"],
    ["x", "asc"]
  ]),
  XY: Vt([
    ["x", "asc"],
    ["y", "asc"]
  ]),
  // Placement order sorts
  placementOrder: (t, e) => {
    const i = st(t, "placementOrder", "first item") ?? 0, s = st(e, "placementOrder", "second item") ?? 0;
    return i - s;
  },
  typePlacementOrder: (t, e) => {
    const i = st(t, "offcut", "first item"), s = st(e, "offcut", "second item"), n = st(t, "placementOrder", "first item") ?? 0, a = st(e, "placementOrder", "second item") ?? 0;
    return i && !s ? 1 : !i && s ? -1 : n - a;
  },
  typeID: (t, e) => {
    const i = st(t, "offcut", "first item"), s = st(e, "offcut", "second item");
    return i && !s ? 1 : !i && s ? -1 : Dt(t, e);
  },
  stockIDTypePlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s) return 0;
    const n = Dt(i, s);
    if (n !== 0) return n;
    const a = st(t, "offcut", "first item"), o = st(e, "offcut", "second item");
    if (a && !o) return 1;
    if (!a && o) return -1;
    const r = st(t, "placementOrder", "first item") ?? 0, l = st(e, "placementOrder", "second item") ?? 0;
    return r - l;
  },
  offcutPlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i?.id || !s?.id) return 0;
    const n = Dt(i, s);
    if (n !== 0) return n;
    if ("placementOrder" in t && "placementOrder" in e) {
      const a = st(t, "placementOrder", "first item") ?? 0, o = st(e, "placementOrder", "second item") ?? 0;
      return a - o;
    }
    return 0;
  },
  groupPlacementOrder: (t, e) => {
    const i = st(t, "placementOrder", "first item") ?? 0, s = st(e, "placementOrder", "second item") ?? 0, n = i - s;
    if (n !== 0) return n;
    const a = t.group?.placementOrder ?? 0, o = e.group?.placementOrder ?? 0;
    return a - o;
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
    if (Zs(t) && Zs(e) && t.aspect && e.aspect)
      return e.aspect - t.aspect;
    if (!("l" in t) || !("w" in t) || !("l" in e) || !("w" in e))
      return console.warn(Jn.missingAspect), 0;
    const i = Math.max(Number(t.l), Number(t.w)) / Math.min(Number(t.l), Number(t.w));
    return Math.max(Number(e.l), Number(e.w)) / Math.min(Number(e.l), Number(e.w)) - i;
  },
  fillThenArea(t) {
    return (e, i) => !("l" in e) || !("w" in e) || !("l" in i) || !("w" in i) ? (console.warn(Jn.missingLongSide), 0) : i[t] === e[t] ? -Di(e, i) : parseFloat(String(i[t])) - parseFloat(String(e[t]));
  },
  // Utility functions
  getLargest: Lr,
  getSmallest: Rf
};
function _f(t) {
  return Ae(t) || rt(t) || ms(t);
}
function Mf(t, e, i) {
  if (!i) return !0;
  const s = e?.material?.toLowerCase(), n = t?.material?.toLowerCase();
  return !s && !n || s === n;
}
function jf(t, e, i) {
  return i ? !Te(t.t) || !Te(e.t) ? !1 : he.equalTo(X({ v: t.t }), X({ v: e.t })) : !0;
}
function Bf(t, e, i) {
  return i?.stockType !== "linear" || !rt(t) && !Ae(t) ? !0 : Pt(t, 0, e) && he.equalTo(X({ v: t.w }), X({ v: e.w })) || Pt(t, 1, e) && he.equalTo(X({ v: t.l }), X({ v: e.w }));
}
function Fr(t, e, i, s = 0) {
  const n = Ae(t[0]), a = i.stockType;
  if (t.some((A) => Te(A.stockLock) && A.stockLock.length))
    return { stockList: e, shapeList: t, unusableShapes: [], unusableStock: [], newIssues: [] };
  e = e.filter((A) => n || A.autoAdd === !0 || Te(A.q) && Number(A.q) > 0);
  const r = e.some((A) => Te(A.material)), l = e.some((A) => Te(A.t)), u = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), g = [];
  let I = s;
  for (const A of t) {
    const x = e.map(($, Y) => {
      const M = _f(A) && Yi(A, $, void 0, i), le = Mf(A, $, r), q = jf(A, $, l), m = Bf(A, $, i);
      return {
        stockItem: $,
        stockIndex: Y,
        fit: M,
        material: le,
        thickness: q,
        width: m,
        // For this stock item, does it satisfy all requirements?
        satisfiesAll: M && le && q && (a !== "linear" || m)
      };
    });
    A.stockMatch = {
      fit: x.some(($) => $.fit),
      material: !r || x.some(($) => $.material),
      thickness: !l || x.some(($) => $.thickness),
      width: a !== "linear" || x.some(($) => $.width)
    };
    const E = x.filter(($) => $.satisfiesAll), P = E.length > 0;
    if (!n && P) {
      const $ = E.map((Y) => Y.stockItem.parentId);
      A.stockLock = $, $.forEach((Y) => u.add(Y));
    }
    A.stockMatch.fit ? P || (r && !A.stockMatch.material && (h.add(A), g.push(new ce({
      category: ["part", "stock"],
      item: A,
      field: [["material"]],
      index: [I],
      message: "errors.validation.no_matching_stock_material"
    }))), l && !A.stockMatch.thickness && (h.add(A), g.push(new ce({
      category: ["part", "stock"],
      item: A,
      field: [["t"]],
      index: [I],
      message: "errors.validation.no_matching_stock_thickness"
    }))), a === "linear" && !A.stockMatch.width && (f.add(A), g.push(new ce({
      category: ["part", "stock"],
      item: A,
      field: [["w"]],
      index: [I],
      message: "errors.validation.no_matching_stock_width"
    }))), A.stockMatch.material && A.stockMatch.thickness && (a !== "linear" || A.stockMatch.width) && (h.add(A), g.push(new ce({
      category: ["part", "stock"],
      item: A,
      field: [["material"], ["t"]],
      index: [I],
      message: "errors.validation.no_stock_matches_all_requirements"
    })))) : (c.add(A), g.push(new ce({
      category: ["part", "stock"],
      item: A,
      field: [["l"], ["w"]],
      index: [I],
      message: "errors.validation.will_not_fit"
    }))), I++;
  }
  t.forEach((A) => A.stockMatch = null);
  let R, B;
  return n ? (R = t.filter((A) => c.has(A) || f.has(A) || h.has(A)).sort(Kt.ID), B = []) : (R = t.filter((A) => c.has(A) || f.has(A) || h.has(A) || !A.stockLock || !A.stockLock.length).sort(Kt.ID), B = e.filter((A) => !u.has(A.parentId)).sort(Kt.ID), e = e.filter((A) => Mt(A)).filter((A) => u.has(A.parentId)), t = t.filter((A) => !c.has(A) && !f.has(A) && !h.has(A) && A?.stockLock?.length)), {
    stockList: e,
    unusableStock: B,
    shapeList: t,
    unusableShapes: R,
    newIssues: g
  };
}
function Nf(t) {
  return t?.issues?.length > 0;
}
const Vf = ({
  item: t,
  inputStockList: e,
  saw: i,
  partTrim: s = 0,
  index: n
}) => {
  const a = [], o = i.stockType, r = He(t, "q"), l = He(t, "l"), u = He(t, "w");
  return !r || !l || !u || ("applyPartTrim" in t && typeof t.applyPartTrim == "function" && t.applyPartTrim(s, o), Nf(t)) || Fr([t], e, i, n).newIssues.forEach((f) => {
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
  const a = He(t, "l"), o = He(t, "w");
  if (!a || !o) return n;
  try {
    const r = X({ v: e }), l = X({ v: a }), u = X({ v: o }), c = l - r * 2, f = u - r * 2;
    (c <= 0 || f <= 0) && new ce({
      item: t,
      message: "errors.trim.too_much",
      params: {
        0: "part",
        // positional (legacy)
        1: r,
        // positional (legacy)
        2: `${c}x${f}`,
        // positional (legacy)
        item: "part",
        // named (new)
        trimValue: r,
        // named (new)
        result: `${c}x${f}`
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
  const n = [], a = He(t, "l"), o = He(t, "w"), r = He(t, "trim");
  if (!a || !o || !r) return n;
  if ((!Mt(t) || Mt(t) && !("trimmed" in t && t.trimmed)) && typeof r == "object" && r !== null)
    try {
      const u = X({ v: a }), c = X({ v: o }), f = (R) => {
        if (R == null) return 0;
        if (typeof R == "number" || typeof R == "string")
          try {
            return X({ v: R }) || 0;
          } catch {
            return 0;
          }
        return 0;
      }, h = {
        w1: f(He(r, "w1")),
        w2: f(He(r, "w2")),
        l1: f(He(r, "l1")),
        l2: f(He(r, "l2"))
      }, g = h.w1 + h.w2, I = h.l1 + h.l2;
      g >= u && new ce({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${Qe("w1").toUpperCase()} + ${Qe("w2").toUpperCase()}`,
          // positional (legacy)
          1: Qe("l"),
          // positional (legacy)
          2: u,
          // positional (legacy)
          trimFields: `${Qe("l1", { returnKey: !0 })} + ${Qe("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: Qe("l", { returnKey: !0 }),
          // named (new)
          maxValue: u
          // named (new)
        },
        field: [["trim", "w1"], ["trim", "w2"]],
        index: [e],
        type: i ? "warning" : "error",
        issues: n,
        category: s
      }), I >= c && new ce({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${Qe("l1").toUpperCase()} + ${Qe("l2").toUpperCase()}`,
          // positional (legacy)
          1: Qe("w"),
          // positional (legacy)
          2: c,
          // positional (legacy)
          trimFields: `${Qe("l1", { returnKey: !0 })} + ${Qe("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: Qe("w", { returnKey: !0 }),
          // named (new)
          maxValue: c
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
}, ft = {
  // Dimensions
  x: Cf,
  y: Tf,
  l: Af,
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
  stockMatch: Vf,
  // Groups
  groupShapeCount: $f,
  groupOrientationLock: Df,
  groupDimensions: Ef,
  groupQuantity: Or
};
class Js extends Pa {
  static schema = Wn;
  static computedProperties = nr;
  static defaults = Wn.parse({});
  constructor(e = {}) {
    const i = Js.preprocessData(e);
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
    return re.Stock;
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
      const n = ft.q({ item: e, index: e?.index });
      i.push(...n);
    }
    const s = ft.grain({ item: e, index: e?.index });
    i.push(...s), this.issues.push(...i.filter((n) => n));
  }
  /**
    * Create stock instance with live objects
    */
  static create(e) {
    const i = { ...e.data };
    e.saw && (i.saw = e.saw);
    const s = new Js(i);
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
      const o = a.l * a.w * (a.q || 1);
      return n + o;
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
      const o = n.l * n.w;
      return a.l * a.w - o;
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
const oi = ["l1", "l2", "w1", "w2"], zf = ["a", "b", "c", "d"], At = [...oi, ...zf], mt = ["a", "b"];
class Xs extends et {
  // Required: Define schema and computed properties for SchemaClass
  static schema = ln;
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
class Rt extends Xs {
  // Required: Define schema and computed properties for SchemaClass
  static schema = yr;
  static computedProperties = {
    ...Xs.computedProperties,
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
      oi.includes(s) || i.push(new ce({
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
    return new Rt(e);
  }
  /**
   * Create empty banding
   */
  static empty() {
    return new Rt();
  }
  /**
   * Create with all sides
   */
  static allSides(e = !0) {
    const i = new Rt();
    return i.setAllSides(e), i;
  }
}
class Wi extends et {
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
    return this.type && this.size !== null && this.size <= 0 && e.push(new ce({
      message: `Corner ${this.index + 1}: Size must be positive`,
      type: "error"
    })), (this.index < 0 || this.index > 3) && e.push(new ce({
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
    return this.size > n / 2 && s.push(new ce({
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
    return new Wi(e);
  }
  /**
   * Create a radius corner
   */
  static radius(e, i) {
    return new Wi({ type: "radius", size: e, index: i });
  }
  /**
   * Create a bevel corner
   */
  static bevel(e, i) {
    return new Wi({ type: "bevel", size: e, index: i });
  }
}
class It extends Xs {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = br;
  static computedProperties = rd;
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
      s.includes(n) || i.push(new ce({
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
      for (const s of mt)
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
      for (const e of mt)
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
    for (const i of mt)
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
    return new It(e);
  }
  /**
   * Create empty finish
   */
  static empty() {
    return new It();
  }
  /**
   * Create with both faces
   */
  static bothFaces(e = !0) {
    const i = new It();
    return i.setBothFaces(e), i;
  }
  /**
   * Create with front face only
   */
  static frontOnly(e = !0) {
    const i = new It();
    return i.setFace("a", e), i;
  }
  /**
   * Create with back face only
   */
  static backOnly(e = !0) {
    const i = new It();
    return i.setFace("b", e), i;
  }
}
class gi extends Xs {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = Ir;
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
        s.includes(n) || i.push(new ce({
          message: `Invalid planing face: ${n}. Valid faces are 'a' (front) and 'b' (back)`,
          type: "warning"
        }));
    }
    if (this.sides) {
      const s = ["a", "b", "c", "d", "l1", "l2", "w1", "w2"];
      for (const n in this.sides)
        s.includes(n) || i.push(new ce({
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
    return this.faces && Object.keys(this.faces).length > 0 && e < 15 && i.push(new ce({
      message: `Face planing requires at least 15mm thickness (current: ${e}mm)`,
      type: "error"
    })), this.hasAnyPlaning && e < 10 && i.push(new ce({
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
      for (const s of mt)
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
      for (const s of At)
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
      for (const e of mt)
        this.faces[e] = !1;
    if (this.sides)
      for (const e of At)
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
    for (const i of mt)
      this.setFace(i, e);
  }
  /**
   * Set all sides to the same value
   */
  setAllSides(e) {
    for (const i of At)
      this.setSide(i, e);
  }
  /**
   * Calculate total planing area
   */
  calculateArea(e, i) {
    let s = 0;
    if (this.faces) {
      const n = e * i;
      for (const a of mt)
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
      for (const a of At)
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
        const o = e.l * e.t, r = e.w * e.t;
        i += a * ((o + r) / 2) * 0.01;
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
    return new gi(e);
  }
  /**
   * Create empty planing
   */
  static empty() {
    return new gi();
  }
  /**
   * Create with all faces and sides
   */
  static full(e = !0) {
    const i = new gi();
    return i.setAllFaces(e), i.setAllSides(e), i;
  }
  /**
   * Create with faces only
   */
  static facesOnly(e = !0) {
    const i = new gi();
    return i.setAllFaces(e), i;
  }
  /**
   * Create with sides only
   */
  static sidesOnly(e = !0) {
    const i = new gi();
    return i.setAllSides(e), i;
  }
}
class Xe extends et {
  // Zod schema for validation and serialization
  static schema = ad;
  static computedProperties = od;
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
    return re.Extras;
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
    if (di(this.banding)) {
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
      s > 0 && e.t - s < 5 && i.push(new ce({
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
    return di(this.banding) && (i += this.banding.getCost(e)), Xt(this.finish) && (i += this.finish.getCost(e)), Qt(this.planing) && (i += this.planing.getCost(e)), i;
  }
  /**
   * Get human-readable description of all extras
   */
  getDescription() {
    const e = [];
    return di(this.banding) && this.banding.hasValues() && e.push(this.banding.getDescription()), Xt(this.finish) && this.finish.hasValues() && e.push(this.finish.getDescription()), Qt(this.planing) && this.planing.hasValues() && e.push(this.planing.getDescription()), e.length > 0 ? e.join("; ") : "No extras";
  }
  /**
   * Check if any extras are applied
   */
  hasExtras() {
    return !!(di(this.banding) && this.banding.hasValues() || Xt(this.finish) && this.finish.hasValues() || Qt(this.planing) && this.planing.hasValues());
  }
  /**
   * Clear all extras
   */
  clear() {
    di(this.banding) && this.banding.clear(), Xt(this.finish) && this.finish.clear(), Qt(this.planing) && this.planing.clear();
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
    e ? e instanceof Rt ? this.banding = e : this.banding = new Rt(e) : this.banding = void 0;
  }
  /**
   * Set finish
   */
  setFinish(e) {
    e ? e instanceof It ? this.finish = e : this.finish = new It(e) : this.finish = void 0;
  }
  /**
   * Set planing
   */
  setPlaning(e) {
    e ? e instanceof gi ? this.planing = e : this.planing = new gi(e) : this.planing = void 0;
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
    return new Xe(e);
  }
  /**
   * Create empty extras container
   */
  static empty() {
    return new Xe();
  }
  /**
   * Create with specific extras
   */
  static create(e) {
    return new Xe(e);
  }
  /**
   * Check if any extras are applicable to shape
   * Used for UI validation to determine if extras tab should be enabled
   */
  isApplicable(e) {
    return !!(di(this.banding) && this.banding.isApplicable(e) || Xt(this.finish) && this.finish.isApplicable(e) || Qt(this.planing) && this.planing.isApplicable(e));
  }
  /**
   * Get summary of active extras
   */
  getSummary() {
    return {
      hasBanding: di(this.banding) && this.banding.hasValues() || !1,
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
    return s ? di(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" ? Object.keys(s.sides).some((n) => {
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
      const o = s.sides[a];
      return o !== void 0 && o !== !1 && o !== "";
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
    return s ? Tu(s) && typeof s.hasValues == "function" ? s.hasValues() : s.images && Array.isArray(s.images) ? s.images.length > 0 : !1 : !1;
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
          return Xe.hasBanding(e);
        case "finish":
          return Xe.hasFinish(e);
        case "planing":
          return Xe.hasPlaning(e);
        case "imageUpload":
          return Xe.hasImageUpload(e);
      }
    return Xe.hasBanding(e) || Xe.hasFinish(e) || Xe.hasPlaning(e) || Xe.hasImageUpload(e);
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
    return Xe.hasBanding(e) && i.push("banding"), Xe.hasFinish(e) && i.push("finish"), Xe.hasPlaning(e) && i.push("planing"), i;
  }
}
class Wt extends et {
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
    return (this.x < 0 || this.y < 0) && e.push(new ce({
      message: "Position cannot be negative",
      type: "error"
    })), this.diameter <= 0 && e.push(new ce({
      message: "Diameter must be positive",
      type: "error"
    })), this.depth !== void 0 && this.depth < 0 && e.push(new ce({
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
class Qs extends et {
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
    if (this.position < 0 && e.push(new ce({
      message: "Position cannot be negative",
      type: "error"
    })), this.numHoles <= 0 && e.push(new ce({
      message: "Number of holes must be positive",
      type: "error"
    })), this.diameter <= 0 && e.push(new ce({
      message: "Diameter must be positive",
      type: "error"
    })), this.hingeLength <= 0 && e.push(new ce({
      message: "Hinge length must be positive",
      type: "error"
    })), this.depth !== void 0 && this.depth < 0 && e.push(new ce({
      message: "Depth cannot be negative",
      type: "error"
    })), this.numHoles > 1) {
      const i = this.hingeLength - 2 * this.outerSpacing;
      this.diameter * this.numHoles > i && e.push(new ce({
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
      const o = this.outerSpacing + a * n;
      let r, l;
      switch (this.side) {
        case "l1":
          r = this.distanceFromEdge, l = this.position + o;
          break;
        case "l2":
          r = e - this.distanceFromEdge, l = this.position + o;
          break;
        case "w1":
          r = this.position + o, l = this.distanceFromEdge;
          break;
        case "w2":
          r = this.position + o, l = i - this.distanceFromEdge;
          break;
        default:
          r = 0, l = 0;
      }
      s.push(new Wt({
        x: r,
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
    return new Qs(e);
  }
}
class $r extends et {
  // Validation properties (issues, warnings) are inherited from validationBasePropertiesSchema
  // via sawPropertiesSchema which extends it - they are initialized automatically
  // when the Zod schema is parsed in the constructor
  // isValid is also provided as a computed property from validationBaseComputedProperties
  // Zod schema for validation and serialization
  static schema = Kn;
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
  static defaults = Kn.parse({});
  constructor(e = {}) {
    super(e), this.stockType === "linear" && (this.cutType = void 0, this.cutPreference = void 0);
  }
  /**
   * Get entity type
   */
  getType() {
    return re.Saw;
  }
  /**
    * Validate the saw data
    * For backward compatibility, returns Issue[] synchronously
    * Delegates to async validation which uses the schema
    */
  validate() {
    return this.issues = [], this.warnings = [], this.bladeWidth < 0 && this.issues.push(new ce({
      message: "Blade width cannot be negative",
      field: [["bladeWidth"]],
      type: "error",
      shouldTranslate: !1
    })), this.issues;
  }
}
function Ta(t, e, i = "decimal") {
  const s = { ...t };
  for (const [n, a] of Object.entries(e)) {
    const o = t[n];
    switch (a.type) {
      case "number":
        o != null ? s[n] = typeof o == "string" ? X({ v: o, nf: i }) : o : o === null && (s[n] = null);
        break;
      case "trim":
        if (o) {
          const r = {};
          for (const [l, u] of Object.entries(o))
            r[l] = typeof u == "string" ? X({ v: u, nf: i }) : u;
          s[n] = r;
        }
        break;
      case "omit":
        delete s[n];
        break;
      case "set":
        s[n] = a.value;
        break;
      case "transform":
        s[n] = a.transform(o);
        break;
      case "rename":
        o !== void 0 && (s[a.to] = o, delete s[n]);
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
      minSpacing: typeof t?.minSpacing == "string" ? X({ v: t.minSpacing, nf: "decimal" }) : t?.minSpacing ?? 0,
      minSpacingDimension: {
        dimension: typeof t?.minSpacingDimension?.dimension == "string" ? X({ v: t.minSpacingDimension.dimension, nf: "decimal" }) : t?.minSpacingDimension?.dimension ?? 0,
        minSpacing: typeof t?.minSpacingDimension?.minSpacing == "string" ? X({ v: t.minSpacingDimension.minSpacing, nf: "decimal" }) : t?.minSpacingDimension?.minSpacing ?? 0
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
function en() {
  this.issues = [], this.warnings && (this.warnings = []);
}
function Vi(t) {
  t.type === "warning" && this.warnings ? this.warnings.push(t) : this.issues.push(t);
}
function Ki(t) {
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
    return new ce({
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
function ao(t, e) {
  const i = t.safeParse(e);
  return i.success ? [] : Ki(i.error);
}
const Dr = {
  clearValidation: en,
  addIssue: Vi,
  validateWithSchema: ao,
  zodErrorsToIssues: Ki,
  /**
   * Run standard validation flow
   */
  runValidation(t, e = {}) {
    return en.call(this), e.skipSchemaValidation || ao(t, this).forEach((s) => Vi.call(this, s)), this.issues || [];
  }
};
class ti extends et {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Pi;
  static computedProperties = Ed;
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}) {
    super(e);
    const i = Un(this.stockType);
    i.includes(this.cutType) || (this.cutType = i.length > 0 ? i[0] : void 0);
    const s = Yn(this.stockType, this.cutType);
    this.cutPreference && !s.includes(this.cutPreference) ? this.cutPreference = s[0] || void 0 : !this.cutPreference && s.length > 0 && (this.cutPreference = s.includes("l") ? "l" : s[0]);
  }
  /**
   * Get entity type
   */
  getType() {
    return re.InputSaw;
  }
  // Validation properties (issues, warnings, isValid) come from the schema via SchemaClass
  // clearValidation and addIssue are provided by validation-helpers
  /**
   * Validate to perform InputSaw-specific validation
   * Implements the Validatable interface requirement
   */
  validate(e) {
    if (en.call(this), e?.skipSchemaValidation || Dr.runValidation.call(
      this,
      Pi,
      e
    ), !e?.skipBusinessValidation) {
      if (this.bladeWidth !== void 0 && this.bladeWidth !== null) {
        const i = X({ v: this.bladeWidth });
        i === null || isNaN(i) || i < 0 ? Vi.call(this, new ce({
          message: "Blade width must be a non-negative number",
          type: "error",
          field: [["bladeWidth"]]
        })) : i > 100 && Vi.call(this, new ce({
          message: "Blade width seems unusually large (> 100)",
          type: "warning",
          field: [["bladeWidth"]]
        }));
      }
      this.stackHeight !== void 0 && this.stackHeight !== null && (this.stackHeight < 1 ? Vi.call(this, new ce({
        message: "Stack height must be at least 1",
        type: "error",
        field: [["stackHeight"]]
      })) : this.stackHeight > 1e3 && Vi.call(this, new ce({
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
    const n = Un(this.stockType);
    n.includes(this.cutType) || (this.cutType = n.length > 0 ? n[0] : void 0);
    const a = i !== this.stockType, o = s !== this.cutType;
    if (a || o) {
      const r = Yn(this.stockType, this.cutType);
      this.cutPreference && !r.includes(this.cutPreference) ? r.length > 0 ? this.cutPreference = r.includes("l") ? "l" : r[0] : this.cutPreference = void 0 : !this.cutPreference && r.length > 0 && (this.cutPreference = r.includes("l") ? "l" : r[0]);
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
    const e = this.toData(), i = Ta(
      e,
      Uf
    );
    return new $r(i);
  }
}
const Er = At, oo = mt;
oi.map((t) => `side.${t}`), oo.map((t) => `face.${t}`), oo.map((t) => `face.${t}`), Er.map((t) => `side.${t}`);
let Yf = class Xn extends et {
  // Zod schema for validation and serialization
  static schema = qd;
  static computedProperties = zd;
  /**
   * Get entity type (required for AutoSerializable)
   */
  getType() {
    return re.Machining;
  }
  constructor(e = {}) {
    super(e);
  }
  /**
    * Validate machining operations - all or specific type
    */
  validate(e, i, s) {
    const n = [];
    return i === "holes" ? this.holes.forEach((a, o) => {
      (a.x < 0 || a.y < 0) && n.push(new ce({
        message: `Hole ${o + 1}: Position cannot be negative`,
        type: "error"
      })), a.diameter <= 0 && n.push(new ce({
        message: `Hole ${o + 1}: Diameter must be positive`,
        type: "error"
      }));
    }) : i === "hingeHoles" ? this.hingeHoles.forEach((a, o) => {
      a.position < 0 && n.push(new ce({
        message: `Hinge ${o + 1}: Position cannot be negative`,
        type: "error"
      }));
    }) : i === "corners" ? this.corners.forEach((a, o) => {
      a.size <= 0 && n.push(new ce({
        message: `Corner ${o + 1}: Size must be positive`,
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
    this.hingeHoles.push(e instanceof Qs ? e : new Qs(e)), this.validate();
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
    const i = e instanceof Wi ? e : new Wi(e);
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
    const n = e.numHoles > 1 ? (e.hingeLength - 2 * e.outerSpacing) / (e.numHoles - 1) : 0, a = i?.l || i?.longSide || 0, o = i?.w || i?.shortSide || 0;
    for (let r = 0; r < e.numHoles; r++) {
      const l = e.outerSpacing + r * n;
      let u, c;
      switch (e.side) {
        case "l1":
          u = e.distanceFromEdge, c = e.position + l;
          break;
        case "l2":
          u = a - e.distanceFromEdge, c = e.position + l;
          break;
        case "w1":
          u = e.position + l, c = e.distanceFromEdge;
          break;
        case "w2":
          u = e.position + l, c = o - e.distanceFromEdge;
          break;
        default:
          u = 0, c = 0;
      }
      s.push({
        x: u,
        y: c,
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
    return new Xn();
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new Xn(e);
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
  return i ? typeof t == "number" ? isNaN(t) ? null : t : typeof t == "string" ? t : null : e === "decimal" ? t ? X({ v: t, nf: "decimal" }) : null : t;
}
function Zf(t, e, i, s = !1) {
  const n = s ? Object.fromEntries(oi.map((r) => [r, 0])) : { l1: 0, l2: 0, w1: 0, w2: 0 };
  if (!t) return n;
  const o = t && ("x1" in t || "x2" in t || "y1" in t || "y2" in t) ? {
    // CORRECT mapping: y1→l1, y2→l2, x1→w1, x2→w2
    l1: t.y1 ?? t.l1 ?? 0,
    l2: t.y2 ?? t.l2 ?? 0,
    w1: t.x1 ?? t.w1 ?? 0,
    w2: t.x2 ?? t.w2 ?? 0
  } : t;
  return i ? Object.keys(n).forEach((r) => {
    n[r] = o[r] ?? 0;
  }) : Object.keys(n).forEach((r) => {
    const l = o[r];
    l != null && (n[r] = X({ v: l, nf: e }));
  }), n;
}
class Rr extends et {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Ys;
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
    for (const o of a)
      s[o] === null || s[o] === void 0 ? delete s[o] : s[o] !== void 0 && (s[o] = Kf(s[o], i, n), s[o] === null && delete s[o]);
    s.name?.length ? s.name = $u(s.name)?.toUpperCase() : s.name = "", s.material ? s.material = s.material.trim().toUpperCase() : s.material = "", typeof s.notes == "string" ? s.notes = s.notes.replace(/,/g, " ") : s.notes = "", s.trim && (s.trim = Zf(s.trim, i, n, !0)), super(s), this.issues || (this.issues = []), this.warnings || (this.warnings = []);
  }
  /**
   * Get entity type
   */
  getType() {
    return re.InputRectangle;
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
    return en.call(this), e?.skipSchemaValidation || Dr.runValidation.call(
      this,
      Ys,
      e
    ), this.issues;
  }
  // isValid is provided as a computed property from validationBaseComputedProperties
  /**
   * Get trimmed dimensions
   */
  get trimmedDimensions() {
    const e = this.longSide, i = this.shortSide, s = X({ v: this.trim.l1 }) ?? 0, n = X({ v: this.trim.l2 }) ?? 0, a = X({ v: this.trim.w1 }) ?? 0, o = X({ v: this.trim.w2 }) ?? 0;
    return {
      name: this.name,
      id: this.id,
      autoId: this.autoId,
      l: e - (a + o),
      w: i - (s + n)
    };
  }
}
class os extends Rr {
  // Required: Define schema and computed properties for SchemaClass
  // Use getters to defer schema access and avoid circular dependency
  static get schema() {
    return yi;
  }
  static get computedProperties() {
    return Nd;
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
    this.extras || (this.extras = new Xe()), this.extras.banding = e;
  }
  get finish() {
    return this.extras?.finish;
  }
  set finish(e) {
    this.extras || (this.extras = new Xe()), this.extras.finish = e;
  }
  get planing() {
    return this.extras?.planing;
  }
  set planing(e) {
    this.extras || (this.extras = new Xe()), this.extras.planing = e;
  }
  get imageUpload() {
    return this.extras?.imageUpload;
  }
  set imageUpload(e) {
    this.extras || (this.extras = new Xe()), this.extras.imageUpload = e;
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
      extras: e.extras || new Xe()
    };
    super(s, i);
  }
  /**
   * Get entity type
   */
  getType() {
    return re.InputShape;
  }
  /**
    * Apply part trim
    */
  applyPartTrim(e, i) {
    if (!this.readonly)
      if (e = X({ v: e }), this.trim) {
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
      const u = e.fields.reduce((h, g) => {
        const I = g.split(".")[0];
        return h[I] = !0, h;
      }, {}), f = yi.pick(u).safeParse(this.toData());
      if (!f.success) {
        const h = Ki(f.error);
        this.issues.push(...h);
      }
    } else {
      this.issues.length = 0, this.warnings.length = 0;
      const l = yi.safeParse(this.toData());
      if (!l.success) {
        const u = Ki(l.error);
        this.issues.push(...u);
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
    } = e, o = (l) => !a || a.includes(l);
    o("l") && ft.l({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), o("w") && ft.w({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), o("t") && ft.t({
      item: this,
      index: s ?? this.index,
      category: ["part"],
      saw: e.saw
    }), o("q") && ft.q({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), o("trim") && ft.trim({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), !n && i.length > 0, o("customData") && ft.customData({
      item: this,
      index: s ?? this.index
    });
    const r = [];
    this.issues.forEach((l, u) => {
      l || r.push(u);
    });
    for (let l = r.length - 1; l >= 0; l--)
      this.issues.splice(r[l], 1);
    return this.issues;
  }
  /**
   * Convert to Shape instance
   */
  toShape(e) {
    const i = Ta(
      this.toData(),
      Wf,
      e
    );
    return new pn(i);
  }
  changeStockType(e) {
    switch (e) {
      case "sheet":
      case "roll":
        this.orientationLock = "", e === "roll" && (this.t = null);
        break;
      case "linear":
        this.orientationLock = "", this.banding = Object.fromEntries(
          Er.map((i) => [i, !1])
        );
        break;
    }
  }
}
class As extends Rr {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Yt;
  static computedProperties = Vd;
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
    return re.InputStock;
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
      const u = e.fields;
      for (let h = this.issues.length - 1; h >= 0; h--)
        this.issues[h].field.some((I) => u.includes(I[0])) && this.issues.splice(h, 1);
      for (let h = this.warnings.length - 1; h >= 0; h--)
        this.warnings[h].field.some((I) => u.includes(I[0])) && this.warnings.splice(h, 1);
      const c = this.toData();
      console.log("[InputStock.validate] Field-level validation requested for fields:", e.fields), console.log("[InputStock.validate] Data to validate:", c);
      const f = e.fields.reduce((h, g) => {
        const I = g.split(".")[0];
        return h[I] = !0, h;
      }, {});
      try {
        const h = Yt.pick(f);
        console.log("[InputStock.validate] Created partial schema for fields:", Object.keys(f));
        const g = h.safeParse(c);
        if (console.log("[InputStock.validate] Validation result:", g.success ? "SUCCESS" : "FAILED"), g.success)
          console.log("[InputStock.validate] No validation errors found");
        else {
          console.log("[InputStock.validate] Validation errors:", g.error.issues);
          const I = Ki(g.error);
          this.issues = [...this.issues, ...I];
        }
      } catch (h) {
        console.warn(`Failed to validate fields ${e.fields.join(", ")}:`, h);
      }
      this.isNew && (console.log("[InputStock.validate] Clearing isNew flag"), this.isNew = !1);
    } else {
      this.issues = [], this.warnings = [];
      const u = Yt.safeParse(this.toData());
      if (!u.success) {
        const c = Ki(u.error);
        this.issues = c;
      }
    }
    if (e?.skipBusinessValidation)
      return this.issues;
    const a = e?.fields, o = (u) => !a || a.includes(u);
    ["l", "w", "t"].forEach((u) => {
      o(u) && ft[u]({
        item: this,
        saw: s,
        index: n ?? this.index,
        category: ["stock"]
      });
    }), o("grain") && ft.grain({
      item: this,
      index: n ?? this.index,
      category: ["stock"]
    }), o("trim") && ft.trim({
      item: this,
      index: n ?? this.index,
      category: ["stock"]
    }), o("q") && ft.q({
      item: this,
      index: n ?? this.index,
      isWarning: !0,
      category: ["stock"]
    });
    const l = [];
    this.issues.forEach((u, c) => {
      u || l.push(c);
    });
    for (let u = l.length - 1; u >= 0; u--)
      this.issues.splice(l[u], 1);
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
    const a = Ta(
      s,
      Hf,
      e
    );
    return (i || this.saw) && (a.saw = i || this.saw), new Js(a);
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
class _r extends et {
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
    return re.Group;
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
    this.clearValidation(), e.q !== void 0 && ft.q({ item: e, index: "index" in e && typeof e.index == "number" ? e.index : 0 }).filter((s) => s).forEach((s) => this.addIssue(s));
  }
  /**
    * Validate with actual shape data
    */
  validateWithShapes(e = []) {
    if (!e.length)
      throw new Error("A shapeList is required to validate an InputUserGroup.");
    const i = [...this.issues], s = this.findShapes(e), n = ft.groupShapeCount({
      item: this,
      index: 0,
      shapes: s,
      requiredCount: 2
    });
    if (i.push(...n), i.length) return i;
    const a = ft.groupOrientationLock({
      item: this,
      index: 0,
      shapes: s
    });
    if (i.push(...a), i.length) return i;
    const o = this.joinDimension, r = ft.groupDimensions({
      item: this,
      index: 0,
      shapes: s,
      joinDirection: o
    });
    return i.push(...r), i;
  }
  /**
    * Find shapes from shape list
    */
  findShapes(e) {
    if (this.shapeIds?.length && e.length) {
      const s = [];
      for (const n of this.shapeIds) {
        const a = e.find((o) => !!(o.autoId === n || Ae(o) && o.autoId === n || "id" in o && o.id === n));
        a && (Ae(a) || rt(a)) && s.push(a);
      }
      return s.length < this.shapeIds.length && this.addIssue(new ce({
        message: "Could not find all shapes in the shape list",
        type: "error"
      })), s;
    }
    if (!this.shapes.length) return [];
    const i = [];
    for (const s of this.shapes) {
      const n = e.find((a) => !!(a.autoId === s || String(a.autoId) === String(s) || "id" in a && (a.id === s || String(a.id) === String(s)) || Ae(a) && (a.autoId === s || String(a.autoId) === String(s))));
      n && (Ae(n) || rt(n)) && i.push(n);
    }
    return i;
  }
  // isValid is now provided as a computed property from the validation schema
  /**
   * Populate parent IDs from shape list IDs
   */
  populateParentID(e) {
    e?.length && this?.shapeIds?.length && (this.shapes = this.shapeIds.map((i) => {
      const s = e.find((n) => n.autoId === i || Ae(n) && n.autoId === i);
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
      const h = s.filter((I) => Ae(I) || rt(I)), g = this.validateWithShapes(h);
      if (g.filter((I) => I.type === "error").length > 0)
        throw new Error(`Cannot create Group: ${g[0].message}`);
    }
    const a = this.findShapes(s || []);
    if (a.length === 0)
      throw new Error("No shapes found for Group creation");
    const o = a.map((h) => Ae(h) ? h.toShape() : h), r = o[0];
    o.forEach((h) => {
      if (s && Array.isArray(s)) {
        const g = s.findIndex((I) => "group" in I && I.group?.inUserGroup ? !1 : "parentId" in I && "parentId" in h && I.parentId === h.parentId || "id" in I && "id" in h && I.id === h.id);
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
    let l = 0, u = 0;
    this.direction === "horizontal" ? (u = r.w, o.forEach((h) => l += h.l)) : (l = r.l, o.forEach((h) => u += h.w));
    const c = {
      autoId: this.autoId,
      // Use the same autoId as the InputUserGroup
      shapes: o,
      direction: this.direction,
      // Already 'horizontal' or 'vertical'
      l,
      w: u,
      t: r?.t,
      material: r?.material,
      orientationLock: u > l ? "w" : "l",
      // Set based on which dimension is longer
      type: "user",
      q: 1,
      // Groups always have q=1
      preventAutoRotation: !0,
      container: n,
      skipValidation: !0
      // Already validated
    }, f = new gn(c);
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
function Mr(t) {
  return {
    entities: /* @__PURE__ */ new Map(),
    stockList: [],
    shapeList: [],
    ...t
  };
}
function js(t, e) {
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
function Qn(t, e) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t))
    return t.map((s) => Qn(s, e));
  if (typeof t.getType == "function")
    return t;
  if (t.__ref && (t.id || t.autoId)) {
    const s = t.autoId || t.id;
    return Jf(e, s) || t;
  }
  const i = { ...t };
  for (const s in i)
    Object.prototype.hasOwnProperty.call(i, s) && (i[s] = Qn(i[s], e));
  return i;
}
function Aa(t, e, i) {
  if (t == null || t && typeof t == "object" && typeof t.getType == "function")
    return t;
  if (Array.isArray(t))
    return t.every((r) => r && typeof r == "object" && typeof r.getType == "function") ? t : t.map((r) => Aa(r, e));
  if (!t || typeof t != "object" || !t.__entityType && !t.__ref && !t.type)
    return t;
  const s = t.__entityType;
  e?.preventAutoRotation && s && (s === re.Rectangle || s === re.Placeable || s === re.Container || s === re.Shape || s === re.Group || s === re.Offcut || s === re.Stock || s === re.Segment) && (t.preventAutoRotation = !0), e && (t.__context = e);
  const n = t.__ref || s, a = gs();
  if (n && a.has(n)) {
    const o = a.get(n), { __ref: r, __entityType: l, __context: u, ...c } = t, f = new o(c);
    return f.issues && Array.isArray(f.issues) && (f.issues = f.issues.map((h) => h instanceof ce ? h : ce.fromData(h, f))), f.warnings && Array.isArray(f.warnings) && (f.warnings = f.warnings.map((h) => h instanceof ce ? h : ce.fromData(h, f))), f;
  }
  return delete t.__context, t;
}
function xi(t, e) {
  if (e || (e = Mr()), Array.isArray(t)) {
    const n = [];
    for (const a of t) {
      const o = xi(a, e);
      n.push(o), o && typeof o == "object" && (o.autoId || o.id) && js(e, [o]);
    }
    return n;
  }
  if (t && typeof t == "object" && typeof t.getType == "function")
    return (t.autoId || t.id) && js(e, [t]), t;
  const i = Qn(t, e), s = Aa(i, e);
  return s && typeof s == "object" && (s.autoId || s.id) && js(e, [s]), s;
}
function uw(t, e) {
  const i = Mr(e), s = t?.saw ? xi(t.saw, i) : void 0;
  s && js(i, [s]);
  const n = t?.stockList ? xi(t.stockList, i) : [];
  n.length > 0 && (i.stockList = n);
  const a = t?.shapeList ? xi(t.shapeList, i) : [];
  a.length > 0 && (i.shapeList = a);
  const o = t?.cutList ? xi(t.cutList, i) : [], r = t?.segmentList ? xi(t.segmentList, i) : [];
  r.length > 0 && (i.segmentList = r);
  const l = t?.offcuts ? xi(t.offcuts, i) : [];
  return {
    saw: s,
    stockList: n,
    shapeList: a,
    cutList: o,
    segmentList: r,
    offcuts: l,
    context: i
  };
}
function dw(t, e = [], i) {
  return t?.length ? e?.length ? t.map((n) => Xf(n, e, i)).filter((n) => Ke(n)) : [] : [];
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
      return e.find((o) => o.autoId === a || o.id === a);
    }
    return n && n.id ? e.find((a) => a.id === n.id) : n;
  }).filter(Boolean)), t.shapes = s;
  try {
    const n = gs(), a = n.get("Group") || n.get(re.Group);
    if (a) {
      const o = new a(t);
      return o.shapes && Array.isArray(o.shapes) && o.shapes.forEach((r) => {
        r && typeof r == "object" && r.group && (r.group.reference = o, r.group.inGroup = !0, o.added && (r.group.addedAsGroup = o.id || o.autoId));
      }), o;
    }
    return !1;
  } catch {
    return !1;
  }
}
function fw(t, e) {
  Ht() && (t.stocks && t.stocks.forEach((i, s) => {
    Mt(i) || console.warn(`[${e}] Stock at index ${s} is not a proper Stock instance:`, i);
  }), t.shapes && t.shapes.forEach((i, s) => {
    !rt(i) && !Ke(i) && console.warn(`[${e}] Shape at index ${s} is not a proper Shape/Group instance:`, i);
  }), t.segments && t.segments.forEach((i, s) => {
    Gi(i) || console.warn(`[${e}] Segment at index ${s} is not a proper Segment instance:`, i);
  }), t.groups && t.groups.forEach((i, s) => {
    Ke(i) || console.warn(`[${e}] Group at index ${s} is not a proper Group instance:`, i);
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
const eh = hf;
function yw(t, e = null) {
  return e ? t.filter((i) => i.added && i?.stock?.id === e.id) : t.filter((i) => i.added);
}
function ro(t, e) {
  if (!Te(t.stockLock) || Array.isArray(t.stockLock) && !t?.stockLock?.length)
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
      return t[i]((a) => n(a) && !a.group?.inGroup && ro(a, e) && a.l <= e.l);
    if (e?.saw?.stockType !== "roll")
      return e && Mt(e) ? t[i]((a) => n(a) && !a.group?.inGroup && ro(a, e) && a.willItFit(e)) : t[i]((a) => n(a) && !a.group?.inGroup && a.willItFit(e));
  }
  return t[i]((a) => n(a) && !a.group?.inGroup);
}
function vw(t, e = !1, i = !1) {
  if (!t?.length) return [];
  let s = t;
  if (e !== null && (s = t.filter((r) => r.added === e), !s.length))
    return [];
  const n = /* @__PURE__ */ new Map(), a = i ? /* @__PURE__ */ new Map() : null, o = [];
  for (const r of s) {
    let l;
    if (rt(r))
      l = r.parentId;
    else if (Ke(r))
      l = r.id;
    else
      continue;
    if (!n.has(l)) {
      if (n.set(l, !0), a) {
        const u = r.l <= r.w, c = u ? r.l : r.w, f = u ? r.w : r.l, h = c + "-" + f + "-" + r.orientationLock;
        if (a.has(h)) continue;
        a.set(h, !0);
      }
      o.push(r);
    }
  }
  return o;
}
function ww(t, e = null) {
  const i = t.filter((a) => !a?.unusable && (e === null || a.used === e)), s = /* @__PURE__ */ new Map();
  for (const a of i) {
    const o = a.parentId;
    s.has(o) || s.set(o, a);
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
  return s.reduce((a, o, r) => r > 0 ? a + o[n] + i : a + o[n], 0);
}
function kw(t, e) {
  const i = e === "x" ? "l" : "w", s = eh(e);
  if (!t?.length) return null;
  const n = t.reduce((o, r) => o[e] + o[i] > r[e] + r[i] ? o : r);
  return t.filter((o) => o[e] === n[e] && o[i] === n[i]).sort((o, r) => o[s] - r[s])[0];
}
function th(t, e, i) {
  if (e.length <= 1) return t;
  const s = nh(e, i), n = t.reduce((r, l) => (r[l.id] = ah(l, s), r), {}), a = Math.min(...Object.values(n));
  return t.filter((r) => !r.added && n[r.id] === a);
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
function oh(t, e, i = !1) {
  const s = /* @__PURE__ */ new Map(), n = [], a = /* @__PURE__ */ new Set();
  for (let o = 0; o < t.length; o++) {
    const r = t[o], l = r.autoId;
    if (s.has(l)) {
      const u = s.get(l);
      u && (n.push(u.item), s.set(l, null)), n.push(r), a.add(o);
    } else
      s.set(l, { item: r, index: o });
  }
  if (n.length > 0) {
    const o = e ? ` [${e}]` : "", r = [...new Set(n.map((l) => l.autoId))];
    if (console.warn(`[duplicateIdsPresent]${o} Found duplicates!`), console.warn(`  Total items: ${t.length}`), console.warn(`  Duplicate autoIds: ${r.join(", ")}`), n.forEach((l) => {
      console.warn(`  ${l.id} (autoId=${l.autoId}): added=${l.added}, x=${l.x}, y=${l.y}, isGroup=${!!l.shapes}`);
    }), i) {
      const l = Array.from(a).sort((u, c) => c - u);
      for (const u of l)
        t.splice(u, 1);
      console.warn(`  Removed ${l.length} duplicate items. New length: ${t.length}`);
    }
  }
  return n.length > 0;
}
function Pw(t, e) {
  return t.filter((i) => i.l >= e && i.w >= e);
}
function rh(t, e) {
  if (t.stock?.autoId !== e.stock?.autoId) return !1;
  const i = t.x, s = t.x + t.l, n = t.y, a = t.y + t.w, o = e.x, r = e.x + e.l, l = e.y, u = e.y + e.w;
  return !(s <= o || // shape1 is completely to the left of shape2
  r <= i || // shape2 is completely to the left of shape1
  a <= l || // shape1 is completely below shape2
  u <= n);
}
function Cw(t) {
  const e = [], i = t.filter((s) => s.added);
  for (let s = 0; s < i.length; s++)
    for (let n = s + 1; n < i.length; n++)
      rh(i[s], i[n]) && e.push({
        shape1: i[s],
        shape2: i[n]
      });
  return e;
}
function Tw(t) {
  t.sort(Kt.groupPlacementOrder);
  for (let e = 0; e < t.length; e++)
    t[e].placementOrder = e;
}
function Aw(t, e) {
  e && t && (e.score = t.score, e.duplicatePattern = t.id);
}
let jr = () => {
};
function Ow(t) {
  jr = t;
}
function ii(t, e, i, s, n) {
  jr(t, e, i, s, n);
}
class ci extends et {
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
    return re.PointCollection;
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
    const i = new ci();
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
  const n = s ? i.bladeWidth : 0, a = t.x + t.l + n, o = e.x + e.l + n;
  if (!he.lessThan(t.x, o) || !he.greaterThan(a, e.x))
    return !1;
  const r = t.y + t.w + n, l = e.y + e.w + n;
  return he.lessThan(t.y, l) && he.greaterThan(r, e.y);
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
    let o = !1, r = !1;
    if (t.dimension === "l" ? (o = he.greaterThan(t.x2, a.x) && he.lessThan(t.x1, a.x + a.l), r = he.greaterThan(t.y1 + n, a.y) && he.lessThan(t.y1 - n, a.y + a.w)) : t.dimension === "w" && (o = he.greaterThan(t.x1 + n, a.x) && he.lessThan(t.x1 - n, a.x + a.l), r = he.greaterThan(t.y2, a.y) && he.lessThan(t.y1, a.y + a.w)), o && r)
      if (s) t.shapeCollisions.push(a);
      else return !0;
  }
  return s ? t.shapeCollisions : t.shapeCollisions.length > 0;
}
function fi(t, e, i, s, n = null, a = null) {
  return new ki({ x1: t, y1: e, x2: i, y2: s, origin: n, type: a });
}
function uh(t, e) {
  const i = t.getCorners(), s = {};
  return i.bottomLeft.x > 0 && i.bottomLeft.y > 0 && (s.bottomLeftDown = fi(
    i.bottomLeft.x,
    i.bottomLeft.y,
    i.bottomLeft.x,
    0,
    "bottomLeft",
    "bottomLeftDown"
  ), s.bottomLeftLeft = fi(
    i.bottomLeft.x,
    i.bottomLeft.y,
    0,
    i.bottomLeft.y,
    "bottomLeft",
    "bottomLeftLeft"
  )), i.topLeft.x > 0 && i.topLeft.y < e.w && (s.topLeftLeft = fi(
    i.topLeft.x,
    i.topLeft.y,
    0,
    i.topLeft.y,
    "topLeft",
    "topLeftLeft"
  ), s.topLeftTop = fi(
    i.topLeft.x,
    i.topLeft.y,
    i.topLeft.x,
    e.w,
    "topLeft",
    "topLeftTop"
  )), i.topRight.y < e.w && i.topRight.x < e.l && (s.topRightTop = fi(
    i.topRight.x,
    i.topRight.y,
    i.topRight.x,
    e.w,
    "topRight",
    "topRightTop"
  ), s.topRightRight = fi(
    i.topRight.x,
    i.topRight.y,
    e.l,
    i.topRight.y,
    "topRight",
    "topRightRight"
  )), i.bottomRight.x < e.l && i.bottomRight.y > 0 && (s.bottomRightRight = fi(
    i.bottomRight.x,
    i.bottomRight.y,
    e.l,
    i.bottomRight.y,
    "bottomRight",
    "bottomRightRight"
  ), s.bottomRightDown = fi(
    i.bottomRight.x,
    i.bottomRight.y,
    i.bottomRight.x,
    0,
    "bottomRight",
    "bottomRightDown"
  )), s;
}
function ys(t, e, i = null) {
  if (t.has(e.x, e.y)) {
    const s = t.get(e.x, e.y);
    s.type === "group" && !i && (s.type = void 0);
    return;
  }
  i && (e.type = i), t.add(e);
}
function Bs(t, e, i = null) {
  for (const s of e) {
    if (!s) return;
    ys(t, s, i);
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
  const s = new ci(), n = i.toArray().sort(Br), a = e.bladeWidth;
  if (n.forEach((o) => {
    const r = o.corner, l = o.type;
    if (!a)
      s.add(o);
    else
      switch (r) {
        case "topRight":
          {
            const u = Be("top", o, a, r);
            l && (u.type = l), s.add(u);
            const c = Be("right", o, a, r);
            l && (c.type = l), s.add(c);
          }
          break;
        case "topLeft":
          {
            const u = Be("top", o, a, r);
            l && (u.type = l), s.add(u);
            const c = Be("left", o, a, r);
            l && (c.type = l), s.add(c);
          }
          break;
        case "bottomRight":
          {
            const u = Be("bottom", o, a, r);
            l && (u.type = l), s.add(u);
            const c = Be("right", o, a, r);
            l && (c.type = l), s.add(c);
          }
          break;
        case "bottomLeft":
          {
            const u = Be("bottom", o, a, r);
            l && (u.type = l), s.add(u);
            const c = Be("left", o, a, r);
            l && (c.type = l), s.add(c);
          }
          break;
      }
  }), a) {
    const o = s.toArray();
    for (let r = o.length; r--; ) {
      const l = o[r];
      i.has(l.x, l.y) && s.remove(l.x, l.y);
    }
  } else {
    const o = s.toArray();
    for (let r = o.length; r--; ) {
      const l = o[r];
      for (let u = t.length; u--; ) {
        const c = t[u];
        if (l.x === c.x && l.y === c.y) {
          s.remove(l.x, l.y);
          break;
        }
      }
    }
  }
  if (a) {
    const o = /* @__PURE__ */ new Set();
    let r, l, u, c;
    e?.constructor?.name === "Stock" && e?.trimmed || e?.constructor?.name === "Segment" ? (r = e.x, l = e.y, u = e.x + e.l, c = e.y + e.w) : (r = e.x + e?.trim?.l1, l = e.y + e?.trim?.w1, u = e.x + e.l - e?.trim?.l2, c = e.y + e.w - e?.trim?.w2);
    let f = s.toArray();
    for (let h = f.length; h--; ) {
      const g = f[h];
      (he.lessThan(g.x, r) || he.lessThan(g.y, l) || he.greaterThan(g.x, u) || he.greaterThan(g.y, c)) && f.splice(h, 1);
    }
    s.clear(), f.forEach((h) => s.add(h)), o.clear(), f = s.toArray();
    for (let h = f.length; h--; ) {
      const g = f[h];
      for (let I = t.length; I--; ) {
        const R = t[I];
        if (g.collidesWith(R)) {
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
  const n = t.minSpacing, a = e.corner, o = e.direction;
  if (e.type === "shape")
    switch (a) {
      case "topLeft":
        o === "rl" && (s.push(Be("right", e, n, a, o)), s.push(Be("topRight", e, n, a, o))), o === "bt" && (s.push(Be("bottom", e, n, a, o)), s.push(Be("bottomLeft", e, n, a, o)));
        break;
      case "topRight":
        o === "lr" && (s.push(Be("left", e, n, a, o)), s.push(Be("topLeft", e, n, a, o))), o === "bt" && (s.push(Be("bottom", e, n, a, o)), s.push(Be("bottomRight", e, n, a, o)));
        break;
      case "bottomRight":
        o === "lr" && (s.push(Be("left", e, n, a, o)), s.push(Be("bottomLeft", e, n, a, o))), o === "tb" && (s.push(Be("top", e, n, a, o)), s.push(Be("topRight", e, n, a, o)));
        break;
      case "bottomLeft":
        o === "rl" && (s.push(Be("right", e, n, a, o)), s.push(Be("bottomRight", e, n, a, o))), o === "tb" && (s.push(Be("top", e, n, a, o)), s.push(Be("topLeft", e, n, a, o)));
        break;
    }
  else if (e.type === "edge")
    switch (o) {
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
  const r = new ci();
  for (const l of s)
    l.raycast = !0, Bs(r, Gr(t, l, i).toArray());
  return qr(t, i, r), r;
}
function ph(t, e) {
  const i = new ci();
  return t.sort(Br), t.forEach((s) => {
    Ke(s) ? (Bs(i, s.getCoords(e)), s.shapes.forEach((n) => {
      const a = n.getCoords(e);
      Bs(i, a, "group");
    })) : Bs(i, s.getCoords(e));
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
function Br(t, e) {
  return t.y === e.y ? e.x - t.x : e.y - t.y;
}
function Nr(t, e, i, s, n, a) {
  t.a = e.id, t.b = i ? i.id : null, t.direction = s, t.raycast = !0, t.type = n, t.corner = a;
}
function mh(t, e) {
  if (t.saw.cutType !== "efficiency" || e.length <= 1) return null;
  let i = new ci();
  const s = Vr(e, t);
  for (const r of e)
    for (const l of s) {
      if (l.shape.id === r.id) continue;
      const u = Object.values(l.rays).filter((c) => c !== void 0);
      for (const c of u)
        yh(
          c,
          l.shape,
          r,
          i
        );
    }
  const a = t.saw.efficiencyOptions.primaryCompression === "l" ? "lr" : "tb", o = e.reduce((r, l) => (a === "tb" ? r.x + r.l > l.x + l.l : r.y + r.w > l.y + l.w) ? r : l);
  return s.filter(({ shape: r }) => r.id === o.id).forEach(({ shape: r, rays: l }) => {
    const u = Object.values(l).filter((c) => c !== void 0);
    for (const c of u) {
      const f = new ot(c.x2, c.y2);
      a === c.direction && (Nr(f, r, null, c.direction, "edge"), ys(i, f));
    }
  }), i = bh(i), i;
}
function Vr(t, e) {
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
      Os(
        t,
        e,
        i,
        s,
        i.x + i.l
      );
      break;
    case "lr":
      Os(
        t,
        e,
        i,
        s,
        i.x
      );
      break;
    case "tb":
      Os(
        t,
        e,
        i,
        s,
        i.y + i.w
      );
      break;
    case "bt":
      Os(
        t,
        e,
        i,
        s,
        i.y
      );
      break;
  }
}
function Os(t, e, i, s, n) {
  const a = t.dimension === "w", o = a ? "y" : "x", r = a ? "x" : "y", l = a ? "l" : "w";
  if (t[`${r}1`] >= i[r] && t[`${r}1`] <= i[r] + i[l]) {
    const u = t.direction === "lr" && t[`${o}1`] <= n && t[`${o}2`] >= n, c = t.direction === "rl" && t[`${o}1`] >= n && t[`${o}2`] <= n, f = t.direction === "bt" && t[`${o}1`] <= n && t[`${o}2`] >= n, h = t.direction === "tb" && t[`${o}1`] >= n && t[`${o}2`] <= n;
    if (u || c || f || h) {
      const I = a ? t[`${r}1`] : n, R = a ? n : t[`${r}1`], B = new ot(I, R), A = t.origin;
      Nr(B, e, i, t.direction, "shape", A), ys(s, B);
    }
  }
}
function bh(t) {
  const e = new ci();
  return t.points.size === 0 || new Set(t.toArray().map((s) => s.a)).forEach((s) => {
    const n = t.toArray().filter((a) => a.a === s);
    ["right", "left", "top", "bottom"].forEach((a) => {
      const o = vh(
        n,
        a
      );
      o && ys(e, o);
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
function Gr(t, e, i) {
  const s = new ci(), n = e.getAvailableShapePositions(i);
  for (const a of n) {
    let o;
    switch (o = wh(e, t, i), a) {
      case "bottomLeft":
        o = o.cloneAt(o.x - t.l, o.y - t.w), o.shapePosition = "bottomLeft";
        break;
      case "bottomRight":
        o = o.cloneAt(o.x, o.y - t.w), o.shapePosition = "bottomRight";
        break;
      case "topLeft":
        o = o.cloneAt(o.x - t.l, o.y), o.shapePosition = "topLeft";
        break;
      case "topRight":
        o = o.cloneAt(o.x, o.y), o.shapePosition = "topRight";
        break;
    }
    ys(s, o);
  }
  return qr(t, i, s), s;
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
function qr(t, e, i) {
  let s, n, a, o;
  e?.constructor?.name === "Stock" && e?.trimmed || e?.constructor?.name === "Segment" ? (s = 0, n = 0, a = e.x + e.l - t.l, o = e.y + e.w - t.w) : (s = e?.trim?.l1, n = e?.trim?.w1, a = e.l - e?.trim?.l2 - t.l, o = e.w - e?.trim?.w2 - t.w);
  const r = i.toArray();
  for (let l = r.length; l--; ) {
    const u = r[l];
    (he.lessThan(u.x, s) || he.lessThan(u.y, n) || he.greaterThan(u.x, a) || he.greaterThan(u.y, o) || u.x < 0 || u.y < 0) && i.remove(u.x, u.y);
  }
}
function Sh(t, e, i = null) {
  const s = /* @__PURE__ */ new Map();
  for (let n = t.length; n--; ) {
    const a = t[n], o = Cr(a, e.getStock), r = a.shortSide, l = a.longSide;
    o.forEach((u) => {
      if (!a.willItFit(e, u)) return;
      let c;
      !i || i === "l" ? c = u === 0 ? l : r : i === "w" && (c = u === 0 ? r : l), c && s.set(
        c,
        s.has(c) ? s.get(c) + 1 : 1
      );
    });
  }
  return s;
}
function ea(t, e) {
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
      if (!dt(
        t,
        0,
        e
      ))
        throw new Error(
          "could not rotate shape correctly for subset calculation"
        );
    } else if (!e.isSquare && t.longSide === e.w && !t.rot && !dt(
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
  e.forEach((c) => c.orientationLock = null), ea(
    e,
    t
  );
  const n = t.bladeWidth, a = [];
  let o = this.config.subset.shuffles;
  (e.length === 1 || e[0].parentId === e[e.length - 1].parentId) && (o = 1), i === "l" ? e.sort(
    Kt.LD
  ) : e.sort(
    Kt.WD
  ), s || (s = e[0]);
  function r(c, f = !0) {
    f && Kt.shuffle(
      e
    );
    const h = ta(
      n,
      e,
      t.getStock,
      i,
      t[i],
      !1,
      s
    );
    h !== !1 && c.push(
      h
    );
  }
  r(
    a,
    !1
  );
  for (let c = o; c--; ) r(
    a
  );
  if (a.sort(
    (c, f) => f.score.efficiency - c.score.efficiency
  ), !a.length) return !1;
  const l = a[0];
  let u = null;
  return l.totalLength + n < t.l && (u = t.l - (l.totalLength + n), l.offcut = u), l;
}
function kh(t, e, i, s = "l", n, a = !1, o = this.config.subset.shuffles, r = null, l = this.config.subset.efficiency.limit) {
  if (!e?.length) return !1;
  const u = [], c = [
    (I, R) => R[s] - I[s],
    // Largest first
    (I, R) => I[s] - R[s],
    // Smallest first
    (I, R) => R[s] / R.area - I[s] / I.area,
    // Best dimension-to-area ratio
    (I, R) => R.area - I.area,
    // Largest area first
    (I, R) => I.area - R.area
    // Smallest area first
  ], f = e.every(
    (I, R, B) => R === 0 || I.isIdentical(B[R - 1])
  );
  if (!a) {
    const I = e.reduce((R, B) => R + B[s] + t, 0) - t;
    if (I <= n)
      return I / n > l ? {
        totalLength: I,
        shapes: e,
        firstShape: e[0],
        firstShapeRotation: e[0].rot,
        stock: i,
        cutType: "guillotine",
        type: "subset",
        score: {
          efficiency: I / n,
          totalShapesPlaced: e.length
        },
        area: e.reduce((R, B) => R + B.area, 0)
      } : !1;
  }
  const h = ta(t, e, i, s, n, a, r);
  if (h !== !1 && (u.push(h), h.score.efficiency > 0.95 && e.length > 10))
    return h;
  if (f)
    return u[0] || !1;
  const g = Math.min(o, c.length);
  for (let I = 0; I < g; I++) {
    const R = [...e];
    R.sort(c[I % c.length]);
    const B = ta(t, R, i, s, n, a, r);
    if (B !== !1 && (u.push(B), B.score.efficiency > 0.98 && e.length > 30))
      break;
  }
  return u.sort((I, R) => R.score.efficiency - I.score.efficiency), u[0] || !1;
}
function ta(t, e, i, s = "l", n, a = !1, o = null) {
  if (!n || n <= 0 || e?.length < 1) return !1;
  let r = 0;
  const l = [];
  if (o || (o = e[0]), l.push(o), r = o[s], r > n) return !1;
  const u = e.findIndex(
    (c) => c.id === o?.id
  );
  u > -1 && e.splice(u, 1);
  for (const c of e) {
    const f = c[s], h = c.getMinSpacing(
      i.saw,
      !0
    );
    if (!(r + t + h + f > n) && (r += t + h + f, l.push(c), r + t + h >= n))
      break;
  }
  if (o && e.splice(
    u,
    0,
    o
  ), !a && r <= n || a && r + t >= n && r <= n) {
    const c = r / n;
    return c > 1 && console.error(
      "subset created effieciency > 1"
    ), {
      type: "subset",
      totalLength: r,
      shapes: l,
      stock: i,
      cutType: "guillotine",
      score: { efficiency: c, totalShapesPlaced: l.length },
      firstShape: o,
      firstShapeRotation: o?.rot,
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
  const o = s === "l" ? "x" : "y", r = s === "l" ? "y" : "x";
  let l = 0;
  Ke(i) ? ea(
    t,
    i
  ) : ea(
    t,
    i ?? e
  ), a && (s === "l" ? t.sort(
    Kt.LDIDA
  ) : t.sort(
    Kt.WDIDA
  )), t.forEach(
    (u, c) => {
      u[o] = i ? i[o] + l : l, i && (u[r] = i[r]), l += u[o === "x" ? "l" : "w"] + e.bladeWidth + u.getMinSpacing(e.saw, !0), vt(
        [() => Ze(
          l
        ).to.be.a(
          "number"
        )]
      ), Ke(i) ? u.group.placementOrder = c : u.placementOrder = c, n && u.addToStock(e);
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
  ii("subset", `guillotine subset for segment ${t.id}`);
  function s(x, E = []) {
    const { shapes: P } = a(x);
    return P.filter(($) => {
      if ($.added || E.find((Y) => Y.id === $.id)) return !1;
      if ($.orientationLock)
        return he.equalTo($[c], x) ? he.lessThanOrEqualTo($.l, t.l) && he.lessThanOrEqualTo($.w, t.w) : !1;
      if (he.equalTo($.l, x) || he.equalTo($.w, x)) {
        const Y = he.equalTo($.l, x) ? $.w : $.l;
        return he.lessThanOrEqualTo(Y, t[t.cutPreference]);
      }
      return !1;
    });
  }
  function n(x, E, P, $ = null) {
    let Y = s(
      x,
      E
    );
    if ($) {
      const q = Y.find(
        (m) => m.parentId === $.parentId
      );
      if (q) return q;
    }
    if (!Y.length) return !1;
    const M = [];
    for (const q of Y) {
      const m = q.l === x ? q.w : q.l;
      P.includes(m) && M.push(q);
    }
    return Y = M.length ? M : Y, Lr(Y);
  }
  function a(x) {
    const E = x;
    return A.has(E) || A.set(E, { shapes: [], priorities: [] }), A.get(E);
  }
  function o(x = null) {
    function E($, Y, M) {
      const { shapes: le, priorities: q } = a(Y);
      le.includes($) || (le.push($), q.push(M));
    }
    if (!g?.length) return A;
    const P = t.getStock;
    for (const $ of g) {
      let Y = $.getPriority(P);
      x && $.parentId !== x.parentId && (Y = 0);
      const M = ai(c);
      if (!$.orientationLock)
        $.longSide <= h && $.shortSide <= t[M] && E($, $.l, Y), !$.isSquare && $.shortSide <= h && $.longSide <= t[M] && E($, $.w, Y);
      else {
        const le = Cr(
          $,
          t.getStock
        );
        if (vt([() => Ze(le.length).to.equal(1)]), dt(
          $,
          le[0],
          t.getStock
        ) === !1)
          throw new Error(
            "could not rotate shape correctly for subset calculation"
          );
        const m = ai(c);
        $[c] <= h && $[m] <= t[m] && E($, $[c], Y);
      }
    }
    return A;
  }
  function r() {
    const x = [], E = Array.from(A.entries()).map(([$, { shapes: Y, priorities: M }]) => ({
      dimension: $,
      count: Y.length,
      totalPriority: Y.length * Math.max(...M, 0)
    }));
    let P = E.reduce(($, { totalPriority: Y }) => $ + Y, 0);
    for (; E.length > 0; )
      if (P <= 0 || !Number.isFinite(P)) {
        const $ = [];
        E.forEach(({ dimension: Y, count: M }) => {
          $.push(...Array(M).fill(Y));
        });
        for (let Y = $.length - 1; Y > 0; Y--) {
          const M = Math.floor(Math.random() * (Y + 1));
          [$[Y], $[M]] = [$[M], $[Y]];
        }
        x.push(...$);
        break;
      } else {
        const $ = Math.random() * P;
        let Y = 0, M = -1;
        for (let z = 0; z < E.length; z++)
          if (Y += E[z].totalPriority, Y > $) {
            M = z;
            break;
          }
        M === -1 && (M = Math.floor(Math.random() * E.length));
        const { dimension: le, count: q, totalPriority: m } = E[M];
        x.push(le), E[M].count--, E[M].totalPriority -= m / q, E[M].count === 0 ? (P -= m, E.splice(M, 1)) : P -= m / q;
      }
    return x;
  }
  function l(x, E, P, $, Y, M, le) {
    return P += x + E, $.push(x), Y.push(
      M.l === x ? M.w : M.l
    ), le.push(M), P;
  }
  function u(x = null) {
    if (!g?.length) return [];
    if (!A.size) return [];
    const E = /* @__PURE__ */ new Map();
    let P = 0;
    const $ = [], Y = [], M = [];
    let le = null, q = !0;
    for (let K = 0; K < this.config.subset.guillotine.shuffles; K++) {
      P = 0, $.length = 0, Y.length = 0, M.length = 0, le = null, q = !0;
      const w = r();
      for (const V of w) {
        if (q ? le = V : le = f + V, P + le > h) continue;
        const H = n(
          V,
          Y,
          M,
          x
        );
        H && (P = l(
          V,
          q ? 0 : f,
          P,
          $,
          M,
          H,
          Y
        ), q = !1);
      }
      if (P) {
        const V = P / h;
        if (vt([() => Ze(V).to.lessThanOrEqual(1)]), V < this.config.subset.efficiency.limit) continue;
        const H = Y.map((de, Se) => Se);
        H.sort((de, Se) => M[Se] !== M[de] ? M[Se] - M[de] : $[Se] - $[de]);
        const G = H.map(
          (de) => $[de]
        ), W = H.map(
          (de) => Y[de]
        );
        vt([
          () => Ze(oh(W)).to.be.false
        ]), E.set(
          G.join("-"),
          {
            usedDimensions: G,
            usedShapes: W,
            efficiency: V,
            target: h,
            totalLength: P,
            priorityShape: x ? x.parentId : null
          }
        );
      }
    }
    if (E.size === 0) return [];
    const m = Array.from(
      E.values()
    );
    m.sort(
      (K, w) => K.efficiency > w.efficiency ? -1 : K.efficiency < w.efficiency ? 1 : K.efficiency === w.efficiency ? w.usedDimensions.length - K.usedDimensions.length : 0
    );
    const z = m.slice(
      0,
      20
    );
    if (!z.length) return [];
    const Q = z.slice(
      0,
      typeof this.config.guillotine.stripShapes.iterations == "number" ? this.config.guillotine.stripShapes.iterations : 1
    );
    return Q.length ? (Q.forEach(
      (K) => {
        K.usedShapes.forEach(
          (w, V) => {
            const H = K.usedDimensions[V];
            vt([() => Ze([w.l, w.w].includes(H)).to.be.true]);
            let G;
            w.isSquare ? G = 0 : w.longSide === H ? G = t.getStock.cutPreference === "l" ? 1 : 0 : G = t.getStock.cutPreference === "l" ? 0 : 1, w.guillotineState || (w.guillotineState = new ei({})), w.guillotineState.setStripShapeBatchGroup(B, {
              stockId: t.getStock.autoId,
              dimension: H,
              rot: G,
              order: V,
              //by this point sorting should have taken place
              priorityShape: K.priorityShape
            });
          }
        ), B++, vt(
          [
            () => {
              const w = K.usedDimensions.reduce(
                (G, W) => G + W,
                0
              ), V = (K.usedDimensions.length - 1) * f, H = w + V;
              return Ze(he.lessThanOrEqualTo(H, h)).to.be.true;
            },
            () => Ze(
              Q.every((w) => w.efficiency >= this.config.subset.efficiency.limit)
            ).to.be.true,
            () => Ze(
              Q.every(
                (w) => w.usedDimensions.length === w.usedShapes.length
              )
            ).to.be.true
          ]
        );
      }
    ), Q) : [];
  }
  const c = ai(t.cutPreference), f = t.getStock.bladeWidth, h = t[c];
  vt([() => Ze(h).to.be.a("number")]);
  const g = th(
    t.shapes,
    e,
    i
  ), I = t.getStock;
  g.sort((x, E) => {
    const P = E.getPriority(I) - x.getPriority(I);
    if (P !== 0) return P;
    const $ = x.id.toString().split("."), Y = E.id.toString().split(".");
    return $[0] !== Y[0] ? parseInt($[0]) - parseInt(Y[0]) : parseInt($[1]) - parseInt(Y[1]);
  });
  const R = [];
  let B = 0;
  const A = /* @__PURE__ */ new Map();
  if (!this.config.priority.enable || t.type !== "root" || !t.shapes[0].getPriority(I)) {
    o();
    const x = u.call(this);
    R.push(...x);
  } else {
    const x = t.shapes[0];
    o(x);
    const E = Math.min(t.shapes.length, this.config.guillotine.stripShapes.numPriorityShapes);
    for (let P = 0; P < E; P++) {
      const $ = u.call(this, x);
      R.push(...$);
    }
  }
  return ii("subset", `${R.length} strip shape results ${R.map((x) => x.usedShapes.map((E) => E.id).join()).join(" | ")}`), R?.length ? R.length : 0;
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
    const o = s[a], r = e.findIndex((c) => c.autoId === a), l = e[r], u = Or({
      item: null,
      // No specific item context for this validation
      index: r >= 0 ? r : 0,
      shapeId: a,
      requiredQuantity: o,
      availableQuantity: Number(l?.q ?? 0),
      shapeName: l?.name,
      shapeIndex: r >= 0 ? r : void 0
    });
    n.push(...u);
  }
  return i && t.forEach((a) => {
    const o = a.validateWithShapes(e);
    o?.length && n.push(...o);
  }), n;
}
function zr(t) {
  const {
    shapes: e,
    container: i,
    targetSize: s,
    d: n,
    id: a,
    exact: o,
    groupDirection: r = "horizontal",
    firstShape: l = null,
    iterations: u,
    type: c = "position",
    tolerance: f = 1e-3,
    config: h
  } = t, g = u ?? h?.subset?.shuffles ?? 10;
  vt([
    () => Ze(s).to.be.greaterThan(0)
  ]);
  const I = Th(e, r, n, i, f);
  if (I.length < 2) return !1;
  const R = { config: h }, B = kh.call(
    R,
    i.bladeWidth,
    I,
    i.getStock,
    Oh(r),
    s,
    o,
    g,
    l
  );
  if (!B) return !1;
  if (B?.shapes?.length > 1 && B?.totalLength) {
    let A;
    try {
      A = new gn({
        id: a,
        direction: r,
        shapes: B.shapes,
        container: i,
        type: c
      }), ii("groups", `[createGroup] Created group ${A.id} direction=${r} dims=${A.l}x${A.w} with ${A.shapes.length} shapes, [${A.shapes.map((x) => x.id).join()} for ${i.getType()} ${i.id}]`);
    } catch (x) {
      return console.error("group error", x), !1;
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
    firstShape: o = null,
    preventDuplicates: r = !1,
    tolerance: l,
    maxGroups: u,
    config: c,
    counters: f,
    type: h
  } = t, g = l ?? c?.groups?.tolerance ?? 0.05;
  if (!Te(s))
    throw new Error("attempting to create a group with no target size");
  if (s <= 0)
    return console.warn(`Invalid targetSize ${s} - cannot create groups with zero or negative target size`), [];
  if (!Te(i))
    throw new Error("attempting to create a group with no container");
  if (!e?.length || e.length < 2) return [];
  const I = Wr(a), R = ai(a), B = I === "horizontal" ? i.w : i.l, A = i.getStock;
  let x = [...e], E = o;
  if (E)
    if (ff(
      E,
      E[R],
      R,
      A
    ) === !1)
      E = null;
    else {
      const Q = E[R], K = Q * (1 - g);
      let w = Q * (1 + g);
      w > i[R] && (w = i[R]), x = e.filter((V) => !rt(V) || V.autoId === E.autoId ? !1 : eo(
        V,
        K,
        w,
        R,
        A
      ));
    }
  const P = Sh(
    x,
    i,
    R
  ), $ = Array.from(P.keys()).filter((z) => z <= B).sort((z, Q) => Q - z);
  if ($.length === 0) return [];
  const Y = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map();
  for (const z of x) {
    const Q = /* @__PURE__ */ new Map();
    for (const K of $) {
      const w = K * (1 - g);
      let V = K * (1 + g);
      V > i[R] && (V = i[R]);
      const H = eo(
        z,
        w,
        V,
        R,
        A
      );
      Q.set(K, H);
    }
    M.set(z.autoId, Q);
  }
  for (const z of $) {
    const Q = [];
    for (const K of x) {
      if (!rt(K)) continue;
      M.get(K.autoId)?.get(z) && Q.push(K);
    }
    Y.set(z, Q);
  }
  const le = [], q = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Map();
  for (const z of $) {
    if (u !== void 0 && le.length >= u)
      break;
    const Q = [];
    let K = Y.get(z).filter((w) => !q.has(w.autoId));
    if (!(K.length < 2)) {
      for (; K.length >= 2 && !(u !== void 0 && le.length >= u); ) {
        let w, V = !1;
        if (Q.length && !r) {
          const H = Q[Q.length - 1], G = H.shapes.slice(), W = /* @__PURE__ */ new Set(), de = new Set(K.map((Ce) => Ce.autoId)), Se = [];
          let ke = !0;
          for (const Ce of G) {
            let _e = !1;
            if (de.has(Ce.autoId) && !W.has(Ce.autoId)) {
              const se = K.find((lt) => lt.autoId === Ce.autoId);
              se && (Se.push(se), W.add(Ce.autoId), _e = !0);
            }
            if (!_e)
              for (const se of K) {
                if (W.has(se.autoId)) continue;
                const lt = `${se.autoId}-${Ce.autoId}`;
                if (m.has(lt) || m.set(lt, se.isIdentical(Ce)), m.get(lt)) {
                  Se.push(se), W.add(se.autoId), _e = !0;
                  break;
                }
              }
            if (!_e) {
              ke = !1;
              break;
            }
          }
          if (ke && Se.length === G.length) {
            if (V = !0, H.positions?.length === Se.length)
              for (let Ce = 0; Ce < Se.length; Ce++) {
                const _e = Se[Ce], se = G[Ce], lt = H.positions[Ce]?.rot ?? se.rot;
                if (_e.rot !== lt && !dt(_e, lt, i)) {
                  console.warn(`  Failed to rotate ${_e.id} to ${lt} - skipping clone`), V = !1;
                  break;
                }
              }
            V && (vt([
              () => Ze(Se.every((Ce, _e) => {
                const se = H.positions[_e]?.rot ?? G[_e].rot;
                return Ce.rot === se;
              }), "at least one identical group shape not rotated correctly").to.be.true
            ]), w = H.cloneWithNewShapes(Se));
          }
        }
        if (V || (w = zr({
          shapes: K,
          container: i,
          targetSize: s,
          d: z,
          id: "g" + (typeof f?.group == "number" ? f.group : 0),
          exact: n,
          groupDirection: I,
          firstShape: E,
          tolerance: g,
          config: c,
          type: h
        })), w) {
          typeof f?.group == "number" && f.group++, Q.push(w), w.shapes.forEach((G) => q.add(G.autoId));
          const H = [];
          for (const G of K)
            q.has(G.autoId) || H.push(G);
          if (K = H, K.length < 2) break;
        } else
          break;
      }
      le.push(...Q);
    }
  }
  return le;
}
function Th(t, e, i, s, n = 1e-3) {
  return t.filter((a) => {
    const o = Ks(a, s);
    if (o) {
      const h = o === "w" ? 1 : 0;
      if (a.rot !== h && !dt(a, h, s))
        return console.error(`[filterAndRotateShapes] FAILED to pre-rotate shape ${a.id} to respect orientation lock. Excluding from group.`), !1;
    }
    if (a.isSquare) return !0;
    const r = i * (1 - n), l = i * (1 + n), u = a.l >= r && a.l <= l, c = a.w >= r && a.w <= l;
    let f = null;
    if (u && c) {
      const h = Math.abs(a.l - i), g = Math.abs(a.w - i);
      f = h <= g ? "l" : "w";
    } else u ? f = "l" : c && (f = "w");
    if (f !== null) {
      const h = Ah(
        f,
        e,
        a.rot
      ), g = Ks(a, s), I = h ? 1 : 0;
      return g && (g === "l" && I === 1 || g === "w" && I === 0) || !Pt(a, h, s) ? !1 : dt(a, h, s);
    }
    return !1;
  });
}
function Ah(t, e, i) {
  return e === null ? t === "l" : t === (e === "vertical" ? "l" : "w") ? i === 1 : i === 0;
}
function Wr(t) {
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
  return t.filter((n) => Ke(n) || !s.has(n.autoId));
}
function $h(t, e = "") {
  const i = /* @__PURE__ */ new Set();
  t.filter(Ke).forEach((o) => {
    o.shapes?.forEach((r) => {
      i.add(r.autoId);
    });
  });
  const n = t.filter((o) => rt(o)).filter((o) => i.has(o.autoId)), a = e ? ` [${e}]` : "";
  Ze(
    n.length,
    `${a} Found ${n.length} shapes that exist both in groups and independently: ${n.map((o) => o.id || o.autoId).join(", ")}`
  ).to.equal(0);
}
function Rw(t) {
  const e = [], i = t.filter((n) => Ke(n)), s = t.filter((n) => rt(n));
  for (const n of i)
    n.added && e.push(n);
  for (const n of s)
    n.added && !n.group.inGroup && e.push(n);
  return e;
}
function Dh(t, e) {
  t.push(e), t.sort((s, n) => (n.score?.total || 0) - (s.score?.total || 0));
  const i = t[0];
  if (i.score?.total && Ke(i) && (i.score?.total ?? 0) > (e.bestScore?.total ?? 0))
    return e.setBestScore(i), e.bestScore.group = i, i;
}
function _w(t) {
  const { container: e, containerPlacedShapes: i, unplacedShapes: s, shape: n, point: a, config: o, scoreFunction: r } = t;
  if (s.length < 3) return;
  ii("groups", `[POSITION GROUPS] Creating groups at position (${a.x},${a.y}) for shape ${n.id} in container ${e.id} (${e.cutType})`);
  let l = !1;
  n.orientationLock || (l = !0, n.orientationLock = n.rot === 1 ? "w" : "l");
  let u = [], c = [];
  Gi(e) ? c = [e.cutDirection] : c = e?.saw?.stockType === "roll" ? ["w"] : ["l", "w"];
  for (const g of c) {
    const I = ai(g), R = g === "l" ? "x" : "y", B = e[g] - n[R] - e.bladeWidth, A = e[g] - n[R], x = e[g] * 0.6;
    if (B <= 0 || A < x) continue;
    const E = Lh(
      s,
      n,
      I
    );
    if (E.length < 2) continue;
    const P = zr({
      shapes: E,
      container: e,
      targetSize: B,
      d: n[I],
      id: "g" + n.id,
      exact: !1,
      groupDirection: Wr(g),
      firstShape: n,
      iterations: 40,
      config: {
        subset: o.subset
      }
    });
    P && u.push(P);
  }
  u.sort((g, I) => I.efficiency - g.efficiency), u = u.slice(0, o.sample.groupSize);
  for (const g of u)
    g.x = a.x, g.y = a.y, g.outOfBounds = g.x + g.l > e.l || g.y + g.w > e.w, !g.outOfBounds && (ch(g, i, e) || r(g, e, i, s, a));
  s.forEach((g) => g.resetGroupData());
  const f = Dh(u, n), h = u.filter((g) => Ke(g) && g !== f);
  if (h.length > 0 && (ii("groups", `[POSITION GROUPS] Destroying ${h.length} non-winning groups`), h.forEach((g) => {
    ii("groups", `  Destroying group ${g.id} (${g.shapes?.length || 0} shapes)`), g.destroy();
  })), f) {
    if (ii("groups", `[POSITION GROUPS] Winner: group ${f.id} with score ${f.score.total.toFixed(2)} (beat shape ${n.id} score ${n.score?.total?.toFixed(2) || 0})`), Gi(e)) {
      e.shapes.push(f);
      const g = e.shapes.length;
      e.shapes = Fh(e.shapes, f);
      const I = g - e.shapes.length;
      I > 0 && ii("groups", `[POSITION GROUPS] Removed ${I} child shapes from segment after adding group ${f.id}`);
    }
  } else u.length > 0 && ii("groups", `[POSITION GROUPS] No winning group - shape ${n.id} scored better than ${u.length} groups`);
  return l && (n.orientationLock = null), f && Gi(e) && vt([
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
  inputStock: ae(Yt),
  inputShapes: ae(yi),
  inputSaw: Pi,
  inputUserGroups: ae(ka),
  // Centralized extras options for UI dropdowns
  extrasOptions: j({
    banding: j({
      options: ae(p())
    }).optional(),
    finish: j({
      options: ae(p())
    }).optional(),
    planing: j({
      options: ae(p())
    }).optional()
  }).optional()
}).optional(), Rh = j({
  // Banding metrics
  bandingLengthByType: be(p(), d()).default({}),
  // Finish metrics (by face)
  finishAreaByType: be(p(), d()).default({}),
  // Material summary with nested structure
  materialSummary: be(
    p(),
    // material name
    be(
      p(),
      // thickness
      j({
        used: d(),
        stacks: d(),
        bandingLengthByType: be(p(), d())
      })
    )
  ).default({}),
  // Tallies
  usedStockTally: be(p(), d()).default({}),
  addedPartTally: be(p(), d()).default({}),
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
}), mn = Rh.extend({
  bandingLengthByType: be(p(), d()).default({}),
  unplacedParts: ae(Eh).default([])
}), _h = j({
  // Core optimization results
  stockList: Ne("Stock"),
  shapeList: Ne("Shape"),
  cutList: Ne("Cut").optional(),
  segmentList: Ne("Segment").optional(),
  offcuts: Ne("Offcut").optional(),
  saw: Oe("Saw"),
  unusableShapes: Ne("Shape").optional(),
  unavailableStock: Ne("Stock").optional(),
  evolutionVisData: ae(j({})).optional(),
  performance: p().optional(),
  apiVersion: d().optional(),
  // Renamed from 'v'
  metadata: mn.optional(),
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
  config: ye().optional(),
  error: p().optional(),
  jobId: d().optional(),
  // Input data
  inputs: Oa,
  // The actual optimization results
  optimisation: _h
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
  config: ye().optional(),
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
  metadata: mn.optional(),
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
  orientationLock: me([
    ve(""),
    ve("l"),
    ve("w")
  ]).nullable().optional(),
  // Basic extras for display
  banding: ye().optional(),
  finish: ye().optional(),
  planing: ye().optional()
});
const Mh = j({
  issues: ae(p()),
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
  orientationLock: me([
    ve(""),
    ve("l"),
    ve("w")
  ]),
  trim: j({
    l1: d(),
    l2: d(),
    w1: d(),
    w2: d()
  }),
  material: p(),
  banding: ye(),
  // Using any for now, could use bandingPropertiesSchema
  bandingType: ye(),
  // Legacy field
  finish: ye(),
  // Using any for now, could use finishPropertiesSchema
  stock: j({ id: p() }),
  rot: _(),
  notes: p(),
  customData: be(p(), me([p(), d(), _()]))
});
j({
  issues: ae(p()),
  id: p(),
  duplicate: _().optional(),
  name: p(),
  l: d(),
  w: d(),
  t: d().nullable(),
  material: p(),
  cost: d(),
  used: _(),
  grain: me([
    ve(""),
    ve("l"),
    ve("w"),
    ri()
  ]).nullable(),
  trim: j({
    l1: d(),
    l2: d(),
    w1: d(),
    w2: d()
  }),
  parts: ae(Mh),
  efficiency: d(),
  notes: p().optional(),
  // Legacy V1 fields
  blade: j({
    width: d()
  }).optional(),
  cutPreference: me([
    ve("l"),
    ve("w"),
    ve("flex")
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
  stack: ye().optional(),
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
}, Bh = /* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-CPHm8s6P.js"), "../translation/cs.json": () => import("./cs-C2S6J-mx.js"), "../translation/da.json": () => import("./da-CXzNOM9l.js"), "../translation/de.json": () => import("./de-B0qoHPXv.js"), "../translation/el.json": () => import("./el-B4FKY8xI.js"), "../translation/en.json": () => import("./en-BRXrqSW9.js"), "../translation/es.json": () => import("./es-DRC67gaz.js"), "../translation/fi.json": () => import("./fi-D_GIqIcs.js"), "../translation/fr.json": () => import("./fr-Dist6drR.js"), "../translation/hi.json": () => import("./hi-BVnvWste.js"), "../translation/hr.json": () => import("./hr-DAxaRBza.js"), "../translation/hu.json": () => import("./hu-Clgva1zP.js"), "../translation/id.json": () => import("./id-DNHaXBcy.js"), "../translation/it.json": () => import("./it-D1A5KCdL.js"), "../translation/ja.json": () => import("./ja-ChQIIPoa.js"), "../translation/ko.json": () => import("./ko-B11PDMEM.js"), "../translation/ms.json": () => import("./ms-CQG5CzrQ.js"), "../translation/nl.json": () => import("./nl-B8K2sLmq.js"), "../translation/no.json": () => import("./no-DCE4N7Tb.js"), "../translation/pl.json": () => import("./pl-2ZUqXFM6.js"), "../translation/pt.json": () => import("./pt-BloOdAzA.js"), "../translation/ro.json": () => import("./ro-Y3DTWab1.js"), "../translation/ru.json": () => import("./ru-C1exjNAG.js"), "../translation/sk.json": () => import("./sk-Dlz6v4ti.js"), "../translation/sv.json": () => import("./sv-C7ajM1BQ.js"), "../translation/th.json": () => import("./th-CtTENspU.js"), "../translation/tr.json": () => import("./tr-bSDPqmmi.js"), "../translation/uk.json": () => import("./uk-DuECGuzi.js"), "../translation/vi.json": () => import("./vi-zAYpELt8.js"), "../translation/zh.json": () => import("./zh-CLUzozQ4.js") }), Zi = Object.keys(Bh).map((t) => {
  const e = t.match(/\/([a-zA-Z0-9_-]+)\.json$/);
  return e ? e[1] : "";
}).filter((t) => t !== "");
Zi.length === 0 && console.warn("[i18n] No language files found in ../translation/. Check paths and bundler setup for import.meta.glob.");
const ia = "en", kt = Eo.createInstance();
function U(t, e) {
  if (Go())
    return t;
  if (!kt.isInitialized) {
    const s = Array.isArray(t) ? t.join(", ") : String(t);
    return console.warn(`[i18n] t function called before i18next was initialized. Key: ${s}. Returning key.`), s;
  }
  let i = kt.t(t, e);
  return i = typeof i == "string" ? i : String(i), Ui(i);
}
const Ls = {}, Nh = {
  type: "backend",
  init: () => {
  },
  // The `namespace` parameter will now be ignored by your backend logic
  read: async (t, e, i) => {
    try {
      if (Ls[t]) {
        i(null, Ls[t]);
        return;
      }
      const s = await jh(/* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-CPHm8s6P.js"), "../translation/cs.json": () => import("./cs-C2S6J-mx.js"), "../translation/da.json": () => import("./da-CXzNOM9l.js"), "../translation/de.json": () => import("./de-B0qoHPXv.js"), "../translation/el.json": () => import("./el-B4FKY8xI.js"), "../translation/en.json": () => import("./en-BRXrqSW9.js"), "../translation/es.json": () => import("./es-DRC67gaz.js"), "../translation/fi.json": () => import("./fi-D_GIqIcs.js"), "../translation/fr.json": () => import("./fr-Dist6drR.js"), "../translation/hi.json": () => import("./hi-BVnvWste.js"), "../translation/hr.json": () => import("./hr-DAxaRBza.js"), "../translation/hu.json": () => import("./hu-Clgva1zP.js"), "../translation/id.json": () => import("./id-DNHaXBcy.js"), "../translation/it.json": () => import("./it-D1A5KCdL.js"), "../translation/ja.json": () => import("./ja-ChQIIPoa.js"), "../translation/ko.json": () => import("./ko-B11PDMEM.js"), "../translation/ms.json": () => import("./ms-CQG5CzrQ.js"), "../translation/nl.json": () => import("./nl-B8K2sLmq.js"), "../translation/no.json": () => import("./no-DCE4N7Tb.js"), "../translation/pl.json": () => import("./pl-2ZUqXFM6.js"), "../translation/pt.json": () => import("./pt-BloOdAzA.js"), "../translation/ro.json": () => import("./ro-Y3DTWab1.js"), "../translation/ru.json": () => import("./ru-C1exjNAG.js"), "../translation/sk.json": () => import("./sk-Dlz6v4ti.js"), "../translation/sv.json": () => import("./sv-C7ajM1BQ.js"), "../translation/th.json": () => import("./th-CtTENspU.js"), "../translation/tr.json": () => import("./tr-bSDPqmmi.js"), "../translation/uk.json": () => import("./uk-DuECGuzi.js"), "../translation/vi.json": () => import("./vi-zAYpELt8.js"), "../translation/zh.json": () => import("./zh-CLUzozQ4.js") }), `../translation/${t}.json`, 3);
      Ls[t] = s.default, i(null, Ls[t]);
    } catch (s) {
      const n = `[i18n] Failed to load local resource module for language '${t}'. Error: ${s.message}`;
      console.warn(n, s), i(s, null);
    }
  }
};
async function Vh() {
  return Eu(kt), await kt.use(Gl).use(Nh).init({
    debug: !1,
    fallbackLng: ia,
    supportedLngs: Zi.length > 0 ? Zi : [ia],
    interpolation: {
      format: function(t, e) {
        return e === "c" ? Fu(t) : e === "sc" ? Ui(t) : t;
      }
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"]
    }
  }), kt;
}
const Hr = Vh().catch((t) => {
  console.error("[i18n] CRITICAL: Initialization failed.", t);
});
function Gh() {
  return kt.isInitialized;
}
const qh = async (t) => {
  if (Zi.length > 0 && !Zi.includes(t))
    return console.warn(`[i18n] Attempted to change to unsupported language: ${t}. Current: ${kt.language}`), kt.language;
  kt.isInitialized || (console.warn("[i18n] changeLanguage called before initialization. Awaiting i18nextReady."), await Hr);
  try {
    return await kt.changeLanguage(t), console.log(`[i18n] Language changed to ${t}`), kt.language;
  } catch (e) {
    return console.error(`[i18n] Failed to change language to ${t}:`, e), kt.language;
  }
}, Mw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, FALLBACK_LANGUAGE: ia, SUPPORTED_LANGUAGES: Zi, changeLanguage: qh, i18nextInstance: kt, i18nextReady: Hr, isI18nInitialized: Gh, t: U }, Symbol.toStringTag, { value: "Module" })), Ot = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [s, n] of e)
    i[s] = n;
  return i;
};
function zh(t, e = []) {
  if (!t?.length) return [];
  const i = t.map((s) => s && typeof s.getType == "function" ? s : Aa(s)).filter((s) => s instanceof _r);
  return e.length && Wh(i, e), i;
}
function Wh(t = [], e = []) {
  t.length && e.length && t.forEach((i) => {
    i.shapeIds = i.shapeIds.filter((s) => e.find((n) => n.autoId === s));
  });
}
let Ur = {};
const jw = (t, e) => {
  Ur[t] = e;
}, yn = (t) => Ur[t] || null, Rn = (t, e, i, s) => {
  t.extras || (t.extras = {}), t.extras[e] || (t.extras[e] = { sides: {}, faces: {} });
  const { scope: n, key: a } = wi(i), o = n === "face" ? t.extras[e].faces : t.extras[e].sides;
  o[a] = s;
}, bn = (t, e, i) => {
  const { scope: s, key: n } = wi(i);
  return (s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides)?.[n] || null;
}, Hh = (t, e, i) => {
  const { scope: s, key: n } = wi(i), a = s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides;
  a && n in a && delete a[n];
}, Uh = (t) => {
  const e = yn(t);
  return !e || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 1 && e.options[0][0] === !0 || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 0 ? "boolean" : e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].every((i) => typeof i == "string") ? "string" : e.options.length > 1 ? "object" : "string";
}, lo = !1;
function Yh() {
  return {
    banding: {
      scope: ["sides"],
      sides: oi.map((t) => `side.${t}`)
      // Only use main sides (l1/l2/w1/w2), not corners
    },
    finish: {
      scope: ["faces"],
      faces: mt.map((t) => `face.${t}`)
    },
    planing: {
      scope: ["faces", "sides"],
      faces: mt.map((t) => `face.${t}`),
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
      sides: At.map((t) => `side.${t}`)
    }
    /* imageUpload: {
    	scope: [ 'sides' ],
    	sides: ALL_SIDES.map( side => `side.${side}` as const )
    } */
  };
}
const Kh = Yh(), Jt = (t) => Kh[t] || {
  scope: ["sides"],
  sides: At.map((e) => `side.${e}`)
}, sa = (t) => {
  const e = Jt(t), i = [];
  return e.faces && i.push(...e.faces), e.sides && i.push(...e.sides), i;
}, Bw = (t) => (Jt(t).faces || []).map((i) => {
  const s = wi(i);
  return s.scope === "face" ? s.key : void 0;
}).filter((i) => i !== void 0), Nw = (t) => (Jt(t).sides || []).map((i) => {
  const s = wi(i);
  return s.scope === "side" ? s.key : void 0;
}).filter((i) => typeof i == "string"), wi = (t) => {
  const e = t.split(".");
  if (e.length !== 2 || e[0] !== "face" && e[0] !== "side")
    throw new Error(`Invalid ExtraLocation format: ${t}. Must be 'face.X' or 'side.X'`);
  const i = e[0], s = e[1];
  if (i === "face" && !mt.includes(s))
    throw new Error(`Invalid face key '${s}' in location '${t}'`);
  if (i === "side" && !At.includes(s))
    throw new Error(`Invalid side key '${s}' in location '${t}'`);
  return {
    scope: i,
    key: s,
    original: t
  };
}, co = (t) => wi(t).scope, Yr = (t) => Jt(t).scope.includes("faces"), Kr = (t) => Jt(t).scope.includes("sides"), Vw = (t) => {
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
  Yr(e) && (s.faces || (s.faces = {})), Kr(e) && (s.sides || (s.sides = {}));
}, Xh = (t, e, i) => {
  Jh(t, e);
  const n = t.extras[e], { scope: a } = wi(i);
  return a === "face" ? {
    extraContainer: n.faces || {}
  } : {
    extraContainer: n.sides || {}
  };
}, mi = (t, e, i) => !!bn(t, e, i), Qh = (t, e, i, s, n) => {
  const a = yn(e);
  if (a) {
    const o = bn(t, e, i);
    if (o !== null) {
      if (typeof o == "boolean")
        return o;
      if (typeof o == "string") {
        const r = a.labels.indexOf(s);
        return r !== -1 && a.options[r] && Array.isArray(a.options[r]) && !a.options[r].includes(o) ? null : o;
      }
      if (typeof o == "object" && s in o) {
        const r = o[s];
        if (r === !0) {
          const l = a.labels.indexOf(s);
          if (l !== -1 && a.options[l] && Array.isArray(a.options[l])) {
            const u = a.options[l];
            if (u.length === 1)
              return u[0];
          }
          return s;
        }
        if (typeof r == "string") {
          const l = a.labels.indexOf(s);
          if (l !== -1 && a.options[l] && Array.isArray(a.options[l]) && !a.options[l].includes(r))
            return null;
        }
        return r;
      }
    }
  }
  return !1;
}, Gw = (t, e, i, s, n, a, o) => {
  const r = yn(e);
  if (r)
    switch (Uh(e)) {
      case "boolean":
        Rn(t, e, i, !!n);
        break;
      case "string":
        Rn(t, e, i, String(n));
        break;
      case "object":
        {
          let u = bn(t, e, i) || {};
          typeof u != "object" && (u = {});
          const c = r.labels.indexOf(s);
          if (c !== -1 && r.options[c] && Array.isArray(r.options[c])) {
            const f = r.options[c];
            f.length === 1 && f[0] === n ? u[s] = !0 : u[s] = n;
          } else
            u[s] = n;
          Rn(t, e, i, u);
        }
        break;
    }
}, ep = (t, e, i, s) => {
  Hh(t, e, i);
}, qw = (t, e, i, s, n) => {
  if (i.length === 0) return null;
  const a = i.map((o) => Qh(t, e, o, s));
  if (n === "boolean" || n === "single") {
    const o = a.every((l) => !!l), r = a.every((l) => !l);
    return o ? !0 : r ? !1 : null;
  }
  if (n === "multiple") {
    const o = a[0];
    return a.every((l) => l === o) ? o : null;
  }
  return null;
}, zw = (t, e, i, s) => {
  i.forEach((n) => {
    ep(t, e, n);
  });
}, _n = (t, e, i, s, n, a) => {
  const o = bn(t, e, i), r = [];
  if (o && a?.length)
    if (typeof o == "object" && !Array.isArray(o)) {
      const u = o;
      for (const c of a) {
        const f = u[c];
        if (f)
          if (f === !0) {
            const h = yn(e);
            if (h) {
              const g = h.labels.indexOf(c);
              if (g !== -1 && h.options[g] && Array.isArray(h.options[g])) {
                const I = h.options[g];
                I.length === 1 ? r.push(I[0]) : r.push(c);
              } else
                r.push(c);
            } else
              r.push(c);
          } else
            r.push(String(f));
      }
    } else
      r.push(String(o));
  else o && r.push(String(o));
  const l = r.filter((u) => u && typeof u == "string" && u.trim() !== "");
  if (!Array.isArray(l) || !l.length)
    return !1;
  if (!s)
    return 0;
  try {
    const u = l.map((f, h) => {
      if (typeof f == "boolean" && f === !0 && n) {
        const g = n[h];
        if (g && g.length === 1)
          return String(g[0]);
      }
      return String(f);
    });
    return s(e, u);
  } catch (u) {
    return console.error("Error calculating extras price:", u), !1;
  }
}, Ww = (t, e, i) => {
  const s = /* @__PURE__ */ new Set(), n = Jt(e);
  if (t.forEach((a) => {
    const r = a.extras[e];
    r && (n.faces && "faces" in r && r.faces && Object.values(r.faces).forEach((l) => {
      typeof l == "string" && l.trim() && l !== "Y" && s.add(l);
    }), n.sides && "sides" in r && r.sides && Object.values(r.sides).forEach((l) => {
      typeof l == "string" && l.trim() && l !== "Y" && s.add(l);
    }));
  }), s.size > 0) {
    const a = [.../* @__PURE__ */ new Set([...i.value, ...Array.from(s)])];
    i.value = a;
  }
}, Hw = (t, e, i, s) => {
  const n = s[0], a = Jt(e);
  n && t.forEach((o) => {
    const l = o.extras[e];
    if (!l) return;
    l.options || (l.options = {});
    const u = l.options;
    if (a.faces && l.faces) {
      u.faces || (u.faces = {});
      for (const c in l.faces)
        l.faces[c] === !0 && (l.faces[c] = i);
    }
    if (a.sides && l.sides) {
      u.sides || (u.sides = {});
      for (const c in l.sides)
        l.sides[c] === !0 && (l.sides[c] = i);
    }
  });
}, Uw = (t, e, i) => {
  const s = Jt(e);
  t.forEach((n) => {
    const o = n.extras[e];
    if (o) {
      if (o.options || (o.options = {}), s.faces && o.faces)
        for (const r in o.faces)
          o.faces[r] === i && (o.faces[r] = !0);
      if (s.sides && o.sides)
        for (const r in o.sides)
          o.sides[r] === i && (o.sides[r] = !0);
    }
  });
}, tp = (t, e, i, s = !1) => {
  const n = Jt(e), a = t;
  a.extras[e] || (a.extras[e] = {});
  const o = a.extras[e];
  o.options || (o.options = {});
  const r = o.options;
  if (Yr(e) && (o.faces || (o.faces = {}), r.faces || (r.faces = {})), Kr(e) && (o.sides || (o.sides = {}), r.sides || (r.sides = {})), s) {
    if (n.faces && o.faces) {
      for (const l in o.faces) {
        const u = o.faces[l];
        typeof u == "string" && (o.faces[l] = u.trim() !== "");
      }
      r.faces && Object.keys(r.faces).forEach((l) => {
        l !== "all" && delete r.faces[l];
      });
    }
    if (n.sides && o.sides) {
      for (const l in o.sides) {
        const u = o.sides[l];
        typeof u == "string" && (o.sides[l] = u.trim() !== "");
      }
      r.sides && Object.keys(r.sides).forEach((l) => {
        l !== "all" && delete r.sides[l];
      });
    }
  } else
    n.faces && r.faces, n.sides && r.sides;
}, Si = (t, e, i, s = [], n = []) => {
  const a = Zh(i, n);
  tp(t, e, a === "boolean" ? [] : s, a === "boolean");
}, ip = (t, e, i, s) => {
  if (!i || !Object.keys(i).length)
    return { valid: !0, messages: [], incompleteLocations: [] };
  const n = [], a = [], o = sa(e), r = Object.keys(i), l = Math.max(...r.map((c) => c.split("|").length));
  if (l <= 1)
    return { valid: !0, messages: [], incompleteLocations: [] };
  for (const c of o) {
    const { extraContainer: f } = Xh(t, e, c), { key: h } = wi(c), g = f[h];
    if (!g)
      continue;
    let I;
    if (typeof g == "object" && !Array.isArray(g) && g !== null)
      if ("value" in g && typeof g.value == "string") {
        const E = g.value;
        I = E.includes("|") ? E.split("|") : [E];
      } else
        I = Object.values(g).filter((E) => E != null && E !== "" && E !== !1).map((E) => String(E));
    else typeof g == "string" ? I = g.includes("|") ? g.split("|") : [g] : typeof g == "boolean" ? I = g ? ["true"] : [] : I = [String(g)];
    const R = I.length;
    if (R === 0)
      continue;
    let B = !1, A = !1, x = "";
    if (R > 0) {
      if (s)
        try {
          const E = I.filter(($) => $.trim() !== ""), P = s(e, E);
          A = P !== null && P > 0;
        } catch (E) {
          console.error("[validateExtrasCompleteness] Error getting price:", E), A = !1;
        }
      else {
        const E = I.join("|");
        A = r.some((P) => P === E || P.startsWith(E + "|"));
      }
      if (R < l) {
        B = !0;
        const E = I.join("|");
        if (r.some(($) => $.startsWith(E + "|")) && !A) {
          const $ = l - R, Y = I.join(", ");
          x = `${e} selection incomplete for ${c}. Selected: "${Y}" but ${$} more level${$ > 1 ? "s" : ""} required.`;
        }
      }
      !A && !B && (x = `${e} selection invalid for ${c}. No pricing available for "${I.join(", ")}".`);
    }
    R > 0 && !A && (a.push(c), n.push(x || `${e} pricing incomplete for ${c}: ${R}/${l} levels selected`));
  }
  return { valid: a.length === 0, messages: n, incompleteLocations: a };
}, sp = (t, e, i) => {
  if (!i || !i[e])
    return { valid: !0, violations: [] };
  const s = i[e], n = [], a = (r, l, u) => {
    l == null || u === void 0 || (u.min !== void 0 && l < u.min && n.push({
      dimension: r,
      value: l,
      constraint: "min",
      limit: u.min
    }), u.max !== void 0 && l > u.max && n.push({
      dimension: r,
      value: l,
      constraint: "max",
      limit: u.max
    }));
  };
  a("longSide", t.longSide, s.longSide), a("shortSide", t.shortSide, s.shortSide);
  const o = typeof t.t == "string" ? parseFloat(t.t) : t.t;
  return isNaN(o) || a("t", o, s.t), {
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
function uo(t) {
  try {
    if (qo()) {
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
function fo(t) {
  try {
    if (qo())
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
function Zr(t) {
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
    const i = e.path.length > 0 ? e.path.join(".") : "root", s = Zr(e), n = fr(e.message, s);
    return `[${i}] ${n}`;
  });
}
function ss(t, e) {
  const i = t.safeParse(e);
  return {
    success: i.success,
    data: i.success ? i.data : void 0,
    errors: i.success ? void 0 : i.error.issues
  };
}
function op(t = {}) {
  try {
    let e = function(C) {
      if (!C || typeof C != "object") return C;
      const O = { ...C };
      if (delete O.issues, delete O.warnings, O.trim && typeof O.trim == "object") {
        const k = O.trim;
        ("x1" in k || "x2" in k || "y1" in k || "y2" in k) && (O.trim = {
          l1: k.y1 ?? k.l1 ?? 0,
          l2: k.y2 ?? k.l2 ?? 0,
          w1: k.x1 ?? k.w1 ?? 0,
          w2: k.x2 ?? k.w2 ?? 0
        });
      }
      if (O.extras?.banding?.sides && typeof O.extras.banding.sides == "object") {
        const k = O.extras.banding.sides;
        ("x1" in k || "x2" in k || "y1" in k || "y2" in k) && (O.extras.banding.sides = {
          l1: k.y1 ?? k.l1,
          l2: k.y2 ?? k.l2,
          w1: k.x1 ?? k.w1,
          w2: k.x2 ?? k.w2
        });
      }
      if (O.extras?.finish?.sides && typeof O.extras.finish.sides == "object") {
        const k = O.extras.finish.sides;
        ("x1" in k || "x2" in k || "y1" in k || "y2" in k) && (O.extras.finish.sides = {
          l1: k.y1 ?? k.l1,
          l2: k.y2 ?? k.l2,
          w1: k.x1 ?? k.w1,
          w2: k.x2 ?? k.w2
        });
      }
      if (O.extras?.planing?.sides && typeof O.extras.planing.sides == "object") {
        const k = O.extras.planing.sides;
        ("x1" in k || "x2" in k || "y1" in k || "y2" in k) && (O.extras.planing.sides = {
          l1: k.y1 ?? k.l1,
          l2: k.y2 ?? k.l2,
          w1: k.x1 ?? k.w1,
          w2: k.x2 ?? k.w2
        });
      }
      if (O.efficiencyOptions?.primaryCompression) {
        const k = O.efficiencyOptions.primaryCompression;
        k === "x" ? O.efficiencyOptions = {
          ...O.efficiencyOptions,
          primaryCompression: "l"
        } : k === "y" && (O.efficiencyOptions = {
          ...O.efficiencyOptions,
          primaryCompression: "w"
        });
      }
      for (const k in O)
        O[k] === null && delete O[k];
      return O;
    }, i = function(C, O) {
      if (!Array.isArray(C))
        return [];
      const k = [];
      for (let Z = 0; Z < C.length; Z++) {
        const J = C[Z], ge = e(J);
        try {
          const xe = {
            ...ge,
            skipSchemaValidation: !0
            // Skip Zod validation during construction
          };
          J.autoId && (xe.autoId = J.autoId), delete xe.issues, delete xe.warnings;
          const $e = new os(xe, O);
          k.push($e);
        } catch (xe) {
          console.error(`Failed to create InputShape at index ${Z}:`, xe);
        }
      }
      return k;
    }, s = function(C, O) {
      if (!Array.isArray(C)) return [];
      const k = [];
      for (let Z = 0; Z < C.length; Z++) {
        const J = C[Z], ge = e(J);
        try {
          const xe = {
            ...ge,
            skipSchemaValidation: !0
            // Skip Zod validation during construction
          };
          J.autoId && (xe.autoId = J.autoId);
          const $e = new As(xe, O);
          k.push($e);
        } catch (xe) {
          console.error(`Failed to create InputStock at index ${Z}:`, xe);
        }
      }
      return k;
    }, n = function(C) {
      const O = e(C), k = ss(Pi, O);
      if (k.success && k.data) {
        const Z = {
          ...k.data,
          issues: [],
          warnings: []
        };
        return C?.autoId && (Z.autoId = C.autoId), new ti(Z);
      } else
        return console.error("Failed to parse input saw:", k.errors), new ti({});
    }, a = function(C, O) {
      return Array.isArray(C) ? O && O.length ? zh(C, O) : C.map((k) => new _r(k)).filter(Boolean) : [];
    }, o = function(C = {}) {
      try {
        const Z = { ..._t(
          (ge) => {
            if (typeof ge != "object" || ge === null) return ge;
            const xe = { ...ge };
            for (const $e in xe)
              xe[$e] === null && delete xe[$e];
            return xe;
          },
          yi
        ).parse(C), isNew: !0 }, J = new os(Z, Q);
        return J.createId(K.value.length), K.value.push(J), J;
      } catch (O) {
        return O instanceof Bi && (console.error("Shape validation failed:", O.issues), x("part", "Invalid shape data", O.issues)), null;
      }
    }, r = function(C = {}) {
      try {
        const k = { ...Yt.parse(C), isNew: !0 }, Z = new As(k, Q);
        return Z.createId(w.value.length), w.value.push(Z), Z;
      } catch (O) {
        return O instanceof Bi && (console.error("Stock validation failed:", O.issues), x("stock", "Invalid stock data", O.issues)), null;
      }
    }, l = function(C) {
      try {
        const O = C.toData(), k = yi.parse(O);
        return new os(k, Q);
      } catch (O) {
        return O instanceof Bi && (console.error("Shape clone validation failed:", O.issues), x("part", "Invalid shape data during cloning", O.issues)), null;
      }
    }, u = function(C) {
      try {
        const O = C.toData(), k = Yt.parse(O);
        return new As(k, Q);
      } catch (O) {
        return O instanceof Bi && (console.error("Stock clone validation failed:", O.issues), x("stock", "Invalid stock data during cloning", O.issues)), null;
      }
    }, c = function(C, O) {
      const k = K.value.find((ge) => ge.autoId === C);
      if (!k) return !1;
      const Z = { ...k.toData(), ...O }, J = ss(yi, Z);
      if (J.success && J.data)
        return k.update(J.data), k.isNew || k.validate(), !0;
      {
        const ge = J.errors ? ap(J.errors) : [];
        console.error("Shape update validation failed:", ge);
        const xe = J.errors?.[0];
        if (xe) {
          const $e = Zr(xe);
          new ce({
            category: ["part"],
            message: xe.message,
            // This is the translation key from Zod error map
            params: $e,
            issues: W.value
          });
        } else
          x("part", "Invalid shape update");
        return !1;
      }
    }, f = function(C, O) {
      const k = K.value.findIndex((J) => J.autoId === C);
      if (k === -1) return !1;
      const Z = K.value[k];
      return Z.validate({ fields: [O] }), Z.issues.length === 0;
    }, h = function(C, O) {
      const k = w.value.find((ge) => ge.autoId === C);
      if (!k) return !1;
      const Z = { ...k.toData(), ...O }, J = ss(Yt, Z);
      return J.success && J.data ? (k.update(J.data), k.isNew || A(), !0) : (console.error("Stock update validation failed:", J.errors), x("stock", "Invalid stock update", J.errors), !1);
    }, g = function(C, O) {
      const k = w.value.findIndex((J) => J.autoId === C);
      if (k === -1) return !1;
      const Z = w.value[k];
      return Z.validate({ fields: [O] }), ql(w), Z.issues.length === 0;
    }, I = function(C) {
      if (K.value.length === 1) return !1;
      const O = K.value.findIndex((k) => k.autoId === C);
      return O === -1 ? !1 : (K.value.splice(O, 1), !0);
    }, R = function(C) {
      if (w.value.length === 1) return !1;
      const O = w.value.findIndex((k) => k.autoId === C);
      return O === -1 ? !1 : (w.value.splice(O, 1), !0);
    }, B = function(C) {
      de.value = !0;
      const O = [];
      try {
        K.value.forEach((k) => k.issues = []);
        for (let k = 0; k < K.value.length; k++) {
          const Z = K.value[k];
          if (Z.isNew)
            continue;
          const J = Z.validate({
            inputStockList: w.value,
            index: k,
            stockType: C?.stockType ?? null,
            partTrim: 0,
            useInventory: !1,
            saw: C
          });
          O.push(...J);
        }
        K.value.some((k) => Number(k.q) > 0) || new ce({
          category: ["part"],
          message: "errors.validation.no_parts",
          issues: O
        });
      } finally {
        de.value = !1;
      }
      return W.value = O, O;
    }, A = function(C) {
      de.value = !0;
      const O = [];
      try {
        w.value.forEach((k) => k.issues = []);
        for (let k = 0; k < w.value.length; k++) {
          const J = w.value[k].validate({ saw: C }, k);
          O.push(...J);
        }
        w.value.some((k) => Number(k.q) > 0 || k.autoAdd) || new ce({
          category: ["stock"],
          message: "errors.validation.no_stock",
          issues: O
        });
      } finally {
        de.value = !1;
      }
      return W.value = O, O;
    }, x = function(C, O, k) {
      new ce({
        category: [C],
        message: O,
        issues: W.value
      }), k && console.log("Validation details:", k);
    }, E = function() {
      W.value = [], K.value.forEach((C) => C.issues = []), w.value.forEach((C) => C.issues = []);
    }, P = function(C = {}) {
      const O = [], k = [], Z = C.inputShapesOverride ?? K.value;
      if (!Z.length)
        return { shapeList: [], issues: [] };
      for (let J = 0; J < Z.length; J++) {
        const ge = Z[J];
        if (!ge.q) continue;
        ge.createId(J), ge.applyPartTrim(C.trim, C.stockType);
        const xe = ge.toShape();
        C.minSpacing && C.maxDimension && (xe.l <= C.maxDimension || xe.w <= C.maxDimension) && (xe.minSpacing = C.minSpacing), O.push(xe), k.push(...xe.issues);
      }
      return { shapeList: O, issues: k };
    }, $ = function(C) {
      if (!w.value.length)
        return { stockList: [], issues: [] };
      const O = [], k = [];
      for (let Z = 0; Z < w.value.length; Z++) {
        const J = w.value[Z];
        if (!J.q && !J.autoAdd) continue;
        J.createId(Z), J.saw = C;
        const ge = J.toStock();
        O.push(ge), k.push(...ge.issues);
      }
      return { stockList: O, issues: k };
    }, Y = function(C, O = Q) {
      const k = {
        saw: { success: !1, failed: !1 },
        shapes: { success: 0, failed: 0 },
        stock: { success: 0, failed: 0 },
        groups: { success: 0, failed: 0 }
      };
      if (C.saw) {
        const Z = ss(Pi, e(C.saw));
        if (Z.success && Z.data) {
          const J = { ...Z.data };
          C.saw?.autoId && (J.autoId = C.saw.autoId), V.value = new ti(J), k.saw.success = !0;
        } else
          console.error("Failed to parse input saw:", Z.errors), k.saw.failed = !0;
      }
      if (C.shapes) {
        const Z = i(C.shapes, O);
        k.shapes.success = Z.length, k.shapes.failed = C.shapes.length - Z.length, K.value = Z;
      }
      if (C.stock) {
        const Z = s(C.stock, O);
        k.stock.success = Z.length, k.stock.failed = C.stock.length - Z.length, w.value = Z;
      }
      if (C.groups) {
        const Z = a(C.groups);
        k.groups.success = Z.length, k.groups.failed = C.groups.length - Z.length, H.value = Z;
      }
      return C.extrasOptions && (G.value = { ...C.extrasOptions }), k;
    }, M = function() {
      return {
        shapes: K.value.map((C) => C.toData()),
        stock: w.value.map((C) => C.toData()),
        inputUserGroups: H.value.map((C) => C.toData()),
        extrasOptions: G.value
      };
    }, le = function() {
      K.value = [], w.value = [], H.value = [], E();
    }, q = function(C) {
      const O = { ...V.value.toData(), ...C }, k = ss(Pi, O);
      return k.success && k.data ? (V.value.update(k.data), !0) : (console.error("InputSaw update validation failed:", k.errors), x("saw", "Invalid saw update", k.errors), !1);
    }, m = function() {
      V.value = new ti({});
    }, z = function() {
      const C = V.value.validate();
      return W.value = [...W.value.filter((O) => O.category?.[0] !== "saw"), ...C], C;
    };
    const { numberFormat: Q = "decimal" } = t, K = ts("inputs/inputShapes", [], {
      serializer: {
        read: (C) => {
          if (!C) {
            const Z = "GlobalStore/inputShapes", J = uo(Z);
            if (J)
              C = J, fo(Z);
            else return [];
          }
          let O;
          try {
            O = JSON.parse(C);
          } catch (Z) {
            return console.error("Failed to parse input shapes JSON:", Z), [];
          }
          return i(O, Q);
        },
        write: (C) => {
          const k = C.filter((J) => !J?.multiEdit).map((J) => J.toData());
          return JSON.stringify(k);
        }
      },
      listenToStorageChanges: !1
    }), w = ts("inputs/inputStock", [], {
      serializer: {
        read: (C) => {
          if (!C) return [];
          let O;
          try {
            O = JSON.parse(C);
          } catch (Z) {
            return console.error("  Failed to parse stock JSON:", Z), [];
          }
          return s(O, Q);
        },
        write: (C) => {
          const k = C.filter((J) => !J?.multiEdit).map((J) => J.toData());
          return JSON.stringify(k);
        }
      },
      listenToStorageChanges: !1
    }), V = ts("inputs/inputSaw", new ti({}), {
      serializer: {
        read: (C) => {
          if (!C) {
            const k = uo("saw");
            if (k)
              C = k, fo("saw");
            else return new ti({});
          }
          try {
            const O = JSON.parse(C);
            return n(O);
          } catch (O) {
            return console.error("  Failed to parse saw JSON:", O), new ti({});
          }
        },
        write: (C) => {
          if (!C)
            return JSON.stringify({});
          const O = C.toData();
          return JSON.stringify(O);
        }
      },
      listenToStorageChanges: !1
    }), H = ts("inputs/inputUserGroups", [], {
      serializer: {
        read: (C) => a(C ? JSON.parse(C) : []),
        write: (C) => JSON.stringify(C.map((O) => O.toData()))
      }
    }), G = ts("inputs/extrasOptions", {
      banding: { options: [] },
      finish: { options: [] },
      planing: { options: [] }
    }, {
      serializer: {
        read: (C) => {
          if (!C) return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          try {
            return JSON.parse(C);
          } catch {
            return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          }
        },
        write: (C) => JSON.stringify(C)
      }
    }), W = oe([]), de = oe(!1);
    K.value.length === 0 && (K.value = [new os({ isNew: !0 })]), w.value.length === 0 && (w.value = [new As({ isNew: !0 })]);
    const Se = ee(() => K.value.reduce((C, O) => {
      const k = Number(O?.q);
      return k && k > 0 && !O?.multiEdit ? C + k : C;
    }, 0)), ke = ee(() => w.value.reduce((C, O) => {
      const k = Number(O?.q);
      return k && k > 0 && !O?.multiEdit ? C + k : C;
    }, 0)), Ce = ee(() => K.value.reduce((C, O) => O?.multiEdit ? C : C + 1, 0)), _e = ee(() => w.value.reduce((C, O) => O?.multiEdit ? C : C + 1, 0)), se = ee(() => W.value.length > 0), lt = () => [
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
    ], Ct = oe(null), ht = oe(null), wt = () => {
      Ct.value = null;
    }, te = E, je = (C = null) => {
      const O = C?.inputShapesOverride ?? K.value, k = B(C?.saw || void 0);
      if (O.length) {
        Fr(O, w.value, C?.saw || V.value);
        const Z = O.flatMap((J) => J.issues);
        return [...k, ...Z];
      }
      return k;
    }, Lt = (C, O = "decimal") => {
      const k = C?.inputSaw, Z = C?.inputShapes, J = C?.inputStock, ge = C?.inputUserGroups;
      return Y({
        saw: k,
        shapes: Z,
        stock: J,
        groups: ge
      }, O);
    }, Ft = (C, O = "decimal") => Y({ shapes: C }, O).shapes.success > 0, Ji = (C, O = "decimal") => Y({ stock: C }, O).stock.success > 0, yt = (C, O, k, Z) => {
      O[0]?.length > 0 && (G.value[C] || (G.value[C] = { options: [] }), G.value[C].options = [...O[0]]), k && Z && O.length > 0 ? za(C, {
        options: O,
        // Use all columns extracted from pricing
        labels: k,
        pricing: Z
      }) : console.warn("[setExtrasOptionsFromPricing] Missing data for centralized config:", { labels: k, pricingData: Z, pricingOptionsLength: O.length });
    }, fe = () => {
      if (!Object.values(G.value).some(
        (k) => k.options.length > 0
      )) return;
      const O = (k, Z) => {
        const J = {};
        for (const ge of Z)
          J[ge] = [...k];
        return J;
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
    }, pe = (C) => {
      if (!w.value.length) return "n";
      const O = C.material, k = C.t, Z = w.value.filter(($e) => $e.material === O && $e.t === k);
      if (!Z.length)
        return "n";
      let J = !1, ge = !1, xe = !1;
      for (const $e of Z)
        $e.grain === "l" ? (J = !0, ge = !0) : $e.grain === "w" && (J = !0, xe = !0);
      return J ? ge && xe ? "y" : ge ? "l" : xe ? "w" : "n" : "n";
    }, ue = (C) => {
      for (const O of K.value)
        Ka(O, C);
      for (const O of w.value)
        Ka(O, C);
    };
    let Pe = !1;
    return We(K, (C) => {
      Pe || !C.length || gt(() => {
        const O = ["banding", "finish", "planing"], k = [];
        O.forEach((Z) => {
          const J = /* @__PURE__ */ new Set();
          if (C.forEach((ge) => {
            const xe = ge.extras?.[Z];
            xe && (xe.faces && Object.values(xe.faces).forEach(($e) => {
              typeof $e == "string" && $e.trim() && $e !== "Y" && J.add($e);
            }), xe.sides && Object.values(xe.sides).forEach(($e) => {
              typeof $e == "string" && $e.trim() && $e !== "Y" && J.add($e);
            }));
          }), J.size > 0) {
            const ge = yc(Z);
            if (ge) {
              const xe = ge.options[0];
              if (Array.isArray(xe) && (xe.length === 0 || typeof xe[0] == "string")) {
                const $e = new Set(xe), Re = Array.from(J).filter((qe) => !$e.has(qe));
                if (Re.length > 0) {
                  const qe = [...xe, ...Re];
                  za(Z, {
                    ...ge,
                    options: [qe, ...ge.options.slice(1)]
                  });
                }
              }
            }
          }
        }), O.forEach((Z) => {
          const J = bc(Z, C);
          J.cleanedCount > 0 && k.push(
            `${Z}: ${J.invalidOptions.join(", ")}`
          );
        }), k.length > 0 && (console.warn(
          `Some extras options no longer exist and have been reset:
` + k.join(`
`)
        ), typeof window < "u" && window.alert && setTimeout(() => {
          alert(
            `Some extras options no longer exist and have been reset:
` + k.join(`
`)
          );
        }, 500)), Pe = !0;
      });
    }, { immediate: !0 }), {
      // Bundled object
      inputs: {
        inputStock: w,
        inputShapes: K,
        inputUserGroups: H,
        currentInputShape: Ct,
        selectedSaw: ht,
        inputSaw: V
      },
      // State
      inputShapes: K,
      inputStock: w,
      inputUserGroups: H,
      inputSaw: V,
      currentInputShape: Ct,
      selectedSaw: ht,
      validationIssues: W,
      isValidating: de,
      // Computed
      totalInputShapes: Se,
      totalInputStock: ke,
      totalInputShapeLines: Ce,
      totalInputStockLines: _e,
      hasValidationIssues: se,
      // Actions
      addInputShape: o,
      addInputStock: r,
      cloneInputShape: l,
      cloneInputStock: u,
      updateInputShape: c,
      updateInputStock: h,
      updateInputSaw: q,
      removeInputShape: I,
      removeInputStock: R,
      reset: wt,
      resetInputSaw: m,
      clear: le,
      clearIssues: te,
      // Validation
      validateInputShapes: je,
      validateInputShapeField: f,
      validateInputStock: A,
      validateInputStockField: g,
      validateInputSaw: z,
      clearValidationIssues: E,
      // Conversion
      createShapeList: P,
      createStockList: $,
      // Import/Export/Update
      importData: Y,
      exportData: M,
      updateInputs: Lt,
      importInputShapes: Ft,
      importInputStock: Ji,
      // Additional functions
      getShapeGrainSummary: pe,
      updateNumberFormat: ue,
      getSpecialShapeFields: lt,
      // Extras Options Management
      extrasOptions: G,
      setExtrasOptionsFromPricing: yt,
      getCentralizedOptions: fe
    };
  } catch (e) {
    throw console.error("[createInputs] Fatal error during initialization:", e), e;
  }
}
let Mn = null;
function Jr(t = { numberFormat: "decimal" }) {
  try {
    return Mn || (Mn = op(t)), Mn;
  } catch (e) {
    throw console.error("[useInputs] FATAL ERROR in useInputs:", e), console.error("[useInputs] Error stack:", e?.stack), e;
  }
}
class ho {
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
    const i = e.banding, s = "_banding" in e ? e._banding : void 0, n = Ae(e) ? e.bandingOptions : void 0;
    if (!i && !s && !n) return !1;
    if (i && i instanceof Rt) {
      const c = i.sides;
      if (c && typeof c == "object" && ("x1" in c || "x2" in c || "y1" in c || "y2" in c)) {
        const h = this.migrateSideNames(c);
        return i.sides = h, !0;
      }
      return !1;
    }
    const a = {}, o = {}, r = { sides: {} };
    if (i && typeof i == "object") {
      const c = this.migrateSideNames(i);
      for (const [f, h] of Object.entries(c))
        At.includes(f) && (a[f] = h);
    }
    if (s && typeof s == "object") {
      const c = this.migrateSideNames(s);
      for (const [f, h] of Object.entries(c))
        At.includes(f) && (o[f] = h);
    }
    if (n && typeof n == "object") {
      n.all && (r.sides.all = n.all);
      for (const [c, f] of Object.entries(n))
        c !== "all" && At.includes(c) && f && (r.sides[c] = f);
    }
    const l = new Rt(Object.keys(a).length > 0 ? { sides: a } : {}), u = Object.keys(o).length > 0 ? new Rt({ sides: o }) : void 0;
    return "extras" in e && e.extras ? e.extras.banding = l : Ae(e) && (e.banding = l), u && "_banding" in e && (e._banding = u), Ae(e) && n && (e.bandingOptions = r), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(e) {
    const i = e.finish, s = "_finish" in e ? e._finish : void 0, n = Ae(e) ? e.finishOptions : void 0;
    if (!i && !s && !n || i && i instanceof It)
      return !1;
    const a = {}, o = {}, r = { faces: {} };
    if (i && typeof i == "object")
      for (const [c, f] of Object.entries(i))
        mt.includes(c) && (a[c] = f);
    if (s && typeof s == "object")
      for (const [c, f] of Object.entries(s))
        mt.includes(c) && (o[c] = f);
    if (n && typeof n == "object") {
      n.all && (r.faces.all = n.all);
      for (const [c, f] of Object.entries(n))
        c !== "all" && mt.includes(c) && f && (r.faces[c] = f);
    }
    const l = new It(Object.keys(a).length > 0 ? { faces: a } : {}), u = Object.keys(o).length > 0 ? new It({ faces: o }) : void 0;
    return "extras" in e && e.extras ? e.extras.finish = l : Ae(e) && (e.finish = l), u && "_finish" in e && (e._finish = u), Ae(e) && n && (e.finishOptions = r), !0;
  }
  /**
   * Check if shape needs migration (has old structure)
   */
  static needsMigration(e) {
    const i = e.banding;
    if (i && typeof i == "object" && !(i instanceof Rt) && !("sides" in i) && !("faces" in i))
      return !0;
    if ("_banding" in e) {
      const n = e._banding;
      if (n && typeof n == "object" && !(n instanceof Rt) && !("sides" in n) && !("faces" in n))
        return !0;
    }
    const s = e.finish;
    if (s && typeof s == "object" && !(s instanceof It) && !("sides" in s) && !("faces" in s))
      return !0;
    if ("_finish" in e) {
      const n = e._finish;
      if (n && typeof n == "object" && !(n instanceof It) && !("sides" in n) && !("faces" in n))
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
          const n = Object.keys(i.sides).filter((a) => !At.includes(a));
          if (n.length > 0)
            throw new Error(`Invalid side keys in banding: ${n.join(", ")}`);
        }
      }
      const s = e.finish;
      if (s) {
        if ("sides" in s && s.sides)
          throw new Error("Finish should not have sides property");
        if ("faces" in s && s.faces) {
          const n = Object.keys(s.faces).filter((a) => !mt.includes(a));
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
    return "_banding" in e && e._banding && (i._banding = JSON.parse(JSON.stringify(e._banding))), "_finish" in e && e._finish && (i._finish = JSON.parse(JSON.stringify(e._finish))), Ae(e) && (e.bandingOptions && (i.bandingOptions = JSON.parse(JSON.stringify(e.bandingOptions))), e.finishOptions && (i.finishOptions = JSON.parse(JSON.stringify(e.finishOptions)))), i;
  }
  /**
   * Restore shape from backup
   */
  static restoreFromBackup(e, i) {
    "extras" in e && e.extras ? (i.banding && (e.extras.banding = i.banding), i.finish && (e.extras.finish = i.finish)) : Ae(e) && (i.banding && (e.banding = i.banding), i.finish && (e.finish = i.finish)), i._banding && "_banding" in e && (e._banding = i._banding), i._finish && "_finish" in e && (e._finish = i._finish), Ae(e) && (i.bandingOptions && (e.bandingOptions = i.bandingOptions), i.finishOptions && (e.finishOptions = i.finishOptions));
  }
}
const rp = {
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
function na(t = !1) {
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
    sides: na(t),
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
  for (const [i, s] of Object.entries(rp))
    i in t && (e[s] = t[i]);
  return e;
}
function hp(t) {
  const e = {};
  for (const [i, s] of Object.entries(lp))
    i in t && (e[s] = t[i]);
  return e;
}
function xt(t) {
  return t === 1 ? !0 : t === 0 ? !1 : t;
}
function ni(t) {
  if (!t) return t;
  const e = "x1" in t || "x2" in t || "y1" in t || "y2" in t, i = "l1" in t || "l2" in t || "w1" in t || "w2" in t;
  if (e && i && console.warn("Mixed side format detected in data - using old format (x/y) and ignoring new format (l/w)", t), e) {
    const n = fp(t), a = {};
    return "l1" in n && (a.l1 = xt(n.l1)), "l2" in n && (a.l2 = xt(n.l2)), "w1" in n && (a.w1 = xt(n.w1)), "w2" in n && (a.w2 = xt(n.w2)), a;
  }
  const s = {};
  return "l1" in t && (s.l1 = xt(t.l1)), "l2" in t && (s.l2 = xt(t.l2)), "w1" in t && (s.w1 = xt(t.w1)), "w2" in t && (s.w2 = xt(t.w2)), Object.keys(s).length > 0 ? s : t;
}
function pp(t) {
  return !t || typeof t != "string" ? t : {
    "side.x1": "side.w1",
    "side.x2": "side.w2",
    "side.y1": "side.l1",
    "side.y2": "side.l2"
  }[t] || t;
}
function Ei(t) {
  return !t || !Array.isArray(t) ? t : t.map(pp);
}
function gp(t) {
  const e = {};
  if (t.banding && typeof t.banding == "object")
    for (const [i, s] of Object.entries(t.banding))
      s === !0 || s === !1 ? e[i] = s : typeof s == "number" ? e[i] = xt(s) : typeof s == "string" && s.length > 0 && (e[i] = s);
  if (t.bandingType && typeof t.bandingType == "object")
    for (const [i, s] of Object.entries(t.bandingType))
      if (t.banding) {
        const n = e[i];
        (n === !0 || typeof n == "string" && n.length > 0) && (typeof s == "string" && s.length > 0 ? e[i] = s : typeof s == "number" && s !== 0 && (e[i] = String(s)));
      } else
        typeof s == "string" && s.length > 0 ? e[i] = s : typeof s == "number" && s !== 0 && (e[i] = String(s));
  return Object.keys(e).length > 0 ? e : void 0;
}
function aa(t) {
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
  !t || typeof t != "object" || (ho.needsMigration(t) && ho.migrateShape(t), t._banding && delete t._banding, t._finish && delete t._finish, t._bandingType && delete t._bandingType);
}
function Xr(t) {
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
function Yw(t) {
  if (!(!t || typeof t != "object")) {
    if (mp(t), t.parts && Array.isArray(t.parts) && (t.parts = t.parts.map((e) => (e.extras?.banding?.sides && (e.extras.banding.sides = ni(e.extras.banding.sides)), e.extras?.finish?.sides && (e.extras.finish.sides = ni(e.extras.finish.sides)), e.extras?.planing?.sides && (e.extras.planing.sides = ni(e.extras.planing.sides)), e))), t.stock && Array.isArray(t.stock) && (t.stock = t.stock.map((e) => e?.trim ? {
      ...e,
      trim: ni(e.trim)
    } : e)), t.options) {
      if (Xr(t.options), t.options.bandingLocations && (t.options.bandingLocations = Ei(t.options.bandingLocations)), t.options.finishLocations && (t.options.finishLocations = Ei(t.options.finishLocations)), t.options.planingLocations && (t.options.planingLocations = Ei(t.options.planingLocations)), t.options.extrasLocationGroups)
        for (const e of ["banding", "finish", "planing"]) {
          const i = t.options.extrasLocationGroups[e];
          i && Array.isArray(i) && i.forEach((s) => {
            s.locations && (s.locations = Ei(s.locations));
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
        i.locations && Array.isArray(i.locations) && (i.locations = Ei(i.locations)), i.groups && Array.isArray(i.groups) && i.groups.forEach((s) => {
          s.locations && (s.locations = Ei(s.locations));
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
  return delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.trim && (e.trim = ni(e.trim)), e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e.cost !== void 0 && (e.cost = Number(e.cost)), e;
}
function kp(t) {
  const e = { ...t };
  if (delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.banding || e.bandingType) {
    const i = gp(e);
    i && Object.keys(i).length > 0 && (e.extras || (e.extras = {}), e.extras.banding || (e.extras.banding = {}), e.extras.banding.sides = ni(i)), delete e.banding, delete e.bandingType;
  }
  if (e.extras?.banding?.sides && (e.extras = { ...e.extras }, e.extras.banding = { ...e.extras.banding }, e.extras.banding.sides = ni(e.extras.banding.sides)), e.finish && !e.extras?.finish) {
    if (e.extras || (e.extras = {}), e.extras.finish || (e.extras.finish = {}), e.finish.a !== void 0 || e.finish.b !== void 0) {
      const i = {};
      "a" in e.finish && (i.a = xt(e.finish.a)), "b" in e.finish && (i.b = xt(e.finish.b)), e.extras.finish.faces = i;
    } else
      e.extras.finish.sides = ni(e.finish);
    delete e.finish;
  }
  if (e.extras?.finish?.sides && (e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish }, e.extras.finish.sides = ni(e.extras.finish.sides)), e.extras?.finish?.faces) {
    e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish };
    const i = e.extras.finish.faces;
    "a" in i && (i.a = xt(i.a)), "b" in i && (i.b = xt(i.b));
  }
  return e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e;
}
class hi extends Error {
  constructor(e, i) {
    super(e), this.code = i, this.name = "FormulaError";
  }
}
class ra {
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
      const r = this.evaluate(e.condition, i), l = this.evaluate(e.trueExpr, i), u = this.evaluate(e.falseExpr, i);
      return r ? l : u;
    }
    if (!n || !Array.isArray(n) || n.length !== 2)
      throw new Error("Invalid formula structure");
    const [a, o] = n.map((r) => this.evaluate(r, i));
    return [">", "<", ">=", "<=", "=="].includes(s) ? this.evaluateComparison(s, a, o) : this.operations[s](a, o);
  }
  // Update the operations object to use the FormulaOperation type
  operations = {
    add: (e, i) => e + i,
    subtract: (e, i) => e - i,
    multiply: (e, i) => e * i,
    divide: (e, i) => {
      if (i === 0) throw new hi("Division by zero", "DIVISION_BY_ZERO");
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
      for (const o of s)
        i.add(`${o[1]}.${o[2]}`);
      const n = Array.from(e.matchAll(/inputs\.(\w+)/g));
      for (const o of n)
        i.add(`input.${o[1]}`);
      const a = /* @__PURE__ */ new Set(["width", "depth", "height", "quantity"]);
      for (const o of a)
        e.includes(o) && i.add(`input.${o}`);
    }
    return i;
  }
  buildFormulaGraph(e, i) {
    const s = {
      nodes: /* @__PURE__ */ new Map(),
      edges: /* @__PURE__ */ new Map()
    }, n = (a, o) => {
      const r = `${e}.${a}`;
      s.nodes.set(r, {
        panelKey: e,
        attribute: a,
        formula: o
      }), s.edges.set(r, this.isFormula(o) ? this.extractDependencies(this.stripFormulaPrefix(o.toString())) : /* @__PURE__ */ new Set());
    };
    return n("l", i.l), n("w", i.w), n("t", i.t), n("q", i.q), s;
  }
  resolveFormulas(e, i, s, n = {}) {
    const a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), r = (l) => {
      if (a.has(l))
        return a.get(l);
      const [u, c] = l.split(".");
      if (!e.nodes.has(l)) {
        const R = n[u];
        if (R)
          return c === "q" ? R.q : R[c];
        throw new Error(`Node not found: ${l}`);
      }
      if (o.has(l))
        throw new Error(`Circular dependency detected at ${l}`);
      const f = e.nodes.get(l);
      if (typeof f.formula == "number")
        return a.set(l, f.formula), f.formula;
      o.add(l);
      const h = e.edges.get(l) || /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Map();
      for (const R of h)
        if (R.startsWith("input.")) {
          const B = R.split(".")[1];
          g.set(R, s[B]);
        } else
          g.set(R, r(R));
      const I = this.evaluateFormulaWithDeps(f.formula, g, s);
      return a.set(l, I), o.delete(l), I;
    };
    for (const l of e.nodes.keys())
      r(l);
    return Object.fromEntries(a);
  }
  evaluateFormulaWithDeps(e, i, s, n) {
    if (!this.isFormula(e)) return e;
    let a = this.stripFormulaPrefix(e.toString());
    return a = a.replace(
      /inputs\.(\w+)/g,
      (o, r) => s[r]?.toString() || "0"
    ), a = a.replace(
      /panels\.(\w+)\.(\w+)/g,
      (o, r, l) => {
        if (r === n?.panelKey && n[l] !== void 0)
          return n[l].toString();
        if (i.has(`${r}.${l}`))
          return i.get(`${r}.${l}`).toString();
        throw new Error(`Undefined variable in formula: ${o}`);
      }
    ), this.evaluate(this.parse(a), s);
  }
  calculatePanels(e) {
    if (!this.spec?.panels) return {};
    const i = {};
    for (const [s, n] of Object.entries(this.spec.panels)) {
      const a = this.buildFormulaGraph(s, n), o = this.resolveFormulas(a, n, e, i), r = {
        panelKey: s,
        l: o[`${s}.l`],
        w: o[`${s}.w`],
        t: o[`${s}.t`],
        q: o[`${s}.q`] || 1
      };
      i[s] = {
        name: n.name,
        material: n.material,
        bandingOptions: n.bandingOptions ?? {},
        finishOptions: n.finishOptions ?? {},
        orientationLock: n.orientationLock !== void 0 ? this.evaluateFormulaWithDeps(n.orientationLock, /* @__PURE__ */ new Map(), e, r) : void 0,
        ...r
      };
    }
    return i;
  }
  evaluateFormula(e, i, s = {}) {
    if (typeof e == "number") return e;
    if (typeof e == "string") {
      const n = e.replace(/inputs\.(\w+)/g, (o, r) => {
        if (!(r in i))
          throw new Error(`Input not found: ${r}`);
        return i[r].toString();
      }), a = n.match(/panels\.(\w+)\.(l|w|t|q)/);
      if (a) {
        const [, o, r] = a;
        if (!s[o])
          throw new Error(`Panel not found: ${o}`);
        return r === "q" ? s[o].q ?? 1 : s[o].dimensions[r];
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
        const n = i.pop(), a = i.pop(), o = i.pop();
        i.push({
          operation: "ternary",
          condition: o,
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
    if (!this.spec?.inputs) throw new hi("No input specifications defined", "NO_INPUTS");
    for (const [i, s] of Object.entries(this.spec.inputs)) {
      const n = e[i];
      if (n === void 0)
        throw new hi(`Missing required input: ${i}`, "MISSING_INPUT");
      if (n < s.min || n > s.max)
        throw new hi(`Input ${i} value ${n} out of range [min: ${s.min}, max: ${s.max}]`, "INPUT_OUT_OF_RANGE");
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
      throw new hi("No input specifications defined", "NO_INPUTS");
    const i = Object.keys(this.spec.inputs);
    if (e.length !== i.length)
      throw new hi(`Expected ${i.length} fields, got ${e.length}`, "INVALID_FIELD_COUNT");
    let s = 0;
    for (const n of e) {
      const a = i[s], o = this.spec.inputs[a];
      if (n.value === null || n.value === void 0)
        throw new hi(`Missing value for field ${s}`, "MISSING_FIELD_VALUE");
      if (n.value < o.min || n.value > o.max)
        throw new hi(`Field ${s} value ${n.value} out of range [min: ${o.min}, max: ${o.max}]`, "FIELD_OUT_OF_RANGE");
      s++;
    }
  }
  fieldsToInputs(e) {
    const i = Object.keys(this.spec?.inputs || {});
    return e.reduce((s, n, a) => {
      const o = i[a];
      return o && (s[o] = n.value), s;
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
const ns = j({
  min: d().min(0).optional(),
  max: d().min(0).optional()
}).optional(), Ip = j({
  // Basic dimension constraints
  l: ns,
  w: ns,
  t: ns,
  longSide: ns,
  shortSide: ns,
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
function Pp(t, e) {
  const i = [], s = (a, o, r) => {
    o == null || r === void 0 || (r.min !== void 0 && o < r.min && i.push({
      valid: !1,
      dimension: a,
      value: o,
      constraint: "min",
      limit: r.min
    }), r.max !== void 0 && o > r.max && i.push({
      valid: !1,
      dimension: a,
      value: o,
      constraint: "max",
      limit: r.max
    }));
  };
  s("l", t.l, e.l), s("w", t.w, e.w), s("longSide", t.longSide, e.longSide), s("shortSide", t.shortSide, e.shortSide);
  const n = typeof t.t == "string" ? parseFloat(t.t) : t.t;
  if (isNaN(n) || s("t", n, e.t), e.crossDimensionalRule) {
    const { primaryMin: a, secondaryMin: o } = e.crossDimensionalRule, r = t.l || 0, l = t.w || 0;
    if (a !== void 0 && o !== void 0) {
      const u = r >= a && l >= o, c = l >= a && r >= o;
      !u && !c && i.push({
        valid: !1,
        dimension: "crossDimensional",
        constraint: "crossDimensional",
        message: e.message || `At least one side must be ≥ ${a} mm and the other side must be ≥ ${o} mm`
      });
    }
  }
  return e.formula && (Cp(e.formula, {
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
function Cp(t, e) {
  try {
    const i = new ra({}), s = i.parse(t);
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
function Tp(t) {
  if (t.message)
    return t.message;
  if (t.constraint === "crossDimensional")
    return t.message || "Part dimensions do not meet requirements";
  const e = t.dimension === "t" ? "thickness" : t.dimension === "longSide" ? "long side" : t.dimension === "shortSide" ? "short side" : t.dimension, i = t.constraint === "min" ? "minimum" : "maximum";
  return `Part requires ${e} ${i} of ${t.limit} (current: ${t.value})`;
}
const Ap = { id: "mini-stock-nav" }, Op = ["onMousedown"], Lp = { class: "id" }, Fp = /* @__PURE__ */ ze({
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
    return (a, o) => (S(), F("div", Ap, [
      (S(!0), F(Me, null, Ye(i.stockList, (r, l) => (S(), F("button", {
        type: "button",
        key: l,
        class: Ee(["c-btn c-btn--col-4 c-btn--sm", { selected: r.autoId === i.activeStockAutoId }]),
        style: at({
          backgroundColor: r.autoId === i.activeStockAutoId ? "#" + i.secondaryColor : "#" + i.primaryColor
        }),
        onMousedown: (u) => n(r.autoId)
      }, [
        D("div", Lp, ne(l + 1), 1),
        hs(D("div", { class: "stack legibility" }, ne(r.stack), 513), [
          [sn, typeof r?.stack == "number" && r.stack > 1]
        ])
      ], 46, Op))), 128))
    ]));
  }
});
function $p(t) {
  const e = t.x, i = t.x + t.l, s = Et().domain([e, i]).range([this.scales.xPositionScale(e), this.scales.xPositionScale(i)]), n = t.y, a = t.y + t.w, o = Et().domain([n, a]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(a)]), r = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + r})`).call(zs(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + r})`).attr("class", "axis shape x").call(zs(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), t?.stock?.saw?.stockType !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - r}, 0)`).call(Ws(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - r}, 0)`).attr("class", "axis shape y").call(Ws(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Dp() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((e) => {
    e.transition().duration(0).call(jo(this.scales.xScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dy", -5);
  });
  const t = this.requiresStretch(this.props.stock.value);
  (!t || t && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((e) => {
    e.transition().duration(0).call(Bo(this.scales.yAxisScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dx", 5);
  });
}
function Qr(t, e, i) {
  !i || !t?.length || t.forEach((s, n) => {
    const [a, o] = s;
    i === "x" ? Ep.call(this, a, o, e[n]) : Rp.call(this, a, o, e[n]);
  });
}
function Ep(t, e, i) {
  const s = Et().domain([t, e]).range([
    this.scales.xPositionScale(t),
    this.scales.xPositionScale(e)
  ]), n = el(s.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(zs(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(i)));
  a.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, r, l) => l[r]?.getBBox()?.height + 10), this.axes.cutMeasurementXAxes.push(a);
}
function Rp(t, e, i) {
  const s = Et().domain([t, e]).range([
    this.scales.yPositionScale(t),
    this.scales.yPositionScale(e)
  ]), n = el(s.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(Ws(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(i)));
  _p(a), this.axes.cutMeasurementYAxes.push(a);
}
function el(t) {
  return (t[1] - t[0]) / 2 + t[0];
}
function _p(t) {
  t.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (e, i, s) => s[i]?.getBBox()?.height + 10).attr("dx", (e, i, s) => s[i]?.getBBox()?.width / 4).attr("transform", (e, i, s) => "rotate(90) translate(" + s[i]?.getBBox()?.width / 4 + ")");
}
function ds() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Mp() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function vn() {
  this.axes.cutMeasurementXAxes?.length && (this.axes.cutMeasurementXAxes.forEach((t) => t.remove()), this.axes.cutMeasurementXAxes.length = 0), this.axes.cutMeasurementYAxes?.length && (this.axes.cutMeasurementYAxes.forEach((t) => t.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function tl(t) {
  return t.autoId;
}
function jp(t, e) {
  const i = /* @__PURE__ */ new Set();
  function s(n) {
    if (!(!n || i.has(n.autoId))) {
      if (i.add(n.autoId), n.autoId === e)
        return n;
      if (n.children && Array.isArray(n.children)) {
        for (const a of n.children)
          if (a && a.autoId !== n.autoId) {
            const o = s(a);
            if (o) return o;
          }
      }
    }
  }
  return s(t);
}
function Fs({ parent: t, near: e, far: i }) {
  if (!this.props.containerWidth)
    return !1;
  const s = [t, e, i].filter((n) => n);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(s, tl).join(
    (n) => n.append("rect").attr("class", "segment").call((a) => po.call(this, a)),
    (n) => n.call((a) => po.call(this, a)),
    (n) => n.remove()
  ), this.state.env === "development" && Bp.call(this, s), !this.settings.app && this.state.env === "development" && Np.call(this);
}
function po(t) {
  return t.classed("offcut", (e) => e.offcut).classed("near", (e) => e.type === "near").classed("far", (e) => e.type === "far").classed("parent", (e, i) => e.id !== "root" && i === 0).attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e));
}
function Bp(t) {
  this.selections.segmentGroup.selectAll("text").data(t, tl).join(
    (e) => e.append("text").attr("class", "segment-text").call((i) => go.call(this, i)),
    (e) => e.call((i) => go.call(this, i)),
    (e) => e.remove()
  );
}
function go(t) {
  return t.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function Np() {
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
      if (i = jp(n, e), i) break;
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
const { currentCutIndex: sl } = ca();
function Vp() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (t, e) => e).join(
    (t) => t.append("line").attr("class", "cut").call((e) => mo.call(this, e)),
    (t) => t.call((e) => mo.call(this, e)),
    (t) => t.remove()
  ), ol.call(this));
}
function mo(t) {
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
function Gp(t, e, i, s) {
  this.selections.cutLines.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] || !s && a.guillotineState.parentSegmentID === e ? "visible" : "hidden"), sl.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] ? "visible" : "hidden")), this.selections.cutLines.classed("highlight", (a) => t.stock.cutType === "guillotine" && a.isTrim ? a.position === t.type : a.guillotineState[i] === t.guillotineState[i]), this.selections.cutLines.classed("ptx-dummy", (a) => a?.ptxData?.isDummy), s || zp.call(this, t, e);
}
function qp(t, e, i, s, n) {
  this.selections.cutLines.style("visibility", (o, r) => r <= e ? "visible" : "hidden"), this.state.env === "development" && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (o, r) => r <= e ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (o, r) => r <= e ? "visible" : "hidden"));
  let a;
  if (t?.dimension === "l" ? a = [
    [0 + (i.l1 ?? 0), t.y1 - n],
    [t.y1 + n, t.stock.w - (i?.y2 ? i.y2 : 0)]
  ] : t?.dimension === "w" && (a = [
    [0 + (i.w1 ?? 0), t.x1 - n],
    [t.x1 + n, t.stock.l - (i?.x2 ? i.x2 : 0)]
  ]), a?.length) {
    const o = [
      a[0][1] - a[0][0],
      a[1][1] - a[1][0]
    ];
    this.state.device === "desktop" && !t.isTrim && Qr.call(this, a, o, s);
  }
  this.selections.cutLines.classed("highlight", (o, r) => r === e);
}
function ol() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1), this.selections?.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), this.selections?.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return Math.max(1, Math.ceil(e));
  }), ds.call(this), vn.call(this);
}
function zp(t, e) {
  const i = t?.guillotineState?.segmentCutOrder;
  if (i == null) return;
  this.selections.cutLines.classed("completed", (f) => nl(f, e, i)), this.selections.cutLines.classed("inside-segment", (f) => al(f, e));
  const s = il.call(this, t);
  if (s === !1) return;
  const { parent: n, children: a } = s, { near: o } = rl(t, a);
  if (!o) return;
  let r = [], l;
  const u = this.getHalfBladeWidth(t.stock), c = t.dimension === "l" ? "y" : "x";
  t?.dimension === "l" ? (r = [
    [
      o.y,
      o.y + o.w
    ],
    [
      t.y1 + u,
      n.y + n.w
    ]
  ], l = [t?.distances?.bottom, t?.distances.top]) : t?.dimension === "w" && (r = [
    [
      o.x,
      o.x + o.l
    ],
    [
      t.x1 + u,
      n.x + n.l
    ]
  ], l = [t?.distances?.left, t?.distances?.right]), this.state.device === "desktop" && !t.isTrim && l && Qr.call(this, r, l, c);
}
function Wp(t = null, e = "") {
  if (t === null || this.selections.cutLines.empty()) return;
  if (this.props.stock.value.saw.cutType === "guillotine") {
    const g = this.props.cuts.value.filter((I) => I.isTrim);
    t = t + g.length, t - g.length >= this.props.cuts.value.length - g.length && (sl.value = this.props.cuts.value.length - g.length - 1);
  }
  const i = this.props.cuts.value[t];
  if (!i) return;
  if (ds.call(this), vn.call(this), t !== null && t >= 0 && t < this.selections.cutLines.size()) {
    const g = this.selections.cutLines.nodes()[t].parentElement;
    if (!g) return;
    ut(g).raise();
  }
  const s = i.guillotineState?.parentSegmentID, n = this.getHalfBladeWidth(i.stock), a = i.dimension === "l" ? "y" : "x", o = i?.stock?.trim, r = e === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes(i?.stock?.cutType) && s !== null && typeof s < "u" ? Gp.call(this, i, s, r, e) : qp.call(this, i, t, o, a, n), Hp.call(this, i, t, s), e === "ptx") {
    this.removeSegments();
    return;
  }
  const l = il.call(this, i);
  if (l === !1)
    return;
  const { parent: u, children: c } = l;
  if (!i?.guillotineState?.parentSegmentID)
    return Fs.call(this, { parent: u });
  const { near: f, far: h } = rl(i, c);
  if (i.beamTrimL1 || i.beamTrimW1) {
    if (i.beamTrimL1) {
      const g = c.find((B) => B.offcut === !0 && B.x === 0 && B.l === i.stock?.trim?.l1), I = c.find((B) => B.type === "near" && B !== g), R = c.find((B) => B.type === "far" && B !== g && B.phase > u.phase);
      if (g)
        return Fs.call(this, { parent: g, near: I, far: R });
    } else if (i.beamTrimW1) {
      const g = c.find((B) => B.offcut === !0 && B.y === 0 && B.w === i.stock?.trim?.w1);
      let I = c.find((B) => B.type === "near" && B !== g);
      const R = c.find((B) => B.type === "far" && B !== g && B.y > (g?.y || 0));
      if (I && i.stock && (I = {
        ...I,
        x: 0,
        l: i.stock.l
      }), g)
        return Fs.call(this, { parent: g, near: I, far: R });
    }
  }
  Fs.call(this, { parent: u, near: f, far: h });
}
function rl(t, e) {
  const i = t.dimension === "l" ? "y" : "x", s = t.dimension === "l" ? "w" : "l", n = e.find((o) => o.type === "near" && o[i] + o[s] === t[i + "1"] - t.stock.halfBladeWidth), a = e.find((o) => o.type === "far" && o[i] === t[i + "1"] + t.stock.halfBladeWidth);
  return { near: n, far: a };
}
function Hp(t, e, i) {
  this.selections.cutLines.attr("stroke-width", (s, n) => {
    const a = this.scales.measurementScale(this.getBladeWidth(s.stock));
    let o = Math.max(1, Math.ceil(a));
    const r = t?.guillotineState?.segmentCutOrder;
    return (nl(s, i, r) || al(s, i)) && (o += 1), n === e && Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock))) < 5 && (o = 5), o;
  });
}
function Up(t) {
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
      let o = function(c) {
        return `${c.x1}-${c.y1}-${c.x2}-${c.y2}`;
      }, r = function(c) {
        c.attr("class", "ray").attr("x1", (f) => this.scales.xPositionScale(f.x1)).attr("x2", (f) => this.scales.xPositionScale(f.x2)).attr("y1", (f) => this.scales.yPositionScale(f.y1)).attr("y2", (f) => this.scales.yPositionScale(f.y2));
      };
      if (this.state.env !== "development") return;
      const u = Vr(this.props.shapes.value, this.props.stock.value).flatMap((c) => Object.values(c.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(u, o).join(
        (c) => c.append("line").call((f) => r.call(this, f)),
        (c) => c.call((f) => r.call(this, f)),
        (c) => c.remove()
      );
    }
    n = mh(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const a = new ci();
  for (const o of s.toArray()) {
    const r = Gr(t, o, this.props.stock.value);
    r && a.addPoints(r.toArray());
  }
  if (n) {
    const o = n.toArray();
    for (const r of o) {
      const l = hh(t, r, this.props.stock.value);
      l && a.addPoints(l.toArray());
    }
  }
  this.props.stock.value.cutType === "efficiency" ? ([
    new ot(0 + (this.props.stock.value.trim.l1 ?? 0), 0 + (this.props.stock.value.trim.w1 ?? 0)),
    new ot(0 + (this.props.stock.value.trim.l1 ?? 0), 0 + (this.props.stock.value.trim.w1 ?? 0)),
    new ot(
      this.props.stock.value.l - t.l - (this.props.stock.value.trim.l2 ?? 0),
      0 + (this.props.stock.value.trim.w1 ?? 0)
    ),
    new ot(
      0 + (this.props.stock.value.trim.l1 ?? 0),
      this.props.stock.value.w - t.w - (this.props.stock.value.trim.w2 ?? 0)
    ),
    new ot(
      this.props.stock.value.l - t.l - (this.props.stock.value.trim.l2 ?? 0),
      this.props.stock.value.w - t.w - (this.props.stock.value.trim.w2 ?? 0)
    )
  ].forEach((o) => a.add(o)), e = a.toArray()) : (a.add(new ot(0 + (this.props.stock.value.trim.l1 ?? 0), 0 + (this.props.stock.value.trim.w1 ?? 0))), e = a.toArray());
  for (let o = e.length; o--; ) {
    const r = e[o];
    t.x = r.x, t.y = r.y;
    for (const l of this.props.shapes.value)
      if (this.collision(t, l, this.props.stock.value)) {
        e.splice(o, 1);
        break;
      }
  }
  return console.log("[Diagram] drawPositions: filtered positions count:", e?.length), Yp.call(this, e, t), Kp.call(this, e, t), e?.length ? (console.log("[Diagram] drawPositions: success, returning true"), !0) : (console.warn("[Diagram] drawPositions: no valid positions after filtering"), !1);
}
function Yp(t, e) {
  function i(n) {
    return `${n.x}-${n.y}`;
  }
  function s(n, a) {
    n.attr("data-id", (o, r) => r).attr("class", "shape ghost").attr("x", (o) => (a.x = o.x, this.getRectangleCoordinate(a, "x"))).attr("y", (o) => (a.y = o.y, this.getRectangleCoordinate(a, "y"))).attr("width", this.getWidthAttribute(a)).attr("height", this.getHeightAttribute(a)).on("mousedown", (o, r) => {
      console.log("[Diagram] ghostShape mousedown (position click):", {
        shapeId: a.id,
        shapeParentId: a.parentId,
        position: { x: r.x, y: r.y },
        shapeRot: a.rot
      }), this.callbacks.onMoveShape(a, r);
    });
  }
  this.selections.ghostShapeGroup.selectAll("rect").data(t, i).join(
    (n) => n.append("rect").call((a) => s.call(this, a, e)),
    (n) => n.call((a) => s.call(this, a, e)),
    (n) => n.remove()
  ), this.state.hasTouch || this.selections.ghostShapeGroup.selectAll("rect").on(
    "mouseover",
    function(n) {
      n.stopPropagation(), ut(this).classed("hover", !0), ut(this).raise();
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), ut(this).classed("hover", !1);
    },
    {
      passive: !0
    }
  );
}
function Kp(t, e) {
  function i(n) {
    return `${n.x}-${n.y}`;
  }
  function s(n) {
    n.attr("class", "dot").attr("cx", (a) => this.scales.xPositionScale(a.x)).attr("cy", (a) => this.scales.yPositionScale(a.y)).attr("r", 6).on("mousedown", (a, o) => {
      this.callbacks.onMoveShape(e, o);
    });
  }
  this.selections.dotGroup.selectAll("circle").data(t, i).join(
    (n) => n.append("circle").call((a) => s.call(this, a)),
    (n) => n.call((a) => s.call(this, a)),
    (n) => n.remove()
  ), e.x = 0, e.y = 0, this.state.hasTouch || this.selections.dotGroup.selectAll("circle").on(
    "mouseover",
    function(n) {
      n.stopPropagation(), ut(this).classed("hover", !0);
      const a = ut(this).attr("data-id"), o = ut(`.ghost[data-id="${a}"]`);
      o.raise(), o.classed("highlight", !0);
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), ut(this).classed("hover", !1);
      const a = ut(this).attr("data-id");
      ut(`.ghost[data-id="${a}"]`).classed(
        "highlight",
        !1
      );
    },
    {
      passive: !0
    }
  );
}
function Zp() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text id").text((e) => yo.call(this, e)).classed("hidden", (e, i, s) => this.isTextHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1),
    (t) => t.text((e) => yo.call(this, e)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text name").text((e) => bo.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, i, s) => this.isNameHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const n = s[i];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    }),
    (t) => t.text((e) => bo.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, i, s) => this.isNameHidden(e, i, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const n = s[i];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text length").text((e) => vo.call(this, e)).classed("hidden", (e, i, s) => this.isLengthHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const a = s[i].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    }),
    (t) => t.text((e) => vo.call(this, e)).classed("hidden", (e, i, s) => this.isLengthHidden(e, i, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const a = s[i].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text width").text((e) => wo.call(this, e)).classed("hidden", (e, i, s) => this.isWidthHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (e, i, s) => {
      const n = s[i], a = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(e, "y", "center"), r = this.state.device === "mobile" ? 90 : -90;
      return `translate(${a},${o}) rotate(${r})`;
    }),
    (t) => t.text((e) => wo.call(this, e)).classed("hidden", (e, i, s) => this.isWidthHidden(e, i, s)).attr("transform", (e, i, s) => {
      const n = s[i], a = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(e, "y", "center"), r = this.state.device === "mobile" ? 90 : -90;
      return `translate(${a},${o}) rotate(${r})`;
    })
  );
}
function yo(t) {
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
          if (e?.id ? s = e.id : i && (s = i.split(".")[0]), s) {
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
function bo(t) {
  return !t?.name || typeof t?.name != "string" ? null : t.name.toUpperCase().trim();
}
function vo(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : X({ v: t.l, o: this.numberConfig }).toString();
}
function wo(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : X({ v: t.w, o: this.numberConfig }).toString();
}
const Jp = (t) => t.id;
function Xp() {
  if (!this.props.containerWidth) return;
  ds.call(this);
  const t = this.props.shapes.value.reduce((e, i) => {
    const s = parseInt(i.parentId);
    return s > e ? s : e;
  }, 0);
  this.scales.shapeColorScale.domain([1, t]), this.state.env === "development" && eg.call(this), Qp.call(this);
}
function Qp() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, Jp).join(
    (t) => {
      const e = t.append("g").attr("class", "shape-group");
      return So.call(this, e), xo.call(this, e), e.on("mousedown", ko.bind(this)), e;
    },
    (t) => (So.call(this, t), xo.call(this, t), t.on("mousedown", ko.bind(this)), t),
    (t) => t.remove()
  ), og.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => Zp.call(this)), this.selections.shapeWrappers.size() > 0;
}
function eg() {
  let t = 1 / 0, e = -1 / 0;
  for (const n of this.props.shapes.value) {
    const a = n?.bestScore?.total;
    if (a !== 0 && a !== null && a !== void 0) {
      t = a, e = a;
      break;
    }
  }
  const i = this.props.shapes.value.reduce((n, a) => {
    const o = a?.bestScore?.total;
    return o === 0 || o === null || o === void 0 ? n : o < n ? o : n;
  }, t), s = this.props.shapes.value.reduce((n, a) => {
    const o = a?.bestScore?.total;
    return o == null ? n : o > n ? o : n;
  }, e);
  this.scales.scoreColorScale = cs([qt(251, 224, 255), qt(122, 0, 138)]).domain([i, s]);
}
function So(t) {
  const e = t.selectAll("rect.shape").data((i) => [i]).join("rect").attr("class", "shape").attr("x", (i) => this.getRectangleCoordinate(i, "x")).attr("y", (i) => this.getRectangleCoordinate(i, "y")).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i)).style("fill", (i) => fs.call(this, i));
  this.selections.shapeRectangles ? this.selections.shapeRectangles = No(
    this.selections.shapeRectangles.nodes().concat(e.nodes())
  ) : this.selections.shapeRectangles = e;
}
function xo(t) {
  !this.settings.main || this.settings.app || this.state.hasTouch || t.on("mouseover", (e) => {
    if (this?.props.moveMode && this.state.moving) return;
    const i = ut(e.target);
    i.classed("hover", !0), i.classed("selected") || i.style("fill", this.config.colors.partSelected.toString());
  }, { passive: !0 }).on("mouseout", (e, i) => {
    const s = ut(e.target);
    s.classed("hover", !1), s.classed("selected") || s.style("fill", fs.call(this, i));
  }, { passive: !0 });
}
function ko(t, e) {
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
  this.state.env === "development" && !this.props.moveMode.value && tg.call(this, t, e), (this.settings.app || this.settings.embed) && ng.call(this, t, e), this.state.device === "desktop" && !this.props.moveMode.value && (vn.call(this), $p.call(this, e)), this.props.moveMode.value ? (console.log("[Diagram] handleShapeClick: calling onAddToPartsBin", {
    shapeId: e.id
  }), this.callbacks.onAddToPartsBin(e)) : (console.log("[Diagram] handleShapeClick: calling findShape", {
    shapeId: e.id
  }), this.findShape.call(this, e.id));
}
function tg(t, e) {
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
        ], sg.call(this, e);
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
    console.table(ig(e, i));
  }
}
function ig(t, e) {
  return e.reduce((i, s) => {
    const n = dg(t, s);
    return i[s] = Array.isArray(n) ? n.join(", ") : n, i;
  }, {});
}
function sg(t) {
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const e = t.guillotineData?.myStripParent;
  e && this.selections.shapeWrappers.filter((n) => n.id === e || n.group.addedAsGroup === e).select("rect").classed("highlight-a", !0);
  const i = this.props.shapes.value.find((s) => s.id === e)?.guillotineState?.myStripParent;
  i && this.selections.shapeWrappers.filter((n) => n.id === i || n.group.addedAsGroup === e).select("rect").classed("highlight-b", !0);
}
function ng(t, e) {
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
      color: fs.call(this, e),
      notes: e?.notes
    };
    if (typeof this.callbacks.onPartClick == "function" && this.callbacks.onPartClick(i), this.settings.app) return !1;
  }
  if (this.settings.app) return !1;
}
function fs(t) {
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
          return `rgb(${n.map((r, l) => Math.round(r + t.guillotineState.myPhase / 5 * (a[l] - r))).join(",")})`;
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
        const n = this.props.shapes.value.reduce((a, o) => {
          const r = o.placementOrder ?? 0;
          return r > a ? r : a;
        }, 0);
        if (n > 0 && typeof t.placementOrder == "number") {
          const a = [0, 115, 255], o = [255, 50, 50], r = t.placementOrder / n;
          return `rgb(${a.map((u, c) => Math.round(u + r * (o[c] - u))).join(",")})`;
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
const Io = 3;
function ag(t) {
  const e = [];
  for (const i of t) {
    const s = i.extras?.banding;
    if (i.added && s?.sides)
      for (const [n, a] of Object.entries(s.sides)) {
        if (!a || ["a", "b", "c", "d"].includes(n)) continue;
        let o = n;
        if (i.rot) {
          const l = Tr({ [n]: !0 }, "cc");
          o = Object.keys(l)[0];
        }
        const r = rg.call(this, i, o);
        r && e.push(r);
      }
  }
  return e;
}
function Po(t) {
  const e = Io / 2;
  return t.attr("class", "banding").attr("x1", (i) => this.scales.xPositionScale(i.l1) + $s.call(this, i.type, "x", e)).attr("x2", (i) => this.scales.xPositionScale(i.l2) + $s.call(this, i.type, "x", e)).attr("y1", (i) => this.scales.yPositionScale(i.w1) + $s.call(this, i.type, "y", e)).attr("y2", (i) => this.scales.yPositionScale(i.w2) + $s.call(this, i.type, "y", e)).attr("stroke-width", Io).attr("stroke", "white");
}
function og(t) {
  if (!this.settings.main) return;
  const e = ag.call(this, t);
  if (e.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(e, (i, s) => s).join(
    (i) => i.append("line").call((s) => Po.call(this, s)),
    (i) => i.call((s) => Po.call(this, s)),
    (i) => i.remove()
  );
}
function $s(t, e, i) {
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
function rg(t, e) {
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
function lg(t) {
  this.selections.shapeWrappers.style("visibility", (e) => e?.placementOrder >= t ? "hidden" : "visible");
}
const Co = (t) => t.id;
function To(t) {
  return t.style("fill", this.config.colors.stock).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Ao(t) {
  return t.style("fill", "url(#stripes)").attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function cg() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), Dp.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], Co).join(
    (t) => t.append("rect").attr("class", "background stock").call((e) => To.call(this, e)),
    (t) => t.call((e) => To.call(this, e)),
    (t) => t.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], Co).join(
    (t) => t.append("rect").attr("class", "stock-pattern").call((e) => Ao.call(this, e)),
    (t) => t.call((e) => Ao.call(this, e)),
    (t) => t.remove()
  );
}
function ug(t) {
  return typeof t == "string" && t.length === 6 && !isNaN(+("0x" + t.replace("#", "")));
}
function dg(t, e) {
  return He(t, e);
}
class fg {
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
    if (this.config = e, this.selections = {}, !e.elementID || (this.selections.el = ut(e.elementID), this.selections.el === null)) return;
    const i = this.selections.el.node();
    i !== null && (this.selections.htmlEl = i, this.scales = {
      xScale: Et(),
      yScale: Et(),
      yPositionScale: Et(),
      xPositionScale: Et(),
      yAxisScale: Et(),
      measurementScale: Et(),
      shapeColorScale: cs(),
      scoreColorScale: cs()
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
    }, s = (n, a) => qt("#" + (ug(n?.replace("#", "")) ? n.replace("#", "") : a.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(i).map(([n, a]) => [
        n,
        s(e.colors?.[n], a)
      ])
    ), this.scales.shapeColorScale = cs([
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
      this.selections.svgCanvas = ut(e);
    this.selections.axisGroup = this.selections.svgCanvas.append("g").attr("class", "axis-group"), this.axes.xAxis = this.selections.axisGroup.append("g").attr("class", "axis stock x"), this.axes.yAxis = this.selections.axisGroup.append("g").attr("class", "axis stock y"), this.selections.stockGroup = this.selections.svgCanvas.append("g").attr("class", "stock-group"), this.selections.shapeGroup = this.selections.svgCanvas.append("g").attr("class", "shapes"), this.selections.bandingGroup = this.selections.svgCanvas.append("g").attr("class", "banding-group"), this.selections.cutGroup = this.selections.svgCanvas.append("g").attr("class", "cuts"), this.selections.segmentGroup = this.selections.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.selections.groupGroup = this.selections.svgCanvas.append("g").attr("class", "groups").attr("display", "none"), this.selections.ghostShapeGroup = this.selections.svgCanvas.append("g").attr("class", "positions"), this.selections.dotGroup = this.selections.svgCanvas.append("g").attr("class", "dots"), this.state.env === "development" && (this.selections.positionGroup = this.selections.svgCanvas.append("g").attr("class", "placements"));
  }
  updateNumberFormat(e, i, s) {
    this.numberConfig && (e && (this.numberConfig.numberFormat = e), i && (this.numberConfig.decimalPlaces = i), s && (this.numberConfig.fractionRoundTo = s));
  }
  formatNumber = (e) => {
    const i = X({
      v: e,
      o: this.numberConfig
    });
    if (i !== null) return i.toString();
  };
  trimNameToFit(e, i) {
    function s(n, a, o) {
      const r = o[a], l = ut(r);
      l.text(n.name);
      let u = l.text();
      const c = l.node();
      if (!c) return;
      let f = c.getComputedTextLength();
      const h = this.getWidthAttribute(n) - 20;
      for (; f > h && u.length > 0; )
        u = u.slice(0, -1), l.text(u.length ? u + "..." : ""), f = l.node().getComputedTextLength();
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
    return (...a) => new Promise((o) => {
      const r = () => {
        n = null, s || o(e.apply(this, a));
      };
      clearTimeout(n), s && !n && o(e.apply(this, a)), n = setTimeout(r, i);
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
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (s) => fs.call(this, s));
    const i = ut(e).select("rect");
    if (i) {
      i.classed("selected", !0), i.style("fill", this.config.colors.partSelected.toString());
      const s = ut(e).datum();
      this.callbacks.onShapeSelect(s, e);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    Xp.call(this);
  }
  drawStock() {
    cg.call(this);
  }
  drawCuts() {
    Vp.call(this);
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
      let o;
      switch (s) {
        case "center":
          o = this.scales.xPositionScale(e.x + e.l / 2), n && (o += n);
          break;
        case "right":
          o = this.scales.xPositionScale(e.x + e.l), n && (o -= n);
          break;
        case "left":
        default:
          o = this.scales.xPositionScale(this.settings.flipX ? e.x - e.l : e.x), n && (o -= n);
      }
      a = o;
    } else if (i === "y") {
      let o;
      switch (s) {
        case "center":
          o = this.scales.yPositionScale(e.y + e.w / 2), n && (o += n);
          break;
        case "bottom":
          o = this.scales.yPositionScale(this.settings.flipY ? e.y + e.w : e.y), n && (o += n);
          break;
        case "top":
        default:
          o = this.scales.yPositionScale(this.settings.flipY ? e.y : e.y + e.w), n && (o -= n);
      }
      a = o;
    }
    return a;
  }
  // Blade Width Methods
  getBladeWidth(e = null) {
    return Te(e) && e !== null ? e.bladeWidth : 0;
  }
  getHalfBladeWidth(e = null) {
    const i = e.bladeWidth;
    return i !== void 0 && i > 0 ? i / 2 : 0;
  }
  // Reset Methods
  removeShapes() {
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), ds.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), Mp.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), vn.call(this);
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
    const a = n.getBBox(), o = this.scales.measurementScale(e.l), r = this.scales.yScale(e.w);
    return a.width >= o || a.height >= r - this.state.padding;
  }
  isNameHidden(e, i, s) {
    const n = s[i];
    if (!n) return !0;
    const a = n.getBBox(), o = this.scales.measurementScale(e.l), r = this.scales.measurementScale(e.w);
    return a.width >= o || r < 40;
  }
  isLengthHidden(e, i, s) {
    if (this.settings.app) {
      const l = this.scales.measurementScale(e.l), u = this.scales.measurementScale(e.w);
      return l < 50 || u < 50;
    }
    if (e?.stock?.saw?.stockType === "linear") return !1;
    const n = s[i];
    if (!n) return !0;
    const a = n.getBBox(), o = this.scales.measurementScale(e.l), r = this.scales.measurementScale(e.w);
    return a.width >= o || r < 30;
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
    this?.selections?.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (e) => fs.call(this, e)), this?.selections?.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (e) => {
      const i = this.scales.measurementScale(this.getBladeWidth(e.stock));
      return i < 1 ? 1 : Math.ceil(i);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    ds.call(this);
  }
  updateShapeVisibility() {
    lg.call(this);
  }
  drawPositions(e) {
    return Up.call(this, e);
  }
  showCut(e) {
    Wp.call(this, e);
  }
  resetCuts() {
    ol.call(this);
  }
}
const hg = ["id"], pg = /* @__PURE__ */ ze({
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
      activeCuts: o,
      activeSegments: r,
      currentCutIndex: l,
      getStock: u,
      getShapes: c,
      getSegments: f,
      getCuts: h
    } = ca(), g = t, I = i, R = (te) => {
      I("part-click", te);
    }, B = (te) => {
      I("shape-colour-update", te);
    }, A = (te, je) => {
      te?.autoId && I("shape-select", te.autoId, je);
    }, x = (te) => {
      te && I("add-to-parts-bin", te);
    }, E = (te, je) => {
      te && I("move-shape", te, je);
    }, P = oe(0), $ = oe(0), Y = oe(null);
    let M, le = oe(!1);
    const q = St({
      debug: ""
    });
    Zt(() => H());
    const m = ee(() => ({
      format: g.numberFormat,
      decimals: g.decimalPlaces
    })), z = ee(() => g.stockAutoId ? u(g.stockAutoId) : n.value), Q = ee(() => g.stockAutoId ? c(g.stockAutoId) : a.value), K = ee(() => g.main ? g.stockAutoId ? h(g.stockAutoId) : o.value : []), w = ee(() => g.main ? g.stockAutoId ? f(g.stockAutoId) : r.value : []);
    Ro(Y, (te) => {
      const je = te[0], { width: Lt, height: Ft } = je.contentRect;
      Lt > 0 && (P.value = Lt), I("resize", { width: Lt, height: Ft });
    }), zl(
      P,
      (te) => {
        M && (te <= 0 || (M.setDevice(), M.resetShapeAxes(), M.drawAll(), l.value !== null && (M.toggleSegments(!0), M.showCut(l.value))));
      },
      { throttle: 100 }
    );
    let V = !1;
    We(() => z.value, (te) => {
      te && (P.value <= 0 || (V = !0, M.setDevice(), M.resetCuts(), M.removeSegments(), M.drawStock(), M.drawShapes(), M.drawCuts(), gt(() => V = !1)));
    }, { immediate: !1 }), We(() => Q.value, (te) => {
      V || te && (P.value <= 0 || (M.setDevice(), M.drawShapes()));
    }, { immediate: !1, deep: !0 }), g.main && (We(() => K.value, () => {
      V || P.value <= 0 || M.drawCuts();
    }, { immediate: !1, deep: !0 }), We(l, () => {
      l.value !== null && (P.value <= 0 || (M.toggleSegments(!0), M.showCut(l.value)));
    }, { immediate: !1 }), We(m, (te) => {
      M.updateNumberFormat(te.format, te.decimals, null);
    }, { immediate: !1 }));
    const H = () => {
      const te = {
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
          containerHeight: $,
          containerWidth: P,
          stock: z,
          shapes: Q,
          cuts: K,
          segments: w,
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
          onShapeColourUpdate: B,
          onShapeSelect: A,
          onAddToPartsBin: x,
          onMoveShape: E,
          onPartClick: R
        }
      };
      M = new fg(te), q.debug = M.state.debug, le.value = !0;
    }, G = (te = !1) => {
      M && M.toggleShapes(te);
    }, W = (te = !1) => {
      M && M.toggleCuts(te);
    }, de = (te = !1) => {
      M && M.toggleSegments(te);
    }, Se = () => {
      M && M.drawShapes();
    }, ke = () => {
      M && M.drawStock();
    }, Ce = () => {
      M && (M.toggleSegments(!1), M.resetCuts());
    }, _e = (te) => {
      M && (M.toggleSegments(!0), M.showCut(te));
    }, se = (te) => M ? M.drawPositions(te) : !1, lt = () => {
      M && M.removePositions();
    }, Ct = (te) => {
      M && M.findShape(te);
    }, ht = () => {
      M && M.clearSelection();
    }, wt = (te) => {
      M && M.requiresStretch(te);
    };
    return We(() => q.debug, (te) => {
      M?.state && (M.state.debug = te);
    }), e({
      loaded: le,
      toggleShapes: G,
      toggleCuts: W,
      toggleSegments: de,
      drawShapes: Se,
      drawStock: ke,
      drawPositions: se,
      resetPositions: lt,
      findShape: Ct,
      clearSelection: ht,
      resetCuts: Ce,
      showCut: _e,
      requiresStretch: wt,
      state: q
    }), (te, je) => (S(), F("div", {
      id: t.elementId,
      ref_key: "diagramContainerRef",
      ref: Y,
      class: Ee([{ app: t.app }, "diagram-container"])
    }, null, 10, hg));
  }
}), gg = { class: "action-menu" }, mg = ["textContent"], yg = {
  key: 0,
  class: "menu-divider"
}, bg = {
  key: 1,
  class: "group-label"
}, vg = /* @__PURE__ */ ze({
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
    const i = t, s = e, { isOpen: n, close: a, toggle: o } = vc(i.menuId), r = oe(), l = oe(), u = ee(() => i.disabled), c = ee(() => i.label), f = ee(() => i.showLabel), h = ee(() => i.icon), { floatingStyles: g } = Wl(r, l, {
      placement: i.placement,
      whileElementsMounted: jc,
      middleware: [
        Rc(i.offset),
        _c(),
        Mc({ padding: 8 })
      ]
    }), I = (m) => {
      if (!m) return ["fas", "question"];
      if (typeof m == "function" && (m = m(i)), Array.isArray(m))
        return m;
      if (typeof m == "string") {
        const z = m.split(" ");
        if (z.length >= 2) {
          const Q = z[0], K = z.slice(1).join("-").replace("fa-", "");
          return [Q, K];
        }
        return ["fas", m.replace("fa-", "")];
      }
      return ["fas", "question"];
    }, R = ee(() => I(h.value)), B = (m) => typeof m.active == "function" ? m.active(i) : typeof m.active == "boolean" ? m.active : !1, A = (m) => {
      if (!m.href) return !1;
      try {
        const z = typeof m.href == "function" ? m.href(i) : m.href;
        return new URL(z, window.location.origin).origin !== window.location.origin;
      } catch {
        return !1;
      }
    }, x = (m) => m.href ? "a" : "div", E = (m) => {
      const z = {};
      if (m.href) {
        const Q = typeof m.href == "function" ? m.href(i) : m.href;
        if (z.href = Q, A(m)) {
          const K = typeof m.target == "function" ? m.target(i) : m.target;
          z.target = K || "_blank", z.rel = m.rel || "noopener noreferrer";
        } else if (m.target) {
          const K = typeof m.target == "function" ? m.target(i) : m.target;
          z.target = K;
        }
        m.rel && (z.rel = m.rel);
      }
      return m.attrs && Object.assign(z, m.attrs), z;
    }, P = ee(() => i.menuItems.map((m) => {
      const z = { ...m };
      return typeof m.href == "function" && (z.href = m.href(i)), typeof m.icon == "function" && (z.icon = m.icon(i)), typeof m.disabled == "function" && (z.disabled = m.disabled(i)), typeof m.label == "function" && (z.label = m.label(i)), typeof m.variant == "function" && (z.variant = m.variant(i)), typeof m.active == "function" && (z.active = m.active(i)), typeof m.target == "function" && (z.target = m.target(i)), typeof m.show == "function" && (z.show = m.show(i)), z;
    })), $ = (m) => {
      m.stopPropagation(), m.preventDefault(), !u.value && o();
    }, Y = (m, z) => {
      if (z.stopPropagation(), m.disabled && !m.href) {
        z.preventDefault();
        return;
      }
      if (typeof m.action == "function" && m.action(m) === !1 && m.href) {
        z.preventDefault();
        return;
      }
      s("action", {
        id: m.id,
        item: m
      }), m.href && i.closeOnLinkClick ? a() : m.href || a();
    }, M = (m) => {
      const z = [];
      if (m.variant) {
        const K = typeof m.variant == "function" ? m.variant(i) : m.variant;
        z.push(`variant-${K}`);
      }
      if ((typeof m.disabled == "function" ? m.disabled(i) : m.disabled) && !m.href && z.push("disabled"), B(m) && z.push("active"), m.href && z.push("menu-link"), A(m) && z.push("external-link"), m.class) {
        const K = typeof m.class == "function" ? m.class(i) : m.class;
        z.push(K);
      }
      return z.join(" ");
    }, le = (m) => {
      const z = m.target;
      n.value && r.value && l.value && !r.value.contains(z) && !l.value.contains(z) && a();
    }, q = (m) => {
      m.key === "Escape" && n.value && a();
    };
    return Zt(() => {
      document.addEventListener("click", le), document.addEventListener("keydown", q);
    }), ps(() => {
      document.removeEventListener("click", le), document.removeEventListener("keydown", q);
    }), (m, z) => (S(), F("div", gg, [
      D("div", {
        ref_key: "trigger",
        ref: r,
        onClick: $,
        class: Ee(["actions-btn", { active: T(n), disabled: u.value }])
      }, [
        h.value ? (S(), Le(T(Gs), {
          key: 0,
          icon: R.value,
          class: "icon"
        }, null, 8, ["icon"])) : ie("", !0),
        f.value ? (S(), F("span", {
          key: 1,
          class: "label",
          textContent: ne(c.value)
        }, null, 8, mg)) : ie("", !0)
      ], 2),
      (S(), Le(la, { to: "body" }, [
        T(n) && !u.value ? (S(), F("div", {
          key: 0,
          ref_key: "floating",
          ref: l,
          style: at(T(g)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: z[0] || (z[0] = _o(() => {
          }, ["stop"]))
        }, [
          (S(!0), F(Me, null, Ye(P.value, (Q, K) => (S(), F(Me, { key: K }, [
            Q.type === "divider" ? (S(), F("div", yg)) : Q.type === "group" ? (S(), F("div", bg, ne(Q.label), 1)) : Q.show !== !1 ? (S(), Le(Hl(x(Q)), Ii({
              key: 2,
              ref_for: !0
            }, E(Q), {
              onClick: (w) => Y(Q, w),
              id: Q.id,
              class: ["menu-item", M(Q)],
              disabled: Q.disabled && !Q.href
            }), {
              default: Ti(() => [
                Q.icon || B(Q) ? (S(), Le(T(Gs), {
                  key: 0,
                  icon: B(Q) ? ["fass", "check"] : I(Q.icon)
                }, null, 8, ["icon"])) : ie("", !0),
                D("span", null, ne(Q.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : ie("", !0)
          ], 64))), 128))
        ], 4)) : ie("", !0),
        T(n) && !u.value ? (S(), F("div", {
          key: 1,
          class: "backdrop",
          onClick: z[1] || (z[1] = //@ts-ignore
          (...Q) => T(a) && T(a)(...Q))
        })) : ie("", !0)
      ]))
    ]));
  }
}), Oo = (t, e, i) => {
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
function wg({
  props: t,
  emit: e,
  isMounted: i
}) {
  const s = oe({
    isTyping: !1,
    isMouseDown: !1,
    isComposing: !1,
    lastValidValue: String(t.value ?? "")
  }), n = (r, l = !1) => {
    if (r == null || r === "") {
      const c = t.required && !t.disableRequiredValidation;
      return t.type === "string" ? c ? { value: null, valid: !1, message: "field_required" } : { value: r === null ? null : "", valid: !0 } : Nu(r, "decimal", c);
    }
    const u = String(r);
    switch (t.type) {
      case "string":
        return { value: u, valid: !0 };
      case "unitDependent":
        if (l)
          return Oo(u, t.type, t.numberFormat);
        try {
          const c = X({
            v: r,
            nf: t.numberFormat,
            dp: t.decimalPlaces,
            fr: t.fractionRoundTo
          });
          if (typeof c == "number") {
            let f = c, h = !0, g;
            return typeof t.min == "number" && f < t.min && (f = t.min, h = !1, g = "below_min"), typeof t.max == "number" && f > t.max && (f = t.max, h = !1, g = "above_max"), { value: f, valid: h, message: g };
          }
          return { value: c, valid: !0 };
        } catch (c) {
          return console.warn("Error converting value:", c), {
            value: null,
            valid: !1,
            message: "invalid_number"
          };
        }
      case "integer":
      case "float":
        if (l)
          return Oo(u, t.type);
        try {
          const f = X({
            v: r,
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
          let g = !0, I;
          return typeof t.min == "number" && h < t.min && (h = t.min, g = !1, I = "below_min"), typeof t.max == "number" && h > t.max && (h = t.max, g = !1, I = "above_max"), { value: h, valid: g, message: I };
        } catch {
          return {
            value: null,
            valid: !1,
            message: "invalid_number"
          };
        }
      default:
        return { value: r, valid: !0 };
    }
  }, a = (r, l = !1) => l && t.type === "unitDependent" && t.numberFormat === "fraction" ? !1 : l && (t.type === "integer" || t.type === "float" || t.type === "unitDependent" && t.numberFormat === "decimal") ? typeof r.value == "number" && r.valid : r.valid ? !0 : r.message === "zero_not_allowed" ? !1 : r.message === "below_min" || r.message === "above_max" || r.message === "errors.validation.field.required" && !t.disableRequiredValidation;
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
      handleInput: (r) => {
        if (!i.value) return;
        const l = r.target;
        if (s.value.isMouseDown) {
          const c = n(l.value, !1);
          a(c, !1) && (e("update:value", c.value), e("validation", c, t.id)), s.value.isMouseDown = !1;
          return;
        }
        s.value.isTyping = !0;
        const u = n(l.value, !0);
        e("validation", u, t.id), e("input", l.value), a(u, !0) && e("update:value", u.value);
      },
      handleBlur: (r) => {
        if (!i.value) return;
        s.value.isTyping = !1;
        const l = r.target, u = n(l.value, !1);
        e("validation", u, t.id), a(u) && (e("update:value", u.value), s.value.lastValidValue = String(u.value ?? "")), e("blur", r);
      },
      handleFocus: (r) => {
        i.value && (s.value.isTyping = !0, e("focus", r));
      },
      handleKeydown: (r) => {
        if (i.value && !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(r.key)) {
          if (!["Backspace", "Delete", "Tab", "Enter", "Escape"].includes(r.key))
            if (t.type === "unitDependent" && t.numberFormat === "fraction") {
              const l = r.target, u = l.value, c = l.selectionStart || 0, f = u.substring(0, c);
              if (r.key === "/" && u.includes("/")) {
                r.preventDefault();
                return;
              }
              if (r.key === " " && /\s$/.test(f)) {
                r.preventDefault();
                return;
              }
              /^[-0-9\s/]$/.test(r.key) || r.preventDefault();
            } else (t.type === "integer" || t.type === "float") && ((t.type === "integer" ? /^[-0-9]$/.test(r.key) : /^[-0-9.]$/.test(r.key)) || r.preventDefault());
          if (r.key === "Enter") {
            s.value.isTyping = !1;
            const l = r.target, u = n(l.value, !1);
            e("validation", u, t.id), a(u) && (e("update:value", u.value), s.value.lastValidValue = String(u.value ?? "")), e("enter", u);
          }
          r.key === "Escape" && (s.value.isTyping = !1, e("escape"));
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
      handleCompositionEnd: (r) => {
        s.value.isComposing = !1, s.value.isTyping = !1;
        const l = r.target, u = n(l.value, !1);
        e("validation", u, t.id), a(u) && (e("update:value", u.value), s.value.lastValidValue = String(u.value ?? ""));
      },
      handlePaste: (r) => {
        if (!i.value) return;
        const l = r.clipboardData?.getData("text")?.trim() || "";
        if (t.type === "unitDependent" && t.numberFormat === "fraction") {
          const u = l.replace(/[""'']/g, "").replace(/\s+/g, " ");
          if (!ya(u)) {
            r.preventDefault(), e("validation", {
              value: u,
              valid: !1,
              message: `Pasted text "${l}" is not a valid fraction format`
            }, t.id);
            return;
          }
          if (u !== l) {
            r.preventDefault();
            const c = r.target;
            c.value = u;
            const f = n(u, !0);
            e("validation", f, t.id), e("input", u);
          }
        }
        e("paste", r);
      }
    },
    processValue: n
  };
}
function Sg({
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
      let o = a;
      return t.numberFormat && (t.numberFormat === "fraction" ? o = String(a) : o = Number(a)), t.options.some((l) => l.value === o) ? {
        value: o,
        valid: !0
      } : {
        value: o,
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
      const o = a.target;
      if (t.multiEdit && o.value === " ") {
        e("update:value", null);
        return;
      }
      const r = n(o.value);
      e("validation", r, t.id), r.valid && e("update:value", r.value);
    }
  };
}
function xg({
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
const kg = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Ig = /* @__PURE__ */ ze({
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
    const i = t, s = e, n = oe(!0), a = oe(null), o = ee(() => i.value === i.trueValue), {
      handleCheckboxChange: r,
      handleFocus: l,
      handleBlur: u
    } = xg({
      props: i,
      emit: s,
      isMounted: n
    });
    return (c, f) => (S(), F("input", {
      id: i.id,
      ref_key: "inputRef",
      ref: a,
      type: "checkbox",
      checked: o.value,
      disabled: i.readonly || i.disabled,
      required: i.required,
      "aria-label": i.ariaLabel,
      "aria-invalid": !!i.issue,
      "aria-describedby": i.errorId,
      onChange: f[0] || (f[0] = //@ts-ignore
      (...h) => T(r) && T(r)(...h)),
      onFocus: f[1] || (f[1] = //@ts-ignore
      (...h) => T(l) && T(l)(...h)),
      onBlur: f[2] || (f[2] = //@ts-ignore
      (...h) => T(u) && T(u)(...h))
    }, null, 40, kg));
  }
}), Pg = ["for"], Ds = /* @__PURE__ */ ze({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(t) {
    return (e, i) => (S(), F("label", {
      for: t.id,
      class: "input-label"
    }, ne(t.label), 9, Pg));
  }
}), Cg = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Tg = ["disabled", "selected"], Ag = {
  key: 0,
  value: " "
}, Og = ["hidden", "value", "disabled"], Lg = /* @__PURE__ */ ze({
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
    const i = t, s = e, n = oe(!0), a = oe(null), o = ee(() => i.options.map((l) => ({
      value: l.value,
      label: l.label?.toUpperCase() ?? l.value?.toString()?.toUpperCase(),
      hidden: l.hidden ?? !1,
      disabled: l.disabled ?? !1
    }))), {
      handleSelectChange: r
    } = Sg({
      props: i,
      emit: s,
      isMounted: n
    });
    return (l, u) => (S(), F("select", Ii(l.$attrs, {
      id: i.id,
      ref_key: "inputRef",
      ref: a,
      value: i.value,
      disabled: i.readonly || i.disabled,
      required: i.required,
      "aria-label": i.ariaLabel,
      "aria-invalid": !!i.issue,
      "aria-describedby": i.errorId,
      onChange: u[0] || (u[0] = //@ts-ignore
      (...c) => T(r) && T(r)(...c))
    }), [
      D("option", {
        value: "",
        disabled: i.selectFirstOptionDisabled,
        selected: !i.value
      }, ne(i.text?.select?.toUpperCase() ?? "SELECT"), 9, Tg),
      i.multiEdit ? (S(), F("option", Ag, ne(i.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : ie("", !0),
      (S(!0), F(Me, null, Ye(o.value, (c) => (S(), F("option", {
        key: c.value,
        hidden: c.hidden,
        value: c.value,
        disabled: c.disabled
      }, ne(c.label), 9, Og))), 128))
    ], 16, Cg));
  }
}), Fg = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "aria-label", "aria-invalid", "aria-describedby"], ll = /* @__PURE__ */ ze({
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
      handleInput: o,
      handleMouseDown: r,
      handleMouseUp: l,
      handleFocus: u,
      handleBlur: c,
      handleKeydown: f,
      handleCompositionStart: h,
      handleCompositionEnd: g,
      handlePaste: I
    } = wg({
      props: i,
      emit: s,
      isMounted: n
    }), R = (B) => {
      const A = B.getBoundingClientRect(), x = window.getComputedStyle(B);
      return A.width > 0 && A.height > 0 && x.display !== "none" && x.visibility !== "hidden";
    };
    return Zt(() => {
      (Te(i.default) && i.value === void 0 || i.value === null) && s("update:value", i.default), i.focus && a.value && R(a.value) && gt(() => a.value.focus());
    }), ps(() => {
      n.value = !1;
    }), (B, A) => (S(), F("input", Ii(B.$attrs, {
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
      (...x) => T(o) && T(o)(...x)),
      onFocus: A[1] || (A[1] = //@ts-ignore
      (...x) => T(u) && T(u)(...x)),
      onBlur: A[2] || (A[2] = //@ts-ignore
      (...x) => T(c) && T(c)(...x)),
      onKeydown: A[3] || (A[3] = //@ts-ignore
      (...x) => T(f) && T(f)(...x)),
      onCompositionstart: A[4] || (A[4] = //@ts-ignore
      (...x) => T(h) && T(h)(...x)),
      onCompositionend: A[5] || (A[5] = //@ts-ignore
      (...x) => T(g) && T(g)(...x)),
      onPaste: A[6] || (A[6] = //@ts-ignore
      (...x) => T(I) && T(I)(...x)),
      onMousedown: A[7] || (A[7] = //@ts-ignore
      (...x) => T(r) && T(r)(...x)),
      onMouseup: A[8] || (A[8] = //@ts-ignore
      (...x) => T(l) && T(l)(...x))
    }), null, 16, Fg));
  }
}), $g = ["data-field-id"], Dg = {
  key: 0,
  class: "input-label-group"
}, Eg = ["disabled", "selected"], Rg = {
  key: 0,
  value: " "
}, _g = ["hidden", "value", "disabled"], Ci = /* @__PURE__ */ ze({
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
    const i = e, s = t, n = oe(null), a = oe(null), o = oe(!0), r = oe(s.numberFormat), l = ee(() => s.custom ? "custom-" + s.id : s.id), u = ee(() => `${l.value}-error`), c = ee(() => s.label || s.placeholder), f = ee(() => m(s.type, s.numberFormat)), h = ee(() => z(s.type, s.numberFormat)), g = ee(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), I = ee(() => {
      let w = s.value;
      if (s.type !== "unitDependent" || !w) return w;
      try {
        return X({ v: w, nf: s.numberFormat });
      } catch {
        return s.numberFormat === "decimal" ? 0 : "0";
      }
    }), R = ee(() => s.options.map((w) => ({
      value: w.value,
      label: w.label || w.value?.toString(),
      hidden: w.hidden || !1,
      disabled: w.disabled || !1
    }))), B = ee(() => R.value.map((w) => {
      const V = w.label ? U(w.label) : w.value?.toString();
      return {
        ...w,
        // Translate the label key first, then uppercase the translated result
        label: V?.toUpperCase() || w.value?.toString().toUpperCase()
      };
    })), A = ee(() => ({
      input: !0,
      issue: s.issue || !o.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), x = ee(() => ({
      id: l.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": c.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? u.value : void 0
    })), E = ee(() => ({
      ...x.value,
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
    })), P = ee(() => ({
      ...x.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), $ = ee(() => ({
      ...x.value,
      options: B.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      numberFormat: s.numberFormat,
      text: s.text,
      output: s.output
    })), Y = ee(() => (s.text?.select || "SELECT").toUpperCase()), M = ee(() => (s.text?.delete || "DELETE").toUpperCase()), le = (w) => {
      a.value = w;
    }, q = (w) => s.label && s.enableLabel && s.labelPosition === w, m = (w, V) => {
      switch (w) {
        case "integer":
        case "float":
          return "number";
        case "unitDependent":
          return V === "fraction" ? "text" : "number";
        case "string":
        default:
          return "text";
      }
    }, z = (w, V) => {
      if (w === "unitDependent")
        return V === "fraction" ? "text" : "decimal";
      switch (w) {
        case "integer":
          return "numeric";
        case "float":
          return "decimal";
        case "string":
          return "text";
        default:
          return "text";
      }
    }, Q = (w) => {
      i("update:value", w);
    }, K = (w, V) => {
      w.valid === void 0 || w.valid === !0 ? (o.value = !0, i("validation", n.value, w)) : w.valid === !1 && w.message && (o.value = !1, console.warn(`Field validation error for field ${V} - ${w.message}`), i("validation", n.value, w));
    };
    return We(() => s.numberFormat, (w, V) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && w !== V && s.value !== null && s.value !== void 0 && s.value !== "")
          try {
            const H = X({ v: s.value, nf: w });
            i("update:value", H);
          } catch {
            i("update:value", w === "decimal" ? 0 : "0");
          }
        r.value = w;
      }
    }), (w, V) => (S(), F("div", {
      ref_key: "fieldRef",
      ref: n,
      class: Ee(["input-wrapper", A.value]),
      "data-field-id": l.value
    }, [
      t.type === "checkbox" ? (S(), F("div", Dg, [
        q("first") ? (S(), Le(Ds, {
          key: 0,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : ie("", !0),
        t.type === "checkbox" ? (S(), Le(Ig, Ii({
          key: 1,
          ref: le,
          type: "checkbox"
        }, P.value, {
          value: t.value,
          "onUpdate:value": V[0] || (V[0] = (H) => i("update:value", H))
        }), null, 16, ["value"])) : ie("", !0),
        q("last") ? (S(), Le(Ds, {
          key: 2,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : ie("", !0)
      ])) : (S(), F(Me, { key: 1 }, [
        q("first") ? (S(), Le(Ds, {
          key: 0,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : ie("", !0),
        g.value ? (S(), Le(ll, Ii({
          key: 1,
          ref: le
        }, E.value, {
          "input-type": f.value,
          "input-mode": h.value,
          value: I.value,
          "disable-required-validation": t.disableRequiredValidation,
          onValidation: K,
          "onUpdate:value": Q
        }), null, 16, ["input-type", "input-mode", "value", "disable-required-validation"])) : t.type === "select" ? (S(), Le(Lg, Ii({
          key: 2,
          ref: le
        }, $.value, {
          "onUpdate:value": V[1] || (V[1] = (H) => i("update:value", H))
        }), {
          default: Ti(() => [
            D("option", {
              value: "",
              disabled: t.selectFirstOptionDisabled,
              selected: !t.value
            }, ne(Y.value), 9, Eg),
            t.multiEdit ? (S(), F("option", Rg, ne(M.value), 1)) : ie("", !0),
            (S(!0), F(Me, null, Ye(B.value, (H) => (S(), F("option", {
              key: H.value,
              hidden: H.hidden,
              value: H.value,
              disabled: H.disabled
            }, ne(H.label), 9, _g))), 128))
          ]),
          _: 1
        }, 16)) : ie("", !0),
        q("last") ? (S(), Le(Ds, {
          key: 3,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : ie("", !0)
      ], 64)),
      qs(w.$slots, "default")
    ], 10, $g));
  }
}), Mg = {
  key: 0,
  class: "action-bar"
}, jg = { class: "add-custom" }, Bg = ["disabled"], Ng = ["disabled", "title", "onClick"], Vg = {
  key: 1,
  class: "price"
}, Gg = /* @__PURE__ */ ze({
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
      supportsFaces: o,
      supportsSides: r,
      canDelete: l,
      getLocationLabel: u,
      getInputType: c,
      getInputConfigForLocation: f,
      getSelectOptions: h,
      getPriceDisplay: g,
      shouldShowDeleteButton: I,
      getLocationGroup: R,
      isLocationVisible: B,
      handleInputChange: A,
      handleDelete: x
    } = wc({
      shape: ui(i, "shape"),
      extraType: i.extraType,
      allOptions: i.allOptions,
      labels: i.labels,
      userFriendlyFieldMap: i.userFriendlyFieldMap,
      allowCustomNames: i.allowCustomNames,
      customNames: ui(i, "customNames"),
      enablePricing: i.enablePricing,
      pricing: i.pricing,
      getAvailablePricingOptions: i.getAvailablePricingOptions,
      getPrice: i.getPrice,
      formatPrice: i.formatPrice,
      findExtrasPrice: i.findExtrasPrice,
      locations: ui(i, "locations"),
      locationGroups: ui(i, "locationGroups")
    }), {
      newCustomName: E,
      canAddCustomName: P,
      isActionMenuDisabled: $,
      customNameActions: Y,
      handleAddCustomName: M,
      handleCustomNameAction: le
    } = Sc({
      extraType: i.extraType,
      customNames: ui(i, "customNames"),
      usedNames: ui(i, "usedNames"),
      allowCustomNames: i.allowCustomNames,
      getSelectOptions: h,
      onCustomNameAdded: (W) => s("custom-name-added", i.extraType, W),
      onCustomNameDeleted: (W) => s("custom-name-deleted", i.extraType, W)
    }), {
      renderLocations: q,
      gridStyle: m,
      getInputId: z,
      getDeleteConfig: Q
    } = xc({
      extraType: i.extraType,
      allOptions: i.allOptions,
      labels: i.labels,
      shapeIndex: i.shapeIndex || 0,
      enablePricing: i.enablePricing,
      mode: n,
      shouldShowAll: a,
      getInputType: c,
      getInputConfig: (W, de) => f(W, de),
      getAllInputConfig: (W) => f("all", W),
      getInputConfigForLocation: f,
      canDelete: l,
      getLocationLabel: u,
      shouldShowDeleteButton: I,
      locations: ui(i, "locations"),
      locationGroups: ui(i, "locationGroups")
    }), K = oe(!1), w = ee(() => (W) => {
      const de = R(W);
      return de === "all" || de === "faces" || de === "sides";
    }), V = ee(() => (W) => sa(i.extraType).includes(W) ? co(W) === "face" : !1), H = ee(() => (W) => sa(i.extraType).includes(W) ? co(W) === "side" : !1), G = ee(() => (W) => i.shape.issues?.some((de) => de.category?.includes("extras") && de.field?.some((Se) => Se[0] === "extras" && Se[1] === i.extraType && Se[2] === W)) ?? !1);
    return Zt(() => {
      const de = i.shape.extras?.[i.extraType];
      if (!de || typeof de != "object") {
        K.value = !0, console.error(`Missing or invalid ${i.extraType} in shape`);
        return;
      }
      if (o.value && !("faces" in de)) {
        K.value = !0, console.error(`Missing faces property in ${i.extraType}`);
        return;
      }
      if (r.value && !("sides" in de)) {
        K.value = !0, console.error(`Missing sides property in ${i.extraType}`);
        return;
      }
    }), (W, de) => {
      const Se = vi("FontAwesomeIcon");
      return K.value ? ie("", !0) : (S(), F("div", {
        key: 0,
        class: Ee(["extras group", [t.extraType]]),
        style: at({ "grid-column-end": "span " + t.partColumns })
      }, [
        t.allowCustomNames ? (S(), F("div", Mg, [
          D("div", jg, [
            Ge(ll, {
              id: `${t.extraType}-custom-input-${t.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: T(E),
              placeholder: `Add ${t.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": de[0] || (de[0] = (ke) => E.value = ke || ""),
              onKeydown: Ul(T(M), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            D("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !T(P),
              onClick: de[1] || (de[1] = //@ts-ignore
              (...ke) => T(M) && T(M)(...ke))
            }, " Add ", 8, Bg)
          ]),
          Ge(vg, {
            "menu-items": T(Y),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: T($),
            onAction: T(le)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : ie("", !0),
        D("div", {
          class: "inputs grid-layout",
          style: at({ "grid-template-columns": T(m) })
        }, [
          (S(!0), F(Me, null, Ye(T(q), (ke) => (S(), F(Me, { key: ke }, [
            T(B)(ke) ? (S(), F(Me, { key: 0 }, [
              D("div", {
                class: Ee(["label", {
                  "group-label": w.value(ke),
                  "face-label": V.value(ke),
                  "side-label": H.value(ke),
                  "has-validation-issue": G.value(ke)
                }])
              }, ne(T(u)(ke)), 3),
              (S(!0), F(Me, null, Ye(t.allOptions, (Ce, _e) => (S(), F("div", {
                key: `${ke}-${_e}`,
                class: "input-cell"
              }, [
                Ge(Ci, Ii({
                  id: T(z)(ke, _e),
                  "data-field": `${t.extraType}-${ke}`,
                  "data-index": t.shapeIndex,
                  "data-option-index": _e
                }, { ref_for: !0 }, T(f)(ke, _e), {
                  "onUpdate:value": (se) => T(A)(ke, _e, se)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"])
              ]))), 128)),
              T(Q)(ke).show ? (S(), F("button", {
                key: 0,
                type: "button",
                class: "c-btn c-btn--delete",
                disabled: !T(Q)(ke).enabled,
                title: T(Q)(ke).ariaLabel,
                onClick: (Ce) => T(x)(ke)
              }, [
                Ge(Se, { icon: ["fass", "trash"] })
              ], 8, Ng)) : ie("", !0),
              t.enablePricing ? (S(), F("div", Vg, ne(T(g)(ke)), 1)) : ie("", !0)
            ], 64)) : ie("", !0)
          ], 64))), 128))
        ], 4)
      ], 6));
    };
  }
}), Ns = /* @__PURE__ */ Ot(Gg, [["__scopeId", "data-v-8e18cea6"]]), qg = {
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
}, zg = { id: "spinner" }, Wg = ["width", "height"], Hg = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function Ug(t, e, i, s, n, a) {
  return S(), F("div", zg, [
    i.complete ? ie("", !0) : (S(), F("svg", {
      key: 0,
      class: "loading",
      style: at({ width: i.size + "px", height: i.size + "px" }),
      width: i.size,
      height: i.size,
      viewBox: "0 0 300 300"
    }, [...e[0] || (e[0] = [
      Mo('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ])], 12, Wg)),
    i.complete ? (S(), F("svg", {
      key: 1,
      class: "complete",
      style: at({ width: i.size + "px", height: i.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[1] || (e[1] = [
      D("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ])], 4)) : ie("", !0),
    i.showNumber ? (S(), F("div", Hg, ne(i.number), 1)) : ie("", !0)
  ]);
}
const Lo = /* @__PURE__ */ Ot(qg, [["render", Ug]]);
j({
  // Context - using z.any() for complex external types
  job: ye().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: p().nullable().default(null).describe("Socket.io connection ID"),
  user: ye().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: ye().describe("Configuration object"),
  // Type: Config
  api: _().nullable().default(null).describe("API mode flag"),
  app: _().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: Oe("Saw").describe("Saw configuration"),
  stockList: Ne("Stock").default([]).describe("List of stock materials"),
  shapeList: Es(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: Ne("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: Ne("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: Ne("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: Es(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: Es(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: an,
  // Results storage
  cutList: Ne("Cut").default([]).describe("List of cuts to make"),
  segmentList: Ne("Segment").default([]).describe("List of segments"),
  offcuts: Ne("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: Ne("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: _().default(!1).describe("Use inventory system"),
  successMetric: p().default(Wd.successMetric).describe("Metric for optimization success"),
  enableEvo: _().default(!0).describe("Enable evolutionary algorithm"),
  weighting: be(p(), ye()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: ye().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: ye().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: j({
    placement: d().default(0),
    group: d().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: _().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: _().default(!1).describe("Run guillotine second pass"),
  runningEvo: _().default(!1).describe("Currently running evolution"),
  evolutionVisData: ae(be(p(), pc())).default([]).describe("Evolution visualization data"),
  final: _().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: _().default(!1).describe("Has minimum spacing requirement"),
  hasShapeLevelMinSpacing: _().default(!1).describe("Has shape-level minimum spacing")
});
const Yg = Ie(["decimal", "fraction"]), Kg = j({
  job: ye().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Allow additional properties like __entityType and autoId
  inputSaw: Pi,
  inputShapes: ae(yi),
  inputStock: ae(Yt),
  inputUserGroups: ae(ka).optional(),
  // Number format for conversion
  numberFormat: Yg.optional(),
  // Algorithm configuration
  enableEvo: _().default(!0),
  weighting: ye().optional(),
  successMetric: p().optional(),
  useInventory: _().default(!1),
  // Context
  socketId: p().optional(),
  user: ye().optional(),
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
        sides: be(p(), ae(p())).optional()
      }).optional()
    }).optional(),
    finish: j({
      options: j({
        faces: be(p(), ae(p())).optional()
      }).optional()
    }).optional(),
    planing: j({
      options: j({
        sides: be(p(), ae(p())).optional(),
        faces: be(p(), ae(p())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // API specific
  config: ye().optional(),
  v: d().optional(),
  // API version
  webhook: p().optional(),
  //source
  sourceVersion: p().nullish(),
  source: p().optional()
});
j({
  job: ye().optional(),
  // Type: Job from BullMQ
  saw: ye(),
  // Runtime Saw instance
  shapeList: ae(ye()),
  // Runtime Shape instances
  stockList: ae(ye()),
  // Runtime Stock instances
  userGroups: ae(ye()).optional(),
  // Runtime Group instances
  enableEvo: _(),
  weighting: ye().optional(),
  successMetric: p().optional(),
  useInventory: _(),
  socketId: p().optional(),
  user: ye().optional(),
  widget: _().optional(),
  api: _().optional(),
  app: _().optional(),
  domain: p().optional(),
  config: ye().optional(),
  v: d().optional(),
  webhook: p().optional()
});
const { addNotice: Ri } = ua();
let jn = null;
function Zg() {
  return jn || (jn = Jr()), jn;
}
function Fo(t) {
  return t.filter((e) => e?.l || e?.w);
}
async function Jg(t) {
  const e = t.t, i = [];
  try {
    const { inputs: s, validateInputShapes: n, validateInputStock: a } = Zg(), o = t.inputShapes ?? s.inputShapes.value, r = t.inputStock ?? s.inputStock.value, l = t.inputUserGroups ?? s.inputUserGroups?.value ?? [], u = Fo(o), c = Fo(r);
    if (!t.isAdmin && !t.shared && t.maxShapes !== 1 / 0) {
      const B = u.reduce((x, E) => x + (E.q || 1), 0), A = c.reduce((x, E) => x + (E.q || 1), 0);
      if (B > t.maxShapes || A > t.maxStock)
        return Ri({
          type: "error",
          message: e("errors.validation.above_max_parts")
        }), t.onLimit?.(), { valid: !1, issues: i };
    }
    if (!u.length)
      return Ri({
        type: "error",
        message: e("errors.validation.no_parts_list")
      }), { valid: !1, issues: i };
    if (!t.useInventory && !c.length)
      return Ri({
        type: "error",
        message: e("errors.validation.no_stock")
      }), { valid: !1, issues: i };
    let f;
    if (t.useInventory && t.selectedSaw)
      f = t.selectedSaw;
    else if (t.inputSaw instanceof ti) {
      const B = t.inputSaw.validate();
      i.push(...B), f = t.inputSaw.toData();
    } else {
      f = t.inputSaw;
      const B = new $r(f);
      i.push(...B.issues);
    }
    const h = n({
      saw: f,
      partTrim: X({ v: t.partTrim }),
      useInventory: t.useInventory,
      inputShapesOverride: u
    });
    if (i.push(...h), t.useInventory) {
      if (t.materialStore)
        for (const B of u)
          B.material || i.push(new ce({
            item: B,
            category: ["part"],
            message: "errors.validation.business.no_material"
          }));
    } else {
      const B = a(f);
      i.push(...B);
    }
    if (l.length > 0) {
      l.forEach((A) => A.populateParentID(u));
      const B = Ch(l, u);
      i.push(...B);
    }
    await Xg(u, t, i);
    const g = gr(i);
    if (g.length > 0) {
      const B = {
        saw: g.filter((A) => A.category?.includes("saw")),
        stock: g.filter((A) => A.category?.includes("stock")),
        part: g.filter((A) => A.category?.includes("part") && !A.category?.includes("extras")),
        extras: g.filter((A) => A.category?.includes("extras")),
        group: g.filter((A) => A.category?.includes("group"))
      };
      for (const [A, x] of Object.entries(B))
        if (x.length > 0) {
          Ri({
            type: "error",
            message: e("errors.validation.inputs_issue", { 0: A }),
            additional: x.map((E) => e(E.message))
          });
          break;
        }
      return { valid: !1, issues: i };
    }
    const I = {
      inputSaw: f,
      inputShapes: u.map((B) => B.toData()),
      inputStock: c.map((B) => B.toData()),
      inputGroups: l.map((B) => B.toData()),
      enableEvo: !0,
      useInventory: t.useInventory || !1
    }, R = Kg.safeParse(I);
    return R.success ? {
      valid: !0,
      issues: i,
      sawData: f
    } : (console.error("[Validation] Zod validation failed:", R.error.issues), Ri({
      type: "error",
      message: e("errors.validation.invalid_data_structure"),
      additional: R.error.issues.map((B) => `${B.path.join(".")}: ${B.message}`)
    }), { valid: !1, issues: i });
  } catch (s) {
    return console.error("[Validation] error:", s), Ri({
      type: "error",
      message: e("errors.general.unexpected"),
      additional: [s?.message ?? ""]
    }), { valid: !1, issues: i };
  }
}
async function Xg(t, e, i) {
  if (!e.findExtrasPrice)
    return;
  const s = [
    { type: "banding", pricing: e.bandingPricing },
    { type: "finish", pricing: e.finishPricing },
    { type: "planing", pricing: e.planingPricing }
  ];
  for (const n of t)
    for (const { type: a, pricing: o } of s) {
      if (e.extrasValidationRules && Xe.hasExtras(n, a)) {
        const u = sp(n, a, e.extrasValidationRules);
        u.valid || u.violations.forEach((c) => {
          const f = np(a, c, u.message);
          i.push(new ce({
            item: n,
            category: ["part", "extras"],
            message: f,
            field: [["extras", a]],
            shouldTranslate: !1
          }));
        });
      }
      if (!o || !Object.keys(o).length)
        continue;
      const r = ip(n, a, o, e.findExtrasPrice);
      r.valid || r.incompleteLocations.forEach((l) => {
        i.push(new ce({
          item: n,
          category: ["part", "extras"],
          message: "errors.extras.selection_incomplete",
          params: {
            extraType: `extras.${a}`,
            // Translation key for extra type (banding, finish, planing)
            location: Qe(l, { returnKey: !0 })
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
  locations: ae(p().min(1)).min(1),
  // Optional price override for this group
  // When set, this price will be used instead of calculating from individual locations
  price: d().optional(),
  // Hide individual location inputs when this group is enabled
  // When true, only shows the group control, hiding the individual face/side inputs
  hideIndividualLocations: _().optional().default(!1)
}), Qg = j({
  banding: ae(Vs).optional(),
  finish: ae(Vs).optional(),
  planing: ae(Vs).optional()
}).optional(), Bn = j({
  min: d().min(0).optional(),
  max: d().min(0).optional()
}).optional(), Nn = j({
  // Shape dimension constraints
  longSide: Bn,
  shortSide: Bn,
  t: Bn,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: p().optional(),
  // Custom validation message (optional)
  message: p().optional()
}), em = j({
  banding: Nn.optional(),
  finish: Nn.optional(),
  planing: Nn.optional()
}).optional(), tm = Ie(["decimal", "fraction"]), im = Ie(wr), $o = me([
  ve(0),
  ve(1),
  ve(2)
]).catch(0), sm = j({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: p().optional(),
  partB: p().optional(),
  partSelected: p().optional(),
  stock: p().optional(),
  text: p().optional(),
  // Checkout-specific colors
  button: p(),
  buttonText: p()
}), nm = j({
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
}), am = j({
  // Localization
  locale: p().default("en-US"),
  currency: p().default("USD"),
  apiVersion: d().min(2).default(3),
  // Number formatting
  numberFormat: tm.default("decimal"),
  decimalPlaces: d().min(0).max(10).default(2),
  fractionRoundTo: d().default(0),
  // Stock configuration
  stockSelection: im.optional(),
  stockGrain: Hi.optional(),
  // Part configuration
  minSpacing: xr.optional(),
  maxParts: d().min(0).default(0),
  orientationModel: $o.default(0),
  resultOrientationModel: $o.default(0),
  minDimension: d().min(0).default(0),
  partTrim: d().min(0).default(0),
  // UI configuration
  debug: _().default(!1),
  enable: nm.optional(),
  colors: sm.optional(),
  // Custom fields
  customFields: ae(ye()).optional(),
  fieldOrder: ae(p()).optional(),
  // Extras location filtering
  bandingLocations: ae(Dn).optional(),
  finishLocations: ae(Dn).optional(),
  planingLocations: ae(Dn).optional(),
  // Extras location groups
  extrasLocationGroups: Qg,
  // Extras validation rules
  extrasValidationRules: em
});
Ie([
  "full_stock",
  "part_area",
  "cut_length",
  "full_stock_plus_cut_length",
  "full_stock_plus_num_parts",
  "roll_length"
]);
const rs = be(
  p(),
  d().min(0)
).default({}), om = j({
  name: p().trim().min(1),
  thicknesses: ae(
    me([
      p().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      d()
    ])
  ).min(1)
}), Vn = j({
  labels: ae(p()),
  pricing: be(p(), d().min(0)).refine((t) => Object.keys(t).length > 0, {
    message: "Pricing must contain at least one value"
  }),
  options: ye().optional(),
  keys: ae(p()).optional(),
  // if not all the default keys should be set
  locations: ae(p()).optional(),
  // available locations for this extras type
  groups: ae(Vs).optional(),
  // custom location groups
  rules: ye().optional()
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
  errors: ae(p()),
  warnings: ae(p())
});
j({
  pricing: rs,
  labels: ae(p()),
  options: ae(ae(p())),
  // Simplified to string arrays only
  keys: ae(p()),
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
}), rm = j({
  l: d(),
  w: d(),
  t: d().nullable(),
  material: p().nullable(),
  orientationLock: me([
    ve(""),
    ve("l"),
    ve("w")
  ]).nullable(),
  q: d(),
  name: p().nullable(),
  rot: me([ve(0), ve(1)]).default(0),
  // V2 format: flat banding/finish (x1/x2/y1/y2 for banding, a/b for finish)
  banding: be(p(), me([p(), _()])).nullable().optional(),
  finish: be(p(), me([p(), _()])).nullable().optional(),
  planing: be(p(), me([p(), _()])).nullable().optional(),
  customData: be(p(), ye()).nullable().optional(),
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
  orientationLock: me([
    ve(""),
    ve("l"),
    ve("w")
  ]).nullable().optional(),
  // V2 format: flat banding/finish
  banding: be(p(), me([p(), _()])).nullable().optional(),
  finish: be(p(), me([p(), _()])).nullable().optional(),
  planing: be(p(), me([p(), _()])).nullable().optional(),
  customData: be(p(), ye()).nullable().optional()
});
j({
  jobId: d(),
  metadata: mn.optional(),
  parts: ae(rm),
  stock: ae(lm),
  offcuts: ae(cl),
  inputs: j({
    parts: ae(cm)
  })
});
const um = j({
  l: d(),
  w: d(),
  t: d().nullable(),
  material: p().nullable(),
  orientationLock: me([
    ve(""),
    ve("l"),
    ve("w")
  ]).nullable(),
  q: d(),
  name: p().nullable(),
  rot: me([ve(0), ve(1)]).default(0),
  // V3 format: nested extras structure
  extras: j({
    banding: j({
      sides: be(p(), me([p(), _()]))
    }).nullable().optional(),
    finish: j({
      faces: be(p(), me([p(), _()]))
    }).nullable().optional(),
    planing: j({
      sides: be(p(), me([p(), _()])).optional(),
      faces: be(p(), me([p(), _()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: be(p(), ye()).nullable().optional(),
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
  color: me([
    j({
      hex: p(),
      name: p()
    }),
    p()
  ]).nullable().optional(),
  weight: d().positive().nullable().optional(),
  imageUrl: p().nullable().optional(),
  tags: ae(p()).nullable().optional(),
  available: _().nullable().optional()
}), fm = j({
  id: p().optional(),
  name: p().optional(),
  l: d(),
  w: d(),
  t: d().nullable().optional(),
  material: p().optional(),
  q: d().optional(),
  orientationLock: me([
    ve(""),
    ve("l"),
    ve("w")
  ]).nullable().optional(),
  // V3 format: nested extras structure
  extras: j({
    banding: j({
      sides: be(p(), me([p(), _()]))
    }).nullable().optional(),
    finish: j({
      faces: be(p(), me([p(), _()]))
    }).nullable().optional(),
    planing: j({
      sides: be(p(), me([p(), _()])).optional(),
      faces: be(p(), me([p(), _()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: be(p(), ye()).nullable().optional()
});
j({
  jobId: d(),
  metadata: mn.optional(),
  parts: ae(um),
  stock: ae(dm),
  offcuts: ae(cl),
  inputs: j({
    parts: ae(fm)
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
  stockType: Ie([...Us]).optional(),
  bladeWidth: me([
    Sr,
    p()
  ]).optional(),
  cutType: un,
  cutPreference: dn,
  stackHeight: cn,
  guillotineOptions: fn
}).optional();
j({
  l: d().nullable(),
  w: d().nullable(),
  t: me([d(), p()]).nullable().optional(),
  material: p().nullable().optional(),
  orientationLock: me([
    ve("l"),
    ve("w"),
    ve("")
  ]).nullable().optional(),
  q: d().min(1).nullable().optional(),
  name: p().nullable().optional(),
  // Import existing schemas for extras
  banding: yr.nullable().optional(),
  finish: br.nullable().optional(),
  planing: Ir.nullable().optional(),
  // Custom data as record
  customData: be(p(), ye()).nullable().optional(),
  stockId: p().nullable().optional()
});
const pm = j({
  // Required fields
  stock: ae(Yt).default([]),
  options: am,
  // Optional fields
  type: p().optional(),
  // variable | simple
  materials: ae(om).optional(),
  banding: Vn.nullable().optional(),
  finish: Vn.nullable().optional(),
  planing: Vn.nullable().optional(),
  machining: ye().optional(),
  bandingPricing: rs.optional(),
  finishPricing: rs.optional(),
  planingPricing: rs.optional(),
  machiningPricing: rs.optional(),
  // colors field removed in version 6.1.0 - was deprecated and unused
  variations: ye().optional(),
  // NOTE: extrasValidationRules and extrasLocationGroups moved to optionsSchema
  // Part validation rules
  partRules: Ip.optional(),
  // Saw configuration
  saw: hm,
  // Stock filter (optional)
  // When enabled, the stock array is used as available filter options
  // and the actual stock list starts empty (built by user selections)
  stockFilter: j({
    enabled: _(),
    config: ye().optional()
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
    if (Te(e.a) || Te(e.b) || Te(e.c) || Te(e.d))
      i.x1 = Te(e.a) ? Gt(e.a) : !1, i.y1 = Te(e.b) ? Gt(e.b) : !1, i.x2 = Te(e.c) ? Gt(e.c) : !1, i.y2 = Te(e.d) ? Gt(e.d) : !1;
    else {
      const n = aa(e);
      i.x1 = Te(n.x1) ? Gt(n.x1) : !1, i.x2 = Te(n.x2) ? Gt(n.x2) : !1, i.y1 = Te(n.y1) ? Gt(n.y1) : !1, i.y2 = Te(n.y2) ? Gt(n.y2) : !1;
    }
    t.banding = i;
  }
  if (t.extras?.finish?.faces) {
    const e = t.extras.finish.faces, i = {};
    i.a = Te(e.a) ? Gt(e.a) : !1, i.b = Te(e.b) ? Gt(e.b) : !1, t.finish = i;
  }
  if (t.extras?.planing) {
    const e = t.extras.planing, i = {}, s = aa(e.sides || {});
    e.sides && (Te(s.x1) && (i.x1 = s.x1), Te(s.x2) && (i.x2 = s.x2), Te(s.y1) && (i.y1 = s.y1), Te(s.y2) && (i.y2 = s.y2)), e.faces && (Te(e.faces.a) && (i.a = e.faces.a), Te(e.faces.b) && (i.b = e.faces.b)), Object.keys(i).length > 0 && (t.planing = i);
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
function vm(t, e, i, s, n, a, o) {
  const r = e.map((c) => {
    const f = {
      l: c.l,
      w: c.w,
      t: c?.t ?? null,
      material: c.material ?? null,
      orientationLock: c.orientationLock ?? null,
      q: a?.addedPartTally?.[c.parentId] || c.q,
      name: c.name ?? null,
      customData: c.customData ?? null,
      stockId: c?.stock?.id || c?.stockId || null,
      rot: c?.rot ?? 0,
      // Always include extras properties even if not set (using API format)
      banding: cp(),
      finish: tn(),
      planing: dp()
    }, h = { ...c };
    return ym(h), h.banding && (f.banding = h.banding), h.finish && (f.finish = h.finish), h.planing && (f.planing = h.planing), f;
  }), l = i.map((c) => {
    const f = {
      id: c.id,
      name: c?.name ?? null,
      l: c.l,
      w: c.w,
      t: c?.t ?? null,
      material: c.material ?? null,
      q: a?.usedStockTally?.[c.parentId] || c.q,
      cost: c?.cost ?? null,
      analysis: fl(c?.analysis)
    };
    return c?.trim && (f.trim = aa(c.trim)), f;
  }), u = {
    parts: n.map((c) => {
      const f = {
        id: c.id,
        name: c.name,
        l: c.l,
        w: c.w,
        t: c.t ?? null,
        material: c.material,
        q: c.q,
        orientationLock: c.orientationLock ?? null,
        customData: c.customData ?? null
      };
      return c.extras && (f.extras = {}, c.extras.banding?.sides && (f.extras.banding = { sides: c.extras.banding.sides }), c.extras.finish?.faces && (f.extras.finish = { faces: c.extras.finish.faces }), c.extras.planing && (f.extras.planing = {
        ...c.extras.planing.sides && { sides: c.extras.planing.sides },
        ...c.extras.planing.faces && { faces: c.extras.planing.faces }
      })), f;
    })
  };
  return o && hl(r, o), {
    jobId: t,
    metadata: a,
    parts: r,
    stock: l,
    offcuts: s?.map(dl) || [],
    inputs: u
  };
}
function wm(t, e, i, s, n, a, o) {
  const r = e.map((c) => {
    const f = {
      l: c.l,
      w: c.w,
      t: c?.t ?? null,
      material: c.material ?? null,
      orientationLock: c.orientationLock ?? null,
      q: a?.addedPartTally?.[c.parentId] || c.q,
      name: c.name ?? null,
      customData: c.customData ?? null,
      stockId: c?.stock?.id || c?.stockId || null,
      rot: c?.rot ?? 0,
      // Always include extras structure even if not set (using internal format)
      extras: {
        banding: { sides: na() },
        finish: { faces: tn() },
        planing: up()
      }
    };
    return c.extras && (c.extras.banding?.sides && (f.extras.banding = { sides: c.extras.banding.sides }), c.extras.finish?.faces && (f.extras.finish = { faces: c.extras.finish.faces }), c.extras.planing && (f.extras.planing = {
      sides: c.extras.planing.sides || na(),
      faces: c.extras.planing.faces || tn()
    })), f;
  }), l = i.map((c) => ({
    id: c.id,
    name: c?.name ?? null,
    l: c.l,
    w: c.w,
    t: c?.t ?? null,
    material: c.material ?? null,
    q: a?.usedStockTally?.[c.parentId] || c.q,
    trim: c?.trim ?? null,
    // Keep internal format (l1/l2/w1/w2)
    cost: c?.cost ?? null,
    analysis: fl(c?.analysis),
    // New stock fields
    color: c?.color ?? null,
    weight: c?.weight ?? null,
    imageUrl: c?.imageUrl ?? null,
    tags: c?.tags ?? null,
    available: c?.available ?? null
  })), u = {
    parts: n.map((c) => {
      const f = {
        id: c.id,
        name: c.name,
        l: c.l,
        w: c.w,
        t: c.t ?? null,
        material: c.material,
        q: c.q,
        orientationLock: c.orientationLock ?? null,
        customData: c.customData ?? null
      };
      return c.extras && (f.extras = {}, c.extras.banding?.sides && (f.extras.banding = { sides: c.extras.banding.sides }), c.extras.finish?.faces && (f.extras.finish = { faces: c.extras.finish.faces }), c.extras.planing && (f.extras.planing = {
        ...c.extras.planing.sides && { sides: c.extras.planing.sides },
        ...c.extras.planing.faces && { faces: c.extras.planing.faces }
      })), f;
    })
  };
  return o && hl(r, o), {
    jobId: t,
    metadata: a,
    parts: r,
    stock: l,
    offcuts: s?.map(dl) || [],
    inputs: u
  };
}
const Sm = ["id", "data-index"], xm = /* @__PURE__ */ ze({
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
        l1: mi(i.inputShape, "banding", "side.l1"),
        l2: mi(i.inputShape, "banding", "side.l2"),
        w1: mi(i.inputShape, "banding", "side.w1"),
        w2: mi(i.inputShape, "banding", "side.w2")
      };
      const u = mf(
        i.orientationModel,
        i.stockGrain,
        i.inputShape
      );
      u && (l = Tr(l, u)), n.value = l;
    };
    We([
      () => i.inputShape,
      // Watching the entire inputShape for deep changes
      () => i.orientationModel,
      () => i.stockGrain,
      () => i.inputShape?.orientationLock
      // Still watch orientationLock explicitly if it triggers a re-evaluation
    ], () => {
      a();
    }, { deep: !0, immediate: !0 });
    const o = (l) => {
      (l.key === "Enter" || l.key === " ") && r();
    }, r = () => {
      i.disabled || s("clicked");
    };
    return Zt(() => {
      document.getElementById(i.id)?.addEventListener("keydown", o);
    }), ps(() => {
      document.getElementById(i.id)?.removeEventListener("keydown", o);
    }), (l, u) => (S(), F("div", {
      id: t.id,
      class: Ee(["banding-button", { open: t.open, disabled: t.disabled }]),
      "data-field": "banding",
      "data-index": t.index,
      tabindex: "0",
      onClick: r
    }, [
      D("div", {
        class: Ee(["outer", {
          l1: n.value.l1,
          l2: n.value.l2,
          w1: n.value.w1,
          w2: n.value.w2
        }])
      }, [...u[0] || (u[0] = [
        D("div", { class: "inner" }, null, -1)
      ])], 2)
    ], 10, Sm));
  }
}), km = ["id", "data-index", "disabled"], Im = /* @__PURE__ */ ze({
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
    const i = t, s = e, n = ee(() => i.inputShape ? mi(i.inputShape, "finish", "face.a") : !1), a = ee(() => i.inputShape ? mi(i.inputShape, "finish", "face.b") : !1), o = () => {
      i.disabled || s("clicked");
    };
    return (r, l) => {
      const u = vi("FontAwesomeIcon");
      return S(), F("button", {
        id: t.id,
        class: Ee(["c-btn finish-button", {
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
        onClick: o
      }, [
        Ge(u, { icon: ["fass", "spray-can"] })
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
const Cm = ze({
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
}), Tm = ["id", "disabled"];
function Am(t, e, i, s, n, a) {
  const o = vi("FontAwesomeIcon");
  return S(), F("button", {
    id: t.id,
    class: Ee(["c-btn machining-button", { selected: t.hasMachining }]),
    type: "button",
    disabled: t.disabled,
    onClick: e[0] || (e[0] = (...r) => t.openMachining && t.openMachining(...r))
  }, [
    Ge(o, { icon: ["fass", "hammer"] })
  ], 10, Tm);
}
const Om = /* @__PURE__ */ Ot(Cm, [["render", Am]]), Lm = ["id"], Fm = {
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
}, Rm = {
  key: 4,
  class: "arrow",
  viewBox: "0 0 39 72",
  xmlns: "http://www.w3.org/2000/svg"
}, _m = {
  key: 5,
  class: "grain",
  viewBox: "0 0 106 64",
  xmlns: "http://www.w3.org/2000/svg"
}, Mm = {
  key: 6,
  class: "grain",
  viewBox: "0 0 64 106",
  xmlns: "http://www.w3.org/2000/svg"
}, Do = /* @__PURE__ */ ze({
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
    const i = t, s = e, n = oe(0), a = oe(!1), o = (q, m, z, Q) => {
      if (!Ae(z) || m === 0)
        return q;
      const K = r();
      return m === 1 || m === 2 && Q !== "n" && q ? K : q;
    }, r = (q) => {
      const m = { ...i, ...q };
      if (!m.rectangle || !Ae(m.rectangle)) return "";
      let z = "";
      switch (m.orientationModel) {
        case 0:
          z = P.value;
          break;
        case 1:
          m.stockGrain === "y" || m.stockGrain === "n" ? z = m.rectangle.l >= m.rectangle.w ? "l" : "w" : m.rectangle.l >= m.rectangle.w ? z = m.stockGrain : z = z = m.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          z = m.rectangle.l >= m.rectangle.w ? "l" : "w";
          break;
      }
      return z;
    }, l = () => {
      if (i.disabled || x.value.length <= 1)
        return;
      const q = u(P.value);
      "multiEdit" in i.rectangle && i.rectangle.multiEdit && P.value === "" && n.value !== q && n.value === 0 && (n.value = q);
      let z = null;
      [1, 2].includes(i.orientationModel) ? z = f() : z = c(), n.value = z;
    }, u = (q) => {
      const m = x.value.findIndex((z) => z === q);
      return m === -1 ? 0 : m;
    }, c = () => {
      let q = n.value + 1;
      return q > x.value.length - 1 && (q = 0), q;
    }, f = () => {
      let q = 0;
      if (P.value === "") {
        const m = r();
        q = x.value.findIndex((z) => z === m);
      } else
        q = x.value.findIndex((m) => m === "");
      return q;
    }, h = (q) => {
      s("updateOrientation", q);
    }, g = () => {
      const q = P.value;
      if ("multiEdit" in i.rectangle && i.rectangle.multiEdit)
        return q === " " ? " " : q === "" ? "" : q === "l" ? "l" : q === "w" ? "w" : "default";
      switch (i.orientationModel) {
        case 0:
          return q === " " ? " " : q ? i.stockGrain === "n" ? q || i.shapeOrientation || "default" : i.stockGrain === "w" ? q === "w" ? "w" : "l" : q === "l" ? "l" : "w" : "default";
        case 1:
          return q === " " ? " " : q ? i.stockGrain === "n" ? q || i.shapeOrientation || "default" : i.stockGrain === "w" ? q === "w" ? "w" : "l" : q === "l" ? "l" : "w" : "default";
        case 2:
          return q === " " ? " " : q ? i.stockGrain === "n" ? q || i.shapeOrientation || "default" : i.stockGrain === "w" ? q === "w" ? "w" : "l" : q === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, I = () => {
      if (!i.rectangle)
        return;
      if ("multiEdit" in i.rectangle && i.rectangle.multiEdit && !P.value) {
        B("");
        return;
      }
      const q = o(
        P.value,
        i.orientationModel,
        i.rectangle,
        i.stockGrain
      );
      if (q !== P.value) {
        B(q);
        return;
      }
      if (!a.value || n.value === -1) {
        const m = u(P.value);
        n.value = m;
      }
      if (Ae(i.rectangle)) {
        if (i.orientationModel === 1) {
          const m = Y.value ? r() : P.value;
          B(m);
          return;
        }
        if (i.orientationModel === 2) {
          let m;
          Y.value ? m = i.stockGrain !== "n" ? r() : "" : m = P.value, B(m);
        }
      }
    }, R = oe(!1), B = (q) => {
      const m = u(q);
      R.value = !0, n.value = m, R.value = !1, h(q);
    }, A = () => {
      const q = [
        { l: 100, w: 50, desc: "l > w" },
        { l: 50, w: 50, desc: "l === w" },
        { l: 50, w: 100, desc: "w > l" }
      ], m = ["l", "w", "y", "n"], z = [0, 1, 2], Q = {
        "": "Free rotation",
        l: "Long side follows grain",
        w: "Short side follows grain"
      }, K = {
        "": "Free rotation",
        l: "Long side follows stock length (long side)",
        w: "Long side follows stock width (short side)"
      }, w = {
        l: "Grain along stock length (long side)",
        w: "Grain along stock width (short side)",
        y: "Grain along a mix of stock length (long side) and width (short side)",
        n: "No stock grain set"
      }, V = [];
      q.forEach((H) => {
        m.forEach((G) => {
          z.forEach((W) => {
            const de = new os({
              l: H.l,
              w: H.w
            }), ke = r({
              orientationModel: W,
              rectangle: de,
              stockGrain: G
            });
            let Ce = "";
            de.l === de.w ? Ce = "l === w" : de.l > de.w ? Ce = "l >= w" : Ce = "w > l";
            const _e = ["l", "w", "y"].includes(G) ? Q : K;
            V.push({
              Model: W,
              "Stock grain": G,
              "Stock grain description": w[G],
              Dimensions: Ce,
              "Orientation lock": ke || "N/A",
              "Orientation Lock description": _e[ke] || "N/A"
            });
          });
        });
      }), V.sort((H, G) => {
        if (H.Model !== G.Model)
          return H.Model - G.Model;
        if (H["Stock grain"] !== G["Stock grain"])
          return H["Stock grain"].localeCompare(G["Stock grain"]);
        const W = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return W[H.Dimensions] - W[G.Dimensions];
      }), console.table(V);
    }, x = ee(() => {
      if (!i.rectangle) return ["l", "w"];
      if (zt(i.rectangle)) return ["l", "w"];
      let q = ["", "l", "w"];
      return i.rectangle.multiEdit ? [" ", "", "l", "w"] : (E.value && (q = q.filter((m) => m !== "w")), q);
    }), E = ee(() => Ae(i.rectangle) || qi(i.rectangle) ? i.rectangle.isSquare : i.rectangleType && i.rectangle?.l && i.rectangle?.w ? i.rectangle?.l === i.rectangle?.w : !1), P = ee(() => {
      let q = "";
      if (zt(i.rectangle))
        q = i.rectangle.direction === "horizontal" ? "l" : "w";
      else if (Ae(i.rectangle)) {
        const m = i.rectangle.orientationLock;
        q = m === null ? "" : m;
      } else if (qi(i.rectangle)) {
        const z = i.rectangle.grain ?? "";
        z === "l" || z === "w" || z === "" || z === " " ? q = z : q = "";
      }
      return q;
    }), $ = ee(() => zt(i.rectangle) || !i.rectangle ? {
      l: null,
      w: null
    } : {
      l: i.rectangle.l,
      w: i.rectangle.w
    }), Y = ee(() => !$.value.l && !$.value.w), M = ee(() => zt(i.rectangle) ? !1 : Zn(
      i.orientationModel,
      i.stockGrain,
      i.rectangle,
      i.rectangleType,
      i.shapeOrientation
    )), le = ee(() => {
      if (!i.rectangle)
        return i.shapeOrientation ? "noGrain" : "freeRotation";
      if (qi(i.rectangle) || i.rectangleType === "stock") {
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
      const q = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, m = i.stockGrain || "default";
      let z = "default";
      Ae(i.rectangle) || i.rectangleType === "shape" ? z = g() : zt(i.rectangle) && (z = i.rectangle.direction || "default");
      const Q = q[m]?.[z];
      return Q || q[m]?.default || "freeRotation";
    });
    return We(n, (q, m) => {
      a.value && m !== void 0 && (R.value || h(x.value[q]));
    }, { immediate: !1 }), We($, (q, m) => {
      if (!i.rectangle || i.orientationModel === 0 || !Ae(i.rectangle) || Ae(i.rectangle) && (i.orientationModel === 2 && m.l && m.w && !P.value || i.stockGrain === "n" && !P.value))
        return;
      const z = r();
      P.value !== z && h(z);
    }, { immediate: !1 }), We(() => i.stockGrain, (q, m) => {
      q !== m && I();
    }, { immediate: !0 }), Zt(() => {
      I(), gt(() => {
        a.value = !0, i.debug && A();
      });
    }), (q, m) => (S(), F("button", {
      type: "button",
      id: t.id,
      class: Ee(["c-btn orientation-button", { rot: M.value, square: E.value, disabled: t.disabled, [le.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      onClick: l
    }, [
      le.value === "delete" ? (S(), F("svg", Fm, [...m[0] || (m[0] = [
        D("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ])])) : ie("", !0),
      le.value === "noChange" ? (S(), F("svg", $m, [...m[1] || (m[1] = [
        D("path", {
          d: "M5 12h14",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        }, null, -1)
      ])])) : ie("", !0),
      le.value === "freeRotation" ? (S(), F("svg", Dm, [...m[2] || (m[2] = [
        D("g", null, [
          D("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          D("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          D("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          D("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ])])) : ie("", !0),
      le.value === "leftRight" ? (S(), F("svg", Em, [...m[3] || (m[3] = [
        D("g", null, [
          D("path", { d: "m5.408 19.408h61.095" }),
          D("g", null, [
            D("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            D("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ])])) : ie("", !0),
      le.value === "topBottom" ? (S(), F("svg", Rm, [...m[4] || (m[4] = [
        D("g", null, [
          D("path", { d: "m19.408 66.503v-61.095" }),
          D("g", null, [
            D("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            D("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ])])) : ie("", !0),
      le.value === "grainLeftRight" ? (S(), F("svg", _m, [...m[5] || (m[5] = [
        D("g", null, [
          D("path", { d: "m3 3h99.887" }),
          D("path", { d: "m3.113 32h99.887" }),
          D("path", { d: "m3.113 61h99.887" })
        ], -1)
      ])])) : ie("", !0),
      le.value === "grainTopBottom" ? (S(), F("svg", Mm, [...m[6] || (m[6] = [
        D("g", null, [
          D("path", { d: "m61 3v99.887" }),
          D("path", { d: "m32 3.113v99.887" }),
          D("path", { d: "m3 3.113v99.887" })
        ], -1)
      ])])) : ie("", !0)
    ], 10, Lm));
  }
}), jm = ["id", "data-index", "disabled"], Bm = /* @__PURE__ */ ze({
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
    const i = t, s = e, n = ee(() => i.inputShape ? mi(i.inputShape, "planing", "face.a") : !1), a = ee(() => i.inputShape ? mi(i.inputShape, "planing", "face.b") : !1), o = () => {
      i.disabled || s("clicked");
    };
    return (r, l) => {
      const u = vi("FontAwesomeIcon");
      return S(), F("button", {
        id: t.id,
        class: Ee(["c-btn planing-button", {
          "face-a": n.value,
          "face-b": a.value,
          selected: t.open
        }]),
        "data-field": "planing",
        "data-index": t.index,
        type: "button",
        tabindex: "0",
        disabled: t.disabled,
        onClick: o
      }, [
        Ge(u, { icon: ["fass", "hammer"] })
      ], 10, jm);
    };
  }
}), Nm = {
  key: 0,
  class: "info"
}, Vm = ["disabled"], Gm = /* @__PURE__ */ ze({
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
    const i = t, s = e, n = ["orientationLock", "grain", "banding", "bandingOptions", "machining", "finish", "planing", "imageUpload"], a = ee(() => n.includes(i.field.name) || i.field.name === "material" && i.typePrefix === "part" || i.field.name === "t" && i.thicknessOptions?.length > 0), o = ee(() => {
      try {
        const x = i.field.propertyPath || i.field.name;
        return x.includes(".") ? pi(i.item, x) ?? null : i.item[x] ?? null;
      } catch (x) {
        return console.error("[CheckoutField] Error getting field value:", x), null;
      }
    }), r = ee(() => {
      if (i.field.custom && i.field.type) {
        const P = i.field.type;
        if (["checkbox", "select", "string", "integer", "unitDependent"].includes(P))
          return P;
      }
      const x = {
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
      const E = x[i.field.type];
      return E || "string";
    }), l = ee(() => i.field.output ? i.field.output : null), u = ee(() => i.field.options || []), c = ee(() => !1), f = ee(() => Za(i.item, [i.field.name])), h = ee(() => Za(i.item, [i.field.name], !0)), g = ee(() => i.multiEdit || !1), I = ee(() => i.materialOptions?.length > 0 && Ae(i.item) ? !i.item.material : !1), R = ee(() => i.field.info ? typeof i.field.info == "string" ? i.field.info : typeof i.field.info == "object" && o.value !== null && i.field.info[o.value] || null : null), B = (x) => {
      s("update", x);
    }, A = (x, E) => {
      s("validation", x, E);
    };
    return (x, E) => a.value ? (S(), F(Me, { key: 1 }, [
      t.field.name === "orientationLock" ? (S(), Le(Do, {
        key: 0,
        rectangle: t.item,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        "button-background": "#2c8d8f",
        onUpdateOrientation: B
      }, null, 8, ["rectangle", "stock-grain", "orientation-model"])) : t.field.name === "grain" ? (S(), Le(Do, {
        key: 1,
        rectangle: t.item,
        "button-background": "#2c8d8f",
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        onUpdateOrientation: B
      }, null, 8, ["rectangle", "stock-grain", "orientation-model"])) : t.field.name === "banding" ? (S(), Le(xm, {
        key: 2,
        "input-shape": T(Ae)(t.item) ? t.item : null,
        open: t.bandingEnabled?.autoId === t.item.autoId,
        "stock-grain": t.stockGrain,
        index: t.index,
        onClicked: E[0] || (E[0] = (P) => x.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "index"])) : t.field.name === "finish" ? (S(), Le(Im, {
        key: 3,
        "input-shape": T(Ae)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        onClicked: E[1] || (E[1] = (P) => x.$emit("open-finish"))
      }, null, 8, ["input-shape", "index"])) : t.field.name === "planing" ? (S(), Le(Bm, {
        key: 4,
        "input-shape": T(Ae)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        onClicked: E[2] || (E[2] = (P) => x.$emit("open-planing"))
      }, null, 8, ["input-shape", "index"])) : t.field.name === "machining" ? (S(), Le(Om, {
        key: 5,
        "input-shape": T(Ae)(t.item) ? t.item : null,
        onOpen: E[3] || (E[3] = (P) => x.$emit("open-machining"))
      }, null, 8, ["input-shape"])) : t.field.name === "material" && t.typePrefix === "part" ? (S(), Le(Ci, {
        key: 6,
        id: `${t.typePrefix}-material-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: o.value,
        label: T(U)(t.field.label || "fields.material"),
        placeholder: T(U)(t.field.placeholder || "fields.material"),
        "enable-label": !1,
        output: "string",
        options: t.materialOptions,
        "select-first-option-disabled": !1,
        disabled: !t.materialOptions?.length,
        required: !1,
        text: {
          select: T(U)("actions.select"),
          delete: T(U)("actions.delete")
        },
        "onUpdate:value": B,
        onValidation: A
      }, {
        default: Ti(() => [
          qs(x.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : t.field.name === "t" && t.thicknessOptions?.length > 0 ? (S(), Le(Ci, {
        key: 7,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: o.value,
        label: T(U)(t.field.label || "fields.t"),
        "enable-label": !1,
        options: t.thicknessOptions,
        readonly: t.readonly,
        disabled: I.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: T(U)("actions.select"),
          delete: T(U)("actions.delete")
        },
        output: "number",
        "onUpdate:value": B,
        onValidation: A
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "imageUpload" ? (S(), F("button", {
        key: 8,
        type: "button",
        disabled: t.readonly,
        onClick: E[4] || (E[4] = (P) => x.$emit("open-image-upload"))
      }, [
        Ge(T(Gs), { icon: ["fass", "image"] })
      ], 8, Vm)) : ie("", !0)
    ], 64)) : (S(), Le(Ci, {
      key: 0,
      id: `${t.typePrefix}-${t.field.name}-${t.index}`,
      "data-field": t.field.name,
      "data-index": t.index,
      type: r.value,
      value: o.value,
      label: T(U)(t.field.label || t.field.name),
      placeholder: T(U)(t.field.placeholder || t.field.name),
      "enable-label": t.enableLabel,
      output: l.value,
      options: u.value,
      "select-first-option-disabled": t.field.selectFirstOptionDisabled ?? !0,
      disabled: t.field.disabled || c.value,
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
      "onUpdate:value": B,
      onValidation: A
    }, {
      default: Ti(() => [
        R.value ? (S(), F("p", Nm, [
          Ge(T(Gs), { icon: ["fass", "info-circle"] }),
          ls(" " + ne(R.value), 1)
        ])) : ie("", !0),
        qs(x.$slots, "default")
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
}, oy = { id: "diagram-wrapper" }, ry = {
  key: 0,
  id: "stack"
}, ly = {
  key: 3,
  class: "debug"
}, Gn = !0, cy = /* @__PURE__ */ ze({
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
    const s = ji(() => Promise.resolve().then(() => yy)), n = ji(() => Promise.resolve().then(() => My)), a = ji(() => Promise.resolve().then(() => qy)), o = ji(() => Promise.resolve().then(() => La)), {
      inputs: r,
      totalInputShapes: l,
      getShapeGrainSummary: u,
      updateNumberFormat: c,
      validateInputStock: f,
      // validateInputShapeField,
      // validateInputStockField,
      removeInputShape: h,
      addInputShape: g,
      addInputStock: I,
      cloneInputShape: R,
      updateInputShape: B,
      validationIssues: A,
      setExtrasOptionsFromPricing: x,
      getCentralizedOptions: E
    } = Jr(), { r: P, updateFromResult: $, stackedStock: Y, uniqueAddedShapes: M, uniqueUsedStock: le, activeStockAutoId: q, activeStock: m, setActiveStockAutoId: z } = ca(), { progress: Q, reset: K } = Pc(), { addNotice: w } = ua(), V = ee(() => r.inputShapes.value.filter(Ae)), H = (b) => !b || !Array.isArray(b) ? [] : b.map((v) => wp({ parts: [v] }).parts?.[0] || v), G = t, W = i, de = oe(!1), Se = "production", ke = oe(navigator?.language || "en-US"), Ce = Yl(null), _e = window.location.hostname, se = oe(!1), lt = oe(!0), Ct = Kl("Checkout/currentURL", window.location.href), ht = oe(null), wt = oe(!1), te = oe(!1), je = oe(!1), Lt = oe(!1), Ft = oe(!1), Ji = oe(gf()), yt = oe(!1), { socket: fe } = kc({
      refs: {
        connected: se,
        thinking: je
      },
      callbacks: {
        onResult(b) {
          const v = b.optimisation;
          if ($(v), !v.shapeList?.length || !v.stockList?.length) {
            K(), w({
              type: "error",
              message: U("errors.calculation.no_result"),
              additional: [U("errors.validation.check_inputs")]
            }), je.value = !1;
            return;
          }
          if ((ue.apiVersion || 3) === 2 ? ht.value = vm(
            b.jobId,
            M.value,
            le.value,
            P.offcuts?.value || [],
            r.inputShapes.value,
            P.metadata.value,
            ue.resultOrientationModel
          ) : ht.value = wm(
            b.jobId,
            M.value,
            le.value,
            P.offcuts?.value || [],
            r.inputShapes.value,
            P.metadata.value,
            ue.resultOrientationModel
          ), P?.metadata?.value?.unplacedParts?.length) {
            const y = P.metadata.value.unplacedParts.map((N) => N.id).join();
            w({
              type: "warning",
              message: U("woodwork.parts_not_fit") + ": " + y
            });
          }
          ht.value && W("result", ht.value), je.value = !1;
        },
        onUser(b) {
          Ce.value = b;
        },
        onConnectError(b) {
          w({
            type: "error",
            message: U("errors.network.cannot_connect"),
            additional: [b]
          });
        },
        onError(b) {
          w({
            type: "error",
            message: U("errors.general.error_occurred"),
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
    }, ue = St(pe), Pe = St({
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
    }), it = oe(null), C = oe(!1), O = oe(""), k = oe("");
    We(A, (b) => {
      b?.length > 0 ? (C.value = !0, O.value = "Validation Errors", k.value = b.map((v) => `${v.message} (${v.category.join(", ")})`).join(`

`)) : O.value === "Validation Errors" && (C.value = !1, O.value = "", k.value = "");
    }, { deep: !0 });
    const Z = St({
      banding: null,
      finish: null,
      info: null,
      planing: null
      // imageUpload: null
    }), J = oe([]), ge = oe([]), xe = oe([]), $e = St({
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
    }), Re = St({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2"]
    }), qe = St({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["a", "b"]
    }), Je = St({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]
      // All sides and faces by default
    }), Fa = oe(null), Oi = St({}), Li = St({}), Fi = St({}), bs = oe(null), bl = ee(() => ({
      banding: Oi.rules,
      finish: Li.rules,
      planing: Fi.rules
    })), $a = ee(() => Ic({
      stockType: Pe.stockType,
      materials: J.value,
      minDimension: ue.minDimension,
      ...ue.fieldOrder && ue.fieldOrder.length > 0 ? { allowedFieldIds: ue.fieldOrder } : {}
    })), wn = oe([]), Sn = oe({
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
    }), Xi = ee(() => {
      const b = $a.value.fields.value, v = $a.value.allFieldsMap.value, L = b.filter((Ve) => Sn.value[Ve.name] ?? !0), y = ["banding", "finish", "planing", "machining", "imageUpload"], N = [];
      for (const Ve of y) {
        const nt = Sn.value[Ve], ct = L.find((Ue) => Ue.name === Ve);
        if (nt && !ct) {
          const Ue = v.get(Ve);
          Ue && N.push(Ue);
        }
      }
      const we = wn.value || [];
      return [...L, ...N, ...we];
    }), Qi = ee(() => Xi.value.length + 2), vl = ee(() => {
      const b = {
        id: 34,
        del: 32
      }, v = {
        id: `${b.id}px`,
        del: `${b.del}px`
      }, L = [];
      for (const y of Xi.value) {
        if (y.name === "trim") continue;
        const N = y.w ?? "minmax(20px, 1fr)";
        L.push(N);
      }
      return L.unshift(v.id), L.push(v.del), L.join(" ");
    }), vs = ee(() => ({
      "--btn-color": ue.colors.buttonText,
      "--btn-bg": ue.colors.button,
      "--btn-hover-bg": wl(ue.colors.button, -8),
      "--btn-focus-ring": ue.colors.button
    }));
    function wl(b, v) {
      const L = b.replace("#", ""), y = parseInt(L, 16), N = Math.round(2.55 * v), we = (y >> 16) + N, Fe = (y >> 8 & 255) + N, Ve = (y & 255) + N;
      return `#${(16777216 + (we < 255 ? we < 1 ? 0 : we : 255) * 65536 + (Fe < 255 ? Fe < 1 ? 0 : Fe : 255) * 256 + (Ve < 255 ? Ve < 1 ? 0 : Ve : 255)).toString(16).slice(1)}`;
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
    }, Da = ee(() => Ce.value ? !(Ce.value && Ce.value?.api?.whiteLabel) : !0), ws = {
      stockSelection: (b) => {
        const v = ["efficiency", "smallest"];
        b && !v.includes(b) ? console.warn(`${b} is not a valid stockSelection, expected ${v.join("|")}`) : Pe.options.stockSelection = b;
      },
      minSpacing: (b) => {
        Pe.options.minSpacing = b;
      },
      maxParts: (b) => {
        ue.maxParts = b;
      },
      locale: (b) => {
        ke.value = b.replace(/_/g, "-");
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
        for (const L in pe.enable)
          L in b && (ue.enable[L] = b[L]);
        for (const L in v) {
          const y = v[L], N = pi(b, [y]), we = pe.enable[y];
          Nt(L, N !== void 0 ? N : we);
        }
        Ft.value = pi(b, ["csvImport"]) ?? pe.enable.csvImport;
      },
      colors: (b) => {
        for (const v in pe.colors)
          v in b && (ue.colors[v] = b[v]);
      },
      orientationModel: (b) => {
        if (![0, 1, 2].includes(b)) {
          ue.orientationModel = 0;
          return;
        }
        ue.orientationModel = b;
      },
      numberFormat: (b) => {
        if (!["decimal", "fraction"].includes(b)) {
          ue.numberFormat = "decimal";
          return;
        }
        ue.numberFormat = b;
      },
      customFields: (b) => {
        if (!Array.isArray(b) || !b?.length)
          return;
        const v = [];
        b.forEach((L) => {
          const y = Ea(L.id), N = {
            ...L,
            custom: !0,
            id: y,
            name: y,
            // CheckoutField expects 'name' property
            propertyPath: "customData." + y,
            fieldMap: "customData." + y
          };
          L.type === "checkbox" && (N.w = "32px"), L.type === "integer" || L.type === "float" ? N.output = L.output ?? "number" : L.type === "select" && (N.output = L.output ?? "string", N.options = L.options), v.push(N);
        }), wn.value = v, gt(() => {
          for (const L of r.inputShapes.value)
            L.customData = b.reduce((y, N) => {
              const we = Ea(N.id);
              return y[we] = L.customData[we] || N.default || "", y;
            }, {});
        });
      }
    }, xl = (b) => {
      G.debug && W("log", ["checkout init...", b]), b?.stockFilterEnabled && (localStorage.removeItem("inputs/inputStock"), r.inputStock.value = []), b?.parts && (b.parts = H(b.parts));
      let v;
      try {
        v = mm(b);
      } catch (y) {
        W("error", y.message || "Invalid init data");
        return;
      }
      if (v.saw) {
        const y = v.saw;
        if (y.stockType !== void 0 && (Us.includes(y.stockType) || console.warn(`${y.stockType} is not a valid stockType, expected ${Us.join("|")}`), Pe.stockType = y.stockType, y.stockType === "linear" && (Pe.cutType = null, Pe.cutPreference = null)), y.bladeWidth !== void 0) {
          const N = typeof y.bladeWidth == "string" ? parseFloat(y.bladeWidth) : y.bladeWidth;
          N >= 0 ? Pe.bladeWidth = N : console.warn(`SmartCut - you provided an incorrect blade width of: ${y.bladeWidth}`);
        }
        if (y.cutType !== void 0 && (Pe.cutType = y.cutType), y.cutPreference !== void 0 && (Hn.includes(y.cutPreference) ? Pe.cutPreference = y.cutPreference : console.warn(`SmartCut - cut preference ${y.cutPreference || "N/A"} is not valid. Expected: ${Hn.join("|")}`)), y.guillotineOptions !== void 0 && typeof y.guillotineOptions == "object" && Object.assign(Pe.guillotineOptions, y.guillotineOptions), y.stackHeight !== void 0) {
          const N = typeof y.stackHeight == "string" ? parseFloat(y.stackHeight) : y.stackHeight;
          Pe.stackHeight = N;
        }
      }
      if (v?.options) {
        const y = v.options;
        Xr(y), v.saw ? (["stockType", "bladeWidth"].forEach((Fe) => {
          Fe in v.saw || W("error", `${Fe} is a required saw property`);
        }), (v.saw.cutType === "guillotine" || v.saw.cutType === "beam") && !("cutPreference" in v.saw) && W("error", "cutPreference is a required saw property for guillotine and beam cut types")) : W("error", "saw configuration is required");
        const N = ["enable", "colors"];
        for (const we in y)
          N.includes(we) || (ue[we] = y[we]), we in ws && ws[we](y[we]);
      }
      if (v.options.colors && "colors" in ws && ws.colors(v.options.colors), v.banding) {
        const y = v.banding;
        "locations" in y && y.locations && (Oi.locations = y.locations), "groups" in y && y.groups && (Oi.groups = y.groups), "rules" in y && y.rules && (Oi.rules = y.rules);
      }
      if (v.finish) {
        const y = v.finish;
        "locations" in y && y.locations && (Li.locations = y.locations), "groups" in y && y.groups && (Li.groups = y.groups), "rules" in y && y.rules && (Li.rules = y.rules);
      }
      if (v.planing) {
        const y = v.planing;
        "locations" in y && y.locations && (Fi.locations = y.locations), "groups" in y && y.groups && (Fi.groups = y.groups), "rules" in y && y.rules && (Fi.rules = y.rules);
      }
      v.partRules && (bs.value = v.partRules), Tn("banding", v), Tn("finish", v), Tn("planing", v), Pl(v), Ma(v), te.value = !0, G.debug && W("log", ["init complete"]);
      const L = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(L), gt(() => {
        Da.value && !El() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, Nt = (b, v = !1) => {
      Sn.value[b] = v;
    }, Ea = (b) => b ? Du(b)?.toLowerCase() : null, kl = (b, v, L) => {
      try {
        if (!b || !v) return;
        const y = L !== null && L !== "" && L !== void 0 && L !== 0;
        if (v === "material" && (!L || L === "")) {
          const Fe = { material: null, t: null };
          B(b.autoId, Fe) || (Mi(b, "material", null), Mi(b, "t", null), b.isNew || b.validate());
          return;
        }
        if (b.isNew)
          if (y)
            b.isNew = !1;
          else {
            Mi(b, v, L);
            return;
          }
        let N;
        if (v.includes(".")) {
          const Fe = v.split("."), Ve = Fe[0], nt = Fe.slice(1).join("."), Ue = { ...b[Ve] || {} };
          Mi(Ue, nt, L), N = { [Ve]: Ue };
        } else
          N = { [v]: L };
        B(b.autoId, N) || (Mi(b, v, L), b.validate()), ["l", "w", "t"].includes(v) && gt(() => {
          Ra(b);
        });
      } catch (y) {
        console.error("[CHECKOUT] Error updating field:", y);
      }
    }, Il = () => {
    }, Ra = (b) => {
      if (bs.value && b && !b.isNew && !(!b.l && !b.w))
        try {
          const v = Pp(b, bs.value);
          if (b.issues && (b.issues = b.issues.filter(
            (L) => !(L.category?.includes("part") && L.identifier === "part-validation-rules")
          )), !v.valid && v.violations.length > 0)
            for (const L of v.violations) {
              const y = Tp(L);
              new ce({
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
      if (pi(ue, ["enable", "machining"]) && b?.machining) {
        for (const v in $e)
          b.machining[v] && ($e[v] = b.machining[v]);
        if (["holes", "hingeHoles"].forEach((v) => {
          b?.machining?.[v] && ($e[v].enabled = b?.machining?.[v].enabled);
        }), b?.machining?.corners?.types?.length && ($e.corners.enabled = !0, $e.corners.types = b.machining.corners.types), b.banding && b?.options?.enable?.banding) {
          if (!Re) return;
          $e.banding = {
            enabled: !0
          }, Re.options.length && ($e.banding.options = Re.options), Re.labels.length && ($e.banding.labels = Re.labels), io(Re.pricing) && ($e.banding.pricing = Re.pricing);
        }
      }
    }, Cl = (b = null) => {
      it.value = b, b && Ae(b) && b.l && b.w ? de.value = !0 : alert(U("machining.enter_dimensions_first"));
    }, Tl = () => {
      de.value = !1;
    }, _a = (b = []) => {
      if (ge.value = [], xe.value = [], Nt("t", !1), !!b.length) {
        for (const v of b)
          if (v?.t)
            if (typeof v.t == "string" && v.t.includes(",")) {
              const L = ja(v.t, !0);
              L.length === 2 ? (Ol(L), Nt("t", !0), v.t = ge.value[0]) : W("error", "bonded thickness found which does not have 2 options");
            } else ge.value.includes(v.t) || ge.value.push(v.t);
        ge.value.length > 1 && Nt("t", !0);
      }
    }, Al = (b) => {
      if (!b) return { thicknesses: [], bondedThicknesses: [] };
      if (!J.value?.length)
        return {
          thicknesses: ge.value,
          bondedThicknesses: []
        };
      if (!b.material)
        return {
          thicknesses: ge.value,
          bondedThicknesses: []
        };
      const v = J.value.find((N) => N.name === b.material);
      if (!v)
        return {
          thicknesses: ge.value,
          bondedThicknesses: []
        };
      const L = [...v.thicknesses], y = [];
      for (let N = 0; N < L.length; N++) {
        const we = L[N], Fe = ja(we), Ve = [];
        if (Fe.length) {
          for (const nt of Fe)
            L[N] = nt, Ve.push(N);
          N++;
        }
        Ve.length && y.push(Ve);
      }
      return {
        thicknesses: L,
        bondedThicknesses: y
      };
    }, Ma = (b) => {
      if (b?.stock?.some((v) => v?.material)) {
        J.value = [], ge.value = [], xe.value = [];
        const v = /* @__PURE__ */ new Map();
        for (const y of b.stock) {
          if (!y.material) continue;
          const N = y.material.toUpperCase();
          v.has(N) || v.set(N, /* @__PURE__ */ new Set()), y.t != null && v.get(N)?.add(X({ v: y.t }));
        }
        J.value = Array.from(v.entries()).map(([y, N]) => ({
          name: y,
          thicknesses: Array.from(N).sort((Fe, Ve) => Fe - Ve)
        }));
        const L = /* @__PURE__ */ new Set();
        for (const y of J.value)
          for (const N of y.thicknesses)
            L.add(X({ v: N }));
        ge.value = Array.from(L).sort((y, N) => y - N), J.value.length > 1 ? Nt("material", !0) : Nt("material", !1), ge.value.length > 1 ? Nt("t", !0) : Nt("t", !1);
      } else
        _a(b.stock);
    }, Ol = (b, v = null) => {
      if (!Array.isArray(b)) {
        W("error", "addBondedThicknesses expects an array");
        return;
      }
      const L = [];
      for (let y of b)
        ue.numberFormat === "decimal" && (y = parseFloat(y)), ge.value.push(y), v && v.thicknesses.push(y), L.push(ge.value.length - 1);
      xe.value.push(L);
    }, Ll = (b) => {
      const { thicknesses: v } = Al(b);
      return v?.length ? v.map((L) => ({
        label: L?.toString(),
        value: L
      })) : [];
    }, ja = (b, v = !1) => {
      if (typeof b == "string" && b.includes(",")) {
        const L = b.split(",");
        return v ? L.map((y) => X({ v: y })) : L;
      }
      return [];
    }, Fl = () => {
      yt.value ? Dl() : $l();
    }, $l = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), yt.value = !0;
    }, Dl = () => {
      document.exitFullscreen && document.exitFullscreen(), yt.value = !1;
    }, El = () => {
      if (Ce.value?.api?.whiteLabel) return !0;
      let b = !0;
      const v = document.querySelector("#smartcut-checkout a#credit");
      if (!v) return b = !1;
      const L = window.getComputedStyle(v);
      return L.display === "none" || L.display === "hidden" || L.opacity === "0" || L.color === "transparent" || L.position !== "absolute" || L.color !== "#4e4e4e" && L.color !== "rgb(78, 78, 78)" ? b = !1 : (lt.value = b, b);
    }, xn = ee(() => typeof G.findExtrasPrice == "function"), Ba = (b, v) => {
      let L, y;
      switch (v) {
        case "banding":
          L = Re.options, y = Re.labels;
          break;
        case "finish":
          L = qe.options, y = qe.labels;
          break;
        case "planing":
          L = Je.options, y = Je.labels;
          break;
        default:
          L = [], y = [];
      }
      Si(b, v, L, y);
    }, Na = (b) => {
      const v = Object.keys(b);
      return Math.max(...v.map((y) => y.split("|").length));
    }, es = (b, v, L) => {
      if (!b)
        return [];
      if (L > 0 && !v[L - 1])
        return [];
      const y = /* @__PURE__ */ new Set();
      for (const we of Object.keys(b)) {
        const Fe = we.split("|");
        if (Fe.length > L) {
          let Ve = !0;
          for (let nt = 0; nt < L; nt++) {
            const ct = v[nt], Ue = Fe[nt];
            if (ct && ct !== Ue) {
              Ve = !1;
              break;
            }
          }
          Ve && y.add(Fe[L]);
        }
      }
      return Array.from(y);
    }, kn = (b, v, L, y) => {
      let N, we;
      switch (v) {
        case "banding":
          N = Re.options, we = Re.labels;
          break;
        case "finish":
          N = qe.options, we = qe.labels;
          break;
        case "planing":
          N = Je.options, we = Je.labels;
          break;
        default:
          N = [], we = [];
      }
      return _n(b, v, L, y, N, we);
    }, Rl = (b, v, L) => {
      let y, N;
      switch (v) {
        case "banding":
          y = Re.options, N = Re.labels;
          break;
        case "finish":
          y = qe.options, N = qe.labels;
          break;
        case "planing":
          y = Je.options, N = Je.labels;
          break;
        default:
          y = [], N = [];
      }
      return _n(b, v, L, G.findExtrasPrice, y, N);
    }, _l = oe({}), In = (b = 1) => {
      for (let v = b; v--; ) {
        let L = {
          l: null,
          w: Pe.stockType === "linear" ? r.inputStock.value[0]?.w : null,
          t: ge.value.length ? ge.value[0] : null,
          q: 1,
          material: J.value?.length === 1 ? J.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (r.inputShapes.value.length > 0) {
          const N = r.inputShapes.value[r.inputShapes.value.length - 1];
          L.material = N.material, L.t = N.t;
        }
        const y = g(L);
        y && (Re?.labels?.length && Si(y, "banding", Re.options, Re.labels), qe?.labels?.length && Si(y, "finish", qe.options, qe.labels), Je?.labels?.length && Si(y, "planing", Je.options, Je.labels));
      }
    }, Pn = (b = {}) => {
      const v = {
        q: 1,
        // Always set quantity to 1
        ...b
      }, L = g(v);
      return L && (Pe.stockType === "linear" && r.inputStock.value[0]?.w && (L.w = r.inputStock.value[0].w), ge.value.length && (L.t = ge.value[0]), J.value?.length === 1 && (L.material = J.value[0].name), Re?.labels?.length && Si(L, "banding", Re.options, Re.labels), qe?.labels?.length && Si(L, "finish", qe.options, qe.labels), Je?.labels?.length && Si(L, "planing", Je.options, Je.labels)), L;
    }, Ml = (b) => {
      if (ge.value.length)
        for (const v of b) {
          if (!v.t) return;
          const L = ge.value.findIndex(
            (we) => X({ v: we }) === v.t
          ), y = xe.value.find((we) => we.includes(L));
          if (!y) return;
          const N = Math.min(
            ...y.map((we) => ge.value[we])
          );
          X({ v: v.t }) > N && (v.q = Number(v.q) * (X({ v: v.t }) / N), v.notes = `Bond to form ${v.t.valueOf()}`, v.t = N);
        }
    }, Va = () => {
      K(), z(null), P.stockList.value = [], P.shapeList.value = [], P.cutList.value = [];
    }, Cn = () => {
      r.inputShapes.value.length = 0, G.inputType !== "formula" && gt(() => In());
    }, jl = async () => {
      if (W("calculating"), je.value) return !1;
      je.value = !0, Lt.value = !1;
      const b = await Jg({
        t: U,
        partTrim: ue.partTrim,
        maxShapes: ue.maxParts || 1e3,
        maxStock: 1 / 0,
        // CheckoutCalculator doesn't have stock limits
        inputSaw: r.inputSaw.value,
        // Extras validation data
        bandingPricing: Re.pricing,
        finishPricing: qe.pricing,
        planingPricing: Je.pricing,
        findExtrasPrice: G.findExtrasPrice,
        extrasValidationRules: bl.value,
        onLimit: () => {
          w({
            type: "error",
            message: U("limits.max_parts") + " " + ue.maxParts
          });
        }
      });
      if (bs.value)
        for (const N of r.inputShapes.value)
          Ra(N);
      const v = r.inputShapes.value.flatMap((N) => N.issues || []).filter((N) => N.type === "error" && N.category?.includes("part"));
      if (v.length > 0) {
        w({
          type: "error",
          message: U("errors.validation.inputs_issue", { 0: "part" }),
          additional: v.map((N) => N.message)
        }), W("validation-error"), je.value = !1;
        return;
      }
      if (!b.valid) {
        W("validation-error"), je.value = !1;
        return;
      }
      Va();
      const L = r.inputShapes.value.map((N) => R(N)).filter(Boolean);
      if (L.length !== r.inputShapes.value.length)
        return w({
          type: "error",
          message: "Some parts have validation errors and cannot be processed",
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), je.value = !1, !1;
      Ml(L), G.debug && console.log(
        "SmartCut - calculating",
        "stock",
        r.inputStock.value.map((N) => ({ l: N.l, w: N.w })),
        "parts",
        L.map((N) => ({ l: N.l, w: N.w }))
      );
      const y = {
        inputSaw: r.inputSaw.value.toData(),
        inputShapes: L.map((N) => N.toData()),
        inputStock: r.inputStock.value.map((N) => N.toData()),
        inputUserGroups: [],
        enableEvo: !0,
        useInventory: !1,
        domain: _e,
        extrasOptions: E(),
        source: "checkout",
        sourceVersion: "4.0.48"
      };
      await fe.connect(), fe.emit("calculate", y);
    }, Tn = (b, v) => {
      if (Nt(b, !1), !b || !v || !v?.[b] || !pi(ue, ["enable", b]))
        return;
      const L = [b, "pricing"];
      if (!to(v, L)) {
        W("error", `${L.join(".")} not found in sent data`);
        return;
      }
      const y = pi(v, L);
      if (typeof y != "object") {
        W("error", `${L.join(".")} data must be an object`);
        return;
      }
      if (!io(y)) {
        W("error", `if provided, ${L.join(".")} data must contain some values`);
        return;
      }
      const N = Object.keys(y), we = Object.values(y);
      if (!N.length) {
        W("error", `no ${L.join(".")} pricing found`);
        return;
      }
      const Fe = /,/;
      for (const Ue of N)
        if (Fe.test(Ue)) {
          W("error", `${L} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (we.some((Ue) => isNaN(Ue))) {
        W("error", `${L} values must be a number`);
        return;
      }
      const Ve = Na(y), nt = [b, "labels"];
      let ct = [];
      if (to(v, nt))
        ct = pi(v, nt);
      else {
        W("error", `${nt.join(".")} not found`);
        return;
      }
      if (!ct) {
        W("error", `${nt.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(ct)) {
        W("error", `${nt.join(".")} data must be an array`);
        return;
      }
      if (!ct?.length) {
        W("error", `if provided, ${nt.join(".")} data must contain values`);
        return;
      }
      if (ct.length !== Ve) {
        W("error", `${nt.join(".")} length (${ct.length}) must match the number of levels in ${L.join(".")} (${Ve})`);
        return;
      }
      switch (b) {
        case "banding": {
          Re.labels = ct, Re.pricing = y;
          const Ue = An(y);
          Re.options = Ue, x("banding", Ue, ct, y);
          break;
        }
        case "finish": {
          qe.labels = ct, qe.pricing = y;
          const Ue = An(y);
          qe.options = Ue, x("finish", Ue, ct, y);
          break;
        }
        case "planing": {
          Je.labels = ct, Je.pricing = y;
          const Ue = An(y);
          Je.options = Ue, x("planing", Ue, ct, y);
          break;
        }
      }
      if (Fa.value = E(), Nt(b, !0), !!r.inputShapes.value?.length)
        for (const Ue of r.inputShapes.value)
          Ba(Ue, b);
    }, An = (b) => {
      const v = [], L = Object.keys(b), y = Na(b);
      for (let N = y; N--; ) v.push(/* @__PURE__ */ new Set());
      for (const N of L)
        N.split("|").forEach((Fe, Ve) => v[Ve].add(Fe));
      for (let N = 0; N < y; N++)
        v[N] = Array.from(v[N]);
      return v;
    }, Ss = (b, v) => {
      if (!v) return;
      b !== "info" && Object.keys(Z).forEach((y) => {
        y !== b && y !== "info" && (Z[y] = null);
      });
      const L = r.inputShapes.value.indexOf(v);
      Z[b] === L ? (it.value = null, Z[b] = null, _l.value[b] = void 0) : (it.value = v, Z[b] = L);
    }, Ga = (b) => {
      if (W("log", ["load event received"]), !te.value) {
        W("log", ["load event received"]);
        return;
      }
      Bl(b.detail);
    }, Bl = (b) => {
      if (W("log", ["loading parts..."]), !b || !b?.inputs?.parts?.length) {
        W("log", ["could not find any parts to import"]);
        return;
      }
      r.inputShapes.value.length = 0;
      let v = 0;
      for (const y of b.inputs.parts) {
        const N = Pn(y);
        N ? N.issues?.length && W("log", [`SmartCut - issues found while importing part at index ${v}`, N.issues]) : W("log", [`SmartCut - error loading part at index ${v}`, y]), v++;
      }
      r.inputShapes.value.flatMap((y) => gr(y.issues)).length && w({
        type: "error",
        message: U("errors.general.issues_found")
      }), W("log", [`loaded ${r.inputShapes.value.length} parts`]);
    }, Nl = (b) => {
      r.inputShapes.value.length = 0, gt(() => {
        for (const v of b)
          v.t = r.inputStock.value?.[0]?.t ?? null, Pn(v);
      });
    };
    We(() => G.inputStock, (b) => {
      if (Va(), Array.isArray(b) || console.warn("SmartCut - stock must be passed as an array"), !!b?.length) {
        r.inputStock.value.length = 0, J.value.length || _a(b.map((v) => v.toData()));
        for (const v of b)
          I({
            ...v.toData(),
            autoAdd: !0
          }) || (console.error("Failed to add stock item:", v), w({
            type: "error",
            message: "Failed to add some stock items due to validation errors"
          }));
        if (r.inputStock.value.length) {
          r.inputShapes.value.length ? gt(() => {
            r.inputShapes.value.forEach((L) => {
              const y = L.material ? J.value.find((N) => N.name === L.material) : null;
              if (y)
                y.thicknesses.includes(X({ v: L.t })) || (L.t = X({ v: y.thicknesses[0] }));
              else if (J.value?.length === 1) {
                L.material = J.value[0].name;
                const N = J.value[0];
                N.thicknesses.includes(X({ v: L.t })) || (L.t = X({ v: N.thicknesses[0] }));
              } else if (J.value?.length > 1 && L.t) {
                const N = J.value.find((we) => we.thicknesses.some((Fe) => X({ v: Fe }) === X({ v: L.t })));
                N ? L.material = N.name : (L.material = J.value[0].name, L.t = X({ v: J.value[0].thicknesses[0] }));
              } else J.value?.length > 1 ? (L.material = J.value[0].name, L.t = X({ v: J.value[0].thicknesses[0] })) : !L.t && r.inputStock.value[0]?.t && (L.t = X({ v: r.inputStock.value[0].t }));
            });
          }) : G.inputType !== "formula" && gt(() => In());
          const v = f(r.inputSaw.value);
          v.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(v))), w({
            type: "error",
            message: U("errors.validation.stock_issue"),
            additional: v.map((L) => L.message)
          }));
        }
      }
    }, { immediate: !0 }), We(r.inputShapes, (b) => {
      W("inputs-changed"), b.forEach((v) => {
        Pe.stockType === "linear" && (v.w = r.inputShapes.value[0]?.w);
        const L = J.value.find((y) => y.name === v.material);
        L && (L.thicknesses.includes(X({ v: v.t })) || (v.t = X({ v: L.thicknesses[0] })));
      });
    }, { deep: !0 }), We(() => ue.numberFormat, (b) => {
      c(b);
    }), We(() => Pe, (b) => {
      r.inputSaw.value = new ti(b);
    }, { deep: !0 }), Zt(async () => {
      if (wt.value) return;
      wt.value = !0;
      const b = new URL(window.location.href), v = b.searchParams.toString(), L = b.origin + b.pathname + (v ? `?${v}` : "");
      Ct.value !== L && Cn(), Ct.value = L, ke.value = ue.locale, await fe.connect(), fe.emit("getUserFromDomain"), window.addEventListener("smartcut/load", Ga), G.debug && W("log", [
        "ready...",
        "fields:",
        Xi.value.map((y) => y.name)
      ]);
    });
    const Vl = () => {
      fe && fe.disconnect();
    };
    return ps(() => {
      window.removeEventListener("smartcut/load", Ga), Vl(), delete window.smartcutCheckout;
    }), e({
      init: xl,
      clear: Cn,
      getAvailablePricingOptions: es,
      getExtrasPrice: Rl,
      formatPrice: G.formatPrice,
      findExtrasPrice: G.findExtrasPrice,
      inputShapes: r.inputShapes,
      initExtrasOptions: Ba,
      createAndAddInputShape: Pn,
      initMaterialsThicknesses: Ma
    }), (b, v) => {
      const L = vi("FontAwesomeIcon");
      return S(), F("div", qm, [
        te.value ? ie("", !0) : (S(), Le(Lo, {
          key: 0,
          size: 50,
          "show-number": !1
        })),
        it.value?.machining && de.value ? (S(), Le(T(n), {
          key: 1,
          "input-shape": it.value,
          "onUpdate:inputShape": v[0] || (v[0] = (y) => it.value = y),
          translate: !0,
          options: $e,
          "find-extras-price": t.findExtrasPrice,
          "get-extras-price": T(_n),
          "get-available-pricing-options": es,
          "format-price": t.formatPrice,
          onClose: Tl
        }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price"])) : ie("", !0),
        te.value ? (S(), F("section", {
          key: 2,
          id: "smartcut-checkout",
          class: Ee(["smartcut-content", { fullscreen: yt.value }])
        }, [
          Ji.value && !t.readonly ? (S(), F("button", {
            key: 0,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            style: at(vs.value),
            onClick: v[1] || (v[1] = (y) => Fl())
          }, [
            Ge(L, { icon: ["fass", "expand"] }),
            ls(" " + ne(T(U)("general.full_screen")), 1)
          ], 4)) : ie("", !0),
          Da.value ? (S(), F("a", {
            key: 1,
            id: "credit",
            style: Sl,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, ne(T(Ou)(T(U)("general.powered_by"))), 1)) : ie("", !0),
          D("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: at({ "grid-template-columns": vl.value })
          }, [
            T(r).inputShapes.value.length ? (S(), F("div", zm, [
              v[6] || (v[6] = D("div", { class: "cell id" }, null, -1)),
              (S(!0), F(Me, null, Ye(Xi.value, (y) => (S(), F("div", {
                key: y.name,
                class: Ee(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(y.name) || y.type === "boolean" }])
              }, ne(T(U)(y.label)), 3))), 128)),
              T(Se) === "development" && Gn ? (S(), F("div", Wm, " Info ")) : ie("", !0),
              v[7] || (v[7] = D("div", { class: "cell del" }, null, -1))
            ])) : ie("", !0),
            (S(!0), F(Me, null, Ye(V.value, (y, N) => (S(), F("div", {
              key: N,
              class: "row inputs"
            }, [
              D("div", Hm, [
                D("div", {
                  class: "id",
                  style: at({
                    background: ue.colors.partA,
                    color: ue.colors.text
                  })
                }, ne(N + 1), 5)
              ]),
              (S(!0), F(Me, null, Ye(Xi.value, (we) => (S(), F("div", {
                key: we.name,
                class: "cell"
              }, [
                y ? (S(), Le(Gm, {
                  key: 0,
                  field: we,
                  item: y,
                  index: N,
                  "type-prefix": "part",
                  readonly: t.readonly,
                  "number-format": ue.numberFormat,
                  "orientation-model": ue.orientationModel,
                  "stock-grain": T(u)(y),
                  "material-options": J.value?.map((Fe) => ({ label: Fe.name, value: Fe.name })) || [],
                  "thickness-options": we.name === "t" ? Ll(y) : [],
                  "banding-enabled": Z.banding === N ? y : null,
                  onUpdate: (Fe) => kl(y, we.propertyPath || we.fieldMap || we.name, Fe),
                  onValidation: v[2] || (v[2] = (Fe, Ve) => Il()),
                  onOpenBanding: (Fe) => Ss("banding", y),
                  onOpenMachining: (Fe) => Cl(y),
                  onOpenFinish: (Fe) => Ss("finish", y),
                  onOpenPlaning: (Fe) => Ss("planing", y)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "orientation-model", "stock-grain", "material-options", "thickness-options", "banding-enabled", "onUpdate", "onOpenBanding", "onOpenMachining", "onOpenFinish", "onOpenPlaning"])) : ie("", !0)
              ]))), 128)),
              T(Se) === "development" && Gn ? (S(), F("div", Um, [
                D("button", {
                  class: Ee(["c-btn", { selected: Z.info === N }]),
                  style: at(vs.value),
                  type: "button",
                  onClick: (we) => Ss("info", y)
                }, " i ", 14, Ym)
              ])) : ie("", !0),
              D("div", Km, [
                D("button", {
                  disabled: T(r).inputShapes.value.length <= 1,
                  type: "button",
                  class: "delete",
                  "aria-label": `${T(U)("actions.remove")} ${T(Lu)(T(U)("woodwork.part"))}`,
                  onClick: (we) => T(h)(y.autoId)
                }, [
                  Ge(L, { icon: ["fass", "trash"] })
                ], 8, Zm)
              ]),
              Ge(T(s), {
                item: y,
                "num-columns": Qi.value
              }, null, 8, ["item", "num-columns"]),
              Z.banding === N && Re.options.length > 0 && xn.value ? (S(), Le(Ns, {
                key: 1,
                shape: y,
                "shape-index": N,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": Re.keys,
                "all-options": Re.options,
                pricing: Re.pricing,
                labels: Re.labels,
                locations: Oi.locations,
                "location-groups": Oi.groups,
                "user-friendly-field-map": T(Ut),
                "part-columns": Qi.value,
                "format-price": t.formatPrice,
                "find-extras-price": G.findExtrasPrice,
                "get-price": kn,
                "orientation-model": ue.orientationModel,
                "get-available-pricing-options": es,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : ie("", !0),
              Z.finish === N && qe.options.length > 0 && xn.value ? (S(), Le(Ns, {
                key: 2,
                shape: y,
                "shape-index": N,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": qe.keys,
                "all-options": qe.options,
                pricing: qe.pricing,
                labels: qe.labels,
                locations: Li.locations,
                "location-groups": Li.groups,
                "user-friendly-field-map": T(Ut),
                "part-columns": Qi.value,
                "format-price": t.formatPrice,
                "find-extras-price": G.findExtrasPrice,
                "get-price": kn,
                "orientation-model": ue.orientationModel,
                "get-available-pricing-options": es,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : ie("", !0),
              Z.planing === N && Je.options.length > 0 && xn.value && !0 ? (S(), Le(Ns, {
                key: 3,
                shape: y,
                "shape-index": N,
                "extra-type": "planing",
                "extra-label": "planing",
                "extra-keys": Je.keys,
                "all-options": Je.options,
                pricing: Je.pricing,
                labels: Je.labels,
                locations: Fi.locations,
                "location-groups": Fi.groups,
                "user-friendly-field-map": T(Ut),
                "part-columns": Qi.value,
                "format-price": t.formatPrice,
                "find-extras-price": G.findExtrasPrice,
                "get-price": kn,
                "orientation-model": ue.orientationModel,
                "get-available-pricing-options": es,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : ie("", !0),
              Z.info === N ? (S(), F("div", {
                key: 4,
                id: "shape-info",
                style: at({ "grid-column-end": "span " + Qi.value })
              }, [
                D("div", null, ne(y?.banding), 1),
                D("div", null, ne(Fa.value?.banding?.options || "No options"), 1)
              ], 4)) : ie("", !0)
            ]))), 128))
          ], 4),
          D("div", Jm, [
            t.readonly ? ie("", !0) : (S(), F("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${T(U)("actions.add")} ${T(U)("woodwork.part")}`,
              style: at(vs.value),
              onClick: v[3] || (v[3] = (y) => In())
            }, [
              Ge(L, { icon: ["fass", "plus-large"] }),
              ls(" " + ne(`${T(U)("actions.add")} ${T(U)("woodwork.part")}`), 1)
            ], 12, Xm)),
            D("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": T(U)("actions.calculate"),
              style: at(vs.value),
              disabled: !T(r).inputStock.value?.length || je.value,
              onClick: v[4] || (v[4] = (y) => jl())
            }, [
              Ge(L, { icon: ["fass", "calculator"] }),
              ls(ne(T(U)("actions.calculate")), 1)
            ], 12, Qm),
            t.readonly ? ie("", !0) : (S(), F("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": T(U)("actions.clear"),
              onClick: v[5] || (v[5] = (y) => Cn())
            }, [
              Ge(L, { icon: ["fass", "trash"] })
            ], 8, ey)),
            D("div", ty, ne(T(l)) + ne(ue?.maxParts ? "/" + ue.maxParts : ""), 1)
          ]),
          Ft.value && !t.readonly ? (S(), Le(T(a), {
            key: 2,
            ref: "import",
            "number-format": ue.numberFormat,
            "custom-fields": wn.value,
            "banding-options": Re.options,
            "banding-labels": Re.labels,
            "finish-options": qe.options,
            "finish-labels": qe.labels,
            onImport: Nl
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : ie("", !0),
          C.value ? (S(), F("div", iy, [
            O.value ? (S(), F("div", sy, ne(O.value), 1)) : ie("", !0),
            D("pre", ny, ne(k.value), 1)
          ])) : ie("", !0),
          (ue.enable.diagram ? je.value && !T(Q).complete : je.value || T(Q).complete) ? (S(), F("div", ay, [
            Ge(Lo, {
              size: 50,
              number: T(Q).shapeCount,
              complete: T(Q).complete,
              "show-number": ue.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : ie("", !0),
          hs(D("div", oy, [
            T(m)?.saw?.stockType !== "roll" ? (S(), F("div", ry, ne(T(m)?.stack?.number ? T(m).stack.number : 1), 1)) : ie("", !0),
            Ge(pg, {
              "element-id": "diagram",
              "number-format": ue.numberFormat,
              "decimal-places": ue.decimalPlaces,
              colors: ue.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [sn, ue.enable.diagram && T(Q).complete]
          ]),
          ue.enable.diagram && T(Y).length > 1 && T(Q).complete ? (S(), Le(Fp, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-auto-id": T(q),
            "stock-list": T(Y),
            onShowStock: T(z)
          }, null, 8, ["active-stock-auto-id", "stock-list", "onShowStock"])) : ie("", !0)
        ], 2)) : ie("", !0),
        T(Se) === "development" && Gn ? (S(), F("div", ly, [
          Ge(T(o), {
            data: [T(r)?.inputStock?.value[0]],
            paths: ["inputStock"]
          }, null, 8, ["data"]),
          v[8] || (v[8] = D("div", null, "Result data", -1)),
          Ge(T(o), {
            data: [ht.value?.parts?.[0]],
            paths: ["checkoutResult.parts"]
          }, null, 8, ["data"]),
          Ge(T(o), {
            data: [ht.value?.metadata],
            paths: ["checkoutResult.metadata"]
          }, null, 8, ["data"])
        ])) : ie("", !0)
      ]);
    };
  }
}), Kw = /* @__PURE__ */ Ot(cy, [["__scopeId", "data-v-8fb44daf"]]), gl = Ie(["select", "multiselect", "range", "boolean", "search"]), ml = Ie(["asc", "desc"]), yl = Ie(["grid", "list"]), uy = j({
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
  options: ae(j({
    label: p(),
    value: ye()
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
  availableFilters: ae(dy).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: ae(p()).default(["cost", "material", "t"]).describe("Sortable fields"),
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
  value: ye(),
  type: gl
});
j({
  // Active filters
  activeFilters: ae(py).default([]).describe("Currently active filters"),
  // Search
  searchQuery: p().default("").describe("Current search query"),
  // Sort
  sortBy: p().default("cost").describe("Current sort field"),
  sortOrder: ml.default("asc").describe("Current sort order"),
  // Display
  displayMode: yl.default("grid").describe("Current display mode"),
  currentPage: d().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: ae(p()).default([]).describe("IDs of selected stock items")
});
function gy() {
  return hy.parse({});
}
const my = /* @__PURE__ */ ze({
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
    return (i, s) => (S(), F(Me, null, [
      e.item.issues?.filter((n) => n.type === "error")?.length ? (S(), F("div", {
        key: 0,
        class: "group issues",
        style: at({
          "grid-column-end": "span " + e.numColumns
        })
      }, [
        D("pre", null, ne(e.item.issues.filter((n) => n.type === "error").flatMap((n) => T(Ui)(n.message)).join(`
`)), 1)
      ], 4)) : ie("", !0),
      e.item.issues?.filter((n) => n.type === "warning")?.length ? (S(), F("div", {
        key: 1,
        class: "group warnings",
        style: at({
          "grid-column-end": "span " + e.numColumns
        })
      }, [
        D("pre", null, ne(e.item.issues.filter((n) => n.type === "warning").flatMap((n) => T(Ui)(n.message)).join(`
`)), 1)
      ], 4)) : ie("", !0)
    ], 64));
  }
}), yy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: my }, Symbol.toStringTag, { value: "Module" })), pt = {
  precisionFixed: Dc,
  format: $c,
  select: ut,
  selectAll: No,
  scaleLinear: Et,
  scaleSequential: cs,
  axisTop: jo,
  axisBottom: zs,
  axisRight: Bo,
  axisLeft: Ws,
  symbol: Fc,
  path: Lc,
  arc: Oc,
  symbolTriangle: Ac,
  symbolSquare: Tc
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
  xScale = pt.scaleLinear();
  yScale = pt.scaleLinear();
  yScaleFlipped = pt.scaleLinear();
  measurementScale = pt.scaleLinear();
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
      if (this.el = pt.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = pt.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.longSide, this.shapeW = this.shape.shortSide, !this.svgCanvas)
        if (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null) {
          const e = this.el.append("svg").attr("class", "vis").attr("width", "100%").attr("height", "100%");
          if (e === null) return;
          this.svgCanvas = e;
        } else
          this.svgCanvas = pt.select(this.svgCanvas);
      this.loaded = !0;
    }
  }
  create() {
    if (!this.shape) return !1;
    const e = this.shouldShowAxes(), i = e ? this.edgePadding : 0, s = e ? this.edgePadding : 0, n = e ? this.axisPadding : 0, a = e ? this.axisPadding : 0;
    if (!this.shape.l || !this.shape.w || !this.w || !this.h || this.w - (i + n) < 0 || this.h - (a + s) < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createBanding(), e && (this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${a})`).attr("class", "axis x"), this.xAxis.call(
      pt.axisTop(this.xScale).ticks(10).tickSize(-this.h + (a + s))
    ), this.svgCanvas.selectAll(".axis.x .tick").each(function(o, r, l) {
      (r === 0 || r === l.length - 1) && pt.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - n}, 0)`).attr("class", "axis y"), this.yAxis.call(
      pt.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (i + n))
    ), this.svgCanvas.selectAll(".axis.y .tick").each(function(o, r, l) {
      (r === 0 || r === l.length - 1) && pt.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px"), console.log("Axes created:", { xAxis: !!this.xAxis, yAxis: !!this.yAxis })), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(e, i) {
    this.pointGroup.append("circle").attr("cx", this.xScale(e)).attr("cy", this.getYScale()(i)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    const e = this.shouldShowAxes(), i = e ? this.edgePadding : 0, s = e ? this.edgePadding : 0, n = e ? this.axisPadding : 0, a = e ? this.axisPadding : 0;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", i).attr("y", a).attr("width", this.w - (i + n)).attr("height", this.h - (a + s)), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", i).attr("y", a).attr("width", this.w - (i + n)).attr("height", this.h - (a + s)).style("fill", "url(#stripes)");
    const o = pt.path(), r = [], l = [];
    [0, 1, 2, 3].forEach((c) => {
      const f = this.shape.machining.getCorner(c);
      f && f.type ? (r.push(f.size ? X({ v: f.size ?? 0, o: this }) : 0), l.push(f.type)) : (r.push(0), l.push(null));
    });
    const u = (c, f, h, g, I) => {
      l[c] === "radius" ? o.arcTo(
        this.xScale(f),
        this.getYScale()(h),
        this.xScale(g),
        this.getYScale()(I),
        this.measurementScale(r[c])
      ) : l[c] === "bevel" ? o.lineTo(this.xScale(g), this.getYScale()(I)) : (o.lineTo(this.xScale(f), this.getYScale()(h)), o.lineTo(this.xScale(g), this.getYScale()(I)));
    };
    o.moveTo(this.xScale(0), this.getYScale()(r[0])), u(0, 0, 0, r[0], 0), (l[0] === "bevel" || l[1] === "bevel") && o.lineTo(this.xScale(this.shapeL - r[1]), this.getYScale()(0)), u(1, this.shapeL, 0, this.shapeL, r[1]), (l[1] === "bevel" || l[2] === "bevel") && o.lineTo(
      this.xScale(this.shapeL),
      this.getYScale()(this.shapeW - r[2])
    ), u(
      2,
      this.shapeL,
      this.shapeW,
      this.shapeL - r[2],
      this.shapeW
    ), (l[2] === "bevel" || l[3] === "bevel") && o.lineTo(this.xScale(r[3]), this.getYScale()(this.shapeW)), u(3, 0, this.shapeW, 0, this.shapeW - r[3]), o.closePath(), this.shapeGroup.append("path").attr("id", "shape").attr("d", o.toString());
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
    const i = -1, s = this.shouldShowAxes(), n = s ? this.edgePadding : 0, a = s ? this.axisPadding : 0, o = [];
    for (const l of oi)
      if (e[l])
        switch (l) {
          case "l1":
            o.push({
              x1: n - i,
              x2: n - i,
              y1: this.getYScale()(this.shape.machining.getCorner(0)?.size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.getCorner(3)?.size ?? 0)
              )
            });
            break;
          case "l2":
            o.push({
              x1: this.w - a + i,
              x2: this.w - a + i,
              y1: this.getYScale()(this.shape.machining.getCorner(1)?.size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.getCorner(2)?.size ?? 0)
              )
            });
            break;
          case "w1":
            o.push({
              x1: n + this.getCornerBandingSize(0),
              x2: this.w - a - this.getCornerBandingSize(1),
              y1: this.getYScale()(0) + (this.currentSide === 0 ? i : -i),
              y2: this.getYScale()(0) + (this.currentSide === 0 ? i : -i)
            });
            break;
          case "w2":
            o.push({
              x1: n + this.getCornerBandingSize(3),
              x2: this.w - a - this.getCornerBandingSize(2),
              y1: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -i : i),
              y2: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -i : i)
            });
            break;
        }
    this.bandingGroup.selectAll("line").data(o).join("line").attr("class", "banding").attr("x1", (l) => l.x1).attr("x2", (l) => l.x2).attr("y1", (l) => l.y1).attr("y2", (l) => l.y2).attr("stroke-width", this.bandingStrokeWidth);
    const r = pt.path();
    [0, 1, 2, 3].forEach((l) => {
      const u = this.shape.machining.getCorner(l);
      if (!u?.type) return;
      let c, f, h;
      switch (l) {
        case 0:
          if (!Te(e.sides.a) || e.sides.a === !1) return;
          c = {
            x: this.xScale(0) - i,
            y: this.getYScale()(X({ v: u.size ?? 0, o: this }))
          }, f = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, h = {
            x: this.xScale(X({ v: u.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? i : -i)
          };
          break;
        case 1:
          if (!Te(e.sides.b) || e.sides.b === !1) return;
          c = {
            x: this.xScale(this.shapeL - X({ v: u.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? i : -i)
          }, f = {
            x: this.xScale(this.shapeL) - i,
            y: this.getYScale()(0)
          }, h = {
            x: this.xScale(this.shapeL) + i,
            y: this.getYScale()(X({ v: u.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!Te(e.sides.c) || e.sides.c === !1) return;
          c = {
            x: this.xScale(this.shapeL) + i,
            y: this.getYScale()(this.shapeW - X({ v: u.size ?? 0, o: this }))
          }, f = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, h = {
            x: this.xScale(this.shapeL - X({ v: u.size ?? 0, o: this })) - i,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? i : -i)
          };
          break;
        case 3:
          if (!Te(e.sides.d) || e.sides.d === !1) return;
          c = {
            x: this.xScale(X({ v: u.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? i : -i)
          }, f = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, h = {
            x: this.xScale(0) - i,
            y: this.getYScale()(this.shapeW - X({ v: u.size ?? 0, o: this })) + i
          };
          break;
        default:
          return;
      }
      if (r.moveTo(c.x, c.y), u.type === "radius")
        switch (r.arcTo(
          f.x,
          f.y,
          h.x,
          h.y,
          this.measurementScale(u.size ?? 0)
        ), l) {
          case 0:
          case 2:
            r.lineTo(h.x + i, h.y);
            break;
          case 1:
          case 3:
            r.lineTo(h.x, h.y - (this.currentSide === 0 ? i : -1));
            break;
        }
      else u.type === "bevel" && r.lineTo(h.x, h.y);
      this.bandingGroup.append("path").attr("class", () => `banding corner ${["a", "b", "c", "d"][l]}`).attr("stroke-width", this.bandingStrokeWidth).attr("d", r.toString());
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
        pt.axisRight(n).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (i + s))
      ), this.svgCanvas.selectAll(".axis.y .tick").each(function(a, o, r) {
        (o === 0 || o === r.length - 1) && pt.select(this).select("line").style("display", "none");
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
    const i = this.shouldShowAxes(), s = i ? this.edgePadding : 0, n = i ? this.edgePadding : 0, a = i ? this.axisPadding : 0, o = i ? this.axisPadding : 0;
    if (this.w - (s + a) < 0) return;
    let r = window.innerHeight - (o + n) - 20;
    r > 600 && (r = 600), this.xScale.domain([0, this.shapeL]).range([s, this.w - a]), e > 0.3 ? this.h = this.xScale(this.shape.shortSide) + o : (e = 0.3, this.h = this.w * e), this.h > r && (this.h = r, this.w = this.h / e, this.xScale.domain([0, this.shapeL]).range([s, this.w - a])), this.yScale.domain([this.shapeW, 0]).range([o, this.h - n]), this.yScaleFlipped.domain([0, this.shapeW]).range([o, this.h - n]), this.measurementScale.domain([0, this.shapeL]).range([0, this.w - (s + a)]), this.HTMLElement.style.height = this.h + "px", this.HTMLElement.style.width = this.w + "px", this.svgCanvas && this.svgCanvas.attr("width", this.w).attr("height", this.h).attr("viewBox", `0 0 ${this.w} ${this.h}`), this.create();
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
}, Ty = { class: "grid-table" }, Ay = { class: "row table-heading" }, Oy = {
  key: 0,
  class: "cell id"
}, Ly = {
  key: 0,
  class: "cell"
}, Fy = { class: "id" }, $y = { class: "cell" }, Dy = ["onClick"], Ey = {
  key: 6,
  class: "menu-prompt"
}, Ry = !1, _y = /* @__PURE__ */ ze({
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
    const i = ji(() => Promise.resolve().then(() => La)), s = t, n = e, a = "production", o = oe(), r = ee(() => pl(se.value)), l = ee(() => {
      if (!f.value?.length) return 0;
      if (te.value === "banding") return 1;
      let fe = Object.values(c.value).filter((pe) => pe.enabled).length;
      return fe += 2, fe;
    }), u = ee(() => {
      if (!f.value.length || te.value === "banding") return;
      const fe = {
        id: "34px",
        del: "30px"
      }, pe = [];
      return f.value.forEach((ue) => {
        const Pe = c.value[ue];
        Pe.enabled && pe.push(Pe.w ?? "1fr");
      }), pe.unshift(fe.id), pe.push(fe.del), pe.join(" ");
    }), c = ee(() => !te.value || te.value === "banding" ? null : Lt[te.value]), f = ee(() => !te.value || te.value === "banding" ? [] : Object.keys(Lt[te.value]).filter((fe) => Lt[te.value][fe].enabled)), h = ee(() => te.value ? E() : []), g = ee(() => {
      const fe = se.value?.machining?.corners?.map((pe) => pe?.isPresent?.() ? pe.getCorner() : null)?.filter((pe) => pe) ?? [];
      return [...oi, ...fe];
    }), I = (fe = !0) => {
      fe ? ht.value = fe : gt(() => ht.value = !1);
    }, R = () => {
      Q(), K(), w(), V();
    }, B = (fe) => {
      if (te.value === "corners")
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
    }, A = () => te.value !== "banding", x = (fe, pe = null) => {
      if (!fe?.length) return [];
      let ue = "None";
      pe === "depth" && (ue = "Through");
      const Pe = [{ label: ue, value: null }];
      return fe.forEach((it) => {
        const C = it.toString().charAt(0).toUpperCase() + it.toString().slice(1);
        Pe.push({ label: C, value: it });
      }), Pe;
    }, E = () => {
      if (!te.value) return [];
      if (te.value === "banding") return [];
      const fe = se.value.machining[te.value];
      return Array.isArray(fe) ? fe : [fe];
    };
    let P = null;
    const $ = () => {
      if (!se.value || !o.value) {
        console.warn("Missing shape or diagram ref for vis initialization");
        return;
      }
      console.log("Initializing vis with diagramRef:", o.value), P = new by({
        HTMLElement: o.value,
        shape: se.value,
        vueComponent: null
      }), P.init(), P.updateSize(), Ct.value = !0;
    }, Y = Jl(() => {
      Ct.value && P && P.updateSize();
    }, 10);
    Ro(o, () => {
      Y();
    });
    const M = () => {
      wt.value = wt.value === 0 ? 1 : 0, P.flip();
    }, le = () => {
      switch (te.value) {
        case "holes":
          q();
          break;
        case "hingeHoles":
          m();
          break;
        case "corners":
          z();
          break;
      }
    }, q = () => {
      se.value.machining.addHole({
        x: X({ v: se.value.longSide }) / 2,
        y: X({ v: se.value.shortSide }) / 2,
        diameter: s.options.holes.defaultDiameter ?? 1,
        depth: s.options.holes.defaultDepth ?? X({ v: se.value.t }) ?? 0,
        face: wt.value
      }), P.createHoles();
    }, m = () => {
      se.value.machining.addHingeHole({
        numHoles: 3,
        position: 0,
        diameter: s.options.holes.defaultDiameter ?? 0,
        depth: s.options.holes.defaultDepth ?? 0,
        side: "x1",
        face: wt.value,
        distanceFromEdge: s.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: s.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: s.options.hingeHoles.minimumHoleDistance,
        hingeLength: s.options.hingeHoles.defaultHingeLength
      }), P.createHingeHoles();
    }, z = () => {
      const fe = s.options.corners.types?.[0] || "radius", pe = s.options.corners.minValue || 5;
      for (let ue = 0; ue < 4; ue++)
        se.value.machining.setCorner({
          index: ue,
          type: fe,
          size: pe
        });
      P.createCorners();
    }, Q = () => {
      se.value.machining.holes.length = 0;
    }, K = () => {
      se.value.machining.hingeHoles.length = 0;
    }, w = () => {
      se.value.machining.corners.forEach((fe) => {
        fe.size = null, fe.type = null;
      }), se.value.banding.sides.a = !1, se.value.banding.sides.b = !1, se.value.banding.sides.c = !1, se.value.banding.sides.d = !1;
    }, V = () => {
      se.value.banding = {
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
    }, H = (fe) => {
      switch (te.value) {
        case "holes":
          return se.value.machining.holes.splice(fe, 1);
        case "hingeHoles":
          return se.value.machining.hingeHoles.splice(fe, 1);
        case "corners":
          se.value.machining.corners[fe].size = null, se.value.machining.corners[fe].type = null;
          return;
      }
    }, G = () => {
      switch (te.value) {
        case "holes":
          return Q();
        case "hingeHoles":
          return K();
        case "corners":
          return w();
      }
    }, W = () => {
      if (je.value = [], !!s.options.banding.enabled) {
        I();
        for (const fe in se.value.banding)
          se.value.banding[fe] ? s.options.banding.enableTypes && s.options.banding.types?.length && (se.value.banding[fe] || je.value.push({
            index: fe,
            message: "Please select a type"
          })) : se.value.banding[fe] = "";
        I(!1);
      }
    }, de = (fe) => {
      const pe = je.value.filter((ue) => ue.index === fe);
      return pe.length ? pe.map((ue) => ue.message) : [];
    }, Se = (fe) => {
      const pe = je.value.filter((Pe) => Pe.index === fe && Pe?.fields), ue = pe.flatMap((Pe) => Pe.fields);
      return pe.length ? ue : [];
    }, ke = (fe, pe) => {
      const ue = Se(fe);
      return ue?.length ? ue.includes(pe) : !1;
    }, Ce = () => n("close"), _e = (fe) => fe && typeof fe.disabled == "function" ? fe.disabled : !1, se = Zl(t, "inputShape");
    if (!se.value?.machining)
      throw new Error("Machining component requires a shape with machining initialized");
    const lt = oe(!1), Ct = oe(!1), ht = oe(!1), wt = oe(0), te = oe(null), je = oe([]), Lt = St({
      holes: {
        x: {
          enabled: !0,
          type: "unitDependent",
          label: U("woodwork.x"),
          required: !0
        },
        y: {
          enabled: !0,
          type: "unitDependent",
          label: U("woodwork.y"),
          required: !0
        },
        diameter: {
          enabled: !0,
          type: s.options.holes.diameters?.length ? "select" : "unitDependent",
          label: U("machining.diameter"),
          output: s.options.holes.diameters?.length ? "float" : void 0,
          options: s.options.holes.diameters?.length ? x(s.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: s.options.holes.enableDepth && typeof se.value.t < "u" && X({ v: se.value.t }) > 0,
          required: !1,
          type: s.options.holes.depths?.length ? "select" : "unitDependent",
          output: s.options.holes.depths?.length ? "float" : void 0,
          options: s.options.holes.depths?.length ? x(s.options.holes.depths) : void 0
        },
        face: {
          required: !0,
          enabled: s.options.faces.enabled,
          type: "select",
          output: "integer",
          options: [
            {
              label: U("faces.a"),
              value: 0
            },
            {
              label: U("faces.a"),
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
          label: U("machining.hinge_length"),
          min: 0
        },
        outerSpacing: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: U("machining.outer_spacing"),
          min: 0
        },
        distanceFromEdge: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: U("machining.distance_from_edge"),
          min: 0
        },
        //[] separate option for hinges
        depth: {
          enabled: s.options.holes.enableDepth && typeof se.value.t < "u" && X({ v: se.value.t }) > 0,
          required: !1,
          type: s.options.holes.depths?.length ? "select" : "unitDependent",
          output: s.options.holes.depths?.length ? "float" : void 0,
          options: s.options.holes.depths?.length ? x(s.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: s.options.holes.diameters?.length ? "select" : "unitDependent",
          label: U("machining.diameter"),
          output: s.options.holes.diameters?.length ? "float" : void 0,
          options: s.options.holes.diameters?.length ? x(s.options.holes.diameters) : void 0
        },
        numHoles: {
          enabled: !0,
          required: !0,
          type: "integer",
          label: U("machining.num_holes"),
          min: 2
        },
        face: {
          enabled: s.options.faces.enabled,
          type: "select",
          required: !0,
          output: "integer",
          options: [
            {
              label: U("faces.a"),
              value: 0
            },
            {
              label: U("faces.b"),
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
              label: U("sides.w1"),
              value: "x1"
            },
            {
              label: U("sides.w2"),
              value: "x2"
            },
            {
              label: U("sides.l1"),
              value: "y1"
            },
            {
              label: U("sides.l2"),
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
          label: U("machining.type"),
          type: "select",
          output: "string",
          options: x(s.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: U("machining.size"),
          type: "unitDependent",
          min: () => typeof s.options.corners.minValue < "u" ? X({ v: s.options.corners.minValue, o: s.options }) : 0,
          max: () => typeof s.options.corners.maxValue < "u" ? X({ v: s.options.corners.maxValue, o: s.options }) : X({ v: se.value.shortSide, o: s.options }) / 2
        }
      }
    }), Ft = St({
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
    }), Ji = (fe) => {
      fe.target === fe.currentTarget && Ce();
    }, yt = () => !(!se?.value?.machining || !lt.value || ht.value);
    return We(() => se.value?.autoId, () => {
      yt() && $();
    }), We(() => se.value?.id, () => {
      yt() && $();
    }), We(te, (fe) => {
      if (!yt()) return;
      if (fe === "banding") {
        I(), W(), I(!1);
        return;
      }
      if (!fe) {
        je.value = [];
        return;
      }
      I();
      const pe = se.value.machining.validate(
        se.value,
        fe,
        Ft?.[fe]
      );
      je.value = pe?.map((ue, Pe) => ({
        index: Pe,
        message: ue.message || "Validation error",
        fields: ue.field || []
      })) || [], I(!1);
    }, { deep: !0, immediate: !0 }), We(() => se?.value?.machining?.holes, () => {
      if (!yt()) return;
      I();
      const fe = se.value.machining.validate(
        se.value,
        "holes",
        Ft?.holes
      );
      je.value = fe?.map((pe, ue) => ({
        index: ue,
        message: pe.message || "Validation error",
        fields: pe.field || []
      })) || [], P.createHoles(), I(!1);
    }, { deep: !0, immediate: !0 }), We(() => se?.value?.machining?.hingeHoles, () => {
      if (!yt()) return;
      I();
      const fe = se.value.machining.validate(
        se.value,
        "hingeHoles",
        Ft?.hingeHoles
      );
      je.value = fe?.map((pe, ue) => ({
        index: ue,
        message: pe.message || "Validation error",
        fields: pe.field || []
      })) || [], P.createHingeHoles(), I(!1);
    }, { deep: !0, immediate: !0 }), We(() => se?.value?.machining?.corners, () => {
      if (!yt()) return;
      I();
      const fe = se.value.machining.validate(
        se.value,
        "corners",
        Ft?.corners
      );
      je.value = fe?.map((pe, ue) => ({
        index: ue,
        message: pe.message || "Validation error",
        fields: pe.field || []
      })) || [], se.value.machining.validate(se.value, "holes"), se.value.machining.validate(se.value, "hingeHoles"), P.createShape(), P.createHoles(), P.createHingeHoles();
      for (const pe of se.value.machining.corners)
        se.value.banding && pe?.getCorner && (se.value.banding[pe.getCorner()] = "");
      P.createBanding(), I(!1);
    }, { deep: !0, immediate: !0 }), We(() => se?.value?.banding, () => {
      yt() && (W(), P.createBanding());
    }, { deep: !0, immediate: !0 }), Zt(() => {
      if (document.body.style.overflow = "hidden", !se.value || !se.value.l || !se.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      gt(() => $()), lt.value = !0;
    }), ps(() => document.body.style.overflow = ""), (fe, pe) => {
      const ue = vi("FontAwesomeIcon");
      return S(), Le(la, { to: "body" }, [
        D("section", {
          id: "smartcut-machining",
          class: "smartcut-content",
          onClick: Ji
        }, [
          D("div", vy, [
            D("div", wy, [
              T(a) === "development" && Ry ? (S(), F("div", Sy, [
                Ge(T(i), {
                  data: [se.value.machining],
                  paths: ["shape.machining"]
                }, null, 8, ["data"])
              ])) : ie("", !0),
              D("button", {
                class: "c-btn close",
                type: "button",
                onClick: pe[0] || (pe[0] = (Pe) => Ce())
              }, "×"),
              se.value?.name ? (S(), F("div", xy, ne(se.value.name), 1)) : ie("", !0),
              D("div", ky, ne(se.value?.l) + " x " + ne(se.value?.w) + " " + ne(se.value?.t ? "x " + se.value?.t : null), 1),
              t.options.faces.enabled ? (S(), F("div", Iy, [
                D("div", {
                  ref: "sides",
                  class: Ee(["sides", { flipped: wt.value === 1 }]),
                  onClick: M
                }, [...pe[6] || (pe[6] = [
                  D("div", { class: "side-a" }, " A ", -1),
                  D("div", { class: "side-b" }, " B ", -1)
                ])], 2),
                pe[7] || (pe[7] = D("div", { class: "text" }, " [Click to flip] ", -1))
              ])) : ie("", !0),
              r.value ? (S(), F("button", {
                key: 3,
                class: "c-btn c-btn--delete",
                type: "button",
                onClick: R
              }, " Delete all machining ")) : ie("", !0),
              D("div", Py, [
                t.options.holes.enabled ? (S(), F("div", {
                  key: 0,
                  class: Ee({ selected: te.value === "holes" }),
                  onClick: pe[1] || (pe[1] = (Pe) => te.value = "holes")
                }, " Holes ", 2)) : ie("", !0),
                t.options.hingeHoles.enabled ? (S(), F("div", {
                  key: 1,
                  class: Ee({ selected: te.value === "hingeHoles" }),
                  onClick: pe[2] || (pe[2] = (Pe) => te.value = "hingeHoles")
                }, " Hinge holes ", 2)) : ie("", !0),
                t.options.corners.enabled ? (S(), F("div", {
                  key: 2,
                  class: Ee({ selected: te.value === "corners" }),
                  onClick: pe[3] || (pe[3] = (Pe) => te.value = "corners")
                }, " Corners ", 2)) : ie("", !0),
                t.options.banding.enabled ? (S(), F("div", {
                  key: 3,
                  class: Ee({ selected: te.value === "banding" }),
                  onClick: pe[4] || (pe[4] = (Pe) => te.value = "banding")
                }, " Banding ", 2)) : ie("", !0)
              ]),
              te.value === "holes" || te.value === "hingeHoles" || te.value && te.value !== "banding" ? (S(), F("div", Cy, [
                te.value === "holes" || te.value === "hingeHoles" || te.value === "corners" ? (S(), F("button", {
                  key: 0,
                  class: "c-btn",
                  type: "button",
                  onClick: le
                }, " Create ")) : ie("", !0),
                te.value && te.value !== "banding" ? (S(), F("button", {
                  key: 1,
                  class: "c-btn c-btn--delete",
                  type: "button",
                  onClick: G
                }, " Delete all ")) : ie("", !0)
              ])) : ie("", !0),
              D("div", Ty, [
                te.value === "banding" && se.value ? (S(), Le(Ns, {
                  key: 0,
                  shape: se.value,
                  "onUpdate:shape": pe[5] || (pe[5] = (Pe) => se.value = Pe),
                  "extra-type": "banding",
                  "extra-label": "Banding",
                  "extra-keys": g.value,
                  labels: t.options.banding.labels,
                  "all-options": t.options.banding.options,
                  "user-friendly-field-map": T(Ut),
                  "part-columns": 1,
                  "allow-custom-names": !0,
                  "enable-pricing": !0,
                  pricing: t.options.banding.pricing,
                  "get-price": t.getExtrasPrice,
                  "format-price": t.formatPrice,
                  "get-available-pricing-options": t.getAvailablePricingOptions
                }, null, 8, ["shape", "extra-keys", "labels", "all-options", "user-friendly-field-map", "pricing", "get-price", "format-price", "get-available-pricing-options"])) : ie("", !0)
              ]),
              te.value !== "banding" && h.value.length ? (S(), F("div", {
                key: 5,
                class: Ee(["grid-table", te.value]),
                style: at({ "grid-template-columns": u.value })
              }, [
                D("div", Ay, [
                  A() ? (S(), F("div", Oy)) : ie("", !0),
                  (S(!0), F(Me, null, Ye(c.value, (Pe, it) => hs((S(), F("div", {
                    key: it,
                    class: "cell"
                  }, ne(Pe.label ?? it), 1)), [
                    [sn, Pe.enabled]
                  ])), 128)),
                  pe[8] || (pe[8] = D("div", { class: "cell" }, null, -1))
                ]),
                (S(!0), F(Me, null, Ye(h.value, (Pe, it) => (S(), F("div", {
                  key: it,
                  class: "row"
                }, [
                  A() ? (S(), F("div", Ly, [
                    D("div", Fy, ne(B(it)), 1)
                  ])) : ie("", !0),
                  (S(!0), F(Me, null, Ye(f.value, (C, O) => (S(), F("div", {
                    key: O,
                    class: "cell"
                  }, [
                    Ge(Ci, {
                      type: c.value[C].type,
                      id: C + "-" + O,
                      warning: ke(it, C),
                      "enable-label": !1,
                      placeholder: c.value[C].label ?? C,
                      disabled: _e(c.value[C]),
                      value: T(pi)(Pe, C),
                      output: c.value[C].output,
                      options: c.value[C].options,
                      "onUpdate:value": (k) => T(Mi)(Pe, C, k)
                    }, null, 8, ["type", "id", "warning", "placeholder", "disabled", "value", "output", "options", "onUpdate:value"])
                  ]))), 128)),
                  D("div", $y, [
                    D("button", {
                      class: "c-btn delete",
                      type: "button",
                      onClick: (C) => H(it)
                    }, [
                      Ge(ue, { icon: ["fass", "trash"] })
                    ], 8, Dy)
                  ]),
                  (S(!0), F(Me, null, Ye(de(it), (C, O) => (S(), F("div", {
                    key: O,
                    class: "group validation",
                    style: at({ "grid-column-end": "span " + l.value })
                  }, ne(C), 5))), 128))
                ]))), 128))
              ], 6)) : te.value ? ie("", !0) : (S(), F("div", Ey, "Please select from the menu above"))
            ]),
            D("div", {
              id: "machining-diagram",
              class: Ee(["diagram", { flipped: wt.value === 1 }]),
              ref_key: "diagramRef",
              ref: o
            }, null, 2)
          ])
        ])
      ]);
    };
  }
}), My = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: _y }, Symbol.toStringTag, { value: "Module" })), jy = {
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
        } catch (r) {
          console.error(r), alert(`Error reading file ${i + 1}`);
          return;
        }
        const a = {
          data: n,
          name: s.name
        };
        this.files.push(a);
        const o = i / e.length * 100;
        this.loadingProgress = o;
      }
      this.$emit("drop", structuredClone(this.files)), this.files.length = 0;
    },
    eventHandler(t) {
      this.dropClass = t?.type ?? null, t.preventDefault();
    }
  }
};
function By(t, e, i, s, n, a) {
  return S(), F("div", {
    id: "drop",
    class: Ee({ thinking: i.thinking, [n.dropClass]: !0 }),
    onDrop: e[0] || (e[0] = _o((...o) => a.onDrop && a.onDrop(...o), ["prevent"]))
  }, [
    D("div", null, ne(i.thinking ? "Loading, please wait..." : i.label), 1)
  ], 34);
}
const Ny = /* @__PURE__ */ Ot(jy, [["render", By]]), Vy = { id: "import-file" }, Gy = /* @__PURE__ */ ze({
  __name: "ImportCSV",
  props: {
    numberFormat: {
      type: String,
      default: "decimal"
    },
    bandingOptions: {
      type: Object,
      default: () => ({})
    },
    finishOptions: {
      type: Object,
      default: () => ({})
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
    const i = t, s = e, n = oe([]), a = oe([]), o = oe([]), r = oe([]), l = oe({}), u = oe([]), c = oe(!1), f = oe(null), h = oe(null), g = [
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
    ], I = ee(() => {
      const w = {};
      return n.value.forEach((V, H) => {
        w[H] = {};
        for (const [G, W] of Object.entries(V)) {
          if (!g.includes(G)) continue;
          const de = A(G, W);
          (de === !0 || de === !1) && (w[H][G] = de);
        }
      }), w;
    }), R = ee(() => i.customFields.map((w) => w.label)), B = (w, V) => {
      if (V) {
        const H = Object.keys(V), G = [[]];
        H.forEach((de) => {
          const Se = V[de], ke = [];
          G.forEach((Ce) => {
            Se.forEach((_e) => ke.push([...Ce, _e]));
          }), G.splice(0, G.length, ...ke);
        });
        const W = /* @__PURE__ */ new Set();
        G.forEach((de) => W.add(de.join("|").toLowerCase())), w === "banding" ? f.value = W : h.value = W;
      }
    }, A = (w, V) => {
      if (V === "???") return !0;
      function H(W) {
        return W ? (W = W?.trim()?.toLowerCase(), W === "l" || W === "w") : !0;
      }
      const G = {
        banding: (W) => x(W, f.value, "banding"),
        finish: (W) => x(W, h.value, "finish"),
        orientationLock: H
      };
      return w in G ? G[w](V) : null;
    }, x = (w, V, H) => {
      if (w = m(w), !w) return !0;
      const G = w.split(","), W = G.every((de) => !de || V.has(de.toLowerCase()));
      if (!W) {
        const de = G.filter((Se) => !V.has(Se.toLowerCase()));
        console.log(`Valid ${H} choices...`), console.table(Array.from(V)), console.log(`The following ${H} choices are invalid`, de);
      }
      return W;
    }, E = (w, V) => {
      const H = {
        bandingOptions: (G) => P(G, i.bandingOptions, i.bandingLabels, ["y1", "y2", "x1", "x2"]),
        finishOptions: (G) => P(G, i.finishOptions, i.finishLabels, ["a", "b"])
      };
      return w in H ? H[w](V) : null;
    }, P = (w, V, H, G) => {
      if (w = m(w), !w)
        return G.reduce((Se, ke) => ({ ...Se, [ke]: {} }), {});
      const W = w.split(",").map((Se) => Se.toLowerCase()), de = {};
      return G.forEach((Se, ke) => {
        de[Se] = {}, Object.keys(V).forEach((Ce, _e) => {
          de[Se][H[_e]] = W[ke]?.split("|")[_e] || "";
        });
      }), de;
    }, $ = () => n.value.map((w, V) => ({
      l: i.numberFormat === "decimal" ? Rs(w.l) : w.l,
      w: i.numberFormat === "decimal" ? Rs(w.w) : w.w,
      t: i.numberFormat === "decimal" ? Rs(w.t) : w.t,
      q: w.q,
      orientationLock: w.orientationLock,
      name: w.name,
      material: w.material,
      bandingOptions: I.value[V].banding ? E("bandingOptions", w.banding) : null,
      finishOptions: I.value[V].finish ? E("finishOptions", w.finish) : null,
      numberFormat: i.numberFormat,
      customData: Q(w)
    })), Y = (w) => {
      const V = w?.[0]?.data;
      V && Ec.parse(V, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (H) => M(H),
        error: () => s("error")
      });
    }, M = (w) => {
      a.value = w.data.filter((V) => V.some((H) => H)), o.value = a.value[0], l.value = {};
      for (let V = o.value.length; V--; ) {
        const H = o.value[V], G = le(H);
        G ? l.value[V] = G : (l.value[V] = null, R.value.includes(H) && (l.value[V] = "customData." + i.customFields.find((W) => W.label === H).id));
      }
      q(), a.value.shift(), z(), K();
    }, le = (w) => {
      const V = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", U("l"), U("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", U("w"), U("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", U("t"), U("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", U("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", U("quantity"), U("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", U("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", U("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", U("banding")],
        finish: ["finish", "paint"]
      }, H = Object.entries(V).reduce(
        (G, [W, de]) => (de.some((Se) => w && w.toLowerCase() === Se) && G.push(W), G),
        []
      );
      return H.length > 1 ? null : H[0];
    }, q = () => {
      c.value = !1, r.value = Object.values(l.value).map((V) => !V || V === "N" ? null : g.includes(V) ? V : (c.value = !0, null));
      const w = r.value.filter((V, H) => r.value.indexOf(V) !== H);
      u.value = w.map((V) => r.value.reduce(
        (H, G, W) => (G && G === V && H.push(W), H),
        []
      ));
    }, m = (w) => w && w.replace(/\s*,\s*/g, ","), z = () => {
      const w = a.value.map((V) => {
        const H = {};
        return o.value.forEach((G, W) => {
          if (u.value.flat().includes(W))
            return H[l.value[W]] = "???";
          H[l.value[W]] = V[W];
        }), H;
      });
      n.value = w;
    }, Q = (w) => {
      let V = {};
      for (let H in w)
        if (H.startsWith("customData.")) {
          let G = H.slice(11);
          V[G] = w[H];
        }
      return V;
    }, K = () => {
      const w = $();
      w?.length && s("import", w);
    };
    return Zt(() => {
      B("banding", i.bandingOptions), B("finish", i.finishOptions);
    }), (w, V) => (S(), F("div", Vy, [
      Ge(Ny, {
        label: T(U)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: Y
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
  const o = vi("ObjectViewer", !0);
  return S(), F("div", Wy, [
    (S(!0), F(Me, null, Ye(i.data, (r, l) => (S(), F("div", {
      key: l,
      class: "array-item"
    }, [
      D("div", {
        class: "item-header",
        onClick: (u) => a.toggle(l)
      }, [
        D("div", Uy, ne(n.expanded[l] ? "▼" : "▶"), 1),
        D("div", Yy, ne(i.paths[l] || l), 1)
      ], 8, Hy),
      n.expanded[l] ? (S(), F("div", Ky, [
        (S(!0), F(Me, null, Ye(r, (u, c) => (S(), F("div", {
          key: c,
          class: "property-item"
        }, [
          !a.isObjectOrArray(u) || u === null || Array.isArray(u) ? (S(), F("div", Zy, ne(c) + ": ", 1)) : ie("", !0),
          D("div", {
            class: Ee(["value", a.getValueType(u)])
          }, [
            a.isObjectOrArray(u) && u !== null ? (S(), Le(o, {
              key: 0,
              data: Array.isArray(u) ? u : [u],
              paths: a.getArrayPaths(u, c),
              root: !1
            }, null, 8, ["data", "paths"])) : u === null ? (S(), F("span", Jy, "null")) : (S(), F("span", Xy, ne(a.formatValue(u)), 1))
          ], 2)
        ]))), 128))
      ])) : ie("", !0)
    ]))), 128))
  ]);
}
const eb = /* @__PURE__ */ Ot(zy, [["render", Qy]]), La = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: eb }, Symbol.toStringTag, { value: "Module" })), tb = {
  key: 0,
  class: "debug"
}, ib = { id: "formula-pricing" }, sb = {
  key: 1,
  class: "extras"
}, nb = { class: "heading" }, ab = { id: "hardware-total" }, ob = { class: "heading panels" }, rb = !1, lb = /* @__PURE__ */ ze({
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
    const i = ji(() => Promise.resolve().then(() => La)), s = t, n = e, a = Ql("calculator"), o = ee(() => a()), r = oe("production");
    let l = null;
    const u = oe(null), c = oe([]), f = oe(!1), h = oe(""), g = ee(() => {
      if (!f.value || !c.value.length || c.value.every((M) => M.value === null)) return null;
      const Y = E();
      return gt(() => n("panel-result", Y)), Y;
    }), I = ee(() => {
      if (!o.value || !f.value || !c.value.length || c.value.every((M) => M.value === null)) return;
      const Y = P();
      return gt(() => n("hardware-result", Y, R.value)), Y;
    }), R = ee(() => {
      if (I.value)
        return Object.values(I.value).reduce((Y, M) => Y + M.totalCost, 0);
    });
    We(g, (Y) => {
      if (!f.value || !Y || !o.value || !o.value?.inputShapes) return;
      const M = (m) => m?.name ? m.name.toLowerCase() : "", le = new Map(
        o.value.inputShapes.map((m) => [M(m), m])
      ), q = /* @__PURE__ */ new Set();
      for (const m of Object.values(g.value)) {
        if (!m.name) continue;
        const z = M(m), Q = le.get(z), K = {
          ...m,
          name: m.name.toUpperCase() || Q?.name.toUpperCase(),
          material: m.material?.toUpperCase() || Q?.material?.toUpperCase(),
          bandingOptions: m.bandingOptions || {},
          finishOptions: m.finishOptions || {},
          orientationLock: m.orientationLock || null,
          notes: h.value,
          readonly: !0
        }, w = Q || o.value.createInputShape(K);
        if (Q) {
          Object.assign(Q, K);
          for (const V of ["banding", "finish"])
            o.value.initExtrasOptions(Q, V);
        } else
          o.value.inputShapes.push(w);
        q.add(z);
      }
      o.value.inputShapes = o.value.inputShapes.filter(
        (m) => q.has(M(m))
      );
    }, { immediate: !1 }), Zt(() => $());
    const B = (Y) => {
      s.debug && console.log(Y);
    }, A = () => {
      c.value = Object.values(u.value.inputs).map((Y) => ({
        value: Y.default ?? null
      })), console.log(c.value);
    }, x = (Y, M) => {
      c.value[Y] && (c.value[Y].value = M);
    }, E = () => {
      try {
        return l.calculatePanelsFromFields(c.value);
      } catch (Y) {
        return o.value.inputShapes.length = 0, console.error(Y), null;
      }
    }, P = () => {
      try {
        return l.calculateHardwareFromFields(c.value);
      } catch (Y) {
        return console.error(Y), null;
      }
    }, $ = async () => {
      if (!s.url && !s.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      s.url ? (B(`SmartCut - Formula calculator init from url: ${s.url}`), l = new ra({ url: s.url }), u.value = await l.getSpec()) : s.spec && (B("SmartCut - Formula calculator init with JSON"), l = new ra({ spec: s.spec }), u.value = await l.getSpec()), A(), f.value = !0;
    };
    return (Y, M) => (S(), F(Me, null, [
      r.value === "development" && rb ? (S(), F("div", tb, [
        M[1] || (M[1] = D("div", null, "Developer information", -1)),
        Ge(T(i), {
          data: [g.value],
          paths: ["panelResult"]
        }, null, 8, ["data"])
      ])) : ie("", !0),
      D("div", ib, [
        u.value?.projectName ? (S(), Le(Ci, {
          key: 0,
          id: "project-name",
          type: "string",
          label: "Project name",
          placeholder: "Name",
          value: h.value,
          "onUpdate:value": M[0] || (M[0] = (le) => h.value = le)
        }, null, 8, ["value"])) : ie("", !0),
        (S(!0), F(Me, null, Ye(u.value?.inputs, (le, q, m) => (S(), Le(Ci, {
          id: "formula-field-" + m,
          key: m,
          type: le.type,
          label: le.label,
          placeholder: le.label,
          min: le.min ?? 0,
          max: le.max ?? null,
          default: le.default ?? 0,
          value: c.value[m]?.value,
          "onUpdate:value": (z) => x(m, z)
        }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]))), 128)),
        I.value ? (S(), F("div", sb, [
          D("div", nb, ne(T(U)("Hardware")), 1),
          (S(!0), F(Me, null, Ye(I.value, (le, q) => (S(), F("div", { key: q }, ne(le.name) + " x" + ne(le.q) + " = " + ne(t.formatPrice(le.totalCost)), 1))), 128)),
          D("div", ab, ne(T(U)("Hardware total")) + " = " + ne(t.formatPrice(R.value)), 1)
        ])) : ie("", !0),
        D("div", ob, ne(T(U)("Panels")), 1)
      ])
    ], 64));
  }
}), Zw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: lb }, Symbol.toStringTag, { value: "Module" })), cb = {
  id: "smartcut-notices",
  class: "smartcut-content"
}, ub = { class: "content" }, db = ["onClick"], fb = ["innerHTML"], hb = /* @__PURE__ */ ze({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(t) {
    const e = t, { notices: i, dismissNotice: s } = ua(), n = oe({}), a = ee(() => e.position.includes("right") ? "notice-right" : "notice-left");
    return (o, r) => {
      const l = vi("FontAwesomeIcon");
      return S(), Le(la, { to: "body" }, [
        D("div", cb, [
          Ge(ec, {
            name: a.value,
            "move-class": "notice-move",
            tag: "div",
            class: Ee(["notices-container", e.position])
          }, {
            default: Ti(() => [
              (S(!0), F(Me, null, Ye(T(i), (u) => (S(), F("div", {
                key: u.id,
                ref_for: !0,
                ref: (c) => {
                  c && (n.value[u.id] = c);
                },
                class: Ee([
                  "notice",
                  `notice--${u.type}`
                ])
              }, [
                D("div", ub, [
                  D("div", {
                    class: "message",
                    onClick: (c) => u.action()
                  }, ne(u.message), 9, db),
                  D("div", {
                    class: "additional-info",
                    innerHTML: u.additional
                  }, null, 8, fb)
                ]),
                u.persistent ? ie("", !0) : (S(), Le(l, {
                  key: 0,
                  icon: ["fass", "trash"],
                  class: "dismiss",
                  onClick: (c) => T(s)(u.id)
                }, null, 8, ["onClick"]))
              ], 2))), 128))
            ]),
            _: 1
          }, 8, ["name", "class"])
        ])
      ]);
    };
  }
}), Jw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: hb }, Symbol.toStringTag, { value: "Module" })), pb = { class: "stock-filter-search" }, gb = { class: "search-input-wrapper" }, mb = ["placeholder"], yb = /* @__PURE__ */ ze({
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
    We(() => i.modelValue, (l) => {
      n.value = l;
    });
    function o() {
      a && clearTimeout(a), a = setTimeout(() => {
        s("update:modelValue", n.value);
      }, i.debounce);
    }
    function r() {
      n.value = "", s("update:modelValue", "");
    }
    return (l, u) => (S(), F("div", pb, [
      D("div", gb, [
        hs(D("input", {
          "onUpdate:modelValue": u[0] || (u[0] = (c) => n.value = c),
          type: "text",
          class: "search-input",
          placeholder: t.placeholder,
          onInput: o
        }, null, 40, mb), [
          [tc, n.value]
        ]),
        n.value ? (S(), F("button", {
          key: 0,
          type: "button",
          class: "search-clear",
          onClick: r
        }, " × ")) : ie("", !0)
      ])
    ]));
  }
}), bb = /* @__PURE__ */ Ot(yb, [["__scopeId", "data-v-45127fff"]]), vb = { class: "filter-panel-header" }, wb = { class: "filter-panel-title" }, Sb = { class: "filter-panel-content" }, xb = {
  key: 0,
  class: "filter-summary"
}, kb = { class: "filter-summary__count" }, Ib = { class: "filter-groups" }, Pb = { class: "filter-group__header" }, Cb = { class: "filter-group__label" }, Tb = { class: "filter-group__content" }, Ab = {
  key: 0,
  class: "filter-select"
}, Ob = ["checked", "onChange"], Lb = ["value", "onChange"], Fb = { value: "" }, $b = ["value"], Db = {
  key: 1,
  class: "filter-range"
}, Eb = { class: "filter-range__inputs" }, Rb = ["value", "min", "max", "step", "onInput"], _b = ["value", "min", "max", "step", "onInput"], Mb = {
  key: 2,
  class: "filter-boolean"
}, jb = { class: "filter-checkbox" }, Bb = ["checked", "onChange"], Nb = /* @__PURE__ */ ze({
  __name: "StockFilterPanel",
  props: {
    filterConfigs: {},
    activeFilters: {},
    getUniqueValues: { type: Function },
    getFieldRange: { type: Function }
  },
  emits: ["apply-filter", "remove-filter", "clear-filters"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = oe(!0), a = oe({}), o = ee(() => i.activeFilters.length);
    function r() {
      n.value = !n.value;
    }
    function l(x) {
      return {
        material: U("woodwork.material"),
        t: U("woodwork.thickness") + " (mm)",
        cost: U("stockFilter.price"),
        color: U("fields.color"),
        l: U("woodwork.length"),
        w: U("woodwork.width"),
        weight: U("fields.weight"),
        name: U("fields.name"),
        category: U("general.category"),
        leadTime: U("stockFilter.lead_time")
      }[x.field] || x.label;
    }
    function u(x) {
      return x.options?.length ? x.options : i.getUniqueValues(x.field).map((P) => x.field === "color" && typeof P == "object" && P !== null ? "name" in P && P.name ? {
        label: P.name,
        value: P
      } : {
        label: P.hex || String(P),
        value: P
      } : {
        label: String(P),
        value: P
      });
    }
    function c(x) {
      return i.activeFilters.find((P) => P.field === x)?.value;
    }
    function f(x, E) {
      const P = c(x);
      return Array.isArray(P) ? x === "color" && typeof E == "object" && E !== null && "hex" in E ? P.some(
        ($) => typeof $ == "object" && $ !== null && "hex" in $ && $.hex === E.hex
      ) : P.includes(E) : x === "color" && typeof E == "object" && E !== null && "hex" in E ? typeof P == "object" && P !== null && "hex" in P && P.hex === E.hex : P === E;
    }
    function h(x, E) {
      const $ = E.target.value;
      $ === "" ? s("remove-filter", x) : s("apply-filter", x, $, "select");
    }
    function g(x, E, P) {
      const $ = P.target, Y = c(x) || [], M = Array.isArray(Y) ? [...Y] : [];
      if ($.checked)
        M.includes(E) || M.push(E);
      else {
        const le = M.indexOf(E);
        le !== -1 && M.splice(le, 1);
      }
      M.length === 0 ? s("remove-filter", x) : s("apply-filter", x, M, "multiselect");
    }
    function I(x, E) {
      if (a.value[x]?.[E] !== void 0)
        return a.value[x][E];
      const P = i.activeFilters.find(($) => $.field === x);
      if (P?.value && typeof P.value == "object")
        return P.value[E];
    }
    function R(x, E, P) {
      const $ = P.target, Y = $.value ? Number($.value) : void 0;
      a.value[x] || (a.value[x] = {}), a.value[x][E] = Y;
      const M = a.value[x].min, le = a.value[x].max;
      M !== void 0 || le !== void 0 ? s("apply-filter", x, { min: M, max: le }, "range") : s("remove-filter", x);
    }
    function B(x, E) {
      E.target.checked ? s("apply-filter", x, !0, "boolean") : s("remove-filter", x);
    }
    function A() {
      a.value = {}, s("clear-filters");
    }
    return (x, E) => (S(), F("div", {
      class: Ee(["stock-filter-panel", { "stock-filter-panel--open": n.value }])
    }, [
      D("div", vb, [
        D("h3", wb, ne(T(U)("stockFilter.filters")), 1),
        D("button", {
          type: "button",
          class: "filter-panel-toggle",
          onClick: r
        }, ne(n.value ? "−" : "+"), 1)
      ]),
      Ge(ic, { name: "filter-panel-content" }, {
        default: Ti(() => [
          hs(D("div", Sb, [
            o.value > 0 ? (S(), F("div", xb, [
              D("span", kb, ne(T(U)("stockFilter.active_filters", [o.value])), 1),
              D("button", {
                type: "button",
                class: "filter-summary__clear",
                onClick: A
              }, ne(T(U)("stockFilter.clear_all")), 1)
            ])) : ie("", !0),
            D("div", Ib, [
              (S(!0), F(Me, null, Ye(t.filterConfigs, (P) => (S(), F("div", {
                key: P.field,
                class: "filter-group"
              }, [
                D("div", Pb, [
                  D("label", Cb, ne(l(P)), 1)
                ]),
                D("div", Tb, [
                  P.type === "select" || P.type === "multiselect" ? (S(), F("div", Ab, [
                    P.type === "multiselect" ? (S(!0), F(Me, { key: 0 }, Ye(u(P), ($) => (S(), F("label", {
                      key: $.value,
                      class: "filter-checkbox"
                    }, [
                      D("input", {
                        checked: f(P.field, $.value),
                        type: "checkbox",
                        onChange: (Y) => g(P.field, $.value, Y)
                      }, null, 40, Ob),
                      D("span", null, ne($.label), 1)
                    ]))), 128)) : (S(), F("select", {
                      key: 1,
                      value: c(P.field),
                      class: "filter-select-input",
                      onChange: ($) => h(P.field, $)
                    }, [
                      D("option", Fb, ne(T(U)("stockFilter.all")), 1),
                      (S(!0), F(Me, null, Ye(u(P), ($) => (S(), F("option", {
                        key: $.value,
                        value: $.value
                      }, ne($.label), 9, $b))), 128))
                    ], 40, Lb))
                  ])) : P.type === "range" ? (S(), F("div", Db, [
                    D("div", Eb, [
                      D("input", {
                        value: I(P.field, "min"),
                        min: P.min,
                        max: P.max,
                        step: P.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Min",
                        onInput: ($) => R(P.field, "min", $)
                      }, null, 40, Rb),
                      E[0] || (E[0] = D("span", { class: "filter-range__separator" }, "–", -1)),
                      D("input", {
                        value: I(P.field, "max"),
                        min: P.min,
                        max: P.max,
                        step: P.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Max",
                        onInput: ($) => R(P.field, "max", $)
                      }, null, 40, _b)
                    ])
                  ])) : P.type === "boolean" ? (S(), F("div", Mb, [
                    D("label", jb, [
                      D("input", {
                        checked: c(P.field) === !0,
                        type: "checkbox",
                        onChange: ($) => B(P.field, $)
                      }, null, 40, Bb),
                      D("span", null, ne(P.label), 1)
                    ])
                  ])) : ie("", !0)
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
}), Vb = /* @__PURE__ */ Ot(Nb, [["__scopeId", "data-v-096696f3"]]), Gb = { class: "stock-filter-sort" }, qb = { class: "sort-controls" }, zb = { class: "sort-label" }, Wb = ["value"], Hb = ["value"], Ub = ["title"], Yb = {
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
}, Jb = /* @__PURE__ */ ze({
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
        cost: U("stockFilter.price"),
        material: U("woodwork.material"),
        t: U("woodwork.thickness"),
        l: U("woodwork.length"),
        w: U("woodwork.width"),
        pricePerKg: U("stockFilter.price") + " per kg",
        pricePerM2: U("stockFilter.price") + " per m²",
        weight: U("fields.weight"),
        name: U("fields.name"),
        leadTime: U("stockFilter.lead_time")
      }[l] || l.charAt(0).toUpperCase() + l.slice(1);
    }
    function o(l) {
      const u = l.target;
      s("update:sortBy", u.value);
    }
    function r() {
      s("update:sortOrder", i.sortOrder === "asc" ? "desc" : "asc");
    }
    return (l, u) => (S(), F("div", Gb, [
      D("div", qb, [
        D("label", zb, ne(T(U)("stockFilter.sort_by")) + ":", 1),
        D("select", {
          value: t.sortBy,
          class: "sort-select",
          onChange: o
        }, [
          (S(!0), F(Me, null, Ye(T(n), (c) => (S(), F("option", {
            key: c.value,
            value: c.value
          }, ne(c.label), 9, Hb))), 128))
        ], 40, Wb),
        D("button", {
          type: "button",
          class: Ee(["sort-order-btn", { "sort-order-btn--desc": t.sortOrder === "desc" }]),
          title: t.sortOrder === "asc" ? T(U)("options.by_dimensions") : T(U)("options.by_dimensions"),
          onClick: r
        }, [
          (S(), F("svg", Yb, [
            t.sortOrder === "asc" ? (S(), F("path", Kb)) : (S(), F("path", Zb))
          ]))
        ], 10, Ub)
      ])
    ]));
  }
}), Xb = /* @__PURE__ */ Ot(Jb, [["__scopeId", "data-v-bb32c593"]]), Qb = { class: "stock-filter-results" }, ev = { class: "results-header" }, tv = { class: "results-info" }, iv = { class: "results-count" }, sv = { class: "results-controls" }, nv = { class: "display-mode-toggle" }, av = ["title"], ov = ["title"], rv = {
  key: 0,
  class: "results-loading"
}, lv = {
  key: 1,
  class: "results-empty"
}, cv = { class: "empty-message" }, uv = {
  key: 3,
  class: "results-pagination"
}, dv = ["disabled"], fv = { class: "pagination-pages" }, hv = ["onClick"], pv = ["disabled"], gv = /* @__PURE__ */ ze({
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
    const e = t, i = ee(() => {
      const s = [], a = Math.floor(2.5);
      let o = Math.max(1, e.currentPage - a), r = Math.min(e.totalPages, o + 5 - 1);
      r === e.totalPages && (o = Math.max(1, r - 5 + 1));
      for (let l = o; l <= r; l++)
        s.push(l);
      return s;
    });
    return (s, n) => (S(), F("div", Qb, [
      D("div", ev, [
        D("div", tv, [
          D("span", iv, ne(t.totalResults) + " " + ne(t.totalResults === 1 ? T(U)("stockFilter.result_one") : T(U)("stockFilter.result_other")), 1)
        ]),
        D("div", sv, [
          D("div", nv, [
            D("button", {
              type: "button",
              class: Ee(["display-mode-btn", { "display-mode-btn--active": t.displayMode === "grid" }]),
              title: T(U)("stockFilter.grid_view"),
              onClick: n[0] || (n[0] = (a) => s.$emit("update:displayMode", "grid"))
            }, [...n[5] || (n[5] = [
              Mo('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-702dc044><rect x="1" y="1" width="6" height="6" data-v-702dc044></rect><rect x="9" y="1" width="6" height="6" data-v-702dc044></rect><rect x="1" y="9" width="6" height="6" data-v-702dc044></rect><rect x="9" y="9" width="6" height="6" data-v-702dc044></rect></svg>', 1)
            ])], 10, av),
            D("button", {
              type: "button",
              class: Ee(["display-mode-btn", { "display-mode-btn--active": t.displayMode === "list" }]),
              title: T(U)("stockFilter.list_view"),
              onClick: n[1] || (n[1] = (a) => s.$emit("update:displayMode", "list"))
            }, [...n[6] || (n[6] = [
              D("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                D("rect", {
                  x: "1",
                  y: "1",
                  width: "14",
                  height: "2"
                }),
                D("rect", {
                  x: "1",
                  y: "7",
                  width: "14",
                  height: "2"
                }),
                D("rect", {
                  x: "1",
                  y: "13",
                  width: "14",
                  height: "2"
                })
              ], -1)
            ])], 10, ov)
          ])
        ])
      ]),
      t.loading ? (S(), F("div", rv, [
        n[7] || (n[7] = D("div", { class: "spinner" }, null, -1)),
        D("p", null, ne(T(U)("actions.loading")) + "...", 1)
      ])) : t.totalResults === 0 ? (S(), F("div", lv, [
        n[8] || (n[8] = D("svg", {
          width: "64",
          height: "64",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2"
        }, [
          D("circle", {
            cx: "12",
            cy: "12",
            r: "10"
          }),
          D("line", {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "12"
          }),
          D("line", {
            x1: "12",
            y1: "16",
            x2: "12.01",
            y2: "16"
          })
        ], -1)),
        D("p", cv, ne(T(U)("stockFilter.no_results")), 1),
        t.hasActiveFilters ? (S(), F("button", {
          key: 0,
          type: "button",
          class: "clear-filters-btn",
          onClick: n[2] || (n[2] = (a) => s.$emit("clear-filters"))
        }, ne(T(U)("stockFilter.clear_filters")), 1)) : ie("", !0)
      ])) : (S(), F("div", {
        key: 2,
        class: Ee(["results-grid", { "results-grid--list": t.displayMode === "list" }])
      }, [
        qs(s.$slots, "default", {}, void 0, !0)
      ], 2)),
      t.totalPages > 1 ? (S(), F("div", uv, [
        D("button", {
          type: "button",
          class: "pagination-btn",
          disabled: t.currentPage === 1,
          onClick: n[3] || (n[3] = (a) => s.$emit("go-to-page", t.currentPage - 1))
        }, ne(T(U)("pagination.previous")), 9, dv),
        D("div", fv, [
          (S(!0), F(Me, null, Ye(i.value, (a) => (S(), F("button", {
            key: a,
            type: "button",
            class: Ee(["pagination-page", { "pagination-page--active": a === t.currentPage }]),
            onClick: (o) => s.$emit("go-to-page", a)
          }, ne(a), 11, hv))), 128))
        ]),
        D("button", {
          type: "button",
          class: "pagination-btn",
          disabled: t.currentPage === t.totalPages,
          onClick: n[4] || (n[4] = (a) => s.$emit("go-to-page", t.currentPage + 1))
        }, ne(T(U)("pagination.next")), 9, pv)
      ])) : ie("", !0)
    ]));
  }
}), mv = /* @__PURE__ */ Ot(gv, [["__scopeId", "data-v-702dc044"]]), yv = {
  key: 0,
  class: "stock-filter-card__image"
}, bv = ["src", "alt"], vv = { class: "stock-filter-card__content" }, wv = { class: "stock-filter-card__title" }, Sv = { class: "stock-filter-card__specs" }, xv = { class: "spec" }, kv = { class: "spec__label" }, Iv = { class: "spec__value" }, Pv = { class: "spec" }, Cv = { class: "spec__label" }, Tv = { class: "spec__value" }, Av = {
  key: 0,
  class: "spec"
}, Ov = { class: "spec__label" }, Lv = { class: "spec__value spec__value--color" }, Fv = {
  key: 1,
  class: "spec"
}, $v = { class: "spec__label" }, Dv = { class: "spec__value" }, Ev = {
  key: 0,
  class: "stock-filter-card__description"
}, Rv = { class: "stock-filter-card__footer" }, _v = {
  key: 0,
  class: "stock-filter-card__price"
}, Mv = { class: "price__label" }, jv = { class: "price__value" }, Bv = ["disabled"], Nv = {
  key: 1,
  class: "stock-filter-card__lead-time"
}, Vv = /* @__PURE__ */ ze({
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
    const i = t, s = e, n = ee(() => i.stock.available !== !1), a = ee(() => i.stock.cost ? i.formatPrice(i.stock.cost, i.locale) : "N/A"), o = ee(() => i.stock.color ? typeof i.stock.color == "object" && "hex" in i.stock.color ? i.stock.color.hex : typeof i.stock.color == "string" ? i.stock.color : "" : ""), r = ee(() => i.stock.color ? typeof i.stock.color == "object" && "name" in i.stock.color ? i.stock.color.name : typeof i.stock.color == "string" ? i.stock.color : "" : ""), l = ee(() => ({
      "--btn-color": i.buttonTextColor,
      "--btn-bg": i.buttonColor,
      "--btn-hover-bg": u(i.buttonColor, -8)
    }));
    function u(f, h) {
      const g = f.replace("#", ""), I = parseInt(g, 16), R = Math.round(2.55 * h), B = (I >> 16) + R, A = (I >> 8 & 255) + R, x = (I & 255) + R;
      return `#${(16777216 + (B < 255 ? B < 1 ? 0 : B : 255) * 65536 + (A < 255 ? A < 1 ? 0 : A : 255) * 256 + (x < 255 ? x < 1 ? 0 : x : 255)).toString(16).slice(1)}`;
    }
    function c() {
      s("toggle-selection", i.stock);
    }
    return (f, h) => (S(), F("div", {
      class: Ee(["stock-filter-card", {
        "stock-filter-card--selected": t.isSelected,
        "stock-filter-card--unavailable": !n.value
      }])
    }, [
      t.stock.imageUrl ? (S(), F("div", yv, [
        D("img", {
          src: t.stock.imageUrl,
          alt: t.stock.name || t.stock.name || t.stock.material,
          loading: "lazy"
        }, null, 8, bv)
      ])) : ie("", !0),
      D("div", vv, [
        D("h3", wv, ne(t.stock.name || t.stock.name || `${t.stock.material} ${t.stock.l}×${t.stock.w}`), 1),
        D("div", Sv, [
          D("div", xv, [
            D("span", kv, ne(T(U)("woodwork.material")) + ":", 1),
            D("span", Iv, ne(t.stock.material || T(U)("general.na")), 1)
          ]),
          D("div", Pv, [
            D("span", Cv, ne(T(U)("stockFilter.dimensions")) + ":", 1),
            D("span", Tv, ne(t.stock.l) + " × " + ne(t.stock.w) + ne(t.stock.t ? ` × ${t.stock.t}mm` : ""), 1)
          ]),
          t.stock.color ? (S(), F("div", Av, [
            D("span", Ov, ne(T(U)("fields.color")) + ":", 1),
            D("span", Lv, [
              D("span", {
                class: "color-swatch",
                style: at({ backgroundColor: o.value })
              }, null, 4),
              ls(" " + ne(r.value), 1)
            ])
          ])) : ie("", !0),
          t.stock.weight ? (S(), F("div", Fv, [
            D("span", $v, ne(T(U)("fields.weight")) + ":", 1),
            D("span", Dv, ne(t.stock.weight) + " kg", 1)
          ])) : ie("", !0)
        ]),
        t.stock.description ? (S(), F("div", Ev, ne(t.stock.description), 1)) : ie("", !0),
        D("div", Rv, [
          t.stock.cost ? (S(), F("div", _v, [
            D("span", Mv, ne(T(U)("stockFilter.price")) + ":", 1),
            D("span", jv, ne(a.value), 1)
          ])) : ie("", !0),
          D("button", {
            type: "button",
            class: Ee(["stock-filter-card__btn", { "stock-filter-card__btn--selected": t.isSelected }]),
            style: at(l.value),
            disabled: !n.value,
            onClick: c
          }, ne(t.isSelected ? T(U)("stockFilter.remove") : n.value ? T(U)("stockFilter.select") : T(U)("stockFilter.unavailable")), 15, Bv)
        ]),
        t.stock.leadTime ? (S(), F("div", Nv, ne(T(U)("stockFilter.lead_time_days", [t.stock.leadTime])), 1)) : ie("", !0)
      ])
    ], 2));
  }
}), Gv = /* @__PURE__ */ Ot(Vv, [["__scopeId", "data-v-9056cd2a"]]), qv = { class: "stock-filter" }, zv = /* @__PURE__ */ ze({
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
    const s = t, n = i, a = oe(s.stockOptions), o = oe(s.config), r = oe(s.numberFormat), {
      activeFilters: l,
      searchQuery: u,
      sortBy: c,
      sortOrder: f,
      displayMode: h,
      currentPage: g,
      filteredStock: I,
      paginatedStock: R,
      selectedStock: B,
      totalPages: A,
      applyFilter: x,
      removeFilter: E,
      clearFilters: P,
      goToPage: $,
      toggleStockSelection: Y,
      isStockSelected: M,
      clearSelection: le,
      createInputStock: q,
      getUniqueValues: m,
      getFieldRange: z
    } = Cc({
      stockOptions: a,
      config: o,
      numberFormat: r
    }), Q = ee(() => s.config.availableFilters.filter((V) => {
      const H = m(V.field);
      return H.length > 0 && H.some((G) => G != null);
    }));
    ee(() => ({
      "--btn-color": s.colors.buttonText,
      "--btn-bg": s.colors.button,
      "--btn-hover-bg": K(s.colors.button, -8)
    }));
    function K(V, H) {
      const G = V.replace("#", ""), W = parseInt(G, 16), de = Math.round(2.55 * H), Se = (W >> 16) + de, ke = (W >> 8 & 255) + de, Ce = (W & 255) + de;
      return `#${(16777216 + (Se < 255 ? Se < 1 ? 0 : Se : 255) * 65536 + (ke < 255 ? ke < 1 ? 0 : ke : 255) * 256 + (Ce < 255 ? Ce < 1 ? 0 : Ce : 255)).toString(16).slice(1)}`;
    }
    function w(V) {
      const H = M(V);
      if (Y(V), H) {
        const G = q(V);
        n("stock-removed", G);
      } else {
        const G = q(V);
        n("stock-added", [G]);
      }
    }
    return e({
      applyFilter: x,
      removeFilter: E,
      clearFilters: P,
      clearSelection: le,
      selectedStock: B,
      filteredStock: I,
      getUniqueValues: m,
      getFieldRange: z
    }), (V, H) => (S(), F("div", qv, [
      t.config.enableSearch ? (S(), Le(bb, {
        key: 0,
        modelValue: T(u),
        "onUpdate:modelValue": H[0] || (H[0] = (G) => On(u) ? u.value = G : null)
      }, null, 8, ["modelValue"])) : ie("", !0),
      Q.value.length > 0 ? (S(), Le(Vb, {
        key: 1,
        "filter-configs": Q.value,
        "active-filters": T(l),
        "get-unique-values": T(m),
        "get-field-range": T(z),
        onApplyFilter: T(x),
        onRemoveFilter: T(E),
        onClearFilters: T(P)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : ie("", !0),
      t.config.sortOptions.length > 0 ? (S(), Le(Xb, {
        key: 2,
        "sort-by": T(c),
        "onUpdate:sortBy": H[1] || (H[1] = (G) => On(c) ? c.value = G : null),
        "sort-order": T(f),
        "onUpdate:sortOrder": H[2] || (H[2] = (G) => On(f) ? f.value = G : null),
        "available-fields": t.config.sortOptions
      }, null, 8, ["sort-by", "sort-order", "available-fields"])) : ie("", !0),
      Ge(mv, {
        "total-results": T(R).length,
        "display-mode": T(h),
        loading: t.loading,
        "has-active-filters": T(l).length > 0,
        "current-page": T(g),
        "total-pages": T(A),
        "onUpdate:displayMode": H[3] || (H[3] = (G) => h.value = G),
        onClearFilters: T(P),
        onGoToPage: T($)
      }, {
        default: Ti(() => [
          (S(!0), F(Me, null, Ye(T(R), (G) => (S(), Le(Gv, {
            key: G.id || `${G.material}-${G.l}-${G.w}-${G.t}`,
            stock: G,
            "is-selected": T(M)(G),
            "format-price": t.formatPrice,
            "button-color": t.colors.button,
            "button-text-color": t.colors.buttonText,
            locale: t.locale,
            onToggleSelection: w
          }, null, 8, ["stock", "is-selected", "format-price", "button-color", "button-text-color", "locale"]))), 128))
        ]),
        _: 1
      }, 8, ["total-results", "display-mode", "loading", "has-active-filters", "current-page", "total-pages", "onClearFilters", "onGoToPage"])
    ]));
  }
}), Wv = /* @__PURE__ */ Ot(zv, [["__scopeId", "data-v-2be207a9"]]), Xw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Wv }, Symbol.toStringTag, { value: "Module" }));
export {
  ce as $,
  yd as A,
  _s as B,
  X as C,
  on as D,
  rn as E,
  pa as F,
  Oe as G,
  Ne as H,
  As as I,
  nu as J,
  ga as K,
  ln as L,
  ba as M,
  Wd as N,
  Es as O,
  an as P,
  Pi as Q,
  ka as R,
  $r as S,
  Yt as T,
  yi as U,
  Ar as V,
  re as W,
  Pa as X,
  Ht as Y,
  tw as Z,
  Xs as _,
  co as a,
  ci as a$,
  Ow as a0,
  Ke as a1,
  Mt as a2,
  vw as a3,
  hw as a4,
  he as a5,
  hf as a6,
  ai as a7,
  Gi as a8,
  ii as a9,
  ar as aA,
  dt as aB,
  Pt as aC,
  df as aD,
  Cw as aE,
  ki as aF,
  Pw as aG,
  Ew as aH,
  rr as aI,
  Fh as aJ,
  gw as aK,
  Rw as aL,
  ch as aM,
  Dw as aN,
  gn as aO,
  Wr as aP,
  Te as aQ,
  Cr as aR,
  lh as aS,
  lr as aT,
  ro as aU,
  Fw as aV,
  $w as aW,
  ow as aX,
  gh as aY,
  mh as aZ,
  ot as a_,
  lw as aa,
  rt as ab,
  vt as ac,
  Ze as ad,
  sd as ae,
  Ca as af,
  Lw as ag,
  mw as ah,
  or as ai,
  $h as aj,
  oh as ak,
  ei as al,
  pw as am,
  Yi as an,
  yw as ao,
  xw as ap,
  kw as aq,
  bw as ar,
  wu as as,
  ku as at,
  Au as au,
  nw as av,
  sw as aw,
  fw as ax,
  dw as ay,
  ms as az,
  Kr as b,
  hh as b0,
  Gr as b1,
  _w as b2,
  Wn as b3,
  Js as b4,
  Aa as b5,
  Aw as b6,
  cw as b7,
  et as b8,
  ww as b9,
  Du as bA,
  to as bB,
  io as bC,
  gy as bD,
  Yw as bE,
  Mw as bF,
  La as bG,
  Zw as bH,
  Jw as bI,
  Xw as bJ,
  Fr as ba,
  Sw as bb,
  Tw as bc,
  Iw as bd,
  ih as be,
  iw as bf,
  hn as bg,
  pn as bh,
  Rt as bi,
  Wi as bj,
  Xe as bk,
  It as bl,
  Qs as bm,
  Wt as bn,
  ti as bo,
  os as bp,
  _r as bq,
  Yf as br,
  gi as bs,
  Ot as bt,
  oi as bu,
  mt as bv,
  Jr as bw,
  pi as bx,
  Kw as by,
  aw as bz,
  Vw as c,
  Bw as d,
  Yr as e,
  Nw as f,
  sa as g,
  Si as h,
  qo as i,
  yn as j,
  Qh as k,
  qw as l,
  Uw as m,
  Hw as n,
  zw as o,
  ep as p,
  jw as q,
  Ww as r,
  Gw as s,
  U as t,
  rw as u,
  pf as v,
  uw as w,
  Kt as x,
  Ui as y,
  De as z
};

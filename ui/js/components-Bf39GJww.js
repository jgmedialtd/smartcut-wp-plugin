import { i as ur, B as Ec } from "./vendor-i18next-CacwiV0i.js";
import { r as le, t as ia, c as ie, n as It, w as qe, d as Ye, a as T, o as v, F as Ne, b as Ke, e as vt, f as Be, g as x, h as Vi, i as V, v as Cn, j as Lt, k as Vt, u as dr, l as Mc, m as Rc, p as An, q as Ee, s as S, x as Z, y as cn, T as fr, z as Tn, A as jc, B as Li, C as Bi, D as un, E as Ve, G as ti, H as wi, I as Vc, J as pr, K as si, L as Bc, M as hr, N as Ti, O as vo, P as Nc, Q as Gc, R as qc, S as zc, U as Wc, V as Uc, W as Hc, X as ba, Y as sa } from "./vendor-vue-ChIbPezZ.js";
import { _ as Ce, o as j, a as ee, s as m, n as f, b as z, c as we, r as ve, u as Se, d as Si, z as Yc, Z as na, e as Kc, l as xe, p as Ct, f as va, g as Zc, h as Jc, m as Xc, i as es, j as Qc, k as eu, q as tu, t as iu, v as su, w as nu, x as wo, y as au } from "./vendor-zod-PVURV34D.js";
import { g as Xe, h as ou, s as ru } from "./vendor-lodash-CYGhmG8H.js";
import { u as ms, s as So, g as lu, v as cu, a as Va, b as uu, c as du, d as fu, e as pu, f as Ts, h as hu, i as gu, j as mu, k as yu, l as bu } from "./composables-BGwYkZJE.js";
import { a as gr, b as mr, l as zt, c as dn, d as fn, s as yt, r as ii, e as ks, f as yr, g as vu, h as wu, i as Su, p as ku, S as xu, j as Iu, k as Pu } from "./vendor-d3-DUCHe88K.js";
import { c as br, P as Cu } from "./vendor-tCV_BFOF.js";
import { o as Au, f as Tu, s as Ou, a as Lu } from "./vendor-floating-ui-DZfk4g77.js";
import { F as Is } from "./vendor-fraction-3H9P8ENz.js";
function gi() {
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
function vr() {
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
function wr() {
  return typeof globalVariables < "u" || typeof globalThis.__runtimeVersion < "u" || typeof window < "u" && typeof window.__runtimeVersion < "u";
}
const Ek = {
  INVALID_TYPE: "errors.validation.zod.invalid_type",
  TOO_SMALL: "errors.validation.zod.too_small",
  TOO_BIG: "errors.validation.zod.too_big",
  INVALID_STRING: "errors.validation.zod.invalid_string",
  INVALID_ENUM: "errors.validation.zod.invalid_enum",
  REQUIRED: "errors.validation.not_set",
  CUSTOM: "errors.validation.zod.custom"
}, Gt = {
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
}, aa = {
  field_required: Gt.FIELD_REQUIRED,
  invalid_number: Gt.INVALID_NUMBER,
  invalid_decimal: Gt.INVALID_DECIMAL,
  invalid_fraction: Gt.INVALID_FRACTION,
  invalid_fraction_chars: Gt.INVALID_FRACTION_CHARS,
  invalid_fraction_format: Gt.INVALID_FRACTION_FORMAT,
  invalid_format: Gt.INVALID_FORMAT,
  above_max: Gt.ABOVE_MAX,
  below_min: Gt.BELOW_MIN,
  zero_not_allowed: Gt.ZERO_NOT_ALLOWED,
  division_by_zero: Gt.DIVISION_BY_ZERO
};
function _u(t) {
  if (t in aa) {
    const e = t;
    return gi() && console.warn(`[Validation] Using legacy validation key "${t}". Please migrate to "${aa[e]}"`), aa[e];
  }
  return t;
}
const Sr = Ce(["error", "warning"]), kr = Ce(["saw", "stock", "part", "group", "machining", "extras"]);
j({
  message: m(),
  identifier: m(),
  field: ee(ee(m())),
  index: ee(f()),
  id: m(),
  // Source object's autoId for linking back
  type: Sr,
  category: ee(kr)
});
const $u = j({
  item: we().nullable().default(null),
  message: m().default(""),
  params: ve(m(), Se([m(), f(), z(), Si()])).optional(),
  // Translation parameters
  field: ee(ee(m())).default([]),
  index: ee(f()).nullable().default(null),
  id: m().nullable().default(null),
  // Source object's autoId
  issues: ee(we()).nullable().default(null),
  // Will be Issue[] at runtime
  type: Sr.default("error"),
  category: ee(kr).nullable().default(null),
  throwError: z().default(!1),
  shouldTranslate: z().default(!0)
}), Fu = ["lr", "rl", "bt", "tb"];
j({
  x1: f(),
  x2: f(),
  y1: f(),
  y2: f(),
  dimension: Ce(["l", "w"]).optional(),
  shapeCollisions: ee(we()).optional()
});
j({
  id: m().nullable().optional(),
  x1: f(),
  x2: f(),
  y1: f(),
  y2: f(),
  origin: m().optional(),
  dimension: Ce(["l", "w"]).optional(),
  direction: Ce(Fu).nullable().optional(),
  type: m().nullable().optional()
});
const Du = j({
  // ========== Identification ==========
  // Unique identifier for this line
  id: m(),
  // Type classification for this line
  type: m().optional(),
  // ========== Coordinates ==========
  x1: f().default(0),
  x2: f().default(0),
  y1: f().default(0),
  y2: f().default(0),
  // ========== Origin Information ==========
  // Origin point of the line
  origin: m().optional(),
  // ========== Collision Tracking ==========
  // Shapes that collide with this line
  shapeCollisions: ee(we()).default([]),
  // ========== Validation ==========
  // Validation issues found with this line
  issues: ee(we()).default([])
}), Eu = {
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
}, xr = /* @__PURE__ */ new Map();
function Os() {
  return xr;
}
function Mk(t, e) {
  xr.set(t, e);
}
function On(t, e) {
  const i = t, s = i._fieldBehavior?.fieldBehavior || {};
  return i._fieldBehavior = {
    fieldBehavior: {
      ...s,
      ...e
    }
  }, i;
}
function wa(t) {
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
function ys(t) {
  const e = {};
  if (t instanceof Kc) {
    const i = t.shape;
    for (const [s, n] of Object.entries(i)) {
      const a = wa(n);
      a && (e[s] = a);
    }
  }
  if (t._def && t._def.shape) {
    const i = t._def.shape;
    for (const [s, n] of Object.entries(i)) {
      const a = wa(n);
      a && (e[s] = a);
    }
  }
  return e;
}
typeof Yc < "u" && na && na.prototype && (na.prototype.behavior = function(t) {
  return On(this, t);
});
function De(t, e = {}) {
  let s = we().refine((o) => o == null ? !0 : typeof o == "object" && o !== null ? ("autoId" in o || "id" in o, !0) : !1, {
    message: `Invalid reference to ${t}`
  }).transform((o) => {
    if (o == null || typeof o == "object" && o !== null && typeof o.getType == "function" || typeof o == "object" && o !== null && o.__ref === !0)
      return o;
    if (typeof o == "object" && o !== null && !o.__ref)
      try {
        const r = Os(), l = o.__entityType || t, c = r.get(l);
        if (c && typeof c == "function")
          return typeof c.fromData == "function" ? c.fromData(o) : new c(o);
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
  return n = On(n, a), Object.defineProperty(n, "__zRefClassName", {
    value: t,
    enumerable: !1,
    writable: !1,
    configurable: !1
  }), n;
}
function He(t, e = {}) {
  let i = ee(De(t)).default([]).describe(
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
  return i = On(i, s), i;
}
function Xs(t, e = {}) {
  const i = t.map((a) => De(a));
  let s = ee(Se(i)).default([]).describe(
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
  return s = On(s, n), s;
}
const ko = ["topLeft", "topRight", "bottomLeft", "bottomRight"], Mu = [
  "left",
  "centre",
  "right",
  "top",
  "bottom",
  "topLeft",
  "topRight",
  "bottomLeft",
  "bottomRight"
], Ru = ["lr", "rl", "bt", "tb"], ju = j({
  // ========== Coordinates ==========
  x: f().default(0),
  y: f().default(0),
  z: f().default(0),
  // ========== Shape References ==========
  a: m().optional(),
  b: m().optional(),
  stock: De("Stock", { nullable: !0 }).optional(),
  // ========== Direction and Positioning ==========
  direction: Ce(Ru).nullable().optional(),
  type: m().optional(),
  corner: Ce(ko).optional(),
  shapePosition: Ce(ko).optional(),
  grid: Ce(Mu).optional(),
  // ========== Collision and Raycast Flags ==========
  raycast: z().default(!1),
  collision: z().default(!1),
  tooClose: z().default(!1),
  adjustedForMinSpacing: z().default(!1)
}), Vu = {
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
}, Ir = m().default("").describe('Unique identifier (e.g., "1.0" for shapes/stock, "g1" for groups, "ss-1_a2b3" for segments, "1.0-proximity" for proximity rectangles)'), Bu = m().max(200).default("").describe("User input name"), Nu = m().default("").describe("Parent identifier for tracking copies and relationships"), Gu = z().default(!1).describe("Prevent automatic rotation optimization"), qu = z().default(!1).describe("Whether this is an offcut piece"), Pr = ee(m()).default([]).describe("IDs of identical items").behavior({ clone: "copy" }), rs = Se([
  xe(""),
  xe("l"),
  xe("w"),
  xe(" ").transform(() => ""),
  Si().transform(() => "")
]).default("").describe("Grain direction of the material"), Cr = Se([
  // String format (legacy support - color name or hex)
  m(),
  // Object format with hex and name
  j({
    hex: m().regex(/^#[0-9A-Fa-f]{6}$/, "Must be valid hex color (#RRGGBB)"),
    name: m().min(1)
  })
]).optional().describe("Material color (hex code + name or legacy string)"), Ar = Ct(
  (t) => t === null || t === " " || t === "n" || t === "none" || !["", "l", "w"].includes(t) ? "" : t,
  Ce(["", "l", "w"]).default("").describe("Orientation lock for rotation constraints")
), zu = j({
  l1: f().default(0).describe("Long side 1 trim value"),
  l2: f().default(0).describe("Long side 2 trim value"),
  w1: f().default(0).describe("Short side 1 trim value"),
  w2: f().default(0).describe("Short side 2 trim value")
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 });
j({
  material: z(),
  thickness: z(),
  fit: z(),
  width: z()
}).nullable().default(null);
Se([
  xe(""),
  xe("l"),
  xe("w"),
  Si()
]).default(null);
ve(m(), f()).nullable().default(null);
ve(m(), f()).nullable().default(null);
const Ba = Se([
  xe(0),
  xe(1)
]), Wu = j({
  dimension: f().describe("Dimension of the strip shape batch"),
  rot: Ba.describe("Rotation: 0 (no rotation) or 1 (90 degrees)"),
  order: f().optional().describe("Order of the batch"),
  id: m().optional().describe("Batch ID"),
  stockId: m().optional().describe("Associated stock ID"),
  rerunning: z().optional().describe("Whether the batch is being rerun"),
  priorityShape: m().nullable().describe("Priority shape identifier (null if none specified)")
});
j({
  subsetUsed: z().optional().describe("Whether a subset was used for strip shape batches"),
  groups: ve(m(), Wu).describe("Groups of strip shape batches keyed by ID")
});
const Uu = Ce(["none", "schema", "business", "full"]), Zt = j({
  // Validation issues (errors) - uses zRefArray to avoid type duplication across modules
  issues: He("Issue", {
    description: "Validation issues (errors)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Validation warnings (non-critical issues) - uses zRefArray to avoid type duplication
  warnings: He("Issue", {
    description: "Validation warnings (non-critical)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Legacy flag to skip validation (backward compatibility)
  skipValidation: z().optional(),
  // New validation control properties
  skipSchemaValidation: z().optional(),
  skipBusinessValidation: z().optional(),
  validationMode: Uu.optional(),
  enableStrictMode: z().optional()
}), ki = {
  // Check if valid (no errors)
  isValid: {
    compute: (t) => (t.issues || []).filter((i) => i.type === "error").length === 0,
    cache: !0,
    dependencies: ["issues"],
    returnType: "boolean"
  }
};
function Hu(t) {
  if (!t) return "";
  const e = t.indexOf(".");
  return e === -1 ? t : t.substring(0, e);
}
const Na = Zt.extend({
  // Identity
  id: Ir,
  // Description
  name: Bu,
  // Dimensions
  l: Ct((t) => typeof t == "number" && !isFinite(t) ? 1 : t ?? 1, f().positive()).describe("Length (long side dimension)"),
  w: Ct((t) => typeof t == "number" && !isFinite(t) ? 1 : t ?? 1, f().positive()).describe("Width (short side dimension)"),
  t: f().positive().nullable().optional().describe("Thickness (z-axis dimension)"),
  q: f().positive().int().default(1).describe("Quantity"),
  // Calculated dimensions (computed once on init for performance)
  area: f().positive().default(1).describe("Calculated area (l * w)"),
  longSide: f().positive().default(1).describe("Calculated long side Math.max(l, w)"),
  shortSide: f().positive().default(1).describe("Calculated short side Math.min(l, w)"),
  parentId: m().default("").describe("Parent ID extracted from id (integer part before decimal)"),
  // Flags
  duplicate: z().default(!1).describe("Whether this is a duplicate"),
  offcut: qu,
  // Grain
  grain: rs,
  preventGrainRotation: z().default(!1).describe("Prevent rotation that would change grain direction"),
  // Orientation
  preventAutoRotation: Gu,
  orientationLock: Ar,
  // Position (reset during cloning - cloned shapes should not have preset positions)
  x: f().nullable().default(null).describe("X coordinate position").behavior({ clone: "reset" }),
  y: f().nullable().default(null).describe("Y coordinate position").behavior({ clone: "reset" }),
  // Stock matching
  material: m().max(200).default("").transform((t) => t ? t.trim().toLowerCase() : "").describe("Material name"),
  // Trim
  trim: zu.describe("Reduce the dimensions by specified trim values"),
  trimmed: z().default(!1).describe("Whether trim has been applied to dimensions"),
  // Proximity data (excluded from compression)
  proximity: j({
    rectangle: De("Rectangle").nullable().default(null),
    // Using 'any' to avoid circular import
    distance: f().nullable().default(null)
  }).default({ rectangle: null, distance: null }).behavior({ compress: "exclude" }),
  // Other properties
  cost: f().min(0).nullable().default(0).describe("Cost per unit"),
  customData: ve(m(), we()).default({}).describe("Custom user-defined data"),
  identicalTo: Pr,
  notes: m().max(500).default("").transform((t) => typeof t == "string" && t.length ? t.replace(/,/g, "").substring(0, 200) : "").describe("Description")
}), Ga = {
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
}, Yu = ["x", "y"];
Ce(Yu);
const Ku = ["l", "w"];
Ce(Ku);
const Zu = ["l", "w"], Fi = Ce(Zu);
Se([
  xe(0),
  xe(1),
  xe(2)
]);
Se([
  xe(0),
  xe(1),
  Si()
]);
const Ju = ["sheet", "linear", "roll"], Ln = Ct(
  // Normalize to lowercase before validation
  (t) => typeof t == "string" ? t.toLowerCase() : t,
  Se([
    Ce(Ju),
    Si()
  ]).nullable().default(null)
).describe("Type of stock material"), Tr = j({
  // Infinite length flag for rolls and other continuous stock
  infiniteLength: z().default(!1).describe("Whether stock has infinite length (e.g., for rolls)"),
  // Allow shapes that exactly fit the stock dimensions
  allowExactFitShapes: z().default(!1).describe("Allow shapes that exactly fit"),
  // Automatically add stock as needed
  autoAdd: z().default(!1).describe("Automatically add stock as needed"),
  // Unlimited quantity flag - stock never runs out
  unlimitedQuantity: z().default(!1).describe("Stock has unlimited quantity (never decremented)")
}), qa = Na.extend({
  // Identity - override id to be required for containers
  id: m().default("").describe("Unique identifier for containers (required for Stock and Segment)"),
  // Parent identifier for tracking copies
  parentId: Nu,
  // Container-specific fields
  stockType: Ln,
  // Array of shapes or groups (excluded from compression - runtime only)
  shapes: Xs(["Shape", "Group"], {
    description: "Array of Shape or Group objects contained within this container"
  }).behavior({ clone: "reset", compress: "exclude" }),
  // Saw reference - using zRef for define.ref<Saw>('Saw') (share exact instance during cloning, serialize as reference)
  saw: De("Saw", {
    nullable: !0,
    description: "Reference to Saw class"
  }).behavior({ clone: "share", compress: "reference" }),
  // Algorithm benchmark results (reset during cloning)
  algoBenchmark: we().optional().describe("Benchmark results from optimization algorithms").behavior({ clone: "reset" }),
  // Container flag
  isContainer: z().default(!0).describe("Flag indicating this is a container")
}), za = {
  // Include all Rectangle computed properties
  ...Ga,
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
qa.describe(JSON.stringify({
  name: "Container",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(za)
}));
const Xu = j({
  dimension: f().describe("Dimension of the strip shape batch"),
  rot: Se([
    xe(0),
    xe(1)
  ]).describe("Rotation"),
  order: f().optional().describe("Order of the batch"),
  id: m().optional().describe("Batch ID"),
  stockId: m().optional().describe("Associated stock ID"),
  rerunning: z().optional().describe("Whether the batch is being rerun"),
  priorityShape: m().nullable().describe("Priority shape identifier (null if none specified)")
}), Or = j({
  // Strip direction
  myStripDirection: Fi.optional(),
  // Strip parent (can be shape or group)
  myStripParent: Se([
    De("Shape", { nullable: !0 }),
    De("Group", { nullable: !0 })
  ]).default(null).describe("Parent strip shape or group for guillotine optimization").behavior({
    serialize: "reference",
    compress: "reference",
    clone: "share"
  }),
  // Phase number
  myPhase: f().int().min(0).optional().describe("Phase of the strip this shape belongs to"),
  // Strip shape batches optimization data
  stripShapeBatches: j({
    subsetUsed: z().optional().describe("Whether a subset was used for strip shape batches"),
    groups: ve(m(), Xu).default({}).describe("Groups of strip shape batches keyed by ID")
  }).default({ groups: {} }).describe("Strip shape batch optimization data")
});
Or.describe(JSON.stringify({
  name: "GuillotineState",
  version: "1.0.0"
}));
const Qu = {}, ed = j({
  fill: f().default(0),
  similarDimensions: f().default(0),
  compression: f().default(0),
  cohesion: f().default(0),
  area: f().default(0),
  edge: f().default(0),
  alignment: f().default(0),
  exactFit: f().default(0),
  total: f().default(0),
  shapes: Se([
    De("Shape", { nullable: !0 }),
    De("Group", { nullable: !0 })
  ]).optional(),
  group: De("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
  cutDirection: Fi.optional()
}).behavior({ clone: "reset" }), td = j({
  exactStripFill: f().default(0),
  fill: f().default(0),
  cohesion: f().default(0),
  fenceConsistency: f().default(0),
  similarDimensions: f().default(0),
  compression: f().default(0),
  sameStripBonus: f().default(0),
  aspectRatio: f().optional(),
  total: f().default(0),
  cutDirection: Fi,
  myStripDirection: Fi.optional(),
  myStripParent: Se([
    De("Shape", { nullable: !0 }),
    De("Group", { nullable: !0 })
  ]).optional().describe("Parent strip shape or group for guillotine optimization"),
  myPhase: f().optional()
}).behavior({ clone: "reset" }), xo = Se([
  ed,
  td,
  // Also support the generic object with catchall for backward compatibility
  j({
    cutDirection: Fi.optional(),
    myStripParent: Se([
      De("Shape", { nullable: !0 }),
      De("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group"),
    myStripDirection: Fi.optional()
  }).catchall(f())
]).behavior({ clone: "reset" }), Ls = Na.extend({
  // Stock lock (shared schema) - original was stockLock: define.array(define.string())
  stockLock: ee(m()).default([]).describe("Stock lock configuration"),
  // Stock matching - original object structure
  stockMatch: j({
    material: z(),
    thickness: z(),
    fit: z(),
    width: z()
  }).nullish().describe("Matching stock information"),
  // Guillotine state - reference that will be initialized in constructor (reset during cloning)
  // This ensures guillotineState is always a proper GuillotineState instance with methods
  guillotineState: De("GuillotineState", {
    nullable: !0,
    // Nullable in schema but always initialized in constructor
    description: "Data for guillotine cutting optimization (always initialized as instance)"
  }).nullable().default(null).behavior({
    clone: "unique",
    serialize: gi() ? "full" : "exclude",
    compress: gi() ? "full" : "exclude"
    // Consistent with serialize behavior
  }),
  // Priority and weighting (records) - exact match from original
  priority: ve(m(), f()).default({}).describe("Priority levels for optimization"),
  weighting: ve(m(), f()).optional().describe("Shape weighting for optimization"),
  // Pattern matching for stack detection (reset during cloning)
  patternMatch: z().default(!1).describe("Used for stack detection").behavior({ clone: "reset" }),
  firstShape: j({
    sampleRotations: ee(f().int().min(0).max(1)).default([]).describe("Sample rotations (0 or 1) for first shape optimization").behavior({ clone: "reset" }),
    isFirstShape: z().default(!1).describe("Whether this is the first shape in optimization").behavior({ clone: "reset" })
  }).default({ sampleRotations: [], isFirstShape: !1 }),
  // Placement properties (reset during cloning)
  added: z().default(!1).describe("Whether shape has been added to a stock").behavior({ clone: "reset" }),
  placementOrder: f().int().min(0).optional().describe("Order in which shape was placed").behavior({ clone: "reset" }),
  // Stock reference (reset during cloning - cloned shapes should not be pre-placed)
  stock: De("Stock", {
    nullable: !0,
    description: "Reference to the stock this item is placed on"
  }).behavior({ clone: "reset" }),
  // Stock fitting data
  fitsStock: ve(
    m(),
    ve(m(), z())
  ).nullable().default(null).describe("Information about which stocks this shape fits"),
  // Scoring properties
  bestScore: j({
    x: f().nullable().default(null),
    y: f().nullable().default(null),
    rot: Se([xe(0), xe(1)]).nullable().default(null),
    total: f().nullable().default(null),
    weighting: ve(m(), f()).optional(),
    group: De("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
    score: xo.optional(),
    point: we().optional().describe("Associated point for placement"),
    myStripParent: Se([
      De("Shape", { nullable: !0 }),
      De("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group for this score"),
    cutDirection: Fi.optional(),
    myStripDirection: Fi.optional(),
    stock: De("Stock", {
      nullable: !0,
      description: "Stock reference for this score"
    })
  }).nullable().default(null).optional().describe("Best optimization score achieved").behavior({
    clone: "reset",
    serialize: gi() ? "full" : "exclude"
    // Retain in development mode for debugging
  }),
  // Current optimization score (can be efficiency or guillotine type, reset during cloning)
  score: xo.nullable().optional().describe("Current optimization score").behavior({
    clone: "reset",
    serialize: "exclude"
    // Always exclude - transient optimization data
  })
}), _s = {
  // Include all Rectangle computed properties
  ...Ga
  // Placeable doesn't define additional computed properties
};
Ls.describe(JSON.stringify({
  name: "Placeable",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(_s)
}));
const Lr = ["horizontal", "vertical"], _r = ["position", "user", "strip", "firstShape"], Wa = Ce(Lr).optional(), id = j({
  x: f(),
  y: f(),
  autoId: m().optional(),
  rot: Ba
}), sd = Ls.extend({
  // Override quantity - always 1 for groups
  q: f().min(1).max(1).int().default(1),
  // Groups have fixed orientation
  preventAutoRotation: z().default(!0),
  // Group-specific fields
  shapes: He("Shape").default([]),
  direction: Wa,
  container: Se([
    De("Segment"),
    De("Stock")
  ]).behavior({ compress: "exclude" }),
  positions: ee(id).default([]),
  type: Ce(_r).default("position"),
  efficiency: f().min(0).max(100).default(0),
  groupLength: f().min(0).default(0),
  groupWidth: f().min(0).default(0),
  outOfBounds: z().default(!1),
  collision: z().default(!1),
  counter: f().int().min(0).default(0),
  inputId: m().optional()
}), nd = {
  ..._s,
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
  id: m(),
  x: f(),
  y: f(),
  shapes: He("Shape"),
  direction: Ce(Lr),
  type: Ce(_r),
  container: Se([
    De("Segment"),
    De("Stock")
  ]).optional()
});
const ad = ["l", "w"], od = Ls.extend({
  // Identity - offcuts need IDs for tracking and export
  id: m().default(""),
  // Note: offcut property is inherited from Rectangle schema (boolean default false)
  // The Offcut constructor ensures it's always true
  // Offcut-specific fields
  addToInventory: z().default(!1),
  flex: Ce(ad).optional(),
  // Cost is calculated, not set
  cost: f().min(0).nullable().default(0)
}), Rk = {
  ..._s,
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
}, $r = ee(m()).default([]).describe("Parent IDs of stock(s) this shape is locked to"), rd = Ce(["l", "w"]).nullable().default(null), Fr = Se([
  xe("l"),
  xe("w"),
  Si()
]).default(null), ld = j({
  stockId: m().optional(),
  material: m().optional(),
  thickness: f().optional(),
  grain: rs.optional()
}).describe("Which stock(s) this shape is a match for "), Dr = ve(m(), we()).default({});
$r.describe("IDs of stocks this shape is locked to");
const cd = Fr.describe("Direction that should face up");
j({
  /**
   * Up direction - Direction that should face up during optimization
   */
  upDirection: cd
});
const ud = j({
  // Whether shape is in a user-defined group
  inUserGroup: z().default(!1).describe("Whether shape is in a user-defined group"),
  // Whether shape is in any group
  inGroup: z().default(!1).describe("Whether shape is currently in a group"),
  // Placement order within group
  placementOrder: f().int().min(0).optional().describe("Placement order within group"),
  // Group reference (the actual Group class instance)
  reference: De("Group", {
    nullable: !0,
    description: "Group this shape belongs to"
  }).optional().behavior({ clone: "reset", compress: "reference" }),
  // Group this was added as part of (preserved during serialization as reference)
  addedAsGroup: De("Group", {
    nullable: !0,
    description: "Group this was added as part of"
  }).optional().behavior({ clone: "reset", compress: "reference" })
}).default({
  inUserGroup: !1,
  inGroup: !1,
  placementOrder: void 0,
  reference: null,
  addedAsGroup: null
}).describe("Group metadata and reference"), Ps = Ls.extend({
  // ========== Group Metadata ==========
  // Nested object containing all group-related properties
  group: ud,
  // ========== Identity ==========
  // Unique identifier for referencing items (required for shapes)
  id: m().default("").describe("Unique identifier for referencing items"),
  // Array of IDs this shape is identical to
  identicalTo: Pr,
  // Whether this is a duplicate
  duplicate: z().default(!1).describe("Whether this is a duplicate shape"),
  // ========== Orientation ==========
  // Direction that should face up during optimization
  upDirection: rd.describe("Direction that should face up"),
  // ========== Extras ==========
  // Extras container for banding, finish, planing, etc.
  // Override default reference behavior to preserve full data in compressed mode
  extras: De("Extras", {
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
  machining: De("Machining", {
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
}), Er = {
  // Include all Placeable computed properties
  ..._s,
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
Ps.describe(JSON.stringify({
  name: "Shape",
  description: "Shape to be cut from stock material",
  version: "1.0.0",
  extends: "Placeable",
  computedProperties: Object.keys(Er)
}));
const dd = j({
  // Internal-only fields (not exposed in API)
  fitsAll: z().default(!1),
  fitsAny: z().default(!1),
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
}), fd = j({
  stock: De("Stock", { nullable: !0 }).optional(),
  number: f().int().min(1).optional()
}), pn = j({
  ...qa.shape,
  ...Tr.shape,
  // Override x and y to default to 0 for Stock (containers are positioned at origin)
  x: f().nullable().default(0).describe("X coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  y: f().nullable().default(0).describe("Y coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  // Stock analysis results
  analysis: dd.optional().behavior({ clone: "reset" }),
  // Automatically add stock as needed during optimization
  autoAdd: z().optional().describe("Automatically add stock as needed during optimization"),
  // Pattern for identifying duplicate stock sheets
  duplicatePattern: m().default("").describe("Pattern for identifying duplicate stock sheets"),
  // Root segment for guillotine cutting (excluded from compression, reset during cloning)
  rootSegment: De("Segment", {
    nullable: !0
  }).optional().behavior({ clone: "reset", compress: "exclude" }),
  // Optimization score (excluded from compression, reset during cloning)
  score: we().nullable().default(null).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stack information (reset during cloning - cloned stocks start fresh)
  stack: fd.optional().describe("Stack information").behavior({ clone: "reset" }),
  // Whether the stock layout has been tidied (excluded from compression, reset during cloning)
  tidy: z().default(!1).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stock type (sheet, linear, roll) - inherited from shared stockType
  type: Ce(["sheet", "linear", "roll"]).optional().describe("Type of stock material"),
  // Original length before cropping (for rolls)
  originalLength: f().positive().optional().describe("Original length before cropping (for rolls)"),
  // Whether this stock is unusable for optimization
  unusable: z().default(!1).describe("Whether this stock is unusable for optimization"),
  // Whether this stock has been used in the optimization (reset during cloning)
  used: z().default(!1).describe("Whether this stock has been used in the optimization").behavior({ clone: "reset" }),
  // The optimization strategy that selected this stock (reset during cloning)
  winningStrategy: m().optional().describe("The optimization strategy that selected this stock").behavior({ clone: "reset" }),
  // Display and filtering properties
  color: Cr.describe('Material color ({ hex: "#FF5733", name: "Red" } or legacy string)'),
  weight: f().positive().optional().describe("Weight"),
  imageUrl: m().url().optional().describe("Image URL for stock display"),
  tags: ee(m()).optional().describe("Tags for categorizing stock"),
  available: z().default(!0).describe("Whether the stock is available"),
  // Database ID (MongoDB ObjectId as string)
  db_id: m().optional().describe("MongoDB ObjectId for this document")
}), Mr = {
  // Include all Container computed properties
  ...za,
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
pn.describe(JSON.stringify({
  name: "Stock",
  description: "Stock material for cutting optimization",
  version: "1.0.0",
  extends: "Container",
  computedProperties: Object.keys(Mr)
}));
var te = /* @__PURE__ */ ((t) => (t.InputRectangle = "inputRectangle", t.InputShape = "inputShape", t.InputStock = "inputStock", t.InputUserGroup = "inputUserGroup", t.InputSaw = "inputSaw", t.Rectangle = "rectangle", t.Container = "container", t.Saw = "saw", t.Shape = "shape", t.Stock = "stock", t.Group = "group", t.UserGroup = "userGroup", t.StripGroup = "stripGroup", t.FirstShapeGroup = "firstShapeGroup", t.Segment = "segment", t.Offcut = "offcut", t.Cut = "cut", t.Line = "line", t.Placeable = "placeable", t.GuillotineState = "guillotineState", t.Point = "point", t.PointCollection = "pointCollection", t.Optimiser = "optimiser", t.Machining = "machining", t.Extras = "extras", t.Issue = "issue", t))(te || {}), pd = /* @__PURE__ */ ((t) => (t.Full = "full", t.Compressed = "compressed", t))(pd || {});
const hd = /* @__PURE__ */ new Set([
  te.Container,
  te.Stock,
  te.Segment
]), gd = /* @__PURE__ */ new Set([
  te.Rectangle,
  te.Container,
  te.Stock,
  te.Segment,
  te.Placeable,
  te.Shape,
  te.Group,
  te.UserGroup,
  te.StripGroup,
  te.FirstShapeGroup,
  te.Offcut
]), md = /* @__PURE__ */ new Set([
  te.Placeable,
  te.Shape,
  te.Group,
  te.UserGroup,
  te.StripGroup,
  te.FirstShapeGroup,
  te.Offcut
]);
te.InputRectangle, te.InputShape, te.InputStock;
class ft {
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
      const l = o.constructor?.name === i, u = "getType" in o && typeof o.getType == "function" && o.getType() === e, p = l || u, d = s ? s(o) : !0;
      return p && d;
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
const yd = ft.create(te.Cut, "Cut"), gt = ft.create(
  te.Shape,
  "Shape",
  (t) => !("shapes" in t)
), Ut = ft.create(te.Stock, "Stock"), Rr = ft.create(
  te.Group,
  "Group",
  (t) => "shapes" in t && Array.isArray(t.shapes) && t.type !== "user" && t.type !== "strip"
), $s = ft.create(
  te.UserGroup,
  "Group",
  (t) => "shapes" in t && t.type === "user"
), jr = ft.create(
  te.StripGroup,
  "Group",
  (t) => "shapes" in t && t.type === "strip"
), Vr = ft.create(
  te.FirstShapeGroup,
  "Group",
  (t) => "shapes" in t && t.type === "firstShape"
), st = (t) => Rr(t) || $s(t) || jr(t) || Vr(t), ni = ft.create(
  te.InputUserGroup,
  "InputUserGroup"
), ss = ft.create(te.Segment, "Segment"), bd = ft.create(te.Offcut, "Offcut"), vd = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t._type;
  if (e && hd.has(e)) return !0;
  let i = Object.getPrototypeOf(t);
  for (; i; ) {
    if (i.constructor?.name === "Container")
      return !0;
    i = Object.getPrototypeOf(i);
  }
  return !1;
}, jk = ft.create(te.Saw, "Saw"), Br = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t._type;
  if (e && gd.has(e)) return !0;
  let i = Object.getPrototypeOf(t);
  for (; i; ) {
    if (i.constructor?.name === "Rectangle")
      return !0;
    i = Object.getPrototypeOf(i);
  }
  return t.constructor?.name === "Rectangle";
}, wd = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t._type;
  if (e && md.has(e)) return !0;
  let i = Object.getPrototypeOf(t);
  for (; i; ) {
    if (i.constructor?.name === "Placeable")
      return !0;
    i = Object.getPrototypeOf(i);
  }
  return t.constructor?.name === "Placeable";
}, Fe = ft.create(
  te.InputShape,
  "InputShape"
), ns = ft.create(
  te.InputStock,
  "InputStock"
);
ft.create(
  te.InputSaw,
  "InputSaw"
);
ft.create(
  te.GuillotineState,
  "GuillotineState"
);
ft.create(te.Line, "Line");
ft.create(te.Point, "Point");
ft.create(
  te.PointCollection,
  "PointCollection"
);
function Sd(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "__ref" in e && "autoId" in e && typeof e.__ref == "string" && typeof e.autoId == "string";
}
function Nr(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "trimmed" in e && e.trimmed === !0;
}
function kd(t) {
  if (!t || typeof t != "object") return null;
  const e = t.__entityType;
  if (e && Object.values(te).includes(e))
    return e;
  if ("getType" in t && typeof t.getType == "function")
    try {
      const i = t.getType();
      if (Object.values(te).includes(i))
        return i;
    } catch {
    }
  return yd(t) ? te.Cut : Fe(t) ? te.InputShape : ns(t) ? te.InputStock : ni(t) ? te.InputUserGroup : $s(t) ? te.UserGroup : jr(t) ? te.StripGroup : Vr(t) ? te.FirstShapeGroup : Rr(t) ? te.Group : gt(t) ? te.Shape : Ut(t) ? te.Stock : vd(t) ? te.Container : ss(t) ? te.Segment : bd(t) ? te.Offcut : Br(t) ? te.Rectangle : wd(t) ? te.Placeable : null;
}
const Ii = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "sides" in e && (!("type" in e) || e.type === "banding") && (!("validate" in e) || typeof e.validate == "function");
}, ci = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "faces" in e && (!("type" in e) || e.type === "finish") && (!("validate" in e) || typeof e.validate == "function");
}, ui = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "faces" in e && "sides" in e && (!("type" in e) || e.type === "planing") && (!("validate" in e) || typeof e.validate == "function");
}, xd = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "images" in e && (!("type" in e) || e.type === "imageUpload") && (!("validate" in e) || typeof e.validate == "function");
};
ft.create(
  te.Machining,
  "Machining",
  (t) => ("holes" in t || "corners" in t || "hingeHoles" in t) && "enabled" in t
);
ft.create(
  te.Extras,
  "Extras",
  (t) => "banding" in t || "finish" in t || "planing" in t
);
ft.create(
  te.Issue,
  "Issue",
  (t) => "type" in t && "message" in t && (t.type === "error" || t.type === "warning")
);
function Id(t) {
  return t?.__entityType === te.Shape;
}
function Vk(t) {
  return t?.__entityType === te.Group || t?.__entityType === te.StripGroup || t?.__entityType === te.FirstShapeGroup;
}
function Bk(t) {
  return t?.__entityType === te.Group || t?.__entityType === te.StripGroup || t?.__entityType === te.UserGroup || t?.__entityType === te.FirstShapeGroup;
}
function Nk(t) {
  return t?.__entityType === te.UserGroup;
}
function Ni(t) {
  return !(!t || typeof t != "string");
}
function Pd(t) {
  return !Ni(t) || !t || typeof t != "string" ? "" : t.toUpperCase();
}
function oa(t) {
  return !Ni(t) || !t || typeof t != "string" ? "" : t?.toLowerCase();
}
function Cd(t) {
  return Ni(t) ? t.trim().split(" ").map((e) => ls(e)).join(" ") : "";
}
function ls(t) {
  return Ni(t) ? t.trim().charAt(0).toUpperCase() + t.slice(1) : "";
}
function Ad(t) {
  return Ni(t) ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z\u00C0-\u024F0-9._\-|\s]/g, ""), t.trim()) : "";
}
function Td(t) {
  return Ni(t) ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), t.trim()) : "";
}
function Gk(t, e = 100) {
  return Ni(t) ? (t = t.trim(), t = t.substring(0, e), t) : "";
}
let Sa = ur;
function Od(t) {
  Sa = t;
}
function Yt(t, e) {
  if (vr() || !Sa.isInitialized)
    return t;
  const i = Sa.t(t, { ...e });
  return !i || i === t ? t : ls(i);
}
function Ld(t) {
  return typeof t == "string" && (t.startsWith("fields.") || t.startsWith("extras.") || t.startsWith("woodwork.") || t.startsWith("errors."));
}
function _d(t) {
  if (!t) return;
  const e = {};
  for (const [i, s] of Object.entries(t))
    if (Ld(s)) {
      const n = Yt(s);
      e[i] = n;
    } else
      e[i] = s;
  return e;
}
function $d(t, e) {
  const i = _u(t), s = t.startsWith("errors.validation.") ? t : i, n = _d(e);
  return {
    message: Yt(s, n),
    translationKey: s,
    params: n
  };
}
function Gr(t, e) {
  return $d(t, e).message;
}
class he {
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
    const i = $u.parse(e), s = he.determineIdentifier(i.item, i.index || []);
    let n = i.id || "";
    !n && i.item && "autoId" in i.item && i.item.autoId && (n = i.item.autoId);
    const a = i.shouldTranslate !== !1 ? Gr(i.message, i.params) : i.message;
    if (this.message = a, this.identifier = s, this.field = i.field.map((o) => [...o]), this.index = i.index ? [...i.index] : [], this.id = n, this.type = i.type, this.category = i.category || [], this.item = i.item, this.addToItemIssues(i.item), Array.isArray(i.issues) && i.issues.push(this), i.throwError) {
      const o = `Issue created for ${kd(i.item)}: ${this.identifier || "N/A"} - ${this.field.map((r) => r.join(".")).join(", ")}`;
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
    return new he({
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
va(
  (t) => t instanceof he,
  { message: "Must be an Issue instance" }
);
const ra = 10, Io = 0;
class hn extends Error {
  constructor(e) {
    super(e), this.name = "NumberFormatError";
  }
}
const Ss = {
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
function Fd(t, e) {
  let i;
  if (typeof t == "number" ? i = t : i = new Is(t).valueOf(), typeof e == "number") {
    const s = Math.pow(10, e);
    return Math.round(i * s) / s;
  }
  return i;
}
function Dd(t, e) {
  const i = new Is(t);
  if (e > 0) {
    const s = i.mul(e), n = Math.round(s.valueOf());
    return new Is(n, e).toFraction(!0);
  }
  return i.simplify().toFraction(!0);
}
function Ed(t, e, i = !1) {
  const s = t == null || String(t).trim() === "";
  if (i && s)
    return { value: null, valid: !1, message: "errors.validation.field.required" };
  if (!i && s)
    return { value: null, valid: !0 };
  const n = String(t);
  try {
    const a = qr(n, !0), o = parseFloat(a ?? ""), r = a !== null && a !== "" && !isNaN(o) && isFinite(o);
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
function Md(t = "en-US") {
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
function Qs(t) {
  if (t == null || t === "") return null;
  const e = String(t).trim();
  if (!e) return null;
  try {
    const { thousandsSeparator: i, decimalSeparator: s } = Md(), n = e.replace(new RegExp(`\\${i}`, "g"), "").replace(new RegExp(`\\${s}`, "g"), "."), a = Number(n);
    return isFinite(a) ? a : null;
  } catch (i) {
    throw new hn(`Failed to parse locale number: "${t}". ${i.message || "Parsing error"}`);
  }
}
function Ua(t) {
  if (!t) return !1;
  const e = t.toString().trim();
  if (!e) return !1;
  const i = Object.keys(Ss).join("");
  return new RegExp(
    `^-?((\\d+\\s+)?\\d+\\/\\d+|\\d+|\\d+[${i}]|[${i}]|\\d+'(?:\\s*\\d+(?:\\/\\d+)?"?)?|(\\d+\\s+)?\\d+\\/\\d+"|\\d+")$`
  ).test(e);
}
function qr(t, e = !1) {
  if (t == null || t === "") return null;
  let i = String(t).trim();
  if (!i) return null;
  const s = Object.keys(Ss).join("");
  i = i.replace(new RegExp(`(\\d)\\s+([${s}])`, "g"), "$1$2");
  try {
    const n = Object.keys(Ss).join(""), a = new RegExp(`^(-?)(\\d+)([${n}])$`), o = new RegExp(`^(-?)([${n}])$`), r = i.match(a), l = i.match(o);
    if (r) {
      const c = r[1], u = r[2], p = r[3], d = Ss[p];
      if (d)
        return `${c}${u} ${d}`;
      throw new Error(`Unknown vulgar fraction character: ${p}`);
    } else if (l) {
      const c = l[1] || "", u = l[2], p = Ss[u];
      if (p)
        return `${c}${p}`;
      throw new Error(`Unknown vulgar fraction character: ${u}`);
    } else if (Ua(i)) {
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
      const u = e ? Qs(i) : parseFloat(i);
      return u === null || isNaN(u) || !isFinite(u) ? null : u.toString();
    }
  } catch (n) {
    throw new hn(
      `Failed to clean numeric input: "${t}". ${n.message || "Cleaning error"}`
    );
  }
}
function Po(t, e, i = null, s = null) {
  if (t && !(!Fe(t) && !ns(t))) {
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
function Rd(t) {
  return /^-?\d*\.?\d+$/.test(t);
}
function jd(t) {
  return /^-?(\d+\s+)?\d+\/\d+$/.test(t) || /^-?\d+$/.test(t);
}
function K(t) {
  if (t.v == null || t.v === "")
    return t.nf === "decimal" || !t.nf && t.o?.numberFormat !== "fraction" ? null : "";
  const e = t.o ?? {}, i = t.nf ?? e?.numberFormat ?? "decimal", s = t.dp ?? e?.decimalPlaces ?? ra, n = t.pl ?? e?.parseLocale ?? !1, a = t.fr ?? e?.fractionRoundTo ?? Io;
  if (i === "decimal") {
    if (typeof t.v == "number") {
      if (typeof s == "number" && s !== ra) {
        const o = Math.pow(10, s);
        return Math.round(t.v * o) / o;
      }
      return t.v;
    }
    if (typeof t.v == "string") {
      const o = t.v.trim();
      if (Rd(o) && !n) {
        const r = parseFloat(o);
        if (isFinite(r)) {
          if (typeof s == "number" && s !== ra) {
            const l = Math.pow(10, s);
            return Math.round(r * l) / l;
          }
          return r;
        }
      }
    }
  } else if (i === "fraction" && typeof t.v == "string") {
    const o = t.v.trim();
    if (jd(o))
      try {
        const r = new Is(o);
        if (isFinite(r.valueOf())) {
          if (a === 0 || a === Io)
            return r.toFraction(!0);
          const l = r.mul(a), c = Math.round(l.valueOf());
          return new Is(c, a).toFraction(!0);
        }
      } catch {
      }
  }
  try {
    const o = qr(t.v, n);
    return o === null || o === "" ? i === "decimal" ? null : "" : i === "decimal" ? Fd(o, s) : Dd(o, a);
  } catch (o) {
    throw o instanceof hn ? o : new hn(
      `Failed to convert number format: "${t.v}" to ${i}. ${o.message}`
    );
  }
}
const oi = {
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
function dt(t, e) {
  if (e?.returnKey)
    return `fields.${t}`;
  const i = `fields.${t}`, s = Yt(i);
  if (s === i) {
    const n = oi[t] || t;
    return gi() && !oi[t] && console.warn(`[field-mappings] No translation or fallback for field: "${t}"`), n;
  }
  return gi() && console.log(`[field-mappings] Translated "${t}" -> "${s}"`), s;
}
const zr = (t, e, i, s, n, a) => {
  const o = Xe(t, e);
  if (o == null || o === "") return;
  if (typeof o != "string") {
    new he({
      item: t,
      message: Yt("errors.validation.must_be_string", {
        0: oi[e]
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
  i.includes(r) || new he({
    item: t,
    message: Yt("errors.validation.must_be_values", {
      0: oi[e],
      1: i.join(", ")
    }),
    shouldTranslate: !1,
    field: [[e]],
    index: s !== void 0 ? [s] : null,
    type: n ? "warning" : "error",
    issues: a
  });
};
function Wr(t) {
  return t.filter((e) => e.type === "error");
}
function Vd(t, e) {
  return typeof t == "object" && t !== null && e in t;
}
function Bd(t) {
  return Vd(t, "issues") && Array.isArray(t.issues);
}
function Co(t, e, i = !1) {
  if (!Bd(t) || !t.issues?.length)
    return !1;
  const s = i ? "warning" : "error";
  return t.issues.filter((o) => o.type === s).some((o) => o.field?.length ? o.field.some((r) => r.every((l, c) => l === Gd(e[c]))) : !1);
}
const Nd = {
  partMaterial: "material",
  stockMaterial: "material"
};
function Gd(t) {
  return Nd[t] ?? t;
}
const qd = ["banding", "finish", "planing", "info"], la = m().refine(
  (t) => t.startsWith("side.") || t.startsWith("face."),
  { message: 'Location must start with "side." or "face."' }
).transform((t) => t), jt = Se([
  z(),
  m(),
  ve(m(), Se([z(), m()]))
  // Object-based values: { type: 'oak', thickness: '1mm', test: true }
]), _n = Zt.extend({
  // ========== Identity ==========
  type: Ce(qd).optional().describe("Type of extra"),
  enabled: z().default(!0).describe("Whether extra is enabled"),
  // ========== Face/Side mappings (superset - each extra uses what it needs) ==========
  // Face values (front/back) - partial record to allow any subset of faces
  faces: j({
    a: jt.optional(),
    b: jt.optional()
  }).optional().describe("Partial mapping of face keys to extra values"),
  // Side values (edges) - partial record to allow any subset of sides
  sides: j({
    a: jt.optional(),
    b: jt.optional(),
    c: jt.optional(),
    d: jt.optional(),
    l1: jt.optional(),
    l2: jt.optional(),
    w1: jt.optional(),
    w2: jt.optional()
  }).optional().describe("Partial mapping of side keys to extra values")
  // NOTE: Options are now centralized in CalculationData.extrasOptions
  // No per-shape options are stored - all extras use centralized configuration
}), Ha = {
  // Inherit computed properties from validation base
  ...ki
  // Add any extra-specific computed properties here
};
ve(
  Ce(["a", "b"]),
  jt
);
ve(
  Ce(["l1", "l2", "w1", "w2", "a", "b", "c", "d"]),
  jt
);
const Ur = j({
  min: f().optional().describe("Minimum value"),
  max: f().optional().describe("Maximum value"),
  message: m().optional().describe("Custom error message")
});
j({
  scope: Ce(["face", "side"]),
  key: m(),
  // Face or Side key
  original: m()
  // Original ExtraLocation string
});
const zd = j({
  location: m().describe("Location identifier (e.g., face.a, side.l1)"),
  properties: ve(m(), Ur).optional(),
  disabledMessage: m().optional().describe("Message when location is disabled")
}), Wd = j({
  global: ve(m(), Ur).optional(),
  locations: ee(zd).optional().describe("Location-specific constraints"),
  defaultMessage: m().optional().describe("Default message when constraints not met")
});
j({
  scope: ee(Ce(["faces", "sides"])).describe("Scopes this extra type supports"),
  faces: ee(va()).optional().describe("Available face locations"),
  sides: ee(va()).optional().describe("Available side locations"),
  constraints: Wd.optional()
});
const Hr = _n, Ud = {
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
}, Hd = ["radius", "bevel"], Yd = Zt.extend({
  // Corner type
  type: Ce(Hd).nullable().optional().describe("Type of corner modification"),
  // Size of the corner modification
  size: f().nonnegative().nullable().default(0).describe("Size of the corner modification in mm"),
  // Corner index
  index: f().min(0).max(3).default(0).describe("Corner index (0=BL, 1=BR, 2=TR, 3=TL)")
}), Kd = {
  // Inherit computed properties from validation base
  ...ki,
  // Check if corner has any operation
  hasOperation: {
    compute: (t) => t.type !== void 0 && t.size > 0,
    metadata: {
      cache: !0,
      dependencies: ["type", "size"],
      returnType: "boolean"
    }
  }
}, Zd = ["l", "w"], Jd = ["top", "bottom", "left", "right", "merged"], Yr = j({
  // Coordinates
  x1: f().default(0),
  x2: f().default(0),
  y1: f().default(0),
  y2: f().default(0),
  // Dimension and position
  dimension: Ce(Zd).optional(),
  position: Ce(Jd).optional(),
  // Stock reference - required as cuts cannot exist without a stock
  stock: De("Stock"),
  // Guillotine properties
  isGuillotine: z().default(!1),
  guillotineState: j({
    order: f().nullable().optional(),
    parentSegmentID: m().nullable().optional(),
    phase: f().nullable().optional(),
    segmentCutOrder: f().nullable().optional(),
    partProduced: m().nullable().optional()
  }).nullable().default({}),
  // PTX properties
  ptxData: j({
    order: f().nullable().optional(),
    function: f().nullable().optional(),
    isDummy: z().nullable().optional(),
    headCutStrip: z().nullable().optional()
  }).nullable().optional(),
  // Cut properties
  isHead: z().default(!1),
  isTrim: z().default(!1),
  beamTrimL1: z().default(!1),
  beamTrimL2: z().default(!1),
  beamTrimW1: z().default(!1),
  beamTrimW2: z().default(!1),
  // Distances
  distances: j({
    bottom: f().nullable().optional(),
    left: f().nullable().optional(),
    right: f().nullable().optional(),
    top: f().nullable().optional(),
    partSize: f().nullable().optional()
  }).nullable().optional(),
  // Runtime flags
  remove: z().optional().behavior({ compress: "exclude" })
}), Xd = {
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
}, Qd = Zt.extend({
  // Identity
  id: m().optional().describe("Unique identifier for the extras container"),
  // Individual extras - using ref for proper typing
  // Override default reference behavior to serialize full data for proper __entityType markers
  banding: De("Banding", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Edge banding configuration"),
  finish: De("Finish", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Surface finish configuration"),
  planing: De("Planing", {
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
}), ef = {
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
}, Kr = _n, tf = {
  // Inherit computed properties from Extra base (includes validation base)
  ...Ha,
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
}, sf = ["l1", "l2", "w1", "w2"], nf = Zt.extend({
  // Position
  position: f().min(0).default(0).describe("Position along the side"),
  side: Ce(sf).describe("Side where hinge is placed"),
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
}), af = {
  // Inherit computed properties from validation base
  ...ki,
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
}, of = ["regular", "hinge", "shelf"], rf = Zt.extend({
  // Position
  x: f().min(0).default(0).describe("X position from left edge"),
  y: f().min(0).default(0).describe("Y position from bottom edge"),
  // Dimensions
  diameter: f().min(0.1).default(5).describe("Hole diameter in mm"),
  depth: f().min(0).optional().describe("Hole depth (undefined for through hole)"),
  // Configuration
  face: f().default(0).describe("Face index (0=front, 1=back)"),
  type: Ce(of).default("regular").describe("Type of hole")
}), lf = {
  // Inherit computed properties from validation base
  ...ki,
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
const cf = (t, e) => Re(t, e), uf = ["efficiency", "guillotine", "beam", "none"], ka = ["l", "w", "none"], df = ["efficiency", "time"], ff = ["l", "w"], Zr = ["efficiency", "smallest"], pf = ["dimensions", "identical", "none"], gn = ["sheet", "linear", "roll"], $n = Se([
  f().int().positive(),
  Si(),
  Zc()
]).transform((t) => t ?? 100).describe("Maximum stack height for beam saw stacking"), Fn = Ce(uf).nullable().optional().transform((t) => t === null ? void 0 : t), Dn = Ce(ka).nullable().optional().transform((t) => t === null ? void 0 : t), En = Ce(Zr).default("efficiency").describe("Method for selecting stocks"), Mn = Ce(pf).default("identical").describe("How to stack identical parts"), Rn = j({
  strategy: Ce(df).default("efficiency"),
  maxPhase: f().int().min(0).max(10).default(0),
  headCuts: z().default(!1)
}).default({
  strategy: "efficiency",
  maxPhase: 0,
  headCuts: !1
}), jn = j({
  primaryCompression: Ce(ff).default("w")
}).default({
  primaryCompression: "w"
});
j({
  stockType: Ln,
  /**
   * Stack height - Maximum stack height
   */
  stackHeight: $n,
  /**
   * Cut type - Type of cutting algorithm
   */
  cutType: Fn,
  /**
   * Cut preference - Preferred cutting direction
   */
  cutPreference: Dn,
  /**
   * Guillotine options - Configuration for guillotine cutting
   */
  guillotineOptions: Rn,
  /**
   * Efficiency options - Configuration for efficiency optimization
   */
  efficiencyOptions: jn,
  /**
   * Stock selection - Method for selecting stocks
   */
  stockSelection: En,
  /**
   * Stacking mode - How to stack identical parts
   */
  stackingMode: Mn
});
const Jr = f().min(0).default(0), Ya = f().min(0).default(0), Xr = f().min(0).default(0), hf = j({
  dimension: Ya,
  minSpacing: Xr
});
function xa(t) {
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
function Ia(t, e) {
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
const gf = Re(
  Fn,
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
), mf = Re(
  Dn,
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
), yf = Re(
  En,
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
), bf = Re(
  Mn,
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
), vf = Re(
  Rn,
  {
    label: "fields.guillotineOptions",
    group: "guillotine",
    order: 1,
    type: "object"
  }
), wf = Re(
  jn,
  {
    label: "fields.efficiencyOptions",
    group: "efficiency",
    order: 1,
    type: "object"
  }
), ts = (t) => {
  const { min: e, allowZero: i = !1, nullable: s = !0 } = t || {};
  let n;
  return e !== void 0 ? n = i ? f().min(e) : f().min(e) : n = i ? f().min(0) : f().gt(0), s ? Se([
    n,
    m(),
    Si()
  ]).transform((a) => a == null || a === "" ? null : typeof a == "string" ? K({ v: a }) ?? null : a) : Se([
    n,
    m()
  ]).transform((a) => a === "" ? 0 : typeof a == "string" ? K({ v: a }) ?? 0 : a);
}, Qr = () => Re(
  rs,
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
), Sf = () => Re(
  Ar,
  {
    label: "fields.orientationLock",
    group: "properties",
    options: [
      { value: "", label: "fields.orientationLock.free" },
      { value: "l", label: "fields.orientationLock.length" },
      { value: "w", label: "fields.orientationLock.width" }
    ]
  }
), en = (t) => Re(
  ts({ allowZero: t.allowZero, nullable: !0 }).default(null),
  {
    label: t.label,
    placeholder: t.placeholder || "",
    group: "dimensions",
    allowZero: t.allowZero || !1,
    output: "number"
  }
), kf = () => Re(
  Ct(
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
), xf = (t) => Re(
  m().max(200).optional().transform((e) => e ? e.trim().toUpperCase() : ""),
  {
    label: "fields.name",
    placeholder: t?.placeholder || "",
    group: "general"
  }
), If = () => Re(
  m().max(200).optional().transform((t) => t ? t.trim().toUpperCase() : ""),
  {
    label: "fields.material",
    placeholder: "fields.material",
    group: "properties"
  }
), Pf = () => Re(
  ts({ allowZero: !0, nullable: !0 }).optional().transform((t) => {
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
), Cf = () => Re(
  Jc().max(500).transform((t) => t.replace(/,/g, " ")).optional(),
  {
    label: "fields.notes",
    placeholder: "fields.notes",
    group: "general"
  }
), Af = (t) => Re(
  z().default(!1),
  t
), Tf = (t, e) => Re(
  Ce(t),
  e
), pi = {
  field: Re,
  boolean: Af,
  enum: Tf,
  custom: cf
}, mi = j({
  ...Zt.shape,
  // ========== Stock Type ==========
  stockType: Re(
    Ce([...gn]).default("sheet"),
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
    ts({ allowZero: !0, nullable: !1 }).default(0),
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
    $n,
    {
      label: "fields.stackHeight",
      group: "stacking",
      order: 1,
      step: 1,
      info: "If your saw supports cutting multiple stock simultaneously, set the maximum total allowed height."
    }
  ),
  cutType: gf,
  cutPreference: mf,
  // ========== Guillotine Options ==========
  guillotineOptions: vf,
  // ========== Efficiency Options ==========
  efficiencyOptions: wf,
  // ========== General Options ==========
  options: j({
    stockSelection: yf,
    minSpacing: ts({ allowZero: !0, nullable: !1 }).default(0),
    stackingMode: bf,
    minSpacingDimension: j({
      dimension: ts({ allowZero: !0, nullable: !0 }).optional(),
      minSpacing: ts({ allowZero: !0, nullable: !0 }).optional()
    }).optional()
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical"
  })
}), Of = {
  // Include validation computed properties (isValid)
  ...ki,
  // Get valid cut types for current stock type
  validCutTypes: {
    compute: (t) => xa(t.stockType),
    metadata: {
      cache: !0,
      dependencies: ["stockType"],
      description: "Valid cut types for current stock type",
      returnType: "CutType[]"
    }
  },
  // Get valid cut preferences for current stock type and cut type
  validCutPreferences: {
    compute: (t) => Ia(t.stockType, t.cutType),
    metadata: {
      cache: !0,
      dependencies: ["stockType", "cutType"],
      description: "Valid cut preferences for current stock type and cut type",
      returnType: "CutPreference[]"
    }
  }
}, Lf = j({
  // Entity type added during serialization by toData() method
  // Used for automatic class recreation during deserialization
  __entityType: m().optional().describe("Entity type added during serialization by AutoSerializable.toData()"),
  // Reference marker for reference-based recreation
  // Used when objects reference each other
  __ref: m().optional().describe("Reference marker for object recreation")
}), _f = j({
  // ========== Selection State (excluded from compression) ==========
  selected: pi.boolean({
    label: "fields.selected",
    description: "Whether item is selected for multi-edit"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  multiEdit: pi.boolean({
    label: "fields.multiEdit",
    description: "Whether this is the multi-edit item"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  readonly: pi.boolean({
    label: "fields.readonly",
    description: "Whether input is readonly"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Validation State (excluded from compression and serialization) ==========
  isNew: pi.boolean({
    label: "fields.isNew",
    description: "Whether this is a newly created item that should skip validation until first user interaction",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" })
}), $f = j({
  l1: Re(
    Ct((t) => t ?? 0, f()).default(0),
    { label: "fields.l1", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  l2: Re(
    Ct((t) => t ?? 0, f()).default(0),
    { label: "fields.l2", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  w1: Re(
    Ct((t) => t ?? 0, f()).default(0),
    { label: "fields.w1", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  w2: Re(
    Ct((t) => t ?? 0, f()).default(0),
    { label: "fields.w2", group: "trim", allowZero: !0, min: 0, required: !1 }
  )
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 }), Ff = Ct(
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
  $f
), Df = j({
  // ========== Identity ==========
  id: Ir,
  index: f().int().min(0).optional(),
  // ========== Dimensions ==========
  // Input dimensions can be strings (for fractions) or numbers
  l: en({
    label: "fields.l",
    placeholder: "fields.l"
  }),
  w: en({
    label: "fields.w",
    placeholder: "fields.w"
  }),
  t: en({
    label: "fields.t",
    placeholder: "fields.t"
  }),
  q: kf(),
  // ========== Material Properties ==========
  // Input name with uppercase transform
  name: xf(),
  material: If(),
  // ========== Cost ==========
  cost: Pf(),
  // ========== Trim Configuration ==========
  trim: Ff,
  // ========== Rotation (Runtime) ==========
  rot: Ba.default(0),
  // ========== Flags ==========
  preventAutoRotation: pi.boolean({
    label: "fields.preventAutoRotation",
    description: "Prevent automatic rotation during optimization",
    group: "options"
  }),
  offcut: pi.boolean({
    label: "fields.offcut",
    description: "Mark as offcut material",
    group: "options"
  }),
  processed: pi.boolean({
    label: "fields.processed",
    description: "Has been processed",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Notes ==========
  notes: Cf()
}), mn = j({
  ...Lf.shape,
  // System properties from AutoSerializable
  ...Zt.shape,
  ...Df.shape,
  // Core business fields
  ..._f.shape,
  // Input-specific UI fields
  // Override id with strict validation for input shapes/stock (allows blank)
  id: m().regex(/^(\d+\.\d+)?$/, 'ID must be blank or in format "1.0" (e.g., "1.0", "2.1")').default("").describe('Structured identifier for input shapes/stock in format 1.0 (e.g., "1.0") or blank')
}), Ka = {
  // Include validation computed properties (isValid)
  ...ki,
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
}, yi = mn.extend({
  // Add grain field for shapes
  //[] is grain needed for inputs?
  grain: Qr(),
  // Add orientationLock with input-specific transform
  orientationLock: Sf(),
  // ========== Shared Shape Properties ==========
  upDirection: Re(
    Fr,
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
    $r,
    { label: "fields.stockLock" }
  ),
  // ========== Stock Matching ==========
  stockMatch: ld.nullable().optional(),
  // ========== Custom Data ==========
  customData: Re(
    Dr,
    { label: "fields.customData", description: "Custom user-defined data" }
  ),
  // ========== UI Extension (excluded from compression) ==========
  selectedMaterial: Re(
    we().optional(),
    { label: "fields.selectedMaterial", description: "Selected material object" }
  ).behavior({ compress: "exclude" }),
  // ========== Machining ==========
  // Override default reference behavior to serialize full data
  machining: De("Machining", {
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
  extras: De("Extras", {
    nullable: !0,
    description: "Extras container for this shape",
    fieldBehavior: {
      serialize: "full",
      // Always serialize full extras data, not just a reference
      compress: "full",
      // Include full data in compressed mode too
      clone: "copy"
    }
  }).optional(),
  // ========== Full Stock ==========
  // When true, purchase entire sheet without cutting
  fullStock: Re(
    z().default(!1),
    {
      label: "fields.fullStock",
      description: "Purchase full stock sheet without cutting",
      group: "properties"
    }
  )
}), Ef = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...Ka,
  // Check if has grain direction
  hasGrain: {
    compute: (t) => t.grain === "l" || t.grain === "w",
    metadata: {
      cache: !1,
      dependencies: ["grain"],
      returnType: "boolean"
    }
  }
}, Ht = j({
  ...mn.shape,
  ...Tr.shape,
  // ========== Stock-specific Properties ==========
  // Override l to allow 0 for infinite length rolls
  l: en({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !0
  }),
  // Add grain field for stock
  grain: Qr(),
  preventGrainRotation: pi.boolean({
    label: "fields.preventGrainRotation",
    description: "Prevent rotation that would change grain direction",
    group: "options",
    order: 4
  }),
  // Stock-specific flags (infiniteLength is now in sharedStockPropertiesSchema from merge above)
  used: pi.boolean({
    label: "fields.used",
    description: "Whether stock has been used"
  }),
  // Display and filtering properties
  color: Re(
    Cr,
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
    Se([m().url(), xe("")]).optional(),
    {
      label: "fields.imageUrl",
      description: "Image URL for stock display",
      group: "display",
      order: 3
    }
  ),
  // Stock filter and categorization properties
  tags: Re(
    ee(m()).optional(),
    {
      label: "fields.tags",
      description: "Searchable tags for filtering",
      group: "display",
      order: 4
    }
  ),
  available: Re(
    z().optional(),
    {
      label: "fields.available",
      description: "Whether stock is available for selection (defaults to true)",
      group: "display",
      order: 5
    }
  ),
  // Database ID (MongoDB ObjectId as string)
  db_id: Re(
    m().optional(),
    {
      label: "fields.db_id",
      description: "MongoDB ObjectId for this document",
      group: "system"
    }
  ),
  // ========== Custom Data ==========
  customData: Re(
    Dr,
    { label: "fields.customData", description: "Custom user-defined data" }
  ),
  // Saw configuration (excluded from compression)
  saw: Re(
    we().optional(),
    { label: "fields.saw", description: "Saw configuration data" }
  ).behavior({ compress: "exclude" }),
  // Available extras from material (for e-commerce checkout)
  // Contains arrays of extra IDs that are available for this stock item
  extras: Re(
    j({
      banding: ee(m()).optional(),
      finish: ee(m()).optional(),
      planing: ee(m()).optional(),
      machining: ee(m()).optional()
    }).optional(),
    {
      label: "fields.extras",
      description: "Available extras for this stock (inherited from material)",
      group: "display"
    }
  )
}), Mf = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...Ka
  // InputStock doesn't define additional computed properties
}, Vn = Zt.extend({
  // ========== Identification ==========
  id: m().optional().describe("Unique identifier"),
  // ========== Shape References ==========
  shapeIds: ee(m()).default([]).describe("List of shape IDs in this group"),
  shapes: ee(m()).default([]).transform((t) => t?.map(String) ?? []).describe("Shape identifiers"),
  // ========== Group Properties ==========
  direction: Wa,
  // 'horizontal' | 'vertical'
  q: f().int().min(1).default(1).describe("Quantity of groups"),
  duplicate: z().default(!1).describe("If a duplicate"),
  // ========== Material Properties (from Group) ==========
  name: m().optional().describe("Group name"),
  material: m().optional().describe("Material type"),
  grain: rs.describe("Grain direction"),
  // ========== Stock Matching (excluded during compression) ==========
  stockMatch: j({
    stockId: m().optional(),
    material: m().optional(),
    thickness: f().optional(),
    grain: rs.optional()
  }).optional().describe("Matching stock information").behavior({ compress: "exclude" }),
  // ========== Runtime Properties ==========
  shapeList: ee(we()).optional().describe("Runtime shape list for validation").behavior({ compress: "exclude" })
}), Rf = {
  // Include validation computed properties (isValid)
  ...ki
  // InputUserGroup doesn't define additional computed properties
};
j({
  parts: ee(f()).describe("Indices of shapes/parts in the parts array (user-friendly name for shapes)"),
  direction: Wa,
  q: f().int().min(1).describe("Quantity of groups")
});
const jf = Zt.extend({
  // Collections of machining operations
  holes: He("Hole").default([]).describe("Array of holes").behavior({
    serialize: "full",
    clone: "copy"
  }),
  hingeHoles: He("HingeHole").default([]).describe("Array of hinge hole sets").behavior({
    serialize: "full",
    clone: "copy"
  }),
  corners: He("Corner").default([]).describe("Array of corner operations").behavior({
    serialize: "full",
    clone: "copy"
  }),
  // Validation
  enabled: z().default(!0).describe("Whether machining is enabled")
}), Vf = {
  // Inherit computed properties from validation base
  ...ki,
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
}, Bf = {
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
}, el = _n, Nf = {
  // Inherit computed properties from Extra base
  ...Ha,
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
}, Gf = j({
  // ========== Storage ==========
  // Points stored as a map (will be converted to/from Map in class)
  // In serialized form this is a record, at runtime it's a Map
  points: Se([
    Xc(m(), De("Point")),
    ve(m(), De("Point"))
  ]).default(() => /* @__PURE__ */ new Map())
}), qf = {
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
}, Pa = Zt.extend({
  // Core properties from shared schema
  stockType: Ln,
  stackHeight: $n.describe("Maximum stack height"),
  cutType: Fn,
  cutPreference: Dn,
  // Blade width (numeric for runtime)
  bladeWidth: Jr.describe("Blade width"),
  // Guillotine options
  guillotineOptions: Rn,
  // Efficiency options
  efficiencyOptions: jn,
  // General options (nested stockSelection and stackingMode)
  options: j({
    stockSelection: En,
    minSpacing: Xr,
    stackingMode: Mn,
    minSpacingDimension: hf
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical",
    minSpacingDimension: {
      dimension: 0,
      minSpacing: 0
    }
  }).describe("General saw options")
}), zf = {
  // Include validation computed properties
  ...ki,
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
Pa.describe(JSON.stringify({
  name: "Saw",
  description: "Runtime saw configuration for optimization",
  version: "1.0.0",
  category: "configuration"
}));
const Qi = 1e-10, Wf = 10, Uf = Number.MAX_SAFE_INTEGER, Hf = 4294967295, Tt = (t) => typeof t == "number" && Number.isFinite(t), tn = (t) => Array.isArray(t) && t.length > 0;
function bs(t, e, i = Qi) {
  if (t === e) return 0;
  if (Number.isInteger(t) && Number.isInteger(e))
    return t > e ? 1 : -1;
  const s = t - e;
  return Math.abs(s) < i ? 0 : s;
}
const Yf = {
  greaterThan: (t, e, i = Qi) => !Tt(t) || !Tt(e) ? !1 : bs(t, e, i) > 0,
  greaterThanOrEqualTo: (t, e, i = Qi) => !Tt(t) || !Tt(e) ? !1 : bs(t, e, i) >= 0,
  lessThan: (t, e, i = Qi) => !Tt(t) || !Tt(e) ? !1 : bs(t, e, i) < 0,
  lessThanOrEqualTo: (t, e, i = Qi) => !Tt(t) || !Tt(e) ? !1 : bs(t, e, i) <= 0,
  equalTo: (t, e, i = Qi) => !Tt(t) || !Tt(e) ? !1 : bs(t, e, i) === 0
};
function Kf(t) {
  return Tt(t) ? Number.isInteger(t) ? t : Number(t.toFixed(Wf)) : !1;
}
function Zf(t) {
  if (!Tt(t) || t < 0 || t > Uf)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (Hf + 1) * t);
}
function Jf(t, e) {
  if (!tn(t))
    throw new Error("Invalid array parameter");
  if (!Tt(e) || e < 0 || e > t.length)
    throw new Error("Invalid size parameter");
  const i = t.slice(), s = t.length - e;
  for (let n = t.length - 1; n >= s; n--) {
    const a = Math.floor(Math.random() * (n + 1));
    [i[n], i[a]] = [i[a], i[n]];
  }
  return i.slice(s);
}
class Bs {
  static calculateMean(e) {
    if (!tn(e))
      throw new Error("Invalid input array");
    return e.reduce((i, s) => i + s, 0) / e.length;
  }
  static calculateStandardDeviation(e, i = null) {
    if (!tn(e))
      throw new Error("Invalid input array");
    const s = i ?? this.calculateMean(e), n = e.reduce((a, o) => {
      const r = o - s;
      return a + r * r;
    }, 0) / e.length;
    return Math.sqrt(n);
  }
  static calculateCoefficientOfVariation(e) {
    if (!tn(e))
      throw new Error("Invalid input array");
    const i = this.calculateMean(e);
    if (i === 0)
      throw new Error("Mean is zero, coefficient of variation undefined");
    return this.calculateStandardDeviation(e, i) / i;
  }
}
const ge = {
  ...Yf,
  isNumber: Tt,
  round: Kf,
  getRandom: Zf,
  getRandomSample: Jf,
  calculateStandardDeviation: Bs.calculateStandardDeviation.bind(Bs),
  calculateCoefficientOfVariation: Bs.calculateCoefficientOfVariation.bind(Bs)
};
function Ao(t) {
  return t && typeof t == "object" && typeof t.toData == "function";
}
let To = 0, Oo = Date.now();
const Xf = 1e4;
function Qf() {
  return To % Xf === 0 && (Oo = Date.now()), `${Oo}-${(To++).toString(36)}`;
}
class ep {
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
    this.autoId = e?.autoId || Qf(), Object.defineProperty(this, "_serializationMode", {
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
      const i = ys(e.schema), s = e.schema;
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
          } else if (l === "ZodUnion" && o._def.options?.length > 0) {
            const c = o._def.options, u = s ? `${s}.${n}` : n;
            for (const p of c) {
              if (!p) continue;
              const d = wa(p);
              if (d) {
                const h = u;
                i[h] || (i[h] = d);
                break;
              }
            }
            for (const p of c) {
              if (!p || !p._def) continue;
              const d = ys(p);
              for (const [h, k] of Object.entries(d)) {
                const N = s ? `${s}.${n}.${h}` : `${n}.${h}`;
                i[N] || (i[N] = k);
              }
              if (p && p.shape) {
                const h = s ? `${s}.${n}` : n;
                this.extractNestedBehaviors(p.shape, i, h);
              }
            }
            o = null;
            break;
          } else
            break;
        }
        if (!o) continue;
        const r = ys(o);
        for (const [l, c] of Object.entries(r)) {
          const u = s ? `${s}.${n}.${l}` : `${n}.${l}`;
          i[u] = c;
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
        const c = this[r];
        if (typeof c == "function" || c === void 0) continue;
        const u = n[r];
        a === "compressed" && u?.compress === "exclude" || u?.serialize === "exclude" || (i[r] = this.serializeValue(c, u, a, r, n));
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
        const c = r[l];
        if (c !== void 0) {
          const u = Object.getOwnPropertyDescriptor(this, l) || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this), l);
          if (u && u.get && !u.set)
            continue;
          this[l] = c;
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
        if (s instanceof es) {
          const n = s.issues.map((a) => new he({
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
      const h = s.pop() || "0", k = parseInt(h, 10);
      isNaN(k) && s.push(h), n = String(e);
    } else {
      const h = s.pop() || "0", k = parseInt(h, 10);
      isNaN(k) ? (s.push(h), n = "1") : n = String(k + 1);
    }
    s.push(n);
    const a = s.join("."), r = `${this.autoId.includes(".") ? this.autoId.substring(0, this.autoId.indexOf(".")) : this.autoId}.${n}`, l = this.constructor, c = this.getDirectPropertyCopy(i), u = l.schema;
    let p = {};
    u && (p = ys(u));
    const d = l.defaults || (u ? u.parse({}) : {}) || {};
    for (const [h, k] of Object.entries(p))
      k.clone === "reset" && (h in d ? c[h] = d[h] : delete c[h]);
    return "id" in c && (c.id = a), c.autoId = r, c.duplicate = !0, c.skipValidation = !0, new l(c);
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
            const c = Object.getOwnPropertyDescriptor(l, n);
            if (c && c.get) {
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
    if (a && (o = ys(a)[i] || null), o?.clone)
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
        if (Ao(o)) {
          if (i?.serialize === "reference" || s === "compressed" && i?.compress === "reference") {
            const c = "autoId" in o && o.autoId, u = typeof o.getType == "function";
            if (c) {
              const p = u ? o.getType() : o.constructor.name;
              return {
                __ref: !0,
                id: o?.id,
                autoId: o.autoId,
                __entityType: p
              };
            }
          }
          const l = s === "compressed" ? "compressed" : "full";
          return o.toData(l);
        }
        return o;
      });
    if (Ao(e)) {
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
      const r = s === "compressed" ? "compressed" : "full";
      return e.toData(r);
    }
    if (e && typeof e == "object" && e.constructor === Object) {
      const o = {}, r = a || this.getFieldBehaviors();
      for (const l in e)
        if (Object.prototype.hasOwnProperty.call(e, l)) {
          const c = n ? `${n}.${l}` : l, u = r[c];
          if (s === "compressed" && u?.compress === "exclude" || u?.serialize === "exclude")
            continue;
          o[l] = this.serializeValue(e[l], u, s, c, r);
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
    const n = Os().get(i);
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
class Je extends ep {
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
    Je.recreateFunc = e;
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
      let r = Je._schemaKeysCache.get(i);
      if (!r) {
        const l = i.shape || i._def?.shape;
        l && (r = Object.keys(l), Je._schemaKeysCache.set(i, r));
      }
      if (r) {
        const l = {};
        for (const c of r)
          c in o && (l[c] = o[c]);
        o = l;
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
        const c = l.path[0];
        n.includes(c) || o.add(c);
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
      const s = e.__entityType || i, a = Os().get(s);
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
    return e && typeof e == "object" ? (s && (e.id || e.autoId), Je.recreateFunc ? Je.recreateFunc(e, s, i) : { ...e, __ref: i }) : e;
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
    if (Je._computedPropsInitialized.has(e)) return;
    const i = e.computedProperties;
    if (!i) {
      Je._computedPropsInitialized.add(e);
      return;
    }
    const s = e.prototype;
    for (const [n, a] of Object.entries(i)) {
      if (!a || typeof a != "object") continue;
      const o = a;
      o.compute && (Object.prototype.hasOwnProperty.call(s, n) && Object.getOwnPropertyDescriptor(s, n)?.get || Object.defineProperty(s, n, {
        get() {
          return o.compute(this);
        },
        enumerable: !1,
        configurable: !0
      }));
    }
    Je._computedPropsInitialized.add(e);
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
      if (i instanceof es)
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
      return e.map((s) => Je.cleanEntityForAPI(s));
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
      if (o instanceof Qc) {
        const r = o.options.some((c) => c instanceof eu), l = o.options.some((c) => c instanceof tu);
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
    if (e instanceof iu || e instanceof su)
      return this.unwrapSchema(e._def?.innerType);
    if (e instanceof nu)
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
class ji extends Je {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Du;
  static computedProperties = Eu;
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
    return te.Line;
  }
  /**
    * Validate line
    */
  validate() {
    const e = [];
    return (!ge.isNumber(this.x1) || !ge.isNumber(this.x2) || !ge.isNumber(this.y1) || !ge.isNumber(this.y2)) && e.push(new he({
      message: "Line coordinates must be valid numbers",
      type: "error"
    })), this.x1 === this.x2 && this.y1 === this.y2 && e.push(new he({
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
      if (this.dimension === "l" ? (r = ge.greaterThan(this.x2, o.x) && ge.lessThan(this.x1, o.x + o.l), l = ge.greaterThan(this.y1 + n, o.y) && ge.lessThan(this.y1 - n, o.y + o.w)) : this.dimension === "w" && (r = ge.greaterThan(this.x1 + n, o.x) && ge.lessThan(this.x1 - n, o.x + o.l), l = ge.greaterThan(this.y2, o.y) && ge.lessThan(this.y1, o.y + o.w)), r && l)
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
    return new ji({ x1: e, y1: i, x2: s, y2: n, origin: a, type: o });
  }
  get lineDimension() {
    return !ge.isNumber(this.x1) || !ge.isNumber(this.x2) || !ge.isNumber(this.y1) || !ge.isNumber(this.y2) ? null : this.x1 === this.x2 && this.y1 !== this.y2 ? "w" : this.y1 === this.y2 && this.x1 !== this.x2 ? "l" : null;
  }
  get lineDirection() {
    return !ge.isNumber(this.x1) || !ge.isNumber(this.x2) || !ge.isNumber(this.y1) || !ge.isNumber(this.y2) ? null : this.x1 < this.x2 ? "lr" : this.x1 > this.x2 ? "rl" : this.y1 < this.y2 ? "bt" : this.y1 > this.y2 ? "tb" : null;
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
const tp = {
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
}, Ns = {
  topLeft: {
    top: ["topRight"],
    default: ["topRight"]
  },
  bottomRight: {
    right: ["topRight"],
    default: ["topRight"]
  }
}, Gs = {
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
class ht extends Je {
  // Required: Define schema and computed properties for SchemaClass
  static schema = ju;
  static computedProperties = Vu;
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
    return te.Point;
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
    return new ht(e, i, s);
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
    const s = new ht(e ?? this.x, i ?? this.y);
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
      const s = tp[this.direction];
      return s && s[this.corner] && s[this.corner][this.grid] && i.add(s[this.corner][this.grid]), i;
    }
    return e?.cutType !== "efficiency" ? (Ns[this.corner] && (this.grid ? Ns[this.corner][this.grid] && Ns[this.corner][this.grid].forEach((s) => i.add(s)) : Ns[this.corner].default?.forEach((s) => i.add(s))), i) : (Gs[this.corner] && (this.grid ? Gs[this.corner][this.grid] && Gs[this.corner][this.grid].forEach((s) => i.add(s)) : Gs[this.corner].default?.forEach((s) => i.add(s))), i);
  }
}
function $e(t) {
  return !(t === void 0 || t === null || t === "" || typeof t == "object" && !Object.values(t).length);
}
function bi(t) {
  return t ? t === "l" ? "w" : "l" : null;
}
function qk(t) {
  return t ? t === "x" ? "y" : "x" : null;
}
function zk(t) {
  return t === "l" ? "x" : t === "w" ? "y" : null;
}
function Wk(t) {
  return t === "x" ? "l" : t === "y" ? "w" : null;
}
function Lo(t, e) {
  return ou(t, e);
}
function Ai(t, e) {
  return Xe(t, e);
}
function sn(t, e, i) {
  ru(t, e, i);
}
function _o(t, e = !1) {
  if (!$e(t) || typeof t != "object") return !1;
  const i = Object.values(t);
  return i.length === 0 ? !1 : e ? i.some((s) => $e(s) && s) : i.some((s) => $e(s));
}
function Uk(t) {
  if (!t?.length) return [];
  const e = t.filter((s) => !s.added), i = {};
  return e.forEach((s) => {
    const n = ip(s.stock) || 1;
    i[s.parentId] ? i[s.parentId].count += n : (i[s.parentId] = {}, i[s.parentId].count = n, i[s.parentId].id = s.parentId, i[s.parentId].name = s?.name ? s.name : s.id, i[s.parentId].l = s.l, i[s.parentId].w = s.w, i[s.parentId].t = s.t, i[s.parentId].material = s.material, i[s.parentId].rot = s.rot, i[s.parentId].orientationLock = s.orientationLock);
  }), Object.values(i);
}
function ip(t, e = []) {
  if (!t) return 1;
  if (t?.stack?.number) return t.stack.number;
  if (t?.stack?.stock) {
    const i = typeof t.stack.stock == "string" ? t.stack.stock : t.stack.stock?.id;
    if (i && e.length > 0)
      return e.find((n) => n.id === i)?.stack?.number || 1;
  }
  return typeof t?.stack == "string" && e.find((s) => s.id === t.stack)?.stack?.number || 1;
}
function sp() {
  const t = document.documentElement;
  return "requestFullscreen" in t || "webkitRequestFullscreen" in t || "mozRequestFullScreen" in t || "msRequestFullscreen" in t;
}
function Hk(t, e) {
  if (t == null) return "-";
  let i = Math.round(t).toString();
  for (; i.length < e; ) i = "0" + i;
  return i;
}
function as(t, e = !1) {
  const i = typeof t.l == "string" ? K({ v: t.l }) : t.l, s = typeof t.w == "string" ? K({ v: t.w }) : t.w;
  if (!e || !("trim" in t))
    return { l: i, w: s };
  if (Nr(t))
    return { l: i, w: s };
  if (Br(t) && !t.hasTrim)
    return { l: i, w: s };
  const n = t.trim, a = K({ v: n.w1 ?? 0 }) + K({ v: n.w2 ?? 0 }), o = K({ v: n.l1 ?? 0 }) + K({ v: n.l2 ?? 0 });
  return {
    l: i - (typeof a == "string" ? K({ v: a }) : a),
    w: s - (typeof o == "string" ? K({ v: o }) : o)
  };
}
function np(t, e) {
  if ("trim" in t && !Nr(t)) {
    const i = t.trim;
    e.l = e.l - (K({ v: i.w1 ?? 0 }) + K({ v: i.w2 ?? 0 })), e.w = e.w - (K({ v: i.l1 ?? 0 }) + K({ v: i.l2 ?? 0 }));
  }
  return e;
}
function Yi(t, e, i = !1) {
  let s = {
    l: t.l,
    w: t.w
  };
  (ns(t) || Fe(t) || $s(t)) && (s = {
    l: K({ v: t.l }),
    w: K({ v: t.w })
  });
  const n = ("rot" in t ? t.rot : 0) ?? 0;
  return i && (s = np(t, s)), n === e || ([s.l, s.w] = [s.w, s.l]), s;
}
function tl(t) {
  if (!("l" in t) || !("w" in t)) throw new Error("rotatable item must have l & w properties");
}
function ap(t) {
  st(t) || (tl(t), [t.l, t.w] = [t.w, t.l]);
}
function $o(t, e) {
  return ge.lessThanOrEqualTo(t, e);
}
function Ki(t, e) {
  return $o(t.l, e.l) && $o(t.w, e.w);
}
function cs(t, e, i = null) {
  if (!e || !t)
    throw new Error("Container and shape are required");
  const s = "allowExactFitShapes" in e && e.allowExactFitShapes === !0, n = as(e, !0), a = s ? as(e, !1) : n, o = as(t, !0);
  let r = n;
  if (s && (ge.equalTo(o.l, a.l) && ge.equalTo(o.w, a.w) || ge.equalTo(o.l, a.w) && ge.equalTo(o.w, a.l)) && (r = a), o.l * o.w > r.l * r.w)
    return !1;
  const l = yn(t, e);
  if (t.orientationLock || i !== null) {
    const p = i ?? (l === "w" ? 1 : 0), d = Yi(t, p, !0);
    if (s) {
      const h = Yi(t, p, !1);
      if (ge.equalTo(h.l, a.l) && ge.equalTo(h.w, a.w))
        return Ki(h, r);
    }
    return Ki(d, r);
  }
  const c = Yi(t, 0, !0);
  if (s) {
    const p = Yi(t, 0, !1);
    if (ge.equalTo(p.l, a.l) && ge.equalTo(p.w, a.w) && Ki(p, r)) return !0;
  }
  if (Ki(c, r)) return !0;
  const u = Yi(t, 1, !0);
  if (s) {
    const p = Yi(t, 1, !1);
    if (ge.equalTo(p.l, a.l) && ge.equalTo(p.w, a.w) && Ki(p, r)) return !0;
  }
  return Ki(u, r);
}
function op(t) {
  if ("orientationLock" in t)
    return t.orientationLock;
  let e = null;
  return (st(t) || $s(t) || gt(t) || Fe(t)) && (e = t.orientationLock), e;
}
function yn(t, e) {
  const i = op(t);
  if (!$e(i)) return null;
  if (!e || "direction" in t) return i;
  if (!st(t) && Za(t)) return null;
  if ("getStock" in e) {
    const s = e.getStock;
    if (s && $e(s.grain))
      return i === s.grain ? "l" : "w";
  }
  return i;
}
function il(t, e) {
  if (st(t))
    return cs(t, e, t.rot) ? [t.rot] : [];
  const i = [];
  for (let s = 0; s <= 1; s++)
    Et(t, s, e) && cs(t, e, s) && i.push(s);
  return i;
}
function Et(t, e = null, i = null) {
  if (!$e(e))
    throw new Error("no rotation provided to canRotate");
  if (e === !0 && (e = 1), e === !1 && (e = 0), t.preventAutoRotation && e !== 0 || !st(t) && Za(t) && e !== 0 || i && !cs(t, i, e))
    return !1;
  const s = yn(t, i);
  return !(s === "l" && e === 1 || s === "w" && e === 0);
}
function rp(t, e = null, i = null) {
  const s = "rot" in t ? t.rot : 0;
  return e === null && (e = s === 0 ? 1 : 0), !st(t) && Za(t) ? !0 : Et(t, e, i) ? (s === e || ap(t), !0) : !1;
}
function bt(t, e = null, i = null) {
  return e ? e = 1 : e = 0, i && e && !cs(t, i, e) ? !1 : rp(t, e, i);
}
function Yk(t, e) {
  if (st(t)) return t.rot;
  if (!$e(t.orientationLock)) return null;
  const i = e.getStock;
  return !t.orientationLock || !$e(i?.grain) ? null : t.orientationLock === i?.grain ? 0 : 1;
}
function Fo(t, e, i, s, n = null) {
  if (!s) throw new Error("requiredSide not supplied to canRotateToDimensionRange");
  const a = as(t);
  if (a.l >= e && a.l <= i || a.w >= e && a.w <= i) {
    if (t.l === t.w) return !0;
    const o = Math.max(a.l, a.w), r = Math.min(a.l, a.w);
    if (n) {
      if (s === "l") {
        if (o >= e && o <= i && Et(t, 0, n) || r >= e && r <= i && Et(t, 1, n)) return !0;
      } else if (s === "w" && (r >= e && r <= i && Et(t, 0, n) || o >= e && o <= i && Et(t, 1, n)))
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
function lp(t, e, i, s) {
  if (!i) throw new Error("requiredSide not supplied to rotateToDimension");
  if (t.l !== e && t.w !== e) return !1;
  if (t.l === t.w) return !0;
  const n = as(t), a = Math.max(n.l, n.w), o = Math.min(n.l, n.w);
  if (i === "l") {
    if (a === e && Et(t, 0, s)) return bt(t, 0);
    if (o === e && Et(t, 1, s)) return bt(t, 1);
  } else if (i === "w") {
    if (o === e && Et(t, 0, s)) return bt(t, 0);
    if (a === e && Et(t, 1, s)) return bt(t, 1);
  }
  return !1;
}
function Za(t) {
  tl(t);
  const e = as(t);
  return ge.equalTo(e.l, e.w);
}
class Bn extends Je {
  // Zod schema for validation and serialization
  static schema = Na;
  static computedProperties = Ga;
  constructor(e = {}) {
    super(e);
    let i = !1;
    Ut(this) && (i = this.infiniteLength), !e?.preventAutoRotation && !i && (this.orientationLock ? (this.orientationLock === "l" && bt(this, 0), this.orientationLock === "w" && bt(this, 1)) : this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !e?.preventGrainRotation && (this.grain = bi(this.grain)))), this.calculateDimensions(), e.skipValidation || e.skipBusinessValidation || e.validationMode === "none" || e.validationMode === "schema" || this.validate();
  }
  /**
   * Calculate derived dimensions (area, longSide, shortSide, parentId)
   * Called automatically in constructor and after dimension changes
   */
  calculateDimensions() {
    this.area = this.l * this.w, this.longSide = Math.max(this.l, this.w), this.shortSide = Math.min(this.l, this.w), this.parentId = Hu(this.id);
  }
  /**
   * Get entity type
   */
  getType() {
    return te.Rectangle;
  }
  /**
   * Validate business rules for the rectangle
   * This is separate from schema validation which happens in the constructor
   * Override this method in subclasses for domain-specific validation
   */
  validate() {
    if (this.issues = [], this.warnings = [], (this.l <= 0 || this.w <= 0) && this.issues.push(new he({
      message: "Rectangle dimensions must be positive",
      type: "error",
      field: [["l"], ["w"]],
      item: this
    })), this.hasTrim) {
      const e = {
        x: (this.trim.w1 || 0) + (this.trim.w2 || 0),
        y: (this.trim.l1 || 0) + (this.trim.l2 || 0)
      };
      e.x >= this.l && this.warnings.push(new he({
        message: "Trim values exceed length",
        type: "warning",
        field: [["trim"]],
        item: this
      })), e.y >= this.w && this.warnings.push(new he({
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
        return new ji({
          x1: i,
          x2: i + this.l,
          y1: s,
          y2: s,
          type: "bottom",
          validationMode: "none"
          // parentId: this.id
        });
      case "right":
        return new ji({
          x1: i + this.l,
          x2: i + this.l,
          y1: s,
          y2: s + this.w,
          type: "right",
          validationMode: "none"
          // parentId: this.id
        });
      case "top":
        return new ji({
          x1: i,
          x2: i + this.l,
          y1: s + this.w,
          y2: s + this.w,
          type: "top",
          validationMode: "none"
          // parentId: this.id
        });
      case "left":
        return new ji({
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
      bottomLeft: new ht(this.x, this.y),
      topLeft: new ht(this.x, this.y + this.w),
      topRight: new ht(this.x + this.l, this.y + this.w),
      bottomRight: new ht(this.x + this.l, this.y)
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
    const s = new Bn({
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
class Ja extends Bn {
  // Zod schema for validation and serialization
  static schema = qa;
  static computedProperties = za;
  constructor(e = {}) {
    super(e), e.skipValidation || this.validateContainer(e);
  }
  // applyComputedProperties removed - handled by SchemaClass base
  // Container.computedProperties includes Rectangle.computedProperties via spread
  /**
    * Get entity type
    */
  getType() {
    return te.Container;
  }
  /**
    * Validate container-specific properties
    */
  validateContainer(e) {
    const i = ["sheet", "linear", "roll", null, void 0, ""], s = this?.stockType;
    if (!i.includes(s)) {
      const n = new he({
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
    const i = Ja.schema.partial().parse(e);
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
    return Ut(this) ? this : ss(this) ? this.stock : st(this) ? this.stock : null;
  }
}
class di extends Je {
  // Required: Define schema and computed properties
  static schema = Or;
  static computedProperties = Qu;
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
    return te.GuillotineState;
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
function sl(t, e = "cc") {
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
    for (const [l, c] of Object.entries(r))
      l in t && (a[c] = t[l]);
    for (const [l, c] of Object.entries(n))
      l in t && (a[c] = t[l]);
  } else {
    for (const [l, c] of Object.entries(r))
      c in t && (a[l] = t[c]);
    for (const [l, c] of Object.entries(n))
      c in t && (a[l] = t[c]);
  }
  return a;
}
const nl = {
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
function Kk(t) {
  return t !== 0 && t !== 1 && t !== 2 ? !1 : nl[t].sidesLMatchShapeL;
}
function Zk(t) {
  return t !== 0 && t !== 1 && t !== 2 ? [] : nl[t].affectedExtraTypes;
}
function nn(t = 0, e, i = null, s = null, n = null) {
  if (!Fe(i) && !ni || s === "stock") return !1;
  let a, o;
  if (Fe(i) ? a = i.orientationLock : ni(i) ? a = i.direction : s === "shape" && (a = n), t === 0 || ni(i))
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
function cp(t, e, i = null, s = null, n = null) {
  if (!Fe(i) || s === "shape") return !1;
  let a;
  return t === 0 || t === 1 || t === 2 ? nn(t, e, i, s, n) ? "cc" : !1 : a;
}
class Xa extends Je {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Yr;
  static computedProperties = Xd;
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
    return te.Cut;
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
    return new Xa({ x1: e, y1: i, x2: s, y2: n, position: o, stock: a });
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
class al extends Bn {
  // Zod schema for validation and serialization
  static schema = Ls;
  static computedProperties = _s;
  constructor(e = {}) {
    if (super(e), !this.guillotineState)
      this.guillotineState = new di();
    else if (!(this.guillotineState instanceof di)) {
      const i = typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new di(i);
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
    if (!this.guillotineState || !(this.guillotineState instanceof di)) {
      const e = this.guillotineState && typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new di(e);
    }
  }
  /**
   * Override update to ensure guillotineState is properly handled
   */
  update(e) {
    const i = this.guillotineState instanceof di ? this.guillotineState : null;
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
    return te.Placeable;
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
    if (this.added = !1, this.stock = null, this.placementOrder = void 0, this.x = 0, this.y = 0, e || (this.score = null, this.bestScore = null), this.firstShape.isFirstShape = !1, n || (this.firstShape.sampleRotations = []), this.patternMatch = !1, this.fitsStock = null, this.guillotineState instanceof di)
      if (i) {
        const a = this.guillotineState.stripShapeBatches;
        this.guillotineState.reset(), a && (this.guillotineState.stripShapeBatches = a);
      } else
        this.guillotineState.reset();
    else
      this.guillotineState = new di();
    gt(this) && (s || "group" in this && this.group && (delete this.group.placementOrder, this.group.inGroup = !1, this.group.inUserGroup = !1, this.group.reference = null, this.group.addedAsGroup = null)), st(this) && "shapes" in this && Array.isArray(this.shapes) && this.shapes.forEach((a) => {
      "reset" in a && typeof a.reset == "function" && a.reset(e, i, s);
    });
  }
  /**
   * Add shape to stock (placeholder for optimization logic)
   */
  addToStock(e) {
    this.stock = e, this.added = !0, e.used = !0, this.grain = e.grain, !st(this) && e?.grain && this.rot && (this.grain = bi(e.grain));
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.added = !1, gt(this) && (this.group.addedAsGroup = null, this.firstShape.isFirstShape = !1), st(this) && this.shapes.forEach((e) => {
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
    return !i || Sd(i) || !i.stripShapeBatches?.groups || !(e in i.stripShapeBatches.groups) ? !1 : i.stripShapeBatches.groups[e];
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
    bt(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
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
    return Ut(e) && typeof this.fitsStock?.[e.parentId] < "u" ? this.fitsStock?.[e.parentId]?.[i ?? "any"] === !0 : cs(this, e, i);
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
    const s = new ht(this.x + this.l, this.y);
    s.corner = "bottomRight";
    const n = new ht(this.x, this.y + this.w);
    if (n.corner = "topLeft", e?.cutType !== "efficiency" && !i)
      return [n, s];
    const a = new ht(this.x, this.y);
    a.corner = "bottomLeft";
    const o = new ht(this.x + this.l, this.y + this.w);
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
    if (this.getType() === te.Shape && this.identicalTo?.length && (this.parentId === e.parentId || this.identicalTo.includes(e.parentId)))
      return !0;
    if (this.getType() !== te.Group) {
      if (e.parentId === this.parentId) return !0;
      if (this.getType() === te.Shape && i && this.parentId !== e.parentId) return !1;
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
    return e === null && (e = Ut(this.stock) ? this.stock.bladeWidth / 2 : 0), [
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
    return this.getPerimeterCutVectors().forEach((n) => i.push(new Xa({
      stock: Ut(this.stock) ? this.stock : e,
      x1: n.x1,
      x2: n.x2,
      y1: n.y1,
      y2: n.y2,
      position: n.type
    }))), i = i.filter((n) => n.isInsideStock), i;
  }
}
let qs = null, ca = !1;
function up() {
  if (ca)
    return qs;
  try {
    qs = { runTests: !1, throwErrorsOnFailedTests: !1 }, ca = !0;
  } catch {
    qs = { runTests: !1, throwErrorsOnFailedTests: !1 }, ca = !0;
  }
  return qs;
}
const Do = br("tests");
br("timers");
let dp, at;
try {
  {
    const t = new Proxy({}, { get: () => () => t });
    at = () => t;
  }
} catch {
  const e = new Proxy({}, { get: () => () => e });
  at = () => e;
}
function Pt(t = [], e = null) {
  if (!t?.length) return;
  const i = up();
  if (gi() && i && i.runTests) {
    const n = i?.testCollector || dp;
    for (const a of t) {
      if (!a || typeof a != "function") {
        console.error("Invalid test function provided:", a);
        continue;
      }
      const o = Date.now();
      let r = !1, l;
      try {
        a(), r = !0;
      } catch (c) {
        if (r = !1, l = c instanceof Error ? c.message : String(c), e ? Do(e, l) : Do(l), n && n.addResult({
          passed: !1,
          error: l,
          issueMessage: e || void 0,
          timestamp: o
        }), i && i.throwErrorsOnFailedTests) throw c;
      }
      r && n && n.addResult({
        passed: !0,
        issueMessage: e || void 0,
        timestamp: o
      });
    }
  }
}
function fp(t) {
  return t === "horizontal" ? "x" : t === "vertical" ? "y" : null;
}
function Eo(t) {
  return t === "horizontal" ? "l" : t === "vertical" ? "w" : null;
}
class Nn extends al {
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
  static schema = Ps;
  static computedProperties = Er;
  static defaults = Ps.parse({});
  constructor(e = {}) {
    super(e);
  }
  /**
    * Get entity type
    */
  getType() {
    return te.Shape;
  }
  /**
    * Create shape with live objects
    */
  static create(e) {
    const i = new Nn(e.data);
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
    bt(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
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
class Gn extends al {
  // Required: Define schema and computed properties for SchemaClass
  static schema = sd;
  static computedProperties = nd;
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
    return this.type === "user" ? te.UserGroup : this.type === "strip" ? te.StripGroup : this.type === "firstShape" ? te.FirstShapeGroup : te.Group;
  }
  /**
    * Initialize shapes array with optional context for reference resolution
    */
  initShapes(e, i) {
    return e.map((s) => {
      if (!gt(s) && !Id(s))
        throw console.log(s), new Error("[GROUP] attempted to init a group with an item other than a shape");
      if (gt(s))
        return s.group.reference = this, s.group.inGroup = !0, s;
      if (i && i.shapeList && s) {
        const a = i.shapeList.find((o) => o.autoId === s.autoId);
        if (a)
          return a.group.reference = this, a.group.inGroup = !0, a;
      }
      const n = i ? { ...s, __context: i } : s;
      return new Nn(n);
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
    const i = { ...e.data, shapes: e.shapes }, s = new Gn(i);
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
          s && (bt(s, i.rot, this.container) || console.error(`  ❌ FAILED to restore rotation for ${s.id} from ${s.rot} to ${i.rot}`));
        }
      if (this.positions && this.positions.length > 0)
        for (const i of this.positions) {
          const s = this.shapes.find((n) => n.autoId === i.autoId);
          s && s.rot !== i.rot && (console.warn(`[placeMyShapes] Shape ${s.id} has wrong rotation ${s.rot}, expected ${i.rot} - forcing rotation now`), bt(s, i.rot, this.container) || console.error(`[placeMyShapes] ❌ CRITICAL: Cannot fix rotation for ${s.id}`));
        }
      if (this.updatePositions(), !this.positions || this.positions.length === 0)
        throw new Error(`Group ${this.id} cannot place shapes: positions array could not be initialized`);
      for (let i = 0; i < this.shapes.length; i++) {
        const s = this.shapes[i];
        if (!s) continue;
        const n = this.positions.find((r) => r.autoId === s.autoId);
        if (!n) {
          const r = this.shapes.map((c) => c.autoId).join(", "), l = this.positions.map((c) => c.autoId).join(", ");
          throw new Error(`Position not found for shape ${s.autoId} in group ${this.id}. Shapes: [${r}]. Positions: [${l}]`);
        }
        if (s.x = this.x + n.x, s.y = this.y + n.y, !bt(s, n.rot, this.container)) throw new Error("placeMyShapes - unable to set rotation for shape in group");
        i === 0 && this.x === 0 && this.y === 0 && (s.firstShape.isFirstShape = !0), s.group.addedAsGroup = this, Pt([
          () => at(this.type === "position" ? s.group.inGroup : !s.group.inGroup).toBe(!0)
        ], `placeMyShapes: Shape ${s.id} inGroup flag should match group type (${this.type})`), Pt([
          () => at(s.group.addedAsGroup).toBe(this),
          () => at(typeof s.group.addedAsGroup).not.toBe("string")
        ], `placeMyShapes: Shape ${s.id} addedAsGroup should be Group reference`), s.score = this.score;
        const o = s.guillotineState?.stripShapeBatches;
        if (this.guillotineState) {
          const r = this.guillotineState.constructor, l = this.guillotineState.toData();
          s.guillotineState = new r(l), o && (s.guillotineState.stripShapeBatches = o);
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
        const u = this.shapes.find((p) => p.autoId === l);
        u && u.rot !== c && bt(u, c, this.container);
      }
    }
    this.positions = [], this.type !== "user" && this.sortShapes();
    let i = 0;
    const s = fp(this.direction), n = Eo(this.direction);
    let a = 0;
    for (const l of this.shapes) {
      if (!l) continue;
      const c = a === this.shapes.length - 1 ? 0 : l.getMinSpacing(this.container.saw), u = e.get(l.autoId) ?? l.rot.valueOf();
      let p;
      u !== l.rot ? p = n === "l" ? l.w : l.l : p = l[n];
      const d = {
        autoId: l.autoId,
        x: 0,
        y: 0,
        rot: u
      };
      s === "x" ? d.x = i : d.y = i, this.positions.push(d), l.group.inGroup = !0, i += a === this.shapes.length - 1 ? p : p + c, a++;
    }
    this.groupLength = i;
    const o = bi(n), r = this.shapes.reduce(
      (l, c) => {
        const u = e.get(c.autoId);
        let p;
        return u !== void 0 && u !== c.rot ? p = o === "l" ? c.w : c.l : p = c[o], p > l ? p : l;
      },
      0
    );
    if (this.groupWidth = r, gi()) {
      const l = this.shapes.slice(0, -1).reduce((p, d) => p + d.getMinSpacing(this.container.saw), 0), u = this.shapes.reduce((p, d) => p + d[n], 0) + l;
      Pt([
        () => at(
          ge.equalTo(u, this.groupLength),
          "group dimension is incorrect in direction"
        ).to.be.true,
        () => at(
          i,
          "currentPosition is incorrect in direction"
        ).to.equal(this.groupLength),
        () => at(
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
    const e = Eo(this.direction), i = bi(e);
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
      Pt([
        () => at(e.every((s) => !s.group?.inGroup)).toBe(!0),
        () => at(e.every((s) => !s.group?.reference)).toBe(!0)
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
function pp(t, e) {
  const i = e === "x" ? "l" : "w", s = e === "x" ? "y" : "x";
  return t?.length ? t.reduce((a, o) => {
    const r = a[e] + a[i], l = o[e] + o[i];
    return r > l ? a : l > r ? o : a[s] < o[s] ? a : o;
  }) : null;
}
function Jk(t, e = null) {
  return e ? t.filter((i) => i.added && i?.stock?.id === e.id) : t.filter((i) => i.added);
}
function Xk(t, e = !1, i = !1) {
  if (!t?.length) return [];
  let s = t;
  if (e !== null && (s = t.filter((r) => r.added === e), !s.length))
    return [];
  const n = /* @__PURE__ */ new Map(), a = i ? /* @__PURE__ */ new Map() : null, o = [];
  for (const r of s) {
    let l;
    if (gt(r))
      l = r.parentId;
    else if (st(r))
      l = r.id;
    else
      continue;
    if (!n.has(l)) {
      if (n.set(l, !0), a) {
        const c = r.l <= r.w, u = c ? r.l : r.w, p = c ? r.w : r.l, d = u + "-" + p + "-" + r.orientationLock;
        if (a.has(d)) continue;
        a.set(d, !0);
      }
      o.push(r);
    }
  }
  return o;
}
const hp = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return zr(t, "orientationLock", ["l", "w"], e, i, s), s;
}, gp = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return zr(t, "grain", ["l", "w"], e, i, s), s;
}, mp = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [], n = Xe(t, "banding");
  return n != null && (typeof n != "object" || n === null) && new he({
    item: t,
    message: Yt("errors.validation.must_be_object", { 0: "banding" }),
    shouldTranslate: !1,
    field: [["banding"]],
    index: [e],
    type: i ? "warning" : "error",
    issues: s,
    category: ["part"]
  }), s;
}, yp = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], a = Xe(t, "customData");
  if (a == null) return n;
  if (typeof a != "object" || a === null)
    return new he({
      item: t,
      message: Yt("errors.validation.must_be_object", {
        0: oi.customData
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
      ["string", "number", "boolean"].includes(r) || new he({
        item: t,
        message: Yt("errors.validation.must_be_string_number_boolean", {
          0: oi.customData
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
}, bp = ({ item: t, index: e }) => {
  const i = Xe(t, "machining");
  i && "validateEverything" in i && i.validateEverything(t, e);
}, vp = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], o = Xe(t, "x");
  return o === null || o === "" || o === void 0 || i != null && K({ v: o }) > i && new he({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: dt("x", { returnKey: !0 }),
      // positional (legacy)
      field: dt("x", { returnKey: !0 }),
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
}, wp = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], o = Xe(t, "y");
  return o === null || o === "" || o === void 0 || i != null && K({ v: o }) > i && new he({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: dt("y", { returnKey: !0 }),
      // positional (legacy)
      field: dt("y", { returnKey: !0 }),
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
}, Sp = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], o = Xe(t, "l");
  return Xe(t, "infiniteLength") || (o === null || o === "" || o === void 0 || o === 0) && new he({
    item: t,
    message: "errors.validation.not_set",
    params: {
      0: dt("l", { returnKey: !0 }),
      // positional (legacy)
      field: dt("l", { returnKey: !0 })
      // named (new)
    },
    field: [["l"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: a,
    category: n
  }), a;
}, kp = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], o = Xe(t, "w");
  return (o === null || o === "" || o === void 0) && new he({
    item: t,
    message: "errors.validation.not_set",
    params: {
      0: dt("w", { returnKey: !0 }),
      // positional (legacy)
      field: dt("w", { returnKey: !0 })
      // named (new)
    },
    field: [["w"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: a,
    category: n
  }), a;
}, xp = ({ item: t, index: e, max: i, isWarning: s = !1, saw: n, category: a = [] }) => {
  const o = [], r = Xe(t, "t");
  return n?.cutType === "beam" && !r && new he({
    item: t,
    message: "errors.saw.thickness_required_for_beam_saw",
    field: [["t"]],
    index: [e],
    type: "error",
    issues: o,
    category: a
  }), o;
}, Ip = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], a = Xe(t, "q"), o = Xe(t, "autoAdd");
  return a == null || o === !0, n;
}, Pp = ({
  item: t,
  index: e,
  shapes: i,
  requiredCount: s = 2,
  isWarning: n = !1,
  category: a = ["group"]
}) => {
  const o = [];
  return i.length < s && new he({
    item: t,
    message: "errors.groups.min_parts",
    index: [e],
    type: n ? "warning" : "error",
    issues: o,
    category: a
  }), o;
}, Cp = ({
  item: t,
  index: e,
  shapes: i,
  isWarning: s = !1,
  category: n = ["group"]
}) => {
  const a = [];
  return i.forEach((o, r) => {
    !(typeof o.isSquare == "function", o.isSquare) && !["l", "w"].includes(o.orientationLock) && new he({
      item: t,
      message: Yt("errors.groups.part_needs_orientation_lock", { 0: r + 1 }),
      shouldTranslate: !1,
      field: [["orientationLock"]],
      index: [e],
      type: s ? "warning" : "error",
      issues: a,
      category: n
    });
  }), a;
}, Ap = ({
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
  return i.slice(1).forEach((c, u) => {
    const p = c.trimmedDimensions ? c.trimmedDimensions[s] : c[s];
    ge.equalTo(p, l) || new he({
      item: t,
      message: Yt("errors.groups.dimension_not_correct", {
        0: u + 2,
        1: s === "l" ? "length" : "width",
        2: l,
        3: p
      }),
      shouldTranslate: !1,
      index: [e],
      type: n ? "warning" : "error",
      issues: o,
      category: a
    });
  }), o;
}, ol = ({
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
  const c = [];
  return s > n && new he({
    item: t,
    message: Yt("errors.groups.not_enough_of_part", {
      0: a || (o ?? 0) + 1,
      1: s,
      2: n
    }),
    shouldTranslate: !1,
    index: [e],
    type: r ? "warning" : "error",
    issues: c,
    category: l
  }), n === 0 && new he({
    item: t,
    message: "errors.groups.no_parts",
    index: [e],
    type: r ? "warning" : "error",
    issues: c,
    category: l
  }), c;
};
function bn(t) {
  return t && typeof t == "object" && "area" in t;
}
const Ca = {
  missingProperty: (t, e) => `[Sorting Warning] Missing property "${t}" in ${e}`,
  missingMethod: (t, e) => `[Sorting Warning] Missing method "${t}" in ${e}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
}, pt = (t, e, i) => e in t ? t[e] : (console.warn(Ca.missingProperty(String(e), i)), null), zs = (t, e) => (i, s) => {
  const n = t(i, s);
  return n !== 0 ? n : e(i, s);
}, Zi = (t, e) => {
  if (bn(t) && bn(e))
    return t.area < e.area ? -1 : t.area > e.area ? 1 : 0;
  const i = "l" in t && "w" in t ? Number(t.l) * Number(t.w) : 0, s = "l" in e && "w" in e ? Number(e.l) * Number(e.w) : 0;
  return i < s ? -1 : i > s ? 1 : 0;
}, qt = (t, e) => {
  const i = pt(t, "id", "first item"), s = pt(e, "id", "second item");
  if (i === null || s === null || i === void 0 || s === void 0) return 0;
  const n = i.toString().split("."), a = s.toString().split(".");
  return n[0] !== a[0] ? parseInt(n[0]) - parseInt(a[0]) : parseInt(n[1]) - parseInt(a[1]);
};
function Qt(t) {
  const e = Array.isArray(t[0]) ? t.map(([i, s]) => ({ key: i, direction: s })) : t;
  return (i, s) => {
    for (const { key: n, direction: a } of e) {
      const o = pt(i, n, "first item"), r = pt(s, n, "second item");
      if (!(o === null || r === null) && o !== r)
        return a === "desc" ? o < r ? 1 : -1 : o < r ? -1 : 1;
    }
    return 0;
  };
}
function rl(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s > n ? i : e;
  }) : null;
}
function Tp(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s < n ? i : e;
  }) : null;
}
const ri = {
  // Dimension-based sorts
  WDLD: Qt([
    ["w", "desc"],
    ["l", "desc"]
  ]),
  WALA: Qt([
    ["w", "asc"],
    ["l", "asc"]
  ]),
  LDWD: Qt([
    ["l", "desc"],
    ["w", "desc"]
  ]),
  LAWA: Qt([
    ["l", "asc"],
    ["w", "asc"]
  ]),
  WD: Qt([["w", "desc"]]),
  LD: Qt([["l", "desc"]]),
  // ID-based sorts
  LDIDA: zs(
    Qt([["l", "desc"]]),
    qt
  ),
  WDIDA: zs(
    Qt([["w", "desc"]]),
    qt
  ),
  // Area-based sorts
  AD: (t, e) => -Zi(t, e),
  AA: Zi,
  AAID: zs(
    Zi,
    qt
  ),
  ADID: zs(
    (t, e) => -Zi(t, e),
    qt
  ),
  // ID sorts
  ID: qt,
  IDDesc: (t, e) => -qt(t, e),
  StockID: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    return !i || !s ? 0 : qt(i, s);
  },
  StockIDAD: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s) return 0;
    const n = qt(i, s);
    return n !== 0 ? n : -Zi(t, e);
  },
  // Position sorts
  YX: Qt([
    ["y", "asc"],
    ["x", "asc"]
  ]),
  XY: Qt([
    ["x", "asc"],
    ["y", "asc"]
  ]),
  // Placement order sorts
  placementOrder: (t, e) => {
    const i = pt(t, "placementOrder", "first item") ?? 0, s = pt(e, "placementOrder", "second item") ?? 0;
    return i - s;
  },
  typePlacementOrder: (t, e) => {
    const i = pt(t, "offcut", "first item"), s = pt(e, "offcut", "second item"), n = pt(t, "placementOrder", "first item") ?? 0, a = pt(e, "placementOrder", "second item") ?? 0;
    return i && !s ? 1 : !i && s ? -1 : n - a;
  },
  typeID: (t, e) => {
    const i = pt(t, "offcut", "first item"), s = pt(e, "offcut", "second item");
    return i && !s ? 1 : !i && s ? -1 : qt(t, e);
  },
  stockIDTypePlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s) return 0;
    const n = qt(i, s);
    if (n !== 0) return n;
    const a = pt(t, "offcut", "first item"), o = pt(e, "offcut", "second item");
    if (a && !o) return 1;
    if (!a && o) return -1;
    const r = pt(t, "placementOrder", "first item") ?? 0, l = pt(e, "placementOrder", "second item") ?? 0;
    return r - l;
  },
  offcutPlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i?.id || !s?.id) return 0;
    const n = qt(i, s);
    if (n !== 0) return n;
    if ("placementOrder" in t && "placementOrder" in e) {
      const a = pt(t, "placementOrder", "first item") ?? 0, o = pt(e, "placementOrder", "second item") ?? 0;
      return a - o;
    }
    return 0;
  },
  groupPlacementOrder: (t, e) => {
    const i = pt(t, "placementOrder", "first item") ?? 0, s = pt(e, "placementOrder", "second item") ?? 0, n = i - s;
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
    if (bn(t) && bn(e) && t.aspect && e.aspect)
      return e.aspect - t.aspect;
    if (!("l" in t) || !("w" in t) || !("l" in e) || !("w" in e))
      return console.warn(Ca.missingAspect), 0;
    const i = Math.max(Number(t.l), Number(t.w)) / Math.min(Number(t.l), Number(t.w));
    return Math.max(Number(e.l), Number(e.w)) / Math.min(Number(e.l), Number(e.w)) - i;
  },
  fillThenArea(t) {
    return (e, i) => !("l" in e) || !("w" in e) || !("l" in i) || !("w" in i) ? (console.warn(Ca.missingLongSide), 0) : i[t] === e[t] ? -Zi(e, i) : parseFloat(String(i[t])) - parseFloat(String(e[t]));
  },
  // Utility functions
  getLargest: rl,
  getSmallest: Tp
};
function Op(t) {
  return Fe(t) || gt(t) || $s(t);
}
function Lp(t, e, i) {
  if (!i) return !0;
  const s = e?.material?.toLowerCase(), n = t?.material?.toLowerCase();
  return !s && !n || s === n;
}
function _p(t, e, i) {
  return i ? !$e(t.t) || !$e(e.t) ? !1 : ge.equalTo(K({ v: t.t }), K({ v: e.t })) : !0;
}
function $p(t, e, i) {
  return i?.stockType !== "linear" || !gt(t) && !Fe(t) ? !0 : Et(t, 0, e) && ge.equalTo(K({ v: t.w }), K({ v: e.w })) || Et(t, 1, e) && ge.equalTo(K({ v: t.l }), K({ v: e.w }));
}
function ll(t, e, i, s = 0) {
  const n = Fe(t[0]), a = i.stockType;
  if (t.some((O) => $e(O.stockLock) && O.stockLock.length))
    return { stockList: e, shapeList: t, unusableShapes: [], unusableStock: [], newIssues: [] };
  e = e.filter((O) => n || O.autoAdd === !0 || $e(O.q) && Number(O.q) > 0);
  const r = e.some((O) => $e(O.material)), l = e.some((O) => $e(O.t)), c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), h = [];
  let k = s;
  for (const O of t) {
    const G = e.map((F, B) => {
      const _ = Op(O) && cs(O, F), L = Lp(O, F, r), E = _p(O, F, l), w = $p(O, F, i);
      return {
        stockItem: F,
        stockIndex: B,
        fit: _,
        material: L,
        thickness: E,
        width: w,
        // For this stock item, does it satisfy all requirements?
        satisfiesAll: _ && L && E && (a !== "linear" || w)
      };
    });
    O.stockMatch = {
      fit: G.some((F) => F.fit),
      material: !r || G.some((F) => F.material),
      thickness: !l || G.some((F) => F.thickness),
      width: a !== "linear" || G.some((F) => F.width)
    };
    const H = G.filter((F) => F.satisfiesAll), W = H.length > 0;
    if (!n && W) {
      const F = H.map((B) => B.stockItem.parentId);
      O.stockLock = F, F.forEach((B) => c.add(B));
    }
    O.stockMatch.fit ? W || (r && !O.stockMatch.material && (d.add(O), h.push(new he({
      category: ["part", "stock"],
      item: O,
      field: [["material"]],
      index: [k],
      message: "errors.validation.no_matching_stock_material"
    }))), l && !O.stockMatch.thickness && (d.add(O), h.push(new he({
      category: ["part", "stock"],
      item: O,
      field: [["t"]],
      index: [k],
      message: "errors.validation.no_matching_stock_thickness"
    }))), a === "linear" && !O.stockMatch.width && (p.add(O), h.push(new he({
      category: ["part", "stock"],
      item: O,
      field: [["w"]],
      index: [k],
      message: "errors.validation.no_matching_stock_width"
    }))), O.stockMatch.material && O.stockMatch.thickness && (a !== "linear" || O.stockMatch.width) && (d.add(O), h.push(new he({
      category: ["part", "stock"],
      item: O,
      field: [["material"], ["t"]],
      index: [k],
      message: "errors.validation.no_stock_matches_all_requirements"
    })))) : (u.add(O), h.push(new he({
      category: ["part", "stock"],
      item: O,
      field: [["l"], ["w"]],
      index: [k],
      message: "errors.validation.will_not_fit"
    }))), k++;
  }
  t.forEach((O) => O.stockMatch = null);
  let N, q;
  return n ? (N = t.filter((O) => u.has(O) || p.has(O) || d.has(O)).sort(ri.ID), q = []) : (N = t.filter((O) => u.has(O) || p.has(O) || d.has(O) || !O.stockLock || !O.stockLock.length).sort(ri.ID), q = e.filter((O) => !c.has(O.parentId)).sort(ri.ID), e = e.filter((O) => Ut(O)).filter((O) => c.has(O.parentId)), t = t.filter((O) => !u.has(O) && !p.has(O) && !d.has(O) && O?.stockLock?.length)), {
    stockList: e,
    unusableStock: q,
    shapeList: t,
    unusableShapes: N,
    newIssues: h
  };
}
function Fp(t) {
  return t?.issues?.length > 0;
}
const Dp = ({
  item: t,
  inputStockList: e,
  saw: i,
  partTrim: s = 0,
  index: n
}) => {
  const a = [], o = i.stockType, r = Xe(t, "q"), l = Xe(t, "l"), c = Xe(t, "w");
  return !r || !l || !c || ("applyPartTrim" in t && typeof t.applyPartTrim == "function" && t.applyPartTrim(s, o), Fp(t)) || ll([t], e, i, n).newIssues.forEach((p) => {
    a.push(p);
  }), a;
}, Ep = ({
  item: t,
  partTrim: e,
  index: i,
  isWarning: s = !1
}) => {
  const n = [];
  if (!e) return n;
  const a = Xe(t, "l"), o = Xe(t, "w");
  if (!a || !o) return n;
  try {
    const r = K({ v: e }), l = K({ v: a }), c = K({ v: o }), u = l - r * 2, p = c - r * 2;
    (u <= 0 || p <= 0) && new he({
      item: t,
      message: "errors.trim.too_much",
      params: {
        0: "part",
        // positional (legacy)
        1: r,
        // positional (legacy)
        2: `${u}x${p}`,
        // positional (legacy)
        item: "part",
        // named (new)
        trimValue: r,
        // named (new)
        result: `${u}x${p}`
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
}, Mp = ({
  item: t,
  index: e,
  isWarning: i = !1,
  category: s = []
}) => {
  const n = [], a = Xe(t, "l"), o = Xe(t, "w"), r = Xe(t, "trim");
  if (!a || !o || !r) return n;
  if ((!Ut(t) || Ut(t) && !("trimmed" in t && t.trimmed)) && typeof r == "object" && r !== null)
    try {
      const c = K({ v: a }), u = K({ v: o }), p = (N) => {
        if (N == null) return 0;
        if (typeof N == "number" || typeof N == "string")
          try {
            return K({ v: N }) || 0;
          } catch {
            return 0;
          }
        return 0;
      }, d = {
        w1: p(Xe(r, "w1")),
        w2: p(Xe(r, "w2")),
        l1: p(Xe(r, "l1")),
        l2: p(Xe(r, "l2"))
      }, h = d.w1 + d.w2, k = d.l1 + d.l2;
      h >= c && new he({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${dt("w1").toUpperCase()} + ${dt("w2").toUpperCase()}`,
          // positional (legacy)
          1: dt("l"),
          // positional (legacy)
          2: c,
          // positional (legacy)
          trimFields: `${dt("l1", { returnKey: !0 })} + ${dt("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: dt("l", { returnKey: !0 }),
          // named (new)
          maxValue: c
          // named (new)
        },
        field: [["trim", "w1"], ["trim", "w2"]],
        index: [e],
        type: i ? "warning" : "error",
        issues: n,
        category: s
      }), k >= u && new he({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${dt("l1").toUpperCase()} + ${dt("l2").toUpperCase()}`,
          // positional (legacy)
          1: dt("w"),
          // positional (legacy)
          2: u,
          // positional (legacy)
          trimFields: `${dt("l1", { returnKey: !0 })} + ${dt("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: dt("w", { returnKey: !0 }),
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
}, wt = {
  // Dimensions
  x: vp,
  y: wp,
  l: Sp,
  w: kp,
  t: xp,
  q: Ip,
  // Trim
  trim: Mp,
  partTrim: Ep,
  // Custom
  customData: yp,
  banding: mp,
  orientationLock: hp,
  grain: gp,
  machining: bp,
  // Stock
  stockMatch: Dp,
  // Groups
  groupShapeCount: Pp,
  groupOrientationLock: Cp,
  groupDimensions: Ap,
  groupQuantity: ol
};
class vn extends Ja {
  static schema = pn;
  static computedProperties = Mr;
  static defaults = pn.parse({});
  constructor(e = {}) {
    const i = vn.preprocessData(e);
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
    return te.Stock;
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
      const n = wt.q({ item: e, index: e?.index });
      i.push(...n);
    }
    const s = wt.grain({ item: e, index: e?.index });
    i.push(...s), this.issues.push(...i.filter((n) => n));
  }
  /**
    * Create stock instance with live objects
    */
  static create(e) {
    const i = { ...e.data };
    e.saw && (i.saw = e.saw);
    const s = new vn(i);
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
    const s = pp(e.filter((a) => a.added && a.stock.id === this.id), "x"), n = s.x + s.l;
    if (n > this.l) throw new Error("Furthest shape position exceeds stock length");
    return ge.equalTo(n, this.l) ? n : n + i;
  }
}
const vi = ["l1", "l2", "w1", "w2"], Rp = ["a", "b", "c", "d"], Ft = [...vi, ...Rp], St = ["a", "b"];
class wn extends Je {
  // Required: Define schema and computed properties for SchemaClass
  static schema = _n;
  static computedProperties = Ha;
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
class Dt extends wn {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = Kr;
  static computedProperties = tf;
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
      s.includes(n) || i.push(new he({
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
      for (const s of St)
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
      const s = i, n = Kt("finish");
      if (n && n.labels && n.labels.length > 0) {
        const o = n.labels.map((r) => {
          const l = s[r];
          return typeof l == "string" ? l : typeof l == "boolean" && l ? "Y" : "";
        }).filter((r) => r !== "");
        return o.length > 0 ? o.join("|") : !1;
      }
      const a = Object.values(s).map((o) => typeof o == "string" ? o : typeof o == "boolean" && o ? "Y" : "").filter((o) => o !== "");
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
      for (const e of St)
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
    for (const i of St)
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
    return new Dt(e);
  }
  /**
   * Create empty finish
   */
  static empty() {
    return new Dt();
  }
  /**
   * Create with both faces
   */
  static bothFaces(e = !0) {
    const i = new Dt();
    return i.setBothFaces(e), i;
  }
  /**
   * Create with front face only
   */
  static frontOnly(e = !0) {
    const i = new Dt();
    return i.setFace("a", e), i;
  }
  /**
   * Create with back face only
   */
  static backOnly(e = !0) {
    const i = new Dt();
    return i.setFace("b", e), i;
  }
}
class Oi extends wn {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = el;
  static computedProperties = Nf;
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
        s.includes(n) || i.push(new he({
          message: `Invalid planing face: ${n}. Valid faces are 'a' (front) and 'b' (back)`,
          type: "warning"
        }));
    }
    if (this.sides) {
      const s = ["a", "b", "c", "d", "l1", "l2", "w1", "w2"];
      for (const n in this.sides)
        s.includes(n) || i.push(new he({
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
      for (const s of St)
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
      const s = i, n = Kt("planing");
      if (n && n.labels && n.labels.length > 0) {
        const o = n.labels.map((r) => {
          const l = s[r];
          return typeof l == "string" ? l : typeof l == "boolean" && l ? "Y" : "";
        }).filter((r) => r !== "");
        return o.length > 0 ? o.join("|") : !1;
      }
      const a = Object.values(s).map((o) => typeof o == "string" ? o : typeof o == "boolean" && o ? "Y" : "").filter((o) => o !== "");
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
      const s = i, n = Kt("planing");
      if (n && n.labels && n.labels.length > 0) {
        const o = n.labels.map((r) => {
          const l = s[r];
          return typeof l == "string" ? l : typeof l == "boolean" && l ? "Y" : "";
        }).filter((r) => r !== "");
        return o.length > 0 ? o.join("|") : !1;
      }
      const a = Object.values(s).map((o) => typeof o == "string" ? o : typeof o == "boolean" && o ? "Y" : "").filter((o) => o !== "");
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
      for (const e of St)
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
    for (const i of St)
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
      for (const a of St)
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
    return new Oi(e);
  }
  /**
   * Create empty planing
   */
  static empty() {
    return new Oi();
  }
  /**
   * Create with all faces and sides
   */
  static full(e = !0) {
    const i = new Oi();
    return i.setAllFaces(e), i.setAllSides(e), i;
  }
  /**
   * Create with faces only
   */
  static facesOnly(e = !0) {
    const i = new Oi();
    return i.setAllFaces(e), i;
  }
  /**
   * Create with sides only
   */
  static sidesOnly(e = !0) {
    const i = new Oi();
    return i.setAllSides(e), i;
  }
}
class ut extends Je {
  // Zod schema for validation and serialization
  static schema = Qd;
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
  /**
   * Get entity type
   */
  getType() {
    return te.Extras;
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
    if (Ii(this.banding)) {
      const s = this.banding.validate(e);
      i.push(...s);
    }
    if (ci(this.finish)) {
      const s = this.finish.validate(e);
      i.push(...s);
    }
    if (ui(this.planing)) {
      const s = this.planing.validate(e);
      i.push(...s);
    }
    if (ui(this.planing) && ci(this.finish) && e?.t) {
      const s = this.planing.getTotalFacePlaning();
      s > 0 && e.t - s < 5 && i.push(new he({
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
    return Ii(this.banding) && (i += this.banding.getCost(e)), ci(this.finish) && (i += this.finish.getCost(e)), ui(this.planing) && (i += this.planing.getCost(e)), i;
  }
  /**
   * Get human-readable description of all extras
   */
  getDescription() {
    const e = [];
    return Ii(this.banding) && this.banding.hasValues() && e.push(this.banding.getDescription()), ci(this.finish) && this.finish.hasValues() && e.push(this.finish.getDescription()), ui(this.planing) && this.planing.hasValues() && e.push(this.planing.getDescription()), e.length > 0 ? e.join("; ") : "No extras";
  }
  /**
   * Check if any extras are applied
   */
  hasExtras() {
    return !!(Ii(this.banding) && this.banding.hasValues() || ci(this.finish) && this.finish.hasValues() || ui(this.planing) && this.planing.hasValues());
  }
  /**
   * Clear all extras
   */
  clear() {
    Ii(this.banding) && this.banding.clear(), ci(this.finish) && this.finish.clear(), ui(this.planing) && this.planing.clear();
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
    e ? e instanceof Wt ? this.banding = e : this.banding = new Wt(e) : this.banding = void 0;
  }
  /**
   * Set finish
   */
  setFinish(e) {
    e ? e instanceof Dt ? this.finish = e : this.finish = new Dt(e) : this.finish = void 0;
  }
  /**
   * Set planing
   */
  setPlaning(e) {
    e ? e instanceof Oi ? this.planing = e : this.planing = new Oi(e) : this.planing = void 0;
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
    return new ut(e);
  }
  /**
   * Create empty extras container
   */
  static empty() {
    return new ut();
  }
  /**
   * Create with specific extras
   */
  static create(e) {
    return new ut(e);
  }
  /**
   * Check if any extras are applicable to shape
   * Used for UI validation to determine if extras tab should be enabled
   */
  isApplicable(e) {
    return !!(Ii(this.banding) && this.banding.isApplicable(e) || ci(this.finish) && this.finish.isApplicable(e) || ui(this.planing) && this.planing.isApplicable(e));
  }
  /**
   * Get summary of active extras
   */
  getSummary() {
    return {
      hasBanding: Ii(this.banding) && this.banding.hasValues() || !1,
      hasFinish: ci(this.finish) && this.finish.hasValues() || !1,
      hasPlaning: ui(this.planing) && this.planing.hasValues() || !1,
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
    return s ? Ii(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" ? Object.keys(s.sides).some((n) => {
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
    return s ? ci(s) && typeof s.hasValues == "function" ? s.hasValues() : s.faces && typeof s.faces == "object" ? Object.keys(s.faces).some((n) => {
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
    return s ? ui(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" && Object.keys(s.sides).some((a) => {
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
    return s ? xd(s) && typeof s.hasValues == "function" ? s.hasValues() : s.images && Array.isArray(s.images) ? s.images.length > 0 : !1 : !1;
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
          return ut.hasBanding(e);
        case "finish":
          return ut.hasFinish(e);
        case "planing":
          return ut.hasPlaning(e);
        case "imageUpload":
          return ut.hasImageUpload(e);
      }
    return ut.hasBanding(e) || ut.hasFinish(e) || ut.hasPlaning(e) || ut.hasImageUpload(e);
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
    return ut.hasBanding(e) && i.push("banding"), ut.hasFinish(e) && i.push("finish"), ut.hasPlaning(e) && i.push("planing"), i;
  }
}
const Mo = !1;
function jp() {
  return {
    banding: {
      scope: ["sides"],
      sides: vi.map((t) => `side.${t}`)
      // Only use main sides (l1/l2/w1/w2), not corners
    },
    finish: {
      scope: ["faces"],
      faces: St.map((t) => `face.${t}`)
    },
    planing: {
      scope: ["faces", "sides"],
      faces: St.map((t) => `face.${t}`),
      sides: vi.map((t) => `side.${t}`)
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
const Vp = jp(), li = (t) => Vp[t] || {
  scope: ["sides"],
  sides: Ft.map((e) => `side.${e}`)
}, Aa = (t) => {
  const e = li(t), i = [];
  return e.faces && i.push(...e.faces), e.sides && i.push(...e.sides), i;
}, Qk = (t) => (li(t).faces || []).map((i) => {
  const s = Di(i);
  return s.scope === "face" ? s.key : void 0;
}).filter((i) => i !== void 0), e0 = (t) => (li(t).sides || []).map((i) => {
  const s = Di(i);
  return s.scope === "side" ? s.key : void 0;
}).filter((i) => typeof i == "string"), Di = (t) => {
  const e = t.split(".");
  if (e.length !== 2 || e[0] !== "face" && e[0] !== "side")
    throw new Error(`Invalid ExtraLocation format: ${t}. Must be 'face.X' or 'side.X'`);
  const i = e[0], s = e[1];
  if (i === "face" && !St.includes(s))
    throw new Error(`Invalid face key '${s}' in location '${t}'`);
  if (i === "side" && !Ft.includes(s))
    throw new Error(`Invalid side key '${s}' in location '${t}'`);
  return {
    scope: i,
    key: s,
    original: t
  };
}, Ro = (t) => Di(t).scope, cl = (t) => li(t).scope.includes("faces"), ul = (t) => li(t).scope.includes("sides"), t0 = (t) => {
  const e = li(t);
  return e.scope.includes("faces") && e.scope.includes("sides");
}, Bp = (t, e) => {
  if (t.length === 1 && t[0].length === 1 && t[0][0] === !0)
    return "boolean";
  const i = t.flat().filter((a) => typeof a == "string"), n = [.../* @__PURE__ */ new Set([...i, ...e || []])].length;
  return n === 0 ? "multiple" : n === 1 ? "single" : "multiple";
}, i0 = (t, e = "") => {
  if (typeof t == "string") return t;
  if (typeof t == "boolean") return t ? "Y" : e;
  if (typeof t == "object" && t !== null && !Array.isArray(t)) {
    const i = Object.values(t).map((s) => typeof s == "string" ? s : typeof s == "boolean" && s ? "Y" : "").filter((s) => s !== "");
    return i.length > 0 ? i.join("|") : e;
  }
  return e;
}, Np = (t, e) => {
  const i = t;
  i.extras || (i.extras = {}), i.extras[e] || (i.extras[e] = {});
  const s = i.extras[e];
  cl(e) && (s.faces || (s.faces = {})), ul(e) && (s.sides || (s.sides = {}));
}, Gp = (t, e, i) => {
  Np(t, e);
  const n = t.extras[e], { scope: a } = Di(i);
  return a === "face" ? {
    extraContainer: n.faces || {}
  } : {
    extraContainer: n.sides || {}
  };
}, _i = (t, e, i) => {
  const s = us(t, e, i);
  if (s == null || s === !1 || s === "")
    return !1;
  if (typeof s != "object" || Array.isArray(s))
    return typeof s == "boolean" ? s : typeof s == "string" ? s.trim() !== "" : !!s;
  const n = Kt(e);
  if (!n || !n.labels || n.labels.length === 0)
    return !!s;
  const a = s, o = [];
  for (const l of n.labels) {
    const c = a[l];
    !c || c === "" || o.push(String(c).trim());
  }
  if (o.length === 0)
    return !1;
  const r = o.join("|");
  return n.pricing && r in n.pricing ? !0 : n.labels.every((l) => {
    const c = a[l];
    return !(c == null || c === !1 || c === "" || typeof c == "string" && c.trim() === "");
  });
}, qp = (t, e, i, s, n) => {
  const a = Kt(e);
  if (a) {
    const o = us(t, e, i);
    if (console.log(`[getExtrasValue] extraType=${e} location=${i} optionKey=${s} objectValue=`, o, "config.labels=", a.labels), o !== null) {
      if (typeof o == "boolean")
        return console.log("[getExtrasValue] returning boolean:", o), o;
      if (typeof o == "string") {
        const r = a.labels.indexOf(s);
        return r !== -1 && a.options[r] && Array.isArray(a.options[r]) && !a.options[r].includes(o) ? (console.log("[getExtrasValue] string value not in available options, returning null"), null) : (console.log("[getExtrasValue] returning string:", o), o);
      }
      if (typeof o == "object" && s in o) {
        const r = o[s];
        if (console.log("[getExtrasValue] object has optionKey, value=", r), r === !0) {
          const l = a.labels.indexOf(s);
          if (l !== -1 && a.options[l] && Array.isArray(a.options[l])) {
            const c = a.options[l];
            if (c.length === 1)
              return console.log("[getExtrasValue] returning single option for boolean true:", c[0]), c[0];
          }
          return console.log("[getExtrasValue] returning optionKey for boolean true:", s), s;
        }
        if (typeof r == "string") {
          const l = a.labels.indexOf(s);
          if (l !== -1 && a.options[l] && Array.isArray(a.options[l])) {
            const c = a.options[l];
            if (!c.includes(r))
              return console.log(`[getExtrasValue] string value '${r}' not in available options`, c, ", returning null"), null;
          }
        }
        return console.log("[getExtrasValue] returning from object:", r), r;
      } else typeof o == "object" && console.log(`[getExtrasValue] objectValue is object but optionKey '${s}' not in it. Keys:`, Object.keys(o));
    }
  }
  return console.log("[getExtrasValue] no config or objectValue null, returning false"), !1;
}, s0 = (t, e, i, s, n, a, o) => {
  if (Kt(e))
    switch (Zp(e)) {
      case "boolean":
        xs(t, e, i, !!n);
        break;
      case "string":
        xs(t, e, i, String(n));
        break;
      case "object":
        {
          let c = us(t, e, i) || {};
          typeof c != "object" && (c = {}), c[s] = n, xs(t, e, i, c);
        }
        break;
    }
}, zp = (t, e, i, s) => {
  Kp(t, e, i);
}, n0 = (t, e, i, s, n) => {
  if (i.length === 0) return null;
  const a = i.map((o) => qp(t, e, o, s));
  if (n === "boolean" || n === "single") {
    const o = a.every((l) => !!l), r = a.every((l) => !l);
    return o ? !0 : r ? !1 : null;
  }
  if (n === "multiple") {
    const o = a[0];
    return a.every((l) => l === o) ? o : null;
  }
  return null;
}, a0 = (t, e, i, s) => {
  i.forEach((n) => {
    zp(t, e, n);
  });
}, ua = (t, e, i, s, n, a) => {
  const o = us(t, e, i), r = [];
  if (o && a?.length)
    if (typeof o == "object" && !Array.isArray(o)) {
      const c = o;
      for (const u of a) {
        const p = c[u];
        if (!p) {
          r.push("");
          continue;
        }
        if (p === !0) {
          const d = Kt(e), h = d?.labels.indexOf(u) ?? -1, k = h !== -1 && d?.options[h], N = k?.length === 1 ? k[0] : u;
          r.push(N);
          continue;
        }
        r.push(String(p));
      }
    } else if (typeof o == "string") {
      const c = o.split("|");
      a.forEach((u, p) => {
        r.push(c[p] || "");
      });
    } else
      r.push(String(o));
  else if (o)
    if (typeof o == "string" && a?.length) {
      const c = o.split("|");
      a.forEach((u, p) => {
        r.push(c[p] || "");
      });
    } else
      r.push(String(o));
  const l = r.filter((c) => c && typeof c == "string" && c.trim() !== "");
  if (!Array.isArray(l) || !l.length)
    return !1;
  if (!s)
    return 0;
  try {
    const c = l.map((p, d) => {
      if (typeof p == "boolean" && p === !0 && n) {
        const h = n[d];
        if (h && h.length === 1)
          return String(h[0]);
      }
      return String(p);
    });
    return s(e, c);
  } catch (c) {
    return console.error("Error calculating extras price:", c), !1;
  }
}, o0 = (t, e, i) => {
  const s = /* @__PURE__ */ new Set(), n = li(e);
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
}, r0 = (t, e, i, s) => {
  const n = s[0], a = li(e);
  n && t.forEach((o) => {
    const l = o.extras[e];
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
}, l0 = (t, e, i) => {
  const s = li(e);
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
}, Wp = (t, e, i, s = !1) => {
  const n = li(e), a = t;
  a.extras[e] || (a.extras[e] = {});
  const o = a.extras[e];
  o.options || (o.options = {});
  const r = o.options;
  if (cl(e) && (o.faces || (o.faces = {}), r.faces || (r.faces = {})), ul(e) && (o.sides || (o.sides = {}), r.sides || (r.sides = {})), s) {
    if (n.faces && o.faces) {
      for (const l in o.faces) {
        const c = o.faces[l];
        typeof c == "string" && (o.faces[l] = c.trim() !== "");
      }
      r.faces && Object.keys(r.faces).forEach((l) => {
        l !== "all" && delete r.faces[l];
      });
    }
    if (n.sides && o.sides) {
      for (const l in o.sides) {
        const c = o.sides[l];
        typeof c == "string" && (o.sides[l] = c.trim() !== "");
      }
      r.sides && Object.keys(r.sides).forEach((l) => {
        l !== "all" && delete r.sides[l];
      });
    }
  } else
    n.faces && r.faces, n.sides && r.sides;
}, Mi = (t, e, i, s = [], n = []) => {
  const a = Bp(i, n);
  Wp(t, e, a === "boolean" ? [] : s, a === "boolean");
}, Up = (t, e, i, s) => {
  if (!i || !Object.keys(i).length)
    return { valid: !0, messages: [], incompleteLocations: [] };
  const n = [], a = [], o = Aa(e), r = Object.keys(i), l = Math.max(...r.map((u) => u.split("|").length));
  if (l <= 1)
    return { valid: !0, messages: [], incompleteLocations: [] };
  for (const u of o) {
    const { extraContainer: p } = Gp(t, e, u), { key: d } = Di(u), h = p[d];
    if (!h)
      continue;
    let k;
    typeof h == "string" ? k = h.includes("|") ? h.split("|") : [h] : typeof h == "boolean" ? k = h ? ["true"] : [] : typeof h == "object" && !Array.isArray(h) && h !== null ? k = Object.values(h).filter((H) => H != null && H !== "" && H !== !1).map((H) => String(H)) : k = [String(h)];
    const N = k.length;
    if (N === 0)
      continue;
    let q = !1, O = !1, G = "";
    if (N > 0) {
      if (s)
        try {
          const H = k.filter((F) => F.trim() !== ""), W = s(e, H);
          O = W !== null && W > 0;
        } catch (H) {
          console.error("[validateExtrasCompleteness] Error getting price:", H), O = !1;
        }
      else {
        const H = k.join("|");
        O = r.some((W) => W === H || W.startsWith(H + "|"));
      }
      if (N < l) {
        q = !0;
        const H = k.join("|");
        if (r.some((F) => F.startsWith(H + "|")) && !O) {
          const F = l - N, B = k.join(", ");
          G = `${e} selection incomplete for ${u}. Selected: "${B}" but ${F} more level${F > 1 ? "s" : ""} required.`;
        }
      }
      !O && !q && (G = `${e} selection invalid for ${u}. No pricing available for "${k.join(", ")}".`);
    }
    N > 0 && !O && (a.push(u), n.push(G || `${e} pricing incomplete for ${u}: ${N}/${l} levels selected`));
  }
  return { valid: a.length === 0, messages: n, incompleteLocations: a };
}, Hp = (t, e, i) => {
  if (!i || !i[e])
    return { valid: !0, violations: [] };
  const s = i[e], n = [], a = (r, l, c) => {
    l == null || c === void 0 || (c.min !== void 0 && l < c.min && n.push({
      dimension: r,
      value: l,
      constraint: "min",
      limit: c.min
    }), c.max !== void 0 && l > c.max && n.push({
      dimension: r,
      value: l,
      constraint: "max",
      limit: c.max
    }));
  };
  a("longSide", t.longSide, s.longSide), a("shortSide", t.shortSide, s.shortSide);
  const o = typeof t.t == "string" ? parseFloat(t.t) : t.t;
  return isNaN(o) || a("t", o, s.t), {
    valid: n.length === 0,
    violations: n,
    message: s.message
  };
}, Yp = (t, e, i) => {
  if (i)
    return i;
  const s = e.dimension === "t" ? "thickness" : e.dimension === "longSide" ? "long side" : "short side", n = e.constraint === "min" ? "minimum" : "maximum";
  return `${t.charAt(0).toUpperCase() + t.slice(1)} requires ${s} ${n} of ${e.limit} (current: ${e.value})`;
};
function c0(t, e = "banding") {
  const i = t.extras?.[e];
  if (!i?.sides) return;
  const s = i.sides, n = s.l1, a = s.l2, o = s.w1, r = s.w2;
  s.l1 = o, s.l2 = r, s.w1 = n, s.w2 = a;
}
let Ta = null;
const u0 = (t) => {
  Ta = t;
}, Kt = (t) => Ta ? Ta.getExtrasConfig(t) : null, xs = (t, e, i, s) => {
  t.extras || (t.extras = {}), t.extras[e] || (t.extras[e] = { sides: {}, faces: {} });
  const { scope: n, key: a } = Di(i), o = n === "face" ? t.extras[e].faces : t.extras[e].sides;
  o[a] = s;
}, us = (t, e, i) => {
  const { scope: s, key: n } = Di(i), a = s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides;
  return a?.[n]?.value || a?.[n] || null;
}, Kp = (t, e, i) => {
  const { scope: s, key: n } = Di(i), a = s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides;
  a && n in a && delete a[n];
}, Zp = (t) => {
  const e = Kt(t);
  return !e || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 1 && e.options[0][0] === !0 || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 0 ? "boolean" : e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].every((i) => typeof i == "string") ? "string" : e.options.length > 1 ? "object" : "string";
};
class Wt extends wn {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Hr;
  static computedProperties = {
    ...wn.computedProperties,
    ...Ud
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
      vi.includes(s) || i.push(new he({
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
      const s = i, n = Kt("banding");
      if (n && n.labels && n.labels.length > 0) {
        const o = n.labels.map((r) => {
          const l = s[r];
          return typeof l == "string" ? l : typeof l == "boolean" && l ? "Y" : "";
        }).filter((r) => r !== "");
        return o.length > 0 ? o.join("|") : !1;
      }
      const a = Object.values(s).map((o) => typeof o == "string" ? o : typeof o == "boolean" && o ? "Y" : "").filter((o) => o !== "");
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
    for (const i of vi)
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
    return new Wt(e);
  }
  /**
   * Create empty banding
   */
  static empty() {
    return new Wt();
  }
  /**
   * Create with all sides
   */
  static allSides(e = !0) {
    const i = new Wt();
    return i.setAllSides(e), i;
  }
}
class os extends Je {
  // Zod schema for validation and serialization
  static schema = Yd;
  static computedProperties = Kd;
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
    return this.type && this.size !== null && this.size <= 0 && e.push(new he({
      message: `Corner ${this.index + 1}: Size must be positive`,
      type: "error"
    })), (this.index < 0 || this.index > 3) && e.push(new he({
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
    return this.size > n / 2 && s.push(new he({
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
    return new os(e);
  }
  /**
   * Create a radius corner
   */
  static radius(e, i) {
    return new os({ type: "radius", size: e, index: i });
  }
  /**
   * Create a bevel corner
   */
  static bevel(e, i) {
    return new os({ type: "bevel", size: e, index: i });
  }
}
class ai extends Je {
  // Zod schema for validation and serialization
  static schema = rf;
  static computedProperties = lf;
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
    return (this.x < 0 || this.y < 0) && e.push(new he({
      message: "Position cannot be negative",
      type: "error"
    })), this.diameter <= 0 && e.push(new he({
      message: "Diameter must be positive",
      type: "error"
    })), this.depth !== void 0 && this.depth < 0 && e.push(new he({
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
    return new ai({ x: e, y: i, diameter: s, face: n });
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new ai(e);
  }
  get area() {
    const e = this.diameter / 2;
    return Math.PI * e * e;
  }
}
class Sn extends Je {
  // Zod schema for validation and serialization
  static schema = nf;
  static computedProperties = af;
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
    if (this.position < 0 && e.push(new he({
      message: "Position cannot be negative",
      type: "error"
    })), this.numHoles <= 0 && e.push(new he({
      message: "Number of holes must be positive",
      type: "error"
    })), this.diameter <= 0 && e.push(new he({
      message: "Diameter must be positive",
      type: "error"
    })), this.hingeLength <= 0 && e.push(new he({
      message: "Hinge length must be positive",
      type: "error"
    })), this.depth !== void 0 && this.depth < 0 && e.push(new he({
      message: "Depth cannot be negative",
      type: "error"
    })), this.numHoles > 1) {
      const i = this.hingeLength - 2 * this.outerSpacing;
      this.diameter * this.numHoles > i && e.push(new he({
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
    return this.generateHoles(i, s).map((a) => new ai(a));
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
      s.push(new ai({
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
    return new Sn(e);
  }
}
class dl extends Je {
  // Validation properties (issues, warnings) are inherited from validationBasePropertiesSchema
  // via sawPropertiesSchema which extends it - they are initialized automatically
  // when the Zod schema is parsed in the constructor
  // isValid is also provided as a computed property from validationBaseComputedProperties
  // Zod schema for validation and serialization
  static schema = Pa;
  static computedProperties = zf;
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
  static defaults = Pa.parse({});
  constructor(e = {}) {
    super(e), this.stockType === "linear" && (this.cutType = void 0, this.cutPreference = void 0), this.cutType !== "efficiency" && this.options?.minSpacing !== 0 && (this.options = { ...this.options, minSpacing: 0 });
  }
  /**
   * Get entity type
   */
  getType() {
    return te.Saw;
  }
  /**
    * Validate the saw data
    * For backward compatibility, returns Issue[] synchronously
    * Delegates to async validation which uses the schema
    */
  validate() {
    return this.issues = [], this.warnings = [], this.bladeWidth < 0 && this.issues.push(new he({
      message: "Blade width cannot be negative",
      field: [["bladeWidth"]],
      type: "error",
      shouldTranslate: !1
    })), this.issues;
  }
}
function Qa(t, e, i = "decimal") {
  const s = { ...t };
  for (const [n, a] of Object.entries(e)) {
    const o = t[n];
    switch (a.type) {
      case "number":
        o != null ? s[n] = typeof o == "string" ? K({ v: o, nf: i }) : o : o === null && (s[n] = null);
        break;
      case "trim":
        if (o) {
          const r = {};
          for (const [l, c] of Object.entries(o))
            r[l] = typeof c == "string" ? K({ v: c, nf: i }) : c;
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
const Jp = {
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
}, Xp = {
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
}, Qp = {
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
function kn() {
  this.issues = [], this.warnings && (this.warnings = []);
}
function is(t) {
  t.type === "warning" && this.warnings ? this.warnings.push(t) : this.issues.push(t);
}
function ds(t) {
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
    return new he({
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
function jo(t, e) {
  const i = t.safeParse(e);
  return i.success ? [] : ds(i.error);
}
const fl = {
  clearValidation: kn,
  addIssue: is,
  validateWithSchema: jo,
  zodErrorsToIssues: ds,
  /**
   * Run standard validation flow
   */
  runValidation(t, e = {}) {
    return kn.call(this), e.skipSchemaValidation || jo(t, this).forEach((s) => is.call(this, s)), this.issues || [];
  }
};
class fi extends Je {
  // Required: Define schema and computed properties for SchemaClass
  static schema = mi;
  static computedProperties = Of;
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}) {
    super(e);
    const i = xa(this.stockType);
    i.includes(this.cutType) || (this.cutType = i.length > 0 ? i[0] : void 0);
    const s = Ia(this.stockType, this.cutType);
    this.cutPreference && !s.includes(this.cutPreference) ? this.cutPreference = s[0] || void 0 : !this.cutPreference && s.length > 0 && (this.cutPreference = s.includes("l") ? "l" : s[0]), this.stockType === "roll" && this.options?.stackingMode !== "none" && (this.options = { ...this.options, stackingMode: "none" }), this.cutType !== "efficiency" && this.options?.minSpacing !== 0 && (this.options = { ...this.options, minSpacing: 0 });
  }
  /**
   * Get entity type
   */
  getType() {
    return te.InputSaw;
  }
  // Validation properties (issues, warnings, isValid) come from the schema via SchemaClass
  // clearValidation and addIssue are provided by validation-helpers
  /**
   * Validate to perform InputSaw-specific validation
   * Implements the Validatable interface requirement
   */
  validate(e) {
    if (kn.call(this), e?.skipSchemaValidation || fl.runValidation.call(
      this,
      mi,
      e
    ), !e?.skipBusinessValidation) {
      if (this.bladeWidth !== void 0 && this.bladeWidth !== null) {
        const i = K({ v: this.bladeWidth });
        i === null || isNaN(i) || i < 0 ? is.call(this, new he({
          message: "Blade width must be a non-negative number",
          type: "error",
          field: [["bladeWidth"]]
        })) : i > 100 && is.call(this, new he({
          message: "Blade width seems unusually large (> 100)",
          type: "warning",
          field: [["bladeWidth"]]
        }));
      }
      this.stackHeight !== void 0 && this.stackHeight !== null && (this.stackHeight < 1 ? is.call(this, new he({
        message: "Stack height must be at least 1",
        type: "error",
        field: [["stackHeight"]]
      })) : this.stackHeight > 1e3 && is.call(this, new he({
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
    const n = xa(this.stockType);
    n.includes(this.cutType) || (this.cutType = n.length > 0 ? n[0] : void 0);
    const a = i !== this.stockType, o = s !== this.cutType;
    if (a || o) {
      const r = Ia(this.stockType, this.cutType);
      this.cutPreference && !r.includes(this.cutPreference) ? r.length > 0 ? this.cutPreference = r.includes("l") ? "l" : r[0] : this.cutPreference = void 0 : !this.cutPreference && r.length > 0 && (this.cutPreference = r.includes("l") ? "l" : r[0]);
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
    const e = this.toData(), i = Qa(
      e,
      Qp
    );
    return new dl(i);
  }
}
const pl = Ft, Vo = St;
vi.map((t) => `side.${t}`), Vo.map((t) => `face.${t}`), Vo.map((t) => `face.${t}`), pl.map((t) => `side.${t}`);
let eh = class Oa extends Je {
  // Zod schema for validation and serialization
  static schema = jf;
  static computedProperties = Vf;
  /**
   * Get entity type (required for AutoSerializable)
   */
  getType() {
    return te.Machining;
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
      (a.x < 0 || a.y < 0) && n.push(new he({
        message: `Hole ${o + 1}: Position cannot be negative`,
        type: "error"
      })), a.diameter <= 0 && n.push(new he({
        message: `Hole ${o + 1}: Diameter must be positive`,
        type: "error"
      }));
    }) : i === "hingeHoles" ? this.hingeHoles.forEach((a, o) => {
      a.position < 0 && n.push(new he({
        message: `Hinge ${o + 1}: Position cannot be negative`,
        type: "error"
      }));
    }) : i === "corners" ? this.corners.forEach((a, o) => {
      a.size <= 0 && n.push(new he({
        message: `Corner ${o + 1}: Size must be positive`,
        type: "error"
      }));
    }) : (n.push(...this.validate(e, "holes", s)), n.push(...this.validate(e, "hingeHoles", s)), n.push(...this.validate(e, "corners", s))), i || (this.issues = n), n;
  }
  /**
    * Add a hole
    */
  addHole(e) {
    this.holes.push(e instanceof ai ? e : new ai(e)), this.validate();
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
    this.hingeHoles.push(e instanceof Sn ? e : new Sn(e)), this.validate();
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
    const i = e instanceof os ? e : new os(e);
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
        i.push(a instanceof ai ? a : new ai(a));
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
          c = e.position + l, u = o - e.distanceFromEdge;
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
    return new Oa();
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new Oa(e);
  }
  get allHoles() {
    const e = [...this.holes];
    return this.hingeHoles.forEach((i) => {
      this.generateHingeHoles(i, null).forEach((n) => {
        e.push(new ai(n));
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
function th(t, e, i) {
  return i ? typeof t == "number" ? isNaN(t) ? null : t : typeof t == "string" ? t : null : e === "decimal" ? t ? K({ v: t, nf: "decimal" }) : null : t;
}
function ih(t, e, i, s = !1) {
  const n = s ? Object.fromEntries(vi.map((r) => [r, 0])) : { l1: 0, l2: 0, w1: 0, w2: 0 };
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
    l != null && (n[r] = K({ v: l, nf: e }));
  }), n;
}
class hl extends Je {
  // Required: Define schema and computed properties for SchemaClass
  static schema = mn;
  static computedProperties = Ka;
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
      s[o] === null || s[o] === void 0 ? delete s[o] : s[o] !== void 0 && (s[o] = th(s[o], i, n), s[o] === null && delete s[o]);
    s.name?.length ? s.name = Ad(s.name)?.toUpperCase() : s.name = "", s.material ? s.material = s.material.trim().toUpperCase() : s.material = "", typeof s.notes == "string" ? s.notes = s.notes.replace(/,/g, " ") : s.notes = "", s.trim && (s.trim = ih(s.trim, i, n, !0)), super(s), this.issues || (this.issues = []), this.warnings || (this.warnings = []);
  }
  /**
   * Get entity type
   */
  getType() {
    return te.InputRectangle;
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
    return kn.call(this), e?.skipSchemaValidation || fl.runValidation.call(
      this,
      mn,
      e
    ), this.issues;
  }
  // isValid is provided as a computed property from validationBaseComputedProperties
  /**
   * Get trimmed dimensions
   */
  get trimmedDimensions() {
    const e = this.longSide, i = this.shortSide, s = K({ v: this.trim.l1 }) ?? 0, n = K({ v: this.trim.l2 }) ?? 0, a = K({ v: this.trim.w1 }) ?? 0, o = K({ v: this.trim.w2 }) ?? 0;
    return {
      name: this.name,
      id: this.id,
      autoId: this.autoId,
      l: e - (a + o),
      w: i - (s + n)
    };
  }
}
class Ws extends hl {
  // Required: Define schema and computed properties for SchemaClass
  // Use getters to defer schema access and avoid circular dependency
  static get schema() {
    return yi;
  }
  static get computedProperties() {
    return Ef;
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
    this.extras || (this.extras = new ut()), this.extras.banding = e;
  }
  get finish() {
    return this.extras?.finish;
  }
  set finish(e) {
    this.extras || (this.extras = new ut()), this.extras.finish = e;
  }
  get planing() {
    return this.extras?.planing;
  }
  set planing(e) {
    this.extras || (this.extras = new ut()), this.extras.planing = e;
  }
  get imageUpload() {
    return this.extras?.imageUpload;
  }
  set imageUpload(e) {
    this.extras || (this.extras = new ut()), this.extras.imageUpload = e;
  }
  // Note: Options getters/setters removed - options now centralized in CalculationData.extrasOptions
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}, i = "decimal") {
    const s = {
      ...e,
      // orientationLock transform is now handled by Zod schema
      machining: e.machining || new eh({
        holes: [],
        hingeHoles: [],
        corners: []
      }),
      extras: e.extras || new ut()
    };
    super(s, i);
  }
  /**
   * Get entity type
   */
  getType() {
    return te.InputShape;
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
        this.issues[d].field.some((h) => l.includes(h[0])) && this.issues.splice(d, 1);
      for (let d = this.warnings.length - 1; d >= 0; d--)
        this.warnings[d].field.some((h) => l.includes(h[0])) && this.warnings.splice(d, 1);
      const c = e.fields.reduce((d, h) => {
        const k = h.split(".")[0];
        return d[k] = !0, d;
      }, {}), p = yi.pick(c).safeParse(this.toData());
      if (!p.success) {
        const d = ds(p.error);
        this.issues.push(...d);
      }
    } else {
      this.issues.length = 0, this.warnings.length = 0;
      const l = yi.safeParse(this.toData());
      if (!l.success) {
        const c = ds(l.error);
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
    } = e, o = (l) => !a || a.includes(l);
    o("l") && wt.l({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), o("w") && wt.w({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), o("t") && wt.t({
      item: this,
      index: s ?? this.index,
      category: ["part"],
      saw: e.saw
    }), o("q") && wt.q({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), o("trim") && wt.trim({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), !n && i.length > 0, o("customData") && wt.customData({
      item: this,
      index: s ?? this.index
    });
    const r = [];
    this.issues.forEach((l, c) => {
      l || r.push(c);
    });
    for (let l = r.length - 1; l >= 0; l--)
      this.issues.splice(r[l], 1);
    return this.issues;
  }
  /**
   * Convert to Shape instance
   */
  toShape(e) {
    const i = Qa(
      this.toData(),
      Jp,
      e
    );
    return new Nn(i);
  }
  changeStockType(e) {
    switch (e) {
      case "sheet":
      case "roll":
        this.orientationLock = "", e === "roll" && (this.t = null);
        break;
      case "linear":
        this.orientationLock = "", this.banding = Object.fromEntries(
          pl.map((i) => [i, !1])
        );
        break;
    }
  }
}
class Us extends hl {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Ht;
  static computedProperties = Mf;
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
    return te.InputStock;
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
        this.issues[d].field.some((k) => c.includes(k[0])) && this.issues.splice(d, 1);
      for (let d = this.warnings.length - 1; d >= 0; d--)
        this.warnings[d].field.some((k) => c.includes(k[0])) && this.warnings.splice(d, 1);
      const u = this.toData();
      console.log("[InputStock.validate] Field-level validation requested for fields:", e.fields), console.log("[InputStock.validate] Data to validate:", u);
      const p = e.fields.reduce((d, h) => {
        const k = h.split(".")[0];
        return d[k] = !0, d;
      }, {});
      try {
        const d = Ht.pick(p);
        console.log("[InputStock.validate] Created partial schema for fields:", Object.keys(p));
        const h = d.safeParse(u);
        if (console.log("[InputStock.validate] Validation result:", h.success ? "SUCCESS" : "FAILED"), h.success)
          console.log("[InputStock.validate] No validation errors found");
        else {
          console.log("[InputStock.validate] Validation errors:", h.error.issues);
          const k = ds(h.error);
          this.issues = [...this.issues, ...k];
        }
      } catch (d) {
        console.warn(`Failed to validate fields ${e.fields.join(", ")}:`, d);
      }
      this.isNew && (console.log("[InputStock.validate] Clearing isNew flag"), this.isNew = !1);
    } else {
      this.issues = [], this.warnings = [];
      const c = Ht.safeParse(this.toData());
      if (!c.success) {
        const u = ds(c.error);
        this.issues = u;
      }
    }
    if (e?.skipBusinessValidation)
      return this.issues;
    const a = e?.fields, o = (c) => !a || a.includes(c);
    ["l", "w", "t"].forEach((c) => {
      o(c) && wt[c]({
        item: this,
        saw: s,
        index: n ?? this.index,
        category: ["stock"]
      });
    }), o("grain") && wt.grain({
      item: this,
      index: n ?? this.index,
      category: ["stock"]
    }), o("trim") && wt.trim({
      item: this,
      index: n ?? this.index,
      category: ["stock"]
    }), o("q") && wt.q({
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
    const a = Qa(
      s,
      Xp,
      e
    );
    return (i || this.saw) && (a.saw = i || this.saw), new vn(a);
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
class gl extends Je {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Vn;
  static computedProperties = Rf;
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
    return te.Group;
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
    this.clearValidation(), e.q !== void 0 && wt.q({ item: e, index: "index" in e && typeof e.index == "number" ? e.index : 0 }).filter((s) => s).forEach((s) => this.addIssue(s));
  }
  /**
    * Validate with actual shape data
    */
  validateWithShapes(e = []) {
    if (!e.length)
      throw new Error("A shapeList is required to validate an InputUserGroup.");
    const i = [...this.issues], s = this.findShapes(e), n = wt.groupShapeCount({
      item: this,
      index: 0,
      shapes: s,
      requiredCount: 2
    });
    if (i.push(...n), i.length) return i;
    const a = wt.groupOrientationLock({
      item: this,
      index: 0,
      shapes: s
    });
    if (i.push(...a), i.length) return i;
    const o = this.joinDimension, r = wt.groupDimensions({
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
        const a = e.find((o) => !!(o.autoId === n || Fe(o) && o.autoId === n || "id" in o && o.id === n));
        a && (Fe(a) || gt(a)) && s.push(a);
      }
      return s.length < this.shapeIds.length && this.addIssue(new he({
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
      const d = s.filter((k) => Fe(k) || gt(k)), h = this.validateWithShapes(d);
      if (h.filter((k) => k.type === "error").length > 0)
        throw new Error(`Cannot create Group: ${h[0].message}`);
    }
    const a = this.findShapes(s || []);
    if (a.length === 0)
      throw new Error("No shapes found for Group creation");
    const o = a.map((d) => Fe(d) ? d.toShape() : d), r = o[0];
    o.forEach((d) => {
      if (s && Array.isArray(s)) {
        const h = s.findIndex((k) => "group" in k && k.group?.inUserGroup ? !1 : "parentId" in k && "parentId" in d && k.parentId === d.parentId || "id" in k && "id" in d && k.id === d.id);
        h !== -1 && s.splice(h, 1);
      }
      if ("setRotationToOrientationLockWithoutContainer" in d && typeof d.setRotationToOrientationLockWithoutContainer == "function")
        d.setRotationToOrientationLockWithoutContainer();
      else if ("orientationLock" in d && d.orientationLock) {
        const h = d.orientationLock;
        try {
          h === "l" && "rot" in d ? d.rot = 0 : h === "w" && "rot" in d && (d.rot = 1);
        } catch {
        }
      }
      "group" in d && d.group && (d.group.inUserGroup = !0);
    });
    let l = 0, c = 0;
    this.direction === "horizontal" ? (c = r.w, o.forEach((d) => l += d.l)) : (l = r.l, o.forEach((d) => c += d.w));
    const u = {
      autoId: this.autoId,
      // Use the same autoId as the InputUserGroup
      shapes: o,
      direction: this.direction,
      // Already 'horizontal' or 'vertical'
      l,
      w: c,
      t: r?.t,
      material: r?.material,
      orientationLock: c > l ? "w" : "l",
      // Set based on which dimension is longer
      type: "user",
      q: 1,
      // Groups always have q=1
      preventAutoRotation: !0,
      container: n,
      skipValidation: !0
      // Already validated
    }, p = new Gn(u);
    return n && "updateShapeSpacing" in p && typeof p.updateShapeSpacing == "function" && p.updateShapeSpacing(n), p;
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
function ml(t) {
  return {
    entities: /* @__PURE__ */ new Map(),
    stockList: [],
    shapeList: [],
    ...t
  };
}
function an(t, e) {
  if (Array.isArray(e))
    for (const i of e)
      i && typeof i == "object" && (i.autoId && t.entities.set(i.autoId, i), i.id && i.id !== i.autoId && t.entities.set(i.id, i));
}
function sh(t, e) {
  if (e) {
    if (e && typeof e == "object" && typeof e.getType == "function")
      return e;
    if (typeof e == "string")
      return t.entities.get(e);
    if (e && typeof e == "object" && e.autoId)
      return t.entities.get(e.autoId);
  }
}
function La(t, e) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t))
    return t.map((s) => La(s, e));
  if (typeof t.getType == "function")
    return t;
  if (t.__ref && (t.id || t.autoId)) {
    const s = t.autoId || t.id;
    return sh(e, s) || t;
  }
  const i = { ...t };
  for (const s in i)
    Object.prototype.hasOwnProperty.call(i, s) && (i[s] = La(i[s], e));
  return i;
}
function eo(t, e, i) {
  if (t == null || t && typeof t == "object" && typeof t.getType == "function")
    return t;
  if (Array.isArray(t))
    return t.every((r) => r && typeof r == "object" && typeof r.getType == "function") ? t : t.map((r) => eo(r, e));
  if (!t || typeof t != "object" || !t.__entityType && !t.__ref && !t.type)
    return t;
  const s = t.__entityType;
  e?.preventAutoRotation && s && (s === te.Rectangle || s === te.Placeable || s === te.Container || s === te.Shape || s === te.Group || s === te.Offcut || s === te.Stock || s === te.Segment) && (t.preventAutoRotation = !0), e && (t.__context = e);
  const n = t.__ref || s, a = Os();
  if (n && a.has(n)) {
    const o = a.get(n), { __ref: r, __entityType: l, __context: c, ...u } = t, p = new o(u);
    return p.issues && Array.isArray(p.issues) && (p.issues = p.issues.map((d) => d instanceof he ? d : he.fromData(d, p))), p.warnings && Array.isArray(p.warnings) && (p.warnings = p.warnings.map((d) => d instanceof he ? d : he.fromData(d, p))), p;
  }
  return delete t.__context, t;
}
function Ri(t, e) {
  if (e || (e = ml()), Array.isArray(t)) {
    const n = [];
    for (const a of t) {
      const o = Ri(a, e);
      n.push(o), o && typeof o == "object" && (o.autoId || o.id) && an(e, [o]);
    }
    return n;
  }
  if (t && typeof t == "object" && typeof t.getType == "function")
    return (t.autoId || t.id) && an(e, [t]), t;
  const i = La(t, e), s = eo(i, e);
  return s && typeof s == "object" && (s.autoId || s.id) && an(e, [s]), s;
}
function d0(t, e) {
  const i = ml(e), s = t?.saw ? Ri(t.saw, i) : void 0;
  s && an(i, [s]);
  const n = t?.stockList ? Ri(t.stockList, i) : [];
  n.length > 0 && (i.stockList = n);
  const a = t?.shapeList ? Ri(t.shapeList, i) : [];
  a.length > 0 && (i.shapeList = a);
  const o = t?.cutList ? Ri(t.cutList, i) : [], r = t?.segmentList ? Ri(t.segmentList, i) : [];
  r.length > 0 && (i.segmentList = r);
  const l = t?.offcuts ? Ri(t.offcuts, i) : [];
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
function f0(t, e = [], i) {
  return t?.length ? e?.length ? t.map((n) => nh(n, e, i)).filter((n) => st(n)) : [] : [];
}
function nh(t, e, i) {
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
    const n = Os(), a = n.get("Group") || n.get(te.Group);
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
function p0(t, e) {
  gi() && (t.stocks && t.stocks.forEach((i, s) => {
    Ut(i) || console.warn(`[${e}] Stock at index ${s} is not a proper Stock instance:`, i);
  }), t.shapes && t.shapes.forEach((i, s) => {
    !gt(i) && !st(i) && console.warn(`[${e}] Shape at index ${s} is not a proper Shape/Group instance:`, i);
  }), t.segments && t.segments.forEach((i, s) => {
    ss(i) || console.warn(`[${e}] Segment at index ${s} is not a proper Segment instance:`, i);
  }), t.groups && t.groups.forEach((i, s) => {
    st(i) || console.warn(`[${e}] Group at index ${s} is not a proper Group instance:`, i);
  }), t.inputUserGroups && t.inputUserGroups.forEach((i, s) => {
    ni(i) || console.warn(`[${e}] InputUserGroup at index ${s} is not a proper InputUserGroup instance:`, i);
  }));
}
function h0(t, e) {
  return Math.random() * (e - t) + t;
}
function Bo(t, e) {
  if (!$e(t.stockLock) || Array.isArray(t.stockLock) && !t?.stockLock?.length)
    return !0;
  if (Array.isArray(t.stockLock)) {
    if (t.stockLock.includes(e.parentId)) return !0;
  } else if (t.stockLock === e.parentId) return !0;
  return !1;
}
function g0(t, e = null, i = "filter", s = !1) {
  if (!t?.length) return [];
  function n(a) {
    if (s === !0) return a.added;
    if (s === !1) return !a.added;
    if (s === null) return !0;
  }
  if (e) {
    if (e?.saw?.stockType === "linear")
      return t[i]((a) => n(a) && !a.group?.inGroup && Bo(a, e) && a.l <= e.l);
    if (e?.saw?.stockType !== "roll")
      return e && Ut(e) ? t[i]((a) => n(a) && !a.group?.inGroup && Bo(a, e) && a.willItFit(e)) : t[i]((a) => n(a) && !a.group?.inGroup && a.willItFit(e));
  }
  return t[i]((a) => n(a) && !a.group?.inGroup);
}
function m0(t, e = null) {
  const i = t.filter((a) => !a?.unusable && (e === null || a.used === e)), s = /* @__PURE__ */ new Map();
  for (const a of i) {
    const o = a.parentId;
    s.has(o) || s.set(o, a);
  }
  return Array.from(s.values());
}
function y0(t, e = null) {
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
function b0(t, e, i) {
  const s = t.filter((a) => a[e] === 0), n = e === "y" ? "l" : "w";
  return s.reduce((a, o, r) => r > 0 ? a + o[n] + i : a + o[n], 0);
}
function ah(t, e, i) {
  if (e.length <= 1) return t;
  const s = lh(e, i), n = t.reduce((r, l) => (r[l.id] = ch(l, s), r), {}), a = Math.min(...Object.values(n));
  return t.filter((r) => !r.added && n[r.id] === a);
}
function oh(t, e) {
  const i = e.parentId;
  return t.filter((s) => s.parentId === i).length;
}
function rh(t, e) {
  const i = e.parentId, s = t.filter((n) => n.used && n.parentId === i).length;
  return e.q - s;
}
function v0(t, e) {
  return oh(t, e) < e.q;
}
function lh(t, e) {
  const i = {};
  return t.forEach((s) => i[s.parentId] = rh(e, s)), i;
}
function ch(t, e) {
  return t.stockLock.reduce((s, n) => s + (e?.[n] ? e[n] : 0), 0);
}
function uh(t, e, i = !1) {
  const s = /* @__PURE__ */ new Map(), n = [], a = /* @__PURE__ */ new Set();
  for (let o = 0; o < t.length; o++) {
    const r = t[o], l = r.autoId;
    if (s.has(l)) {
      const c = s.get(l);
      c && (n.push(c.item), s.set(l, null)), n.push(r), a.add(o);
    } else
      s.set(l, { item: r, index: o });
  }
  if (n.length > 0) {
    const o = e ? ` [${e}]` : "", r = [...new Set(n.map((l) => l.autoId))];
    if (console.warn(`[duplicateIdsPresent]${o} Found duplicates!`), console.warn(`  Total items: ${t.length}`), console.warn(`  Duplicate autoIds: ${r.join(", ")}`), n.forEach((l) => {
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
function w0(t, e) {
  return t.filter((i) => i.l >= e && i.w >= e);
}
function dh(t, e) {
  if (t.stock?.autoId !== e.stock?.autoId) return !1;
  const i = t.x, s = t.x + t.l, n = t.y, a = t.y + t.w, o = e.x, r = e.x + e.l, l = e.y, c = e.y + e.w;
  return !(s <= o || // shape1 is completely to the left of shape2
  r <= i || // shape2 is completely to the left of shape1
  a <= l || // shape1 is completely below shape2
  c <= n);
}
function S0(t) {
  const e = [], i = t.filter((s) => s.added);
  for (let s = 0; s < i.length; s++)
    for (let n = s + 1; n < i.length; n++)
      dh(i[s], i[n]) && e.push({
        shape1: i[s],
        shape2: i[n]
      });
  return e;
}
function k0(t) {
  t.sort(ri.groupPlacementOrder);
  for (let e = 0; e < t.length; e++)
    t[e].placementOrder = e;
}
function x0(t, e) {
  e && t && (e.score = t.score, e.duplicatePattern = t.id);
}
let yl = () => {
};
function I0(t) {
  yl = t;
}
function xn(t, e, i, s, n) {
  yl(t, e, i, s, n);
}
class xi extends Je {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Gf;
  static computedProperties = qf;
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
    return te.PointCollection;
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
    const i = new xi();
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
function fh(t, e, i, s = !0) {
  if (!t || !e || !i) return !1;
  if (t.autoId === e.autoId)
    throw console.error("[collision] ERROR: Shape/group is in testShapes array!"), console.error(`  thisShape: ${t.autoId} (${t.id})`), console.error(`  testShape: ${e.autoId} (${e.id})`), console.error(`  thisShape === testShape: ${t === e}`), new Error(`collision comparing to self ${t.autoId}, ${e.autoId}`);
  const n = s ? i.bladeWidth : 0, a = t.x + t.l + n, o = e.x + e.l + n;
  if (!ge.lessThan(t.x, o) || !ge.greaterThan(a, e.x))
    return !1;
  const r = t.y + t.w + n, l = e.y + e.w + n;
  return ge.lessThan(t.y, l) && ge.greaterThan(r, e.y);
}
function ph(t, e, i) {
  for (const s of e)
    if (t.autoId !== s.autoId && fh(t, s, i))
      return !0;
  return !1;
}
function P0(t, e, i, s = !1) {
  if (!i || !i.length) return !1;
  if (!t?.dimension)
    throw new Error("no line direction provided to collisionWithShapes");
  const n = e.bladeWidth / 2;
  t.shapeCollisions = t.shapeCollisions || [], i = i.filter((a) => a.added);
  for (const a of i) {
    let o = !1, r = !1;
    if (t.dimension === "l" ? (o = ge.greaterThan(t.x2, a.x) && ge.lessThan(t.x1, a.x + a.l), r = ge.greaterThan(t.y1 + n, a.y) && ge.lessThan(t.y1 - n, a.y + a.w)) : t.dimension === "w" && (o = ge.greaterThan(t.x1 + n, a.x) && ge.lessThan(t.x1 - n, a.x + a.l), r = ge.greaterThan(t.y2, a.y) && ge.lessThan(t.y1, a.y + a.w)), o && r)
      if (s) t.shapeCollisions.push(a);
      else return !0;
  }
  return s ? t.shapeCollisions : t.shapeCollisions.length > 0;
}
function Pi(t, e, i, s, n = null, a = null) {
  return new ji({ x1: t, y1: e, x2: i, y2: s, origin: n, type: a });
}
function hh(t, e) {
  const i = t.getCorners(), s = {};
  return i.bottomLeft.x > 0 && i.bottomLeft.y > 0 && (s.bottomLeftDown = Pi(
    i.bottomLeft.x,
    i.bottomLeft.y,
    i.bottomLeft.x,
    0,
    "bottomLeft",
    "bottomLeftDown"
  ), s.bottomLeftLeft = Pi(
    i.bottomLeft.x,
    i.bottomLeft.y,
    0,
    i.bottomLeft.y,
    "bottomLeft",
    "bottomLeftLeft"
  )), i.topLeft.x > 0 && i.topLeft.y < e.w && (s.topLeftLeft = Pi(
    i.topLeft.x,
    i.topLeft.y,
    0,
    i.topLeft.y,
    "topLeft",
    "topLeftLeft"
  ), s.topLeftTop = Pi(
    i.topLeft.x,
    i.topLeft.y,
    i.topLeft.x,
    e.w,
    "topLeft",
    "topLeftTop"
  )), i.topRight.y < e.w && i.topRight.x < e.l && (s.topRightTop = Pi(
    i.topRight.x,
    i.topRight.y,
    i.topRight.x,
    e.w,
    "topRight",
    "topRightTop"
  ), s.topRightRight = Pi(
    i.topRight.x,
    i.topRight.y,
    e.l,
    i.topRight.y,
    "topRight",
    "topRightRight"
  )), i.bottomRight.x < e.l && i.bottomRight.y > 0 && (s.bottomRightRight = Pi(
    i.bottomRight.x,
    i.bottomRight.y,
    e.l,
    i.bottomRight.y,
    "bottomRight",
    "bottomRightRight"
  ), s.bottomRightDown = Pi(
    i.bottomRight.x,
    i.bottomRight.y,
    i.bottomRight.x,
    0,
    "bottomRight",
    "bottomRightDown"
  )), s;
}
function Fs(t, e, i = null) {
  if (t.has(e.x, e.y)) {
    const s = t.get(e.x, e.y);
    s.type === "group" && !i && (s.type = void 0);
    return;
  }
  i && (e.type = i), t.add(e);
}
function on(t, e, i = null) {
  for (const s of e) {
    if (!s) return;
    Fs(t, s, i);
  }
}
function Ue(t, e, i, s, n) {
  const a = gh[t](e, i);
  return s && (a.corner = s), n && (a.direction = n), a;
}
const gh = {
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
function mh(t, e, i) {
  const s = new xi(), n = i.toArray().sort(bl), a = e.bladeWidth;
  if (n.forEach((o) => {
    const r = o.corner, l = o.type;
    if (!a)
      s.add(o);
    else
      switch (r) {
        case "topRight":
          {
            const c = Ue("top", o, a, r);
            l && (c.type = l), s.add(c);
            const u = Ue("right", o, a, r);
            l && (u.type = l), s.add(u);
          }
          break;
        case "topLeft":
          {
            const c = Ue("top", o, a, r);
            l && (c.type = l), s.add(c);
            const u = Ue("left", o, a, r);
            l && (u.type = l), s.add(u);
          }
          break;
        case "bottomRight":
          {
            const c = Ue("bottom", o, a, r);
            l && (c.type = l), s.add(c);
            const u = Ue("right", o, a, r);
            l && (u.type = l), s.add(u);
          }
          break;
        case "bottomLeft":
          {
            const c = Ue("bottom", o, a, r);
            l && (c.type = l), s.add(c);
            const u = Ue("left", o, a, r);
            l && (u.type = l), s.add(u);
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
    const o = /* @__PURE__ */ new Set();
    let r, l, c, u;
    e?.constructor?.name === "Stock" && e?.trimmed || e?.constructor?.name === "Segment" ? (r = e.x, l = e.y, c = e.x + e.l, u = e.y + e.w) : (r = e.x + (e?.trim?.w1 ?? 0), l = e.y + (e?.trim?.l1 ?? 0), c = e.x + e.l - (e?.trim?.w2 ?? 0), u = e.y + e.w - (e?.trim?.l2 ?? 0));
    let p = s.toArray();
    for (let d = p.length; d--; ) {
      const h = p[d];
      (ge.lessThan(h.x, r) || ge.lessThan(h.y, l) || ge.greaterThan(h.x, c) || ge.greaterThan(h.y, u)) && p.splice(d, 1);
    }
    s.clear(), p.forEach((d) => s.add(d)), o.clear(), p = s.toArray();
    for (let d = p.length; d--; ) {
      const h = p[d];
      for (let k = t.length; k--; ) {
        const N = t[k];
        if (h.collidesWith(N)) {
          s.remove(h.x, h.y);
          break;
        }
      }
    }
  }
  return s;
}
function yh(t, e, i) {
  let s = [];
  const n = t.getMinSpacing(i.saw), a = e.corner, o = e.direction;
  if (e.type === "shape")
    switch (a) {
      case "topLeft":
        o === "rl" && (s.push(Ue("right", e, n, a, o)), s.push(Ue("topRight", e, n, a, o))), o === "bt" && (s.push(Ue("bottom", e, n, a, o)), s.push(Ue("bottomLeft", e, n, a, o)));
        break;
      case "topRight":
        o === "lr" && (s.push(Ue("left", e, n, a, o)), s.push(Ue("topLeft", e, n, a, o))), o === "bt" && (s.push(Ue("bottom", e, n, a, o)), s.push(Ue("bottomRight", e, n, a, o)));
        break;
      case "bottomRight":
        o === "lr" && (s.push(Ue("left", e, n, a, o)), s.push(Ue("bottomLeft", e, n, a, o))), o === "tb" && (s.push(Ue("top", e, n, a, o)), s.push(Ue("topRight", e, n, a, o)));
        break;
      case "bottomLeft":
        o === "rl" && (s.push(Ue("right", e, n, a, o)), s.push(Ue("bottomRight", e, n, a, o))), o === "tb" && (s.push(Ue("top", e, n, a, o)), s.push(Ue("topLeft", e, n, a, o)));
        break;
    }
  else if (e.type === "edge")
    switch (o) {
      case "rl":
      case "lr":
        s.push(Ue("top", e, 0)), s.push(Ue("centre", e, 0)), s.push(Ue("bottom", e, 0));
        break;
      case "tb":
      case "bt":
        s.push(Ue("left", e, 0)), s.push(Ue("right", e, 0)), s.push(Ue("centre", e, 0));
        break;
    }
  if (s = s.filter((l) => l.x >= 0 && l.y >= 0), !s.length) return null;
  const r = new xi();
  for (const l of s)
    l.raycast = !0, on(r, Sl(t, l, i).toArray());
  return kl(t, i, r), r;
}
function bh(t, e) {
  const i = new xi();
  return t.sort(bl), t.forEach((s) => {
    st(s) ? (on(i, s.getCoords(e)), s.shapes.forEach((n) => {
      const a = n.getCoords(e);
      on(i, a, "group");
    })) : on(i, s.getCoords(e));
  }), i.points.forEach((s) => {
    s.stock = e.getStock;
  }), i;
}
function vh(t = [], e, i) {
  const s = bh(
    t === null ? e : t,
    i
  );
  return mh(
    e,
    i,
    s
  );
}
function bl(t, e) {
  return t.y === e.y ? e.x - t.x : e.y - t.y;
}
function vl(t, e, i, s, n, a) {
  t.a = e.id, t.b = i ? i.id : null, t.direction = s, t.raycast = !0, t.type = n, t.corner = a;
}
function wh(t, e) {
  if (t.saw.cutType !== "efficiency" || e.length <= 1) return null;
  let i = new xi();
  const s = wl(e, t);
  for (const r of e)
    for (const l of s) {
      if (l.shape.id === r.id) continue;
      const c = Object.values(l.rays).filter((u) => u !== void 0);
      for (const u of c)
        Sh(
          u,
          l.shape,
          r,
          i
        );
    }
  const a = t.saw.efficiencyOptions.primaryCompression === "l" ? "lr" : "tb", o = e.reduce((r, l) => (a === "tb" ? r.x + r.l > l.x + l.l : r.y + r.w > l.y + l.w) ? r : l);
  return s.filter(({ shape: r }) => r.id === o.id).forEach(({ shape: r, rays: l }) => {
    const c = Object.values(l).filter((u) => u !== void 0);
    for (const u of c) {
      const p = new ht(u.x2, u.y2);
      a === u.direction && (vl(p, r, null, u.direction, "edge"), Fs(i, p));
    }
  }), i = kh(i), i;
}
function wl(t, e) {
  return t.map((i) => {
    const s = hh(i, e);
    return {
      shape: i,
      rays: s
    };
  });
}
function Sh(t, e, i, s) {
  switch (t.direction) {
    case "rl":
      Hs(
        t,
        e,
        i,
        s,
        i.x + i.l
      );
      break;
    case "lr":
      Hs(
        t,
        e,
        i,
        s,
        i.x
      );
      break;
    case "tb":
      Hs(
        t,
        e,
        i,
        s,
        i.y + i.w
      );
      break;
    case "bt":
      Hs(
        t,
        e,
        i,
        s,
        i.y
      );
      break;
  }
}
function Hs(t, e, i, s, n) {
  const a = t.dimension === "w", o = a ? "y" : "x", r = a ? "x" : "y", l = a ? "l" : "w";
  if (t[`${r}1`] >= i[r] && t[`${r}1`] <= i[r] + i[l]) {
    const c = t.direction === "lr" && t[`${o}1`] <= n && t[`${o}2`] >= n, u = t.direction === "rl" && t[`${o}1`] >= n && t[`${o}2`] <= n, p = t.direction === "bt" && t[`${o}1`] <= n && t[`${o}2`] >= n, d = t.direction === "tb" && t[`${o}1`] >= n && t[`${o}2`] <= n;
    if (c || u || p || d) {
      const k = a ? t[`${r}1`] : n, N = a ? n : t[`${r}1`], q = new ht(k, N), O = t.origin;
      vl(q, e, i, t.direction, "shape", O), Fs(s, q);
    }
  }
}
function kh(t) {
  const e = new xi();
  return t.points.size === 0 || new Set(t.toArray().map((s) => s.a)).forEach((s) => {
    const n = t.toArray().filter((a) => a.a === s);
    ["right", "left", "top", "bottom"].forEach((a) => {
      const o = xh(
        n,
        a
      );
      o && Fs(e, o);
    });
  }), e;
}
function xh(t, e) {
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
function Sl(t, e, i) {
  const s = new xi(), n = e.getAvailableShapePositions(i);
  for (const a of n) {
    let o;
    switch (o = Ih(e, t, i), a) {
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
    Fs(s, o);
  }
  return kl(t, i, s), s;
}
function Ih(t, e, i) {
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
function kl(t, e, i) {
  let s, n, a, o;
  e?.constructor?.name === "Stock" && e?.trimmed || e?.constructor?.name === "Segment" ? (s = 0, n = 0, a = e.x + e.l - t.l, o = e.y + e.w - t.w) : (s = e?.trim?.w1 ?? 0, n = e?.trim?.l1 ?? 0, a = e.l - (e?.trim?.w2 ?? 0) - t.l, o = e.w - (e?.trim?.l2 ?? 0) - t.w);
  const r = i.toArray();
  for (let l = r.length; l--; ) {
    const c = r[l];
    (ge.lessThan(c.x, s) || ge.lessThan(c.y, n) || ge.greaterThan(c.x, a) || ge.greaterThan(c.y, o) || c.x < 0 || c.y < 0) && i.remove(c.x, c.y);
  }
}
function Ph(t, e, i = null) {
  const s = /* @__PURE__ */ new Map();
  for (let n = t.length; n--; ) {
    const a = t[n], o = il(a, e.getStock), r = a.shortSide, l = a.longSide;
    o.forEach((c) => {
      if (!a.willItFit(e, c)) return;
      let u;
      !i || i === "l" ? u = c === 0 ? l : r : i === "w" && (u = c === 0 ? r : l), u && s.set(
        u,
        s.has(u) ? s.get(u) + 1 : 1
      );
    });
  }
  return s;
}
function _a(t, e) {
  if (t?.length)
    for (let i = t.length; i--; ) {
      const s = t[i];
      Ch(
        s,
        e
      );
    }
}
function Ch(t, e) {
  if (!t.isSquare) {
    if (t.shortSide === e.w && t.rot) {
      if (!bt(
        t,
        0,
        e
      ))
        throw new Error(
          "could not rotate shape correctly for subset calculation"
        );
    } else if (!e.isSquare && t.longSide === e.w && !t.rot && !bt(
      t,
      1,
      e
    ))
      throw new Error(
        "could not rotate shape correctly for subset calculation"
      );
  }
}
function C0(t, e, i = "l", s = null) {
  if (!t || !e?.length) return !1;
  e.forEach((u) => u.orientationLock = null), _a(
    e,
    t
  );
  const n = t.bladeWidth, a = [];
  let o = this.config.subset.shuffles;
  (e.length === 1 || e[0].parentId === e[e.length - 1].parentId) && (o = 1), i === "l" ? e.sort(
    ri.LD
  ) : e.sort(
    ri.WD
  ), s || (s = e[0]);
  function r(u, p = !0) {
    p && ri.shuffle(
      e
    );
    const d = $a(
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
  r(
    a,
    !1
  );
  for (let u = o; u--; ) r(
    a
  );
  if (a.sort(
    (u, p) => p.score.efficiency - u.score.efficiency
  ), !a.length) return !1;
  const l = a[0];
  let c = null;
  return l.totalLength + n < t.l && (c = t.l - (l.totalLength + n), l.offcut = c), l;
}
function Ah(t, e, i, s = "l", n, a = !1, o = this.config.subset.shuffles, r = null, l = this.config.subset.efficiency.limit) {
  if (!e?.length) return !1;
  const c = [], u = [
    (k, N) => N[s] - k[s],
    // Largest first
    (k, N) => k[s] - N[s],
    // Smallest first
    (k, N) => N[s] / N.area - k[s] / k.area,
    // Best dimension-to-area ratio
    (k, N) => N.area - k.area,
    // Largest area first
    (k, N) => k.area - N.area
    // Smallest area first
  ], p = e.every(
    (k, N, q) => N === 0 || k.isIdentical(q[N - 1])
  );
  if (!a) {
    const k = e.reduce((N, q) => N + q[s] + t, 0) - t;
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
        area: e.reduce((N, q) => N + q.area, 0)
      } : !1;
  }
  const d = $a(t, e, i, s, n, a, r);
  if (d !== !1 && (c.push(d), d.score.efficiency > 0.95 && e.length > 10))
    return d;
  if (p)
    return c[0] || !1;
  const h = Math.min(o, u.length);
  for (let k = 0; k < h; k++) {
    const N = [...e];
    N.sort(u[k % u.length]);
    const q = $a(t, N, i, s, n, a, r);
    if (q !== !1 && (c.push(q), q.score.efficiency > 0.98 && e.length > 30))
      break;
  }
  return c.sort((k, N) => N.score.efficiency - k.score.efficiency), c[0] || !1;
}
function $a(t, e, i, s = "l", n, a = !1, o = null) {
  if (!n || n <= 0 || e?.length < 1) return !1;
  let r = 0;
  const l = [];
  if (o || (o = e[0]), l.push(o), r = o[s], r > n) return !1;
  const c = e.findIndex(
    (u) => u.id === o?.id
  );
  c > -1 && e.splice(c, 1);
  for (const u of e) {
    const p = u[s], d = u.getMinSpacing(
      i.saw,
      !0
    );
    if (!(r + t + d + p > n) && (r += t + d + p, l.push(u), r + t + d >= n))
      break;
  }
  if (o && e.splice(
    c,
    0,
    o
  ), !a && r <= n || a && r + t >= n && r <= n) {
    const u = r / n;
    return u > 1 && console.error(
      "subset created effieciency > 1"
    ), {
      type: "subset",
      totalLength: r,
      shapes: l,
      stock: i,
      cutType: "guillotine",
      score: { efficiency: u, totalShapesPlaced: l.length },
      firstShape: o,
      firstShapeRotation: o?.rot,
      area: l.reduce(
        (p, d) => p + d.area,
        0
      )
    };
  }
  return !1;
}
function Th(t, e, i = null, s = "l", n = !0, a = !0) {
  if (!t?.length) return;
  if (!e) throw new Error(
    "positionShapes requires stock"
  );
  const o = s === "l" ? "x" : "y", r = s === "l" ? "y" : "x";
  let l = 0;
  st(i) ? _a(
    t,
    i
  ) : _a(
    t,
    i ?? e
  ), a && (s === "l" ? t.sort(
    ri.LDIDA
  ) : t.sort(
    ri.WDIDA
  )), t.forEach(
    (c, u) => {
      c[o] = i ? i[o] + l : l, i && (c[r] = i[r]), l += c[o === "x" ? "l" : "w"] + e.bladeWidth + c.getMinSpacing(e.saw, !0), Pt(
        [() => at(
          l
        ).to.be.a(
          "number"
        )]
      ), st(i) ? c.group.placementOrder = u : c.placementOrder = u, n && c.addToStock(e);
    }
  );
}
function A0(t = null, e, i, s = "l") {
  if (!e) return [];
  if (!t) return [];
  i.sort(
    ri.ID
  );
  const n = t.shapes;
  return Th(
    n,
    e,
    null,
    s
  ), n;
}
function T0(t, e, i) {
  xn("subset", `guillotine subset for segment ${t.id}`);
  function s(F, B = []) {
    const { shapes: _ } = a(F);
    return _.filter((L) => {
      if (L.added || B.find((E) => E.id === L.id)) return !1;
      if (L.orientationLock)
        return ge.equalTo(L[u], F) ? ge.lessThanOrEqualTo(L.l, t.l) && ge.lessThanOrEqualTo(L.w, t.w) : !1;
      if (ge.equalTo(L.l, F) || ge.equalTo(L.w, F)) {
        const E = ge.equalTo(L.l, F) ? L.w : L.l;
        return ge.lessThanOrEqualTo(E, t[t.cutPreference]);
      }
      return !1;
    });
  }
  function n(F, B, _, L = null) {
    let E = s(
      F,
      B
    );
    if (L) {
      const se = E.find(
        (oe) => oe.parentId === L.parentId
      );
      if (se) return se;
    }
    if (!E.length) return !1;
    const w = [];
    for (const se of E) {
      const oe = se.l === F ? se.w : se.l;
      _.includes(oe) && w.push(se);
    }
    return E = w.length ? w : E, rl(E);
  }
  function a(F) {
    const B = F;
    return W.has(B) || W.set(B, { shapes: [], priorities: [] }), W.get(B);
  }
  function o(F = null) {
    function B(L, E, w) {
      const { shapes: X, priorities: se } = a(E);
      X.includes(L) || (X.push(L), se.push(w));
    }
    if (!h?.length) return W;
    const _ = t.getStock;
    for (const L of h) {
      let E = L.getPriority(_);
      F && L.parentId !== F.parentId && (E = 0);
      const w = bi(u);
      if (!L.orientationLock)
        L.longSide <= d && L.shortSide <= t[w] && B(L, L.l, E), !L.isSquare && L.shortSide <= d && L.longSide <= t[w] && B(L, L.w, E);
      else {
        const X = il(
          L,
          t.getStock
        );
        if (Pt([() => at(X.length).to.equal(1)]), bt(
          L,
          X[0],
          t.getStock
        ) === !1)
          throw new Error(
            "could not rotate shape correctly for subset calculation"
          );
        const oe = bi(u);
        L[u] <= d && L[oe] <= t[oe] && B(L, L[u], E);
      }
    }
    return W;
  }
  function r() {
    const F = [], B = Array.from(W.entries()).map(([L, { shapes: E, priorities: w }]) => ({
      dimension: L,
      count: E.length,
      totalPriority: E.length * Math.max(...w, 0)
    }));
    let _ = B.reduce((L, { totalPriority: E }) => L + E, 0);
    for (; B.length > 0; )
      if (_ <= 0 || !Number.isFinite(_)) {
        const L = [];
        B.forEach(({ dimension: E, count: w }) => {
          L.push(...Array(w).fill(E));
        });
        for (let E = L.length - 1; E > 0; E--) {
          const w = Math.floor(Math.random() * (E + 1));
          [L[E], L[w]] = [L[w], L[E]];
        }
        F.push(...L);
        break;
      } else {
        const L = Math.random() * _;
        let E = 0, w = -1;
        for (let pe = 0; pe < B.length; pe++)
          if (E += B[pe].totalPriority, E > L) {
            w = pe;
            break;
          }
        w === -1 && (w = Math.floor(Math.random() * B.length));
        const { dimension: X, count: se, totalPriority: oe } = B[w];
        F.push(X), B[w].count--, B[w].totalPriority -= oe / se, B[w].count === 0 ? (_ -= oe, B.splice(w, 1)) : _ -= oe / se;
      }
    return F;
  }
  function l(F, B, _, L, E, w, X) {
    return _ += F + B, L.push(F), E.push(
      w.l === F ? w.w : w.l
    ), X.push(w), _;
  }
  function c(F = null) {
    if (!h?.length) return [];
    if (!W.size) return [];
    const B = /* @__PURE__ */ new Map();
    let _ = 0;
    const L = [], E = [], w = [];
    let X = null, se = !0;
    for (let M = 0; M < this.config.subset.guillotine.shuffles; M++) {
      _ = 0, L.length = 0, E.length = 0, w.length = 0, X = null, se = !0;
      const U = r();
      for (const ne of U) {
        if (se ? X = ne : X = p + ne, _ + X > d) continue;
        const ae = n(
          ne,
          E,
          w,
          F
        );
        ae && (_ = l(
          ne,
          se ? 0 : p,
          _,
          L,
          w,
          ae,
          E
        ), se = !1);
      }
      if (_) {
        const ne = _ / d;
        if (Pt([() => at(ne).to.lessThanOrEqual(1)]), ne < this.config.subset.efficiency.limit) continue;
        const ae = E.map((ke, Ae) => Ae);
        ae.sort((ke, Ae) => w[Ae] !== w[ke] ? w[Ae] - w[ke] : L[Ae] - L[ke]);
        const ce = ae.map(
          (ke) => L[ke]
        ), me = ae.map(
          (ke) => E[ke]
        );
        Pt([
          () => at(uh(me)).to.be.false
        ]), B.set(
          ce.join("-"),
          {
            usedDimensions: ce,
            usedShapes: me,
            efficiency: ne,
            target: d,
            totalLength: _,
            priorityShape: F ? F.parentId : null
          }
        );
      }
    }
    if (B.size === 0) return [];
    const oe = Array.from(
      B.values()
    );
    oe.sort(
      (M, U) => M.efficiency > U.efficiency ? -1 : M.efficiency < U.efficiency ? 1 : M.efficiency === U.efficiency ? U.usedDimensions.length - M.usedDimensions.length : 0
    );
    const pe = oe.slice(
      0,
      20
    );
    if (!pe.length) return [];
    const Q = pe.slice(
      0,
      typeof this.config.guillotine.stripShapes.iterations == "number" ? this.config.guillotine.stripShapes.iterations : 1
    );
    return Q.length ? (Q.forEach(
      (M) => {
        M.usedShapes.forEach(
          (U, ne) => {
            const ae = M.usedDimensions[ne];
            Pt([() => at([U.l, U.w].includes(ae)).to.be.true]);
            let ce;
            U.isSquare ? ce = 0 : U.longSide === ae ? ce = t.getStock.cutPreference === "l" ? 1 : 0 : ce = t.getStock.cutPreference === "l" ? 0 : 1, U.guillotineState || (U.guillotineState = new di({})), U.guillotineState.setStripShapeBatchGroup(H, {
              stockId: t.getStock.autoId,
              dimension: ae,
              rot: ce,
              order: ne,
              //by this point sorting should have taken place
              priorityShape: M.priorityShape
            });
          }
        ), H++, Pt(
          [
            () => {
              const U = M.usedDimensions.reduce(
                (ce, me) => ce + me,
                0
              ), ne = (M.usedDimensions.length - 1) * p, ae = U + ne;
              return at(ge.lessThanOrEqualTo(ae, d)).to.be.true;
            },
            () => at(
              Q.every((U) => U.efficiency >= this.config.subset.efficiency.limit)
            ).to.be.true,
            () => at(
              Q.every(
                (U) => U.usedDimensions.length === U.usedShapes.length
              )
            ).to.be.true
          ]
        );
      }
    ), Q) : [];
  }
  const u = bi(t.cutPreference), p = t.getStock.bladeWidth, d = t[u];
  Pt([() => at(d).to.be.a("number")]);
  const h = ah(
    t.shapes.filter((F) => !st(F)),
    e,
    i
  ), k = t.getStock, N = t.cutPreference, q = k[N], O = this.config.guillotine.firstShapeFullSizeThreshold;
  h.sort((F, B) => {
    const _ = F[N] >= O * q, L = B[N] >= O * q;
    if (_ && !L) return -1;
    if (L && !_) return 1;
    const E = B.getPriority(k) - F.getPriority(k);
    if (E !== 0) return E;
    const w = F.id.toString().split("."), X = B.id.toString().split(".");
    return w[0] !== X[0] ? parseInt(w[0]) - parseInt(X[0]) : parseInt(w[1]) - parseInt(X[1]);
  });
  const G = [];
  let H = 0;
  const W = /* @__PURE__ */ new Map();
  if (!this.config.priority.enable || t.type !== "root" || !t.shapes[0].getPriority(k)) {
    o();
    const F = c.call(this);
    G.push(...F);
  } else {
    const F = t.shapes[0];
    o(F);
    const B = Math.min(t.shapes.length, this.config.guillotine.stripShapes.numPriorityShapes);
    for (let _ = 0; _ < B; _++) {
      const L = c.call(this, F);
      G.push(...L);
    }
  }
  return xn("subset", `${G.length} strip shape results ${G.map((F) => F.usedShapes.map((B) => B.id).join()).join(" | ")}`), G?.length ? G.length : 0;
}
function Oh(t) {
  const e = {};
  return t.forEach((i) => {
    i.shapeIds.forEach((s) => {
      const n = i.q || 1;
      e[s] ? e[s] += n : e[s] = n;
    });
  }), e;
}
function Lh(t, e, i = !0) {
  const s = Oh(t), n = [];
  for (const a in s) {
    const o = s[a], r = e.findIndex((u) => u.autoId === a), l = e[r], c = ol({
      item: null,
      // No specific item context for this validation
      index: r >= 0 ? r : 0,
      shapeId: a,
      requiredQuantity: o,
      availableQuantity: Number(l?.q ?? 0),
      shapeName: l?.name,
      shapeIndex: r >= 0 ? r : void 0
    });
    n.push(...c);
  }
  return i && t.forEach((a) => {
    const o = a.validateWithShapes(e);
    o?.length && n.push(...o);
  }), n;
}
function xl(t) {
  const {
    shapes: e,
    container: i,
    targetSize: s,
    d: n,
    id: a,
    exact: o,
    groupDirection: r = "horizontal",
    firstShape: l = null,
    iterations: c,
    type: u = "position",
    tolerance: p = 1e-3,
    config: d
  } = t, h = c ?? d?.subset?.shuffles ?? 10;
  Pt([
    () => at(s).to.be.greaterThan(0)
  ]);
  const k = _h(e, r, n, i, p);
  if (k.length < 2) return !1;
  const N = { config: d }, q = Ah.call(
    N,
    i.bladeWidth,
    k,
    i.getStock,
    Fh(r),
    s,
    o,
    h,
    l
  );
  if (!q) return !1;
  if (q?.shapes?.length > 1 && q?.totalLength) {
    let O;
    try {
      O = new Gn({
        id: a,
        direction: r,
        shapes: q.shapes,
        container: i,
        type: u
      }), xn("groups", `[createGroup] Created group ${O.id} direction=${r} dims=${O.l}x${O.w} with ${O.shapes.length} shapes, [${O.shapes.map((G) => G.id).join()} for ${i.getType()} ${i.id}]`);
    } catch (G) {
      return console.error("group error", G), !1;
    }
    return O;
  }
  return !1;
}
function O0(t) {
  const {
    shapes: e,
    container: i,
    targetSize: s,
    exact: n = !1,
    direction: a = "l",
    firstShape: o = null,
    preventDuplicates: r = !1,
    tolerance: l,
    maxGroups: c,
    config: u,
    counters: p,
    type: d
  } = t, h = l ?? u?.groups?.tolerance ?? 0.05;
  if (!$e(s))
    throw new Error("attempting to create a group with no target size");
  if (s <= 0)
    return console.warn(`Invalid targetSize ${s} - cannot create groups with zero or negative target size`), [];
  if (!$e(i))
    throw new Error("attempting to create a group with no container");
  if (!e?.length || e.length < 2) return [];
  const k = Il(a), N = bi(a), q = k === "horizontal" ? i.w : i.l, O = i.getStock;
  let G = [...e], H = o;
  if (H)
    if (lp(
      H,
      H[N],
      N,
      O
    ) === !1)
      H = null;
    else {
      const se = H[N], oe = se * (1 - h);
      let pe = se * (1 + h);
      pe > i[N] && (pe = i[N]), G = e.filter((Q) => !gt(Q) || Q.autoId === H.autoId ? !1 : Fo(
        Q,
        oe,
        pe,
        N,
        O
      ));
    }
  const W = Ph(
    G,
    i,
    N
  ), F = Array.from(W.keys()).filter((X) => X <= q).sort((X, se) => se - X);
  if (F.length === 0) return [];
  const B = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
  for (const X of G) {
    const se = /* @__PURE__ */ new Map();
    for (const oe of F) {
      const pe = oe * (1 - h);
      let Q = oe * (1 + h);
      Q > i[N] && (Q = i[N]);
      const M = Fo(
        X,
        pe,
        Q,
        N,
        O
      );
      se.set(oe, M);
    }
    _.set(X.autoId, se);
  }
  for (const X of F) {
    const se = [];
    for (const oe of G) {
      if (!gt(oe)) continue;
      _.get(oe.autoId)?.get(X) && se.push(oe);
    }
    B.set(X, se);
  }
  const L = [], E = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Map();
  for (const X of F) {
    if (c !== void 0 && L.length >= c)
      break;
    const se = [];
    let oe = B.get(X).filter((pe) => !E.has(pe.autoId));
    if (!(oe.length < 2)) {
      for (; oe.length >= 2 && !(c !== void 0 && L.length + se.length >= c); ) {
        let pe, Q = !1;
        if (se.length && !r) {
          const M = se[se.length - 1], U = M.shapes.slice(), ne = /* @__PURE__ */ new Set(), ae = new Set(oe.map((ke) => ke.autoId)), ce = [];
          let me = !0;
          for (const ke of U) {
            let Ae = !1;
            if (ae.has(ke.autoId) && !ne.has(ke.autoId)) {
              const je = oe.find((ye) => ye.autoId === ke.autoId);
              je && (ce.push(je), ne.add(ke.autoId), Ae = !0);
            }
            if (!Ae)
              for (const je of oe) {
                if (ne.has(je.autoId)) continue;
                const ye = `${je.autoId}-${ke.autoId}`;
                if (w.has(ye) || w.set(ye, je.isIdentical(ke)), w.get(ye)) {
                  ce.push(je), ne.add(je.autoId), Ae = !0;
                  break;
                }
              }
            if (!Ae) {
              me = !1;
              break;
            }
          }
          if (me && ce.length === U.length) {
            if (Q = !0, M.positions?.length === ce.length)
              for (let ke = 0; ke < ce.length; ke++) {
                const Ae = ce[ke], je = U[ke], ye = M.positions[ke]?.rot ?? je.rot;
                if (Ae.rot !== ye && !bt(Ae, ye, i)) {
                  console.warn(`  Failed to rotate ${Ae.id} to ${ye} - skipping clone`), Q = !1;
                  break;
                }
              }
            Q && (Pt([
              () => at(ce.every((ke, Ae) => {
                const je = M.positions[Ae]?.rot ?? U[Ae].rot;
                return ke.rot === je;
              }), "at least one identical group shape not rotated correctly").to.be.true
            ]), pe = M.cloneWithNewShapes(ce));
          }
        }
        if (!Q) {
          let M = "g" + (typeof p?.group == "number" ? p.group : 0);
          d === "firstShape" && (M = "fs-" + M), pe = xl({
            shapes: oe,
            container: i,
            targetSize: s,
            d: X,
            id: M,
            exact: n,
            groupDirection: k,
            firstShape: H,
            tolerance: h,
            config: u,
            type: d
          });
        }
        if (pe) {
          typeof p?.group == "number" && p.group++, se.push(pe), pe.shapes.forEach((U) => E.add(U.autoId));
          const M = [];
          for (const U of oe)
            E.has(U.autoId) || M.push(U);
          if (oe = M, oe.length < 2) break;
        } else
          break;
      }
      L.push(...se);
    }
  }
  return L;
}
function _h(t, e, i, s, n = 1e-3) {
  return t.filter((a) => {
    const o = yn(a, s);
    if (o) {
      const d = o === "w" ? 1 : 0;
      if (a.rot !== d && !bt(a, d, s))
        return !1;
    }
    if (a.isSquare) return !0;
    const r = i * (1 - n), l = i * (1 + n), c = a.l >= r && a.l <= l, u = a.w >= r && a.w <= l;
    let p = null;
    if (c && u) {
      const d = Math.abs(a.l - i), h = Math.abs(a.w - i);
      p = d <= h ? "l" : "w";
    } else c ? p = "l" : u && (p = "w");
    if (p !== null) {
      const d = $h(
        p,
        e,
        a.rot
      ), h = yn(a, s), k = d ? 1 : 0;
      return h && (h === "l" && k === 1 || h === "w" && k === 0) || !Et(a, d, s) ? !1 : bt(a, d, s);
    }
    return !1;
  });
}
function $h(t, e, i) {
  return e === null ? t === "l" : t === (e === "vertical" ? "l" : "w") ? i === 1 : i === 0;
}
function Il(t) {
  if (!["l", "w"].includes(t)) throw new Error("incorrect direction value");
  if (t === "l") return "horizontal";
  if (t === "w") return "vertical";
}
function Fh(t) {
  if (!["horizontal", "vertical"].includes(t)) throw new Error("incorrect groupDirection value");
  if (t === "horizontal") return "l";
  if (t === "vertical") return "w";
}
function Dh(t, e, i) {
  return t.filter((s) => s.l === e[i] || s.w === e[i]);
}
function Eh(t, e) {
  const i = Array.isArray(e) ? e : [e], s = /* @__PURE__ */ new Set();
  for (const n of i)
    if (n.shapes?.length)
      for (const a of n.shapes)
        s.add(a.autoId);
  return t.filter((n) => st(n) || !s.has(n.autoId));
}
function Mh(t, e = "") {
  const i = /* @__PURE__ */ new Set();
  t.filter(st).forEach((o) => {
    o.shapes?.forEach((r) => {
      i.add(r.autoId);
    });
  });
  const n = t.filter((o) => gt(o)).filter((o) => i.has(o.autoId)), a = e ? ` [${e}]` : "";
  at(
    n.length,
    `${a} Found ${n.length} shapes that exist both in groups and independently: ${n.map((o) => o.id || o.autoId).join(", ")}`
  ).to.equal(0);
}
function Rh(t, e) {
  const i = [...t, e];
  i.sort((n, a) => (a.score?.total || 0) - (n.score?.total || 0));
  const s = i[0];
  if (s.score?.total && st(s) && (s.score?.total ?? 0) > (e.bestScore?.total ?? 0))
    return e.setBestScore(s), e.bestScore.group = s, s;
}
function L0(t) {
  const { container: e, containerPlacedShapes: i, unplacedShapes: s, shape: n, point: a, config: o, scoreFunction: r } = t;
  if (s.length < 3) return;
  let l = !1;
  n.orientationLock || (l = !0, n.orientationLock = n.rot === 1 ? "w" : "l");
  let c = [], u = [];
  ss(e) ? u = [e.cutDirection] : u = e?.saw?.stockType === "roll" ? ["w"] : ["l", "w"];
  for (const h of u) {
    const k = bi(h), N = h === "l" ? "x" : "y", q = e[h] - n[N] - e.bladeWidth;
    if (q <= 0) continue;
    const O = Dh(
      s,
      n,
      k
    );
    if (O.length < 2) continue;
    const G = xl({
      shapes: O,
      container: e,
      targetSize: q,
      d: n[k],
      id: "g" + n.id + "-" + n.rot + "-" + h.substring(0, 1),
      exact: !1,
      groupDirection: Il(h),
      firstShape: n,
      iterations: 40,
      config: {
        subset: o.subset
      }
    });
    G && c.push(G);
  }
  c.sort((h, k) => k.efficiency - h.efficiency), c.length > o.sample.groupSize && (c = c.slice(0, o.sample.groupSize)), Pt([() => c.every((h) => !gt(h), "shapes in the groups array")]);
  for (const h of c)
    h.x = a.x, h.y = a.y, h.outOfBounds = h.x + h.l > e.l || h.y + h.w > e.w, !h.outOfBounds && (ph(h, i, e) || r(h, e, i, s, a));
  s.forEach((h) => h.resetGroupData());
  const p = Rh(c, n), d = c.filter((h) => st(h) && h !== p);
  return d.length > 0 && d.forEach((h) => {
    xn("groups", `  Destroying group ${h.id} (${h.shapes?.length || 0} shapes)`), h.destroy();
  }), p && ss(e) && (e.shapes.push(p), e.shapes = Eh(e.shapes, p)), l && (n.orientationLock = null), p && ss(e) && Pt([
    () => Mh(e.shapes, "POSITION GROUPS")
  ]), p;
}
const jh = j({
  id: m(),
  count: f(),
  name: m(),
  l: f(),
  w: f(),
  t: f(),
  material: m()
}), to = j({
  inputStock: ee(Ht),
  inputShapes: ee(yi),
  inputSaw: mi,
  inputUserGroups: ee(Vn),
  // Centralized extras options for UI dropdowns
  extrasOptions: j({
    banding: j({
      options: ee(m())
    }).optional(),
    finish: j({
      options: ee(m())
    }).optional(),
    planing: j({
      options: ee(m())
    }).optional()
  }).optional()
}).optional(), Pl = j({
  // Banding metrics
  bandingLengthByType: ve(m(), f()).default({}),
  // Finish metrics (by face)
  finishAreaByType: ve(m(), f()).default({}),
  // Planing metrics (by type)
  planingAreaByType: ve(m(), f()).default({}),
  // Material summary with nested structure
  materialSummary: ve(
    m(),
    // material name
    ve(
      m(),
      // thickness
      j({
        used: f(),
        stacks: f(),
        bandingLengthByType: ve(m(), f())
      })
    )
  ).default({}),
  // Tallies
  usedStockTally: ve(m(), f()).default({}),
  addedPartTally: ve(m(), f()).default({}),
  // Cost metrics
  stockAreaCost: f().default(0),
  totalStockCost: f().default(0),
  // Machining metrics
  hasMachining: z().default(!1),
  numHoles: f().default(0),
  numCorners: f().default(0),
  // Efficiency metrics
  totalBandingLength: f().default(0),
  totalFinishArea: f().default(0),
  totalPlaningArea: f().default(0),
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
}), qn = Pl.extend({
  bandingLengthByType: ve(m(), f()).default({}),
  unplacedParts: ee(jh).default([]),
  // Ecommerce pricing - calculated client-side
  offcutCost: f().optional()
}), Vh = j({
  // Core optimization results
  stockList: He("Stock"),
  shapeList: He("Shape"),
  cutList: He("Cut").optional(),
  segmentList: He("Segment").optional(),
  offcuts: He("Offcut").optional(),
  saw: De("Saw"),
  unusableShapes: He("Shape").optional(),
  unavailableStock: He("Stock").optional(),
  evolutionVisData: ee(j({})).optional(),
  performance: m().optional(),
  apiVersion: f().optional(),
  // Renamed from 'v'
  metadata: qn.optional(),
  credits: f().optional(),
  // Optional input data for debugging/API reporting
  inputs: to
});
j({
  // Job execution metadata
  success: z(),
  socketId: m().nullable().default(null),
  userId: m(),
  api: z(),
  app: z(),
  widget: z().optional(),
  cached: z().optional(),
  hash: m().optional(),
  webhook: m().optional(),
  config: we().optional(),
  error: m().optional(),
  jobId: f().optional(),
  // Input data
  inputs: to,
  // The actual optimization results
  optimisation: Vh
});
j({
  // Database metadata
  jobId: f().optional(),
  // Job execution data
  success: z(),
  socketId: m().nullable().default(null),
  userId: m(),
  api: z(),
  app: z(),
  widget: z().optional(),
  cached: z().optional(),
  hash: m().optional(),
  webhook: m().optional(),
  config: we().optional(),
  error: m().optional(),
  // Optimization results (flattened from optimization object)
  stockList: He("Stock"),
  shapeList: He("Shape"),
  cutList: He("Cut").optional(),
  segmentList: He("Segment").optional(),
  offcuts: He("Offcut").optional(),
  saw: De("Saw"),
  unusableShapes: He("Shape").optional(),
  unavailableStock: He("Stock").optional(),
  performance: m().optional(),
  metadata: qn.optional(),
  apiVersion: f().optional(),
  credits: f().optional(),
  // Input data
  inputs: to,
  // Computed fields for easier querying/display
  numParts: f().optional(),
  numStock: f().optional()
});
j({
  id: m().optional(),
  name: m().optional(),
  l: f(),
  w: f(),
  t: f().nullable().optional(),
  material: m().optional(),
  q: f().optional(),
  orientationLock: Se([
    xe(""),
    xe("l"),
    xe("w")
  ]).nullable().optional(),
  // Basic extras for display
  banding: we().optional(),
  finish: we().optional(),
  planing: we().optional()
});
const Bh = j({
  issues: ee(m()),
  id: m(),
  duplicate: z(),
  name: m(),
  added: z(),
  x: f(),
  y: f(),
  l: f(),
  w: f(),
  t: f(),
  q: f().optional(),
  // Add quantity for checkout compatibility
  orientationLock: Se([
    xe(""),
    xe("l"),
    xe("w")
  ]),
  trim: j({
    l1: f(),
    l2: f(),
    w1: f(),
    w2: f()
  }),
  material: m(),
  banding: we(),
  // Using any for now, could use bandingPropertiesSchema
  bandingType: we(),
  // Legacy field
  finish: we(),
  // Using any for now, could use finishPropertiesSchema
  stock: j({ id: m() }),
  rot: z(),
  notes: m(),
  customData: ve(m(), Se([m(), f(), z()]))
});
j({
  issues: ee(m()),
  id: m(),
  duplicate: z().optional(),
  name: m(),
  l: f(),
  w: f(),
  t: f().nullable(),
  material: m(),
  cost: f(),
  used: z(),
  grain: Se([
    xe(""),
    xe("l"),
    xe("w"),
    Si()
  ]).nullable(),
  trim: j({
    l1: f(),
    l2: f(),
    w1: f(),
    w2: f()
  }),
  parts: ee(Bh),
  efficiency: f(),
  notes: m().optional(),
  // Legacy V1 fields
  blade: j({
    width: f()
  }).optional(),
  cutPreference: Se([
    xe("l"),
    xe("w")
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
  stack: we().optional(),
  // Stock quantity for checkout compatibility
  q: f().optional()
});
const Nh = (t, e, i) => {
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
}, Gh = /* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-zhH28JpD.js"), "../translation/cs.json": () => import("./cs-CP0wPzyN.js"), "../translation/da.json": () => import("./da-BQCQ-7ua.js"), "../translation/de.json": () => import("./de-H0YKpC2a.js"), "../translation/el.json": () => import("./el-DdhnXsAE.js"), "../translation/en.json": () => import("./en-DMJXZxGS.js"), "../translation/es.json": () => import("./es-CjU-za1w.js"), "../translation/fi.json": () => import("./fi-CYRcg1_F.js"), "../translation/fr.json": () => import("./fr-DZJIQ9iy.js"), "../translation/hi.json": () => import("./hi-BiE5OvdL.js"), "../translation/hr.json": () => import("./hr-BdqwlHFo.js"), "../translation/hu.json": () => import("./hu-CUqkSk-h.js"), "../translation/id.json": () => import("./id-C7WZRnVO.js"), "../translation/it.json": () => import("./it-BMsi2irc.js"), "../translation/ja.json": () => import("./ja-BcIFOLZq.js"), "../translation/ko.json": () => import("./ko-D9Zng3zA.js"), "../translation/ms.json": () => import("./ms-sS2gxUAZ.js"), "../translation/nl.json": () => import("./nl-B32fDyGC.js"), "../translation/no.json": () => import("./no-DP7gL-Ze.js"), "../translation/pl.json": () => import("./pl-Eevw-6cL.js"), "../translation/pt.json": () => import("./pt-Dfhml-Z7.js"), "../translation/ro.json": () => import("./ro-DysnOeoG.js"), "../translation/ru.json": () => import("./ru-BrTmYkEB.js"), "../translation/sk.json": () => import("./sk-4FP_MY6E.js"), "../translation/sv.json": () => import("./sv-D35O8fTe.js"), "../translation/th.json": () => import("./th-DOwRhTRY.js"), "../translation/tr.json": () => import("./tr-B865MXcn.js"), "../translation/uk.json": () => import("./uk-Cr8E3_LL.js"), "../translation/vi.json": () => import("./vi-BpjQevj7.js"), "../translation/zh.json": () => import("./zh-BBqrRTOS.js") }), fs = Object.keys(Gh).map((t) => {
  const e = t.match(/\/([a-zA-Z0-9_-]+)\.json$/);
  return e ? e[1] : "";
}).filter((t) => t !== "");
fs.length === 0 && console.warn("[i18n] No language files found in ../translation/. Check paths and bundler setup for import.meta.glob.");
const Fa = "en", $t = ur.createInstance();
function R(t, e) {
  if (vr())
    return t;
  if (!$t.isInitialized) {
    const s = Array.isArray(t) ? t.join(", ") : String(t);
    return console.warn(`[i18n] t function called before i18next was initialized. Key: ${s}. Returning key.`), s;
  }
  let i = $t.t(t, e);
  return i = typeof i == "string" ? i : String(i), ls(i);
}
const Ys = {}, qh = {
  type: "backend",
  init: () => {
  },
  // The `namespace` parameter will now be ignored by your backend logic
  read: async (t, e, i) => {
    try {
      if (Ys[t]) {
        i(null, Ys[t]);
        return;
      }
      const s = await Nh(/* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-zhH28JpD.js"), "../translation/cs.json": () => import("./cs-CP0wPzyN.js"), "../translation/da.json": () => import("./da-BQCQ-7ua.js"), "../translation/de.json": () => import("./de-H0YKpC2a.js"), "../translation/el.json": () => import("./el-DdhnXsAE.js"), "../translation/en.json": () => import("./en-DMJXZxGS.js"), "../translation/es.json": () => import("./es-CjU-za1w.js"), "../translation/fi.json": () => import("./fi-CYRcg1_F.js"), "../translation/fr.json": () => import("./fr-DZJIQ9iy.js"), "../translation/hi.json": () => import("./hi-BiE5OvdL.js"), "../translation/hr.json": () => import("./hr-BdqwlHFo.js"), "../translation/hu.json": () => import("./hu-CUqkSk-h.js"), "../translation/id.json": () => import("./id-C7WZRnVO.js"), "../translation/it.json": () => import("./it-BMsi2irc.js"), "../translation/ja.json": () => import("./ja-BcIFOLZq.js"), "../translation/ko.json": () => import("./ko-D9Zng3zA.js"), "../translation/ms.json": () => import("./ms-sS2gxUAZ.js"), "../translation/nl.json": () => import("./nl-B32fDyGC.js"), "../translation/no.json": () => import("./no-DP7gL-Ze.js"), "../translation/pl.json": () => import("./pl-Eevw-6cL.js"), "../translation/pt.json": () => import("./pt-Dfhml-Z7.js"), "../translation/ro.json": () => import("./ro-DysnOeoG.js"), "../translation/ru.json": () => import("./ru-BrTmYkEB.js"), "../translation/sk.json": () => import("./sk-4FP_MY6E.js"), "../translation/sv.json": () => import("./sv-D35O8fTe.js"), "../translation/th.json": () => import("./th-DOwRhTRY.js"), "../translation/tr.json": () => import("./tr-B865MXcn.js"), "../translation/uk.json": () => import("./uk-Cr8E3_LL.js"), "../translation/vi.json": () => import("./vi-BpjQevj7.js"), "../translation/zh.json": () => import("./zh-BBqrRTOS.js") }), `../translation/${t}.json`, 3);
      Ys[t] = s.default, i(null, Ys[t]);
    } catch (s) {
      const n = `[i18n] Failed to load local resource module for language '${t}'. Error: ${s.message}`;
      console.warn(n, s), i(s, null);
    }
  }
};
async function zh() {
  return Od($t), await $t.use(Ec).use(qh).init({
    debug: !1,
    fallbackLng: Fa,
    supportedLngs: fs.length > 0 ? fs : [Fa],
    interpolation: {
      format: function(t, e) {
        return e === "c" ? Cd(t) : e === "sc" ? ls(t) : t;
      }
    },
    detection: {
      // Path first for URL-based language routing (e.g., /de/plans)
      order: ["path", "querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"],
      lookupFromPathIndex: 0
      // Look at first path segment for language
    }
  }), $t;
}
const Cl = zh().catch((t) => {
  console.error("[i18n] CRITICAL: Initialization failed.", t);
});
function Wh() {
  return $t.isInitialized;
}
const Uh = async (t) => {
  if (fs.length > 0 && !fs.includes(t))
    return console.warn(`[i18n] Attempted to change to unsupported language: ${t}. Current: ${$t.language}`), $t.language;
  $t.isInitialized || (console.warn("[i18n] changeLanguage called before initialization. Awaiting i18nextReady."), await Cl);
  try {
    return await $t.changeLanguage(t), console.log(`[i18n] Language changed to ${t}`), $t.language;
  } catch (e) {
    return console.error(`[i18n] Failed to change language to ${t}:`, e), $t.language;
  }
}, _0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, FALLBACK_LANGUAGE: Fa, SUPPORTED_LANGUAGES: fs, changeLanguage: Uh, i18nextInstance: $t, i18nextReady: Cl, isI18nInitialized: Wh, t: R }, Symbol.toStringTag, { value: "Module" })), Mt = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [s, n] of e)
    i[s] = n;
  return i;
};
function Hh(t, e = []) {
  if (!t?.length) return [];
  const i = t.map((s) => s && typeof s.getType == "function" ? s : eo(s)).filter((s) => s instanceof gl);
  return e.length && Yh(i, e), i;
}
function Yh(t = [], e = []) {
  t.length && e.length && t.forEach((i) => {
    i.shapeIds = i.shapeIds.filter((s) => e.find((n) => n.autoId === s));
  });
}
function No(t) {
  try {
    if (wr()) {
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
function Go(t) {
  try {
    if (wr())
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
function Al(t) {
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
function Kh(t) {
  return t.map((e) => {
    const i = e.path.length > 0 ? e.path.join(".") : "root", s = Al(e), n = Gr(e.message, s);
    return `[${i}] ${n}`;
  });
}
function vs(t, e) {
  const i = t.safeParse(e);
  return {
    success: i.success,
    data: i.success ? i.data : void 0,
    errors: i.success ? void 0 : i.error.issues
  };
}
function Zh(t = {}) {
  try {
    let e = function(P) {
      if (!P || typeof P != "object") return P;
      const C = { ...P };
      if (delete C.issues, delete C.warnings, C.trim && typeof C.trim == "object") {
        const I = C.trim;
        ("x1" in I || "x2" in I || "y1" in I || "y2" in I) && (C.trim = {
          l1: I.y1 ?? I.l1 ?? 0,
          l2: I.y2 ?? I.l2 ?? 0,
          w1: I.x1 ?? I.w1 ?? 0,
          w2: I.x2 ?? I.w2 ?? 0
        });
      }
      if (C.extras?.banding?.sides && typeof C.extras.banding.sides == "object") {
        const I = C.extras.banding.sides;
        ("x1" in I || "x2" in I || "y1" in I || "y2" in I) && (C.extras.banding.sides = {
          l1: I.y1 ?? I.l1,
          l2: I.y2 ?? I.l2,
          w1: I.x1 ?? I.w1,
          w2: I.x2 ?? I.w2
        });
      }
      if (C.extras?.finish?.sides && typeof C.extras.finish.sides == "object") {
        const I = C.extras.finish.sides;
        ("x1" in I || "x2" in I || "y1" in I || "y2" in I) && (C.extras.finish.sides = {
          l1: I.y1 ?? I.l1,
          l2: I.y2 ?? I.l2,
          w1: I.x1 ?? I.w1,
          w2: I.x2 ?? I.w2
        });
      }
      if (C.extras?.planing?.sides && typeof C.extras.planing.sides == "object") {
        const I = C.extras.planing.sides;
        ("x1" in I || "x2" in I || "y1" in I || "y2" in I) && (C.extras.planing.sides = {
          l1: I.y1 ?? I.l1,
          l2: I.y2 ?? I.l2,
          w1: I.x1 ?? I.w1,
          w2: I.x2 ?? I.w2
        });
      }
      if (C.efficiencyOptions?.primaryCompression) {
        const I = C.efficiencyOptions.primaryCompression;
        I === "x" ? C.efficiencyOptions = {
          ...C.efficiencyOptions,
          primaryCompression: "l"
        } : I === "y" && (C.efficiencyOptions = {
          ...C.efficiencyOptions,
          primaryCompression: "w"
        });
      }
      for (const I in C)
        C[I] === null && delete C[I];
      return C;
    }, i = function(P, C) {
      if (!Array.isArray(P))
        return [];
      const I = [];
      for (let D = 0; D < P.length; D++) {
        const Y = P[D], Ie = e(Y);
        try {
          const Oe = {
            ...Ie,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored shapes as new to avoid showing validation errors immediately
          };
          Y.autoId && (Oe.autoId = Y.autoId), delete Oe.issues, delete Oe.warnings;
          const Ge = new Ws(Oe, C);
          I.push(Ge);
        } catch (Oe) {
          console.error(`Failed to create InputShape at index ${D}:`, Oe);
        }
      }
      return I;
    }, s = function(P, C) {
      if (!Array.isArray(P)) return [];
      const I = [];
      for (let D = 0; D < P.length; D++) {
        const Y = P[D], Ie = e(Y);
        try {
          const Oe = {
            ...Ie,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored stock as new to avoid showing validation errors immediately
          };
          Y.autoId && (Oe.autoId = Y.autoId);
          const Ge = new Us(Oe, C);
          I.push(Ge);
        } catch (Oe) {
          console.error(`Failed to create InputStock at index ${D}:`, Oe);
        }
      }
      return I;
    }, n = function(P) {
      const C = e(P), I = vs(mi, C);
      if (I.success && I.data) {
        const D = {
          ...I.data,
          issues: [],
          warnings: []
        };
        return P?.autoId && (D.autoId = P.autoId), new fi(D);
      } else
        return console.error("Failed to parse input saw:", I.errors), new fi({});
    }, a = function(P, C) {
      return Array.isArray(P) ? C && C.length ? Hh(P, C) : P.map((I) => new gl(I)).filter(Boolean) : [];
    }, o = function(P = {}) {
      try {
        const D = { ...Ct(
          (Ie) => {
            if (typeof Ie != "object" || Ie === null) return Ie;
            const Oe = { ...Ie };
            for (const Ge in Oe)
              Oe[Ge] === null && delete Oe[Ge];
            return Oe;
          },
          yi
        ).parse(P), isNew: !0 }, Y = new Ws(D, se);
        return Y.createId(oe.value.length), oe.value.push(Y), Y;
      } catch (C) {
        return C instanceof es && (console.error("Shape validation failed:", C.issues), G("part", "Invalid shape data", C.issues)), null;
      }
    }, r = function(P = {}) {
      try {
        const I = { ...Ht.parse(P), isNew: !0 }, D = new Us(I, se);
        return D.createId(pe.value.length), pe.value.push(D), D;
      } catch (C) {
        return C instanceof es && (console.error("Stock validation failed:", C.issues), G("stock", "Invalid stock data", C.issues)), null;
      }
    }, l = function(P) {
      try {
        const C = P.toData(), I = yi.parse(C);
        return new Ws(I, se);
      } catch (C) {
        return C instanceof es && (console.error("Shape clone validation failed:", C.issues), G("part", "Invalid shape data during cloning", C.issues)), null;
      }
    }, c = function(P) {
      try {
        const C = P.toData(), I = Ht.parse(C);
        return new Us(I, se);
      } catch (C) {
        return C instanceof es && (console.error("Stock clone validation failed:", C.issues), G("stock", "Invalid stock data during cloning", C.issues)), null;
      }
    }, u = function(P, C) {
      const I = oe.value.find((Ie) => Ie.autoId === P);
      if (!I) return !1;
      const D = { ...I.toData(), ...C }, Y = vs(yi, D);
      if (Y.success && Y.data) {
        if (I.update(Y.data), !I.isNew) {
          const Ie = Object.keys(C);
          I.validate({ fields: Ie });
        }
        return !0;
      } else {
        const Ie = Y.errors ? Kh(Y.errors) : [];
        console.error("Shape update validation failed:", Ie);
        const Oe = Y.errors?.[0];
        if (Oe) {
          const Ge = Al(Oe);
          new he({
            category: ["part"],
            message: Oe.message,
            // This is the translation key from Zod error map
            params: Ge,
            issues: ne.value
          });
        } else
          G("part", "Invalid shape update");
        return !1;
      }
    }, p = function(P, C) {
      const I = oe.value.findIndex((Y) => Y.autoId === P);
      if (I === -1) return !1;
      const D = oe.value[I];
      return D.validate({ fields: [C] }), D.issues.length === 0;
    }, d = function(P, C) {
      const I = pe.value.find((Ie) => Ie.autoId === P);
      if (!I) return !1;
      const D = { ...I.toData(), ...C }, Y = vs(Ht, D);
      return Y.success && Y.data ? (I.update(Y.data), I.isNew || O(), !0) : (console.error("Stock update validation failed:", Y.errors), G("stock", "Invalid stock update", Y.errors), !1);
    }, h = function(P, C) {
      const I = pe.value.findIndex((Y) => Y.autoId === P);
      if (I === -1) return !1;
      const D = pe.value[I];
      return D.validate({ fields: [C] }), ia(pe), D.issues.length === 0;
    }, k = function(P) {
      if (oe.value.length === 1) return !1;
      const C = oe.value.findIndex((I) => I.autoId === P);
      return C === -1 ? !1 : (oe.value.splice(C, 1), !0);
    }, N = function(P) {
      if (pe.value.length === 1) return !1;
      const C = pe.value.findIndex((I) => I.autoId === P);
      return C === -1 ? !1 : (pe.value.splice(C, 1), !0);
    }, q = function(P) {
      ae.value = !0;
      const C = [];
      try {
        oe.value.forEach((I) => I.issues = []);
        for (let I = 0; I < oe.value.length; I++) {
          const D = oe.value[I];
          if (D.isNew)
            continue;
          const Y = D.validate({
            inputStockList: pe.value,
            index: I,
            stockType: P?.stockType ?? null,
            partTrim: 0,
            useInventory: !1,
            saw: P
          });
          C.push(...Y);
        }
        oe.value.some((I) => Number(I.q) > 0) || new he({
          category: ["part"],
          message: "errors.validation.no_parts",
          issues: C
        });
      } finally {
        ae.value = !1;
      }
      return ne.value = C, C;
    }, O = function(P) {
      ae.value = !0;
      const C = [];
      try {
        pe.value.forEach((I) => I.issues = []);
        for (let I = 0; I < pe.value.length; I++) {
          const Y = pe.value[I].validate({ saw: P }, I);
          C.push(...Y);
        }
        pe.value.some((I) => Number(I.q) > 0 || I.autoAdd) || new he({
          category: ["stock"],
          message: "errors.validation.no_stock",
          issues: C
        });
      } finally {
        ae.value = !1;
      }
      return ne.value = C, C;
    }, G = function(P, C, I) {
      new he({
        category: [P],
        message: C,
        issues: ne.value
      }), I && console.log("Validation details:", I);
    }, H = function() {
      ne.value = [], oe.value.forEach((P) => P.issues = []), pe.value.forEach((P) => P.issues = []);
    }, W = function(P = {}) {
      const C = [], I = [], D = P.inputShapesOverride ?? oe.value;
      if (!D.length)
        return { shapeList: [], issues: [] };
      for (let Y = 0; Y < D.length; Y++) {
        const Ie = D[Y];
        if (!Ie.q) continue;
        Ie.createId(Y), Ie.applyPartTrim(P.trim, P.stockType);
        const Oe = Ie.toShape();
        C.push(Oe), I.push(...Oe.issues);
      }
      return { shapeList: C, issues: I };
    }, F = function(P) {
      if (!pe.value.length)
        return { stockList: [], issues: [] };
      const C = [], I = [];
      for (let D = 0; D < pe.value.length; D++) {
        const Y = pe.value[D];
        if (!Y.q && !Y.autoAdd) continue;
        Y.createId(D), Y.saw = P;
        const Ie = Y.toStock();
        C.push(Ie), I.push(...Ie.issues);
      }
      return { stockList: C, issues: I };
    }, B = function(P, C = se) {
      const I = {
        saw: { success: !1, failed: !1 },
        shapes: { success: 0, failed: 0 },
        stock: { success: 0, failed: 0 },
        groups: { success: 0, failed: 0 }
      };
      if (P.saw) {
        const D = vs(mi, e(P.saw));
        if (D.success && D.data) {
          const Y = { ...D.data };
          P.saw?.autoId && (Y.autoId = P.saw.autoId), Q.value = new fi(Y), I.saw.success = !0;
        } else
          console.error("Failed to parse input saw:", D.errors), I.saw.failed = !0;
      }
      if (P.shapes) {
        const D = i(P.shapes, C);
        I.shapes.success = D.length, I.shapes.failed = P.shapes.length - D.length, oe.value = D;
      }
      if (P.stock) {
        const D = s(P.stock, C);
        I.stock.success = D.length, I.stock.failed = P.stock.length - D.length, pe.value = D;
      }
      if (P.groups) {
        const D = a(P.groups);
        I.groups.success = D.length, I.groups.failed = P.groups.length - D.length, M.value = D;
      }
      return P.extrasOptions && (U.value = { ...P.extrasOptions }), I;
    }, _ = function() {
      return {
        shapes: oe.value.map((P) => P.toData()),
        stock: pe.value.map((P) => P.toData()),
        inputUserGroups: M.value.map((P) => P.toData()),
        extrasOptions: U.value
      };
    }, L = function() {
      oe.value = [], pe.value = [], M.value = [], H();
    }, E = function(P) {
      const C = { ...Q.value.toData(), ...P }, I = vs(mi, C);
      return I.success && I.data ? (Q.value.update(I.data), !0) : (console.error("InputSaw update validation failed:", I.errors), G("saw", "Invalid saw update", I.errors), !1);
    }, w = function() {
      Q.value = new fi({});
    }, X = function() {
      const P = Q.value.validate();
      return ne.value = [...ne.value.filter((C) => C.category?.[0] !== "saw"), ...P], P;
    };
    const { numberFormat: se = "decimal" } = t, oe = ms("inputs/inputShapes", [], {
      serializer: {
        read: (P) => {
          if (!P) {
            const D = "GlobalStore/inputShapes", Y = No(D);
            if (Y)
              P = Y, Go(D);
            else return [];
          }
          let C;
          try {
            C = JSON.parse(P);
          } catch (D) {
            return console.error("Failed to parse input shapes JSON:", D), [];
          }
          return i(C, se);
        },
        write: (P) => {
          const I = P.filter((Y) => !Y?.multiEdit).map((Y) => Y.toData());
          return JSON.stringify(I);
        }
      },
      listenToStorageChanges: !1
    }), pe = ms("inputs/inputStock", [], {
      serializer: {
        read: (P) => {
          if (!P) return [];
          let C;
          try {
            C = JSON.parse(P);
          } catch (D) {
            return console.error("  Failed to parse stock JSON:", D), [];
          }
          return s(C, se);
        },
        write: (P) => {
          const I = P.filter((Y) => !Y?.multiEdit).map((Y) => Y.toData());
          return JSON.stringify(I);
        }
      },
      listenToStorageChanges: !1
    }), Q = ms("inputs/inputSaw", new fi({}), {
      serializer: {
        read: (P) => {
          if (!P) {
            const I = No("saw");
            if (I)
              P = I, Go("saw");
            else return new fi({});
          }
          try {
            const C = JSON.parse(P);
            return n(C);
          } catch (C) {
            return console.error("  Failed to parse saw JSON:", C), new fi({});
          }
        },
        write: (P) => {
          if (!P)
            return JSON.stringify({});
          const C = P.toData();
          return JSON.stringify(C);
        }
      },
      listenToStorageChanges: !1
    }), M = ms("inputs/inputUserGroups", [], {
      serializer: {
        read: (P) => a(P ? JSON.parse(P) : []),
        write: (P) => JSON.stringify(P.map((C) => C.toData()))
      }
    }), U = ms("inputs/extrasOptions", {
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
    }), ne = le([]), ae = le(!1);
    oe.value.length === 0 && (oe.value = [new Ws({ isNew: !0 })]), pe.value.length === 0 && (pe.value = [new Us({ isNew: !0 })]);
    const ce = ie(() => oe.value.reduce((P, C) => {
      const I = Number(C?.q);
      return I && I > 0 && !C?.multiEdit ? P + I : P;
    }, 0)), me = ie(() => pe.value.reduce((P, C) => {
      const I = Number(C?.q);
      return I && I > 0 && !C?.multiEdit ? P + I : P;
    }, 0)), ke = ie(() => oe.value.reduce((P, C) => C?.multiEdit ? P : P + 1, 0)), Ae = ie(() => pe.value.reduce((P, C) => C?.multiEdit ? P : P + 1, 0)), je = ie(() => ne.value.length > 0), ye = () => [
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
    ], _e = le(null), J = le(null), Qe = () => {
      _e.value = null;
    }, Ze = H, ot = (P = null) => {
      const C = P?.inputShapesOverride ?? oe.value, I = q(P?.saw || void 0);
      if (C.length) {
        ll(C, pe.value, P?.saw || Q.value);
        const D = C.flatMap((Y) => Y.issues);
        return [...I, ...D];
      }
      return I;
    }, rt = async (P, C = "decimal") => {
      const I = P?.inputSaw, D = P?.inputShapes, Y = P?.inputStock, Ie = P?.inputUserGroups, Oe = B({
        saw: I,
        shapes: D,
        stock: Y,
        groups: Ie
      }, C);
      return ia(oe), ia(pe), await It(), Oe;
    }, re = (P, C = "decimal") => B({ shapes: P }, C).shapes.success > 0, et = (P, C = "decimal") => B({ stock: P }, C).stock.success > 0, lt = (P, C, I, D) => {
      C[0]?.length > 0 && (U.value[P] || (U.value[P] = { options: [] }), U.value[P].options = [...C[0]]), I && D && C.length > 0 ? So(P, {
        options: C,
        // Use all columns extracted from pricing
        labels: I,
        pricing: D
      }) : console.warn("[setExtrasOptionsFromPricing] Missing data for centralized config:", { labels: I, pricingData: D, pricingOptionsLength: C.length });
    }, Jt = () => {
      if (!Object.values(U.value).some(
        (I) => I.options.length > 0
      )) return;
      const C = (I, D) => {
        const Y = {};
        for (const Ie of D)
          Y[Ie] = [...I];
        return Y;
      };
      return {
        banding: U.value.banding.options.length > 0 ? {
          options: {
            sides: C(U.value.banding.options, ["l1", "l2", "w1", "w2"])
          }
        } : void 0,
        finish: U.value.finish.options.length > 0 ? {
          options: {
            faces: C(U.value.finish.options, ["a", "b"])
          }
        } : void 0,
        planing: U.value.planing.options.length > 0 ? {
          options: {
            sides: C(U.value.planing.options, ["l1", "l2", "w1", "w2"]),
            faces: C(U.value.planing.options, ["a", "b"])
          }
        } : void 0
      };
    }, Gi = (P) => {
      if (!pe.value.length) return "n";
      const C = P.material, I = P.t, D = pe.value.filter((Ge) => Ge.material === C && Ge.t === I);
      if (!D.length)
        return "n";
      let Y = !1, Ie = !1, Oe = !1;
      for (const Ge of D)
        Ge.grain === "l" ? (Y = !0, Ie = !0) : Ge.grain === "w" && (Y = !0, Oe = !0);
      return Y ? Ie && Oe ? "y" : Ie ? "l" : Oe ? "w" : "n" : "n";
    }, Bt = (P) => {
      for (const C of oe.value)
        Po(C, P);
      for (const C of pe.value)
        Po(C, P);
    };
    let ue = !1;
    return qe(oe, (P) => {
      ue || !P.length || It(() => {
        const C = ["banding", "finish", "planing"], I = [];
        C.forEach((D) => {
          const Y = /* @__PURE__ */ new Set();
          if (P.forEach((Ie) => {
            const Oe = Ie.extras?.[D];
            Oe && (Oe.faces && Object.values(Oe.faces).forEach((Ge) => {
              typeof Ge == "string" && Ge.trim() && Ge !== "Y" && Y.add(Ge);
            }), Oe.sides && Object.values(Oe.sides).forEach((Ge) => {
              typeof Ge == "string" && Ge.trim() && Ge !== "Y" && Y.add(Ge);
            }));
          }), Y.size > 0) {
            const Ie = lu(D);
            if (Ie) {
              const Oe = Ie.options[0];
              if (Array.isArray(Oe) && (Oe.length === 0 || typeof Oe[0] == "string")) {
                const Ge = new Set(Oe), qi = Array.from(Y).filter((kt) => !Ge.has(kt));
                if (qi.length > 0) {
                  const kt = [...Oe, ...qi];
                  So(D, {
                    ...Ie,
                    options: [kt, ...Ie.options.slice(1)]
                  });
                }
              }
            }
          }
        }), C.forEach((D) => {
          const Y = cu(D, P);
          Y.cleanedCount > 0 && I.push(
            `${D}: ${Y.invalidOptions.join(", ")}`
          );
        }), I.length > 0 && (console.warn(
          `Some extras options no longer exist and have been reset:
` + I.join(`
`)
        ), typeof window < "u" && window.alert && setTimeout(() => {
          alert(
            `Some extras options no longer exist and have been reset:
` + I.join(`
`)
          );
        }, 500)), ue = !0;
      });
    }, { immediate: !0 }), {
      // Bundled object
      inputs: {
        inputStock: pe,
        inputShapes: oe,
        inputUserGroups: M,
        currentInputShape: _e,
        selectedSaw: J,
        inputSaw: Q
      },
      // State
      inputShapes: oe,
      inputStock: pe,
      inputUserGroups: M,
      inputSaw: Q,
      currentInputShape: _e,
      selectedSaw: J,
      validationIssues: ne,
      isValidating: ae,
      // Computed
      totalInputShapes: ce,
      totalInputStock: me,
      totalInputShapeLines: ke,
      totalInputStockLines: Ae,
      hasValidationIssues: je,
      // Actions
      addInputShape: o,
      addInputStock: r,
      cloneInputShape: l,
      cloneInputStock: c,
      updateInputShape: u,
      updateInputStock: d,
      updateInputSaw: E,
      removeInputShape: k,
      removeInputStock: N,
      reset: Qe,
      resetInputSaw: w,
      clear: L,
      clearIssues: Ze,
      // Validation
      validateInputShapes: ot,
      validateInputShapeField: p,
      validateInputStock: O,
      validateInputStockField: h,
      validateInputSaw: X,
      clearValidationIssues: H,
      // Conversion
      createShapeList: W,
      createStockList: F,
      // Import/Export/Update
      importData: B,
      exportData: _,
      updateInputs: rt,
      importInputShapes: re,
      importInputStock: et,
      // Additional functions
      getShapeGrainSummary: Gi,
      updateNumberFormat: Bt,
      getSpecialShapeFields: ye,
      // Extras Options Management
      extrasOptions: U,
      setExtrasOptionsFromPricing: lt,
      getCentralizedOptions: Jt
    };
  } catch (e) {
    throw console.error("[createInputs] Fatal error during initialization:", e), e;
  }
}
let da = null;
function Tl(t = { numberFormat: "decimal" }) {
  try {
    return da || (da = Zh(t)), da;
  } catch (e) {
    throw console.error("[useInputs] FATAL ERROR in useInputs:", e), console.error("[useInputs] Error stack:", e?.stack), e;
  }
}
class qo {
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
    if (i && i instanceof Wt) {
      const u = i.sides;
      if (u && typeof u == "object" && ("x1" in u || "x2" in u || "y1" in u || "y2" in u)) {
        const d = this.migrateSideNames(u);
        return i.sides = d, !0;
      }
      return !1;
    }
    const a = {}, o = {}, r = { sides: {} };
    if (i && typeof i == "object") {
      const u = this.migrateSideNames(i);
      for (const [p, d] of Object.entries(u))
        Ft.includes(p) && (a[p] = d);
    }
    if (s && typeof s == "object") {
      const u = this.migrateSideNames(s);
      for (const [p, d] of Object.entries(u))
        Ft.includes(p) && (o[p] = d);
    }
    if (n && typeof n == "object") {
      n.all && (r.sides.all = n.all);
      for (const [u, p] of Object.entries(n))
        u !== "all" && Ft.includes(u) && p && (r.sides[u] = p);
    }
    const l = new Wt(Object.keys(a).length > 0 ? { sides: a } : {}), c = Object.keys(o).length > 0 ? new Wt({ sides: o }) : void 0;
    return "extras" in e && e.extras ? e.extras.banding = l : Fe(e) && (e.banding = l), c && "_banding" in e && (e._banding = c), Fe(e) && n && (e.bandingOptions = r), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(e) {
    const i = e.finish, s = "_finish" in e ? e._finish : void 0, n = Fe(e) ? e.finishOptions : void 0;
    if (!i && !s && !n || i && i instanceof Dt)
      return !1;
    const a = {}, o = {}, r = { faces: {} };
    if (i && typeof i == "object")
      for (const [u, p] of Object.entries(i))
        St.includes(u) && (a[u] = p);
    if (s && typeof s == "object")
      for (const [u, p] of Object.entries(s))
        St.includes(u) && (o[u] = p);
    if (n && typeof n == "object") {
      n.all && (r.faces.all = n.all);
      for (const [u, p] of Object.entries(n))
        u !== "all" && St.includes(u) && p && (r.faces[u] = p);
    }
    const l = new Dt(Object.keys(a).length > 0 ? { faces: a } : {}), c = Object.keys(o).length > 0 ? new Dt({ faces: o }) : void 0;
    return "extras" in e && e.extras ? e.extras.finish = l : Fe(e) && (e.finish = l), c && "_finish" in e && (e._finish = c), Fe(e) && n && (e.finishOptions = r), !0;
  }
  /**
   * Migrate storage format: Convert boolean true to option name strings in multi-column configs
   * This handles legacy data where single-option checkboxes stored boolean true instead of the option name
   */
  static migrateStorageFormat(e) {
    let i = !1;
    const s = "extras" in e && e.extras ? e.extras : e;
    if (s.banding) {
      const n = Kt("banding");
      if (n && n.labels && n.labels.length > 1)
        for (const a of Ft) {
          const o = `side.${a}`, r = us(e, "banding", o);
          if (r && typeof r == "object" && !Array.isArray(r)) {
            let l = !1;
            const c = { ...r };
            for (const u of n.labels)
              if (c[u] === !0) {
                const d = n.labels.indexOf(u);
                if (d !== -1 && n.options[d] && Array.isArray(n.options[d])) {
                  const h = n.options[d];
                  h.length === 1 && (c[u] = h[0], l = !0);
                }
              }
            l && (xs(e, "banding", o, c), i = !0);
          }
        }
    }
    if (s.finish) {
      const n = Kt("finish");
      if (n && n.labels && n.labels.length > 1)
        for (const a of St) {
          const o = `face.${a}`, r = us(e, "finish", o);
          if (r && typeof r == "object" && !Array.isArray(r)) {
            let l = !1;
            const c = { ...r };
            for (const u of n.labels)
              if (c[u] === !0) {
                const d = n.labels.indexOf(u);
                if (d !== -1 && n.options[d] && Array.isArray(n.options[d])) {
                  const h = n.options[d];
                  h.length === 1 && (c[u] = h[0], l = !0);
                }
              }
            l && (xs(e, "finish", o, c), i = !0);
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
    if (i && typeof i == "object" && !(i instanceof Wt) && !("sides" in i) && !("faces" in i))
      return !0;
    if ("_banding" in e) {
      const n = e._banding;
      if (n && typeof n == "object" && !(n instanceof Wt) && !("sides" in n) && !("faces" in n))
        return !0;
    }
    const s = e.finish;
    if (s && typeof s == "object" && !(s instanceof Dt) && !("sides" in s) && !("faces" in s))
      return !0;
    if ("_finish" in e) {
      const n = e._finish;
      if (n && typeof n == "object" && !(n instanceof Dt) && !("sides" in n) && !("faces" in n))
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
          const n = Object.keys(s.faces).filter((a) => !St.includes(a));
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
const Jh = {
  y1: "l1",
  y2: "l2",
  x1: "w1",
  x2: "w2"
}, Xh = {
  l1: "y1",
  l2: "y2",
  w1: "x1",
  w2: "x2"
};
function Da(t = !1) {
  return {
    l1: t,
    l2: t,
    w1: t,
    w2: t
  };
}
function Qh(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t
  };
}
function In(t = !1) {
  return {
    a: t,
    b: t
  };
}
function eg(t = !1) {
  return {
    sides: Da(t),
    faces: In(t)
  };
}
function tg(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t,
    a: t,
    b: t
  };
}
function ig(t) {
  const e = {};
  for (const [i, s] of Object.entries(Jh))
    i in t && (e[s] = t[i]);
  return e;
}
function sg(t) {
  const e = {};
  for (const [i, s] of Object.entries(Xh))
    i in t && (e[s] = t[i]);
  return e;
}
function _t(t) {
  return t === 1 ? !0 : t === 0 ? !1 : t;
}
function hi(t) {
  if (!t) return t;
  const e = "x1" in t || "x2" in t || "y1" in t || "y2" in t, i = "l1" in t || "l2" in t || "w1" in t || "w2" in t;
  if (e && i && console.warn("Mixed side format detected in data - using old format (x/y) and ignoring new format (l/w)", t), e) {
    const n = ig(t), a = {};
    return "l1" in n && (a.l1 = _t(n.l1)), "l2" in n && (a.l2 = _t(n.l2)), "w1" in n && (a.w1 = _t(n.w1)), "w2" in n && (a.w2 = _t(n.w2)), a;
  }
  const s = {};
  return "l1" in t && (s.l1 = _t(t.l1)), "l2" in t && (s.l2 = _t(t.l2)), "w1" in t && (s.w1 = _t(t.w1)), "w2" in t && (s.w2 = _t(t.w2)), Object.keys(s).length > 0 ? s : t;
}
function ng(t) {
  return !t || typeof t != "string" ? t : {
    "side.x1": "side.w1",
    "side.x2": "side.w2",
    "side.y1": "side.l1",
    "side.y2": "side.l2"
  }[t] || t;
}
function Ji(t) {
  return !t || !Array.isArray(t) ? t : t.map(ng);
}
function ag(t) {
  const e = {};
  if (t.banding && typeof t.banding == "object")
    for (const [i, s] of Object.entries(t.banding))
      s === !0 || s === !1 ? e[i] = s : typeof s == "number" ? e[i] = _t(s) : typeof s == "string" && s.length > 0 && (e[i] = s);
  if (t.bandingType && typeof t.bandingType == "object")
    for (const [i, s] of Object.entries(t.bandingType))
      if (t.banding) {
        const n = e[i];
        (n === !0 || typeof n == "string" && n.length > 0) && (typeof s == "string" && s.length > 0 ? e[i] = s : typeof s == "number" && s !== 0 && (e[i] = String(s)));
      } else
        typeof s == "string" && s.length > 0 ? e[i] = s : typeof s == "number" && s !== 0 && (e[i] = String(s));
  return Object.keys(e).length > 0 ? e : void 0;
}
function Ea(t) {
  return t && sg(t);
}
function og(t) {
  t?.type && delete t.type, rg.call(this, t), lg.call(this, t), cg.call(this, t), t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => Ma(e));
}
function rg(t) {
  if (!t?.banding || typeof t.banding != "object") return;
  const e = Object.keys(t.banding);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.banding = {
    labels: Object.keys(t.banding),
    pricing: t.bandingPricing || {}
  }, t.bandingPricing && delete t.bandingPricing);
}
function lg(t) {
  if (!t?.finish || typeof t.finish != "object") return;
  const e = Object.keys(t.finish);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.finish = {
    labels: Object.keys(t.finish),
    pricing: t.finishPricing || {}
  }, t.finishPricing && delete t.finishPricing);
}
function cg(t) {
  if (!t?.planing || typeof t.planing != "object") return;
  const e = Object.keys(t.planing);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.planing = {
    labels: Object.keys(t.planing),
    pricing: t.planingPricing || {}
  }, t.planingPricing && delete t.planingPricing);
}
function Ma(t) {
  !t || typeof t != "object" || (qo.needsMigration(t) && qo.migrateShape(t), t._banding && delete t._banding, t._finish && delete t._finish, t._bandingType && delete t._bandingType);
}
function Ol(t) {
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
function $0(t) {
  if (!(!t || typeof t != "object")) {
    if (og(t), t.parts && Array.isArray(t.parts) && (t.parts = t.parts.map((e) => (e.extras?.banding?.sides && (e.extras.banding.sides = hi(e.extras.banding.sides)), e.extras?.finish?.sides && (e.extras.finish.sides = hi(e.extras.finish.sides)), e.extras?.planing?.sides && (e.extras.planing.sides = hi(e.extras.planing.sides)), e))), t.stock && Array.isArray(t.stock) && (t.stock = t.stock.map((e) => e?.trim ? {
      ...e,
      trim: hi(e.trim)
    } : e)), t.options) {
      if (Ol(t.options), t.options.bandingLocations && (t.options.bandingLocations = Ji(t.options.bandingLocations)), t.options.finishLocations && (t.options.finishLocations = Ji(t.options.finishLocations)), t.options.planingLocations && (t.options.planingLocations = Ji(t.options.planingLocations)), t.options.extrasLocationGroups)
        for (const e of ["banding", "finish", "planing"]) {
          const i = t.options.extrasLocationGroups[e];
          i && Array.isArray(i) && i.forEach((s) => {
            s.locations && (s.locations = Ji(s.locations));
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
        i.locations && Array.isArray(i.locations) && (i.locations = Ji(i.locations)), i.groups && Array.isArray(i.groups) && i.groups.forEach((s) => {
          s.locations && (s.locations = Ji(s.locations));
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
    t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => Ma(e)), (t.l !== void 0 || t.w !== void 0 || t.banding !== void 0) && Ma(t);
  }
}
function ug(t) {
  if (!t || typeof t != "object")
    return t;
  const e = { ...t };
  return e.saw && (e.saw = dg(e.saw)), Array.isArray(e.stock) && (e.stock = e.stock.map(fg)), Array.isArray(e.parts) && (e.parts = e.parts.map(pg)), e;
}
function dg(t) {
  const e = { ...t };
  if (e.guillotineOptions && (e.guillotineOptions = { ...e.guillotineOptions }, e.guillotineOptions.strategy === "stock" && (e.guillotineOptions.strategy = "efficiency")), e.efficiencyOptions) {
    e.efficiencyOptions = { ...e.efficiencyOptions };
    const i = e.efficiencyOptions.primaryCompression;
    i === "x" ? e.efficiencyOptions.primaryCompression = "l" : i === "y" && (e.efficiencyOptions.primaryCompression = "w");
  }
  return e.bladeWidth !== void 0 && (e.bladeWidth = Number(e.bladeWidth)), e.stackHeight !== void 0 && (e.stackHeight = Number(e.stackHeight)), (e.cutPreference === null || e.cutPreference === void 0) && (e.cutType === "guillotine" || e.cutType === "beam") && (e.cutPreference = "l"), e;
}
function fg(t) {
  const e = { ...t };
  return delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.trim && (e.trim = hi(e.trim)), e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e.cost !== void 0 && (e.cost = Number(e.cost)), e;
}
function pg(t) {
  const e = { ...t };
  if (delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.banding || e.bandingType) {
    const i = ag(e);
    i && Object.keys(i).length > 0 && (e.extras || (e.extras = {}), e.extras.banding || (e.extras.banding = {}), e.extras.banding.sides = hi(i)), delete e.banding, delete e.bandingType;
  }
  if (e.extras?.banding?.sides && (e.extras = { ...e.extras }, e.extras.banding = { ...e.extras.banding }, e.extras.banding.sides = hi(e.extras.banding.sides)), e.finish && !e.extras?.finish) {
    if (e.extras || (e.extras = {}), e.extras.finish || (e.extras.finish = {}), e.finish.a !== void 0 || e.finish.b !== void 0) {
      const i = {};
      "a" in e.finish && (i.a = _t(e.finish.a)), "b" in e.finish && (i.b = _t(e.finish.b)), e.extras.finish.faces = i;
    } else
      e.extras.finish.sides = hi(e.finish);
    delete e.finish;
  }
  if (e.extras?.finish?.sides && (e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish }, e.extras.finish.sides = hi(e.extras.finish.sides)), e.extras?.finish?.faces) {
    e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish };
    const i = e.extras.finish.faces;
    "a" in i && (i.a = _t(i.a)), "b" in i && (i.b = _t(i.b));
  }
  return e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e;
}
function Ot(t) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t)) return t.map(Ot);
  const e = {};
  for (const [i, s] of Object.entries(t))
    i === "__entityType" || i === "autoId" || (e[i] = Ot(s));
  return e;
}
function Ll(t) {
  if (!t) return null;
  const {
    enabled: e,
    __entityType: i,
    autoId: s,
    ...n
  } = t;
  return Ot(n);
}
function hg(t) {
  return t ? typeof t == "string" ? t : t.id ? t.id : t.autoId ? t.autoId : "" : "";
}
function gg(t) {
  const e = hg(t);
  return e ? { id: e } : null;
}
function mg(t) {
  return t.rot !== void 0 ? t.rot ? 1 : 0 : t.rotated !== void 0 ? t.rotated ? 1 : 0 : t.isRotated !== void 0 ? t.isRotated ? 1 : 0 : t.w > t.l ? 1 : 0;
}
const _l = j({
  // Job metadata
  jobId: f().describe("Job identifier"),
  // Input configuration (preserved)
  saw: mi.describe("Saw configuration used"),
  // Result data (internal format - l1/l2/w1/w2)
  // Using actual schemas to strip internal-only fields
  stock: ee(pn).describe("Stock items with placement layouts"),
  parts: ee(Ps).describe("Parts with coordinates and properties"),
  cuts: ee(Yr).optional().describe("Cut instructions"),
  offcuts: ee(od).optional().describe("Remaining offcut pieces"),
  unusableParts: ee(Ps).optional().describe("Parts that could not be placed"),
  // Complete metadata (ALL internal analysis fields)
  metadata: Pl.describe("Complete analysis and metrics")
});
j({
  saw: mi.describe("Saw configuration"),
  stock: ee(Ht).describe("Stock items"),
  parts: ee(yi).describe("Parts to cut"),
  groups: ee(Vn).optional().describe("User-defined groups"),
  webhook: m().url().optional().describe("Webhook URL for async result delivery")
});
j({
  error: m().describe("Error message"),
  details: wo().optional().describe("Detailed error information (Zod validation errors, etc.)"),
  version: xe("V3").describe("API version"),
  help: m().optional().describe("Helpful migration guidance"),
  example: wo().optional().describe("Example of correct format"),
  docs: m().url().optional().describe("Link to V3 documentation")
});
function yg(t) {
  if (!t) return null;
  const {
    ...e
  } = t;
  return Ot(e);
}
function bg(t) {
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
    trim: Ot(t.trim),
    cost: t.cost ?? 0,
    notes: t.notes ?? "",
    analysis: yg(t.analysis),
    stack: t.stack?.number ?? 1,
    customData: Ot(t.customData)
  } : null;
}
function vg(t) {
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
    rot: mg(t),
    added: t.added ?? !1,
    notes: t.notes ?? "",
    stock: gg(t.stock),
    trim: Ot(t.trim),
    extras: Ot(t.extras),
    customData: Ot(t.customData)
  };
  return t.machining && (e.machining = Ll(t.machining)), e;
}
function wg(t) {
  if (!t) return null;
  const e = {
    id: t.id,
    name: t.name,
    l: t.l,
    w: t.w,
    t: t.t,
    material: t.material ?? "",
    notes: t.notes ?? "",
    trim: Ot(t.trim),
    extras: Ot(t.extras),
    customData: Ot(t.customData)
  };
  return t.machining && (e.machining = Ll(t.machining)), t.issues && Array.isArray(t.issues) && t.issues.length > 0 && (e.issues = t.issues.map((i) => ({
    message: i.message,
    type: i.type,
    category: i.category,
    field: i.field
  }))), e;
}
function Sg(t) {
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
function kg(t) {
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
function xg(t) {
  const e = (t.stockList || t.stock || []).map(bg), i = (t.shapeList || t.parts || []).map(vg), s = (t.unusableShapes || []).map(wg), n = (t.cutList || t.cuts || []).map(Sg), a = (t.offcuts || []).map(kg);
  return {
    jobId: t.jobId,
    saw: Ot(t.saw),
    stock: e,
    parts: i,
    cuts: n,
    offcuts: a,
    unusableParts: s,
    metadata: Ot(t.metadata)
  };
}
const Ig = { id: "mini-stock-nav" }, Pg = ["onMousedown"], Cg = { class: "id" }, Ag = /* @__PURE__ */ Ye({
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
    return (a, o) => (v(), T("div", Ig, [
      (v(!0), T(Ne, null, Ke(i.stockList, (r, l) => (v(), T("button", {
        type: "button",
        key: l,
        class: Be(["c-btn c-btn--col-4 c-btn--sm", { selected: r.autoId === i.activeStockId }]),
        style: vt({
          backgroundColor: r.autoId === i.activeStockId ? "#" + i.secondaryColor : "#" + i.primaryColor
        }),
        onMousedown: (c) => n(r.autoId)
      }, [
        x("div", Cg, V(l + 1), 1),
        Vi(x("div", { class: "stack legibility" }, V(r.stack.number), 513), [
          [Cn, typeof r?.stack?.number == "number" && r.stack.number > 1]
        ])
      ], 46, Pg))), 128))
    ]));
  }
});
function Tg(t) {
  const e = t.x, i = t.x + t.l, s = zt().domain([e, i]).range([this.scales.xPositionScale(e), this.scales.xPositionScale(i)]), n = t.y, a = t.y + t.w, o = zt().domain([n, a]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(a)]), r = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + r})`).call(dn(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + r})`).attr("class", "axis shape x").call(dn(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), t?.stock?.saw?.stockType !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - r}, 0)`).call(fn(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - r}, 0)`).attr("class", "axis shape y").call(fn(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Og() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((e) => {
    e.transition().duration(0).call(gr(this.scales.xScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dy", -5);
  });
  const t = this.requiresStretch(this.props.stock.value);
  (!t || t && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((e) => {
    e.transition().duration(0).call(mr(this.scales.yAxisScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dx", 5);
  });
}
function Pn(t, e, i) {
  !i || !t?.length || t.forEach((s, n) => {
    const [a, o] = s;
    i === "x" ? Lg.call(this, a, o, e[n]) : _g.call(this, a, o, e[n]);
  });
}
function Lg(t, e, i) {
  const s = zt().domain([t, e]).range([
    this.scales.xPositionScale(t),
    this.scales.xPositionScale(e)
  ]), n = $l(s.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(dn(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(i)));
  a.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, r, l) => l[r]?.getBBox()?.height + 10), this.axes.cutMeasurementXAxes.push(a);
}
function _g(t, e, i) {
  const s = zt().domain([t, e]).range([
    this.scales.yPositionScale(t),
    this.scales.yPositionScale(e)
  ]), n = $l(s.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(fn(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(i)));
  $g(a), this.axes.cutMeasurementYAxes.push(a);
}
function $l(t) {
  return (t[1] - t[0]) / 2 + t[0];
}
function $g(t) {
  t.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (e, i, s) => s[i]?.getBBox()?.height + 10).attr("dx", (e, i, s) => s[i]?.getBBox()?.width / 4).attr("transform", (e, i, s) => "rotate(90) translate(" + s[i]?.getBBox()?.width / 4 + ")");
}
function Cs() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Fg() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function zn() {
  this.axes.cutMeasurementXAxes?.length && (this.axes.cutMeasurementXAxes.forEach((t) => t.remove()), this.axes.cutMeasurementXAxes.length = 0), this.axes.cutMeasurementYAxes?.length && (this.axes.cutMeasurementYAxes.forEach((t) => t.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function io(t) {
  return t.autoId;
}
function Dg(t, e) {
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
function fa({ parent: t, near: e, far: i, offcuts: s = [] }) {
  if (!this.props.containerWidth)
    return !1;
  const n = [t, e, i, ...s].filter((a) => a);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(n, io).join(
    (a) => a.append("rect").attr("class", "segment").call((o) => zo.call(this, o)),
    (a) => a.call((o) => zo.call(this, o)),
    (a) => a.remove()
  ), this.state.env === "development" && Eg.call(this, n), !this.settings.app && this.state.env === "development" && Mg.call(this);
}
function zo(t) {
  return t.classed("offcut", (e) => e.offcut).classed("near", (e) => e.type === "near").classed("far", (e) => e.type === "far").classed("parent", (e, i) => e.id !== "root" && i === 0).attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e));
}
function Eg(t) {
  this.selections.segmentGroup.selectAll("text").data(t, io).join(
    (e) => e.append("text").attr("class", "segment-text").call((i) => Wo.call(this, i)),
    (e) => e.call((i) => Wo.call(this, i)),
    (e) => e.remove()
  );
}
function Wo(t) {
  return t.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function Mg() {
  this.selections.segmentRectangles.on("mousedown", function(t, e) {
    console.log("segment", `[${e?.parentId || "-"}]->[${e.id}] {P${e.phase}} ${e.l}x${e.w} ${e.cutDirection} ${e.hasHeadCut ? "HEAD" : "NORM"}`), console.log(e);
  });
}
function Fl(t) {
  const e = t?.guillotineState?.parentSegmentID;
  if (!this.props.segments?.value?.length)
    return !1;
  let i;
  if (e) {
    for (const n of this.props.segments.value)
      if (i = Dg(n, e), i) break;
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
function Dl(t, e = []) {
  if (!t) return e;
  if (t.offcut && e.push(t), t.children && Array.isArray(t.children))
    for (const i of t.children)
      Dl(i, e);
  return e;
}
function Rg() {
  if (!this.props.containerWidth || !this.props.segments?.value?.length)
    return;
  const t = [];
  for (const i of this.props.segments.value)
    Dl(i, t);
  if (!t.length) return;
  this.selections.segmentGroup.attr("display", "block");
  const e = (i) => i.attr("x", (s) => this.getRectangleCoordinate(s, "x")).attr("y", (s) => this.getRectangleCoordinate(s, "y")).attr("width", (s) => this.getWidthAttribute(s)).attr("height", (s) => this.getHeightAttribute(s));
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(t, io).join(
    (i) => i.append("rect").attr("class", "segment offcut").call(e),
    (i) => i.call(e),
    (i) => i.remove()
  );
}
const { currentCutIndex: jg } = Va();
function Vg() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (t, e) => e).join(
    (t) => t.append("line").attr("class", "cut").call((e) => Uo.call(this, e)),
    (t) => t.call((e) => Uo.call(this, e)),
    (t) => t.remove()
  ), Rl.call(this));
}
function Uo(t) {
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
function El(t, e, i) {
  return t.guillotineState.parentSegmentID === e && i && t.guillotineState.segmentCutOrder < i;
}
function Ml(t, e) {
  return t.guillotineState?.parentSegmentID !== null && !t?.isTrim ? t.guillotineState.parentSegmentID === e : !1;
}
function Bg(t, e, i, s) {
  this.selections.cutLines.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] || !s && a.guillotineState.parentSegmentID === e ? "visible" : "hidden"), jg.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] ? "visible" : "hidden")), this.selections.cutLines.classed("highlight", (a) => t.stock.cutType === "guillotine" && a.isTrim ? a.position === t.type : a.guillotineState[i] === t.guillotineState[i]), this.selections.cutLines.classed("ptx-dummy", (a) => a?.ptxData?.isDummy), s || Gg.call(this, t, e);
}
function Ng(t, e, i, s, n) {
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
    this.state.device === "desktop" && !t.isTrim && Pn.call(this, a, o, s);
  }
  this.selections.cutLines.classed("highlight", (o, r) => r === e);
}
function Rl() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1), this.selections?.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), this.selections?.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return Math.max(1, Math.ceil(e));
  }), Cs.call(this), zn.call(this);
}
function Gg(t, e) {
  const i = t?.guillotineState?.segmentCutOrder;
  if (i == null) return;
  this.selections.cutLines.classed("completed", (p) => El(p, e, i)), this.selections.cutLines.classed("inside-segment", (p) => Ml(p, e));
  const s = Fl.call(this, t);
  if (s === !1) return;
  const { parent: n, children: a } = s, { near: o } = jl(t, a);
  if (!o) return;
  let r = [], l;
  const c = this.getHalfBladeWidth(t.stock), u = t.dimension === "l" ? "y" : "x";
  t?.dimension === "l" ? (r = [
    [
      o.y,
      o.y + o.w
    ],
    [
      t.y1 + c,
      n.y + n.w
    ]
  ], l = [t?.distances?.bottom, t?.distances.top]) : t?.dimension === "w" && (r = [
    [
      o.x,
      o.x + o.l
    ],
    [
      t.x1 + c,
      n.x + n.l
    ]
  ], l = [t?.distances?.left, t?.distances?.right]), this.state.device === "desktop" && !t.isTrim && l && Pn.call(this, r, l, u);
}
function qg(t = null, e = "") {
  if (t === null || this.selections.cutLines.empty()) return;
  const i = this.props.cuts.value[t];
  if (!i) return;
  if (Cs.call(this), zn.call(this), t !== null && t >= 0 && t < this.selections.cutLines.size()) {
    const k = this.selections.cutLines.nodes()[t].parentElement;
    if (!k) return;
    yt(k).raise();
  }
  const s = i.guillotineState?.parentSegmentID, n = this.getHalfBladeWidth(i.stock), a = i.dimension === "l" ? "y" : "x", o = i?.stock?.trim, r = e === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes(i?.stock?.cutType) && s !== null && typeof s < "u" ? Bg.call(this, i, s, r, e) : Ng.call(this, i, t, o, a, n), zg.call(this, i, t, s), e === "ptx") {
    this.removeSegments();
    return;
  }
  if (i.isTrim) {
    if (this.removeSegments(), this.state.device === "desktop") {
      const k = i.stock;
      if (i.dimension === "l") {
        const N = i.position === "bottom", q = N ? i.distances?.bottom : i.distances?.top;
        if (q) {
          const O = N ? [[0, q]] : [[k.w - q, k.w]];
          Pn.call(this, O, [q], "y");
        }
      } else if (i.dimension === "w") {
        const N = i.position === "left", q = N ? i.distances?.left : i.distances?.right;
        if (q) {
          const O = N ? [[0, q]] : [[k.l - q, k.l]];
          Pn.call(this, O, [q], "x");
        }
      }
    }
    return;
  }
  const l = Fl.call(this, i);
  if (l === !1)
    return;
  const { parent: c, children: u } = l;
  if (!i?.guillotineState?.parentSegmentID)
    return fa.call(this, { parent: c });
  if (i.stock?.cutType === "beam" && c.phase === 0) {
    const N = this.props.segments.value.find((B) => B.stock?.autoId === i.stock?.autoId)?.children || u, q = N.find((B) => B.offcut === !0 && B.y === 0 && B.isTrimOffcut === !0), O = N.find((B) => B.offcut === !0 && B !== q && B.y + B.w >= i.stock.w - (i.stock.trim?.l2 || 0)), G = N.filter((B) => !B.offcut), H = G.find((B) => B.type === "near"), W = G.find((B) => B.type === "far"), F = [q, O].filter(Boolean);
    return fa.call(this, { parent: c, near: H, far: W, offcuts: F });
  }
  const { near: p, far: d, offcuts: h } = jl(i, u);
  fa.call(this, { parent: c, near: p, far: d, offcuts: h });
}
function jl(t, e) {
  const i = t.dimension === "l" ? "y" : "x", s = t.dimension === "l" ? "w" : "l", n = t.stock?.cutType === "beam";
  let a, o;
  n ? (a = e.find((l) => l.type === "near" && !l.offcut), o = e.find((l) => l.type === "far" && !l.offcut)) : (a = e.find((l) => l.type === "near" && l[i] + l[s] === t[i + "1"] - t.stock.halfBladeWidth), o = e.find((l) => l.type === "far" && l[i] === t[i + "1"] + t.stock.halfBladeWidth));
  const r = e.filter((l) => l.offcut === !0 && l !== a && l !== o);
  return { near: a, far: o, offcuts: r };
}
function zg(t, e, i) {
  this.selections.cutLines.attr("stroke-width", (s, n) => {
    const a = this.scales.measurementScale(this.getBladeWidth(s.stock));
    let o = Math.max(1, Math.ceil(a));
    const r = t?.guillotineState?.segmentCutOrder;
    return (El(s, i, r) || Ml(s, i)) && (o += 1), n === e && Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock))) < 5 && (o = 5), o;
  });
}
function Wg(t) {
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
  const s = vh(
    null,
    this.props.shapes.value,
    this.props.stock.value
  );
  let n;
  if (this.props.stock.value.cutType === "efficiency") {
    if (this.state.env === "development") {
      let o = function(u) {
        return `${u.x1}-${u.y1}-${u.x2}-${u.y2}`;
      }, r = function(u) {
        u.attr("class", "ray").attr("x1", (p) => this.scales.xPositionScale(p.x1)).attr("x2", (p) => this.scales.xPositionScale(p.x2)).attr("y1", (p) => this.scales.yPositionScale(p.y1)).attr("y2", (p) => this.scales.yPositionScale(p.y2));
      };
      if (this.state.env !== "development") return;
      const c = wl(this.props.shapes.value, this.props.stock.value).flatMap((u) => Object.values(u.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(c, o).join(
        (u) => u.append("line").call((p) => r.call(this, p)),
        (u) => u.call((p) => r.call(this, p)),
        (u) => u.remove()
      );
    }
    n = wh(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const a = new xi();
  for (const o of s.toArray()) {
    const r = Sl(t, o, this.props.stock.value);
    r && a.addPoints(r.toArray());
  }
  if (n) {
    const o = n.toArray();
    for (const r of o) {
      const l = yh(t, r, this.props.stock.value);
      l && a.addPoints(l.toArray());
    }
  }
  if (this.props.stock.value.cutType === "efficiency") {
    const o = this.props.stock.value;
    [
      new ht(o.trim.w1 ?? 0, o.trim.l1 ?? 0),
      new ht(o.trim.w1 ?? 0, o.trim.l1 ?? 0),
      new ht(
        o.l - t.l - (o.trim.w2 ?? 0),
        o.trim.l1 ?? 0
      ),
      new ht(
        o.trim.w1 ?? 0,
        o.w - t.w - (o.trim.l2 ?? 0)
      ),
      new ht(
        o.l - t.l - (o.trim.w2 ?? 0),
        o.w - t.w - (o.trim.l2 ?? 0)
      )
    ].forEach((r) => a.add(r)), e = a.toArray();
  } else {
    const o = this.props.stock.value;
    a.add(new ht(o.trim.w1 ?? 0, o.trim.l1 ?? 0)), e = a.toArray();
  }
  for (let o = e.length; o--; ) {
    const r = e[o];
    t.x = r.x, t.y = r.y;
    for (const l of this.props.shapes.value)
      if (this.collision(t, l, this.props.stock.value)) {
        e.splice(o, 1);
        break;
      }
  }
  return console.log("[Diagram] drawPositions: filtered positions count:", e?.length), Ug.call(this, e, t), Hg.call(this, e, t), e?.length ? (console.log("[Diagram] drawPositions: success, returning true"), !0) : (console.warn("[Diagram] drawPositions: no valid positions after filtering"), !1);
}
function Ug(t, e) {
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
      n.stopPropagation(), yt(this).classed("hover", !0), yt(this).raise();
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), yt(this).classed("hover", !1);
    },
    {
      passive: !0
    }
  );
}
function Hg(t, e) {
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
      n.stopPropagation(), yt(this).classed("hover", !0);
      const a = yt(this).attr("data-id"), o = yt(`.ghost[data-id="${a}"]`);
      o.raise(), o.classed("highlight", !0);
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), yt(this).classed("hover", !1);
      const a = yt(this).attr("data-id");
      yt(`.ghost[data-id="${a}"]`).classed(
        "highlight",
        !1
      );
    },
    {
      passive: !0
    }
  );
}
function Yg() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text id").text((e) => Ho.call(this, e)).classed("hidden", (e, i, s) => this.isTextHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1),
    (t) => t.text((e) => Ho.call(this, e)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text name").text((e) => Yo.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, i, s) => this.isNameHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const n = s[i];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    }),
    (t) => t.text((e) => Yo.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, i, s) => this.isNameHidden(e, i, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const n = s[i];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text length").text((e) => Ko.call(this, e)).classed("hidden", (e, i, s) => this.isLengthHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const a = s[i].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    }),
    (t) => t.text((e) => Ko.call(this, e)).classed("hidden", (e, i, s) => this.isLengthHidden(e, i, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const a = s[i].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text width").text((e) => Zo.call(this, e)).classed("hidden", (e, i, s) => this.isWidthHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (e, i, s) => {
      const n = s[i], a = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(e, "y", "center"), r = this.state.device === "mobile" ? 90 : -90;
      return `translate(${a},${o}) rotate(${r})`;
    }),
    (t) => t.text((e) => Zo.call(this, e)).classed("hidden", (e, i, s) => this.isWidthHidden(e, i, s)).attr("transform", (e, i, s) => {
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
function Ho(t) {
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
function Yo(t) {
  return !t?.name || typeof t?.name != "string" ? null : t.name.toUpperCase().trim();
}
function Ko(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : K({ v: t.l, o: this.numberConfig }).toString();
}
function Zo(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : K({ v: t.w, o: this.numberConfig }).toString();
}
const Kg = (t) => t.id;
function Zg() {
  if (!this.props.containerWidth) return;
  Cs.call(this);
  const t = this.props.shapes.value.reduce((e, i) => {
    const s = parseInt(i.parentId);
    return s > e ? s : e;
  }, 0);
  this.scales.shapeColorScale.domain([1, t]), this.state.env === "development" && Xg.call(this), Jg.call(this);
}
function Jg() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, Kg).join(
    (t) => {
      const e = t.append("g").attr("class", "shape-group");
      return Jo.call(this, e), Xo.call(this, e), e.on("mousedown", Qo.bind(this)), e;
    },
    (t) => (Jo.call(this, t), Xo.call(this, t), t.on("mousedown", Qo.bind(this)), t),
    (t) => t.remove()
  ), nm.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => Yg.call(this)), this.selections.shapeWrappers.size() > 0;
}
function Xg() {
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
  this.scales.scoreColorScale = ks([ii(251, 224, 255), ii(122, 0, 138)]).domain([i, s]);
}
function Jo(t) {
  const e = t.selectAll("rect.shape").data((i) => [i]).join("rect").attr("class", "shape").attr("x", (i) => this.getRectangleCoordinate(i, "x")).attr("y", (i) => this.getRectangleCoordinate(i, "y")).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i)).style("fill", (i) => As.call(this, i));
  this.selections.shapeRectangles ? this.selections.shapeRectangles = yr(
    this.selections.shapeRectangles.nodes().concat(e.nodes())
  ) : this.selections.shapeRectangles = e;
}
function Xo(t) {
  !this.settings.main || this.settings.app || this.state.hasTouch || t.on("mouseover", (e) => {
    if (this?.props.moveMode && this.state.moving) return;
    const i = yt(e.target);
    i.classed("hover", !0), i.classed("selected") || i.style("fill", this.config.colors.partSelected.toString());
  }, { passive: !0 }).on("mouseout", (e, i) => {
    const s = yt(e.target);
    s.classed("hover", !1), s.classed("selected") || s.style("fill", As.call(this, i));
  }, { passive: !0 });
}
function Qo(t, e) {
  if (this.state.moving || !this.settings.main)
    return !1;
  this.state.env === "development" && !this.props.moveMode.value && Qg.call(this, t, e), (this.settings.app || this.settings.embed) && im.call(this, t, e), this.state.device === "desktop" && !this.props.moveMode.value && (zn.call(this), Tg.call(this, e)), this.props.moveMode.value ? (console.log("[Diagram] handleShapeClick: calling onAddToPartsBin", {
    shapeId: e.id
  }), this.callbacks.onAddToPartsBin(e)) : (console.log("[Diagram] handleShapeClick: calling findShape", {
    shapeId: e.id
  }), this.findShape.call(this, e.id));
}
function Qg(t, e) {
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
        ], tm.call(this, e);
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
    console.table(em(e, i));
  }
}
function em(t, e) {
  return e.reduce((i, s) => {
    const n = cm(t, s);
    return i[s] = Array.isArray(n) ? n.join(", ") : n, i;
  }, {});
}
function tm(t) {
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const e = t.guillotineData?.myStripParent;
  e && this.selections.shapeWrappers.filter((n) => n.id === e || n.group.addedAsGroup === e).select("rect").classed("highlight-a", !0);
  const i = this.props.shapes.value.find((s) => s.id === e)?.guillotineState?.myStripParent;
  i && this.selections.shapeWrappers.filter((n) => n.id === i || n.group.addedAsGroup === e).select("rect").classed("highlight-b", !0);
}
function im(t, e) {
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
      color: As.call(this, e),
      notes: e?.notes
    };
    if (typeof this.callbacks.onPartClick == "function" && this.callbacks.onPartClick(i), this.settings.app) return !1;
  }
  if (this.settings.app) return !1;
}
function As(t) {
  const e = ii(204, 204, 204);
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        if (t.group.addedAsGroup)
          return ii(43, 156, 16);
        if (t.firstShape.isFirstShape)
          return ii(255, 171, 231);
        if (typeof t.guillotineState.myPhase == "number") {
          const n = [0, 115, 255], a = [176, 255, 231];
          return `rgb(${n.map((r, l) => Math.round(r + t.guillotineState.myPhase / 5 * (a[l] - r))).join(",")})`;
        }
        break;
      case "groups":
        if (t.group.addedAsGroup)
          return ii(43, 156, 16);
        break;
      case "priorityShapes":
        if (t?.priority && t.priority?.[t.stock.parentId])
          return ii(139, 171, 46);
        break;
      case "placementOrder": {
        const n = this.props.shapes.value.reduce((a, o) => {
          const r = o.placementOrder ?? 0;
          return r > a ? r : a;
        }, 0);
        if (n > 0 && typeof t.placementOrder == "number") {
          const a = [0, 115, 255], o = [255, 50, 50], r = t.placementOrder / n;
          return `rgb(${a.map((c, u) => Math.round(c + r * (o[u] - c))).join(",")})`;
        }
        break;
      }
      case "score": {
        const n = t?.bestScore?.total ? this.scales.scoreColorScale(t.bestScore.total) : null;
        if (n != null && typeof n.toString == "function")
          return n;
        if (n != null && typeof n.r == "number" && typeof n.g == "number" && typeof n.b == "number")
          return console.warn("Detected corrupted score color object from scale:", n, "for shape:", t), ii(n.r, n.g, n.b, n.opacity ?? 1);
      }
    }
  const i = parseInt(t.parentId);
  let s;
  return this.scales.shapeColorScale && typeof this.scales.shapeColorScale == "function" ? s = this.scales.shapeColorScale(i) : (console.error("shapeColorScale is not initialized or is not a function!", this.scales.shapeColorScale), s = null), s != null && typeof s.toString == "function" ? s : s != null && typeof s.r == "number" && typeof s.g == "number" && typeof s.b == "number" ? ii(s.r, s.g, s.b, s.opacity ?? 1) : (console.warn("Shape color scale returned null, undefined, or unexpected non-color value for shape:", t, s), e);
}
const er = 3;
function sm(t) {
  const e = [];
  for (const i of t) {
    const s = i.extras?.banding;
    if (i.added && s?.sides)
      for (const [n, a] of Object.entries(s.sides)) {
        if (!a || ["a", "b", "c", "d"].includes(n)) continue;
        let o = n;
        if (i.rot) {
          const l = sl({ [n]: !0 }, "cc");
          o = Object.keys(l)[0];
        }
        const r = am.call(this, i, o);
        r && e.push(r);
      }
  }
  return e;
}
function tr(t) {
  const e = er / 2;
  return t.attr("class", "banding").attr("x1", (i) => this.scales.xPositionScale(i.l1) + Ks.call(this, i.type, "x", e)).attr("x2", (i) => this.scales.xPositionScale(i.l2) + Ks.call(this, i.type, "x", e)).attr("y1", (i) => this.scales.yPositionScale(i.w1) + Ks.call(this, i.type, "y", e)).attr("y2", (i) => this.scales.yPositionScale(i.w2) + Ks.call(this, i.type, "y", e)).attr("stroke-width", er).attr("stroke", "white");
}
function nm(t) {
  if (!this.settings.main) return;
  const e = sm.call(this, t);
  if (e.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(e, (i, s) => s).join(
    (i) => i.append("line").call((s) => tr.call(this, s)),
    (i) => i.call((s) => tr.call(this, s)),
    (i) => i.remove()
  );
}
function Ks(t, e, i) {
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
function am(t, e) {
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
function om(t) {
  this.selections.shapeWrappers.style("visibility", (e) => e?.placementOrder >= t ? "hidden" : "visible");
}
const ir = (t) => t.id;
function sr(t) {
  return t.style("fill", this.config.colors.stock).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function nr(t) {
  return t.style("fill", (e) => `url(#grain-${e.grain || "n"})`).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function rm() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), Og.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], ir).join(
    (t) => t.append("rect").attr("class", "background stock").call((e) => sr.call(this, e)),
    (t) => t.call((e) => sr.call(this, e)),
    (t) => t.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], ir).join(
    (t) => t.append("rect").attr("class", "stock-pattern").call((e) => nr.call(this, e)),
    (t) => t.call((e) => nr.call(this, e)),
    (t) => t.remove()
  );
}
function lm(t) {
  return typeof t == "string" && t.length === 6 && !isNaN(+("0x" + t.replace("#", "")));
}
function cm(t, e) {
  return Xe(t, e);
}
class um {
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
    if (this.config = e, this.selections = {}, !e.elementID || (this.selections.el = yt(e.elementID), this.selections.el === null)) return;
    const i = this.selections.el.node();
    i !== null && (this.selections.htmlEl = i, this.scales = {
      xScale: zt(),
      yScale: zt(),
      yPositionScale: zt(),
      xPositionScale: zt(),
      yAxisScale: zt(),
      measurementScale: zt(),
      shapeColorScale: ks(),
      scoreColorScale: ks()
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
    }, s = (n, a) => ii("#" + (lm(n?.replace("#", "")) ? n.replace("#", "") : a.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(i).map(([n, a]) => [
        n,
        s(e.colors?.[n], a)
      ])
    ), this.scales.shapeColorScale = ks([
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
      this.selections.svgCanvas = yt(e);
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
    function s(n, a, o) {
      const r = o[a], l = yt(r);
      l.text(n.name);
      let c = l.text();
      const u = l.node();
      if (!u) return;
      let p = u.getComputedTextLength();
      const d = this.getWidthAttribute(n) - 20;
      for (; p > d && c.length > 0; )
        c = c.slice(0, -1), l.text(c.length ? c + "..." : ""), p = l.node().getComputedTextLength();
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
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (s) => As.call(this, s));
    const i = yt(e).select("rect");
    if (i) {
      i.classed("selected", !0), i.style("fill", this.config.colors.partSelected.toString());
      const s = yt(e).datum();
      this.callbacks.onShapeSelect(s, e);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    Zg.call(this);
  }
  drawStock() {
    rm.call(this);
  }
  drawCuts() {
    Vg.call(this);
  }
  drawAllOffcuts() {
    Rg.call(this);
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
    return $e(e) && e !== null ? e.bladeWidth : 0;
  }
  getHalfBladeWidth(e = null) {
    const i = e.bladeWidth;
    return i !== void 0 && i > 0 ? i / 2 : 0;
  }
  // Reset Methods
  removeShapes() {
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), Cs.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), Fg.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), zn.call(this);
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
      const l = this.scales.measurementScale(e.l), c = this.scales.measurementScale(e.w);
      return l < 50 || c < 50;
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
    this?.selections?.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (e) => As.call(this, e)), this?.selections?.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (e) => {
      const i = this.scales.measurementScale(this.getBladeWidth(e.stock));
      return i < 1 ? 1 : Math.ceil(i);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    Cs.call(this);
  }
  updateShapeVisibility() {
    om.call(this);
  }
  drawPositions(e) {
    return Wg.call(this, e);
  }
  showCut(e) {
    qg.call(this, e);
  }
  resetCuts() {
    Rl.call(this);
  }
}
const dm = ["id"], fm = /* @__PURE__ */ Ye({
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
      activeCuts: o,
      activeSegments: r,
      currentCutIndex: l,
      getStock: c,
      getShapes: u,
      getSegments: p,
      getCuts: d
    } = Va(), h = t, k = i, N = (re) => {
      k("part-click", re);
    }, q = (re) => {
      k("shape-colour-update", re);
    }, O = (re, et) => {
      re?.autoId && k("shape-select", re.autoId, et);
    }, G = (re) => {
      re && k("add-to-parts-bin", re);
    }, H = (re, et) => {
      re && k("move-shape", re, et);
    }, W = le(0), F = le(0), B = le(null);
    let _, L = le(!1);
    const E = Lt({
      debug: "",
      stretched: !1
    }), w = () => {
      _?.state && (E.stretched = _.state.stretched);
    };
    Vt(() => U());
    const X = ie(() => ({
      format: h.numberFormat,
      decimals: h.decimalPlaces
    })), se = ie(() => h.stockAutoId ? c(h.stockAutoId) : n.value), oe = ie(() => h.stockAutoId ? u(h.stockAutoId) : a.value), pe = ie(() => h.main ? h.stockAutoId ? d(h.stockAutoId) : o.value : []), Q = ie(() => h.main ? h.stockAutoId ? p(h.stockAutoId) : r.value : []);
    dr(B, (re) => {
      const et = re[0], { width: lt, height: Jt } = et.contentRect;
      lt > 0 && (W.value = lt), k("resize", { width: lt, height: Jt });
    }), Mc(
      W,
      (re) => {
        _ && (re <= 0 || (_.setDevice(), _.resetShapeAxes(), _.drawAll(), w(), l.value !== null && (_.toggleSegments(!0), _.showCut(l.value))));
      },
      { throttle: 100 }
    );
    let M = !1;
    qe(() => se.value, (re) => {
      re && (W.value <= 0 || (M = !0, _.setDevice(), _.resetCuts(), _.removeSegments(), _.drawStock(), _.drawShapes(), _.drawCuts(), w(), It(() => M = !1)));
    }, { immediate: !1 }), qe(() => oe.value, (re) => {
      M || re && (W.value <= 0 || (_.setDevice(), _.drawShapes()));
    }, { immediate: !1, deep: !0 }), h.main && (qe(() => pe.value, () => {
      M || W.value <= 0 || _.drawCuts();
    }, { immediate: !1, deep: !0 }), qe(l, () => {
      l.value !== null && (W.value <= 0 || (_.toggleSegments(!0), _.showCut(l.value)));
    }, { immediate: !1 }), qe(X, (re) => {
      _.updateNumberFormat(re.format, re.decimals, null);
    }, { immediate: !1 }));
    const U = () => {
      const re = {
        // STATIC
        //--------------------------------------------------------
        elementID: `#${h.elementId}`,
        env: "production",
        numberConfig: {
          numberFormat: h.numberFormat,
          decimalPlaces: h.decimalPlaces,
          fractionRoundTo: 0
        },
        colors: h.colors || null,
        settings: {
          main: h.main,
          app: h.app,
          embed: h.embed,
          flipY: !1,
          flipX: !1
        },
        props: {
          containerHeight: F,
          containerWidth: W,
          stock: se,
          shapes: oe,
          cuts: pe,
          segments: Q,
          stockList: s.stockList,
          moveMode: h.moveMode,
          app: h.app
        },
        options: {
          disableClick: h.disableClick,
          enableStretch: h.enableStretch
        },
        // EVENTS
        //--------------------------------------------------------
        callbacks: {
          onShapeColourUpdate: q,
          onShapeSelect: O,
          onAddToPartsBin: G,
          onMoveShape: H,
          onPartClick: N
        }
      };
      _ = new um(re), E.debug = _.state.debug, L.value = !0;
    }, ne = (re = !1) => {
      _ && _.toggleShapes(re);
    }, ae = (re = !1) => {
      _ && _.toggleCuts(re);
    }, ce = (re = !1) => {
      _ && _.toggleSegments(re);
    }, me = () => {
      _ && _.drawShapes();
    }, ke = () => {
      _ && (_.drawStock(), w());
    }, Ae = () => {
      _ && (_.toggleSegments(!1), _.resetCuts());
    }, je = (re) => {
      _ && (_.toggleSegments(!0), _.showCut(re));
    }, ye = (re) => _ ? _.drawPositions(re) : !1, _e = () => {
      _ && _.removePositions();
    }, J = (re) => {
      _ && _.findShape(re);
    }, Qe = () => {
      _ && _.clearSelection();
    }, Ze = (re) => _ ? _.requiresStretch(re) : !1, ot = (re) => {
      _?.options && (_.options.enableStretch = re, _.setAspectRatio(), _.drawAll(), w());
    }, rt = () => _?.options?.enableStretch ?? !0;
    return qe(() => E.debug, (re) => {
      _?.state && (_.state.debug = re);
    }), e({
      loaded: L,
      toggleShapes: ne,
      toggleCuts: ae,
      toggleSegments: ce,
      drawShapes: me,
      drawStock: ke,
      drawPositions: ye,
      resetPositions: _e,
      findShape: J,
      clearSelection: Qe,
      resetCuts: Ae,
      showCut: je,
      requiresStretch: Ze,
      setEnableStretch: ot,
      getEnableStretch: rt,
      state: E,
      get stretched() {
        return E.stretched;
      },
      set moving(re) {
        _?.state && (_.state.moving = re);
      }
    }), (re, et) => (v(), T("div", {
      id: t.elementId,
      ref_key: "diagramContainerRef",
      ref: B,
      class: Be([{ app: t.app }, "diagram-container"])
    }, null, 10, dm));
  }
}), pm = { class: "action-menu" }, hm = ["textContent"], gm = {
  key: 0,
  class: "menu-divider"
}, mm = {
  key: 1,
  class: "group-label"
}, ym = /* @__PURE__ */ Ye({
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
    const i = t, s = e, { isOpen: n, close: a, toggle: o } = uu(i.menuId), r = le(), l = le(), c = ie(() => i.disabled), u = ie(() => i.label), p = ie(() => i.showLabel), d = ie(() => i.icon), { floatingStyles: h } = Rc(r, l, {
      placement: i.placement,
      whileElementsMounted: Lu,
      middleware: [
        Au(i.offset),
        Tu(),
        Ou({ padding: 8 })
      ]
    }), k = (w) => {
      if (!w) return ["fas", "question"];
      if (typeof w == "function" && (w = w(i)), Array.isArray(w))
        return w;
      if (typeof w == "string") {
        const X = w.split(" ");
        if (X.length >= 2) {
          const se = X[0], oe = X.slice(1).join("-").replace("fa-", "");
          return [se, oe];
        }
        return ["fas", w.replace("fa-", "")];
      }
      return ["fas", "question"];
    }, N = ie(() => k(d.value)), q = (w) => typeof w.active == "function" ? w.active(i) : typeof w.active == "boolean" ? w.active : !1, O = (w) => {
      if (!w.href) return !1;
      try {
        const X = typeof w.href == "function" ? w.href(i) : w.href;
        return new URL(X, window.location.origin).origin !== window.location.origin;
      } catch {
        return !1;
      }
    }, G = (w) => w.href ? "a" : "div", H = (w) => {
      const X = {};
      if (w.href) {
        const se = typeof w.href == "function" ? w.href(i) : w.href;
        if (X.href = se, O(w)) {
          const oe = typeof w.target == "function" ? w.target(i) : w.target;
          X.target = oe || "_blank", X.rel = w.rel || "noopener noreferrer";
        } else if (w.target) {
          const oe = typeof w.target == "function" ? w.target(i) : w.target;
          X.target = oe;
        }
        w.rel && (X.rel = w.rel);
      }
      return w.attrs && Object.assign(X, w.attrs), X;
    }, W = ie(() => i.menuItems.map((w) => {
      const X = { ...w };
      return typeof w.href == "function" && (X.href = w.href(i)), typeof w.icon == "function" && (X.icon = w.icon(i)), typeof w.disabled == "function" && (X.disabled = w.disabled(i)), typeof w.label == "function" && (X.label = w.label(i)), typeof w.variant == "function" && (X.variant = w.variant(i)), typeof w.active == "function" && (X.active = w.active(i)), typeof w.target == "function" && (X.target = w.target(i)), typeof w.show == "function" && (X.show = w.show(i)), X;
    })), F = (w) => {
      w.stopPropagation(), w.preventDefault(), !c.value && o();
    }, B = (w, X) => {
      if (X.stopPropagation(), w.disabled && !w.href) {
        X.preventDefault();
        return;
      }
      if (typeof w.action == "function" && w.action(w) === !1 && w.href) {
        X.preventDefault();
        return;
      }
      s("action", {
        id: w.id,
        item: w
      }), w.href && i.closeOnLinkClick ? a() : w.href || a();
    }, _ = (w) => {
      const X = [];
      if (w.variant) {
        const oe = typeof w.variant == "function" ? w.variant(i) : w.variant;
        X.push(`variant-${oe}`);
      }
      if ((typeof w.disabled == "function" ? w.disabled(i) : w.disabled) && !w.href && X.push("disabled"), q(w) && X.push("active"), w.href && X.push("menu-link"), O(w) && X.push("external-link"), w.class) {
        const oe = typeof w.class == "function" ? w.class(i) : w.class;
        X.push(oe);
      }
      return X.join(" ");
    }, L = (w) => {
      const X = w.target;
      n.value && r.value && l.value && !r.value.contains(X) && !l.value.contains(X) && a();
    }, E = (w) => {
      w.key === "Escape" && n.value && a();
    };
    return Vt(() => {
      document.addEventListener("click", L), document.addEventListener("keydown", E);
    }), An(() => {
      document.removeEventListener("click", L), document.removeEventListener("keydown", E);
    }), (w, X) => (v(), T("div", pm, [
      x("div", {
        ref_key: "trigger",
        ref: r,
        onClick: F,
        class: Be(["actions-btn", { active: S(n), disabled: c.value }])
      }, [
        d.value ? (v(), Ee(S(cn), {
          key: 0,
          icon: N.value,
          class: "icon"
        }, null, 8, ["icon"])) : Z("", !0),
        p.value ? (v(), T("span", {
          key: 1,
          class: "label",
          textContent: V(u.value)
        }, null, 8, hm)) : Z("", !0)
      ], 2),
      (v(), Ee(fr, { to: "body" }, [
        S(n) && !c.value ? (v(), T("div", {
          key: 0,
          ref_key: "floating",
          ref: l,
          style: vt(S(h)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: X[0] || (X[0] = Tn(() => {
          }, ["stop"]))
        }, [
          (v(!0), T(Ne, null, Ke(W.value, (se, oe) => (v(), T(Ne, { key: oe }, [
            se.type === "divider" ? (v(), T("div", gm)) : se.type === "group" ? (v(), T("div", mm, V(se.label), 1)) : se.show !== !1 ? (v(), Ee(jc(G(se)), Li({
              key: 2,
              ref_for: !0
            }, H(se), {
              onClick: (pe) => B(se, pe),
              id: se.id,
              class: ["menu-item", _(se)],
              disabled: se.disabled && !se.href
            }), {
              default: Bi(() => [
                se.icon || q(se) ? (v(), Ee(S(cn), {
                  key: 0,
                  icon: q(se) ? ["fass", "check"] : k(se.icon)
                }, null, 8, ["icon"])) : Z("", !0),
                x("span", null, V(se.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : Z("", !0)
          ], 64))), 128))
        ], 4)) : Z("", !0),
        S(n) && !c.value ? (v(), T("div", {
          key: 1,
          class: "backdrop",
          onClick: X[1] || (X[1] = //@ts-ignore
          (...se) => S(a) && S(a)(...se))
        })) : Z("", !0)
      ]))
    ]));
  }
}), ar = (t, e, i) => {
  if (e === "unitDependent")
    if (i === "fraction") {
      if (/\/0$/.test(t))
        return {
          value: t,
          valid: !1,
          message: "division_by_zero"
        };
      const s = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(t), n = Ua(t);
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
function bm({
  props: t,
  emit: e,
  isMounted: i
}) {
  const s = le({
    isTyping: !1,
    isMouseDown: !1,
    isComposing: !1,
    lastValidValue: String(t.value ?? "")
  }), n = (r, l = !1) => {
    if (r == null || r === "") {
      const u = t.required && !t.disableRequiredValidation;
      return t.type === "string" ? u ? { value: null, valid: !1, message: "field_required" } : { value: r === null ? null : "", valid: !0 } : Ed(r, "decimal", u);
    }
    const c = String(r);
    switch (t.type) {
      case "string":
        return { value: c, valid: !0 };
      case "unitDependent":
        if (l)
          return ar(c, t.type, t.numberFormat);
        try {
          const u = K({
            v: r,
            nf: t.numberFormat,
            dp: t.decimalPlaces,
            fr: t.fractionRoundTo
          });
          if (typeof u == "number") {
            let p = u, d = !0, h;
            return typeof t.min == "number" && p < t.min && (p = t.min, d = !1, h = "below_min"), typeof t.max == "number" && p > t.max && (p = t.max, d = !1, h = "above_max"), { value: p, valid: d, message: h };
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
          return ar(c, t.type);
        try {
          const p = K({
            v: r,
            nf: "decimal"
          });
          if (p === null)
            return t.required && !t.disableRequiredValidation ? { value: null, valid: !1, message: "errors.validation.field.required" } : { value: null, valid: !0 };
          let d = p;
          if (t.type === "integer" && (d = Math.round(d)), t.allowZero === !1 && d === 0)
            return {
              value: d,
              valid: !1,
              message: "zero_not_allowed"
            };
          let h = !0, k;
          return typeof t.min == "number" && d < t.min && (d = t.min, h = !1, k = "below_min"), typeof t.max == "number" && d > t.max && (d = t.max, h = !1, k = "above_max"), { value: d, valid: h, message: k };
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
  }, a = (r, l = !1) => l && t.type === "unitDependent" && t.numberFormat === "fraction" ? !1 : l && (t.type === "integer" || t.type === "float" || t.type === "unitDependent" && t.numberFormat === "decimal") ? typeof r.value == "number" && r.valid : !!(r.valid || r.message === "zero_not_allowed" || r.message === "below_min" || r.message === "above_max" || r.message === "errors.validation.field.required" && !t.disableRequiredValidation);
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
          const u = n(l.value, !1);
          a(u, !1) && (e("update:value", u.value), e("validation", u, t.id)), s.value.isMouseDown = !1;
          return;
        }
        s.value.isTyping = !0;
        const c = n(l.value, !0);
        e("validation", c, t.id), e("input", l.value), a(c, !0) && e("update:value", c.value);
      },
      handleBlur: (r) => {
        if (!i.value) return;
        s.value.isTyping = !1;
        const l = r.target, c = n(l.value, !1);
        e("validation", c, t.id), a(c) && (e("update:value", c.value), s.value.lastValidValue = String(c.value ?? "")), e("blur", r);
      },
      handleFocus: (r) => {
        i.value && (s.value.isTyping = !0, e("focus", r));
      },
      handleKeydown: (r) => {
        if (i.value && !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(r.key)) {
          if (!["Backspace", "Delete", "Tab", "Enter", "Escape"].includes(r.key))
            if (t.type === "unitDependent" && t.numberFormat === "fraction") {
              const l = r.target, c = l.value, u = l.selectionStart || 0, p = c.substring(0, u);
              if (r.key === "/" && c.includes("/")) {
                r.preventDefault();
                return;
              }
              if (r.key === " " && /\s$/.test(p)) {
                r.preventDefault();
                return;
              }
              /^[-0-9\s/]$/.test(r.key) || r.preventDefault();
            } else (t.type === "integer" || t.type === "float") && ((t.type === "integer" ? /^[-0-9]$/.test(r.key) : /^[-0-9.]$/.test(r.key)) || r.preventDefault());
          if (r.key === "Enter") {
            s.value.isTyping = !1;
            const l = r.target, c = n(l.value, !1);
            e("validation", c, t.id), a(c) && (e("update:value", c.value), s.value.lastValidValue = String(c.value ?? "")), e("enter", c);
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
        const l = r.target, c = n(l.value, !1);
        e("validation", c, t.id), a(c) && (e("update:value", c.value), s.value.lastValidValue = String(c.value ?? ""));
      },
      handlePaste: (r) => {
        if (!i.value) return;
        const l = r.clipboardData?.getData("text")?.trim() || "";
        if (t.type === "unitDependent" && t.numberFormat === "fraction") {
          const c = l.replace(/[""'']/g, "").replace(/\s+/g, " ");
          if (!Ua(c)) {
            r.preventDefault(), e("validation", {
              value: c,
              valid: !1,
              message: `Pasted text "${l}" is not a valid fraction format`
            }, t.id);
            return;
          }
          if (c !== l) {
            r.preventDefault();
            const u = r.target;
            u.value = c;
            const p = n(c, !0);
            e("validation", p, t.id), e("input", c);
          }
        }
        e("paste", r);
      }
    },
    processValue: n
  };
}
function vm({
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
function wm({
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
const Sm = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], km = /* @__PURE__ */ Ye({
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
    const i = t, s = e, n = le(!0), a = le(null), o = ie(() => i.value === i.trueValue), {
      handleCheckboxChange: r,
      handleFocus: l,
      handleBlur: c
    } = wm({
      props: i,
      emit: s,
      isMounted: n
    });
    return (u, p) => (v(), T("input", {
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
      onChange: p[0] || (p[0] = //@ts-ignore
      (...d) => S(r) && S(r)(...d)),
      onFocus: p[1] || (p[1] = //@ts-ignore
      (...d) => S(l) && S(l)(...d)),
      onBlur: p[2] || (p[2] = //@ts-ignore
      (...d) => S(c) && S(c)(...d))
    }, null, 40, Sm));
  }
}), xm = ["for"], Zs = /* @__PURE__ */ Ye({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(t) {
    return (e, i) => (v(), T("label", {
      for: t.id,
      class: "input-label"
    }, V(t.label), 9, xm));
  }
}), Im = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Pm = ["disabled", "selected"], Cm = {
  key: 0,
  value: " "
}, Am = ["hidden", "value", "disabled"], Tm = /* @__PURE__ */ Ye({
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
    const i = t, s = e, n = le(!0), a = le(null), o = ie(() => i.options.map((l) => ({
      value: l.value,
      label: l.label?.toUpperCase() ?? l.value?.toString()?.toUpperCase(),
      hidden: l.hidden ?? !1,
      disabled: l.disabled ?? !1
    }))), {
      handleSelectChange: r
    } = vm({
      props: i,
      emit: s,
      isMounted: n
    });
    return (l, c) => (v(), T("select", Li(l.$attrs, {
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
      (...u) => S(r) && S(r)(...u))
    }), [
      x("option", {
        value: "",
        disabled: i.selectFirstOptionDisabled,
        selected: !i.value
      }, V(i.text?.select?.toUpperCase() ?? "SELECT"), 9, Pm),
      i.multiEdit ? (v(), T("option", Cm, V(i.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : Z("", !0),
      (v(!0), T(Ne, null, Ke(o.value, (u) => (v(), T("option", {
        key: u.value,
        hidden: u.hidden,
        value: u.value,
        disabled: u.disabled
      }, V(u.label), 9, Am))), 128))
    ], 16, Im));
  }
}), Om = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "autocomplete", "aria-label", "aria-invalid", "aria-describedby"], Ra = /* @__PURE__ */ Ye({
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
    autocomplete: {},
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
      handleInput: o,
      handleMouseDown: r,
      handleMouseUp: l,
      handleFocus: c,
      handleBlur: u,
      handleKeydown: p,
      handleCompositionStart: d,
      handleCompositionEnd: h,
      handlePaste: k
    } = bm({
      props: i,
      emit: s,
      isMounted: n
    }), N = (q) => {
      const O = q.getBoundingClientRect(), G = window.getComputedStyle(q);
      return O.width > 0 && O.height > 0 && G.display !== "none" && G.visibility !== "hidden";
    };
    return Vt(() => {
      ($e(i.default) && i.value === void 0 || i.value === null) && s("update:value", i.default), i.focus && a.value && N(a.value) && It(() => a.value.focus());
    }), An(() => {
      n.value = !1;
    }), (q, O) => (v(), T("input", Li(q.$attrs, {
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
      autocomplete: i.autocomplete,
      "aria-label": i.ariaLabel,
      "aria-invalid": !!i.issue,
      "aria-describedby": i.errorId,
      onInput: O[0] || (O[0] = //@ts-ignore
      (...G) => S(o) && S(o)(...G)),
      onFocus: O[1] || (O[1] = //@ts-ignore
      (...G) => S(c) && S(c)(...G)),
      onBlur: O[2] || (O[2] = //@ts-ignore
      (...G) => S(u) && S(u)(...G)),
      onKeydown: O[3] || (O[3] = //@ts-ignore
      (...G) => S(p) && S(p)(...G)),
      onCompositionstart: O[4] || (O[4] = //@ts-ignore
      (...G) => S(d) && S(d)(...G)),
      onCompositionend: O[5] || (O[5] = //@ts-ignore
      (...G) => S(h) && S(h)(...G)),
      onPaste: O[6] || (O[6] = //@ts-ignore
      (...G) => S(k) && S(k)(...G)),
      onMousedown: O[7] || (O[7] = //@ts-ignore
      (...G) => S(r) && S(r)(...G)),
      onMouseup: O[8] || (O[8] = //@ts-ignore
      (...G) => S(l) && S(l)(...G))
    }), null, 16, Om));
  }
}), Lm = ["data-field-id"], _m = {
  key: 0,
  class: "input-label-group"
}, $m = {
  key: 1,
  class: "password-input-wrapper"
}, Fm = ["aria-label"], Dm = ["disabled", "selected"], Em = {
  key: 0,
  value: " "
}, Mm = ["hidden", "value", "disabled"], Rm = ["id", "value", "disabled"], jm = ["id", "value", "placeholder", "disabled", "readonly", "required", "rows", "autocomplete"], Vm = {
  key: 2,
  class: "help-text"
}, $i = /* @__PURE__ */ Ye({
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
    autocomplete: { default: void 0 },
    disableRequiredValidation: { type: Boolean, default: !1 },
    rows: { default: 3 },
    info: { default: "" }
  },
  emits: ["update:value", "validation", "blur"],
  setup(t, { emit: e }) {
    const i = e, s = t, n = le(null), a = le(null), o = le(!0), r = le(s.numberFormat), l = le(!1), c = ie(() => s.custom ? "custom-" + s.id : s.id), u = ie(() => `${c.value}-error`), p = ie(() => s.label || s.placeholder), d = ie(() => X(s.type, s.numberFormat, l.value)), h = ie(() => se(s.type, s.numberFormat)), k = ie(() => ["string", "integer", "float", "unitDependent", "password"].includes(s.type)), N = ie(() => {
      let M = s.value;
      if (s.multiEdit && (M === 0 || M === 1)) return null;
      if (s.type !== "unitDependent" || !M) return M;
      try {
        return K({ v: M, nf: s.numberFormat });
      } catch {
        return s.numberFormat === "decimal" ? 0 : "0";
      }
    }), q = ie(() => s.options.map((M) => ({
      value: M.value,
      label: M.label || M.value?.toString(),
      hidden: M.hidden || !1,
      disabled: M.disabled || !1
    }))), O = ie(() => q.value.map((M) => {
      const U = M.label ? R(M.label) : M.value?.toString();
      return {
        ...M,
        // Translate the label key first, then uppercase the translated result
        label: U?.toUpperCase() || M.value?.toString().toUpperCase()
      };
    })), G = ie(() => ({
      input: !0,
      issue: s.issue || !o.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), H = ie(() => ({
      id: c.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": p.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? u.value : void 0
    })), W = ie(() => ({
      ...H.value,
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
      disableRequiredValidation: s.disableRequiredValidation,
      autocomplete: s.autocomplete
    })), F = ie(() => ({
      ...H.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), B = ie(() => ({
      ...H.value,
      options: O.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      numberFormat: s.numberFormat,
      text: s.text,
      output: s.output
    })), _ = ie(() => (s.text?.select || "SELECT").toUpperCase()), L = ie(() => (s.text?.delete || "DELETE").toUpperCase()), E = (M) => {
      a.value = M;
    }, w = (M) => s.label && s.enableLabel && s.labelPosition === M, X = (M, U, ne) => {
      switch (M) {
        case "integer":
        case "float":
          return "number";
        case "unitDependent":
          return U === "fraction" ? "text" : "number";
        case "password":
          return ne ? "text" : "password";
        case "string":
        default:
          return "text";
      }
    }, se = (M, U) => {
      if (M === "unitDependent")
        return U === "fraction" ? "text" : "decimal";
      switch (M) {
        case "integer":
          return "numeric";
        case "float":
          return "decimal";
        case "string":
          return "text";
        default:
          return "text";
      }
    }, oe = (M) => {
      i("update:value", M);
    }, pe = (M, U) => {
      M.valid === void 0 || M.valid === !0 ? (o.value = !0, i("validation", n.value, M)) : M.valid === !1 && M.message && (o.value = !1, console.warn(`Field validation error for field ${U} - ${M.message}`), i("validation", n.value, M));
    }, Q = () => {
      i("blur");
    };
    return qe(() => s.numberFormat, (M, U) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && M !== U && s.value !== null && s.value !== void 0 && s.value !== "")
          try {
            const ne = K({ v: s.value, nf: M });
            i("update:value", ne);
          } catch {
            i("update:value", M === "decimal" ? 0 : "0");
          }
        r.value = M;
      }
    }), (M, U) => (v(), T("div", {
      ref_key: "fieldRef",
      ref: n,
      class: Be(["input-wrapper", G.value]),
      "data-field-id": c.value
    }, [
      t.type === "checkbox" ? (v(), T("div", _m, [
        w("first") ? (v(), Ee(Zs, {
          key: 0,
          id: c.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : Z("", !0),
        t.type === "checkbox" ? (v(), Ee(km, Li({
          key: 1,
          ref: E,
          type: "checkbox"
        }, F.value, {
          value: t.value,
          "onUpdate:value": U[0] || (U[0] = (ne) => i("update:value", ne))
        }), null, 16, ["value"])) : Z("", !0),
        w("last") ? (v(), Ee(Zs, {
          key: 2,
          id: c.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : Z("", !0)
      ])) : (v(), T(Ne, { key: 1 }, [
        w("first") ? (v(), Ee(Zs, {
          key: 0,
          id: c.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : Z("", !0),
        t.type === "password" ? (v(), T("div", $m, [
          Ve(Ra, Li({ ref: E }, W.value, {
            "input-type": d.value,
            "input-mode": h.value,
            value: N.value,
            "disable-required-validation": t.disableRequiredValidation,
            onValidation: pe,
            "onUpdate:value": oe,
            onBlur: Q
          }), null, 16, ["input-type", "input-mode", "value", "disable-required-validation"]),
          x("button", {
            type: "button",
            class: "password-toggle c-btn--unstyled",
            "aria-label": l.value ? "Hide password" : "Show password",
            onClick: U[1] || (U[1] = (ne) => l.value = !l.value)
          }, V(l.value ? "🙈" : "👁"), 9, Fm)
        ])) : k.value ? (v(), Ee(Ra, Li({
          key: 2,
          ref: E
        }, W.value, {
          "input-type": d.value,
          "input-mode": h.value,
          value: N.value,
          "disable-required-validation": t.disableRequiredValidation,
          onValidation: pe,
          "onUpdate:value": oe,
          onBlur: Q
        }), null, 16, ["input-type", "input-mode", "value", "disable-required-validation"])) : t.type === "select" ? (v(), Ee(Tm, Li({
          key: 3,
          ref: E
        }, B.value, {
          "onUpdate:value": U[2] || (U[2] = (ne) => i("update:value", ne))
        }), {
          default: Bi(() => [
            x("option", {
              value: "",
              disabled: t.selectFirstOptionDisabled,
              selected: !t.value
            }, V(_.value), 9, Dm),
            t.multiEdit ? (v(), T("option", Em, V(L.value), 1)) : Z("", !0),
            (v(!0), T(Ne, null, Ke(O.value, (ne) => (v(), T("option", {
              key: ne.value,
              hidden: ne.hidden,
              value: ne.value,
              disabled: ne.disabled
            }, V(ne.label), 9, Mm))), 128))
          ]),
          _: 1
        }, 16)) : t.type === "color" ? (v(), T("input", {
          key: 4,
          id: c.value,
          ref: E,
          type: "color",
          value: t.value,
          disabled: t.disabled,
          onInput: U[3] || (U[3] = (ne) => i("update:value", ne.target.value))
        }, null, 40, Rm)) : t.type === "textarea" ? (v(), T("textarea", {
          key: 5,
          id: c.value,
          ref: E,
          value: t.value,
          placeholder: t.placeholder,
          disabled: t.disabled,
          readonly: t.readonly,
          required: t.required,
          rows: t.rows,
          autocomplete: t.autocomplete,
          onInput: U[4] || (U[4] = (ne) => i("update:value", ne.target.value))
        }, null, 40, jm)) : Z("", !0),
        w("last") ? (v(), Ee(Zs, {
          key: 6,
          id: c.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : Z("", !0)
      ], 64)),
      t.info ? (v(), T("small", Vm, V(t.info), 1)) : Z("", !0),
      un(M.$slots, "default")
    ], 10, Lm));
  }
}), Bm = {
  key: 0,
  class: "action-bar"
}, Nm = { class: "add-custom" }, Gm = ["disabled"], qm = ["disabled", "title", "onClick"], zm = {
  key: 1,
  class: "price"
}, Wm = /* @__PURE__ */ Ye({
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
      supportsFaces: o,
      supportsSides: r,
      canDelete: l,
      getLocationLabel: c,
      getInputType: u,
      getInputConfigForLocation: p,
      getSelectOptions: d,
      getPriceDisplay: h,
      shouldShowDeleteButton: k,
      getLocationGroup: N,
      isLocationVisible: q,
      handleInputChange: O,
      handleDelete: G
    } = du({
      shape: ti(i, "shape"),
      extraType: i.extraType,
      allOptions: i.allOptions,
      labels: i.labels,
      userFriendlyFieldMap: i.userFriendlyFieldMap,
      allowCustomNames: i.allowCustomNames,
      customNames: ti(i, "customNames"),
      enablePricing: i.enablePricing,
      pricing: i.pricing,
      orientationModel: i.orientationModel,
      stockGrain: i.stockGrain,
      getAvailablePricingOptions: i.getAvailablePricingOptions,
      getPrice: i.getPrice,
      formatPrice: i.formatPrice,
      findExtrasPrice: i.findExtrasPrice,
      locations: ti(i, "locations"),
      locationGroups: ti(i, "locationGroups")
    }), {
      newCustomName: H,
      canAddCustomName: W,
      isActionMenuDisabled: F,
      customNameActions: B,
      handleAddCustomName: _,
      handleCustomNameAction: L
    } = fu({
      extraType: i.extraType,
      customNames: ti(i, "customNames"),
      usedNames: ti(i, "usedNames"),
      allowCustomNames: i.allowCustomNames,
      getSelectOptions: d,
      onCustomNameAdded: (ne) => s("custom-name-added", i.extraType, ne),
      onCustomNameDeleted: (ne) => s("custom-name-deleted", i.extraType, ne)
    }), {
      renderLocations: E,
      gridStyle: w,
      getInputId: X,
      getDeleteConfig: se
    } = pu({
      extraType: i.extraType,
      allOptions: i.allOptions,
      labels: i.labels,
      shapeIndex: i.shapeIndex || 0,
      enablePricing: i.enablePricing,
      mode: n,
      shouldShowAll: a,
      getInputType: u,
      getInputConfig: (ne, ae) => p(ne, ae),
      getAllInputConfig: (ne) => p("all", ne),
      getInputConfigForLocation: p,
      canDelete: l,
      getLocationLabel: c,
      shouldShowDeleteButton: k,
      locations: ti(i, "locations"),
      locationGroups: ti(i, "locationGroups"),
      shape: ti(i, "shape"),
      orientationModel: i.orientationModel
    }), oe = le(!1), pe = ie(() => (ne) => {
      const ae = N(ne);
      return ae === "all" || ae === "faces" || ae === "sides";
    }), Q = ie(() => (ne) => Aa(i.extraType).includes(ne) ? Ro(ne) === "face" : !1), M = ie(() => (ne) => Aa(i.extraType).includes(ne) ? Ro(ne) === "side" : !1), U = ie(() => (ne) => i.shape.issues?.some((ae) => ae.category?.includes("extras") && ae.field?.some((ce) => ce[0] === "extras" && ce[1] === i.extraType && ce[2] === ne)) ?? !1);
    return Vt(() => {
      const ae = i.shape.extras?.[i.extraType];
      if (!ae || typeof ae != "object") {
        oe.value = !0, console.error(`Missing or invalid ${i.extraType} in shape`);
        return;
      }
      if (o.value && !("faces" in ae)) {
        oe.value = !0, console.error(`Missing faces property in ${i.extraType}`);
        return;
      }
      if (r.value && !("sides" in ae)) {
        oe.value = !0, console.error(`Missing sides property in ${i.extraType}`);
        return;
      }
    }), (ne, ae) => {
      const ce = wi("FontAwesomeIcon");
      return oe.value ? Z("", !0) : (v(), T("div", {
        key: 0,
        class: Be(["extras group", [t.extraType]]),
        style: vt({ "grid-column-end": "span " + t.partColumns })
      }, [
        t.allowCustomNames ? (v(), T("div", Bm, [
          x("div", Nm, [
            Ve(Ra, {
              id: `${t.extraType}-custom-input-${t.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: S(H),
              placeholder: `Add ${t.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": ae[0] || (ae[0] = (me) => H.value = me || ""),
              onKeydown: Vc(S(_), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            x("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !S(W),
              onClick: ae[1] || (ae[1] = //@ts-ignore
              (...me) => S(_) && S(_)(...me))
            }, " Add ", 8, Gm)
          ]),
          Ve(ym, {
            "menu-items": S(B),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: S(F),
            onAction: S(L)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : Z("", !0),
        x("div", {
          class: "inputs grid-layout",
          style: vt({ "grid-template-columns": S(w) })
        }, [
          (v(!0), T(Ne, null, Ke(S(E), (me) => (v(), T(Ne, { key: me }, [
            S(q)(me) ? (v(), T(Ne, { key: 0 }, [
              x("div", {
                class: Be(["label", {
                  "group-label": pe.value(me),
                  "face-label": Q.value(me),
                  "side-label": M.value(me),
                  "has-validation-issue": U.value(me)
                }])
              }, V(S(c)(me)), 3),
              (v(!0), T(Ne, null, Ke(t.allOptions, (ke, Ae) => (v(), T("div", {
                key: `${me}-${Ae}`,
                class: "input-cell"
              }, [
                Ve($i, Li({
                  id: S(X)(me, Ae),
                  "data-field": `${t.extraType}-${me}`,
                  "data-index": t.shapeIndex,
                  "data-option-index": Ae
                }, { ref_for: !0 }, S(p)(me, Ae), {
                  "onUpdate:value": (je) => S(O)(me, Ae, je)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"])
              ]))), 128)),
              S(se)(me).show ? (v(), T("button", {
                key: 0,
                type: "button",
                class: "c-btn c-btn--delete",
                disabled: !S(se)(me).enabled,
                title: S(se)(me).ariaLabel,
                onClick: (ke) => S(G)(me)
              }, [
                Ve(ce, { icon: ["fass", "trash"] })
              ], 8, qm)) : Z("", !0),
              t.enablePricing ? (v(), T("div", zm, V(S(h)(me)), 1)) : Z("", !0)
            ], 64)) : Z("", !0)
          ], 64))), 128))
        ], 4)
      ], 6));
    };
  }
}), rn = /* @__PURE__ */ Mt(Wm, [["__scopeId", "data-v-5c40d310"]]), Um = {
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
}, Hm = { id: "spinner" }, Ym = ["width", "height"], Km = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function Zm(t, e, i, s, n, a) {
  return v(), T("div", Hm, [
    i.complete ? Z("", !0) : (v(), T("svg", {
      key: 0,
      class: "loading",
      style: vt({ width: i.size + "px", height: i.size + "px" }),
      width: i.size,
      height: i.size,
      viewBox: "0 0 300 300"
    }, [...e[0] || (e[0] = [
      pr('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ])], 12, Ym)),
    i.complete ? (v(), T("svg", {
      key: 1,
      class: "complete",
      style: vt({ width: i.size + "px", height: i.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[1] || (e[1] = [
      x("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ])], 4)) : Z("", !0),
    i.showNumber ? (v(), T("div", Km, V(i.number), 1)) : Z("", !0)
  ]);
}
const or = /* @__PURE__ */ Mt(Um, [["render", Zm]]);
j({
  // Context - using z.any() for complex external types
  job: we().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: m().nullable().default(null).describe("Socket.io connection ID"),
  user: we().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: we().describe("Configuration object"),
  // Type: Config
  api: z().nullable().default(null).describe("API mode flag"),
  app: z().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: De("Saw").describe("Saw configuration"),
  stockList: He("Stock").default([]).describe("List of stock materials"),
  shapeList: Xs(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: He("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: He("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: He("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: Xs(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: Xs(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: Ln,
  // Results storage
  cutList: He("Cut").default([]).describe("List of cuts to make"),
  segmentList: He("Segment").default([]).describe("List of segments"),
  offcuts: He("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: He("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: z().default(!1).describe("Use inventory system"),
  successMetric: m().default(Bf.successMetric).describe("Metric for optimization success"),
  enableEvo: z().default(!0).describe("Enable evolutionary algorithm"),
  weighting: ve(m(), we()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: we().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: we().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: j({
    placement: f().default(0),
    group: f().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: z().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: z().default(!1).describe("Run guillotine second pass"),
  runningEvo: z().default(!1).describe("Currently running evolution"),
  evolutionVisData: ee(ve(m(), au())).default([]).describe("Evolution visualization data"),
  final: z().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: z().default(!1).describe("Has minimum spacing requirement")
});
const Jm = Ce(["decimal", "fraction"]), Xm = j({
  job: we().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Allow additional properties like __entityType and autoId
  inputSaw: mi,
  inputShapes: ee(yi),
  inputStock: ee(Ht),
  inputUserGroups: ee(Vn).optional(),
  // Number format for conversion
  numberFormat: Jm.optional(),
  // Algorithm configuration
  enableEvo: z().default(!0),
  weighting: we().optional(),
  successMetric: m().optional(),
  useInventory: z().default(!1),
  // Context
  socketId: m().optional(),
  user: we().optional(),
  // IUser type
  // Application flags
  widget: z().optional(),
  api: z().optional(),
  app: z().optional(),
  domain: m().optional(),
  // Extras options (centralized configuration)
  extrasOptions: j({
    banding: j({
      options: j({
        sides: ve(m(), ee(m())).optional()
      }).optional()
    }).optional(),
    finish: j({
      options: j({
        faces: ve(m(), ee(m())).optional()
      }).optional()
    }).optional(),
    planing: j({
      options: j({
        sides: ve(m(), ee(m())).optional(),
        faces: ve(m(), ee(m())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // API specific
  config: we().optional(),
  v: f().optional(),
  // API version
  webhook: m().optional(),
  //source
  sourceVersion: m().nullish(),
  source: m().optional()
});
j({
  job: we().optional(),
  // Type: Job from BullMQ
  saw: we(),
  // Runtime Saw instance
  shapeList: ee(we()),
  // Runtime Shape instances
  stockList: ee(we()),
  // Runtime Stock instances
  userGroups: ee(we()).optional(),
  // Runtime Group instances
  enableEvo: z(),
  weighting: we().optional(),
  successMetric: m().optional(),
  useInventory: z(),
  socketId: m().optional(),
  user: we().optional(),
  widget: z().optional(),
  api: z().optional(),
  app: z().optional(),
  domain: m().optional(),
  config: we().optional(),
  v: f().optional(),
  webhook: m().optional()
});
const { addNotice: Xi } = Ts();
let pa = null;
function Qm() {
  return pa || (pa = Tl()), pa;
}
function rr(t) {
  return t.filter((e) => e?.l || e?.w);
}
async function ey(t) {
  const e = t.t, i = [];
  try {
    const { inputs: s, validateInputShapes: n, validateInputStock: a } = Qm(), o = t.inputShapes ?? s.inputShapes.value, r = t.inputStock ?? s.inputStock.value, l = t.inputUserGroups ?? s.inputUserGroups?.value ?? [], c = rr(o), u = rr(r);
    if (!t.isAdmin && !t.shared && t.maxShapes !== 1 / 0) {
      const q = c.reduce((G, H) => G + (H.q || 1), 0), O = u.reduce((G, H) => G + (H.q || 1), 0);
      if (q > t.maxShapes || O > t.maxStock)
        return Xi({
          type: "error",
          message: e("errors.validation.above_max_parts")
        }), t.onLimit?.(), { valid: !1, issues: i };
    }
    if (!c.length)
      return Xi({
        type: "error",
        message: e("errors.validation.no_parts_list")
      }), { valid: !1, issues: i };
    if (!t.useInventory && !u.length)
      return Xi({
        type: "error",
        message: e("errors.validation.no_stock")
      }), { valid: !1, issues: i };
    let p;
    if (t.useInventory && t.selectedSaw)
      p = t.selectedSaw;
    else if (t.inputSaw instanceof fi) {
      const q = t.inputSaw.validate();
      i.push(...q), p = t.inputSaw.toData();
    } else {
      p = t.inputSaw;
      const q = new dl(p);
      i.push(...q.issues);
    }
    const d = n({
      saw: p,
      partTrim: K({ v: t.partTrim }),
      useInventory: t.useInventory,
      inputShapesOverride: c
    });
    if (i.push(...d), t.useInventory) {
      if (t.materialStore)
        for (const q of c)
          q.material || i.push(new he({
            item: q,
            category: ["part"],
            message: "errors.validation.business.no_material"
          }));
    } else {
      const q = a(p);
      i.push(...q);
    }
    if (l.length > 0) {
      l.forEach((O) => O.populateParentID(c));
      const q = Lh(l, c);
      i.push(...q);
    }
    await ty(c, t, i);
    const h = Wr(i);
    if (h.length > 0) {
      const q = {
        saw: h.filter((O) => O.category?.includes("saw")),
        stock: h.filter((O) => O.category?.includes("stock")),
        part: h.filter((O) => O.category?.includes("part") && !O.category?.includes("extras")),
        extras: h.filter((O) => O.category?.includes("extras")),
        group: h.filter((O) => O.category?.includes("group"))
      };
      for (const [O, G] of Object.entries(q))
        if (G.length > 0) {
          Xi({
            type: "error",
            message: e("errors.validation.inputs_issue", { 0: O }),
            additional: G.map((H) => e(H.message))
          });
          break;
        }
      return { valid: !1, issues: i };
    }
    const k = {
      inputSaw: p,
      inputShapes: c.map((q) => q.toData()),
      inputStock: u.map((q) => q.toData()),
      inputGroups: l.map((q) => q.toData()),
      enableEvo: !0,
      useInventory: t.useInventory || !1
    }, N = Xm.safeParse(k);
    return N.success ? {
      valid: !0,
      issues: i,
      sawData: p
    } : (console.error("[Validation] Zod validation failed:", N.error.issues), Xi({
      type: "error",
      message: e("errors.validation.invalid_data_structure"),
      additional: N.error.issues.map((q) => `${q.path.join(".")}: ${q.message}`)
    }), { valid: !1, issues: i });
  } catch (s) {
    return console.error("[Validation] error:", s), Xi({
      type: "error",
      message: e("errors.general.unexpected"),
      additional: [s?.message ?? ""]
    }), { valid: !1, issues: i };
  }
}
async function ty(t, e, i) {
  if (!e.findExtrasPrice)
    return;
  const s = [
    { type: "banding", pricing: e.bandingPricing },
    { type: "finish", pricing: e.finishPricing },
    { type: "planing", pricing: e.planingPricing }
  ];
  for (const n of t)
    for (const { type: a, pricing: o } of s) {
      if (e.extrasValidationRules && ut.hasExtras(n, a)) {
        const c = Hp(n, a, e.extrasValidationRules);
        c.valid || c.violations.forEach((u) => {
          const p = Yp(a, u, c.message);
          i.push(new he({
            item: n,
            category: ["part", "extras"],
            message: p,
            field: [["extras", a]],
            shouldTranslate: !1
          }));
        });
      }
      if (!o || !Object.keys(o).length)
        continue;
      const r = Up(n, a, o, e.findExtrasPrice);
      r.valid || r.incompleteLocations.forEach((l) => {
        i.push(new he({
          item: n,
          category: ["part", "extras"],
          message: "errors.extras.selection_incomplete",
          params: {
            extraType: `extras.${a}`,
            // Translation key for extra type (banding, finish, planing)
            location: dt(l, { returnKey: !0 })
            // Translation key for location
          },
          field: [["extras", a, l]]
        }));
      });
    }
}
const ln = j({
  // Unique identifier for this group (used internally)
  id: m().min(1),
  // Display label for the group (shown in UI)
  label: m().min(1),
  // Array of location strings in this group
  // Examples: ['side.l1', 'side.l2'], ['face.a', 'face.b']
  locations: ee(m().min(1)).min(1),
  // Optional price override for this group
  // When set, this price will be used instead of calculating from individual locations
  price: f().optional(),
  // Hide individual location inputs when this group is enabled
  // When true, only shows the group control, hiding the individual face/side inputs
  hideIndividualLocations: z().optional().default(!1)
}), iy = j({
  banding: ee(ln).optional(),
  finish: ee(ln).optional(),
  planing: ee(ln).optional()
}).optional();
class Ci extends Error {
  constructor(e, i) {
    super(e), this.code = i, this.name = "FormulaError";
  }
}
class ja {
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
      const r = this.evaluate(e.condition, i), l = this.evaluate(e.trueExpr, i), c = this.evaluate(e.falseExpr, i);
      return r ? l : c;
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
      if (i === 0) throw new Ci("Division by zero", "DIVISION_BY_ZERO");
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
      const [c, u] = l.split(".");
      if (!e.nodes.has(l)) {
        const N = n[c];
        if (N)
          return u === "q" ? N.q : N[u];
        throw new Error(`Node not found: ${l}`);
      }
      if (o.has(l))
        throw new Error(`Circular dependency detected at ${l}`);
      const p = e.nodes.get(l);
      if (typeof p.formula == "number")
        return a.set(l, p.formula), p.formula;
      o.add(l);
      const d = e.edges.get(l) || /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map();
      for (const N of d)
        if (N.startsWith("input.")) {
          const q = N.split(".")[1];
          h.set(N, s[q]);
        } else
          h.set(N, r(N));
      const k = this.evaluateFormulaWithDeps(p.formula, h, s);
      return a.set(l, k), o.delete(l), k;
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
    if (!this.spec?.inputs) throw new Ci("No input specifications defined", "NO_INPUTS");
    for (const [i, s] of Object.entries(this.spec.inputs)) {
      const n = e[i];
      if (n === void 0)
        throw new Ci(`Missing required input: ${i}`, "MISSING_INPUT");
      if (n < s.min || n > s.max)
        throw new Ci(`Input ${i} value ${n} out of range [min: ${s.min}, max: ${s.max}]`, "INPUT_OUT_OF_RANGE");
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
      throw new Ci("No input specifications defined", "NO_INPUTS");
    const i = Object.keys(this.spec.inputs);
    if (e.length !== i.length)
      throw new Ci(`Expected ${i.length} fields, got ${e.length}`, "INVALID_FIELD_COUNT");
    let s = 0;
    for (const n of e) {
      const a = i[s], o = this.spec.inputs[a];
      if (n.value === null || n.value === void 0)
        throw new Ci(`Missing value for field ${s}`, "MISSING_FIELD_VALUE");
      if (n.value < o.min || n.value > o.max)
        throw new Ci(`Field ${s} value ${n.value} out of range [min: ${o.min}, max: ${o.max}]`, "FIELD_OUT_OF_RANGE");
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
const ha = j({
  min: f().min(0).optional(),
  max: f().min(0).optional()
}).optional(), ga = j({
  // Shape dimension constraints
  longSide: ha,
  shortSide: ha,
  t: ha,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: m().optional(),
  // Custom validation message (optional)
  message: m().optional()
}), sy = j({
  banding: ga.optional(),
  finish: ga.optional(),
  planing: ga.optional()
}).optional(), ny = Ce(["decimal", "fraction"]), ay = Ce(Zr), lr = Se([
  xe(0),
  xe(1),
  xe(2)
]).catch(0), oy = j({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: m().optional(),
  partB: m().optional(),
  partSelected: m().optional(),
  stock: m().optional(),
  text: m().optional(),
  // Checkout-specific colors
  button: m(),
  buttonText: m()
}), At = (t) => Ct((e) => e ?? t, z()), ry = j({
  banding: At(!1),
  finish: At(!1),
  planing: At(!1),
  orientation: At(!0),
  diagram: At(!0),
  focus: At(!0),
  machining: At(!1),
  csvImport: At(!1),
  click: At(!0),
  partName: At(!0),
  progressNumber: At(!0),
  pagination: At(!1),
  fullStock: At(!1),
  imageUpload: At(!1)
}), ly = j({
  // Localization
  locale: m().default("en-US"),
  currency: m().default("USD"),
  apiVersion: f().min(2).default(3),
  // Number formatting
  numberFormat: ny.default("decimal"),
  decimalPlaces: f().min(0).max(10).default(2),
  fractionRoundTo: f().default(0),
  // Stock configuration
  stockSelection: ay.optional(),
  stockGrain: rs.optional(),
  // Part configuration
  minSpacing: Ya.optional(),
  maxParts: f().min(0).default(0),
  orientationModel: lr.default(0),
  resultOrientationModel: lr.default(0),
  minDimension: f().min(0).default(0),
  partTrim: Ct((t) => t ?? void 0, f().min(0).optional()),
  partsPerPage: Ct((t) => t ?? void 0, f().min(1).default(10)),
  // UI configuration
  debug: z().default(!1),
  emitAPIResult: z().default(!1),
  enable: ry.optional(),
  colors: oy.optional(),
  // Custom fields
  customFields: ee(we()).optional(),
  fieldOrder: Ct((t) => t ?? void 0, ee(m()).optional()),
  // Extras location filtering
  bandingLocations: ee(la).optional(),
  finishLocations: ee(la).optional(),
  planingLocations: ee(la).optional(),
  // Extras location groups
  extrasLocationGroups: iy,
  // Extras validation rules
  extrasValidationRules: sy
}), ws = j({
  min: f().min(0).nullable().optional(),
  max: f().min(0).nullable().optional()
}).nullable().optional(), cy = j({
  // Orientation-independent dimension constraints
  // longSide = the larger of l/w, shortSide = the smaller of l/w
  longSide: ws,
  shortSide: ws,
  // Direct dimension constraints (as stored by admin panel)
  l: ws,
  w: ws,
  t: ws,
  // Cross-dimensional rules
  // For complex scenarios like "one side must be >= 100mm, the other >= 50mm"
  crossDimensionalRule: j({
    // At least one side must be >= primaryMin
    primaryMin: f().min(0).nullable().optional(),
    // The other side must be >= secondaryMin
    secondaryMin: f().min(0).nullable().optional()
  }).nullable().optional(),
  // Formula-based validation using JavaScript expression
  // Formula can reference: l, w, longSide, shortSide
  // Examples: "(l * w) > 100", "longSide >= 50"
  formula: m().nullable().optional(),
  // Custom validation message (optional)
  message: m().nullable().optional()
});
function uy(t, e) {
  const i = [], s = t.l || 0, n = t.w || 0, a = t.longSide ?? Math.max(s, n), o = t.shortSide ?? Math.min(s, n), r = (l, c, u) => {
    u != null && (u.min !== void 0 && u.min !== null && c < u.min && i.push({
      valid: !1,
      dimension: l,
      value: c,
      constraint: "min",
      limit: u.min
    }), u.max !== void 0 && u.max !== null && c > u.max && i.push({
      valid: !1,
      dimension: l,
      value: c,
      constraint: "max",
      limit: u.max
    }));
  };
  if (r("longSide", a, e.longSide), r("shortSide", o, e.shortSide), r("longSide", s, e.l), r("shortSide", n, e.w), e.crossDimensionalRule) {
    const { primaryMin: l, secondaryMin: c } = e.crossDimensionalRule, u = t.l || 0, p = t.w || 0;
    if (l != null && c != null) {
      const d = u >= l && p >= c, h = p >= l && u >= c;
      !d && !h && i.push({
        valid: !1,
        dimension: "crossDimensional",
        constraint: "crossDimensional",
        message: e.message || `At least one side must be ≥ ${l} mm and the other side must be ≥ ${c} mm`
      });
    }
  }
  return e.formula && (dy(e.formula, {
    l: t.l,
    w: t.w,
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
function dy(t, e) {
  try {
    const i = new ja({}), s = i.parse(t);
    return !!i.evaluate(s, {
      l: e.l || 0,
      w: e.w || 0,
      longSide: e.longSide || 0,
      shortSide: e.shortSide || 0
    });
  } catch (i) {
    return console.warn("Formula evaluation error:", i, "Formula:", t), !0;
  }
}
function fy(t) {
  if (t.message)
    return t.message;
  if (t.constraint === "crossDimensional")
    return t.message || "Part dimensions do not meet requirements";
  const e = t.dimension === "longSide" ? "long side" : t.dimension === "shortSide" ? "short side" : t.dimension, i = t.constraint === "min" ? "minimum" : "maximum";
  return `Part requires ${e} ${i} of ${t.limit} (current: ${t.value})`;
}
Ce([
  "full_stock",
  "part_area",
  "cut_length",
  "full_stock_plus_cut_length",
  "full_stock_plus_num_parts",
  "roll_length"
]);
const py = ve(
  m(),
  f().min(0)
).default({}), hy = j({
  banding: ee(m()).optional(),
  finish: ee(m()).optional(),
  planing: ee(m()).optional(),
  machining: ee(m()).optional()
}).optional(), gy = j({
  name: m().trim().min(1),
  thicknesses: ee(
    Se([
      m().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      f()
    ])
  ).min(1),
  widths: ee(
    Se([
      m().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      f()
    ])
  ).optional(),
  extras: hy
}), ma = j({
  labels: ee(m()).default([]),
  pricing: ve(m(), f().min(0)).default({}),
  options: we().optional(),
  keys: ee(m()).optional(),
  // if not all the default keys should be set
  locations: ee(m()).optional(),
  // available locations for this extras type
  groups: ee(ln).optional(),
  // custom location groups
  rules: we().optional()
  // validation rules for this extras type
});
j({
  success: z(),
  price: f().optional(),
  error: m().optional(),
  cacheHit: z().optional()
});
j({
  valid: z(),
  errors: ee(m()),
  warnings: ee(m())
});
j({
  pricing: py,
  labels: ee(m()),
  options: ee(ee(m())),
  // Simplified to string arrays only
  keys: ee(m()),
  maxLevels: f().min(1)
});
j({
  enableCaching: z().default(!0),
  enableLogging: z().default(!1),
  maxCacheSize: f().min(1).default(1e3)
});
const Vl = Ce(["select", "multiselect", "range", "boolean", "search"]), Bl = Ce(["asc", "desc"]), Nl = Ce(["grid", "list"]), Js = j({
  _id: m(),
  name: m(),
  pricing: ve(m(), f()).optional()
}), my = j({
  banding: ee(Js).optional(),
  finish: ee(Js).optional(),
  planing: ee(Js).optional(),
  machining: ee(Js).optional()
}).optional(), yy = j({
  // Visual (Note: color, weight, imageUrl, tags, available are now in InputStock base schema)
  name: m().optional().describe("User-friendly display name"),
  description: m().optional().describe("Detailed description"),
  // Categorization
  category: m().optional().describe("Stock category"),
  // Surface finish (e.g., "High Gloss", "Matt", "Satin")
  finish: m().optional().describe("Surface finish"),
  // Available extras from material (resolved from material.extras)
  extras: my.describe("Available extras for this stock"),
  // UI metadata
  minQuantity: f().int().positive().nullable().optional().describe("Minimum order quantity")
});
Ht.merge(yy).describe("Stock option with filtering and display metadata");
const by = j({
  field: m().describe("Property name to filter on"),
  type: Vl,
  label: m().describe("Display label"),
  custom: z().default(!1).describe("Whether this is a custom property"),
  // Range filter options
  min: f().nullable().optional().describe("Minimum value for range filter"),
  max: f().nullable().optional().describe("Maximum value for range filter"),
  step: f().nullable().optional().describe("Step size for range filter"),
  // Select filter options
  options: ee(j({
    label: m(),
    value: we()
  })).optional().describe("Predefined options for select filters"),
  // Display options
  visible: z().default(!0).describe("Whether filter is visible"),
  collapsible: z().default(!0).describe("Whether filter panel is collapsible"),
  order: f().int().nullable().optional().describe("Display order")
}), vy = j({
  field: m().describe("Field to sort by"),
  order: Bl,
  label: m().optional().describe("Display label for sort option")
}), Gl = j({
  // Filter configuration
  availableFilters: ee(by).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: ee(m()).default(["cost", "material", "t"]).describe("Sortable fields"),
  defaultSort: vy.default({
    field: "cost",
    order: "asc"
  }).describe("Default sort configuration"),
  // Display configuration
  displayMode: Nl.default("grid").describe("Default display mode"),
  itemsPerPage: f().int().positive().default(20).describe("Items per page for pagination"),
  // Feature toggles
  enableSearch: z().default(!0).describe("Enable search functionality"),
  // Selection behavior
  allowMultipleSelection: z().default(!0).describe("Allow multiple stock selection"),
  maxSelection: f().int().positive().nullable().optional().describe("Maximum number of stock items to select")
}), wy = j({
  field: m(),
  value: we(),
  type: Vl
});
j({
  // Active filters
  activeFilters: ee(wy).default([]).describe("Currently active filters"),
  // Search
  searchQuery: m().default("").describe("Current search query"),
  // Sort
  sortBy: m().default("cost").describe("Current sort field"),
  sortOrder: Bl.default("asc").describe("Current sort order"),
  // Display
  displayMode: Nl.default("grid").describe("Current display mode"),
  currentPage: f().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: ee(m()).default([]).describe("IDs of selected stock items")
});
function Sy() {
  return Gl.parse({});
}
const ql = j({
  l: f(),
  w: f(),
  t: f().nullable(),
  q: f(),
  stockId: m()
}), zl = j({
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
}), ky = j({
  l: f(),
  w: f(),
  t: f().nullable(),
  material: m().nullable(),
  orientationLock: Se([
    xe(""),
    xe("l"),
    xe("w")
  ]).nullable(),
  q: f(),
  name: m().nullable(),
  // V2 format: flat banding/finish (x1/x2/y1/y2 for banding, a/b for finish)
  banding: ve(m(), Se([m(), z()])).nullable().optional(),
  finish: ve(m(), Se([m(), z()])).nullable().optional(),
  planing: ve(m(), Se([m(), z()])).nullable().optional(),
  customData: ve(m(), we()).nullable().optional()
}), xy = j({
  id: m(),
  name: m().nullable(),
  l: f(),
  w: f(),
  t: f().nullable(),
  material: m().nullable(),
  q: f(),
  trim: j({
    x1: f(),
    x2: f(),
    y1: f(),
    y2: f()
  }).nullable().optional(),
  cost: f().nullable().optional(),
  analysis: zl.nullable().optional(),
  customData: ve(m(), we()).nullable().optional()
}), Iy = j({
  id: m().optional(),
  name: m().optional(),
  l: f(),
  w: f(),
  t: f().nullable().optional(),
  material: m().optional(),
  q: f().optional(),
  orientationLock: Se([
    xe(""),
    xe("l"),
    xe("w")
  ]).nullable().optional(),
  // V2 format: flat banding/finish
  banding: ve(m(), Se([m(), z()])).nullable().optional(),
  finish: ve(m(), Se([m(), z()])).nullable().optional(),
  planing: ve(m(), Se([m(), z()])).nullable().optional(),
  customData: ve(m(), we()).nullable().optional()
});
j({
  jobId: f(),
  metadata: qn.optional(),
  parts: ee(ky),
  stock: ee(xy),
  offcuts: ee(ql),
  inputs: j({
    parts: ee(Iy)
  }),
  apiResultV3: _l.optional()
});
const Py = j({
  l: f(),
  w: f(),
  t: f().nullable(),
  material: m().nullable(),
  orientationLock: Se([
    xe(""),
    xe("l"),
    xe("w")
  ]).nullable(),
  q: f(),
  name: m().nullable(),
  // V3 format: nested extras structure
  extras: j({
    banding: j({
      sides: ve(m(), Se([m(), z()]))
    }).nullable().optional(),
    finish: j({
      faces: ve(m(), Se([m(), z()]))
    }).nullable().optional(),
    planing: j({
      sides: ve(m(), Se([m(), z()])).optional(),
      faces: ve(m(), Se([m(), z()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: ve(m(), we()).nullable().optional()
}), Cy = j({
  id: m(),
  name: m().nullable(),
  l: f(),
  w: f(),
  t: f().nullable(),
  material: m().nullable(),
  q: f(),
  trim: j({
    l1: f(),
    l2: f(),
    w1: f(),
    w2: f()
  }).nullable().optional(),
  cost: f().nullable().optional(),
  analysis: zl.nullable().optional(),
  // New stock fields
  color: Se([
    j({
      hex: m(),
      name: m()
    }),
    m()
  ]).nullable().optional(),
  weight: f().positive().nullable().optional(),
  imageUrl: m().nullable().optional(),
  tags: ee(m()).nullable().optional(),
  available: z().nullable().optional(),
  customData: ve(m(), we()).nullable().optional()
}), Ay = j({
  id: m().optional(),
  name: m().optional(),
  l: f(),
  w: f(),
  t: f().nullable().optional(),
  material: m().optional(),
  q: f().optional(),
  orientationLock: Se([
    xe(""),
    xe("l"),
    xe("w")
  ]).nullable().optional(),
  // V3 format: nested extras structure
  extras: j({
    banding: j({
      sides: ve(m(), Se([m(), z()]))
    }).nullable().optional(),
    finish: j({
      faces: ve(m(), Se([m(), z()]))
    }).nullable().optional(),
    planing: j({
      sides: ve(m(), Se([m(), z()])).optional(),
      faces: ve(m(), Se([m(), z()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: ve(m(), we()).nullable().optional()
});
j({
  jobId: f(),
  metadata: qn.optional(),
  parts: ee(Py),
  stock: ee(Cy),
  offcuts: ee(ql),
  inputs: j({
    parts: ee(Ay)
  }),
  apiResultV3: _l.optional()
});
function Wl(t) {
  return {
    l: t.l,
    w: t.w,
    t: t.t ?? null,
    q: t.q,
    // Use stock.id to match the id property in the result's stock array
    stockId: t?.stock?.id || t?.stock?.parentId || ""
  };
}
function Ul(t) {
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
      const o = e.get(n), r = i.get(n) + 1;
      i.set(n, r), e.set(n, {
        // Sum for areaEfficiency (we'll average it at the end)
        areaEfficiency: o.areaEfficiency + (a.areaEfficiency ?? 0),
        // Sum all other fields
        finishArea: o.finishArea + (a.finishArea ?? 0),
        bandingLength: o.bandingLength + (a.bandingLength ?? 0),
        partArea: o.partArea + (a.partArea ?? 0),
        totalParts: o.totalParts + (a.totalParts ?? 0),
        stackedNumberOfCuts: o.stackedNumberOfCuts + (a.stackedNumberOfCuts ?? 0),
        numberOfCuts: o.numberOfCuts + (a.numberOfCuts ?? 0),
        stackedCutLength: o.stackedCutLength + (a.stackedCutLength ?? 0),
        cutLength: o.cutLength + (a.cutLength ?? 0),
        rollLength: o.rollLength + (a.rollLength ?? 0)
      });
    }
  }
  for (const [s, n] of e) {
    const a = i.get(s) ?? 1;
    n.areaEfficiency = n.areaEfficiency / a;
  }
  return e;
}
const Ty = j({
  stockSelection: En.optional(),
  stackingMode: Mn.optional(),
  minSpacing: Ya.optional()
}).optional(), Oy = j({
  stockType: Ce([...gn]).optional(),
  bladeWidth: Se([
    Jr,
    m()
  ]).optional(),
  cutType: Fn,
  cutPreference: Dn,
  stackHeight: $n,
  guillotineOptions: Rn,
  efficiencyOptions: jn.optional(),
  options: Ty
}).optional(), Ly = j({
  holes: f().min(0).nullable().optional(),
  corners: f().min(0).nullable().optional()
}).optional();
j({
  l: f().nullable(),
  w: f().nullable(),
  t: Se([f(), m()]).nullable().optional(),
  material: m().nullable().optional(),
  orientationLock: Se([
    xe("l"),
    xe("w"),
    xe("")
  ]).nullable().optional(),
  q: f().min(1).nullable().optional(),
  name: m().nullable().optional(),
  // Import existing schemas for extras
  banding: Hr.nullable().optional(),
  finish: Kr.nullable().optional(),
  planing: el.nullable().optional(),
  // Custom data as record
  customData: ve(m(), we()).nullable().optional(),
  stockId: m().nullable().optional()
});
const _y = j({
  // Required fields
  stock: ee(Ht).default([]),
  options: ly,
  type: m().optional(),
  // variable | simple
  materials: ee(gy).optional(),
  banding: ma.nullable().optional(),
  finish: ma.nullable().optional(),
  planing: ma.nullable().optional(),
  machining: we().optional(),
  machiningPricing: Ly,
  // DEPRECATED: bandingPricing, finishPricing, planingPricing are now in banding.pricing, finish.pricing, planing.pricing
  variations: we().optional(),
  partRules: cy.optional(),
  saw: Oy,
  stockFilter: j({
    enabled: z().optional(),
    serverMode: z().optional(),
    config: Gl.optional()
  }).optional(),
  // API configuration (for order lookup and other API features)
  api: j({
    baseUrl: m(),
    orgSlug: m(),
    isCustomDomain: z().optional()
  }).optional()
});
function $y(t) {
  const e = _y.safeParse(t);
  return {
    success: e.success,
    data: e.success ? e.data : void 0,
    error: e.success ? void 0 : e.error
  };
}
function Fy(t) {
  const e = $y(t);
  if (!e.success) {
    const i = e.error?.issues.map((s) => `${s.path.join(".")}: ${s.message}`).join(", ") || "Unknown validation error";
    throw console.error("Invalid checkout data:", JSON.stringify(t, null, 2)), console.error("Validation errors:", i), new Error(`Invalid checkout data: ${i}`);
  }
  return e.data;
}
function ei(t) {
  return t == null ? !1 : typeof t == "object" && t.value !== void 0 ? t.value : t;
}
function Dy(t) {
  if (t.extras?.banding?.sides) {
    const e = t.extras.banding.sides, i = {};
    if ($e(e.a) || $e(e.b) || $e(e.c) || $e(e.d))
      i.x1 = $e(e.a) ? ei(e.a) : !1, i.y1 = $e(e.b) ? ei(e.b) : !1, i.x2 = $e(e.c) ? ei(e.c) : !1, i.y2 = $e(e.d) ? ei(e.d) : !1;
    else {
      const n = Ea(e);
      i.x1 = $e(n.x1) ? ei(n.x1) : !1, i.x2 = $e(n.x2) ? ei(n.x2) : !1, i.y1 = $e(n.y1) ? ei(n.y1) : !1, i.y2 = $e(n.y2) ? ei(n.y2) : !1;
    }
    t.banding = i;
  }
  if (t.extras?.finish?.faces) {
    const e = t.extras.finish.faces, i = {};
    i.a = $e(e.a) ? ei(e.a) : !1, i.b = $e(e.b) ? ei(e.b) : !1, t.finish = i;
  }
  if (t.extras?.planing) {
    const e = t.extras.planing, i = {}, s = Ea(e.sides || {});
    e.sides && ($e(s.x1) && (i.x1 = s.x1), $e(s.x2) && (i.x2 = s.x2), $e(s.y1) && (i.y1 = s.y1), $e(s.y2) && (i.y2 = s.y2)), e.faces && ($e(e.faces.a) && (i.a = e.faces.a), $e(e.faces.b) && (i.b = e.faces.b)), Object.keys(i).length > 0 && (t.planing = i);
  }
  (t.extras?.banding || t.extras?.finish || t.extras?.planing) && delete t.extras;
}
function Ey(t, e = 0) {
  if (e === 0)
    return t;
  if (e === 1 || e === 2) {
    const i = Math.max(t.l, t.w), s = Math.min(t.l, t.w);
    t.w > t.l && (t.l = i, t.w = s);
  }
  return t;
}
function Hl(t, e = 0) {
  return e === 0 || t.forEach((i) => Ey(i, e)), t;
}
function My(t, e, i, s, n, a, o, r) {
  const l = Ul(s), c = e.map((d) => {
    const h = {
      l: d.l,
      w: d.w,
      t: d?.t ?? null,
      material: d.material ?? null,
      orientationLock: d.orientationLock ?? null,
      q: o?.addedPartTally?.[d.parentId] || d.q,
      name: d.name ?? null,
      customData: d.customData ?? null,
      // Always include extras properties even if not set (using API format)
      banding: Qh(),
      finish: In(),
      planing: tg()
    }, k = { ...d };
    return Dy(k), k.banding && (h.banding = k.banding), k.finish && (h.finish = k.finish), k.planing && (h.planing = k.planing), h;
  }), u = i.map((d) => {
    const h = {
      id: d.id,
      name: d?.name ?? null,
      l: d.l,
      w: d.w,
      t: d?.t ?? null,
      material: d.material ?? null,
      q: o?.usedStockTally?.[d.parentId] || d.q,
      cost: d?.cost ?? null,
      analysis: l.get(d.parentId) ?? null,
      customData: d?.customData ?? null
    };
    return d?.trim && (h.trim = Ea(d.trim)), h;
  }), p = {
    parts: a.map((d) => {
      const h = {
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
      return d.extras && (h.extras = {}, d.extras.banding?.sides && (h.extras.banding = { sides: d.extras.banding.sides }), d.extras.finish?.faces && (h.extras.finish = { faces: d.extras.finish.faces }), d.extras.planing && (h.extras.planing = {
        ...d.extras.planing.sides && { sides: d.extras.planing.sides },
        ...d.extras.planing.faces && { faces: d.extras.planing.faces }
      })), h;
    })
  };
  return r && Hl(c, r), {
    jobId: t,
    metadata: o,
    parts: c,
    stock: u,
    offcuts: n?.map(Wl) || [],
    inputs: p
  };
}
function Ry(t, e, i, s, n, a, o, r) {
  const l = Ul(s), c = e.map((d) => {
    const h = {
      l: d.l,
      w: d.w,
      t: d?.t ?? null,
      material: d.material ?? null,
      orientationLock: d.orientationLock ?? null,
      q: o?.addedPartTally?.[d.parentId] || d.q,
      name: d.name ?? null,
      customData: d.customData ?? null,
      // Always include extras structure even if not set (using internal format)
      extras: {
        banding: { sides: Da() },
        finish: { faces: In() },
        planing: eg()
      }
    };
    return d.extras && (d.extras.banding?.sides && (h.extras.banding = { sides: d.extras.banding.sides }), d.extras.finish?.faces && (h.extras.finish = { faces: d.extras.finish.faces }), d.extras.planing && (h.extras.planing = {
      sides: d.extras.planing.sides || Da(),
      faces: d.extras.planing.faces || In()
    })), h;
  }), u = i.map((d) => ({
    id: d.id,
    name: d?.name ?? null,
    l: d.l,
    w: d.w,
    t: d?.t ?? null,
    material: d.material ?? null,
    q: o?.usedStockTally?.[d.parentId] || d.q,
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
  })), p = {
    parts: a.map((d) => {
      const h = {
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
      return d.extras && (h.extras = {}, d.extras.banding?.sides && (h.extras.banding = { sides: d.extras.banding.sides }), d.extras.finish?.faces && (h.extras.finish = { faces: d.extras.finish.faces }), d.extras.planing && (h.extras.planing = {
        ...d.extras.planing.sides && { sides: d.extras.planing.sides },
        ...d.extras.planing.faces && { faces: d.extras.planing.faces }
      })), h;
    })
  };
  return r && Hl(c, r), {
    jobId: t,
    metadata: o,
    parts: c,
    stock: u,
    offcuts: n?.map(Wl) || [],
    inputs: p
  };
}
const jy = ["id", "data-index"], Vy = /* @__PURE__ */ Ye({
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
        l1: _i(i.inputShape, "banding", "side.l1"),
        l2: _i(i.inputShape, "banding", "side.l2"),
        w1: _i(i.inputShape, "banding", "side.w1"),
        w2: _i(i.inputShape, "banding", "side.w2")
      };
      const c = cp(
        i.orientationModel,
        i.stockGrain,
        i.inputShape
      );
      c && (l = sl(l, c)), n.value = l;
    };
    qe([
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
    return Vt(() => {
      document.getElementById(i.id)?.addEventListener("keydown", o);
    }), An(() => {
      document.getElementById(i.id)?.removeEventListener("keydown", o);
    }), (l, c) => (v(), T("div", {
      id: t.id,
      class: Be(["banding-button", { open: t.open, disabled: t.disabled }]),
      "data-field": "banding",
      "data-index": t.index,
      tabindex: "0",
      onClick: r
    }, [
      x("div", {
        class: Be(["outer", {
          l1: n.value.l1,
          l2: n.value.l2,
          w1: n.value.w1,
          w2: n.value.w2
        }])
      }, [...c[0] || (c[0] = [
        x("div", { class: "inner" }, null, -1)
      ])], 2)
    ], 10, jy));
  }
}), By = ["id", "data-index", "disabled"], Ny = /* @__PURE__ */ Ye({
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
    const i = t, s = e, n = ie(() => i.inputShape ? _i(i.inputShape, "finish", "face.a") : !1), a = ie(() => i.inputShape ? _i(i.inputShape, "finish", "face.b") : !1), o = () => {
      i.disabled || s("clicked");
    };
    return (r, l) => {
      const c = wi("FontAwesomeIcon");
      return v(), T("button", {
        id: t.id,
        class: Be(["c-btn finish-button", {
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
        Ve(c, { icon: ["fass", "spray-can"] })
      ], 10, By);
    };
  }
});
function Gy(t) {
  return t.machining ? "toData" in t.machining ? t.machining.toData() : t.machining : { holes: [], hingeHoles: [], corners: {} };
}
function Yl(t) {
  const e = Gy(t);
  return e ? !!(e.holes && e.holes.length > 0 || e.hingeHoles && e.hingeHoles.length > 0 || e.corners && Object.values(e.corners).some((i) => i && i.type && i.size > 0)) : !1;
}
const qy = Ye({
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
      return Yl(this.inputShape);
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
}), zy = ["id", "disabled"];
function Wy(t, e, i, s, n, a) {
  const o = wi("FontAwesomeIcon");
  return v(), T("button", {
    id: t.id,
    class: Be(["c-btn machining-button", { selected: t.hasMachining }]),
    type: "button",
    disabled: t.disabled,
    onClick: e[0] || (e[0] = (...r) => t.openMachining && t.openMachining(...r))
  }, [
    Ve(o, { icon: ["fass", "hammer"] })
  ], 10, zy);
}
const Uy = /* @__PURE__ */ Mt(qy, [["render", Wy]]), Hy = ["id"], Yy = {
  key: 0,
  class: "del",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, Ky = {
  key: 1,
  class: "no-change",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Zy = {
  key: 2,
  class: "arrow",
  viewBox: "0 0 67 63",
  xmlns: "http://www.w3.org/2000/svg"
}, Jy = {
  key: 3,
  class: "arrow",
  viewBox: "0 0 72 39",
  xmlns: "http://www.w3.org/2000/svg"
}, Xy = {
  key: 4,
  class: "arrow",
  viewBox: "0 0 39 72",
  xmlns: "http://www.w3.org/2000/svg"
}, Qy = {
  key: 5,
  class: "grain",
  viewBox: "0 0 106 64",
  xmlns: "http://www.w3.org/2000/svg"
}, eb = {
  key: 6,
  class: "grain",
  viewBox: "0 0 64 106",
  xmlns: "http://www.w3.org/2000/svg"
}, cr = /* @__PURE__ */ Ye({
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
    const i = t, s = e, n = le(0), a = le(!1), o = (L, E, w, X) => {
      if (!Fe(w) || E === 0)
        return L;
      const se = r();
      return E === 1 || E === 2 && X !== "n" && L ? se : L;
    }, r = (L) => {
      const E = { ...i, ...L };
      if (!E.rectangle || !Fe(E.rectangle)) return "";
      let w = "";
      switch (E.orientationModel) {
        case 0:
          w = H.value;
          break;
        case 1:
          E.stockGrain === "y" || E.stockGrain === "n" ? w = E.rectangle.l >= E.rectangle.w ? "l" : "w" : E.rectangle.l >= E.rectangle.w ? w = E.stockGrain : w = w = E.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          w = E.rectangle.l >= E.rectangle.w ? "l" : "w";
          break;
      }
      return w;
    }, l = () => {
      if (i.disabled || O.value.length <= 1)
        return;
      const L = c(H.value);
      "multiEdit" in i.rectangle && i.rectangle.multiEdit && H.value === "" && n.value !== L && n.value === 0 && (n.value = L);
      let w = null;
      [1, 2].includes(i.orientationModel) ? w = p() : w = u(), n.value = w;
    }, c = (L) => {
      const E = O.value.findIndex((w) => w === L);
      return E === -1 ? 0 : E;
    }, u = () => {
      let L = n.value + 1;
      return L > O.value.length - 1 && (L = 0), L;
    }, p = () => {
      let L = 0;
      if (H.value === "") {
        const E = r();
        L = O.value.findIndex((w) => w === E);
      } else
        L = O.value.findIndex((E) => E === "");
      return L;
    }, d = (L) => {
      s("updateOrientation", L);
    }, h = () => {
      const L = H.value;
      if ("multiEdit" in i.rectangle && i.rectangle.multiEdit)
        return L === " " ? " " : L === "" ? "" : L === "l" ? "l" : L === "w" ? "w" : "default";
      switch (i.orientationModel) {
        case 0:
          return L === " " ? " " : L ? i.stockGrain === "n" ? L || i.shapeOrientation || "default" : i.stockGrain === "w" ? L === "w" ? "w" : "l" : L === "l" ? "l" : "w" : "default";
        case 1:
          return L === " " ? " " : L ? i.stockGrain === "n" ? L || i.shapeOrientation || "default" : i.stockGrain === "w" ? L === "w" ? "w" : "l" : L === "l" ? "l" : "w" : "default";
        case 2:
          return L === " " ? " " : L ? i.stockGrain === "n" ? L || i.shapeOrientation || "default" : i.stockGrain === "w" ? L === "w" ? "w" : "l" : L === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, k = () => {
      if (!i.rectangle)
        return;
      if ("multiEdit" in i.rectangle && i.rectangle.multiEdit && !H.value) {
        q("");
        return;
      }
      const L = o(
        H.value,
        i.orientationModel,
        i.rectangle,
        i.stockGrain
      );
      if (L !== H.value) {
        q(L);
        return;
      }
      if (!a.value || n.value === -1) {
        const E = c(H.value);
        n.value = E;
      }
      if (Fe(i.rectangle)) {
        if (i.orientationModel === 1) {
          const E = F.value ? r() : H.value;
          q(E);
          return;
        }
        if (i.orientationModel === 2) {
          let E;
          F.value ? E = i.stockGrain !== "n" ? r() : "" : E = H.value, q(E);
        }
      }
    }, N = le(!1), q = (L) => {
      const E = c(L);
      N.value = !0, n.value = E, N.value = !1, d(L);
    }, O = ie(() => {
      if (!i.rectangle) return ["l", "w"];
      if (ni(i.rectangle)) return ["l", "w"];
      let L = ["", "l", "w"];
      return i.rectangle.multiEdit ? [" ", "", "l", "w"] : (G.value && (L = L.filter((E) => E !== "w")), L);
    }), G = ie(() => Fe(i.rectangle) || ns(i.rectangle) ? i.rectangle.isSquare : i.rectangleType && i.rectangle?.l && i.rectangle?.w ? i.rectangle?.l === i.rectangle?.w : !1), H = ie(() => {
      let L = "";
      if (ni(i.rectangle))
        L = i.rectangle.direction === "horizontal" ? "l" : "w";
      else if (Fe(i.rectangle)) {
        const E = i.rectangle.orientationLock;
        L = E === null ? "" : E;
      } else if (ns(i.rectangle)) {
        const w = i.rectangle.grain ?? "";
        w === "l" || w === "w" || w === "" || w === " " ? L = w : L = "";
      }
      return L;
    }), W = ie(() => ni(i.rectangle) || !i.rectangle ? {
      l: null,
      w: null
    } : {
      l: i.rectangle.l,
      w: i.rectangle.w
    }), F = ie(() => !W.value.l && !W.value.w), B = ie(() => ni(i.rectangle) ? !1 : nn(
      i.orientationModel,
      i.stockGrain,
      i.rectangle,
      i.rectangleType,
      i.shapeOrientation
    )), _ = ie(() => {
      if (!i.rectangle)
        return i.shapeOrientation ? "noGrain" : "freeRotation";
      if (ns(i.rectangle) || i.rectangleType === "stock") {
        const se = i.rectangle.grain;
        return "multiEdit" in i.rectangle && i.rectangle.multiEdit ? {
          " ": "noGrain",
          // Clear to no grain
          "": "noChange",
          // No change
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[se] || "noGrain" : {
          "": "noGrain",
          // No grain
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[se] || "noGrain";
      }
      const L = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, E = i.stockGrain || "default";
      let w = "default";
      Fe(i.rectangle) || i.rectangleType === "shape" ? w = h() : ni(i.rectangle) && (w = i.rectangle.direction || "default");
      const X = L[E]?.[w];
      return X || L[E]?.default || "freeRotation";
    });
    return qe(n, (L, E) => {
      a.value && E !== void 0 && (N.value || d(O.value[L]));
    }, { immediate: !1 }), qe(W, (L, E) => {
      if (!i.rectangle || i.orientationModel === 0 || !Fe(i.rectangle) || Fe(i.rectangle) && (i.orientationModel === 2 && E.l && E.w && !H.value || i.stockGrain === "n" && !H.value))
        return;
      const w = r();
      H.value !== w && d(w);
    }, { immediate: !1 }), qe(() => i.stockGrain, (L, E) => {
      L !== E && k();
    }, { immediate: !0 }), Vt(() => {
      k(), It(() => a.value = !0);
    }), (L, E) => (v(), T("button", {
      type: "button",
      id: t.id,
      class: Be(["c-btn orientation-button", { rot: B.value, square: G.value, disabled: t.disabled, [_.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      onClick: l
    }, [
      _.value === "delete" ? (v(), T("svg", Yy, [...E[0] || (E[0] = [
        x("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ])])) : Z("", !0),
      _.value === "noChange" ? (v(), T("svg", Ky, [...E[1] || (E[1] = [
        x("path", {
          d: "M5 12h14",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        }, null, -1)
      ])])) : Z("", !0),
      _.value === "freeRotation" ? (v(), T("svg", Zy, [...E[2] || (E[2] = [
        x("g", null, [
          x("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          x("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          x("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          x("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ])])) : Z("", !0),
      _.value === "leftRight" ? (v(), T("svg", Jy, [...E[3] || (E[3] = [
        x("g", null, [
          x("path", { d: "m5.408 19.408h61.095" }),
          x("g", null, [
            x("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            x("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ])])) : Z("", !0),
      _.value === "topBottom" ? (v(), T("svg", Xy, [...E[4] || (E[4] = [
        x("g", null, [
          x("path", { d: "m19.408 66.503v-61.095" }),
          x("g", null, [
            x("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            x("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ])])) : Z("", !0),
      _.value === "grainLeftRight" ? (v(), T("svg", Qy, [...E[5] || (E[5] = [
        x("g", null, [
          x("path", { d: "m3 3h99.887" }),
          x("path", { d: "m3.113 32h99.887" }),
          x("path", { d: "m3.113 61h99.887" })
        ], -1)
      ])])) : Z("", !0),
      _.value === "grainTopBottom" ? (v(), T("svg", eb, [...E[6] || (E[6] = [
        x("g", null, [
          x("path", { d: "m61 3v99.887" }),
          x("path", { d: "m32 3.113v99.887" }),
          x("path", { d: "m3 3.113v99.887" })
        ], -1)
      ])])) : Z("", !0)
    ], 10, Hy));
  }
}), tb = ["id", "data-index", "disabled"], ib = /* @__PURE__ */ Ye({
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
    const i = t, s = e, n = ie(() => i.inputShape ? _i(i.inputShape, "planing", "face.a") : !1), a = ie(() => i.inputShape ? _i(i.inputShape, "planing", "face.b") : !1), o = () => {
      i.disabled || s("clicked");
    };
    return (r, l) => {
      const c = wi("FontAwesomeIcon");
      return v(), T("button", {
        id: t.id,
        class: Be(["c-btn planing-button", {
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
        Ve(c, { icon: ["fass", "hammer"] })
      ], 10, tb);
    };
  }
}), sb = {
  key: 0,
  class: "info"
}, nb = ["disabled"], ab = /* @__PURE__ */ Ye({
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
    },
    fullStockDisabled: {
      type: Boolean,
      default: !1
    },
    materialExtrasDisabled: {
      type: Object,
      default: () => ({ banding: !1, finish: !1, planing: !1, machining: !1 })
    }
  },
  emits: ["update", "validation", "blur", "open-banding", "open-machining", "open-finish", "open-planing", "open-image-upload"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = ie(() => i.field.name === "banding" && Fe(i.item) ? i.item : null);
    hu(n, ti(i, "orientationModel"));
    const a = ["orientationLock", "grain", "banding", "bandingOptions", "machining", "finish", "planing", "imageUpload"], o = ie(() => a.includes(i.field.name) || i.field.name === "material" && i.typePrefix === "part" || i.field.name === "t" && i.thicknessOptions?.length > 0 || i.field.name === "w" && i.widthOptions?.length > 0), r = ie(() => {
      try {
        const F = i.field.propertyPath || i.field.name;
        return F.includes(".") ? Ai(i.item, F) ?? null : i.item[F] ?? null;
      } catch (F) {
        return console.error("[CheckoutField] Error getting field value:", F), null;
      }
    }), l = ie(() => {
      if (i.field.custom && i.field.type) {
        const _ = i.field.type;
        if (["checkbox", "select", "string", "integer", "unitDependent"].includes(_))
          return _;
      }
      const F = {
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
      const B = F[i.field.type];
      return B || "string";
    }), c = ie(() => i.field.output ? i.field.output : null), u = ie(() => i.field.options || []), p = ie(() => !!i.fullStockDisabled), d = ie(() => i.item.isNew ? !1 : Co(i.item, [i.field.name])), h = ie(() => i.item.isNew ? !1 : Co(i.item, [i.field.name], !0)), k = ie(() => i.multiEdit || i.item.isNew || !1), N = ie(() => i.materialOptions?.length > 0 && Fe(i.item) ? !i.item.material : !1), q = ie(() => i.widthOptions?.length === 1), O = ie(() => i.field.info ? typeof i.field.info == "string" ? i.field.info : typeof i.field.info == "object" && r.value !== null && i.field.info[r.value] || null : null), G = (F) => {
      s("update", F);
    }, H = (F, B) => {
      s("validation", F, B);
    }, W = () => {
      s("blur");
    };
    return (F, B) => o.value ? (v(), T(Ne, { key: 1 }, [
      t.field.name === "orientationLock" ? (v(), Ee(cr, {
        key: 0,
        rectangle: t.item,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        "button-background": "#2c8d8f",
        disabled: p.value,
        onUpdateOrientation: G
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : t.field.name === "grain" ? (v(), Ee(cr, {
        key: 1,
        rectangle: t.item,
        "button-background": "#2c8d8f",
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        disabled: p.value,
        onUpdateOrientation: G
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : t.field.name === "banding" ? (v(), Ee(Vy, {
        key: 2,
        "input-shape": S(Fe)(t.item) ? t.item : null,
        open: t.bandingEnabled?.autoId === t.item.autoId,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        index: t.index,
        disabled: p.value || t.materialExtrasDisabled?.banding,
        onClicked: B[0] || (B[0] = (_) => F.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "orientation-model", "index", "disabled"])) : t.field.name === "finish" ? (v(), Ee(Ny, {
        key: 3,
        "input-shape": S(Fe)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        disabled: p.value || t.materialExtrasDisabled?.finish,
        onClicked: B[1] || (B[1] = (_) => F.$emit("open-finish"))
      }, null, 8, ["input-shape", "index", "disabled"])) : t.field.name === "planing" ? (v(), Ee(ib, {
        key: 4,
        "input-shape": S(Fe)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        disabled: p.value || t.materialExtrasDisabled?.planing,
        onClicked: B[2] || (B[2] = (_) => F.$emit("open-planing"))
      }, null, 8, ["input-shape", "index", "disabled"])) : t.field.name === "machining" ? (v(), Ee(Uy, {
        key: 5,
        "input-shape": S(Fe)(t.item) ? t.item : null,
        disabled: p.value || t.materialExtrasDisabled?.machining,
        onOpen: B[3] || (B[3] = (_) => F.$emit("open-machining"))
      }, null, 8, ["input-shape", "disabled"])) : t.field.name === "material" && t.typePrefix === "part" ? (v(), Ee($i, {
        key: 6,
        id: `${t.typePrefix}-material-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: r.value,
        label: S(R)(t.field.label || "fields.material"),
        placeholder: S(R)(t.field.placeholder || "fields.material"),
        "enable-label": !1,
        output: "string",
        options: t.materialOptions,
        "select-first-option-disabled": !0,
        disabled: !t.materialOptions?.length,
        required: !1,
        text: {
          select: S(R)("actions.select"),
          delete: S(R)("actions.delete")
        },
        "onUpdate:value": G,
        onValidation: H
      }, {
        default: Bi(() => [
          un(F.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : t.field.name === "t" && t.thicknessOptions?.length > 0 ? (v(), Ee($i, {
        key: 7,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: r.value,
        label: S(R)(t.field.label || "fields.t"),
        "enable-label": !1,
        options: t.thicknessOptions,
        readonly: t.readonly,
        disabled: N.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: S(R)("actions.select"),
          delete: S(R)("actions.delete")
        },
        output: "number",
        "onUpdate:value": G,
        onValidation: H
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "w" && t.widthOptions?.length > 0 ? (v(), Ee($i, {
        key: 8,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: r.value,
        label: S(R)(t.field.label || "fields.w"),
        "enable-label": !1,
        options: t.widthOptions,
        readonly: t.readonly,
        disabled: q.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: S(R)("actions.select"),
          delete: S(R)("actions.delete")
        },
        output: "number",
        "onUpdate:value": G,
        onValidation: H
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "imageUpload" ? (v(), T("button", {
        key: 9,
        type: "button",
        disabled: t.readonly,
        onClick: B[4] || (B[4] = (_) => F.$emit("open-image-upload"))
      }, [
        Ve(S(cn), { icon: ["fass", "image"] })
      ], 8, nb)) : Z("", !0)
    ], 64)) : (v(), Ee($i, {
      key: 0,
      id: `${t.typePrefix}-${t.field.name}-${t.index}`,
      "data-field": t.field.name,
      "data-index": t.index,
      type: l.value,
      value: r.value,
      label: S(R)(t.field.label || t.field.name),
      placeholder: S(R)(t.field.placeholder || t.field.name),
      "enable-label": t.enableLabel,
      output: c.value,
      options: u.value,
      "select-first-option-disabled": t.field.selectFirstOptionDisabled ?? !0,
      disabled: t.field.disabled || p.value,
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
      "disable-required-validation": k.value,
      "onUpdate:value": G,
      onValidation: H,
      onBlur: W
    }, {
      default: Bi(() => [
        O.value ? (v(), T("p", sb, [
          Ve(S(cn), { icon: ["fass", "info-circle"] }),
          si(" " + V(O.value), 1)
        ])) : Z("", !0),
        un(F.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "data-field", "data-index", "type", "value", "label", "placeholder", "enable-label", "output", "options", "select-first-option-disabled", "disabled", "readonly", "required", "allow-zero", "true-value", "false-value", "default", "number-format", "min", "max", "multi-edit", "text", "issue", "warning", "disable-required-validation"]));
  }
}), ob = { class: "checkout-calculator-wrapper" }, rb = {
  key: 0,
  class: "row table-heading"
}, lb = {
  key: 0,
  class: "cell center"
}, cb = { class: "cell" }, ub = {
  key: 0,
  class: "cell"
}, db = ["onClick"], fb = { class: "cell" }, pb = ["disabled", "aria-label", "onClick"], hb = { class: "button-wrapper main" }, gb = ["aria-label"], mb = ["aria-label", "disabled"], yb = ["aria-label"], bb = { id: "part-count" }, vb = {
  key: 2,
  class: "pagination-controls"
}, wb = { class: "c-btn-group" }, Sb = ["disabled"], kb = ["disabled"], xb = { class: "pagination-info" }, Ib = ["disabled"], Pb = ["disabled"], Cb = {
  key: 4,
  id: "messages"
}, Ab = {
  key: 0,
  class: "heading"
}, Tb = { class: "content" }, Ob = {
  key: 5,
  id: "progress"
}, Lb = { id: "diagram-wrapper" }, _b = {
  key: 0,
  id: "stack"
}, $b = {
  key: 3,
  class: "debug"
}, ya = !1, Fb = /* @__PURE__ */ Ye({
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
    },
    showCredit: {
      type: Boolean,
      default: void 0
    }
  },
  emits: ["inputs-changed", "calculating", "validation-error", "result", "no-result", "log", "error"],
  setup(t, { expose: e, emit: i }) {
    const s = Ti(() => Promise.resolve().then(() => Eb)), n = Ti(() => Promise.resolve().then(() => ev)), a = Ti(() => Promise.resolve().then(() => ov)), o = Ti(() => Promise.resolve().then(() => Wn)), r = Ti(() => Promise.resolve().then(() => Cv)), {
      inputs: l,
      totalInputShapes: c,
      getShapeGrainSummary: u,
      updateNumberFormat: p,
      validateInputStock: d,
      // validateInputShapeField,
      // validateInputStockField,
      removeInputShape: h,
      addInputShape: k,
      addInputStock: N,
      cloneInputShape: q,
      updateInputShape: O,
      validationIssues: G,
      setExtrasOptionsFromPricing: H,
      getCentralizedOptions: W
    } = Tl(), { r: F, updateFromResult: B, stackedStock: _, uniqueAddedShapes: L, uniqueUsedStock: E, usedStock: w, activeStockAutoId: X, activeStock: se, setActiveStockAutoId: oe } = Va(), { progress: pe, reset: Q } = yu(), { addNotice: M } = Ts(), U = ie(() => l.inputShapes.value.filter(Fe)), ne = (g) => !g || !Array.isArray(g) ? [] : g.map((y) => ug({ parts: [y] }).parts?.[0] || y), ae = t, ce = i, me = le(!1), ke = "production", Ae = le(navigator?.language || "en-US"), je = Bc(null), ye = window.location.hostname, _e = le(!1), J = le(!0), Qe = hr("Checkout/currentURL", window.location.href), Ze = le([]), ot = le(null), rt = le(null), re = le(!1), et = le(!1), lt = le(!1), Jt = le(!1), Gi = le(!1), Bt = le(sp()), ue = le(!1), de = le(1), P = le(10), { socket: C } = gu({
      refs: {
        connected: _e,
        thinking: lt
      },
      callbacks: {
        onResult(g) {
          const y = g.optimisation;
          if (B(y), !y.shapeList?.length || !y.stockList?.length) {
            Q(), M({
              type: "error",
              message: R("errors.calculation.no_result"),
              additional: [R("errors.validation.check_inputs")]
            }), lt.value = !1;
            return;
          }
          if ((D.apiVersion || 3) === 2 ? rt.value = My(
            g.jobId,
            L.value,
            E.value,
            w.value,
            F.offcuts?.value || [],
            l.inputShapes.value,
            F.metadata.value,
            D.resultOrientationModel
          ) : rt.value = Ry(
            g.jobId,
            L.value,
            E.value,
            w.value,
            F.offcuts?.value || [],
            l.inputShapes.value,
            F.metadata.value,
            D.resultOrientationModel
          ), F?.metadata?.value?.unplacedParts?.length) {
            const b = F.metadata.value.unplacedParts.map(($) => $.id).join();
            M({
              type: "warning",
              message: R("woodwork.parts_not_fit") + ": " + b
            });
          }
          rt.value && (D.emitAPIResult && (rt.value.apiResultV3 = xg({
            jobId: g.jobId,
            saw: y.saw,
            stockList: y.stockList,
            shapeList: y.shapeList,
            cutList: y.cutList,
            offcuts: F.offcuts?.value || [],
            unusableShapes: y.unusableShapes,
            metadata: F.metadata.value
          })), ce("result", rt.value)), lt.value = !1;
        },
        onUser(g) {
          je.value = g;
        },
        onConnectError(g) {
          M({
            type: "error",
            message: R("errors.network.cannot_connect"),
            additional: [g]
          });
        },
        onError(g) {
          M({
            type: "error",
            message: R("errors.general.error_occurred"),
            additional: [g]
          });
        }
      }
    }), I = {
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
        csvImport: !1,
        pagination: !1,
        fullStock: !1,
        imageUpload: !1
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
      partsPerPage: 10,
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
    }, D = Lt(I), Y = Lt({
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
    }), Ie = le(null), Oe = le(!1), Ge = le(""), qi = le("");
    qe(G, (g) => {
      g?.length > 0 ? (Oe.value = !0, Ge.value = "Validation Errors", qi.value = g.map((y) => `${y.message} (${y.category.join(", ")})`).join(`

`)) : Ge.value === "Validation Errors" && (Oe.value = !1, Ge.value = "", qi.value = "");
    }, { deep: !0 });
    const kt = Lt({
      banding: null,
      finish: null,
      info: null,
      planing: null
      // imageUpload: null
    }), Me = le([]), tt = le([]), Ds = le([]), nt = le([]), Xt = Lt({
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
    }), ze = Lt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2"]
    }), it = Lt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["a", "b"]
    }), ct = Lt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]
      // All sides and faces by default
    }), so = le(null), zi = Lt({}), Wi = Lt({}), Ui = Lt({}), Es = le(null), Kl = ie(() => ({
      banding: zi.rules,
      finish: Wi.rules,
      planing: Ui.rules
    })), no = ie(() => mu({
      stockType: Y.stockType,
      materials: Me.value,
      minDimension: D.minDimension,
      ...D.fieldOrder && D.fieldOrder.length > 0 ? { allowedFieldIds: D.fieldOrder } : {}
    })), Un = le([]), Ms = le({
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
      imageUpload: !1,
      fullStock: !1
    }), ps = ie(() => {
      const g = no.value.fields.value, y = no.value.allFieldsMap.value, A = g.filter((Le) => Ms.value[Le.name] ?? !0), b = ["banding", "finish", "planing", "machining", "imageUpload"], $ = [];
      let fe = null;
      const Te = A.filter((Le) => Le.name !== "fullStock");
      Ms.value.fullStock && (fe = A.find((Le) => Le.name === "fullStock") || y.get("fullStock"));
      for (const Le of b) {
        const We = Ms.value[Le], Nt = Te.find((Rt) => Rt.name === Le);
        if (We && !Nt) {
          const Rt = y.get(Le);
          Rt && $.push(Rt);
        }
      }
      const Pe = Un.value || [];
      return [
        ...fe ? [fe] : [],
        ...Te,
        ...$,
        ...Pe
      ];
    }), Hi = ie(() => ps.value.length + 2), Zl = ie(() => {
      const g = {
        id: 34,
        del: 32
      }, y = {
        id: `${g.id}px`,
        del: `${g.del}px`
      }, A = [];
      for (const b of ps.value) {
        if (b.name === "trim") continue;
        const $ = b.w ?? "minmax(20px, 1fr)";
        A.push($);
      }
      return A.unshift(y.id), A.push(y.del), A.join(" ");
    }), hs = ie(() => D.enable.pagination), Ei = ie(() => hs.value ? Math.ceil(U.value.length / P.value) : 1), Jl = ie(() => {
      if (!hs.value) return U.value;
      const g = (de.value - 1) * P.value, y = g + P.value;
      return U.value.slice(g, y);
    }), Xl = ie(() => hs.value ? (de.value - 1) * P.value : 0), Rs = (g) => {
      g < 1 && (g = 1), g > Ei.value && (g = Ei.value), de.value = g;
    }, Ql = () => Rs(1), ec = () => Rs(de.value - 1), tc = () => Rs(de.value + 1), ic = () => Rs(Ei.value), sc = ie(() => ({
      "--btn-color": D.colors.buttonText,
      "--btn-bg": D.colors.button,
      "--btn-hover-bg": nc(D.colors.button, -8),
      "--btn-focus-ring": D.colors.button
    }));
    function nc(g, y) {
      const A = g.replace("#", ""), b = parseInt(A, 16), $ = Math.round(2.55 * y), fe = (b >> 16) + $, Te = (b >> 8 & 255) + $, Pe = (b & 255) + $;
      return `#${(16777216 + (fe < 255 ? fe < 1 ? 0 : fe : 255) * 65536 + (Te < 255 ? Te < 1 ? 0 : Te : 255) * 256 + (Pe < 255 ? Pe < 1 ? 0 : Pe : 255)).toString(16).slice(1)}`;
    }
    const ac = {
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
    }, ao = ie(() => ae.showCredit !== void 0 ? ae.showCredit : je.value ? !(je.value && je.value?.api?.whiteLabel) : !0), js = {
      // @deprecated Use saw.options.stockSelection instead
      stockSelection: (g) => {
        const y = ["efficiency", "smallest"];
        g && !y.includes(g) ? console.warn(`${g} is not a valid stockSelection, expected ${y.join("|")}`) : Y.options.stockSelection = g;
      },
      // @deprecated Use saw.options.minSpacing instead
      minSpacing: (g) => {
        Y.options.minSpacing = g;
      },
      maxParts: (g) => {
        D.maxParts = g;
      },
      partsPerPage: (g) => {
        g && g > 0 && (P.value = g, D.partsPerPage = g);
      },
      locale: (g) => {
        Ae.value = g.replace(/_/g, "-");
      },
      enable: (g) => {
        const y = {
          banding: "banding",
          name: "partName",
          finish: "finish",
          planing: "planing",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload",
          fullStock: "fullStock"
        };
        for (const A in I.enable)
          A in g && (D.enable[A] = g[A]);
        for (const A in y) {
          const b = y[A], $ = Ai(g, [b]), fe = I.enable[b];
          mt(A, $ !== void 0 ? $ : fe);
        }
        Gi.value = Ai(g, ["csvImport"]) ?? I.enable.csvImport;
      },
      colors: (g) => {
        for (const y in I.colors)
          y in g && (D.colors[y] = g[y]);
      },
      orientationModel: (g) => {
        if (![0, 1, 2].includes(g)) {
          D.orientationModel = 0;
          return;
        }
        D.orientationModel = g;
      },
      numberFormat: (g) => {
        if (!["decimal", "fraction"].includes(g)) {
          D.numberFormat = "decimal";
          return;
        }
        D.numberFormat = g;
      },
      customFields: (g) => {
        if (!Array.isArray(g) || !g?.length)
          return;
        const y = [];
        g.forEach((A) => {
          const b = oo(A.id), $ = {
            ...A,
            custom: !0,
            id: b,
            name: b,
            // CheckoutField expects 'name' property
            propertyPath: "customData." + b,
            fieldMap: "customData." + b
          };
          A.type === "checkbox" && ($.w = "32px"), A.type === "integer" || A.type === "float" ? $.output = A.output ?? "number" : A.type === "select" && ($.output = A.output ?? "string", $.options = A.options), y.push($);
        }), Un.value = y, It(() => {
          for (const A of l.inputShapes.value)
            A.customData = g.reduce((b, $) => {
              const fe = oo($.id);
              return b[fe] = A.customData[fe] || $.default || "", b;
            }, {});
        });
      }
    }, oc = (g) => {
      ae.debug && ce("log", ["checkout init...", g]), g?.stockFilterEnabled && localStorage.removeItem("inputs/inputStock"), g?.parts && (g.parts = ne(g.parts));
      let y;
      try {
        y = Fy(g);
      } catch (b) {
        ce("error", b.message || "Invalid init data");
        return;
      }
      if (y.saw) {
        const b = y.saw;
        if (b.stockType !== void 0 && (gn.includes(b.stockType) || console.warn(`${b.stockType} is not a valid stockType, expected ${gn.join("|")}`), Y.stockType = b.stockType, b.stockType === "linear" && (Y.cutType = null, Y.cutPreference = null)), b.bladeWidth !== void 0) {
          const $ = typeof b.bladeWidth == "string" ? parseFloat(b.bladeWidth) : b.bladeWidth;
          $ >= 0 ? Y.bladeWidth = $ : console.warn(`SmartCut - you provided an incorrect blade width of: ${b.bladeWidth}`);
        }
        if (b.cutType !== void 0 && (Y.cutType = b.cutType), b.cutPreference !== void 0 && (ka.includes(b.cutPreference) ? Y.cutPreference = b.cutPreference : console.warn(`SmartCut - cut preference ${b.cutPreference || "N/A"} is not valid. Expected: ${ka.join("|")}`)), b.guillotineOptions !== void 0 && typeof b.guillotineOptions == "object" && Object.assign(Y.guillotineOptions, b.guillotineOptions), b.stackHeight !== void 0) {
          const $ = typeof b.stackHeight == "string" ? parseFloat(b.stackHeight) : b.stackHeight;
          Y.stackHeight = $;
        }
        b.efficiencyOptions !== void 0 && typeof b.efficiencyOptions == "object" && Object.assign(Y.efficiencyOptions, b.efficiencyOptions), b.options !== void 0 && typeof b.options == "object" && (b.options.stockSelection !== void 0 && (Y.options.stockSelection = b.options.stockSelection), b.options.stackingMode !== void 0 && (Y.options.stackingMode = b.options.stackingMode), b.options.minSpacing !== void 0 && (Y.options.minSpacing = b.options.minSpacing));
      }
      if (y?.options) {
        const b = y.options;
        Ol(b), !y.saw && !g?.stockFilterEnabled ? ce("error", "saw configuration is required") : y.saw && (["stockType", "bladeWidth"].forEach((Te) => {
          Te in y.saw || ce("error", `${Te} is a required saw property`);
        }), (y.saw.cutType === "guillotine" || y.saw.cutType === "beam") && !("cutPreference" in y.saw) && ce("error", "cutPreference is a required saw property for guillotine and beam cut types"));
        const $ = ["enable", "colors"];
        for (const fe in b)
          $.includes(fe) || (D[fe] = b[fe]), fe in js && js[fe](b[fe]);
      }
      if (y.options.colors && "colors" in js && js.colors(y.options.colors), y.banding) {
        const b = y.banding;
        "locations" in b && b.locations && (zi.locations = b.locations), "groups" in b && b.groups && (zi.groups = b.groups), "rules" in b && b.rules && (zi.rules = b.rules);
      }
      if (y.finish) {
        const b = y.finish;
        "locations" in b && b.locations && (Wi.locations = b.locations), "groups" in b && b.groups && (Wi.groups = b.groups), "rules" in b && b.rules && (Wi.rules = b.rules);
      }
      if (y.planing) {
        const b = y.planing;
        "locations" in b && b.locations && (Ui.locations = b.locations), "groups" in b && b.groups && (Ui.groups = b.groups), "rules" in b && b.rules && (Ui.rules = b.rules);
      }
      y.partRules && (Es.value = y.partRules), Qn("banding", y), Qn("finish", y), Qn("planing", y), uc(y), uo(y), et.value = !0, ae.debug && ce("log", ["init complete"]);
      const A = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(A), It(() => {
        ao.value && !kc() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, mt = (g, y = !1) => {
      Ms.value[g] = y;
    }, oo = (g) => g ? Td(g)?.toLowerCase() : null, rc = (g, y, A) => {
      try {
        if (!g || !y) return;
        const $ = A !== null && A !== "" && A !== void 0 && !["orientationLock", "grain"].includes(y), fe = (be, Le) => {
          if (!O(be.autoId, Le)) {
            for (const [Nt, Rt] of Object.entries(Le))
              sn(be, Nt, Rt);
            be.isNew || be.validate({ fields: Object.keys(Le) });
          }
        }, Te = (be, Le, We) => {
          const Nt = Le ?? be.material, Rt = We ?? be.t, ta = l.inputStock.value.find((bo) => {
            const Fc = !Nt || bo.material === Nt, Dc = Rt == null || K({ v: bo.t }) === K({ v: Rt });
            return Fc && Dc;
          });
          return ta ? { l: K({ v: ta.l }), w: K({ v: ta.w }) } : null;
        };
        if (y === "material" && (!A || A === "")) {
          const be = { material: null, t: null };
          Y.stockType === "linear" && (be.w = null), fe(g, be);
          return;
        }
        if (y === "material" && A && Me.value?.length) {
          const be = Me.value.find((Le) => Le.name === A);
          if (be) {
            const Le = { material: A };
            if (g.t != null) {
              const We = K({ v: g.t });
              !be.thicknesses.some((Nt) => K({ v: Nt }) === We) && be.thicknesses.length > 0 && (Le.t = K({ v: be.thicknesses[0] }));
            }
            if (Y.stockType === "linear" && g.w != null && be.widths) {
              const We = K({ v: g.w });
              !be.widths.some((Nt) => K({ v: Nt }) === We) && be.widths.length > 0 && (Le.w = K({ v: be.widths[0] }));
            }
            fe(g, Le);
            return;
          }
        }
        if (y === "fullStock")
          if (A === !0) {
            const be = Te(g);
            if (be) {
              fe(g, { fullStock: !0, l: be.l, w: be.w });
              return;
            }
          } else {
            fe(g, { fullStock: !1, l: null, w: null });
            return;
          }
        if ((y === "material" || y === "t") && g.fullStock) {
          const be = Te(
            g,
            y === "material" ? A : void 0,
            y === "t" ? A : void 0
          );
          if (be) {
            fe(g, { [y]: A, l: be.l, w: be.w });
            return;
          }
        }
        if (g.isNew)
          if ($)
            g.isNew = !1;
          else {
            sn(g, y, A);
            return;
          }
        let Pe;
        if (y.includes(".")) {
          const be = y.split("."), Le = be[0], We = be.slice(1).join("."), Rt = { ...g[Le] || {} };
          sn(Rt, We, A), Pe = { [Le]: Rt };
        } else
          Pe = { [y]: A };
        fe(g, Pe), y === "t" && Y.stockType === "linear" && Me.value?.length && g.material && It(() => {
          const be = co(g);
          if (be.length > 0 && g.w != null) {
            const Le = K({ v: g.w });
            be.some((We) => K({ v: We }) === Le) || fe(g, { w: K({ v: be[0] }) });
          }
        });
      } catch (b) {
        console.error("[CHECKOUT] Error updating field:", b);
      }
    }, lc = () => {
    }, cc = (g, y) => {
      g?.isNew && (g.isNew = !1), g.validate({ fields: [y] }), ["l", "w", "t"].includes(y) && ro(g);
    }, ro = (g) => {
      if (Es.value && g && !g.isNew && !(!g.l && !g.w))
        try {
          const y = uy(g, Es.value);
          if (g.issues && (g.issues = g.issues.filter((A) => !A.category?.includes("part"))), !y.valid && y.violations.length > 0)
            for (const A of y.violations) {
              const b = fy(A), $ = A.dimension === "longSide" ? "l" : A.dimension === "shortSide" ? "w" : null;
              new he({
                item: g,
                type: "error",
                category: ["part"],
                field: $ ? [[$]] : [],
                message: b,
                shouldTranslate: !1
              });
            }
        } catch (y) {
          console.error("[CHECKOUT] Error validating part:", y);
        }
    }, uc = (g) => {
      if (Ai(D, ["enable", "machining"]) && g?.machining) {
        for (const y in Xt)
          g.machining[y] && (Xt[y] = g.machining[y]);
        if (["holes", "hingeHoles"].forEach((y) => {
          g?.machining?.[y] && (Xt[y].enabled = g?.machining?.[y].enabled);
        }), g?.machining?.corners?.types?.length && (Xt.corners.enabled = !0, Xt.corners.types = g.machining.corners.types), g.banding && g?.options?.enable?.banding) {
          if (!ze) return;
          Xt.banding = {
            enabled: !0
          }, ze.options.length && (Xt.banding.options = ze.options), ze.labels.length && (Xt.banding.labels = ze.labels), _o(ze.pricing) && (Xt.banding.pricing = ze.pricing);
        }
      }
    }, dc = (g = null) => {
      Ie.value = g, g && Fe(g) && g.l && g.w ? me.value = !0 : alert(R("machining.enter_dimensions_first"));
    }, fc = () => {
      me.value = !1;
    }, lo = (g = []) => {
      if (tt.value = [], Ds.value = [], mt("t", !1), !!g.length) {
        for (const y of g)
          if (y?.t)
            if (typeof y.t == "string" && y.t.includes(",")) {
              const A = fo(y.t, !0);
              A.length === 2 ? (mc(A), mt("t", !0), y.t = tt.value[0]) : ce("error", "bonded thickness found which does not have 2 options");
            } else tt.value.includes(y.t) || tt.value.push(y.t);
        tt.value.length > 1 && mt("t", !0);
      }
    }, Hn = (g = []) => {
      if (nt.value = [], !g.length) {
        mt("w", !1);
        return;
      }
      for (const y of g) {
        if (!y?.w) continue;
        const A = K({ v: y.w });
        nt.value.includes(A) || nt.value.push(A);
      }
      nt.value.length >= 1 ? mt("w", !0) : mt("w", !1);
    }, pc = (g) => {
      if (!g) return { thicknesses: [], bondedThicknesses: [] };
      if (!Me.value?.length)
        return {
          thicknesses: tt.value,
          bondedThicknesses: []
        };
      if (!g.material)
        return {
          thicknesses: tt.value,
          bondedThicknesses: []
        };
      const y = Me.value.find(($) => $.name === g.material);
      if (!y)
        return {
          thicknesses: tt.value,
          bondedThicknesses: []
        };
      const A = [...y.thicknesses], b = [];
      for (let $ = 0; $ < A.length; $++) {
        const fe = A[$], Te = fo(fe), Pe = [];
        if (Te.length) {
          for (const be of Te)
            A[$] = be, Pe.push($);
          $++;
        }
        Pe.length && b.push(Pe);
      }
      return {
        thicknesses: A,
        bondedThicknesses: b
      };
    }, co = (g) => {
      if (!g) return [];
      if (!Me.value?.length || !g.material)
        return nt.value;
      const y = Me.value.find((A) => A.name === g.material);
      if (!y)
        return nt.value;
      if (g.t != null && l.inputStock?.value?.length) {
        const A = K({ v: g.t }), b = /* @__PURE__ */ new Set();
        for (const $ of l.inputStock.value)
          $.material?.toUpperCase() === g.material && K({ v: $.t }) === A && $.w != null && b.add(K({ v: $.w }));
        if (b.size > 0)
          return Array.from(b).sort(($, fe) => $ - fe);
      }
      return y.widths || nt.value;
    }, hc = (g) => {
      const y = { banding: !1, finish: !1, planing: !1, machining: !1 }, A = { banding: !0, finish: !0, planing: !0, machining: !0 }, b = (Pe, be) => Pe.some((Le) => Le.extras?.[be]?.length), $ = (Pe) => ({
        banding: !b(Pe, "banding"),
        finish: !b(Pe, "finish"),
        planing: !b(Pe, "planing"),
        machining: !b(Pe, "machining")
      }), fe = l.inputStock.value.some((Pe) => Pe.extras);
      if (!g?.material)
        return Me.value?.length || fe ? A : y;
      const Te = g.material.toUpperCase();
      if (Me.value?.length) {
        const Pe = Me.value.find((be) => be.name?.toUpperCase() === Te);
        if (Pe?.extras)
          return {
            banding: !Pe.extras.banding?.length,
            finish: !Pe.extras.finish?.length,
            planing: !Pe.extras.planing?.length,
            machining: !Pe.extras.machining?.length
          };
      }
      if (fe) {
        const Pe = l.inputStock.value.filter(
          (be) => be.material?.toUpperCase() === Te
        );
        if (Pe.some((be) => be.extras))
          return $(Pe);
      }
      return y;
    }, uo = (g) => {
      if (g?.stock?.some((y) => y?.material)) {
        Me.value = [], tt.value = [], Ds.value = [];
        const y = /* @__PURE__ */ new Map();
        for (const b of g.stock) {
          if (!b.material) continue;
          const $ = b.material.toUpperCase();
          y.has($) || y.set($, { thicknesses: /* @__PURE__ */ new Set(), widths: /* @__PURE__ */ new Set() }), b.t != null && y.get($)?.thicknesses.add(K({ v: b.t })), Y.stockType === "linear" && b.w != null && y.get($)?.widths.add(K({ v: b.w }));
        }
        Me.value = Array.from(y.entries()).map(([b, $]) => {
          const fe = {
            name: b,
            thicknesses: Array.from($.thicknesses).sort((Te, Pe) => Te - Pe)
          };
          return Y.stockType === "linear" && $.widths.size > 0 && (fe.widths = Array.from($.widths).sort((Te, Pe) => Te - Pe)), fe;
        });
        const A = /* @__PURE__ */ new Set();
        for (const b of Me.value)
          for (const $ of b.thicknesses)
            A.add(K({ v: $ }));
        if (tt.value = Array.from(A).sort((b, $) => b - $), Y.stockType === "linear") {
          const b = /* @__PURE__ */ new Set();
          for (const $ of Me.value)
            if ($.widths)
              for (const fe of $.widths)
                b.add(K({ v: fe }));
          nt.value = Array.from(b).sort(($, fe) => $ - fe);
        }
        Me.value.length > 1 ? mt("material", !0) : mt("material", !1), tt.value.length > 1 ? mt("t", !0) : mt("t", !1), Y.stockType === "linear" && nt.value.length > 1 ? mt("w", !0) : Y.stockType === "linear" && mt("w", !1);
      } else
        lo(g.stock);
      Y.stockType === "linear" && !Me.value?.length && Hn(g.stock);
    }, gc = (g) => {
      if (!g?.length) {
        Me.value = [], tt.value = [], nt.value = [];
        return;
      }
      if (g.some((y) => y?.material)) {
        const y = /* @__PURE__ */ new Map();
        for (const b of g) {
          if (!b.material) continue;
          const $ = b.material.toUpperCase();
          y.has($) || y.set($, { thicknesses: /* @__PURE__ */ new Set(), widths: /* @__PURE__ */ new Set() }), b.t != null && y.get($)?.thicknesses.add(K({ v: b.t })), Y.stockType === "linear" && b.w != null && y.get($)?.widths.add(K({ v: b.w }));
        }
        Me.value = Array.from(y.entries()).map(([b, $]) => {
          const fe = {
            name: b,
            thicknesses: Array.from($.thicknesses).sort((Te, Pe) => Te - Pe)
          };
          return Y.stockType === "linear" && $.widths.size > 0 && (fe.widths = Array.from($.widths).sort((Te, Pe) => Te - Pe)), fe;
        });
        const A = /* @__PURE__ */ new Set();
        for (const b of Me.value)
          for (const $ of b.thicknesses)
            A.add(K({ v: $ }));
        if (tt.value = Array.from(A).sort((b, $) => b - $), Y.stockType === "linear") {
          const b = /* @__PURE__ */ new Set();
          for (const $ of Me.value)
            if ($.widths)
              for (const fe of $.widths)
                b.add(K({ v: fe }));
          nt.value = Array.from(b).sort(($, fe) => $ - fe);
        }
        mt("material", Me.value.length > 1), mt("t", tt.value.length > 1), Y.stockType === "linear" && mt("w", nt.value.length > 1);
      } else
        lo(g), Y.stockType === "linear" && Hn(g);
    }, mc = (g, y = null) => {
      if (!Array.isArray(g)) {
        ce("error", "addBondedThicknesses expects an array");
        return;
      }
      const A = [];
      for (let b of g)
        D.numberFormat === "decimal" && (b = parseFloat(b)), tt.value.push(b), y && y.thicknesses.push(b), A.push(tt.value.length - 1);
      Ds.value.push(A);
    }, yc = (g) => {
      const { thicknesses: y } = pc(g);
      return y?.length ? y.map((A) => ({
        label: A?.toString(),
        value: A
      })) : [];
    }, bc = (g) => {
      const y = co(g);
      return y?.length ? y.map((A) => ({
        label: A?.toString(),
        value: A
      })) : [];
    }, fo = (g, y = !1) => {
      if (typeof g == "string" && g.includes(",")) {
        const A = g.split(",");
        if (A.length === 2) {
          const b = parseFloat(A[0]), $ = parseFloat(A[1]);
          !isNaN(b) && !isNaN($) && $ !== b * 2 && M({
            type: "warning",
            message: `Bonded thickness "${g}" does not follow the expected pattern (second value should be double the first)`
          });
        }
        return y ? A.map((b) => K({ v: b })) : A;
      }
      return [];
    }, vc = () => {
      ue.value ? Sc() : wc();
    }, wc = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), ue.value = !0;
    }, Sc = () => {
      document.exitFullscreen && document.exitFullscreen(), ue.value = !1;
    }, kc = () => {
      if (je.value?.api?.whiteLabel) return !0;
      let g = !0;
      const y = document.querySelector("#smartcut-checkout a#credit");
      if (!y) return g = !1;
      const A = window.getComputedStyle(y);
      return A.display === "none" || A.display === "hidden" || A.opacity === "0" || A.color === "transparent" || A.position !== "absolute" || A.color !== "#4e4e4e" && A.color !== "rgb(78, 78, 78)" ? g = !1 : (J.value = g, g);
    }, Yn = ie(() => typeof ae.findExtrasPrice == "function"), po = (g, y) => {
      let A, b;
      switch (y) {
        case "banding":
          A = ze.options, b = ze.labels;
          break;
        case "finish":
          A = it.options, b = it.labels;
          break;
        case "planing":
          A = ct.options, b = ct.labels;
          break;
        default:
          A = [], b = [];
      }
      Mi(g, y, A, b);
    }, ho = (g) => {
      const y = Object.keys(g);
      return Math.max(...y.map((b) => b.split("|").length));
    }, gs = (g, y, A) => {
      if (!g)
        return [];
      if (A > 0 && !y[A - 1])
        return [];
      const b = /* @__PURE__ */ new Set();
      for (const fe of Object.keys(g)) {
        const Te = fe.split("|");
        if (Te.length > A) {
          let Pe = !0;
          for (let be = 0; be < A; be++) {
            const Le = y[be], We = Te[be];
            if (Le && Le !== We) {
              Pe = !1;
              break;
            }
          }
          Pe && b.add(Te[A]);
        }
      }
      return Array.from(b);
    }, Kn = (g, y, A, b) => {
      let $, fe;
      switch (y) {
        case "banding":
          $ = ze.options, fe = ze.labels;
          break;
        case "finish":
          $ = it.options, fe = it.labels;
          break;
        case "planing":
          $ = ct.options, fe = ct.labels;
          break;
        default:
          $ = [], fe = [];
      }
      return ua(g, y, A, b, $, fe);
    }, xc = (g, y, A) => {
      let b, $;
      switch (y) {
        case "banding":
          b = ze.options, $ = ze.labels;
          break;
        case "finish":
          b = it.options, $ = it.labels;
          break;
        case "planing":
          b = ct.options, $ = ct.labels;
          break;
        default:
          b = [], $ = [];
      }
      return ua(g, y, A, ae.findExtrasPrice, b, $);
    }, Ic = le({}), Pc = (g) => {
      const y = Ze.value.findIndex((A) => A.shapeId === g.shapeId);
      y !== -1 ? Ze.value[y] = g : Ze.value.push(g), window.smartcutImages = Ze.value;
    }, Cc = (g) => {
      Ze.value = Ze.value.filter((y) => y.shapeId !== g), window.smartcutImages = Ze.value;
    }, Ac = (g) => {
      ot.value = ot.value === g ? null : g;
    }, Zn = (g = 1) => {
      for (let y = g; y--; ) {
        let A = {
          l: null,
          w: Y.stockType === "linear" && nt.value.length === 1 ? nt.value[0] : null,
          t: tt.value.length ? tt.value[0] : null,
          q: 1,
          material: Me.value?.length === 1 ? Me.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (l.inputShapes.value.length > 0) {
          const $ = l.inputShapes.value[l.inputShapes.value.length - 1];
          A.material = $.material, A.t = $.t, Y.stockType === "linear" && $.w && (A.w = $.w);
        }
        const b = k(A);
        b && (ze?.labels?.length && Mi(b, "banding", ze.options, ze.labels), it?.labels?.length && Mi(b, "finish", it.options, it.labels), ct?.labels?.length && Mi(b, "planing", ct.options, ct.labels));
      }
    }, Jn = (g = {}) => {
      const y = {
        q: 1,
        // Always set quantity to 1
        ...g
      }, A = k(y);
      return A && (Y.stockType === "linear" && nt.value.length === 1 && !A.w && (A.w = nt.value[0]), tt.value.length && !A.t && (A.t = tt.value[0]), Me.value?.length === 1 && !A.material && (A.material = Me.value[0].name), ze?.labels?.length && Mi(A, "banding", ze.options, ze.labels), it?.labels?.length && Mi(A, "finish", it.options, it.labels), ct?.labels?.length && Mi(A, "planing", ct.options, ct.labels)), A;
    }, Tc = (g) => {
      if (tt.value.length)
        for (const y of g) {
          if (!y.t) return;
          const A = tt.value.findIndex(
            (fe) => K({ v: fe }) === y.t
          ), b = Ds.value.find((fe) => fe.includes(A));
          if (!b) return;
          const $ = Math.min(
            ...b.map((fe) => tt.value[fe])
          );
          K({ v: y.t }) > $ && (y.q = Number(y.q) * (K({ v: y.t }) / $), y.notes = `Bond to form ${y.t.valueOf()}`, y.t = $);
        }
    }, go = () => {
      Q(), oe(null), F.stockList.value = [], F.shapeList.value = [], F.cutList.value = [];
    }, Xn = () => {
      l.inputShapes.value.length = 0, ae.inputType !== "formula" && It(() => Zn());
    }, mo = () => {
      for (const g of l.inputShapes.value) {
        const y = g.material ? Me.value.find((A) => A.name === g.material) : null;
        if (y)
          y.thicknesses.includes(K({ v: g.t })) || (g.t = K({ v: y.thicknesses[0] }));
        else if (Me.value?.length === 1) {
          g.material = Me.value[0].name;
          const A = Me.value[0];
          A.thicknesses.includes(K({ v: g.t })) || (g.t = K({ v: A.thicknesses[0] }));
        } else if (Me.value?.length > 1 && g.t) {
          const A = Me.value.find((b) => b.thicknesses.some(($) => K({ v: $ }) === K({ v: g.t })));
          A ? g.material = A.name : (g.material = Me.value[0].name, g.t = K({ v: Me.value[0].thicknesses[0] }));
        } else Me.value?.length > 1 ? (g.material = Me.value[0].name, g.t = K({ v: Me.value[0].thicknesses[0] })) : !g.t && l.inputStock.value[0]?.t && (g.t = K({ v: l.inputStock.value[0].t }));
      }
    }, Oc = async () => {
      if (ce("calculating"), lt.value) return !1;
      lt.value = !0, Jt.value = !1, mo();
      const g = await ey({
        t: R,
        partTrim: D.partTrim,
        maxShapes: D.maxParts || 1e3,
        maxStock: 1 / 0,
        // CheckoutCalculator doesn't have stock limits
        inputSaw: l.inputSaw.value,
        // Extras validation data
        bandingPricing: ze.pricing,
        finishPricing: it.pricing,
        planingPricing: ct.pricing,
        findExtrasPrice: ae.findExtrasPrice,
        extrasValidationRules: Kl.value,
        onLimit: () => {
          M({
            type: "error",
            message: R("limits.max_parts") + " " + D.maxParts
          });
        }
      });
      if (Es.value)
        for (const $ of l.inputShapes.value)
          ro($);
      const y = l.inputShapes.value.flatMap(($) => $.issues || []).filter(($) => $.type === "error" && $.category?.includes("part"));
      if (y.length > 0) {
        M({
          type: "error",
          message: R("errors.validation.inputs_issue", { 0: "part" }),
          additional: y.map(($) => $.message)
        }), ce("validation-error"), lt.value = !1;
        return;
      }
      if (!g.valid) {
        ce("validation-error"), lt.value = !1;
        return;
      }
      go(), l.inputShapes.value.forEach(($, fe) => {
        $.createId(fe);
      }), l.inputStock.value.forEach(($, fe) => {
        $.createId(fe);
      });
      const A = l.inputShapes.value.map(($) => q($)).filter(Boolean);
      if (A.length !== l.inputShapes.value.length)
        return M({
          type: "error",
          message: "Some parts have validation errors and cannot be processed",
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), lt.value = !1, !1;
      Tc(A), ae.debug && console.log(
        "SmartCut - calculating",
        "stock",
        l.inputStock.value.map(($) => ({ l: $.l, w: $.w })),
        "parts",
        A.map(($) => ({ l: $.l, w: $.w }))
      );
      const b = {
        inputSaw: l.inputSaw.value.toData(),
        inputShapes: A.map(($) => $.toData()),
        inputStock: l.inputStock.value.map(($) => $.toData()),
        inputUserGroups: [],
        enableEvo: !0,
        useInventory: !1,
        domain: ye,
        extrasOptions: W(),
        source: "checkout",
        sourceVersion: "4.0.98"
      };
      await C.connect(), C.emit("calculate", b);
    }, Qn = (g, y) => {
      if (mt(g, !1), !g || !y || !y?.[g] || !Ai(D, ["enable", g]))
        return;
      const A = [g, "pricing"];
      if (!Lo(y, A)) {
        ce("error", `${A.join(".")} not found in sent data`);
        return;
      }
      const b = Ai(y, A);
      if (typeof b != "object") {
        ce("error", `${A.join(".")} data must be an object`);
        return;
      }
      if (!_o(b)) {
        ce("error", `if provided, ${A.join(".")} data must contain some values`);
        return;
      }
      const $ = Object.keys(b), fe = Object.values(b);
      if (!$.length) {
        ce("error", `no ${A.join(".")} pricing found`);
        return;
      }
      const Te = /,/;
      for (const We of $)
        if (Te.test(We)) {
          ce("error", `${A} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (fe.some((We) => isNaN(We))) {
        ce("error", `${A} values must be a number`);
        return;
      }
      const Pe = ho(b), be = [g, "labels"];
      let Le = [];
      if (Lo(y, be))
        Le = Ai(y, be);
      else {
        ce("error", `${be.join(".")} not found`);
        return;
      }
      if (!Le) {
        ce("error", `${be.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(Le)) {
        ce("error", `${be.join(".")} data must be an array`);
        return;
      }
      if (!Le?.length) {
        ce("error", `if provided, ${be.join(".")} data must contain values`);
        return;
      }
      if (Le.length !== Pe) {
        ce("error", `${be.join(".")} length (${Le.length}) must match the number of levels in ${A.join(".")} (${Pe})`);
        return;
      }
      switch (g) {
        case "banding": {
          ze.labels = Le, ze.pricing = b;
          const We = ea(b);
          ze.options = We, H("banding", We, Le, b);
          break;
        }
        case "finish": {
          it.labels = Le, it.pricing = b;
          const We = ea(b);
          it.options = We, H("finish", We, Le, b);
          break;
        }
        case "planing": {
          ct.labels = Le, ct.pricing = b;
          const We = ea(b);
          ct.options = We, H("planing", We, Le, b);
          break;
        }
      }
      if (so.value = W(), mt(g, !0), !!l.inputShapes.value?.length)
        for (const We of l.inputShapes.value)
          po(We, g);
    }, ea = (g) => {
      const y = [], A = Object.keys(g), b = ho(g);
      for (let $ = b; $--; ) y.push(/* @__PURE__ */ new Set());
      for (const $ of A)
        $.split("|").forEach((Te, Pe) => y[Pe].add(Te));
      for (let $ = 0; $ < b; $++)
        y[$] = Array.from(y[$]);
      return y;
    }, Vs = (g, y) => {
      if (!y) return;
      g !== "info" && Object.keys(kt).forEach((b) => {
        b !== g && b !== "info" && (kt[b] = null);
      });
      const A = l.inputShapes.value.indexOf(y);
      kt[g] === A ? (Ie.value = null, kt[g] = null, Ic.value[g] = void 0) : (Ie.value = y, kt[g] = A);
    }, yo = (g) => {
      if (ce("log", ["load event received"]), !et.value) {
        ce("log", ["load event received"]);
        return;
      }
      Lc(g.detail);
    }, Lc = (g) => {
      if (ce("log", ["loading parts..."]), !g || !g?.inputs?.parts?.length) {
        ce("log", ["could not find any parts to import"]);
        return;
      }
      l.inputShapes.value.length = 0;
      let y = 0;
      for (const b of g.inputs.parts) {
        const $ = Jn(b);
        $ ? $.issues?.length && ce("log", [`SmartCut - issues found while importing part at index ${y}`, $.issues]) : ce("log", [`SmartCut - error loading part at index ${y}`, b]), y++;
      }
      l.inputShapes.value.flatMap((b) => Wr(b.issues)).length && M({
        type: "error",
        message: R("errors.general.issues_found")
      }), ce("log", [`loaded ${l.inputShapes.value.length} parts`]);
    }, _c = (g) => {
      l.inputShapes.value.length = 0, It(() => {
        for (const y of g)
          y.t = l.inputStock.value?.[0]?.t ?? null, Y.stockType === "linear" && nt.value.length === 1 && !y.w && (y.w = nt.value[0]), Jn(y);
      });
    };
    qe(() => ae.inputStock, (g) => {
      if (go(), Array.isArray(g) || console.warn("SmartCut - stock must be passed as an array"), !!g?.length) {
        l.inputStock.value.length = 0, gc(g.map((y) => y.toData()));
        for (const y of g)
          N({
            ...y.toData(),
            autoAdd: !0
          }) || (console.error("Failed to add stock item:", y), M({
            type: "error",
            message: "Failed to add some stock items due to validation errors"
          }));
        if (l.inputStock.value.length) {
          l.inputShapes.value.length ? mo() : ae.inputType !== "formula" && It(() => {
            l.inputShapes.value.length || Zn();
          });
          const y = d(l.inputSaw.value);
          y.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(y))), M({
            type: "error",
            message: R("errors.validation.stock_issue"),
            additional: y.map((A) => A.message)
          }));
        }
      }
    }, { immediate: !0 }), qe(l.inputShapes, (g) => {
      ce("inputs-changed"), g.forEach((y) => {
        Y.stockType === "linear" && nt.value.length && (!y.w || !nt.value.includes(K({ v: y.w }))) && (y.w = nt.value[0]);
        const A = Me.value.find((b) => b.name === y.material);
        A && (A.thicknesses.includes(K({ v: y.t })) || (y.t = K({ v: A.thicknesses[0] })));
      });
    }, { deep: !0 }), qe(() => U.value.length, (g, y) => {
      if (hs.value) {
        if (g > y) {
          const A = Math.ceil(g / P.value);
          de.value < A && (de.value = A);
        } else if (g < y) {
          const A = Math.ceil(g / P.value);
          de.value > A && (de.value = Math.max(1, A));
        }
      }
    }), qe(() => D.numberFormat, (g) => {
      p(g);
    }), qe(l.inputStock, (g) => {
      Y.stockType === "linear" && Hn(g.map((y) => y.toData()));
    }, { deep: !0 }), qe(() => Y, (g) => {
      l.inputSaw.value = new fi(g);
    }, { deep: !0 }), Vt(async () => {
      if (re.value) return;
      re.value = !0;
      const g = new URL(window.location.href), y = g.searchParams.toString(), A = g.origin + g.pathname + (y ? `?${y}` : "");
      Qe.value !== A && Xn(), Qe.value = A, Ae.value = D.locale, await C.connect(), C.emit("getUserFromDomain"), window.addEventListener("smartcut/load", yo), ae.debug && ce("log", [
        "ready...",
        "fields:",
        ps.value.map((b) => b.name)
      ]);
    });
    const $c = () => {
      C && C.disconnect();
    };
    return An(() => {
      window.removeEventListener("smartcut/load", yo), $c(), delete window.smartcutCheckout;
    }), e({
      init: oc,
      clear: Xn,
      getAvailablePricingOptions: gs,
      getExtrasPrice: xc,
      formatPrice: ae.formatPrice,
      findExtrasPrice: ae.findExtrasPrice,
      inputShapes: l.inputShapes,
      initExtrasOptions: po,
      createAndAddInputShape: Jn,
      initMaterialsThicknesses: uo
    }), (g, y) => {
      const A = wi("FontAwesomeIcon");
      return v(), T("div", ob, [
        et.value ? Z("", !0) : (v(), Ee(or, {
          key: 0,
          size: 50,
          "show-number": !1
        })),
        Ie.value?.machining && me.value ? (v(), Ee(S(n), {
          key: 1,
          "input-shape": Ie.value,
          "onUpdate:inputShape": y[0] || (y[0] = (b) => Ie.value = b),
          translate: !0,
          options: Xt,
          "find-extras-price": t.findExtrasPrice,
          "get-extras-price": S(ua),
          "get-available-pricing-options": gs,
          "format-price": t.formatPrice,
          onClose: fc
        }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price"])) : Z("", !0),
        et.value ? (v(), T("section", {
          key: 2,
          id: "smartcut-checkout",
          class: Be(["smartcut-content", { fullscreen: ue.value }]),
          style: vt(sc.value)
        }, [
          Bt.value && !t.readonly ? (v(), T("button", {
            key: 0,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            onClick: y[1] || (y[1] = (b) => vc())
          }, [
            Ve(A, { icon: ["fass", "expand"] }),
            si(" " + V(S(R)("general.full_screen")), 1)
          ])) : Z("", !0),
          ao.value ? (v(), T("a", {
            key: 1,
            id: "credit",
            style: ac,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, V(S(Pd)(S(R)("general.powered_by"))), 1)) : Z("", !0),
          x("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: vt({ "grid-template-columns": Zl.value })
          }, [
            S(l).inputShapes.value.length ? (v(), T("div", rb, [
              y[6] || (y[6] = x("div", { class: "cell id" }, null, -1)),
              (v(!0), T(Ne, null, Ke(ps.value, (b) => (v(), T("div", {
                key: b.name,
                class: Be(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(b.name) || b.type === "boolean" }])
              }, V(S(R)(b.label)), 3))), 128)),
              S(ke) === "development" && ya ? (v(), T("div", lb, " Info ")) : Z("", !0),
              y[7] || (y[7] = x("div", { class: "cell del" }, null, -1))
            ])) : Z("", !0),
            (v(!0), T(Ne, null, Ke(Jl.value, (b, $) => (v(), T("div", {
              key: b.autoId,
              class: "row inputs"
            }, [
              x("div", cb, [
                x("div", {
                  class: "id",
                  style: vt({
                    background: D.colors.partA,
                    color: D.colors.text
                  })
                }, V(Xl.value + $ + 1), 5)
              ]),
              (v(!0), T(Ne, null, Ke(ps.value, (fe) => (v(), T("div", {
                key: fe.name,
                class: "cell"
              }, [
                b ? (v(), Ee(ab, {
                  key: 0,
                  field: fe,
                  item: b,
                  index: $,
                  "type-prefix": "part",
                  readonly: t.readonly,
                  "number-format": D.numberFormat,
                  "orientation-model": D.orientationModel,
                  "stock-grain": S(u)(b),
                  "material-options": Me.value?.map((Te) => ({ label: Te.name, value: Te.name })) || [],
                  "thickness-options": fe.name === "t" ? yc(b) : [],
                  "width-options": fe.name === "w" && Y.stockType === "linear" ? bc(b) : [],
                  "banding-enabled": kt.banding === $ ? b : null,
                  "full-stock-disabled": b.fullStock && !["material", "t", "q", "fullStock"].includes(fe.name),
                  "material-extras-disabled": hc(b),
                  onUpdate: (Te) => rc(b, fe.propertyPath || fe.fieldMap || fe.name, Te),
                  onValidation: y[2] || (y[2] = (Te, Pe) => lc()),
                  onBlur: () => cc(b, fe.name),
                  onOpenBanding: (Te) => Vs("banding", b),
                  onOpenMachining: (Te) => dc(b),
                  onOpenFinish: (Te) => Vs("finish", b),
                  onOpenPlaning: (Te) => Vs("planing", b),
                  onOpenImageUpload: (Te) => Ac($)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "orientation-model", "stock-grain", "material-options", "thickness-options", "width-options", "banding-enabled", "full-stock-disabled", "material-extras-disabled", "onUpdate", "onBlur", "onOpenBanding", "onOpenMachining", "onOpenFinish", "onOpenPlaning", "onOpenImageUpload"])) : Z("", !0)
              ]))), 128)),
              S(ke) === "development" && ya ? (v(), T("div", ub, [
                x("button", {
                  class: Be(["c-btn", { selected: kt.info === $ }]),
                  type: "button",
                  onClick: (fe) => Vs("info", b)
                }, " i ", 10, db)
              ])) : Z("", !0),
              x("div", fb, [
                x("button", {
                  disabled: S(l).inputShapes.value.length <= 1,
                  type: "button",
                  class: "delete",
                  "aria-label": `${S(R)("actions.remove")} ${S(oa)(S(R)("woodwork.part"))}`,
                  onClick: (fe) => S(h)(b.autoId)
                }, [
                  Ve(A, { icon: ["fass", "trash"] })
                ], 8, pb)
              ]),
              Ve(S(s), {
                item: b,
                "num-columns": Hi.value
              }, null, 8, ["item", "num-columns"]),
              kt.banding === $ && ze.options.length > 0 && Yn.value ? (v(), Ee(rn, {
                key: 1,
                shape: b,
                "shape-index": $,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": ze.keys,
                "all-options": ze.options,
                pricing: ze.pricing,
                labels: ze.labels,
                locations: zi.locations,
                "location-groups": zi.groups,
                "user-friendly-field-map": S(oi),
                "part-columns": Hi.value,
                "format-price": t.formatPrice,
                "find-extras-price": ae.findExtrasPrice,
                "get-price": Kn,
                "orientation-model": D.orientationModel,
                "stock-grain": S(u)(b),
                "get-available-pricing-options": gs,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain"])) : Z("", !0),
              kt.finish === $ && it.options.length > 0 && Yn.value ? (v(), Ee(rn, {
                key: 2,
                shape: b,
                "shape-index": $,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": it.keys,
                "all-options": it.options,
                pricing: it.pricing,
                labels: it.labels,
                locations: Wi.locations,
                "location-groups": Wi.groups,
                "user-friendly-field-map": S(oi),
                "part-columns": Hi.value,
                "format-price": t.formatPrice,
                "find-extras-price": ae.findExtrasPrice,
                "get-price": Kn,
                "orientation-model": D.orientationModel,
                "stock-grain": S(u)(b),
                "get-available-pricing-options": gs,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain"])) : Z("", !0),
              kt.planing === $ && ct.options.length > 0 && Yn.value && !0 ? (v(), Ee(rn, {
                key: 3,
                shape: b,
                "shape-index": $,
                "extra-type": "planing",
                "extra-label": "planing",
                "extra-keys": ct.keys,
                "all-options": ct.options,
                pricing: ct.pricing,
                labels: ct.labels,
                locations: Ui.locations,
                "location-groups": Ui.groups,
                "user-friendly-field-map": S(oi),
                "part-columns": Hi.value,
                "format-price": t.formatPrice,
                "find-extras-price": ae.findExtrasPrice,
                "get-price": Kn,
                "orientation-model": D.orientationModel,
                "stock-grain": S(u)(b),
                "get-available-pricing-options": gs,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain"])) : Z("", !0),
              kt.info === $ ? (v(), T("div", {
                key: 4,
                id: "shape-info",
                style: vt({ "grid-column-end": "span " + Hi.value })
              }, [
                x("div", null, V(b?.banding), 1),
                x("div", null, V(so.value?.banding?.options || "No options"), 1)
              ], 4)) : Z("", !0),
              ot.value === $ ? (v(), Ee(S(r), {
                key: 5,
                prefix: ($ + 1).toString(),
                "unique-id": b.autoId,
                "shape-id": b.autoId,
                style: vt({ "grid-column-end": "span " + Hi.value }),
                images: Ze.value,
                onUpdate: Pc,
                onRemove: Cc
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images"])) : Z("", !0)
            ]))), 128))
          ], 4),
          x("div", hb, [
            t.readonly ? Z("", !0) : (v(), T("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${S(R)("actions.add")} ${S(oa)(S(R)("woodwork.part"))}`,
              onClick: y[3] || (y[3] = (b) => Zn())
            }, [
              Ve(A, { icon: ["fass", "plus-large"] }),
              si(" " + V(`${S(R)("actions.add")} ${S(oa)(S(R)("woodwork.part"))}`), 1)
            ], 8, gb)),
            x("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": S(R)("actions.calculate"),
              disabled: !S(l).inputStock.value?.length || lt.value,
              onClick: y[4] || (y[4] = (b) => Oc())
            }, [
              Ve(A, { icon: ["fass", "calculator"] }),
              si(V(S(R)("actions.calculate")), 1)
            ], 8, mb),
            t.readonly ? Z("", !0) : (v(), T("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": S(R)("actions.clear"),
              onClick: y[5] || (y[5] = (b) => Xn())
            }, [
              Ve(A, { icon: ["fass", "trash"] })
            ], 8, yb)),
            x("div", bb, V(S(c)) + V(D?.maxParts ? "/" + D.maxParts : ""), 1)
          ]),
          hs.value && Ei.value > 1 ? (v(), T("div", vb, [
            x("div", wb, [
              x("button", {
                type: "button",
                class: "c-btn",
                disabled: de.value === 1,
                onClick: Ql
              }, [
                Ve(A, { icon: ["fass", "chevrons-left"] })
              ], 8, Sb),
              x("button", {
                type: "button",
                class: "c-btn",
                disabled: de.value === 1,
                onClick: ec
              }, [
                Ve(A, { icon: ["fass", "chevron-left"] })
              ], 8, kb),
              x("span", xb, V(de.value) + " / " + V(Ei.value), 1),
              x("button", {
                type: "button",
                class: "c-btn",
                disabled: de.value >= Ei.value,
                onClick: tc
              }, [
                Ve(A, { icon: ["fass", "chevron-right"] })
              ], 8, Ib),
              x("button", {
                type: "button",
                class: "c-btn",
                disabled: de.value >= Ei.value,
                onClick: ic
              }, [
                Ve(A, { icon: ["fass", "chevrons-right"] })
              ], 8, Pb)
            ])
          ])) : Z("", !0),
          Gi.value && !t.readonly ? (v(), Ee(S(a), {
            key: 3,
            ref: "import",
            "number-format": D.numberFormat,
            "custom-fields": Un.value,
            "banding-options": ze.options,
            "banding-labels": ze.labels,
            "finish-options": it.options,
            "finish-labels": it.labels,
            onImport: _c
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : Z("", !0),
          Oe.value ? (v(), T("div", Cb, [
            Ge.value ? (v(), T("div", Ab, V(Ge.value), 1)) : Z("", !0),
            x("pre", Tb, V(qi.value), 1)
          ])) : Z("", !0),
          (D.enable.diagram ? lt.value && !S(pe).complete : lt.value || S(pe).complete) ? (v(), T("div", Ob, [
            Ve(or, {
              size: 50,
              number: S(pe).shapeCount,
              complete: S(pe).complete,
              "show-number": D.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : Z("", !0),
          Vi(x("div", Lb, [
            S(se)?.saw?.stockType !== "roll" ? (v(), T("div", _b, V(S(se)?.stack?.number ? S(se).stack.number : 1), 1)) : Z("", !0),
            Ve(fm, {
              "element-id": "diagram",
              "number-format": D.numberFormat,
              "decimal-places": D.decimalPlaces,
              colors: D.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [Cn, D.enable.diagram && S(pe).complete]
          ]),
          D.enable.diagram && S(_).length > 1 && S(pe).complete ? (v(), Ee(Ag, {
            key: 6,
            ref: "stockNavigation",
            "active-stock-auto-id": S(X),
            "stock-list": S(_),
            onShowStock: S(oe)
          }, null, 8, ["active-stock-auto-id", "stock-list", "onShowStock"])) : Z("", !0)
        ], 6)) : Z("", !0),
        S(ke) === "development" && ya ? (v(), T("div", $b, [
          Ve(S(o), {
            data: [S(l)?.inputShapes?.value?.[0]],
            paths: ["inputShapes"]
          }, null, 8, ["data"]),
          y[8] || (y[8] = x("div", null, "Result data", -1)),
          Ve(S(o), {
            data: [rt.value],
            paths: ["checkoutResult"]
          }, null, 8, ["data"])
        ])) : Z("", !0)
      ]);
    };
  }
}), F0 = /* @__PURE__ */ Mt(Fb, [["__scopeId", "data-v-df5c2d80"]]), Db = /* @__PURE__ */ Ye({
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
    return (i, s) => (v(), T(Ne, null, [
      !e.item.isNew && e.item.issues?.filter((n) => n.type === "error")?.length ? (v(), T("div", {
        key: 0,
        class: "group issues",
        style: vt({
          "grid-column-end": "span " + e.numColumns
        })
      }, [
        x("pre", null, V(e.item.issues.filter((n) => n.type === "error").flatMap((n) => S(ls)(n.message)).join(`
`)), 1)
      ], 4)) : Z("", !0),
      !e.item.isNew && e.item.issues?.filter((n) => n.type === "warning")?.length ? (v(), T("div", {
        key: 1,
        class: "group warnings",
        style: vt({
          "grid-column-end": "span " + e.numColumns
        })
      }, [
        x("pre", null, V(e.item.issues.filter((n) => n.type === "warning").flatMap((n) => S(ls)(n.message)).join(`
`)), 1)
      ], 4)) : Z("", !0)
    ], 64));
  }
}), Eb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Db }, Symbol.toStringTag, { value: "Module" })), xt = {
  precisionFixed: Pu,
  format: Iu,
  select: yt,
  selectAll: yr,
  scaleLinear: zt,
  scaleSequential: ks,
  axisTop: gr,
  axisBottom: dn,
  axisRight: mr,
  axisLeft: fn,
  symbol: xu,
  path: ku,
  arc: Su,
  symbolTriangle: wu,
  symbolSquare: vu
};
class Mb {
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
  xScale = xt.scaleLinear();
  yScale = xt.scaleLinear();
  yScaleFlipped = xt.scaleLinear();
  measurementScale = xt.scaleLinear();
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
      if (this.el = xt.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = xt.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.longSide, this.shapeW = this.shape.shortSide, !this.svgCanvas)
        if (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null) {
          const e = this.el.append("svg").attr("class", "vis").attr("width", "100%").attr("height", "100%");
          if (e === null) return;
          this.svgCanvas = e;
        } else
          this.svgCanvas = xt.select(this.svgCanvas);
      this.loaded = !0;
    }
  }
  create() {
    if (!this.shape) return !1;
    const e = this.shouldShowAxes(), i = e ? this.edgePadding : 0, s = e ? this.edgePadding : 0, n = e ? this.axisPadding : 0, a = e ? this.axisPadding : 0;
    if (!this.shape.l || !this.shape.w || !this.w || !this.h || this.w - (i + n) < 0 || this.h - (a + s) < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createBanding(), e && (this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${a})`).attr("class", "axis x"), this.xAxis.call(
      xt.axisTop(this.xScale).ticks(10).tickSize(-this.h + (a + s))
    ), this.svgCanvas.selectAll(".axis.x .tick").each(function(o, r, l) {
      (r === 0 || r === l.length - 1) && xt.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - n}, 0)`).attr("class", "axis y"), this.yAxis.call(
      xt.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (i + n))
    ), this.svgCanvas.selectAll(".axis.y .tick").each(function(o, r, l) {
      (r === 0 || r === l.length - 1) && xt.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px"), console.log("Axes created:", { xAxis: !!this.xAxis, yAxis: !!this.yAxis })), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(e, i) {
    this.pointGroup.append("circle").attr("cx", this.xScale(e)).attr("cy", this.getYScale()(i)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    const e = this.shouldShowAxes(), i = e ? this.edgePadding : 0, s = e ? this.edgePadding : 0, n = e ? this.axisPadding : 0, a = e ? this.axisPadding : 0;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", i).attr("y", a).attr("width", this.w - (i + n)).attr("height", this.h - (a + s)), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", i).attr("y", a).attr("width", this.w - (i + n)).attr("height", this.h - (a + s)).style("fill", "url(#stripes)");
    const o = xt.path(), r = [], l = [];
    [0, 1, 2, 3].forEach((u) => {
      const p = this.shape.machining.getCorner(u);
      p && p.type ? (r.push(p.size ? K({ v: p.size ?? 0, o: this }) : 0), l.push(p.type)) : (r.push(0), l.push(null));
    });
    const c = (u, p, d, h, k) => {
      l[u] === "radius" ? o.arcTo(
        this.xScale(p),
        this.getYScale()(d),
        this.xScale(h),
        this.getYScale()(k),
        this.measurementScale(r[u])
      ) : l[u] === "bevel" ? o.lineTo(this.xScale(h), this.getYScale()(k)) : (o.lineTo(this.xScale(p), this.getYScale()(d)), o.lineTo(this.xScale(h), this.getYScale()(k)));
    };
    o.moveTo(this.xScale(0), this.getYScale()(r[0])), c(0, 0, 0, r[0], 0), (l[0] === "bevel" || l[1] === "bevel") && o.lineTo(this.xScale(this.shapeL - r[1]), this.getYScale()(0)), c(1, this.shapeL, 0, this.shapeL, r[1]), (l[1] === "bevel" || l[2] === "bevel") && o.lineTo(
      this.xScale(this.shapeL),
      this.getYScale()(this.shapeW - r[2])
    ), c(
      2,
      this.shapeL,
      this.shapeW,
      this.shapeL - r[2],
      this.shapeW
    ), (l[2] === "bevel" || l[3] === "bevel") && o.lineTo(this.xScale(r[3]), this.getYScale()(this.shapeW)), c(3, 0, this.shapeW, 0, this.shapeW - r[3]), o.closePath(), this.shapeGroup.append("path").attr("id", "shape").attr("d", o.toString());
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
    for (const l of vi)
      if (e.getSide(l))
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
    const r = xt.path();
    [0, 1, 2, 3].forEach((l) => {
      const c = this.shape.machining.getCorner(l);
      if (!c?.type) return;
      let u, p, d;
      switch (l) {
        case 0:
          if (!$e(e.sides.a) || e.sides.a === !1) return;
          u = {
            x: this.xScale(0) - i,
            y: this.getYScale()(K({ v: c.size ?? 0, o: this }))
          }, p = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, d = {
            x: this.xScale(K({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? i : -i)
          };
          break;
        case 1:
          if (!$e(e.sides.b) || e.sides.b === !1) return;
          u = {
            x: this.xScale(this.shapeL - K({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? i : -i)
          }, p = {
            x: this.xScale(this.shapeL) - i,
            y: this.getYScale()(0)
          }, d = {
            x: this.xScale(this.shapeL) + i,
            y: this.getYScale()(K({ v: c.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!$e(e.sides.c) || e.sides.c === !1) return;
          u = {
            x: this.xScale(this.shapeL) + i,
            y: this.getYScale()(this.shapeW - K({ v: c.size ?? 0, o: this }))
          }, p = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, d = {
            x: this.xScale(this.shapeL - K({ v: c.size ?? 0, o: this })) - i,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? i : -i)
          };
          break;
        case 3:
          if (!$e(e.sides.d) || e.sides.d === !1) return;
          u = {
            x: this.xScale(K({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? i : -i)
          }, p = {
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
      if (r.moveTo(u.x, u.y), c.type === "radius")
        switch (r.arcTo(
          p.x,
          p.y,
          d.x,
          d.y,
          this.measurementScale(c.size ?? 0)
        ), l) {
          case 0:
          case 2:
            r.lineTo(d.x + i, d.y);
            break;
          case 1:
          case 3:
            r.lineTo(d.x, d.y - (this.currentSide === 0 ? i : -1));
            break;
        }
      else c.type === "bevel" && r.lineTo(d.x, d.y);
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
        xt.axisRight(n).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (i + s))
      ), this.svgCanvas.selectAll(".axis.y .tick").each(function(a, o, r) {
        (o === 0 || o === r.length - 1) && xt.select(this).select("line").style("display", "none");
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
const Rb = { class: "inputs" }, jb = {
  key: 0,
  class: "debug"
}, Vb = {
  key: 1,
  class: "shape-name"
}, Bb = { class: "shape-dimensions" }, Nb = {
  key: 2,
  class: "sides-wrapper"
}, Gb = { class: "menu" }, qb = {
  key: 4,
  class: "button-wrapper"
}, zb = { class: "grid-table" }, Wb = { class: "row table-heading" }, Ub = {
  key: 0,
  class: "cell id"
}, Hb = {
  key: 0,
  class: "cell"
}, Yb = { class: "id" }, Kb = { class: "cell" }, Zb = ["onClick"], Jb = {
  key: 6,
  class: "menu-prompt"
}, Xb = !1, Qb = /* @__PURE__ */ Ye({
  __name: "Machining",
  props: /* @__PURE__ */ vo({
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
  emits: /* @__PURE__ */ vo(["update:shape", "close"], ["update:inputShape"]),
  setup(t, { emit: e }) {
    const i = Ti(() => Promise.resolve().then(() => Wn)), s = t, n = e, a = "production", o = le(), r = le(), l = ie(() => Yl(J.value)), c = ie(() => {
      if (!d.value?.length) return 0;
      if (re.value === "banding") return 1;
      let ue = Object.values(p.value).filter((de) => de.enabled).length;
      return ue += 2, ue;
    }), u = ie(() => {
      if (!d.value.length || re.value === "banding") return;
      const ue = {
        id: "34px",
        del: "30px"
      }, de = [];
      return d.value.forEach((P) => {
        const C = p.value[P];
        C.enabled && de.push(C.w ?? "1fr");
      }), de.unshift(ue.id), de.push(ue.del), de.join(" ");
    }), p = ie(() => !re.value || re.value === "banding" ? null : lt[re.value]), d = ie(() => !re.value || re.value === "banding" ? [] : Object.keys(lt[re.value]).filter((ue) => lt[re.value][ue].enabled)), h = ie(() => re.value ? B() : []), k = ie(() => {
      const ue = J.value?.machining?.corners?.map((de) => de?.isPresent?.() ? de.getCorner() : null)?.filter((de) => de) ?? [];
      return [...vi, ...ue];
    }), N = ie(() => {
      const ue = s.options.banding?.options?.[0];
      return !ue || !Array.isArray(ue) ? [] : ue.filter((de) => typeof de == "string");
    }), q = ie(() => {
      const ue = J.value?.extras?.banding;
      if (!ue) return [];
      const de = [], P = (C) => {
        C && Object.values(C).forEach((I) => {
          typeof I == "string" && I.trim() && I.split("|").forEach((D) => {
            D.trim() && !de.includes(D.trim()) && de.push(D.trim());
          });
        });
      };
      return ue.faces && P(ue.faces), ue.sides && P(ue.sides), de;
    }), O = (ue = !0) => {
      ue ? ot.value = ue : It(() => ot.value = !1);
    }, G = () => {
      Q(), M(), U(), ne();
    }, H = (ue) => {
      if (re.value === "corners")
        switch (ue) {
          case 0:
            return "a";
          case 1:
            return "b";
          case 2:
            return "c";
          case 3:
            return "d";
          default:
            return ue;
        }
      return ue + 1;
    }, W = () => re.value !== "banding", F = (ue, de = null) => {
      if (!ue?.length) return [];
      let P = "None";
      de === "depth" && (P = "Through");
      const C = [{ label: P, value: null }];
      return ue.forEach((I) => {
        const D = I.toString().charAt(0).toUpperCase() + I.toString().slice(1);
        C.push({ label: D, value: I });
      }), C;
    }, B = () => {
      if (!re.value) return [];
      if (re.value === "banding") return [];
      const ue = J.value.machining[re.value];
      return Array.isArray(ue) ? ue : [ue];
    };
    let _ = null;
    const L = () => {
      if (!J.value || !r.value) {
        console.warn("Missing shape or diagram ref for vis initialization");
        return;
      }
      console.log("Initializing vis with diagramRef:", r.value), _ = new Mb({
        HTMLElement: r.value,
        shape: J.value,
        vueComponent: null
      }), _.init(), _.updateSize(), Ze.value = !0;
    }, E = Gc(() => {
      Ze.value && _ && _.updateSize();
    }, 10);
    dr(r, () => {
      E();
    });
    const w = () => {
      rt.value = rt.value === 0 ? 1 : 0, _.flip();
    }, X = () => {
      switch (re.value) {
        case "holes":
          se();
          break;
        case "hingeHoles":
          oe();
          break;
        case "corners":
          pe();
          break;
      }
    }, se = () => {
      J.value.machining.addHole({
        x: K({ v: J.value.longSide }) / 2,
        y: K({ v: J.value.shortSide }) / 2,
        diameter: s.options.holes.defaultDiameter ?? 1,
        depth: s.options.holes.defaultDepth ?? K({ v: J.value.t }) ?? 0,
        face: rt.value
      }), _.createHoles();
    }, oe = () => {
      J.value.machining.addHingeHole({
        numHoles: 3,
        position: 0,
        diameter: s.options.holes.defaultDiameter ?? 0,
        depth: s.options.holes.defaultDepth ?? 0,
        side: "x1",
        face: rt.value,
        distanceFromEdge: s.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: s.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: s.options.hingeHoles.minimumHoleDistance,
        hingeLength: s.options.hingeHoles.defaultHingeLength
      }), _.createHingeHoles();
    }, pe = () => {
      const ue = s.options.corners.types?.[0] || "radius", de = s.options.corners.minValue || 5;
      for (let P = 0; P < 4; P++)
        J.value.machining.setCorner({
          index: P,
          type: ue,
          size: de
        });
      _.createCorners();
    }, Q = () => {
      J.value.machining.holes.length = 0;
    }, M = () => {
      J.value.machining.hingeHoles.length = 0;
    }, U = () => {
      J.value.machining.corners.forEach((ue) => {
        ue.size = null, ue.type = null;
      }), J.value.banding.sides.a = !1, J.value.banding.sides.b = !1, J.value.banding.sides.c = !1, J.value.banding.sides.d = !1;
    }, ne = () => {
      J.value.banding = {
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
    }, ae = (ue) => {
      switch (re.value) {
        case "holes":
          return J.value.machining.holes.splice(ue, 1);
        case "hingeHoles":
          return J.value.machining.hingeHoles.splice(ue, 1);
        case "corners":
          J.value.machining.corners[ue].size = null, J.value.machining.corners[ue].type = null;
          return;
      }
    }, ce = () => {
      switch (re.value) {
        case "holes":
          return Q();
        case "hingeHoles":
          return M();
        case "corners":
          return U();
      }
    }, me = () => {
      if (et.value = [], !!s.options.banding.enabled) {
        O();
        for (const ue in J.value.banding.sides)
          J.value.banding.sides[ue] ? s.options.banding.enableTypes && s.options.banding.types?.length && (J.value.banding.sides[ue] || et.value.push({
            index: ue,
            message: "Please select a type"
          })) : J.value.banding.sides[ue] = "";
        O(!1);
      }
    }, ke = (ue) => {
      const de = et.value.filter((P) => P.index === ue);
      return de.length ? de.map((P) => P.message) : [];
    }, Ae = (ue) => {
      const de = et.value.filter((C) => C.index === ue && C?.fields), P = de.flatMap((C) => C.fields);
      return de.length ? P : [];
    }, je = (ue, de) => {
      const P = Ae(ue);
      return P?.length ? P.includes(de) : !1;
    }, ye = () => {
      o.value?.close(), n("close");
    }, _e = (ue) => ue && typeof ue.disabled == "function" ? ue.disabled : !1, J = Nc(t, "inputShape");
    if (!J.value?.machining)
      throw new Error("Machining component requires a shape with machining initialized");
    const Qe = le(!1), Ze = le(!1), ot = le(!1), rt = le(0), re = le(null), et = le([]), lt = Lt({
      holes: {
        x: {
          enabled: !0,
          type: "unitDependent",
          label: R("woodwork.x"),
          required: !0
        },
        y: {
          enabled: !0,
          type: "unitDependent",
          label: R("woodwork.y"),
          required: !0
        },
        diameter: {
          enabled: !0,
          type: s.options.holes.diameters?.length ? "select" : "unitDependent",
          label: R("machining.diameter"),
          output: s.options.holes.diameters?.length ? "float" : void 0,
          options: s.options.holes.diameters?.length ? F(s.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: s.options.holes.enableDepth && typeof J.value.t < "u" && K({ v: J.value.t }) > 0,
          required: !1,
          type: s.options.holes.depths?.length ? "select" : "unitDependent",
          output: s.options.holes.depths?.length ? "float" : void 0,
          options: s.options.holes.depths?.length ? F(s.options.holes.depths) : void 0
        },
        face: {
          required: !0,
          enabled: s.options.faces.enabled,
          type: "select",
          output: "integer",
          options: [
            {
              label: R("faces.a"),
              value: 0
            },
            {
              label: R("faces.a"),
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
          label: R("machining.hinge_length"),
          min: 0
        },
        outerSpacing: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: R("machining.outer_spacing"),
          min: 0
        },
        distanceFromEdge: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: R("machining.distance_from_edge"),
          min: 0
        },
        //[] separate option for hinges
        depth: {
          enabled: s.options.holes.enableDepth && typeof J.value.t < "u" && K({ v: J.value.t }) > 0,
          required: !1,
          type: s.options.holes.depths?.length ? "select" : "unitDependent",
          output: s.options.holes.depths?.length ? "float" : void 0,
          options: s.options.holes.depths?.length ? F(s.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: s.options.holes.diameters?.length ? "select" : "unitDependent",
          label: R("machining.diameter"),
          output: s.options.holes.diameters?.length ? "float" : void 0,
          options: s.options.holes.diameters?.length ? F(s.options.holes.diameters) : void 0
        },
        numHoles: {
          enabled: !0,
          required: !0,
          type: "integer",
          label: R("machining.num_holes"),
          min: 2
        },
        face: {
          enabled: s.options.faces.enabled,
          type: "select",
          required: !0,
          output: "integer",
          options: [
            {
              label: R("faces.a"),
              value: 0
            },
            {
              label: R("faces.b"),
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
              label: R("sides.w1"),
              value: "x1"
            },
            {
              label: R("sides.w2"),
              value: "x2"
            },
            {
              label: R("sides.l1"),
              value: "y1"
            },
            {
              label: R("sides.l2"),
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
          label: R("machining.type"),
          type: "select",
          output: "string",
          options: F(s.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: R("machining.size"),
          type: "unitDependent",
          min: () => typeof s.options.corners.minValue < "u" ? K({ v: s.options.corners.minValue, o: s.options }) : 0,
          max: () => typeof s.options.corners.maxValue < "u" ? K({ v: s.options.corners.maxValue, o: s.options }) : K({ v: J.value.shortSide, o: s.options }) / 2
        }
      }
    }), Jt = Lt({
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
    }), Gi = (ue) => {
      const de = o.value;
      if (!de) return;
      const P = de.getBoundingClientRect();
      ue.clientX >= P.left && ue.clientX <= P.right && ue.clientY >= P.top && ue.clientY <= P.bottom || ye();
    }, Bt = () => !(!J?.value?.machining || !Qe.value || ot.value);
    return qe(() => J.value?.autoId, () => {
      Bt() && L();
    }), qe(() => J.value?.id, () => {
      Bt() && L();
    }), qe(re, (ue) => {
      if (!Bt()) return;
      if (ue === "banding") {
        O(), me(), O(!1);
        return;
      }
      if (!ue) {
        et.value = [];
        return;
      }
      O();
      const de = J.value.machining.validate(
        J.value,
        ue,
        Jt?.[ue]
      );
      et.value = de?.map((P, C) => ({
        index: C,
        message: P.message || "Validation error",
        fields: P.field || []
      })) || [], O(!1);
    }, { deep: !0, immediate: !0 }), qe(() => J?.value?.machining?.holes, () => {
      if (!Bt()) return;
      O();
      const ue = J.value.machining.validate(
        J.value,
        "holes",
        Jt?.holes
      );
      et.value = ue?.map((de, P) => ({
        index: P,
        message: de.message || "Validation error",
        fields: de.field || []
      })) || [], _.createHoles(), O(!1);
    }, { deep: !0, immediate: !0 }), qe(() => J?.value?.machining?.hingeHoles, () => {
      if (!Bt()) return;
      O();
      const ue = J.value.machining.validate(
        J.value,
        "hingeHoles",
        Jt?.hingeHoles
      );
      et.value = ue?.map((de, P) => ({
        index: P,
        message: de.message || "Validation error",
        fields: de.field || []
      })) || [], _.createHingeHoles(), O(!1);
    }, { deep: !0, immediate: !0 }), qe(() => J?.value?.machining?.corners, () => {
      if (!Bt()) return;
      O();
      const ue = J.value.machining.validate(
        J.value,
        "corners",
        Jt?.corners
      );
      et.value = ue?.map((de, P) => ({
        index: P,
        message: de.message || "Validation error",
        fields: de.field || []
      })) || [], J.value.machining.validate(J.value, "holes"), J.value.machining.validate(J.value, "hingeHoles"), _.createShape(), _.createHoles(), _.createHingeHoles();
      for (const de of J.value.machining.corners)
        J.value.banding && de?.getCorner && (J.value.banding.sides[de.getCorner()] = "");
      _.createBanding(), O(!1);
    }, { deep: !0, immediate: !0 }), qe(() => J?.value?.banding, () => {
      Bt() && (me(), _.createBanding());
    }, { deep: !0, immediate: !0 }), Vt(() => {
      if (o.value?.open || o.value?.showModal(), !J.value || !J.value.l || !J.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      It(() => L()), Qe.value = !0;
    }), (ue, de) => {
      const P = wi("FontAwesomeIcon");
      return v(), T("dialog", {
        id: "machining",
        ref_key: "dialogRef",
        ref: o,
        onCancel: Tn(ye, ["prevent"]),
        onClick: Gi
      }, [
        x("div", Rb, [
          S(a) === "development" && Xb ? (v(), T("div", jb, [
            Ve(S(i), {
              data: [J.value.machining],
              paths: ["shape.machining"]
            }, null, 8, ["data"])
          ])) : Z("", !0),
          x("button", {
            class: "c-btn close",
            type: "button",
            onClick: de[0] || (de[0] = (C) => ye())
          }, "×"),
          J.value?.name ? (v(), T("div", Vb, V(J.value.name), 1)) : Z("", !0),
          x("div", Bb, V(J.value?.l) + " x " + V(J.value?.w) + " " + V(J.value?.t ? "x " + J.value?.t : null), 1),
          t.options.faces.enabled ? (v(), T("div", Nb, [
            x("div", {
              ref: "sides",
              class: Be(["sides", { flipped: rt.value === 1 }]),
              onClick: w
            }, [...de[6] || (de[6] = [
              x("div", { class: "side-a" }, " A ", -1),
              x("div", { class: "side-b" }, " B ", -1)
            ])], 2),
            de[7] || (de[7] = x("div", { class: "text" }, " [Click to flip] ", -1))
          ])) : Z("", !0),
          l.value ? (v(), T("button", {
            key: 3,
            class: "c-btn c-btn--delete",
            type: "button",
            onClick: G
          }, " Delete all machining ")) : Z("", !0),
          x("div", Gb, [
            t.options.holes.enabled ? (v(), T("div", {
              key: 0,
              class: Be({ selected: re.value === "holes" }),
              onClick: de[1] || (de[1] = (C) => re.value = "holes")
            }, " Holes ", 2)) : Z("", !0),
            t.options.hingeHoles.enabled ? (v(), T("div", {
              key: 1,
              class: Be({ selected: re.value === "hingeHoles" }),
              onClick: de[2] || (de[2] = (C) => re.value = "hingeHoles")
            }, " Hinge holes ", 2)) : Z("", !0),
            t.options.corners.enabled ? (v(), T("div", {
              key: 2,
              class: Be({ selected: re.value === "corners" }),
              onClick: de[3] || (de[3] = (C) => re.value = "corners")
            }, " Corners ", 2)) : Z("", !0),
            t.options.banding.enabled ? (v(), T("div", {
              key: 3,
              class: Be({ selected: re.value === "banding" }),
              onClick: de[4] || (de[4] = (C) => re.value = "banding")
            }, " Banding ", 2)) : Z("", !0)
          ]),
          re.value === "holes" || re.value === "hingeHoles" || re.value && re.value !== "banding" ? (v(), T("div", qb, [
            re.value === "holes" || re.value === "hingeHoles" || re.value === "corners" ? (v(), T("button", {
              key: 0,
              class: "c-btn",
              type: "button",
              onClick: X
            }, " Create ")) : Z("", !0),
            re.value && re.value !== "banding" ? (v(), T("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              onClick: ce
            }, " Delete all ")) : Z("", !0)
          ])) : Z("", !0),
          x("div", zb, [
            re.value === "banding" && J.value ? (v(), Ee(rn, {
              key: 0,
              shape: J.value,
              "onUpdate:shape": de[5] || (de[5] = (C) => J.value = C),
              "extra-type": "banding",
              "extra-label": "Banding",
              "extra-keys": k.value,
              labels: t.options.banding.labels,
              "all-options": t.options.banding.options,
              "user-friendly-field-map": S(oi),
              "part-columns": 1,
              "allow-custom-names": !0,
              "custom-names": N.value,
              "used-names": q.value,
              "enable-pricing": !0,
              pricing: t.options.banding.pricing,
              "get-price": t.getExtrasPrice,
              "format-price": t.formatPrice,
              "get-available-pricing-options": t.getAvailablePricingOptions
            }, null, 8, ["shape", "extra-keys", "labels", "all-options", "user-friendly-field-map", "custom-names", "used-names", "pricing", "get-price", "format-price", "get-available-pricing-options"])) : Z("", !0)
          ]),
          re.value !== "banding" && h.value.length ? (v(), T("div", {
            key: 5,
            class: Be(["grid-table", re.value]),
            style: vt({ "grid-template-columns": u.value })
          }, [
            x("div", Wb, [
              W() ? (v(), T("div", Ub)) : Z("", !0),
              (v(!0), T(Ne, null, Ke(p.value, (C, I) => Vi((v(), T("div", {
                key: I,
                class: "cell"
              }, V(C.label ?? I), 1)), [
                [Cn, C.enabled]
              ])), 128)),
              de[8] || (de[8] = x("div", { class: "cell" }, null, -1))
            ]),
            (v(!0), T(Ne, null, Ke(h.value, (C, I) => (v(), T("div", {
              key: I,
              class: "row"
            }, [
              W() ? (v(), T("div", Hb, [
                x("div", Yb, V(H(I)), 1)
              ])) : Z("", !0),
              (v(!0), T(Ne, null, Ke(d.value, (D, Y) => (v(), T("div", {
                key: Y,
                class: "cell"
              }, [
                Ve($i, {
                  type: p.value[D].type,
                  id: D + "-" + Y,
                  warning: je(I, D),
                  "enable-label": !1,
                  placeholder: p.value[D].label ?? D,
                  disabled: _e(p.value[D]),
                  value: S(Ai)(C, D),
                  output: p.value[D].output,
                  options: p.value[D].options,
                  "onUpdate:value": (Ie) => S(sn)(C, D, Ie)
                }, null, 8, ["type", "id", "warning", "placeholder", "disabled", "value", "output", "options", "onUpdate:value"])
              ]))), 128)),
              x("div", Kb, [
                x("button", {
                  class: "c-btn delete",
                  type: "button",
                  onClick: (D) => ae(I)
                }, [
                  Ve(P, { icon: ["fass", "trash"] })
                ], 8, Zb)
              ]),
              (v(!0), T(Ne, null, Ke(ke(I), (D, Y) => (v(), T("div", {
                key: Y,
                class: "group validation",
                style: vt({ "grid-column-end": "span " + c.value })
              }, V(D), 5))), 128))
            ]))), 128))
          ], 6)) : re.value ? Z("", !0) : (v(), T("div", Jb, "Please select from the menu above"))
        ]),
        x("div", {
          id: "machining-diagram",
          class: Be(["diagram", { flipped: rt.value === 1 }]),
          ref_key: "diagramRef",
          ref: r
        }, null, 2)
      ], 544);
    };
  }
}), ev = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Qb }, Symbol.toStringTag, { value: "Module" })), tv = {
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
      files: qc([])
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
function iv(t, e, i, s, n, a) {
  return v(), T("div", {
    id: "drop",
    class: Be({ thinking: i.thinking, [n.dropClass]: !0 }),
    onDrop: e[0] || (e[0] = Tn((...o) => a.onDrop && a.onDrop(...o), ["prevent"]))
  }, [
    x("div", null, V(i.thinking ? "Loading, please wait..." : i.label), 1)
  ], 34);
}
const sv = /* @__PURE__ */ Mt(tv, [["render", iv]]), nv = { id: "import-file" }, av = /* @__PURE__ */ Ye({
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
    const { addNotice: i } = Ts(), s = t, n = e, a = le([]), o = le([]), r = le([]), l = le([]), c = le({}), u = le([]), p = le(!1), d = le(null), h = le(null), k = le({}), N = [
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
    ], q = ie(() => {
      if (Object.keys(k.value).length === a.value.length)
        return k.value;
      const Q = {};
      return a.value.forEach((M, U) => {
        Q[U] = {};
        for (const [ne, ae] of Object.entries(M)) {
          if (!N.includes(ne)) continue;
          const ce = H(ne, ae);
          (ce === !0 || ce === !1) && (Q[U][ne] = ce);
        }
      }), k.value = Q, Q;
    }), O = ie(() => s.customFields.map((Q) => Q.label)), G = (Q, M) => {
      if (!M || Array.isArray(M) && M.length === 0 || typeof M == "object" && Object.keys(M).length === 0)
        return;
      const U = (Array.isArray(M), M), ne = (Array.isArray(U), Object.keys(U));
      if (ne.length === 0)
        return;
      const ae = [[]];
      ne.forEach((me) => {
        const ke = U[me], Ae = [];
        ae.forEach((je) => {
          Array.isArray(ke) && ke.forEach((ye) => Ae.push([...je, ye]));
        }), ae.splice(0, ae.length, ...Ae);
      });
      const ce = /* @__PURE__ */ new Set();
      ae.forEach((me) => ce.add(me.join("|").toLowerCase())), Q === "banding" ? d.value = ce : h.value = ce;
    }, H = (Q, M) => {
      if (M === "???") return !0;
      function U(ae) {
        return ae ? (ae = ae?.trim()?.toLowerCase(), ae === "l" || ae === "w") : !0;
      }
      const ne = {
        banding: (ae) => W(ae, d.value, "banding"),
        finish: (ae) => W(ae, h.value, "finish"),
        orientationLock: U
      };
      return Q in ne ? ne[Q](M) : null;
    }, W = (Q, M, U) => {
      if (Q = X(Q), !Q) return !0;
      const ne = Q.split(","), ae = ne.every((ce) => {
        if (!ce) return !0;
        const me = ce.toLowerCase();
        return M.has(me) ? !0 : Array.from(M).some((Ae) => Ae.startsWith(me + "|") || Ae === me);
      });
      if (!ae) {
        const ce = ne.filter((me) => {
          if (!me) return !1;
          const ke = me.toLowerCase();
          return M.has(ke) ? !1 : !Array.from(M).some((Ae) => Ae.startsWith(ke + "|") || Ae === ke);
        });
        console.log(`Valid ${U} choices...`), console.log(Array.from(M).join()), console.log(`The following ${U} choices are invalid`, ce), i({
          type: "error",
          message: R("errors.validation.options_invalid", [R(`woodwork.${U}`).toLowerCase()]),
          additional: ce
        });
      }
      return ae;
    }, F = (Q, M) => {
      const U = q.value[M]?.banding !== !1, ne = q.value[M]?.finish !== !1, ae = !!Q.banding, ce = !!Q.finish;
      if (!ae && !ce)
        return;
      const me = {};
      if (U && ae) {
        const ke = X(Q.banding);
        if (ke) {
          const Ae = ke.split(","), je = ["l1", "l2", "w1", "w2"], ye = {};
          Ae.forEach((_e, J) => {
            if (_e && _e.trim() && je[J]) {
              const Qe = _e.trim();
              if (Qe.includes("|") && s.bandingLabels.length > 1) {
                const Ze = Qe.split("|"), ot = {};
                s.bandingLabels.forEach((rt, re) => {
                  Ze[re] && (ot[rt] = Ze[re]);
                }), ye[je[J]] = ot;
              } else
                ye[je[J]] = Qe;
            }
          }), Object.keys(ye).length > 0 && (me.banding = { sides: ye });
        }
      }
      if (ne && ce) {
        const ke = X(Q.finish);
        if (ke) {
          const Ae = ke.split(","), je = ["a", "b"], ye = {};
          Ae.forEach((_e, J) => {
            if (_e && _e.trim() && je[J]) {
              const Qe = _e.trim();
              if (Qe.includes("|") && s.finishLabels.length > 1) {
                const Ze = Qe.split("|"), ot = {};
                s.finishLabels.forEach((rt, re) => {
                  Ze[re] && (ot[rt] = Ze[re]);
                }), ye[je[J]] = ot;
              } else
                ye[je[J]] = Qe;
            }
          }), Object.keys(ye).length > 0 && (me.finish = { faces: ye });
        }
      }
      return Object.keys(me).length > 0 ? me : void 0;
    }, B = () => a.value.map((Q, M) => ({
      l: s.numberFormat === "decimal" ? Qs(Q.l) : Q.l,
      w: s.numberFormat === "decimal" ? Qs(Q.w) : Q.w,
      t: s.numberFormat === "decimal" ? Qs(Q.t) : Q.t,
      q: typeof Q.q == "string" ? parseInt(Q.q, 10) : Q.q,
      orientationLock: Q.orientationLock,
      name: Q.name,
      material: Q.material,
      extras: F(Q, M),
      customData: oe(Q)
    })), _ = (Q) => {
      const M = Q?.[0]?.data;
      M && Cu.parse(M, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (U) => L(U),
        error: () => n("error")
      });
    }, L = (Q) => {
      o.value = Q.data.filter((M) => M.some((U) => U)), r.value = o.value[0], c.value = {};
      for (let M = r.value.length; M--; ) {
        const U = r.value[M], ne = E(U);
        ne ? c.value[M] = ne : (c.value[M] = null, O.value.includes(U) && (c.value[M] = "customData." + s.customFields.find((ae) => ae.label === U).id));
      }
      w(), o.value.shift(), se(), pe();
    }, E = (Q) => {
      const M = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", R("l"), R("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", R("w"), R("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", R("t"), R("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", R("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", R("quantity"), R("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", R("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", R("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", R("banding")],
        finish: ["finish", "paint"]
      }, U = Object.entries(M).reduce(
        (ne, [ae, ce]) => (ce.some((me) => Q && Q.toLowerCase() === me) && ne.push(ae), ne),
        []
      );
      return U.length > 1 ? null : U[0];
    }, w = () => {
      p.value = !1, l.value = Object.values(c.value).map((M) => !M || M === "N" ? null : N.includes(M) ? M : (p.value = !0, null));
      const Q = l.value.filter((M, U) => l.value.indexOf(M) !== U);
      u.value = Q.map((M) => l.value.reduce(
        (U, ne, ae) => (ne && ne === M && U.push(ae), U),
        []
      ));
    }, X = (Q) => Q && Q.replace(/\s*,\s*/g, ","), se = () => {
      const Q = o.value.map((M) => {
        const U = {};
        return r.value.forEach((ne, ae) => {
          if (u.value.flat().includes(ae))
            return U[c.value[ae]] = "???";
          U[c.value[ae]] = M[ae];
        }), U;
      });
      a.value = Q;
    }, oe = (Q) => {
      let M = {};
      for (let U in Q)
        if (U.startsWith("customData.")) {
          let ne = U.slice(11);
          M[ne] = Q[U];
        }
      return M;
    }, pe = () => {
      const Q = B();
      Q?.length && n("import", Q);
    };
    return Vt(() => {
      G("banding", s.bandingOptions), G("finish", s.finishOptions);
    }), (Q, M) => (v(), T("div", nv, [
      Ve(sv, {
        label: S(R)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: _
      }, null, 8, ["label"])
    ]));
  }
}), ov = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: av }, Symbol.toStringTag, { value: "Module" })), rv = {
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
}, lv = { class: "smartcut-object-viewer" }, cv = ["onClick"], uv = { class: "toggle-icon" }, dv = { class: "path-label" }, fv = {
  key: 0,
  class: "object-properties"
}, pv = {
  key: 0,
  class: "key"
}, hv = {
  key: 1,
  class: "null-value"
}, gv = { key: 2 };
function mv(t, e, i, s, n, a) {
  const o = wi("ObjectViewer", !0);
  return v(), T("div", lv, [
    (v(!0), T(Ne, null, Ke(i.data, (r, l) => (v(), T("div", {
      key: l,
      class: "array-item"
    }, [
      x("div", {
        class: "item-header",
        onClick: (c) => a.toggle(l)
      }, [
        x("div", uv, V(n.expanded[l] ? "▼" : "▶"), 1),
        x("div", dv, V(i.paths[l] || l), 1)
      ], 8, cv),
      n.expanded[l] ? (v(), T("div", fv, [
        (v(!0), T(Ne, null, Ke(r, (c, u) => (v(), T("div", {
          key: u,
          class: "property-item"
        }, [
          !a.isObjectOrArray(c) || c === null || Array.isArray(c) ? (v(), T("div", pv, V(u) + ": ", 1)) : Z("", !0),
          x("div", {
            class: Be(["value", a.getValueType(c)])
          }, [
            a.isObjectOrArray(c) && c !== null ? (v(), Ee(o, {
              key: 0,
              data: Array.isArray(c) ? c : [c],
              paths: a.getArrayPaths(c, u),
              root: !1
            }, null, 8, ["data", "paths"])) : c === null ? (v(), T("span", hv, "null")) : (v(), T("span", gv, V(a.formatValue(c)), 1))
          ], 2)
        ]))), 128))
      ])) : Z("", !0)
    ]))), 128))
  ]);
}
const yv = /* @__PURE__ */ Mt(rv, [["render", mv]]), Wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: yv }, Symbol.toStringTag, { value: "Module" })), bv = { id: "uploader" }, vv = {
  key: 0,
  class: "debug"
}, wv = {
  key: 1,
  class: "selected-files"
}, Sv = ["src"], kv = ["onClick"], xv = !0, Iv = /* @__PURE__ */ Ye({
  __name: "ImageUpload",
  props: {
    shapeId: {
      type: String,
      required: !0
    },
    prefix: {
      type: String,
      required: !0
    },
    uniqueId: {
      type: String,
      required: !0
    },
    env: {
      type: String,
      required: !1,
      default: "production"
    },
    maxImages: {
      type: Number,
      required: !1,
      default: 5
    },
    images: {
      type: Array,
      required: !0
    }
  },
  emits: ["update", "remove"],
  setup(t, { emit: e }) {
    const i = Ti(() => Promise.resolve().then(() => Wn)), s = le(null), n = le({
      shapeId: "",
      files: [],
      previewUrls: [],
      metadata: []
    }), a = t, o = e, r = (h) => ["image/jpeg", "image/jpg", "image/png"].includes(h.type), l = () => {
      s.value?.click();
    }, c = (h) => {
      const k = h.target, N = k.files;
      if (!N) return;
      const q = Array.from(N), O = q.filter((L) => !r(L));
      if (O.length > 0) {
        const L = O.map((E) => E.name).join(", ");
        alert(`Invalid file type(s): ${L}
Only JPG and PNG files are allowed.`), k.value = "";
        return;
      }
      const G = n.value.files || [];
      if (G.length + q.length > a.maxImages) {
        alert(`Maximum ${a.maxImages} images allowed per shape.`), k.value = "";
        return;
      }
      const W = [...G, ...q], F = u(W), B = W.map((L, E) => ({
        originalName: L.name,
        newName: `${a.prefix}-${E + 1}-${a.uniqueId}${p(L.name)}`
      })), _ = {
        shapeId: a.shapeId,
        files: W,
        previewUrls: F,
        metadata: B
      };
      n.value = _, o("update", _), k.value = "";
    }, u = (h) => h.map((k) => URL.createObjectURL(k)), p = (h) => h.substring(h.lastIndexOf(".")), d = (h) => {
      URL.revokeObjectURL(n.value.previewUrls[h]);
      const k = [...n.value.files], N = [...n.value.previewUrls], q = [...n.value.metadata];
      if (k.splice(h, 1), N.splice(h, 1), q.splice(h, 1), k.length === 0)
        n.value = {
          shapeId: a.shapeId,
          files: [],
          previewUrls: [],
          metadata: []
        }, o("remove", a.shapeId);
      else {
        const O = {
          shapeId: a.shapeId,
          files: k,
          previewUrls: N,
          metadata: q
        };
        n.value = O, o("update", O);
      }
    };
    return zc(() => {
      n.value?.previewUrls && n.value.previewUrls.forEach((h) => URL.revokeObjectURL(h));
    }), Vt(() => {
      n.value.shapeId = a.shapeId;
      const h = a.images.find((k) => k.shapeId === a.shapeId);
      if (h) {
        const k = u(h.files);
        n.value = {
          ...h,
          previewUrls: k
        };
      }
    }), (h, k) => {
      const N = wi("FontAwesomeIcon");
      return v(), T("div", bv, [
        t.env === "development" && xv ? (v(), T("div", vv, [
          Ve(S(i), {
            data: [n.value],
            paths: ["imageData"]
          }, null, 8, ["data"])
        ])) : Z("", !0),
        x("input", {
          ref_key: "fileInput",
          ref: s,
          type: "file",
          accept: ".jpg,.jpeg,.png",
          class: "hidden",
          multiple: "",
          onChange: c
        }, null, 544),
        x("button", {
          type: "button",
          class: "upload-button",
          onClick: l
        }, [
          Ve(N, { icon: ["fass", "files"] })
        ]),
        n.value.files?.length ? (v(), T("div", wv, [
          (v(!0), T(Ne, null, Ke(n.value.files, (q, O) => (v(), T("div", {
            key: O,
            class: "selected-file"
          }, [
            x("img", {
              src: n.value.previewUrls[O],
              alt: "Preview"
            }, null, 8, Sv),
            x("button", {
              class: "remove-file",
              type: "button",
              onClick: (G) => d(O)
            }, [
              Ve(N, { icon: ["fass", "trash"] })
            ], 8, kv)
          ]))), 128))
        ])) : Z("", !0)
      ]);
    };
  }
}), Pv = /* @__PURE__ */ Mt(Iv, [["__scopeId", "data-v-bcaad5a2"]]), Cv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Pv }, Symbol.toStringTag, { value: "Module" })), Av = {
  key: 0,
  class: "debug"
}, Tv = { id: "formula-pricing" }, Ov = {
  key: 1,
  class: "extras"
}, Lv = { class: "heading" }, _v = { id: "hardware-total" }, $v = { class: "heading panels" }, Fv = !1, Dv = /* @__PURE__ */ Ye({
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
    const i = Ti(() => Promise.resolve().then(() => Wn)), s = t, n = e, a = Wc("calculator"), o = ie(() => a()), r = le("production");
    let l = null;
    const c = le(null), u = le([]), p = le(!1), d = le(""), h = ie(() => {
      if (!p.value || !u.value.length || u.value.every((_) => _.value === null)) return null;
      const B = H();
      return It(() => n("panel-result", B)), B;
    }), k = ie(() => {
      if (!o.value || !p.value || !u.value.length || u.value.every((_) => _.value === null)) return;
      const B = W();
      return It(() => n("hardware-result", B, N.value)), B;
    }), N = ie(() => {
      if (k.value)
        return Object.values(k.value).reduce((B, _) => B + _.totalCost, 0);
    });
    qe(h, (B) => {
      if (!p.value || !B || !o.value || !o.value?.inputShapes) return;
      const _ = (w) => w?.name ? w.name.toLowerCase() : "", L = new Map(
        o.value.inputShapes.map((w) => [_(w), w])
      ), E = /* @__PURE__ */ new Set();
      for (const w of Object.values(h.value)) {
        if (!w.name) continue;
        const X = _(w), se = L.get(X), oe = {
          ...w,
          name: w.name.toUpperCase() || se?.name.toUpperCase(),
          material: w.material?.toUpperCase() || se?.material?.toUpperCase(),
          bandingOptions: w.bandingOptions || {},
          finishOptions: w.finishOptions || {},
          orientationLock: w.orientationLock || null,
          notes: d.value,
          readonly: !0
        }, pe = se || o.value.createInputShape(oe);
        if (se) {
          Object.assign(se, oe);
          for (const Q of ["banding", "finish"])
            o.value.initExtrasOptions(se, Q);
        } else
          o.value.inputShapes.push(pe);
        E.add(X);
      }
      o.value.inputShapes = o.value.inputShapes.filter(
        (w) => E.has(_(w))
      );
    }, { immediate: !1 }), Vt(() => F());
    const q = (B) => {
      s.debug && console.log(B);
    }, O = () => {
      u.value = Object.values(c.value.inputs).map((B) => ({
        value: B.default ?? null
      })), console.log(u.value);
    }, G = (B, _) => {
      u.value[B] && (u.value[B].value = _);
    }, H = () => {
      try {
        return l.calculatePanelsFromFields(u.value);
      } catch (B) {
        return o.value.inputShapes.length = 0, console.error(B), null;
      }
    }, W = () => {
      try {
        return l.calculateHardwareFromFields(u.value);
      } catch (B) {
        return console.error(B), null;
      }
    }, F = async () => {
      if (!s.url && !s.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      s.url ? (q(`SmartCut - Formula calculator init from url: ${s.url}`), l = new ja({ url: s.url }), c.value = await l.getSpec()) : s.spec && (q("SmartCut - Formula calculator init with JSON"), l = new ja({ spec: s.spec }), c.value = await l.getSpec()), O(), p.value = !0;
    };
    return (B, _) => (v(), T(Ne, null, [
      r.value === "development" && Fv ? (v(), T("div", Av, [
        _[1] || (_[1] = x("div", null, "Developer information", -1)),
        Ve(S(i), {
          data: [h.value],
          paths: ["panelResult"]
        }, null, 8, ["data"])
      ])) : Z("", !0),
      x("div", Tv, [
        c.value?.projectName ? (v(), Ee($i, {
          key: 0,
          id: "project-name",
          type: "string",
          label: "Project name",
          placeholder: "Name",
          value: d.value,
          "onUpdate:value": _[0] || (_[0] = (L) => d.value = L)
        }, null, 8, ["value"])) : Z("", !0),
        (v(!0), T(Ne, null, Ke(c.value?.inputs, (L, E, w) => (v(), Ee($i, {
          id: "formula-field-" + w,
          key: w,
          type: L.type,
          label: L.label,
          placeholder: L.label,
          min: L.min ?? 0,
          max: L.max ?? null,
          default: L.default ?? 0,
          value: u.value[w]?.value,
          "onUpdate:value": (X) => G(w, X)
        }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]))), 128)),
        k.value ? (v(), T("div", Ov, [
          x("div", Lv, V(S(R)("Hardware")), 1),
          (v(!0), T(Ne, null, Ke(k.value, (L, E) => (v(), T("div", { key: E }, V(L.name) + " x" + V(L.q) + " = " + V(t.formatPrice(L.totalCost)), 1))), 128)),
          x("div", _v, V(S(R)("Hardware total")) + " = " + V(t.formatPrice(N.value)), 1)
        ])) : Z("", !0),
        x("div", $v, V(S(R)("Panels")), 1)
      ])
    ], 64));
  }
}), D0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Dv }, Symbol.toStringTag, { value: "Module" })), Ev = {
  id: "smartcut-notices",
  class: "smartcut-content"
}, Mv = { class: "content" }, Rv = ["onClick"], jv = ["innerHTML"], Vv = /* @__PURE__ */ Ye({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(t) {
    const e = t, { notices: i, dismissNotice: s } = Ts(), n = le({}), a = ie(() => e.position.includes("right") ? "notice-right" : "notice-left");
    return (o, r) => {
      const l = wi("FontAwesomeIcon");
      return v(), Ee(fr, { to: "body" }, [
        x("div", Ev, [
          Ve(Uc, {
            name: a.value,
            "move-class": "notice-move",
            tag: "div",
            class: Be(["notices-container", e.position])
          }, {
            default: Bi(() => [
              (v(!0), T(Ne, null, Ke(S(i), (c) => (v(), T("div", {
                key: c.id,
                ref_for: !0,
                ref: (u) => {
                  u && (n.value[c.id] = u);
                },
                class: Be([
                  "notice",
                  `notice--${c.type}`
                ])
              }, [
                x("div", Mv, [
                  x("div", {
                    class: "message",
                    onClick: (u) => c.action()
                  }, V(c.message), 9, Rv),
                  x("div", {
                    class: "additional-info",
                    innerHTML: c.additional
                  }, null, 8, jv)
                ]),
                c.persistent ? Z("", !0) : (v(), Ee(l, {
                  key: 0,
                  icon: ["fass", "trash"],
                  class: "dismiss",
                  onClick: (u) => S(s)(c.id)
                }, null, 8, ["onClick"]))
              ], 2))), 128))
            ]),
            _: 1
          }, 8, ["name", "class"])
        ])
      ]);
    };
  }
}), E0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Vv }, Symbol.toStringTag, { value: "Module" })), Bv = {
  key: 0,
  class: "stock-filter-card__image"
}, Nv = ["src", "alt"], Gv = { class: "stock-filter-card__content" }, qv = { class: "stock-filter-card__title" }, zv = { class: "stock-filter-card__specs" }, Wv = { class: "spec" }, Uv = { class: "spec__label" }, Hv = { class: "spec__value" }, Yv = { class: "spec" }, Kv = { class: "spec__label" }, Zv = { class: "spec__value" }, Jv = {
  key: 0,
  class: "spec"
}, Xv = { class: "spec__label" }, Qv = { class: "spec__value" }, ew = {
  key: 1,
  class: "spec"
}, tw = { class: "spec__label" }, iw = { class: "spec__value" }, sw = {
  key: 2,
  class: "spec"
}, nw = { class: "spec__label" }, aw = { class: "spec__value" }, ow = {
  key: 3,
  class: "spec"
}, rw = { class: "spec__label" }, lw = { class: "spec__value spec__value--color" }, cw = { key: 0 }, uw = {
  key: 4,
  class: "spec"
}, dw = { class: "spec__label" }, fw = { class: "spec__value" }, pw = {
  key: 0,
  class: "stock-filter-card__extras"
}, hw = {
  key: 0,
  class: "extras-badge extras-badge--banding"
}, gw = {
  key: 1,
  class: "extras-badge extras-badge--finish"
}, mw = {
  key: 2,
  class: "extras-badge extras-badge--planing"
}, yw = {
  key: 3,
  class: "extras-badge extras-badge--machining"
}, bw = {
  key: 1,
  class: "stock-filter-card__description"
}, vw = { class: "stock-filter-card__footer" }, ww = {
  key: 0,
  class: "stock-filter-card__price"
}, Sw = { class: "price__label" }, kw = { class: "price__value" }, xw = ["disabled"], Iw = /* @__PURE__ */ Ye({
  __name: "StockFilterCard",
  props: {
    stock: {},
    isSelected: { type: Boolean },
    isDisabled: { type: Boolean, default: !1 },
    formatPrice: {},
    buttonColor: { default: "#118ab2" },
    buttonTextColor: { default: "#ffffff" },
    locale: { default: "en-US" },
    displayMode: { default: "grid" }
  },
  emits: ["toggle-selection"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = le(!1), a = ie(() => i.stock.available !== !1), o = ie(() => i.isDisabled), r = ie(() => i.isSelected ? R("stockFilter.remove") : i.isDisabled ? R("stockFilter.differentSaw") : a.value ? R("stockFilter.select") : R("stockFilter.unavailable")), l = ie(() => i.stock.cost ? i.formatPrice(i.stock.cost, i.locale) : "N/A"), c = ie(() => i.stock.color ? typeof i.stock.color == "object" && "hex" in i.stock.color ? i.stock.color.hex : typeof i.stock.color == "string" ? i.stock.color : "" : ""), u = ie(() => i.stock.color ? typeof i.stock.color == "object" && "name" in i.stock.color ? i.stock.color.name : typeof i.stock.color == "string" ? i.stock.color : "" : ""), p = ie(() => {
      if (!i.stock.grain) return "";
      switch (i.stock.grain) {
        case "l":
          return R("fields.grain.length");
        case "w":
          return R("fields.grain.width");
        default:
          return "";
      }
    }), d = ie(() => {
      const q = i.stock.extras;
      return q ? !!(q.banding?.length || q.finish?.length || q.planing?.length || q.machining?.length) : !1;
    }), h = ie(() => i.isSelected ? {
      "--btn-color": void 0,
      "--btn-bg": void 0,
      "--btn-hover-bg": void 0
    } : {
      "--btn-color": i.buttonTextColor,
      "--btn-bg": i.buttonColor,
      "--btn-hover-bg": k(i.buttonColor, -8)
    });
    function k(q, O) {
      const G = q.replace("#", ""), H = parseInt(G, 16), W = Math.round(2.55 * O), F = (H >> 16) + W, B = (H >> 8 & 255) + W, _ = (H & 255) + W;
      return `#${(16777216 + (F < 255 ? F < 1 ? 0 : F : 255) * 65536 + (B < 255 ? B < 1 ? 0 : B : 255) * 256 + (_ < 255 ? _ < 1 ? 0 : _ : 255)).toString(16).slice(1)}`;
    }
    function N() {
      s("toggle-selection", i.stock);
    }
    return (q, O) => (v(), T("div", {
      class: Be(["stock-filter-card", {
        "stock-filter-card--selected": t.isSelected,
        "stock-filter-card--unavailable": !a.value,
        "stock-filter-card--disabled": o.value,
        "stock-filter-card--list": t.displayMode === "list"
      }])
    }, [
      t.stock.imageUrl && !n.value ? (v(), T("div", Bv, [
        x("img", {
          src: t.stock.imageUrl,
          alt: t.stock.name || t.stock.name || t.stock.material,
          loading: "lazy",
          onError: O[0] || (O[0] = (G) => n.value = !0)
        }, null, 40, Nv)
      ])) : Z("", !0),
      x("div", Gv, [
        x("h3", qv, V(t.stock.name || t.stock.name || `${t.stock.material} ${t.stock.l}×${t.stock.w}`), 1),
        x("div", zv, [
          x("div", Wv, [
            x("span", Uv, V(S(R)("woodwork.material")) + ":", 1),
            x("span", Hv, V(t.stock.material || S(R)("general.na")), 1)
          ]),
          x("div", Yv, [
            x("span", Kv, V(S(R)("stockFilter.dimensions")) + ":", 1),
            x("span", Zv, V(t.stock.l) + " × " + V(t.stock.w) + V(t.stock.t ? ` × ${t.stock.t}` : ""), 1)
          ]),
          t.stock.category ? (v(), T("div", Jv, [
            x("span", Xv, V(S(R)("fields.category")) + ":", 1),
            x("span", Qv, V(t.stock.category), 1)
          ])) : Z("", !0),
          t.stock.finish ? (v(), T("div", ew, [
            x("span", tw, V(S(R)("fields.finish")) + ":", 1),
            x("span", iw, V(t.stock.finish), 1)
          ])) : Z("", !0),
          t.stock.grain ? (v(), T("div", sw, [
            x("span", nw, V(S(R)("fields.grain")) + ":", 1),
            x("span", aw, V(p.value), 1)
          ])) : Z("", !0),
          t.stock.color ? (v(), T("div", ow, [
            x("span", rw, V(S(R)("fields.color")) + ":", 1),
            x("span", lw, [
              x("span", {
                class: "color-swatch",
                style: vt({ backgroundColor: c.value })
              }, null, 4),
              u.value ? (v(), T("span", cw, V(u.value), 1)) : Z("", !0)
            ])
          ])) : Z("", !0),
          t.stock.weight ? (v(), T("div", uw, [
            x("span", dw, V(S(R)("fields.weight")) + ":", 1),
            x("span", fw, V(t.stock.weight) + " kg", 1)
          ])) : Z("", !0)
        ]),
        d.value ? (v(), T("div", pw, [
          t.stock.extras?.banding?.length ? (v(), T("span", hw, V(S(R)("stockFilter.banding")), 1)) : Z("", !0),
          t.stock.extras?.finish?.length ? (v(), T("span", gw, V(S(R)("stockFilter.finishOption")), 1)) : Z("", !0),
          t.stock.extras?.planing?.length ? (v(), T("span", mw, V(S(R)("stockFilter.planing")), 1)) : Z("", !0),
          t.stock.extras?.machining?.length ? (v(), T("span", yw, V(S(R)("stockFilter.machining")), 1)) : Z("", !0)
        ])) : Z("", !0),
        t.stock.description ? (v(), T("div", bw, V(t.stock.description), 1)) : Z("", !0)
      ]),
      x("div", vw, [
        t.stock.cost ? (v(), T("div", ww, [
          x("span", Sw, V(S(R)("stockFilter.price")) + ": ", 1),
          x("span", kw, V(l.value), 1)
        ])) : Z("", !0),
        x("button", {
          type: "button",
          class: Be(["c-btn c-btn--sm c-btn--no-effects no-margin", { "c-btn--delete": t.isSelected }]),
          style: vt(h.value),
          disabled: !a.value || o.value,
          onClick: N
        }, V(r.value), 15, xw)
      ])
    ], 2));
  }
}), Pw = /* @__PURE__ */ Mt(Iw, [["__scopeId", "data-v-c4736f38"]]), Cw = { class: "filter-panel-header" }, Aw = { class: "filter-panel-title" }, Tw = { class: "filter-panel-content" }, Ow = {
  key: 0,
  class: "filter-summary"
}, Lw = { class: "filter-summary__count" }, _w = { class: "filter-groups" }, $w = { class: "filter-group__header" }, Fw = { class: "filter-group__label" }, Dw = { class: "filter-group__content" }, Ew = {
  key: 0,
  class: "filter-select"
}, Mw = ["checked", "onChange"], Rw = ["value", "onChange"], jw = { value: "" }, Vw = ["value"], Bw = {
  key: 1,
  class: "filter-range"
}, Nw = { class: "filter-range__inputs" }, Gw = ["value", "min", "max", "step", "onInput"], qw = ["value", "min", "max", "step", "onInput"], zw = {
  key: 2,
  class: "filter-boolean"
}, Ww = { class: "filter-checkbox" }, Uw = ["checked", "onChange"], Hw = /* @__PURE__ */ Ye({
  __name: "StockFilterPanel",
  props: {
    filterConfigs: {},
    activeFilters: {},
    getUniqueValues: { type: Function },
    getFieldRange: { type: Function }
  },
  emits: ["apply-filter", "remove-filter", "clear-filters"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = le(!0), a = le({}), o = ie(() => i.activeFilters.length);
    function r() {
      n.value = !n.value;
    }
    function l(G) {
      return {
        material: R("woodwork.material"),
        t: R("woodwork.thickness") + " (mm)",
        cost: R("stockFilter.price"),
        color: R("fields.color"),
        l: R("woodwork.length"),
        w: R("woodwork.width"),
        weight: R("fields.weight"),
        name: R("fields.name"),
        category: R("general.category")
      }[G.field] || G.label;
    }
    function c(G) {
      return G.options?.length ? G.options : i.getUniqueValues(G.field).map((W) => G.field === "color" && typeof W == "object" && W !== null ? "name" in W && W.name ? {
        label: W.name,
        value: W
      } : {
        label: W.hex || String(W),
        value: W
      } : {
        label: String(W),
        value: W
      });
    }
    function u(G) {
      return i.activeFilters.find((W) => W.field === G)?.value;
    }
    function p(G, H) {
      const W = u(G);
      return Array.isArray(W) ? G === "color" && typeof H == "object" && H !== null && "hex" in H ? W.some((F) => typeof F == "object" && F !== null && "hex" in F && F.hex === H.hex) : W.includes(H) : G === "color" && typeof H == "object" && H !== null && "hex" in H ? typeof W == "object" && W !== null && "hex" in W && W.hex === H.hex : W === H;
    }
    function d(G, H) {
      const F = H.target.value;
      F === "" ? s("remove-filter", G) : s("apply-filter", G, F, "select");
    }
    function h(G, H, W) {
      const F = W.target, B = u(G) || [], _ = Array.isArray(B) ? [...B] : [];
      if (F.checked)
        _.includes(H) || _.push(H);
      else {
        const L = _.indexOf(H);
        L !== -1 && _.splice(L, 1);
      }
      _.length === 0 ? s("remove-filter", G) : s("apply-filter", G, _, "multiselect");
    }
    function k(G, H) {
      if (a.value[G]?.[H] !== void 0)
        return a.value[G][H];
      const W = i.activeFilters.find((F) => F.field === G);
      if (W?.value && typeof W.value == "object")
        return W.value[H];
    }
    function N(G, H, W) {
      const F = W.target, B = F.value ? Number(F.value) : void 0;
      a.value[G] || (a.value[G] = {}), a.value[G][H] = B;
      const _ = a.value[G].min, L = a.value[G].max;
      _ !== void 0 || L !== void 0 ? s("apply-filter", G, { min: _, max: L }, "range") : s("remove-filter", G);
    }
    function q(G, H) {
      H.target.checked ? s("apply-filter", G, !0, "boolean") : s("remove-filter", G);
    }
    function O() {
      a.value = {}, s("clear-filters");
    }
    return (G, H) => (v(), T("div", {
      class: Be(["stock-filter-panel", { "stock-filter-panel--open": n.value }])
    }, [
      x("div", Cw, [
        x("h3", Aw, V(S(R)("stockFilter.filters")), 1),
        x("button", {
          type: "button",
          class: "c-btn c-btn--no-effects c-btn--md filter-panel-toggle",
          onClick: r
        }, V(n.value ? "−" : "+"), 1)
      ]),
      Ve(Hc, { name: "filter-panel-content" }, {
        default: Bi(() => [
          Vi(x("div", Tw, [
            o.value > 0 ? (v(), T("div", Ow, [
              x("span", Lw, V(S(R)("stockFilter.active_filters", [o.value])), 1),
              x("button", {
                type: "button",
                class: "c-btn c-btn--no-effects c-btn--sm c-btn--delete no-margin",
                onClick: O
              }, V(S(R)("stockFilter.clear_filters")), 1)
            ])) : Z("", !0),
            x("div", _w, [
              (v(!0), T(Ne, null, Ke(t.filterConfigs, (W) => (v(), T("div", {
                key: W.field,
                class: "filter-group"
              }, [
                x("div", $w, [
                  x("label", Fw, V(l(W)), 1)
                ]),
                x("div", Dw, [
                  W.type === "select" || W.type === "multiselect" ? (v(), T("div", Ew, [
                    W.type === "multiselect" ? (v(!0), T(Ne, { key: 0 }, Ke(c(W), (F) => (v(), T("label", {
                      key: F.value,
                      class: "filter-checkbox"
                    }, [
                      x("input", {
                        checked: p(W.field, F.value),
                        type: "checkbox",
                        onChange: (B) => h(W.field, F.value, B)
                      }, null, 40, Mw),
                      x("span", null, V(F.label), 1)
                    ]))), 128)) : (v(), T("select", {
                      key: 1,
                      value: u(W.field),
                      class: "filter-select-input",
                      onChange: (F) => d(W.field, F)
                    }, [
                      x("option", jw, V(S(R)("stockFilter.all")), 1),
                      (v(!0), T(Ne, null, Ke(c(W), (F) => (v(), T("option", {
                        key: F.value,
                        value: F.value
                      }, V(F.label), 9, Vw))), 128))
                    ], 40, Rw))
                  ])) : W.type === "range" ? (v(), T("div", Bw, [
                    x("div", Nw, [
                      x("input", {
                        value: k(W.field, "min"),
                        min: W.min,
                        max: W.max,
                        step: W.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Min",
                        onInput: (F) => N(W.field, "min", F)
                      }, null, 40, Gw),
                      H[0] || (H[0] = x("span", { class: "filter-range__separator" }, "–", -1)),
                      x("input", {
                        value: k(W.field, "max"),
                        min: W.min,
                        max: W.max,
                        step: W.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Max",
                        onInput: (F) => N(W.field, "max", F)
                      }, null, 40, qw)
                    ])
                  ])) : W.type === "boolean" ? (v(), T("div", zw, [
                    x("label", Ww, [
                      x("input", {
                        checked: u(W.field) === !0,
                        type: "checkbox",
                        onChange: (F) => q(W.field, F)
                      }, null, 40, Uw),
                      x("span", null, V(W.label), 1)
                    ])
                  ])) : Z("", !0)
                ])
              ]))), 128))
            ])
          ], 512), [
            [Cn, n.value]
          ])
        ]),
        _: 1
      })
    ], 2));
  }
}), Yw = /* @__PURE__ */ Mt(Hw, [["__scopeId", "data-v-315e3799"]]), Kw = { class: "stock-filter-results" }, Zw = { class: "results-header" }, Jw = { class: "results-info" }, Xw = { class: "results-count" }, Qw = { class: "results-controls" }, eS = { class: "c-btn-group c-btn--no-effects display-mode-toggle" }, tS = ["title"], iS = ["title"], sS = {
  key: 0,
  class: "results-loading"
}, nS = {
  key: 1,
  class: "results-empty"
}, aS = { class: "empty-message" }, oS = {
  key: 3,
  class: "results-pagination"
}, rS = ["disabled"], lS = { class: "c-btn-group c-btn--no-effects pagination-pages" }, cS = ["onClick"], uS = ["disabled"], dS = /* @__PURE__ */ Ye({
  __name: "StockFilterResults",
  props: {
    totalResults: {},
    displayMode: {},
    loading: { type: Boolean, default: !1 },
    hasActiveFilters: { type: Boolean, default: !1 },
    selectedCount: { default: 0 },
    currentPage: { default: 1 },
    totalPages: { default: 1 }
  },
  emits: ["update:displayMode", "clear-filters", "clear-selection", "go-to-page"],
  setup(t) {
    const e = t, i = ie(() => {
      const s = [], a = Math.floor(2.5);
      let o = Math.max(1, e.currentPage - a), r = Math.min(e.totalPages, o + 5 - 1);
      r === e.totalPages && (o = Math.max(1, r - 5 + 1));
      for (let l = o; l <= r; l++)
        s.push(l);
      return s;
    });
    return (s, n) => (v(), T("div", Kw, [
      x("div", Zw, [
        x("div", Jw, [
          x("div", Xw, V(t.totalResults) + " " + V(t.totalResults === 1 ? S(R)("stockFilter.result_one") : S(R)("stockFilter.result_other")), 1),
          t.selectedCount > 0 ? (v(), T("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--sm c-btn--delete c-btn--no-effects no-margin",
            onClick: n[0] || (n[0] = (a) => s.$emit("clear-selection"))
          }, V(S(R)("stockFilter.clear_selection")) + " (" + V(t.selectedCount) + ") ", 1)) : Z("", !0)
        ]),
        x("div", Qw, [
          x("div", eS, [
            x("button", {
              type: "button",
              class: Be(["c-btn c-btn--sm", { selected: t.displayMode === "grid" }]),
              title: S(R)("stockFilter.grid_view"),
              onClick: n[1] || (n[1] = (a) => s.$emit("update:displayMode", "grid"))
            }, [...n[6] || (n[6] = [
              pr('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-e480154f><rect x="1" y="1" width="6" height="6" data-v-e480154f></rect><rect x="9" y="1" width="6" height="6" data-v-e480154f></rect><rect x="1" y="9" width="6" height="6" data-v-e480154f></rect><rect x="9" y="9" width="6" height="6" data-v-e480154f></rect></svg>', 1)
            ])], 10, tS),
            x("button", {
              type: "button",
              class: Be(["c-btn c-btn--sm", { selected: t.displayMode === "list" }]),
              title: S(R)("stockFilter.list_view"),
              onClick: n[2] || (n[2] = (a) => s.$emit("update:displayMode", "list"))
            }, [...n[7] || (n[7] = [
              x("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                x("rect", {
                  x: "1",
                  y: "1",
                  width: "14",
                  height: "2"
                }),
                x("rect", {
                  x: "1",
                  y: "7",
                  width: "14",
                  height: "2"
                }),
                x("rect", {
                  x: "1",
                  y: "13",
                  width: "14",
                  height: "2"
                })
              ], -1)
            ])], 10, iS)
          ])
        ])
      ]),
      t.loading ? (v(), T("div", sS, [
        n[8] || (n[8] = x("div", { class: "spinner" }, null, -1)),
        x("p", null, V(S(R)("actions.loading")) + "...", 1)
      ])) : t.totalResults === 0 ? (v(), T("div", nS, [
        x("p", aS, V(S(R)("stockFilter.no_results")), 1),
        t.hasActiveFilters ? (v(), T("button", {
          key: 0,
          type: "button",
          class: "c-btn",
          onClick: n[3] || (n[3] = (a) => s.$emit("clear-filters"))
        }, V(S(R)("stockFilter.clear_filters")), 1)) : Z("", !0)
      ])) : (v(), T("div", {
        key: 2,
        class: Be(["results-grid", { "results-grid--list": t.displayMode === "list" }])
      }, [
        un(s.$slots, "default", {}, void 0, !0)
      ], 2)),
      t.totalPages > 1 ? (v(), T("div", oS, [
        x("button", {
          type: "button",
          class: "c-btn c-btn--sm c-btn--no-effects",
          disabled: t.currentPage === 1,
          onClick: n[4] || (n[4] = (a) => s.$emit("go-to-page", t.currentPage - 1))
        }, V(S(R)("pagination.previous")), 9, rS),
        x("div", lS, [
          (v(!0), T(Ne, null, Ke(i.value, (a) => (v(), T("button", {
            key: a,
            type: "button",
            class: Be(["c-btn c-btn--sm", { selected: a === t.currentPage }]),
            onClick: (o) => s.$emit("go-to-page", a)
          }, V(a), 11, cS))), 128))
        ]),
        x("button", {
          type: "button",
          class: "c-btn c-btn--sm c-btn--no-effects",
          disabled: t.currentPage === t.totalPages,
          onClick: n[5] || (n[5] = (a) => s.$emit("go-to-page", t.currentPage + 1))
        }, V(S(R)("pagination.next")), 9, uS)
      ])) : Z("", !0)
    ]));
  }
}), fS = /* @__PURE__ */ Mt(dS, [["__scopeId", "data-v-e480154f"]]), pS = { class: "stock-filter-search" }, hS = { class: "search-input-wrapper" }, gS = ["placeholder"], mS = /* @__PURE__ */ Ye({
  __name: "StockFilterSearch",
  props: {
    modelValue: {},
    placeholder: { default: "Search materials..." },
    debounce: { default: 300 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = le(i.modelValue);
    let a = null;
    qe(() => i.modelValue, (l) => {
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
    return (l, c) => (v(), T("div", pS, [
      x("div", hS, [
        Vi(x("input", {
          "onUpdate:modelValue": c[0] || (c[0] = (u) => n.value = u),
          type: "text",
          class: "search-input",
          placeholder: t.placeholder,
          onInput: o
        }, null, 40, gS), [
          [ba, n.value]
        ]),
        n.value ? (v(), T("button", {
          key: 0,
          type: "button",
          class: "c-btn c-btn--sm c-btn--ghost search-clear",
          onClick: r
        }, " × ")) : Z("", !0)
      ])
    ]));
  }
}), yS = /* @__PURE__ */ Mt(mS, [["__scopeId", "data-v-b59f1b31"]]), bS = { class: "stock-filter-sort" }, vS = { class: "sort-controls" }, wS = { class: "sort-label" }, SS = ["value"], kS = ["value"], xS = ["title"], IS = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, PS = {
  key: 0,
  d: "M8 3l4 5H4z"
}, CS = {
  key: 1,
  d: "M8 13l4-5H4z"
}, AS = /* @__PURE__ */ Ye({
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
        cost: R("stockFilter.price"),
        material: R("woodwork.material"),
        t: R("woodwork.thickness"),
        l: R("woodwork.length"),
        w: R("woodwork.width"),
        pricePerKg: R("stockFilter.price") + " per kg",
        pricePerM2: R("stockFilter.price") + " per m²",
        weight: R("fields.weight"),
        name: R("fields.name")
      }[l] || l.charAt(0).toUpperCase() + l.slice(1);
    }
    function o(l) {
      const c = l.target;
      s("update:sortBy", c.value);
    }
    function r() {
      s("update:sortOrder", i.sortOrder === "asc" ? "desc" : "asc");
    }
    return (l, c) => (v(), T("div", bS, [
      x("div", vS, [
        x("label", wS, V(S(R)("stockFilter.sort_by")) + ":", 1),
        x("select", {
          value: t.sortBy,
          class: "sort-select",
          onChange: o
        }, [
          (v(!0), T(Ne, null, Ke(S(n), (u) => (v(), T("option", {
            key: u.value,
            value: u.value
          }, V(u.label), 9, kS))), 128))
        ], 40, SS),
        x("button", {
          type: "button",
          class: Be(["sort-order-btn c-btn c-btn--no-effects", { "sort-order-btn--desc": t.sortOrder === "desc" }]),
          title: t.sortOrder === "asc" ? S(R)("options.by_dimensions") : S(R)("options.by_dimensions"),
          onClick: r
        }, [
          (v(), T("svg", IS, [
            t.sortOrder === "asc" ? (v(), T("path", PS)) : (v(), T("path", CS))
          ]))
        ], 10, xS)
      ])
    ]));
  }
}), TS = /* @__PURE__ */ Mt(AS, [["__scopeId", "data-v-e21282b4"]]), OS = {
  id: "stock-filter",
  class: "smartcut-content"
}, LS = /* @__PURE__ */ Ye({
  __name: "StockFilter",
  props: {
    stockOptions: {
      type: Array,
      required: !0
    },
    config: {
      type: Object,
      default: () => Sy()
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
    },
    storageKey: {
      type: String,
      default: "stock-filter-selections"
    },
    initialProductId: {
      type: String,
      default: null
    },
    serverPagination: {
      type: Object,
      default: null
    }
  },
  emits: ["stock-added", "stock-removed", "selection-changed", "selection-confirmed"],
  setup(t, { expose: e, emit: i }) {
    const s = t, n = i, a = le(s.stockOptions), o = le(s.config), r = le(s.numberFormat);
    qe(() => s.stockOptions, (ye) => {
      a.value = ye;
    }), qe(() => s.config, (ye) => {
      o.value = ye;
    });
    const {
      activeFilters: l,
      searchQuery: c,
      sortBy: u,
      sortOrder: p,
      displayMode: d,
      currentPage: h,
      filteredStock: k,
      paginatedStock: N,
      selectedStock: q,
      totalPages: O,
      isLoading: G,
      applyFilter: H,
      removeFilter: W,
      clearFilters: F,
      goToPage: B,
      toggleStockSelection: _,
      isStockSelected: L,
      clearSelection: E,
      selectById: w,
      createInputStock: X,
      getUniqueValues: se,
      getFieldRange: oe
    } = bu({
      stockOptions: a,
      config: o,
      numberFormat: r,
      serverPagination: s.serverPagination || void 0
    }), pe = ie(() => s.loading || G.value), Q = hr(s.storageKey, []), { addNotice: M } = Ts();
    function U(ye) {
      return ye.db_id || `${ye.material}-${ye.l}-${ye.w}-${ye.t}`;
    }
    function ne() {
      const ye = new Set(s.stockOptions.map(U)), _e = Q.value.filter((Qe) => ye.has(Qe)), J = Q.value.length - _e.length;
      J > 0 && (Q.value = _e, M({
        message: J === 1 ? "A previously selected material is no longer available" : `${J} previously selected materials are no longer available`,
        type: "warning"
      })), _e.forEach((Qe) => {
        const Ze = s.stockOptions.find((ot) => U(ot) === Qe);
        if (Ze && !L(Ze)) {
          _(Ze);
          const ot = X(Ze);
          n("stock-added", [ot]);
        }
      });
    }
    qe(q, (ye) => {
      Q.value = ye.map(U);
    }, { deep: !0 }), Vt(() => {
      if (s.initialProductId) {
        const ye = w(s.initialProductId);
        if (ye) {
          Q.value = [];
          const _e = X(ye);
          n("stock-added", [_e]);
        }
        return;
      }
      Q.value.length > 0 && ne();
    });
    function ae() {
      E(), Q.value = [];
    }
    const ce = ie(() => s.config.availableFilters.filter((ye) => {
      const _e = se(ye.field);
      return _e.length > 0 && _e.some((J) => J != null);
    })), me = ie(() => q.value.length === 0 ? null : q.value[0].db_sawId || null);
    function ke(ye) {
      if (!me.value) return !1;
      const _e = ye.db_sawId;
      return _e ? _e !== me.value : !1;
    }
    function Ae(ye) {
      if (ke(ye)) return;
      const _e = L(ye);
      if (_(ye), _e) {
        const J = X(ye);
        n("stock-removed", J);
      } else {
        const J = X(ye);
        n("stock-added", [J]);
      }
    }
    function je() {
      for (const ye of q.value) {
        const _e = X(ye);
        n("stock-removed", _e);
      }
      ae();
    }
    return e({
      applyFilter: H,
      removeFilter: W,
      clearFilters: F,
      clearSelection: ae,
      selectedStock: q,
      filteredStock: k,
      getUniqueValues: se,
      getFieldRange: oe
    }), (ye, _e) => (v(), T("div", OS, [
      t.config.enableSearch ? (v(), Ee(yS, {
        key: 0,
        modelValue: S(c),
        "onUpdate:modelValue": _e[0] || (_e[0] = (J) => sa(c) ? c.value = J : null)
      }, null, 8, ["modelValue"])) : Z("", !0),
      ce.value.length > 0 ? (v(), Ee(Yw, {
        key: 1,
        "filter-configs": ce.value,
        "active-filters": S(l),
        "get-unique-values": S(se),
        "get-field-range": S(oe),
        onApplyFilter: S(H),
        onRemoveFilter: S(W),
        onClearFilters: S(F)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : Z("", !0),
      t.config.sortOptions.length > 0 ? (v(), Ee(TS, {
        key: 2,
        "sort-by": S(u),
        "onUpdate:sortBy": _e[1] || (_e[1] = (J) => sa(u) ? u.value = J : null),
        "sort-order": S(p),
        "onUpdate:sortOrder": _e[2] || (_e[2] = (J) => sa(p) ? p.value = J : null),
        "available-fields": t.config.sortOptions
      }, null, 8, ["sort-by", "sort-order", "available-fields"])) : Z("", !0),
      Ve(fS, {
        "total-results": S(N).length,
        "display-mode": S(d),
        loading: pe.value,
        "has-active-filters": S(l).length > 0,
        "selected-count": S(q).length,
        "current-page": S(h),
        "total-pages": S(O),
        "onUpdate:displayMode": _e[3] || (_e[3] = (J) => d.value = J),
        onClearFilters: S(F),
        onClearSelection: je,
        onGoToPage: S(B)
      }, {
        default: Bi(() => [
          (v(!0), T(Ne, null, Ke(S(N), (J, Qe) => (v(), Ee(Pw, {
            key: J.db_id || `${J.material}-${J.l}-${J.w}-${J.t}-${Qe}`,
            stock: J,
            "is-selected": S(L)(J),
            "is-disabled": ke(J),
            "format-price": t.formatPrice,
            "button-color": t.colors.button,
            "button-text-color": t.colors.buttonText,
            locale: t.locale,
            "display-mode": S(d),
            onToggleSelection: Ae
          }, null, 8, ["stock", "is-selected", "is-disabled", "format-price", "button-color", "button-text-color", "locale", "display-mode"]))), 128))
        ]),
        _: 1
      }, 8, ["total-results", "display-mode", "loading", "has-active-filters", "selected-count", "current-page", "total-pages", "onClearFilters", "onGoToPage"])
    ]));
  }
}), M0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: LS }, Symbol.toStringTag, { value: "Module" })), _S = { class: "order-lookup" }, $S = { class: "order-lookup__header" }, FS = { class: "order-lookup__title" }, DS = { class: "order-lookup__subtitle" }, ES = { class: "order-lookup__field" }, MS = {
  for: "orderId",
  class: "order-lookup__label"
}, RS = ["placeholder"], jS = { class: "order-lookup__field" }, VS = {
  for: "postalCode",
  class: "order-lookup__label"
}, BS = ["placeholder"], NS = {
  key: 0,
  class: "order-lookup__error"
}, GS = ["disabled"], qS = {
  key: 0,
  class: "order-lookup__spinner"
}, zS = {
  key: 1,
  class: "order-lookup__result"
}, WS = { class: "order-lookup__result-header" }, US = { class: "order-lookup__order-card" }, HS = { class: "order-lookup__status-row" }, YS = { class: "order-lookup__order-id" }, KS = { class: "order-lookup__info-row" }, ZS = { class: "order-lookup__info-label" }, JS = { class: "order-lookup__info-value" }, XS = { class: "order-lookup__info-row" }, QS = { class: "order-lookup__info-label" }, ek = { class: "order-lookup__info-value" }, tk = {
  key: 0,
  class: "order-lookup__section"
}, ik = { class: "order-lookup__section-title" }, sk = { class: "order-lookup__address" }, nk = { key: 0 }, ak = { key: 1 }, ok = {
  key: 0,
  class: "order-lookup__shipping-method"
}, rk = { class: "order-lookup__info-label" }, lk = { class: "order-lookup__info-value" }, ck = {
  key: 1,
  class: "order-lookup__section"
}, uk = { class: "order-lookup__section-title" }, dk = { class: "order-lookup__items" }, fk = { class: "order-lookup__item-header" }, pk = { class: "order-lookup__item-number" }, hk = { class: "order-lookup__item-parts" }, gk = {
  key: 0,
  class: "order-lookup__item-stock"
}, mk = { class: "order-lookup__item-price" }, yk = ["href"], bk = {
  key: 2,
  class: "order-lookup__section"
}, vk = ["href"], wk = { class: "order-lookup__section order-lookup__pricing" }, Sk = { class: "order-lookup__section-title" }, kk = {
  key: 0,
  class: "order-lookup__price-row"
}, xk = { class: "order-lookup__price-row order-lookup__price-row--total" }, Ik = /* @__PURE__ */ Ye({
  __name: "OrderLookup",
  props: {
    apiBaseUrl: {},
    orgSlug: {},
    isCustomDomain: { type: Boolean, default: !1 },
    formatPrice: {},
    locale: { default: "en-US" }
  },
  setup(t) {
    const e = t, i = le(""), s = le(""), n = le(!1), a = le(""), o = le(null);
    function r() {
      return e.isCustomDomain ? `${e.apiBaseUrl}ecommerce/order-lookup` : `${e.apiBaseUrl}ecommerce/${e.orgSlug}/order-lookup`;
    }
    async function l() {
      if (!(!i.value || !s.value)) {
        n.value = !0, a.value = "", o.value = null;
        try {
          const d = new URL(r());
          d.searchParams.set("orderId", i.value.trim()), d.searchParams.set("postalCode", s.value.trim());
          const h = await fetch(d.toString(), {
            credentials: "include"
          }), k = await h.json();
          if (!h.ok) {
            a.value = k.error || R("orderLookup.notFound");
            return;
          }
          o.value = k.order;
        } catch (d) {
          console.error("[OrderLookup] Error:", d), a.value = R("orderLookup.error");
        } finally {
          n.value = !1;
        }
      }
    }
    function c() {
      o.value = null, i.value = "", s.value = "", a.value = "";
    }
    function u(d) {
      return new Date(d).toLocaleDateString(e.locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    }
    function p(d) {
      return {
        pending: R("orderLookup.statusPending"),
        cut: R("orderLookup.statusCut"),
        dispatched: R("orderLookup.statusDispatched"),
        cancelled: R("orderLookup.statusCancelled")
      }[d] || d;
    }
    return (d, h) => (v(), T("div", _S, [
      x("div", $S, [
        x("h2", FS, V(S(R)("orderLookup.title")), 1),
        x("p", DS, V(S(R)("orderLookup.subtitle")), 1)
      ]),
      o.value ? Z("", !0) : (v(), T("form", {
        key: 0,
        class: "order-lookup__form",
        onSubmit: Tn(l, ["prevent"])
      }, [
        x("div", ES, [
          x("label", MS, V(S(R)("orderLookup.orderId")), 1),
          Vi(x("input", {
            id: "orderId",
            "onUpdate:modelValue": h[0] || (h[0] = (k) => i.value = k),
            type: "text",
            class: "order-lookup__input",
            placeholder: S(R)("orderLookup.orderIdPlaceholder"),
            required: ""
          }, null, 8, RS), [
            [ba, i.value]
          ])
        ]),
        x("div", jS, [
          x("label", VS, V(S(R)("orderLookup.postalCode")), 1),
          Vi(x("input", {
            id: "postalCode",
            "onUpdate:modelValue": h[1] || (h[1] = (k) => s.value = k),
            type: "text",
            class: "order-lookup__input",
            placeholder: S(R)("orderLookup.postalCodePlaceholder"),
            required: ""
          }, null, 8, BS), [
            [ba, s.value]
          ])
        ]),
        a.value ? (v(), T("div", NS, V(a.value), 1)) : Z("", !0),
        x("button", {
          type: "submit",
          class: "c-btn c-btn--primary",
          disabled: n.value || !i.value || !s.value
        }, [
          n.value ? (v(), T("span", qS)) : Z("", !0),
          si(" " + V(n.value ? S(R)("general.loading") : S(R)("orderLookup.search")), 1)
        ], 8, GS)
      ], 32)),
      o.value ? (v(), T("div", zS, [
        x("div", WS, [
          x("h3", null, V(S(R)("orderLookup.orderFound")), 1),
          x("button", {
            type: "button",
            class: "c-btn c-btn--sm c-btn--secondary",
            onClick: c
          }, V(S(R)("orderLookup.searchAnother")), 1)
        ]),
        x("div", US, [
          x("div", HS, [
            x("span", YS, V(S(R)("orderLookup.order")) + " #" + V(o.value._id), 1),
            x("span", {
              class: Be(["order-lookup__status-badge", `order-lookup__status-badge--${o.value.status}`])
            }, V(p(o.value.status)), 3)
          ]),
          x("div", KS, [
            x("span", ZS, V(S(R)("orderLookup.orderDate")) + ":", 1),
            x("span", JS, V(u(o.value.createdAt)), 1)
          ]),
          x("div", XS, [
            x("span", QS, V(S(R)("orderLookup.customer")) + ":", 1),
            x("span", ek, V(o.value.customer.name), 1)
          ]),
          o.value.shipping?.address ? (v(), T("div", tk, [
            x("h4", ik, V(S(R)("orderLookup.shippingAddress")), 1),
            x("address", sk, [
              si(V(o.value.shipping.address.line1), 1),
              h[3] || (h[3] = x("br", null, null, -1)),
              o.value.shipping.address.line2 ? (v(), T("span", nk, [
                si(V(o.value.shipping.address.line2), 1),
                h[2] || (h[2] = x("br", null, null, -1))
              ])) : Z("", !0),
              si(" " + V(o.value.shipping.address.city), 1),
              o.value.shipping.address.state ? (v(), T("span", ak, ", " + V(o.value.shipping.address.state), 1)) : Z("", !0),
              h[4] || (h[4] = x("br", null, null, -1)),
              si(" " + V(o.value.shipping.address.postalCode), 1),
              h[5] || (h[5] = x("br", null, null, -1)),
              si(" " + V(o.value.shipping.address.country), 1)
            ]),
            o.value.shipping.method ? (v(), T("div", ok, [
              x("span", rk, V(S(R)("orderLookup.shippingMethod")) + ":", 1),
              x("span", lk, V(o.value.shipping.method), 1)
            ])) : Z("", !0)
          ])) : Z("", !0),
          o.value.items && o.value.items.length > 0 ? (v(), T("div", ck, [
            x("h4", uk, V(S(R)("orderLookup.items")) + " (" + V(o.value.items.length) + ")", 1),
            x("div", dk, [
              (v(!0), T(Ne, null, Ke(o.value.items, (k, N) => (v(), T("div", {
                key: k.id,
                class: "order-lookup__item"
              }, [
                x("div", fk, [
                  x("span", pk, V(S(R)("orderLookup.item")) + " " + V(N + 1), 1),
                  x("span", hk, V(k.partsCount) + " " + V(S(R)("orderLookup.parts")), 1)
                ]),
                k.stockSummary && k.stockSummary.length > 0 ? (v(), T("div", gk, [
                  (v(!0), T(Ne, null, Ke(k.stockSummary, (q) => (v(), T("div", {
                    key: q.id,
                    class: "order-lookup__stock-line"
                  }, V(q.q) + "x " + V(q.name || q.material) + " (" + V(q.l) + "×" + V(q.w) + ") ", 1))), 128))
                ])) : Z("", !0),
                x("div", mk, V(t.formatPrice(k.pricing.subtotal)), 1),
                k.pdfUrl ? (v(), T("a", {
                  key: 1,
                  href: k.pdfUrl,
                  target: "_blank",
                  class: "order-lookup__pdf-link"
                }, V(S(R)("orderLookup.viewPdf")), 9, yk)) : Z("", !0)
              ]))), 128))
            ])
          ])) : Z("", !0),
          o.value.pdfUrl && !o.value.items?.length ? (v(), T("div", bk, [
            x("a", {
              href: o.value.pdfUrl,
              target: "_blank",
              class: "c-btn c-btn--secondary"
            }, V(S(R)("orderLookup.downloadPdf")), 9, vk)
          ])) : Z("", !0),
          x("div", wk, [
            x("h4", Sk, V(S(R)("orderLookup.orderTotal")), 1),
            o.value.pricing.shippingCost ? (v(), T("div", kk, [
              x("span", null, V(S(R)("orderLookup.shipping")) + ":", 1),
              x("span", null, V(t.formatPrice(o.value.pricing.shippingCost)), 1)
            ])) : Z("", !0),
            x("div", xk, [
              x("span", null, V(S(R)("orderLookup.total")) + ":", 1),
              x("span", null, V(t.formatPrice(o.value.pricing.total)), 1)
            ])
          ])
        ])
      ])) : Z("", !0)
    ]));
  }
}), Pk = /* @__PURE__ */ Mt(Ik, [["__scopeId", "data-v-cd130844"]]), R0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Pk }, Symbol.toStringTag, { value: "Module" }));
export {
  Ja as $,
  ls as A,
  Re as B,
  xf as C,
  en as D,
  Zk as E,
  K as F,
  qa as G,
  De as H,
  Us as I,
  He as J,
  Zu as K,
  za as L,
  _n as M,
  Ha as N,
  Bf as O,
  Xs as P,
  Ln as Q,
  mi as R,
  dl as S,
  Vn as T,
  Ht as U,
  yi as V,
  al as W,
  od as X,
  Rk as Y,
  Ek as Z,
  te as _,
  c0 as a,
  wh as a$,
  gi as a0,
  wn as a1,
  he as a2,
  I0 as a3,
  st as a4,
  Ut as a5,
  Xk as a6,
  xn as a7,
  h0 as a8,
  ge as a9,
  f0 as aA,
  $s as aB,
  Rr as aC,
  bt as aD,
  Et as aE,
  cs as aF,
  rp as aG,
  Vr as aH,
  Eh as aI,
  S0 as aJ,
  ji as aK,
  w0 as aL,
  O0 as aM,
  ph as aN,
  T0 as aO,
  Gn as aP,
  Il as aQ,
  $e as aR,
  il as aS,
  fh as aT,
  vd as aU,
  Bo as aV,
  Bk as aW,
  C0 as aX,
  A0 as aY,
  Yk as aZ,
  vh as a_,
  Wk as aa,
  bi as ab,
  ss as ac,
  Hk as ad,
  gt as ae,
  pp as af,
  Pt as ag,
  at as ah,
  qk as ai,
  Yr as aj,
  Xa as ak,
  P0 as al,
  zk as am,
  jr as an,
  Mh as ao,
  uh as ap,
  di as aq,
  Jk as ar,
  b0 as as,
  g0 as at,
  pd as au,
  jk as av,
  Id as aw,
  Nk as ax,
  p0 as ay,
  Vk as az,
  Ro as b,
  ht as b0,
  xi as b1,
  yh as b2,
  Sl as b3,
  L0 as b4,
  pn as b5,
  vn as b6,
  eo as b7,
  x0 as b8,
  Je as b9,
  F0 as bA,
  Gk as bB,
  Td as bC,
  Lo as bD,
  _o as bE,
  Sy as bF,
  $0 as bG,
  _0 as bH,
  Wn as bI,
  D0 as bJ,
  E0 as bK,
  M0 as bL,
  R0 as bM,
  m0 as ba,
  ll as bb,
  y0 as bc,
  k0 as bd,
  v0 as be,
  oh as bf,
  Mk as bg,
  Bn as bh,
  Nn as bi,
  Wt as bj,
  os as bk,
  ut as bl,
  Dt as bm,
  Sn as bn,
  ai as bo,
  fi as bp,
  Ws as bq,
  gl as br,
  eh as bs,
  Oi as bt,
  Mt as bu,
  vi as bv,
  St as bw,
  i0 as bx,
  Tl as by,
  Ai as bz,
  ul as c,
  t0 as d,
  cl as e,
  Qk as f,
  Aa as g,
  e0 as h,
  wr as i,
  Mi as j,
  us as k,
  qp as l,
  n0 as m,
  l0 as n,
  r0 as o,
  a0 as p,
  zp as q,
  o0 as r,
  Kk as s,
  R as t,
  s0 as u,
  u0 as v,
  Uk as w,
  ip as x,
  d0 as y,
  ri as z
};

import { k as P, o as w, j as S, q as I, h, i as j, u as _, l as z, n as u, y as Pe, A as zs, Z as Tt, B as Vs, x as R, C as ne, D as ki, E as V, F as Ws, G as Hs, H as Us, I as Wi, J as qs, K as Ys, L as Ks, M as Xs, N as Zs, O as Js } from "./vendor-CIXsT6Bd.js";
import "./vendor-i18next-BVRe4kPe.js";
import { t as Z, s as Qs, e as en } from "./i18n-_RhbYOEZ.js";
import { i as Ce, g as Ii } from "./environment-BCYVY3oS.js";
import { g as L } from "./vendor-lodash-wbyiOdVF.js";
import { m as tn } from "./validation-keys-BM1QC1wU.js";
import { F as Ze } from "./vendor-fraction-3H9P8ENz.js";
const Hi = P(["error", "warning"]), Ui = P(["saw", "stock", "part", "group", "machining", "extras", "custom"]);
w({
  message: h(),
  identifier: h(),
  field: I(I(h())),
  index: I(u()),
  id: h(),
  // Source object's autoId for linking back
  type: Hi,
  category: I(Ui)
});
const sn = w({
  item: z().nullable().default(null),
  message: h().default(""),
  params: j(h(), _([h(), u(), S(), Pe()])).optional(),
  // Translation parameters
  field: I(I(h())).default([]),
  index: I(u()).nullable().default(null),
  id: h().nullable().default(null),
  // Source object's autoId
  issues: I(z()).nullable().default(null),
  // Will be Issue[] at runtime
  type: Hi.default("error"),
  category: I(Ui).nullable().default(null),
  throwError: S().default(!1),
  shouldTranslate: S().default(!0)
}), nn = ["lr", "rl", "bt", "tb"];
w({
  x1: u(),
  x2: u(),
  y1: u(),
  y2: u(),
  dimension: P(["l", "w"]).optional(),
  shapeCollisions: I(z()).optional()
});
w({
  id: h().nullable().optional(),
  x1: u(),
  x2: u(),
  y1: u(),
  y2: u(),
  origin: h().optional(),
  dimension: P(["l", "w"]).optional(),
  direction: P(nn).nullable().optional(),
  type: h().nullable().optional()
});
const rn = w({
  // ========== Identification ==========
  // Unique identifier for this line
  id: h(),
  // Type classification for this line
  type: h().optional(),
  // ========== Coordinates ==========
  x1: u().default(0),
  x2: u().default(0),
  y1: u().default(0),
  y2: u().default(0),
  // ========== Origin Information ==========
  // Origin point of the line
  origin: h().optional(),
  // ========== Collision Tracking ==========
  // Shapes that collide with this line
  shapeCollisions: I(z()).default([]),
  // ========== Validation ==========
  // Validation issues found with this line
  issues: I(z()).default([])
}), on = {
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
}, ut = /* @__PURE__ */ new Map();
function Zt() {
  return ut;
}
function zl(t, e) {
  ut.set(t, e);
}
const an = [
  { key: "Optimiser", how: "registerOptimiserClass() from server/optimiser/register-optimiser" },
  { key: "optimiser", how: "registerOptimiserClass() from server/optimiser/register-optimiser" }
];
function ln(t, e) {
  return class {
    constructor() {
      throw new Error(`Unknown class '${t}' — call ${e} before deserialising it.`);
    }
  };
}
function cn() {
  for (const { key: t, how: e } of an)
    ut.has(t) || ut.set(t, ln(t, e));
}
function Wl() {
  cn();
}
function St(t, e) {
  const i = t, s = i._fieldBehavior?.fieldBehavior || {};
  return i._fieldBehavior = {
    fieldBehavior: {
      ...s,
      ...e
    }
  }, i;
}
function Gt(t) {
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
const Pi = /* @__PURE__ */ new WeakMap();
function qe(t) {
  const e = t !== null && typeof t == "object";
  if (e) {
    const s = Pi.get(t);
    if (s) return { ...s };
  }
  const i = {};
  if (t instanceof Vs) {
    const s = t.shape;
    for (const [n, o] of Object.entries(s)) {
      const r = Gt(o);
      r && (i[n] = r);
    }
  }
  if (t._def && t._def.shape) {
    const s = t._def.shape;
    for (const [n, o] of Object.entries(s)) {
      const r = Gt(o);
      r && (i[n] = r);
    }
  }
  return e && Pi.set(t, i), { ...i };
}
typeof zs < "u" && Tt && Tt.prototype && (Tt.prototype.behavior = function(t) {
  return St(this, t);
});
function A(t, e = {}) {
  let s = z().refine((r) => r == null ? !0 : typeof r == "object" && r !== null ? ("autoId" in r || "id" in r, !0) : !1, {
    message: `Invalid reference to ${t}`
  }).transform((r) => {
    if (r == null || typeof r == "object" && r !== null && typeof r.getType == "function" || typeof r == "object" && r !== null && r.__ref === !0)
      return r;
    if (typeof r == "object" && r !== null && !r.__ref) {
      if (r._type !== void 0) return r;
      try {
        const a = Zt(), l = r.__entityType || t, c = a.get(l);
        if (c && typeof c == "function")
          return typeof c.fromData == "function" ? c.fromData(r) : new c(r);
      } catch (a) {
        console.warn(`Failed to recreate ${t} instance:`, a);
      }
    }
    return r;
  });
  e.nullable && (s = s.nullable());
  let n = s.default(null).describe(e.description || `Reference to ${t}`);
  const o = e.fieldBehavior || {
    serialize: "reference",
    // References should always serialize as references for efficiency
    compress: "reference",
    // Compressed mode also uses references
    clone: "copy",
    // Default clone behavior
    description: `Reference to ${t}`
  };
  return n = St(n, o), Object.defineProperty(n, "__zRefClassName", {
    value: t,
    enumerable: !1,
    writable: !1,
    configurable: !1
  }), n;
}
function Se(t, e = {}) {
  let i = I(A(t)).default([]).describe(
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
  return i = St(i, s), i;
}
function un(t, e = {}) {
  const i = t.map((o) => A(o));
  let s = I(_(i)).default([]).describe(
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
  return s = St(s, n), s;
}
const Ti = ["topLeft", "topRight", "bottomLeft", "bottomRight"], dn = [
  "left",
  "centre",
  "right",
  "top",
  "bottom",
  "topLeft",
  "topRight",
  "bottomLeft",
  "bottomRight"
], fn = ["lr", "rl", "bt", "tb"], hn = w({
  // ========== Coordinates ==========
  x: u().default(0),
  y: u().default(0),
  z: u().default(0),
  // ========== Shape References ==========
  a: h().optional(),
  b: h().optional(),
  stock: A("Stock", { nullable: !0 }).optional(),
  // ========== Direction and Positioning ==========
  direction: P(fn).nullable().optional(),
  type: h().optional(),
  corner: P(Ti).optional(),
  shapePosition: P(Ti).optional(),
  grid: P(dn).optional(),
  // ========== Collision and Raycast Flags ==========
  raycast: S().default(!1),
  collision: S().default(!1),
  tooClose: S().default(!1),
  adjustedForMinSpacing: S().default(!1)
}), pn = {
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
}, qi = h().default("").describe('Unique identifier (e.g., "1.0" for shapes/stock, "g1" for groups, "ss-1_a2b3" for segments, "1.0-proximity" for proximity rectangles)'), mn = h().max(200).default("").describe("User input name"), gn = h().default("").describe("Parent identifier for tracking copies and relationships"), Jt = h().describe("Internal product or material code"), yn = S().default(!1).describe("Prevent automatic rotation optimization"), bn = S().default(!1).describe("Whether this is an offcut piece"), Yi = I(h()).default([]).describe("IDs of identical items").behavior({ clone: "copy" }), Je = _([
  R(""),
  R("l"),
  R("w"),
  R(" ").transform(() => ""),
  Pe().transform(() => "")
]).default("").describe("Grain direction of the material"), Ki = h().optional().describe("Color name"), Hl = _([R(""), h().regex(/^#[0-9A-Fa-f]{3,8}$/, { error: (t) => `Invalid hex colour "${t.input}" — use #RGB or #RRGGBB, e.g. "#1a2b3c"` })]).optional().describe("Color hex code"), Xi = ne(
  (t) => t === null || t === " " || t === "n" || t === "none" || !["", "l", "w"].includes(t) ? "" : t,
  P(["", "l", "w"]).default("").describe("Orientation lock for rotation constraints")
), wn = w({
  l1: u().default(0).describe("Long side 1 trim value"),
  l2: u().default(0).describe("Long side 2 trim value"),
  w1: u().default(0).describe("Short side 1 trim value"),
  w2: u().default(0).describe("Short side 2 trim value")
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 });
w({
  material: S(),
  thickness: S(),
  fit: S(),
  width: S()
}).nullable().default(null);
_([
  R(""),
  R("l"),
  R("w"),
  Pe()
]).default(null);
j(h(), u()).nullable().default(null);
j(h(), u()).nullable().default(null);
const Qt = _([
  R(0),
  R(1)
]), Sn = w({
  dimension: u().describe("Dimension of the strip shape batch"),
  rot: Qt.describe("Rotation: 0 (no rotation) or 1 (90 degrees)"),
  order: u().optional().describe("Order of the batch"),
  id: h().optional().describe("Batch ID"),
  stockId: h().optional().describe("Associated stock ID"),
  rerunning: S().optional().describe("Whether the batch is being rerun"),
  priorityShape: h().nullable().describe("Priority shape identifier (null if none specified)")
});
w({
  subsetUsed: S().optional().describe("Whether a subset was used for strip shape batches"),
  groups: j(h(), Sn).describe("Groups of strip shape batches keyed by ID")
});
const xn = P(["none", "schema", "business", "full"]), J = w({
  // Validation issues (errors) - uses zRefArray to avoid type duplication across modules
  issues: Se("Issue", {
    description: "Validation issues (errors)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Validation warnings (non-critical issues) - uses zRefArray to avoid type duplication
  warnings: Se("Issue", {
    description: "Validation warnings (non-critical)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Legacy flag to skip validation (backward compatibility)
  skipValidation: S().optional(),
  // New validation control properties
  skipSchemaValidation: S().optional(),
  skipBusinessValidation: S().optional(),
  validationMode: xn.optional(),
  enableStrictMode: S().optional()
}), oe = {
  // Check if valid (no errors)
  isValid: {
    compute: (t) => (t.issues || []).filter((i) => i.type === "error").length === 0,
    cache: !0,
    dependencies: ["issues"],
    returnType: "boolean"
  }
};
function vn(t) {
  if (!t) return "";
  const e = t.indexOf(".");
  return e === -1 ? t : t.substring(0, e);
}
const ei = J.extend({
  // Identity
  id: qi,
  // Description
  name: mn,
  // Dimensions
  l: ne((t) => typeof t == "number" && !isFinite(t) ? 1 : t ?? 1, u().positive()).describe("Length (long side dimension)"),
  w: ne((t) => typeof t == "number" && !isFinite(t) ? 1 : t ?? 1, u().positive()).describe("Width (short side dimension)"),
  t: u().positive().nullable().optional().describe("Thickness (z-axis dimension)"),
  q: u().positive().int().default(1).describe("Quantity"),
  // Calculated dimensions (computed once on init for performance)
  area: u().positive().default(1).describe("Calculated area (l * w)"),
  longSide: u().positive().default(1).describe("Calculated long side Math.max(l, w)"),
  shortSide: u().positive().default(1).describe("Calculated short side Math.min(l, w)"),
  parentId: h().default("").describe("Parent ID extracted from id (integer part before decimal)"),
  // Flags
  duplicate: S().default(!1).describe("Whether this is a duplicate"),
  offcut: bn,
  // Grain — on stock this is the constraint input; on a shape it is the
  // derived OUTPUT written after placement (see applyPartGrain).
  grain: Je,
  // Orientation
  preventAutoRotation: yn,
  orientationLock: Xi,
  // Position (reset during cloning - cloned shapes should not have preset positions)
  x: u().nullable().default(null).describe("X coordinate position").behavior({ clone: "reset" }),
  y: u().nullable().default(null).describe("Y coordinate position").behavior({ clone: "reset" }),
  // Stock matching
  material: h().max(200).default("").transform((t) => t ? t.trim().toLowerCase() : "").describe("Material name"),
  // Trim
  trim: wn.describe("Reduce the dimensions by specified trim values"),
  trimmed: S().default(!1).describe("Whether trim has been applied to dimensions"),
  // Proximity data (excluded from compression)
  proximity: w({
    rectangle: A("Rectangle").nullable().default(null),
    // Using 'any' to avoid circular import
    distance: u().nullable().default(null)
  }).default({ rectangle: null, distance: null }).behavior({ compress: "exclude" }),
  // Other properties
  cost: u().min(0).nullable().default(0).describe("Cost per unit"),
  discount: u().min(0).max(100).nullable().default(0).describe("Percentage discount (0-100)"),
  customData: j(h(), z()).default({}).describe("Custom user-defined data"),
  identicalTo: Yi,
  notes: h().max(500).default("").transform((t) => typeof t == "string" && t.length ? t.replace(/,/g, "").substring(0, 200) : "").describe("Description")
}), ti = {
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
  // NB: this is NOT the optimiser's rotation gate — that is the canRotate()
  // FUNCTION in data/utils/rotation/rotation-core.ts, which also accounts for
  // fit and for the stock grain. This property answers the narrower question
  // "is this rect free to change orientation at all", and is read only by
  // repack-reconstruct's rotation-locked-job checks.
  canRotate: {
    compute: (t) => !(t.preventAutoRotation || t.orientationLock)
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
}, kn = ["x", "y"];
P(kn);
const In = ["l", "w"];
P(In);
const Pn = ["l", "w"], ke = P(Pn);
_([
  R(0),
  R(1),
  R(2)
]);
_([
  R(0),
  R(1),
  Pe()
]);
const Zi = ["sheet", "linear", "roll"], ii = ne(
  // Normalize to lowercase before validation
  (t) => typeof t == "string" ? t.toLowerCase() : t,
  _([
    P(Zi),
    Pe()
  ]).nullable().default(null)
).describe("Type of stock material"), Ji = w({
  // Infinite length flag for rolls and other continuous stock
  infiniteLength: S().default(!1).describe("Whether stock has infinite length (e.g., for rolls)"),
  // Allow shapes that exactly fit the stock dimensions
  allowExactFitShapes: S().default(!1).describe("Allow shapes that exactly fit"),
  // Automatically add stock as needed
  autoAdd: S().default(!1).describe("Automatically add stock as needed"),
  // Unlimited quantity flag - stock never runs out
  unlimitedQuantity: S().default(!1).describe("Stock has unlimited quantity (never decremented)"),
  // Product variant name from supplier catalogue
  variant: h().optional().describe("Product variant name from supplier"),
  // Manufacturer / brand name (Egger, Kronospan, etc.) — orthogonal to `variant`.
  brand: h().optional().describe("Manufacturer / brand name")
}), si = ei.extend({
  // Identity - override id to be required for containers
  id: h().default("").describe("Unique identifier for containers (required for Stock and Segment)"),
  // Parent identifier for tracking copies
  parentId: gn,
  // Container-specific fields
  stockType: ii,
  // Array of shapes or groups (excluded from compression - runtime only)
  shapes: un(["Shape", "Group"], {
    description: "Array of Shape or Group objects contained within this container"
  }).behavior({ clone: "reset", compress: "exclude" }),
  // Saw reference - using zRef for define.ref<Saw>('Saw') (share exact instance during cloning, serialize as reference)
  saw: A("Saw", {
    nullable: !0,
    description: "Reference to Saw class"
  }).behavior({ clone: "share", compress: "reference" }),
  // Algorithm benchmark results (reset during cloning)
  algoBenchmark: z().optional().describe("Benchmark results from optimization algorithms").behavior({ clone: "reset" }),
  // Container flag
  isContainer: S().default(!0).describe("Flag indicating this is a container")
}), ni = {
  // Include all Rectangle computed properties
  ...ti,
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
  },
  /**
   * CROSS blade width from the saw — the second blade of a twin-blade machine.
   *
   * The pair above describes the RIP blade. Per the repo coordinate system (`l` = the
   * stock's long side), a cut with `dimension: 'l'` runs along that side and is the rip;
   * a `'w'` cut runs across it and is the cross cut. The cut derivation reads whichever
   * of the two made the cut it is positioning (`shared/cuts/guillotine.ts`), which is why
   * this is projected onto the container beside its rip counterpart rather than reached
   * for through `saw` at each site.
   *
   * The fallback lives ONCE, in `Saw.halfBladeWidthCross`: absent cross blade → the rip
   * blade, so a single-blade saw is byte-identical to what it always was. The full-width
   * form mirrors it so the two cannot drift.
   */
  bladeWidthCross: {
    compute: (t) => t.saw?.bladeWidthCross ?? t.saw?.bladeWidth ?? 0,
    metadata: {
      cache: !1,
      dependencies: ["saw"],
      returnType: "number"
    }
  },
  halfBladeWidthCross: {
    compute: (t) => t.saw?.halfBladeWidthCross ?? t.saw?.halfBladeWidth ?? 0,
    metadata: {
      cache: !1,
      dependencies: ["saw"],
      returnType: "number"
    }
  }
  // Stock reference removed from computed properties to avoid circular type reference
  // Defined manually in Container.ts as a getter method instead
};
si.describe(JSON.stringify({
  name: "Container",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(ni)
}));
const Tn = w({
  dimension: u().describe("Dimension of the strip shape batch"),
  rot: _([
    R(0),
    R(1)
  ]).describe("Rotation"),
  order: u().optional().describe("Order of the batch"),
  id: h().optional().describe("Batch ID"),
  stockId: h().optional().describe("Associated stock ID"),
  rerunning: S().optional().describe("Whether the batch is being rerun"),
  priorityShape: h().nullable().describe("Priority shape identifier (null if none specified)")
}), Qi = w({
  // Strip direction
  myStripDirection: ke.optional(),
  // Strip parent (can be shape or group)
  myStripParent: _([
    A("Shape", { nullable: !0 }),
    A("Group", { nullable: !0 })
  ]).default(null).describe("Parent strip shape or group for guillotine optimization").behavior({
    serialize: "reference",
    compress: "reference",
    clone: "share"
  }),
  // Phase number
  myPhase: u().int().min(0).optional().describe("Phase of the strip this shape belongs to"),
  // Strip shape batches optimization data
  stripShapeBatches: w({
    subsetUsed: S().optional().describe("Whether a subset was used for strip shape batches"),
    groups: j(h(), Tn).default({}).describe("Groups of strip shape batches keyed by ID")
  }).default({ groups: {} }).describe("Strip shape batch optimization data")
});
Qi.describe(JSON.stringify({
  name: "GuillotineState",
  version: "1.0.0"
}));
const On = {}, Dn = w({
  fill: u().default(0),
  similarDimensions: u().default(0),
  compression: u().default(0),
  cohesion: u().default(0),
  area: u().default(0),
  edge: u().default(0),
  alignment: u().default(0),
  exactFit: u().default(0),
  total: u().default(0),
  shapes: _([
    A("Shape", { nullable: !0 }),
    A("Group", { nullable: !0 })
  ]).optional(),
  group: A("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
  cutDirection: ke.optional()
}).behavior({ clone: "reset" }), Cn = w({
  exactStripFill: u().default(0),
  fill: u().default(0),
  cohesion: u().default(0),
  fenceConsistency: u().default(0),
  similarDimensions: u().default(0),
  compression: u().default(0),
  sameStripBonus: u().default(0),
  aspectRatio: u().optional(),
  stripCohesion: u().optional(),
  area: u().optional(),
  total: u().default(0),
  cutDirection: ke,
  myStripDirection: ke.optional(),
  myStripParent: _([
    A("Shape", { nullable: !0 }),
    A("Group", { nullable: !0 })
  ]).optional().describe("Parent strip shape or group for guillotine optimization"),
  myPhase: u().optional()
}).behavior({ clone: "reset" }), Oi = _([
  Dn,
  Cn,
  // Also support the generic object with catchall for backward compatibility
  w({
    cutDirection: ke.optional(),
    myStripParent: _([
      A("Shape", { nullable: !0 }),
      A("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group"),
    myStripDirection: ke.optional()
  }).catchall(u())
]).behavior({ clone: "reset" }), Qe = ei.extend({
  // Stock lock (shared schema) - original was stockLock: define.array(define.string())
  stockLock: I(h()).default([]).describe("Stock lock configuration"),
  // Stock matching - original object structure
  stockMatch: w({
    material: S(),
    thickness: S(),
    fit: S(),
    width: S()
  }).nullish().describe("Matching stock information"),
  // Guillotine state - reference that will be initialized in constructor (reset during cloning)
  // This ensures guillotineState is always a proper GuillotineState instance with methods
  guillotineState: A("GuillotineState", {
    nullable: !0,
    // Nullable in schema but always initialized in constructor
    description: "Data for guillotine cutting optimization (always initialized as instance)"
  }).nullable().default(null).behavior({
    clone: "unique",
    serialize: Ce() ? "full" : "exclude",
    compress: Ce() ? "full" : "exclude"
    // Consistent with serialize behavior
  }),
  // Priority and weighting (records) - exact match from original
  priority: j(h(), u()).default({}).describe("Priority levels for optimization"),
  weighting: j(h(), u()).optional().describe("Shape weighting for optimization"),
  // Pattern matching for stack detection (reset during cloning)
  patternMatch: S().default(!1).describe("Used for stack detection").behavior({ clone: "reset" }),
  firstShape: w({
    sampleRotations: I(u().int().min(0).max(1)).default([]).describe("Sample rotations (0 or 1) for first shape optimization").behavior({ clone: "reset" }),
    isFirstShape: S().default(!1).describe("Whether this is the first shape in optimization").behavior({ clone: "reset" }),
    /** Set by the guillotine full-size shortcut when it returns this shape as the ONLY first-shape candidate with ONE
     *  rotation. The sampler tail honours the pin instead of re-deriving every allowed rotation (which raced the
     *  un-pinned orientation and let the myopic strip score keep it). Transient: consumed and cleared by the sampler. */
    rotationPinned: S().default(!1).describe("Full-size shortcut pinned sampleRotations to one rotation").behavior({ clone: "reset" })
  }).default({ sampleRotations: [], isFirstShape: !1, rotationPinned: !1 }),
  // Placement properties (reset during cloning)
  added: S().default(!1).describe("Whether shape has been added to a stock").behavior({ clone: "reset" }),
  placementOrder: u().int().min(0).optional().describe("Order in which shape was placed").behavior({ clone: "reset" }),
  // Stock reference (reset during cloning - cloned shapes should not be pre-placed)
  // Serialized as a reference to avoid circular structures (Stock.shapes ↔ Shape.stock)
  stock: A("Stock", {
    nullable: !0,
    description: "Reference to the stock this item is placed on"
  }).behavior({ clone: "reset", serialize: "reference", compress: "reference" }),
  // Stock fitting data
  fitsStock: j(
    h(),
    j(h(), S())
  ).nullable().default(null).describe("Information about which stocks this shape fits"),
  // Scoring properties
  bestScore: w({
    x: u().nullable().default(null),
    y: u().nullable().default(null),
    rot: _([R(0), R(1)]).nullable().default(null),
    total: u().nullable().default(null),
    weighting: j(h(), u()).optional(),
    group: A("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
    score: Oi.optional(),
    // FastPoint instances (used in the placement hot loop) live here. FastPoint has no
    // toData and holds a live Stock back-reference — must be excluded from serialization
    // to avoid Stock↔Shape cycles when bestScore is serialised in dev mode.
    point: z().optional().describe("Associated point for placement").behavior({ serialize: "exclude", compress: "exclude" }),
    myStripParent: _([
      A("Shape", { nullable: !0 }),
      A("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group for this score"),
    cutDirection: ke.optional(),
    myStripDirection: ke.optional(),
    stock: A("Stock", {
      nullable: !0,
      description: "Stock reference for this score"
    })
  }).nullable().default(null).optional().describe("Best optimization score achieved").behavior({
    clone: "reset",
    serialize: Ce() ? "full" : "exclude"
    // Retain in development mode for debugging
  }),
  // Current optimization score (can be efficiency or guillotine type, reset during cloning)
  score: Oi.nullable().optional().describe("Current optimization score").behavior({
    clone: "reset",
    serialize: "exclude"
    // Always exclude - transient optimization data
  })
}), et = {
  // Include all Rectangle computed properties
  ...ti
  // Placeable doesn't define additional computed properties
};
Qe.describe(JSON.stringify({
  name: "Placeable",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(et)
}));
const es = ["horizontal", "vertical"], ts = ["position", "user", "strip", "firstShape"], An = P(es).optional(), Di = w({
  x: u(),
  y: u(),
  autoId: h().optional(),
  rot: Qt,
  // True for a shape seated into a user group's free space by the
  // groups.user.fillFreeSpace gap-fill — NOT one of the user's locked
  // members. Provenance only (UI styling, diagnostics); placement treats
  // fillers exactly like members.
  filler: S().optional()
}), En = Qe.extend({
  // Override quantity - always 1 for groups
  q: u().min(1).max(1).int().default(1),
  // Groups have fixed orientation
  preventAutoRotation: S().default(!0),
  // Group-specific fields
  shapes: Se("Shape").default([]),
  direction: An,
  container: _([
    A("Segment"),
    A("Stock")
  ]).behavior({ compress: "exclude" }),
  positions: I(Di).default([]),
  // User-defined positions for free-placement user groups (from InputUserGroup)
  userPositions: I(Di).optional(),
  type: P(ts).default("position"),
  efficiency: u().min(0).max(100).default(0),
  groupLength: u().min(0).default(0),
  groupWidth: u().min(0).default(0),
  outOfBounds: S().default(!1),
  collision: S().default(!1),
  counter: u().int().min(0).default(0),
  inputId: h().optional()
}), Fn = {
  ...et,
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
w({
  id: h(),
  x: u(),
  y: u(),
  shapes: Se("Shape"),
  direction: P(es),
  type: P(ts),
  container: _([
    A("Segment"),
    A("Stock")
  ]).optional()
});
const Mn = ["l", "w"], _n = Qe.extend({
  // Identity - offcuts need IDs for tracking and export
  id: h().default(""),
  // Note: offcut property is inherited from Rectangle schema (boolean default false)
  // The Offcut constructor ensures it's always true
  // Offcut-specific fields
  addToInventory: S().default(!1),
  flex: P(Mn).optional(),
  // Cost is calculated, not set
  cost: u().min(0).nullable().default(0)
}), Ln = {
  ...et,
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
}, is = I(h()).default([]).describe("Parent IDs of stock(s) this shape is locked to"), Rn = P(["l", "w"]).nullable().default(null), ss = _([
  R("l"),
  R("w"),
  Pe()
]).default(null), $n = w({
  stockId: h().optional(),
  material: h().optional(),
  thickness: u().optional(),
  grain: Je.optional()
}).describe("Which stock(s) this shape is a match for "), ns = j(h(), z()).default({}), rs = w({
  barcode1: h().max(50).optional(),
  barcode2: h().max(50).optional(),
  room: h().max(50).optional(),
  pallet: h().max(50).optional(),
  drawing: h().max(50).optional(),
  order: h().max(50).optional(),
  colour: h().max(50).optional(),
  productInfo: h().max(50).optional(),
  productNumber: h().max(50).optional()
}).optional(), Ul = w({
  customer: h().max(100).optional()
});
is.describe("IDs of stocks this shape is locked to");
const Nn = ss.describe("Up direction indicator");
w({
  /**
   * Up direction - Direction that should face up during optimization
   */
  upDirection: Nn
});
const Gn = w({
  // Whether shape is in a user-defined group
  inUserGroup: S().default(!1).describe("Whether shape is in a user-defined group"),
  // Whether shape is in any group
  inGroup: S().default(!1).describe("Whether shape is currently in a group"),
  // Placement order within group
  placementOrder: u().int().min(0).optional().describe("Placement order within group"),
  // Group reference (the actual Group class instance)
  reference: A("Group", {
    nullable: !0,
    description: "Group this shape belongs to"
  }).optional().behavior({ clone: "reset", compress: "reference" }),
  // Group this was added as part of (preserved during serialization as reference)
  addedAsGroup: A("Group", {
    nullable: !0,
    description: "Group this was added as part of"
  }).optional().behavior({ clone: "reset", compress: "reference" })
}).default({
  inUserGroup: !1,
  inGroup: !1,
  placementOrder: void 0,
  reference: null,
  addedAsGroup: null
}).describe("Group metadata and reference"), dt = Qe.extend({
  // ========== Group Metadata ==========
  // Nested object containing all group-related properties
  group: Gn,
  // ========== Identity ==========
  // Unique identifier for referencing items (required for shapes)
  id: h().default("").describe("Unique identifier for referencing items"),
  // Array of IDs this shape is identical to
  identicalTo: Yi,
  // Whether this is a duplicate
  duplicate: S().default(!1).describe("Whether this is a duplicate shape"),
  // ========== Orientation ==========
  // Direction that should face up during optimization
  upDirection: Rn.describe("Up direction indicator"),
  // ========== Extras ==========
  // Extras container for banding, finish, planing, etc.
  // Override default reference behavior to preserve full data in compressed mode
  extras: A("Extras", {
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
  machining: A("Machining", {
    nullable: !0,
    description: "Machining operations for this shape",
    fieldBehavior: {
      serialize: "full",
      // Always serialize full machining data
      compress: "full",
      // CRITICAL: Include full machining data in compressed mode (for results)
      clone: "copy"
    }
  }).optional(),
  // ========== Internal Code ==========
  code: Jt.optional(),
  // ========== Custom Display Color ==========
  color: h().nullable().optional().describe("Custom display color (hex)"),
  // ========== Status ==========
  // Status for tracking cut progress (used in order optimization workflow)
  status: P(["pending", "cut"]).optional().describe("Cut status for order optimization workflow"),
  // ========== Labels (saw label printer / barcode machine) ==========
  // Typed, format-aware fields fed through to post-processors that drive
  // label printers on the saw itself. Input-only on the V3 API surface
  // (not echoed in responses). See `saws/label-fields.ts` for the
  // field → format support map.
  labels: rs
}), ri = {
  // Include all Placeable computed properties
  ...et,
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
dt.describe(JSON.stringify({
  name: "Shape",
  description: "Shape to be cut from stock material",
  version: "1.0.0",
  extends: "Placeable",
  computedProperties: Object.keys(ri)
}));
const ql = w({
  areaEfficiency: u(),
  finishArea: u(),
  bandingLength: u(),
  partArea: u(),
  totalParts: u(),
  stackedNumberOfCuts: u(),
  numberOfCuts: u(),
  stackedCutLength: u(),
  cutLength: u(),
  rollLength: u()
}), Bn = w({
  // Internal-only fields (not exposed in API)
  fitsAll: S().default(!1),
  fitsAny: S().default(!1),
  largestShape: z().nullable(),
  smallestShape: z().nullable(),
  // API-exposed fields (with defaults for internal use)
  areaEfficiency: u().default(0),
  finishArea: u().default(0),
  bandingLength: u().default(0),
  partArea: u().default(0),
  totalParts: u().default(0),
  stackedNumberOfCuts: u().default(0),
  numberOfCuts: u().default(0),
  stackedCutLength: u().default(0),
  cutLength: u().default(0),
  rollLength: u().default(0)
}), jn = w({
  stock: A("Stock", { nullable: !0 }).optional(),
  number: u().int().min(1).optional()
}), Bt = w({
  ...si.shape,
  ...Ji.shape,
  // Override x and y to default to 0 for Stock (containers are positioned at origin)
  x: u().nullable().default(0).describe("X coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  y: u().nullable().default(0).describe("Y coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  // Stock analysis results
  analysis: Bn.optional().behavior({ clone: "reset" }),
  // Automatically add stock as needed during optimization
  autoAdd: S().optional().describe("Automatically add stock as needed during optimization"),
  // Pattern for identifying duplicate stock sheets
  duplicatePattern: h().default("").describe("Pattern for identifying duplicate stock sheets"),
  // Root segment for guillotine cutting (excluded from compression, reset during cloning)
  rootSegment: A("Segment", {
    nullable: !0
  }).optional().behavior({ clone: "reset", compress: "exclude" }),
  // Optimization score (excluded from compression, reset during cloning)
  score: z().nullable().default(null).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stack information (reset during cloning - cloned stocks start fresh)
  stack: jn.optional().describe("Stack information").behavior({ clone: "reset" }),
  // Whether the stock layout has been tidied (excluded from compression, reset during cloning)
  tidy: S().default(!1).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stock type (sheet, linear, roll) - inherited from shared stockType
  type: P(Zi).optional().describe("Type of stock material"),
  // Original length before cropping (for rolls)
  originalLength: u().positive().optional().describe("Original length before cropping (for rolls)"),
  // Whether this stock is unusable for optimization
  unusable: S().default(!1).describe("Whether this stock is unusable for optimization"),
  // Whether this stock has been used in the optimization (reset during cloning)
  used: S().default(!1).describe("Whether this stock has been used in the optimization").behavior({ clone: "reset" }),
  // The optimization strategy that selected this stock (reset during cloning)
  winningStrategy: h().optional().describe("The optimization strategy that selected this stock").behavior({ clone: "reset" }),
  // Display and filtering properties
  color: Ki.describe('Material color ({ hex: "#FF5733", name: "Red" } or legacy string)'),
  weight: u().positive().optional().describe("Weight"),
  imageUrl: h().url().optional().describe("Image URL for stock display"),
  tags: I(h()).optional().describe("Tags for categorizing stock"),
  available: S().default(!0).describe("Whether the stock is available"),
  // Database ID (MongoDB ObjectId as string)
  db_id: h().optional().describe("MongoDB ObjectId for this document"),
  // Internal product/material code
  code: Jt.optional(),
  // Status for tracking cut progress (used in order optimization workflow)
  status: P(["pending", "cut"]).optional().describe("Cut status for order optimization workflow")
}), os = {
  // Include all Container computed properties
  ...ni,
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
Bt.describe(JSON.stringify({
  name: "Stock",
  description: "Stock material for cutting optimization",
  version: "1.0.0",
  extends: "Container",
  computedProperties: Object.keys(os)
}));
var p = /* @__PURE__ */ ((t) => (t.InputRectangle = "inputRectangle", t.InputShape = "inputShape", t.InputStock = "inputStock", t.InputUserGroup = "inputUserGroup", t.InputSaw = "inputSaw", t.Rectangle = "rectangle", t.Container = "container", t.Saw = "saw", t.Shape = "shape", t.NestingShape = "nestingShape", t.Stock = "stock", t.Group = "group", t.UserGroup = "userGroup", t.StripGroup = "stripGroup", t.FirstShapeGroup = "firstShapeGroup", t.Segment = "segment", t.Offcut = "offcut", t.Cut = "cut", t.Line = "line", t.Placeable = "placeable", t.GuillotineState = "guillotineState", t.Point = "point", t.PointCollection = "pointCollection", t.Optimiser = "optimiser", t.Machining = "machining", t.Extras = "extras", t.Issue = "issue", t))(p || {});
const zn = /* @__PURE__ */ new Set([
  p.Container,
  p.Stock,
  p.Segment
]), Vn = /* @__PURE__ */ new Set([
  p.Rectangle,
  p.Container,
  p.Stock,
  p.Segment,
  p.Placeable,
  p.Shape,
  p.NestingShape,
  p.Group,
  p.UserGroup,
  p.StripGroup,
  p.FirstShapeGroup,
  p.Offcut
]), Wn = /* @__PURE__ */ new Set([
  p.Placeable,
  p.Shape,
  p.NestingShape,
  p.Group,
  p.UserGroup,
  p.StripGroup,
  p.FirstShapeGroup,
  p.Offcut
]);
p.InputRectangle, p.InputShape, p.InputStock;
class $ {
  static guardCache = /* @__PURE__ */ new Map();
  /**
   * Create a type guard function for a specific entity type
   */
  static create(e, i, s) {
    const n = `${e}-${i}`;
    if (this.guardCache.has(n))
      return this.guardCache.get(n);
    const o = (r) => {
      if (!r || typeof r != "object") return !1;
      if (r._type === e)
        return s ? s(r) : !0;
      const l = r.constructor?.name === i, f = "getType" in r && typeof r.getType == "function" && r.getType() === e, d = l || f, y = s ? s(r) : !0;
      return d && y;
    };
    return this.guardCache.set(n, o), o;
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
const Hn = $.create(p.Cut, "Cut"), K = $.create(
  p.Shape,
  "Shape",
  (t) => !("shapes" in t)
), as = $.create(
  p.NestingShape,
  "NestingShape",
  (t) => !("shapes" in t) && "outline" in t
), re = $.create(p.Stock, "Stock"), ls = $.create(
  p.Group,
  "Group",
  (t) => "shapes" in t && Array.isArray(t.shapes) && t.type !== "user" && t.type !== "strip"
), Ue = $.create(
  p.UserGroup,
  "Group",
  (t) => "shapes" in t && t.type === "user"
), cs = $.create(
  p.StripGroup,
  "Group",
  (t) => "shapes" in t && t.type === "strip"
), us = $.create(
  p.FirstShapeGroup,
  "Group",
  (t) => "shapes" in t && t.type === "firstShape"
), Ie = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t._type;
  return e !== void 0 ? e === p.Group || e === p.UserGroup || e === p.StripGroup || e === p.FirstShapeGroup : ls(t) || Ue(t) || cs(t) || us(t);
}, Un = $.create(
  p.InputUserGroup,
  "InputUserGroup"
), ds = $.create(p.Segment, "Segment"), qn = $.create(p.Offcut, "Offcut"), Yn = (t) => !t || typeof t != "object" ? !1 : qn(t) ? !0 : t.offcut === !0, Kn = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t._type;
  if (e && zn.has(e)) return !0;
  let i = Object.getPrototypeOf(t);
  for (; i; ) {
    if (i.constructor?.name === "Container")
      return !0;
    i = Object.getPrototypeOf(i);
  }
  return !1;
};
$.create(p.Saw, "Saw");
const fs = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t._type;
  if (e && Vn.has(e)) return !0;
  let i = Object.getPrototypeOf(t);
  for (; i; ) {
    if (i.constructor?.name === "Rectangle")
      return !0;
    i = Object.getPrototypeOf(i);
  }
  return t.constructor?.name === "Rectangle";
}, Xn = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t._type;
  if (e && Wn.has(e)) return !0;
  let i = Object.getPrototypeOf(t);
  for (; i; ) {
    if (i.constructor?.name === "Placeable")
      return !0;
    i = Object.getPrototypeOf(i);
  }
  return t.constructor?.name === "Placeable";
}, Y = $.create(
  p.InputShape,
  "InputShape"
), oi = $.create(
  p.InputStock,
  "InputStock"
);
$.create(
  p.InputSaw,
  "InputSaw"
);
$.create(
  p.GuillotineState,
  "GuillotineState"
);
$.create(p.Line, "Line");
$.create(p.Point, "Point");
$.create(
  p.PointCollection,
  "PointCollection"
);
function Zn(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "__ref" in e && "autoId" in e && typeof e.__ref == "string" && typeof e.autoId == "string";
}
function hs(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "trimmed" in e && e.trimmed === !0;
}
const ps = (t) => K(t) || as(t);
function Jn(t) {
  if (!t || typeof t != "object") return null;
  const e = t.__entityType;
  if (e && Object.values(p).includes(e))
    return e;
  if ("getType" in t && typeof t.getType == "function")
    try {
      const i = t.getType();
      if (Object.values(p).includes(i))
        return i;
    } catch {
    }
  return Hn(t) ? p.Cut : Y(t) ? p.InputShape : oi(t) ? p.InputStock : Un(t) ? p.InputUserGroup : Ue(t) ? p.UserGroup : cs(t) ? p.StripGroup : us(t) ? p.FirstShapeGroup : ls(t) ? p.Group : as(t) ? p.NestingShape : K(t) ? p.Shape : re(t) ? p.Stock : Kn(t) ? p.Container : ds(t) ? p.Segment : Yn(t) ? p.Offcut : fs(t) ? p.Rectangle : Xn(t) ? p.Placeable : null;
}
const me = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "sides" in e && (!("type" in e) || e.type === "banding") && (!("validate" in e) || typeof e.validate == "function");
}, le = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "faces" in e && (!("type" in e) || e.type === "finish") && (!("validate" in e) || typeof e.validate == "function");
}, ce = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "faces" in e && "sides" in e && (!("type" in e) || e.type === "planing") && (!("validate" in e) || typeof e.validate == "function");
}, Qn = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "images" in e && (!("type" in e) || e.type === "imageUpload") && (!("validate" in e) || typeof e.validate == "function");
};
$.create(
  p.Machining,
  "Machining",
  (t) => ("holes" in t || "corners" in t || "hingeHoles" in t) && "enabled" in t
);
$.create(
  p.Extras,
  "Extras",
  (t) => "banding" in t || "finish" in t || "planing" in t
);
$.create(
  p.Issue,
  "Issue",
  (t) => "type" in t && "message" in t && (t.type === "error" || t.type === "warning")
);
function er(t) {
  return t?.__entityType === p.Shape || t?.__entityType === p.NestingShape;
}
function tr(t) {
  return typeof t == "string" && (t.startsWith("fields.") || t.startsWith("extras.") || t.startsWith("woodwork.") || t.startsWith("errors."));
}
function ir(t) {
  if (!t) return;
  const e = {};
  for (const [i, s] of Object.entries(t))
    if (tr(s)) {
      const n = Z(s);
      e[i] = n;
    } else
      e[i] = s;
  return e;
}
function sr(t, e) {
  const i = tn(t), s = t.startsWith("errors.validation.") ? t : i, n = ir(e);
  return {
    message: Z(s, n),
    translationKey: s,
    params: n
  };
}
function nr(t, e) {
  return sr(t, e).message;
}
class b {
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
    const i = Array.isArray(e.issues) ? e.issues : null, s = sn.parse(e), n = b.determineIdentifier(s.item, s.index || []);
    let o = s.id || "";
    !o && s.item && "autoId" in s.item && s.item.autoId && (o = s.item.autoId);
    const r = s.shouldTranslate !== !1 ? nr(s.message, s.params) : s.message;
    if (this.message = r, this.identifier = n, this.field = s.field.map((a) => [...a]), this.index = s.index ? [...s.index] : [], this.id = o, this.type = s.type, this.category = s.category || [], this.item = s.item, this.addToItemIssues(s.item), i && i.push(this), s.throwError) {
      const a = `Issue created for ${Jn(s.item)}: ${this.identifier || "N/A"} - ${this.field.map((l) => l.join(".")).join(", ")}`;
      throw new Error(a);
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
    const s = this.field.some((o) => this.isFieldPathEqual(o, e)), n = this.index.includes(i);
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
    return new b({
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
const Ot = 10, Ci = 0;
class ft extends Error {
  constructor(e) {
    super(e), this.name = "NumberFormatError";
  }
}
const Xe = {
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
function rr(t, e) {
  let i;
  if (typeof t == "number" ? i = t : i = new Ze(t).valueOf(), typeof e == "number") {
    const s = Math.pow(10, e);
    return Math.round(i * s) / s;
  }
  return i;
}
function or(t, e) {
  const i = new Ze(t);
  if (e > 0) {
    const s = i.mul(e), n = Math.round(s.valueOf());
    return new Ze(n, e).toFraction(!0);
  }
  return i.simplify().toFraction(!0);
}
function Yl({
  v: t,
  nf: e = "decimal",
  dp: i = 2,
  fr: s = 0,
  o: n = null
}) {
  if (t == null || t === "")
    return (n?.numberFormat || e) === "decimal" ? 0 .toLocaleString(void 0, {
      minimumFractionDigits: n?.decimalPlaces ?? i,
      maximumFractionDigits: n?.decimalPlaces ?? i
    }) : "";
  const o = n, r = o?.numberFormat ?? e, a = o?.decimalPlaces ?? i, l = o?.fractionRoundTo ?? s;
  if (r === "fraction")
    return k({
      v: t,
      nf: "fraction",
      dp: a,
      fr: l,
      o: n
    }) ?? "";
  {
    const c = k({ v: t, nf: "decimal", dp: a, fr: l, o: n });
    return c === null ? 0 .toLocaleString(void 0, {
      minimumFractionDigits: a,
      maximumFractionDigits: a
    }) : Number(c).toLocaleString(
      void 0,
      {
        minimumFractionDigits: a,
        maximumFractionDigits: a
      }
    );
  }
}
function Kl(t, e, i = !1) {
  const s = t == null || String(t).trim() === "";
  if (i && s)
    return { value: null, valid: !1, message: "errors.validation.field.required" };
  if (!i && s)
    return { value: null, valid: !0 };
  const n = String(t);
  try {
    const o = ms(n, !0), r = parseFloat(o ?? ""), a = o !== null && o !== "" && !isNaN(r) && isFinite(r);
    return {
      value: a ? r : t,
      valid: a,
      message: a ? void 0 : "invalid_number",
      messageData: a ? void 0 : "Could not parse as decimal."
    };
  } catch (o) {
    return {
      value: t,
      valid: !1,
      message: "errors.validation.field.invalid_number",
      messageData: o.message || "Parsing error"
    };
  }
  return {
    value: t,
    valid: !1,
    message: "errors.validation.field.invalid_format",
    messageData: e
  };
}
function ar(t = "en-US") {
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
function lr(t) {
  if (t == null || t === "") return null;
  const e = String(t).trim();
  if (!e) return null;
  try {
    const { thousandsSeparator: i, decimalSeparator: s } = ar(), n = e.replace(new RegExp(`\\${i}`, "g"), "").replace(new RegExp(`\\${s}`, "g"), "."), o = Number(n);
    return isFinite(o) ? o : null;
  } catch (i) {
    throw new ft(`Failed to parse locale number: "${t}". ${i.message || "Parsing error"}`);
  }
}
function cr(t) {
  if (!t) return !1;
  const e = t.toString().trim();
  if (!e) return !1;
  const i = Object.keys(Xe).join("");
  return new RegExp(
    `^-?((\\d+\\s+)?\\d+\\/\\d+|\\d+|\\d+[${i}]|[${i}]|\\d+'(?:\\s*\\d+(?:\\/\\d+)?"?)?|(\\d+\\s+)?\\d+\\/\\d+"|\\d+")$`
  ).test(e);
}
function ms(t, e = !1) {
  if (t == null || t === "") return null;
  let i = String(t).trim();
  if (!i) return null;
  const s = Object.keys(Xe).join("");
  i = i.replace(new RegExp(`(\\d)\\s+([${s}])`, "g"), "$1$2");
  try {
    const n = Object.keys(Xe).join(""), o = new RegExp(`^(-?)(\\d+)([${n}])$`), r = new RegExp(`^(-?)([${n}])$`), a = i.match(o), l = i.match(r);
    if (a) {
      const c = a[1], f = a[2], d = a[3], y = Xe[d];
      if (y)
        return `${c}${f} ${y}`;
      throw new Error(`Unknown vulgar fraction character: ${d}`);
    } else if (l) {
      const c = l[1] || "", f = l[2], d = Xe[f];
      if (d)
        return `${c}${d}`;
      throw new Error(`Unknown vulgar fraction character: ${f}`);
    } else if (cr(i)) {
      let c = "";
      i.startsWith("-") && (c = "-", i = i.substring(1).trim());
      const f = i.replace(/[^0-9\s/]/g, "").replace(/\s+/g, " ").trim();
      if ((f.match(/\//g) || []).length > 1)
        throw new Error("Invalid fraction format: multiple slashes.");
      return c + f;
    } else {
      e ? (i = i.replace(/[^0-9,. -]/g, ""), i = i.replace(/\s/g, "")) : (i = i.replace(/[^0-9.-]/g, ""), i = i.replace(/,/g, "")), i.startsWith(".") && (i = "0" + i), i.startsWith("-.") && (i = "-0." + i.substring(2));
      const c = i.split(".");
      c.length > 2 && (i = c[0] + "." + c.slice(1).join(""));
      const f = e ? lr(i) : parseFloat(i);
      return f === null || isNaN(f) || !isFinite(f) ? null : f.toString();
    }
  } catch (n) {
    throw new ft(
      `Failed to clean numeric input: "${t}". ${n.message || "Cleaning error"}`
    );
  }
}
function Xl(t, e, i = null, s = null) {
  if (t && !(!Y(t) && !oi(t))) {
    if (!["decimal", "fraction"].includes(e)) {
      console.warn("Attempting to update to an invalid number format:", e);
      return;
    }
    for (const n of t.numberFormatKeys)
      if (typeof t[n] == "object" && t[n] !== null)
        for (const o in t[n])
          Object.prototype.hasOwnProperty.call(t[n], o) && (t[n][o] = k({ v: t[n][o], nf: e, dp: i, pl: !1, fr: s }));
      else
        t[n] = k({ v: t[n], nf: e, dp: i, pl: !1, fr: s });
  }
}
function ur(t) {
  return /^-?\d*\.?\d+$/.test(t);
}
function dr(t) {
  return /^-?(\d+\s+)?\d+\/\d+$/.test(t) || /^-?\d+$/.test(t);
}
function k(t) {
  if (t.v == null || t.v === "")
    return t.nf === "decimal" || !t.nf && t.o?.numberFormat !== "fraction" ? null : "";
  const e = t.o ?? {}, i = t.nf ?? e?.numberFormat ?? "decimal", s = t.dp ?? e?.decimalPlaces ?? Ot, n = t.pl ?? e?.parseLocale ?? !1, o = t.fr ?? e?.fractionRoundTo ?? Ci;
  if (i === "decimal") {
    if (typeof t.v == "number") {
      if (typeof s == "number" && s !== Ot) {
        const r = Math.pow(10, s);
        return Math.round(t.v * r) / r;
      }
      return t.v;
    }
    if (typeof t.v == "string") {
      const r = t.v.trim();
      if (ur(r) && !n) {
        const a = parseFloat(r);
        if (isFinite(a)) {
          if (typeof s == "number" && s !== Ot) {
            const l = Math.pow(10, s);
            return Math.round(a * l) / l;
          }
          return a;
        }
      }
    }
  } else if (i === "fraction" && typeof t.v == "string") {
    const r = t.v.trim();
    if (dr(r))
      try {
        const a = new Ze(r);
        if (isFinite(a.valueOf())) {
          if (o === 0 || o === Ci)
            return a.toFraction(!0);
          const l = a.mul(o), c = Math.round(l.valueOf());
          return new Ze(c, o).toFraction(!0);
        }
      } catch {
      }
  }
  try {
    const r = ms(t.v, n);
    return r === null || r === "" ? i === "decimal" ? null : "" : i === "decimal" ? rr(r, s) : or(r, o);
  } catch (r) {
    throw r instanceof ft ? r : new ft(
      `Failed to convert number format: "${t.v}" to ${i}. ${r.message}`
    );
  }
}
const Ve = {
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
function B(t, e) {
  if (e?.returnKey)
    return `fields.${t}`;
  const i = `fields.${t}`, s = Z(i);
  if (s === i) {
    const n = Ve[t] || t;
    return Ce() && !Ve[t] && console.warn(`[field-mappings] No translation or fallback for field: "${t}"`), n;
  }
  return Ce() && console.log(`[field-mappings] Translated "${t}" -> "${s}"`), s;
}
const gs = (t, e, i, s, n, o) => {
  const r = L(t, e);
  if (r == null || r === "") return;
  if (typeof r != "string") {
    new b({
      item: t,
      message: Z("errors.validation.must_be_string", {
        0: Ve[e]
      }),
      shouldTranslate: !1,
      field: [[e]],
      index: s !== void 0 ? [s] : null,
      type: n ? "warning" : "error",
      issues: o
    });
    return;
  }
  const a = r?.toLowerCase();
  i.includes(a) || new b({
    item: t,
    message: Z("errors.validation.must_be_values", {
      0: Ve[e],
      1: i.join(", ")
    }),
    shouldTranslate: !1,
    field: [[e]],
    index: s !== void 0 ? [s] : null,
    type: n ? "warning" : "error",
    issues: o
  });
};
function Zl(t) {
  return t.filter((e) => e.type === "error");
}
function fr(t, e) {
  return typeof t == "object" && t !== null && e in t;
}
function hr(t) {
  return fr(t, "issues") && Array.isArray(t.issues);
}
function Jl(t, e, i = !1) {
  if (!hr(t) || !t.issues?.length)
    return !1;
  const s = i ? "warning" : "error";
  return t.issues.filter((r) => r.type === s).some((r) => r.field?.length ? r.field.some((a) => a.every((l, c) => l === mr(e[c]))) : !1);
}
const pr = {
  partMaterial: "material",
  stockMaterial: "material"
};
function mr(t) {
  return pr[t] ?? t;
}
const gr = ["banding", "finish", "planing", "info", "machining", "addon"], Ql = h().refine(
  (t) => t.startsWith("side.") || t.startsWith("face."),
  { message: 'Location must start with "side." or "face."' }
).transform((t) => t), X = _([
  S(),
  h(),
  u(),
  // Quantity values for addon-type extras with allowQuantity = true
  j(h(), _([S(), h(), u()]))
  // Object-based values: { type: 'oak', thickness: '1mm', test: true, qty: 2 }
]), Me = w({
  min: u().optional(),
  max: u().optional()
}), yr = w({
  longSide: Me.optional(),
  shortSide: Me.optional(),
  t: Me.optional(),
  holes: Me.optional(),
  corners: Me.optional(),
  hingeHoles: Me.optional(),
  formula: h().optional(),
  message: h().optional()
}), xt = J.extend({
  // ========== Identity ==========
  type: P(gr).optional().describe("Type of extra"),
  enabled: S().default(!0).describe("Whether extra is enabled"),
  // ========== Special-product metadata (machining, addon) ==========
  imageUrl: _([h().url(), R("")]).optional().describe("Image URL for custom products"),
  supplierCode: h().optional().describe("Supplier / manufacturer code, distinct from `code`; used for image-library matching (banding)"),
  description: h().optional().describe("Customer-facing description for custom products"),
  allowQuantity: S().optional().describe("When true, value is a numeric quantity (addon type)"),
  // Per-product validation rules (reuses ExtrasValidationRule shape).
  // Evaluated against the active shape via validateExtraRule(); supports both
  // dimensional constraints (t, longSide, shortSide) and count constraints
  // (holes, corners, hingeHoles).
  rules: yr.optional(),
  // ========== Face/Side mappings (superset - each extra uses what it needs) ==========
  // Face values (front/back) - partial record to allow any subset of faces
  faces: w({
    a: X.optional(),
    b: X.optional()
  }).optional().describe("Partial mapping of face keys to extra values"),
  // Side values (edges) - partial record to allow any subset of sides
  sides: w({
    a: X.optional(),
    b: X.optional(),
    c: X.optional(),
    d: X.optional(),
    l1: X.optional(),
    l2: X.optional(),
    w1: X.optional(),
    w2: X.optional()
  }).optional().describe("Partial mapping of side keys to extra values")
  // NOTE: Options are now centralized in CalculationData.extrasOptions
  // No per-shape options are stored - all extras use centralized configuration
}), ai = {
  // Inherit computed properties from validation base
  ...oe
  // Add any extra-specific computed properties here
};
j(
  P(["a", "b"]),
  X
);
j(
  P(["l1", "l2", "w1", "w2", "a", "b", "c", "d"]),
  X
);
const ys = w({
  min: u().optional().describe("Minimum value"),
  max: u().optional().describe("Maximum value"),
  message: h().optional().describe("Custom error message")
});
w({
  scope: P(["face", "side"]),
  key: h(),
  // Face or Side key
  original: h()
  // Original ExtraLocation string
});
const br = w({
  location: h().describe("Location identifier (e.g., face.a, side.l1)"),
  properties: j(h(), ys).optional(),
  disabledMessage: h().optional().describe("Message when location is disabled")
}), wr = w({
  global: j(h(), ys).optional(),
  locations: I(br).optional().describe("Location-specific constraints"),
  defaultMessage: h().optional().describe("Default message when constraints not met")
});
w({
  scope: I(P(["faces", "sides"])).describe("Scopes this extra type supports"),
  faces: I(ki()).optional().describe("Available face locations"),
  sides: I(ki()).optional().describe("Available side locations"),
  constraints: wr.optional()
});
const Sr = xt, xr = {
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
}, vr = ["radius", "bevel"], kr = J.extend({
  // Corner type
  type: P(vr).nullable().optional().describe("Type of corner modification"),
  // Size of the corner modification
  size: u().nonnegative().nullable().default(0).describe("Size of the corner modification in mm"),
  // Corner index
  index: u().min(0).max(3).default(0).describe("Corner index (0=BL, 1=BR, 2=TR, 3=TL)")
}), Ir = {
  // Inherit computed properties from validation base
  ...oe,
  // Check if corner has any operation
  hasOperation: {
    compute: (t) => t.type !== void 0 && t.size > 0,
    metadata: {
      cache: !0,
      dependencies: ["type", "size"],
      returnType: "boolean"
    }
  }
}, Pr = ["l", "w"], Tr = ["top", "bottom", "left", "right", "merged"], Or = w({
  // Coordinates
  x1: u().default(0),
  x2: u().default(0),
  y1: u().default(0),
  y2: u().default(0),
  // Dimension and position
  dimension: P(Pr).optional(),
  position: P(Tr).optional(),
  // Stock reference - required as cuts cannot exist without a stock
  stock: A("Stock"),
  // Guillotine properties
  isGuillotine: S().default(!1),
  guillotineState: w({
    order: u().nullable().optional(),
    parentSegmentID: h().nullable().optional(),
    phase: u().nullable().optional(),
    /**
     * The SAW-TURN count of this cut — direction flips from the board's first cut (head-cut
     * sections re-base at 0), the quantity `guillotineOptions.maxPhase` caps. Distinct from
     * `phase`, which is the tree's structural depth: a far-chained (same-direction) cut sits
     * deeper in the tree without turning the blade, and consumers of `phase` (the trim
     * transform's full-span expansion, PTX first-rip detection) rely on the structural
     * meaning. Cap validators must judge THIS field.
     */
    turnPhase: u().nullable().optional(),
    segmentCutOrder: u().nullable().optional(),
    partProduced: h().nullable().optional()
  }).nullable().default({}),
  // PTX properties
  ptxData: w({
    order: u().nullable().optional(),
    function: u().nullable().optional(),
    isDummy: S().nullable().optional(),
    headCutStrip: S().nullable().optional()
  }).nullable().optional(),
  // Cut properties
  isHead: S().default(!1),
  isTrim: S().default(!1),
  beamTrimL1: S().default(!1),
  beamTrimL2: S().default(!1),
  beamTrimW1: S().default(!1),
  beamTrimW2: S().default(!1),
  // Distances
  distances: w({
    bottom: u().nullable().optional(),
    left: u().nullable().optional(),
    right: u().nullable().optional(),
    top: u().nullable().optional(),
    partSize: u().nullable().optional()
  }).nullable().optional(),
  // Runtime flags
  remove: S().optional().behavior({ compress: "exclude" })
}), Dr = {
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
}, Cr = J.extend({
  // Identity
  id: h().optional().describe("Unique identifier for the extras container"),
  // Individual extras - using ref for proper typing
  // Override default reference behavior to serialize full data for proper __entityType markers
  banding: A("Banding", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Edge banding configuration"),
  finish: A("Finish", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Surface finish configuration"),
  planing: A("Planing", {
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
}), Ar = {
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
}, Er = xt, Fr = {
  // Inherit computed properties from Extra base (includes validation base)
  ...ai,
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
}, Mr = ["l", "w"], _r = J.extend({
  // Direction: 'l' = parallel to long side, 'w' = parallel to short side
  direction: P(Mr).default("l").describe("Groove direction (l=horizontal, w=vertical)"),
  // Perpendicular position from the near edge
  // For direction='l': distance from W1 edge
  // For direction='w': distance from L1 edge
  position: u().min(0).default(0).describe("Distance from near edge (perpendicular to groove)"),
  // Start offset along the groove axis (default 0 = from edge)
  start: u().min(0).default(0).describe("Start offset along groove axis"),
  // Length of the groove (undefined = full panel side)
  length: u().min(0).optional().describe("Length of groove (undefined = full panel side)"),
  // Groove dimensions
  width: u().min(0.1).default(5).describe("Width of the groove cut"),
  depth: u().min(0.1).default(5).describe("Depth of the groove cut"),
  // Face
  face: u().default(0).describe("Face index (0=front, 1=back)")
}), Lr = {
  ...oe,
  // Check if the groove runs the full panel side
  isFullLength: {
    compute: (t) => t.length === void 0 || t.length === null,
    metadata: {
      cache: !0,
      dependencies: ["length"],
      returnType: "boolean"
    }
  }
}, Rr = ["l1", "l2", "w1", "w2"], $r = J.extend({
  // Position
  position: u().min(0).default(0).describe("Position along the side"),
  side: P(Rr).describe("Side where hinge is placed"),
  face: u().min(0).max(1).default(0).describe("Face side (0 = front, 1 = back)"),
  // Hole configuration
  numHoles: u().min(1).default(2).describe("Number of holes"),
  diameter: u().min(0.1).default(35).describe("Hole diameter in mm"),
  depth: u().min(0).default(13).describe("Hole depth in mm"),
  // Hinge dimensions
  hingeLength: u().min(0).default(52).describe("Length of the hinge"),
  distanceFromEdge: u().min(0).default(22.5).describe("Distance from edge to hole center"),
  outerSpacing: u().min(0).default(9.5).describe("Spacing from hinge ends to outer holes"),
  // Constraints
  minimumHoleDistance: u().min(0).optional().describe("Minimum distance between holes"),
  positionLimit: u().min(0).optional().describe("Maximum position along side")
}), Nr = {
  // Inherit computed properties from validation base
  ...oe,
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
}, Ee = ["l1", "l2", "w1", "w2"], Gr = ["a", "b", "c", "d"], ye = [...Ee, ...Gr], ee = ["a", "b"], Br = ["regular", "hinge", "shelf"], jr = J.extend({
  // Position
  x: u().min(0).default(0).describe("X position from left edge"),
  y: u().min(0).default(0).describe("Y position from bottom edge"),
  // Dimensions
  diameter: u().min(0.1).default(5).describe("Hole diameter in mm"),
  depth: u().min(0).optional().describe("Hole depth (undefined for through hole)"),
  // Configuration
  face: u().default(0).describe("Face index (0=front, 1=back)"),
  type: P(Br).default("regular").describe("Type of hole"),
  // Edge boring: when set, the hole is drilled into this edge (l1/l2/w1/w2)
  // rather than a face. `depth` then measures how far the bore goes into the
  // panel from that edge. null = a normal face hole.
  edge: P(Ee).nullable().default(null).describe("Edge the hole is bored into (null = face hole)")
}), zr = {
  // Inherit computed properties from validation base
  ...oe,
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
function tt(t, e) {
  Object.assign(t, { color: e });
}
V.colors = [
  2,
  3,
  4,
  5,
  7,
  9,
  10,
  11,
  14,
  159
];
const li = V("logs"), Vr = V("cuts"), bs = V("groups"), ws = V("guillotine"), Wr = V("results"), Hr = V("scoring"), Ur = V("firstShapes"), qr = V("calculations"), Yr = V("subset"), Kr = V("secondRun"), Xr = V("stack"), Ss = V("errors"), Zr = V("allStock"), xs = V("reset"), vs = V("swarm");
tt(Ss, 1);
tt(bs, 14);
tt(ws, 159);
tt(xs, 11);
tt(vs, 5);
const ks = {
  info: li,
  guillotine: ws,
  results: Wr,
  secondRun: Kr,
  cuts: Vr,
  scoring: Hr,
  calculations: qr,
  stack: Xr,
  subset: Yr,
  errors: Ss,
  allStock: Zr,
  firstShapes: Ur,
  groups: bs,
  reset: xs,
  swarm: vs
};
function Jr(t = "info", e, i) {
  const s = e.map((r) => {
    const a = { ...r };
    for (const l in a)
      typeof a[l] == "string" && a[l].length > 30 && (a[l] = a[l].slice(0, 50) + "...");
    return a;
  }), n = console.table;
  let o = "";
  console.table = (r, a) => {
    const l = console.log;
    console.log = (c) => {
      o += c + `
`;
    }, n(r, a), console.log = l;
  }, console.table(s, i), (ks[t] || li)(o), console.table = n;
}
const Qr = "\x1B[31m", eo = "\x1B[0m";
typeof process < "u" && process.env;
function to(t = "info", e = "", i = null, s = null, n = !1) {
  if (!n) return;
  const o = ks[t] || li;
  if (!o.enabled) return;
  const r = typeof e == "function" ? e() : e;
  o(t === "errors" ? `${Qr}${r}${eo}` : r), i && o(i), s && Jr(t, s);
}
const Is = typeof process < "u" && !!process.env && !!process.env.ALGO_TRACE, io = () => typeof performance < "u" ? performance.now() : 0;
(Is ? process.env.ALGO_TRACE_DATA ?? "" : "").split(",").map((t) => t.trim()).filter(Boolean);
function so(t, e, i, s) {
  if (!Is) return;
  let n;
  try {
    process.stderr.write(`__GATE__ ${JSON.stringify({ g: t, t: e, c: i ?? void 0, d: n, ts: io() })}
`);
  } catch {
  }
}
const no = {
  "rectangle-guillotine-fast": {
    id: "rectangle-guillotine-fast",
    label: "Rectangle : Guillotine : Fast",
    description: "The original SmartCut guillotine — strip-based, speed-first. The default.",
    tags: ["rectangle", "guillotine", "fast"],
    computeFactor: 1,
    minThoroughness: 0
  },
  "rectangle-guillotine-max-1": {
    id: "rectangle-guillotine-max-1",
    label: "Rectangle : Guillotine : Max (fast)",
    description: "Guillotine global cutting-stock solver, fast tier (~60s/job budget). Fewer boards than Fast, quickest of the Max tiers.",
    tags: ["rectangle", "guillotine", "max", "max-1"],
    computeFactor: 4,
    minThoroughness: 2
  },
  "rectangle-guillotine-max-2": {
    id: "rectangle-guillotine-max-2",
    label: "Rectangle : Guillotine : Max",
    description: "Guillotine global cutting-stock solver, balanced tier (~150s/job budget). The headline Max — near-deep efficiency at a fraction of the time.",
    tags: ["rectangle", "guillotine", "max", "max-2"],
    computeFactor: 8,
    minThoroughness: 4
  },
  "rectangle-guillotine-max-3": {
    id: "rectangle-guillotine-max-3",
    label: "Rectangle : Guillotine : Max (deep)",
    description: "Guillotine global cutting-stock solver, deep tier (~420s/job budget) with the learned operators — the fewest boards we can find. Minutes per job.",
    tags: ["rectangle", "guillotine", "max", "max-3"],
    computeFactor: 16,
    minThoroughness: 4
  },
  "irregular-nesting-fast": {
    id: "irregular-nesting-fast",
    label: "Irregular : Nesting : Fast",
    description: "The polygon nester's parity search — what every nesting job runs today. The nesting default.",
    tags: ["irregular", "nesting", "fast"],
    computeFactor: 1,
    minThoroughness: 0
  },
  "irregular-nesting-max-1": {
    id: "irregular-nesting-max-1",
    label: "Irregular : Nesting : Max (fast)",
    description: "Polygon nester anytime multi-start search, fast tier (~5s/job budget). The measured knee — most of the density gain over Fast.",
    tags: ["irregular", "nesting", "max", "max-1"],
    computeFactor: 4,
    // The bundle is a CONFIG override (nesting.maxBudgetMs), and a model's config bundle only
    // reaches the engine through the retry pipeline (thoroughness > 0) — see the field doc above.
    // 1 is the lowest level that engages it; the bundle then explicitly disables every level-1
    // retry pass, so a nesting Max job is ONE nest solve at a bigger budget and nothing else.
    minThoroughness: 1
  },
  "irregular-nesting-max-2": {
    id: "irregular-nesting-max-2",
    label: "Irregular : Nesting : Max",
    description: "Polygon nester anytime multi-start search, deep tier (~30s/job budget). Pays off on jobs above ~50 parts; the ceiling of the public ladder.",
    tags: ["irregular", "nesting", "max", "max-2"],
    computeFactor: 8,
    // See irregular-nesting-max-1.
    minThoroughness: 1
  }
}, ro = Object.values(no);
function oo(t) {
  if (typeof t != "string") return null;
  const e = t.trim().toLowerCase();
  if (!e) return null;
  for (const i of ro)
    if (i.id.toLowerCase() === e) return i.id;
  return null;
}
function Ai(t) {
  return oo(t) !== null;
}
const ao = w({
  /** Allowed saw cut types; absent ⇒ any. e.g. `['beam']` for the Max tiers. */
  cutType: I(h()).optional(),
  /** Needs a recognised saw profile (sawProfileId or saw vendor+model) to be provably cut-safe. */
  sawProfile: S().optional(),
  /** Upper bound on total physical parts (Σ shape quantities). */
  maxParts: u().optional()
}), lo = w({
  id: h(),
  label: h(),
  description: h(),
  tags: I(h()),
  /** Relative compute expectation vs the default (UI hint, not a limit). */
  computeFactor: u(),
  /** Declarative eligibility; `null` ⇒ always available (e.g. Fast). */
  requires: ao.nullable()
}), co = w({
  id: h(),
  label: h(),
  vendor: h().optional(),
  model: h().optional(),
  /** The saw's cut type (beam / guillotine / …) — drives which models are eligible. */
  cutType: h(),
  /** Curated for production export/use. */
  productionSaw: S().optional(),
  /** Saw-control export formats this saw offers. */
  formats: I(h()).optional(),
  /** Saw/CNC capability + constraint flags the UI can surface (head cuts, max pieces/strip, …). */
  capabilities: j(h(), Ws()).optional()
});
w({
  version: R(3),
  defaultModel: h(),
  models: I(lo),
  saws: I(co),
  /** All saw cut types the platform supports — a top-level enum for pickers. */
  cutTypes: I(h())
});
const Dt = 500, uo = {
  "rectangle-guillotine-fast": null,
  "rectangle-guillotine-max-1": { cutType: ["beam"], sawProfile: !0, maxParts: Dt },
  "rectangle-guillotine-max-2": { cutType: ["beam"], sawProfile: !0, maxParts: Dt },
  "rectangle-guillotine-max-3": { cutType: ["beam"], sawProfile: !0, maxParts: Dt },
  "irregular-nesting-fast": null,
  "irregular-nesting-max-1": { cutType: ["nesting"] },
  "irregular-nesting-max-2": { cutType: ["nesting"] }
};
function Ei(t, e) {
  return !t || e.cutType === void 0 ? null : t.cutType && !t.cutType.includes(e.cutType) ? `Max is ${t.cutType.join("/")}-only for now (saw cutType '${e.cutType}')` : t.maxParts !== void 0 && e.partCount !== void 0 && e.partCount > t.maxParts ? `Max is capped at ${t.maxParts} parts for now (job has ${e.partCount})` : t.sawProfile && !e.hasProfile ? "Max needs a recognised beam saw profile (sawProfileId or saw vendor+model)" : null;
}
function Fi(t) {
  return uo[t] ?? null;
}
function $e(t) {
  switch (t) {
    case "sheet":
      return ["guillotine", "efficiency", "beam", "nesting"];
    case "roll":
      return ["guillotine", "efficiency", "nesting"];
    case "linear":
      return [];
    default:
      return ["guillotine"];
  }
}
function Ne(t, e) {
  return t === "sheet" ? e === "guillotine" || e === "beam" ? ["l", "w", "flex"] : [] : t === "roll" ? e === "guillotine" ? ["w"] : [] : [];
}
const fo = "saw.strategy.time-ignored-for-beam", de = (t) => t != null && t !== "", ho = (t) => {
  const e = t.options?.minSpacingDimension;
  return !!e && (e.dimension !== 0 || e.minSpacing !== 0);
}, Ct = (t) => de(t) ? `'${String(t)}'` : "unset", jt = [
  {
    id: "linear.no-cut-type-or-preference",
    title: "Linear stock has no cut type or cut preference",
    kind: "coerce",
    doors: ["input", "runtime", "explain"],
    reads: ["stockType"],
    writes: ["cutType", "cutPreference"],
    when: (t) => t.stockType === "linear" && (de(t.cutType) || de(t.cutPreference)),
    patch: () => ({ cutType: void 0, cutPreference: void 0 }),
    message: () => "Linear stock is cut to length — there is no layout to optimise, so cutType and cutPreference are cleared.",
    description: "Linear stock (bars, profiles, lengths) is cut to length; the optimiser arranges nothing on it, so a cut type or cut preference sent with linear stock is dropped rather than applied.",
    severity: "info"
  },
  {
    id: "cut-type.default",
    title: "cutType defaults to the first cut type the stock type accepts",
    kind: "default",
    doors: ["input", "explain"],
    reads: ["stockType", "cutType"],
    writes: ["cutType"],
    when: (t) => !de(t.cutType) && $e(t.stockType).length > 0,
    patch: (t) => ({ cutType: $e(t.stockType)[0] }),
    message: (t, { after: e }) => `No cutType given — ${String(t.stockType)} stock defaults to ${Ct(e.cutType)}.`,
    description: "cutType is optional. When omitted, the stock type's first accepted cut type is used (sheet and roll: guillotine; linear stock takes none).",
    severity: "info"
  },
  {
    id: "cut-type.valid-for-stock",
    title: "cutType must be one the stock type accepts",
    kind: "clamp",
    doors: ["input", "explain"],
    reads: ["stockType", "cutType"],
    writes: ["cutType"],
    when: (t) => de(t.cutType) && !$e(t.stockType).includes(t.cutType),
    patch: (t) => {
      const e = $e(t.stockType);
      return { cutType: e.length ? e[0] : void 0 };
    },
    message: (t, { before: e, after: i }) => {
      const s = $e(t.stockType);
      return `cutType '${String(e.cutType)}' is not available on ${String(t.stockType)} stock (accepts ${s.length ? s.map((n) => `'${n}'`).join(", ") : "none"}) — resolved to ${Ct(i.cutType)}.`;
    },
    description: "Each stock type accepts a fixed set of cut types (sheet: guillotine, efficiency, beam, nesting; roll: guillotine, efficiency, nesting; linear: none). A cutType outside that set resolves to the first accepted one.",
    severity: "warning"
  },
  {
    id: "cut-preference.valid-for-stock-cut-type",
    title: "cutPreference must be one the (stock type, cut type) pair accepts",
    kind: "clamp",
    doors: ["input", "explain"],
    reads: ["stockType", "cutType", "cutPreference"],
    writes: ["cutPreference"],
    when: (t) => de(t.cutPreference) && !Ne(t.stockType, t.cutType).includes(t.cutPreference),
    patch: (t) => {
      const e = Ne(t.stockType, t.cutType);
      return { cutPreference: e.length ? e[0] : void 0 };
    },
    message: (t, { before: e, after: i }) => {
      const s = Ne(t.stockType, t.cutType);
      return s.length ? `cutPreference '${String(e.cutPreference)}' is not available for ${String(t.cutType)} on ${String(t.stockType)} stock (accepts ${s.map((n) => `'${n}'`).join(", ")}) — resolved to ${Ct(i.cutPreference)}.` : `cutPreference '${String(e.cutPreference)}' has no meaning for ${String(t.cutType)} on ${String(t.stockType)} stock — cleared.`;
    },
    description: "Only the guillotine family (guillotine, beam) has a cut direction: sheet stock accepts l, w or flex; roll stock rips one way (w). Efficiency, nesting and linear have no direction, so a value sent for them is cleared.",
    severity: "warning"
  },
  {
    id: "cut-preference.default",
    title: "cutPreference defaults to length-first",
    kind: "default",
    doors: ["input", "explain"],
    reads: ["stockType", "cutType", "cutPreference"],
    writes: ["cutPreference"],
    when: (t) => !de(t.cutPreference) && Ne(t.stockType, t.cutType).length > 0,
    patch: (t) => {
      const e = Ne(t.stockType, t.cutType);
      return { cutPreference: e.includes("l") ? "l" : e[0] };
    },
    message: (t, { after: e }) => `No cutPreference given — ${String(t.cutType)} on ${String(t.stockType)} stock defaults to '${String(e.cutPreference)}'.`,
    description: "A guillotine-family saw with no cut preference cuts length-first (l), or the only direction the stock allows (roll: w).",
    severity: "info"
  },
  {
    id: "stacking-mode.none-for-roll",
    title: "Roll stock cannot stack",
    kind: "coerce",
    doors: ["input", "explain"],
    reads: ["stockType", "options.stackingMode"],
    writes: ["options.stackingMode"],
    when: (t) => t.stockType === "roll" && t.options?.stackingMode !== "none",
    patch: (t) => ({ options: { ...t.options ?? {}, stackingMode: "none" } }),
    message: (t, { before: e }) => `options.stackingMode '${String(e["options.stackingMode"])}' is not possible on roll stock — set to 'none'.`,
    description: "Roll stock is a single continuous length; there are no sheets to stack, so any stacking mode is forced to none.",
    severity: "warning"
  },
  {
    id: "min-spacing.efficiency-only",
    title: "Part spacing only applies to efficiency packing",
    kind: "coerce",
    doors: ["input", "runtime", "explain"],
    reads: ["cutType", "options.minSpacing", "options.minSpacingDimension.dimension", "options.minSpacingDimension.minSpacing"],
    writes: ["options.minSpacing", "options.minSpacingDimension.dimension", "options.minSpacingDimension.minSpacing"],
    when: (t) => !!t.options && t.cutType !== "efficiency" && (t.options.minSpacing !== 0 || ho(t)),
    patch: (t) => {
      const e = t.options ?? {}, i = e.minSpacingDimension;
      return {
        options: {
          ...e,
          minSpacing: 0,
          ...i ? { minSpacingDimension: { dimension: 0, minSpacing: 0 } } : {}
        }
      };
    },
    message: (t) => `options.minSpacing / minSpacingDimension only apply to efficiency packing — ${String(t.cutType ?? "this")} cutting spaces parts by the blade width, so they are set to 0.`,
    description: "Part-to-part spacing is an efficiency-packing concept. The guillotine family and nesting derive their gaps from the blade width (kerf), so a spacing value sent for them is zeroed rather than carried as a setting the layout never honours.",
    severity: "warning"
  },
  {
    id: "strategy.time-ignored-for-beam",
    title: "Beam saws ignore guillotineOptions.strategy 'time'",
    kind: "coerce",
    doors: ["input", "runtime", "explain"],
    reads: ["cutType", "guillotineOptions.strategy"],
    writes: ["guillotineOptions.strategy"],
    when: (t) => t.cutType === "beam" && t.guillotineOptions?.strategy === "time",
    patch: (t) => ({ guillotineOptions: { ...t.guillotineOptions ?? {}, strategy: "efficiency" } }),
    message: () => "guillotineOptions.strategy 'time' is the fence-consistency knob for a manual table saw; a beam saw positions the fence per cut, so it is ignored — set to 'efficiency'.",
    description: "'time' trades material efficiency for layouts whose strips share cut positions, so a manual operator moves the fence fewer times. A beam saw positions its fence automatically for every cut, so the trade costs material and buys nothing — the setting is resolved to 'efficiency' rather than rejected, and the job runs.",
    severity: "warning",
    event: fo
  },
  // `maxPhase.two-stage-normalised-for-beam` LIVED HERE 2026-08-18 → 2026-08-24. It coerced a
  // beam saw's maxPhase 1 to 2 because the cut derivation could not build a dense 2-stage
  // board (job 1326950's part family: 35 boards, 31 of 155 parts unplaced at 1). Its own
  // retirement condition — that family at maxPhase 1 in ≤ ~12 boards — holds since the
  // turn-budget fix (#41: the cap is counted in saw turns, not tree depth): 13 sheets /
  // 11 patterns, all 155 placed, every cut at turn ≤ 1. So a beam saw's 1 now reaches the
  // engine untouched and means what it says: rips, one turn, crosscuts, no recut — every
  // strip takes only parts whose cross dimension matches the strip.
  {
    id: "algorithm.ineligible",
    title: "The chosen optimisation model does not fit this saw",
    kind: "ignore",
    doors: ["explain"],
    reads: ["algorithm", "cutType"],
    writes: [],
    when: (t, e) => de(t.algorithm) && Ai(t.algorithm) && Ei(Fi(t.algorithm), { cutType: t.cutType ?? void 0, partCount: e.partCount, hasProfile: !!e.profile }) !== null,
    patch: () => ({}),
    message: (t, e, i) => {
      const s = Ai(t.algorithm) ? Ei(Fi(t.algorithm), { cutType: t.cutType ?? void 0, partCount: i.partCount, hasProfile: !!i.profile }) : null;
      return `algorithm '${String(t.algorithm)}' will not engage for this saw (${s ?? "ineligible"}) — the job falls back to the default model.`;
    },
    description: "The Max tiers are gated per family (rectangle-guillotine-max-* need a beam saw with a recognised profile and a part cap; irregular-nesting-max-* need a nesting saw). A model that does not fit the job safely falls back to the default — it never errors.",
    severity: "info"
  },
  {
    id: "profile.max-nested-cut-depth-sets-max-phase",
    title: "A saw profile with a nesting-depth limit sets maxPhase",
    kind: "derive",
    doors: ["explain"],
    reads: ["guillotineOptions.maxPhase"],
    writes: ["guillotineOptions.maxPhase"],
    when: (t, e) => {
      const i = e.profile?.constraints?.maxNestedCutDepth;
      return typeof i == "number" && i > 0 && !((t.guillotineOptions?.maxPhase ?? 0) > 0);
    },
    patch: (t, e) => ({ guillotineOptions: { ...t.guillotineOptions ?? {}, maxPhase: e.profile?.constraints?.maxNestedCutDepth ?? 0 } }),
    message: (t, { after: e }, i) => `Saw profile '${String(i.profile?.id)}' limits nested cut depth to ${String(i.profile?.constraints?.maxNestedCutDepth)} — guillotineOptions.maxPhase (unset / 0) is set to ${String(e["guillotineOptions.maxPhase"])} for this saw.`,
    description: "When a recognised saw (vendor + model) declares a maximum nested cut depth and the request leaves maxPhase at 0 (no limit), the profile's depth is applied so the optimiser never plans a pattern the saw's controller rejects.",
    severity: "info"
  },
  {
    id: "profile.cut-preference-clamped",
    title: "A saw profile's supported cut directions clamp cutPreference",
    kind: "derive",
    doors: ["explain"],
    reads: ["cutPreference"],
    writes: ["cutPreference"],
    when: (t, e) => {
      const i = e.profile?.constraints?.supportedCutPreferences, s = t.cutPreference;
      return !!i && i.length > 0 && de(s) && !i.includes(String(s));
    },
    patch: (t, e) => {
      const i = e.profile?.constraints?.supportedCutPreferences ?? [];
      return { cutPreference: i.includes("flex") ? "flex" : i[0] };
    },
    message: (t, { before: e, after: i }, s) => `Saw profile '${String(s.profile?.id)}' can only cut ${(s.profile?.constraints?.supportedCutPreferences ?? []).map((n) => `'${n}'`).join(", ")} — cutPreference '${String(e.cutPreference)}' is steered to '${String(i.cutPreference)}'.`,
    description: "A saw that physically cannot rip short-side-first must not be handed a 'w' job. When a recognised profile declares supportedCutPreferences, a direction outside the set is steered to 'flex' if allowed (the optimiser then chooses per board within the set), else the first allowed direction.",
    severity: "warning"
  }
];
function po(t) {
  return t === "explain" ? jt.filter((e) => e.doors.includes("input") || e.doors.includes("explain")) : jt.filter((e) => e.doors.includes(t));
}
function mo(t) {
  return jt.find((e) => e.id === t);
}
function Mi(t, e) {
  let i = t;
  for (const s of e.split(".")) {
    if (i === null || typeof i != "object") return;
    i = i[s];
  }
  return i;
}
function go(t) {
  return {
    stockType: t.stockType,
    cutType: t.cutType,
    cutPreference: t.cutPreference,
    algorithm: t.algorithm,
    guillotineOptions: t.guillotineOptions,
    efficiencyOptions: t.efficiencyOptions,
    options: t.options
  };
}
function Ps(t, e) {
  let i = go(t);
  const s = {}, n = [];
  for (const o of po(e.door)) {
    if (!o.when(i, e)) continue;
    if (o.kind === "ignore") {
      n.push({ ruleId: o.id, kind: o.kind, severity: o.severity, paths: [], before: {}, after: {}, message: o.message(i, { before: {}, after: {} }, e) });
      continue;
    }
    const r = o.patch(i, e), a = { ...i, ...r }, l = {}, c = {}, f = [];
    for (const d of o.writes) {
      const y = Mi(i, d), g = Mi(a, d);
      l[d] = y, c[d] = g, g !== y && f.push(d);
    }
    if (f.length) {
      for (const d of Object.keys(r))
        s[d] = r[d];
      i = a, n.push({ ruleId: o.id, kind: o.kind, severity: o.severity, paths: f, before: l, after: c, message: o.message(i, { before: l, after: c }, e) });
    }
  }
  return { subject: i, patch: s, hits: n };
}
function zt(t, e) {
  const { patch: i, hits: s } = Ps(t, e), n = t;
  for (const o of Object.keys(i))
    switch (o) {
      case "cutType":
        n.cutType = i.cutType;
        break;
      case "cutPreference":
        n.cutPreference = i.cutPreference;
        break;
      case "guillotineOptions":
        n.guillotineOptions = i.guillotineOptions;
        break;
      case "efficiencyOptions":
        n.efficiencyOptions = i.efficiencyOptions;
        break;
      case "options":
        n.options = i.options;
        break;
    }
  for (const o of s) {
    const r = mo(o.ruleId);
    r?.event && (so(r.event, !0, { source: e.source, cutType: t.cutType }), to("guillotine", () => `[saw] ${r.event} (${e.source ?? e.door}): ${o.message}`));
  }
  return s;
}
function ec(t, e = {}) {
  const { patch: i, hits: s } = Ps(t, { ...e, door: e.door ?? "input" });
  return s.some((n) => n.paths.length) ? { ...t, ...i } : t;
}
function x(t, e) {
  const i = e.description ? t.describe(e.description) : t;
  return i._metadata = e, i;
}
const yo = (t, e) => x(t, e), bo = ["efficiency", "guillotine", "beam", "nesting", "none"], wo = ["l", "w", "flex", "none"], Ts = ["efficiency", "time"], Os = ["l", "w"], So = ["efficiency", "smallest"], xo = ["dimensions", "identical", "none"], vo = ["sheet", "linear", "roll"], ci = _([
  u().int().positive(),
  Pe(),
  Hs()
]).transform((t) => t ?? 100).describe("Maximum stack height for beam saw stacking"), ui = P(bo).nullable().optional().transform((t) => t === null ? void 0 : t), di = P(wo).nullable().optional().transform((t) => t === null ? void 0 : t), fi = P(So).default("efficiency").describe("Method for selecting stocks"), hi = P(xo).default("identical").describe("How to stack identical parts"), Ds = w({
  /** TABLE-SAW ONLY — IGNORED FOR `cutType: 'beam'`. `'time'` trades material efficiency
   *  for fence consistency (fewer fence changes for a manual operator). A beam saw
   *  positions the fence for every cut, so the trade buys nothing there and the value is
   *  normalised to `'efficiency'` by the saw-rules registry (`strategy.time-ignored-for-beam`). */
  strategy: P(Ts).default("efficiency"),
  /** The TURNS a board may take: 0 = unlimited, 1 = 2-stage (rip, turn, crosscut, no
   *  recut — every strip takes only parts whose cross dimension matches the strip),
   *  2 = three-stage, … Enforced as sent for every cut type; the beam-only 1 → 2
   *  normalisation was retired 2026-08-24 once the engine derived dense 2-stage boards
   *  (turn-budget fix, #41). */
  maxPhase: u().int().min(0).max(10).default(0),
  headCuts: S().default(!1),
  limitStripDimensions: S().default(!1),
  /** Vertical panel saw: narrowest strips at the top of the board, residual waste at the
   *  bottom (cutting starts top-left; leftover board rests on a panel trolley). Enables the
   *  guillotine.verticalErgonomics layout pass. */
  verticalPanelSaw: S().default(!1),
  /** The widest assembled strip an operator can safely handle at height on a vertical panel
   *  saw, measured across the strip. In the job's own units, like every other dimension —
   *  nothing here assumes millimetres. Null = no cap.
   *
   *  INDEPENDENT of `limitStripDimensions` and `verticalPanelSaw`: setting it alone applies it.
   *  (It used to be silently discarded unless `limitStripDimensions` was also on, which defaults
   *  to false — see `resolveStripDimensionCap` in shared/dimensions.ts.) With
   *  `limitStripDimensions` on, the parts-derived cap applies and this tightens it.
   *
   *  ⚠️ That composition is a `min`, so the TIGHTER cap wins and the looser one is inert. On a
   *  job of small parts the derived cap sits far below any operator handling limit (live job
   *  1339087: mean cross-dimension 390.5, floored at 20% of 2070 → cap 414), and a
   *  `maxStripWidth` of 800 there changes nothing — byte-identical to sending no cap. A caller
   *  stating an OPERATOR limit wants `limitStripDimensions: false` so this number is the cap.
   *
   *  A STRONG PREFERENCE, not a guarantee: it steers strip building away from over-wide parts,
   *  but a part whose own smaller side exceeds the cap cannot be made to fit one, and nothing is
   *  left unplaced to satisfy it. Hard rejection lives in the saw safety oracle
   *  (`strip-width-exceeded`), which only runs when the job carries a sawProfileId. */
  maxStripWidth: u().positive().nullable().default(null),
  /** Per-phase cutDirection override for firstShapeSegment creation
   *  (experimental). Maps phase number → 'l'/'w'. Forces the placement-
   *  defining segment direction at that phase. */
  phaseDirection: j(h(), P(["l", "w"])).optional()
}).default({
  strategy: "efficiency",
  maxPhase: 0,
  headCuts: !1,
  limitStripDimensions: !1,
  verticalPanelSaw: !1,
  maxStripWidth: null
}), Cs = w({
  "biesse-xml": w({ precision: u().int().min(0).max(6).optional() }).optional(),
  "mayer-may": w({ units: h().optional(), currency: h().optional() }).optional(),
  ptx: w({
    optParam: h().max(50).optional(),
    sawParam: h().max(50).optional()
  }).optional()
}).optional(), As = w({
  primaryCompression: P(Os).default("w")
}).default({
  primaryCompression: "w"
});
w({
  stockType: ii,
  /**
   * Stack height - Maximum stack height
   */
  stackHeight: ci,
  /**
   * Cut type - Type of cutting algorithm
   */
  cutType: ui,
  /**
   * Cut preference - Preferred cutting direction
   */
  cutPreference: di,
  /**
   * Guillotine options - Configuration for guillotine cutting
   */
  guillotineOptions: Ds,
  /**
   * Efficiency options - Configuration for efficiency optimization
   */
  efficiencyOptions: As,
  /**
   * Stock selection - Method for selecting stocks
   */
  stockSelection: fi,
  /**
   * Stacking mode - How to stack identical parts
   */
  stackingMode: hi
});
const ko = u().min(0).default(0), Io = u().min(0).optional(), Po = u().min(0).default(0), Es = u().min(0).default(0), To = w({
  dimension: Po,
  minSpacing: Es
}), Oo = x(
  ui,
  {
    label: "fields.cutType",
    group: "cutting",
    order: 1,
    type: "enum",
    placeholder: "options.select",
    options: [
      { value: "efficiency", label: "options.efficiency_title", info: "options.efficiency_description" },
      { value: "guillotine", label: "options.guillotine_title", info: "options.guillotine_description" },
      { value: "beam", label: "options.beam", info: "options.beam_description" },
      { value: "nesting", label: "options.nesting_title", info: "options.nesting_description" }
    ]
  }
), Do = x(
  di,
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
      { value: "flex", label: "options.flexible", info: "options.flexible_description" }
    ]
  }
), Co = x(
  fi,
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
), Ao = x(
  hi,
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
), Eo = x(
  S().default(!1),
  {
    label: "fields.headCuts",
    group: "guillotine",
    order: 3,
    type: "boolean",
    info: "options.headCuts_description"
  }
), Fo = x(
  u().int().min(0).max(10).default(0),
  {
    label: "fields.maxPhase",
    group: "guillotine",
    order: 2,
    type: "number",
    info: "options.maxPhase_description"
  }
), Mo = x(
  S().default(!1),
  {
    label: "fields.limitStripDimensions",
    group: "guillotine",
    order: 4,
    type: "boolean",
    info: "options.limitStripDimensions_description"
  }
), _o = x(
  P(Ts).default("efficiency"),
  {
    label: "fields.guillotineStrategy",
    group: "guillotine",
    order: 1,
    type: "enum",
    options: [
      { value: "efficiency", label: "options.strategy_efficiency", info: "options.strategy_efficiency_description" },
      { value: "time", label: "options.strategy_time", info: "options.strategy_time_description" }
    ]
  }
), Lo = x(
  w({
    strategy: _o,
    maxPhase: Fo,
    headCuts: Eo,
    limitStripDimensions: Mo,
    verticalPanelSaw: x(
      S().default(!1),
      {
        label: "fields.verticalPanelSaw",
        group: "guillotine",
        order: 5,
        type: "boolean",
        info: "options.verticalPanelSaw_description"
      }
    ),
    maxStripWidth: x(
      u().positive().nullable().default(null),
      {
        label: "fields.maxStripWidth",
        group: "guillotine",
        order: 6,
        type: "number",
        info: "options.maxStripWidth_description"
      }
    ),
    // Per-phase cutDirection override (experimental). Maps phase number → 'l'/'w'.
    // Forces the firstShapeSegment created at that phase to use the override
    // direction instead of the auto-computed one. Empty/undefined = legacy
    // auto-compute behaviour. Used at first-shapes.ts:createFirstShapeSegment.
    phaseDirection: j(h(), P(["l", "w"])).optional()
  }).default({
    strategy: "efficiency",
    maxPhase: 0,
    headCuts: !1,
    limitStripDimensions: !1,
    verticalPanelSaw: !1,
    maxStripWidth: null
  }),
  {
    label: "fields.guillotineOptions",
    group: "guillotine",
    order: 1,
    type: "object"
  }
), Ro = x(
  P(Os).default("w"),
  {
    label: "fields.primaryCompression",
    group: "efficiency",
    order: 1,
    type: "enum",
    options: [
      { value: "w", label: "options.compression_y", info: "options.compression_y_description" },
      { value: "l", label: "options.compression_x", info: "options.compression_x_description" }
    ]
  }
), $o = x(
  w({
    primaryCompression: Ro
  }).default({
    primaryCompression: "w"
  }),
  {
    label: "fields.efficiencyOptions",
    group: "efficiency",
    order: 1,
    type: "object"
  }
), Oe = (t) => {
  const { min: e, allowZero: i = !1, nullable: s = !0 } = t || {};
  let n;
  return e !== void 0 ? n = i ? u().min(e) : u().min(e) : n = i ? u().min(0) : u().gt(0), s ? _([
    n,
    h(),
    Pe()
  ]).transform((o) => o == null || o === "" ? null : typeof o == "string" ? k({ v: o }) ?? null : o) : _([
    n,
    h()
  ]).transform((o) => o === "" ? 0 : typeof o == "string" ? k({ v: o }) ?? 0 : o);
}, No = () => x(
  Je,
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
), Go = () => x(
  Xi,
  {
    label: "fields.orientationLock",
    group: "properties",
    options: [
      { value: "", label: "fields.orientationLock.free" },
      { value: "l", label: "fields.orientationLock.length" },
      { value: "w", label: "fields.orientationLock.width" }
    ]
  }
), ot = (t) => x(
  Oe({ allowZero: t.allowZero, nullable: !0 }).default(null),
  {
    label: t.label,
    placeholder: t.placeholder || "",
    group: "dimensions",
    allowZero: t.allowZero || !1,
    output: "number"
  }
), Bo = () => x(
  ne(
    (t) => {
      if (t === "" || t === null || t === void 0) return 1;
      if (typeof t == "string") {
        const e = parseInt(t, 10);
        return isNaN(e) ? 1 : e;
      }
      return t;
    },
    u().min(0, { message: "Quantity should be greater than or equal to 0" }).int({ message: "Quantity must be a whole number" }).default(1)
  ),
  {
    label: "fields.q",
    placeholder: "fields.q",
    group: "general",
    step: 1,
    output: "number"
  }
), jo = (t) => x(
  h().max(200).optional().transform((e) => e ? e.trim().toUpperCase() : ""),
  {
    label: "fields.name",
    placeholder: t?.placeholder || "",
    group: "general"
  }
), zo = () => x(
  h().max(200).optional().transform((t) => t ? t.trim().toUpperCase() : ""),
  {
    label: "fields.material",
    placeholder: "fields.material",
    group: "properties"
  }
), Vo = () => x(
  Oe({ allowZero: !0, nullable: !0 }).optional().transform((t) => {
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
), Wo = () => x(
  u().min(0).max(100).optional().default(0),
  {
    label: "fields.discount",
    placeholder: "fields.discount",
    group: "pricing",
    step: 1,
    output: "number"
  }
), Ho = () => x(
  Us().max(500).transform((t) => t.replace(/,/g, " ")).optional(),
  {
    label: "fields.notes",
    placeholder: "fields.notes",
    group: "general"
  }
), Uo = (t) => x(
  S().default(!1),
  t
), qo = (t, e) => x(
  P(t),
  e
), xe = {
  field: x,
  boolean: Uo,
  enum: qo,
  custom: yo
}, Fs = {
  // MongoDB ObjectId of the saw doc this input came from. The storefront
  // chains `Saw.findById → InputSaw → calculate request`, and the server
  // hook `resolveSawFromInputStock` reads this back to short-circuit the
  // DB lookup when the picked stock's `db_sawId` already matches what
  // the client shipped. Without the field on the schema, Zod parse
  // strips it during construction and the server always pays the
  // loader round-trip.
  db_id: x(
    h().optional(),
    {
      label: "fields.db_id",
      description: "MongoDB ObjectId for the source saw doc",
      group: "system",
      hidden: !0
    }
  ),
  // ========== Saw identity ==========
  // Identity triple used by `findSawProfile(vendor, model)` to resolve the
  // SAW_PROFILES entry that supplies algorithm constraints + preferences.
  // All optional — legacy clients ship without them and continue to work
  // (no profile applied unless saw identity OR `sawProfileId` is supplied).
  vendor: x(
    h().optional(),
    {
      label: "fields.vendor",
      description: "Saw vendor (e.g. Biesse, Mayer, SCM)",
      group: "identity",
      order: 1
    }
  ),
  model: x(
    h().optional(),
    {
      label: "fields.model",
      description: "Saw model name (e.g. OptiPlanner, Pratika)",
      group: "identity",
      order: 2
    }
  ),
  softwareVersion: x(
    h().optional(),
    {
      label: "fields.softwareVersion",
      // Not purely informational any more: for a CADmatic saw the leading version
      // number selects the output dialect (5 → CAD5/PTNR, 3|4 → CAD4/PTN3; anything
      // else stays provenance and the emitter keeps its cad4 default). See
      // `parseCadmaticDialect` in saws/profiles.ts.
      description: 'Saw control software version (e.g. "CADmatic 5") — selects the CADmatic output dialect where recognised, otherwise provenance',
      group: "identity",
      order: 3
    }
  ),
  // ========== Stock Type ==========
  stockType: x(
    P([...vo]).default("sheet"),
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
  bladeWidth: x(
    Oe({ allowZero: !0, nullable: !1 }).default(0),
    {
      label: "fields.bladeWidth",
      placeholder: "fields.bladeWidth",
      group: "blade",
      order: 1,
      output: "number",
      info: "Enter blade width / kerf"
    }
  ),
  // A twin-blade saw runs a second, usually narrower, blade for the cross direction.
  // Absent means "the same blade", NOT zero — which is why this has no default; read it
  // through the `halfBladeWidthCross` computed, which falls back to `bladeWidth`.
  //
  // Was missing from this shape until 2026-08-27 while `SawProperties.bladeWidthCross`
  // and the PTX emitter's `KERF_XCT` both existed: Zod strips unknown keys, so a caller
  // declaring a cross kerf had it silently dropped and every twin-blade saw emitted its
  // rip kerf twice.
  bladeWidthCross: x(
    Oe({ allowZero: !0, nullable: !0 }).optional(),
    {
      label: "fields.bladeWidthCross",
      placeholder: "fields.bladeWidthCross",
      group: "blade",
      order: 2,
      output: "number",
      info: "Cross-cut blade width — set only on a twin-blade saw. Leave blank when one blade cuts both directions."
    }
  ),
  // ========== Cutting Configuration ==========
  stackHeight: x(
    ci,
    {
      label: "fields.stackHeight",
      group: "stacking",
      order: 1,
      step: 1,
      info: "If your saw supports cutting multiple stock simultaneously, set the maximum total allowed height."
    }
  ),
  cutType: Oo,
  cutPreference: Do,
  // ========== Optimisation algorithm (EXPERIMENTAL) ==========
  // The saw's chosen optimisation MODEL — the solver approach for jobs on this saw. One canonical id
  // (no aliases), resolved via OPTIMISATION_MODELS (server/optimiser/models.ts). Optional; absent →
  // the engine default 'rectangle-guillotine-fast' (the original SmartCut guillotine). The Max tiers
  // are EXPERIMENTAL and gated per family — 'rectangle-guillotine-max-1|2|3' engage only on a BEAM saw
  // with a recognised profile and within the part cap; 'irregular-nesting-max-1|2' engage only on a
  // 'nesting' saw. A tier that doesn't fit the job safely falls back to Fast, never errors.
  // A request-level `model` (top-level on the v3 request) overrides this per-job.
  algorithm: x(
    h().optional(),
    {
      label: "fields.algorithm",
      description: "Optimisation model for this saw. The Max tiers are EXPERIMENTAL + beam-only; otherwise falls back to the original SmartCut guillotine.",
      group: "optimization"
    }
  ),
  // ========== Per-format emitter settings ==========
  // The request-side twin of `SawProfile.emitterDefaults`, keyed by the same format
  // ids and merged OVER the profile's bag by `emitterDefaultsFor`. Open by format:
  // a new emitter adds a key here and to `SawEmitterDefaults`, and
  // `InputSaw.emitter-defaults.test.ts` fails if the two ever disagree.
  //
  // Exists because these are per-CUSTOMER facts that a shipped profile cannot know.
  // The MagiCut pair is the sharp case: `optParam` / `sawParam` are LIBRARY LOOKUPS,
  // and MagiCut does not reject an unrecognised name — it CREATES a parameter set
  // named after the job's batch code. A customer whose library differs from our
  // reference install was previously unable to say so through the API at all, so
  // every import grew their library by one `.prm` + one `.spm` and the job was cut
  // under MagiCut's defaults instead of their own settings.
  emitterDefaults: x(
    Cs,
    {
      label: "fields.emitterDefaults",
      description: "Per-format emitter settings for this saw. Overrides the saw profile's own defaults.",
      group: "export",
      order: 1
    }
  ),
  // ========== Guillotine Options ==========
  guillotineOptions: Lo,
  // ========== Efficiency Options ==========
  efficiencyOptions: $o,
  // ========== General Options ==========
  options: w({
    stockSelection: Co,
    minSpacing: Oe({ allowZero: !0, nullable: !1 }).default(0),
    stackingMode: Ao,
    minSpacingDimension: w({
      dimension: Oe({ allowZero: !0, nullable: !0 }).optional(),
      minSpacing: Oe({ allowZero: !0, nullable: !0 }).optional()
    }).optional()
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical"
  })
};
w(Fs);
const _i = w({
  ...J.shape,
  ...Fs
}), Yo = {
  // Include validation computed properties (isValid)
  ...oe,
  // Get valid cut types for current stock type
  validCutTypes: {
    compute: (t) => $e(t.stockType),
    metadata: {
      cache: !0,
      dependencies: ["stockType"],
      description: "Valid cut types for current stock type",
      returnType: "CutType[]"
    }
  },
  // Get valid cut preferences for current stock type and cut type
  validCutPreferences: {
    compute: (t) => Ne(t.stockType, t.cutType),
    metadata: {
      cache: !0,
      dependencies: ["stockType", "cutType"],
      description: "Valid cut preferences for current stock type and cut type",
      returnType: "CutPreference[]"
    }
  }
}, Ko = w({
  // Entity type added during serialization by toData() method
  // Used for automatic class recreation during deserialization
  __entityType: h().optional().describe("Entity type added during serialization by AutoSerializable.toData()"),
  // Reference marker for reference-based recreation
  // Used when objects reference each other
  __ref: h().optional().describe("Reference marker for object recreation")
}), Xo = w({
  // ========== Selection State (excluded from compression) ==========
  selected: xe.boolean({
    label: "fields.selected",
    description: "Whether item is selected for multi-edit"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  multiEdit: xe.boolean({
    label: "fields.multiEdit",
    description: "Whether this is the multi-edit item"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  readonly: xe.boolean({
    label: "fields.readonly",
    description: "Whether input is readonly"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Validation State (excluded from compression and serialization) ==========
  isNew: xe.boolean({
    label: "fields.isNew",
    description: "Whether this is a newly created item that should skip validation until first user interaction",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" })
}), Zo = w({
  l1: x(
    ne((t) => t ?? 0, u()).default(0),
    { label: "fields.l1", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  l2: x(
    ne((t) => t ?? 0, u()).default(0),
    { label: "fields.l2", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  w1: x(
    ne((t) => t ?? 0, u()).default(0),
    { label: "fields.w1", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  w2: x(
    ne((t) => t ?? 0, u()).default(0),
    { label: "fields.w2", group: "trim", allowZero: !0, min: 0, required: !1 }
  )
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 }), Jo = ne(
  (t) => {
    if (t == null)
      return { l1: 0, l2: 0, w1: 0, w2: 0 };
    if (typeof t == "object" && t !== null) {
      const e = t, i = (s) => {
        if (s == null) return 0;
        if (typeof s == "string") {
          const n = k({ v: s });
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
  Zo
), Qo = w({
  // ========== Identity ==========
  id: qi,
  index: u().int().min(0).optional(),
  // ========== Dimensions ==========
  // Input dimensions can be strings (for fractions) or numbers
  l: ot({
    label: "fields.l",
    placeholder: "fields.l"
  }),
  w: ot({
    label: "fields.w",
    placeholder: "fields.w"
  }),
  t: ot({
    label: "fields.t",
    placeholder: "fields.t"
  }),
  q: Bo(),
  // ========== Material Properties ==========
  // Input name with uppercase transform
  name: jo(),
  material: zo(),
  // ========== Cost ==========
  cost: Vo(),
  // ========== Discount ==========
  discount: Wo(),
  // ========== Trim Configuration ==========
  trim: Jo,
  // ========== Rotation (Runtime) ==========
  rot: Qt.default(0),
  // ========== Flags ==========
  preventAutoRotation: xe.boolean({
    label: "fields.preventAutoRotation",
    description: "Prevent automatic rotation during optimization",
    group: "options"
  }),
  offcut: xe.boolean({
    label: "fields.offcut",
    description: "Mark as offcut material",
    group: "options"
  }),
  processed: xe.boolean({
    label: "fields.processed",
    description: "Has been processed",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Notes ==========
  notes: Ho()
}), ht = w({
  ...Ko.shape,
  // System properties from AutoSerializable
  ...J.shape,
  ...Qo.shape,
  // Core business fields
  ...Xo.shape,
  // Input-specific UI fields
  // Override id with strict validation for input shapes/stock (allows blank)
  id: h().regex(/^(\d+\.\d+)?$/, 'ID must be blank or in format "1.0" (e.g., "1.0", "2.1")').default("").describe('Structured identifier for input shapes/stock in format 1.0 (e.g., "1.0") or blank')
}), pi = {
  // Include validation computed properties (isValid)
  ...oe,
  // Get the longer side dimension
  longSide: {
    compute: (t) => {
      const e = k({ v: t.l }) ?? 0, i = k({ v: t.w }) ?? 0;
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
      const e = k({ v: t.l }) ?? 0, i = k({ v: t.w }) ?? 0;
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
      const e = k({ v: t.l }) ?? 0, i = k({ v: t.w }) ?? 0;
      return e === i;
    },
    metadata: {
      cache: !1,
      dependencies: ["l", "w"],
      description: "Whether the rectangle is square (l === w)",
      returnType: "boolean"
    }
  }
}, At = ht.extend({
  // NOTE: parts deliberately have NO `grain` field. Grain is a property of the
  // SHEET, and a part's grain direction is an OUTPUT — derived from the stock it
  // was placed on and its final rotation (see applyPartGrain in
  // shared/post-calculation-transforms.ts). To constrain how a part may sit, use
  // `orientationLock`, which is resolved against the stock grain.
  // Add orientationLock with input-specific transform
  orientationLock: Go(),
  // ========== Shared Shape Properties ==========
  upDirection: x(
    ss,
    {
      label: "fields.upDirection",
      description: "Up direction indicator",
      group: "properties",
      order: 5,
      options: [
        { value: null, label: "fields.upDirection.none" },
        { value: "l", label: "fields.upDirection.length" },
        { value: "w", label: "fields.upDirection.width" }
      ]
    }
  ),
  stockLock: x(
    is,
    { label: "fields.stockLock" }
  ),
  // ========== Stock Matching ==========
  stockMatch: $n.nullable().optional(),
  // ========== Stock Reference ==========
  // Identifies which stock/material this shape was created from (for ecommerce material persistence)
  stock: w({
    db_id: h().optional(),
    code: h().optional(),
    material: h().optional(),
    thickness: u().optional()
  }).nullable().optional(),
  // ========== Custom Data ==========
  customData: x(
    ns,
    { label: "fields.customData", description: "Custom user-defined data" }
  ),
  // ========== Labels (saw label printer / barcode machine) ==========
  // Typed, format-aware fields consumed by post-processors that drive
  // label printers on the saw itself. Fields without a supporting format
  // for the chosen saw produce a warning, not a hard failure. See
  // `saws/label-fields.ts` for the field → format support map.
  labels: x(
    rs,
    { label: "fields.labels", description: "Saw label-printer fields (barcode1/barcode2/room/pallet/drawing/order/colour/productInfo/productNumber)" }
  ),
  // ========== Internal Code ==========
  code: Jt.optional(),
  // ========== Material reference (CLE materials feature) ==========
  // Client-side reference to the project materials list entry this part is associated
  // with. Stripped at the calc boundary (converters.ts); `material`/`t` are resolved from
  // the linked material and kept populated for the optimiser/stock-match/post-processors.
  // NB: no `description` here — `field()` would `.describe()` and drop `_metadata`.
  materialId: x(
    h().optional(),
    {
      label: "fields.materialId",
      group: "system",
      hidden: !0
    }
  ),
  // ========== Custom Display Color ==========
  // NOTE: avoid setting `description` here — the `field()` helper calls
  // `.describe()` when a description is present, which clones the schema
  // and drops the `_metadata` (so `type: 'color'` would never reach the
  // field generator and the input would render as plain text).
  color: x(
    h().nullable().optional(),
    {
      label: "fields.color",
      group: "properties",
      type: "color",
      w: "32px"
    }
  ),
  // ========== UI Extension (excluded from compression) ==========
  selectedMaterial: x(
    z().optional(),
    { label: "fields.selectedMaterial", description: "Selected material object" }
  ).behavior({ compress: "exclude" }),
  // ========== Machining ==========
  // Override default reference behavior to serialize full data
  machining: A("Machining", {
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
  extras: A("Extras", {
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
  fullStock: x(
    S().default(!1),
    {
      label: "fields.fullStock",
      description: "Purchase full stock sheet without cutting",
      group: "properties"
    }
  ),
  // ========== Nesting ==========
  // Polygon outline for irregular nesting shapes (from DXF import)
  outline: I(w({ x: u(), y: u() })).nullable().optional(),
  // Inner contour holes (closed vertex rings) for hollow parts (e.g. frames/rings).
  // Mirrors `outline`; threaded through to NestingShape.holes for the CNC cutting path.
  // The placement engine ignores holes today (parity; hole-aware packing is a later phase).
  holes: I(I(w({ x: u(), y: u() }))).nullable().optional()
}), ea = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...pi
  // `hasGrain` removed alongside the `grain` field — a part has no grain of its
  // own on input. Grain lives on the stock; the part's resulting direction is
  // derived after placement.
}, Et = w({
  ...ht.shape,
  ...Ji.shape,
  // ========== Stock-specific Properties ==========
  // Override l to allow 0 for infinite length rolls
  l: ot({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !0
  }),
  // Add grain field for stock
  grain: No(),
  // `preventGrainRotation` removed — see server/migrations/011_remove_prevent_grain_rotation.ts.
  // It never prevented a rotation; it only suppressed the grain relabel when a
  // portrait sheet was normalised to landscape. Grain is now always stated in
  // the normalised (l >= w) frame.
  // Stock-specific flags (infiniteLength is now in sharedStockPropertiesSchema from merge above)
  used: xe.boolean({
    label: "fields.used",
    description: "Whether stock has been used"
  }),
  // Display and filtering properties
  color: x(
    Ki,
    {
      label: "fields.color",
      description: 'Material color ({ hex: "#FF5733", name: "Red" } or legacy string)',
      group: "display",
      order: 1
    }
  ),
  weight: x(
    u().positive().optional(),
    {
      label: "fields.weight",
      description: "Weight in kg",
      group: "display",
      order: 2
    }
  ),
  imageUrl: x(
    _([h().url(), R("")]).optional(),
    {
      label: "fields.imageUrl",
      description: "Image URL for stock display",
      group: "display",
      order: 3
    }
  ),
  // Stock filter and categorization properties
  tags: x(
    I(h()).optional(),
    {
      label: "fields.tags",
      description: "Searchable tags for filtering",
      group: "display",
      order: 4
    }
  ),
  available: x(
    S().optional(),
    {
      label: "fields.available",
      description: "Whether stock is available for selection (defaults to true)",
      group: "display",
      order: 5
    }
  ),
  // Material-level flag inherited onto stock — when true, the checkout forces
  // `fullStock` on the part and locks dimensions to this stock's L/W.
  fullSizeOnly: x(
    S().optional(),
    {
      label: "fields.fullSizeOnly",
      description: "Disable cut-to-size — customer must purchase whole sheet",
      group: "options"
    }
  ),
  // Database ID (MongoDB ObjectId as string)
  db_id: x(
    h().optional(),
    {
      label: "fields.db_id",
      description: "MongoDB ObjectId for this document",
      group: "system"
    }
  ),
  // Material/product code from supplier catalogue
  code: x(
    h().optional(),
    {
      label: "fields.code",
      description: "Material or product code from supplier",
      group: "system"
    }
  ),
  // Client-side reference to the project materials list entry this stock is associated
  // with (CLE materials feature). The optimiser/post-processors never see it — it is
  // stripped at the calc boundary (see converters.ts) — but `material`/`t`/`grain` are
  // resolved from the linked material and kept populated for them. NB: no `description`
  // here on purpose — `field()` calls `.describe()` when a description is present, which
  // clones the schema and drops `_metadata` (so `group`/`hidden` would be lost).
  materialId: x(
    h().optional(),
    {
      label: "fields.materialId",
      group: "system",
      hidden: !0
    }
  ),
  // Per-stock preferred saw — survives through InputStock construction so
  // it can flow from the storefront /stock endpoint (set on stocks
  // directly OR on library entries via subscription override rules) all
  // the way to the calculate socket, where `resolveSawFromInputStock`
  // on the server promotes it onto inputSaw before optimisation runs.
  // Without this field on the schema, Zod parse strips it during
  // `createInputStockFromOption`, and the per-stock saw routing chain
  // silently breaks at the client.
  db_sawId: x(
    h().optional(),
    {
      label: "fields.db_sawId",
      description: "MongoDB ObjectId of the saw this stock should be cut on",
      group: "system"
    }
  ),
  // Resolved per-stock extras (dereferenced Extra objects with `name`,
  // `code`, `sourceCatalogueKey`, `pricing`, `groups`, ...) — the
  // storefront calculator's UI HINT for catalogue-picker detection.
  // `z.any()` per type because each catalogue / org ships subtly
  // different per-type extra shapes; consumers narrow at call sites
  // via the typed accessors in `ecommerce/src/utils/stock-extras.ts`.
  //
  // Why this exists alongside `extras` above: `extras` is the calc-API
  // contract (`Record<type, string[]>` — arrays of Extra IDs) consumed
  // by the optimisation engine. `resolvedExtras` is a separate
  // storefront-only stash, marked excluded from compression so the
  // calc worker / batch jobs / raw API consumers don't need to think
  // about it. Compatible with the legacy `customData.stockExtras`
  // stash — the accessors prefer this field when set and fall through
  // to customData otherwise (back-compat for in-flight cart state).
  resolvedExtras: x(
    w({
      banding: z().optional(),
      finish: z().optional(),
      planing: z().optional(),
      machining: z().optional()
    }).optional(),
    {
      label: "fields.resolvedExtras",
      description: "Per-stock resolved Extra objects (storefront UI hint, not consumed by the calc engine)",
      group: "system"
    }
  ).behavior({ compress: "exclude" }),
  // ========== Custom Data ==========
  customData: x(
    ns,
    { label: "fields.customData", description: "Custom user-defined data" }
  ),
  // Saw configuration (excluded from compression)
  saw: x(
    z().optional(),
    { label: "fields.saw", description: "Saw configuration data" }
  ).behavior({ compress: "exclude" }),
  // Available extras from material (for e-commerce checkout)
  // Contains arrays of extra IDs that are available for this stock item
  extras: x(
    w({
      banding: I(h()).optional(),
      finish: I(h()).optional(),
      planing: I(h()).optional(),
      machining: I(h()).optional()
    }).optional(),
    {
      label: "fields.extras",
      description: "Available extras for this stock (inherited from material)",
      group: "display"
    }
  )
}), ta = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...pi
  // InputStock doesn't define additional computed properties
}, ia = w({
  autoId: h().describe("Shape autoId"),
  x: u().default(0).describe("X position within group (0 = left edge, increases rightward)"),
  y: u().default(0).describe("Y position within group (0 = bottom edge, increases upward)")
}), sa = J.extend({
  // ========== Identification ==========
  id: h().optional().describe("Unique identifier"),
  // ========== Shape References ==========
  shapeIds: I(h()).default([]).describe("List of shape IDs in this group"),
  shapes: I(h()).default([]).transform((t) => t?.map(String) ?? []).describe("Shape identifiers"),
  // ========== Positions ==========
  positions: I(ia).default([]).describe("XY positions for each shape within the group"),
  // ========== Group Properties ==========
  q: u().int().min(1).default(1).describe("Quantity of groups"),
  duplicate: S().default(!1).describe("If a duplicate"),
  // ========== Material Properties (from Group) ==========
  name: h().optional().describe("Group name"),
  material: h().optional().describe("Material type"),
  grain: Je.describe("Grain direction"),
  // ========== Stock Matching (excluded during compression) ==========
  stockMatch: w({
    stockId: h().optional(),
    material: h().optional(),
    thickness: u().optional(),
    grain: Je.optional()
  }).optional().describe("Matching stock information").behavior({ compress: "exclude" }),
  // ========== Runtime Properties ==========
  shapeList: I(z()).optional().describe("Runtime shape list for validation").behavior({ compress: "exclude" })
}), na = {
  // Include validation computed properties (isValid)
  ...oe
  // InputUserGroup doesn't define additional computed properties
}, ra = w({
  part: u().int().min(0).describe("Index of the part in the parts array"),
  x: u().min(0).describe("X position within group (0 = left edge, increases rightward)"),
  y: u().min(0).describe("Y position within group (0 = bottom edge, increases upward)")
}), tc = w({
  positions: I(ra).min(2).describe("Part positions within the group. Each entry specifies a part index and its x,y coordinates."),
  q: u().int().min(1).describe("Quantity of groups")
}), oa = J.extend({
  // Collections of machining operations
  holes: Se("Hole").default([]).describe("Array of holes").behavior({
    serialize: "full",
    clone: "copy"
  }),
  hingeHoles: Se("HingeHole").default([]).describe("Array of hinge hole sets").behavior({
    serialize: "full",
    clone: "copy"
  }),
  corners: Se("Corner").default([]).describe("Array of corner operations").behavior({
    serialize: "full",
    clone: "copy"
  }),
  grooves: Se("Groove").default([]).describe("Array of groove operations").behavior({
    serialize: "full",
    clone: "copy"
  }),
  // Validation
  enabled: S().default(!0).describe("Whether machining is enabled")
}), aa = {
  // Inherit computed properties from validation base
  ...oe,
  // Check if any machining exists
  hasAnyMachining: {
    compute: (t) => t.holes && t.holes.length > 0 || t.hingeHoles && t.hingeHoles.length > 0 || t.corners && t.corners.length > 0 || t.grooves && t.grooves.length > 0,
    metadata: {
      cache: !1,
      dependencies: ["holes", "hingeHoles", "corners", "grooves"],
      returnType: "boolean"
    }
  },
  // Count total operations
  operationCount: {
    compute: (t) => (t.holes?.length || 0) + (t.hingeHoles?.length || 0) + (t.corners?.length || 0) + (t.grooves?.length || 0),
    metadata: {
      cache: !1,
      dependencies: ["holes", "hingeHoles", "corners", "grooves"],
      returnType: "number"
    }
  }
}, Ft = w({
  x: u(),
  y: u()
}), Vt = dt.extend({
  // ========== Polygon Outline ==========
  // Closed polygon vertices, origin-normalized (bounding box origin at 0,0)
  // First vertex should equal last vertex (closed polygon)
  outline: I(Ft).default([]).describe("Closed polygon outline vertices (origin-normalized)"),
  // Continuous rotation angle for nesting (radians, 0 to 2*PI)
  // The inherited rot (0|1) is not used for nesting shapes
  nestingRotation: u().min(0).max(Math.PI * 2).default(0).describe("Continuous rotation angle for nesting (radians)"),
  // Actual polygon area computed via shoelace formula
  // Different from inherited area which is the bounding box area (l * w)
  trueArea: u().min(0).default(0).describe("Actual polygon area (vs bounding box area)"),
  // Inner contour holes (for hollow shapes like frames)
  // Each hole is a closed polygon (first vertex = last vertex), wound CW
  // The main `outline` contains the slit-connected polygon for geometry ops;
  // `holes` stores the clean inner contours for stroke-correct rendering
  holes: I(I(Ft)).default([]).describe("Inner contour holes for rendering (CW wound)"),
  // Simplified outline used for NFP computation and placement (hull or DP-simplified).
  // When set, placement math (rotation pivot + normalisation) uses THIS polygon, while
  // rendering + cutting continue to use `outline` for full fidelity. The two representations
  // must agree on the transform reference frame, so client rendering also consults this.
  // Absent when the full outline was used directly (e.g. ≤24 vertices or hull wasn't smaller).
  placementOutline: I(Ft).nullable().optional().describe("Simplified polygon used for NFP/placement; transform reference for render")
}), Ms = {
  // Include all Shape computed properties
  ...ri,
  // Fill ratio: how much of the bounding box the polygon actually fills
  fillRatio: {
    compute: (t) => {
      const e = t.l * t.w;
      return e === 0 ? 0 : t.trueArea / e;
    },
    metadata: {
      cache: !0,
      dependencies: ["trueArea", "l", "w"],
      returnType: "number"
    }
  },
  // Whether this shape has a valid polygon outline
  hasOutline: {
    compute: (t) => t.outline && t.outline.length >= 3,
    metadata: {
      cache: !1,
      dependencies: ["outline"],
      returnType: "boolean"
    }
  }
};
Vt.describe(JSON.stringify({
  name: "NestingShape",
  description: "Irregular shape with polygon outline for nesting optimization",
  version: "1.0.0",
  extends: "Shape",
  computedProperties: Object.keys(Ms)
}));
const la = xt, ca = {
  // Inherit computed properties from Extra base
  ...ai,
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
}, Wt = J.extend({
  // Saw identity — survives the InputSaw → Saw conversion so the optimiser
  // can resolve a profile from the runtime saw. See findSawProfile().
  vendor: h().optional().describe("Saw vendor"),
  model: h().optional().describe("Saw model name"),
  softwareVersion: h().optional().describe("Saw control software version"),
  // Core properties from shared schema
  stockType: ii,
  stackHeight: ci.describe("Maximum stack height"),
  cutType: ui,
  cutPreference: di,
  // Blade width (numeric for runtime)
  bladeWidth: ko.describe("Blade width"),
  // Cross-cut blade width — twin-blade saws only. Absent = `bladeWidth` cuts both
  // directions, which is every single-blade saw, so this stays optional and undefined
  // rather than defaulting. Reached via `halfBladeWidthCross`.
  bladeWidthCross: Io.describe("Cross-cut blade width (twin-blade saws)"),
  // Per-format emitter settings, merged OVER the saw profile's by `emitterDefaultsFor`.
  // Declared on BOTH InputSaw and here, from one shared schema, because the emitters read
  // the runtime Saw — a field present only on the input is stripped by the conversion and
  // never reaches the bytes.
  emitterDefaults: Cs.describe("Per-format emitter settings; overrides the saw profile"),
  // Guillotine options
  guillotineOptions: Ds,
  // Efficiency options
  efficiencyOptions: As,
  // General options (nested stockSelection and stackingMode)
  options: w({
    stockSelection: fi,
    minSpacing: Es,
    stackingMode: hi,
    minSpacingDimension: To
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical",
    minSpacingDimension: {
      dimension: 0,
      minSpacing: 0
    }
  }).describe("General saw options")
}), ua = {
  // Include validation computed properties
  ...oe,
  // Blade width / 2 for convenience
  halfBladeWidth: {
    compute: (t) => t.bladeWidth / 2,
    metadata: {
      cache: !1,
      dependencies: ["bladeWidth"],
      returnType: "number"
    }
  },
  // Cross-cut blade width / 2. The fallback is the point of this computed: callers ask
  // for the cross blade and get the rip blade when the saw carries only one, so nothing
  // downstream has to remember the `?? bladeWidth` rule.
  halfBladeWidthCross: {
    compute: (t) => (t.bladeWidthCross ?? t.bladeWidth) / 2,
    metadata: {
      cache: !1,
      dependencies: ["bladeWidthCross", "bladeWidth"],
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
Wt.describe(JSON.stringify({
  name: "Saw",
  description: "Runtime saw configuration for optimization",
  version: "1.0.0",
  category: "configuration"
}));
const Ge = 1e-10, da = 10, fa = Number.MAX_SAFE_INTEGER, ha = 4294967295, q = (t) => typeof t == "number" && Number.isFinite(t), at = (t) => Array.isArray(t) && t.length > 0;
function Ye(t, e, i = Ge) {
  if (t === e) return 0;
  if (Number.isInteger(t) && Number.isInteger(e))
    return t > e ? 1 : -1;
  const s = t - e;
  return Math.abs(s) < i ? 0 : s;
}
const pa = {
  greaterThan: (t, e, i = Ge) => !q(t) || !q(e) ? !1 : Ye(t, e, i) > 0,
  greaterThanOrEqualTo: (t, e, i = Ge) => !q(t) || !q(e) ? !1 : Ye(t, e, i) >= 0,
  lessThan: (t, e, i = Ge) => !q(t) || !q(e) ? !1 : Ye(t, e, i) < 0,
  lessThanOrEqualTo: (t, e, i = Ge) => !q(t) || !q(e) ? !1 : Ye(t, e, i) <= 0,
  equalTo: (t, e, i = Ge) => !q(t) || !q(e) ? !1 : Ye(t, e, i) === 0
};
function ma(t) {
  return q(t) ? Number.isInteger(t) ? t : Number(t.toFixed(da)) : !1;
}
function ga(t) {
  if (!q(t) || t < 0 || t > fa)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (ha + 1) * t);
}
function ya(t, e) {
  if (!at(t))
    throw new Error("Invalid array parameter");
  if (!q(e) || e < 0 || e > t.length)
    throw new Error("Invalid size parameter");
  const i = t.slice(), s = t.length - e;
  for (let n = t.length - 1; n >= s; n--) {
    const o = Math.floor(Math.random() * (n + 1));
    [i[n], i[o]] = [i[o], i[n]];
  }
  return i.slice(s);
}
class st {
  static calculateMean(e) {
    if (!at(e))
      throw new Error("Invalid input array");
    return e.reduce((i, s) => i + s, 0) / e.length;
  }
  static calculateStandardDeviation(e, i = null) {
    if (!at(e))
      throw new Error("Invalid input array");
    const s = i ?? this.calculateMean(e), n = e.reduce((o, r) => {
      const a = r - s;
      return o + a * a;
    }, 0) / e.length;
    return Math.sqrt(n);
  }
  static calculateCoefficientOfVariation(e) {
    if (!at(e))
      throw new Error("Invalid input array");
    const i = this.calculateMean(e);
    if (i === 0)
      throw new Error("Mean is zero, coefficient of variation undefined");
    return this.calculateStandardDeviation(e, i) / i;
  }
}
const O = {
  ...pa,
  isNumber: q,
  round: ma,
  getRandom: ga,
  getRandomSample: ya,
  calculateStandardDeviation: st.calculateStandardDeviation.bind(st),
  calculateCoefficientOfVariation: st.calculateCoefficientOfVariation.bind(st)
};
function Li(t) {
  return t && typeof t == "object" && typeof t.toData == "function";
}
let Ri = 0, $i = Date.now();
const ba = 1e4;
function wa() {
  return Ri % ba === 0 && ($i = Date.now()), `${$i}-${(Ri++).toString(36)}`;
}
class fe {
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
  /**
   * Cache for partial schemas - avoids recomputing schema.partial() on every call
   * schema.partial() traverses all fields and creates new ZodOptional wrappers each time
   * Caching this gives O(1) lookups instead of O(fields) per call
   */
  static _partialSchemaCache = /* @__PURE__ */ new WeakMap();
  /**
   * Get a cached partial schema for the given schema
   * Creates and caches the partial schema on first call
   */
  static getCachedPartialSchema(e) {
    let i = fe._partialSchemaCache.get(e);
    return i || (i = e.partial(), fe._partialSchemaCache.set(e, i)), i;
  }
  // Private flag for compression mode (will be set as non-enumerable in constructor)
  _serializationMode;
  constructor(e) {
    this.autoId = e?.autoId || wa(), Object.defineProperty(this, "_serializationMode", {
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
      const i = qe(e.schema), s = e.schema;
      return s.shape && this.extractNestedBehaviors(s.shape, i, ""), e._fieldBehaviorCache = i, i;
    }
    return {};
  }
  /**
   * Recursively extract nested field behaviors from a schema shape
   * @private
   */
  extractNestedBehaviors(e, i, s) {
    for (const [n, o] of Object.entries(e))
      if (o && typeof o == "object" && "_def" in o) {
        let r = o;
        for (; r && r._def; ) {
          const l = r._def.typeName || r.constructor?.name;
          if (l === "ZodDefault" || l === "ZodOptional" || l === "ZodNullable") {
            if (r = r._def.innerType || r._def.type, !r) break;
          } else if (l === "ZodUnion" && r._def.options?.length > 0) {
            const c = r._def.options, f = s ? `${s}.${n}` : n;
            for (const d of c) {
              if (!d) continue;
              const y = Gt(d);
              if (y) {
                const g = f;
                i[g] || (i[g] = y);
                break;
              }
            }
            for (const d of c) {
              if (!d || !d._def) continue;
              const y = qe(d);
              for (const [g, v] of Object.entries(y)) {
                const D = s ? `${s}.${n}.${g}` : `${n}.${g}`;
                i[D] || (i[D] = v);
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
        const a = qe(r);
        for (const [l, c] of Object.entries(a)) {
          const f = s ? `${s}.${n}.${l}` : `${n}.${l}`;
          i[f] = c;
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
    const i = {}, s = this.getSerializationFields(), n = this.getFieldBehaviors(), o = e === "compressed" ? "compressed" : "full";
    if (s.length === 0) {
      const r = /* @__PURE__ */ new Set();
      Object.getOwnPropertyNames(this).forEach((a) => r.add(a));
      for (const a in this) r.add(a);
      for (const a of r) {
        if (a.startsWith("_")) continue;
        const l = this.constructor.serializationExcludedProperties;
        if (l && l.includes(a) || this.isGetterProperty(a)) continue;
        const c = this[a];
        if (typeof c == "function" || c === void 0) continue;
        const f = n[a];
        o === "compressed" && f?.compress === "exclude" || f?.serialize === "exclude" || (i[a] = this.serializeValue(c, f, o, a, n));
      }
    } else
      for (const r of s) {
        const a = this[r], l = n[r];
        o === "compressed" && l?.compress === "exclude" || l?.serialize === "exclude" || (i[r] = this.serializeValue(a, l, o, r, n));
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
      let a;
      r ? a = e : a = fe.getCachedPartialSchema(s).parse(e);
      for (const l in a) {
        if (!Object.prototype.hasOwnProperty.call(e, l))
          continue;
        const c = a[l];
        if (c !== void 0) {
          const f = Object.getOwnPropertyDescriptor(this, l) || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this), l);
          if (f && f.get && !f.set)
            continue;
          this[l] = c;
        }
      }
    } else
      for (const r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          const a = e[r];
          if (a !== void 0 && r in this) {
            const l = Object.getOwnPropertyDescriptor(this, r) || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this), r);
            if (l && l.get && !l.set)
              continue;
            this[r] = a;
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
        if (s instanceof Wi) {
          const n = s.issues.map((o) => new b({
            message: o.message,
            type: "error",
            field: o.path.length > 0 ? [o.path.map(String)] : void 0,
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
      const g = s.pop() || "0", v = parseInt(g, 10);
      isNaN(v) && s.push(g), n = String(e);
    } else {
      const g = s.pop() || "0", v = parseInt(g, 10);
      isNaN(v) ? (s.push(g), n = "1") : n = String(v + 1);
    }
    s.push(n);
    const o = s.join("."), a = `${this.autoId.includes(".") ? this.autoId.substring(0, this.autoId.indexOf(".")) : this.autoId}.${n}`, l = this.constructor, c = this.getDirectPropertyCopy(i), f = l.schema;
    let d = {};
    f && (d = qe(f));
    const y = l.defaults || (f ? f.parse({}) : {}) || {};
    for (const [g, v] of Object.entries(d))
      v.clone === "reset" && (g in y ? c[g] = y[g] : delete c[g]);
    return "id" in c && (c.id = o), c.autoId = a, c.duplicate = !0, c.skipValidation = !0, new l(c);
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
        let o = !1;
        const r = Object.getOwnPropertyDescriptor(this, n);
        if (r && r.get && !r.set)
          o = !0;
        else if (!r) {
          let l = Object.getPrototypeOf(this);
          for (; l && l !== Object.prototype; ) {
            const c = Object.getOwnPropertyDescriptor(l, n);
            if (c && c.get) {
              o = !0;
              break;
            }
            l = Object.getPrototypeOf(l);
          }
        }
        if (o) continue;
        const a = this[n];
        typeof a == "function" || a === void 0 || (i[n] = this.handleReferenceForCloning(a, n, e));
      }
    else
      for (const n of s) {
        const o = this[n];
        i[n] = this.handleReferenceForCloning(o, n, e);
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
    const o = this.constructor.schema;
    let r = null;
    if (o && (r = qe(o)[i] || null), r?.clone)
      switch (r.clone) {
        case "share":
          return e;
        // Keep exact same instance
        case "unique":
          return this.cloneValueAsNewInstance(e);
        case "reset":
          return e;
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
  serializeValue(e, i, s, n, o) {
    if (e == null)
      return e;
    if (Array.isArray(e))
      return e.map((r) => {
        if (Li(r)) {
          if (i?.serialize === "reference" || s === "compressed" && i?.compress === "reference") {
            const c = "autoId" in r && r.autoId, f = typeof r.getType == "function";
            if (c) {
              const d = f ? r.getType() : r.constructor.name;
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
    if (Li(e)) {
      if (i?.serialize === "reference" || s === "compressed" && i?.compress === "reference") {
        const l = "autoId" in e && e.autoId, c = typeof e.getType == "function";
        if (l) {
          const f = c ? e.getType() : e.constructor.name;
          return {
            __ref: !0,
            id: e?.id,
            autoId: e.autoId,
            __entityType: f
          };
        }
      }
      const a = s === "compressed" ? "compressed" : "full";
      return e.toData(a);
    }
    if (e && typeof e == "object" && e.constructor === Object) {
      const r = {}, a = o || this.getFieldBehaviors();
      for (const l in e)
        if (Object.prototype.hasOwnProperty.call(e, l)) {
          const c = n ? `${n}.${l}` : l, f = a[c];
          if (s === "compressed" && f?.compress === "exclude" || f?.serialize === "exclude")
            continue;
          r[l] = this.serializeValue(e[l], f, s, c, a);
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
    const n = Zt().get(i);
    if (n) {
      const { ...o } = e;
      try {
        return "fromData" in n && typeof n.fromData == "function" ? n.fromData(o) : new n(o);
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
      for (const [o, r] of Object.entries(e))
        n[o] = this.deserializeValue(r, void 0, s);
      return n;
    }
    return e;
  }
}
class M extends fe {
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
    M.recreateFunc = e;
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
    const s = this.extractValidationOptions(e), n = e._validated === !0, o = e.fastConstruct === !0, r = n || o || s.skipSchemaValidation || s.validationMode === "none" || s.validationMode === "business";
    let a;
    if (r)
      if (o) {
        let l = M._schemaDefaultsCache.get(i);
        if (l === void 0) {
          l = {};
          const f = i.shape || i._def?.shape?.();
          if (f)
            for (const d of Object.keys(f))
              try {
                const y = f[d].safeParse(void 0);
                y.success && y.data !== void 0 && (l[d] = y.data);
              } catch {
              }
          M._schemaDefaultsCache.set(i, l);
        }
        const c = {};
        for (const f in l) {
          const d = l[f];
          c[f] = Array.isArray(d) ? d.slice() : d !== null && typeof d == "object" && Object.getPrototypeOf(d) === Object.prototype ? { ...d } : d;
        }
        for (const f in e) {
          const d = e[f];
          d !== void 0 && (c[f] = d);
        }
        a = this.recreateNestedClasses(c, i);
      } else
        a = this.recreateNestedClasses(e, i);
    else if (s.enableStrictMode) {
      const l = i.safeParse(e);
      l.success ? a = l.data : a = this.filterInvalidFields(e, l.error, i);
    } else {
      const l = i.safeParse(e);
      if (l.success)
        a = l.data;
      else {
        const c = fe.getCachedPartialSchema(i).safeParse(e);
        c.success ? a = c.data : a = this.filterInvalidFields(e, c.error, i);
      }
    }
    if (i && a) {
      let l = M._schemaKeysCache.get(i);
      if (!l) {
        const c = i.shape || i._def?.shape;
        c && (l = Object.keys(c), M._schemaKeysCache.set(i, l));
      }
      if (l) {
        const c = {};
        for (const f of l)
          f in a && (c[f] = a[f]);
        a = c;
      }
    }
    Object.assign(this, a), this.applyComputedProperties(), Object.defineProperty(this, "_type", {
      value: this.getType(),
      writable: !0,
      enumerable: !1,
      // CRITICAL: Must be non-enumerable to prevent serialization
      configurable: !0
    }), Object.defineProperty(this, "_validated", {
      value: !r,
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
    ], o = { ...e }, r = /* @__PURE__ */ new Set();
    for (const l of i.issues)
      if (l.path.length > 0) {
        const c = l.path[0];
        n.includes(c) || r.add(c);
      }
    r.forEach((l) => {
      delete o[l];
    });
    const a = fe.getCachedPartialSchema(s).safeParse(o);
    return a.success ? a.data : o;
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
    let s = M._zRefFieldsCache.get(i);
    if (s === void 0) {
      s = null;
      const o = i.shape;
      for (const [r, a] of Object.entries(o)) {
        const l = this.extractClassNameFromSchema(a);
        l && (s || (s = /* @__PURE__ */ new Map()), s.set(r, l));
      }
      M._zRefFieldsCache.set(i, s);
    }
    if (!s) return e;
    let n = e;
    for (const [o, r] of s) {
      const a = e[o];
      a != null && (typeof a == "object" && typeof a.getType == "function" || (n === e && (n = { ...e }), n[o] = this.deserializeValueWithClassName(a, r)));
    }
    return n;
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
      const s = e.__entityType || i, o = Zt().get(s);
      if (o)
        try {
          return typeof o.fromData == "function" ? o.fromData(e) : new o(e);
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
        const r = s.stockList.find((a) => a.id === n || a.autoId === n);
        if (r) return r;
      }
      if (i === "Shape" && s.shapeList) {
        const r = s.shapeList.find((a) => a.id === n || a.autoId === n);
        if (r) return r;
      }
      if (i === "Group" && s.groupList) {
        const r = s.groupList.find((a) => a.id === n || a.autoId === n);
        if (r) return r;
      }
      const o = i.toLowerCase() + "List";
      if (s[o] && Array.isArray(s[o])) {
        const r = s[o].find((a) => a.id === n || a.autoId === n);
        if (r) return r;
      }
    }
    return e && typeof e == "object" ? (s && (e.id || e.autoId), M.recreateFunc ? M.recreateFunc(e, s, i) : { ...e, __ref: i }) : e;
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
   * Static cache for zRef field names per schema
   * Maps schema → Map<fieldName, className> for fields that need nested class recreation
   * null value means the cache has been built but no zRef fields exist
   */
  static _zRefFieldsCache = /* @__PURE__ */ new WeakMap();
  /**
   * Static cache for schema defaults per schema (schema.parse({}) computed once) — powers the
   * fastConstruct path so a skipped safeParse still applies the same defaults. [perf hot-path]
   */
  static _schemaDefaultsCache = /* @__PURE__ */ new WeakMap();
  /**
   * Apply computed properties as getters
   * Optimized: Defines getters on prototype once per class, not on every instance
   */
  applyComputedProperties() {
    const e = this.constructor;
    if (M._computedPropsInitialized.has(e)) return;
    const i = e.computedProperties;
    if (!i) {
      M._computedPropsInitialized.add(e);
      return;
    }
    const s = e.prototype;
    for (const [n, o] of Object.entries(i)) {
      if (!o || typeof o != "object") continue;
      const r = o;
      r.compute && (Object.prototype.hasOwnProperty.call(s, n) && Object.getOwnPropertyDescriptor(s, n)?.get || Object.defineProperty(s, n, {
        get() {
          return r.compute(this);
        },
        enumerable: !1,
        configurable: !0
      }));
    }
    M._computedPropsInitialized.add(e);
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
    let o;
    if (n)
      o = this.recreateNestedClasses(e, i);
    else {
      const r = fe.getCachedPartialSchema(i).safeParse(e);
      r.success ? o = r.data : o = this.filterInvalidFields(e, r.error, i);
    }
    for (const r in o)
      if (Object.prototype.hasOwnProperty.call(o, r)) {
        if (!Object.prototype.hasOwnProperty.call(e, r))
          continue;
        const a = Object.getOwnPropertyDescriptor(this, r) || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this), r);
        if (a && a.get && !a.set)
          continue;
        this[r] = o[r];
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
      if (i instanceof Wi)
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
      return e.map((s) => M.cleanEntityForAPI(s));
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
    for (const [n, o] of Object.entries(s)) {
      if (n.startsWith("_"))
        continue;
      if (n === "trim") {
        i.push(n);
        continue;
      }
      const r = this.unwrapSchema(o);
      if (r instanceof qs) {
        const a = r.options.some((c) => c instanceof Ys), l = r.options.some((c) => c instanceof Ks);
        a && l && i.push(n);
      }
    }
    return i;
  }
  /**
   * Unwrap schema to get the base type (handles ZodEffects, ZodOptional, etc.)
   */
  static unwrapSchema(e) {
    const i = e._def?.typeName;
    if (e instanceof Xs || e instanceof Zs)
      return this.unwrapSchema(e._def?.innerType);
    if (e instanceof Js)
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
class Be extends M {
  // Required: Define schema and computed properties for SchemaClass
  static schema = rn;
  static computedProperties = on;
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
    return p.Line;
  }
  /**
    * Validate line
    */
  validate() {
    const e = [];
    return (!O.isNumber(this.x1) || !O.isNumber(this.x2) || !O.isNumber(this.y1) || !O.isNumber(this.y2)) && e.push(new b({
      message: "Line coordinates must be valid numbers",
      type: "error"
    })), this.x1 === this.x2 && this.y1 === this.y2 && e.push(new b({
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
    const o = i.filter((r) => r.added);
    for (const r of o) {
      let a = !1, l = !1;
      if (this.dimension === "l" ? (a = O.greaterThan(this.x2, r.x) && O.lessThan(this.x1, r.x + r.l), l = O.greaterThan(this.y1 + n, r.y) && O.lessThan(this.y1 - n, r.y + r.w)) : this.dimension === "w" && (a = O.greaterThan(this.x1 + n, r.x) && O.lessThan(this.x1 - n, r.x + r.l), l = O.greaterThan(this.y2, r.y) && O.lessThan(this.y1, r.y + r.w)), a && l)
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
  static fromCoordinates(e, i, s, n, o, r) {
    return new Be({ x1: e, y1: i, x2: s, y2: n, origin: o, type: r });
  }
  get lineDimension() {
    return !O.isNumber(this.x1) || !O.isNumber(this.x2) || !O.isNumber(this.y1) || !O.isNumber(this.y2) ? null : this.x1 === this.x2 && this.y1 !== this.y2 ? "w" : this.y1 === this.y2 && this.x1 !== this.x2 ? "l" : null;
  }
  get lineDirection() {
    return !O.isNumber(this.x1) || !O.isNumber(this.x2) || !O.isNumber(this.y1) || !O.isNumber(this.y2) ? null : this.x1 < this.x2 ? "lr" : this.x1 > this.x2 ? "rl" : this.y1 < this.y2 ? "bt" : this.y1 > this.y2 ? "tb" : null;
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
const Sa = {
  tb: {
    bottomLeft: { top: "topRight", topLeft: "topLeft" },
    bottomRight: { top: "topLeft", topRight: "topRight" }
  },
  bt: {
    topLeft: { bottom: "bottomRight", bottomLeft: "bottomLeft" },
    topRight: { bottom: "bottomLeft", bottomRight: "bottomRight" }
  },
  lr: {
    topRight: { left: "bottomLeft", topLeft: "topLeft" },
    bottomRight: { left: "topLeft", bottomLeft: "bottomLeft" }
  },
  rl: {
    topLeft: { right: "bottomRight", topRight: "topRight" },
    bottomLeft: { right: "topRight", bottomRight: "bottomRight" }
  }
}, xa = {
  topLeft: {
    top: ["topRight"],
    default: ["topRight"]
  },
  bottomRight: {
    right: ["topRight"],
    default: ["topRight"]
  }
}, va = {
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
function ka(t, e, i = !1) {
  const s = /* @__PURE__ */ new Set();
  if (t.raycast) {
    const o = Sa[t.direction];
    return o && o[t.corner] && o[t.corner][t.grid] && s.add(o[t.corner][t.grid]), s;
  }
  if (e?.cutType !== "efficiency" && !i) {
    const o = xa[t.corner];
    return o && (t.grid ? o[t.grid] && o[t.grid].forEach((r) => s.add(r)) : o.default?.forEach((r) => s.add(r))), s;
  }
  const n = va[t.corner];
  return n && (t.grid ? n[t.grid] && n[t.grid].forEach((o) => s.add(o)) : n.default?.forEach((o) => s.add(o))), s;
}
class te extends M {
  // Required: Define schema and computed properties for SchemaClass
  static schema = hn;
  static computedProperties = pn;
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
    if (e !== null && typeof e == "object")
      super(e);
    else if (typeof i == "number") {
      const n = { x: e, y: i, z: s ?? 0, _validated: !0 };
      super(n);
    } else
      super({
        x: parseFloat(String(e)),
        y: parseFloat(String(i)),
        z: s !== void 0 ? parseFloat(String(s)) : 0
      });
    this.validate();
  }
  /**
   * Get entity type
   */
  getType() {
    return p.Point;
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
    return new te(e, i, s);
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
    const s = {
      x: e ?? this.x,
      y: i ?? this.y,
      z: this.z,
      _validated: !0
    };
    return this.a !== void 0 && (s.a = this.a), this.b !== void 0 && (s.b = this.b), this.stock && (s.stock = this.stock), this.direction && (s.direction = this.direction), this.type && (s.type = this.type), this.corner && (s.corner = this.corner), this.shapePosition && (s.shapePosition = this.shapePosition), this.grid && (s.grid = this.grid), this.raycast && (s.raycast = this.raycast), this.collision && (s.collision = this.collision), this.tooClose && (s.tooClose = this.tooClose), this.adjustedForMinSpacing && (s.adjustedForMinSpacing = this.adjustedForMinSpacing), new te(s);
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
  getAvailableShapePositions(e, i = !1) {
    return ka(this, e, i);
  }
}
function he(t) {
  return !(t === void 0 || t === null || t === "" || typeof t == "object" && !Object.values(t).length);
}
function Ht(t) {
  return t ? t === "l" ? "w" : "l" : null;
}
function lt(t, e = !1) {
  if (typeof t.l == "number" && typeof t.w == "number") {
    if (!e || !("trim" in t)) return { l: t.l, w: t.w };
    if (t.trimmed === !0) return { l: t.l, w: t.w };
    if ("hasTrim" in t && !t.hasTrim) return { l: t.l, w: t.w };
    const a = t.trim;
    return a ? {
      l: t.l - +(a.w1 || 0) - +(a.w2 || 0),
      w: t.w - +(a.l1 || 0) - +(a.l2 || 0)
    } : { l: t.l, w: t.w };
  }
  const i = typeof t.l == "string" ? k({ v: t.l }) : t.l, s = typeof t.w == "string" ? k({ v: t.w }) : t.w;
  if (!e || !("trim" in t))
    return { l: i, w: s };
  if (hs(t))
    return { l: i, w: s };
  if (fs(t) && !t.hasTrim)
    return { l: i, w: s };
  const n = t.trim, o = k({ v: n.w1 ?? 0 }) + k({ v: n.w2 ?? 0 }), r = k({ v: n.l1 ?? 0 }) + k({ v: n.l2 ?? 0 });
  return {
    l: i - (typeof o == "string" ? k({ v: o }) : o),
    w: s - (typeof r == "string" ? k({ v: r }) : r)
  };
}
function Ia(t, e) {
  if ("trim" in t && !hs(t)) {
    const i = t.trim;
    e.l = e.l - (k({ v: i.w1 ?? 0 }) + k({ v: i.w2 ?? 0 })), e.w = e.w - (k({ v: i.l1 ?? 0 }) + k({ v: i.l2 ?? 0 }));
  }
  return e;
}
function _e(t, e, i = !1) {
  if (typeof t.l == "number" && typeof t.w == "number") {
    let o = t.l, r = t.w;
    const a = ("rot" in t ? t.rot : 0) ?? 0;
    if (i && "trim" in t && !t.trimmed) {
      const l = t.trim;
      l && (o -= +(l.w1 || 0) + +(l.w2 || 0), r -= +(l.l1 || 0) + +(l.l2 || 0));
    }
    return a === e ? { l: o, w: r } : { l: r, w: o };
  }
  let s = {
    l: t.l,
    w: t.w
  };
  (oi(t) || Y(t) || Ue(t)) && (s = {
    l: k({ v: t.l }),
    w: k({ v: t.w })
  });
  const n = ("rot" in t ? t.rot : 0) ?? 0;
  return i && (s = Ia(t, s)), n === e || ([s.l, s.w] = [s.w, s.l]), s;
}
function _s(t) {
  if (!("l" in t) || !("w" in t)) throw new Error("rotatable item must have l & w properties");
}
function Pa(t) {
  Ie(t) || (_s(t), [t.l, t.w] = [t.w, t.l]);
}
function Ni(t, e) {
  return O.lessThanOrEqualTo(t, e);
}
function Le(t, e) {
  return Ni(t.l, e.l) && Ni(t.w, e.w);
}
function vt(t, e, i = null, s) {
  if (!e || !t)
    throw new Error("Container and shape are required");
  const n = s ? s.allowExactFit : "allowExactFitShapes" in e && e.allowExactFitShapes === !0, o = s ? s.withTrim : lt(e, !0), r = s ? s.withoutTrim : n ? lt(e, !1) : o, a = lt(t, !0);
  let l = o;
  if (n && (O.equalTo(a.l, r.l) && O.equalTo(a.w, r.w) || O.equalTo(a.l, r.w) && O.equalTo(a.w, r.l)) && (l = r), a.l * a.w > l.l * l.w)
    return !1;
  const c = Ls(t, e);
  if (t.orientationLock || i !== null) {
    const y = i ?? (c === "w" ? 1 : 0), g = _e(t, y, !0);
    if (n) {
      const v = _e(t, y, !1);
      if (O.equalTo(v.l, r.l) && O.equalTo(v.w, r.w))
        return Le(v, l);
    }
    return Le(g, l);
  }
  const f = _e(t, 0, !0);
  if (n) {
    const y = _e(t, 0, !1);
    if (O.equalTo(y.l, r.l) && O.equalTo(y.w, r.w) && Le(y, l)) return !0;
  }
  if (Le(f, l)) return !0;
  const d = _e(t, 1, !0);
  if (n) {
    const y = _e(t, 1, !1);
    if (O.equalTo(y.l, r.l) && O.equalTo(y.w, r.w) && Le(y, l)) return !0;
  }
  return Le(d, l);
}
function Ta(t) {
  if ("orientationLock" in t)
    return t.orientationLock;
  let e = null;
  return (Ie(t) || Ue(t) || K(t) || Y(t)) && (e = t.orientationLock), e;
}
function Ls(t, e) {
  const i = Ta(t);
  if (!he(i)) return null;
  if (!e || Ie(t)) return i;
  if (mi(t)) return null;
  if ("getStock" in e) {
    const s = e.getStock;
    if (s && he(s.grain))
      return i === s.grain ? "l" : "w";
  }
  return i;
}
function Ut(t, e = null, i = null) {
  if (!he(e))
    throw new Error("no rotation provided to canRotate");
  e === !0 && (e = 1), e === !1 && (e = 0);
  const s = "rot" in t ? t.rot : 0;
  if (t.preventAutoRotation && e !== s || !Ie(t) && mi(t) && e !== 0 || i && !vt(t, i, e))
    return !1;
  const n = Ls(t, i);
  return !(n === "l" && e === 1 || n === "w" && e === 0);
}
function Oa(t, e = null, i = null) {
  const s = "rot" in t ? t.rot : 0;
  return e === null && (e = s === 0 ? 1 : 0), !Ie(t) && mi(t) ? !0 : Ut(t, e, i) ? (s === e || Pa(t), !0) : !1;
}
function We(t, e = null, i = null) {
  return e ? e = 1 : e = 0, i && e && !vt(t, i, e) ? !1 : Oa(t, e, i);
}
function mi(t) {
  _s(t);
  const e = lt(t);
  return O.equalTo(e.l, e.w);
}
class kt extends M {
  // Zod schema for validation and serialization
  static schema = ei;
  static computedProperties = ti;
  constructor(e = {}) {
    super(e);
    let i = !1;
    re(this) && (i = this.infiniteLength), !e?.preventAutoRotation && !i && (this.orientationLock ? (this.orientationLock === "l" && We(this, 0), this.orientationLock === "w" && We(this, 1)) : this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && (this.grain = Ht(this.grain)))), this.calculateDimensions(), e.skipValidation || e.skipBusinessValidation || e.validationMode === "none" || e.validationMode === "schema" || this.validate();
  }
  /**
   * Calculate derived dimensions (area, longSide, shortSide, parentId)
   * Called automatically in constructor and after dimension changes
   */
  calculateDimensions() {
    this.area = this.l * this.w, this.longSide = Math.max(this.l, this.w), this.shortSide = Math.min(this.l, this.w), this.parentId = vn(this.id);
  }
  /**
   * Get entity type
   */
  getType() {
    return p.Rectangle;
  }
  /**
   * Validate business rules for the rectangle
   * This is separate from schema validation which happens in the constructor
   * Override this method in subclasses for domain-specific validation
   */
  validate() {
    if (this.issues = [], this.warnings = [], (this.l <= 0 || this.w <= 0) && this.issues.push(new b({
      message: "Rectangle dimensions must be positive",
      type: "error",
      field: [["l"], ["w"]],
      item: this
    })), this.hasTrim) {
      const e = {
        x: (this.trim.w1 || 0) + (this.trim.w2 || 0),
        y: (this.trim.l1 || 0) + (this.trim.l2 || 0)
      };
      e.x >= this.l && this.warnings.push(new b({
        message: "Trim values exceed length",
        type: "warning",
        field: [["trim"]],
        item: this
      })), e.y >= this.w && this.warnings.push(new b({
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
    if (!this.hasTrim || this.trimmed) return;
    const e = this.l - this.trim.w1 - this.trim.w2, i = this.w - this.trim.l1 - this.trim.l2;
    if (e <= 0 || i <= 0) {
      this.q = 0, this.issues.push(new b({
        message: "Trim values exceed part dimensions",
        type: "error",
        field: [["trim"]],
        item: this
      }));
      return;
    }
    this.l = e, this.w = i, this.trimmed = !0;
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
        return new Be({
          x1: i,
          x2: i + this.l,
          y1: s,
          y2: s,
          type: "bottom",
          validationMode: "none"
          // parentId: this.id
        });
      case "right":
        return new Be({
          x1: i + this.l,
          x2: i + this.l,
          y1: s,
          y2: s + this.w,
          type: "right",
          validationMode: "none"
          // parentId: this.id
        });
      case "top":
        return new Be({
          x1: i,
          x2: i + this.l,
          y1: s + this.w,
          y2: s + this.w,
          type: "top",
          validationMode: "none"
          // parentId: this.id
        });
      case "left":
        return new Be({
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
      bottomLeft: new te(this.x, this.y),
      topLeft: new te(this.x, this.y + this.w),
      topRight: new te(this.x + this.l, this.y + this.w),
      bottomRight: new te(this.x + this.l, this.y)
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
    const s = new kt({
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
class gi extends kt {
  // Zod schema for validation and serialization
  static schema = si;
  static computedProperties = ni;
  constructor(e = {}) {
    super(e), e.skipValidation || this.validateContainer(e);
  }
  // applyComputedProperties removed - handled by SchemaClass base
  // Container.computedProperties includes Rectangle.computedProperties via spread
  /**
    * Get entity type
    */
  getType() {
    return p.Container;
  }
  /**
    * Validate container-specific properties
    */
  validateContainer(e) {
    const i = ["sheet", "linear", "roll", null, void 0, ""], s = this?.stockType;
    if (!i.includes(s)) {
      const n = new b({
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
    const i = fe.getCachedPartialSchema(gi.schema).parse(e);
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
    return re(this) ? this : ds(this) ? this.stock : Ie(this) ? this.stock : null;
  }
}
class ge extends M {
  // Required: Define schema and computed properties
  static schema = Qi;
  static computedProperties = On;
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
    return p.GuillotineState;
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
class It extends M {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Or;
  static computedProperties = Dr;
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
    i.x1 !== i.x2 && i.y1 !== i.y2 || (i.x2 < i.x1 && ([i.x1, i.x2] = [i.x2, i.x1]), i.y2 < i.y1 && ([i.y1, i.y2] = [i.y2, i.y1])), super(i), this.dimension || (this.dimension = this.lineDimension);
  }
  /**
    * Get entity type
    */
  getType() {
    return p.Cut;
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
  static fromCoordinates(e, i, s, n, o, r) {
    return new It({ x1: e, y1: i, x2: s, y2: n, position: r, stock: o });
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
function qt(t, e, i) {
  const s = Ii("FS_TRACE");
  s && (s === "1" || (e ?? "").includes(s)) && (console.error(`[FS-TS] ${t} ${e} ${i}`), Ii("FS_TRACE_STACK") === t && console.error(new Error().stack?.split(`
`).slice(2, 9).join(`
`)));
}
class yi extends kt {
  // Zod schema for validation and serialization
  static schema = Qe;
  static computedProperties = et;
  constructor(e = {}) {
    if (super(e), !this.guillotineState)
      this.guillotineState = new ge();
    else if (!(this.guillotineState instanceof ge)) {
      const i = typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new ge(i);
    }
    (!this.firstShape || typeof this.firstShape != "object") && (this.firstShape = { sampleRotations: [], isFirstShape: !1, rotationPinned: !1 }), (!this.priority || typeof this.priority != "object") && (this.priority = {}), K(this) && (!this.group || typeof this.group != "object") && (this.group = {
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
    if (!this.guillotineState || !(this.guillotineState instanceof ge)) {
      const e = this.guillotineState && typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new ge(e);
    }
  }
  /**
   * Override update to ensure guillotineState is properly handled
   */
  update(e) {
    const i = this.guillotineState instanceof ge ? this.guillotineState : null;
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
    return p.Placeable;
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
    if (this.added = !1, this.stock = null, this.placementOrder = void 0, this.x = 0, this.y = 0, e || (this.score = null, this.bestScore = null), this.firstShape.isFirstShape = !1, n || (this.firstShape.sampleRotations = [], this.firstShape.rotationPinned = !1), qt("reset", this.autoId, n ? "fs=false keepFSR" : "fs=false rots=[]"), this.patternMatch = !1, this.fitsStock = null, this.guillotineState instanceof ge)
      if (i) {
        const o = this.guillotineState.stripShapeBatches;
        this.guillotineState.reset(), o && (this.guillotineState.stripShapeBatches = o);
      } else
        this.guillotineState.reset();
    else
      this.guillotineState = new ge();
    if (K(this) && (s || "group" in this && this.group && (this.group.placementOrder = void 0, this.group.inGroup = !1, this.group.inUserGroup = !1, this.group.reference = null, this.group.addedAsGroup = null)), Ie(this) && "shapes" in this && Array.isArray(this.shapes)) {
      const o = Ue(this) ? { keepScores: e, keepGuillotineBatchData: !0, keepGroupData: !0 } : void 0;
      this.shapes.forEach((r) => {
        "reset" in r && typeof r.reset == "function" && r.reset(o);
      });
    }
  }
  /**
   * Add shape to stock (placeholder for optimization logic)
   */
  addToStock(e) {
    this.stock = e, this.added = !0, e.used = !0;
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.added = !1, K(this) && (this.group.addedAsGroup = null, this.firstShape.isFirstShape = !1, qt("rmstock", this.autoId, "fs=false")), Ie(this) && this.shapes.forEach((e) => {
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
    return !i || Zn(i) || !i.stripShapeBatches?.groups || !(e in i.stripShapeBatches.groups) ? !1 : i.stripShapeBatches.groups[e];
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
      group: K(e) ? e.group.reference : null,
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
    We(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
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
  willItFit(e, i = null, s) {
    return re(e) && typeof this.fitsStock?.[e.parentId] < "u" ? this.fitsStock?.[e.parentId]?.[i ?? "any"] === !0 : vt(this, e, i, s);
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
      const o = e.options?.minSpacingDimension?.dimension;
      if (this.l <= o || this.w <= o) {
        const r = e.options?.minSpacingDimension?.minSpacing || n;
        n = Math.max(s, r);
      }
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
    const s = new te(this.x + this.l, this.y);
    s.corner = "bottomRight";
    const n = new te(this.x, this.y + this.w);
    if (n.corner = "topLeft", e?.cutType !== "efficiency" && !i)
      return [n, s];
    const o = new te(this.x, this.y);
    o.corner = "bottomLeft";
    const r = new te(this.x + this.l, this.y + this.w);
    return r.corner = "topRight", [o, n, r, s];
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
    const { w: i, l: s } = this, { w: n, l: o } = e;
    return i === n && s === o;
  }
  isIdentical(e, i = !1) {
    if (this.constructor !== e.constructor || this.t !== e.t || this.orientationLock !== e.orientationLock || this.material !== e.material)
      return !1;
    const { w: s, l: n } = this, { w: o, l: r } = e, a = s === o && n === r || s === r && n === o;
    if (this.getType() === p.Shape && this.identicalTo?.length && (a && this.parentId === e.parentId || a && this.identicalTo.includes(e.parentId)))
      return !0;
    if (this.getType() !== p.Group) {
      if (a && e.parentId === this.parentId) return !0;
      if (this.getType() === p.Shape && i && this.parentId !== e.parentId) return !1;
    } else if (e.autoId === this.autoId) return !0;
    if (!a) return !1;
    const l = this.trim, c = e.trim;
    return !l || !c ? l === c : l.l1 === c.l1 && l.l2 === c.l2 && l.w1 === c.w1 && l.w2 === c.w2;
  }
  /**
   * Get perimeter cut vectors (for export)
   */
  getPerimeterCutVectors(e = null) {
    return e === null && (e = re(this.stock) ? this.stock.bladeWidth / 2 : 0), [
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
    return this.getPerimeterCutVectors().forEach((n) => i.push(new It({
      stock: re(this.stock) ? this.stock : e,
      x1: n.x1,
      x2: n.x2,
      y1: n.y1,
      y2: n.y2,
      position: n.type
    }))), i = i.filter((n) => n.isInsideStock), i;
  }
}
let nt = null, Mt = !1;
function Da() {
  if (Mt)
    return nt;
  try {
    nt = { runTests: !1, throwErrorsOnFailedTests: !1 }, Mt = !0;
  } catch {
    nt = { runTests: !1, throwErrorsOnFailedTests: !1 }, Mt = !0;
  }
  return nt;
}
const Gi = V("tests");
V("timers");
let Ca;
const ct = new Proxy(
  function() {
    return ct;
  },
  { get: () => ct, apply: () => ct }
);
function ue(t, e) {
  return ct;
}
let _t;
function Aa() {
  return _t === void 0 && (_t = Ce()), _t;
}
function Ke(t = [], e = null) {
  if (!t?.length) return;
  const i = Da(), s = i?.testCollector || Ca;
  if (!!(i && i.runTests && (Aa() || s)))
    for (const o of t) {
      if (!o || typeof o != "function") {
        console.error("Invalid test function provided:", o);
        continue;
      }
      const r = Date.now();
      let a = !1, l;
      try {
        o(), a = !0;
      } catch (c) {
        if (a = !1, l = c instanceof Error ? c.message : String(c), e ? Gi(e, l) : Gi(l), s && s.addResult({
          passed: !1,
          error: l,
          issueMessage: e || void 0,
          timestamp: r
        }), i && i.throwErrorsOnFailedTests) throw c;
      }
      a && s && s.addResult({
        passed: !0,
        issueMessage: e || void 0,
        timestamp: r
      });
    }
}
function Ea(t) {
  return t === "horizontal" ? "x" : t === "vertical" ? "y" : null;
}
function Bi(t) {
  return t === "horizontal" ? "l" : t === "vertical" ? "w" : null;
}
class it extends yi {
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
  static schema = dt;
  static computedProperties = ri;
  static defaults = dt.parse({});
  constructor(e = {}) {
    super(e);
  }
  /**
    * Get entity type
    */
  getType() {
    return p.Shape;
  }
  /**
    * Create shape with live objects
    */
  static create(e) {
    const i = new it(e.data);
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
    const e = this.group;
    e.inGroup = !1, e.reference = null, e.placementOrder = void 0;
  }
  /**
   * Check if shape is identical to another
   * @param rectangle - The placeable to compare against
   * @param matchparentId - Whether to match parent IDs (optional)
   */
  isIdentical(e, i = !1) {
    const s = e;
    return s.identicalTo && Array.isArray(s.identicalTo) ? (this.t ?? null) !== (s.t ?? null) || (this.material || "") !== (s.material || "") || (this.orientationLock || "") !== (s.orientationLock || "") || !(this.l === s.l && this.w === s.w || this.l === s.w && this.w === s.l) ? !1 : this.identicalTo.includes(s.parentId) || s.identicalTo.includes(this.parentId) ? !0 : this.l === s.l && this.w === s.w : super.isIdentical(e, i);
  }
  /**
   * Apply best score position
   */
  setPositionToBestScore() {
    We(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
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
class bi extends yi {
  // Required: Define schema and computed properties for SchemaClass
  static schema = En;
  static computedProperties = Fn;
  constructor(e = {}) {
    const i = { ...e };
    e.skipValidation === void 0 && (i.skipValidation = !0), i.fastConstruct === void 0 && (i.fastConstruct = !0), super(i), this.initGroup(i);
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
    !e.groupLength || !e.groupWidth ? this.shapes && this.shapes.length > 0 && this.updatePositions() : this.type === "user" && this.userPositions?.length ? (this.l = e.l ?? 0, this.w = e.w ?? 0) : this.direction && (this.direction === "horizontal" ? (this.l = this.groupLength, this.w = this.groupWidth) : (this.l = this.groupWidth, this.w = this.groupLength)), this.w > this.l ? this.orientationLock = "w" : this.orientationLock = "l";
  }
  /**
    * Get entity type
    */
  getType() {
    return this.type === "user" ? p.UserGroup : this.type === "strip" ? p.StripGroup : this.type === "firstShape" ? p.FirstShapeGroup : p.Group;
  }
  /**
    * Initialize shapes array with optional context for reference resolution
    */
  initShapes(e, i) {
    const s = /* @__PURE__ */ new Set();
    return e.map((n) => {
      if (!K(n) && !er(n))
        throw console.log(n), new Error("[GROUP] attempted to init a group with an item other than a shape");
      if (K(n))
        return this.linkShapeToGroup(n), n;
      if (i && i.shapeList && n) {
        const r = i.shapeList.find((a) => a.autoId === n.autoId && a.id === n.id && !s.has(a)) ?? i.shapeList.find((a) => a.autoId === n.autoId && !s.has(a));
        if (r)
          return s.add(r), this.linkShapeToGroup(r), r;
      }
      const o = i ? { ...n, __context: i } : n;
      return new it(o);
    });
  }
  /**
   * Bind a child shape's group metadata to this group. The flag convention
   * (asserted by placeMyShapes' runtime test) is: user-group children carry
   * `inUserGroup` — `inGroup` is reserved for algorithm-generated groups.
   * Stamping `inGroup` on user-group children makes placeBestShapeOrGroup's
   * already-placed filter reject the group forever.
   */
  linkShapeToGroup(e) {
    e.group.reference = this, this.type === "user" ? (e.group.inUserGroup = !0, e.group.inGroup = !1) : e.group.inGroup = !0;
  }
  /**
    * Add a shape to the group
    */
  addShape(e, i) {
    this.shapes.push(e), this.linkShapeToGroup(e), i && this.positions.push(i), this.updatePositions();
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
    const i = { ...e.data, shapes: e.shapes }, s = new bi(i);
    return e.container && (s.container = e.container), s;
  }
  /**
    * Clone the group with different shapes
    * @param shapes Array of shapes to use for the new group (maintains references, doesn't clone)
    */
  cloneWithNewShapes(e = []) {
    const i = this.shapes, s = this.container, n = this.stock;
    this.shapes = [], this.container = null, this.stock = null;
    const o = this.clone();
    return this.shapes = i, this.container = s, this.stock = n, o.container = s, o.shapes = e, o.skipValidation = !0, o.positions = [], o.container && o.updatePositions(), o;
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
   * Restore a member shape to the rotation recorded in this group's positions.
   *
   * This is LAYOUT RESTORATION, not a rotation decision — the recorded layout is
   * the group's single source of truth and its legality (fit, member orientation)
   * was settled when the layout was authored or formed. Routing this through
   * setRotation() re-derives rotation legality against the placement stock, and
   * on grained stock the member's own orientationLock grain-converts to a
   * requirement that can contradict the recorded layout — rejecting even a
   * no-op restore (rot 1 -> 1). Restore the geometry directly instead.
   */
  restoreShapeRotation(e, i) {
    K(e) && e.rot !== i && e.l !== e.w && (Ke([
      () => ue(e.rot, `group ${this.id} member ${e.id} arrived at placement rotated (rot ${e.rot}, recorded ${i}) — grouped shapes must never be re-rotated after formation`).toBe(i)
    ]), [e.l, e.w] = [e.w, e.l]);
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
    if (!this.shapes || this.shapes.length === 0) return;
    if (this.x === null || this.x === void 0 || this.y === null || this.y === void 0)
      throw new Error(`Group ${this.id} cannot place shapes: group position is not set (x=${this.x}, y=${this.y})`);
    if (this.positions && this.positions.length > 0) {
      const s = /* @__PURE__ */ new Set();
      for (const n of this.positions) {
        const o = this.shapes.find((r) => r.autoId === n.autoId && !s.has(r));
        o && (s.add(o), this.restoreShapeRotation(o, n.rot));
      }
    }
    if (this.updatePositions(), !this.positions || this.positions.length === 0)
      throw new Error(`Group ${this.id} cannot place shapes: positions array could not be initialized`);
    const i = /* @__PURE__ */ new Set();
    for (let s = 0; s < this.shapes.length; s++) {
      const n = this.shapes[s];
      if (!n) continue;
      const o = this.positions.find((a) => a.autoId === n.autoId && !i.has(a));
      if (o && i.add(o), !o) {
        const a = this.shapes.map((c) => c.autoId).join(", "), l = this.positions.map((c) => c.autoId).join(", ");
        throw new Error(`Position not found for shape ${n.autoId} in group ${this.id}. Shapes: [${a}]. Positions: [${l}]`);
      }
      n.x = this.x + o.x, n.y = this.y + o.y, this.restoreShapeRotation(n, o.rot), s === 0 && this.x === 0 && this.y === 0 && (n.firstShape.isFirstShape = !0, qt("groupfs", n.autoId, "fs=true")), n.group.addedAsGroup = this, Ke([
        () => ue(this.type === "position" ? n.group.inGroup : !n.group.inGroup).toBe(!0)
      ], `placeMyShapes: Shape ${n.id} inGroup flag should match group type (${this.type})`), Ke([
        () => ue(n.group.addedAsGroup).toBe(this),
        () => ue(typeof n.group.addedAsGroup).not.toBe("string")
      ], `placeMyShapes: Shape ${n.id} addedAsGroup should be Group reference`), n.score = this.score;
      const r = n.guillotineState?.stripShapeBatches;
      if (this.guillotineState) {
        const a = this.guillotineState.constructor, l = this.guillotineState.toData();
        n.guillotineState = new a(l), r && (n.guillotineState.stripShapeBatches = r);
      }
      n.bestScore = this.bestScore, typeof this.placementOrder == "number" && (n.group.placementOrder = s, n.placementOrder = this.placementOrder), n.addToStock(e);
    }
    if (this.type === "position" && this.container && "shapes" in this.container) {
      const s = this.container;
      for (const n of this.shapes)
        s.shapes.some((o) => o.autoId === n.autoId) || s.shapes.push(n);
    }
  }
  /**
   * Update group dimensions for a specific container
   * Used for user groups when being placed on different containers with different blade widths
   * This recalculates groupLength/groupWidth based on the container's saw spacing
   */
  updateShapeSpacing(e) {
    if (this.container = e, this.updatePositions(), this.w > this.l ? this.orientationLock = "w" : this.orientationLock = "l", this.type === "user" && this.userPositions?.length)
      this.calculateEfficiency();
    else if (this.container && this.direction) {
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
    if (this.type === "user" && this.userPositions?.length) {
      this.updateUserGroupPositions();
      return;
    }
    const e = /* @__PURE__ */ new Map();
    if (this.positions && this.positions.length > 0) {
      for (const l of this.positions)
        e.set(l.autoId, l.rot);
      for (const [l, c] of e) {
        const f = this.shapes.find((d) => d.autoId === l);
        f && f.rot !== c && We(f, c, this.container);
      }
    }
    this.positions = [], this.type !== "user" && this.sortShapes();
    let i = 0;
    const s = Ea(this.direction), n = Bi(this.direction);
    let o = 0;
    for (const l of this.shapes) {
      if (!l) continue;
      const c = o === this.shapes.length - 1 ? 0 : l.getMinSpacing(this.container.saw), f = e.get(l.autoId) ?? l.rot.valueOf();
      let d;
      f !== l.rot ? d = n === "l" ? l.w : l.l : d = l[n];
      const y = {
        autoId: l.autoId,
        x: 0,
        y: 0,
        rot: f
      };
      s === "x" ? y.x = i : y.y = i, this.positions.push(y), l.group.inGroup = !0, i += o === this.shapes.length - 1 ? d : d + c, o++;
    }
    this.groupLength = i;
    const r = Ht(n), a = this.shapes.reduce(
      (l, c) => {
        const f = e.get(c.autoId);
        let d;
        return f !== void 0 && f !== c.rot ? d = r === "l" ? c.w : c.l : d = c[r], d > l ? d : l;
      },
      0
    );
    if (this.groupWidth = a, Ce()) {
      const l = this.shapes.slice(0, -1).reduce((d, y) => d + y.getMinSpacing(this.container.saw), 0), f = this.shapes.reduce((d, y) => d + y[n], 0) + l;
      Ke([
        () => ue(
          O.equalTo(f, this.groupLength)
        ).toBe(!0),
        () => ue().toBe(this.groupLength),
        () => ue().toBe(this.groupWidth)
      ]);
    }
    this.direction === "horizontal" ? (this.l = this.groupLength, this.w = this.groupWidth) : (this.l = this.groupWidth, this.w = this.groupLength), this.calculateDimensions();
  }
  /**
   * Update positions for free-placement user groups
   * Uses user-defined positions from InputUserGroup rather than linear layout
   */
  updateUserGroupPositions() {
    const e = /* @__PURE__ */ new Map();
    if (this.positions && this.positions.length > 0) {
      for (const o of this.positions)
        e.set(o.autoId, o.rot);
      for (const [o, r] of e) {
        const a = this.shapes.find((l) => l.autoId === o);
        a && a.rot !== r && We(a, r, this.container);
      }
    }
    this.positions = [];
    let i = 0, s = 0;
    const n = /* @__PURE__ */ new Set();
    for (const o of this.shapes) {
      const r = this.userPositions.find((l) => l.autoId === o.autoId && !n.has(l));
      if (!r) continue;
      n.add(r);
      const a = e.get(o.autoId) ?? o.rot.valueOf();
      this.positions.push({
        autoId: o.autoId,
        x: r.x,
        y: r.y,
        rot: a,
        // Propagate gap-fill provenance (groups.user.fillFreeSpace)
        ...r.filler ? { filler: !0 } : {}
      }), i = Math.max(i, r.x + o.l), s = Math.max(s, r.y + o.w);
    }
    this.groupLength = Math.max(i, s), this.groupWidth = Math.min(i, s), this.l = i, this.w = s, this.calculateDimensions();
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
    const e = Bi(this.direction), i = Ht(e);
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
      Ke([
        () => ue(e.every((s) => !s.group?.inGroup)).toBe(!0),
        () => ue(e.every((s) => !s.group?.reference)).toBe(!0)
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
class Rs extends yi {
  // Required: Define schema and computed properties for SchemaClass
  static schema = _n;
  static computedProperties = Ln;
  constructor(e = {}) {
    const i = { ...e, offcut: !0 };
    super(i), this.offcut = !0;
  }
  /**
    * Get entity type
    */
  getType() {
    return p.Offcut;
  }
  /**
    * Validate offcut asynchronously
    */
  // validateAsync with custom data parameter removed - not compatible with base class
  // If you need to validate external data, create a separate static method
  // Using base class implementation which will:
  // 1. Use offcutSchema to validate properties
  // 2. Map errors to Issue objects properly
  // 3. Store issues and warnings
  // 4. Return Issue[] array
  /**
    * Set flex direction
    */
  setFlexDirection(e) {
    if (e && !["l", "w", void 0].includes(e))
      throw new Error('Invalid flex direction. Must be "l", "w", or undefined');
    this.flex = e;
  }
  /**
    * Mark offcut as added to inventory
    */
  markAddedToInventory() {
    this.addToInventory = !0, this.added = !0;
  }
  /**
    * Mark offcut as not added to inventory
    */
  markNotAddedToInventory() {
    this.addToInventory = !1, this.added = !1;
  }
  /**
    * Check if offcut should be added to inventory
    */
  shouldAddToInventory() {
    return this.addToInventory;
  }
  /**
    * Calculate cost based on area and material cost
    */
  calculateCost(e) {
    const i = this.l * this.w;
    return this.cost = i * e, this.cost;
  }
  /**
    * Check if offcut is useful (based on size)
    */
  isUseful(e = 100) {
    return this.l * this.w >= e;
  }
  /**
    * Clone the offcut
    */
  // clone() method removed - using base class implementation
  // The base AutoSerializable.clone() will:
  // 1. Call toData() to get serialized properties
  // 2. Apply any clone-specific overrides
  // 3. Create new instance with the same constructor
  // 4. Return as 'this' type for polymorphic cloning
  /**
    * Update properties from data
    */
  update(e) {
    super.update(e), this.offcut = !0;
  }
  /**
    * Create offcut from shape remainder
    */
  static fromRemainder(e) {
    return new Rs({
      ...e,
      // Include all rectangle properties (l, w, x, y, material)
      flex: e.flex,
      offcut: !0,
      addToInventory: !1,
      added: !1
    });
  }
}
const Fa = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return gs(t, "orientationLock", ["l", "w"], e, i, s), s;
}, Ma = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return gs(t, "grain", ["l", "w"], e, i, s), s;
}, _a = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [], n = L(t, "banding");
  return n != null && (typeof n != "object" || n === null) && new b({
    item: t,
    message: Z("errors.validation.must_be_object", { 0: "banding" }),
    shouldTranslate: !1,
    field: [["banding"]],
    index: [e],
    type: i ? "warning" : "error",
    issues: s,
    category: ["part"]
  }), s;
}, La = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], o = L(t, "customData");
  if (o == null) return n;
  if (typeof o != "object" || o === null)
    return new b({
      item: t,
      message: Z("errors.validation.must_be_object", {
        0: Ve.customData
      }),
      shouldTranslate: !1,
      field: [["customData"]],
      index: [e],
      issues: n,
      category: s
    }), n;
  for (const [, r] of Object.entries(o))
    if (r != null) {
      const a = typeof r;
      ["string", "number", "boolean"].includes(a) || new b({
        item: t,
        message: Z("errors.validation.must_be_string_number_boolean", {
          0: Ve.customData
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
}, Ra = ({ item: t, index: e }) => {
  const i = L(t, "machining");
  i && "validateEverything" in i && i.validateEverything(t, e);
}, $a = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], r = L(t, "x");
  return r === null || r === "" || r === void 0 || i != null && k({ v: r }) > i && new b({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: B("x", { returnKey: !0 }),
      // positional (legacy)
      field: B("x", { returnKey: !0 }),
      // named (new)
      1: i,
      // positional (legacy)
      max: i
      // named (new)
    },
    field: [["x"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: o,
    category: n
  }), o;
}, Na = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], r = L(t, "y");
  return r === null || r === "" || r === void 0 || i != null && k({ v: r }) > i && new b({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: B("y", { returnKey: !0 }),
      // positional (legacy)
      field: B("y", { returnKey: !0 }),
      // named (new)
      1: i,
      // positional (legacy)
      max: i
      // named (new)
    },
    field: [["y"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: o,
    category: n
  }), o;
}, Ga = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], r = L(t, "l");
  return L(t, "infiniteLength") || (r === null || r === "" || r === void 0 || r === 0) && new b({
    item: t,
    message: "errors.validation.not_set",
    params: {
      0: B("l", { returnKey: !0 }),
      // positional (legacy)
      field: B("l", { returnKey: !0 })
      // named (new)
    },
    field: [["l"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: o,
    category: n
  }), o;
}, Ba = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], r = L(t, "w");
  return (r === null || r === "" || r === void 0) && new b({
    item: t,
    message: "errors.validation.not_set",
    params: {
      0: B("w", { returnKey: !0 }),
      // positional (legacy)
      field: B("w", { returnKey: !0 })
      // named (new)
    },
    field: [["w"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: o,
    category: n
  }), o;
}, ja = ({ item: t, index: e, max: i, isWarning: s = !1, saw: n, category: o = [] }) => {
  const r = [], a = L(t, "t");
  return n?.cutType === "beam" && !a && new b({
    item: t,
    message: "errors.saw.thickness_required_for_beam_saw",
    field: [["t"]],
    index: [e],
    type: "error",
    issues: r,
    category: o
  }), r;
}, za = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], o = L(t, "q"), r = L(t, "autoAdd");
  return o == null || r === !0, n;
};
function Va(t, e, i = 0) {
  const s = t.x + t.l + i, n = e.x + e.l + i;
  if (!O.lessThan(t.x, n) || !O.greaterThan(s, e.x))
    return !1;
  const o = t.y + t.w + i, r = e.y + e.w + i;
  return O.lessThan(t.y, r) && O.greaterThan(o, e.y);
}
function Wa(t, e = 0) {
  const i = [
    { x: t.x, y: t.y },
    // topLeft
    { x: t.x + t.l, y: t.y },
    // topRight
    { x: t.x, y: t.y + t.w },
    // bottomLeft
    { x: t.x + t.l, y: t.y + t.w }
    // bottomRight
  ];
  return e ? [
    // topLeft: offset left (-x) and up (-y)
    { x: t.x - e, y: t.y },
    { x: t.x, y: t.y - e },
    // topRight: offset right (+x) and up (-y)
    { x: t.x + t.l + e, y: t.y },
    { x: t.x + t.l, y: t.y - e },
    // bottomLeft: offset left (-x) and down (+y)
    { x: t.x - e, y: t.y + t.w },
    { x: t.x, y: t.y + t.w + e },
    // bottomRight: offset right (+x) and down (+y)
    { x: t.x + t.l + e, y: t.y + t.w },
    { x: t.x + t.l, y: t.y + t.w + e }
  ] : i;
}
function ic(t, e, i = 0) {
  const s = [{ x: 0, y: 0 }];
  for (const o of e)
    s.push(...Wa(o, i));
  const n = [];
  for (const o of s)
    n.push({ x: o.x, y: o.y }), n.push({ x: o.x - t.l, y: o.y }), n.push({ x: o.x, y: o.y - t.w }), n.push({ x: o.x - t.l, y: o.y - t.w });
  return n;
}
const Ha = ({
  item: t,
  index: e,
  shapes: i,
  requiredCount: s = 2,
  isWarning: n = !1,
  category: o = ["group"]
}) => {
  const r = [];
  return i.length < s && new b({
    item: t,
    message: "errors.groups.min_parts",
    index: [e],
    type: n ? "warning" : "error",
    issues: r,
    category: o
  }), r;
}, Ua = ({
  item: t,
  index: e,
  shapes: i,
  isWarning: s = !1,
  category: n = ["group"]
}) => {
  const o = [];
  return i.forEach((r, a) => {
    !(typeof r.isSquare == "function", r.isSquare) && !["l", "w"].includes(r.orientationLock) && new b({
      item: t,
      message: Z("errors.groups.part_needs_orientation_lock", { 0: a + 1 }),
      shouldTranslate: !1,
      field: [["orientationLock"]],
      index: [e],
      type: s ? "warning" : "error",
      issues: o,
      category: n
    });
  }), o;
}, qa = ({
  item: t,
  index: e,
  shapes: i,
  joinDirection: s,
  isWarning: n = !1,
  category: o = ["group"]
}) => {
  const r = [];
  if (i.length < 2) return r;
  const a = i[0], l = a.trimmedDimensions ? a.trimmedDimensions[s] : a[s];
  return i.slice(1).forEach((c, f) => {
    const d = c.trimmedDimensions ? c.trimmedDimensions[s] : c[s];
    O.equalTo(d, l) || new b({
      item: t,
      message: Z("errors.groups.dimension_not_correct", {
        0: f + 2,
        1: s === "l" ? "length" : "width",
        2: l,
        3: d
      }),
      shouldTranslate: !1,
      index: [e],
      type: n ? "warning" : "error",
      issues: r,
      category: o
    });
  }), r;
};
function ji(t) {
  const e = t.trimmedDimensions || { l: t.l, w: t.w }, i = Math.max(e.l, e.w), s = Math.min(e.l, e.w);
  return t.orientationLock === "w" ? { l: s, w: i } : { l: i, w: s };
}
const Ya = ({
  item: t,
  index: e,
  shapes: i,
  positions: s,
  bladeWidth: n = 0,
  isWarning: o = !1,
  category: r = ["group"]
}) => {
  const a = [];
  if (s.length < 2) return a;
  for (let l = 0; l < s.length; l++)
    for (let c = l + 1; c < s.length; c++) {
      const f = s[l], d = s[c], y = (C) => i.find((E) => E.autoId === C) ?? i.find((E) => typeof E.getBaseAutoId == "function" && E.getBaseAutoId() === C), g = y(f.autoId), v = y(d.autoId);
      if (!g || !v) continue;
      const D = ji(g), W = ji(v), m = { x: f.x, y: f.y, l: D.l, w: D.w }, T = { x: d.x, y: d.y, l: W.l, w: W.w };
      Va(m, T, n) && new b({
        item: t,
        message: Z("errors.groups.shapes_overlap", { 0: l + 1, 1: c + 1 }),
        shouldTranslate: !1,
        index: [e],
        type: o ? "warning" : "error",
        issues: a,
        category: r
      });
    }
  return a;
}, Ka = ({
  item: t,
  index: e,
  shapeId: i,
  requiredQuantity: s,
  availableQuantity: n,
  shapeName: o,
  shapeIndex: r,
  isWarning: a = !1,
  category: l = ["group"]
}) => {
  const c = [];
  return s > n && new b({
    item: t,
    message: Z("errors.groups.not_enough_of_part", {
      0: o || (r ?? 0) + 1,
      1: s,
      2: n
    }),
    shouldTranslate: !1,
    index: [e],
    type: a ? "warning" : "error",
    issues: c,
    category: l
  }), n === 0 && new b({
    item: t,
    message: "errors.groups.no_parts",
    index: [e],
    type: a ? "warning" : "error",
    issues: c,
    category: l
  }), c;
};
function pt(t) {
  return t && typeof t == "object" && "area" in t;
}
const Yt = {
  missingProperty: (t, e) => `[Sorting Warning] Missing property "${t}" in ${e}`,
  missingMethod: (t, e) => `[Sorting Warning] Missing method "${t}" in ${e}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
}, N = (t, e, i) => e in t ? t[e] : (console.warn(Yt.missingProperty(String(e), i)), null), rt = (t, e) => (i, s) => {
  const n = t(i, s);
  return n !== 0 ? n : e(i, s);
}, Re = (t, e) => {
  if (pt(t) && pt(e))
    return t.area < e.area ? -1 : t.area > e.area ? 1 : 0;
  const i = "l" in t && "w" in t ? Number(t.l) * Number(t.w) : 0, s = "l" in e && "w" in e ? Number(e.l) * Number(e.w) : 0;
  return i < s ? -1 : i > s ? 1 : 0;
}, Q = (t, e) => {
  const i = N(t, "id", "first item"), s = N(e, "id", "second item");
  if (i === null || s === null || i === void 0 || s === void 0) return 0;
  const n = i.toString().split("."), o = s.toString().split(".");
  return n[0] !== o[0] ? parseInt(n[0]) - parseInt(o[0]) : parseInt(n[1]) - parseInt(o[1]);
};
function se(t) {
  const e = Array.isArray(t[0]) ? t.map(([i, s]) => ({ key: i, direction: s })) : t;
  return (i, s) => {
    for (const { key: n, direction: o } of e) {
      const r = N(i, n, "first item"), a = N(s, n, "second item");
      if (!(r === null || a === null) && r !== a)
        return o === "desc" ? r < a ? 1 : -1 : r < a ? -1 : 1;
    }
    return 0;
  };
}
function Xa(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s > n ? i : e;
  }) : null;
}
function Za(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s < n ? i : e;
  }) : null;
}
const Lt = {
  // Dimension-based sorts
  WDLD: se([
    ["w", "desc"],
    ["l", "desc"]
  ]),
  WALA: se([
    ["w", "asc"],
    ["l", "asc"]
  ]),
  LDWD: se([
    ["l", "desc"],
    ["w", "desc"]
  ]),
  LAWA: se([
    ["l", "asc"],
    ["w", "asc"]
  ]),
  WD: se([["w", "desc"]]),
  LD: se([["l", "desc"]]),
  // ID-based sorts
  LDIDA: rt(
    se([["l", "desc"]]),
    Q
  ),
  WDIDA: rt(
    se([["w", "desc"]]),
    Q
  ),
  // Area-based sorts
  AD: (t, e) => -Re(t, e),
  AA: Re,
  AAID: rt(
    Re,
    Q
  ),
  ADID: rt(
    (t, e) => -Re(t, e),
    Q
  ),
  // ID sorts
  ID: Q,
  IDDesc: (t, e) => -Q(t, e),
  StockID: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    return !i || !s ? 0 : Q(i, s);
  },
  StockIDAD: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s) return 0;
    const n = Q(i, s);
    return n !== 0 ? n : -Re(t, e);
  },
  // Position sorts
  YX: se([
    ["y", "asc"],
    ["x", "asc"]
  ]),
  XY: se([
    ["x", "asc"],
    ["y", "asc"]
  ]),
  // Placement order sorts
  placementOrder: (t, e) => {
    const i = N(t, "placementOrder", "first item") ?? 0, s = N(e, "placementOrder", "second item") ?? 0;
    return i - s;
  },
  typePlacementOrder: (t, e) => {
    const i = N(t, "offcut", "first item"), s = N(e, "offcut", "second item"), n = N(t, "placementOrder", "first item") ?? 0, o = N(e, "placementOrder", "second item") ?? 0;
    return i && !s ? 1 : !i && s ? -1 : n - o;
  },
  typeID: (t, e) => {
    const i = N(t, "offcut", "first item"), s = N(e, "offcut", "second item");
    return i && !s ? 1 : !i && s ? -1 : Q(t, e);
  },
  stockIDTypePlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s) return 0;
    const n = Q(i, s);
    if (n !== 0) return n;
    const o = N(t, "offcut", "first item"), r = N(e, "offcut", "second item");
    if (o && !r) return 1;
    if (!o && r) return -1;
    const a = N(t, "placementOrder", "first item") ?? 0, l = N(e, "placementOrder", "second item") ?? 0;
    return a - l;
  },
  offcutPlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i?.id || !s?.id) return 0;
    const n = Q(i, s);
    if (n !== 0) return n;
    if ("placementOrder" in t && "placementOrder" in e) {
      const o = N(t, "placementOrder", "first item") ?? 0, r = N(e, "placementOrder", "second item") ?? 0;
      return o - r;
    }
    return 0;
  },
  groupPlacementOrder: (t, e) => {
    const i = N(t, "placementOrder", "first item") ?? 0, s = N(e, "placementOrder", "second item") ?? 0, n = i - s;
    if (n !== 0) return n;
    const o = t.group?.placementOrder ?? 0, r = e.group?.placementOrder ?? 0;
    return o - r;
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
    if (pt(t) && pt(e) && t.aspect && e.aspect)
      return e.aspect - t.aspect;
    if (!("l" in t) || !("w" in t) || !("l" in e) || !("w" in e))
      return console.warn(Yt.missingAspect), 0;
    const i = Math.max(Number(t.l), Number(t.w)) / Math.min(Number(t.l), Number(t.w));
    return Math.max(Number(e.l), Number(e.w)) / Math.min(Number(e.l), Number(e.w)) - i;
  },
  fillThenArea(t) {
    return (e, i) => !("l" in e) || !("w" in e) || !("l" in i) || !("w" in i) ? (console.warn(Yt.missingLongSide), 0) : i[t] === e[t] ? -Re(e, i) : parseFloat(String(i[t])) - parseFloat(String(e[t]));
  },
  // Utility functions
  getLargest: Xa,
  getSmallest: Za
};
function Ja(t) {
  return Y(t) || ps(t) || Ue(t);
}
function Qa(t, e, i) {
  if (!i) return !0;
  const s = t?.stock?.db_id, n = e?.db_id;
  if (s && n && s === n) return !0;
  const o = t?.material?.toLowerCase() || "", r = e?.material?.toLowerCase() || "", a = e?.variant?.toLowerCase() || "", l = e?.name?.toLowerCase() || "", c = a && l && a !== l ? `${a} ${l}` : "";
  return !o && !r && !a ? !0 : o ? o === r || o === a || o === l || !!c && o === c : !1;
}
function el(t, e, i) {
  return i ? !he(t.t) || !he(e.t) ? !1 : O.equalTo(k({ v: t.t }), k({ v: e.t })) : !0;
}
function tl(t, e, i) {
  return i?.stockType !== "linear" || !ps(t) && !Y(t) ? !0 : Ut(t, 0, e) && O.equalTo(k({ v: t.w }), k({ v: e.w })) || Ut(t, 1, e) && O.equalTo(k({ v: t.l }), k({ v: e.w }));
}
function il(t, e, i, s = 0) {
  const n = Y(t[0]), o = i.stockType;
  if (t.some((m) => he(m.stockLock) && m.stockLock.length))
    return { stockList: e, shapeList: t, unusableShapes: [], unusableStock: [], newIssues: [] };
  e = e.filter((m) => n || m.autoAdd === !0 || he(m.q) && Number(m.q) > 0);
  const a = e.some((m) => he(m.material)), l = e.some((m) => he(m.t)), c = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set(), g = [];
  let v = s;
  for (const m of t) {
    const T = e.map((F, U) => {
      const Fe = Ja(m) && vt(m, F), Si = Qa(m, F, a), xi = el(m, F, l), vi = tl(m, F, i);
      return {
        stockItem: F,
        stockIndex: U,
        fit: Fe,
        material: Si,
        thickness: xi,
        width: vi,
        // For this stock item, does it satisfy all requirements?
        satisfiesAll: Fe && Si && xi && (o !== "linear" || vi)
      };
    });
    m.stockMatch = {
      fit: T.some((F) => F.fit),
      material: !a || T.some((F) => F.material),
      thickness: !l || T.some((F) => F.thickness),
      width: o !== "linear" || T.some((F) => F.width)
    };
    const C = T.filter((F) => F.satisfiesAll), E = C.length > 0;
    if (!n && E) {
      const F = C.map((U) => U.stockItem.parentId);
      m.stockLock = F, F.forEach((U) => c.add(U));
    }
    m.stockMatch.fit ? E || (a && !m.stockMatch.material && (y.add(m), g.push(new b({
      category: ["part", "stock"],
      item: m,
      field: [["material"]],
      index: [v],
      message: "errors.validation.no_matching_stock_material"
    }))), l && !m.stockMatch.thickness && (y.add(m), g.push(new b({
      category: ["part", "stock"],
      item: m,
      field: [["t"]],
      index: [v],
      message: "errors.validation.no_matching_stock_thickness"
    }))), o === "linear" && !m.stockMatch.width && (d.add(m), g.push(new b({
      category: ["part", "stock"],
      item: m,
      field: [["w"]],
      index: [v],
      message: "errors.validation.no_matching_stock_width"
    }))), m.stockMatch.material && m.stockMatch.thickness && (o !== "linear" || m.stockMatch.width) && (y.add(m), g.push(new b({
      category: ["part", "stock"],
      item: m,
      field: [["material"], ["t"]],
      index: [v],
      message: "errors.validation.no_stock_matches_all_requirements"
    })))) : (f.add(m), g.push(new b({
      category: ["part", "stock"],
      item: m,
      field: [["l"], ["w"]],
      index: [v],
      message: "errors.validation.will_not_fit"
    }))), v++;
  }
  t.forEach((m) => m.stockMatch = null);
  let D, W;
  return n ? (D = t.filter((m) => f.has(m) || d.has(m) || y.has(m)).sort(Lt.ID), W = []) : (D = t.filter((m) => f.has(m) || d.has(m) || y.has(m) || !m.stockLock || !m.stockLock.length).sort(Lt.ID), W = e.filter((m) => !c.has(m.parentId)).sort(Lt.ID), e = e.filter((m) => re(m)).filter((m) => c.has(m.parentId)), t = t.filter((m) => !f.has(m) && !d.has(m) && !y.has(m) && m?.stockLock?.length)), {
    stockList: e,
    unusableStock: W,
    shapeList: t,
    unusableShapes: D,
    newIssues: g
  };
}
function sl(t) {
  return t?.issues?.length > 0;
}
const nl = ({
  item: t,
  inputStockList: e,
  saw: i,
  partTrim: s = 0,
  index: n
}) => {
  const o = [], r = i.stockType, a = L(t, "q"), l = L(t, "l"), c = L(t, "w");
  return !a || !l || !c || ("applyPartTrim" in t && typeof t.applyPartTrim == "function" && t.applyPartTrim(s, r), sl(t)) || il([t], e, i, n).newIssues.forEach((d) => {
    o.push(d);
  }), o;
}, rl = ({
  item: t,
  partTrim: e,
  index: i,
  isWarning: s = !1
}) => {
  const n = [];
  if (!e) return n;
  const o = L(t, "l"), r = L(t, "w");
  if (!o || !r) return n;
  try {
    const a = k({ v: e }), l = k({ v: o }), c = k({ v: r }), f = l - a * 2, d = c - a * 2;
    (f <= 0 || d <= 0) && new b({
      item: t,
      message: "errors.trim.too_much",
      params: {
        0: "part",
        // positional (legacy)
        1: a,
        // positional (legacy)
        2: `${f}x${d}`,
        // positional (legacy)
        item: "part",
        // named (new)
        trimValue: a,
        // named (new)
        result: `${f}x${d}`
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
}, ol = ({
  item: t,
  index: e,
  isWarning: i = !1,
  category: s = []
}) => {
  const n = [], o = L(t, "l"), r = L(t, "w"), a = L(t, "trim");
  if (!o || !r || !a) return n;
  if ((!re(t) || re(t) && !("trimmed" in t && t.trimmed)) && typeof a == "object" && a !== null)
    try {
      const c = k({ v: o }), f = k({ v: r }), d = (D) => {
        if (D == null) return 0;
        if (typeof D == "number" || typeof D == "string")
          try {
            return k({ v: D }) || 0;
          } catch {
            return 0;
          }
        return 0;
      }, y = {
        w1: d(L(a, "w1")),
        w2: d(L(a, "w2")),
        l1: d(L(a, "l1")),
        l2: d(L(a, "l2"))
      }, g = y.w1 + y.w2, v = y.l1 + y.l2;
      g >= c && new b({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${B("w1").toUpperCase()} + ${B("w2").toUpperCase()}`,
          // positional (legacy)
          1: B("l"),
          // positional (legacy)
          2: c,
          // positional (legacy)
          trimFields: `${B("l1", { returnKey: !0 })} + ${B("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: B("l", { returnKey: !0 }),
          // named (new)
          maxValue: c
          // named (new)
        },
        field: [["trim", "w1"], ["trim", "w2"]],
        index: [e],
        type: i ? "warning" : "error",
        issues: n,
        category: s
      }), v >= f && new b({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${B("l1").toUpperCase()} + ${B("l2").toUpperCase()}`,
          // positional (legacy)
          1: B("w"),
          // positional (legacy)
          2: f,
          // positional (legacy)
          trimFields: `${B("l1", { returnKey: !0 })} + ${B("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: B("w", { returnKey: !0 }),
          // named (new)
          maxValue: f
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
}, H = {
  // Dimensions
  x: $a,
  y: Na,
  l: Ga,
  w: Ba,
  t: ja,
  q: za,
  // Trim
  trim: ol,
  partTrim: rl,
  // Custom
  customData: La,
  banding: _a,
  orientationLock: Fa,
  grain: Ma,
  machining: Ra,
  // Stock
  stockMatch: nl,
  // Groups
  groupShapeCount: Ha,
  groupOrientationLock: Ua,
  groupDimensions: qa,
  groupOverlap: Ya,
  groupQuantity: Ka
};
class mt extends gi {
  static schema = Bt;
  static computedProperties = os;
  static defaults = Bt.parse({});
  constructor(e = {}) {
    const i = mt.preprocessData(e);
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
    return p.Stock;
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
      const n = H.q({ item: e, index: e?.index });
      i.push(...n);
    }
    const s = H.grain({ item: e, index: e?.index });
    i.push(...s), this.issues.push(...i.filter((n) => n));
  }
  /**
    * Create stock instance with live objects
    */
  static create(e) {
    const i = { ...e.data };
    e.saw && (i.saw = e.saw);
    const s = new mt(i);
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
    return e.reduce((n, o) => {
      const r = o.l * o.w * (o.q || 1);
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
    const s = [...e].sort((n, o) => {
      const r = n.l * n.w;
      return o.l * o.w - r;
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
  /**
   * Override toData() to inline a denormalised saw snapshot in the serialised
   * output (instead of the default __ref stub).
   *
   * The `saw` field on Container has `serialize: 'reference'` (set by zRef),
   * which means the default AutoSerializable.toData() emits a __ref stub —
   * losing every saw field (cutType, stockType, guillotineOptions, options,
   * stackHeight, …) across JSON.stringify → JSON.parse.
   *
   * Downstream consumers (e.g. the corpus layout_json store, PTX / Biesse /
   * CPOUT emitters) read `stock.saw.cutType`, `stock.saw.guillotineOptions`,
   * `stock.saw.options.minSpacing`, etc., so the saw must round-trip in full.
   *
   * Strategy: replace the __ref stub with the saw's own toData() output
   * (carrying `__entityType: 'Saw'` but no `__ref`). The zRef transform on
   * `saw` already knows how to instantiate a Saw from such a plain-object
   * payload, so rehydration produces a real Saw instance — no constructor
   * changes required.
   *
   * The Container computed-property `bladeWidth: container.saw?.bladeWidth ?? 0`
   * (Container.zod.ts) resolves correctly on rehydrated Stocks because `saw`
   * is now a real Saw instance, not a __ref stub — so the previous top-level
   * `data.bladeWidth` mirror is no longer required for round-trip fidelity.
   */
  toData(e) {
    const i = super.toData(e), s = this.saw;
    return s && typeof s.toData == "function" && (i.saw = s.toData(e)), i;
  }
  /**
   * toJSON is called by JSON.stringify; route it through toData() so JSON
   * output matches the serialised representation (and includes bladeWidth).
   */
  toJSON() {
    return this.toData();
  }
  getCroppedLength(e = [], i = 0) {
    if (!e?.length) return;
    const s = e.filter((o) => o.added && o.stock.id === this.id);
    if (!s.length) return;
    const n = Math.max(...s.map((o) => {
      const r = o.getPositionedOutline?.();
      return r?.length ? Math.max(...r.map((a) => a.x)) : o.x + o.l;
    }));
    if (n > this.l) throw new Error("Furthest shape position exceeds stock length");
    return O.equalTo(n, this.l) ? n : n + i;
  }
}
class gt extends M {
  // Required: Define schema and computed properties for SchemaClass
  static schema = xt;
  static computedProperties = ai;
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
class be extends gt {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = Er;
  static computedProperties = Fr;
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
    const i = [], s = new Set(ee);
    for (const n in this.faces)
      s.has(n) || i.push(new b({
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
      for (const s of ee)
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
      const s = i, n = pe("finish");
      if (n && n.labels && n.labels.length > 0) {
        const r = n.labels.map((a) => {
          const l = s[a];
          return typeof l == "string" ? l : typeof l == "boolean" && l ? "Y" : "";
        }).filter((a) => a !== "");
        return r.length > 0 ? r.join("|") : !1;
      }
      const o = Object.values(s).map((r) => typeof r == "string" ? r : typeof r == "boolean" && r ? "Y" : "").filter((r) => r !== "");
      return o.length > 0 ? o.join("|") : !1;
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
      for (const e of ee)
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
    for (const i of ee)
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
    return new be(e);
  }
  /**
   * Create empty finish
   */
  static empty() {
    return new be();
  }
  /**
   * Create with both faces
   */
  static bothFaces(e = !0) {
    const i = new be();
    return i.setBothFaces(e), i;
  }
  /**
   * Create with front face only
   */
  static frontOnly(e = !0) {
    const i = new be();
    return i.setFace("a", e), i;
  }
  /**
   * Create with back face only
   */
  static backOnly(e = !0) {
    const i = new be();
    return i.setFace("b", e), i;
  }
}
class we extends gt {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = la;
  static computedProperties = ca;
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
      const s = new Set(ee);
      for (const n in this.faces)
        s.has(n) || i.push(new b({
          message: `Invalid planing face: ${n}. Valid faces are 'a' (front) and 'b' (back)`,
          type: "warning"
        }));
    }
    if (this.sides) {
      const s = new Set(ye);
      for (const n in this.sides)
        s.has(n) || i.push(new b({
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
      for (const s of ee)
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
      const s = i, n = pe("planing");
      if (n && n.labels && n.labels.length > 0) {
        const r = n.labels.map((a) => {
          const l = s[a];
          return typeof l == "string" ? l : typeof l == "boolean" && l ? "Y" : "";
        }).filter((a) => a !== "");
        return r.length > 0 ? r.join("|") : !1;
      }
      const o = Object.values(s).map((r) => typeof r == "string" ? r : typeof r == "boolean" && r ? "Y" : "").filter((r) => r !== "");
      return o.length > 0 ? o.join("|") : !1;
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
      for (const s of ye)
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
      const s = i, n = pe("planing");
      if (n && n.labels && n.labels.length > 0) {
        const r = n.labels.map((a) => {
          const l = s[a];
          return typeof l == "string" ? l : typeof l == "boolean" && l ? "Y" : "";
        }).filter((a) => a !== "");
        return r.length > 0 ? r.join("|") : !1;
      }
      const o = Object.values(s).map((r) => typeof r == "string" ? r : typeof r == "boolean" && r ? "Y" : "").filter((r) => r !== "");
      return o.length > 0 ? o.join("|") : !1;
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
      for (const e of ee)
        this.faces[e] = !1;
    if (this.sides)
      for (const e of ye)
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
    for (const i of ee)
      this.setFace(i, e);
  }
  /**
   * Set all sides to the same value
   */
  setAllSides(e) {
    for (const i of ye)
      this.setSide(i, e);
  }
  /**
   * Calculate total planing area
   */
  calculateArea(e, i) {
    let s = 0;
    if (this.faces) {
      const n = e * i;
      for (const o of ee)
        this.hasFace(o) && (s += n);
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
      for (const o of ye)
        this.hasSide(o) && n[o] && (s += n[o]);
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
      const o = this.sides ? this.getActiveSides().length : 0;
      if (e.t) {
        const r = e.l * e.t, a = e.w * e.t;
        i += o * ((r + a) / 2) * 0.01;
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
    return new we(e);
  }
  /**
   * Create empty planing
   */
  static empty() {
    return new we();
  }
  /**
   * Create with all faces and sides
   */
  static full(e = !0) {
    const i = new we();
    return i.setAllFaces(e), i.setAllSides(e), i;
  }
  /**
   * Create with faces only
   */
  static facesOnly(e = !0) {
    const i = new we();
    return i.setAllFaces(e), i;
  }
  /**
   * Create with sides only
   */
  static sidesOnly(e = !0) {
    const i = new we();
    return i.setAllSides(e), i;
  }
}
class G extends M {
  // Zod schema for validation and serialization
  static schema = Cr;
  static computedProperties = Ar;
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
    return p.Extras;
  }
  constructor(e = {}) {
    const i = { ...e }, s = (n) => {
      if (!n || typeof n != "object" || !("sides" in n)) return;
      const o = n.sides;
      if (!o || typeof o != "object") return;
      ("x1" in o || "x2" in o || "y1" in o || "y2" in o) && (n.sides = {
        l1: o.y1 ?? o.l1,
        l2: o.y2 ?? o.l2,
        w1: o.x1 ?? o.w1,
        w2: o.x2 ?? o.w2
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
    if (me(this.banding)) {
      const s = this.banding.validate(e);
      i.push(...s);
    }
    if (le(this.finish)) {
      const s = this.finish.validate(e);
      i.push(...s);
    }
    if (ce(this.planing)) {
      const s = this.planing.validate(e);
      i.push(...s);
    }
    if (ce(this.planing) && le(this.finish) && e?.t) {
      const s = this.planing.getTotalFacePlaning();
      s > 0 && e.t - s < 5 && i.push(new b({
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
    return me(this.banding) && (i += this.banding.getCost(e)), le(this.finish) && (i += this.finish.getCost(e)), ce(this.planing) && (i += this.planing.getCost(e)), i;
  }
  /**
   * Get human-readable description of all extras
   */
  getDescription() {
    const e = [];
    return me(this.banding) && this.banding.hasValues() && e.push(this.banding.getDescription()), le(this.finish) && this.finish.hasValues() && e.push(this.finish.getDescription()), ce(this.planing) && this.planing.hasValues() && e.push(this.planing.getDescription()), e.length > 0 ? e.join("; ") : "No extras";
  }
  /**
   * Check if any extras are applied
   */
  hasExtras() {
    return !!(me(this.banding) && this.banding.hasValues() || le(this.finish) && this.finish.hasValues() || ce(this.planing) && this.planing.hasValues());
  }
  /**
   * Clear all extras
   */
  clear() {
    me(this.banding) && this.banding.clear(), le(this.finish) && this.finish.clear(), ce(this.planing) && this.planing.clear();
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
    e ? e instanceof ze ? this.banding = e : this.banding = new ze(e) : this.banding = void 0;
  }
  /**
   * Set finish
   */
  setFinish(e) {
    e ? e instanceof be ? this.finish = e : this.finish = new be(e) : this.finish = void 0;
  }
  /**
   * Set planing
   */
  setPlaning(e) {
    e ? e instanceof we ? this.planing = e : this.planing = new we(e) : this.planing = void 0;
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
    return new G(e);
  }
  /**
   * Create empty extras container
   */
  static empty() {
    return new G();
  }
  /**
   * Create with specific extras
   */
  static create(e) {
    return new G(e);
  }
  /**
   * Check if any extras are applicable to shape
   * Used for UI validation to determine if extras tab should be enabled
   */
  isApplicable(e) {
    return !!(me(this.banding) && this.banding.isApplicable(e) || le(this.finish) && this.finish.isApplicable(e) || ce(this.planing) && this.planing.isApplicable(e));
  }
  /**
   * Get summary of active extras
   */
  getSummary() {
    return {
      hasBanding: me(this.banding) && this.banding.hasValues() || !1,
      hasFinish: le(this.finish) && this.finish.hasValues() || !1,
      hasPlaning: ce(this.planing) && this.planing.hasValues() || !1,
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
    return s ? me(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" ? Object.keys(s.sides).some((n) => {
      const o = s.sides[n];
      return o !== void 0 && o !== !1 && o !== "";
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
    return s ? le(s) && typeof s.hasValues == "function" ? s.hasValues() : s.faces && typeof s.faces == "object" ? Object.keys(s.faces).some((n) => {
      const o = s.faces[n];
      return o !== void 0 && o !== !1 && o !== "";
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
    return s ? ce(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" && Object.keys(s.sides).some((o) => {
      const r = s.sides[o];
      return r !== void 0 && r !== !1 && r !== "";
    }) ? !0 : s.faces && typeof s.faces == "object" ? Object.keys(s.faces).some((n) => {
      const o = s.faces[n];
      return o !== void 0 && o !== !1 && o !== "";
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
    return s ? Qn(s) && typeof s.hasValues == "function" ? s.hasValues() : s.images && Array.isArray(s.images) ? s.images.length > 0 : !1 : !1;
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
          return G.hasBanding(e);
        case "finish":
          return G.hasFinish(e);
        case "planing":
          return G.hasPlaning(e);
        case "imageUpload":
          return G.hasImageUpload(e);
      }
    return G.hasBanding(e) || G.hasFinish(e) || G.hasPlaning(e) || G.hasImageUpload(e);
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
    return G.hasBanding(e) && i.push("banding"), G.hasFinish(e) && i.push("finish"), G.hasPlaning(e) && i.push("planing"), i;
  }
}
function al(t) {
  const { dimensionName: e, constraint: i, limit: s, value: n, subject: o, location: r } = t, a = t.kind ?? "length", l = a === "count" ? "" : " mm", c = i === "min" ? "at least" : "at most", f = r ? `${r}: ` : "", d = o ? `${f}${o} ${e}` : `${f}${e}`;
  if (a === "length" && i === "min" && n <= 0)
    return `${d} must be at least ${s} mm — enter the part's dimensions`;
  const y = a === "count" ? `this part has ${n}` : `this part is ${n} mm`;
  return `${d} must be ${c} ${s}${l} (${y})`;
}
function sc(t, e) {
  const i = t.filter(Boolean).join("; ");
  return e && i ? `${e} — ${i}` : e || i;
}
const ll = {
  t: "thickness",
  longSide: "long side",
  shortSide: "short side",
  holes: "hole count",
  corners: "corner count",
  hingeHoles: "hinge-hole group count"
}, cl = /* @__PURE__ */ new Set(["holes", "corners", "hingeHoles"]);
function ul(t) {
  return ll[t] ?? String(t);
}
function dl(t) {
  return cl.has(t);
}
const Kt = ye, Rt = ee, fl = {
  banding: {
    scope: ["sides"],
    sides: Ee.map((t) => `side.${t}`)
    // Only use main sides (l1/l2/w1/w2), not corners
  },
  finish: {
    scope: ["faces"],
    faces: Rt.map((t) => `face.${t}`)
  },
  planing: {
    scope: ["faces", "sides"],
    faces: Rt.map((t) => `face.${t}`),
    // Main sides (l1/l2/w1/w2) — matches the runtime config in extras.ts and the
    // coordinate canon. Previously the legacy literals side.a/b/c/d (corner letters),
    // which never matched the runtime side keys.
    sides: Ee.map((t) => `side.${t}`)
  },
  info: {
    scope: ["sides"],
    sides: Kt.map((t) => `side.${t}`)
  },
  machining: {
    scope: ["faces", "sides"],
    faces: Rt.map((t) => `face.${t}`),
    sides: Kt.map((t) => `side.${t}`)
  },
  addon: {
    // No face/side scope - addon products attach to the shape as a whole.
    scope: []
  }
}, hl = fl, ae = (t) => hl[t] || {
  scope: ["sides"],
  sides: ye.map((e) => `side.${e}`)
}, pl = (t) => {
  const e = ae(t), i = [];
  return e.faces && i.push(...e.faces), e.sides && i.push(...e.sides), i;
}, nc = (t) => (ae(t).faces || []).map((i) => {
  const s = Te(i);
  return s.scope === "face" ? s.key : void 0;
}).filter((i) => i !== void 0), rc = (t) => (ae(t).sides || []).map((i) => {
  const s = Te(i);
  return s.scope === "side" ? s.key : void 0;
}).filter((i) => typeof i == "string"), Te = (t) => {
  const e = t.split(".");
  if (e.length !== 2 || e[0] !== "face" && e[0] !== "side")
    throw new Error(`Invalid ExtraLocation format: ${t}. Must be 'face.X' or 'side.X'`);
  const i = e[0], s = e[1];
  if (i === "face" && !ee.includes(s))
    throw new Error(`Invalid face key '${s}' in location '${t}'`);
  if (i === "side" && !ye.includes(s))
    throw new Error(`Invalid side key '${s}' in location '${t}'`);
  return {
    scope: i,
    key: s,
    original: t
  };
}, oc = (t) => Te(t).scope, ml = (t, e = 0, i = !1) => {
  const s = t.replace(/^side\./, "");
  if (e === 0) {
    const o = {
      l1: "sides.long1",
      l2: "sides.long2",
      w1: "sides.short1",
      w2: "sides.short2"
    };
    if (o[s]) return o[s];
  }
  let n = s;
  return (e === 1 || e === 2) && i && (n = { l1: "w1", l2: "w2", w1: "l1", w2: "l2" }[s] || s), `sides.${n}`;
}, ac = (t, e = 0, i = !1) => t.startsWith("face.") ? `faces.${t.replace(/^face\./, "")}` : ml(t, e, i), lc = (t, e) => {
  const i = Number(t?.l), s = Number(t?.w);
  if (e.startsWith("face."))
    return { quantity: Number.isFinite(i) && Number.isFinite(s) && i > 0 && s > 0 ? i * s / 1e6 : void 0, unit: "m²" };
  const n = e.replace(/^side\./, ""), o = n === "l1" || n === "l2" ? i : n === "w1" || n === "w2" ? s : NaN;
  return { quantity: Number.isFinite(o) && o > 0 ? o / 1e3 : void 0, unit: "m" };
}, gl = (t) => Qs(t), $s = (t) => ae(t).scope.includes("faces"), Ns = (t) => ae(t).scope.includes("sides"), cc = (t) => {
  const e = ae(t);
  return e.scope.includes("faces") && e.scope.includes("sides");
}, yl = (t, e) => {
  if (t.length === 1 && t[0].length === 1 && t[0][0] === !0)
    return "boolean";
  const i = t.flat().filter((o) => typeof o == "string"), n = [.../* @__PURE__ */ new Set([...i, ...e || []])].length;
  return n === 0 ? "multiple" : n === 1 ? "single" : "multiple";
}, uc = (t, e = "") => {
  if (typeof t == "string") return t;
  if (typeof t == "boolean") return t ? "Y" : e;
  if (typeof t == "object" && t !== null && !Array.isArray(t)) {
    const i = Object.values(t).map((s) => typeof s == "string" ? s : typeof s == "boolean" && s ? "Y" : "").filter((s) => s !== "");
    return i.length > 0 ? i.join("|") : e;
  }
  return e;
}, bl = (t, e) => {
  const i = t;
  i.extras || (i.extras = {}), i.extras[e] || (i.extras[e] = {});
  const s = i.extras[e];
  $s(e) && (s.faces || (s.faces = {})), Ns(e) && (s.sides || (s.sides = {}));
}, wl = (t, e, i) => {
  bl(t, e);
  const n = t.extras[e], { scope: o } = Te(i);
  return o === "face" ? {
    extraContainer: n.faces || {}
  } : {
    extraContainer: n.sides || {}
  };
}, dc = (t, e, i) => {
  const s = Pt(t, e, i);
  if (s == null || s === !1 || s === "")
    return !1;
  if (typeof s != "object" || Array.isArray(s))
    return typeof s == "boolean" ? s : typeof s == "string" ? s.trim() !== "" : !!s;
  const n = pe(e);
  if (!n || !n.labels || n.labels.length === 0)
    return !!s;
  const o = s, r = [];
  for (const l of n.labels) {
    const c = o[l];
    !c || c === "" || r.push(String(c).trim());
  }
  if (r.length === 0)
    return !1;
  const a = r.join("|");
  return n.pricing && a in n.pricing ? !0 : n.labels.every((l) => {
    const c = o[l];
    return !(c == null || c === !1 || c === "" || typeof c == "string" && c.trim() === "");
  });
}, Sl = (t, e, i, s, n) => {
  const o = pe(e);
  if (o) {
    const r = Pt(t, e, i);
    if (r !== null) {
      if (typeof r == "boolean")
        return r;
      if (typeof r == "string") {
        const a = o.labels.indexOf(s);
        return a !== -1 && o.options[a] && Array.isArray(o.options[a]) && !o.options[a].includes(r) ? null : r;
      }
      if (typeof r == "object" && s in r) {
        const a = r[s];
        if (a === !0) {
          const l = o.labels.indexOf(s);
          if (l !== -1 && o.options[l] && Array.isArray(o.options[l])) {
            const c = o.options[l];
            if (c.length === 1)
              return c[0];
          }
          return s;
        }
        if (typeof a == "string") {
          const l = o.labels.indexOf(s);
          if (l !== -1 && o.options[l] && Array.isArray(o.options[l]) && !o.options[l].includes(a))
            return null;
        }
        return a;
      }
    }
  }
  return !1;
}, fc = (t, e, i, s, n, o, r) => {
  if (pe(e))
    switch (Ol(e)) {
      case "boolean":
        $t(t, e, i, !!n);
        break;
      case "string":
        $t(t, e, i, String(n));
        break;
      case "object":
        {
          let c = Pt(t, e, i) || {};
          typeof c != "object" && (c = {}), c[s] = n, $t(t, e, i, c);
        }
        break;
    }
}, xl = (t, e, i, s) => {
  Tl(t, e, i);
}, hc = (t, e, i, s, n) => {
  if (i.length === 0) return null;
  const o = i.map((r) => Sl(t, e, r, s));
  if (n === "boolean" || n === "single") {
    const r = o.every((l) => !!l), a = o.every((l) => !l);
    return r ? !0 : a ? !1 : null;
  }
  if (n === "multiple") {
    const r = o[0];
    return o.every((l) => l === r) ? r : null;
  }
  return null;
}, pc = (t, e, i, s) => {
  i.forEach((n) => {
    xl(t, e, n);
  });
}, mc = (t, e, i, s, n, o) => {
  const r = Pt(t, e, i), a = [];
  if (r && o?.length)
    if (typeof r == "object" && !Array.isArray(r)) {
      const c = r;
      for (const f of o) {
        const d = c[f];
        if (!d) {
          a.push("");
          continue;
        }
        if (d === !0) {
          const y = pe(e), g = y?.labels.indexOf(f) ?? -1, v = g !== -1 && y?.options[g], D = v?.length === 1 ? v[0] : f;
          a.push(D);
          continue;
        }
        a.push(String(d));
      }
    } else if (typeof r == "string") {
      const c = r.split("|");
      o.forEach((f, d) => {
        a.push(c[d] || "");
      });
    } else
      a.push(String(r));
  else if (r)
    if (typeof r == "string" && o?.length) {
      const c = r.split("|");
      o.forEach((f, d) => {
        a.push(c[d] || "");
      });
    } else
      a.push(String(r));
  const l = a.filter((c) => c && typeof c == "string" && c.trim() !== "");
  if (!Array.isArray(l) || !l.length)
    return !1;
  if (!s)
    return 0;
  try {
    const c = l.map((d, y) => {
      if (typeof d == "boolean" && d === !0 && n) {
        const g = n[y];
        if (g && g.length === 1)
          return String(g[0]);
      }
      return String(d);
    });
    return s(e, c) ?? !1;
  } catch (c) {
    return console.error("Error calculating extras price:", c), !1;
  }
}, gc = (t, e, i) => {
  const s = /* @__PURE__ */ new Set(), n = ae(e);
  if (t.forEach((o) => {
    const a = o.extras[e];
    a && (n.faces && "faces" in a && a.faces && Object.values(a.faces).forEach((l) => {
      typeof l == "string" && l.trim() && l !== "Y" && s.add(l);
    }), n.sides && "sides" in a && a.sides && Object.values(a.sides).forEach((l) => {
      typeof l == "string" && l.trim() && l !== "Y" && s.add(l);
    }));
  }), s.size > 0) {
    const o = [.../* @__PURE__ */ new Set([...i.value, ...Array.from(s)])];
    i.value = o;
  }
}, yc = (t, e, i, s) => {
  const n = s[0], o = ae(e);
  n && t.forEach((r) => {
    const l = r.extras[e];
    if (!l) return;
    l.options || (l.options = {});
    const c = l.options;
    if (o.faces && l.faces) {
      c.faces || (c.faces = {});
      for (const f in l.faces)
        l.faces[f] === !0 && (l.faces[f] = i);
    }
    if (o.sides && l.sides) {
      c.sides || (c.sides = {});
      for (const f in l.sides)
        l.sides[f] === !0 && (l.sides[f] = i);
    }
  });
}, bc = (t, e, i) => {
  const s = ae(e);
  t.forEach((n) => {
    const r = n.extras[e];
    if (r) {
      if (r.options || (r.options = {}), s.faces && r.faces)
        for (const a in r.faces)
          r.faces[a] === i && (r.faces[a] = !0);
      if (s.sides && r.sides)
        for (const a in r.sides)
          r.sides[a] === i && (r.sides[a] = !0);
    }
  });
}, vl = (t, e, i, s = !1) => {
  const n = ae(e), o = t;
  o.extras[e] || (o.extras[e] = {});
  const r = o.extras[e];
  r.options || (r.options = {});
  const a = r.options;
  if ($s(e) && (r.faces || (r.faces = {}), a.faces || (a.faces = {})), Ns(e) && (r.sides || (r.sides = {}), a.sides || (a.sides = {})), s) {
    if (n.faces && r.faces) {
      for (const l in r.faces) {
        const c = r.faces[l];
        typeof c == "string" && (r.faces[l] = c.trim() !== "");
      }
      a.faces && Object.keys(a.faces).forEach((l) => {
        l !== "all" && delete a.faces[l];
      });
    }
    if (n.sides && r.sides) {
      for (const l in r.sides) {
        const c = r.sides[l];
        typeof c == "string" && (r.sides[l] = c.trim() !== "");
      }
      a.sides && Object.keys(a.sides).forEach((l) => {
        l !== "all" && delete a.sides[l];
      });
    }
  } else
    n.faces && a.faces, n.sides && a.sides;
}, wc = (t, e, i, s = [], n = []) => {
  const o = yl(i, n);
  vl(t, e, o === "boolean" ? [] : s, o === "boolean");
}, kl = (t) => t ? typeof t == "string" ? t.includes("|") ? t.split("|") : [t] : typeof t == "boolean" ? t ? ["true"] : [] : typeof t == "object" && !Array.isArray(t) && t !== null ? Object.values(t).filter((e) => e != null && e !== "" && e !== !1).map((e) => String(e)) : [String(t)] : [], Sc = (t, e) => new Set(Object.keys(t || {})), Il = (t, e) => {
  const { extraType: i, pricing: s, codes: n, findExtrasPrice: o } = e, r = Object.keys(s || {}), a = r.length ? Math.max(...r.map((T) => T.split("|").length)) : 0, l = kl(t), c = l.length, f = { parts: l, selectedLevels: c, maxPricingLevels: a, missingLevels: 0, matchingKeyCount: 0, hasValidPrice: !1 };
  if (c === 0) return { ...f, status: "empty" };
  if (n) {
    const T = new Set(Object.values(n));
    if (c === 1 && T.has(l[0]))
      return { ...f, status: "complete", hasValidPrice: !0 };
  }
  if (a <= 1) return { ...f, status: "complete", hasValidPrice: !0 };
  const d = l.filter((T) => T.trim() !== ""), y = d.join("|");
  let g = !1;
  if (o)
    try {
      const T = o(i, d);
      g = T !== null && T > 0;
    } catch {
      g = !1;
    }
  !g && s[y] !== void 0 && (g = !0);
  let v = 0, D = !1;
  if (c < a) {
    const T = l.join("|");
    v = r.filter((C) => C === T || C.startsWith(T + "|")).length, v === 1 && (D = !0);
  }
  if (!(!g && !D))
    return { ...f, status: "complete", matchingKeyCount: v, hasValidPrice: g };
  const m = c < a && v > 1;
  return {
    ...f,
    status: m ? "incomplete" : "invalid",
    missingLevels: m ? a - c : 0,
    matchingKeyCount: v,
    hasValidPrice: g
  };
}, xc = (t, e, i, s, n) => {
  if (!i || !Object.keys(i).length)
    return { valid: !0, messages: [], incompleteLocations: [] };
  const o = [], r = [], a = pl(e), l = Object.keys(i), c = Math.max(...l.map((d) => d.split("|").length));
  if (c <= 1)
    return { valid: !0, messages: [], incompleteLocations: [] };
  for (const d of a) {
    const { extraContainer: y } = wl(t, e, d), { key: g } = Te(d), v = y[g];
    if (!v)
      continue;
    const D = Il(v, {
      extraType: e,
      pricing: i,
      codes: n,
      findExtrasPrice: s
    });
    if (D.status === "empty" || D.status === "complete")
      continue;
    const { parts: W, selectedLevels: m, hasValidPrice: T } = D, C = D.status === "incomplete";
    let E = "";
    if (C) {
      const F = D.missingLevels, U = W.join(", ");
      E = `${e} selection incomplete for ${d}. Selected: "${U}" but ${F} more level${F > 1 ? "s" : ""} required.`;
    } else m >= c && (E = `${e} selection invalid for ${d}. No pricing available for "${W.join(", ")}".`);
    m > 0 && !T && (r.push(d), o.push(E || `${e} pricing incomplete for ${d}: ${m}/${c} levels selected`));
  }
  return { valid: r.length === 0, messages: o, incompleteLocations: r };
}, vc = (t, e, i) => !i || !i[e] ? { valid: !0, violations: [] } : Pl(t, i[e]), Pl = (t, e) => {
  if (!e)
    return { valid: !0, violations: [] };
  const i = [], s = (r, a, l) => {
    a == null || l === void 0 || (l.min !== void 0 && a < l.min && i.push({ dimension: r, value: a, constraint: "min", limit: l.min }), l.max !== void 0 && a > l.max && i.push({ dimension: r, value: a, constraint: "max", limit: l.max }));
  };
  s("longSide", t.longSide, e.longSide), s("shortSide", t.shortSide, e.shortSide);
  const n = typeof t.t == "string" ? parseFloat(t.t) : t.t;
  isNaN(n) || s("t", n, e.t);
  const o = t.machining;
  if (o) {
    const r = typeof o.toData == "function" ? o.toData() : o, a = Array.isArray(r?.holes) ? r.holes.length : 0, l = Array.isArray(r?.hingeHoles) ? r.hingeHoles.length : 0, c = r?.corners ?? {}, f = Object.values(c).filter(
      (d) => d && d.type !== null && d.type !== void 0 && d.size > 0
    ).length;
    s("holes", a, e.holes), s("hingeHoles", l, e.hingeHoles), s("corners", f, e.corners);
  } else
    s("holes", 0, e.holes), s("hingeHoles", 0, e.hingeHoles), s("corners", 0, e.corners);
  return {
    valid: i.length === 0,
    violations: i,
    message: e.message
  };
}, Gs = (t, e) => al({
  dimensionName: ul(t.dimension),
  constraint: t.constraint,
  limit: t.limit,
  value: t.value,
  subject: e,
  kind: dl(t.dimension) ? "count" : "length"
}), kc = (t) => Gs(t), Ic = (t, e, i) => Gs(e, gl(t));
function Pc(t, e = "banding") {
  const i = t.extras?.[e];
  if (!i?.sides) return;
  const s = i.sides, n = s.l1, o = s.l2, r = s.w1, a = s.w2;
  s.l1 = r, s.l2 = a, s.w1 = n, s.w2 = o;
}
const Tc = (t) => ["all", "faces", "sides"].includes(t) ? !1 : !t.includes(".");
let Xt = null;
const Oc = (t) => {
  Xt = t;
}, pe = (t) => Xt ? Xt.getExtrasConfig(t) : null, $t = (t, e, i, s) => {
  t.extras || (t.extras = {}), t.extras[e] || (t.extras[e] = { sides: {}, faces: {} });
  const { scope: n, key: o } = Te(i), r = n === "face" ? t.extras[e].faces : t.extras[e].sides;
  r[o] = s;
}, Pt = (t, e, i) => {
  const { scope: s, key: n } = Te(i);
  return (s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides)?.[n] ?? null;
}, Tl = (t, e, i) => {
  const { scope: s, key: n } = Te(i), o = s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides;
  o && n in o && delete o[n];
}, Ol = (t) => {
  const e = pe(t);
  return !e || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 1 && e.options[0][0] === !0 || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 0 ? "boolean" : e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].every((i) => typeof i == "string") ? "string" : e.options.length > 1 ? "object" : "string";
};
class ze extends gt {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Sr;
  static computedProperties = {
    ...gt.computedProperties,
    ...xr
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
      Ee.includes(s) || i.push(new b({
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
      const s = i, n = pe("banding");
      if (n && n.labels && n.labels.length > 0) {
        const r = n.labels.map((a) => {
          const l = s[a];
          return typeof l == "string" ? l : typeof l == "boolean" && l ? "Y" : "";
        }).filter((a) => a !== "");
        return r.length > 0 ? r.join("|") : !1;
      }
      const o = Object.values(s).map((r) => typeof r == "string" ? r : typeof r == "boolean" && r ? "Y" : "").filter((r) => r !== "");
      return o.length > 0 ? o.join("|") : !1;
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
    for (const i of Ee)
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
    return new ze(e);
  }
  /**
   * Create empty banding
   */
  static empty() {
    return new ze();
  }
  /**
   * Create with all sides
   */
  static allSides(e = !0) {
    const i = new ze();
    return i.setAllSides(e), i;
  }
}
const ie = (t) => {
  if (t == null || t === "") return;
  const e = typeof t == "number" ? t : parseFloat(String(t));
  return Number.isFinite(e) ? e : void 0;
};
class Ae extends M {
  // Zod schema for validation and serialization
  static schema = kr;
  static computedProperties = Ir;
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
   * Validate the corner.
   * @param shape  when provided, the size is checked against the part's shortest side
   * @param limits optional saw-profile limits, e.g. `{ size: { min, max } }`
   */
  validate(e, i) {
    const s = [];
    if (this.type && this.size !== null && this.size <= 0 && s.push(new b({
      message: "Size must be positive",
      type: "error",
      field: [["size"]]
    })), (this.index < 0 || this.index > 3) && s.push(new b({
      message: "Corner index must be between 0 and 3",
      type: "error"
    })), !!this.type && this.size !== null && (this.size ?? 0) > 0) {
      const o = this.size;
      if (e) {
        const l = e.longSide ?? e.l ?? 0, c = e.shortSide ?? e.w ?? 0, f = Math.min(l || 1 / 0, c || 1 / 0);
        Number.isFinite(f) && o > f / 2 && s.push(new b({
          message: `Size cannot exceed half of the shortest side (${f / 2})`,
          type: "error",
          field: [["size"]]
        }));
      }
      const r = ie(i?.size?.min), a = ie(i?.size?.max);
      r !== void 0 && o < r && s.push(new b({
        message: `Size must be at least ${r}`,
        type: "error",
        field: [["size"]]
      })), a !== void 0 && o > a && s.push(new b({
        message: `Size must be at most ${a}`,
        type: "error",
        field: [["size"]]
      }));
    }
    return this.issues = s, s;
  }
  /**
   * Validate against shape dimensions (legacy entry point — delegates to validate)
   */
  validateAgainstShape(e, i) {
    return this.validate({ longSide: e, shortSide: i });
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
    return new Ae(e);
  }
  /**
   * Create a radius corner
   */
  static radius(e, i) {
    return new Ae({ type: "radius", size: e, index: i });
  }
  /**
   * Create a bevel corner
   */
  static bevel(e, i) {
    return new Ae({ type: "bevel", size: e, index: i });
  }
}
class yt extends M {
  static schema = _r;
  static computedProperties = Lr;
  getType() {
    return "groove";
  }
  constructor(e = {}) {
    super(e), this.validate();
  }
  /**
   * Validate the groove.
   * @param shape  when provided, the groove is bounds-checked against the part
   * @param limits optional saw-profile limits, e.g. `{ depth: { min, max } }`
   */
  validate(e, i) {
    const s = [];
    if (this.position < 0 && s.push(new b({
      message: "Position cannot be negative",
      type: "error",
      field: [["position"]]
    })), this.width <= 0 && s.push(new b({
      message: "Width must be positive",
      type: "error",
      field: [["width"]]
    })), this.depth <= 0 && s.push(new b({
      message: "Depth must be positive",
      type: "error",
      field: [["depth"]]
    })), this.start < 0 && s.push(new b({
      message: "Start offset cannot be negative",
      type: "error",
      field: [["start"]]
    })), this.length !== void 0 && this.length < 0 && s.push(new b({
      message: "Length cannot be negative",
      type: "error",
      field: [["length"]]
    })), e) {
      const r = e.longSide ?? e.l ?? 0, a = e.shortSide ?? e.w ?? 0, l = e.t ?? 0, c = this.getDrawRect(e);
      r > 0 && a > 0 && (c.x < 0 || c.y < 0 || c.x + c.w > r || c.y + c.h > a) && s.push(new b({
        message: "Groove extends beyond the part",
        type: "error",
        field: [["position"], ["start"], ["length"]]
      })), l > 0 && this.depth >= l && s.push(new b({
        message: "Depth cannot exceed material thickness",
        type: "error",
        field: [["depth"]]
      }));
    }
    const n = ie(i?.depth?.min), o = ie(i?.depth?.max);
    return n !== void 0 && this.depth < n && s.push(new b({
      message: `Depth must be at least ${n}`,
      type: "error",
      field: [["depth"]]
    })), o !== void 0 && this.depth > o && s.push(new b({
      message: `Depth must be at most ${o}`,
      type: "error",
      field: [["depth"]]
    })), this.issues = s, s;
  }
  /**
   * Check if groove should be shown on a given face
   */
  shouldShow(e) {
    return this.face === e;
  }
  /**
   * Get the effective length of the groove given the shape
   */
  getEffectiveLength(e) {
    if (this.length !== void 0 && this.length !== null)
      return this.length;
    const i = this.direction === "l" ? e.longSide ?? 0 : e.shortSide ?? 0;
    return Math.max(0, i - this.start);
  }
  /**
   * Get drawing coordinates for the groove rectangle
   * Returns { x, y, w, h } in shape coordinates (not scaled)
   */
  getDrawRect(e) {
    const i = this.getEffectiveLength(e);
    return this.direction === "l" ? {
      x: this.start,
      y: this.position - this.width / 2,
      w: i,
      h: this.width
    } : {
      x: this.position - this.width / 2,
      y: this.start,
      w: this.width,
      h: i
    };
  }
  static fromData(e) {
    return new yt(e);
  }
}
class ve extends M {
  // Zod schema for validation and serialization
  static schema = jr;
  static computedProperties = zr;
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
    * Validate the hole.
    * @param shape  when provided, the hole is bounds-checked against the part
    * @param limits optional saw-profile limits, e.g. `{ diameter: { min, max }, depth: { min, max } }`
    */
  validate(e, i) {
    const s = [], n = this.diameter / 2;
    if ((this.x < 0 || this.y < 0) && s.push(new b({
      message: "Position cannot be negative",
      type: "error",
      field: [["x"], ["y"]]
    })), this.diameter <= 0 && s.push(new b({
      message: "Diameter must be positive",
      type: "error",
      field: [["diameter"]]
    })), this.depth !== void 0 && this.depth < 0 && s.push(new b({
      message: "Depth cannot be negative",
      type: "error",
      field: [["depth"]]
    })), e) {
      const o = e.longSide ?? e.l ?? 0, r = e.shortSide ?? e.w ?? 0, a = e.t ?? 0;
      if (this.isEdgeHole()) {
        const l = this.edge === "l1" || this.edge === "l2", c = l ? this.x : this.y, f = l ? o : r, d = l ? r : o;
        f > 0 && (c - n < 0 || c + n > f) && s.push(new b({
          message: "Edge hole extends beyond the edge",
          type: "error",
          field: [l ? ["x"] : ["y"]]
        })), d > 0 && this.depth !== void 0 && this.depth > d && s.push(new b({
          message: "Edge hole depth exceeds the part",
          type: "error",
          field: [["depth"]]
        }));
      } else
        o > 0 && (this.x - n < 0 || this.x + n > o) && s.push(new b({
          message: "Hole extends beyond the part length",
          type: "error",
          field: [["x"]]
        })), r > 0 && (this.y - n < 0 || this.y + n > r) && s.push(new b({
          message: "Hole extends beyond the part width",
          type: "error",
          field: [["y"]]
        })), a > 0 && this.depth !== void 0 && this.depth > a && s.push(new b({
          message: "Hole depth exceeds material thickness",
          type: "error",
          field: [["depth"]]
        }));
    }
    if (i) {
      const o = ie(i.diameter?.min), r = ie(i.diameter?.max);
      if (o !== void 0 && this.diameter < o && s.push(new b({
        message: `Diameter must be at least ${o}`,
        type: "error",
        field: [["diameter"]]
      })), r !== void 0 && this.diameter > r && s.push(new b({
        message: `Diameter must be at most ${r}`,
        type: "error",
        field: [["diameter"]]
      })), this.depth !== void 0) {
        const a = ie(i.depth?.min), l = ie(i.depth?.max);
        a !== void 0 && this.depth < a && s.push(new b({
          message: `Depth must be at least ${a}`,
          type: "error",
          field: [["depth"]]
        })), l !== void 0 && this.depth > l && s.push(new b({
          message: `Depth must be at most ${l}`,
          type: "error",
          field: [["depth"]]
        }));
      }
    }
    return this.issues = s, s;
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
    * Whether this hole is bored into an edge (rather than a face).
    */
  isEdgeHole() {
    return this.edge !== null && this.edge !== void 0;
  }
  /**
    * Footprint of an edge bore in unscaled shape coordinates, viewed from the
    * face — a rectangle running from the edge inward by `depth` and spanning the
    * `diameter` along the edge, centred on the along-position. Null for face holes.
    */
  getEdgeBoreRect(e) {
    if (!this.isEdgeHole()) return null;
    const i = e.longSide ?? e.l ?? 0, s = e.shortSide ?? e.w ?? 0, n = this.depth && this.depth > 0 ? this.depth : this.diameter, o = this.diameter / 2;
    switch (this.edge) {
      case "l1":
        return { x: this.x - o, y: 0, w: this.diameter, h: n };
      case "l2":
        return { x: this.x - o, y: s - n, w: this.diameter, h: n };
      case "w1":
        return { x: 0, y: this.y - o, w: n, h: this.diameter };
      case "w2":
        return { x: i - n, y: this.y - o, w: n, h: this.diameter };
      default:
        return null;
    }
  }
  /**
    * Check if hole should be shown on a given face. Edge holes are always shown
    * (they sit in the panel thickness, visible from either face).
    */
  shouldShow(e, i) {
    return !!(this.isEdgeHole() || this.face === i || this.isThroughShape(e) === !0);
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
    return new ve({ x: e, y: i, diameter: s, face: n });
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new ve(e);
  }
  get area() {
    const e = this.diameter / 2;
    return Math.PI * e * e;
  }
}
class je extends M {
  // Zod schema for validation and serialization
  static schema = $r;
  static computedProperties = Nr;
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
   * Validate the hinge hole set.
   * @param shape  when provided, the holes are bounds-checked against the part
   * @param limits optional saw-profile limits, e.g. `{ diameter: { min, max }, holeDistance: { min } }`
   */
  validate(e, i) {
    const s = [];
    if (this.position < 0 && s.push(new b({
      message: "Position cannot be negative",
      type: "error",
      field: [["position"]]
    })), this.numHoles <= 0 && s.push(new b({
      message: "Number of holes must be positive",
      type: "error",
      field: [["numHoles"]]
    })), this.diameter <= 0 && s.push(new b({
      message: "Diameter must be positive",
      type: "error",
      field: [["diameter"]]
    })), this.hingeLength <= 0 && s.push(new b({
      message: "Hinge length must be positive",
      type: "error",
      field: [["hingeLength"]]
    })), this.depth !== void 0 && this.depth < 0 && s.push(new b({
      message: "Depth cannot be negative",
      type: "error",
      field: [["depth"]]
    })), this.numHoles > 1) {
      const a = this.hingeLength - 2 * this.outerSpacing;
      this.diameter * this.numHoles > a && s.push(new b({
        message: "Holes do not fit within hinge length",
        type: "error",
        field: [["hingeLength"], ["outerSpacing"]]
      }));
    }
    const n = ie(i?.holeDistance?.min) ?? this.minimumHoleDistance;
    n !== void 0 && this.numHoles > 1 && (this.hingeLength - 2 * this.outerSpacing) / (this.numHoles - 1) < n && s.push(new b({
      message: `Holes must be at least ${n} apart`,
      type: "error",
      field: [["outerSpacing"], ["numHoles"]]
    }));
    const o = ie(i?.diameter?.min), r = ie(i?.diameter?.max);
    if (o !== void 0 && this.diameter < o && s.push(new b({
      message: `Diameter must be at least ${o}`,
      type: "error",
      field: [["diameter"]]
    })), r !== void 0 && this.diameter > r && s.push(new b({
      message: `Diameter must be at most ${r}`,
      type: "error",
      field: [["diameter"]]
    })), e) {
      const a = e.longSide ?? e.l ?? 0, l = e.shortSide ?? e.w ?? 0, c = e.t ?? 0, f = this.side === "l1" || this.side === "l2", d = f ? a : l, y = f ? l : a, g = this.diameter / 2;
      y > 0 && (this.distanceFromEdge - g < 0 || this.distanceFromEdge + g > y) && s.push(new b({
        message: "Distance from edge places holes off the part",
        type: "error",
        field: [["distanceFromEdge"]]
      }));
      const v = this.position + this.outerSpacing, D = this.position + this.hingeLength - this.outerSpacing;
      d > 0 && (v - g < 0 || D + g > d) && s.push(new b({
        message: "Hinge holes extend beyond the edge",
        type: "error",
        field: [["position"], ["hingeLength"]]
      })), c > 0 && this.depth !== void 0 && this.depth > c && s.push(new b({
        message: "Hole depth exceeds material thickness",
        type: "error",
        field: [["depth"]]
      }));
    }
    return this.issues = s, s;
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
    return this.generateHoles(i, s).map((o) => new ve(o));
  }
  /**
   * Generate individual holes from this hinge hole set
   */
  generateHoles(e, i) {
    const s = [];
    if (this.numHoles <= 0) return s;
    const n = this.numHoles > 1 ? (this.hingeLength - 2 * this.outerSpacing) / (this.numHoles - 1) : 0;
    for (let o = 0; o < this.numHoles; o++) {
      const r = this.outerSpacing + o * n;
      let a, l;
      switch (this.side) {
        case "l1":
          a = this.position + r, l = this.distanceFromEdge;
          break;
        case "l2":
          a = this.position + r, l = i - this.distanceFromEdge;
          break;
        case "w1":
          a = this.distanceFromEdge, l = this.position + r;
          break;
        case "w2":
          a = e - this.distanceFromEdge, l = this.position + r;
          break;
        default:
          a = 0, l = 0;
      }
      s.push(new ve({
        x: a,
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
    return new je(e);
  }
}
class Dl extends M {
  // Validation properties (issues, warnings) are inherited from validationBasePropertiesSchema
  // via sawPropertiesSchema which extends it - they are initialized automatically
  // when the Zod schema is parsed in the constructor
  // isValid is also provided as a computed property from validationBaseComputedProperties
  // Zod schema for validation and serialization
  static schema = Wt;
  static computedProperties = ua;
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
  static defaults = Wt.parse({});
  constructor(e = {}) {
    super(e), zt(this, { door: "runtime", source: "Saw" });
  }
  /**
   * Get entity type
   */
  getType() {
    return p.Saw;
  }
  /**
    * Validate the saw data
    * For backward compatibility, returns Issue[] synchronously
    * Delegates to async validation which uses the schema
    */
  validate() {
    return this.issues = [], this.warnings = [], this.bladeWidth < 0 && this.issues.push(new b({
      message: "Blade width cannot be negative",
      field: [["bladeWidth"]],
      type: "error",
      shouldTranslate: !1
    })), this.issues;
  }
}
function wi(t, e, i = "decimal") {
  const s = { ...t };
  for (const [n, o] of Object.entries(e)) {
    const r = t[n];
    switch (o.type) {
      case "number":
        r != null ? s[n] = typeof r == "string" ? k({ v: r, nf: i }) : r : r === null && (s[n] = null);
        break;
      case "trim":
        if (r) {
          const a = {};
          for (const [l, c] of Object.entries(r))
            a[l] = typeof c == "string" ? k({ v: c, nf: i }) : c;
          s[n] = a;
        }
        break;
      case "omit":
        delete s[n];
        break;
      case "set":
        s[n] = o.value;
        break;
      case "transform":
        s[n] = o.transform(r);
        break;
      case "rename":
        r !== void 0 && (s[o.to] = r, delete s[n]);
        break;
    }
  }
  return s;
}
const Cl = {
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
  materialId: { type: "omit" },
  // CLE materials-list reference; material/t already resolved onto the row
  readonly: { type: "omit" }
}, Al = {
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
  code: { type: "pass" },
  // Material code from supplier
  // Remove UI-only fields
  selected: { type: "omit" },
  multiEdit: { type: "omit" },
  materialId: { type: "omit" },
  // CLE materials-list reference; material/t already resolved onto the row
  readonly: { type: "omit" }
}, El = {
  // Numeric field that needs conversion
  bladeWidth: { type: "number" },
  // Stack height should ensure it's a number
  stackHeight: { type: "transform", transform: (t) => typeof t == "number" ? t : t ? Number(t) : 100 },
  // Convert options field to handle minSpacing string/number conversions
  options: {
    type: "transform",
    transform: (t) => ({
      ...t,
      minSpacing: typeof t?.minSpacing == "string" ? k({ v: t.minSpacing, nf: "decimal" }) : t?.minSpacing ?? 0,
      minSpacingDimension: {
        dimension: typeof t?.minSpacingDimension?.dimension == "string" ? k({ v: t.minSpacingDimension.dimension, nf: "decimal" }) : t?.minSpacingDimension?.dimension ?? 0,
        minSpacing: typeof t?.minSpacingDimension?.minSpacing == "string" ? k({ v: t.minSpacingDimension.minSpacing, nf: "decimal" }) : t?.minSpacingDimension?.minSpacing ?? 0
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
function bt() {
  this.issues = [], this.warnings && (this.warnings = []);
}
function De(t) {
  t.type === "warning" && this.warnings ? this.warnings.push(t) : this.issues.push(t);
}
function He(t) {
  return t.issues.map((e) => {
    const i = {}, s = e.path.length > 0 ? e.path[e.path.length - 1] : "field", n = typeof s == "symbol" ? String(s) : s;
    if (i.field = `fields.${n}`, e.code === "too_small") {
      const o = e;
      o.minimum !== void 0 && (i.minimum = o.minimum, i.min = o.minimum);
    }
    if (e.code === "too_big") {
      const o = e;
      o.maximum !== void 0 && (i.maximum = o.maximum, i.max = o.maximum);
    }
    return new b({
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
function zi(t, e) {
  const i = t.safeParse(e);
  return i.success ? [] : He(i.error);
}
const Bs = {
  clearValidation: bt,
  addIssue: De,
  validateWithSchema: zi,
  zodErrorsToIssues: He,
  /**
   * Run standard validation flow
   */
  runValidation(t, e = {}) {
    return bt.call(this), e.skipSchemaValidation || zi(t, this).forEach((s) => De.call(this, s)), this.issues || [];
  }
};
class Dc extends M {
  // Required: Define schema and computed properties for SchemaClass
  static schema = _i;
  static computedProperties = Yo;
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  /**
   * The saw-rules hits recorded by the last construction / update — what the registry
   * defaulted, clamped or coerced on this saw, in order. Surfaced by `validate()` as
   * warnings so an API caller (and the editors) are told what was rewritten and why.
   * Underscore-prefixed: excluded from serialisation.
   */
  _ruleHits = [];
  constructor(e = {}) {
    super(e), this._ruleHits = zt(this, { door: "input", source: "InputSaw" });
  }
  /** The rule hits from the last construction / update (read-only view). */
  get ruleHits() {
    return this._ruleHits;
  }
  /**
   * Get entity type
   */
  getType() {
    return p.InputSaw;
  }
  // Validation properties (issues, warnings, isValid) come from the schema via SchemaClass
  // clearValidation and addIssue are provided by validation-helpers
  /**
   * Validate to perform InputSaw-specific validation
   * Implements the Validatable interface requirement
   */
  validate(e) {
    if (bt.call(this), e?.skipSchemaValidation || Bs.runValidation.call(
      this,
      _i,
      e
    ), !e?.skipBusinessValidation) {
      if (this.bladeWidth !== void 0 && this.bladeWidth !== null) {
        const i = k({ v: this.bladeWidth });
        i === null || isNaN(i) || i < 0 ? De.call(this, new b({
          message: "Blade width must be a non-negative number",
          type: "error",
          field: [["bladeWidth"]]
        })) : i > 100 && De.call(this, new b({
          message: "Blade width seems unusually large (> 100)",
          type: "warning",
          field: [["bladeWidth"]]
        }));
      }
      for (const i of this._ruleHits)
        i.severity === "warning" && De.call(this, new b({
          message: `[${i.ruleId}] ${i.message}`,
          type: "warning",
          category: ["saw"],
          field: i.paths.map((s) => s.split(".")),
          shouldTranslate: !1
        }));
      this.stackHeight !== void 0 && this.stackHeight !== null && (this.stackHeight < 1 ? De.call(this, new b({
        message: "Stack height must be at least 1",
        type: "error",
        field: [["stackHeight"]]
      })) : this.stackHeight > 1e3 && De.call(this, new b({
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
    super.update(e), this._ruleHits = zt(this, { door: "input", source: "InputSaw.update" }), this.validate();
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
    const e = this.toData(), i = wi(
      e,
      El
    );
    return new Dl(i);
  }
}
class wt extends M {
  // Zod schema for validation and serialization
  static schema = oa;
  static computedProperties = aa;
  /**
   * Get entity type (required for AutoSerializable)
   */
  getType() {
    return p.Machining;
  }
  constructor(e = {}) {
    super(e);
  }
  /**
    * Validate machining operations - all or specific type
    */
  validate(e, i, s) {
    const n = [], o = (r, a) => (r.forEach((l) => {
      l.index = [a];
    }), r);
    if (i === "holes")
      this.holes.forEach((r, a) => n.push(...o(r.validate(e, s), a)));
    else if (i === "hingeHoles")
      this.hingeHoles.forEach((r, a) => n.push(...o(r.validate(e, s), a)));
    else if (i === "corners")
      this.corners.forEach((r, a) => n.push(...o(r.validate(e, s), a)));
    else if (i === "grooves")
      this.grooves.forEach((r, a) => n.push(...o(r.validate(e, s), a)));
    else {
      const r = s;
      n.push(...this.validate(e, "holes", r?.holes)), n.push(...this.validate(e, "hingeHoles", r?.hingeHoles)), n.push(...this.validate(e, "corners", r?.corners)), n.push(...this.validate(e, "grooves", r?.grooves));
    }
    return i || (this.issues = n), n;
  }
  /**
    * Add a hole
    */
  addHole(e) {
    this.holes.push(e instanceof ve ? e : new ve(e)), this.validate();
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
    this.hingeHoles.push(e instanceof je ? e : new je(e)), this.validate();
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
    const i = e instanceof Ae ? e : new Ae(e);
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
    * Add a groove
    */
  addGroove(e) {
    this.grooves.push(e instanceof yt ? e : new yt(e)), this.validate();
  }
  /**
    * Remove a groove by index
    */
  removeGroove(e) {
    return e >= 0 && e < this.grooves.length ? (this.grooves.splice(e, 1), this.validate(), !0) : !1;
  }
  /**
    * Get all hinge holes as individual Hole objects.
    * Geometry lives in HingeHole.generateHoles() — the single source of truth.
    */
  getAllHingeHoles(e) {
    const i = e?.l || e?.longSide || 0, s = e?.w || e?.shortSide || 0, n = [];
    return this.hingeHoles.forEach((o) => {
      (o instanceof je ? o : new je(o)).generateHoles(i, s).forEach((a) => n.push(new ve(a)));
    }), n;
  }
  /**
    * Clear all machining
    */
  clear() {
    this.holes = [], this.hingeHoles = [], this.corners = [], this.grooves = [], this.validate();
  }
  // clone() method removed - using base class implementation
  // The base AutoSerializable.clone() properly returns 'this' type
  // toData() is now provided by AutoSerializable base class
  /**
    * Create empty machining
    */
  static empty() {
    return new wt();
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new wt(e);
  }
  get allHoles() {
    return [...this.holes, ...this.getAllHingeHoles()];
  }
  /**
   * Get number of drilled holes — face holes plus every hole a hinge set expands to.
   */
  getNumHoles() {
    const e = (this.holes || []).length, i = (this.hingeHoles || []).reduce(
      (s, n) => s + Math.max(0, n.numHoles || 0),
      0
    );
    return e + i;
  }
  /**
   * Get number of active corner operations (ignores cleared corners).
   */
  getNumCorners() {
    return (this.corners || []).filter(
      (e) => e instanceof Ae ? e.isPresent() : !!e.type && e.size !== null && (e.size ?? 0) > 0
    ).length;
  }
  /**
   * Get number of groove operations.
   */
  getNumGrooves() {
    return (this.grooves || []).length;
  }
}
function Fl(t, e, i) {
  return i ? typeof t == "number" ? isNaN(t) ? null : t : typeof t == "string" ? t : null : e === "decimal" ? t ? k({ v: t, nf: "decimal" }) : null : t;
}
function Ml(t, e, i, s = !1) {
  const n = s ? Object.fromEntries(Ee.map((a) => [a, 0])) : { l1: 0, l2: 0, w1: 0, w2: 0 };
  if (!t) return n;
  const r = t && ("x1" in t || "x2" in t || "y1" in t || "y2" in t) ? {
    // CORRECT mapping: y1→l1, y2→l2, x1→w1, x2→w2
    l1: t.y1 ?? t.l1 ?? 0,
    l2: t.y2 ?? t.l2 ?? 0,
    w1: t.x1 ?? t.w1 ?? 0,
    w2: t.x2 ?? t.w2 ?? 0
  } : t;
  return Object.keys(n).forEach((a) => {
    const l = r[a];
    l == null || l === "" || (n[a] = typeof l == "number" ? l : k({ v: l, nf: "decimal" }) ?? 0);
  }), n;
}
class js extends M {
  // Required: Define schema and computed properties for SchemaClass
  static schema = ht;
  static computedProperties = pi;
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
    const s = { ...e }, n = !!s.skipValidation, o = ["l", "w", "t", "cost"];
    for (const r of o)
      s[r] === null || s[r] === void 0 ? delete s[r] : s[r] !== void 0 && (s[r] = Fl(s[r], i, n), s[r] === null && delete s[r]);
    s.name?.length ? s.name = en(s.name)?.toUpperCase() : s.name = "", s.material ? s.material = s.material.trim().toUpperCase() : s.material = "", typeof s.notes == "string" ? s.notes = s.notes.replace(/,/g, " ") : s.notes = "", s.trim && (s.trim = Ml(s.trim, i, n, !0)), super(s), this.issues || (this.issues = []), this.warnings || (this.warnings = []);
  }
  /**
   * Get entity type
   */
  getType() {
    return p.InputRectangle;
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
    return bt.call(this), e?.skipSchemaValidation || Bs.runValidation.call(
      this,
      ht,
      e
    ), this.issues;
  }
  // isValid is provided as a computed property from validationBaseComputedProperties
  /**
   * Get trimmed dimensions
   */
  get trimmedDimensions() {
    const e = this.longSide, i = this.shortSide, s = k({ v: this.trim.l1 }) ?? 0, n = k({ v: this.trim.l2 }) ?? 0, o = k({ v: this.trim.w1 }) ?? 0, r = k({ v: this.trim.w2 }) ?? 0;
    return {
      name: this.name,
      id: this.id,
      autoId: this.autoId,
      l: e - (o + r),
      w: i - (s + n)
    };
  }
}
class Cc extends js {
  // Required: Define schema and computed properties for SchemaClass
  // Use getters to defer schema access and avoid circular dependency
  static get schema() {
    return At;
  }
  static get computedProperties() {
    return ea;
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
    this.extras || (this.extras = new G()), this.extras.banding = e;
  }
  get finish() {
    return this.extras?.finish;
  }
  set finish(e) {
    this.extras || (this.extras = new G()), this.extras.finish = e;
  }
  get planing() {
    return this.extras?.planing;
  }
  set planing(e) {
    this.extras || (this.extras = new G()), this.extras.planing = e;
  }
  get imageUpload() {
    return this.extras?.imageUpload;
  }
  set imageUpload(e) {
    this.extras || (this.extras = new G()), this.extras.imageUpload = e;
  }
  // Note: Options getters/setters removed - options now centralized in CalculationData.extrasOptions
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}, i = "decimal") {
    const s = {
      ...e,
      // orientationLock transform is now handled by Zod schema
      machining: e.machining || new wt({
        holes: [],
        hingeHoles: [],
        corners: []
      }),
      extras: e.extras || new G()
    };
    super(s, i);
  }
  /**
   * Get entity type
   */
  getType() {
    return p.InputShape;
  }
  /**
    * Apply part trim
    */
  applyPartTrim(e, i) {
    if (!this.readonly)
      if (e = k({ v: e }), this.trim) {
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
      const c = e.fields;
      for (let g = this.issues.length - 1; g >= 0; g--)
        this.issues[g].field.some((v) => c.includes(v[0])) && this.issues.splice(g, 1);
      for (let g = this.warnings.length - 1; g >= 0; g--)
        this.warnings[g].field.some((v) => c.includes(v[0])) && this.warnings.splice(g, 1);
      const f = e.fields.reduce((g, v) => {
        const D = v.split(".")[0];
        return g[D] = !0, g;
      }, {}), y = At.pick(f).safeParse(this.toData());
      if (!y.success) {
        const g = He(y.error);
        this.issues.push(...g);
      }
    } else {
      this.issues.length = 0, this.warnings.length = 0;
      const c = At.safeParse(this.toData());
      if (!c.success) {
        const f = He(c.error);
        this.issues.push(...f);
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
      fields: o = null
    } = e, r = s ?? this.index ?? 0, a = (c) => !o || o.includes(c);
    a("l") && H.l({
      item: this,
      index: r,
      category: ["part"]
    }), a("w") && H.w({
      item: this,
      index: r,
      category: ["part"]
    }), a("t") && H.t({
      item: this,
      index: r,
      category: ["part"],
      saw: e.saw
    }), a("q") && H.q({
      item: this,
      index: r,
      category: ["part"]
    }), a("trim") && H.trim({
      item: this,
      index: r,
      category: ["part"]
    }), !n && i.length > 0, a("customData") && H.customData({
      item: this,
      index: r
    });
    const l = [];
    this.issues.forEach((c, f) => {
      c || l.push(f);
    });
    for (let c = l.length - 1; c >= 0; c--)
      this.issues.splice(l[c], 1);
    return this.issues;
  }
  /**
   * Convert to Shape instance
   */
  toShape(e) {
    const i = wi(
      this.toData(),
      Cl,
      e
    );
    return this.isSquare && (i.orientationLock = null), new it(i);
  }
  changeStockType(e) {
    switch (e) {
      case "sheet":
      case "roll":
        this.orientationLock = "", e === "roll" && (this.t = null);
        break;
      case "linear":
        this.orientationLock = "", this.banding = Object.fromEntries(
          Kt.map((i) => [i, !1])
        );
        break;
    }
  }
}
class Ac extends js {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Et;
  static computedProperties = ta;
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
    return p.InputStock;
  }
  // isSquare is now a computed property inherited from InputRectangle
  /**
   * Validate stock data
   * Overrides parent implementation to add stock-specific validation
   */
  validate(e, i) {
    let s = null, n = null;
    if (e && typeof e == "object" && !("skipSchemaValidation" in e) ? (s = e, n = i || null, e = {}) : (s = e?.saw ?? null, n = e?.index ?? null), this.isNew && !e?.fields)
      return this.issues;
    if (e?.fields && Array.isArray(e.fields)) {
      const f = e.fields;
      for (let g = this.issues.length - 1; g >= 0; g--)
        this.issues[g].field.some((D) => f.includes(D[0])) && this.issues.splice(g, 1);
      for (let g = this.warnings.length - 1; g >= 0; g--)
        this.warnings[g].field.some((D) => f.includes(D[0])) && this.warnings.splice(g, 1);
      const d = this.toData();
      console.log("[InputStock.validate] Field-level validation requested for fields:", e.fields), console.log("[InputStock.validate] Data to validate:", d);
      const y = e.fields.reduce((g, v) => {
        const D = v.split(".")[0];
        return g[D] = !0, g;
      }, {});
      try {
        const g = Et.pick(y);
        console.log("[InputStock.validate] Created partial schema for fields:", Object.keys(y));
        const v = g.safeParse(d);
        if (console.log("[InputStock.validate] Validation result:", v.success ? "SUCCESS" : "FAILED"), v.success)
          console.log("[InputStock.validate] No validation errors found");
        else {
          console.log("[InputStock.validate] Validation errors:", v.error.issues);
          const D = He(v.error);
          this.issues = [...this.issues, ...D];
        }
      } catch (g) {
        console.warn(`Failed to validate fields ${e.fields.join(", ")}:`, g);
      }
      this.isNew && (console.log("[InputStock.validate] Clearing isNew flag"), this.isNew = !1);
    } else {
      this.issues = [], this.warnings = [];
      const f = Et.safeParse(this.toData());
      if (!f.success) {
        const d = He(f.error);
        this.issues = d;
      }
    }
    if (e?.skipBusinessValidation)
      return this.issues;
    const o = n ?? this.index ?? 0, r = e?.fields, a = (f) => !r || r.includes(f);
    ["l", "w", "t"].forEach((f) => {
      a(f) && H[f]({
        item: this,
        saw: s,
        index: o,
        category: ["stock"]
      });
    }), a("grain") && H.grain({
      item: this,
      index: o,
      category: ["stock"]
    }), a("trim") && H.trim({
      item: this,
      index: o,
      category: ["stock"]
    }), a("q") && H.q({
      item: this,
      index: o,
      isWarning: !0,
      category: ["stock"]
    });
    const c = [];
    this.issues.forEach((f, d) => {
      f || c.push(d);
    });
    for (let f = c.length - 1; f >= 0; f--)
      this.issues.splice(c[f], 1);
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
    const o = wi(
      s,
      Al,
      e
    );
    return (i || this.saw) && (o.saw = i || this.saw), new mt(o);
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
const Vi = 0.01;
function _l(t, e = 0) {
  if (!t.length) return { positions: [], xCuts: [], yCuts: [], l: 0, w: 0 };
  let i = 1 / 0, s = 1 / 0;
  for (const d of t)
    i = Math.min(i, d.x), s = Math.min(s, d.y);
  isFinite(i) || (i = 0, s = 0);
  let n = t.map((d) => ({
    ...d,
    x: d.x - i,
    y: d.y - s
  }));
  const o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
  for (const d of n)
    for (const y of n)
      d.autoId !== y.autoId && (Math.abs(d.x + d.l - y.x) < Vi && o.add(d.x + d.l), Math.abs(d.y + d.w - y.y) < Vi && r.add(d.y + d.w));
  const a = [...o].sort((d, y) => d - y), l = [...r].sort((d, y) => d - y);
  e > 0 && (a.length || l.length) && (n = n.map((d) => ({
    ...d,
    x: d.x + a.filter((y) => d.x >= y).length * e,
    y: d.y + l.filter((y) => d.y >= y).length * e
  })));
  let c = 0, f = 0;
  for (const d of n)
    c = Math.max(c, d.x + d.l), f = Math.max(f, d.y + d.w);
  return {
    positions: n.map((d) => ({ autoId: d.autoId, x: d.x, y: d.y, rot: d.rot ?? 0 })),
    xCuts: a,
    yCuts: l,
    l: c,
    w: f
  };
}
const Nt = "Could not resolve every group member — a part is missing or its quantity is below the number used in the group";
class Ec extends M {
  // Required: Define schema and computed properties for SchemaClass
  static schema = sa;
  static computedProperties = na;
  constructor(e = {}) {
    const i = {
      ...e,
      shapes: e.shapes?.map(String) ?? []
    };
    if (super(i), this.validateInputUserGroup(i), e.shapeList?.length) {
      const s = this.validateWithShapes(e.shapeList);
      this.issues.push(...s.filter((n) => !this.issues.find((o) => o.message === n.message)));
    }
  }
  /**
    * Get entity type
    */
  getType() {
    return p.InputUserGroup;
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
    this.clearValidation(), e.q !== void 0 && H.q({ item: e, index: "index" in e && typeof e.index == "number" ? e.index : 0 }).filter((s) => s).forEach((s) => this.addIssue(s));
  }
  /**
    * Validate with actual shape data
    */
  validateWithShapes(e = []) {
    if (!e.length)
      throw new Error("A shapeList is required to validate an InputUserGroup.");
    this.issues = this.issues.filter((o) => !o.category?.includes("group"));
    const i = this.findShapes(e), s = [...this.issues], n = H.groupShapeCount({
      item: this,
      index: 0,
      shapes: i,
      requiredCount: 2
    });
    if (s.push(...n), s.length) return s;
    if (this.positions?.length >= 2) {
      const o = H.groupOverlap({
        item: this,
        index: 0,
        shapes: i,
        positions: this.positions.map((r) => ({
          autoId: r.autoId,
          x: r.x ?? 0,
          y: r.y ?? 0
        }))
      });
      s.push(...o);
    }
    return s;
  }
  /**
    * Find shapes from shape list
    */
  findShapes(e) {
    if (this.shapeIds?.length && e.length) {
      const s = [];
      for (const n of this.shapeIds) {
        const o = e.find((r) => {
          if ("group" in r && r.group?.inUserGroup) return !1;
          const a = s.filter((c) => c === r).length, l = Y(r) ? Math.max(1, Number(r.q) || 1) : 1;
          return a >= l ? !1 : r.autoId === n || r.getBaseAutoId() === n || "id" in r && r.id === n;
        });
        o && (Y(o) || K(o)) && s.push(o);
      }
      return s.length < this.shapeIds.length && !this.issues.some((n) => n.message === Nt) && this.addIssue(new b({
        message: Nt,
        type: "error",
        category: ["group"]
      })), s;
    }
    if (!this.shapes.length) return [];
    const i = [];
    for (const s of this.shapes) {
      const n = e.find((o) => !!(o.autoId === s || String(o.autoId) === String(s) || "id" in o && (o.id === s || String(o.id) === String(s)) || Y(o) && (o.autoId === s || String(o.autoId) === String(s))));
      n && (Y(n) || K(n)) && i.push(n);
    }
    return i;
  }
  /**
   * Populate parent IDs from shape list IDs
   */
  populateParentID(e) {
    e?.length && this?.shapeIds?.length && (this.shapes = this.shapeIds.map((i) => {
      const s = e.find((n) => n.autoId === i || Y(n) && n.autoId === i);
      return s ? (e.indexOf(s) + 1).toString() : null;
    }).filter((i) => i !== null));
  }
  /**
    * Create runtime Group from this user input
    * @param shapeList - List of shapes to create group from (can also be first positional param)
    * @param _groupIndex - Unused, kept for signature compat
    * @param shapeListAlt - Alternative shapeList parameter position
    * @param stock - Optional stock reference for spacing calculations
    */
  toGroup(e, i, s, n) {
    const o = typeof i == "number" ? i : 0;
    if (Array.isArray(e) || (Array.isArray(s) ? e = s : e = []), e.length) {
      const m = e.filter((E) => Y(E) || K(E)), C = this.validateWithShapes(m).filter((E) => E.type === "error" && E.message !== Nt);
      if (C.length > 0)
        throw new Error(`Cannot create Group: ${C[0].message}`);
    }
    const r = this.findShapes(e || []);
    if (r.length === 0)
      throw new Error("No shapes found for Group creation");
    const a = r.map((m) => Y(m) ? m.toShape() : m), l = a[0];
    a.forEach((m) => {
      if (e && Array.isArray(e)) {
        const T = e.findIndex((C) => "group" in C && C.group?.inUserGroup ? !1 : "parentId" in C && "parentId" in m && C.parentId === m.parentId || "id" in C && "id" in m && C.id === m.id);
        T !== -1 && e.splice(T, 1);
      }
      "group" in m && m.group && (m.group.inUserGroup = !0);
    });
    const c = /* @__PURE__ */ new Set(), f = this.positions?.length ? this.positions.map((m) => {
      let T = r.findIndex((E, F) => !c.has(F) && E.autoId === m.autoId);
      T === -1 && (T = r.findIndex((E, F) => !c.has(F) && E.getBaseAutoId() === m.autoId)), T !== -1 && c.add(T);
      const C = T !== -1 ? a[T] : a.find((E) => E.autoId === m.autoId);
      return {
        shape: C,
        position: {
          autoId: C?.autoId || m.autoId,
          x: m.x ?? 0,
          y: m.y ?? 0,
          rot: C?.rot ?? 0
        }
      };
    }).filter((m) => !!m.shape) : void 0;
    if (f) {
      const m = new Set(f.map((C) => C.shape)), T = a.filter((C) => !m.has(C));
      if (T.length) {
        let C = 0, E = 0, F = !1;
        for (const { shape: U, position: Fe } of f)
          C = Math.max(C, Fe.x + (U?.l ?? 0)), E = F ? Math.min(E, Fe.y) : Fe.y, F = !0;
        for (const U of T)
          f.push({
            shape: U,
            position: {
              autoId: U.autoId,
              x: F ? C : 0,
              y: F ? E : 0,
              rot: U.rot ?? 0
            }
          }), C = (F ? C : 0) + U.l, F = !0;
      }
    }
    let d = f?.map((m) => m.position), y = 0, g = 0;
    if (f?.length) {
      const m = f.map(({ shape: C, position: E }) => ({
        autoId: E.autoId,
        x: E.x,
        y: E.y,
        rot: E.rot,
        l: C?.l ?? 0,
        w: C?.w ?? 0
      })), T = _l(m, n?.bladeWidth ?? 0);
      d = T.positions, y = T.l, g = T.w;
    } else {
      const m = n?.bladeWidth ?? 0;
      let T = 0;
      for (const C of a)
        T += C.l + m, g = Math.max(g, C.w);
      y = T - m, y < 0 && (y = 0);
    }
    const v = d, D = {
      autoId: o > 0 ? `${this.autoId}.${o}` : this.autoId,
      id: this.id ? o > 0 ? `${this.id}.${o}` : this.id : void 0,
      shapes: a,
      userPositions: v,
      l: y,
      w: g,
      t: l?.t,
      material: l?.material,
      orientationLock: g > y ? "w" : "l",
      type: "user",
      q: 1,
      preventAutoRotation: !0,
      container: n,
      skipValidation: !0
    }, W = new bi(D);
    return n && "updateShapeSpacing" in W && typeof W.updateShapeSpacing == "function" && W.updateShapeSpacing(n), W;
  }
  /**
    * Convert to plain data object
    */
  toData() {
    const e = super.toData();
    return e.__entityType = p.InputUserGroup, e;
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
  /**
   * Update the position of a shape within the group
   */
  setShapePosition(e, i, s) {
    this.positions || (this.positions = []);
    const n = this.positions.find((o) => o.autoId === e);
    n ? (n.x = i, n.y = s) : this.positions.push({ autoId: e, x: i, y: s });
  }
  /**
   * Get the bounding box of all positioned shapes
   */
  getBoundingBox(e = []) {
    if (!this.positions?.length) return { l: 0, w: 0 };
    const i = this.findShapes(e);
    let s = 1 / 0, n = 1 / 0, o = -1 / 0, r = -1 / 0;
    for (const a of this.positions) {
      const l = i.find((c) => c.autoId === a.autoId);
      if (l) {
        const c = l.trimmedDimensions || { l: l.l, w: l.w };
        s = Math.min(s, a.x), n = Math.min(n, a.y), o = Math.max(o, a.x + c.l), r = Math.max(r, a.y + c.w);
      }
    }
    return isFinite(s) ? { l: o - s, w: r - n } : { l: 0, w: 0 };
  }
  get excludedFields() {
    return ["proximity"];
  }
  get compressExcludedFields() {
    return ["issues", "stockMatch"];
  }
}
class Fc extends it {
  static schema = Vt;
  static computedProperties = Ms;
  static defaults = Vt.parse({});
  constructor(e = {}) {
    super(e);
  }
  getType() {
    return p.NestingShape;
  }
  /**
   * Returns the polygon used as the rotation/normalisation REFERENCE during placement.
   * When `placementOutline` is set (DP-simplified or convex hull), the placement algorithm
   * rotated around its centroid and normalised against its bbox — rendering must do the same
   * so final positions agree. When absent, the outline itself is the reference.
   */
  getTransformReference() {
    return this.placementOutline && this.placementOutline.length >= 3 ? this.placementOutline : this.outline;
  }
  /** Arithmetic centroid of a polygon (matches geometry.ts rotatePolygon pivot). */
  centroidOf(e) {
    let i = 0, s = 0;
    for (const n of e)
      i += n.x, s += n.y;
    return i /= e.length, s /= e.length, { cx: i, cy: s };
  }
  /** Min x/y of a polygon — used as normalisation offset after rotation. */
  minOf(e) {
    let i = 1 / 0, s = 1 / 0;
    for (const n of e)
      n.x < i && (i = n.x), n.y < s && (s = n.y);
    return { minX: i, minY: s };
  }
  /** Rotate a polygon around an arbitrary pivot. */
  rotateAround(e, i, s) {
    if (s === 0) return e;
    const n = Math.cos(s), o = Math.sin(s);
    return e.map((r) => {
      const a = r.x - i.cx, l = r.y - i.cy;
      return {
        x: n * a - o * l + i.cx,
        y: o * a + n * l + i.cy
      };
    });
  }
  /**
   * Get the rotated outline vertices, applying nestingRotation around the arithmetic centroid
   * of the placement reference (so rendering agrees with placement when a placementOutline is used).
   */
  getRotatedOutline() {
    if (!this.outline || this.outline.length < 3) return [];
    if (this.nestingRotation === 0) return this.outline;
    const e = this.getTransformReference(), i = this.centroidOf(e);
    return this.rotateAround(this.outline, i, this.nestingRotation);
  }
  /**
   * Get the rotated + normalized outline (bounding box starts at 0,0)
   * Matches the placement algorithm: rotate around reference centroid, normalise against
   * rotated-reference bbox (not against the outline's own rotated bbox).
   */
  getNormalizedRotatedOutline() {
    if (!this.outline || this.outline.length < 3) return [];
    const e = this.getTransformReference(), i = this.centroidOf(e), s = this.rotateAround(this.outline, i, this.nestingRotation), n = e === this.outline ? s : this.rotateAround(e, i, this.nestingRotation), { minX: o, minY: r } = this.minOf(n);
    return s.map((a) => ({
      x: a.x - o,
      y: a.y - r
    }));
  }
  /**
   * Get the translated outline vertices at the shape's current position on stock
   * Uses normalized rotation matching the placement algorithm
   */
  getPositionedOutline() {
    const e = this.getNormalizedRotatedOutline();
    return e.length ? e.map((i) => ({
      x: i.x + (this.x || 0),
      y: i.y + (this.y || 0)
    })) : [];
  }
  /**
   * Get the positioned outer boundary for cutting (bounding box for hollow shapes, outline for solid)
   * Uses the same rotation + normalization as getPositionedOutline()
   */
  getPositionedOuterBoundary() {
    if (!this.holes?.length)
      return this.getPositionedOutline();
    let e = 1 / 0, i = 1 / 0, s = -1 / 0, n = -1 / 0;
    for (const r of this.outline)
      r.x < e && (e = r.x), r.y < i && (i = r.y), r.x > s && (s = r.x), r.y > n && (n = r.y);
    const o = [
      { x: e, y: i },
      { x: s, y: i },
      { x: s, y: n },
      { x: e, y: n }
    ];
    return this.positionContour(o);
  }
  /**
   * Get the positioned hole contours for cutting
   * Each hole is rotated + normalized + translated consistently with the outline
   */
  getPositionedHoles() {
    return this.holes?.length ? this.holes.filter((e) => e.length >= 3).map((e) => {
      const i = e[0].x === e[e.length - 1].x && e[0].y === e[e.length - 1].y ? e.slice(0, -1) : e;
      return this.positionContour(i);
    }) : [];
  }
  /**
   * Position an arbitrary contour using the same transform as getPositionedOutline():
   * rotate around the placement reference's centroid, normalise using the reference's
   * rotated bbox, translate by (x, y).
   */
  positionContour(e) {
    if (!this.outline || this.outline.length < 3) return e;
    if (!this.nestingRotation || this.nestingRotation === 0)
      return e.map((l) => ({
        x: l.x + (this.x || 0),
        y: l.y + (this.y || 0)
      }));
    const i = this.getTransformReference(), s = this.centroidOf(i), n = this.rotateAround(e, s, this.nestingRotation), o = this.rotateAround(i, s, this.nestingRotation), { minX: r, minY: a } = this.minOf(o);
    return n.map((l) => ({
      x: l.x - r + (this.x || 0),
      y: l.y - a + (this.y || 0)
    }));
  }
  /**
   * Override createPerimeterCuts to generate polygon-outline cuts instead of bounding-box cuts
   * Each edge of the polygon outline becomes a separate Cut line segment
   */
  createPerimeterCuts(e = null) {
    if (e = e || this.stock, !e) throw new Error("stock is required to create a cut");
    const i = this.getPositionedOutline();
    if (i.length < 3) return [];
    const s = [], o = i[0].x === i[i.length - 1].x && i[0].y === i[i.length - 1].y ? i.length - 1 : i.length;
    for (let r = 0; r < o; r++) {
      const a = i[r], l = i[(r + 1) % i.length];
      s.push(new It({
        stock: re(this.stock) ? this.stock : e,
        x1: a.x,
        y1: a.y,
        x2: l.x,
        y2: l.y
      }));
    }
    return s;
  }
  /**
   * Check if this shape's outline is identical to another nesting shape's outline
   * Used for NFP cache deduplication
   */
  isOutlineIdentical(e) {
    if (this.outline.length !== e.outline.length) return !1;
    for (let i = 0; i < this.outline.length; i++)
      if (this.outline[i].x !== e.outline[i].x || this.outline[i].y !== e.outline[i].y) return !1;
    return !0;
  }
}
export {
  Ve as $,
  It as A,
  ze as B,
  gi as C,
  Pn as D,
  p as E,
  G as F,
  ge as G,
  be as H,
  Ec as I,
  yt as J,
  je as K,
  Be as L,
  ve as M,
  Dc as N,
  Rs as O,
  te as P,
  Cc as Q,
  kt as R,
  M as S,
  Ac as T,
  wt as U,
  Fc as V,
  we as W,
  Dl as X,
  k as Y,
  Ee as Z,
  he as _,
  lc as a,
  vc as a$,
  lr as a0,
  Lt as a1,
  se as a2,
  uc as a3,
  ee as a4,
  ka as a5,
  Ie as a6,
  O as a7,
  as as a8,
  Y as a9,
  At as aA,
  Et as aB,
  il as aC,
  Xl as aD,
  wa as aE,
  ye as aF,
  pe as aG,
  $t as aH,
  Ul as aI,
  sa as aJ,
  ii as aK,
  un as aL,
  Bt as aM,
  jr as aN,
  dt as aO,
  _n as aP,
  Or as aQ,
  tc as aR,
  Kl as aS,
  cr as aT,
  vn as aU,
  x as aV,
  jo as aW,
  ot as aX,
  al as aY,
  ul as aZ,
  Zl as a_,
  Un as aa,
  Je as ab,
  _i as ac,
  Zt as ad,
  Ka as ae,
  ec as af,
  Oc as ag,
  pl as ah,
  cc as ai,
  $s as aj,
  Ns as ak,
  nc as al,
  rc as am,
  wc as an,
  Tc as ao,
  bc as ap,
  yc as aq,
  gc as ar,
  Pt as as,
  oc as at,
  ml as au,
  pc as av,
  xl as aw,
  Sl as ax,
  hc as ay,
  fc as az,
  Yl as b,
  xc as b0,
  B as b1,
  Po as b2,
  So as b3,
  Ql as b4,
  Hl as b5,
  ql as b6,
  Xi as b7,
  Ki as b8,
  Ds as b9,
  ci as ba,
  di as bb,
  ui as bc,
  As as bd,
  ko as be,
  vo as bf,
  hi as bg,
  fi as bh,
  la as bi,
  Er as bj,
  Sr as bk,
  dc as bl,
  oi as bm,
  Pc as bn,
  Jl as bo,
  wo as bp,
  zt as bq,
  mc as br,
  Sc as bs,
  sc as c,
  kc as d,
  gl as e,
  Ic as f,
  ic as g,
  si as h,
  Se as i,
  ni as j,
  xt as k,
  ac as l,
  ai as m,
  gt as n,
  b as o,
  zl as p,
  Wl as q,
  Va as r,
  yi as s,
  nr as t,
  bi as u,
  Pl as v,
  it as w,
  mt as x,
  Ae as y,
  A as z
};

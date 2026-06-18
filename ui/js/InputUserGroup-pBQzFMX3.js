import { k as P, o as x, j as w, q as D, h, i as V, u as F, l as z, n as u, B as ke, C as ys, Z as wt, D as bs, w as M, E as ee, F as di, G as ws, H as Ss, I as Di, J as xs, K as ks, L as vs, M as Is, N as Ps, O as Ts, Q as Ci } from "./vendor-C76etQCp.js";
import "./vendor-i18next-BVRe4kPe.js";
import { t as q, s as Os, e as Ds } from "./i18n-DbggOnBy.js";
import { m as Cs } from "./validation-keys-CsEDW3Vc.js";
import { i as Te } from "./environment-BeBZzWz6.js";
import { F as He } from "./vendor-fraction-3H9P8ENz.js";
import { g as L } from "./vendor-lodash-wbyiOdVF.js";
const Ai = P(["error", "warning"]), Fi = P(["saw", "stock", "part", "group", "machining", "extras"]);
x({
  message: h(),
  identifier: h(),
  field: D(D(h())),
  index: D(u()),
  id: h(),
  // Source object's autoId for linking back
  type: Ai,
  category: D(Fi)
});
const As = x({
  item: z().nullable().default(null),
  message: h().default(""),
  params: V(h(), F([h(), u(), w(), ke()])).optional(),
  // Translation parameters
  field: D(D(h())).default([]),
  index: D(u()).nullable().default(null),
  id: h().nullable().default(null),
  // Source object's autoId
  issues: D(z()).nullable().default(null),
  // Will be Issue[] at runtime
  type: Ai.default("error"),
  category: D(Fi).nullable().default(null),
  throwError: w().default(!1),
  shouldTranslate: w().default(!0)
}), Fs = ["lr", "rl", "bt", "tb"];
x({
  x1: u(),
  x2: u(),
  y1: u(),
  y2: u(),
  dimension: P(["l", "w"]).optional(),
  shapeCollisions: D(z()).optional()
});
x({
  id: h().nullable().optional(),
  x1: u(),
  x2: u(),
  y1: u(),
  y2: u(),
  origin: h().optional(),
  dimension: P(["l", "w"]).optional(),
  direction: P(Fs).nullable().optional(),
  type: h().nullable().optional()
});
const Es = x({
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
  shapeCollisions: D(z()).default([]),
  // ========== Validation ==========
  // Validation issues found with this line
  issues: D(z()).default([])
}), Ls = {
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
}, Ei = /* @__PURE__ */ new Map();
function Gt() {
  return Ei;
}
function _a(t, e) {
  Ei.set(t, e);
}
function ht(t, e) {
  const i = t, s = i._fieldBehavior?.fieldBehavior || {};
  return i._fieldBehavior = {
    fieldBehavior: {
      ...s,
      ...e
    }
  }, i;
}
function Dt(t) {
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
const fi = /* @__PURE__ */ new WeakMap();
function Be(t) {
  const e = t !== null && typeof t == "object";
  if (e) {
    const s = fi.get(t);
    if (s) return { ...s };
  }
  const i = {};
  if (t instanceof bs) {
    const s = t.shape;
    for (const [n, o] of Object.entries(s)) {
      const r = Dt(o);
      r && (i[n] = r);
    }
  }
  if (t._def && t._def.shape) {
    const s = t._def.shape;
    for (const [n, o] of Object.entries(s)) {
      const r = Dt(o);
      r && (i[n] = r);
    }
  }
  return e && fi.set(t, i), { ...i };
}
typeof ys < "u" && wt && wt.prototype && (wt.prototype.behavior = function(t) {
  return ht(this, t);
});
function O(t, e = {}) {
  let s = z().refine((r) => r == null ? !0 : typeof r == "object" && r !== null ? ("autoId" in r || "id" in r, !0) : !1, {
    message: `Invalid reference to ${t}`
  }).transform((r) => {
    if (r == null || typeof r == "object" && r !== null && typeof r.getType == "function" || typeof r == "object" && r !== null && r.__ref === !0)
      return r;
    if (typeof r == "object" && r !== null && !r.__ref) {
      if (r._type !== void 0)
        return r;
      try {
        const a = Gt(), l = r.__entityType || t, c = a.get(l);
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
  return n = ht(n, o), Object.defineProperty(n, "__zRefClassName", {
    value: t,
    enumerable: !1,
    writable: !1,
    configurable: !1
  }), n;
}
function we(t, e = {}) {
  let i = D(O(t)).default([]).describe(e.description || `Array of ${t} references`);
  const s = e.fieldBehavior || {
    serialize: "reference",
    // Reference arrays should always serialize as references
    compress: "reference",
    // Compressed mode also uses references
    clone: "copy",
    // Default clone behavior
    description: `Array of ${t} references`
  };
  return i = ht(i, s), i;
}
function Ms(t, e = {}) {
  const i = t.map((o) => O(o));
  let s = D(F(i)).default([]).describe(e.description || `Array of ${t.join(" or ")} references`);
  const n = e.fieldBehavior || {
    serialize: "reference",
    // Union reference arrays should always serialize as references
    compress: "reference",
    // Compressed mode also uses references
    clone: "copy",
    // Default clone behavior
    description: `Array of ${t.join(" or ")} references`
  };
  return s = ht(s, n), s;
}
const hi = ["topLeft", "topRight", "bottomLeft", "bottomRight"], _s = [
  "left",
  "centre",
  "right",
  "top",
  "bottom",
  "topLeft",
  "topRight",
  "bottomLeft",
  "bottomRight"
], Rs = ["lr", "rl", "bt", "tb"], Ns = x({
  // ========== Coordinates ==========
  x: u().default(0),
  y: u().default(0),
  z: u().default(0),
  // ========== Shape References ==========
  a: h().optional(),
  b: h().optional(),
  stock: O("Stock", { nullable: !0 }).optional(),
  // ========== Direction and Positioning ==========
  direction: P(Rs).nullable().optional(),
  type: h().optional(),
  corner: P(hi).optional(),
  shapePosition: P(hi).optional(),
  grid: P(_s).optional(),
  // ========== Collision and Raycast Flags ==========
  raycast: w().default(!1),
  collision: w().default(!1),
  tooClose: w().default(!1),
  adjustedForMinSpacing: w().default(!1)
}), Gs = {
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
}, Li = h().default("").describe('Unique identifier (e.g., "1.0" for shapes/stock, "g1" for groups, "ss-1_a2b3" for segments, "1.0-proximity" for proximity rectangles)'), $s = h().max(200).default("").describe("User input name"), zs = h().default("").describe("Parent identifier for tracking copies and relationships"), $t = h().describe("Internal product or material code"), Vs = w().default(!1).describe("Prevent automatic rotation optimization"), Bs = w().default(!1).describe("Whether this is an offcut piece"), Mi = D(h()).default([]).describe("IDs of identical items").behavior({ clone: "copy" }), Ue = F([
  M(""),
  M("l"),
  M("w"),
  M(" ").transform(() => ""),
  ke().transform(() => "")
]).default("").describe("Grain direction of the material"), _i = h().optional().describe("Color name"), Ra = F([M(""), h().regex(/^#[0-9A-Fa-f]{3,8}$/, { error: (t) => `Invalid hex colour "${t.input}" — use #RGB or #RRGGBB, e.g. "#1a2b3c"` })]).optional().describe("Color hex code"), Ri = ee((t) => t === null || t === " " || t === "n" || t === "none" || !["", "l", "w"].includes(t) ? "" : t, P(["", "l", "w"]).default("").describe("Orientation lock for rotation constraints")), js = x({
  l1: u().default(0).describe("Long side 1 trim value"),
  l2: u().default(0).describe("Long side 2 trim value"),
  w1: u().default(0).describe("Short side 1 trim value"),
  w2: u().default(0).describe("Short side 2 trim value")
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 });
x({
  material: w(),
  thickness: w(),
  fit: w(),
  width: w()
}).nullable().default(null);
F([
  M(""),
  M("l"),
  M("w"),
  ke()
]).default(null);
V(h(), u()).nullable().default(null);
V(h(), u()).nullable().default(null);
const zt = F([
  M(0),
  M(1)
]), Ws = x({
  dimension: u().describe("Dimension of the strip shape batch"),
  rot: zt.describe("Rotation: 0 (no rotation) or 1 (90 degrees)"),
  order: u().optional().describe("Order of the batch"),
  id: h().optional().describe("Batch ID"),
  stockId: h().optional().describe("Associated stock ID"),
  rerunning: w().optional().describe("Whether the batch is being rerun"),
  priorityShape: h().nullable().describe("Priority shape identifier (null if none specified)")
});
x({
  subsetUsed: w().optional().describe("Whether a subset was used for strip shape batches"),
  groups: V(h(), Ws).describe("Groups of strip shape batches keyed by ID")
});
const Hs = P(["none", "schema", "business", "full"]), K = x({
  // Validation issues (errors) - uses zRefArray to avoid type duplication across modules
  issues: we("Issue", {
    description: "Validation issues (errors)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Validation warnings (non-critical issues) - uses zRefArray to avoid type duplication
  warnings: we("Issue", {
    description: "Validation warnings (non-critical)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Legacy flag to skip validation (backward compatibility)
  skipValidation: w().optional(),
  // New validation control properties
  skipSchemaValidation: w().optional(),
  skipBusinessValidation: w().optional(),
  validationMode: Hs.optional(),
  enableStrictMode: w().optional()
}), te = {
  // Check if valid (no errors)
  isValid: {
    compute: (t) => (t.issues || []).filter((i) => i.type === "error").length === 0,
    cache: !0,
    dependencies: ["issues"],
    returnType: "boolean"
  }
};
function Us(t) {
  if (!t)
    return "";
  const e = t.indexOf(".");
  return e === -1 ? t : t.substring(0, e);
}
const Vt = K.extend({
  // Identity
  id: Li,
  // Description
  name: $s,
  // Dimensions
  l: ee((t) => typeof t == "number" && !isFinite(t) ? 1 : t ?? 1, u().positive()).describe("Length (long side dimension)"),
  w: ee((t) => typeof t == "number" && !isFinite(t) ? 1 : t ?? 1, u().positive()).describe("Width (short side dimension)"),
  t: u().positive().nullable().optional().describe("Thickness (z-axis dimension)"),
  q: u().positive().int().default(1).describe("Quantity"),
  // Calculated dimensions (computed once on init for performance)
  area: u().positive().default(1).describe("Calculated area (l * w)"),
  longSide: u().positive().default(1).describe("Calculated long side Math.max(l, w)"),
  shortSide: u().positive().default(1).describe("Calculated short side Math.min(l, w)"),
  parentId: h().default("").describe("Parent ID extracted from id (integer part before decimal)"),
  // Flags
  duplicate: w().default(!1).describe("Whether this is a duplicate"),
  offcut: Bs,
  // Grain
  grain: Ue,
  preventGrainRotation: w().default(!1).describe("Prevent rotation that would change grain direction"),
  // Orientation
  preventAutoRotation: Vs,
  orientationLock: Ri,
  // Position (reset during cloning - cloned shapes should not have preset positions)
  x: u().nullable().default(null).describe("X coordinate position").behavior({ clone: "reset" }),
  y: u().nullable().default(null).describe("Y coordinate position").behavior({ clone: "reset" }),
  // Stock matching
  material: h().max(200).default("").transform((t) => t ? t.trim().toLowerCase() : "").describe("Material name"),
  // Trim
  trim: js.describe("Reduce the dimensions by specified trim values"),
  trimmed: w().default(!1).describe("Whether trim has been applied to dimensions"),
  // Proximity data (excluded from compression)
  proximity: x({
    rectangle: O("Rectangle").nullable().default(null),
    // Using 'any' to avoid circular import
    distance: u().nullable().default(null)
  }).default({ rectangle: null, distance: null }).behavior({ compress: "exclude" }),
  // Other properties
  cost: u().min(0).nullable().default(0).describe("Cost per unit"),
  discount: u().min(0).max(100).nullable().default(0).describe("Percentage discount (0-100)"),
  customData: V(h(), z()).default({}).describe("Custom user-defined data"),
  identicalTo: Mi,
  notes: h().max(500).default("").transform((t) => typeof t == "string" && t.length ? t.replace(/,/g, "").substring(0, 200) : "").describe("Description")
}), Bt = {
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
}, qs = ["x", "y"];
P(qs);
const Ks = ["l", "w"];
P(Ks);
const Ys = ["l", "w"], xe = P(Ys);
F([
  M(0),
  M(1),
  M(2)
]);
F([
  M(0),
  M(1),
  ke()
]);
const Ni = ["sheet", "linear", "roll"], jt = ee(
  // Normalize to lowercase before validation
  (t) => typeof t == "string" ? t.toLowerCase() : t,
  F([
    P(Ni),
    ke()
  ]).nullable().default(null)
).describe("Type of stock material"), Gi = x({
  // Infinite length flag for rolls and other continuous stock
  infiniteLength: w().default(!1).describe("Whether stock has infinite length (e.g., for rolls)"),
  // Allow shapes that exactly fit the stock dimensions
  allowExactFitShapes: w().default(!1).describe("Allow shapes that exactly fit"),
  // Automatically add stock as needed
  autoAdd: w().default(!1).describe("Automatically add stock as needed"),
  // Unlimited quantity flag - stock never runs out
  unlimitedQuantity: w().default(!1).describe("Stock has unlimited quantity (never decremented)"),
  // Product variant name from supplier catalogue
  variant: h().optional().describe("Product variant name from supplier"),
  // Manufacturer / brand name (Egger, Kronospan, etc.) — orthogonal to `variant`.
  brand: h().optional().describe("Manufacturer / brand name")
}), Wt = Vt.extend({
  // Identity - override id to be required for containers
  id: h().default("").describe("Unique identifier for containers (required for Stock and Segment)"),
  // Parent identifier for tracking copies
  parentId: zs,
  // Container-specific fields
  stockType: jt,
  // Array of shapes or groups (excluded from compression - runtime only)
  shapes: Ms(["Shape", "Group"], {
    description: "Array of Shape or Group objects contained within this container"
  }).behavior({ clone: "reset", compress: "exclude" }),
  // Saw reference - using zRef for define.ref<Saw>('Saw') (share exact instance during cloning, serialize as reference)
  saw: O("Saw", {
    nullable: !0,
    description: "Reference to Saw class"
  }).behavior({ clone: "share", compress: "reference" }),
  // Algorithm benchmark results (reset during cloning)
  algoBenchmark: z().optional().describe("Benchmark results from optimization algorithms").behavior({ clone: "reset" }),
  // Container flag
  isContainer: w().default(!0).describe("Flag indicating this is a container")
}), Ht = {
  // Include all Rectangle computed properties
  ...Bt,
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
Wt.describe(JSON.stringify({
  name: "Container",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(Ht)
}));
const Zs = x({
  dimension: u().describe("Dimension of the strip shape batch"),
  rot: F([
    M(0),
    M(1)
  ]).describe("Rotation"),
  order: u().optional().describe("Order of the batch"),
  id: h().optional().describe("Batch ID"),
  stockId: h().optional().describe("Associated stock ID"),
  rerunning: w().optional().describe("Whether the batch is being rerun"),
  priorityShape: h().nullable().describe("Priority shape identifier (null if none specified)")
}), $i = x({
  // Strip direction
  myStripDirection: xe.optional(),
  // Strip parent (can be shape or group)
  myStripParent: F([
    O("Shape", { nullable: !0 }),
    O("Group", { nullable: !0 })
  ]).default(null).describe("Parent strip shape or group for guillotine optimization").behavior({
    serialize: "reference",
    compress: "reference",
    clone: "share"
  }),
  // Phase number
  myPhase: u().int().min(0).optional().describe("Phase of the strip this shape belongs to"),
  // Strip shape batches optimization data
  stripShapeBatches: x({
    subsetUsed: w().optional().describe("Whether a subset was used for strip shape batches"),
    groups: V(h(), Zs).default({}).describe("Groups of strip shape batches keyed by ID")
  }).default({ groups: {} }).describe("Strip shape batch optimization data")
});
$i.describe(JSON.stringify({
  name: "GuillotineState",
  version: "1.0.0"
}));
const Xs = {}, Js = x({
  fill: u().default(0),
  similarDimensions: u().default(0),
  compression: u().default(0),
  cohesion: u().default(0),
  area: u().default(0),
  edge: u().default(0),
  alignment: u().default(0),
  exactFit: u().default(0),
  total: u().default(0),
  shapes: F([
    O("Shape", { nullable: !0 }),
    O("Group", { nullable: !0 })
  ]).optional(),
  group: O("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
  cutDirection: xe.optional()
}).behavior({ clone: "reset" }), Qs = x({
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
  cutDirection: xe,
  myStripDirection: xe.optional(),
  myStripParent: F([
    O("Shape", { nullable: !0 }),
    O("Group", { nullable: !0 })
  ]).optional().describe("Parent strip shape or group for guillotine optimization"),
  myPhase: u().optional()
}).behavior({ clone: "reset" }), pi = F([
  Js,
  Qs,
  // Also support the generic object with catchall for backward compatibility
  x({
    cutDirection: xe.optional(),
    myStripParent: F([
      O("Shape", { nullable: !0 }),
      O("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group"),
    myStripDirection: xe.optional()
  }).catchall(u())
]).behavior({ clone: "reset" }), qe = Vt.extend({
  // Stock lock (shared schema) - original was stockLock: define.array(define.string())
  stockLock: D(h()).default([]).describe("Stock lock configuration"),
  // Stock matching - original object structure
  stockMatch: x({
    material: w(),
    thickness: w(),
    fit: w(),
    width: w()
  }).nullish().describe("Matching stock information"),
  // Guillotine state - reference that will be initialized in constructor (reset during cloning)
  // This ensures guillotineState is always a proper GuillotineState instance with methods
  guillotineState: O("GuillotineState", {
    nullable: !0,
    // Nullable in schema but always initialized in constructor
    description: "Data for guillotine cutting optimization (always initialized as instance)"
  }).nullable().default(null).behavior({
    clone: "unique",
    serialize: Te() ? "full" : "exclude",
    compress: Te() ? "full" : "exclude"
    // Consistent with serialize behavior
  }),
  // Priority and weighting (records) - exact match from original
  priority: V(h(), u()).default({}).describe("Priority levels for optimization"),
  weighting: V(h(), u()).optional().describe("Shape weighting for optimization"),
  // Pattern matching for stack detection (reset during cloning)
  patternMatch: w().default(!1).describe("Used for stack detection").behavior({ clone: "reset" }),
  firstShape: x({
    sampleRotations: D(u().int().min(0).max(1)).default([]).describe("Sample rotations (0 or 1) for first shape optimization").behavior({ clone: "reset" }),
    isFirstShape: w().default(!1).describe("Whether this is the first shape in optimization").behavior({ clone: "reset" })
  }).default({ sampleRotations: [], isFirstShape: !1 }),
  // Placement properties (reset during cloning)
  added: w().default(!1).describe("Whether shape has been added to a stock").behavior({ clone: "reset" }),
  placementOrder: u().int().min(0).optional().describe("Order in which shape was placed").behavior({ clone: "reset" }),
  // Stock reference (reset during cloning - cloned shapes should not be pre-placed)
  // Serialized as a reference to avoid circular structures (Stock.shapes ↔ Shape.stock)
  stock: O("Stock", {
    nullable: !0,
    description: "Reference to the stock this item is placed on"
  }).behavior({ clone: "reset", serialize: "reference", compress: "reference" }),
  // Stock fitting data
  fitsStock: V(h(), V(h(), w())).nullable().default(null).describe("Information about which stocks this shape fits"),
  // Scoring properties
  bestScore: x({
    x: u().nullable().default(null),
    y: u().nullable().default(null),
    rot: F([M(0), M(1)]).nullable().default(null),
    total: u().nullable().default(null),
    weighting: V(h(), u()).optional(),
    group: O("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
    score: pi.optional(),
    // FastPoint instances (used in the placement hot loop) live here. FastPoint has no
    // toData and holds a live Stock back-reference — must be excluded from serialization
    // to avoid Stock↔Shape cycles when bestScore is serialised in dev mode.
    point: z().optional().describe("Associated point for placement").behavior({ serialize: "exclude", compress: "exclude" }),
    myStripParent: F([
      O("Shape", { nullable: !0 }),
      O("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group for this score"),
    cutDirection: xe.optional(),
    myStripDirection: xe.optional(),
    stock: O("Stock", {
      nullable: !0,
      description: "Stock reference for this score"
    })
  }).nullable().default(null).optional().describe("Best optimization score achieved").behavior({
    clone: "reset",
    serialize: Te() ? "full" : "exclude"
    // Retain in development mode for debugging
  }),
  // Current optimization score (can be efficiency or guillotine type, reset during cloning)
  score: pi.nullable().optional().describe("Current optimization score").behavior({
    clone: "reset",
    serialize: "exclude"
    // Always exclude - transient optimization data
  })
}), Ke = {
  // Include all Rectangle computed properties
  ...Bt
  // Placeable doesn't define additional computed properties
};
qe.describe(JSON.stringify({
  name: "Placeable",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(Ke)
}));
const zi = ["horizontal", "vertical"], Vi = ["position", "user", "strip", "firstShape"], en = P(zi).optional(), mi = x({
  x: u(),
  y: u(),
  autoId: h().optional(),
  rot: zt
}), tn = qe.extend({
  // Override quantity - always 1 for groups
  q: u().min(1).max(1).int().default(1),
  // Groups have fixed orientation
  preventAutoRotation: w().default(!0),
  // Group-specific fields
  shapes: we("Shape").default([]),
  direction: en,
  container: F([
    O("Segment"),
    O("Stock")
  ]).behavior({ compress: "exclude" }),
  positions: D(mi).default([]),
  // User-defined positions for free-placement user groups (from InputUserGroup)
  userPositions: D(mi).optional(),
  type: P(Vi).default("position"),
  efficiency: u().min(0).max(100).default(0),
  groupLength: u().min(0).default(0),
  groupWidth: u().min(0).default(0),
  outOfBounds: w().default(!1),
  collision: w().default(!1),
  counter: u().int().min(0).default(0),
  inputId: h().optional()
}), sn = {
  ...Ke,
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
x({
  id: h(),
  x: u(),
  y: u(),
  shapes: we("Shape"),
  direction: P(zi),
  type: P(Vi),
  container: F([
    O("Segment"),
    O("Stock")
  ]).optional()
});
const nn = ["l", "w"], rn = qe.extend({
  // Identity - offcuts need IDs for tracking and export
  id: h().default(""),
  // Note: offcut property is inherited from Rectangle schema (boolean default false)
  // The Offcut constructor ensures it's always true
  // Offcut-specific fields
  addToInventory: w().default(!1),
  flex: P(nn).optional(),
  // Cost is calculated, not set
  cost: u().min(0).nullable().default(0)
}), on = {
  ...Ke,
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
}, Bi = D(h()).default([]).describe("Parent IDs of stock(s) this shape is locked to"), an = P(["l", "w"]).nullable().default(null), ji = F([
  M("l"),
  M("w"),
  ke()
]).default(null), ln = x({
  stockId: h().optional(),
  material: h().optional(),
  thickness: u().optional(),
  grain: Ue.optional()
}).describe("Which stock(s) this shape is a match for "), Wi = V(h(), z()).default({}), Hi = x({
  barcode1: h().max(50).optional(),
  barcode2: h().max(50).optional(),
  room: h().max(50).optional(),
  pallet: h().max(50).optional(),
  drawing: h().max(50).optional(),
  order: h().max(50).optional(),
  colour: h().max(50).optional(),
  productInfo: h().max(50).optional(),
  productNumber: h().max(50).optional()
}).optional();
Bi.describe("IDs of stocks this shape is locked to");
const cn = ji.describe("Direction that should face up");
x({
  /**
   * Up direction - Direction that should face up during optimization
   */
  upDirection: cn
});
const un = x({
  // Whether shape is in a user-defined group
  inUserGroup: w().default(!1).describe("Whether shape is in a user-defined group"),
  // Whether shape is in any group
  inGroup: w().default(!1).describe("Whether shape is currently in a group"),
  // Placement order within group
  placementOrder: u().int().min(0).optional().describe("Placement order within group"),
  // Group reference (the actual Group class instance)
  reference: O("Group", {
    nullable: !0,
    description: "Group this shape belongs to"
  }).optional().behavior({ clone: "reset", compress: "reference" }),
  // Group this was added as part of (preserved during serialization as reference)
  addedAsGroup: O("Group", {
    nullable: !0,
    description: "Group this was added as part of"
  }).optional().behavior({ clone: "reset", compress: "reference" })
}).default({
  inUserGroup: !1,
  inGroup: !1,
  placementOrder: void 0,
  reference: null,
  addedAsGroup: null
}).describe("Group metadata and reference"), Ct = qe.extend({
  // ========== Group Metadata ==========
  // Nested object containing all group-related properties
  group: un,
  // ========== Identity ==========
  // Unique identifier for referencing items (required for shapes)
  id: h().default("").describe("Unique identifier for referencing items"),
  // Array of IDs this shape is identical to
  identicalTo: Mi,
  // Whether this is a duplicate
  duplicate: w().default(!1).describe("Whether this is a duplicate shape"),
  // ========== Orientation ==========
  // Direction that should face up during optimization
  upDirection: an.describe("Direction that should face up"),
  // ========== Extras ==========
  // Extras container for banding, finish, planing, etc.
  // Override default reference behavior to preserve full data in compressed mode
  extras: O("Extras", {
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
  machining: O("Machining", {
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
  code: $t.optional(),
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
  labels: Hi
}), Ui = {
  // Include all Placeable computed properties
  ...Ke,
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
      if (!i)
        return 0;
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
Ct.describe(JSON.stringify({
  name: "Shape",
  description: "Shape to be cut from stock material",
  version: "1.0.0",
  extends: "Placeable",
  computedProperties: Object.keys(Ui)
}));
const Na = x({
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
}), dn = x({
  // Internal-only fields (not exposed in API)
  fitsAll: w().default(!1),
  fitsAny: w().default(!1),
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
}), fn = x({
  stock: O("Stock", { nullable: !0 }).optional(),
  number: u().int().min(1).optional()
}), At = x({
  ...Wt.shape,
  ...Gi.shape,
  // Override x and y to default to 0 for Stock (containers are positioned at origin)
  x: u().nullable().default(0).describe("X coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  y: u().nullable().default(0).describe("Y coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  // Stock analysis results
  analysis: dn.optional().behavior({ clone: "reset" }),
  // Automatically add stock as needed during optimization
  autoAdd: w().optional().describe("Automatically add stock as needed during optimization"),
  // Pattern for identifying duplicate stock sheets
  duplicatePattern: h().default("").describe("Pattern for identifying duplicate stock sheets"),
  // Root segment for guillotine cutting (excluded from compression, reset during cloning)
  rootSegment: O("Segment", {
    nullable: !0
  }).optional().behavior({ clone: "reset", compress: "exclude" }),
  // Optimization score (excluded from compression, reset during cloning)
  score: z().nullable().default(null).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stack information (reset during cloning - cloned stocks start fresh)
  stack: fn.optional().describe("Stack information").behavior({ clone: "reset" }),
  // Whether the stock layout has been tidied (excluded from compression, reset during cloning)
  tidy: w().default(!1).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stock type (sheet, linear, roll) - inherited from shared stockType
  type: P(Ni).optional().describe("Type of stock material"),
  // Original length before cropping (for rolls)
  originalLength: u().positive().optional().describe("Original length before cropping (for rolls)"),
  // Whether this stock is unusable for optimization
  unusable: w().default(!1).describe("Whether this stock is unusable for optimization"),
  // Whether this stock has been used in the optimization (reset during cloning)
  used: w().default(!1).describe("Whether this stock has been used in the optimization").behavior({ clone: "reset" }),
  // The optimization strategy that selected this stock (reset during cloning)
  winningStrategy: h().optional().describe("The optimization strategy that selected this stock").behavior({ clone: "reset" }),
  // Display and filtering properties
  color: _i.describe('Material color ({ hex: "#FF5733", name: "Red" } or legacy string)'),
  weight: u().positive().optional().describe("Weight"),
  imageUrl: h().url().optional().describe("Image URL for stock display"),
  tags: D(h()).optional().describe("Tags for categorizing stock"),
  available: w().default(!0).describe("Whether the stock is available"),
  // Database ID (MongoDB ObjectId as string)
  db_id: h().optional().describe("MongoDB ObjectId for this document"),
  // Internal product/material code
  code: $t.optional(),
  // Status for tracking cut progress (used in order optimization workflow)
  status: P(["pending", "cut"]).optional().describe("Cut status for order optimization workflow")
}), qi = {
  // Include all Container computed properties
  ...Ht,
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
At.describe(JSON.stringify({
  name: "Stock",
  description: "Stock material for cutting optimization",
  version: "1.0.0",
  extends: "Container",
  computedProperties: Object.keys(qi)
}));
var p;
(function(t) {
  t.InputRectangle = "inputRectangle", t.InputShape = "inputShape", t.InputStock = "inputStock", t.InputUserGroup = "inputUserGroup", t.InputSaw = "inputSaw", t.Rectangle = "rectangle", t.Container = "container", t.Saw = "saw", t.Shape = "shape", t.NestingShape = "nestingShape", t.Stock = "stock", t.Group = "group", t.UserGroup = "userGroup", t.StripGroup = "stripGroup", t.FirstShapeGroup = "firstShapeGroup", t.Segment = "segment", t.Offcut = "offcut", t.Cut = "cut", t.Line = "line", t.Placeable = "placeable", t.GuillotineState = "guillotineState", t.Point = "point", t.PointCollection = "pointCollection", t.Optimiser = "optimiser", t.Machining = "machining", t.Extras = "extras", t.Issue = "issue";
})(p || (p = {}));
var gi;
(function(t) {
  t.String = "string", t.Number = "number", t.Boolean = "boolean", t.Date = "date", t.Object = "object", t.Array = "array", t.Enum = "enum", t.Any = "any", t.Computed = "computed", t.Map = "map", t.Union = "union", t.Literal = "literal", t.Ref = "ref", t.Record = "record";
})(gi || (gi = {}));
var yi;
(function(t) {
  t.Full = "full", t.Compressed = "compressed";
})(yi || (yi = {}));
const hn = /* @__PURE__ */ new Set([
  p.Container,
  p.Stock,
  p.Segment
]), pn = /* @__PURE__ */ new Set([
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
]), mn = /* @__PURE__ */ new Set([
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
class _ {
  static guardCache = /* @__PURE__ */ new Map();
  /**
   * Create a type guard function for a specific entity type
   */
  static create(e, i, s) {
    const n = `${e}-${i}`;
    if (this.guardCache.has(n))
      return this.guardCache.get(n);
    const o = (r) => {
      if (!r || typeof r != "object")
        return !1;
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
const gn = _.create(p.Cut, "Cut"), U = _.create(p.Shape, "Shape", (t) => !("shapes" in t)), Ki = _.create(p.NestingShape, "NestingShape", (t) => !("shapes" in t) && "outline" in t), ue = _.create(p.Stock, "Stock"), Yi = _.create(p.Group, "Group", (t) => "shapes" in t && Array.isArray(t.shapes) && t.type !== "user" && t.type !== "strip"), Ye = _.create(p.UserGroup, "Group", (t) => "shapes" in t && t.type === "user"), Zi = _.create(p.StripGroup, "Group", (t) => "shapes" in t && t.type === "strip"), Xi = _.create(p.FirstShapeGroup, "Group", (t) => "shapes" in t && t.type === "firstShape"), de = (t) => {
  if (!t || typeof t != "object")
    return !1;
  const e = t._type;
  return e !== void 0 ? e === p.Group || e === p.UserGroup || e === p.StripGroup || e === p.FirstShapeGroup : Yi(t) || Ye(t) || Zi(t) || Xi(t);
}, yn = _.create(p.InputUserGroup, "InputUserGroup"), Ji = _.create(p.Segment, "Segment"), bn = _.create(p.Offcut, "Offcut"), wn = (t) => !t || typeof t != "object" ? !1 : bn(t) ? !0 : t.offcut === !0, Sn = (t) => {
  if (!t || typeof t != "object")
    return !1;
  const e = t._type;
  if (e && hn.has(e))
    return !0;
  let i = Object.getPrototypeOf(t);
  for (; i; ) {
    if (i.constructor?.name === "Container")
      return !0;
    i = Object.getPrototypeOf(i);
  }
  return !1;
};
_.create(p.Saw, "Saw");
const Qi = (t) => {
  if (!t || typeof t != "object")
    return !1;
  const e = t._type;
  if (e && pn.has(e))
    return !0;
  let i = Object.getPrototypeOf(t);
  for (; i; ) {
    if (i.constructor?.name === "Rectangle")
      return !0;
    i = Object.getPrototypeOf(i);
  }
  return t.constructor?.name === "Rectangle";
}, xn = (t) => {
  if (!t || typeof t != "object")
    return !1;
  const e = t._type;
  if (e && mn.has(e))
    return !0;
  let i = Object.getPrototypeOf(t);
  for (; i; ) {
    if (i.constructor?.name === "Placeable")
      return !0;
    i = Object.getPrototypeOf(i);
  }
  return t.constructor?.name === "Placeable";
}, W = _.create(p.InputShape, "InputShape"), Ut = _.create(p.InputStock, "InputStock");
_.create(p.InputSaw, "InputSaw");
_.create(p.GuillotineState, "GuillotineState");
_.create(p.Line, "Line");
_.create(p.Point, "Point");
_.create(p.PointCollection, "PointCollection");
function kn(t) {
  if (!t || typeof t != "object")
    return !1;
  const e = t;
  return "__ref" in e && "autoId" in e && typeof e.__ref == "string" && typeof e.autoId == "string";
}
function es(t) {
  if (!t || typeof t != "object")
    return !1;
  const e = t;
  return "trimmed" in e && e.trimmed === !0;
}
const ts = (t) => U(t) || Ki(t);
function vn(t) {
  if (!t || typeof t != "object")
    return null;
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
  return gn(t) ? p.Cut : W(t) ? p.InputShape : Ut(t) ? p.InputStock : yn(t) ? p.InputUserGroup : Ye(t) ? p.UserGroup : Zi(t) ? p.StripGroup : Xi(t) ? p.FirstShapeGroup : Yi(t) ? p.Group : Ki(t) ? p.NestingShape : U(t) ? p.Shape : ue(t) ? p.Stock : Sn(t) ? p.Container : Ji(t) ? p.Segment : wn(t) ? p.Offcut : Qi(t) ? p.Rectangle : xn(t) ? p.Placeable : null;
}
const he = (t) => {
  if (!t || typeof t != "object")
    return !1;
  const e = t;
  return "sides" in e && (!("type" in e) || e.type === "banding") && (!("validate" in e) || typeof e.validate == "function");
}, se = (t) => {
  if (!t || typeof t != "object")
    return !1;
  const e = t;
  return "faces" in e && (!("type" in e) || e.type === "finish") && (!("validate" in e) || typeof e.validate == "function");
}, ne = (t) => {
  if (!t || typeof t != "object")
    return !1;
  const e = t;
  return "faces" in e && "sides" in e && (!("type" in e) || e.type === "planing") && (!("validate" in e) || typeof e.validate == "function");
}, In = (t) => {
  if (!t || typeof t != "object")
    return !1;
  const e = t;
  return "images" in e && (!("type" in e) || e.type === "imageUpload") && (!("validate" in e) || typeof e.validate == "function");
};
_.create(p.Machining, "Machining", (t) => ("holes" in t || "corners" in t || "hingeHoles" in t) && "enabled" in t);
_.create(p.Extras, "Extras", (t) => "banding" in t || "finish" in t || "planing" in t);
_.create(p.Issue, "Issue", (t) => "type" in t && "message" in t && (t.type === "error" || t.type === "warning"));
function Pn(t) {
  return t?.__entityType === p.Shape || t?.__entityType === p.NestingShape;
}
function Tn(t) {
  return typeof t == "string" && (t.startsWith("fields.") || t.startsWith("extras.") || t.startsWith("woodwork.") || t.startsWith("errors."));
}
function On(t) {
  if (!t)
    return;
  const e = {};
  for (const [i, s] of Object.entries(t))
    if (Tn(s)) {
      const n = q(s);
      e[i] = n;
    } else
      e[i] = s;
  return e;
}
function Dn(t, e) {
  const i = Cs(t), s = t.startsWith("errors.validation.") ? t : i, n = On(e);
  return {
    message: q(s, n),
    translationKey: s,
    params: n
  };
}
function Cn(t, e) {
  return Dn(t, e).message;
}
class g {
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
    const i = Array.isArray(e.issues) ? e.issues : null, s = As.parse(e), n = g.determineIdentifier(s.item, s.index || []);
    let o = s.id || "";
    !o && s.item && "autoId" in s.item && s.item.autoId && (o = s.item.autoId);
    const r = s.shouldTranslate !== !1 ? Cn(s.message, s.params) : s.message;
    if (this.message = r, this.identifier = n, this.field = s.field.map((a) => [...a]), this.index = s.index ? [...s.index] : [], this.id = o, this.type = s.type, this.category = s.category || [], this.item = s.item, this.addToItemIssues(s.item), i && i.push(this), s.throwError) {
      const a = `Issue created for ${vn(s.item)}: ${this.identifier || "N/A"} - ${this.field.map((l) => l.join(".")).join(", ")}`;
      throw new Error(a);
    }
  }
  /**
   * Determine identifier from item properties or index
   */
  static determineIdentifier(e, i) {
    if (!e)
      return "";
    const s = e;
    return s.name?.length ? s.name.toLocaleUpperCase() : s.id?.length ? s.id : s.parentId?.length ? s.parentId : typeof i[0] == "number" ? String(i[0] + 1) : "";
  }
  /**
   * Add this issue to the item's issues array
   */
  addToItemIssues(e) {
    if (!e)
      return;
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
    return new g({
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
const St = 10, bi = 0;
class nt extends Error {
  constructor(e) {
    super(e), this.name = "NumberFormatError";
  }
}
const We = {
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
function An(t, e) {
  let i;
  if (typeof t == "number" ? i = t : i = new He(t).valueOf(), typeof e == "number") {
    const s = Math.pow(10, e);
    return Math.round(i * s) / s;
  }
  return i;
}
function Fn(t, e) {
  const i = new He(t);
  if (e > 0) {
    const s = i.mul(e), n = Math.round(s.valueOf());
    return new He(n, e).toFraction(!0);
  }
  return i.simplify().toFraction(!0);
}
function Ga({ v: t, nf: e = "decimal", dp: i = 2, fr: s = 0, o: n = null }) {
  if (t == null || t === "")
    return (n?.numberFormat || e) === "decimal" ? 0 .toLocaleString(void 0, {
      minimumFractionDigits: n?.decimalPlaces ?? i,
      maximumFractionDigits: n?.decimalPlaces ?? i
    }) : "";
  const o = n, r = o?.numberFormat ?? e, a = o?.decimalPlaces ?? i, l = o?.fractionRoundTo ?? s;
  if (r === "fraction")
    return I({
      v: t,
      nf: "fraction",
      dp: a,
      fr: l,
      o: n
    }) ?? "";
  {
    const c = I({ v: t, nf: "decimal", dp: a, fr: l, o: n });
    return c === null ? 0 .toLocaleString(void 0, {
      minimumFractionDigits: a,
      maximumFractionDigits: a
    }) : Number(c).toLocaleString(void 0, {
      minimumFractionDigits: a,
      maximumFractionDigits: a
    });
  }
}
function $a(t, e, i = !1) {
  const s = t == null || String(t).trim() === "";
  if (i && s)
    return { value: null, valid: !1, message: "errors.validation.field.required" };
  if (!i && s)
    return { value: null, valid: !0 };
  const n = String(t);
  try {
    const o = is(n, !0), r = parseFloat(o ?? ""), a = o !== null && o !== "" && !isNaN(r) && isFinite(r);
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
function En(t = "en-US") {
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
function Ln(t) {
  if (t == null || t === "")
    return null;
  const e = String(t).trim();
  if (!e)
    return null;
  try {
    const { thousandsSeparator: i, decimalSeparator: s } = En(), n = e.replace(new RegExp(`\\${i}`, "g"), "").replace(new RegExp(`\\${s}`, "g"), "."), o = Number(n);
    return isFinite(o) ? o : null;
  } catch (i) {
    throw new nt(`Failed to parse locale number: "${t}". ${i.message || "Parsing error"}`);
  }
}
function Mn(t) {
  if (!t)
    return !1;
  const e = t.toString().trim();
  if (!e)
    return !1;
  const i = Object.keys(We).join("");
  return new RegExp(`^-?((\\d+\\s+)?\\d+\\/\\d+|\\d+|\\d+[${i}]|[${i}]|\\d+'(?:\\s*\\d+(?:\\/\\d+)?"?)?|(\\d+\\s+)?\\d+\\/\\d+"|\\d+")$`).test(e);
}
function is(t, e = !1) {
  if (t == null || t === "")
    return null;
  let i = String(t).trim();
  if (!i)
    return null;
  const s = Object.keys(We).join("");
  i = i.replace(new RegExp(`(\\d)\\s+([${s}])`, "g"), "$1$2");
  try {
    const n = Object.keys(We).join(""), o = new RegExp(`^(-?)(\\d+)([${n}])$`), r = new RegExp(`^(-?)([${n}])$`), a = i.match(o), l = i.match(r);
    if (a) {
      const c = a[1], f = a[2], d = a[3], y = We[d];
      if (y)
        return `${c}${f} ${y}`;
      throw new Error(`Unknown vulgar fraction character: ${d}`);
    } else if (l) {
      const c = l[1] || "", f = l[2], d = We[f];
      if (d)
        return `${c}${d}`;
      throw new Error(`Unknown vulgar fraction character: ${f}`);
    } else if (Mn(i)) {
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
      const f = e ? Ln(i) : parseFloat(i);
      return f === null || isNaN(f) || !isFinite(f) ? null : f.toString();
    }
  } catch (n) {
    throw new nt(`Failed to clean numeric input: "${t}". ${n.message || "Cleaning error"}`);
  }
}
function za(t, e, i = null, s = null) {
  if (t && !(!W(t) && !Ut(t))) {
    if (!["decimal", "fraction"].includes(e)) {
      console.warn("Attempting to update to an invalid number format:", e);
      return;
    }
    for (const n of t.numberFormatKeys)
      if (typeof t[n] == "object" && t[n] !== null)
        for (const o in t[n])
          Object.prototype.hasOwnProperty.call(t[n], o) && (t[n][o] = I({ v: t[n][o], nf: e, dp: i, pl: !1, fr: s }));
      else
        t[n] = I({ v: t[n], nf: e, dp: i, pl: !1, fr: s });
  }
}
function _n(t) {
  return /^-?\d*\.?\d+$/.test(t);
}
function Rn(t) {
  return /^-?(\d+\s+)?\d+\/\d+$/.test(t) || /^-?\d+$/.test(t);
}
function I(t) {
  if (t.v == null || t.v === "")
    return t.nf === "decimal" || !t.nf && t.o?.numberFormat !== "fraction" ? null : "";
  const e = t.o ?? {}, i = t.nf ?? e?.numberFormat ?? "decimal", s = t.dp ?? e?.decimalPlaces ?? St, n = t.pl ?? e?.parseLocale ?? !1, o = t.fr ?? e?.fractionRoundTo ?? bi;
  if (i === "decimal") {
    if (typeof t.v == "number") {
      if (typeof s == "number" && s !== St) {
        const r = Math.pow(10, s);
        return Math.round(t.v * r) / r;
      }
      return t.v;
    }
    if (typeof t.v == "string") {
      const r = t.v.trim();
      if (_n(r) && !n) {
        const a = parseFloat(r);
        if (isFinite(a)) {
          if (typeof s == "number" && s !== St) {
            const l = Math.pow(10, s);
            return Math.round(a * l) / l;
          }
          return a;
        }
      }
    }
  } else if (i === "fraction" && typeof t.v == "string") {
    const r = t.v.trim();
    if (Rn(r))
      try {
        const a = new He(r);
        if (isFinite(a.valueOf())) {
          if (o === 0 || o === bi)
            return a.toFraction(!0);
          const l = a.mul(o), c = Math.round(l.valueOf());
          return new He(c, o).toFraction(!0);
        }
      } catch {
      }
  }
  try {
    const r = is(t.v, n);
    return r === null || r === "" ? i === "decimal" ? null : "" : i === "decimal" ? An(r, s) : Fn(r, o);
  } catch (r) {
    throw r instanceof nt ? r : new nt(`Failed to convert number format: "${t.v}" to ${i}. ${r.message}`);
  }
}
const ze = {
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
function $(t, e) {
  if (e?.returnKey)
    return `fields.${t}`;
  const i = `fields.${t}`, s = q(i);
  if (s === i) {
    const n = ze[t] || t;
    return Te() && !ze[t] && console.warn(`[field-mappings] No translation or fallback for field: "${t}"`), n;
  }
  return Te() && console.log(`[field-mappings] Translated "${t}" -> "${s}"`), s;
}
const ss = (t, e, i, s, n, o) => {
  const r = L(t, e);
  if (r == null || r === "")
    return;
  if (typeof r != "string") {
    new g({
      item: t,
      message: q("errors.validation.must_be_string", {
        0: ze[e]
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
  i.includes(a) || new g({
    item: t,
    message: q("errors.validation.must_be_values", {
      0: ze[e],
      1: i.join(", ")
    }),
    shouldTranslate: !1,
    field: [[e]],
    index: s !== void 0 ? [s] : null,
    type: n ? "warning" : "error",
    issues: o
  });
};
function Va(t) {
  return t.filter((e) => e.type === "error");
}
function Nn(t, e) {
  return typeof t == "object" && t !== null && e in t;
}
function Gn(t) {
  return Nn(t, "issues") && Array.isArray(t.issues);
}
function Ba(t, e, i = !1) {
  if (!Gn(t) || !t.issues?.length)
    return !1;
  const s = i ? "warning" : "error";
  return t.issues.filter((r) => r.type === s).some((r) => r.field?.length ? r.field.some((a) => a.every((l, c) => l === zn(e[c]))) : !1);
}
const $n = {
  partMaterial: "material",
  stockMaterial: "material"
};
function zn(t) {
  return $n[t] ?? t;
}
const Vn = ["banding", "finish", "planing", "info", "machining", "addon"], ja = h().refine((t) => t.startsWith("side.") || t.startsWith("face."), { message: 'Location must start with "side." or "face."' }).transform((t) => t), H = F([
  w(),
  h(),
  u(),
  // Quantity values for addon-type extras with allowQuantity = true
  V(h(), F([w(), h(), u()]))
  // Object-based values: { type: 'oak', thickness: '1mm', test: true, qty: 2 }
]), Ae = x({
  min: u().optional(),
  max: u().optional()
}), Bn = x({
  longSide: Ae.optional(),
  shortSide: Ae.optional(),
  t: Ae.optional(),
  holes: Ae.optional(),
  corners: Ae.optional(),
  hingeHoles: Ae.optional(),
  formula: h().optional(),
  message: h().optional()
}), pt = K.extend({
  // ========== Identity ==========
  type: P(Vn).optional().describe("Type of extra"),
  enabled: w().default(!0).describe("Whether extra is enabled"),
  // ========== Special-product metadata (machining, addon) ==========
  imageUrl: F([h().url(), M("")]).optional().describe("Image URL for custom products"),
  description: h().optional().describe("Customer-facing description for custom products"),
  allowQuantity: w().optional().describe("When true, value is a numeric quantity (addon type)"),
  // Per-product validation rules (reuses ExtrasValidationRule shape).
  // Evaluated against the active shape via validateExtraRule(); supports both
  // dimensional constraints (t, longSide, shortSide) and count constraints
  // (holes, corners, hingeHoles).
  rules: Bn.optional(),
  // ========== Face/Side mappings (superset - each extra uses what it needs) ==========
  // Face values (front/back) - partial record to allow any subset of faces
  faces: x({
    a: H.optional(),
    b: H.optional()
  }).optional().describe("Partial mapping of face keys to extra values"),
  // Side values (edges) - partial record to allow any subset of sides
  sides: x({
    a: H.optional(),
    b: H.optional(),
    c: H.optional(),
    d: H.optional(),
    l1: H.optional(),
    l2: H.optional(),
    w1: H.optional(),
    w2: H.optional()
  }).optional().describe("Partial mapping of side keys to extra values")
  // NOTE: Options are now centralized in CalculationData.extrasOptions
  // No per-shape options are stored - all extras use centralized configuration
}), qt = {
  // Inherit computed properties from validation base
  ...te
  // Add any extra-specific computed properties here
};
V(P(["a", "b"]), H);
V(P(["l1", "l2", "w1", "w2", "a", "b", "c", "d"]), H);
const ns = x({
  min: u().optional().describe("Minimum value"),
  max: u().optional().describe("Maximum value"),
  message: h().optional().describe("Custom error message")
});
x({
  scope: P(["face", "side"]),
  key: h(),
  // Face or Side key
  original: h()
  // Original ExtraLocation string
});
const jn = x({
  location: h().describe("Location identifier (e.g., face.a, side.l1)"),
  properties: V(h(), ns).optional(),
  disabledMessage: h().optional().describe("Message when location is disabled")
}), Wn = x({
  global: V(h(), ns).optional(),
  locations: D(jn).optional().describe("Location-specific constraints"),
  defaultMessage: h().optional().describe("Default message when constraints not met")
});
x({
  scope: D(P(["faces", "sides"])).describe("Scopes this extra type supports"),
  faces: D(di()).optional().describe("Available face locations"),
  sides: D(di()).optional().describe("Available side locations"),
  constraints: Wn.optional()
});
const Hn = pt, Un = {
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
}, qn = ["radius", "bevel"], Kn = K.extend({
  // Corner type
  type: P(qn).nullable().optional().describe("Type of corner modification"),
  // Size of the corner modification
  size: u().nonnegative().nullable().default(0).describe("Size of the corner modification in mm"),
  // Corner index
  index: u().min(0).max(3).default(0).describe("Corner index (0=BL, 1=BR, 2=TR, 3=TL)")
}), Yn = {
  // Inherit computed properties from validation base
  ...te,
  // Check if corner has any operation
  hasOperation: {
    compute: (t) => t.type !== void 0 && t.size > 0,
    metadata: {
      cache: !0,
      dependencies: ["type", "size"],
      returnType: "boolean"
    }
  }
}, Zn = ["l", "w"], Xn = ["top", "bottom", "left", "right", "merged"], Jn = x({
  // Coordinates
  x1: u().default(0),
  x2: u().default(0),
  y1: u().default(0),
  y2: u().default(0),
  // Dimension and position
  dimension: P(Zn).optional(),
  position: P(Xn).optional(),
  // Stock reference - required as cuts cannot exist without a stock
  stock: O("Stock"),
  // Guillotine properties
  isGuillotine: w().default(!1),
  guillotineState: x({
    order: u().nullable().optional(),
    parentSegmentID: h().nullable().optional(),
    phase: u().nullable().optional(),
    segmentCutOrder: u().nullable().optional(),
    partProduced: h().nullable().optional()
  }).nullable().default({}),
  // PTX properties
  ptxData: x({
    order: u().nullable().optional(),
    function: u().nullable().optional(),
    isDummy: w().nullable().optional(),
    headCutStrip: w().nullable().optional()
  }).nullable().optional(),
  // Cut properties
  isHead: w().default(!1),
  isTrim: w().default(!1),
  beamTrimL1: w().default(!1),
  beamTrimL2: w().default(!1),
  beamTrimW1: w().default(!1),
  beamTrimW2: w().default(!1),
  // Distances
  distances: x({
    bottom: u().nullable().optional(),
    left: u().nullable().optional(),
    right: u().nullable().optional(),
    top: u().nullable().optional(),
    partSize: u().nullable().optional()
  }).nullable().optional(),
  // Runtime flags
  remove: w().optional().behavior({ compress: "exclude" })
}), Qn = {
  // Check if cut is inside stock boundaries
  isInsideStock: {
    compute: (t) => {
      const e = t.stock;
      if (!e)
        return !1;
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
}, er = K.extend({
  // Identity
  id: h().optional().describe("Unique identifier for the extras container"),
  // Individual extras - using ref for proper typing
  // Override default reference behavior to serialize full data for proper __entityType markers
  banding: O("Banding", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Edge banding configuration"),
  finish: O("Finish", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Surface finish configuration"),
  planing: O("Planing", {
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
}), tr = {
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
}, ir = pt, sr = {
  // Inherit computed properties from Extra base (includes validation base)
  ...qt,
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
}, nr = ["l", "w"], rr = K.extend({
  // Direction: 'l' = parallel to long side, 'w' = parallel to short side
  direction: P(nr).default("l").describe("Groove direction (l=horizontal, w=vertical)"),
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
}), or = {
  ...te,
  // Check if the groove runs the full panel side
  isFullLength: {
    compute: (t) => t.length === void 0 || t.length === null,
    metadata: {
      cache: !0,
      dependencies: ["length"],
      returnType: "boolean"
    }
  }
}, ar = ["l1", "l2", "w1", "w2"], lr = K.extend({
  // Position
  position: u().min(0).default(0).describe("Position along the side"),
  side: P(ar).describe("Side where hinge is placed"),
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
}), cr = {
  // Inherit computed properties from validation base
  ...te,
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
}, De = ["l1", "l2", "w1", "w2"], ur = ["a", "b", "c", "d"], ge = [...De, ...ur], Z = ["a", "b"], dr = ["regular", "hinge", "shelf"], fr = K.extend({
  // Position
  x: u().min(0).default(0).describe("X position from left edge"),
  y: u().min(0).default(0).describe("Y position from bottom edge"),
  // Dimensions
  diameter: u().min(0.1).default(5).describe("Hole diameter in mm"),
  depth: u().min(0).optional().describe("Hole depth (undefined for through hole)"),
  // Configuration
  face: u().default(0).describe("Face index (0=front, 1=back)"),
  type: P(dr).default("regular").describe("Type of hole"),
  // Edge boring: when set, the hole is drilled into this edge (l1/l2/w1/w2)
  // rather than a face. `depth` then measures how far the bore goes into the
  // panel from that edge. null = a normal face hole.
  edge: P(De).nullable().default(null).describe("Edge the hole is bored into (null = face hole)")
}), hr = {
  // Inherit computed properties from validation base
  ...te,
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
function k(t, e) {
  return t._metadata = e, e.description ? t.describe(e.description) : t;
}
const pr = (t, e) => k(t, e), mr = ["efficiency", "guillotine", "beam", "nesting", "none"], gr = ["l", "w", "flex", "none"], rs = ["efficiency", "time"], yr = ["l", "w"], br = ["efficiency", "smallest"], wr = ["dimensions", "identical", "none"], Sr = ["sheet", "linear", "roll"], Kt = F([
  u().int().positive(),
  ke(),
  ws()
]).transform((t) => t ?? 100).describe("Maximum stack height for beam saw stacking"), Yt = P(mr).nullable().optional().transform((t) => t === null ? void 0 : t), Zt = P(gr).nullable().optional().transform((t) => t === null ? void 0 : t), Xt = P(br).default("efficiency").describe("Method for selecting stocks"), Jt = P(wr).default("identical").describe("How to stack identical parts"), os = x({
  strategy: P(rs).default("efficiency"),
  maxPhase: u().int().min(0).max(10).default(0),
  headCuts: w().default(!1),
  limitStripDimensions: w().default(!1),
  /** Per-phase cutDirection override for firstShapeSegment creation
   *  (experimental). Maps phase number → 'l'/'w'. Forces the placement-
   *  defining segment direction at that phase. */
  phaseDirection: V(h(), P(["l", "w"])).optional()
}).default({
  strategy: "efficiency",
  maxPhase: 0,
  headCuts: !1,
  limitStripDimensions: !1
}), Qt = x({
  primaryCompression: P(yr).default("w")
}).default({
  primaryCompression: "w"
});
x({
  stockType: jt,
  /**
   * Stack height - Maximum stack height
   */
  stackHeight: Kt,
  /**
   * Cut type - Type of cutting algorithm
   */
  cutType: Yt,
  /**
   * Cut preference - Preferred cutting direction
   */
  cutPreference: Zt,
  /**
   * Guillotine options - Configuration for guillotine cutting
   */
  guillotineOptions: os,
  /**
   * Efficiency options - Configuration for efficiency optimization
   */
  efficiencyOptions: Qt,
  /**
   * Stock selection - Method for selecting stocks
   */
  stockSelection: Xt,
  /**
   * Stacking mode - How to stack identical parts
   */
  stackingMode: Jt
});
const xr = u().min(0).default(0), kr = u().min(0).default(0), as = u().min(0).default(0), vr = x({
  dimension: kr,
  minSpacing: as
});
function Ft(t) {
  switch (t) {
    case "sheet":
      return ["guillotine", "efficiency", "beam", "nesting"];
    case "roll":
      return ["guillotine", "efficiency"];
    case "linear":
      return [];
    // Linear materials have no cut types - they're simply cut to length
    default:
      return ["guillotine"];
  }
}
function Et(t, e) {
  if (t === "sheet") {
    if (e === "guillotine")
      return ["l", "w", "flex"];
    if (e === "beam")
      return ["l", "w", "flex"];
    if (e === "efficiency")
      return [];
  } else if (t === "roll") {
    if (e === "guillotine")
      return ["w"];
    if (e === "efficiency")
      return [];
  } else if (t === "linear")
    return [];
  return [];
}
const Ir = k(Yt, {
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
}), Pr = k(Zt, {
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
}), Tr = k(Xt, {
  label: "fields.stockSelection",
  group: "general",
  order: 1,
  type: "enum",
  placeholder: "options.select",
  options: [
    { value: "efficiency", label: "options.most_efficient", info: "options.most_efficient_description" },
    { value: "smallest", label: "options.smallest_first", info: "options.smallest_first_description" }
  ]
}), Or = k(Jt, {
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
}), Dr = k(x({
  strategy: k(P(rs).default("efficiency"), {
    label: "fields.guillotineStrategy",
    group: "guillotine",
    order: 1,
    type: "enum",
    options: [
      { value: "efficiency", label: "options.strategy_efficiency", info: "options.strategy_efficiency_description" },
      { value: "time", label: "options.strategy_time", info: "options.strategy_time_description" }
    ]
  }),
  maxPhase: k(u().int().min(0).max(10).default(0), {
    label: "fields.maxPhase",
    group: "guillotine",
    order: 2,
    type: "number",
    info: "options.maxPhase_description"
  }),
  headCuts: k(w().default(!1), {
    label: "fields.headCuts",
    group: "guillotine",
    order: 3,
    type: "boolean",
    info: "options.headCuts_description"
  }),
  limitStripDimensions: k(w().default(!1), {
    label: "fields.limitStripDimensions",
    group: "guillotine",
    order: 4,
    type: "boolean",
    info: "options.limitStripDimensions_description"
  }),
  // Per-phase cutDirection override (experimental). Maps phase number → 'l'/'w'.
  // Forces the firstShapeSegment created at that phase to use the override
  // direction instead of the auto-computed one. Empty/undefined = legacy
  // auto-compute behaviour. Used at first-shapes.ts:createFirstShapeSegment.
  phaseDirection: V(h(), P(["l", "w"])).optional()
}).default({
  strategy: "efficiency",
  maxPhase: 0,
  headCuts: !1,
  limitStripDimensions: !1
}), {
  label: "fields.guillotineOptions",
  group: "guillotine",
  order: 1,
  type: "object"
}), Cr = k(Qt, {
  label: "fields.efficiencyOptions",
  group: "efficiency",
  order: 1,
  type: "object"
}), _e = (t) => {
  const { min: e, allowZero: i = !1, nullable: s = !0 } = t || {};
  let n;
  return e !== void 0 ? n = i ? u().min(e) : u().min(e) : n = i ? u().min(0) : u().gt(0), s ? F([
    n,
    h(),
    ke()
  ]).transform((o) => o == null || o === "" ? null : typeof o == "string" ? I({ v: o }) ?? null : o) : F([
    n,
    h()
  ]).transform((o) => o === "" ? 0 : typeof o == "string" ? I({ v: o }) ?? 0 : o);
}, ls = () => k(Ue, {
  label: "fields.grain",
  group: "properties",
  options: [
    { value: "n", label: "fields.grain.none" },
    { value: "l", label: "fields.grain.length" },
    { value: "w", label: "fields.grain.width" },
    { value: "y", label: "fields.grain.either" }
  ]
}), Ar = () => k(Ri, {
  label: "fields.orientationLock",
  group: "properties",
  options: [
    { value: "", label: "fields.orientationLock.free" },
    { value: "l", label: "fields.orientationLock.length" },
    { value: "w", label: "fields.orientationLock.width" }
  ]
}), et = (t) => k(_e({ allowZero: t.allowZero, nullable: !0 }).default(null), {
  label: t.label,
  placeholder: t.placeholder || "",
  group: "dimensions",
  allowZero: t.allowZero || !1,
  output: "number"
}), Fr = () => k(ee((t) => {
  if (t === "" || t === null || t === void 0)
    return 1;
  if (typeof t == "string") {
    const e = parseInt(t, 10);
    return isNaN(e) ? 1 : e;
  }
  return t;
}, u().min(0, { message: "Quantity should be greater than or equal to 0" }).int({ message: "Quantity must be a whole number" }).default(1)), {
  label: "fields.q",
  placeholder: "fields.q",
  group: "general",
  step: 1,
  output: "number"
}), Er = (t) => k(h().max(200).optional().transform((e) => e ? e.trim().toUpperCase() : ""), {
  label: "fields.name",
  placeholder: t?.placeholder || "",
  group: "general"
}), Lr = () => k(h().max(200).optional().transform((t) => t ? t.trim().toUpperCase() : ""), {
  label: "fields.material",
  placeholder: "fields.material",
  group: "properties"
}), Mr = () => k(_e({ allowZero: !0, nullable: !0 }).optional().transform((t) => {
  if (t != null)
    return t;
}), {
  label: "fields.cost",
  placeholder: "fields.cost",
  group: "pricing",
  step: 0.01,
  output: "number"
}), _r = () => k(u().min(0).max(100).optional().default(0), {
  label: "fields.discount",
  placeholder: "fields.discount",
  group: "pricing",
  step: 1,
  output: "number"
}), Rr = () => k(Ss().max(500).transform((t) => t.replace(/,/g, " ")).optional(), {
  label: "fields.notes",
  placeholder: "fields.notes",
  group: "general"
}), Nr = (t) => k(w().default(!1), t), Gr = (t, e) => k(P(t), e), ae = {
  field: k,
  boolean: Nr,
  enum: Gr,
  custom: pr
}, wi = x({
  ...K.shape,
  // MongoDB ObjectId of the saw doc this input came from. The storefront
  // chains `Saw.findById → InputSaw → calculate request`, and the server
  // hook `resolveSawFromInputStock` reads this back to short-circuit the
  // DB lookup when the picked stock's `db_sawId` already matches what
  // the client shipped. Without the field on the schema, Zod parse
  // strips it during construction and the server always pays the
  // loader round-trip.
  db_id: k(h().optional(), {
    label: "fields.db_id",
    description: "MongoDB ObjectId for the source saw doc",
    group: "system"
  }),
  // ========== Saw identity ==========
  // Identity triple used by `findSawProfile(vendor, model)` to resolve the
  // SAW_PROFILES entry that supplies algorithm constraints + preferences.
  // All optional — legacy clients ship without them and continue to work
  // (no profile applied unless saw identity OR `sawProfileId` is supplied).
  vendor: k(h().optional(), {
    label: "fields.vendor",
    description: "Saw vendor (e.g. Biesse, Mayer, SCM)",
    group: "identity"
  }),
  model: k(h().optional(), {
    label: "fields.model",
    description: "Saw model name (e.g. OptiPlanner, Pratika)",
    group: "identity"
  }),
  softwareVersion: k(h().optional(), {
    label: "fields.softwareVersion",
    description: "Saw control software version (informational)",
    group: "identity"
  }),
  // ========== Stock Type ==========
  stockType: k(P([...Sr]).default("sheet"), {
    label: "fields.stockType",
    group: "general",
    order: 1,
    placeholder: "options.select",
    options: [
      { value: "sheet", label: "options.sheet", info: "options.sheet_description" },
      { value: "linear", label: "options.linear", info: "options.linear_description" },
      { value: "roll", label: "options.roll", info: "options.roll_description" }
    ]
  }),
  // ========== Blade Configuration ==========
  bladeWidth: k(_e({ allowZero: !0, nullable: !1 }).default(0), {
    label: "fields.bladeWidth",
    placeholder: "fields.bladeWidth",
    group: "blade",
    order: 1,
    output: "number",
    info: "Enter your blade width in the current unit (saw kerf)."
  }),
  // ========== Cutting Configuration ==========
  stackHeight: k(Kt, {
    label: "fields.stackHeight",
    group: "stacking",
    order: 1,
    step: 1,
    info: "If your saw supports cutting multiple stock simultaneously, set the maximum total allowed height."
  }),
  cutType: Ir,
  cutPreference: Pr,
  // ========== Guillotine Options ==========
  guillotineOptions: Dr,
  // ========== Efficiency Options ==========
  efficiencyOptions: Cr,
  // ========== General Options ==========
  options: x({
    stockSelection: Tr,
    minSpacing: _e({ allowZero: !0, nullable: !1 }).default(0),
    stackingMode: Or,
    minSpacingDimension: x({
      dimension: _e({ allowZero: !0, nullable: !0 }).optional(),
      minSpacing: _e({ allowZero: !0, nullable: !0 }).optional()
    }).optional()
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical"
  })
}), $r = {
  // Include validation computed properties (isValid)
  ...te,
  // Get valid cut types for current stock type
  validCutTypes: {
    compute: (t) => Ft(t.stockType),
    metadata: {
      cache: !0,
      dependencies: ["stockType"],
      description: "Valid cut types for current stock type",
      returnType: "CutType[]"
    }
  },
  // Get valid cut preferences for current stock type and cut type
  validCutPreferences: {
    compute: (t) => Et(t.stockType, t.cutType),
    metadata: {
      cache: !0,
      dependencies: ["stockType", "cutType"],
      description: "Valid cut preferences for current stock type and cut type",
      returnType: "CutPreference[]"
    }
  }
}, zr = x({
  // Entity type added during serialization by toData() method
  // Used for automatic class recreation during deserialization
  __entityType: h().optional().describe("Entity type added during serialization by AutoSerializable.toData()"),
  // Reference marker for reference-based recreation
  // Used when objects reference each other
  __ref: h().optional().describe("Reference marker for object recreation")
}), Vr = x({
  // ========== Selection State (excluded from compression) ==========
  selected: ae.boolean({
    label: "fields.selected",
    description: "Whether item is selected for multi-edit"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  multiEdit: ae.boolean({
    label: "fields.multiEdit",
    description: "Whether this is the multi-edit item"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  readonly: ae.boolean({
    label: "fields.readonly",
    description: "Whether input is readonly"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Validation State (excluded from compression and serialization) ==========
  isNew: ae.boolean({
    label: "fields.isNew",
    description: "Whether this is a newly created item that should skip validation until first user interaction",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" })
}), Br = x({
  l1: k(ee((t) => t ?? 0, u()).default(0), { label: "fields.l1", group: "trim", allowZero: !0, min: 0, required: !1 }),
  l2: k(ee((t) => t ?? 0, u()).default(0), { label: "fields.l2", group: "trim", allowZero: !0, min: 0, required: !1 }),
  w1: k(ee((t) => t ?? 0, u()).default(0), { label: "fields.w1", group: "trim", allowZero: !0, min: 0, required: !1 }),
  w2: k(ee((t) => t ?? 0, u()).default(0), { label: "fields.w2", group: "trim", allowZero: !0, min: 0, required: !1 })
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 }), jr = ee((t) => {
  if (t == null)
    return { l1: 0, l2: 0, w1: 0, w2: 0 };
  if (typeof t == "object" && t !== null) {
    const e = t, i = (s) => {
      if (s == null)
        return 0;
      if (typeof s == "string") {
        const n = I({ v: s });
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
}, Br), Wr = x({
  // ========== Identity ==========
  id: Li,
  index: u().int().min(0).optional(),
  // ========== Dimensions ==========
  // Input dimensions can be strings (for fractions) or numbers
  l: et({
    label: "fields.l",
    placeholder: "fields.l"
  }),
  w: et({
    label: "fields.w",
    placeholder: "fields.w"
  }),
  t: et({
    label: "fields.t",
    placeholder: "fields.t"
  }),
  q: Fr(),
  // ========== Material Properties ==========
  // Input name with uppercase transform
  name: Er(),
  material: Lr(),
  // ========== Cost ==========
  cost: Mr(),
  // ========== Discount ==========
  discount: _r(),
  // ========== Trim Configuration ==========
  trim: jr,
  // ========== Rotation (Runtime) ==========
  rot: zt.default(0),
  // ========== Flags ==========
  preventAutoRotation: ae.boolean({
    label: "fields.preventAutoRotation",
    description: "Prevent automatic rotation during optimization",
    group: "options"
  }),
  offcut: ae.boolean({
    label: "fields.offcut",
    description: "Mark as offcut material",
    group: "options"
  }),
  processed: ae.boolean({
    label: "fields.processed",
    description: "Has been processed",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Notes ==========
  notes: Rr()
}), rt = x({
  ...zr.shape,
  // System properties from AutoSerializable
  ...K.shape,
  ...Wr.shape,
  // Core business fields
  ...Vr.shape,
  // Input-specific UI fields
  // Override id with strict validation for input shapes/stock (allows blank)
  id: h().regex(/^(\d+\.\d+)?$/, 'ID must be blank or in format "1.0" (e.g., "1.0", "2.1")').default("").describe('Structured identifier for input shapes/stock in format 1.0 (e.g., "1.0") or blank')
}), ei = {
  // Include validation computed properties (isValid)
  ...te,
  // Get the longer side dimension
  longSide: {
    compute: (t) => {
      const e = I({ v: t.l }) ?? 0, i = I({ v: t.w }) ?? 0;
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
      const e = I({ v: t.l }) ?? 0, i = I({ v: t.w }) ?? 0;
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
      const e = I({ v: t.l }) ?? 0, i = I({ v: t.w }) ?? 0;
      return e === i;
    },
    metadata: {
      cache: !1,
      dependencies: ["l", "w"],
      description: "Whether the rectangle is square (l === w)",
      returnType: "boolean"
    }
  }
}, xt = rt.extend({
  // Add grain field for shapes
  //[] is grain needed for inputs?
  grain: ls(),
  // Add orientationLock with input-specific transform
  orientationLock: Ar(),
  // ========== Shared Shape Properties ==========
  upDirection: k(ji, {
    label: "fields.upDirection",
    description: "Direction that should face up",
    group: "properties",
    order: 5,
    options: [
      { value: null, label: "fields.upDirection.none" },
      { value: "l", label: "fields.upDirection.length" },
      { value: "w", label: "fields.upDirection.width" }
    ]
  }),
  stockLock: k(Bi, { label: "fields.stockLock" }),
  // ========== Stock Matching ==========
  stockMatch: ln.nullable().optional(),
  // ========== Stock Reference ==========
  // Identifies which stock/material this shape was created from (for ecommerce material persistence)
  stock: x({
    db_id: h().optional(),
    code: h().optional(),
    material: h().optional(),
    thickness: u().optional()
  }).nullable().optional(),
  // ========== Custom Data ==========
  customData: k(Wi, { label: "fields.customData", description: "Custom user-defined data" }),
  // ========== Labels (saw label printer / barcode machine) ==========
  // Typed, format-aware fields consumed by post-processors that drive
  // label printers on the saw itself. Fields without a supporting format
  // for the chosen saw produce a warning, not a hard failure. See
  // `saws/label-fields.ts` for the field → format support map.
  labels: k(Hi, { label: "fields.labels", description: "Saw label-printer fields (barcode1/barcode2/room/pallet/drawing/order/colour/productInfo/productNumber)" }),
  // ========== Internal Code ==========
  code: $t.optional(),
  // ========== Material reference (CLE materials feature) ==========
  // Client-side reference to the project materials list entry this part is associated
  // with. Stripped at the calc boundary (converters.ts); `material`/`t` are resolved from
  // the linked material and kept populated for the optimiser/stock-match/post-processors.
  // NB: no `description` here — `field()` would `.describe()` and drop `_metadata`.
  materialId: k(h().optional(), {
    label: "fields.materialId",
    group: "system",
    hidden: !0
  }),
  // ========== Custom Display Color ==========
  // NOTE: avoid setting `description` here — the `field()` helper calls
  // `.describe()` when a description is present, which clones the schema
  // and drops the `_metadata` (so `type: 'color'` would never reach the
  // field generator and the input would render as plain text).
  color: k(h().nullable().optional(), {
    label: "fields.color",
    group: "properties",
    type: "color",
    w: "32px"
  }),
  // ========== UI Extension (excluded from compression) ==========
  selectedMaterial: k(z().optional(), { label: "fields.selectedMaterial", description: "Selected material object" }).behavior({ compress: "exclude" }),
  // ========== Machining ==========
  // Override default reference behavior to serialize full data
  machining: O("Machining", {
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
  extras: O("Extras", {
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
  fullStock: k(w().default(!1), {
    label: "fields.fullStock",
    description: "Purchase full stock sheet without cutting",
    group: "properties"
  }),
  // ========== Nesting ==========
  // Polygon outline for irregular nesting shapes (from DXF import)
  outline: D(x({ x: u(), y: u() })).nullable().optional()
}), Hr = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...ei,
  // Check if has grain direction
  hasGrain: {
    compute: (t) => t.grain === "l" || t.grain === "w",
    metadata: {
      cache: !1,
      dependencies: ["grain"],
      returnType: "boolean"
    }
  }
}, kt = x({
  ...rt.shape,
  ...Gi.shape,
  // ========== Stock-specific Properties ==========
  // Override l to allow 0 for infinite length rolls
  l: et({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !0
  }),
  // Add grain field for stock
  grain: ls(),
  preventGrainRotation: ae.boolean({
    label: "fields.preventGrainRotation",
    description: "Prevent rotation that would change grain direction",
    group: "options",
    order: 4
  }),
  // Stock-specific flags (infiniteLength is now in sharedStockPropertiesSchema from merge above)
  used: ae.boolean({
    label: "fields.used",
    description: "Whether stock has been used"
  }),
  // Display and filtering properties
  color: k(_i, {
    label: "fields.color",
    description: 'Material color ({ hex: "#FF5733", name: "Red" } or legacy string)',
    group: "display",
    order: 1
  }),
  weight: k(u().positive().optional(), {
    label: "fields.weight",
    description: "Weight in kg",
    group: "display",
    order: 2
  }),
  imageUrl: k(F([h().url(), M("")]).optional(), {
    label: "fields.imageUrl",
    description: "Image URL for stock display",
    group: "display",
    order: 3
  }),
  // Stock filter and categorization properties
  tags: k(D(h()).optional(), {
    label: "fields.tags",
    description: "Searchable tags for filtering",
    group: "display",
    order: 4
  }),
  available: k(w().optional(), {
    label: "fields.available",
    description: "Whether stock is available for selection (defaults to true)",
    group: "display",
    order: 5
  }),
  // Material-level flag inherited onto stock — when true, the checkout forces
  // `fullStock` on the part and locks dimensions to this stock's L/W.
  fullSizeOnly: k(w().optional(), {
    label: "fields.fullSizeOnly",
    description: "Disable cut-to-size — customer must purchase whole sheet",
    group: "options"
  }),
  // Database ID (MongoDB ObjectId as string)
  db_id: k(h().optional(), {
    label: "fields.db_id",
    description: "MongoDB ObjectId for this document",
    group: "system"
  }),
  // Material/product code from supplier catalogue
  code: k(h().optional(), {
    label: "fields.code",
    description: "Material or product code from supplier",
    group: "system"
  }),
  // Client-side reference to the project materials list entry this stock is associated
  // with (CLE materials feature). The optimiser/post-processors never see it — it is
  // stripped at the calc boundary (see converters.ts) — but `material`/`t`/`grain` are
  // resolved from the linked material and kept populated for them. NB: no `description`
  // here on purpose — `field()` calls `.describe()` when a description is present, which
  // clones the schema and drops `_metadata` (so `group`/`hidden` would be lost).
  materialId: k(h().optional(), {
    label: "fields.materialId",
    group: "system",
    hidden: !0
  }),
  // Per-stock preferred saw — survives through InputStock construction so
  // it can flow from the storefront /stock endpoint (set on stocks
  // directly OR on library entries via subscription override rules) all
  // the way to the calculate socket, where `resolveSawFromInputStock`
  // on the server promotes it onto inputSaw before optimisation runs.
  // Without this field on the schema, Zod parse strips it during
  // `createInputStockFromOption`, and the per-stock saw routing chain
  // silently breaks at the client.
  db_sawId: k(h().optional(), {
    label: "fields.db_sawId",
    description: "MongoDB ObjectId of the saw this stock should be cut on",
    group: "system"
  }),
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
  resolvedExtras: k(x({
    banding: z().optional(),
    finish: z().optional(),
    planing: z().optional(),
    machining: z().optional()
  }).optional(), {
    label: "fields.resolvedExtras",
    description: "Per-stock resolved Extra objects (storefront UI hint, not consumed by the calc engine)",
    group: "system"
  }).behavior({ compress: "exclude" }),
  // ========== Custom Data ==========
  customData: k(Wi, { label: "fields.customData", description: "Custom user-defined data" }),
  // Saw configuration (excluded from compression)
  saw: k(z().optional(), { label: "fields.saw", description: "Saw configuration data" }).behavior({ compress: "exclude" }),
  // Available extras from material (for e-commerce checkout)
  // Contains arrays of extra IDs that are available for this stock item
  extras: k(x({
    banding: D(h()).optional(),
    finish: D(h()).optional(),
    planing: D(h()).optional(),
    machining: D(h()).optional()
  }).optional(), {
    label: "fields.extras",
    description: "Available extras for this stock (inherited from material)",
    group: "display"
  })
}), Ur = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...ei
  // InputStock doesn't define additional computed properties
}, qr = x({
  autoId: h().describe("Shape autoId"),
  x: u().default(0).describe("X position within group (0 = left edge, increases rightward)"),
  y: u().default(0).describe("Y position within group (0 = bottom edge, increases upward)")
}), Kr = K.extend({
  // ========== Identification ==========
  id: h().optional().describe("Unique identifier"),
  // ========== Shape References ==========
  shapeIds: D(h()).default([]).describe("List of shape IDs in this group"),
  shapes: D(h()).default([]).transform((t) => t?.map(String) ?? []).describe("Shape identifiers"),
  // ========== Positions ==========
  positions: D(qr).default([]).describe("XY positions for each shape within the group"),
  // ========== Group Properties ==========
  q: u().int().min(1).default(1).describe("Quantity of groups"),
  duplicate: w().default(!1).describe("If a duplicate"),
  // ========== Material Properties (from Group) ==========
  name: h().optional().describe("Group name"),
  material: h().optional().describe("Material type"),
  grain: Ue.describe("Grain direction"),
  // ========== Stock Matching (excluded during compression) ==========
  stockMatch: x({
    stockId: h().optional(),
    material: h().optional(),
    thickness: u().optional(),
    grain: Ue.optional()
  }).optional().describe("Matching stock information").behavior({ compress: "exclude" }),
  // ========== Runtime Properties ==========
  shapeList: D(z()).optional().describe("Runtime shape list for validation").behavior({ compress: "exclude" })
}), Yr = {
  // Include validation computed properties (isValid)
  ...te
  // InputUserGroup doesn't define additional computed properties
}, Zr = x({
  part: u().int().min(0).describe("Index of the part in the parts array"),
  x: u().min(0).describe("X position within group (0 = left edge, increases rightward)"),
  y: u().min(0).describe("Y position within group (0 = bottom edge, increases upward)")
}), Wa = x({
  positions: D(Zr).min(2).describe("Part positions within the group. Each entry specifies a part index and its x,y coordinates."),
  q: u().int().min(1).describe("Quantity of groups")
}), Xr = K.extend({
  // Collections of machining operations
  holes: we("Hole").default([]).describe("Array of holes").behavior({
    serialize: "full",
    clone: "copy"
  }),
  hingeHoles: we("HingeHole").default([]).describe("Array of hinge hole sets").behavior({
    serialize: "full",
    clone: "copy"
  }),
  corners: we("Corner").default([]).describe("Array of corner operations").behavior({
    serialize: "full",
    clone: "copy"
  }),
  grooves: we("Groove").default([]).describe("Array of groove operations").behavior({
    serialize: "full",
    clone: "copy"
  }),
  // Validation
  enabled: w().default(!0).describe("Whether machining is enabled")
}), Jr = {
  // Inherit computed properties from validation base
  ...te,
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
}, Qr = pt, eo = {
  // Inherit computed properties from Extra base
  ...qt,
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
}, Lt = K.extend({
  // Saw identity — survives the InputSaw → Saw conversion so the optimiser
  // can resolve a profile from the runtime saw. See findSawProfile().
  vendor: h().optional().describe("Saw vendor"),
  model: h().optional().describe("Saw model name"),
  softwareVersion: h().optional().describe("Saw control software version"),
  // Core properties from shared schema
  stockType: jt,
  stackHeight: Kt.describe("Maximum stack height"),
  cutType: Yt,
  cutPreference: Zt,
  // Blade width (numeric for runtime)
  bladeWidth: xr.describe("Blade width"),
  // Guillotine options
  guillotineOptions: os,
  // Efficiency options
  efficiencyOptions: Qt,
  // General options (nested stockSelection and stackingMode)
  options: x({
    stockSelection: Xt,
    minSpacing: as,
    stackingMode: Jt,
    minSpacingDimension: vr
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical",
    minSpacingDimension: {
      dimension: 0,
      minSpacing: 0
    }
  }).describe("General saw options")
}), to = {
  // Include validation computed properties
  ...te,
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
Lt.describe(JSON.stringify({
  name: "Saw",
  description: "Runtime saw configuration for optimization",
  version: "1.0.0",
  category: "configuration"
}));
const Me = 1e-10, io = 10, so = Number.MAX_SAFE_INTEGER, no = 4294967295, j = (t) => typeof t == "number" && Number.isFinite(t), tt = (t) => Array.isArray(t) && t.length > 0;
function je(t, e, i = Me) {
  if (t === e)
    return 0;
  if (Number.isInteger(t) && Number.isInteger(e))
    return t > e ? 1 : -1;
  const s = t - e;
  return Math.abs(s) < i ? 0 : s;
}
const ro = {
  greaterThan: (t, e, i = Me) => !j(t) || !j(e) ? !1 : je(t, e, i) > 0,
  greaterThanOrEqualTo: (t, e, i = Me) => !j(t) || !j(e) ? !1 : je(t, e, i) >= 0,
  lessThan: (t, e, i = Me) => !j(t) || !j(e) ? !1 : je(t, e, i) < 0,
  lessThanOrEqualTo: (t, e, i = Me) => !j(t) || !j(e) ? !1 : je(t, e, i) <= 0,
  equalTo: (t, e, i = Me) => !j(t) || !j(e) ? !1 : je(t, e, i) === 0
};
function oo(t) {
  return j(t) ? Number.isInteger(t) ? t : Number(t.toFixed(io)) : !1;
}
function ao(t) {
  if (!j(t) || t < 0 || t > so)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (no + 1) * t);
}
function lo(t, e) {
  if (!tt(t))
    throw new Error("Invalid array parameter");
  if (!j(e) || e < 0 || e > t.length)
    throw new Error("Invalid size parameter");
  const i = t.slice(), s = t.length - e;
  for (let n = t.length - 1; n >= s; n--) {
    const o = Math.floor(Math.random() * (n + 1));
    [i[n], i[o]] = [i[o], i[n]];
  }
  return i.slice(s);
}
class Ze {
  static calculateMean(e) {
    if (!tt(e))
      throw new Error("Invalid input array");
    return e.reduce((i, s) => i + s, 0) / e.length;
  }
  static calculateStandardDeviation(e, i = null) {
    if (!tt(e))
      throw new Error("Invalid input array");
    const s = i ?? this.calculateMean(e), n = e.reduce((o, r) => {
      const a = r - s;
      return o + a * a;
    }, 0) / e.length;
    return Math.sqrt(n);
  }
  static calculateCoefficientOfVariation(e) {
    if (!tt(e))
      throw new Error("Invalid input array");
    const i = this.calculateMean(e);
    if (i === 0)
      throw new Error("Mean is zero, coefficient of variation undefined");
    return this.calculateStandardDeviation(e, i) / i;
  }
}
const T = {
  ...ro,
  isNumber: j,
  round: oo,
  getRandom: ao,
  getRandomSample: lo,
  calculateStandardDeviation: Ze.calculateStandardDeviation.bind(Ze),
  calculateCoefficientOfVariation: Ze.calculateCoefficientOfVariation.bind(Ze)
};
function Si(t) {
  return t && typeof t == "object" && typeof t.toData == "function";
}
let xi = 0, ki = Date.now();
const co = 1e4;
function uo() {
  return xi % co === 0 && (ki = Date.now()), `${ki}-${(xi++).toString(36)}`;
}
var re;
(function(t) {
  t.Full = "full", t.Compressed = "compressed";
})(re || (re = {}));
class le {
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
    let i = le._partialSchemaCache.get(e);
    return i || (i = e.partial(), le._partialSchemaCache.set(e, i)), i;
  }
  // Private flag for compression mode (will be set as non-enumerable in constructor)
  _serializationMode;
  constructor(e) {
    this.autoId = e?.autoId || uo(), Object.defineProperty(this, "_serializationMode", {
      value: re.Full,
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
      const i = Be(e.schema), s = e.schema;
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
            if (r = r._def.innerType || r._def.type, !r)
              break;
          } else if (l === "ZodUnion" && r._def.options?.length > 0) {
            const c = r._def.options, f = s ? `${s}.${n}` : n;
            for (const d of c) {
              if (!d)
                continue;
              const y = Dt(d);
              if (y) {
                const m = f;
                i[m] || (i[m] = y);
                break;
              }
            }
            for (const d of c) {
              if (!d || !d._def)
                continue;
              const y = Be(d);
              for (const [m, b] of Object.entries(y)) {
                const v = s ? `${s}.${n}.${m}` : `${n}.${m}`;
                i[v] || (i[v] = b);
              }
              if (d && d.shape) {
                const m = s ? `${s}.${n}` : n;
                this.extractNestedBehaviors(d.shape, i, m);
              }
            }
            r = null;
            break;
          } else
            break;
        }
        if (!r)
          continue;
        const a = Be(r);
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
    const i = {}, s = this.getSerializationFields(), n = this.getFieldBehaviors(), o = e === re.Compressed ? "compressed" : "full";
    if (s.length === 0) {
      const r = /* @__PURE__ */ new Set();
      Object.getOwnPropertyNames(this).forEach((a) => r.add(a));
      for (const a in this)
        r.add(a);
      for (const a of r) {
        if (a.startsWith("_"))
          continue;
        const l = this.constructor.serializationExcludedProperties;
        if (l && l.includes(a) || this.isGetterProperty(a))
          continue;
        const c = this[a];
        if (typeof c == "function" || c === void 0)
          continue;
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
    return this.toData(re.Compressed);
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
      r ? a = e : a = le.getCachedPartialSchema(s).parse(e);
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
        if (s instanceof Di) {
          const n = s.issues.map((o) => new g({
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
      const m = s.pop() || "0", b = parseInt(m, 10);
      isNaN(b) && s.push(m), n = String(e);
    } else {
      const m = s.pop() || "0", b = parseInt(m, 10);
      isNaN(b) ? (s.push(m), n = "1") : n = String(b + 1);
    }
    s.push(n);
    const o = s.join("."), a = `${this.autoId.includes(".") ? this.autoId.substring(0, this.autoId.indexOf(".")) : this.autoId}.${n}`, l = this.constructor, c = this.getDirectPropertyCopy(i), f = l.schema;
    let d = {};
    f && (d = Be(f));
    const y = l.defaults || (f ? f.parse({}) : {}) || {};
    for (const [m, b] of Object.entries(d))
      b.clone === "reset" && (m in y ? c[m] = y[m] : delete c[m]);
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
        if (!Object.prototype.hasOwnProperty.call(this, n) || n.startsWith("_"))
          continue;
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
        if (o)
          continue;
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
    if (!e)
      return e;
    const o = this.constructor.schema;
    let r = null;
    if (o && (r = Be(o)[i] || null), r?.clone)
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
    if (!e || typeof e != "object")
      return e;
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
    if (!e || typeof e != "object")
      return e;
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
        if (Si(r)) {
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
          const l = s === "compressed" ? re.Compressed : re.Full;
          return r.toData(l);
        }
        return r;
      });
    if (Si(e)) {
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
      const a = s === "compressed" ? re.Compressed : re.Full;
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
    if (!e || typeof e != "object" || typeof e.getType == "function")
      return e;
    const i = e.__entityType || e.__ref || e.type || e._type;
    if (!i)
      return e;
    const n = Gt().get(i);
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
class A extends le {
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
    A.recreateFunc = e;
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
    const s = this.extractValidationOptions(e), o = e._validated === !0 || s.skipSchemaValidation || s.validationMode === "none" || s.validationMode === "business";
    let r;
    if (o)
      r = this.recreateNestedClasses(e, i);
    else if (s.enableStrictMode) {
      const a = i.safeParse(e);
      a.success ? r = a.data : r = this.filterInvalidFields(e, a.error, i);
    } else {
      const a = i.safeParse(e);
      if (a.success)
        r = a.data;
      else {
        const l = le.getCachedPartialSchema(i).safeParse(e);
        l.success ? r = l.data : r = this.filterInvalidFields(e, l.error, i);
      }
    }
    if (i && r) {
      let a = A._schemaKeysCache.get(i);
      if (!a) {
        const l = i.shape || i._def?.shape;
        l && (a = Object.keys(l), A._schemaKeysCache.set(i, a));
      }
      if (a) {
        const l = {};
        for (const c of a)
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
    }), o || Object.defineProperty(this, "_validated", {
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
    ], o = { ...e }, r = /* @__PURE__ */ new Set();
    for (const l of i.issues)
      if (l.path.length > 0) {
        const c = l.path[0];
        n.includes(c) || r.add(c);
      }
    r.forEach((l) => {
      delete o[l];
    });
    const a = le.getCachedPartialSchema(s).safeParse(o);
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
    if (!e || typeof e != "object" || Array.isArray(e))
      return e;
    let s = A._zRefFieldsCache.get(i);
    if (s === void 0) {
      s = null;
      const o = i.shape;
      for (const [r, a] of Object.entries(o)) {
        const l = this.extractClassNameFromSchema(a);
        l && (s || (s = /* @__PURE__ */ new Map()), s.set(r, l));
      }
      A._zRefFieldsCache.set(i, s);
    }
    if (!s)
      return e;
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
      const s = e.__entityType || i, o = Gt().get(s);
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
        if (r)
          return r;
      }
      if (i === "Shape" && s.shapeList) {
        const r = s.shapeList.find((a) => a.id === n || a.autoId === n);
        if (r)
          return r;
      }
      if (i === "Group" && s.groupList) {
        const r = s.groupList.find((a) => a.id === n || a.autoId === n);
        if (r)
          return r;
      }
      const o = i.toLowerCase() + "List";
      if (s[o] && Array.isArray(s[o])) {
        const r = s[o].find((a) => a.id === n || a.autoId === n);
        if (r)
          return r;
      }
    }
    return e && typeof e == "object" ? (s && (e.id || e.autoId), A.recreateFunc ? A.recreateFunc(e, s, i) : { ...e, __ref: i }) : e;
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
   * Apply computed properties as getters
   * Optimized: Defines getters on prototype once per class, not on every instance
   */
  applyComputedProperties() {
    const e = this.constructor;
    if (A._computedPropsInitialized.has(e))
      return;
    const i = e.computedProperties;
    if (!i) {
      A._computedPropsInitialized.add(e);
      return;
    }
    const s = e.prototype;
    for (const [n, o] of Object.entries(i)) {
      if (!o || typeof o != "object")
        continue;
      const r = o;
      r.compute && (Object.prototype.hasOwnProperty.call(s, n) && Object.getOwnPropertyDescriptor(s, n)?.get || Object.defineProperty(s, n, {
        get() {
          return r.compute(this);
        },
        enumerable: !1,
        configurable: !0
      }));
    }
    A._computedPropsInitialized.add(e);
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
      const r = le.getCachedPartialSchema(i).safeParse(e);
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
    if (!e)
      return [];
    try {
      const i = this.toData ? this.toData() : { ...this };
      return e.parse(i), [];
    } catch (i) {
      if (i instanceof Di)
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
    if (!e)
      return e;
    if (Array.isArray(e))
      return e.map((s) => A.cleanEntityForAPI(s));
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
      if (r instanceof xs) {
        const a = r.options.some((c) => c instanceof ks), l = r.options.some((c) => c instanceof vs);
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
    if (e instanceof Is || e instanceof Ps)
      return this.unwrapSchema(e._def?.innerType);
    if (e instanceof Ts)
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
class Re extends A {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Es;
  static computedProperties = Ls;
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
    return (!T.isNumber(this.x1) || !T.isNumber(this.x2) || !T.isNumber(this.y1) || !T.isNumber(this.y2)) && e.push(new g({
      message: "Line coordinates must be valid numbers",
      type: "error"
    })), this.x1 === this.x2 && this.y1 === this.y2 && e.push(new g({
      message: "Line must have non-zero length",
      type: "error"
    })), this.issues = e, e;
  }
  /**
  * Check collision with shapes
  */
  checkCollisionWithShapes(e, i, s = !1) {
    if (!i || !i.length)
      return !1;
    if (!this.dimension)
      throw new Error("No line dimension for collision check");
    const n = e.halfBladeWidth;
    this.shapeCollisions = this.shapeCollisions || [];
    const o = i.filter((r) => r.added);
    for (const r of o) {
      let a = !1, l = !1;
      if (this.dimension === "l" ? (a = T.greaterThan(this.x2, r.x) && T.lessThan(this.x1, r.x + r.l), l = T.greaterThan(this.y1 + n, r.y) && T.lessThan(this.y1 - n, r.y + r.w)) : this.dimension === "w" && (a = T.greaterThan(this.x1 + n, r.x) && T.lessThan(this.x1 - n, r.x + r.l), l = T.greaterThan(this.y2, r.y) && T.lessThan(this.y1, r.y + r.w)), a && l)
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
    return new Re({ x1: e, y1: i, x2: s, y2: n, origin: o, type: r });
  }
  get lineDimension() {
    return !T.isNumber(this.x1) || !T.isNumber(this.x2) || !T.isNumber(this.y1) || !T.isNumber(this.y2) ? null : this.x1 === this.x2 && this.y1 !== this.y2 ? "w" : this.y1 === this.y2 && this.x1 !== this.x2 ? "l" : null;
  }
  get lineDirection() {
    return !T.isNumber(this.x1) || !T.isNumber(this.x2) || !T.isNumber(this.y1) || !T.isNumber(this.y2) ? null : this.x1 < this.x2 ? "lr" : this.x1 > this.x2 ? "rl" : this.y1 < this.y2 ? "bt" : this.y1 > this.y2 ? "tb" : null;
  }
  get coordinates() {
    return {
      x1: this.x1,
      x2: this.x2,
      y1: this.y1,
      y2: this.y2
    };
  }
}
const fo = {
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
}, ho = {
  topLeft: {
    top: ["topRight"],
    default: ["topRight"]
  },
  bottomRight: {
    right: ["topRight"],
    default: ["topRight"]
  }
}, po = {
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
function mo(t, e) {
  const i = /* @__PURE__ */ new Set();
  if (t.raycast) {
    const n = fo[t.direction];
    return n && n[t.corner] && n[t.corner][t.grid] && i.add(n[t.corner][t.grid]), i;
  }
  if (e?.cutType !== "efficiency") {
    const n = ho[t.corner];
    return n && (t.grid ? n[t.grid] && n[t.grid].forEach((o) => i.add(o)) : n.default?.forEach((o) => i.add(o))), i;
  }
  const s = po[t.corner];
  return s && (t.grid ? s[t.grid] && s[t.grid].forEach((n) => i.add(n)) : s.default?.forEach((n) => i.add(n))), i;
}
class X extends A {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Ns;
  static computedProperties = Gs;
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
    if (typeof e == "object")
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
    return new X(e, i, s);
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
    return this.a !== void 0 && (s.a = this.a), this.b !== void 0 && (s.b = this.b), this.stock && (s.stock = this.stock), this.direction && (s.direction = this.direction), this.type && (s.type = this.type), this.corner && (s.corner = this.corner), this.shapePosition && (s.shapePosition = this.shapePosition), this.grid && (s.grid = this.grid), this.raycast && (s.raycast = this.raycast), this.collision && (s.collision = this.collision), this.tooClose && (s.tooClose = this.tooClose), this.adjustedForMinSpacing && (s.adjustedForMinSpacing = this.adjustedForMinSpacing), new X(s);
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
    return mo(this, e);
  }
}
function ce(t) {
  return !(t === void 0 || t === null || t === "" || typeof t == "object" && !Object.values(t).length);
}
function ot(t) {
  return t ? t === "l" ? "w" : "l" : null;
}
function it(t, e = !1) {
  if (typeof t.l == "number" && typeof t.w == "number") {
    if (!e || !("trim" in t))
      return { l: t.l, w: t.w };
    if (t.trimmed === !0)
      return { l: t.l, w: t.w };
    if ("hasTrim" in t && !t.hasTrim)
      return { l: t.l, w: t.w };
    const a = t.trim;
    return a ? {
      l: t.l - +(a.w1 || 0) - +(a.w2 || 0),
      w: t.w - +(a.l1 || 0) - +(a.l2 || 0)
    } : { l: t.l, w: t.w };
  }
  const i = typeof t.l == "string" ? I({ v: t.l }) : t.l, s = typeof t.w == "string" ? I({ v: t.w }) : t.w;
  if (!e || !("trim" in t))
    return { l: i, w: s };
  if (es(t))
    return { l: i, w: s };
  if (Qi(t) && !t.hasTrim)
    return { l: i, w: s };
  const n = t.trim, o = I({ v: n.w1 ?? 0 }) + I({ v: n.w2 ?? 0 }), r = I({ v: n.l1 ?? 0 }) + I({ v: n.l2 ?? 0 });
  return {
    l: i - (typeof o == "string" ? I({ v: o }) : o),
    w: s - (typeof r == "string" ? I({ v: r }) : r)
  };
}
function go(t, e) {
  if ("trim" in t && !es(t)) {
    const i = t.trim;
    e.l = e.l - (I({ v: i.w1 ?? 0 }) + I({ v: i.w2 ?? 0 })), e.w = e.w - (I({ v: i.l1 ?? 0 }) + I({ v: i.l2 ?? 0 }));
  }
  return e;
}
function Fe(t, e, i = !1) {
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
  (Ut(t) || W(t) || Ye(t)) && (s = {
    l: I({ v: t.l }),
    w: I({ v: t.w })
  });
  const n = ("rot" in t ? t.rot : 0) ?? 0;
  return i && (s = go(t, s)), n === e || ([s.l, s.w] = [s.w, s.l]), s;
}
function cs(t) {
  if (!("l" in t) || !("w" in t))
    throw new Error("rotatable item must have l & w properties");
}
function yo(t) {
  de(t) || (cs(t), [t.l, t.w] = [t.w, t.l]);
}
function vi(t, e) {
  return T.lessThanOrEqualTo(t, e);
}
function Ee(t, e) {
  return vi(t.l, e.l) && vi(t.w, e.w);
}
function mt(t, e, i = null, s) {
  if (!e || !t)
    throw new Error("Container and shape are required");
  const n = s ? s.allowExactFit : "allowExactFitShapes" in e && e.allowExactFitShapes === !0, o = s ? s.withTrim : it(e, !0), r = s ? s.withoutTrim : n ? it(e, !1) : o, a = it(t, !0);
  let l = o;
  if (n && (T.equalTo(a.l, r.l) && T.equalTo(a.w, r.w) || T.equalTo(a.l, r.w) && T.equalTo(a.w, r.l)) && (l = r), a.l * a.w > l.l * l.w)
    return !1;
  const c = us(t, e);
  if (t.orientationLock || i !== null) {
    const y = i ?? (c === "w" ? 1 : 0), m = Fe(t, y, !0);
    if (n) {
      const b = Fe(t, y, !1);
      if (T.equalTo(b.l, r.l) && T.equalTo(b.w, r.w))
        return Ee(b, l);
    }
    return Ee(m, l);
  }
  const f = Fe(t, 0, !0);
  if (n) {
    const y = Fe(t, 0, !1);
    if (T.equalTo(y.l, r.l) && T.equalTo(y.w, r.w) && Ee(y, l))
      return !0;
  }
  if (Ee(f, l))
    return !0;
  const d = Fe(t, 1, !0);
  if (n) {
    const y = Fe(t, 1, !1);
    if (T.equalTo(y.l, r.l) && T.equalTo(y.w, r.w) && Ee(y, l))
      return !0;
  }
  return Ee(d, l);
}
function bo(t) {
  if ("orientationLock" in t)
    return t.orientationLock;
  let e = null;
  return (de(t) || Ye(t) || U(t) || W(t)) && (e = t.orientationLock), e;
}
function us(t, e) {
  const i = bo(t);
  if (!ce(i))
    return null;
  if (!e || "direction" in t)
    return i;
  if (!de(t) && ti(t))
    return null;
  if ("getStock" in e) {
    const s = e.getStock;
    if (s && ce(s.grain))
      return i === s.grain ? "l" : "w";
  }
  return i;
}
function Mt(t, e = null, i = null) {
  if (!ce(e))
    throw new Error("no rotation provided to canRotate");
  if (e === !0 && (e = 1), e === !1 && (e = 0), t.preventAutoRotation && e !== 0 || !de(t) && ti(t) && e !== 0 || i && !mt(t, i, e))
    return !1;
  const s = us(t, i);
  return !(s === "l" && e === 1 || s === "w" && e === 0);
}
function wo(t, e = null, i = null) {
  const s = "rot" in t ? t.rot : 0;
  return e === null && (e = s === 0 ? 1 : 0), !de(t) && ti(t) ? !0 : Mt(t, e, i) ? (s === e || yo(t), !0) : !1;
}
function oe(t, e = null, i = null) {
  return e ? e = 1 : e = 0, i && e && !mt(t, i, e) ? !1 : wo(t, e, i);
}
function ti(t) {
  cs(t);
  const e = it(t);
  return T.equalTo(e.l, e.w);
}
class gt extends A {
  // Zod schema for validation and serialization
  static schema = Vt;
  static computedProperties = Bt;
  constructor(e = {}) {
    super(e);
    let i = !1;
    ue(this) && (i = this.infiniteLength), !e?.preventAutoRotation && !i && (this.orientationLock ? (this.orientationLock === "l" && oe(this, 0), this.orientationLock === "w" && oe(this, 1)) : this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !e?.preventGrainRotation && (this.grain = ot(this.grain)))), this.calculateDimensions(), e.skipValidation || e.skipBusinessValidation || e.validationMode === "none" || e.validationMode === "schema" || this.validate();
  }
  /**
   * Calculate derived dimensions (area, longSide, shortSide, parentId)
   * Called automatically in constructor and after dimension changes
   */
  calculateDimensions() {
    this.area = this.l * this.w, this.longSide = Math.max(this.l, this.w), this.shortSide = Math.min(this.l, this.w), this.parentId = Us(this.id);
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
    if (this.issues = [], this.warnings = [], (this.l <= 0 || this.w <= 0) && this.issues.push(new g({
      message: "Rectangle dimensions must be positive",
      type: "error",
      field: [["l"], ["w"]],
      item: this
    })), this.hasTrim) {
      const e = {
        x: (this.trim.w1 || 0) + (this.trim.w2 || 0),
        y: (this.trim.l1 || 0) + (this.trim.l2 || 0)
      };
      e.x >= this.l && this.warnings.push(new g({
        message: "Trim values exceed length",
        type: "warning",
        field: [["trim"]],
        item: this
      })), e.y >= this.w && this.warnings.push(new g({
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
    if (!this.hasTrim || this.trimmed)
      return;
    const e = this.l - this.trim.w1 - this.trim.w2, i = this.w - this.trim.l1 - this.trim.l2;
    if (e <= 0 || i <= 0) {
      this.q = 0, this.issues.push(new g({
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
    if (!this.canRotate)
      return;
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
        return new Re({
          x1: i,
          x2: i + this.l,
          y1: s,
          y2: s,
          type: "bottom",
          validationMode: "none"
          // parentId: this.id
        });
      case "right":
        return new Re({
          x1: i + this.l,
          x2: i + this.l,
          y1: s,
          y2: s + this.w,
          type: "right",
          validationMode: "none"
          // parentId: this.id
        });
      case "top":
        return new Re({
          x1: i,
          x2: i + this.l,
          y1: s + this.w,
          y2: s + this.w,
          type: "top",
          validationMode: "none"
          // parentId: this.id
        });
      case "left":
        return new Re({
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
      bottomLeft: new X(this.x, this.y),
      topLeft: new X(this.x, this.y + this.w),
      topRight: new X(this.x + this.l, this.y + this.w),
      bottomRight: new X(this.x + this.l, this.y)
    };
  }
  /**
   * Creates or retrieves a cached rectangle used for proximity detection.
   * Optimized for frequent calls with the same distance parameter.
   */
  createProximityRectangle(e) {
    if (!e || e < 0)
      return null;
    const i = this.proximity;
    if (i?.distance === e) {
      const n = i.rectangle;
      return this.x === 0 ? (n.x = 0, n.l = this.l + e) : (n.x = this.x - e, n.l = this.l + e * 2), this.y === 0 ? (n.y = 0, n.w = this.w + e) : (n.y = this.y - e, n.w = this.w + e * 2), n;
    }
    const s = new gt({
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
class ii extends gt {
  // Zod schema for validation and serialization
  static schema = Wt;
  static computedProperties = Ht;
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
      const n = new g({
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
    if (!this.shapes)
      return !1;
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
    const i = le.getCachedPartialSchema(ii.schema).parse(e);
    for (const s in i)
      this[s] = i[s];
  }
  /**
  * Check if this container can fit a shape
  */
  canFitShape(e) {
    if (!e || !e.l || !e.w)
      return !1;
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
    return ue(this) ? this : Ji(this) ? this.stock : de(this) ? this.stock : null;
  }
}
class pe extends A {
  // Required: Define schema and computed properties
  static schema = $i;
  static computedProperties = Xs;
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
    const e = this.stripShapeBatches, i = this.constructor.getDefaults(this.constructor.schema);
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
class si extends A {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Jn;
  static computedProperties = Qn;
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
    return new si({ x1: e, y1: i, x2: s, y2: n, position: r, stock: o });
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
class ni extends gt {
  // Zod schema for validation and serialization
  static schema = qe;
  static computedProperties = Ke;
  constructor(e = {}) {
    if (super(e), !this.guillotineState)
      this.guillotineState = new pe();
    else if (!(this.guillotineState instanceof pe)) {
      const i = typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new pe(i);
    }
    (!this.firstShape || typeof this.firstShape != "object") && (this.firstShape = { sampleRotations: [], isFirstShape: !1 }), (!this.priority || typeof this.priority != "object") && (this.priority = {}), U(this) && (!this.group || typeof this.group != "object") && (this.group = {
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
    if (!this.guillotineState || !(this.guillotineState instanceof pe)) {
      const e = this.guillotineState && typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new pe(e);
    }
  }
  /**
   * Override update to ensure guillotineState is properly handled
   */
  update(e) {
    const i = this.guillotineState instanceof pe ? this.guillotineState : null;
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
  reset({ keepScores: e = !1, keepGuillotineBatchData: i = !0, keepGroupData: s = !1, keepFirstShapeSampleRotations: n = !1 } = {}) {
    if (this.added = !1, this.stock = null, this.placementOrder = void 0, this.x = 0, this.y = 0, e || (this.score = null, this.bestScore = null), this.firstShape.isFirstShape = !1, n || (this.firstShape.sampleRotations = []), this.patternMatch = !1, this.fitsStock = null, this.guillotineState instanceof pe)
      if (i) {
        const o = this.guillotineState.stripShapeBatches;
        this.guillotineState.reset(), o && (this.guillotineState.stripShapeBatches = o);
      } else
        this.guillotineState.reset();
    else
      this.guillotineState = new pe();
    U(this) && (s || "group" in this && this.group && (delete this.group.placementOrder, this.group.inGroup = !1, this.group.inUserGroup = !1, this.group.reference = null, this.group.addedAsGroup = null)), de(this) && "shapes" in this && Array.isArray(this.shapes) && this.shapes.forEach((o) => {
      "reset" in o && typeof o.reset == "function" && o.reset(e, i, s);
    });
  }
  /**
   * Add shape to stock (placeholder for optimization logic)
   */
  addToStock(e) {
    this.stock = e, this.added = !0, e.used = !0, this.grain = e.grain, !de(this) && e?.grain && this.rot && (this.grain = ot(e.grain));
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.added = !1, U(this) && (this.group.addedAsGroup = null, this.firstShape.isFirstShape = !1), de(this) && this.shapes.forEach((e) => {
      "removeFromStock" in e && typeof e.removeFromStock == "function" && e.removeFromStock();
    });
  }
  getPriority(e) {
    if (!e)
      return 0;
    const i = e.parentId;
    return this.priority?.[i] ? this.priority[i] : 0;
  }
  getStripShapeBatchData(e) {
    if (typeof e != "number")
      return !1;
    const i = this.guillotineState;
    return !i || kn(i) || !i.stripShapeBatches?.groups || !(e in i.stripShapeBatches.groups) ? !1 : i.stripShapeBatches.groups[e];
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
      group: U(e) ? e.group.reference : null,
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
    oe(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
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
    return ue(e) && typeof this.fitsStock?.[e.parentId] < "u" ? this.fitsStock?.[e.parentId]?.[i ?? "any"] === !0 : mt(this, e, i, s);
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
      (this.l <= o || this.w <= o) && (n = e.options?.minSpacingDimension?.minSpacing || n);
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
    const s = new X(this.x + this.l, this.y);
    s.corner = "bottomRight";
    const n = new X(this.x, this.y + this.w);
    if (n.corner = "topLeft", e?.cutType !== "efficiency" && !i)
      return [n, s];
    const o = new X(this.x, this.y);
    o.corner = "bottomLeft";
    const r = new X(this.x + this.l, this.y + this.w);
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
    if (this.getType() === p.Shape && this.identicalTo?.length && (this.parentId === e.parentId || this.identicalTo.includes(e.parentId)))
      return !0;
    if (this.getType() !== p.Group) {
      if (e.parentId === this.parentId)
        return !0;
      if (this.getType() === p.Shape && i && this.parentId !== e.parentId)
        return !1;
    } else if (e.autoId === this.autoId)
      return !0;
    const { w: s, l: n } = this, { w: o, l: r } = e;
    if (!(s === o && n === r) && !(s === r && n === o))
      return !1;
    const a = this.trim, l = e.trim;
    return !a || !l ? a === l : a.l1 === l.l1 && a.l2 === l.l2 && a.w1 === l.w1 && a.w2 === l.w2;
  }
  /**
   * Get perimeter cut vectors (for export)
   */
  getPerimeterCutVectors(e = null) {
    return e === null && (e = ue(this.stock) ? this.stock.bladeWidth / 2 : 0), [
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
    if (e = e || this.stock, !e)
      throw new Error("stock is required to create a cut");
    return this.getPerimeterCutVectors().forEach((n) => i.push(new si({
      stock: ue(this.stock) ? this.stock : e,
      x1: n.x1,
      x2: n.x2,
      y1: n.y1,
      y2: n.y2,
      position: n.type
    }))), i = i.filter((n) => n.isInsideStock), i;
  }
}
let Xe = null, vt = !1;
function So() {
  if (vt)
    return Xe;
  try {
    Xe = { runTests: !1, throwErrorsOnFailedTests: !1 }, vt = !0;
  } catch {
    Xe = { runTests: !1, throwErrorsOnFailedTests: !1 }, vt = !0;
  }
  return Xe;
}
const Ii = Ci("tests");
Ci("timers");
let xo;
const st = new Proxy(function() {
  return st;
}, { get: () => st, apply: () => st });
function me(t, e) {
  return st;
}
let It;
function ko() {
  return It === void 0 && (It = Te()), It;
}
function Je(t = [], e = null) {
  if (!t?.length)
    return;
  const i = So(), s = i?.testCollector || xo;
  if (!!(i && i.runTests && (ko() || s)))
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
        if (a = !1, l = c instanceof Error ? c.message : String(c), e ? Ii(e, l) : Ii(l), s && s.addResult({
          passed: !1,
          error: l,
          issueMessage: e || void 0,
          timestamp: r
        }), i && i.throwErrorsOnFailedTests)
          throw c;
      }
      a && s && s.addResult({
        passed: !0,
        issueMessage: e || void 0,
        timestamp: r
      });
    }
}
function vo(t) {
  return t === "horizontal" ? "x" : t === "vertical" ? "y" : null;
}
function Pi(t) {
  return t === "horizontal" ? "l" : t === "vertical" ? "w" : null;
}
class yt extends ni {
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
  static schema = Ct;
  static computedProperties = Ui;
  static defaults = Ct.parse({});
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
    const i = new yt(e.data);
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
    oe(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
  }
  clearPriority() {
    this.priority = {};
  }
  createOffset(e) {
    if (!this.stock)
      throw new Error("createOffset - stock not defined");
    const i = {
      x: this.x - e,
      y: this.y - e,
      l: this.l + e * 2,
      w: this.w + e * 2
    };
    return i.x < 0 && (i.x = 0, i.l -= e), i.y < 0 && (i.y = 0, i.w -= e), i.x + i.l > this.stock.l && (i.l = this.stock.l - i.x), i.y + i.w > this.stock.w && (i.w = this.stock.w - i.y), i;
  }
}
class ri extends ni {
  // Required: Define schema and computed properties for SchemaClass
  static schema = tn;
  static computedProperties = sn;
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
    return e.map((s) => {
      if (!U(s) && !Pn(s))
        throw console.log(s), new Error("[GROUP] attempted to init a group with an item other than a shape");
      if (U(s))
        return s.group.reference = this, s.group.inGroup = !0, s;
      if (i && i.shapeList && s) {
        const o = i.shapeList.find((r) => r.autoId === s.autoId);
        if (o)
          return o.group.reference = this, o.group.inGroup = !0, o;
      }
      const n = i ? { ...s, __context: i } : s;
      return new yt(n);
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
    const i = { ...e.data, shapes: e.shapes }, s = new ri(i);
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
   * Place shapes from this group onto a stock
   *
   * This method:
   * 1. Recalculates positions (which restores shapes to their original rotations)
   * 2. Places each shape at the correct position with the correct rotation from positions array
   */
  placeMyShapes(e) {
    if (!e)
      throw new Error("placeShapes requires stock");
    if (!(!this.shapes || this.shapes.length === 0)) {
      if (this.x === null || this.x === void 0 || this.y === null || this.y === void 0)
        throw new Error(`Group ${this.id} cannot place shapes: group position is not set (x=${this.x}, y=${this.y})`);
      if (this.positions && this.positions.length > 0)
        for (const i of this.positions) {
          const s = this.shapes.find((n) => n.autoId === i.autoId);
          s && (oe(s, i.rot, this.container) || console.error(`  ❌ FAILED to restore rotation for ${s.id} from ${s.rot} to ${i.rot}`));
        }
      if (this.positions && this.positions.length > 0)
        for (const i of this.positions) {
          const s = this.shapes.find((n) => n.autoId === i.autoId);
          s && s.rot !== i.rot && (console.warn(`[placeMyShapes] Shape ${s.id} has wrong rotation ${s.rot}, expected ${i.rot} - forcing rotation now`), oe(s, i.rot, this.container) || console.error(`[placeMyShapes] ❌ CRITICAL: Cannot fix rotation for ${s.id}`));
        }
      if (this.updatePositions(), !this.positions || this.positions.length === 0)
        throw new Error(`Group ${this.id} cannot place shapes: positions array could not be initialized`);
      for (let i = 0; i < this.shapes.length; i++) {
        const s = this.shapes[i];
        if (!s)
          continue;
        const n = this.positions.find((a) => a.autoId === s.autoId);
        if (!n) {
          const a = this.shapes.map((c) => c.autoId).join(", "), l = this.positions.map((c) => c.autoId).join(", ");
          throw new Error(`Position not found for shape ${s.autoId} in group ${this.id}. Shapes: [${a}]. Positions: [${l}]`);
        }
        if (s.x = this.x + n.x, s.y = this.y + n.y, !oe(s, n.rot, this.container))
          throw new Error("placeMyShapes - unable to set rotation for shape in group");
        i === 0 && this.x === 0 && this.y === 0 && (s.firstShape.isFirstShape = !0), s.group.addedAsGroup = this, Je([
          () => me(this.type === "position" ? s.group.inGroup : !s.group.inGroup).toBe(!0)
        ], `placeMyShapes: Shape ${s.id} inGroup flag should match group type (${this.type})`), Je([
          () => me(s.group.addedAsGroup).toBe(this),
          () => me(typeof s.group.addedAsGroup).not.toBe("string")
        ], `placeMyShapes: Shape ${s.id} addedAsGroup should be Group reference`), s.score = this.score;
        const r = s.guillotineState?.stripShapeBatches;
        if (this.guillotineState) {
          const a = this.guillotineState.constructor, l = this.guillotineState.toData();
          s.guillotineState = new a(l), r && (s.guillotineState.stripShapeBatches = r);
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
    if (!this.container)
      return;
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
        f && f.rot !== c && oe(f, c, this.container);
      }
    }
    this.positions = [], this.type !== "user" && this.sortShapes();
    let i = 0;
    const s = vo(this.direction), n = Pi(this.direction);
    let o = 0;
    for (const l of this.shapes) {
      if (!l)
        continue;
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
    const r = ot(n), a = this.shapes.reduce((l, c) => {
      const f = e.get(c.autoId);
      let d;
      return f !== void 0 && f !== c.rot ? d = r === "l" ? c.w : c.l : d = c[r], d > l ? d : l;
    }, 0);
    if (this.groupWidth = a, Te()) {
      const l = this.shapes.slice(0, -1).reduce((d, y) => d + y.getMinSpacing(this.container.saw), 0), f = this.shapes.reduce((d, y) => d + y[n], 0) + l;
      Je([
        () => me(T.equalTo(f, this.groupLength)).toBe(!0),
        () => me().toBe(this.groupLength),
        () => me().toBe(this.groupWidth)
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
      for (const n of this.positions)
        e.set(n.autoId, n.rot);
      for (const [n, o] of e) {
        const r = this.shapes.find((a) => a.autoId === n);
        r && r.rot !== o && oe(r, o, this.container);
      }
    }
    this.positions = [];
    let i = 0, s = 0;
    for (const n of this.shapes) {
      const o = this.userPositions.find((a) => a.autoId === n.autoId);
      if (!o)
        continue;
      const r = e.get(n.autoId) ?? n.rot.valueOf();
      this.positions.push({
        autoId: n.autoId,
        x: o.x,
        y: o.y,
        rot: r
      }), i = Math.max(i, o.x + n.l), s = Math.max(s, o.y + n.w);
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
    const e = Pi(this.direction), i = ot(e);
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
      Je([
        () => me(e.every((s) => !s.group?.inGroup)).toBe(!0),
        () => me(e.every((s) => !s.group?.reference)).toBe(!0)
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
    if (e.autoId === this.autoId)
      return !0;
    const s = this.autoId?.split(".")[0], n = e.autoId?.split(".")[0];
    return s && n && s === n ? !0 : this.type === "position" && e.type === "position" ? this.isSameSize(e) : super.isIdentical(e, i);
  }
}
class ds extends ni {
  // Required: Define schema and computed properties for SchemaClass
  static schema = rn;
  static computedProperties = on;
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
    return new ds({
      ...e,
      // Include all rectangle properties (l, w, x, y, material)
      flex: e.flex,
      offcut: !0,
      addToInventory: !1,
      added: !1
    });
  }
}
function Io(t, e) {
  return t?.length ? t.reduce((o, r) => {
    const a = o[e] + o.l, l = r[e] + r.l;
    return a > l ? o : l > a ? r : o.y < r.y ? o : r;
  }) : null;
}
const Po = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return ss(t, "orientationLock", ["l", "w"], e, i, s), s;
}, To = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return ss(t, "grain", ["l", "w"], e, i, s), s;
}, Oo = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [], n = L(t, "banding");
  return n != null && (typeof n != "object" || n === null) && new g({
    item: t,
    message: q("errors.validation.must_be_object", { 0: "banding" }),
    shouldTranslate: !1,
    field: [["banding"]],
    index: [e],
    type: i ? "warning" : "error",
    issues: s,
    category: ["part"]
  }), s;
}, Do = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], o = L(t, "customData");
  if (o == null)
    return n;
  if (typeof o != "object" || o === null)
    return new g({
      item: t,
      message: q("errors.validation.must_be_object", {
        0: ze.customData
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
      ["string", "number", "boolean"].includes(a) || new g({
        item: t,
        message: q("errors.validation.must_be_string_number_boolean", {
          0: ze.customData
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
}, Co = ({ item: t, index: e }) => {
  const i = L(t, "machining");
  i && "validateEverything" in i && i.validateEverything(t, e);
}, Ao = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], r = L(t, "x");
  return r === null || r === "" || r === void 0 || i != null && I({ v: r }) > i && new g({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: $("x", { returnKey: !0 }),
      // positional (legacy)
      field: $("x", { returnKey: !0 }),
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
}, Fo = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], r = L(t, "y");
  return r === null || r === "" || r === void 0 || i != null && I({ v: r }) > i && new g({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: $("y", { returnKey: !0 }),
      // positional (legacy)
      field: $("y", { returnKey: !0 }),
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
}, Eo = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], r = L(t, "l");
  return L(t, "infiniteLength") || (r === null || r === "" || r === void 0 || r === 0) && new g({
    item: t,
    message: "errors.validation.not_set",
    params: {
      0: $("l", { returnKey: !0 }),
      // positional (legacy)
      field: $("l", { returnKey: !0 })
      // named (new)
    },
    field: [["l"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: o,
    category: n
  }), o;
}, Lo = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], r = L(t, "w");
  return (r === null || r === "" || r === void 0) && new g({
    item: t,
    message: "errors.validation.not_set",
    params: {
      0: $("w", { returnKey: !0 }),
      // positional (legacy)
      field: $("w", { returnKey: !0 })
      // named (new)
    },
    field: [["w"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: o,
    category: n
  }), o;
}, Mo = ({ item: t, index: e, max: i, isWarning: s = !1, saw: n, category: o = [] }) => {
  const r = [], a = L(t, "t");
  return n?.cutType === "beam" && !a && new g({
    item: t,
    message: "errors.saw.thickness_required_for_beam_saw",
    field: [["t"]],
    index: [e],
    type: "error",
    issues: r,
    category: o
  }), r;
}, _o = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], o = L(t, "q"), r = L(t, "autoAdd");
  return o == null || r === !0, n;
};
function Ro(t, e, i = 0) {
  const s = t.x + t.l + i, n = e.x + e.l + i;
  if (!T.lessThan(t.x, n) || !T.greaterThan(s, e.x))
    return !1;
  const o = t.y + t.w + i, r = e.y + e.w + i;
  return T.lessThan(t.y, r) && T.greaterThan(o, e.y);
}
function No(t, e = 0) {
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
function Ha(t, e, i = 0) {
  const s = [{ x: 0, y: 0 }];
  for (const o of e)
    s.push(...No(o, i));
  const n = [];
  for (const o of s)
    n.push({ x: o.x, y: o.y }), n.push({ x: o.x - t.l, y: o.y }), n.push({ x: o.x, y: o.y - t.w }), n.push({ x: o.x - t.l, y: o.y - t.w });
  return n;
}
const Go = ({ item: t, index: e, shapes: i, requiredCount: s = 2, isWarning: n = !1, category: o = ["group"] }) => {
  const r = [];
  return i.length < s && new g({
    item: t,
    message: "errors.groups.min_parts",
    index: [e],
    type: n ? "warning" : "error",
    issues: r,
    category: o
  }), r;
}, $o = ({ item: t, index: e, shapes: i, isWarning: s = !1, category: n = ["group"] }) => {
  const o = [];
  return i.forEach((r, a) => {
    !(typeof r.isSquare == "function", r.isSquare) && !["l", "w"].includes(r.orientationLock) && new g({
      item: t,
      message: q("errors.groups.part_needs_orientation_lock", { 0: a + 1 }),
      shouldTranslate: !1,
      field: [["orientationLock"]],
      index: [e],
      type: s ? "warning" : "error",
      issues: o,
      category: n
    });
  }), o;
}, zo = ({ item: t, index: e, shapes: i, joinDirection: s, isWarning: n = !1, category: o = ["group"] }) => {
  const r = [];
  if (i.length < 2)
    return r;
  const a = i[0], l = a.trimmedDimensions ? a.trimmedDimensions[s] : a[s];
  return i.slice(1).forEach((c, f) => {
    const d = c.trimmedDimensions ? c.trimmedDimensions[s] : c[s];
    T.equalTo(d, l) || new g({
      item: t,
      message: q("errors.groups.dimension_not_correct", {
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
}, Vo = ({ item: t, index: e, shapes: i, positions: s, bladeWidth: n = 0, isWarning: o = !1, category: r = ["group"] }) => {
  const a = [];
  if (s.length < 2)
    return a;
  for (let l = 0; l < s.length; l++)
    for (let c = l + 1; c < s.length; c++) {
      const f = s[l], d = s[c], y = i.find((E) => E.autoId === f.autoId), m = i.find((E) => E.autoId === d.autoId);
      if (!y || !m)
        continue;
      const b = y.trimmedDimensions || { l: y.l, w: y.w }, v = m.trimmedDimensions || { l: m.l, w: m.w }, C = { x: f.x, y: f.y, l: b.l, w: b.w }, S = { x: d.x, y: d.y, l: v.l, w: v.w };
      Ro(C, S, n) && new g({
        item: t,
        message: q("errors.groups.shapes_overlap", { 0: l + 1, 1: c + 1 }),
        shouldTranslate: !1,
        index: [e],
        type: o ? "warning" : "error",
        issues: a,
        category: r
      });
    }
  return a;
}, Bo = ({ item: t, index: e, shapeId: i, requiredQuantity: s, availableQuantity: n, shapeName: o, shapeIndex: r, isWarning: a = !1, category: l = ["group"] }) => {
  const c = [];
  return s > n && new g({
    item: t,
    message: q("errors.groups.not_enough_of_part", {
      0: o || (r ?? 0) + 1,
      1: s,
      2: n
    }),
    shouldTranslate: !1,
    index: [e],
    type: a ? "warning" : "error",
    issues: c,
    category: l
  }), n === 0 && new g({
    item: t,
    message: "errors.groups.no_parts",
    index: [e],
    type: a ? "warning" : "error",
    issues: c,
    category: l
  }), c;
};
function at(t) {
  return t && typeof t == "object" && "area" in t;
}
const _t = {
  missingProperty: (t, e) => `[Sorting Warning] Missing property "${t}" in ${e}`,
  missingMethod: (t, e) => `[Sorting Warning] Missing method "${t}" in ${e}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
}, N = (t, e, i) => e in t ? t[e] : (console.warn(_t.missingProperty(String(e), i)), null), Qe = (t, e) => (i, s) => {
  const n = t(i, s);
  return n !== 0 ? n : e(i, s);
}, Le = (t, e) => {
  if (at(t) && at(e))
    return t.area < e.area ? -1 : t.area > e.area ? 1 : 0;
  const i = "l" in t && "w" in t ? Number(t.l) * Number(t.w) : 0, s = "l" in e && "w" in e ? Number(e.l) * Number(e.w) : 0;
  return i < s ? -1 : i > s ? 1 : 0;
}, Y = (t, e) => {
  const i = N(t, "id", "first item"), s = N(e, "id", "second item");
  if (i === null || s === null || i === void 0 || s === void 0)
    return 0;
  const n = i.toString().split("."), o = s.toString().split(".");
  return n[0] !== o[0] ? parseInt(n[0]) - parseInt(o[0]) : parseInt(n[1]) - parseInt(o[1]);
};
function Q(t) {
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
function jo(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s > n ? i : e;
  }) : null;
}
function Wo(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s < n ? i : e;
  }) : null;
}
const Pt = {
  // Dimension-based sorts
  WDLD: Q([
    ["w", "desc"],
    ["l", "desc"]
  ]),
  WALA: Q([
    ["w", "asc"],
    ["l", "asc"]
  ]),
  LDWD: Q([
    ["l", "desc"],
    ["w", "desc"]
  ]),
  LAWA: Q([
    ["l", "asc"],
    ["w", "asc"]
  ]),
  WD: Q([["w", "desc"]]),
  LD: Q([["l", "desc"]]),
  // ID-based sorts
  LDIDA: Qe(Q([["l", "desc"]]), Y),
  WDIDA: Qe(Q([["w", "desc"]]), Y),
  // Area-based sorts
  AD: (t, e) => -Le(t, e),
  AA: Le,
  AAID: Qe(Le, Y),
  ADID: Qe((t, e) => -Le(t, e), Y),
  // ID sorts
  ID: Y,
  IDDesc: (t, e) => -Y(t, e),
  StockID: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    return !i || !s ? 0 : Y(i, s);
  },
  StockIDAD: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s)
      return 0;
    const n = Y(i, s);
    return n !== 0 ? n : -Le(t, e);
  },
  // Position sorts
  YX: Q([
    ["y", "asc"],
    ["x", "asc"]
  ]),
  XY: Q([
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
    return i && !s ? 1 : !i && s ? -1 : Y(t, e);
  },
  stockIDTypePlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s)
      return 0;
    const n = Y(i, s);
    if (n !== 0)
      return n;
    const o = N(t, "offcut", "first item"), r = N(e, "offcut", "second item");
    if (o && !r)
      return 1;
    if (!o && r)
      return -1;
    const a = N(t, "placementOrder", "first item") ?? 0, l = N(e, "placementOrder", "second item") ?? 0;
    return a - l;
  },
  offcutPlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i?.id || !s?.id)
      return 0;
    const n = Y(i, s);
    if (n !== 0)
      return n;
    if ("placementOrder" in t && "placementOrder" in e) {
      const o = N(t, "placementOrder", "first item") ?? 0, r = N(e, "placementOrder", "second item") ?? 0;
      return o - r;
    }
    return 0;
  },
  groupPlacementOrder: (t, e) => {
    const i = N(t, "placementOrder", "first item") ?? 0, s = N(e, "placementOrder", "second item") ?? 0, n = i - s;
    if (n !== 0)
      return n;
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
    if (at(t) && at(e) && t.aspect && e.aspect)
      return e.aspect - t.aspect;
    if (!("l" in t) || !("w" in t) || !("l" in e) || !("w" in e))
      return console.warn(_t.missingAspect), 0;
    const i = Math.max(Number(t.l), Number(t.w)) / Math.min(Number(t.l), Number(t.w));
    return Math.max(Number(e.l), Number(e.w)) / Math.min(Number(e.l), Number(e.w)) - i;
  },
  fillThenArea(t) {
    return (e, i) => !("l" in e) || !("w" in e) || !("l" in i) || !("w" in i) ? (console.warn(_t.missingLongSide), 0) : i[t] === e[t] ? -Le(e, i) : parseFloat(String(i[t])) - parseFloat(String(e[t]));
  },
  // Utility functions
  getLargest: jo,
  getSmallest: Wo
};
function Ho(t) {
  return W(t) || ts(t) || Ye(t);
}
function Uo(t, e, i) {
  if (!i)
    return !0;
  const s = t?.stock?.db_id, n = e?.db_id;
  if (s && n && s === n)
    return !0;
  const o = t?.material?.toLowerCase() || "", r = e?.material?.toLowerCase() || "", a = e?.variant?.toLowerCase() || "", l = e?.name?.toLowerCase() || "", c = a && l && a !== l ? `${a} ${l}` : "";
  return !o && !r && !a ? !0 : o ? o === r || o === a || !!c && o === c : !1;
}
function qo(t, e, i) {
  return i ? !ce(t.t) || !ce(e.t) ? !1 : T.equalTo(I({ v: t.t }), I({ v: e.t })) : !0;
}
function Ko(t, e, i) {
  return i?.stockType !== "linear" || !ts(t) && !W(t) ? !0 : Mt(t, 0, e) && T.equalTo(I({ v: t.w }), I({ v: e.w })) || Mt(t, 1, e) && T.equalTo(I({ v: t.l }), I({ v: e.w }));
}
function Yo(t, e, i, s = 0) {
  const n = W(t[0]), o = i.stockType;
  if (t.some((S) => ce(S.stockLock) && S.stockLock.length))
    return { stockList: e, shapeList: t, unusableShapes: [], unusableStock: [], newIssues: [] };
  e = e.filter((S) => n || S.autoAdd === !0 || ce(S.q) && Number(S.q) > 0);
  const a = e.some((S) => ce(S.material)), l = e.some((S) => ce(S.t)), c = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set(), m = [];
  let b = s;
  for (const S of t) {
    const E = e.map((R, Pe) => {
      const ai = Ho(S) && mt(S, R), li = Uo(S, R, a), ci = qo(S, R, l), ui = Ko(S, R, i);
      return {
        stockItem: R,
        stockIndex: Pe,
        fit: ai,
        material: li,
        thickness: ci,
        width: ui,
        // For this stock item, does it satisfy all requirements?
        satisfiesAll: ai && li && ci && (o !== "linear" || ui)
      };
    });
    S.stockMatch = {
      fit: E.some((R) => R.fit),
      material: !a || E.some((R) => R.material),
      thickness: !l || E.some((R) => R.thickness),
      width: o !== "linear" || E.some((R) => R.width)
    };
    const Ie = E.filter((R) => R.satisfiesAll), Ce = Ie.length > 0;
    if (!n && Ce) {
      const R = Ie.map((Pe) => Pe.stockItem.parentId);
      S.stockLock = R, R.forEach((Pe) => c.add(Pe));
    }
    S.stockMatch.fit ? Ce || (a && !S.stockMatch.material && (y.add(S), m.push(new g({
      category: ["part", "stock"],
      item: S,
      field: [["material"]],
      index: [b],
      message: "errors.validation.no_matching_stock_material"
    }))), l && !S.stockMatch.thickness && (y.add(S), m.push(new g({
      category: ["part", "stock"],
      item: S,
      field: [["t"]],
      index: [b],
      message: "errors.validation.no_matching_stock_thickness"
    }))), o === "linear" && !S.stockMatch.width && (d.add(S), m.push(new g({
      category: ["part", "stock"],
      item: S,
      field: [["w"]],
      index: [b],
      message: "errors.validation.no_matching_stock_width"
    }))), S.stockMatch.material && S.stockMatch.thickness && (o !== "linear" || S.stockMatch.width) && (y.add(S), m.push(new g({
      category: ["part", "stock"],
      item: S,
      field: [["material"], ["t"]],
      index: [b],
      message: "errors.validation.no_stock_matches_all_requirements"
    })))) : (f.add(S), m.push(new g({
      category: ["part", "stock"],
      item: S,
      field: [["l"], ["w"]],
      index: [b],
      message: "errors.validation.will_not_fit"
    }))), b++;
  }
  t.forEach((S) => S.stockMatch = null);
  let v, C;
  return n ? (v = t.filter((S) => f.has(S) || d.has(S) || y.has(S)).sort(Pt.ID), C = []) : (v = t.filter((S) => f.has(S) || d.has(S) || y.has(S) || !S.stockLock || !S.stockLock.length).sort(Pt.ID), C = e.filter((S) => !c.has(S.parentId)).sort(Pt.ID), e = e.filter((S) => ue(S)).filter((S) => c.has(S.parentId)), t = t.filter((S) => !f.has(S) && !d.has(S) && !y.has(S) && S?.stockLock?.length)), {
    stockList: e,
    unusableStock: C,
    shapeList: t,
    unusableShapes: v,
    newIssues: m
  };
}
function Zo(t) {
  return t?.issues?.length > 0;
}
const Xo = ({ item: t, inputStockList: e, saw: i, partTrim: s = 0, index: n }) => {
  const o = [], r = i.stockType, a = L(t, "q"), l = L(t, "l"), c = L(t, "w");
  return !a || !l || !c || ("applyPartTrim" in t && typeof t.applyPartTrim == "function" && t.applyPartTrim(s, r), Zo(t)) || Yo([t], e, i, n).newIssues.forEach((d) => {
    o.push(d);
  }), o;
}, Jo = ({ item: t, partTrim: e, index: i, isWarning: s = !1 }) => {
  const n = [];
  if (!e)
    return n;
  const o = L(t, "l"), r = L(t, "w");
  if (!o || !r)
    return n;
  try {
    const a = I({ v: e }), l = I({ v: o }), c = I({ v: r }), f = l - a * 2, d = c - a * 2;
    (f <= 0 || d <= 0) && new g({
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
}, Qo = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], o = L(t, "l"), r = L(t, "w"), a = L(t, "trim");
  if (!o || !r || !a)
    return n;
  if ((!ue(t) || ue(t) && !("trimmed" in t && t.trimmed)) && typeof a == "object" && a !== null)
    try {
      const c = I({ v: o }), f = I({ v: r }), d = (v) => {
        if (v == null)
          return 0;
        if (typeof v == "number" || typeof v == "string")
          try {
            return I({ v }) || 0;
          } catch {
            return 0;
          }
        return 0;
      }, y = {
        w1: d(L(a, "w1")),
        w2: d(L(a, "w2")),
        l1: d(L(a, "l1")),
        l2: d(L(a, "l2"))
      }, m = y.w1 + y.w2, b = y.l1 + y.l2;
      m >= c && new g({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${$("w1").toUpperCase()} + ${$("w2").toUpperCase()}`,
          // positional (legacy)
          1: $("l"),
          // positional (legacy)
          2: c,
          // positional (legacy)
          trimFields: `${$("l1", { returnKey: !0 })} + ${$("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: $("l", { returnKey: !0 }),
          // named (new)
          maxValue: c
          // named (new)
        },
        field: [["trim", "w1"], ["trim", "w2"]],
        index: [e],
        type: i ? "warning" : "error",
        issues: n,
        category: s
      }), b >= f && new g({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${$("l1").toUpperCase()} + ${$("l2").toUpperCase()}`,
          // positional (legacy)
          1: $("w"),
          // positional (legacy)
          2: f,
          // positional (legacy)
          trimFields: `${$("l1", { returnKey: !0 })} + ${$("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: $("w", { returnKey: !0 }),
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
}, B = {
  // Dimensions
  x: Ao,
  y: Fo,
  l: Eo,
  w: Lo,
  t: Mo,
  q: _o,
  // Trim
  trim: Qo,
  partTrim: Jo,
  // Custom
  customData: Do,
  banding: Oo,
  orientationLock: Po,
  grain: To,
  machining: Co,
  // Stock
  stockMatch: Xo,
  // Groups
  groupShapeCount: Go,
  groupOrientationLock: $o,
  groupDimensions: zo,
  groupOverlap: Vo,
  groupQuantity: Bo
};
class lt extends ii {
  static schema = At;
  static computedProperties = qi;
  static defaults = At.parse({});
  constructor(e = {}) {
    const i = lt.preprocessData(e);
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
      const n = B.q({ item: e, index: e?.index });
      i.push(...n);
    }
    const s = B.grain({ item: e, index: e?.index });
    i.push(...s), this.issues.push(...i.filter((n) => n));
  }
  /**
  * Create stock instance with live objects
  */
  static create(e) {
    const i = { ...e.data };
    e.saw && (i.saw = e.saw);
    const s = new lt(i);
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
    if (!e || e.length === 0)
      return !0;
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
    if (!e?.length)
      return;
    const s = Io(e.filter((o) => o.added && o.stock.id === this.id), "x"), n = s.x + s.l;
    if (n > this.l)
      throw new Error("Furthest shape position exceeds stock length");
    return T.equalTo(n, this.l) ? n : n + i;
  }
}
class ct extends A {
  // Required: Define schema and computed properties for SchemaClass
  static schema = pt;
  static computedProperties = qt;
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
class ye extends ct {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = ir;
  static computedProperties = sr;
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
    const i = [], s = new Set(Z);
    for (const n in this.faces)
      s.has(n) || i.push(new g({
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
    if (!this.hasValues())
      return 0;
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
      for (const s of Z)
        this.faces[s] = !1;
    }
    i === !1 || i === "" || i === void 0 ? this.faces[e] = !1 : this.faces[e] = i;
  }
  /**
   * Get finish for a specific face
   */
  getFace(e) {
    const i = this.faces?.[e];
    if (!i)
      return !1;
    if (typeof i == "object" && !Array.isArray(i)) {
      const s = i, n = fe("finish");
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
      for (const e of Z)
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
    for (const i of Z)
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
    return new ye(e);
  }
  /**
   * Create empty finish
   */
  static empty() {
    return new ye();
  }
  /**
   * Create with both faces
   */
  static bothFaces(e = !0) {
    const i = new ye();
    return i.setBothFaces(e), i;
  }
  /**
   * Create with front face only
   */
  static frontOnly(e = !0) {
    const i = new ye();
    return i.setFace("a", e), i;
  }
  /**
   * Create with back face only
   */
  static backOnly(e = !0) {
    const i = new ye();
    return i.setFace("b", e), i;
  }
}
class be extends ct {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = Qr;
  static computedProperties = eo;
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
      const s = new Set(Z);
      for (const n in this.faces)
        s.has(n) || i.push(new g({
          message: `Invalid planing face: ${n}. Valid faces are 'a' (front) and 'b' (back)`,
          type: "warning"
        }));
    }
    if (this.sides) {
      const s = new Set(ge);
      for (const n in this.sides)
        s.has(n) || i.push(new g({
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
      for (const s of Z)
        this.faces[s] = !1;
    }
    i === !1 || i === "" || i === void 0 ? this.faces[e] = !1 : this.faces[e] = i;
  }
  /**
   * Get planing for a specific face
   */
  getFace(e) {
    const i = this.faces?.[e];
    if (!i)
      return !1;
    if (typeof i == "object" && !Array.isArray(i)) {
      const s = i, n = fe("planing");
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
      for (const s of ge)
        this.sides[s] = !1;
    }
    i === !1 || i === "" || i === void 0 ? this.sides[e] = !1 : this.sides[e] = i;
  }
  /**
   * Get planing for a specific side
   */
  getSide(e) {
    const i = this.sides?.[e];
    if (!i)
      return !1;
    if (typeof i == "object" && !Array.isArray(i)) {
      const s = i, n = fe("planing");
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
      for (const e of Z)
        this.faces[e] = !1;
    if (this.sides)
      for (const e of ge)
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
    for (const i of Z)
      this.setFace(i, e);
  }
  /**
   * Set all sides to the same value
   */
  setAllSides(e) {
    for (const i of ge)
      this.setSide(i, e);
  }
  /**
   * Calculate total planing area
   */
  calculateArea(e, i) {
    let s = 0;
    if (this.faces) {
      const n = e * i;
      for (const o of Z)
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
      for (const o of ge)
        this.hasSide(o) && n[o] && (s += n[o]);
    }
    return s;
  }
  /**
   * Calculate the cost of this planing
   * @param shape Optional shape for context-aware pricing
   */
  getCost(e) {
    if (!this.hasValues())
      return 0;
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
    if (!this.faces)
      return 0;
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
    if (!this.sides)
      return 0;
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
    return new be(e);
  }
  /**
   * Create empty planing
   */
  static empty() {
    return new be();
  }
  /**
   * Create with all faces and sides
   */
  static full(e = !0) {
    const i = new be();
    return i.setAllFaces(e), i.setAllSides(e), i;
  }
  /**
   * Create with faces only
   */
  static facesOnly(e = !0) {
    const i = new be();
    return i.setAllFaces(e), i;
  }
  /**
   * Create with sides only
   */
  static sidesOnly(e = !0) {
    const i = new be();
    return i.setAllSides(e), i;
  }
}
class G extends A {
  // Zod schema for validation and serialization
  static schema = er;
  static computedProperties = tr;
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
      if (!n || typeof n != "object" || !("sides" in n))
        return;
      const o = n.sides;
      if (!o || typeof o != "object")
        return;
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
    if (he(this.banding)) {
      const s = this.banding.validate(e);
      i.push(...s);
    }
    if (se(this.finish)) {
      const s = this.finish.validate(e);
      i.push(...s);
    }
    if (ne(this.planing)) {
      const s = this.planing.validate(e);
      i.push(...s);
    }
    if (ne(this.planing) && se(this.finish) && e?.t) {
      const s = this.planing.getTotalFacePlaning();
      s > 0 && e.t - s < 5 && i.push(new g({
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
    return he(this.banding) && (i += this.banding.getCost(e)), se(this.finish) && (i += this.finish.getCost(e)), ne(this.planing) && (i += this.planing.getCost(e)), i;
  }
  /**
   * Get human-readable description of all extras
   */
  getDescription() {
    const e = [];
    return he(this.banding) && this.banding.hasValues() && e.push(this.banding.getDescription()), se(this.finish) && this.finish.hasValues() && e.push(this.finish.getDescription()), ne(this.planing) && this.planing.hasValues() && e.push(this.planing.getDescription()), e.length > 0 ? e.join("; ") : "No extras";
  }
  /**
   * Check if any extras are applied
   */
  hasExtras() {
    return !!(he(this.banding) && this.banding.hasValues() || se(this.finish) && this.finish.hasValues() || ne(this.planing) && this.planing.hasValues());
  }
  /**
   * Clear all extras
   */
  clear() {
    he(this.banding) && this.banding.clear(), se(this.finish) && this.finish.clear(), ne(this.planing) && this.planing.clear();
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
    e ? e instanceof $e ? this.banding = e : this.banding = new $e(e) : this.banding = void 0;
  }
  /**
   * Set finish
   */
  setFinish(e) {
    e ? e instanceof ye ? this.finish = e : this.finish = new ye(e) : this.finish = void 0;
  }
  /**
   * Set planing
   */
  setPlaning(e) {
    e ? e instanceof be ? this.planing = e : this.planing = new be(e) : this.planing = void 0;
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
    return !!(he(this.banding) && this.banding.isApplicable(e) || se(this.finish) && this.finish.isApplicable(e) || ne(this.planing) && this.planing.isApplicable(e));
  }
  /**
   * Get summary of active extras
   */
  getSummary() {
    return {
      hasBanding: he(this.banding) && this.banding.hasValues() || !1,
      hasFinish: se(this.finish) && this.finish.hasValues() || !1,
      hasPlaning: ne(this.planing) && this.planing.hasValues() || !1,
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
    if (!i)
      return !1;
    const s = i.banding;
    return s ? he(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" ? Object.keys(s.sides).some((n) => {
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
    if (!i)
      return !1;
    const s = i.finish;
    return s ? se(s) && typeof s.hasValues == "function" ? s.hasValues() : s.faces && typeof s.faces == "object" ? Object.keys(s.faces).some((n) => {
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
    if (!i)
      return !1;
    const s = i.planing;
    return s ? ne(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" && Object.keys(s.sides).some((o) => {
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
    if (!i)
      return !1;
    const s = i.imageUpload;
    return s ? In(s) && typeof s.hasValues == "function" ? s.hasValues() : s.images && Array.isArray(s.images) ? s.images.length > 0 : !1 : !1;
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
    if (!e?.extras)
      return !1;
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
function ea(t) {
  const { dimensionName: e, constraint: i, limit: s, value: n, subject: o, location: r } = t, a = t.kind ?? "length", l = a === "count" ? "" : " mm", c = i === "min" ? "at least" : "at most", f = r ? `${r}: ` : "", d = o ? `${f}${o} ${e}` : `${f}${e}`;
  if (a === "length" && i === "min" && n <= 0)
    return `${d} must be at least ${s} mm — enter the part's dimensions`;
  const y = a === "count" ? `this part has ${n}` : `this part is ${n} mm`;
  return `${d} must be ${c} ${s}${l} (${y})`;
}
function Ua(t, e) {
  const i = t.filter(Boolean).join("; ");
  return e && i ? `${e} — ${i}` : e || i;
}
const ta = {
  t: "thickness",
  longSide: "long side",
  shortSide: "short side",
  holes: "hole count",
  corners: "corner count",
  hingeHoles: "hinge-hole group count"
}, ia = /* @__PURE__ */ new Set(["holes", "corners", "hingeHoles"]);
function sa(t) {
  return ta[t] ?? String(t);
}
function na(t) {
  return ia.has(t);
}
const Rt = ge, Tt = Z, ra = {
  banding: {
    scope: ["sides"],
    sides: De.map((t) => `side.${t}`)
    // Only use main sides (l1/l2/w1/w2), not corners
  },
  finish: {
    scope: ["faces"],
    faces: Tt.map((t) => `face.${t}`)
  },
  planing: {
    scope: ["faces", "sides"],
    faces: Tt.map((t) => `face.${t}`),
    // Main sides (l1/l2/w1/w2) — matches the runtime config in extras.ts and the
    // coordinate canon. Previously the legacy literals side.a/b/c/d (corner letters),
    // which never matched the runtime side keys.
    sides: De.map((t) => `side.${t}`)
  },
  info: {
    scope: ["sides"],
    sides: Rt.map((t) => `side.${t}`)
  },
  machining: {
    scope: ["faces", "sides"],
    faces: Tt.map((t) => `face.${t}`),
    sides: Rt.map((t) => `side.${t}`)
  },
  addon: {
    // No face/side scope - addon products attach to the shape as a whole.
    scope: []
  }
}, oa = ra, ie = (t) => oa[t] || {
  scope: ["sides"],
  sides: ge.map((e) => `side.${e}`)
}, aa = (t) => {
  const e = ie(t), i = [];
  return e.faces && i.push(...e.faces), e.sides && i.push(...e.sides), i;
}, qa = (t) => (ie(t).faces || []).map((i) => {
  const s = ve(i);
  return s.scope === "face" ? s.key : void 0;
}).filter((i) => i !== void 0), Ka = (t) => (ie(t).sides || []).map((i) => {
  const s = ve(i);
  return s.scope === "side" ? s.key : void 0;
}).filter((i) => typeof i == "string"), ve = (t) => {
  const e = t.split(".");
  if (e.length !== 2 || e[0] !== "face" && e[0] !== "side")
    throw new Error(`Invalid ExtraLocation format: ${t}. Must be 'face.X' or 'side.X'`);
  const i = e[0], s = e[1];
  if (i === "face" && !Z.includes(s))
    throw new Error(`Invalid face key '${s}' in location '${t}'`);
  if (i === "side" && !ge.includes(s))
    throw new Error(`Invalid side key '${s}' in location '${t}'`);
  return {
    scope: i,
    key: s,
    original: t
  };
}, Ya = (t) => ve(t).scope, la = (t, e = 0, i = !1) => {
  const s = t.replace(/^side\./, "");
  if (e === 0) {
    const o = {
      l1: "sides.long1",
      l2: "sides.long2",
      w1: "sides.short1",
      w2: "sides.short2"
    };
    if (o[s])
      return o[s];
  }
  let n = s;
  return (e === 1 || e === 2) && i && (n = { l1: "w1", l2: "w2", w1: "l1", w2: "l2" }[s] || s), `sides.${n}`;
}, Za = (t, e = 0, i = !1) => t.startsWith("face.") ? `faces.${t.replace(/^face\./, "")}` : la(t, e, i), Xa = (t, e) => {
  const i = Number(t?.l), s = Number(t?.w);
  if (e.startsWith("face."))
    return { quantity: Number.isFinite(i) && Number.isFinite(s) && i > 0 && s > 0 ? i * s / 1e6 : void 0, unit: "m²" };
  const n = e.replace(/^side\./, ""), o = n === "l1" || n === "l2" ? i : n === "w1" || n === "w2" ? s : NaN;
  return { quantity: Number.isFinite(o) && o > 0 ? o / 1e3 : void 0, unit: "m" };
}, ca = (t) => Os(t), fs = (t) => ie(t).scope.includes("faces"), hs = (t) => ie(t).scope.includes("sides"), Ja = (t) => {
  const e = ie(t);
  return e.scope.includes("faces") && e.scope.includes("sides");
}, ua = (t, e) => {
  if (t.length === 1 && t[0].length === 1 && t[0][0] === !0)
    return "boolean";
  const i = t.flat().filter((o) => typeof o == "string"), n = [.../* @__PURE__ */ new Set([...i, ...e || []])].length;
  return n === 0 ? "multiple" : n === 1 ? "single" : "multiple";
}, Qa = (t, e = "") => {
  if (typeof t == "string")
    return t;
  if (typeof t == "boolean")
    return t ? "Y" : e;
  if (typeof t == "object" && t !== null && !Array.isArray(t)) {
    const i = Object.values(t).map((s) => typeof s == "string" ? s : typeof s == "boolean" && s ? "Y" : "").filter((s) => s !== "");
    return i.length > 0 ? i.join("|") : e;
  }
  return e;
}, da = (t, e) => {
  const i = t;
  i.extras || (i.extras = {}), i.extras[e] || (i.extras[e] = {});
  const s = i.extras[e];
  fs(e) && (s.faces || (s.faces = {})), hs(e) && (s.sides || (s.sides = {}));
}, fa = (t, e, i) => {
  da(t, e);
  const n = t.extras[e], { scope: o } = ve(i);
  return o === "face" ? {
    extraContainer: n.faces || {}
  } : {
    extraContainer: n.sides || {}
  };
}, el = (t, e, i) => {
  const s = bt(t, e, i);
  if (s == null || s === !1 || s === "")
    return !1;
  if (typeof s != "object" || Array.isArray(s))
    return typeof s == "boolean" ? s : typeof s == "string" ? s.trim() !== "" : !!s;
  const n = fe(e);
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
}, ha = (t, e, i, s, n) => {
  const o = fe(e);
  if (o) {
    const r = bt(t, e, i);
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
}, tl = (t, e, i, s, n, o, r) => {
  if (fe(e))
    switch (Sa(e)) {
      case "boolean":
        Ot(t, e, i, !!n);
        break;
      case "string":
        Ot(t, e, i, String(n));
        break;
      case "object":
        {
          let c = bt(t, e, i) || {};
          typeof c != "object" && (c = {}), c[s] = n, Ot(t, e, i, c);
        }
        break;
    }
}, pa = (t, e, i, s) => {
  wa(t, e, i);
}, il = (t, e, i, s, n) => {
  if (i.length === 0)
    return null;
  const o = i.map((r) => ha(t, e, r, s));
  if (n === "boolean" || n === "single") {
    const r = o.every((l) => !!l), a = o.every((l) => !l);
    return r ? !0 : a ? !1 : null;
  }
  if (n === "multiple") {
    const r = o[0];
    return o.every((l) => l === r) ? r : null;
  }
  return null;
}, sl = (t, e, i, s) => {
  i.forEach((n) => {
    pa(t, e, n);
  });
}, nl = (t, e, i, s, n, o) => {
  const r = bt(t, e, i), a = [];
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
          const y = fe(e), m = y?.labels.indexOf(f) ?? -1, b = m !== -1 && y?.options[m], v = b?.length === 1 ? b[0] : f;
          a.push(v);
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
        const m = n[y];
        if (m && m.length === 1)
          return String(m[0]);
      }
      return String(d);
    });
    return s(e, c) ?? !1;
  } catch (c) {
    return console.error("Error calculating extras price:", c), !1;
  }
}, rl = (t, e, i) => {
  const s = /* @__PURE__ */ new Set(), n = ie(e);
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
}, ol = (t, e, i, s) => {
  const n = s[0], o = ie(e);
  n && t.forEach((r) => {
    const l = r.extras[e];
    if (!l)
      return;
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
}, al = (t, e, i) => {
  const s = ie(e);
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
}, ma = (t, e, i, s = !1) => {
  const n = ie(e), o = t;
  o.extras[e] || (o.extras[e] = {});
  const r = o.extras[e];
  r.options || (r.options = {});
  const a = r.options;
  if (fs(e) && (r.faces || (r.faces = {}), a.faces || (a.faces = {})), hs(e) && (r.sides || (r.sides = {}), a.sides || (a.sides = {})), s) {
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
}, ll = (t, e, i, s = [], n = []) => {
  const o = ua(i, n);
  ma(t, e, o === "boolean" ? [] : s, o === "boolean");
}, ga = (t) => t ? typeof t == "string" ? t.includes("|") ? t.split("|") : [t] : typeof t == "boolean" ? t ? ["true"] : [] : typeof t == "object" && !Array.isArray(t) && t !== null ? Object.values(t).filter((e) => e != null && e !== "" && e !== !1).map((e) => String(e)) : [String(t)] : [], cl = (t, e) => new Set(Object.keys(t || {})), ya = (t, e) => {
  const { extraType: i, pricing: s, codes: n, findExtrasPrice: o } = e, r = Object.keys(s || {}), a = r.length ? Math.max(...r.map((E) => E.split("|").length)) : 0, l = ga(t), c = l.length, f = { parts: l, selectedLevels: c, maxPricingLevels: a, missingLevels: 0, matchingKeyCount: 0, hasValidPrice: !1 };
  if (c === 0)
    return { ...f, status: "empty" };
  if (n) {
    const E = new Set(Object.values(n));
    if (c === 1 && E.has(l[0]))
      return { ...f, status: "complete", hasValidPrice: !0 };
  }
  if (a <= 1)
    return { ...f, status: "complete", hasValidPrice: !0 };
  const d = l.filter((E) => E.trim() !== ""), y = d.join("|");
  let m = !1;
  if (o)
    try {
      const E = o(i, d);
      m = E !== null && E > 0;
    } catch {
      m = !1;
    }
  !m && s[y] !== void 0 && (m = !0);
  let b = 0, v = !1;
  if (c < a) {
    const E = l.join("|");
    b = r.filter((Ie) => Ie === E || Ie.startsWith(E + "|")).length, b === 1 && (v = !0);
  }
  if (!(!m && !v))
    return { ...f, status: "complete", matchingKeyCount: b, hasValidPrice: m };
  const S = c < a && b > 1;
  return {
    ...f,
    status: S ? "incomplete" : "invalid",
    missingLevels: S ? a - c : 0,
    matchingKeyCount: b,
    hasValidPrice: m
  };
}, ul = (t, e, i, s, n) => {
  if (!i || !Object.keys(i).length)
    return { valid: !0, messages: [], incompleteLocations: [] };
  const o = [], r = [], a = aa(e), l = Object.keys(i), c = Math.max(...l.map((d) => d.split("|").length));
  if (c <= 1)
    return { valid: !0, messages: [], incompleteLocations: [] };
  for (const d of a) {
    const { extraContainer: y } = fa(t, e, d), { key: m } = ve(d), b = y[m];
    if (!b)
      continue;
    const v = ya(b, {
      extraType: e,
      pricing: i,
      codes: n,
      findExtrasPrice: s
    });
    if (v.status === "empty" || v.status === "complete")
      continue;
    const { parts: C, selectedLevels: S, hasValidPrice: E } = v, Ie = v.status === "incomplete";
    let Ce = "";
    if (Ie) {
      const R = v.missingLevels, Pe = C.join(", ");
      Ce = `${e} selection incomplete for ${d}. Selected: "${Pe}" but ${R} more level${R > 1 ? "s" : ""} required.`;
    } else S >= c && (Ce = `${e} selection invalid for ${d}. No pricing available for "${C.join(", ")}".`);
    S > 0 && !E && (r.push(d), o.push(Ce || `${e} pricing incomplete for ${d}: ${S}/${c} levels selected`));
  }
  return { valid: r.length === 0, messages: o, incompleteLocations: r };
}, dl = (t, e, i) => !i || !i[e] ? { valid: !0, violations: [] } : ba(t, i[e]), ba = (t, e) => {
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
    const r = typeof o.toData == "function" ? o.toData() : o, a = Array.isArray(r?.holes) ? r.holes.length : 0, l = Array.isArray(r?.hingeHoles) ? r.hingeHoles.length : 0, c = r?.corners ?? {}, f = Object.values(c).filter((d) => d && d.type !== null && d.type !== void 0 && d.size > 0).length;
    s("holes", a, e.holes), s("hingeHoles", l, e.hingeHoles), s("corners", f, e.corners);
  } else
    s("holes", 0, e.holes), s("hingeHoles", 0, e.hingeHoles), s("corners", 0, e.corners);
  return {
    valid: i.length === 0,
    violations: i,
    message: e.message
  };
}, ps = (t, e) => ea({
  dimensionName: sa(t.dimension),
  constraint: t.constraint,
  limit: t.limit,
  value: t.value,
  subject: e,
  kind: na(t.dimension) ? "count" : "length"
}), fl = (t) => ps(t), hl = (t, e, i) => ps(e, ca(t));
function pl(t, e = "banding") {
  const i = t.extras?.[e];
  if (!i?.sides)
    return;
  const s = i.sides, n = s.l1, o = s.l2, r = s.w1, a = s.w2;
  s.l1 = r, s.l2 = a, s.w1 = n, s.w2 = o;
}
const ml = (t) => ["all", "faces", "sides"].includes(t) ? !1 : !t.includes(".");
let Nt = null;
const gl = (t) => {
  Nt = t;
}, fe = (t) => Nt ? Nt.getExtrasConfig(t) : null, Ot = (t, e, i, s) => {
  t.extras || (t.extras = {}), t.extras[e] || (t.extras[e] = { sides: {}, faces: {} });
  const { scope: n, key: o } = ve(i), r = n === "face" ? t.extras[e].faces : t.extras[e].sides;
  r[o] = s;
}, bt = (t, e, i) => {
  const { scope: s, key: n } = ve(i);
  return (s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides)?.[n] ?? null;
}, wa = (t, e, i) => {
  const { scope: s, key: n } = ve(i), o = s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides;
  o && n in o && delete o[n];
}, Sa = (t) => {
  const e = fe(t);
  return !e || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 1 && e.options[0][0] === !0 || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 0 ? "boolean" : e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].every((i) => typeof i == "string") ? "string" : e.options.length > 1 ? "object" : "string";
};
class $e extends ct {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Hn;
  static computedProperties = {
    ...ct.computedProperties,
    ...Un
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
      De.includes(s) || i.push(new g({
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
    if (!i)
      return !1;
    if (typeof i == "object" && !Array.isArray(i)) {
      const s = i, n = fe("banding");
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
    if (!this.sides)
      return !1;
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
    for (const i of De)
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
    return new $e(e);
  }
  /**
   * Create empty banding
   */
  static empty() {
    return new $e();
  }
  /**
   * Create with all sides
   */
  static allSides(e = !0) {
    const i = new $e();
    return i.setAllSides(e), i;
  }
}
const J = (t) => {
  if (t == null || t === "")
    return;
  const e = typeof t == "number" ? t : parseFloat(String(t));
  return Number.isFinite(e) ? e : void 0;
};
class Oe extends A {
  // Zod schema for validation and serialization
  static schema = Kn;
  static computedProperties = Yn;
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
    if (this.type && this.size !== null && this.size <= 0 && s.push(new g({
      message: "Size must be positive",
      type: "error",
      field: [["size"]]
    })), (this.index < 0 || this.index > 3) && s.push(new g({
      message: "Corner index must be between 0 and 3",
      type: "error"
    })), !!this.type && this.size !== null && (this.size ?? 0) > 0) {
      const o = this.size;
      if (e) {
        const l = e.longSide ?? e.l ?? 0, c = e.shortSide ?? e.w ?? 0, f = Math.min(l || 1 / 0, c || 1 / 0);
        Number.isFinite(f) && o > f / 2 && s.push(new g({
          message: `Size cannot exceed half of the shortest side (${f / 2})`,
          type: "error",
          field: [["size"]]
        }));
      }
      const r = J(i?.size?.min), a = J(i?.size?.max);
      r !== void 0 && o < r && s.push(new g({
        message: `Size must be at least ${r}`,
        type: "error",
        field: [["size"]]
      })), a !== void 0 && o > a && s.push(new g({
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
    return new Oe(e);
  }
  /**
   * Create a radius corner
   */
  static radius(e, i) {
    return new Oe({ type: "radius", size: e, index: i });
  }
  /**
   * Create a bevel corner
   */
  static bevel(e, i) {
    return new Oe({ type: "bevel", size: e, index: i });
  }
}
class ut extends A {
  static schema = rr;
  static computedProperties = or;
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
    if (this.position < 0 && s.push(new g({
      message: "Position cannot be negative",
      type: "error",
      field: [["position"]]
    })), this.width <= 0 && s.push(new g({
      message: "Width must be positive",
      type: "error",
      field: [["width"]]
    })), this.depth <= 0 && s.push(new g({
      message: "Depth must be positive",
      type: "error",
      field: [["depth"]]
    })), this.start < 0 && s.push(new g({
      message: "Start offset cannot be negative",
      type: "error",
      field: [["start"]]
    })), this.length !== void 0 && this.length < 0 && s.push(new g({
      message: "Length cannot be negative",
      type: "error",
      field: [["length"]]
    })), e) {
      const r = e.longSide ?? e.l ?? 0, a = e.shortSide ?? e.w ?? 0, l = e.t ?? 0, c = this.getDrawRect(e);
      r > 0 && a > 0 && (c.x < 0 || c.y < 0 || c.x + c.w > r || c.y + c.h > a) && s.push(new g({
        message: "Groove extends beyond the part",
        type: "error",
        field: [["position"], ["start"], ["length"]]
      })), l > 0 && this.depth >= l && s.push(new g({
        message: "Depth cannot exceed material thickness",
        type: "error",
        field: [["depth"]]
      }));
    }
    const n = J(i?.depth?.min), o = J(i?.depth?.max);
    return n !== void 0 && this.depth < n && s.push(new g({
      message: `Depth must be at least ${n}`,
      type: "error",
      field: [["depth"]]
    })), o !== void 0 && this.depth > o && s.push(new g({
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
    return new ut(e);
  }
}
class Se extends A {
  // Zod schema for validation and serialization
  static schema = fr;
  static computedProperties = hr;
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
    if ((this.x < 0 || this.y < 0) && s.push(new g({
      message: "Position cannot be negative",
      type: "error",
      field: [["x"], ["y"]]
    })), this.diameter <= 0 && s.push(new g({
      message: "Diameter must be positive",
      type: "error",
      field: [["diameter"]]
    })), this.depth !== void 0 && this.depth < 0 && s.push(new g({
      message: "Depth cannot be negative",
      type: "error",
      field: [["depth"]]
    })), e) {
      const o = e.longSide ?? e.l ?? 0, r = e.shortSide ?? e.w ?? 0, a = e.t ?? 0;
      if (this.isEdgeHole()) {
        const l = this.edge === "l1" || this.edge === "l2", c = l ? this.x : this.y, f = l ? o : r, d = l ? r : o;
        f > 0 && (c - n < 0 || c + n > f) && s.push(new g({
          message: "Edge hole extends beyond the edge",
          type: "error",
          field: [l ? ["x"] : ["y"]]
        })), d > 0 && this.depth !== void 0 && this.depth > d && s.push(new g({
          message: "Edge hole depth exceeds the part",
          type: "error",
          field: [["depth"]]
        }));
      } else
        o > 0 && (this.x - n < 0 || this.x + n > o) && s.push(new g({
          message: "Hole extends beyond the part length",
          type: "error",
          field: [["x"]]
        })), r > 0 && (this.y - n < 0 || this.y + n > r) && s.push(new g({
          message: "Hole extends beyond the part width",
          type: "error",
          field: [["y"]]
        })), a > 0 && this.depth !== void 0 && this.depth > a && s.push(new g({
          message: "Hole depth exceeds material thickness",
          type: "error",
          field: [["depth"]]
        }));
    }
    if (i) {
      const o = J(i.diameter?.min), r = J(i.diameter?.max);
      if (o !== void 0 && this.diameter < o && s.push(new g({
        message: `Diameter must be at least ${o}`,
        type: "error",
        field: [["diameter"]]
      })), r !== void 0 && this.diameter > r && s.push(new g({
        message: `Diameter must be at most ${r}`,
        type: "error",
        field: [["diameter"]]
      })), this.depth !== void 0) {
        const a = J(i.depth?.min), l = J(i.depth?.max);
        a !== void 0 && this.depth < a && s.push(new g({
          message: `Depth must be at least ${a}`,
          type: "error",
          field: [["depth"]]
        })), l !== void 0 && this.depth > l && s.push(new g({
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
    if (!this.isEdgeHole())
      return null;
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
    return this.face !== e.face ? 1 / 0 : Math.sqrt(Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2));
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
    return new Se({ x: e, y: i, diameter: s, face: n });
  }
  /**
  * Create from plain data (for deserialization)
  */
  static fromData(e) {
    return new Se(e);
  }
  get area() {
    const e = this.diameter / 2;
    return Math.PI * e * e;
  }
}
class Ne extends A {
  // Zod schema for validation and serialization
  static schema = lr;
  static computedProperties = cr;
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
    if (this.position < 0 && s.push(new g({
      message: "Position cannot be negative",
      type: "error",
      field: [["position"]]
    })), this.numHoles <= 0 && s.push(new g({
      message: "Number of holes must be positive",
      type: "error",
      field: [["numHoles"]]
    })), this.diameter <= 0 && s.push(new g({
      message: "Diameter must be positive",
      type: "error",
      field: [["diameter"]]
    })), this.hingeLength <= 0 && s.push(new g({
      message: "Hinge length must be positive",
      type: "error",
      field: [["hingeLength"]]
    })), this.depth !== void 0 && this.depth < 0 && s.push(new g({
      message: "Depth cannot be negative",
      type: "error",
      field: [["depth"]]
    })), this.numHoles > 1) {
      const a = this.hingeLength - 2 * this.outerSpacing;
      this.diameter * this.numHoles > a && s.push(new g({
        message: "Holes do not fit within hinge length",
        type: "error",
        field: [["hingeLength"], ["outerSpacing"]]
      }));
    }
    const n = J(i?.holeDistance?.min) ?? this.minimumHoleDistance;
    n !== void 0 && this.numHoles > 1 && (this.hingeLength - 2 * this.outerSpacing) / (this.numHoles - 1) < n && s.push(new g({
      message: `Holes must be at least ${n} apart`,
      type: "error",
      field: [["outerSpacing"], ["numHoles"]]
    }));
    const o = J(i?.diameter?.min), r = J(i?.diameter?.max);
    if (o !== void 0 && this.diameter < o && s.push(new g({
      message: `Diameter must be at least ${o}`,
      type: "error",
      field: [["diameter"]]
    })), r !== void 0 && this.diameter > r && s.push(new g({
      message: `Diameter must be at most ${r}`,
      type: "error",
      field: [["diameter"]]
    })), e) {
      const a = e.longSide ?? e.l ?? 0, l = e.shortSide ?? e.w ?? 0, c = e.t ?? 0, f = this.side === "l1" || this.side === "l2", d = f ? a : l, y = f ? l : a, m = this.diameter / 2;
      y > 0 && (this.distanceFromEdge - m < 0 || this.distanceFromEdge + m > y) && s.push(new g({
        message: "Distance from edge places holes off the part",
        type: "error",
        field: [["distanceFromEdge"]]
      }));
      const b = this.position + this.outerSpacing, v = this.position + this.hingeLength - this.outerSpacing;
      d > 0 && (b - m < 0 || v + m > d) && s.push(new g({
        message: "Hinge holes extend beyond the edge",
        type: "error",
        field: [["position"], ["hingeLength"]]
      })), c > 0 && this.depth !== void 0 && this.depth > c && s.push(new g({
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
    return this.generateHoles(i, s).map((o) => new Se(o));
  }
  /**
   * Generate individual holes from this hinge hole set
   */
  generateHoles(e, i) {
    const s = [];
    if (this.numHoles <= 0)
      return s;
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
      s.push(new Se({
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
    if (this.numHoles <= 1)
      return 0;
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
    return new Ne(e);
  }
}
class xa extends A {
  // Validation properties (issues, warnings) are inherited from validationBasePropertiesSchema
  // via sawPropertiesSchema which extends it - they are initialized automatically
  // when the Zod schema is parsed in the constructor
  // isValid is also provided as a computed property from validationBaseComputedProperties
  // Zod schema for validation and serialization
  static schema = Lt;
  static computedProperties = to;
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
  static defaults = Lt.parse({});
  constructor(e = {}) {
    super(e), this.stockType === "linear" && (this.cutType = void 0, this.cutPreference = void 0), this.cutType !== "efficiency" && this.options?.minSpacing !== 0 && (this.options = { ...this.options, minSpacing: 0 });
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
    return this.issues = [], this.warnings = [], this.bladeWidth < 0 && this.issues.push(new g({
      message: "Blade width cannot be negative",
      field: [["bladeWidth"]],
      type: "error",
      shouldTranslate: !1
    })), this.issues;
  }
}
function oi(t, e, i = "decimal") {
  const s = { ...t };
  for (const [n, o] of Object.entries(e)) {
    const r = t[n];
    switch (o.type) {
      case "number":
        r != null ? s[n] = typeof r == "string" ? I({ v: r, nf: i }) : r : r === null && (s[n] = null);
        break;
      case "trim":
        if (r) {
          const a = {};
          for (const [l, c] of Object.entries(r))
            a[l] = typeof c == "string" ? I({ v: c, nf: i }) : c;
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
const ka = {
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
}, va = {
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
}, Ia = {
  // Numeric field that needs conversion
  bladeWidth: { type: "number" },
  // Stack height should ensure it's a number
  stackHeight: { type: "transform", transform: (t) => typeof t == "number" ? t : t ? Number(t) : 100 },
  // Convert options field to handle minSpacing string/number conversions
  options: {
    type: "transform",
    transform: (t) => ({
      ...t,
      minSpacing: typeof t?.minSpacing == "string" ? I({ v: t.minSpacing, nf: "decimal" }) : t?.minSpacing ?? 0,
      minSpacingDimension: {
        dimension: typeof t?.minSpacingDimension?.dimension == "string" ? I({ v: t.minSpacingDimension.dimension, nf: "decimal" }) : t?.minSpacingDimension?.dimension ?? 0,
        minSpacing: typeof t?.minSpacingDimension?.minSpacing == "string" ? I({ v: t.minSpacingDimension.minSpacing, nf: "decimal" }) : t?.minSpacingDimension?.minSpacing ?? 0
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
function dt() {
  this.issues = [], this.warnings && (this.warnings = []);
}
function Ge(t) {
  t.type === "warning" && this.warnings ? this.warnings.push(t) : this.issues.push(t);
}
function Ve(t) {
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
    return new g({
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
function Ti(t, e) {
  const i = t.safeParse(e);
  return i.success ? [] : Ve(i.error);
}
const ms = {
  clearValidation: dt,
  addIssue: Ge,
  validateWithSchema: Ti,
  zodErrorsToIssues: Ve,
  /**
   * Run standard validation flow
   */
  runValidation(t, e = {}) {
    return dt.call(this), e.skipSchemaValidation || Ti(t, this).forEach((s) => Ge.call(this, s)), this.issues || [];
  }
};
class yl extends A {
  // Required: Define schema and computed properties for SchemaClass
  static schema = wi;
  static computedProperties = $r;
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}) {
    super(e);
    const i = Ft(this.stockType);
    i.includes(this.cutType) || (this.cutType = i.length > 0 ? i[0] : void 0);
    const s = Et(this.stockType, this.cutType);
    this.cutPreference && !s.includes(this.cutPreference) ? this.cutPreference = s[0] || void 0 : !this.cutPreference && s.length > 0 && (this.cutPreference = s.includes("l") ? "l" : s[0]), this.stockType === "roll" && this.options?.stackingMode !== "none" && (this.options = { ...this.options, stackingMode: "none" }), this.cutType !== "efficiency" && this.options?.minSpacing !== 0 && (this.options = { ...this.options, minSpacing: 0 });
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
    if (dt.call(this), e?.skipSchemaValidation || ms.runValidation.call(this, wi, e), !e?.skipBusinessValidation) {
      if (this.bladeWidth !== void 0 && this.bladeWidth !== null) {
        const i = I({ v: this.bladeWidth });
        i === null || isNaN(i) || i < 0 ? Ge.call(this, new g({
          message: "Blade width must be a non-negative number",
          type: "error",
          field: [["bladeWidth"]]
        })) : i > 100 && Ge.call(this, new g({
          message: "Blade width seems unusually large (> 100)",
          type: "warning",
          field: [["bladeWidth"]]
        }));
      }
      this.stackHeight !== void 0 && this.stackHeight !== null && (this.stackHeight < 1 ? Ge.call(this, new g({
        message: "Stack height must be at least 1",
        type: "error",
        field: [["stackHeight"]]
      })) : this.stackHeight > 1e3 && Ge.call(this, new g({
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
    const n = Ft(this.stockType);
    n.includes(this.cutType) || (this.cutType = n.length > 0 ? n[0] : void 0);
    const o = i !== this.stockType, r = s !== this.cutType;
    if (o || r) {
      const a = Et(this.stockType, this.cutType);
      this.cutPreference && !a.includes(this.cutPreference) ? a.length > 0 ? this.cutPreference = a.includes("l") ? "l" : a[0] : this.cutPreference = void 0 : !this.cutPreference && a.length > 0 && (this.cutPreference = a.includes("l") ? "l" : a[0]);
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
    const e = this.toData(), i = oi(e, Ia);
    return new xa(i);
  }
}
class ft extends A {
  // Zod schema for validation and serialization
  static schema = Xr;
  static computedProperties = Jr;
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
    this.holes.push(e instanceof Se ? e : new Se(e)), this.validate();
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
    this.hingeHoles.push(e instanceof Ne ? e : new Ne(e)), this.validate();
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
    const i = e instanceof Oe ? e : new Oe(e);
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
    this.grooves.push(e instanceof ut ? e : new ut(e)), this.validate();
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
      (o instanceof Ne ? o : new Ne(o)).generateHoles(i, s).forEach((a) => n.push(new Se(a)));
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
    return new ft();
  }
  /**
  * Create from plain data (for deserialization)
  */
  static fromData(e) {
    return new ft(e);
  }
  get allHoles() {
    return [...this.holes, ...this.getAllHingeHoles()];
  }
  /**
   * Get number of drilled holes — face holes plus every hole a hinge set expands to.
   */
  getNumHoles() {
    const e = (this.holes || []).length, i = (this.hingeHoles || []).reduce((s, n) => s + Math.max(0, n.numHoles || 0), 0);
    return e + i;
  }
  /**
   * Get number of active corner operations (ignores cleared corners).
   */
  getNumCorners() {
    return (this.corners || []).filter((e) => e instanceof Oe ? e.isPresent() : !!e.type && e.size !== null && (e.size ?? 0) > 0).length;
  }
  /**
   * Get number of groove operations.
   */
  getNumGrooves() {
    return (this.grooves || []).length;
  }
}
function Pa(t, e, i) {
  return i ? typeof t == "number" ? isNaN(t) ? null : t : typeof t == "string" ? t : null : e === "decimal" ? t ? I({ v: t, nf: "decimal" }) : null : t;
}
function Ta(t, e, i, s = !1) {
  const n = s ? Object.fromEntries(De.map((a) => [a, 0])) : { l1: 0, l2: 0, w1: 0, w2: 0 };
  if (!t)
    return n;
  const r = t && ("x1" in t || "x2" in t || "y1" in t || "y2" in t) ? {
    // CORRECT mapping: y1→l1, y2→l2, x1→w1, x2→w2
    l1: t.y1 ?? t.l1 ?? 0,
    l2: t.y2 ?? t.l2 ?? 0,
    w1: t.x1 ?? t.w1 ?? 0,
    w2: t.x2 ?? t.w2 ?? 0
  } : t;
  return i ? Object.keys(n).forEach((a) => {
    n[a] = r[a] ?? 0;
  }) : Object.keys(n).forEach((a) => {
    const l = r[a];
    l != null && (n[a] = I({ v: l, nf: e }));
  }), n;
}
class gs extends A {
  // Required: Define schema and computed properties for SchemaClass
  static schema = rt;
  static computedProperties = ei;
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
      s[r] === null || s[r] === void 0 ? delete s[r] : s[r] !== void 0 && (s[r] = Pa(s[r], i, n), s[r] === null && delete s[r]);
    s.name?.length ? s.name = Ds(s.name)?.toUpperCase() : s.name = "", s.material ? s.material = s.material.trim().toUpperCase() : s.material = "", typeof s.notes == "string" ? s.notes = s.notes.replace(/,/g, " ") : s.notes = "", s.trim && (s.trim = Ta(s.trim, i, n, !0)), super(s), this.issues || (this.issues = []), this.warnings || (this.warnings = []);
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
    return dt.call(this), e?.skipSchemaValidation || ms.runValidation.call(this, rt, e), this.issues;
  }
  // isValid is provided as a computed property from validationBaseComputedProperties
  /**
   * Get trimmed dimensions
   */
  get trimmedDimensions() {
    const e = this.longSide, i = this.shortSide, s = I({ v: this.trim.l1 }) ?? 0, n = I({ v: this.trim.l2 }) ?? 0, o = I({ v: this.trim.w1 }) ?? 0, r = I({ v: this.trim.w2 }) ?? 0;
    return {
      name: this.name,
      id: this.id,
      autoId: this.autoId,
      l: e - (o + r),
      w: i - (s + n)
    };
  }
}
class bl extends gs {
  // Required: Define schema and computed properties for SchemaClass
  // Use getters to defer schema access and avoid circular dependency
  static get schema() {
    return xt;
  }
  static get computedProperties() {
    return Hr;
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
      machining: e.machining || new ft({
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
      if (e = I({ v: e }), this.trim) {
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
      for (let m = this.issues.length - 1; m >= 0; m--)
        this.issues[m].field.some((b) => c.includes(b[0])) && this.issues.splice(m, 1);
      for (let m = this.warnings.length - 1; m >= 0; m--)
        this.warnings[m].field.some((b) => c.includes(b[0])) && this.warnings.splice(m, 1);
      const f = e.fields.reduce((m, b) => {
        const v = b.split(".")[0];
        return m[v] = !0, m;
      }, {}), y = xt.pick(f).safeParse(this.toData());
      if (!y.success) {
        const m = Ve(y.error);
        this.issues.push(...m);
      }
    } else {
      this.issues.length = 0, this.warnings.length = 0;
      const c = xt.safeParse(this.toData());
      if (!c.success) {
        const f = Ve(c.error);
        this.issues.push(...f);
      }
    }
    if (e.skipBusinessValidation)
      return this.issues;
    if (this.isNew && e.fields)
      return this.issues;
    const { inputStockList: i = [], index: s = null, useInventory: n = !1, fields: o = null } = e, r = s ?? this.index ?? 0, a = (c) => !o || o.includes(c);
    a("l") && B.l({
      item: this,
      index: r,
      category: ["part"]
    }), a("w") && B.w({
      item: this,
      index: r,
      category: ["part"]
    }), a("t") && B.t({
      item: this,
      index: r,
      category: ["part"],
      saw: e.saw
    }), a("q") && B.q({
      item: this,
      index: r,
      category: ["part"]
    }), a("trim") && B.trim({
      item: this,
      index: r,
      category: ["part"]
    }), !n && i.length > 0, a("customData") && B.customData({
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
    const i = oi(this.toData(), ka, e);
    return this.isSquare && (i.orientationLock = null), new yt(i);
  }
  changeStockType(e) {
    switch (e) {
      case "sheet":
      case "roll":
        this.orientationLock = "", e === "roll" && (this.t = null);
        break;
      case "linear":
        this.orientationLock = "", this.banding = Object.fromEntries(Rt.map((i) => [i, !1]));
        break;
    }
  }
}
class wl extends gs {
  // Required: Define schema and computed properties for SchemaClass
  static schema = kt;
  static computedProperties = Ur;
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
      for (let m = this.issues.length - 1; m >= 0; m--)
        this.issues[m].field.some((v) => f.includes(v[0])) && this.issues.splice(m, 1);
      for (let m = this.warnings.length - 1; m >= 0; m--)
        this.warnings[m].field.some((v) => f.includes(v[0])) && this.warnings.splice(m, 1);
      const d = this.toData();
      console.log("[InputStock.validate] Field-level validation requested for fields:", e.fields), console.log("[InputStock.validate] Data to validate:", d);
      const y = e.fields.reduce((m, b) => {
        const v = b.split(".")[0];
        return m[v] = !0, m;
      }, {});
      try {
        const m = kt.pick(y);
        console.log("[InputStock.validate] Created partial schema for fields:", Object.keys(y));
        const b = m.safeParse(d);
        if (console.log("[InputStock.validate] Validation result:", b.success ? "SUCCESS" : "FAILED"), b.success)
          console.log("[InputStock.validate] No validation errors found");
        else {
          console.log("[InputStock.validate] Validation errors:", b.error.issues);
          const v = Ve(b.error);
          this.issues = [...this.issues, ...v];
        }
      } catch (m) {
        console.warn(`Failed to validate fields ${e.fields.join(", ")}:`, m);
      }
      this.isNew && (console.log("[InputStock.validate] Clearing isNew flag"), this.isNew = !1);
    } else {
      this.issues = [], this.warnings = [];
      const f = kt.safeParse(this.toData());
      if (!f.success) {
        const d = Ve(f.error);
        this.issues = d;
      }
    }
    if (e?.skipBusinessValidation)
      return this.issues;
    const o = n ?? this.index ?? 0, r = e?.fields, a = (f) => !r || r.includes(f);
    ["l", "w", "t"].forEach((f) => {
      a(f) && B[f]({
        item: this,
        saw: s,
        index: o,
        category: ["stock"]
      });
    }), a("grain") && B.grain({
      item: this,
      index: o,
      category: ["stock"]
    }), a("trim") && B.trim({
      item: this,
      index: o,
      category: ["stock"]
    }), a("q") && B.q({
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
    const o = oi(s, va, e);
    return (i || this.saw) && (o.saw = i || this.saw), new lt(o);
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
const Oi = 0.01;
function Oa(t, e = 0) {
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
      d.autoId !== y.autoId && (Math.abs(d.x + d.l - y.x) < Oi && o.add(d.x + d.l), Math.abs(d.y + d.w - y.y) < Oi && r.add(d.y + d.w));
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
class Sl extends A {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Kr;
  static computedProperties = Yr;
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
    this.clearValidation(), e.q !== void 0 && B.q({ item: e, index: "index" in e && typeof e.index == "number" ? e.index : 0 }).filter((s) => s).forEach((s) => this.addIssue(s));
  }
  /**
    * Validate with actual shape data
    */
  validateWithShapes(e = []) {
    if (!e.length)
      throw new Error("A shapeList is required to validate an InputUserGroup.");
    const i = [...this.issues], s = this.findShapes(e), n = B.groupShapeCount({
      item: this,
      index: 0,
      shapes: s,
      requiredCount: 2
    });
    if (i.push(...n), i.length) return i;
    if (this.positions?.length >= 2) {
      const o = B.groupOverlap({
        item: this,
        index: 0,
        shapes: s,
        positions: this.positions.map((r) => ({
          autoId: r.autoId,
          x: r.x ?? 0,
          y: r.y ?? 0
        }))
      });
      i.push(...o);
    }
    return i;
  }
  /**
    * Find shapes from shape list
    */
  findShapes(e) {
    if (this.shapeIds?.length && e.length) {
      const s = [];
      for (const n of this.shapeIds) {
        const o = e.find((r) => !!(r.autoId === n || W(r) && r.autoId === n || "id" in r && r.id === n));
        o && (W(o) || U(o)) && s.push(o);
      }
      return s.length < this.shapeIds.length && this.addIssue(new g({
        message: "Could not find all shapes in the shape list",
        type: "error"
      })), s;
    }
    if (!this.shapes.length) return [];
    const i = [];
    for (const s of this.shapes) {
      const n = e.find((o) => !!(o.autoId === s || String(o.autoId) === String(s) || "id" in o && (o.id === s || String(o.id) === String(s)) || W(o) && (o.autoId === s || String(o.autoId) === String(s))));
      n && (W(n) || U(n)) && i.push(n);
    }
    return i;
  }
  /**
   * Populate parent IDs from shape list IDs
   */
  populateParentID(e) {
    e?.length && this?.shapeIds?.length && (this.shapes = this.shapeIds.map((i) => {
      const s = e.find((n) => n.autoId === i || W(n) && n.autoId === i);
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
    if (Array.isArray(e) || (Array.isArray(s) ? e = s : e = []), e.length) {
      const b = e.filter((C) => W(C) || U(C)), v = this.validateWithShapes(b);
      if (v.filter((C) => C.type === "error").length > 0)
        throw new Error(`Cannot create Group: ${v[0].message}`);
    }
    const o = this.findShapes(e || []);
    if (o.length === 0)
      throw new Error("No shapes found for Group creation");
    const r = o.map((b) => W(b) ? b.toShape() : b), a = r[0];
    r.forEach((b) => {
      if (e && Array.isArray(e)) {
        const v = e.findIndex((C) => "group" in C && C.group?.inUserGroup ? !1 : "parentId" in C && "parentId" in b && C.parentId === b.parentId || "id" in C && "id" in b && C.id === b.id);
        v !== -1 && e.splice(v, 1);
      }
      "group" in b && b.group && (b.group.inUserGroup = !0);
    });
    let l = this.positions?.length ? this.positions.map((b) => {
      const v = o.find((S) => S.autoId === b.autoId), C = v ? r[o.indexOf(v)] : r.find((S) => S.autoId === b.autoId);
      return {
        autoId: C?.autoId || b.autoId,
        x: b.x ?? 0,
        y: b.y ?? 0,
        rot: C?.rot ?? 0
      };
    }) : void 0, c = 0, f = 0;
    if (l?.length) {
      const b = l.map((C) => {
        const S = r.find((E) => E.autoId === C.autoId);
        return {
          autoId: C.autoId,
          x: C.x,
          y: C.y,
          rot: C.rot,
          l: S?.l ?? 0,
          w: S?.w ?? 0
        };
      }), v = Oa(b, n?.bladeWidth ?? 0);
      l = v.positions, c = v.l, f = v.w;
    } else {
      const b = n?.bladeWidth ?? 0;
      let v = 0;
      for (const C of r)
        v += C.l + b, f = Math.max(f, C.w);
      c = v - b, c < 0 && (c = 0);
    }
    const d = l, y = {
      autoId: this.autoId,
      shapes: r,
      userPositions: d,
      l: c,
      w: f,
      t: a?.t,
      material: a?.material,
      orientationLock: f > c ? "w" : "l",
      type: "user",
      q: 1,
      preventAutoRotation: !0,
      container: n,
      skipValidation: !0
    }, m = new ri(y);
    return n && "updateShapeSpacing" in m && typeof m.updateShapeSpacing == "function" && m.updateShapeSpacing(n), m;
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
export {
  bl as $,
  g as A,
  yt as B,
  ii as C,
  Ys as D,
  p as E,
  si as F,
  ue as G,
  _a as H,
  Sl as I,
  pe as J,
  ni as K,
  Re as L,
  De as M,
  ri as N,
  ds as O,
  X as P,
  lt as Q,
  gt as R,
  A as S,
  $e as T,
  Oe as U,
  G as V,
  ye as W,
  ut as X,
  Ne as Y,
  Se as Z,
  yl as _,
  Xa as a,
  br as a$,
  wl as a0,
  ft as a1,
  be as a2,
  xa as a3,
  Qa as a4,
  Z as a5,
  kt as a6,
  k as a7,
  mo as a8,
  de as a9,
  la as aA,
  sl as aB,
  pa as aC,
  ha as aD,
  il as aE,
  tl as aF,
  Yo as aG,
  za as aH,
  uo as aI,
  ge as aJ,
  fe as aK,
  Ot as aL,
  rn as aM,
  Jn as aN,
  At as aO,
  Wa as aP,
  $a as aQ,
  Mn as aR,
  Er as aS,
  et as aT,
  ea as aU,
  sa as aV,
  Va as aW,
  dl as aX,
  ul as aY,
  $ as aZ,
  kr as a_,
  T as aa,
  Ki as ab,
  W as ac,
  yn as ad,
  Kr as ae,
  xt as af,
  wi as ag,
  jt as ah,
  Ms as ai,
  Gt as aj,
  Bo as ak,
  Ue as al,
  gl as am,
  aa as an,
  Ja as ao,
  fs as ap,
  hs as aq,
  qa as ar,
  Ka as as,
  ll as at,
  ml as au,
  al as av,
  ol as aw,
  rl as ax,
  bt as ay,
  Ya as az,
  Ga as b,
  ja as b0,
  Ra as b1,
  Na as b2,
  Ri as b3,
  _i as b4,
  os as b5,
  Kt as b6,
  Zt as b7,
  Yt as b8,
  Qt as b9,
  xr as ba,
  Sr as bb,
  Jt as bc,
  Xt as bd,
  Qr as be,
  ir as bf,
  Hn as bg,
  el as bh,
  Ut as bi,
  pl as bj,
  Ba as bk,
  gr as bl,
  nl as bm,
  cl as bn,
  Ua as c,
  fl as d,
  ca as e,
  hl as f,
  Ha as g,
  I as h,
  ce as i,
  Ln as j,
  Q as k,
  Za as l,
  Wt as m,
  we as n,
  Ht as o,
  pt as p,
  qt as q,
  Ro as r,
  Pt as s,
  Cn as t,
  ze as u,
  ba as v,
  Ct as w,
  Ui as x,
  ct as y,
  O as z
};

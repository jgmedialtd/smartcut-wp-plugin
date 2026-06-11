import { a as Z, h as Rn, b as Gn } from "./vendor-lodash-CLVv-kqQ.js";
import { i as G, o as x, h as S, l as D, k as f, D as $, E as W, j as _, n as u, F as Xe, G as $n, Z as xi, H as Nn, I as j, J as Ge, K as hs, L as Bn, M as zn, N as jn, O as Ls, P as Es, Q as Vn, S as Wn, T as qn, U as Un, V as Hn, W as Kn } from "./vendor-BnSUeZfc.js";
import "./vendor-i18next-DIDhOEvY.js";
import { t as Ae, s as Yn, a as Zn } from "./i18n-B1ErfgJE.js";
import { i as st } from "./environment-BeBZzWz6.js";
import { m as Xn } from "./validation-keys-CsEDW3Vc.js";
import { F as Rt } from "./vendor-fraction-3H9P8ENz.js";
const Fs = G(["error", "warning"]), Ms = G(["saw", "stock", "part", "group", "machining", "extras"]);
x({
  message: f(),
  identifier: f(),
  field: D(D(f())),
  index: D(u()),
  id: f(),
  // Source object's autoId for linking back
  type: Fs,
  category: D(Ms)
});
const Jn = x({
  item: _().nullable().default(null),
  message: f().default(""),
  params: $(f(), W([f(), u(), S(), Xe()])).optional(),
  // Translation parameters
  field: D(D(f())).default([]),
  index: D(u()).nullable().default(null),
  id: f().nullable().default(null),
  // Source object's autoId
  issues: D(_()).nullable().default(null),
  // Will be Issue[] at runtime
  type: Fs.default("error"),
  category: D(Ms).nullable().default(null),
  throwError: S().default(!1),
  shouldTranslate: S().default(!0)
}), Qn = ["lr", "rl", "bt", "tb"];
x({
  x1: u(),
  x2: u(),
  y1: u(),
  y2: u(),
  dimension: G(["l", "w"]).optional(),
  shapeCollisions: D(_()).optional()
});
x({
  id: f().nullable().optional(),
  x1: u(),
  x2: u(),
  y1: u(),
  y2: u(),
  origin: f().optional(),
  dimension: G(["l", "w"]).optional(),
  direction: G(Qn).nullable().optional(),
  type: f().nullable().optional()
});
const er = x({
  // ========== Identification ==========
  // Unique identifier for this line
  id: f(),
  // Type classification for this line
  type: f().optional(),
  // ========== Coordinates ==========
  x1: u().default(0),
  x2: u().default(0),
  y1: u().default(0),
  y2: u().default(0),
  // ========== Origin Information ==========
  // Origin point of the line
  origin: f().optional(),
  // ========== Collision Tracking ==========
  // Shapes that collide with this line
  shapeCollisions: D(_()).default([]),
  // ========== Validation ==========
  // Validation issues found with this line
  issues: D(_()).default([])
}), tr = {
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
}, _s = /* @__PURE__ */ new Map();
function $t() {
  return _s;
}
function Bc(t, e) {
  _s.set(t, e);
}
function ui(t, e) {
  const i = t, s = i._fieldBehavior?.fieldBehavior || {};
  return i._fieldBehavior = {
    fieldBehavior: {
      ...s,
      ...e
    }
  }, i;
}
function Di(t) {
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
function Lt(t) {
  const e = {};
  if (t instanceof Nn) {
    const i = t.shape;
    for (const [s, n] of Object.entries(i)) {
      const o = Di(n);
      o && (e[s] = o);
    }
  }
  if (t._def && t._def.shape) {
    const i = t._def.shape;
    for (const [s, n] of Object.entries(i)) {
      const o = Di(n);
      o && (e[s] = o);
    }
  }
  return e;
}
typeof $n < "u" && xi && xi.prototype && (xi.prototype.behavior = function(t) {
  return ui(this, t);
});
function N(t, e = {}) {
  let s = _().refine((r) => r == null ? !0 : typeof r == "object" && r !== null ? ("autoId" in r || "id" in r, !0) : !1, {
    message: `Invalid reference to ${t}`
  }).transform((r) => {
    if (r == null || typeof r == "object" && r !== null && typeof r.getType == "function" || typeof r == "object" && r !== null && r.__ref === !0)
      return r;
    if (typeof r == "object" && r !== null && !r.__ref) {
      if (r._type !== void 0)
        return r;
      try {
        const a = $t(), l = r.__entityType || t, c = a.get(l);
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
  return n = ui(n, o), Object.defineProperty(n, "__zRefClassName", {
    value: t,
    enumerable: !1,
    writable: !1,
    configurable: !1
  }), n;
}
function U(t, e = {}) {
  let i = D(N(t)).default([]).describe(e.description || `Array of ${t} references`);
  const s = e.fieldBehavior || {
    serialize: "reference",
    // Reference arrays should always serialize as references
    compress: "reference",
    // Compressed mode also uses references
    clone: "copy",
    // Default clone behavior
    description: `Array of ${t} references`
  };
  return i = ui(i, s), i;
}
function Ht(t, e = {}) {
  const i = t.map((o) => N(o));
  let s = D(W(i)).default([]).describe(e.description || `Array of ${t.join(" or ")} references`);
  const n = e.fieldBehavior || {
    serialize: "reference",
    // Union reference arrays should always serialize as references
    compress: "reference",
    // Compressed mode also uses references
    clone: "copy",
    // Default clone behavior
    description: `Array of ${t.join(" or ")} references`
  };
  return s = ui(s, n), s;
}
const ms = ["topLeft", "topRight", "bottomLeft", "bottomRight"], ir = [
  "left",
  "centre",
  "right",
  "top",
  "bottom",
  "topLeft",
  "topRight",
  "bottomLeft",
  "bottomRight"
], sr = ["lr", "rl", "bt", "tb"], nr = x({
  // ========== Coordinates ==========
  x: u().default(0),
  y: u().default(0),
  z: u().default(0),
  // ========== Shape References ==========
  a: f().optional(),
  b: f().optional(),
  stock: N("Stock", { nullable: !0 }).optional(),
  // ========== Direction and Positioning ==========
  direction: G(sr).nullable().optional(),
  type: f().optional(),
  corner: G(ms).optional(),
  shapePosition: G(ms).optional(),
  grid: G(ir).optional(),
  // ========== Collision and Raycast Flags ==========
  raycast: S().default(!1),
  collision: S().default(!1),
  tooClose: S().default(!1),
  adjustedForMinSpacing: S().default(!1)
}), rr = {
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
}, Rs = f().default("").describe('Unique identifier (e.g., "1.0" for shapes/stock, "g1" for groups, "ss-1_a2b3" for segments, "1.0-proximity" for proximity rectangles)'), or = f().max(200).default("").describe("User input name"), ar = f().default("").describe("Parent identifier for tracking copies and relationships"), zi = f().describe("Internal product or material code"), lr = S().default(!1).describe("Prevent automatic rotation optimization"), cr = S().default(!1).describe("Whether this is an offcut piece"), Gs = D(f()).default([]).describe("IDs of identical items").behavior({ clone: "copy" }), vt = W([
  j(""),
  j("l"),
  j("w"),
  j(" ").transform(() => ""),
  Xe().transform(() => "")
]).default("").describe("Grain direction of the material"), $s = f().optional().describe("Color name"), zc = W([j(""), f().regex(/^#[0-9A-Fa-f]{3,8}$/, { error: (t) => `Invalid hex colour "${t.input}" — use #RGB or #RRGGBB, e.g. "#1a2b3c"` })]).optional().describe("Color hex code"), Ns = Ge((t) => t === null || t === " " || t === "n" || t === "none" || !["", "l", "w"].includes(t) ? "" : t, G(["", "l", "w"]).default("").describe("Orientation lock for rotation constraints")), ur = x({
  l1: u().default(0).describe("Long side 1 trim value"),
  l2: u().default(0).describe("Long side 2 trim value"),
  w1: u().default(0).describe("Short side 1 trim value"),
  w2: u().default(0).describe("Short side 2 trim value")
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 });
x({
  material: S(),
  thickness: S(),
  fit: S(),
  width: S()
}).nullable().default(null);
W([
  j(""),
  j("l"),
  j("w"),
  Xe()
]).default(null);
$(f(), u()).nullable().default(null);
$(f(), u()).nullable().default(null);
const ji = W([
  j(0),
  j(1)
]), fr = x({
  dimension: u().describe("Dimension of the strip shape batch"),
  rot: ji.describe("Rotation: 0 (no rotation) or 1 (90 degrees)"),
  order: u().optional().describe("Order of the batch"),
  id: f().optional().describe("Batch ID"),
  stockId: f().optional().describe("Associated stock ID"),
  rerunning: S().optional().describe("Whether the batch is being rerun"),
  priorityShape: f().nullable().describe("Priority shape identifier (null if none specified)")
});
x({
  subsetUsed: S().optional().describe("Whether a subset was used for strip shape batches"),
  groups: $(f(), fr).describe("Groups of strip shape batches keyed by ID")
});
const dr = G(["none", "schema", "business", "full"]), De = x({
  // Validation issues (errors) - uses zRefArray to avoid type duplication across modules
  issues: U("Issue", {
    description: "Validation issues (errors)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Validation warnings (non-critical issues) - uses zRefArray to avoid type duplication
  warnings: U("Issue", {
    description: "Validation warnings (non-critical)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Legacy flag to skip validation (backward compatibility)
  skipValidation: S().optional(),
  // New validation control properties
  skipSchemaValidation: S().optional(),
  skipBusinessValidation: S().optional(),
  validationMode: dr.optional(),
  enableStrictMode: S().optional()
}), Be = {
  // Check if valid (no errors)
  isValid: {
    compute: (t) => (t.issues || []).filter((i) => i.type === "error").length === 0,
    cache: !0,
    dependencies: ["issues"],
    returnType: "boolean"
  }
};
function pr(t) {
  if (!t)
    return "";
  const e = t.indexOf(".");
  return e === -1 ? t : t.substring(0, e);
}
const Vi = De.extend({
  // Identity
  id: Rs,
  // Description
  name: or,
  // Dimensions
  l: Ge((t) => typeof t == "number" && !isFinite(t) ? 1 : t ?? 1, u().positive()).describe("Length (long side dimension)"),
  w: Ge((t) => typeof t == "number" && !isFinite(t) ? 1 : t ?? 1, u().positive()).describe("Width (short side dimension)"),
  t: u().positive().nullable().optional().describe("Thickness (z-axis dimension)"),
  q: u().positive().int().default(1).describe("Quantity"),
  // Calculated dimensions (computed once on init for performance)
  area: u().positive().default(1).describe("Calculated area (l * w)"),
  longSide: u().positive().default(1).describe("Calculated long side Math.max(l, w)"),
  shortSide: u().positive().default(1).describe("Calculated short side Math.min(l, w)"),
  parentId: f().default("").describe("Parent ID extracted from id (integer part before decimal)"),
  // Flags
  duplicate: S().default(!1).describe("Whether this is a duplicate"),
  offcut: cr,
  // Grain
  grain: vt,
  preventGrainRotation: S().default(!1).describe("Prevent rotation that would change grain direction"),
  // Orientation
  preventAutoRotation: lr,
  orientationLock: Ns,
  // Position (reset during cloning - cloned shapes should not have preset positions)
  x: u().nullable().default(null).describe("X coordinate position").behavior({ clone: "reset" }),
  y: u().nullable().default(null).describe("Y coordinate position").behavior({ clone: "reset" }),
  // Stock matching
  material: f().max(200).default("").transform((t) => t ? t.trim().toLowerCase() : "").describe("Material name"),
  // Trim
  trim: ur.describe("Reduce the dimensions by specified trim values"),
  trimmed: S().default(!1).describe("Whether trim has been applied to dimensions"),
  // Proximity data (excluded from compression)
  proximity: x({
    rectangle: N("Rectangle").nullable().default(null),
    // Using 'any' to avoid circular import
    distance: u().nullable().default(null)
  }).default({ rectangle: null, distance: null }).behavior({ compress: "exclude" }),
  // Other properties
  cost: u().min(0).nullable().default(0).describe("Cost per unit"),
  discount: u().min(0).max(100).nullable().default(0).describe("Percentage discount (0-100)"),
  customData: $(f(), _()).default({}).describe("Custom user-defined data"),
  identicalTo: Gs,
  notes: f().max(500).default("").transform((t) => typeof t == "string" && t.length ? t.replace(/,/g, "").substring(0, 200) : "").describe("Description")
}), Wi = {
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
}, hr = ["x", "y"];
G(hr);
const mr = ["l", "w"];
G(mr);
const gr = ["l", "w"], rt = G(gr);
W([
  j(0),
  j(1),
  j(2)
]);
W([
  j(0),
  j(1),
  Xe()
]);
const Bs = ["sheet", "linear", "roll"], fi = Ge(
  // Normalize to lowercase before validation
  (t) => typeof t == "string" ? t.toLowerCase() : t,
  W([
    G(Bs),
    Xe()
  ]).nullable().default(null)
).describe("Type of stock material"), zs = x({
  // Infinite length flag for rolls and other continuous stock
  infiniteLength: S().default(!1).describe("Whether stock has infinite length (e.g., for rolls)"),
  // Allow shapes that exactly fit the stock dimensions
  allowExactFitShapes: S().default(!1).describe("Allow shapes that exactly fit"),
  // Automatically add stock as needed
  autoAdd: S().default(!1).describe("Automatically add stock as needed"),
  // Unlimited quantity flag - stock never runs out
  unlimitedQuantity: S().default(!1).describe("Stock has unlimited quantity (never decremented)"),
  // Product variant name from supplier catalogue
  variant: f().optional().describe("Product variant name from supplier"),
  // Manufacturer / brand name (Egger, Kronospan, etc.) — orthogonal to `variant`.
  brand: f().optional().describe("Manufacturer / brand name")
}), qi = Vi.extend({
  // Identity - override id to be required for containers
  id: f().default("").describe("Unique identifier for containers (required for Stock and Segment)"),
  // Parent identifier for tracking copies
  parentId: ar,
  // Container-specific fields
  stockType: fi,
  // Array of shapes or groups (excluded from compression - runtime only)
  shapes: Ht(["Shape", "Group"], {
    description: "Array of Shape or Group objects contained within this container"
  }).behavior({ clone: "reset", compress: "exclude" }),
  // Saw reference - using zRef for define.ref<Saw>('Saw') (share exact instance during cloning, serialize as reference)
  saw: N("Saw", {
    nullable: !0,
    description: "Reference to Saw class"
  }).behavior({ clone: "share", compress: "reference" }),
  // Algorithm benchmark results (reset during cloning)
  algoBenchmark: _().optional().describe("Benchmark results from optimization algorithms").behavior({ clone: "reset" }),
  // Container flag
  isContainer: S().default(!0).describe("Flag indicating this is a container")
}), Ui = {
  // Include all Rectangle computed properties
  ...Wi,
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
qi.describe(JSON.stringify({
  name: "Container",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(Ui)
}));
const yr = x({
  dimension: u().describe("Dimension of the strip shape batch"),
  rot: W([
    j(0),
    j(1)
  ]).describe("Rotation"),
  order: u().optional().describe("Order of the batch"),
  id: f().optional().describe("Batch ID"),
  stockId: f().optional().describe("Associated stock ID"),
  rerunning: S().optional().describe("Whether the batch is being rerun"),
  priorityShape: f().nullable().describe("Priority shape identifier (null if none specified)")
}), js = x({
  // Strip direction
  myStripDirection: rt.optional(),
  // Strip parent (can be shape or group)
  myStripParent: W([
    N("Shape", { nullable: !0 }),
    N("Group", { nullable: !0 })
  ]).default(null).describe("Parent strip shape or group for guillotine optimization").behavior({
    serialize: "reference",
    compress: "reference",
    clone: "share"
  }),
  // Phase number
  myPhase: u().int().min(0).optional().describe("Phase of the strip this shape belongs to"),
  // Strip shape batches optimization data
  stripShapeBatches: x({
    subsetUsed: S().optional().describe("Whether a subset was used for strip shape batches"),
    groups: $(f(), yr).default({}).describe("Groups of strip shape batches keyed by ID")
  }).default({ groups: {} }).describe("Strip shape batch optimization data")
});
js.describe(JSON.stringify({
  name: "GuillotineState",
  version: "1.0.0"
}));
const br = {}, wr = x({
  fill: u().default(0),
  similarDimensions: u().default(0),
  compression: u().default(0),
  cohesion: u().default(0),
  area: u().default(0),
  edge: u().default(0),
  alignment: u().default(0),
  exactFit: u().default(0),
  total: u().default(0),
  shapes: W([
    N("Shape", { nullable: !0 }),
    N("Group", { nullable: !0 })
  ]).optional(),
  group: N("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
  cutDirection: rt.optional()
}).behavior({ clone: "reset" }), Sr = x({
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
  cutDirection: rt,
  myStripDirection: rt.optional(),
  myStripParent: W([
    N("Shape", { nullable: !0 }),
    N("Group", { nullable: !0 })
  ]).optional().describe("Parent strip shape or group for guillotine optimization"),
  myPhase: u().optional()
}).behavior({ clone: "reset" }), gs = W([
  wr,
  Sr,
  // Also support the generic object with catchall for backward compatibility
  x({
    cutDirection: rt.optional(),
    myStripParent: W([
      N("Shape", { nullable: !0 }),
      N("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group"),
    myStripDirection: rt.optional()
  }).catchall(u())
]).behavior({ clone: "reset" }), Nt = Vi.extend({
  // Stock lock (shared schema) - original was stockLock: define.array(define.string())
  stockLock: D(f()).default([]).describe("Stock lock configuration"),
  // Stock matching - original object structure
  stockMatch: x({
    material: S(),
    thickness: S(),
    fit: S(),
    width: S()
  }).nullish().describe("Matching stock information"),
  // Guillotine state - reference that will be initialized in constructor (reset during cloning)
  // This ensures guillotineState is always a proper GuillotineState instance with methods
  guillotineState: N("GuillotineState", {
    nullable: !0,
    // Nullable in schema but always initialized in constructor
    description: "Data for guillotine cutting optimization (always initialized as instance)"
  }).nullable().default(null).behavior({
    clone: "unique",
    serialize: st() ? "full" : "exclude",
    compress: st() ? "full" : "exclude"
    // Consistent with serialize behavior
  }),
  // Priority and weighting (records) - exact match from original
  priority: $(f(), u()).default({}).describe("Priority levels for optimization"),
  weighting: $(f(), u()).optional().describe("Shape weighting for optimization"),
  // Pattern matching for stack detection (reset during cloning)
  patternMatch: S().default(!1).describe("Used for stack detection").behavior({ clone: "reset" }),
  firstShape: x({
    sampleRotations: D(u().int().min(0).max(1)).default([]).describe("Sample rotations (0 or 1) for first shape optimization").behavior({ clone: "reset" }),
    isFirstShape: S().default(!1).describe("Whether this is the first shape in optimization").behavior({ clone: "reset" })
  }).default({ sampleRotations: [], isFirstShape: !1 }),
  // Placement properties (reset during cloning)
  added: S().default(!1).describe("Whether shape has been added to a stock").behavior({ clone: "reset" }),
  placementOrder: u().int().min(0).optional().describe("Order in which shape was placed").behavior({ clone: "reset" }),
  // Stock reference (reset during cloning - cloned shapes should not be pre-placed)
  // Serialized as a reference to avoid circular structures (Stock.shapes ↔ Shape.stock)
  stock: N("Stock", {
    nullable: !0,
    description: "Reference to the stock this item is placed on"
  }).behavior({ clone: "reset", serialize: "reference", compress: "reference" }),
  // Stock fitting data
  fitsStock: $(f(), $(f(), S())).nullable().default(null).describe("Information about which stocks this shape fits"),
  // Scoring properties
  bestScore: x({
    x: u().nullable().default(null),
    y: u().nullable().default(null),
    rot: W([j(0), j(1)]).nullable().default(null),
    total: u().nullable().default(null),
    weighting: $(f(), u()).optional(),
    group: N("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
    score: gs.optional(),
    // FastPoint instances (used in the placement hot loop) live here. FastPoint has no
    // toData and holds a live Stock back-reference — must be excluded from serialization
    // to avoid Stock↔Shape cycles when bestScore is serialised in dev mode.
    point: _().optional().describe("Associated point for placement").behavior({ serialize: "exclude", compress: "exclude" }),
    myStripParent: W([
      N("Shape", { nullable: !0 }),
      N("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group for this score"),
    cutDirection: rt.optional(),
    myStripDirection: rt.optional(),
    stock: N("Stock", {
      nullable: !0,
      description: "Stock reference for this score"
    })
  }).nullable().default(null).optional().describe("Best optimization score achieved").behavior({
    clone: "reset",
    serialize: st() ? "full" : "exclude"
    // Retain in development mode for debugging
  }),
  // Current optimization score (can be efficiency or guillotine type, reset during cloning)
  score: gs.nullable().optional().describe("Current optimization score").behavior({
    clone: "reset",
    serialize: "exclude"
    // Always exclude - transient optimization data
  })
}), Bt = {
  // Include all Rectangle computed properties
  ...Wi
  // Placeable doesn't define additional computed properties
};
Nt.describe(JSON.stringify({
  name: "Placeable",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(Bt)
}));
const Vs = ["horizontal", "vertical"], Ws = ["position", "user", "strip", "firstShape"], xr = G(Vs).optional(), ys = x({
  x: u(),
  y: u(),
  autoId: f().optional(),
  rot: ji
}), kr = Nt.extend({
  // Override quantity - always 1 for groups
  q: u().min(1).max(1).int().default(1),
  // Groups have fixed orientation
  preventAutoRotation: S().default(!0),
  // Group-specific fields
  shapes: U("Shape").default([]),
  direction: xr,
  container: W([
    N("Segment"),
    N("Stock")
  ]).behavior({ compress: "exclude" }),
  positions: D(ys).default([]),
  // User-defined positions for free-placement user groups (from InputUserGroup)
  userPositions: D(ys).optional(),
  type: G(Ws).default("position"),
  efficiency: u().min(0).max(100).default(0),
  groupLength: u().min(0).default(0),
  groupWidth: u().min(0).default(0),
  outOfBounds: S().default(!1),
  collision: S().default(!1),
  counter: u().int().min(0).default(0),
  inputId: f().optional()
}), Ir = {
  ...Bt,
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
  id: f(),
  x: u(),
  y: u(),
  shapes: U("Shape"),
  direction: G(Vs),
  type: G(Ws),
  container: W([
    N("Segment"),
    N("Stock")
  ]).optional()
});
const vr = ["l", "w"], Pr = Nt.extend({
  // Identity - offcuts need IDs for tracking and export
  id: f().default(""),
  // Note: offcut property is inherited from Rectangle schema (boolean default false)
  // The Offcut constructor ensures it's always true
  // Offcut-specific fields
  addToInventory: S().default(!1),
  flex: G(vr).optional(),
  // Cost is calculated, not set
  cost: u().min(0).nullable().default(0)
}), Tr = {
  ...Bt,
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
}, qs = D(f()).default([]).describe("Parent IDs of stock(s) this shape is locked to"), Ar = G(["l", "w"]).nullable().default(null), Us = W([
  j("l"),
  j("w"),
  Xe()
]).default(null), Dr = x({
  stockId: f().optional(),
  material: f().optional(),
  thickness: u().optional(),
  grain: vt.optional()
}).describe("Which stock(s) this shape is a match for "), Hs = $(f(), _()).default({}), Ks = x({
  barcode1: f().max(50).optional(),
  barcode2: f().max(50).optional(),
  room: f().max(50).optional(),
  pallet: f().max(50).optional(),
  drawing: f().max(50).optional(),
  order: f().max(50).optional(),
  colour: f().max(50).optional(),
  productInfo: f().max(50).optional(),
  productNumber: f().max(50).optional()
}).optional();
qs.describe("IDs of stocks this shape is locked to");
const Or = Us.describe("Direction that should face up");
x({
  /**
   * Up direction - Direction that should face up during optimization
   */
  upDirection: Or
});
const Cr = x({
  // Whether shape is in a user-defined group
  inUserGroup: S().default(!1).describe("Whether shape is in a user-defined group"),
  // Whether shape is in any group
  inGroup: S().default(!1).describe("Whether shape is currently in a group"),
  // Placement order within group
  placementOrder: u().int().min(0).optional().describe("Placement order within group"),
  // Group reference (the actual Group class instance)
  reference: N("Group", {
    nullable: !0,
    description: "Group this shape belongs to"
  }).optional().behavior({ clone: "reset", compress: "reference" }),
  // Group this was added as part of (preserved during serialization as reference)
  addedAsGroup: N("Group", {
    nullable: !0,
    description: "Group this was added as part of"
  }).optional().behavior({ clone: "reset", compress: "reference" })
}).default({
  inUserGroup: !1,
  inGroup: !1,
  placementOrder: void 0,
  reference: null,
  addedAsGroup: null
}).describe("Group metadata and reference"), Oi = Nt.extend({
  // ========== Group Metadata ==========
  // Nested object containing all group-related properties
  group: Cr,
  // ========== Identity ==========
  // Unique identifier for referencing items (required for shapes)
  id: f().default("").describe("Unique identifier for referencing items"),
  // Array of IDs this shape is identical to
  identicalTo: Gs,
  // Whether this is a duplicate
  duplicate: S().default(!1).describe("Whether this is a duplicate shape"),
  // ========== Orientation ==========
  // Direction that should face up during optimization
  upDirection: Ar.describe("Direction that should face up"),
  // ========== Extras ==========
  // Extras container for banding, finish, planing, etc.
  // Override default reference behavior to preserve full data in compressed mode
  extras: N("Extras", {
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
  machining: N("Machining", {
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
  code: zi.optional(),
  // ========== Custom Display Color ==========
  color: f().nullable().optional().describe("Custom display color (hex)"),
  // ========== Status ==========
  // Status for tracking cut progress (used in order optimization workflow)
  status: G(["pending", "cut"]).optional().describe("Cut status for order optimization workflow"),
  // ========== Labels (saw label printer / barcode machine) ==========
  // Typed, format-aware fields fed through to post-processors that drive
  // label printers on the saw itself. Input-only on the V3 API surface
  // (not echoed in responses). See `saws/label-fields.ts` for the
  // field → format support map.
  labels: Ks
}), Ys = {
  // Include all Placeable computed properties
  ...Bt,
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
Oi.describe(JSON.stringify({
  name: "Shape",
  description: "Shape to be cut from stock material",
  version: "1.0.0",
  extends: "Placeable",
  computedProperties: Object.keys(Ys)
}));
const jc = x({
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
}), Lr = x({
  // Internal-only fields (not exposed in API)
  fitsAll: S().default(!1),
  fitsAny: S().default(!1),
  largestShape: _().nullable(),
  smallestShape: _().nullable(),
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
}), Er = x({
  stock: N("Stock", { nullable: !0 }).optional(),
  number: u().int().min(1).optional()
}), Ci = x({
  ...qi.shape,
  ...zs.shape,
  // Override x and y to default to 0 for Stock (containers are positioned at origin)
  x: u().nullable().default(0).describe("X coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  y: u().nullable().default(0).describe("Y coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  // Stock analysis results
  analysis: Lr.optional().behavior({ clone: "reset" }),
  // Automatically add stock as needed during optimization
  autoAdd: S().optional().describe("Automatically add stock as needed during optimization"),
  // Pattern for identifying duplicate stock sheets
  duplicatePattern: f().default("").describe("Pattern for identifying duplicate stock sheets"),
  // Root segment for guillotine cutting (excluded from compression, reset during cloning)
  rootSegment: N("Segment", {
    nullable: !0
  }).optional().behavior({ clone: "reset", compress: "exclude" }),
  // Optimization score (excluded from compression, reset during cloning)
  score: _().nullable().default(null).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stack information (reset during cloning - cloned stocks start fresh)
  stack: Er.optional().describe("Stack information").behavior({ clone: "reset" }),
  // Whether the stock layout has been tidied (excluded from compression, reset during cloning)
  tidy: S().default(!1).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stock type (sheet, linear, roll) - inherited from shared stockType
  type: G(Bs).optional().describe("Type of stock material"),
  // Original length before cropping (for rolls)
  originalLength: u().positive().optional().describe("Original length before cropping (for rolls)"),
  // Whether this stock is unusable for optimization
  unusable: S().default(!1).describe("Whether this stock is unusable for optimization"),
  // Whether this stock has been used in the optimization (reset during cloning)
  used: S().default(!1).describe("Whether this stock has been used in the optimization").behavior({ clone: "reset" }),
  // The optimization strategy that selected this stock (reset during cloning)
  winningStrategy: f().optional().describe("The optimization strategy that selected this stock").behavior({ clone: "reset" }),
  // Display and filtering properties
  color: $s.describe('Material color ({ hex: "#FF5733", name: "Red" } or legacy string)'),
  weight: u().positive().optional().describe("Weight"),
  imageUrl: f().url().optional().describe("Image URL for stock display"),
  tags: D(f()).optional().describe("Tags for categorizing stock"),
  available: S().default(!0).describe("Whether the stock is available"),
  // Database ID (MongoDB ObjectId as string)
  db_id: f().optional().describe("MongoDB ObjectId for this document"),
  // Internal product/material code
  code: zi.optional(),
  // Status for tracking cut progress (used in order optimization workflow)
  status: G(["pending", "cut"]).optional().describe("Cut status for order optimization workflow")
}), Zs = {
  // Include all Container computed properties
  ...Ui,
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
Ci.describe(JSON.stringify({
  name: "Stock",
  description: "Stock material for cutting optimization",
  version: "1.0.0",
  extends: "Container",
  computedProperties: Object.keys(Zs)
}));
var y;
(function(t) {
  t.InputRectangle = "inputRectangle", t.InputShape = "inputShape", t.InputStock = "inputStock", t.InputUserGroup = "inputUserGroup", t.InputSaw = "inputSaw", t.Rectangle = "rectangle", t.Container = "container", t.Saw = "saw", t.Shape = "shape", t.NestingShape = "nestingShape", t.Stock = "stock", t.Group = "group", t.UserGroup = "userGroup", t.StripGroup = "stripGroup", t.FirstShapeGroup = "firstShapeGroup", t.Segment = "segment", t.Offcut = "offcut", t.Cut = "cut", t.Line = "line", t.Placeable = "placeable", t.GuillotineState = "guillotineState", t.Point = "point", t.PointCollection = "pointCollection", t.Optimiser = "optimiser", t.Machining = "machining", t.Extras = "extras", t.Issue = "issue";
})(y || (y = {}));
var bs;
(function(t) {
  t.String = "string", t.Number = "number", t.Boolean = "boolean", t.Date = "date", t.Object = "object", t.Array = "array", t.Enum = "enum", t.Any = "any", t.Computed = "computed", t.Map = "map", t.Union = "union", t.Literal = "literal", t.Ref = "ref", t.Record = "record";
})(bs || (bs = {}));
var ws;
(function(t) {
  t.Full = "full", t.Compressed = "compressed";
})(ws || (ws = {}));
const Fr = /* @__PURE__ */ new Set([
  y.Container,
  y.Stock,
  y.Segment
]), Mr = /* @__PURE__ */ new Set([
  y.Rectangle,
  y.Container,
  y.Stock,
  y.Segment,
  y.Placeable,
  y.Shape,
  y.NestingShape,
  y.Group,
  y.UserGroup,
  y.StripGroup,
  y.FirstShapeGroup,
  y.Offcut
]), _r = /* @__PURE__ */ new Set([
  y.Placeable,
  y.Shape,
  y.NestingShape,
  y.Group,
  y.UserGroup,
  y.StripGroup,
  y.FirstShapeGroup,
  y.Offcut
]);
y.InputRectangle, y.InputShape, y.InputStock;
class ee {
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
      const l = r.constructor?.name === i, d = "getType" in r && typeof r.getType == "function" && r.getType() === e, p = l || d, m = s ? s(r) : !0;
      return p && m;
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
const Rr = ee.create(y.Cut, "Cut"), fe = ee.create(y.Shape, "Shape", (t) => !("shapes" in t)), Xs = ee.create(y.NestingShape, "NestingShape", (t) => !("shapes" in t) && "outline" in t), Fe = ee.create(y.Stock, "Stock"), Js = ee.create(y.Group, "Group", (t) => "shapes" in t && Array.isArray(t.shapes) && t.type !== "user" && t.type !== "strip"), zt = ee.create(y.UserGroup, "Group", (t) => "shapes" in t && t.type === "user"), Qs = ee.create(y.StripGroup, "Group", (t) => "shapes" in t && t.type === "strip"), en = ee.create(y.FirstShapeGroup, "Group", (t) => "shapes" in t && t.type === "firstShape"), Q = (t) => {
  if (!t || typeof t != "object")
    return !1;
  const e = t._type;
  return e !== void 0 ? e === y.Group || e === y.UserGroup || e === y.StripGroup || e === y.FirstShapeGroup : Js(t) || zt(t) || Qs(t) || en(t);
}, tn = ee.create(y.InputUserGroup, "InputUserGroup"), xt = ee.create(y.Segment, "Segment"), Gr = ee.create(y.Offcut, "Offcut"), $r = (t) => !t || typeof t != "object" ? !1 : Gr(t) ? !0 : t.offcut === !0, Nr = (t) => {
  if (!t || typeof t != "object")
    return !1;
  const e = t._type;
  if (e && Fr.has(e))
    return !0;
  let i = Object.getPrototypeOf(t);
  for (; i; ) {
    if (i.constructor?.name === "Container")
      return !0;
    i = Object.getPrototypeOf(i);
  }
  return !1;
}, Vc = ee.create(y.Saw, "Saw"), sn = (t) => {
  if (!t || typeof t != "object")
    return !1;
  const e = t._type;
  if (e && Mr.has(e))
    return !0;
  let i = Object.getPrototypeOf(t);
  for (; i; ) {
    if (i.constructor?.name === "Rectangle")
      return !0;
    i = Object.getPrototypeOf(i);
  }
  return t.constructor?.name === "Rectangle";
}, Br = (t) => {
  if (!t || typeof t != "object")
    return !1;
  const e = t._type;
  if (e && _r.has(e))
    return !0;
  let i = Object.getPrototypeOf(t);
  for (; i; ) {
    if (i.constructor?.name === "Placeable")
      return !0;
    i = Object.getPrototypeOf(i);
  }
  return t.constructor?.name === "Placeable";
}, ke = ee.create(y.InputShape, "InputShape"), Hi = ee.create(y.InputStock, "InputStock");
ee.create(y.InputSaw, "InputSaw");
ee.create(y.GuillotineState, "GuillotineState");
ee.create(y.Line, "Line");
ee.create(y.Point, "Point");
ee.create(y.PointCollection, "PointCollection");
function zr(t) {
  if (!t || typeof t != "object")
    return !1;
  const e = t;
  return "__ref" in e && "autoId" in e && typeof e.__ref == "string" && typeof e.autoId == "string";
}
function nn(t) {
  if (!t || typeof t != "object")
    return !1;
  const e = t;
  return "trimmed" in e && e.trimmed === !0;
}
const Ki = (t) => fe(t) || Xs(t);
function jr(t) {
  if (!t || typeof t != "object")
    return null;
  const e = t.__entityType;
  if (e && Object.values(y).includes(e))
    return e;
  if ("getType" in t && typeof t.getType == "function")
    try {
      const i = t.getType();
      if (Object.values(y).includes(i))
        return i;
    } catch {
    }
  return Rr(t) ? y.Cut : ke(t) ? y.InputShape : Hi(t) ? y.InputStock : tn(t) ? y.InputUserGroup : zt(t) ? y.UserGroup : Qs(t) ? y.StripGroup : en(t) ? y.FirstShapeGroup : Js(t) ? y.Group : Xs(t) ? y.NestingShape : fe(t) ? y.Shape : Fe(t) ? y.Stock : Nr(t) ? y.Container : xt(t) ? y.Segment : $r(t) ? y.Offcut : sn(t) ? y.Rectangle : Br(t) ? y.Placeable : null;
}
const Qe = (t) => {
  if (!t || typeof t != "object")
    return !1;
  const e = t;
  return "sides" in e && (!("type" in e) || e.type === "banding") && (!("validate" in e) || typeof e.validate == "function");
}, Ve = (t) => {
  if (!t || typeof t != "object")
    return !1;
  const e = t;
  return "faces" in e && (!("type" in e) || e.type === "finish") && (!("validate" in e) || typeof e.validate == "function");
}, We = (t) => {
  if (!t || typeof t != "object")
    return !1;
  const e = t;
  return "faces" in e && "sides" in e && (!("type" in e) || e.type === "planing") && (!("validate" in e) || typeof e.validate == "function");
}, Vr = (t) => {
  if (!t || typeof t != "object")
    return !1;
  const e = t;
  return "images" in e && (!("type" in e) || e.type === "imageUpload") && (!("validate" in e) || typeof e.validate == "function");
};
ee.create(y.Machining, "Machining", (t) => ("holes" in t || "corners" in t || "hingeHoles" in t) && "enabled" in t);
ee.create(y.Extras, "Extras", (t) => "banding" in t || "finish" in t || "planing" in t);
ee.create(y.Issue, "Issue", (t) => "type" in t && "message" in t && (t.type === "error" || t.type === "warning"));
function Wr(t) {
  return t?.__entityType === y.Shape || t?.__entityType === y.NestingShape;
}
function Wc(t) {
  return t?.__entityType === y.Group || t?.__entityType === y.StripGroup || t?.__entityType === y.FirstShapeGroup;
}
function qc(t) {
  return t?.__entityType === y.Group || t?.__entityType === y.StripGroup || t?.__entityType === y.UserGroup || t?.__entityType === y.FirstShapeGroup;
}
function Uc(t) {
  return t?.__entityType === y.UserGroup;
}
function qr(t) {
  return typeof t == "string" && (t.startsWith("fields.") || t.startsWith("extras.") || t.startsWith("woodwork.") || t.startsWith("errors."));
}
function Ur(t) {
  if (!t)
    return;
  const e = {};
  for (const [i, s] of Object.entries(t))
    if (qr(s)) {
      const n = Ae(s);
      e[i] = n;
    } else
      e[i] = s;
  return e;
}
function Hr(t, e) {
  const i = Xn(t), s = t.startsWith("errors.validation.") ? t : i, n = Ur(e);
  return {
    message: Ae(s, n),
    translationKey: s,
    params: n
  };
}
function Kr(t, e) {
  return Hr(t, e).message;
}
class v {
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
    const i = Array.isArray(e.issues) ? e.issues : null, s = Jn.parse(e), n = v.determineIdentifier(s.item, s.index || []);
    let o = s.id || "";
    !o && s.item && "autoId" in s.item && s.item.autoId && (o = s.item.autoId);
    const r = s.shouldTranslate !== !1 ? Kr(s.message, s.params) : s.message;
    if (this.message = r, this.identifier = n, this.field = s.field.map((a) => [...a]), this.index = s.index ? [...s.index] : [], this.id = o, this.type = s.type, this.category = s.category || [], this.item = s.item, this.addToItemIssues(s.item), i && i.push(this), s.throwError) {
      const a = `Issue created for ${jr(s.item)}: ${this.identifier || "N/A"} - ${this.field.map((l) => l.join(".")).join(", ")}`;
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
    return new v({
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
const ki = 10, Ss = 0;
class Jt extends Error {
  constructor(e) {
    super(e), this.name = "NumberFormatError";
  }
}
const Ft = {
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
function Yr(t, e) {
  let i;
  if (typeof t == "number" ? i = t : i = new Rt(t).valueOf(), typeof e == "number") {
    const s = Math.pow(10, e);
    return Math.round(i * s) / s;
  }
  return i;
}
function Zr(t, e) {
  const i = new Rt(t);
  if (e > 0) {
    const s = i.mul(e), n = Math.round(s.valueOf());
    return new Rt(n, e).toFraction(!0);
  }
  return i.simplify().toFraction(!0);
}
function Hc({ v: t, nf: e = "decimal", dp: i = 2, fr: s = 0, o: n = null }) {
  if (t == null || t === "")
    return (n?.numberFormat || e) === "decimal" ? 0 .toLocaleString(void 0, {
      minimumFractionDigits: n?.decimalPlaces ?? i,
      maximumFractionDigits: n?.decimalPlaces ?? i
    }) : "";
  const o = n, r = o?.numberFormat ?? e, a = o?.decimalPlaces ?? i, l = o?.fractionRoundTo ?? s;
  if (r === "fraction")
    return E({
      v: t,
      nf: "fraction",
      dp: a,
      fr: l,
      o: n
    }) ?? "";
  {
    const c = E({ v: t, nf: "decimal", dp: a, fr: l, o: n });
    return c === null ? 0 .toLocaleString(void 0, {
      minimumFractionDigits: a,
      maximumFractionDigits: a
    }) : Number(c).toLocaleString(void 0, {
      minimumFractionDigits: a,
      maximumFractionDigits: a
    });
  }
}
function Kc(t, e, i = !1) {
  const s = t == null || String(t).trim() === "";
  if (i && s)
    return { value: null, valid: !1, message: "errors.validation.field.required" };
  if (!i && s)
    return { value: null, valid: !0 };
  const n = String(t);
  try {
    const o = rn(n, !0), r = parseFloat(o ?? ""), a = o !== null && o !== "" && !isNaN(r) && isFinite(r);
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
function Xr(t = "en-US") {
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
function Jr(t) {
  if (t == null || t === "")
    return null;
  const e = String(t).trim();
  if (!e)
    return null;
  try {
    const { thousandsSeparator: i, decimalSeparator: s } = Xr(), n = e.replace(new RegExp(`\\${i}`, "g"), "").replace(new RegExp(`\\${s}`, "g"), "."), o = Number(n);
    return isFinite(o) ? o : null;
  } catch (i) {
    throw new Jt(`Failed to parse locale number: "${t}". ${i.message || "Parsing error"}`);
  }
}
function Qr(t) {
  if (!t)
    return !1;
  const e = t.toString().trim();
  if (!e)
    return !1;
  const i = Object.keys(Ft).join("");
  return new RegExp(`^-?((\\d+\\s+)?\\d+\\/\\d+|\\d+|\\d+[${i}]|[${i}]|\\d+'(?:\\s*\\d+(?:\\/\\d+)?"?)?|(\\d+\\s+)?\\d+\\/\\d+"|\\d+")$`).test(e);
}
function rn(t, e = !1) {
  if (t == null || t === "")
    return null;
  let i = String(t).trim();
  if (!i)
    return null;
  const s = Object.keys(Ft).join("");
  i = i.replace(new RegExp(`(\\d)\\s+([${s}])`, "g"), "$1$2");
  try {
    const n = Object.keys(Ft).join(""), o = new RegExp(`^(-?)(\\d+)([${n}])$`), r = new RegExp(`^(-?)([${n}])$`), a = i.match(o), l = i.match(r);
    if (a) {
      const c = a[1], d = a[2], p = a[3], m = Ft[p];
      if (m)
        return `${c}${d} ${m}`;
      throw new Error(`Unknown vulgar fraction character: ${p}`);
    } else if (l) {
      const c = l[1] || "", d = l[2], p = Ft[d];
      if (p)
        return `${c}${p}`;
      throw new Error(`Unknown vulgar fraction character: ${d}`);
    } else if (Qr(i)) {
      let c = "";
      i.startsWith("-") && (c = "-", i = i.substring(1).trim());
      const d = i.replace(/[^0-9\s/]/g, "").replace(/\s+/g, " ").trim();
      if ((d.match(/\//g) || []).length > 1)
        throw new Error("Invalid fraction format: multiple slashes.");
      return c + d;
    } else {
      e ? (i = i.replace(/[^0-9,. -]/g, ""), i = i.replace(/\s/g, "")) : (i = i.replace(/[^0-9.-]/g, ""), i = i.replace(/,/g, "")), i.startsWith(".") && (i = "0" + i), i.startsWith("-.") && (i = "-0." + i.substring(2));
      const c = i.split(".");
      c.length > 2 && (i = c[0] + "." + c.slice(1).join(""));
      const d = e ? Jr(i) : parseFloat(i);
      return d === null || isNaN(d) || !isFinite(d) ? null : d.toString();
    }
  } catch (n) {
    throw new Jt(`Failed to clean numeric input: "${t}". ${n.message || "Cleaning error"}`);
  }
}
function Yc(t, e, i = null, s = null) {
  if (t && !(!ke(t) && !Hi(t))) {
    if (!["decimal", "fraction"].includes(e)) {
      console.warn("Attempting to update to an invalid number format:", e);
      return;
    }
    for (const n of t.numberFormatKeys)
      if (typeof t[n] == "object" && t[n] !== null)
        for (const o in t[n])
          Object.prototype.hasOwnProperty.call(t[n], o) && (t[n][o] = E({ v: t[n][o], nf: e, dp: i, pl: !1, fr: s }));
      else
        t[n] = E({ v: t[n], nf: e, dp: i, pl: !1, fr: s });
  }
}
function eo(t) {
  return /^-?\d*\.?\d+$/.test(t);
}
function to(t) {
  return /^-?(\d+\s+)?\d+\/\d+$/.test(t) || /^-?\d+$/.test(t);
}
function E(t) {
  if (t.v == null || t.v === "")
    return t.nf === "decimal" || !t.nf && t.o?.numberFormat !== "fraction" ? null : "";
  const e = t.o ?? {}, i = t.nf ?? e?.numberFormat ?? "decimal", s = t.dp ?? e?.decimalPlaces ?? ki, n = t.pl ?? e?.parseLocale ?? !1, o = t.fr ?? e?.fractionRoundTo ?? Ss;
  if (i === "decimal") {
    if (typeof t.v == "number") {
      if (typeof s == "number" && s !== ki) {
        const r = Math.pow(10, s);
        return Math.round(t.v * r) / r;
      }
      return t.v;
    }
    if (typeof t.v == "string") {
      const r = t.v.trim();
      if (eo(r) && !n) {
        const a = parseFloat(r);
        if (isFinite(a)) {
          if (typeof s == "number" && s !== ki) {
            const l = Math.pow(10, s);
            return Math.round(a * l) / l;
          }
          return a;
        }
      }
    }
  } else if (i === "fraction" && typeof t.v == "string") {
    const r = t.v.trim();
    if (to(r))
      try {
        const a = new Rt(r);
        if (isFinite(a.valueOf())) {
          if (o === 0 || o === Ss)
            return a.toFraction(!0);
          const l = a.mul(o), c = Math.round(l.valueOf());
          return new Rt(c, o).toFraction(!0);
        }
      } catch {
      }
  }
  try {
    const r = rn(t.v, n);
    return r === null || r === "" ? i === "decimal" ? null : "" : i === "decimal" ? Yr(r, s) : Zr(r, o);
  } catch (r) {
    throw r instanceof Jt ? r : new Jt(`Failed to convert number format: "${t.v}" to ${i}. ${r.message}`);
  }
}
const Pt = {
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
function ne(t, e) {
  if (e?.returnKey)
    return `fields.${t}`;
  const i = `fields.${t}`, s = Ae(i);
  if (s === i) {
    const n = Pt[t] || t;
    return st() && !Pt[t] && console.warn(`[field-mappings] No translation or fallback for field: "${t}"`), n;
  }
  return st() && console.log(`[field-mappings] Translated "${t}" -> "${s}"`), s;
}
const on = (t, e, i, s, n, o) => {
  const r = Z(t, e);
  if (r == null || r === "")
    return;
  if (typeof r != "string") {
    new v({
      item: t,
      message: Ae("errors.validation.must_be_string", {
        0: Pt[e]
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
  i.includes(a) || new v({
    item: t,
    message: Ae("errors.validation.must_be_values", {
      0: Pt[e],
      1: i.join(", ")
    }),
    shouldTranslate: !1,
    field: [[e]],
    index: s !== void 0 ? [s] : null,
    type: n ? "warning" : "error",
    issues: o
  });
};
function Zc(t) {
  return t.filter((e) => e.type === "error");
}
function io(t, e) {
  return typeof t == "object" && t !== null && e in t;
}
function so(t) {
  return io(t, "issues") && Array.isArray(t.issues);
}
function Xc(t, e, i = !1) {
  if (!so(t) || !t.issues?.length)
    return !1;
  const s = i ? "warning" : "error";
  return t.issues.filter((r) => r.type === s).some((r) => r.field?.length ? r.field.some((a) => a.every((l, c) => l === ro(e[c]))) : !1);
}
const no = {
  partMaterial: "material",
  stockMaterial: "material"
};
function ro(t) {
  return no[t] ?? t;
}
const oo = ["banding", "finish", "planing", "info", "machining", "addon"], Jc = f().refine((t) => t.startsWith("side.") || t.startsWith("face."), { message: 'Location must start with "side." or "face."' }).transform((t) => t), Te = W([
  S(),
  f(),
  u(),
  // Quantity values for addon-type extras with allowQuantity = true
  $(f(), W([S(), f(), u()]))
  // Object-based values: { type: 'oak', thickness: '1mm', test: true, qty: 2 }
]), pt = x({
  min: u().optional(),
  max: u().optional()
}), ao = x({
  longSide: pt.optional(),
  shortSide: pt.optional(),
  t: pt.optional(),
  holes: pt.optional(),
  corners: pt.optional(),
  hingeHoles: pt.optional(),
  formula: f().optional(),
  message: f().optional()
}), di = De.extend({
  // ========== Identity ==========
  type: G(oo).optional().describe("Type of extra"),
  enabled: S().default(!0).describe("Whether extra is enabled"),
  // ========== Special-product metadata (machining, addon) ==========
  imageUrl: W([f().url(), j("")]).optional().describe("Image URL for custom products"),
  description: f().optional().describe("Customer-facing description for custom products"),
  allowQuantity: S().optional().describe("When true, value is a numeric quantity (addon type)"),
  // Per-product validation rules (reuses ExtrasValidationRule shape).
  // Evaluated against the active shape via validateExtraRule(); supports both
  // dimensional constraints (t, longSide, shortSide) and count constraints
  // (holes, corners, hingeHoles).
  rules: ao.optional(),
  // ========== Face/Side mappings (superset - each extra uses what it needs) ==========
  // Face values (front/back) - partial record to allow any subset of faces
  faces: x({
    a: Te.optional(),
    b: Te.optional()
  }).optional().describe("Partial mapping of face keys to extra values"),
  // Side values (edges) - partial record to allow any subset of sides
  sides: x({
    a: Te.optional(),
    b: Te.optional(),
    c: Te.optional(),
    d: Te.optional(),
    l1: Te.optional(),
    l2: Te.optional(),
    w1: Te.optional(),
    w2: Te.optional()
  }).optional().describe("Partial mapping of side keys to extra values")
  // NOTE: Options are now centralized in CalculationData.extrasOptions
  // No per-shape options are stored - all extras use centralized configuration
}), Yi = {
  // Inherit computed properties from validation base
  ...Be
  // Add any extra-specific computed properties here
};
$(G(["a", "b"]), Te);
$(G(["l1", "l2", "w1", "w2", "a", "b", "c", "d"]), Te);
const an = x({
  min: u().optional().describe("Minimum value"),
  max: u().optional().describe("Maximum value"),
  message: f().optional().describe("Custom error message")
});
x({
  scope: G(["face", "side"]),
  key: f(),
  // Face or Side key
  original: f()
  // Original ExtraLocation string
});
const lo = x({
  location: f().describe("Location identifier (e.g., face.a, side.l1)"),
  properties: $(f(), an).optional(),
  disabledMessage: f().optional().describe("Message when location is disabled")
}), co = x({
  global: $(f(), an).optional(),
  locations: D(lo).optional().describe("Location-specific constraints"),
  defaultMessage: f().optional().describe("Default message when constraints not met")
});
x({
  scope: D(G(["faces", "sides"])).describe("Scopes this extra type supports"),
  faces: D(hs()).optional().describe("Available face locations"),
  sides: D(hs()).optional().describe("Available side locations"),
  constraints: co.optional()
});
const uo = di, fo = {
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
}, po = ["radius", "bevel"], ho = De.extend({
  // Corner type
  type: G(po).nullable().optional().describe("Type of corner modification"),
  // Size of the corner modification
  size: u().nonnegative().nullable().default(0).describe("Size of the corner modification in mm"),
  // Corner index
  index: u().min(0).max(3).default(0).describe("Corner index (0=BL, 1=BR, 2=TR, 3=TL)")
}), mo = {
  // Inherit computed properties from validation base
  ...Be,
  // Check if corner has any operation
  hasOperation: {
    compute: (t) => t.type !== void 0 && t.size > 0,
    metadata: {
      cache: !0,
      dependencies: ["type", "size"],
      returnType: "boolean"
    }
  }
}, go = ["l", "w"], yo = ["top", "bottom", "left", "right", "merged"], bo = x({
  // Coordinates
  x1: u().default(0),
  x2: u().default(0),
  y1: u().default(0),
  y2: u().default(0),
  // Dimension and position
  dimension: G(go).optional(),
  position: G(yo).optional(),
  // Stock reference - required as cuts cannot exist without a stock
  stock: N("Stock"),
  // Guillotine properties
  isGuillotine: S().default(!1),
  guillotineState: x({
    order: u().nullable().optional(),
    parentSegmentID: f().nullable().optional(),
    phase: u().nullable().optional(),
    segmentCutOrder: u().nullable().optional(),
    partProduced: f().nullable().optional()
  }).nullable().default({}),
  // PTX properties
  ptxData: x({
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
  distances: x({
    bottom: u().nullable().optional(),
    left: u().nullable().optional(),
    right: u().nullable().optional(),
    top: u().nullable().optional(),
    partSize: u().nullable().optional()
  }).nullable().optional(),
  // Runtime flags
  remove: S().optional().behavior({ compress: "exclude" })
}), wo = {
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
}, So = De.extend({
  // Identity
  id: f().optional().describe("Unique identifier for the extras container"),
  // Individual extras - using ref for proper typing
  // Override default reference behavior to serialize full data for proper __entityType markers
  banding: N("Banding", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Edge banding configuration"),
  finish: N("Finish", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Surface finish configuration"),
  planing: N("Planing", {
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
}), xo = {
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
}, ko = di, Io = {
  // Inherit computed properties from Extra base (includes validation base)
  ...Yi,
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
}, vo = ["l", "w"], Po = De.extend({
  // Direction: 'l' = parallel to long side, 'w' = parallel to short side
  direction: G(vo).default("l").describe("Groove direction (l=horizontal, w=vertical)"),
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
}), To = {
  ...Be,
  // Check if the groove runs the full panel side
  isFullLength: {
    compute: (t) => t.length === void 0 || t.length === null,
    metadata: {
      cache: !0,
      dependencies: ["length"],
      returnType: "boolean"
    }
  }
}, Ao = ["l1", "l2", "w1", "w2"], Do = De.extend({
  // Position
  position: u().min(0).default(0).describe("Position along the side"),
  side: G(Ao).describe("Side where hinge is placed"),
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
}), Oo = {
  // Inherit computed properties from validation base
  ...Be,
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
}, Co = ["regular", "hinge", "shelf"], Lo = De.extend({
  // Position
  x: u().min(0).default(0).describe("X position from left edge"),
  y: u().min(0).default(0).describe("Y position from bottom edge"),
  // Dimensions
  diameter: u().min(0.1).default(5).describe("Hole diameter in mm"),
  depth: u().min(0).optional().describe("Hole depth (undefined for through hole)"),
  // Configuration
  face: u().default(0).describe("Face index (0=front, 1=back)"),
  type: G(Co).default("regular").describe("Type of hole")
}), Eo = {
  // Inherit computed properties from validation base
  ...Be,
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
function C(t, e) {
  return t._metadata = e, e.description ? t.describe(e.description) : t;
}
const Fo = (t, e) => C(t, e), Mo = ["efficiency", "guillotine", "beam", "nesting", "none"], _o = ["l", "w", "flex", "none"], ln = ["efficiency", "time"], Ro = ["l", "w"], Go = ["efficiency", "smallest"], $o = ["dimensions", "identical", "none"], No = ["sheet", "linear", "roll"], Zi = W([
  u().int().positive(),
  Xe(),
  Bn()
]).transform((t) => t ?? 100).describe("Maximum stack height for beam saw stacking"), Xi = G(Mo).nullable().optional().transform((t) => t === null ? void 0 : t), Ji = G(_o).nullable().optional().transform((t) => t === null ? void 0 : t), Qi = G(Go).default("efficiency").describe("Method for selecting stocks"), es = G($o).default("identical").describe("How to stack identical parts"), cn = x({
  strategy: G(ln).default("efficiency"),
  maxPhase: u().int().min(0).max(10).default(0),
  headCuts: S().default(!1),
  limitStripDimensions: S().default(!1),
  /** Per-phase cutDirection override for firstShapeSegment creation
   *  (experimental). Maps phase number → 'l'/'w'. Forces the placement-
   *  defining segment direction at that phase. */
  phaseDirection: $(f(), G(["l", "w"])).optional()
}).default({
  strategy: "efficiency",
  maxPhase: 0,
  headCuts: !1,
  limitStripDimensions: !1
}), ts = x({
  primaryCompression: G(Ro).default("w")
}).default({
  primaryCompression: "w"
});
x({
  stockType: fi,
  /**
   * Stack height - Maximum stack height
   */
  stackHeight: Zi,
  /**
   * Cut type - Type of cutting algorithm
   */
  cutType: Xi,
  /**
   * Cut preference - Preferred cutting direction
   */
  cutPreference: Ji,
  /**
   * Guillotine options - Configuration for guillotine cutting
   */
  guillotineOptions: cn,
  /**
   * Efficiency options - Configuration for efficiency optimization
   */
  efficiencyOptions: ts,
  /**
   * Stock selection - Method for selecting stocks
   */
  stockSelection: Qi,
  /**
   * Stacking mode - How to stack identical parts
   */
  stackingMode: es
});
const Bo = u().min(0).default(0), zo = u().min(0).default(0), un = u().min(0).default(0), jo = x({
  dimension: zo,
  minSpacing: un
});
function Li(t) {
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
function Ei(t, e) {
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
const Vo = C(Xi, {
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
}), Wo = C(Ji, {
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
}), qo = C(Qi, {
  label: "fields.stockSelection",
  group: "general",
  order: 1,
  type: "enum",
  placeholder: "options.select",
  options: [
    { value: "efficiency", label: "options.most_efficient", info: "options.most_efficient_description" },
    { value: "smallest", label: "options.smallest_first", info: "options.smallest_first_description" }
  ]
}), Uo = C(es, {
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
}), Ho = C(x({
  strategy: C(G(ln).default("efficiency"), {
    label: "fields.guillotineStrategy",
    group: "guillotine",
    order: 1,
    type: "enum",
    options: [
      { value: "efficiency", label: "options.strategy_efficiency", info: "options.strategy_efficiency_description" },
      { value: "time", label: "options.strategy_time", info: "options.strategy_time_description" }
    ]
  }),
  maxPhase: C(u().int().min(0).max(10).default(0), {
    label: "fields.maxPhase",
    group: "guillotine",
    order: 2,
    type: "number",
    info: "options.maxPhase_description"
  }),
  headCuts: C(S().default(!1), {
    label: "fields.headCuts",
    group: "guillotine",
    order: 3,
    type: "boolean",
    info: "options.headCuts_description"
  }),
  limitStripDimensions: C(S().default(!1), {
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
  phaseDirection: $(f(), G(["l", "w"])).optional()
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
}), Ko = C(ts, {
  label: "fields.efficiencyOptions",
  group: "efficiency",
  order: 1,
  type: "object"
}), bt = (t) => {
  const { min: e, allowZero: i = !1, nullable: s = !0 } = t || {};
  let n;
  return e !== void 0 ? n = i ? u().min(e) : u().min(e) : n = i ? u().min(0) : u().gt(0), s ? W([
    n,
    f(),
    Xe()
  ]).transform((o) => o == null || o === "" ? null : typeof o == "string" ? E({ v: o }) ?? null : o) : W([
    n,
    f()
  ]).transform((o) => o === "" ? 0 : typeof o == "string" ? E({ v: o }) ?? 0 : o);
}, fn = () => C(vt, {
  label: "fields.grain",
  group: "properties",
  options: [
    { value: "n", label: "fields.grain.none" },
    { value: "l", label: "fields.grain.length" },
    { value: "w", label: "fields.grain.width" },
    { value: "y", label: "fields.grain.either" }
  ]
}), Yo = () => C(Ns, {
  label: "fields.orientationLock",
  group: "properties",
  options: [
    { value: "", label: "fields.orientationLock.free" },
    { value: "l", label: "fields.orientationLock.length" },
    { value: "w", label: "fields.orientationLock.width" }
  ]
}), Kt = (t) => C(bt({ allowZero: t.allowZero, nullable: !0 }).default(null), {
  label: t.label,
  placeholder: t.placeholder || "",
  group: "dimensions",
  allowZero: t.allowZero || !1,
  output: "number"
}), Zo = () => C(Ge((t) => {
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
}), Xo = (t) => C(f().max(200).optional().transform((e) => e ? e.trim().toUpperCase() : ""), {
  label: "fields.name",
  placeholder: t?.placeholder || "",
  group: "general"
}), Jo = () => C(f().max(200).optional().transform((t) => t ? t.trim().toUpperCase() : ""), {
  label: "fields.material",
  placeholder: "fields.material",
  group: "properties"
}), Qo = () => C(bt({ allowZero: !0, nullable: !0 }).optional().transform((t) => {
  if (t != null)
    return t;
}), {
  label: "fields.cost",
  placeholder: "fields.cost",
  group: "pricing",
  step: 0.01,
  output: "number"
}), ea = () => C(u().min(0).max(100).optional().default(0), {
  label: "fields.discount",
  placeholder: "fields.discount",
  group: "pricing",
  step: 1,
  output: "number"
}), ta = () => C(zn().max(500).transform((t) => t.replace(/,/g, " ")).optional(), {
  label: "fields.notes",
  placeholder: "fields.notes",
  group: "general"
}), ia = (t) => C(S().default(!1), t), sa = (t, e) => C(G(t), e), He = {
  field: C,
  boolean: ia,
  enum: sa,
  custom: Fo
}, Qt = x({
  ...De.shape,
  // MongoDB ObjectId of the saw doc this input came from. The storefront
  // chains `Saw.findById → InputSaw → calculate request`, and the server
  // hook `resolveSawFromInputStock` reads this back to short-circuit the
  // DB lookup when the picked stock's `db_sawId` already matches what
  // the client shipped. Without the field on the schema, Zod parse
  // strips it during construction and the server always pays the
  // loader round-trip.
  db_id: C(f().optional(), {
    label: "fields.db_id",
    description: "MongoDB ObjectId for the source saw doc",
    group: "system"
  }),
  // ========== Saw identity ==========
  // Identity triple used by `findSawProfile(vendor, model)` to resolve the
  // SAW_PROFILES entry that supplies algorithm constraints + preferences.
  // All optional — legacy clients ship without them and continue to work
  // (no profile applied unless saw identity OR `sawProfileId` is supplied).
  vendor: C(f().optional(), {
    label: "fields.vendor",
    description: "Saw vendor (e.g. Biesse, Mayer, SCM)",
    group: "identity"
  }),
  model: C(f().optional(), {
    label: "fields.model",
    description: "Saw model name (e.g. OptiPlanner, Pratika)",
    group: "identity"
  }),
  softwareVersion: C(f().optional(), {
    label: "fields.softwareVersion",
    description: "Saw control software version (informational)",
    group: "identity"
  }),
  // ========== Stock Type ==========
  stockType: C(G([...No]).default("sheet"), {
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
  bladeWidth: C(bt({ allowZero: !0, nullable: !1 }).default(0), {
    label: "fields.bladeWidth",
    placeholder: "fields.bladeWidth",
    group: "blade",
    order: 1,
    output: "number",
    info: "Enter your blade width in the current unit (saw kerf)."
  }),
  // ========== Cutting Configuration ==========
  stackHeight: C(Zi, {
    label: "fields.stackHeight",
    group: "stacking",
    order: 1,
    step: 1,
    info: "If your saw supports cutting multiple stock simultaneously, set the maximum total allowed height."
  }),
  cutType: Vo,
  cutPreference: Wo,
  // ========== Guillotine Options ==========
  guillotineOptions: Ho,
  // ========== Efficiency Options ==========
  efficiencyOptions: Ko,
  // ========== General Options ==========
  options: x({
    stockSelection: qo,
    minSpacing: bt({ allowZero: !0, nullable: !1 }).default(0),
    stackingMode: Uo,
    minSpacingDimension: x({
      dimension: bt({ allowZero: !0, nullable: !0 }).optional(),
      minSpacing: bt({ allowZero: !0, nullable: !0 }).optional()
    }).optional()
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical"
  })
}), na = {
  // Include validation computed properties (isValid)
  ...Be,
  // Get valid cut types for current stock type
  validCutTypes: {
    compute: (t) => Li(t.stockType),
    metadata: {
      cache: !0,
      dependencies: ["stockType"],
      description: "Valid cut types for current stock type",
      returnType: "CutType[]"
    }
  },
  // Get valid cut preferences for current stock type and cut type
  validCutPreferences: {
    compute: (t) => Ei(t.stockType, t.cutType),
    metadata: {
      cache: !0,
      dependencies: ["stockType", "cutType"],
      description: "Valid cut preferences for current stock type and cut type",
      returnType: "CutPreference[]"
    }
  }
}, ra = x({
  // Entity type added during serialization by toData() method
  // Used for automatic class recreation during deserialization
  __entityType: f().optional().describe("Entity type added during serialization by AutoSerializable.toData()"),
  // Reference marker for reference-based recreation
  // Used when objects reference each other
  __ref: f().optional().describe("Reference marker for object recreation")
}), oa = x({
  // ========== Selection State (excluded from compression) ==========
  selected: He.boolean({
    label: "fields.selected",
    description: "Whether item is selected for multi-edit"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  multiEdit: He.boolean({
    label: "fields.multiEdit",
    description: "Whether this is the multi-edit item"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  readonly: He.boolean({
    label: "fields.readonly",
    description: "Whether input is readonly"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Validation State (excluded from compression and serialization) ==========
  isNew: He.boolean({
    label: "fields.isNew",
    description: "Whether this is a newly created item that should skip validation until first user interaction",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" })
}), aa = x({
  l1: C(Ge((t) => t ?? 0, u()).default(0), { label: "fields.l1", group: "trim", allowZero: !0, min: 0, required: !1 }),
  l2: C(Ge((t) => t ?? 0, u()).default(0), { label: "fields.l2", group: "trim", allowZero: !0, min: 0, required: !1 }),
  w1: C(Ge((t) => t ?? 0, u()).default(0), { label: "fields.w1", group: "trim", allowZero: !0, min: 0, required: !1 }),
  w2: C(Ge((t) => t ?? 0, u()).default(0), { label: "fields.w2", group: "trim", allowZero: !0, min: 0, required: !1 })
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 }), la = Ge((t) => {
  if (t == null)
    return { l1: 0, l2: 0, w1: 0, w2: 0 };
  if (typeof t == "object" && t !== null) {
    const e = t, i = (s) => {
      if (s == null)
        return 0;
      if (typeof s == "string") {
        const n = E({ v: s });
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
}, aa), ca = x({
  // ========== Identity ==========
  id: Rs,
  index: u().int().min(0).optional(),
  // ========== Dimensions ==========
  // Input dimensions can be strings (for fractions) or numbers
  l: Kt({
    label: "fields.l",
    placeholder: "fields.l"
  }),
  w: Kt({
    label: "fields.w",
    placeholder: "fields.w"
  }),
  t: Kt({
    label: "fields.t",
    placeholder: "fields.t"
  }),
  q: Zo(),
  // ========== Material Properties ==========
  // Input name with uppercase transform
  name: Xo(),
  material: Jo(),
  // ========== Cost ==========
  cost: Qo(),
  // ========== Discount ==========
  discount: ea(),
  // ========== Trim Configuration ==========
  trim: la,
  // ========== Rotation (Runtime) ==========
  rot: ji.default(0),
  // ========== Flags ==========
  preventAutoRotation: He.boolean({
    label: "fields.preventAutoRotation",
    description: "Prevent automatic rotation during optimization",
    group: "options"
  }),
  offcut: He.boolean({
    label: "fields.offcut",
    description: "Mark as offcut material",
    group: "options"
  }),
  processed: He.boolean({
    label: "fields.processed",
    description: "Has been processed",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Notes ==========
  notes: ta()
}), ei = x({
  ...ra.shape,
  // System properties from AutoSerializable
  ...De.shape,
  ...ca.shape,
  // Core business fields
  ...oa.shape,
  // Input-specific UI fields
  // Override id with strict validation for input shapes/stock (allows blank)
  id: f().regex(/^(\d+\.\d+)?$/, 'ID must be blank or in format "1.0" (e.g., "1.0", "2.1")').default("").describe('Structured identifier for input shapes/stock in format 1.0 (e.g., "1.0") or blank')
}), is = {
  // Include validation computed properties (isValid)
  ...Be,
  // Get the longer side dimension
  longSide: {
    compute: (t) => {
      const e = E({ v: t.l }) ?? 0, i = E({ v: t.w }) ?? 0;
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
      const e = E({ v: t.l }) ?? 0, i = E({ v: t.w }) ?? 0;
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
      const e = E({ v: t.l }) ?? 0, i = E({ v: t.w }) ?? 0;
      return e === i;
    },
    metadata: {
      cache: !1,
      dependencies: ["l", "w"],
      description: "Whether the rectangle is square (l === w)",
      returnType: "boolean"
    }
  }
}, Mt = ei.extend({
  // Add grain field for shapes
  //[] is grain needed for inputs?
  grain: fn(),
  // Add orientationLock with input-specific transform
  orientationLock: Yo(),
  // ========== Shared Shape Properties ==========
  upDirection: C(Us, {
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
  stockLock: C(qs, { label: "fields.stockLock" }),
  // ========== Stock Matching ==========
  stockMatch: Dr.nullable().optional(),
  // ========== Stock Reference ==========
  // Identifies which stock/material this shape was created from (for ecommerce material persistence)
  stock: x({
    db_id: f().optional(),
    code: f().optional(),
    material: f().optional(),
    thickness: u().optional()
  }).nullable().optional(),
  // ========== Custom Data ==========
  customData: C(Hs, { label: "fields.customData", description: "Custom user-defined data" }),
  // ========== Labels (saw label printer / barcode machine) ==========
  // Typed, format-aware fields consumed by post-processors that drive
  // label printers on the saw itself. Fields without a supporting format
  // for the chosen saw produce a warning, not a hard failure. See
  // `saws/label-fields.ts` for the field → format support map.
  labels: C(Ks, { label: "fields.labels", description: "Saw label-printer fields (barcode1/barcode2/room/pallet/drawing/order/colour/productInfo/productNumber)" }),
  // ========== Internal Code ==========
  code: zi.optional(),
  // ========== Material reference (CLE materials feature) ==========
  // Client-side reference to the project materials list entry this part is associated
  // with. Stripped at the calc boundary (converters.ts); `material`/`t` are resolved from
  // the linked material and kept populated for the optimiser/stock-match/post-processors.
  // NB: no `description` here — `field()` would `.describe()` and drop `_metadata`.
  materialId: C(f().optional(), {
    label: "fields.materialId",
    group: "system",
    hidden: !0
  }),
  // ========== Custom Display Color ==========
  // NOTE: avoid setting `description` here — the `field()` helper calls
  // `.describe()` when a description is present, which clones the schema
  // and drops the `_metadata` (so `type: 'color'` would never reach the
  // field generator and the input would render as plain text).
  color: C(f().nullable().optional(), {
    label: "fields.color",
    group: "properties",
    type: "color",
    w: "32px"
  }),
  // ========== UI Extension (excluded from compression) ==========
  selectedMaterial: C(_().optional(), { label: "fields.selectedMaterial", description: "Selected material object" }).behavior({ compress: "exclude" }),
  // ========== Machining ==========
  // Override default reference behavior to serialize full data
  machining: N("Machining", {
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
  extras: N("Extras", {
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
  fullStock: C(S().default(!1), {
    label: "fields.fullStock",
    description: "Purchase full stock sheet without cutting",
    group: "properties"
  }),
  // ========== Nesting ==========
  // Polygon outline for irregular nesting shapes (from DXF import)
  outline: D(x({ x: u(), y: u() })).nullable().optional()
}), ua = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...is,
  // Check if has grain direction
  hasGrain: {
    compute: (t) => t.grain === "l" || t.grain === "w",
    metadata: {
      cache: !1,
      dependencies: ["grain"],
      returnType: "boolean"
    }
  }
}, _t = x({
  ...ei.shape,
  ...zs.shape,
  // ========== Stock-specific Properties ==========
  // Override l to allow 0 for infinite length rolls
  l: Kt({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !0
  }),
  // Add grain field for stock
  grain: fn(),
  preventGrainRotation: He.boolean({
    label: "fields.preventGrainRotation",
    description: "Prevent rotation that would change grain direction",
    group: "options",
    order: 4
  }),
  // Stock-specific flags (infiniteLength is now in sharedStockPropertiesSchema from merge above)
  used: He.boolean({
    label: "fields.used",
    description: "Whether stock has been used"
  }),
  // Display and filtering properties
  color: C($s, {
    label: "fields.color",
    description: 'Material color ({ hex: "#FF5733", name: "Red" } or legacy string)',
    group: "display",
    order: 1
  }),
  weight: C(u().positive().optional(), {
    label: "fields.weight",
    description: "Weight in kg",
    group: "display",
    order: 2
  }),
  imageUrl: C(W([f().url(), j("")]).optional(), {
    label: "fields.imageUrl",
    description: "Image URL for stock display",
    group: "display",
    order: 3
  }),
  // Stock filter and categorization properties
  tags: C(D(f()).optional(), {
    label: "fields.tags",
    description: "Searchable tags for filtering",
    group: "display",
    order: 4
  }),
  available: C(S().optional(), {
    label: "fields.available",
    description: "Whether stock is available for selection (defaults to true)",
    group: "display",
    order: 5
  }),
  // Material-level flag inherited onto stock — when true, the checkout forces
  // `fullStock` on the part and locks dimensions to this stock's L/W.
  fullSizeOnly: C(S().optional(), {
    label: "fields.fullSizeOnly",
    description: "Disable cut-to-size — customer must purchase whole sheet",
    group: "options"
  }),
  // Database ID (MongoDB ObjectId as string)
  db_id: C(f().optional(), {
    label: "fields.db_id",
    description: "MongoDB ObjectId for this document",
    group: "system"
  }),
  // Material/product code from supplier catalogue
  code: C(f().optional(), {
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
  materialId: C(f().optional(), {
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
  db_sawId: C(f().optional(), {
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
  resolvedExtras: C(x({
    banding: _().optional(),
    finish: _().optional(),
    planing: _().optional(),
    machining: _().optional()
  }).optional(), {
    label: "fields.resolvedExtras",
    description: "Per-stock resolved Extra objects (storefront UI hint, not consumed by the calc engine)",
    group: "system"
  }).behavior({ compress: "exclude" }),
  // ========== Custom Data ==========
  customData: C(Hs, { label: "fields.customData", description: "Custom user-defined data" }),
  // Saw configuration (excluded from compression)
  saw: C(_().optional(), { label: "fields.saw", description: "Saw configuration data" }).behavior({ compress: "exclude" }),
  // Available extras from material (for e-commerce checkout)
  // Contains arrays of extra IDs that are available for this stock item
  extras: C(x({
    banding: D(f()).optional(),
    finish: D(f()).optional(),
    planing: D(f()).optional(),
    machining: D(f()).optional()
  }).optional(), {
    label: "fields.extras",
    description: "Available extras for this stock (inherited from material)",
    group: "display"
  })
}), fa = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...is
  // InputStock doesn't define additional computed properties
}, da = x({
  autoId: f().describe("Shape autoId"),
  x: u().default(0).describe("X position within group (0 = left edge, increases rightward)"),
  y: u().default(0).describe("Y position within group (0 = bottom edge, increases upward)")
}), ss = De.extend({
  // ========== Identification ==========
  id: f().optional().describe("Unique identifier"),
  // ========== Shape References ==========
  shapeIds: D(f()).default([]).describe("List of shape IDs in this group"),
  shapes: D(f()).default([]).transform((t) => t?.map(String) ?? []).describe("Shape identifiers"),
  // ========== Positions ==========
  positions: D(da).default([]).describe("XY positions for each shape within the group"),
  // ========== Group Properties ==========
  q: u().int().min(1).default(1).describe("Quantity of groups"),
  duplicate: S().default(!1).describe("If a duplicate"),
  // ========== Material Properties (from Group) ==========
  name: f().optional().describe("Group name"),
  material: f().optional().describe("Material type"),
  grain: vt.describe("Grain direction"),
  // ========== Stock Matching (excluded during compression) ==========
  stockMatch: x({
    stockId: f().optional(),
    material: f().optional(),
    thickness: u().optional(),
    grain: vt.optional()
  }).optional().describe("Matching stock information").behavior({ compress: "exclude" }),
  // ========== Runtime Properties ==========
  shapeList: D(_()).optional().describe("Runtime shape list for validation").behavior({ compress: "exclude" })
}), pa = {
  // Include validation computed properties (isValid)
  ...Be
  // InputUserGroup doesn't define additional computed properties
}, ha = x({
  part: u().int().min(0).describe("Index of the part in the parts array"),
  x: u().min(0).describe("X position within group (0 = left edge, increases rightward)"),
  y: u().min(0).describe("Y position within group (0 = bottom edge, increases upward)")
}), Qc = x({
  positions: D(ha).min(2).describe("Part positions within the group. Each entry specifies a part index and its x,y coordinates."),
  q: u().int().min(1).describe("Quantity of groups")
}), ma = De.extend({
  // Collections of machining operations
  holes: U("Hole").default([]).describe("Array of holes").behavior({
    serialize: "full",
    clone: "copy"
  }),
  hingeHoles: U("HingeHole").default([]).describe("Array of hinge hole sets").behavior({
    serialize: "full",
    clone: "copy"
  }),
  corners: U("Corner").default([]).describe("Array of corner operations").behavior({
    serialize: "full",
    clone: "copy"
  }),
  grooves: U("Groove").default([]).describe("Array of groove operations").behavior({
    serialize: "full",
    clone: "copy"
  }),
  // Validation
  enabled: S().default(!0).describe("Whether machining is enabled")
}), ga = {
  // Inherit computed properties from validation base
  ...Be,
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
}, dn = {
  cacheResults: !0,
  successMetric: "efficiency",
  calculateCuts: !0,
  stack: !0,
  findDuplicatePatterns: !0,
  captureProfile: !1,
  runTests: !1,
  throwErrorsOnFailedTests: !1,
  enableLogging: !1,
  sample: {
    enable: !0,
    groupSize: 4,
    efficiency: 4,
    guillotine: 6
  },
  priority: {
    enable: !0,
    variationThreshold: 0.3,
    forceStrand: !1
  },
  filtering: {
    enable: !0,
    minTotal: 400,
    similarityThreshold: 0.1
  },
  secondRun: {
    enable: !1,
    efficiencyCutoff: 0.5,
    stack: !1
  },
  efficiency: {
    tidy: !1,
    rayCasting: !0
  },
  groups: {
    shapeAreaThreshold: 0.7,
    tolerance: 0.05,
    guillotine: {
      firstShape: !0,
      strips: !0,
      position: !0,
      runWithout: !1
    },
    efficiency: {
      firstShape: !0,
      position: !0,
      limit: 100
    }
  },
  guillotine: {
    extendSegments: !0,
    allowHeadCuts: !0,
    viableShapeAreaThreshold: 0.5,
    maxSegmentGroups: 15,
    firstShapeFullSizeThreshold: 0.95,
    maxPiecesPerStrip: 0,
    // 0 = unconstrained
    allowSkippingCuts: !0,
    allowMixedRotationInStrip: !0,
    maxCutsPerPattern: 0,
    // 0 = unconstrained
    stripShapes: {
      allocation: !0,
      iterations: 8,
      numPriorityShapes: 1,
      largeJobThreshold: 64,
      largeJobIterations: 8,
      anchorClusterTolerance: 20
    },
    secondPass: !1,
    strips: {
      rearrange: !1,
      duplicateStrips: !0
    }
  },
  subset: {
    guillotine: {
      shuffles: 80
    },
    efficiency: {
      shuffles: 80,
      limit: 0.8
    }
  },
  evo: {
    enable: !0,
    stockLimit: 40
  },
  nesting: {
    rotationSteps: 12,
    spacing: 0,
    contourAnalysis: !0,
    maxShapesForFullNFP: 50
  }
}, ya = {
  "sample.groupSize": { min: 1, integer: !0 },
  "sample.efficiency": { min: 1, integer: !0 },
  "sample.guillotine": { min: 1, integer: !0 },
  "priority.variationThreshold": { min: 0, max: 1 },
  "filtering.minTotal": { min: 1, integer: !0 },
  "filtering.similarityThreshold": { min: 0, max: 1 },
  "secondRun.efficiencyCutoff": { min: 0, max: 1 },
  "groups.shapeAreaThreshold": { min: 0, max: 1 },
  "groups.tolerance": { min: 0, max: 1 },
  "groups.efficiency.limit": { min: 1, integer: !0 },
  "guillotine.viableShapeAreaThreshold": { min: 0, max: 1 },
  "guillotine.maxSegmentGroups": { min: 1, integer: !0 },
  "guillotine.firstShapeFullSizeThreshold": { min: 0, max: 1 },
  "guillotine.maxPiecesPerStrip": { min: 0, integer: !0 },
  "guillotine.maxCutsPerPattern": { min: 0, integer: !0 },
  "guillotine.stripShapes.iterations": { min: 1, integer: !0 },
  "guillotine.stripShapes.numPriorityShapes": { min: 0, integer: !0 },
  "guillotine.stripShapes.largeJobThreshold": { min: 0, integer: !0 },
  "guillotine.stripShapes.largeJobIterations": { min: 0, integer: !0 },
  "guillotine.stripShapes.anchorClusterTolerance": { min: 0 },
  "subset.efficiency.shuffles": { min: 1, integer: !0 },
  "subset.guillotine.shuffles": { min: 1, integer: !0 },
  "subset.efficiency.limit": { min: 0, max: 1 },
  "evo.stockLimit": { min: 1, integer: !0 },
  "nesting.rotationSteps": { min: 1, max: 360, integer: !0 },
  "nesting.spacing": { min: 0 },
  "nesting.maxShapesForFullNFP": { min: 1, integer: !0 }
}, ba = {
  successMetric: ["efficiency", "cuts", "stock", "time"]
}, wa = {
  // Populated by the rename-setting codemod as renames land (see docs/architecture/algorithm-settings.md).
  "secondRun.enabled": { to: "secondRun.enable" },
  "groups.efficiency.firstShapes": { to: "groups.efficiency.firstShape" },
  "groups.shapeAreaCutOff": { to: "groups.shapeAreaThreshold" },
  "guillotine.viableShapeArea": { to: "guillotine.viableShapeAreaThreshold" },
  "subset.shuffles": { to: "subset.efficiency.shuffles" },
  "evo.disable": { to: "evo.enable", transform: (t) => !t }
};
function pn(t, e) {
  const i = e.split(".");
  let s = t;
  for (const n of i) {
    if (!$e(s) || !(n in s))
      return;
    s = s[n];
  }
  return s;
}
function xs(t, e) {
  const i = e.split(".");
  let s = t;
  for (const n of i) {
    if (!$e(s) || !(n in s))
      return !1;
    s = s[n];
  }
  return !0;
}
function Sa(t, e, i) {
  const s = e.split(".");
  let n = t;
  for (let o = 0; o < s.length - 1; o++) {
    const r = s[o];
    $e(n[r]) || (n[r] = {}), n = n[r];
  }
  n[s[s.length - 1]] = i;
}
function hn(t, e) {
  const i = e.split(".");
  let s = t;
  for (let n = 0; n < i.length - 1; n++) {
    const o = i[n];
    if (!$e(s[o]))
      return;
    s = s[o];
  }
  delete s[i[i.length - 1]];
  for (let n = i.length - 2; n >= 0; n--) {
    const o = i.slice(0, n + 1).join("."), r = pn(t, o);
    $e(r) && Object.keys(r).length === 0 && hn(t, o);
  }
}
function xa(t, e = wa) {
  if (!$e(t))
    return t;
  const i = Object.keys(e);
  if (i.length === 0)
    return t;
  const s = structuredClone(t);
  for (const n of i) {
    if (!xs(s, n))
      continue;
    const { to: o, transform: r } = e[n], a = pn(s, n);
    hn(s, n), xs(s, o) || Sa(s, o, r ? r(a) : a);
  }
  return s;
}
const ka = /* @__PURE__ */ new Set(["testCollector"]);
function $e(t) {
  return t !== null && typeof t == "object" && !Array.isArray(t);
}
function eu(t, e = dn) {
  const i = [], s = xa(t);
  return $e(s) ? { sanitised: mn(s, e, "", i) ?? {}, dropped: i } : { sanitised: {}, dropped: i };
}
function mn(t, e, i, s) {
  const n = $e(e) ? e : null, o = {};
  for (const r of Object.keys(t)) {
    if (ka.has(r))
      continue;
    const a = t[r], l = i ? `${i}.${r}` : r;
    if (!n || !(r in n)) {
      s.push({ kind: "unknown_path", path: l, value: a, detail: "no longer in schema" });
      continue;
    }
    const c = n[r];
    if ($e(c)) {
      if (!$e(a)) {
        s.push({ kind: "type_mismatch", path: l, value: a, detail: `expected object, got ${typeof a}` });
        continue;
      }
      const w = mn(a, c, l, s);
      Object.keys(w).length > 0 && (o[r] = w);
      continue;
    }
    const d = typeof c, p = typeof a;
    if (p !== d) {
      s.push({ kind: "type_mismatch", path: l, value: a, detail: `expected ${d}, got ${p}` });
      continue;
    }
    const m = ya[l];
    if (m && typeof a == "number") {
      if (m.min !== void 0 && a < m.min) {
        s.push({ kind: "out_of_range", path: l, value: a, detail: `< ${m.min}` });
        continue;
      }
      if (m.max !== void 0 && a > m.max) {
        s.push({ kind: "out_of_range", path: l, value: a, detail: `> ${m.max}` });
        continue;
      }
      if (m.integer && !Number.isInteger(a)) {
        s.push({ kind: "out_of_range", path: l, value: a, detail: "expected integer" });
        continue;
      }
    }
    const h = ba[l];
    if (h && typeof a == "string" && !h.includes(a)) {
      s.push({ kind: "invalid_enum", path: l, value: a, detail: `not in [${h.join(", ")}]` });
      continue;
    }
    o[r] = a;
  }
  return o;
}
x({
  // Context - using z.any() for complex external types
  job: _().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: f().nullable().default(null).describe("Socket.io connection ID"),
  user: _().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: _().describe("Configuration object"),
  // Type: Config
  api: S().nullable().default(null).describe("API mode flag"),
  app: S().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: N("Saw").describe("Saw configuration"),
  stockList: U("Stock").default([]).describe("List of stock materials"),
  shapeList: Ht(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: U("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: U("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: U("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: Ht(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: Ht(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: fi,
  // Results storage
  cutList: U("Cut").default([]).describe("List of cuts to make"),
  segmentList: U("Segment").default([]).describe("List of segments"),
  offcuts: U("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: U("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: S().default(!1).describe("Use inventory system"),
  successMetric: f().default(dn.successMetric).describe("Metric for optimization success"),
  enableEvo: S().default(!0).describe("Enable evolutionary algorithm"),
  weighting: $(f(), _()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: _().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: _().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: x({
    placement: u().default(0),
    group: u().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  runningEvo: S().default(!1).describe("Currently running evolution"),
  evolutionVisData: D($(f(), jn())).default([]).describe("Evolution visualization data"),
  final: S().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: S().default(!1).describe("Has minimum spacing requirement")
});
const Ia = G(["decimal", "fraction"]), Ii = x({
  sku: $(f(), f()).optional(),
  name: $(f(), f()).optional()
}), ns = x({
  banding: Ii.optional(),
  finish: Ii.optional(),
  planing: Ii.optional()
}), tu = x({
  job: _().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Extend with autoId/entityType so they survive Zod validation for worker reconstruction
  inputSaw: Qt.extend({ autoId: f().optional(), __entityType: f().optional() }),
  inputShapes: D(Mt.extend({ autoId: f().optional(), __entityType: f().optional() })),
  inputStock: D(_t.extend({ autoId: f().optional(), __entityType: f().optional() })),
  inputUserGroups: D(ss.extend({ autoId: f().optional(), __entityType: f().optional() })).optional(),
  // Number format for conversion
  numberFormat: Ia.optional(),
  // Algorithm configuration
  enableEvo: S().default(!0),
  weighting: _().optional(),
  successMetric: f().optional(),
  useInventory: S().default(!1),
  // Context
  socketId: f().optional(),
  user: _().optional(),
  // IUser type
  // Application flags
  widget: S().optional(),
  api: S().optional(),
  app: S().optional(),
  domain: f().optional(),
  // Extras options (centralized configuration)
  extrasOptions: x({
    banding: x({
      options: x({
        sides: $(f(), D(f())).optional()
      }).optional()
    }).optional(),
    finish: x({
      options: x({
        faces: $(f(), D(f())).optional()
      }).optional()
    }).optional(),
    planing: x({
      options: x({
        sides: $(f(), D(f())).optional(),
        faces: $(f(), D(f())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // Extras display-value resolution for the cutlist CSV (internal-only;
  // SKU → name → tuple). Storefront-supplied; never on the public /v3 API.
  extrasResolution: ns.optional(),
  // API specific
  config: _().optional(),
  v: u().optional(),
  // API version
  webhook: f().optional(),
  //source
  sourceVersion: f().nullish(),
  source: f().optional()
});
x({
  job: _().optional(),
  // Type: Job from BullMQ
  saw: _(),
  // Runtime Saw instance
  shapeList: D(_()),
  // Runtime Shape instances
  stockList: D(_()),
  // Runtime Stock instances
  userGroups: D(_()).optional(),
  // Runtime Group instances
  enableEvo: S(),
  weighting: _().optional(),
  successMetric: f().optional(),
  useInventory: S(),
  socketId: f().optional(),
  user: _().optional(),
  widget: S().optional(),
  api: S().optional(),
  app: S().optional(),
  domain: f().optional(),
  config: _().optional(),
  v: u().optional(),
  webhook: f().optional()
});
let gn = () => {
};
function iu(t) {
  gn = t;
}
function ti(t, e, i, s, n) {
  gn(t, e, i, s, n);
}
const yn = typeof process < "u" && !!process.env && !!process.env.ALGO_TRACE, va = () => typeof performance < "u" ? performance.now() : 0, Pa = (yn ? process.env.ALGO_TRACE_DATA ?? "" : "").split(",").map((t) => t.trim()).filter(Boolean);
function Ta(t) {
  return Pa.some((e) => e === "*" || e === t || e.endsWith("*") && t.startsWith(e.slice(0, -1)));
}
function Ie(t, e, i, s) {
  if (!yn)
    return;
  let n;
  if (s && Ta(t))
    try {
      n = s();
    } catch (o) {
      n = `<data error: ${o?.message ?? o}>`;
    }
  try {
    process.stderr.write(`__GATE__ ${JSON.stringify({ g: t, t: e, c: i ?? void 0, d: n, ts: va() })}
`);
  } catch {
  }
}
let Vt = null, vi = !1, Fi;
function su(t) {
  Fi = t;
}
function Aa() {
  if (Fi)
    try {
      return Fi();
    } catch {
    }
  if (vi)
    return Vt;
  try {
    Vt = { runTests: !1, throwErrorsOnFailedTests: !1 }, vi = !0;
  } catch {
    Vt = { runTests: !1, throwErrorsOnFailedTests: !1 }, vi = !0;
  }
  return Vt;
}
const ks = Ls("tests");
Ls("timers");
let Da;
const Yt = new Proxy(function() {
  return Yt;
}, { get: () => Yt, apply: () => Yt });
function re(t, e) {
  return Yt;
}
let Pi;
function Oa() {
  return Pi === void 0 && (Pi = st()), Pi;
}
function me(t = [], e = null) {
  if (!t?.length)
    return;
  const i = Aa(), s = i?.testCollector || Da;
  if (!!(i && i.runTests && (Oa() || s)))
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
        if (a = !1, l = c instanceof Error ? c.message : String(c), e ? ks(e, l) : ks(l), s && s.addResult({
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
const Ca = di, La = {
  // Inherit computed properties from Extra base
  ...Yi,
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
}, Mi = De.extend({
  // Saw identity — survives the InputSaw → Saw conversion so the optimiser
  // can resolve a profile from the runtime saw. See findSawProfile().
  vendor: f().optional().describe("Saw vendor"),
  model: f().optional().describe("Saw model name"),
  softwareVersion: f().optional().describe("Saw control software version"),
  // Core properties from shared schema
  stockType: fi,
  stackHeight: Zi.describe("Maximum stack height"),
  cutType: Xi,
  cutPreference: Ji,
  // Blade width (numeric for runtime)
  bladeWidth: Bo.describe("Blade width"),
  // Guillotine options
  guillotineOptions: cn,
  // Efficiency options
  efficiencyOptions: ts,
  // General options (nested stockSelection and stackingMode)
  options: x({
    stockSelection: Qi,
    minSpacing: un,
    stackingMode: es,
    minSpacingDimension: jo
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical",
    minSpacingDimension: {
      dimension: 0,
      minSpacing: 0
    }
  }).describe("General saw options")
}), Ea = {
  // Include validation computed properties
  ...Be,
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
Mi.describe(JSON.stringify({
  name: "Saw",
  description: "Runtime saw configuration for optimization",
  version: "1.0.0",
  category: "configuration"
}));
const yt = 1e-10, Fa = 10, Ma = Number.MAX_SAFE_INTEGER, _a = 4294967295, xe = (t) => typeof t == "number" && Number.isFinite(t), Zt = (t) => Array.isArray(t) && t.length > 0;
function Et(t, e, i = yt) {
  if (t === e)
    return 0;
  if (Number.isInteger(t) && Number.isInteger(e))
    return t > e ? 1 : -1;
  const s = t - e;
  return Math.abs(s) < i ? 0 : s;
}
const Ra = {
  greaterThan: (t, e, i = yt) => !xe(t) || !xe(e) ? !1 : Et(t, e, i) > 0,
  greaterThanOrEqualTo: (t, e, i = yt) => !xe(t) || !xe(e) ? !1 : Et(t, e, i) >= 0,
  lessThan: (t, e, i = yt) => !xe(t) || !xe(e) ? !1 : Et(t, e, i) < 0,
  lessThanOrEqualTo: (t, e, i = yt) => !xe(t) || !xe(e) ? !1 : Et(t, e, i) <= 0,
  equalTo: (t, e, i = yt) => !xe(t) || !xe(e) ? !1 : Et(t, e, i) === 0
};
function Ga(t) {
  return xe(t) ? Number.isInteger(t) ? t : Number(t.toFixed(Fa)) : !1;
}
function $a(t) {
  if (!xe(t) || t < 0 || t > Ma)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (_a + 1) * t);
}
function Na(t, e) {
  if (!Zt(t))
    throw new Error("Invalid array parameter");
  if (!xe(e) || e < 0 || e > t.length)
    throw new Error("Invalid size parameter");
  const i = t.slice(), s = t.length - e;
  for (let n = t.length - 1; n >= s; n--) {
    const o = Math.floor(Math.random() * (n + 1));
    [i[n], i[o]] = [i[o], i[n]];
  }
  return i.slice(s);
}
class Wt {
  static calculateMean(e) {
    if (!Zt(e))
      throw new Error("Invalid input array");
    return e.reduce((i, s) => i + s, 0) / e.length;
  }
  static calculateStandardDeviation(e, i = null) {
    if (!Zt(e))
      throw new Error("Invalid input array");
    const s = i ?? this.calculateMean(e), n = e.reduce((o, r) => {
      const a = r - s;
      return o + a * a;
    }, 0) / e.length;
    return Math.sqrt(n);
  }
  static calculateCoefficientOfVariation(e) {
    if (!Zt(e))
      throw new Error("Invalid input array");
    const i = this.calculateMean(e);
    if (i === 0)
      throw new Error("Mean is zero, coefficient of variation undefined");
    return this.calculateStandardDeviation(e, i) / i;
  }
}
const L = {
  ...Ra,
  isNumber: xe,
  round: Ga,
  getRandom: $a,
  getRandomSample: Na,
  calculateStandardDeviation: Wt.calculateStandardDeviation.bind(Wt),
  calculateCoefficientOfVariation: Wt.calculateCoefficientOfVariation.bind(Wt)
};
function Is(t) {
  return t && typeof t == "object" && typeof t.toData == "function";
}
let vs = 0, Ps = Date.now();
const Ba = 1e4;
function za() {
  return vs % Ba === 0 && (Ps = Date.now()), `${Ps}-${(vs++).toString(36)}`;
}
var Ue;
(function(t) {
  t.Full = "full", t.Compressed = "compressed";
})(Ue || (Ue = {}));
class Ke {
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
    let i = Ke._partialSchemaCache.get(e);
    return i || (i = e.partial(), Ke._partialSchemaCache.set(e, i)), i;
  }
  // Private flag for compression mode (will be set as non-enumerable in constructor)
  _serializationMode;
  constructor(e) {
    this.autoId = e?.autoId || za(), Object.defineProperty(this, "_serializationMode", {
      value: Ue.Full,
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
      const i = Lt(e.schema), s = e.schema;
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
            const c = r._def.options, d = s ? `${s}.${n}` : n;
            for (const p of c) {
              if (!p)
                continue;
              const m = Di(p);
              if (m) {
                const h = d;
                i[h] || (i[h] = m);
                break;
              }
            }
            for (const p of c) {
              if (!p || !p._def)
                continue;
              const m = Lt(p);
              for (const [h, w] of Object.entries(m)) {
                const b = s ? `${s}.${n}.${h}` : `${n}.${h}`;
                i[b] || (i[b] = w);
              }
              if (p && p.shape) {
                const h = s ? `${s}.${n}` : n;
                this.extractNestedBehaviors(p.shape, i, h);
              }
            }
            r = null;
            break;
          } else
            break;
        }
        if (!r)
          continue;
        const a = Lt(r);
        for (const [l, c] of Object.entries(a)) {
          const d = s ? `${s}.${n}.${l}` : `${n}.${l}`;
          i[d] = c;
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
    const i = {}, s = this.getSerializationFields(), n = this.getFieldBehaviors(), o = e === Ue.Compressed ? "compressed" : "full";
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
        const d = n[a];
        o === "compressed" && d?.compress === "exclude" || d?.serialize === "exclude" || (i[a] = this.serializeValue(c, d, o, a, n));
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
    return this.toData(Ue.Compressed);
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
      r ? a = e : a = Ke.getCachedPartialSchema(s).parse(e);
      for (const l in a) {
        if (!Object.prototype.hasOwnProperty.call(e, l))
          continue;
        const c = a[l];
        if (c !== void 0) {
          const d = Object.getOwnPropertyDescriptor(this, l) || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this), l);
          if (d && d.get && !d.set)
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
        if (s instanceof Es) {
          const n = s.issues.map((o) => new v({
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
      const h = s.pop() || "0", w = parseInt(h, 10);
      isNaN(w) && s.push(h), n = String(e);
    } else {
      const h = s.pop() || "0", w = parseInt(h, 10);
      isNaN(w) ? (s.push(h), n = "1") : n = String(w + 1);
    }
    s.push(n);
    const o = s.join("."), a = `${this.autoId.includes(".") ? this.autoId.substring(0, this.autoId.indexOf(".")) : this.autoId}.${n}`, l = this.constructor, c = this.getDirectPropertyCopy(i), d = l.schema;
    let p = {};
    d && (p = Lt(d));
    const m = l.defaults || (d ? d.parse({}) : {}) || {};
    for (const [h, w] of Object.entries(p))
      w.clone === "reset" && (h in m ? c[h] = m[h] : delete c[h]);
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
    if (o && (r = Lt(o)[i] || null), r?.clone)
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
        if (Is(r)) {
          if (i?.serialize === "reference" || s === "compressed" && i?.compress === "reference") {
            const c = "autoId" in r && r.autoId, d = typeof r.getType == "function";
            if (c) {
              const p = d ? r.getType() : r.constructor.name;
              return {
                __ref: !0,
                id: r?.id,
                autoId: r.autoId,
                __entityType: p
              };
            }
          }
          const l = s === "compressed" ? Ue.Compressed : Ue.Full;
          return r.toData(l);
        }
        return r;
      });
    if (Is(e)) {
      if (i?.serialize === "reference" || s === "compressed" && i?.compress === "reference") {
        const l = "autoId" in e && e.autoId, c = typeof e.getType == "function";
        if (l) {
          const d = c ? e.getType() : e.constructor.name;
          return {
            __ref: !0,
            id: e?.id,
            autoId: e.autoId,
            __entityType: d
          };
        }
      }
      const a = s === "compressed" ? Ue.Compressed : Ue.Full;
      return e.toData(a);
    }
    if (e && typeof e == "object" && e.constructor === Object) {
      const r = {}, a = o || this.getFieldBehaviors();
      for (const l in e)
        if (Object.prototype.hasOwnProperty.call(e, l)) {
          const c = n ? `${n}.${l}` : l, d = a[c];
          if (s === "compressed" && d?.compress === "exclude" || d?.serialize === "exclude")
            continue;
          r[l] = this.serializeValue(e[l], d, s, c, a);
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
    const n = $t().get(i);
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
class K extends Ke {
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
    K.recreateFunc = e;
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
        const l = Ke.getCachedPartialSchema(i).safeParse(e);
        l.success ? r = l.data : r = this.filterInvalidFields(e, l.error, i);
      }
    }
    if (i && r) {
      let a = K._schemaKeysCache.get(i);
      if (!a) {
        const l = i.shape || i._def?.shape;
        l && (a = Object.keys(l), K._schemaKeysCache.set(i, a));
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
    const a = Ke.getCachedPartialSchema(s).safeParse(o);
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
    let s = K._zRefFieldsCache.get(i);
    if (s === void 0) {
      s = null;
      const o = i.shape;
      for (const [r, a] of Object.entries(o)) {
        const l = this.extractClassNameFromSchema(a);
        l && (s || (s = /* @__PURE__ */ new Map()), s.set(r, l));
      }
      K._zRefFieldsCache.set(i, s);
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
      const s = e.__entityType || i, o = $t().get(s);
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
    return e && typeof e == "object" ? (s && (e.id || e.autoId), K.recreateFunc ? K.recreateFunc(e, s, i) : { ...e, __ref: i }) : e;
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
    if (K._computedPropsInitialized.has(e))
      return;
    const i = e.computedProperties;
    if (!i) {
      K._computedPropsInitialized.add(e);
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
    K._computedPropsInitialized.add(e);
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
      const r = Ke.getCachedPartialSchema(i).safeParse(e);
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
      if (i instanceof Es)
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
      return e.map((s) => K.cleanEntityForAPI(s));
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
      if (r instanceof Vn) {
        const a = r.options.some((c) => c instanceof Wn), l = r.options.some((c) => c instanceof qn);
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
    if (e instanceof Un || e instanceof Hn)
      return this.unwrapSchema(e._def?.innerType);
    if (e instanceof Kn)
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
class wt extends K {
  // Required: Define schema and computed properties for SchemaClass
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
    return y.Line;
  }
  /**
  * Validate line
  */
  validate() {
    const e = [];
    return (!L.isNumber(this.x1) || !L.isNumber(this.x2) || !L.isNumber(this.y1) || !L.isNumber(this.y2)) && e.push(new v({
      message: "Line coordinates must be valid numbers",
      type: "error"
    })), this.x1 === this.x2 && this.y1 === this.y2 && e.push(new v({
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
      if (this.dimension === "l" ? (a = L.greaterThan(this.x2, r.x) && L.lessThan(this.x1, r.x + r.l), l = L.greaterThan(this.y1 + n, r.y) && L.lessThan(this.y1 - n, r.y + r.w)) : this.dimension === "w" && (a = L.greaterThan(this.x1 + n, r.x) && L.lessThan(this.x1 - n, r.x + r.l), l = L.greaterThan(this.y2, r.y) && L.lessThan(this.y1, r.y + r.w)), a && l)
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
    return new wt({ x1: e, y1: i, x2: s, y2: n, origin: o, type: r });
  }
  get lineDimension() {
    return !L.isNumber(this.x1) || !L.isNumber(this.x2) || !L.isNumber(this.y1) || !L.isNumber(this.y2) ? null : this.x1 === this.x2 && this.y1 !== this.y2 ? "w" : this.y1 === this.y2 && this.x1 !== this.x2 ? "l" : null;
  }
  get lineDirection() {
    return !L.isNumber(this.x1) || !L.isNumber(this.x2) || !L.isNumber(this.y1) || !L.isNumber(this.y2) ? null : this.x1 < this.x2 ? "lr" : this.x1 > this.x2 ? "rl" : this.y1 < this.y2 ? "bt" : this.y1 > this.y2 ? "tb" : null;
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
const ja = {
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
}, Va = {
  topLeft: {
    top: ["topRight"],
    default: ["topRight"]
  },
  bottomRight: {
    right: ["topRight"],
    default: ["topRight"]
  }
}, Wa = {
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
function qa(t, e) {
  const i = /* @__PURE__ */ new Set();
  if (t.raycast) {
    const n = ja[t.direction];
    return n && n[t.corner] && n[t.corner][t.grid] && i.add(n[t.corner][t.grid]), i;
  }
  if (e?.cutType !== "efficiency") {
    const n = Va[t.corner];
    return n && (t.grid ? n[t.grid] && n[t.grid].forEach((o) => i.add(o)) : n.default?.forEach((o) => i.add(o))), i;
  }
  const s = Wa[t.corner];
  return s && (t.grid ? s[t.grid] && s[t.grid].forEach((n) => i.add(n)) : s.default?.forEach((n) => i.add(n))), i;
}
class Ee extends K {
  // Required: Define schema and computed properties for SchemaClass
  static schema = nr;
  static computedProperties = rr;
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
    return y.Point;
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
    return new Ee(e, i, s);
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
    return this.a !== void 0 && (s.a = this.a), this.b !== void 0 && (s.b = this.b), this.stock && (s.stock = this.stock), this.direction && (s.direction = this.direction), this.type && (s.type = this.type), this.corner && (s.corner = this.corner), this.shapePosition && (s.shapePosition = this.shapePosition), this.grid && (s.grid = this.grid), this.raycast && (s.raycast = this.raycast), this.collision && (s.collision = this.collision), this.tooClose && (s.tooClose = this.tooClose), this.adjustedForMinSpacing && (s.adjustedForMinSpacing = this.adjustedForMinSpacing), new Ee(s);
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
    return qa(this, e);
  }
}
function de(t) {
  return !(t === void 0 || t === null || t === "" || typeof t == "object" && !Object.values(t).length);
}
function Ye(t) {
  return t ? t === "l" ? "w" : "l" : null;
}
function nu(t) {
  return t ? t === "x" ? "y" : "x" : null;
}
function ru(t) {
  return t === "l" ? "x" : t === "w" ? "y" : null;
}
function ou(t) {
  return t === "x" ? "l" : t === "y" ? "w" : null;
}
function Ua(t, e, i) {
  if (!e || !t?.length || t.length <= 1)
    return null;
  const s = t.map((l) => l[e]).filter((l) => typeof l == "number");
  if (!s.length || s.length <= 1)
    return null;
  const n = s.reduce((l, c) => l + c, 0) / s.length, o = i * 0.2, r = Math.max(n, o);
  return Math.min(...s) > r ? null : r;
}
function au(t, e) {
  return Rn(t, e);
}
function lu(t, e) {
  return Z(t, e);
}
function cu(t, e, i) {
  Gn(t, e, i);
}
function uu(t, e = !1) {
  if (!de(t) || typeof t != "object")
    return !1;
  const i = Object.values(t);
  return i.length === 0 ? !1 : e ? i.some((s) => de(s) && s) : i.some((s) => de(s));
}
function fu(t) {
  if (!t?.length)
    return [];
  const e = t.filter((s) => !s.added), i = {};
  return e.forEach((s) => {
    const n = Ha(s.stock) || 1;
    i[s.parentId] ? i[s.parentId].count += n : (i[s.parentId] = {}, i[s.parentId].count = n, i[s.parentId].id = s.parentId, i[s.parentId].autoId = s.autoId || "", i[s.parentId].name = s?.name ? s.name : s.id, i[s.parentId].l = s.l, i[s.parentId].w = s.w, i[s.parentId].t = s.t, i[s.parentId].material = s.material, i[s.parentId].rot = s.rot, i[s.parentId].orientationLock = s.orientationLock);
  }), Object.values(i);
}
function Ha(t, e = []) {
  if (!t)
    return 1;
  if (t?.stack?.number)
    return t.stack.number;
  if (t?.stack?.stock) {
    const i = typeof t.stack.stock == "string" ? t.stack.stock : t.stack.stock?.id;
    if (i && e.length > 0)
      return e.find((n) => n.id === i)?.stack?.number || 1;
  }
  return typeof t?.stack == "string" && e.find((s) => s.id === t.stack)?.stack?.number || 1;
}
function du() {
  const t = document.documentElement;
  return "requestFullscreen" in t || "webkitRequestFullscreen" in t || "mozRequestFullScreen" in t || "msRequestFullscreen" in t;
}
function pu(t, e) {
  if (t == null)
    return "-";
  let i = Math.round(t).toString();
  for (; i.length < e; )
    i = "0" + i;
  return i;
}
function nt(t, e = !1) {
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
  const i = typeof t.l == "string" ? E({ v: t.l }) : t.l, s = typeof t.w == "string" ? E({ v: t.w }) : t.w;
  if (!e || !("trim" in t))
    return { l: i, w: s };
  if (nn(t))
    return { l: i, w: s };
  if (sn(t) && !t.hasTrim)
    return { l: i, w: s };
  const n = t.trim, o = E({ v: n.w1 ?? 0 }) + E({ v: n.w2 ?? 0 }), r = E({ v: n.l1 ?? 0 }) + E({ v: n.l2 ?? 0 });
  return {
    l: i - (typeof o == "string" ? E({ v: o }) : o),
    w: s - (typeof r == "string" ? E({ v: r }) : r)
  };
}
function Ka(t, e) {
  if ("trim" in t && !nn(t)) {
    const i = t.trim;
    e.l = e.l - (E({ v: i.w1 ?? 0 }) + E({ v: i.w2 ?? 0 })), e.w = e.w - (E({ v: i.l1 ?? 0 }) + E({ v: i.l2 ?? 0 }));
  }
  return e;
}
function ht(t, e, i = !1) {
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
  (Hi(t) || ke(t) || zt(t)) && (s = {
    l: E({ v: t.l }),
    w: E({ v: t.w })
  });
  const n = ("rot" in t ? t.rot : 0) ?? 0;
  return i && (s = Ka(t, s)), n === e || ([s.l, s.w] = [s.w, s.l]), s;
}
function bn(t) {
  if (!("l" in t) || !("w" in t))
    throw new Error("rotatable item must have l & w properties");
}
function Ya(t) {
  Q(t) || (bn(t), [t.l, t.w] = [t.w, t.l]);
}
function Ts(t, e) {
  return L.lessThanOrEqualTo(t, e);
}
function mt(t, e) {
  return Ts(t.l, e.l) && Ts(t.w, e.w);
}
function Za(t) {
  const e = "allowExactFitShapes" in t && t.allowExactFitShapes === !0, i = nt(t, !0), s = e ? nt(t, !1) : i;
  return { withTrim: i, withoutTrim: s, allowExactFit: e };
}
function jt(t, e, i = null, s) {
  if (!e || !t)
    throw new Error("Container and shape are required");
  const n = s ? s.allowExactFit : "allowExactFitShapes" in e && e.allowExactFitShapes === !0, o = s ? s.withTrim : nt(e, !0), r = s ? s.withoutTrim : n ? nt(e, !1) : o, a = nt(t, !0);
  let l = o;
  if (n && (L.equalTo(a.l, r.l) && L.equalTo(a.w, r.w) || L.equalTo(a.l, r.w) && L.equalTo(a.w, r.l)) && (l = r), a.l * a.w > l.l * l.w)
    return !1;
  const c = ii(t, e);
  if (t.orientationLock || i !== null) {
    const m = i ?? (c === "w" ? 1 : 0), h = ht(t, m, !0);
    if (n) {
      const w = ht(t, m, !1);
      if (L.equalTo(w.l, r.l) && L.equalTo(w.w, r.w))
        return mt(w, l);
    }
    return mt(h, l);
  }
  const d = ht(t, 0, !0);
  if (n) {
    const m = ht(t, 0, !1);
    if (L.equalTo(m.l, r.l) && L.equalTo(m.w, r.w) && mt(m, l))
      return !0;
  }
  if (mt(d, l))
    return !0;
  const p = ht(t, 1, !0);
  if (n) {
    const m = ht(t, 1, !1);
    if (L.equalTo(m.l, r.l) && L.equalTo(m.w, r.w) && mt(m, l))
      return !0;
  }
  return mt(p, l);
}
function Xa(t) {
  if ("orientationLock" in t)
    return t.orientationLock;
  let e = null;
  return (Q(t) || zt(t) || fe(t) || ke(t)) && (e = t.orientationLock), e;
}
function ii(t, e) {
  const i = Xa(t);
  if (!de(i))
    return null;
  if (!e || "direction" in t)
    return i;
  if (!Q(t) && pi(t))
    return null;
  if ("getStock" in e) {
    const s = e.getStock;
    if (s && de(s.grain))
      return i === s.grain ? "l" : "w";
  }
  return i;
}
function wn(t, e) {
  if (Q(t))
    return jt(t, e, t.rot) ? [t.rot] : [];
  const i = [];
  for (let s = 0; s <= 1; s++)
    ve(t, s, e) && i.push(s);
  return i;
}
function ve(t, e = null, i = null) {
  if (!de(e))
    throw new Error("no rotation provided to canRotate");
  if (e === !0 && (e = 1), e === !1 && (e = 0), t.preventAutoRotation && e !== 0 || !Q(t) && pi(t) && e !== 0 || i && !jt(t, i, e))
    return !1;
  const s = ii(t, i);
  return !(s === "l" && e === 1 || s === "w" && e === 0);
}
function Ja(t, e = null, i = null) {
  const s = "rot" in t ? t.rot : 0;
  return e === null && (e = s === 0 ? 1 : 0), !Q(t) && pi(t) ? !0 : ve(t, e, i) ? (s === e || Ya(t), !0) : !1;
}
function le(t, e = null, i = null) {
  return e ? e = 1 : e = 0, i && e && !jt(t, i, e) ? !1 : Ja(t, e, i);
}
function hu(t, e) {
  if (Q(t))
    return t.rot;
  if (!de(t.orientationLock) || pi(t))
    return null;
  const i = e.getStock;
  return !t.orientationLock || !de(i?.grain) ? null : t.orientationLock === i?.grain ? 0 : 1;
}
function As(t, e, i, s, n = null) {
  if (!s)
    throw new Error("requiredSide not supplied to canRotateToDimensionRange");
  const o = nt(t);
  if (o.l >= e && o.l <= i || o.w >= e && o.w <= i) {
    if (t.l === t.w)
      return !0;
    const r = Math.max(o.l, o.w), a = Math.min(o.l, o.w);
    if (n) {
      if (s === "l") {
        if (r >= e && r <= i && ve(t, 0, n) || a >= e && a <= i && ve(t, 1, n))
          return !0;
      } else if (s === "w" && (a >= e && a <= i && ve(t, 0, n) || r >= e && r <= i && ve(t, 1, n)))
        return !0;
    } else if (t.orientationLock) {
      if (t.orientationLock === "l")
        return s === "l" && r >= e && r <= i;
      if (t.orientationLock === "w")
        return s === "l" && a >= e && a <= i;
    }
  }
  return !1;
}
function Qa(t, e, i, s) {
  if (!i)
    throw new Error("requiredSide not supplied to rotateToDimension");
  if (t.l !== e && t.w !== e)
    return !1;
  if (t.l === t.w)
    return !0;
  const n = nt(t), o = Math.max(n.l, n.w), r = Math.min(n.l, n.w);
  if (i === "l") {
    if (o === e && ve(t, 0, s))
      return le(t, 0);
    if (r === e && ve(t, 1, s))
      return le(t, 1);
  } else if (i === "w") {
    if (r === e && ve(t, 0, s))
      return le(t, 0);
    if (o === e && ve(t, 1, s))
      return le(t, 1);
  }
  return !1;
}
function pi(t) {
  bn(t);
  const e = nt(t);
  return L.equalTo(e.l, e.w);
}
class hi extends K {
  // Zod schema for validation and serialization
  static schema = Vi;
  static computedProperties = Wi;
  constructor(e = {}) {
    super(e);
    let i = !1;
    Fe(this) && (i = this.infiniteLength), !e?.preventAutoRotation && !i && (this.orientationLock ? (this.orientationLock === "l" && le(this, 0), this.orientationLock === "w" && le(this, 1)) : this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !e?.preventGrainRotation && (this.grain = Ye(this.grain)))), this.calculateDimensions(), e.skipValidation || e.skipBusinessValidation || e.validationMode === "none" || e.validationMode === "schema" || this.validate();
  }
  /**
   * Calculate derived dimensions (area, longSide, shortSide, parentId)
   * Called automatically in constructor and after dimension changes
   */
  calculateDimensions() {
    this.area = this.l * this.w, this.longSide = Math.max(this.l, this.w), this.shortSide = Math.min(this.l, this.w), this.parentId = pr(this.id);
  }
  /**
   * Get entity type
   */
  getType() {
    return y.Rectangle;
  }
  /**
   * Validate business rules for the rectangle
   * This is separate from schema validation which happens in the constructor
   * Override this method in subclasses for domain-specific validation
   */
  validate() {
    if (this.issues = [], this.warnings = [], (this.l <= 0 || this.w <= 0) && this.issues.push(new v({
      message: "Rectangle dimensions must be positive",
      type: "error",
      field: [["l"], ["w"]],
      item: this
    })), this.hasTrim) {
      const e = {
        x: (this.trim.w1 || 0) + (this.trim.w2 || 0),
        y: (this.trim.l1 || 0) + (this.trim.l2 || 0)
      };
      e.x >= this.l && this.warnings.push(new v({
        message: "Trim values exceed length",
        type: "warning",
        field: [["trim"]],
        item: this
      })), e.y >= this.w && this.warnings.push(new v({
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
      this.q = 0, this.issues.push(new v({
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
        return new wt({
          x1: i,
          x2: i + this.l,
          y1: s,
          y2: s,
          type: "bottom",
          validationMode: "none"
          // parentId: this.id
        });
      case "right":
        return new wt({
          x1: i + this.l,
          x2: i + this.l,
          y1: s,
          y2: s + this.w,
          type: "right",
          validationMode: "none"
          // parentId: this.id
        });
      case "top":
        return new wt({
          x1: i,
          x2: i + this.l,
          y1: s + this.w,
          y2: s + this.w,
          type: "top",
          validationMode: "none"
          // parentId: this.id
        });
      case "left":
        return new wt({
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
      bottomLeft: new Ee(this.x, this.y),
      topLeft: new Ee(this.x, this.y + this.w),
      topRight: new Ee(this.x + this.l, this.y + this.w),
      bottomRight: new Ee(this.x + this.l, this.y)
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
    const s = new hi({
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
class rs extends hi {
  // Zod schema for validation and serialization
  static schema = qi;
  static computedProperties = Ui;
  constructor(e = {}) {
    super(e), e.skipValidation || this.validateContainer(e);
  }
  // applyComputedProperties removed - handled by SchemaClass base
  // Container.computedProperties includes Rectangle.computedProperties via spread
  /**
  * Get entity type
  */
  getType() {
    return y.Container;
  }
  /**
  * Validate container-specific properties
  */
  validateContainer(e) {
    const i = ["sheet", "linear", "roll", null, void 0, ""], s = this?.stockType;
    if (!i.includes(s)) {
      const n = new v({
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
    const i = Ke.getCachedPartialSchema(rs.schema).parse(e);
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
    return Fe(this) ? this : xt(this) ? this.stock : Q(this) ? this.stock : null;
  }
}
class qe extends K {
  // Required: Define schema and computed properties
  static schema = js;
  static computedProperties = br;
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
    return y.GuillotineState;
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
class os extends K {
  // Required: Define schema and computed properties for SchemaClass
  static schema = bo;
  static computedProperties = wo;
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
    return y.Cut;
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
    return new os({ x1: e, y1: i, x2: s, y2: n, position: r, stock: o });
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
class as extends hi {
  // Zod schema for validation and serialization
  static schema = Nt;
  static computedProperties = Bt;
  constructor(e = {}) {
    if (super(e), !this.guillotineState)
      this.guillotineState = new qe();
    else if (!(this.guillotineState instanceof qe)) {
      const i = typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new qe(i);
    }
    (!this.firstShape || typeof this.firstShape != "object") && (this.firstShape = { sampleRotations: [], isFirstShape: !1 }), (!this.priority || typeof this.priority != "object") && (this.priority = {}), fe(this) && (!this.group || typeof this.group != "object") && (this.group = {
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
    if (!this.guillotineState || !(this.guillotineState instanceof qe)) {
      const e = this.guillotineState && typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new qe(e);
    }
  }
  /**
   * Override update to ensure guillotineState is properly handled
   */
  update(e) {
    const i = this.guillotineState instanceof qe ? this.guillotineState : null;
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
    return y.Placeable;
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
    if (this.added = !1, this.stock = null, this.placementOrder = void 0, this.x = 0, this.y = 0, e || (this.score = null, this.bestScore = null), this.firstShape.isFirstShape = !1, n || (this.firstShape.sampleRotations = []), this.patternMatch = !1, this.fitsStock = null, this.guillotineState instanceof qe)
      if (i) {
        const o = this.guillotineState.stripShapeBatches;
        this.guillotineState.reset(), o && (this.guillotineState.stripShapeBatches = o);
      } else
        this.guillotineState.reset();
    else
      this.guillotineState = new qe();
    fe(this) && (s || "group" in this && this.group && (delete this.group.placementOrder, this.group.inGroup = !1, this.group.inUserGroup = !1, this.group.reference = null, this.group.addedAsGroup = null)), Q(this) && "shapes" in this && Array.isArray(this.shapes) && this.shapes.forEach((o) => {
      "reset" in o && typeof o.reset == "function" && o.reset(e, i, s);
    });
  }
  /**
   * Add shape to stock (placeholder for optimization logic)
   */
  addToStock(e) {
    this.stock = e, this.added = !0, e.used = !0, this.grain = e.grain, !Q(this) && e?.grain && this.rot && (this.grain = Ye(e.grain));
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.added = !1, fe(this) && (this.group.addedAsGroup = null, this.firstShape.isFirstShape = !1), Q(this) && this.shapes.forEach((e) => {
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
    return !i || zr(i) || !i.stripShapeBatches?.groups || !(e in i.stripShapeBatches.groups) ? !1 : i.stripShapeBatches.groups[e];
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
      group: fe(e) ? e.group.reference : null,
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
    le(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
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
    return Fe(e) && typeof this.fitsStock?.[e.parentId] < "u" ? this.fitsStock?.[e.parentId]?.[i ?? "any"] === !0 : jt(this, e, i, s);
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
    const s = new Ee(this.x + this.l, this.y);
    s.corner = "bottomRight";
    const n = new Ee(this.x, this.y + this.w);
    if (n.corner = "topLeft", e?.cutType !== "efficiency" && !i)
      return [n, s];
    const o = new Ee(this.x, this.y);
    o.corner = "bottomLeft";
    const r = new Ee(this.x + this.l, this.y + this.w);
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
    if (this.getType() === y.Shape && this.identicalTo?.length && (this.parentId === e.parentId || this.identicalTo.includes(e.parentId)))
      return !0;
    if (this.getType() !== y.Group) {
      if (e.parentId === this.parentId)
        return !0;
      if (this.getType() === y.Shape && i && this.parentId !== e.parentId)
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
    return e === null && (e = Fe(this.stock) ? this.stock.bladeWidth / 2 : 0), [
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
    return this.getPerimeterCutVectors().forEach((n) => i.push(new os({
      stock: Fe(this.stock) ? this.stock : e,
      x1: n.x1,
      x2: n.x2,
      y1: n.y1,
      y2: n.y2,
      position: n.type
    }))), i = i.filter((n) => n.isInsideStock), i;
  }
}
function el(t) {
  return t === "horizontal" ? "x" : t === "vertical" ? "y" : null;
}
function Ds(t) {
  return t === "horizontal" ? "l" : t === "vertical" ? "w" : null;
}
class mi extends as {
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
  static schema = Oi;
  static computedProperties = Ys;
  static defaults = Oi.parse({});
  constructor(e = {}) {
    super(e);
  }
  /**
  * Get entity type
  */
  getType() {
    return y.Shape;
  }
  /**
  * Create shape with live objects
  */
  static create(e) {
    const i = new mi(e.data);
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
    le(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
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
class gi extends as {
  // Required: Define schema and computed properties for SchemaClass
  static schema = kr;
  static computedProperties = Ir;
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
    return this.type === "user" ? y.UserGroup : this.type === "strip" ? y.StripGroup : this.type === "firstShape" ? y.FirstShapeGroup : y.Group;
  }
  /**
  * Initialize shapes array with optional context for reference resolution
  */
  initShapes(e, i) {
    return e.map((s) => {
      if (!fe(s) && !Wr(s))
        throw console.log(s), new Error("[GROUP] attempted to init a group with an item other than a shape");
      if (fe(s))
        return s.group.reference = this, s.group.inGroup = !0, s;
      if (i && i.shapeList && s) {
        const o = i.shapeList.find((r) => r.autoId === s.autoId);
        if (o)
          return o.group.reference = this, o.group.inGroup = !0, o;
      }
      const n = i ? { ...s, __context: i } : s;
      return new mi(n);
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
    const i = { ...e.data, shapes: e.shapes }, s = new gi(i);
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
          s && (le(s, i.rot, this.container) || console.error(`  ❌ FAILED to restore rotation for ${s.id} from ${s.rot} to ${i.rot}`));
        }
      if (this.positions && this.positions.length > 0)
        for (const i of this.positions) {
          const s = this.shapes.find((n) => n.autoId === i.autoId);
          s && s.rot !== i.rot && (console.warn(`[placeMyShapes] Shape ${s.id} has wrong rotation ${s.rot}, expected ${i.rot} - forcing rotation now`), le(s, i.rot, this.container) || console.error(`[placeMyShapes] ❌ CRITICAL: Cannot fix rotation for ${s.id}`));
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
        if (s.x = this.x + n.x, s.y = this.y + n.y, !le(s, n.rot, this.container))
          throw new Error("placeMyShapes - unable to set rotation for shape in group");
        i === 0 && this.x === 0 && this.y === 0 && (s.firstShape.isFirstShape = !0), s.group.addedAsGroup = this, me([
          () => re(this.type === "position" ? s.group.inGroup : !s.group.inGroup).toBe(!0)
        ], `placeMyShapes: Shape ${s.id} inGroup flag should match group type (${this.type})`), me([
          () => re(s.group.addedAsGroup).toBe(this),
          () => re(typeof s.group.addedAsGroup).not.toBe("string")
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
        const d = this.shapes.find((p) => p.autoId === l);
        d && d.rot !== c && le(d, c, this.container);
      }
    }
    this.positions = [], this.type !== "user" && this.sortShapes();
    let i = 0;
    const s = el(this.direction), n = Ds(this.direction);
    let o = 0;
    for (const l of this.shapes) {
      if (!l)
        continue;
      const c = o === this.shapes.length - 1 ? 0 : l.getMinSpacing(this.container.saw), d = e.get(l.autoId) ?? l.rot.valueOf();
      let p;
      d !== l.rot ? p = n === "l" ? l.w : l.l : p = l[n];
      const m = {
        autoId: l.autoId,
        x: 0,
        y: 0,
        rot: d
      };
      s === "x" ? m.x = i : m.y = i, this.positions.push(m), l.group.inGroup = !0, i += o === this.shapes.length - 1 ? p : p + c, o++;
    }
    this.groupLength = i;
    const r = Ye(n), a = this.shapes.reduce((l, c) => {
      const d = e.get(c.autoId);
      let p;
      return d !== void 0 && d !== c.rot ? p = r === "l" ? c.w : c.l : p = c[r], p > l ? p : l;
    }, 0);
    if (this.groupWidth = a, st()) {
      const l = this.shapes.slice(0, -1).reduce((p, m) => p + m.getMinSpacing(this.container.saw), 0), d = this.shapes.reduce((p, m) => p + m[n], 0) + l;
      me([
        () => re(L.equalTo(d, this.groupLength)).toBe(!0),
        () => re().toBe(this.groupLength),
        () => re().toBe(this.groupWidth)
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
        r && r.rot !== o && le(r, o, this.container);
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
    const e = Ds(this.direction), i = Ye(e);
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
      me([
        () => re(e.every((s) => !s.group?.inGroup)).toBe(!0),
        () => re(e.every((s) => !s.group?.reference)).toBe(!0)
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
class Sn extends as {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Pr;
  static computedProperties = Tr;
  constructor(e = {}) {
    const i = { ...e, offcut: !0 };
    super(i), this.offcut = !0;
  }
  /**
  * Get entity type
  */
  getType() {
    return y.Offcut;
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
    return new Sn({
      ...e,
      // Include all rectangle properties (l, w, x, y, material)
      flex: e.flex,
      offcut: !0,
      addToInventory: !1,
      added: !1
    });
  }
}
function tl(t, e) {
  const i = e === "x" ? "l" : "w", s = e === "x" ? "y" : "x";
  return t?.length ? t.reduce((o, r) => {
    const a = o[e] + o[i], l = r[e] + r[i];
    return a > l ? o : l > a ? r : o[s] < r[s] ? o : r;
  }) : null;
}
function mu(t, e = null) {
  return e ? t.filter((i) => i.added && i?.stock?.id === e.id) : t.filter((i) => i.added);
}
function gu(t, e = !1, i = !1) {
  if (!t?.length)
    return [];
  let s = t;
  if (e !== null && (s = t.filter((a) => a.added === e), !s.length))
    return [];
  const n = /* @__PURE__ */ new Map(), o = i ? /* @__PURE__ */ new Map() : null, r = [];
  for (const a of s) {
    let l;
    if (fe(a))
      l = a.parentId;
    else if (Q(a))
      l = a.id;
    else
      continue;
    if (!n.has(l)) {
      if (n.set(l, !0), o) {
        const c = a.l <= a.w, d = c ? a.l : a.w, p = c ? a.w : a.l, m = d + "-" + p + "-" + a.orientationLock;
        if (o.has(m))
          continue;
        o.set(m, !0);
      }
      r.push(a);
    }
  }
  return r;
}
const il = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return on(t, "orientationLock", ["l", "w"], e, i, s), s;
}, sl = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return on(t, "grain", ["l", "w"], e, i, s), s;
}, nl = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [], n = Z(t, "banding");
  return n != null && (typeof n != "object" || n === null) && new v({
    item: t,
    message: Ae("errors.validation.must_be_object", { 0: "banding" }),
    shouldTranslate: !1,
    field: [["banding"]],
    index: [e],
    type: i ? "warning" : "error",
    issues: s,
    category: ["part"]
  }), s;
}, rl = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], o = Z(t, "customData");
  if (o == null)
    return n;
  if (typeof o != "object" || o === null)
    return new v({
      item: t,
      message: Ae("errors.validation.must_be_object", {
        0: Pt.customData
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
      ["string", "number", "boolean"].includes(a) || new v({
        item: t,
        message: Ae("errors.validation.must_be_string_number_boolean", {
          0: Pt.customData
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
}, ol = ({ item: t, index: e }) => {
  const i = Z(t, "machining");
  i && "validateEverything" in i && i.validateEverything(t, e);
}, al = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], r = Z(t, "x");
  return r === null || r === "" || r === void 0 || i != null && E({ v: r }) > i && new v({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: ne("x", { returnKey: !0 }),
      // positional (legacy)
      field: ne("x", { returnKey: !0 }),
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
}, ll = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], r = Z(t, "y");
  return r === null || r === "" || r === void 0 || i != null && E({ v: r }) > i && new v({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: ne("y", { returnKey: !0 }),
      // positional (legacy)
      field: ne("y", { returnKey: !0 }),
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
}, cl = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], r = Z(t, "l");
  return Z(t, "infiniteLength") || (r === null || r === "" || r === void 0 || r === 0) && new v({
    item: t,
    message: "errors.validation.not_set",
    params: {
      0: ne("l", { returnKey: !0 }),
      // positional (legacy)
      field: ne("l", { returnKey: !0 })
      // named (new)
    },
    field: [["l"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: o,
    category: n
  }), o;
}, ul = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], r = Z(t, "w");
  return (r === null || r === "" || r === void 0) && new v({
    item: t,
    message: "errors.validation.not_set",
    params: {
      0: ne("w", { returnKey: !0 }),
      // positional (legacy)
      field: ne("w", { returnKey: !0 })
      // named (new)
    },
    field: [["w"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: o,
    category: n
  }), o;
}, fl = ({ item: t, index: e, max: i, isWarning: s = !1, saw: n, category: o = [] }) => {
  const r = [], a = Z(t, "t");
  return n?.cutType === "beam" && !a && new v({
    item: t,
    message: "errors.saw.thickness_required_for_beam_saw",
    field: [["t"]],
    index: [e],
    type: "error",
    issues: r,
    category: o
  }), r;
}, dl = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], o = Z(t, "q"), r = Z(t, "autoAdd");
  return o == null || r === !0, n;
};
function pl(t, e, i, s = !0) {
  if (!t || !e || !i)
    return !1;
  if (t.autoId === e.autoId)
    throw console.error("[collision] ERROR: Shape/group is in testShapes array!"), console.error(`  thisShape: ${t.autoId} (${t.id})`), console.error(`  testShape: ${e.autoId} (${e.id})`), console.error(`  thisShape === testShape: ${t === e}`), new Error(`collision comparing to self ${t.autoId}, ${e.autoId}`);
  const n = s ? i.bladeWidth : 0, o = t.x + t.l + n, r = e.x + e.l + n;
  if (!L.lessThan(t.x, r) || !L.greaterThan(o, e.x))
    return !1;
  const a = t.y + t.w + n, l = e.y + e.w + n;
  return L.lessThan(t.y, l) && L.greaterThan(a, e.y);
}
function hl(t, e, i) {
  for (const s of e)
    if (t.autoId !== s.autoId && pl(t, s, i))
      return !0;
  return !1;
}
function ml(t, e, i = 0) {
  const s = t.x + t.l + i, n = e.x + e.l + i;
  if (!L.lessThan(t.x, n) || !L.greaterThan(s, e.x))
    return !1;
  const o = t.y + t.w + i, r = e.y + e.w + i;
  return L.lessThan(t.y, r) && L.greaterThan(o, e.y);
}
function gl(t, e = 0) {
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
function yu(t, e, i = 0) {
  const s = [{ x: 0, y: 0 }];
  for (const o of e)
    s.push(...gl(o, i));
  const n = [];
  for (const o of s)
    n.push({ x: o.x, y: o.y }), n.push({ x: o.x - t.l, y: o.y }), n.push({ x: o.x, y: o.y - t.w }), n.push({ x: o.x - t.l, y: o.y - t.w });
  return n;
}
const yl = ({ item: t, index: e, shapes: i, requiredCount: s = 2, isWarning: n = !1, category: o = ["group"] }) => {
  const r = [];
  return i.length < s && new v({
    item: t,
    message: "errors.groups.min_parts",
    index: [e],
    type: n ? "warning" : "error",
    issues: r,
    category: o
  }), r;
}, bl = ({ item: t, index: e, shapes: i, isWarning: s = !1, category: n = ["group"] }) => {
  const o = [];
  return i.forEach((r, a) => {
    !(typeof r.isSquare == "function", r.isSquare) && !["l", "w"].includes(r.orientationLock) && new v({
      item: t,
      message: Ae("errors.groups.part_needs_orientation_lock", { 0: a + 1 }),
      shouldTranslate: !1,
      field: [["orientationLock"]],
      index: [e],
      type: s ? "warning" : "error",
      issues: o,
      category: n
    });
  }), o;
}, wl = ({ item: t, index: e, shapes: i, joinDirection: s, isWarning: n = !1, category: o = ["group"] }) => {
  const r = [];
  if (i.length < 2)
    return r;
  const a = i[0], l = a.trimmedDimensions ? a.trimmedDimensions[s] : a[s];
  return i.slice(1).forEach((c, d) => {
    const p = c.trimmedDimensions ? c.trimmedDimensions[s] : c[s];
    L.equalTo(p, l) || new v({
      item: t,
      message: Ae("errors.groups.dimension_not_correct", {
        0: d + 2,
        1: s === "l" ? "length" : "width",
        2: l,
        3: p
      }),
      shouldTranslate: !1,
      index: [e],
      type: n ? "warning" : "error",
      issues: r,
      category: o
    });
  }), r;
}, Sl = ({ item: t, index: e, shapes: i, positions: s, bladeWidth: n = 0, isWarning: o = !1, category: r = ["group"] }) => {
  const a = [];
  if (s.length < 2)
    return a;
  for (let l = 0; l < s.length; l++)
    for (let c = l + 1; c < s.length; c++) {
      const d = s[l], p = s[c], m = i.find((F) => F.autoId === d.autoId), h = i.find((F) => F.autoId === p.autoId);
      if (!m || !h)
        continue;
      const w = m.trimmedDimensions || { l: m.l, w: m.w }, b = h.trimmedDimensions || { l: h.l, w: h.w }, T = { x: d.x, y: d.y, l: w.l, w: w.w }, g = { x: p.x, y: p.y, l: b.l, w: b.w };
      ml(T, g, n) && new v({
        item: t,
        message: Ae("errors.groups.shapes_overlap", { 0: l + 1, 1: c + 1 }),
        shouldTranslate: !1,
        index: [e],
        type: o ? "warning" : "error",
        issues: a,
        category: r
      });
    }
  return a;
}, xn = ({ item: t, index: e, shapeId: i, requiredQuantity: s, availableQuantity: n, shapeName: o, shapeIndex: r, isWarning: a = !1, category: l = ["group"] }) => {
  const c = [];
  return s > n && new v({
    item: t,
    message: Ae("errors.groups.not_enough_of_part", {
      0: o || (r ?? 0) + 1,
      1: s,
      2: n
    }),
    shouldTranslate: !1,
    index: [e],
    type: a ? "warning" : "error",
    issues: c,
    category: l
  }), n === 0 && new v({
    item: t,
    message: "errors.groups.no_parts",
    index: [e],
    type: a ? "warning" : "error",
    issues: c,
    category: l
  }), c;
};
function si(t) {
  return t && typeof t == "object" && "area" in t;
}
const _i = {
  missingProperty: (t, e) => `[Sorting Warning] Missing property "${t}" in ${e}`,
  missingMethod: (t, e) => `[Sorting Warning] Missing method "${t}" in ${e}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
}, ie = (t, e, i) => e in t ? t[e] : (console.warn(_i.missingProperty(String(e), i)), null), qt = (t, e) => (i, s) => {
  const n = t(i, s);
  return n !== 0 ? n : e(i, s);
}, gt = (t, e) => {
  if (si(t) && si(e))
    return t.area < e.area ? -1 : t.area > e.area ? 1 : 0;
  const i = "l" in t && "w" in t ? Number(t.l) * Number(t.w) : 0, s = "l" in e && "w" in e ? Number(e.l) * Number(e.w) : 0;
  return i < s ? -1 : i > s ? 1 : 0;
}, Ce = (t, e) => {
  const i = ie(t, "id", "first item"), s = ie(e, "id", "second item");
  if (i === null || s === null || i === void 0 || s === void 0)
    return 0;
  const n = i.toString().split("."), o = s.toString().split(".");
  return n[0] !== o[0] ? parseInt(n[0]) - parseInt(o[0]) : parseInt(n[1]) - parseInt(o[1]);
};
function _e(t) {
  const e = Array.isArray(t[0]) ? t.map(([i, s]) => ({ key: i, direction: s })) : t;
  return (i, s) => {
    for (const { key: n, direction: o } of e) {
      const r = ie(i, n, "first item"), a = ie(s, n, "second item");
      if (!(r === null || a === null) && r !== a)
        return o === "desc" ? r < a ? 1 : -1 : r < a ? -1 : 1;
    }
    return 0;
  };
}
function kn(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s > n ? i : e;
  }) : null;
}
function xl(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s < n ? i : e;
  }) : null;
}
const Ne = {
  // Dimension-based sorts
  WDLD: _e([
    ["w", "desc"],
    ["l", "desc"]
  ]),
  WALA: _e([
    ["w", "asc"],
    ["l", "asc"]
  ]),
  LDWD: _e([
    ["l", "desc"],
    ["w", "desc"]
  ]),
  LAWA: _e([
    ["l", "asc"],
    ["w", "asc"]
  ]),
  WD: _e([["w", "desc"]]),
  LD: _e([["l", "desc"]]),
  // ID-based sorts
  LDIDA: qt(_e([["l", "desc"]]), Ce),
  WDIDA: qt(_e([["w", "desc"]]), Ce),
  // Area-based sorts
  AD: (t, e) => -gt(t, e),
  AA: gt,
  AAID: qt(gt, Ce),
  ADID: qt((t, e) => -gt(t, e), Ce),
  // ID sorts
  ID: Ce,
  IDDesc: (t, e) => -Ce(t, e),
  StockID: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    return !i || !s ? 0 : Ce(i, s);
  },
  StockIDAD: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s)
      return 0;
    const n = Ce(i, s);
    return n !== 0 ? n : -gt(t, e);
  },
  // Position sorts
  YX: _e([
    ["y", "asc"],
    ["x", "asc"]
  ]),
  XY: _e([
    ["x", "asc"],
    ["y", "asc"]
  ]),
  // Placement order sorts
  placementOrder: (t, e) => {
    const i = ie(t, "placementOrder", "first item") ?? 0, s = ie(e, "placementOrder", "second item") ?? 0;
    return i - s;
  },
  typePlacementOrder: (t, e) => {
    const i = ie(t, "offcut", "first item"), s = ie(e, "offcut", "second item"), n = ie(t, "placementOrder", "first item") ?? 0, o = ie(e, "placementOrder", "second item") ?? 0;
    return i && !s ? 1 : !i && s ? -1 : n - o;
  },
  typeID: (t, e) => {
    const i = ie(t, "offcut", "first item"), s = ie(e, "offcut", "second item");
    return i && !s ? 1 : !i && s ? -1 : Ce(t, e);
  },
  stockIDTypePlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s)
      return 0;
    const n = Ce(i, s);
    if (n !== 0)
      return n;
    const o = ie(t, "offcut", "first item"), r = ie(e, "offcut", "second item");
    if (o && !r)
      return 1;
    if (!o && r)
      return -1;
    const a = ie(t, "placementOrder", "first item") ?? 0, l = ie(e, "placementOrder", "second item") ?? 0;
    return a - l;
  },
  offcutPlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i?.id || !s?.id)
      return 0;
    const n = Ce(i, s);
    if (n !== 0)
      return n;
    if ("placementOrder" in t && "placementOrder" in e) {
      const o = ie(t, "placementOrder", "first item") ?? 0, r = ie(e, "placementOrder", "second item") ?? 0;
      return o - r;
    }
    return 0;
  },
  groupPlacementOrder: (t, e) => {
    const i = ie(t, "placementOrder", "first item") ?? 0, s = ie(e, "placementOrder", "second item") ?? 0, n = i - s;
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
    if (si(t) && si(e) && t.aspect && e.aspect)
      return e.aspect - t.aspect;
    if (!("l" in t) || !("w" in t) || !("l" in e) || !("w" in e))
      return console.warn(_i.missingAspect), 0;
    const i = Math.max(Number(t.l), Number(t.w)) / Math.min(Number(t.l), Number(t.w));
    return Math.max(Number(e.l), Number(e.w)) / Math.min(Number(e.l), Number(e.w)) - i;
  },
  fillThenArea(t) {
    return (e, i) => !("l" in e) || !("w" in e) || !("l" in i) || !("w" in i) ? (console.warn(_i.missingLongSide), 0) : i[t] === e[t] ? -gt(e, i) : parseFloat(String(i[t])) - parseFloat(String(e[t]));
  },
  // Utility functions
  getLargest: kn,
  getSmallest: xl
};
function kl(t) {
  return ke(t) || Ki(t) || zt(t);
}
function Il(t, e, i) {
  if (!i)
    return !0;
  const s = t?.stock?.db_id, n = e?.db_id;
  if (s && n && s === n)
    return !0;
  const o = t?.material?.toLowerCase() || "", r = e?.material?.toLowerCase() || "", a = e?.variant?.toLowerCase() || "", l = e?.name?.toLowerCase() || "", c = a && l && a !== l ? `${a} ${l}` : "";
  return !o && !r && !a ? !0 : o ? o === r || o === a || !!c && o === c : !1;
}
function vl(t, e, i) {
  return i ? !de(t.t) || !de(e.t) ? !1 : L.equalTo(E({ v: t.t }), E({ v: e.t })) : !0;
}
function In(t, e, i) {
  return i?.stockType !== "linear" || !Ki(t) && !ke(t) ? !0 : ve(t, 0, e) && L.equalTo(E({ v: t.w }), E({ v: e.w })) || ve(t, 1, e) && L.equalTo(E({ v: t.l }), E({ v: e.w }));
}
function Pl(t, e, i, s = 0) {
  const n = ke(t[0]), o = i.stockType;
  if (t.some((g) => de(g.stockLock) && g.stockLock.length))
    return { stockList: e, shapeList: t, unusableShapes: [], unusableStock: [], newIssues: [] };
  e = e.filter((g) => n || g.autoAdd === !0 || de(g.q) && Number(g.q) > 0);
  const a = e.some((g) => de(g.material)), l = e.some((g) => de(g.t)), c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), h = [];
  let w = s;
  for (const g of t) {
    const F = e.map((M, te) => {
      const ae = kl(g) && jt(g, M), Je = Il(g, M, a), je = vl(g, M, l), Me = In(g, M, i);
      return {
        stockItem: M,
        stockIndex: te,
        fit: ae,
        material: Je,
        thickness: je,
        width: Me,
        // For this stock item, does it satisfy all requirements?
        satisfiesAll: ae && Je && je && (o !== "linear" || Me)
      };
    });
    g.stockMatch = {
      fit: F.some((M) => M.fit),
      material: !a || F.some((M) => M.material),
      thickness: !l || F.some((M) => M.thickness),
      width: o !== "linear" || F.some((M) => M.width)
    };
    const H = F.filter((M) => M.satisfiesAll), oe = H.length > 0;
    if (!n && oe) {
      const M = H.map((te) => te.stockItem.parentId);
      g.stockLock = M, M.forEach((te) => c.add(te));
    }
    g.stockMatch.fit ? oe || (a && !g.stockMatch.material && (m.add(g), h.push(new v({
      category: ["part", "stock"],
      item: g,
      field: [["material"]],
      index: [w],
      message: "errors.validation.no_matching_stock_material"
    }))), l && !g.stockMatch.thickness && (m.add(g), h.push(new v({
      category: ["part", "stock"],
      item: g,
      field: [["t"]],
      index: [w],
      message: "errors.validation.no_matching_stock_thickness"
    }))), o === "linear" && !g.stockMatch.width && (p.add(g), h.push(new v({
      category: ["part", "stock"],
      item: g,
      field: [["w"]],
      index: [w],
      message: "errors.validation.no_matching_stock_width"
    }))), g.stockMatch.material && g.stockMatch.thickness && (o !== "linear" || g.stockMatch.width) && (m.add(g), h.push(new v({
      category: ["part", "stock"],
      item: g,
      field: [["material"], ["t"]],
      index: [w],
      message: "errors.validation.no_stock_matches_all_requirements"
    })))) : (d.add(g), h.push(new v({
      category: ["part", "stock"],
      item: g,
      field: [["l"], ["w"]],
      index: [w],
      message: "errors.validation.will_not_fit"
    }))), w++;
  }
  t.forEach((g) => g.stockMatch = null);
  let b, T;
  return n ? (b = t.filter((g) => d.has(g) || p.has(g) || m.has(g)).sort(Ne.ID), T = []) : (b = t.filter((g) => d.has(g) || p.has(g) || m.has(g) || !g.stockLock || !g.stockLock.length).sort(Ne.ID), T = e.filter((g) => !c.has(g.parentId)).sort(Ne.ID), e = e.filter((g) => Fe(g)).filter((g) => c.has(g.parentId)), t = t.filter((g) => !d.has(g) && !p.has(g) && !m.has(g) && g?.stockLock?.length)), {
    stockList: e,
    unusableStock: T,
    shapeList: t,
    unusableShapes: b,
    newIssues: h
  };
}
function Tl(t) {
  return t?.issues?.length > 0;
}
const Al = ({ item: t, inputStockList: e, saw: i, partTrim: s = 0, index: n }) => {
  const o = [], r = i.stockType, a = Z(t, "q"), l = Z(t, "l"), c = Z(t, "w");
  return !a || !l || !c || ("applyPartTrim" in t && typeof t.applyPartTrim == "function" && t.applyPartTrim(s, r), Tl(t)) || Pl([t], e, i, n).newIssues.forEach((p) => {
    o.push(p);
  }), o;
}, Dl = ({ item: t, partTrim: e, index: i, isWarning: s = !1 }) => {
  const n = [];
  if (!e)
    return n;
  const o = Z(t, "l"), r = Z(t, "w");
  if (!o || !r)
    return n;
  try {
    const a = E({ v: e }), l = E({ v: o }), c = E({ v: r }), d = l - a * 2, p = c - a * 2;
    (d <= 0 || p <= 0) && new v({
      item: t,
      message: "errors.trim.too_much",
      params: {
        0: "part",
        // positional (legacy)
        1: a,
        // positional (legacy)
        2: `${d}x${p}`,
        // positional (legacy)
        item: "part",
        // named (new)
        trimValue: a,
        // named (new)
        result: `${d}x${p}`
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
}, Ol = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], o = Z(t, "l"), r = Z(t, "w"), a = Z(t, "trim");
  if (!o || !r || !a)
    return n;
  if ((!Fe(t) || Fe(t) && !("trimmed" in t && t.trimmed)) && typeof a == "object" && a !== null)
    try {
      const c = E({ v: o }), d = E({ v: r }), p = (b) => {
        if (b == null)
          return 0;
        if (typeof b == "number" || typeof b == "string")
          try {
            return E({ v: b }) || 0;
          } catch {
            return 0;
          }
        return 0;
      }, m = {
        w1: p(Z(a, "w1")),
        w2: p(Z(a, "w2")),
        l1: p(Z(a, "l1")),
        l2: p(Z(a, "l2"))
      }, h = m.w1 + m.w2, w = m.l1 + m.l2;
      h >= c && new v({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${ne("w1").toUpperCase()} + ${ne("w2").toUpperCase()}`,
          // positional (legacy)
          1: ne("l"),
          // positional (legacy)
          2: c,
          // positional (legacy)
          trimFields: `${ne("l1", { returnKey: !0 })} + ${ne("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: ne("l", { returnKey: !0 }),
          // named (new)
          maxValue: c
          // named (new)
        },
        field: [["trim", "w1"], ["trim", "w2"]],
        index: [e],
        type: i ? "warning" : "error",
        issues: n,
        category: s
      }), w >= d && new v({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${ne("l1").toUpperCase()} + ${ne("l2").toUpperCase()}`,
          // positional (legacy)
          1: ne("w"),
          // positional (legacy)
          2: d,
          // positional (legacy)
          trimFields: `${ne("l1", { returnKey: !0 })} + ${ne("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: ne("w", { returnKey: !0 }),
          // named (new)
          maxValue: d
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
}, ge = {
  // Dimensions
  x: al,
  y: ll,
  l: cl,
  w: ul,
  t: fl,
  q: dl,
  // Trim
  trim: Ol,
  partTrim: Dl,
  // Custom
  customData: rl,
  banding: nl,
  orientationLock: il,
  grain: sl,
  machining: ol,
  // Stock
  stockMatch: Al,
  // Groups
  groupShapeCount: yl,
  groupOrientationLock: bl,
  groupDimensions: wl,
  groupOverlap: Sl,
  groupQuantity: xn
};
class ni extends rs {
  static schema = Ci;
  static computedProperties = Zs;
  static defaults = Ci.parse({});
  constructor(e = {}) {
    const i = ni.preprocessData(e);
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
    return y.Stock;
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
      const n = ge.q({ item: e, index: e?.index });
      i.push(...n);
    }
    const s = ge.grain({ item: e, index: e?.index });
    i.push(...s), this.issues.push(...i.filter((n) => n));
  }
  /**
  * Create stock instance with live objects
  */
  static create(e) {
    const i = { ...e.data };
    e.saw && (i.saw = e.saw);
    const s = new ni(i);
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
    const s = tl(e.filter((o) => o.added && o.stock.id === this.id), "x"), n = s.x + s.l;
    if (n > this.l)
      throw new Error("Furthest shape position exceeds stock length");
    return L.equalTo(n, this.l) ? n : n + i;
  }
}
const Tt = ["l1", "l2", "w1", "w2"], Cl = ["a", "b", "c", "d"], et = [...Tt, ...Cl], Le = ["a", "b"];
class ri extends K {
  // Required: Define schema and computed properties for SchemaClass
  static schema = di;
  static computedProperties = Yi;
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
class tt extends ri {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = ko;
  static computedProperties = Io;
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
    const i = [], s = new Set(Le);
    for (const n in this.faces)
      s.has(n) || i.push(new v({
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
      for (const s of Le)
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
      const s = i, n = Ze("finish");
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
      for (const e of Le)
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
    for (const i of Le)
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
    return new tt(e);
  }
  /**
   * Create empty finish
   */
  static empty() {
    return new tt();
  }
  /**
   * Create with both faces
   */
  static bothFaces(e = !0) {
    const i = new tt();
    return i.setBothFaces(e), i;
  }
  /**
   * Create with front face only
   */
  static frontOnly(e = !0) {
    const i = new tt();
    return i.setFace("a", e), i;
  }
  /**
   * Create with back face only
   */
  static backOnly(e = !0) {
    const i = new tt();
    return i.setFace("b", e), i;
  }
}
class it extends ri {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = Ca;
  static computedProperties = La;
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
      const s = new Set(Le);
      for (const n in this.faces)
        s.has(n) || i.push(new v({
          message: `Invalid planing face: ${n}. Valid faces are 'a' (front) and 'b' (back)`,
          type: "warning"
        }));
    }
    if (this.sides) {
      const s = new Set(et);
      for (const n in this.sides)
        s.has(n) || i.push(new v({
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
      for (const s of Le)
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
      const s = i, n = Ze("planing");
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
      for (const s of et)
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
      const s = i, n = Ze("planing");
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
      for (const e of Le)
        this.faces[e] = !1;
    if (this.sides)
      for (const e of et)
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
    for (const i of Le)
      this.setFace(i, e);
  }
  /**
   * Set all sides to the same value
   */
  setAllSides(e) {
    for (const i of et)
      this.setSide(i, e);
  }
  /**
   * Calculate total planing area
   */
  calculateArea(e, i) {
    let s = 0;
    if (this.faces) {
      const n = e * i;
      for (const o of Le)
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
      for (const o of et)
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
    return new it(e);
  }
  /**
   * Create empty planing
   */
  static empty() {
    return new it();
  }
  /**
   * Create with all faces and sides
   */
  static full(e = !0) {
    const i = new it();
    return i.setAllFaces(e), i.setAllSides(e), i;
  }
  /**
   * Create with faces only
   */
  static facesOnly(e = !0) {
    const i = new it();
    return i.setAllFaces(e), i;
  }
  /**
   * Create with sides only
   */
  static sidesOnly(e = !0) {
    const i = new it();
    return i.setAllSides(e), i;
  }
}
class se extends K {
  // Zod schema for validation and serialization
  static schema = So;
  static computedProperties = xo;
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
    return y.Extras;
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
    if (Qe(this.banding)) {
      const s = this.banding.validate(e);
      i.push(...s);
    }
    if (Ve(this.finish)) {
      const s = this.finish.validate(e);
      i.push(...s);
    }
    if (We(this.planing)) {
      const s = this.planing.validate(e);
      i.push(...s);
    }
    if (We(this.planing) && Ve(this.finish) && e?.t) {
      const s = this.planing.getTotalFacePlaning();
      s > 0 && e.t - s < 5 && i.push(new v({
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
    return Qe(this.banding) && (i += this.banding.getCost(e)), Ve(this.finish) && (i += this.finish.getCost(e)), We(this.planing) && (i += this.planing.getCost(e)), i;
  }
  /**
   * Get human-readable description of all extras
   */
  getDescription() {
    const e = [];
    return Qe(this.banding) && this.banding.hasValues() && e.push(this.banding.getDescription()), Ve(this.finish) && this.finish.hasValues() && e.push(this.finish.getDescription()), We(this.planing) && this.planing.hasValues() && e.push(this.planing.getDescription()), e.length > 0 ? e.join("; ") : "No extras";
  }
  /**
   * Check if any extras are applied
   */
  hasExtras() {
    return !!(Qe(this.banding) && this.banding.hasValues() || Ve(this.finish) && this.finish.hasValues() || We(this.planing) && this.planing.hasValues());
  }
  /**
   * Clear all extras
   */
  clear() {
    Qe(this.banding) && this.banding.clear(), Ve(this.finish) && this.finish.clear(), We(this.planing) && this.planing.clear();
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
    e ? e instanceof kt ? this.banding = e : this.banding = new kt(e) : this.banding = void 0;
  }
  /**
   * Set finish
   */
  setFinish(e) {
    e ? e instanceof tt ? this.finish = e : this.finish = new tt(e) : this.finish = void 0;
  }
  /**
   * Set planing
   */
  setPlaning(e) {
    e ? e instanceof it ? this.planing = e : this.planing = new it(e) : this.planing = void 0;
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
    return new se(e);
  }
  /**
   * Create empty extras container
   */
  static empty() {
    return new se();
  }
  /**
   * Create with specific extras
   */
  static create(e) {
    return new se(e);
  }
  /**
   * Check if any extras are applicable to shape
   * Used for UI validation to determine if extras tab should be enabled
   */
  isApplicable(e) {
    return !!(Qe(this.banding) && this.banding.isApplicable(e) || Ve(this.finish) && this.finish.isApplicable(e) || We(this.planing) && this.planing.isApplicable(e));
  }
  /**
   * Get summary of active extras
   */
  getSummary() {
    return {
      hasBanding: Qe(this.banding) && this.banding.hasValues() || !1,
      hasFinish: Ve(this.finish) && this.finish.hasValues() || !1,
      hasPlaning: We(this.planing) && this.planing.hasValues() || !1,
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
    return s ? Qe(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" ? Object.keys(s.sides).some((n) => {
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
    return s ? Ve(s) && typeof s.hasValues == "function" ? s.hasValues() : s.faces && typeof s.faces == "object" ? Object.keys(s.faces).some((n) => {
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
    return s ? We(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" && Object.keys(s.sides).some((o) => {
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
    return s ? Vr(s) && typeof s.hasValues == "function" ? s.hasValues() : s.images && Array.isArray(s.images) ? s.images.length > 0 : !1 : !1;
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
          return se.hasBanding(e);
        case "finish":
          return se.hasFinish(e);
        case "planing":
          return se.hasPlaning(e);
        case "imageUpload":
          return se.hasImageUpload(e);
      }
    return se.hasBanding(e) || se.hasFinish(e) || se.hasPlaning(e) || se.hasImageUpload(e);
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
    return se.hasBanding(e) && i.push("banding"), se.hasFinish(e) && i.push("finish"), se.hasPlaning(e) && i.push("planing"), i;
  }
}
function Ll(t) {
  const { dimensionName: e, constraint: i, limit: s, value: n, subject: o, location: r } = t, a = t.kind ?? "length", l = a === "count" ? "" : " mm", c = i === "min" ? "at least" : "at most", d = r ? `${r}: ` : "", p = o ? `${d}${o} ${e}` : `${d}${e}`;
  if (a === "length" && i === "min" && n <= 0)
    return `${p} must be at least ${s} mm — enter the part's dimensions`;
  const m = a === "count" ? `this part has ${n}` : `this part is ${n} mm`;
  return `${p} must be ${c} ${s}${l} (${m})`;
}
function bu(t, e) {
  const i = t.filter(Boolean).join("; ");
  return e && i ? `${e} — ${i}` : e || i;
}
const El = {
  t: "thickness",
  longSide: "long side",
  shortSide: "short side",
  holes: "hole count",
  corners: "corner count",
  hingeHoles: "hinge-hole group count"
}, Fl = /* @__PURE__ */ new Set(["holes", "corners", "hingeHoles"]);
function Ml(t) {
  return El[t] ?? String(t);
}
function _l(t) {
  return Fl.has(t);
}
const Ri = et, Ti = Le, Rl = {
  banding: {
    scope: ["sides"],
    sides: Tt.map((t) => `side.${t}`)
    // Only use main sides (l1/l2/w1/w2), not corners
  },
  finish: {
    scope: ["faces"],
    faces: Ti.map((t) => `face.${t}`)
  },
  planing: {
    scope: ["faces", "sides"],
    faces: Ti.map((t) => `face.${t}`),
    // Main sides (l1/l2/w1/w2) — matches the runtime config in extras.ts and the
    // coordinate canon. Previously the legacy literals side.a/b/c/d (corner letters),
    // which never matched the runtime side keys.
    sides: Tt.map((t) => `side.${t}`)
  },
  info: {
    scope: ["sides"],
    sides: Ri.map((t) => `side.${t}`)
  },
  machining: {
    scope: ["faces", "sides"],
    faces: Ti.map((t) => `face.${t}`),
    sides: Ri.map((t) => `side.${t}`)
  },
  addon: {
    // No face/side scope - addon products attach to the shape as a whole.
    scope: []
  }
}, Gl = Rl, ze = (t) => Gl[t] || {
  scope: ["sides"],
  sides: et.map((e) => `side.${e}`)
}, $l = (t) => {
  const e = ze(t), i = [];
  return e.faces && i.push(...e.faces), e.sides && i.push(...e.sides), i;
}, wu = (t) => (ze(t).faces || []).map((i) => {
  const s = ot(i);
  return s.scope === "face" ? s.key : void 0;
}).filter((i) => i !== void 0), Su = (t) => (ze(t).sides || []).map((i) => {
  const s = ot(i);
  return s.scope === "side" ? s.key : void 0;
}).filter((i) => typeof i == "string"), ot = (t) => {
  const e = t.split(".");
  if (e.length !== 2 || e[0] !== "face" && e[0] !== "side")
    throw new Error(`Invalid ExtraLocation format: ${t}. Must be 'face.X' or 'side.X'`);
  const i = e[0], s = e[1];
  if (i === "face" && !Le.includes(s))
    throw new Error(`Invalid face key '${s}' in location '${t}'`);
  if (i === "side" && !et.includes(s))
    throw new Error(`Invalid side key '${s}' in location '${t}'`);
  return {
    scope: i,
    key: s,
    original: t
  };
}, xu = (t) => ot(t).scope, Nl = (t, e = 0, i = !1) => {
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
}, ku = (t, e = 0, i = !1) => t.startsWith("face.") ? `faces.${t.replace(/^face\./, "")}` : Nl(t, e, i), Iu = (t, e) => {
  const i = Number(t?.l), s = Number(t?.w);
  if (e.startsWith("face."))
    return { quantity: Number.isFinite(i) && Number.isFinite(s) && i > 0 && s > 0 ? i * s / 1e6 : void 0, unit: "m²" };
  const n = e.replace(/^side\./, ""), o = n === "l1" || n === "l2" ? i : n === "w1" || n === "w2" ? s : NaN;
  return { quantity: Number.isFinite(o) && o > 0 ? o / 1e3 : void 0, unit: "m" };
}, Bl = (t) => Yn(t), vn = (t) => ze(t).scope.includes("faces"), Pn = (t) => ze(t).scope.includes("sides"), vu = (t) => {
  const e = ze(t);
  return e.scope.includes("faces") && e.scope.includes("sides");
}, zl = (t, e) => {
  if (t.length === 1 && t[0].length === 1 && t[0][0] === !0)
    return "boolean";
  const i = t.flat().filter((o) => typeof o == "string"), n = [.../* @__PURE__ */ new Set([...i, ...e || []])].length;
  return n === 0 ? "multiple" : n === 1 ? "single" : "multiple";
}, Pu = (t, e = "") => {
  if (typeof t == "string")
    return t;
  if (typeof t == "boolean")
    return t ? "Y" : e;
  if (typeof t == "object" && t !== null && !Array.isArray(t)) {
    const i = Object.values(t).map((s) => typeof s == "string" ? s : typeof s == "boolean" && s ? "Y" : "").filter((s) => s !== "");
    return i.length > 0 ? i.join("|") : e;
  }
  return e;
}, jl = (t, e) => {
  const i = t;
  i.extras || (i.extras = {}), i.extras[e] || (i.extras[e] = {});
  const s = i.extras[e];
  vn(e) && (s.faces || (s.faces = {})), Pn(e) && (s.sides || (s.sides = {}));
}, Vl = (t, e, i) => {
  jl(t, e);
  const n = t.extras[e], { scope: o } = ot(i);
  return o === "face" ? {
    extraContainer: n.faces || {}
  } : {
    extraContainer: n.sides || {}
  };
}, Tu = (t, e, i) => {
  const s = yi(t, e, i);
  if (s == null || s === !1 || s === "")
    return !1;
  if (typeof s != "object" || Array.isArray(s))
    return typeof s == "boolean" ? s : typeof s == "string" ? s.trim() !== "" : !!s;
  const n = Ze(e);
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
}, Wl = (t, e, i, s, n) => {
  const o = Ze(e);
  if (o) {
    const r = yi(t, e, i);
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
}, Au = (t, e, i, s, n, o, r) => {
  if (Ze(e))
    switch (Xl(e)) {
      case "boolean":
        Ai(t, e, i, !!n);
        break;
      case "string":
        Ai(t, e, i, String(n));
        break;
      case "object":
        {
          let c = yi(t, e, i) || {};
          typeof c != "object" && (c = {}), c[s] = n, Ai(t, e, i, c);
        }
        break;
    }
}, ql = (t, e, i, s) => {
  Zl(t, e, i);
}, Du = (t, e, i, s, n) => {
  if (i.length === 0)
    return null;
  const o = i.map((r) => Wl(t, e, r, s));
  if (n === "boolean" || n === "single") {
    const r = o.every((l) => !!l), a = o.every((l) => !l);
    return r ? !0 : a ? !1 : null;
  }
  if (n === "multiple") {
    const r = o[0];
    return o.every((l) => l === r) ? r : null;
  }
  return null;
}, Ou = (t, e, i, s) => {
  i.forEach((n) => {
    ql(t, e, n);
  });
}, Cu = (t, e, i, s, n, o) => {
  const r = yi(t, e, i), a = [];
  if (r && o?.length)
    if (typeof r == "object" && !Array.isArray(r)) {
      const c = r;
      for (const d of o) {
        const p = c[d];
        if (!p) {
          a.push("");
          continue;
        }
        if (p === !0) {
          const m = Ze(e), h = m?.labels.indexOf(d) ?? -1, w = h !== -1 && m?.options[h], b = w?.length === 1 ? w[0] : d;
          a.push(b);
          continue;
        }
        a.push(String(p));
      }
    } else if (typeof r == "string") {
      const c = r.split("|");
      o.forEach((d, p) => {
        a.push(c[p] || "");
      });
    } else
      a.push(String(r));
  else if (r)
    if (typeof r == "string" && o?.length) {
      const c = r.split("|");
      o.forEach((d, p) => {
        a.push(c[p] || "");
      });
    } else
      a.push(String(r));
  const l = a.filter((c) => c && typeof c == "string" && c.trim() !== "");
  if (!Array.isArray(l) || !l.length)
    return !1;
  if (!s)
    return 0;
  try {
    const c = l.map((p, m) => {
      if (typeof p == "boolean" && p === !0 && n) {
        const h = n[m];
        if (h && h.length === 1)
          return String(h[0]);
      }
      return String(p);
    });
    return s(e, c) ?? !1;
  } catch (c) {
    return console.error("Error calculating extras price:", c), !1;
  }
}, Lu = (t, e, i) => {
  const s = /* @__PURE__ */ new Set(), n = ze(e);
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
}, Eu = (t, e, i, s) => {
  const n = s[0], o = ze(e);
  n && t.forEach((r) => {
    const l = r.extras[e];
    if (!l)
      return;
    l.options || (l.options = {});
    const c = l.options;
    if (o.faces && l.faces) {
      c.faces || (c.faces = {});
      for (const d in l.faces)
        l.faces[d] === !0 && (l.faces[d] = i);
    }
    if (o.sides && l.sides) {
      c.sides || (c.sides = {});
      for (const d in l.sides)
        l.sides[d] === !0 && (l.sides[d] = i);
    }
  });
}, Fu = (t, e, i) => {
  const s = ze(e);
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
}, Ul = (t, e, i, s = !1) => {
  const n = ze(e), o = t;
  o.extras[e] || (o.extras[e] = {});
  const r = o.extras[e];
  r.options || (r.options = {});
  const a = r.options;
  if (vn(e) && (r.faces || (r.faces = {}), a.faces || (a.faces = {})), Pn(e) && (r.sides || (r.sides = {}), a.sides || (a.sides = {})), s) {
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
}, Mu = (t, e, i, s = [], n = []) => {
  const o = zl(i, n);
  Ul(t, e, o === "boolean" ? [] : s, o === "boolean");
}, Hl = (t) => t ? typeof t == "string" ? t.includes("|") ? t.split("|") : [t] : typeof t == "boolean" ? t ? ["true"] : [] : typeof t == "object" && !Array.isArray(t) && t !== null ? Object.values(t).filter((e) => e != null && e !== "" && e !== !1).map((e) => String(e)) : [String(t)] : [], _u = (t, e) => new Set(Object.keys(t || {})), Kl = (t, e) => {
  const { extraType: i, pricing: s, codes: n, findExtrasPrice: o } = e, r = Object.keys(s || {}), a = r.length ? Math.max(...r.map((F) => F.split("|").length)) : 0, l = Hl(t), c = l.length, d = { parts: l, selectedLevels: c, maxPricingLevels: a, missingLevels: 0, matchingKeyCount: 0, hasValidPrice: !1 };
  if (c === 0)
    return { ...d, status: "empty" };
  if (n) {
    const F = new Set(Object.values(n));
    if (c === 1 && F.has(l[0]))
      return { ...d, status: "complete", hasValidPrice: !0 };
  }
  if (a <= 1)
    return { ...d, status: "complete", hasValidPrice: !0 };
  const p = l.filter((F) => F.trim() !== ""), m = p.join("|");
  let h = !1;
  if (o)
    try {
      const F = o(i, p);
      h = F !== null && F > 0;
    } catch {
      h = !1;
    }
  !h && s[m] !== void 0 && (h = !0);
  let w = 0, b = !1;
  if (c < a) {
    const F = l.join("|");
    w = r.filter((H) => H === F || H.startsWith(F + "|")).length, w === 1 && (b = !0);
  }
  if (!(!h && !b))
    return { ...d, status: "complete", matchingKeyCount: w, hasValidPrice: h };
  const g = c < a && w > 1;
  return {
    ...d,
    status: g ? "incomplete" : "invalid",
    missingLevels: g ? a - c : 0,
    matchingKeyCount: w,
    hasValidPrice: h
  };
}, Ru = (t, e, i, s, n) => {
  if (!i || !Object.keys(i).length)
    return { valid: !0, messages: [], incompleteLocations: [] };
  const o = [], r = [], a = $l(e), l = Object.keys(i), c = Math.max(...l.map((p) => p.split("|").length));
  if (c <= 1)
    return { valid: !0, messages: [], incompleteLocations: [] };
  for (const p of a) {
    const { extraContainer: m } = Vl(t, e, p), { key: h } = ot(p), w = m[h];
    if (!w)
      continue;
    const b = Kl(w, {
      extraType: e,
      pricing: i,
      codes: n,
      findExtrasPrice: s
    });
    if (b.status === "empty" || b.status === "complete")
      continue;
    const { parts: T, selectedLevels: g, hasValidPrice: F } = b, H = b.status === "incomplete";
    let oe = "";
    if (H) {
      const M = b.missingLevels, te = T.join(", ");
      oe = `${e} selection incomplete for ${p}. Selected: "${te}" but ${M} more level${M > 1 ? "s" : ""} required.`;
    } else g >= c && (oe = `${e} selection invalid for ${p}. No pricing available for "${T.join(", ")}".`);
    g > 0 && !F && (r.push(p), o.push(oe || `${e} pricing incomplete for ${p}: ${g}/${c} levels selected`));
  }
  return { valid: r.length === 0, messages: o, incompleteLocations: r };
}, Gu = (t, e, i) => !i || !i[e] ? { valid: !0, violations: [] } : Yl(t, i[e]), Yl = (t, e) => {
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
    const r = typeof o.toData == "function" ? o.toData() : o, a = Array.isArray(r?.holes) ? r.holes.length : 0, l = Array.isArray(r?.hingeHoles) ? r.hingeHoles.length : 0, c = r?.corners ?? {}, d = Object.values(c).filter((p) => p && p.type !== null && p.type !== void 0 && p.size > 0).length;
    s("holes", a, e.holes), s("hingeHoles", l, e.hingeHoles), s("corners", d, e.corners);
  } else
    s("holes", 0, e.holes), s("hingeHoles", 0, e.hingeHoles), s("corners", 0, e.corners);
  return {
    valid: i.length === 0,
    violations: i,
    message: e.message
  };
}, Tn = (t, e) => Ll({
  dimensionName: Ml(t.dimension),
  constraint: t.constraint,
  limit: t.limit,
  value: t.value,
  subject: e,
  kind: _l(t.dimension) ? "count" : "length"
}), $u = (t) => Tn(t), Nu = (t, e, i) => Tn(e, Bl(t));
function Bu(t, e = "banding") {
  const i = t.extras?.[e];
  if (!i?.sides)
    return;
  const s = i.sides, n = s.l1, o = s.l2, r = s.w1, a = s.w2;
  s.l1 = r, s.l2 = a, s.w1 = n, s.w2 = o;
}
const zu = (t) => ["all", "faces", "sides"].includes(t) ? !1 : !t.includes(".");
let Gi = null;
const ju = (t) => {
  Gi = t;
}, Ze = (t) => Gi ? Gi.getExtrasConfig(t) : null, Ai = (t, e, i, s) => {
  t.extras || (t.extras = {}), t.extras[e] || (t.extras[e] = { sides: {}, faces: {} });
  const { scope: n, key: o } = ot(i), r = n === "face" ? t.extras[e].faces : t.extras[e].sides;
  r[o] = s;
}, yi = (t, e, i) => {
  const { scope: s, key: n } = ot(i);
  return (s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides)?.[n] ?? null;
}, Zl = (t, e, i) => {
  const { scope: s, key: n } = ot(i), o = s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides;
  o && n in o && delete o[n];
}, Xl = (t) => {
  const e = Ze(t);
  return !e || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 1 && e.options[0][0] === !0 || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 0 ? "boolean" : e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].every((i) => typeof i == "string") ? "string" : e.options.length > 1 ? "object" : "string";
};
class kt extends ri {
  // Required: Define schema and computed properties for SchemaClass
  static schema = uo;
  static computedProperties = {
    ...ri.computedProperties,
    ...fo
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
      Tt.includes(s) || i.push(new v({
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
      const s = i, n = Ze("banding");
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
    for (const i of Tt)
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
    return new kt(e);
  }
  /**
   * Create empty banding
   */
  static empty() {
    return new kt();
  }
  /**
   * Create with all sides
   */
  static allSides(e = !0) {
    const i = new kt();
    return i.setAllSides(e), i;
  }
}
class It extends K {
  // Zod schema for validation and serialization
  static schema = ho;
  static computedProperties = mo;
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
    return this.type && this.size !== null && this.size <= 0 && e.push(new v({
      message: `Corner ${this.index + 1}: Size must be positive`,
      type: "error"
    })), (this.index < 0 || this.index > 3) && e.push(new v({
      message: "Corner index must be between 0 and 3",
      type: "error"
    })), this.issues = e, e;
  }
  /**
   * Validate against shape dimensions
   */
  validateAgainstShape(e, i) {
    const s = this.validate();
    if (!this.type || !this.size || this.size <= 0)
      return s;
    const n = Math.min(e, i);
    return this.size > n / 2 && s.push(new v({
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
    return new It(e);
  }
  /**
   * Create a radius corner
   */
  static radius(e, i) {
    return new It({ type: "radius", size: e, index: i });
  }
  /**
   * Create a bevel corner
   */
  static bevel(e, i) {
    return new It({ type: "bevel", size: e, index: i });
  }
}
class oi extends K {
  static schema = Po;
  static computedProperties = To;
  getType() {
    return "groove";
  }
  constructor(e = {}) {
    super(e), this.validate();
  }
  validate() {
    const e = [];
    return this.position < 0 && e.push(new v({
      message: "Position cannot be negative",
      type: "error"
    })), this.width <= 0 && e.push(new v({
      message: "Width must be positive",
      type: "error"
    })), this.depth <= 0 && e.push(new v({
      message: "Depth must be positive",
      type: "error"
    })), this.start < 0 && e.push(new v({
      message: "Start offset cannot be negative",
      type: "error"
    })), this.length !== void 0 && this.length < 0 && e.push(new v({
      message: "Length cannot be negative",
      type: "error"
    })), this.issues = e, e;
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
    return new oi(e);
  }
}
class Re extends K {
  // Zod schema for validation and serialization
  static schema = Lo;
  static computedProperties = Eo;
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
    return (this.x < 0 || this.y < 0) && e.push(new v({
      message: "Position cannot be negative",
      type: "error"
    })), this.diameter <= 0 && e.push(new v({
      message: "Diameter must be positive",
      type: "error"
    })), this.depth !== void 0 && this.depth < 0 && e.push(new v({
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
    return new Re({ x: e, y: i, diameter: s, face: n });
  }
  /**
  * Create from plain data (for deserialization)
  */
  static fromData(e) {
    return new Re(e);
  }
  get area() {
    const e = this.diameter / 2;
    return Math.PI * e * e;
  }
}
class ai extends K {
  // Zod schema for validation and serialization
  static schema = Do;
  static computedProperties = Oo;
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
    if (this.position < 0 && e.push(new v({
      message: "Position cannot be negative",
      type: "error"
    })), this.numHoles <= 0 && e.push(new v({
      message: "Number of holes must be positive",
      type: "error"
    })), this.diameter <= 0 && e.push(new v({
      message: "Diameter must be positive",
      type: "error"
    })), this.hingeLength <= 0 && e.push(new v({
      message: "Hinge length must be positive",
      type: "error"
    })), this.depth !== void 0 && this.depth < 0 && e.push(new v({
      message: "Depth cannot be negative",
      type: "error"
    })), this.numHoles > 1) {
      const i = this.hingeLength - 2 * this.outerSpacing;
      this.diameter * this.numHoles > i && e.push(new v({
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
    return this.generateHoles(i, s).map((o) => new Re(o));
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
          a = this.distanceFromEdge, l = this.position + r;
          break;
        case "l2":
          a = e - this.distanceFromEdge, l = this.position + r;
          break;
        case "w1":
          a = this.position + r, l = this.distanceFromEdge;
          break;
        case "w2":
          a = this.position + r, l = i - this.distanceFromEdge;
          break;
        default:
          a = 0, l = 0;
      }
      s.push(new Re({
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
    return new ai(e);
  }
}
class Jl extends K {
  // Validation properties (issues, warnings) are inherited from validationBasePropertiesSchema
  // via sawPropertiesSchema which extends it - they are initialized automatically
  // when the Zod schema is parsed in the constructor
  // isValid is also provided as a computed property from validationBaseComputedProperties
  // Zod schema for validation and serialization
  static schema = Mi;
  static computedProperties = Ea;
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
  static defaults = Mi.parse({});
  constructor(e = {}) {
    super(e), this.stockType === "linear" && (this.cutType = void 0, this.cutPreference = void 0), this.cutType !== "efficiency" && this.options?.minSpacing !== 0 && (this.options = { ...this.options, minSpacing: 0 });
  }
  /**
   * Get entity type
   */
  getType() {
    return y.Saw;
  }
  /**
  * Validate the saw data
  * For backward compatibility, returns Issue[] synchronously
  * Delegates to async validation which uses the schema
  */
  validate() {
    return this.issues = [], this.warnings = [], this.bladeWidth < 0 && this.issues.push(new v({
      message: "Blade width cannot be negative",
      field: [["bladeWidth"]],
      type: "error",
      shouldTranslate: !1
    })), this.issues;
  }
}
function ls(t, e, i = "decimal") {
  const s = { ...t };
  for (const [n, o] of Object.entries(e)) {
    const r = t[n];
    switch (o.type) {
      case "number":
        r != null ? s[n] = typeof r == "string" ? E({ v: r, nf: i }) : r : r === null && (s[n] = null);
        break;
      case "trim":
        if (r) {
          const a = {};
          for (const [l, c] of Object.entries(r))
            a[l] = typeof c == "string" ? E({ v: c, nf: i }) : c;
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
const Ql = {
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
}, ec = {
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
}, tc = {
  // Numeric field that needs conversion
  bladeWidth: { type: "number" },
  // Stack height should ensure it's a number
  stackHeight: { type: "transform", transform: (t) => typeof t == "number" ? t : t ? Number(t) : 100 },
  // Convert options field to handle minSpacing string/number conversions
  options: {
    type: "transform",
    transform: (t) => ({
      ...t,
      minSpacing: typeof t?.minSpacing == "string" ? E({ v: t.minSpacing, nf: "decimal" }) : t?.minSpacing ?? 0,
      minSpacingDimension: {
        dimension: typeof t?.minSpacingDimension?.dimension == "string" ? E({ v: t.minSpacingDimension.dimension, nf: "decimal" }) : t?.minSpacingDimension?.dimension ?? 0,
        minSpacing: typeof t?.minSpacingDimension?.minSpacing == "string" ? E({ v: t.minSpacingDimension.minSpacing, nf: "decimal" }) : t?.minSpacingDimension?.minSpacing ?? 0
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
function li() {
  this.issues = [], this.warnings && (this.warnings = []);
}
function St(t) {
  t.type === "warning" && this.warnings ? this.warnings.push(t) : this.issues.push(t);
}
function At(t) {
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
    return new v({
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
function Os(t, e) {
  const i = t.safeParse(e);
  return i.success ? [] : At(i.error);
}
const An = {
  clearValidation: li,
  addIssue: St,
  validateWithSchema: Os,
  zodErrorsToIssues: At,
  /**
   * Run standard validation flow
   */
  runValidation(t, e = {}) {
    return li.call(this), e.skipSchemaValidation || Os(t, this).forEach((s) => St.call(this, s)), this.issues || [];
  }
};
class Vu extends K {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Qt;
  static computedProperties = na;
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}) {
    super(e);
    const i = Li(this.stockType);
    i.includes(this.cutType) || (this.cutType = i.length > 0 ? i[0] : void 0);
    const s = Ei(this.stockType, this.cutType);
    this.cutPreference && !s.includes(this.cutPreference) ? this.cutPreference = s[0] || void 0 : !this.cutPreference && s.length > 0 && (this.cutPreference = s.includes("l") ? "l" : s[0]), this.stockType === "roll" && this.options?.stackingMode !== "none" && (this.options = { ...this.options, stackingMode: "none" }), this.cutType !== "efficiency" && this.options?.minSpacing !== 0 && (this.options = { ...this.options, minSpacing: 0 });
  }
  /**
   * Get entity type
   */
  getType() {
    return y.InputSaw;
  }
  // Validation properties (issues, warnings, isValid) come from the schema via SchemaClass
  // clearValidation and addIssue are provided by validation-helpers
  /**
   * Validate to perform InputSaw-specific validation
   * Implements the Validatable interface requirement
   */
  validate(e) {
    if (li.call(this), e?.skipSchemaValidation || An.runValidation.call(this, Qt, e), !e?.skipBusinessValidation) {
      if (this.bladeWidth !== void 0 && this.bladeWidth !== null) {
        const i = E({ v: this.bladeWidth });
        i === null || isNaN(i) || i < 0 ? St.call(this, new v({
          message: "Blade width must be a non-negative number",
          type: "error",
          field: [["bladeWidth"]]
        })) : i > 100 && St.call(this, new v({
          message: "Blade width seems unusually large (> 100)",
          type: "warning",
          field: [["bladeWidth"]]
        }));
      }
      this.stackHeight !== void 0 && this.stackHeight !== null && (this.stackHeight < 1 ? St.call(this, new v({
        message: "Stack height must be at least 1",
        type: "error",
        field: [["stackHeight"]]
      })) : this.stackHeight > 1e3 && St.call(this, new v({
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
    const n = Li(this.stockType);
    n.includes(this.cutType) || (this.cutType = n.length > 0 ? n[0] : void 0);
    const o = i !== this.stockType, r = s !== this.cutType;
    if (o || r) {
      const a = Ei(this.stockType, this.cutType);
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
    const e = this.toData(), i = ls(e, tc);
    return new Jl(i);
  }
}
class ci extends K {
  // Zod schema for validation and serialization
  static schema = ma;
  static computedProperties = ga;
  /**
   * Get entity type (required for AutoSerializable)
   */
  getType() {
    return y.Machining;
  }
  constructor(e = {}) {
    super(e);
  }
  /**
  * Validate machining operations - all or specific type
  */
  validate(e, i, s) {
    const n = [];
    return i === "holes" ? this.holes.forEach((o, r) => {
      (o.x < 0 || o.y < 0) && n.push(new v({
        message: `Hole ${r + 1}: Position cannot be negative`,
        type: "error"
      })), o.diameter <= 0 && n.push(new v({
        message: `Hole ${r + 1}: Diameter must be positive`,
        type: "error"
      }));
    }) : i === "hingeHoles" ? this.hingeHoles.forEach((o, r) => {
      o.position < 0 && n.push(new v({
        message: `Hinge ${r + 1}: Position cannot be negative`,
        type: "error"
      }));
    }) : i === "corners" ? this.corners.forEach((o, r) => {
      o.size <= 0 && n.push(new v({
        message: `Corner ${r + 1}: Size must be positive`,
        type: "error"
      }));
    }) : i === "grooves" ? this.grooves.forEach((o, r) => {
      o.width <= 0 && n.push(new v({
        message: `Groove ${r + 1}: Width must be positive`,
        type: "error"
      })), o.depth <= 0 && n.push(new v({
        message: `Groove ${r + 1}: Depth must be positive`,
        type: "error"
      })), e && o.depth >= (e.t || 1 / 0) && n.push(new v({
        message: `Groove ${r + 1}: Depth cannot exceed material thickness`,
        type: "error"
      }));
    }) : (n.push(...this.validate(e, "holes", s)), n.push(...this.validate(e, "hingeHoles", s)), n.push(...this.validate(e, "corners", s)), n.push(...this.validate(e, "grooves", s))), i || (this.issues = n), n;
  }
  /**
  * Add a hole
  */
  addHole(e) {
    this.holes.push(e instanceof Re ? e : new Re(e)), this.validate();
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
    this.hingeHoles.push(e instanceof ai ? e : new ai(e)), this.validate();
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
    const i = e instanceof It ? e : new It(e);
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
    this.grooves.push(e instanceof oi ? e : new oi(e)), this.validate();
  }
  /**
  * Remove a groove by index
  */
  removeGroove(e) {
    return e >= 0 && e < this.grooves.length ? (this.grooves.splice(e, 1), this.validate(), !0) : !1;
  }
  /**
  * Get all hinge holes as individual Hole objects
  */
  getAllHingeHoles(e) {
    const i = [];
    return this.hingeHoles.forEach((s) => {
      this.generateHingeHoles(s, e).forEach((o) => {
        i.push(o instanceof Re ? o : new Re(o));
      });
    }), i;
  }
  /**
  * Generate individual holes from a hinge hole set
  */
  generateHingeHoles(e, i) {
    const s = [];
    if (e.numHoles <= 0)
      return s;
    const n = e.numHoles > 1 ? (e.hingeLength - 2 * e.outerSpacing) / (e.numHoles - 1) : 0, o = i?.l || i?.longSide || 0, r = i?.w || i?.shortSide || 0;
    for (let a = 0; a < e.numHoles; a++) {
      const l = e.outerSpacing + a * n;
      let c, d;
      switch (e.side) {
        case "l1":
          c = e.distanceFromEdge, d = e.position + l;
          break;
        case "l2":
          c = o - e.distanceFromEdge, d = e.position + l;
          break;
        case "w1":
          c = e.position + l, d = e.distanceFromEdge;
          break;
        case "w2":
          c = e.position + l, d = r - e.distanceFromEdge;
          break;
        default:
          c = 0, d = 0;
      }
      s.push({
        x: c,
        y: d,
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
    this.holes = [], this.hingeHoles = [], this.corners = [], this.grooves = [], this.validate();
  }
  // clone() method removed - using base class implementation
  // The base AutoSerializable.clone() properly returns 'this' type
  // toData() is now provided by AutoSerializable base class
  /**
  * Create empty machining
  */
  static empty() {
    return new ci();
  }
  /**
  * Create from plain data (for deserialization)
  */
  static fromData(e) {
    return new ci(e);
  }
  get allHoles() {
    const e = [...this.holes];
    return this.hingeHoles.forEach((i) => {
      this.generateHingeHoles(i, null).forEach((n) => {
        e.push(new Re(n));
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
}
function ic(t, e, i) {
  return i ? typeof t == "number" ? isNaN(t) ? null : t : typeof t == "string" ? t : null : e === "decimal" ? t ? E({ v: t, nf: "decimal" }) : null : t;
}
function sc(t, e, i, s = !1) {
  const n = s ? Object.fromEntries(Tt.map((a) => [a, 0])) : { l1: 0, l2: 0, w1: 0, w2: 0 };
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
    l != null && (n[a] = E({ v: l, nf: e }));
  }), n;
}
class Dn extends K {
  // Required: Define schema and computed properties for SchemaClass
  static schema = ei;
  static computedProperties = is;
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
      s[r] === null || s[r] === void 0 ? delete s[r] : s[r] !== void 0 && (s[r] = ic(s[r], i, n), s[r] === null && delete s[r]);
    s.name?.length ? s.name = Zn(s.name)?.toUpperCase() : s.name = "", s.material ? s.material = s.material.trim().toUpperCase() : s.material = "", typeof s.notes == "string" ? s.notes = s.notes.replace(/,/g, " ") : s.notes = "", s.trim && (s.trim = sc(s.trim, i, n, !0)), super(s), this.issues || (this.issues = []), this.warnings || (this.warnings = []);
  }
  /**
   * Get entity type
   */
  getType() {
    return y.InputRectangle;
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
    return li.call(this), e?.skipSchemaValidation || An.runValidation.call(this, ei, e), this.issues;
  }
  // isValid is provided as a computed property from validationBaseComputedProperties
  /**
   * Get trimmed dimensions
   */
  get trimmedDimensions() {
    const e = this.longSide, i = this.shortSide, s = E({ v: this.trim.l1 }) ?? 0, n = E({ v: this.trim.l2 }) ?? 0, o = E({ v: this.trim.w1 }) ?? 0, r = E({ v: this.trim.w2 }) ?? 0;
    return {
      name: this.name,
      id: this.id,
      autoId: this.autoId,
      l: e - (o + r),
      w: i - (s + n)
    };
  }
}
class Wu extends Dn {
  // Required: Define schema and computed properties for SchemaClass
  // Use getters to defer schema access and avoid circular dependency
  static get schema() {
    return Mt;
  }
  static get computedProperties() {
    return ua;
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
    this.extras || (this.extras = new se()), this.extras.banding = e;
  }
  get finish() {
    return this.extras?.finish;
  }
  set finish(e) {
    this.extras || (this.extras = new se()), this.extras.finish = e;
  }
  get planing() {
    return this.extras?.planing;
  }
  set planing(e) {
    this.extras || (this.extras = new se()), this.extras.planing = e;
  }
  get imageUpload() {
    return this.extras?.imageUpload;
  }
  set imageUpload(e) {
    this.extras || (this.extras = new se()), this.extras.imageUpload = e;
  }
  // Note: Options getters/setters removed - options now centralized in CalculationData.extrasOptions
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}, i = "decimal") {
    const s = {
      ...e,
      // orientationLock transform is now handled by Zod schema
      machining: e.machining || new ci({
        holes: [],
        hingeHoles: [],
        corners: []
      }),
      extras: e.extras || new se()
    };
    super(s, i);
  }
  /**
   * Get entity type
   */
  getType() {
    return y.InputShape;
  }
  /**
  * Apply part trim
  */
  applyPartTrim(e, i) {
    if (!this.readonly)
      if (e = E({ v: e }), this.trim) {
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
      for (let h = this.issues.length - 1; h >= 0; h--)
        this.issues[h].field.some((w) => c.includes(w[0])) && this.issues.splice(h, 1);
      for (let h = this.warnings.length - 1; h >= 0; h--)
        this.warnings[h].field.some((w) => c.includes(w[0])) && this.warnings.splice(h, 1);
      const d = e.fields.reduce((h, w) => {
        const b = w.split(".")[0];
        return h[b] = !0, h;
      }, {}), m = Mt.pick(d).safeParse(this.toData());
      if (!m.success) {
        const h = At(m.error);
        this.issues.push(...h);
      }
    } else {
      this.issues.length = 0, this.warnings.length = 0;
      const c = Mt.safeParse(this.toData());
      if (!c.success) {
        const d = At(c.error);
        this.issues.push(...d);
      }
    }
    if (e.skipBusinessValidation)
      return this.issues;
    if (this.isNew && e.fields)
      return this.issues;
    const { inputStockList: i = [], index: s = null, useInventory: n = !1, fields: o = null } = e, r = s ?? this.index ?? 0, a = (c) => !o || o.includes(c);
    a("l") && ge.l({
      item: this,
      index: r,
      category: ["part"]
    }), a("w") && ge.w({
      item: this,
      index: r,
      category: ["part"]
    }), a("t") && ge.t({
      item: this,
      index: r,
      category: ["part"],
      saw: e.saw
    }), a("q") && ge.q({
      item: this,
      index: r,
      category: ["part"]
    }), a("trim") && ge.trim({
      item: this,
      index: r,
      category: ["part"]
    }), !n && i.length > 0, a("customData") && ge.customData({
      item: this,
      index: r
    });
    const l = [];
    this.issues.forEach((c, d) => {
      c || l.push(d);
    });
    for (let c = l.length - 1; c >= 0; c--)
      this.issues.splice(l[c], 1);
    return this.issues;
  }
  /**
   * Convert to Shape instance
   */
  toShape(e) {
    const i = ls(this.toData(), Ql, e);
    return this.isSquare && (i.orientationLock = null), new mi(i);
  }
  changeStockType(e) {
    switch (e) {
      case "sheet":
      case "roll":
        this.orientationLock = "", e === "roll" && (this.t = null);
        break;
      case "linear":
        this.orientationLock = "", this.banding = Object.fromEntries(Ri.map((i) => [i, !1]));
        break;
    }
  }
}
class qu extends Dn {
  // Required: Define schema and computed properties for SchemaClass
  static schema = _t;
  static computedProperties = fa;
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
    return y.InputStock;
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
      const d = e.fields;
      for (let h = this.issues.length - 1; h >= 0; h--)
        this.issues[h].field.some((b) => d.includes(b[0])) && this.issues.splice(h, 1);
      for (let h = this.warnings.length - 1; h >= 0; h--)
        this.warnings[h].field.some((b) => d.includes(b[0])) && this.warnings.splice(h, 1);
      const p = this.toData();
      console.log("[InputStock.validate] Field-level validation requested for fields:", e.fields), console.log("[InputStock.validate] Data to validate:", p);
      const m = e.fields.reduce((h, w) => {
        const b = w.split(".")[0];
        return h[b] = !0, h;
      }, {});
      try {
        const h = _t.pick(m);
        console.log("[InputStock.validate] Created partial schema for fields:", Object.keys(m));
        const w = h.safeParse(p);
        if (console.log("[InputStock.validate] Validation result:", w.success ? "SUCCESS" : "FAILED"), w.success)
          console.log("[InputStock.validate] No validation errors found");
        else {
          console.log("[InputStock.validate] Validation errors:", w.error.issues);
          const b = At(w.error);
          this.issues = [...this.issues, ...b];
        }
      } catch (h) {
        console.warn(`Failed to validate fields ${e.fields.join(", ")}:`, h);
      }
      this.isNew && (console.log("[InputStock.validate] Clearing isNew flag"), this.isNew = !1);
    } else {
      this.issues = [], this.warnings = [];
      const d = _t.safeParse(this.toData());
      if (!d.success) {
        const p = At(d.error);
        this.issues = p;
      }
    }
    if (e?.skipBusinessValidation)
      return this.issues;
    const o = n ?? this.index ?? 0, r = e?.fields, a = (d) => !r || r.includes(d);
    ["l", "w", "t"].forEach((d) => {
      a(d) && ge[d]({
        item: this,
        saw: s,
        index: o,
        category: ["stock"]
      });
    }), a("grain") && ge.grain({
      item: this,
      index: o,
      category: ["stock"]
    }), a("trim") && ge.trim({
      item: this,
      index: o,
      category: ["stock"]
    }), a("q") && ge.q({
      item: this,
      index: o,
      isWarning: !0,
      category: ["stock"]
    });
    const c = [];
    this.issues.forEach((d, p) => {
      d || c.push(p);
    });
    for (let d = c.length - 1; d >= 0; d--)
      this.issues.splice(c[d], 1);
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
    const o = ls(s, ec, e);
    return (i || this.saw) && (o.saw = i || this.saw), new ni(o);
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
class Uu extends K {
  // Required: Define schema and computed properties for SchemaClass
  static schema = ss;
  static computedProperties = pa;
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
    return y.InputUserGroup;
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
    this.clearValidation(), e.q !== void 0 && ge.q({ item: e, index: "index" in e && typeof e.index == "number" ? e.index : 0 }).filter((s) => s).forEach((s) => this.addIssue(s));
  }
  /**
  * Validate with actual shape data
  */
  validateWithShapes(e = []) {
    if (!e.length)
      throw new Error("A shapeList is required to validate an InputUserGroup.");
    const i = [...this.issues], s = this.findShapes(e), n = ge.groupShapeCount({
      item: this,
      index: 0,
      shapes: s,
      requiredCount: 2
    });
    if (i.push(...n), i.length)
      return i;
    if (this.positions?.length >= 2) {
      const o = ge.groupOverlap({
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
        const o = e.find((r) => !!(r.autoId === n || ke(r) && r.autoId === n || "id" in r && r.id === n));
        o && (ke(o) || fe(o)) && s.push(o);
      }
      return s.length < this.shapeIds.length && this.addIssue(new v({
        message: "Could not find all shapes in the shape list",
        type: "error"
      })), s;
    }
    if (!this.shapes.length)
      return [];
    const i = [];
    for (const s of this.shapes) {
      const n = e.find((o) => !!(o.autoId === s || String(o.autoId) === String(s) || "id" in o && (o.id === s || String(o.id) === String(s)) || ke(o) && (o.autoId === s || String(o.autoId) === String(s))));
      n && (ke(n) || fe(n)) && i.push(n);
    }
    return i;
  }
  /**
   * Populate parent IDs from shape list IDs
   */
  populateParentID(e) {
    e?.length && this?.shapeIds?.length && (this.shapes = this.shapeIds.map((i) => {
      const s = e.find((n) => n.autoId === i || ke(n) && n.autoId === i);
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
      const w = e.filter((T) => ke(T) || fe(T)), b = this.validateWithShapes(w);
      if (b.filter((T) => T.type === "error").length > 0)
        throw new Error(`Cannot create Group: ${b[0].message}`);
    }
    const o = this.findShapes(e || []);
    if (o.length === 0)
      throw new Error("No shapes found for Group creation");
    const r = o.map((w) => ke(w) ? w.toShape() : w), a = r[0];
    r.forEach((w) => {
      if (e && Array.isArray(e)) {
        const b = e.findIndex((T) => "group" in T && T.group?.inUserGroup ? !1 : "parentId" in T && "parentId" in w && T.parentId === w.parentId || "id" in T && "id" in w && T.id === w.id);
        b !== -1 && e.splice(b, 1);
      }
      "group" in w && w.group && (w.group.inUserGroup = !0);
    });
    let l = this.positions?.length ? this.positions.map((w) => {
      const b = o.find((g) => g.autoId === w.autoId), T = b ? r[o.indexOf(b)] : r.find((g) => g.autoId === w.autoId);
      return {
        autoId: T?.autoId || w.autoId,
        x: w.x ?? 0,
        y: w.y ?? 0,
        rot: T?.rot ?? 0
      };
    }) : void 0, c = 0, d = 0;
    if (l?.length) {
      let w = 1 / 0, b = 1 / 0;
      for (const g of l)
        w = Math.min(w, g.x), b = Math.min(b, g.y);
      (w !== 0 || b !== 0) && (l = l.map((g) => ({
        ...g,
        x: g.x - w,
        y: g.y - b
      })));
      const T = n?.bladeWidth ?? 0;
      if (T > 0) {
        const g = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Set();
        for (const H of l) {
          const oe = r.find((M) => M.autoId === H.autoId);
          if (oe)
            for (const M of l)
              H.autoId !== M.autoId && (Math.abs(H.x + oe.l - M.x) < 0.01 && g.add(H.x + oe.l), Math.abs(H.y + oe.w - M.y) < 0.01 && F.add(H.y + oe.w));
        }
        if (g.size || F.size) {
          const H = [...g].sort((M, te) => M - te), oe = [...F].sort((M, te) => M - te);
          l = l.map((M) => ({
            ...M,
            x: M.x + H.filter((te) => M.x >= te).length * T,
            y: M.y + oe.filter((te) => M.y >= te).length * T
          }));
        }
      }
      for (const g of l) {
        const F = r.find((H) => H.autoId === g.autoId);
        F && (c = Math.max(c, g.x + F.l), d = Math.max(d, g.y + F.w));
      }
    } else {
      const w = n?.bladeWidth ?? 0;
      let b = 0;
      for (const T of r)
        b += T.l + w, d = Math.max(d, T.w);
      c = b - w, c < 0 && (c = 0);
    }
    const p = l, m = {
      autoId: this.autoId,
      shapes: r,
      userPositions: p,
      l: c,
      w: d,
      t: a?.t,
      material: a?.material,
      orientationLock: d > c ? "w" : "l",
      type: "user",
      q: 1,
      preventAutoRotation: !0,
      container: n,
      skipValidation: !0
    }, h = new gi(m);
    return n && "updateShapeSpacing" in h && typeof h.updateShapeSpacing == "function" && h.updateShapeSpacing(n), h;
  }
  /**
  * Convert to plain data object
  */
  toData() {
    const e = super.toData();
    return e.__entityType = y.InputUserGroup, e;
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
    if (!this.positions?.length)
      return { l: 0, w: 0 };
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
function On(t) {
  return {
    entities: /* @__PURE__ */ new Map(),
    stockList: [],
    shapeList: [],
    ...t
  };
}
function Xt(t, e) {
  if (Array.isArray(e))
    for (const i of e)
      i && typeof i == "object" && (i.autoId && t.entities.set(i.autoId, i), i.id && i.id !== i.autoId && t.entities.set(i.id, i));
}
function nc(t, e) {
  if (e) {
    if (e && typeof e == "object" && typeof e.getType == "function")
      return e;
    if (typeof e == "string")
      return t.entities.get(e);
    if (e && typeof e == "object" && e.autoId)
      return t.entities.get(e.autoId);
  }
}
function $i(t, e) {
  if (!t || typeof t != "object")
    return t;
  if (Array.isArray(t))
    return t.map((s) => $i(s, e));
  if (typeof t.getType == "function")
    return t;
  if (t.__ref && (t.id || t.autoId)) {
    const s = t.autoId || t.id;
    return nc(e, s) || t;
  }
  const i = { ...t };
  for (const s in i)
    Object.prototype.hasOwnProperty.call(i, s) && (i[s] = $i(i[s], e));
  return i;
}
function Cn(t, e, i) {
  if (t == null || t && typeof t == "object" && typeof t.getType == "function")
    return t;
  if (Array.isArray(t))
    return t.every((a) => a && typeof a == "object" && typeof a.getType == "function") ? t : t.map((a) => Cn(a, e));
  if (!t || typeof t != "object" || !t.__entityType && !t.__ref && !t.type)
    return t;
  const s = t.__entityType;
  e?.preventAutoRotation && s && (s === y.Rectangle || s === y.Placeable || s === y.Container || s === y.Shape || s === y.Group || s === y.Offcut || s === y.Stock || s === y.Segment) && (t.preventAutoRotation = !0), e && (t.__context = e);
  const n = t.__ref || s, o = $t();
  if (n && o.has(n)) {
    const r = o.get(n), { __ref: a, __entityType: l, __context: c, ...d } = t, p = new r(d);
    return p.issues && Array.isArray(p.issues) && (p.issues = p.issues.map((m) => m instanceof v ? m : v.fromData(m, p))), p.warnings && Array.isArray(p.warnings) && (p.warnings = p.warnings.map((m) => m instanceof v ? m : v.fromData(m, p))), p;
  }
  return delete t.__context, t;
}
function lt(t, e) {
  if (e || (e = On()), Array.isArray(t)) {
    const n = [];
    for (const o of t) {
      const r = lt(o, e);
      n.push(r), r && typeof r == "object" && (r.autoId || r.id) && Xt(e, [r]);
    }
    return n;
  }
  if (t && typeof t == "object" && typeof t.getType == "function")
    return (t.autoId || t.id) && Xt(e, [t]), t;
  const i = $i(t, e), s = Cn(i, e);
  return s && typeof s == "object" && (s.autoId || s.id) && Xt(e, [s]), s;
}
function Hu(t, e) {
  const i = On(e), s = t?.saw ? lt(t.saw, i) : void 0;
  s && Xt(i, [s]);
  const n = t?.stockList ? lt(t.stockList, i) : [];
  n.length > 0 && (i.stockList = n);
  const o = Array.isArray(t?.shapeList) ? t.shapeList.map((d) => !d || typeof d != "object" ? d : (d.added === !0 || typeof d.x == "number" && typeof d.y == "number") && d.preventAutoRotation !== !0 ? { ...d, preventAutoRotation: !0 } : d) : t?.shapeList, r = o ? lt(o, i) : [];
  r.length > 0 && (i.shapeList = r);
  const a = t?.cutList ? lt(t.cutList, i) : [], l = t?.segmentList ? lt(t.segmentList, i) : [];
  l.length > 0 && (i.segmentList = l);
  const c = t?.offcuts ? lt(t.offcuts, i) : [];
  return {
    saw: s,
    stockList: n,
    shapeList: r,
    cutList: a,
    segmentList: l,
    offcuts: c,
    context: i
  };
}
function Ku(t, e = [], i) {
  return t?.length ? e?.length ? t.map((n) => rc(n, e, i)).filter((n) => Q(n)) : [] : [];
}
function rc(t, e, i) {
  if (t.type === "user") {
    const n = e.find((o) => o.id === t.id);
    n && (e = n.shapes);
  }
  t.container = i;
  let s = [];
  t.shapes && (s = t.shapes.map((n) => {
    if (n && n.__ref && (n.autoId || n.id)) {
      const o = n.autoId || n.id;
      return e.find((r) => r.autoId === o || r.id === o);
    }
    return n && n.id ? e.find((o) => o.id === n.id) : n;
  }).filter(Boolean)), t.shapes = s;
  try {
    const n = $t(), o = n.get("Group") || n.get(y.Group);
    if (o) {
      const r = new o(t);
      return r.shapes && Array.isArray(r.shapes) && r.shapes.forEach((a) => {
        a && typeof a == "object" && a.group && (a.group.reference = r, a.group.inGroup = !0, r.added && (a.group.addedAsGroup = r.id || r.autoId));
      }), r;
    }
    return !1;
  } catch {
    return !1;
  }
}
function Yu(t, e) {
  st() && (t.stocks && t.stocks.forEach((i, s) => {
    Fe(i) || console.warn(`[${e}] Stock at index ${s} is not a proper Stock instance:`, i);
  }), t.shapes && t.shapes.forEach((i, s) => {
    !Ki(i) && !Q(i) && console.warn(`[${e}] Shape at index ${s} is not a proper Shape/Group instance:`, i);
  }), t.segments && t.segments.forEach((i, s) => {
    xt(i) || console.warn(`[${e}] Segment at index ${s} is not a proper Segment instance:`, i);
  }), t.groups && t.groups.forEach((i, s) => {
    Q(i) || console.warn(`[${e}] Group at index ${s} is not a proper Group instance:`, i);
  }), t.inputUserGroups && t.inputUserGroups.forEach((i, s) => {
    tn(i) || console.warn(`[${e}] InputUserGroup at index ${s} is not a proper InputUserGroup instance:`, i);
  }));
}
function Zu(t, e) {
  return Math.random() * (e - t) + t;
}
function Cs(t, e) {
  if (!de(t.stockLock) || Array.isArray(t.stockLock) && !t?.stockLock?.length)
    return !0;
  if (Array.isArray(t.stockLock)) {
    if (t.stockLock.includes(e.parentId))
      return !0;
  } else if (t.stockLock === e.parentId)
    return !0;
  return !1;
}
function Xu(t, e = null, i = "filter", s = !1) {
  if (!t?.length)
    return [];
  function n(o) {
    if (s === !0)
      return o.added;
    if (s === !1)
      return !o.added;
    if (s === null)
      return !0;
  }
  if (e) {
    if (e?.saw?.stockType === "linear")
      return t[i]((o) => n(o) && !o.group?.inGroup && Cs(o, e) && In(o, e, e.saw));
    if (e?.saw?.stockType !== "roll") {
      const o = Za(e);
      return e && Fe(e) ? t[i]((r) => n(r) && !r.group?.inGroup && Cs(r, e) && r.willItFit(e, null, o)) : t[i]((r) => n(r) && !r.group?.inGroup && r.willItFit(e, null, o));
    }
  }
  return t[i]((o) => n(o) && !o.group?.inGroup);
}
function Gt(t) {
  const e = t.parentId;
  if (e && e !== "clone" && !e.startsWith("clone."))
    return e;
  const i = t.autoId ?? "", s = i.indexOf(".");
  return `auto:${s === -1 ? i : i.slice(0, s)}`;
}
function Ju(t, e = null) {
  const i = t.filter((o) => !o?.unusable && (e === null || o.used === e)), s = /* @__PURE__ */ new Map();
  for (const o of i) {
    const r = Gt(o);
    s.has(r) || s.set(r, o);
  }
  return Array.from(s.values());
}
function Qu(t, e = null) {
  function i(n) {
    if (e === !0)
      return n.used;
    if (e === !1)
      return !n.used;
    if (e === null)
      return !0;
  }
  t.sort((n, o) => n.material && o.material && n.material !== o.material ? n.material.localeCompare(o.material) : n.t && o.t && n.t !== o.t ? n.t - o.t : n.id.localeCompare(o.id));
  const s = /* @__PURE__ */ new Map();
  for (const n of t) {
    if (!i(n))
      continue;
    const o = `${n.l}-${n.w}-${n.t}-${n.material}`;
    s.has(o) || s.set(o, n);
  }
  return Array.from(s.values());
}
function ef(t, e, i) {
  const s = t.filter((o) => o[e] === 0), n = e === "y" ? "l" : "w";
  return s.reduce((o, r, a) => a > 0 ? o + r[n] + i : o + r[n], 0);
}
function oc(t, e, i) {
  if (e.length <= 1)
    return t;
  const s = cc(e, i), n = t.reduce((a, l) => (a[l.id] = uc(l, s), a), {}), o = Math.min(...Object.values(n));
  return t.filter((a) => !a.added && n[a.id] === o);
}
function ac(t, e) {
  const i = Gt(e);
  return t.filter((s) => Gt(s) === i).length;
}
function lc(t, e) {
  const i = Gt(e), s = t.filter((n) => n.used && Gt(n) === i).length;
  return e.q - s;
}
function tf(t, e) {
  return ac(t, e) < e.q;
}
function cc(t, e) {
  const i = {};
  return t.forEach((s) => i[s.parentId] = lc(e, s)), i;
}
function uc(t, e) {
  return t.stockLock.reduce((s, n) => s + (e?.[n] ? e[n] : 0), 0);
}
function fc(t, e, i = !1) {
  const s = /* @__PURE__ */ new Set();
  let n = !1;
  for (let l = 0; l < t.length; l++) {
    if (s.has(t[l].autoId)) {
      n = !0;
      break;
    }
    s.add(t[l].autoId);
  }
  if (!n)
    return !1;
  const o = /* @__PURE__ */ new Map(), r = [], a = /* @__PURE__ */ new Set();
  for (let l = 0; l < t.length; l++) {
    const c = t[l], d = c.autoId;
    if (o.has(d)) {
      const p = o.get(d);
      p && (r.push(p.item), o.set(d, null)), r.push(c), a.add(l);
    } else
      o.set(d, { item: c, index: l });
  }
  if (r.length > 0) {
    const l = e ? ` [${e}]` : "", c = [...new Set(r.map((d) => d.autoId))];
    if (console.warn(`[duplicateIdsPresent]${l} Found duplicates!`), console.warn(`  Total items: ${t.length}`), console.warn(`  Duplicate autoIds: ${c.join(", ")}`), r.forEach((d) => {
      console.warn(`  ${d.id} (autoId=${d.autoId}): added=${d.added}, x=${d.x}, y=${d.y}, isGroup=${!!d.shapes}`);
    }), i) {
      const d = Array.from(a).sort((p, m) => m - p);
      for (const p of d)
        t.splice(p, 1);
      console.warn(`  Removed ${d.length} duplicate items. New length: ${t.length}`);
    }
  }
  return r.length > 0;
}
function sf(t, e) {
  return t.filter((i) => i.l >= e && i.w >= e);
}
function dc(t, e) {
  if (t.stock?.autoId !== e.stock?.autoId)
    return !1;
  const i = t.x, s = t.x + t.l, n = t.y, o = t.y + t.w, r = e.x, a = e.x + e.l, l = e.y, c = e.y + e.w;
  return !(s <= r || // shape1 is completely to the left of shape2
  a <= i || // shape2 is completely to the left of shape1
  o <= l || // shape1 is completely below shape2
  c <= n);
}
function nf(t) {
  const e = [], i = t.filter((s) => s.added);
  for (let s = 0; s < i.length; s++)
    for (let n = s + 1; n < i.length; n++)
      dc(i[s], i[n]) && e.push({
        shape1: i[s],
        shape2: i[n]
      });
  return e;
}
function rf(t) {
  t.sort(Ne.groupPlacementOrder);
  for (let e = 0; e < t.length; e++)
    t[e].placementOrder = e;
}
function of(t, e) {
  e && t && (e.score = t.score, e.duplicatePattern = t.id);
}
function Ni(t, e) {
  if (t?.length)
    for (let i = t.length; i--; ) {
      const s = t[i];
      pc(s, e);
    }
}
function pc(t, e) {
  if (!t.isSquare) {
    if (t.shortSide === e.w && t.rot) {
      if (!le(t, 0, e))
        throw new Error("could not rotate shape correctly for subset calculation");
    } else if (!e.isSquare && t.longSide === e.w && !t.rot && !le(t, 1, e))
      throw new Error("could not rotate shape correctly for subset calculation");
  }
}
function af(t, e, i = "l", s = null) {
  if (!t || !e?.length)
    return !1;
  e.forEach((m) => m.orientationLock = null), Ni(e, t);
  const n = t.bladeWidth, o = [];
  let r = this.config.subset.efficiency.shuffles;
  const a = e.length === 1 || e[0].parentId === e[e.length - 1].parentId;
  Ie("linear.shuffles.single", a, { shapes: e.length, shuffles: r }), a && (r = 1), i === "l" ? e.sort(Ne.LD) : e.sort(Ne.WD), s || (s = e[0]);
  function l(m, h = !0) {
    h && Ne.shuffle(e);
    const w = Bi(n, e, t.getStock, i, t[i], !1, s);
    w !== !1 && m.push(w);
  }
  l(o, !1);
  for (let m = r; m--; )
    l(o);
  if (o.sort((m, h) => h.score.efficiency - m.score.efficiency), !o.length)
    return !1;
  const c = o[0];
  let d = null;
  const p = c.totalLength + n < t.l;
  return Ie("linear.offcut", p, { stock: t.getStock?.id }), p && (d = t.l - (c.totalLength + n), c.offcut = d), c;
}
function hc(t, e, i, s = "l", n, o = !1, r = this.config.subset.efficiency.shuffles, a = null, l = this.config.subset.efficiency.limit) {
  if (!e?.length)
    return !1;
  const c = [], d = [
    (b, T) => T[s] - b[s],
    // Largest first
    (b, T) => b[s] - T[s],
    // Smallest first
    (b, T) => T[s] / T.area - b[s] / b.area,
    // Best dimension-to-area ratio
    (b, T) => T.area - b.area,
    // Largest area first
    (b, T) => b.area - T.area
    // Smallest area first
  ];
  let p;
  const m = () => (p === void 0 && (p = e.every((b, T, g) => T === 0 || b.isIdentical(g[T - 1]))), p);
  if (!o) {
    const b = e.reduce((g, F) => g + F[s] + t, 0) - t, T = b <= n;
    if (Ie("subset-sum.fits-target", T, { shapes: e.length }), T)
      return Ie("subset-sum.fits-target.efficient", b / n > l), b / n > l ? {
        totalLength: b,
        shapes: e,
        firstShape: e[0],
        firstShapeRotation: e[0].rot,
        stock: i,
        cutType: "guillotine",
        type: "subset",
        score: {
          efficiency: b / n,
          totalShapesPlaced: e.length
        },
        area: e.reduce((g, F) => g + F.area, 0)
      } : !1;
  }
  const h = Bi(t, e, i, s, n, o, a);
  if (h !== !1) {
    c.push(h);
    const b = h.score.efficiency > 0.95 && e.length > 10;
    if (Ie("subset-sum.early-terminate", b, { eff: h.score.efficiency, shapes: e.length }), b)
      return h;
  }
  if (Ie("subset-sum.all-identical", m(), { shapes: e.length }), m())
    return c[0] || !1;
  const w = Math.min(r, d.length);
  Ie("subset-sum.resort-strategies", w, { shapes: e.length });
  for (let b = 0; b < w; b++) {
    const T = [...e];
    T.sort(d[b % d.length]);
    const g = Bi(t, T, i, s, n, o, a);
    if (g !== !1 && (c.push(g), g.score.efficiency > 0.98 && e.length > 30))
      break;
  }
  return c.sort((b, T) => T.score.efficiency - b.score.efficiency), c[0] || !1;
}
function Bi(t, e, i, s = "l", n, o = !1, r = null) {
  if (!n || n <= 0 || e?.length < 1)
    return !1;
  let a = 0;
  const l = [];
  if (r || (r = e[0]), l.push(r), a = r[s], a > n)
    return !1;
  const c = e.findIndex((d) => d.id === r?.id);
  c > -1 && e.splice(c, 1);
  for (const d of e) {
    const p = d[s], m = d.getMinSpacing(i.saw, !0);
    if (!(a + t + m + p > n) && (a += t + m + p, l.push(d), a + t + m >= n))
      break;
  }
  if (r && e.splice(c, 0, r), !o && a <= n || o && a + t >= n && a <= n) {
    const d = a / n;
    return d > 1 && console.error("subset created effieciency > 1"), {
      type: "subset",
      totalLength: a,
      shapes: l,
      stock: i,
      cutType: "guillotine",
      score: { efficiency: d, totalShapesPlaced: l.length },
      firstShape: r,
      firstShapeRotation: r?.rot,
      area: l.reduce((p, m) => p + m.area, 0)
    };
  }
  return !1;
}
function mc(t, e, i = null, s = "l", n = !0, o = !0) {
  if (!t?.length)
    return;
  if (!e)
    throw new Error("positionShapes requires stock");
  const r = s === "l" ? "x" : "y", a = s === "l" ? "y" : "x";
  let l = 0;
  Q(i) ? Ni(t, i) : Ni(t, i ?? e), o && (s === "l" ? t.sort(Ne.LDIDA) : t.sort(Ne.WDIDA)), t.forEach((c, d) => {
    c[r] = i ? i[r] + l : l, i && (c[a] = i[a]), l += c[r === "x" ? "l" : "w"] + e.bladeWidth + c.getMinSpacing(e.saw, !0), me([() => re().toBeTypeOf("number")]), Q(i) ? c.group.placementOrder = d : c.placementOrder = d, n && c.addToStock(e);
  });
}
function lf(t = null, e, i, s = "l") {
  if (!e)
    return [];
  if (!t)
    return [];
  i.sort(Ne.ID);
  const n = t.shapes;
  return mc(n, e, null, s), n;
}
function cf(t, e, i) {
  ti("subset", `guillotine subset for segment ${t.id}`);
  function s(I, P = []) {
    const { shapes: R } = o(I);
    return R.filter((k) => {
      if (k.added || P.find((A) => A.id === k.id))
        return !1;
      if (k.orientationLock)
        return L.equalTo(k[h], I) ? L.lessThanOrEqualTo(k.l, t.l) && L.lessThanOrEqualTo(k.w, t.w) : !1;
      if (L.equalTo(k.l, I) || L.equalTo(k.w, I)) {
        const A = L.equalTo(k.l, I) ? k.w : k.l;
        return L.lessThanOrEqualTo(A, t[t.cutPreference]);
      }
      return !1;
    });
  }
  function n(I, P, R, k = null) {
    let A = s(I, P);
    if (k) {
      const Y = A.find((X) => X.parentId === k.parentId);
      if (Y)
        return Y;
    }
    if (!A.length)
      return !1;
    const O = [];
    for (const Y of A) {
      const X = Y.l === I ? Y.w : Y.l;
      R.includes(X) && O.push(Y);
    }
    return A = O.length ? O : A, kn(A);
  }
  function o(I) {
    const P = I;
    return ae.has(P) || ae.set(P, { shapes: [], priorities: [] }), ae.get(P);
  }
  function r(I = null) {
    function P(k, A, O) {
      const { shapes: B, priorities: Y } = o(A);
      B.includes(k) || (B.push(k), Y.push(O));
    }
    if (!T?.length)
      return ae;
    const R = t.getStock;
    for (const k of T) {
      let A = k.getPriority(R);
      I && k.parentId !== I.parentId && (A = 0);
      const O = Ye(h);
      if (!k.orientationLock)
        k.longSide <= b && k.shortSide <= t[O] && P(k, k.l, A), !k.isSquare && k.shortSide <= b && k.longSide <= t[O] && P(k, k.w, A);
      else {
        const B = wn(k, t.getStock);
        if (me([() => re(B.length).toBe(1)]), le(k, B[0], t.getStock) === !1)
          throw new Error("could not rotate shape correctly for subset calculation");
        const X = Ye(h);
        k[h] <= b && k[X] <= t[X] && P(k, k[h], A);
      }
    }
    return ae;
  }
  let a = 0, l = !1;
  const c = () => {
    if (!l) {
      let P = 2166136261;
      const R = `${t.id}|${b}|${Array.from(ae.keys()).sort((k, A) => k - A).join(",")}`;
      for (let k = 0; k < R.length; k++)
        P ^= R.charCodeAt(k), P = Math.imul(P, 16777619);
      a = P >>> 0, l = !0;
    }
    a = a + 1831565813 >>> 0;
    let I = a;
    return I = Math.imul(I ^ I >>> 15, I | 1), I ^= I + Math.imul(I ^ I >>> 7, I | 61), ((I ^ I >>> 14) >>> 0) / 4294967296;
  };
  function d() {
    const I = [], P = Array.from(ae.entries()).map(([k, { shapes: A, priorities: O }]) => ({
      dimension: k,
      count: A.length,
      totalPriority: A.length * Math.max(...O, 0)
    }));
    let R = P.reduce((k, { totalPriority: A }) => k + A, 0);
    for (; P.length > 0; )
      if (R <= 0 || !Number.isFinite(R)) {
        const k = [];
        P.forEach(({ dimension: A, count: O }) => {
          k.push(...Array(O).fill(A));
        });
        for (let A = k.length - 1; A > 0; A--) {
          const O = Math.floor(c() * (A + 1));
          [k[A], k[O]] = [k[O], k[A]];
        }
        I.push(...k);
        break;
      } else {
        const k = c() * R;
        let A = 0, O = -1;
        for (let Pe = 0; Pe < P.length; Pe++)
          if (A += P[Pe].totalPriority, A > k) {
            O = Pe;
            break;
          }
        O === -1 && (O = Math.floor(c() * P.length));
        const { dimension: B, count: Y, totalPriority: X } = P[O];
        I.push(B), P[O].count--, P[O].totalPriority -= X / Y, P[O].count === 0 ? (R -= X, P.splice(O, 1)) : R -= X / Y;
      }
    if (Me !== null) {
      const k = I.filter((O) => O <= Me), A = I.filter((O) => O > Me);
      return [...k, ...A];
    }
    return I;
  }
  function p(I, P, R, k, A, O, B) {
    return R += I + P, k.push(I), A.push(O.l === I ? O.w : O.l), B.push(O), R;
  }
  function m(I = null) {
    if (!T?.length)
      return [];
    if (!ae.size)
      return [];
    const P = this.config.guillotine.stripShapes, R = P.largeJobThreshold > 0 && ae.size > P.largeJobThreshold;
    Ie("subset-sum.scaled-mode", R, { dims: ae.size, threshold: P.largeJobThreshold });
    const k = /* @__PURE__ */ new Map();
    let A = 0;
    const O = [], B = [], Y = [];
    let X = null, Pe = !0;
    const J = (z) => {
      A = 0, O.length = 0, B.length = 0, Y.length = 0, X = null, Pe = !0;
      for (const q of z) {
        if (Pe ? X = q : X = w + q, A + X > b)
          continue;
        const ue = n(q, B, Y, I);
        ue && (A = p(q, Pe ? 0 : w, A, O, Y, ue, B), Pe = !1);
      }
      if (!A)
        return;
      const V = A / b;
      me([() => re().to.lessThanOrEqual(1)]);
      const be = this.config.priority.forceStrand, Oe = be && !!I && B.some((q) => q.parentId === I.parentId);
      if (be && I && !Oe || V < this.config.subset.efficiency.limit && !Oe)
        return;
      const we = B.map((q, ue) => ue);
      we.sort((q, ue) => O[ue] !== O[q] ? O[ue] - O[q] : Y[ue] - Y[q]);
      const ut = we.map((q) => O[q]), Ot = we.map((q) => B[q]);
      me([
        () => re(fc(Ot)).toBe(!1)
      ]), k.set(ut.join("-"), {
        usedDimensions: ut,
        usedShapes: Ot,
        efficiency: V,
        target: b,
        totalLength: A,
        priorityShape: I ? I.parentId : null
      });
    }, ce = Array.from(ae.keys()).sort((z, V) => V - z), ye = [...ce].slice().reverse();
    let he = ce;
    if (R && P.anchorClusterTolerance > 0) {
      const z = P.anchorClusterTolerance;
      he = [];
      let V = 1 / 0;
      for (const be of ce)
        V - be < z || (he.push(be), V = be);
    }
    Ie("subset-sum.anchor-cluster", he.length < ce.length, { from: ce.length, to: he.length });
    for (const z of he)
      z > b || (J([z, ...ce.filter((V) => V !== z)]), J([z, ...ye.filter((V) => V !== z)]));
    const bi = !!this.config.experimental?.subsetSumEnumeration && !R;
    if (Ie("subset-sum.enumeration", bi, { target: b, scaledMode: R }), bi) {
      let Ot = function(q, ue, ft, dt) {
        if (we.length >= ut)
          return !1;
        const fs = ft + Math.max(0, dt - 1) * w;
        if (q >= z.length) {
          if (fs >= be && fs <= Oe && dt >= 1) {
            const Se = [];
            for (let at = 0; at < ue.length; at++)
              for (let Ct = 0; Ct < ue[at]; Ct++)
                Se.push(z[at].dim);
            we.push(Se);
          }
          return !0;
        }
        let ds = ft, ps = dt;
        for (let Se = q; Se < z.length; Se++)
          ds += z[Se].dim * z[Se].maxCount, ps += z[Se].maxCount;
        if (ds + Math.max(0, ps - 1) * w < be)
          return !0;
        const { dim: Mn, maxCount: _n } = z[q];
        for (let Se = 0; Se <= _n; Se++) {
          const at = ft + Se * Mn, Ct = dt + Se;
          if (at + Math.max(0, Ct - 1) * w > Oe)
            break;
          if (ue[q] = Se, !Ot(q + 1, ue, at, Ct))
            return !1;
        }
        return ue[q] = 0, !0;
      };
      const z = [];
      for (const [q, { shapes: ue }] of ae) {
        if (q > b)
          continue;
        const ft = ue.filter((dt) => !dt.added).length;
        ft > 0 && z.push({ dim: q, maxCount: ft });
      }
      z.sort((q, ue) => ue.dim - q.dim);
      const be = this.config.subset.efficiency.limit * b, Oe = b, we = [], ut = 3e3;
      Ot(0, new Array(z.length).fill(0), 0, 0);
      for (const q of we)
        J(q), q.length > 1 && J([...q].reverse());
    }
    for (let z = 0; z < this.config.subset.guillotine.shuffles; z++)
      J(d());
    if (k.size === 0)
      return [];
    const wi = Array.from(k.values());
    wi.sort((z, V) => z.efficiency > V.efficiency ? -1 : z.efficiency < V.efficiency ? 1 : V.usedDimensions.length - z.usedDimensions.length);
    let ct = typeof P.iterations == "number" ? P.iterations : 1;
    R && P.largeJobIterations > 0 && (ct = Math.min(ct, P.largeJobIterations)), Ie("subset-sum.scaled-iterations", R && P.largeJobIterations > 0, { iterationsLimit: ct, cap: P.largeJobIterations });
    const Si = Math.max(20, ct + 4);
    Ie("linear.strip.iterations-expand", Si > 20, { examinePoolSize: Si, iterationsLimit: ct, candidates: wi.length });
    const us = wi.slice(0, Si);
    if (!us.length)
      return [];
    const Dt = us.slice(0, ct);
    return Dt.length ? (Dt.forEach((z) => {
      z.usedShapes.forEach((V, be) => {
        const Oe = z.usedDimensions[be];
        me([() => re([V.l, V.w].includes(Oe)).toBe(!0)]);
        let we;
        V.isSquare ? we = 0 : V.longSide === Oe ? we = t.getStock.cutPreference === "l" ? 1 : 0 : we = t.getStock.cutPreference === "l" ? 0 : 1, V.guillotineState || (V.guillotineState = new qe({})), V.guillotineState.setStripShapeBatchGroup(te, {
          stockId: t.getStock.autoId,
          dimension: Oe,
          rot: we,
          order: be,
          //by this point sorting should have taken place
          priorityShape: z.priorityShape
        });
      }), te++, me([
        () => {
          const V = z.usedDimensions.reduce((we, ut) => we + ut, 0), be = (z.usedDimensions.length - 1) * w, Oe = V + be;
          return re(L.lessThanOrEqualTo(Oe, b)).toBe(!0);
        },
        () => re(
          // priority-seeded strips may sit below the efficiency limit on
          // purpose (a giant anchors the board; recursion fills its column).
          Dt.every((V) => V.efficiency >= this.config.subset.efficiency.limit || !!V.priorityShape)
        ).toBe(!0),
        () => re(Dt.every((V) => V.usedDimensions.length === V.usedShapes.length)).toBe(!0)
      ]);
    }), Dt) : [];
  }
  const h = Ye(t.cutPreference), w = t.getStock.bladeWidth, b = t[h];
  me([() => re().toBeTypeOf("number")]);
  const T = oc(t.shapes.filter((I) => !Q(I)), e, i), g = t.getStock, F = t.cutPreference, H = g[F], oe = this.config.guillotine.firstShapeFullSizeThreshold;
  T.sort((I, P) => {
    const R = I[F] >= oe * H, k = P[F] >= oe * H;
    if (R && !k)
      return -1;
    if (k && !R)
      return 1;
    const A = P.getPriority(g) - I.getPriority(g);
    if (A !== 0)
      return A;
    const O = I.id.toString().split("."), B = P.id.toString().split(".");
    return O[0] !== B[0] ? parseInt(O[0]) - parseInt(B[0]) : parseInt(O[1]) - parseInt(B[1]);
  });
  const M = [];
  let te = 0;
  const ae = /* @__PURE__ */ new Map(), je = g.saw.guillotineOptions?.limitStripDimensions !== !1;
  Ie("linear.strip.dimension-cap", je, { segment: t.id });
  const Me = je ? Ua(T, h, b) : null, pe = this.config.priority.enable && t.type === "root" && t.shapes.some((I) => I.getPriority(g) > 0);
  if (Ie("linear.strip.priority", pe ? "priority" : "normal", { segment: t.id }), pe)
    if (this.config.priority.forceStrand) {
      const I = Math.max(1, Math.min(t.shapes.length, this.config.guillotine.stripShapes.numPriorityShapes)), P = t.shapes.filter((B) => B.getPriority(g) > 0).sort((B, Y) => Y.getPriority(g) - B.getPriority(g)), R = 0.9, k = P.length ? P[0].getPriority(g) : 0, A = P.filter((B) => B.getPriority(g) >= k * R), O = [];
      for (const B of A) {
        if (O.length >= I)
          break;
        O.some((Y) => Y.parentId === B.parentId) || O.push(B);
      }
      O.length || O.push(t.shapes[0]);
      for (const B of O) {
        ae.clear(), r(B);
        const Y = m.call(this, B);
        M.push(...Y);
      }
    } else {
      const I = t.shapes[0];
      r(I);
      const P = Math.min(t.shapes.length, this.config.guillotine.stripShapes.numPriorityShapes);
      for (let R = 0; R < P; R++) {
        const k = m.call(this, I);
        M.push(...k);
      }
    }
  else {
    r();
    const I = m.call(this);
    M.push(...I);
  }
  return ti("subset", `${M.length} strip shape results ${M.map((I) => I.usedShapes.map((P) => P.id).join()).join(" | ")}`), M?.length ? M.length : 0;
}
function gc(t, e, i = null) {
  const s = /* @__PURE__ */ new Map();
  for (let n = t.length; n--; ) {
    const o = t[n], r = wn(o, e.getStock), a = o.shortSide, l = o.longSide;
    r.forEach((c) => {
      if (!o.willItFit(e, c))
        return;
      let d;
      !i || i === "l" ? d = c === 0 ? l : a : i === "w" && (d = c === 0 ? a : l), d && s.set(d, s.has(d) ? s.get(d) + 1 : 1);
    });
  }
  return s;
}
function yc(t) {
  const e = {};
  return t.forEach((i) => {
    i.shapeIds.forEach((s) => {
      const n = i.q || 1;
      e[s] ? e[s] += n : e[s] = n;
    });
  }), e;
}
function uf(t, e, i = !0) {
  const s = yc(t), n = [];
  for (const o in s) {
    const r = s[o], a = e.findIndex((d) => d.autoId === o), l = e[a], c = xn({
      item: null,
      // No specific item context for this validation
      index: a >= 0 ? a : 0,
      shapeId: o,
      requiredQuantity: r,
      availableQuantity: Number(l?.q ?? 0),
      shapeName: l?.name,
      shapeIndex: a >= 0 ? a : void 0
    });
    n.push(...c);
  }
  return i && t.forEach((o) => {
    const r = o.validateWithShapes(e);
    r?.length && n.push(...r);
  }), n;
}
function Ln(t) {
  const { shapes: e, container: i, targetSize: s, d: n, id: o, exact: r, groupDirection: a = "horizontal", firstShape: l = null, iterations: c, type: d = "position", tolerance: p = 1e-3, config: m } = t, h = c ?? m?.subset?.efficiency?.shuffles ?? 10;
  me([
    () => re().toBeGreaterThan(0)
  ]);
  const w = bc(e, a, n, i, p);
  if (w.length < 2)
    return !1;
  const b = { config: m }, T = hc.call(b, i.bladeWidth, w, i.getStock, Sc(a), s, r, h, l);
  if (!T)
    return !1;
  if (T?.shapes?.length > 1 && T?.totalLength) {
    let g;
    try {
      g = new gi({
        id: o,
        direction: a,
        shapes: T.shapes,
        container: i,
        type: d
      }), ti("groups", `[createGroup] Created group ${g.id} direction=${a} dims=${g.l}x${g.w} with ${g.shapes.length} shapes, [${g.shapes.map((F) => F.id).join()} for ${i.getType()} ${i.id}]`);
    } catch (F) {
      return console.error("group error", F), !1;
    }
    return g;
  }
  return !1;
}
function ff(t) {
  const { shapes: e, container: i, targetSize: s, exact: n = !1, direction: o = "l", firstShape: r = null, preventDuplicates: a = !1, tolerance: l, maxGroups: c, config: d, counters: p, type: m } = t, h = l ?? d?.groups?.tolerance ?? 0.05;
  if (!de(s))
    throw new Error("attempting to create a group with no target size");
  if (s <= 0)
    return console.warn(`Invalid targetSize ${s} - cannot create groups with zero or negative target size`), [];
  if (!de(i))
    throw new Error("attempting to create a group with no container");
  if (!e?.length || e.length < 2)
    return [];
  const w = En(o), b = Ye(o), T = w === "horizontal" ? i.w : i.l, g = i.getStock;
  let F = [...e], H = r;
  if (H)
    if (Qa(H, H[b], b, g) === !1)
      H = null;
    else {
      const I = H[b], P = I * (1 - h);
      let R = I * (1 + h);
      R > i[b] && (R = i[b]), F = e.filter((k) => !fe(k) || k.autoId === H.autoId ? !1 : As(k, P, R, b, g));
    }
  const oe = gc(F, i, b), M = Array.from(oe.keys()).filter((pe) => pe <= T).sort((pe, I) => I - pe);
  if (M.length === 0)
    return [];
  const te = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map();
  for (const pe of F) {
    const I = /* @__PURE__ */ new Map();
    for (const P of M) {
      const R = P * (1 - h);
      let k = P * (1 + h);
      k > i[b] && (k = i[b]);
      const A = As(pe, R, k, b, g);
      I.set(P, A);
    }
    ae.set(pe.autoId, I);
  }
  for (const pe of M) {
    const I = [];
    for (const P of F) {
      if (!fe(P))
        continue;
      ae.get(P.autoId)?.get(pe) && I.push(P);
    }
    te.set(pe, I);
  }
  const Je = [], je = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map();
  for (const pe of M) {
    if (c !== void 0 && Je.length >= c)
      break;
    const I = [];
    let P = te.get(pe).filter((R) => !je.has(R.autoId));
    if (!(P.length < 2)) {
      for (; P.length >= 2 && !(c !== void 0 && Je.length + I.length >= c); ) {
        let R, k = !1;
        if (I.length && !a) {
          const A = I[I.length - 1], O = A.shapes.slice(), B = /* @__PURE__ */ new Set(), Y = new Set(P.map((J) => J.autoId)), X = [];
          let Pe = !0;
          for (const J of O) {
            let ce = !1;
            if (Y.has(J.autoId) && !B.has(J.autoId)) {
              const ye = P.find((he) => he.autoId === J.autoId);
              ye && (X.push(ye), B.add(J.autoId), ce = !0);
            }
            if (!ce)
              for (const ye of P) {
                if (B.has(ye.autoId))
                  continue;
                const he = `${ye.autoId}-${J.autoId}`;
                if (Me.has(he) || Me.set(he, ye.isIdentical(J)), Me.get(he)) {
                  X.push(ye), B.add(ye.autoId), ce = !0;
                  break;
                }
              }
            if (!ce) {
              Pe = !1;
              break;
            }
          }
          if (Pe && X.length === O.length) {
            if (k = !0, A.positions?.length === X.length)
              for (let J = 0; J < X.length; J++) {
                const ce = X[J], ye = O[J], he = A.positions[J]?.rot ?? ye.rot;
                if (ce.rot !== he && !le(ce, he, i)) {
                  console.warn(`  Failed to rotate ${ce.id} to ${he} - skipping clone`), k = !1;
                  break;
                }
              }
            k && (me([
              () => re(X.every((J, ce) => {
                const ye = A.positions[ce]?.rot ?? O[ce].rot;
                return J.rot === ye;
              })).toBe(!0)
            ]), R = A.cloneWithNewShapes(X));
          }
        }
        if (!k) {
          let A = "g" + (typeof p?.group == "number" ? p.group : 0);
          m === "firstShape" && (A = "fs-" + A), R = Ln({
            shapes: P,
            container: i,
            targetSize: s,
            d: pe,
            id: A,
            exact: n,
            groupDirection: w,
            firstShape: H,
            tolerance: h,
            config: d,
            type: m
          });
        }
        if (R) {
          typeof p?.group == "number" && p.group++, I.push(R), R.shapes.forEach((O) => je.add(O.autoId));
          const A = [];
          for (const O of P)
            je.has(O.autoId) || A.push(O);
          if (P = A, P.length < 2)
            break;
        } else
          break;
      }
      Je.push(...I);
    }
  }
  return Je;
}
function df(t = [], e = []) {
  t.length && e.length && t.forEach((i) => {
    i.shapeIds = i.shapeIds.filter((s) => e.find((n) => n.autoId === s));
  });
}
function bc(t, e, i, s, n = 1e-3) {
  return t.filter((o) => {
    const r = ii(o, s);
    if (r) {
      const m = r === "w" ? 1 : 0;
      if (o.rot !== m && !le(o, m, s))
        return !1;
    }
    if (o.isSquare)
      return !0;
    const a = i * (1 - n), l = i * (1 + n), c = o.l >= a && o.l <= l, d = o.w >= a && o.w <= l;
    let p = null;
    if (c && d) {
      const m = Math.abs(o.l - i), h = Math.abs(o.w - i);
      p = m <= h ? "l" : "w";
    } else c ? p = "l" : d && (p = "w");
    if (p !== null) {
      const m = wc(p, e, o.rot), h = ii(o, s), w = m ? 1 : 0;
      return h && (h === "l" && w === 1 || h === "w" && w === 0) || !ve(o, m, s) ? !1 : le(o, m, s);
    }
    return !1;
  });
}
function wc(t, e, i) {
  return e === null ? t === "l" : t === (e === "vertical" ? "l" : "w") ? i === 1 : i === 0;
}
function En(t) {
  if (!["l", "w"].includes(t))
    throw new Error("incorrect direction value");
  if (t === "l")
    return "horizontal";
  if (t === "w")
    return "vertical";
}
function Sc(t) {
  if (!["horizontal", "vertical"].includes(t))
    throw new Error("incorrect groupDirection value");
  if (t === "horizontal")
    return "l";
  if (t === "vertical")
    return "w";
}
function xc(t, e, i) {
  return t.filter((s) => s.l === e[i] || s.w === e[i]);
}
function kc(t, e) {
  const i = Array.isArray(e) ? e : [e], s = /* @__PURE__ */ new Set();
  for (const n of i)
    if (n.shapes?.length)
      for (const o of n.shapes)
        s.add(o.autoId);
  return t.filter((n) => Q(n) || !s.has(n.autoId));
}
function Ic(t, e = "") {
  const i = /* @__PURE__ */ new Set();
  t.filter(Q).forEach((r) => {
    r.shapes?.forEach((a) => {
      i.add(a.autoId);
    });
  });
  const n = t.filter((r) => fe(r)).filter((r) => i.has(r.autoId)), o = e ? ` [${e}]` : "";
  re(n.length, `${o} Found ${n.length} shapes that exist both in groups and independently: ${n.map((r) => r.id || r.autoId).join(", ")}`).toBe(0);
}
function vc(t, e) {
  const i = [...t, e];
  i.sort((n, o) => (o.score?.total || 0) - (n.score?.total || 0));
  const s = i[0];
  if (s.score?.total && Q(s) && (s.score?.total ?? 0) > (e.bestScore?.total ?? 0))
    return e.setBestScore(s), e.bestScore.group = s, s;
}
function pf(t) {
  const { container: e, containerPlacedShapes: i, unplacedShapes: s, shape: n, point: o, config: r, scoreFunction: a } = t;
  if (s.length < 3)
    return;
  let l = !1;
  n.orientationLock || (l = !0, n.orientationLock = n.rot === 1 ? "w" : "l");
  let c = [], d = [];
  xt(e) ? d = [e.cutDirection] : d = e?.saw?.stockType === "roll" ? ["w"] : ["l", "w"];
  for (const h of d) {
    const w = Ye(h), b = h === "l" ? "x" : "y", T = e[h] - n[b] - e.bladeWidth;
    if (T <= 0)
      continue;
    const g = xc(s, n, w);
    if (g.length < 2)
      continue;
    const F = Ln({
      shapes: g,
      container: e,
      targetSize: T,
      d: n[w],
      id: "g" + n.id + "-" + n.rot + "-" + h.substring(0, 1),
      exact: !1,
      groupDirection: En(h),
      firstShape: n,
      iterations: 40,
      config: {
        subset: r.subset
      }
    });
    F && c.push(F);
  }
  c.sort((h, w) => w.efficiency - h.efficiency), c.length > r.sample.groupSize && (c = c.slice(0, r.sample.groupSize)), me([() => c.every((h) => !fe(h), "shapes in the groups array")]);
  for (const h of c)
    h.x = o.x, h.y = o.y, h.outOfBounds = h.x + h.l > e.l || h.y + h.w > e.w, !h.outOfBounds && (hl(h, i, e) || a(h, e, i, s, o));
  s.forEach((h) => h.resetGroupData());
  const p = vc(c, n), m = c.filter((h) => Q(h) && h !== p);
  return m.length > 0 && m.forEach((h) => {
    ti("groups", `  Destroying group ${h.id} (${h.shapes?.length || 0} shapes)`), h.destroy();
  }), p && xt(e) && (e.shapes.push(p), e.shapes = kc(e.shapes, p)), l && (n.orientationLock = null), p && xt(e) && me([
    () => Ic(e.shapes, "POSITION GROUPS")
  ]), p;
}
const Ut = [
  "#03171d",
  "#073b4c",
  "#118ab2",
  "#ef476f",
  "#ffd166",
  "#06d6a0"
];
function hf(t) {
  const e = (Math.trunc(t) % Ut.length + Ut.length) % Ut.length;
  return Ut[e];
}
const Pc = x({
  id: f(),
  name: f().max(200).default(""),
  colorIndex: u().int().min(0).default(0),
  grain: vt,
  thicknesses: D(u().positive()).default([])
}), Tc = x({
  id: f(),
  count: u(),
  name: f(),
  l: u(),
  w: u(),
  t: u(),
  material: f()
}), cs = x({
  inputStock: D(_t),
  inputShapes: D(Mt),
  inputSaw: Qt,
  inputUserGroups: D(ss),
  // CLE materials list (project-scoped). Optional for back-compat with projects saved
  // before the materials feature — reverse-engineered from stock/parts on load if absent.
  materials: D(Pc).optional(),
  // Centralized extras options for UI dropdowns
  extrasOptions: x({
    banding: x({
      options: D(f())
    }).optional(),
    finish: x({
      options: D(f())
    }).optional(),
    planing: x({
      options: D(f())
    }).optional()
  }).optional()
}).optional(), Ac = x({
  // Banding metrics
  bandingLengthByType: $(f(), u()).default({}),
  // Finish metrics (by face)
  finishAreaByType: $(f(), u()).default({}),
  // Planing metrics (by type)
  planingAreaByType: $(f(), u()).default({}),
  // Material summary with nested structure
  materialSummary: $(
    f(),
    // material name
    $(
      f(),
      // thickness
      x({
        used: u(),
        stacks: u(),
        bandingLengthByType: $(f(), u())
      })
    )
  ).default({}),
  // Tallies
  usedStockTally: $(f(), u()).default({}),
  addedPartTally: $(f(), u()).default({}),
  // Cost metrics
  stockAreaCost: u().default(0),
  totalStockCost: u().default(0),
  // Machining metrics
  hasMachining: S().default(!1),
  numHoles: u().default(0),
  numCorners: u().default(0),
  // Efficiency metrics
  totalBandingLength: u().default(0),
  totalFinishArea: u().default(0),
  totalPlaningArea: u().default(0),
  totalEfficiency: u().default(0),
  // Cutting metrics
  totalCutLength: u().default(0),
  totalStackedCutLength: u().default(0),
  totalCuts: u().default(0),
  totalStackedCuts: u().default(0),
  // Area metrics
  totalStockArea: u().default(0),
  totalStockUsedArea: u().default(0),
  totalStockUnusedArea: u().default(0),
  totalPartArea: u().optional(),
  // Legacy name
  totalPartsArea: u().default(0),
  totalUnusedPartsArea: u().default(0),
  totalOffcutsArea: u().default(0),
  totalOffcuts: u().default(0),
  totalBladeArea: u().default(0),
  totalTrimArea: u().default(0),
  // Additional metrics
  totalPartsProduced: u().optional(),
  totalUsedStock: u().optional(),
  totalRollLength: u().optional(),
  totalStockWeight: u().optional(),
  totalPartWeight: u().optional()
}), Fn = Ac.extend({
  bandingLengthByType: $(f(), u()).default({}),
  unplacedParts: D(Tc).default([]),
  // Ecommerce pricing - calculated client-side
  offcutCost: u().optional()
}), Dc = x({
  // Core optimization results
  stockList: U("Stock"),
  shapeList: U("Shape"),
  cutList: U("Cut").optional(),
  segmentList: U("Segment").optional(),
  offcuts: U("Offcut").optional(),
  saw: N("Saw"),
  unusableShapes: U("Shape").optional(),
  unavailableStock: U("Stock").optional(),
  evolutionVisData: D(x({})).optional(),
  performance: f().optional(),
  algoMs: u().optional(),
  /** Deterministic, machine-independent work count (placement-scoring evals) — the
   *  algorithm-lab gates regressions on this instead of wall-clock `algoMs`. */
  algoComplexity: u().optional(),
  // Per-stage timings for benchmark/debugging. Populated by the optimiser pipeline
  // and surfaced in the benchmark report as a stacked bar chart next to layouts.
  phaseTimings: D(x({ phase: f(), ms: u() })).optional(),
  apiVersion: u().optional(),
  // Renamed from 'v'
  metadata: Fn.optional(),
  credits: u().optional(),
  time: u().optional(),
  // billedMs — what the customer is charged for
  // CNC cutting plans per stock (keyed by stock autoId)
  cuttingPlans: $(f(), _()).optional(),
  // Saw-profile constraint violations — populated when the caller passes
  // `sawProfileId` in RuntimeCalculationData. Each entry describes a way
  // the produced layout cannot be faithfully emitted to the declared saw.
  // REPORT-ONLY today; downstream code can choose to refuse emission or
  // fall back to a different saw / format.
  sawViolations: D(x({
    kind: f(),
    stockId: f(),
    message: f(),
    shapeIds: D(f()).optional()
  })).optional(),
  // Optional input data for debugging/API reporting
  inputs: cs
});
x({
  // Job execution metadata
  success: S(),
  socketId: f().nullable().default(null),
  userId: f(),
  api: S(),
  app: S(),
  widget: S().optional(),
  cached: S().optional(),
  hash: f().optional(),
  webhook: f().optional(),
  config: _().optional(),
  error: f().optional(),
  jobId: u().optional(),
  // Job-level label-printer fields (mirrors V3 request top-level `labels`).
  // Persisted so the export step (post-processor emit) can thread values
  // like JOBS.CUSTOMER into the PTX output without re-loading the request.
  labels: x({
    customer: f().max(100).optional()
  }).optional(),
  // Per-type SKU/name maps to resolve operator-meaningful cutlist labels at
  // export (internal-only; see optimiser.zod extrasResolutionSchema).
  extrasResolution: ns.optional(),
  // Input data
  inputs: cs,
  // The actual optimization results
  optimisation: Dc
});
x({
  // Database metadata
  jobId: u().optional(),
  // Job execution data
  success: S(),
  socketId: f().nullable().default(null),
  userId: f(),
  api: S(),
  app: S(),
  widget: S().optional(),
  cached: S().optional(),
  hash: f().optional(),
  webhook: f().optional(),
  config: _().optional(),
  error: f().optional(),
  // Job-level label-printer fields (see `jobResultSchema.labels`).
  labels: x({
    customer: f().max(100).optional()
  }).optional(),
  // Extras display-value resolution maps (see `jobResultSchema.extrasResolution`).
  extrasResolution: ns.optional(),
  // Optimization results (flattened from optimization object)
  stockList: U("Stock"),
  shapeList: U("Shape"),
  cutList: U("Cut").optional(),
  segmentList: U("Segment").optional(),
  offcuts: U("Offcut").optional(),
  saw: N("Saw"),
  unusableShapes: U("Shape").optional(),
  unavailableStock: U("Stock").optional(),
  performance: f().optional(),
  algoMs: u().optional(),
  /** Deterministic, machine-independent work count (placement-scoring evals) — the
   *  algorithm-lab gates regressions on this instead of wall-clock `algoMs`. */
  algoComplexity: u().optional(),
  metadata: Fn.optional(),
  apiVersion: u().optional(),
  credits: u().optional(),
  time: u().optional(),
  // billedMs — what the customer is charged for
  // CNC cutting plans per stock (keyed by stock autoId)
  cuttingPlans: $(f(), _()).optional(),
  // Input data
  inputs: cs,
  // Computed fields for easier querying/display
  numParts: u().optional(),
  numStock: u().optional(),
  workerName: f().optional(),
  queueName: f().optional()
});
x({
  id: f().optional(),
  name: f().optional(),
  l: u(),
  w: u(),
  t: u().nullable().optional(),
  material: f().optional(),
  q: u().optional(),
  orientationLock: W([
    j(""),
    j("l"),
    j("w")
  ]).nullable().optional(),
  // Basic extras for display
  banding: _().optional(),
  finish: _().optional(),
  planing: _().optional()
});
const Oc = x({
  issues: D(f()),
  id: f(),
  duplicate: S(),
  name: f(),
  added: S(),
  x: u(),
  y: u(),
  l: u(),
  w: u(),
  t: u(),
  q: u().optional(),
  // Add quantity for checkout compatibility
  orientationLock: W([
    j(""),
    j("l"),
    j("w")
  ]),
  trim: x({
    l1: u(),
    l2: u(),
    w1: u(),
    w2: u()
  }),
  material: f(),
  banding: _(),
  // Using any for now, could use bandingPropertiesSchema
  bandingType: _(),
  // Legacy field
  finish: _(),
  // Using any for now, could use finishPropertiesSchema
  stock: x({ id: f() }),
  rot: S(),
  notes: f(),
  customData: $(f(), W([f(), u(), S()]))
});
x({
  issues: D(f()),
  id: f(),
  duplicate: S().optional(),
  name: f(),
  l: u(),
  w: u(),
  t: u().nullable(),
  material: f(),
  cost: u(),
  used: S(),
  grain: W([
    j(""),
    j("l"),
    j("w"),
    Xe()
  ]).nullable(),
  trim: x({
    l1: u(),
    l2: u(),
    w1: u(),
    w2: u()
  }),
  parts: D(Oc),
  efficiency: u(),
  notes: f().optional(),
  // Legacy V1 fields
  blade: x({
    width: u()
  }).optional(),
  cutPreference: W([
    j("l"),
    j("w")
  ]).optional(),
  // Analysis data
  analysis: x({
    partArea: u(),
    totalParts: u(),
    areaEfficiency: u(),
    cutLength: u(),
    bandingLength: u(),
    numberOfCuts: u(),
    rollLength: u().optional()
  }).optional(),
  // Stack info
  stack: _().optional(),
  // Stock quantity for checkout compatibility
  q: u().optional()
});
export {
  ef as $,
  Ye as A,
  fe as B,
  rs as C,
  gr as D,
  y as E,
  me as F,
  re as G,
  xt as H,
  v as I,
  ti as J,
  Ie as K,
  pu as L,
  Q as M,
  tl as N,
  nu as O,
  bo as P,
  Za as Q,
  ru as R,
  mi as S,
  gu as T,
  Zu as U,
  Qs as V,
  fc as W,
  Ic as X,
  qe as Y,
  Ne as Z,
  mu as _,
  U as a,
  tt as a$,
  Xu as a0,
  ws as a1,
  Vc as a2,
  Wr as a3,
  Uc as a4,
  Ki as a5,
  zt as a6,
  Yu as a7,
  Wc as a8,
  Ku as a9,
  pf as aA,
  E as aB,
  Jl as aC,
  Ci as aD,
  ni as aE,
  Cn as aF,
  of as aG,
  K as aH,
  Ju as aI,
  Pl as aJ,
  Qu as aK,
  rf as aL,
  tf as aM,
  ac as aN,
  yu as aO,
  ml as aP,
  mc as aQ,
  Il as aR,
  vl as aS,
  In as aT,
  Bc as aU,
  hi as aV,
  as as aW,
  Sn as aX,
  kt as aY,
  It as aZ,
  se as a_,
  Js as aa,
  le as ab,
  ve as ac,
  jt as ad,
  Ja as ae,
  Ua as af,
  en as ag,
  kc as ah,
  nf as ai,
  wt as aj,
  sf as ak,
  ff as al,
  hl as am,
  cf as an,
  gi as ao,
  En as ap,
  de as aq,
  wn as ar,
  pl as as,
  Nr as at,
  Cs as au,
  qc as av,
  af as aw,
  lf as ax,
  Ee as ay,
  hu as az,
  Ui as b,
  tu as b$,
  oi as b0,
  ai as b1,
  Re as b2,
  Vu as b3,
  Wu as b4,
  qu as b5,
  Uu as b6,
  ci as b7,
  it as b8,
  qa as b9,
  Wl as bA,
  Du as bB,
  Au as bC,
  Pc as bD,
  Yc as bE,
  za as bF,
  hf as bG,
  Kr as bH,
  et as bI,
  Ze as bJ,
  Ai as bK,
  Ac as bL,
  Pr as bM,
  Qc as bN,
  Kc as bO,
  Qr as bP,
  Iu as bQ,
  Hu as bR,
  Ha as bS,
  fu as bT,
  C as bU,
  Xo as bV,
  Kt as bW,
  Ll as bX,
  Ml as bY,
  uf as bZ,
  Zc as b_,
  uu as ba,
  Fn as bb,
  Tt as bc,
  Pu as bd,
  Le as be,
  lu as bf,
  au as bg,
  ke as bh,
  tn as bi,
  ju as bj,
  $l as bk,
  vu as bl,
  vn as bm,
  Pn as bn,
  wu as bo,
  Su as bp,
  Mu as bq,
  zu as br,
  Fu as bs,
  Eu as bt,
  Lu as bu,
  yi as bv,
  xu as bw,
  Nl as bx,
  Ou as by,
  ql as bz,
  qi as c,
  bu as c0,
  Gu as c1,
  $u as c2,
  Nu as c3,
  Ru as c4,
  ne as c5,
  zo as c6,
  vt as c7,
  Go as c8,
  Jc as c9,
  du as cA,
  Yl as cB,
  Jr as cC,
  df as cD,
  Hc as cE,
  Xs as cF,
  _e as cG,
  ku as cH,
  zc as ca,
  jc as cb,
  Ns as cc,
  $s as cd,
  cn as ce,
  Zi as cf,
  Ji as cg,
  Xi as ch,
  ts as ci,
  Bo as cj,
  No as ck,
  es as cl,
  Qi as cm,
  Ca as cn,
  ko as co,
  uo as cp,
  Tu as cq,
  Hi as cr,
  Bu as cs,
  Xc as ct,
  _o as cu,
  Cu as cv,
  Bl as cw,
  _u as cx,
  Pt as cy,
  cu as cz,
  Yi as d,
  di as e,
  Ys as f,
  iu as g,
  ya as h,
  ba as i,
  eu as j,
  dn as k,
  su as l,
  Ht as m,
  ss as n,
  _t as o,
  Mt as p,
  Qt as q,
  ns as r,
  Oi as s,
  fi as t,
  ri as u,
  os as v,
  Fe as w,
  L as x,
  ou as y,
  N as z
};

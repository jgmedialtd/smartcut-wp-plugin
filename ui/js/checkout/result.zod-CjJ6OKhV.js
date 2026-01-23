import { i as L, o as S, h as b, l as C, k as p, C as U, D as j, j as Z, n as u, E as ze, F as qs, Z as Qt, G as Us, H as z, I as De, J as Mi, K as Hs, L as Ks, M as Ys, N as Zi, O as Zs, P as Xs, Q as Qs, S as Js, T as en, U as tn, V as Xi } from "./vendor-HGGdjwqM.js";
import { a as Y, h as sn, s as nn } from "./vendor-lodash-B8VQpKjD.js";
import "./vendor-i18next-CoOqf42x.js";
import { t as Te, s as rn } from "./i18n-BfwcbnjK.js";
import { i as Ue } from "./environment-BeBZzWz6.js";
import { m as on } from "./validation-keys-CsEDW3Vc.js";
import { F as mt } from "./vendor-fraction-3H9P8ENz.js";
const Qi = L(["error", "warning"]), Ji = L(["saw", "stock", "part", "group", "machining", "extras"]);
S({
  message: p(),
  identifier: p(),
  field: C(C(p())),
  index: C(u()),
  id: p(),
  // Source object's autoId for linking back
  type: Qi,
  category: C(Ji)
});
const an = S({
  item: Z().nullable().default(null),
  message: p().default(""),
  params: U(p(), j([p(), u(), b(), ze()])).optional(),
  // Translation parameters
  field: C(C(p())).default([]),
  index: C(u()).nullable().default(null),
  id: p().nullable().default(null),
  // Source object's autoId
  issues: C(Z()).nullable().default(null),
  // Will be Issue[] at runtime
  type: Qi.default("error"),
  category: C(Ji).nullable().default(null),
  throwError: b().default(!1),
  shouldTranslate: b().default(!0)
}), ln = ["lr", "rl", "bt", "tb"];
S({
  x1: u(),
  x2: u(),
  y1: u(),
  y2: u(),
  dimension: L(["l", "w"]).optional(),
  shapeCollisions: C(Z()).optional()
});
S({
  id: p().nullable().optional(),
  x1: u(),
  x2: u(),
  y1: u(),
  y2: u(),
  origin: p().optional(),
  dimension: L(["l", "w"]).optional(),
  direction: L(ln).nullable().optional(),
  type: p().nullable().optional()
});
const cn = S({
  // ========== Identification ==========
  // Unique identifier for this line
  id: p(),
  // Type classification for this line
  type: p().optional(),
  // ========== Coordinates ==========
  x1: u().default(0),
  x2: u().default(0),
  y1: u().default(0),
  y2: u().default(0),
  // ========== Origin Information ==========
  // Origin point of the line
  origin: p().optional(),
  // ========== Collision Tracking ==========
  // Shapes that collide with this line
  shapeCollisions: C(Z()).default([]),
  // ========== Validation ==========
  // Validation issues found with this line
  issues: C(Z()).default([])
}), un = {
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
}, es = /* @__PURE__ */ new Map();
function bt() {
  return es;
}
function Pl(t, e) {
  es.set(t, e);
}
function qt(t, e) {
  const i = t, s = i._fieldBehavior?.fieldBehavior || {};
  return i._fieldBehavior = {
    fieldBehavior: {
      ...s,
      ...e
    }
  }, i;
}
function ii(t) {
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
function ht(t) {
  const e = {};
  if (t instanceof Us) {
    const i = t.shape;
    for (const [s, n] of Object.entries(i)) {
      const o = ii(n);
      o && (e[s] = o);
    }
  }
  if (t._def && t._def.shape) {
    const i = t._def.shape;
    for (const [s, n] of Object.entries(i)) {
      const o = ii(n);
      o && (e[s] = o);
    }
  }
  return e;
}
typeof qs < "u" && Qt && Qt.prototype && (Qt.prototype.behavior = function(t) {
  return qt(this, t);
});
function E(t, e = {}) {
  let s = Z().refine((r) => r == null ? !0 : typeof r == "object" && r !== null ? ("autoId" in r || "id" in r, !0) : !1, {
    message: `Invalid reference to ${t}`
  }).transform((r) => {
    if (r == null || typeof r == "object" && r !== null && typeof r.getType == "function" || typeof r == "object" && r !== null && r.__ref === !0)
      return r;
    if (typeof r == "object" && r !== null && !r.__ref)
      try {
        const a = bt(), l = r.__entityType || t, c = a.get(l);
        if (c && typeof c == "function")
          return typeof c.fromData == "function" ? c.fromData(r) : new c(r);
      } catch (a) {
        console.warn(`Failed to recreate ${t} instance:`, a);
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
  return n = qt(n, o), Object.defineProperty(n, "__zRefClassName", {
    value: t,
    enumerable: !1,
    writable: !1,
    configurable: !1
  }), n;
}
function ee(t, e = {}) {
  let i = C(E(t)).default([]).describe(
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
  return i = qt(i, s), i;
}
function fn(t, e = {}) {
  const i = t.map((o) => E(o));
  let s = C(j(i)).default([]).describe(
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
  return s = qt(s, n), s;
}
const _i = ["topLeft", "topRight", "bottomLeft", "bottomRight"], dn = [
  "left",
  "centre",
  "right",
  "top",
  "bottom",
  "topLeft",
  "topRight",
  "bottomLeft",
  "bottomRight"
], hn = ["lr", "rl", "bt", "tb"], pn = S({
  // ========== Coordinates ==========
  x: u().default(0),
  y: u().default(0),
  z: u().default(0),
  // ========== Shape References ==========
  a: p().optional(),
  b: p().optional(),
  stock: E("Stock", { nullable: !0 }).optional(),
  // ========== Direction and Positioning ==========
  direction: L(hn).nullable().optional(),
  type: p().optional(),
  corner: L(_i).optional(),
  shapePosition: L(_i).optional(),
  grid: L(dn).optional(),
  // ========== Collision and Raycast Flags ==========
  raycast: b().default(!1),
  collision: b().default(!1),
  tooClose: b().default(!1),
  adjustedForMinSpacing: b().default(!1)
}), gn = {
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
}, ts = p().default("").describe('Unique identifier (e.g., "1.0" for shapes/stock, "g1" for groups, "ss-1_a2b3" for segments, "1.0-proximity" for proximity rectangles)'), mn = p().max(200).default("").describe("User input name"), yn = p().default("").describe("Parent identifier for tracking copies and relationships"), bn = b().default(!1).describe("Prevent automatic rotation optimization"), wn = b().default(!1).describe("Whether this is an offcut piece"), is = C(p()).default([]).describe("IDs of identical items").behavior({ clone: "copy" }), yt = j([
  z(""),
  z("l"),
  z("w"),
  z(" ").transform(() => ""),
  ze().transform(() => "")
]).default("").describe("Grain direction of the material"), ss = j([
  // String format (legacy support - color name or hex)
  p(),
  // Object format with hex and name
  S({
    hex: p().regex(/^#[0-9A-Fa-f]{6}$/, "Must be valid hex color (#RRGGBB)"),
    name: p().min(1)
  })
]).optional().describe("Material color (hex code + name or legacy string)"), ns = De(
  (t) => t === null || t === " " || t === "n" || t === "none" || !["", "l", "w"].includes(t) ? "" : t,
  L(["", "l", "w"]).default("").describe("Orientation lock for rotation constraints")
), Sn = S({
  l1: u().default(0).describe("Long side 1 trim value"),
  l2: u().default(0).describe("Long side 2 trim value"),
  w1: u().default(0).describe("Short side 1 trim value"),
  w2: u().default(0).describe("Short side 2 trim value")
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 });
S({
  material: b(),
  thickness: b(),
  fit: b(),
  width: b()
}).nullable().default(null);
j([
  z(""),
  z("l"),
  z("w"),
  ze()
]).default(null);
U(p(), u()).nullable().default(null);
U(p(), u()).nullable().default(null);
const pi = j([
  z(0),
  z(1)
]), xn = S({
  dimension: u().describe("Dimension of the strip shape batch"),
  rot: pi.describe("Rotation: 0 (no rotation) or 1 (90 degrees)"),
  order: u().optional().describe("Order of the batch"),
  id: p().optional().describe("Batch ID"),
  stockId: p().optional().describe("Associated stock ID"),
  rerunning: b().optional().describe("Whether the batch is being rerun"),
  priorityShape: p().nullable().describe("Priority shape identifier (null if none specified)")
});
S({
  subsetUsed: b().optional().describe("Whether a subset was used for strip shape batches"),
  groups: U(p(), xn).describe("Groups of strip shape batches keyed by ID")
});
const kn = L(["none", "schema", "business", "full"]), Pe = S({
  // Validation issues (errors) - uses zRefArray to avoid type duplication across modules
  issues: ee("Issue", {
    description: "Validation issues (errors)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Validation warnings (non-critical issues) - uses zRefArray to avoid type duplication
  warnings: ee("Issue", {
    description: "Validation warnings (non-critical)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Legacy flag to skip validation (backward compatibility)
  skipValidation: b().optional(),
  // New validation control properties
  skipSchemaValidation: b().optional(),
  skipBusinessValidation: b().optional(),
  validationMode: kn.optional(),
  enableStrictMode: b().optional()
}), je = {
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
const gi = Pe.extend({
  // Identity
  id: ts,
  // Description
  name: mn,
  // Dimensions
  l: De((t) => typeof t == "number" && !isFinite(t) ? 1 : t ?? 1, u().positive()).describe("Length (long side dimension)"),
  w: De((t) => typeof t == "number" && !isFinite(t) ? 1 : t ?? 1, u().positive()).describe("Width (short side dimension)"),
  t: u().positive().nullable().optional().describe("Thickness (z-axis dimension)"),
  q: u().positive().int().default(1).describe("Quantity"),
  // Calculated dimensions (computed once on init for performance)
  area: u().positive().default(1).describe("Calculated area (l * w)"),
  longSide: u().positive().default(1).describe("Calculated long side Math.max(l, w)"),
  shortSide: u().positive().default(1).describe("Calculated short side Math.min(l, w)"),
  parentId: p().default("").describe("Parent ID extracted from id (integer part before decimal)"),
  // Flags
  duplicate: b().default(!1).describe("Whether this is a duplicate"),
  offcut: wn,
  // Grain
  grain: yt,
  preventGrainRotation: b().default(!1).describe("Prevent rotation that would change grain direction"),
  // Orientation
  preventAutoRotation: bn,
  orientationLock: ns,
  // Position (reset during cloning - cloned shapes should not have preset positions)
  x: u().nullable().default(null).describe("X coordinate position").behavior({ clone: "reset" }),
  y: u().nullable().default(null).describe("Y coordinate position").behavior({ clone: "reset" }),
  // Stock matching
  material: p().max(200).default("").transform((t) => t ? t.trim().toLowerCase() : "").describe("Material name"),
  // Trim
  trim: Sn.describe("Reduce the dimensions by specified trim values"),
  trimmed: b().default(!1).describe("Whether trim has been applied to dimensions"),
  // Proximity data (excluded from compression)
  proximity: S({
    rectangle: E("Rectangle").nullable().default(null),
    // Using 'any' to avoid circular import
    distance: u().nullable().default(null)
  }).default({ rectangle: null, distance: null }).behavior({ compress: "exclude" }),
  // Other properties
  cost: u().min(0).nullable().default(0).describe("Cost per unit"),
  discount: u().min(0).max(100).nullable().default(0).describe("Percentage discount (0-100)"),
  customData: U(p(), Z()).default({}).describe("Custom user-defined data"),
  identicalTo: is,
  notes: p().max(500).default("").transform((t) => typeof t == "string" && t.length ? t.replace(/,/g, "").substring(0, 200) : "").describe("Description")
}), mi = {
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
}, In = ["x", "y"];
L(In);
const Tn = ["l", "w"];
L(Tn);
const Pn = ["l", "w"], He = L(Pn);
j([
  z(0),
  z(1),
  z(2)
]);
j([
  z(0),
  z(1),
  ze()
]);
const An = ["sheet", "linear", "roll"], yi = De(
  // Normalize to lowercase before validation
  (t) => typeof t == "string" ? t.toLowerCase() : t,
  j([
    L(An),
    ze()
  ]).nullable().default(null)
).describe("Type of stock material"), rs = S({
  // Infinite length flag for rolls and other continuous stock
  infiniteLength: b().default(!1).describe("Whether stock has infinite length (e.g., for rolls)"),
  // Allow shapes that exactly fit the stock dimensions
  allowExactFitShapes: b().default(!1).describe("Allow shapes that exactly fit"),
  // Automatically add stock as needed
  autoAdd: b().default(!1).describe("Automatically add stock as needed"),
  // Unlimited quantity flag - stock never runs out
  unlimitedQuantity: b().default(!1).describe("Stock has unlimited quantity (never decremented)")
}), bi = gi.extend({
  // Identity - override id to be required for containers
  id: p().default("").describe("Unique identifier for containers (required for Stock and Segment)"),
  // Parent identifier for tracking copies
  parentId: yn,
  // Container-specific fields
  stockType: yi,
  // Array of shapes or groups (excluded from compression - runtime only)
  shapes: fn(["Shape", "Group"], {
    description: "Array of Shape or Group objects contained within this container"
  }).behavior({ clone: "reset", compress: "exclude" }),
  // Saw reference - using zRef for define.ref<Saw>('Saw') (share exact instance during cloning, serialize as reference)
  saw: E("Saw", {
    nullable: !0,
    description: "Reference to Saw class"
  }).behavior({ clone: "share", compress: "reference" }),
  // Algorithm benchmark results (reset during cloning)
  algoBenchmark: Z().optional().describe("Benchmark results from optimization algorithms").behavior({ clone: "reset" }),
  // Container flag
  isContainer: b().default(!0).describe("Flag indicating this is a container")
}), wi = {
  // Include all Rectangle computed properties
  ...mi,
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
bi.describe(JSON.stringify({
  name: "Container",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(wi)
}));
const On = S({
  dimension: u().describe("Dimension of the strip shape batch"),
  rot: j([
    z(0),
    z(1)
  ]).describe("Rotation"),
  order: u().optional().describe("Order of the batch"),
  id: p().optional().describe("Batch ID"),
  stockId: p().optional().describe("Associated stock ID"),
  rerunning: b().optional().describe("Whether the batch is being rerun"),
  priorityShape: p().nullable().describe("Priority shape identifier (null if none specified)")
}), os = S({
  // Strip direction
  myStripDirection: He.optional(),
  // Strip parent (can be shape or group)
  myStripParent: j([
    E("Shape", { nullable: !0 }),
    E("Group", { nullable: !0 })
  ]).default(null).describe("Parent strip shape or group for guillotine optimization").behavior({
    serialize: "reference",
    compress: "reference",
    clone: "share"
  }),
  // Phase number
  myPhase: u().int().min(0).optional().describe("Phase of the strip this shape belongs to"),
  // Strip shape batches optimization data
  stripShapeBatches: S({
    subsetUsed: b().optional().describe("Whether a subset was used for strip shape batches"),
    groups: U(p(), On).default({}).describe("Groups of strip shape batches keyed by ID")
  }).default({ groups: {} }).describe("Strip shape batch optimization data")
});
os.describe(JSON.stringify({
  name: "GuillotineState",
  version: "1.0.0"
}));
const Dn = {}, Cn = S({
  fill: u().default(0),
  similarDimensions: u().default(0),
  compression: u().default(0),
  cohesion: u().default(0),
  area: u().default(0),
  edge: u().default(0),
  alignment: u().default(0),
  exactFit: u().default(0),
  total: u().default(0),
  shapes: j([
    E("Shape", { nullable: !0 }),
    E("Group", { nullable: !0 })
  ]).optional(),
  group: E("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
  cutDirection: He.optional()
}).behavior({ clone: "reset" }), Ln = S({
  exactStripFill: u().default(0),
  fill: u().default(0),
  cohesion: u().default(0),
  fenceConsistency: u().default(0),
  similarDimensions: u().default(0),
  compression: u().default(0),
  sameStripBonus: u().default(0),
  aspectRatio: u().optional(),
  total: u().default(0),
  cutDirection: He,
  myStripDirection: He.optional(),
  myStripParent: j([
    E("Shape", { nullable: !0 }),
    E("Group", { nullable: !0 })
  ]).optional().describe("Parent strip shape or group for guillotine optimization"),
  myPhase: u().optional()
}).behavior({ clone: "reset" }), $i = j([
  Cn,
  Ln,
  // Also support the generic object with catchall for backward compatibility
  S({
    cutDirection: He.optional(),
    myStripParent: j([
      E("Shape", { nullable: !0 }),
      E("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group"),
    myStripDirection: He.optional()
  }).catchall(u())
]).behavior({ clone: "reset" }), wt = gi.extend({
  // Stock lock (shared schema) - original was stockLock: define.array(define.string())
  stockLock: C(p()).default([]).describe("Stock lock configuration"),
  // Stock matching - original object structure
  stockMatch: S({
    material: b(),
    thickness: b(),
    fit: b(),
    width: b()
  }).nullish().describe("Matching stock information"),
  // Guillotine state - reference that will be initialized in constructor (reset during cloning)
  // This ensures guillotineState is always a proper GuillotineState instance with methods
  guillotineState: E("GuillotineState", {
    nullable: !0,
    // Nullable in schema but always initialized in constructor
    description: "Data for guillotine cutting optimization (always initialized as instance)"
  }).nullable().default(null).behavior({
    clone: "unique",
    serialize: Ue() ? "full" : "exclude",
    compress: Ue() ? "full" : "exclude"
    // Consistent with serialize behavior
  }),
  // Priority and weighting (records) - exact match from original
  priority: U(p(), u()).default({}).describe("Priority levels for optimization"),
  weighting: U(p(), u()).optional().describe("Shape weighting for optimization"),
  // Pattern matching for stack detection (reset during cloning)
  patternMatch: b().default(!1).describe("Used for stack detection").behavior({ clone: "reset" }),
  firstShape: S({
    sampleRotations: C(u().int().min(0).max(1)).default([]).describe("Sample rotations (0 or 1) for first shape optimization").behavior({ clone: "reset" }),
    isFirstShape: b().default(!1).describe("Whether this is the first shape in optimization").behavior({ clone: "reset" })
  }).default({ sampleRotations: [], isFirstShape: !1 }),
  // Placement properties (reset during cloning)
  added: b().default(!1).describe("Whether shape has been added to a stock").behavior({ clone: "reset" }),
  placementOrder: u().int().min(0).optional().describe("Order in which shape was placed").behavior({ clone: "reset" }),
  // Stock reference (reset during cloning - cloned shapes should not be pre-placed)
  stock: E("Stock", {
    nullable: !0,
    description: "Reference to the stock this item is placed on"
  }).behavior({ clone: "reset" }),
  // Stock fitting data
  fitsStock: U(
    p(),
    U(p(), b())
  ).nullable().default(null).describe("Information about which stocks this shape fits"),
  // Scoring properties
  bestScore: S({
    x: u().nullable().default(null),
    y: u().nullable().default(null),
    rot: j([z(0), z(1)]).nullable().default(null),
    total: u().nullable().default(null),
    weighting: U(p(), u()).optional(),
    group: E("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
    score: $i.optional(),
    point: Z().optional().describe("Associated point for placement"),
    myStripParent: j([
      E("Shape", { nullable: !0 }),
      E("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group for this score"),
    cutDirection: He.optional(),
    myStripDirection: He.optional(),
    stock: E("Stock", {
      nullable: !0,
      description: "Stock reference for this score"
    })
  }).nullable().default(null).optional().describe("Best optimization score achieved").behavior({
    clone: "reset",
    serialize: Ue() ? "full" : "exclude"
    // Retain in development mode for debugging
  }),
  // Current optimization score (can be efficiency or guillotine type, reset during cloning)
  score: $i.nullable().optional().describe("Current optimization score").behavior({
    clone: "reset",
    serialize: "exclude"
    // Always exclude - transient optimization data
  })
}), St = {
  // Include all Rectangle computed properties
  ...mi
  // Placeable doesn't define additional computed properties
};
wt.describe(JSON.stringify({
  name: "Placeable",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(St)
}));
const as = ["horizontal", "vertical"], ls = ["position", "user", "strip", "firstShape"], Si = L(as).optional(), Rn = S({
  x: u(),
  y: u(),
  autoId: p().optional(),
  rot: pi
}), En = wt.extend({
  // Override quantity - always 1 for groups
  q: u().min(1).max(1).int().default(1),
  // Groups have fixed orientation
  preventAutoRotation: b().default(!0),
  // Group-specific fields
  shapes: ee("Shape").default([]),
  direction: Si,
  container: j([
    E("Segment"),
    E("Stock")
  ]).behavior({ compress: "exclude" }),
  positions: C(Rn).default([]),
  type: L(ls).default("position"),
  efficiency: u().min(0).max(100).default(0),
  groupLength: u().min(0).default(0),
  groupWidth: u().min(0).default(0),
  outOfBounds: b().default(!1),
  collision: b().default(!1),
  counter: u().int().min(0).default(0),
  inputId: p().optional()
}), Fn = {
  ...St,
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
S({
  id: p(),
  x: u(),
  y: u(),
  shapes: ee("Shape"),
  direction: L(as),
  type: L(ls),
  container: j([
    E("Segment"),
    E("Stock")
  ]).optional()
});
const Mn = ["l", "w"], Al = wt.extend({
  // Identity - offcuts need IDs for tracking and export
  id: p().default(""),
  // Note: offcut property is inherited from Rectangle schema (boolean default false)
  // The Offcut constructor ensures it's always true
  // Offcut-specific fields
  addToInventory: b().default(!1),
  flex: L(Mn).optional(),
  // Cost is calculated, not set
  cost: u().min(0).nullable().default(0)
}), Ol = {
  ...St,
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
}, cs = C(p()).default([]).describe("Parent IDs of stock(s) this shape is locked to"), _n = L(["l", "w"]).nullable().default(null), us = j([
  z("l"),
  z("w"),
  ze()
]).default(null), $n = S({
  stockId: p().optional(),
  material: p().optional(),
  thickness: u().optional(),
  grain: yt.optional()
}).describe("Which stock(s) this shape is a match for "), fs = U(p(), Z()).default({});
cs.describe("IDs of stocks this shape is locked to");
const Gn = us.describe("Direction that should face up");
S({
  /**
   * Up direction - Direction that should face up during optimization
   */
  upDirection: Gn
});
const zn = S({
  // Whether shape is in a user-defined group
  inUserGroup: b().default(!1).describe("Whether shape is in a user-defined group"),
  // Whether shape is in any group
  inGroup: b().default(!1).describe("Whether shape is currently in a group"),
  // Placement order within group
  placementOrder: u().int().min(0).optional().describe("Placement order within group"),
  // Group reference (the actual Group class instance)
  reference: E("Group", {
    nullable: !0,
    description: "Group this shape belongs to"
  }).optional().behavior({ clone: "reset", compress: "reference" }),
  // Group this was added as part of (preserved during serialization as reference)
  addedAsGroup: E("Group", {
    nullable: !0,
    description: "Group this was added as part of"
  }).optional().behavior({ clone: "reset", compress: "reference" })
}).default({
  inUserGroup: !1,
  inGroup: !1,
  placementOrder: void 0,
  reference: null,
  addedAsGroup: null
}).describe("Group metadata and reference"), si = wt.extend({
  // ========== Group Metadata ==========
  // Nested object containing all group-related properties
  group: zn,
  // ========== Identity ==========
  // Unique identifier for referencing items (required for shapes)
  id: p().default("").describe("Unique identifier for referencing items"),
  // Array of IDs this shape is identical to
  identicalTo: is,
  // Whether this is a duplicate
  duplicate: b().default(!1).describe("Whether this is a duplicate shape"),
  // ========== Orientation ==========
  // Direction that should face up during optimization
  upDirection: _n.describe("Direction that should face up"),
  // ========== Extras ==========
  // Extras container for banding, finish, planing, etc.
  // Override default reference behavior to preserve full data in compressed mode
  extras: E("Extras", {
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
  machining: E("Machining", {
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
  // ========== Status ==========
  // Status for tracking cut progress (used in order optimization workflow)
  status: L(["pending", "cut"]).optional().describe("Cut status for order optimization workflow"),
  // ========== Order Tracking ==========
  // Order ID this shape belongs to (for order optimization workflow)
  order_id: p().nullable().optional().describe("Order ID this shape belongs to")
}), ds = {
  // Include all Placeable computed properties
  ...St,
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
si.describe(JSON.stringify({
  name: "Shape",
  description: "Shape to be cut from stock material",
  version: "1.0.0",
  extends: "Placeable",
  computedProperties: Object.keys(ds)
}));
const Dl = S({
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
}), jn = S({
  // Internal-only fields (not exposed in API)
  fitsAll: b().default(!1),
  fitsAny: b().default(!1),
  largestShape: Z().nullable(),
  smallestShape: Z().nullable(),
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
}), Nn = S({
  stock: E("Stock", { nullable: !0 }).optional(),
  number: u().int().min(1).optional()
}), ni = S({
  ...bi.shape,
  ...rs.shape,
  // Override x and y to default to 0 for Stock (containers are positioned at origin)
  x: u().nullable().default(0).describe("X coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  y: u().nullable().default(0).describe("Y coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  // Stock analysis results
  analysis: jn.optional().behavior({ clone: "reset" }),
  // Automatically add stock as needed during optimization
  autoAdd: b().optional().describe("Automatically add stock as needed during optimization"),
  // Pattern for identifying duplicate stock sheets
  duplicatePattern: p().default("").describe("Pattern for identifying duplicate stock sheets"),
  // Root segment for guillotine cutting (excluded from compression, reset during cloning)
  rootSegment: E("Segment", {
    nullable: !0
  }).optional().behavior({ clone: "reset", compress: "exclude" }),
  // Optimization score (excluded from compression, reset during cloning)
  score: Z().nullable().default(null).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stack information (reset during cloning - cloned stocks start fresh)
  stack: Nn.optional().describe("Stack information").behavior({ clone: "reset" }),
  // Whether the stock layout has been tidied (excluded from compression, reset during cloning)
  tidy: b().default(!1).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stock type (sheet, linear, roll) - inherited from shared stockType
  type: L(["sheet", "linear", "roll"]).optional().describe("Type of stock material"),
  // Original length before cropping (for rolls)
  originalLength: u().positive().optional().describe("Original length before cropping (for rolls)"),
  // Whether this stock is unusable for optimization
  unusable: b().default(!1).describe("Whether this stock is unusable for optimization"),
  // Whether this stock has been used in the optimization (reset during cloning)
  used: b().default(!1).describe("Whether this stock has been used in the optimization").behavior({ clone: "reset" }),
  // The optimization strategy that selected this stock (reset during cloning)
  winningStrategy: p().optional().describe("The optimization strategy that selected this stock").behavior({ clone: "reset" }),
  // Display and filtering properties
  color: ss.describe('Material color ({ hex: "#FF5733", name: "Red" } or legacy string)'),
  weight: u().positive().optional().describe("Weight"),
  imageUrl: p().url().optional().describe("Image URL for stock display"),
  tags: C(p()).optional().describe("Tags for categorizing stock"),
  available: b().default(!0).describe("Whether the stock is available"),
  // Database ID (MongoDB ObjectId as string)
  db_id: p().optional().describe("MongoDB ObjectId for this document"),
  // Status for tracking cut progress (used in order optimization workflow)
  status: L(["pending", "cut"]).optional().describe("Cut status for order optimization workflow")
}), hs = {
  // Include all Container computed properties
  ...wi,
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
ni.describe(JSON.stringify({
  name: "Stock",
  description: "Stock material for cutting optimization",
  version: "1.0.0",
  extends: "Container",
  computedProperties: Object.keys(hs)
}));
var m = /* @__PURE__ */ ((t) => (t.InputRectangle = "inputRectangle", t.InputShape = "inputShape", t.InputStock = "inputStock", t.InputUserGroup = "inputUserGroup", t.InputSaw = "inputSaw", t.Rectangle = "rectangle", t.Container = "container", t.Saw = "saw", t.Shape = "shape", t.Stock = "stock", t.Group = "group", t.UserGroup = "userGroup", t.StripGroup = "stripGroup", t.FirstShapeGroup = "firstShapeGroup", t.Segment = "segment", t.Offcut = "offcut", t.Cut = "cut", t.Line = "line", t.Placeable = "placeable", t.GuillotineState = "guillotineState", t.Point = "point", t.PointCollection = "pointCollection", t.Optimiser = "optimiser", t.Machining = "machining", t.Extras = "extras", t.Issue = "issue", t))(m || {}), Vn = /* @__PURE__ */ ((t) => (t.Full = "full", t.Compressed = "compressed", t))(Vn || {});
const Bn = /* @__PURE__ */ new Set([
  m.Container,
  m.Stock,
  m.Segment
]), Wn = /* @__PURE__ */ new Set([
  m.Rectangle,
  m.Container,
  m.Stock,
  m.Segment,
  m.Placeable,
  m.Shape,
  m.Group,
  m.UserGroup,
  m.StripGroup,
  m.FirstShapeGroup,
  m.Offcut
]), qn = /* @__PURE__ */ new Set([
  m.Placeable,
  m.Shape,
  m.Group,
  m.UserGroup,
  m.StripGroup,
  m.FirstShapeGroup,
  m.Offcut
]);
m.InputRectangle, m.InputShape, m.InputStock;
class te {
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
      const l = r.constructor?.name === i, f = "getType" in r && typeof r.getType == "function" && r.getType() === e, h = l || f, d = s ? s(r) : !0;
      return h && d;
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
const Un = te.create(m.Cut, "Cut"), oe = te.create(
  m.Shape,
  "Shape",
  (t) => !("shapes" in t)
), Ie = te.create(m.Stock, "Stock"), ps = te.create(
  m.Group,
  "Group",
  (t) => "shapes" in t && Array.isArray(t.shapes) && t.type !== "user" && t.type !== "strip"
), xt = te.create(
  m.UserGroup,
  "Group",
  (t) => "shapes" in t && t.type === "user"
), gs = te.create(
  m.StripGroup,
  "Group",
  (t) => "shapes" in t && t.type === "strip"
), ms = te.create(
  m.FirstShapeGroup,
  "Group",
  (t) => "shapes" in t && t.type === "firstShape"
), X = (t) => ps(t) || xt(t) || gs(t) || ms(t), ys = te.create(
  m.InputUserGroup,
  "InputUserGroup"
), ot = te.create(m.Segment, "Segment"), Hn = te.create(m.Offcut, "Offcut"), Kn = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t._type;
  if (e && Bn.has(e)) return !0;
  let i = Object.getPrototypeOf(t);
  for (; i; ) {
    if (i.constructor?.name === "Container")
      return !0;
    i = Object.getPrototypeOf(i);
  }
  return !1;
}, Cl = te.create(m.Saw, "Saw"), bs = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t._type;
  if (e && Wn.has(e)) return !0;
  let i = Object.getPrototypeOf(t);
  for (; i; ) {
    if (i.constructor?.name === "Rectangle")
      return !0;
    i = Object.getPrototypeOf(i);
  }
  return t.constructor?.name === "Rectangle";
}, Yn = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t._type;
  if (e && qn.has(e)) return !0;
  let i = Object.getPrototypeOf(t);
  for (; i; ) {
    if (i.constructor?.name === "Placeable")
      return !0;
    i = Object.getPrototypeOf(i);
  }
  return t.constructor?.name === "Placeable";
}, ye = te.create(
  m.InputShape,
  "InputShape"
), xi = te.create(
  m.InputStock,
  "InputStock"
);
te.create(
  m.InputSaw,
  "InputSaw"
);
te.create(
  m.GuillotineState,
  "GuillotineState"
);
te.create(m.Line, "Line");
te.create(m.Point, "Point");
te.create(
  m.PointCollection,
  "PointCollection"
);
function Zn(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "__ref" in e && "autoId" in e && typeof e.__ref == "string" && typeof e.autoId == "string";
}
function ws(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "trimmed" in e && e.trimmed === !0;
}
function Xn(t) {
  if (!t || typeof t != "object") return null;
  const e = t.__entityType;
  if (e && Object.values(m).includes(e))
    return e;
  if ("getType" in t && typeof t.getType == "function")
    try {
      const i = t.getType();
      if (Object.values(m).includes(i))
        return i;
    } catch {
    }
  return Un(t) ? m.Cut : ye(t) ? m.InputShape : xi(t) ? m.InputStock : ys(t) ? m.InputUserGroup : xt(t) ? m.UserGroup : gs(t) ? m.StripGroup : ms(t) ? m.FirstShapeGroup : ps(t) ? m.Group : oe(t) ? m.Shape : Ie(t) ? m.Stock : Kn(t) ? m.Container : ot(t) ? m.Segment : Hn(t) ? m.Offcut : bs(t) ? m.Rectangle : Yn(t) ? m.Placeable : null;
}
const Ne = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "sides" in e && (!("type" in e) || e.type === "banding") && (!("validate" in e) || typeof e.validate == "function");
}, Ee = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "faces" in e && (!("type" in e) || e.type === "finish") && (!("validate" in e) || typeof e.validate == "function");
}, Fe = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "faces" in e && "sides" in e && (!("type" in e) || e.type === "planing") && (!("validate" in e) || typeof e.validate == "function");
}, Qn = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "images" in e && (!("type" in e) || e.type === "imageUpload") && (!("validate" in e) || typeof e.validate == "function");
};
te.create(
  m.Machining,
  "Machining",
  (t) => ("holes" in t || "corners" in t || "hingeHoles" in t) && "enabled" in t
);
te.create(
  m.Extras,
  "Extras",
  (t) => "banding" in t || "finish" in t || "planing" in t
);
te.create(
  m.Issue,
  "Issue",
  (t) => "type" in t && "message" in t && (t.type === "error" || t.type === "warning")
);
function Jn(t) {
  return t?.__entityType === m.Shape;
}
function Ll(t) {
  return t?.__entityType === m.Group || t?.__entityType === m.StripGroup || t?.__entityType === m.FirstShapeGroup;
}
function Rl(t) {
  return t?.__entityType === m.Group || t?.__entityType === m.StripGroup || t?.__entityType === m.UserGroup || t?.__entityType === m.FirstShapeGroup;
}
function El(t) {
  return t?.__entityType === m.UserGroup;
}
function er(t) {
  return typeof t == "string" && (t.startsWith("fields.") || t.startsWith("extras.") || t.startsWith("woodwork.") || t.startsWith("errors."));
}
function tr(t) {
  if (!t) return;
  const e = {};
  for (const [i, s] of Object.entries(t))
    if (er(s)) {
      const n = Te(s);
      e[i] = n;
    } else
      e[i] = s;
  return e;
}
function ir(t, e) {
  const i = on(t), s = t.startsWith("errors.validation.") ? t : i, n = tr(e);
  return {
    message: Te(s, n),
    translationKey: s,
    params: n
  };
}
function sr(t, e) {
  return ir(t, e).message;
}
class T {
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
    const i = an.parse(e), s = T.determineIdentifier(i.item, i.index || []);
    let n = i.id || "";
    !n && i.item && "autoId" in i.item && i.item.autoId && (n = i.item.autoId);
    const o = i.shouldTranslate !== !1 ? sr(i.message, i.params) : i.message;
    if (this.message = o, this.identifier = s, this.field = i.field.map((r) => [...r]), this.index = i.index ? [...i.index] : [], this.id = n, this.type = i.type, this.category = i.category || [], this.item = i.item, this.addToItemIssues(i.item), Array.isArray(i.issues) && i.issues.push(this), i.throwError) {
      const r = `Issue created for ${Xn(i.item)}: ${this.identifier || "N/A"} - ${this.field.map((a) => a.join(".")).join(", ")}`;
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
    return new T({
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
const Jt = 10, Gi = 0;
class Mt extends Error {
  constructor(e) {
    super(e), this.name = "NumberFormatError";
  }
}
const gt = {
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
function nr(t, e) {
  let i;
  if (typeof t == "number" ? i = t : i = new mt(t).valueOf(), typeof e == "number") {
    const s = Math.pow(10, e);
    return Math.round(i * s) / s;
  }
  return i;
}
function rr(t, e) {
  const i = new mt(t);
  if (e > 0) {
    const s = i.mul(e), n = Math.round(s.valueOf());
    return new mt(n, e).toFraction(!0);
  }
  return i.simplify().toFraction(!0);
}
function Fl(t, e, i = !1) {
  const s = t == null || String(t).trim() === "";
  if (i && s)
    return { value: null, valid: !1, message: "errors.validation.field.required" };
  if (!i && s)
    return { value: null, valid: !0 };
  const n = String(t);
  try {
    const o = Ss(n, !0), r = parseFloat(o ?? ""), a = o !== null && o !== "" && !isNaN(r) && isFinite(r);
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
function or(t = "en-US") {
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
function ar(t) {
  if (t == null || t === "") return null;
  const e = String(t).trim();
  if (!e) return null;
  try {
    const { thousandsSeparator: i, decimalSeparator: s } = or(), n = e.replace(new RegExp(`\\${i}`, "g"), "").replace(new RegExp(`\\${s}`, "g"), "."), o = Number(n);
    return isFinite(o) ? o : null;
  } catch (i) {
    throw new Mt(`Failed to parse locale number: "${t}". ${i.message || "Parsing error"}`);
  }
}
function lr(t) {
  if (!t) return !1;
  const e = t.toString().trim();
  if (!e) return !1;
  const i = Object.keys(gt).join("");
  return new RegExp(
    `^-?((\\d+\\s+)?\\d+\\/\\d+|\\d+|\\d+[${i}]|[${i}]|\\d+'(?:\\s*\\d+(?:\\/\\d+)?"?)?|(\\d+\\s+)?\\d+\\/\\d+"|\\d+")$`
  ).test(e);
}
function Ss(t, e = !1) {
  if (t == null || t === "") return null;
  let i = String(t).trim();
  if (!i) return null;
  const s = Object.keys(gt).join("");
  i = i.replace(new RegExp(`(\\d)\\s+([${s}])`, "g"), "$1$2");
  try {
    const n = Object.keys(gt).join(""), o = new RegExp(`^(-?)(\\d+)([${n}])$`), r = new RegExp(`^(-?)([${n}])$`), a = i.match(o), l = i.match(r);
    if (a) {
      const c = a[1], f = a[2], h = a[3], d = gt[h];
      if (d)
        return `${c}${f} ${d}`;
      throw new Error(`Unknown vulgar fraction character: ${h}`);
    } else if (l) {
      const c = l[1] || "", f = l[2], h = gt[f];
      if (h)
        return `${c}${h}`;
      throw new Error(`Unknown vulgar fraction character: ${f}`);
    } else if (lr(i)) {
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
      const f = e ? ar(i) : parseFloat(i);
      return f === null || isNaN(f) || !isFinite(f) ? null : f.toString();
    }
  } catch (n) {
    throw new Mt(
      `Failed to clean numeric input: "${t}". ${n.message || "Cleaning error"}`
    );
  }
}
function Ml(t, e, i = null, s = null) {
  if (t && !(!ye(t) && !xi(t))) {
    if (!["decimal", "fraction"].includes(e)) {
      console.warn("Attempting to update to an invalid number format:", e);
      return;
    }
    for (const n of t.numberFormatKeys)
      if (typeof t[n] == "object" && t[n] !== null)
        for (const o in t[n])
          Object.prototype.hasOwnProperty.call(t[n], o) && (t[n][o] = P({ v: t[n][o], nf: e, dp: i, pl: !1, fr: s }));
      else
        t[n] = P({ v: t[n], nf: e, dp: i, pl: !1, fr: s });
  }
}
function cr(t) {
  return /^-?\d*\.?\d+$/.test(t);
}
function ur(t) {
  return /^-?(\d+\s+)?\d+\/\d+$/.test(t) || /^-?\d+$/.test(t);
}
function P(t) {
  if (t.v == null || t.v === "")
    return t.nf === "decimal" || !t.nf && t.o?.numberFormat !== "fraction" ? null : "";
  const e = t.o ?? {}, i = t.nf ?? e?.numberFormat ?? "decimal", s = t.dp ?? e?.decimalPlaces ?? Jt, n = t.pl ?? e?.parseLocale ?? !1, o = t.fr ?? e?.fractionRoundTo ?? Gi;
  if (i === "decimal") {
    if (typeof t.v == "number") {
      if (typeof s == "number" && s !== Jt) {
        const r = Math.pow(10, s);
        return Math.round(t.v * r) / r;
      }
      return t.v;
    }
    if (typeof t.v == "string") {
      const r = t.v.trim();
      if (cr(r) && !n) {
        const a = parseFloat(r);
        if (isFinite(a)) {
          if (typeof s == "number" && s !== Jt) {
            const l = Math.pow(10, s);
            return Math.round(a * l) / l;
          }
          return a;
        }
      }
    }
  } else if (i === "fraction" && typeof t.v == "string") {
    const r = t.v.trim();
    if (ur(r))
      try {
        const a = new mt(r);
        if (isFinite(a.valueOf())) {
          if (o === 0 || o === Gi)
            return a.toFraction(!0);
          const l = a.mul(o), c = Math.round(l.valueOf());
          return new mt(c, o).toFraction(!0);
        }
      } catch {
      }
  }
  try {
    const r = Ss(t.v, n);
    return r === null || r === "" ? i === "decimal" ? null : "" : i === "decimal" ? nr(r, s) : rr(r, o);
  } catch (r) {
    throw r instanceof Mt ? r : new Mt(
      `Failed to convert number format: "${t.v}" to ${i}. ${r.message}`
    );
  }
}
const ut = {
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
  const i = `fields.${t}`, s = Te(i);
  if (s === i) {
    const n = ut[t] || t;
    return Ue() && !ut[t] && console.warn(`[field-mappings] No translation or fallback for field: "${t}"`), n;
  }
  return Ue() && console.log(`[field-mappings] Translated "${t}" -> "${s}"`), s;
}
const xs = (t, e, i, s, n, o) => {
  const r = Y(t, e);
  if (r == null || r === "") return;
  if (typeof r != "string") {
    new T({
      item: t,
      message: Te("errors.validation.must_be_string", {
        0: ut[e]
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
  i.includes(a) || new T({
    item: t,
    message: Te("errors.validation.must_be_values", {
      0: ut[e],
      1: i.join(", ")
    }),
    shouldTranslate: !1,
    field: [[e]],
    index: s !== void 0 ? [s] : null,
    type: n ? "warning" : "error",
    issues: o
  });
};
function _l(t) {
  return t.filter((e) => e.type === "error");
}
function fr(t, e) {
  return typeof t == "object" && t !== null && e in t;
}
function dr(t) {
  return fr(t, "issues") && Array.isArray(t.issues);
}
function $l(t, e, i = !1) {
  if (!dr(t) || !t.issues?.length)
    return !1;
  const s = i ? "warning" : "error";
  return t.issues.filter((r) => r.type === s).some((r) => r.field?.length ? r.field.some((a) => a.every((l, c) => l === pr(e[c]))) : !1);
}
const hr = {
  partMaterial: "material",
  stockMaterial: "material"
};
function pr(t) {
  return hr[t] ?? t;
}
const gr = ["banding", "finish", "planing", "info"], Gl = p().refine(
  (t) => t.startsWith("side.") || t.startsWith("face."),
  { message: 'Location must start with "side." or "face."' }
).transform((t) => t), xe = j([
  b(),
  p(),
  U(p(), j([b(), p()]))
  // Object-based values: { type: 'oak', thickness: '1mm', test: true }
]), Ut = Pe.extend({
  // ========== Identity ==========
  type: L(gr).optional().describe("Type of extra"),
  enabled: b().default(!0).describe("Whether extra is enabled"),
  // ========== Face/Side mappings (superset - each extra uses what it needs) ==========
  // Face values (front/back) - partial record to allow any subset of faces
  faces: S({
    a: xe.optional(),
    b: xe.optional()
  }).optional().describe("Partial mapping of face keys to extra values"),
  // Side values (edges) - partial record to allow any subset of sides
  sides: S({
    a: xe.optional(),
    b: xe.optional(),
    c: xe.optional(),
    d: xe.optional(),
    l1: xe.optional(),
    l2: xe.optional(),
    w1: xe.optional(),
    w2: xe.optional()
  }).optional().describe("Partial mapping of side keys to extra values")
  // NOTE: Options are now centralized in CalculationData.extrasOptions
  // No per-shape options are stored - all extras use centralized configuration
}), ki = {
  // Inherit computed properties from validation base
  ...je
  // Add any extra-specific computed properties here
};
U(
  L(["a", "b"]),
  xe
);
U(
  L(["l1", "l2", "w1", "w2", "a", "b", "c", "d"]),
  xe
);
const ks = S({
  min: u().optional().describe("Minimum value"),
  max: u().optional().describe("Maximum value"),
  message: p().optional().describe("Custom error message")
});
S({
  scope: L(["face", "side"]),
  key: p(),
  // Face or Side key
  original: p()
  // Original ExtraLocation string
});
const mr = S({
  location: p().describe("Location identifier (e.g., face.a, side.l1)"),
  properties: U(p(), ks).optional(),
  disabledMessage: p().optional().describe("Message when location is disabled")
}), yr = S({
  global: U(p(), ks).optional(),
  locations: C(mr).optional().describe("Location-specific constraints"),
  defaultMessage: p().optional().describe("Default message when constraints not met")
});
S({
  scope: C(L(["faces", "sides"])).describe("Scopes this extra type supports"),
  faces: C(Mi()).optional().describe("Available face locations"),
  sides: C(Mi()).optional().describe("Available side locations"),
  constraints: yr.optional()
});
const br = Ut, wr = {
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
}, Sr = ["radius", "bevel"], xr = Pe.extend({
  // Corner type
  type: L(Sr).nullable().optional().describe("Type of corner modification"),
  // Size of the corner modification
  size: u().nonnegative().nullable().default(0).describe("Size of the corner modification in mm"),
  // Corner index
  index: u().min(0).max(3).default(0).describe("Corner index (0=BL, 1=BR, 2=TR, 3=TL)")
}), kr = {
  // Inherit computed properties from validation base
  ...je,
  // Check if corner has any operation
  hasOperation: {
    compute: (t) => t.type !== void 0 && t.size > 0,
    metadata: {
      cache: !0,
      dependencies: ["type", "size"],
      returnType: "boolean"
    }
  }
}, vr = ["l", "w"], Ir = ["top", "bottom", "left", "right", "merged"], Tr = S({
  // Coordinates
  x1: u().default(0),
  x2: u().default(0),
  y1: u().default(0),
  y2: u().default(0),
  // Dimension and position
  dimension: L(vr).optional(),
  position: L(Ir).optional(),
  // Stock reference - required as cuts cannot exist without a stock
  stock: E("Stock"),
  // Guillotine properties
  isGuillotine: b().default(!1),
  guillotineState: S({
    order: u().nullable().optional(),
    parentSegmentID: p().nullable().optional(),
    phase: u().nullable().optional(),
    segmentCutOrder: u().nullable().optional(),
    partProduced: p().nullable().optional()
  }).nullable().default({}),
  // PTX properties
  ptxData: S({
    order: u().nullable().optional(),
    function: u().nullable().optional(),
    isDummy: b().nullable().optional(),
    headCutStrip: b().nullable().optional()
  }).nullable().optional(),
  // Cut properties
  isHead: b().default(!1),
  isTrim: b().default(!1),
  beamTrimL1: b().default(!1),
  beamTrimL2: b().default(!1),
  beamTrimW1: b().default(!1),
  beamTrimW2: b().default(!1),
  // Distances
  distances: S({
    bottom: u().nullable().optional(),
    left: u().nullable().optional(),
    right: u().nullable().optional(),
    top: u().nullable().optional(),
    partSize: u().nullable().optional()
  }).nullable().optional(),
  // Runtime flags
  remove: b().optional().behavior({ compress: "exclude" })
}), Pr = {
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
}, Ar = Pe.extend({
  // Identity
  id: p().optional().describe("Unique identifier for the extras container"),
  // Individual extras - using ref for proper typing
  // Override default reference behavior to serialize full data for proper __entityType markers
  banding: E("Banding", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Edge banding configuration"),
  finish: E("Finish", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Surface finish configuration"),
  planing: E("Planing", {
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
}), Or = {
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
}, Dr = Ut, Cr = {
  // Inherit computed properties from Extra base (includes validation base)
  ...ki,
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
}, Lr = ["l1", "l2", "w1", "w2"], Rr = Pe.extend({
  // Position
  position: u().min(0).default(0).describe("Position along the side"),
  side: L(Lr).describe("Side where hinge is placed"),
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
}), Er = {
  // Inherit computed properties from validation base
  ...je,
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
}, Fr = ["regular", "hinge", "shelf"], Mr = Pe.extend({
  // Position
  x: u().min(0).default(0).describe("X position from left edge"),
  y: u().min(0).default(0).describe("Y position from bottom edge"),
  // Dimensions
  diameter: u().min(0.1).default(5).describe("Hole diameter in mm"),
  depth: u().min(0).optional().describe("Hole depth (undefined for through hole)"),
  // Configuration
  face: u().default(0).describe("Face index (0=front, 1=back)"),
  type: L(Fr).default("regular").describe("Type of hole")
}), _r = {
  // Inherit computed properties from validation base
  ...je,
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
function R(t, e) {
  return t._metadata = e, e.description ? t.describe(e.description) : t;
}
const $r = (t, e) => R(t, e), Gr = ["efficiency", "guillotine", "beam", "none"], zr = ["l", "w", "none"], jr = ["efficiency", "time"], Nr = ["l", "w"], Vr = ["efficiency", "smallest"], Br = ["dimensions", "identical", "none"], Wr = ["sheet", "linear", "roll"], vi = j([
  u().int().positive(),
  ze(),
  Hs()
]).transform((t) => t ?? 100).describe("Maximum stack height for beam saw stacking"), Ii = L(Gr).nullable().optional().transform((t) => t === null ? void 0 : t), Ti = L(zr).nullable().optional().transform((t) => t === null ? void 0 : t), Pi = L(Vr).default("efficiency").describe("Method for selecting stocks"), Ai = L(Br).default("identical").describe("How to stack identical parts"), Oi = S({
  strategy: L(jr).default("efficiency"),
  maxPhase: u().int().min(0).max(10).default(0),
  headCuts: b().default(!1)
}).default({
  strategy: "efficiency",
  maxPhase: 0,
  headCuts: !1
}), Di = S({
  primaryCompression: L(Nr).default("w")
}).default({
  primaryCompression: "w"
});
S({
  stockType: yi,
  /**
   * Stack height - Maximum stack height
   */
  stackHeight: vi,
  /**
   * Cut type - Type of cutting algorithm
   */
  cutType: Ii,
  /**
   * Cut preference - Preferred cutting direction
   */
  cutPreference: Ti,
  /**
   * Guillotine options - Configuration for guillotine cutting
   */
  guillotineOptions: Oi,
  /**
   * Efficiency options - Configuration for efficiency optimization
   */
  efficiencyOptions: Di,
  /**
   * Stock selection - Method for selecting stocks
   */
  stockSelection: Pi,
  /**
   * Stacking mode - How to stack identical parts
   */
  stackingMode: Ai
});
const qr = u().min(0).default(0), Ur = u().min(0).default(0), vs = u().min(0).default(0), Hr = S({
  dimension: Ur,
  minSpacing: vs
});
function ri(t) {
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
function oi(t, e) {
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
const Kr = R(
  Ii,
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
), Yr = R(
  Ti,
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
), Zr = R(
  Pi,
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
), Xr = R(
  Ai,
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
), Qr = R(
  Oi,
  {
    label: "fields.guillotineOptions",
    group: "guillotine",
    order: 1,
    type: "object"
  }
), Jr = R(
  Di,
  {
    label: "fields.efficiencyOptions",
    group: "efficiency",
    order: 1,
    type: "object"
  }
), nt = (t) => {
  const { min: e, allowZero: i = !1, nullable: s = !0 } = t || {};
  let n;
  return e !== void 0 ? n = i ? u().min(e) : u().min(e) : n = i ? u().min(0) : u().gt(0), s ? j([
    n,
    p(),
    ze()
  ]).transform((o) => o == null || o === "" ? null : typeof o == "string" ? P({ v: o }) ?? null : o) : j([
    n,
    p()
  ]).transform((o) => o === "" ? 0 : typeof o == "string" ? P({ v: o }) ?? 0 : o);
}, Is = () => R(
  yt,
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
), eo = () => R(
  ns,
  {
    label: "fields.orientationLock",
    group: "properties",
    options: [
      { value: "", label: "fields.orientationLock.free" },
      { value: "l", label: "fields.orientationLock.length" },
      { value: "w", label: "fields.orientationLock.width" }
    ]
  }
), Dt = (t) => R(
  nt({ allowZero: t.allowZero, nullable: !0 }).default(null),
  {
    label: t.label,
    placeholder: t.placeholder || "",
    group: "dimensions",
    allowZero: t.allowZero || !1,
    output: "number"
  }
), to = () => R(
  De(
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
), io = (t) => R(
  p().max(200).optional().transform((e) => e ? e.trim().toUpperCase() : ""),
  {
    label: "fields.name",
    placeholder: t?.placeholder || "",
    group: "general"
  }
), so = () => R(
  p().max(200).optional().transform((t) => t ? t.trim().toUpperCase() : ""),
  {
    label: "fields.material",
    placeholder: "fields.material",
    group: "properties"
  }
), no = () => R(
  nt({ allowZero: !0, nullable: !0 }).optional().transform((t) => {
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
), ro = () => R(
  u().min(0).max(100).optional().default(0),
  {
    label: "fields.discount",
    placeholder: "fields.discount",
    group: "pricing",
    step: 1,
    output: "number"
  }
), oo = () => R(
  Ks().max(500).transform((t) => t.replace(/,/g, " ")).optional(),
  {
    label: "fields.notes",
    placeholder: "fields.notes",
    group: "general"
  }
), ao = (t) => R(
  b().default(!1),
  t
), lo = (t, e) => R(
  L(t),
  e
), _e = {
  field: R,
  boolean: ao,
  enum: lo,
  custom: $r
}, ai = S({
  ...Pe.shape,
  // ========== Stock Type ==========
  stockType: R(
    L([...Wr]).default("sheet"),
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
  bladeWidth: R(
    nt({ allowZero: !0, nullable: !1 }).default(0),
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
  stackHeight: R(
    vi,
    {
      label: "fields.stackHeight",
      group: "stacking",
      order: 1,
      step: 1,
      info: "If your saw supports cutting multiple stock simultaneously, set the maximum total allowed height."
    }
  ),
  cutType: Kr,
  cutPreference: Yr,
  // ========== Guillotine Options ==========
  guillotineOptions: Qr,
  // ========== Efficiency Options ==========
  efficiencyOptions: Jr,
  // ========== General Options ==========
  options: S({
    stockSelection: Zr,
    minSpacing: nt({ allowZero: !0, nullable: !1 }).default(0),
    stackingMode: Xr,
    minSpacingDimension: S({
      dimension: nt({ allowZero: !0, nullable: !0 }).optional(),
      minSpacing: nt({ allowZero: !0, nullable: !0 }).optional()
    }).optional()
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical"
  })
}), co = {
  // Include validation computed properties (isValid)
  ...je,
  // Get valid cut types for current stock type
  validCutTypes: {
    compute: (t) => ri(t.stockType),
    metadata: {
      cache: !0,
      dependencies: ["stockType"],
      description: "Valid cut types for current stock type",
      returnType: "CutType[]"
    }
  },
  // Get valid cut preferences for current stock type and cut type
  validCutPreferences: {
    compute: (t) => oi(t.stockType, t.cutType),
    metadata: {
      cache: !0,
      dependencies: ["stockType", "cutType"],
      description: "Valid cut preferences for current stock type and cut type",
      returnType: "CutPreference[]"
    }
  }
}, uo = S({
  // Entity type added during serialization by toData() method
  // Used for automatic class recreation during deserialization
  __entityType: p().optional().describe("Entity type added during serialization by AutoSerializable.toData()"),
  // Reference marker for reference-based recreation
  // Used when objects reference each other
  __ref: p().optional().describe("Reference marker for object recreation")
}), fo = S({
  // ========== Selection State (excluded from compression) ==========
  selected: _e.boolean({
    label: "fields.selected",
    description: "Whether item is selected for multi-edit"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  multiEdit: _e.boolean({
    label: "fields.multiEdit",
    description: "Whether this is the multi-edit item"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  readonly: _e.boolean({
    label: "fields.readonly",
    description: "Whether input is readonly"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Validation State (excluded from compression and serialization) ==========
  isNew: _e.boolean({
    label: "fields.isNew",
    description: "Whether this is a newly created item that should skip validation until first user interaction",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" })
}), ho = S({
  l1: R(
    De((t) => t ?? 0, u()).default(0),
    { label: "fields.l1", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  l2: R(
    De((t) => t ?? 0, u()).default(0),
    { label: "fields.l2", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  w1: R(
    De((t) => t ?? 0, u()).default(0),
    { label: "fields.w1", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  w2: R(
    De((t) => t ?? 0, u()).default(0),
    { label: "fields.w2", group: "trim", allowZero: !0, min: 0, required: !1 }
  )
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 }), po = De(
  (t) => {
    if (t == null)
      return { l1: 0, l2: 0, w1: 0, w2: 0 };
    if (typeof t == "object" && t !== null) {
      const e = t, i = (s) => {
        if (s == null) return 0;
        if (typeof s == "string") {
          const n = P({ v: s });
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
  ho
), go = S({
  // ========== Identity ==========
  id: ts,
  index: u().int().min(0).optional(),
  // ========== Dimensions ==========
  // Input dimensions can be strings (for fractions) or numbers
  l: Dt({
    label: "fields.l",
    placeholder: "fields.l"
  }),
  w: Dt({
    label: "fields.w",
    placeholder: "fields.w"
  }),
  t: Dt({
    label: "fields.t",
    placeholder: "fields.t"
  }),
  q: to(),
  // ========== Material Properties ==========
  // Input name with uppercase transform
  name: io(),
  material: so(),
  // ========== Cost ==========
  cost: no(),
  // ========== Discount ==========
  discount: ro(),
  // ========== Trim Configuration ==========
  trim: po,
  // ========== Rotation (Runtime) ==========
  rot: pi.default(0),
  // ========== Flags ==========
  preventAutoRotation: _e.boolean({
    label: "fields.preventAutoRotation",
    description: "Prevent automatic rotation during optimization",
    group: "options"
  }),
  offcut: _e.boolean({
    label: "fields.offcut",
    description: "Mark as offcut material",
    group: "options"
  }),
  processed: _e.boolean({
    label: "fields.processed",
    description: "Has been processed",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Notes ==========
  notes: oo()
}), _t = S({
  ...uo.shape,
  // System properties from AutoSerializable
  ...Pe.shape,
  ...go.shape,
  // Core business fields
  ...fo.shape,
  // Input-specific UI fields
  // Override id with strict validation for input shapes/stock (allows blank)
  id: p().regex(/^(\d+\.\d+)?$/, 'ID must be blank or in format "1.0" (e.g., "1.0", "2.1")').default("").describe('Structured identifier for input shapes/stock in format 1.0 (e.g., "1.0") or blank')
}), Ci = {
  // Include validation computed properties (isValid)
  ...je,
  // Get the longer side dimension
  longSide: {
    compute: (t) => {
      const e = P({ v: t.l }) ?? 0, i = P({ v: t.w }) ?? 0;
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
      const e = P({ v: t.l }) ?? 0, i = P({ v: t.w }) ?? 0;
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
      const e = P({ v: t.l }) ?? 0, i = P({ v: t.w }) ?? 0;
      return e === i;
    },
    metadata: {
      cache: !1,
      dependencies: ["l", "w"],
      description: "Whether the rectangle is square (l === w)",
      returnType: "boolean"
    }
  }
}, Ct = _t.extend({
  // Add grain field for shapes
  //[] is grain needed for inputs?
  grain: Is(),
  // Add orientationLock with input-specific transform
  orientationLock: eo(),
  // ========== Shared Shape Properties ==========
  upDirection: R(
    us,
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
  stockLock: R(
    cs,
    { label: "fields.stockLock" }
  ),
  // ========== Stock Matching ==========
  stockMatch: $n.nullable().optional(),
  // ========== Custom Data ==========
  customData: R(
    fs,
    { label: "fields.customData", description: "Custom user-defined data" }
  ),
  // ========== Order Tracking ==========
  order_id: p().nullable().optional().describe("Order ID this shape belongs to (for order optimization workflow)"),
  // ========== UI Extension (excluded from compression) ==========
  selectedMaterial: R(
    Z().optional(),
    { label: "fields.selectedMaterial", description: "Selected material object" }
  ).behavior({ compress: "exclude" }),
  // ========== Machining ==========
  // Override default reference behavior to serialize full data
  machining: E("Machining", {
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
  extras: E("Extras", {
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
  fullStock: R(
    b().default(!1),
    {
      label: "fields.fullStock",
      description: "Purchase full stock sheet without cutting",
      group: "properties"
    }
  )
}), mo = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...Ci,
  // Check if has grain direction
  hasGrain: {
    compute: (t) => t.grain === "l" || t.grain === "w",
    metadata: {
      cache: !1,
      dependencies: ["grain"],
      returnType: "boolean"
    }
  }
}, Lt = S({
  ..._t.shape,
  ...rs.shape,
  // ========== Stock-specific Properties ==========
  // Override l to allow 0 for infinite length rolls
  l: Dt({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !0
  }),
  // Add grain field for stock
  grain: Is(),
  preventGrainRotation: _e.boolean({
    label: "fields.preventGrainRotation",
    description: "Prevent rotation that would change grain direction",
    group: "options",
    order: 4
  }),
  // Stock-specific flags (infiniteLength is now in sharedStockPropertiesSchema from merge above)
  used: _e.boolean({
    label: "fields.used",
    description: "Whether stock has been used"
  }),
  // Display and filtering properties
  color: R(
    ss,
    {
      label: "fields.color",
      description: 'Material color ({ hex: "#FF5733", name: "Red" } or legacy string)',
      group: "display",
      order: 1
    }
  ),
  weight: R(
    u().positive().optional(),
    {
      label: "fields.weight",
      description: "Weight in kg",
      group: "display",
      order: 2
    }
  ),
  imageUrl: R(
    j([p().url(), z("")]).optional(),
    {
      label: "fields.imageUrl",
      description: "Image URL for stock display",
      group: "display",
      order: 3
    }
  ),
  // Stock filter and categorization properties
  tags: R(
    C(p()).optional(),
    {
      label: "fields.tags",
      description: "Searchable tags for filtering",
      group: "display",
      order: 4
    }
  ),
  available: R(
    b().optional(),
    {
      label: "fields.available",
      description: "Whether stock is available for selection (defaults to true)",
      group: "display",
      order: 5
    }
  ),
  // Database ID (MongoDB ObjectId as string)
  db_id: R(
    p().optional(),
    {
      label: "fields.db_id",
      description: "MongoDB ObjectId for this document",
      group: "system"
    }
  ),
  // ========== Custom Data ==========
  customData: R(
    fs,
    { label: "fields.customData", description: "Custom user-defined data" }
  ),
  // Saw configuration (excluded from compression)
  saw: R(
    Z().optional(),
    { label: "fields.saw", description: "Saw configuration data" }
  ).behavior({ compress: "exclude" }),
  // Available extras from material (for e-commerce checkout)
  // Contains arrays of extra IDs that are available for this stock item
  extras: R(
    S({
      banding: C(p()).optional(),
      finish: C(p()).optional(),
      planing: C(p()).optional(),
      machining: C(p()).optional()
    }).optional(),
    {
      label: "fields.extras",
      description: "Available extras for this stock (inherited from material)",
      group: "display"
    }
  )
}), yo = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...Ci
  // InputStock doesn't define additional computed properties
}, Ts = Pe.extend({
  // ========== Identification ==========
  id: p().optional().describe("Unique identifier"),
  // ========== Shape References ==========
  shapeIds: C(p()).default([]).describe("List of shape IDs in this group"),
  shapes: C(p()).default([]).transform((t) => t?.map(String) ?? []).describe("Shape identifiers"),
  // ========== Group Properties ==========
  direction: Si,
  // 'horizontal' | 'vertical'
  q: u().int().min(1).default(1).describe("Quantity of groups"),
  duplicate: b().default(!1).describe("If a duplicate"),
  // ========== Material Properties (from Group) ==========
  name: p().optional().describe("Group name"),
  material: p().optional().describe("Material type"),
  grain: yt.describe("Grain direction"),
  // ========== Stock Matching (excluded during compression) ==========
  stockMatch: S({
    stockId: p().optional(),
    material: p().optional(),
    thickness: u().optional(),
    grain: yt.optional()
  }).optional().describe("Matching stock information").behavior({ compress: "exclude" }),
  // ========== Runtime Properties ==========
  shapeList: C(Z()).optional().describe("Runtime shape list for validation").behavior({ compress: "exclude" })
}), bo = {
  // Include validation computed properties (isValid)
  ...je
  // InputUserGroup doesn't define additional computed properties
};
S({
  parts: C(u()).describe("Indices of shapes/parts in the parts array (user-friendly name for shapes)"),
  direction: Si,
  q: u().int().min(1).describe("Quantity of groups")
});
const wo = Pe.extend({
  // Collections of machining operations
  holes: ee("Hole").default([]).describe("Array of holes").behavior({
    serialize: "full",
    clone: "copy"
  }),
  hingeHoles: ee("HingeHole").default([]).describe("Array of hinge hole sets").behavior({
    serialize: "full",
    clone: "copy"
  }),
  corners: ee("Corner").default([]).describe("Array of corner operations").behavior({
    serialize: "full",
    clone: "copy"
  }),
  // Validation
  enabled: b().default(!0).describe("Whether machining is enabled")
}), So = {
  // Inherit computed properties from validation base
  ...je,
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
}, zl = {
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
}, xo = Ut, ko = {
  // Inherit computed properties from Extra base
  ...ki,
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
}, vo = S({
  // ========== Storage ==========
  // Points stored as a map (will be converted to/from Map in class)
  // In serialized form this is a record, at runtime it's a Map
  points: j([
    Ys(p(), E("Point")),
    U(p(), E("Point"))
  ]).default(() => /* @__PURE__ */ new Map())
}), Io = {
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
}, li = Pe.extend({
  // Core properties from shared schema
  stockType: yi,
  stackHeight: vi.describe("Maximum stack height"),
  cutType: Ii,
  cutPreference: Ti,
  // Blade width (numeric for runtime)
  bladeWidth: qr.describe("Blade width"),
  // Guillotine options
  guillotineOptions: Oi,
  // Efficiency options
  efficiencyOptions: Di,
  // General options (nested stockSelection and stackingMode)
  options: S({
    stockSelection: Pi,
    minSpacing: vs,
    stackingMode: Ai,
    minSpacingDimension: Hr
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical",
    minSpacingDimension: {
      dimension: 0,
      minSpacing: 0
    }
  }).describe("General saw options")
}), To = {
  // Include validation computed properties
  ...je,
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
li.describe(JSON.stringify({
  name: "Saw",
  description: "Runtime saw configuration for optimization",
  version: "1.0.0",
  category: "configuration"
}));
const st = 1e-10, Po = 10, Ao = Number.MAX_SAFE_INTEGER, Oo = 4294967295, me = (t) => typeof t == "number" && Number.isFinite(t), Rt = (t) => Array.isArray(t) && t.length > 0;
function pt(t, e, i = st) {
  if (t === e) return 0;
  if (Number.isInteger(t) && Number.isInteger(e))
    return t > e ? 1 : -1;
  const s = t - e;
  return Math.abs(s) < i ? 0 : s;
}
const Do = {
  greaterThan: (t, e, i = st) => !me(t) || !me(e) ? !1 : pt(t, e, i) > 0,
  greaterThanOrEqualTo: (t, e, i = st) => !me(t) || !me(e) ? !1 : pt(t, e, i) >= 0,
  lessThan: (t, e, i = st) => !me(t) || !me(e) ? !1 : pt(t, e, i) < 0,
  lessThanOrEqualTo: (t, e, i = st) => !me(t) || !me(e) ? !1 : pt(t, e, i) <= 0,
  equalTo: (t, e, i = st) => !me(t) || !me(e) ? !1 : pt(t, e, i) === 0
};
function Co(t) {
  return me(t) ? Number.isInteger(t) ? t : Number(t.toFixed(Po)) : !1;
}
function Lo(t) {
  if (!me(t) || t < 0 || t > Ao)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (Oo + 1) * t);
}
function Ro(t, e) {
  if (!Rt(t))
    throw new Error("Invalid array parameter");
  if (!me(e) || e < 0 || e > t.length)
    throw new Error("Invalid size parameter");
  const i = t.slice(), s = t.length - e;
  for (let n = t.length - 1; n >= s; n--) {
    const o = Math.floor(Math.random() * (n + 1));
    [i[n], i[o]] = [i[o], i[n]];
  }
  return i.slice(s);
}
class vt {
  static calculateMean(e) {
    if (!Rt(e))
      throw new Error("Invalid input array");
    return e.reduce((i, s) => i + s, 0) / e.length;
  }
  static calculateStandardDeviation(e, i = null) {
    if (!Rt(e))
      throw new Error("Invalid input array");
    const s = i ?? this.calculateMean(e), n = e.reduce((o, r) => {
      const a = r - s;
      return o + a * a;
    }, 0) / e.length;
    return Math.sqrt(n);
  }
  static calculateCoefficientOfVariation(e) {
    if (!Rt(e))
      throw new Error("Invalid input array");
    const i = this.calculateMean(e);
    if (i === 0)
      throw new Error("Mean is zero, coefficient of variation undefined");
    return this.calculateStandardDeviation(e, i) / i;
  }
}
const I = {
  ...Do,
  isNumber: me,
  round: Co,
  getRandom: Lo,
  getRandomSample: Ro,
  calculateStandardDeviation: vt.calculateStandardDeviation.bind(vt),
  calculateCoefficientOfVariation: vt.calculateCoefficientOfVariation.bind(vt)
};
function zi(t) {
  return t && typeof t == "object" && typeof t.toData == "function";
}
let ji = 0, Ni = Date.now();
const Eo = 1e4;
function Fo() {
  return ji % Eo === 0 && (Ni = Date.now()), `${Ni}-${(ji++).toString(36)}`;
}
class Mo {
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
    this.autoId = e?.autoId || Fo(), Object.defineProperty(this, "_serializationMode", {
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
      const i = ht(e.schema), s = e.schema;
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
            for (const h of c) {
              if (!h) continue;
              const d = ii(h);
              if (d) {
                const g = f;
                i[g] || (i[g] = d);
                break;
              }
            }
            for (const h of c) {
              if (!h || !h._def) continue;
              const d = ht(h);
              for (const [g, y] of Object.entries(d)) {
                const v = s ? `${s}.${n}.${g}` : `${n}.${g}`;
                i[v] || (i[v] = y);
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
        const a = ht(r);
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
      r ? a = e : a = s.partial().parse(e);
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
        if (s instanceof Zi) {
          const n = s.issues.map((o) => new T({
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
      const g = s.pop() || "0", y = parseInt(g, 10);
      isNaN(y) && s.push(g), n = String(e);
    } else {
      const g = s.pop() || "0", y = parseInt(g, 10);
      isNaN(y) ? (s.push(g), n = "1") : n = String(y + 1);
    }
    s.push(n);
    const o = s.join("."), a = `${this.autoId.includes(".") ? this.autoId.substring(0, this.autoId.indexOf(".")) : this.autoId}.${n}`, l = this.constructor, c = this.getDirectPropertyCopy(i), f = l.schema;
    let h = {};
    f && (h = ht(f));
    const d = l.defaults || (f ? f.parse({}) : {}) || {};
    for (const [g, y] of Object.entries(h))
      y.clone === "reset" && (g in d ? c[g] = d[g] : delete c[g]);
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
    if (o && (r = ht(o)[i] || null), r?.clone)
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
        if (zi(r)) {
          if (i?.serialize === "reference" || s === "compressed" && i?.compress === "reference") {
            const c = "autoId" in r && r.autoId, f = typeof r.getType == "function";
            if (c) {
              const h = f ? r.getType() : r.constructor.name;
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
    if (zi(e)) {
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
    const n = bt().get(i);
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
class H extends Mo {
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
    H.recreateFunc = e;
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
        const l = i.partial().safeParse(e);
        l.success ? r = l.data : r = this.filterInvalidFields(e, l.error, i);
      }
    }
    if (i && r) {
      let a = H._schemaKeysCache.get(i);
      if (!a) {
        const l = i.shape || i._def?.shape;
        l && (a = Object.keys(l), H._schemaKeysCache.set(i, a));
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
    const a = s.partial().safeParse(o);
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
    const s = { ...e }, n = i.shape;
    for (const [o, r] of Object.entries(n)) {
      const a = s[o];
      if (a == null || typeof a == "object" && typeof a.getType == "function")
        continue;
      const l = this.extractClassNameFromSchema(r);
      l ? s[o] = this.deserializeValueWithClassName(a, l) : s[o] = this.deserializeValue(a);
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
      const s = e.__entityType || i, o = bt().get(s);
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
    return e && typeof e == "object" ? (s && (e.id || e.autoId), H.recreateFunc ? H.recreateFunc(e, s, i) : { ...e, __ref: i }) : e;
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
    if (H._computedPropsInitialized.has(e)) return;
    const i = e.computedProperties;
    if (!i) {
      H._computedPropsInitialized.add(e);
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
    H._computedPropsInitialized.add(e);
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
      const r = i.partial().safeParse(e);
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
      if (i instanceof Zi)
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
      return e.map((s) => H.cleanEntityForAPI(s));
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
      if (r instanceof Zs) {
        const a = r.options.some((c) => c instanceof Xs), l = r.options.some((c) => c instanceof Qs);
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
    if (e instanceof Js || e instanceof en)
      return this.unwrapSchema(e._def?.innerType);
    if (e instanceof tn)
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
class Qe extends H {
  // Required: Define schema and computed properties for SchemaClass
  static schema = cn;
  static computedProperties = un;
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
    return m.Line;
  }
  /**
    * Validate line
    */
  validate() {
    const e = [];
    return (!I.isNumber(this.x1) || !I.isNumber(this.x2) || !I.isNumber(this.y1) || !I.isNumber(this.y2)) && e.push(new T({
      message: "Line coordinates must be valid numbers",
      type: "error"
    })), this.x1 === this.x2 && this.y1 === this.y2 && e.push(new T({
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
      if (this.dimension === "l" ? (a = I.greaterThan(this.x2, r.x) && I.lessThan(this.x1, r.x + r.l), l = I.greaterThan(this.y1 + n, r.y) && I.lessThan(this.y1 - n, r.y + r.w)) : this.dimension === "w" && (a = I.greaterThan(this.x1 + n, r.x) && I.lessThan(this.x1 - n, r.x + r.l), l = I.greaterThan(this.y2, r.y) && I.lessThan(this.y1, r.y + r.w)), a && l)
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
    return new Qe({ x1: e, y1: i, x2: s, y2: n, origin: o, type: r });
  }
  get lineDimension() {
    return !I.isNumber(this.x1) || !I.isNumber(this.x2) || !I.isNumber(this.y1) || !I.isNumber(this.y2) ? null : this.x1 === this.x2 && this.y1 !== this.y2 ? "w" : this.y1 === this.y2 && this.x1 !== this.x2 ? "l" : null;
  }
  get lineDirection() {
    return !I.isNumber(this.x1) || !I.isNumber(this.x2) || !I.isNumber(this.y1) || !I.isNumber(this.y2) ? null : this.x1 < this.x2 ? "lr" : this.x1 > this.x2 ? "rl" : this.y1 < this.y2 ? "bt" : this.y1 > this.y2 ? "tb" : null;
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
const _o = {
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
}, It = {
  topLeft: {
    top: ["topRight"],
    default: ["topRight"]
  },
  bottomRight: {
    right: ["topRight"],
    default: ["topRight"]
  }
}, Tt = {
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
class be extends H {
  // Required: Define schema and computed properties for SchemaClass
  static schema = pn;
  static computedProperties = gn;
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
    return m.Point;
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
    return new be(e, i, s);
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
    const s = new be(e ?? this.x, i ?? this.y);
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
      const s = _o[this.direction];
      return s && s[this.corner] && s[this.corner][this.grid] && i.add(s[this.corner][this.grid]), i;
    }
    return e?.cutType !== "efficiency" ? (It[this.corner] && (this.grid ? It[this.corner][this.grid] && It[this.corner][this.grid].forEach((s) => i.add(s)) : It[this.corner].default?.forEach((s) => i.add(s))), i) : (Tt[this.corner] && (this.grid ? Tt[this.corner][this.grid] && Tt[this.corner][this.grid].forEach((s) => i.add(s)) : Tt[this.corner].default?.forEach((s) => i.add(s))), i);
  }
}
function de(t) {
  return !(t === void 0 || t === null || t === "" || typeof t == "object" && !Object.values(t).length);
}
function $e(t) {
  return t ? t === "l" ? "w" : "l" : null;
}
function jl(t) {
  return t ? t === "x" ? "y" : "x" : null;
}
function Nl(t) {
  return t === "l" ? "x" : t === "w" ? "y" : null;
}
function Vl(t) {
  return t === "x" ? "l" : t === "y" ? "w" : null;
}
function Bl(t, e) {
  return sn(t, e);
}
function Wl(t, e) {
  return Y(t, e);
}
function ql(t, e, i) {
  nn(t, e, i);
}
function Ul(t, e = !1) {
  if (!de(t) || typeof t != "object") return !1;
  const i = Object.values(t);
  return i.length === 0 ? !1 : e ? i.some((s) => de(s) && s) : i.some((s) => de(s));
}
function Hl(t) {
  if (!t?.length) return [];
  const e = t.filter((s) => !s.added), i = {};
  return e.forEach((s) => {
    const n = $o(s.stock) || 1;
    i[s.parentId] ? i[s.parentId].count += n : (i[s.parentId] = {}, i[s.parentId].count = n, i[s.parentId].id = s.parentId, i[s.parentId].name = s?.name ? s.name : s.id, i[s.parentId].l = s.l, i[s.parentId].w = s.w, i[s.parentId].t = s.t, i[s.parentId].material = s.material, i[s.parentId].rot = s.rot, i[s.parentId].orientationLock = s.orientationLock);
  }), Object.values(i);
}
function $o(t, e = []) {
  if (!t) return 1;
  if (t?.stack?.number) return t.stack.number;
  if (t?.stack?.stock) {
    const i = typeof t.stack.stock == "string" ? t.stack.stock : t.stack.stock?.id;
    if (i && e.length > 0)
      return e.find((n) => n.id === i)?.stack?.number || 1;
  }
  return typeof t?.stack == "string" && e.find((s) => s.id === t.stack)?.stack?.number || 1;
}
function Kl() {
  const t = document.documentElement;
  return "requestFullscreen" in t || "webkitRequestFullscreen" in t || "mozRequestFullScreen" in t || "msRequestFullscreen" in t;
}
function Yl(t, e) {
  if (t == null) return "-";
  let i = Math.round(t).toString();
  for (; i.length < e; ) i = "0" + i;
  return i;
}
function at(t, e = !1) {
  const i = typeof t.l == "string" ? P({ v: t.l }) : t.l, s = typeof t.w == "string" ? P({ v: t.w }) : t.w;
  if (!e || !("trim" in t))
    return { l: i, w: s };
  if (ws(t))
    return { l: i, w: s };
  if (bs(t) && !t.hasTrim)
    return { l: i, w: s };
  const n = t.trim, o = P({ v: n.w1 ?? 0 }) + P({ v: n.w2 ?? 0 }), r = P({ v: n.l1 ?? 0 }) + P({ v: n.l2 ?? 0 });
  return {
    l: i - (typeof o == "string" ? P({ v: o }) : o),
    w: s - (typeof r == "string" ? P({ v: r }) : r)
  };
}
function Go(t, e) {
  if ("trim" in t && !ws(t)) {
    const i = t.trim;
    e.l = e.l - (P({ v: i.w1 ?? 0 }) + P({ v: i.w2 ?? 0 })), e.w = e.w - (P({ v: i.l1 ?? 0 }) + P({ v: i.l2 ?? 0 }));
  }
  return e;
}
function et(t, e, i = !1) {
  let s = {
    l: t.l,
    w: t.w
  };
  (xi(t) || ye(t) || xt(t)) && (s = {
    l: P({ v: t.l }),
    w: P({ v: t.w })
  });
  const n = ("rot" in t ? t.rot : 0) ?? 0;
  return i && (s = Go(t, s)), n === e || ([s.l, s.w] = [s.w, s.l]), s;
}
function Ps(t) {
  if (!("l" in t) || !("w" in t)) throw new Error("rotatable item must have l & w properties");
}
function zo(t) {
  X(t) || (Ps(t), [t.l, t.w] = [t.w, t.l]);
}
function Vi(t, e) {
  return I.lessThanOrEqualTo(t, e);
}
function tt(t, e) {
  return Vi(t.l, e.l) && Vi(t.w, e.w);
}
function ft(t, e, i = null) {
  if (!e || !t)
    throw new Error("Container and shape are required");
  const s = "allowExactFitShapes" in e && e.allowExactFitShapes === !0, n = at(e, !0), o = s ? at(e, !1) : n, r = at(t, !0);
  let a = n;
  if (s && (I.equalTo(r.l, o.l) && I.equalTo(r.w, o.w) || I.equalTo(r.l, o.w) && I.equalTo(r.w, o.l)) && (a = o), r.l * r.w > a.l * a.w)
    return !1;
  const l = $t(t, e);
  if (t.orientationLock || i !== null) {
    const h = i ?? (l === "w" ? 1 : 0), d = et(t, h, !0);
    if (s) {
      const g = et(t, h, !1);
      if (I.equalTo(g.l, o.l) && I.equalTo(g.w, o.w))
        return tt(g, a);
    }
    return tt(d, a);
  }
  const c = et(t, 0, !0);
  if (s) {
    const h = et(t, 0, !1);
    if (I.equalTo(h.l, o.l) && I.equalTo(h.w, o.w) && tt(h, a)) return !0;
  }
  if (tt(c, a)) return !0;
  const f = et(t, 1, !0);
  if (s) {
    const h = et(t, 1, !1);
    if (I.equalTo(h.l, o.l) && I.equalTo(h.w, o.w) && tt(h, a)) return !0;
  }
  return tt(f, a);
}
function jo(t) {
  if ("orientationLock" in t)
    return t.orientationLock;
  let e = null;
  return (X(t) || xt(t) || oe(t) || ye(t)) && (e = t.orientationLock), e;
}
function $t(t, e) {
  const i = jo(t);
  if (!de(i)) return null;
  if (!e || "direction" in t) return i;
  if (!X(t) && Ht(t)) return null;
  if ("getStock" in e) {
    const s = e.getStock;
    if (s && de(s.grain))
      return i === s.grain ? "l" : "w";
  }
  return i;
}
function As(t, e) {
  if (X(t))
    return ft(t, e, t.rot) ? [t.rot] : [];
  const i = [];
  for (let s = 0; s <= 1; s++)
    we(t, s, e) && ft(t, e, s) && i.push(s);
  return i;
}
function we(t, e = null, i = null) {
  if (!de(e))
    throw new Error("no rotation provided to canRotate");
  if (e === !0 && (e = 1), e === !1 && (e = 0), t.preventAutoRotation && e !== 0 || !X(t) && Ht(t) && e !== 0 || i && !ft(t, i, e))
    return !1;
  const s = $t(t, i);
  return !(s === "l" && e === 1 || s === "w" && e === 0);
}
function No(t, e = null, i = null) {
  const s = "rot" in t ? t.rot : 0;
  return e === null && (e = s === 0 ? 1 : 0), !X(t) && Ht(t) ? !0 : we(t, e, i) ? (s === e || zo(t), !0) : !1;
}
function ue(t, e = null, i = null) {
  return e ? e = 1 : e = 0, i && e && !ft(t, i, e) ? !1 : No(t, e, i);
}
function Zl(t, e) {
  if (X(t)) return t.rot;
  if (!de(t.orientationLock) || Ht(t)) return null;
  const i = e.getStock;
  return !t.orientationLock || !de(i?.grain) ? null : t.orientationLock === i?.grain ? 0 : 1;
}
function Bi(t, e, i, s, n = null) {
  if (!s) throw new Error("requiredSide not supplied to canRotateToDimensionRange");
  const o = at(t);
  if (o.l >= e && o.l <= i || o.w >= e && o.w <= i) {
    if (t.l === t.w) return !0;
    const r = Math.max(o.l, o.w), a = Math.min(o.l, o.w);
    if (n) {
      if (s === "l") {
        if (r >= e && r <= i && we(t, 0, n) || a >= e && a <= i && we(t, 1, n)) return !0;
      } else if (s === "w" && (a >= e && a <= i && we(t, 0, n) || r >= e && r <= i && we(t, 1, n)))
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
function Vo(t, e, i, s) {
  if (!i) throw new Error("requiredSide not supplied to rotateToDimension");
  if (t.l !== e && t.w !== e) return !1;
  if (t.l === t.w) return !0;
  const n = at(t), o = Math.max(n.l, n.w), r = Math.min(n.l, n.w);
  if (i === "l") {
    if (o === e && we(t, 0, s)) return ue(t, 0);
    if (r === e && we(t, 1, s)) return ue(t, 1);
  } else if (i === "w") {
    if (r === e && we(t, 0, s)) return ue(t, 0);
    if (o === e && we(t, 1, s)) return ue(t, 1);
  }
  return !1;
}
function Ht(t) {
  Ps(t);
  const e = at(t);
  return I.equalTo(e.l, e.w);
}
class Kt extends H {
  // Zod schema for validation and serialization
  static schema = gi;
  static computedProperties = mi;
  constructor(e = {}) {
    super(e);
    let i = !1;
    Ie(this) && (i = this.infiniteLength), !e?.preventAutoRotation && !i && (this.orientationLock ? (this.orientationLock === "l" && ue(this, 0), this.orientationLock === "w" && ue(this, 1)) : this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !e?.preventGrainRotation && (this.grain = $e(this.grain)))), this.calculateDimensions(), e.skipValidation || e.skipBusinessValidation || e.validationMode === "none" || e.validationMode === "schema" || this.validate();
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
    return m.Rectangle;
  }
  /**
   * Validate business rules for the rectangle
   * This is separate from schema validation which happens in the constructor
   * Override this method in subclasses for domain-specific validation
   */
  validate() {
    if (this.issues = [], this.warnings = [], (this.l <= 0 || this.w <= 0) && this.issues.push(new T({
      message: "Rectangle dimensions must be positive",
      type: "error",
      field: [["l"], ["w"]],
      item: this
    })), this.hasTrim) {
      const e = {
        x: (this.trim.w1 || 0) + (this.trim.w2 || 0),
        y: (this.trim.l1 || 0) + (this.trim.l2 || 0)
      };
      e.x >= this.l && this.warnings.push(new T({
        message: "Trim values exceed length",
        type: "warning",
        field: [["trim"]],
        item: this
      })), e.y >= this.w && this.warnings.push(new T({
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
      this.q = 0, this.issues.push(new T({
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
        return new Qe({
          x1: i,
          x2: i + this.l,
          y1: s,
          y2: s,
          type: "bottom",
          validationMode: "none"
          // parentId: this.id
        });
      case "right":
        return new Qe({
          x1: i + this.l,
          x2: i + this.l,
          y1: s,
          y2: s + this.w,
          type: "right",
          validationMode: "none"
          // parentId: this.id
        });
      case "top":
        return new Qe({
          x1: i,
          x2: i + this.l,
          y1: s + this.w,
          y2: s + this.w,
          type: "top",
          validationMode: "none"
          // parentId: this.id
        });
      case "left":
        return new Qe({
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
      bottomLeft: new be(this.x, this.y),
      topLeft: new be(this.x, this.y + this.w),
      topRight: new be(this.x + this.l, this.y + this.w),
      bottomRight: new be(this.x + this.l, this.y)
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
    const s = new Kt({
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
class Li extends Kt {
  // Zod schema for validation and serialization
  static schema = bi;
  static computedProperties = wi;
  constructor(e = {}) {
    super(e), e.skipValidation || this.validateContainer(e);
  }
  // applyComputedProperties removed - handled by SchemaClass base
  // Container.computedProperties includes Rectangle.computedProperties via spread
  /**
    * Get entity type
    */
  getType() {
    return m.Container;
  }
  /**
    * Validate container-specific properties
    */
  validateContainer(e) {
    const i = ["sheet", "linear", "roll", null, void 0, ""], s = this?.stockType;
    if (!i.includes(s)) {
      const n = new T({
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
    const i = Li.schema.partial().parse(e);
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
    return Ie(this) ? this : ot(this) ? this.stock : X(this) ? this.stock : null;
  }
}
class Me extends H {
  // Required: Define schema and computed properties
  static schema = os;
  static computedProperties = Dn;
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
    return m.GuillotineState;
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
class Ri extends H {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Tr;
  static computedProperties = Pr;
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
    return m.Cut;
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
    return new Ri({ x1: e, y1: i, x2: s, y2: n, position: r, stock: o });
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
class Os extends Kt {
  // Zod schema for validation and serialization
  static schema = wt;
  static computedProperties = St;
  constructor(e = {}) {
    if (super(e), !this.guillotineState)
      this.guillotineState = new Me();
    else if (!(this.guillotineState instanceof Me)) {
      const i = typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new Me(i);
    }
    (!this.firstShape || typeof this.firstShape != "object") && (this.firstShape = { sampleRotations: [], isFirstShape: !1 }), (!this.priority || typeof this.priority != "object") && (this.priority = {}), oe(this) && (!this.group || typeof this.group != "object") && (this.group = {
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
    if (!this.guillotineState || !(this.guillotineState instanceof Me)) {
      const e = this.guillotineState && typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new Me(e);
    }
  }
  /**
   * Override update to ensure guillotineState is properly handled
   */
  update(e) {
    const i = this.guillotineState instanceof Me ? this.guillotineState : null;
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
    return m.Placeable;
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
    if (this.added = !1, this.stock = null, this.placementOrder = void 0, this.x = 0, this.y = 0, e || (this.score = null, this.bestScore = null), this.firstShape.isFirstShape = !1, n || (this.firstShape.sampleRotations = []), this.patternMatch = !1, this.fitsStock = null, this.guillotineState instanceof Me)
      if (i) {
        const o = this.guillotineState.stripShapeBatches;
        this.guillotineState.reset(), o && (this.guillotineState.stripShapeBatches = o);
      } else
        this.guillotineState.reset();
    else
      this.guillotineState = new Me();
    oe(this) && (s || "group" in this && this.group && (delete this.group.placementOrder, this.group.inGroup = !1, this.group.inUserGroup = !1, this.group.reference = null, this.group.addedAsGroup = null)), X(this) && "shapes" in this && Array.isArray(this.shapes) && this.shapes.forEach((o) => {
      "reset" in o && typeof o.reset == "function" && o.reset(e, i, s);
    });
  }
  /**
   * Add shape to stock (placeholder for optimization logic)
   */
  addToStock(e) {
    this.stock = e, this.added = !0, e.used = !0, this.grain = e.grain, !X(this) && e?.grain && this.rot && (this.grain = $e(e.grain));
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.added = !1, oe(this) && (this.group.addedAsGroup = null, this.firstShape.isFirstShape = !1), X(this) && this.shapes.forEach((e) => {
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
      group: oe(e) ? e.group.reference : null,
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
    ue(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
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
    return Ie(e) && typeof this.fitsStock?.[e.parentId] < "u" ? this.fitsStock?.[e.parentId]?.[i ?? "any"] === !0 : ft(this, e, i);
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
    const s = new be(this.x + this.l, this.y);
    s.corner = "bottomRight";
    const n = new be(this.x, this.y + this.w);
    if (n.corner = "topLeft", e?.cutType !== "efficiency" && !i)
      return [n, s];
    const o = new be(this.x, this.y);
    o.corner = "bottomLeft";
    const r = new be(this.x + this.l, this.y + this.w);
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
    if (this.getType() === m.Shape && this.identicalTo?.length && (this.parentId === e.parentId || this.identicalTo.includes(e.parentId)))
      return !0;
    if (this.getType() !== m.Group) {
      if (e.parentId === this.parentId) return !0;
      if (this.getType() === m.Shape && i && this.parentId !== e.parentId) return !1;
    } else if (e.autoId === this.autoId) return !0;
    const { w: s, l: n } = this, { w: o, l: r } = e;
    if (!(s === o && n === r) && !(s === r && n === o)) return !1;
    const a = this.trim, l = e.trim;
    return !a || !l ? a === l : a.l1 === l.l1 && a.l2 === l.l2 && a.w1 === l.w1 && a.w2 === l.w2;
  }
  /**
   * Get perimeter cut vectors (for export)
   */
  getPerimeterCutVectors(e = null) {
    return e === null && (e = Ie(this.stock) ? this.stock.bladeWidth / 2 : 0), [
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
    return this.getPerimeterCutVectors().forEach((n) => i.push(new Ri({
      stock: Ie(this.stock) ? this.stock : e,
      x1: n.x1,
      x2: n.x2,
      y1: n.y1,
      y2: n.y2,
      position: n.type
    }))), i = i.filter((n) => n.isInsideStock), i;
  }
}
let Pt = null, ei = !1;
function Bo() {
  if (ei)
    return Pt;
  try {
    Pt = { runTests: !1, throwErrorsOnFailedTests: !1 }, ei = !0;
  } catch {
    Pt = { runTests: !1, throwErrorsOnFailedTests: !1 }, ei = !0;
  }
  return Pt;
}
const Wi = Xi("tests");
Xi("timers");
let Wo, J;
try {
  {
    const t = new Proxy({}, { get: () => () => t });
    J = () => t;
  }
} catch {
  const e = new Proxy({}, { get: () => () => e });
  J = () => e;
}
function pe(t = [], e = null) {
  if (!t?.length) return;
  const i = Bo();
  if (Ue() && i && i.runTests) {
    const n = i?.testCollector || Wo;
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
        if (a = !1, l = c instanceof Error ? c.message : String(c), e ? Wi(e, l) : Wi(l), n && n.addResult({
          passed: !1,
          error: l,
          issueMessage: e || void 0,
          timestamp: r
        }), i && i.throwErrorsOnFailedTests) throw c;
      }
      a && n && n.addResult({
        passed: !0,
        issueMessage: e || void 0,
        timestamp: r
      });
    }
  }
}
function qo(t) {
  return t === "horizontal" ? "x" : t === "vertical" ? "y" : null;
}
function qi(t) {
  return t === "horizontal" ? "l" : t === "vertical" ? "w" : null;
}
class Yt extends Os {
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
  static schema = si;
  static computedProperties = ds;
  static defaults = si.parse({});
  constructor(e = {}) {
    super(e);
  }
  /**
    * Get entity type
    */
  getType() {
    return m.Shape;
  }
  /**
    * Create shape with live objects
    */
  static create(e) {
    const i = new Yt(e.data);
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
    ue(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
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
class Zt extends Os {
  // Required: Define schema and computed properties for SchemaClass
  static schema = En;
  static computedProperties = Fn;
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
    return this.type === "user" ? m.UserGroup : this.type === "strip" ? m.StripGroup : this.type === "firstShape" ? m.FirstShapeGroup : m.Group;
  }
  /**
    * Initialize shapes array with optional context for reference resolution
    */
  initShapes(e, i) {
    return e.map((s) => {
      if (!oe(s) && !Jn(s))
        throw console.log(s), new Error("[GROUP] attempted to init a group with an item other than a shape");
      if (oe(s))
        return s.group.reference = this, s.group.inGroup = !0, s;
      if (i && i.shapeList && s) {
        const o = i.shapeList.find((r) => r.autoId === s.autoId);
        if (o)
          return o.group.reference = this, o.group.inGroup = !0, o;
      }
      const n = i ? { ...s, __context: i } : s;
      return new Yt(n);
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
    const i = { ...e.data, shapes: e.shapes }, s = new Zt(i);
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
    if (!e) throw new Error("placeShapes requires stock");
    if (!(!this.shapes || this.shapes.length === 0)) {
      if (this.x === null || this.x === void 0 || this.y === null || this.y === void 0)
        throw new Error(`Group ${this.id} cannot place shapes: group position is not set (x=${this.x}, y=${this.y})`);
      if (this.positions && this.positions.length > 0)
        for (const i of this.positions) {
          const s = this.shapes.find((n) => n.autoId === i.autoId);
          s && (ue(s, i.rot, this.container) || console.error(`  ❌ FAILED to restore rotation for ${s.id} from ${s.rot} to ${i.rot}`));
        }
      if (this.positions && this.positions.length > 0)
        for (const i of this.positions) {
          const s = this.shapes.find((n) => n.autoId === i.autoId);
          s && s.rot !== i.rot && (console.warn(`[placeMyShapes] Shape ${s.id} has wrong rotation ${s.rot}, expected ${i.rot} - forcing rotation now`), ue(s, i.rot, this.container) || console.error(`[placeMyShapes] ❌ CRITICAL: Cannot fix rotation for ${s.id}`));
        }
      if (this.updatePositions(), !this.positions || this.positions.length === 0)
        throw new Error(`Group ${this.id} cannot place shapes: positions array could not be initialized`);
      for (let i = 0; i < this.shapes.length; i++) {
        const s = this.shapes[i];
        if (!s) continue;
        const n = this.positions.find((a) => a.autoId === s.autoId);
        if (!n) {
          const a = this.shapes.map((c) => c.autoId).join(", "), l = this.positions.map((c) => c.autoId).join(", ");
          throw new Error(`Position not found for shape ${s.autoId} in group ${this.id}. Shapes: [${a}]. Positions: [${l}]`);
        }
        if (s.x = this.x + n.x, s.y = this.y + n.y, !ue(s, n.rot, this.container)) throw new Error("placeMyShapes - unable to set rotation for shape in group");
        i === 0 && this.x === 0 && this.y === 0 && (s.firstShape.isFirstShape = !0), s.group.addedAsGroup = this, pe([
          () => J(this.type === "position" ? s.group.inGroup : !s.group.inGroup).toBe(!0)
        ], `placeMyShapes: Shape ${s.id} inGroup flag should match group type (${this.type})`), pe([
          () => J(s.group.addedAsGroup).toBe(this),
          () => J(typeof s.group.addedAsGroup).not.toBe("string")
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
        const f = this.shapes.find((h) => h.autoId === l);
        f && f.rot !== c && ue(f, c, this.container);
      }
    }
    this.positions = [], this.type !== "user" && this.sortShapes();
    let i = 0;
    const s = qo(this.direction), n = qi(this.direction);
    let o = 0;
    for (const l of this.shapes) {
      if (!l) continue;
      const c = o === this.shapes.length - 1 ? 0 : l.getMinSpacing(this.container.saw), f = e.get(l.autoId) ?? l.rot.valueOf();
      let h;
      f !== l.rot ? h = n === "l" ? l.w : l.l : h = l[n];
      const d = {
        autoId: l.autoId,
        x: 0,
        y: 0,
        rot: f
      };
      s === "x" ? d.x = i : d.y = i, this.positions.push(d), l.group.inGroup = !0, i += o === this.shapes.length - 1 ? h : h + c, o++;
    }
    this.groupLength = i;
    const r = $e(n), a = this.shapes.reduce(
      (l, c) => {
        const f = e.get(c.autoId);
        let h;
        return f !== void 0 && f !== c.rot ? h = r === "l" ? c.w : c.l : h = c[r], h > l ? h : l;
      },
      0
    );
    if (this.groupWidth = a, Ue()) {
      const l = this.shapes.slice(0, -1).reduce((h, d) => h + d.getMinSpacing(this.container.saw), 0), f = this.shapes.reduce((h, d) => h + d[n], 0) + l;
      pe([
        () => J(
          I.equalTo(f, this.groupLength),
          "group dimension is incorrect in direction"
        ).to.be.true,
        () => J(
          i,
          "currentPosition is incorrect in direction"
        ).to.equal(this.groupLength),
        () => J(
          a,
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
    const e = qi(this.direction), i = $e(e);
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
      pe([
        () => J(e.every((s) => !s.group?.inGroup)).toBe(!0),
        () => J(e.every((s) => !s.group?.reference)).toBe(!0)
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
function Uo(t, e) {
  const i = e === "x" ? "l" : "w", s = e === "x" ? "y" : "x";
  return t?.length ? t.reduce((o, r) => {
    const a = o[e] + o[i], l = r[e] + r[i];
    return a > l ? o : l > a ? r : o[s] < r[s] ? o : r;
  }) : null;
}
function Xl(t, e = null) {
  return e ? t.filter((i) => i.added && i?.stock?.id === e.id) : t.filter((i) => i.added);
}
function Ql(t, e = !1, i = !1) {
  if (!t?.length) return [];
  let s = t;
  if (e !== null && (s = t.filter((a) => a.added === e), !s.length))
    return [];
  const n = /* @__PURE__ */ new Map(), o = i ? /* @__PURE__ */ new Map() : null, r = [];
  for (const a of s) {
    let l;
    if (oe(a))
      l = a.parentId;
    else if (X(a))
      l = a.id;
    else
      continue;
    if (!n.has(l)) {
      if (n.set(l, !0), o) {
        const c = a.l <= a.w, f = c ? a.l : a.w, h = c ? a.w : a.l, d = f + "-" + h + "-" + a.orientationLock;
        if (o.has(d)) continue;
        o.set(d, !0);
      }
      r.push(a);
    }
  }
  return r;
}
const Ho = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return xs(t, "orientationLock", ["l", "w"], e, i, s), s;
}, Ko = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return xs(t, "grain", ["l", "w"], e, i, s), s;
}, Yo = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [], n = Y(t, "banding");
  return n != null && (typeof n != "object" || n === null) && new T({
    item: t,
    message: Te("errors.validation.must_be_object", { 0: "banding" }),
    shouldTranslate: !1,
    field: [["banding"]],
    index: [e],
    type: i ? "warning" : "error",
    issues: s,
    category: ["part"]
  }), s;
}, Zo = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], o = Y(t, "customData");
  if (o == null) return n;
  if (typeof o != "object" || o === null)
    return new T({
      item: t,
      message: Te("errors.validation.must_be_object", {
        0: ut.customData
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
      ["string", "number", "boolean"].includes(a) || new T({
        item: t,
        message: Te("errors.validation.must_be_string_number_boolean", {
          0: ut.customData
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
}, Xo = ({ item: t, index: e }) => {
  const i = Y(t, "machining");
  i && "validateEverything" in i && i.validateEverything(t, e);
}, Qo = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], r = Y(t, "x");
  return r === null || r === "" || r === void 0 || i != null && P({ v: r }) > i && new T({
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
}, Jo = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], r = Y(t, "y");
  return r === null || r === "" || r === void 0 || i != null && P({ v: r }) > i && new T({
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
}, ea = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], r = Y(t, "l");
  return Y(t, "infiniteLength") || (r === null || r === "" || r === void 0 || r === 0) && new T({
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
}, ta = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], r = Y(t, "w");
  return (r === null || r === "" || r === void 0) && new T({
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
}, ia = ({ item: t, index: e, max: i, isWarning: s = !1, saw: n, category: o = [] }) => {
  const r = [], a = Y(t, "t");
  return n?.cutType === "beam" && !a && new T({
    item: t,
    message: "errors.saw.thickness_required_for_beam_saw",
    field: [["t"]],
    index: [e],
    type: "error",
    issues: r,
    category: o
  }), r;
}, sa = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], o = Y(t, "q"), r = Y(t, "autoAdd");
  return o == null || r === !0, n;
}, na = ({
  item: t,
  index: e,
  shapes: i,
  requiredCount: s = 2,
  isWarning: n = !1,
  category: o = ["group"]
}) => {
  const r = [];
  return i.length < s && new T({
    item: t,
    message: "errors.groups.min_parts",
    index: [e],
    type: n ? "warning" : "error",
    issues: r,
    category: o
  }), r;
}, ra = ({
  item: t,
  index: e,
  shapes: i,
  isWarning: s = !1,
  category: n = ["group"]
}) => {
  const o = [];
  return i.forEach((r, a) => {
    !(typeof r.isSquare == "function", r.isSquare) && !["l", "w"].includes(r.orientationLock) && new T({
      item: t,
      message: Te("errors.groups.part_needs_orientation_lock", { 0: a + 1 }),
      shouldTranslate: !1,
      field: [["orientationLock"]],
      index: [e],
      type: s ? "warning" : "error",
      issues: o,
      category: n
    });
  }), o;
}, oa = ({
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
    const h = c.trimmedDimensions ? c.trimmedDimensions[s] : c[s];
    I.equalTo(h, l) || new T({
      item: t,
      message: Te("errors.groups.dimension_not_correct", {
        0: f + 2,
        1: s === "l" ? "length" : "width",
        2: l,
        3: h
      }),
      shouldTranslate: !1,
      index: [e],
      type: n ? "warning" : "error",
      issues: r,
      category: o
    });
  }), r;
}, Ds = ({
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
  return s > n && new T({
    item: t,
    message: Te("errors.groups.not_enough_of_part", {
      0: o || (r ?? 0) + 1,
      1: s,
      2: n
    }),
    shouldTranslate: !1,
    index: [e],
    type: a ? "warning" : "error",
    issues: c,
    category: l
  }), n === 0 && new T({
    item: t,
    message: "errors.groups.no_parts",
    index: [e],
    type: a ? "warning" : "error",
    issues: c,
    category: l
  }), c;
};
function Gt(t) {
  return t && typeof t == "object" && "area" in t;
}
const ci = {
  missingProperty: (t, e) => `[Sorting Warning] Missing property "${t}" in ${e}`,
  missingMethod: (t, e) => `[Sorting Warning] Missing method "${t}" in ${e}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
}, ie = (t, e, i) => e in t ? t[e] : (console.warn(ci.missingProperty(String(e), i)), null), At = (t, e) => (i, s) => {
  const n = t(i, s);
  return n !== 0 ? n : e(i, s);
}, it = (t, e) => {
  if (Gt(t) && Gt(e))
    return t.area < e.area ? -1 : t.area > e.area ? 1 : 0;
  const i = "l" in t && "w" in t ? Number(t.l) * Number(t.w) : 0, s = "l" in e && "w" in e ? Number(e.l) * Number(e.w) : 0;
  return i < s ? -1 : i > s ? 1 : 0;
}, ke = (t, e) => {
  const i = ie(t, "id", "first item"), s = ie(e, "id", "second item");
  if (i === null || s === null || i === void 0 || s === void 0) return 0;
  const n = i.toString().split("."), o = s.toString().split(".");
  return n[0] !== o[0] ? parseInt(n[0]) - parseInt(o[0]) : parseInt(n[1]) - parseInt(o[1]);
};
function Ae(t) {
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
function Cs(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s > n ? i : e;
  }) : null;
}
function aa(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s < n ? i : e;
  }) : null;
}
const Ce = {
  // Dimension-based sorts
  WDLD: Ae([
    ["w", "desc"],
    ["l", "desc"]
  ]),
  WALA: Ae([
    ["w", "asc"],
    ["l", "asc"]
  ]),
  LDWD: Ae([
    ["l", "desc"],
    ["w", "desc"]
  ]),
  LAWA: Ae([
    ["l", "asc"],
    ["w", "asc"]
  ]),
  WD: Ae([["w", "desc"]]),
  LD: Ae([["l", "desc"]]),
  // ID-based sorts
  LDIDA: At(
    Ae([["l", "desc"]]),
    ke
  ),
  WDIDA: At(
    Ae([["w", "desc"]]),
    ke
  ),
  // Area-based sorts
  AD: (t, e) => -it(t, e),
  AA: it,
  AAID: At(
    it,
    ke
  ),
  ADID: At(
    (t, e) => -it(t, e),
    ke
  ),
  // ID sorts
  ID: ke,
  IDDesc: (t, e) => -ke(t, e),
  StockID: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    return !i || !s ? 0 : ke(i, s);
  },
  StockIDAD: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s) return 0;
    const n = ke(i, s);
    return n !== 0 ? n : -it(t, e);
  },
  // Position sorts
  YX: Ae([
    ["y", "asc"],
    ["x", "asc"]
  ]),
  XY: Ae([
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
    return i && !s ? 1 : !i && s ? -1 : ke(t, e);
  },
  stockIDTypePlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s) return 0;
    const n = ke(i, s);
    if (n !== 0) return n;
    const o = ie(t, "offcut", "first item"), r = ie(e, "offcut", "second item");
    if (o && !r) return 1;
    if (!o && r) return -1;
    const a = ie(t, "placementOrder", "first item") ?? 0, l = ie(e, "placementOrder", "second item") ?? 0;
    return a - l;
  },
  offcutPlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i?.id || !s?.id) return 0;
    const n = ke(i, s);
    if (n !== 0) return n;
    if ("placementOrder" in t && "placementOrder" in e) {
      const o = ie(t, "placementOrder", "first item") ?? 0, r = ie(e, "placementOrder", "second item") ?? 0;
      return o - r;
    }
    return 0;
  },
  groupPlacementOrder: (t, e) => {
    const i = ie(t, "placementOrder", "first item") ?? 0, s = ie(e, "placementOrder", "second item") ?? 0, n = i - s;
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
    if (Gt(t) && Gt(e) && t.aspect && e.aspect)
      return e.aspect - t.aspect;
    if (!("l" in t) || !("w" in t) || !("l" in e) || !("w" in e))
      return console.warn(ci.missingAspect), 0;
    const i = Math.max(Number(t.l), Number(t.w)) / Math.min(Number(t.l), Number(t.w));
    return Math.max(Number(e.l), Number(e.w)) / Math.min(Number(e.l), Number(e.w)) - i;
  },
  fillThenArea(t) {
    return (e, i) => !("l" in e) || !("w" in e) || !("l" in i) || !("w" in i) ? (console.warn(ci.missingLongSide), 0) : i[t] === e[t] ? -it(e, i) : parseFloat(String(i[t])) - parseFloat(String(e[t]));
  },
  // Utility functions
  getLargest: Cs,
  getSmallest: aa
};
function la(t) {
  return ye(t) || oe(t) || xt(t);
}
function ca(t, e, i) {
  if (!i) return !0;
  const s = e?.material?.toLowerCase(), n = t?.material?.toLowerCase();
  return !s && !n || s === n;
}
function ua(t, e, i) {
  return i ? !de(t.t) || !de(e.t) ? !1 : I.equalTo(P({ v: t.t }), P({ v: e.t })) : !0;
}
function fa(t, e, i) {
  return i?.stockType !== "linear" || !oe(t) && !ye(t) ? !0 : we(t, 0, e) && I.equalTo(P({ v: t.w }), P({ v: e.w })) || we(t, 1, e) && I.equalTo(P({ v: t.l }), P({ v: e.w }));
}
function da(t, e, i, s = 0) {
  const n = ye(t[0]), o = i.stockType;
  if (t.some((w) => de(w.stockLock) && w.stockLock.length))
    return { stockList: e, shapeList: t, unusableShapes: [], unusableStock: [], newIssues: [] };
  e = e.filter((w) => n || w.autoAdd === !0 || de(w.q) && Number(w.q) > 0);
  const a = e.some((w) => de(w.material)), l = e.some((w) => de(w.t)), c = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), g = [];
  let y = s;
  for (const w of t) {
    const W = e.map((k, O) => {
      const M = la(w) && ft(w, k), x = ca(w, k, a), A = ua(w, k, l), D = fa(w, k, i);
      return {
        stockItem: k,
        stockIndex: O,
        fit: M,
        material: x,
        thickness: A,
        width: D,
        // For this stock item, does it satisfy all requirements?
        satisfiesAll: M && x && A && (o !== "linear" || D)
      };
    });
    w.stockMatch = {
      fit: W.some((k) => k.fit),
      material: !a || W.some((k) => k.material),
      thickness: !l || W.some((k) => k.thickness),
      width: o !== "linear" || W.some((k) => k.width)
    };
    const B = W.filter((k) => k.satisfiesAll), re = B.length > 0;
    if (!n && re) {
      const k = B.map((O) => O.stockItem.parentId);
      w.stockLock = k, k.forEach((O) => c.add(O));
    }
    w.stockMatch.fit ? re || (a && !w.stockMatch.material && (d.add(w), g.push(new T({
      category: ["part", "stock"],
      item: w,
      field: [["material"]],
      index: [y],
      message: "errors.validation.no_matching_stock_material"
    }))), l && !w.stockMatch.thickness && (d.add(w), g.push(new T({
      category: ["part", "stock"],
      item: w,
      field: [["t"]],
      index: [y],
      message: "errors.validation.no_matching_stock_thickness"
    }))), o === "linear" && !w.stockMatch.width && (h.add(w), g.push(new T({
      category: ["part", "stock"],
      item: w,
      field: [["w"]],
      index: [y],
      message: "errors.validation.no_matching_stock_width"
    }))), w.stockMatch.material && w.stockMatch.thickness && (o !== "linear" || w.stockMatch.width) && (d.add(w), g.push(new T({
      category: ["part", "stock"],
      item: w,
      field: [["material"], ["t"]],
      index: [y],
      message: "errors.validation.no_stock_matches_all_requirements"
    })))) : (f.add(w), g.push(new T({
      category: ["part", "stock"],
      item: w,
      field: [["l"], ["w"]],
      index: [y],
      message: "errors.validation.will_not_fit"
    }))), y++;
  }
  t.forEach((w) => w.stockMatch = null);
  let v, G;
  return n ? (v = t.filter((w) => f.has(w) || h.has(w) || d.has(w)).sort(Ce.ID), G = []) : (v = t.filter((w) => f.has(w) || h.has(w) || d.has(w) || !w.stockLock || !w.stockLock.length).sort(Ce.ID), G = e.filter((w) => !c.has(w.parentId)).sort(Ce.ID), e = e.filter((w) => Ie(w)).filter((w) => c.has(w.parentId)), t = t.filter((w) => !f.has(w) && !h.has(w) && !d.has(w) && w?.stockLock?.length)), {
    stockList: e,
    unusableStock: G,
    shapeList: t,
    unusableShapes: v,
    newIssues: g
  };
}
function ha(t) {
  return t?.issues?.length > 0;
}
const pa = ({
  item: t,
  inputStockList: e,
  saw: i,
  partTrim: s = 0,
  index: n
}) => {
  const o = [], r = i.stockType, a = Y(t, "q"), l = Y(t, "l"), c = Y(t, "w");
  return !a || !l || !c || ("applyPartTrim" in t && typeof t.applyPartTrim == "function" && t.applyPartTrim(s, r), ha(t)) || da([t], e, i, n).newIssues.forEach((h) => {
    o.push(h);
  }), o;
}, ga = ({
  item: t,
  partTrim: e,
  index: i,
  isWarning: s = !1
}) => {
  const n = [];
  if (!e) return n;
  const o = Y(t, "l"), r = Y(t, "w");
  if (!o || !r) return n;
  try {
    const a = P({ v: e }), l = P({ v: o }), c = P({ v: r }), f = l - a * 2, h = c - a * 2;
    (f <= 0 || h <= 0) && new T({
      item: t,
      message: "errors.trim.too_much",
      params: {
        0: "part",
        // positional (legacy)
        1: a,
        // positional (legacy)
        2: `${f}x${h}`,
        // positional (legacy)
        item: "part",
        // named (new)
        trimValue: a,
        // named (new)
        result: `${f}x${h}`
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
}, ma = ({
  item: t,
  index: e,
  isWarning: i = !1,
  category: s = []
}) => {
  const n = [], o = Y(t, "l"), r = Y(t, "w"), a = Y(t, "trim");
  if (!o || !r || !a) return n;
  if ((!Ie(t) || Ie(t) && !("trimmed" in t && t.trimmed)) && typeof a == "object" && a !== null)
    try {
      const c = P({ v: o }), f = P({ v: r }), h = (v) => {
        if (v == null) return 0;
        if (typeof v == "number" || typeof v == "string")
          try {
            return P({ v }) || 0;
          } catch {
            return 0;
          }
        return 0;
      }, d = {
        w1: h(Y(a, "w1")),
        w2: h(Y(a, "w2")),
        l1: h(Y(a, "l1")),
        l2: h(Y(a, "l2"))
      }, g = d.w1 + d.w2, y = d.l1 + d.l2;
      g >= c && new T({
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
      }), y >= f && new T({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${ne("l1").toUpperCase()} + ${ne("l2").toUpperCase()}`,
          // positional (legacy)
          1: ne("w"),
          // positional (legacy)
          2: f,
          // positional (legacy)
          trimFields: `${ne("l1", { returnKey: !0 })} + ${ne("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: ne("w", { returnKey: !0 }),
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
}, he = {
  // Dimensions
  x: Qo,
  y: Jo,
  l: ea,
  w: ta,
  t: ia,
  q: sa,
  // Trim
  trim: ma,
  partTrim: ga,
  // Custom
  customData: Zo,
  banding: Yo,
  orientationLock: Ho,
  grain: Ko,
  machining: Xo,
  // Stock
  stockMatch: pa,
  // Groups
  groupShapeCount: na,
  groupOrientationLock: ra,
  groupDimensions: oa,
  groupQuantity: Ds
};
class zt extends Li {
  static schema = ni;
  static computedProperties = hs;
  static defaults = ni.parse({});
  constructor(e = {}) {
    const i = zt.preprocessData(e);
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
    return m.Stock;
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
      const n = he.q({ item: e, index: e?.index });
      i.push(...n);
    }
    const s = he.grain({ item: e, index: e?.index });
    i.push(...s), this.issues.push(...i.filter((n) => n));
  }
  /**
    * Create stock instance with live objects
    */
  static create(e) {
    const i = { ...e.data };
    e.saw && (i.saw = e.saw);
    const s = new zt(i);
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
  getCroppedLength(e = [], i = 0) {
    if (!e?.length) return;
    const s = Uo(e.filter((o) => o.added && o.stock.id === this.id), "x"), n = s.x + s.l;
    if (n > this.l) throw new Error("Furthest shape position exceeds stock length");
    return I.equalTo(n, this.l) ? n : n + i;
  }
}
const Je = ["l1", "l2", "w1", "w2"], ya = ["a", "b", "c", "d"], qe = [...Je, ...ya], ve = ["a", "b"];
class jt extends H {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Ut;
  static computedProperties = ki;
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
class Be extends jt {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = Dr;
  static computedProperties = Cr;
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
      s.includes(n) || i.push(new T({
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
      for (const s of ve)
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
      const s = i, n = Ge("finish");
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
      for (const e of ve)
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
    for (const i of ve)
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
    return new Be(e);
  }
  /**
   * Create empty finish
   */
  static empty() {
    return new Be();
  }
  /**
   * Create with both faces
   */
  static bothFaces(e = !0) {
    const i = new Be();
    return i.setBothFaces(e), i;
  }
  /**
   * Create with front face only
   */
  static frontOnly(e = !0) {
    const i = new Be();
    return i.setFace("a", e), i;
  }
  /**
   * Create with back face only
   */
  static backOnly(e = !0) {
    const i = new Be();
    return i.setFace("b", e), i;
  }
}
class We extends jt {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = xo;
  static computedProperties = ko;
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
        s.includes(n) || i.push(new T({
          message: `Invalid planing face: ${n}. Valid faces are 'a' (front) and 'b' (back)`,
          type: "warning"
        }));
    }
    if (this.sides) {
      const s = ["a", "b", "c", "d", "l1", "l2", "w1", "w2"];
      for (const n in this.sides)
        s.includes(n) || i.push(new T({
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
      for (const s of ve)
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
      const s = i, n = Ge("planing");
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
      for (const s of qe)
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
      const s = i, n = Ge("planing");
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
      for (const e of ve)
        this.faces[e] = !1;
    if (this.sides)
      for (const e of qe)
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
    for (const i of ve)
      this.setFace(i, e);
  }
  /**
   * Set all sides to the same value
   */
  setAllSides(e) {
    for (const i of qe)
      this.setSide(i, e);
  }
  /**
   * Calculate total planing area
   */
  calculateArea(e, i) {
    let s = 0;
    if (this.faces) {
      const n = e * i;
      for (const o of ve)
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
      for (const o of qe)
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
    return new We(e);
  }
  /**
   * Create empty planing
   */
  static empty() {
    return new We();
  }
  /**
   * Create with all faces and sides
   */
  static full(e = !0) {
    const i = new We();
    return i.setAllFaces(e), i.setAllSides(e), i;
  }
  /**
   * Create with faces only
   */
  static facesOnly(e = !0) {
    const i = new We();
    return i.setAllFaces(e), i;
  }
  /**
   * Create with sides only
   */
  static sidesOnly(e = !0) {
    const i = new We();
    return i.setAllSides(e), i;
  }
}
class se extends H {
  // Zod schema for validation and serialization
  static schema = Ar;
  static computedProperties = Or;
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
    return m.Extras;
  }
  constructor(e = {}) {
    const i = { ...e }, s = (n) => {
      if (!n || typeof n != "object" || !("sides" in n)) return;
      const o = n.sides;
      if (!o || typeof o != "object") return;
      ("x1" in o || "x2" in o || "y1" in o || "y2" in o) && (n.sides = {
        l1: o.x1 ?? o.l1,
        l2: o.x2 ?? o.l2,
        w1: o.y1 ?? o.w1,
        w2: o.y2 ?? o.w2
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
    if (Ne(this.banding)) {
      const s = this.banding.validate(e);
      i.push(...s);
    }
    if (Ee(this.finish)) {
      const s = this.finish.validate(e);
      i.push(...s);
    }
    if (Fe(this.planing)) {
      const s = this.planing.validate(e);
      i.push(...s);
    }
    if (Fe(this.planing) && Ee(this.finish) && e?.t) {
      const s = this.planing.getTotalFacePlaning();
      s > 0 && e.t - s < 5 && i.push(new T({
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
    return Ne(this.banding) && (i += this.banding.getCost(e)), Ee(this.finish) && (i += this.finish.getCost(e)), Fe(this.planing) && (i += this.planing.getCost(e)), i;
  }
  /**
   * Get human-readable description of all extras
   */
  getDescription() {
    const e = [];
    return Ne(this.banding) && this.banding.hasValues() && e.push(this.banding.getDescription()), Ee(this.finish) && this.finish.hasValues() && e.push(this.finish.getDescription()), Fe(this.planing) && this.planing.hasValues() && e.push(this.planing.getDescription()), e.length > 0 ? e.join("; ") : "No extras";
  }
  /**
   * Check if any extras are applied
   */
  hasExtras() {
    return !!(Ne(this.banding) && this.banding.hasValues() || Ee(this.finish) && this.finish.hasValues() || Fe(this.planing) && this.planing.hasValues());
  }
  /**
   * Clear all extras
   */
  clear() {
    Ne(this.banding) && this.banding.clear(), Ee(this.finish) && this.finish.clear(), Fe(this.planing) && this.planing.clear();
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
    e ? e instanceof lt ? this.banding = e : this.banding = new lt(e) : this.banding = void 0;
  }
  /**
   * Set finish
   */
  setFinish(e) {
    e ? e instanceof Be ? this.finish = e : this.finish = new Be(e) : this.finish = void 0;
  }
  /**
   * Set planing
   */
  setPlaning(e) {
    e ? e instanceof We ? this.planing = e : this.planing = new We(e) : this.planing = void 0;
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
    return !!(Ne(this.banding) && this.banding.isApplicable(e) || Ee(this.finish) && this.finish.isApplicable(e) || Fe(this.planing) && this.planing.isApplicable(e));
  }
  /**
   * Get summary of active extras
   */
  getSummary() {
    return {
      hasBanding: Ne(this.banding) && this.banding.hasValues() || !1,
      hasFinish: Ee(this.finish) && this.finish.hasValues() || !1,
      hasPlaning: Fe(this.planing) && this.planing.hasValues() || !1,
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
    return s ? Ne(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" ? Object.keys(s.sides).some((n) => {
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
    return s ? Ee(s) && typeof s.hasValues == "function" ? s.hasValues() : s.faces && typeof s.faces == "object" ? Object.keys(s.faces).some((n) => {
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
    return s ? Fe(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" && Object.keys(s.sides).some((o) => {
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
const Ui = !1;
function ba() {
  return {
    banding: {
      scope: ["sides"],
      sides: Je.map((t) => `side.${t}`)
      // Only use main sides (l1/l2/w1/w2), not corners
    },
    finish: {
      scope: ["faces"],
      faces: ve.map((t) => `face.${t}`)
    },
    planing: {
      scope: ["faces", "sides"],
      faces: ve.map((t) => `face.${t}`),
      sides: Je.map((t) => `side.${t}`)
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
      sides: qe.map((t) => `side.${t}`)
    }
    /* imageUpload: {
    	scope: [ 'sides' ],
    	sides: ALL_SIDES.map( side => `side.${side}` as const )
    } */
  };
}
const wa = ba(), Le = (t) => wa[t] || {
  scope: ["sides"],
  sides: qe.map((e) => `side.${e}`)
}, Sa = (t) => {
  const e = Le(t), i = [];
  return e.faces && i.push(...e.faces), e.sides && i.push(...e.sides), i;
}, Jl = (t) => (Le(t).faces || []).map((i) => {
  const s = Ke(i);
  return s.scope === "face" ? s.key : void 0;
}).filter((i) => i !== void 0), ec = (t) => (Le(t).sides || []).map((i) => {
  const s = Ke(i);
  return s.scope === "side" ? s.key : void 0;
}).filter((i) => typeof i == "string"), Ke = (t) => {
  const e = t.split(".");
  if (e.length !== 2 || e[0] !== "face" && e[0] !== "side")
    throw new Error(`Invalid ExtraLocation format: ${t}. Must be 'face.X' or 'side.X'`);
  const i = e[0], s = e[1];
  if (i === "face" && !ve.includes(s))
    throw new Error(`Invalid face key '${s}' in location '${t}'`);
  if (i === "side" && !qe.includes(s))
    throw new Error(`Invalid side key '${s}' in location '${t}'`);
  return {
    scope: i,
    key: s,
    original: t
  };
}, tc = (t) => Ke(t).scope, Ls = (t) => Le(t).scope.includes("faces"), Rs = (t) => Le(t).scope.includes("sides"), ic = (t) => {
  const e = Le(t);
  return e.scope.includes("faces") && e.scope.includes("sides");
}, xa = (t, e) => {
  if (t.length === 1 && t[0].length === 1 && t[0][0] === !0)
    return "boolean";
  const i = t.flat().filter((o) => typeof o == "string"), n = [.../* @__PURE__ */ new Set([...i, ...e || []])].length;
  return n === 0 ? "multiple" : n === 1 ? "single" : "multiple";
}, sc = (t, e = "") => {
  if (typeof t == "string") return t;
  if (typeof t == "boolean") return t ? "Y" : e;
  if (typeof t == "object" && t !== null && !Array.isArray(t)) {
    const i = Object.values(t).map((s) => typeof s == "string" ? s : typeof s == "boolean" && s ? "Y" : "").filter((s) => s !== "");
    return i.length > 0 ? i.join("|") : e;
  }
  return e;
}, ka = (t, e) => {
  const i = t;
  i.extras || (i.extras = {}), i.extras[e] || (i.extras[e] = {});
  const s = i.extras[e];
  Ls(e) && (s.faces || (s.faces = {})), Rs(e) && (s.sides || (s.sides = {}));
}, va = (t, e, i) => {
  ka(t, e);
  const n = t.extras[e], { scope: o } = Ke(i);
  return o === "face" ? {
    extraContainer: n.faces || {}
  } : {
    extraContainer: n.sides || {}
  };
}, nc = (t, e, i) => {
  const s = Xt(t, e, i);
  if (s == null || s === !1 || s === "")
    return !1;
  if (typeof s != "object" || Array.isArray(s))
    return typeof s == "boolean" ? s : typeof s == "string" ? s.trim() !== "" : !!s;
  const n = Ge(e);
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
}, Ia = (t, e, i, s, n) => {
  const o = Ge(e);
  if (o) {
    const r = Xt(t, e, i);
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
          if (l !== -1 && o.options[l] && Array.isArray(o.options[l])) {
            const c = o.options[l];
            if (!c.includes(a))
              return console.log(`[getExtrasValue] string value '${a}' not in available options`, c, ", returning null"), null;
          }
        }
        return a;
      }
    }
  }
  return !1;
}, rc = (t, e, i, s, n, o, r) => {
  if (Ge(e))
    switch (Oa(e)) {
      case "boolean":
        ti(t, e, i, !!n);
        break;
      case "string":
        ti(t, e, i, String(n));
        break;
      case "object":
        {
          let c = Xt(t, e, i) || {};
          typeof c != "object" && (c = {}), c[s] = n, ti(t, e, i, c);
        }
        break;
    }
}, Ta = (t, e, i, s) => {
  Aa(t, e, i);
}, oc = (t, e, i, s, n) => {
  if (i.length === 0) return null;
  const o = i.map((r) => Ia(t, e, r, s));
  if (n === "boolean" || n === "single") {
    const r = o.every((l) => !!l), a = o.every((l) => !l);
    return r ? !0 : a ? !1 : null;
  }
  if (n === "multiple") {
    const r = o[0];
    return o.every((l) => l === r) ? r : null;
  }
  return null;
}, ac = (t, e, i, s) => {
  i.forEach((n) => {
    Ta(t, e, n);
  });
}, lc = (t, e, i, s, n, o) => {
  const r = Xt(t, e, i), a = [];
  if (r && o?.length)
    if (typeof r == "object" && !Array.isArray(r)) {
      const c = r;
      for (const f of o) {
        const h = c[f];
        if (!h) {
          a.push("");
          continue;
        }
        if (h === !0) {
          const d = Ge(e), g = d?.labels.indexOf(f) ?? -1, y = g !== -1 && d?.options[g], v = y?.length === 1 ? y[0] : f;
          a.push(v);
          continue;
        }
        a.push(String(h));
      }
    } else if (typeof r == "string") {
      const c = r.split("|");
      o.forEach((f, h) => {
        a.push(c[h] || "");
      });
    } else
      a.push(String(r));
  else if (r)
    if (typeof r == "string" && o?.length) {
      const c = r.split("|");
      o.forEach((f, h) => {
        a.push(c[h] || "");
      });
    } else
      a.push(String(r));
  const l = a.filter((c) => c && typeof c == "string" && c.trim() !== "");
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
}, cc = (t, e, i) => {
  const s = /* @__PURE__ */ new Set(), n = Le(e);
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
}, uc = (t, e, i, s) => {
  const n = s[0], o = Le(e);
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
}, fc = (t, e, i) => {
  const s = Le(e);
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
}, Pa = (t, e, i, s = !1) => {
  const n = Le(e), o = t;
  o.extras[e] || (o.extras[e] = {});
  const r = o.extras[e];
  r.options || (r.options = {});
  const a = r.options;
  if (Ls(e) && (r.faces || (r.faces = {}), a.faces || (a.faces = {})), Rs(e) && (r.sides || (r.sides = {}), a.sides || (a.sides = {})), s) {
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
}, dc = (t, e, i, s = [], n = []) => {
  const o = xa(i, n);
  Pa(t, e, o === "boolean" ? [] : s, o === "boolean");
}, hc = (t, e, i, s) => {
  if (!i || !Object.keys(i).length)
    return { valid: !0, messages: [], incompleteLocations: [] };
  const n = [], o = [], r = Sa(e), a = Object.keys(i), l = Math.max(...a.map((f) => f.split("|").length));
  if (l <= 1)
    return { valid: !0, messages: [], incompleteLocations: [] };
  for (const f of r) {
    const { extraContainer: h } = va(t, e, f), { key: d } = Ke(f), g = h[d];
    if (!g)
      continue;
    let y;
    typeof g == "string" ? y = g.includes("|") ? g.split("|") : [g] : typeof g == "boolean" ? y = g ? ["true"] : [] : typeof g == "object" && !Array.isArray(g) && g !== null ? y = Object.values(g).filter((B) => B != null && B !== "" && B !== !1).map((B) => String(B)) : y = [String(g)];
    const v = y.length;
    if (v === 0)
      continue;
    let G = !1, w = !1, W = "";
    if (v > 0) {
      if (s)
        try {
          const B = y.filter((k) => k.trim() !== ""), re = s(e, B);
          w = re !== null && re > 0;
        } catch (B) {
          console.error("[validateExtrasCompleteness] Error getting price:", B), w = !1;
        }
      else {
        const B = y.join("|");
        w = a.some((re) => re === B || re.startsWith(B + "|"));
      }
      if (v < l) {
        G = !0;
        const B = y.join("|");
        if (a.some((k) => k.startsWith(B + "|")) && !w) {
          const k = l - v, O = y.join(", ");
          W = `${e} selection incomplete for ${f}. Selected: "${O}" but ${k} more level${k > 1 ? "s" : ""} required.`;
        }
      }
      !w && !G && (W = `${e} selection invalid for ${f}. No pricing available for "${y.join(", ")}".`);
    }
    v > 0 && !w && (o.push(f), n.push(W || `${e} pricing incomplete for ${f}: ${v}/${l} levels selected`));
  }
  return { valid: o.length === 0, messages: n, incompleteLocations: o };
}, pc = (t, e, i) => {
  if (!i || !i[e])
    return { valid: !0, violations: [] };
  const s = i[e], n = [], o = (a, l, c) => {
    l == null || c === void 0 || (c.min !== void 0 && l < c.min && n.push({
      dimension: a,
      value: l,
      constraint: "min",
      limit: c.min
    }), c.max !== void 0 && l > c.max && n.push({
      dimension: a,
      value: l,
      constraint: "max",
      limit: c.max
    }));
  };
  o("longSide", t.longSide, s.longSide), o("shortSide", t.shortSide, s.shortSide);
  const r = typeof t.t == "string" ? parseFloat(t.t) : t.t;
  return isNaN(r) || o("t", r, s.t), {
    valid: n.length === 0,
    violations: n,
    message: s.message
  };
}, gc = (t, e, i) => {
  if (i)
    return i;
  const s = e.dimension === "t" ? "thickness" : e.dimension === "longSide" ? "long side" : "short side", n = e.constraint === "min" ? "minimum" : "maximum";
  return `${t.charAt(0).toUpperCase() + t.slice(1)} requires ${s} ${n} of ${e.limit} (current: ${e.value})`;
};
function mc(t, e = "banding") {
  const i = t.extras?.[e];
  if (!i?.sides) return;
  const s = i.sides, n = s.l1, o = s.l2, r = s.w1, a = s.w2;
  s.l1 = r, s.l2 = a, s.w1 = n, s.w2 = o;
}
let ui = null;
const yc = (t) => {
  ui = t;
}, Ge = (t) => ui ? ui.getExtrasConfig(t) : null, ti = (t, e, i, s) => {
  t.extras || (t.extras = {}), t.extras[e] || (t.extras[e] = { sides: {}, faces: {} });
  const { scope: n, key: o } = Ke(i), r = n === "face" ? t.extras[e].faces : t.extras[e].sides;
  r[o] = s;
}, Xt = (t, e, i) => {
  const { scope: s, key: n } = Ke(i), o = s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides;
  return o?.[n]?.value || o?.[n] || null;
}, Aa = (t, e, i) => {
  const { scope: s, key: n } = Ke(i), o = s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides;
  o && n in o && delete o[n];
}, Oa = (t) => {
  const e = Ge(t);
  return !e || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 1 && e.options[0][0] === !0 || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 0 ? "boolean" : e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].every((i) => typeof i == "string") ? "string" : e.options.length > 1 ? "object" : "string";
};
class lt extends jt {
  // Required: Define schema and computed properties for SchemaClass
  static schema = br;
  static computedProperties = {
    ...jt.computedProperties,
    ...wr
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
      Je.includes(s) || i.push(new T({
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
      const s = i, n = Ge("banding");
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
    for (const i of Je)
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
    return new lt(e);
  }
  /**
   * Create empty banding
   */
  static empty() {
    return new lt();
  }
  /**
   * Create with all sides
   */
  static allSides(e = !0) {
    const i = new lt();
    return i.setAllSides(e), i;
  }
}
class ct extends H {
  // Zod schema for validation and serialization
  static schema = xr;
  static computedProperties = kr;
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
    return this.type && this.size !== null && this.size <= 0 && e.push(new T({
      message: `Corner ${this.index + 1}: Size must be positive`,
      type: "error"
    })), (this.index < 0 || this.index > 3) && e.push(new T({
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
    return this.size > n / 2 && s.push(new T({
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
    return new ct(e);
  }
  /**
   * Create a radius corner
   */
  static radius(e, i) {
    return new ct({ type: "radius", size: e, index: i });
  }
  /**
   * Create a bevel corner
   */
  static bevel(e, i) {
    return new ct({ type: "bevel", size: e, index: i });
  }
}
class Oe extends H {
  // Zod schema for validation and serialization
  static schema = Mr;
  static computedProperties = _r;
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
    return (this.x < 0 || this.y < 0) && e.push(new T({
      message: "Position cannot be negative",
      type: "error"
    })), this.diameter <= 0 && e.push(new T({
      message: "Diameter must be positive",
      type: "error"
    })), this.depth !== void 0 && this.depth < 0 && e.push(new T({
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
    return new Oe({ x: e, y: i, diameter: s, face: n });
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new Oe(e);
  }
  get area() {
    const e = this.diameter / 2;
    return Math.PI * e * e;
  }
}
class Nt extends H {
  // Zod schema for validation and serialization
  static schema = Rr;
  static computedProperties = Er;
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
    if (this.position < 0 && e.push(new T({
      message: "Position cannot be negative",
      type: "error"
    })), this.numHoles <= 0 && e.push(new T({
      message: "Number of holes must be positive",
      type: "error"
    })), this.diameter <= 0 && e.push(new T({
      message: "Diameter must be positive",
      type: "error"
    })), this.hingeLength <= 0 && e.push(new T({
      message: "Hinge length must be positive",
      type: "error"
    })), this.depth !== void 0 && this.depth < 0 && e.push(new T({
      message: "Depth cannot be negative",
      type: "error"
    })), this.numHoles > 1) {
      const i = this.hingeLength - 2 * this.outerSpacing;
      this.diameter * this.numHoles > i && e.push(new T({
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
    return this.generateHoles(i, s).map((o) => new Oe(o));
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
      s.push(new Oe({
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
    return new Nt(e);
  }
}
class Da extends H {
  // Validation properties (issues, warnings) are inherited from validationBasePropertiesSchema
  // via sawPropertiesSchema which extends it - they are initialized automatically
  // when the Zod schema is parsed in the constructor
  // isValid is also provided as a computed property from validationBaseComputedProperties
  // Zod schema for validation and serialization
  static schema = li;
  static computedProperties = To;
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
  static defaults = li.parse({});
  constructor(e = {}) {
    super(e), this.stockType === "linear" && (this.cutType = void 0, this.cutPreference = void 0), this.cutType !== "efficiency" && this.options?.minSpacing !== 0 && (this.options = { ...this.options, minSpacing: 0 });
  }
  /**
   * Get entity type
   */
  getType() {
    return m.Saw;
  }
  /**
    * Validate the saw data
    * For backward compatibility, returns Issue[] synchronously
    * Delegates to async validation which uses the schema
    */
  validate() {
    return this.issues = [], this.warnings = [], this.bladeWidth < 0 && this.issues.push(new T({
      message: "Blade width cannot be negative",
      field: [["bladeWidth"]],
      type: "error",
      shouldTranslate: !1
    })), this.issues;
  }
}
function Ei(t, e, i = "decimal") {
  const s = { ...t };
  for (const [n, o] of Object.entries(e)) {
    const r = t[n];
    switch (o.type) {
      case "number":
        r != null ? s[n] = typeof r == "string" ? P({ v: r, nf: i }) : r : r === null && (s[n] = null);
        break;
      case "trim":
        if (r) {
          const a = {};
          for (const [l, c] of Object.entries(r))
            a[l] = typeof c == "string" ? P({ v: c, nf: i }) : c;
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
const Ca = {
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
}, La = {
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
}, Ra = {
  // Numeric field that needs conversion
  bladeWidth: { type: "number" },
  // Stack height should ensure it's a number
  stackHeight: { type: "transform", transform: (t) => typeof t == "number" ? t : t ? Number(t) : 100 },
  // Convert options field to handle minSpacing string/number conversions
  options: {
    type: "transform",
    transform: (t) => ({
      ...t,
      minSpacing: typeof t?.minSpacing == "string" ? P({ v: t.minSpacing, nf: "decimal" }) : t?.minSpacing ?? 0,
      minSpacingDimension: {
        dimension: typeof t?.minSpacingDimension?.dimension == "string" ? P({ v: t.minSpacingDimension.dimension, nf: "decimal" }) : t?.minSpacingDimension?.dimension ?? 0,
        minSpacing: typeof t?.minSpacingDimension?.minSpacing == "string" ? P({ v: t.minSpacingDimension.minSpacing, nf: "decimal" }) : t?.minSpacingDimension?.minSpacing ?? 0
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
function Vt() {
  this.issues = [], this.warnings && (this.warnings = []);
}
function rt(t) {
  t.type === "warning" && this.warnings ? this.warnings.push(t) : this.issues.push(t);
}
function dt(t) {
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
    return new T({
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
function Hi(t, e) {
  const i = t.safeParse(e);
  return i.success ? [] : dt(i.error);
}
const Es = {
  clearValidation: Vt,
  addIssue: rt,
  validateWithSchema: Hi,
  zodErrorsToIssues: dt,
  /**
   * Run standard validation flow
   */
  runValidation(t, e = {}) {
    return Vt.call(this), e.skipSchemaValidation || Hi(t, this).forEach((s) => rt.call(this, s)), this.issues || [];
  }
};
class bc extends H {
  // Required: Define schema and computed properties for SchemaClass
  static schema = ai;
  static computedProperties = co;
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}) {
    super(e);
    const i = ri(this.stockType);
    i.includes(this.cutType) || (this.cutType = i.length > 0 ? i[0] : void 0);
    const s = oi(this.stockType, this.cutType);
    this.cutPreference && !s.includes(this.cutPreference) ? this.cutPreference = s[0] || void 0 : !this.cutPreference && s.length > 0 && (this.cutPreference = s.includes("l") ? "l" : s[0]), this.stockType === "roll" && this.options?.stackingMode !== "none" && (this.options = { ...this.options, stackingMode: "none" }), this.cutType !== "efficiency" && this.options?.minSpacing !== 0 && (this.options = { ...this.options, minSpacing: 0 });
  }
  /**
   * Get entity type
   */
  getType() {
    return m.InputSaw;
  }
  // Validation properties (issues, warnings, isValid) come from the schema via SchemaClass
  // clearValidation and addIssue are provided by validation-helpers
  /**
   * Validate to perform InputSaw-specific validation
   * Implements the Validatable interface requirement
   */
  validate(e) {
    if (Vt.call(this), e?.skipSchemaValidation || Es.runValidation.call(
      this,
      ai,
      e
    ), !e?.skipBusinessValidation) {
      if (this.bladeWidth !== void 0 && this.bladeWidth !== null) {
        const i = P({ v: this.bladeWidth });
        i === null || isNaN(i) || i < 0 ? rt.call(this, new T({
          message: "Blade width must be a non-negative number",
          type: "error",
          field: [["bladeWidth"]]
        })) : i > 100 && rt.call(this, new T({
          message: "Blade width seems unusually large (> 100)",
          type: "warning",
          field: [["bladeWidth"]]
        }));
      }
      this.stackHeight !== void 0 && this.stackHeight !== null && (this.stackHeight < 1 ? rt.call(this, new T({
        message: "Stack height must be at least 1",
        type: "error",
        field: [["stackHeight"]]
      })) : this.stackHeight > 1e3 && rt.call(this, new T({
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
    const n = ri(this.stockType);
    n.includes(this.cutType) || (this.cutType = n.length > 0 ? n[0] : void 0);
    const o = i !== this.stockType, r = s !== this.cutType;
    if (o || r) {
      const a = oi(this.stockType, this.cutType);
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
    const e = this.toData(), i = Ei(
      e,
      Ra
    );
    return new Da(i);
  }
}
const Fs = qe, Ki = ve;
Je.map((t) => `side.${t}`), Ki.map((t) => `face.${t}`), Ki.map((t) => `face.${t}`), Fs.map((t) => `side.${t}`);
class Bt extends H {
  // Zod schema for validation and serialization
  static schema = wo;
  static computedProperties = So;
  /**
   * Get entity type (required for AutoSerializable)
   */
  getType() {
    return m.Machining;
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
      (o.x < 0 || o.y < 0) && n.push(new T({
        message: `Hole ${r + 1}: Position cannot be negative`,
        type: "error"
      })), o.diameter <= 0 && n.push(new T({
        message: `Hole ${r + 1}: Diameter must be positive`,
        type: "error"
      }));
    }) : i === "hingeHoles" ? this.hingeHoles.forEach((o, r) => {
      o.position < 0 && n.push(new T({
        message: `Hinge ${r + 1}: Position cannot be negative`,
        type: "error"
      }));
    }) : i === "corners" ? this.corners.forEach((o, r) => {
      o.size <= 0 && n.push(new T({
        message: `Corner ${r + 1}: Size must be positive`,
        type: "error"
      }));
    }) : (n.push(...this.validate(e, "holes", s)), n.push(...this.validate(e, "hingeHoles", s)), n.push(...this.validate(e, "corners", s))), i || (this.issues = n), n;
  }
  /**
    * Add a hole
    */
  addHole(e) {
    this.holes.push(e instanceof Oe ? e : new Oe(e)), this.validate();
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
    this.hingeHoles.push(e instanceof Nt ? e : new Nt(e)), this.validate();
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
    const i = e instanceof ct ? e : new ct(e);
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
      this.generateHingeHoles(s, e).forEach((o) => {
        i.push(o instanceof Oe ? o : new Oe(o));
      });
    }), i;
  }
  /**
    * Generate individual holes from a hinge hole set
    */
  generateHingeHoles(e, i) {
    const s = [];
    if (e.numHoles <= 0) return s;
    const n = e.numHoles > 1 ? (e.hingeLength - 2 * e.outerSpacing) / (e.numHoles - 1) : 0, o = i?.l || i?.longSide || 0, r = i?.w || i?.shortSide || 0;
    for (let a = 0; a < e.numHoles; a++) {
      const l = e.outerSpacing + a * n;
      let c, f;
      switch (e.side) {
        case "l1":
          c = e.distanceFromEdge, f = e.position + l;
          break;
        case "l2":
          c = o - e.distanceFromEdge, f = e.position + l;
          break;
        case "w1":
          c = e.position + l, f = e.distanceFromEdge;
          break;
        case "w2":
          c = e.position + l, f = r - e.distanceFromEdge;
          break;
        default:
          c = 0, f = 0;
      }
      s.push({
        x: c,
        y: f,
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
    return new Bt();
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new Bt(e);
  }
  get allHoles() {
    const e = [...this.holes];
    return this.hingeHoles.forEach((i) => {
      this.generateHingeHoles(i, null).forEach((n) => {
        e.push(new Oe(n));
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
function Ea(t, e, i) {
  return i ? typeof t == "number" ? isNaN(t) ? null : t : typeof t == "string" ? t : null : e === "decimal" ? t ? P({ v: t, nf: "decimal" }) : null : t;
}
function Fa(t, e, i, s = !1) {
  const n = s ? Object.fromEntries(Je.map((a) => [a, 0])) : { l1: 0, l2: 0, w1: 0, w2: 0 };
  if (!t) return n;
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
    l != null && (n[a] = P({ v: l, nf: e }));
  }), n;
}
class Ms extends H {
  // Required: Define schema and computed properties for SchemaClass
  static schema = _t;
  static computedProperties = Ci;
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
      s[r] === null || s[r] === void 0 ? delete s[r] : s[r] !== void 0 && (s[r] = Ea(s[r], i, n), s[r] === null && delete s[r]);
    s.name?.length ? s.name = rn(s.name)?.toUpperCase() : s.name = "", s.material ? s.material = s.material.trim().toUpperCase() : s.material = "", typeof s.notes == "string" ? s.notes = s.notes.replace(/,/g, " ") : s.notes = "", s.trim && (s.trim = Fa(s.trim, i, n, !0)), super(s), this.issues || (this.issues = []), this.warnings || (this.warnings = []);
  }
  /**
   * Get entity type
   */
  getType() {
    return m.InputRectangle;
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
    return Vt.call(this), e?.skipSchemaValidation || Es.runValidation.call(
      this,
      _t,
      e
    ), this.issues;
  }
  // isValid is provided as a computed property from validationBaseComputedProperties
  /**
   * Get trimmed dimensions
   */
  get trimmedDimensions() {
    const e = this.longSide, i = this.shortSide, s = P({ v: this.trim.l1 }) ?? 0, n = P({ v: this.trim.l2 }) ?? 0, o = P({ v: this.trim.w1 }) ?? 0, r = P({ v: this.trim.w2 }) ?? 0;
    return {
      name: this.name,
      id: this.id,
      autoId: this.autoId,
      l: e - (o + r),
      w: i - (s + n)
    };
  }
}
class wc extends Ms {
  // Required: Define schema and computed properties for SchemaClass
  // Use getters to defer schema access and avoid circular dependency
  static get schema() {
    return Ct;
  }
  static get computedProperties() {
    return mo;
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
      machining: e.machining || new Bt({
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
    return m.InputShape;
  }
  /**
    * Apply part trim
    */
  applyPartTrim(e, i) {
    if (!this.readonly)
      if (e = P({ v: e }), this.trim) {
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
        const y = g.split(".")[0];
        return d[y] = !0, d;
      }, {}), h = Ct.pick(c).safeParse(this.toData());
      if (!h.success) {
        const d = dt(h.error);
        this.issues.push(...d);
      }
    } else {
      this.issues.length = 0, this.warnings.length = 0;
      const l = Ct.safeParse(this.toData());
      if (!l.success) {
        const c = dt(l.error);
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
      fields: o = null
    } = e, r = (l) => !o || o.includes(l);
    r("l") && he.l({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), r("w") && he.w({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), r("t") && he.t({
      item: this,
      index: s ?? this.index,
      category: ["part"],
      saw: e.saw
    }), r("q") && he.q({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), r("trim") && he.trim({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), !n && i.length > 0, r("customData") && he.customData({
      item: this,
      index: s ?? this.index
    });
    const a = [];
    this.issues.forEach((l, c) => {
      l || a.push(c);
    });
    for (let l = a.length - 1; l >= 0; l--)
      this.issues.splice(a[l], 1);
    return this.issues;
  }
  /**
   * Convert to Shape instance
   */
  toShape(e) {
    const i = Ei(
      this.toData(),
      Ca,
      e
    );
    return this.isSquare && (i.orientationLock = null), new Yt(i);
  }
  changeStockType(e) {
    switch (e) {
      case "sheet":
      case "roll":
        this.orientationLock = "", e === "roll" && (this.t = null);
        break;
      case "linear":
        this.orientationLock = "", this.banding = Object.fromEntries(
          Fs.map((i) => [i, !1])
        );
        break;
    }
  }
}
class Sc extends Ms {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Lt;
  static computedProperties = yo;
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
    return m.InputStock;
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
        this.issues[d].field.some((y) => c.includes(y[0])) && this.issues.splice(d, 1);
      for (let d = this.warnings.length - 1; d >= 0; d--)
        this.warnings[d].field.some((y) => c.includes(y[0])) && this.warnings.splice(d, 1);
      const f = this.toData();
      console.log("[InputStock.validate] Field-level validation requested for fields:", e.fields), console.log("[InputStock.validate] Data to validate:", f);
      const h = e.fields.reduce((d, g) => {
        const y = g.split(".")[0];
        return d[y] = !0, d;
      }, {});
      try {
        const d = Lt.pick(h);
        console.log("[InputStock.validate] Created partial schema for fields:", Object.keys(h));
        const g = d.safeParse(f);
        if (console.log("[InputStock.validate] Validation result:", g.success ? "SUCCESS" : "FAILED"), g.success)
          console.log("[InputStock.validate] No validation errors found");
        else {
          console.log("[InputStock.validate] Validation errors:", g.error.issues);
          const y = dt(g.error);
          this.issues = [...this.issues, ...y];
        }
      } catch (d) {
        console.warn(`Failed to validate fields ${e.fields.join(", ")}:`, d);
      }
      this.isNew && (console.log("[InputStock.validate] Clearing isNew flag"), this.isNew = !1);
    } else {
      this.issues = [], this.warnings = [];
      const c = Lt.safeParse(this.toData());
      if (!c.success) {
        const f = dt(c.error);
        this.issues = f;
      }
    }
    if (e?.skipBusinessValidation)
      return this.issues;
    const o = e?.fields, r = (c) => !o || o.includes(c);
    ["l", "w", "t"].forEach((c) => {
      r(c) && he[c]({
        item: this,
        saw: s,
        index: n ?? this.index,
        category: ["stock"]
      });
    }), r("grain") && he.grain({
      item: this,
      index: n ?? this.index,
      category: ["stock"]
    }), r("trim") && he.trim({
      item: this,
      index: n ?? this.index,
      category: ["stock"]
    }), r("q") && he.q({
      item: this,
      index: n ?? this.index,
      isWarning: !0,
      category: ["stock"]
    });
    const l = [];
    this.issues.forEach((c, f) => {
      c || l.push(f);
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
    const o = Ei(
      s,
      La,
      e
    );
    return (i || this.saw) && (o.saw = i || this.saw), new zt(o);
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
class xc extends H {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Ts;
  static computedProperties = bo;
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
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
    return m.Group;
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
    this.clearValidation(), e.q !== void 0 && he.q({ item: e, index: "index" in e && typeof e.index == "number" ? e.index : 0 }).filter((s) => s).forEach((s) => this.addIssue(s));
  }
  /**
    * Validate with actual shape data
    */
  validateWithShapes(e = []) {
    if (!e.length)
      throw new Error("A shapeList is required to validate an InputUserGroup.");
    const i = [...this.issues], s = this.findShapes(e), n = he.groupShapeCount({
      item: this,
      index: 0,
      shapes: s,
      requiredCount: 2
    });
    if (i.push(...n), i.length) return i;
    const o = he.groupOrientationLock({
      item: this,
      index: 0,
      shapes: s
    });
    if (i.push(...o), i.length) return i;
    const r = this.joinDimension, a = he.groupDimensions({
      item: this,
      index: 0,
      shapes: s,
      joinDirection: r
    });
    return i.push(...a), i;
  }
  /**
    * Find shapes from shape list
    */
  findShapes(e) {
    if (this.shapeIds?.length && e.length) {
      const s = [];
      for (const n of this.shapeIds) {
        const o = e.find((r) => !!(r.autoId === n || ye(r) && r.autoId === n || "id" in r && r.id === n));
        o && (ye(o) || oe(o)) && s.push(o);
      }
      return s.length < this.shapeIds.length && this.addIssue(new T({
        message: "Could not find all shapes in the shape list",
        type: "error"
      })), s;
    }
    if (!this.shapes.length) return [];
    const i = [];
    for (const s of this.shapes) {
      const n = e.find((o) => !!(o.autoId === s || String(o.autoId) === String(s) || "id" in o && (o.id === s || String(o.id) === String(s)) || ye(o) && (o.autoId === s || String(o.autoId) === String(s))));
      n && (ye(n) || oe(n)) && i.push(n);
    }
    return i;
  }
  // isValid is now provided as a computed property from the validation schema
  /**
   * Populate parent IDs from shape list IDs
   */
  populateParentID(e) {
    e?.length && this?.shapeIds?.length && (this.shapes = this.shapeIds.map((i) => {
      const s = e.find((n) => n.autoId === i || ye(n) && n.autoId === i);
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
      const d = s.filter((y) => ye(y) || oe(y)), g = this.validateWithShapes(d);
      if (g.filter((y) => y.type === "error").length > 0)
        throw new Error(`Cannot create Group: ${g[0].message}`);
    }
    const o = this.findShapes(s || []);
    if (o.length === 0)
      throw new Error("No shapes found for Group creation");
    const r = o.map((d) => ye(d) ? d.toShape() : d), a = r[0];
    r.forEach((d) => {
      if (s && Array.isArray(s)) {
        const g = s.findIndex((y) => "group" in y && y.group?.inUserGroup ? !1 : "parentId" in y && "parentId" in d && y.parentId === d.parentId || "id" in y && "id" in d && y.id === d.id);
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
    this.direction === "horizontal" ? (c = a.w, r.forEach((d) => l += d.l)) : (l = a.l, r.forEach((d) => c += d.w));
    const f = {
      autoId: this.autoId,
      // Use the same autoId as the InputUserGroup
      shapes: r,
      direction: this.direction,
      // Already 'horizontal' or 'vertical'
      l,
      w: c,
      t: a?.t,
      material: a?.material,
      orientationLock: c > l ? "w" : "l",
      // Set based on which dimension is longer
      type: "user",
      q: 1,
      // Groups always have q=1
      preventAutoRotation: !0,
      container: n,
      skipValidation: !0
      // Already validated
    }, h = new Zt(f);
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
function _s(t) {
  return {
    entities: /* @__PURE__ */ new Map(),
    stockList: [],
    shapeList: [],
    ...t
  };
}
function Et(t, e) {
  if (Array.isArray(e))
    for (const i of e)
      i && typeof i == "object" && (i.autoId && t.entities.set(i.autoId, i), i.id && i.id !== i.autoId && t.entities.set(i.id, i));
}
function Ma(t, e) {
  if (e) {
    if (e && typeof e == "object" && typeof e.getType == "function")
      return e;
    if (typeof e == "string")
      return t.entities.get(e);
    if (e && typeof e == "object" && e.autoId)
      return t.entities.get(e.autoId);
  }
}
function fi(t, e) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t))
    return t.map((s) => fi(s, e));
  if (typeof t.getType == "function")
    return t;
  if (t.__ref && (t.id || t.autoId)) {
    const s = t.autoId || t.id;
    return Ma(e, s) || t;
  }
  const i = { ...t };
  for (const s in i)
    Object.prototype.hasOwnProperty.call(i, s) && (i[s] = fi(i[s], e));
  return i;
}
function $s(t, e, i) {
  if (t == null || t && typeof t == "object" && typeof t.getType == "function")
    return t;
  if (Array.isArray(t))
    return t.every((a) => a && typeof a == "object" && typeof a.getType == "function") ? t : t.map((a) => $s(a, e));
  if (!t || typeof t != "object" || !t.__entityType && !t.__ref && !t.type)
    return t;
  const s = t.__entityType;
  e?.preventAutoRotation && s && (s === m.Rectangle || s === m.Placeable || s === m.Container || s === m.Shape || s === m.Group || s === m.Offcut || s === m.Stock || s === m.Segment) && (t.preventAutoRotation = !0), e && (t.__context = e);
  const n = t.__ref || s, o = bt();
  if (n && o.has(n)) {
    const r = o.get(n), { __ref: a, __entityType: l, __context: c, ...f } = t, h = new r(f);
    return h.issues && Array.isArray(h.issues) && (h.issues = h.issues.map((d) => d instanceof T ? d : T.fromData(d, h))), h.warnings && Array.isArray(h.warnings) && (h.warnings = h.warnings.map((d) => d instanceof T ? d : T.fromData(d, h))), h;
  }
  return delete t.__context, t;
}
function Xe(t, e) {
  if (e || (e = _s()), Array.isArray(t)) {
    const n = [];
    for (const o of t) {
      const r = Xe(o, e);
      n.push(r), r && typeof r == "object" && (r.autoId || r.id) && Et(e, [r]);
    }
    return n;
  }
  if (t && typeof t == "object" && typeof t.getType == "function")
    return (t.autoId || t.id) && Et(e, [t]), t;
  const i = fi(t, e), s = $s(i, e);
  return s && typeof s == "object" && (s.autoId || s.id) && Et(e, [s]), s;
}
function kc(t, e) {
  const i = _s(e), s = t?.saw ? Xe(t.saw, i) : void 0;
  s && Et(i, [s]);
  const n = t?.stockList ? Xe(t.stockList, i) : [];
  n.length > 0 && (i.stockList = n);
  const o = t?.shapeList ? Xe(t.shapeList, i) : [];
  o.length > 0 && (i.shapeList = o);
  const r = t?.cutList ? Xe(t.cutList, i) : [], a = t?.segmentList ? Xe(t.segmentList, i) : [];
  a.length > 0 && (i.segmentList = a);
  const l = t?.offcuts ? Xe(t.offcuts, i) : [];
  return {
    saw: s,
    stockList: n,
    shapeList: o,
    cutList: r,
    segmentList: a,
    offcuts: l,
    context: i
  };
}
function vc(t, e = [], i) {
  return t?.length ? e?.length ? t.map((n) => _a(n, e, i)).filter((n) => X(n)) : [] : [];
}
function _a(t, e, i) {
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
    const n = bt(), o = n.get("Group") || n.get(m.Group);
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
function Ic(t, e) {
  Ue() && (t.stocks && t.stocks.forEach((i, s) => {
    Ie(i) || console.warn(`[${e}] Stock at index ${s} is not a proper Stock instance:`, i);
  }), t.shapes && t.shapes.forEach((i, s) => {
    !oe(i) && !X(i) && console.warn(`[${e}] Shape at index ${s} is not a proper Shape/Group instance:`, i);
  }), t.segments && t.segments.forEach((i, s) => {
    ot(i) || console.warn(`[${e}] Segment at index ${s} is not a proper Segment instance:`, i);
  }), t.groups && t.groups.forEach((i, s) => {
    X(i) || console.warn(`[${e}] Group at index ${s} is not a proper Group instance:`, i);
  }), t.inputUserGroups && t.inputUserGroups.forEach((i, s) => {
    ys(i) || console.warn(`[${e}] InputUserGroup at index ${s} is not a proper InputUserGroup instance:`, i);
  }));
}
function Tc(t, e) {
  return Math.random() * (e - t) + t;
}
function Yi(t, e) {
  if (!de(t.stockLock) || Array.isArray(t.stockLock) && !t?.stockLock?.length)
    return !0;
  if (Array.isArray(t.stockLock)) {
    if (t.stockLock.includes(e.parentId)) return !0;
  } else if (t.stockLock === e.parentId) return !0;
  return !1;
}
function Pc(t, e = null, i = "filter", s = !1) {
  if (!t?.length) return [];
  function n(o) {
    if (s === !0) return o.added;
    if (s === !1) return !o.added;
    if (s === null) return !0;
  }
  if (e) {
    if (e?.saw?.stockType === "linear")
      return t[i]((o) => n(o) && !o.group?.inGroup && Yi(o, e) && o.l <= e.l);
    if (e?.saw?.stockType !== "roll")
      return e && Ie(e) ? t[i]((o) => n(o) && !o.group?.inGroup && Yi(o, e) && o.willItFit(e)) : t[i]((o) => n(o) && !o.group?.inGroup && o.willItFit(e));
  }
  return t[i]((o) => n(o) && !o.group?.inGroup);
}
function Ac(t, e = null) {
  const i = t.filter((o) => !o?.unusable && (e === null || o.used === e)), s = /* @__PURE__ */ new Map();
  for (const o of i) {
    const r = o.parentId;
    s.has(r) || s.set(r, o);
  }
  return Array.from(s.values());
}
function Oc(t, e = null) {
  function i(n) {
    if (e === !0) return n.used;
    if (e === !1) return !n.used;
    if (e === null) return !0;
  }
  t.sort((n, o) => n.material && o.material && n.material !== o.material ? n.material.localeCompare(o.material) : n.t && o.t && n.t !== o.t ? n.t - o.t : n.id.localeCompare(o.id));
  const s = /* @__PURE__ */ new Map();
  for (const n of t) {
    if (!i(n)) continue;
    const o = `${n.l}-${n.w}-${n.t}-${n.material}`;
    s.has(o) || s.set(o, n);
  }
  return Array.from(s.values());
}
function Dc(t, e, i) {
  const s = t.filter((o) => o[e] === 0), n = e === "y" ? "l" : "w";
  return s.reduce((o, r, a) => a > 0 ? o + r[n] + i : o + r[n], 0);
}
function $a(t, e, i) {
  if (e.length <= 1) return t;
  const s = ja(e, i), n = t.reduce((a, l) => (a[l.id] = Na(l, s), a), {}), o = Math.min(...Object.values(n));
  return t.filter((a) => !a.added && n[a.id] === o);
}
function Ga(t, e) {
  const i = e.parentId;
  return t.filter((s) => s.parentId === i).length;
}
function za(t, e) {
  const i = e.parentId, s = t.filter((n) => n.used && n.parentId === i).length;
  return e.q - s;
}
function Cc(t, e) {
  return Ga(t, e) < e.q;
}
function ja(t, e) {
  const i = {};
  return t.forEach((s) => i[s.parentId] = za(e, s)), i;
}
function Na(t, e) {
  return t.stockLock.reduce((s, n) => s + (e?.[n] ? e[n] : 0), 0);
}
function Va(t, e, i = !1) {
  const s = /* @__PURE__ */ new Map(), n = [], o = /* @__PURE__ */ new Set();
  for (let r = 0; r < t.length; r++) {
    const a = t[r], l = a.autoId;
    if (s.has(l)) {
      const c = s.get(l);
      c && (n.push(c.item), s.set(l, null)), n.push(a), o.add(r);
    } else
      s.set(l, { item: a, index: r });
  }
  if (n.length > 0) {
    const r = e ? ` [${e}]` : "", a = [...new Set(n.map((l) => l.autoId))];
    if (console.warn(`[duplicateIdsPresent]${r} Found duplicates!`), console.warn(`  Total items: ${t.length}`), console.warn(`  Duplicate autoIds: ${a.join(", ")}`), n.forEach((l) => {
      console.warn(`  ${l.id} (autoId=${l.autoId}): added=${l.added}, x=${l.x}, y=${l.y}, isGroup=${!!l.shapes}`);
    }), i) {
      const l = Array.from(o).sort((c, f) => f - c);
      for (const c of l)
        t.splice(c, 1);
      console.warn(`  Removed ${l.length} duplicate items. New length: ${t.length}`);
    }
  }
  return n.length > 0;
}
function Lc(t, e) {
  return t.filter((i) => i.l >= e && i.w >= e);
}
function Ba(t, e) {
  if (t.stock?.autoId !== e.stock?.autoId) return !1;
  const i = t.x, s = t.x + t.l, n = t.y, o = t.y + t.w, r = e.x, a = e.x + e.l, l = e.y, c = e.y + e.w;
  return !(s <= r || // shape1 is completely to the left of shape2
  a <= i || // shape2 is completely to the left of shape1
  o <= l || // shape1 is completely below shape2
  c <= n);
}
function Rc(t) {
  const e = [], i = t.filter((s) => s.added);
  for (let s = 0; s < i.length; s++)
    for (let n = s + 1; n < i.length; n++)
      Ba(i[s], i[n]) && e.push({
        shape1: i[s],
        shape2: i[n]
      });
  return e;
}
function Ec(t) {
  t.sort(Ce.groupPlacementOrder);
  for (let e = 0; e < t.length; e++)
    t[e].placementOrder = e;
}
function Fc(t, e) {
  e && t && (e.score = t.score, e.duplicatePattern = t.id);
}
let Gs = () => {
};
function Mc(t) {
  Gs = t;
}
function Wt(t, e, i, s, n) {
  Gs(t, e, i, s, n);
}
class Ye extends H {
  // Required: Define schema and computed properties for SchemaClass
  static schema = vo;
  static computedProperties = Io;
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
    return m.PointCollection;
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
    const i = new Ye();
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
function Wa(t, e, i, s = !0) {
  if (!t || !e || !i) return !1;
  if (t.autoId === e.autoId)
    throw console.error("[collision] ERROR: Shape/group is in testShapes array!"), console.error(`  thisShape: ${t.autoId} (${t.id})`), console.error(`  testShape: ${e.autoId} (${e.id})`), console.error(`  thisShape === testShape: ${t === e}`), new Error(`collision comparing to self ${t.autoId}, ${e.autoId}`);
  const n = s ? i.bladeWidth : 0, o = t.x + t.l + n, r = e.x + e.l + n;
  if (!I.lessThan(t.x, r) || !I.greaterThan(o, e.x))
    return !1;
  const a = t.y + t.w + n, l = e.y + e.w + n;
  return I.lessThan(t.y, l) && I.greaterThan(a, e.y);
}
function qa(t, e, i) {
  for (const s of e)
    if (t.autoId !== s.autoId && Wa(t, s, i))
      return !0;
  return !1;
}
function _c(t, e, i, s = !1) {
  if (!i || !i.length) return !1;
  if (!t?.dimension)
    throw new Error("no line direction provided to collisionWithShapes");
  const n = e.bladeWidth / 2;
  t.shapeCollisions = t.shapeCollisions || [], i = i.filter((o) => o.added);
  for (const o of i) {
    let r = !1, a = !1;
    if (t.dimension === "l" ? (r = I.greaterThan(t.x2, o.x) && I.lessThan(t.x1, o.x + o.l), a = I.greaterThan(t.y1 + n, o.y) && I.lessThan(t.y1 - n, o.y + o.w)) : t.dimension === "w" && (r = I.greaterThan(t.x1 + n, o.x) && I.lessThan(t.x1 - n, o.x + o.l), a = I.greaterThan(t.y2, o.y) && I.lessThan(t.y1, o.y + o.w)), r && a)
      if (s) t.shapeCollisions.push(o);
      else return !0;
  }
  return s ? t.shapeCollisions : t.shapeCollisions.length > 0;
}
function Ve(t, e, i, s, n = null, o = null) {
  return new Qe({ x1: t, y1: e, x2: i, y2: s, origin: n, type: o });
}
function Ua(t, e) {
  const i = t.getCorners(), s = {};
  return i.bottomLeft.x > 0 && i.bottomLeft.y > 0 && (s.bottomLeftDown = Ve(
    i.bottomLeft.x,
    i.bottomLeft.y,
    i.bottomLeft.x,
    0,
    "bottomLeft",
    "bottomLeftDown"
  ), s.bottomLeftLeft = Ve(
    i.bottomLeft.x,
    i.bottomLeft.y,
    0,
    i.bottomLeft.y,
    "bottomLeft",
    "bottomLeftLeft"
  )), i.topLeft.x > 0 && i.topLeft.y < e.w && (s.topLeftLeft = Ve(
    i.topLeft.x,
    i.topLeft.y,
    0,
    i.topLeft.y,
    "topLeft",
    "topLeftLeft"
  ), s.topLeftTop = Ve(
    i.topLeft.x,
    i.topLeft.y,
    i.topLeft.x,
    e.w,
    "topLeft",
    "topLeftTop"
  )), i.topRight.y < e.w && i.topRight.x < e.l && (s.topRightTop = Ve(
    i.topRight.x,
    i.topRight.y,
    i.topRight.x,
    e.w,
    "topRight",
    "topRightTop"
  ), s.topRightRight = Ve(
    i.topRight.x,
    i.topRight.y,
    e.l,
    i.topRight.y,
    "topRight",
    "topRightRight"
  )), i.bottomRight.x < e.l && i.bottomRight.y > 0 && (s.bottomRightRight = Ve(
    i.bottomRight.x,
    i.bottomRight.y,
    e.l,
    i.bottomRight.y,
    "bottomRight",
    "bottomRightRight"
  ), s.bottomRightDown = Ve(
    i.bottomRight.x,
    i.bottomRight.y,
    i.bottomRight.x,
    0,
    "bottomRight",
    "bottomRightDown"
  )), s;
}
function kt(t, e, i = null) {
  if (t.has(e.x, e.y)) {
    const s = t.get(e.x, e.y);
    s.type === "group" && !i && (s.type = void 0);
    return;
  }
  i && (e.type = i), t.add(e);
}
function Ft(t, e, i = null) {
  for (const s of e) {
    if (!s) return;
    kt(t, s, i);
  }
}
function V(t, e, i, s, n) {
  const o = Ha[t](e, i);
  return s && (o.corner = s), n && (o.direction = n), o;
}
const Ha = {
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
function Ka(t, e, i) {
  const s = new Ye(), n = i.toArray().sort(zs), o = e.bladeWidth;
  if (n.forEach((r) => {
    const a = r.corner, l = r.type;
    if (!o)
      s.add(r);
    else
      switch (a) {
        case "topRight":
          {
            const c = V("top", r, o, a);
            l && (c.type = l), s.add(c);
            const f = V("right", r, o, a);
            l && (f.type = l), s.add(f);
          }
          break;
        case "topLeft":
          {
            const c = V("top", r, o, a);
            l && (c.type = l), s.add(c);
            const f = V("left", r, o, a);
            l && (f.type = l), s.add(f);
          }
          break;
        case "bottomRight":
          {
            const c = V("bottom", r, o, a);
            l && (c.type = l), s.add(c);
            const f = V("right", r, o, a);
            l && (f.type = l), s.add(f);
          }
          break;
        case "bottomLeft":
          {
            const c = V("bottom", r, o, a);
            l && (c.type = l), s.add(c);
            const f = V("left", r, o, a);
            l && (f.type = l), s.add(f);
          }
          break;
      }
  }), o) {
    const r = s.toArray();
    for (let a = r.length; a--; ) {
      const l = r[a];
      i.has(l.x, l.y) && s.remove(l.x, l.y);
    }
  } else {
    const r = s.toArray();
    for (let a = r.length; a--; ) {
      const l = r[a];
      for (let c = t.length; c--; ) {
        const f = t[c];
        if (l.x === f.x && l.y === f.y) {
          s.remove(l.x, l.y);
          break;
        }
      }
    }
  }
  if (o) {
    const r = /* @__PURE__ */ new Set();
    let a, l, c, f;
    e?.constructor?.name === "Stock" && e?.trimmed || e?.constructor?.name === "Segment" ? (a = e.x, l = e.y, c = e.x + e.l, f = e.y + e.w) : (a = e.x + (e?.trim?.w1 ?? 0), l = e.y + (e?.trim?.l1 ?? 0), c = e.x + e.l - (e?.trim?.w2 ?? 0), f = e.y + e.w - (e?.trim?.l2 ?? 0));
    let h = s.toArray();
    for (let d = h.length; d--; ) {
      const g = h[d];
      (I.lessThan(g.x, a) || I.lessThan(g.y, l) || I.greaterThan(g.x, c) || I.greaterThan(g.y, f)) && h.splice(d, 1);
    }
    s.clear(), h.forEach((d) => s.add(d)), r.clear(), h = s.toArray();
    for (let d = h.length; d--; ) {
      const g = h[d];
      for (let y = t.length; y--; ) {
        const v = t[y];
        if (g.collidesWith(v)) {
          s.remove(g.x, g.y);
          break;
        }
      }
    }
  }
  return s;
}
function $c(t, e, i) {
  let s = [];
  const n = t.getMinSpacing(i.saw), o = e.corner, r = e.direction;
  if (e.type === "shape")
    switch (o) {
      case "topLeft":
        r === "rl" && (s.push(V("right", e, n, o, r)), s.push(V("topRight", e, n, o, r))), r === "bt" && (s.push(V("bottom", e, n, o, r)), s.push(V("bottomLeft", e, n, o, r)));
        break;
      case "topRight":
        r === "lr" && (s.push(V("left", e, n, o, r)), s.push(V("topLeft", e, n, o, r))), r === "bt" && (s.push(V("bottom", e, n, o, r)), s.push(V("bottomRight", e, n, o, r)));
        break;
      case "bottomRight":
        r === "lr" && (s.push(V("left", e, n, o, r)), s.push(V("bottomLeft", e, n, o, r))), r === "tb" && (s.push(V("top", e, n, o, r)), s.push(V("topRight", e, n, o, r)));
        break;
      case "bottomLeft":
        r === "rl" && (s.push(V("right", e, n, o, r)), s.push(V("bottomRight", e, n, o, r))), r === "tb" && (s.push(V("top", e, n, o, r)), s.push(V("topLeft", e, n, o, r)));
        break;
    }
  else if (e.type === "edge")
    switch (r) {
      case "rl":
      case "lr":
        s.push(V("top", e, 0)), s.push(V("centre", e, 0)), s.push(V("bottom", e, 0));
        break;
      case "tb":
      case "bt":
        s.push(V("left", e, 0)), s.push(V("right", e, 0)), s.push(V("centre", e, 0));
        break;
    }
  if (s = s.filter((l) => l.x >= 0 && l.y >= 0), !s.length) return null;
  const a = new Ye();
  for (const l of s)
    l.raycast = !0, Ft(a, el(t, l, i).toArray());
  return Ns(t, i, a), a;
}
function Ya(t, e) {
  const i = new Ye();
  return t.sort(zs), t.forEach((s) => {
    X(s) ? (Ft(i, s.getCoords(e)), s.shapes.forEach((n) => {
      const o = n.getCoords(e);
      Ft(i, o, "group");
    })) : Ft(i, s.getCoords(e));
  }), i.points.forEach((s) => {
    s.stock = e.getStock;
  }), i;
}
function Gc(t = [], e, i) {
  const s = Ya(
    t === null ? e : t,
    i
  );
  return Ka(
    e,
    i,
    s
  );
}
function zs(t, e) {
  return t.y === e.y ? e.x - t.x : e.y - t.y;
}
function js(t, e, i, s, n, o) {
  t.a = e.id, t.b = i ? i.id : null, t.direction = s, t.raycast = !0, t.type = n, t.corner = o;
}
function zc(t, e) {
  if (t.saw.cutType !== "efficiency" || e.length <= 1) return null;
  let i = new Ye();
  const s = Za(e, t);
  for (const a of e)
    for (const l of s) {
      if (l.shape.id === a.id) continue;
      const c = Object.values(l.rays).filter((f) => f !== void 0);
      for (const f of c)
        Xa(
          f,
          l.shape,
          a,
          i
        );
    }
  const o = t.saw.efficiencyOptions.primaryCompression === "l" ? "lr" : "tb", r = e.reduce((a, l) => (o === "tb" ? a.x + a.l > l.x + l.l : a.y + a.w > l.y + l.w) ? a : l);
  return s.filter(({ shape: a }) => a.id === r.id).forEach(({ shape: a, rays: l }) => {
    const c = Object.values(l).filter((f) => f !== void 0);
    for (const f of c) {
      const h = new be(f.x2, f.y2);
      o === f.direction && (js(h, a, null, f.direction, "edge"), kt(i, h));
    }
  }), i = Qa(i), i;
}
function Za(t, e) {
  return t.map((i) => {
    const s = Ua(i, e);
    return {
      shape: i,
      rays: s
    };
  });
}
function Xa(t, e, i, s) {
  switch (t.direction) {
    case "rl":
      Ot(
        t,
        e,
        i,
        s,
        i.x + i.l
      );
      break;
    case "lr":
      Ot(
        t,
        e,
        i,
        s,
        i.x
      );
      break;
    case "tb":
      Ot(
        t,
        e,
        i,
        s,
        i.y + i.w
      );
      break;
    case "bt":
      Ot(
        t,
        e,
        i,
        s,
        i.y
      );
      break;
  }
}
function Ot(t, e, i, s, n) {
  const o = t.dimension === "w", r = o ? "y" : "x", a = o ? "x" : "y", l = o ? "l" : "w";
  if (t[`${a}1`] >= i[a] && t[`${a}1`] <= i[a] + i[l]) {
    const c = t.direction === "lr" && t[`${r}1`] <= n && t[`${r}2`] >= n, f = t.direction === "rl" && t[`${r}1`] >= n && t[`${r}2`] <= n, h = t.direction === "bt" && t[`${r}1`] <= n && t[`${r}2`] >= n, d = t.direction === "tb" && t[`${r}1`] >= n && t[`${r}2`] <= n;
    if (c || f || h || d) {
      const y = o ? t[`${a}1`] : n, v = o ? n : t[`${a}1`], G = new be(y, v), w = t.origin;
      js(G, e, i, t.direction, "shape", w), kt(s, G);
    }
  }
}
function Qa(t) {
  const e = new Ye();
  return t.points.size === 0 || new Set(t.toArray().map((s) => s.a)).forEach((s) => {
    const n = t.toArray().filter((o) => o.a === s);
    ["right", "left", "top", "bottom"].forEach((o) => {
      const r = Ja(
        n,
        o
      );
      r && kt(e, r);
    });
  }), e;
}
function Ja(t, e) {
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
function el(t, e, i) {
  const s = new Ye(), n = e.getAvailableShapePositions(i);
  for (const o of n) {
    let r;
    switch (r = tl(e, t, i), o) {
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
    kt(s, r);
  }
  return Ns(t, i, s), s;
}
function tl(t, e, i) {
  if (i.saw.cutType !== "efficiency") return t;
  const s = e.getMinSpacing(i.saw), n = i.bladeWidth;
  if (!s || s === n) return t;
  let o;
  if (!t.grid) return t;
  switch (t.grid) {
    case "bottom":
      o = t.cloneAt(t.x, t.y - s + n);
      break;
    case "top":
      o = t.cloneAt(t.x, t.y + s - n);
      break;
    case "left":
      o = t.cloneAt(t.x - s + n, t.y);
      break;
    case "right":
      o = t.cloneAt(t.x + s - n, t.y);
      break;
  }
  return o ? (o.x < 0 && (o.x = 0), o.y < 0 && (o.y = 0), o.adjustedForMinSpacing = !0, o) : t;
}
function Ns(t, e, i) {
  let s, n, o, r;
  e?.constructor?.name === "Stock" && e?.trimmed || e?.constructor?.name === "Segment" ? (s = 0, n = 0, o = e.x + e.l - t.l, r = e.y + e.w - t.w) : (s = e?.trim?.w1 ?? 0, n = e?.trim?.l1 ?? 0, o = e.l - (e?.trim?.w2 ?? 0) - t.l, r = e.w - (e?.trim?.l2 ?? 0) - t.w);
  const a = i.toArray();
  for (let l = a.length; l--; ) {
    const c = a[l];
    (I.lessThan(c.x, s) || I.lessThan(c.y, n) || I.greaterThan(c.x, o) || I.greaterThan(c.y, r) || c.x < 0 || c.y < 0) && i.remove(c.x, c.y);
  }
}
function il(t, e, i = null) {
  const s = /* @__PURE__ */ new Map();
  for (let n = t.length; n--; ) {
    const o = t[n], r = As(o, e.getStock), a = o.shortSide, l = o.longSide;
    r.forEach((c) => {
      if (!o.willItFit(e, c)) return;
      let f;
      !i || i === "l" ? f = c === 0 ? l : a : i === "w" && (f = c === 0 ? a : l), f && s.set(
        f,
        s.has(f) ? s.get(f) + 1 : 1
      );
    });
  }
  return s;
}
function di(t, e) {
  if (t?.length)
    for (let i = t.length; i--; ) {
      const s = t[i];
      sl(
        s,
        e
      );
    }
}
function sl(t, e) {
  if (!t.isSquare) {
    if (t.shortSide === e.w && t.rot) {
      if (!ue(
        t,
        0,
        e
      ))
        throw new Error(
          "could not rotate shape correctly for subset calculation"
        );
    } else if (!e.isSquare && t.longSide === e.w && !t.rot && !ue(
      t,
      1,
      e
    ))
      throw new Error(
        "could not rotate shape correctly for subset calculation"
      );
  }
}
function jc(t, e, i = "l", s = null) {
  if (!t || !e?.length) return !1;
  e.forEach((f) => f.orientationLock = null), di(
    e,
    t
  );
  const n = t.bladeWidth, o = [];
  let r = this.config.subset.shuffles;
  (e.length === 1 || e[0].parentId === e[e.length - 1].parentId) && (r = 1), i === "l" ? e.sort(
    Ce.LD
  ) : e.sort(
    Ce.WD
  ), s || (s = e[0]);
  function a(f, h = !0) {
    h && Ce.shuffle(
      e
    );
    const d = hi(
      n,
      e,
      t.getStock,
      i,
      t[i],
      !1,
      s
    );
    d !== !1 && f.push(
      d
    );
  }
  a(
    o,
    !1
  );
  for (let f = r; f--; ) a(
    o
  );
  if (o.sort(
    (f, h) => h.score.efficiency - f.score.efficiency
  ), !o.length) return !1;
  const l = o[0];
  let c = null;
  return l.totalLength + n < t.l && (c = t.l - (l.totalLength + n), l.offcut = c), l;
}
function nl(t, e, i, s = "l", n, o = !1, r = this.config.subset.shuffles, a = null, l = this.config.subset.efficiency.limit) {
  if (!e?.length) return !1;
  const c = [], f = [
    (y, v) => v[s] - y[s],
    // Largest first
    (y, v) => y[s] - v[s],
    // Smallest first
    (y, v) => v[s] / v.area - y[s] / y.area,
    // Best dimension-to-area ratio
    (y, v) => v.area - y.area,
    // Largest area first
    (y, v) => y.area - v.area
    // Smallest area first
  ], h = e.every(
    (y, v, G) => v === 0 || y.isIdentical(G[v - 1])
  );
  if (!o) {
    const y = e.reduce((v, G) => v + G[s] + t, 0) - t;
    if (y <= n)
      return y / n > l ? {
        totalLength: y,
        shapes: e,
        firstShape: e[0],
        firstShapeRotation: e[0].rot,
        stock: i,
        cutType: "guillotine",
        type: "subset",
        score: {
          efficiency: y / n,
          totalShapesPlaced: e.length
        },
        area: e.reduce((v, G) => v + G.area, 0)
      } : !1;
  }
  const d = hi(t, e, i, s, n, o, a);
  if (d !== !1 && (c.push(d), d.score.efficiency > 0.95 && e.length > 10))
    return d;
  if (h)
    return c[0] || !1;
  const g = Math.min(r, f.length);
  for (let y = 0; y < g; y++) {
    const v = [...e];
    v.sort(f[y % f.length]);
    const G = hi(t, v, i, s, n, o, a);
    if (G !== !1 && (c.push(G), G.score.efficiency > 0.98 && e.length > 30))
      break;
  }
  return c.sort((y, v) => v.score.efficiency - y.score.efficiency), c[0] || !1;
}
function hi(t, e, i, s = "l", n, o = !1, r = null) {
  if (!n || n <= 0 || e?.length < 1) return !1;
  let a = 0;
  const l = [];
  if (r || (r = e[0]), l.push(r), a = r[s], a > n) return !1;
  const c = e.findIndex(
    (f) => f.id === r?.id
  );
  c > -1 && e.splice(c, 1);
  for (const f of e) {
    const h = f[s], d = f.getMinSpacing(
      i.saw,
      !0
    );
    if (!(a + t + d + h > n) && (a += t + d + h, l.push(f), a + t + d >= n))
      break;
  }
  if (r && e.splice(
    c,
    0,
    r
  ), !o && a <= n || o && a + t >= n && a <= n) {
    const f = a / n;
    return f > 1 && console.error(
      "subset created effieciency > 1"
    ), {
      type: "subset",
      totalLength: a,
      shapes: l,
      stock: i,
      cutType: "guillotine",
      score: { efficiency: f, totalShapesPlaced: l.length },
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
function rl(t, e, i = null, s = "l", n = !0, o = !0) {
  if (!t?.length) return;
  if (!e) throw new Error(
    "positionShapes requires stock"
  );
  const r = s === "l" ? "x" : "y", a = s === "l" ? "y" : "x";
  let l = 0;
  X(i) ? di(
    t,
    i
  ) : di(
    t,
    i ?? e
  ), o && (s === "l" ? t.sort(
    Ce.LDIDA
  ) : t.sort(
    Ce.WDIDA
  )), t.forEach(
    (c, f) => {
      c[r] = i ? i[r] + l : l, i && (c[a] = i[a]), l += c[r === "x" ? "l" : "w"] + e.bladeWidth + c.getMinSpacing(e.saw, !0), pe(
        [() => J(
          l
        ).to.be.a(
          "number"
        )]
      ), X(i) ? c.group.placementOrder = f : c.placementOrder = f, n && c.addToStock(e);
    }
  );
}
function Nc(t = null, e, i, s = "l") {
  if (!e) return [];
  if (!t) return [];
  i.sort(
    Ce.ID
  );
  const n = t.shapes;
  return rl(
    n,
    e,
    null,
    s
  ), n;
}
function Vc(t, e, i) {
  Wt("subset", `guillotine subset for segment ${t.id}`);
  function s(k, O = []) {
    const { shapes: M } = o(k);
    return M.filter((x) => {
      if (x.added || O.find((A) => A.id === x.id)) return !1;
      if (x.orientationLock)
        return I.equalTo(x[f], k) ? I.lessThanOrEqualTo(x.l, t.l) && I.lessThanOrEqualTo(x.w, t.w) : !1;
      if (I.equalTo(x.l, k) || I.equalTo(x.w, k)) {
        const A = I.equalTo(x.l, k) ? x.w : x.l;
        return I.lessThanOrEqualTo(A, t[t.cutPreference]);
      }
      return !1;
    });
  }
  function n(k, O, M, x = null) {
    let A = s(
      k,
      O
    );
    if (x) {
      const F = A.find(
        ($) => $.parentId === x.parentId
      );
      if (F) return F;
    }
    if (!A.length) return !1;
    const D = [];
    for (const F of A) {
      const $ = F.l === k ? F.w : F.l;
      M.includes($) && D.push(F);
    }
    return A = D.length ? D : A, Cs(A);
  }
  function o(k) {
    const O = k;
    return re.has(O) || re.set(O, { shapes: [], priorities: [] }), re.get(O);
  }
  function r(k = null) {
    function O(x, A, D) {
      const { shapes: _, priorities: F } = o(A);
      _.includes(x) || (_.push(x), F.push(D));
    }
    if (!g?.length) return re;
    const M = t.getStock;
    for (const x of g) {
      let A = x.getPriority(M);
      k && x.parentId !== k.parentId && (A = 0);
      const D = $e(f);
      if (!x.orientationLock)
        x.longSide <= d && x.shortSide <= t[D] && O(x, x.l, A), !x.isSquare && x.shortSide <= d && x.longSide <= t[D] && O(x, x.w, A);
      else {
        const _ = As(
          x,
          t.getStock
        );
        if (pe([() => J(_.length).to.equal(1)]), ue(
          x,
          _[0],
          t.getStock
        ) === !1)
          throw new Error(
            "could not rotate shape correctly for subset calculation"
          );
        const $ = $e(f);
        x[f] <= d && x[$] <= t[$] && O(x, x[f], A);
      }
    }
    return re;
  }
  function a() {
    const k = [], O = Array.from(re.entries()).map(([x, { shapes: A, priorities: D }]) => ({
      dimension: x,
      count: A.length,
      totalPriority: A.length * Math.max(...D, 0)
    }));
    let M = O.reduce((x, { totalPriority: A }) => x + A, 0);
    for (; O.length > 0; )
      if (M <= 0 || !Number.isFinite(M)) {
        const x = [];
        O.forEach(({ dimension: A, count: D }) => {
          x.push(...Array(D).fill(A));
        });
        for (let A = x.length - 1; A > 0; A--) {
          const D = Math.floor(Math.random() * (A + 1));
          [x[A], x[D]] = [x[D], x[A]];
        }
        k.push(...x);
        break;
      } else {
        const x = Math.random() * M;
        let A = 0, D = -1;
        for (let Q = 0; Q < O.length; Q++)
          if (A += O[Q].totalPriority, A > x) {
            D = Q;
            break;
          }
        D === -1 && (D = Math.floor(Math.random() * O.length));
        const { dimension: _, count: F, totalPriority: $ } = O[D];
        k.push(_), O[D].count--, O[D].totalPriority -= $ / F, O[D].count === 0 ? (M -= $, O.splice(D, 1)) : M -= $ / F;
      }
    return k;
  }
  function l(k, O, M, x, A, D, _) {
    return M += k + O, x.push(k), A.push(
      D.l === k ? D.w : D.l
    ), _.push(D), M;
  }
  function c(k = null) {
    if (!g?.length) return [];
    if (!re.size) return [];
    const O = /* @__PURE__ */ new Map();
    let M = 0;
    const x = [], A = [], D = [];
    let _ = null, F = !0;
    for (let q = 0; q < this.config.subset.guillotine.shuffles; q++) {
      M = 0, x.length = 0, A.length = 0, D.length = 0, _ = null, F = !0;
      const N = a();
      for (const le of N) {
        if (F ? _ = le : _ = h + le, M + _ > d) continue;
        const ge = n(
          le,
          A,
          D,
          k
        );
        ge && (M = l(
          le,
          F ? 0 : h,
          M,
          x,
          D,
          ge,
          A
        ), F = !1);
      }
      if (M) {
        const le = M / d;
        if (pe([() => J(le).to.lessThanOrEqual(1)]), le < this.config.subset.efficiency.limit) continue;
        const ge = A.map((K, fe) => fe);
        ge.sort((K, fe) => D[fe] !== D[K] ? D[fe] - D[K] : x[fe] - x[K]);
        const ce = ge.map(
          (K) => x[K]
        ), Ze = ge.map(
          (K) => A[K]
        );
        pe([
          () => J(Va(Ze)).to.be.false
        ]), O.set(
          ce.join("-"),
          {
            usedDimensions: ce,
            usedShapes: Ze,
            efficiency: le,
            target: d,
            totalLength: M,
            priorityShape: k ? k.parentId : null
          }
        );
      }
    }
    if (O.size === 0) return [];
    const $ = Array.from(
      O.values()
    );
    $.sort(
      (q, N) => q.efficiency > N.efficiency ? -1 : q.efficiency < N.efficiency ? 1 : q.efficiency === N.efficiency ? N.usedDimensions.length - q.usedDimensions.length : 0
    );
    const Q = $.slice(
      0,
      20
    );
    if (!Q.length) return [];
    const ae = Q.slice(
      0,
      typeof this.config.guillotine.stripShapes.iterations == "number" ? this.config.guillotine.stripShapes.iterations : 1
    );
    return ae.length ? (ae.forEach(
      (q) => {
        q.usedShapes.forEach(
          (N, le) => {
            const ge = q.usedDimensions[le];
            pe([() => J([N.l, N.w].includes(ge)).to.be.true]);
            let ce;
            N.isSquare ? ce = 0 : N.longSide === ge ? ce = t.getStock.cutPreference === "l" ? 1 : 0 : ce = t.getStock.cutPreference === "l" ? 0 : 1, N.guillotineState || (N.guillotineState = new Me({})), N.guillotineState.setStripShapeBatchGroup(B, {
              stockId: t.getStock.autoId,
              dimension: ge,
              rot: ce,
              order: le,
              //by this point sorting should have taken place
              priorityShape: q.priorityShape
            });
          }
        ), B++, pe(
          [
            () => {
              const N = q.usedDimensions.reduce(
                (ce, Ze) => ce + Ze,
                0
              ), le = (q.usedDimensions.length - 1) * h, ge = N + le;
              return J(I.lessThanOrEqualTo(ge, d)).to.be.true;
            },
            () => J(
              ae.every((N) => N.efficiency >= this.config.subset.efficiency.limit)
            ).to.be.true,
            () => J(
              ae.every(
                (N) => N.usedDimensions.length === N.usedShapes.length
              )
            ).to.be.true
          ]
        );
      }
    ), ae) : [];
  }
  const f = $e(t.cutPreference), h = t.getStock.bladeWidth, d = t[f];
  pe([() => J(d).to.be.a("number")]);
  const g = $a(
    t.shapes.filter((k) => !X(k)),
    e,
    i
  ), y = t.getStock, v = t.cutPreference, G = y[v], w = this.config.guillotine.firstShapeFullSizeThreshold;
  g.sort((k, O) => {
    const M = k[v] >= w * G, x = O[v] >= w * G;
    if (M && !x) return -1;
    if (x && !M) return 1;
    const A = O.getPriority(y) - k.getPriority(y);
    if (A !== 0) return A;
    const D = k.id.toString().split("."), _ = O.id.toString().split(".");
    return D[0] !== _[0] ? parseInt(D[0]) - parseInt(_[0]) : parseInt(D[1]) - parseInt(_[1]);
  });
  const W = [];
  let B = 0;
  const re = /* @__PURE__ */ new Map();
  if (!this.config.priority.enable || t.type !== "root" || !t.shapes[0].getPriority(y)) {
    r();
    const k = c.call(this);
    W.push(...k);
  } else {
    const k = t.shapes[0];
    r(k);
    const O = Math.min(t.shapes.length, this.config.guillotine.stripShapes.numPriorityShapes);
    for (let M = 0; M < O; M++) {
      const x = c.call(this, k);
      W.push(...x);
    }
  }
  return Wt("subset", `${W.length} strip shape results ${W.map((k) => k.usedShapes.map((O) => O.id).join()).join(" | ")}`), W?.length ? W.length : 0;
}
function ol(t) {
  const e = {};
  return t.forEach((i) => {
    i.shapeIds.forEach((s) => {
      const n = i.q || 1;
      e[s] ? e[s] += n : e[s] = n;
    });
  }), e;
}
function Bc(t, e, i = !0) {
  const s = ol(t), n = [];
  for (const o in s) {
    const r = s[o], a = e.findIndex((f) => f.autoId === o), l = e[a], c = Ds({
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
function Vs(t) {
  const {
    shapes: e,
    container: i,
    targetSize: s,
    d: n,
    id: o,
    exact: r,
    groupDirection: a = "horizontal",
    firstShape: l = null,
    iterations: c,
    type: f = "position",
    tolerance: h = 1e-3,
    config: d
  } = t, g = c ?? d?.subset?.shuffles ?? 10;
  pe([
    () => J(s).to.be.greaterThan(0)
  ]);
  const y = al(e, a, n, i, h);
  if (y.length < 2) return !1;
  const v = { config: d }, G = nl.call(
    v,
    i.bladeWidth,
    y,
    i.getStock,
    cl(a),
    s,
    r,
    g,
    l
  );
  if (!G) return !1;
  if (G?.shapes?.length > 1 && G?.totalLength) {
    let w;
    try {
      w = new Zt({
        id: o,
        direction: a,
        shapes: G.shapes,
        container: i,
        type: f
      }), Wt("groups", `[createGroup] Created group ${w.id} direction=${a} dims=${w.l}x${w.w} with ${w.shapes.length} shapes, [${w.shapes.map((W) => W.id).join()} for ${i.getType()} ${i.id}]`);
    } catch (W) {
      return console.error("group error", W), !1;
    }
    return w;
  }
  return !1;
}
function Wc(t) {
  const {
    shapes: e,
    container: i,
    targetSize: s,
    exact: n = !1,
    direction: o = "l",
    firstShape: r = null,
    preventDuplicates: a = !1,
    tolerance: l,
    maxGroups: c,
    config: f,
    counters: h,
    type: d
  } = t, g = l ?? f?.groups?.tolerance ?? 0.05;
  if (!de(s))
    throw new Error("attempting to create a group with no target size");
  if (s <= 0)
    return console.warn(`Invalid targetSize ${s} - cannot create groups with zero or negative target size`), [];
  if (!de(i))
    throw new Error("attempting to create a group with no container");
  if (!e?.length || e.length < 2) return [];
  const y = Bs(o), v = $e(o), G = y === "horizontal" ? i.w : i.l, w = i.getStock;
  let W = [...e], B = r;
  if (B)
    if (Vo(
      B,
      B[v],
      v,
      w
    ) === !1)
      B = null;
    else {
      const F = B[v], $ = F * (1 - g);
      let Q = F * (1 + g);
      Q > i[v] && (Q = i[v]), W = e.filter((ae) => !oe(ae) || ae.autoId === B.autoId ? !1 : Bi(
        ae,
        $,
        Q,
        v,
        w
      ));
    }
  const re = il(
    W,
    i,
    v
  ), k = Array.from(re.keys()).filter((_) => _ <= G).sort((_, F) => F - _);
  if (k.length === 0) return [];
  const O = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map();
  for (const _ of W) {
    const F = /* @__PURE__ */ new Map();
    for (const $ of k) {
      const Q = $ * (1 - g);
      let ae = $ * (1 + g);
      ae > i[v] && (ae = i[v]);
      const q = Bi(
        _,
        Q,
        ae,
        v,
        w
      );
      F.set($, q);
    }
    M.set(_.autoId, F);
  }
  for (const _ of k) {
    const F = [];
    for (const $ of W) {
      if (!oe($)) continue;
      M.get($.autoId)?.get(_) && F.push($);
    }
    O.set(_, F);
  }
  const x = [], A = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Map();
  for (const _ of k) {
    if (c !== void 0 && x.length >= c)
      break;
    const F = [];
    let $ = O.get(_).filter((Q) => !A.has(Q.autoId));
    if (!($.length < 2)) {
      for (; $.length >= 2 && !(c !== void 0 && x.length + F.length >= c); ) {
        let Q, ae = !1;
        if (F.length && !a) {
          const q = F[F.length - 1], N = q.shapes.slice(), le = /* @__PURE__ */ new Set(), ge = new Set($.map((K) => K.autoId)), ce = [];
          let Ze = !0;
          for (const K of N) {
            let fe = !1;
            if (ge.has(K.autoId) && !le.has(K.autoId)) {
              const Se = $.find((Re) => Re.autoId === K.autoId);
              Se && (ce.push(Se), le.add(K.autoId), fe = !0);
            }
            if (!fe)
              for (const Se of $) {
                if (le.has(Se.autoId)) continue;
                const Re = `${Se.autoId}-${K.autoId}`;
                if (D.has(Re) || D.set(Re, Se.isIdentical(K)), D.get(Re)) {
                  ce.push(Se), le.add(Se.autoId), fe = !0;
                  break;
                }
              }
            if (!fe) {
              Ze = !1;
              break;
            }
          }
          if (Ze && ce.length === N.length) {
            if (ae = !0, q.positions?.length === ce.length)
              for (let K = 0; K < ce.length; K++) {
                const fe = ce[K], Se = N[K], Re = q.positions[K]?.rot ?? Se.rot;
                if (fe.rot !== Re && !ue(fe, Re, i)) {
                  console.warn(`  Failed to rotate ${fe.id} to ${Re} - skipping clone`), ae = !1;
                  break;
                }
              }
            ae && (pe([
              () => J(ce.every((K, fe) => {
                const Se = q.positions[fe]?.rot ?? N[fe].rot;
                return K.rot === Se;
              }), "at least one identical group shape not rotated correctly").to.be.true
            ]), Q = q.cloneWithNewShapes(ce));
          }
        }
        if (!ae) {
          let q = "g" + (typeof h?.group == "number" ? h.group : 0);
          d === "firstShape" && (q = "fs-" + q), Q = Vs({
            shapes: $,
            container: i,
            targetSize: s,
            d: _,
            id: q,
            exact: n,
            groupDirection: y,
            firstShape: B,
            tolerance: g,
            config: f,
            type: d
          });
        }
        if (Q) {
          typeof h?.group == "number" && h.group++, F.push(Q), Q.shapes.forEach((N) => A.add(N.autoId));
          const q = [];
          for (const N of $)
            A.has(N.autoId) || q.push(N);
          if ($ = q, $.length < 2) break;
        } else
          break;
      }
      x.push(...F);
    }
  }
  return x;
}
function al(t, e, i, s, n = 1e-3) {
  return t.filter((o) => {
    const r = $t(o, s);
    if (r) {
      const d = r === "w" ? 1 : 0;
      if (o.rot !== d && !ue(o, d, s))
        return !1;
    }
    if (o.isSquare) return !0;
    const a = i * (1 - n), l = i * (1 + n), c = o.l >= a && o.l <= l, f = o.w >= a && o.w <= l;
    let h = null;
    if (c && f) {
      const d = Math.abs(o.l - i), g = Math.abs(o.w - i);
      h = d <= g ? "l" : "w";
    } else c ? h = "l" : f && (h = "w");
    if (h !== null) {
      const d = ll(
        h,
        e,
        o.rot
      ), g = $t(o, s), y = d ? 1 : 0;
      return g && (g === "l" && y === 1 || g === "w" && y === 0) || !we(o, d, s) ? !1 : ue(o, d, s);
    }
    return !1;
  });
}
function ll(t, e, i) {
  return e === null ? t === "l" : t === (e === "vertical" ? "l" : "w") ? i === 1 : i === 0;
}
function Bs(t) {
  if (!["l", "w"].includes(t)) throw new Error("incorrect direction value");
  if (t === "l") return "horizontal";
  if (t === "w") return "vertical";
}
function cl(t) {
  if (!["horizontal", "vertical"].includes(t)) throw new Error("incorrect groupDirection value");
  if (t === "horizontal") return "l";
  if (t === "vertical") return "w";
}
function ul(t, e, i) {
  return t.filter((s) => s.l === e[i] || s.w === e[i]);
}
function fl(t, e) {
  const i = Array.isArray(e) ? e : [e], s = /* @__PURE__ */ new Set();
  for (const n of i)
    if (n.shapes?.length)
      for (const o of n.shapes)
        s.add(o.autoId);
  return t.filter((n) => X(n) || !s.has(n.autoId));
}
function dl(t, e = "") {
  const i = /* @__PURE__ */ new Set();
  t.filter(X).forEach((r) => {
    r.shapes?.forEach((a) => {
      i.add(a.autoId);
    });
  });
  const n = t.filter((r) => oe(r)).filter((r) => i.has(r.autoId)), o = e ? ` [${e}]` : "";
  J(
    n.length,
    `${o} Found ${n.length} shapes that exist both in groups and independently: ${n.map((r) => r.id || r.autoId).join(", ")}`
  ).to.equal(0);
}
function hl(t, e) {
  const i = [...t, e];
  i.sort((n, o) => (o.score?.total || 0) - (n.score?.total || 0));
  const s = i[0];
  if (s.score?.total && X(s) && (s.score?.total ?? 0) > (e.bestScore?.total ?? 0))
    return e.setBestScore(s), e.bestScore.group = s, s;
}
function qc(t) {
  const { container: e, containerPlacedShapes: i, unplacedShapes: s, shape: n, point: o, config: r, scoreFunction: a } = t;
  if (s.length < 3) return;
  let l = !1;
  n.orientationLock || (l = !0, n.orientationLock = n.rot === 1 ? "w" : "l");
  let c = [], f = [];
  ot(e) ? f = [e.cutDirection] : f = e?.saw?.stockType === "roll" ? ["w"] : ["l", "w"];
  for (const g of f) {
    const y = $e(g), v = g === "l" ? "x" : "y", G = e[g] - n[v] - e.bladeWidth;
    if (G <= 0) continue;
    const w = ul(
      s,
      n,
      y
    );
    if (w.length < 2) continue;
    const W = Vs({
      shapes: w,
      container: e,
      targetSize: G,
      d: n[y],
      id: "g" + n.id + "-" + n.rot + "-" + g.substring(0, 1),
      exact: !1,
      groupDirection: Bs(g),
      firstShape: n,
      iterations: 40,
      config: {
        subset: r.subset
      }
    });
    W && c.push(W);
  }
  c.sort((g, y) => y.efficiency - g.efficiency), c.length > r.sample.groupSize && (c = c.slice(0, r.sample.groupSize)), pe([() => c.every((g) => !oe(g), "shapes in the groups array")]);
  for (const g of c)
    g.x = o.x, g.y = o.y, g.outOfBounds = g.x + g.l > e.l || g.y + g.w > e.w, !g.outOfBounds && (qa(g, i, e) || a(g, e, i, s, o));
  s.forEach((g) => g.resetGroupData());
  const h = hl(c, n), d = c.filter((g) => X(g) && g !== h);
  return d.length > 0 && d.forEach((g) => {
    Wt("groups", `  Destroying group ${g.id} (${g.shapes?.length || 0} shapes)`), g.destroy();
  }), h && ot(e) && (e.shapes.push(h), e.shapes = fl(e.shapes, h)), l && (n.orientationLock = null), h && ot(e) && pe([
    () => dl(e.shapes, "POSITION GROUPS")
  ]), h;
}
const pl = S({
  id: p(),
  count: u(),
  name: p(),
  l: u(),
  w: u(),
  t: u(),
  material: p()
}), Fi = S({
  inputStock: C(Lt),
  inputShapes: C(Ct),
  inputSaw: ai,
  inputUserGroups: C(Ts),
  // Centralized extras options for UI dropdowns
  extrasOptions: S({
    banding: S({
      options: C(p())
    }).optional(),
    finish: S({
      options: C(p())
    }).optional(),
    planing: S({
      options: C(p())
    }).optional()
  }).optional()
}).optional(), gl = S({
  // Banding metrics
  bandingLengthByType: U(p(), u()).default({}),
  // Finish metrics (by face)
  finishAreaByType: U(p(), u()).default({}),
  // Planing metrics (by type)
  planingAreaByType: U(p(), u()).default({}),
  // Material summary with nested structure
  materialSummary: U(
    p(),
    // material name
    U(
      p(),
      // thickness
      S({
        used: u(),
        stacks: u(),
        bandingLengthByType: U(p(), u())
      })
    )
  ).default({}),
  // Tallies
  usedStockTally: U(p(), u()).default({}),
  addedPartTally: U(p(), u()).default({}),
  // Cost metrics
  stockAreaCost: u().default(0),
  totalStockCost: u().default(0),
  // Machining metrics
  hasMachining: b().default(!1),
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
}), Ws = gl.extend({
  bandingLengthByType: U(p(), u()).default({}),
  unplacedParts: C(pl).default([]),
  // Ecommerce pricing - calculated client-side
  offcutCost: u().optional()
}), ml = S({
  // Core optimization results
  stockList: ee("Stock"),
  shapeList: ee("Shape"),
  cutList: ee("Cut").optional(),
  segmentList: ee("Segment").optional(),
  offcuts: ee("Offcut").optional(),
  saw: E("Saw"),
  unusableShapes: ee("Shape").optional(),
  unavailableStock: ee("Stock").optional(),
  evolutionVisData: C(S({})).optional(),
  performance: p().optional(),
  apiVersion: u().optional(),
  // Renamed from 'v'
  metadata: Ws.optional(),
  credits: u().optional(),
  // Optional input data for debugging/API reporting
  inputs: Fi
});
S({
  // Job execution metadata
  success: b(),
  socketId: p().nullable().default(null),
  userId: p(),
  api: b(),
  app: b(),
  widget: b().optional(),
  cached: b().optional(),
  hash: p().optional(),
  webhook: p().optional(),
  config: Z().optional(),
  error: p().optional(),
  jobId: u().optional(),
  // Input data
  inputs: Fi,
  // The actual optimization results
  optimisation: ml
});
S({
  // Database metadata
  jobId: u().optional(),
  // Job execution data
  success: b(),
  socketId: p().nullable().default(null),
  userId: p(),
  api: b(),
  app: b(),
  widget: b().optional(),
  cached: b().optional(),
  hash: p().optional(),
  webhook: p().optional(),
  config: Z().optional(),
  error: p().optional(),
  // Optimization results (flattened from optimization object)
  stockList: ee("Stock"),
  shapeList: ee("Shape"),
  cutList: ee("Cut").optional(),
  segmentList: ee("Segment").optional(),
  offcuts: ee("Offcut").optional(),
  saw: E("Saw"),
  unusableShapes: ee("Shape").optional(),
  unavailableStock: ee("Stock").optional(),
  performance: p().optional(),
  metadata: Ws.optional(),
  apiVersion: u().optional(),
  credits: u().optional(),
  // Input data
  inputs: Fi,
  // Computed fields for easier querying/display
  numParts: u().optional(),
  numStock: u().optional()
});
S({
  id: p().optional(),
  name: p().optional(),
  l: u(),
  w: u(),
  t: u().nullable().optional(),
  material: p().optional(),
  q: u().optional(),
  orientationLock: j([
    z(""),
    z("l"),
    z("w")
  ]).nullable().optional(),
  // Basic extras for display
  banding: Z().optional(),
  finish: Z().optional(),
  planing: Z().optional()
});
const yl = S({
  issues: C(p()),
  id: p(),
  duplicate: b(),
  name: p(),
  added: b(),
  x: u(),
  y: u(),
  l: u(),
  w: u(),
  t: u(),
  q: u().optional(),
  // Add quantity for checkout compatibility
  orientationLock: j([
    z(""),
    z("l"),
    z("w")
  ]),
  trim: S({
    l1: u(),
    l2: u(),
    w1: u(),
    w2: u()
  }),
  material: p(),
  banding: Z(),
  // Using any for now, could use bandingPropertiesSchema
  bandingType: Z(),
  // Legacy field
  finish: Z(),
  // Using any for now, could use finishPropertiesSchema
  stock: S({ id: p() }),
  rot: b(),
  notes: p(),
  customData: U(p(), j([p(), u(), b()]))
});
S({
  issues: C(p()),
  id: p(),
  duplicate: b().optional(),
  name: p(),
  l: u(),
  w: u(),
  t: u().nullable(),
  material: p(),
  cost: u(),
  used: b(),
  grain: j([
    z(""),
    z("l"),
    z("w"),
    ze()
  ]).nullable(),
  trim: S({
    l1: u(),
    l2: u(),
    w1: u(),
    w2: u()
  }),
  parts: C(yl),
  efficiency: u(),
  notes: p().optional(),
  // Legacy V1 fields
  blade: S({
    width: u()
  }).optional(),
  cutPreference: j([
    z("l"),
    z("w")
  ]).optional(),
  // Analysis data
  analysis: S({
    partArea: u(),
    totalParts: u(),
    areaEfficiency: u(),
    cutLength: u(),
    bandingLength: u(),
    numberOfCuts: u(),
    rollLength: u().optional()
  }).optional(),
  // Stack info
  stack: Z().optional(),
  // Stock quantity for checkout compatibility
  q: u().optional()
});
export {
  Ic as $,
  Yl as A,
  oe as B,
  Li as C,
  Pn as D,
  m as E,
  Uo as F,
  pe as G,
  J as H,
  T as I,
  jl as J,
  Tr as K,
  Ri as L,
  _c as M,
  Nl as N,
  gs as O,
  Os as P,
  dl as Q,
  Va as R,
  Me as S,
  Ce as T,
  Xl as U,
  Dc as V,
  Pc as W,
  Vn as X,
  Cl as Y,
  Jn as Z,
  El as _,
  ee as a,
  ve as a$,
  Ll as a0,
  vc as a1,
  xt as a2,
  ps as a3,
  ue as a4,
  we as a5,
  ft as a6,
  No as a7,
  ms as a8,
  fl as a9,
  ni as aA,
  zt as aB,
  $s as aC,
  Fc as aD,
  H as aE,
  Ac as aF,
  da as aG,
  Oc as aH,
  Ec as aI,
  Cc as aJ,
  Ga as aK,
  Pl as aL,
  Kt as aM,
  Yt as aN,
  lt as aO,
  ct as aP,
  se as aQ,
  Be as aR,
  Nt as aS,
  Oe as aT,
  bc as aU,
  wc as aV,
  Sc as aW,
  xc as aX,
  Bt as aY,
  We as aZ,
  Je as a_,
  Rc as aa,
  Qe as ab,
  Lc as ac,
  Wc as ad,
  qa as ae,
  Vc as af,
  Zt as ag,
  Bs as ah,
  de as ai,
  As as aj,
  Wa as ak,
  Kn as al,
  Yi as am,
  Rl as an,
  jc as ao,
  Nc as ap,
  Zl as aq,
  Gc as ar,
  zc as as,
  be as at,
  Ye as au,
  $c as av,
  el as aw,
  qc as ax,
  P as ay,
  Da as az,
  wi as b,
  xo as b$,
  sc as b0,
  Wl as b1,
  Bl as b2,
  Ul as b3,
  ye as b4,
  ys as b5,
  dc as b6,
  tc as b7,
  Rs as b8,
  Ls as b9,
  lr as bA,
  R as bB,
  io as bC,
  Dt as bD,
  Bc as bE,
  _l as bF,
  pc as bG,
  gc as bH,
  hc as bI,
  ne as bJ,
  Ur as bK,
  yt as bL,
  Vr as bM,
  Gl as bN,
  ns as bO,
  Dl as bP,
  Ws as bQ,
  ss as bR,
  Di as bS,
  Oi as bT,
  vi as bU,
  Ti as bV,
  Ii as bW,
  qr as bX,
  Wr as bY,
  Ai as bZ,
  Pi as b_,
  ic as ba,
  Xt as bb,
  Ia as bc,
  oc as bd,
  fc as be,
  uc as bf,
  cc as bg,
  Jl as bh,
  ec as bi,
  ac as bj,
  Ta as bk,
  rc as bl,
  Sa as bm,
  yc as bn,
  Ml as bo,
  sr as bp,
  qe as bq,
  Ge as br,
  ti as bs,
  gl as bt,
  si as bu,
  kc as bv,
  $o as bw,
  Hl as bx,
  Za as by,
  Fl as bz,
  bi as c,
  Dr as c0,
  br as c1,
  nc as c2,
  xi as c3,
  mc as c4,
  $l as c5,
  lc as c6,
  Kl as c7,
  zr as c8,
  ut as c9,
  ql as ca,
  ar as cb,
  ki as d,
  Ut as e,
  zl as f,
  fn as g,
  Ts as h,
  ai as i,
  Lt as j,
  Ct as k,
  Ol as l,
  jt as m,
  Mc as n,
  Al as o,
  X as p,
  Ie as q,
  Ql as r,
  yi as s,
  Wt as t,
  Tc as u,
  I as v,
  Vl as w,
  $e as x,
  ot as y,
  E as z
};

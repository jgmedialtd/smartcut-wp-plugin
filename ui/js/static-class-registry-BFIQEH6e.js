import { d as Es, z as we, e as xt, D as Ti, h as ks, j as Rs, k as Ds, m as As, n as Ms, p as Ls, q as Os, r as He, t as Gs, i as Fs, w as Bs, x as Xs, y as Ns, P as Ze, A as qs, B as Ys, E as J, C as _e, G as Ws, H as ie, S as Ke, J as Ie, K as et, L as R, N as vi, O as z, Q as W, R as N, T as k, U as nt, V as B, W as $t, X as Nt, Y as F, Z as Rt, _ as zs, $ as yn, a0 as Xe, a1 as Vt, a2 as Dt, a3 as je, a4 as ct, a5 as Ei, a6 as ft, a7 as $e, a8 as vt, a9 as bt, aa as Ue, ab as at, ac as te, ad as oe, ae as Qe, af as Hs, ag as Ce, ah as st, ai as ki, aj as js, ak as Us, al as Pe, am as At, an as qt, ao as Jt, ap as Vs, aq as Ri, ar as Di, as as Ai, at as Mi, au as ce, av as Js, aw as Li, ax as Te, ay as Zs, az as tn, aA as _s, v as wt, aB as Ne, aC as Oi, aD as Ks, aE as On, aF as Qs, aG as to, aH as eo, aI as no, aJ as Gn, aK as io, aL as en, aM as nn, aN as so, aO as oo, aP as ro, c as pe, aQ as ve, aR as ao, aS as sn, aT as on, aU as lo, aV as co, aW as ee, aX as uo, aY as fo, aZ as ge, a_ as Ve, a$ as ho, b0 as po, b1 as X, b2 as Fn, b3 as Bn, b4 as Xn, b5 as Nn, b6 as qn, b7 as Yn, b8 as Wn, b9 as zn, ba as Hn, I as jn, bb as Un, bc as Vn, bd as Jn } from "./result.zod-B05sXwuC.js";
import { n as Ct, t as rt, k as Ee, o as xn, m as Zn, i as Gt, j as Ut, w as ot, x as pt, y as Q, A as gt, B as jt, C as ke, D as tt, E as j, F as go, G as mo } from "./vendor-CFKbllLs.js";
import { m as Gi, g as yo } from "./vendor-lodash-B8VQpKjD.js";
import { i as Et } from "./environment-BeBZzWz6.js";
import "./vendor-i18next-2OYl82kj.js";
import { m as Fi } from "./vendor-mongoose-SBRUyGpJ.js";
const Bi = ["root", "firstShape", "near", "far", ""], xo = Es.extend({
  // Cutting information
  cuts: xt("Cut").default([]).behavior({ compress: "exclude" }),
  // Stock reference - serialize as reference only (default zRef behavior)
  stock: we("Stock", { nullable: !0, description: "Stock reference for this segment" }),
  phase: rt().int().min(0).nullable().default(null),
  cutDirection: Ee(Ti).nullable().default(null).describe("The primary cut direction for this segment"),
  // Segment properties
  merged: Ct().default(!1),
  firstShape: we("Shape"),
  children: xt("Segment", {
    description: "Child segments"
  }).behavior({
    serialize: "full",
    // Serialize the full segment objects
    compress: "full",
    // Even in compressed mode, keep full objects
    clone: "copy"
  }),
  parent: we("Segment", { nullable: !0 }).behavior({
    serialize: "reference",
    // Parent can stay as reference
    compress: "exclude"
    // Exclude parent in compressed mode to avoid circular refs
  }),
  type: Ee(Bi).nullable().default(null),
  placementOrder: rt().int().min(0).optional(),
  // Beam saw specific
  hasBeamTrim: Ct().default(!1),
  hasHeadCut: Ct().default(!1),
  isInitial: Ct().default(!1),
  // Trim offcut flag - marks segments that represent trim areas (W1, W2, L1 for beam)
  isTrimOffcut: Ct().default(!1),
  // Visualization flags
  completed: Ct().optional(),
  rowSegment: Ct().optional()
});
xn({
  x: rt().optional(),
  y: rt().optional(),
  l: rt().optional(),
  w: rt().optional(),
  type: Ee(Bi),
  parent: Zn(),
  // Segment instance
  stock: Zn(),
  // Stock instance
  offcut: Ct().optional(),
  merged: Ct().optional(),
  cutDirection: Ee(Ti).nullable().optional()
});
const So = {
  ...ks,
  // Include parent computed properties
  root: {
    compute: (t) => {
      let e = t;
      for (; e.parent; )
        e = e.parent;
      return e;
    },
    metadata: {
      cache: !1,
      // Don't cache as parent relationships can change
      dependencies: [],
      returnType: "any"
    }
  },
  depth: {
    compute: (t) => {
      let e = 0, n = t.parent;
      for (; n; )
        e++, n = n.parent;
      return e;
    },
    metadata: {
      cache: !1,
      // Don't cache as parent relationships can change
      dependencies: [],
      returnType: "number"
    }
  }
}, wo = xn({
  id: Gt().optional(),
  url: Gt().optional(),
  size: rt().optional(),
  mimeType: Gt().optional(),
  name: Gt().optional(),
  width: rt().optional(),
  height: rt().optional()
}), bo = Rs.extend({
  // ImageUpload specific properties
  images: Ut(wo).default([]).describe("Array of uploaded images"),
  maxImages: rt().default(5).describe("Maximum number of images allowed"),
  allowedTypes: Ut(Gt()).default(["image/jpeg", "image/png", "image/gif"]).describe("Allowed MIME types"),
  maxSizeBytes: rt().default(5242880).describe("Maximum file size in bytes (default 5MB)"),
  description: Gt().optional().describe("Description of uploaded images"),
  tags: Ut(Gt()).default([]).describe("Tags associated with images")
  // Note: faces and sides inherited from Extra base
}), Io = {
  // Inherit computed properties from Extra base class
  ...Ds,
  // Check if any images are uploaded
  hasAnyImages: {
    compute: (t) => t.faces ? Object.keys(t.faces).some((e) => {
      const n = t.faces[e];
      return n !== void 0 && n !== !1 && n !== "";
    }) : !1,
    metadata: {
      cache: !1,
      dependencies: ["faces"],
      returnType: "boolean"
    }
  },
  // Get all faces with images
  activeFaces: {
    compute: (t) => t.faces ? Object.keys(t.faces).filter((e) => {
      const n = t.faces[e];
      return n !== void 0 && n !== !1 && n !== "";
    }) : [],
    metadata: {
      cache: !1,
      dependencies: ["faces"],
      returnType: "string[]"
    }
  }
}, _n = xn({
  x: rt(),
  y: rt()
}), rn = As.extend({
  // ========== Polygon Outline ==========
  // Closed polygon vertices, origin-normalized (bounding box origin at 0,0)
  // First vertex should equal last vertex (closed polygon)
  outline: Ut(_n).default([]).describe("Closed polygon outline vertices (origin-normalized)"),
  // Continuous rotation angle for nesting (radians, 0 to 2*PI)
  // The inherited rot (0|1) is not used for nesting shapes
  nestingRotation: rt().min(0).max(Math.PI * 2).default(0).describe("Continuous rotation angle for nesting (radians)"),
  // Actual polygon area computed via shoelace formula
  // Different from inherited area which is the bounding box area (l * w)
  trueArea: rt().min(0).default(0).describe("Actual polygon area (vs bounding box area)"),
  // Inner contour holes (for hollow shapes like frames)
  // Each hole is a closed polygon (first vertex = last vertex), wound CW
  // The main `outline` contains the slit-connected polygon for geometry ops;
  // `holes` stores the clean inner contours for stroke-correct rendering
  holes: Ut(Ut(_n)).default([]).describe("Inner contour holes for rendering (CW wound)")
}), Xi = {
  // Include all Shape computed properties
  ...Ms,
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
rn.describe(JSON.stringify({
  name: "NestingShape",
  description: "Irregular shape with polygon outline for nesting optimization",
  version: "1.0.0",
  extends: "Shape",
  computedProperties: Object.keys(Xi)
}));
ot.colors = [
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
const Re = ot("logs"), Ni = ot("cuts"), Sn = ot("groups"), wn = ot("guillotine"), qi = ot("results"), Yi = ot("scoring"), Wi = ot("firstShapes"), zi = ot("calculations"), Hi = ot("subset"), ji = ot("secondRun"), Ui = ot("stack"), bn = ot("errors"), Vi = ot("allStock"), In = ot("reset"), $n = ot("swarm");
bn.color = 1;
Sn.color = 14;
wn.color = 159;
In.color = 11;
$n.color = 5;
function $o(t = "info", e, n) {
  const i = e.map((o) => {
    const a = { ...o };
    for (const c in a)
      typeof a[c] == "string" && a[c].length > 30 && (a[c] = a[c].slice(0, 50) + "...");
    return a;
  }), r = console.table;
  let s = "";
  switch (console.table = (o, a) => {
    const c = console.log;
    console.log = (l) => {
      s += l + `
`;
    }, r(o, a), console.log = c;
  }, console.table(i, n), t) {
    case "info":
      Re(s);
      break;
    case "guillotine":
      wn(s);
      break;
    case "results":
      qi(s);
      break;
    case "secondRun":
      ji(s);
      break;
    case "cuts":
      Ni(s);
      break;
    case "scoring":
      Yi(s);
      break;
    case "calculations":
      zi(s);
      break;
    case "stack":
      Ui(s);
      break;
    case "subset":
      Hi(s);
      break;
    case "errors":
      bn(s);
      break;
    case "allStock":
      Vi(s);
      break;
    case "firstShapes":
      Wi(s);
      break;
    case "groups":
      Sn(s);
      break;
    case "reset":
      In(s);
      break;
    case "swarm":
      $n(s);
      break;
    default:
      Re(s);
  }
  console.table = r;
}
const Co = "\x1B[31m", Po = "\x1B[0m";
let Ji = !0;
function To(t) {
  Ji = t;
}
const vo = {
  info: Re,
  guillotine: wn,
  results: qi,
  secondRun: ji,
  cuts: Ni,
  scoring: Yi,
  calculations: zi,
  stack: Ui,
  subset: Hi,
  errors: bn,
  allStock: Vi,
  firstShapes: Wi,
  groups: Sn,
  reset: In,
  swarm: $n
}, D = (t = "info", e, n = null, i = null, r = !1) => {
  if (!Ji && !r || !r) return;
  const s = vo[t] || Re;
  if (!s.enabled) return;
  const o = typeof e == "function" ? e() : e;
  s(t === "errors" ? `${Co}${o}${Po}` : o), n && s(n), i && $o(t, i);
};
Ls(D);
const Eo = Os, ko = {
  cacheResults: !0
};
let Zi;
Zi = Gi({}, Eo, ko);
let ut = Zi;
To(ut.enableLogging !== !1);
function Ro() {
  if (ut.guillotine.secondPass && !ut.guillotine.strips.rearrange)
    throw new Error("config.guillotine.secondPass requires config.guillotine.strips.rearrange to be enabled");
  if (ut.captureProfile && ut.runTests)
    throw new Error("config.captureProfile and config.runTests should not be both enabled");
}
Ro();
function Do(t, e = null) {
  if (!t) return ut;
  const n = Ao(t, e);
  if (!n) return ut;
  const i = Gi({}, ut, n);
  return console.log(`[CONFIG] custom config applied for ${t?.username}`), i;
}
function Ao(t, e = null) {
  if (!t || !t?.config) return null;
  switch (t.id) {
    //Glassense Kolu
    case "662a2f8ad28745b63665e68a": {
      const n = "shapeList" in e ? e.shapeList : e.inputShapes, i = n ? n.reduce((r, s) => r + (s.q || 0), 0) : 0;
      if (e) if (i <= 80) {
        const r = { ...t.config };
        return r.groups.guillotine.strips = ut.groups.guillotine.strips, r.sample.guillotine = ut.sample.guillotine, r.guillotine.stripShapes.iterations = ut.guillotine.stripShapes.iterations, r;
      } else
        return t.config;
      else return t.config;
    }
  }
  return t.config;
}
function Kn(t, e, n) {
  return yo(t, e, n);
}
const Mo = pt({
  // Context - using z.any() for complex external types
  job: tt().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: j().nullable().default(null).describe("Socket.io connection ID"),
  user: tt().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: tt().describe("Configuration object"),
  // Type: Config
  api: Q().nullable().default(null).describe("API mode flag"),
  app: Q().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: we("Saw").describe("Saw configuration"),
  stockList: xt("Stock").default([]).describe("List of stock materials"),
  shapeList: He(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: xt("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: xt("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: xt("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: He(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: He(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: Ns,
  // Results storage
  cutList: xt("Cut").default([]).describe("List of cuts to make"),
  segmentList: xt("Segment").default([]).describe("List of segments"),
  offcuts: xt("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: xt("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: Q().default(!1).describe("Use inventory system"),
  successMetric: j().default(ut.successMetric).describe("Metric for optimization success"),
  enableEvo: Q().default(!0).describe("Enable evolutionary algorithm"),
  weighting: jt(j(), tt()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: tt().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: tt().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: pt({
    placement: ke().default(0),
    group: ke().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: Q().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: Q().default(!1).describe("Run guillotine second pass"),
  runningEvo: Q().default(!1).describe("Currently running evolution"),
  evolutionVisData: gt(jt(j(), mo())).default([]).describe("Evolution visualization data"),
  final: Q().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: Q().default(!1).describe("Has minimum spacing requirement")
}), Lo = {}, Oo = go(["decimal", "fraction"]);
pt({
  job: tt().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Extend with autoId/__entityType so they survive Zod validation for worker reconstruction
  inputSaw: Xs.extend({ autoId: j().optional(), __entityType: j().optional() }),
  inputShapes: gt(Bs.extend({ autoId: j().optional(), __entityType: j().optional() })),
  inputStock: gt(Fs.extend({ autoId: j().optional(), __entityType: j().optional() })),
  inputUserGroups: gt(Gs.extend({ autoId: j().optional(), __entityType: j().optional() })).optional(),
  // Number format for conversion
  numberFormat: Oo.optional(),
  // Algorithm configuration
  enableEvo: Q().default(!0),
  weighting: tt().optional(),
  successMetric: j().optional(),
  useInventory: Q().default(!1),
  // Context
  socketId: j().optional(),
  user: tt().optional(),
  // IUser type
  // Application flags
  widget: Q().optional(),
  api: Q().optional(),
  app: Q().optional(),
  domain: j().optional(),
  // Extras options (centralized configuration)
  extrasOptions: pt({
    banding: pt({
      options: pt({
        sides: jt(j(), gt(j())).optional()
      }).optional()
    }).optional(),
    finish: pt({
      options: pt({
        faces: jt(j(), gt(j())).optional()
      }).optional()
    }).optional(),
    planing: pt({
      options: pt({
        sides: jt(j(), gt(j())).optional(),
        faces: jt(j(), gt(j())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // API specific
  config: tt().optional(),
  v: ke().optional(),
  // API version
  webhook: j().optional(),
  //source
  sourceVersion: j().nullish(),
  source: j().optional()
});
pt({
  job: tt().optional(),
  // Type: Job from BullMQ
  saw: tt(),
  // Runtime Saw instance
  shapeList: gt(tt()),
  // Runtime Shape instances
  stockList: gt(tt()),
  // Runtime Stock instances
  userGroups: gt(tt()).optional(),
  // Runtime Group instances
  enableEvo: Q(),
  weighting: tt().optional(),
  successMetric: j().optional(),
  useInventory: Q(),
  socketId: j().optional(),
  user: tt().optional(),
  widget: Q().optional(),
  api: Q().optional(),
  app: Q().optional(),
  domain: j().optional(),
  config: tt().optional(),
  v: ke().optional(),
  webhook: j().optional()
});
class De extends Ze {
  // Required: Define schema and computed properties for SchemaClass
  static schema = qs;
  static computedProperties = Ys;
  constructor(e = {}) {
    const n = { ...e, offcut: !0 };
    super(n), this.offcut = !0;
  }
  /**
    * Get entity type
    */
  getType() {
    return J.Offcut;
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
    const n = this.l * this.w;
    return this.cost = n * e, this.cost;
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
    return new De({
      ...e,
      // Include all rectangle properties (l, w, x, y, material)
      flex: e.flex,
      offcut: !0,
      addToInventory: !1,
      added: !1
    });
  }
}
class Pt extends _e {
  // Required: Define schema and computed properties for SchemaClass
  static schema = xo;
  static computedProperties = So;
  // Note: children is defined in the schema as zRefArray<Segment>
  // No need for getter/setter or backing field - SchemaClass handles it automatically
  constructor(e = {}) {
    const n = { ...e };
    if (n.preventAutoRotation = !0, n.skipValidation = !0, n.parent && n.autoId && n.parent.autoId === n.autoId && delete n.autoId, n.children || (n.children = []), Array.isArray(n.children) && n.autoId && (n.children = n.children.filter(
      (i) => i && i.autoId !== n.autoId
    )), super(n), this.parent && this.autoId === this.parent.autoId)
      throw new Error(`Segment cannot have same autoId as parent: ${this.autoId}`);
    if (this.parent) {
      if (this.type === "firstShape")
        return;
      if (Array.isArray(this.parent.children) || (this.parent.children = []), this.parent.autoId === this.autoId) {
        this.parent = null;
        return;
      }
      if (!this.parent.children.some((r) => r.autoId === this.autoId)) {
        if (this.parent === this) {
          this.parent = null;
          return;
        }
        const r = [...this.parent.children, this];
        this.parent.children = r;
      }
    }
  }
  /**
   * Get entity type
   */
  getType() {
    return J.Segment;
  }
  /**
   * Use automatic enumeration for serialization
   * All schema-defined fields (including children) are serialized automatically
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   * This is cleaner than maintaining a long inclusion list
   */
  static serializationExcludedProperties = [
    "_children"
    // Private backing field for children
    // Note: parent, children are NOT excluded here
    // They are handled specially in serializeValue() to convert to references
  ];
  // Compression exclusions now defined in schema using .behavior()
  /**
   * Get compression-specific overrides
   * Handle parent exclusion in compressed serialization
   */
  getCompressionOverrides() {
    return {
      parent: null
      // Always exclude parent in compression to avoid circular refs
    };
  }
  reset(e = []) {
    if (this.stock && (this.stock.used = !1), this.children && this.children.length > 0)
      for (const n of this.children)
        n && n.parent === this && (n.parent = null);
    this.shapes = e, this.children = [], this.parent = null, this.cuts = [], this.phase = null;
  }
  /**
   * Clear all children and their parent references
   */
  clearChildren() {
    if (this.children && this.children.length > 0) {
      for (const e of this.children)
        e && e.parent === this && (e.parent = null);
      this.children = [];
    }
  }
  /**
   * Add segment to stock (when used as an offcut)
   * Similar to Placeable.addToStock but for segments
   */
  addToStock(e) {
    this.stock = e;
  }
  /**
   * Check if this segment is a descendant of another segment
   */
  isDescendantOf(e) {
    let n = this.parent;
    const i = /* @__PURE__ */ new Set();
    for (; n; ) {
      if (n.autoId === e.autoId)
        return !0;
      if (i.has(n.autoId))
        return console.warn(`[INFINITE LOOP] Parent chain has a loop at segment ${n.autoId}`), !1;
      i.add(n.autoId), n = n.parent;
    }
    return !1;
  }
  /**
   * Add child segment (mainly for changing parents after creation)
   * Note: Most parent-child relationships are now established automatically in the constructor
   */
  addChild(e) {
    if (this.autoId === e.autoId)
      throw console.error(`[SELF-REFERENCE ATTEMPT] Trying to add segment ${this.autoId} as its own child!`), console.error(new Error().stack), new Error(`[SELF-REFERENCE] Cannot add segment ${this.autoId} as its own child`);
    if (this === e)
      throw console.error(`[SELF-REFERENCE OBJECT] Same object reference! Segment ${this.autoId}`), console.error(new Error().stack), new Error("[SELF-REFERENCE] Cannot add segment to itself");
    if (!(e.parent && e.parent.autoId === this.autoId)) {
      if (this.isDescendantOf(e))
        throw new Error(`Circular reference: parent ${this.autoId} would become a descendant of child ${e.autoId}`);
      if (Array.isArray(this.children) || (this.children = []), e.parent && e.parent !== this) {
        const n = e.parent;
        if (Array.isArray(n.children)) {
          const i = n.children.indexOf(e);
          i !== -1 && n.children.splice(i, 1);
        }
        Et() && console.log(`[PARENT CHANGE] Moving ${e.autoId} from parent ${n.autoId} to ${this.autoId}`);
      }
      this.children.some((n) => n.autoId === e.autoId) || (this.children = [...this.children, e], e.parent = this);
    }
  }
  /**
   * Remove child segment
   */
  removeChild(e) {
    const n = this.children;
    if (Array.isArray(n)) {
      const i = n.indexOf(e);
      i !== -1 && (n.splice(i, 1), e.parent = null);
    }
  }
}
class Qn extends Ws {
  // Properties are dynamically created from schema via SchemaClass
  // Static schema reference for automatic updates
  static schema = bo;
  static computedProperties = Io;
  /**
   * Get entity type
   */
  getType() {
    return "imageUpload";
  }
  constructor(e = {}) {
    super(e), this.validate();
  }
  /**
   * Validate image upload configuration
   */
  validate(e) {
    const n = [];
    if (this.images && this.images.length > this.maxImages && n.push(new ie({
      item: e,
      message: `Too many images: ${this.images.length} exceeds maximum of ${this.maxImages}`,
      type: "error"
    })), this.images)
      for (let i = 0; i < this.images.length; i++) {
        const r = this.images[i];
        if (r.url || n.push(new ie({
          message: `Image ${i + 1} is missing URL`,
          type: "error"
        })), r.mimeType && !this.allowedTypes.includes(r.mimeType) && n.push(new ie({
          message: `Image ${i + 1} has unsupported type: ${r.mimeType}`,
          type: "warning"
        })), r.size && r.size > this.maxSizeBytes) {
          const s = (r.size / 1048576).toFixed(2), o = (this.maxSizeBytes / 1048576).toFixed(2);
          n.push(new ie({
            message: `Image ${i + 1} is too large: ${s}MB exceeds ${o}MB`,
            type: "warning"
          }));
        }
      }
    return this.issues = n, n;
  }
  /**
   * Calculate storage cost
   */
  getCost(e) {
    const i = (this.images || []).reduce((s, o) => s + (o.size || 0), 0) / 1048576;
    return Math.ceil(i * 0.01 * 100) / 100;
  }
  /**
   * Get description
   */
  getDescription() {
    if (!this.images || this.images.length === 0)
      return "No images uploaded";
    const e = this.images ? this.images.length : 0, i = ((this.images || []).reduce((r, s) => r + (s.size || 0), 0) / 1048576).toFixed(2);
    return `${e} image${e !== 1 ? "s" : ""} (${i}MB)`;
  }
  /**
   * Check if has values
   */
  hasValues() {
    return !!(this.images && this.images.length > 0);
  }
  /**
   * Clear all images
   */
  clear() {
    this.images = [], this.description = void 0, this.tags = [];
  }
  /**
   * Check if image upload is applicable to shape
   * Image upload can be applied to any shape
   */
  isApplicable(e) {
    return this.enabled;
  }
  /**
   * Clone
   */
  // clone() method removed - using base class implementation from AutoSerializable
  /**
   * Add an image
   */
  addImage(e) {
    return this.images || (this.images = []), this.images.length >= (this.maxImages || 5) ? !1 : (this.images.push(e), !0);
  }
  /**
   * Remove an image by URL
   */
  removeImage(e) {
    if (!this.images) return !1;
    const n = this.images.findIndex((i) => i.url === e);
    return n !== -1 ? (this.images.splice(n, 1), !0) : !1;
  }
  /**
   * Get image by URL
   */
  getImage(e) {
    return this.images ? this.images.find((n) => n.url === e) : void 0;
  }
  /**
   * Get total size in bytes
   */
  getTotalSize() {
    return this.images.reduce((e, n) => e + (n.size || 0), 0);
  }
  /**
   * Get images by tag
   */
  getImagesByTag(e) {
    return this.tags && this.tags.includes(e) ? this.images || [] : [];
  }
  /**
   * Add a tag
   */
  addTag(e) {
    this.tags || (this.tags = []), this.tags.includes(e) || this.tags.push(e);
  }
  /**
   * Remove a tag
   */
  removeTag(e) {
    if (!this.tags) return;
    const n = this.tags.indexOf(e);
    n !== -1 && this.tags.splice(n, 1);
  }
}
class Ae extends Ke {
  static schema = rn;
  static computedProperties = Xi;
  static defaults = rn.parse({});
  constructor(e = {}) {
    super(e);
  }
  getType() {
    return J.NestingShape;
  }
  /**
   * Get the rotated outline vertices, applying nestingRotation around the arithmetic centroid
   * Matches the rotation used in the placement algorithm (geometry.ts rotatePolygon)
   */
  getRotatedOutline() {
    if (!this.outline || this.outline.length < 3) return [];
    if (this.nestingRotation === 0) return this.outline;
    let e = 0, n = 0;
    for (const s of this.outline)
      e += s.x, n += s.y;
    e /= this.outline.length, n /= this.outline.length;
    const i = Math.cos(this.nestingRotation), r = Math.sin(this.nestingRotation);
    return this.outline.map((s) => {
      const o = s.x - e, a = s.y - n;
      return {
        x: i * o - r * a + e,
        y: r * o + i * a + n
      };
    });
  }
  /**
   * Get the rotated + normalized outline (bounding box starts at 0,0)
   * Matches the placement algorithm: rotate, then normalize
   */
  getNormalizedRotatedOutline() {
    const e = this.getRotatedOutline();
    if (!e.length) return [];
    let n = 1 / 0, i = 1 / 0;
    for (const r of e)
      r.x < n && (n = r.x), r.y < i && (i = r.y);
    return e.map((r) => ({
      x: r.x - n,
      y: r.y - i
    }));
  }
  /**
   * Get the translated outline vertices at the shape's current position on stock
   * Uses normalized rotation matching the placement algorithm
   */
  getPositionedOutline() {
    const e = this.getNormalizedRotatedOutline();
    return e.length ? e.map((n) => ({
      x: n.x + (this.x || 0),
      y: n.y + (this.y || 0)
    })) : [];
  }
  /**
   * Get the positioned outer boundary for cutting (bounding box for hollow shapes, outline for solid)
   * Uses the same rotation + normalization as getPositionedOutline()
   */
  getPositionedOuterBoundary() {
    if (!this.holes?.length)
      return this.getPositionedOutline();
    let e = 1 / 0, n = 1 / 0, i = -1 / 0, r = -1 / 0;
    for (const o of this.outline)
      o.x < e && (e = o.x), o.y < n && (n = o.y), o.x > i && (i = o.x), o.y > r && (r = o.y);
    const s = [
      { x: e, y: n },
      { x: i, y: n },
      { x: i, y: r },
      { x: e, y: r }
    ];
    return this.positionContour(s);
  }
  /**
   * Get the positioned hole contours for cutting
   * Each hole is rotated + normalized + translated consistently with the outline
   */
  getPositionedHoles() {
    return this.holes?.length ? this.holes.filter((e) => e.length >= 3).map((e) => {
      const n = e[0].x === e[e.length - 1].x && e[0].y === e[e.length - 1].y ? e.slice(0, -1) : e;
      return this.positionContour(n);
    }) : [];
  }
  /**
   * Position an arbitrary contour using the same transform as getPositionedOutline():
   * rotate around outline centroid, normalize using outline bounds, translate by (x, y)
   */
  positionContour(e) {
    if (!this.outline || this.outline.length < 3) return e;
    if (!this.nestingRotation || this.nestingRotation === 0)
      return e.map((f) => ({
        x: f.x + (this.x || 0),
        y: f.y + (this.y || 0)
      }));
    let n = 0, i = 0;
    for (const f of this.outline)
      n += f.x, i += f.y;
    n /= this.outline.length, i /= this.outline.length;
    const r = Math.cos(this.nestingRotation), s = Math.sin(this.nestingRotation), o = e.map((f) => {
      const d = f.x - n, u = f.y - i;
      return {
        x: r * d - s * u + n,
        y: s * d + r * u + i
      };
    }), a = this.getRotatedOutline();
    let c = 1 / 0, l = 1 / 0;
    for (const f of a)
      f.x < c && (c = f.x), f.y < l && (l = f.y);
    return o.map((f) => ({
      x: f.x - c + (this.x || 0),
      y: f.y - l + (this.y || 0)
    }));
  }
  /**
   * Override createPerimeterCuts to generate polygon-outline cuts instead of bounding-box cuts
   * Each edge of the polygon outline becomes a separate Cut line segment
   */
  createPerimeterCuts(e = null) {
    if (e = e || this.stock, !e) throw new Error("stock is required to create a cut");
    const n = this.getPositionedOutline();
    if (n.length < 3) return [];
    const i = [], s = n[0].x === n[n.length - 1].x && n[0].y === n[n.length - 1].y ? n.length - 1 : n.length;
    for (let o = 0; o < s; o++) {
      const a = n[o], c = n[(o + 1) % n.length];
      i.push(new Ie({
        stock: et(this.stock) ? this.stock : e,
        x1: a.x,
        y1: a.y,
        x2: c.x,
        y2: c.y
      }));
    }
    return i;
  }
  /**
   * Check if this shape's outline is identical to another nesting shape's outline
   * Used for NFP cache deduplication
   */
  isOutlineIdentical(e) {
    if (this.outline.length !== e.outline.length) return !1;
    for (let n = 0; n < this.outline.length; n++)
      if (this.outline[n].x !== e.outline[n].x || this.outline[n].y !== e.outline[n].y) return !1;
    return !0;
  }
}
function an(t, e, n = "x") {
  if (!e) return !1;
  const i = n === "x" ? "l" : "w";
  return !!(R.greaterThanOrEqualTo(t[n], e[n]) && R.lessThanOrEqualTo(t[n] + t[i], e[n] + e[i]));
}
function Zt(t, e, n = "x") {
  if (!e) return !1;
  const i = vi(n);
  return !!(R.greaterThanOrEqualTo(t[n], e[n]) && R.lessThan(t[n], e[n] + e[i]));
}
function _i(t) {
  return {
    cutAxis: t === "l" ? "x" : "y",
    positionAxis: t === "l" ? "y" : "x",
    cutDimension: t,
    positionDimension: z(t)
  };
}
function Go(t, e, n) {
  return t?.length ? t.filter((i) => i.added && R.equalTo(i[e], n)) : [];
}
function Fo(t, e) {
  return t?.guillotineState?.myPhase === e;
}
function Bo(t, e) {
  t?.guillotineState && (t.guillotineState.myStripDirection = e);
}
function Xo(t, e) {
  if (!t) return;
  let n = t;
  for (; n.parent; )
    n = n.parent, e();
}
function No(t, e) {
  return `${e}${t}`;
}
function qo({
  segment: t,
  stock: e,
  cutDirection: n,
  cutAxis: i,
  positionAxis: r,
  positionDimension: s,
  position: o,
  allStockShapes: a,
  halfBladeWidth: c
}) {
  if (e.cutType !== "beam" || !e.hasTrim || s === "w" && t.phase > 1)
    return;
  const l = No(o, n);
  if (!e.trim?.[l]) return;
  const f = e.trimmed ? -c : e.trim[l] - c, d = e.trimmed ? -c : e.trim[l] - c;
  if (N([() => {
    k(f, `trim cut ${o} in the wrong position`).to.equal(d);
  }]), f !== d)
    return;
  const { cut: u } = qe({
    parentSegment: t,
    stock: e,
    cutDirection: n,
    cutAxis: i,
    positionAxis: r,
    position: f,
    allStockShapes: a,
    skipCollisionCheck: !0
  });
  u && (u.isTrim = !0, u.guillotineState.parentSegmentID = t.autoId, u.ptxData || (u.ptxData = {}), u.ptxData.function = t.phase, u.ptxData.isDummy = !1, u.dimension === "l" && (u.beamTrimL1 = !0), u.dimension === "w" && (u.beamTrimW1 = !0), u.dimension === "w" ? new Pt({
    x: -e.trim.w1,
    y: t.y,
    // Start at strip's y position
    l: e.trim.w1,
    w: t.w,
    // Match strip's height
    t: e.t,
    phase: t.phase,
    parent: t,
    // Child of the strip segment being trimmed
    stock: e,
    offcut: !0,
    isTrimOffcut: !0,
    type: "far",
    grain: e.grain,
    saw: e.saw,
    cutDirection: "w"
  }) : u.dimension === "l" && new Pt({
    x: 0,
    // Start at stock origin
    y: -e.trim.l1,
    l: e.l,
    // Use FULL stock width (not trimmed)
    w: e.trim.l1,
    t: e.t,
    phase: t.phase,
    parent: t.parent || t,
    // Use segment's parent; if root, use itself
    stock: e,
    offcut: !0,
    isTrimOffcut: !0,
    type: "far",
    grain: e.grain,
    saw: e.saw,
    cutDirection: "l"
  }), n !== t.cutDirection && (u[i + 2] = e[n]), u.isTrim = !0, t.hasBeamTrim = !0);
}
function Ki(t, e, n = null, i) {
  let r = null;
  const s = [];
  if (!t || !t.length) return {
    allShapesCut: !0,
    uncutShape: null,
    uncutShapeAutoIds: []
  };
  const o = t.every((a) => {
    if (!a.added || !a.stock || W(a) && a.group.inGroup && !i?.ignoreGroupMembership) return !0;
    const c = a.stock.halfBladeWidth;
    let l = null;
    n ? l = n.getSides() : l = a.stock.getSides();
    const f = Object.values(a.getSides()).every((d) => {
      const u = () => {
        switch (d.type) {
          case "top": {
            const y = a.y + a.w + c;
            return e.some((g) => g.dimension === "l" && R.equalTo(g.y1, y) && R.lessThanOrEqualTo(g.x1, a.x) && R.greaterThanOrEqualTo(g.x2, a.x + a.l));
          }
          case "bottom": {
            const y = a.y - c;
            return e.some((g) => g.dimension === "l" && R.equalTo(g.y1, y) && R.lessThanOrEqualTo(g.x1, a.x) && R.greaterThanOrEqualTo(g.x2, a.x + a.l));
          }
          case "left": {
            const y = a.x - c;
            return e.some((g) => g.dimension === "w" && R.equalTo(g.x1, y) && R.lessThanOrEqualTo(g.y1, a.y) && R.greaterThanOrEqualTo(g.y2, a.y + a.w));
          }
          case "right": {
            const y = a.x + a.l + c;
            return e.some((g) => g.dimension === "w" && R.equalTo(g.x1, y) && R.lessThanOrEqualTo(g.y1, a.y) && R.greaterThanOrEqualTo(g.y2, a.y + a.w));
          }
        }
      }, h = () => l.some((y) => {
        switch (d.type) {
          case "top":
            return y.dimension === "l" && R.equalTo(y.y1, a.y + a.w) && R.lessThanOrEqualTo(y.x1, a.x) && R.greaterThanOrEqualTo(y.x2, a.x + a.l);
          case "bottom":
            return y.dimension === "l" && R.equalTo(y.y1, a.y) && R.lessThanOrEqualTo(y.x1, a.x) && R.greaterThanOrEqualTo(y.x2, a.x + a.l);
          case "left":
            return y.dimension === "w" && R.equalTo(y.x1, a.x) && R.lessThanOrEqualTo(y.y1, a.y) && R.greaterThanOrEqualTo(y.y2, a.y + a.w);
          case "right":
            return y.dimension === "w" && R.equalTo(y.x1, a.x + a.l) && R.lessThanOrEqualTo(y.y1, a.y) && R.greaterThanOrEqualTo(y.y2, a.y + a.w);
        }
      }), p = u(), S = h();
      return p || S;
    });
    return f || (r = a, s.push(a.autoId)), f;
  });
  return o && (r = null, s.length = 0), { allShapesCut: o, uncutShape: r, uncutShapeAutoIds: s };
}
const Z = {
  previousSegments: [],
  ptxCuts: 0,
  segments: 0,
  //this needs to be here, as it's shared with the front end - cannot be put into optimiser
  makeCutsIteration: 0
};
function Qi() {
  Z.previousSegments = [], Z.ptxCuts = 0, Z.segments = 0, Z.makeCutsIteration = -1;
}
function Cn({
  container: t,
  shapes: e = [],
  forceNoHeadCut: n = !1,
  final: i = !1,
  saw: r = null
}) {
  Z.ptxCuts = 0;
  const s = t.getStock;
  r && (s.saw = r);
  const o = nt(t);
  let a;
  const c = o ? t.cutDirection : t.cutPreference;
  if (o && t.type === "root")
    a = t, a.cuts = [], a.children = [], a.shapes = e, B("cuts", `REUSING ROOT [${a.autoId ? a.id : "unknown"}] l=${a.l}, w=${a.w}, DIR ${c?.toUpperCase()}`);
  else {
    const h = Z.segments, p = h.toString();
    Z.segments++, a = new Pt({
      id: p,
      x: o ? t.x : 0,
      y: o ? t.y : 0,
      l: o ? t.l : s.l,
      w: o ? t.w : s.w,
      t: s.t,
      saw: s.saw,
      stock: s,
      shapes: e,
      parent: o ? t.parent ?? t : null,
      grain: s.grain,
      material: s.material,
      type: h === 0 ? "root" : "",
      phase: o ? t.phase + 1 : 0,
      hasHeadCut: o ? t.hasHeadCut : !1,
      cutDirection: c,
      isInitial: o ? t.isInitial : !0
    });
  }
  Z.previousSegments = [];
  const l = Qt.call(
    this,
    {
      segment: a,
      stock: s,
      allStockShapes: e,
      forceNoHeadCut: n,
      final: i
    }
  );
  let f, d, u;
  try {
    [f, d, u] = ur(a, i, l.headCutCount);
  } catch (h) {
    return B("errors", `issue analysing segments ${h.message}`), {
      rootSegment: null,
      cuts: [],
      offcuts: []
    };
  }
  if (o && u.length > 0) {
    const h = u.map((p) => `${p.id}@(${p.x},${p.y})`).join(", ");
    B("cuts", `[calculateStripCuts] Returning ${u.length} offcuts for container segment at (${t.x},${t.y}): ${h}`);
  }
  return {
    rootSegment: f,
    cuts: d,
    offcuts: u
  };
}
function Yo(t, e = !1) {
  let n = _i(t);
  return e && (n = ns(n)), n;
}
function Wo(t, e, n, i, r, s, o) {
  if (this?.config && !this?.config?.guillotine?.extendSegments || e.cutType !== "guillotine" || e?.saw?.guillotineOptions?.strategy === "time") return !1;
  const a = t?.merged, c = t?.parent?.merged;
  if (a && c) return !1;
  const l = Fo(n, 1), f = t?.parent ? t.parent?.hasHeadCut : !1;
  let d = !l || f;
  if (!d || (e?.saw?.stockType === "roll" && l && (d = !1), e?.saw?.stockType === "roll" && s === "w")) return !1;
  let u = o.length > 1 && i < o.length - 1;
  f && (u = !0);
  const h = R.lessThan(
    n[s],
    t[s]
  );
  return u && h && !r;
}
function Pn(t) {
  const e = z(t.cutPreference);
  return Vt(e);
}
function zo(t) {
  return z(t.cutPreference);
}
function Ho(t) {
  const e = Pn(t);
  let n = 0;
  return t?.getStock?.hasTrim && t?.getStock?.trimmed === !1 && (n = t?.getStock?.trim?.[e === "x" ? "x1" : "y1"] ?? 0), n;
}
function ts(t) {
  const e = Pn(t), n = Ho(t);
  return t[e] === n;
}
function es(t, e, n) {
  if (!this?.config?.guillotine?.allowHeadCuts || !t?.guillotineOptions?.headCuts || !ts(n)) return !1;
  const i = zo(n), r = Pn(n);
  if (e[r] > n[r]) return !1;
  let s = !1;
  const o = 0.75;
  if (W(e) && e.group.addedAsGroup) {
    const a = n.shapes.filter((f) => f.group?.addedAsGroup === e.group.addedAsGroup), c = Vt(i), l = Nt(a, c);
    l[i] + l[c] >= n[i] * o && (s = !0);
  } else e[i] >= n[i] * o && (s = !0);
  return s;
}
class Tn {
  segment;
  headCutSegment;
  stock;
  allStockShapes;
  forceNoHeadCut;
  final;
  previousCutPosition;
  previousEdgeOfSegment;
  cutSuccess;
  bladeWidth;
  halfBladeWidth;
  stripParentShapes;
  currentStripIndex;
  isHeadCut;
  isEdgeOfSegment;
  headCutCount;
  mergedCut;
  cutPosition;
  cut;
  farSideSegmentSize;
  nearSideSegment;
  farSideSegment;
  rejectedByCollision;
  collisionShapes;
  attemptedDirections;
  constructor(e) {
    this.segment = e.segment, this.stock = e.stock, this.allStockShapes = e.allStockShapes || [], this.forceNoHeadCut = e.forceNoHeadCut || !1, this.final = e.final || !1, this.headCutCount = e.headCutCount ?? 0, this.previousCutPosition = e.previousCutPosition ?? null, this.previousEdgeOfSegment = e.previousEdgeOfSegment || !1, this.cutSuccess = e.cutSuccess || !1, this.bladeWidth = this.stock.bladeWidth, this.halfBladeWidth = this.bladeWidth / 2, this.stripParentShapes = e.stripParentShapes || [], this.currentStripIndex = e.currentStripIndex ?? 0, this.isHeadCut = e.isHeadCut || !1, this.isEdgeOfSegment = e.isEdgeOfSegment || !1, this.mergedCut = e.mergedCut || !1, this.cutPosition = e.cutPosition ?? null, this.cut = e.cut ?? null, this.farSideSegmentSize = e.farSideSegmentSize ?? null, this.headCutSegment = e.headCutSegment ?? null, this.nearSideSegment = e.nearSideSegment ?? null, this.farSideSegment = e.farSideSegment ?? null, this.rejectedByCollision = e.rejectedByCollision || !1, this.collisionShapes = e.collisionShapes || [], this.attemptedDirections = e.attemptedDirections || /* @__PURE__ */ new Set(), Object.freeze(this);
  }
  //caters for head cuts
  get cutInfo() {
    const e = Yo(this.segment.cutDirection, this.isHeadCut);
    return N([() => k(e.cutDimension).to.equal(this.isHeadCut ? z(this.segment.cutDirection) : this.segment.cutDirection)]), e;
  }
  //segment cut direction doesn't change, but this computed property will
  get cutDirection() {
    return this.isHeadCut ? z(this.segment.cutDirection) : this.segment.cutDirection;
  }
  get currentStripParent() {
    return this.stripParentShapes[this.currentStripIndex];
  }
  get previousStripShape() {
    return this.currentStripIndex > 0 ? this.stripParentShapes[this.currentStripIndex - 1] : null;
  }
  get isLastStripShape() {
    return this.currentStripIndex === this.stripParentShapes.length - 1;
  }
  with(e) {
    return new Tn({
      ...this,
      ...e
    });
  }
  // get shapes that are within boundaries of current strip
  getShapesInCurrentStrip() {
    return this.currentStripParent ? this.segment.shapes.filter((e) => Zt(e, this.currentStripParent, this.cutInfo.positionAxis)) : [];
  }
}
function ns(t) {
  return {
    positionAxis: Rt(t.positionAxis),
    positionDimension: z(t.positionDimension),
    cutAxis: Rt(t.cutAxis),
    cutDimension: z(t.cutDimension)
  };
}
function ti(t) {
  return t.type === "root" && t.isInitial;
}
function Qt({
  segment: t,
  stock: e,
  allStockShapes: n = [],
  forceNoHeadCut: i = !1,
  previousCutPosition: r = null,
  previousEdgeOfSegment: s = !1,
  final: o = !1,
  headCutCount: a = 0,
  attemptedDirections: c = /* @__PURE__ */ new Set()
}) {
  B("cuts", `[makeCuts] START: segment ${t.l}x${t.w} phase=${t.phase} type=${t.type} shapes=${t.shapes?.length || 0} final=${o}`);
  let l = new Tn({
    segment: t,
    stock: e,
    allStockShapes: n,
    forceNoHeadCut: i,
    previousCutPosition: r,
    previousEdgeOfSegment: s,
    final: o,
    headCutCount: a,
    attemptedDirections: c
  });
  if (!Uo.call(this, l)) {
    B("cuts", "[makeCuts] EARLY RETURN: invalid input");
    return;
  }
  if (Jo.call(this, l)) {
    B("cuts", "[makeCuts] EARLY RETURN: duplicate segment");
    return;
  }
  Vo(l), l = Zo.call(this, l), l = Ko.call(this, l), B("cuts", `[makeCuts] Found ${l.stripParentShapes.length} strip parent shapes`), l.stripParentShapes.length && (l.segment.offcut = !1);
  const f = l.stripParentShapes?.length || 0;
  e?.id === "1.0" && console.log(
    `[makeCuts] segment=${t.id} dir=${t.cutDirection} box=(${t.x},${t.y} ${t.l}x${t.w}) stripCount=${f} children=${t.children?.length ?? 0}`
  );
  for (let g = 0; g < f; g++) {
    if (l = l.with({ currentStripIndex: g }), e?.id === "1.0") {
      const w = l.currentStripParent;
      console.log(
        `[makeCuts]   strip ${g}/${f - 1}: shape=${w?.parentId}@(${w?.x},${w?.y} ${w?.l}x${w?.w}) parent=${t.id}`
      );
    }
    if (B("cuts", `[makeCuts] Processing shape ${g}: ${l.currentStripParent.l}x${l.currentStripParent.w}`), l.currentStripParent.l === e.l && l.currentStripParent.w === e.w) {
      B("cuts", "[makeCuts] Shape matches stock size, marking as produced"), l = ni.call(this, l);
      break;
    }
    if (l = lr.call(this, l), l.final && l.segment?.parent?.hasHeadCut && l.segment.phase === 1 && t.type === "far" && l.isHeadCut === !1) {
      const w = ns(l.cutInfo), { cutAxis: I, cutDimension: b, positionDimension: $, positionAxis: P } = w;
      qe({
        parentSegment: t,
        stock: e,
        cutDirection: b,
        cutAxis: I,
        positionAxis: P,
        position: t[$] + t[P],
        headCut: !0,
        ptxDummyCut: !0
      });
    }
    if (l = Qo.call(this, l), l.final && e.cutType === "beam" && g === 0 && (t.type !== "far" || is(l)) && (l = tr.call(this, l)), l = er.call(this, l), g = l.currentStripIndex, jo.call(this, l) === !0) {
      B("cuts", "[makeCuts] Breaking due to edge of segment");
      break;
    }
    if (l = rr.call(this, l), l.cut)
      l.isHeadCut && (l.segment.hasHeadCut = !0);
    else {
      if (l.isHeadCut) {
        const w = z(l.cutDirection);
        l.attemptedDirections.has(w) ? B("cuts", `[makeCuts] Skipping reattempt - direction ${w} already attempted`) : (l = l.with({ forceNoHeadCut: !0 }), ei.call(this, l, w));
        break;
      }
      if (l.rejectedByCollision && e.cutType === "beam" && t.phase > 0) {
        const { positionAxis: w, positionDimension: I, cutAxis: b, cutDimension: $ } = l.cutInfo, P = l.currentStripParent[b];
        if (l.collisionShapes?.some((L) => !R.equalTo(L[b], P))) {
          const L = z(l.cutDirection), v = t.cuts.filter((Y) => Y.dimension === l.cutDirection).map((Y) => Y[w + 1]).sort((Y, E) => E - Y)[0], O = v !== void 0 ? v + l.halfBladeWidth : t[w], q = t[w] + t[I] - O;
          if (q > 0) {
            const Y = Ye.call(this, {
              parent: t,
              stock: e,
              type: "near",
              [w]: O,
              [I]: q,
              [b]: t[b],
              [$]: t[$],
              cutDirection: L
            }, !1);
            Y && Qt.call(this, {
              segment: Y,
              stock: e,
              allStockShapes: l.allStockShapes,
              final: l.final,
              headCutCount: l.headCutCount
            });
          }
          break;
        }
      }
      l = ii.call(this, l);
    }
    if (l = l.with({
      cutSuccess: !!l.cut,
      headCutCount: l.isHeadCut && l.cut ? l.headCutCount + 1 : l.headCutCount
    }), l.cut) {
      if (l.final && (l = ni.call(this, l), e.cutType === "beam" && nr.call(this, l), l.cut)) {
        let w = t.parent?.autoId;
        (w === "root" || !w) && (w = "R"), w = `[${w}]`;
        let I = t.autoId ? t.id : "unknown";
        I = `[${I}]`, B("cuts", `${w}->${I} P${t.phase} {${l.currentStripParent.autoId}} ${l.isHeadCut ? "HEAD" : "NORM"} ${t?.type?.toUpperCase()} ${$t(t.l, 4)}x${$t(t.w, 4)} ${$t(l.cutPosition, 4)} ${$t(l?.cut?.x1, 4)}|${$t(l?.cut?.x2, 4)}|${$t(l?.cut?.y1, 4)}|${$t(l?.cut?.y2, 4)}`), B("cuts", `DIRECTIONS FOR ${I}: STATE ${l?.cutDirection?.toUpperCase()} CUT ${l.cut?.dimension?.toUpperCase() ?? "N/A"} SEGMENT ${t?.cutDirection?.toUpperCase()}`);
      }
      if (l = ii.call(this, l), l = ar.call(this, l), l.isHeadCut) break;
    }
  }
  const d = ss(l.segment), { allShapesCut: u } = Ki(l.segment.shapes, d, l.segment, { ignoreGroupMembership: !0 }), h = l.segment.cutDirection, p = z(h), S = !l.attemptedDirections.has(h), y = !l.attemptedDirections.has(p), x = t.cuts.length === 0;
  if (!u && S && y && x) {
    B("cuts", `[makeCuts] Not all shapes cut in segment [${t.id}] with ${l.segment.shapes.length} shapes, retrying in ${p?.toUpperCase()} direction`);
    const g = new Set(l.attemptedDirections);
    return g.add(h), l = l.with({ attemptedDirections: g }), ei.call(this, l, p), l;
  }
  return l.final && e.cutType === "beam" && t.phase === 0 && (l = sr.call(this, l)), l.final && e.cutType === "beam" && t.type === "far" && t.parent.hasHeadCut && (l = or.call(this, l)), l;
}
function is(t) {
  const { segment: e, isHeadCut: n } = t;
  return n ? !1 : e?.parent?.hasHeadCut && e.type === "far";
}
function jo(t) {
  const e = t.stock?.id === "1.0";
  if (e && console.log(
    `[handleEdge] enter parent=${t.segment.id} stripIdx=${t.currentStripIndex} shape=${t.currentStripParent?.parentId}@(${t.currentStripParent?.x},${t.currentStripParent?.y} ${t.currentStripParent?.l}x${t.currentStripParent?.w}) isEdgeOfSegment=${t.isEdgeOfSegment} children=${t.segment.children?.length ?? 0}`
  ), !t.isEdgeOfSegment)
    return e && console.log("[handleEdge] -> not at edge, proceeding"), !1;
  const { currentStripParent: n, segment: i, cutInfo: r } = t, { positionDimension: s, positionAxis: o } = r;
  if (R.greaterThanOrEqualTo(n[s] + n[o] + t.bladeWidth, i[s] + i[o]) && t.stock.cutType === "beam")
    return e && console.log("[handleEdge] -> shapeFillsSegment+beam, proceeding"), !1;
  if (t = t.with({ previousEdgeOfSegment: !0 }), !i.children.length)
    return e && console.log("[handleEdge] -> no children, proceeding (would have wanted to recurse on far)"), !1;
  const c = t.segment.children.findLast((l) => l.type === "far");
  if (e) {
    const l = t.segment.children.map((f) => `${f.id}:${f.type}`).join(",");
    console.log(`[handleEdge] children=[${l}] farFound=${!!c} farId=${c?.id}`);
  }
  return c ? (e && console.log(`[handleEdge] -> RECURSING on far=${c.id}, breaking loop`), t = t.with({ segment: c }), c.cutDirection = z(t.cutDirection), Qt.call(this, {
    segment: c,
    stock: t.stock,
    allStockShapes: t.allStockShapes,
    forceNoHeadCut: t.forceNoHeadCut,
    previousCutPosition: t.previousCutPosition,
    previousEdgeOfSegment: t.previousEdgeOfSegment,
    final: t.final,
    headCutCount: t.headCutCount
  }), !0) : (e && console.log("[handleEdge] -> no far child found, proceeding"), !1);
}
function ss(t, e = /* @__PURE__ */ new Set()) {
  if (e.has(t.autoId)) return [];
  e.add(t.autoId);
  const n = [...t.cuts];
  if (t.children?.length)
    for (const i of t.children)
      n.push(...ss(i, e));
  return n;
}
function ei(t, e) {
  const { segment: n } = t;
  n.cutDirection = e;
  const i = new Set(t.attemptedDirections);
  return i.add(e), t = t.with({
    isHeadCut: !1,
    attemptedDirections: i
  }), n.cuts.length = 0, n.clearChildren(), t.segment.hasHeadCut = !1, B("cuts", `REATTEMPTING [${n.id}] new direction ${n?.cutDirection?.toUpperCase()}`), Qt.call(this, {
    segment: t.segment,
    stock: t.stock,
    allStockShapes: t.allStockShapes,
    forceNoHeadCut: t.forceNoHeadCut,
    previousCutPosition: t.previousCutPosition,
    previousEdgeOfSegment: t.previousEdgeOfSegment,
    final: t.final,
    headCutCount: t.headCutCount,
    attemptedDirections: i
  }), !0;
}
function Uo(t) {
  if (!t.segment) return !1;
  const { segment: e, stock: n, cutDirection: i, previousCutPosition: r, allStockShapes: s } = t;
  return !["l", "w"].includes(i) || e.l <= 0 || e.w <= 0 || r === void 0 ? !1 : (N([
    () => k(s.every((o) => W(o) || F(o)), "allStockShapes must be shape or any type of group").to.be.true,
    () => k(et(n)).to.be.true
  ]), !0);
}
function Vo(t) {
  const { final: e } = t;
  return e && Z.makeCutsIteration++, t;
}
function Jo(t) {
  const { segment: e, cutDirection: n } = t;
  return e.type !== "root" && Z.previousSegments.some((i) => e.l === i.l && e.w === i.w && e.x === i.x && e.y === i.y && e.type === i.type && n === i.cutDirection);
}
function Zo(t) {
  const { segment: e, cutDirection: n } = t;
  return Z.previousSegments.push({
    w: e.w.valueOf(),
    l: e.l.valueOf(),
    x: e.x.valueOf(),
    y: e.y.valueOf(),
    type: e.type,
    cutDirection: n.valueOf()
  }), Z.previousSegments.length > 20 && (Z.previousSegments = Z.previousSegments.slice(-20)), t;
}
function _o(t, e, n) {
  return t.filter(
    (i, r, s) => s.findIndex(
      (o) => R.equalTo(
        o[e] + o[n],
        i[e] + i[n]
      )
    ) === r
  );
}
function Ko(t) {
  const { segment: e, stock: n, cutDirection: i, cutInfo: r, previousCutPosition: s, halfBladeWidth: o } = t, { cutAxis: a, positionAxis: c, positionDimension: l } = r;
  let f = [];
  if (B("cuts", `Finding strip parent shapes. Segment ${e.id} has ${e.shapes.length} shapes:`), e.shapes.slice(0, 3).forEach((u) => {
    B("cuts", `  Shape ${u.id}: l=${u.l}, w=${u.w}, rot=${u.rot}, at (${u.x},${u.y}), added=${u.added}`);
  }), n.cutPreference === i) {
    const u = e.type === "far" && n.cutType === "guillotine" || !s ? e[a] : s + o;
    B("cuts", `[findStripParentShapes] cutPreference=${n.cutPreference}, cutDirection=${i}, cutAxis=${a}, axisPosition=${u}, segment.shapes[0]?.[${a}]=${e.shapes[0]?.[a]}, segment.type=${e.type}`), f = Go(
      e.shapes,
      a,
      u
    );
  } else {
    B("cuts", `[findStripParentShapes] NOT using cutPreference path, cutPreference=${n.cutPreference}, cutDirection=${i}, cutAxis=${a}, segment[${a}]=${e[a]}, segment.shapes[0]?.[${a}]=${e.shapes[0]?.[a]}, segment.shapes[0]?.added=${e.shapes[0]?.added}`), f = e.shapes.filter(
      (h) => h.added && R.equalTo(h[a], e[a])
    );
    const u = f.filter((h) => F(h));
    if (u.length > 0) {
      const h = /* @__PURE__ */ new Set();
      u.forEach((p) => {
        p.shapes && Array.isArray(p.shapes) && p.shapes.forEach((S) => h.add(S.autoId));
      }), f = f.filter((p) => F(p) ? !0 : !h.has(p.autoId));
    }
    f = _o(f, c, l);
  }
  if (f.length === 0) {
    const u = e.shapes.filter((h) => h.added);
    if (u.length > 0) {
      const h = Math.min(...u.map((p) => p[a]));
      f = u.filter((p) => R.equalTo(p[a], h)), B("cuts", `[findStripParentShapes] Fallback: found ${f.length} shapes at min axis position ${h}`);
    }
  }
  const d = e.shapes.filter((u) => F(u) && u.type === "user" && u.added);
  for (const u of d)
    if (!f.some((h) => h.autoId === u.autoId)) {
      const h = n.cutPreference === i ? e.type === "far" && n.cutType === "guillotine" || !s ? e[a] : s + o : e[a];
      R.lessThanOrEqualTo(u[a], h) && f.push(u);
    }
  if (f.sort((u, h) => u[c] - h[c]), !e?.hasHeadCut) {
    const u = e.shapes.filter((p) => p.added), h = Nt(u, c);
    h && !f.some((p) => p.autoId === h.autoId) && f.push(h);
  }
  return t.with({ stripParentShapes: f });
}
function Qo(t) {
  const { segment: e, stock: n, cutDirection: i, cutInfo: r, halfBladeWidth: s, allStockShapes: o, previousStripShape: a, currentStripParent: c, currentStripIndex: l, bladeWidth: f } = t, { cutAxis: d, positionAxis: u, cutDimension: h, positionDimension: p } = r;
  if (l === 0) return t;
  if (a && R.equalTo(c[d], e[d]) && R.equalTo(a[d], e[d]) && !R.equalTo(
    c[u],
    a[u] + a[p] + f
  )) {
    B("cuts", `[makeCuts] Creating gap cut at position ${c[u] - s}, dir=${i}`);
    const { cut: S, previousCutPosition: y } = qe({
      parentSegment: e,
      stock: n,
      cutDirection: i,
      cutAxis: d,
      positionAxis: u,
      position: c[u] - s,
      allStockShapes: o
    });
    if (S) {
      const x = y < e[u] ? e[u] : y, g = x + s - e[u], m = c[u] - x - f - s, w = e[u] + g, I = m > 0 ? Ye.call(this, {
        parent: e,
        stock: n,
        offcut: !0,
        type: "near",
        [d]: e[d],
        [h]: e[h],
        [u]: w,
        [p]: m
      }) : null;
      I && N([
        () => k(
          I.cutDirection,
          `near side segment ${I.id} has the same cutDirection as segment ${e.id}`
        ).not.to.equal(e.cutDirection)
      ]);
    }
  }
  return t;
}
function tr(t) {
  if (t.stock.cutType !== "beam" || t.currentStripIndex !== 0 || t.segment.type === "far" && !is(t)) return t;
  const { segment: e, stock: n, cutDirection: i, cutInfo: r, allStockShapes: s, halfBladeWidth: o } = t, { cutAxis: a, positionAxis: c, positionDimension: l } = r;
  return e.phase !== 1 || !t.final || qo({
    segment: e,
    stock: n,
    cutDirection: i,
    cutAxis: a,
    positionAxis: c,
    positionDimension: l,
    position: 1,
    allStockShapes: s,
    halfBladeWidth: o
  }), t;
}
function er(t) {
  const { segment: e, stock: n, cutInfo: i, halfBladeWidth: r, currentStripParent: s, currentStripIndex: o, stripParentShapes: a, isHeadCut: c, bladeWidth: l, previousEdgeOfSegment: f } = t, { positionAxis: d, cutAxis: u, positionDimension: h, cutDimension: p } = i;
  let S = s[d] + s[h] + r, y = !1, x = o;
  B("cuts", `Cut position calc: shape ${s.l}x${s.w}, posAxis=${d}, posDim=${h}`), B("cuts", `  Shape rot=${s.rot}, autoId=${s.autoId}`), B("cuts", `  ${d}=${s[d]}, ${h}=${s[h]} => cutPos=${S}`), B("cuts", `  cutDirection=${t.cutDirection}, cutAxis=${i.cutAxis}, cutDim=${i.cutDimension}`), B("cuts", `  Shape actual extent: x=[${s.x} to ${s.x + s.l}], y=[${s.y} to ${s.y + s.w}]`), B("cuts", `  Strip parent shapes count: ${a.length}`), a.length > 1 && B("cuts", `  All strip parents: ${a.map((w) => `${w.id}(${w.l}x${w.w} rot=${w.rot})`).join(", ")}`);
  let g = R.greaterThanOrEqualTo(
    s[d] + s[h] + l,
    e[d] + e[h]
  );
  const m = e.shapes;
  if (!c && !g && !f && Wo.call(this, e, n, s, o, g, t.cutDirection, a)) {
    let w = s;
    for (let I = o + 1; I < a.length; I++) {
      const b = a[I];
      if (b.autoId === w.autoId) continue;
      if (!b) break;
      const $ = m.filter(
        (v) => Zt(v, s, d)
      ), P = Nt($, u), T = $.reduce(
        (v, O) => R.greaterThan(v[h], O[h]) ? v : O
      );
      R.greaterThan(
        T[d] + T[h],
        w[d] + w[h]
      ) && (w = T, S = w[d] + w[h] + r);
      const L = Nt(
        m.filter(
          (v) => Zt(v, b, d)
        ),
        u
      );
      if (!R.equalTo(
        P[u] + P[p],
        L[u] + L[p]
      ))
        break;
      if (R.equalTo(w[p], b[p]) && R.equalTo(w[u], b[u]))
        y = !0, S = b[d] + b[h] + r, w = b, x = I;
      else
        break;
    }
    y && (e.merged = !0, g = R.greaterThanOrEqualTo(
      S - r,
      e[d] + e[h]
    ));
  }
  return t.with({
    cutPosition: S,
    mergedCut: y,
    isEdgeOfSegment: g,
    currentStripIndex: x
  });
}
function nr(t) {
  if (t.stock.cutType !== "beam" || !t.cut) return t;
  const { cut: e, segment: n, cutInfo: i, currentStripParent: r, currentStripIndex: s, stripParentShapes: o } = t, { positionAxis: a, positionDimension: c } = i;
  e?.guillotineState?.partProduced && s === o.length - 1 && R.equalTo(
    r[a] + r[c],
    n[a] + n[c]
  ) && (B("cuts", `MARKING PTX DUMMY CUT ${r.autoId} ${t.cutPosition}`), e.ptxData.isDummy = !0);
}
function ir(t) {
  return t.hasHeadCut ? z(t.cutDirection) : t.cutDirection;
}
function sr(t) {
  if (t.stock.cutType !== "beam") return t;
  const { segment: e, cutInfo: n, stock: i, cutDirection: r } = t;
  if (e.phase !== 0) return t;
  const { cutAxis: s } = n;
  for (const o of e.cuts)
    o.dimension === ir(e) && (o[s + 1] = 0, o[s + 2] = i[r]);
  return t;
}
function or(t) {
  if (t.stock.cutType !== "beam") return t;
  const { segment: e, cutInfo: n, stock: i, cutDirection: r } = t;
  if (e.phase !== 1) return t;
  const { cutAxis: s } = n;
  for (const o of e.cuts)
    e.hasHeadCut ? o.dimension === z(e.cutDirection) && (o[Rt(s) + 2] = i[z(r)]) : o.dimension === e.cutDirection && (o[s + 2] = i[r]);
}
function rr(t) {
  const { segment: e, stock: n, cutDirection: i, cutInfo: r, cutPosition: s, allStockShapes: o, currentStripParent: a, isHeadCut: c } = t, { cutAxis: l, positionAxis: f } = r;
  c && Bo(a, i);
  const { cut: d, farSideSegmentSize: u, previousCutPosition: h, rejectedByCollision: p, collisionShapes: S } = qe({
    parentSegment: e,
    stock: n,
    cutDirection: i,
    cutAxis: l,
    positionAxis: f,
    position: s,
    allStockShapes: e.phase === 0 ? o : [],
    headCut: t.isHeadCut
  });
  d && t.final && B("cuts", `MADE CUT ${d.x1}|${d.x2}|${d.y1}|${d.y2} ${d.isHead ? "HEAD" : "NORM"}`);
  const y = p ? t.previousCutPosition : h;
  return t.with({
    cut: d,
    farSideSegmentSize: u,
    previousCutPosition: y,
    rejectedByCollision: p || !1,
    collisionShapes: S || []
  });
}
function ni(t) {
  if (t.stock.cutType !== "beam") return t;
  const { cut: e, cutInfo: n, halfBladeWidth: i, currentStripParent: r } = t;
  if (!e) return t;
  const { cutAxis: s, cutDimension: o, positionAxis: a, positionDimension: c } = n;
  return R.equalTo(
    e[s + 2] - e[s + 1],
    r[o]
  ) && R.equalTo(
    e[a + 1],
    r[a] + r[c] + i
  ) && (e.guillotineState.partProduced = r.parentId), t;
}
function ii(t) {
  const {
    segment: e,
    stock: n,
    cutInfo: i,
    cutPosition: r,
    mergedCut: s,
    currentStripParent: o,
    previousCutPosition: a,
    cut: c,
    isEdgeOfSegment: l,
    halfBladeWidth: f,
    bladeWidth: d,
    allStockShapes: u,
    final: h,
    cutDirection: p,
    currentStripIndex: S
  } = t, { cutAxis: y, positionAxis: x, cutDimension: g, positionDimension: m } = i, w = S === 0 && R.greaterThan(o[x], e[x]);
  if (n?.id === "1.0" && console.log(
    `[createNearSegment] enter parent=${e.id} stripIdx=${S} shape=${o?.parentId} cut=${c ? "yes" : "no"} isEdgeOfSegment=${l} isFirstShapeWithGap=${w} willSkip=${!c && !l && !w}`
  ), !c && !l && !w) return t;
  const I = {
    parent: e,
    stock: n,
    merged: s,
    type: "near",
    hasHeadCut: e.hasHeadCut,
    shapes: []
  }, b = w && !c ? o[x] : r, $ = a != null && a >= e[x], P = $ ? a + f : e[x], T = b - ($ ? a + d : f + e[x]);
  B("cuts", `[createNearSegment] segment[${e.id}] at (${e.x},${e.y}), posAxis=${x}, cutAxis=${y}, previousCutPosition=${a}, hasPreviousCut=${$}, nearSegmentPosition=${P}`);
  const L = {
    [y]: e[y],
    [g]: e[g],
    [x]: P,
    [m]: T,
    cutDirection: z(p)
  };
  B("cuts", `[createNearSegment] dimensionProps: x=${L.x ?? "N/A"}, y=${L.y ?? "N/A"}, l=${L.l ?? "N/A"}, w=${L.w ?? "N/A"}`);
  const v = Ye.call(
    this,
    { ...I, ...L },
    !1
    // Don't reject if identical - we'll filter shapes ourselves
  );
  if (!v) return t;
  if (B("cuts", `[createNearSegment] AFTER creation: segment ${e.id} at (${v.x},${v.y}) ${v.l}x${v.w}`), v.shapes = e.shapes.filter((O) => R.greaterThanOrEqualTo(O.x, v.x) && R.lessThanOrEqualTo(O.x + O.l, v.x + v.l) && R.greaterThanOrEqualTo(O.y, v.y) && R.lessThanOrEqualTo(O.y + O.w, v.y + v.w)), B("cuts", `[createNearSegment] nearSideSegment.shapes.length = ${v.shapes.length}`), v.shapes.length > 0) {
    const O = R.equalTo(v.l, o.l) && R.equalTo(v.w, o.w);
    if (B("cuts", `[createNearSegment] nearSegment: ${v.l}x${v.w}, shape: ${o.l}x${o.w}, identical: ${O}, mergedCut: ${s}`), s || !O) {
      B("cuts", `CUTTING NEAR SIDE SEGMENT [${v.id}] DIR ${v?.cutDirection?.toUpperCase()}`), B("cuts", `[createNearSegment] CALLING makeCuts recursively with segment ${v.l}x${v.w}, segment.shapes.length=${v.shapes?.length}, final=${h}`);
      const q = Qt.call(
        this,
        {
          segment: v,
          stock: n,
          cutDirection: v.cutDirection,
          previousCutPosition: a,
          allStockShapes: u,
          final: h,
          headCutCount: t.headCutCount
        }
      );
      B("cuts", `[createNearSegment] RETURNED from makeCuts, childState=${q}`), t = t.with({ headCutCount: q?.headCutCount || t.headCutCount });
    }
  }
  return t.with({ nearSideSegment: v });
}
function ar(t) {
  const {
    segment: e,
    stock: n,
    cutInfo: i,
    cutPosition: r,
    farSideSegmentSize: s,
    halfBladeWidth: o,
    currentStripIndex: a,
    stripParentShapes: c,
    isHeadCut: l,
    allStockShapes: f,
    final: d
  } = t, { cutAxis: u, positionAxis: h, cutDimension: p, positionDimension: S } = i, y = {
    parent: e,
    stock: n,
    offcut: l ? !1 : a === c.length - 1,
    type: "far",
    hasHeadCut: !1,
    shapes: [],
    cutDirection: e.cutDirection
    //[] test
  }, x = {
    [u]: e[u],
    [p]: e[p],
    [h]: r + o,
    [S]: s
  };
  B("cuts", `Creating FAR segment: cutAxis=${u}, cutDim=${p}, posAxis=${h}, posDim=${S}`), B("cuts", `FAR segment props: ${u}=${e[u]}, ${p}=${e[p]}, ${h}=${r + o}, ${S}=${s}`), B("cuts", `FAR segment calculation: cutPosition=${r}, halfBladeWidth=${o}, result=${r + o}`);
  const g = Ye.call(this, { ...y, ...x });
  if (!g) return t;
  if (n?.id === "1.0" && (console.log(
    `[createFarSide] stock=${n.id} parent=${e.id} -> far=${g.id} box=(${g.x},${g.y} ${g.l}x${g.w}) shapes=${g.shapes?.length ?? 0} isHeadCut=${l} willRecurse=${l === !0} stripIdx=${a}/${c.length - 1}`
  ), !l && (g.shapes?.length ?? 0) > 0)) {
    const m = g.shapes.map((w) => `${w.parentId}@(${w.x},${w.y} ${w.l}x${w.w})`).join(", ");
    console.log(`[createFarSide] *** STRANDED SHAPES *** in far=${g.id}: ${m}`);
  }
  if (B("cuts", `FAR segment created [${g.id}] at (${g.x},${g.y}) ${g.l}x${g.w}`), B("cuts", `  Parent has ${e.shapes.length} shapes, far segment has ${g.shapes.length} shapes`), B("cuts", `  Cut was at position ${r} (${h}=${r})`), B("cuts", `  Expected offcut dimensions based on stock (1200x1200): should be ${e.l - r}x${e.w} or ${e.l}x${e.w - r}`), l) {
    g.shapes = e.shapes.filter((w) => {
      const I = w[Rt(u)] + w[z(p)];
      return R.greaterThan(I, r);
    }), B("cuts", `HEAD CUT: Making cuts in far segment [${g.id}] with ${g.shapes.length} shapes`);
    const m = Qt.call(
      this,
      {
        segment: g,
        stock: n,
        cutDirection: g.cutDirection,
        previousCutPosition: null,
        // No previous cut in this new segment yet
        allStockShapes: f,
        final: d,
        headCutCount: t.headCutCount
      }
    );
    t = t.with({ headCutCount: m?.headCutCount || t.headCutCount });
  }
  return t.with({ farSideSegment: g });
}
function os(t) {
  if (!this?.config?.guillotine?.allowHeadCuts || !t?.saw?.guillotineOptions?.headCuts) return !1;
  if (ti(t)) return !0;
  if (t.type === "far" || t.type === "root") {
    if (!ts(t)) return !1;
    if (t.parent.hasHeadCut || ti(t.parent)) return !0;
  }
  return !1;
}
function lr(t) {
  const { segment: e, currentStripParent: n, forceNoHeadCut: i } = t;
  if (i) return t.with({ isHeadCut: !1 });
  let r = !1;
  return os.call(this, e) ? (r = es.call(this, e.saw, n, e, t.cutDirection), t.with({ isHeadCut: r })) : t.with({ isHeadCut: !1 });
}
function qe({
  parentSegment: t,
  stock: e,
  cutDirection: n,
  cutAxis: i,
  positionAxis: r,
  position: s,
  allStockShapes: o = [],
  headCut: a = !1,
  ptxDummyCut: c = !1,
  skipCollisionCheck: l = !1
}) {
  const f = e.halfBladeWidth, d = vi(r), u = zs.parse({
    stock: e,
    isGuillotine: !0,
    isHead: a,
    ptxData: {
      isDummy: c
    },
    //NOTE: this has changed from cutAxis to positionAxis
    x1: r === "x" ? s : t.x,
    x2: r === "x" ? s : t.x + t.l,
    y1: r === "y" ? s : t.y,
    y2: r === "y" ? s : t.y + t.w
  });
  let h = new Ie(u);
  if (!c && t.type === "near" && t.parent.hasHeadCut && (h.ptxData.headCutStrip = !0), !l) {
    const P = o.length ? o : t.shapes, T = yn(
      h,
      e,
      P,
      !0
    );
    if (T?.length)
      return e?.id === "1.0" && console.log(
        `[createCut] *** REJECTED by COLLISION *** stock=${e.id} parent=${t.id} dir=${n} pos=${s} collisions=${T.length}`
      ), {
        cut: null,
        farSideSegmentSize: null,
        previousCutPosition: null,
        rejectedByCollision: !0,
        collisionShapes: T
      };
  }
  const p = t.cuts.filter((P) => P.dimension === n && R.equalTo(P[i + 1], h[i + 1]));
  if (s && p.some((P) => R.equalTo(P[r + 1], s)))
    return e?.id === "1.0" && console.log(
      `[createCut] *** REJECTED by SEGMENT DUPLICATE *** stock=${e.id} parent=${t.id} dir=${n} pos=${s}`
    ), {
      cut: null,
      farSideSegmentSize: null,
      previousCutPosition: null
    };
  let S = t.parent;
  for (; S; ) {
    if (S.cuts.some((T) => T.dimension === n && R.equalTo(T[r + 1], s)))
      return e?.id === "1.0" && console.log(
        `[createCut] *** REJECTED by ANCESTOR DUPLICATE *** stock=${e.id} parent=${t.id} ancestor=${S.id} dir=${n} pos=${s}`
      ), {
        cut: null,
        farSideSegmentSize: null,
        previousCutPosition: null
      };
    S = S.parent;
  }
  const y = p.length ? p[p.length - 1] : null;
  let x = y ? y[r + 1] : null, g = t[r] + t[d] - (s + f);
  g < 0 && (g = 0);
  const m = R.lessThanOrEqualTo(
    s - f,
    t[r] + t[d]
  ), w = s - f, I = t[r] + t[d], b = R.greaterThanOrEqualTo(w, I), $ = e?.id === "1.0";
  return $ && console.log(
    `[createCut] stock=${e.id} parent=${t.id} dir=${t.cutDirection} cut.dim=${h.dimension} pos=${s} half=${f} shapeEdge=${w} segEdge=${I} within=${m} atEdge=${b} farSize=${g} parentBox=(${t.x},${t.y} ${t.l}x${t.w})`
  ), h.beamTrimL1 || h.beamTrimW1 || e.cutType === "beam" && R.lessThanOrEqualTo(
    s - f,
    t[r] + t[d]
  ) || h.ptxData.isDummy || m && !b ? (h.ptxData.order = Z.ptxCuts++, t.cuts.push(h)) : h.stock?.saw?.stockType === "roll" ? t.cuts.push(h) : ($ && console.log(
    `[createCut] *** DROPPED CUT *** stock=${e.id} parent=${t.id} dir=${t.cutDirection} cut.dim=${h.dimension} pos=${s} shapeEdge=${w} segEdge=${I} within=${m} atEdge=${b} farSize=${g} coords=(${h.x1},${h.y1})-(${h.x2},${h.y2})`
  ), h = null, g = null, x = null), {
    cut: h,
    farSideSegmentSize: g,
    previousCutPosition: x
  };
}
function cr({
  x: t,
  y: e,
  l: n,
  w: i,
  type: r,
  parent: s,
  rejectIdentical: o
}) {
  return o && R.equalTo(t, s.x) && R.equalTo(e, s.y) && R.equalTo(i, s.w) && R.equalTo(n, s.l) ? "IDENTICAL_TO_PARENT" : n <= 0 || i <= 0 ? "INVALID_DIMENSIONS" : s && !s.autoId ? (console.error("[ERROR] Parent segment has no autoId!"), console.error(`Parent details: type=${s.type}, x=${s.x}, y=${s.y}, l=${s.l}, w=${s.w}`), "MISSING_PARENT_ID") : r === "root" && s ? (console.error("[ERROR] Attempting to create root segment with a parent!"), console.error(`Parent autoId: ${s.autoId}, Parent type: ${s.type}`), "ROOT_WITH_PARENT") : (r === "root" && s?.type !== void 0 && s.type !== "root" && console.error(`[ERROR] Creating root segment with non-root parent of type: ${s.type}`), null);
}
function Ye({
  x: t,
  y: e,
  l: n,
  w: i,
  type: r,
  parent: s,
  stock: o,
  offcut: a = !1,
  merged: c = !1,
  cutDirection: l = null
}, f = !0) {
  if (cr({ x: t, y: e, l: n, w: i, type: r, parent: s, rejectIdentical: f })) return;
  let u;
  Z.segments++;
  let h = s.phase + 1;
  s.hasHeadCut && (s.isInitial || (s.phase = 0), h = s.phase + 1);
  try {
    const y = Z.segments.toString();
    if (u = new Pt({
      x: t,
      y: e,
      l: n,
      w: i,
      t: typeof o.t == "string" ? parseFloat(o.t) : o.t,
      id: y,
      phase: h,
      parent: s,
      stock: o,
      offcut: a,
      merged: c,
      type: r,
      grain: o.grain,
      material: o.material,
      saw: o.saw,
      cutDirection: l || z(s.cutDirection)
    }), s && s.autoId === u.autoId)
      throw console.error(`[ERROR] Segment created with itself as parent! autoId: ${u.id}`), new Error("Segment cannot be its own parent");
  } catch (y) {
    B("info", `issue creating segment ${y.message}`);
    return;
  }
  const p = Xe(u), S = s.shapes.filter((y) => y.added ? R.greaterThanOrEqualTo(y.x, u.x) && R.lessThanOrEqualTo(y.x + y.l, u.x + u.l) && R.greaterThanOrEqualTo(y.y, u.y) && R.lessThanOrEqualTo(y.y + y.w, u.y + u.w) : y.willItFit(u, null, p));
  return u.shapes = S, u;
}
function ur(t, e = !1, n) {
  e && B("cuts", `------------------- ANALYSE SEGMENTS ${t.id} -------------------`);
  const i = [], r = [], s = [];
  let o = 0, a = 0;
  const c = /* @__PURE__ */ new Set(), l = (f, d = 0) => {
    if (!f) return d;
    if (c.has(f.autoId))
      return console.error(`[CIRCULAR REFERENCE DETECTED] Segment ${f.id} is already in the traversal path!`), console.error(`Traversal path: ${Array.from(c).join(" -> ")} -> ${f.id}`), console.error(`Segment details: autoId=${f.id}, parent=${f.parent?.id}, children=[${f.children?.map((h) => h.autoId).join(", ")}]`), d;
    c.add(f.autoId);
    let u = d;
    i.push(f), (f.offcut === !0 || !f.shapes?.length) && s.push(f);
    for (let h = 0; h < f.cuts.length; h++) {
      const p = f.cuts[h];
      if (p) {
        if (p.guillotineState.phase = f.phase, p.isHead ? (p.ptxData.function = 0, o++) : h > 0 && r[h - 1].isHead ? p.dimension === "l" ? p.ptxData.function = 1 : p.dimension === "w" && (p.ptxData.function = 2) : (p.ptxData.function = p.guillotineState.phase + 1, p.ptxData.headCutStrip && p.ptxData.function--), p.isTrim && a++, e)
          if (p.isHead) {
            let S = 0;
            Xo(f, () => S++), u = S, B("cuts", `[${f.id}] reset cut order to ${u}`);
          } else h > 0 && f.cuts[h - 1].isHead && u++;
        p.guillotineState.order = u, p.guillotineState.segmentCutOrder = h, p.guillotineState.parentSegmentID = f?.autoId || "root", e && fr(p, f), r.push(p), e && B("cuts", `[${f.id}] {${u}} ${p.x1}|${p.x2}|${p.y1}|${p.y2}`), u++;
      }
    }
    if (f.children && f.children.length > 0) {
      const h = f.children.filter((p) => p.autoId === f.autoId ? (console.error(`[SELF-REFERENCE FOUND] Removing segment ${f.id} from its own children array`), console.error(`Segment type: ${f.type}, Phase: ${f.phase}`), console.error(`Number of children: ${f.children.length}`), console.error(`Children autoIds: ${f.children.map((S) => S.autoId).join(", ")}`), !1) : !0);
      h.length !== f.children.length && (f.children = h);
      for (const p of f.children)
        if (p && nt(p)) {
          if (p.type === "firstShape")
            continue;
          if (p.autoId === f.autoId) {
            console.error(`[CRITICAL SELF-REFERENCE] Segment ${f.id} still has itself as a child!`), console.error("This should have been filtered. Skipping traversal.");
            continue;
          }
          if (c.has(p.autoId)) {
            console.error(`[CIRCULAR REFERENCE] Child segment ${p.autoId} is already in traversal path`), console.error(`Parent: ${f.id}, Path: ${Array.from(c).join(" -> ")}`);
            continue;
          }
          if (f.hasHeadCut) {
            const S = n + r.filter((y) => !y.isHead && !y.ptxData.isDummy).length;
            u = l(p, S);
          } else
            u = l(p, u);
        }
    }
    return c.delete(f.autoId), u;
  };
  return l(t), e && (B("cuts", `Segments processed: ${i.length}`), B("cuts", `Cuts processed: ${r.length}`), B("cuts", `Trim cuts found: ${a}`), B("cuts", `Head cuts found: ${o}/${n}`), B("cuts", `Offcuts identified: ${s.length}`), B("cuts", `ROOT segment [${t.id}] has ${t.children?.length || 0} children`), B("cuts", "------------------- END ANALYSE SEGMENTS -------------------")), [t, r, s];
}
function fr(t, e) {
  const n = {
    top: null,
    bottom: null,
    left: null,
    right: null
  }, i = t.stock.halfBladeWidth;
  if (t.beamTrimL1 || t.beamTrimW1)
    t.beamTrimL1 ? n.left = t.stock.trim.l1 : t.beamTrimW1 && (n.bottom = t.stock.trim.w1);
  else {
    const r = e?.children, s = t.stock.cutType === "beam" && e.cuts[0].isTrim ? t.guillotineState.segmentCutOrder - 1 : t.guillotineState.segmentCutOrder;
    if (r?.length) {
      const o = r.filter((a) => a.type === "near")[s];
      o && (t.dimension === "l" ? (n.bottom = t.y1 - o.y - i, n.top = e.y + e.w - (t.y1 + i)) : t.dimension === "w" && (n.left = t.x1 - o.x - i, n.right = e.x + e.l - (t.x1 + i)));
    }
  }
  t.distances = n;
}
function hr(t, e) {
  return t?.length && t.forEach((n) => {
    e = e.filter((i) => !(i.id === n.id || F(i) && i.shapes.find((r) => r.id === n.id)));
  }), e;
}
const mt = {
  custom: null,
  efficiency: {
    standard() {
      return {
        compression: 10,
        exactFit: 1,
        similarDimensions: 1,
        cohesion: 1,
        edge: 1,
        alignment: 0.3,
        area: 0.1,
        fill: 0
      };
    }
  },
  guillotine: {
    standard() {
      return {
        exactStripFill: 1,
        compression: 1,
        aspectRatio: 1,
        cohesion: 0.7,
        fill: 0.4,
        sameStripBonus: 0.2,
        similarDimensions: 0.3,
        fenceConsistency: 0
      };
    },
    time() {
      const t = this.standard();
      return t.similarDimensions = 1, t.fenceConsistency = 1, t;
    },
    stock() {
      return this.standard();
    },
    beam() {
      const t = this.standard();
      return t.similarDimensions = 0, t;
    }
  },
  roll: {
    guillotine() {
      return {
        // sameStripBonus: 0,
        exactStripFill: 5,
        //bonus for exactly filling a row
        similarDimensions: 5,
        compression: 1,
        //row compression
        cohesion: 1,
        fill: 1,
        fenceConsistency: 0
        //reward consistent dimensions between strips (used for time mode)
      };
    },
    efficiency() {
      return {
        compression: 10,
        edge: 0.5,
        exactFit: 0.5,
        similarDimensions: 0.5,
        cohesion: 1,
        fill: 0.3,
        area: 0.3,
        alignment: 0.2
      };
    }
  }
};
function Tt(t, e) {
  if (!e) return t;
  const n = e.weighting;
  if (!n) return t;
  for (const i in n)
    n[i] !== null && (t[i] = t[i] * n[i]);
  return t;
}
function vn(t, e, n) {
  if (this?.weighting?.custom)
    return Tt(this.weighting.custom, n);
  switch (t.cutType) {
    case "efficiency":
      if (e?.saw?.stockType === "roll")
        return Tt(mt.roll.efficiency(), n);
      break;
    case "beam":
      return Tt(mt.guillotine.beam(), n);
    case "guillotine": {
      if (e?.saw?.stockType === "roll")
        return Tt(mt.roll.guillotine(), n);
      switch (e.saw.guillotineOptions.strategy) {
        case "time":
          return Tt(
            mt.guillotine.time(),
            n
          );
        case "efficiency":
          return Tt(
            mt.guillotine.stock(),
            n
          );
        default:
          return Tt(
            mt.guillotine.stock(),
            n
          );
      }
    }
  }
  return Tt(mt[t.cutType].standard(), n);
}
class dr {
  CLO;
  selectionMethod;
  bestResult;
  shapeList;
  uniqueShapes;
  container;
  benchmark;
  firstShape;
  firstShapeRotation;
  stripShapes;
  iteration;
  //stripShapeIteration
  weightingKeys;
  weighting;
  population;
  progress;
  mutation;
  options;
  abort;
  evolutionVisData;
  constructor(e, n, i) {
    if (typeof n != "object")
      throw new Error(`stock must be a single object in Ecosystem ${typeof n}`);
    this.CLO = e, this.abort = !1, this.mutation = {
      range: 2,
      min: 0,
      max: 10,
      rate: 0.1
    }, this.weightingKeys = {
      efficiency: [
        "compression",
        "alignment",
        "edge",
        "exactFit",
        "fill",
        "area",
        "side",
        "similarDimensions"
      ],
      guillotine: [
        "compression",
        "exactStripFill",
        "fill",
        "similarDimensions",
        "cutDimension"
      ],
      roll: [
        "exactStripFill",
        "cutDimension",
        "secondaryDimension"
      ]
    }, this.container = n, this.shapeList = i, this.CLO.resetShapes(i), this.selectionMethod = e.successMetric, this.firstShape = n.algoBenchmark?.firstShape, this.firstShapeRotation = n.algoBenchmark?.firstShapeRotation, this.benchmark = {
      score: n.algoBenchmark.score[this.selectionMethod],
      weighting: vn.call(
        this.CLO,
        n,
        et(n) ? n : n.getStock
      )
    }, this.weighting = this.weightingKeys[this.container.cutType], n?.saw?.stockType === "roll" && (this.selectionMethod = "rollLength", this.weighting = this.weightingKeys.roll), this.uniqueShapes = Dt(i, !1), this.population = [], this.options = {
      populationSize: 6,
      steps: 6,
      benchmarkCutoff: !0,
      recentScoreCutOff: 3
    }, this.progress = {
      total: this.options.steps * this.options.populationSize,
      current: 0
    }, this.evolutionVisData = [];
  }
  createPopulation() {
    this.population.length = 0;
    for (let e = 0; e < this.options.populationSize - 1; e++)
      this.population.push(new si(this, e));
    this.population.push(new si(
      this,
      this.options.populationSize,
      this.benchmark.weighting
    ));
  }
  getBestIndividual() {
    return this.population.reduce((n, i) => {
      const r = "bestScore";
      return n?.[r]?.[this.selectionMethod] > i?.[r]?.[this.selectionMethod] ? n : i;
    });
  }
  recordResult(e, n) {
    if (n)
      if (!this.bestResult)
        this.bestResult = e, this.bestResult.weighting = structuredClone(n.weighting), F(this.bestResult.firstShape) && this.bestResult.firstShape.shapes.forEach((i) => e.shapes.push(i.compress()));
      else {
        if (e.score.efficiency <= this.bestResult.score.efficiency)
          return;
        this.bestResult = e, this.bestResult.weighting = structuredClone(n.weighting), F(this.bestResult.firstShape) && this.bestResult.firstShape.shapes.forEach((i) => e.shapes.push(i.compress()));
      }
  }
  async run() {
    this.CLO.runningEvo = !0, B("swarm", `Swarm starting - population: ${this.options.populationSize}, steps: ${this.options.steps}`), this.CLO.resetShapes(this.shapeList), this.createPopulation();
    async function e() {
      for (let n = 0; n < this.options.steps; n++) {
        for (const r of this.population)
          await r.assess();
        const i = this.getBestIndividual();
        if (this.population.every((r) => r?.bestScore?.[this.selectionMethod] === i?.bestScore?.[this.selectionMethod]))
          return;
        for (const r of this.population)
          try {
            r.alive && r.updatePosition(i);
          } catch (s) {
            console.log(s);
          }
      }
    }
    return await e.call(this), this.CLO.runningEvo = !1, this.bestResult.type = "evo", B("swarm", `Swarm complete - best efficiency: ${this.bestResult?.score?.efficiency?.toFixed(3)}`), {
      result: this.bestResult,
      evolutionVisData: this.evolutionVisData
    };
  }
}
class si {
  swarm;
  id;
  alive;
  weighting;
  score;
  //includes position information
  previousScore;
  bestScore;
  //includes position information
  speed;
  socialInfluence;
  improving;
  following;
  //which individual is this individual following
  firstShape;
  firstShapeRotation;
  stripShapes;
  iteration;
  stockID;
  type;
  cutType;
  shapes;
  recentScores;
  constructor(e, n, i = null) {
    this.swarm = e, this.id = n, this.alive = !0, this.weighting = i, this.score = null, this.bestScore = null, this.previousScore = null, this.speed = 1, this.socialInfluence = 0.8, this.improving = !1, this.following = null, this.firstShape = this.swarm.firstShape, this.firstShapeRotation = this.swarm.firstShapeRotation, this.stripShapes = this.swarm.stripShapes, this.iteration = this.swarm.iteration, this.type = "evo", this.cutType = this.swarm.container.saw.cutType, this.stockID = this.swarm.container.id, this.recentScores = [], this.weighting || this.createRandomWeighting();
  }
  //create weighting
  createRandomWeighting() {
    const e = mt.efficiency.standard();
    this.weighting = {};
    for (const [n, i] of Object.entries(e)) {
      const r = i;
      if (this.swarm?.weighting && this.swarm.weighting.indexOf(n) > -1) {
        let s = r - this.swarm.mutation.range, o = r + this.swarm.mutation.range;
        s < this.swarm.mutation.min && (s = this.swarm.mutation.min), o > this.swarm.mutation.max && (o = this.swarm.mutation.max), this.weighting[n] = je(s, o);
      } else this.weighting[n] = e[n];
    }
  }
  //assess fitness and generate a score
  async assess() {
    if (this.swarm.progress.current++, !!this.alive) {
      switch (this.previousScore = this.score, this.previousScore && (this.previousScore.weighting = this.weighting), this.swarm.container.cutType) {
        case "efficiency":
          {
            const e = await Bt.runSpecificStrategy.call(
              this.swarm.CLO,
              {
                shapes: this.swarm.shapeList,
                container: this.swarm.container,
                firstShape: this.swarm.firstShape,
                firstShapeRotation: this.swarm.firstShapeRotation,
                weighting: this.weighting
              }
            );
            this.score = e.score, this.swarm.recordResult(e, this);
          }
          break;
      }
      if (this.score) {
        const e = Object.entries(this.weighting).map(([n, i]) => `${n}: ${typeof i == "number" ? i.toFixed(2) : i}`).join(", ");
        B("swarm", `Individual ${this.id} - efficiency: ${this.score.efficiency?.toFixed(3)} | weighting: { ${e} }`);
      }
      if (this.swarm.CLO.resetShapes(this.swarm.shapeList), !this.score || !this.score?.[this.swarm.selectionMethod])
        return this.kill(), !1;
      if (this.recentScores.push(this.score[this.swarm.selectionMethod]), this.swarm.options.recentScoreCutOff > 0) {
        this.recentScores = this.recentScores.slice(Math.max(
          this.recentScores.length - this.swarm.options.recentScoreCutOff,
          0
        ));
        const e = this.swarm.getBestIndividual();
        e.bestScore && this.recentScores.length === this.swarm.options.recentScoreCutOff && this.recentScores.every((n) => n === e?.bestScore?.[this.swarm.selectionMethod]) && this.kill();
      }
      if (this.improving = !1, this.bestScore === null && (this.bestScore = this.score, this.bestScore.weighting = this.weighting), this.score[this.swarm.selectionMethod] > this.bestScore[this.swarm.selectionMethod] && (this.improving = !0, this.bestScore = this.score, this.bestScore.weighting = this.weighting), this.isWinner()) return !0;
    }
  }
  //update the velocity based on the best individual and own experience
  updatePosition(e) {
    this.speed = 1, this.socialInfluence = 0.5;
    const n = this.score[this.swarm.selectionMethod] === e.score[this.swarm.selectionMethod];
    n ? this.following = null : this.following && this.following.score[this.swarm.selectionMethod] !== e.score[this.swarm.selectionMethod] && (this.following = null), n ? (this.socialInfluence = 0.1, this.previousScore && (this.speed = this.improving ? -1 : 1)) : this.following || (this.following = e);
    for (const [i, r] of Object.entries(this.weighting)) {
      let s = 0;
      n ? this.previousScore ? s = this.previousScore.weighting[i] - r : s = this.swarm.benchmark.weighting[i] - r : s = this.following.bestScore.weighting[i] - r;
      let o = s * this.speed * this.socialInfluence;
      n ? o += je(-0.1, 0.1) : o += je(-0.05, 0.05), this.weighting[i] += o;
    }
  }
  //check if this individual is a winner
  isWinner() {
    if (!this.score || typeof this.score[this.swarm.selectionMethod] > "u")
      throw new Error("score is not defined");
    return this.swarm?.shapeList?.length ? this.swarm.shapeList?.length === 1 || this.swarm.container.cutType === "efficiency" && this.score.totalShapesPlaced === this.swarm.shapeList?.length ? !0 : this.swarm.options.benchmarkCutoff && this.score[this.swarm.selectionMethod] > this.swarm.benchmark ? (this.swarm.abort = !0, !0) : this.swarm.container.cutType === "efficiency" && !this.score.unplacedShapes : !1;
  }
  kill() {
    this.alive = !1;
  }
}
function ln(t) {
  return typeof t?.guillotineState?.myPhase == "number";
}
function re(t) {
  return t.type === "root" || t[Vt(t.stock.cutPreference)] === 0;
}
function cn(t, e) {
  return t?.guillotineState?.myPhase === e;
}
function pr(t) {
  const e = En(t);
  if (!e) return ri(t, 1);
  const i = St(e) === "l" ? "w" : "l", r = rs(t, e, i);
  ri(t, r);
}
function rs(t, e, n) {
  if (!t) return null;
  if (!e) return 1;
  const i = kn(e);
  return t[n] === e[n] ? i : i + 1;
}
function En(t) {
  return t?.guillotineState?.myStripParent || null;
}
function oi(t, e) {
  t?.guillotineState && (t.guillotineState.myStripParent = e);
}
function ri(t, e) {
  typeof e == "number" && t?.guillotineState && t.guillotineState.setPhase(e);
}
function kn(t) {
  return t?.guillotineState ? t.guillotineState.myPhase : null;
}
function St(t) {
  return t?.guillotineState ? t.guillotineState.myStripDirection : null;
}
function Me(t, e) {
  if (t?.guillotineState) {
    if (typeof t.guillotineState.setStripDirection != "function") {
      const n = t.guillotineState || {};
      t.guillotineState = new $e(n);
    }
    t.guillotineState.setStripDirection(e);
  }
}
function ai(t, e) {
  if (nt(t)) {
    gr(e);
    const n = e?.bestScore?.score;
    n && ["currentStripDirection", "myStripDirection", "keyStripDirection", "myPhase"].forEach((r) => {
      n[r] && (e.guillotineState[r] = n[r]);
    });
  }
}
function gr(t) {
  const e = t.bestScore;
  e?.myStripParent && oi(t, e.myStripParent), F(t) && t.shapes.forEach((n) => oi(n, En(n)));
}
function mr(t, e) {
  let n = null, i = e.x.get(t.x) || [];
  i = i.filter((a) => {
    const c = a.guillotineState.myStripParent;
    return c && !c.guillotineState?.firstShape ? an(t, c, "y") : !0;
  }), i.sort((a, c) => a.x - c.x);
  let r = e.y.get(t.y) || [];
  r = r.filter((a) => {
    const c = a.guillotineState.myStripParent;
    return c && !c.guillotineState?.firstShape ? an(t, c, "x") : !0;
  }), r.sort((a, c) => a.y - c.y);
  const s = i.length ? i[0] : null, o = r.length ? r[0] : null;
  return s && o ? n = s.placementOrder > o.placementOrder ? s : o : n = s || o, n;
}
function un(t, e) {
  t.x.has(e.x) ? t.x.get(e.x).push(e) : t.x.set(e.x, [e]), t.y.has(e.y) ? t.y.get(e.y).push(e) : t.y.set(e.y, [e]);
}
function yr(t, e) {
  const n = t.x.get(e.x) ?? [], i = n.indexOf(e);
  i !== -1 && (n.splice(i, 1), n.length === 0 && t.x.delete(e.x));
  const r = t.y.get(e.y) ?? [], s = r.indexOf(e);
  s !== -1 && (r.splice(s, 1), r.length === 0 && t.y.delete(e.y));
}
function xr(t, e = !0) {
  const n = [], i = /* @__PURE__ */ new Set();
  for (const r of t.shapes)
    if (F(r)) {
      const s = r.type === "position", o = ct(r), a = r.type === "user";
      if (s || a || o && e) {
        if (!i.has(r.autoId)) {
          n.push(r), i.add(r.autoId);
          for (const l of r.shapes || [])
            i.add(l.autoId);
        }
      } else if (r.added && t.stock) {
        r.placeMyShapes(t.stock);
        for (const l of r.shapes)
          i.has(l.autoId) || (l.group.addedAsGroup = r, n.push(l), i.add(l.autoId));
      }
    } else
      i.has(r.autoId) || (n.push(r), i.add(r.autoId));
  return t.shapes = n, N([
    () => k(ft(t.shapes)).to.be.false,
    () => Ei(t.shapes, "removeGroupsFromSegment")
  ]), t;
}
function as(t, e) {
  if (t.children && Array.isArray(t.children)) {
    if (e(t) === !1) return;
    for (const n of t.children)
      as(n, e);
  }
}
function Sr(t, e) {
  const n = Dt(t, !1), i = /* @__PURE__ */ new Map();
  for (const r of t) {
    let s = i.get(r.parentId);
    s || (s = [], i.set(r.parentId, s)), s.push(r);
  }
  for (const r of e) {
    const s = n.filter((l) => l.stockLock.includes(r.parentId));
    if (!s.length) continue;
    const o = s.map((l) => l.area), a = o.reduce((l, f) => l + f, 0) / s.length;
    if (!(R.calculateCoefficientOfVariation(o) < this.config.priority.variationThreshold))
      for (const l of s) {
        l.priority || (l.priority = {});
        const f = wr(l, r, a);
        l.priority[r.parentId] = f;
        const d = i.get(l.parentId);
        if (d)
          for (const u of d)
            u.id !== l.id && (u.priority || (u.priority = {}), u.priority[r.parentId] = f);
      }
  }
}
function wr(t, e, n) {
  if (t.isExactFit(e) || t.area >= e.area * 0.9 || t.longSide >= e.longSide * 0.9)
    return 1;
  const i = t.area, r = e.area, s = i / r;
  return i > n ? s : 0;
}
function br(t, e) {
  return t.reduce((n, i) => {
    const r = i.getPriority(e), s = n.getPriority(e);
    return r > s ? i : n;
  });
}
function Ir(t, e, n = null) {
  let i;
  if (e?.length) {
    if (!e.length) return 1;
    const r = e.reduce((s, o) => s.area > o.area ? s : o);
    i = t.area / r.area;
  } else n && (i = t.area / n.area);
  if (i > 1) return 1;
  if (!i)
    throw new Error("no area score found");
  return i;
}
function ls(t, e, n = "y") {
  if (!t || !e || t[n] === void 0 || !e.area || e.area === 0) return 0;
  const i = Rt(n), r = i === "y" ? "w" : "l", s = e[n] ?? 0, o = e[i] ?? 0, l = (t[n] - s) * e[r] / e.area, u = (t[i] - o) / e[r] * e.aspect * 0.01;
  return 1 - (l + u);
}
function cs(t, e, n = "y") {
  if (!t || !e) return 0;
  "grain" in e && e.grain === "w" && (n = Rt(n));
  const i = n === "y" ? "w" : "l";
  return (t[n] + t[i]) / e[i];
}
function $r(t, e, n) {
  const i = t.getMinSpacing(n.saw);
  return [
    // 0 left to left
    t.x === e.x,
    // 1 left to right
    t.x === e.x + e.l + i,
    // 2 bottom to bottom
    t.y === e.y,
    // 3 bottom to top
    t.y === e.y + e.w + i,
    // 4 right to left
    t.x + t.l === e.x - i,
    // 5 right to right
    t.x + t.l === e.x + e.l,
    // 6 top to bottom
    t.y + t.w === e.y - i,
    // 7 top to top
    t.y + t.w === e.y + e.w
  ];
}
function Cr(t, e, n) {
  let i = 0, r = 0;
  if (!t || !e || !n)
    return {
      possibleAlignments: i,
      positiveAlignments: r
    };
  if (t.autoId === e.autoId)
    return {
      possibleAlignments: 0,
      positiveAlignments: 0
    };
  const s = (o, a) => {
    const c = $r(o, a, n);
    i += c.length, r += c.reduce(
      (l, f) => f ? l + 1 : l,
      0
    );
  };
  return F(t) ? t.shapes.forEach((o) => {
    F(e) ? e.shapes.forEach((a) => {
      s(o, a);
    }) : s(o, e);
  }) : F(e) ? e.shapes.forEach((o) => {
    s(t, o);
  }) : s(t, e), { positiveAlignments: r, possibleAlignments: i };
}
function Pr(t, e, n) {
  if (!t || !e || !n)
    return [!1, !1, !1, !1];
  if (t.autoId === e.autoId)
    return [!1, !1, !1, !1];
  const i = t.getMinSpacing(n.saw), r = t.x, s = t.x + t.l, o = t.y + t.w, a = t.y, c = e.x, l = e.x + e.l, f = e.y + e.w, d = e.y, u = () => r === l + i && (a >= d && a < f || o <= f && o > d), h = () => s + i === c && (a >= d && a < f || o <= f && o > d), p = () => a === f + i && (r >= c && r < l || s <= l && s > c), S = () => a + i === d && (r >= c && r < l || s <= l && s > c);
  return [
    u(),
    h(),
    p(),
    S()
  ];
}
function Tr(t, e) {
  return t.l === e.l && t.x === e.x;
}
function vr(t, e) {
  return t.w === e.w && t.y === e.y;
}
function us(t, e, n, i = {}) {
  if (t.autoId === e.autoId)
    return {
      contactResult: [],
      cohesion: 0,
      alignment: null,
      similarDimensions: 0,
      type: null,
      neighbour: e,
      neighbours: 0
    };
  const {
    contact: r = !0,
    alignment: s = !0,
    similarDimensions: o = !0,
    cohesion: a = !0
  } = i;
  let c = [];
  r && (c = Pr(t, e, n));
  const l = c.filter(Boolean).length;
  if (l > 1)
    throw new Error("number of neighbours should not be greater than one for a single test shape");
  if (l === 0)
    return {
      contactResult: c,
      cohesion: 0,
      alignment: null,
      similarDimensions: 0,
      type: null,
      neighbour: e,
      neighbours: l
    };
  const f = ["lr", "rl", "bt", "tb"], d = c.findIndex(Boolean), u = f[d];
  if (!u) throw new Error("no contact type found");
  let h = null, p = null, S = 0;
  if (a && u && (h = kr(t, e, u)), s && (p = Cr(t, e, n)), o) {
    const y = u === "rl" || u === "lr", x = u === "tb" || u === "bt", g = vr(t, e), m = Tr(t, e);
    (y && g || x && m) && (S = m && g ? 1 : 0.5);
  }
  return {
    contactResult: c,
    cohesion: h,
    alignment: p,
    similarDimensions: S,
    type: u,
    neighbour: e,
    neighbours: l
  };
}
function Er(t, e) {
  if (!e)
    throw new Error(`edge - no stock defined for shape ${t.id}`);
  const n = e.bladeWidth, i = t.w / e.w, r = t.l / e.l;
  let s = 0, o = e.l, a = 0, c = e.w;
  return !e.trimmed && e.hasTrim && (s = e.trim.w1, o = e.l - e.trim.w2, a = e.trim.l1, c = e.w - e.trim.l2), [
    // 0 left
    t.x - n <= s ? i : 0,
    // 1 right
    t.x + t.l + n >= o ? i : 0,
    // 2 bottom
    t.y - n <= a ? r : 0,
    // 3 top
    t.y + t.w + n >= c ? r : 0
  ].reduce((d, u) => d + u, 0);
}
function kr(t, e, n) {
  if (!t || !e || !n) return 0;
  const i = Rr(t, e), r = li(t), s = li(e), o = r + s, a = Math.max(i.l * i.w, o), c = Math.min(1, Math.max(0, o / a)), l = Math.min(1, Math.max(
    0,
    Dr(t, e, n) || 0
  )), f = c * 0.7 + l * 0.3;
  return Math.min(1, Math.max(0, f));
}
function Rr(t, e) {
  const n = Le(t), i = Le(e), r = Math.min(n.x, i.x), s = Math.min(n.y, i.y), o = Math.max(n.x + n.l, i.x + i.l), a = Math.max(n.y + n.w, i.y + i.w);
  return {
    x: r,
    y: s,
    l: o - r,
    w: a - s
  };
}
function Le(t) {
  if (F(t)) {
    let e = 1 / 0, n = 1 / 0, i = -1 / 0, r = -1 / 0;
    return t.shapes.forEach((s) => {
      e = Math.min(e, s.x), n = Math.min(n, s.y), i = Math.max(i, s.x + s.l), r = Math.max(r, s.y + s.w);
    }), {
      x: e,
      y: n,
      l: i - e,
      w: r - n
    };
  }
  return {
    x: t.x,
    y: t.y,
    l: t.l,
    w: t.w
  };
}
function li(t) {
  return F(t) ? t.shapes.reduce((e, n) => e + n.area, 0) : t.area;
}
function Dr(t, e, n) {
  const i = Le(t), r = Le(e);
  if (n === "lr" || n === "rl") {
    const s = Math.max(i.w, r.w);
    if (s === 0) return 0;
    const o = Math.min(i.w, r.w) / s;
    return Math.max(0, o);
  }
  if (n === "tb" || n === "bt") {
    const s = Math.max(i.l, r.l);
    if (s === 0) return 0;
    const o = Math.min(i.l, r.l) / s;
    return Math.max(0, o);
  }
  return 0;
}
async function Ar(t, e, n, i) {
  return await Bt.runSpecificStrategy.call(this, {
    shapes: t,
    container: e,
    firstShape: n,
    firstShapeRotation: i
  });
}
function ci(t, e, n, i = null, r = null, s = null, o = null) {
  if (!i)
    throw new Error("shapePosition was not passed any placed shapes");
  if (!r)
    throw new Error("shapePosition was not passed any unplaced shapes");
  nt(e) ? Mr(
    t,
    e,
    n,
    i,
    o
    // tidy
  ) : fs(
    t,
    e,
    n,
    i,
    s
  );
}
function Mr(t, e, n = null, i = [], r = null) {
  t.resetScore();
  const s = {
    compression: 0,
    fill: 0,
    similarDimensions: 0,
    fenceConsistency: 0,
    sameStripBonus: 0,
    exactStripFill: 0,
    cohesion: 0,
    total: 0,
    cutDirection: e.cutDirection
  }, o = e.cutPreference, a = e.cutDirection, c = e.getStock.bladeWidth, { cutAxis: l } = _i(a), f = mr(t, r);
  if (!f) return !1;
  const d = St(f);
  let u = d;
  const h = d === "l" ? "w" : "l";
  f[h] !== t[h] && (u = z(d));
  const p = rs(t, f, h);
  if (e.saw.guillotineOptions.maxPhase && p > e.saw.guillotineOptions.maxPhase) return !1;
  const S = St(f) ?? e.cutDirection;
  if (!S) throw new Error("keyDimension is not defined");
  const y = En(f);
  if (y) {
    const I = Rt(Vt(St(y))), b = an(t, y, I);
    if (y.guillotineState.myPhase <= 2 && !b) return !1;
  }
  let x = !1;
  e.firstShape && (x = t[l] > e.firstShape[l]);
  const g = {
    lr: [],
    bt: [],
    tb: [],
    rl: []
  };
  for (const I of i) {
    const b = us(
      t,
      I,
      e,
      {
        contact: !0,
        cohesion: !!n.cohesion,
        alignment: !!n.alignment,
        similarDimensions: !!n.similarDimensions
      }
    );
    b.type && (g[b.type].push(I), "cohesion" in s && n.cohesion && x && (s.cohesion += b.cohesion), "similarDimensions" in s && n.similarDimensions && (s.similarDimensions += b?.similarDimensions ? b.similarDimensions : 0), "fenceConsistency" in s && n.fenceConsistency && (o === "w" ? b.type === "lr" && b.neighbour.l === t.l && b.neighbour.y === t.y && (s.fenceConsistency = 1) : o === "l" && b.type === "bt" && b.neighbour.w === t.w && b.neighbour.x === t.x && (s.fenceConsistency = 1)));
  }
  if (e.cutDirection) {
    const I = e.cutDirection;
    if (I === "w") {
      const b = t.y === e.y, $ = g.bt && g.bt.length > 0;
      if (!b && !$)
        return !1;
    } else if (I === "l") {
      const b = t.x === e.x, $ = g.lr && g.lr.length > 0;
      if (!b && !$)
        return !1;
    }
  }
  if ("exactStripFill" in s && n.exactStripFill && f) {
    const I = z(St(f)), b = t[I] + c;
    s.exactStripFill = b >= f[I] && b < f[I] + c ? 1 : 0;
  }
  if ("compression" in s && n.compression) {
    const I = S === "l" ? "y" : "x";
    s.compression = ls(
      t,
      e,
      I
    );
  }
  if ("fill" in s && n.fill) {
    const I = S === "l" ? "y" : "x";
    s.fill = cs(t, e, I);
  }
  if (s.cohesion = Math.max(0, s.cohesion), "sameStripBonus" in s && n.sameStripBonus && e.firstShape) {
    const I = St(f);
    if (!x)
      s.sameStripBonus = 0;
    else if (I === "w" && g?.bt?.length) {
      const b = Nt(g.bt, "x"), $ = b.x + b.l;
      t.x + t.l > $ && (s.sameStripBonus = 0, s.cohesion = 0);
    } else if (I === "l" && g?.lr?.length) {
      const b = Nt(g.lr, "y"), $ = b.y + b.w;
      t.y + t.w > $ && (s.sameStripBonus = 0, s.cohesion = 0);
    } else
      s.sameStripBonus = 1;
  }
  if (n.aspectRatio) {
    const I = t.aspect, b = St(f);
    I < 0.1 ? t[b] > t[z(b)] && (s.aspectRatio = 1) : s.aspectRatio = 0;
  }
  const m = { ...s };
  Object.keys(s).forEach((I) => {
    if (typeof s[I] == "number") {
      const b = s[I];
      b < 0 ? m[I] = b : m[I] = n[I] ? b * n[I] : 0;
    }
  }), t.score = m;
  let w = 0;
  for (const I of Object.values(t.score))
    typeof I == "number" && (w += I);
  if (t.score.total = w, t.score.total < 0 && (t.score.total = 0), isNaN(t.score.total)) throw new Error("score is not a number");
  return t.score.cutDirection = a, t.score.myStripParent = f, t.score.myStripDirection = u, t.score.myPhase = p, t.score.total > (t?.bestScore?.total || 0) && t.setBestScore(t), !0;
}
function fs(t, e, n, i, r) {
  t.resetScore();
  const s = {
    fill: 0,
    similarDimensions: 0,
    compression: 0,
    cohesion: 0,
    area: 0,
    edge: 0,
    alignment: 0,
    exactFit: 0,
    total: 0
    // shapes: []
  };
  if ("edge" in s && n.edge) {
    let d = 0, u = 0;
    !e.trimmed && e.hasTrim && (d = e.trim.w1, u = e.trim.l1), (t.x === d || t.y === u) && (s.edge = Er(t, e));
  }
  if ("fill" in s && n.fill) {
    const d = e?.saw?.efficiencyOptions?.primaryCompression ? Vt(e?.saw?.efficiencyOptions?.primaryCompression) : "y";
    s.fill = cs(
      t,
      e,
      d
    );
  }
  if ("compression" in s && n.compression) {
    const d = e?.saw?.efficiencyOptions?.primaryCompression ? Vt(e?.saw?.efficiencyOptions?.primaryCompression) : "y";
    s.compression = ls(
      t,
      e,
      d
    );
  }
  let o = 0, a = 0;
  const c = {
    lr: !1,
    rl: !1,
    bt: !1,
    tb: !1
  };
  for (const d of i) {
    const u = us(
      t,
      d,
      e,
      {
        contact: !0,
        cohesion: !!n.cohesion,
        alignment: !!n.alignment,
        similarDimensions: !!n.similarDimensions
      }
    );
    u.type && (c[u.type] = !0, n.alignment && u.alignment && (a += u.alignment.positiveAlignments, o += u.alignment.possibleAlignments), n.cohesion && (s.cohesion += u.cohesion), n.similarDimensions && (s.similarDimensions += u?.similarDimensions ? u.similarDimensions : 0));
  }
  s.similarDimensions /= 4, o === 0 ? s.alignment = 0 : s.alignment = a / o, n.exactFit && (t.l === e.l || t.w === e.w) && (s.exactFit = 1), n.area && (s.area = Ir(t, i, e));
  const l = { ...s };
  Object.keys(s).forEach((d) => {
    if (typeof s[d] == "number") {
      const u = s[d];
      l[d] = n[d] ? u * n[d] : 0;
    }
  }), t.score = l;
  let f = 0;
  for (const d of Object.values(t.score))
    typeof d == "number" && (f += d);
  if (t.score.total = f, isNaN(t.score.total))
    throw new Error("thisShape.score.total is not a number: " + JSON.stringify(t.score));
  t.score?.total > (t?.bestScore?.total || 0) && t.setBestScore(t, r);
}
function kt(t, e, n) {
  const i = this.shapeList.reduce(
    (v, O) => O.added ? v : ++v,
    0
  );
  let r, s, o;
  const a = e.getStock;
  if (!a) return !1;
  const c = t, l = et(e) ? bt(c, a) : t.filter((v) => v.added);
  let f;
  l.length && (f = br(l, a)), f && !f.getPriority(a) && (f = null);
  const d = l.length, u = Math.max(...l.map((v) => v.x + v.l)), h = Math.max(...l.map((v) => v.y + v.w));
  let p = 0, S = null, y = null, x;
  if (n || (n = t.find((v) => v.x === (e.x || 0) && v.y === (e.y || 0))), !n) return !1;
  const g = n.area;
  let m = null;
  const w = e.area, I = l.reduce((v, O) => v + O.area, 0);
  if (et(e)) {
    if (e.cutType === "efficiency" ? (x = e.primaryCompression ?? "w", p = Ue(
      l,
      x,
      a.bladeWidth
    ), m = n?.bestScore?.total, p = p / e[x === "l" ? "l" : "w"]) : (x = e.cutPreference === "l" ? "x" : "y", p = Ue(
      l,
      x,
      a.bladeWidth
    ), p = p / e[x === "x" ? "l" : "w"]), e.cutType === "guillotine" && (r = t.filter((v) => v.added && kn(v) === 1).length), o = I / w, Et() && N([() => k(o).to.be.lessThanOrEqual(1)]), e?.saw?.stockType === "roll") {
      const v = Nt(l, "x");
      s = v.x + v.l;
    }
  } else if (nt(e)) {
    x = a.cutPreference === "l" ? "x" : "y", p = Ue(
      l,
      x,
      a.bladeWidth
    ), p = p / e[x === "x" ? "w" : "l"];
    const v = z(a.cutPreference), O = v === "l" ? "x" : "y";
    if (S = a[v] - (n[v] + n[O] + a.bladeWidth), y = n[v], e.cutPreference === "flex")
      throw new Error("cut preference is set to flex, it should be l or w at this point");
    o = I / w;
  } else
    o = I / w;
  const b = l.reduce((v, O) => v + (O?.bestScore?.total ?? 0), 0), $ = at(t, e).length + d, P = at(t, a).length + d, T = l.map((v) => v.compress());
  return {
    type: this.tidyStrategy ? "tidy" : "algo",
    stockID: a.id,
    stock: a,
    container: e,
    firstShape: n,
    firstShapeRotation: n.rot,
    topPriorityShape: f ? f.id : null,
    cutPreference: a.cutPreference,
    cutType: a.saw.cutType,
    segmentCutDirection: nt(e) ? e.cutDirection : null,
    // Result contains individual shapes (groups have already called placeMyShapes)
    shapes: T,
    score: {
      efficiency: o,
      totalShapeArea: I,
      totalShapesPlaced: d,
      totalShapeScore: b,
      firstRowLength: p,
      // firstShapeFill,
      firstShapeArea: g,
      firstShapeScore: m,
      containerAvailableShapes: $,
      stockAvailableShapes: P,
      totalUnplacedShapes: i,
      rollLength: s || null,
      maxX: u,
      maxY: h,
      stripShapes: r || null,
      stripSize: y || null,
      remainingStripSpace: S || null,
      uniqueStock: this.uniqueStock.length
    }
  };
}
function Lr(t, e, n = "sheet") {
  if (t && t?.length) {
    if (t.length === 1) return t[0];
    switch (t = t.filter((i) => i.score?.efficiency), n) {
      case "sheet":
        switch (e) {
          case "tidy":
            t.sort(Gr.bind(this));
            break;
          case "strip":
            t.sort(ui.bind(this));
            break;
          case "guillotine":
          case "beam":
            t.sort(Br.bind(this));
            break;
          default:
            t.sort(Xr.bind(this));
            break;
        }
        break;
      case "linear":
        t.sort(Or);
        break;
      case "roll":
        switch (e) {
          case "guillotine":
          case "strip":
            t.find((i) => i.score.containerAvailableShapes === 0) && (t = t.filter((i) => i.score.containerAvailableShapes === 0)), t.sort(ui);
            break;
          case "efficiency": {
            t.sort(Fr);
            break;
          }
        }
        break;
    }
    return t[0];
  }
}
function Or(t, e) {
  return e.score.efficiency - t.score.efficiency;
}
function Oe(t, e) {
  const {
    totalShapesPlaced: n = 0,
    stockAvailableShapes: i = 1,
    containerAvailableShapes: r = 0,
    efficiency: s = 0,
    maxX: o = 0,
    maxY: a = 0
  } = t.score, l = n / (i || 1), f = e === "stock" ? 0.65 : 0.35, d = 1 - f;
  let u = l * f + s * d;
  const h = e === "stock" && r === 0 || n === i;
  if (h && (u += 0.15), e === "stock" && h && t.stock) {
    const p = t.cutPreference, S = t.stock, y = p === "l" ? a : o, x = p === "l" ? S.w : S.l;
    if (x > 0 && y > 0) {
      const g = 1 - y / x;
      u += g * 0.1;
    }
  }
  return u;
}
function ui(t, e) {
  if (N([() => k(t.score).to.exist, () => k(e.score).to.exist]), !t.score || !e.score) return 0;
  const n = t.score.totalShapesPlaced === t.score.stockAvailableShapes, i = e.score.totalShapesPlaced === e.score.stockAvailableShapes, r = t.score.maxY || 1, s = e.score.maxY || 1, o = t.score.totalShapesPlaced || 1, a = e.score.totalShapesPlaced || 1, c = r / o, l = s / a;
  if (n && !i) {
    const u = l < c * 0.5, h = s < r * 0.5;
    return u && h ? 1 : -1;
  }
  if (i && !n) {
    const u = c < l * 0.5, h = r < s * 0.5;
    return u && h ? -1 : 1;
  }
  const f = Oe(t, "strip"), d = Oe(e, "strip");
  return f > d ? -1 : d > f ? 1 : 0;
}
function Gr(t, e) {
  return t.score[this.config.successMetric] > e.score[this.config.successMetric] ? -1 : t.score[this.config.successMetric] < e.score[this.config.successMetric] ? 1 : t.score.firstShapeFill > e.score.firstShapeFill ? -1 : t.score.firstShapeFill < e.score.firstShapeFill ? 1 : t.score.firstRowLength > e.score.firstRowLength ? -1 : t.score.firstRowLength < e.score.firstRowLength ? 1 : t.score.totalShapeScore > e.score.totalShapeScore ? -1 : t.score.totalShapeScore < e.score.totalShapeScore ? 1 : 0;
}
function hs(t, e) {
  if (t.cutType === "guillotine" && e.cutType === "guillotine") {
    if (t.stock.cutPreference === e.stock.cutPreference) {
      const n = t.stock.cutPreference === "l" ? "maxY" : "maxX";
      if (t.score[n] < e.score[n]) return -1;
      if (t.score[n] > e.score[n]) return 1;
    }
    return 0;
  } else if (t.cutType === "efficiency" && e.cutType === "efficiency") {
    if (t.stock.saw.efficiencyOptions.primaryCompression === e.stock.saw.efficiencyOptions.primaryCompression) {
      const n = t.stock.saw.efficiencyOptions.primaryCompression === "w" ? "maxY" : "maxX";
      if (t.score[n] < e.score[n]) return -1;
      if (t.score[n] > e.score[n]) return 1;
    }
    return 0;
  }
  return 0;
}
function Fr(t, e) {
  return t.score.efficiency > e.score.efficiency ? -1 : t.score.efficiency < e.score.efficiency ? 1 : t.type !== "evo" && e.type === "evo" ? -1 : t.type === "evo" && e.type !== "evo" ? 1 : t.shapes?.length < e.shapes?.length ? -1 : t.shapes?.length > e.shapes?.length ? 1 : t.score.totalShapeScore > e.score.totalShapeScore ? -1 : t.score.totalShapeScore < e.score.totalShapeScore ? 1 : vt.ID(t.stock, e.stock);
}
function Br(t, e) {
  const n = Oe(t, "stock"), i = Oe(e, "stock");
  if (n > i) return -1;
  if (i > n || t.type === "allocated strips" && e.type !== "allocated strips") return 1;
  if (t.type !== "allocated strips" && e.type === "allocated strips") return -1;
  if ((t.score.containerAvailableShapes === 0 || e.score.containerAvailableShapes === 0) && t.cutPreference === e.cutPreference) {
    const s = t.cutPreference === "l" ? "maxY" : "maxX";
    if (t.score[s] < e.score[s]) return -1;
    if (t.score[s] > e.score[s]) return 1;
    if (t.score.stripShapes < e.score.stripShapes) return -1;
    if (t.score.stripShapes > e.score.stripShapes) return 1;
  }
  const r = hs(t, e);
  return r !== 0 ? r : t.score.firstShapeArea > e.score.firstShapeArea ? -1 : t.score.firstShapeArea < e.score.firstShapeArea ? 1 : vt.ID(t.stock, e.stock);
}
function Xr(t, e) {
  const n = t.score?.totalUnplacedShapes, i = e.score?.totalUnplacedShapes;
  if (t.stock.id !== e.stock.id && (n === 0 || i === 0) && !(n === 0 && i === 0)) {
    const s = n === 0 ? t : e, o = n === 0 ? e : t, a = s.stock, c = o.stock, l = a.area - s.score.totalShapeArea, f = c.area;
    return s.score.totalShapeArea - o.score.totalShapeArea < f && f < l ? c.id === t.stock.id ? -1 : 1 : c.id === t.stock.id ? 1 : -1;
  }
  if (t.score[this.config.successMetric] > e.score[this.config.successMetric])
    return -1;
  if (t.score[this.config.successMetric] < e.score[this.config.successMetric])
    return 1;
  const r = hs(t, e);
  return r !== 0 ? r : t.type !== "evo" && e.type === "evo" ? -1 : t.type === "evo" && e.type !== "evo" ? 1 : t.score.firstShapeArea > e.score.firstShapeArea ? -1 : t.score.firstShapeArea < e.score.firstShapeArea ? 1 : t.score.totalShapeScore > e.score.totalShapeScore ? -1 : t.score.totalShapeScore < e.score.totalShapeScore ? 1 : vt.ID(t.stock, e.stock);
}
function ds(t) {
  if (!t) return t;
  const e = { ...t };
  return t.stock && (e.stock = t.stock), t.resultKey !== "bestPartialResult" && t.firstShape && "toData" in t.firstShape && (e.firstShape = t.firstShape.toData(te.Compressed)), t.shapes?.length && (e.shapes = t.shapes.map((n) => n && "toData" in n ? n.toData(te.Compressed) : n)), "stripShapes" in t && t.stripShapes?.length && (e.stripShapes = t.stripShapes.map((n) => n && "toData" in n ? n.toData(te.Compressed) : n)), "root" in t && t.root && "toData" in t.root && (e.root = t.root.toData(te.Compressed)), "container" in t && t.container && "toData" in t.container && (et(t.container) ? e.container = t.container : e.container = t.container.toData(te.Compressed)), e;
}
function Rn(t, e) {
  return t?.stock ? et(t.stock) ? t.stock : e.find((n) => n.autoId === t.stock.autoId) || null : null;
}
async function ht(t, e = null) {
  if (t.score?.efficiency === 0 && t.shapes?.length > 0) {
    const o = t.shapes.filter((a) => a.added);
    if (o.length > 0) {
      const a = o.length / t.shapes.length;
      t.score.efficiency = a;
    }
  }
  this?.job && this.job.updateProgress({
    socketId: this.socketId,
    type: "algo",
    message: "result"
  });
  const n = e === "strip" ? "bestPartialResult" : "bestResult";
  t.resultKey = n;
  const i = this[n], r = t?.firstShape;
  if (Et()) {
    const o = t.score.efficiency, a = F(r) ? `${r.id}: [${r?.shapes?.map((l) => l.parentId).join(", ")}]` : r?.id, c = [
      {
        property: "Key",
        value: n
      },
      {
        property: "Type",
        value: t.type
      },
      {
        property: "Stock ID",
        value: t.stock.id
      },
      ...t.container && nt(t.container) ? [{
        property: "Segment ID",
        value: t.container.id
      }] : [],
      ...t.container && nt(t.container) ? [{
        property: "Segment coords",
        value: `${t.container.x},${t.container.y}`
      }] : [],
      ...t.container ? [{
        property: "Container dimensions",
        value: `${t.container.l}x${t.container.w}`
      }] : [],
      {
        property: "First shape",
        value: a
      },
      {
        property: "First shape rotation",
        value: r?.rot ?? "N/A"
      },
      {
        property: "Efficiency",
        value: o.toFixed(4)
      },
      {
        property: "Strip batch",
        value: t?.stripShapeBatch ?? "N/A"
      },
      {
        property: "Shapes",
        value: t?.shapes?.map((l) => l.id).join() ?? "N/A"
      }
    ];
    D("results", `Recording ${n}`, null, c);
  }
  let s = t;
  if (i && (s = Lr.call(this, [t, i], e || t.stock.cutType, t.stock?.saw?.stockType), s || (D("results", "WARNING: findWinner returned undefined, using current result as winner"), s = t), D("results", `${s.type} winner for stock ${s.stock.id} eff. ${s.score.efficiency}, firstShape [${r?.id || "N/A"}], rot ${r?.rot || "N/A"}, batch ${s?.stripShapeBatch ?? "N/A"}`)), !i || !s?.processed) {
    t.processed = !0;
    const o = ds(s);
    this[n] = o;
  }
  Nr(s.shapes, s.stock);
}
function Nr(t, e) {
  if (!t?.length) return;
  const n = t.filter((i) => F(i) && i.type !== "user");
  N([
    () => k(n.every((i) => F(i))).toBe(!0),
    () => k(n.every((i) => i.type !== "user")).toBe(!0)
  ], "expandTemporaryGroups: All filtered groups should be temporary (non-user) groups");
  for (const i of n) {
    const r = i.shapes || [], s = i.type;
    if (i.added)
      try {
        i.placeMyShapes(e), N([
          () => k(r.every((o) => o.group?.addedAsGroup === i)).toBe(!0)
        ], `expandTemporaryGroups: All children of ${s} group should have addedAsGroup reference`);
      } catch (o) {
        D("errors", `Error placing shapes for temporary group ${i.id} during expansion: ${o.message}`);
      }
    i.destroy(), N([
      () => k(r.every((o) => o.group?.reference === null || o.group?.reference === void 0)).toBe(!0),
      () => k(r.every((o) => o.group?.inGroup === !1)).toBe(!0)
    ], `expandTemporaryGroups: Children of ${s} group should be released after destroy`);
  }
}
function ue({
  bestResult: t,
  shapeList: e,
  relevantStock: n = [],
  stockList: i = [],
  resetShapes: r = null
}) {
  D("results", `updating shapes from ${t.resultKey} / ${t.type} - stock ${t.stock.id}, FS: ${t.firstShape.id}`), n.length && n.filter((l) => l.autoId !== t?.stock?.autoId).forEach((l) => {
    const f = e.filter((d) => d.added && d?.stock?.autoId === l.autoId);
    f.length && (r ? r(f, !1, !0, !1) : f.forEach((d) => {
      d.added = !1, d.reset();
    }));
  });
  const s = [];
  let o = i.length ? i.find((l) => l.autoId === t.stock?.autoId) : null;
  if (o && t.stock && t.stock.used && (o.used = !0), !o && t.stock && (o = t.stock, o.saw && !oe(o.saw))) {
    D("results", `⚠️  Found serialized saw in bestResult.stock ${o.autoId}, attempting to restore from stockList`);
    const l = i.find((f) => f.autoId === o.autoId || f.parentId === o.parentId && oe(f.saw));
    l && oe(l.saw) ? (D("results", `✅ Restored live saw instance from stock ${l.autoId}`), o.saw = l.saw) : D("results", `❌ Could not restore live saw instance for stock ${o.autoId}`);
  }
  o || (o = t.stock);
  for (const l of t.shapes)
    if (Qe(l) || Hs(l)) {
      const f = e.find((d) => d.autoId === l.autoId);
      if (!f) {
        Et() && (console.warn(`[updateShapeListFromBestResult] Shape ${l.autoId || l.id} from result not found in shapeList!`), console.warn(`  Available autoIds in shapeList: ${e.slice(0, 5).map((d) => d.autoId).join(", ")}...`));
        continue;
      }
      if (Et() && (Ce(f) || F(f) || console.warn(`Shape ${l.autoId} in shapeList is not a live instance!`)), st(f)) {
        const { shapes: d, ...u } = l;
        f.update({ ...u, validationMode: "none" });
      } else
        f.update({ ...l, validationMode: "none" });
      Ce(f) && l.group && l.group.inGroup !== void 0 && (f.group.inGroup = l.group.inGroup), f.stock = o, s.push(f);
    }
  N([
    () => k(t.shapes.every((l) => {
      if (!Qe(l)) return !0;
      const f = e.find((d) => d.autoId === l.autoId);
      return !(!f || !f.added || f.x !== l.x || f.y !== l.y || f.l !== l.l || f.w !== l.w);
    }), "best shape not found, not added, or not correctly updated").to.be.true
  ]), Et() && (s.every((f) => e.find((d) => d === f)) || console.warn("Some updated shapes are not exact references from shapeList - possible instance copying!")), ki({
    shapes: s
  }, "updateShapeListFromBestResult");
  let a = [];
  const c = t.shapes.filter((l) => js(l));
  return D("results", `Best result contains ${t.shapes.length} total items`), D("results", `Found ${c.length} serialized groups to recreate:`), c.forEach((l) => {
    D("results", `  - Group ${l.id}: type=${l.type}, shapes=${l.shapes?.length || 0}, added=${l.added}, x=${l.x}, y=${l.y}`);
  }), c.length > 0 && (D("results", `Recreating ${c.length} groups from bestResult`), a = Us(c, e, o), D("results", `Successfully recreated ${a.length} groups:`), a.forEach((l) => {
    D("results", `  - Group ${l.id}: type=${l.type}, shapes=${l.shapes?.length || 0}, added=${l.added}, x=${l.x}, y=${l.y}`);
  }), a.forEach((l) => {
    l.shapes && Array.isArray(l.shapes) && (l.shapes.forEach((d) => {
      W(d) && (d.group.reference = l, d.group.inGroup = !0, l.added && (d.group.addedAsGroup = l));
    }), N([
      () => k(l.shapes.every((d) => !W(d) || d.group?.reference === l)).toBe(!0)
    ], `updateShapeListFromBestResult: All children of group ${l.id} (type=${l.type}) should have correct reference`), l.added && N([
      () => k(l.shapes.every((d) => !W(d) || d.group?.addedAsGroup === l)).toBe(!0),
      () => k(l.shapes.every((d) => !W(d) || typeof d.group?.addedAsGroup != "string")).toBe(!0)
    ], `updateShapeListFromBestResult: addedAsGroup should be Group reference for group ${l.id} (type=${l.type})`));
    const f = l.added && typeof l.placeMyShapes == "function" && l.type !== "position";
    if (l.added && l.type === "position" && N([
      () => k(f).toBe(!1)
    ], `updateShapeListFromBestResult: Position group ${l.id} should NOT call placeMyShapes`), f)
      try {
        l.placeMyShapes(o);
      } catch (d) {
        throw console.error("[ERROR] placeMyShapes failed for group " + l.id + ":", d.message), console.error(`  Group details: type=${l.type}, x=${l.x}, y=${l.y}, rot=${l.rot}`), console.error("  Child shapes:"), l.shapes?.forEach((u) => {
          console.error(`    ${u.id}: added=${u.added}, x=${u.x}, y=${u.y}, rot=${u.rot}, l=${u.l}, w=${u.w}`);
        }), d;
      }
    Et() && (l.shapes?.forEach((d) => {
      const u = e.find((h) => h.autoId === d.autoId);
      u !== d ? (console.error(`[ERROR] Group ${l.id} child shape ${d.id} is NOT the same instance as in shapeList!`), console.error(`  Group shape: added=${d.added}, x=${d.x}, y=${d.y}`), console.error(`  shapeList shape: added=${u?.added}, x=${u?.x}, y=${u?.y}`)) : d.group?.reference !== l && (console.error(`[ERROR] Group ${l.id} child shape ${d.id} has incorrect group.reference!`), console.error(`  Expected: ${l.id}, Got: ${d.group?.reference?.id || "null"}`));
    }), D("results", `Successfully recreated, placed, and linked ${a.length} groups`));
  })), { updatedShapes: s, groups: a };
}
async function me(t, e, n, i = null) {
  if (N([
    () => k(et(e)).to.be.true,
    () => {
      if (n.length) return k(W(n[0]) || st(n[0])).to.be.true;
    }
  ]), N([() => k(ft(n), "duplicates found").to.be.false]), Qi(), i || (i = Zr.call(this, e, n)), !i) throw new Error("no root segment created");
  if (this.config.sample.enable) {
    if (await Yr.call(
      this,
      t,
      e,
      i
    ), t.secondRun || !this.bestResult) return;
    ue({
      bestResult: this.bestResult,
      shapeList: this.shapeList,
      stockList: this.stockList,
      resetShapes: this.resetShapes?.bind(this)
    }), await fi.call(this, {
      options: t,
      shapes: n,
      stock: e
      // root
    }), Hr.call(this, n, i);
  }
  if (this.config.guillotine.stripShapes.allocation && n.length > 1) {
    if (await qr.call(this, t, e, n, i), !this.bestResult) return;
    ue({
      bestResult: this.bestResult,
      shapeList: this.shapeList,
      stockList: this.stockList,
      resetShapes: this.resetShapes?.bind(this)
    }), await fi.call(this, {
      options: t,
      shapes: n,
      stock: e,
      root: i
    });
  }
}
async function fi({
  options: t,
  shapes: e,
  stock: n,
  root: i
}) {
  const r = bt(this.shapeList, n);
  ta.call(
    this,
    Rn(this.bestResult, this.stockList),
    r
  ) && await Wr.call(
    this,
    t,
    r,
    e,
    n,
    i
  );
  const o = /* @__PURE__ */ new Map();
  for (const a of this.shapeList) o.set(a.id, a);
  this.bestResult.shapes.forEach((a) => {
    const c = o.get(a.id);
    c && (a.x = c.x, a.y = c.y, a.placementOrder = c.placementOrder);
  });
}
async function qr(t, e, n, i) {
  if (!this.config.guillotine.stripShapes.allocation || (N([
    () => k(et(e)).to.be.true,
    () => k(n.length ? W(n[0]) : !0).to.be.true,
    () => k(nt(i)).to.be.true
  ]), e?.saw?.stockType === "roll")) return !1;
  const r = aa.call(this, i, this.uniqueStock, this.stockList);
  if (r === !1) return !1;
  for (let s = 0; s < r; s++)
    this.resetShapes(n), i.shapes = n, N([
      () => k(ft(i.shapes, `root segment batch ${s} stock ${e.id}`), "duplicates found in root segment").to.be.false,
      () => k(n.length).to.equal(i.shapes.length),
      () => k(n.some((o) => Pe(o) || ct(o)), "groups exist in new strip shape batch calculation").to.be.false
    ]), D("guillotine", `running strip shape batch ${s} for stock ${e.id}`), await Dn.call(
      this,
      t,
      e,
      i,
      s
    ), N([() => k(ft(i.shapes), "duplicates found").to.be.false]);
  return !0;
}
async function Yr(t, e, n) {
  D("guillotine", `running basic first shape sample for stock ${e.id}`), N([
    () => k(et(e)).to.be.true,
    () => k(nt(n)).to.be.true,
    () => k(n?.shapes?.length).to.be.greaterThan(0)
  ]), await Dn.call(this, t, e, n);
}
async function Dn(t, e, n, i = null, r = null, s = null) {
  if (N([
    () => k(et(e)).to.be.true,
    () => k(nt(n)).to.be.true,
    () => {
      if (r) return k(W(r)).to.be.true;
      if (i !== null) return k(i).to.be.a("number");
      if (s !== null) return k([0, 1].includes(s)).to.be.true;
    }
  ]), i === null)
    await ae.call(
      this,
      t,
      e,
      n,
      r,
      s,
      null
    );
  else if (await ae.call(
    this,
    t,
    e,
    n,
    void 0,
    void 0,
    i
  ) === !1) return !1;
}
async function Wr(t, e, n, i, r) {
  N([
    () => k(et(i)).to.be.true,
    () => {
      if (n.length) return k(W(n[0]) || st(n[0])).to.be.true;
      if (e.length) return k(W(e[0] || st(n[0]))).to.be.true;
    }
  ]), D("guillotine", `running refinement for stock ${i.id}`);
  try {
    await zr.call(
      this,
      t,
      e,
      n,
      i,
      r
    );
  } catch (s) {
    console.error("issue with runSecondPass", s.message);
  }
}
async function zr(t, e, n, i, r) {
  if (N([
    () => k(et(i)).to.be.true,
    () => {
      if (n.length) return k(W(n[0]) || st(n[0])).to.be.true;
      if (e.length) return k(W(e[0]) || st(n[0])).to.be.true;
    }
  ]), !this.config.guillotine.secondPass || !this.saw?.guillotineOptions?.headCuts) return !1;
  D("guillotine", `running second pass for stock ${i.id}`), await ea.call(this, i, n, e, r);
  const s = bt(n, i), o = kt.call(
    this,
    this.shapeList,
    i
  );
  o && i.id === Rn(this.bestResult, this.stockList)?.id && s.length - e.length > 0 && (D("guillotine", `runSecondPass added ${s.length - e.length} shape(s) to stock ${i.id}, new total ${s.length}`), o.secondPass = !0, await ht.call(this, o));
}
function Hr(t, e) {
  const n = [];
  if (this.groupList && this.groupList.length > 0)
    for (const s of this.groupList)
      s.added ? n.push(s) : s.reset();
  for (let s = t.length; s--; ) {
    const o = t[s];
    F(o) && t.splice(s, 1), o.reset();
  }
  this.groupList && (this.groupList.length = 0, this.groupList.push(...n)), this.counters.placement = 0, this.bestPartialResult = null, Qi(), e.reset(t);
  const i = e.shapes.filter((s) => W(s)), r = e.shapes.filter((s) => F(s));
  D("reset", "[RESET] RESET ROOT SEGMENT BETWEEN CALCULATIONS", null, [
    {
      type: "Root shapes",
      count: i.length,
      added: i.filter((s) => s.added).length,
      ids: i.map((s) => s.id).join(", ")
    },
    {
      type: "Root groups",
      count: r.length,
      added: r.filter((s) => s.added).length,
      ids: r.map((s) => s.id).join(", ")
    }
  ]);
}
async function jr(t, e, n, i) {
  N([
    () => k(et(e)).to.be.true,
    () => k(nt(n)).to.be.true
  ]);
  const r = Dt(n.shapes, !1, !0), s = this.stockList.findIndex((f) => f.id === e.id);
  let o = null;
  s > 0 && (o = this.stockList[s - 1]);
  const a = z(e.cutPreference);
  let c = [], l = [];
  if (n.l === e.l && n.w === e.w ? s > 0 && (c = bt(this.shapeList, o).filter((f) => ln(f))) : l = bt(this.shapeList, e).filter((f) => ln(f)), c?.length || l?.length) {
    const f = a === "l" ? "x" : "y";
    c.sort((h, p) => h[f] - p[f]), l.sort((h, p) => h[f] - p[f]);
    const d = c.length ? c[c.length - 1] : l[l.length - 1], u = r.filter((h) => d[a] === h.w || d[a] === h.l);
    if (u?.length) {
      for (let h = 0; h < u.length; h++) {
        const p = u[h];
        if (h > 1 && u[h - 1].isIdentical(u[h]))
          continue;
        At(p, 0, e);
        let S;
        d[a] === p[a] ? S = 0 : S = 1;
        const y = await ps.call(
          this,
          t,
          p,
          n,
          S
        );
        if (y?.length)
          for (let x = y.length; x--; ) {
            const g = y[x];
            await ht.call(this, g, "strip");
          }
        this.resetShapes(n.shapes);
      }
      return !(!i || i?.length);
    }
  }
  return !1;
}
async function ae(t, e, n, i = null, r = null, s = null) {
  if (n.type === "root" && !t?.secondPass && (e.used = !1, this.counters.placement = 0), !n.shapes?.length) return;
  N([
    () => k(et(e)).to.be.true,
    () => k(nt(n)).to.be.true,
    () => k(i ? W(i) : !0).to.be.true,
    () => k(i ? [0, 1].includes(r) : !0).to.be.true,
    () => k(s !== null ? typeof s == "number" : !0).to.be.true,
    () => k(s !== null ? i === null : !0).to.be.true,
    () => k(r !== null ? [0, 1].includes(r) : !0).to.be.true,
    () => k(n.shapes.every((u) => !Pe(u), "no segment groups should exist at this point")).to.be.true
  ]);
  const o = typeof s == "number";
  let a = !0;
  if (e.saw.guillotineOptions?.strategy === "time" && (a = !await jr.call(
    this,
    t,
    e,
    n
  )), a)
    if (re(n))
      if (o) {
        let u = ra(n.shapes, s, e);
        if (u.sort((x, g) => x.guillotineState.getStripShapeBatchData(s).order - g.guillotineState.getStripShapeBatchData(s).order), D("guillotine", () => `strip shape candidates ${u.map((x) => x.id).join("|")}`), N([
          () => k(u.find((x) => x.guillotineState.getStripShapeBatchData(s).stockId !== n.getStock.autoId), "found strip shapes in allocatedStripShape from another stock").to.be.undefined,
          () => k(ft(u), "duplicate shapes found in stripShapeCandidates").to.false,
          () => k(u.find((x) => F(x) && !ct(x)), "found groups in allocatedStripShape").to.be.undefined,
          () => k(n.shapes.filter((x) => x.added).length === 0, `added shapes found in segment ${n.id}`).to.be.true
        ]), !u.length)
          return ae.call(
            this,
            t,
            e,
            n
          );
        const h = z(e.cutPreference);
        u = u.filter((x) => {
          if (F(x)) return !0;
          const g = di(x, s, e, !1);
          return qt(x, g, e) ? (di(x, s, e, !0), Vs(x, g, e) ? (N([
            () => k(x.rot, `candidates ${x.id} rotation (${x.rot}) incorrect for batch (${g})`).equal(g)
          ]), !0) : !1) : (D("guillotine", () => `cannot rotate strip shape ${x.id}, ${x.l}x${x.w} to ${g} on stock ${e.id}`, [x.getStripShapeBatchData(s)]), Jt(x, e, g), !1);
        });
        const p = e.saw.guillotineOptions, S = p?.limitStripDimensions !== !1 ? Ri(
          n.shapes.filter((x) => !x.added && W(x)),
          h,
          n[h]
        ) : null;
        if (p?.limitStripDimensions === !1 && u.length > 1) {
          const x = n.shapes.filter((g) => ct(g) && g.shapes.some((m) => u.includes(m)));
          x.length > 0 ? (D("guillotine", () => `Reusing ${x.length} existing strip groups`), u = x) : u = la.call(this, s, h, e, n, u);
        }
        if (!u.length)
          return ae.call(
            this,
            t,
            e,
            n
          );
        u.sort(function(g, m) {
          if (S !== null) {
            const b = g[h] <= S ? 0 : 1, $ = m[h] <= S ? 0 : 1;
            if (b !== $) return b - $;
          }
          const w = g.guillotineState?.getStripShapeBatchData?.(s)?.order, I = m.guillotineState?.getStripShapeBatchData?.(s)?.order;
          return w != null && I != null && w !== I ? w - I : m[h] !== g[h] ? m[h] - g[h] : m[e.cutPreference] !== g[e.cutPreference] ? m[e.cutPreference] - g[e.cutPreference] : g.autoId.localeCompare(m.autoId, void 0, { numeric: !0 });
        }), i = u[0], D("guillotine", () => `firstShape for segment ${n.id} is ${i.id}`);
        const y = i.guillotineState.getStripShapeBatchData(s);
        if (!y) throw new Error("no fs batch found");
        N([() => k(y.stockId).equal(n.getStock.autoId)]), i.firstShape.isFirstShape = !0, r = y.rot, N([() => k([0, 1].includes(y.rot)).to.be.true]), await fn.call(this, {
          options: t,
          fs: i,
          fsRotation: r,
          segment: n,
          stripShapeBatch: s,
          stripShapeCandidates: u
        });
      } else
        i && r !== null ? await fn.call(this, {
          options: t,
          fs: i,
          fsRotation: r,
          segment: n,
          stripShapeBatch: s
        }) : await Je.call(
          this,
          t,
          n
        );
    else
      await Je.call(
        this,
        t,
        n
      );
  if (!this.bestPartialResult)
    if (s !== null) {
      if (await Je.call(
        this,
        t,
        n,
        !0
      ), !this.bestPartialResult) return;
    } else return;
  const l = this.bestPartialResult.firstShape;
  ue({
    bestResult: this.bestPartialResult,
    shapeList: this.shapeList,
    stockList: this.stockList,
    resetShapes: this.resetShapes?.bind(this)
  }), xr(n, !0), Di(l) && n.shapes.push(l), n.shapes = Ai(n.shapes, l), N([
    () => k(n.shapes.filter((u) => F(u)).every((u) => ct(u) || st(u)), "non-strip/user groups found in segment after removeGroupsFromSegment").to.be.true,
    () => Ei(n.shapes, "segmentCalculations after removeGroupsFromSegment"),
    () => k(n.shapes.every((u) => !Pe(u) || st(u)), "found non-user groups in segment after removal").to.be.true
  ]);
  let f = null;
  if (this.config.guillotine.strips.duplicateStrips && s !== null && this.bestPartialResult?.container) {
    const u = this.bestPartialResult.container, h = this.shapeList.filter((p) => p.added && p.stock?.id === e.id && R.greaterThanOrEqualTo(p.x, u.x) && R.lessThanOrEqualTo(p.x + p.l, u.x + u.l) && R.greaterThanOrEqualTo(p.y, u.y) && R.lessThanOrEqualTo(p.y + p.w, u.y + u.w));
    h.length && (f = {
      segment: u,
      firstShape: l,
      shapes: h
    });
  }
  const d = at(this.shapeList);
  if (this.bestPartialResult = null, d.length || this.config.secondRun.enabled) {
    const u = _r.call(
      this,
      n,
      l
    );
    if (u?.length) {
      D("cuts", () => `Created ${u.length} new segments, unplaced shapes: ${d.length}`);
      for (const h of u) {
        if (this.bestPartialResult = null, !h.shapes.length) {
          h.offcut = !0;
          continue;
        }
        const p = o && !re(h);
        if (h.shapes = h.shapes.filter((S) => !S.added && (!p || !S.guillotineState.isInStripShapeBatch(s))), f && re(h) && !F(f.firstShape)) {
          const S = Kr.call(this, f, h, e, s);
          if (S) {
            D("guillotine", () => `Duplicated strip in segment ${h.id}`), f = S;
            continue;
          }
        }
        await ae.call(
          this,
          t,
          e,
          h,
          null,
          null,
          s
        );
      }
    }
  }
  if (n.type === "root") {
    const u = /* @__PURE__ */ new Map();
    for (const y of this.shapeList) u.set(y.autoId, y);
    n.shapes = n.shapes.map((y) => F(y) ? y : u.get(y.autoId) || y);
    const h = kt.call(
      this,
      this.shapeList,
      e,
      l
    );
    if (!h) throw new Error("Unable to score stock");
    if (h.stripShapeBatch = s, h.root = n, !h.score.efficiency) return;
    const p = this.shapeList.filter((y) => !y.group?.inGroup && !F(y) && y.stock?.id === e.id), S = Mi(p);
    S.length > 0 && D("errors", `Found ${S.length} overlapping shapes on stock ${e.id}`), s !== null ? h.type = "allocated strips" : h.type = "basic", await ht.call(this, h);
  }
}
async function fn({
  options: t = null,
  fs: e = null,
  fsRotation: n = null,
  segment: i = null,
  stripShapeBatch: r = null,
  stripShapeCandidates: s = []
}) {
  if (!e || n === null || !i)
    throw new Error(`firstShapeSegmentCalculations requires firstShape, firstShapeRotation & segment:${e} ${n} ${i}`);
  const o = async (u, h = !0) => {
    let p;
    h ? (e.reset(), N([() => k(i.shapes.filter((S) => S.autoId === e.autoId).length, "too many first shapes in segmentShapes").to.equal(1)]), p = kt.call(
      this,
      i.shapes,
      u,
      e
    )) : p = kt.call(
      this,
      i.shapes,
      i,
      e
    ), p.score.totalShapesPlaced && await ht.call(this, p, "strip");
  };
  if (i.shapes = Ur.call(this, i, e, r), na.call(
    this,
    e,
    i,
    i.getStock,
    n
  ) === !1)
    return !1;
  e.placementOrder = this.counters.placement++, N([
    () => k(nt(i)).to.be.true,
    () => k(r !== null ? typeof r == "number" : !0).to.be.true,
    () => k(n !== null ? [0, 1].includes(n) : !0).to.be.true
  ]), e && N([
    //Accept all group types (segment, user, strip) as well as shapes
    () => k(W(e) || F(e), `first shape ${e.id} is not a shape or group`).to.be.true,
    () => k(e.added, `first shape ${e.id} added too soon`).to.be.true,
    //Only check rotation for shapes, not groups (groups cannot be rotated)
    () => k(F(e) || e.rot === n, `first shape ${e.id} rotation (${e.rot}) incorrect for (${n})`).to.be.true,
    () => k(R.lessThanOrEqualTo(e.l, i.l), `first shape ${e.id} longer than segment ${e.l} > ${i.l}`).to.be.true,
    () => k(R.lessThanOrEqualTo(e.w, i.w), `first shape ${e.id} wider than segment ${e.w} > ${i.w}`).to.be.true
  ]);
  const c = i.getStock, { success: l, firstShapeSegment: f, isHeadCut: d } = await Vr.call(this, {
    fs: e,
    segment: i,
    stock: c,
    stripShapeBatch: r,
    stripShapeCandidates: s,
    options: t
  });
  return !(l === !1 && (await o(f), !d));
}
function Ur(t, e, n) {
  if (ft(t.shapes)) {
    const o = /* @__PURE__ */ new Set();
    t.shapes = t.shapes.filter((a) => o.has(a.autoId) ? !1 : (o.add(a.autoId), !0));
  }
  const r = Xe(t), s = t.shapes.filter((o) => o.willItFit(t, null, r) ? !(t.type !== "root" && typeof n == "number" && o.getStripShapeBatchData(n) !== !1 && e.autoId !== o.autoId) : (D("cuts", () => `  Excluding ${o.autoId}: doesn't fit in segment`), !1));
  return D("cuts", () => `  Result: ${s.length} shapes selected for segment`), this.resetShapes(s, {
    keepScores: !1,
    removeGroups: !1,
    keepGuillotineData: !0,
    keepFirstShapeSampleRotations: !0
  }), s;
}
async function Vr({
  fs: t,
  segment: e,
  stock: n,
  stripShapeBatch: i,
  stripShapeCandidates: r,
  forceNoHeadCut: s,
  options: o
}) {
  D("guillotine", () => `[createFirstShapeSegmentsPlaceShapesAndScore] Starting for segment ${e.id}, first shape ${t.id}`);
  const { offcuts: a, firstShapeSegment: c, isHeadCut: l, success: f } = await Jr.call(this, { fs: t, segment: e, stock: n, stripShapeBatch: i, stripShapeCandidates: r, forceNoHeadCut: s, options: o });
  if (N([() => k(a.length, "too many offcuts generated").to.be.lessThanOrEqual(2)]), f === !1)
    return { success: !1, firstShapeSegment: c, isHeadCut: l };
  if (o.secondPass) {
    const { cuts: g } = Cn.call(
      this,
      {
        container: c,
        shapes: [t],
        forceNoHeadCut: s
      }
    ), { allShapesCut: m } = Ki([t], g, c);
    if (!m) return { success: !1, firstShapeSegment: c, isHeadCut: l };
  }
  if (!a.length) {
    const g = kt.call(
      this,
      e.shapes,
      c,
      t
    );
    return await ht.call(this, g, "strip"), { success: !0, firstShapeSegment: c, isHeadCut: l };
  }
  const d = c.cutDirection, u = a.find((g) => R.equalTo(g[d], c[d]));
  if (!u || u.l <= 0 || u.w <= 0) {
    D("cuts", () => `No next segment. Remaining shapes: ${e.shapes.length}`), W(t) && !e.shapes.find((m) => m.autoId === t.autoId) && e.shapes.unshift(t), e.shapes.length > 1 && await mn.call(
      this,
      e.shapes,
      t,
      c || e
    );
    const g = kt.call(
      this,
      e.shapes,
      c,
      t
    );
    return await ht.call(this, g, "strip"), { success: !0, firstShapeSegment: c, isHeadCut: l };
  }
  const h = c.cutDirection;
  (e.type === "root" || e.type === "firstShape") && r.length === 1 && (u[h] = e[h], c[h] = e[h]), N([() => k(e.shapes.filter((g) => g.autoId === t.autoId).length, "too many first shapes in segmentShapes").to.equal(1)]), await mn.call(
    this,
    e.shapes,
    t,
    c || e
  );
  const p = kt.call(
    this,
    e.shapes,
    c,
    t
  );
  await ht.call(this, p, "strip");
  const S = e.type === "root" ? e.shapes.filter((g) => ct(g)) : [];
  this.resetShapes(e.shapes, {
    keepScores: !1,
    removeGroups: !0,
    keepGuillotineData: !1,
    keepFirstShapeSampleRotations: !0
  });
  const y = new Set(e.shapes.map((g) => g.autoId)), x = S.filter((g) => !y.has(g.autoId));
  return e.shapes.push(...x), { success: !0, firstShapeSegment: c, isHeadCut: l };
}
async function Jr({ fs: t, segment: e, stock: n, segmentShapes: i, stripShapeBatch: r, forceNoHeadCut: s, options: o }) {
  let a = !0, c, l = !1;
  !s && os.call(this, e) && (l = es.call(this, n.saw, t, e), e.hasHeadCut = l);
  try {
    c = sa.call(
      this,
      t,
      l,
      e,
      n,
      i
    );
  } catch (u) {
    throw D("errors", () => `firstShapeSegment error, fs: ${t.autoId}, 'ssg: ${r}: ${u.message}`), new Error(`issue with createFirstShapeSegment ${u.message}`);
  }
  if (N([() => k(c[c.cutDirection]).to.equal(t[c.cutDirection])]), o?.secondPass) {
    const u = this.shapeList.filter((h) => h.added && h.stock.autoId === n.autoId && h.autoId !== t.autoId);
    if (Te(c, u, n))
      return a = !1, { firstShapeSegment: c, offcuts: [], success: a };
  }
  const f = e.cutDirection, { offcuts: d } = Cn.call(
    this,
    {
      container: e,
      shapes: e.shapes,
      forceNoHeadCut: s
    }
  );
  return e.cutDirection = f, { firstShapeSegment: c, offcuts: d, isHeadCut: l, success: a };
}
async function Je(t, e, n = !1) {
  if (!this.config.sample.enable && n === !1) return !1;
  N([
    () => k(e.shapes.every((a) => W(a) || st(a)), "segment shapes contains groups").to.be.true
  ]);
  let i = [];
  if (e.shapes.length > 1) {
    const a = z(e.cutDirection), c = e[a], l = e.parentSegmentGroupShapes || /* @__PURE__ */ new Set(), f = e.shapes.filter((p) => !l.has(p.id)), d = Js(f, c * 0.05), u = d.reduce((p, S) => p + S.area, 0), h = e.getStock.area;
    if (this.config?.groups?.guillotine?.firstShape && d.length >= 2 && u >= h * 0.8) {
      i = Li({
        shapes: d,
        container: e,
        // Use segment as container
        targetSize: c,
        exact: !1,
        direction: a,
        // Pass Direction ('l' or 'w'), not GroupDirection
        config: this.config,
        counters: this.counters,
        preventDuplicates: !0,
        type: "firstShape",
        maxGroups: this.config.sample.guillotine
      });
      const p = /* @__PURE__ */ new Set();
      i = i.filter((S) => {
        const y = `${S.l}-${S.w}`;
        return p.has(y) ? !1 : (p.add(y), !0);
      }), D("groups", () => `[FIRST SHAPE GROUPS] created ${i.map((S) => S.id).join()} for segment ${e.id} `);
    }
  }
  let r = null;
  t.secondPass && (r = bt(
    this.shapeList,
    e.getStock
  ));
  const s = [...e.shapes], o = gs.call(
    this,
    "guillotine",
    [...s, ...i],
    e,
    r,
    null,
    n
  );
  if (!o.length) return !1;
  for (let a = 0; a < o.length; a++) {
    const c = o[a];
    if (D("guillotine", () => `[FIRST SHAPE] attempting first shape candidate ${c.id} for segment ${e.id}`), a > 1 && o[a - 1].isSameSize(o[a])) {
      c.firstShape.sampleRotations = [];
      continue;
    }
    this.resetShapes(s, {
      removeGroups: !1,
      keepFirstShapeSampleRotations: !0
    }), c.firstShape.isFirstShape = !0, Di(c) && (e.shapes.find((d) => d.autoId === c.autoId) || e.shapes.push(c), e.shapes = Ai(e.shapes, c)), N([
      () => k(ft(e.shapes, `segment ${e.id} before running fs tests for ${c.id}`), "duplicates found in segment").to.be.false,
      () => k(ft(e.shapes), "duplicates found").to.be.false
    ]), await ps.call(
      this,
      t,
      c,
      e
    ), N([() => k(ft(e.shapes), "duplicates found").to.be.false]), c.firstShape.isFirstShape = !1, c.firstShape.sampleRotations = [], e.shapes = s, this.resetShapes(e.shapes, {
      removeGroups: !0,
      keepFirstShapeSampleRotations: !0
    });
    const l = e.shapes.filter((d) => W(d)), f = e.shapes.filter((d) => F(d));
    D("reset", () => `[RESET] RESET SEGMENT ${e.id} BETWEEN FIRST SHAPE CANDIDATES: ${c.id}`, null, [
      {
        type: "Shapes",
        count: l.length,
        added: l.filter((d) => d.added).length,
        ids: l.map((d) => d.id).join(", ")
      },
      {
        type: "Groups",
        count: f.length,
        added: f.filter((d) => d.added).length,
        ids: f.map((d) => d.id).join(", ")
      }
    ]);
  }
  return !0;
}
function Zr(t, e) {
  return new Pt({
    id: "root",
    x: 0,
    y: 0,
    w: t.w,
    l: t.l,
    t: t.t,
    saw: t.saw,
    shapes: e,
    stock: t,
    material: t.material,
    phase: 0,
    type: "root",
    isInitial: !0,
    cutDirection: t.cutPreference
    //match the stock cut preference for root segments
  });
}
function _r(t, e) {
  D("guillotine", () => `[SEG-CREATE] creating new segments for segment ${t.id}, stock ${t.stock.id} at (${t.x},${t.y}) ${t.l}x${t.w}, first shape ${e.id} at (${e.x},${e.y}) ${e.l}x${e.w}, cut direction ${t.cutDirection}`), F(e) && D("guillotine", () => `[SEG-CREATE] first shape ${e.id} is group with ${e.shapes?.length || 0} shapes`, [e.dimensions, e.coords]), N([
    () => k(W(e) || F(e), "first shape is not a shape or group").to.be.true,
    () => k(nt(t), "segment is not a segment class").to.be.true
  ]);
  const { offcuts: n } = Cn.call(this, {
    container: t,
    shapes: t.shapes
  });
  if (!n.length) return;
  D("guillotine", () => `[SEG-CREATE] All new segments for segment ${t.id}:`, null, n.map((l) => ({ id: l.id, x: l.x, y: l.y, l: l.l, w: l.w, dir: l.cutDirection })));
  const i = t.cutDirection === "l" ? "y" : "x", r = z(t.cutPreference), s = n.filter((l) => l[i] < e[i] + e[r]), o = n.find((l) => l[i] >= e[i] + e[r]);
  if (o && (o.rowSegment = !0, s.push(o)), !s?.length) return;
  const a = Rt(i);
  s.sort((l, f) => l[i] < f[i] ? -1 : l[i] > f[i] ? 1 : l[a] < f[a] ? -1 : l[a] > f[a] ? 1 : 0);
  const c = t.shapes.filter((l) => !l.added);
  return s.forEach((l) => {
    const f = Xe(l), d = c.filter((h) => Jt(h, l, null, f)), u = /* @__PURE__ */ new Set();
    l.shapes = d.filter((h) => u.has(h.autoId) ? !1 : (u.add(h.autoId), !0)), N([() => k(l.shapes.every((h) => !h.added), `added shapes in offcut ${l.autoId}`).to.be.true]);
  }), t.children = s, s;
}
function Kr(t, e, n) {
  const { segment: i, shapes: r } = t;
  if (!r.length || !R.greaterThanOrEqualTo(e.l, i.l) || !R.greaterThanOrEqualTo(e.w, i.w))
    return null;
  const s = e.shapes.filter((p) => !p.added && W(p));
  if (s.length < r.length) return null;
  const o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
  for (const p of s) {
    const S = `${p.longSide}|${p.shortSide}|${p.material}`;
    let y = o.get(S);
    if (y || (y = [], o.set(S, y)), y.push(p), p.parentId) {
      let x = a.get(p.parentId);
      x || (x = [], a.set(p.parentId, x)), x.push(p);
    }
    if (p.identicalTo && Array.isArray(p.identicalTo))
      for (const x of p.identicalTo) {
        let g = c.get(x);
        g || (g = [], c.set(x, g)), g.push(p);
      }
  }
  const l = e.x - i.x, f = e.y - i.y, d = /* @__PURE__ */ new Set(), u = [];
  for (const p of r) {
    const S = /* @__PURE__ */ new Set(), y = `${p.longSide}|${p.shortSide}|${p.material}`, x = o.get(y);
    if (x)
      for (const w of x)
        d.has(w) || S.add(w);
    if (p.parentId) {
      const w = c.get(p.parentId);
      if (w)
        for (const b of w)
          d.has(b) || S.add(b);
      const I = a.get(p.parentId);
      if (I)
        for (const b of I)
          d.has(b) || S.add(b);
    }
    if (p.identicalTo && Array.isArray(p.identicalTo))
      for (const w of p.identicalTo) {
        const I = a.get(w);
        if (I)
          for (const b of I)
            d.has(b) || S.add(b);
      }
    const g = [];
    for (const w of S)
      w.isIdentical(p, !1) && g.push(w);
    let m = null;
    if (g.length === 1 ? m = g[0] : g.length > 1 && (m = g.find((w) => w.parentId === p.parentId) || g[0]), !m) return null;
    d.add(m), u.push({ source: p, target: m });
  }
  const h = [];
  for (const { source: p, target: S } of u)
    S.update({
      x: p.x + l,
      y: p.y + f,
      l: p.l,
      w: p.w,
      rot: p.rot,
      placementOrder: this.counters.placement++
    }), S.addToStock(n), h.push(S);
  return D("guillotine", () => `Strip duplicated: ${h.length} shapes placed in segment ${e.id} (offset x=${l}, y=${f})`), {
    segment: e,
    firstShape: t.firstShape,
    shapes: h
  };
}
function Qr(t, e, n, i, r, s, o, a, c) {
  if (!e || e.length <= 1) return !0;
  try {
    e.sort((b, $) => b[o] - $[o]);
    let l = 0, f = -1 / 0;
    for (const b of e)
      b[o] > f + i && (l += b[a] + i, f = b[o] + b[a]);
    if (l > t[a])
      return console.warn("Preliminary check: shapes would not fit within stock after rearrangement"), !1;
    const d = [], u = i / 2;
    let h, p, S = !1, y = 0, x = 0, g = 0;
    const m = 3;
    for (const b of e) {
      if (!ln(b)) continue;
      S || (h = b[o], g = 0), p = b[o] + b[a];
      const $ = b[o] + b[a] + u, P = new ce(
        r === "x" ? {
          x1: 0,
          x2: t[s],
          y1: $,
          y2: $
        } : {
          x1: $,
          x2: $,
          y1: 0,
          y2: t[s]
        }
      );
      if (yn(P, t, n))
        if (S = !0, g++, g >= m)
          S = !1, console.warn(`Forced strip creation after ${m} consecutive collisions`);
        else
          continue;
      else
        S = !1, g = 0;
      const T = n.filter((E) => R.greaterThanOrEqualTo(E[o], h) && R.lessThan(E[o], p));
      if (!T.length) continue;
      const L = T.length > 0 ? T.reduce((E, A) => {
        const G = E[r] + E[s], C = A[r] + A[s];
        return R.equalTo(G, C) ? E[s] > A[s] ? E : A : G > C ? E : A;
      }) : T[0];
      if (!L) continue;
      const v = L[r] + L[s], O = T.length > 0 ? T.reduce((E, A) => {
        const G = E[o] + E[a], C = A[o] + A[a];
        return R.equalTo(G, C) ? E[a] > A[a] ? E : A : G > C ? E : A;
      }) : T[0];
      if (!O) continue;
      let q = O[o] + O[a];
      p > q && (q = p);
      const Y = q - h;
      d.push({
        stripStartPoint: h,
        stripEndPoint: p,
        furthestPrimaryPoint: v,
        furthestOrderingPoint: q,
        shapesInThisRow: T,
        width: Y
      });
    }
    if (!d.length)
      return console.warn("No valid strips found after analysis"), !0;
    const w = /* @__PURE__ */ new Map();
    d.forEach((b) => {
      b.shapesInThisRow.forEach(($) => {
        w.set($.autoId, $[o]);
      });
    }), d.sort((b, $) => R.equalTo(b.furthestPrimaryPoint, $.furthestPrimaryPoint) ? $.width - b.width : $.furthestPrimaryPoint - b.furthestPrimaryPoint);
    let I = 0;
    for (const b of d)
      I += b.furthestOrderingPoint - b.stripStartPoint + i;
    if (I > t[a])
      return console.warn("Total arrangement would exceed stock dimensions"), !1;
    for (const b of d) {
      b.shapesInThisRow.sort(($, P) => $.placementOrder - P.placementOrder);
      for (let $ = 0; $ < b.shapesInThisRow.length; $++) {
        const P = b.shapesInThisRow[$], T = P[o] - b.stripStartPoint, L = x + T;
        if (L + P[a] > t[a])
          return console.warn(`Shape ${P.id} would exceed stock boundaries after rearrangement`), hi(d, w, o), !1;
        const v = P[o];
        P[o] = L, P.placementOrder = $ + y, kn(P) === 1 && R.equalTo(P[r], 0) && Me(P, s), !R.equalTo(v, L) && c && (yr(c, P), un(c, P));
      }
      if (y += b.shapesInThisRow.length, x += b.furthestOrderingPoint - b.stripStartPoint + i, x > t[a])
        return console.warn("Rearrangement exceeds stock dimensions"), hi(d, w, o), !1;
    }
    return !0;
  } catch (l) {
    return console.error("Error during shape rearrangement:", l), !1;
  }
}
function hi(t, e, n) {
  t.forEach((i) => {
    i.shapesInThisRow.forEach((r) => {
      e.has(r.autoId) && (r[n] = e.get(r.autoId));
    });
  });
}
function ta(t, e, n) {
  if (!this.config?.guillotine?.strips?.rearrange || t.saw.guillotineOptions?.strategy === "time") return !1;
  const r = t.bladeWidth;
  if (R.equalTo(r, 0) || r < 0)
    return console.warn("Invalid blade width for rearrangement"), !1;
  const s = bt(e, t);
  if (!s?.length) return !1;
  const o = t.cutPreference;
  if (o !== "l" && o !== "w")
    return console.warn("Invalid primary dimension:", o), !1;
  const a = o === "l" ? "x" : "y", c = s.filter(
    (u) => cn(u, 1) && R.equalTo(u[a], 0)
  );
  if (!c.length) return !1;
  const l = z(o), f = o === "l" ? "y" : "x";
  return c.reduce((u, h) => u + h[l], 0) > t[l] ? (console.warn("Total strip width exceeds stock dimensions"), !1) : Qr(
    t,
    c,
    s,
    r,
    a,
    o,
    f,
    l,
    n
  );
}
async function ea(t, e, n, i) {
  if (!this.config?.guillotine?.secondPass) {
    console.debug("Corner squeeze disabled in config");
    return;
  }
  if (n.length === e.length) {
    console.debug("All shapes already added, skipping corner squeeze");
    return;
  }
  if (t.saw.guillotineOptions?.strategy === "time") {
    console.debug("Time strategy selected, skipping corner squeeze");
    return;
  }
  t.rootSegment = i;
  const s = t.bladeWidth;
  if (R.equalTo(s, 0) || s < 0) {
    console.warn("Invalid blade width for corner squeeze");
    return;
  }
  const o = n.filter((u) => cn(u, 1));
  if (!o.length) {
    console.debug("No strip shapes found for corner squeeze");
    return;
  }
  const a = t.cutPreference;
  if (a !== "l" && a !== "w") {
    console.warn("Invalid primary dimension:", a);
    return;
  }
  const c = a === "l" ? "x" : "y", l = z(a), f = a === "l" ? "y" : "x";
  o.sort((u, h) => u[f] - h[f]);
  let d = 0;
  for (let u = 0; u < o.length; u++) {
    let h = function(E, A, G, C) {
      return E[A] + E[G] + C;
    }, p = function(E, A, G, C, M) {
      return M > 0 ? M - A[G] : E[C] - A[G];
    };
    const S = o[u], y = u > 0 ? bt(this.shapeList, t) : n, x = at(e, t);
    if (!x.length) {
      console.debug("No remaining shapes to place, exiting corner squeeze");
      break;
    }
    const g = y.filter((E) => !cn(E, 0) && Zt(E, S, f));
    g.some((E) => E.autoId === S.autoId) || g.push(S);
    let m;
    g.length > 0 ? m = g.reduce((E, A) => E[c] + E[a] > A[c] + A[a] ? E : E[c] + E[a] < A[c] + A[a] ? A : E[f] < A[f] ? E : A) : m = S;
    const w = m[c] + m[a] + s;
    let I;
    c === "x" ? I = new ce({
      x1: w,
      x2: w,
      y1: m[f],
      y2: t[l]
    }) : I = new ce({
      x1: m[f],
      x2: t[l],
      y1: w,
      y2: w
    });
    const b = yn(I, t, y, !0);
    if (!Array.isArray(b)) {
      console.warn("Expected collision shapes array but got:", typeof b);
      continue;
    }
    const $ = b;
    let P = 0;
    if ($?.length && (P = $.reduce((A, G) => A[f] < G[f] ? A : G)[f] - s, P <= m[f])) {
      console.debug("Invalid segment end point calculation, skipping this squeeze attempt");
      continue;
    }
    const T = typeof Z < "u" && typeof Z.segments < "u" ? Z.segments === 0 ? "root" : (Z.segments + 1).toString() : "squeeze-" + Date.now();
    typeof Z < "u" && typeof Z.segments < "u" && Z.segments++;
    const L = h(
      m,
      c,
      a,
      s
    ), v = p(
      t,
      m,
      f,
      l,
      P
    ), O = t[a] - L, q = {
      id: T,
      shapes: x,
      stock: t,
      saw: t.saw,
      material: t.material,
      cutDirection: z(t.cutPreference),
      phase: 0,
      stockType: t?.saw?.stockType,
      t: t.t,
      // Assign all dimensions and positions
      x: c === "x" ? L : m.x,
      y: c === "y" ? L : m.y,
      l: c === "x" ? O : t.l,
      w: c === "y" ? O : t.w,
      [c]: L,
      [f]: m[f],
      [a]: O,
      [l]: v
    };
    if (q.l <= 0 || q.w <= 0) {
      console.debug("Skipping segment with invalid dimensions:", q.l, q.w);
      continue;
    }
    let Y;
    try {
      Y = new Pt(q);
    } catch (E) {
      console.warn(`Corner squeeze segment creation error - ${E.message} for shape: ${m.id}`);
      continue;
    }
    try {
      await Dn.call(
        this,
        { secondPass: !0 },
        t,
        Y
      ), d++;
    } catch (E) {
      console.warn(`Error during segment calculations: ${E.message}`);
    }
  }
  d > 0 && console.debug(`Corner squeeze completed with ${d} successful placements`);
}
function na(t, e, n, i = null) {
  if (!e)
    throw new Error("no segment provided to assignStripShape");
  if (!t) throw new Error("no shape provided to assignStripShape");
  t.resetBothScores(), t.x = e.x, t.y = e.y;
  const r = this.shapeList?.filter(
    (s) => s.added && !F(s) && s.stock?.autoId === n.autoId && s.autoId !== t.autoId
  ) || [];
  if (F(t)) {
    const s = new Set(t.shapes?.map((a) => a.autoId)), o = r.filter((a) => !s.has(a.autoId));
    if (o.length > 0 && Te(t, o, n))
      return D("guillotine", `[assignStripShape] PREVENTED — group ${t.id} would collide at (${t.x},${t.y}) ${t.l}x${t.w} on stock ${n.id}`), t.x = 0, t.y = 0, !1;
    t.initShapes(t.shapes), t.placeMyShapes(n);
  }
  return i !== null && !F(t) ? At(t, i, n) : i !== null && F(t) && t.rot !== i && D("groups", `[assignStripShape] WARNING: Group ${t.id} has computed rot=${t.rot} but requested rotation=${i} - groups cannot be rotated!`), !F(t) && r.length > 0 && Te(t, r, n) ? (D("guillotine", `[assignStripShape] PREVENTED — shape ${t.id} would collide at (${t.x},${t.y}) ${t.l}x${t.w} on stock ${n.id}`), t.x = 0, t.y = 0, !1) : (D("calculations", `assigning first shape ${t.id}, x: ${t.x}, y: ${t.y}, rot: ${i}`), t.guillotineState || (t.guillotineState = new $e({})), t.firstShape.isFirstShape = !0, pr(t), Me(t, e.cutDirection), Et() && (F(t) || N([() => k(t.rot).to.equal(i)])), t.addToStock(n), N([() => k(Mi(this.shapeList.filter((s) => s.stock?.id === n.id))).length.to.be(0)]), t);
}
async function ps(t, e, n, i = null) {
  if (N([
    () => k(W(e) || F(e), "runFirstShapeRotationTests requires shape or group").to.be.true,
    () => k(nt(n)).to.be.true
  ]), !(wt(i) && !qt(e, i, n)))
    for (const r of e.firstShape.sampleRotations)
      await $s.call(
        this,
        e,
        n,
        r,
        fn,
        {
          options: t,
          fs: e,
          fsRotation: null,
          segment: n
        },
        "fsRotation"
      );
}
function ia(t, e, n) {
  let i;
  return n ? (i = t.cutPreference, Me(e, z(i)), t.hasHeadCut = !0) : (R.equalTo(e[t.cutDirection], t[t.cutDirection]) ? i = t.cutDirection : i = re(t) ? z(t.cutPreference) : z(t.cutDirection), Me(e, z(i))), N([
    () => k(St(e)).to.not.equal(i)
  ]), i;
}
function sa(t, e, n, i, r) {
  n.hasHeadCut = e;
  const s = ia(n, t, e), o = {
    l: s === "w" ? n.l : t.l,
    w: s === "w" ? t.w : n.w
  }, a = new Pt({
    x: t.x,
    y: t.y,
    l: o.l,
    w: o.w,
    t: n.t,
    parent: n,
    stock: i,
    material: i.material,
    shapes: r,
    firstShape: t,
    id: "fs-" + t.id,
    phase: n.phase + 1,
    preventAutoRotation: !0,
    saw: n.stock.saw,
    cutDirection: s,
    hasHeadCut: e,
    type: "firstShape"
  });
  if (a.shapes.unshift(t), !a)
    throw new Error("firstShapeSegment not created");
  return N([
    () => k(a.cutDirection, `segment cut direction ${n.id} is the same as first shape ${t.id}`).to.not.equal(St(t))
  ]), D("cuts", `FIRST SHAPE SEGMENT [${a?.parent?.type === "root" ? "R" : a.parent.id}]->[${a.autoId}] ${e ? "HEAD" : "NORM"} ${$t(a.l, 4)}x${$t(a.w, 4)}, SEG DIR ${a.cutDirection.toUpperCase()}, SHAPE DIR ${St(t).toUpperCase()}`), a;
}
function oa(t, e, n, i, r = null, s) {
  if (!e.length) return [];
  N([
    () => k(e.length).to.be.greaterThan(0),
    () => k(t.every((y) => y.added === !1), "unplaced shapes contain added shapes").to.be.true
  ]);
  const o = i.saw?.guillotineOptions, a = i.cutPreference ? z(i.cutPreference) : null, c = re(n) && o?.limitStripDimensions !== !1 && a ? Ri(e, a, i[a]) : null;
  let l = [];
  const f = Xe(n);
  for (const y of e) {
    const x = Ne(y, i);
    if (y.firstShape.sampleRotations = [], !F(y))
      for (const g of x) {
        let m = 1;
        At(y, g, i);
        const w = y.getPriority(i);
        let I = !0;
        if (At(y, g, i), N([
          () => k(y.rot, `unique shape ${y.id} rotation (${y.rot}) incorrect for (${g})`).equal(g)
        ]), !Jt(y, n, g, f))
          continue;
        if (r?.length) {
          y.x = n.x, y.y = n.y;
          for (const $ of r)
            if (Oi(y, $, i)) {
              I = !1;
              break;
            }
        }
        if (!I) continue;
        const b = y.aspect;
        if (b < 0.1) {
          const $ = i.cutPreference;
          if (y[$] >= 0.7 * i[$] && y[$] > y[z($)]) {
            const P = Math.max(1, 10 * (1 - b * 2));
            m *= P;
          }
        }
        c !== null && y[a] > c && (m *= 0.1), l.push({
          id: y.id,
          shape: y,
          rotation: g,
          score: m,
          priority: w
        }), N([
          () => k(Jt(y, n, g), "canditate will not fit").to.be.true
        ]);
      }
  }
  l.sort((y, x) => y.score !== x.score ? x.score - y.score : y.priority !== x.priority ? x.priority - y.priority : x.shape.area - y.shape.area);
  const d = n.cutDirection, u = i[d], h = this.config.guillotine.firstShapeFullSizeThreshold, p = l.filter((y) => y.shape[d] >= h * u);
  if (p.length > 0) {
    const y = p[0];
    return y.shape.firstShape.sampleRotations = [y.rotation], [y.shape];
  }
  l = l.slice(0, this.config.sample.guillotine);
  const S = [];
  for (const y of l)
    S.find((g) => g.id === y.id) || S.push(y.shape), y.shape.firstShape.sampleRotations.push(y.rotation), N([
      () => k(y.shape.firstShape.sampleRotations.length).to.be.lessThanOrEqual(2),
      () => k(y.shape.firstShape.sampleRotations[0]).to.not.equal(y.shape.firstShape.sampleRotations[1])
    ]);
  return o?.limitStripDimensions === !1 && S.push(...s), S;
}
function ra(t, e, n) {
  if (!t.length) return [];
  if (typeof e != "number") throw new Error("getAllocatedStripShapeBatch - stripShapeBatchNumber must be a number");
  if (!n) throw new Error("getAllocatedStripShapeBatch - stock is required");
  const i = t.filter((o) => {
    if (o.added) return !1;
    const a = o.guillotineState.getStripShapeBatchData(e);
    return !(a === !1 || a.rerunning || a.stockId !== n.autoId);
  }), r = /* @__PURE__ */ new Set();
  return i.filter((o) => r.has(o.autoId) ? !1 : (r.add(o.autoId), !0));
}
function aa(t, e, n) {
  ca(t.shapes);
  const i = Zs.call(this, t, e, n);
  return i || !1;
}
function di(t, e = null, n, i = !1) {
  let r;
  if (e !== null) {
    const s = t.guillotineState.getStripShapeBatchData(e);
    if (s === !1)
      throw new Error("getStripShapeRotation - could not find strip shape group");
    r = s.rot;
  }
  if (N([() => k([0, 1].includes(r)).to.be.true]), i && r !== t.rot) {
    if (F(t) || !qt(t, r, n)) return r;
    if (At(t, r, n) === !1)
      throw new Error("getStripShapeRotation - could not rotate strip shape correctly");
  }
  return r;
}
function la(t, e, n, i, r) {
  const s = n.cutPreference === "l" ? "l" : "w", o = new Set(r.map((d) => d[s]));
  N([
    () => k(o.size).to.be.greaterThan(0)
  ]);
  const a = r.filter((d) => ct(d)), c = r.filter((d) => W(d));
  if (c.length < 2)
    return r;
  const l = [...c], f = [];
  for (const d of o) {
    const u = [], h = d * (1 - this.config.groups.tolerance);
    let p = d * (1 + this.config.groups.tolerance);
    p > i[s] && (p = i[s]);
    for (let S = l.length - 1; S >= 0; S--) {
      const y = l[S];
      !y.getMinSpacing(n.saw, !0) && y[s] <= n[s] && y[s] >= h && y[s] <= p && (u.push(y), l.splice(S, 1));
    }
    u.length > 0 && f.push(u);
  }
  if (f.length > 0) {
    const d = [];
    for (const u of f) {
      if (u.length < 2) continue;
      const h = u[0], p = h.guillotineState.getStripShapeBatchData(t);
      if (p === !1)
        throw new Error("no reference shape group");
      let S;
      try {
        const y = u.slice(0, -1).reduce(($, P) => $ + P.getMinSpacing(n), 0), x = u.reduce(($, P) => $ + P[e], 0);
        if (y + x > n[e]) continue;
        const g = h.l, m = h.w, b = `ss-${[...new Set(u.map(($) => $.parentId || $.id))].sort().join("-")}_${this.counters.group++}`;
        S = new tn({
          l: g,
          w: m,
          id: b,
          shapes: u,
          direction: _s(e),
          container: n,
          type: "strip"
        });
      } catch (y) {
        console.log(y), S = null;
      }
      if (S) {
        const y = Math.min(...u.map((g) => {
          const m = g.guillotineState.getStripShapeBatchData(t);
          return m ? m.order : 1 / 0;
        }));
        S.guillotineState.setStripShapeBatchGroup(t, {
          stockId: n.autoId,
          dimension: S[e],
          rot: S.rot,
          order: y,
          priorityShape: p.priorityShape
        });
        const x = new Set(S.shapes.map((g) => g.id));
        d.push(S), i.shapes = i.shapes.filter((g) => !x.has(g.id)), i.shapes.push(S), r = r.filter((g) => !x.has(g.id));
      }
    }
    r = [...d, ...a, ...r.filter((u) => W(u))];
  } else
    r = [...a, ...c];
  return r;
}
function ca(t) {
  for (const e of t) e.guillotineState.resetStripShapeBatchGroups();
}
function ua(t, e) {
  const n = e.getStock, i = 0.1 * n.l;
  function r(a) {
    return t.some((c) => a.parentId === c.parentId && !c.added) && On(a, n) && a.willItFit(e);
  }
  const s = t.some((a) => On(a, n) && a.willItFit(e) && a.l >= i || a.w >= i);
  return t.filter((a) => a.added ? !1 : (st(a) && a.updateShapeSpacing(e), t.length === 1 || !s ? r(a) : a.l < i && a.w < i ? !1 : r(a)));
}
function gs(t, e, n, i = null, r = !1) {
  if (!this.config.sample.enable && r === !1) return [];
  if (!t) throw new Error("getFirstShapeSample - type is required");
  N([
    () => k(t === "guillotine" || t === "efficiency", "type not correct").to.be.true,
    () => k(Ks(n), "should be a container").to.be.true
  ]);
  const s = Dt(e, !1, !0);
  if (!s.length) return [];
  const o = e.filter((h) => F(h)), a = [], c = n.getStock;
  let l = ua(s, n);
  if (!l.length) return [];
  if (t === "guillotine")
    l = oa.call(
      this,
      e,
      l,
      n,
      c,
      i,
      o
    );
  else if (t === "efficiency") {
    l.push(...o);
    const h = l.filter((p) => p.getPriority(c) > 0);
    h.length && (l = h), l.sort(vt.aspect);
  }
  const f = l.filter((h) => F(h)), d = l.filter((h) => !F(h)), u = [...f, ...d];
  for (const h of u)
    if (F(h)) {
      if (!h.willItFit(n)) {
        D("groups", `[getFirstShapeSample] Group ${h.id} does NOT fit container after calculateGroupDimensions - skipping (group: ${h.l}x${h.w}, container: ${n.l}x${n.w})`);
        continue;
      }
      h.firstShape.sampleRotations = [h.rot.valueOf()], a.push(h);
    } else {
      const p = e.find((S) => S.parentId === h.parentId && !S.added && S.constructor.name === h.constructor.name);
      if (p && (p.firstShape.sampleRotations = Ne(p, n), a.push(p)), a.length >= (t === "guillotine" ? this.config.sample.guillotine : this.config.sample.efficiency))
        break;
    }
  return D("firstShapes", `candidates for stock ${n.getStock?.id}, ${nt(n) ? "segment " + n.id : ""}`, a.map((h) => ({ id: h.id, autoId: h.autoId, rotations: h.firstShape.sampleRotations }))), N([() => k(ft(a), "duplicate ids found in candidates with getFirstShapeSample").to.false]), a;
}
function Mt(t) {
  let e = 0;
  const n = t.length;
  for (let i = 0, r = n - 1; i < n; r = i++)
    e += (t[r].x + t[i].x) * (t[r].y - t[i].y);
  return e / 2;
}
function ms(t) {
  return Math.abs(Mt(t));
}
function dt(t) {
  let e = 1 / 0, n = 1 / 0, i = -1 / 0, r = -1 / 0;
  for (const s of t)
    s.x < e && (e = s.x), s.y < n && (n = s.y), s.x > i && (i = s.x), s.y > r && (r = s.y);
  return {
    minX: e,
    minY: n,
    maxX: i,
    maxY: r,
    width: i - e,
    height: r - n
  };
}
function Yt(t, e) {
  if (e === 0) return t;
  let n = 0, i = 0;
  for (const o of t)
    n += o.x, i += o.y;
  n /= t.length, i /= t.length;
  const r = Math.cos(e), s = Math.sin(e);
  return t.map((o) => {
    const a = o.x - n, c = o.y - i;
    return {
      x: r * a - s * c + n,
      y: s * a + r * c + i
    };
  });
}
function he(t, e, n) {
  return t.map((i) => ({
    x: i.x + e,
    y: i.y + n
  }));
}
function fa(t) {
  return t.map((e) => ({
    x: -e.x,
    y: -e.y
  }));
}
function Wt(t) {
  const e = dt(t);
  return he(t, -e.minX, -e.minY);
}
function _t(t, e) {
  let n = !1;
  const i = e.length;
  for (let r = 0, s = i - 1; r < i; s = r++) {
    const o = e[r].x, a = e[r].y, c = e[s].x, l = e[s].y;
    a > t.y != l > t.y && t.x < (c - o) * (t.y - a) / (l - a) + o && (n = !n);
  }
  return n;
}
function Lt(t, e) {
  return t.minX < e.maxX && t.maxX > e.minX && t.minY < e.maxY && t.maxY > e.minY;
}
function ha(t, e) {
  if (t.length <= 3) return t;
  const n = hn(t, e);
  if (n.length > 0) {
    const i = n[0], r = n[n.length - 1];
    (i.x !== r.x || i.y !== r.y) && n.push({ x: i.x, y: i.y });
  }
  return n;
}
function hn(t, e) {
  if (t.length <= 2) return t;
  let n = 0, i = 0;
  const r = t[0], s = t[t.length - 1];
  for (let o = 1; o < t.length - 1; o++) {
    const a = da(t[o], r, s);
    a > n && (n = a, i = o);
  }
  if (n > e) {
    const o = hn(t.slice(0, i + 1), e), a = hn(t.slice(i), e);
    return o.slice(0, -1).concat(a);
  } else
    return [r, s];
}
function da(t, e, n) {
  const i = n.x - e.x, r = n.y - e.y, s = i * i + r * r;
  if (s === 0) {
    const o = t.x - e.x, a = t.y - e.y;
    return Math.sqrt(o * o + a * a);
  }
  return Math.abs(r * t.x - i * t.y + n.x * e.y - n.y * e.x) / Math.sqrt(s);
}
function Kt(t) {
  const e = t.length;
  if (e < 3) return !1;
  let n = null;
  for (let i = 0; i < e; i++) {
    const r = t[i], s = t[(i + 1) % e], o = t[(i + 2) % e], a = (s.x - r.x) * (o.y - s.y) - (s.y - r.y) * (o.x - s.x);
    if (a !== 0) {
      if (n === null)
        n = a > 0 ? 1 : -1;
      else if ((a > 0 ? 1 : -1) !== n)
        return !1;
    }
  }
  return !0;
}
function pi(t) {
  let e = t.length > 3 && t[0].x === t[t.length - 1].x && t[0].y === t[t.length - 1].y ? t.slice(0, -1) : t.slice();
  Mt(e) < 0 && (e = e.slice().reverse());
  const n = [], i = e.map((s, o) => o);
  let r = i.length * 2;
  for (; i.length > 3 && r-- > 0; ) {
    let s = !1;
    for (let o = 0; o < i.length; o++) {
      const a = i[(o - 1 + i.length) % i.length], c = i[o], l = i[(o + 1) % i.length], f = e[a], d = e[c], u = e[l];
      if ((d.x - f.x) * (u.y - f.y) - (d.y - f.y) * (u.x - f.x) <= 0) continue;
      let p = !1;
      for (const S of i)
        if (!(S === a || S === c || S === l) && pa(e[S], f, d, u)) {
          p = !0;
          break;
        }
      if (!p) {
        n.push([f, d, u]), i.splice(o, 1), s = !0;
        break;
      }
    }
    if (!s) break;
  }
  return i.length === 3 && n.push([e[i[0]], e[i[1]], e[i[2]]]), n;
}
function pa(t, e, n, i) {
  const r = (t.x - n.x) * (e.y - n.y) - (e.x - n.x) * (t.y - n.y), s = (t.x - i.x) * (n.y - i.y) - (n.x - i.x) * (t.y - i.y), o = (t.x - e.x) * (i.y - e.y) - (i.x - e.x) * (t.y - e.y), a = r < 0 || s < 0 || o < 0, c = r > 0 || s > 0 || o > 0;
  return !(a && c);
}
function gi(t, e) {
  let n = Ft(t), i = Ft(e);
  Mt(n) < 0 && (n = n.slice().reverse()), Mt(i) < 0 && (i = i.slice().reverse());
  const r = n.length, s = i.length;
  let o = 0;
  for (let d = 1; d < r; d++)
    (n[d].y < n[o].y || n[d].y === n[o].y && n[d].x < n[o].x) && (o = d);
  let a = 0;
  for (let d = 1; d < s; d++)
    (i[d].y < i[a].y || i[d].y === i[a].y && i[d].x < i[a].x) && (a = d);
  const c = [];
  let l = 0, f = 0;
  for (; l < r || f < s; ) {
    const d = (o + l) % r, u = (a + f) % s;
    c.push({
      x: n[d].x + i[u].x,
      y: n[d].y + i[u].y
    });
    const h = (o + l + 1) % r, p = (a + f + 1) % s, S = n[h].x - n[d].x, y = n[h].y - n[d].y, x = i[p].x - i[u].x, g = i[p].y - i[u].y, m = S * g - y * x;
    l >= r ? f++ : f >= s || m > 0 ? l++ : (m < 0 || l++, f++);
  }
  return c;
}
function Ft(t) {
  return t.length > 1 && t[0].x === t[t.length - 1].x && t[0].y === t[t.length - 1].y ? t.slice(0, -1) : t;
}
function ga(t, e) {
  if (e <= 0) return t;
  const n = Ft(t), i = n.length;
  if (i < 3) return t;
  const s = Mt(n) >= 0 ? n : n.slice().reverse(), o = [];
  for (let c = 0; c < i; c++) {
    const l = s[c], f = s[(c + 1) % i], d = f.x - l.x, u = f.y - l.y, h = Math.sqrt(d * d + u * u);
    if (h === 0) continue;
    const p = u / h, S = -d / h;
    o.push({
      px: l.x + p * e,
      py: l.y + S * e,
      dx: d,
      dy: u
    });
  }
  if (o.length < 3) return t;
  const a = [];
  for (let c = 0; c < o.length; c++) {
    const l = o[c], f = o[(c + 1) % o.length], d = ma(
      l.px,
      l.py,
      l.px + l.dx,
      l.py + l.dy,
      f.px,
      f.py,
      f.px + f.dx,
      f.py + f.dy
    );
    d && a.push(d);
  }
  return a;
}
function ma(t, e, n, i, r, s, o, a) {
  const c = (t - n) * (s - a) - (e - i) * (r - o);
  if (Math.abs(c) < 1e-10) return null;
  const l = ((t - r) * (s - a) - (e - s) * (r - o)) / c;
  return {
    x: t + l * (n - t),
    y: e + l * (i - e)
  };
}
function ya(t, e, n = 0) {
  const i = fa(e), r = Kt(Ft(t)), s = Kt(Ft(i));
  let o;
  if (r && s)
    o = [gi(t, i)];
  else {
    const a = r ? [Ft(mi(t))] : pi(t), c = s ? [Ft(mi(i))] : pi(i);
    o = [];
    for (const l of a)
      for (const f of c)
        o.push(gi(l, f));
  }
  return n > 0 && (o = o.map((a) => ga(a, n))), o;
}
function xa(t, e, n) {
  const i = t - n.width, r = e - n.height;
  return i < 0 || r < 0 ? [] : [
    { x: 0, y: 0 },
    { x: i, y: 0 },
    { x: i, y: r },
    { x: 0, y: r },
    { x: 0, y: 0 }
  ];
}
function mi(t) {
  return Mt(t) < 0 ? t.slice().reverse() : t;
}
function Ge(t) {
  let e = 0, n = 0;
  for (const i of t)
    e += i.x, n += i.y;
  return {
    x: e / t.length,
    y: n / t.length
  };
}
function Sa(t, e, n, i) {
  const r = ye(n, i, t), s = ye(n, i, e), o = ye(t, e, n), a = ye(t, e, i);
  return !!((r > 0 && s < 0 || r < 0 && s > 0) && (o > 0 && a < 0 || o < 0 && a > 0) || r === 0 && xe(n, i, t) || s === 0 && xe(n, i, e) || o === 0 && xe(t, e, n) || a === 0 && xe(t, e, i));
}
function ye(t, e, n) {
  return (e.x - t.x) * (n.y - t.y) - (e.y - t.y) * (n.x - t.x);
}
function xe(t, e, n) {
  return Math.min(t.x, e.x) <= n.x && n.x <= Math.max(t.x, e.x) && Math.min(t.y, e.y) <= n.y && n.y <= Math.max(t.y, e.y);
}
function Fe(t, e, n = 0) {
  const i = t.length, r = e.length;
  if (i < 3 || r < 3) return !1;
  const s = t[0].x === t[i - 1].x && t[0].y === t[i - 1].y, o = e[0].x === e[r - 1].x && e[0].y === e[r - 1].y, a = s ? i - 1 : i, c = o ? r - 1 : r, l = n * n;
  for (let f = 0; f < a; f++) {
    const d = t[f], u = t[(f + 1) % i];
    for (let h = 0; h < c; h++) {
      const p = e[h], S = e[(h + 1) % r];
      if (Sa(d, u, p, S) || n > 0 && wa(d, u, p, S) < l)
        return !0;
    }
  }
  return !!(_t(t[0], e) || _t(e[0], t));
}
function se(t, e, n) {
  const i = n.x - e.x, r = n.y - e.y, s = i * i + r * r;
  if (s === 0) {
    const d = t.x - e.x, u = t.y - e.y;
    return d * d + u * u;
  }
  let o = ((t.x - e.x) * i + (t.y - e.y) * r) / s;
  o < 0 ? o = 0 : o > 1 && (o = 1);
  const a = e.x + o * i, c = e.y + o * r, l = t.x - a, f = t.y - c;
  return l * l + f * f;
}
function wa(t, e, n, i) {
  return Math.min(
    se(t, n, i),
    se(e, n, i),
    se(n, t, e),
    se(i, t, e)
  );
}
function ba(t, e, n, i) {
  const r = e.x - t.x, s = e.y - t.y, o = i.x - n.x, a = i.y - n.y, c = r * a - s * o;
  if (Math.abs(c) < 1e-10) return null;
  const l = ((n.x - t.x) * a - (n.y - t.y) * o) / c, f = ((n.x - t.x) * s - (n.y - t.y) * r) / c;
  return l < 0 || l > 1 || f < 0 || f > 1 ? null : {
    x: t.x + l * r,
    y: t.y + l * s
  };
}
function yi(t, e) {
  const n = [], i = t.length - (t[0].x === t[t.length - 1].x && t[0].y === t[t.length - 1].y ? 1 : 0), r = e.length - (e[0].x === e[e.length - 1].x && e[0].y === e[e.length - 1].y ? 1 : 0);
  for (let s = 0; s < i; s++) {
    const o = t[s], a = t[(s + 1) % t.length];
    for (let c = 0; c < r; c++) {
      const l = e[c], f = e[(c + 1) % e.length], d = ba(o, a, l, f);
      d && n.push(d);
    }
  }
  return n;
}
const Ia = {
  kerfWidth: 0,
  leadIn: { enabled: !0, type: "line", length: 2, angle: 45 },
  leadOut: { enabled: !0, type: "line", length: 2, angle: 45 },
  climbMilling: !0,
  optimization: { method: "2-opt" },
  proximity: { enabled: !0, threshold: 5 },
  commonLine: { enabled: !0, tolerance: 0.5, minOverlapLength: 5 }
};
function xi(t, e) {
  if (e <= 0 || t.length < 3) return [t];
  const n = t.length, i = [];
  for (let r = 0; r < n; r++) {
    const s = t[(r - 1 + n) % n], o = t[r], a = t[(r + 1) % n], c = o.x - s.x, l = o.y - s.y, f = a.x - o.x, d = a.y - o.y, u = Math.sqrt(c * c + l * l) || 1, h = Math.sqrt(f * f + d * d) || 1, p = l / u, S = -c / u, y = d / h, x = -f / h;
    let g = p + y, m = S + x;
    const w = Math.sqrt(g * g + m * m);
    w < 1e-10 ? (g = p, m = S) : (g /= w, m /= w);
    const I = p * g + S * m, b = I > 0.1 ? e / I : e * 2;
    i.push({
      x: o.x + g * b,
      y: o.y + m * b
    });
  }
  return [i];
}
function $a(t, e) {
  const i = Mt(t) > 0;
  return e && !i || !e && i ? t.slice().reverse() : t;
}
function dn(t, e) {
  const n = e.x - t.x, i = e.y - t.y, r = Math.sqrt(n * n + i * i);
  return r === 0 ? { x: 0, y: -1 } : {
    x: i / r,
    y: -n / r
  };
}
function Ca(t, e, n) {
  let i = 0, r = -1 / 0;
  const s = t.length;
  for (let c = 0; c < s; c++) {
    const l = t[c], f = t[(c + 1) % s], d = {
      x: (l.x + f.x) / 2,
      y: (l.y + f.y) / 2
    }, u = dn(l, f), h = d.x, p = e.l - d.x, S = d.y, y = e.w - d.y, x = Math.min(h, p, S, y), g = d.x - e.l / 2, m = d.y - e.w / 2, w = Math.sqrt(g * g + m * m) || 1, I = u.x * (g / w) + u.y * (m / w);
    let b = -x + I * 10;
    if (n) {
      const $ = Math.sqrt(
        (n.x - d.x) ** 2 + (n.y - d.y) ** 2
      );
      b += -$ * 0.5;
    }
    b > r && (r = b, i = c);
  }
  const o = t[i], a = t[(i + 1) % s];
  return {
    edgeIndex: i,
    midpoint: {
      x: (o.x + a.x) / 2,
      y: (o.y + a.y) / 2
    },
    normal: dn(o, a)
  };
}
function ys(t, e, n, i) {
  if (!n.leadIn.enabled || t.length < 3)
    return { leadIn: [], entryIndex: 0 };
  const { edgeIndex: r, midpoint: s, normal: o } = Ca(t, e, i), a = n.leadIn.length, c = n.leadIn.angle * Math.PI / 180, l = Math.cos(c), f = Math.sin(c), d = o.x * l - o.y * f, u = o.x * f + o.y * l, h = s.x + d * a, p = s.y + u * a, S = 0.5, y = Math.max(S, Math.min(e.l - S, h)), x = Math.max(S, Math.min(e.w - S, p));
  return { leadIn: [
    { x: y, y: x, type: "rapid" },
    { x: s.x, y: s.y, type: "linear" }
  ], entryIndex: r };
}
function xs(t, e, n, i) {
  if (!i.leadOut.enabled || t.length < 3)
    return [];
  const r = t.length, s = t[e], o = t[(e + 1) % r], a = {
    x: (s.x + o.x) / 2,
    y: (s.y + o.y) / 2
  }, c = dn(s, o), l = i.leadOut.length, f = i.leadOut.angle * Math.PI / 180, d = Math.cos(f), u = Math.sin(f), h = c.x * d - c.y * u, p = c.x * u + c.y * d, S = a.x + h * l, y = a.y + p * l, x = 0.5, g = Math.max(x, Math.min(n.l - x, S)), m = Math.max(x, Math.min(n.w - x, y));
  return [
    { x: g, y: m, type: "linear" }
  ];
}
function lt(t, e) {
  const n = t.x - e.x, i = t.y - e.y;
  return Math.sqrt(n * n + i * i);
}
function pn(t) {
  return t.leadIn.length > 0 ? t.leadIn[0] : t.contour.length > 0 ? t.contour[0] : t.centroid;
}
function fe(t) {
  return t.leadOut.length > 0 ? t.leadOut[t.leadOut.length - 1] : t.contour.length > 0 ? t.contour[t.contour.length - 1] : t.centroid;
}
function Pa(t) {
  const e = /* @__PURE__ */ new Map();
  for (const i of t) {
    let r = e.get(i.shapeId);
    r || (r = { holes: [], outer: null }, e.set(i.shapeId, r)), i.isHole ? r.holes.push(i) : r.outer = i;
  }
  const n = [];
  for (const [i, { holes: r, outer: s }] of e) {
    const o = s?.centroid ?? r[0]?.centroid ?? { x: 0, y: 0 }, a = [], c = r.slice();
    let l = o;
    for (; c.length > 0; ) {
      let u = 0, h = 1 / 0;
      for (let S = 0; S < c.length; S++) {
        const y = lt(l, pn(c[S]));
        y < h && (h = y, u = S);
      }
      const p = c.splice(u, 1)[0];
      a.push(p), l = fe(p);
    }
    const f = a[0] ?? s, d = s ?? a[a.length - 1];
    n.push({
      shapeId: i,
      holes: a,
      outer: s,
      entryPoint: f ? pn(f) : { x: 0, y: 0 },
      exitPoint: d ? fe(d) : { x: 0, y: 0 }
    });
  }
  return n;
}
function Ta(t, e) {
  const n = [];
  for (const i of e) {
    const r = t[i];
    n.push(...r.holes), r.outer && n.push(r.outer);
  }
  return n;
}
function gn(t, e) {
  if (e.length === 0) return 0;
  let n = lt({ x: 0, y: 0 }, t[e[0]].entryPoint);
  for (let i = 0; i < e.length - 1; i++)
    n += lt(t[e[i]].exitPoint, t[e[i + 1]].entryPoint);
  return n;
}
function va(t) {
  const e = t.length;
  if (e <= 1) return t.map((r, s) => s);
  let n = [], i = 1 / 0;
  for (let r = -1; r < e; r++) {
    const s = /* @__PURE__ */ new Set(), o = [];
    let a;
    for (r >= 0 ? (s.add(r), o.push(r), a = t[r].exitPoint) : a = { x: 0, y: 0 }; o.length < e; ) {
      let l = -1, f = 1 / 0;
      for (let d = 0; d < e; d++) {
        if (s.has(d)) continue;
        const u = lt(a, t[d].entryPoint);
        u < f && (f = u, l = d);
      }
      s.add(l), o.push(l), a = t[l].exitPoint;
    }
    const c = gn(t, o);
    c < i && (i = c, n = o);
  }
  return n;
}
function Ea(t, e, n = 50) {
  const i = e.length;
  if (i <= 2) return e;
  const r = e.slice();
  let s = !0, o = 0;
  for (; s && o < n; ) {
    s = !1, o++;
    for (let a = -1; a < i - 1; a++)
      for (let c = a + 2; c < i; c++) {
        const l = a >= 0 ? t[r[a]].exitPoint : { x: 0, y: 0 }, f = c + 1 < i ? t[r[c + 1]].entryPoint : null;
        let d = lt(l, t[r[a + 1]].entryPoint), u = lt(l, t[r[c]].entryPoint);
        f && (d += lt(t[r[c]].exitPoint, f), u += lt(t[r[a + 1]].exitPoint, f));
        for (let h = a + 1; h < c; h++)
          d += lt(t[r[h]].exitPoint, t[r[h + 1]].entryPoint);
        for (let h = c; h > a + 1; h--)
          u += lt(t[r[h]].exitPoint, t[r[h - 1]].entryPoint);
        if (u < d - 1e-10) {
          let h = a + 1, p = c;
          for (; h < p; ) {
            const S = r[h];
            r[h] = r[p], r[p] = S, h++, p--;
          }
          s = !0;
        }
      }
  }
  return r;
}
function ka(t, e, n = 30) {
  if (e.length <= 2) return e;
  const r = e.slice();
  let s = gn(t, r), o = 0, a = !0;
  for (; a && o < n; ) {
    a = !1, o++;
    for (let c = 0; c < r.length; c++) {
      const l = r.splice(c, 1)[0];
      let f = c, d = s;
      for (let u = 0; u <= r.length; u++) {
        r.splice(u, 0, l);
        const h = gn(t, r);
        h < d - 1e-10 && (d = h, f = u), r.splice(u, 1);
      }
      r.splice(f, 0, l), d < s - 1e-10 && (s = d, a = !0);
    }
  }
  return r;
}
function Si(t, e) {
  if (t.length <= 1 || e.optimization.method === "none")
    return t;
  const n = Pa(t);
  let i = va(n);
  return e.optimization.method === "2-opt" && (i = Ea(n, i), i = ka(n, i)), Ta(n, i);
}
function wi(t, e, n) {
  let i = { x: 0, y: 0 };
  for (const r of t) {
    const s = r._polygon;
    if (!s || s.length < 3) {
      i = fe(r);
      continue;
    }
    const { leadIn: o, entryIndex: a } = ys(s, e, n, i);
    r.leadIn = o, r._entryIndex = a, r.contour = An(s, a), r.leadOut = xs(s, a, e, n), i = fe(r);
  }
}
function Ra(t, e) {
  if (!e.proximity.enabled || t.length < 2) return;
  const n = e.proximity.threshold;
  for (let i = 0; i < t.length - 1; i++) {
    const r = fe(t[i]), s = pn(t[i + 1]);
    lt(r, s) < n && (t[i].leadOut = [], t[i + 1].leadIn = []);
  }
}
function Da(t, e, n) {
  const i = [];
  for (let r = 0; r < t.length; r++) {
    const s = t[r]._polygon;
    if (!s || s.length < 3) continue;
    const o = t[r].bounds;
    for (let a = r + 1; a < t.length; a++) {
      if (t[r].shapeId === t[a].shapeId) continue;
      const c = t[a]._polygon;
      if (!c || c.length < 3) continue;
      const l = t[a].bounds;
      if (o.minX - l.maxX > e || l.minX - o.maxX > e || o.minY - l.maxY > e || l.minY - o.maxY > e) continue;
      const f = s.length, d = c.length;
      for (let u = 0; u < f; u++) {
        const h = s[u], p = s[(u + 1) % f], S = p.x - h.x, y = p.y - h.y, x = Math.sqrt(S * S + y * y);
        if (x < 1e-9) continue;
        const g = S / x, m = y / x;
        for (let w = 0; w < d; w++) {
          const I = c[w], b = c[(w + 1) % d], $ = b.x - I.x, P = b.y - I.y, T = Math.sqrt($ * $ + P * P);
          if (T < 1e-9) continue;
          const L = $ / T, v = P / T, O = g * L + m * v;
          if (Math.abs(O + 1) > 0.05) continue;
          const q = I.x - h.x, Y = I.y - h.y;
          if (Math.abs(q * m - Y * g) > e) continue;
          const A = 0, G = x, C = (I.x - h.x) * g + (I.y - h.y) * m, M = (b.x - h.x) * g + (b.y - h.y) * m, U = Math.min(C, M), H = Math.max(C, M), K = Math.max(A, U), V = Math.min(G, H) - K;
          V >= n && i.push({
            contourA: t[r],
            edgeIdxA: u,
            contourB: t[a],
            edgeIdxB: w,
            overlapLength: V
          });
        }
      }
    }
  }
  return i;
}
function Aa(t, e, n, i) {
  if (e.length === 0) return;
  const r = /* @__PURE__ */ new Map();
  for (let s = 0; s < t.length; s++)
    r.set(t[s], s);
  for (const s of e) {
    const o = r.get(s.contourA) ?? -1, a = r.get(s.contourB) ?? -1;
    o < 0 || a < 0 || (o < a ? (s.contourB._skipEdges || (s.contourB._skipEdges = /* @__PURE__ */ new Set()), s.contourB._skipEdges.add(s.edgeIdxB)) : (s.contourA._skipEdges || (s.contourA._skipEdges = /* @__PURE__ */ new Set()), s.contourA._skipEdges.add(s.edgeIdxA)));
  }
  for (const s of t) {
    if (!s._skipEdges || s._skipEdges.size === 0) continue;
    const o = s._polygon, a = s._entryIndex;
    !o || a == null || (s.contour = An(o, a, s._skipEdges));
  }
}
function bi(t) {
  let e = 0;
  for (let n = 1; n < t.length; n++)
    e += lt(t[n - 1], t[n]);
  return e;
}
function An(t, e, n) {
  const i = t.length, r = [], s = {
    x: (t[e].x + t[(e + 1) % i].x) / 2,
    y: (t[e].y + t[(e + 1) % i].y) / 2
  }, o = n?.has(e) ?? !1;
  r.push({ x: s.x, y: s.y, type: o ? "rapid" : "linear" });
  const a = (e + 1) % i;
  r.push({
    x: t[a].x,
    y: t[a].y,
    type: o ? "rapid" : "linear"
  });
  for (let c = 1; c < i; c++) {
    const l = (a + c) % i, f = (e + c) % i, d = n?.has(f) ?? !1;
    r.push({
      x: t[l].x,
      y: t[l].y,
      type: d ? "rapid" : "linear"
    });
  }
  return r.push({ x: s.x, y: s.y, type: o ? "rapid" : "linear" }), r;
}
function Ss(t, e, n) {
  const i = { ...Ia, ...n }, r = e?.saw?.bladeWidth ?? 0;
  i.kerfWidth === 0 && r > 0 && (i.kerfWidth = r);
  const s = i.kerfWidth / 2, o = { l: e.l, w: e.w }, a = [];
  for (const p of t) {
    if (!p.added) continue;
    const S = [], y = p.getPositionedOuterBoundary();
    S.push({
      polygon: y,
      label: p.name || p.autoId,
      isHole: !1
    });
    const x = p.getPositionedHoles();
    for (let g = 0; g < x.length; g++)
      S.push({
        polygon: x[g],
        label: `${p.name || p.autoId} hole ${g + 1}`,
        isHole: !0
      });
    for (const g of S) {
      let m = g.polygon;
      if (!m || m.length < 3) continue;
      m[0].x === m[m.length - 1].x && m[0].y === m[m.length - 1].y && (m = m.slice(0, -1));
      let w;
      if (s > 0) {
        const I = Mt(m);
        if (g.isHole) {
          const b = I < 0 ? m.slice().reverse() : m;
          w = xi(b, s);
        } else {
          const b = I > 0 ? m.slice().reverse() : m;
          w = xi(b, s);
        }
      } else
        w = [m];
      for (let I = 0; I < w.length; I++) {
        let b = w[I];
        b = $a(b, i.climbMilling);
        const { leadIn: $, entryIndex: P } = ys(b, o, i), T = An(b, P), L = xs(b, P, o, i), v = dt(b), O = Ge(b), q = w.length > 1 ? ` (part ${I + 1})` : "";
        a.push({
          shapeId: p.autoId,
          label: g.label + q,
          isHole: g.isHole,
          leadIn: $,
          contour: T,
          leadOut: L,
          centroid: O,
          bounds: v,
          _polygon: b,
          _entryIndex: P
        });
      }
    }
  }
  const c = i.commonLine.enabled ? Da(a, i.commonLine.tolerance, i.commonLine.minOverlapLength) : [];
  let l = Si(a, i);
  for (let p = 0; p < 3; p++) {
    wi(l, o, i);
    const S = Si(l, i);
    let y = !0;
    for (let x = 0; x < S.length; x++)
      if (S[x] !== l[x]) {
        y = !1;
        break;
      }
    if (l = S, y) break;
  }
  wi(l, o, i), Aa(l, c), Ra(l, i);
  for (const p of l)
    delete p._polygon, delete p._entryIndex, delete p._skipEdges;
  let f = 0, d = 0, u = 0, h = { x: 0, y: 0 };
  for (const p of l) {
    const S = p.leadIn.length > 0 ? p.leadIn[0] : p.contour[0];
    S && (d += lt(h, S)), f += bi(p.leadIn.filter((x) => x.type === "linear"));
    for (let x = 1; x < p.contour.length; x++) {
      const g = lt(p.contour[x - 1], p.contour[x]);
      p.contour[x].type === "rapid" ? (d += g, u += g) : f += g;
    }
    f += bi(p.leadOut);
    const y = p.leadOut.length > 0 ? p.leadOut[p.leadOut.length - 1] : p.contour[p.contour.length - 1];
    y && (h = y);
  }
  return c.length > 0 && console.log(`[cut] Common-line: ${c.length} shared edges detected, saved ${u.toFixed(1)}mm cutting distance`), {
    contours: l,
    totalCutDistance: Math.round(f * 100) / 100,
    totalRapidDistance: Math.round(d * 100) / 100,
    commonLineSaved: Math.round(u * 100) / 100,
    config: i
  };
}
const Bt = {
  async calculation(t, e, n) {
    if (t?.tidy && (this.resetShapes(bt(n, e)), this.tidyStrategy = !0), await Bt.tryFirstShapes.call(this, e, n), !!this.bestResult) {
      if (this.tidyStrategy = !1, !t?.tidy && cl.call(this, this.bestResult, e)) {
        e.algoBenchmark = this.bestResult;
        try {
          const r = await new dr(this, e, n).run();
          if (!r) return;
          await ht.call(this, r.result), delete e.algoBenchmark;
        } catch (i) {
          console.error("error with evo", i);
        }
        ue({
          bestResult: this.bestResult,
          shapeList: this.shapeList,
          stockList: this.stockList,
          resetShapes: this.resetShapes?.bind(this)
        });
      }
      if (t?.cncPlan && this.bestResult?.shapes?.length)
        try {
          const i = e?.saw?.bladeWidth ?? 0, r = this.bestResult.shapes.filter((s) => s.added);
          if (r.length > 0) {
            const s = r.map((a) => {
              const c = a.rot === 1, l = c ? a.w : a.l, f = c ? a.l : a.w;
              return {
                added: !0,
                autoId: a.autoId || a.id,
                getPositionedOuterBoundary() {
                  return [
                    { x: a.x, y: a.y },
                    { x: a.x + l, y: a.y },
                    { x: a.x + l, y: a.y + f },
                    { x: a.x, y: a.y + f }
                  ];
                },
                getPositionedHoles() {
                  return [];
                }
              };
            }), o = Ss(
              s,
              e,
              { kerfWidth: i }
            );
            this.cuttingPlans || (this.cuttingPlans = {}), this.cuttingPlans[e.autoId] = o, console.log(`[efficiency] Cutting plan: ${o.contours.length} contours, cut: ${o.totalCutDistance}mm, rapid: ${o.totalRapidDistance}mm` + (o.commonLineSaved > 0 ? `, common-line saved: ${o.commonLineSaved}mm` : ""));
          }
        } catch (i) {
          console.error("[efficiency] Cutting plan generation failed:", i);
        }
    }
  },
  /**
   * place the first shape according to firstShapeRotation strategy
   */
  defaultFirstShapePlacement: function(t = null, e = 0, n) {
    if (!wt(e)) throw new Error("no rotation provided");
    if (!wt(t))
      throw new Error("first shape not provided to defaultFirstShapePlacement");
    if (typeof t != "object")
      throw new Error("first shape is not an object");
    if (t.added)
      throw new Error(`first shape ${t.id} has been added previously`);
    if (!n)
      throw new Error("no stock provided to defaultFirstShapePlacement");
    if (t.rot !== e && !qt(t, e, n))
      throw new Error(`first shape ${t.id} cannot rotate to: ${e}`);
    At(t, e, n), t.resetBothScores(), fs.call(
      this,
      t,
      n,
      vn.call(this, n, n, t),
      []
    ), t.addToStock(n), t.firstShape.isFirstShape = !0, t.placementOrder = 0, F(t) ? (t.placeMyShapes(n), this.counters.placement = t.shapes.length) : this.counters.placement = 1;
  },
  /**
   * try all first shapes with both rotations if relevant
   */
  tryFirstShapes: async function(t, e) {
    const n = at(e, t);
    let i = gs.call(
      this,
      "efficiency",
      n,
      t
    );
    const r = Dt(n, !1, !0);
    let s = r.length > 1;
    s && n.reduce((c, l) => c + l.area, 0) < t.area * this.config.groups.shapeAreaCutOff && (s = !1);
    let o = [];
    s && !this.hasMinSpacing && this.config.groups.efficiency.firstShapes && r.length < this.config.groups.efficiency.limit && (o = Bt.createFirstShapeGroups.call(
      this,
      n,
      t
    )), i.push(...o);
    let a = e;
    i = Dt(i, !1, !0);
    for (const c of i)
      c.firstShape.isFirstShape = !0, F(c) && (a = hr(
        c.shapes,
        n
      ), a.unshift(c)), await Bt.calculateFirstShapeRotations.call(
        this,
        a,
        t,
        c
      ), c.firstShape.isFirstShape = !1;
  },
  /**
   * run the calculations for both first shape rotations
   */
  calculateFirstShapeRotations: async function(t, e, n) {
    const i = Ne(n, e);
    for (const r of i) {
      this.resetShapes(t, !1, !1), n.added = !1, F(n) && (n.placeMyShapes(e), t.unshift(...n.shapes), t = t.filter((o) => o.id !== n.id));
      const s = await Ar.call(
        this,
        t,
        e,
        n,
        r
      );
      wt(s.score) && await ht.call(this, s);
    }
  },
  /**
   * scores the stock for a specific strategy and adds the score to the stock object
   */
  runSpecificStrategy: async function({
    shapes: t,
    container: e,
    firstShape: n = null,
    firstShapeRotation: i = 0,
    weighting: r = null
  }) {
    const s = performance.now();
    if (this.counters.placement = 1, !t.length) return !1;
    if (!n)
      throw new Error("no firstShape provided to efficiency.runSpecificStrategy");
    if (et(e) && (e.used = !1), this.resetShapes(t, !0, !1), typeof n == "string")
      n = this.shapeList.find((l) => l.id === n);
    else if (Qe(n) || Qs(n)) {
      const l = n.autoId || n.id;
      n = this.shapeList.find((f) => f.autoId === l || f.id === l);
    }
    if (!n)
      throw new Error("firstShape not found in shapeList");
    if (n.reset(), t.length) {
      if (r) {
        this.weighting.custom = {};
        for (const l of Object.keys(this.weighting.efficiency.standard()))
          this.weighting.custom[l] = r[l] ? r[l] : 0;
      }
      Bt.defaultFirstShapePlacement.call(
        this,
        n,
        i,
        e
      ), await mn.call(
        this,
        t,
        n,
        e
      );
    }
    const o = kt.call(
      this,
      t,
      e,
      n
    );
    r && (this.weighting.custom = null);
    const a = performance.now(), c = Math.ceil(a - s);
    return o.time = c, o;
  },
  /**
   * create groups to be used as a first shape
   * CAUTION - can make very simple calculations less efficient
   */
  createFirstShapeGroups: function(t, e) {
    if (!this.config.groups.efficiency.firstShapes) return [];
    const n = at(t, e).filter((o) => W(o)), i = ["l", "w"], r = /* @__PURE__ */ new Map();
    for (const o of i)
      Li({
        shapes: n,
        container: e,
        targetSize: e[o],
        exact: !1,
        direction: o,
        config: this.config,
        preventDuplicates: !0,
        counters: this.counters
      }).forEach((c) => {
        const l = `${c.l}-${c.w}`;
        r.has(l) || r.set(l, c);
      }), this.resetShapes(n);
    let s = Array.from(r.values());
    return s.sort((o, a) => a.efficiency - o.efficiency), s = s.slice(0, this.config.sample.groupSize), N([
      () => k(s.every((o) => R.lessThanOrEqualTo(o.l, e.l) && R.lessThanOrEqualTo(o.w, e.w)), "groups larger than container").to.be.true
    ]), s.length ? s : [];
  },
  /**
   * should tidy run?
   */
  shouldUseTidy: function(t, e) {
    return !this.config.efficiency.tidy || e?.saw?.stockType === "roll" || !t ? !1 : t.score.efficiency < 0.9 && e.cutType === "efficiency";
  }
};
function Ma(t, e = 36) {
  const n = t.length;
  if (n < 4) return new Array(e).fill(0);
  const i = [], r = Ge(t);
  for (let a = 0; a < n - 1; a++) {
    const c = t[(a - 1 + n - 1) % (n - 1)], l = t[a], f = t[(a + 1) % (n - 1)], d = l.x - c.x, u = l.y - c.y, h = f.x - l.x, p = f.y - l.y, S = d * p - u * h, y = Math.atan2(l.y - r.y, l.x - r.x);
    i.push({ angle: y, curvature: S });
  }
  i.sort((a, c) => a.angle - c.angle);
  const s = [], o = 2 * Math.PI / e;
  for (let a = 0; a < e; a++) {
    const c = -Math.PI + a * o;
    let l = i[0], f = 1 / 0;
    for (const d of i) {
      let u = Math.abs(d.angle - c);
      u > Math.PI && (u = 2 * Math.PI - u), u < f && (f = u, l = d);
    }
    s.push(l.curvature);
  }
  return s;
}
function La(t, e, n) {
  const i = t.length;
  let r = 0, s = 0;
  for (let o = 0; o < i; o++) {
    const a = t[o], c = e[(o + n + i) % i];
    a !== 0 && c !== 0 && (Math.sign(a) !== Math.sign(c) && (r += Math.min(Math.abs(a), Math.abs(c))), s++);
  }
  return s > 0 ? r / s : 0;
}
function Oa(t, e = 36, n = 3) {
  const i = [];
  for (const o of t)
    !o.outline?.length || o.outline.length < 4 || i.push({
      shapeId: o.autoId,
      samples: Ma(o.outline, e),
      sampleAngles: Array.from({ length: e }, (a, c) => -Math.PI + c * (2 * Math.PI / e)),
      outline: o.outline
    });
  const r = [], s = 2 * Math.PI / e;
  for (let o = 0; o < i.length; o++) {
    const a = i[o], c = [];
    for (let l = o + 1; l < i.length; l++) {
      const f = i[l];
      let d = 0, u = 0;
      for (let h = 0; h < e; h++) {
        const p = La(a.samples, f.samples, h);
        p > d && (d = p, u = h);
      }
      if (d > 0) {
        const h = u * s, p = Ge(a.outline), S = Ge(f.outline), y = dt(a.outline);
        c.push({
          shapeAId: a.shapeId,
          shapeBId: f.shapeId,
          optimalRotationB: h,
          complementScore: d,
          translationHint: {
            dx: p.x - S.x + y.width * 0.5,
            dy: p.y - S.y
          }
        });
      }
    }
    c.sort((l, f) => f.complementScore - l.complementScore), r.push(...c.slice(0, n));
  }
  return r.sort((o, a) => a.complementScore - o.complementScore), r;
}
function ws(t, e, n) {
  for (const i of n) {
    if (i.shapeAId === t && e.has(i.shapeBId))
      return i;
    if (i.shapeBId === t && e.has(i.shapeAId))
      return {
        ...i,
        shapeAId: i.shapeBId,
        shapeBId: i.shapeAId,
        translationHint: {
          dx: -i.translationHint.dx,
          dy: -i.translationHint.dy
        }
      };
  }
  return null;
}
function Ga(t, e) {
  const n = Math.round(e * 1e3), i = t.length;
  if (i === 0) return `empty_${n}`;
  let r = 1 / 0, s = 1 / 0;
  for (const c of t)
    c.x < r && (r = c.x), c.y < s && (s = c.y);
  const o = new Array(i * 2);
  for (let c = 0; c < i; c++)
    o[c * 2] = Math.round((t[c].x - r) * 100), o[c * 2 + 1] = Math.round((t[c].y - s) * 100);
  let a = 2166136261;
  for (let c = 0; c < o.length; c++)
    a ^= o[c], a = a * 16777619 | 0;
  return `${i}_${a >>> 0}_${n}`;
}
function Ii(t, e) {
  return Wt(
    e === 0 ? t : Yt(t, e)
  );
}
class Fa {
  cache = /* @__PURE__ */ new Map();
  spacing = 0;
  // Per-shape outline hash cache: shapeAutoId → Map<rotKey, hash>
  // Avoids recomputing the same outline hash for each shape on every NFP lookup
  shapeHashCache = /* @__PURE__ */ new Map();
  /**
   * Set the spacing used for NFP inflation
   */
  setSpacing(e) {
    this.spacing = e;
  }
  /**
   * Get a cache key for an NFP pair
   */
  getKey(e, n) {
    return `${e}|${n}`;
  }
  /**
   * Get cached outline hash for a shape at a rotation, or compute and cache it
   */
  getShapeHash(e, n) {
    const i = Math.round(n * 1e3);
    let r = this.shapeHashCache.get(e.autoId);
    if (r) {
      const o = r.get(i);
      if (o) return o;
    } else
      r = /* @__PURE__ */ new Map(), this.shapeHashCache.set(e.autoId, r);
    const s = Ga(e.outline, n);
    return r.set(i, s), s;
  }
  /**
   * Get NFP for a shape pair at specific rotations.
   * Computes on demand if not already cached.
   */
  get(e, n, i, r) {
    const s = this.getShapeHash(e, n), o = this.getShapeHash(i, r), a = this.getKey(s, o), c = this.cache.get(a);
    if (c) return c;
    if (!e.outline?.length || !i.outline?.length) return null;
    const l = Ii(e.outline, n), f = Ii(i.outline, r), d = ya(l, f, this.spacing);
    return this.cache.set(a, d), d;
  }
  /**
   * Store an NFP computation result
   */
  set(e, n, i, r, s) {
    const o = this.getShapeHash(e, n), a = this.getShapeHash(i, r);
    this.cache.set(this.getKey(o, a), s);
  }
  /**
   * Clear the cache
   */
  clear() {
    this.cache.clear(), this.shapeHashCache.clear();
  }
  /**
   * Get cache statistics
   */
  get size() {
    return this.cache.size;
  }
}
function Ba(t) {
  if (!t.length) return "";
  let e = t;
  const n = t[t.length - 1];
  return t.length > 1 && Math.abs(t[0].x - n.x) < 0.1 && Math.abs(t[0].y - n.y) < 0.1 && (e = t.slice(0, -1)), e.map((r) => ({ x: Math.round(r.x * 10) / 10, y: Math.round(r.y * 10) / 10 })).sort((r, s) => r.x - s.x || r.y - s.y).map((r) => `${r.x},${r.y}`).join("|");
}
function Xa(t, e) {
  if (!t?.length || t.length < 3) return e;
  const n = /* @__PURE__ */ new Set(), i = [];
  for (const r of e) {
    const s = Wt(
      r === 0 ? t : Yt(t, r)
    ), o = Ba(s);
    n.has(o) || (n.add(o), i.push(r));
  }
  return i;
}
const Be = {
  compression: 0.4134,
  crossAxis: 0.019,
  edge: 0,
  compact: 0.0839,
  fit: 24e-4,
  axis: 0,
  contour: 0.0297,
  cavity: 0
};
class Na {
  cache = /* @__PURE__ */ new Map();
  key(e, n) {
    return n === 0 ? e : `${e}:${n}`;
  }
  getNormalized(e, n) {
    const i = this.key(e.autoId, n);
    let r = this.cache.get(i);
    if (!r) {
      const s = n === 0 ? e.outline : Yt(e.outline, n);
      r = Wt(s), this.cache.set(i, r);
    }
    return r;
  }
  clear() {
    this.cache.clear();
  }
}
class Mn {
  cellSize;
  cols;
  rows;
  cells;
  constructor(e, n, i) {
    this.cellSize = i, this.cols = Math.ceil(e / i) + 1, this.rows = Math.ceil(n / i) + 1, this.cells = new Array(this.cols * this.rows);
    for (let r = 0; r < this.cells.length; r++) this.cells[r] = /* @__PURE__ */ new Set();
  }
  cellRange(e) {
    return {
      minC: Math.max(0, Math.floor(e.minX / this.cellSize)),
      maxC: Math.min(this.cols - 1, Math.floor(e.maxX / this.cellSize)),
      minR: Math.max(0, Math.floor(e.minY / this.cellSize)),
      maxR: Math.min(this.rows - 1, Math.floor(e.maxY / this.cellSize))
    };
  }
  insert(e, n) {
    const { minC: i, maxC: r, minR: s, maxR: o } = this.cellRange(n);
    for (let a = s; a <= o; a++)
      for (let c = i; c <= r; c++)
        this.cells[a * this.cols + c].add(e);
  }
  remove(e, n) {
    const { minC: i, maxC: r, minR: s, maxR: o } = this.cellRange(n);
    for (let a = s; a <= o; a++)
      for (let c = i; c <= r; c++)
        this.cells[a * this.cols + c].delete(e);
  }
  // Reusable query buffer to avoid Set allocation per call
  queryResult = /* @__PURE__ */ new Set();
  query(e) {
    const n = this.queryResult;
    n.clear();
    const { minC: i, maxC: r, minR: s, maxR: o } = this.cellRange(e);
    for (let a = s; a <= o; a++)
      for (let c = i; c <= r; c++)
        for (const l of this.cells[a * this.cols + c])
          n.add(l);
    return n;
  }
  rebuild(e) {
    for (const n of this.cells) n.clear();
    for (let n = 0; n < e.length; n++)
      this.insert(n, e[n].bounds);
  }
}
function qa(t, e, n) {
  let r = 0, s = 0;
  for (let o = 0; o < t.length; o++) {
    const a = t[o], c = t[(o + 1) % t.length], l = c.x - a.x, f = c.y - a.y, d = Math.sqrt(l * l + f * f);
    if (s += d, d < 0.5) continue;
    const u = Math.abs(a.y) < 0.5 && Math.abs(c.y) < 0.5, h = Math.abs(a.x) < 0.5 && Math.abs(c.x) < 0.5, p = Math.abs(a.y - n) < 0.5 && Math.abs(c.y - n) < 0.5, S = Math.abs(a.x - e) < 0.5 && Math.abs(c.x - e) < 0.5;
    (u || h || p || S) && (r += d);
  }
  return s > 0 ? r / s : 0;
}
function Ya(t, e, n) {
  if (e.length === 0) return 0;
  let i = 1 / 0;
  if (n) {
    const r = Math.max(t.width, t.height) * 2, s = {
      minX: t.minX - r,
      minY: t.minY - r,
      maxX: t.maxX + r,
      maxY: t.maxY + r,
      width: t.width + r * 2,
      height: t.height + r * 2
    };
    for (const o of n.query(s)) {
      const a = e[o], c = Math.max(0, t.minX - a.bounds.maxX, a.bounds.minX - t.maxX), l = Math.max(0, t.minY - a.bounds.maxY, a.bounds.minY - t.maxY), f = Math.sqrt(c * c + l * l);
      f < i && (i = f);
    }
  } else
    for (const r of e) {
      const s = Math.max(0, t.minX - r.bounds.maxX, r.bounds.minX - t.maxX), o = Math.max(0, t.minY - r.bounds.maxY, r.bounds.minY - t.maxY), a = Math.sqrt(s * s + o * o);
      a < i && (i = a);
    }
  return i;
}
function Wa(t, e, n, i, r, s, o) {
  const a = t.length - 1;
  if (a < 2) return 0;
  const c = s + 5, l = c * c;
  let f = 0;
  const d = {
    minX: e.minX - c,
    minY: e.minY - c,
    maxX: e.maxX + c,
    maxY: e.maxY + c,
    width: e.width + c * 2,
    height: e.height + c * 2
  }, u = [];
  if (o)
    for (const h of o.query(d))
      u.push(n[h]);
  else
    for (const h of n)
      Lt(d, h.bounds) && u.push(h);
  for (let h = 0; h < a; h++) {
    const p = t[h], S = t[h + 1], y = (p.x + S.x) / 2, x = (p.y + S.y) / 2, g = { x: y, y: x };
    let m = Math.min(
      y * y,
      // left edge
      x * x,
      // bottom edge
      (i - y) * (i - y),
      // right edge
      (r - x) * (r - x)
      // top edge
    );
    if (m > l)
      for (const w of u) {
        for (let I = 0; I < w.polygon.length - 1; I++) {
          const b = se(g, w.polygon[I], w.polygon[I + 1]);
          if (b < m && (m = b, m <= l))
            break;
        }
        if (m <= l) break;
      }
    m <= l && f++;
  }
  return f / a;
}
function $i(t, e, n, i, r, s, o, a, c, l, f, d, u, h, p, S) {
  const y = s === "x" ? n : i, x = s === "x" ? i : n;
  if (h === void 0) {
    h = 0;
    for (const G of a) {
      const C = s === "x" ? G.bounds.maxX : G.bounds.maxY;
      C > h && (h = C);
    }
  }
  const g = l ? s === "x" ? l.maxX : l.maxY : s === "x" ? t : e, m = g > h ? g / y : (s === "x" ? t : e) / y * 0.5, w = s === "x" ? e / x : t / x, I = c ? qa(c, n, i) : 0, b = l ? l.maxX - l.minX : 100, $ = l ? l.maxY - l.minY : 100, P = Math.sqrt(b * b + $ * $), T = l ? Ya(l, a, p) : 0, L = Math.min(T / P, 1), v = !S && c && l && a.length > 0 ? Wa(c, l, a, n, i, d, p) : 0, O = f % (Math.PI / 2), q = Math.min(O, Math.PI / 2 - O) / (Math.PI / 4);
  let Y = 0;
  if (o && a.length > 0) {
    const G = a.find((C) => C.shape.autoId === o.shapeAId);
    if (G) {
      const C = t - (G.x + o.translationHint.dx), M = e - (G.y + o.translationHint.dy), U = Math.sqrt(C * C + M * M);
      Y = o.complementScore / (1 + U / 100);
    }
  }
  let E = 0;
  if (a.length > 0 && l) {
    const G = l.minX + l.width / 2, C = l.minY + l.height / 2;
    for (const M of a)
      if (Lt(l, M.bounds) && G >= M.bounds.minX && G <= M.bounds.maxX && C >= M.bounds.minY && C <= M.bounds.maxY && !_t({ x: G, y: C }, M.polygon)) {
        E = 0.8;
        break;
      }
  }
  const A = u || Be;
  return A.compression * m + A.crossAxis * w - A.edge * I + A.compact * L - A.fit * v + A.axis * q - A.contour * Y - A.cavity * E;
}
function za(t, e, n, i, r) {
  const s = i > 0 ? {
    minX: e.minX - i,
    minY: e.minY - i,
    maxX: e.maxX + i,
    maxY: e.maxY + i,
    width: e.width + i * 2,
    height: e.height + i * 2
  } : e;
  if (r)
    for (const o of r.query(s)) {
      const a = n[o];
      if (Lt(s, a.bounds) && Fe(t, a.polygon, i))
        return !0;
    }
  else
    for (const o of n)
      if (Lt(s, o.bounds) && Fe(t, o.polygon, i))
        return !0;
  return !1;
}
function Ha(t, e, n, i) {
  const r = i.get(t.shape, t.rotation, e, n);
  if (!r || r.length === 0) return { contours: [], bounds: [] };
  const s = [], o = [];
  for (const a of r) {
    const c = he(a, t.x, t.y);
    s.push(c), o.push(dt(c));
  }
  return { contours: s, bounds: o };
}
function ja(t) {
  const e = [];
  for (const n of t)
    for (let i = 0; i < n.contours.length; i++) {
      const r = n.bounds[i];
      e.push({ contour: n.contours[i], minX: r.minX, minY: r.minY, maxX: r.maxX, maxY: r.maxY });
    }
  return e;
}
function Ua(t, e, n) {
  if (!_t(t, e)) return !1;
  const i = t.x, r = t.y;
  for (let s = 0; s < n.length; s++) {
    const o = n[s];
    if (!(i < o.minX || i > o.maxX || r < o.minY || r > o.maxY) && _t(t, o.contour))
      return !1;
  }
  return !0;
}
function Va(t, e, n, i, r, s, o) {
  const a = /* @__PURE__ */ new Set(), c = [], l = 0.5;
  function f(m, w) {
    const I = `${Math.round(m / l)},${Math.round(w / l)}`;
    a.has(I) || (a.add(I), c.push({ x: m, y: w }));
  }
  for (const m of t)
    f(m.x, m.y);
  const d = t.length - (t[0].x === t[t.length - 1].x && t[0].y === t[t.length - 1].y ? 1 : 0);
  for (let m = 0; m < d; m++) {
    const w = t[m], I = t[(m + 1) % t.length];
    for (let b = 0.25; b <= 0.75; b += 0.25)
      f(w.x + (I.x - w.x) * b, w.y + (I.y - w.y) * b);
  }
  const u = n.length < 60;
  for (const m of n)
    for (const w of m.contours) {
      const I = w.length - (w.length > 1 && w[0].x === w[w.length - 1].x && w[0].y === w[w.length - 1].y ? 1 : 0);
      for (let b = 0; b < I; b++)
        if (f(w[b].x, w[b].y), u) {
          const $ = w[(b + 1) % w.length];
          f((w[b].x + $.x) / 2, (w[b].y + $.y) / 2);
        }
    }
  for (const m of n)
    for (let w = 0; w < m.contours.length; w++) {
      if (!Lt(m.bounds[w], e)) continue;
      const I = yi(m.contours[w], t);
      for (const b of I)
        f(b.x, b.y);
    }
  const h = n.length > 100 ? 5 : 8;
  let p = n;
  if (n.length > h) {
    const m = (e.minX + e.maxX) / 2, w = (e.minY + e.maxY) / 2, I = n.map((b, $) => {
      const P = b.bounds[0], T = (P.minX + P.maxX) / 2, L = (P.minY + P.maxY) / 2;
      return { idx: $, dist: (T - m) ** 2 + (L - w) ** 2 };
    });
    I.sort((b, $) => b.dist - $.dist), p = I.slice(0, h).map((b) => n[b.idx]);
  }
  for (let m = 0; m < p.length; m++)
    for (let w = m + 1; w < p.length; w++)
      for (let I = 0; I < p[m].contours.length; I++) {
        const b = p[m].bounds[I];
        for (let $ = 0; $ < p[w].contours.length; $++) {
          if (!Lt(b, p[w].bounds[$])) continue;
          const P = yi(p[m].contours[I], p[w].contours[$]);
          for (const T of P)
            f(T.x, T.y);
        }
      }
  if (i && r.length > 0) {
    const m = r.find((w) => w.shape.autoId === i.shapeAId);
    m && f(
      m.x + i.translationHint.dx,
      m.y + i.translationHint.dy
    );
  }
  const S = r.length, y = S < 50 ? 20 : S < 150 ? 10 : 5, x = S < 100 ? 0.5 : 1;
  let g = 0;
  for (const m of r) {
    if (g >= y) break;
    if (m.convex) continue;
    const w = m.bounds.width * m.bounds.height, I = m.shape.trueArea || m.shape.area || w;
    if (w - I < o.width * o.height * 0.5) continue;
    g++;
    const $ = Math.max(o.width, o.height) * x;
    if (!($ < 1))
      for (let P = m.bounds.minX; P <= m.bounds.maxX - o.width; P += $)
        for (let T = m.bounds.minY; T <= m.bounds.maxY - o.height; T += $) {
          const L = P + o.width / 2, v = T + o.height / 2;
          _t({ x: L, y: v }, m.polygon) || f(P, T);
        }
  }
  return s === "x" ? c.sort((m, w) => m.x - w.x) : c.sort((m, w) => m.y - w.y), c;
}
function bs(t, e, n, i, r, s, o, a, c) {
  const l = c ? c.getNormalized(t, n) : Wt(n === 0 ? e : Yt(e, n)), f = dt(l), d = xa(i.l, i.w, f);
  if (d.length === 0) return null;
  const u = dt(d), h = [], p = r.length >= 80;
  let S = 0;
  if (p) {
    let E = 0;
    for (const A of r) {
      const G = s.compressionAxis === "x" ? A.bounds.maxX : A.bounds.maxY;
      G > E && (E = G);
    }
    S = Math.max(0, E * 0.1);
  }
  for (const E of r) {
    if (p && (s.compressionAxis === "x" ? E.bounds.maxX : E.bounds.maxY) < S)
      continue;
    const A = Ha(E, t, n, s.nfpCache);
    A.contours.length > 0 && h.push(A);
  }
  const y = Va(
    d,
    u,
    h,
    o,
    r,
    s.compressionAxis,
    f
  ), x = ja(h);
  let g = null;
  const m = s.spacing, w = l.map((E) => ({ x: E.x, y: E.y })), I = {
    minX: 0,
    minY: 0,
    maxX: f.width,
    maxY: f.height,
    width: f.width,
    height: f.height
  };
  let b = 0;
  for (const E of r) {
    const A = s.compressionAxis === "x" ? E.bounds.maxX : E.bounds.maxY;
    A > b && (b = A);
  }
  const $ = r.length >= 30, P = 12;
  let T = [];
  const L = (E, A) => {
    if (!Ua({ x: E, y: A }, d, x)) return;
    for (let C = 0; C < l.length; C++)
      w[C].x = l[C].x + E, w[C].y = l[C].y + A;
    if (I.minX = E, I.minY = A, I.maxX = E + f.width, I.maxY = A + f.height, za(w, I, r, m, a)) return;
    const G = $i(
      E,
      A,
      i.l,
      i.w,
      s.strategy,
      s.compressionAxis,
      o,
      r,
      w,
      I,
      n,
      s.spacing,
      s.scoringWeights,
      b,
      a,
      $
      // skip measureFit in cheap pass
    );
    if ($)
      if (T.length < P)
        T.push({ x: E, y: A, score: G });
      else {
        let C = 0;
        for (let M = 1; M < T.length; M++)
          T[M].score > T[C].score && (C = M);
        G < T[C].score && (T[C] = { x: E, y: A, score: G });
      }
    else
      (!g || G < g.score) && (g = { x: E, y: A, score: G });
  }, v = s.scoringWeights?.compression ?? Be.compression, O = s.compressionAxis === "x";
  for (const E of y) {
    if (g || $ && T.length >= P) {
      const A = $ ? T.reduce((C, M) => M.score > C ? M.score : C, -1 / 0) : g.score;
      if ((O ? E.x / i.l * v * 0.5 : E.y / i.w * v * 0.5) > A) break;
    }
    L(E.x, E.y);
  }
  if (!(g && r.length >= 10 && (s.compressionAxis === "x" ? g.x + f.width <= b * 1.01 : g.y + f.height <= b * 1.01))) {
    const E = Math.max(1, Math.min(f.width, f.height) / 4), A = s.compressionAxis === "x", G = s.scoringWeights?.compression ?? Be.compression;
    if (A)
      for (let C = u.minX; C <= u.maxX && !(g && C / i.l * G > g.score); C += E)
        for (let M = u.minY; M <= u.maxY; M += E)
          L(C, M);
    else
      for (let C = u.minY; C <= u.maxY && !(g && C / i.w * G > g.score); C += E)
        for (let M = u.minX; M <= u.maxX; M += E)
          L(M, C);
  }
  const Y = $ ? T.length > 0 ? T.reduce((E, A) => E.score < A.score ? E : A) : null : g;
  if (Y) {
    const E = Math.max(1, Math.min(f.width, f.height) / 4), A = E / 2;
    for (let G = -E; G <= E; G += A)
      for (let C = -E; C <= E; C += A)
        L(Y.x + G, Y.y + C);
  }
  if ($ && T.length > 0)
    for (const E of T) {
      for (let G = 0; G < l.length; G++)
        w[G].x = l[G].x + E.x, w[G].y = l[G].y + E.y;
      I.minX = E.x, I.minY = E.y, I.maxX = E.x + f.width, I.maxY = E.y + f.height;
      const A = $i(
        E.x,
        E.y,
        i.l,
        i.w,
        s.strategy,
        s.compressionAxis,
        o,
        r,
        w,
        I,
        n,
        s.spacing,
        s.scoringWeights,
        b,
        a,
        !1
        // full scoring with measureFit
      );
      (!g || A < g.score) && (g = { x: E.x, y: E.y, score: A });
    }
  return g;
}
async function Ja(t, e, n) {
  const i = Za(e);
  if (i.length <= 1) {
    const s = Is(t, i[0].shapes, n);
    let o = 0;
    const a = new Map(e.map((l) => [l.autoId, l])), c = We(s, a);
    for (const l of c) {
      const f = n.compressionAxis === "x" ? l.bounds.maxX : l.bounds.maxY;
      f > o && (o = f);
    }
    return console.log(`[nesting] Single ordering: "${i[0].name}" extent=${o.toFixed(1)}`), s;
  }
  console.log(`[nesting] Parallel multi-start: launching ${i.length} orderings via worker threads`);
  const r = await _a(t, i, n);
  return r || (console.log("[nesting] Worker threads unavailable, falling back to sequential"), Ka(t, e, i, n));
}
function Za(t) {
  const e = [];
  if (e.push({
    name: "area-desc",
    shapes: [...t].sort((n, i) => (i.trueArea || i.area) - (n.trueArea || n.area))
  }), t.length < 200 && e.push({
    name: "longest-desc",
    shapes: [...t].sort((n, i) => {
      const r = Math.max(n.l, n.w);
      return Math.max(i.l, i.w) - r;
    })
  }), t.length < 100 && (e.push({
    name: "irregular-first",
    shapes: [...t].sort((n, i) => {
      const r = n.l * n.w / (n.trueArea || n.area || 1);
      return i.l * i.w / (i.trueArea || i.area || 1) - r;
    })
  }), e.push({
    name: "hybrid",
    shapes: [...t].sort((n, i) => {
      const r = n.trueArea || n.area, s = i.trueArea || i.area, o = n.l * n.w / (r || 1), a = i.l * i.w / (s || 1);
      return s * a - r * o;
    })
  })), t.length <= 50)
    for (let n = 1; n <= 2; n++) {
      const i = [...t];
      let r = n * 2654435761;
      for (let s = i.length - 1; s > 0; s--) {
        r = r * 1103515245 + 12345 & 2147483647;
        const o = r % (s + 1), a = i[s];
        i[s] = i[o], i[o] = a;
      }
      e.push({ name: `random-${n}`, shapes: i });
    }
  return e;
}
async function _a(t, e, n) {
  let i;
  try {
    i = (await import("./__vite-browser-external-BAFHcARw.js").then((l) => l._)).Worker;
  } catch {
    return null;
  }
  const r = {
    rotationSteps: n.rotationSteps,
    spacing: n.spacing,
    contourMatches: n.contourMatches,
    strategy: n.strategy,
    compressionAxis: n.compressionAxis,
    scoringWeights: n.scoringWeights,
    shapeRotationMapEntries: n.shapeRotationMap ? Array.from(n.shapeRotationMap.entries()) : []
  }, s = { l: t.l, w: t.w }, o = (l) => ({
    autoId: l.autoId,
    outline: l.outline,
    l: l.l,
    w: l.w,
    area: l.area,
    trueArea: l.trueArea
  }), a = new URL("data:video/mp2t;base64,LyoqCiAqIFBsYWNlbWVudCBXb3JrZXIKICogUnVucyBhIHNpbmdsZSBwbGFjZW1lbnQgb3JkZXJpbmcgaW4gYSB3b3JrZXIgdGhyZWFkLgogKiBSZWNlaXZlcyBwbGFpbiBkYXRhIG9iamVjdHMgKG5vIGNsYXNzIGluc3RhbmNlcyBuZWVkZWQg4oCUIHRoZSBwbGFjZW1lbnQKICogYWxnb3JpdGhtIG9ubHkgcmVhZHMgcHJvcGVydGllcywgbmV2ZXIgY2FsbHMgbWV0aG9kcykuCiAqLwoKaW1wb3J0IHsgcGFyZW50UG9ydCwgd29ya2VyRGF0YSB9IGZyb20gJ3dvcmtlcl90aHJlYWRzJwppbXBvcnQgeyBORlBDYWNoZSB9IGZyb20gJy4vbmZwLWNhY2hlJwppbXBvcnQgeyBwbGFjZVNoYXBlc0luT3JkZXIsIGJ1aWxkUGxhY2VkU2hhcGVzIH0gZnJvbSAnLi9wbGFjZW1lbnQnCmltcG9ydCB0eXBlIHsgTmVzdGluZ09wdGlvbnMsIE5lc3RpbmdQbGFjZW1lbnQsIENvbXByZXNzaW9uQXhpcyB9IGZyb20gJy4vcGxhY2VtZW50JwoKY29uc3QgewoJc3RvY2tEYXRhLAoJc2hhcGVzRGF0YSwKCW9wdGlvbnNEYXRhLAoJb3JkZXJpbmdOYW1lCn0gPSB3b3JrZXJEYXRhIGFzIHsKCXN0b2NrRGF0YTogeyBsOiBudW1iZXI7IHc6IG51bWJlciB9CglzaGFwZXNEYXRhOiBBcnJheTx7IGF1dG9JZDogc3RyaW5nOyBvdXRsaW5lOiBBcnJheTx7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+OyBsOiBudW1iZXI7IHc6IG51bWJlcjsgYXJlYTogbnVtYmVyOyB0cnVlQXJlYT86IG51bWJlciB9PgoJb3B0aW9uc0RhdGE6IHsKCQlyb3RhdGlvblN0ZXBzOiBudW1iZXJbXQoJCXNwYWNpbmc6IG51bWJlcgoJCWNvbnRvdXJNYXRjaGVzOiBhbnlbXQoJCXN0cmF0ZWd5OiBzdHJpbmcKCQljb21wcmVzc2lvbkF4aXM6IENvbXByZXNzaW9uQXhpcwoJCXNjb3JpbmdXZWlnaHRzPzogYW55CgkJc2hhcGVSb3RhdGlvbk1hcEVudHJpZXM6IEFycmF5PFtzdHJpbmcgfCBudW1iZXIsIG51bWJlcltdXT4KCX0KCW9yZGVyaW5nTmFtZTogc3RyaW5nCn0KCi8vIFJlY29uc3RydWN0IHRoZSBvcHRpb25zIHdpdGggYSBmcmVzaCBORlAgY2FjaGUgZm9yIHRoaXMgd29ya2VyCmNvbnN0IG5mcENhY2hlID0gbmV3IE5GUENhY2hlKCkKbmZwQ2FjaGUuc2V0U3BhY2luZyggb3B0aW9uc0RhdGEuc3BhY2luZyApCgpjb25zdCBzaGFwZVJvdGF0aW9uTWFwID0gbmV3IE1hcCggb3B0aW9uc0RhdGEuc2hhcGVSb3RhdGlvbk1hcEVudHJpZXMgKQoKY29uc3Qgb3B0aW9uczogTmVzdGluZ09wdGlvbnMgPSB7Cglyb3RhdGlvblN0ZXBzOiBvcHRpb25zRGF0YS5yb3RhdGlvblN0ZXBzLAoJc3BhY2luZzogb3B0aW9uc0RhdGEuc3BhY2luZywKCWNvbnRvdXJNYXRjaGVzOiBvcHRpb25zRGF0YS5jb250b3VyTWF0Y2hlcywKCW5mcENhY2hlLAoJc3RyYXRlZ3k6IG9wdGlvbnNEYXRhLnN0cmF0ZWd5IGFzIGFueSwKCWNvbXByZXNzaW9uQXhpczogb3B0aW9uc0RhdGEuY29tcHJlc3Npb25BeGlzLAoJc2NvcmluZ1dlaWdodHM6IG9wdGlvbnNEYXRhLnNjb3JpbmdXZWlnaHRzLAoJc2hhcGVSb3RhdGlvbk1hcAoJLy8gTm8gb25Qcm9ncmVzcyDigJQgd29ya2VycyBkb24ndCByZXBvcnQgcGVyLXNoYXBlIHByb2dyZXNzCn0KCi8vIFJ1biBwbGFjZW1lbnQgKHNoYXBlcyBhcmUgcGxhaW4gb2JqZWN0cyDigJQgcGxhY2VtZW50IG9ubHkgcmVhZHMgcHJvcGVydGllcywgbm8gbWV0aG9kcykKY29uc3QgcmVzdWx0ID0gcGxhY2VTaGFwZXNJbk9yZGVyKCBzdG9ja0RhdGEgYXMgYW55LCBzaGFwZXNEYXRhIGFzIGFueSwgb3B0aW9ucyApCgovLyBDb21wdXRlIGV4dGVudCBvbiBjb21wcmVzc2lvbiBheGlzCmxldCBleHRlbnQgPSAwCmNvbnN0IHNoYXBlTWFwID0gbmV3IE1hcCggc2hhcGVzRGF0YS5tYXAoIHMgPT4gW3MuYXV0b0lkLCBzXSApICkKY29uc3QgcGxhY2VkID0gYnVpbGRQbGFjZWRTaGFwZXMoIHJlc3VsdCwgc2hhcGVNYXAgYXMgYW55ICkKZm9yICggY29uc3QgcCBvZiBwbGFjZWQgKQp7Cgljb25zdCBleHQgPSBvcHRpb25zRGF0YS5jb21wcmVzc2lvbkF4aXMgPT09ICd4JyA/IHAuYm91bmRzLm1heFggOiBwLmJvdW5kcy5tYXhZCglpZiAoIGV4dCA+IGV4dGVudCApIGV4dGVudCA9IGV4dAp9CgpwYXJlbnRQb3J0IS5wb3N0TWVzc2FnZSggewoJcGxhY2VtZW50czogcmVzdWx0LAoJZXh0ZW50LAoJb3JkZXJpbmdOYW1lLAoJY2FjaGVTaXplOiBuZnBDYWNoZS5zaXplCn0gKQo=", import.meta.url), c = e.map(
    (l) => new Promise((f, d) => {
      const u = new i(a, {
        workerData: {
          stockData: s,
          shapesData: l.shapes.map(o),
          optionsData: r,
          orderingName: l.name
        }
      });
      u.on("message", (h) => {
        f(h);
      }), u.on("error", (h) => {
        console.error(`[nesting] Worker error (${l.name}):`, h.message), d(h);
      }), u.on("exit", (h) => {
        h !== 0 && d(new Error(`Worker (${l.name}) exited with code ${h}`));
      });
    })
  );
  try {
    const l = await Promise.all(c);
    let f = l[0];
    for (const u of l)
      (u.placements.length > f.placements.length || u.placements.length === f.placements.length && u.extent < f.extent) && (f = u);
    const d = l.map((u) => `${u.orderingName}=${u.cacheSize}`).join(", ");
    return console.log(`[nesting] Parallel multi-start: best="${f.orderingName}" extent=${f.extent.toFixed(1)} placed=${f.placements.length} from ${e.length} orderings (cache: ${d})`), f.placements;
  } catch (l) {
    return console.error("[nesting] Parallel execution failed:", l), null;
  }
}
function Ka(t, e, n, i) {
  let r = [], s = 1 / 0, o = "";
  for (const a of n) {
    const c = Is(t, a.shapes, i);
    let l = 0;
    const f = new Map(e.map((u) => [u.autoId, u])), d = We(c, f);
    for (const u of d) {
      const h = i.compressionAxis === "x" ? u.bounds.maxX : u.bounds.maxY;
      h > l && (l = h);
    }
    (c.length > r.length || c.length === r.length && l < s) && (r = c, s = l, o = a.name);
  }
  return console.log(`[nesting] Sequential multi-start: best="${o}" extent=${s.toFixed(1)} from ${n.length} orderings`), r;
}
function Is(t, e, n) {
  const i = [], r = [], s = /* @__PURE__ */ new Set(), o = Math.max(t.l, t.w) / 10, a = new Mn(t.l, t.w, o), c = new Na();
  let l = 0;
  for (const f of e) {
    l++;
    const d = r.length >= 150 ? 1 : r.length >= 50 ? 10 : 50;
    if ((l % d === 0 || l === e.length) && ((l % 50 === 0 || l === e.length) && console.log(`[nesting]   placing ${l}/${e.length} (${i.length} placed so far, NFP cache: ${n.nfpCache.size})`), n.onProgress?.(i.length, e.length)), !f.outline?.length || f.outline.length < 3) continue;
    const u = ws(
      f.autoId,
      s,
      n.contourMatches
    );
    let h = null, p = 1 / 0;
    const S = n.shapeRotationMap?.get(f.autoId) || n.rotationSteps;
    let y = 0, x = n.compressionAxis === "x" ? t.w : t.l;
    if (r.length > 0) {
      for (const T of r) {
        const L = n.compressionAxis === "x" ? T.bounds.maxX : T.bounds.maxY;
        L > y && (y = L);
      }
      const $ = y * 0.8;
      let P = 0;
      for (const T of r)
        if ((n.compressionAxis === "x" ? T.bounds.maxX : T.bounds.maxY) >= $) {
          const v = n.compressionAxis === "x" ? T.bounds.maxY : T.bounds.maxX;
          v > P && (P = v);
        }
      x = (n.compressionAxis === "x" ? t.w : t.l) - P;
    }
    const g = [], m = n.compressionAxis === "x" ? t.l : t.w, w = n.compressionAxis === "x" ? t.w : t.l;
    for (const $ of S) {
      const P = dt(c.getNormalized(f, $)), T = n.compressionAxis === "x" ? P.width : P.height, L = n.compressionAxis === "x" ? P.height : P.width;
      let v = 0;
      v += T / m * 0.5, L > x && x > 0 && (v += (L - x) / w * 0.3), v += L / w * 0.1, u && Math.abs($ - u.optimalRotationB) < 0.01 && (v -= 0.3);
      const O = $ % (Math.PI / 2), q = Math.min(O, Math.PI / 2 - O) / (Math.PI / 4);
      v += q * 0.1, g.push({ rotation: $, score: v });
    }
    g.sort(($, P) => $.score - P.score);
    const I = r.length < 30 ? S.length : r.length < 150 ? Math.min(4, g.length) : Math.min(3, g.length), b = g.slice(0, I);
    for (const { rotation: $ } of b) {
      const P = bs(
        f,
        f.outline,
        $,
        t,
        r,
        n,
        u,
        a,
        c
      );
      P && P.score < p && (p = P.score, h = {
        shapeAutoId: f.autoId,
        x: P.x,
        y: P.y,
        rotation: $
      });
    }
    if (h) {
      i.push(h);
      const $ = c.getNormalized(f, h.rotation), P = he($, h.x, h.y), T = dt(P), L = {
        shape: f,
        x: h.x,
        y: h.y,
        rotation: h.rotation,
        bounds: T,
        polygon: P,
        convex: Kt(P)
      };
      r.push(L), a.insert(r.length - 1, T), s.add(f.autoId);
    }
  }
  return i;
}
const Qa = {
  maxIterations: 5e3,
  initialTemp: 1,
  coolingRate: 0.997,
  moveTypes: ["shift", "swap", "rotate", "slide", "slideX"]
};
function We(t, e) {
  const n = [];
  for (const i of t) {
    const r = e.get(i.shapeAutoId);
    if (!r || !r.outline?.length) continue;
    const s = i.rotation === 0 ? r.outline : Yt(r.outline, i.rotation), o = Wt(s), a = he(o, i.x, i.y), c = dt(a);
    n.push({ shape: r, x: i.x, y: i.y, rotation: i.rotation, bounds: c, polygon: a, convex: Kt(a) });
  }
  return n;
}
function Se(t, e, n, i) {
  if (t.length === 0) return 0;
  let r = 0, s = 0, o = 0, a = 0;
  for (const h of t) {
    const p = i === "x" ? h.bounds.maxX : h.bounds.maxY, S = i === "x" ? h.bounds.maxY : h.bounds.maxX;
    p > r && (r = p), S > s && (s = S), o += p, a += h.shape.trueArea || h.shape.area || 0;
  }
  const c = i === "x" ? e : n, l = o / t.length / c, f = r / c, d = r * s, u = d > 0 ? 1 - a / d : 0;
  return l * 0.5 + f * 0.35 + u * 0.15;
}
function le(t, e, n, i, r, s) {
  const o = e[t];
  if (o.bounds.minX < -0.5 || o.bounds.minY < -0.5 || o.bounds.maxX > n + 0.5 || o.bounds.maxY > i + 0.5) return !1;
  const a = r > 0 ? {
    minX: o.bounds.minX - r,
    minY: o.bounds.minY - r,
    maxX: o.bounds.maxX + r,
    maxY: o.bounds.maxY + r,
    width: o.bounds.width + r * 2,
    height: o.bounds.height + r * 2
  } : o.bounds;
  if (s) {
    for (const c of s.query(a))
      if (c !== t && Lt(a, e[c].bounds) && Fe(o.polygon, e[c].polygon, r))
        return !1;
  } else
    for (let c = 0; c < e.length; c++)
      if (c !== t && Lt(a, e[c].bounds) && Fe(o.polygon, e[c].polygon, r))
        return !1;
  return !0;
}
function Xt(t, e, n, i) {
  const r = i === 0 ? t.outline : Yt(t.outline, i), s = Wt(r), o = he(s, e, n), a = dt(o);
  return { shape: t, x: e, y: n, rotation: i, bounds: a, polygon: o, convex: Kt(o) };
}
function tl(t, e, n, i) {
  if (e === "shift") {
    const r = Math.max(t.shape.l, t.shape.w) * n * 2, s = (Math.random() - 0.5) * 2 * r, o = (Math.random() - 0.5) * 2 * r;
    return Xt(t.shape, t.x + s, t.y + o, t.rotation);
  } else if (e === "rotate") {
    const r = i[Math.floor(Math.random() * i.length)];
    return Xt(t.shape, t.x, t.y, r);
  }
  return t;
}
function be(t, e, n, i, r, s, o, a) {
  const c = e[t], l = n === "x" ? c.x : c.y;
  if (Math.abs(l - i) < 0.5) return null;
  const f = i < l;
  let d = f ? i : l, u = f ? l : i, h = null;
  const p = Wt(
    c.rotation === 0 ? c.shape.outline : Yt(c.shape.outline, c.rotation)
  ), S = dt(p), y = p.map((g) => ({ x: g.x, y: g.y })), x = {
    minX: 0,
    minY: 0,
    maxX: S.width,
    maxY: S.height,
    width: S.width,
    height: S.height
  };
  for (let g = 0; g < 12; g++) {
    const m = (d + u) / 2, w = n === "x" ? m : c.x, I = n === "y" ? m : c.y;
    for (let T = 0; T < p.length; T++)
      y[T].x = p[T].x + w, y[T].y = p[T].y + I;
    x.minX = w, x.minY = I, x.maxX = w + S.width, x.maxY = I + S.height;
    const b = y.map((T) => ({ x: T.x, y: T.y })), $ = {
      shape: c.shape,
      x: w,
      y: I,
      rotation: c.rotation,
      bounds: { ...x },
      polygon: b,
      convex: Kt(b)
    }, P = e[t];
    e[t] = $, le(t, e, r, s, o, a) ? (h = $, f ? u = m : d = m) : f ? d = m : u = m, e[t] = P;
  }
  if (h) {
    const g = n === "x" ? h.x : h.y;
    if (Math.abs(g - l) > 0.5)
      return h;
  }
  return null;
}
function It(t, e, n, i, r, s, o) {
  return be(t, e, n, 0, i, r, s, o);
}
function el(t, e, n, i, r = {}) {
  if (t.length < 2)
    return {
      placements: t,
      stats: { initialEnergy: 0, finalEnergy: 0, bestEnergy: 0, accepted: 0, improving: 0, iterations: 0, improved: !1 }
    };
  const s = { ...Qa, ...r }, o = new Map(e.map((m) => [m.autoId, m])), a = i.compressionAxis;
  let c = t.map((m) => ({ ...m })), l = We(c, o), f = Se(l, n.l, n.w, a);
  const d = f;
  let u = c.map((m) => ({ ...m })), h = f, p = s.initialTemp, S = 0, y = 0;
  const x = Math.max(n.l, n.w) / 10, g = new Mn(n.l, n.w, x);
  g.rebuild(l);
  for (let m = 0; m < s.maxIterations; m++) {
    m % 500 === 0 && i.onProgress?.(t.length, t.length);
    const w = s.moveTypes[Math.floor(Math.random() * s.moveTypes.length)];
    if (w === "swap" && c.length >= 2) {
      const I = Math.floor(Math.random() * c.length);
      let b = Math.floor(Math.random() * (c.length - 1));
      b >= I && b++;
      const $ = o.get(c[I].shapeAutoId), P = o.get(c[b].shapeAutoId);
      if (!$ || !P) continue;
      const T = $.trueArea || $.area || 1, L = P.trueArea || P.area || 1;
      if ((T > L ? T / L : L / T) > 3) continue;
      const O = c[b].x, q = c[b].y, Y = c[I].x, E = c[I].y, A = l.slice();
      if (A[I] = Xt($, O, q, c[I].rotation), A[b] = Xt(P, Y, E, c[b].rotation), le(I, A, n.l, n.w, i.spacing) && le(b, A, n.l, n.w, i.spacing)) {
        const G = Se(A, n.l, n.w, a), C = G - f;
        (C < 0 || Math.random() < Math.exp(-C / p)) && (c[I] = { shapeAutoId: $.autoId, x: O, y: q, rotation: c[I].rotation }, c[b] = { shapeAutoId: P.autoId, x: Y, y: E, rotation: c[b].rotation }, l = A, g.rebuild(l), f = G, S++, C < 0 && y++, f < h && (u = c.map((M) => ({ ...M })), h = f));
      }
    } else if (w === "slide" || w === "slideX") {
      const I = w === "slide" ? a : a === "x" ? "y" : "x", b = Math.floor(Math.random() * l.length), $ = It(b, l, I, n.l, n.w, i.spacing, g);
      $ && (g.remove(b, l[b].bounds), l[b] = $, g.insert(b, $.bounds), c[b] = {
        shapeAutoId: $.shape.autoId,
        x: $.x,
        y: $.y,
        rotation: $.rotation
      }, f = Se(l, n.l, n.w, a), S++, y++, f < h && (u = c.map((P) => ({ ...P })), h = f));
    } else {
      const I = w === "swap" ? "shift" : w, b = Math.floor(Math.random() * l.length), $ = l[b], P = i.shapeRotationMap?.get($.shape.autoId) || i.rotationSteps, T = tl($, I, p, P), L = l[b];
      if (g.remove(b, L.bounds), l[b] = T, g.insert(b, T.bounds), le(b, l, n.l, n.w, i.spacing, g)) {
        const v = Se(l, n.l, n.w, a), O = v - f;
        O < 0 || Math.random() < Math.exp(-O / p) ? (c[b] = {
          shapeAutoId: T.shape.autoId,
          x: T.x,
          y: T.y,
          rotation: T.rotation
        }, f = v, S++, O < 0 && y++, f < h && (u = c.map((q) => ({ ...q })), h = f)) : (g.remove(b, T.bounds), l[b] = L, g.insert(b, L.bounds));
      } else
        g.remove(b, T.bounds), l[b] = L, g.insert(b, L.bounds);
    }
    p *= s.coolingRate;
  }
  return {
    placements: u,
    stats: {
      initialEnergy: d,
      finalEnergy: f,
      bestEnergy: h,
      accepted: S,
      improving: y,
      iterations: s.maxIterations,
      improved: h < d
    }
  };
}
function yt(t, e, n) {
  t[e] = { shapeAutoId: n.shape.autoId, x: n.x, y: n.y, rotation: n.rotation };
}
function nl(t, e, n, i) {
  const r = new Map(e.map((y) => [y.autoId, y])), s = t.map((y) => ({ ...y }));
  let o = We(s, r);
  const a = Math.max(n.l, n.w) / 10, c = new Mn(n.l, n.w, a), l = i.compressionAxis, f = l === "x" ? "y" : "x";
  let d = 0;
  for (let y = 0; y < 5; y++) {
    i.onProgress?.(t.length, t.length);
    let x = 0;
    c.rebuild(o);
    const g = [...Array(o.length).keys()].sort((m, w) => {
      const I = l === "x" ? o[m].bounds.maxX : o[m].bounds.maxY;
      return (l === "x" ? o[w].bounds.maxX : o[w].bounds.maxY) - I;
    });
    for (const m of g) {
      let w = o[m].x, I = o[m].y, b = o[m].rotation, $ = l === "x" ? o[m].bounds.maxX : o[m].bounds.maxY;
      const P = It(m, o, l, n.l, n.w, i.spacing, c);
      P && (c.remove(m, o[m].bounds), o[m] = P, c.insert(m, P.bounds), yt(s, m, P));
      const T = It(m, o, f, n.l, n.w, i.spacing, c);
      T && (c.remove(m, o[m].bounds), o[m] = T, c.insert(m, T.bounds), yt(s, m, T));
      const L = l === "x" ? o[m].bounds.maxX : o[m].bounds.maxY;
      L < $ && ($ = L, w = o[m].x, I = o[m].y, b = o[m].rotation);
      const v = i.shapeRotationMap?.get(o[m].shape.autoId) || i.rotationSteps;
      if (v.length > 1) {
        const O = o[m];
        for (const q of v) {
          if (Math.abs(q - O.rotation) < 1e-3) continue;
          const Y = Xt(O.shape, O.x, O.y, q), E = o[m];
          if (c.remove(m, E.bounds), o[m] = Y, c.insert(m, Y.bounds), !le(m, o, n.l, n.w, i.spacing, c)) {
            c.remove(m, Y.bounds), o[m] = E, c.insert(m, E.bounds);
            continue;
          }
          const A = It(m, o, l, n.l, n.w, i.spacing, c);
          A && (c.remove(m, o[m].bounds), o[m] = A, c.insert(m, A.bounds));
          const G = It(m, o, f, n.l, n.w, i.spacing, c);
          G && (c.remove(m, o[m].bounds), o[m] = G, c.insert(m, G.bounds));
          const C = l === "x" ? o[m].bounds.maxX : o[m].bounds.maxY;
          C < $ - 0.5 && ($ = C, w = o[m].x, I = o[m].y, b = o[m].rotation), c.remove(m, o[m].bounds), o[m] = E, c.insert(m, E.bounds);
        }
        (b !== O.rotation || w !== O.x || I !== O.y) && (c.remove(m, o[m].bounds), o[m] = Xt(O.shape, w, I, b), c.insert(m, o[m].bounds), yt(s, m, o[m]));
      }
      ($ < (l === "x" ? (P || o[m]).bounds.maxX : (P || o[m]).bounds.maxY) - 0.5 || P || T) && x++;
    }
    if (d += x, x === 0) break;
  }
  for (let y = 0; y < 3; y++) {
    i.onProgress?.(t.length, t.length);
    let x = 0;
    c.rebuild(o);
    for (let g = 0; g < o.length; g++) {
      const m = o[g], w = (m.bounds.minX + m.bounds.maxX) / 2, I = (m.bounds.minY + m.bounds.maxY) / 2;
      let b = 1 / 0, $ = -1;
      for (let v = 0; v < o.length; v++) {
        if (v === g) continue;
        const O = o[v], q = (O.bounds.minX + O.bounds.maxX) / 2, Y = (O.bounds.minY + O.bounds.maxY) / 2, E = (w - q) ** 2 + (I - Y) ** 2;
        E < b && (b = E, $ = v);
      }
      if ($ < 0) continue;
      const P = o[$], T = (P.bounds.minX + P.bounds.maxX) / 2, L = (P.bounds.minY + P.bounds.maxY) / 2;
      if (Math.abs(w - T) > 1) {
        const v = be(g, o, "x", T < w ? P.bounds.maxX : P.bounds.minX - m.bounds.width, n.l, n.w, i.spacing, c);
        v && (c.remove(g, o[g].bounds), o[g] = v, c.insert(g, v.bounds), yt(s, g, v), x++);
      }
      if (Math.abs(I - L) > 1) {
        const v = be(g, o, "y", L < I ? P.bounds.maxY : P.bounds.minY - m.bounds.height, n.l, n.w, i.spacing, c);
        v && (c.remove(g, o[g].bounds), o[g] = v, c.insert(g, v.bounds), yt(s, g, v), x++);
      }
    }
    if (d += x, x === 0) break;
  }
  let u = 0, h = 0;
  for (const y of o) {
    const x = y.shape.trueArea || y.shape.area || 1, g = f === "x" ? (y.bounds.minX + y.bounds.maxX) / 2 : (y.bounds.minY + y.bounds.maxY) / 2;
    u += g * x, h += x;
  }
  const p = h > 0 ? u / h : 0;
  for (let y = 0; y < 3; y++) {
    let x = 0;
    c.rebuild(o);
    for (let g = 0; g < o.length; g++) {
      const m = o[g], w = f === "x" ? (m.bounds.minX + m.bounds.maxX) / 2 : (m.bounds.minY + m.bounds.maxY) / 2;
      if (Math.abs(w - p) < 1) continue;
      const I = w > p ? m[f] - (w - p) : m[f] + (p - w), b = be(g, o, f, I, n.l, n.w, i.spacing, c);
      b && (c.remove(g, o[g].bounds), o[g] = b, c.insert(g, b.bounds), yt(s, g, b), x++);
    }
    if (d += x, x === 0) break;
  }
  for (let y = 0; y < 3; y++) {
    let x = 0;
    c.rebuild(o);
    const g = [...Array(o.length).keys()].sort((m, w) => {
      const I = l === "x" ? o[m].bounds.maxX : o[m].bounds.maxY;
      return (l === "x" ? o[w].bounds.maxX : o[w].bounds.maxY) - I;
    });
    for (const m of g) {
      const w = It(m, o, l, n.l, n.w, i.spacing, c);
      w && (c.remove(m, o[m].bounds), o[m] = w, c.insert(m, w.bounds), yt(s, m, w), x++);
    }
    if (d += x, x === 0) break;
  }
  i.onProgress?.(t.length, t.length);
  for (let y = 0; y < 3; y++) {
    let x = 0, g = 1 / 0;
    for (const C of o) {
      const M = l === "x" ? C.bounds.maxX : C.bounds.maxY;
      M > x && (x = M), M < g && (g = M);
    }
    const m = x - g, I = g + m * (y === 0 ? 0.75 : 0.85), b = [];
    for (let C = 0; C < o.length; C++)
      (l === "x" ? o[C].bounds.maxX : o[C].bounds.maxY) >= I && b.push(C);
    b.sort((C, M) => {
      const U = l === "x" ? o[C].bounds.maxX : o[C].bounds.maxY;
      return (l === "x" ? o[M].bounds.maxX : o[M].bounds.maxY) - U;
    });
    const $ = b.slice(0, 25);
    if ($.length === 0) break;
    console.log(`[nesting] Phase 5 round ${y + 1}: frontier threshold=${I.toFixed(1)}, maxExtent=${x.toFixed(1)}, candidates=${$.length}`);
    const P = s.map((C) => ({ ...C })), T = o.map((C) => ({ ...C })), L = [], v = [...$].sort((C, M) => M - C);
    for (const C of v)
      L.push({ shape: o[C].shape, origIdx: C }), o.splice(C, 1), s.splice(C, 1);
    L.sort((C, M) => {
      const U = C.shape.trueArea || C.shape.area;
      return (M.shape.trueArea || M.shape.area) - U;
    });
    const O = new Set(o.map((C) => C.shape.autoId)), q = {
      ...i.scoringWeights || Be,
      contour: 0.15
      // 5x boost — strongly favor contour-matching positions
    }, Y = { ...i, scoringWeights: q }, E = L.map((C) => {
      const M = ws(C.shape.autoId, O, i.contourMatches);
      return { ...C, contourScore: M?.complementScore ?? 0, contourMatch: M };
    });
    E.sort((C, M) => {
      if (M.contourScore !== C.contourScore) return M.contourScore - C.contourScore;
      const U = C.shape.trueArea || C.shape.area;
      return (M.shape.trueArea || M.shape.area) - U;
    });
    let A = 0;
    for (const { shape: C, contourMatch: M } of E) {
      if (!C.outline?.length || C.outline.length < 3) continue;
      let U = null, H = 1 / 0;
      const K = [...i.shapeRotationMap?.get(C.autoId) || i.rotationSteps];
      if (M && M.optimalRotationB !== 0) {
        const _ = M.optimalRotationB;
        K.some((V) => Math.abs(V - _) < 0.01) || K.push(_);
      }
      for (const _ of K) {
        const V = bs(
          C,
          C.outline,
          _,
          n,
          o,
          Y,
          M
        );
        V && V.score < H && (H = V.score, U = {
          shapeAutoId: C.autoId,
          x: V.x,
          y: V.y,
          rotation: _
        });
      }
      U && (s.push(U), o.push(Xt(C, U.x, U.y, U.rotation)), O.add(C.autoId), A++, d++);
    }
    c.rebuild(o);
    for (let C = 0; C < o.length; C++) {
      const M = It(C, o, l, n.l, n.w, i.spacing, c);
      M && (c.remove(C, o[C].bounds), o[C] = M, c.insert(C, M.bounds), yt(s, C, M));
    }
    let G = 0;
    for (const C of o) {
      const M = l === "x" ? C.bounds.maxX : C.bounds.maxY;
      M > G && (G = M);
    }
    if (console.log(`[nesting] Phase 5 round ${y + 1}: re-inserted ${A}/${L.length}, extent ${x.toFixed(1)} → ${G.toFixed(1)}`), G > x) {
      console.log(`[nesting] Phase 5 round ${y + 1}: rollback (extent increased)`), s.length = 0, o.length = 0;
      for (const C of P) s.push(C);
      for (const C of T) o.push(C);
      break;
    }
    if (G >= x * 0.99) break;
  }
  for (let y = 0; y < 3; y++) {
    let x = 0;
    const g = [...Array(o.length).keys()].sort((m, w) => {
      const I = l === "x" ? o[m].bounds.maxX : o[m].bounds.maxY;
      return (l === "x" ? o[w].bounds.maxX : o[w].bounds.maxY) - I;
    });
    for (const m of g) {
      const w = It(m, o, l, n.l, n.w, i.spacing, c);
      w && (c.remove(m, o[m].bounds), o[m] = w, c.insert(m, w.bounds), yt(s, m, w), x++);
      const I = It(m, o, f, n.l, n.w, i.spacing, c);
      I && (c.remove(m, o[m].bounds), o[m] = I, c.insert(m, I.bounds), yt(s, m, I), x++);
    }
    if (d += x, x === 0) break;
  }
  let S = 0;
  for (const y of o) {
    const x = l === "x" ? y.bounds.maxX : y.bounds.maxY;
    x > S && (S = x);
  }
  return { placements: s, moved: d, maxExtent: S };
}
function il(t) {
  const e = [];
  for (let n = 0; n < t; n++)
    e.push(n * 2 * Math.PI / t);
  return e;
}
function sl(t) {
  return t.map((e) => {
    if (e instanceof Ae)
      return e;
    const n = e.outline, i = Array.isArray(n) && n.length >= 3, r = i ? n : [
      { x: 0, y: 0 },
      { x: e.l, y: 0 },
      { x: e.l, y: e.w },
      { x: 0, y: e.w },
      { x: 0, y: 0 }
    ];
    return new Ae({
      ...e.toData(),
      outline: r,
      trueArea: i ? ms(r) : e.l * e.w,
      nestingRotation: 0
    });
  });
}
function ol(t, e, n) {
  const i = e.reduce(
    (s, o) => s + (o.trueArea || o.area),
    0
  ), r = t.l * t.w;
  return {
    efficiency: r > 0 ? i / r : 0,
    firstRowLength: 0,
    firstShapeArea: e[0]?.trueArea || e[0]?.area || 0,
    firstShapeScore: 0,
    totalShapeArea: i,
    totalShapeScore: e.length,
    totalShapesPlaced: e.length,
    containerAvailableShapes: n.length,
    stockAvailableShapes: n.length,
    totalUnplacedShapes: n.length - e.length
  };
}
const rl = {
  async calculation(t, e, n) {
    const i = this.config, r = t?.rotationSteps || i?.nesting?.rotationSteps || 24, s = t?.spacing ?? i?.nesting?.spacing ?? 0, o = t?.contourAnalysis ?? i?.nesting?.contourAnalysis ?? !0, a = t?.strategy || "gravity", c = t?.compressionAxis ?? "x", l = t?.anneal ?? !0, f = t?.annealIterations ?? 5e3, d = e?.saw?.bladeWidth ?? 0, u = d + s;
    D("nesting", `Starting nesting: ${n.length} shapes, ${r} rotation steps, strategy: ${a}, bladeWidth: ${d}, spacing: ${u}`);
    const h = (C, M, U, H) => {
      this?.job && this.job.updateProgress({
        socketId: this.socketId,
        type: "algo",
        message: "progress",
        stockCount: 1,
        shapeCount: C,
        phase: M,
        placed: U,
        total: H
      });
    };
    h(0, "preparing");
    const p = sl(n), S = 24, y = /* @__PURE__ */ new Map();
    let x = 0;
    for (const C of p) {
      if (!C.outline || C.outline.length <= S) continue;
      y.set(C.autoId, { outline: C.outline, trueArea: C.trueArea });
      const M = dt(C.outline);
      let H = Math.sqrt(M.width ** 2 + M.height ** 2) * 5e-3, K = C.outline;
      for (let _ = 0; _ < 8 && (K = ha(C.outline, H), !(K.length <= S)); _++)
        H *= 1.5;
      K.length < C.outline.length && K.length >= 6 ? (x++, C.outline = K, C.trueArea = ms(K)) : y.delete(C.autoId);
    }
    x > 0 && console.log(`[nesting] Simplified ${x} outlines to ≤${S} vertices`);
    const g = il(r);
    h(0, "analysing");
    const m = o ? Oa(p) : [];
    m.length > 0 && D("nesting", `Found ${m.length} contour matches`);
    const w = new Fa();
    w.setSpacing(u);
    const I = /* @__PURE__ */ new Map();
    let b = 0;
    for (const C of p) {
      const M = Xa(C.outline, g);
      I.set(C.autoId, M), b += M.length;
    }
    const P = `Symmetry filter: avg ${p.length > 0 ? (b / p.length).toFixed(1) : "0"} rotations/shape (was ${g.length})`;
    D("nesting", P), console.log(`[nesting] ${P}`), h(0, "placing");
    const T = [c];
    let L = null, v = 1 / 0, O = c;
    for (const C of T) {
      const M = {
        rotationSteps: g,
        spacing: u,
        contourMatches: m,
        nfpCache: w,
        strategy: a,
        compressionAxis: C,
        scoringWeights: t?.scoringWeights,
        shapeRotationMap: I,
        onProgress: (_, V) => {
          h(_, "placing", _, V), this?.job?.extendLock && this.job.extendLock(3e5).catch(() => {
          });
        }
      }, U = setInterval(() => {
        this?.job?.extendLock && this.job.extendLock(3e5).catch(() => {
        });
      }, 12e4);
      let H;
      try {
        H = await Ja(e, p, M);
      } finally {
        clearInterval(U);
      }
      D("nesting", `[axis=${C}] Placed ${H.length}/${p.length} shapes`), h(H.length, "placing");
      let K = 1 / 0;
      if (l && H.length >= 2) {
        h(H.length, "optimising");
        const _ = el(
          H,
          p,
          e,
          M,
          { maxIterations: f }
        );
        H = _.placements, K = _.stats.bestEnergy;
        const V = _.stats, Ht = `SA [axis=${C}]: ${V.accepted} accepted (${V.improving} improving) / ${V.iterations} iterations, energy ${V.initialEnergy.toFixed(6)} → ${V.bestEnergy.toFixed(6)} (${V.improved ? `improved by ${((1 - V.bestEnergy / V.initialEnergy) * 100).toFixed(2)}%` : "no improvement"})`;
        D("nesting", Ht), console.log(`[nesting] ${Ht}`);
      } else if (H.length > 0) {
        const _ = C === "x" ? e.l : e.w;
        let V = 0;
        for (const Ht of H) {
          const ze = p.find((vs) => vs.autoId === Ht.shapeAutoId);
          if (!ze) continue;
          const Ln = C === "x" ? Ht.x + ze.l : Ht.y + ze.w;
          Ln > V && (V = Ln);
        }
        K = V / _;
      }
      if (H.length >= 2) {
        h(H.length, "compacting");
        const _ = nl(H, p, e, M);
        H = _.placements, _.moved > 0 && D("nesting", `[axis=${C}] Compaction: ${_.moved} shapes moved tighter`);
        const V = C === "x" ? e.l : e.w;
        K = _.maxExtent / V;
      }
      console.log(`[nesting] [axis=${C}] Post-compaction energy: ${K.toFixed(6)}, placed: ${H.length}`), (!L || H.length > L.length || H.length === L.length && K < v) && (L = H, v = K, O = C);
    }
    const q = L;
    D("nesting", `Best axis: ${O}, energy: ${v.toFixed(6)}, placed: ${q.length}/${p.length}`);
    for (const [C, M] of y) {
      const U = p.find((H) => H.autoId === C);
      U && (U.outline = M.outline, U.trueArea = M.trueArea);
    }
    const Y = [];
    for (const C of q) {
      const M = p.find((U) => U.autoId === C.shapeAutoId);
      M && (M.x = C.x, M.y = C.y, M.nestingRotation = C.rotation, M.added = !0, M.stock = e, Y.push(M));
    }
    const E = ol(e, Y, p);
    h(Y.length, "cutting-plan");
    let A = null;
    try {
      A = Ss(Y, e, { ...t?.cnc, kerfWidth: d }), console.log(`[nesting] Cutting plan: ${A.contours.length} contours, cut: ${A.totalCutDistance}mm, rapid: ${A.totalRapidDistance}mm` + (A.commonLineSaved > 0 ? `, common-line saved: ${A.commonLineSaved}mm` : ""));
    } catch (C) {
      console.error("[nesting] Cutting plan generation failed:", C);
    }
    A && (this.cuttingPlans || (this.cuttingPlans = {}), this.cuttingPlans[e.autoId] = A);
    const G = {
      shapes: p.map((C) => C.compress()),
      firstShape: Y[0] || null,
      topPriorityShape: "",
      cutType: "nesting",
      type: "algo",
      stock: e,
      stockID: e.id,
      score: E,
      cuttingPlan: A
    };
    await ht.call(this, G, "nesting");
  }
}, Ot = {
  types: ["efficiency", "guillotine", "beam", "linear", "roll", "nesting"],
  getCalculationType(t) {
    switch (t?.cutType) {
      case "efficiency":
        return t.cutType;
      case "guillotine":
        return t.cutType;
      case "beam":
        return t.cutType;
      case "nesting":
        return t.cutType;
    }
    switch (t?.saw?.stockType) {
      case "linear":
        return t.saw.stockType;
      case "roll":
        return t.saw.stockType;
    }
    return null;
  },
  efficiency: async function(t, e, n) {
    await Bt.calculation.call(this, t, e, n);
  },
  guillotine: async function(t, e, n, i = []) {
    if (this.counters.placement = 0, t.secondRun && i.length) {
      for (const r of i) {
        const s = n.filter((o) => !o.added);
        r.shapes = s, await me.call(
          this,
          t,
          e,
          s,
          r
        );
      }
      return;
    }
    await me.call(
      this,
      t,
      e,
      n
    );
  },
  beam: async function(t, e, n, i = []) {
    if (this.counters.placement = 0, t.secondRun && i.length) {
      for (const r of i) {
        const s = n.filter((o) => !o.added);
        r.shapes = s, await me.call(
          this,
          t,
          e,
          s,
          r
        );
      }
      return;
    }
    await me.call(
      this,
      t,
      e,
      n
    );
  },
  roll: async function(t, e, n) {
    let i = [];
    switch (e.cutType) {
      case "guillotine":
        e.saw.cutPreference = "w", i = await Ot.guillotine.call(
          this,
          t,
          e,
          n
        );
        break;
      case "efficiency":
        e.saw.efficiencyOptions.primaryCompression = "l", i = await Ot.efficiency.call(
          this,
          t,
          e,
          n
        );
        break;
    }
    await ht.call(this, i);
  },
  linear: async function(t, e, n) {
    const i = to.call(this, e, n);
    i && e && (eo(i, e, n), i.stock = e, await ht.call(this, i));
  },
  nesting: async function(t, e, n) {
    await rl.calculation.call(this, {}, e, n);
  }
};
async function al({
  shapeOrGroup: t,
  container: e,
  weighting: n,
  containerPlacedShapes: i = null,
  unplacedShapes: r = null,
  placementPositions: s = null,
  rayCastCoords: o = null,
  placedCoords: a = null
}) {
  if (!i)
    throw new Error("findBestShapePosition was not passed any placedShapes");
  if (!r)
    throw new Error("findBestShapePosition was not passed any unplacedShapes");
  if (!t)
    throw new Error("findBestShapePosition was not passed a shape");
  if (st(t))
    try {
      t.updateShapeSpacing(e);
    } catch {
      return !1;
    }
  const c = e.l + e.x - t.l, l = e.w + e.y - t.w;
  if (c < 0 || l < 0) return !1;
  const f = new nn(), d = e.getStock;
  if (o)
    for (const u of o.points.values()) {
      const h = so(
        t,
        u,
        e
      );
      h && f.addPoints(h.toArray());
    }
  for (const u of s.points.values()) {
    const h = oo(
      t,
      u,
      e
    );
    f.addPoints(h.toArray());
  }
  if (e.cutType === "efficiency") {
    const u = t.getMinSpacing(e.saw);
    if (u > 0)
      for (const h of f.points.values()) {
        if (t.x = h.x, t.y = h.y, t.isTooCloseToEdges(e)) {
          h.tooClose = !0;
          continue;
        }
        if (!et(e) && t.isTooCloseToEdges(d)) {
          h.tooClose = !0;
          continue;
        }
        if (!h.tooClose) {
          const p = t.createProximityRectangle(u);
          if (!p)
            throw new Error("unable to create proximity rectangle");
          for (const S of i)
            if (h.tooClose = Oi(
              p,
              S,
              e,
              !1
            ), h.tooClose) break;
        }
      }
  }
  for (const u of f.points.values()) {
    if (u.tooClose || R.greaterThan(u.x, c) || R.greaterThan(u.y, l) || (t.x = u.x, t.y = u.y, Te(t, i, e))) continue;
    ci(
      t,
      e,
      n,
      i,
      r,
      u,
      a
    );
    let p = r.length > 1;
    (e.cutType === "efficiency" && this.config.groups.efficiency.position || ["guillotine", "beam"].includes(e.cutType) && this.config.groups.guillotine.position) && (ll.call(this, r, e) || (p = !1)), p && (e.cutType === "efficiency" && this.config.groups.efficiency.position || ["guillotine", "beam"].includes(e.cutType) && this.config.groups.guillotine.position) && u.type !== "group" && W(t) && ro({
      container: e,
      containerPlacedShapes: i,
      unplacedShapes: r,
      shape: t,
      point: u,
      config: this.config,
      scoreFunction: (S, y, x, g, m) => {
        ci(
          S,
          y,
          n,
          x,
          g,
          m,
          a
        );
      }
    });
  }
  return !0;
}
function ll(t, e) {
  return !0;
}
async function $s(t, e, n = null, i = null, r = {}, s = null) {
  if (!i)
    throw new Error("no testFunction provided to testShapeRotations");
  if (typeof i != "function")
    throw new Error("testFunction provided to testShapeRotations is not a function");
  if (i.constructor.name !== "AsyncFunction")
    throw new Error("testFunction provided to testShapeRotations must be async");
  if (F(t)) {
    s && (r[s] = t.rot), await i.call(this, r);
    return;
  }
  wt(t.orientationLock) && (n = no(t, e));
  const o = wt(n) ? n : 0;
  qt(t, o, e) && (At(t, o, e), s && (r[s] = o), await i.call(this, r));
  const a = 1;
  n === null && !t.isSquare && qt(t, a, e) && (At(t, a, e), s && (r[s] = a), await i.call(this, r));
}
async function mn(t, e, n) {
  if (!t.length) return !1;
  if (ft(t)) {
    const d = /* @__PURE__ */ new Set();
    t = t.filter((u) => d.has(u.autoId) ? !1 : (d.add(u.autoId), !0));
  }
  const r = n.getStock;
  if (r.saw && !oe(r.saw)) throw new Error("not real saw");
  const s = t?.filter((d) => d.added);
  if (!s.length) return;
  const o = new Set(s.map((d) => d.autoId)), a = s.filter(
    (d) => Zt(d, n, "x") && Zt(d, n, "y")
  ), c = Gn.call(
    this,
    null,
    a,
    n
  );
  if (c.points.size === 0) return !1;
  const l = e ? {
    x: /* @__PURE__ */ new Map([[e.x, [e]]]),
    y: /* @__PURE__ */ new Map([[e.y, [e]]])
  } : {
    x: /* @__PURE__ */ new Map(),
    y: /* @__PURE__ */ new Map()
  };
  function f() {
    const d = at(
      t,
      r,
      "filter"
    ), u = /* @__PURE__ */ new Set();
    for (const x of d)
      if (F(x) && !ct(x)) {
        const g = x;
        if (g.shapes?.length)
          for (const m of g.shapes)
            u.add(m.autoId);
      }
    const h = d.filter((x) => {
      if (ct(x)) return !1;
      if (Pe(x) || st(x)) {
        const g = x;
        return !(!g.shapes || g.shapes.length === 0);
      }
      if (Ce(x))
        return !(u.has(x.autoId) || x?.group?.inGroup);
    }), p = h.filter((x) => F(x) && !ct(x)), S = h.filter((x) => Ce(x)), y = [...p, ...S];
    return D("groups", () => `[getRelevantUnplacedShapes] ${y.length} unplaced (${p.length} groups, ${S.length} shapes)`), p.length > 0 && p.forEach((x) => {
      D("groups", () => `Group ${x.id}: ${x.shapes?.length || 0} child shapes, ${x.shapes.map((g) => g.id).join()}, added=${x.added}`);
    }), y;
  }
  for (let d = f(); d.length; ) {
    let u = function() {
      const m = d.filter((b) => typeof b?.bestScore?.total == "number");
      if (!m?.length) return !1;
      const w = fl(m);
      if (!w) return null;
      const I = ul.call(this, n, r, l, w, s, a, o);
      return I.added && !o.has(I.autoId) && (F(I) && I.type !== "position" || (s.push(I), a.push(I)), o.add(I.autoId), nt(n) && (n.shapes = n.shapes.filter(($) => $.autoId !== I.autoId))), N([
        () => k(I.added).to.be.true,
        () => k(ft(s), "duplicates found in containerPlacedShapes").to.be.false,
        () => k(s.every((b) => b.added), "containerPlacedShapes contains unplaced shapes").to.be.true
      ]), { bestShapeOrGroup: w, winningShapeOrGroup: I };
    }, h = null;
    this.uniqueShapes.length > 1 && n.cutType === "efficiency" && this.config.efficiency.rayCasting && !this.hasMinSpacing && (h = io(
      n,
      s
    ));
    const p = d.length;
    let S = !1;
    for (let m = 0; m < p; m++) {
      let w = !1;
      if (S && d[m].isSameSize(d[m - 1]))
        continue;
      for (let $ = 0; $ < m; $++)
        if (d[$].isSameSize(d[m])) {
          w = !0;
          break;
        }
      if (w) {
        S = !0;
        continue;
      } else
        S = !1;
      const I = d[m];
      I.resetBestScore();
      const b = vn.call(this, n, r, I);
      if (await $s.call(
        this,
        I,
        n,
        null,
        al,
        {
          shapeOrGroup: I,
          container: n,
          weighting: b,
          containerPlacedShapes: s,
          unplacedShapes: d,
          placementPositions: c,
          rayCastCoords: h,
          placedCoords: l
        }
      ), F(I) && !ct(I) && !st(I)) {
        const $ = I;
        if (!$.bestScore || typeof $.bestScore.total != "number") {
          D("groups", () => `[placeShapes] Group ${$.id} has no valid placement. Releasing it and all clones.`);
          const P = $.autoId.replace(/\.\d+$/, ""), T = [];
          for (const L of t)
            if (F(L) && !ct(L)) {
              const v = L;
              v.autoId.replace(/\.\d+$/, "") === P && !v.added && T.push(v);
            }
          if (T.length > 0) {
            D("groups", () => `  Releasing ${T.length} groups (including clones)`);
            const L = [], v = /* @__PURE__ */ new Set();
            for (const O of T)
              if (O.shapes && O.shapes.length > 0)
                for (const q of O.shapes)
                  v.has(q.autoId) || (L.push(q), v.add(q.autoId));
            for (const O of T)
              D("groups", () => `    Destroying group ${O.id}`), O.destroy();
            L.length > 0 && (D("groups", () => `  Adding ${L.length} released shapes back to containerShapes`), t.push(...L));
          }
        }
      }
    }
    const y = u.call(this, t);
    if (y === !1 || y === null) return;
    const { bestShapeOrGroup: x, winningShapeOrGroup: g } = y;
    if (d = f(), d.length > 0) {
      const m = Gn(
        g ? [g] : [],
        a,
        n
      );
      c.addPoints(m.toArray()), c.deletePoint(new en(x.x, x.y));
    }
    this.resetShapes(d, {
      keepScores: !1,
      removeGroups: !1,
      keepGuillotineData: !0,
      keepFirstShapeSampleRotations: !1
    });
  }
  return !0;
}
function cl(t, e) {
  if (this.config.evo.disable || t.stockID !== e.id) return !1;
  const n = at(this.shapeList, e, "filter", null), i = Dt(n, null, !0);
  return i.length <= 1 || e?.saw?.stockType === "roll" || i.length > 100 || t?.algoTime > 2e3 || !this.enableEvo || t.cutType === "efficiency" && t?.score[this.successMetric] < 0.65 || t?.score?.totalShapesPlaced <= 2 ? !1 : n.length <= this.config.evo.stockLimit;
}
function ul(t, e, n, i, r, s, o) {
  const a = F(i) ? i : i.bestScore?.group ?? null;
  if (a) {
    const l = a.shapes.filter((f) => f.added || f.group?.inGroup);
    if (l.length > 0)
      D("groups", () => `[placeBestShapeOrGroup] Group ${a.id} is invalid - ${l.length}/${a.shapes.length} shapes already placed. Placing individual shape instead.`), F(i) || (i.bestScore.group = null);
    else {
      if (D("groups", () => `[placeBestShapeOrGroup] Placing group ${a.id} with ${a.shapes.length} shapes (type=${a.type})`), a.placementOrder = this.counters.placement, this.counters.placement += a.shapes.length, a.setPositionToBestScore(), ai(t, a), a.addToStock(e), un(n, a), a.placeMyShapes(e), a.type === "position")
        for (const f of a.shapes)
          this.shapeList.some((d) => d.autoId === f.autoId) || this.shapeList.push(f);
      if (a.type !== "position" && a.type !== "firstShape")
        for (const f of a.shapes)
          f.added && !f.group?.inGroup && !o.has(f.autoId) && (r.push(f), s.push(f), o.add(f.autoId));
      return a;
    }
  } else i && (i.placementOrder = this.counters.placement++, i.setPositionToBestScore(), ai(t, i), i.addToStock(e), un(n, i));
  return a || i;
}
function fl(t) {
  return t.reduce((n, i) => {
    if (i.bestScore.total > n.bestScore.total)
      return i;
    if (i.bestScore.total === n.bestScore.total) {
      if (F(i) && !F(n))
        return i;
      if (i.area > n.area) return i;
    }
    return n;
  });
}
let hl = class {
  // Stub for Schema.Types.ObjectId used in server models
  static Types = {
    ObjectId: {},
    String: {},
    Number: {},
    Boolean: {},
    Array: {},
    Buffer: {},
    Date: {},
    Mixed: {}
  };
  constructor(...e) {
  }
  plugin(...e) {
    return this;
  }
  pre(...e) {
    return this;
  }
  post(...e) {
    return this;
  }
  method(...e) {
    return this;
  }
  static(...e) {
    return this;
  }
  virtual(...e) {
    return {
      get: () => this,
      set: () => this
    };
  }
  index(...e) {
    return this;
  }
};
function dl(...t) {
  return class {
  };
}
const de = {
  Schema: hl,
  model: dl,
  connect: () => Promise.resolve(),
  connection: {}
}, ne = de.Schema, Cs = {
  code: String,
  cost: {
    type: Number,
    min: 0
  },
  discount: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
  grain: {
    type: String,
    enum: ["l", "w", "", null],
    default: ""
  },
  trim: Array,
  db_sawId: {
    type: ne.Types.ObjectId,
    ref: "saws"
  },
  extras: {
    banding: {
      type: ne.Types.ObjectId,
      ref: "extras"
    },
    finish: {
      type: ne.Types.ObjectId,
      ref: "extras"
    },
    planing: {
      type: ne.Types.ObjectId,
      ref: "extras"
    },
    machining: {
      type: ne.Types.ObjectId,
      ref: "extras"
    }
  },
  category: String,
  variant: String,
  color: String,
  colorHex: String,
  imageUrl: String,
  tags: {
    type: [String],
    default: []
  },
  weight: {
    type: Number,
    min: 0
  },
  finish: String
}, pl = de.Schema, zt = new pl({
  organisation: {
    type: String,
    required: !0
  },
  name: String,
  description: String,
  type: {
    type: String,
    enum: ["sheet", "linear", "roll"],
    default: "sheet"
  },
  l: Number,
  //default l
  w: Number,
  // default w
  t: Array,
  //available thicknesses
  notes: Array,
  custom: {
    type: Map,
    of: String
  },
  // Sample ordering configuration
  sample: {
    enabled: { type: Boolean, default: !1 },
    price: { type: Number, default: 0 },
    // 0 = free
    description: String,
    maxQuantity: { type: Number, default: 1 }
  },
  ...Cs
});
zt.index({ organisation: 1, name: 1 });
zt.index({ organisation: 1, type: 1 });
zt.index({ organisation: 1, _id: -1 });
zt.index({ organisation: 1, l: 1, w: 1 });
zt.index({ name: "text", type: "text", description: "text" });
zt.plugin(Fi);
const gl = de.model(
  "material",
  zt,
  "materials"
), Ci = de.Schema, it = new Ci({
  organisation: {
    type: String,
    required: !0
  },
  name: String,
  description: String,
  material: {
    type: String,
    required: !0
  },
  db_materialId: {
    type: Ci.Types.ObjectId,
    ref: "material",
    index: !0
  },
  t: {
    type: Number,
    min: 0,
    required: !1
  },
  l: {
    type: Number,
    min: 0,
    required: !0
  },
  w: {
    type: Number,
    min: 0
  },
  q: {
    type: Number,
    min: 0,
    required: !0
  },
  area: { type: Number },
  ecommerce: {
    type: Boolean,
    default: !1,
    index: !0
  },
  isOffcut: {
    type: Boolean,
    default: !1,
    index: !0
  },
  allowExactFitShapes: {
    type: Boolean,
    default: !1
  },
  unlimitedQuantity: {
    type: Boolean,
    default: !1
  },
  // Fields that override material values (empty array = inherit all from material)
  // When a field is in this array, the stock's value is used instead of material's
  overrides: {
    type: [String],
    default: []
  },
  ...Cs
});
function ml(t) {
  return t ? {
    l1: pe({ v: t[2], dp: 4 }),
    l2: pe({ v: t[3], dp: 4 }),
    w1: pe({ v: t[0], dp: 4 }),
    w2: pe({ v: t[1], dp: 4 })
  } : {
    l1: 0,
    l2: 0,
    w1: 0,
    w2: 0
  };
}
it.pre("save", function() {
  this.material = this.material?.toLowerCase(), this.area = (this.l - parseFloat(this?.trim?.[2]) - parseFloat(this?.trim?.[3])) * (this.w - parseFloat(this?.trim?.[0]) - parseFloat(this?.trim?.[1]));
});
it.index({ organisation: 1, name: 1 });
it.index({ organisation: 1, material: 1 });
it.index({ organisation: 1, db_materialId: 1 });
it.index({ organisation: 1, ecommerce: 1, isOffcut: 1, name: 1 });
it.index({ organisation: 1, ecommerce: 1, isOffcut: 1, material: 1 });
it.index({ organisation: 1, ecommerce: 1, isOffcut: 1, _id: -1 });
it.index({ organisation: 1, ecommerce: 1, isOffcut: 1, t: 1 });
it.index({ organisation: 1, ecommerce: 1, isOffcut: 1, cost: 1 });
it.index({ organisation: 1, ecommerce: 1, isOffcut: 1, l: 1, w: 1 });
it.index({ organisation: 1, ecommerce: 1, isOffcut: 1, category: 1 });
it.index({ organisation: 1, ecommerce: 1, q: 1 });
it.index({ organisation: 1, ecommerce: 1, isOffcut: 1, material: 1, name: 1, l: 1, w: 1, t: 1 });
it.index({ organisation: 1, isOffcut: 1, material: 1 });
it.index({ name: "text", material: "text", category: "text", tags: "text" });
it.plugin(Fi);
const yl = de.model(
  "stock",
  it,
  "stock"
);
async function xl(t = [], e, n = []) {
  e instanceof ve || (e = new ve(e));
  let i = [];
  const r = [];
  for (const s of t) {
    if (!wt(s.material)) continue;
    const o = i.filter((a) => {
      if (Jt(s, a)) {
        let c = !1, l = !1, f = !0;
        if (a?.saw?.stockType === "linear" && (R.equalTo(s.w, a.w) || (f = !1)), (s.t === a.t || !wt(a.t)) && (l = !0), s.material === a.material && (c = !0), a?.saw?.stockType === "linear") {
          if (c && l && f)
            return !0;
        } else if (c && l) return !0;
      }
      return !1;
    });
    if (o.length) {
      s.stockLock = o.map((a) => a.parentId);
      continue;
    }
    try {
      const a = {
        $and: [
          {
            material: s?.material?.toLowerCase(),
            t: s.t,
            q: { $gt: 0 },
            l: { $gte: s.l },
            w: { $gte: s.w }
          },
          {
            id: {
              $nin: n.map((f) => f?.id?.toLowerCase())
            }
          }
        ]
      }, [c, l] = await Promise.all([
        gl.findById(s?.material?.toLowerCase())?.lean(),
        //TODO make sorting order and limit configurable based on org
        yl.find(a).sort({ area: 1 }).limit(3).lean()
      ]);
      c && l.length ? l.forEach((f) => {
        const d = ml(f.trim), u = {
          l: f.l - (d.l1 ?? 0) - (d.l2 ?? 0),
          w: f.w - (d.w1 ?? 0) - (d.w1 ?? 0)
        };
        if (!(R.lessThanOrEqualTo(
          s.l,
          u.l
        ) && R.lessThanOrEqualTo(
          s.w,
          u.w
        ) || R.lessThanOrEqualTo(
          s.w,
          u.l
        ) && R.lessThanOrEqualTo(
          s.l,
          u.w
        )))
          return;
        const h = ao.parse({
          // Base dimensions from stockItem
          l: f.l,
          w: f.w,
          t: f.t,
          q: f.q,
          cost: f.cost,
          grain: f.grain || "",
          material: f.material,
          // Generated IDs
          id: (n.length + i.length + 1).toFixed(1),
          parentId: (n.length + i.length + 1).toString(),
          // Additional required fields
          name: c.name,
          autoAdd: !1,
          //material based calculations do not allow autoAdd
          trim: d,
          stockType: e.stockType,
          // Required fields with defaults
          duplicate: !1,
          offcut: !1,
          issues: [],
          warnings: [],
          shapes: [],
          isContainer: !0,
          preventGrainRotation: !1,
          allowExactFitShapes: !1
        });
        i.push(new sn(h)), Array.isArray(s.stockLock) ? s.stockLock.push(h.parentId) : s.stockLock = [h.parentId];
      }) : r.push({
        material: c.name,
        t: s.t,
        shape: s.parentId
      });
    } catch (a) {
      throw console.error("error finding stock", a.message), new Error(a);
    }
  }
  if (i.length)
    i = on(i);
  else if (!n?.length)
    throw new Error("No relevant stock found - check material, thickness, dimensions & stock quantity");
  return {
    stockList: i,
    unavailableStock: r
  };
}
function Sl(t, e) {
  const n = Math.min(t.l, t.w), i = Math.max(t.l, t.w), r = t.trim;
  return `${e ? t.parentId + "|" : ""}${t.t}|${t.orientationLock}|${t.material ?? ""}|${n}|${i}|${r?.l1 ?? ""}|${r?.l2 ?? ""}|${r?.w1 ?? ""}|${r?.w2 ?? ""}`;
}
function wl(t, e, n = !1) {
  const i = /* @__PURE__ */ new Map();
  for (const s of e) {
    s.identicalTo = [];
    let o = i.get(s.parentId);
    o || (o = [], i.set(s.parentId, o)), o.push(s);
  }
  const r = /* @__PURE__ */ new Map();
  for (const s of t) {
    const o = Sl(s, n);
    let a = r.get(o);
    a || (a = /* @__PURE__ */ new Set(), r.set(o, a)), a.add(s.parentId);
  }
  for (const s of r.values())
    if (!(s.size <= 1))
      for (const o of s) {
        const a = i.get(o);
        if (a)
          for (const c of a)
            for (const l of s)
              l !== c.parentId && c.identicalTo.push(l);
      }
  for (const [s, o] of i)
    if (o.length > 1)
      for (const a of o)
        a.identicalTo.includes(s) || a.identicalTo.push(s);
}
function bl(t, e) {
  const n = /* @__PURE__ */ new Map();
  for (const r of e)
    n.has(r.parentId) || n.set(r.parentId, r);
  const i = /* @__PURE__ */ new Map();
  for (const r of t) {
    let s = i.get(r.parentId);
    s || (s = [], i.set(r.parentId, s)), s.push(r);
  }
  for (const r of i.values()) {
    const s = r[0], o = {};
    for (const a of n.values()) {
      const c = Ne(s, a);
      o[a.parentId] = {
        any: Jt(s, a, null),
        0: c.includes(0),
        1: c.includes(1)
      };
    }
    for (const a of r)
      a.fitsStock = o;
  }
}
function Il(t, e, n, i) {
  const r = i?.similarityThreshold ?? 0.1, s = i?.selectionStrategy, o = i?.minPerShape ?? 0, a = i?.minTotal ?? 0;
  if (t.length <= 1)
    return e;
  const { filtered: c, excludedGroups: l } = Cl(
    t,
    n,
    { similarityThreshold: r, selectionStrategy: s }
  );
  let f = [...c], d = [...l];
  if (o > 0) {
    const p = /* @__PURE__ */ new Map();
    for (const y of e) {
      const x = p.get(y.parentId) || 0;
      p.set(y.parentId, x + 1);
    }
    const S = f.filter((y) => (p.get(y.parentId) || 0) < o);
    if (S.length > 0) {
      for (const y of S) {
        const x = y.parentId;
        for (const g of d) {
          const m = g.filter((w) => (p.get(w.original.parentId) || 0) >= o);
          if (m.length > 0) {
            const w = m.sort((b, $) => (p.get($.original.parentId) || 0) - (p.get(b.original.parentId) || 0))[0], I = f.findIndex((b) => b.parentId === x);
            if (I !== -1) {
              f[I] = w.original;
              const b = g.findIndex(($) => $ === w);
              b !== -1 && g.splice(b, 1);
              break;
            }
          }
        }
      }
      d = d.filter((y) => y.length > 0);
    }
  }
  if (a > 0) {
    const p = new Set(f.map((y) => y.parentId)), S = e.filter((y) => p.has(y.parentId)).length;
    if (S < a && d.length > 0) {
      const y = [];
      let x = S;
      for (; x < a && d.some((g) => g.length > 0); ) {
        for (let g = 0; g < d.length && x < a; g++) {
          const m = d[g];
          if (m.length > 0) {
            const I = $l([...m], s)[0], b = I.original.parentId, $ = e.filter((T) => T.parentId === b).length;
            y.push(I.original), x += $;
            const P = m.findIndex((T) => T === I);
            P !== -1 && m.splice(P, 1);
          }
        }
        if (d = d.filter((g) => g.length > 0), d.length === 0 || d.every((g) => g.length === 0))
          break;
      }
      f = [...f, ...y];
    }
  }
  const u = new Set(f.map((p) => p.parentId));
  return e.filter((p) => u.has(p.parentId));
}
function $l(t, e) {
  switch (e) {
    case "largest":
      return t.sort((n, i) => i.area - n.area);
    case "smallest":
      return t.sort((n, i) => n.area - i.area);
    default:
      return t;
  }
}
function Cl(t, e, n) {
  const i = n.similarityThreshold, r = n.selectionStrategy;
  if (t.length <= 1) return { filtered: t, excludedGroups: [] };
  const s = t.map((l) => {
    const f = {
      l: l.longSide,
      w: l.shortSide
    };
    return {
      original: l,
      // Keep reference to the original shape object
      rotated: f,
      // Normalized dimensions for comparison (keeping 'rotated' name for compatibility)
      area: l.area
      // Area for 'largest'/'smallest' selection
    };
  }), o = [];
  for (const l of s) {
    let f = !1;
    for (const d of o)
      if (d.some((u) => Pl(l.rotated, u.rotated, i))) {
        d.push(l), f = !0;
        break;
      }
    f || o.push([l]);
  }
  const a = [], c = [];
  return o.forEach((l) => {
    if (l.length === 1) {
      a.push(l[0]);
      return;
    }
    let f;
    switch (r) {
      case "largest":
        f = l.reduce((u, h) => h.area > u.area ? h : u, l[0]);
        break;
      case "smallest":
        f = l.reduce((u, h) => h.area < u.area ? h : u, l[0]);
        break;
      default:
        f = l[0];
    }
    a.push(f);
    const d = l.filter((u) => u !== f);
    d.length > 0 && c.push(d);
  }), {
    filtered: a.map((l) => l.original),
    excludedGroups: c
  };
}
function Pl(t, e, n) {
  const i = Math.abs(t.l - e.l) / Math.max(t.l, e.l, 1), r = Math.abs(t.w - e.w) / Math.max(t.w, e.w, 1);
  return i <= n && r <= n;
}
function Tl(t, e, n) {
  if (D("stack", () => `previous stock ${e.id}`), ["l", "w", "material", "t"].some((s) => t[s] !== e[s])) return !1;
  const i = t.cutType === "guillotine" || t.cutType === "beam", r = t.saw.guillotineOptions?.strategy !== "time";
  if (!i || i && r) {
    const s = Ps.call(
      this,
      t,
      e,
      n,
      this.shapeList
    );
    if (s)
      return D("stack", () => `stack found: ${t.id} === ${e.id}`), this.recordStackToBestResult(t, n), t.used = !0, t.score = e.score, s;
  }
  return !1;
}
function Ps(t, e, n, i) {
  if (!this.config.stack || !n.length) return !1;
  const r = t.saw;
  if (!r?.options?.stackingMode || r.options.stackingMode === "none") return !1;
  if (D("stack", () => `looking for stack for ${t.id}, comparing to ${e.id}`), r.cutType === "beam" && e.stack) {
    let s = e, o = 1;
    if (e.stack.stock ? (s = e.stack.stock, o = s.stack?.number || 1) : e.stack.number && (o = e.stack.number), s.t * o + t.t > r.stackHeight)
      return !1;
  }
  if (t.parentId === e.parentId) {
    if (r.cutType === "beam" && r.stackHeight > 0 && t.t * 2 > r.stackHeight)
      return !1;
    const s = bt(i, e);
    if (!s.length) return !1;
    const o = Ts.call(this, [e], s, t, n, !0, r.options.stackingMode === "identical");
    if (o)
      return t.stack = { stock: o }, o.stack.number === 1 ? o.stack.number = 2 : o.incrementStack(), o;
  }
  return !1;
}
function vl(t, e) {
  if (!this.config.findDuplicatePatterns) return !1;
  D("stack", () => `🔎 checkForDuplicates called for ${t.id}`);
  const n = this.shapeList.filter((o) => o.added);
  D("stack", () => `   Total shapes added across all stock: ${n.length}`);
  const i = this.stockList.filter((o) => o.used && o.id !== t.id && o.l === t.l && o.w === t.w && o.t === t.t);
  if (D("stack", () => `   Relevant used stock with matching dimensions: ${i.map((o) => o.id).join(", ")}`), !i.length)
    return D("stack", () => `   No relevant stock found for ${t.id}`), !1;
  const r = t.saw?.options?.stackingMode === "identical", s = Ts.call(this, i, n, t, e, !0, r);
  return s ? (D("stack", () => `   ✅ Duplicate found: ${t.id} matches ${s.id}`), lo(s, t), t.used = !0, s) : (D("stack", () => `   No duplicate pattern found for ${t.id}`), !1);
}
function Ts(t, e, n, i, r = !0, s = !0) {
  if (!t.length || !i.length) return null;
  D("stack", () => `🔍 Checking for duplicate patterns for ${n.id}`), D("stack", () => `   Current shapes count: ${i.length}`), D("stack", () => `   Used stock to check: ${t.map((u) => u.id).join(", ")}`);
  const o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  for (const u of i) {
    const h = s ? `${u.longSide}|${u.shortSide}|${u.material}` : `${u.longSide}|${u.shortSide}`;
    let p = o.get(h);
    if (p || (p = [], o.set(h, p)), p.push(u), s) {
      if (u.parentId) {
        let S = a.get(u.parentId);
        S || (S = [], a.set(u.parentId, S)), S.push(u);
      }
      if (u.identicalTo && Array.isArray(u.identicalTo))
        for (const S of u.identicalTo) {
          let y = c.get(S);
          y || (y = [], c.set(S, y)), y.push(u);
        }
      if (u.autoId) {
        const S = u.autoId.split(".")[0];
        let y = l.get(S);
        y || (y = [], l.set(S, y)), y.push(u);
      }
    }
  }
  const f = /* @__PURE__ */ new Map();
  for (const u of e) {
    if (!u.added || !u.stock?.id) continue;
    const h = u.stock.id;
    let p = f.get(h);
    p || (p = [], f.set(h, p)), p.push(u);
  }
  const d = /* @__PURE__ */ new Map();
  for (const u of t) {
    D("stack", () => `   📋 Checking against stock ${u.id}`);
    const h = f.get(u.id) || [];
    if (!h.length) {
      D("stack", () => `      ❌ No shapes on ${u.id}, skipping`);
      continue;
    }
    D("stack", () => `      Stock ${u.id} has ${h.length} shapes`);
    const p = h.length;
    if (i.length < p) continue;
    const S = [];
    d.clear();
    let y = !0;
    for (const x of h) {
      let g = null;
      if (s) {
        const m = /* @__PURE__ */ new Set(), w = `${x.longSide}|${x.shortSide}|${x.material}`, I = o.get(w);
        if (I)
          for (const $ of I)
            d.has($) || m.add($);
        if (x.parentId) {
          const $ = c.get(x.parentId);
          if ($)
            for (const T of $)
              d.has(T) || m.add(T);
          const P = a.get(x.parentId);
          if (P)
            for (const T of P)
              d.has(T) || m.add(T);
        }
        if (x.identicalTo && Array.isArray(x.identicalTo))
          for (const $ of x.identicalTo) {
            const P = a.get($);
            if (P)
              for (const T of P)
                d.has(T) || m.add(T);
          }
        if (x.autoId) {
          const $ = x.autoId.split(".")[0], P = l.get($);
          if (P)
            for (const T of P)
              d.has(T) || m.add(T);
        }
        const b = [];
        for (const $ of m)
          $.isIdentical(x, !1) && b.push($);
        b.length === 1 ? (g = b[0], D("stack", () => `      ✓ Shape ${x.id} matched to ${g.id}`)) : b.length > 1 ? (g = b.find(($) => $.parentId === x.parentId) || b[0], D("stack", () => `      ✓ Shape ${x.id} matched to ${g.id} (${b.length} candidates, preferred by parentId: ${g.parentId === x.parentId})`)) : D("stack", () => `      ✗ Shape ${x.id} has no identical match`);
      } else {
        const m = `${x.longSide}|${x.shortSide}`, w = o.get(m), I = w ? w.filter((b) => !d.has(b) && qt(b, x.rot, u)) : [];
        I.length === 1 ? g = I[0] : I.length > 1 && (g = I.find((b) => b.parentId === x.parentId) || I[0]);
      }
      if (g)
        d.set(g, !0), S.push({
          current: g,
          match: x
        });
      else {
        D("stack", () => `      ❌ Failed to match all shapes for ${u.id}`), y = !1;
        break;
      }
    }
    if (y && S.length === p) {
      if (D("stack", () => `      ✅ Perfect match found: ${n.id} matches ${u.id}`), r) {
        n.shapes = [];
        for (const { current: x, match: g } of S)
          x.update({
            x: g.x,
            y: g.y,
            w: g.w,
            l: g.l,
            placementOrder: g.placementOrder,
            added: !0,
            stock: n
          }), n.shapes.push(x);
      }
      return u;
    } else
      D("stack", () => `      ⚠️ Stock ${u.id}: allMatched=${y}, matches=${S.length}, target=${p}`);
  }
  return D("stack", () => `   ❌ No duplicate pattern found for ${n.id}`), null;
}
class Pi extends co {
  // Zod schema for validation and serialization
  static schema = Mo;
  static computedProperties = Lo;
  /**
   * Get entity type
   */
  getType() {
    return J.Optimiser;
  }
  constructor(e) {
    const n = Do(e.user, e), i = {
      // Pass through most properties directly
      ...e,
      // Apply defaults for arrays
      stockList: e.stockList || [],
      shapeList: e.shapeList || [],
      userGroups: e.userGroups || [],
      // Config overrides
      config: n,
      successMetric: Kn(n, "successMetric", e.successMetric || ut.successMetric),
      enableEvo: Kn(n, "evo.disable", !1) ? !1 : e.enableEvo ?? !0,
      weighting: e.weighting || {
        efficiency: mt.efficiency,
        guillotine: mt.guillotine,
        roll: mt.roll
      },
      stockType: e.saw?.stockType || null,
      // Don't skip validation so defaults are applied
      skipSchemaValidation: !1
    };
    super(i), !this.useInventory && this.stockList?.length && this.stockList.forEach((r) => {
      r?.saw?.stockType || (r.saw.stockType = this.saw.stockType);
    }), ki({
      stocks: this.stockList,
      shapes: this.shapeList
    }, "Optimiser constructor"), this.uniqueStock = ee(this.stockList), this.groupList = [], this.init();
  }
  init() {
    const e = [];
    if (!this.shapeList.length) throw new Error("No parts to process");
    this.shapeList.some((o) => o.duplicate) || ([...this.shapeList].forEach((a) => {
      a.applyTrim();
      for (let c = a.q; c--; )
        c != 0 && this.shapeList.push(a.clone(c.toString()));
    }), this.shapeList.push(...e), this.shapeList.sort(vt.ID));
    const n = this.shapeList.filter((o) => !F(o));
    this.shapeAnalysis(n, this.stockList);
    const i = [];
    this.userGroups.forEach((o, a) => {
      for (let c = 0; c < o.q; c++) {
        const l = o.toGroup(a, c, this.shapeList, this.saw);
        l && i.push(l);
      }
    });
    const r = uo(i, this.stockList, this.saw), s = r.shapeList;
    r.unusableShapes?.length && D("groups", `${r.unusableShapes.length} user groups could not be matched to any stock`), this.shapeList.push(...s), this.uniqueShapes = this.shapeList.filter((o) => !o?.duplicate), this.hasMinSpacing = typeof this?.saw?.options?.minSpacing == "number";
  }
  shapeAnalysis(e, n) {
    wl.call(this, e, this.shapeList), Sr.call(this, e, n), bl.call(this, e, n);
  }
  recordStackToBestResult(e, n = []) {
    if (this.bestResult) {
      const i = {
        ...this.bestResult,
        stock: e,
        shapes: n.filter((r) => r.added && r.stock.id === e.id).map((r) => r.compress())
      };
      this.bestResult = ds(i);
    }
  }
  resetClonedShapes(e) {
    e.forEach((n) => {
      const i = this.shapeList.find((r) => r.id === n.id);
      i && i.reset(!1);
    });
  }
  //various methods of choosing a selection of stock for the calculation
  stockRefinement(e, n, i) {
    if (!e.length) return [];
    const r = /* @__PURE__ */ new Set();
    n.forEach((a) => a.stockLock.forEach((c) => r.add(c)));
    const s = e.filter((a) => r.has(a.parentId));
    let o = fo(s);
    if (i && i?.options?.stockSelection === "smallest")
      return o.sort(vt.AA), [o[0]];
    if (o.some((a) => a.material)) {
      const a = o[0].material;
      o = o.filter((c) => c.material === a);
    }
    if (o.some((a) => a.t)) {
      const a = Math.min(...o.map((c) => c.t));
      o = o.filter((c) => c.t === a);
    }
    switch (i.stockType) {
      case "linear":
        return o.slice(0, 10);
      case "roll":
        return o.slice(0, 10);
      default:
        return n.length < 100 ? o.slice(0, 5) : o.slice(0, 3);
    }
  }
  /**
   * examines all strategies for each stock and returns an array of best results
   * @returns {Array} best results
   */
  async run() {
    let e = "";
    this.config.captureProfile && (e = `profile-${Date.now()}`, "profile" in console && typeof console.profile == "function" && console.profile(e));
    async function n(s, o) {
      const a = Ot.getCalculationType(s);
      if (!a) throw new Error(`calculation type not found for stock ${s.id}`);
      if (!Ot.types.includes(a))
        throw new Error(`invalid calculation type: ${a} for stock ${s.id}`);
      return o = o.filter((c) => !c.added && c.stockLock.includes(s.parentId)), await Ot[a].call(
        this,
        {},
        s,
        o
      );
    }
    function i(s, o) {
      const a = s.filter((l) => !l.unusable), c = this.stockRefinement(
        a,
        o,
        this.saw
      );
      return c.sort(vt.ID), D("allStock", `refined stock ${c.map((l) => l.id).join()}`), c;
    }
    await this.allStock(n, i), this.saw.stockType === "linear" && await this.rebalanceUnplacedShapes(), this.config.secondRun.enabled && await this.secondRun(), this.config.captureProfile && "profileEnd" in console && typeof console.profileEnd == "function" && console.profileEnd(e);
    const r = [];
    for (const s of this.stockList)
      if (s.segments)
        for (const o of s.segments) {
          const a = o.shapes?.filter((c) => ct(c) && c.added) || [];
          r.push(...a);
        }
    for (const s of this.shapeList)
      if (!(!W(s) || !s.added)) {
        for (const o of r)
          if (o.shapes.some((a) => a.autoId === s.autoId)) {
            s.group.addedAsGroup = o.autoId;
            break;
          }
      }
    for (let s = this.shapeList.length; s--; ) {
      const o = this.shapeList[s];
      st(o) && (o.added && o.stock && o.placeMyShapes(o.stock), this.shapeList.splice(s, 1), this.shapeList.push(...o.shapes));
    }
    this.groupList = [];
  }
  /* calculate all unique stock with the supplied calculation and choose a winner if multiple results returned
     DO NOT pass arrow functions as arguments */
  async allStock(e, n) {
    this.resetShapes(this.shapeList, {
      keepScores: !1,
      removeGroups: !0,
      keepGuillotineData: !1
    });
    let i, r = null, s = null, o, a, c, l;
    for (let f = ee(this.stockList, !1); f.length > 0; f = ee(this.stockList, !1)) {
      let d = at(this.shapeList);
      if (!d?.length) break;
      for (const y of f)
        if (!at(d, y, "some")) {
          D("allStock", `stock ${y.id} is unusable`), y.unusable = !0;
          break;
        }
      const u = n.call(
        this,
        f,
        d
      );
      if (N([() => k(u.every((y) => oe(y.saw))).to.be.true]), !u.length) break;
      if (l) {
        const y = u.findIndex((x) => x?.parentId === l);
        y > -1 && u.unshift(u.splice(y, 1)[0]);
      }
      if (r = null, s = null, this.stockList.some((y) => y.used)) {
        D("stack", `🔄 Checking refined stock for stacks/duplicates: ${u.map((y) => y.id).join(", ")}`);
        for (const y of u) {
          D("stack", `current stock: ${y.id}`);
          const x = at(
            d,
            y
          );
          if (x?.length) {
            if (i && (r = Tl.call(this, y, i, x), r)) {
              i = r, o = y;
              break;
            }
            if (this.config.findDuplicatePatterns && (s = vl.call(this, y, x), s)) {
              i = y;
              break;
            }
          }
        }
      }
      if (!r && !s) {
        for (const g of u) {
          a = null;
          try {
            g.applyTrim();
          } catch (w) {
            D("info", `stock.applyTrim error ${w.message}`);
            continue;
          }
          const m = at(this.shapeList);
          if (!m?.length) return;
          if (a = at(m, g), !a?.length)
            if (g.allowExactFitShapes && (a = m.filter((w) => R.equalTo(
              w.l,
              g.l + g.trim.l1 + g.trim.l2
            ) && R.equalTo(
              w.w,
              g.w + g.trim.l1 + g.trim.l2
            ) || R.equalTo(
              w.w,
              g.w + g.trim.w1 + g.trim.w2
            ) && R.equalTo(
              w.l,
              g.l + g.trim.w1 + g.trim.w2
            ))), a?.length) g.removeTrim();
            else continue;
          if (!a?.length) {
            g.used = !1;
            continue;
          }
          if (this.config.filtering.enable && a.length > this.config.filtering.minTotal) {
            const w = a.length;
            a = Il(this.uniqueShapes, m, g, {
              similarityThreshold: this.config.filtering.similarityThreshold,
              selectionStrategy: "smallest",
              minTotal: this.config.filtering.minTotal
            });
            const I = a.length;
            D("allStock", `filtering reduced shapes by ${w - I}, orginal: ${w}, filtered: ${I}`);
          }
          await e.call(this, g, a), this.resetShapes(a, {
            keepScores: !1,
            removeGroups: !1,
            keepGuillotineData: !1
          }), f.length > 1 && a.filter((I) => F(I)).forEach((I) => I.destroy());
        }
        if (u.forEach((g) => g.used = !1), !this.bestResult || !this.bestResult?.stock)
          break;
        c = Rn(this.bestResult, this.stockList), c.score = this.bestResult.score, c.used = !0, i = c;
        const { updatedShapes: y, groups: x } = ue({
          bestResult: this.bestResult,
          shapeList: this.shapeList,
          relevantStock: u,
          stockList: this.stockList,
          resetShapes: this.resetShapes.bind(this)
        });
        if (x.length > 0 && this.groupList && x.forEach((g) => {
          this.groupList.find((w) => w.autoId === g.autoId) || this.groupList.push(g);
        }), ge(y), this.bestResult?.offcut) {
          const g = {
            x: this.bestResult.totalLength + this.saw.bladeWidth,
            l: this.bestResult.offcut,
            w: this.bestResult.stock.w,
            stock: c
          };
          this.offcuts.push(g);
        }
        c?.saw?.stockType !== "roll" && this.summariseResults([this.bestResult], c);
      }
      d = at(this.shapeList);
      let h = [], p = [], S = 0;
      if (this.bestResult = null, this.bestPartialResult = null, r && (o?.autoAdd || Ve(this.stockList, o)))
        h.push(o);
      else {
        p = Dt(d, !1);
        const y = p.filter((m) => wt(m.stockLock)), x = new Set(y.flatMap((m) => Array.isArray(m.stockLock) ? m.stockLock : [m.stockLock]));
        x.size || D("allStock", "no new stock requirements found");
        for (const m of x) {
          const w = this.stockList.filter((I) => {
            if (m === I.parentId) {
              if (I.autoAdd)
                return !0;
              if (Ve(this.stockList, I))
                return !0;
            }
            return !1;
          });
          if (w.length && !w.find((I) => !I.used)) {
            const I = w[0].clone(w.length.toString());
            this.stockList.push(I), S++;
          }
        }
        p.filter((m) => !wt(m.stockLock) || !m.stockLock.length).length && !h.length && (h = ee(this.stockList).filter((m) => m.autoAdd || Ve(this.stockList, m)));
      }
      if (h.length && h.forEach((y) => {
        const x = y.clone(ho(this.stockList, y));
        this.stockList.push(x), r ? l = x.parentId : l = !1, S++;
      }), S ? (this.stockList.sort(vt.AA), this?.job && this.job.updateProgress({
        socketId: this.socketId,
        type: "addStock",
        message: `added ${S} additional stock`,
        stockCount: this.stockList.reduce(
          (y, x) => x.used ? ++y : y,
          0
        ),
        shapeCount: this.shapeList.reduce(
          (y, x) => x.added ? ++y : y,
          0
        )
      })) : this?.job && this.job.updateProgress({
        socketId: this.socketId,
        type: "stockComplete",
        message: `completed stock ${c.parentId}`,
        stockCount: this.stockList.reduce((y, x) => x.used ? ++y : y, 0),
        shapeCount: this.shapeList.reduce((y, x) => x.added ? ++y : y, 0)
      }), this.useInventory && p.length && ee(this.stockList, !1).length === 0) {
        const y = await xl(
          p,
          this.saw,
          this.stockList
        );
        if (y.stockList.length) {
          const x = on(y.stockList);
          x.length && this.stockList.push(...x);
        }
      }
    }
    this.stockList = this.stockList.filter((f) => f.used);
  }
  /**
   * After the greedy allStock pass, try to place unplaced shapes by rebalancing parts across pairs of stocks.
   * Uses First-Fit-Decreasing bin packing to find better distributions.
   *
   * Example: if the greedy pass puts two 1161mm parts on one stock (offcut 725mm)
   * and two 1025mm + one 796mm on another (offcut 198mm), leaving a second 796mm unplaced,
   * this method can redistribute to 1161+1025+796 on each stock, placing all parts.
   */
  async rebalanceUnplacedShapes() {
    const e = this.shapeList.filter((u) => !u.added && W(u));
    if (!e.length) return;
    const n = this.stockList.filter((u) => u.used && !u.stack?.stock);
    if (n.length < 2) return;
    D("rebalance", `${e.length} unplaced shapes, trying rebalance across ${n.length} stocks`);
    const i = this.saw.bladeWidth, r = /* @__PURE__ */ new Map();
    let s = 0;
    for (const u of n) {
      const h = this.shapeList.filter((p) => p.added && W(p) && p.stock?.autoId === u.autoId);
      r.set(u.autoId, h), s += h.length;
    }
    const o = Array.from(r.values()).flat(), a = [...o, ...e], c = n.map((u) => u.l), l = this.ffdMultiBin1D(a, c, i);
    if (!l) return;
    const f = l.reduce((u, h) => u + h.length, 0);
    if (f <= s) return;
    D("rebalance", `better arrangement found: ${f} vs ${s} shapes across ${n.length} stocks`), o.forEach((u) => u.removeFromStock());
    for (const u of n)
      u.shapes = [], u.rootSegment = null, u.score = null;
    for (let u = 0; u < n.length; u++) {
      const h = n[u], p = l[u];
      if (!p.length) continue;
      h.applyTrim(), po(p, h, null, "l"), h.used = !0;
      const S = p.reduce((y, x) => y + x.l, 0) + (p.length - 1) * i;
      h.score = {
        efficiency: S / h.l,
        totalShapesPlaced: p.length
      }, S + i < h.l && this.offcuts.push({
        x: S + i,
        l: h.l - S - i,
        w: h.w,
        stock: h
      });
    }
    const d = l.flat();
    ge(d), D("rebalance", `rebalanced ${d.length} shapes across ${n.length} stocks`);
  }
  /**
   * First-Fit-Decreasing bin packing for 1D shapes across N bins
   * Tries multiple heuristics (best-fit and worst-fit) and returns whichever places more shapes
   */
  ffdMultiBin1D(e, n, i) {
    const r = [...e].sort((u, h) => h.l - u.l), s = (u) => {
      const h = n.map(() => []), p = [...n];
      for (const S of r) {
        let y = -1, x = u ? 1 / 0 : -1;
        for (let g = 0; g < h.length; g++) {
          const m = h[g].length > 0 ? S.l + i : S.l;
          p[g] >= m && (u ? p[g] < x && (y = g, x = p[g]) : p[g] > x && (y = g, x = p[g]));
        }
        if (y >= 0) {
          const g = h[y].length > 0 ? S.l + i : S.l;
          h[y].push(S), p[y] -= g;
        }
      }
      return h;
    }, o = s(!0), a = s(!1), c = o.reduce((u, h) => u + h.length, 0), l = a.reduce((u, h) => u + h.length, 0);
    let f = c >= l ? o : a, d = Math.max(c, l);
    if (d < r.length && r.length <= 30) {
      const u = this.exhaustiveBinPack1D(r, n, i);
      if (u) {
        const h = u.reduce((p, S) => p + S.length, 0);
        h > d && (f = u, d = h);
      }
    }
    return d === 0 ? null : f;
  }
  /**
   * Exhaustive backtracking bin packing for 1D shapes across N bins
   * Tries all assignments with pruning to find the maximum number of placed shapes
   * Only practical for small shape counts (≤30)
   */
  exhaustiveBinPack1D(e, n, i) {
    const r = [...e].sort((u, h) => h.l - u.l), s = r.length, o = n.length;
    let a = null, c = 0;
    const l = n.map(() => []), f = [...n], d = (u, h) => {
      if (h + (s - u) <= c) return;
      if (u === s) {
        h > c && (c = h, a = l.map((S) => [...S]));
        return;
      }
      const p = r[u];
      for (let S = 0; S < o; S++) {
        const y = l[S].length > 0 ? p.l + i : p.l;
        if (f[S] >= y && (l[S].push(p), f[S] -= y, d(u + 1, h + 1), l[S].pop(), f[S] += y, c === s))
          return;
        if (l[S].length === 0)
          for (; S + 1 < o && l[S + 1].length === 0 && n[S + 1] === n[S]; )
            S++;
      }
      d(u + 1, h);
    };
    return d(0, 0), a;
  }
  /**
   * this idea with secondRun is to redistribute smaller parts to the least efficient stock - ideally reducing the number of stock needed
   * [] only look at stock with a single shape?
   */
  async secondRun() {
    D("secondRun", "starting second run...");
    const e = this.stockList.filter((s) => s.used);
    if (e.filter((s) => s.stack?.number && !s.stack?.stock).forEach((s) => {
      e.filter((o) => o.stack?.stock && et(o.stack.stock) && o.stack.stock.id === s.id).forEach((o) => {
        o.stack = null, o.rootSegment = s.rootSegment;
      }), s.stack = null;
    }), e[0].cutType !== "guillotine") return;
    N([
      () => k(e.length).equal(this.stockList.length),
      () => k(e.every((s) => s.score)).to.be.true,
      () => k(e.every((s) => s.shapes?.length)).to.be.true
    ]), e.sort((s, o) => s.score.efficiency - o.score.efficiency), D("secondRun", `sorted stock, ${e.map((s) => s.id)}`);
    const i = [], r = [];
    for (const s of e)
      s.score.efficiency >= this.config.secondRun.efficiencyCutoff && s.score.totalShapesPlaced > 1 ? i.push(s) : r.push(s);
    if (!(!i.length || !r.length)) {
      i.sort((s, o) => o.score.efficiency - s.score.efficiency), r.sort((s, o) => o.score.efficiency - s.score.efficiency), D("secondRun", `sorted efficient stock, ${i.map((s) => s.id)}`), D("secondRun", `sorted inefficient stock, ${r.map((s) => s.id)}`);
      for (const s of i) {
        if (!r.length) break;
        const o = [];
        for (let d = 0; d < s.shapes.length; d++) {
          const u = s.shapes[d];
          if (!u) throw new Error("shape not found in donorStock.shapes");
          if (F(u)) {
            u.placeMyShapes(s), u.shapes = u.shapes.map((h) => Object.assign({}, h)), s.shapes.splice(d, 1, ...u.shapes), d--;
            continue;
          }
          if (W(u))
            u.reset(), o.push(u);
          else {
            const h = this.shapeList.find((p) => p.id === u.id);
            if (!h) throw new Error(`shape ${u.id} not found in shapeList`);
            h.reset(), o.push(h), s.shapes[d] = h;
          }
        }
        const a = /* @__PURE__ */ new Set();
        let c, l, f = null;
        for (; o.length > 0 && (c = r.find((g) => g ? !a.has(g?.id) && s.shapes[0].stockLock.includes(g.parentId) : !1), !!c); ) {
          D("secondRun", `recipientStock - ${c.id}`), a.add(c.id);
          const d = Ot.getCalculationType(s);
          if (!d) throw new Error(`calculation type not found for stock ${s.id}`);
          const u = c.cutPreference === "l" ? "x" : "y";
          let h = [];
          if (l = c.rootSegment, D("secondRun", `second run, donor stock ${s.id}, recipient stock ${c.id}`), f) {
            f.shapes.forEach((m, w) => {
              if (!W(m)) {
                const I = this.shapeList.find((b) => b.id === m.id);
                f.shapes[w] = I;
              }
            }), c.shapes.forEach((m, w) => {
              if (!W(m)) {
                const I = this.shapeList.find((b) => b.id === m.id);
                c.shapes[w] = I;
              }
            });
            let g = !1;
            if (this.config.secondRun.stack && (g = Ps.call(this, c, f, [...o, ...c.shapes], this.shapeList)), g) {
              c.stack = { stock: f }, f.stack ? f.stack?.number && f.incrementStack() : f.stack = { number: 2 }, c.shapes.forEach((w) => {
                const I = o.findIndex((b) => b.id === w.id);
                I > -1 && (o.splice(I, 1), s.shapes.splice(s.shapes.findIndex((b) => b.id === w.id), 1));
              });
              const m = r.findIndex((w) => w.id === c.id);
              m > -1 && r.splice(m, 1), D("secondRun", `stack found for ${c.id} in second run`), ge(c.shapes);
              continue;
            }
          }
          if (!l) throw new Error("no root segment found in second run");
          if (as(l, (g) => {
            if (g.offcut)
              return g[u] === 0 && (g.cutDirection = c.cutPreference, g.phase = 1), g.addToStock(c), h.push(g), !1;
          }), !h.length || (h = on(h), !h.length)) continue;
          await Ot[d].call(
            this,
            { secondRun: !0 },
            c,
            o,
            h
          );
          const p = o.length;
          for (let g = o.length; g--; )
            o[g].added && o.splice(g, 1);
          const S = o.length, y = p - S;
          if (D("info", `second run, added ${y}`), f = c, p - S === 0) continue;
          const x = r.findIndex((g) => g.id === c.id);
          x > -1 && r.splice(x, 1), ge(c.shapes);
        }
        if (!o.length || o.every((d) => d.added))
          s.used = !1, s.shapes = [], c.shapes.push(...s.shapes);
        else {
          D("info", `second run, not all shapes moved, reverting ${s.shapes.length} shapes`);
          for (const d of s.shapes) {
            const u = this.shapeList.find((h) => h.id === d.id);
            if (!u) throw new Error("original shape not found in second run");
            u.update(d), u.addToStock(s), N([
              () => k(u.added).to.be.true,
              () => k(u.stock?.id).to.equal(s.id),
              () => k(u.x).to.equal(d.x),
              () => k(u.y).to.equal(d.y)
            ]);
          }
        }
      }
    }
  }
  /**
   * removes all stock, shapes and cuts
   */
  reset() {
    this.stockList = [], this.shapeList = [], this.cutList = [];
  }
  /**
   * reset the shapelist back to defaults and remove groups
   */
  resetShapes(e, {
    keepScores: n = !1,
    removeGroups: i = !0,
    removeUnplacedGroups: r = !1,
    keepGuillotineData: s = !0,
    keepFirstShapeSampleRotations: o = !1
  } = {}) {
    if (e?.length)
      if (r) {
        const a = /* @__PURE__ */ new Set();
        for (const l of e)
          if (F(l) && l.added && l.shapes?.length)
            for (const f of l.shapes)
              a.add(f.autoId);
        const c = e.length;
        for (let l = c; l--; ) {
          const f = e[l];
          if (st(f)) {
            f.added || e.splice(l, 1);
            continue;
          }
          if (F(f)) {
            if (f.shapes?.length)
              for (const d of f.shapes)
                d.reset({
                  keepScores: n,
                  keepGuillotineBatchData: s,
                  keepGroupData: !1,
                  keepFirstShapeSampleRotations: o
                });
            f.added || e.splice(l, 1);
          } else
            a.has(f.autoId) ? e.splice(l, 1) : f.reset({
              keepScores: n,
              keepGuillotineBatchData: s,
              keepGroupData: !1,
              keepFirstShapeSampleRotations: o
            });
        }
      } else {
        const a = e.length;
        for (let c = a; c--; ) {
          const l = e[c];
          if (st(l)) {
            l.added = !1;
            continue;
          }
          if (F(l)) {
            if (l.shapes?.length)
              for (const f of l.shapes)
                f.reset({
                  keepScores: n,
                  keepGuillotineBatchData: s,
                  keepGroupData: !1,
                  keepFirstShapeSampleRotations: o
                });
            i ? e.splice(c, 1) : l.added = !1;
          } else
            l.reset({
              keepScores: n,
              keepGuillotineBatchData: s,
              keepGroupData: !1,
              keepFirstShapeSampleRotations: o
            });
        }
      }
  }
  /**
   * summarise the results for the console
   */
  summariseResults(e, n) {
  }
}
function Ol() {
  X("Issue", ie), X("Line", ce), X(J.Line, ce), X("Point", en), X(J.Point, en), X("Rectangle", Fn), X(J.Rectangle, Fn), X("Container", _e), X(J.Container, _e), X("GuillotineState", $e), X(J.GuillotineState, $e), X("Placeable", Ze), X(J.Placeable, Ze), X("Group", tn), X(J.Group, tn), X("Offcut", De), X(J.Offcut, De), X("Segment", Pt), X(J.Segment, Pt), X("Shape", Ke), X(J.Shape, Ke), X("Stock", sn), X(J.Stock, sn), X("Banding", Bn), X("banding", Bn), X("Corner", Xn), X("corner", Xn), X("Cut", Ie), X(J.Cut, Ie), X("Extras", Nn), X(J.Extras, Nn), X("Finish", qn), X("finish", qn), X("HingeHole", Yn), X("hingeHole", Yn), X("Hole", Wn), X("hole", Wn), X("ImageUpload", Qn), X("imageUpload", Qn), X("InputSaw", zn), X(J.InputSaw, zn), X("InputShape", Hn), X(J.InputShape, Hn), X("InputStock", jn), X(J.InputStock, jn), X("InputUserGroup", Un), X(J.InputUserGroup, Un), X("Machining", Vn), X(J.Machining, Vn), X("NestingShape", Ae), X(J.NestingShape, Ae), X("Optimiser", Pi), X(J.Optimiser, Pi), X("Planing", Jn), X("planing", Jn), X("PointCollection", nn), X(J.PointCollection, nn), X("Saw", ve), X(J.Saw, ve);
}
export {
  Ol as initializeStaticRegistry
};

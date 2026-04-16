import { d as Is, z as xe, e as St, D as wi, h as $s, j as Cs, k as Ps, m as Ts, n as vs, p as Es, q as ks, r as Rs, t as qe, w as As, x as Ds, i as Ms, y as Ls, P as He, A as Os, B as Gs, E as Z, C as je, G as Fs, H as Qt, S as Ue, J as we, K as nt, L as A, N as bi, O as H, Q as z, R as N, T as E, U as it, V as X, W as $t, X as Bt, Y as B, Z as kt, _ as Bs, $ as dn, a0 as Ht, a1 as Oe, a2 as Rt, a3 as Ne, a4 as ht, a5 as Ii, a6 as pt, a7 as be, a8 as Tt, a9 as bt, aa as Ye, ab as ct, ac as Zt, ad as ee, ae as Ve, af as Xs, ag as Ie, ah as rt, ai as $i, aj as qs, ak as Ns, al as $e, am as At, an as Xt, ao as jt, ap as Ys, aq as Ci, ar as Pi, as as Ti, at as vi, au as oe, av as Ws, aw as Ei, ax as Ce, ay as zs, az as Je, aA as Hs, v as ut, aB as Ge, aC as ki, aD as js, aE as Ze, aF as Us, aG as Vs, aH as Js, aI as Zs, aJ as An, aK as _s, aL as _e, aM as Ke, aN as Ks, aO as Qs, aP as to, c as he, aQ as Pe, aR as eo, aS as Qe, aT as tn, aU as no, aV as io, aW as _t, aX as so, aY as oo, aZ as de, a_ as We, a$ as ro, b0 as ao, b1 as lo, b2 as co, b3 as uo, b4 as q, b5 as Dn, b6 as Mn, b7 as Ln, b8 as On, b9 as Gn, ba as Fn, bb as Bn, bc as Xn, bd as qn, I as Nn, be as Yn, bf as Wn, bg as zn } from "./result.zod-C4CRDjtE.js";
import { w as U, x as et, y as re, A as lt, B as Q, C as W, D as st, E as at, F as zt, G as fo } from "./vendor-BIa5gMP2.js";
import { m as Ri, g as ho } from "./vendor-lodash-Dh7YE4In.js";
import { i as vt } from "./environment-BeBZzWz6.js";
import "./vendor-i18next-DIDhOEvY.js";
import { m as Ai } from "./vendor-mongoose-3sc3I-ZH.js";
const Di = ["root", "firstShape", "near", "far", ""], po = Is.extend({
  // Cutting information
  cuts: St("Cut").default([]).behavior({ compress: "exclude" }),
  // Stock reference - serialize as reference only (default zRef behavior)
  stock: xe("Stock", { nullable: !0, description: "Stock reference for this segment" }),
  phase: et().int().min(0).nullable().default(null),
  cutDirection: re(wi).nullable().default(null).describe("The primary cut direction for this segment"),
  // Segment properties
  merged: U().default(!1),
  firstShape: xe("Shape"),
  children: St("Segment", {
    description: "Child segments"
  }).behavior({
    serialize: "full",
    // Serialize the full segment objects
    compress: "full",
    // Even in compressed mode, keep full objects
    clone: "copy"
  }),
  parent: xe("Segment", { nullable: !0 }).behavior({
    serialize: "reference",
    // Parent can stay as reference
    compress: "exclude"
    // Exclude parent in compressed mode to avoid circular refs
  }),
  type: re(Di).nullable().default(null),
  placementOrder: et().int().min(0).optional(),
  // Beam saw specific
  hasBeamTrim: U().default(!1),
  hasHeadCut: U().default(!1),
  isInitial: U().default(!1),
  // Trim offcut flag - marks segments that represent trim areas (W1, W2, L1 for beam)
  isTrimOffcut: U().default(!1),
  // Visualization flags
  completed: U().optional(),
  rowSegment: U().optional()
});
lt({
  x: et().optional(),
  y: et().optional(),
  l: et().optional(),
  w: et().optional(),
  type: re(Di),
  parent: Q(),
  // Segment instance
  stock: Q(),
  // Stock instance
  offcut: U().optional(),
  merged: U().optional(),
  cutDirection: re(wi).nullable().optional()
});
const go = {
  ...$s,
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
}, mo = lt({
  id: W().optional(),
  url: W().optional(),
  size: et().optional(),
  mimeType: W().optional(),
  name: W().optional(),
  width: et().optional(),
  height: et().optional()
}), yo = Cs.extend({
  // ImageUpload specific properties
  images: st(mo).default([]).describe("Array of uploaded images"),
  maxImages: et().default(5).describe("Maximum number of images allowed"),
  allowedTypes: st(W()).default(["image/jpeg", "image/png", "image/gif"]).describe("Allowed MIME types"),
  maxSizeBytes: et().default(5242880).describe("Maximum file size in bytes (default 5MB)"),
  description: W().optional().describe("Description of uploaded images"),
  tags: st(W()).default([]).describe("Tags associated with images")
  // Note: faces and sides inherited from Extra base
}), xo = {
  // Inherit computed properties from Extra base class
  ...Ps,
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
}, Hn = lt({
  x: et(),
  y: et()
}), en = Ts.extend({
  // ========== Polygon Outline ==========
  // Closed polygon vertices, origin-normalized (bounding box origin at 0,0)
  // First vertex should equal last vertex (closed polygon)
  outline: st(Hn).default([]).describe("Closed polygon outline vertices (origin-normalized)"),
  // Continuous rotation angle for nesting (radians, 0 to 2*PI)
  // The inherited rot (0|1) is not used for nesting shapes
  nestingRotation: et().min(0).max(Math.PI * 2).default(0).describe("Continuous rotation angle for nesting (radians)"),
  // Actual polygon area computed via shoelace formula
  // Different from inherited area which is the bounding box area (l * w)
  trueArea: et().min(0).default(0).describe("Actual polygon area (vs bounding box area)"),
  // Inner contour holes (for hollow shapes like frames)
  // Each hole is a closed polygon (first vertex = last vertex), wound CW
  // The main `outline` contains the slit-connected polygon for geometry ops;
  // `holes` stores the clean inner contours for stroke-correct rendering
  holes: st(st(Hn)).default([]).describe("Inner contour holes for rendering (CW wound)")
}), Mi = {
  // Include all Shape computed properties
  ...vs,
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
en.describe(JSON.stringify({
  name: "NestingShape",
  description: "Irregular shape with polygon outline for nesting optimization",
  version: "1.0.0",
  extends: "Shape",
  computedProperties: Object.keys(Mi)
}));
at.colors = [
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
const Te = at("logs"), Li = at("cuts"), pn = at("groups"), gn = at("guillotine"), Oi = at("results"), Gi = at("scoring"), Fi = at("firstShapes"), Bi = at("calculations"), Xi = at("subset"), qi = at("secondRun"), Ni = at("stack"), mn = at("errors"), Yi = at("allStock"), yn = at("reset"), xn = at("swarm");
mn.color = 1;
pn.color = 14;
gn.color = 159;
yn.color = 11;
xn.color = 5;
function So(t = "info", e, n) {
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
      Te(s);
      break;
    case "guillotine":
      gn(s);
      break;
    case "results":
      Oi(s);
      break;
    case "secondRun":
      qi(s);
      break;
    case "cuts":
      Li(s);
      break;
    case "scoring":
      Gi(s);
      break;
    case "calculations":
      Bi(s);
      break;
    case "stack":
      Ni(s);
      break;
    case "subset":
      Xi(s);
      break;
    case "errors":
      mn(s);
      break;
    case "allStock":
      Yi(s);
      break;
    case "firstShapes":
      Fi(s);
      break;
    case "groups":
      pn(s);
      break;
    case "reset":
      yn(s);
      break;
    case "swarm":
      xn(s);
      break;
    default:
      Te(s);
  }
  console.table = r;
}
const wo = "\x1B[31m", bo = "\x1B[0m";
let Wi = !0;
function Io(t) {
  Wi = t;
}
const $o = {
  info: Te,
  guillotine: gn,
  results: Oi,
  secondRun: qi,
  cuts: Li,
  scoring: Gi,
  calculations: Bi,
  stack: Ni,
  subset: Xi,
  errors: mn,
  allStock: Yi,
  firstShapes: Fi,
  groups: pn,
  reset: yn,
  swarm: xn
}, k = (t = "info", e, n = null, i = null, r = !1) => {
  if (!Wi && !r || !r) return;
  const s = $o[t] || Te;
  if (!s.enabled) return;
  const o = typeof e == "function" ? e() : e;
  s(t === "errors" ? `${wo}${o}${bo}` : o), n && s(n), i && So(t, i);
};
Es(k);
const Co = ks, Po = {
  cacheResults: !0
};
let zi;
zi = Ri({}, Co, Po);
let dt = zi;
Io(dt.enableLogging !== !1);
function To() {
  if (dt.guillotine.secondPass && !dt.guillotine.strips.rearrange)
    throw new Error("config.guillotine.secondPass requires config.guillotine.strips.rearrange to be enabled");
  if (dt.captureProfile && dt.runTests)
    throw new Error("config.captureProfile and config.runTests should not be both enabled");
}
To();
function vo(t, e = null) {
  if (!t) return dt;
  const n = Eo(t, e);
  if (!n) return dt;
  const i = Ri({}, dt, n);
  return console.log(`[CONFIG] custom config applied for ${t?.username}`), i;
}
function Eo(t, e = null) {
  if (!t || !t?.config) return null;
  switch (t.id) {
    //Glassense Kolu
    case "662a2f8ad28745b63665e68a": {
      const n = "shapeList" in e ? e.shapeList : e.inputShapes, i = n ? n.reduce((r, s) => r + (s.q || 0), 0) : 0;
      if (e) if (i <= 80) {
        const r = { ...t.config };
        return r.groups.guillotine.strips = dt.groups.guillotine.strips, r.sample.guillotine = dt.sample.guillotine, r.guillotine.stripShapes.iterations = dt.guillotine.stripShapes.iterations, r;
      } else
        return t.config;
      else return t.config;
    }
  }
  return t.config;
}
function jn(t, e, n) {
  return ho(t, e, n);
}
const ko = lt({
  // Context - using z.any() for complex external types
  job: Q().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: W().nullable().default(null).describe("Socket.io connection ID"),
  user: Q().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: Q().describe("Configuration object"),
  // Type: Config
  api: U().nullable().default(null).describe("API mode flag"),
  app: U().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: xe("Saw").describe("Saw configuration"),
  stockList: St("Stock").default([]).describe("List of stock materials"),
  shapeList: qe(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: St("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: St("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: St("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: qe(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: qe(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: Rs,
  // Results storage
  cutList: St("Cut").default([]).describe("List of cuts to make"),
  segmentList: St("Segment").default([]).describe("List of segments"),
  offcuts: St("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: St("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: U().default(!1).describe("Use inventory system"),
  successMetric: W().default(dt.successMetric).describe("Metric for optimization success"),
  enableEvo: U().default(!0).describe("Enable evolutionary algorithm"),
  weighting: zt(W(), Q()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: Q().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: Q().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: lt({
    placement: et().default(0),
    group: et().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: U().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: U().default(!1).describe("Run guillotine second pass"),
  runningEvo: U().default(!1).describe("Currently running evolution"),
  evolutionVisData: st(zt(W(), fo())).default([]).describe("Evolution visualization data"),
  final: U().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: U().default(!1).describe("Has minimum spacing requirement")
}), Ro = {}, Ao = re(["decimal", "fraction"]);
lt({
  job: Q().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Extend with autoId/__entityType so they survive Zod validation for worker reconstruction
  inputSaw: As.extend({ autoId: W().optional(), __entityType: W().optional() }),
  inputShapes: st(Ls.extend({ autoId: W().optional(), __entityType: W().optional() })),
  inputStock: st(Ms.extend({ autoId: W().optional(), __entityType: W().optional() })),
  inputUserGroups: st(Ds.extend({ autoId: W().optional(), __entityType: W().optional() })).optional(),
  // Number format for conversion
  numberFormat: Ao.optional(),
  // Algorithm configuration
  enableEvo: U().default(!0),
  weighting: Q().optional(),
  successMetric: W().optional(),
  useInventory: U().default(!1),
  // Context
  socketId: W().optional(),
  user: Q().optional(),
  // IUser type
  // Application flags
  widget: U().optional(),
  api: U().optional(),
  app: U().optional(),
  domain: W().optional(),
  // Extras options (centralized configuration)
  extrasOptions: lt({
    banding: lt({
      options: lt({
        sides: zt(W(), st(W())).optional()
      }).optional()
    }).optional(),
    finish: lt({
      options: lt({
        faces: zt(W(), st(W())).optional()
      }).optional()
    }).optional(),
    planing: lt({
      options: lt({
        sides: zt(W(), st(W())).optional(),
        faces: zt(W(), st(W())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // API specific
  config: Q().optional(),
  v: et().optional(),
  // API version
  webhook: W().optional(),
  //source
  sourceVersion: W().nullish(),
  source: W().optional()
});
lt({
  job: Q().optional(),
  // Type: Job from BullMQ
  saw: Q(),
  // Runtime Saw instance
  shapeList: st(Q()),
  // Runtime Shape instances
  stockList: st(Q()),
  // Runtime Stock instances
  userGroups: st(Q()).optional(),
  // Runtime Group instances
  enableEvo: U(),
  weighting: Q().optional(),
  successMetric: W().optional(),
  useInventory: U(),
  socketId: W().optional(),
  user: Q().optional(),
  widget: U().optional(),
  api: U().optional(),
  app: U().optional(),
  domain: W().optional(),
  config: Q().optional(),
  v: et().optional(),
  webhook: W().optional()
});
class ve extends He {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Os;
  static computedProperties = Gs;
  constructor(e = {}) {
    const n = { ...e, offcut: !0 };
    super(n), this.offcut = !0;
  }
  /**
    * Get entity type
    */
  getType() {
    return Z.Offcut;
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
    return new ve({
      ...e,
      // Include all rectangle properties (l, w, x, y, material)
      flex: e.flex,
      offcut: !0,
      addToInventory: !1,
      added: !1
    });
  }
}
class Ct extends je {
  // Required: Define schema and computed properties for SchemaClass
  static schema = po;
  static computedProperties = go;
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
    return Z.Segment;
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
        vt() && console.log(`[PARENT CHANGE] Moving ${e.autoId} from parent ${n.autoId} to ${this.autoId}`);
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
class Un extends Fs {
  // Properties are dynamically created from schema via SchemaClass
  // Static schema reference for automatic updates
  static schema = yo;
  static computedProperties = xo;
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
    if (this.images && this.images.length > this.maxImages && n.push(new Qt({
      item: e,
      message: `Too many images: ${this.images.length} exceeds maximum of ${this.maxImages}`,
      type: "error"
    })), this.images)
      for (let i = 0; i < this.images.length; i++) {
        const r = this.images[i];
        if (r.url || n.push(new Qt({
          message: `Image ${i + 1} is missing URL`,
          type: "error"
        })), r.mimeType && !this.allowedTypes.includes(r.mimeType) && n.push(new Qt({
          message: `Image ${i + 1} has unsupported type: ${r.mimeType}`,
          type: "warning"
        })), r.size && r.size > this.maxSizeBytes) {
          const s = (r.size / 1048576).toFixed(2), o = (this.maxSizeBytes / 1048576).toFixed(2);
          n.push(new Qt({
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
class Ee extends Ue {
  static schema = en;
  static computedProperties = Mi;
  static defaults = en.parse({});
  constructor(e = {}) {
    super(e);
  }
  getType() {
    return Z.NestingShape;
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
      return e.map((u) => ({
        x: u.x + (this.x || 0),
        y: u.y + (this.y || 0)
      }));
    let n = 0, i = 0;
    for (const u of this.outline)
      n += u.x, i += u.y;
    n /= this.outline.length, i /= this.outline.length;
    const r = Math.cos(this.nestingRotation), s = Math.sin(this.nestingRotation), o = e.map((u) => {
      const h = u.x - n, f = u.y - i;
      return {
        x: r * h - s * f + n,
        y: s * h + r * f + i
      };
    }), a = this.getRotatedOutline();
    let c = 1 / 0, l = 1 / 0;
    for (const u of a)
      u.x < c && (c = u.x), u.y < l && (l = u.y);
    return o.map((u) => ({
      x: u.x - c + (this.x || 0),
      y: u.y - l + (this.y || 0)
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
      i.push(new we({
        stock: nt(this.stock) ? this.stock : e,
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
function nn(t, e, n = "x") {
  if (!e) return !1;
  const i = n === "x" ? "l" : "w";
  return !!(A.greaterThanOrEqualTo(t[n], e[n]) && A.lessThanOrEqualTo(t[n] + t[i], e[n] + e[i]));
}
function Ut(t, e, n = "x") {
  if (!e) return !1;
  const i = bi(n);
  return !!(A.greaterThanOrEqualTo(t[n], e[n]) && A.lessThan(t[n], e[n] + e[i]));
}
function Hi(t) {
  return {
    cutAxis: t === "l" ? "x" : "y",
    positionAxis: t === "l" ? "y" : "x",
    cutDimension: t,
    positionDimension: H(t)
  };
}
function Do(t, e, n) {
  return t?.length ? t.filter((i) => i.added && A.equalTo(i[e], n)) : [];
}
function Mo(t, e) {
  return t?.guillotineState?.myPhase === e;
}
function Lo(t, e) {
  t?.guillotineState && (t.guillotineState.myStripDirection = e);
}
function Oo(t, e) {
  if (!t) return;
  let n = t;
  for (; n.parent; )
    n = n.parent, e();
}
function Go(t, e) {
  return `${e}${t}`;
}
function Fo({
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
  const l = Go(o, n);
  if (!e.trim?.[l]) return;
  const u = e.trimmed ? -c : e.trim[l] - c, h = e.trimmed ? -c : e.trim[l] - c;
  if (N([() => {
    E(u, `trim cut ${o} in the wrong position`).to.equal(h);
  }]), u !== h)
    return;
  const { cut: f } = Fe({
    parentSegment: t,
    stock: e,
    cutDirection: n,
    cutAxis: i,
    positionAxis: r,
    position: u,
    allStockShapes: a,
    skipCollisionCheck: !0
  });
  f && (f.isTrim = !0, f.guillotineState.parentSegmentID = t.autoId, f.ptxData || (f.ptxData = {}), f.ptxData.function = t.phase, f.ptxData.isDummy = !1, f.dimension === "l" && (f.beamTrimL1 = !0), f.dimension === "w" && (f.beamTrimW1 = !0), f.dimension === "w" ? new Ct({
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
  }) : f.dimension === "l" && new Ct({
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
  }), n !== t.cutDirection && (f[i + 2] = e[n]), f.isTrim = !0, t.hasBeamTrim = !0);
}
function ji(t, e, n = null, i) {
  let r = null;
  const s = [];
  if (!t || !t.length) return {
    allShapesCut: !0,
    uncutShape: null,
    uncutShapeAutoIds: []
  };
  const o = t.every((a) => {
    if (!a.added || !a.stock || z(a) && a.group.inGroup && !i?.ignoreGroupMembership) return !0;
    const c = a.stock.halfBladeWidth;
    let l = null;
    n ? l = n.getSides() : l = a.stock.getSides();
    const u = Object.values(a.getSides()).every((h) => {
      const f = () => {
        switch (h.type) {
          case "top": {
            const y = a.y + a.w + c;
            return e.some((g) => g.dimension === "l" && A.equalTo(g.y1, y) && A.lessThanOrEqualTo(g.x1, a.x) && A.greaterThanOrEqualTo(g.x2, a.x + a.l));
          }
          case "bottom": {
            const y = a.y - c;
            return e.some((g) => g.dimension === "l" && A.equalTo(g.y1, y) && A.lessThanOrEqualTo(g.x1, a.x) && A.greaterThanOrEqualTo(g.x2, a.x + a.l));
          }
          case "left": {
            const y = a.x - c;
            return e.some((g) => g.dimension === "w" && A.equalTo(g.x1, y) && A.lessThanOrEqualTo(g.y1, a.y) && A.greaterThanOrEqualTo(g.y2, a.y + a.w));
          }
          case "right": {
            const y = a.x + a.l + c;
            return e.some((g) => g.dimension === "w" && A.equalTo(g.x1, y) && A.lessThanOrEqualTo(g.y1, a.y) && A.greaterThanOrEqualTo(g.y2, a.y + a.w));
          }
        }
      }, d = () => l.some((y) => {
        switch (h.type) {
          case "top":
            return y.dimension === "l" && A.equalTo(y.y1, a.y + a.w) && A.lessThanOrEqualTo(y.x1, a.x) && A.greaterThanOrEqualTo(y.x2, a.x + a.l);
          case "bottom":
            return y.dimension === "l" && A.equalTo(y.y1, a.y) && A.lessThanOrEqualTo(y.x1, a.x) && A.greaterThanOrEqualTo(y.x2, a.x + a.l);
          case "left":
            return y.dimension === "w" && A.equalTo(y.x1, a.x) && A.lessThanOrEqualTo(y.y1, a.y) && A.greaterThanOrEqualTo(y.y2, a.y + a.w);
          case "right":
            return y.dimension === "w" && A.equalTo(y.x1, a.x + a.l) && A.lessThanOrEqualTo(y.y1, a.y) && A.greaterThanOrEqualTo(y.y2, a.y + a.w);
        }
      }), p = f(), S = d();
      return p || S;
    });
    return u || (r = a, s.push(a.autoId)), u;
  });
  return o && (r = null, s.length = 0), { allShapesCut: o, uncutShape: r, uncutShapeAutoIds: s };
}
const _ = {
  previousSegments: [],
  ptxCuts: 0,
  segments: 0,
  //this needs to be here, as it's shared with the front end - cannot be put into optimiser
  makeCutsIteration: 0
};
function Ui() {
  _.previousSegments = [], _.ptxCuts = 0, _.segments = 0, _.makeCutsIteration = -1;
}
function Sn({
  container: t,
  shapes: e = [],
  forceNoHeadCut: n = !1,
  final: i = !1,
  saw: r = null
}) {
  _.ptxCuts = 0;
  const s = t.getStock;
  r && (s.saw = r);
  const o = it(t);
  let a;
  const c = o ? t.cutDirection : t.cutPreference;
  if (o && t.type === "root")
    a = t, a.cuts = [], a.children = [], a.shapes = e, X("cuts", `REUSING ROOT [${a.autoId ? a.id : "unknown"}] l=${a.l}, w=${a.w}, DIR ${c?.toUpperCase()}`);
  else {
    const d = _.segments, p = d.toString();
    _.segments++, a = new Ct({
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
      type: d === 0 ? "root" : "",
      phase: o ? t.phase + 1 : 0,
      hasHeadCut: o ? t.hasHeadCut : !1,
      cutDirection: c,
      isInitial: o ? t.isInitial : !0
    });
  }
  _.previousSegments = [];
  const l = ce.call(
    this,
    {
      segment: a,
      stock: s,
      allStockShapes: e,
      forceNoHeadCut: n,
      final: i
    }
  );
  let u, h, f;
  try {
    [u, h, f] = rr(a, i, l.headCutCount);
  } catch (d) {
    return X("errors", `issue analysing segments ${d.message}`), {
      rootSegment: null,
      cuts: [],
      offcuts: []
    };
  }
  if (o && f.length > 0) {
    const d = f.map((p) => `${p.id}@(${p.x},${p.y})`).join(", ");
    X("cuts", `[calculateStripCuts] Returning ${f.length} offcuts for container segment at (${t.x},${t.y}): ${d}`);
  }
  return {
    rootSegment: u,
    cuts: h,
    offcuts: f
  };
}
function Bo(t, e = !1) {
  let n = Hi(t);
  return e && (n = Zi(n)), n;
}
function Xo(t, e, n, i, r, s, o) {
  if (this?.config && !this?.config?.guillotine?.extendSegments || e.cutType !== "guillotine" || e?.saw?.guillotineOptions?.strategy === "time") return !1;
  const a = t?.merged, c = t?.parent?.merged;
  if (a && c) return !1;
  const l = Mo(n, 1), u = t?.parent ? t.parent?.hasHeadCut : !1;
  let h = !l || u;
  if (!h || (e?.saw?.stockType === "roll" && l && (h = !1), e?.saw?.stockType === "roll" && s === "w")) return !1;
  let f = o.length > 1 && i < o.length - 1;
  u && (f = !0);
  const d = A.lessThan(
    n[s],
    t[s]
  );
  return f && d && !r;
}
function wn(t) {
  const e = H(t.cutPreference);
  return Ht(e);
}
function qo(t) {
  return H(t.cutPreference);
}
function No(t) {
  const e = wn(t);
  let n = 0;
  return t?.getStock?.hasTrim && t?.getStock?.trimmed === !1 && (n = t?.getStock?.trim?.[e === "x" ? "x1" : "y1"] ?? 0), n;
}
function Vi(t) {
  const e = wn(t), n = No(t);
  return t[e] === n;
}
function Ji(t, e, n) {
  if (!this?.config?.guillotine?.allowHeadCuts || !t?.guillotineOptions?.headCuts || !Vi(n)) return !1;
  const i = qo(n), r = wn(n);
  if (e[r] > n[r]) return !1;
  let s = !1;
  const o = 0.75;
  if (z(e) && e.group.addedAsGroup) {
    const a = n.shapes.filter((u) => u.group?.addedAsGroup === e.group.addedAsGroup), c = Ht(i), l = Bt(a, c);
    l[i] + l[c] >= n[i] * o && (s = !0);
  } else e[i] >= n[i] * o && (s = !0);
  return s;
}
class bn {
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
    const e = Bo(this.segment.cutDirection, this.isHeadCut);
    return N([() => E(e.cutDimension).to.equal(this.isHeadCut ? H(this.segment.cutDirection) : this.segment.cutDirection)]), e;
  }
  //segment cut direction doesn't change, but this computed property will
  get cutDirection() {
    return this.isHeadCut ? H(this.segment.cutDirection) : this.segment.cutDirection;
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
    return new bn({
      ...this,
      ...e
    });
  }
  // get shapes that are within boundaries of current strip
  getShapesInCurrentStrip() {
    return this.currentStripParent ? this.segment.shapes.filter((e) => Ut(e, this.currentStripParent, this.cutInfo.positionAxis)) : [];
  }
}
function Zi(t) {
  return {
    positionAxis: kt(t.positionAxis),
    positionDimension: H(t.positionDimension),
    cutAxis: kt(t.cutAxis),
    cutDimension: H(t.cutDimension)
  };
}
function Vn(t) {
  return t.type === "root" && t.isInitial;
}
function ce({
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
  X("cuts", `[makeCuts] START: segment ${t.l}x${t.w} phase=${t.phase} type=${t.type} shapes=${t.shapes?.length || 0} final=${o}`);
  let l = new bn({
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
  if (!Wo.call(this, l)) {
    X("cuts", "[makeCuts] EARLY RETURN: invalid input");
    return;
  }
  if (Ho.call(this, l)) {
    X("cuts", "[makeCuts] EARLY RETURN: duplicate segment");
    return;
  }
  zo(l), l = jo.call(this, l), l = Vo.call(this, l), X("cuts", `[makeCuts] Found ${l.stripParentShapes.length} strip parent shapes`), l.stripParentShapes.length && (l.segment.offcut = !1);
  const u = l.stripParentShapes?.length || 0;
  for (let g = 0; g < u; g++) {
    if (l = l.with({ currentStripIndex: g }), X("cuts", `[makeCuts] Processing shape ${g}: ${l.currentStripParent.l}x${l.currentStripParent.w}`), l.currentStripParent.l === e.l && l.currentStripParent.w === e.w) {
      X("cuts", "[makeCuts] Shape matches stock size, marking as produced"), l = Zn.call(this, l);
      break;
    }
    if (l = sr.call(this, l), l.final && l.segment?.parent?.hasHeadCut && l.segment.phase === 1 && t.type === "far" && l.isHeadCut === !1) {
      const b = Zi(l.cutInfo), { cutAxis: I, cutDimension: w, positionDimension: $, positionAxis: P } = b;
      Fe({
        parentSegment: t,
        stock: e,
        cutDirection: w,
        cutAxis: I,
        positionAxis: P,
        position: t[$] + t[P],
        headCut: !0,
        ptxDummyCut: !0
      });
    }
    if (l = Jo.call(this, l), l.final && e.cutType === "beam" && g === 0 && (t.type !== "far" || _i(l)) && (l = Zo.call(this, l)), l = _o.call(this, l), g = l.currentStripIndex, Yo.call(this, l) === !0) {
      X("cuts", "[makeCuts] Breaking due to edge of segment");
      break;
    }
    if (l = nr.call(this, l), l.cut)
      l.isHeadCut && (l.segment.hasHeadCut = !0);
    else {
      if (l.isHeadCut) {
        const b = H(l.cutDirection);
        l.attemptedDirections.has(b) ? X("cuts", `[makeCuts] Skipping reattempt - direction ${b} already attempted`) : (l = l.with({ forceNoHeadCut: !0 }), Jn.call(this, l, b));
        break;
      }
      if (l.rejectedByCollision && e.cutType === "beam" && t.phase > 0) {
        const { cutAxis: b } = l.cutInfo, I = l.currentStripParent[b];
        if (l.collisionShapes?.some(($) => !A.equalTo($[b], I)))
          continue;
      }
      l = _n.call(this, l);
    }
    if (l = l.with({
      cutSuccess: !!l.cut,
      headCutCount: l.isHeadCut && l.cut ? l.headCutCount + 1 : l.headCutCount
    }), l.cut) {
      if (l.final && (l = Zn.call(this, l), e.cutType === "beam" && Ko.call(this, l), l.cut)) {
        let b = t.parent?.autoId;
        (b === "root" || !b) && (b = "R"), b = `[${b}]`;
        let I = t.autoId ? t.id : "unknown";
        I = `[${I}]`, X("cuts", `${b}->${I} P${t.phase} {${l.currentStripParent.autoId}} ${l.isHeadCut ? "HEAD" : "NORM"} ${t?.type?.toUpperCase()} ${$t(t.l, 4)}x${$t(t.w, 4)} ${$t(l.cutPosition, 4)} ${$t(l?.cut?.x1, 4)}|${$t(l?.cut?.x2, 4)}|${$t(l?.cut?.y1, 4)}|${$t(l?.cut?.y2, 4)}`), X("cuts", `DIRECTIONS FOR ${I}: STATE ${l?.cutDirection?.toUpperCase()} CUT ${l.cut?.dimension?.toUpperCase() ?? "N/A"} SEGMENT ${t?.cutDirection?.toUpperCase()}`);
      }
      if (l = _n.call(this, l), l = ir.call(this, l), l.isHeadCut) break;
    }
  }
  const h = Ki(l.segment), { allShapesCut: f } = ji(l.segment.shapes, h, l.segment, { ignoreGroupMembership: !0 }), d = l.segment.cutDirection, p = H(d), S = !l.attemptedDirections.has(d), y = !l.attemptedDirections.has(p), x = t.cuts.length === 0;
  if (!f && S && y && x) {
    X("cuts", `[makeCuts] Not all shapes cut in segment [${t.id}] with ${l.segment.shapes.length} shapes, retrying in ${p?.toUpperCase()} direction`);
    const g = new Set(l.attemptedDirections);
    return g.add(d), l = l.with({ attemptedDirections: g }), Jn.call(this, l, p), l;
  }
  return l.final && e.cutType === "beam" && t.phase === 0 && (l = tr.call(this, l)), l.final && e.cutType === "beam" && t.type === "far" && t.parent.hasHeadCut && (l = er.call(this, l)), l;
}
function _i(t) {
  const { segment: e, isHeadCut: n } = t;
  return n ? !1 : e?.parent?.hasHeadCut && e.type === "far";
}
function Yo(t) {
  if (!t.isEdgeOfSegment) return !1;
  const { currentStripParent: e, segment: n, cutInfo: i } = t, { positionDimension: r, positionAxis: s } = i;
  if (A.greaterThanOrEqualTo(e[r] + e[s] + t.bladeWidth, n[r] + n[s]) && t.stock.cutType === "beam" || (t = t.with({ previousEdgeOfSegment: !0 }), !n.children.length)) return !1;
  const a = t.segment.children.findLast((c) => c.type === "far");
  return a ? (t = t.with({ segment: a }), a.cutDirection = H(t.cutDirection), ce.call(this, {
    segment: a,
    stock: t.stock,
    allStockShapes: t.allStockShapes,
    forceNoHeadCut: t.forceNoHeadCut,
    previousCutPosition: t.previousCutPosition,
    previousEdgeOfSegment: t.previousEdgeOfSegment,
    final: t.final,
    headCutCount: t.headCutCount
  }), !0) : !1;
}
function Ki(t, e = /* @__PURE__ */ new Set()) {
  if (e.has(t.autoId)) return [];
  e.add(t.autoId);
  const n = [...t.cuts];
  if (t.children?.length)
    for (const i of t.children)
      n.push(...Ki(i, e));
  return n;
}
function Jn(t, e) {
  const { segment: n } = t;
  n.cutDirection = e;
  const i = new Set(t.attemptedDirections);
  return i.add(e), t = t.with({
    isHeadCut: !1,
    attemptedDirections: i
  }), n.cuts.length = 0, n.clearChildren(), t.segment.hasHeadCut = !1, X("cuts", `REATTEMPTING [${n.id}] new direction ${n?.cutDirection?.toUpperCase()}`), ce.call(this, {
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
function Wo(t) {
  if (!t.segment) return !1;
  const { segment: e, stock: n, cutDirection: i, previousCutPosition: r, allStockShapes: s } = t;
  return !["l", "w"].includes(i) || e.l <= 0 || e.w <= 0 || r === void 0 ? !1 : (N([
    () => E(s.every((o) => z(o) || B(o)), "allStockShapes must be shape or any type of group").to.be.true,
    () => E(nt(n)).to.be.true
  ]), !0);
}
function zo(t) {
  const { final: e } = t;
  return e && _.makeCutsIteration++, t;
}
function Ho(t) {
  const { segment: e, cutDirection: n } = t;
  return e.type !== "root" && _.previousSegments.some((i) => e.l === i.l && e.w === i.w && e.x === i.x && e.y === i.y && e.type === i.type && n === i.cutDirection);
}
function jo(t) {
  const { segment: e, cutDirection: n } = t;
  return _.previousSegments.push({
    w: e.w.valueOf(),
    l: e.l.valueOf(),
    x: e.x.valueOf(),
    y: e.y.valueOf(),
    type: e.type,
    cutDirection: n.valueOf()
  }), _.previousSegments.length > 20 && (_.previousSegments = _.previousSegments.slice(-20)), t;
}
function Uo(t, e, n) {
  return t.filter(
    (i, r, s) => s.findIndex(
      (o) => A.equalTo(
        o[e] + o[n],
        i[e] + i[n]
      )
    ) === r
  );
}
function Vo(t) {
  const { segment: e, stock: n, cutDirection: i, cutInfo: r, previousCutPosition: s, halfBladeWidth: o } = t, { cutAxis: a, positionAxis: c, positionDimension: l } = r;
  let u = [];
  if (X("cuts", `Finding strip parent shapes. Segment ${e.id} has ${e.shapes.length} shapes:`), e.shapes.slice(0, 3).forEach((f) => {
    X("cuts", `  Shape ${f.id}: l=${f.l}, w=${f.w}, rot=${f.rot}, at (${f.x},${f.y}), added=${f.added}`);
  }), n.cutPreference === i) {
    const f = e.type === "far" && n.cutType === "guillotine" || !s ? e[a] : s + o;
    X("cuts", `[findStripParentShapes] cutPreference=${n.cutPreference}, cutDirection=${i}, cutAxis=${a}, axisPosition=${f}, segment.shapes[0]?.[${a}]=${e.shapes[0]?.[a]}, segment.type=${e.type}`), u = Do(
      e.shapes,
      a,
      f
    );
  } else {
    X("cuts", `[findStripParentShapes] NOT using cutPreference path, cutPreference=${n.cutPreference}, cutDirection=${i}, cutAxis=${a}, segment[${a}]=${e[a]}, segment.shapes[0]?.[${a}]=${e.shapes[0]?.[a]}, segment.shapes[0]?.added=${e.shapes[0]?.added}`), u = e.shapes.filter(
      (d) => d.added && A.equalTo(d[a], e[a])
    );
    const f = u.filter((d) => B(d));
    if (f.length > 0) {
      const d = /* @__PURE__ */ new Set();
      f.forEach((p) => {
        p.shapes && Array.isArray(p.shapes) && p.shapes.forEach((S) => d.add(S.autoId));
      }), u = u.filter((p) => B(p) ? !0 : !d.has(p.autoId));
    }
    u = Uo(u, c, l);
  }
  if (u.length === 0) {
    const f = e.shapes.filter((d) => d.added);
    if (f.length > 0) {
      const d = Math.min(...f.map((p) => p[a]));
      u = f.filter((p) => A.equalTo(p[a], d)), X("cuts", `[findStripParentShapes] Fallback: found ${u.length} shapes at min axis position ${d}`);
    }
  }
  const h = e.shapes.filter((f) => B(f) && f.type === "user" && f.added);
  for (const f of h)
    if (!u.some((d) => d.autoId === f.autoId)) {
      const d = n.cutPreference === i ? e.type === "far" && n.cutType === "guillotine" || !s ? e[a] : s + o : e[a];
      A.lessThanOrEqualTo(f[a], d) && u.push(f);
    }
  if (u.sort((f, d) => f[c] - d[c]), !e?.hasHeadCut) {
    const f = e.shapes.filter((p) => p.added), d = Bt(f, c);
    d && !u.some((p) => p.autoId === d.autoId) && u.push(d);
  }
  return t.with({ stripParentShapes: u });
}
function Jo(t) {
  const { segment: e, stock: n, cutDirection: i, cutInfo: r, halfBladeWidth: s, allStockShapes: o, previousStripShape: a, currentStripParent: c, currentStripIndex: l, bladeWidth: u } = t, { cutAxis: h, positionAxis: f, cutDimension: d, positionDimension: p } = r;
  if (l === 0) return t;
  if (a && A.equalTo(c[h], e[h]) && A.equalTo(a[h], e[h]) && !A.equalTo(
    c[f],
    a[f] + a[p] + u
  )) {
    X("cuts", `[makeCuts] Creating gap cut at position ${c[f] - s}, dir=${i}`);
    const { cut: S, previousCutPosition: y } = Fe({
      parentSegment: e,
      stock: n,
      cutDirection: i,
      cutAxis: h,
      positionAxis: f,
      position: c[f] - s,
      allStockShapes: o
    });
    if (S) {
      const x = y < e[f] ? e[f] : y, g = x + s - e[f], m = c[f] - x - u - s, b = e[f] + g, I = m > 0 ? In.call(this, {
        parent: e,
        stock: n,
        offcut: !0,
        type: "near",
        [h]: e[h],
        [d]: e[d],
        [f]: b,
        [p]: m
      }) : null;
      I && N([
        () => E(
          I.cutDirection,
          `near side segment ${I.id} has the same cutDirection as segment ${e.id}`
        ).not.to.equal(e.cutDirection)
      ]);
    }
  }
  return t;
}
function Zo(t) {
  if (t.stock.cutType !== "beam" || t.currentStripIndex !== 0 || t.segment.type === "far" && !_i(t)) return t;
  const { segment: e, stock: n, cutDirection: i, cutInfo: r, allStockShapes: s, halfBladeWidth: o } = t, { cutAxis: a, positionAxis: c, positionDimension: l } = r;
  return e.phase !== 1 || !t.final || Fo({
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
function _o(t) {
  const { segment: e, stock: n, cutInfo: i, halfBladeWidth: r, currentStripParent: s, currentStripIndex: o, stripParentShapes: a, isHeadCut: c, bladeWidth: l, previousEdgeOfSegment: u } = t, { positionAxis: h, cutAxis: f, positionDimension: d, cutDimension: p } = i;
  let S = s[h] + s[d] + r, y = !1, x = o;
  X("cuts", `Cut position calc: shape ${s.l}x${s.w}, posAxis=${h}, posDim=${d}`), X("cuts", `  Shape rot=${s.rot}, autoId=${s.autoId}`), X("cuts", `  ${h}=${s[h]}, ${d}=${s[d]} => cutPos=${S}`), X("cuts", `  cutDirection=${t.cutDirection}, cutAxis=${i.cutAxis}, cutDim=${i.cutDimension}`), X("cuts", `  Shape actual extent: x=[${s.x} to ${s.x + s.l}], y=[${s.y} to ${s.y + s.w}]`), X("cuts", `  Strip parent shapes count: ${a.length}`), a.length > 1 && X("cuts", `  All strip parents: ${a.map((b) => `${b.id}(${b.l}x${b.w} rot=${b.rot})`).join(", ")}`);
  let g = A.greaterThanOrEqualTo(
    s[h] + s[d] + l,
    e[h] + e[d]
  );
  const m = e.shapes;
  if (!c && !g && !u && Xo.call(this, e, n, s, o, g, t.cutDirection, a)) {
    let b = s;
    for (let I = o + 1; I < a.length; I++) {
      const w = a[I];
      if (w.autoId === b.autoId) continue;
      if (!w) break;
      const $ = m.filter(
        (R) => Ut(R, s, h)
      ), P = Bt($, f), T = $.reduce(
        (R, O) => A.greaterThan(R[d], O[d]) ? R : O
      );
      A.greaterThan(
        T[h] + T[d],
        b[h] + b[d]
      ) && (b = T, S = b[h] + b[d] + r);
      const M = Bt(
        m.filter(
          (R) => Ut(R, w, h)
        ),
        f
      );
      if (!A.equalTo(
        P[f] + P[p],
        M[f] + M[p]
      ))
        break;
      if (A.equalTo(b[p], w[p]) && A.equalTo(b[f], w[f]))
        y = !0, S = w[h] + w[d] + r, b = w, x = I;
      else
        break;
    }
    y && (e.merged = !0, g = A.greaterThanOrEqualTo(
      S - r,
      e[h] + e[d]
    ));
  }
  return t.with({
    cutPosition: S,
    mergedCut: y,
    isEdgeOfSegment: g,
    currentStripIndex: x
  });
}
function Ko(t) {
  if (t.stock.cutType !== "beam" || !t.cut) return t;
  const { cut: e, segment: n, cutInfo: i, currentStripParent: r, currentStripIndex: s, stripParentShapes: o } = t, { positionAxis: a, positionDimension: c } = i;
  e?.guillotineState?.partProduced && s === o.length - 1 && A.equalTo(
    r[a] + r[c],
    n[a] + n[c]
  ) && (X("cuts", `MARKING PTX DUMMY CUT ${r.autoId} ${t.cutPosition}`), e.ptxData.isDummy = !0);
}
function Qo(t) {
  return t.hasHeadCut ? H(t.cutDirection) : t.cutDirection;
}
function tr(t) {
  if (t.stock.cutType !== "beam") return t;
  const { segment: e, cutInfo: n, stock: i, cutDirection: r } = t;
  if (e.phase !== 0) return t;
  const { cutAxis: s } = n;
  for (const o of e.cuts)
    o.dimension === Qo(e) && (o[s + 1] = 0, o[s + 2] = i[r]);
  return t;
}
function er(t) {
  if (t.stock.cutType !== "beam") return t;
  const { segment: e, cutInfo: n, stock: i, cutDirection: r } = t;
  if (e.phase !== 1) return t;
  const { cutAxis: s } = n;
  for (const o of e.cuts)
    e.hasHeadCut ? o.dimension === H(e.cutDirection) && (o[kt(s) + 2] = i[H(r)]) : o.dimension === e.cutDirection && (o[s + 2] = i[r]);
}
function nr(t) {
  const { segment: e, stock: n, cutDirection: i, cutInfo: r, cutPosition: s, allStockShapes: o, currentStripParent: a, isHeadCut: c } = t, { cutAxis: l, positionAxis: u } = r;
  c && Lo(a, i);
  const { cut: h, farSideSegmentSize: f, previousCutPosition: d, rejectedByCollision: p, collisionShapes: S } = Fe({
    parentSegment: e,
    stock: n,
    cutDirection: i,
    cutAxis: l,
    positionAxis: u,
    position: s,
    allStockShapes: e.phase === 0 ? o : [],
    headCut: t.isHeadCut
  });
  h && t.final && X("cuts", `MADE CUT ${h.x1}|${h.x2}|${h.y1}|${h.y2} ${h.isHead ? "HEAD" : "NORM"}`);
  const y = p ? t.previousCutPosition : d;
  return t.with({
    cut: h,
    farSideSegmentSize: f,
    previousCutPosition: y,
    rejectedByCollision: p || !1,
    collisionShapes: S || []
  });
}
function Zn(t) {
  if (t.stock.cutType !== "beam") return t;
  const { cut: e, cutInfo: n, halfBladeWidth: i, currentStripParent: r } = t;
  if (!e) return t;
  const { cutAxis: s, cutDimension: o, positionAxis: a, positionDimension: c } = n;
  return A.equalTo(
    e[s + 2] - e[s + 1],
    r[o]
  ) && A.equalTo(
    e[a + 1],
    r[a] + r[c] + i
  ) && (e.guillotineState.partProduced = r.parentId), t;
}
function _n(t) {
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
    halfBladeWidth: u,
    bladeWidth: h,
    allStockShapes: f,
    final: d,
    cutDirection: p,
    currentStripIndex: S
  } = t, { cutAxis: y, positionAxis: x, cutDimension: g, positionDimension: m } = i, b = S === 0 && A.greaterThan(o[x], e[x]);
  if (!c && !l && !b) return t;
  const I = {
    parent: e,
    stock: n,
    merged: s,
    type: "near",
    hasHeadCut: e.hasHeadCut,
    shapes: []
  }, w = b && !c ? o[x] : r, $ = a != null && a >= e[x], P = $ ? a + u : e[x], T = w - ($ ? a + h : u + e[x]);
  X("cuts", `[createNearSegment] segment[${e.id}] at (${e.x},${e.y}), posAxis=${x}, cutAxis=${y}, previousCutPosition=${a}, hasPreviousCut=${$}, nearSegmentPosition=${P}`);
  const M = {
    [y]: e[y],
    [g]: e[g],
    [x]: P,
    [m]: T,
    cutDirection: H(p)
  };
  X("cuts", `[createNearSegment] dimensionProps: x=${M.x ?? "N/A"}, y=${M.y ?? "N/A"}, l=${M.l ?? "N/A"}, w=${M.w ?? "N/A"}`);
  const R = In.call(
    this,
    { ...I, ...M },
    !1
    // Don't reject if identical - we'll filter shapes ourselves
  );
  if (!R) return t;
  if (X("cuts", `[createNearSegment] AFTER creation: segment ${e.id} at (${R.x},${R.y}) ${R.l}x${R.w}`), R.shapes = e.shapes.filter((O) => A.greaterThanOrEqualTo(O.x, R.x) && A.lessThanOrEqualTo(O.x + O.l, R.x + R.l) && A.greaterThanOrEqualTo(O.y, R.y) && A.lessThanOrEqualTo(O.y + O.w, R.y + R.w)), X("cuts", `[createNearSegment] nearSideSegment.shapes.length = ${R.shapes.length}`), R.shapes.length > 0) {
    const O = A.equalTo(R.l, o.l) && A.equalTo(R.w, o.w);
    if (X("cuts", `[createNearSegment] nearSegment: ${R.l}x${R.w}, shape: ${o.l}x${o.w}, identical: ${O}, mergedCut: ${s}`), s || !O) {
      X("cuts", `CUTTING NEAR SIDE SEGMENT [${R.id}] DIR ${R?.cutDirection?.toUpperCase()}`), X("cuts", `[createNearSegment] CALLING makeCuts recursively with segment ${R.l}x${R.w}, segment.shapes.length=${R.shapes?.length}, final=${d}`);
      const Y = ce.call(
        this,
        {
          segment: R,
          stock: n,
          cutDirection: R.cutDirection,
          previousCutPosition: a,
          allStockShapes: f,
          final: d,
          headCutCount: t.headCutCount
        }
      );
      X("cuts", `[createNearSegment] RETURNED from makeCuts, childState=${Y}`), t = t.with({ headCutCount: Y?.headCutCount || t.headCutCount });
    }
  }
  return t.with({ nearSideSegment: R });
}
function ir(t) {
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
    allStockShapes: u,
    final: h
  } = t, { cutAxis: f, positionAxis: d, cutDimension: p, positionDimension: S } = i, y = {
    parent: e,
    stock: n,
    offcut: l ? !1 : a === c.length - 1,
    type: "far",
    hasHeadCut: !1,
    shapes: [],
    cutDirection: e.cutDirection
    //[] test
  }, x = {
    [f]: e[f],
    [p]: e[p],
    [d]: r + o,
    [S]: s
  };
  X("cuts", `Creating FAR segment: cutAxis=${f}, cutDim=${p}, posAxis=${d}, posDim=${S}`), X("cuts", `FAR segment props: ${f}=${e[f]}, ${p}=${e[p]}, ${d}=${r + o}, ${S}=${s}`), X("cuts", `FAR segment calculation: cutPosition=${r}, halfBladeWidth=${o}, result=${r + o}`);
  const g = In.call(this, { ...y, ...x });
  if (!g) return t;
  if (X("cuts", `FAR segment created [${g.id}] at (${g.x},${g.y}) ${g.l}x${g.w}`), X("cuts", `  Parent has ${e.shapes.length} shapes, far segment has ${g.shapes.length} shapes`), X("cuts", `  Cut was at position ${r} (${d}=${r})`), X("cuts", `  Expected offcut dimensions based on stock (1200x1200): should be ${e.l - r}x${e.w} or ${e.l}x${e.w - r}`), l) {
    g.shapes = e.shapes.filter((b) => {
      const I = b[kt(f)] + b[H(p)];
      return A.greaterThan(I, r);
    }), X("cuts", `HEAD CUT: Making cuts in far segment [${g.id}] with ${g.shapes.length} shapes`);
    const m = ce.call(
      this,
      {
        segment: g,
        stock: n,
        cutDirection: g.cutDirection,
        previousCutPosition: null,
        // No previous cut in this new segment yet
        allStockShapes: u,
        final: h,
        headCutCount: t.headCutCount
      }
    );
    t = t.with({ headCutCount: m?.headCutCount || t.headCutCount });
  }
  return t.with({ farSideSegment: g });
}
function Qi(t) {
  if (!this?.config?.guillotine?.allowHeadCuts || !t?.saw?.guillotineOptions?.headCuts) return !1;
  if (Vn(t)) return !0;
  if (t.type === "far" || t.type === "root") {
    if (!Vi(t)) return !1;
    if (t.parent.hasHeadCut || Vn(t.parent)) return !0;
  }
  return !1;
}
function sr(t) {
  const { segment: e, currentStripParent: n, forceNoHeadCut: i } = t;
  if (i) return t.with({ isHeadCut: !1 });
  let r = !1;
  return Qi.call(this, e) ? (r = Ji.call(this, e.saw, n, e, t.cutDirection), t.with({ isHeadCut: r })) : t.with({ isHeadCut: !1 });
}
function Fe({
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
  const u = e.halfBladeWidth, h = bi(r), f = Bs.parse({
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
  let d = new we(f);
  if (!c && t.type === "near" && t.parent.hasHeadCut && (d.ptxData.headCutStrip = !0), !l) {
    const $ = o.length ? o : t.shapes, P = dn(
      d,
      e,
      $,
      !0
    );
    if (P?.length)
      return {
        cut: null,
        farSideSegmentSize: null,
        previousCutPosition: null,
        rejectedByCollision: !0,
        collisionShapes: P
      };
  }
  const p = t.cuts.filter(($) => $.dimension === n && A.equalTo($[i + 1], d[i + 1]));
  if (s && p.some(($) => A.equalTo($[r + 1], s)))
    return {
      cut: null,
      farSideSegmentSize: null,
      previousCutPosition: null
    };
  const S = p.length ? p[p.length - 1] : null;
  let y = S ? S[r + 1] : null, x = t[r] + t[h] - (s + u);
  x < 0 && (x = 0);
  let g = t.parent;
  for (; g; ) {
    if (g.cuts.some((P) => P.dimension === n && A.equalTo(P[r + 1], s)))
      return {
        cut: null,
        farSideSegmentSize: x,
        previousCutPosition: y
      };
    g = g.parent;
  }
  const m = A.lessThanOrEqualTo(
    s - u,
    t[r] + t[h]
  ), b = s - u, I = t[r] + t[h], w = A.greaterThanOrEqualTo(b, I);
  return d.beamTrimL1 || d.beamTrimW1 || e.cutType === "beam" && A.lessThanOrEqualTo(
    s - u,
    t[r] + t[h]
  ) || d.ptxData.isDummy || m && !w ? (d.ptxData.order = _.ptxCuts++, t.cuts.push(d)) : d.stock?.saw?.stockType === "roll" ? t.cuts.push(d) : (d = null, x = null, y = null), {
    cut: d,
    farSideSegmentSize: x,
    previousCutPosition: y
  };
}
function or({
  x: t,
  y: e,
  l: n,
  w: i,
  type: r,
  parent: s,
  rejectIdentical: o
}) {
  return o && A.equalTo(t, s.x) && A.equalTo(e, s.y) && A.equalTo(i, s.w) && A.equalTo(n, s.l) ? "IDENTICAL_TO_PARENT" : n <= 0 || i <= 0 ? "INVALID_DIMENSIONS" : s && !s.autoId ? (console.error("[ERROR] Parent segment has no autoId!"), console.error(`Parent details: type=${s.type}, x=${s.x}, y=${s.y}, l=${s.l}, w=${s.w}`), "MISSING_PARENT_ID") : r === "root" && s ? (console.error("[ERROR] Attempting to create root segment with a parent!"), console.error(`Parent autoId: ${s.autoId}, Parent type: ${s.type}`), "ROOT_WITH_PARENT") : (r === "root" && s?.type !== void 0 && s.type !== "root" && console.error(`[ERROR] Creating root segment with non-root parent of type: ${s.type}`), null);
}
function In({
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
}, u = !0) {
  if (or({ x: t, y: e, l: n, w: i, type: r, parent: s, rejectIdentical: u })) return;
  let f;
  _.segments++;
  let d = s.phase + 1;
  s.hasHeadCut && (s.isInitial || (s.phase = 0), d = s.phase + 1);
  try {
    const y = _.segments.toString();
    if (f = new Ct({
      x: t,
      y: e,
      l: n,
      w: i,
      t: typeof o.t == "string" ? parseFloat(o.t) : o.t,
      id: y,
      phase: d,
      parent: s,
      stock: o,
      offcut: a,
      merged: c,
      type: r,
      grain: o.grain,
      material: o.material,
      saw: o.saw,
      cutDirection: l || H(s.cutDirection)
    }), s && s.autoId === f.autoId)
      throw console.error(`[ERROR] Segment created with itself as parent! autoId: ${f.id}`), new Error("Segment cannot be its own parent");
  } catch (y) {
    X("info", `issue creating segment ${y.message}`);
    return;
  }
  const p = Oe(f), S = s.shapes.filter((y) => y.added ? A.greaterThanOrEqualTo(y.x, f.x) && A.lessThanOrEqualTo(y.x + y.l, f.x + f.l) && A.greaterThanOrEqualTo(y.y, f.y) && A.lessThanOrEqualTo(y.y + y.w, f.y + f.w) : y.willItFit(f, null, p));
  return f.shapes = S, f;
}
function rr(t, e = !1, n) {
  e && X("cuts", `------------------- ANALYSE SEGMENTS ${t.id} -------------------`);
  const i = [], r = [], s = [];
  let o = 0, a = 0;
  const c = /* @__PURE__ */ new Set(), l = (u, h = 0) => {
    if (!u) return h;
    if (c.has(u.autoId))
      return console.error(`[CIRCULAR REFERENCE DETECTED] Segment ${u.id} is already in the traversal path!`), console.error(`Traversal path: ${Array.from(c).join(" -> ")} -> ${u.id}`), console.error(`Segment details: autoId=${u.id}, parent=${u.parent?.id}, children=[${u.children?.map((d) => d.autoId).join(", ")}]`), h;
    c.add(u.autoId);
    let f = h;
    i.push(u), (u.offcut === !0 || !u.shapes?.length) && s.push(u);
    for (let d = 0; d < u.cuts.length; d++) {
      const p = u.cuts[d];
      if (p) {
        if (p.guillotineState.phase = u.phase, p.isHead ? (p.ptxData.function = 0, o++) : d > 0 && r[d - 1].isHead ? p.dimension === "l" ? p.ptxData.function = 1 : p.dimension === "w" && (p.ptxData.function = 2) : (p.ptxData.function = p.guillotineState.phase + 1, p.ptxData.headCutStrip && p.ptxData.function--), p.isTrim && a++, e)
          if (p.isHead) {
            let S = 0;
            Oo(u, () => S++), f = S, X("cuts", `[${u.id}] reset cut order to ${f}`);
          } else d > 0 && u.cuts[d - 1].isHead && f++;
        p.guillotineState.order = f, p.guillotineState.segmentCutOrder = d, p.guillotineState.parentSegmentID = u?.autoId || "root", e && ar(p, u), r.push(p), e && X("cuts", `[${u.id}] {${f}} ${p.x1}|${p.x2}|${p.y1}|${p.y2}`), f++;
      }
    }
    if (u.children && u.children.length > 0) {
      const d = u.children.filter((p) => p.autoId === u.autoId ? (console.error(`[SELF-REFERENCE FOUND] Removing segment ${u.id} from its own children array`), console.error(`Segment type: ${u.type}, Phase: ${u.phase}`), console.error(`Number of children: ${u.children.length}`), console.error(`Children autoIds: ${u.children.map((S) => S.autoId).join(", ")}`), !1) : !0);
      d.length !== u.children.length && (u.children = d);
      for (const p of u.children)
        if (p && it(p)) {
          if (p.type === "firstShape")
            continue;
          if (p.autoId === u.autoId) {
            console.error(`[CRITICAL SELF-REFERENCE] Segment ${u.id} still has itself as a child!`), console.error("This should have been filtered. Skipping traversal.");
            continue;
          }
          if (c.has(p.autoId)) {
            console.error(`[CIRCULAR REFERENCE] Child segment ${p.autoId} is already in traversal path`), console.error(`Parent: ${u.id}, Path: ${Array.from(c).join(" -> ")}`);
            continue;
          }
          if (u.hasHeadCut) {
            const S = n + r.filter((y) => !y.isHead && !y.ptxData.isDummy).length;
            f = l(p, S);
          } else
            f = l(p, f);
        }
    }
    return c.delete(u.autoId), f;
  };
  return l(t), e && (X("cuts", `Segments processed: ${i.length}`), X("cuts", `Cuts processed: ${r.length}`), X("cuts", `Trim cuts found: ${a}`), X("cuts", `Head cuts found: ${o}/${n}`), X("cuts", `Offcuts identified: ${s.length}`), X("cuts", `ROOT segment [${t.id}] has ${t.children?.length || 0} children`), X("cuts", "------------------- END ANALYSE SEGMENTS -------------------")), [t, r, s];
}
function ar(t, e) {
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
function lr(t, e) {
  return t?.length && t.forEach((n) => {
    e = e.filter((i) => !(i.id === n.id || B(i) && i.shapes.find((r) => r.id === n.id)));
  }), e;
}
const yt = {
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
function Pt(t, e) {
  if (!e) return t;
  const n = e.weighting;
  if (!n) return t;
  for (const i in n)
    n[i] !== null && (t[i] = t[i] * n[i]);
  return t;
}
function $n(t, e, n) {
  if (this?.weighting?.custom)
    return Pt(this.weighting.custom, n);
  switch (t.cutType) {
    case "efficiency":
      if (e?.saw?.stockType === "roll")
        return Pt(yt.roll.efficiency(), n);
      break;
    case "beam":
      return Pt(yt.guillotine.beam(), n);
    case "guillotine": {
      if (e?.saw?.stockType === "roll")
        return Pt(yt.roll.guillotine(), n);
      switch (e.saw.guillotineOptions.strategy) {
        case "time":
          return Pt(
            yt.guillotine.time(),
            n
          );
        case "efficiency":
          return Pt(
            yt.guillotine.stock(),
            n
          );
        default:
          return Pt(
            yt.guillotine.stock(),
            n
          );
      }
    }
  }
  return Pt(yt[t.cutType].standard(), n);
}
class cr {
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
      weighting: $n.call(
        this.CLO,
        n,
        nt(n) ? n : n.getStock
      )
    }, this.weighting = this.weightingKeys[this.container.cutType], n?.saw?.stockType === "roll" && (this.selectionMethod = "rollLength", this.weighting = this.weightingKeys.roll), this.uniqueShapes = Rt(i, !1), this.population = [], this.options = {
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
      this.population.push(new Kn(this, e));
    this.population.push(new Kn(
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
        this.bestResult = e, this.bestResult.weighting = structuredClone(n.weighting), B(this.bestResult.firstShape) && this.bestResult.firstShape.shapes.forEach((i) => e.shapes.push(i.compress()));
      else {
        if (e.score.efficiency <= this.bestResult.score.efficiency)
          return;
        this.bestResult = e, this.bestResult.weighting = structuredClone(n.weighting), B(this.bestResult.firstShape) && this.bestResult.firstShape.shapes.forEach((i) => e.shapes.push(i.compress()));
      }
  }
  async run() {
    this.CLO.runningEvo = !0, X("swarm", `Swarm starting - population: ${this.options.populationSize}, steps: ${this.options.steps}`), this.CLO.resetShapes(this.shapeList), this.createPopulation();
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
    return await e.call(this), this.CLO.runningEvo = !1, this.bestResult.type = "evo", X("swarm", `Swarm complete - best efficiency: ${this.bestResult?.score?.efficiency?.toFixed(3)}`), {
      result: this.bestResult,
      evolutionVisData: this.evolutionVisData
    };
  }
}
class Kn {
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
    const e = yt.efficiency.standard();
    this.weighting = {};
    for (const [n, i] of Object.entries(e)) {
      const r = i;
      if (this.swarm?.weighting && this.swarm.weighting.indexOf(n) > -1) {
        let s = r - this.swarm.mutation.range, o = r + this.swarm.mutation.range;
        s < this.swarm.mutation.min && (s = this.swarm.mutation.min), o > this.swarm.mutation.max && (o = this.swarm.mutation.max), this.weighting[n] = Ne(s, o);
      } else this.weighting[n] = e[n];
    }
  }
  //assess fitness and generate a score
  async assess() {
    if (this.swarm.progress.current++, !!this.alive) {
      switch (this.previousScore = this.score, this.previousScore && (this.previousScore.weighting = this.weighting), this.swarm.container.cutType) {
        case "efficiency":
          {
            const e = await Gt.runSpecificStrategy.call(
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
        X("swarm", `Individual ${this.id} - efficiency: ${this.score.efficiency?.toFixed(3)} | weighting: { ${e} }`);
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
      n ? o += Ne(-0.1, 0.1) : o += Ne(-0.05, 0.05), this.weighting[i] += o;
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
function sn(t) {
  return typeof t?.guillotineState?.myPhase == "number";
}
function ne(t) {
  return t.type === "root" || t[Ht(t.stock.cutPreference)] === 0;
}
function on(t, e) {
  return t?.guillotineState?.myPhase === e;
}
function ur(t) {
  const e = Cn(t);
  if (!e) return ti(t, 1);
  const i = wt(e) === "l" ? "w" : "l", r = ts(t, e, i);
  ti(t, r);
}
function ts(t, e, n) {
  if (!t) return null;
  if (!e) return 1;
  const i = Pn(e);
  return t[n] === e[n] ? i : i + 1;
}
function Cn(t) {
  return t?.guillotineState?.myStripParent || null;
}
function Qn(t, e) {
  t?.guillotineState && (t.guillotineState.myStripParent = e);
}
function ti(t, e) {
  typeof e == "number" && t?.guillotineState && t.guillotineState.setPhase(e);
}
function Pn(t) {
  return t?.guillotineState ? t.guillotineState.myPhase : null;
}
function wt(t) {
  return t?.guillotineState ? t.guillotineState.myStripDirection : null;
}
function ke(t, e) {
  if (t?.guillotineState) {
    if (typeof t.guillotineState.setStripDirection != "function") {
      const n = t.guillotineState || {};
      t.guillotineState = new be(n);
    }
    t.guillotineState.setStripDirection(e);
  }
}
function ei(t, e) {
  if (it(t)) {
    fr(e);
    const n = e?.bestScore?.score;
    n && ["currentStripDirection", "myStripDirection", "keyStripDirection", "myPhase"].forEach((r) => {
      n[r] && (e.guillotineState[r] = n[r]);
    });
  }
}
function fr(t) {
  const e = t.bestScore;
  e?.myStripParent && Qn(t, e.myStripParent), B(t) && t.shapes.forEach((n) => Qn(n, Cn(n)));
}
function hr(t, e) {
  let n = null, i = e.x.get(t.x) || [];
  i = i.filter((a) => {
    const c = a.guillotineState.myStripParent;
    return c && !c.guillotineState?.firstShape ? nn(t, c, "y") : !0;
  }), i.sort((a, c) => a.x - c.x);
  let r = e.y.get(t.y) || [];
  r = r.filter((a) => {
    const c = a.guillotineState.myStripParent;
    return c && !c.guillotineState?.firstShape ? nn(t, c, "x") : !0;
  }), r.sort((a, c) => a.y - c.y);
  const s = i.length ? i[0] : null, o = r.length ? r[0] : null;
  return s && o ? n = s.placementOrder > o.placementOrder ? s : o : n = s || o, n;
}
function rn(t, e) {
  t.x.has(e.x) ? t.x.get(e.x).push(e) : t.x.set(e.x, [e]), t.y.has(e.y) ? t.y.get(e.y).push(e) : t.y.set(e.y, [e]);
}
function dr(t, e) {
  const n = t.x.get(e.x) ?? [], i = n.indexOf(e);
  i !== -1 && (n.splice(i, 1), n.length === 0 && t.x.delete(e.x));
  const r = t.y.get(e.y) ?? [], s = r.indexOf(e);
  s !== -1 && (r.splice(s, 1), r.length === 0 && t.y.delete(e.y));
}
function pr(t, e = !0) {
  const n = [], i = /* @__PURE__ */ new Set();
  for (const r of t.shapes)
    if (B(r)) {
      const s = r.type === "position", o = ht(r), a = r.type === "user";
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
    () => E(pt(t.shapes)).to.be.false,
    () => Ii(t.shapes, "removeGroupsFromSegment")
  ]), t;
}
function es(t, e) {
  if (t.children && Array.isArray(t.children)) {
    if (e(t) === !1) return;
    for (const n of t.children)
      es(n, e);
  }
}
function gr(t, e) {
  const n = Rt(t, !1), i = /* @__PURE__ */ new Map();
  for (const r of t) {
    let s = i.get(r.parentId);
    s || (s = [], i.set(r.parentId, s)), s.push(r);
  }
  for (const r of e) {
    const s = n.filter((l) => l.stockLock.includes(r.parentId));
    if (!s.length) continue;
    const o = s.map((l) => l.area), a = o.reduce((l, u) => l + u, 0) / s.length;
    if (!(A.calculateCoefficientOfVariation(o) < this.config.priority.variationThreshold))
      for (const l of s) {
        l.priority || (l.priority = {});
        const u = mr(l, r, a);
        l.priority[r.parentId] = u;
        const h = i.get(l.parentId);
        if (h)
          for (const f of h)
            f.id !== l.id && (f.priority || (f.priority = {}), f.priority[r.parentId] = u);
      }
  }
}
function mr(t, e, n) {
  if (t.isExactFit(e) || t.area >= e.area * 0.9 || t.longSide >= e.longSide * 0.9)
    return 1;
  const i = t.area, r = e.area, s = i / r;
  return i > n ? s : 0;
}
function yr(t, e) {
  return t.reduce((n, i) => {
    const r = i.getPriority(e), s = n.getPriority(e);
    return r > s ? i : n;
  });
}
function xr(t, e, n = null) {
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
function ns(t, e, n = "y") {
  if (!t || !e || t[n] === void 0 || !e.area || e.area === 0) return 0;
  const i = kt(n), r = i === "y" ? "w" : "l", s = e[n] ?? 0, o = e[i] ?? 0, l = (t[n] - s) * e[r] / e.area, f = (t[i] - o) / e[r] * e.aspect * 0.01;
  return 1 - (l + f);
}
function is(t, e, n = "y") {
  if (!t || !e) return 0;
  "grain" in e && e.grain === "w" && (n = kt(n));
  const i = n === "y" ? "w" : "l";
  return (t[n] + t[i]) / e[i];
}
function Sr(t, e, n) {
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
function wr(t, e, n) {
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
    const c = Sr(o, a, n);
    i += c.length, r += c.reduce(
      (l, u) => u ? l + 1 : l,
      0
    );
  };
  return B(t) ? t.shapes.forEach((o) => {
    B(e) ? e.shapes.forEach((a) => {
      s(o, a);
    }) : s(o, e);
  }) : B(e) ? e.shapes.forEach((o) => {
    s(t, o);
  }) : s(t, e), { positiveAlignments: r, possibleAlignments: i };
}
function br(t, e, n) {
  if (!t || !e || !n)
    return [!1, !1, !1, !1];
  if (t.autoId === e.autoId)
    return [!1, !1, !1, !1];
  const i = t.getMinSpacing(n.saw), r = t.x, s = t.x + t.l, o = t.y + t.w, a = t.y, c = e.x, l = e.x + e.l, u = e.y + e.w, h = e.y, f = () => r === l + i && (a >= h && a < u || o <= u && o > h), d = () => s + i === c && (a >= h && a < u || o <= u && o > h), p = () => a === u + i && (r >= c && r < l || s <= l && s > c), S = () => a + i === h && (r >= c && r < l || s <= l && s > c);
  return [
    f(),
    d(),
    p(),
    S()
  ];
}
function Ir(t, e) {
  return t.l === e.l && t.x === e.x;
}
function $r(t, e) {
  return t.w === e.w && t.y === e.y;
}
function ss(t, e, n, i = {}) {
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
  r && (c = br(t, e, n));
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
  const u = ["lr", "rl", "bt", "tb"], h = c.findIndex(Boolean), f = u[h];
  if (!f) throw new Error("no contact type found");
  let d = null, p = null, S = 0;
  if (a && f && (d = Pr(t, e, f)), s && (p = wr(t, e, n)), o) {
    const y = f === "rl" || f === "lr", x = f === "tb" || f === "bt", g = $r(t, e), m = Ir(t, e);
    (y && g || x && m) && (S = m && g ? 1 : 0.5);
  }
  return {
    contactResult: c,
    cohesion: d,
    alignment: p,
    similarDimensions: S,
    type: f,
    neighbour: e,
    neighbours: l
  };
}
function Cr(t, e) {
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
  ].reduce((h, f) => h + f, 0);
}
function Pr(t, e, n) {
  if (!t || !e || !n) return 0;
  const i = Tr(t, e), r = ni(t), s = ni(e), o = r + s, a = Math.max(i.l * i.w, o), c = Math.min(1, Math.max(0, o / a)), l = Math.min(1, Math.max(
    0,
    vr(t, e, n) || 0
  )), u = c * 0.7 + l * 0.3;
  return Math.min(1, Math.max(0, u));
}
function Tr(t, e) {
  const n = Re(t), i = Re(e), r = Math.min(n.x, i.x), s = Math.min(n.y, i.y), o = Math.max(n.x + n.l, i.x + i.l), a = Math.max(n.y + n.w, i.y + i.w);
  return {
    x: r,
    y: s,
    l: o - r,
    w: a - s
  };
}
function Re(t) {
  if (B(t)) {
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
function ni(t) {
  return B(t) ? t.shapes.reduce((e, n) => e + n.area, 0) : t.area;
}
function vr(t, e, n) {
  const i = Re(t), r = Re(e);
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
async function Er(t, e, n, i) {
  return await Gt.runSpecificStrategy.call(this, {
    shapes: t,
    container: e,
    firstShape: n,
    firstShapeRotation: i
  });
}
function ii(t, e, n, i = null, r = null, s = null, o = null) {
  if (!i)
    throw new Error("shapePosition was not passed any placed shapes");
  if (!r)
    throw new Error("shapePosition was not passed any unplaced shapes");
  it(e) ? kr(
    t,
    e,
    n,
    i,
    o
    // tidy
  ) : os(
    t,
    e,
    n,
    i,
    s
  );
}
function kr(t, e, n = null, i = [], r = null) {
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
  }, o = e.cutPreference, a = e.cutDirection, c = e.getStock.bladeWidth, { cutAxis: l } = Hi(a), u = hr(t, r);
  if (!u) return !1;
  const h = wt(u);
  let f = h;
  const d = h === "l" ? "w" : "l";
  u[d] !== t[d] && (f = H(h));
  const p = ts(t, u, d);
  if (e.saw.guillotineOptions.maxPhase && p > e.saw.guillotineOptions.maxPhase) return !1;
  const S = wt(u) ?? e.cutDirection;
  if (!S) throw new Error("keyDimension is not defined");
  const y = Cn(u);
  if (y) {
    const I = kt(Ht(wt(y))), w = nn(t, y, I);
    if (y.guillotineState.myPhase <= 2 && !w) return !1;
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
    const w = ss(
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
    w.type && (g[w.type].push(I), "cohesion" in s && n.cohesion && x && (s.cohesion += w.cohesion), "similarDimensions" in s && n.similarDimensions && (s.similarDimensions += w?.similarDimensions ? w.similarDimensions : 0), "fenceConsistency" in s && n.fenceConsistency && (o === "w" ? w.type === "lr" && w.neighbour.l === t.l && w.neighbour.y === t.y && (s.fenceConsistency = 1) : o === "l" && w.type === "bt" && w.neighbour.w === t.w && w.neighbour.x === t.x && (s.fenceConsistency = 1)));
  }
  if (e.cutDirection) {
    const I = e.cutDirection;
    if (I === "w") {
      const w = t.y === e.y, $ = g.bt && g.bt.length > 0;
      if (!w && !$)
        return !1;
    } else if (I === "l") {
      const w = t.x === e.x, $ = g.lr && g.lr.length > 0;
      if (!w && !$)
        return !1;
    }
  }
  if ("exactStripFill" in s && n.exactStripFill && u) {
    const I = H(wt(u)), w = t[I] + c;
    s.exactStripFill = w >= u[I] && w < u[I] + c ? 1 : 0;
  }
  if ("compression" in s && n.compression) {
    const I = S === "l" ? "y" : "x";
    s.compression = ns(
      t,
      e,
      I
    );
  }
  if ("fill" in s && n.fill) {
    const I = S === "l" ? "y" : "x";
    s.fill = is(t, e, I);
  }
  if (s.cohesion = Math.max(0, s.cohesion), "sameStripBonus" in s && n.sameStripBonus && e.firstShape) {
    const I = wt(u);
    if (!x)
      s.sameStripBonus = 0;
    else if (I === "w" && g?.bt?.length) {
      const w = Bt(g.bt, "x"), $ = w.x + w.l;
      t.x + t.l > $ && (s.sameStripBonus = 0, s.cohesion = 0);
    } else if (I === "l" && g?.lr?.length) {
      const w = Bt(g.lr, "y"), $ = w.y + w.w;
      t.y + t.w > $ && (s.sameStripBonus = 0, s.cohesion = 0);
    } else
      s.sameStripBonus = 1;
  }
  if (n.aspectRatio) {
    const I = t.aspect, w = wt(u);
    I < 0.1 ? t[w] > t[H(w)] && (s.aspectRatio = 1) : s.aspectRatio = 0;
  }
  const m = { ...s };
  Object.keys(s).forEach((I) => {
    if (typeof s[I] == "number") {
      const w = s[I];
      w < 0 ? m[I] = w : m[I] = n[I] ? w * n[I] : 0;
    }
  }), t.score = m;
  let b = 0;
  for (const I of Object.values(t.score))
    typeof I == "number" && (b += I);
  if (t.score.total = b, t.score.total < 0 && (t.score.total = 0), isNaN(t.score.total)) throw new Error("score is not a number");
  return t.score.cutDirection = a, t.score.myStripParent = u, t.score.myStripDirection = f, t.score.myPhase = p, t.score.total > (t?.bestScore?.total || 0) && t.setBestScore(t), !0;
}
function os(t, e, n, i, r) {
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
    let h = 0, f = 0;
    !e.trimmed && e.hasTrim && (h = e.trim.w1, f = e.trim.l1), (t.x === h || t.y === f) && (s.edge = Cr(t, e));
  }
  if ("fill" in s && n.fill) {
    const h = e?.saw?.efficiencyOptions?.primaryCompression ? Ht(e?.saw?.efficiencyOptions?.primaryCompression) : "y";
    s.fill = is(
      t,
      e,
      h
    );
  }
  if ("compression" in s && n.compression) {
    const h = e?.saw?.efficiencyOptions?.primaryCompression ? Ht(e?.saw?.efficiencyOptions?.primaryCompression) : "y";
    s.compression = ns(
      t,
      e,
      h
    );
  }
  let o = 0, a = 0;
  const c = {
    lr: !1,
    rl: !1,
    bt: !1,
    tb: !1
  };
  for (const h of i) {
    const f = ss(
      t,
      h,
      e,
      {
        contact: !0,
        cohesion: !!n.cohesion,
        alignment: !!n.alignment,
        similarDimensions: !!n.similarDimensions
      }
    );
    f.type && (c[f.type] = !0, n.alignment && f.alignment && (a += f.alignment.positiveAlignments, o += f.alignment.possibleAlignments), n.cohesion && (s.cohesion += f.cohesion), n.similarDimensions && (s.similarDimensions += f?.similarDimensions ? f.similarDimensions : 0));
  }
  s.similarDimensions /= 4, o === 0 ? s.alignment = 0 : s.alignment = a / o, n.exactFit && (t.l === e.l || t.w === e.w) && (s.exactFit = 1), n.area && (s.area = xr(t, i, e));
  const l = { ...s };
  Object.keys(s).forEach((h) => {
    if (typeof s[h] == "number") {
      const f = s[h];
      l[h] = n[h] ? f * n[h] : 0;
    }
  }), t.score = l;
  let u = 0;
  for (const h of Object.values(t.score))
    typeof h == "number" && (u += h);
  if (t.score.total = u, isNaN(t.score.total))
    throw new Error("thisShape.score.total is not a number: " + JSON.stringify(t.score));
  t.score?.total > (t?.bestScore?.total || 0) && t.setBestScore(t, r);
}
function Et(t, e, n) {
  const i = this.shapeList.reduce(
    (G, v) => v.added ? G : ++G,
    0
  );
  let r, s, o;
  const a = e.getStock;
  if (!a) return !1;
  const c = t, l = nt(e) ? bt(c, a) : t.filter((G) => G.added);
  let u;
  l.length && (u = yr(l, a)), u && !u.getPriority(a) && (u = null);
  const h = l.length, f = Math.max(...l.map((G) => G.x + G.l)), d = Math.max(...l.map((G) => G.y + G.w));
  let p = 0, S = null, y = null, x;
  if (n || (n = t.find((G) => G.x === (e.x || 0) && G.y === (e.y || 0))), !n) return !1;
  const g = n.area;
  let m = null;
  const b = e.area, I = l.reduce((G, v) => G + v.area, 0);
  if (nt(e)) {
    if (e.cutType === "efficiency" ? (x = e.primaryCompression ?? "w", p = Ye(
      l,
      x,
      a.bladeWidth
    ), m = n?.bestScore?.total, p = p / e[x === "l" ? "l" : "w"]) : (x = e.cutPreference === "l" ? "x" : "y", p = Ye(
      l,
      x,
      a.bladeWidth
    ), p = p / e[x === "x" ? "l" : "w"]), e.cutType === "guillotine" && (r = t.filter((G) => G.added && Pn(G) === 1).length), o = I / b, vt() && N([() => E(o).to.be.lessThanOrEqual(1)]), e?.saw?.stockType === "roll") {
      const G = Bt(l, "x");
      s = G.x + G.l;
    }
  } else if (it(e)) {
    x = a.cutPreference === "l" ? "x" : "y", p = Ye(
      l,
      x,
      a.bladeWidth
    ), p = p / e[x === "x" ? "w" : "l"];
    const G = H(a.cutPreference), v = G === "l" ? "x" : "y";
    if (S = a[G] - (n[G] + n[v] + a.bladeWidth), y = n[G], e.cutPreference === "flex")
      throw new Error("cut preference is set to flex, it should be l or w at this point");
    o = I / b;
  } else
    o = I / b;
  const w = l.reduce((G, v) => G + (v?.bestScore?.total ?? 0), 0), $ = ct(t, e), P = ct(t, a), T = $.length + h, M = P.length + h, R = P.reduce(
    (G, v) => G + v.area,
    I
  ), O = l.map((G) => G.compress());
  return {
    type: this.tidyStrategy ? "tidy" : "algo",
    stockID: a.id,
    stock: a,
    container: e,
    firstShape: n,
    firstShapeRotation: n.rot,
    topPriorityShape: u ? u.id : null,
    cutPreference: a.cutPreference,
    cutType: a.saw.cutType,
    segmentCutDirection: it(e) ? e.cutDirection : null,
    // Result contains individual shapes (groups have already called placeMyShapes)
    shapes: O,
    score: {
      efficiency: o,
      totalShapeArea: I,
      totalShapesPlaced: h,
      totalShapeScore: w,
      firstRowLength: p,
      // firstShapeFill,
      firstShapeArea: g,
      firstShapeScore: m,
      containerAvailableShapes: T,
      stockAvailableShapes: M,
      stockAvailableShapeArea: R,
      totalUnplacedShapes: i,
      rollLength: s || null,
      maxX: f,
      maxY: d,
      stripShapes: r || null,
      stripSize: y || null,
      remainingStripSpace: S || null,
      uniqueStock: this.uniqueStock.length
    }
  };
}
function Rr(t, e, n = "sheet") {
  if (t && t?.length) {
    if (t.length === 1) return t[0];
    switch (t = t.filter((i) => i.score?.efficiency), n) {
      case "sheet":
        switch (e) {
          case "tidy":
            t.sort(Dr.bind(this));
            break;
          case "strip":
            t.sort(si.bind(this));
            break;
          case "guillotine":
          case "beam":
            t.sort(Lr.bind(this));
            break;
          default:
            t.sort(Or.bind(this));
            break;
        }
        break;
      case "linear":
        t.sort(Ar);
        break;
      case "roll":
        switch (e) {
          case "guillotine":
          case "strip":
            t.find((i) => i.score.containerAvailableShapes === 0) && (t = t.filter((i) => i.score.containerAvailableShapes === 0)), t.sort(si);
            break;
          case "efficiency": {
            t.sort(Mr);
            break;
          }
        }
        break;
    }
    return t[0];
  }
}
function Ar(t, e) {
  return e.score.efficiency - t.score.efficiency;
}
function Ae(t, e) {
  const {
    totalShapesPlaced: n = 0,
    totalShapeArea: i = 0,
    stockAvailableShapes: r = 1,
    stockAvailableShapeArea: s = 0,
    containerAvailableShapes: o = 0,
    efficiency: a = 0,
    maxX: c = 0,
    maxY: l = 0
  } = t.score, u = r || 1, h = s > 0 ? i / s : n / u, f = e === "stock" ? 0.65 : 0.35, d = 1 - f;
  let p = h * f + a * d;
  const S = e === "stock" && o === 0 || n === r;
  if (S && (p += 0.15), e === "stock" && S && t.stock) {
    const y = t.cutPreference, x = t.stock, g = y === "l" ? l : c, m = y === "l" ? x.w : x.l;
    if (m > 0 && g > 0) {
      const b = 1 - g / m;
      p += b * 0.1;
    }
  }
  return p;
}
function si(t, e) {
  if (N([() => E(t.score).to.exist, () => E(e.score).to.exist]), !t.score || !e.score) return 0;
  const n = t.score.totalShapesPlaced === t.score.stockAvailableShapes, i = e.score.totalShapesPlaced === e.score.stockAvailableShapes, r = t.score.maxY || 1, s = e.score.maxY || 1, o = t.score.totalShapesPlaced || 1, a = e.score.totalShapesPlaced || 1, c = r / o, l = s / a;
  if (n && !i) {
    const f = l < c * 0.5, d = s < r * 0.5;
    return f && d ? 1 : -1;
  }
  if (i && !n) {
    const f = c < l * 0.5, d = r < s * 0.5;
    return f && d ? -1 : 1;
  }
  const u = Ae(t, "strip"), h = Ae(e, "strip");
  return u > h ? -1 : h > u ? 1 : 0;
}
function Dr(t, e) {
  return t.score[this.config.successMetric] > e.score[this.config.successMetric] ? -1 : t.score[this.config.successMetric] < e.score[this.config.successMetric] ? 1 : t.score.firstShapeFill > e.score.firstShapeFill ? -1 : t.score.firstShapeFill < e.score.firstShapeFill ? 1 : t.score.firstRowLength > e.score.firstRowLength ? -1 : t.score.firstRowLength < e.score.firstRowLength ? 1 : t.score.totalShapeScore > e.score.totalShapeScore ? -1 : t.score.totalShapeScore < e.score.totalShapeScore ? 1 : 0;
}
function rs(t, e) {
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
function Mr(t, e) {
  return t.score.efficiency > e.score.efficiency ? -1 : t.score.efficiency < e.score.efficiency ? 1 : t.type !== "evo" && e.type === "evo" ? -1 : t.type === "evo" && e.type !== "evo" ? 1 : t.shapes?.length < e.shapes?.length ? -1 : t.shapes?.length > e.shapes?.length ? 1 : t.score.totalShapeScore > e.score.totalShapeScore ? -1 : t.score.totalShapeScore < e.score.totalShapeScore ? 1 : Tt.ID(t.stock, e.stock);
}
function Lr(t, e) {
  const n = Ae(t, "stock"), i = Ae(e, "stock");
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
  const r = rs(t, e);
  return r !== 0 ? r : t.score.firstShapeArea > e.score.firstShapeArea ? -1 : t.score.firstShapeArea < e.score.firstShapeArea ? 1 : Tt.ID(t.stock, e.stock);
}
function Or(t, e) {
  const n = t.score?.totalUnplacedShapes, i = e.score?.totalUnplacedShapes;
  if (t.stock.id !== e.stock.id && (n === 0 || i === 0) && !(n === 0 && i === 0)) {
    const s = n === 0 ? t : e, o = n === 0 ? e : t, a = s.stock, c = o.stock, l = a.area - s.score.totalShapeArea, u = c.area;
    return s.score.totalShapeArea - o.score.totalShapeArea < u && u < l ? c.id === t.stock.id ? -1 : 1 : c.id === t.stock.id ? 1 : -1;
  }
  if (t.score[this.config.successMetric] > e.score[this.config.successMetric])
    return -1;
  if (t.score[this.config.successMetric] < e.score[this.config.successMetric])
    return 1;
  const r = rs(t, e);
  return r !== 0 ? r : t.type !== "evo" && e.type === "evo" ? -1 : t.type === "evo" && e.type !== "evo" ? 1 : t.score.firstShapeArea > e.score.firstShapeArea ? -1 : t.score.firstShapeArea < e.score.firstShapeArea ? 1 : t.score.totalShapeScore > e.score.totalShapeScore ? -1 : t.score.totalShapeScore < e.score.totalShapeScore ? 1 : Tt.ID(t.stock, e.stock);
}
function as(t) {
  if (!t) return t;
  const e = { ...t };
  return t.stock && (e.stock = t.stock), t.resultKey !== "bestPartialResult" && t.firstShape && "toData" in t.firstShape && (e.firstShape = t.firstShape.toData(Zt.Compressed)), t.shapes?.length && (e.shapes = t.shapes.map((n) => n && "toData" in n ? n.toData(Zt.Compressed) : n)), "stripShapes" in t && t.stripShapes?.length && (e.stripShapes = t.stripShapes.map((n) => n && "toData" in n ? n.toData(Zt.Compressed) : n)), "root" in t && t.root && "toData" in t.root && (e.root = t.root.toData(Zt.Compressed)), "container" in t && t.container && "toData" in t.container && (nt(t.container) ? e.container = t.container : e.container = t.container.toData(Zt.Compressed)), e;
}
function Tn(t, e) {
  return t?.stock ? nt(t.stock) ? t.stock : e.find((n) => n.autoId === t.stock.autoId) || null : null;
}
async function gt(t, e = null) {
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
  if (vt()) {
    const o = t.score.efficiency, a = B(r) ? `${r.id}: [${r?.shapes?.map((l) => l.parentId).join(", ")}]` : r?.id, c = [
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
      ...t.container && it(t.container) ? [{
        property: "Segment ID",
        value: t.container.id
      }] : [],
      ...t.container && it(t.container) ? [{
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
    k("results", `Recording ${n}`, null, c);
  }
  let s = t;
  if (i && (s = Rr.call(this, [t, i], e || t.stock.cutType, t.stock?.saw?.stockType), s || (k("results", "WARNING: findWinner returned undefined, using current result as winner"), s = t), k("results", `${s.type} winner for stock ${s.stock.id} eff. ${s.score.efficiency}, firstShape [${r?.id || "N/A"}], rot ${r?.rot || "N/A"}, batch ${s?.stripShapeBatch ?? "N/A"}`)), !i || !s?.processed) {
    t.processed = !0;
    const o = as(s);
    this[n] = o;
  }
  Gr(s.shapes, s.stock);
}
function Gr(t, e) {
  if (!t?.length) return;
  const n = t.filter((i) => B(i) && i.type !== "user");
  N([
    () => E(n.every((i) => B(i))).toBe(!0),
    () => E(n.every((i) => i.type !== "user")).toBe(!0)
  ], "expandTemporaryGroups: All filtered groups should be temporary (non-user) groups");
  for (const i of n) {
    const r = i.shapes || [], s = i.type;
    if (i.added)
      try {
        i.placeMyShapes(e), N([
          () => E(r.every((o) => o.group?.addedAsGroup === i)).toBe(!0)
        ], `expandTemporaryGroups: All children of ${s} group should have addedAsGroup reference`);
      } catch (o) {
        k("errors", `Error placing shapes for temporary group ${i.id} during expansion: ${o.message}`);
      }
    i.destroy(), N([
      () => E(r.every((o) => o.group?.reference === null || o.group?.reference === void 0)).toBe(!0),
      () => E(r.every((o) => o.group?.inGroup === !1)).toBe(!0)
    ], `expandTemporaryGroups: Children of ${s} group should be released after destroy`);
  }
}
function ae({
  bestResult: t,
  shapeList: e,
  relevantStock: n = [],
  stockList: i = [],
  resetShapes: r = null
}) {
  k("results", `updating shapes from ${t.resultKey} / ${t.type} - stock ${t.stock.id}, FS: ${t.firstShape.id}`), n.length && n.filter((l) => l.autoId !== t?.stock?.autoId).forEach((l) => {
    const u = e.filter((h) => h.added && h?.stock?.autoId === l.autoId);
    u.length && (r ? r(u, !1, !0, !1) : u.forEach((h) => {
      h.added = !1, h.reset();
    }));
  });
  const s = [];
  let o = i.length ? i.find((l) => l.autoId === t.stock?.autoId) : null;
  if (o && t.stock && t.stock.used && (o.used = !0), !o && t.stock && (o = t.stock, o.saw && !ee(o.saw))) {
    k("results", `⚠️  Found serialized saw in bestResult.stock ${o.autoId}, attempting to restore from stockList`);
    const l = i.find((u) => u.autoId === o.autoId || u.parentId === o.parentId && ee(u.saw));
    l && ee(l.saw) ? (k("results", `✅ Restored live saw instance from stock ${l.autoId}`), o.saw = l.saw) : k("results", `❌ Could not restore live saw instance for stock ${o.autoId}`);
  }
  o || (o = t.stock);
  for (const l of t.shapes)
    if (Ve(l) || Xs(l)) {
      const u = e.find((h) => h.autoId === l.autoId);
      if (!u) {
        vt() && (console.warn(`[updateShapeListFromBestResult] Shape ${l.autoId || l.id} from result not found in shapeList!`), console.warn(`  Available autoIds in shapeList: ${e.slice(0, 5).map((h) => h.autoId).join(", ")}...`));
        continue;
      }
      if (vt() && (Ie(u) || B(u) || console.warn(`Shape ${l.autoId} in shapeList is not a live instance!`)), rt(u)) {
        const { ...h } = l;
        u.update({ ...h, validationMode: "none" });
      } else
        u.update({ ...l, validationMode: "none" });
      Ie(u) && l.group && l.group.inGroup !== void 0 && (u.group.inGroup = l.group.inGroup), u.stock = o, s.push(u);
    }
  N([
    () => E(t.shapes.every((l) => {
      if (!Ve(l)) return !0;
      const u = e.find((h) => h.autoId === l.autoId);
      return !(!u || !u.added || u.x !== l.x || u.y !== l.y || u.l !== l.l || u.w !== l.w);
    }), "best shape not found, not added, or not correctly updated").to.be.true
  ]), vt() && (s.every((u) => e.find((h) => h === u)) || console.warn("Some updated shapes are not exact references from shapeList - possible instance copying!")), $i({
    shapes: s
  }, "updateShapeListFromBestResult");
  let a = [];
  const c = t.shapes.filter((l) => qs(l));
  return k("results", `Best result contains ${t.shapes.length} total items`), k("results", `Found ${c.length} serialized groups to recreate:`), c.forEach((l) => {
    k("results", `  - Group ${l.id}: type=${l.type}, shapes=${l.shapes?.length || 0}, added=${l.added}, x=${l.x}, y=${l.y}`);
  }), c.length > 0 && (k("results", `Recreating ${c.length} groups from bestResult`), a = Ns(c, e, o), k("results", `Successfully recreated ${a.length} groups:`), a.forEach((l) => {
    k("results", `  - Group ${l.id}: type=${l.type}, shapes=${l.shapes?.length || 0}, added=${l.added}, x=${l.x}, y=${l.y}`);
  }), a.forEach((l) => {
    l.shapes && Array.isArray(l.shapes) && (l.shapes.forEach((h) => {
      z(h) && (h.group.reference = l, h.group.inGroup = !0, l.added && (h.group.addedAsGroup = l));
    }), N([
      () => E(l.shapes.every((h) => !z(h) || h.group?.reference === l)).toBe(!0)
    ], `updateShapeListFromBestResult: All children of group ${l.id} (type=${l.type}) should have correct reference`), l.added && N([
      () => E(l.shapes.every((h) => !z(h) || h.group?.addedAsGroup === l)).toBe(!0),
      () => E(l.shapes.every((h) => !z(h) || typeof h.group?.addedAsGroup != "string")).toBe(!0)
    ], `updateShapeListFromBestResult: addedAsGroup should be Group reference for group ${l.id} (type=${l.type})`));
    const u = l.added && typeof l.placeMyShapes == "function" && l.type !== "position";
    if (l.added && l.type === "position" && N([
      () => E(u).toBe(!1)
    ], `updateShapeListFromBestResult: Position group ${l.id} should NOT call placeMyShapes`), u)
      try {
        l.placeMyShapes(o);
      } catch (h) {
        throw console.error("[ERROR] placeMyShapes failed for group " + l.id + ":", h.message), console.error(`  Group details: type=${l.type}, x=${l.x}, y=${l.y}, rot=${l.rot}`), console.error("  Child shapes:"), l.shapes?.forEach((f) => {
          console.error(`    ${f.id}: added=${f.added}, x=${f.x}, y=${f.y}, rot=${f.rot}, l=${f.l}, w=${f.w}`);
        }), h;
      }
    vt() && (l.shapes?.forEach((h) => {
      const f = e.find((d) => d.autoId === h.autoId);
      f !== h ? (console.error(`[ERROR] Group ${l.id} child shape ${h.id} is NOT the same instance as in shapeList!`), console.error(`  Group shape: added=${h.added}, x=${h.x}, y=${h.y}`), console.error(`  shapeList shape: added=${f?.added}, x=${f?.x}, y=${f?.y}`)) : h.group?.reference !== l && (console.error(`[ERROR] Group ${l.id} child shape ${h.id} has incorrect group.reference!`), console.error(`  Expected: ${l.id}, Got: ${h.group?.reference?.id || "null"}`));
    }), k("results", `Successfully recreated, placed, and linked ${a.length} groups`));
  })), { updatedShapes: s, groups: a };
}
async function pe(t, e, n, i = null) {
  if (N([
    () => E(nt(e)).to.be.true,
    () => {
      if (n.length) return E(z(n[0]) || rt(n[0])).to.be.true;
    }
  ]), N([() => E(pt(n), "duplicates found").to.be.false]), Ui(), i || (i = jr.call(this, e, n)), !i) throw new Error("no root segment created");
  if (this.config.sample.enable) {
    if (await Br.call(
      this,
      t,
      e,
      i
    ), t.secondRun || !this.bestResult) return;
    ae({
      bestResult: this.bestResult,
      shapeList: this.shapeList,
      stockList: this.stockList,
      resetShapes: this.resetShapes?.bind(this)
    }), await oi.call(this, {
      options: t,
      shapes: n,
      stock: e
      // root
    }), Nr.call(this, n, i);
  }
  if (this.config.guillotine.stripShapes.allocation && n.length > 1) {
    if (await Fr.call(this, t, e, n, i), !this.bestResult) return;
    ae({
      bestResult: this.bestResult,
      shapeList: this.shapeList,
      stockList: this.stockList,
      resetShapes: this.resetShapes?.bind(this)
    }), await oi.call(this, {
      options: t,
      shapes: n,
      stock: e,
      root: i
    });
  }
}
async function oi({
  options: t,
  shapes: e,
  stock: n,
  root: i
}) {
  const r = bt(this.shapeList, n);
  Zr.call(
    this,
    Tn(this.bestResult, this.stockList),
    r
  ) && await Xr.call(
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
async function Fr(t, e, n, i) {
  if (!this.config.guillotine.stripShapes.allocation || (N([
    () => E(nt(e)).to.be.true,
    () => E(n.length ? z(n[0]) : !0).to.be.true,
    () => E(it(i)).to.be.true
  ]), e?.saw?.stockType === "roll")) return !1;
  const r = ia.call(this, i, this.uniqueStock, this.stockList);
  if (r === !1) return !1;
  for (let s = 0; s < r; s++)
    this.resetShapes(n), i.shapes = n, N([
      () => E(pt(i.shapes, `root segment batch ${s} stock ${e.id}`), "duplicates found in root segment").to.be.false,
      () => E(n.length).to.equal(i.shapes.length),
      () => E(n.some((o) => $e(o) || ht(o)), "groups exist in new strip shape batch calculation").to.be.false
    ]), k("guillotine", `running strip shape batch ${s} for stock ${e.id}`), await vn.call(
      this,
      t,
      e,
      i,
      s
    ), N([() => E(pt(i.shapes), "duplicates found").to.be.false]);
  return !0;
}
async function Br(t, e, n) {
  k("guillotine", `running basic first shape sample for stock ${e.id}`), N([
    () => E(nt(e)).to.be.true,
    () => E(it(n)).to.be.true,
    () => E(n?.shapes?.length).to.be.greaterThan(0)
  ]), await vn.call(this, t, e, n);
}
async function vn(t, e, n, i = null, r = null, s = null) {
  if (N([
    () => E(nt(e)).to.be.true,
    () => E(it(n)).to.be.true,
    () => {
      if (r) return E(z(r)).to.be.true;
      if (i !== null) return E(i).to.be.a("number");
      if (s !== null) return E([0, 1].includes(s)).to.be.true;
    }
  ]), i === null)
    await ie.call(
      this,
      t,
      e,
      n,
      r,
      s,
      null
    );
  else if (await ie.call(
    this,
    t,
    e,
    n,
    void 0,
    void 0,
    i
  ) === !1) return !1;
}
async function Xr(t, e, n, i, r) {
  N([
    () => E(nt(i)).to.be.true,
    () => {
      if (n.length) return E(z(n[0]) || rt(n[0])).to.be.true;
      if (e.length) return E(z(e[0] || rt(n[0]))).to.be.true;
    }
  ]), k("guillotine", `running refinement for stock ${i.id}`);
  try {
    await qr.call(
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
async function qr(t, e, n, i, r) {
  if (N([
    () => E(nt(i)).to.be.true,
    () => {
      if (n.length) return E(z(n[0]) || rt(n[0])).to.be.true;
      if (e.length) return E(z(e[0]) || rt(n[0])).to.be.true;
    }
  ]), !this.config.guillotine.secondPass || !this.saw?.guillotineOptions?.headCuts) return !1;
  k("guillotine", `running second pass for stock ${i.id}`), await _r.call(this, i, n, e, r);
  const s = bt(n, i), o = Et.call(
    this,
    this.shapeList,
    i
  );
  o && i.id === Tn(this.bestResult, this.stockList)?.id && s.length - e.length > 0 && (k("guillotine", `runSecondPass added ${s.length - e.length} shape(s) to stock ${i.id}, new total ${s.length}`), o.secondPass = !0, await gt.call(this, o));
}
function Nr(t, e) {
  const n = [];
  if (this.groupList && this.groupList.length > 0)
    for (const s of this.groupList)
      s.added ? n.push(s) : s.reset();
  for (let s = t.length; s--; ) {
    const o = t[s];
    B(o) && t.splice(s, 1), o.reset();
  }
  this.groupList && (this.groupList.length = 0, this.groupList.push(...n)), this.counters.placement = 0, this.bestPartialResult = null, Ui(), e.reset(t);
  const i = e.shapes.filter((s) => z(s)), r = e.shapes.filter((s) => B(s));
  k("reset", "[RESET] RESET ROOT SEGMENT BETWEEN CALCULATIONS", null, [
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
async function Yr(t, e, n, i) {
  N([
    () => E(nt(e)).to.be.true,
    () => E(it(n)).to.be.true
  ]);
  const r = Rt(n.shapes, !1, !0), s = this.stockList.findIndex((u) => u.id === e.id);
  let o = null;
  s > 0 && (o = this.stockList[s - 1]);
  const a = H(e.cutPreference);
  let c = [], l = [];
  if (n.l === e.l && n.w === e.w ? s > 0 && (c = bt(this.shapeList, o).filter((u) => sn(u))) : l = bt(this.shapeList, e).filter((u) => sn(u)), c?.length || l?.length) {
    const u = a === "l" ? "x" : "y";
    c.sort((d, p) => d[u] - p[u]), l.sort((d, p) => d[u] - p[u]);
    const h = c.length ? c[c.length - 1] : l[l.length - 1], f = r.filter((d) => h[a] === d.w || h[a] === d.l);
    if (f?.length) {
      for (let d = 0; d < f.length; d++) {
        const p = f[d];
        if (d > 1 && f[d - 1].isIdentical(f[d]))
          continue;
        At(p, 0, e);
        let S;
        h[a] === p[a] ? S = 0 : S = 1;
        const y = await ls.call(
          this,
          t,
          p,
          n,
          S
        );
        if (y?.length)
          for (let x = y.length; x--; ) {
            const g = y[x];
            await gt.call(this, g, "strip");
          }
        this.resetShapes(n.shapes);
      }
      return !(!i || i?.length);
    }
  }
  return !1;
}
async function ie(t, e, n, i = null, r = null, s = null) {
  if (n.type === "root" && !t?.secondPass && (e.used = !1, this.counters.placement = 0), !n.shapes?.length) return;
  N([
    () => E(nt(e)).to.be.true,
    () => E(it(n)).to.be.true,
    () => E(i ? z(i) : !0).to.be.true,
    () => E(i ? [0, 1].includes(r) : !0).to.be.true,
    () => E(s !== null ? typeof s == "number" : !0).to.be.true,
    () => E(s !== null ? i === null : !0).to.be.true,
    () => E(r !== null ? [0, 1].includes(r) : !0).to.be.true,
    () => E(n.shapes.every((f) => !$e(f), "no segment groups should exist at this point")).to.be.true
  ]);
  const o = typeof s == "number";
  let a = !0;
  if (e.saw.guillotineOptions?.strategy === "time" && (a = !await Yr.call(
    this,
    t,
    e,
    n
  )), a)
    if (ne(n))
      if (o) {
        let f = na(n.shapes, s, e);
        if (f.sort((x, g) => x.guillotineState.getStripShapeBatchData(s).order - g.guillotineState.getStripShapeBatchData(s).order), k("guillotine", () => `strip shape candidates ${f.map((x) => x.id).join("|")}`), N([
          () => E(f.find((x) => x.guillotineState.getStripShapeBatchData(s).stockId !== n.getStock.autoId), "found strip shapes in allocatedStripShape from another stock").to.be.undefined,
          () => E(pt(f), "duplicate shapes found in stripShapeCandidates").to.false,
          () => E(f.find((x) => B(x) && !ht(x)), "found groups in allocatedStripShape").to.be.undefined,
          () => E(n.shapes.filter((x) => x.added).length === 0, `added shapes found in segment ${n.id}`).to.be.true
        ]), !f.length)
          return ie.call(
            this,
            t,
            e,
            n
          );
        const d = H(e.cutPreference);
        f = f.filter((x) => {
          if (B(x)) return !0;
          const g = ai(x, s, e, !1);
          return Xt(x, g, e) ? (ai(x, s, e, !0), Ys(x, g, e) ? (N([
            () => E(x.rot, `candidates ${x.id} rotation (${x.rot}) incorrect for batch (${g})`).equal(g)
          ]), !0) : !1) : (k("guillotine", () => `cannot rotate strip shape ${x.id}, ${x.l}x${x.w} to ${g} on stock ${e.id}`, [x.getStripShapeBatchData(s)]), jt(x, e, g), !1);
        });
        const p = e.saw.guillotineOptions, S = p?.limitStripDimensions !== !1 ? Ci(
          n.shapes.filter((x) => !x.added && z(x)),
          d,
          n[d]
        ) : null;
        if (p?.limitStripDimensions === !1 && f.length > 1) {
          const x = n.shapes.filter((g) => ht(g) && g.shapes.some((m) => f.includes(m)));
          x.length > 0 ? (k("guillotine", () => `Reusing ${x.length} existing strip groups`), f = x) : f = sa.call(this, s, d, e, n, f);
        }
        if (!f.length)
          return ie.call(
            this,
            t,
            e,
            n
          );
        f.sort(function(g, m) {
          if (S !== null) {
            const w = g[d] <= S ? 0 : 1, $ = m[d] <= S ? 0 : 1;
            if (w !== $) return w - $;
          }
          const b = g.guillotineState?.getStripShapeBatchData?.(s)?.order, I = m.guillotineState?.getStripShapeBatchData?.(s)?.order;
          return b != null && I != null && b !== I ? b - I : m[d] !== g[d] ? m[d] - g[d] : m[e.cutPreference] !== g[e.cutPreference] ? m[e.cutPreference] - g[e.cutPreference] : g.autoId.localeCompare(m.autoId, void 0, { numeric: !0 });
        }), i = f[0], k("guillotine", () => `firstShape for segment ${n.id} is ${i.id}`);
        const y = i.guillotineState.getStripShapeBatchData(s);
        if (!y) throw new Error("no fs batch found");
        N([() => E(y.stockId).equal(n.getStock.autoId)]), i.firstShape.isFirstShape = !0, r = y.rot, N([() => E([0, 1].includes(y.rot)).to.be.true]), await an.call(this, {
          options: t,
          fs: i,
          fsRotation: r,
          segment: n,
          stripShapeBatch: s,
          stripShapeCandidates: f
        });
      } else
        i && r !== null ? await an.call(this, {
          options: t,
          fs: i,
          fsRotation: r,
          segment: n,
          stripShapeBatch: s
        }) : await ze.call(
          this,
          t,
          n
        );
    else
      await ze.call(
        this,
        t,
        n
      );
  if (!this.bestPartialResult)
    if (s !== null) {
      if (await ze.call(
        this,
        t,
        n,
        !0
      ), !this.bestPartialResult) return;
    } else return;
  const l = this.bestPartialResult.firstShape;
  ae({
    bestResult: this.bestPartialResult,
    shapeList: this.shapeList,
    stockList: this.stockList,
    resetShapes: this.resetShapes?.bind(this)
  }), pr(n, !0), Pi(l) && n.shapes.push(l), n.shapes = Ti(n.shapes, l), N([
    () => E(n.shapes.filter((f) => B(f)).every((f) => ht(f) || rt(f)), "non-strip/user groups found in segment after removeGroupsFromSegment").to.be.true,
    () => Ii(n.shapes, "segmentCalculations after removeGroupsFromSegment"),
    () => E(n.shapes.every((f) => !$e(f) || rt(f)), "found non-user groups in segment after removal").to.be.true
  ]);
  let u = null;
  if (this.config.guillotine.strips.duplicateStrips && s !== null && this.bestPartialResult?.container) {
    const f = this.bestPartialResult.container, d = this.shapeList.filter((p) => p.added && p.stock?.id === e.id && A.greaterThanOrEqualTo(p.x, f.x) && A.lessThanOrEqualTo(p.x + p.l, f.x + f.l) && A.greaterThanOrEqualTo(p.y, f.y) && A.lessThanOrEqualTo(p.y + p.w, f.y + f.w));
    d.length && (u = {
      segment: f,
      firstShape: l,
      shapes: d
    });
  }
  const h = ct(this.shapeList);
  if (this.bestPartialResult = null, h.length || this.config.secondRun.enabled) {
    const f = Ur.call(
      this,
      n,
      l
    );
    if (f?.length) {
      k("cuts", () => `Created ${f.length} new segments, unplaced shapes: ${h.length}`);
      for (const d of f) {
        if (this.bestPartialResult = null, !d.shapes.length) {
          d.offcut = !0;
          continue;
        }
        const p = o && !ne(d);
        if (d.shapes = d.shapes.filter((S) => !S.added && (!p || !S.guillotineState.isInStripShapeBatch(s))), u && ne(d) && !B(u.firstShape)) {
          const S = Vr.call(this, u, d, e, s);
          if (S) {
            k("guillotine", () => `Duplicated strip in segment ${d.id}`), u = S;
            continue;
          }
        }
        await ie.call(
          this,
          t,
          e,
          d,
          null,
          null,
          s
        );
      }
    }
  }
  if (n.type === "root") {
    const f = /* @__PURE__ */ new Map();
    for (const y of this.shapeList) f.set(y.autoId, y);
    n.shapes = n.shapes.map((y) => B(y) ? y : f.get(y.autoId) || y);
    const d = Et.call(
      this,
      this.shapeList,
      e,
      l
    );
    if (!d) throw new Error("Unable to score stock");
    if (d.stripShapeBatch = s, d.root = n, !d.score.efficiency) return;
    const p = this.shapeList.filter((y) => !y.group?.inGroup && !B(y) && y.stock?.id === e.id), S = vi(p);
    S.length > 0 && k("errors", `Found ${S.length} overlapping shapes on stock ${e.id}`), s !== null ? d.type = "allocated strips" : d.type = "basic", await gt.call(this, d);
  }
}
async function an({
  options: t = null,
  fs: e = null,
  fsRotation: n = null,
  segment: i = null,
  stripShapeBatch: r = null,
  stripShapeCandidates: s = []
}) {
  if (!e || n === null || !i)
    throw new Error(`firstShapeSegmentCalculations requires firstShape, firstShapeRotation & segment:${e} ${n} ${i}`);
  const o = async (f, d = !0) => {
    let p;
    d ? (e.reset(), N([() => E(i.shapes.filter((S) => S.autoId === e.autoId).length, "too many first shapes in segmentShapes").to.equal(1)]), p = Et.call(
      this,
      i.shapes,
      f,
      e
    )) : p = Et.call(
      this,
      i.shapes,
      i,
      e
    ), p.score.totalShapesPlaced && await gt.call(this, p, "strip");
  };
  if (i.shapes = Wr.call(this, i, e, r), Kr.call(
    this,
    e,
    i,
    i.getStock,
    n
  ) === !1)
    return !1;
  e.placementOrder = this.counters.placement++, N([
    () => E(it(i)).to.be.true,
    () => E(r !== null ? typeof r == "number" : !0).to.be.true,
    () => E(n !== null ? [0, 1].includes(n) : !0).to.be.true
  ]), e && N([
    //Accept all group types (segment, user, strip) as well as shapes
    () => E(z(e) || B(e), `first shape ${e.id} is not a shape or group`).to.be.true,
    () => E(e.added, `first shape ${e.id} added too soon`).to.be.true,
    //Only check rotation for shapes, not groups (groups cannot be rotated)
    () => E(B(e) || e.rot === n, `first shape ${e.id} rotation (${e.rot}) incorrect for (${n})`).to.be.true,
    () => E(A.lessThanOrEqualTo(e.l, i.l), `first shape ${e.id} longer than segment ${e.l} > ${i.l}`).to.be.true,
    () => E(A.lessThanOrEqualTo(e.w, i.w), `first shape ${e.id} wider than segment ${e.w} > ${i.w}`).to.be.true
  ]);
  const c = i.getStock, { success: l, firstShapeSegment: u, isHeadCut: h } = await zr.call(this, {
    fs: e,
    segment: i,
    stock: c,
    stripShapeBatch: r,
    stripShapeCandidates: s,
    options: t
  });
  return !(l === !1 && (await o(u), !h));
}
function Wr(t, e, n) {
  if (pt(t.shapes)) {
    const o = /* @__PURE__ */ new Set();
    t.shapes = t.shapes.filter((a) => o.has(a.autoId) ? !1 : (o.add(a.autoId), !0));
  }
  const r = Oe(t), s = t.shapes.filter((o) => o.willItFit(t, null, r) ? !(t.type !== "root" && typeof n == "number" && o.getStripShapeBatchData(n) !== !1 && e.autoId !== o.autoId) : (k("cuts", () => `  Excluding ${o.autoId}: doesn't fit in segment`), !1));
  return k("cuts", () => `  Result: ${s.length} shapes selected for segment`), this.resetShapes(s, {
    keepScores: !1,
    removeGroups: !1,
    keepGuillotineData: !0,
    keepFirstShapeSampleRotations: !0
  }), s;
}
async function zr({
  fs: t,
  segment: e,
  stock: n,
  stripShapeBatch: i,
  stripShapeCandidates: r,
  forceNoHeadCut: s,
  options: o
}) {
  k("guillotine", () => `[createFirstShapeSegmentsPlaceShapesAndScore] Starting for segment ${e.id}, first shape ${t.id}`);
  const { offcuts: a, firstShapeSegment: c, isHeadCut: l, success: u } = await Hr.call(this, { fs: t, segment: e, stock: n, stripShapeBatch: i, stripShapeCandidates: r, forceNoHeadCut: s, options: o });
  if (N([() => E(a.length, "too many offcuts generated").to.be.lessThanOrEqual(2)]), u === !1)
    return { success: !1, firstShapeSegment: c, isHeadCut: l };
  if (o.secondPass) {
    const { cuts: g } = Sn.call(
      this,
      {
        container: c,
        shapes: [t],
        forceNoHeadCut: s
      }
    ), { allShapesCut: m } = ji([t], g, c);
    if (!m) return { success: !1, firstShapeSegment: c, isHeadCut: l };
  }
  if (!a.length) {
    const g = Et.call(
      this,
      e.shapes,
      c,
      t
    );
    return await gt.call(this, g, "strip"), { success: !0, firstShapeSegment: c, isHeadCut: l };
  }
  const h = c.cutDirection, f = a.find((g) => A.equalTo(g[h], c[h]));
  if (!f || f.l <= 0 || f.w <= 0) {
    k("cuts", () => `No next segment. Remaining shapes: ${e.shapes.length}`), z(t) && !e.shapes.find((m) => m.autoId === t.autoId) && e.shapes.unshift(t), e.shapes.length > 1 && await hn.call(
      this,
      e.shapes,
      t,
      c || e
    );
    const g = Et.call(
      this,
      e.shapes,
      c,
      t
    );
    return await gt.call(this, g, "strip"), { success: !0, firstShapeSegment: c, isHeadCut: l };
  }
  const d = c.cutDirection;
  (e.type === "root" || e.type === "firstShape") && r.length === 1 && (f[d] = e[d], c[d] = e[d]), N([() => E(e.shapes.filter((g) => g.autoId === t.autoId).length, "too many first shapes in segmentShapes").to.equal(1)]), await hn.call(
    this,
    e.shapes,
    t,
    c || e
  );
  const p = Et.call(
    this,
    e.shapes,
    c,
    t
  );
  await gt.call(this, p, "strip");
  const S = e.type === "root" ? e.shapes.filter((g) => ht(g)) : [];
  this.resetShapes(e.shapes, {
    keepScores: !1,
    removeGroups: !0,
    keepGuillotineData: !1,
    keepFirstShapeSampleRotations: !0
  });
  const y = new Set(e.shapes.map((g) => g.autoId)), x = S.filter((g) => !y.has(g.autoId));
  return e.shapes.push(...x), { success: !0, firstShapeSegment: c, isHeadCut: l };
}
async function Hr({ fs: t, segment: e, stock: n, segmentShapes: i, stripShapeBatch: r, forceNoHeadCut: s, options: o }) {
  let a = !0, c, l = !1;
  !s && Qi.call(this, e) && (l = Ji.call(this, n.saw, t, e), e.hasHeadCut = l);
  try {
    c = ta.call(
      this,
      t,
      l,
      e,
      n,
      i
    );
  } catch (f) {
    throw k("errors", () => `firstShapeSegment error, fs: ${t.autoId}, 'ssg: ${r}: ${f.message}`), new Error(`issue with createFirstShapeSegment ${f.message}`);
  }
  if (N([() => E(c[c.cutDirection]).to.equal(t[c.cutDirection])]), o?.secondPass) {
    const f = this.shapeList.filter((d) => d.added && d.stock.autoId === n.autoId && d.autoId !== t.autoId);
    if (Ce(c, f, n))
      return a = !1, { firstShapeSegment: c, offcuts: [], success: a };
  }
  const u = e.cutDirection, { offcuts: h } = Sn.call(
    this,
    {
      container: e,
      shapes: e.shapes,
      forceNoHeadCut: s
    }
  );
  return e.cutDirection = u, { firstShapeSegment: c, offcuts: h, isHeadCut: l, success: a };
}
async function ze(t, e, n = !1) {
  if (!this.config.sample.enable && n === !1) return !1;
  N([
    () => E(e.shapes.every((a) => z(a) || rt(a)), "segment shapes contains groups").to.be.true
  ]);
  let i = [];
  if (e.shapes.length > 1) {
    const a = H(e.cutDirection), c = e[a], l = e.parentSegmentGroupShapes || /* @__PURE__ */ new Set(), u = e.shapes.filter((p) => !l.has(p.id)), h = Ws(u, c * 0.05), f = h.reduce((p, S) => p + S.area, 0), d = e.getStock.area;
    if (this.config?.groups?.guillotine?.firstShape && h.length >= 2 && f >= d * 0.8) {
      i = Ei({
        shapes: h,
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
      }), k("groups", () => `[FIRST SHAPE GROUPS] created ${i.map((S) => S.id).join()} for segment ${e.id} `);
    }
  }
  let r = null;
  t.secondPass && (r = bt(
    this.shapeList,
    e.getStock
  ));
  const s = [...e.shapes], o = cs.call(
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
    if (k("guillotine", () => `[FIRST SHAPE] attempting first shape candidate ${c.id} for segment ${e.id}`), a > 1 && o[a - 1].isSameSize(o[a])) {
      c.firstShape.sampleRotations = [];
      continue;
    }
    this.resetShapes(s, {
      removeGroups: !1,
      keepFirstShapeSampleRotations: !0
    }), c.firstShape.isFirstShape = !0, Pi(c) && (e.shapes.find((h) => h.autoId === c.autoId) || e.shapes.push(c), e.shapes = Ti(e.shapes, c)), N([
      () => E(pt(e.shapes, `segment ${e.id} before running fs tests for ${c.id}`), "duplicates found in segment").to.be.false,
      () => E(pt(e.shapes), "duplicates found").to.be.false
    ]), await ls.call(
      this,
      t,
      c,
      e
    ), N([() => E(pt(e.shapes), "duplicates found").to.be.false]), c.firstShape.isFirstShape = !1, c.firstShape.sampleRotations = [], e.shapes = s, this.resetShapes(e.shapes, {
      removeGroups: !0,
      keepFirstShapeSampleRotations: !0
    });
    const l = e.shapes.filter((h) => z(h)), u = e.shapes.filter((h) => B(h));
    k("reset", () => `[RESET] RESET SEGMENT ${e.id} BETWEEN FIRST SHAPE CANDIDATES: ${c.id}`, null, [
      {
        type: "Shapes",
        count: l.length,
        added: l.filter((h) => h.added).length,
        ids: l.map((h) => h.id).join(", ")
      },
      {
        type: "Groups",
        count: u.length,
        added: u.filter((h) => h.added).length,
        ids: u.map((h) => h.id).join(", ")
      }
    ]);
  }
  return !0;
}
function jr(t, e) {
  return new Ct({
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
function Ur(t, e) {
  k("guillotine", () => `[SEG-CREATE] creating new segments for segment ${t.id}, stock ${t.stock.id} at (${t.x},${t.y}) ${t.l}x${t.w}, first shape ${e.id} at (${e.x},${e.y}) ${e.l}x${e.w}, cut direction ${t.cutDirection}`), B(e) && k("guillotine", () => `[SEG-CREATE] first shape ${e.id} is group with ${e.shapes?.length || 0} shapes`, [e.dimensions, e.coords]), N([
    () => E(z(e) || B(e), "first shape is not a shape or group").to.be.true,
    () => E(it(t), "segment is not a segment class").to.be.true
  ]);
  const { offcuts: n } = Sn.call(this, {
    container: t,
    shapes: t.shapes
  });
  if (!n.length) return;
  k("guillotine", () => `[SEG-CREATE] All new segments for segment ${t.id}:`, null, n.map((l) => ({ id: l.id, x: l.x, y: l.y, l: l.l, w: l.w, dir: l.cutDirection })));
  const i = t.cutDirection === "l" ? "y" : "x", r = H(t.cutPreference), s = n.filter((l) => l[i] < e[i] + e[r]), o = n.find((l) => l[i] >= e[i] + e[r]);
  if (o && (o.rowSegment = !0, s.push(o)), !s?.length) return;
  const a = kt(i);
  s.sort((l, u) => l[i] < u[i] ? -1 : l[i] > u[i] ? 1 : l[a] < u[a] ? -1 : l[a] > u[a] ? 1 : 0);
  const c = t.shapes.filter((l) => !l.added);
  return s.forEach((l) => {
    const u = Oe(l), h = c.filter((d) => jt(d, l, null, u)), f = /* @__PURE__ */ new Set();
    l.shapes = h.filter((d) => f.has(d.autoId) ? !1 : (f.add(d.autoId), !0)), N([() => E(l.shapes.every((d) => !d.added), `added shapes in offcut ${l.autoId}`).to.be.true]);
  }), t.children = s, s;
}
function Vr(t, e, n) {
  const { segment: i, shapes: r } = t;
  if (!r.length || !A.greaterThanOrEqualTo(e.l, i.l) || !A.greaterThanOrEqualTo(e.w, i.w))
    return null;
  const s = e.shapes.filter((p) => !p.added && z(p));
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
  const l = e.x - i.x, u = e.y - i.y, h = /* @__PURE__ */ new Set(), f = [];
  for (const p of r) {
    const S = /* @__PURE__ */ new Set(), y = `${p.longSide}|${p.shortSide}|${p.material}`, x = o.get(y);
    if (x)
      for (const b of x)
        h.has(b) || S.add(b);
    if (p.parentId) {
      const b = c.get(p.parentId);
      if (b)
        for (const w of b)
          h.has(w) || S.add(w);
      const I = a.get(p.parentId);
      if (I)
        for (const w of I)
          h.has(w) || S.add(w);
    }
    if (p.identicalTo && Array.isArray(p.identicalTo))
      for (const b of p.identicalTo) {
        const I = a.get(b);
        if (I)
          for (const w of I)
            h.has(w) || S.add(w);
      }
    const g = [];
    for (const b of S)
      b.isIdentical(p, !1) && g.push(b);
    let m = null;
    if (g.length === 1 ? m = g[0] : g.length > 1 && (m = g.find((b) => b.parentId === p.parentId) || g[0]), !m) return null;
    h.add(m), f.push({ source: p, target: m });
  }
  const d = [];
  for (const { source: p, target: S } of f)
    S.update({
      x: p.x + l,
      y: p.y + u,
      l: p.l,
      w: p.w,
      rot: p.rot,
      placementOrder: this.counters.placement++
    }), S.addToStock(n), d.push(S);
  return k("guillotine", () => `Strip duplicated: ${d.length} shapes placed in segment ${e.id} (offset x=${l}, y=${u})`), {
    segment: e,
    firstShape: t.firstShape,
    shapes: d
  };
}
function Jr(t, e, n, i, r, s, o, a, c) {
  if (!e || e.length <= 1) return !0;
  try {
    e.sort((w, $) => w[o] - $[o]);
    let l = 0, u = -1 / 0;
    for (const w of e)
      w[o] > u + i && (l += w[a] + i, u = w[o] + w[a]);
    if (l > t[a])
      return console.warn("Preliminary check: shapes would not fit within stock after rearrangement"), !1;
    const h = [], f = i / 2;
    let d, p, S = !1, y = 0, x = 0, g = 0;
    const m = 3;
    for (const w of e) {
      if (!sn(w)) continue;
      S || (d = w[o], g = 0), p = w[o] + w[a];
      const $ = w[o] + w[a] + f, P = new oe(
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
      if (dn(P, t, n))
        if (S = !0, g++, g >= m)
          S = !1, console.warn(`Forced strip creation after ${m} consecutive collisions`);
        else
          continue;
      else
        S = !1, g = 0;
      const T = n.filter((v) => A.greaterThanOrEqualTo(v[o], d) && A.lessThan(v[o], p));
      if (!T.length) continue;
      const M = T.length > 0 ? T.reduce((v, D) => {
        const F = v[r] + v[s], C = D[r] + D[s];
        return A.equalTo(F, C) ? v[s] > D[s] ? v : D : F > C ? v : D;
      }) : T[0];
      if (!M) continue;
      const R = M[r] + M[s], O = T.length > 0 ? T.reduce((v, D) => {
        const F = v[o] + v[a], C = D[o] + D[a];
        return A.equalTo(F, C) ? v[a] > D[a] ? v : D : F > C ? v : D;
      }) : T[0];
      if (!O) continue;
      let Y = O[o] + O[a];
      p > Y && (Y = p);
      const G = Y - d;
      h.push({
        stripStartPoint: d,
        stripEndPoint: p,
        furthestPrimaryPoint: R,
        furthestOrderingPoint: Y,
        shapesInThisRow: T,
        width: G
      });
    }
    if (!h.length)
      return console.warn("No valid strips found after analysis"), !0;
    const b = /* @__PURE__ */ new Map();
    h.forEach((w) => {
      w.shapesInThisRow.forEach(($) => {
        b.set($.autoId, $[o]);
      });
    }), h.sort((w, $) => A.equalTo(w.furthestPrimaryPoint, $.furthestPrimaryPoint) ? $.width - w.width : $.furthestPrimaryPoint - w.furthestPrimaryPoint);
    let I = 0;
    for (const w of h)
      I += w.furthestOrderingPoint - w.stripStartPoint + i;
    if (I > t[a])
      return console.warn("Total arrangement would exceed stock dimensions"), !1;
    for (const w of h) {
      w.shapesInThisRow.sort(($, P) => $.placementOrder - P.placementOrder);
      for (let $ = 0; $ < w.shapesInThisRow.length; $++) {
        const P = w.shapesInThisRow[$], T = P[o] - w.stripStartPoint, M = x + T;
        if (M + P[a] > t[a])
          return console.warn(`Shape ${P.id} would exceed stock boundaries after rearrangement`), ri(h, b, o), !1;
        const R = P[o];
        P[o] = M, P.placementOrder = $ + y, Pn(P) === 1 && A.equalTo(P[r], 0) && ke(P, s), !A.equalTo(R, M) && c && (dr(c, P), rn(c, P));
      }
      if (y += w.shapesInThisRow.length, x += w.furthestOrderingPoint - w.stripStartPoint + i, x > t[a])
        return console.warn("Rearrangement exceeds stock dimensions"), ri(h, b, o), !1;
    }
    return !0;
  } catch (l) {
    return console.error("Error during shape rearrangement:", l), !1;
  }
}
function ri(t, e, n) {
  t.forEach((i) => {
    i.shapesInThisRow.forEach((r) => {
      e.has(r.autoId) && (r[n] = e.get(r.autoId));
    });
  });
}
function Zr(t, e, n) {
  if (!this.config?.guillotine?.strips?.rearrange || t.saw.guillotineOptions?.strategy === "time") return !1;
  const r = t.bladeWidth;
  if (A.equalTo(r, 0) || r < 0)
    return console.warn("Invalid blade width for rearrangement"), !1;
  const s = bt(e, t);
  if (!s?.length) return !1;
  const o = t.cutPreference;
  if (o !== "l" && o !== "w")
    return console.warn("Invalid primary dimension:", o), !1;
  const a = o === "l" ? "x" : "y", c = s.filter(
    (f) => on(f, 1) && A.equalTo(f[a], 0)
  );
  if (!c.length) return !1;
  const l = H(o), u = o === "l" ? "y" : "x";
  return c.reduce((f, d) => f + d[l], 0) > t[l] ? (console.warn("Total strip width exceeds stock dimensions"), !1) : Jr(
    t,
    c,
    s,
    r,
    a,
    o,
    u,
    l,
    n
  );
}
async function _r(t, e, n, i) {
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
  if (A.equalTo(s, 0) || s < 0) {
    console.warn("Invalid blade width for corner squeeze");
    return;
  }
  const o = n.filter((f) => on(f, 1));
  if (!o.length) {
    console.debug("No strip shapes found for corner squeeze");
    return;
  }
  const a = t.cutPreference;
  if (a !== "l" && a !== "w") {
    console.warn("Invalid primary dimension:", a);
    return;
  }
  const c = a === "l" ? "x" : "y", l = H(a), u = a === "l" ? "y" : "x";
  o.sort((f, d) => f[u] - d[u]);
  let h = 0;
  for (let f = 0; f < o.length; f++) {
    let d = function(v, D, F, C) {
      return v[D] + v[F] + C;
    }, p = function(v, D, F, C, L) {
      return L > 0 ? L - D[F] : v[C] - D[F];
    };
    const S = o[f], y = f > 0 ? bt(this.shapeList, t) : n, x = ct(e, t);
    if (!x.length) {
      console.debug("No remaining shapes to place, exiting corner squeeze");
      break;
    }
    const g = y.filter((v) => !on(v, 0) && Ut(v, S, u));
    g.some((v) => v.autoId === S.autoId) || g.push(S);
    let m;
    g.length > 0 ? m = g.reduce((v, D) => v[c] + v[a] > D[c] + D[a] ? v : v[c] + v[a] < D[c] + D[a] ? D : v[u] < D[u] ? v : D) : m = S;
    const b = m[c] + m[a] + s;
    let I;
    c === "x" ? I = new oe({
      x1: b,
      x2: b,
      y1: m[u],
      y2: t[l]
    }) : I = new oe({
      x1: m[u],
      x2: t[l],
      y1: b,
      y2: b
    });
    const w = dn(I, t, y, !0);
    if (!Array.isArray(w)) {
      console.warn("Expected collision shapes array but got:", typeof w);
      continue;
    }
    const $ = w;
    let P = 0;
    if ($?.length && (P = $.reduce((D, F) => D[u] < F[u] ? D : F)[u] - s, P <= m[u])) {
      console.debug("Invalid segment end point calculation, skipping this squeeze attempt");
      continue;
    }
    const T = typeof _ < "u" && typeof _.segments < "u" ? _.segments === 0 ? "root" : (_.segments + 1).toString() : "squeeze-" + Date.now();
    typeof _ < "u" && typeof _.segments < "u" && _.segments++;
    const M = d(
      m,
      c,
      a,
      s
    ), R = p(
      t,
      m,
      u,
      l,
      P
    ), O = t[a] - M, Y = {
      id: T,
      shapes: x,
      stock: t,
      saw: t.saw,
      material: t.material,
      cutDirection: H(t.cutPreference),
      phase: 0,
      stockType: t?.saw?.stockType,
      t: t.t,
      // Assign all dimensions and positions
      x: c === "x" ? M : m.x,
      y: c === "y" ? M : m.y,
      l: c === "x" ? O : t.l,
      w: c === "y" ? O : t.w,
      [c]: M,
      [u]: m[u],
      [a]: O,
      [l]: R
    };
    if (Y.l <= 0 || Y.w <= 0) {
      console.debug("Skipping segment with invalid dimensions:", Y.l, Y.w);
      continue;
    }
    let G;
    try {
      G = new Ct(Y);
    } catch (v) {
      console.warn(`Corner squeeze segment creation error - ${v.message} for shape: ${m.id}`);
      continue;
    }
    try {
      await vn.call(
        this,
        { secondPass: !0 },
        t,
        G
      ), h++;
    } catch (v) {
      console.warn(`Error during segment calculations: ${v.message}`);
    }
  }
  h > 0 && console.debug(`Corner squeeze completed with ${h} successful placements`);
}
function Kr(t, e, n, i = null) {
  if (!e)
    throw new Error("no segment provided to assignStripShape");
  if (!t) throw new Error("no shape provided to assignStripShape");
  t.resetBothScores(), t.x = e.x, t.y = e.y;
  const r = this.shapeList?.filter(
    (s) => s.added && !B(s) && s.stock?.autoId === n.autoId && s.autoId !== t.autoId
  ) || [];
  if (B(t)) {
    const s = new Set(t.shapes?.map((a) => a.autoId)), o = r.filter((a) => !s.has(a.autoId));
    if (o.length > 0 && Ce(t, o, n))
      return k("guillotine", `[assignStripShape] PREVENTED — group ${t.id} would collide at (${t.x},${t.y}) ${t.l}x${t.w} on stock ${n.id}`), t.x = 0, t.y = 0, !1;
    t.initShapes(t.shapes), t.placeMyShapes(n);
  }
  return i !== null && !B(t) ? At(t, i, n) : i !== null && B(t) && t.rot !== i && k("groups", `[assignStripShape] WARNING: Group ${t.id} has computed rot=${t.rot} but requested rotation=${i} - groups cannot be rotated!`), !B(t) && r.length > 0 && Ce(t, r, n) ? (k("guillotine", `[assignStripShape] PREVENTED — shape ${t.id} would collide at (${t.x},${t.y}) ${t.l}x${t.w} on stock ${n.id}`), t.x = 0, t.y = 0, !1) : (k("calculations", `assigning first shape ${t.id}, x: ${t.x}, y: ${t.y}, rot: ${i}`), t.guillotineState || (t.guillotineState = new be({})), t.firstShape.isFirstShape = !0, ur(t), ke(t, e.cutDirection), vt() && (B(t) || N([() => E(t.rot).to.equal(i)])), t.addToStock(n), N([() => E(vi(this.shapeList.filter((s) => s.stock?.id === n.id))).length.to.be(0)]), t);
}
async function ls(t, e, n, i = null) {
  if (N([
    () => E(z(e) || B(e), "runFirstShapeRotationTests requires shape or group").to.be.true,
    () => E(it(n)).to.be.true
  ]), !(ut(i) && !Xt(e, i, n)))
    for (const r of e.firstShape.sampleRotations)
      await ys.call(
        this,
        e,
        n,
        r,
        an,
        {
          options: t,
          fs: e,
          fsRotation: null,
          segment: n
        },
        "fsRotation"
      );
}
function Qr(t, e, n) {
  let i;
  return n ? (i = t.cutPreference, ke(e, H(i)), t.hasHeadCut = !0) : (A.equalTo(e[t.cutDirection], t[t.cutDirection]) ? i = t.cutDirection : i = ne(t) ? H(t.cutPreference) : H(t.cutDirection), ke(e, H(i))), N([
    () => E(wt(e)).to.not.equal(i)
  ]), i;
}
function ta(t, e, n, i, r) {
  n.hasHeadCut = e;
  const s = Qr(n, t, e), o = {
    l: s === "w" ? n.l : t.l,
    w: s === "w" ? t.w : n.w
  }, a = new Ct({
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
    () => E(a.cutDirection, `segment cut direction ${n.id} is the same as first shape ${t.id}`).to.not.equal(wt(t))
  ]), k("cuts", `FIRST SHAPE SEGMENT [${a?.parent?.type === "root" ? "R" : a.parent.id}]->[${a.autoId}] ${e ? "HEAD" : "NORM"} ${$t(a.l, 4)}x${$t(a.w, 4)}, SEG DIR ${a.cutDirection.toUpperCase()}, SHAPE DIR ${wt(t).toUpperCase()}`), a;
}
function ea(t, e, n, i, r = null, s) {
  if (!e.length) return [];
  N([
    () => E(e.length).to.be.greaterThan(0),
    () => E(t.every((y) => y.added === !1), "unplaced shapes contain added shapes").to.be.true
  ]);
  const o = i.saw?.guillotineOptions, a = i.cutPreference ? H(i.cutPreference) : null, c = ne(n) && o?.limitStripDimensions !== !1 && a ? Ci(e, a, i[a]) : null;
  let l = [];
  const u = Oe(n);
  for (const y of e) {
    const x = Ge(y, i);
    if (y.firstShape.sampleRotations = [], !B(y))
      for (const g of x) {
        let m = 1;
        At(y, g, i);
        const b = y.getPriority(i);
        let I = !0;
        if (At(y, g, i), N([
          () => E(y.rot, `unique shape ${y.id} rotation (${y.rot}) incorrect for (${g})`).equal(g)
        ]), !jt(y, n, g, u))
          continue;
        if (r?.length) {
          y.x = n.x, y.y = n.y;
          for (const $ of r)
            if (ki(y, $, i)) {
              I = !1;
              break;
            }
        }
        if (!I) continue;
        const w = y.aspect;
        if (w < 0.1) {
          const $ = i.cutPreference;
          if (y[$] >= 0.7 * i[$] && y[$] > y[H($)]) {
            const P = Math.max(1, 10 * (1 - w * 2));
            m *= P;
          }
        }
        c !== null && y[a] > c && (m *= 0.1), l.push({
          id: y.id,
          shape: y,
          rotation: g,
          score: m,
          priority: b
        }), N([
          () => E(jt(y, n, g), "canditate will not fit").to.be.true
        ]);
      }
  }
  l.sort((y, x) => y.score !== x.score ? x.score - y.score : y.priority !== x.priority ? x.priority - y.priority : x.shape.area - y.shape.area);
  const h = n.cutDirection, f = i[h], d = this.config.guillotine.firstShapeFullSizeThreshold, p = l.filter((y) => y.shape[h] >= d * f);
  if (p.length > 0) {
    const y = p[0];
    return y.shape.firstShape.sampleRotations = [y.rotation], [y.shape];
  }
  l = l.slice(0, this.config.sample.guillotine);
  const S = [];
  for (const y of l)
    S.find((g) => g.id === y.id) || S.push(y.shape), y.shape.firstShape.sampleRotations.push(y.rotation), N([
      () => E(y.shape.firstShape.sampleRotations.length).to.be.lessThanOrEqual(2),
      () => E(y.shape.firstShape.sampleRotations[0]).to.not.equal(y.shape.firstShape.sampleRotations[1])
    ]);
  return o?.limitStripDimensions === !1 && S.push(...s), S;
}
function na(t, e, n) {
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
function ia(t, e, n) {
  oa(t.shapes);
  const i = zs.call(this, t, e, n);
  return i || !1;
}
function ai(t, e = null, n, i = !1) {
  let r;
  if (e !== null) {
    const s = t.guillotineState.getStripShapeBatchData(e);
    if (s === !1)
      throw new Error("getStripShapeRotation - could not find strip shape group");
    r = s.rot;
  }
  if (N([() => E([0, 1].includes(r)).to.be.true]), i && r !== t.rot) {
    if (B(t) || !Xt(t, r, n)) return r;
    if (At(t, r, n) === !1)
      throw new Error("getStripShapeRotation - could not rotate strip shape correctly");
  }
  return r;
}
function sa(t, e, n, i, r) {
  const s = n.cutPreference === "l" ? "l" : "w", o = new Set(r.map((h) => h[s]));
  N([
    () => E(o.size).to.be.greaterThan(0)
  ]);
  const a = r.filter((h) => ht(h)), c = r.filter((h) => z(h));
  if (c.length < 2)
    return r;
  const l = [...c], u = [];
  for (const h of o) {
    const f = [], d = h * (1 - this.config.groups.tolerance);
    let p = h * (1 + this.config.groups.tolerance);
    p > i[s] && (p = i[s]);
    for (let S = l.length - 1; S >= 0; S--) {
      const y = l[S];
      !y.getMinSpacing(n.saw, !0) && y[s] <= n[s] && y[s] >= d && y[s] <= p && (f.push(y), l.splice(S, 1));
    }
    f.length > 0 && u.push(f);
  }
  if (u.length > 0) {
    const h = [];
    for (const f of u) {
      if (f.length < 2) continue;
      const d = f[0], p = d.guillotineState.getStripShapeBatchData(t);
      if (p === !1)
        throw new Error("no reference shape group");
      let S;
      try {
        const y = f.slice(0, -1).reduce(($, P) => $ + P.getMinSpacing(n), 0), x = f.reduce(($, P) => $ + P[e], 0);
        if (y + x > n[e]) continue;
        const g = d.l, m = d.w, w = `ss-${[...new Set(f.map(($) => $.parentId || $.id))].sort().join("-")}_${this.counters.group++}`;
        S = new Je({
          l: g,
          w: m,
          id: w,
          shapes: f,
          direction: Hs(e),
          container: n,
          type: "strip"
        });
      } catch (y) {
        console.log(y), S = null;
      }
      if (S) {
        const y = Math.min(...f.map((g) => {
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
        h.push(S), i.shapes = i.shapes.filter((g) => !x.has(g.id)), i.shapes.push(S), r = r.filter((g) => !x.has(g.id));
      }
    }
    r = [...h, ...a, ...r.filter((f) => z(f))];
  } else
    r = [...a, ...c];
  return r;
}
function oa(t) {
  for (const e of t) e.guillotineState.resetStripShapeBatchGroups();
}
function ra(t, e) {
  const n = e.getStock, i = 0.1 * n.l;
  function r(a) {
    return t.some((c) => a.parentId === c.parentId && !c.added) && Ze(a, n) && a.willItFit(e);
  }
  const s = t.some((a) => Ze(a, n) && a.willItFit(e) && a.l >= i || a.w >= i);
  return t.filter((a) => a.added ? !1 : (rt(a) && a.updateShapeSpacing(e), t.length === 1 || !s ? r(a) : a.l < i && a.w < i ? !1 : r(a)));
}
function cs(t, e, n, i = null, r = !1) {
  if (!this.config.sample.enable && r === !1) return [];
  if (!t) throw new Error("getFirstShapeSample - type is required");
  N([
    () => E(t === "guillotine" || t === "efficiency", "type not correct").to.be.true,
    () => E(js(n), "should be a container").to.be.true
  ]);
  const s = Rt(e, !1, !0);
  if (!s.length) return [];
  const o = e.filter((d) => B(d)), a = [], c = n.getStock;
  let l = ra(s, n);
  if (!l.length) return [];
  if (t === "guillotine")
    l = ea.call(
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
    const d = l.filter((p) => p.getPriority(c) > 0);
    d.length && (l = d), l.sort(Tt.aspect);
  }
  const u = l.filter((d) => B(d)), h = l.filter((d) => !B(d)), f = [...u, ...h];
  for (const d of f)
    if (B(d)) {
      if (!d.willItFit(n)) {
        k("groups", `[getFirstShapeSample] Group ${d.id} does NOT fit container after calculateGroupDimensions - skipping (group: ${d.l}x${d.w}, container: ${n.l}x${n.w})`);
        continue;
      }
      d.firstShape.sampleRotations = [d.rot.valueOf()], a.push(d);
    } else {
      const p = e.find((S) => S.parentId === d.parentId && !S.added && S.constructor.name === d.constructor.name);
      if (p && (p.firstShape.sampleRotations = Ge(p, n), a.push(p)), a.length >= (t === "guillotine" ? this.config.sample.guillotine : this.config.sample.efficiency))
        break;
    }
  return k("firstShapes", `candidates for stock ${n.getStock?.id}, ${it(n) ? "segment " + n.id : ""}`, a.map((d) => ({ id: d.id, autoId: d.autoId, rotations: d.firstShape.sampleRotations }))), N([() => E(pt(a), "duplicate ids found in candidates with getFirstShapeSample").to.false]), a;
}
function Dt(t) {
  let e = 0;
  const n = t.length;
  for (let i = 0, r = n - 1; i < n; r = i++)
    e += (t[r].x + t[i].x) * (t[r].y - t[i].y);
  return e / 2;
}
function us(t) {
  return Math.abs(Dt(t));
}
function mt(t) {
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
function qt(t, e) {
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
function ue(t, e, n) {
  return t.map((i) => ({
    x: i.x + e,
    y: i.y + n
  }));
}
function aa(t) {
  return t.map((e) => ({
    x: -e.x,
    y: -e.y
  }));
}
function Nt(t) {
  const e = mt(t);
  return ue(t, -e.minX, -e.minY);
}
function Vt(t, e) {
  let n = !1;
  const i = e.length;
  for (let r = 0, s = i - 1; r < i; s = r++) {
    const o = e[r].x, a = e[r].y, c = e[s].x, l = e[s].y;
    a > t.y != l > t.y && t.x < (c - o) * (t.y - a) / (l - a) + o && (n = !n);
  }
  return n;
}
function Mt(t, e) {
  return t.minX < e.maxX && t.maxX > e.minX && t.minY < e.maxY && t.maxY > e.minY;
}
function la(t, e) {
  if (t.length <= 3) return t;
  const n = ln(t, e);
  if (n.length > 0) {
    const i = n[0], r = n[n.length - 1];
    (i.x !== r.x || i.y !== r.y) && n.push({ x: i.x, y: i.y });
  }
  return n;
}
function ln(t, e) {
  if (t.length <= 2) return t;
  let n = 0, i = 0;
  const r = t[0], s = t[t.length - 1];
  for (let o = 1; o < t.length - 1; o++) {
    const a = ca(t[o], r, s);
    a > n && (n = a, i = o);
  }
  if (n > e) {
    const o = ln(t.slice(0, i + 1), e), a = ln(t.slice(i), e);
    return o.slice(0, -1).concat(a);
  } else
    return [r, s];
}
function ca(t, e, n) {
  const i = n.x - e.x, r = n.y - e.y, s = i * i + r * r;
  if (s === 0) {
    const o = t.x - e.x, a = t.y - e.y;
    return Math.sqrt(o * o + a * a);
  }
  return Math.abs(r * t.x - i * t.y + n.x * e.y - n.y * e.x) / Math.sqrt(s);
}
function Jt(t) {
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
function li(t) {
  let e = t.length > 3 && t[0].x === t[t.length - 1].x && t[0].y === t[t.length - 1].y ? t.slice(0, -1) : t.slice();
  Dt(e) < 0 && (e = e.slice().reverse());
  const n = [], i = e.map((s, o) => o);
  let r = i.length * 2;
  for (; i.length > 3 && r-- > 0; ) {
    let s = !1;
    for (let o = 0; o < i.length; o++) {
      const a = i[(o - 1 + i.length) % i.length], c = i[o], l = i[(o + 1) % i.length], u = e[a], h = e[c], f = e[l];
      if ((h.x - u.x) * (f.y - u.y) - (h.y - u.y) * (f.x - u.x) <= 0) continue;
      let p = !1;
      for (const S of i)
        if (!(S === a || S === c || S === l) && ua(e[S], u, h, f)) {
          p = !0;
          break;
        }
      if (!p) {
        n.push([u, h, f]), i.splice(o, 1), s = !0;
        break;
      }
    }
    if (!s) break;
  }
  return i.length === 3 && n.push([e[i[0]], e[i[1]], e[i[2]]]), n;
}
function ua(t, e, n, i) {
  const r = (t.x - n.x) * (e.y - n.y) - (e.x - n.x) * (t.y - n.y), s = (t.x - i.x) * (n.y - i.y) - (n.x - i.x) * (t.y - i.y), o = (t.x - e.x) * (i.y - e.y) - (i.x - e.x) * (t.y - e.y), a = r < 0 || s < 0 || o < 0, c = r > 0 || s > 0 || o > 0;
  return !(a && c);
}
function ci(t, e) {
  let n = Ot(t), i = Ot(e);
  Dt(n) < 0 && (n = n.slice().reverse()), Dt(i) < 0 && (i = i.slice().reverse());
  const r = n.length, s = i.length;
  let o = 0;
  for (let h = 1; h < r; h++)
    (n[h].y < n[o].y || n[h].y === n[o].y && n[h].x < n[o].x) && (o = h);
  let a = 0;
  for (let h = 1; h < s; h++)
    (i[h].y < i[a].y || i[h].y === i[a].y && i[h].x < i[a].x) && (a = h);
  const c = [];
  let l = 0, u = 0;
  for (; l < r || u < s; ) {
    const h = (o + l) % r, f = (a + u) % s;
    c.push({
      x: n[h].x + i[f].x,
      y: n[h].y + i[f].y
    });
    const d = (o + l + 1) % r, p = (a + u + 1) % s, S = n[d].x - n[h].x, y = n[d].y - n[h].y, x = i[p].x - i[f].x, g = i[p].y - i[f].y, m = S * g - y * x;
    l >= r ? u++ : u >= s || m > 0 ? l++ : (m < 0 || l++, u++);
  }
  return c;
}
function Ot(t) {
  return t.length > 1 && t[0].x === t[t.length - 1].x && t[0].y === t[t.length - 1].y ? t.slice(0, -1) : t;
}
function fa(t, e) {
  if (e <= 0) return t;
  const n = Ot(t), i = n.length;
  if (i < 3) return t;
  const s = Dt(n) >= 0 ? n : n.slice().reverse(), o = [];
  for (let c = 0; c < i; c++) {
    const l = s[c], u = s[(c + 1) % i], h = u.x - l.x, f = u.y - l.y, d = Math.sqrt(h * h + f * f);
    if (d === 0) continue;
    const p = f / d, S = -h / d;
    o.push({
      px: l.x + p * e,
      py: l.y + S * e,
      dx: h,
      dy: f
    });
  }
  if (o.length < 3) return t;
  const a = [];
  for (let c = 0; c < o.length; c++) {
    const l = o[c], u = o[(c + 1) % o.length], h = ha(
      l.px,
      l.py,
      l.px + l.dx,
      l.py + l.dy,
      u.px,
      u.py,
      u.px + u.dx,
      u.py + u.dy
    );
    h && a.push(h);
  }
  return a;
}
function ha(t, e, n, i, r, s, o, a) {
  const c = (t - n) * (s - a) - (e - i) * (r - o);
  if (Math.abs(c) < 1e-10) return null;
  const l = ((t - r) * (s - a) - (e - s) * (r - o)) / c;
  return {
    x: t + l * (n - t),
    y: e + l * (i - e)
  };
}
function da(t, e, n = 0) {
  const i = aa(e), r = Jt(Ot(t)), s = Jt(Ot(i));
  let o;
  if (r && s)
    o = [ci(t, i)];
  else {
    const a = r ? [Ot(ui(t))] : li(t), c = s ? [Ot(ui(i))] : li(i);
    o = [];
    for (const l of a)
      for (const u of c)
        o.push(ci(l, u));
  }
  return n > 0 && (o = o.map((a) => fa(a, n))), o;
}
function pa(t, e, n) {
  const i = t - n.width, r = e - n.height;
  return i < 0 || r < 0 ? [] : [
    { x: 0, y: 0 },
    { x: i, y: 0 },
    { x: i, y: r },
    { x: 0, y: r },
    { x: 0, y: 0 }
  ];
}
function ui(t) {
  return Dt(t) < 0 ? t.slice().reverse() : t;
}
function De(t) {
  let e = 0, n = 0;
  for (const i of t)
    e += i.x, n += i.y;
  return {
    x: e / t.length,
    y: n / t.length
  };
}
function ga(t, e, n, i) {
  const r = ge(n, i, t), s = ge(n, i, e), o = ge(t, e, n), a = ge(t, e, i);
  return !!((r > 0 && s < 0 || r < 0 && s > 0) && (o > 0 && a < 0 || o < 0 && a > 0) || r === 0 && me(n, i, t) || s === 0 && me(n, i, e) || o === 0 && me(t, e, n) || a === 0 && me(t, e, i));
}
function ge(t, e, n) {
  return (e.x - t.x) * (n.y - t.y) - (e.y - t.y) * (n.x - t.x);
}
function me(t, e, n) {
  return Math.min(t.x, e.x) <= n.x && n.x <= Math.max(t.x, e.x) && Math.min(t.y, e.y) <= n.y && n.y <= Math.max(t.y, e.y);
}
function Me(t, e, n = 0) {
  const i = t.length, r = e.length;
  if (i < 3 || r < 3) return !1;
  const s = t[0].x === t[i - 1].x && t[0].y === t[i - 1].y, o = e[0].x === e[r - 1].x && e[0].y === e[r - 1].y, a = s ? i - 1 : i, c = o ? r - 1 : r, l = n * n;
  for (let u = 0; u < a; u++) {
    const h = t[u], f = t[(u + 1) % i];
    for (let d = 0; d < c; d++) {
      const p = e[d], S = e[(d + 1) % r];
      if (ga(h, f, p, S) || n > 0 && ma(h, f, p, S) < l)
        return !0;
    }
  }
  return !!(Vt(t[0], e) || Vt(e[0], t));
}
function te(t, e, n) {
  const i = n.x - e.x, r = n.y - e.y, s = i * i + r * r;
  if (s === 0) {
    const h = t.x - e.x, f = t.y - e.y;
    return h * h + f * f;
  }
  let o = ((t.x - e.x) * i + (t.y - e.y) * r) / s;
  o < 0 ? o = 0 : o > 1 && (o = 1);
  const a = e.x + o * i, c = e.y + o * r, l = t.x - a, u = t.y - c;
  return l * l + u * u;
}
function ma(t, e, n, i) {
  return Math.min(
    te(t, n, i),
    te(e, n, i),
    te(n, t, e),
    te(i, t, e)
  );
}
function ya(t, e, n, i) {
  const r = e.x - t.x, s = e.y - t.y, o = i.x - n.x, a = i.y - n.y, c = r * a - s * o;
  if (Math.abs(c) < 1e-10) return null;
  const l = ((n.x - t.x) * a - (n.y - t.y) * o) / c, u = ((n.x - t.x) * s - (n.y - t.y) * r) / c;
  return l < 0 || l > 1 || u < 0 || u > 1 ? null : {
    x: t.x + l * r,
    y: t.y + l * s
  };
}
function fi(t, e) {
  const n = [], i = t.length - (t[0].x === t[t.length - 1].x && t[0].y === t[t.length - 1].y ? 1 : 0), r = e.length - (e[0].x === e[e.length - 1].x && e[0].y === e[e.length - 1].y ? 1 : 0);
  for (let s = 0; s < i; s++) {
    const o = t[s], a = t[(s + 1) % t.length];
    for (let c = 0; c < r; c++) {
      const l = e[c], u = e[(c + 1) % e.length], h = ya(o, a, l, u);
      h && n.push(h);
    }
  }
  return n;
}
const xa = {
  kerfWidth: 0,
  leadIn: { enabled: !0, type: "line", length: 2, angle: 45 },
  leadOut: { enabled: !0, type: "line", length: 2, angle: 45 },
  climbMilling: !0,
  optimization: { method: "2-opt" },
  proximity: { enabled: !0, threshold: 5 },
  commonLine: { enabled: !0, tolerance: 0.5, minOverlapLength: 5 }
};
function hi(t, e) {
  if (e <= 0 || t.length < 3) return [t];
  const n = t.length, i = [];
  for (let r = 0; r < n; r++) {
    const s = t[(r - 1 + n) % n], o = t[r], a = t[(r + 1) % n], c = o.x - s.x, l = o.y - s.y, u = a.x - o.x, h = a.y - o.y, f = Math.sqrt(c * c + l * l) || 1, d = Math.sqrt(u * u + h * h) || 1, p = l / f, S = -c / f, y = h / d, x = -u / d;
    let g = p + y, m = S + x;
    const b = Math.sqrt(g * g + m * m);
    b < 1e-10 ? (g = p, m = S) : (g /= b, m /= b);
    const I = p * g + S * m, w = I > 0.1 ? e / I : e * 2;
    i.push({
      x: o.x + g * w,
      y: o.y + m * w
    });
  }
  return [i];
}
function Sa(t, e) {
  const i = Dt(t) > 0;
  return e && !i || !e && i ? t.slice().reverse() : t;
}
function cn(t, e) {
  const n = e.x - t.x, i = e.y - t.y, r = Math.sqrt(n * n + i * i);
  return r === 0 ? { x: 0, y: -1 } : {
    x: i / r,
    y: -n / r
  };
}
function wa(t, e, n) {
  let i = 0, r = -1 / 0;
  const s = t.length;
  for (let c = 0; c < s; c++) {
    const l = t[c], u = t[(c + 1) % s], h = {
      x: (l.x + u.x) / 2,
      y: (l.y + u.y) / 2
    }, f = cn(l, u), d = h.x, p = e.l - h.x, S = h.y, y = e.w - h.y, x = Math.min(d, p, S, y), g = h.x - e.l / 2, m = h.y - e.w / 2, b = Math.sqrt(g * g + m * m) || 1, I = f.x * (g / b) + f.y * (m / b);
    let w = -x + I * 10;
    if (n) {
      const $ = Math.sqrt(
        (n.x - h.x) ** 2 + (n.y - h.y) ** 2
      );
      w += -$ * 0.5;
    }
    w > r && (r = w, i = c);
  }
  const o = t[i], a = t[(i + 1) % s];
  return {
    edgeIndex: i,
    midpoint: {
      x: (o.x + a.x) / 2,
      y: (o.y + a.y) / 2
    },
    normal: cn(o, a)
  };
}
function fs(t, e, n, i) {
  if (!n.leadIn.enabled || t.length < 3)
    return { leadIn: [], entryIndex: 0 };
  const { edgeIndex: r, midpoint: s, normal: o } = wa(t, e, i), a = n.leadIn.length, c = n.leadIn.angle * Math.PI / 180, l = Math.cos(c), u = Math.sin(c), h = o.x * l - o.y * u, f = o.x * u + o.y * l, d = s.x + h * a, p = s.y + f * a, S = 0.5, y = Math.max(S, Math.min(e.l - S, d)), x = Math.max(S, Math.min(e.w - S, p));
  return { leadIn: [
    { x: y, y: x, type: "rapid" },
    { x: s.x, y: s.y, type: "linear" }
  ], entryIndex: r };
}
function hs(t, e, n, i) {
  if (!i.leadOut.enabled || t.length < 3)
    return [];
  const r = t.length, s = t[e], o = t[(e + 1) % r], a = {
    x: (s.x + o.x) / 2,
    y: (s.y + o.y) / 2
  }, c = cn(s, o), l = i.leadOut.length, u = i.leadOut.angle * Math.PI / 180, h = Math.cos(u), f = Math.sin(u), d = c.x * h - c.y * f, p = c.x * f + c.y * h, S = a.x + d * l, y = a.y + p * l, x = 0.5, g = Math.max(x, Math.min(n.l - x, S)), m = Math.max(x, Math.min(n.w - x, y));
  return [
    { x: g, y: m, type: "linear" }
  ];
}
function ft(t, e) {
  const n = t.x - e.x, i = t.y - e.y;
  return Math.sqrt(n * n + i * i);
}
function un(t) {
  return t.leadIn.length > 0 ? t.leadIn[0] : t.contour.length > 0 ? t.contour[0] : t.centroid;
}
function le(t) {
  return t.leadOut.length > 0 ? t.leadOut[t.leadOut.length - 1] : t.contour.length > 0 ? t.contour[t.contour.length - 1] : t.centroid;
}
function ba(t) {
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
      let f = 0, d = 1 / 0;
      for (let S = 0; S < c.length; S++) {
        const y = ft(l, un(c[S]));
        y < d && (d = y, f = S);
      }
      const p = c.splice(f, 1)[0];
      a.push(p), l = le(p);
    }
    const u = a[0] ?? s, h = s ?? a[a.length - 1];
    n.push({
      shapeId: i,
      holes: a,
      outer: s,
      entryPoint: u ? un(u) : { x: 0, y: 0 },
      exitPoint: h ? le(h) : { x: 0, y: 0 }
    });
  }
  return n;
}
function Ia(t, e) {
  const n = [];
  for (const i of e) {
    const r = t[i];
    n.push(...r.holes), r.outer && n.push(r.outer);
  }
  return n;
}
function fn(t, e) {
  if (e.length === 0) return 0;
  let n = ft({ x: 0, y: 0 }, t[e[0]].entryPoint);
  for (let i = 0; i < e.length - 1; i++)
    n += ft(t[e[i]].exitPoint, t[e[i + 1]].entryPoint);
  return n;
}
function $a(t) {
  const e = t.length;
  if (e <= 1) return t.map((r, s) => s);
  let n = [], i = 1 / 0;
  for (let r = -1; r < e; r++) {
    const s = /* @__PURE__ */ new Set(), o = [];
    let a;
    for (r >= 0 ? (s.add(r), o.push(r), a = t[r].exitPoint) : a = { x: 0, y: 0 }; o.length < e; ) {
      let l = -1, u = 1 / 0;
      for (let h = 0; h < e; h++) {
        if (s.has(h)) continue;
        const f = ft(a, t[h].entryPoint);
        f < u && (u = f, l = h);
      }
      s.add(l), o.push(l), a = t[l].exitPoint;
    }
    const c = fn(t, o);
    c < i && (i = c, n = o);
  }
  return n;
}
function Ca(t, e, n = 50) {
  const i = e.length;
  if (i <= 2) return e;
  const r = e.slice();
  let s = !0, o = 0;
  for (; s && o < n; ) {
    s = !1, o++;
    for (let a = -1; a < i - 1; a++)
      for (let c = a + 2; c < i; c++) {
        const l = a >= 0 ? t[r[a]].exitPoint : { x: 0, y: 0 }, u = c + 1 < i ? t[r[c + 1]].entryPoint : null;
        let h = ft(l, t[r[a + 1]].entryPoint), f = ft(l, t[r[c]].entryPoint);
        u && (h += ft(t[r[c]].exitPoint, u), f += ft(t[r[a + 1]].exitPoint, u));
        for (let d = a + 1; d < c; d++)
          h += ft(t[r[d]].exitPoint, t[r[d + 1]].entryPoint);
        for (let d = c; d > a + 1; d--)
          f += ft(t[r[d]].exitPoint, t[r[d - 1]].entryPoint);
        if (f < h - 1e-10) {
          let d = a + 1, p = c;
          for (; d < p; ) {
            const S = r[d];
            r[d] = r[p], r[p] = S, d++, p--;
          }
          s = !0;
        }
      }
  }
  return r;
}
function Pa(t, e, n = 30) {
  if (e.length <= 2) return e;
  const r = e.slice();
  let s = fn(t, r), o = 0, a = !0;
  for (; a && o < n; ) {
    a = !1, o++;
    for (let c = 0; c < r.length; c++) {
      const l = r.splice(c, 1)[0];
      let u = c, h = s;
      for (let f = 0; f <= r.length; f++) {
        r.splice(f, 0, l);
        const d = fn(t, r);
        d < h - 1e-10 && (h = d, u = f), r.splice(f, 1);
      }
      r.splice(u, 0, l), h < s - 1e-10 && (s = h, a = !0);
    }
  }
  return r;
}
function di(t, e) {
  if (t.length <= 1 || e.optimization.method === "none")
    return t;
  const n = ba(t);
  let i = $a(n);
  return e.optimization.method === "2-opt" && (i = Ca(n, i), i = Pa(n, i)), Ia(n, i);
}
function pi(t, e, n) {
  let i = { x: 0, y: 0 };
  for (const r of t) {
    const s = r._polygon;
    if (!s || s.length < 3) {
      i = le(r);
      continue;
    }
    const { leadIn: o, entryIndex: a } = fs(s, e, n, i);
    r.leadIn = o, r._entryIndex = a, r.contour = En(s, a), r.leadOut = hs(s, a, e, n), i = le(r);
  }
}
function Ta(t, e) {
  if (!e.proximity.enabled || t.length < 2) return;
  const n = e.proximity.threshold;
  for (let i = 0; i < t.length - 1; i++) {
    const r = le(t[i]), s = un(t[i + 1]);
    ft(r, s) < n && (t[i].leadOut = [], t[i + 1].leadIn = []);
  }
}
function va(t, e, n) {
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
      const u = s.length, h = c.length;
      for (let f = 0; f < u; f++) {
        const d = s[f], p = s[(f + 1) % u], S = p.x - d.x, y = p.y - d.y, x = Math.sqrt(S * S + y * y);
        if (x < 1e-9) continue;
        const g = S / x, m = y / x;
        for (let b = 0; b < h; b++) {
          const I = c[b], w = c[(b + 1) % h], $ = w.x - I.x, P = w.y - I.y, T = Math.sqrt($ * $ + P * P);
          if (T < 1e-9) continue;
          const M = $ / T, R = P / T, O = g * M + m * R;
          if (Math.abs(O + 1) > 0.05) continue;
          const Y = I.x - d.x, G = I.y - d.y;
          if (Math.abs(Y * m - G * g) > e) continue;
          const D = 0, F = x, C = (I.x - d.x) * g + (I.y - d.y) * m, L = (w.x - d.x) * g + (w.y - d.y) * m, V = Math.min(C, L), j = Math.max(C, L), tt = Math.max(D, V), J = Math.min(F, j) - tt;
          J >= n && i.push({
            contourA: t[r],
            edgeIdxA: f,
            contourB: t[a],
            edgeIdxB: b,
            overlapLength: J
          });
        }
      }
    }
  }
  return i;
}
function Ea(t, e, n, i) {
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
    !o || a == null || (s.contour = En(o, a, s._skipEdges));
  }
}
function gi(t) {
  let e = 0;
  for (let n = 1; n < t.length; n++)
    e += ft(t[n - 1], t[n]);
  return e;
}
function En(t, e, n) {
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
    const l = (a + c) % i, u = (e + c) % i, h = n?.has(u) ?? !1;
    r.push({
      x: t[l].x,
      y: t[l].y,
      type: h ? "rapid" : "linear"
    });
  }
  return r.push({ x: s.x, y: s.y, type: o ? "rapid" : "linear" }), r;
}
function ds(t, e, n) {
  const i = { ...xa, ...n }, r = e?.saw?.bladeWidth ?? 0;
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
      let b;
      if (s > 0) {
        const I = Dt(m);
        if (g.isHole) {
          const w = I < 0 ? m.slice().reverse() : m;
          b = hi(w, s);
        } else {
          const w = I > 0 ? m.slice().reverse() : m;
          b = hi(w, s);
        }
      } else
        b = [m];
      for (let I = 0; I < b.length; I++) {
        let w = b[I];
        w = Sa(w, i.climbMilling);
        const { leadIn: $, entryIndex: P } = fs(w, o, i), T = En(w, P), M = hs(w, P, o, i), R = mt(w), O = De(w), Y = b.length > 1 ? ` (part ${I + 1})` : "";
        a.push({
          shapeId: p.autoId,
          label: g.label + Y,
          isHole: g.isHole,
          leadIn: $,
          contour: T,
          leadOut: M,
          centroid: O,
          bounds: R,
          _polygon: w,
          _entryIndex: P
        });
      }
    }
  }
  const c = i.commonLine.enabled ? va(a, i.commonLine.tolerance, i.commonLine.minOverlapLength) : [];
  let l = di(a, i);
  for (let p = 0; p < 3; p++) {
    pi(l, o, i);
    const S = di(l, i);
    let y = !0;
    for (let x = 0; x < S.length; x++)
      if (S[x] !== l[x]) {
        y = !1;
        break;
      }
    if (l = S, y) break;
  }
  pi(l, o, i), Ea(l, c), Ta(l, i);
  for (const p of l)
    delete p._polygon, delete p._entryIndex, delete p._skipEdges;
  let u = 0, h = 0, f = 0, d = { x: 0, y: 0 };
  for (const p of l) {
    const S = p.leadIn.length > 0 ? p.leadIn[0] : p.contour[0];
    S && (h += ft(d, S)), u += gi(p.leadIn.filter((x) => x.type === "linear"));
    for (let x = 1; x < p.contour.length; x++) {
      const g = ft(p.contour[x - 1], p.contour[x]);
      p.contour[x].type === "rapid" ? (h += g, f += g) : u += g;
    }
    u += gi(p.leadOut);
    const y = p.leadOut.length > 0 ? p.leadOut[p.leadOut.length - 1] : p.contour[p.contour.length - 1];
    y && (d = y);
  }
  return c.length > 0 && console.log(`[cut] Common-line: ${c.length} shared edges detected, saved ${f.toFixed(1)}mm cutting distance`), {
    contours: l,
    totalCutDistance: Math.round(u * 100) / 100,
    totalRapidDistance: Math.round(h * 100) / 100,
    commonLineSaved: Math.round(f * 100) / 100,
    config: i
  };
}
const Gt = {
  async calculation(t, e, n) {
    if (t?.tidy && (this.resetShapes(bt(n, e)), this.tidyStrategy = !0), await Gt.tryFirstShapes.call(this, e, n), !!this.bestResult) {
      if (this.tidyStrategy = !1, !t?.tidy && ol.call(this, this.bestResult, e)) {
        e.algoBenchmark = this.bestResult;
        try {
          const r = await new cr(this, e, n).run();
          if (!r) return;
          await gt.call(this, r.result), delete e.algoBenchmark;
        } catch (i) {
          console.error("error with evo", i);
        }
        ae({
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
              const c = a.rot === 1, l = c ? a.w : a.l, u = c ? a.l : a.w;
              return {
                added: !0,
                autoId: a.autoId || a.id,
                getPositionedOuterBoundary() {
                  return [
                    { x: a.x, y: a.y },
                    { x: a.x + l, y: a.y },
                    { x: a.x + l, y: a.y + u },
                    { x: a.x, y: a.y + u }
                  ];
                },
                getPositionedHoles() {
                  return [];
                }
              };
            }), o = ds(
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
    if (!ut(e)) throw new Error("no rotation provided");
    if (!ut(t))
      throw new Error("first shape not provided to defaultFirstShapePlacement");
    if (typeof t != "object")
      throw new Error("first shape is not an object");
    if (t.added)
      throw new Error(`first shape ${t.id} has been added previously`);
    if (!n)
      throw new Error("no stock provided to defaultFirstShapePlacement");
    if (t.rot !== e && !Xt(t, e, n))
      throw new Error(`first shape ${t.id} cannot rotate to: ${e}`);
    At(t, e, n), t.resetBothScores(), os.call(
      this,
      t,
      n,
      $n.call(this, n, n, t),
      []
    ), t.addToStock(n), t.firstShape.isFirstShape = !0, t.placementOrder = 0, B(t) ? (t.placeMyShapes(n), this.counters.placement = t.shapes.length) : this.counters.placement = 1;
  },
  /**
   * try all first shapes with both rotations if relevant
   */
  tryFirstShapes: async function(t, e) {
    const n = ct(e, t);
    let i = cs.call(
      this,
      "efficiency",
      n,
      t
    );
    const r = Rt(n, !1, !0);
    let s = r.length > 1;
    s && n.reduce((c, l) => c + l.area, 0) < t.area * this.config.groups.shapeAreaCutOff && (s = !1);
    let o = [];
    s && !this.hasMinSpacing && this.config.groups.efficiency.firstShapes && r.length < this.config.groups.efficiency.limit && (o = Gt.createFirstShapeGroups.call(
      this,
      n,
      t
    )), i.push(...o);
    let a = e;
    i = Rt(i, !1, !0);
    for (const c of i)
      c.firstShape.isFirstShape = !0, B(c) && (a = lr(
        c.shapes,
        n
      ), a.unshift(c)), await Gt.calculateFirstShapeRotations.call(
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
    const i = Ge(n, e);
    for (const r of i) {
      this.resetShapes(t, !1, !1), n.added = !1, B(n) && (n.placeMyShapes(e), t.unshift(...n.shapes), t = t.filter((o) => o.id !== n.id));
      const s = await Er.call(
        this,
        t,
        e,
        n,
        r
      );
      ut(s.score) && await gt.call(this, s);
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
    if (nt(e) && (e.used = !1), this.resetShapes(t, !0, !1), typeof n == "string")
      n = this.shapeList.find((l) => l.id === n);
    else if (Ve(n) || Us(n)) {
      const l = n.autoId || n.id;
      n = this.shapeList.find((u) => u.autoId === l || u.id === l);
    }
    if (!n)
      throw new Error("firstShape not found in shapeList");
    if (n.reset(), t.length) {
      if (r) {
        this.weighting.custom = {};
        for (const l of Object.keys(this.weighting.efficiency.standard()))
          this.weighting.custom[l] = r[l] ? r[l] : 0;
      }
      Gt.defaultFirstShapePlacement.call(
        this,
        n,
        i,
        e
      ), await hn.call(
        this,
        t,
        n,
        e
      );
    }
    const o = Et.call(
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
    const n = ct(t, e).filter((o) => z(o)), i = ["l", "w"], r = /* @__PURE__ */ new Map();
    for (const o of i)
      Ei({
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
      () => E(s.every((o) => A.lessThanOrEqualTo(o.l, e.l) && A.lessThanOrEqualTo(o.w, e.w)), "groups larger than container").to.be.true
    ]), s.length ? s : [];
  },
  /**
   * should tidy run?
   */
  shouldUseTidy: function(t, e) {
    return !this.config.efficiency.tidy || e?.saw?.stockType === "roll" || !t ? !1 : t.score.efficiency < 0.9 && e.cutType === "efficiency";
  }
};
function ka(t, e = 36) {
  const n = t.length;
  if (n < 4) return new Array(e).fill(0);
  const i = [], r = De(t);
  for (let a = 0; a < n - 1; a++) {
    const c = t[(a - 1 + n - 1) % (n - 1)], l = t[a], u = t[(a + 1) % (n - 1)], h = l.x - c.x, f = l.y - c.y, d = u.x - l.x, p = u.y - l.y, S = h * p - f * d, y = Math.atan2(l.y - r.y, l.x - r.x);
    i.push({ angle: y, curvature: S });
  }
  i.sort((a, c) => a.angle - c.angle);
  const s = [], o = 2 * Math.PI / e;
  for (let a = 0; a < e; a++) {
    const c = -Math.PI + a * o;
    let l = i[0], u = 1 / 0;
    for (const h of i) {
      let f = Math.abs(h.angle - c);
      f > Math.PI && (f = 2 * Math.PI - f), f < u && (u = f, l = h);
    }
    s.push(l.curvature);
  }
  return s;
}
function Ra(t, e, n) {
  const i = t.length;
  let r = 0, s = 0;
  for (let o = 0; o < i; o++) {
    const a = t[o], c = e[(o + n + i) % i];
    a !== 0 && c !== 0 && (Math.sign(a) !== Math.sign(c) && (r += Math.min(Math.abs(a), Math.abs(c))), s++);
  }
  return s > 0 ? r / s : 0;
}
function Aa(t, e = 36, n = 3) {
  const i = [];
  for (const o of t)
    !o.outline?.length || o.outline.length < 4 || i.push({
      shapeId: o.autoId,
      samples: ka(o.outline, e),
      sampleAngles: Array.from({ length: e }, (a, c) => -Math.PI + c * (2 * Math.PI / e)),
      outline: o.outline
    });
  const r = [], s = 2 * Math.PI / e;
  for (let o = 0; o < i.length; o++) {
    const a = i[o], c = [];
    for (let l = o + 1; l < i.length; l++) {
      const u = i[l];
      let h = 0, f = 0;
      for (let d = 0; d < e; d++) {
        const p = Ra(a.samples, u.samples, d);
        p > h && (h = p, f = d);
      }
      if (h > 0) {
        const d = f * s, p = De(a.outline), S = De(u.outline), y = mt(a.outline);
        c.push({
          shapeAId: a.shapeId,
          shapeBId: u.shapeId,
          optimalRotationB: d,
          complementScore: h,
          translationHint: {
            dx: p.x - S.x + y.width * 0.5,
            dy: p.y - S.y
          }
        });
      }
    }
    c.sort((l, u) => u.complementScore - l.complementScore), r.push(...c.slice(0, n));
  }
  return r.sort((o, a) => a.complementScore - o.complementScore), r;
}
function ps(t, e, n) {
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
function Da(t, e) {
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
function mi(t, e) {
  return Nt(
    e === 0 ? t : qt(t, e)
  );
}
class Ma {
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
    const s = Da(e.outline, n);
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
    const l = mi(e.outline, n), u = mi(i.outline, r), h = da(l, u, this.spacing);
    return this.cache.set(a, h), h;
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
function La(t) {
  if (!t.length) return "";
  let e = t;
  const n = t[t.length - 1];
  return t.length > 1 && Math.abs(t[0].x - n.x) < 0.1 && Math.abs(t[0].y - n.y) < 0.1 && (e = t.slice(0, -1)), e.map((r) => ({ x: Math.round(r.x * 10) / 10, y: Math.round(r.y * 10) / 10 })).sort((r, s) => r.x - s.x || r.y - s.y).map((r) => `${r.x},${r.y}`).join("|");
}
function Oa(t, e) {
  if (!t?.length || t.length < 3) return e;
  const n = /* @__PURE__ */ new Set(), i = [];
  for (const r of e) {
    const s = Nt(
      r === 0 ? t : qt(t, r)
    ), o = La(s);
    n.has(o) || (n.add(o), i.push(r));
  }
  return i;
}
const Le = {
  compression: 0.4134,
  crossAxis: 0.019,
  edge: 0,
  compact: 0.0839,
  fit: 24e-4,
  axis: 0,
  contour: 0.0297,
  cavity: 0
};
class Ga {
  cache = /* @__PURE__ */ new Map();
  key(e, n) {
    return n === 0 ? e : `${e}:${n}`;
  }
  getNormalized(e, n) {
    const i = this.key(e.autoId, n);
    let r = this.cache.get(i);
    if (!r) {
      const s = n === 0 ? e.outline : qt(e.outline, n);
      r = Nt(s), this.cache.set(i, r);
    }
    return r;
  }
  clear() {
    this.cache.clear();
  }
}
class kn {
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
function Fa(t, e, n) {
  let r = 0, s = 0;
  for (let o = 0; o < t.length; o++) {
    const a = t[o], c = t[(o + 1) % t.length], l = c.x - a.x, u = c.y - a.y, h = Math.sqrt(l * l + u * u);
    if (s += h, h < 0.5) continue;
    const f = Math.abs(a.y) < 0.5 && Math.abs(c.y) < 0.5, d = Math.abs(a.x) < 0.5 && Math.abs(c.x) < 0.5, p = Math.abs(a.y - n) < 0.5 && Math.abs(c.y - n) < 0.5, S = Math.abs(a.x - e) < 0.5 && Math.abs(c.x - e) < 0.5;
    (f || d || p || S) && (r += h);
  }
  return s > 0 ? r / s : 0;
}
function Ba(t, e, n) {
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
      const a = e[o], c = Math.max(0, t.minX - a.bounds.maxX, a.bounds.minX - t.maxX), l = Math.max(0, t.minY - a.bounds.maxY, a.bounds.minY - t.maxY), u = Math.sqrt(c * c + l * l);
      u < i && (i = u);
    }
  } else
    for (const r of e) {
      const s = Math.max(0, t.minX - r.bounds.maxX, r.bounds.minX - t.maxX), o = Math.max(0, t.minY - r.bounds.maxY, r.bounds.minY - t.maxY), a = Math.sqrt(s * s + o * o);
      a < i && (i = a);
    }
  return i;
}
function Xa(t, e, n, i, r, s, o) {
  const a = t.length - 1;
  if (a < 2) return 0;
  const c = s + 5, l = c * c;
  let u = 0;
  const h = {
    minX: e.minX - c,
    minY: e.minY - c,
    maxX: e.maxX + c,
    maxY: e.maxY + c,
    width: e.width + c * 2,
    height: e.height + c * 2
  }, f = [];
  if (o)
    for (const d of o.query(h))
      f.push(n[d]);
  else
    for (const d of n)
      Mt(h, d.bounds) && f.push(d);
  for (let d = 0; d < a; d++) {
    const p = t[d], S = t[d + 1], y = (p.x + S.x) / 2, x = (p.y + S.y) / 2, g = { x: y, y: x };
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
      for (const b of f) {
        for (let I = 0; I < b.polygon.length - 1; I++) {
          const w = te(g, b.polygon[I], b.polygon[I + 1]);
          if (w < m && (m = w, m <= l))
            break;
        }
        if (m <= l) break;
      }
    m <= l && u++;
  }
  return u / a;
}
function yi(t, e, n, i, r, s, o, a, c, l, u, h, f, d, p, S) {
  const y = s === "x" ? n : i, x = s === "x" ? i : n;
  if (d === void 0) {
    d = 0;
    for (const F of a) {
      const C = s === "x" ? F.bounds.maxX : F.bounds.maxY;
      C > d && (d = C);
    }
  }
  const g = l ? s === "x" ? l.maxX : l.maxY : s === "x" ? t : e, m = g > d ? g / y : (s === "x" ? t : e) / y * 0.5, b = s === "x" ? e / x : t / x, I = c ? Fa(c, n, i) : 0, w = l ? l.maxX - l.minX : 100, $ = l ? l.maxY - l.minY : 100, P = Math.sqrt(w * w + $ * $), T = l ? Ba(l, a, p) : 0, M = Math.min(T / P, 1), R = !S && c && l && a.length > 0 ? Xa(c, l, a, n, i, h, p) : 0, O = u % (Math.PI / 2), Y = Math.min(O, Math.PI / 2 - O) / (Math.PI / 4);
  let G = 0;
  if (o && a.length > 0) {
    const F = a.find((C) => C.shape.autoId === o.shapeAId);
    if (F) {
      const C = t - (F.x + o.translationHint.dx), L = e - (F.y + o.translationHint.dy), V = Math.sqrt(C * C + L * L);
      G = o.complementScore / (1 + V / 100);
    }
  }
  let v = 0;
  if (a.length > 0 && l) {
    const F = l.minX + l.width / 2, C = l.minY + l.height / 2;
    for (const L of a)
      if (Mt(l, L.bounds) && F >= L.bounds.minX && F <= L.bounds.maxX && C >= L.bounds.minY && C <= L.bounds.maxY && !Vt({ x: F, y: C }, L.polygon)) {
        v = 0.8;
        break;
      }
  }
  const D = f || Le;
  return D.compression * m + D.crossAxis * b - D.edge * I + D.compact * M - D.fit * R + D.axis * Y - D.contour * G - D.cavity * v;
}
function qa(t, e, n, i, r) {
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
      if (Mt(s, a.bounds) && Me(t, a.polygon, i))
        return !0;
    }
  else
    for (const o of n)
      if (Mt(s, o.bounds) && Me(t, o.polygon, i))
        return !0;
  return !1;
}
function Na(t, e, n, i) {
  const r = i.get(t.shape, t.rotation, e, n);
  if (!r || r.length === 0) return { contours: [], bounds: [] };
  const s = [], o = [];
  for (const a of r) {
    const c = ue(a, t.x, t.y);
    s.push(c), o.push(mt(c));
  }
  return { contours: s, bounds: o };
}
function Ya(t) {
  const e = [];
  for (const n of t)
    for (let i = 0; i < n.contours.length; i++) {
      const r = n.bounds[i];
      e.push({ contour: n.contours[i], minX: r.minX, minY: r.minY, maxX: r.maxX, maxY: r.maxY });
    }
  return e;
}
function Wa(t, e, n) {
  if (!Vt(t, e)) return !1;
  const i = t.x, r = t.y;
  for (let s = 0; s < n.length; s++) {
    const o = n[s];
    if (!(i < o.minX || i > o.maxX || r < o.minY || r > o.maxY) && Vt(t, o.contour))
      return !1;
  }
  return !0;
}
function za(t, e, n, i, r, s, o) {
  const a = /* @__PURE__ */ new Set(), c = [], l = 0.5;
  function u(m, b) {
    const I = `${Math.round(m / l)},${Math.round(b / l)}`;
    a.has(I) || (a.add(I), c.push({ x: m, y: b }));
  }
  for (const m of t)
    u(m.x, m.y);
  const h = t.length - (t[0].x === t[t.length - 1].x && t[0].y === t[t.length - 1].y ? 1 : 0);
  for (let m = 0; m < h; m++) {
    const b = t[m], I = t[(m + 1) % t.length];
    for (let w = 0.25; w <= 0.75; w += 0.25)
      u(b.x + (I.x - b.x) * w, b.y + (I.y - b.y) * w);
  }
  const f = n.length < 60;
  for (const m of n)
    for (const b of m.contours) {
      const I = b.length - (b.length > 1 && b[0].x === b[b.length - 1].x && b[0].y === b[b.length - 1].y ? 1 : 0);
      for (let w = 0; w < I; w++)
        if (u(b[w].x, b[w].y), f) {
          const $ = b[(w + 1) % b.length];
          u((b[w].x + $.x) / 2, (b[w].y + $.y) / 2);
        }
    }
  for (const m of n)
    for (let b = 0; b < m.contours.length; b++) {
      if (!Mt(m.bounds[b], e)) continue;
      const I = fi(m.contours[b], t);
      for (const w of I)
        u(w.x, w.y);
    }
  const d = n.length > 100 ? 5 : 8;
  let p = n;
  if (n.length > d) {
    const m = (e.minX + e.maxX) / 2, b = (e.minY + e.maxY) / 2, I = n.map((w, $) => {
      const P = w.bounds[0], T = (P.minX + P.maxX) / 2, M = (P.minY + P.maxY) / 2;
      return { idx: $, dist: (T - m) ** 2 + (M - b) ** 2 };
    });
    I.sort((w, $) => w.dist - $.dist), p = I.slice(0, d).map((w) => n[w.idx]);
  }
  for (let m = 0; m < p.length; m++)
    for (let b = m + 1; b < p.length; b++)
      for (let I = 0; I < p[m].contours.length; I++) {
        const w = p[m].bounds[I];
        for (let $ = 0; $ < p[b].contours.length; $++) {
          if (!Mt(w, p[b].bounds[$])) continue;
          const P = fi(p[m].contours[I], p[b].contours[$]);
          for (const T of P)
            u(T.x, T.y);
        }
      }
  if (i && r.length > 0) {
    const m = r.find((b) => b.shape.autoId === i.shapeAId);
    m && u(
      m.x + i.translationHint.dx,
      m.y + i.translationHint.dy
    );
  }
  const S = r.length, y = S < 50 ? 20 : S < 150 ? 10 : 5, x = S < 100 ? 0.5 : 1;
  let g = 0;
  for (const m of r) {
    if (g >= y) break;
    if (m.convex) continue;
    const b = m.bounds.width * m.bounds.height, I = m.shape.trueArea || m.shape.area || b;
    if (b - I < o.width * o.height * 0.5) continue;
    g++;
    const $ = Math.max(o.width, o.height) * x;
    if (!($ < 1))
      for (let P = m.bounds.minX; P <= m.bounds.maxX - o.width; P += $)
        for (let T = m.bounds.minY; T <= m.bounds.maxY - o.height; T += $) {
          const M = P + o.width / 2, R = T + o.height / 2;
          Vt({ x: M, y: R }, m.polygon) || u(P, T);
        }
  }
  return s === "x" ? c.sort((m, b) => m.x - b.x) : c.sort((m, b) => m.y - b.y), c;
}
function gs(t, e, n, i, r, s, o, a, c) {
  const l = c ? c.getNormalized(t, n) : Nt(n === 0 ? e : qt(e, n)), u = mt(l), h = pa(i.l, i.w, u);
  if (h.length === 0) return null;
  const f = mt(h), d = [], p = r.length >= 80;
  let S = 0;
  if (p) {
    let v = 0;
    for (const D of r) {
      const F = s.compressionAxis === "x" ? D.bounds.maxX : D.bounds.maxY;
      F > v && (v = F);
    }
    S = Math.max(0, v * 0.1);
  }
  for (const v of r) {
    if (p && (s.compressionAxis === "x" ? v.bounds.maxX : v.bounds.maxY) < S)
      continue;
    const D = Na(v, t, n, s.nfpCache);
    D.contours.length > 0 && d.push(D);
  }
  const y = za(
    h,
    f,
    d,
    o,
    r,
    s.compressionAxis,
    u
  ), x = Ya(d);
  let g = null;
  const m = s.spacing, b = l.map((v) => ({ x: v.x, y: v.y })), I = {
    minX: 0,
    minY: 0,
    maxX: u.width,
    maxY: u.height,
    width: u.width,
    height: u.height
  };
  let w = 0;
  for (const v of r) {
    const D = s.compressionAxis === "x" ? v.bounds.maxX : v.bounds.maxY;
    D > w && (w = D);
  }
  const $ = r.length >= 30, P = 12;
  let T = [];
  const M = (v, D) => {
    if (!Wa({ x: v, y: D }, h, x)) return;
    for (let C = 0; C < l.length; C++)
      b[C].x = l[C].x + v, b[C].y = l[C].y + D;
    if (I.minX = v, I.minY = D, I.maxX = v + u.width, I.maxY = D + u.height, qa(b, I, r, m, a)) return;
    const F = yi(
      v,
      D,
      i.l,
      i.w,
      s.strategy,
      s.compressionAxis,
      o,
      r,
      b,
      I,
      n,
      s.spacing,
      s.scoringWeights,
      w,
      a,
      $
      // skip measureFit in cheap pass
    );
    if ($)
      if (T.length < P)
        T.push({ x: v, y: D, score: F });
      else {
        let C = 0;
        for (let L = 1; L < T.length; L++)
          T[L].score > T[C].score && (C = L);
        F < T[C].score && (T[C] = { x: v, y: D, score: F });
      }
    else
      (!g || F < g.score) && (g = { x: v, y: D, score: F });
  }, R = s.scoringWeights?.compression ?? Le.compression, O = s.compressionAxis === "x";
  for (const v of y) {
    if (g || $ && T.length >= P) {
      const D = $ ? T.reduce((C, L) => L.score > C ? L.score : C, -1 / 0) : g.score;
      if ((O ? v.x / i.l * R * 0.5 : v.y / i.w * R * 0.5) > D) break;
    }
    M(v.x, v.y);
  }
  if (!(g && r.length >= 10 && (s.compressionAxis === "x" ? g.x + u.width <= w * 1.01 : g.y + u.height <= w * 1.01))) {
    const v = Math.max(1, Math.min(u.width, u.height) / 4), D = s.compressionAxis === "x", F = s.scoringWeights?.compression ?? Le.compression;
    if (D)
      for (let C = f.minX; C <= f.maxX && !(g && C / i.l * F > g.score); C += v)
        for (let L = f.minY; L <= f.maxY; L += v)
          M(C, L);
    else
      for (let C = f.minY; C <= f.maxY && !(g && C / i.w * F > g.score); C += v)
        for (let L = f.minX; L <= f.maxX; L += v)
          M(L, C);
  }
  const G = $ ? T.length > 0 ? T.reduce((v, D) => v.score < D.score ? v : D) : null : g;
  if (G) {
    const v = Math.max(1, Math.min(u.width, u.height) / 4), D = v / 2;
    for (let F = -v; F <= v; F += D)
      for (let C = -v; C <= v; C += D)
        M(G.x + F, G.y + C);
  }
  if ($ && T.length > 0)
    for (const v of T) {
      for (let F = 0; F < l.length; F++)
        b[F].x = l[F].x + v.x, b[F].y = l[F].y + v.y;
      I.minX = v.x, I.minY = v.y, I.maxX = v.x + u.width, I.maxY = v.y + u.height;
      const D = yi(
        v.x,
        v.y,
        i.l,
        i.w,
        s.strategy,
        s.compressionAxis,
        o,
        r,
        b,
        I,
        n,
        s.spacing,
        s.scoringWeights,
        w,
        a,
        !1
        // full scoring with measureFit
      );
      (!g || D < g.score) && (g = { x: v.x, y: v.y, score: D });
    }
  return g;
}
async function Ha(t, e, n) {
  const i = ja(e);
  if (i.length <= 1) {
    const s = ms(t, i[0].shapes, n);
    let o = 0;
    const a = new Map(e.map((l) => [l.autoId, l])), c = Be(s, a);
    for (const l of c) {
      const u = n.compressionAxis === "x" ? l.bounds.maxX : l.bounds.maxY;
      u > o && (o = u);
    }
    return console.log(`[nesting] Single ordering: "${i[0].name}" extent=${o.toFixed(1)}`), s;
  }
  console.log(`[nesting] Parallel multi-start: launching ${i.length} orderings via worker threads`);
  const r = await Ua(t, i, n);
  return r || (console.log("[nesting] Worker threads unavailable, falling back to sequential"), Va(t, e, i, n));
}
function ja(t) {
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
async function Ua(t, e, n) {
  let i;
  try {
    i = (await import("./__vite-browser-external-CmboaQAx.js").then((l) => l._)).Worker;
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
    (l) => new Promise((u, h) => {
      const f = new i(a, {
        workerData: {
          stockData: s,
          shapesData: l.shapes.map(o),
          optionsData: r,
          orderingName: l.name
        }
      });
      f.on("message", (d) => {
        u(d);
      }), f.on("error", (d) => {
        console.error(`[nesting] Worker error (${l.name}):`, d.message), h(d);
      }), f.on("exit", (d) => {
        d !== 0 && h(new Error(`Worker (${l.name}) exited with code ${d}`));
      });
    })
  );
  try {
    const l = await Promise.all(c);
    let u = l[0];
    for (const f of l)
      (f.placements.length > u.placements.length || f.placements.length === u.placements.length && f.extent < u.extent) && (u = f);
    const h = l.map((f) => `${f.orderingName}=${f.cacheSize}`).join(", ");
    return console.log(`[nesting] Parallel multi-start: best="${u.orderingName}" extent=${u.extent.toFixed(1)} placed=${u.placements.length} from ${e.length} orderings (cache: ${h})`), u.placements;
  } catch (l) {
    return console.error("[nesting] Parallel execution failed:", l), null;
  }
}
function Va(t, e, n, i) {
  let r = [], s = 1 / 0, o = "";
  for (const a of n) {
    const c = ms(t, a.shapes, i);
    let l = 0;
    const u = new Map(e.map((f) => [f.autoId, f])), h = Be(c, u);
    for (const f of h) {
      const d = i.compressionAxis === "x" ? f.bounds.maxX : f.bounds.maxY;
      d > l && (l = d);
    }
    (c.length > r.length || c.length === r.length && l < s) && (r = c, s = l, o = a.name);
  }
  return console.log(`[nesting] Sequential multi-start: best="${o}" extent=${s.toFixed(1)} from ${n.length} orderings`), r;
}
function ms(t, e, n) {
  const i = [], r = [], s = /* @__PURE__ */ new Set(), o = Math.max(t.l, t.w) / 10, a = new kn(t.l, t.w, o), c = new Ga();
  let l = 0;
  for (const u of e) {
    l++;
    const h = r.length >= 150 ? 1 : r.length >= 50 ? 10 : 50;
    if ((l % h === 0 || l === e.length) && ((l % 50 === 0 || l === e.length) && console.log(`[nesting]   placing ${l}/${e.length} (${i.length} placed so far, NFP cache: ${n.nfpCache.size})`), n.onProgress?.(i.length, e.length)), !u.outline?.length || u.outline.length < 3) continue;
    const f = ps(
      u.autoId,
      s,
      n.contourMatches
    );
    let d = null, p = 1 / 0;
    const S = n.shapeRotationMap?.get(u.autoId) || n.rotationSteps;
    let y = 0, x = n.compressionAxis === "x" ? t.w : t.l;
    if (r.length > 0) {
      for (const T of r) {
        const M = n.compressionAxis === "x" ? T.bounds.maxX : T.bounds.maxY;
        M > y && (y = M);
      }
      const $ = y * 0.8;
      let P = 0;
      for (const T of r)
        if ((n.compressionAxis === "x" ? T.bounds.maxX : T.bounds.maxY) >= $) {
          const R = n.compressionAxis === "x" ? T.bounds.maxY : T.bounds.maxX;
          R > P && (P = R);
        }
      x = (n.compressionAxis === "x" ? t.w : t.l) - P;
    }
    const g = [], m = n.compressionAxis === "x" ? t.l : t.w, b = n.compressionAxis === "x" ? t.w : t.l;
    for (const $ of S) {
      const P = mt(c.getNormalized(u, $)), T = n.compressionAxis === "x" ? P.width : P.height, M = n.compressionAxis === "x" ? P.height : P.width;
      let R = 0;
      R += T / m * 0.5, M > x && x > 0 && (R += (M - x) / b * 0.3), R += M / b * 0.1, f && Math.abs($ - f.optimalRotationB) < 0.01 && (R -= 0.3);
      const O = $ % (Math.PI / 2), Y = Math.min(O, Math.PI / 2 - O) / (Math.PI / 4);
      R += Y * 0.1, g.push({ rotation: $, score: R });
    }
    g.sort(($, P) => $.score - P.score);
    const I = r.length < 30 ? S.length : r.length < 150 ? Math.min(4, g.length) : Math.min(3, g.length), w = g.slice(0, I);
    for (const { rotation: $ } of w) {
      const P = gs(
        u,
        u.outline,
        $,
        t,
        r,
        n,
        f,
        a,
        c
      );
      P && P.score < p && (p = P.score, d = {
        shapeAutoId: u.autoId,
        x: P.x,
        y: P.y,
        rotation: $
      });
    }
    if (d) {
      i.push(d);
      const $ = c.getNormalized(u, d.rotation), P = ue($, d.x, d.y), T = mt(P), M = {
        shape: u,
        x: d.x,
        y: d.y,
        rotation: d.rotation,
        bounds: T,
        polygon: P,
        convex: Jt(P)
      };
      r.push(M), a.insert(r.length - 1, T), s.add(u.autoId);
    }
  }
  return i;
}
const Ja = {
  maxIterations: 5e3,
  initialTemp: 1,
  coolingRate: 0.997,
  moveTypes: ["shift", "swap", "rotate", "slide", "slideX"]
};
function Be(t, e) {
  const n = [];
  for (const i of t) {
    const r = e.get(i.shapeAutoId);
    if (!r || !r.outline?.length) continue;
    const s = i.rotation === 0 ? r.outline : qt(r.outline, i.rotation), o = Nt(s), a = ue(o, i.x, i.y), c = mt(a);
    n.push({ shape: r, x: i.x, y: i.y, rotation: i.rotation, bounds: c, polygon: a, convex: Jt(a) });
  }
  return n;
}
function ye(t, e, n, i) {
  if (t.length === 0) return 0;
  let r = 0, s = 0, o = 0, a = 0;
  for (const d of t) {
    const p = i === "x" ? d.bounds.maxX : d.bounds.maxY, S = i === "x" ? d.bounds.maxY : d.bounds.maxX;
    p > r && (r = p), S > s && (s = S), o += p, a += d.shape.trueArea || d.shape.area || 0;
  }
  const c = i === "x" ? e : n, l = o / t.length / c, u = r / c, h = r * s, f = h > 0 ? 1 - a / h : 0;
  return l * 0.5 + u * 0.35 + f * 0.15;
}
function se(t, e, n, i, r, s) {
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
      if (c !== t && Mt(a, e[c].bounds) && Me(o.polygon, e[c].polygon, r))
        return !1;
  } else
    for (let c = 0; c < e.length; c++)
      if (c !== t && Mt(a, e[c].bounds) && Me(o.polygon, e[c].polygon, r))
        return !1;
  return !0;
}
function Ft(t, e, n, i) {
  const r = i === 0 ? t.outline : qt(t.outline, i), s = Nt(r), o = ue(s, e, n), a = mt(o);
  return { shape: t, x: e, y: n, rotation: i, bounds: a, polygon: o, convex: Jt(o) };
}
function Za(t, e, n, i) {
  if (e === "shift") {
    const r = Math.max(t.shape.l, t.shape.w) * n * 2, s = (Math.random() - 0.5) * 2 * r, o = (Math.random() - 0.5) * 2 * r;
    return Ft(t.shape, t.x + s, t.y + o, t.rotation);
  } else if (e === "rotate") {
    const r = i[Math.floor(Math.random() * i.length)];
    return Ft(t.shape, t.x, t.y, r);
  }
  return t;
}
function Se(t, e, n, i, r, s, o, a) {
  const c = e[t], l = n === "x" ? c.x : c.y;
  if (Math.abs(l - i) < 0.5) return null;
  const u = i < l;
  let h = u ? i : l, f = u ? l : i, d = null;
  const p = Nt(
    c.rotation === 0 ? c.shape.outline : qt(c.shape.outline, c.rotation)
  ), S = mt(p), y = p.map((g) => ({ x: g.x, y: g.y })), x = {
    minX: 0,
    minY: 0,
    maxX: S.width,
    maxY: S.height,
    width: S.width,
    height: S.height
  };
  for (let g = 0; g < 12; g++) {
    const m = (h + f) / 2, b = n === "x" ? m : c.x, I = n === "y" ? m : c.y;
    for (let T = 0; T < p.length; T++)
      y[T].x = p[T].x + b, y[T].y = p[T].y + I;
    x.minX = b, x.minY = I, x.maxX = b + S.width, x.maxY = I + S.height;
    const w = y.map((T) => ({ x: T.x, y: T.y })), $ = {
      shape: c.shape,
      x: b,
      y: I,
      rotation: c.rotation,
      bounds: { ...x },
      polygon: w,
      convex: Jt(w)
    }, P = e[t];
    e[t] = $, se(t, e, r, s, o, a) ? (d = $, u ? f = m : h = m) : u ? h = m : f = m, e[t] = P;
  }
  if (d) {
    const g = n === "x" ? d.x : d.y;
    if (Math.abs(g - l) > 0.5)
      return d;
  }
  return null;
}
function It(t, e, n, i, r, s, o) {
  return Se(t, e, n, 0, i, r, s, o);
}
function _a(t, e, n, i, r = {}) {
  if (t.length < 2)
    return {
      placements: t,
      stats: { initialEnergy: 0, finalEnergy: 0, bestEnergy: 0, accepted: 0, improving: 0, iterations: 0, improved: !1 }
    };
  const s = { ...Ja, ...r }, o = new Map(e.map((m) => [m.autoId, m])), a = i.compressionAxis;
  let c = t.map((m) => ({ ...m })), l = Be(c, o), u = ye(l, n.l, n.w, a);
  const h = u;
  let f = c.map((m) => ({ ...m })), d = u, p = s.initialTemp, S = 0, y = 0;
  const x = Math.max(n.l, n.w) / 10, g = new kn(n.l, n.w, x);
  g.rebuild(l);
  for (let m = 0; m < s.maxIterations; m++) {
    m % 500 === 0 && i.onProgress?.(t.length, t.length);
    const b = s.moveTypes[Math.floor(Math.random() * s.moveTypes.length)];
    if (b === "swap" && c.length >= 2) {
      const I = Math.floor(Math.random() * c.length);
      let w = Math.floor(Math.random() * (c.length - 1));
      w >= I && w++;
      const $ = o.get(c[I].shapeAutoId), P = o.get(c[w].shapeAutoId);
      if (!$ || !P) continue;
      const T = $.trueArea || $.area || 1, M = P.trueArea || P.area || 1;
      if ((T > M ? T / M : M / T) > 3) continue;
      const O = c[w].x, Y = c[w].y, G = c[I].x, v = c[I].y, D = l.slice();
      if (D[I] = Ft($, O, Y, c[I].rotation), D[w] = Ft(P, G, v, c[w].rotation), se(I, D, n.l, n.w, i.spacing) && se(w, D, n.l, n.w, i.spacing)) {
        const F = ye(D, n.l, n.w, a), C = F - u;
        (C < 0 || Math.random() < Math.exp(-C / p)) && (c[I] = { shapeAutoId: $.autoId, x: O, y: Y, rotation: c[I].rotation }, c[w] = { shapeAutoId: P.autoId, x: G, y: v, rotation: c[w].rotation }, l = D, g.rebuild(l), u = F, S++, C < 0 && y++, u < d && (f = c.map((L) => ({ ...L })), d = u));
      }
    } else if (b === "slide" || b === "slideX") {
      const I = b === "slide" ? a : a === "x" ? "y" : "x", w = Math.floor(Math.random() * l.length), $ = It(w, l, I, n.l, n.w, i.spacing, g);
      $ && (g.remove(w, l[w].bounds), l[w] = $, g.insert(w, $.bounds), c[w] = {
        shapeAutoId: $.shape.autoId,
        x: $.x,
        y: $.y,
        rotation: $.rotation
      }, u = ye(l, n.l, n.w, a), S++, y++, u < d && (f = c.map((P) => ({ ...P })), d = u));
    } else {
      const I = b === "swap" ? "shift" : b, w = Math.floor(Math.random() * l.length), $ = l[w], P = i.shapeRotationMap?.get($.shape.autoId) || i.rotationSteps, T = Za($, I, p, P), M = l[w];
      if (g.remove(w, M.bounds), l[w] = T, g.insert(w, T.bounds), se(w, l, n.l, n.w, i.spacing, g)) {
        const R = ye(l, n.l, n.w, a), O = R - u;
        O < 0 || Math.random() < Math.exp(-O / p) ? (c[w] = {
          shapeAutoId: T.shape.autoId,
          x: T.x,
          y: T.y,
          rotation: T.rotation
        }, u = R, S++, O < 0 && y++, u < d && (f = c.map((Y) => ({ ...Y })), d = u)) : (g.remove(w, T.bounds), l[w] = M, g.insert(w, M.bounds));
      } else
        g.remove(w, T.bounds), l[w] = M, g.insert(w, M.bounds);
    }
    p *= s.coolingRate;
  }
  return {
    placements: f,
    stats: {
      initialEnergy: h,
      finalEnergy: u,
      bestEnergy: d,
      accepted: S,
      improving: y,
      iterations: s.maxIterations,
      improved: d < h
    }
  };
}
function xt(t, e, n) {
  t[e] = { shapeAutoId: n.shape.autoId, x: n.x, y: n.y, rotation: n.rotation };
}
function Ka(t, e, n, i) {
  const r = new Map(e.map((y) => [y.autoId, y])), s = t.map((y) => ({ ...y }));
  let o = Be(s, r);
  const a = Math.max(n.l, n.w) / 10, c = new kn(n.l, n.w, a), l = i.compressionAxis, u = l === "x" ? "y" : "x";
  let h = 0;
  for (let y = 0; y < 5; y++) {
    i.onProgress?.(t.length, t.length);
    let x = 0;
    c.rebuild(o);
    const g = [...Array(o.length).keys()].sort((m, b) => {
      const I = l === "x" ? o[m].bounds.maxX : o[m].bounds.maxY;
      return (l === "x" ? o[b].bounds.maxX : o[b].bounds.maxY) - I;
    });
    for (const m of g) {
      let b = o[m].x, I = o[m].y, w = o[m].rotation, $ = l === "x" ? o[m].bounds.maxX : o[m].bounds.maxY;
      const P = It(m, o, l, n.l, n.w, i.spacing, c);
      P && (c.remove(m, o[m].bounds), o[m] = P, c.insert(m, P.bounds), xt(s, m, P));
      const T = It(m, o, u, n.l, n.w, i.spacing, c);
      T && (c.remove(m, o[m].bounds), o[m] = T, c.insert(m, T.bounds), xt(s, m, T));
      const M = l === "x" ? o[m].bounds.maxX : o[m].bounds.maxY;
      M < $ && ($ = M, b = o[m].x, I = o[m].y, w = o[m].rotation);
      const R = i.shapeRotationMap?.get(o[m].shape.autoId) || i.rotationSteps;
      if (R.length > 1) {
        const O = o[m];
        for (const Y of R) {
          if (Math.abs(Y - O.rotation) < 1e-3) continue;
          const G = Ft(O.shape, O.x, O.y, Y), v = o[m];
          if (c.remove(m, v.bounds), o[m] = G, c.insert(m, G.bounds), !se(m, o, n.l, n.w, i.spacing, c)) {
            c.remove(m, G.bounds), o[m] = v, c.insert(m, v.bounds);
            continue;
          }
          const D = It(m, o, l, n.l, n.w, i.spacing, c);
          D && (c.remove(m, o[m].bounds), o[m] = D, c.insert(m, D.bounds));
          const F = It(m, o, u, n.l, n.w, i.spacing, c);
          F && (c.remove(m, o[m].bounds), o[m] = F, c.insert(m, F.bounds));
          const C = l === "x" ? o[m].bounds.maxX : o[m].bounds.maxY;
          C < $ - 0.5 && ($ = C, b = o[m].x, I = o[m].y, w = o[m].rotation), c.remove(m, o[m].bounds), o[m] = v, c.insert(m, v.bounds);
        }
        (w !== O.rotation || b !== O.x || I !== O.y) && (c.remove(m, o[m].bounds), o[m] = Ft(O.shape, b, I, w), c.insert(m, o[m].bounds), xt(s, m, o[m]));
      }
      ($ < (l === "x" ? (P || o[m]).bounds.maxX : (P || o[m]).bounds.maxY) - 0.5 || P || T) && x++;
    }
    if (h += x, x === 0) break;
  }
  for (let y = 0; y < 3; y++) {
    i.onProgress?.(t.length, t.length);
    let x = 0;
    c.rebuild(o);
    for (let g = 0; g < o.length; g++) {
      const m = o[g], b = (m.bounds.minX + m.bounds.maxX) / 2, I = (m.bounds.minY + m.bounds.maxY) / 2;
      let w = 1 / 0, $ = -1;
      for (let R = 0; R < o.length; R++) {
        if (R === g) continue;
        const O = o[R], Y = (O.bounds.minX + O.bounds.maxX) / 2, G = (O.bounds.minY + O.bounds.maxY) / 2, v = (b - Y) ** 2 + (I - G) ** 2;
        v < w && (w = v, $ = R);
      }
      if ($ < 0) continue;
      const P = o[$], T = (P.bounds.minX + P.bounds.maxX) / 2, M = (P.bounds.minY + P.bounds.maxY) / 2;
      if (Math.abs(b - T) > 1) {
        const R = Se(g, o, "x", T < b ? P.bounds.maxX : P.bounds.minX - m.bounds.width, n.l, n.w, i.spacing, c);
        R && (c.remove(g, o[g].bounds), o[g] = R, c.insert(g, R.bounds), xt(s, g, R), x++);
      }
      if (Math.abs(I - M) > 1) {
        const R = Se(g, o, "y", M < I ? P.bounds.maxY : P.bounds.minY - m.bounds.height, n.l, n.w, i.spacing, c);
        R && (c.remove(g, o[g].bounds), o[g] = R, c.insert(g, R.bounds), xt(s, g, R), x++);
      }
    }
    if (h += x, x === 0) break;
  }
  let f = 0, d = 0;
  for (const y of o) {
    const x = y.shape.trueArea || y.shape.area || 1, g = u === "x" ? (y.bounds.minX + y.bounds.maxX) / 2 : (y.bounds.minY + y.bounds.maxY) / 2;
    f += g * x, d += x;
  }
  const p = d > 0 ? f / d : 0;
  for (let y = 0; y < 3; y++) {
    let x = 0;
    c.rebuild(o);
    for (let g = 0; g < o.length; g++) {
      const m = o[g], b = u === "x" ? (m.bounds.minX + m.bounds.maxX) / 2 : (m.bounds.minY + m.bounds.maxY) / 2;
      if (Math.abs(b - p) < 1) continue;
      const I = b > p ? m[u] - (b - p) : m[u] + (p - b), w = Se(g, o, u, I, n.l, n.w, i.spacing, c);
      w && (c.remove(g, o[g].bounds), o[g] = w, c.insert(g, w.bounds), xt(s, g, w), x++);
    }
    if (h += x, x === 0) break;
  }
  for (let y = 0; y < 3; y++) {
    let x = 0;
    c.rebuild(o);
    const g = [...Array(o.length).keys()].sort((m, b) => {
      const I = l === "x" ? o[m].bounds.maxX : o[m].bounds.maxY;
      return (l === "x" ? o[b].bounds.maxX : o[b].bounds.maxY) - I;
    });
    for (const m of g) {
      const b = It(m, o, l, n.l, n.w, i.spacing, c);
      b && (c.remove(m, o[m].bounds), o[m] = b, c.insert(m, b.bounds), xt(s, m, b), x++);
    }
    if (h += x, x === 0) break;
  }
  i.onProgress?.(t.length, t.length);
  for (let y = 0; y < 3; y++) {
    let x = 0, g = 1 / 0;
    for (const C of o) {
      const L = l === "x" ? C.bounds.maxX : C.bounds.maxY;
      L > x && (x = L), L < g && (g = L);
    }
    const m = x - g, I = g + m * (y === 0 ? 0.75 : 0.85), w = [];
    for (let C = 0; C < o.length; C++)
      (l === "x" ? o[C].bounds.maxX : o[C].bounds.maxY) >= I && w.push(C);
    w.sort((C, L) => {
      const V = l === "x" ? o[C].bounds.maxX : o[C].bounds.maxY;
      return (l === "x" ? o[L].bounds.maxX : o[L].bounds.maxY) - V;
    });
    const $ = w.slice(0, 25);
    if ($.length === 0) break;
    console.log(`[nesting] Phase 5 round ${y + 1}: frontier threshold=${I.toFixed(1)}, maxExtent=${x.toFixed(1)}, candidates=${$.length}`);
    const P = s.map((C) => ({ ...C })), T = o.map((C) => ({ ...C })), M = [], R = [...$].sort((C, L) => L - C);
    for (const C of R)
      M.push({ shape: o[C].shape, origIdx: C }), o.splice(C, 1), s.splice(C, 1);
    M.sort((C, L) => {
      const V = C.shape.trueArea || C.shape.area;
      return (L.shape.trueArea || L.shape.area) - V;
    });
    const O = new Set(o.map((C) => C.shape.autoId)), Y = {
      ...i.scoringWeights || Le,
      contour: 0.15
      // 5x boost — strongly favor contour-matching positions
    }, G = { ...i, scoringWeights: Y }, v = M.map((C) => {
      const L = ps(C.shape.autoId, O, i.contourMatches);
      return { ...C, contourScore: L?.complementScore ?? 0, contourMatch: L };
    });
    v.sort((C, L) => {
      if (L.contourScore !== C.contourScore) return L.contourScore - C.contourScore;
      const V = C.shape.trueArea || C.shape.area;
      return (L.shape.trueArea || L.shape.area) - V;
    });
    let D = 0;
    for (const { shape: C, contourMatch: L } of v) {
      if (!C.outline?.length || C.outline.length < 3) continue;
      let V = null, j = 1 / 0;
      const tt = [...i.shapeRotationMap?.get(C.autoId) || i.rotationSteps];
      if (L && L.optimalRotationB !== 0) {
        const K = L.optimalRotationB;
        tt.some((J) => Math.abs(J - K) < 0.01) || tt.push(K);
      }
      for (const K of tt) {
        const J = gs(
          C,
          C.outline,
          K,
          n,
          o,
          G,
          L
        );
        J && J.score < j && (j = J.score, V = {
          shapeAutoId: C.autoId,
          x: J.x,
          y: J.y,
          rotation: K
        });
      }
      V && (s.push(V), o.push(Ft(C, V.x, V.y, V.rotation)), O.add(C.autoId), D++, h++);
    }
    c.rebuild(o);
    for (let C = 0; C < o.length; C++) {
      const L = It(C, o, l, n.l, n.w, i.spacing, c);
      L && (c.remove(C, o[C].bounds), o[C] = L, c.insert(C, L.bounds), xt(s, C, L));
    }
    let F = 0;
    for (const C of o) {
      const L = l === "x" ? C.bounds.maxX : C.bounds.maxY;
      L > F && (F = L);
    }
    if (console.log(`[nesting] Phase 5 round ${y + 1}: re-inserted ${D}/${M.length}, extent ${x.toFixed(1)} → ${F.toFixed(1)}`), F > x) {
      console.log(`[nesting] Phase 5 round ${y + 1}: rollback (extent increased)`), s.length = 0, o.length = 0;
      for (const C of P) s.push(C);
      for (const C of T) o.push(C);
      break;
    }
    if (F >= x * 0.99) break;
  }
  for (let y = 0; y < 3; y++) {
    let x = 0;
    const g = [...Array(o.length).keys()].sort((m, b) => {
      const I = l === "x" ? o[m].bounds.maxX : o[m].bounds.maxY;
      return (l === "x" ? o[b].bounds.maxX : o[b].bounds.maxY) - I;
    });
    for (const m of g) {
      const b = It(m, o, l, n.l, n.w, i.spacing, c);
      b && (c.remove(m, o[m].bounds), o[m] = b, c.insert(m, b.bounds), xt(s, m, b), x++);
      const I = It(m, o, u, n.l, n.w, i.spacing, c);
      I && (c.remove(m, o[m].bounds), o[m] = I, c.insert(m, I.bounds), xt(s, m, I), x++);
    }
    if (h += x, x === 0) break;
  }
  let S = 0;
  for (const y of o) {
    const x = l === "x" ? y.bounds.maxX : y.bounds.maxY;
    x > S && (S = x);
  }
  return { placements: s, moved: h, maxExtent: S };
}
function Qa(t) {
  const e = [];
  for (let n = 0; n < t; n++)
    e.push(n * 2 * Math.PI / t);
  return e;
}
function tl(t) {
  return t.map((e) => {
    if (e instanceof Ee)
      return e;
    const n = e.outline, i = Array.isArray(n) && n.length >= 3, r = i ? n : [
      { x: 0, y: 0 },
      { x: e.l, y: 0 },
      { x: e.l, y: e.w },
      { x: 0, y: e.w },
      { x: 0, y: 0 }
    ];
    return new Ee({
      ...e.toData(),
      outline: r,
      trueArea: i ? us(r) : e.l * e.w,
      nestingRotation: 0
    });
  });
}
function el(t, e, n) {
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
const nl = {
  async calculation(t, e, n) {
    const i = this.config, r = t?.rotationSteps || i?.nesting?.rotationSteps || 24, s = t?.spacing ?? i?.nesting?.spacing ?? 0, o = t?.contourAnalysis ?? i?.nesting?.contourAnalysis ?? !0, a = t?.strategy || "gravity", c = t?.compressionAxis ?? "x", l = t?.anneal ?? !0, u = t?.annealIterations ?? 5e3, h = e?.saw?.bladeWidth ?? 0, f = h + s;
    k("nesting", `Starting nesting: ${n.length} shapes, ${r} rotation steps, strategy: ${a}, bladeWidth: ${h}, spacing: ${f}`);
    const d = (C, L, V, j) => {
      this?.job && this.job.updateProgress({
        socketId: this.socketId,
        type: "algo",
        message: "progress",
        stockCount: 1,
        shapeCount: C,
        phase: L,
        placed: V,
        total: j
      });
    };
    d(0, "preparing");
    const p = tl(n), S = 24, y = /* @__PURE__ */ new Map();
    let x = 0;
    for (const C of p) {
      if (!C.outline || C.outline.length <= S) continue;
      y.set(C.autoId, { outline: C.outline, trueArea: C.trueArea });
      const L = mt(C.outline);
      let j = Math.sqrt(L.width ** 2 + L.height ** 2) * 5e-3, tt = C.outline;
      for (let K = 0; K < 8 && (tt = la(C.outline, j), !(tt.length <= S)); K++)
        j *= 1.5;
      tt.length < C.outline.length && tt.length >= 6 ? (x++, C.outline = tt, C.trueArea = us(tt)) : y.delete(C.autoId);
    }
    x > 0 && console.log(`[nesting] Simplified ${x} outlines to ≤${S} vertices`);
    const g = Qa(r);
    d(0, "analysing");
    const m = o ? Aa(p) : [];
    m.length > 0 && k("nesting", `Found ${m.length} contour matches`);
    const b = new Ma();
    b.setSpacing(f);
    const I = /* @__PURE__ */ new Map();
    let w = 0;
    for (const C of p) {
      const L = Oa(C.outline, g);
      I.set(C.autoId, L), w += L.length;
    }
    const P = `Symmetry filter: avg ${p.length > 0 ? (w / p.length).toFixed(1) : "0"} rotations/shape (was ${g.length})`;
    k("nesting", P), console.log(`[nesting] ${P}`), d(0, "placing");
    const T = [c];
    let M = null, R = 1 / 0, O = c;
    for (const C of T) {
      const L = {
        rotationSteps: g,
        spacing: f,
        contourMatches: m,
        nfpCache: b,
        strategy: a,
        compressionAxis: C,
        scoringWeights: t?.scoringWeights,
        shapeRotationMap: I,
        onProgress: (K, J) => {
          d(K, "placing", K, J), this?.job?.extendLock && this.job.extendLock(3e5).catch(() => {
          });
        }
      }, V = setInterval(() => {
        this?.job?.extendLock && this.job.extendLock(3e5).catch(() => {
        });
      }, 12e4);
      let j;
      try {
        j = await Ha(e, p, L);
      } finally {
        clearInterval(V);
      }
      k("nesting", `[axis=${C}] Placed ${j.length}/${p.length} shapes`), d(j.length, "placing");
      let tt = 1 / 0;
      if (l && j.length >= 2) {
        d(j.length, "optimising");
        const K = _a(
          j,
          p,
          e,
          L,
          { maxIterations: u }
        );
        j = K.placements, tt = K.stats.bestEnergy;
        const J = K.stats, Wt = `SA [axis=${C}]: ${J.accepted} accepted (${J.improving} improving) / ${J.iterations} iterations, energy ${J.initialEnergy.toFixed(6)} → ${J.bestEnergy.toFixed(6)} (${J.improved ? `improved by ${((1 - J.bestEnergy / J.initialEnergy) * 100).toFixed(2)}%` : "no improvement"})`;
        k("nesting", Wt), console.log(`[nesting] ${Wt}`);
      } else if (j.length > 0) {
        const K = C === "x" ? e.l : e.w;
        let J = 0;
        for (const Wt of j) {
          const Xe = p.find((bs) => bs.autoId === Wt.shapeAutoId);
          if (!Xe) continue;
          const Rn = C === "x" ? Wt.x + Xe.l : Wt.y + Xe.w;
          Rn > J && (J = Rn);
        }
        tt = J / K;
      }
      if (j.length >= 2) {
        d(j.length, "compacting");
        const K = Ka(j, p, e, L);
        j = K.placements, K.moved > 0 && k("nesting", `[axis=${C}] Compaction: ${K.moved} shapes moved tighter`);
        const J = C === "x" ? e.l : e.w;
        tt = K.maxExtent / J;
      }
      console.log(`[nesting] [axis=${C}] Post-compaction energy: ${tt.toFixed(6)}, placed: ${j.length}`), (!M || j.length > M.length || j.length === M.length && tt < R) && (M = j, R = tt, O = C);
    }
    const Y = M;
    k("nesting", `Best axis: ${O}, energy: ${R.toFixed(6)}, placed: ${Y.length}/${p.length}`);
    for (const [C, L] of y) {
      const V = p.find((j) => j.autoId === C);
      V && (V.outline = L.outline, V.trueArea = L.trueArea);
    }
    const G = [];
    for (const C of Y) {
      const L = p.find((V) => V.autoId === C.shapeAutoId);
      L && (L.x = C.x, L.y = C.y, L.nestingRotation = C.rotation, L.added = !0, L.stock = e, G.push(L));
    }
    const v = el(e, G, p);
    d(G.length, "cutting-plan");
    let D = null;
    try {
      D = ds(G, e, { ...t?.cnc, kerfWidth: h }), console.log(`[nesting] Cutting plan: ${D.contours.length} contours, cut: ${D.totalCutDistance}mm, rapid: ${D.totalRapidDistance}mm` + (D.commonLineSaved > 0 ? `, common-line saved: ${D.commonLineSaved}mm` : ""));
    } catch (C) {
      console.error("[nesting] Cutting plan generation failed:", C);
    }
    D && (this.cuttingPlans || (this.cuttingPlans = {}), this.cuttingPlans[e.autoId] = D);
    const F = {
      shapes: p.map((C) => C.compress()),
      firstShape: G[0] || null,
      topPriorityShape: "",
      cutType: "nesting",
      type: "algo",
      stock: e,
      stockID: e.id,
      score: v,
      cuttingPlan: D
    };
    await gt.call(this, F, "nesting");
  }
}, Lt = {
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
    await Gt.calculation.call(this, t, e, n);
  },
  guillotine: async function(t, e, n, i = []) {
    if (this.counters.placement = 0, t.secondRun && i.length) {
      for (const r of i) {
        const s = n.filter((o) => !o.added);
        r.shapes = s, await pe.call(
          this,
          t,
          e,
          s,
          r
        );
      }
      return;
    }
    await pe.call(
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
        r.shapes = s, await pe.call(
          this,
          t,
          e,
          s,
          r
        );
      }
      return;
    }
    await pe.call(
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
        e.saw.cutPreference = "w", i = await Lt.guillotine.call(
          this,
          t,
          e,
          n
        );
        break;
      case "efficiency":
        e.saw.efficiencyOptions.primaryCompression = "l", i = await Lt.efficiency.call(
          this,
          t,
          e,
          n
        );
        break;
    }
    await gt.call(this, i);
  },
  linear: async function(t, e, n) {
    const i = Vs.call(this, e, n);
    i && e && (Js(i, e, n), i.stock = e, await gt.call(this, i));
  },
  nesting: async function(t, e, n) {
    await nl.calculation.call(this, {}, e, n);
  }
};
async function il({
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
  if (rt(t))
    try {
      t.updateShapeSpacing(e);
    } catch {
      return !1;
    }
  const c = e.l + e.x - t.l, l = e.w + e.y - t.w;
  if (c < 0 || l < 0) return !1;
  const u = new Ke(), h = e.getStock;
  if (o)
    for (const f of o.points.values()) {
      const d = Ks(
        t,
        f,
        e
      );
      d && u.addPoints(d.toArray());
    }
  for (const f of s.points.values()) {
    const d = Qs(
      t,
      f,
      e
    );
    u.addPoints(d.toArray());
  }
  if (e.cutType === "efficiency") {
    const f = t.getMinSpacing(e.saw);
    if (f > 0)
      for (const d of u.points.values()) {
        if (t.x = d.x, t.y = d.y, t.isTooCloseToEdges(e)) {
          d.tooClose = !0;
          continue;
        }
        if (!nt(e) && t.isTooCloseToEdges(h)) {
          d.tooClose = !0;
          continue;
        }
        if (!d.tooClose) {
          const p = t.createProximityRectangle(f);
          if (!p)
            throw new Error("unable to create proximity rectangle");
          for (const S of i)
            if (d.tooClose = ki(
              p,
              S,
              e,
              !1
            ), d.tooClose) break;
        }
      }
  }
  for (const f of u.points.values()) {
    if (f.tooClose || A.greaterThan(f.x, c) || A.greaterThan(f.y, l) || (t.x = f.x, t.y = f.y, Ce(t, i, e))) continue;
    ii(
      t,
      e,
      n,
      i,
      r,
      f,
      a
    );
    let p = r.length > 1;
    (e.cutType === "efficiency" && this.config.groups.efficiency.position || ["guillotine", "beam"].includes(e.cutType) && this.config.groups.guillotine.position) && (sl.call(this, r, e) || (p = !1)), p && (e.cutType === "efficiency" && this.config.groups.efficiency.position || ["guillotine", "beam"].includes(e.cutType) && this.config.groups.guillotine.position) && f.type !== "group" && z(t) && to({
      container: e,
      containerPlacedShapes: i,
      unplacedShapes: r,
      shape: t,
      point: f,
      config: this.config,
      scoreFunction: (S, y, x, g, m) => {
        ii(
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
function sl(t, e) {
  return !0;
}
async function ys(t, e, n = null, i = null, r = {}, s = null) {
  if (!i)
    throw new Error("no testFunction provided to testShapeRotations");
  if (typeof i != "function")
    throw new Error("testFunction provided to testShapeRotations is not a function");
  if (i.constructor.name !== "AsyncFunction")
    throw new Error("testFunction provided to testShapeRotations must be async");
  if (B(t)) {
    s && (r[s] = t.rot), await i.call(this, r);
    return;
  }
  ut(t.orientationLock) && (n = Zs(t, e));
  const o = ut(n) ? n : 0;
  Xt(t, o, e) && (At(t, o, e), s && (r[s] = o), await i.call(this, r));
  const a = 1;
  n === null && !t.isSquare && Xt(t, a, e) && (At(t, a, e), s && (r[s] = a), await i.call(this, r));
}
async function hn(t, e, n) {
  if (!t.length) return !1;
  if (pt(t)) {
    const h = /* @__PURE__ */ new Set();
    t = t.filter((f) => h.has(f.autoId) ? !1 : (h.add(f.autoId), !0));
  }
  const r = n.getStock;
  if (r.saw && !ee(r.saw)) throw new Error("not real saw");
  const s = t?.filter((h) => h.added);
  if (!s.length) return;
  const o = new Set(s.map((h) => h.autoId)), a = s.filter(
    (h) => Ut(h, n, "x") && Ut(h, n, "y")
  ), c = An.call(
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
  function u() {
    const h = ct(
      t,
      r,
      "filter"
    ), f = /* @__PURE__ */ new Set();
    for (const x of h)
      if (B(x) && !ht(x)) {
        const g = x;
        if (g.shapes?.length)
          for (const m of g.shapes)
            f.add(m.autoId);
      }
    const d = h.filter((x) => {
      if (ht(x)) return !1;
      if ($e(x) || rt(x)) {
        const g = x;
        return !(!g.shapes || g.shapes.length === 0);
      }
      if (Ie(x))
        return !(f.has(x.autoId) || x?.group?.inGroup);
    }), p = d.filter((x) => B(x) && !ht(x)), S = d.filter((x) => Ie(x)), y = [...p, ...S];
    return k("groups", () => `[getRelevantUnplacedShapes] ${y.length} unplaced (${p.length} groups, ${S.length} shapes)`), p.length > 0 && p.forEach((x) => {
      k("groups", () => `Group ${x.id}: ${x.shapes?.length || 0} child shapes, ${x.shapes.map((g) => g.id).join()}, added=${x.added}`);
    }), y;
  }
  for (let h = u(); h.length; ) {
    let f = function() {
      const m = h.filter((w) => typeof w?.bestScore?.total == "number");
      if (!m?.length) return !1;
      const b = al(m);
      if (!b) return null;
      const I = rl.call(this, n, r, l, b, s, a, o);
      return I.added && !o.has(I.autoId) && (B(I) && I.type !== "position" || (s.push(I), a.push(I)), o.add(I.autoId), it(n) && (n.shapes = n.shapes.filter(($) => $.autoId !== I.autoId))), N([
        () => E(I.added).to.be.true,
        () => E(pt(s), "duplicates found in containerPlacedShapes").to.be.false,
        () => E(s.every((w) => w.added), "containerPlacedShapes contains unplaced shapes").to.be.true
      ]), { bestShapeOrGroup: b, winningShapeOrGroup: I };
    }, d = null;
    this.uniqueShapes.length > 1 && n.cutType === "efficiency" && this.config.efficiency.rayCasting && !this.hasMinSpacing && (d = _s(
      n,
      s
    ));
    const p = h.length;
    let S = !1;
    for (let m = 0; m < p; m++) {
      let b = !1;
      if (S && h[m].isSameSize(h[m - 1]))
        continue;
      for (let $ = 0; $ < m; $++)
        if (h[$].isSameSize(h[m])) {
          b = !0;
          break;
        }
      if (b) {
        S = !0;
        continue;
      } else
        S = !1;
      const I = h[m];
      I.resetBestScore();
      const w = $n.call(this, n, r, I);
      if (await ys.call(
        this,
        I,
        n,
        null,
        il,
        {
          shapeOrGroup: I,
          container: n,
          weighting: w,
          containerPlacedShapes: s,
          unplacedShapes: h,
          placementPositions: c,
          rayCastCoords: d,
          placedCoords: l
        }
      ), B(I) && !ht(I) && !rt(I)) {
        const $ = I;
        if (!$.bestScore || typeof $.bestScore.total != "number") {
          k("groups", () => `[placeShapes] Group ${$.id} has no valid placement. Releasing it and all clones.`);
          const P = $.autoId.replace(/\.\d+$/, ""), T = [];
          for (const M of t)
            if (B(M) && !ht(M)) {
              const R = M;
              R.autoId.replace(/\.\d+$/, "") === P && !R.added && T.push(R);
            }
          if (T.length > 0) {
            k("groups", () => `  Releasing ${T.length} groups (including clones)`);
            const M = [], R = /* @__PURE__ */ new Set();
            for (const O of T)
              if (O.shapes && O.shapes.length > 0)
                for (const Y of O.shapes)
                  R.has(Y.autoId) || (M.push(Y), R.add(Y.autoId));
            for (const O of T)
              k("groups", () => `    Destroying group ${O.id}`), O.destroy();
            M.length > 0 && (k("groups", () => `  Adding ${M.length} released shapes back to containerShapes`), t.push(...M));
          }
        }
      }
    }
    const y = f.call(this, t);
    if (y === !1 || y === null) return;
    const { bestShapeOrGroup: x, winningShapeOrGroup: g } = y;
    if (h = u(), h.length > 0) {
      const m = An(
        g ? [g] : [],
        a,
        n
      );
      c.addPoints(m.toArray()), c.deletePoint(new _e(x.x, x.y));
    }
    this.resetShapes(h, {
      keepScores: !1,
      removeGroups: !1,
      keepGuillotineData: !0,
      keepFirstShapeSampleRotations: !1
    });
  }
  return !0;
}
function ol(t, e) {
  if (this.config.evo.disable || t.stockID !== e.id) return !1;
  const n = ct(this.shapeList, e, "filter", null), i = Rt(n, null, !0);
  return i.length <= 1 || e?.saw?.stockType === "roll" || i.length > 100 || t?.algoTime > 2e3 || !this.enableEvo || t.cutType === "efficiency" && t?.score[this.successMetric] < 0.65 || t?.score?.totalShapesPlaced <= 2 ? !1 : n.length <= this.config.evo.stockLimit;
}
function rl(t, e, n, i, r, s, o) {
  const a = B(i) ? i : i.bestScore?.group ?? null;
  if (a) {
    const l = a.shapes.filter((u) => u.added || u.group?.inGroup);
    if (l.length > 0)
      k("groups", () => `[placeBestShapeOrGroup] Group ${a.id} is invalid - ${l.length}/${a.shapes.length} shapes already placed. Placing individual shape instead.`), B(i) || (i.bestScore.group = null);
    else {
      if (k("groups", () => `[placeBestShapeOrGroup] Placing group ${a.id} with ${a.shapes.length} shapes (type=${a.type})`), a.placementOrder = this.counters.placement, this.counters.placement += a.shapes.length, a.setPositionToBestScore(), ei(t, a), a.addToStock(e), rn(n, a), a.placeMyShapes(e), a.type === "position")
        for (const u of a.shapes)
          this.shapeList.some((h) => h.autoId === u.autoId) || this.shapeList.push(u);
      if (a.type !== "position" && a.type !== "firstShape")
        for (const u of a.shapes)
          u.added && !u.group?.inGroup && !o.has(u.autoId) && (r.push(u), s.push(u), o.add(u.autoId));
      return a;
    }
  } else i && (i.placementOrder = this.counters.placement++, i.setPositionToBestScore(), ei(t, i), i.addToStock(e), rn(n, i));
  return a || i;
}
function al(t) {
  return t.reduce((n, i) => {
    if (i.bestScore.total > n.bestScore.total)
      return i;
    if (i.bestScore.total === n.bestScore.total) {
      if (B(i) && !B(n))
        return i;
      if (i.area > n.area) return i;
    }
    return n;
  });
}
let ll = class {
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
function cl(...t) {
  return class {
  };
}
const fe = {
  Schema: ll,
  model: cl,
  connect: () => Promise.resolve(),
  connection: {}
}, Kt = fe.Schema, xs = {
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
    type: Kt.Types.ObjectId,
    ref: "saws"
  },
  extras: {
    banding: {
      type: Kt.Types.ObjectId,
      ref: "extras"
    },
    finish: {
      type: Kt.Types.ObjectId,
      ref: "extras"
    },
    planing: {
      type: Kt.Types.ObjectId,
      ref: "extras"
    },
    machining: {
      type: Kt.Types.ObjectId,
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
}, ul = fe.Schema, Yt = new ul({
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
  ...xs
});
Yt.index({ organisation: 1, name: 1 });
Yt.index({ organisation: 1, type: 1 });
Yt.index({ organisation: 1, _id: -1 });
Yt.index({ organisation: 1, l: 1, w: 1 });
Yt.index({ name: "text", type: "text", description: "text" });
Yt.plugin(Ai);
const fl = fe.model(
  "material",
  Yt,
  "materials"
), xi = fe.Schema, ot = new xi({
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
    type: xi.Types.ObjectId,
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
  ...xs
});
function hl(t) {
  return t ? {
    l1: he({ v: t[2], dp: 4 }),
    l2: he({ v: t[3], dp: 4 }),
    w1: he({ v: t[0], dp: 4 }),
    w2: he({ v: t[1], dp: 4 })
  } : {
    l1: 0,
    l2: 0,
    w1: 0,
    w2: 0
  };
}
ot.pre("save", function() {
  this.material = this.material?.toLowerCase(), this.area = (this.l - parseFloat(this?.trim?.[2]) - parseFloat(this?.trim?.[3])) * (this.w - parseFloat(this?.trim?.[0]) - parseFloat(this?.trim?.[1]));
});
ot.index({ organisation: 1, name: 1 });
ot.index({ organisation: 1, material: 1 });
ot.index({ organisation: 1, db_materialId: 1 });
ot.index({ organisation: 1, ecommerce: 1, isOffcut: 1, name: 1 });
ot.index({ organisation: 1, ecommerce: 1, isOffcut: 1, material: 1 });
ot.index({ organisation: 1, ecommerce: 1, isOffcut: 1, _id: -1 });
ot.index({ organisation: 1, ecommerce: 1, isOffcut: 1, t: 1 });
ot.index({ organisation: 1, ecommerce: 1, isOffcut: 1, cost: 1 });
ot.index({ organisation: 1, ecommerce: 1, isOffcut: 1, l: 1, w: 1 });
ot.index({ organisation: 1, ecommerce: 1, isOffcut: 1, category: 1 });
ot.index({ organisation: 1, ecommerce: 1, q: 1 });
ot.index({ organisation: 1, ecommerce: 1, isOffcut: 1, material: 1, name: 1, l: 1, w: 1, t: 1 });
ot.index({ organisation: 1, isOffcut: 1, material: 1 });
ot.index({ name: "text", material: "text", category: "text", tags: "text" });
ot.plugin(Ai);
const dl = fe.model(
  "stock",
  ot,
  "stock"
);
async function pl(t = [], e, n = []) {
  e instanceof Pe || (e = new Pe(e));
  let i = [];
  const r = [];
  for (const s of t) {
    if (!ut(s.material)) continue;
    const o = i.filter((a) => {
      if (jt(s, a)) {
        let c = !1, l = !1, u = !0;
        if (a?.saw?.stockType === "linear" && (A.equalTo(s.w, a.w) || (u = !1)), (s.t === a.t || !ut(a.t)) && (l = !0), s.material === a.material && (c = !0), a?.saw?.stockType === "linear") {
          if (c && l && u)
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
              $nin: n.map((u) => u?.id?.toLowerCase())
            }
          }
        ]
      }, [c, l] = await Promise.all([
        fl.findById(s?.material?.toLowerCase())?.lean(),
        //TODO make sorting order and limit configurable based on org
        dl.find(a).sort({ area: 1 }).limit(3).lean()
      ]);
      c && l.length ? l.forEach((u) => {
        const h = hl(u.trim), f = {
          l: u.l - (h.l1 ?? 0) - (h.l2 ?? 0),
          w: u.w - (h.w1 ?? 0) - (h.w1 ?? 0)
        };
        if (!(A.lessThanOrEqualTo(
          s.l,
          f.l
        ) && A.lessThanOrEqualTo(
          s.w,
          f.w
        ) || A.lessThanOrEqualTo(
          s.w,
          f.l
        ) && A.lessThanOrEqualTo(
          s.l,
          f.w
        )))
          return;
        const d = eo.parse({
          // Base dimensions from stockItem
          l: u.l,
          w: u.w,
          t: u.t,
          q: u.q,
          cost: u.cost,
          grain: u.grain || "",
          material: u.material,
          // Generated IDs
          id: (n.length + i.length + 1).toFixed(1),
          parentId: (n.length + i.length + 1).toString(),
          // Additional required fields
          name: c.name,
          autoAdd: !1,
          //material based calculations do not allow autoAdd
          trim: h,
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
        i.push(new Qe(d)), Array.isArray(s.stockLock) ? s.stockLock.push(d.parentId) : s.stockLock = [d.parentId];
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
    i = tn(i);
  else if (!n?.length)
    throw new Error("No relevant stock found - check material, thickness, dimensions & stock quantity");
  return {
    stockList: i,
    unavailableStock: r
  };
}
function gl(t, e) {
  const n = Math.min(t.l, t.w), i = Math.max(t.l, t.w), r = t.trim;
  return `${e ? t.parentId + "|" : ""}${t.t}|${t.orientationLock}|${t.material ?? ""}|${n}|${i}|${r?.l1 ?? ""}|${r?.l2 ?? ""}|${r?.w1 ?? ""}|${r?.w2 ?? ""}`;
}
function ml(t, e, n = !1) {
  const i = /* @__PURE__ */ new Map();
  for (const s of e) {
    s.identicalTo = [];
    let o = i.get(s.parentId);
    o || (o = [], i.set(s.parentId, o)), o.push(s);
  }
  const r = /* @__PURE__ */ new Map();
  for (const s of t) {
    const o = gl(s, n);
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
function yl(t, e) {
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
      const c = Ge(s, a);
      o[a.parentId] = {
        any: jt(s, a, null),
        0: c.includes(0),
        1: c.includes(1)
      };
    }
    for (const a of r)
      a.fitsStock = o;
  }
}
function xl(t, e, n, i) {
  const r = i?.similarityThreshold ?? 0.1, s = i?.selectionStrategy, o = i?.minPerShape ?? 0, a = i?.minTotal ?? 0;
  if (t.length <= 1)
    return e;
  const { filtered: c, excludedGroups: l } = wl(
    t,
    n,
    { similarityThreshold: r, selectionStrategy: s }
  );
  let u = [...c], h = [...l];
  if (o > 0) {
    const p = /* @__PURE__ */ new Map();
    for (const y of e) {
      const x = p.get(y.parentId) || 0;
      p.set(y.parentId, x + 1);
    }
    const S = u.filter((y) => (p.get(y.parentId) || 0) < o);
    if (S.length > 0) {
      for (const y of S) {
        const x = y.parentId;
        for (const g of h) {
          const m = g.filter((b) => (p.get(b.original.parentId) || 0) >= o);
          if (m.length > 0) {
            const b = m.sort((w, $) => (p.get($.original.parentId) || 0) - (p.get(w.original.parentId) || 0))[0], I = u.findIndex((w) => w.parentId === x);
            if (I !== -1) {
              u[I] = b.original;
              const w = g.findIndex(($) => $ === b);
              w !== -1 && g.splice(w, 1);
              break;
            }
          }
        }
      }
      h = h.filter((y) => y.length > 0);
    }
  }
  if (a > 0) {
    const p = new Set(u.map((y) => y.parentId)), S = e.filter((y) => p.has(y.parentId)).length;
    if (S < a && h.length > 0) {
      const y = [];
      let x = S;
      for (; x < a && h.some((g) => g.length > 0); ) {
        for (let g = 0; g < h.length && x < a; g++) {
          const m = h[g];
          if (m.length > 0) {
            const I = Sl([...m], s)[0], w = I.original.parentId, $ = e.filter((T) => T.parentId === w).length;
            y.push(I.original), x += $;
            const P = m.findIndex((T) => T === I);
            P !== -1 && m.splice(P, 1);
          }
        }
        if (h = h.filter((g) => g.length > 0), h.length === 0 || h.every((g) => g.length === 0))
          break;
      }
      u = [...u, ...y];
    }
  }
  const f = new Set(u.map((p) => p.parentId));
  return e.filter((p) => f.has(p.parentId));
}
function Sl(t, e) {
  switch (e) {
    case "largest":
      return t.sort((n, i) => i.area - n.area);
    case "smallest":
      return t.sort((n, i) => n.area - i.area);
    default:
      return t;
  }
}
function wl(t, e, n) {
  const i = n.similarityThreshold, r = n.selectionStrategy;
  if (t.length <= 1) return { filtered: t, excludedGroups: [] };
  const s = t.map((l) => {
    const u = {
      l: l.longSide,
      w: l.shortSide
    };
    return {
      original: l,
      // Keep reference to the original shape object
      rotated: u,
      // Normalized dimensions for comparison (keeping 'rotated' name for compatibility)
      area: l.area
      // Area for 'largest'/'smallest' selection
    };
  }), o = [];
  for (const l of s) {
    let u = !1;
    for (const h of o)
      if (h.some((f) => bl(l.rotated, f.rotated, i))) {
        h.push(l), u = !0;
        break;
      }
    u || o.push([l]);
  }
  const a = [], c = [];
  return o.forEach((l) => {
    if (l.length === 1) {
      a.push(l[0]);
      return;
    }
    let u;
    switch (r) {
      case "largest":
        u = l.reduce((f, d) => d.area > f.area ? d : f, l[0]);
        break;
      case "smallest":
        u = l.reduce((f, d) => d.area < f.area ? d : f, l[0]);
        break;
      default:
        u = l[0];
    }
    a.push(u);
    const h = l.filter((f) => f !== u);
    h.length > 0 && c.push(h);
  }), {
    filtered: a.map((l) => l.original),
    excludedGroups: c
  };
}
function bl(t, e, n) {
  const i = Math.abs(t.l - e.l) / Math.max(t.l, e.l, 1), r = Math.abs(t.w - e.w) / Math.max(t.w, e.w, 1);
  return i <= n && r <= n;
}
function Il(t, e, n) {
  if (k("stack", () => `previous stock ${e.id}`), ["l", "w", "material", "t"].some((s) => t[s] !== e[s])) return !1;
  const i = t.cutType === "guillotine" || t.cutType === "beam", r = t.saw.guillotineOptions?.strategy !== "time";
  if (!i || i && r) {
    const s = Ss.call(
      this,
      t,
      e,
      n,
      this.shapeList
    );
    if (s)
      return k("stack", () => `stack found: ${t.id} === ${e.id}`), this.recordStackToBestResult(t, n), t.used = !0, t.score = e.score, s;
  }
  return !1;
}
function Ss(t, e, n, i) {
  if (!this.config.stack || !n.length) return !1;
  const r = t.saw;
  if (!r?.options?.stackingMode || r.options.stackingMode === "none") return !1;
  if (k("stack", () => `looking for stack for ${t.id}, comparing to ${e.id}`), r.cutType === "beam" && e.stack) {
    let s = e, o = 1;
    if (e.stack.stock ? (s = e.stack.stock, o = s.stack?.number || 1) : e.stack.number && (o = e.stack.number), s.t * o + t.t > r.stackHeight)
      return !1;
  }
  if (t.parentId === e.parentId) {
    if (r.cutType === "beam" && r.stackHeight > 0 && t.t * 2 > r.stackHeight)
      return !1;
    const s = bt(i, e);
    if (!s.length) return !1;
    const o = ws.call(this, [e], s, t, n, !0, r.options.stackingMode === "identical");
    if (o)
      return t.stack = { stock: o }, o.stack.number === 1 ? o.stack.number = 2 : o.incrementStack(), o;
  }
  return !1;
}
function $l(t, e) {
  if (!this.config.findDuplicatePatterns) return !1;
  k("stack", () => `🔎 checkForDuplicates called for ${t.id}`);
  const n = this.shapeList.filter((o) => o.added);
  k("stack", () => `   Total shapes added across all stock: ${n.length}`);
  const i = this.stockList.filter((o) => o.used && o.id !== t.id && o.l === t.l && o.w === t.w && o.t === t.t);
  if (k("stack", () => `   Relevant used stock with matching dimensions: ${i.map((o) => o.id).join(", ")}`), !i.length)
    return k("stack", () => `   No relevant stock found for ${t.id}`), !1;
  const r = t.saw?.options?.stackingMode === "identical", s = ws.call(this, i, n, t, e, !0, r);
  return s ? (k("stack", () => `   ✅ Duplicate found: ${t.id} matches ${s.id}`), no(s, t), t.used = !0, s) : (k("stack", () => `   No duplicate pattern found for ${t.id}`), !1);
}
function ws(t, e, n, i, r = !0, s = !0) {
  if (!t.length || !i.length) return null;
  k("stack", () => `🔍 Checking for duplicate patterns for ${n.id}`), k("stack", () => `   Current shapes count: ${i.length}`), k("stack", () => `   Used stock to check: ${t.map((f) => f.id).join(", ")}`);
  const o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  for (const f of i) {
    const d = s ? `${f.longSide}|${f.shortSide}|${f.material}` : `${f.longSide}|${f.shortSide}`;
    let p = o.get(d);
    if (p || (p = [], o.set(d, p)), p.push(f), s) {
      if (f.parentId) {
        let S = a.get(f.parentId);
        S || (S = [], a.set(f.parentId, S)), S.push(f);
      }
      if (f.identicalTo && Array.isArray(f.identicalTo))
        for (const S of f.identicalTo) {
          let y = c.get(S);
          y || (y = [], c.set(S, y)), y.push(f);
        }
      if (f.autoId) {
        const S = f.autoId.split(".")[0];
        let y = l.get(S);
        y || (y = [], l.set(S, y)), y.push(f);
      }
    }
  }
  const u = /* @__PURE__ */ new Map();
  for (const f of e) {
    if (!f.added || !f.stock?.id) continue;
    const d = f.stock.id;
    let p = u.get(d);
    p || (p = [], u.set(d, p)), p.push(f);
  }
  const h = /* @__PURE__ */ new Map();
  for (const f of t) {
    k("stack", () => `   📋 Checking against stock ${f.id}`);
    const d = u.get(f.id) || [];
    if (!d.length) {
      k("stack", () => `      ❌ No shapes on ${f.id}, skipping`);
      continue;
    }
    k("stack", () => `      Stock ${f.id} has ${d.length} shapes`);
    const p = d.length;
    if (i.length < p) continue;
    const S = [];
    h.clear();
    let y = !0;
    for (const x of d) {
      let g = null;
      if (s) {
        const m = /* @__PURE__ */ new Set(), b = `${x.longSide}|${x.shortSide}|${x.material}`, I = o.get(b);
        if (I)
          for (const $ of I)
            h.has($) || m.add($);
        if (x.parentId) {
          const $ = c.get(x.parentId);
          if ($)
            for (const T of $)
              h.has(T) || m.add(T);
          const P = a.get(x.parentId);
          if (P)
            for (const T of P)
              h.has(T) || m.add(T);
        }
        if (x.identicalTo && Array.isArray(x.identicalTo))
          for (const $ of x.identicalTo) {
            const P = a.get($);
            if (P)
              for (const T of P)
                h.has(T) || m.add(T);
          }
        if (x.autoId) {
          const $ = x.autoId.split(".")[0], P = l.get($);
          if (P)
            for (const T of P)
              h.has(T) || m.add(T);
        }
        const w = [];
        for (const $ of m)
          $.isIdentical(x, !1) && w.push($);
        w.length === 1 ? (g = w[0], k("stack", () => `      ✓ Shape ${x.id} matched to ${g.id}`)) : w.length > 1 ? (g = w.find(($) => $.parentId === x.parentId) || w[0], k("stack", () => `      ✓ Shape ${x.id} matched to ${g.id} (${w.length} candidates, preferred by parentId: ${g.parentId === x.parentId})`)) : k("stack", () => `      ✗ Shape ${x.id} has no identical match`);
      } else {
        const m = `${x.longSide}|${x.shortSide}`, b = o.get(m), I = b ? b.filter((w) => !h.has(w) && Xt(w, x.rot, f)) : [];
        I.length === 1 ? g = I[0] : I.length > 1 && (g = I.find((w) => w.parentId === x.parentId) || I[0]);
      }
      if (g)
        h.set(g, !0), S.push({
          current: g,
          match: x
        });
      else {
        k("stack", () => `      ❌ Failed to match all shapes for ${f.id}`), y = !1;
        break;
      }
    }
    if (y && S.length === p) {
      if (k("stack", () => `      ✅ Perfect match found: ${n.id} matches ${f.id}`), r) {
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
      return f;
    } else
      k("stack", () => `      ⚠️ Stock ${f.id}: allMatched=${y}, matches=${S.length}, target=${p}`);
  }
  return k("stack", () => `   ❌ No duplicate pattern found for ${n.id}`), null;
}
class Si extends io {
  // Zod schema for validation and serialization
  static schema = ko;
  static computedProperties = Ro;
  /**
   * Get entity type
   */
  getType() {
    return Z.Optimiser;
  }
  constructor(e) {
    const n = vo(e.user, e), i = {
      // Pass through most properties directly
      ...e,
      // Apply defaults for arrays
      stockList: e.stockList || [],
      shapeList: e.shapeList || [],
      userGroups: e.userGroups || [],
      // Config overrides
      config: n,
      successMetric: jn(n, "successMetric", e.successMetric || dt.successMetric),
      enableEvo: jn(n, "evo.disable", !1) ? !1 : e.enableEvo ?? !0,
      weighting: e.weighting || {
        efficiency: yt.efficiency,
        guillotine: yt.guillotine,
        roll: yt.roll
      },
      stockType: e.saw?.stockType || null,
      // Don't skip validation so defaults are applied
      skipSchemaValidation: !1
    };
    super(i), !this.useInventory && this.stockList?.length && this.stockList.forEach((r) => {
      r?.saw?.stockType || (r.saw.stockType = this.saw.stockType);
    }), $i({
      stocks: this.stockList,
      shapes: this.shapeList
    }, "Optimiser constructor"), this.uniqueStock = _t(this.stockList), this.groupList = [], this.init();
  }
  init() {
    const e = [];
    if (this.shapeList = this.shapeList.filter((o) => o.l && o.w), !this.shapeList.length) throw new Error("No parts to process");
    this.shapeList.some((o) => o.duplicate) || ([...this.shapeList].forEach((a) => {
      a.applyTrim();
      for (let c = a.q; c--; )
        c != 0 && this.shapeList.push(a.clone(c.toString()));
    }), this.shapeList.push(...e), this.shapeList.sort(Tt.ID));
    const n = this.shapeList.filter((o) => !B(o));
    this.shapeAnalysis(n, this.stockList);
    const i = [];
    this.userGroups.forEach((o, a) => {
      for (let c = 0; c < o.q; c++) {
        const l = o.toGroup(a, c, this.shapeList, this.saw);
        l && i.push(l);
      }
    });
    const r = so(i, this.stockList, this.saw), s = r.shapeList;
    r.unusableShapes?.length && k("groups", `${r.unusableShapes.length} user groups could not be matched to any stock`), this.shapeList.push(...s), this.uniqueShapes = this.shapeList.filter((o) => !o?.duplicate), this.hasMinSpacing = typeof this?.saw?.options?.minSpacing == "number";
  }
  shapeAnalysis(e, n) {
    ml.call(this, e, this.shapeList), gr.call(this, e, n), yl.call(this, e, n);
  }
  recordStackToBestResult(e, n = []) {
    if (this.bestResult) {
      const i = {
        ...this.bestResult,
        stock: e,
        shapes: n.filter((r) => r.added && r.stock.id === e.id).map((r) => r.compress())
      };
      this.bestResult = as(i);
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
    let o = oo(s);
    if (!o.length) return [];
    if (i && i?.options?.stockSelection === "smallest")
      return o.sort(Tt.AA), [o[0]];
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
      const a = Lt.getCalculationType(s);
      if (!a) throw new Error(`calculation type not found for stock ${s.id}`);
      if (!Lt.types.includes(a))
        throw new Error(`invalid calculation type: ${a} for stock ${s.id}`);
      return o = o.filter((c) => !c.added && c.stockLock.includes(s.parentId)), await Lt[a].call(
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
      return c.sort(Tt.ID), k("allStock", `refined stock ${c.map((l) => l.id).join()}`), c;
    }
    await this.allStock(n, i), this.saw.stockType === "linear" && await this.rebalanceUnplacedShapes(), this.config.secondRun.enabled && await this.secondRun(), this.config.captureProfile && "profileEnd" in console && typeof console.profileEnd == "function" && console.profileEnd(e);
    const r = [];
    for (const s of this.stockList)
      if (s.segments)
        for (const o of s.segments) {
          const a = o.shapes?.filter((c) => ht(c) && c.added) || [];
          r.push(...a);
        }
    for (const s of this.shapeList)
      if (!(!z(s) || !s.added)) {
        for (const o of r)
          if (o.shapes.some((a) => a.autoId === s.autoId)) {
            s.group.addedAsGroup = o.autoId;
            break;
          }
      }
    for (let s = this.shapeList.length; s--; ) {
      const o = this.shapeList[s];
      rt(o) && (o.added && o.stock && o.placeMyShapes(o.stock), this.shapeList.splice(s, 1), this.shapeList.push(...o.shapes));
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
    for (let u = _t(this.stockList, !1); u.length > 0; u = _t(this.stockList, !1)) {
      let h = ct(this.shapeList);
      if (!h?.length) break;
      for (const y of u)
        if (!ct(h, y, "some")) {
          k("allStock", `stock ${y.id} is unusable`), y.unusable = !0;
          break;
        }
      const f = n.call(
        this,
        u,
        h
      );
      if (N([() => E(f.every((y) => ee(y.saw))).to.be.true]), !f.length) break;
      if (l) {
        const y = f.findIndex((x) => x?.parentId === l);
        y > -1 && f.unshift(f.splice(y, 1)[0]);
      }
      if (r = null, s = null, this.stockList.some((y) => y.used)) {
        k("stack", `🔄 Checking refined stock for stacks/duplicates: ${f.map((y) => y.id).join(", ")}`);
        for (const y of f) {
          k("stack", `current stock: ${y.id}`);
          const x = ct(
            h,
            y
          );
          if (x?.length) {
            if (i && (r = Il.call(this, y, i, x), r)) {
              i = r, o = y;
              break;
            }
            if (this.config.findDuplicatePatterns && (s = $l.call(this, y, x), s)) {
              i = y;
              break;
            }
          }
        }
      }
      if (!r && !s) {
        for (const g of f) {
          a = null;
          try {
            g.applyTrim();
          } catch (b) {
            k("info", `stock.applyTrim error ${b.message}`);
            continue;
          }
          const m = ct(this.shapeList);
          if (!m?.length) return;
          if (a = ct(m, g), !a?.length)
            if (g.allowExactFitShapes && (a = m.filter((b) => A.equalTo(
              b.l,
              g.l + g.trim.l1 + g.trim.l2
            ) && A.equalTo(
              b.w,
              g.w + g.trim.l1 + g.trim.l2
            ) || A.equalTo(
              b.w,
              g.w + g.trim.w1 + g.trim.w2
            ) && A.equalTo(
              b.l,
              g.l + g.trim.w1 + g.trim.w2
            ))), a?.length) g.removeTrim();
            else continue;
          if (!a?.length) {
            g.used = !1;
            continue;
          }
          if (this.config.filtering.enable && a.length > this.config.filtering.minTotal) {
            const b = a.length;
            a = xl(this.uniqueShapes, m, g, {
              similarityThreshold: this.config.filtering.similarityThreshold,
              selectionStrategy: "smallest",
              minTotal: this.config.filtering.minTotal
            });
            const I = a.length;
            k("allStock", `filtering reduced shapes by ${b - I}, orginal: ${b}, filtered: ${I}`);
          }
          await e.call(this, g, a), this.resetShapes(a, {
            keepScores: !1,
            removeGroups: !1,
            keepGuillotineData: !1
          }), u.length > 1 && a.filter((I) => B(I)).forEach((I) => I.destroy());
        }
        if (f.forEach((g) => g.used = !1), !this.bestResult || !this.bestResult?.stock)
          break;
        c = Tn(this.bestResult, this.stockList), c.score = this.bestResult.score, c.used = !0, i = c;
        const { updatedShapes: y, groups: x } = ae({
          bestResult: this.bestResult,
          shapeList: this.shapeList,
          relevantStock: f,
          stockList: this.stockList,
          resetShapes: this.resetShapes.bind(this)
        });
        if (x.length > 0 && this.groupList && x.forEach((g) => {
          this.groupList.find((b) => b.autoId === g.autoId) || this.groupList.push(g);
        }), de(y), this.bestResult?.offcut) {
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
      h = ct(this.shapeList);
      let d = [], p = [], S = 0;
      if (this.bestResult = null, this.bestPartialResult = null, r && (o?.autoAdd || We(this.stockList, o)))
        d.push(o);
      else {
        p = Rt(h, !1);
        const y = p.filter((m) => ut(m.stockLock)), x = new Set(y.flatMap((m) => Array.isArray(m.stockLock) ? m.stockLock : [m.stockLock]));
        x.size || k("allStock", "no new stock requirements found");
        for (const m of x) {
          const b = this.stockList.filter((I) => {
            if (m === I.parentId) {
              if (I.autoAdd)
                return !0;
              if (We(this.stockList, I))
                return !0;
            }
            return !1;
          });
          if (b.length && !b.find((I) => !I.used)) {
            const I = b[0].clone(b.length.toString());
            this.stockList.push(I), S++;
          }
        }
        p.filter((m) => !ut(m.stockLock) || !m.stockLock.length).length && !d.length && (d = _t(this.stockList).filter((m) => m.autoAdd || We(this.stockList, m)));
      }
      if (d.length && d.forEach((y) => {
        const x = y.clone(ro(this.stockList, y));
        this.stockList.push(x), r ? l = x.parentId : l = !1, S++;
      }), S ? (this.stockList.sort(Tt.AA), this?.job && this.job.updateProgress({
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
      }), this.useInventory && p.length && _t(this.stockList, !1).length === 0) {
        const y = await pl(
          p,
          this.saw,
          this.stockList
        );
        if (y.stockList.length) {
          const x = tn(y.stockList);
          x.length && this.stockList.push(...x);
        }
      }
    }
    this.stockList = this.stockList.filter((u) => u.used);
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
    const e = this.shapeList.filter((h) => !h.added && z(h));
    if (!e.length) return;
    const n = this.stockList.filter((h) => h.used && !h.stack?.stock);
    if (n.length < 2) return;
    k("rebalance", `${e.length} unplaced shapes, trying rebalance across ${n.length} stocks`);
    const i = this.saw.bladeWidth, r = /* @__PURE__ */ new Map();
    let s = 0;
    for (const h of n) {
      const f = this.shapeList.filter((d) => d.added && z(d) && d.stock?.autoId === h.autoId);
      r.set(h.autoId, f), s += f.length;
    }
    const o = Array.from(r.values()).flat(), a = [...o, ...e], c = this.ffdMultiBin1D(a, n, i);
    if (!c) return;
    const l = c.reduce((h, f) => h + f.length, 0);
    if (l <= s) return;
    k("rebalance", `better arrangement found: ${l} vs ${s} shapes across ${n.length} stocks`), o.forEach((h) => h.removeFromStock());
    for (const h of n)
      h.shapes = [], h.rootSegment = null, h.score = null;
    for (let h = 0; h < n.length; h++) {
      const f = n[h], d = c[h];
      if (!d.length) continue;
      f.applyTrim(), ao(d, f, null, "l"), f.used = !0;
      const p = d.reduce((S, y) => S + y.l, 0) + (d.length - 1) * i;
      f.score = {
        efficiency: p / f.l,
        totalShapesPlaced: d.length
      }, p + i < f.l && this.offcuts.push({
        x: p + i,
        l: f.l - p - i,
        w: f.w,
        stock: f
      });
    }
    const u = c.flat();
    de(u), k("rebalance", `rebalanced ${u.length} shapes across ${n.length} stocks`);
  }
  /**
   * Check if a shape is compatible with a stock for rebalancing
   * Validates stockLock, material match, thickness match, and linear width match
   */
  isShapeCompatibleWithStock(e, n) {
    return !(!Ze(e, n) || !lo(e, n, ut(e.material) && ut(n.material)) || !co(e, n, ut(e.t) && ut(n.t)) || !uo(e, n, this.saw));
  }
  /**
   * First-Fit-Decreasing bin packing for 1D shapes across N bins
   * Tries multiple heuristics (best-fit and worst-fit) and returns whichever places more shapes
   */
  ffdMultiBin1D(e, n, i) {
    const r = n.map((d) => d.l), s = [...e].sort((d, p) => p.l - d.l), o = (d) => {
      const p = r.map(() => []), S = [...r];
      for (const y of s) {
        let x = -1, g = d ? 1 / 0 : -1;
        for (let m = 0; m < p.length; m++) {
          if (!this.isShapeCompatibleWithStock(y, n[m])) continue;
          const b = p[m].length > 0 ? y.l + i : y.l;
          S[m] >= b && (d ? S[m] < g && (x = m, g = S[m]) : S[m] > g && (x = m, g = S[m]));
        }
        if (x >= 0) {
          const m = p[x].length > 0 ? y.l + i : y.l;
          p[x].push(y), S[x] -= m;
        }
      }
      return p;
    }, a = o(!0), c = o(!1), l = a.reduce((d, p) => d + p.length, 0), u = c.reduce((d, p) => d + p.length, 0);
    let h = l >= u ? a : c, f = Math.max(l, u);
    if (f < s.length && s.length <= 30) {
      const d = this.exhaustiveBinPack1D(s, n, i);
      if (d) {
        const p = d.reduce((S, y) => S + y.length, 0);
        p > f && (h = d, f = p);
      }
    }
    return f === 0 ? null : h;
  }
  /**
   * Exhaustive backtracking bin packing for 1D shapes across N bins
   * Tries all assignments with pruning to find the maximum number of placed shapes
   * Only practical for small shape counts (≤30)
   */
  exhaustiveBinPack1D(e, n, i) {
    const r = n.map(($) => $.l), s = [...e].sort(($, P) => P.l - $.l), o = s.length, a = r.length, c = s.map(
      ($) => n.map((P) => this.isShapeCompatibleWithStock($, P))
    ), l = s.map(($, P) => `${$.l}|${c[P].join("")}`);
    let u = null, h = 0;
    const f = r.map(() => []), d = [...r], p = 1e6, S = 500, y = Date.now();
    let x = 0, g = !1;
    const m = ($) => {
      const P = r[$], T = f[$].length;
      for (let M = 0; M < $; M++) {
        if (r[M] !== P || f[M].length !== T) continue;
        let R = !0;
        for (let O = 0; O < T; O++)
          if (f[M][O].l !== f[$][O].l) {
            R = !1;
            break;
          }
        if (R) return !0;
      }
      return !1;
    };
    let b = 0, I = !1;
    const w = ($, P) => {
      if (g) return;
      if (x++, x >= p || (x & 4095) === 0 && Date.now() - y > S) {
        g = !0;
        return;
      }
      if (P + (o - $) <= h) return;
      if ($ === o) {
        P > h && (h = P, u = f.map((G) => [...G]));
        return;
      }
      const T = $ > 0 && l[$] === l[$ - 1], M = b, R = I;
      T || (b = 0, I = !1);
      const O = s[$];
      if (!I)
        for (let G = b; G < a && !g; G++) {
          if (!c[$][G] || m(G)) continue;
          const v = f[G].length > 0 ? O.l + i : O.l;
          if (d[G] < v) continue;
          f[G].push(O), d[G] -= v;
          const D = b;
          if (b = G, w($ + 1, P + 1), b = D, f[G].pop(), d[G] += v, h === o) {
            b = M, I = R;
            return;
          }
        }
      const Y = I;
      I = !0, w($ + 1, P), I = Y, b = M, I = R;
    };
    return w(0, 0), g && k("exhaustiveBinPack1D", `aborted after ${x} nodes / ${Date.now() - y}ms - returning best partial (${h}/${o} placed)`), u;
  }
  /**
   * this idea with secondRun is to redistribute smaller parts to the least efficient stock - ideally reducing the number of stock needed
   * [] only look at stock with a single shape?
   */
  async secondRun() {
    k("secondRun", "starting second run...");
    const e = this.stockList.filter((s) => s.used);
    if (e.filter((s) => s.stack?.number && !s.stack?.stock).forEach((s) => {
      e.filter((o) => o.stack?.stock && nt(o.stack.stock) && o.stack.stock.id === s.id).forEach((o) => {
        o.stack = null, o.rootSegment = s.rootSegment;
      }), s.stack = null;
    }), e[0].cutType !== "guillotine") return;
    N([
      () => E(e.length).equal(this.stockList.length),
      () => E(e.every((s) => s.score)).to.be.true,
      () => E(e.every((s) => s.shapes?.length)).to.be.true
    ]), e.sort((s, o) => s.score.efficiency - o.score.efficiency), k("secondRun", `sorted stock, ${e.map((s) => s.id)}`);
    const i = [], r = [];
    for (const s of e)
      s.score.efficiency >= this.config.secondRun.efficiencyCutoff && s.score.totalShapesPlaced > 1 ? i.push(s) : r.push(s);
    if (!(!i.length || !r.length)) {
      i.sort((s, o) => o.score.efficiency - s.score.efficiency), r.sort((s, o) => o.score.efficiency - s.score.efficiency), k("secondRun", `sorted efficient stock, ${i.map((s) => s.id)}`), k("secondRun", `sorted inefficient stock, ${r.map((s) => s.id)}`);
      for (const s of i) {
        if (!r.length) break;
        const o = [];
        for (let h = 0; h < s.shapes.length; h++) {
          const f = s.shapes[h];
          if (!f) throw new Error("shape not found in donorStock.shapes");
          if (B(f)) {
            f.placeMyShapes(s), f.shapes = f.shapes.map((d) => Object.assign({}, d)), s.shapes.splice(h, 1, ...f.shapes), h--;
            continue;
          }
          if (z(f))
            f.reset(), o.push(f);
          else {
            const d = this.shapeList.find((p) => p.id === f.id);
            if (!d) throw new Error(`shape ${f.id} not found in shapeList`);
            d.reset(), o.push(d), s.shapes[h] = d;
          }
        }
        const a = /* @__PURE__ */ new Set();
        let c, l, u = null;
        for (; o.length > 0 && (c = r.find((g) => !g || a.has(g?.id) ? !1 : o.every((m) => this.isShapeCompatibleWithStock(m, g))), !!c); ) {
          k("secondRun", `recipientStock - ${c.id}`), a.add(c.id);
          const h = Lt.getCalculationType(s);
          if (!h) throw new Error(`calculation type not found for stock ${s.id}`);
          const f = c.cutPreference === "l" ? "x" : "y";
          let d = [];
          if (l = c.rootSegment, k("secondRun", `second run, donor stock ${s.id}, recipient stock ${c.id}`), u) {
            u.shapes.forEach((m, b) => {
              if (!z(m)) {
                const I = this.shapeList.find((w) => w.id === m.id);
                u.shapes[b] = I;
              }
            }), c.shapes.forEach((m, b) => {
              if (!z(m)) {
                const I = this.shapeList.find((w) => w.id === m.id);
                c.shapes[b] = I;
              }
            });
            let g = !1;
            if (this.config.secondRun.stack && (g = Ss.call(this, c, u, [...o, ...c.shapes], this.shapeList)), g) {
              c.stack = { stock: u }, u.stack ? u.stack?.number && u.incrementStack() : u.stack = { number: 2 }, c.shapes.forEach((b) => {
                const I = o.findIndex((w) => w.id === b.id);
                I > -1 && (o.splice(I, 1), s.shapes.splice(s.shapes.findIndex((w) => w.id === b.id), 1));
              });
              const m = r.findIndex((b) => b.id === c.id);
              m > -1 && r.splice(m, 1), k("secondRun", `stack found for ${c.id} in second run`), de(c.shapes);
              continue;
            }
          }
          if (!l) throw new Error("no root segment found in second run");
          if (es(l, (g) => {
            if (g.offcut)
              return g[f] === 0 && (g.cutDirection = c.cutPreference, g.phase = 1), g.addToStock(c), d.push(g), !1;
          }), !d.length || (d = tn(d), !d.length)) continue;
          await Lt[h].call(
            this,
            { secondRun: !0 },
            c,
            o,
            d
          );
          const p = o.length;
          for (let g = o.length; g--; )
            o[g].added && o.splice(g, 1);
          const S = o.length, y = p - S;
          if (k("info", `second run, added ${y}`), u = c, p - S === 0) continue;
          const x = r.findIndex((g) => g.id === c.id);
          x > -1 && r.splice(x, 1), de(c.shapes);
        }
        if (!o.length || o.every((h) => h.added))
          s.used = !1, s.shapes = [], c.shapes.push(...s.shapes);
        else {
          k("info", `second run, not all shapes moved, reverting ${s.shapes.length} shapes`);
          for (const h of s.shapes) {
            const f = this.shapeList.find((d) => d.id === h.id);
            if (!f) throw new Error("original shape not found in second run");
            f.update(h), f.addToStock(s), N([
              () => E(f.added).to.be.true,
              () => E(f.stock?.id).to.equal(s.id),
              () => E(f.x).to.equal(h.x),
              () => E(f.y).to.equal(h.y)
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
          if (B(l) && l.added && l.shapes?.length)
            for (const u of l.shapes)
              a.add(u.autoId);
        const c = e.length;
        for (let l = c; l--; ) {
          const u = e[l];
          if (rt(u)) {
            u.added || e.splice(l, 1);
            continue;
          }
          if (B(u)) {
            if (u.shapes?.length)
              for (const h of u.shapes)
                h.reset({
                  keepScores: n,
                  keepGuillotineBatchData: s,
                  keepGroupData: !1,
                  keepFirstShapeSampleRotations: o
                });
            u.added || e.splice(l, 1);
          } else
            a.has(u.autoId) ? e.splice(l, 1) : u.reset({
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
          if (rt(l)) {
            l.added = !1;
            continue;
          }
          if (B(l)) {
            if (l.shapes?.length)
              for (const u of l.shapes)
                u.reset({
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
function Al() {
  q("Issue", Qt), q("Line", oe), q(Z.Line, oe), q("Point", _e), q(Z.Point, _e), q("Rectangle", Dn), q(Z.Rectangle, Dn), q("Container", je), q(Z.Container, je), q("GuillotineState", be), q(Z.GuillotineState, be), q("Placeable", He), q(Z.Placeable, He), q("Group", Je), q(Z.Group, Je), q("Offcut", ve), q(Z.Offcut, ve), q("Segment", Ct), q(Z.Segment, Ct), q("Shape", Ue), q(Z.Shape, Ue), q("Stock", Qe), q(Z.Stock, Qe), q("Banding", Mn), q("banding", Mn), q("Corner", Ln), q("corner", Ln), q("Cut", we), q(Z.Cut, we), q("Extras", On), q(Z.Extras, On), q("Finish", Gn), q("finish", Gn), q("HingeHole", Fn), q("hingeHole", Fn), q("Hole", Bn), q("hole", Bn), q("ImageUpload", Un), q("imageUpload", Un), q("InputSaw", Xn), q(Z.InputSaw, Xn), q("InputShape", qn), q(Z.InputShape, qn), q("InputStock", Nn), q(Z.InputStock, Nn), q("InputUserGroup", Yn), q(Z.InputUserGroup, Yn), q("Machining", Wn), q(Z.Machining, Wn), q("NestingShape", Ee), q(Z.NestingShape, Ee), q("Optimiser", Si), q(Z.Optimiser, Si), q("Planing", zn), q("planing", zn), q("PointCollection", Ke), q(Z.PointCollection, Ke), q("Saw", Pe), q(Z.Saw, Pe);
}
export {
  Al as initializeStaticRegistry
};

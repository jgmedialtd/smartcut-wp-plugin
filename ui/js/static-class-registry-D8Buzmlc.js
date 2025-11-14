import { D as gs, E as ms, F as Ss, G as ze, H as ce, J as Ri, K as ys, L as ws, M as bs, N as $s, O as ot, P as xs, Q as Is, R as Ts, T as ks, U as Cs, V as dt, W as z, X as Re, Y as we, _ as Ps, $ as Me, a0 as Es, a1 as v, a2 as V, a3 as Ie, a4 as at, a5 as I, a6 as Se, a7 as N, a8 as Y, a9 as A, aa as me, ab as F, ac as D, ad as $, ae as vs, af as pt, ag as Nt, ah as Ai, ai as Z, aj as Li, ak as ee, al as Ue, am as gt, x as be, an as te, ao as pe, ap as lt, aq as mt, ar as Q, as as Ae, at as Oe, au as Jt, av as Ds, aw as Qt, ax as Mi, ay as Rs, az as ge, aA as qe, aB as Te, aC as Ee, aD as As, aE as Ls, aF as Fe, aG as Ms, aH as Oi, aI as Os, aJ as qs, aK as Fs, aL as qi, aM as Fi, aN as Gs, aO as St, aP as Bs, aQ as he, aR as st, aS as Gi, aT as Ns, aU as Zt, aV as Hs, aW as Ws, aX as zs, aY as ei, aZ as Us, a_ as yt, a$ as wt, b0 as js, b1 as Ys, b2 as _s, C as He, S as je, b3 as Xs, b4 as bt, b5 as $t, b6 as Vs, b7 as Bi, b8 as Ks, b9 as Le, ba as Js, bb as Qs, bc as ct, bd as ut, be as Zs, bf as R, bg as ti, bh as ii, bi as si, bj as ni, bk as ri, bl as oi, bm as ai, bn as li, bo as ci, bp as ui, I as fi, bq as hi, br as di, bs as pi } from "./components-DaaD3Nlt.js";
import { n as ie, _ as Ge, b as ue, s as $e, o as Ni, c as gi, a as ft, G as se, H as j, I as ne, J as ve, K as en, L as U, M as Ye, N as X, O as tn } from "./vendor-zod-DtqKDYvi.js";
import { m as Hi, a as sn } from "./vendor-lodash-CYGhmG8H.js";
import { k as J } from "./vendor-tCV_BFOF.js";
import { m as Wi } from "./vendor-mongoose-C3uS1h_U.js";
import "./vendor-i18next-CacwiV0i.js";
const nn = ["l", "w"], rn = gs.extend({
  // Identity - offcuts need IDs for tracking and export
  id: $e().default(""),
  // Note: offcut property is inherited from Rectangle schema (boolean default false)
  // The Offcut constructor ensures it's always true
  // Offcut-specific fields
  addToInventory: ue().default(!1),
  flex: Ge(nn).optional(),
  // Cost is calculated, not set
  cost: ie().min(0).nullable().default(0)
}), on = {
  ...ms,
  // Include parent computed properties
  // Check if offcut has been added
  hasBeenAdded: {
    compute: (e) => e.added === !0,
    metadata: {
      cache: !1,
      dependencies: [],
      // added is inherited from Placeable
      returnType: "boolean"
    }
  },
  // Get flex direction (alias for flex property)
  flexDirection: {
    compute: (e) => e.flex,
    metadata: {
      cache: !1,
      dependencies: ["flex"],
      returnType: "string | undefined"
    }
  },
  // Calculate utilization percentage
  utilization: {
    compute: (e) => e.added ? 100 : e.addToInventory ? 50 : 0,
    metadata: {
      cache: !1,
      dependencies: ["addToInventory"],
      // added is inherited from Placeable
      returnType: "number"
    }
  }
}, zi = ["root", "firstShape", "near", "far", ""], an = Ss.extend({
  // Cutting information
  cuts: ce("Cut").default([]).behavior({ compress: "exclude" }),
  // Stock reference - serialize as reference only (default zRef behavior)
  stock: ze("Stock", { nullable: !0, description: "Stock reference for this segment" }),
  phase: ie().int().min(0).nullable().default(null),
  cutDirection: Ge(Ri).nullable().default(null).describe("The primary cut direction for this segment"),
  // Segment properties
  merged: ue().default(!1),
  firstShape: ze("Shape"),
  children: ce("Segment", {
    description: "Child segments"
  }).behavior({
    serialize: "full",
    // Serialize the full segment objects
    compress: "full",
    // Even in compressed mode, keep full objects
    clone: "copy"
  }),
  parent: ze("Segment", { nullable: !0 }).behavior({
    serialize: "reference",
    // Parent can stay as reference
    compress: "exclude"
    // Exclude parent in compressed mode to avoid circular refs
  }),
  type: Ge(zi).nullable().default(null),
  placementOrder: ie().int().min(0).optional(),
  // Beam saw specific
  hasBeamTrim: ue().default(!1),
  hasHeadCut: ue().default(!1),
  isInitial: ue().default(!1),
  // Trim offcut flag - marks segments that represent trim areas (W1, W2, L1 for beam)
  isTrimOffcut: ue().default(!1),
  // Visualization flags
  completed: ue().optional(),
  rowSegment: ue().optional()
});
Ni({
  x: ie().optional(),
  y: ie().optional(),
  l: ie().optional(),
  w: ie().optional(),
  type: Ge(zi),
  parent: gi(),
  // Segment instance
  stock: gi(),
  // Stock instance
  offcut: ue().optional(),
  merged: ue().optional(),
  cutDirection: Ge(Ri).nullable().optional()
});
const ln = {
  ...ys,
  // Include parent computed properties
  root: {
    compute: (e) => {
      let t = e;
      for (; t.parent; )
        t = t.parent;
      return t;
    },
    metadata: {
      cache: !1,
      // Don't cache as parent relationships can change
      dependencies: [],
      returnType: "any"
    }
  },
  depth: {
    compute: (e) => {
      let t = 0, i = e.parent;
      for (; i; )
        t++, i = i.parent;
      return t;
    },
    metadata: {
      cache: !1,
      // Don't cache as parent relationships can change
      dependencies: [],
      returnType: "number"
    }
  }
}, cn = Ni({
  id: $e().optional(),
  url: $e().optional(),
  size: ie().optional(),
  mimeType: $e().optional(),
  name: $e().optional(),
  width: ie().optional(),
  height: ie().optional()
}), un = ws.extend({
  // ImageUpload specific properties
  images: ft(cn).default([]).describe("Array of uploaded images"),
  maxImages: ie().default(5).describe("Maximum number of images allowed"),
  allowedTypes: ft($e()).default(["image/jpeg", "image/png", "image/gif"]).describe("Allowed MIME types"),
  maxSizeBytes: ie().default(5242880).describe("Maximum file size in bytes (default 5MB)"),
  description: $e().optional().describe("Description of uploaded images"),
  tags: ft($e()).default([]).describe("Tags associated with images")
  // Note: faces and sides inherited from Extra base
}), fn = {
  // Inherit computed properties from Extra base class
  ...bs,
  // Check if any images are uploaded
  hasAnyImages: {
    compute: (e) => e.faces ? Object.keys(e.faces).some((t) => {
      const i = e.faces[t];
      return i !== void 0 && i !== !1 && i !== "";
    }) : !1,
    metadata: {
      cache: !1,
      dependencies: ["faces"],
      returnType: "boolean"
    }
  },
  // Get all faces with images
  activeFaces: {
    compute: (e) => e.faces ? Object.keys(e.faces).filter((t) => {
      const i = e.faces[t];
      return i !== void 0 && i !== !1 && i !== "";
    }) : [],
    metadata: {
      cache: !1,
      dependencies: ["faces"],
      returnType: "string[]"
    }
  }
}, hn = $s, dn = {
  cacheResults: !0
};
let Ui;
Ui = Hi({}, hn, dn);
let oe = Ui;
function pn() {
  if (oe.guillotine.secondPass && !oe.guillotine.strips.rearrange)
    throw new Error("config.guillotine.secondPass requires config.guillotine.strips.rearrange to be enabled");
  if (oe.captureProfile && oe.runTests)
    throw new Error("config.captureProfile and config.runTests should not be both enabled");
}
pn();
function gn(e, t = null) {
  if (!e) return oe;
  const i = mn(e, t);
  if (!i) return oe;
  const n = Hi({}, oe, i);
  return console.log(`[CONFIG] custom config applied for ${e?.username}`), n;
}
function mn(e, t = null) {
  if (!e || !e?.config) return null;
  switch (e.id) {
    //Glassense Kolu
    case "662a2f8ad28745b63665e68a": {
      const i = "shapeList" in t ? t.shapeList : t.inputShapes, n = i ? i.reduce((o, s) => o + (s.q || 0), 0) : 0;
      if (t) if (n <= 80) {
        const o = { ...e.config };
        return o.groups.guillotine.strips = oe.groups.guillotine.strips, o.sample.guillotine = 4, o.guillotine.stripShapes.iterations = oe.guillotine.stripShapes.iterations, o;
      } else
        return e.config;
      else return e.config;
    }
  }
  return e.config;
}
function mi(e, t, i) {
  return sn(e, t, i);
}
const Sn = se({
  // Context - using z.any() for complex external types
  job: X().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: U().nullable().default(null).describe("Socket.io connection ID"),
  user: X().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: X().describe("Configuration object"),
  // Type: Config
  api: j().nullable().default(null).describe("API mode flag"),
  app: j().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: ze("Saw").describe("Saw configuration"),
  stockList: ce("Stock").default([]).describe("List of stock materials"),
  shapeList: ot(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: ce("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: ce("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: ce("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: ot(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: ot(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: xs,
  // Results storage
  cutList: ce("Cut").default([]).describe("List of cuts to make"),
  segmentList: ce("Segment").default([]).describe("List of segments"),
  offcuts: ce("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: ce("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: j().default(!1).describe("Use inventory system"),
  successMetric: U().default(oe.successMetric).describe("Metric for optimization success"),
  enableEvo: j().default(!0).describe("Enable evolutionary algorithm"),
  weighting: ve(U(), X()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: X().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: X().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: se({
    placement: Ye().default(0),
    group: Ye().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: j().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: j().default(!1).describe("Run guillotine second pass"),
  runningEvo: j().default(!1).describe("Currently running evolution"),
  evolutionVisData: ne(ve(U(), en())).default([]).describe("Evolution visualization data"),
  final: j().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: j().default(!1).describe("Has minimum spacing requirement"),
  hasShapeLevelMinSpacing: j().default(!1).describe("Has shape-level minimum spacing")
}), yn = {}, wn = tn(["decimal", "fraction"]);
se({
  job: X().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Allow additional properties like __entityType and autoId
  inputSaw: Is,
  inputShapes: ne(Cs),
  inputStock: ne(ks),
  inputUserGroups: ne(Ts).optional(),
  // Number format for conversion
  numberFormat: wn.optional(),
  // Algorithm configuration
  enableEvo: j().default(!0),
  weighting: X().optional(),
  successMetric: U().optional(),
  useInventory: j().default(!1),
  // Context
  socketId: U().optional(),
  user: X().optional(),
  // IUser type
  // Application flags
  widget: j().optional(),
  api: j().optional(),
  app: j().optional(),
  domain: U().optional(),
  // Extras options (centralized configuration)
  extrasOptions: se({
    banding: se({
      options: se({
        sides: ve(U(), ne(U())).optional()
      }).optional()
    }).optional(),
    finish: se({
      options: se({
        faces: ve(U(), ne(U())).optional()
      }).optional()
    }).optional(),
    planing: se({
      options: se({
        sides: ve(U(), ne(U())).optional(),
        faces: ve(U(), ne(U())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // API specific
  config: X().optional(),
  v: Ye().optional(),
  // API version
  webhook: U().optional(),
  //source
  sourceVersion: U().nullish(),
  source: U().optional()
});
se({
  job: X().optional(),
  // Type: Job from BullMQ
  saw: X(),
  // Runtime Saw instance
  shapeList: ne(X()),
  // Runtime Shape instances
  stockList: ne(X()),
  // Runtime Stock instances
  userGroups: ne(X()).optional(),
  // Runtime Group instances
  enableEvo: j(),
  weighting: X().optional(),
  successMetric: U().optional(),
  useInventory: j(),
  socketId: U().optional(),
  user: X().optional(),
  widget: j().optional(),
  api: j().optional(),
  app: j().optional(),
  domain: U().optional(),
  config: X().optional(),
  v: Ye().optional(),
  webhook: U().optional()
});
class _e extends dt {
  // Required: Define schema and computed properties for SchemaClass
  static schema = rn;
  static computedProperties = on;
  constructor(t = {}) {
    const i = { ...t, offcut: !0 };
    super(i), this.offcut = !0;
  }
  /**
    * Get entity type
    */
  getType() {
    return z.Offcut;
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
  setFlexDirection(t) {
    if (t && !["l", "w", void 0].includes(t))
      throw new Error('Invalid flex direction. Must be "l", "w", or undefined');
    this.flex = t;
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
  calculateCost(t) {
    const i = this.l * this.w;
    return this.cost = i * t, this.cost;
  }
  /**
    * Check if offcut is useful (based on size)
    */
  isUseful(t = 100) {
    return this.l * this.w >= t;
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
  update(t) {
    super.update(t), this.offcut = !0;
  }
  /**
    * Create offcut from shape remainder
    */
  static fromRemainder(t) {
    return new _e({
      ...t,
      // Include all rectangle properties (l, w, x, y, material)
      flex: t.flex,
      offcut: !0,
      addToInventory: !1,
      added: !1
    });
  }
}
class de extends Re {
  // Required: Define schema and computed properties for SchemaClass
  static schema = an;
  static computedProperties = ln;
  // Note: children is defined in the schema as zRefArray<Segment>
  // No need for getter/setter or backing field - SchemaClass handles it automatically
  constructor(t = {}) {
    const i = { ...t };
    if (i.preventAutoRotation = !0, i.skipValidation = !0, i.parent && i.autoId && i.parent.autoId === i.autoId && delete i.autoId, i.children || (i.children = []), Array.isArray(i.children) && i.autoId && (i.children = i.children.filter(
      (n) => n && n.autoId !== i.autoId
    )), super(i), this.parent && this.autoId === this.parent.autoId)
      throw new Error(`Segment cannot have same autoId as parent: ${this.autoId}`);
    if (this.parent) {
      if (this.type === "firstShape")
        return;
      if (Array.isArray(this.parent.children) || (this.parent.children = []), this.parent.autoId === this.autoId) {
        this.parent = null;
        return;
      }
      if (!this.parent.children.some((o) => o.autoId === this.autoId)) {
        if (this.parent === this) {
          this.parent = null;
          return;
        }
        const o = [...this.parent.children, this];
        this.parent.children = o;
      }
    }
  }
  /**
   * Get entity type
   */
  getType() {
    return z.Segment;
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
  reset(t = []) {
    if (this.stock && (this.stock.used = !1), this.children && this.children.length > 0)
      for (const i of this.children)
        i && i.parent === this && (i.parent = null);
    this.shapes = t, this.children = [], this.parent = null, this.cuts = [], this.phase = null;
  }
  /**
   * Clear all children and their parent references
   */
  clearChildren() {
    if (this.children && this.children.length > 0) {
      for (const t of this.children)
        t && t.parent === this && (t.parent = null);
      this.children = [];
    }
  }
  /**
   * Add segment to stock (when used as an offcut)
   * Similar to Placeable.addToStock but for segments
   */
  addToStock(t) {
    this.stock = t;
  }
  /**
   * Check if this segment is a descendant of another segment
   */
  isDescendantOf(t) {
    let i = this.parent;
    const n = /* @__PURE__ */ new Set();
    for (; i; ) {
      if (i.autoId === t.autoId)
        return !0;
      if (n.has(i.autoId))
        return console.warn(`[INFINITE LOOP] Parent chain has a loop at segment ${i.autoId}`), !1;
      n.add(i.autoId), i = i.parent;
    }
    return !1;
  }
  /**
   * Add child segment (mainly for changing parents after creation)
   * Note: Most parent-child relationships are now established automatically in the constructor
   */
  addChild(t) {
    if (this.autoId === t.autoId)
      throw console.error(`[SELF-REFERENCE ATTEMPT] Trying to add segment ${this.autoId} as its own child!`), console.error(new Error().stack), new Error(`[SELF-REFERENCE] Cannot add segment ${this.autoId} as its own child`);
    if (this === t)
      throw console.error(`[SELF-REFERENCE OBJECT] Same object reference! Segment ${this.autoId}`), console.error(new Error().stack), new Error("[SELF-REFERENCE] Cannot add segment to itself");
    if (!(t.parent && t.parent.autoId === this.autoId)) {
      if (this.isDescendantOf(t))
        throw new Error(`Circular reference: parent ${this.autoId} would become a descendant of child ${t.autoId}`);
      if (Array.isArray(this.children) || (this.children = []), t.parent && t.parent !== this) {
        const i = t.parent;
        if (Array.isArray(i.children)) {
          const n = i.children.indexOf(t);
          n !== -1 && i.children.splice(n, 1);
        }
        we() && console.log(`[PARENT CHANGE] Moving ${t.autoId} from parent ${i.autoId} to ${this.autoId}`);
      }
      this.children.some((i) => i.autoId === t.autoId) || (this.children = [...this.children, t], t.parent = this);
    }
  }
  /**
   * Remove child segment
   */
  removeChild(t) {
    const i = this.children;
    if (Array.isArray(i)) {
      const n = i.indexOf(t);
      n !== -1 && (i.splice(n, 1), t.parent = null);
    }
  }
}
class Si extends Ps {
  // Properties are dynamically created from schema via SchemaClass
  // Static schema reference for automatic updates
  static schema = un;
  static computedProperties = fn;
  /**
   * Get entity type
   */
  getType() {
    return "imageUpload";
  }
  constructor(t = {}) {
    super(t), this.validate();
  }
  /**
   * Validate image upload configuration
   */
  validate(t) {
    const i = [];
    if (this.images && this.images.length > this.maxImages && i.push(new Me({
      item: t,
      message: `Too many images: ${this.images.length} exceeds maximum of ${this.maxImages}`,
      type: "error"
    })), this.images)
      for (let n = 0; n < this.images.length; n++) {
        const o = this.images[n];
        if (o.url || i.push(new Me({
          message: `Image ${n + 1} is missing URL`,
          type: "error"
        })), o.mimeType && !this.allowedTypes.includes(o.mimeType) && i.push(new Me({
          message: `Image ${n + 1} has unsupported type: ${o.mimeType}`,
          type: "warning"
        })), o.size && o.size > this.maxSizeBytes) {
          const s = (o.size / 1048576).toFixed(2), r = (this.maxSizeBytes / 1048576).toFixed(2);
          i.push(new Me({
            message: `Image ${n + 1} is too large: ${s}MB exceeds ${r}MB`,
            type: "warning"
          }));
        }
      }
    return this.issues = i, i;
  }
  /**
   * Calculate storage cost
   */
  getCost(t) {
    const n = (this.images || []).reduce((s, r) => s + (r.size || 0), 0) / 1048576;
    return Math.ceil(n * 0.01 * 100) / 100;
  }
  /**
   * Get description
   */
  getDescription() {
    if (!this.images || this.images.length === 0)
      return "No images uploaded";
    const t = this.images ? this.images.length : 0, n = ((this.images || []).reduce((o, s) => o + (s.size || 0), 0) / 1048576).toFixed(2);
    return `${t} image${t !== 1 ? "s" : ""} (${n}MB)`;
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
  isApplicable(t) {
    return this.enabled;
  }
  /**
   * Clone
   */
  // clone() method removed - using base class implementation from AutoSerializable
  /**
   * Add an image
   */
  addImage(t) {
    return this.images || (this.images = []), this.images.length >= (this.maxImages || 5) ? !1 : (this.images.push(t), !0);
  }
  /**
   * Remove an image by URL
   */
  removeImage(t) {
    if (!this.images) return !1;
    const i = this.images.findIndex((n) => n.url === t);
    return i !== -1 ? (this.images.splice(i, 1), !0) : !1;
  }
  /**
   * Get image by URL
   */
  getImage(t) {
    return this.images ? this.images.find((i) => i.url === t) : void 0;
  }
  /**
   * Get total size in bytes
   */
  getTotalSize() {
    return this.images.reduce((t, i) => t + (i.size || 0), 0);
  }
  /**
   * Get images by tag
   */
  getImagesByTag(t) {
    return this.tags && this.tags.includes(t) ? this.images || [] : [];
  }
  /**
   * Add a tag
   */
  addTag(t) {
    this.tags || (this.tags = []), this.tags.includes(t) || this.tags.push(t);
  }
  /**
   * Remove a tag
   */
  removeTag(t) {
    if (!this.tags) return;
    const i = this.tags.indexOf(t);
    i !== -1 && this.tags.splice(i, 1);
  }
}
J.colors = [
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
const De = J("logs"), xt = J("cuts"), Xe = J("groups"), Ve = J("guillotine"), It = J("results"), Tt = J("scoring"), kt = J("firstShapes"), Ct = J("calculations"), Pt = J("subset"), Et = J("secondRun"), vt = J("stack"), Ke = J("errors"), Dt = J("allStock"), Je = J("reset");
Ke.color = 1;
Xe.color = 14;
Ve.color = 159;
Je.color = 11;
function bn(e = "info", t, i) {
  const n = t.map((r) => {
    const l = { ...r };
    for (const a in l)
      typeof l[a] == "string" && l[a].length > 30 && (l[a] = l[a].slice(0, 50) + "...");
    return l;
  }), o = console.table;
  let s = "";
  switch (console.table = (r, l) => {
    const a = console.log;
    console.log = (c) => {
      s += c + `
`;
    }, o(r, l), console.log = a;
  }, console.table(n, i), e) {
    case "info":
      De(s);
      break;
    case "guillotine":
      Ve(s);
      break;
    case "results":
      It(s);
      break;
    case "secondRun":
      Et(s);
      break;
    case "cuts":
      xt(s);
      break;
    case "scoring":
      Tt(s);
      break;
    case "calculations":
      Ct(s);
      break;
    case "stack":
      vt(s);
      break;
    case "subset":
      Pt(s);
      break;
    case "errors":
      Ke(s);
      break;
    case "allStock":
      Dt(s);
      break;
    case "firstShapes":
      kt(s);
      break;
    case "groups":
      Xe(s);
      break;
    case "reset":
      Je(s);
      break;
    default:
      De(s);
  }
  console.table = o;
}
const $n = "\x1B[31m", xn = "\x1B[0m", k = (e = "info", t, i = null, n = null, o = !1, s) => {
  if (s?.enableLogging, o) {
    switch (e) {
      case "info":
        De(t);
        break;
      case "guillotine":
        Ve(t);
        break;
      case "results":
        It(t);
        break;
      case "secondRun":
        Et(t);
        break;
      case "cuts":
        xt(t);
        break;
      case "scoring":
        Tt(t);
        break;
      case "calculations":
        Ct(t);
        break;
      case "stack":
        vt(t);
        break;
      case "subset":
        Pt(t);
        break;
      case "errors":
        Ke(`${$n}${t}${xn}`);
        break;
      case "allStock":
        Dt(t);
        break;
      case "firstShapes":
        kt(t);
        break;
      case "groups":
        Xe(t);
        break;
      case "reset":
        Je(t);
        break;
      default:
        De(t);
    }
    if (i)
      switch (e) {
        case "info":
          De(i);
          break;
        case "guillotine":
          Ve(i);
          break;
        case "results":
          It(i);
          break;
        case "secondRun":
          Et(i);
          break;
        case "cuts":
          xt(i);
          break;
        case "scoring":
          Tt(i);
          break;
        case "calculations":
          Ct(i);
          break;
        case "stack":
          vt(i);
          break;
        case "subset":
          Pt(i);
          break;
        case "errors":
          Ke(i);
          break;
        case "allStock":
          Dt(i);
          break;
        case "firstShapes":
          kt(i);
          break;
        case "groups":
          Xe(i);
          break;
        case "reset":
          Je(i);
          break;
        default:
          De(i);
      }
    n && bn(e, n);
  }
};
Es(k);
function In(e, t) {
  return e?.length && e.forEach((i) => {
    t = t.filter((n) => !(n.id === i.id || v(n) && n.shapes.find((o) => o.id === i.id)));
  }), t;
}
const re = {
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
      const e = this.standard();
      return e.similarDimensions = 1, e.fenceConsistency = 1, e;
    },
    stock() {
      return this.standard();
    },
    beam() {
      const e = this.standard();
      return e.similarDimensions = 0, e;
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
function ye(e, t) {
  if (!t) return e;
  const i = t.weighting;
  if (!i) return e;
  for (const n in i)
    i[n] !== null && (e[n] = e[n] * i[n]);
  return e;
}
function Ht(e, t, i) {
  if (this?.weighting?.custom)
    return ye(this.weighting.custom, i);
  switch (e.cutType) {
    case "efficiency":
      if (t?.saw?.stockType === "roll")
        return ye(re.roll.efficiency(), i);
      break;
    case "beam":
      return ye(re.guillotine.beam(), i);
    case "guillotine": {
      if (t?.saw?.stockType === "roll")
        return ye(re.roll.guillotine(), i);
      switch (t.saw.guillotineOptions.strategy) {
        case "time":
          return ye(
            re.guillotine.time(),
            i
          );
        case "efficiency":
          return ye(
            re.guillotine.stock(),
            i
          );
        default:
          return ye(
            re.guillotine.stock(),
            i
          );
      }
    }
  }
  return ye(re[e.cutType].standard(), i);
}
class Tn {
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
  constructor(t, i, n) {
    if (typeof i != "object")
      throw new Error(`stock must be a single object in Ecosystem ${typeof i}`);
    this.CLO = t, this.abort = !1, this.mutation = {
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
    }, this.container = i, this.shapeList = n, this.CLO.resetShapes(n), this.selectionMethod = t.successMetric, this.firstShape = i.algoBenchmark?.firstShape, this.firstShapeRotation = i.algoBenchmark?.firstShapeRotation, this.benchmark = {
      score: i.algoBenchmark.score[this.selectionMethod],
      weighting: Ht.call(
        this.CLO,
        i,
        V(i) ? i : i.getStock
      )
    }, this.weighting = this.weightingKeys[this.container.cutType], i?.saw?.stockType === "roll" && (this.selectionMethod = "rollLength", this.weighting = this.weightingKeys.roll), this.uniqueShapes = Ie(n, !1), this.population = [], this.options = {
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
    for (let t = 0; t < this.options.populationSize - 1; t++)
      this.population.push(new yi(this, t));
    this.population.push(new yi(
      this,
      this.options.populationSize,
      this.benchmark.weighting
    ));
  }
  getBestIndividual() {
    return this.population.reduce((i, n) => {
      const o = "bestScore";
      return i?.[o]?.[this.selectionMethod] > n?.[o]?.[this.selectionMethod] ? i : n;
    });
  }
  recordResult(t, i) {
    if (i)
      if (!this.bestResult)
        this.bestResult = t, this.bestResult.weighting = structuredClone(i.weighting), v(this.bestResult.firstShape) && this.bestResult.firstShape.shapes.forEach((n) => t.shapes.push(n.compress()));
      else {
        if (t.score.efficiency <= this.bestResult.score.efficiency)
          return;
        this.bestResult = t, this.bestResult.weighting = structuredClone(i.weighting), v(this.bestResult.firstShape) && this.bestResult.firstShape.shapes.forEach((n) => t.shapes.push(n.compress()));
      }
  }
  async run() {
    this.CLO.runningEvo = !0, this.CLO.resetShapes(this.shapeList), this.createPopulation();
    async function t() {
      for (let i = 0; i < this.options.steps; i++) {
        for (const o of this.population)
          await o.assess();
        const n = this.getBestIndividual();
        if (this.population.every((o) => o?.bestScore?.[this.selectionMethod] === n?.bestScore?.[this.selectionMethod]))
          return;
        for (const o of this.population)
          try {
            o.alive && o.updatePosition(n);
          } catch (s) {
            console.log(s);
          }
      }
    }
    return await t.call(this), this.CLO.runningEvo = !1, this.bestResult.type = "evo", {
      result: this.bestResult,
      evolutionVisData: this.evolutionVisData
    };
  }
}
class yi {
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
  constructor(t, i, n = null) {
    this.swarm = t, this.id = i, this.alive = !0, this.weighting = n, this.score = null, this.bestScore = null, this.previousScore = null, this.speed = 1, this.socialInfluence = 0.8, this.improving = !1, this.following = null, this.firstShape = this.swarm.firstShape, this.firstShapeRotation = this.swarm.firstShapeRotation, this.stripShapes = this.swarm.stripShapes, this.iteration = this.swarm.iteration, this.type = "evo", this.cutType = this.swarm.container.saw.cutType, this.stockID = this.swarm.container.id, this.recentScores = [], this.weighting || this.createRandomWeighting();
  }
  //create weighting
  createRandomWeighting() {
    const t = re.efficiency.standard();
    this.weighting = {};
    for (const [i, n] of Object.entries(t)) {
      const o = n;
      if (this.swarm?.weighting && this.swarm.weighting.indexOf(i) > -1) {
        let s = o - this.swarm.mutation.range, r = o + this.swarm.mutation.range;
        s < this.swarm.mutation.min && (s = this.swarm.mutation.min), r > this.swarm.mutation.max && (r = this.swarm.mutation.max), this.weighting[i] = at(s, r);
      } else this.weighting[i] = t[i];
    }
  }
  //assess fitness and generate a score
  async assess() {
    if (this.swarm.progress.current++, !!this.alive) {
      switch (this.previousScore = this.score, this.previousScore && (this.previousScore.weighting = this.weighting), this.swarm.container.cutType) {
        case "efficiency":
          {
            const t = await Pe.runSpecificStrategy.call(
              this.swarm.CLO,
              {
                shapes: this.swarm.shapeList,
                container: this.swarm.container,
                firstShape: this.swarm.firstShape,
                firstShapeRotation: this.swarm.firstShapeRotation,
                weighting: this.weighting
              }
            );
            this.score = t.score, this.swarm.recordResult(t, this);
          }
          break;
      }
      if (this.swarm.CLO.resetShapes(this.swarm.shapeList), !this.score || !this.score?.[this.swarm.selectionMethod])
        return this.kill(), !1;
      if (this.recentScores.push(this.score[this.swarm.selectionMethod]), this.swarm.options.recentScoreCutOff > 0) {
        this.recentScores = this.recentScores.slice(Math.max(
          this.recentScores.length - this.swarm.options.recentScoreCutOff,
          0
        ));
        const t = this.swarm.getBestIndividual();
        t.bestScore && this.recentScores.length === this.swarm.options.recentScoreCutOff && this.recentScores.every((i) => i === t?.bestScore?.[this.swarm.selectionMethod]) && this.kill();
      }
      if (this.improving = !1, this.bestScore === null && (this.bestScore = this.score, this.bestScore.weighting = this.weighting), this.score[this.swarm.selectionMethod] > this.bestScore[this.swarm.selectionMethod] && (this.improving = !0, this.bestScore = this.score, this.bestScore.weighting = this.weighting), this.isWinner()) return !0;
    }
  }
  //update the velocity based on the best individual and own experience
  updatePosition(t) {
    this.speed = 1, this.socialInfluence = 0.5;
    const i = this.score[this.swarm.selectionMethod] === t.score[this.swarm.selectionMethod];
    i ? this.following = null : this.following && this.following.score[this.swarm.selectionMethod] !== t.score[this.swarm.selectionMethod] && (this.following = null), i ? (this.socialInfluence = 0.1, this.previousScore && (this.speed = this.improving ? -1 : 1)) : this.following || (this.following = t);
    for (const [n, o] of Object.entries(this.weighting)) {
      let s = 0;
      i ? this.previousScore ? s = this.previousScore.weighting[n] - o : s = this.swarm.benchmark.weighting[n] - o : s = this.following.bestScore.weighting[n] - o;
      let r = s * this.speed * this.socialInfluence;
      i ? r += at(-0.1, 0.1) : r += at(-0.05, 0.05), this.weighting[n] += r;
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
function Qe(e, t, i = "x") {
  if (!t) return !1;
  const n = Yi(i);
  return !!(I.greaterThanOrEqualTo(e[i], t[i]) && I.lessThan(e[i], t[i] + t[n]));
}
function ji(e) {
  return e === "l" ? "x" : e === "w" ? "y" : null;
}
function Yi(e) {
  return e === "x" ? "l" : e === "y" ? "w" : null;
}
function Ze(e, t) {
  const i = t === "x" ? "l" : "w", n = Se(t);
  if (!e?.length) return null;
  const o = e.reduce((r, l) => r[t] + r[i] > l[t] + l[i] ? r : l);
  return e.filter((r) => r[t] === o[t] && r[i] === o[i]).sort((r, l) => r[n] - l[n])[0];
}
function _i(e) {
  return {
    cutAxis: e === "l" ? "x" : "y",
    positionAxis: e === "l" ? "y" : "x",
    cutDimension: e,
    positionDimension: N(e)
  };
}
function kn(e, t, i) {
  return e?.length ? e.filter((n) => n.added && I.equalTo(n[t], i)) : [];
}
function Cn(e, t) {
  return e?.guillotineState?.myPhase === t;
}
function Pn(e, t) {
  e?.guillotineState && (e.guillotineState.myStripDirection = t);
}
function En(e, t) {
  if (!e) return;
  let i = e;
  for (; i.parent; )
    i = i.parent, t();
}
const H = {
  previousSegments: [],
  ptxCuts: 0,
  segments: 0,
  //this needs to be here, as it's shared with the front end - cannot be put into optimiser
  makeCutsIteration: 0
};
function Xi() {
  H.previousSegments = [], H.ptxCuts = 0, H.segments = 0, H.makeCutsIteration = -1;
}
function Wt({
  container: e,
  shapes: t = [],
  forceNoHeadCut: i = !1,
  final: n = !1
}) {
  H.ptxCuts = 0;
  const o = e.getStock, s = Y(e);
  let r;
  const l = s ? e.cutDirection : e.cutPreference;
  if (s && e.type === "root")
    r = e, r.cuts = [], r.children = [], A("cuts", `REUSING ROOT [${r.autoId ? r.id : "unknown"}] l=${r.l}, w=${r.w}, DIR ${l.toUpperCase()}`);
  else {
    const u = H.segments.toString();
    H.segments++, r = new de({
      id: u,
      x: s ? e.x : 0,
      y: s ? e.y : 0,
      l: s ? e.l : o.l,
      w: s ? e.w : o.w,
      t: o.t,
      saw: o.saw,
      stock: o,
      shapes: t,
      parent: s ? e.parent ?? e : null,
      grain: o.grain,
      material: o.material,
      type: H.segments === 0 ? "root" : "",
      phase: s ? e.phase + 1 : 0,
      hasHeadCut: s ? e.hasHeadCut : !1,
      cutDirection: l,
      isInitial: s ? e.isInitial : !0
    }), s && A("cuts", `[calculateStripCuts] Created parent segment [${r.id}] at (${r.x},${r.y}) ${r.l}x${r.w} from container at (${e.x},${e.y}) ${e.l}x${e.w}`);
  }
  H.previousSegments = [];
  const a = Ne.call(
    this,
    {
      segment: r,
      stock: o,
      allStockShapes: t,
      forceNoHeadCut: i,
      final: n
    }
  );
  let c, h, f;
  try {
    [c, h, f] = Zn(r, n, a.headCutCount);
  } catch (u) {
    return A("errors", `issue analysing segments ${u.message}`), {
      rootSegment: null,
      cuts: [],
      offcuts: []
    };
  }
  if (s && f.length > 0) {
    const u = f.map((d) => `${d.id}@(${d.x},${d.y})`).join(", ");
    A("cuts", `[calculateStripCuts] Returning ${f.length} offcuts for container segment at (${e.x},${e.y}): ${u}`);
  }
  return {
    rootSegment: c,
    cuts: h,
    offcuts: f
  };
}
function vn(e, t = !1) {
  let i = _i(e);
  return t && (i = Ji(i)), i;
}
function Dn(e, t, i, n, o, s, r) {
  if (this?.config && !this?.config?.guillotine?.extendSegments || t.cutType !== "guillotine" || t?.saw?.guillotineOptions?.strategy === "time") return !1;
  const l = e?.merged, a = e?.parent?.merged;
  if (l && a) return !1;
  const c = Cn(i, 1), h = e?.parent ? e.parent?.hasHeadCut : !1;
  let f = !c || h;
  if (!f) return !1;
  t?.saw?.stockType === "roll" && c && (f = !1);
  let u = r.length > 1 && n < r.length - 1;
  h && (u = !0);
  const d = I.lessThan(
    i[s],
    e[s]
  );
  return u && d && !o;
}
function zt(e) {
  const t = N(e.cutPreference);
  return ji(t);
}
function Rn(e) {
  return N(e.cutPreference);
}
function An(e) {
  const t = zt(e);
  let i = 0;
  return e?.getStock?.hasTrim && e?.getStock?.trimmed === !1 && (i = e?.getStock?.trim?.[t === "x" ? "x1" : "y1"] ?? 0), i;
}
function Vi(e) {
  const t = zt(e), i = An(e);
  return e[t] === i;
}
function Ki(e, t, i) {
  if (!this?.config?.guillotine?.allowHeadCuts || !e?.guillotineOptions?.headCuts || !Vi(i)) return !1;
  const n = Rn(i), o = zt(i);
  if (t[o] > i[o]) return !1;
  let s = !1;
  const r = 0.75;
  if (F(t) && t.group.addedAsGroup) {
    const l = i.shapes.filter((h) => h.group?.addedAsGroup === t.group.addedAsGroup), a = ji(n), c = Ze(l, a);
    c[n] + c[a] >= i[n] * r && (s = !0);
  } else t[n] >= i[n] * r && (s = !0);
  return s;
}
class Ut {
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
  skippedCut;
  cutPosition;
  cut;
  farSideSegmentSize;
  nearSideSegment;
  farSideSegment;
  constructor(t) {
    this.segment = t.segment, this.stock = t.stock, this.allStockShapes = t.allStockShapes || [], this.forceNoHeadCut = t.forceNoHeadCut || !1, this.final = t.final || !1, this.headCutCount = t.headCutCount || 0, this.previousCutPosition = t.previousCutPosition || null, this.previousEdgeOfSegment = t.previousEdgeOfSegment || !1, this.cutSuccess = t.cutSuccess || !1, this.bladeWidth = this.stock.bladeWidth, this.halfBladeWidth = this.bladeWidth / 2, this.stripParentShapes = t.stripParentShapes || [], this.currentStripIndex = t.currentStripIndex || 0, this.isHeadCut = t.isHeadCut || !1, this.isEdgeOfSegment = t.isEdgeOfSegment || !1, this.mergedCut = t.mergedCut || !1, this.skippedCut = t.skippedCut || !1, this.cutPosition = t.cutPosition || null, this.cut = t.cut || null, this.farSideSegmentSize = t.farSideSegmentSize || null, this.headCutSegment = t.headCutSegment || null, this.nearSideSegment = t.nearSideSegment || null, this.farSideSegment = t.farSideSegment || null, Object.freeze(this);
  }
  //caters for head cuts
  get cutInfo() {
    const t = vn(this.segment.cutDirection, this.isHeadCut);
    return D([() => $(t.cutDimension).to.equal(this.isHeadCut ? N(this.segment.cutDirection) : this.segment.cutDirection)]), t;
  }
  //segment cut direction doesn't change, but this computed property will
  get cutDirection() {
    return this.isHeadCut ? N(this.segment.cutDirection) : this.segment.cutDirection;
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
  with(t) {
    return new Ut({
      ...this,
      ...t
    });
  }
  // get shapes that are within boundaries of current strip
  getShapesInCurrentStrip() {
    return this.currentStripParent ? this.segment.shapes.filter((t) => Qe(t, this.currentStripParent, this.cutInfo.positionAxis)) : [];
  }
}
function Ji(e) {
  return {
    positionAxis: Se(e.positionAxis),
    positionDimension: N(e.positionDimension),
    cutAxis: Se(e.cutAxis),
    cutDimension: N(e.cutDimension)
  };
}
function wi(e) {
  return e.type === "root" && e.isInitial;
}
function Ne({
  segment: e,
  stock: t,
  allStockShapes: i = [],
  forceNoHeadCut: n = !1,
  previousCutPosition: o = null,
  previousEdgeOfSegment: s = !1,
  final: r = !1,
  headCutCount: l = 0
}) {
  A("cuts", `[makeCuts] START: segment ${e.l}x${e.w} phase=${e.phase} type=${e.type} shapes=${e.shapes?.length || 0} final=${r}`);
  let a = new Ut({
    segment: e,
    stock: t,
    allStockShapes: i,
    forceNoHeadCut: n,
    previousCutPosition: o,
    previousEdgeOfSegment: s,
    final: r,
    headCutCount: l
  });
  if (!On.call(this, a)) {
    A("cuts", "[makeCuts] EARLY RETURN: invalid input");
    return;
  }
  if (Fn.call(this, a)) {
    A("cuts", "[makeCuts] EARLY RETURN: duplicate segment");
    return;
  }
  qn(a), a = Gn.call(this, a), a = Nn.call(this, a), A("cuts", `[makeCuts] Found ${a.stripParentShapes.length} strip parent shapes`), a.stripParentShapes.length && (a.segment.offcut = !1);
  for (let c = 0; c < a.stripParentShapes.length; c++) {
    if (a = a.with({ currentStripIndex: c }), A("cuts", `[makeCuts] Processing shape ${c}: ${a.currentStripParent.l}x${a.currentStripParent.w}`), a.currentStripParent.l === t.l && a.currentStripParent.w === t.w) {
      A("cuts", "[makeCuts] Shape matches stock size, marking as produced"), a = bi.call(this, a);
      break;
    }
    if (a = Jn.call(this, a), a.final && a.segment?.parent?.hasHeadCut && a.segment.phase === 1 && e.type === "far" && a.isHeadCut === !1) {
      const f = Ji(a.cutInfo), { cutAxis: u, cutDimension: d, positionDimension: m, positionAxis: y } = f;
      nt({
        parentSegment: e,
        stock: t,
        cutDirection: d,
        cutAxis: u,
        positionAxis: y,
        position: e[m] + e[y],
        headCut: !0,
        ptxDummyCut: !0
      });
    }
    if (a = Hn.call(this, a), a.final && t.cutType === "beam" && c === 0 && (e.type !== "far" || Qi(a)) && (a = Wn.call(this, a)), a = zn.call(this, a), Ln.call(this, a) === !0) {
      A("cuts", "[makeCuts] Breaking due to edge of segment");
      break;
    }
    if (a = Xn.call(this, a), a.cut)
      a.isHeadCut && (a.segment.hasHeadCut = !0);
    else if (a.isHeadCut) {
      const f = N(a.cutDirection);
      a = a.with({ forceNoHeadCut: !0 }), Mn.call(this, a, f);
      break;
    }
    if (a = a.with({
      cutSuccess: !!a.cut,
      skippedCut: a.cut ? null : !0,
      headCutCount: a.isHeadCut && a.cut ? a.headCutCount + 1 : a.headCutCount
    }), a.final && (a = bi.call(this, a), t.cutType === "beam" && Un.call(this, a), a.cut)) {
      let f = e.parent?.autoId;
      (f === "root" || !f) && (f = "R"), f = `[${f}]`;
      let u = e.autoId ? e.id : "unknown";
      u = `[${u}]`, A("cuts", `${f}->${u} P${e.phase} {${a.currentStripParent.autoId}} ${a.isHeadCut ? "HEAD" : "NORM"} ${e.type.toUpperCase()} ${me(e.l, 4)}x${me(e.w, 4)} ${me(a.cutPosition, 4)} ${me(a?.cut?.x1, 4)}|${me(a?.cut?.x2, 4)}|${me(a?.cut?.y1, 4)}|${me(a?.cut?.y2, 4)}`), A("cuts", `DIRECTIONS FOR ${u}: STATE ${a.cutDirection.toUpperCase()} CUT ${a.cut?.dimension?.toUpperCase() ?? "N/A"} SEGMENT ${e.cutDirection.toUpperCase()}`);
    }
    if (a = Vn.call(this, a), a = Kn.call(this, a), a.isHeadCut) break;
  }
  return a.final && t.cutType === "beam" && e.phase === 0 && (a = Yn.call(this, a)), a.final && t.cutType === "beam" && e.type === "far" && e.parent.hasHeadCut && (a = _n.call(this, a)), a;
}
function Qi(e) {
  const { segment: t, isHeadCut: i } = e;
  return i ? !1 : t?.parent?.hasHeadCut && t.type === "far";
}
function Ln(e) {
  if (!e.isEdgeOfSegment) return !1;
  const { currentStripParent: t, segment: i, cutInfo: n } = e, { positionDimension: o, positionAxis: s } = n;
  if (I.greaterThanOrEqualTo(t[o] + t[s] + e.bladeWidth, i[o] + i[s]) && e.stock.cutType === "beam" || (e = e.with({ previousEdgeOfSegment: !0 }), !i.children.length)) return !1;
  const l = e.segment.children.findLast((a) => a.type === "far");
  return l && (e = e.with({ segment: l }), l.cutDirection = N(e.cutDirection), Ne.call(this, e)), !0;
}
function Mn(e, t) {
  const { segment: i } = e;
  return i.cutDirection = t, e = e.with({ isHeadCut: !1 }), i.cuts.length = 0, i.clearChildren(), e.segment.hasHeadCut = !1, A("cuts", `REATTEMPTING [${i.id}] new direction ${i.cutDirection?.toUpperCase()}`), Ne.call(this, e), !0;
}
function On(e) {
  if (!e.segment) return !1;
  const { segment: t, stock: i, cutDirection: n, previousCutPosition: o, allStockShapes: s } = e;
  return !["l", "w"].includes(n) || t.l <= 0 || t.w <= 0 || o === void 0 ? !1 : (D([
    () => $(s.every((r) => F(r) || v(r)), "allStockShapes must be shape or any type of group").to.be.true,
    () => $(V(i)).to.be.true
  ]), !0);
}
function qn(e) {
  const { final: t } = e;
  return t && H.makeCutsIteration++, e;
}
function Fn(e) {
  const { segment: t, cutDirection: i } = e;
  return t.type !== "root" && H.previousSegments.some((n) => t.l === n.l && t.w === n.w && t.x === n.x && t.y === n.y && t.type === n.type && i === n.cutDirection);
}
function Gn(e) {
  const { segment: t, cutDirection: i } = e;
  return H.previousSegments.push({
    w: t.w.valueOf(),
    l: t.l.valueOf(),
    x: t.x.valueOf(),
    y: t.y.valueOf(),
    type: t.type,
    cutDirection: i.valueOf()
  }), H.previousSegments.length > 20 && (H.previousSegments = H.previousSegments.slice(-20)), e;
}
function Bn(e, t, i) {
  return e.filter(
    (n, o, s) => s.findIndex(
      (r) => I.equalTo(
        r[t] + r[i],
        n[t] + n[i]
      )
    ) === o
  );
}
function Nn(e) {
  const { segment: t, stock: i, cutDirection: n, cutInfo: o, previousCutPosition: s, halfBladeWidth: r } = e, { cutAxis: l, positionAxis: a, positionDimension: c } = o;
  let h = [];
  if (A("cuts", `Finding strip parent shapes. Segment ${t.id} has ${t.shapes.length} shapes:`), t.shapes.slice(0, 3).forEach((f) => {
    A("cuts", `  Shape ${f.id}: l=${f.l}, w=${f.w}, rot=${f.rot}, at (${f.x},${f.y}), added=${f.added}`);
  }), i.cutPreference === n) {
    const f = t.type === "far" && i.cutType === "guillotine" || !s ? t[l] : s + r;
    A("cuts", `[findStripParentShapes] cutPreference=${i.cutPreference}, cutDirection=${n}, cutAxis=${l}, axisPosition=${f}, segment.shapes[0]?.[${l}]=${t.shapes[0]?.[l]}, segment.type=${t.type}`), h = kn(
      t.shapes,
      l,
      f
    );
  } else {
    A("cuts", `[findStripParentShapes] NOT using cutPreference path, cutPreference=${i.cutPreference}, cutDirection=${n}, cutAxis=${l}, segment[${l}]=${t[l]}, segment.shapes[0]?.[${l}]=${t.shapes[0]?.[l]}, segment.shapes[0]?.added=${t.shapes[0]?.added}`), h = t.shapes.filter(
      (u) => u.added && I.equalTo(u[l], t[l])
    );
    const f = h.filter((u) => v(u));
    if (f.length > 0) {
      const u = /* @__PURE__ */ new Set();
      f.forEach((d) => {
        d.shapes && Array.isArray(d.shapes) && d.shapes.forEach((m) => u.add(m.autoId));
      }), h = h.filter((d) => v(d) ? !0 : !u.has(d.autoId));
    }
    h = Bn(h, a, c);
  }
  if (h.sort((f, u) => f[a] - u[a]), h.length && !t?.hasHeadCut) {
    const f = h.length - 1, u = h[f], d = t.shapes.filter((y) => y.added && Qe(y, u, a)), m = Ze(d, a);
    m && I.greaterThan(
      m[a] + m[c],
      u[a] + u[c]
    ) && h.splice(f, 1, m);
  }
  return e.with({ stripParentShapes: h });
}
function Hn(e) {
  const { segment: t, stock: i, cutDirection: n, cutInfo: o, halfBladeWidth: s, allStockShapes: r, previousStripShape: l, currentStripParent: a, currentStripIndex: c, bladeWidth: h } = e, { cutAxis: f, positionAxis: u, cutDimension: d, positionDimension: m } = o;
  if (c === 0) return e;
  if (l && I.equalTo(a[f], t[f]) && I.equalTo(l[f], t[f]) && !I.equalTo(
    a[u],
    l[u] + l[m] + h
  )) {
    A("cuts", `[makeCuts] Creating gap cut at position ${a[u] - s}, dir=${n}`);
    const { cut: y, previousCutPosition: g } = nt({
      parentSegment: t,
      stock: i,
      cutDirection: n,
      cutAxis: f,
      positionAxis: u,
      position: a[u] - s,
      allStockShapes: r
    });
    if (y) {
      const S = g < t[u] ? t[u] : g, p = S + s - t[u], w = a[u] - S - h - s, x = t[u] + p, T = w > 0 ? jt.call(this, {
        parent: t,
        stock: i,
        offcut: !0,
        type: "near",
        [f]: t[f],
        [d]: t[d],
        [u]: x,
        [m]: w
      }) : null;
      T && D([
        () => $(
          T.cutDirection,
          `near side segment ${T.id} has the same cutDirection as segment ${t.id}`
        ).not.to.equal(t.cutDirection)
      ]);
    }
  }
  return e;
}
function Wn(e) {
  if (e.stock.cutType !== "beam" || e.currentStripIndex !== 0 || e.segment.type === "far" && !Qi(e)) return e;
  const { segment: t, stock: i, cutDirection: n, cutInfo: o, allStockShapes: s, halfBladeWidth: r } = e, { cutAxis: l, positionAxis: a, positionDimension: c } = o;
  return t.phase !== 1 || !e.final || ir({
    segment: t,
    stock: i,
    cutDirection: n,
    cutAxis: l,
    positionAxis: a,
    positionDimension: c,
    position: 1,
    allStockShapes: s,
    halfBladeWidth: r
  }), e;
}
function zn(e) {
  const { segment: t, stock: i, cutInfo: n, halfBladeWidth: o, currentStripParent: s, currentStripIndex: r, stripParentShapes: l, isHeadCut: a, bladeWidth: c, previousEdgeOfSegment: h } = e, { positionAxis: f, cutAxis: u, positionDimension: d, cutDimension: m } = n;
  let y = s[f] + s[d] + o, g = !1, S = r;
  A("cuts", `Cut position calc: shape ${s.l}x${s.w}, posAxis=${f}, posDim=${d}`), A("cuts", `  Shape rot=${s.rot}, autoId=${s.autoId}`), A("cuts", `  ${f}=${s[f]}, ${d}=${s[d]} => cutPos=${y}`), A("cuts", `  cutDirection=${e.cutDirection}, cutAxis=${n.cutAxis}, cutDim=${n.cutDimension}`), A("cuts", `  Shape actual extent: x=[${s.x} to ${s.x + s.l}], y=[${s.y} to ${s.y + s.w}]`), A("cuts", `  Strip parent shapes count: ${l.length}`), l.length > 1 && A("cuts", `  All strip parents: ${l.map((x) => `${x.id}(${x.l}x${x.w} rot=${x.rot})`).join(", ")}`);
  let p = I.greaterThanOrEqualTo(
    s[f] + s[d] + c,
    t[f] + t[d]
  );
  const w = t.shapes;
  if (!a && !p && !h && Dn.call(this, t, i, s, r, p, e.cutDirection, l)) {
    let x = s;
    for (let T = r + 1; T < l.length; T++) {
      const b = l[T];
      if (b.autoId === x.autoId) continue;
      if (!b) break;
      const E = w.filter(
        (C) => Qe(C, s, f)
      ), L = Ze(E, u), B = E.reduce(
        (C, P) => I.greaterThan(C[d], P[d]) ? C : P
      );
      I.greaterThan(
        B[f] + B[d],
        x[f] + x[d]
      ) && (x = B, y = x[f] + x[d] + o);
      const q = Ze(
        w.filter(
          (C) => Qe(C, b, f)
        ),
        u
      );
      if (!I.equalTo(
        L[u] + L[m],
        q[u] + q[m]
      ))
        break;
      if (I.equalTo(x[m], b[m]) && I.equalTo(x[u], b[u]))
        g = !0, y = b[f] + b[d] + o, x = b, S = T;
      else
        break;
    }
    g && (t.merged = !0, p = I.greaterThanOrEqualTo(
      y - o,
      t[f] + t[d]
    ));
  }
  return e.with({
    cutPosition: y,
    mergedCut: g,
    isEdgeOfSegment: p,
    currentStripIndex: S
  });
}
function Un(e) {
  if (e.stock.cutType !== "beam" || !e.cut) return e;
  const { cut: t, segment: i, cutInfo: n, currentStripParent: o, currentStripIndex: s, stripParentShapes: r } = e, { positionAxis: l, positionDimension: a } = n;
  t?.guillotineState?.partProduced && s === r.length - 1 && I.equalTo(
    o[l] + o[a],
    i[l] + i[a]
  ) && (A("cuts", `MARKING PTX DUMMY CUT ${o.autoId} ${e.cutPosition}`), t.ptxData.isDummy = !0);
}
function jn(e) {
  return e.hasHeadCut ? N(e.cutDirection) : e.cutDirection;
}
function Yn(e) {
  if (e.stock.cutType !== "beam") return e;
  const { segment: t, cutInfo: i, stock: n, cutDirection: o } = e;
  if (t.phase !== 0) return e;
  const { cutAxis: s } = i;
  for (const r of t.cuts)
    r.dimension === jn(t) && (r[s + 1] = 0, r[s + 2] = n[o]);
  return e;
}
function _n(e) {
  if (e.stock.cutType !== "beam") return e;
  const { segment: t, cutInfo: i, stock: n, cutDirection: o } = e;
  if (t.phase !== 1) return e;
  const { cutAxis: s } = i;
  for (const r of t.cuts)
    t.hasHeadCut ? r.dimension === N(t.cutDirection) && (r[Se(s) + 2] = n[N(o)]) : r.dimension === t.cutDirection && (r[s + 2] = n[o]);
}
function Xn(e) {
  const { segment: t, stock: i, cutDirection: n, cutInfo: o, cutPosition: s, allStockShapes: r, currentStripParent: l, isHeadCut: a } = e, { cutAxis: c, positionAxis: h } = o;
  a && Pn(l, n);
  const { cut: f, farSideSegmentSize: u, previousCutPosition: d } = nt({
    parentSegment: t,
    stock: i,
    cutDirection: n,
    cutAxis: c,
    positionAxis: h,
    position: s,
    allStockShapes: t.phase === 0 ? r : [],
    headCut: e.isHeadCut
  });
  return f && e.final && A("cuts", `MADE CUT ${f.x1}|${f.x2}|${f.y1}|${f.y2} ${f.isHead ? "HEAD" : "NORM"}`), e.with({
    cut: f,
    farSideSegmentSize: u,
    previousCutPosition: d
  });
}
function bi(e) {
  if (e.stock.cutType !== "beam") return e;
  const { cut: t, cutInfo: i, halfBladeWidth: n, currentStripParent: o } = e;
  if (!t) return e;
  const { cutAxis: s, cutDimension: r, positionAxis: l, positionDimension: a } = i;
  return I.equalTo(
    t[s + 2] - t[s + 1],
    o[r]
  ) && I.equalTo(
    t[l + 1],
    o[l] + o[a] + n
  ) && (t.guillotineState.partProduced = o.parentId), e;
}
function Vn(e) {
  const {
    segment: t,
    stock: i,
    cutInfo: n,
    cutPosition: o,
    mergedCut: s,
    currentStripParent: r,
    previousCutPosition: l,
    cut: a,
    isEdgeOfSegment: c,
    halfBladeWidth: h,
    bladeWidth: f,
    allStockShapes: u,
    final: d,
    cutDirection: m,
    currentStripIndex: y
  } = e, { cutAxis: g, positionAxis: S, cutDimension: p, positionDimension: w } = n, x = y === 0 && I.greaterThan(r[S], t[S]);
  if (!a && !c && !x) return e;
  const T = {
    parent: t,
    stock: i,
    merged: s,
    type: "near",
    hasHeadCut: t.hasHeadCut,
    shapes: []
  }, b = x && !a ? r[S] : o, E = l != null && l >= t[S], L = E ? l + h : t[S], B = b - (E ? l + f : h + t[S]);
  A("cuts", `[createNearSegment] segment[${t.id}] at (${t.x},${t.y}), posAxis=${S}, cutAxis=${g}, previousCutPosition=${l}, hasPreviousCut=${E}, nearSegmentPosition=${L}`);
  const q = {
    [g]: t[g],
    [p]: t[p],
    [S]: L,
    [w]: B,
    cutDirection: N(m)
  };
  A("cuts", `[createNearSegment] dimensionProps: x=${q.x ?? "N/A"}, y=${q.y ?? "N/A"}, l=${q.l ?? "N/A"}, w=${q.w ?? "N/A"}`);
  const C = jt.call(
    this,
    { ...T, ...q },
    !1
    // Don't reject if identical - we'll filter shapes ourselves
  );
  if (!C) return e;
  if (A("cuts", `[createNearSegment] AFTER creation: segment ${t.id} at (${C.x},${C.y}) ${C.l}x${C.w}`), C.shapes = t.shapes.filter((P) => I.greaterThanOrEqualTo(P.x, C.x) && I.lessThanOrEqualTo(P.x + P.l, C.x + C.l) && I.greaterThanOrEqualTo(P.y, C.y) && I.lessThanOrEqualTo(P.y + P.w, C.y + C.w)), A("cuts", `[createNearSegment] nearSideSegment.shapes.length = ${C.shapes.length}`), C.shapes.length > 0) {
    const P = I.equalTo(C.l, r.l) && I.equalTo(C.w, r.w);
    if (A("cuts", `[createNearSegment] nearSegment: ${C.l}x${C.w}, shape: ${r.l}x${r.w}, identical: ${P}, mergedCut: ${s}`), s || !P) {
      A("cuts", `CUTTING NEAR SIDE SEGMENT [${C.id}] DIR ${C?.cutDirection?.toUpperCase()}`), A("cuts", `[createNearSegment] CALLING makeCuts recursively with segment ${C.l}x${C.w}, segment.shapes.length=${C.shapes?.length}, final=${d}`);
      const O = Ne.call(
        this,
        {
          segment: C,
          stock: i,
          cutDirection: C.cutDirection,
          previousCutPosition: l,
          allStockShapes: u,
          final: d,
          headCutCount: e.headCutCount
        }
      );
      A("cuts", `[createNearSegment] RETURNED from makeCuts, childState=${O}`), e = e.with({ headCutCount: O?.headCutCount || e.headCutCount });
    }
  }
  return e.with({ nearSideSegment: C });
}
function Kn(e) {
  const {
    segment: t,
    stock: i,
    cutInfo: n,
    cutPosition: o,
    farSideSegmentSize: s,
    halfBladeWidth: r,
    currentStripIndex: l,
    stripParentShapes: a,
    isHeadCut: c,
    allStockShapes: h,
    final: f
  } = e, { cutAxis: u, positionAxis: d, cutDimension: m, positionDimension: y } = n, g = {
    parent: t,
    stock: i,
    offcut: c ? !1 : l === a.length - 1,
    type: "far",
    hasHeadCut: !1,
    shapes: [],
    cutDirection: t.cutDirection
    //[] test
  }, S = {
    [u]: t[u],
    [m]: t[m],
    [d]: o + r,
    [y]: s
  };
  A("cuts", `Creating FAR segment: cutAxis=${u}, cutDim=${m}, posAxis=${d}, posDim=${y}`), A("cuts", `FAR segment props: ${u}=${t[u]}, ${m}=${t[m]}, ${d}=${o + r}, ${y}=${s}`);
  const p = jt.call(this, { ...g, ...S });
  if (!p) return e;
  if (A("cuts", `FAR segment created [${p.id}] at (${p.x},${p.y}) ${p.l}x${p.w}`), A("cuts", `  Parent has ${t.shapes.length} shapes, far segment has ${p.shapes.length} shapes`), A("cuts", `  Cut was at position ${o} (${d}=${o})`), A("cuts", `  Expected offcut dimensions based on stock (1200x1200): should be ${t.l - o}x${t.w} or ${t.l}x${t.w - o}`), c) {
    p.shapes = t.shapes.filter((x) => {
      const T = x[Se(u)] + x[N(m)];
      return I.greaterThan(T, o);
    }), A("cuts", `HEAD CUT: Making cuts in far segment [${p.id}] with ${p.shapes.length} shapes`);
    const w = Ne.call(
      this,
      {
        segment: p,
        stock: i,
        cutDirection: p.cutDirection,
        previousCutPosition: null,
        // No previous cut in this new segment yet
        allStockShapes: h,
        final: f,
        headCutCount: e.headCutCount
      }
    );
    e = e.with({ headCutCount: w?.headCutCount || e.headCutCount });
  }
  return e.with({ farSideSegment: p });
}
function Zi(e) {
  if (!this?.config?.guillotine?.allowHeadCuts || !e?.saw?.guillotineOptions?.headCuts) return !1;
  if (wi(e)) return !0;
  if (e.type === "far" || e.type === "root") {
    if (!Vi(e)) return !1;
    if (e.parent.hasHeadCut || wi(e.parent)) return !0;
  }
  return !1;
}
function Jn(e) {
  const { segment: t, currentStripParent: i, forceNoHeadCut: n } = e;
  if (n) return e.with({ isHeadCut: !1 });
  let o = !1;
  return Zi.call(this, t) ? (o = Ki.call(this, t.saw, i, t, e.cutDirection), e.with({ isHeadCut: o })) : e.with({ isHeadCut: !1 });
}
function nt({
  parentSegment: e,
  stock: t,
  cutDirection: i,
  cutAxis: n,
  positionAxis: o,
  position: s,
  allStockShapes: r = [],
  headCut: l = !1,
  ptxDummyCut: a = !1,
  skipCollisionCheck: c = !1
}) {
  const h = t.halfBladeWidth, f = Yi(o), u = vs.parse({
    stock: t,
    isGuillotine: !0,
    isHead: l,
    ptxData: {
      isDummy: a
    },
    //NOTE: this has changed from cutAxis to positionAxis
    x1: o === "x" ? s : e.x,
    x2: o === "x" ? s : e.x + e.l,
    y1: o === "y" ? s : e.y,
    y2: o === "y" ? s : e.y + e.w
  });
  let d = new pt(u);
  if (!a && e.type === "near" && e.parent.hasHeadCut && (d.ptxData.headCutStrip = !0), !c) {
    const w = r.length ? r : e.shapes;
    if (Nt(
      d,
      t,
      w
    ))
      return A("cuts", `[createCut] REJECTED collision: cut at (${d.x1},${d.y1})-(${d.x2},${d.y2}), segment=(${e.x},${e.y}) ${e.l}x${e.w}`), {
        cut: null,
        farSideSegmentSize: null,
        previousCutPosition: null
      };
  }
  const m = e.cuts.filter((w) => w.dimension === i && I.equalTo(w[n + 1], d[n + 1])), y = m.length ? m[m.length - 1] : null, g = y ? y[o + 1] : null;
  if (s && g && I.equalTo(s, g))
    return {
      cut: null,
      farSideSegmentSize: null,
      previousCutPosition: null
    };
  let S = e[o] + e[f] - (s + h);
  S < 0 && (S = 0);
  const p = I.lessThan(
    s - h,
    e[o] + e[f]
  );
  return d.beamTrimL1 || d.beamTrimW1 || t.cutType === "beam" && I.lessThanOrEqualTo(
    s - h,
    e[o] + e[f]
  ) || d.ptxData.isDummy || p ? (d.ptxData.order = H.ptxCuts++, e.cuts.push(d)) : d.stock?.saw?.stockType === "roll" ? e.cuts.push(d) : (d = null, S = null), {
    cut: d,
    farSideSegmentSize: S,
    previousCutPosition: g
  };
}
function Qn({
  x: e,
  y: t,
  l: i,
  w: n,
  type: o,
  parent: s,
  rejectIdentical: r
}) {
  return r && I.equalTo(e, s.x) && I.equalTo(t, s.y) && I.equalTo(n, s.w) && I.equalTo(i, s.l) ? "IDENTICAL_TO_PARENT" : i <= 0 || n <= 0 ? "INVALID_DIMENSIONS" : s && !s.autoId ? (console.error("[ERROR] Parent segment has no autoId!"), console.error(`Parent details: type=${s.type}, x=${s.x}, y=${s.y}, l=${s.l}, w=${s.w}`), "MISSING_PARENT_ID") : o === "root" && s ? (console.error("[ERROR] Attempting to create root segment with a parent!"), console.error(`Parent autoId: ${s.autoId}, Parent type: ${s.type}`), "ROOT_WITH_PARENT") : (o === "root" && s?.type !== void 0 && s.type !== "root" && console.error(`[ERROR] Creating root segment with non-root parent of type: ${s.type}`), null);
}
function jt({
  x: e,
  y: t,
  l: i,
  w: n,
  type: o,
  parent: s,
  stock: r,
  offcut: l = !1,
  merged: a = !1,
  cutDirection: c = null
}, h = !0) {
  if (Qn({ x: e, y: t, l: i, w: n, type: o, parent: s, rejectIdentical: h })) return;
  let u;
  H.segments++;
  let d = s.phase + 1;
  s.hasHeadCut && (s.isInitial || (s.phase = 0), d = s.phase + 1);
  try {
    const y = H.segments.toString();
    if (u = new de({
      x: e,
      y: t,
      l: i,
      w: n,
      t: typeof r.t == "string" ? parseFloat(r.t) : r.t,
      id: y,
      phase: d,
      parent: s,
      stock: r,
      offcut: l,
      merged: a,
      type: o,
      grain: r.grain,
      material: r.material,
      saw: r.saw,
      cutDirection: c || N(s.cutDirection)
    }), s && s.autoId === u.autoId)
      throw console.error(`[ERROR] Segment created with itself as parent! autoId: ${u.id}`), new Error("Segment cannot be its own parent");
  } catch (y) {
    A("info", `issue creating segment ${y.message}`);
    return;
  }
  const m = s.shapes.filter((y) => y.added ? I.greaterThanOrEqualTo(y.x, u.x) && I.lessThanOrEqualTo(y.x + y.l, u.x + u.l) && I.greaterThanOrEqualTo(y.y, u.y) && I.lessThanOrEqualTo(y.y + y.w, u.y + u.w) : y.willItFit(u));
  return u.shapes = m, u;
}
function Zn(e, t = !1, i) {
  t && A("cuts", `------------------- ANALYSE SEGMENTS ${e.id} -------------------`);
  const n = [], o = [], s = [];
  let r = 0, l = 0;
  const a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let h = 0;
  const f = 1e3, u = (d, m = 0) => {
    if (!d) return m;
    if (h++, h > f)
      return console.error(`[CRITICAL] Maximum recursion depth (${f}) exceeded in traverse function!`), console.error(`Current segment: ${d.id}, Parent: ${d.parent?.id}`), h--, m;
    if (c.has(d.autoId))
      return console.error(`[CIRCULAR REFERENCE DETECTED] Segment ${d.id} is already in the traversal path!`), console.error(`Traversal path: ${Array.from(c).join(" -> ")} -> ${d.id}`), console.error(`Segment details: autoId=${d.id}, parent=${d.parent?.id}, children=[${d.children?.map((g) => g.autoId).join(", ")}]`), h--, m;
    c.add(d.autoId), a.add(d.autoId);
    let y = m;
    n.push(d), (d.offcut === !0 || !d.shapes?.length) && s.push(d);
    for (let g = 0; g < d.cuts.length; g++) {
      const S = d.cuts[g];
      if (S) {
        if (S.guillotineState.phase = d.phase, S.isHead ? (S.ptxData.function = 0, r++) : g > 0 && o[g - 1].isHead ? S.dimension === "l" ? S.ptxData.function = 1 : S.dimension === "w" && (S.ptxData.function = 2) : (S.ptxData.function = S.guillotineState.phase + 1, S.ptxData.headCutStrip && S.ptxData.function--), S.isTrim && l++, t)
          if (S.isHead) {
            let p = 0;
            En(d, () => p++), y = p, A("cuts", `[${d.id}] reset cut order to ${y}`);
          } else g > 0 && d.cuts[g - 1].isHead && y++;
        S.guillotineState.order = y, S.guillotineState.segmentCutOrder = g, S.guillotineState.parentSegmentID = d?.autoId || "root", t && er(S, d), o.push(S), t && A("cuts", `[${d.id}] {${y}} ${S.x1}|${S.x2}|${S.y1}|${S.y2}`), y++;
      }
    }
    if (d.children && d.children.length > 0) {
      const g = d.children.filter((S) => S.autoId === d.autoId ? (console.error(`[SELF-REFERENCE FOUND] Removing segment ${d.id} from its own children array`), console.error(`Segment type: ${d.type}, Phase: ${d.phase}`), console.error(`Number of children: ${d.children.length}`), console.error(`Children autoIds: ${d.children.map((p) => p.autoId).join(", ")}`), !1) : !0);
      g.length !== d.children.length && (d.children = g);
      for (const S of d.children)
        if (S && Y(S)) {
          if (S.type === "firstShape")
            continue;
          if (S.autoId === d.autoId) {
            console.error(`[CRITICAL SELF-REFERENCE] Segment ${d.id} still has itself as a child!`), console.error("This should have been filtered. Skipping traversal.");
            continue;
          }
          if (c.has(S.autoId)) {
            console.error(`[CIRCULAR REFERENCE] Child segment ${S.autoId} is already in traversal path`), console.error(`Parent: ${d.id}, Path: ${Array.from(c).join(" -> ")}`);
            continue;
          }
          if (d.hasHeadCut) {
            const p = i + o.filter((w) => !w.isHead && !w.ptxData.isDummy).length;
            y = u(S, p);
          } else
            y = u(S, y);
        }
    }
    return c.delete(d.autoId), h--, y;
  };
  return u(e), t && (A("cuts", `Segments processed: ${n.length}`), A("cuts", `Cuts processed: ${o.length}`), A("cuts", `Trim cuts found: ${l}`), A("cuts", `Head cuts found: ${r}/${i}`), A("cuts", `Offcuts identified: ${s.length}`), A("cuts", `ROOT segment [${e.id}] has ${e.children?.length || 0} children`), A("cuts", "------------------- END ANALYSE SEGMENTS -------------------")), [e, o, s];
}
function er(e, t) {
  const i = {
    top: null,
    bottom: null,
    left: null,
    right: null
  }, n = e.stock.halfBladeWidth;
  if (e.beamTrimL1 || e.beamTrimW1)
    e.beamTrimL1 ? i.left = e.stock.trim.l1 : e.beamTrimW1 && (i.bottom = e.stock.trim.w1);
  else {
    const o = t?.children, s = e.stock.cutType === "beam" && t.cuts[0].isTrim ? e.guillotineState.segmentCutOrder - 1 : e.guillotineState.segmentCutOrder;
    if (o?.length) {
      const r = o.filter((l) => l.type === "near")[s];
      r && (e.dimension === "l" ? (i.bottom = e.y1 - r.y - n, i.top = t.y + t.w - (e.y1 + n)) : e.dimension === "w" && (i.left = e.x1 - r.x - n, i.right = t.x + t.l - (e.x1 + n)));
    }
  }
  e.distances = i;
}
function tr(e, t) {
  return `${t}${e}`;
}
function ir({
  segment: e,
  stock: t,
  cutDirection: i,
  cutAxis: n,
  positionAxis: o,
  positionDimension: s,
  position: r,
  allStockShapes: l,
  halfBladeWidth: a
}) {
  if (t.cutType !== "beam" || !t.hasTrim || s === "w" && e.phase > 1)
    return;
  const c = tr(r, i);
  if (!t.trim?.[c]) return;
  const h = t.trimmed ? -a : t.trim[c] - a, f = t.trimmed ? -a : t.trim[c] - a;
  if (D([() => {
    $(h, `trim cut ${r} in the wrong position`).to.equal(f);
  }]), h !== f)
    return;
  const { cut: u } = nt({
    parentSegment: e,
    stock: t,
    cutDirection: i,
    cutAxis: n,
    positionAxis: o,
    position: h,
    allStockShapes: l,
    skipCollisionCheck: !0
  });
  u && (u.isTrim = !0, u.guillotineState.parentSegmentID = e.autoId, u.ptxData || (u.ptxData = {}), u.ptxData.function = e.phase, u.ptxData.isDummy = !1, u.dimension === "l" && (u.beamTrimL1 = !0), u.dimension === "w" && (u.beamTrimW1 = !0), u.dimension === "w" ? (new de({
    x: -t.trim.l1,
    y: e.y,
    // Start at strip's y position
    l: t.trim.l1,
    w: e.w,
    // Match strip's height
    t: t.t,
    phase: e.phase,
    parent: e,
    // Child of the strip segment being trimmed
    stock: t,
    offcut: !0,
    isTrimOffcut: !0,
    type: "far",
    grain: t.grain,
    saw: t.saw,
    cutDirection: "w"
  }), t.trim.l2 && t.trim.l2 > 0 && new de({
    x: t.l,
    // At far edge in trimmed space
    y: e.y,
    l: t.trim.l2,
    w: e.w,
    t: t.t,
    phase: e.phase,
    parent: e,
    stock: t,
    offcut: !0,
    isTrimOffcut: !0,
    type: "far",
    grain: t.grain,
    saw: t.saw,
    cutDirection: "w"
  })) : u.dimension === "l" && new de({
    x: 0,
    // Start at stock origin
    y: -t.trim.w1,
    l: t.l,
    // Use FULL stock width (not trimmed)
    w: t.trim.w1,
    t: t.t,
    phase: e.phase,
    parent: e.parent || e,
    // Use segment's parent; if root, use itself
    stock: t,
    offcut: !0,
    isTrimOffcut: !0,
    type: "far",
    grain: t.grain,
    saw: t.saw,
    cutDirection: "l"
  }), i !== e.cutDirection && (u[n + 2] = t[i]), u.isTrim = !0, e.hasBeamTrim = !0);
}
function sr(e, t, i = null) {
  let n = null;
  const o = [], s = e.every((r) => {
    if (!r.added || !r.stock || F(r) && r.group.inGroup) return !0;
    const l = r.stock.halfBladeWidth;
    let a = null;
    i ? a = i.getSides() : a = r.stock.getSides();
    const c = Object.values(r.getSides()).every((h) => {
      const f = () => {
        switch (h.type) {
          case "top": {
            const g = r.y + r.w + l;
            return t.some((p) => p.dimension === "l" && I.equalTo(p.y1, g) && I.lessThanOrEqualTo(p.x1, r.x) && I.greaterThanOrEqualTo(p.x2, r.x + r.l));
          }
          case "bottom": {
            const g = r.y - l;
            return t.some((p) => p.dimension === "l" && I.equalTo(p.y1, g) && I.lessThanOrEqualTo(p.x1, r.x) && I.greaterThanOrEqualTo(p.x2, r.x + r.l));
          }
          case "left": {
            const g = r.x - l;
            return t.some((p) => p.dimension === "w" && I.equalTo(p.x1, g) && I.lessThanOrEqualTo(p.y1, r.y) && I.greaterThanOrEqualTo(p.y2, r.y + r.w));
          }
          case "right": {
            const g = r.x + r.l + l;
            return t.some((p) => p.dimension === "w" && I.equalTo(p.x1, g) && I.lessThanOrEqualTo(p.y1, r.y) && I.greaterThanOrEqualTo(p.y2, r.y + r.w));
          }
        }
      }, u = () => a.some((g) => {
        switch (h.type) {
          case "top":
            return g.dimension === "l" && I.equalTo(g.y1, r.y + r.w) && I.lessThanOrEqualTo(g.x1, r.x) && I.greaterThanOrEqualTo(g.x2, r.x + r.l);
          case "bottom":
            return g.dimension === "l" && I.equalTo(g.y1, r.y) && I.lessThanOrEqualTo(g.x1, r.x) && I.greaterThanOrEqualTo(g.x2, r.x + r.l);
          case "left":
            return g.dimension === "w" && I.equalTo(g.x1, r.x) && I.lessThanOrEqualTo(g.y1, r.y) && I.greaterThanOrEqualTo(g.y2, r.y + r.w);
          case "right":
            return g.dimension === "w" && I.equalTo(g.x1, r.x + r.l) && I.lessThanOrEqualTo(g.y1, r.y) && I.greaterThanOrEqualTo(g.y2, r.y + r.w);
        }
      }), d = f(), m = u();
      return d || m;
    });
    return c || (n = r, o.push(r.autoId)), c;
  });
  return s && (n = null, o.length = 0), { allShapesCut: s, uncutShape: n, uncutShapeAutoIds: o };
}
function Rt(e) {
  return typeof e?.guillotineState?.myPhase == "number";
}
function At(e) {
  return e.type === "root" || e[Ai(e.stock.cutPreference)] === 0;
}
function Lt(e, t) {
  return e?.guillotineState?.myPhase === t;
}
function nr(e) {
  const t = Yt(e);
  if (!t) return xi(e, 1);
  const n = fe(t) === "l" ? "w" : "l", o = es(e, t, n);
  xi(e, o);
}
function es(e, t, i) {
  if (!e) return null;
  if (!t) return 1;
  const n = _t(t);
  return e[i] === t[i] ? n : n + 1;
}
function Yt(e) {
  return e?.guillotineState?.myStripParent || null;
}
function $i(e, t) {
  e?.guillotineState && (e.guillotineState.myStripParent = t);
}
function xi(e, t) {
  typeof t == "number" && e?.guillotineState && e.guillotineState.setPhase(t);
}
function _t(e) {
  return e?.guillotineState ? e.guillotineState.myPhase : null;
}
function fe(e) {
  return e?.guillotineState ? e.guillotineState.myStripDirection : null;
}
function et(e, t) {
  if (e?.guillotineState) {
    if (typeof e.guillotineState.setStripDirection != "function") {
      const i = e.guillotineState || {};
      e.guillotineState = new Ue(i);
    }
    e.guillotineState.setStripDirection(t);
  }
}
function Ii(e, t) {
  if (Y(e)) {
    rr(t);
    const i = t?.bestScore?.score;
    i && ["currentStripDirection", "myStripDirection", "keyStripDirection", "myPhase"].forEach((o) => {
      i[o] && (t.guillotineState[o] = i[o]);
    });
  }
}
function rr(e) {
  const t = e.bestScore;
  t?.myStripParent && $i(e, t.myStripParent), v(e) && e.shapes.forEach((i) => $i(i, Yt(i)));
}
function or(e, t) {
  let i = null, n = t.x.get(e.x) || [];
  n = n.filter((l) => {
    const a = l.guillotineState.myStripParent;
    return a && !a.guillotineState?.firstShape ? gt(e, a, "y") : !0;
  }), n.sort((l, a) => l.x - a.x);
  let o = t.y.get(e.y) || [];
  o = o.filter((l) => {
    const a = l.guillotineState.myStripParent;
    return a && !a.guillotineState?.firstShape ? gt(e, a, "x") : !0;
  }), o.sort((l, a) => l.y - a.y);
  const s = n.length ? n[0] : null, r = o.length ? o[0] : null;
  return s && r ? i = s.placementOrder > r.placementOrder ? s : r : i = s || r, i;
}
function Mt(e, t) {
  e.x.has(t.x) ? e.x.get(t.x).push(t) : e.x.set(t.x, [t]), e.y.has(t.y) ? e.y.get(t.y).push(t) : e.y.set(t.y, [t]);
}
function ar(e, t) {
  const i = e.x.get(t.x) ?? [], n = i.indexOf(t);
  n !== -1 && (i.splice(n, 1), i.length === 0 && e.x.delete(t.x));
  const o = e.y.get(t.y) ?? [], s = o.indexOf(t);
  s !== -1 && (o.splice(s, 1), o.length === 0 && e.y.delete(t.y));
}
function lr(e, t = !0) {
  const i = [], n = /* @__PURE__ */ new Set();
  for (const o of e.shapes)
    if (v(o)) {
      const s = o.type === "position", r = Z(o);
      if (s || r && t) {
        if (!n.has(o.autoId)) {
          i.push(o), n.add(o.autoId);
          for (const a of o.shapes || [])
            n.add(a.autoId);
        }
      } else if (o.added && e.stock) {
        o.placeMyShapes(e.stock);
        for (const a of o.shapes)
          n.has(a.autoId) || (a.group.addedAsGroup = o, i.push(a), n.add(a.autoId));
      }
    } else
      n.has(o.autoId) || (i.push(o), n.add(o.autoId));
  return e.shapes = i, D([
    () => $(ee(e.shapes)).to.be.false,
    () => Li(e.shapes, "removeGroupsFromSegment")
  ]), e;
}
function ts(e, t) {
  if (e.children && Array.isArray(e.children)) {
    if (t(e) === !1) return;
    for (const i of e.children)
      ts(i, t);
  }
}
function cr(e, t) {
  const i = Ie(e, !1);
  for (const n of t) {
    const o = i.filter((a) => a.stockLock.includes(n.parentId));
    if (!o.length) continue;
    const s = o.map((a) => a.area), r = s.reduce((a, c) => a + c, 0) / o.length;
    if (!(I.calculateCoefficientOfVariation(s) < this.config.priority.variationThreshold))
      for (const a of o) {
        a.priority || (a.priority = {});
        const c = ur(a, n, r);
        a.priority[n.parentId] = c, e.filter((f) => f.id !== a.id && f.parentId === a.parentId).forEach((f) => {
          f.priority || (f.priority = {}), f.priority[n.parentId] = c;
        });
      }
  }
}
function ur(e, t, i) {
  if (e.isExactFit(t) || e.area >= t.area * 0.9 || e.longSide >= t.longSide * 0.9)
    return 1;
  const n = e.area, o = t.area, s = n / o;
  return n > i ? s : 0;
}
function fr(e, t) {
  return e.reduce((i, n) => {
    const o = n.getPriority(t), s = i.getPriority(t);
    return o > s ? n : i;
  });
}
function hr(e, t, i = null) {
  let n;
  if (t?.length) {
    if (!t.length) return 1;
    const o = t.reduce((s, r) => s.area > r.area ? s : r);
    n = e.area / o.area;
  } else i && (n = e.area / i.area);
  if (n > 1) return 1;
  if (!n)
    throw new Error("no area score found");
  return n;
}
function is(e, t, i = "y") {
  if (!e || !t || e[i] === void 0 || !t.area || t.area === 0) return 0;
  const n = Se(i), o = n === "y" ? "w" : "l", s = t[i] ?? 0, r = t[n] ?? 0, c = (e[i] - s) * t[o] / t.area, u = (e[n] - r) / t[o] * t.aspect * 0.01;
  return 1 - (c + u);
}
function ss(e, t, i = "y") {
  if (!e || !t) return 0;
  "grain" in t && t.grain === "w" && (i = Se(i));
  const n = i === "y" ? "w" : "l";
  return (e[i] + e[n]) / t[n];
}
function dr(e, t, i) {
  const n = i.bladeWidth;
  return [
    // 0 left to left
    e.x === t.x,
    // 1 left to right
    e.x === t.x + t.l + n,
    // 2 bottom to bottom
    e.y === t.y,
    // 3 bottom to top
    e.y === t.y + t.w + n,
    // 4 right to left
    e.x + e.l === t.x - n,
    // 5 right to right
    e.x + e.l === t.x + t.l,
    // 6 top to bottom
    e.y + e.w === t.y - n,
    // 7 top to top
    e.y + e.w === t.y + t.w
  ];
}
function pr(e, t, i) {
  let n = 0, o = 0;
  if (!e || !t || !i)
    return {
      possibleAlignments: n,
      positiveAlignments: o
    };
  if (e.autoId === t.autoId)
    return {
      possibleAlignments: 0,
      positiveAlignments: 0
    };
  const s = (r, l) => {
    const a = dr(r, l, i);
    n += a.length, o += a.reduce(
      (c, h) => h ? c + 1 : c,
      0
    );
  };
  return v(e) ? e.shapes.forEach((r) => {
    v(t) ? t.shapes.forEach((l) => {
      s(r, l);
    }) : s(r, t);
  }) : v(t) ? t.shapes.forEach((r) => {
    s(e, r);
  }) : s(e, t), { positiveAlignments: o, possibleAlignments: n };
}
function gr(e, t, i) {
  if (!e || !t || !i)
    return [!1, !1, !1, !1];
  if (e.autoId === t.autoId)
    return [!1, !1, !1, !1];
  const n = i.bladeWidth, o = e.x, s = e.x + e.l, r = e.y + e.w, l = e.y, a = t.x, c = t.x + t.l, h = t.y + t.w, f = t.y, u = () => o === c + n && (l >= f && l < h || r <= h && r > f), d = () => s + n === a && (l >= f && l < h || r <= h && r > f), m = () => l === h + n && (o >= a && o < c || s <= c && s > a), y = () => l + n === f && (o >= a && o < c || s <= c && s > a);
  return [
    u(),
    d(),
    m(),
    y()
  ];
}
function mr(e, t) {
  return e.l === t.l && e.x === t.x;
}
function Sr(e, t) {
  return e.w === t.w && e.y === t.y;
}
function ns(e, t, i, n = {}) {
  if (e.autoId === t.autoId)
    return {
      contactResult: [],
      cohesion: 0,
      alignment: null,
      similarDimensions: 0,
      type: null,
      neighbour: t,
      neighbours: 0
    };
  const {
    contact: o = !0,
    alignment: s = !0,
    similarDimensions: r = !0,
    cohesion: l = !0
  } = n;
  let a = [];
  o && (a = gr(e, t, i));
  const c = a.filter(Boolean).length;
  if (c > 1)
    throw new Error("number of neighbours should not be greater than one for a single test shape");
  if (c === 0)
    return {
      contactResult: a,
      cohesion: 0,
      alignment: null,
      similarDimensions: 0,
      type: null,
      neighbour: t,
      neighbours: c
    };
  const h = ["lr", "rl", "bt", "tb"], f = a.findIndex(Boolean), u = h[f];
  if (!u) throw new Error("no contact type found");
  let d = null, m = null, y = 0;
  if (l && u && (d = wr(e, t, u)), s && (m = pr(e, t, i)), r) {
    const g = u === "rl" || u === "lr", S = u === "tb" || u === "bt", p = Sr(e, t), w = mr(e, t);
    (g && p || S && w) && (y = w && p ? 1 : 0.5);
  }
  return {
    contactResult: a,
    cohesion: d,
    alignment: m,
    similarDimensions: y,
    type: u,
    neighbour: t,
    neighbours: c
  };
}
function yr(e, t) {
  if (!t)
    throw new Error(`edge - no stock defined for shape ${e.id}`);
  const i = t.bladeWidth, n = e.w / t.w, o = e.l / t.l;
  return [
    // 0 left
    e.x - i <= 0 ? n : 0,
    // 1 right
    e.x + e.l + i >= t.l ? n : 0,
    // 2 bottom
    e.y - i <= 0 ? o : 0,
    // 3 top
    e.y + e.w + i >= t.w ? o : 0
  ].reduce((l, a) => l + a, 0);
}
function wr(e, t, i) {
  if (!e || !t || !i) return 0;
  const n = br(e, t), o = Ti(e), s = Ti(t), r = o + s, l = Math.max(n.l * n.w, r), a = Math.min(1, Math.max(0, r / l)), c = Math.min(1, Math.max(
    0,
    $r(e, t, i) || 0
  )), h = a * 0.7 + c * 0.3;
  return Math.min(1, Math.max(0, h));
}
function br(e, t) {
  const i = tt(e), n = tt(t), o = Math.min(i.x, n.x), s = Math.min(i.y, n.y), r = Math.max(i.x + i.l, n.x + n.l), l = Math.max(i.y + i.w, n.y + n.w);
  return {
    x: o,
    y: s,
    l: r - o,
    w: l - s
  };
}
function tt(e) {
  if (v(e)) {
    let t = 1 / 0, i = 1 / 0, n = -1 / 0, o = -1 / 0;
    return e.shapes.forEach((s) => {
      t = Math.min(t, s.x), i = Math.min(i, s.y), n = Math.max(n, s.x + s.l), o = Math.max(o, s.y + s.w);
    }), {
      x: t,
      y: i,
      l: n - t,
      w: o - i
    };
  }
  return {
    x: e.x,
    y: e.y,
    l: e.l,
    w: e.w
  };
}
function Ti(e) {
  return v(e) ? e.shapes.reduce((t, i) => t + i.area, 0) : e.area;
}
function $r(e, t, i) {
  const n = tt(e), o = tt(t);
  if (i === "lr" || i === "rl") {
    const s = Math.max(n.w, o.w);
    if (s === 0) return 0;
    const r = Math.min(n.w, o.w) / s;
    return Math.max(0, r);
  }
  if (i === "tb" || i === "bt") {
    const s = Math.max(n.l, o.l);
    if (s === 0) return 0;
    const r = Math.min(n.l, o.l) / s;
    return Math.max(0, r);
  }
  return 0;
}
async function xr(e, t, i, n) {
  return await Pe.runSpecificStrategy.call(this, {
    shapes: e,
    container: t,
    firstShape: i,
    firstShapeRotation: n
  });
}
function ki(e, t, i, n = null, o = null, s = null, r = null) {
  if (!n)
    throw new Error("shapePosition was not passed any placed shapes");
  if (!o)
    throw new Error("shapePosition was not passed any unplaced shapes");
  Y(t) ? Ir(
    e,
    t,
    i,
    n,
    r
    // tidy
  ) : rs(
    e,
    t,
    i,
    n,
    s
  );
}
function Ir(e, t, i = null, n = [], o = null) {
  e.resetScore();
  const s = {
    compression: 0,
    fill: 0,
    similarDimensions: 0,
    fenceConsistency: 0,
    sameStripBonus: 0,
    exactStripFill: 0,
    cohesion: 0,
    total: 0,
    cutDirection: t.cutDirection
  }, r = t.cutPreference, l = t.cutDirection, a = t.getStock.bladeWidth, { cutAxis: c } = _i(l), h = or(e, o);
  if (!h) return !1;
  const f = fe(h);
  let u = f;
  const d = f === "l" ? "w" : "l";
  h[d] !== e[d] && (u = N(f));
  const m = es(e, h, d);
  if (t.saw.guillotineOptions.maxPhase && m > t.saw.guillotineOptions.maxPhase) return !1;
  const y = fe(h) ?? t.cutDirection;
  if (!y) throw new Error("keyDimension is not defined");
  const g = Yt(h);
  if (g) {
    const T = Se(Ai(fe(g))), b = gt(e, g, T);
    if (g.guillotineState.myPhase <= 2 && !b) return !1;
  }
  let S = !1;
  t.firstShape && (S = e[c] > t.firstShape[c]);
  const p = {
    lr: [],
    bt: [],
    tb: [],
    rl: []
  };
  for (const T of n) {
    const b = ns(
      e,
      T,
      t,
      {
        contact: !0,
        cohesion: !!i.cohesion,
        alignment: !!i.alignment,
        similarDimensions: !!i.similarDimensions
      }
    );
    b.type && (p[b.type].push(T), "cohesion" in s && i.cohesion && S && (s.cohesion += b.cohesion), "similarDimensions" in s && i.similarDimensions && (s.similarDimensions += b?.similarDimensions ? b.similarDimensions : 0), "fenceConsistency" in s && i.fenceConsistency && (r === "w" ? b.type === "lr" && b.neighbour.l === e.l && b.neighbour.y === e.y && (s.fenceConsistency = 1) : r === "l" && b.type === "bt" && b.neighbour.w === e.w && b.neighbour.x === e.x && (s.fenceConsistency = 1)));
  }
  if ("exactStripFill" in s && i.exactStripFill && h) {
    const T = N(fe(h)), b = e[T] + a;
    s.exactStripFill = b >= h[T] && b < h[T] + a ? 1 : 0;
  }
  if ("compression" in s && i.compression) {
    const T = y === "l" ? "y" : "x";
    s.compression = is(
      e,
      t,
      T
    );
  }
  if ("fill" in s && i.fill) {
    const T = y === "l" ? "y" : "x";
    s.fill = ss(e, t, T);
  }
  if (s.cohesion = Math.max(0, s.cohesion), "sameStripBonus" in s && i.sameStripBonus && t.firstShape) {
    const T = fe(h);
    if (!S)
      s.sameStripBonus = 0;
    else if (T === "w" && p?.bt?.length) {
      const b = mt(p.bt, "x"), E = b.x + b.l;
      e.x + e.l > E && (s.sameStripBonus = 0, s.cohesion = 0);
    } else if (T === "l" && p?.lr?.length) {
      const b = mt(p.lr, "y"), E = b.y + b.w;
      e.y + e.w > E && (s.sameStripBonus = 0, s.cohesion = 0);
    } else
      s.sameStripBonus = 1;
  }
  if (i.aspectRatio) {
    const T = e.aspect, b = fe(h);
    T < 0.1 ? e[b] > e[N(b)] && (s.aspectRatio = 1) : s.aspectRatio = 0;
  }
  const w = { ...s };
  Object.keys(s).forEach((T) => {
    if (typeof s[T] == "number") {
      const b = s[T];
      b < 0 ? w[T] = b : w[T] = i[T] ? b * i[T] : 0;
    }
  }), e.score = w;
  let x = 0;
  for (const T of Object.values(e.score))
    typeof T == "number" && (x += T);
  if (e.score.total = x, e.score.total < 0 && (e.score.total = 0), isNaN(e.score.total)) throw new Error("score is not a number");
  return e.score.cutDirection = l, e.score.myStripParent = h, e.score.myStripDirection = u, e.score.myPhase = m, e.score.total > (e?.bestScore?.total || 0) && e.setBestScore(e), !0;
}
function rs(e, t, i, n, o) {
  e.resetScore();
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
  "edge" in s && i.edge && (s.edge = yr(e, t)), "fill" in s && i.fill && (s.fill = ss(
    e,
    t,
    t?.saw?.efficiencyOptions?.primaryCompression ?? "w"
  )), "compression" in s && i.compression && (s.compression = is(
    e,
    t,
    t?.saw?.efficiencyOptions?.primaryCompression ?? "w"
  ));
  let r = 0, l = 0;
  const a = {
    lr: !1,
    rl: !1,
    bt: !1,
    tb: !1
  };
  for (const f of n) {
    const u = ns(
      e,
      f,
      t,
      {
        contact: !0,
        cohesion: !!i.cohesion,
        alignment: !!i.alignment,
        similarDimensions: !!i.similarDimensions
      }
    );
    u.type && (a[u.type] = !0, i.alignment && u.alignment && (l += u.alignment.positiveAlignments, r += u.alignment.possibleAlignments), i.cohesion && (s.cohesion += u.cohesion), i.similarDimensions && (s.similarDimensions += u?.similarDimensions ? u.similarDimensions : 0));
  }
  s.similarDimensions /= 4, r === 0 ? s.alignment = 0 : s.alignment = l / r, i.exactFit && (e.l === t.l || e.w === t.w) && (s.exactFit = 1), i.area && (s.area = hr(e, n, t));
  const c = { ...s };
  Object.keys(s).forEach((f) => {
    if (typeof s[f] == "number") {
      const u = s[f];
      c[f] = i[f] ? u * i[f] : 0;
    }
  }), e.score = c;
  let h = 0;
  for (const f of Object.values(e.score))
    typeof f == "number" && (h += f);
  if (e.score.total = h, isNaN(e.score.total))
    throw new Error("thisShape.score.total is not a number: " + JSON.stringify(e.score));
  e.score?.total > (e?.bestScore?.total || 0) && e.setBestScore(e, o);
}
function xe(e, t, i) {
  const n = this.shapeList.reduce(
    (P, O) => O.added ? P : ++P,
    0
  );
  let o, s, r;
  const l = t.getStock;
  if (!l) return !1;
  const a = e, c = V(t) ? pe(a, l) : e.filter((P) => P.added);
  let h;
  c.length && (h = fr(c, l)), h && !h.getPriority(l) && (h = null);
  const f = c.length, u = Math.max(...c.map((P) => P.x + P.l)), d = Math.max(...c.map((P) => P.y + P.w));
  let m = 0, y = null, g = null, S;
  if (i || (i = e.find((P) => P.x === (t.x || 0) && P.y === (t.y || 0))), !i) return !1;
  const p = i.area;
  let w = null;
  const x = t.area, T = c.reduce((P, O) => P + O.area, 0);
  if (V(t)) {
    if (t.cutType === "efficiency" ? (S = t.primaryCompression ?? "w", m = lt(
      c,
      S,
      l.bladeWidth
    ), w = i?.bestScore?.total, m = m / t[S === "l" ? "l" : "w"]) : (S = t.cutPreference === "l" ? "x" : "y", m = lt(
      c,
      S,
      l.bladeWidth
    ), m = m / t[S === "x" ? "l" : "w"]), t.cutType === "guillotine" && (o = e.filter((P) => P.added && _t(P) === 1).length), r = T / x, we() && D([() => $(r).to.be.lessThanOrEqual(1)]), t?.saw?.stockType === "roll") {
      const P = mt(c, "x");
      s = P.x + P.l;
    }
  } else if (Y(t)) {
    S = l.cutPreference === "l" ? "x" : "y", m = lt(
      c,
      S,
      l.bladeWidth
    ), m = m / t[S === "x" ? "w" : "l"];
    const P = N(l.cutPreference), O = P === "l" ? "x" : "y";
    if (y = l[P] - (i[P] + i[O] + l.bladeWidth), g = i[P], t.cutPreference === "flex")
      throw new Error("cut preference is set to flex, it should be l or w at this point");
    r = T / x;
  } else
    r = T / x;
  const b = c.reduce((P, O) => P + (O?.bestScore?.total ?? 0), 0), E = Q(e, t).length + f, L = Q(e, l).length + f, B = c.map((P) => P.compress()), q = {
    type: this.tidyStrategy ? "tidy" : "algo",
    stockID: l.id,
    stock: l,
    container: t,
    firstShape: i,
    firstShapeRotation: i.rot,
    topPriorityShape: h ? h.id : null,
    cutPreference: l.cutPreference,
    cutType: l.saw.cutType,
    segmentCutDirection: Y(t) ? t.cutDirection : null,
    // Result contains individual shapes (groups have already called placeMyShapes)
    shapes: B,
    score: {
      efficiency: r,
      totalShapeArea: T,
      totalShapesPlaced: f,
      totalShapeScore: b,
      firstRowLength: m,
      // firstShapeFill,
      firstShapeArea: p,
      firstShapeScore: w,
      containerAvailableShapes: E,
      stockAvailableShapes: L,
      totalUnplacedShapes: n,
      rollLength: s || null,
      maxX: u,
      maxY: d,
      stripShapes: o || null,
      stripSize: g || null,
      remainingStripSpace: y || null,
      uniqueStock: this.uniqueStock.length
    }
  }, C = B.filter((P) => P.type === "position");
  return C.length > 0 && console.log(`[scoreContainer] Result contains ${C.length} position groups: ${C.map((P) => P.id).join(", ")}`), q;
}
function Tr(e, t, i = "sheet") {
  if (e && e?.length) {
    if (e.length === 1) return e[0];
    switch (e = e.filter((n) => n.score?.efficiency), i) {
      case "sheet":
        switch (t) {
          case "tidy":
            e.sort(Cr.bind(this));
            break;
          case "strip":
            e.sort(Ci.bind(this));
            break;
          case "guillotine":
          case "beam":
            e.sort(Er.bind(this));
            break;
          default:
            e.sort(vr.bind(this));
            break;
        }
        break;
      case "linear":
        e.sort(kr);
        break;
      case "roll":
        switch (t) {
          case "guillotine":
          case "strip":
            e.find((n) => n.score.containerAvailableShapes === 0) && (e = e.filter((n) => n.score.containerAvailableShapes === 0)), e.sort(Ci);
            break;
          case "efficiency": {
            e.sort(Pr);
            break;
          }
        }
        break;
    }
    return e[0];
  }
}
function kr(e, t) {
  return t.score.efficiency - e.score.efficiency;
}
function Ci(e, t) {
  if (D([() => $(e.score).to.exist, () => $(t.score).to.exist]), !e.score || !t.score) return 0;
  const i = e.score.totalShapesPlaced === e.score.containerAvailableShapes || t.score.totalShapesPlaced === t.score.containerAvailableShapes, n = e.score.stockAvailableShapes === e.score.totalShapesPlaced, o = t.score.stockAvailableShapes === t.score.totalShapesPlaced, r = (e?.stock?.saw?.cutPreference || t?.stock?.saw?.cutPreference || "l") === "l" ? "w" : "l", l = e?.stock?.l || t?.stock?.l, a = e?.stock?.w || t?.stock?.w, c = e?.stock?.saw?.bladeWidth || t?.stock?.saw?.bladeWidth || 0, h = r === "w" ? a - c : l - c, f = e.firstShape && (r === "w" ? e.firstShape.w > h * 0.5 : e.firstShape.l > h * 0.5), u = t.firstShape && (r === "w" ? t.firstShape.w > h * 0.5 : t.firstShape.l > h * 0.5), d = e.firstShape?.orientationLock && e.firstShape.orientationLock !== r, m = t.firstShape?.orientationLock && t.firstShape.orientationLock !== r, g = ((C, P) => {
    const W = Math.abs(C - P);
    return i ? Math.min(0.35, 0.2 + W * 0.3) : W > 0.5 ? Math.min(0.4, 0.2 + W * 0.2) : 0.2;
  })(e.score.efficiency, t.score.efficiency), S = (C, P) => {
    const O = C.score.stockAvailableShapes - C.score.totalShapesPlaced;
    if (O <= 0) return !0;
    let W;
    r === "w" ? W = a - C.score.maxY - (O > 0 ? c : 0) : W = l - C.score.maxX - (O > 0 ? c : 0);
    const M = r === "l" ? W : l - C.score.maxX, G = r === "w" ? W : a - C.score.maxY;
    if (M <= 0 || G <= 0)
      return 0;
    const _ = new Re({
      l: M,
      w: G,
      saw: C?.stock?.saw,
      stockType: C?.stock?.stockType
    });
    if (P.firstShape) {
      const K = te(P.firstShape, _, null, C?.stock?.saw), le = r === "w" && P.firstShape.w > h * 0.5 || r === "l" && P.firstShape.l > h * 0.5;
      if (K && !le && O > 1) {
        const ke = h * 0.7;
        return W >= ke;
      }
      return K;
    }
    return W >= h * 0.3;
  }, p = (C, P) => {
    if (n && o || !n && !o) return 0;
    if (C.score.stockAvailableShapes === C.score.totalShapesPlaced)
      return 0.1;
    if (!S(C, P)) {
      const M = C.score.stockAvailableShapes - C.score.totalShapesPlaced;
      return -Math.min(0.3, 0.1 + M * 0.05);
    }
    return 0;
  }, w = f && d, x = u && m;
  if (w && !x)
    return S(t, e) && t.score.efficiency > e.score.efficiency + g ? 1 : -1;
  if (x && !w)
    return S(e, t) && e.score.efficiency > t.score.efficiency + g ? -1 : 1;
  if (f && !u)
    return S(t, e) && t.score.efficiency > e.score.efficiency + g ? 1 : -1;
  if (u && !f)
    return S(e, t) && e.score.efficiency > t.score.efficiency + g ? -1 : 1;
  if (i) {
    if (n && !o)
      return t.score.efficiency > e.score.efficiency + 0.15 ? 1 : -1;
    if (o && !n)
      return e.score.efficiency > t.score.efficiency + 0.15 ? -1 : 1;
  }
  const T = e.score.efficiency + p(e, t), b = t.score.efficiency + p(t, e);
  if (T > b) return -1;
  if (T < b) return 1;
  const E = e.score.stockAvailableShapes - e.score.totalShapesPlaced, L = t.score.stockAvailableShapes - t.score.totalShapesPlaced;
  let B, q;
  if (r === "w" ? (B = a - e.score.maxY - (E > 0 ? c : 0), q = a - t.score.maxY - (L > 0 ? c : 0)) : (B = l - e.score.maxX - (E > 0 ? c : 0), q = l - t.score.maxX - (L > 0 ? c : 0)), E > 0 || L > 0) {
    const C = r === "l" ? B : l - e.score.maxX, P = r === "w" ? B : a - e.score.maxY, O = r === "l" ? q : l - t.score.maxX, W = r === "w" ? q : a - t.score.maxY, M = C > 0 && P > 0, G = O > 0 && W > 0;
    if (M && !G) return -1;
    if (G && !M) return 1;
    if (!M && !G)
      return 0;
    const _ = new Re({
      l: C,
      w: P,
      saw: e?.stock?.saw,
      stockType: e?.stock?.stockType
    }), K = new Re({
      l: O,
      w: W,
      saw: t?.stock?.saw,
      stockType: t?.stock?.stockType
    });
    if (e.firstShape && (r === "w" && e.firstShape.w > h * 0.5 || r === "l" && e.firstShape.l > h * 0.5)) {
      const le = E > 0 && te(e.firstShape, _, null, e?.stock?.saw), ke = L > 0 && te(e.firstShape, K, null, t?.stock?.saw);
      if (le && !ke) return -1;
      if (ke && !le) return 1;
    }
    if (t.firstShape && (r === "w" && t.firstShape.w > h * 0.5 || r === "l" && t.firstShape.l > h * 0.5)) {
      const le = E > 0 && te(t.firstShape, _, null, e?.stock?.saw), ke = L > 0 && te(t.firstShape, K, null, t?.stock?.saw);
      if (le && !ke) return -1;
      if (ke && !le) return 1;
    }
  }
  if (E > 0 && L > 0) {
    const C = h / 2;
    if (B < C && q >= C)
      return 1;
    if (q < C && B >= C)
      return -1;
  }
  if (i) {
    const C = e.score.maxX * e.score.maxY, P = t.score.maxX * t.score.maxY;
    if (C < P) return -1;
    if (C > P) return 1;
  }
  return e.shapes?.length < t.shapes?.length ? -1 : e.shapes?.length > t.shapes?.length ? 1 : e?.firstShape?.area > t?.firstShape?.area ? -1 : e?.firstShape?.area < t?.firstShape?.area ? 1 : 0;
}
function Cr(e, t) {
  return e.score[this.config.successMetric] > t.score[this.config.successMetric] ? -1 : e.score[this.config.successMetric] < t.score[this.config.successMetric] ? 1 : e.score.firstShapeFill > t.score.firstShapeFill ? -1 : e.score.firstShapeFill < t.score.firstShapeFill ? 1 : e.score.firstRowLength > t.score.firstRowLength ? -1 : e.score.firstRowLength < t.score.firstRowLength ? 1 : e.score.totalShapeScore > t.score.totalShapeScore ? -1 : e.score.totalShapeScore < t.score.totalShapeScore ? 1 : 0;
}
function os(e, t) {
  if (e.cutType === "guillotine" && t.cutType === "guillotine") {
    if (e.stock.cutPreference === t.stock.cutPreference) {
      const i = e.stock.cutPreference === "l" ? "maxY" : "maxX";
      if (e.score[i] < t.score[i]) return -1;
      if (e.score[i] > t.score[i]) return 1;
    }
    return 0;
  } else if (e.cutType === "efficiency" && t.cutType === "efficiency") {
    if (e.stock.saw.efficiencyOptions.primaryCompression === t.stock.saw.efficiencyOptions.primaryCompression) {
      const i = e.stock.saw.efficiencyOptions.primaryCompression === "w" ? "maxY" : "maxX";
      if (e.score[i] < t.score[i]) return -1;
      if (e.score[i] > t.score[i]) return 1;
    }
    return 0;
  }
  return 0;
}
function Pr(e, t) {
  return e.score.efficiency > t.score.efficiency ? -1 : e.score.efficiency < t.score.efficiency ? 1 : e.type !== "evo" && t.type === "evo" ? -1 : e.type === "evo" && t.type !== "evo" ? 1 : e.shapes?.length < t.shapes?.length ? -1 : e.shapes?.length > t.shapes?.length ? 1 : e.score.totalShapeScore > t.score.totalShapeScore ? -1 : e.score.totalShapeScore < t.score.totalShapeScore ? 1 : be.ID(e.stock, t.stock);
}
function Er(e, t) {
  if (e.score[this.config.successMetric] > t.score[this.config.successMetric])
    return -1;
  if (e.score[this.config.successMetric] < t.score[this.config.successMetric])
    return 1;
  if (e.score[this.config.successMetric] === t.score[this.config.successMetric]) {
    if (e.type === "allocated strips" && t.type !== "allocated strips") return 1;
    if (e.type !== "allocated strips" && t.type === "allocated strips") return -1;
  }
  if ((e.score.containerAvailableShapes === 0 || t.score.containerAvailableShapes === 0) && e.cutPreference === t.cutPreference) {
    const n = e.cutPreference === "l" ? "maxY" : "maxX";
    if (e.score[n] < t.score[n])
      return -1;
    if (e.score[n] > t.score[n])
      return 1;
    if (e.score.stripShapes < t.score.stripShapes)
      return -1;
    if (e.score.stripShapes > t.score.stripShapes)
      return 1;
  }
  const i = os(e, t);
  return i !== 0 ? i : e.score.firstShapeArea > t.score.firstShapeArea ? -1 : e.score.firstShapeArea < t.score.firstShapeArea ? 1 : be.ID(e.stock, t.stock);
}
function vr(e, t) {
  const i = e.score?.totalUnplacedShapes, n = t.score?.totalUnplacedShapes;
  if (e.stock.id !== t.stock.id && (i === 0 || n === 0) && !(i === 0 && n === 0)) {
    const s = i === 0 ? e : t, r = i === 0 ? t : e, l = s.stock, a = r.stock, c = l.area - s.score.totalShapeArea, h = a.area;
    return s.score.totalShapeArea - r.score.totalShapeArea < h && h < c ? a.id === e.stock.id ? -1 : 1 : a.id === e.stock.id ? 1 : -1;
  }
  if (e.score[this.config.successMetric] > t.score[this.config.successMetric])
    return -1;
  if (e.score[this.config.successMetric] < t.score[this.config.successMetric])
    return 1;
  const o = os(e, t);
  return o !== 0 ? o : e.type !== "evo" && t.type === "evo" ? -1 : e.type === "evo" && t.type !== "evo" ? 1 : e.score.firstShapeArea > t.score.firstShapeArea ? -1 : e.score.firstShapeArea < t.score.firstShapeArea ? 1 : e.score.totalShapeScore > t.score.totalShapeScore ? -1 : e.score.totalShapeScore < t.score.totalShapeScore ? 1 : be.ID(e.stock, t.stock);
}
function as(e) {
  if (!e) return e;
  const t = { ...e };
  return e.stock && (t.stock = e.stock), e.resultKey !== "bestPartialResult" && e.firstShape && "toData" in e.firstShape && (t.firstShape = e.firstShape.toData(Ae.Compressed)), e.shapes?.length && (t.shapes = e.shapes.map((i) => i && "toData" in i ? i.toData(Ae.Compressed) : i)), "stripShapes" in e && e.stripShapes?.length && (t.stripShapes = e.stripShapes.map((i) => i && "toData" in i ? i.toData(Ae.Compressed) : i)), "root" in e && e.root && "toData" in e.root && (t.root = e.root.toData(Ae.Compressed)), "container" in e && e.container && "toData" in e.container && (t.container = e.container.toData(Ae.Compressed)), t;
}
function Xt(e, t) {
  return e?.stock ? V(e.stock) ? e.stock : t.find((i) => i.autoId === e.stock.autoId) || null : null;
}
async function ae(e, t = null) {
  if (e.score?.efficiency === 0 && e.shapes?.length > 0) {
    const r = e.shapes.filter((l) => l.added);
    if (r.length > 0) {
      const l = r.length / e.shapes.length;
      e.score.efficiency = l;
    }
  }
  this?.job && this.job.updateProgress({
    socketId: this.socketId,
    type: "algo",
    message: "result"
  });
  const i = t === "strip" ? "bestPartialResult" : "bestResult";
  e.resultKey = i;
  const n = this[i], o = e?.firstShape;
  if (we()) {
    const r = e.score.efficiency, l = v(o) ? `${o.id}: [${o?.shapes?.map((c) => c.parentId).join(", ")}]` : o?.id, a = [
      {
        property: "Key",
        value: i
      },
      {
        property: "Type",
        value: e.type
      },
      {
        property: "Stock ID",
        value: e.stock.id
      },
      ...e.container && Y(e.container) ? [{
        property: "Segment ID",
        value: e.container.id
      }] : [],
      ...e.container && Y(e.container) ? [{
        property: "Segment coords",
        value: `${e.container.x},${e.container.y}`
      }] : [],
      ...e.container ? [{
        property: "Container dimensions",
        value: `${e.container.l}x${e.container.w}`
      }] : [],
      {
        property: "First shape",
        value: l
      },
      {
        property: "First shape rotation",
        value: o?.rot ?? "N/A"
      },
      {
        property: "Efficiency",
        value: r.toFixed(2)
      },
      {
        property: "Strip batch",
        value: e?.stripShapeBatch ?? "N/A"
      }
    ];
    k("results", `Recording ${i}`, null, a);
  }
  let s = e;
  if (n && (s = Tr.call(this, [e, n], t || e.stock.cutType, e.stock?.saw?.stockType), s || (k("results", "WARNING: findWinner returned undefined, using current result as winner"), s = e), k("results", `winner for stock ${s.stock.id} eff. ${s.score.efficiency}, firstShape [${o?.id || "N/A"}], rot ${o?.rot || "N/A"}, batch ${s?.stripShapeBatch ?? "N/A"}`)), !n || !s?.processed) {
    e.processed = !0;
    const r = as(s);
    this[i] = r;
  }
  Dr(s.shapes, s.stock);
}
function Dr(e, t) {
  if (!e?.length) return;
  const i = e.filter(
    (n) => v(n) && n.type !== "user"
  );
  D([
    () => $(i.every((n) => v(n))).toBe(!0),
    () => $(i.every((n) => n.type !== "user")).toBe(!0)
  ], "expandTemporaryGroups: All filtered groups should be temporary (non-user) groups");
  for (const n of i) {
    const o = n.shapes || [], s = n.type;
    if (n.added)
      try {
        n.placeMyShapes(t), D([
          () => $(o.every((r) => r.group?.addedAsGroup === n)).toBe(!0)
        ], `expandTemporaryGroups: All children of ${s} group should have addedAsGroup reference`);
      } catch (r) {
        k("errors", `Error placing shapes for temporary group ${n.id} during expansion: ${r.message}`);
      }
    n.destroy(), D([
      () => $(o.every((r) => r.group?.reference === null || r.group?.reference === void 0)).toBe(!0),
      () => $(o.every((r) => r.group?.inGroup === !1)).toBe(!0)
    ], `expandTemporaryGroups: Children of ${s} group should be released after destroy`);
  }
}
function Be({
  bestResult: e,
  shapeList: t,
  relevantStock: i = [],
  stockList: n = [],
  resetShapes: o = null
}) {
  k("results", `updating shapes from ${e.resultKey} / ${e.type} - stock ${e.stock.id}, FS: ${e.firstShape.id}`), i.length && i.filter((c) => c.autoId !== e?.stock?.autoId).forEach((c) => {
    const h = t.filter((f) => f.added && f?.stock?.autoId === c.autoId);
    h.length && (o ? o(h, !1, !0, !1) : h.forEach((f) => {
      f.added = !1, f.reset();
    }));
  });
  const s = [];
  let r = n.length ? n.find((c) => c.autoId === e.stock?.autoId) : null;
  if (r && e.stock && e.stock.used && (r.used = !0), !r && e.stock && (r = e.stock, r.saw && !Oe(r.saw))) {
    k("results", `⚠️  Found serialized saw in bestResult.stock ${r.autoId}, attempting to restore from stockList`);
    const c = n.find((h) => h.autoId === r.autoId || h.parentId === r.parentId && Oe(h.saw));
    c && Oe(c.saw) ? (k("results", `✅ Restored live saw instance from stock ${c.autoId}`), r.saw = c.saw) : k("results", `❌ Could not restore live saw instance for stock ${r.autoId}`);
  }
  r || (r = e.stock);
  for (const c of e.shapes)
    if (Jt(c) || Ds(c)) {
      const h = t.find((f) => f.autoId === c.autoId);
      if (!h) {
        we() && (console.warn(`[updateShapeListFromBestResult] Shape ${c.autoId || c.id} from result not found in shapeList!`), console.warn(`  Available autoIds in shapeList: ${t.slice(0, 5).map((f) => f.autoId).join(", ")}...`));
        continue;
      }
      we() && (F(h) || console.warn(`Shape ${c.autoId} in shapeList is not a live instance!`)), h.update({ ...c, validationMode: "none" }), F(h) && c.group && c.group.inGroup !== void 0 && (h.group.inGroup = c.group.inGroup), h.stock = r, s.push(h);
    } else Qt(c) && k("results", `Segment group ${c.id} will be recreated at the end`);
  D([
    () => $(e.shapes.every((c) => {
      if (!Jt(c)) return !0;
      const h = t.find((f) => f.autoId === c.autoId);
      return !(!h || !h.added || h.x !== c.x || h.y !== c.y || h.l !== c.l || h.w !== c.w);
    }), "best shape not found, not added, or not correctly updated").to.be.true
  ]), we() && (s.every((h) => t.find((f) => f === h)) || console.warn("Some updated shapes are not exact references from shapeList - possible instance copying!")), Mi({
    shapes: s
  }, "updateShapeListFromBestResult");
  let l = [];
  const a = e.shapes.filter((c) => Qt(c));
  return k("results", `Best result contains ${e.shapes.length} total items`), k("results", `Found ${a.length} serialized groups to recreate:`), a.forEach((c) => {
    k("results", `  - Group ${c.id}: type=${c.type}, shapes=${c.shapes?.length || 0}, added=${c.added}, x=${c.x}, y=${c.y}`);
  }), a.length > 0 && (k("results", `Recreating ${a.length} groups from bestResult`), l = Rs(a, t, r), k("results", `Successfully recreated ${l.length} groups:`), l.forEach((c) => {
    k("results", `  - Group ${c.id}: type=${c.type}, shapes=${c.shapes?.length || 0}, added=${c.added}, x=${c.x}, y=${c.y}`);
  }), l.forEach((c) => {
    c.shapes && Array.isArray(c.shapes) && (c.shapes.forEach((f) => {
      F(f) && (f.group.reference = c, f.group.inGroup = !0, c.added && (f.group.addedAsGroup = c));
    }), D([
      () => $(c.shapes.every((f) => !F(f) || f.group?.reference === c)).toBe(!0)
    ], `updateShapeListFromBestResult: All children of group ${c.id} (type=${c.type}) should have correct reference`), c.added && D([
      () => $(c.shapes.every((f) => !F(f) || f.group?.addedAsGroup === c)).toBe(!0),
      () => $(c.shapes.every((f) => !F(f) || typeof f.group?.addedAsGroup != "string")).toBe(!0)
    ], `updateShapeListFromBestResult: addedAsGroup should be Group reference for group ${c.id} (type=${c.type})`));
    const h = c.added && typeof c.placeMyShapes == "function" && c.type !== "position";
    if (c.added && c.type === "position" && D([
      () => $(h).toBe(!1)
    ], `updateShapeListFromBestResult: Position group ${c.id} should NOT call placeMyShapes`), h)
      try {
        c.placeMyShapes(r);
      } catch (f) {
        throw console.error("[ERROR] placeMyShapes failed for group " + c.id + ":", f.message), console.error(`  Group details: type=${c.type}, x=${c.x}, y=${c.y}, rot=${c.rot}`), console.error("  Child shapes:"), c.shapes?.forEach((u) => {
          console.error(`    ${u.id}: added=${u.added}, x=${u.x}, y=${u.y}, rot=${u.rot}, l=${u.l}, w=${u.w}`);
        }), f;
      }
    we() && (c.shapes?.forEach((f) => {
      const u = t.find((d) => d.autoId === f.autoId);
      u !== f ? (console.error(`[ERROR] Group ${c.id} child shape ${f.id} is NOT the same instance as in shapeList!`), console.error(`  Group shape: added=${f.added}, x=${f.x}, y=${f.y}`), console.error(`  shapeList shape: added=${u?.added}, x=${u?.x}, y=${u?.y}`)) : f.group?.reference !== c && (console.error(`[ERROR] Group ${c.id} child shape ${f.id} has incorrect group.reference!`), console.error(`  Expected: ${c.id}, Got: ${f.group?.reference?.id || "null"}`));
    }), k("results", `Successfully recreated, placed, and linked ${l.length} groups`));
  })), { updatedShapes: s, groups: l };
}
async function We(e, t, i, n = null) {
  if (D([
    () => $(V(t)).to.be.true,
    () => {
      if (i.length) return $(F(i[0]) || ge(i[0])).to.be.true;
    }
  ]), D([() => $(ee(i), "duplicates found").to.be.false]), Xi(), n || (n = ls.call(this, t, i)), !n) throw new Error("no root segment created");
  if (this.config.sample.enable) {
    if (await qt.call(
      this,
      e,
      t,
      n
    ), e.secondRun || !this.bestResult) return;
    Be({
      bestResult: this.bestResult,
      shapeList: this.shapeList,
      stockList: this.stockList,
      resetShapes: this.resetShapes?.bind(this)
    }), await Pi.call(this, {
      options: e,
      shapes: i,
      stock: t
      // root
    }), Ft.call(this, i, n);
  }
  if (this.config.guillotine.stripShapes.allocation && i.length > 1) {
    if (await Ot.call(this, e, t, i, n), !this.bestResult) return;
    Be({
      bestResult: this.bestResult,
      shapeList: this.shapeList,
      stockList: this.stockList,
      resetShapes: this.resetShapes?.bind(this)
    }), await Pi.call(this, {
      options: e,
      shapes: i,
      stock: t,
      root: n
    });
  }
}
async function Pi({
  options: e,
  shapes: t,
  stock: i,
  root: n
}) {
  const o = pe(this.shapeList, i);
  Nr.call(
    this,
    Xt(this.bestResult, this.stockList),
    o
  ) && await Ar.call(
    this,
    e,
    o,
    t,
    i,
    n
  ), this.bestResult.shapes.forEach((r) => {
    const l = this.shapeList.find((a) => a.id === r.id);
    l && (r.x = l.x, r.y = l.y, r.placementOrder = l.placementOrder);
  });
}
async function Rr(e, t, i) {
  D([
    () => $(V(t)).to.be.true,
    () => {
      if (i.length) return $(F(i[0])).to.be.true;
    }
  ]), t.saw.cutPreference = "l";
  const n = ls.call(this, t, i);
  if (this.config.sample.enable && (await qt.call(
    this,
    e,
    t,
    n
  ), Ft.call(this, i, n)), this.config.guillotine.stripShapes.allocation && i.length > 1 && (await Ot.call(
    this,
    e,
    t,
    i,
    n
  ), Ft.call(this, i, n)), t.saw.cutPreference = "w", this.config.sample.enable && await qt.call(
    this,
    e,
    t,
    n
  ), this.config.guillotine.stripShapes.allocation && i.length > 1 && await Ot.call(
    this,
    e,
    t,
    i,
    n
  ), !this.bestResult) return !1;
  t.saw.cutPreference = this.bestResult.cutPreference;
}
async function Ot(e, t, i, n) {
  if (!this.config.guillotine.stripShapes.allocation || (D([
    () => $(V(t)).to.be.true,
    () => $(i.length ? F(i[0]) : !0).to.be.true,
    () => $(Y(n)).to.be.true
  ]), t?.saw?.stockType === "roll")) return !1;
  const o = _r.call(this, n, this.uniqueStock, this.stockList);
  if (o === !1) return !1;
  for (let s = 0; s < o; s++)
    this.resetShapes(i), n.shapes = i, D([
      () => $(ee(n.shapes, `root segment batch ${s} stock ${t.id}`), "duplicates found in root segment").to.be.false,
      () => $(i.length).to.equal(n.shapes.length),
      () => $(i.some((r) => qe(r) || Z(r)), "groups exist in new strip shape batch calculation").to.be.false
    ]), k("guillotine", `running strip shape batch ${s} for stock ${t.id}`), await Vt.call(
      this,
      e,
      t,
      n,
      s
    ), D([() => $(ee(n.shapes), "duplicates found").to.be.false]);
  return !0;
}
async function qt(e, t, i) {
  k("guillotine", `running basic first shape sample for stock ${t.id}`), D([
    () => $(V(t)).to.be.true,
    () => $(Y(i)).to.be.true,
    () => $(i?.shapes?.length).to.be.greaterThan(0)
  ]), await Vt.call(this, e, t, i);
}
async function Vt(e, t, i, n = null, o = null, s = null) {
  if (D([
    () => $(V(t)).to.be.true,
    () => $(Y(i)).to.be.true,
    () => {
      if (o) return $(F(o)).to.be.true;
      if (n !== null) return $(n).to.be.a("number");
      if (s !== null) return $([0, 1].includes(s)).to.be.true;
    }
  ]), n === null)
    await it.call(
      this,
      e,
      t,
      i,
      o,
      s,
      null
    );
  else if (await it.call(
    this,
    e,
    t,
    i,
    void 0,
    void 0,
    n
  ) === !1) return !1;
}
async function Ar(e, t, i, n, o) {
  D([
    () => $(V(n)).to.be.true,
    () => {
      if (i.length) return $(F(i[0]) || ge(i[0])).to.be.true;
      if (t.length) return $(F(t[0] || ge(i[0]))).to.be.true;
    }
  ]), k("guillotine", `running refinement for stock ${n.id}`);
  try {
    await Lr.call(
      this,
      e,
      t,
      i,
      n,
      o
    );
  } catch (s) {
    console.error("issue with runSecondPass", s.message);
  }
}
async function Lr(e, t, i, n, o) {
  if (D([
    () => $(V(n)).to.be.true,
    () => {
      if (i.length) return $(F(i[0]) || ge(i[0])).to.be.true;
      if (t.length) return $(F(t[0]) || ge(i[0])).to.be.true;
    }
  ]), !this.config.guillotine.secondPass || !this.saw?.guillotineOptions?.headCuts) return !1;
  k("guillotine", `running second pass for stock ${n.id}`), await Hr.call(this, n, i, t, o);
  const s = pe(i, n), r = xe.call(
    this,
    this.shapeList,
    n
  );
  r && n.id === Xt(this.bestResult, this.stockList)?.id && s.length - t.length > 0 && (k("guillotine", `runSecondPass added ${s.length - t.length} shape(s) to stock ${n.id}, new total ${s.length}`), r.secondPass = !0, await ae.call(this, r));
}
function Ft(e, t) {
  const i = [];
  if (this.groupList && this.groupList.length > 0)
    for (const s of this.groupList)
      s.added ? i.push(s) : s.reset();
  for (let s = e.length; s--; ) {
    const r = e[s];
    v(r) && e.splice(s, 1), r.reset();
  }
  this.groupList && (this.groupList.length = 0, this.groupList.push(...i)), this.counters.placement = 0, this.bestPartialResult = null, Xi(), t.reset(e);
  const n = t.shapes.filter((s) => F(s)), o = t.shapes.filter((s) => v(s));
  k("reset", "[RESET] RESET ROOT SEGMENT BETWEEN CALCULATIONS", null, [
    {
      type: "Root shapes",
      count: n.length,
      added: n.filter((s) => s.added).length,
      ids: n.map((s) => s.id).join(", ")
    },
    {
      type: "Root groups",
      count: o.length,
      added: o.filter((s) => s.added).length,
      ids: o.map((s) => s.id).join(", ")
    }
  ]);
}
async function Mr(e, t, i, n) {
  D([
    () => $(V(t)).to.be.true,
    () => $(Y(i)).to.be.true
  ]);
  const o = Ie(i.shapes, !1, !0), s = this.stockList.findIndex((h) => h.id === t.id);
  let r = null;
  s > 0 && (r = this.stockList[s - 1]);
  const l = N(t.cutPreference);
  let a = [], c = [];
  if (i.l === t.l && i.w === t.w ? s > 0 && (a = pe(this.shapeList, r).filter((h) => Rt(h))) : c = pe(this.shapeList, t).filter((h) => Rt(h)), a?.length || c?.length) {
    const h = l === "l" ? "x" : "y";
    a.sort((d, m) => d[h] - m[h]), c.sort((d, m) => d[h] - m[h]);
    const f = a.length ? a[a.length - 1] : c[c.length - 1], u = o.filter((d) => f[l] === d.w || f[l] === d.l);
    if (u?.length) {
      for (let d = 0; d < u.length; d++) {
        const m = u[d];
        if (d > 1 && u[d - 1].isIdentical(u[d]))
          continue;
        Te(m, 0, t);
        let y;
        f[l] === m[l] ? y = 0 : y = 1;
        const g = await cs.call(
          this,
          e,
          m,
          i,
          y
        );
        if (g?.length)
          for (let S = g.length; S--; ) {
            const p = g[S];
            await ae.call(this, p, "strip");
          }
        this.resetShapes(i.shapes);
      }
      return !(!n || n?.length);
    }
  }
  return !1;
}
async function it(e, t, i, n = null, o = null, s = null) {
  if (i.type === "root" && !e?.secondPass && (t.used = !1, this.counters.placement = 0), !i.shapes?.length) return;
  D([
    () => $(V(t)).to.be.true,
    () => $(Y(i)).to.be.true,
    () => $(n ? F(n) : !0).to.be.true,
    () => $(n ? [0, 1].includes(o) : !0).to.be.true,
    () => $(s !== null ? typeof s == "number" : !0).to.be.true,
    () => $(s !== null ? n === null : !0).to.be.true,
    () => $(o !== null ? [0, 1].includes(o) : !0).to.be.true,
    () => $(i.shapes.every((m) => !qe(m), "no segment groups should exist at this point")).to.be.true
  ]);
  const r = typeof s == "number";
  let l = !0;
  if (t.saw.guillotineOptions?.strategy === "time" && (l = !await Mr.call(
    this,
    e,
    t,
    i
  )), l)
    if (At(i))
      if (r) {
        let m = Yr(i.shapes, s, t);
        if (m.sort((S, p) => S.guillotineState.getStripShapeBatchData(s).order - p.guillotineState.getStripShapeBatchData(s).order), k("guillotine", `strip shape candidates ${m.map((S) => S.id).join("|")}`), D([
          () => $(m.find((S) => S.guillotineState.getStripShapeBatchData(s).stockId !== i.getStock.autoId), "found strip shapes in allocatedStripShape from another stock").to.be.undefined,
          () => $(ee(m), "duplicate shapes found in stripShapeCandidates").to.false,
          () => $(m.find((S) => v(S) && !Z(S)), "found groups in allocatedStripShape").to.be.undefined,
          () => $(i.shapes.filter((S) => S.added).length === 0, `added shapes found in segment ${i.id}`).to.be.true
        ]), !m.length)
          return it.call(
            this,
            e,
            t,
            i
          );
        const y = N(t.cutPreference);
        if (m = m.filter((S) => {
          if (v(S)) return !0;
          const p = vi(S, s, t, !1);
          return !Ee(S, p, t) || (vi(S, s, t, !0), !As(S, p, t)) ? !1 : (D([
            () => $(S.rot, `candidates ${S.id} rotation (${S.rot}) incorrect for batch (${p})`).equal(p)
          ]), !0);
        }), this.config.groups.guillotine.strips && m.length > 1) {
          const S = i.shapes.filter((p) => Z(p) && p.shapes.some((w) => m.includes(w)));
          S.length > 0 ? (k("guillotine", `Reusing ${S.length} existing strip groups`), m = S) : m = Xr.call(this, s, y, t, i, m);
        }
        if (m.sort(function(p, w) {
          return w[y] !== p[y] ? w[y] - p[y] : w[t.cutPreference] !== p[t.cutPreference] ? w[t.cutPreference] - p[t.cutPreference] : p.autoId.localeCompare(w.autoId, void 0, { numeric: !0 });
        }), n = m[0], !n) throw new Error("no firstShape found");
        k("guillotine", `firstShape for segment ${i.id} is ${n.id}`);
        const g = n.guillotineState.getStripShapeBatchData(s);
        if (!g) throw new Error("no fs batch found");
        D([() => $(g.stockId).equal(i.getStock.autoId)]), n.firstShape.isFirstShape = !0, o = g.rot, D([() => $([0, 1].includes(g.rot)).to.be.true]), await Gt.call(this, {
          options: e,
          fs: n,
          fsRotation: o,
          segment: i,
          stripShapeBatch: s,
          stripShapeCandidates: m
        });
      } else
        n && o !== null ? await Gt.call(this, {
          options: e,
          fs: n,
          fsRotation: o,
          segment: i,
          stripShapeBatch: s
        }) : await ht.call(
          this,
          e,
          i
        );
    else
      await ht.call(
        this,
        e,
        i
      );
  if (!this.bestPartialResult)
    if (s !== null) {
      if (await ht.call(
        this,
        e,
        i,
        !0
      ), !this.bestPartialResult) return;
    } else return;
  const c = this.bestPartialResult.firstShape, { groups: h } = Be({
    bestResult: this.bestPartialResult,
    shapeList: this.shapeList,
    stockList: this.stockList,
    resetShapes: this.resetShapes?.bind(this)
  });
  lr(i, !0), D([
    () => $(i.shapes.filter((m) => v(m)).every((m) => Z(m)), "number of groups in segment does not equal the number of strip shape groups (others should have been removed)").to.be.true,
    () => Li(i.shapes, "segmentCalculations after removeGroupsFromSegment"),
    () => $(i.shapes.every((m) => !qe(m)), "found groups in segment after removal").to.be.true
  ]);
  const f = new Set(i.shapes.map((m) => m.autoId)), u = h.filter((m) => !f.has(m.autoId));
  i.shapes.push(...u);
  const d = Q(this.shapeList);
  if (this.bestPartialResult = null, d.length || this.config.secondRun.enabled) {
    const m = Gr.call(
      this,
      i,
      c
    );
    if (m?.length) {
      k("cuts", `Created ${m.length} new segments, unplaced shapes: ${d.length}`);
      for (const y of m) {
        if (this.bestPartialResult = null, !y.shapes.length) {
          y.offcut = !0;
          continue;
        }
        y.shapes = y.shapes.filter((g) => !g.added), r && !At(y) && (y.shapes = y.shapes.filter((g) => !g.guillotineState.isInStripShapeBatch(s))), await it.call(
          this,
          e,
          t,
          y,
          null,
          null,
          s
        );
      }
    }
  }
  if (i.type === "root") {
    i.shapes = i.shapes.map((g) => v(g) ? g : this.shapeList.find((p) => p.autoId === g.autoId) || g), i.shapes.filter((g) => Z(g) && g.added);
    const m = xe.call(
      this,
      this.shapeList,
      t,
      c
    );
    if (!m) throw new Error("Unable to score stock");
    if (m.stripShapeBatch = s, m.root = i, !m.score.efficiency) return;
    const y = this.shapeList.filter((g) => !g.group?.inGroup && !v(g));
    Ls(y), s !== null ? m.type = "allocated strips" : m.type = "basic", await ae.call(this, m);
  }
}
async function Gt({
  options: e = null,
  fs: t = null,
  fsRotation: i = null,
  segment: n = null,
  stripShapeBatch: o = null,
  stripShapeCandidates: s = []
}) {
  if (!t || i === null || !n)
    throw new Error(`firstShapeSegmentCalculations requires firstShape, firstShapeRotation & segment:${t} ${i} ${n}`);
  const r = async (f, u = !0) => {
    let d;
    u ? (t.reset(), D([() => $(n.shapes.filter((m) => m.autoId === t.autoId).length, "too many first shapes in segmentShapes").to.equal(1)]), d = xe.call(
      this,
      n.shapes,
      f,
      t
    )) : d = xe.call(
      this,
      n.shapes,
      n,
      t
    ), d.score.totalShapesPlaced && await ae.call(this, d, "strip");
  };
  n.shapes = Or.call(this, n, t, o), Wr.call(
    this,
    t,
    n,
    n.getStock,
    i
  ), t.placementOrder = this.counters.placement++, D([
    () => $(Y(n)).to.be.true,
    () => $(o !== null ? typeof o == "number" : !0).to.be.true,
    () => $(i !== null ? [0, 1].includes(i) : !0).to.be.true
  ]), t && D([
    //Accept all group types (segment, user, strip) as well as shapes
    () => $(F(t) || v(t), `first shape ${t.id} is not a shape or group`).to.be.true,
    () => $(t.added, `first shape ${t.id} added too soon`).to.be.true,
    //Only check rotation for shapes, not groups (groups cannot be rotated)
    () => $(v(t) || t.rot === i, `first shape ${t.id} rotation (${t.rot}) incorrect for (${i})`).to.be.true,
    () => $(I.lessThanOrEqualTo(t.l, n.l), `first shape ${t.id} longer than segment ${t.l} > ${n.l}`).to.be.true,
    () => $(I.lessThanOrEqualTo(t.w, n.w), `first shape ${t.id} wider than segment ${t.w} > ${n.w}`).to.be.true
  ]);
  const l = n.getStock, { success: a, firstShapeSegment: c, isHeadCut: h } = await qr.call(this, {
    fs: t,
    segment: n,
    stock: l,
    stripShapeBatch: o,
    stripShapeCandidates: s,
    options: e
  });
  return !(a === !1 && (await r(c), !h));
}
function Or(e, t, i) {
  if (ee(e.shapes)) {
    const s = /* @__PURE__ */ new Set();
    e.shapes = e.shapes.filter((r) => s.has(r.autoId) ? !1 : (s.add(r.autoId), !0));
  }
  const o = e.shapes.filter((s) => s.willItFit(e) ? !(e.type !== "root" && typeof i == "number" && s.getStripShapeBatchData(i) !== !1 && t.autoId !== s.autoId) : (k("cuts", `  Excluding ${s.autoId}: doesn't fit in segment`), !1));
  return k("cuts", `  Result: ${o.length} shapes selected for segment`), this.resetShapes(o, {
    keepScores: !1,
    removeGroups: !1,
    keepGuillotineData: !0,
    keepFirstShapeSampleRotations: !0
  }), o;
}
async function qr({
  fs: e,
  segment: t,
  stock: i,
  stripShapeBatch: n,
  stripShapeCandidates: o,
  forceNoHeadCut: s,
  options: r
}) {
  k("guillotine", `[createFirstShapeSegmentsPlaceShapesAndScore] Starting for segment ${t.id}, first shape ${e.id}`);
  const { offcuts: l, firstShapeSegment: a, isHeadCut: c, success: h } = await Fr.call(this, { fs: e, segment: t, stock: i, stripShapeBatch: n, stripShapeCandidates: o, forceNoHeadCut: s, options: r });
  if (D([() => $(l.length, "too many offcuts generated").to.be.lessThanOrEqual(2)]), h === !1)
    return { success: !1, firstShapeSegment: a, isHeadCut: c };
  if (["near", "root"].includes(t.type) && a.l + i.saw.bladeWidth >= t.l && a.w + i.saw.bladeWidth >= t.w) {
    const p = [e], w = xe.call(this, p, a, e);
    return await ae.call(this, w, "strip"), { success: !0, firstShapeSegment: a, isHeadCut: c };
  }
  if (r.secondPass) {
    const { cuts: p } = Wt.call(
      this,
      {
        container: a,
        shapes: [e],
        forceNoHeadCut: s
      }
    ), { allShapesCut: w } = sr([e], p, a);
    if (!w) return { success: !1, firstShapeSegment: a, isHeadCut: c };
  }
  if (!l.length) return { success: !1, firstShapeSegment: a, isHeadCut: c };
  const f = a.cutDirection, u = l.find((p) => I.equalTo(p[f], a[f]));
  if (!u || u.l <= 0 || u.w <= 0) {
    k("cuts", `No next segment. Remaining shapes: ${t.shapes.length}`), F(e) && !t.shapes.find((w) => w.autoId === e.autoId) && t.shapes.unshift(e), t.shapes.length > 1 && await Bt.call(
      this,
      t.shapes,
      e,
      a || t
    );
    const p = xe.call(
      this,
      t.shapes,
      a,
      e
    );
    return await ae.call(this, p, "strip"), { success: !0, firstShapeSegment: a, isHeadCut: c };
  }
  const d = a.cutDirection;
  (t.type === "root" || t.type === "firstShape") && o.length === 1 && (u[d] = t[d], a[d] = t[d]), D([() => $(t.shapes.filter((p) => p.autoId === e.autoId).length, "too many first shapes in segmentShapes").to.equal(1)]), await Bt.call(
    this,
    t.shapes,
    e,
    a || t
  );
  const m = xe.call(
    this,
    [...qi(t.shapes), ...a.shapes.filter((p) => qe(p))],
    a,
    e
  );
  await ae.call(this, m, "strip");
  const y = t.type === "root" ? t.shapes.filter((p) => Z(p)) : [];
  this.resetShapes(t.shapes, {
    keepScores: !1,
    removeGroups: !0,
    keepGuillotineData: !1,
    keepFirstShapeSampleRotations: !0
  });
  const g = new Set(t.shapes.map((p) => p.autoId)), S = y.filter((p) => !g.has(p.autoId));
  return t.shapes.push(...S), { success: !0, firstShapeSegment: a, isHeadCut: c };
}
async function Fr({ fs: e, segment: t, stock: i, segmentShapes: n, stripShapeBatch: o, forceNoHeadCut: s, options: r }) {
  let l = !0, a, c = !1;
  !s && Zi.call(this, t) && (c = Ki.call(this, i.saw, e, t), t.hasHeadCut = c);
  try {
    a = Ur.call(
      this,
      e,
      c,
      t,
      i,
      n
    );
  } catch (f) {
    throw k("errors", `firstShapeSegment error, fs: ${e.autoId}, 'ssg: ${o}: ${f.message}`), new Error(`issue with createFirstShapeSegment ${f.message}`);
  }
  if (D([() => $(a[a.cutDirection]).to.equal(e[a.cutDirection])]), r?.secondPass) {
    const f = this.shapeList.filter((u) => u.added && u.stock.autoId === i.autoId && u.autoId !== e.autoId);
    if (Fi(a, f, i))
      return l = !1, { firstShapeSegment: a, offcuts: [], success: l };
  }
  const { offcuts: h } = Wt.call(
    this,
    {
      container: t,
      shapes: t.shapes,
      forceNoHeadCut: s
    }
  );
  return { firstShapeSegment: a, offcuts: h, isHeadCut: c, success: l };
}
async function ht(e, t, i = !1) {
  if (!this.config.sample.enable && i === !1) return !1;
  D([
    () => $(t.shapes.every((l) => F(l) || ge(l)), "segment shapes contains groups").to.be.true
  ]);
  let n = [];
  if (t.shapes.length > 1) {
    const l = N(t.cutDirection), a = t[l], c = t.parentSegmentGroupShapes || /* @__PURE__ */ new Set(), h = t.shapes.filter((u) => !c.has(u.id)), f = Ms(h, a * 0.05);
    if (this.config?.groups?.guillotine?.firstShape && f.length >= 2) {
      n = Oi({
        shapes: f,
        container: t,
        // Use segment as container
        targetSize: a,
        exact: !1,
        direction: l,
        // Pass Direction ('l' or 'w'), not GroupDirection
        config: this.config,
        counters: this.counters,
        preventDuplicates: !0,
        type: "firstShape"
      });
      const u = /* @__PURE__ */ new Set();
      n = n.filter((d) => {
        const m = `${d.l}-${d.w}`;
        return u.has(m) ? !1 : (u.add(m), !0);
      }), n.length > this.config.sample.guillotine && (n = n.slice(0, this.config.sample.guillotine)), k("groups", `[FIRST SHAPE GROUPS] created ${n.map((d) => d.id).join()} for segment ${t.id} `);
    }
  }
  let o = null;
  e.secondPass && (o = pe(
    this.shapeList,
    t.getStock
  ));
  const s = [...t.shapes], r = us.call(
    this,
    "guillotine",
    [...s, ...n],
    t,
    o,
    null,
    i
  );
  if (!r.length) return !1;
  for (let l = 0; l < r.length; l++) {
    const a = r[l];
    if (k("guillotine", `[FIRST SHAPE] attempting first shape candidate ${a.id} for segment ${t.id}`), l > 1 && r[l - 1].isSameSize(r[l])) {
      a.firstShape.sampleRotations = [];
      continue;
    }
    this.resetShapes(s, {
      removeGroups: !1,
      keepFirstShapeSampleRotations: !0
    }), a.firstShape.isFirstShape = !0, Os(a) && (t.shapes.find((f) => f.autoId === a.autoId) || t.shapes.push(a), t.shapes = qs(t.shapes, a)), D([
      () => $(ee(t.shapes, `segment ${t.id} before running fs tests for ${a.id}`), "duplicates found in segment").to.be.false,
      () => $(ee(t.shapes), "duplicates found").to.be.false
    ]), await cs.call(
      this,
      e,
      a,
      t
    ), D([() => $(ee(t.shapes), "duplicates found").to.be.false]), a.firstShape.isFirstShape = !1, a.firstShape.sampleRotations = [], t.shapes = s, this.resetShapes(t.shapes, {
      removeGroups: !0,
      keepFirstShapeSampleRotations: !0
    });
    const c = t.shapes.filter((f) => F(f)), h = t.shapes.filter((f) => v(f));
    k("reset", `[RESET] RESET SEGMENT ${t.id} BETWEEN FIRST SHAPE CANDIDATES: ${a.id}`, null, [
      {
        type: "Shapes",
        count: c.length,
        added: c.filter((f) => f.added).length,
        ids: c.map((f) => f.id).join(", ")
      },
      {
        type: "Groups",
        count: h.length,
        added: h.filter((f) => f.added).length,
        ids: h.map((f) => f.id).join(", ")
      }
    ]);
  }
  return !0;
}
function ls(e, t) {
  return new de({
    id: "root",
    x: 0,
    y: 0,
    w: e.w,
    l: e.l,
    t: e.t,
    saw: e.saw,
    shapes: t,
    stock: e,
    material: e.material,
    phase: 0,
    type: "root",
    isInitial: !0,
    cutDirection: e.cutPreference
    //match the stock cut preference for root segments
  });
}
function Gr(e, t) {
  k("guillotine", `creating new segments for segment ${e.id} at (${e.x},${e.y}) ${e.l}x${e.w}, first shape ${t.id} at (${t.x},${t.y}) ${t.l}x${t.w}, cut direction ${e.cutDirection}`), v(t) && k("guillotine", `first shape ${t.id} is group with ${t.shapes?.length || 0} shapes`, [t.dimensions, t.coords]), D([
    () => $(F(t) || v(t), "first shape is not a shape or group").to.be.true,
    () => $(Y(e), "segment is not a segment class").to.be.true
  ]);
  const { offcuts: i } = Wt.call(this, {
    container: e,
    shapes: e.shapes
  });
  if (!i.length) return;
  k("guillotine", `All new segments for segment ${e.id}:`, null, i.map((a) => ({ id: a.id, x: a.x, y: a.y, l: a.l, w: a.w, dir: a.cutDirection })));
  const n = e.cutDirection === "l" ? "y" : "x", o = N(e.cutPreference), s = i.filter((a) => a[n] < t[n] + t[o]), r = i.find((a) => a[n] >= t[n] + t[o]);
  if (r && (r.rowSegment = !0, s.push(r)), !s?.length) return;
  const l = Se(n);
  return s.sort((a, c) => a[n] < c[n] ? -1 : a[n] > c[n] ? 1 : a[l] < c[l] ? -1 : a[l] > c[l] ? 1 : 0), s.forEach((a) => {
    const c = e.shapes.filter((f) => !f.added && te(f, a)), h = /* @__PURE__ */ new Set();
    a.shapes = c.filter((f) => h.has(f.autoId) ? !1 : (h.add(f.autoId), !0)), D([() => $(a.shapes.every((f) => !f.added), `added shapes in offcut ${a.autoId}`).to.be.true]);
  }), e.children = s, s;
}
function Br(e, t, i, n, o, s, r, l, a) {
  if (!t || t.length <= 1) return !0;
  try {
    t.sort((b, E) => b[r] - E[r]);
    let c = 0, h = -1 / 0;
    for (const b of t)
      b[r] > h + n && (c += b[l] + n, h = b[r] + b[l]);
    if (c > e[l])
      return console.warn("Preliminary check: shapes would not fit within stock after rearrangement"), !1;
    const f = [], u = n / 2;
    let d, m, y = !1, g = 0, S = 0, p = 0;
    const w = 3;
    for (const b of t) {
      if (!Rt(b)) continue;
      y || (d = b[r], p = 0), m = b[r] + b[l];
      const E = b[r] + b[l] + u, L = new Fe(
        o === "x" ? {
          x1: 0,
          x2: e[s],
          y1: E,
          y2: E
        } : {
          x1: E,
          x2: E,
          y1: 0,
          y2: e[s]
        }
      );
      if (Nt(L, e, i))
        if (y = !0, p++, p >= w)
          y = !1, console.warn(`Forced strip creation after ${w} consecutive collisions`);
        else
          continue;
      else
        y = !1, p = 0;
      const B = i.filter((M) => I.greaterThanOrEqualTo(M[r], d) && I.lessThan(M[r], m));
      if (!B.length) continue;
      const q = B.length > 0 ? B.reduce((M, G) => {
        const _ = M[o] + M[s], K = G[o] + G[s];
        return I.equalTo(_, K) ? M[s] > G[s] ? M : G : _ > K ? M : G;
      }) : B[0];
      if (!q) continue;
      const C = q[o] + q[s], P = B.length > 0 ? B.reduce((M, G) => {
        const _ = M[r] + M[l], K = G[r] + G[l];
        return I.equalTo(_, K) ? M[l] > G[l] ? M : G : _ > K ? M : G;
      }) : B[0];
      if (!P) continue;
      let O = P[r] + P[l];
      m > O && (O = m);
      const W = O - d;
      f.push({
        stripStartPoint: d,
        stripEndPoint: m,
        furthestPrimaryPoint: C,
        furthestOrderingPoint: O,
        shapesInThisRow: B,
        width: W
      });
    }
    if (!f.length)
      return console.warn("No valid strips found after analysis"), !0;
    const x = /* @__PURE__ */ new Map();
    f.forEach((b) => {
      b.shapesInThisRow.forEach((E) => {
        x.set(E.autoId, E[r]);
      });
    }), f.sort((b, E) => I.equalTo(b.furthestPrimaryPoint, E.furthestPrimaryPoint) ? E.width - b.width : E.furthestPrimaryPoint - b.furthestPrimaryPoint);
    let T = 0;
    for (const b of f)
      T += b.furthestOrderingPoint - b.stripStartPoint + n;
    if (T > e[l])
      return console.warn("Total arrangement would exceed stock dimensions"), !1;
    for (const b of f) {
      b.shapesInThisRow.sort((E, L) => E.placementOrder - L.placementOrder);
      for (let E = 0; E < b.shapesInThisRow.length; E++) {
        const L = b.shapesInThisRow[E], B = L[r] - b.stripStartPoint, q = S + B;
        if (q + L[l] > e[l])
          return console.warn(`Shape ${L.id} would exceed stock boundaries after rearrangement`), Ei(f, x, r), !1;
        const C = L[r];
        L[r] = q, L.placementOrder = E + g, _t(L) === 1 && I.equalTo(L[o], 0) && et(L, s), !I.equalTo(C, q) && a && (ar(a, L), Mt(a, L));
      }
      if (g += b.shapesInThisRow.length, S += b.furthestOrderingPoint - b.stripStartPoint + n, S > e[l])
        return console.warn("Rearrangement exceeds stock dimensions"), Ei(f, x, r), !1;
    }
    return !0;
  } catch (c) {
    return console.error("Error during shape rearrangement:", c), !1;
  }
}
function Ei(e, t, i) {
  e.forEach((n) => {
    n.shapesInThisRow.forEach((o) => {
      t.has(o.autoId) && (o[i] = t.get(o.autoId));
    });
  });
}
function Nr(e, t, i) {
  if (!this.config?.guillotine?.strips?.rearrange || e.saw.guillotineOptions?.strategy === "time") return !1;
  const o = e.bladeWidth;
  if (I.equalTo(o, 0) || o < 0)
    return console.warn("Invalid blade width for rearrangement"), !1;
  const s = pe(t, e);
  if (!s?.length) return !1;
  const r = e.cutPreference;
  if (r !== "l" && r !== "w")
    return console.warn("Invalid primary dimension:", r), !1;
  const l = r === "l" ? "x" : "y", a = s.filter(
    (u) => Lt(u, 1) && I.equalTo(u[l], 0)
  );
  if (!a.length) return !1;
  const c = N(r), h = r === "l" ? "y" : "x";
  return a.reduce((u, d) => u + d[c], 0) > e[c] ? (console.warn("Total strip width exceeds stock dimensions"), !1) : Br(
    e,
    a,
    s,
    o,
    l,
    r,
    h,
    c,
    i
  );
}
async function Hr(e, t, i, n) {
  if (!this.config?.guillotine?.secondPass) {
    console.debug("Corner squeeze disabled in config");
    return;
  }
  if (i.length === t.length) {
    console.debug("All shapes already added, skipping corner squeeze");
    return;
  }
  if (e.saw.guillotineOptions?.strategy === "time") {
    console.debug("Time strategy selected, skipping corner squeeze");
    return;
  }
  e.rootSegment = n;
  const s = e.bladeWidth;
  if (I.equalTo(s, 0) || s < 0) {
    console.warn("Invalid blade width for corner squeeze");
    return;
  }
  const r = i.filter((u) => Lt(u, 1));
  if (!r.length) {
    console.debug("No strip shapes found for corner squeeze");
    return;
  }
  const l = e.cutPreference;
  if (l !== "l" && l !== "w") {
    console.warn("Invalid primary dimension:", l);
    return;
  }
  const a = l === "l" ? "x" : "y", c = N(l), h = l === "l" ? "y" : "x";
  r.sort((u, d) => u[h] - d[h]);
  let f = 0;
  for (let u = 0; u < r.length; u++) {
    let d = function(M, G, _, K) {
      return M[G] + M[_] + K;
    }, m = function(M, G, _, K, le) {
      return le > 0 ? le - G[_] : M[K] - G[_];
    };
    const y = r[u], g = u > 0 ? pe(this.shapeList, e) : i, S = Q(t, e);
    if (!S.length) {
      console.debug("No remaining shapes to place, exiting corner squeeze");
      break;
    }
    const p = g.filter((M) => !Lt(M, 0) && Fs(M, y, h));
    p.some((M) => M.autoId === y.autoId) || p.push(y);
    let w;
    p.length > 0 ? w = p.reduce((M, G) => M[a] + M[l] > G[a] + G[l] ? M : M[a] + M[l] < G[a] + G[l] ? G : M[h] < G[h] ? M : G) : w = y;
    const x = w[a] + w[l] + s;
    let T;
    a === "x" ? T = new Fe({
      x1: x,
      x2: x,
      y1: w[h],
      y2: e[c]
    }) : T = new Fe({
      x1: w[h],
      x2: e[c],
      y1: x,
      y2: x
    });
    const b = Nt(T, e, g, !0);
    if (!Array.isArray(b)) {
      console.warn("Expected collision shapes array but got:", typeof b);
      continue;
    }
    const E = b;
    let L = 0;
    if (E?.length && (L = E.reduce((G, _) => G[h] < _[h] ? G : _)[h] - s, L <= w[h])) {
      console.debug("Invalid segment end point calculation, skipping this squeeze attempt");
      continue;
    }
    const B = typeof H < "u" && typeof H.segments < "u" ? H.segments === 0 ? "root" : (H.segments + 1).toString() : "squeeze-" + Date.now();
    typeof H < "u" && typeof H.segments < "u" && H.segments++;
    const q = d(
      w,
      a,
      l,
      s
    ), C = m(
      e,
      w,
      h,
      c,
      L
    ), P = e[l] - q, O = {
      id: B,
      shapes: S,
      stock: e,
      saw: e.saw,
      material: e.material,
      cutDirection: N(e.cutPreference),
      phase: 0,
      stockType: e?.saw?.stockType,
      t: e.t,
      // Assign all dimensions and positions
      x: a === "x" ? q : w.x,
      y: a === "y" ? q : w.y,
      l: a === "x" ? P : e.l,
      w: a === "y" ? P : e.w,
      [a]: q,
      [h]: w[h],
      [l]: P,
      [c]: C
    };
    if (O.l <= 0 || O.w <= 0) {
      console.debug("Skipping segment with invalid dimensions:", O.l, O.w);
      continue;
    }
    let W;
    try {
      W = new de(O);
    } catch (M) {
      console.warn(`Corner squeeze segment creation error - ${M.message} for shape: ${w.id}`);
      continue;
    }
    try {
      await Vt.call(
        this,
        { secondPass: !0 },
        e,
        W
      ), f++;
    } catch (M) {
      console.warn(`Error during segment calculations: ${M.message}`);
    }
  }
  f > 0 && console.debug(`Corner squeeze completed with ${f} successful placements`);
}
function Wr(e, t, i, n = null) {
  if (!t)
    throw new Error("no segment provided to assignFirstShape");
  if (!e) throw new Error("no shape provided to assignFirstShape");
  return e.resetBothScores(), e.x = t.x, e.y = t.y, v(e) && (e.initShapes(e.shapes), e.placeMyShapes(i)), k("calculations", `assigning first shape ${e.id}, x: ${e.x}, y: ${e.y}, rot: ${n}`), e.guillotineState || (e.guillotineState = new Ue({})), e.firstShape.isFirstShape = !0, nr(e), et(e, t.cutDirection), n !== null && !v(e) ? Te(e, n, i) : n !== null && v(e) && e.rot !== n && k("groups", `[assignStripShape] WARNING: Group ${e.id} has computed rot=${e.rot} but requested rotation=${n} - groups cannot be rotated!`), we() && (v(e) || D([() => $(e.rot).to.equal(n)])), e.addToStock(i), e;
}
async function cs(e, t, i, n = null) {
  if (D([
    () => $(F(t) || v(t), "runFirstShapeRotationTests requires shape or group").to.be.true,
    () => $(Y(i)).to.be.true
  ]), !(he(n) && !Ee(t, n, i)))
    for (const o of t.firstShape.sampleRotations)
      await fs.call(
        this,
        t,
        i,
        o,
        Gt,
        {
          options: e,
          fs: t,
          fsRotation: null,
          segment: i
        },
        "fsRotation"
      );
}
function zr(e, t, i) {
  let n;
  return i ? (n = e.cutPreference, et(t, N(n)), e.hasHeadCut = !0) : (I.equalTo(t[e.cutDirection], e[e.cutDirection]) ? n = e.cutDirection : n = At(e) ? N(e.cutPreference) : N(e.cutDirection), et(t, N(n))), D([
    () => $(fe(t)).to.not.equal(n)
  ]), n;
}
function Ur(e, t, i, n, o) {
  i.hasHeadCut = t;
  const s = zr(i, e, t), r = {
    l: s === "w" ? i.l : e.l,
    w: s === "w" ? e.w : i.w
  }, l = new de({
    x: e.x,
    y: e.y,
    l: r.l,
    w: r.w,
    t: i.t,
    parent: i,
    stock: n,
    material: n.material,
    shapes: o,
    firstShape: e,
    id: "fs-" + e.id,
    phase: i.phase + 1,
    preventAutoRotation: !0,
    saw: i.stock.saw,
    cutDirection: s,
    hasHeadCut: t,
    type: "firstShape"
  });
  if (l.shapes.unshift(e), !l)
    throw new Error("firstShapeSegment not created");
  return D([
    () => $(l.cutDirection, `segment cut direction ${i.id} is the same as first shape ${e.id}`).to.not.equal(fe(e))
  ]), k("cuts", `FIRST SHAPE SEGMENT [${l?.parent?.type === "root" ? "R" : l.parent.id}]->[${l.autoId}] ${t ? "HEAD" : "NORM"} ${me(l.l, 4)}x${me(l.w, 4)}, SEG DIR ${l.cutDirection.toUpperCase()}, SHAPE DIR ${fe(e).toUpperCase()}`), l;
}
function jr(e, t, i, n, o = null, s) {
  if (!t.length) return [];
  D([
    () => $(t.length).to.be.greaterThan(0),
    () => $(e.every((a) => a.added === !1), "unplaced shapes contain added shapes").to.be.true
  ]);
  let r = [];
  for (const a of t) {
    const c = st(a, n);
    if (a.firstShape.sampleRotations = [], !v(a))
      for (const h of c) {
        let f = 1;
        Te(a, h, n);
        const u = a.getPriority(n);
        let d = !0;
        if (Te(a, h, n), D([
          () => $(a.rot, `unique shape ${a.id} rotation (${a.rot}) incorrect for (${h})`).equal(h)
        ]), !te(a, i, h))
          continue;
        if (o?.length) {
          a.x = i.x, a.y = i.y;
          for (const y of o)
            if (Gi(a, y, n)) {
              d = !1;
              break;
            }
        }
        if (!d) continue;
        const m = a.aspect;
        if (m < 0.1) {
          const y = n.cutPreference;
          if (a[y] >= 0.7 * n[y] && a[y] > a[N(y)]) {
            const g = Math.max(1, 10 * (1 - m * 2));
            f *= g;
          }
        }
        r.push({
          id: a.id,
          shape: a,
          rotation: h,
          score: f,
          priority: u
        }), D([
          () => $(te(a, i, h), "canditate will not fit").to.be.true
        ]);
      }
  }
  r.sort((a, c) => a.score !== c.score ? c.score - a.score : a.priority !== c.priority ? c.priority - a.priority : c.shape.area - a.shape.area), r = r.slice(0, this.config.sample.guillotine);
  const l = [];
  for (const a of r)
    l.find((h) => h.id === a.id) || l.push(a.shape), a.shape.firstShape.sampleRotations.push(a.rotation), D([
      () => $(a.shape.firstShape.sampleRotations.length).to.be.lessThanOrEqual(2),
      () => $(a.shape.firstShape.sampleRotations[0]).to.not.equal(a.shape.firstShape.sampleRotations[1])
    ]);
  return l.push(...s), l;
}
function Yr(e, t, i) {
  if (!e.length) return [];
  if (typeof t != "number") throw new Error("getAllocatedStripShapeBatch - stripShapeBatchNumber must be a number");
  if (!i) throw new Error("getAllocatedStripShapeBatch - stock is required");
  const n = e.filter((r) => {
    if (r.added) return !1;
    const l = r.guillotineState.getStripShapeBatchData(t);
    return !(l === !1 || l.rerunning || l.stockId !== i.autoId);
  }), o = /* @__PURE__ */ new Set();
  return n.filter((r) => o.has(r.autoId) ? !1 : (o.add(r.autoId), !0));
}
function _r(e, t, i) {
  Vr(e.shapes);
  const n = Gs.call(this, e, t, i);
  return n || !1;
}
function vi(e, t = null, i, n = !1) {
  let o;
  if (t !== null) {
    const s = e.guillotineState.getStripShapeBatchData(t);
    if (s === !1)
      throw new Error("getStripShapeRotation - could not find strip shape group");
    o = s.rot;
  }
  if (D([() => $([0, 1].includes(o)).to.be.true]), n && o !== e.rot) {
    if (v(e) || !Ee(e, o, i)) return o;
    if (Te(e, o, i) === !1)
      throw new Error("getStripShapeRotation - could not rotate strip shape correctly");
  }
  return o;
}
function Xr(e, t, i, n, o) {
  const s = i.cutPreference === "l" ? "l" : "w", r = new Set(o.map((f) => f[s]));
  D([
    () => $(r.size).to.be.greaterThan(0)
  ]);
  const l = o.filter((f) => Z(f)), a = o.filter((f) => F(f));
  if (a.length < 2)
    return o;
  const c = [...a], h = [];
  for (const f of r) {
    const u = [], d = f * (1 - this.config.groups.tolerance);
    let m = f * (1 + this.config.groups.tolerance);
    m > n[s] && (m = n[s]);
    for (let y = c.length - 1; y >= 0; y--) {
      const g = c[y];
      !g.getMinSpacing(i.saw, !0) && g[s] <= i[s] && g[s] >= d && g[s] <= m && (u.push(g), c.splice(y, 1));
    }
    u.length > 0 && h.push(u);
  }
  if (h.length > 0) {
    const f = [];
    for (const u of h) {
      if (u.length < 2) continue;
      const d = u[0], m = d.guillotineState.getStripShapeBatchData(e);
      if (m === !1)
        throw new Error("no reference shape group");
      let y;
      try {
        const g = u.slice(0, -1).reduce((E, L) => E + L.getMinSpacing(i), 0), S = u.reduce((E, L) => E + L[t], 0);
        if (g + S > i[t]) continue;
        const p = d.l, w = d.w, b = `ss-${[...new Set(u.map((E) => E.parentId || E.id))].sort().join("-")}_${this.counters.group++}`;
        y = new St({
          l: p,
          w,
          id: b,
          shapes: u,
          direction: Bs(t),
          container: i,
          type: "strip"
        });
      } catch (g) {
        console.log(g), y = null;
      }
      if (y) {
        const g = Math.min(...u.map((p) => {
          const w = p.guillotineState.getStripShapeBatchData(e);
          return w ? w.order : 1 / 0;
        }));
        y.guillotineState.setStripShapeBatchGroup(e, {
          stockId: i.autoId,
          dimension: y[t],
          rot: y.rot,
          order: g,
          priorityShape: m.priorityShape
        });
        const S = new Set(y.shapes.map((p) => p.id));
        f.push(y), n.shapes = n.shapes.filter((p) => !S.has(p.id)), n.shapes.push(y), o = o.filter((p) => !S.has(p.id));
      }
    }
    o = [...f, ...l, ...o.filter((u) => F(u))];
  } else
    o = [...l, ...a];
  return o;
}
function Vr(e) {
  for (const t of e) t.guillotineState.resetStripShapeBatchGroups();
}
function Kr(e, t) {
  const i = t.getStock, n = 0.1 * i.l;
  function o(l) {
    return e.some((a) => l.parentId === a.parentId && !a.added) && Zt(l, i) && l.willItFit(t);
  }
  const s = e.some((l) => Zt(l, i) && l.willItFit(t) && l.l >= n || l.w >= n);
  return e.filter((l) => l.added ? !1 : (ge(l) && l.updateShapeSpacing(t), e.length === 1 || !s ? o(l) : l.l < n && l.w < n ? !1 : o(l)));
}
function us(e, t, i, n = null, o = !1) {
  if (!this.config.sample.enable && o === !1) return [];
  if (!e) throw new Error("getFirstShapeSample - type is required");
  D([
    () => $(e === "guillotine" || e === "efficiency", "type not correct").to.be.true,
    () => $(Ns(i), "should be a container").to.be.true
  ]);
  const s = Ie(t, !1, !0);
  if (!s.length) return [];
  const r = t.filter((d) => v(d)), l = [], a = i.getStock;
  let c = Kr(s, i);
  if (!c.length) return [];
  if (e === "guillotine")
    c = jr.call(
      this,
      t,
      c,
      i,
      a,
      n,
      r
    );
  else if (e === "efficiency") {
    c.push(...r);
    const d = c.filter((m) => m.getPriority(a) > 0);
    d.length && (c = d), c.sort(be.aspect);
  }
  const h = c.filter((d) => v(d)), f = c.filter((d) => !v(d)), u = [...h, ...f];
  for (const d of u)
    if (v(d)) {
      if (!d.willItFit(i)) {
        k("groups", `[getFirstShapeSample] Group ${d.id} does NOT fit container after calculateGroupDimensions - skipping (group: ${d.l}x${d.w}, container: ${i.l}x${i.w})`);
        continue;
      }
      d.firstShape.sampleRotations = [d.rot.valueOf()], l.push(d);
    } else {
      const m = t.find((y) => y.parentId === d.parentId && !y.added && y.constructor.name === d.constructor.name);
      if (m && (m.firstShape.sampleRotations = st(m, i), l.push(m)), l.length >= (e === "guillotine" ? this.config.sample.guillotine : this.config.sample.efficiency))
        break;
    }
  return k("firstShapes", `candidates for stock ${i.getStock?.id}, ${Y(i) ? "segment " + i.id : ""}`, l.map((d) => ({ id: d.id, autoId: d.autoId, rotations: d.firstShape.sampleRotations }))), D([() => $(ee(l), "duplicate ids found in candidates with getFirstShapeSample").to.false]), l;
}
const Pe = {
  async calculation(e, t, i) {
    if (e?.tidy && (this.resetShapes(pe(i, t)), this.tidyStrategy = !0), await Pe.tryFirstShapes.call(this, t, i), !!this.bestResult && (this.tidyStrategy = !1, !e?.tidy && Zr.call(this, this.bestResult, t))) {
      t.algoBenchmark = this.bestResult, this.resetShapes(i);
      try {
        const o = await new Tn(this, t, i).run();
        if (!o) return;
        await ae.call(this, o.result), delete t.algoBenchmark;
      } catch (n) {
        console.error("error with evo", n);
      }
      Be({
        bestResult: this.bestResult,
        shapeList: this.shapeList,
        stockList: this.stockList,
        resetShapes: this.resetShapes?.bind(this)
      });
    }
  },
  /**
   * place the first shape according to firstShapeRotation strategy
   */
  defaultFirstShapePlacement: function(e = null, t = 0, i) {
    if (!he(t)) throw new Error("no rotation provided");
    if (!he(e))
      throw new Error("first shape not provided to defaultFirstShapePlacement");
    if (typeof e != "object")
      throw new Error("first shape is not an object");
    if (e.added)
      throw new Error(`first shape ${e.id} has been added previously`);
    if (!i)
      throw new Error("no stock provided to defaultFirstShapePlacement");
    if (e.rot !== t && !Ee(e, t, i))
      throw new Error(`first shape ${e.id} cannot rotate to: ${t}`);
    Te(e, t, i), e.resetBothScores(), rs.call(
      this,
      e,
      i,
      Ht.call(this, i, i, e),
      []
    ), e.addToStock(i), e.firstShape.isFirstShape = !0, e.placementOrder = 0, v(e) ? (e.placeMyShapes(i), this.counters.placement = e.shapes.length) : this.counters.placement = 1;
  },
  /**
   * try all first shapes with both rotations if relevant
   */
  tryFirstShapes: async function(e, t) {
    const i = Q(t, e);
    let n = us.call(
      this,
      "efficiency",
      i,
      e
    );
    const o = Ie(i, !1, !0);
    let s = o.length > 1;
    s && i.reduce((a, c) => a + c.area, 0) < e.area * this.config.groups.shapeAreaCutOff && (s = !1);
    let r = [];
    s && !this.hasMinSpacing && this.config.groups.efficiency.firstShapes && o.length < this.config.groups.efficiency.limit && (r = Pe.createFirstShapeGroups.call(
      this,
      i,
      e
    )), n.push(...r);
    let l = t;
    n = Ie(n, !1, !0);
    for (const a of n)
      a.firstShape.isFirstShape = !0, v(a) && (l = In(
        a.shapes,
        i
      ), l.unshift(a)), await Pe.calculateFirstShapeRotations.call(
        this,
        l,
        e,
        a
      ), a.firstShape.isFirstShape = !1;
  },
  /**
   * run the calculations for both first shape rotations
   */
  calculateFirstShapeRotations: async function(e, t, i) {
    const n = st(i, t);
    for (const o of n) {
      this.resetShapes(e, !1, !1), i.added = !1, v(i) && (i.placeMyShapes(t), e.unshift(...i.shapes), e = e.filter((r) => r.id !== i.id));
      const s = await xr.call(
        this,
        e,
        t,
        i,
        o
      );
      he(s.score) && await ae.call(this, s);
    }
  },
  /**
   * scores the stock for a specific strategy and adds the score to the stock object
   */
  runSpecificStrategy: async function({
    shapes: e,
    container: t,
    firstShape: i = null,
    firstShapeRotation: n = 0,
    weighting: o = null
  }) {
    const s = performance.now();
    if (this.counters.placement = 1, !e.length) return !1;
    if (!i)
      throw new Error("no firstShape provided to efficiency.runSpecificStrategy");
    if (V(t) && (t.used = !1), this.resetShapes(e, !0, !1), i.reset(), !F(i) && !v(i) && typeof i == "string" && (i = this.shapeList.find((c) => c.id === i)), e.length) {
      if (o) {
        this.weighting.custom = {};
        for (const h of Object.keys(this.weighting.efficiency.standard()))
          this.weighting.custom[h] = o[h] ? o[h] : 0;
      }
      if (Pe.defaultFirstShapePlacement.call(
        this,
        i,
        n,
        t
      ), await Bt.call(
        this,
        e,
        i,
        t
      ) === !1) return !1;
    }
    const r = xe.call(
      this,
      e,
      t,
      i
    );
    o && (this.weighting.custom = null);
    const l = performance.now(), a = Math.ceil(l - s);
    return r.time = a, r;
  },
  /**
   * create groups to be used as a first shape
   * CAUTION - can make very simple calculations less efficient
   */
  createFirstShapeGroups: function(e, t) {
    if (!this.config.groups.efficiency.firstShapes) return [];
    const i = Q(e, t).filter((r) => F(r)), n = ["l", "w"], o = /* @__PURE__ */ new Map();
    for (const r of n)
      Oi({
        shapes: i,
        container: t,
        targetSize: t[r],
        exact: !1,
        direction: r,
        config: this.config,
        preventDuplicates: !0,
        counters: this.counters
      }).forEach((a) => {
        const c = `${a.l}-${a.w}`;
        o.has(c) || o.set(c, a);
      }), this.resetShapes(i);
    let s = Array.from(o.values());
    return s.sort((r, l) => l.efficiency - r.efficiency), s = s.slice(0, this.config.sample.groupSize), D([
      () => $(s.every((r) => I.lessThanOrEqualTo(r.l, t.l) && I.lessThanOrEqualTo(r.w, t.w)), "groups larger than container").to.be.true
    ]), s.length ? s : [];
  },
  /**
   * should tidy run?
   */
  shouldUseTidy: function(e, t) {
    return !this.config.efficiency.tidy || t?.saw?.stockType === "roll" || !e ? !1 : e.score.efficiency < 0.9 && t.cutType === "efficiency";
  }
}, Ce = {
  types: ["efficiency", "guillotine", "beam", "linear", "roll"],
  getCalculationType(e) {
    switch (e?.cutType) {
      case "efficiency":
        return e.cutType;
      case "guillotine":
        return e.cutType;
      case "beam":
        return e.cutType;
    }
    switch (e?.saw?.stockType) {
      case "linear":
        return e.saw.stockType;
      case "roll":
        return e.saw.stockType;
    }
    return null;
  },
  efficiency: async function(e, t, i) {
    await Pe.calculation.call(this, e, t, i);
  },
  guillotine: async function(e, t, i, n = []) {
    if (this.counters.placement = 0, e.secondRun && n.length) {
      for (const o of n) {
        const s = i.filter((r) => !r.added);
        o.shapes = s, await We.call(
          this,
          e,
          t,
          s,
          o
        );
      }
      return;
    }
    t?.saw?.cutPreference === "flex" ? await Rr.call(
      this,
      e,
      t,
      i
    ) : await We.call(
      this,
      e,
      t,
      i
    );
  },
  beam: async function(e, t, i, n = []) {
    if (this.counters.placement = 0, e.secondRun && n.length) {
      for (const o of n) {
        const s = i.filter((r) => !r.added);
        o.shapes = s, await We.call(
          this,
          e,
          t,
          s,
          o
        );
      }
      return;
    }
    await We.call(
      this,
      e,
      t,
      i
    );
  },
  roll: async function(e, t, i) {
    let n = [];
    switch (t.cutType) {
      case "guillotine":
        t.saw.cutPreference = "w", n = await Ce.guillotine.call(
          this,
          e,
          t,
          i
        );
        break;
      case "efficiency":
        t.saw.efficiencyOptions.primaryCompression = "l", n = await Ce.efficiency.call(
          this,
          e,
          t,
          i
        );
        break;
    }
    await ae.call(this, n);
  },
  linear: async function(e, t, i) {
    const n = Hs.call(this, t, i);
    n && t && (Ws(n, t, i), n.stock = t, await ae.call(this, n));
  }
};
async function Jr({
  shapeOrGroup: e,
  container: t,
  weighting: i,
  containerPlacedShapes: n = null,
  stockPlacedShapes: o = null,
  unplacedShapes: s = null,
  placementPositions: r = null,
  rayCastCoords: l = null,
  placedCoords: a = null
}) {
  if (!n)
    throw new Error("findBestShapePosition was not passed any placedShapes");
  if (!s)
    throw new Error("findBestShapePosition was not passed any unplacedShapes");
  if (!e)
    throw new Error("findBestShapePosition was not passed a shape");
  if (ge(e))
    try {
      e.updateShapeSpacing(t);
    } catch {
      return !1;
    }
  const c = t.l + t.x - e.l, h = t.w + t.y - e.w;
  if (c < 0 || h < 0) return !1;
  const f = new wt(), u = t.getStock;
  if (l)
    for (const d of l.points.values()) {
      const m = js(
        e,
        d,
        t
      );
      m && f.addPoints(m.toArray());
    }
  for (const d of r.points.values()) {
    const m = Ys(
      e,
      d,
      t
    );
    f.addPoints(m.toArray());
  }
  if (t.cutType === "efficiency") {
    const d = e.getMinSpacing(t.saw);
    if (d > 0)
      for (const m of f.points.values()) {
        if (e.x = m.x, e.y = m.y, e.isTooCloseToEdges(t)) {
          m.tooClose = !0;
          continue;
        }
        if (!V(t) && e.isTooCloseToEdges(u)) {
          m.tooClose = !0;
          continue;
        }
        if (!m.tooClose) {
          const y = e.createProximityRectangle(d);
          if (!y)
            throw new Error("unable to create proximity rectangle");
          const g = n.length > o.length ? n : o;
          for (const S of g)
            if (m.tooClose = Gi(
              y,
              S,
              t,
              !1
            ), m.tooClose) break;
        }
      }
  }
  for (const d of f.points.values()) {
    if (d.tooClose || I.greaterThan(d.x, c) || I.greaterThan(d.y, h) || (e.x = d.x, e.y = d.y, Fi(e, n, t))) continue;
    ki(
      e,
      t,
      i,
      n,
      s,
      d,
      a
    );
    let y = s.length > 1;
    (t.cutType === "efficiency" && this.config.groups.efficiency.position || ["guillotine", "beam"].includes(t.cutType) && this.config.groups.guillotine.position) && (Qr.call(this, s, t) || (y = !1)), y && (t.cutType === "efficiency" && this.config.groups.efficiency.position || ["guillotine", "beam"].includes(t.cutType) && this.config.groups.guillotine.position) && d.type !== "group" && F(e) && _s({
      container: t,
      containerPlacedShapes: n,
      unplacedShapes: s,
      shape: e,
      point: d,
      config: this.config,
      scoreFunction: (g, S, p, w, x) => {
        ki(
          g,
          S,
          i,
          p,
          w,
          x,
          a
        );
      }
    });
  }
  return !0;
}
function Qr(e, t) {
  return e.reduce((i, n) => i + n.area, 0) < t.area * this.config.groups.shapeAreaCutOff;
}
async function fs(e, t, i = null, n = null, o = {}, s = null) {
  if (!n)
    throw new Error("no testFunction provided to testShapeRotations");
  if (typeof n != "function")
    throw new Error("testFunction provided to testShapeRotations is not a function");
  if (n.constructor.name !== "AsyncFunction")
    throw new Error("testFunction provided to testShapeRotations must be async");
  if (v(e)) {
    s && (o[s] = e.rot), await n.call(this, o);
    return;
  }
  he(e.orientationLock) && (i = zs(e, t));
  const r = he(i) ? i : 0;
  Ee(e, r, t) && te(e, t, r) && (Te(e, r, t), s && (o[s] = r), await n.call(this, o));
  const l = 1;
  i === null && !e.isSquare && Ee(e, l, t) && te(e, t, l) && (Te(e, l, t), s && (o[s] = l), await n.call(this, o));
}
async function Bt(e, t, i) {
  if (!e.length) return !1;
  if (ee(e)) {
    const u = /* @__PURE__ */ new Set();
    e = e.filter((d) => u.has(d.autoId) ? !1 : (u.add(d.autoId), !0));
  }
  const o = i.getStock;
  if (o.saw && !Oe(o.saw)) throw new Error("not real saw");
  const s = pe(this.shapeList, o);
  let r = qi(this.shapeList).filter((u) => u?.stock?.id === o.id);
  if (Y(i) && i.shapes?.length > 0) {
    for (const u of i.shapes)
      if (u.added && !r.some((d) => d.autoId === u.autoId))
        if (v(u) && u.type !== "position")
          for (const d of u.shapes || [])
            d.added && !d.group?.inGroup && !r.some((m) => m.autoId === d.autoId) && r.push(d);
        else (!v(u) || u.type === "position") && r.push(u);
  }
  if (ee(r)) {
    const u = /* @__PURE__ */ new Set();
    r = r.filter((d) => u.has(d.autoId) ? !1 : (u.add(d.autoId), !0));
  }
  const a = new Set(r.map((u) => u.autoId)), c = ei.call(
    this,
    null,
    r,
    i
  ), h = t ? {
    x: /* @__PURE__ */ new Map([[t.x, [t]]]),
    y: /* @__PURE__ */ new Map([[t.y, [t]]])
  } : {
    x: /* @__PURE__ */ new Map(),
    y: /* @__PURE__ */ new Map()
  };
  function f() {
    const u = Q(
      e,
      o,
      "filter"
    ), d = /* @__PURE__ */ new Set();
    for (const p of u)
      if (v(p) && !Z(p)) {
        const w = p;
        if (w.shapes?.length)
          for (const x of w.shapes)
            d.add(x.autoId);
      }
    const m = u.filter((p) => {
      if (Z(p)) return !1;
      if (qe(p) || ge(p)) {
        const w = p;
        return !(!w.shapes || w.shapes.length === 0);
      }
      if (F(p))
        return !(d.has(p.autoId) || p?.group?.inGroup);
    }), y = m.filter((p) => v(p) && !Z(p)), g = m.filter((p) => F(p)), S = [...y, ...g];
    return k("groups", `[getRelevantUnplacedShapes] ${S.length} unplaced (${y.length} groups, ${g.length} shapes)`), y.length > 0 && y.forEach((p) => {
      k("groups", `Group ${p.id}: ${p.shapes?.length || 0} child shapes, ${p.shapes.map((w) => w.id).join()}, added=${p.added}`);
    }), S;
  }
  for (let u = f(); u.length; ) {
    let d = function() {
      const x = u.filter((E) => typeof E?.bestScore?.total == "number");
      if (!x?.length) return !1;
      const T = to(x);
      if (!T) return null;
      const b = eo.call(this, i, o, h, T, r, a);
      return b.added && !a.has(b.autoId) && (v(b) && b.type !== "position" || r.push(b), a.add(b.autoId), Y(i) && (i.shapes = i.shapes.filter((L) => L.autoId !== b.autoId))), D([
        () => $(b.added).to.be.true,
        () => $(ee(r), "duplicates found in containerPlacedShapes").to.be.false,
        () => $(r.every((E) => E.added), "containerPlacedShapes contains unplaced shapes").to.be.true
      ]), Y(i), { bestShapeOrGroup: T, winningShapeOrGroup: b };
    }, m = null;
    this.uniqueShapes.length > 1 && i.cutType === "efficiency" && this.config.efficiency.rayCasting && !this.hasMinSpacing && (m = Us(
      i,
      r
    ));
    const y = u.length;
    let g = !1;
    for (let x = 0; x < y; x++) {
      let T = !1;
      if (g && u[x].isSameSize(u[x - 1]))
        continue;
      for (let L = 0; L < x; L++)
        if (u[L].isSameSize(u[x])) {
          T = !0;
          break;
        }
      if (T) {
        g = !0;
        continue;
      } else
        g = !1;
      const b = u[x];
      b.resetBestScore();
      const E = Ht.call(this, i, o, b);
      if (await fs.call(
        this,
        b,
        i,
        null,
        Jr,
        {
          shapeOrGroup: b,
          container: i,
          weighting: E,
          containerPlacedShapes: r,
          stockPlacedShapes: s,
          unplacedShapes: u,
          placementPositions: c,
          rayCastCoords: m,
          placedCoords: h
        }
      ), v(b) && !Z(b)) {
        const L = b;
        if (!L.bestScore || typeof L.bestScore.total != "number") {
          k("groups", `[placeShapes] Group ${L.id} has no valid placement. Releasing it and all clones.`);
          const B = L.autoId.replace(/\.\d+$/, ""), q = [];
          for (const C of e)
            if (v(C) && !Z(C)) {
              const P = C;
              P.autoId.replace(/\.\d+$/, "") === B && !P.added && q.push(P);
            }
          if (q.length > 0) {
            k("groups", `  Releasing ${q.length} groups (including clones)`);
            const C = [], P = /* @__PURE__ */ new Set();
            for (const O of q)
              if (O.shapes && O.shapes.length > 0)
                for (const W of O.shapes)
                  P.has(W.autoId) || (C.push(W), P.add(W.autoId));
            for (const O of q)
              k("groups", `    Destroying group ${O.id}`), O.destroy();
            C.length > 0 && (k("groups", `  Adding ${C.length} released shapes back to containerShapes`), e.push(...C));
          }
        }
      }
    }
    const S = d.call(this, e);
    if (S === !1 || S === null) return;
    const { bestShapeOrGroup: p, winningShapeOrGroup: w } = S;
    if (u = f(), u.length > 0) {
      const x = ei(
        w ? [w] : [],
        r,
        i
      );
      c.addPoints(x.toArray()), c.deletePoint(new yt(p.x, p.y));
    }
    this.resetShapes(u, {
      keepScores: !1,
      removeGroups: !1,
      keepGuillotineData: !0,
      keepFirstShapeSampleRotations: !1
    });
  }
  return !0;
}
function Zr(e, t) {
  if (this.config.evo.disable || e.stockID !== t.id) return !1;
  const i = Q(this.shapeList, t, "filter", null), n = Ie(i, null, !0);
  return n.length <= 1 || t?.saw?.stockType === "roll" || n.length > 100 || e?.algoTime > 2e3 || !this.enableEvo || e.cutType === "efficiency" && e?.score[this.successMetric] < 0.65 || t?.saw?.stockType === "roll" || !e?.score?.unplacedShapes || e?.score?.totalShapesPlaced <= 2 ? !1 : i.length <= this.config.evo.stockLimit;
}
function eo(e, t, i, n, o, s) {
  const r = v(n) ? n : n.bestScore?.group ?? null;
  if (r) {
    const a = r.shapes.filter((c) => c.added || c.group?.inGroup);
    if (a.length > 0)
      k("groups", `[placeBestShapeOrGroup] Group ${r.id} is invalid - ${a.length}/${r.shapes.length} shapes already placed. Placing individual shape instead.`), v(n) || (n.bestScore.group = null);
    else {
      k("groups", `[placeBestShapeOrGroup] Placing group ${r.id} with ${r.shapes.length} shapes (type=${r.type})`), r.placementOrder = this.counters.placement, this.counters.placement += r.shapes.length, r.setPositionToBestScore(), Ii(e, r), r.addToStock(t), Mt(i, r), r.placeMyShapes(t);
      for (const c of r.shapes)
        c.added && !c.group?.inGroup && !s.has(c.autoId) && (o.push(c), s.add(c.autoId));
      return r;
    }
  } else n && (n.placementOrder = this.counters.placement++, n.setPositionToBestScore(), Ii(e, n), n.addToStock(t), Mt(i, n));
  return r || n;
}
function to(e) {
  return e.reduce((i, n) => {
    if (n.bestScore.total > i.bestScore.total)
      return n;
    if (n.bestScore.total === i.bestScore.total) {
      if (v(n) && !v(i))
        return n;
      if (n.area > i.area) return n;
    }
    return i;
  });
}
let io = class {
  constructor(...t) {
  }
  plugin(...t) {
    return this;
  }
  pre(...t) {
    return this;
  }
  post(...t) {
    return this;
  }
  method(...t) {
    return this;
  }
  static(...t) {
    return this;
  }
  virtual(...t) {
    return {
      get: () => this,
      set: () => this
    };
  }
  index(...t) {
    return this;
  }
};
function so(...e) {
  return class {
  };
}
const rt = {
  Schema: io,
  model: so,
  connect: () => Promise.resolve(),
  connection: {}
}, no = rt.Schema, hs = new no({
  organisation: {
    type: String,
    required: !0
  },
  name: String,
  description: String,
  code: String,
  //internal material code
  type: {
    type: String,
    enum: ["sheet", "linear", "roll"],
    default: "sheet"
  },
  cost: Number,
  l: Number,
  //default l
  w: Number,
  // default w
  t: Array,
  //available thicknesses
  grain: {
    type: String,
    enum: ["l", "w", ""],
    default: ""
  },
  trim: Array,
  notes: Array,
  custom: {
    type: Map,
    of: String
  }
});
hs.plugin(Wi);
const ro = rt.model(
  "material",
  hs,
  "materials"
), oo = rt.Schema, Kt = new oo({
  organisation: {
    type: String,
    required: !0
  },
  material: {
    type: String,
    required: !0
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
  grain: {
    //may be different from the parent material
    type: String,
    enum: ["l", "w", "", null],
    default: ""
  },
  trim: Array,
  q: {
    type: Number,
    min: 0,
    required: !0
  },
  cost: Number,
  area: { type: Number }
});
function ao(e) {
  return e ? {
    l1: He({ v: e[2], dp: 4 }),
    l2: He({ v: e[3], dp: 4 }),
    w1: He({ v: e[1], dp: 4 }),
    w2: He({ v: e[2], dp: 4 })
  } : {
    l1: 0,
    l2: 0,
    w1: 0,
    w2: 0
  };
}
Kt.pre("save", function(e) {
  this.material = this.material?.toLowerCase(), this.area = (this.l - parseFloat(this?.trim?.[2]) - parseFloat(this?.trim?.[3])) * (this.w - parseFloat(this?.trim?.[0]) - parseFloat(this?.trim?.[1])), e();
});
Kt.plugin(Wi);
const lo = rt.model(
  "stock",
  Kt,
  "stock"
);
async function co(e = [], t, i = []) {
  t instanceof je || (t = new je(t));
  let n = [];
  const o = [];
  for (const s of e) {
    if (!he(s.material)) continue;
    const r = n.filter((l) => {
      if (te(s, l)) {
        let a = !1, c = !1, h = !0;
        if (l?.saw?.stockType === "linear" && (I.equalTo(s.w, l.w) || (h = !1)), (s.t === l.t || !he(l.t)) && (c = !0), s.material === l.material && (a = !0), l?.saw?.stockType === "linear") {
          if (a && c && h)
            return !0;
        } else if (a && c) return !0;
      }
      return !1;
    });
    if (r.length) {
      s.stockLock = r.map((l) => l.parentId);
      continue;
    }
    try {
      const l = {
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
              $nin: i.map((h) => h?.id?.toLowerCase())
            }
          }
        ]
      }, [a, c] = await Promise.all([
        ro.findById(s?.material?.toLowerCase())?.lean(),
        //TODO make sorting order and limit configurable based on org
        lo.find(l).sort({ area: 1 }).limit(3).lean()
      ]);
      a && c.length ? c.forEach((h) => {
        const f = ao(h.trim), u = {
          l: h.l - (f.l1 ?? 0) - (f.l2 ?? 0),
          w: h.w - (f.w1 ?? 0) - (f.w1 ?? 0)
        };
        if (!(I.lessThanOrEqualTo(
          s.l,
          u.l
        ) && I.lessThanOrEqualTo(
          s.w,
          u.w
        ) || I.lessThanOrEqualTo(
          s.w,
          u.l
        ) && I.lessThanOrEqualTo(
          s.l,
          u.w
        )))
          return;
        const d = Xs.parse({
          // Base dimensions from stockItem
          l: h.l,
          w: h.w,
          t: h.t,
          q: h.q,
          cost: h.cost,
          grain: h.grain || "",
          material: h.material,
          // Generated IDs
          id: (i.length + n.length + 1).toFixed(1),
          parentId: (i.length + n.length + 1).toString(),
          // Additional required fields
          name: a.name,
          autoAdd: !1,
          //material based calculations do not allow autoAdd
          trim: f,
          stockType: t.stockType,
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
        n.push(new bt(d)), Array.isArray(s.stockLock) ? s.stockLock.push(d.parentId) : s.stockLock = [d.parentId];
      }) : o.push({
        material: a.name,
        t: s.t,
        shape: s.parentId
      });
    } catch (l) {
      throw console.error("error finding stock", l.message), new Error(l);
    }
  }
  if (n.length)
    n = $t(n);
  else if (!i?.length)
    throw new Error("No relevant stock found - check material, thickness, dimensions & stock quantity");
  return {
    stockList: n,
    unavailableStock: o
  };
}
function uo(e, t, i = !1) {
  t.forEach((s) => {
    s.identicalTo = [];
  });
  const n = [];
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    if (n.some((c) => c.some((h) => h.id === r.id))) continue;
    const a = [r];
    for (let c = s + 1; c < e.length; c++) {
      const h = e[c];
      r.isIdentical(h, i) && a.push(h);
    }
    a.length > 1 && n.push(a);
  }
  const o = /* @__PURE__ */ new Map();
  t.forEach((s) => {
    o.has(s.parentId) || o.set(s.parentId, []), o.get(s.parentId).push(s);
  }), n.forEach((s) => {
    const r = s.map((l) => l.parentId);
    r.forEach((l) => {
      (o.get(l) || []).forEach((c) => {
        r.forEach((h) => {
          h !== c.parentId && !c.identicalTo.includes(h) && c.identicalTo.push(h);
        });
      });
    });
  }), t.forEach((s) => {
    (o.get(s.parentId) || []).length > 1 && !s.identicalTo.includes(s.parentId) && s.identicalTo.push(s.parentId);
  });
}
function fo(e, t) {
  for (const i of e) {
    i.fitsStock = {};
    for (const n of t) {
      const o = st(i, n);
      i.fitsStock[n.parentId] = {
        any: te(i, n, null),
        0: o.includes(0),
        1: o.includes(1)
      };
    }
  }
}
function ho(e, t, i, n) {
  const o = n?.similarityThreshold ?? 0.1, s = n?.selectionStrategy, r = n?.minPerShape ?? 0, l = n?.minTotal ?? 0;
  if (e.length <= 1)
    return t;
  const { filtered: a, excludedGroups: c } = go(
    e,
    i,
    { similarityThreshold: o, selectionStrategy: s }
  );
  let h = [...a], f = [...c];
  if (r > 0) {
    const m = /* @__PURE__ */ new Map();
    for (const g of t) {
      const S = m.get(g.parentId) || 0;
      m.set(g.parentId, S + 1);
    }
    const y = h.filter((g) => (m.get(g.parentId) || 0) < r);
    if (y.length > 0) {
      for (const g of y) {
        const S = g.parentId;
        for (const p of f) {
          const w = p.filter((x) => (m.get(x.original.parentId) || 0) >= r);
          if (w.length > 0) {
            const x = w.sort((b, E) => (m.get(E.original.parentId) || 0) - (m.get(b.original.parentId) || 0))[0], T = h.findIndex((b) => b.parentId === S);
            if (T !== -1) {
              h[T] = x.original;
              const b = p.findIndex((E) => E === x);
              b !== -1 && p.splice(b, 1);
              break;
            }
          }
        }
      }
      f = f.filter((g) => g.length > 0);
    }
  }
  if (l > 0) {
    const m = new Set(h.map((g) => g.parentId)), y = t.filter((g) => m.has(g.parentId)).length;
    if (y < l && f.length > 0) {
      const g = [];
      let S = y;
      for (; S < l && f.some((p) => p.length > 0); ) {
        for (let p = 0; p < f.length && S < l; p++) {
          const w = f[p];
          if (w.length > 0) {
            const T = po([...w], s)[0], b = T.original.parentId, E = t.filter((B) => B.parentId === b).length;
            g.push(T.original), S += E;
            const L = w.findIndex((B) => B === T);
            L !== -1 && w.splice(L, 1);
          }
        }
        if (f = f.filter((p) => p.length > 0), f.length === 0 || f.every((p) => p.length === 0))
          break;
      }
      h = [...h, ...g];
    }
  }
  const u = new Set(h.map((m) => m.parentId));
  return t.filter((m) => u.has(m.parentId));
}
function po(e, t) {
  switch (t) {
    case "largest":
      return e.sort((i, n) => n.area - i.area);
    case "smallest":
      return e.sort((i, n) => i.area - n.area);
    case "first":
    default:
      return e;
  }
}
function go(e, t, i) {
  const n = i.similarityThreshold, o = i.selectionStrategy;
  if (e.length <= 1) return { filtered: e, excludedGroups: [] };
  const s = e.map((c) => {
    const h = {
      l: c.longSide,
      w: c.shortSide
    };
    return {
      original: c,
      // Keep reference to the original shape object
      rotated: h,
      // Normalized dimensions for comparison (keeping 'rotated' name for compatibility)
      area: c.area
      // Area for 'largest'/'smallest' selection
    };
  }), r = [];
  for (const c of s) {
    let h = !1;
    for (const f of r)
      if (f.some((u) => mo(c.rotated, u.rotated, n))) {
        f.push(c), h = !0;
        break;
      }
    h || r.push([c]);
  }
  const l = [], a = [];
  return r.forEach((c) => {
    if (c.length === 1) {
      l.push(c[0]);
      return;
    }
    let h;
    switch (o) {
      case "largest":
        h = c.reduce((u, d) => d.area > u.area ? d : u, c[0]);
        break;
      case "smallest":
        h = c.reduce((u, d) => d.area < u.area ? d : u, c[0]);
        break;
      case "first":
      default:
        h = c[0];
    }
    l.push(h);
    const f = c.filter((u) => u !== h);
    f.length > 0 && a.push(f);
  }), {
    filtered: l.map((c) => c.original),
    excludedGroups: a
  };
}
function mo(e, t, i) {
  const n = Math.abs(e.l - t.l) / Math.max(e.l, t.l, 1), o = Math.abs(e.w - t.w) / Math.max(e.w, t.w, 1);
  return n <= i && o <= i;
}
function So(e, t, i) {
  if (k("stack", `previous stock ${t.id}`), ["l", "w", "material", "t"].some((s) => e[s] !== t[s])) return !1;
  const n = e.cutType === "guillotine" || e.cutType === "beam", o = e.saw.guillotineOptions?.strategy !== "time";
  if (!n || n && o) {
    const s = ds.call(
      this,
      e,
      t,
      i,
      this.shapeList
    );
    if (s)
      return k("stack", `stack found: ${e.id} === ${t.id}`), this.recordStackToBestResult(e, i), e.used = !0, e.score = t.score, s;
  }
  return !1;
}
function ds(e, t, i, n) {
  if (!this.config.stack || !i.length) return !1;
  const o = e.saw;
  if (o.stackingMode === "none") return !1;
  if (k("stack", `looking for stack for ${e.id}, comparing to ${t.id}`), o.cutType === "beam" && t.stack) {
    let s = t, r = 1;
    if (t.stack.stock ? (s = t.stack.stock, r = s.stack?.number || 1) : t.stack.number && (r = t.stack.number), s.t * r + e.t > o.stackHeight)
      return !1;
  }
  if (e.parentId === t.parentId) {
    if (o.cutType === "beam" && o.stackHeight > 0 && e.t * 2 > o.stackHeight)
      return !1;
    const s = Bi(n, t);
    if (!s.length) return !1;
    const r = ps.call(this, [t], s, e, i, !0, !0, o.stackingMode === "identical");
    if (r)
      return e.stack = { stock: r }, r.stack.number === 1 ? r.stack.number = 2 : r.incrementStack(), r;
  }
  return !1;
}
function yo(e, t) {
  if (!this.config.findDuplicatePatterns) return !1;
  k("stack", `🔎 checkForDuplicates called for ${e.id}`);
  const i = this.shapeList.filter((s) => s.added);
  k("stack", `   Total shapes added across all stock: ${i.length}`);
  const n = this.stockList.filter((s) => s.used && s.id !== e.id && s.l === e.l && s.w === e.w);
  if (k("stack", `   Relevant used stock with matching dimensions: ${n.map((s) => s.id).join(", ")}`), !n.length)
    return k("stack", `   No relevant stock found for ${e.id}`), !1;
  const o = ps.call(this, n, i, e, t, !0, !1);
  return o ? (console.log(`✅ Duplicate pattern: ${e.id} matches ${o.id}`), k("stack", `   ✅ Duplicate found: ${e.id} matches ${o.id}`), Vs(o, e), e.used = !0, o) : (k("stack", `   No duplicate pattern found for ${e.id}`), !1);
}
function ps(e, t, i, n, o = !0, s = !0) {
  if (!e.length || !n.length) return null;
  k("stack", `🔍 Checking for duplicate patterns for ${i.id}`), k("stack", `   Current shapes count: ${n.length}`), k("stack", `   Used stock to check: ${e.map((l) => l.id).join(", ")}`);
  const r = /* @__PURE__ */ new Map();
  for (const l of e) {
    k("stack", `   📋 Checking against stock ${l.id}`);
    const a = Bi(t, l);
    if (!a.length) {
      k("stack", `      ❌ No shapes on ${l.id}, skipping`);
      continue;
    }
    k("stack", `      Stock ${l.id} has ${a.length} shapes`);
    const c = a.length, h = [];
    r.clear();
    let f = !0;
    for (const u of a) {
      let d = null;
      if (s) {
        const m = n.filter((g) => !r.has(g)), y = m.filter((g) => g.isIdentical(u, !1));
        y.length === 1 ? (d = y[0], k("stack", `      ✓ Shape ${u.id} matched to ${d.id}`)) : y.length > 1 ? (d = y.find((g) => g.parentId === u.parentId) || y[0], k("stack", `      ✓ Shape ${u.id} matched to ${d.id} (${y.length} candidates, preferred by parentId: ${d.parentId === u.parentId})`)) : (k("stack", `      ✗ Shape ${u.id} has no identical match`), k("stack", `         Available shapes: ${m.map((g) => g.id).join(", ")}`));
      } else {
        const y = n.filter((g) => !r.has(g)).filter((g) => g.longSide === u.longSide && g.shortSide === u.shortSide && Ee(g, u.rot, l));
        y.length === 1 ? d = y[0] : y.length > 1 && (d = y.find((g) => g.parentId === u.parentId) || y[0]);
      }
      if (d)
        r.set(d, !0), h.push({
          current: d,
          match: u
        });
      else {
        k("stack", `      ❌ Failed to match all shapes for ${l.id}`), f = !1;
        break;
      }
    }
    if (f && h.length === c) {
      if (k("stack", `      ✅ Perfect match found: ${i.id} matches ${l.id}`), o) {
        i.shapes = [];
        for (const { current: u, match: d } of h)
          u.update({
            x: d.x,
            y: d.y,
            w: d.w,
            l: d.l,
            guillotineData: d.guillotineData,
            placementOrder: d.placementOrder,
            added: !0,
            stock: i
          }), i.shapes.push(u);
      }
      return l;
    } else
      k("stack", `      ⚠️ Stock ${l.id}: allMatched=${f}, matches=${h.length}, target=${c}`);
  }
  return k("stack", `   ❌ No duplicate pattern found for ${i.id}`), null;
}
class Di extends Ks {
  // Zod schema for validation and serialization
  static schema = Sn;
  static computedProperties = yn;
  /**
   * Get entity type
   */
  getType() {
    return z.Optimiser;
  }
  constructor(t) {
    const i = gn(t.user, t), n = {
      // Pass through most properties directly
      ...t,
      // Apply defaults for arrays
      stockList: t.stockList || [],
      shapeList: t.shapeList || [],
      userGroups: t.userGroups || [],
      // Config overrides
      config: i,
      successMetric: mi(i, "successMetric", t.successMetric || oe.successMetric),
      enableEvo: mi(i, "evo.disable", !1) ? !1 : t.enableEvo ?? !0,
      weighting: t.weighting || {
        efficiency: re.efficiency,
        guillotine: re.guillotine,
        roll: re.roll
      },
      stockType: t.saw?.stockType || null,
      // Don't skip validation so defaults are applied
      skipSchemaValidation: !1
    };
    super(n), !this.useInventory && this.stockList?.length && this.stockList.forEach((o) => {
      o?.saw?.stockType || (o.saw.stockType = this.saw.stockType);
    }), Mi({
      stocks: this.stockList,
      shapes: this.shapeList
    }, "Optimiser constructor"), this.uniqueStock = Le(this.stockList), this.groupList = [], this.init();
  }
  init() {
    const t = [];
    if (!this.shapeList.length) throw new Error("No parts to process");
    this.shapeList.some((o) => o.duplicate) || ([...this.shapeList].forEach((s) => {
      s.applyTrim();
      for (let r = s.q; r--; )
        r != 0 && this.shapeList.push(s.clone(r.toString()));
    }), this.shapeList.push(...t), this.shapeList.sort(be.ID));
    const i = this.shapeList.filter((o) => !v(o));
    this.shapeAnalysis(i, this.stockList);
    const n = [];
    if (this.userGroups.forEach((o, s) => {
      for (let r = 0; r < o.q; r++) {
        const l = o.toGroup(s, r, this.shapeList);
        l && n.push(l);
      }
    }), Js(n, this.stockList, this.saw), this.shapeList.push(...n), this.uniqueShapes = this.shapeList.filter((o) => !o?.duplicate), typeof this?.saw?.options?.minSpacing == "number")
      this.hasMinSpacing = !0;
    else {
      const o = this.shapeList.some((s) => s.minSpacing > 0);
      this.hasMinSpacing = o, this.hasShapeLevelMinSpacing = !0;
    }
  }
  shapeAnalysis(t, i) {
    uo.call(this, t, this.shapeList), cr.call(this, t, i), fo.call(this, t, i);
  }
  recordStackToBestResult(t, i = []) {
    if (this.bestResult) {
      const n = {
        ...this.bestResult,
        stock: t,
        shapes: i.filter((o) => o.added && o.stock.id === t.id).map((o) => o.compress())
      };
      this.bestResult = as(n);
    }
  }
  resetClonedShapes(t) {
    t.forEach((i) => {
      const n = this.shapeList.find((o) => o.id === i.id);
      n && n.reset(!1);
    });
  }
  //various methods of choosing a selection of stock for the calculation
  stockRefinement(t, i, n) {
    if (!t.length) return [];
    const o = /* @__PURE__ */ new Set();
    i.forEach((l) => l.stockLock.forEach((a) => o.add(a)));
    const s = t.filter((l) => o.has(l.parentId));
    let r = Qs(s);
    if (n && n?.options?.stockSelection === "smallest")
      return r.sort(be.AA), [r[0]];
    if (r.some((l) => l.material)) {
      const l = r[0].material;
      r = r.filter((a) => a.material === l);
    }
    if (r.some((l) => l.t)) {
      const l = Math.min(...r.map((a) => a.t));
      r = r.filter((a) => a.t === l);
    }
    switch (n.stockType) {
      case "linear":
        return r.slice(0, 10);
      case "roll":
        return r.slice(0, 10);
      default:
        return i.length < 100 ? r.slice(0, 5) : r.slice(0, 3);
    }
  }
  /**
   * examines all strategies for each stock and returns an array of best results
   * @returns {Array} best results
   */
  async run() {
    let t = "";
    this.config.captureProfile && (t = `profile-${Date.now()}`, "profile" in console && typeof console.profile == "function" && console.profile(t));
    async function i(s, r) {
      const l = Ce.getCalculationType(s);
      if (!l) throw new Error(`calculation type not found for stock ${s.id}`);
      if (k("allStock", `calculating stock ${s.id} with ${l} calculation`), !Ce.types.includes(l))
        throw new Error(`invalid calculation type: ${l} for stock ${s.id}`);
      return r = r.filter((a) => !a.added && a.stockLock.includes(s.parentId)), await Ce[l].call(
        this,
        {},
        s,
        r
      );
    }
    function n(s, r) {
      const l = s.filter((c) => !c.unusable), a = this.stockRefinement(
        l,
        r,
        this.saw
      );
      return a.sort(be.ID), k("allStock", `refined stock ${a.map((c) => c.id).join()}`), a;
    }
    await this.allStock(i, n), this.config.secondRun.enabled && await this.secondRun(), this.config.captureProfile && "profileEnd" in console && typeof console.profileEnd == "function" && console.profileEnd(t);
    const o = [];
    for (const s of this.stockList)
      if (s.segments)
        for (const r of s.segments) {
          const l = r.shapes?.filter((a) => Z(a) && a.added) || [];
          o.push(...l);
        }
    for (const s of this.shapeList)
      if (!(!F(s) || !s.added)) {
        for (const r of o)
          if (r.shapes.some((l) => l.autoId === s.autoId)) {
            s.group.addedAsGroup = r.autoId;
            break;
          }
      }
    for (let s = this.shapeList.length; s--; ) {
      const r = this.shapeList[s];
      ge(r) && (r.added && r.stock && r.placeMyShapes(r.stock), this.shapeList.splice(s, 1), this.shapeList.push(...r.shapes));
    }
    this.groupList = [];
  }
  /* calculate all unique stock with the supplied calculation and choose a winner if multiple results returned
     DO NOT pass arrow functions as arguments */
  async allStock(t, i) {
    this.resetShapes(this.shapeList, {
      keepScores: !1,
      removeGroups: !0,
      keepGuillotineData: !1
    });
    let n, o = null, s = null, r, l, a, c;
    for (let h = Le(this.stockList, !1); h.length > 0; h = Le(this.stockList, !1)) {
      let f = Q(this.shapeList);
      if (!f?.length) break;
      for (const g of h)
        if (!Q(f, g, "some")) {
          k("allStock", `stock ${g.id} is unusable`), g.unusable = !0;
          break;
        }
      const u = i.call(
        this,
        h,
        f
      );
      if (D([() => $(u.every((g) => Oe(g.saw))).to.be.true]), !u.length) break;
      if (c) {
        const g = u.findIndex((S) => S?.parentId === c);
        g > -1 && u.unshift(u.splice(g, 1)[0]);
      }
      if (o = null, s = null, this.stockList.some((g) => g.used)) {
        k("stack", `🔄 Checking refined stock for stacks/duplicates: ${u.map((g) => g.id).join(", ")}`);
        for (const g of u) {
          k("stack", `current stock: ${g.id}`);
          const S = Q(
            f,
            g
          );
          if (S?.length) {
            if (n && (o = So.call(this, g, n, S), o)) {
              n = o, r = g;
              break;
            }
            if (this.config.findDuplicatePatterns && (s = yo.call(this, g, S), s)) {
              n = g;
              break;
            }
          }
        }
      }
      if (!o && !s) {
        for (const p of u) {
          l = null;
          try {
            p.applyTrim();
          } catch (x) {
            k("info", `stock.applyTrim error ${x.message}`);
            continue;
          }
          const w = Q(this.shapeList);
          if (!w?.length) return;
          if (l = Q(w, p), !l?.length)
            if (p.allowExactFitShapes && (l = w.filter((x) => I.equalTo(
              x.l,
              p.l + p.trim.l1 + p.trim.l2
            ) && I.equalTo(
              x.w,
              p.w + p.trim.w1 + p.trim.w2
            ) || I.equalTo(
              x.w,
              p.w + p.trim.w1 + p.trim.w2
            ) && I.equalTo(
              x.l,
              p.l + p.trim.l1 + p.trim.l2
            ))), l?.length) p.removeTrim();
            else continue;
          if (!l?.length) {
            p.used = !1;
            continue;
          }
          if (this.config.filtering.enable && l.length > this.config.filtering.minTotal) {
            const x = l.length;
            l = ho(this.uniqueShapes, w, p, {
              similarityThreshold: this.config.filtering.similarityThreshold,
              selectionStrategy: "smallest",
              minTotal: this.config.filtering.minTotal
            });
            const T = l.length;
            k("allStock", `filtering reduced shapes by ${x - T}, orginal: ${x}, filtered: ${T}`);
          }
          await t.call(this, p, l), this.resetShapes(l, {
            keepScores: !1,
            removeGroups: !1,
            keepGuillotineData: !1
          }), h.length > 1 && l.filter((T) => v(T)).forEach((T) => T.destroy());
        }
        if (u.forEach((p) => p.used = !1), !this.bestResult || !this.bestResult?.stock)
          break;
        a = Xt(this.bestResult, this.stockList), a.score = this.bestResult.score, a.used = !0, n = a;
        const { updatedShapes: g, groups: S } = Be({
          bestResult: this.bestResult,
          shapeList: this.shapeList,
          relevantStock: u,
          stockList: this.stockList,
          resetShapes: this.resetShapes.bind(this)
        });
        if (S.length > 0 && this.groupList && S.forEach((p) => {
          this.groupList.find((x) => x.autoId === p.autoId) || this.groupList.push(p);
        }), ct(g), this.bestResult?.offcut) {
          const p = {
            x: this.bestResult.totalLength,
            l: this.bestResult.offcut,
            stock: a
          };
          this.offcuts.push(p);
        }
        a?.saw?.stockType !== "roll" && this.summariseResults([this.bestResult], a);
      }
      f = Q(this.shapeList);
      let d = [], m = [], y = 0;
      if (this.bestResult = null, this.bestPartialResult = null, o && (r?.autoAdd || ut(this.stockList, r)))
        d.push(r);
      else {
        m = Ie(f, !1);
        const g = m.filter((w) => he(w.stockLock)), S = new Set(g.flatMap((w) => Array.isArray(w.stockLock) ? w.stockLock : [w.stockLock]));
        S.size || k("allStock", "no new stock requirements found");
        for (const w of S) {
          const x = this.stockList.filter((T) => {
            if (w === T.parentId) {
              if (T.autoAdd)
                return !0;
              if (ut(this.stockList, T))
                return !0;
            }
            return !1;
          });
          if (x.length && !x.find((T) => !T.used)) {
            const T = x[0].clone(x.length.toString());
            this.stockList.push(T), y++;
          }
        }
        m.filter((w) => !he(w.stockLock) || !w.stockLock.length).length && !d.length && (d = Le(this.stockList).filter((w) => w.autoAdd || ut(this.stockList, w)));
      }
      if (d.length && d.forEach((g) => {
        const S = g.clone(Zs(this.stockList, g));
        this.stockList.push(S), o ? c = S.parentId : c = !1, y++;
      }), y ? (this.stockList.sort(be.AA), this?.job && this.job.updateProgress({
        socketId: this.socketId,
        type: "addStock",
        message: `added ${y} additional stock`,
        stockCount: this.stockList.reduce(
          (g, S) => S.used ? ++g : g,
          0
        ),
        shapeCount: this.shapeList.reduce(
          (g, S) => S.added ? ++g : g,
          0
        )
      })) : this?.job && this.job.updateProgress({
        socketId: this.socketId,
        type: "stockComplete",
        message: `completed stock ${a.parentId}`,
        stockCount: this.stockList.reduce((g, S) => S.used ? ++g : g, 0),
        shapeCount: this.shapeList.reduce((g, S) => S.added ? ++g : g, 0)
      }), this.useInventory && m.length && Le(this.stockList, !1).length === 0) {
        const g = await co(
          m,
          this.saw,
          this.stockList
        );
        if (g.stockList.length) {
          const S = $t(g.stockList);
          S.length && this.stockList.push(...S);
        }
      }
    }
    this.stockList = this.stockList.filter((h) => h.used);
  }
  /**
   * this idea with secondRun is to redistribute smaller parts to the least efficient stock - ideally reducing the number of stock needed
   * [] only look at stock with a single shape?
   */
  async secondRun() {
    k("secondRun", "starting second run...");
    const t = this.stockList.filter((s) => s.used);
    if (t.filter((s) => s.stack?.number && !s.stack?.stock).forEach((s) => {
      t.filter((r) => r.stack?.stock && V(r.stack.stock) && r.stack.stock.id === s.id).forEach((r) => {
        r.stack = null, r.rootSegment = s.rootSegment;
      }), s.stack = null;
    }), t[0].cutType !== "guillotine") return;
    D([
      () => $(t.length).equal(this.stockList.length),
      () => $(t.every((s) => s.score)).to.be.true,
      () => $(t.every((s) => s.shapes?.length)).to.be.true
    ]), t.sort((s, r) => s.score.efficiency - r.score.efficiency), k("secondRun", `sorted stock, ${t.map((s) => s.id)}`);
    const n = [], o = [];
    for (const s of t)
      s.score.efficiency >= this.config.secondRun.efficiencyCutoff && s.score.totalShapesPlaced > 1 ? n.push(s) : o.push(s);
    if (!(!n.length || !o.length)) {
      n.sort((s, r) => r.score.efficiency - s.score.efficiency), o.sort((s, r) => r.score.efficiency - s.score.efficiency), k("secondRun", `sorted efficient stock, ${n.map((s) => s.id)}`), k("secondRun", `sorted inefficient stock, ${o.map((s) => s.id)}`);
      for (const s of n) {
        if (!o.length) break;
        const r = [];
        for (let f = 0; f < s.shapes.length; f++) {
          const u = s.shapes[f];
          if (!u) throw new Error("shape not found in donorStock.shapes");
          if (v(u)) {
            u.placeMyShapes(s), u.shapes = u.shapes.map((d) => Object.assign({}, d)), s.shapes.splice(f, 1, ...u.shapes), f--;
            continue;
          }
          if (F(u))
            u.reset(), r.push(u);
          else {
            const d = this.shapeList.find((m) => m.id === u.id);
            if (!d) throw new Error(`shape ${u.id} not found in shapeList`);
            d.reset(), r.push(d), s.shapes[f] = d;
          }
        }
        const l = /* @__PURE__ */ new Set();
        let a, c, h = null;
        for (; r.length > 0 && (a = o.find((p) => p ? !l.has(p?.id) && s.shapes[0].stockLock.includes(p.parentId) : !1), !!a); ) {
          k("secondRun", `recipientStock - ${a.id}`), l.add(a.id);
          const f = Ce.getCalculationType(s);
          if (!f) throw new Error(`calculation type not found for stock ${s.id}`);
          const u = a.cutPreference === "l" ? "x" : "y";
          let d = [];
          if (c = a.rootSegment, k("secondRun", `second run, donor stock ${s.id}, recipient stock ${a.id}`), h) {
            h.shapes.forEach((w, x) => {
              if (!F(w)) {
                const T = this.shapeList.find((b) => b.id === w.id);
                h.shapes[x] = T;
              }
            }), a.shapes.forEach((w, x) => {
              if (!F(w)) {
                const T = this.shapeList.find((b) => b.id === w.id);
                a.shapes[x] = T;
              }
            });
            let p = !1;
            if (this.config.secondRun.stack && (p = ds(a, h, [...r, ...a.shapes], this.shapeList)), p) {
              a.stack = { stock: h }, h.stack ? h.stack?.number && h.incrementStack() : h.stack = { number: 2 }, a.shapes.forEach((x) => {
                const T = r.findIndex((b) => b.id === x.id);
                T > -1 && (r.splice(T, 1), s.shapes.splice(s.shapes.findIndex((b) => b.id === x.id), 1));
              });
              const w = o.findIndex((x) => x.id === a.id);
              w > -1 && o.splice(w, 1), k("secondRun", `stack found for ${a.id} in second run`), ct(a.shapes);
              continue;
            }
          }
          if (!c) throw new Error("no root segment found in second run");
          if (ts(c, (p) => {
            if (p.offcut)
              return p[u] === 0 && (p.cutDirection = a.cutPreference, p.phase = 1), p.addToStock(a), d.push(p), !1;
          }), !d.length || (d = $t(d), !d.length)) continue;
          await Ce[f].call(
            this,
            { secondRun: !0 },
            a,
            r,
            d
          );
          const m = r.length;
          for (let p = r.length; p--; )
            r[p].added && r.splice(p, 1);
          const y = r.length, g = m - y;
          if (k("info", `second run, added ${g}`), h = a, m - y === 0) continue;
          const S = o.findIndex((p) => p.id === a.id);
          S > -1 && o.splice(S, 1), ct(a.shapes);
        }
        if (!r.length || r.every((f) => f.added))
          s.used = !1, s.shapes = [], a.shapes.push(...s.shapes);
        else {
          k("info", `second run, not all shapes moved, reverting ${s.shapes.length} shapes`);
          for (const f of s.shapes) {
            const u = this.shapeList.find((d) => d.id === f.id);
            if (!u) throw new Error("original shape not found in second run");
            u.update(f), u.addToStock(s), D([
              () => $(u.added).to.be.true,
              () => $(u.stock?.id).to.equal(s.id),
              () => $(u.x).to.equal(f.x),
              () => $(u.y).to.equal(f.y)
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
  resetShapes(t, {
    keepScores: i = !1,
    removeGroups: n = !0,
    removeUnplacedGroups: o = !1,
    keepGuillotineData: s = !0,
    keepFirstShapeSampleRotations: r = !1
  } = {}) {
    if (t?.length)
      if (o) {
        const l = /* @__PURE__ */ new Set();
        for (const c of t)
          if (v(c) && c.added && c.shapes?.length)
            for (const h of c.shapes)
              l.add(h.autoId);
        const a = t.length;
        for (let c = a; c--; ) {
          const h = t[c];
          if (v(h)) {
            if (h.shapes?.length)
              for (const f of h.shapes)
                f.reset({
                  keepScores: i,
                  keepGuillotineBatchData: s,
                  keepGroupData: !1,
                  keepFirstShapeSampleRotations: r
                });
            h.added || t.splice(c, 1);
          } else
            l.has(h.autoId) ? t.splice(c, 1) : h.reset({
              keepScores: i,
              keepGuillotineBatchData: s,
              keepGroupData: !1,
              keepFirstShapeSampleRotations: r
            });
        }
      } else {
        const l = t.length;
        for (let a = l; a--; ) {
          const c = t[a];
          if (v(c)) {
            if (c.shapes?.length)
              for (const h of c.shapes)
                h.reset({
                  keepScores: i,
                  keepGuillotineBatchData: s,
                  keepGroupData: !1,
                  keepFirstShapeSampleRotations: r
                });
            n ? t.splice(a, 1) : c.added = !1;
          } else
            c.reset({
              keepScores: i,
              keepGuillotineBatchData: s,
              keepGroupData: !1,
              keepFirstShapeSampleRotations: r
            });
        }
      }
  }
  /**
   * summarise the results for the console
   */
  summariseResults(t, i) {
  }
}
function Co() {
  R("Issue", Me), R("Line", Fe), R(z.Line, Fe), R("Point", yt), R(z.Point, yt), R("Rectangle", ti), R(z.Rectangle, ti), R("Container", Re), R(z.Container, Re), R("GuillotineState", Ue), R(z.GuillotineState, Ue), R("Placeable", dt), R(z.Placeable, dt), R("Group", St), R(z.Group, St), R("Offcut", _e), R(z.Offcut, _e), R("Segment", de), R(z.Segment, de), R("Shape", ii), R(z.Shape, ii), R("Stock", bt), R(z.Stock, bt), R("Banding", si), R("banding", si), R("Corner", ni), R("corner", ni), R("Cut", pt), R(z.Cut, pt), R("Extras", ri), R(z.Extras, ri), R("Finish", oi), R("finish", oi), R("HingeHole", ai), R("hingeHole", ai), R("Hole", li), R("hole", li), R("ImageUpload", Si), R("imageUpload", Si), R("InputSaw", ci), R(z.InputSaw, ci), R("InputShape", ui), R(z.InputShape, ui), R("InputStock", fi), R(z.InputStock, fi), R("InputUserGroup", hi), R(z.Group, hi), R("Machining", di), R(z.Machining, di), R("Optimiser", Di), R(z.Optimiser, Di), R("Planing", pi), R("planing", pi), R("PointCollection", wt), R(z.PointCollection, wt), R("Saw", je), R(z.Saw, je);
}
export {
  Co as initializeStaticRegistry
};

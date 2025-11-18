import { D as Ss, E as ys, F as ws, G as We, H as ce, J as Ri, K as bs, L as $s, M as xs, N as Is, O as ot, P as ks, Q as Ts, R as Cs, T as Ps, U as vs, V as pt, W, X as Re, Y as we, _ as Es, $ as Me, a0 as Ds, a1 as D, a2 as V, a3 as Ie, a4 as at, a5 as k, a6 as me, a7 as B, a8 as Y, a9 as A, aa as ge, ab as F, ac as E, ad as $, ae as Rs, af as dt, ag as Nt, ah as Ai, ai as Z, aj as Li, ak as se, al as ze, am as gt, x as be, an as ee, ao as Se, ap as lt, aq as mt, ar as Q, as as Ae, at as Oe, au as Jt, av as As, aw as Mi, ax as Ls, ay as Ms, az as de, aA as Ue, aB as ke, aC as ve, aD as Os, aE as Oi, aF as qi, aG as Fi, aH as qe, aI as qs, aJ as Gi, aK as Fs, aL as Bi, aM as Gs, aN as St, aO as Bs, aP as he, aQ as st, aR as Ni, aS as Ns, aT as Qt, aU as Hs, aV as Ws, aW as zs, aX as Zt, aY as Us, aZ as yt, a_ as wt, a$ as js, b0 as Ys, b1 as Xs, C as Ne, S as je, b2 as _s, b3 as bt, b4 as $t, b5 as Vs, b6 as Hi, b7 as Ks, b8 as Le, b9 as Js, ba as Qs, bb as ct, bc as ut, bd as Zs, be as R, bf as ei, bg as ti, bh as ii, bi as si, bj as ni, bk as ri, bl as oi, bm as ai, bn as li, bo as ci, I as ui, bp as fi, bq as hi, br as pi } from "./components-PAE6FBP6.js";
import { n as te, _ as Fe, b as ue, s as $e, o as Wi, c as di, a as ft, G as ne, H as j, I as re, J as Ee, K as en, L as z, M as Ye, N as _, O as tn } from "./vendor-zod-DtqKDYvi.js";
import { m as zi, a as sn } from "./vendor-lodash-CYGhmG8H.js";
import { k as J } from "./vendor-tCV_BFOF.js";
import { m as Ui } from "./vendor-mongoose-C3uS1h_U.js";
import "./vendor-i18next-CacwiV0i.js";
const nn = ["l", "w"], rn = Ss.extend({
  // Identity - offcuts need IDs for tracking and export
  id: $e().default(""),
  // Note: offcut property is inherited from Rectangle schema (boolean default false)
  // The Offcut constructor ensures it's always true
  // Offcut-specific fields
  addToInventory: ue().default(!1),
  flex: Fe(nn).optional(),
  // Cost is calculated, not set
  cost: te().min(0).nullable().default(0)
}), on = {
  ...ys,
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
}, ji = ["root", "firstShape", "near", "far", ""], an = ws.extend({
  // Cutting information
  cuts: ce("Cut").default([]).behavior({ compress: "exclude" }),
  // Stock reference - serialize as reference only (default zRef behavior)
  stock: We("Stock", { nullable: !0, description: "Stock reference for this segment" }),
  phase: te().int().min(0).nullable().default(null),
  cutDirection: Fe(Ri).nullable().default(null).describe("The primary cut direction for this segment"),
  // Segment properties
  merged: ue().default(!1),
  firstShape: We("Shape"),
  children: ce("Segment", {
    description: "Child segments"
  }).behavior({
    serialize: "full",
    // Serialize the full segment objects
    compress: "full",
    // Even in compressed mode, keep full objects
    clone: "copy"
  }),
  parent: We("Segment", { nullable: !0 }).behavior({
    serialize: "reference",
    // Parent can stay as reference
    compress: "exclude"
    // Exclude parent in compressed mode to avoid circular refs
  }),
  type: Fe(ji).nullable().default(null),
  placementOrder: te().int().min(0).optional(),
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
Wi({
  x: te().optional(),
  y: te().optional(),
  l: te().optional(),
  w: te().optional(),
  type: Fe(ji),
  parent: di(),
  // Segment instance
  stock: di(),
  // Stock instance
  offcut: ue().optional(),
  merged: ue().optional(),
  cutDirection: Fe(Ri).nullable().optional()
});
const ln = {
  ...bs,
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
}, cn = Wi({
  id: $e().optional(),
  url: $e().optional(),
  size: te().optional(),
  mimeType: $e().optional(),
  name: $e().optional(),
  width: te().optional(),
  height: te().optional()
}), un = $s.extend({
  // ImageUpload specific properties
  images: ft(cn).default([]).describe("Array of uploaded images"),
  maxImages: te().default(5).describe("Maximum number of images allowed"),
  allowedTypes: ft($e()).default(["image/jpeg", "image/png", "image/gif"]).describe("Allowed MIME types"),
  maxSizeBytes: te().default(5242880).describe("Maximum file size in bytes (default 5MB)"),
  description: $e().optional().describe("Description of uploaded images"),
  tags: ft($e()).default([]).describe("Tags associated with images")
  // Note: faces and sides inherited from Extra base
}), fn = {
  // Inherit computed properties from Extra base class
  ...xs,
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
}, hn = Is, pn = {
  cacheResults: !0
};
let Yi;
Yi = zi({}, hn, pn);
let ie = Yi;
function dn() {
  if (ie.guillotine.secondPass && !ie.guillotine.strips.rearrange)
    throw new Error("config.guillotine.secondPass requires config.guillotine.strips.rearrange to be enabled");
  if (ie.captureProfile && ie.runTests)
    throw new Error("config.captureProfile and config.runTests should not be both enabled");
}
dn();
function gn(e, t = null) {
  if (!e) return ie;
  const i = mn(e, t);
  if (!i) return ie;
  const n = zi({}, ie, i);
  return console.log(`[CONFIG] custom config applied for ${e?.username}`), n;
}
function mn(e, t = null) {
  if (!e || !e?.config) return null;
  switch (e.id) {
    //Glassense Kolu
    case "662a2f8ad28745b63665e68a": {
      const i = "shapeList" in t ? t.shapeList : t.inputShapes, n = i ? i.reduce((a, s) => a + (s.q || 0), 0) : 0;
      if (t) if (n <= 80) {
        const a = { ...e.config };
        return a.groups.guillotine.strips = ie.groups.guillotine.strips, a.sample.guillotine = ie.sample.guillotine, a.guillotine.stripShapes.iterations = ie.guillotine.stripShapes.iterations, a;
      } else
        return e.config;
      else return e.config;
    }
  }
  return e.config;
}
function gi(e, t, i) {
  return sn(e, t, i);
}
const Sn = ne({
  // Context - using z.any() for complex external types
  job: _().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: z().nullable().default(null).describe("Socket.io connection ID"),
  user: _().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: _().describe("Configuration object"),
  // Type: Config
  api: j().nullable().default(null).describe("API mode flag"),
  app: j().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: We("Saw").describe("Saw configuration"),
  stockList: ce("Stock").default([]).describe("List of stock materials"),
  shapeList: ot(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: ce("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: ce("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: ce("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: ot(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: ot(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: ks,
  // Results storage
  cutList: ce("Cut").default([]).describe("List of cuts to make"),
  segmentList: ce("Segment").default([]).describe("List of segments"),
  offcuts: ce("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: ce("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: j().default(!1).describe("Use inventory system"),
  successMetric: z().default(ie.successMetric).describe("Metric for optimization success"),
  enableEvo: j().default(!0).describe("Enable evolutionary algorithm"),
  weighting: Ee(z(), _()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: _().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: _().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: ne({
    placement: Ye().default(0),
    group: Ye().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: j().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: j().default(!1).describe("Run guillotine second pass"),
  runningEvo: j().default(!1).describe("Currently running evolution"),
  evolutionVisData: re(Ee(z(), en())).default([]).describe("Evolution visualization data"),
  final: j().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: j().default(!1).describe("Has minimum spacing requirement"),
  hasShapeLevelMinSpacing: j().default(!1).describe("Has shape-level minimum spacing")
}), yn = {}, wn = tn(["decimal", "fraction"]);
ne({
  job: _().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Allow additional properties like __entityType and autoId
  inputSaw: Ts,
  inputShapes: re(vs),
  inputStock: re(Ps),
  inputUserGroups: re(Cs).optional(),
  // Number format for conversion
  numberFormat: wn.optional(),
  // Algorithm configuration
  enableEvo: j().default(!0),
  weighting: _().optional(),
  successMetric: z().optional(),
  useInventory: j().default(!1),
  // Context
  socketId: z().optional(),
  user: _().optional(),
  // IUser type
  // Application flags
  widget: j().optional(),
  api: j().optional(),
  app: j().optional(),
  domain: z().optional(),
  // Extras options (centralized configuration)
  extrasOptions: ne({
    banding: ne({
      options: ne({
        sides: Ee(z(), re(z())).optional()
      }).optional()
    }).optional(),
    finish: ne({
      options: ne({
        faces: Ee(z(), re(z())).optional()
      }).optional()
    }).optional(),
    planing: ne({
      options: ne({
        sides: Ee(z(), re(z())).optional(),
        faces: Ee(z(), re(z())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // API specific
  config: _().optional(),
  v: Ye().optional(),
  // API version
  webhook: z().optional(),
  //source
  sourceVersion: z().nullish(),
  source: z().optional()
});
ne({
  job: _().optional(),
  // Type: Job from BullMQ
  saw: _(),
  // Runtime Saw instance
  shapeList: re(_()),
  // Runtime Shape instances
  stockList: re(_()),
  // Runtime Stock instances
  userGroups: re(_()).optional(),
  // Runtime Group instances
  enableEvo: j(),
  weighting: _().optional(),
  successMetric: z().optional(),
  useInventory: j(),
  socketId: z().optional(),
  user: _().optional(),
  widget: j().optional(),
  api: j().optional(),
  app: j().optional(),
  domain: z().optional(),
  config: _().optional(),
  v: Ye().optional(),
  webhook: z().optional()
});
class Xe extends pt {
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
    return W.Offcut;
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
    return new Xe({
      ...t,
      // Include all rectangle properties (l, w, x, y, material)
      flex: t.flex,
      offcut: !0,
      addToInventory: !1,
      added: !1
    });
  }
}
class pe extends Re {
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
      if (!this.parent.children.some((a) => a.autoId === this.autoId)) {
        if (this.parent === this) {
          this.parent = null;
          return;
        }
        const a = [...this.parent.children, this];
        this.parent.children = a;
      }
    }
  }
  /**
   * Get entity type
   */
  getType() {
    return W.Segment;
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
class mi extends Es {
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
        const a = this.images[n];
        if (a.url || i.push(new Me({
          message: `Image ${n + 1} is missing URL`,
          type: "error"
        })), a.mimeType && !this.allowedTypes.includes(a.mimeType) && i.push(new Me({
          message: `Image ${n + 1} has unsupported type: ${a.mimeType}`,
          type: "warning"
        })), a.size && a.size > this.maxSizeBytes) {
          const s = (a.size / 1048576).toFixed(2), r = (this.maxSizeBytes / 1048576).toFixed(2);
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
    const t = this.images ? this.images.length : 0, n = ((this.images || []).reduce((a, s) => a + (s.size || 0), 0) / 1048576).toFixed(2);
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
const De = J("logs"), xt = J("cuts"), _e = J("groups"), Ve = J("guillotine"), It = J("results"), kt = J("scoring"), Tt = J("firstShapes"), Ct = J("calculations"), Pt = J("subset"), vt = J("secondRun"), Et = J("stack"), Ke = J("errors"), Dt = J("allStock"), Je = J("reset");
Ke.color = 1;
_e.color = 14;
Ve.color = 159;
Je.color = 11;
function bn(e = "info", t, i) {
  const n = t.map((r) => {
    const l = { ...r };
    for (const o in l)
      typeof l[o] == "string" && l[o].length > 30 && (l[o] = l[o].slice(0, 50) + "...");
    return l;
  }), a = console.table;
  let s = "";
  switch (console.table = (r, l) => {
    const o = console.log;
    console.log = (c) => {
      s += c + `
`;
    }, a(r, l), console.log = o;
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
      vt(s);
      break;
    case "cuts":
      xt(s);
      break;
    case "scoring":
      kt(s);
      break;
    case "calculations":
      Ct(s);
      break;
    case "stack":
      Et(s);
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
      Tt(s);
      break;
    case "groups":
      _e(s);
      break;
    case "reset":
      Je(s);
      break;
    default:
      De(s);
  }
  console.table = a;
}
const $n = "\x1B[31m", xn = "\x1B[0m", T = (e = "info", t, i = null, n = null, a = !1, s) => {
  if (s?.enableLogging, a) {
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
        vt(t);
        break;
      case "cuts":
        xt(t);
        break;
      case "scoring":
        kt(t);
        break;
      case "calculations":
        Ct(t);
        break;
      case "stack":
        Et(t);
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
        Tt(t);
        break;
      case "groups":
        _e(t);
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
          vt(i);
          break;
        case "cuts":
          xt(i);
          break;
        case "scoring":
          kt(i);
          break;
        case "calculations":
          Ct(i);
          break;
        case "stack":
          Et(i);
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
          Tt(i);
          break;
        case "groups":
          _e(i);
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
Ds(T);
function In(e, t) {
  return e?.length && e.forEach((i) => {
    t = t.filter((n) => !(n.id === i.id || D(n) && n.shapes.find((a) => a.id === i.id)));
  }), t;
}
const oe = {
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
        return ye(oe.roll.efficiency(), i);
      break;
    case "beam":
      return ye(oe.guillotine.beam(), i);
    case "guillotine": {
      if (t?.saw?.stockType === "roll")
        return ye(oe.roll.guillotine(), i);
      switch (t.saw.guillotineOptions.strategy) {
        case "time":
          return ye(
            oe.guillotine.time(),
            i
          );
        case "efficiency":
          return ye(
            oe.guillotine.stock(),
            i
          );
        default:
          return ye(
            oe.guillotine.stock(),
            i
          );
      }
    }
  }
  return ye(oe[e.cutType].standard(), i);
}
class kn {
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
      this.population.push(new Si(this, t));
    this.population.push(new Si(
      this,
      this.options.populationSize,
      this.benchmark.weighting
    ));
  }
  getBestIndividual() {
    return this.population.reduce((i, n) => {
      const a = "bestScore";
      return i?.[a]?.[this.selectionMethod] > n?.[a]?.[this.selectionMethod] ? i : n;
    });
  }
  recordResult(t, i) {
    if (i)
      if (!this.bestResult)
        this.bestResult = t, this.bestResult.weighting = structuredClone(i.weighting), D(this.bestResult.firstShape) && this.bestResult.firstShape.shapes.forEach((n) => t.shapes.push(n.compress()));
      else {
        if (t.score.efficiency <= this.bestResult.score.efficiency)
          return;
        this.bestResult = t, this.bestResult.weighting = structuredClone(i.weighting), D(this.bestResult.firstShape) && this.bestResult.firstShape.shapes.forEach((n) => t.shapes.push(n.compress()));
      }
  }
  async run() {
    this.CLO.runningEvo = !0, this.CLO.resetShapes(this.shapeList), this.createPopulation();
    async function t() {
      for (let i = 0; i < this.options.steps; i++) {
        for (const a of this.population)
          await a.assess();
        const n = this.getBestIndividual();
        if (this.population.every((a) => a?.bestScore?.[this.selectionMethod] === n?.bestScore?.[this.selectionMethod]))
          return;
        for (const a of this.population)
          try {
            a.alive && a.updatePosition(n);
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
class Si {
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
    const t = oe.efficiency.standard();
    this.weighting = {};
    for (const [i, n] of Object.entries(t)) {
      const a = n;
      if (this.swarm?.weighting && this.swarm.weighting.indexOf(i) > -1) {
        let s = a - this.swarm.mutation.range, r = a + this.swarm.mutation.range;
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
    for (const [n, a] of Object.entries(this.weighting)) {
      let s = 0;
      i ? this.previousScore ? s = this.previousScore.weighting[n] - a : s = this.swarm.benchmark.weighting[n] - a : s = this.following.bestScore.weighting[n] - a;
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
  const n = _i(i);
  return !!(k.greaterThanOrEqualTo(e[i], t[i]) && k.lessThan(e[i], t[i] + t[n]));
}
function Xi(e) {
  return e === "l" ? "x" : e === "w" ? "y" : null;
}
function _i(e) {
  return e === "x" ? "l" : e === "y" ? "w" : null;
}
function Ze(e, t) {
  const i = t === "x" ? "l" : "w", n = me(t);
  if (!e?.length) return null;
  const a = e.reduce((r, l) => r[t] + r[i] > l[t] + l[i] ? r : l);
  return e.filter((r) => r[t] === a[t] && r[i] === a[i]).sort((r, l) => r[n] - l[n])[0];
}
function Vi(e) {
  return {
    cutAxis: e === "l" ? "x" : "y",
    positionAxis: e === "l" ? "y" : "x",
    cutDimension: e,
    positionDimension: B(e)
  };
}
function Tn(e, t, i) {
  return e?.length ? e.filter((n) => n.added && k.equalTo(n[t], i)) : [];
}
function Cn(e, t) {
  return e?.guillotineState?.myPhase === t;
}
function Pn(e, t) {
  e?.guillotineState && (e.guillotineState.myStripDirection = t);
}
function vn(e, t) {
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
function Ki() {
  H.previousSegments = [], H.ptxCuts = 0, H.segments = 0, H.makeCutsIteration = -1;
}
function Wt({
  container: e,
  shapes: t = [],
  forceNoHeadCut: i = !1,
  final: n = !1,
  saw: a = null
}) {
  H.ptxCuts = 0;
  const s = e.getStock;
  a && (s.saw = a);
  const r = Y(e);
  let l;
  const o = r ? e.cutDirection : e.cutPreference;
  if (r && e.type === "root")
    l = e, l.cuts = [], l.children = [], A("cuts", `REUSING ROOT [${l.autoId ? l.id : "unknown"}] l=${l.l}, w=${l.w}, DIR ${o.toUpperCase()}`);
  else {
    const p = H.segments.toString();
    H.segments++, l = new pe({
      id: p,
      x: r ? e.x : 0,
      y: r ? e.y : 0,
      l: r ? e.l : s.l,
      w: r ? e.w : s.w,
      t: s.t,
      saw: s.saw,
      stock: s,
      shapes: t,
      parent: r ? e.parent ?? e : null,
      grain: s.grain,
      material: s.material,
      type: H.segments === 0 ? "root" : "",
      phase: r ? e.phase + 1 : 0,
      hasHeadCut: r ? e.hasHeadCut : !1,
      cutDirection: o,
      isInitial: r ? e.isInitial : !0
    });
  }
  H.previousSegments = [];
  const c = Be.call(
    this,
    {
      segment: l,
      stock: s,
      allStockShapes: t,
      forceNoHeadCut: i,
      final: n
    }
  );
  let f, u, h;
  try {
    [f, u, h] = Qn(l, n, c.headCutCount);
  } catch (p) {
    return A("errors", `issue analysing segments ${p.message}`), {
      rootSegment: null,
      cuts: [],
      offcuts: []
    };
  }
  if (r && h.length > 0) {
    const p = h.map((m) => `${m.id}@(${m.x},${m.y})`).join(", ");
    A("cuts", `[calculateStripCuts] Returning ${h.length} offcuts for container segment at (${e.x},${e.y}): ${p}`);
  }
  return {
    rootSegment: f,
    cuts: u,
    offcuts: h
  };
}
function En(e, t = !1) {
  let i = Vi(e);
  return t && (i = Zi(i)), i;
}
function Dn(e, t, i, n, a, s, r) {
  if (this?.config && !this?.config?.guillotine?.extendSegments || t.cutType !== "guillotine" || t?.saw?.guillotineOptions?.strategy === "time") return !1;
  const l = e?.merged, o = e?.parent?.merged;
  if (l && o) return !1;
  const c = Cn(i, 1), f = e?.parent ? e.parent?.hasHeadCut : !1;
  let u = !c || f;
  if (!u) return !1;
  t?.saw?.stockType === "roll" && c && (u = !1);
  let h = r.length > 1 && n < r.length - 1;
  f && (h = !0);
  const p = k.lessThan(
    i[s],
    e[s]
  );
  return h && p && !a;
}
function zt(e) {
  const t = B(e.cutPreference);
  return Xi(t);
}
function Rn(e) {
  return B(e.cutPreference);
}
function An(e) {
  const t = zt(e);
  let i = 0;
  return e?.getStock?.hasTrim && e?.getStock?.trimmed === !1 && (i = e?.getStock?.trim?.[t === "x" ? "x1" : "y1"] ?? 0), i;
}
function Ji(e) {
  const t = zt(e), i = An(e);
  return e[t] === i;
}
function Qi(e, t, i) {
  if (!this?.config?.guillotine?.allowHeadCuts || !e?.guillotineOptions?.headCuts || !Ji(i)) return !1;
  const n = Rn(i), a = zt(i);
  if (t[a] > i[a]) return !1;
  let s = !1;
  const r = 0.75;
  if (F(t) && t.group.addedAsGroup) {
    const l = i.shapes.filter((f) => f.group?.addedAsGroup === t.group.addedAsGroup), o = Xi(n), c = Ze(l, o);
    c[n] + c[o] >= i[n] * r && (s = !0);
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
  attemptedDirections;
  constructor(t) {
    this.segment = t.segment, this.stock = t.stock, this.allStockShapes = t.allStockShapes || [], this.forceNoHeadCut = t.forceNoHeadCut || !1, this.final = t.final || !1, this.headCutCount = t.headCutCount || 0, this.previousCutPosition = t.previousCutPosition || null, this.previousEdgeOfSegment = t.previousEdgeOfSegment || !1, this.cutSuccess = t.cutSuccess || !1, this.bladeWidth = this.stock.bladeWidth, this.halfBladeWidth = this.bladeWidth / 2, this.stripParentShapes = t.stripParentShapes || [], this.currentStripIndex = t.currentStripIndex || 0, this.isHeadCut = t.isHeadCut || !1, this.isEdgeOfSegment = t.isEdgeOfSegment || !1, this.mergedCut = t.mergedCut || !1, this.skippedCut = t.skippedCut || !1, this.cutPosition = t.cutPosition || null, this.cut = t.cut || null, this.farSideSegmentSize = t.farSideSegmentSize || null, this.headCutSegment = t.headCutSegment || null, this.nearSideSegment = t.nearSideSegment || null, this.farSideSegment = t.farSideSegment || null, this.attemptedDirections = t.attemptedDirections || /* @__PURE__ */ new Set(), Object.freeze(this);
  }
  //caters for head cuts
  get cutInfo() {
    const t = En(this.segment.cutDirection, this.isHeadCut);
    return E([() => $(t.cutDimension).to.equal(this.isHeadCut ? B(this.segment.cutDirection) : this.segment.cutDirection)]), t;
  }
  //segment cut direction doesn't change, but this computed property will
  get cutDirection() {
    return this.isHeadCut ? B(this.segment.cutDirection) : this.segment.cutDirection;
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
function Zi(e) {
  return {
    positionAxis: me(e.positionAxis),
    positionDimension: B(e.positionDimension),
    cutAxis: me(e.cutAxis),
    cutDimension: B(e.cutDimension)
  };
}
function yi(e) {
  return e.type === "root" && e.isInitial;
}
function Be({
  segment: e,
  stock: t,
  allStockShapes: i = [],
  forceNoHeadCut: n = !1,
  previousCutPosition: a = null,
  previousEdgeOfSegment: s = !1,
  final: r = !1,
  headCutCount: l = 0
}) {
  A("cuts", `[makeCuts] START: segment ${e.l}x${e.w} phase=${e.phase} type=${e.type} shapes=${e.shapes?.length || 0} final=${r}`);
  let o = new Ut({
    segment: e,
    stock: t,
    allStockShapes: i,
    forceNoHeadCut: n,
    previousCutPosition: a,
    previousEdgeOfSegment: s,
    final: r,
    headCutCount: l
  });
  if (!Mn.call(this, o)) {
    A("cuts", "[makeCuts] EARLY RETURN: invalid input");
    return;
  }
  if (qn.call(this, o)) {
    A("cuts", "[makeCuts] EARLY RETURN: duplicate segment");
    return;
  }
  On(o), o = Fn.call(this, o), o = Bn.call(this, o), A("cuts", `[makeCuts] Found ${o.stripParentShapes.length} strip parent shapes`), o.stripParentShapes.length && (o.segment.offcut = !1);
  const c = o.segment.cuts.length;
  for (let S = 0; S < o.stripParentShapes.length; S++) {
    if (o = o.with({ currentStripIndex: S }), A("cuts", `[makeCuts] Processing shape ${S}: ${o.currentStripParent.l}x${o.currentStripParent.w}`), o.currentStripParent.l === t.l && o.currentStripParent.w === t.w) {
      A("cuts", "[makeCuts] Shape matches stock size, marking as produced"), o = bi.call(this, o);
      break;
    }
    if (o = Kn.call(this, o), o.final && o.segment?.parent?.hasHeadCut && o.segment.phase === 1 && e.type === "far" && o.isHeadCut === !1) {
      const w = Zi(o.cutInfo), { cutAxis: x, cutDimension: I, positionDimension: b, positionAxis: v } = w;
      nt({
        parentSegment: e,
        stock: t,
        cutDirection: I,
        cutAxis: x,
        positionAxis: v,
        position: e[b] + e[v],
        headCut: !0,
        ptxDummyCut: !0
      });
    }
    if (o = Nn.call(this, o), o.final && t.cutType === "beam" && S === 0 && (e.type !== "far" || es(o)) && (o = Hn.call(this, o)), o = Wn.call(this, o), Ln.call(this, o) === !0) {
      A("cuts", "[makeCuts] Breaking due to edge of segment");
      break;
    }
    if (o = Xn.call(this, o), o.cut)
      o.isHeadCut && (o.segment.hasHeadCut = !0);
    else if (o.isHeadCut) {
      const w = B(o.cutDirection);
      o.attemptedDirections.has(w) ? A("cuts", `[makeCuts] Skipping reattempt - direction ${w} already attempted`) : (o = o.with({ forceNoHeadCut: !0 }), wi.call(this, o, w));
      break;
    }
    if (o = o.with({
      cutSuccess: !!o.cut,
      skippedCut: o.cut ? null : !0,
      headCutCount: o.isHeadCut && o.cut ? o.headCutCount + 1 : o.headCutCount
    }), o.final && (o = bi.call(this, o), t.cutType === "beam" && zn.call(this, o), o.cut)) {
      let w = e.parent?.autoId;
      (w === "root" || !w) && (w = "R"), w = `[${w}]`;
      let x = e.autoId ? e.id : "unknown";
      x = `[${x}]`, A("cuts", `${w}->${x} P${e.phase} {${o.currentStripParent.autoId}} ${o.isHeadCut ? "HEAD" : "NORM"} ${e.type.toUpperCase()} ${ge(e.l, 4)}x${ge(e.w, 4)} ${ge(o.cutPosition, 4)} ${ge(o?.cut?.x1, 4)}|${ge(o?.cut?.x2, 4)}|${ge(o?.cut?.y1, 4)}|${ge(o?.cut?.y2, 4)}`), A("cuts", `DIRECTIONS FOR ${x}: STATE ${o.cutDirection.toUpperCase()} CUT ${o.cut?.dimension?.toUpperCase() ?? "N/A"} SEGMENT ${e.cutDirection.toUpperCase()}`);
    }
    if (o = _n.call(this, o), o = Vn.call(this, o), o.isHeadCut) break;
  }
  const f = o.segment.cuts.length === c, u = o.segment.shapes.length > 1, h = o.segment.cutDirection, p = B(h), m = !o.attemptedDirections.has(h), y = !o.attemptedDirections.has(p), d = c > 0;
  if (f && u && m && y && d) {
    A("cuts", `[makeCuts] No cuts created for segment [${e.id}] with ${o.segment.shapes.length} shapes, retrying in ${p?.toUpperCase()} direction`);
    const S = new Set(o.attemptedDirections);
    S.add(h), o = o.with({ attemptedDirections: S }), wi.call(this, o, p);
    return;
  }
  return o.final && t.cutType === "beam" && e.phase === 0 && (o = jn.call(this, o)), o.final && t.cutType === "beam" && e.type === "far" && e.parent.hasHeadCut && (o = Yn.call(this, o)), o;
}
function es(e) {
  const { segment: t, isHeadCut: i } = e;
  return i ? !1 : t?.parent?.hasHeadCut && t.type === "far";
}
function Ln(e) {
  if (!e.isEdgeOfSegment) return !1;
  const { currentStripParent: t, segment: i, cutInfo: n } = e, { positionDimension: a, positionAxis: s } = n;
  if (k.greaterThanOrEqualTo(t[a] + t[s] + e.bladeWidth, i[a] + i[s]) && e.stock.cutType === "beam" || (e = e.with({ previousEdgeOfSegment: !0 }), !i.children.length)) return !1;
  const l = e.segment.children.findLast((o) => o.type === "far");
  return l && (e = e.with({ segment: l }), l.cutDirection = B(e.cutDirection), Be.call(this, e)), !0;
}
function wi(e, t) {
  const { segment: i } = e;
  i.cutDirection = t;
  const n = new Set(e.attemptedDirections);
  return n.add(t), e = e.with({
    isHeadCut: !1,
    attemptedDirections: n
  }), i.cuts.length = 0, i.clearChildren(), e.segment.hasHeadCut = !1, A("cuts", `REATTEMPTING [${i.id}] new direction ${i.cutDirection?.toUpperCase()}`), Be.call(this, e), !0;
}
function Mn(e) {
  if (!e.segment) return !1;
  const { segment: t, stock: i, cutDirection: n, previousCutPosition: a, allStockShapes: s } = e;
  return !["l", "w"].includes(n) || t.l <= 0 || t.w <= 0 || a === void 0 ? !1 : (E([
    () => $(s.every((r) => F(r) || D(r)), "allStockShapes must be shape or any type of group").to.be.true,
    () => $(V(i)).to.be.true
  ]), !0);
}
function On(e) {
  const { final: t } = e;
  return t && H.makeCutsIteration++, e;
}
function qn(e) {
  const { segment: t, cutDirection: i } = e;
  return t.type !== "root" && H.previousSegments.some((n) => t.l === n.l && t.w === n.w && t.x === n.x && t.y === n.y && t.type === n.type && i === n.cutDirection);
}
function Fn(e) {
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
function Gn(e, t, i) {
  return e.filter(
    (n, a, s) => s.findIndex(
      (r) => k.equalTo(
        r[t] + r[i],
        n[t] + n[i]
      )
    ) === a
  );
}
function Bn(e) {
  const { segment: t, stock: i, cutDirection: n, cutInfo: a, previousCutPosition: s, halfBladeWidth: r } = e, { cutAxis: l, positionAxis: o, positionDimension: c } = a;
  let f = [];
  if (A("cuts", `Finding strip parent shapes. Segment ${t.id} has ${t.shapes.length} shapes:`), t.shapes.slice(0, 3).forEach((u) => {
    A("cuts", `  Shape ${u.id}: l=${u.l}, w=${u.w}, rot=${u.rot}, at (${u.x},${u.y}), added=${u.added}`);
  }), i.cutPreference === n) {
    const u = t.type === "far" && i.cutType === "guillotine" || !s ? t[l] : s + r;
    A("cuts", `[findStripParentShapes] cutPreference=${i.cutPreference}, cutDirection=${n}, cutAxis=${l}, axisPosition=${u}, segment.shapes[0]?.[${l}]=${t.shapes[0]?.[l]}, segment.type=${t.type}`), f = Tn(
      t.shapes,
      l,
      u
    );
  } else {
    A("cuts", `[findStripParentShapes] NOT using cutPreference path, cutPreference=${i.cutPreference}, cutDirection=${n}, cutAxis=${l}, segment[${l}]=${t[l]}, segment.shapes[0]?.[${l}]=${t.shapes[0]?.[l]}, segment.shapes[0]?.added=${t.shapes[0]?.added}`), f = t.shapes.filter(
      (h) => h.added && k.equalTo(h[l], t[l])
    );
    const u = f.filter((h) => D(h));
    if (u.length > 0) {
      const h = /* @__PURE__ */ new Set();
      u.forEach((p) => {
        p.shapes && Array.isArray(p.shapes) && p.shapes.forEach((m) => h.add(m.autoId));
      }), f = f.filter((p) => D(p) ? !0 : !h.has(p.autoId));
    }
    f = Gn(f, o, c);
  }
  if (f.sort((u, h) => u[o] - h[o]), f.length && !t?.hasHeadCut) {
    const u = f.length - 1, h = f[u], p = t.shapes.filter((y) => y.added && Qe(y, h, o)), m = Ze(p, o);
    m && k.greaterThan(
      m[o] + m[c],
      h[o] + h[c]
    ) && f.splice(u, 1, m);
  }
  return e.with({ stripParentShapes: f });
}
function Nn(e) {
  const { segment: t, stock: i, cutDirection: n, cutInfo: a, halfBladeWidth: s, allStockShapes: r, previousStripShape: l, currentStripParent: o, currentStripIndex: c, bladeWidth: f } = e, { cutAxis: u, positionAxis: h, cutDimension: p, positionDimension: m } = a;
  if (c === 0) return e;
  if (l && k.equalTo(o[u], t[u]) && k.equalTo(l[u], t[u]) && !k.equalTo(
    o[h],
    l[h] + l[m] + f
  )) {
    A("cuts", `[makeCuts] Creating gap cut at position ${o[h] - s}, dir=${n}`);
    const { cut: y, previousCutPosition: d } = nt({
      parentSegment: t,
      stock: i,
      cutDirection: n,
      cutAxis: u,
      positionAxis: h,
      position: o[h] - s,
      allStockShapes: r
    });
    if (y) {
      const S = d < t[h] ? t[h] : d, g = S + s - t[h], w = o[h] - S - f - s, x = t[h] + g, I = w > 0 ? jt.call(this, {
        parent: t,
        stock: i,
        offcut: !0,
        type: "near",
        [u]: t[u],
        [p]: t[p],
        [h]: x,
        [m]: w
      }) : null;
      I && E([
        () => $(
          I.cutDirection,
          `near side segment ${I.id} has the same cutDirection as segment ${t.id}`
        ).not.to.equal(t.cutDirection)
      ]);
    }
  }
  return e;
}
function Hn(e) {
  if (e.stock.cutType !== "beam" || e.currentStripIndex !== 0 || e.segment.type === "far" && !es(e)) return e;
  const { segment: t, stock: i, cutDirection: n, cutInfo: a, allStockShapes: s, halfBladeWidth: r } = e, { cutAxis: l, positionAxis: o, positionDimension: c } = a;
  return t.phase !== 1 || !e.final || tr({
    segment: t,
    stock: i,
    cutDirection: n,
    cutAxis: l,
    positionAxis: o,
    positionDimension: c,
    position: 1,
    allStockShapes: s,
    halfBladeWidth: r
  }), e;
}
function Wn(e) {
  const { segment: t, stock: i, cutInfo: n, halfBladeWidth: a, currentStripParent: s, currentStripIndex: r, stripParentShapes: l, isHeadCut: o, bladeWidth: c, previousEdgeOfSegment: f } = e, { positionAxis: u, cutAxis: h, positionDimension: p, cutDimension: m } = n;
  let y = s[u] + s[p] + a, d = !1, S = r;
  A("cuts", `Cut position calc: shape ${s.l}x${s.w}, posAxis=${u}, posDim=${p}`), A("cuts", `  Shape rot=${s.rot}, autoId=${s.autoId}`), A("cuts", `  ${u}=${s[u]}, ${p}=${s[p]} => cutPos=${y}`), A("cuts", `  cutDirection=${e.cutDirection}, cutAxis=${n.cutAxis}, cutDim=${n.cutDimension}`), A("cuts", `  Shape actual extent: x=[${s.x} to ${s.x + s.l}], y=[${s.y} to ${s.y + s.w}]`), A("cuts", `  Strip parent shapes count: ${l.length}`), l.length > 1 && A("cuts", `  All strip parents: ${l.map((x) => `${x.id}(${x.l}x${x.w} rot=${x.rot})`).join(", ")}`);
  let g = k.greaterThanOrEqualTo(
    s[u] + s[p] + c,
    t[u] + t[p]
  );
  const w = t.shapes;
  if (!o && !g && !f && Dn.call(this, t, i, s, r, g, e.cutDirection, l)) {
    let x = s;
    for (let I = r + 1; I < l.length; I++) {
      const b = l[I];
      if (b.autoId === x.autoId) continue;
      if (!b) break;
      const v = w.filter(
        (C) => Qe(C, s, u)
      ), L = Ze(v, h), O = v.reduce(
        (C, P) => k.greaterThan(C[p], P[p]) ? C : P
      );
      k.greaterThan(
        O[u] + O[p],
        x[u] + x[p]
      ) && (x = O, y = x[u] + x[p] + a);
      const q = Ze(
        w.filter(
          (C) => Qe(C, b, u)
        ),
        h
      );
      if (!k.equalTo(
        L[h] + L[m],
        q[h] + q[m]
      ))
        break;
      if (k.equalTo(x[m], b[m]) && k.equalTo(x[h], b[h]))
        d = !0, y = b[u] + b[p] + a, x = b, S = I;
      else
        break;
    }
    d && (t.merged = !0, g = k.greaterThanOrEqualTo(
      y - a,
      t[u] + t[p]
    ));
  }
  return e.with({
    cutPosition: y,
    mergedCut: d,
    isEdgeOfSegment: g,
    currentStripIndex: S
  });
}
function zn(e) {
  if (e.stock.cutType !== "beam" || !e.cut) return e;
  const { cut: t, segment: i, cutInfo: n, currentStripParent: a, currentStripIndex: s, stripParentShapes: r } = e, { positionAxis: l, positionDimension: o } = n;
  t?.guillotineState?.partProduced && s === r.length - 1 && k.equalTo(
    a[l] + a[o],
    i[l] + i[o]
  ) && (A("cuts", `MARKING PTX DUMMY CUT ${a.autoId} ${e.cutPosition}`), t.ptxData.isDummy = !0);
}
function Un(e) {
  return e.hasHeadCut ? B(e.cutDirection) : e.cutDirection;
}
function jn(e) {
  if (e.stock.cutType !== "beam") return e;
  const { segment: t, cutInfo: i, stock: n, cutDirection: a } = e;
  if (t.phase !== 0) return e;
  const { cutAxis: s } = i;
  for (const r of t.cuts)
    r.dimension === Un(t) && (r[s + 1] = 0, r[s + 2] = n[a]);
  return e;
}
function Yn(e) {
  if (e.stock.cutType !== "beam") return e;
  const { segment: t, cutInfo: i, stock: n, cutDirection: a } = e;
  if (t.phase !== 1) return e;
  const { cutAxis: s } = i;
  for (const r of t.cuts)
    t.hasHeadCut ? r.dimension === B(t.cutDirection) && (r[me(s) + 2] = n[B(a)]) : r.dimension === t.cutDirection && (r[s + 2] = n[a]);
}
function Xn(e) {
  const { segment: t, stock: i, cutDirection: n, cutInfo: a, cutPosition: s, allStockShapes: r, currentStripParent: l, isHeadCut: o } = e, { cutAxis: c, positionAxis: f } = a;
  o && Pn(l, n);
  const { cut: u, farSideSegmentSize: h, previousCutPosition: p } = nt({
    parentSegment: t,
    stock: i,
    cutDirection: n,
    cutAxis: c,
    positionAxis: f,
    position: s,
    allStockShapes: t.phase === 0 ? r : [],
    headCut: e.isHeadCut
  });
  return u && e.final && A("cuts", `MADE CUT ${u.x1}|${u.x2}|${u.y1}|${u.y2} ${u.isHead ? "HEAD" : "NORM"}`), e.with({
    cut: u,
    farSideSegmentSize: h,
    previousCutPosition: p
  });
}
function bi(e) {
  if (e.stock.cutType !== "beam") return e;
  const { cut: t, cutInfo: i, halfBladeWidth: n, currentStripParent: a } = e;
  if (!t) return e;
  const { cutAxis: s, cutDimension: r, positionAxis: l, positionDimension: o } = i;
  return k.equalTo(
    t[s + 2] - t[s + 1],
    a[r]
  ) && k.equalTo(
    t[l + 1],
    a[l] + a[o] + n
  ) && (t.guillotineState.partProduced = a.parentId), e;
}
function _n(e) {
  const {
    segment: t,
    stock: i,
    cutInfo: n,
    cutPosition: a,
    mergedCut: s,
    currentStripParent: r,
    previousCutPosition: l,
    cut: o,
    isEdgeOfSegment: c,
    halfBladeWidth: f,
    bladeWidth: u,
    allStockShapes: h,
    final: p,
    cutDirection: m,
    currentStripIndex: y
  } = e, { cutAxis: d, positionAxis: S, cutDimension: g, positionDimension: w } = n, x = y === 0 && k.greaterThan(r[S], t[S]);
  if (!o && !c && !x) return e;
  const I = {
    parent: t,
    stock: i,
    merged: s,
    type: "near",
    hasHeadCut: t.hasHeadCut,
    shapes: []
  }, b = x && !o ? r[S] : a, v = l != null && l >= t[S], L = v ? l + f : t[S], O = b - (v ? l + u : f + t[S]);
  A("cuts", `[createNearSegment] segment[${t.id}] at (${t.x},${t.y}), posAxis=${S}, cutAxis=${d}, previousCutPosition=${l}, hasPreviousCut=${v}, nearSegmentPosition=${L}`);
  const q = {
    [d]: t[d],
    [g]: t[g],
    [S]: L,
    [w]: O,
    cutDirection: B(m)
  };
  A("cuts", `[createNearSegment] dimensionProps: x=${q.x ?? "N/A"}, y=${q.y ?? "N/A"}, l=${q.l ?? "N/A"}, w=${q.w ?? "N/A"}`);
  const C = jt.call(
    this,
    { ...I, ...q },
    !1
    // Don't reject if identical - we'll filter shapes ourselves
  );
  if (!C) return e;
  if (A("cuts", `[createNearSegment] AFTER creation: segment ${t.id} at (${C.x},${C.y}) ${C.l}x${C.w}`), C.shapes = t.shapes.filter((P) => k.greaterThanOrEqualTo(P.x, C.x) && k.lessThanOrEqualTo(P.x + P.l, C.x + C.l) && k.greaterThanOrEqualTo(P.y, C.y) && k.lessThanOrEqualTo(P.y + P.w, C.y + C.w)), A("cuts", `[createNearSegment] nearSideSegment.shapes.length = ${C.shapes.length}`), C.shapes.length > 0) {
    const P = k.equalTo(C.l, r.l) && k.equalTo(C.w, r.w);
    if (A("cuts", `[createNearSegment] nearSegment: ${C.l}x${C.w}, shape: ${r.l}x${r.w}, identical: ${P}, mergedCut: ${s}`), s || !P) {
      A("cuts", `CUTTING NEAR SIDE SEGMENT [${C.id}] DIR ${C?.cutDirection?.toUpperCase()}`), A("cuts", `[createNearSegment] CALLING makeCuts recursively with segment ${C.l}x${C.w}, segment.shapes.length=${C.shapes?.length}, final=${p}`);
      const N = Be.call(
        this,
        {
          segment: C,
          stock: i,
          cutDirection: C.cutDirection,
          previousCutPosition: l,
          allStockShapes: h,
          final: p,
          headCutCount: e.headCutCount
        }
      );
      A("cuts", `[createNearSegment] RETURNED from makeCuts, childState=${N}`), e = e.with({ headCutCount: N?.headCutCount || e.headCutCount });
    }
  }
  return e.with({ nearSideSegment: C });
}
function Vn(e) {
  const {
    segment: t,
    stock: i,
    cutInfo: n,
    cutPosition: a,
    farSideSegmentSize: s,
    halfBladeWidth: r,
    currentStripIndex: l,
    stripParentShapes: o,
    isHeadCut: c,
    allStockShapes: f,
    final: u
  } = e, { cutAxis: h, positionAxis: p, cutDimension: m, positionDimension: y } = n, d = {
    parent: t,
    stock: i,
    offcut: c ? !1 : l === o.length - 1,
    type: "far",
    hasHeadCut: !1,
    shapes: [],
    cutDirection: t.cutDirection
    //[] test
  }, S = {
    [h]: t[h],
    [m]: t[m],
    [p]: a + r,
    [y]: s
  };
  A("cuts", `Creating FAR segment: cutAxis=${h}, cutDim=${m}, posAxis=${p}, posDim=${y}`), A("cuts", `FAR segment props: ${h}=${t[h]}, ${m}=${t[m]}, ${p}=${a + r}, ${y}=${s}`), A("cuts", `FAR segment calculation: cutPosition=${a}, halfBladeWidth=${r}, result=${a + r}`);
  const g = jt.call(this, { ...d, ...S });
  if (!g) return e;
  if (A("cuts", `FAR segment created [${g.id}] at (${g.x},${g.y}) ${g.l}x${g.w}`), A("cuts", `  Parent has ${t.shapes.length} shapes, far segment has ${g.shapes.length} shapes`), A("cuts", `  Cut was at position ${a} (${p}=${a})`), A("cuts", `  Expected offcut dimensions based on stock (1200x1200): should be ${t.l - a}x${t.w} or ${t.l}x${t.w - a}`), c) {
    g.shapes = t.shapes.filter((x) => {
      const I = x[me(h)] + x[B(m)];
      return k.greaterThan(I, a);
    }), A("cuts", `HEAD CUT: Making cuts in far segment [${g.id}] with ${g.shapes.length} shapes`);
    const w = Be.call(
      this,
      {
        segment: g,
        stock: i,
        cutDirection: g.cutDirection,
        previousCutPosition: null,
        // No previous cut in this new segment yet
        allStockShapes: f,
        final: u,
        headCutCount: e.headCutCount
      }
    );
    e = e.with({ headCutCount: w?.headCutCount || e.headCutCount });
  }
  return e.with({ farSideSegment: g });
}
function ts(e) {
  if (!this?.config?.guillotine?.allowHeadCuts || !e?.saw?.guillotineOptions?.headCuts) return !1;
  if (yi(e)) return !0;
  if (e.type === "far" || e.type === "root") {
    if (!Ji(e)) return !1;
    if (e.parent.hasHeadCut || yi(e.parent)) return !0;
  }
  return !1;
}
function Kn(e) {
  const { segment: t, currentStripParent: i, forceNoHeadCut: n } = e;
  if (n) return e.with({ isHeadCut: !1 });
  let a = !1;
  return ts.call(this, t) ? (a = Qi.call(this, t.saw, i, t, e.cutDirection), e.with({ isHeadCut: a })) : e.with({ isHeadCut: !1 });
}
function nt({
  parentSegment: e,
  stock: t,
  cutDirection: i,
  cutAxis: n,
  positionAxis: a,
  position: s,
  allStockShapes: r = [],
  headCut: l = !1,
  ptxDummyCut: o = !1,
  skipCollisionCheck: c = !1
}) {
  const f = t.halfBladeWidth, u = _i(a), h = Rs.parse({
    stock: t,
    isGuillotine: !0,
    isHead: l,
    ptxData: {
      isDummy: o
    },
    //NOTE: this has changed from cutAxis to positionAxis
    x1: a === "x" ? s : e.x,
    x2: a === "x" ? s : e.x + e.l,
    y1: a === "y" ? s : e.y,
    y2: a === "y" ? s : e.y + e.w
  });
  let p = new dt(h);
  if (!o && e.type === "near" && e.parent.hasHeadCut && (p.ptxData.headCutStrip = !0), !c) {
    const w = r.length ? r : e.shapes;
    if (Nt(
      p,
      t,
      w
    ))
      return A("cuts", `[createCut] REJECTED collision: cut at (${p.x1},${p.y1})-(${p.x2},${p.y2}), segment=(${e.x},${e.y}) ${e.l}x${e.w}`), {
        cut: null,
        farSideSegmentSize: null,
        previousCutPosition: null
      };
  }
  const m = e.cuts.filter((w) => w.dimension === i && k.equalTo(w[n + 1], p[n + 1])), y = m.length ? m[m.length - 1] : null, d = y ? y[a + 1] : null;
  if (s && d && k.equalTo(s, d))
    return {
      cut: null,
      farSideSegmentSize: null,
      previousCutPosition: null
    };
  let S = e[a] + e[u] - (s + f);
  S < 0 && (S = 0);
  const g = k.lessThan(
    s - f,
    e[a] + e[u]
  );
  return p.beamTrimL1 || p.beamTrimW1 || t.cutType === "beam" && k.lessThanOrEqualTo(
    s - f,
    e[a] + e[u]
  ) || p.ptxData.isDummy || g ? (p.ptxData.order = H.ptxCuts++, e.cuts.push(p)) : p.stock?.saw?.stockType === "roll" ? e.cuts.push(p) : (p = null, S = null), {
    cut: p,
    farSideSegmentSize: S,
    previousCutPosition: d
  };
}
function Jn({
  x: e,
  y: t,
  l: i,
  w: n,
  type: a,
  parent: s,
  rejectIdentical: r
}) {
  return r && k.equalTo(e, s.x) && k.equalTo(t, s.y) && k.equalTo(n, s.w) && k.equalTo(i, s.l) ? "IDENTICAL_TO_PARENT" : i <= 0 || n <= 0 ? "INVALID_DIMENSIONS" : s && !s.autoId ? (console.error("[ERROR] Parent segment has no autoId!"), console.error(`Parent details: type=${s.type}, x=${s.x}, y=${s.y}, l=${s.l}, w=${s.w}`), "MISSING_PARENT_ID") : a === "root" && s ? (console.error("[ERROR] Attempting to create root segment with a parent!"), console.error(`Parent autoId: ${s.autoId}, Parent type: ${s.type}`), "ROOT_WITH_PARENT") : (a === "root" && s?.type !== void 0 && s.type !== "root" && console.error(`[ERROR] Creating root segment with non-root parent of type: ${s.type}`), null);
}
function jt({
  x: e,
  y: t,
  l: i,
  w: n,
  type: a,
  parent: s,
  stock: r,
  offcut: l = !1,
  merged: o = !1,
  cutDirection: c = null
}, f = !0) {
  if (Jn({ x: e, y: t, l: i, w: n, type: a, parent: s, rejectIdentical: f })) return;
  let h;
  H.segments++;
  let p = s.phase + 1;
  s.hasHeadCut && (s.isInitial || (s.phase = 0), p = s.phase + 1);
  try {
    const y = H.segments.toString();
    if (h = new pe({
      x: e,
      y: t,
      l: i,
      w: n,
      t: typeof r.t == "string" ? parseFloat(r.t) : r.t,
      id: y,
      phase: p,
      parent: s,
      stock: r,
      offcut: l,
      merged: o,
      type: a,
      grain: r.grain,
      material: r.material,
      saw: r.saw,
      cutDirection: c || B(s.cutDirection)
    }), s && s.autoId === h.autoId)
      throw console.error(`[ERROR] Segment created with itself as parent! autoId: ${h.id}`), new Error("Segment cannot be its own parent");
  } catch (y) {
    A("info", `issue creating segment ${y.message}`);
    return;
  }
  const m = s.shapes.filter((y) => y.added ? k.greaterThanOrEqualTo(y.x, h.x) && k.lessThanOrEqualTo(y.x + y.l, h.x + h.l) && k.greaterThanOrEqualTo(y.y, h.y) && k.lessThanOrEqualTo(y.y + y.w, h.y + h.w) : y.willItFit(h));
  return h.shapes = m, h;
}
function Qn(e, t = !1, i) {
  t && A("cuts", `------------------- ANALYSE SEGMENTS ${e.id} -------------------`);
  const n = [], a = [], s = [];
  let r = 0, l = 0;
  const o = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let f = 0;
  const u = 1e3, h = (p, m = 0) => {
    if (!p) return m;
    if (f++, f > u)
      return console.error(`[CRITICAL] Maximum recursion depth (${u}) exceeded in traverse function!`), console.error(`Current segment: ${p.id}, Parent: ${p.parent?.id}`), f--, m;
    if (c.has(p.autoId))
      return console.error(`[CIRCULAR REFERENCE DETECTED] Segment ${p.id} is already in the traversal path!`), console.error(`Traversal path: ${Array.from(c).join(" -> ")} -> ${p.id}`), console.error(`Segment details: autoId=${p.id}, parent=${p.parent?.id}, children=[${p.children?.map((d) => d.autoId).join(", ")}]`), f--, m;
    c.add(p.autoId), o.add(p.autoId);
    let y = m;
    n.push(p), (p.offcut === !0 || !p.shapes?.length) && s.push(p);
    for (let d = 0; d < p.cuts.length; d++) {
      const S = p.cuts[d];
      if (S) {
        if (S.guillotineState.phase = p.phase, S.isHead ? (S.ptxData.function = 0, r++) : d > 0 && a[d - 1].isHead ? S.dimension === "l" ? S.ptxData.function = 1 : S.dimension === "w" && (S.ptxData.function = 2) : (S.ptxData.function = S.guillotineState.phase + 1, S.ptxData.headCutStrip && S.ptxData.function--), S.isTrim && l++, t)
          if (S.isHead) {
            let g = 0;
            vn(p, () => g++), y = g, A("cuts", `[${p.id}] reset cut order to ${y}`);
          } else d > 0 && p.cuts[d - 1].isHead && y++;
        S.guillotineState.order = y, S.guillotineState.segmentCutOrder = d, S.guillotineState.parentSegmentID = p?.autoId || "root", t && Zn(S, p), a.push(S), t && A("cuts", `[${p.id}] {${y}} ${S.x1}|${S.x2}|${S.y1}|${S.y2}`), y++;
      }
    }
    if (p.children && p.children.length > 0) {
      const d = p.children.filter((S) => S.autoId === p.autoId ? (console.error(`[SELF-REFERENCE FOUND] Removing segment ${p.id} from its own children array`), console.error(`Segment type: ${p.type}, Phase: ${p.phase}`), console.error(`Number of children: ${p.children.length}`), console.error(`Children autoIds: ${p.children.map((g) => g.autoId).join(", ")}`), !1) : !0);
      d.length !== p.children.length && (p.children = d);
      for (const S of p.children)
        if (S && Y(S)) {
          if (S.type === "firstShape")
            continue;
          if (S.autoId === p.autoId) {
            console.error(`[CRITICAL SELF-REFERENCE] Segment ${p.id} still has itself as a child!`), console.error("This should have been filtered. Skipping traversal.");
            continue;
          }
          if (c.has(S.autoId)) {
            console.error(`[CIRCULAR REFERENCE] Child segment ${S.autoId} is already in traversal path`), console.error(`Parent: ${p.id}, Path: ${Array.from(c).join(" -> ")}`);
            continue;
          }
          if (p.hasHeadCut) {
            const g = i + a.filter((w) => !w.isHead && !w.ptxData.isDummy).length;
            y = h(S, g);
          } else
            y = h(S, y);
        }
    }
    return c.delete(p.autoId), f--, y;
  };
  return h(e), t && (A("cuts", `Segments processed: ${n.length}`), A("cuts", `Cuts processed: ${a.length}`), A("cuts", `Trim cuts found: ${l}`), A("cuts", `Head cuts found: ${r}/${i}`), A("cuts", `Offcuts identified: ${s.length}`), A("cuts", `ROOT segment [${e.id}] has ${e.children?.length || 0} children`), A("cuts", "------------------- END ANALYSE SEGMENTS -------------------")), [e, a, s];
}
function Zn(e, t) {
  const i = {
    top: null,
    bottom: null,
    left: null,
    right: null
  }, n = e.stock.halfBladeWidth;
  if (e.beamTrimL1 || e.beamTrimW1)
    e.beamTrimL1 ? i.left = e.stock.trim.l1 : e.beamTrimW1 && (i.bottom = e.stock.trim.w1);
  else {
    const a = t?.children, s = e.stock.cutType === "beam" && t.cuts[0].isTrim ? e.guillotineState.segmentCutOrder - 1 : e.guillotineState.segmentCutOrder;
    if (a?.length) {
      const r = a.filter((l) => l.type === "near")[s];
      r && (e.dimension === "l" ? (i.bottom = e.y1 - r.y - n, i.top = t.y + t.w - (e.y1 + n)) : e.dimension === "w" && (i.left = e.x1 - r.x - n, i.right = t.x + t.l - (e.x1 + n)));
    }
  }
  e.distances = i;
}
function er(e, t) {
  return `${t}${e}`;
}
function tr({
  segment: e,
  stock: t,
  cutDirection: i,
  cutAxis: n,
  positionAxis: a,
  positionDimension: s,
  position: r,
  allStockShapes: l,
  halfBladeWidth: o
}) {
  if (t.cutType !== "beam" || !t.hasTrim || s === "w" && e.phase > 1)
    return;
  const c = er(r, i);
  if (!t.trim?.[c]) return;
  const f = t.trimmed ? -o : t.trim[c] - o, u = t.trimmed ? -o : t.trim[c] - o;
  if (E([() => {
    $(f, `trim cut ${r} in the wrong position`).to.equal(u);
  }]), f !== u)
    return;
  const { cut: h } = nt({
    parentSegment: e,
    stock: t,
    cutDirection: i,
    cutAxis: n,
    positionAxis: a,
    position: f,
    allStockShapes: l,
    skipCollisionCheck: !0
  });
  h && (h.isTrim = !0, h.guillotineState.parentSegmentID = e.autoId, h.ptxData || (h.ptxData = {}), h.ptxData.function = e.phase, h.ptxData.isDummy = !1, h.dimension === "l" && (h.beamTrimL1 = !0), h.dimension === "w" && (h.beamTrimW1 = !0), h.dimension === "w" ? (new pe({
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
  }), t.trim.l2 && t.trim.l2 > 0 && new pe({
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
  })) : h.dimension === "l" && new pe({
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
  }), i !== e.cutDirection && (h[n + 2] = t[i]), h.isTrim = !0, e.hasBeamTrim = !0);
}
function ir(e, t, i = null) {
  let n = null;
  const a = [];
  if (!t || !t.length) return {
    allShapesCut: !0,
    uncutShape: null,
    uncutShapeAutoIds: []
  };
  const s = e.every((r) => {
    if (!r.added || !r.stock || F(r) && r.group.inGroup) return !0;
    const l = r.stock.halfBladeWidth;
    let o = null;
    i ? o = i.getSides() : o = r.stock.getSides();
    const c = Object.values(r.getSides()).every((f) => {
      const u = () => {
        switch (f.type) {
          case "top": {
            const d = r.y + r.w + l;
            return t.some((g) => g.dimension === "l" && k.equalTo(g.y1, d) && k.lessThanOrEqualTo(g.x1, r.x) && k.greaterThanOrEqualTo(g.x2, r.x + r.l));
          }
          case "bottom": {
            const d = r.y - l;
            return t.some((g) => g.dimension === "l" && k.equalTo(g.y1, d) && k.lessThanOrEqualTo(g.x1, r.x) && k.greaterThanOrEqualTo(g.x2, r.x + r.l));
          }
          case "left": {
            const d = r.x - l;
            return t.some((g) => g.dimension === "w" && k.equalTo(g.x1, d) && k.lessThanOrEqualTo(g.y1, r.y) && k.greaterThanOrEqualTo(g.y2, r.y + r.w));
          }
          case "right": {
            const d = r.x + r.l + l;
            return t.some((g) => g.dimension === "w" && k.equalTo(g.x1, d) && k.lessThanOrEqualTo(g.y1, r.y) && k.greaterThanOrEqualTo(g.y2, r.y + r.w));
          }
        }
      }, h = () => o.some((d) => {
        switch (f.type) {
          case "top":
            return d.dimension === "l" && k.equalTo(d.y1, r.y + r.w) && k.lessThanOrEqualTo(d.x1, r.x) && k.greaterThanOrEqualTo(d.x2, r.x + r.l);
          case "bottom":
            return d.dimension === "l" && k.equalTo(d.y1, r.y) && k.lessThanOrEqualTo(d.x1, r.x) && k.greaterThanOrEqualTo(d.x2, r.x + r.l);
          case "left":
            return d.dimension === "w" && k.equalTo(d.x1, r.x) && k.lessThanOrEqualTo(d.y1, r.y) && k.greaterThanOrEqualTo(d.y2, r.y + r.w);
          case "right":
            return d.dimension === "w" && k.equalTo(d.x1, r.x + r.l) && k.lessThanOrEqualTo(d.y1, r.y) && k.greaterThanOrEqualTo(d.y2, r.y + r.w);
        }
      }), p = u(), m = h();
      return p || m;
    });
    return c || (n = r, a.push(r.autoId)), c;
  });
  return s && (n = null, a.length = 0), { allShapesCut: s, uncutShape: n, uncutShapeAutoIds: a };
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
function sr(e) {
  const t = Yt(e);
  if (!t) return xi(e, 1);
  const n = fe(t) === "l" ? "w" : "l", a = is(e, t, n);
  xi(e, a);
}
function is(e, t, i) {
  if (!e) return null;
  if (!t) return 1;
  const n = Xt(t);
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
function Xt(e) {
  return e?.guillotineState ? e.guillotineState.myPhase : null;
}
function fe(e) {
  return e?.guillotineState ? e.guillotineState.myStripDirection : null;
}
function et(e, t) {
  if (e?.guillotineState) {
    if (typeof e.guillotineState.setStripDirection != "function") {
      const i = e.guillotineState || {};
      e.guillotineState = new ze(i);
    }
    e.guillotineState.setStripDirection(t);
  }
}
function Ii(e, t) {
  if (Y(e)) {
    nr(t);
    const i = t?.bestScore?.score;
    i && ["currentStripDirection", "myStripDirection", "keyStripDirection", "myPhase"].forEach((a) => {
      i[a] && (t.guillotineState[a] = i[a]);
    });
  }
}
function nr(e) {
  const t = e.bestScore;
  t?.myStripParent && $i(e, t.myStripParent), D(e) && e.shapes.forEach((i) => $i(i, Yt(i)));
}
function rr(e, t) {
  let i = null, n = t.x.get(e.x) || [];
  n = n.filter((l) => {
    const o = l.guillotineState.myStripParent;
    return o && !o.guillotineState?.firstShape ? gt(e, o, "y") : !0;
  }), n.sort((l, o) => l.x - o.x);
  let a = t.y.get(e.y) || [];
  a = a.filter((l) => {
    const o = l.guillotineState.myStripParent;
    return o && !o.guillotineState?.firstShape ? gt(e, o, "x") : !0;
  }), a.sort((l, o) => l.y - o.y);
  const s = n.length ? n[0] : null, r = a.length ? a[0] : null;
  return s && r ? i = s.placementOrder > r.placementOrder ? s : r : i = s || r, i;
}
function Mt(e, t) {
  e.x.has(t.x) ? e.x.get(t.x).push(t) : e.x.set(t.x, [t]), e.y.has(t.y) ? e.y.get(t.y).push(t) : e.y.set(t.y, [t]);
}
function or(e, t) {
  const i = e.x.get(t.x) ?? [], n = i.indexOf(t);
  n !== -1 && (i.splice(n, 1), i.length === 0 && e.x.delete(t.x));
  const a = e.y.get(t.y) ?? [], s = a.indexOf(t);
  s !== -1 && (a.splice(s, 1), a.length === 0 && e.y.delete(t.y));
}
function ar(e, t = !0) {
  const i = [], n = /* @__PURE__ */ new Set();
  for (const a of e.shapes)
    if (D(a)) {
      const s = a.type === "position", r = Z(a);
      if (s || r && t) {
        if (!n.has(a.autoId)) {
          i.push(a), n.add(a.autoId);
          for (const o of a.shapes || [])
            n.add(o.autoId);
        }
      } else if (a.added && e.stock) {
        a.placeMyShapes(e.stock);
        for (const o of a.shapes)
          n.has(o.autoId) || (o.group.addedAsGroup = a, i.push(o), n.add(o.autoId));
      }
    } else
      n.has(a.autoId) || (i.push(a), n.add(a.autoId));
  return e.shapes = i, E([
    () => $(se(e.shapes)).to.be.false,
    () => Li(e.shapes, "removeGroupsFromSegment")
  ]), e;
}
function ss(e, t) {
  if (e.children && Array.isArray(e.children)) {
    if (t(e) === !1) return;
    for (const i of e.children)
      ss(i, t);
  }
}
function lr(e, t) {
  const i = Ie(e, !1);
  for (const n of t) {
    const a = i.filter((o) => o.stockLock.includes(n.parentId));
    if (!a.length) continue;
    const s = a.map((o) => o.area), r = s.reduce((o, c) => o + c, 0) / a.length;
    if (!(k.calculateCoefficientOfVariation(s) < this.config.priority.variationThreshold))
      for (const o of a) {
        o.priority || (o.priority = {});
        const c = cr(o, n, r);
        o.priority[n.parentId] = c, e.filter((u) => u.id !== o.id && u.parentId === o.parentId).forEach((u) => {
          u.priority || (u.priority = {}), u.priority[n.parentId] = c;
        });
      }
  }
}
function cr(e, t, i) {
  if (e.isExactFit(t) || e.area >= t.area * 0.9 || e.longSide >= t.longSide * 0.9)
    return 1;
  const n = e.area, a = t.area, s = n / a;
  return n > i ? s : 0;
}
function ur(e, t) {
  return e.reduce((i, n) => {
    const a = n.getPriority(t), s = i.getPriority(t);
    return a > s ? n : i;
  });
}
function fr(e, t, i = null) {
  let n;
  if (t?.length) {
    if (!t.length) return 1;
    const a = t.reduce((s, r) => s.area > r.area ? s : r);
    n = e.area / a.area;
  } else i && (n = e.area / i.area);
  if (n > 1) return 1;
  if (!n)
    throw new Error("no area score found");
  return n;
}
function ns(e, t, i = "y") {
  if (!e || !t || e[i] === void 0 || !t.area || t.area === 0) return 0;
  const n = me(i), a = n === "y" ? "w" : "l", s = t[i] ?? 0, r = t[n] ?? 0, c = (e[i] - s) * t[a] / t.area, h = (e[n] - r) / t[a] * t.aspect * 0.01;
  return 1 - (c + h);
}
function rs(e, t, i = "y") {
  if (!e || !t) return 0;
  "grain" in t && t.grain === "w" && (i = me(i));
  const n = i === "y" ? "w" : "l";
  return (e[i] + e[n]) / t[n];
}
function hr(e, t, i) {
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
  let n = 0, a = 0;
  if (!e || !t || !i)
    return {
      possibleAlignments: n,
      positiveAlignments: a
    };
  if (e.autoId === t.autoId)
    return {
      possibleAlignments: 0,
      positiveAlignments: 0
    };
  const s = (r, l) => {
    const o = hr(r, l, i);
    n += o.length, a += o.reduce(
      (c, f) => f ? c + 1 : c,
      0
    );
  };
  return D(e) ? e.shapes.forEach((r) => {
    D(t) ? t.shapes.forEach((l) => {
      s(r, l);
    }) : s(r, t);
  }) : D(t) ? t.shapes.forEach((r) => {
    s(e, r);
  }) : s(e, t), { positiveAlignments: a, possibleAlignments: n };
}
function dr(e, t, i) {
  if (!e || !t || !i)
    return [!1, !1, !1, !1];
  if (e.autoId === t.autoId)
    return [!1, !1, !1, !1];
  const n = i.bladeWidth, a = e.x, s = e.x + e.l, r = e.y + e.w, l = e.y, o = t.x, c = t.x + t.l, f = t.y + t.w, u = t.y, h = () => a === c + n && (l >= u && l < f || r <= f && r > u), p = () => s + n === o && (l >= u && l < f || r <= f && r > u), m = () => l === f + n && (a >= o && a < c || s <= c && s > o), y = () => l + n === u && (a >= o && a < c || s <= c && s > o);
  return [
    h(),
    p(),
    m(),
    y()
  ];
}
function gr(e, t) {
  return e.l === t.l && e.x === t.x;
}
function mr(e, t) {
  return e.w === t.w && e.y === t.y;
}
function os(e, t, i, n = {}) {
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
    contact: a = !0,
    alignment: s = !0,
    similarDimensions: r = !0,
    cohesion: l = !0
  } = n;
  let o = [];
  a && (o = dr(e, t, i));
  const c = o.filter(Boolean).length;
  if (c > 1)
    throw new Error("number of neighbours should not be greater than one for a single test shape");
  if (c === 0)
    return {
      contactResult: o,
      cohesion: 0,
      alignment: null,
      similarDimensions: 0,
      type: null,
      neighbour: t,
      neighbours: c
    };
  const f = ["lr", "rl", "bt", "tb"], u = o.findIndex(Boolean), h = f[u];
  if (!h) throw new Error("no contact type found");
  let p = null, m = null, y = 0;
  if (l && h && (p = yr(e, t, h)), s && (m = pr(e, t, i)), r) {
    const d = h === "rl" || h === "lr", S = h === "tb" || h === "bt", g = mr(e, t), w = gr(e, t);
    (d && g || S && w) && (y = w && g ? 1 : 0.5);
  }
  return {
    contactResult: o,
    cohesion: p,
    alignment: m,
    similarDimensions: y,
    type: h,
    neighbour: t,
    neighbours: c
  };
}
function Sr(e, t) {
  if (!t)
    throw new Error(`edge - no stock defined for shape ${e.id}`);
  const i = t.bladeWidth, n = e.w / t.w, a = e.l / t.l;
  return [
    // 0 left
    e.x - i <= 0 ? n : 0,
    // 1 right
    e.x + e.l + i >= t.l ? n : 0,
    // 2 bottom
    e.y - i <= 0 ? a : 0,
    // 3 top
    e.y + e.w + i >= t.w ? a : 0
  ].reduce((l, o) => l + o, 0);
}
function yr(e, t, i) {
  if (!e || !t || !i) return 0;
  const n = wr(e, t), a = ki(e), s = ki(t), r = a + s, l = Math.max(n.l * n.w, r), o = Math.min(1, Math.max(0, r / l)), c = Math.min(1, Math.max(
    0,
    br(e, t, i) || 0
  )), f = o * 0.7 + c * 0.3;
  return Math.min(1, Math.max(0, f));
}
function wr(e, t) {
  const i = tt(e), n = tt(t), a = Math.min(i.x, n.x), s = Math.min(i.y, n.y), r = Math.max(i.x + i.l, n.x + n.l), l = Math.max(i.y + i.w, n.y + n.w);
  return {
    x: a,
    y: s,
    l: r - a,
    w: l - s
  };
}
function tt(e) {
  if (D(e)) {
    let t = 1 / 0, i = 1 / 0, n = -1 / 0, a = -1 / 0;
    return e.shapes.forEach((s) => {
      t = Math.min(t, s.x), i = Math.min(i, s.y), n = Math.max(n, s.x + s.l), a = Math.max(a, s.y + s.w);
    }), {
      x: t,
      y: i,
      l: n - t,
      w: a - i
    };
  }
  return {
    x: e.x,
    y: e.y,
    l: e.l,
    w: e.w
  };
}
function ki(e) {
  return D(e) ? e.shapes.reduce((t, i) => t + i.area, 0) : e.area;
}
function br(e, t, i) {
  const n = tt(e), a = tt(t);
  if (i === "lr" || i === "rl") {
    const s = Math.max(n.w, a.w);
    if (s === 0) return 0;
    const r = Math.min(n.w, a.w) / s;
    return Math.max(0, r);
  }
  if (i === "tb" || i === "bt") {
    const s = Math.max(n.l, a.l);
    if (s === 0) return 0;
    const r = Math.min(n.l, a.l) / s;
    return Math.max(0, r);
  }
  return 0;
}
async function $r(e, t, i, n) {
  return await Pe.runSpecificStrategy.call(this, {
    shapes: e,
    container: t,
    firstShape: i,
    firstShapeRotation: n
  });
}
function Ti(e, t, i, n = null, a = null, s = null, r = null) {
  if (!n)
    throw new Error("shapePosition was not passed any placed shapes");
  if (!a)
    throw new Error("shapePosition was not passed any unplaced shapes");
  Y(t) ? xr(
    e,
    t,
    i,
    n,
    r
    // tidy
  ) : as(
    e,
    t,
    i,
    n,
    s
  );
}
function xr(e, t, i = null, n = [], a = null) {
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
  }, r = t.cutPreference, l = t.cutDirection, o = t.getStock.bladeWidth, { cutAxis: c } = Vi(l), f = rr(e, a);
  if (!f) return !1;
  const u = fe(f);
  let h = u;
  const p = u === "l" ? "w" : "l";
  f[p] !== e[p] && (h = B(u));
  const m = is(e, f, p);
  if (t.saw.guillotineOptions.maxPhase && m > t.saw.guillotineOptions.maxPhase) return !1;
  const y = fe(f) ?? t.cutDirection;
  if (!y) throw new Error("keyDimension is not defined");
  const d = Yt(f);
  if (d) {
    const I = me(Ai(fe(d))), b = gt(e, d, I);
    if (d.guillotineState.myPhase <= 2 && !b) return !1;
  }
  let S = !1;
  t.firstShape && (S = e[c] > t.firstShape[c]);
  const g = {
    lr: [],
    bt: [],
    tb: [],
    rl: []
  };
  for (const I of n) {
    const b = os(
      e,
      I,
      t,
      {
        contact: !0,
        cohesion: !!i.cohesion,
        alignment: !!i.alignment,
        similarDimensions: !!i.similarDimensions
      }
    );
    b.type && (g[b.type].push(I), "cohesion" in s && i.cohesion && S && (s.cohesion += b.cohesion), "similarDimensions" in s && i.similarDimensions && (s.similarDimensions += b?.similarDimensions ? b.similarDimensions : 0), "fenceConsistency" in s && i.fenceConsistency && (r === "w" ? b.type === "lr" && b.neighbour.l === e.l && b.neighbour.y === e.y && (s.fenceConsistency = 1) : r === "l" && b.type === "bt" && b.neighbour.w === e.w && b.neighbour.x === e.x && (s.fenceConsistency = 1)));
  }
  if (t.cutDirection) {
    const I = t.cutDirection;
    if (I === "w") {
      const b = e.y === t.y, v = g.bt && g.bt.length > 0;
      if (!b && !v)
        return !1;
    } else if (I === "l") {
      const b = e.x === t.x, v = g.lr && g.lr.length > 0;
      if (!b && !v)
        return !1;
    }
  }
  if ("exactStripFill" in s && i.exactStripFill && f) {
    const I = B(fe(f)), b = e[I] + o;
    s.exactStripFill = b >= f[I] && b < f[I] + o ? 1 : 0;
  }
  if ("compression" in s && i.compression) {
    const I = y === "l" ? "y" : "x";
    s.compression = ns(
      e,
      t,
      I
    );
  }
  if ("fill" in s && i.fill) {
    const I = y === "l" ? "y" : "x";
    s.fill = rs(e, t, I);
  }
  if (s.cohesion = Math.max(0, s.cohesion), "sameStripBonus" in s && i.sameStripBonus && t.firstShape) {
    const I = fe(f);
    if (!S)
      s.sameStripBonus = 0;
    else if (I === "w" && g?.bt?.length) {
      const b = mt(g.bt, "x"), v = b.x + b.l;
      e.x + e.l > v && (s.sameStripBonus = 0, s.cohesion = 0);
    } else if (I === "l" && g?.lr?.length) {
      const b = mt(g.lr, "y"), v = b.y + b.w;
      e.y + e.w > v && (s.sameStripBonus = 0, s.cohesion = 0);
    } else
      s.sameStripBonus = 1;
  }
  if (i.aspectRatio) {
    const I = e.aspect, b = fe(f);
    I < 0.1 ? e[b] > e[B(b)] && (s.aspectRatio = 1) : s.aspectRatio = 0;
  }
  const w = { ...s };
  Object.keys(s).forEach((I) => {
    if (typeof s[I] == "number") {
      const b = s[I];
      b < 0 ? w[I] = b : w[I] = i[I] ? b * i[I] : 0;
    }
  }), e.score = w;
  let x = 0;
  for (const I of Object.values(e.score))
    typeof I == "number" && (x += I);
  if (e.score.total = x, e.score.total < 0 && (e.score.total = 0), isNaN(e.score.total)) throw new Error("score is not a number");
  return e.score.cutDirection = l, e.score.myStripParent = f, e.score.myStripDirection = h, e.score.myPhase = m, e.score.total > (e?.bestScore?.total || 0) && e.setBestScore(e), !0;
}
function as(e, t, i, n, a) {
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
  "edge" in s && i.edge && (s.edge = Sr(e, t)), "fill" in s && i.fill && (s.fill = rs(
    e,
    t,
    t?.saw?.efficiencyOptions?.primaryCompression ?? "w"
  )), "compression" in s && i.compression && (s.compression = ns(
    e,
    t,
    t?.saw?.efficiencyOptions?.primaryCompression ?? "w"
  ));
  let r = 0, l = 0;
  const o = {
    lr: !1,
    rl: !1,
    bt: !1,
    tb: !1
  };
  for (const u of n) {
    const h = os(
      e,
      u,
      t,
      {
        contact: !0,
        cohesion: !!i.cohesion,
        alignment: !!i.alignment,
        similarDimensions: !!i.similarDimensions
      }
    );
    h.type && (o[h.type] = !0, i.alignment && h.alignment && (l += h.alignment.positiveAlignments, r += h.alignment.possibleAlignments), i.cohesion && (s.cohesion += h.cohesion), i.similarDimensions && (s.similarDimensions += h?.similarDimensions ? h.similarDimensions : 0));
  }
  s.similarDimensions /= 4, r === 0 ? s.alignment = 0 : s.alignment = l / r, i.exactFit && (e.l === t.l || e.w === t.w) && (s.exactFit = 1), i.area && (s.area = fr(e, n, t));
  const c = { ...s };
  Object.keys(s).forEach((u) => {
    if (typeof s[u] == "number") {
      const h = s[u];
      c[u] = i[u] ? h * i[u] : 0;
    }
  }), e.score = c;
  let f = 0;
  for (const u of Object.values(e.score))
    typeof u == "number" && (f += u);
  if (e.score.total = f, isNaN(e.score.total))
    throw new Error("thisShape.score.total is not a number: " + JSON.stringify(e.score));
  e.score?.total > (e?.bestScore?.total || 0) && e.setBestScore(e, a);
}
function xe(e, t, i) {
  const n = this.shapeList.reduce(
    (P, N) => N.added ? P : ++P,
    0
  );
  let a, s, r;
  const l = t.getStock;
  if (!l) return !1;
  const o = e, c = V(t) ? Se(o, l) : e.filter((P) => P.added);
  let f;
  c.length && (f = ur(c, l)), f && !f.getPriority(l) && (f = null);
  const u = c.length, h = Math.max(...c.map((P) => P.x + P.l)), p = Math.max(...c.map((P) => P.y + P.w));
  let m = 0, y = null, d = null, S;
  if (i || (i = e.find((P) => P.x === (t.x || 0) && P.y === (t.y || 0))), !i) return !1;
  const g = i.area;
  let w = null;
  const x = t.area, I = c.reduce((P, N) => P + N.area, 0);
  if (V(t)) {
    if (t.cutType === "efficiency" ? (S = t.primaryCompression ?? "w", m = lt(
      c,
      S,
      l.bladeWidth
    ), w = i?.bestScore?.total, m = m / t[S === "l" ? "l" : "w"]) : (S = t.cutPreference === "l" ? "x" : "y", m = lt(
      c,
      S,
      l.bladeWidth
    ), m = m / t[S === "x" ? "l" : "w"]), t.cutType === "guillotine" && (a = e.filter((P) => P.added && Xt(P) === 1).length), r = I / x, we() && E([() => $(r).to.be.lessThanOrEqual(1)]), t?.saw?.stockType === "roll") {
      const P = mt(c, "x");
      s = P.x + P.l;
    }
  } else if (Y(t)) {
    S = l.cutPreference === "l" ? "x" : "y", m = lt(
      c,
      S,
      l.bladeWidth
    ), m = m / t[S === "x" ? "w" : "l"];
    const P = B(l.cutPreference), N = P === "l" ? "x" : "y";
    if (y = l[P] - (i[P] + i[N] + l.bladeWidth), d = i[P], t.cutPreference === "flex")
      throw new Error("cut preference is set to flex, it should be l or w at this point");
    r = I / x;
  } else
    r = I / x;
  const b = c.reduce((P, N) => P + (N?.bestScore?.total ?? 0), 0), v = Q(e, t).length + u, L = Q(e, l).length + u, O = c.map((P) => P.compress()), q = {
    type: this.tidyStrategy ? "tidy" : "algo",
    stockID: l.id,
    stock: l,
    container: t,
    firstShape: i,
    firstShapeRotation: i.rot,
    topPriorityShape: f ? f.id : null,
    cutPreference: l.cutPreference,
    cutType: l.saw.cutType,
    segmentCutDirection: Y(t) ? t.cutDirection : null,
    // Result contains individual shapes (groups have already called placeMyShapes)
    shapes: O,
    score: {
      efficiency: r,
      totalShapeArea: I,
      totalShapesPlaced: u,
      totalShapeScore: b,
      firstRowLength: m,
      // firstShapeFill,
      firstShapeArea: g,
      firstShapeScore: w,
      containerAvailableShapes: v,
      stockAvailableShapes: L,
      totalUnplacedShapes: n,
      rollLength: s || null,
      maxX: h,
      maxY: p,
      stripShapes: a || null,
      stripSize: d || null,
      remainingStripSpace: y || null,
      uniqueStock: this.uniqueStock.length
    }
  }, C = O.filter((P) => P.type === "position");
  return C.length > 0 && console.log(`[scoreContainer] Result contains ${C.length} position groups: ${C.map((P) => P.id).join(", ")}`), q;
}
function Ir(e, t, i = "sheet") {
  if (e && e?.length) {
    if (e.length === 1) return e[0];
    switch (e = e.filter((n) => n.score?.efficiency), i) {
      case "sheet":
        switch (t) {
          case "tidy":
            e.sort(Tr.bind(this));
            break;
          case "strip":
            e.sort(Ci.bind(this));
            break;
          case "guillotine":
          case "beam":
            e.sort(Pr.bind(this));
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
            e.sort(Cr);
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
  if (E([() => $(e.score).to.exist, () => $(t.score).to.exist]), !e.score || !t.score) return 0;
  const i = e.score.totalShapesPlaced === e.score.containerAvailableShapes || t.score.totalShapesPlaced === t.score.containerAvailableShapes, n = e.score.stockAvailableShapes === e.score.totalShapesPlaced, a = t.score.stockAvailableShapes === t.score.totalShapesPlaced, r = (e?.stock?.saw?.cutPreference || t?.stock?.saw?.cutPreference || "l") === "l" ? "w" : "l", l = e?.stock?.l || t?.stock?.l, o = e?.stock?.w || t?.stock?.w, c = e?.stock?.saw?.bladeWidth || t?.stock?.saw?.bladeWidth || 0, f = r === "w" ? o - c : l - c, u = e.firstShape && (r === "w" ? e.firstShape.w > f * 0.5 : e.firstShape.l > f * 0.5), h = t.firstShape && (r === "w" ? t.firstShape.w > f * 0.5 : t.firstShape.l > f * 0.5), p = e.firstShape?.orientationLock && e.firstShape.orientationLock !== r, m = t.firstShape?.orientationLock && t.firstShape.orientationLock !== r, d = ((C, P) => {
    const U = Math.abs(C - P);
    return i ? Math.min(0.35, 0.2 + U * 0.3) : U > 0.5 ? Math.min(0.4, 0.2 + U * 0.2) : 0.2;
  })(e.score.efficiency, t.score.efficiency), S = (C, P) => {
    const N = C.score.stockAvailableShapes - C.score.totalShapesPlaced;
    if (N <= 0) return !0;
    let U;
    r === "w" ? U = o - C.score.maxY - (N > 0 ? c : 0) : U = l - C.score.maxX - (N > 0 ? c : 0);
    const M = r === "l" ? U : l - C.score.maxX, G = r === "w" ? U : o - C.score.maxY;
    if (M <= 0 || G <= 0)
      return 0;
    const X = new Re({
      l: M,
      w: G,
      saw: C?.stock?.saw,
      stockType: C?.stock?.stockType
    });
    if (P.firstShape) {
      const K = ee(P.firstShape, X, null, C?.stock?.saw), le = r === "w" && P.firstShape.w > f * 0.5 || r === "l" && P.firstShape.l > f * 0.5;
      if (K && !le && N > 1) {
        const Te = f * 0.7;
        return U >= Te;
      }
      return K;
    }
    return U >= f * 0.3;
  }, g = (C, P) => {
    if (n && a || !n && !a) return 0;
    if (C.score.stockAvailableShapes === C.score.totalShapesPlaced)
      return 0.1;
    if (!S(C, P)) {
      const M = C.score.stockAvailableShapes - C.score.totalShapesPlaced;
      return -Math.min(0.3, 0.1 + M * 0.05);
    }
    return 0;
  }, w = u && p, x = h && m;
  if (w && !x)
    return S(t, e) && t.score.efficiency > e.score.efficiency + d ? 1 : -1;
  if (x && !w)
    return S(e, t) && e.score.efficiency > t.score.efficiency + d ? -1 : 1;
  if (u && !h)
    return S(t, e) && t.score.efficiency > e.score.efficiency + d ? 1 : -1;
  if (h && !u)
    return S(e, t) && e.score.efficiency > t.score.efficiency + d ? -1 : 1;
  if (i) {
    if (n && !a)
      return t.score.efficiency > e.score.efficiency + 0.15 ? 1 : -1;
    if (a && !n)
      return e.score.efficiency > t.score.efficiency + 0.15 ? -1 : 1;
  }
  const I = e.score.efficiency + g(e, t), b = t.score.efficiency + g(t, e);
  if (I > b) return -1;
  if (I < b) return 1;
  const v = e.score.stockAvailableShapes - e.score.totalShapesPlaced, L = t.score.stockAvailableShapes - t.score.totalShapesPlaced;
  let O, q;
  if (r === "w" ? (O = o - e.score.maxY - (v > 0 ? c : 0), q = o - t.score.maxY - (L > 0 ? c : 0)) : (O = l - e.score.maxX - (v > 0 ? c : 0), q = l - t.score.maxX - (L > 0 ? c : 0)), v > 0 || L > 0) {
    const C = r === "l" ? O : l - e.score.maxX, P = r === "w" ? O : o - e.score.maxY, N = r === "l" ? q : l - t.score.maxX, U = r === "w" ? q : o - t.score.maxY, M = C > 0 && P > 0, G = N > 0 && U > 0;
    if (M && !G) return -1;
    if (G && !M) return 1;
    if (!M && !G)
      return 0;
    const X = new Re({
      l: C,
      w: P,
      saw: e?.stock?.saw,
      stockType: e?.stock?.stockType
    }), K = new Re({
      l: N,
      w: U,
      saw: t?.stock?.saw,
      stockType: t?.stock?.stockType
    });
    if (e.firstShape && (r === "w" && e.firstShape.w > f * 0.5 || r === "l" && e.firstShape.l > f * 0.5)) {
      const le = v > 0 && ee(e.firstShape, X, null, e?.stock?.saw), Te = L > 0 && ee(e.firstShape, K, null, t?.stock?.saw);
      if (le && !Te) return -1;
      if (Te && !le) return 1;
    }
    if (t.firstShape && (r === "w" && t.firstShape.w > f * 0.5 || r === "l" && t.firstShape.l > f * 0.5)) {
      const le = v > 0 && ee(t.firstShape, X, null, e?.stock?.saw), Te = L > 0 && ee(t.firstShape, K, null, t?.stock?.saw);
      if (le && !Te) return -1;
      if (Te && !le) return 1;
    }
  }
  if (v > 0 && L > 0) {
    const C = f / 2;
    if (O < C && q >= C)
      return 1;
    if (q < C && O >= C)
      return -1;
  }
  if (i) {
    const C = e.score.maxX * e.score.maxY, P = t.score.maxX * t.score.maxY;
    if (C < P) return -1;
    if (C > P) return 1;
  }
  return e.shapes?.length < t.shapes?.length ? -1 : e.shapes?.length > t.shapes?.length ? 1 : e?.firstShape?.area > t?.firstShape?.area ? -1 : e?.firstShape?.area < t?.firstShape?.area ? 1 : 0;
}
function Tr(e, t) {
  return e.score[this.config.successMetric] > t.score[this.config.successMetric] ? -1 : e.score[this.config.successMetric] < t.score[this.config.successMetric] ? 1 : e.score.firstShapeFill > t.score.firstShapeFill ? -1 : e.score.firstShapeFill < t.score.firstShapeFill ? 1 : e.score.firstRowLength > t.score.firstRowLength ? -1 : e.score.firstRowLength < t.score.firstRowLength ? 1 : e.score.totalShapeScore > t.score.totalShapeScore ? -1 : e.score.totalShapeScore < t.score.totalShapeScore ? 1 : 0;
}
function ls(e, t) {
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
function Cr(e, t) {
  return e.score.efficiency > t.score.efficiency ? -1 : e.score.efficiency < t.score.efficiency ? 1 : e.type !== "evo" && t.type === "evo" ? -1 : e.type === "evo" && t.type !== "evo" ? 1 : e.shapes?.length < t.shapes?.length ? -1 : e.shapes?.length > t.shapes?.length ? 1 : e.score.totalShapeScore > t.score.totalShapeScore ? -1 : e.score.totalShapeScore < t.score.totalShapeScore ? 1 : be.ID(e.stock, t.stock);
}
function Pr(e, t) {
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
  const i = ls(e, t);
  return i !== 0 ? i : e.score.firstShapeArea > t.score.firstShapeArea ? -1 : e.score.firstShapeArea < t.score.firstShapeArea ? 1 : be.ID(e.stock, t.stock);
}
function vr(e, t) {
  const i = e.score?.totalUnplacedShapes, n = t.score?.totalUnplacedShapes;
  if (e.stock.id !== t.stock.id && (i === 0 || n === 0) && !(i === 0 && n === 0)) {
    const s = i === 0 ? e : t, r = i === 0 ? t : e, l = s.stock, o = r.stock, c = l.area - s.score.totalShapeArea, f = o.area;
    return s.score.totalShapeArea - r.score.totalShapeArea < f && f < c ? o.id === e.stock.id ? -1 : 1 : o.id === e.stock.id ? 1 : -1;
  }
  if (e.score[this.config.successMetric] > t.score[this.config.successMetric])
    return -1;
  if (e.score[this.config.successMetric] < t.score[this.config.successMetric])
    return 1;
  const a = ls(e, t);
  return a !== 0 ? a : e.type !== "evo" && t.type === "evo" ? -1 : e.type === "evo" && t.type !== "evo" ? 1 : e.score.firstShapeArea > t.score.firstShapeArea ? -1 : e.score.firstShapeArea < t.score.firstShapeArea ? 1 : e.score.totalShapeScore > t.score.totalShapeScore ? -1 : e.score.totalShapeScore < t.score.totalShapeScore ? 1 : be.ID(e.stock, t.stock);
}
function cs(e) {
  if (!e) return e;
  const t = { ...e };
  return e.stock && (t.stock = e.stock), e.resultKey !== "bestPartialResult" && e.firstShape && "toData" in e.firstShape && (t.firstShape = e.firstShape.toData(Ae.Compressed)), e.shapes?.length && (t.shapes = e.shapes.map((i) => i && "toData" in i ? i.toData(Ae.Compressed) : i)), "stripShapes" in e && e.stripShapes?.length && (t.stripShapes = e.stripShapes.map((i) => i && "toData" in i ? i.toData(Ae.Compressed) : i)), "root" in e && e.root && "toData" in e.root && (t.root = e.root.toData(Ae.Compressed)), "container" in e && e.container && "toData" in e.container && (t.container = e.container.toData(Ae.Compressed)), t;
}
function _t(e, t) {
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
  const n = this[i], a = e?.firstShape;
  if (we()) {
    const r = e.score.efficiency, l = D(a) ? `${a.id}: [${a?.shapes?.map((c) => c.parentId).join(", ")}]` : a?.id, o = [
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
        value: a?.rot ?? "N/A"
      },
      {
        property: "Efficiency",
        value: r.toFixed(2)
      },
      {
        property: "Strip batch",
        value: e?.stripShapeBatch ?? "N/A"
      },
      {
        property: "Shapes",
        value: e?.shapes?.map((c) => c.id).join() ?? "N/A"
      }
    ];
    T("results", `Recording ${i}`, null, o);
  }
  let s = e;
  if (n && (s = Ir.call(this, [e, n], t || e.stock.cutType, e.stock?.saw?.stockType), s || (T("results", "WARNING: findWinner returned undefined, using current result as winner"), s = e), T("results", `winner for stock ${s.stock.id} eff. ${s.score.efficiency}, firstShape [${a?.id || "N/A"}], rot ${a?.rot || "N/A"}, batch ${s?.stripShapeBatch ?? "N/A"}`)), !n || !s?.processed) {
    e.processed = !0;
    const r = cs(s);
    this[i] = r;
  }
  Er(s.shapes, s.stock);
}
function Er(e, t) {
  if (!e?.length) return;
  const i = e.filter((n) => D(n) && n.type !== "user");
  E([
    () => $(i.every((n) => D(n))).toBe(!0),
    () => $(i.every((n) => n.type !== "user")).toBe(!0)
  ], "expandTemporaryGroups: All filtered groups should be temporary (non-user) groups");
  for (const n of i) {
    const a = n.shapes || [], s = n.type;
    if (n.added)
      try {
        n.placeMyShapes(t), E([
          () => $(a.every((r) => r.group?.addedAsGroup === n)).toBe(!0)
        ], `expandTemporaryGroups: All children of ${s} group should have addedAsGroup reference`);
      } catch (r) {
        T("errors", `Error placing shapes for temporary group ${n.id} during expansion: ${r.message}`);
      }
    n.destroy(), E([
      () => $(a.every((r) => r.group?.reference === null || r.group?.reference === void 0)).toBe(!0),
      () => $(a.every((r) => r.group?.inGroup === !1)).toBe(!0)
    ], `expandTemporaryGroups: Children of ${s} group should be released after destroy`);
  }
}
function Ge({
  bestResult: e,
  shapeList: t,
  relevantStock: i = [],
  stockList: n = [],
  resetShapes: a = null
}) {
  T("results", `updating shapes from ${e.resultKey} / ${e.type} - stock ${e.stock.id}, FS: ${e.firstShape.id}`), i.length && i.filter((c) => c.autoId !== e?.stock?.autoId).forEach((c) => {
    const f = t.filter((u) => u.added && u?.stock?.autoId === c.autoId);
    f.length && (a ? a(f, !1, !0, !1) : f.forEach((u) => {
      u.added = !1, u.reset();
    }));
  });
  const s = [];
  let r = n.length ? n.find((c) => c.autoId === e.stock?.autoId) : null;
  if (r && e.stock && e.stock.used && (r.used = !0), !r && e.stock && (r = e.stock, r.saw && !Oe(r.saw))) {
    T("results", `⚠️  Found serialized saw in bestResult.stock ${r.autoId}, attempting to restore from stockList`);
    const c = n.find((f) => f.autoId === r.autoId || f.parentId === r.parentId && Oe(f.saw));
    c && Oe(c.saw) ? (T("results", `✅ Restored live saw instance from stock ${c.autoId}`), r.saw = c.saw) : T("results", `❌ Could not restore live saw instance for stock ${r.autoId}`);
  }
  r || (r = e.stock);
  for (const c of e.shapes)
    if (Jt(c) || As(c)) {
      const f = t.find((u) => u.autoId === c.autoId);
      if (!f) {
        we() && (console.warn(`[updateShapeListFromBestResult] Shape ${c.autoId || c.id} from result not found in shapeList!`), console.warn(`  Available autoIds in shapeList: ${t.slice(0, 5).map((u) => u.autoId).join(", ")}...`));
        continue;
      }
      we() && (F(f) || console.warn(`Shape ${c.autoId} in shapeList is not a live instance!`)), f.update({ ...c, validationMode: "none" }), F(f) && c.group && c.group.inGroup !== void 0 && (f.group.inGroup = c.group.inGroup), f.stock = r, s.push(f);
    }
  E([
    () => $(e.shapes.every((c) => {
      if (!Jt(c)) return !0;
      const f = t.find((u) => u.autoId === c.autoId);
      return !(!f || !f.added || f.x !== c.x || f.y !== c.y || f.l !== c.l || f.w !== c.w);
    }), "best shape not found, not added, or not correctly updated").to.be.true
  ]), we() && (s.every((f) => t.find((u) => u === f)) || console.warn("Some updated shapes are not exact references from shapeList - possible instance copying!")), Mi({
    shapes: s
  }, "updateShapeListFromBestResult");
  let l = [];
  const o = e.shapes.filter((c) => Ls(c));
  return T("results", `Best result contains ${e.shapes.length} total items`), T("results", `Found ${o.length} serialized groups to recreate:`), o.forEach((c) => {
    T("results", `  - Group ${c.id}: type=${c.type}, shapes=${c.shapes?.length || 0}, added=${c.added}, x=${c.x}, y=${c.y}`);
  }), o.length > 0 && (T("results", `Recreating ${o.length} groups from bestResult`), l = Ms(o, t, r), T("results", `Successfully recreated ${l.length} groups:`), l.forEach((c) => {
    T("results", `  - Group ${c.id}: type=${c.type}, shapes=${c.shapes?.length || 0}, added=${c.added}, x=${c.x}, y=${c.y}`);
  }), l.forEach((c) => {
    c.shapes && Array.isArray(c.shapes) && (c.shapes.forEach((u) => {
      F(u) && (u.group.reference = c, u.group.inGroup = !0, c.added && (u.group.addedAsGroup = c));
    }), E([
      () => $(c.shapes.every((u) => !F(u) || u.group?.reference === c)).toBe(!0)
    ], `updateShapeListFromBestResult: All children of group ${c.id} (type=${c.type}) should have correct reference`), c.added && E([
      () => $(c.shapes.every((u) => !F(u) || u.group?.addedAsGroup === c)).toBe(!0),
      () => $(c.shapes.every((u) => !F(u) || typeof u.group?.addedAsGroup != "string")).toBe(!0)
    ], `updateShapeListFromBestResult: addedAsGroup should be Group reference for group ${c.id} (type=${c.type})`));
    const f = c.added && typeof c.placeMyShapes == "function" && c.type !== "position";
    if (c.added && c.type === "position" && E([
      () => $(f).toBe(!1)
    ], `updateShapeListFromBestResult: Position group ${c.id} should NOT call placeMyShapes`), f)
      try {
        c.placeMyShapes(r);
      } catch (u) {
        throw console.error("[ERROR] placeMyShapes failed for group " + c.id + ":", u.message), console.error(`  Group details: type=${c.type}, x=${c.x}, y=${c.y}, rot=${c.rot}`), console.error("  Child shapes:"), c.shapes?.forEach((h) => {
          console.error(`    ${h.id}: added=${h.added}, x=${h.x}, y=${h.y}, rot=${h.rot}, l=${h.l}, w=${h.w}`);
        }), u;
      }
    we() && (c.shapes?.forEach((u) => {
      const h = t.find((p) => p.autoId === u.autoId);
      h !== u ? (console.error(`[ERROR] Group ${c.id} child shape ${u.id} is NOT the same instance as in shapeList!`), console.error(`  Group shape: added=${u.added}, x=${u.x}, y=${u.y}`), console.error(`  shapeList shape: added=${h?.added}, x=${h?.x}, y=${h?.y}`)) : u.group?.reference !== c && (console.error(`[ERROR] Group ${c.id} child shape ${u.id} has incorrect group.reference!`), console.error(`  Expected: ${c.id}, Got: ${u.group?.reference?.id || "null"}`));
    }), T("results", `Successfully recreated, placed, and linked ${l.length} groups`));
  })), { updatedShapes: s, groups: l };
}
async function He(e, t, i, n = null) {
  if (E([
    () => $(V(t)).to.be.true,
    () => {
      if (i.length) return $(F(i[0]) || de(i[0])).to.be.true;
    }
  ]), E([() => $(se(i), "duplicates found").to.be.false]), Ki(), n || (n = us.call(this, t, i)), !n) throw new Error("no root segment created");
  if (this.config.sample.enable) {
    if (await qt.call(
      this,
      e,
      t,
      n
    ), e.secondRun || !this.bestResult) return;
    Ge({
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
    Ge({
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
  const a = Se(this.shapeList, i);
  Br.call(
    this,
    _t(this.bestResult, this.stockList),
    a
  ) && await Rr.call(
    this,
    e,
    a,
    t,
    i,
    n
  ), this.bestResult.shapes.forEach((r) => {
    const l = this.shapeList.find((o) => o.id === r.id);
    l && (r.x = l.x, r.y = l.y, r.placementOrder = l.placementOrder);
  });
}
async function Dr(e, t, i) {
  E([
    () => $(V(t)).to.be.true,
    () => {
      if (i.length) return $(F(i[0])).to.be.true;
    }
  ]), t.saw.cutPreference = "l";
  const n = us.call(this, t, i);
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
  if (!this.config.guillotine.stripShapes.allocation || (E([
    () => $(V(t)).to.be.true,
    () => $(i.length ? F(i[0]) : !0).to.be.true,
    () => $(Y(n)).to.be.true
  ]), t?.saw?.stockType === "roll")) return !1;
  const a = Yr.call(this, n, this.uniqueStock, this.stockList);
  if (a === !1) return !1;
  for (let s = 0; s < a; s++)
    this.resetShapes(i), n.shapes = i, E([
      () => $(se(n.shapes, `root segment batch ${s} stock ${t.id}`), "duplicates found in root segment").to.be.false,
      () => $(i.length).to.equal(n.shapes.length),
      () => $(i.some((r) => Ue(r) || Z(r)), "groups exist in new strip shape batch calculation").to.be.false
    ]), T("guillotine", `running strip shape batch ${s} for stock ${t.id}`), await Vt.call(
      this,
      e,
      t,
      n,
      s
    ), E([() => $(se(n.shapes), "duplicates found").to.be.false]);
  return !0;
}
async function qt(e, t, i) {
  T("guillotine", `running basic first shape sample for stock ${t.id}`), E([
    () => $(V(t)).to.be.true,
    () => $(Y(i)).to.be.true,
    () => $(i?.shapes?.length).to.be.greaterThan(0)
  ]), await Vt.call(this, e, t, i);
}
async function Vt(e, t, i, n = null, a = null, s = null) {
  if (E([
    () => $(V(t)).to.be.true,
    () => $(Y(i)).to.be.true,
    () => {
      if (a) return $(F(a)).to.be.true;
      if (n !== null) return $(n).to.be.a("number");
      if (s !== null) return $([0, 1].includes(s)).to.be.true;
    }
  ]), n === null)
    await it.call(
      this,
      e,
      t,
      i,
      a,
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
async function Rr(e, t, i, n, a) {
  E([
    () => $(V(n)).to.be.true,
    () => {
      if (i.length) return $(F(i[0]) || de(i[0])).to.be.true;
      if (t.length) return $(F(t[0] || de(i[0]))).to.be.true;
    }
  ]), T("guillotine", `running refinement for stock ${n.id}`);
  try {
    await Ar.call(
      this,
      e,
      t,
      i,
      n,
      a
    );
  } catch (s) {
    console.error("issue with runSecondPass", s.message);
  }
}
async function Ar(e, t, i, n, a) {
  if (E([
    () => $(V(n)).to.be.true,
    () => {
      if (i.length) return $(F(i[0]) || de(i[0])).to.be.true;
      if (t.length) return $(F(t[0]) || de(i[0])).to.be.true;
    }
  ]), !this.config.guillotine.secondPass || !this.saw?.guillotineOptions?.headCuts) return !1;
  T("guillotine", `running second pass for stock ${n.id}`), await Nr.call(this, n, i, t, a);
  const s = Se(i, n), r = xe.call(
    this,
    this.shapeList,
    n
  );
  r && n.id === _t(this.bestResult, this.stockList)?.id && s.length - t.length > 0 && (T("guillotine", `runSecondPass added ${s.length - t.length} shape(s) to stock ${n.id}, new total ${s.length}`), r.secondPass = !0, await ae.call(this, r));
}
function Ft(e, t) {
  const i = [];
  if (this.groupList && this.groupList.length > 0)
    for (const s of this.groupList)
      s.added ? i.push(s) : s.reset();
  for (let s = e.length; s--; ) {
    const r = e[s];
    D(r) && e.splice(s, 1), r.reset();
  }
  this.groupList && (this.groupList.length = 0, this.groupList.push(...i)), this.counters.placement = 0, this.bestPartialResult = null, Ki(), t.reset(e);
  const n = t.shapes.filter((s) => F(s)), a = t.shapes.filter((s) => D(s));
  T("reset", "[RESET] RESET ROOT SEGMENT BETWEEN CALCULATIONS", null, [
    {
      type: "Root shapes",
      count: n.length,
      added: n.filter((s) => s.added).length,
      ids: n.map((s) => s.id).join(", ")
    },
    {
      type: "Root groups",
      count: a.length,
      added: a.filter((s) => s.added).length,
      ids: a.map((s) => s.id).join(", ")
    }
  ]);
}
async function Lr(e, t, i, n) {
  E([
    () => $(V(t)).to.be.true,
    () => $(Y(i)).to.be.true
  ]);
  const a = Ie(i.shapes, !1, !0), s = this.stockList.findIndex((f) => f.id === t.id);
  let r = null;
  s > 0 && (r = this.stockList[s - 1]);
  const l = B(t.cutPreference);
  let o = [], c = [];
  if (i.l === t.l && i.w === t.w ? s > 0 && (o = Se(this.shapeList, r).filter((f) => Rt(f))) : c = Se(this.shapeList, t).filter((f) => Rt(f)), o?.length || c?.length) {
    const f = l === "l" ? "x" : "y";
    o.sort((p, m) => p[f] - m[f]), c.sort((p, m) => p[f] - m[f]);
    const u = o.length ? o[o.length - 1] : c[c.length - 1], h = a.filter((p) => u[l] === p.w || u[l] === p.l);
    if (h?.length) {
      for (let p = 0; p < h.length; p++) {
        const m = h[p];
        if (p > 1 && h[p - 1].isIdentical(h[p]))
          continue;
        ke(m, 0, t);
        let y;
        u[l] === m[l] ? y = 0 : y = 1;
        const d = await fs.call(
          this,
          e,
          m,
          i,
          y
        );
        if (d?.length)
          for (let S = d.length; S--; ) {
            const g = d[S];
            await ae.call(this, g, "strip");
          }
        this.resetShapes(i.shapes);
      }
      return !(!n || n?.length);
    }
  }
  return !1;
}
async function it(e, t, i, n = null, a = null, s = null) {
  if (i.type === "root" && !e?.secondPass && (t.used = !1, this.counters.placement = 0), !i.shapes?.length) return;
  E([
    () => $(V(t)).to.be.true,
    () => $(Y(i)).to.be.true,
    () => $(n ? F(n) : !0).to.be.true,
    () => $(n ? [0, 1].includes(a) : !0).to.be.true,
    () => $(s !== null ? typeof s == "number" : !0).to.be.true,
    () => $(s !== null ? n === null : !0).to.be.true,
    () => $(a !== null ? [0, 1].includes(a) : !0).to.be.true,
    () => $(i.shapes.every((u) => !Ue(u), "no segment groups should exist at this point")).to.be.true
  ]);
  const r = typeof s == "number";
  let l = !0;
  if (t.saw.guillotineOptions?.strategy === "time" && (l = !await Lr.call(
    this,
    e,
    t,
    i
  )), l)
    if (At(i))
      if (r) {
        let u = jr(i.shapes, s, t);
        if (u.sort((m, y) => m.guillotineState.getStripShapeBatchData(s).order - y.guillotineState.getStripShapeBatchData(s).order), T("guillotine", `strip shape candidates ${u.map((m) => m.id).join("|")}`), E([
          () => $(u.find((m) => m.guillotineState.getStripShapeBatchData(s).stockId !== i.getStock.autoId), "found strip shapes in allocatedStripShape from another stock").to.be.undefined,
          () => $(se(u), "duplicate shapes found in stripShapeCandidates").to.false,
          () => $(u.find((m) => D(m) && !Z(m)), "found groups in allocatedStripShape").to.be.undefined,
          () => $(i.shapes.filter((m) => m.added).length === 0, `added shapes found in segment ${i.id}`).to.be.true
        ]), !u.length)
          return it.call(
            this,
            e,
            t,
            i
          );
        const h = B(t.cutPreference);
        if (u = u.filter((m) => {
          if (D(m)) return !0;
          const y = Ei(m, s, t, !1);
          return !ve(m, y, t) || (Ei(m, s, t, !0), !Os(m, y, t)) ? !1 : (E([
            () => $(m.rot, `candidates ${m.id} rotation (${m.rot}) incorrect for batch (${y})`).equal(y)
          ]), !0);
        }), this.config.groups.guillotine.strips && u.length > 1) {
          const m = i.shapes.filter((y) => Z(y) && y.shapes.some((d) => u.includes(d)));
          m.length > 0 ? (T("guillotine", `Reusing ${m.length} existing strip groups`), u = m) : u = Xr.call(this, s, h, t, i, u);
        }
        if (u.sort(function(y, d) {
          return d[h] !== y[h] ? d[h] - y[h] : d[t.cutPreference] !== y[t.cutPreference] ? d[t.cutPreference] - y[t.cutPreference] : y.autoId.localeCompare(d.autoId, void 0, { numeric: !0 });
        }), n = u[0], !n) throw new Error("no firstShape found");
        T("guillotine", `firstShape for segment ${i.id} is ${n.id}`);
        const p = n.guillotineState.getStripShapeBatchData(s);
        if (!p) throw new Error("no fs batch found");
        E([() => $(p.stockId).equal(i.getStock.autoId)]), n.firstShape.isFirstShape = !0, a = p.rot, E([() => $([0, 1].includes(p.rot)).to.be.true]), await Gt.call(this, {
          options: e,
          fs: n,
          fsRotation: a,
          segment: i,
          stripShapeBatch: s,
          stripShapeCandidates: u
        });
      } else
        n && a !== null ? await Gt.call(this, {
          options: e,
          fs: n,
          fsRotation: a,
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
  const c = this.bestPartialResult.firstShape;
  Ge({
    bestResult: this.bestPartialResult,
    shapeList: this.shapeList,
    stockList: this.stockList,
    resetShapes: this.resetShapes?.bind(this)
  }), ar(i, !0), Oi(c) && i.shapes.push(c), i.shapes = qi(i.shapes, c), E([
    () => $(i.shapes.filter((u) => D(u)).every((u) => Z(u)), "number of groups in segment does not equal the number of strip shape groups (others should have been removed)").to.be.true,
    () => Li(i.shapes, "segmentCalculations after removeGroupsFromSegment"),
    () => $(i.shapes.every((u) => !Ue(u)), "found groups in segment after removal").to.be.true
  ]);
  const f = Q(this.shapeList);
  if (this.bestPartialResult = null, f.length || this.config.secondRun.enabled) {
    const u = Fr.call(
      this,
      i,
      c
    );
    if (u?.length) {
      T("cuts", `Created ${u.length} new segments, unplaced shapes: ${f.length}`);
      for (const h of u) {
        if (this.bestPartialResult = null, !h.shapes.length) {
          h.offcut = !0;
          continue;
        }
        h.shapes = h.shapes.filter((p) => !p.added), r && !At(h) && (h.shapes = h.shapes.filter((p) => !p.guillotineState.isInStripShapeBatch(s))), await it.call(
          this,
          e,
          t,
          h,
          null,
          null,
          s
        );
      }
    }
  }
  if (i.type === "root") {
    i.shapes = i.shapes.map((m) => D(m) ? m : this.shapeList.find((d) => d.autoId === m.autoId) || m);
    const u = xe.call(
      this,
      this.shapeList,
      t,
      c
    );
    if (!u) throw new Error("Unable to score stock");
    if (u.stripShapeBatch = s, u.root = i, !u.score.efficiency) return;
    const h = this.shapeList.filter((m) => !m.group?.inGroup && !D(m) && m.stock?.id === t.id);
    Fi(h).length > 0, s !== null ? u.type = "allocated strips" : u.type = "basic", await ae.call(this, u);
  }
}
async function Gt({
  options: e = null,
  fs: t = null,
  fsRotation: i = null,
  segment: n = null,
  stripShapeBatch: a = null,
  stripShapeCandidates: s = []
}) {
  if (!t || i === null || !n)
    throw new Error(`firstShapeSegmentCalculations requires firstShape, firstShapeRotation & segment:${t} ${i} ${n}`);
  const r = async (u, h = !0) => {
    let p;
    h ? (t.reset(), E([() => $(n.shapes.filter((m) => m.autoId === t.autoId).length, "too many first shapes in segmentShapes").to.equal(1)]), p = xe.call(
      this,
      n.shapes,
      u,
      t
    )) : p = xe.call(
      this,
      n.shapes,
      n,
      t
    ), p.score.totalShapesPlaced && await ae.call(this, p, "strip");
  };
  n.shapes = Mr.call(this, n, t, a), Hr.call(
    this,
    t,
    n,
    n.getStock,
    i
  ), t.placementOrder = this.counters.placement++, E([
    () => $(Y(n)).to.be.true,
    () => $(a !== null ? typeof a == "number" : !0).to.be.true,
    () => $(i !== null ? [0, 1].includes(i) : !0).to.be.true
  ]), t && E([
    //Accept all group types (segment, user, strip) as well as shapes
    () => $(F(t) || D(t), `first shape ${t.id} is not a shape or group`).to.be.true,
    () => $(t.added, `first shape ${t.id} added too soon`).to.be.true,
    //Only check rotation for shapes, not groups (groups cannot be rotated)
    () => $(D(t) || t.rot === i, `first shape ${t.id} rotation (${t.rot}) incorrect for (${i})`).to.be.true,
    () => $(k.lessThanOrEqualTo(t.l, n.l), `first shape ${t.id} longer than segment ${t.l} > ${n.l}`).to.be.true,
    () => $(k.lessThanOrEqualTo(t.w, n.w), `first shape ${t.id} wider than segment ${t.w} > ${n.w}`).to.be.true
  ]);
  const l = n.getStock, { success: o, firstShapeSegment: c, isHeadCut: f } = await Or.call(this, {
    fs: t,
    segment: n,
    stock: l,
    stripShapeBatch: a,
    stripShapeCandidates: s,
    options: e
  });
  return !(o === !1 && (await r(c), !f));
}
function Mr(e, t, i) {
  if (se(e.shapes)) {
    const s = /* @__PURE__ */ new Set();
    e.shapes = e.shapes.filter((r) => s.has(r.autoId) ? !1 : (s.add(r.autoId), !0));
  }
  const a = e.shapes.filter((s) => s.willItFit(e) ? !(e.type !== "root" && typeof i == "number" && s.getStripShapeBatchData(i) !== !1 && t.autoId !== s.autoId) : (T("cuts", `  Excluding ${s.autoId}: doesn't fit in segment`), !1));
  return T("cuts", `  Result: ${a.length} shapes selected for segment`), this.resetShapes(a, {
    keepScores: !1,
    removeGroups: !1,
    keepGuillotineData: !0,
    keepFirstShapeSampleRotations: !0
  }), a;
}
async function Or({
  fs: e,
  segment: t,
  stock: i,
  stripShapeBatch: n,
  stripShapeCandidates: a,
  forceNoHeadCut: s,
  options: r
}) {
  T("guillotine", `[createFirstShapeSegmentsPlaceShapesAndScore] Starting for segment ${t.id}, first shape ${e.id}`);
  const { offcuts: l, firstShapeSegment: o, isHeadCut: c, success: f } = await qr.call(this, { fs: e, segment: t, stock: i, stripShapeBatch: n, stripShapeCandidates: a, forceNoHeadCut: s, options: r });
  if (E([() => $(l.length, "too many offcuts generated").to.be.lessThanOrEqual(2)]), f === !1)
    return { success: !1, firstShapeSegment: o, isHeadCut: c };
  if (["near", "root"].includes(t.type) && o.l + i.saw.bladeWidth >= t.l && o.w + i.saw.bladeWidth >= t.w) {
    const g = [e], w = xe.call(this, g, o, e);
    return await ae.call(this, w, "strip"), { success: !0, firstShapeSegment: o, isHeadCut: c };
  }
  if (r.secondPass) {
    const { cuts: g } = Wt.call(
      this,
      {
        container: o,
        shapes: [e],
        forceNoHeadCut: s
      }
    ), { allShapesCut: w } = ir([e], g, o);
    if (!w) return { success: !1, firstShapeSegment: o, isHeadCut: c };
  }
  if (!l.length) return { success: !1, firstShapeSegment: o, isHeadCut: c };
  const u = o.cutDirection, h = l.find((g) => k.equalTo(g[u], o[u]));
  if (!h || h.l <= 0 || h.w <= 0) {
    T("cuts", `No next segment. Remaining shapes: ${t.shapes.length}`), F(e) && !t.shapes.find((w) => w.autoId === e.autoId) && t.shapes.unshift(e), t.shapes.length > 1 && await Bt.call(
      this,
      t.shapes,
      e,
      o || t
    );
    const g = xe.call(
      this,
      t.shapes,
      o,
      e
    );
    return await ae.call(this, g, "strip"), { success: !0, firstShapeSegment: o, isHeadCut: c };
  }
  const p = o.cutDirection;
  (t.type === "root" || t.type === "firstShape") && a.length === 1 && (h[p] = t[p], o[p] = t[p]), E([() => $(t.shapes.filter((g) => g.autoId === e.autoId).length, "too many first shapes in segmentShapes").to.equal(1)]), await Bt.call(
    this,
    t.shapes,
    e,
    o || t
  );
  const m = xe.call(
    this,
    t.shapes,
    o,
    e
  );
  await ae.call(this, m, "strip");
  const y = t.type === "root" ? t.shapes.filter((g) => Z(g)) : [];
  this.resetShapes(t.shapes, {
    keepScores: !1,
    removeGroups: !0,
    keepGuillotineData: !1,
    keepFirstShapeSampleRotations: !0
  });
  const d = new Set(t.shapes.map((g) => g.autoId)), S = y.filter((g) => !d.has(g.autoId));
  return t.shapes.push(...S), { success: !0, firstShapeSegment: o, isHeadCut: c };
}
async function qr({ fs: e, segment: t, stock: i, segmentShapes: n, stripShapeBatch: a, forceNoHeadCut: s, options: r }) {
  let l = !0, o, c = !1;
  !s && ts.call(this, t) && (c = Qi.call(this, i.saw, e, t), t.hasHeadCut = c);
  try {
    o = zr.call(
      this,
      e,
      c,
      t,
      i,
      n
    );
  } catch (u) {
    throw T("errors", `firstShapeSegment error, fs: ${e.autoId}, 'ssg: ${a}: ${u.message}`), new Error(`issue with createFirstShapeSegment ${u.message}`);
  }
  if (E([() => $(o[o.cutDirection]).to.equal(e[o.cutDirection])]), r?.secondPass) {
    const u = this.shapeList.filter((h) => h.added && h.stock.autoId === i.autoId && h.autoId !== e.autoId);
    if (Bi(o, u, i))
      return l = !1, { firstShapeSegment: o, offcuts: [], success: l };
  }
  const { offcuts: f } = Wt.call(
    this,
    {
      container: t,
      shapes: t.shapes,
      forceNoHeadCut: s
    }
  );
  return { firstShapeSegment: o, offcuts: f, isHeadCut: c, success: l };
}
async function ht(e, t, i = !1) {
  if (!this.config.sample.enable && i === !1) return !1;
  E([
    () => $(t.shapes.every((l) => F(l) || de(l)), "segment shapes contains groups").to.be.true
  ]);
  let n = [];
  if (t.shapes.length > 1) {
    const l = B(t.cutDirection), o = t[l], c = t.parentSegmentGroupShapes || /* @__PURE__ */ new Set(), f = t.shapes.filter((h) => !c.has(h.id)), u = qs(f, o * 0.05);
    if (this.config?.groups?.guillotine?.firstShape && u.length >= 2) {
      n = Gi({
        shapes: u,
        container: t,
        // Use segment as container
        targetSize: o,
        exact: !1,
        direction: l,
        // Pass Direction ('l' or 'w'), not GroupDirection
        config: this.config,
        counters: this.counters,
        preventDuplicates: !0,
        type: "firstShape",
        maxGroups: this.config.sample.guillotine
      });
      const h = /* @__PURE__ */ new Set();
      n = n.filter((p) => {
        const m = `${p.l}-${p.w}`;
        return h.has(m) ? !1 : (h.add(m), !0);
      }), T("groups", `[FIRST SHAPE GROUPS] created ${n.map((p) => p.id).join()} for segment ${t.id} `);
    }
  }
  let a = null;
  e.secondPass && (a = Se(
    this.shapeList,
    t.getStock
  ));
  const s = [...t.shapes], r = hs.call(
    this,
    "guillotine",
    [...s, ...n],
    t,
    a,
    null,
    i
  );
  if (!r.length) return !1;
  for (let l = 0; l < r.length; l++) {
    const o = r[l];
    if (T("guillotine", `[FIRST SHAPE] attempting first shape candidate ${o.id} for segment ${t.id}`), l > 1 && r[l - 1].isSameSize(r[l])) {
      o.firstShape.sampleRotations = [];
      continue;
    }
    this.resetShapes(s, {
      removeGroups: !1,
      keepFirstShapeSampleRotations: !0
    }), o.firstShape.isFirstShape = !0, Oi(o) && (t.shapes.find((u) => u.autoId === o.autoId) || t.shapes.push(o), t.shapes = qi(t.shapes, o)), E([
      () => $(se(t.shapes, `segment ${t.id} before running fs tests for ${o.id}`), "duplicates found in segment").to.be.false,
      () => $(se(t.shapes), "duplicates found").to.be.false
    ]), await fs.call(
      this,
      e,
      o,
      t
    ), E([() => $(se(t.shapes), "duplicates found").to.be.false]), o.firstShape.isFirstShape = !1, o.firstShape.sampleRotations = [], t.shapes = s, this.resetShapes(t.shapes, {
      removeGroups: !0,
      keepFirstShapeSampleRotations: !0
    });
    const c = t.shapes.filter((u) => F(u)), f = t.shapes.filter((u) => D(u));
    T("reset", `[RESET] RESET SEGMENT ${t.id} BETWEEN FIRST SHAPE CANDIDATES: ${o.id}`, null, [
      {
        type: "Shapes",
        count: c.length,
        added: c.filter((u) => u.added).length,
        ids: c.map((u) => u.id).join(", ")
      },
      {
        type: "Groups",
        count: f.length,
        added: f.filter((u) => u.added).length,
        ids: f.map((u) => u.id).join(", ")
      }
    ]);
  }
  return !0;
}
function us(e, t) {
  return new pe({
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
function Fr(e, t) {
  T("guillotine", `[SEG-CREATE] creating new segments for segment ${e.id}, stock ${e.stock.id} at (${e.x},${e.y}) ${e.l}x${e.w}, first shape ${t.id} at (${t.x},${t.y}) ${t.l}x${t.w}, cut direction ${e.cutDirection}`), D(t) && T("guillotine", `[SEG-CREATE] first shape ${t.id} is group with ${t.shapes?.length || 0} shapes`, [t.dimensions, t.coords]), E([
    () => $(F(t) || D(t), "first shape is not a shape or group").to.be.true,
    () => $(Y(e), "segment is not a segment class").to.be.true
  ]);
  const { offcuts: i } = Wt.call(this, {
    container: e,
    shapes: e.shapes
  });
  if (!i.length) return;
  T("guillotine", `[SEG-CREATE] All new segments for segment ${e.id}:`, null, i.map((o) => ({ id: o.id, x: o.x, y: o.y, l: o.l, w: o.w, dir: o.cutDirection })));
  const n = e.cutDirection === "l" ? "y" : "x", a = B(e.cutPreference), s = i.filter((o) => o[n] < t[n] + t[a]), r = i.find((o) => o[n] >= t[n] + t[a]);
  if (r && (r.rowSegment = !0, s.push(r)), !s?.length) return;
  const l = me(n);
  return s.sort((o, c) => o[n] < c[n] ? -1 : o[n] > c[n] ? 1 : o[l] < c[l] ? -1 : o[l] > c[l] ? 1 : 0), s.forEach((o) => {
    const c = e.shapes.filter((u) => !u.added && ee(u, o)), f = /* @__PURE__ */ new Set();
    o.shapes = c.filter((u) => f.has(u.autoId) ? !1 : (f.add(u.autoId), !0)), E([() => $(o.shapes.every((u) => !u.added), `added shapes in offcut ${o.autoId}`).to.be.true]);
  }), e.children = s, s;
}
function Gr(e, t, i, n, a, s, r, l, o) {
  if (!t || t.length <= 1) return !0;
  try {
    t.sort((b, v) => b[r] - v[r]);
    let c = 0, f = -1 / 0;
    for (const b of t)
      b[r] > f + n && (c += b[l] + n, f = b[r] + b[l]);
    if (c > e[l])
      return console.warn("Preliminary check: shapes would not fit within stock after rearrangement"), !1;
    const u = [], h = n / 2;
    let p, m, y = !1, d = 0, S = 0, g = 0;
    const w = 3;
    for (const b of t) {
      if (!Rt(b)) continue;
      y || (p = b[r], g = 0), m = b[r] + b[l];
      const v = b[r] + b[l] + h, L = new qe(
        a === "x" ? {
          x1: 0,
          x2: e[s],
          y1: v,
          y2: v
        } : {
          x1: v,
          x2: v,
          y1: 0,
          y2: e[s]
        }
      );
      if (Nt(L, e, i))
        if (y = !0, g++, g >= w)
          y = !1, console.warn(`Forced strip creation after ${w} consecutive collisions`);
        else
          continue;
      else
        y = !1, g = 0;
      const O = i.filter((M) => k.greaterThanOrEqualTo(M[r], p) && k.lessThan(M[r], m));
      if (!O.length) continue;
      const q = O.length > 0 ? O.reduce((M, G) => {
        const X = M[a] + M[s], K = G[a] + G[s];
        return k.equalTo(X, K) ? M[s] > G[s] ? M : G : X > K ? M : G;
      }) : O[0];
      if (!q) continue;
      const C = q[a] + q[s], P = O.length > 0 ? O.reduce((M, G) => {
        const X = M[r] + M[l], K = G[r] + G[l];
        return k.equalTo(X, K) ? M[l] > G[l] ? M : G : X > K ? M : G;
      }) : O[0];
      if (!P) continue;
      let N = P[r] + P[l];
      m > N && (N = m);
      const U = N - p;
      u.push({
        stripStartPoint: p,
        stripEndPoint: m,
        furthestPrimaryPoint: C,
        furthestOrderingPoint: N,
        shapesInThisRow: O,
        width: U
      });
    }
    if (!u.length)
      return console.warn("No valid strips found after analysis"), !0;
    const x = /* @__PURE__ */ new Map();
    u.forEach((b) => {
      b.shapesInThisRow.forEach((v) => {
        x.set(v.autoId, v[r]);
      });
    }), u.sort((b, v) => k.equalTo(b.furthestPrimaryPoint, v.furthestPrimaryPoint) ? v.width - b.width : v.furthestPrimaryPoint - b.furthestPrimaryPoint);
    let I = 0;
    for (const b of u)
      I += b.furthestOrderingPoint - b.stripStartPoint + n;
    if (I > e[l])
      return console.warn("Total arrangement would exceed stock dimensions"), !1;
    for (const b of u) {
      b.shapesInThisRow.sort((v, L) => v.placementOrder - L.placementOrder);
      for (let v = 0; v < b.shapesInThisRow.length; v++) {
        const L = b.shapesInThisRow[v], O = L[r] - b.stripStartPoint, q = S + O;
        if (q + L[l] > e[l])
          return console.warn(`Shape ${L.id} would exceed stock boundaries after rearrangement`), vi(u, x, r), !1;
        const C = L[r];
        L[r] = q, L.placementOrder = v + d, Xt(L) === 1 && k.equalTo(L[a], 0) && et(L, s), !k.equalTo(C, q) && o && (or(o, L), Mt(o, L));
      }
      if (d += b.shapesInThisRow.length, S += b.furthestOrderingPoint - b.stripStartPoint + n, S > e[l])
        return console.warn("Rearrangement exceeds stock dimensions"), vi(u, x, r), !1;
    }
    return !0;
  } catch (c) {
    return console.error("Error during shape rearrangement:", c), !1;
  }
}
function vi(e, t, i) {
  e.forEach((n) => {
    n.shapesInThisRow.forEach((a) => {
      t.has(a.autoId) && (a[i] = t.get(a.autoId));
    });
  });
}
function Br(e, t, i) {
  if (!this.config?.guillotine?.strips?.rearrange || e.saw.guillotineOptions?.strategy === "time") return !1;
  const a = e.bladeWidth;
  if (k.equalTo(a, 0) || a < 0)
    return console.warn("Invalid blade width for rearrangement"), !1;
  const s = Se(t, e);
  if (!s?.length) return !1;
  const r = e.cutPreference;
  if (r !== "l" && r !== "w")
    return console.warn("Invalid primary dimension:", r), !1;
  const l = r === "l" ? "x" : "y", o = s.filter(
    (h) => Lt(h, 1) && k.equalTo(h[l], 0)
  );
  if (!o.length) return !1;
  const c = B(r), f = r === "l" ? "y" : "x";
  return o.reduce((h, p) => h + p[c], 0) > e[c] ? (console.warn("Total strip width exceeds stock dimensions"), !1) : Gr(
    e,
    o,
    s,
    a,
    l,
    r,
    f,
    c,
    i
  );
}
async function Nr(e, t, i, n) {
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
  if (k.equalTo(s, 0) || s < 0) {
    console.warn("Invalid blade width for corner squeeze");
    return;
  }
  const r = i.filter((h) => Lt(h, 1));
  if (!r.length) {
    console.debug("No strip shapes found for corner squeeze");
    return;
  }
  const l = e.cutPreference;
  if (l !== "l" && l !== "w") {
    console.warn("Invalid primary dimension:", l);
    return;
  }
  const o = l === "l" ? "x" : "y", c = B(l), f = l === "l" ? "y" : "x";
  r.sort((h, p) => h[f] - p[f]);
  let u = 0;
  for (let h = 0; h < r.length; h++) {
    let p = function(M, G, X, K) {
      return M[G] + M[X] + K;
    }, m = function(M, G, X, K, le) {
      return le > 0 ? le - G[X] : M[K] - G[X];
    };
    const y = r[h], d = h > 0 ? Se(this.shapeList, e) : i, S = Q(t, e);
    if (!S.length) {
      console.debug("No remaining shapes to place, exiting corner squeeze");
      break;
    }
    const g = d.filter((M) => !Lt(M, 0) && Fs(M, y, f));
    g.some((M) => M.autoId === y.autoId) || g.push(y);
    let w;
    g.length > 0 ? w = g.reduce((M, G) => M[o] + M[l] > G[o] + G[l] ? M : M[o] + M[l] < G[o] + G[l] ? G : M[f] < G[f] ? M : G) : w = y;
    const x = w[o] + w[l] + s;
    let I;
    o === "x" ? I = new qe({
      x1: x,
      x2: x,
      y1: w[f],
      y2: e[c]
    }) : I = new qe({
      x1: w[f],
      x2: e[c],
      y1: x,
      y2: x
    });
    const b = Nt(I, e, d, !0);
    if (!Array.isArray(b)) {
      console.warn("Expected collision shapes array but got:", typeof b);
      continue;
    }
    const v = b;
    let L = 0;
    if (v?.length && (L = v.reduce((G, X) => G[f] < X[f] ? G : X)[f] - s, L <= w[f])) {
      console.debug("Invalid segment end point calculation, skipping this squeeze attempt");
      continue;
    }
    const O = typeof H < "u" && typeof H.segments < "u" ? H.segments === 0 ? "root" : (H.segments + 1).toString() : "squeeze-" + Date.now();
    typeof H < "u" && typeof H.segments < "u" && H.segments++;
    const q = p(
      w,
      o,
      l,
      s
    ), C = m(
      e,
      w,
      f,
      c,
      L
    ), P = e[l] - q, N = {
      id: O,
      shapes: S,
      stock: e,
      saw: e.saw,
      material: e.material,
      cutDirection: B(e.cutPreference),
      phase: 0,
      stockType: e?.saw?.stockType,
      t: e.t,
      // Assign all dimensions and positions
      x: o === "x" ? q : w.x,
      y: o === "y" ? q : w.y,
      l: o === "x" ? P : e.l,
      w: o === "y" ? P : e.w,
      [o]: q,
      [f]: w[f],
      [l]: P,
      [c]: C
    };
    if (N.l <= 0 || N.w <= 0) {
      console.debug("Skipping segment with invalid dimensions:", N.l, N.w);
      continue;
    }
    let U;
    try {
      U = new pe(N);
    } catch (M) {
      console.warn(`Corner squeeze segment creation error - ${M.message} for shape: ${w.id}`);
      continue;
    }
    try {
      await Vt.call(
        this,
        { secondPass: !0 },
        e,
        U
      ), u++;
    } catch (M) {
      console.warn(`Error during segment calculations: ${M.message}`);
    }
  }
  u > 0 && console.debug(`Corner squeeze completed with ${u} successful placements`);
}
function Hr(e, t, i, n = null) {
  if (!t)
    throw new Error("no segment provided to assignStripShape");
  if (!e) throw new Error("no shape provided to assignStripShape");
  return e.resetBothScores(), e.x = t.x, e.y = t.y, D(e) && (e.initShapes(e.shapes), e.placeMyShapes(i)), T("calculations", `assigning first shape ${e.id}, x: ${e.x}, y: ${e.y}, rot: ${n}`), e.guillotineState || (e.guillotineState = new ze({})), e.firstShape.isFirstShape = !0, sr(e), et(e, t.cutDirection), n !== null && !D(e) ? ke(e, n, i) : n !== null && D(e) && e.rot !== n && T("groups", `[assignStripShape] WARNING: Group ${e.id} has computed rot=${e.rot} but requested rotation=${n} - groups cannot be rotated!`), we() && (D(e) || E([() => $(e.rot).to.equal(n)])), e.addToStock(i), E([() => $(Fi(this.shapeList.filter((a) => a.stock?.id === i.id))).length.to.be(0)]), e;
}
async function fs(e, t, i, n = null) {
  if (E([
    () => $(F(t) || D(t), "runFirstShapeRotationTests requires shape or group").to.be.true,
    () => $(Y(i)).to.be.true
  ]), !(he(n) && !ve(t, n, i)))
    for (const a of t.firstShape.sampleRotations)
      await ps.call(
        this,
        t,
        i,
        a,
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
function Wr(e, t, i) {
  let n;
  return i ? (n = e.cutPreference, et(t, B(n)), e.hasHeadCut = !0) : (k.equalTo(t[e.cutDirection], e[e.cutDirection]) ? n = e.cutDirection : n = At(e) ? B(e.cutPreference) : B(e.cutDirection), et(t, B(n))), E([
    () => $(fe(t)).to.not.equal(n)
  ]), n;
}
function zr(e, t, i, n, a) {
  i.hasHeadCut = t;
  const s = Wr(i, e, t), r = {
    l: s === "w" ? i.l : e.l,
    w: s === "w" ? e.w : i.w
  }, l = new pe({
    x: e.x,
    y: e.y,
    l: r.l,
    w: r.w,
    t: i.t,
    parent: i,
    stock: n,
    material: n.material,
    shapes: a,
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
  return E([
    () => $(l.cutDirection, `segment cut direction ${i.id} is the same as first shape ${e.id}`).to.not.equal(fe(e))
  ]), T("cuts", `FIRST SHAPE SEGMENT [${l?.parent?.type === "root" ? "R" : l.parent.id}]->[${l.autoId}] ${t ? "HEAD" : "NORM"} ${ge(l.l, 4)}x${ge(l.w, 4)}, SEG DIR ${l.cutDirection.toUpperCase()}, SHAPE DIR ${fe(e).toUpperCase()}`), l;
}
function Ur(e, t, i, n, a = null, s) {
  if (!t.length) return [];
  E([
    () => $(t.length).to.be.greaterThan(0),
    () => $(e.every((o) => o.added === !1), "unplaced shapes contain added shapes").to.be.true
  ]);
  let r = [];
  for (const o of t) {
    const c = st(o, n);
    if (o.firstShape.sampleRotations = [], !D(o))
      for (const f of c) {
        let u = 1;
        ke(o, f, n);
        const h = o.getPriority(n);
        let p = !0;
        if (ke(o, f, n), E([
          () => $(o.rot, `unique shape ${o.id} rotation (${o.rot}) incorrect for (${f})`).equal(f)
        ]), !ee(o, i, f))
          continue;
        if (a?.length) {
          o.x = i.x, o.y = i.y;
          for (const y of a)
            if (Ni(o, y, n)) {
              p = !1;
              break;
            }
        }
        if (!p) continue;
        const m = o.aspect;
        if (m < 0.1) {
          const y = n.cutPreference;
          if (o[y] >= 0.7 * n[y] && o[y] > o[B(y)]) {
            const d = Math.max(1, 10 * (1 - m * 2));
            u *= d;
          }
        }
        r.push({
          id: o.id,
          shape: o,
          rotation: f,
          score: u,
          priority: h
        }), E([
          () => $(ee(o, i, f), "canditate will not fit").to.be.true
        ]);
      }
  }
  r.sort((o, c) => o.score !== c.score ? c.score - o.score : o.priority !== c.priority ? c.priority - o.priority : c.shape.area - o.shape.area), r = r.slice(0, this.config.sample.guillotine);
  const l = [];
  for (const o of r)
    l.find((f) => f.id === o.id) || l.push(o.shape), o.shape.firstShape.sampleRotations.push(o.rotation), E([
      () => $(o.shape.firstShape.sampleRotations.length).to.be.lessThanOrEqual(2),
      () => $(o.shape.firstShape.sampleRotations[0]).to.not.equal(o.shape.firstShape.sampleRotations[1])
    ]);
  return l.push(...s), l;
}
function jr(e, t, i) {
  if (!e.length) return [];
  if (typeof t != "number") throw new Error("getAllocatedStripShapeBatch - stripShapeBatchNumber must be a number");
  if (!i) throw new Error("getAllocatedStripShapeBatch - stock is required");
  const n = e.filter((r) => {
    if (r.added) return !1;
    const l = r.guillotineState.getStripShapeBatchData(t);
    return !(l === !1 || l.rerunning || l.stockId !== i.autoId);
  }), a = /* @__PURE__ */ new Set();
  return n.filter((r) => a.has(r.autoId) ? !1 : (a.add(r.autoId), !0));
}
function Yr(e, t, i) {
  _r(e.shapes);
  const n = Gs.call(this, e, t, i);
  return n || !1;
}
function Ei(e, t = null, i, n = !1) {
  let a;
  if (t !== null) {
    const s = e.guillotineState.getStripShapeBatchData(t);
    if (s === !1)
      throw new Error("getStripShapeRotation - could not find strip shape group");
    a = s.rot;
  }
  if (E([() => $([0, 1].includes(a)).to.be.true]), n && a !== e.rot) {
    if (D(e) || !ve(e, a, i)) return a;
    if (ke(e, a, i) === !1)
      throw new Error("getStripShapeRotation - could not rotate strip shape correctly");
  }
  return a;
}
function Xr(e, t, i, n, a) {
  const s = i.cutPreference === "l" ? "l" : "w", r = new Set(a.map((u) => u[s]));
  E([
    () => $(r.size).to.be.greaterThan(0)
  ]);
  const l = a.filter((u) => Z(u)), o = a.filter((u) => F(u));
  if (o.length < 2)
    return a;
  const c = [...o], f = [];
  for (const u of r) {
    const h = [], p = u * (1 - this.config.groups.tolerance);
    let m = u * (1 + this.config.groups.tolerance);
    m > n[s] && (m = n[s]);
    for (let y = c.length - 1; y >= 0; y--) {
      const d = c[y];
      !d.getMinSpacing(i.saw, !0) && d[s] <= i[s] && d[s] >= p && d[s] <= m && (h.push(d), c.splice(y, 1));
    }
    h.length > 0 && f.push(h);
  }
  if (f.length > 0) {
    const u = [];
    for (const h of f) {
      if (h.length < 2) continue;
      const p = h[0], m = p.guillotineState.getStripShapeBatchData(e);
      if (m === !1)
        throw new Error("no reference shape group");
      let y;
      try {
        const d = h.slice(0, -1).reduce((v, L) => v + L.getMinSpacing(i), 0), S = h.reduce((v, L) => v + L[t], 0);
        if (d + S > i[t]) continue;
        const g = p.l, w = p.w, b = `ss-${[...new Set(h.map((v) => v.parentId || v.id))].sort().join("-")}_${this.counters.group++}`;
        y = new St({
          l: g,
          w,
          id: b,
          shapes: h,
          direction: Bs(t),
          container: i,
          type: "strip"
        });
      } catch (d) {
        console.log(d), y = null;
      }
      if (y) {
        const d = Math.min(...h.map((g) => {
          const w = g.guillotineState.getStripShapeBatchData(e);
          return w ? w.order : 1 / 0;
        }));
        y.guillotineState.setStripShapeBatchGroup(e, {
          stockId: i.autoId,
          dimension: y[t],
          rot: y.rot,
          order: d,
          priorityShape: m.priorityShape
        });
        const S = new Set(y.shapes.map((g) => g.id));
        u.push(y), n.shapes = n.shapes.filter((g) => !S.has(g.id)), n.shapes.push(y), a = a.filter((g) => !S.has(g.id));
      }
    }
    a = [...u, ...l, ...a.filter((h) => F(h))];
  } else
    a = [...l, ...o];
  return a;
}
function _r(e) {
  for (const t of e) t.guillotineState.resetStripShapeBatchGroups();
}
function Vr(e, t) {
  const i = t.getStock, n = 0.1 * i.l;
  function a(l) {
    return e.some((o) => l.parentId === o.parentId && !o.added) && Qt(l, i) && l.willItFit(t);
  }
  const s = e.some((l) => Qt(l, i) && l.willItFit(t) && l.l >= n || l.w >= n);
  return e.filter((l) => l.added ? !1 : (de(l) && l.updateShapeSpacing(t), e.length === 1 || !s ? a(l) : l.l < n && l.w < n ? !1 : a(l)));
}
function hs(e, t, i, n = null, a = !1) {
  if (!this.config.sample.enable && a === !1) return [];
  if (!e) throw new Error("getFirstShapeSample - type is required");
  E([
    () => $(e === "guillotine" || e === "efficiency", "type not correct").to.be.true,
    () => $(Ns(i), "should be a container").to.be.true
  ]);
  const s = Ie(t, !1, !0);
  if (!s.length) return [];
  const r = t.filter((p) => D(p)), l = [], o = i.getStock;
  let c = Vr(s, i);
  if (!c.length) return [];
  if (e === "guillotine")
    c = Ur.call(
      this,
      t,
      c,
      i,
      o,
      n,
      r
    );
  else if (e === "efficiency") {
    c.push(...r);
    const p = c.filter((m) => m.getPriority(o) > 0);
    p.length && (c = p), c.sort(be.aspect);
  }
  const f = c.filter((p) => D(p)), u = c.filter((p) => !D(p)), h = [...f, ...u];
  for (const p of h)
    if (D(p)) {
      if (!p.willItFit(i)) {
        T("groups", `[getFirstShapeSample] Group ${p.id} does NOT fit container after calculateGroupDimensions - skipping (group: ${p.l}x${p.w}, container: ${i.l}x${i.w})`);
        continue;
      }
      p.firstShape.sampleRotations = [p.rot.valueOf()], l.push(p);
    } else {
      const m = t.find((y) => y.parentId === p.parentId && !y.added && y.constructor.name === p.constructor.name);
      if (m && (m.firstShape.sampleRotations = st(m, i), l.push(m)), l.length >= (e === "guillotine" ? this.config.sample.guillotine : this.config.sample.efficiency))
        break;
    }
  return T("firstShapes", `candidates for stock ${i.getStock?.id}, ${Y(i) ? "segment " + i.id : ""}`, l.map((p) => ({ id: p.id, autoId: p.autoId, rotations: p.firstShape.sampleRotations }))), E([() => $(se(l), "duplicate ids found in candidates with getFirstShapeSample").to.false]), l;
}
const Pe = {
  async calculation(e, t, i) {
    if (e?.tidy && (this.resetShapes(Se(i, t)), this.tidyStrategy = !0), await Pe.tryFirstShapes.call(this, t, i), !!this.bestResult && (this.tidyStrategy = !1, !e?.tidy && Qr.call(this, this.bestResult, t))) {
      t.algoBenchmark = this.bestResult, this.resetShapes(i);
      try {
        const a = await new kn(this, t, i).run();
        if (!a) return;
        await ae.call(this, a.result), delete t.algoBenchmark;
      } catch (n) {
        console.error("error with evo", n);
      }
      Ge({
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
    if (e.rot !== t && !ve(e, t, i))
      throw new Error(`first shape ${e.id} cannot rotate to: ${t}`);
    ke(e, t, i), e.resetBothScores(), as.call(
      this,
      e,
      i,
      Ht.call(this, i, i, e),
      []
    ), e.addToStock(i), e.firstShape.isFirstShape = !0, e.placementOrder = 0, D(e) ? (e.placeMyShapes(i), this.counters.placement = e.shapes.length) : this.counters.placement = 1;
  },
  /**
   * try all first shapes with both rotations if relevant
   */
  tryFirstShapes: async function(e, t) {
    const i = Q(t, e);
    let n = hs.call(
      this,
      "efficiency",
      i,
      e
    );
    const a = Ie(i, !1, !0);
    let s = a.length > 1;
    s && i.reduce((o, c) => o + c.area, 0) < e.area * this.config.groups.shapeAreaCutOff && (s = !1);
    let r = [];
    s && !this.hasMinSpacing && this.config.groups.efficiency.firstShapes && a.length < this.config.groups.efficiency.limit && (r = Pe.createFirstShapeGroups.call(
      this,
      i,
      e
    )), n.push(...r);
    let l = t;
    n = Ie(n, !1, !0);
    for (const o of n)
      o.firstShape.isFirstShape = !0, D(o) && (l = In(
        o.shapes,
        i
      ), l.unshift(o)), await Pe.calculateFirstShapeRotations.call(
        this,
        l,
        e,
        o
      ), o.firstShape.isFirstShape = !1;
  },
  /**
   * run the calculations for both first shape rotations
   */
  calculateFirstShapeRotations: async function(e, t, i) {
    const n = st(i, t);
    for (const a of n) {
      this.resetShapes(e, !1, !1), i.added = !1, D(i) && (i.placeMyShapes(t), e.unshift(...i.shapes), e = e.filter((r) => r.id !== i.id));
      const s = await $r.call(
        this,
        e,
        t,
        i,
        a
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
    weighting: a = null
  }) {
    const s = performance.now();
    if (this.counters.placement = 1, !e.length) return !1;
    if (!i)
      throw new Error("no firstShape provided to efficiency.runSpecificStrategy");
    if (V(t) && (t.used = !1), this.resetShapes(e, !0, !1), i.reset(), !F(i) && !D(i) && typeof i == "string" && (i = this.shapeList.find((c) => c.id === i)), e.length) {
      if (a) {
        this.weighting.custom = {};
        for (const f of Object.keys(this.weighting.efficiency.standard()))
          this.weighting.custom[f] = a[f] ? a[f] : 0;
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
    a && (this.weighting.custom = null);
    const l = performance.now(), o = Math.ceil(l - s);
    return r.time = o, r;
  },
  /**
   * create groups to be used as a first shape
   * CAUTION - can make very simple calculations less efficient
   */
  createFirstShapeGroups: function(e, t) {
    if (!this.config.groups.efficiency.firstShapes) return [];
    const i = Q(e, t).filter((r) => F(r)), n = ["l", "w"], a = /* @__PURE__ */ new Map();
    for (const r of n)
      Gi({
        shapes: i,
        container: t,
        targetSize: t[r],
        exact: !1,
        direction: r,
        config: this.config,
        preventDuplicates: !0,
        counters: this.counters
      }).forEach((o) => {
        const c = `${o.l}-${o.w}`;
        a.has(c) || a.set(c, o);
      }), this.resetShapes(i);
    let s = Array.from(a.values());
    return s.sort((r, l) => l.efficiency - r.efficiency), s = s.slice(0, this.config.sample.groupSize), E([
      () => $(s.every((r) => k.lessThanOrEqualTo(r.l, t.l) && k.lessThanOrEqualTo(r.w, t.w)), "groups larger than container").to.be.true
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
      for (const a of n) {
        const s = i.filter((r) => !r.added);
        a.shapes = s, await He.call(
          this,
          e,
          t,
          s,
          a
        );
      }
      return;
    }
    t?.saw?.cutPreference === "flex" ? await Dr.call(
      this,
      e,
      t,
      i
    ) : await He.call(
      this,
      e,
      t,
      i
    );
  },
  beam: async function(e, t, i, n = []) {
    if (this.counters.placement = 0, e.secondRun && n.length) {
      for (const a of n) {
        const s = i.filter((r) => !r.added);
        a.shapes = s, await He.call(
          this,
          e,
          t,
          s,
          a
        );
      }
      return;
    }
    await He.call(
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
async function Kr({
  shapeOrGroup: e,
  container: t,
  weighting: i,
  containerPlacedShapes: n = null,
  unplacedShapes: a = null,
  placementPositions: s = null,
  rayCastCoords: r = null,
  placedCoords: l = null
}) {
  if (!n)
    throw new Error("findBestShapePosition was not passed any placedShapes");
  if (!a)
    throw new Error("findBestShapePosition was not passed any unplacedShapes");
  if (!e)
    throw new Error("findBestShapePosition was not passed a shape");
  if (de(e))
    try {
      e.updateShapeSpacing(t);
    } catch {
      return !1;
    }
  const o = t.l + t.x - e.l, c = t.w + t.y - e.w;
  if (o < 0 || c < 0) return !1;
  const f = new wt(), u = t.getStock;
  if (r)
    for (const h of r.points.values()) {
      const p = js(
        e,
        h,
        t
      );
      p && f.addPoints(p.toArray());
    }
  for (const h of s.points.values()) {
    const p = Ys(
      e,
      h,
      t
    );
    f.addPoints(p.toArray());
  }
  if (t.cutType === "efficiency") {
    const h = e.getMinSpacing(t.saw);
    if (h > 0)
      for (const p of f.points.values()) {
        if (e.x = p.x, e.y = p.y, e.isTooCloseToEdges(t)) {
          p.tooClose = !0;
          continue;
        }
        if (!V(t) && e.isTooCloseToEdges(u)) {
          p.tooClose = !0;
          continue;
        }
        if (!p.tooClose) {
          const m = e.createProximityRectangle(h);
          if (!m)
            throw new Error("unable to create proximity rectangle");
          for (const y of n)
            if (p.tooClose = Ni(
              m,
              y,
              t,
              !1
            ), p.tooClose) break;
        }
      }
  }
  for (const h of f.points.values()) {
    if (h.tooClose || k.greaterThan(h.x, o) || k.greaterThan(h.y, c) || (e.x = h.x, e.y = h.y, Bi(e, n, t))) continue;
    Ti(
      e,
      t,
      i,
      n,
      a,
      h,
      l
    );
    let m = a.length > 1;
    (t.cutType === "efficiency" && this.config.groups.efficiency.position || ["guillotine", "beam"].includes(t.cutType) && this.config.groups.guillotine.position) && (Jr.call(this, a, t) || (m = !1)), m && (t.cutType === "efficiency" && this.config.groups.efficiency.position || ["guillotine", "beam"].includes(t.cutType) && this.config.groups.guillotine.position) && h.type !== "group" && F(e) && Xs({
      container: t,
      containerPlacedShapes: n,
      unplacedShapes: a,
      shape: e,
      point: h,
      config: this.config,
      scoreFunction: (y, d, S, g, w) => {
        Ti(
          y,
          d,
          i,
          S,
          g,
          w,
          l
        );
      }
    });
  }
  return !0;
}
function Jr(e, t) {
  return !0;
}
async function ps(e, t, i = null, n = null, a = {}, s = null) {
  if (!n)
    throw new Error("no testFunction provided to testShapeRotations");
  if (typeof n != "function")
    throw new Error("testFunction provided to testShapeRotations is not a function");
  if (n.constructor.name !== "AsyncFunction")
    throw new Error("testFunction provided to testShapeRotations must be async");
  if (D(e)) {
    s && (a[s] = e.rot), await n.call(this, a);
    return;
  }
  he(e.orientationLock) && (i = zs(e, t));
  const r = he(i) ? i : 0;
  ve(e, r, t) && ee(e, t, r) && (ke(e, r, t), s && (a[s] = r), await n.call(this, a));
  const l = 1;
  i === null && !e.isSquare && ve(e, l, t) && ee(e, t, l) && (ke(e, l, t), s && (a[s] = l), await n.call(this, a));
}
async function Bt(e, t, i) {
  if (!e.length) return !1;
  if (se(e)) {
    const f = /* @__PURE__ */ new Set();
    e = e.filter((u) => f.has(u.autoId) ? !1 : (f.add(u.autoId), !0));
  }
  const a = i.getStock;
  if (a.saw && !Oe(a.saw)) throw new Error("not real saw");
  const s = e?.filter((f) => f.added);
  if (!s.length) return;
  const r = new Set(s.map((f) => f.autoId)), l = Zt.call(
    this,
    null,
    s,
    i
  );
  if (l.points.size === 0) return !1;
  const o = t ? {
    x: /* @__PURE__ */ new Map([[t.x, [t]]]),
    y: /* @__PURE__ */ new Map([[t.y, [t]]])
  } : {
    x: /* @__PURE__ */ new Map(),
    y: /* @__PURE__ */ new Map()
  };
  function c() {
    const f = Q(
      e,
      a,
      "filter"
    ), u = /* @__PURE__ */ new Set();
    for (const d of f)
      if (D(d) && !Z(d)) {
        const S = d;
        if (S.shapes?.length)
          for (const g of S.shapes)
            u.add(g.autoId);
      }
    const h = f.filter((d) => {
      if (Z(d)) return !1;
      if (Ue(d) || de(d)) {
        const S = d;
        return !(!S.shapes || S.shapes.length === 0);
      }
      if (F(d))
        return !(u.has(d.autoId) || d?.group?.inGroup);
    }), p = h.filter((d) => D(d) && !Z(d)), m = h.filter((d) => F(d)), y = [...p, ...m];
    return T("groups", `[getRelevantUnplacedShapes] ${y.length} unplaced (${p.length} groups, ${m.length} shapes)`), p.length > 0 && p.forEach((d) => {
      T("groups", `Group ${d.id}: ${d.shapes?.length || 0} child shapes, ${d.shapes.map((S) => S.id).join()}, added=${d.added}`);
    }), y;
  }
  for (let f = c(); f.length; ) {
    let u = function() {
      const g = f.filter((I) => typeof I?.bestScore?.total == "number");
      if (!g?.length) return !1;
      const w = eo(g);
      if (!w) return null;
      const x = Zr.call(this, i, a, o, w, s, r);
      return x.added && !r.has(x.autoId) && (D(x) && x.type !== "position" || s.push(x), r.add(x.autoId), Y(i) && (i.shapes = i.shapes.filter((b) => b.autoId !== x.autoId))), E([
        () => $(x.added).to.be.true,
        () => $(se(s), "duplicates found in containerPlacedShapes").to.be.false,
        () => $(s.every((I) => I.added), "containerPlacedShapes contains unplaced shapes").to.be.true
      ]), Y(i), { bestShapeOrGroup: w, winningShapeOrGroup: x };
    }, h = null;
    this.uniqueShapes.length > 1 && i.cutType === "efficiency" && this.config.efficiency.rayCasting && !this.hasMinSpacing && (h = Us(
      i,
      s
    ));
    const p = f.length;
    let m = !1;
    for (let g = 0; g < p; g++) {
      let w = !1;
      if (m && f[g].isSameSize(f[g - 1]))
        continue;
      for (let b = 0; b < g; b++)
        if (f[b].isSameSize(f[g])) {
          w = !0;
          break;
        }
      if (w) {
        m = !0;
        continue;
      } else
        m = !1;
      const x = f[g];
      x.resetBestScore();
      const I = Ht.call(this, i, a, x);
      if (await ps.call(
        this,
        x,
        i,
        null,
        Kr,
        {
          shapeOrGroup: x,
          container: i,
          weighting: I,
          containerPlacedShapes: s,
          unplacedShapes: f,
          placementPositions: l,
          rayCastCoords: h,
          placedCoords: o
        }
      ), D(x) && !Z(x)) {
        const b = x;
        if (!b.bestScore || typeof b.bestScore.total != "number") {
          T("groups", `[placeShapes] Group ${b.id} has no valid placement. Releasing it and all clones.`);
          const v = b.autoId.replace(/\.\d+$/, ""), L = [];
          for (const O of e)
            if (D(O) && !Z(O)) {
              const q = O;
              q.autoId.replace(/\.\d+$/, "") === v && !q.added && L.push(q);
            }
          if (L.length > 0) {
            T("groups", `  Releasing ${L.length} groups (including clones)`);
            const O = [], q = /* @__PURE__ */ new Set();
            for (const C of L)
              if (C.shapes && C.shapes.length > 0)
                for (const P of C.shapes)
                  q.has(P.autoId) || (O.push(P), q.add(P.autoId));
            for (const C of L)
              T("groups", `    Destroying group ${C.id}`), C.destroy();
            O.length > 0 && (T("groups", `  Adding ${O.length} released shapes back to containerShapes`), e.push(...O));
          }
        }
      }
    }
    const y = u.call(this, e);
    if (y === !1 || y === null) return;
    const { bestShapeOrGroup: d, winningShapeOrGroup: S } = y;
    if (f = c(), f.length > 0) {
      const g = Zt(
        S ? [S] : [],
        s,
        i
      );
      l.addPoints(g.toArray()), l.deletePoint(new yt(d.x, d.y));
    }
    this.resetShapes(f, {
      keepScores: !1,
      removeGroups: !1,
      keepGuillotineData: !0,
      keepFirstShapeSampleRotations: !1
    });
  }
  return !0;
}
function Qr(e, t) {
  if (this.config.evo.disable || e.stockID !== t.id) return !1;
  const i = Q(this.shapeList, t, "filter", null), n = Ie(i, null, !0);
  return n.length <= 1 || t?.saw?.stockType === "roll" || n.length > 100 || e?.algoTime > 2e3 || !this.enableEvo || e.cutType === "efficiency" && e?.score[this.successMetric] < 0.65 || t?.saw?.stockType === "roll" || !e?.score?.unplacedShapes || e?.score?.totalShapesPlaced <= 2 ? !1 : i.length <= this.config.evo.stockLimit;
}
function Zr(e, t, i, n, a, s) {
  const r = D(n) ? n : n.bestScore?.group ?? null;
  if (r) {
    const o = r.shapes.filter((c) => c.added || c.group?.inGroup);
    if (o.length > 0)
      T("groups", `[placeBestShapeOrGroup] Group ${r.id} is invalid - ${o.length}/${r.shapes.length} shapes already placed. Placing individual shape instead.`), D(n) || (n.bestScore.group = null);
    else {
      if (T("groups", `[placeBestShapeOrGroup] Placing group ${r.id} with ${r.shapes.length} shapes (type=${r.type})`), r.placementOrder = this.counters.placement, this.counters.placement += r.shapes.length, r.setPositionToBestScore(), Ii(e, r), r.addToStock(t), Mt(i, r), r.placeMyShapes(t), r.type === "position")
        for (const c of r.shapes)
          this.shapeList.some((f) => f.autoId === c.autoId) || this.shapeList.push(c);
      if (r.type !== "position" && r.type !== "firstShape")
        for (const c of r.shapes)
          c.added && !c.group?.inGroup && !s.has(c.autoId) && (a.push(c), s.add(c.autoId));
      return r;
    }
  } else n && (n.placementOrder = this.counters.placement++, n.setPositionToBestScore(), Ii(e, n), n.addToStock(t), Mt(i, n));
  return r || n;
}
function eo(e) {
  return e.reduce((i, n) => {
    if (n.bestScore.total > i.bestScore.total)
      return n;
    if (n.bestScore.total === i.bestScore.total) {
      if (D(n) && !D(i))
        return n;
      if (n.area > i.area) return n;
    }
    return i;
  });
}
let to = class {
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
function io(...e) {
  return class {
  };
}
const rt = {
  Schema: to,
  model: io,
  connect: () => Promise.resolve(),
  connection: {}
}, so = rt.Schema, ds = new so({
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
ds.plugin(Ui);
const no = rt.model(
  "material",
  ds,
  "materials"
), ro = rt.Schema, Kt = new ro({
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
function oo(e) {
  return e ? {
    l1: Ne({ v: e[2], dp: 4 }),
    l2: Ne({ v: e[3], dp: 4 }),
    w1: Ne({ v: e[1], dp: 4 }),
    w2: Ne({ v: e[2], dp: 4 })
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
Kt.plugin(Ui);
const ao = rt.model(
  "stock",
  Kt,
  "stock"
);
async function lo(e = [], t, i = []) {
  t instanceof je || (t = new je(t));
  let n = [];
  const a = [];
  for (const s of e) {
    if (!he(s.material)) continue;
    const r = n.filter((l) => {
      if (ee(s, l)) {
        let o = !1, c = !1, f = !0;
        if (l?.saw?.stockType === "linear" && (k.equalTo(s.w, l.w) || (f = !1)), (s.t === l.t || !he(l.t)) && (c = !0), s.material === l.material && (o = !0), l?.saw?.stockType === "linear") {
          if (o && c && f)
            return !0;
        } else if (o && c) return !0;
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
              $nin: i.map((f) => f?.id?.toLowerCase())
            }
          }
        ]
      }, [o, c] = await Promise.all([
        no.findById(s?.material?.toLowerCase())?.lean(),
        //TODO make sorting order and limit configurable based on org
        ao.find(l).sort({ area: 1 }).limit(3).lean()
      ]);
      o && c.length ? c.forEach((f) => {
        const u = oo(f.trim), h = {
          l: f.l - (u.l1 ?? 0) - (u.l2 ?? 0),
          w: f.w - (u.w1 ?? 0) - (u.w1 ?? 0)
        };
        if (!(k.lessThanOrEqualTo(
          s.l,
          h.l
        ) && k.lessThanOrEqualTo(
          s.w,
          h.w
        ) || k.lessThanOrEqualTo(
          s.w,
          h.l
        ) && k.lessThanOrEqualTo(
          s.l,
          h.w
        )))
          return;
        const p = _s.parse({
          // Base dimensions from stockItem
          l: f.l,
          w: f.w,
          t: f.t,
          q: f.q,
          cost: f.cost,
          grain: f.grain || "",
          material: f.material,
          // Generated IDs
          id: (i.length + n.length + 1).toFixed(1),
          parentId: (i.length + n.length + 1).toString(),
          // Additional required fields
          name: o.name,
          autoAdd: !1,
          //material based calculations do not allow autoAdd
          trim: u,
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
        n.push(new bt(p)), Array.isArray(s.stockLock) ? s.stockLock.push(p.parentId) : s.stockLock = [p.parentId];
      }) : a.push({
        material: o.name,
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
    unavailableStock: a
  };
}
function co(e, t, i = !1) {
  t.forEach((s) => {
    s.identicalTo = [];
  });
  const n = [];
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    if (n.some((c) => c.some((f) => f.id === r.id))) continue;
    const o = [r];
    for (let c = s + 1; c < e.length; c++) {
      const f = e[c];
      r.isIdentical(f, i) && o.push(f);
    }
    o.length > 1 && n.push(o);
  }
  const a = /* @__PURE__ */ new Map();
  t.forEach((s) => {
    a.has(s.parentId) || a.set(s.parentId, []), a.get(s.parentId).push(s);
  }), n.forEach((s) => {
    const r = s.map((l) => l.parentId);
    r.forEach((l) => {
      (a.get(l) || []).forEach((c) => {
        r.forEach((f) => {
          f !== c.parentId && !c.identicalTo.includes(f) && c.identicalTo.push(f);
        });
      });
    });
  }), t.forEach((s) => {
    (a.get(s.parentId) || []).length > 1 && !s.identicalTo.includes(s.parentId) && s.identicalTo.push(s.parentId);
  });
}
function uo(e, t) {
  for (const i of e) {
    i.fitsStock = {};
    for (const n of t) {
      const a = st(i, n);
      i.fitsStock[n.parentId] = {
        any: ee(i, n, null),
        0: a.includes(0),
        1: a.includes(1)
      };
    }
  }
}
function fo(e, t, i, n) {
  const a = n?.similarityThreshold ?? 0.1, s = n?.selectionStrategy, r = n?.minPerShape ?? 0, l = n?.minTotal ?? 0;
  if (e.length <= 1)
    return t;
  const { filtered: o, excludedGroups: c } = po(
    e,
    i,
    { similarityThreshold: a, selectionStrategy: s }
  );
  let f = [...o], u = [...c];
  if (r > 0) {
    const m = /* @__PURE__ */ new Map();
    for (const d of t) {
      const S = m.get(d.parentId) || 0;
      m.set(d.parentId, S + 1);
    }
    const y = f.filter((d) => (m.get(d.parentId) || 0) < r);
    if (y.length > 0) {
      for (const d of y) {
        const S = d.parentId;
        for (const g of u) {
          const w = g.filter((x) => (m.get(x.original.parentId) || 0) >= r);
          if (w.length > 0) {
            const x = w.sort((b, v) => (m.get(v.original.parentId) || 0) - (m.get(b.original.parentId) || 0))[0], I = f.findIndex((b) => b.parentId === S);
            if (I !== -1) {
              f[I] = x.original;
              const b = g.findIndex((v) => v === x);
              b !== -1 && g.splice(b, 1);
              break;
            }
          }
        }
      }
      u = u.filter((d) => d.length > 0);
    }
  }
  if (l > 0) {
    const m = new Set(f.map((d) => d.parentId)), y = t.filter((d) => m.has(d.parentId)).length;
    if (y < l && u.length > 0) {
      const d = [];
      let S = y;
      for (; S < l && u.some((g) => g.length > 0); ) {
        for (let g = 0; g < u.length && S < l; g++) {
          const w = u[g];
          if (w.length > 0) {
            const I = ho([...w], s)[0], b = I.original.parentId, v = t.filter((O) => O.parentId === b).length;
            d.push(I.original), S += v;
            const L = w.findIndex((O) => O === I);
            L !== -1 && w.splice(L, 1);
          }
        }
        if (u = u.filter((g) => g.length > 0), u.length === 0 || u.every((g) => g.length === 0))
          break;
      }
      f = [...f, ...d];
    }
  }
  const h = new Set(f.map((m) => m.parentId));
  return t.filter((m) => h.has(m.parentId));
}
function ho(e, t) {
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
function po(e, t, i) {
  const n = i.similarityThreshold, a = i.selectionStrategy;
  if (e.length <= 1) return { filtered: e, excludedGroups: [] };
  const s = e.map((c) => {
    const f = {
      l: c.longSide,
      w: c.shortSide
    };
    return {
      original: c,
      // Keep reference to the original shape object
      rotated: f,
      // Normalized dimensions for comparison (keeping 'rotated' name for compatibility)
      area: c.area
      // Area for 'largest'/'smallest' selection
    };
  }), r = [];
  for (const c of s) {
    let f = !1;
    for (const u of r)
      if (u.some((h) => go(c.rotated, h.rotated, n))) {
        u.push(c), f = !0;
        break;
      }
    f || r.push([c]);
  }
  const l = [], o = [];
  return r.forEach((c) => {
    if (c.length === 1) {
      l.push(c[0]);
      return;
    }
    let f;
    switch (a) {
      case "largest":
        f = c.reduce((h, p) => p.area > h.area ? p : h, c[0]);
        break;
      case "smallest":
        f = c.reduce((h, p) => p.area < h.area ? p : h, c[0]);
        break;
      case "first":
      default:
        f = c[0];
    }
    l.push(f);
    const u = c.filter((h) => h !== f);
    u.length > 0 && o.push(u);
  }), {
    filtered: l.map((c) => c.original),
    excludedGroups: o
  };
}
function go(e, t, i) {
  const n = Math.abs(e.l - t.l) / Math.max(e.l, t.l, 1), a = Math.abs(e.w - t.w) / Math.max(e.w, t.w, 1);
  return n <= i && a <= i;
}
function mo(e, t, i) {
  if (T("stack", `previous stock ${t.id}`), ["l", "w", "material", "t"].some((s) => e[s] !== t[s])) return !1;
  const n = e.cutType === "guillotine" || e.cutType === "beam", a = e.saw.guillotineOptions?.strategy !== "time";
  if (!n || n && a) {
    const s = gs.call(
      this,
      e,
      t,
      i,
      this.shapeList
    );
    if (s)
      return T("stack", `stack found: ${e.id} === ${t.id}`), this.recordStackToBestResult(e, i), e.used = !0, e.score = t.score, s;
  }
  return !1;
}
function gs(e, t, i, n) {
  if (!this.config.stack || !i.length) return !1;
  const a = e.saw;
  if (a.stackingMode === "none") return !1;
  if (T("stack", `looking for stack for ${e.id}, comparing to ${t.id}`), a.cutType === "beam" && t.stack) {
    let s = t, r = 1;
    if (t.stack.stock ? (s = t.stack.stock, r = s.stack?.number || 1) : t.stack.number && (r = t.stack.number), s.t * r + e.t > a.stackHeight)
      return !1;
  }
  if (e.parentId === t.parentId) {
    if (a.cutType === "beam" && a.stackHeight > 0 && e.t * 2 > a.stackHeight)
      return !1;
    const s = Hi(n, t);
    if (!s.length) return !1;
    const r = ms.call(this, [t], s, e, i, !0, !0, a.stackingMode === "identical");
    if (r)
      return e.stack = { stock: r }, r.stack.number === 1 ? r.stack.number = 2 : r.incrementStack(), r;
  }
  return !1;
}
function So(e, t) {
  if (!this.config.findDuplicatePatterns) return !1;
  T("stack", `🔎 checkForDuplicates called for ${e.id}`);
  const i = this.shapeList.filter((s) => s.added);
  T("stack", `   Total shapes added across all stock: ${i.length}`);
  const n = this.stockList.filter((s) => s.used && s.id !== e.id && s.l === e.l && s.w === e.w);
  if (T("stack", `   Relevant used stock with matching dimensions: ${n.map((s) => s.id).join(", ")}`), !n.length)
    return T("stack", `   No relevant stock found for ${e.id}`), !1;
  const a = ms.call(this, n, i, e, t, !0, !1);
  return a ? (T("stack", `   ✅ Duplicate found: ${e.id} matches ${a.id}`), Vs(a, e), e.used = !0, a) : (T("stack", `   No duplicate pattern found for ${e.id}`), !1);
}
function ms(e, t, i, n, a = !0, s = !0) {
  if (!e.length || !n.length) return null;
  T("stack", `🔍 Checking for duplicate patterns for ${i.id}`), T("stack", `   Current shapes count: ${n.length}`), T("stack", `   Used stock to check: ${e.map((l) => l.id).join(", ")}`);
  const r = /* @__PURE__ */ new Map();
  for (const l of e) {
    T("stack", `   📋 Checking against stock ${l.id}`);
    const o = Hi(t, l);
    if (!o.length) {
      T("stack", `      ❌ No shapes on ${l.id}, skipping`);
      continue;
    }
    T("stack", `      Stock ${l.id} has ${o.length} shapes`);
    const c = o.length, f = [];
    r.clear();
    let u = !0;
    for (const h of o) {
      let p = null;
      if (s) {
        const m = n.filter((d) => !r.has(d)), y = m.filter((d) => d.isIdentical(h, !1));
        y.length === 1 ? (p = y[0], T("stack", `      ✓ Shape ${h.id} matched to ${p.id}`)) : y.length > 1 ? (p = y.find((d) => d.parentId === h.parentId) || y[0], T("stack", `      ✓ Shape ${h.id} matched to ${p.id} (${y.length} candidates, preferred by parentId: ${p.parentId === h.parentId})`)) : (T("stack", `      ✗ Shape ${h.id} has no identical match`), T("stack", `         Available shapes: ${m.map((d) => d.id).join(", ")}`));
      } else {
        const y = n.filter((d) => !r.has(d)).filter((d) => d.longSide === h.longSide && d.shortSide === h.shortSide && ve(d, h.rot, l));
        y.length === 1 ? p = y[0] : y.length > 1 && (p = y.find((d) => d.parentId === h.parentId) || y[0]);
      }
      if (p)
        r.set(p, !0), f.push({
          current: p,
          match: h
        });
      else {
        T("stack", `      ❌ Failed to match all shapes for ${l.id}`), u = !1;
        break;
      }
    }
    if (u && f.length === c) {
      if (T("stack", `      ✅ Perfect match found: ${i.id} matches ${l.id}`), a) {
        i.shapes = [];
        for (const { current: h, match: p } of f)
          h.update({
            x: p.x,
            y: p.y,
            w: p.w,
            l: p.l,
            guillotineData: p.guillotineData,
            placementOrder: p.placementOrder,
            added: !0,
            stock: i
          }), i.shapes.push(h);
      }
      return l;
    } else
      T("stack", `      ⚠️ Stock ${l.id}: allMatched=${u}, matches=${f.length}, target=${c}`);
  }
  return T("stack", `   ❌ No duplicate pattern found for ${i.id}`), null;
}
class Di extends Ks {
  // Zod schema for validation and serialization
  static schema = Sn;
  static computedProperties = yn;
  /**
   * Get entity type
   */
  getType() {
    return W.Optimiser;
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
      successMetric: gi(i, "successMetric", t.successMetric || ie.successMetric),
      enableEvo: gi(i, "evo.disable", !1) ? !1 : t.enableEvo ?? !0,
      weighting: t.weighting || {
        efficiency: oe.efficiency,
        guillotine: oe.guillotine,
        roll: oe.roll
      },
      stockType: t.saw?.stockType || null,
      // Don't skip validation so defaults are applied
      skipSchemaValidation: !1
    };
    super(n), !this.useInventory && this.stockList?.length && this.stockList.forEach((a) => {
      a?.saw?.stockType || (a.saw.stockType = this.saw.stockType);
    }), Mi({
      stocks: this.stockList,
      shapes: this.shapeList
    }, "Optimiser constructor"), this.uniqueStock = Le(this.stockList), this.groupList = [], this.init();
  }
  init() {
    const t = [];
    if (!this.shapeList.length) throw new Error("No parts to process");
    this.shapeList.some((a) => a.duplicate) || ([...this.shapeList].forEach((s) => {
      s.applyTrim();
      for (let r = s.q; r--; )
        r != 0 && this.shapeList.push(s.clone(r.toString()));
    }), this.shapeList.push(...t), this.shapeList.sort(be.ID));
    const i = this.shapeList.filter((a) => !D(a));
    this.shapeAnalysis(i, this.stockList);
    const n = [];
    if (this.userGroups.forEach((a, s) => {
      for (let r = 0; r < a.q; r++) {
        const l = a.toGroup(s, r, this.shapeList);
        l && n.push(l);
      }
    }), Js(n, this.stockList, this.saw), this.shapeList.push(...n), this.uniqueShapes = this.shapeList.filter((a) => !a?.duplicate), typeof this?.saw?.options?.minSpacing == "number")
      this.hasMinSpacing = !0;
    else {
      const a = this.shapeList.some((s) => s.minSpacing > 0);
      this.hasMinSpacing = a, this.hasShapeLevelMinSpacing = !0;
    }
  }
  shapeAnalysis(t, i) {
    co.call(this, t, this.shapeList), lr.call(this, t, i), uo.call(this, t, i);
  }
  recordStackToBestResult(t, i = []) {
    if (this.bestResult) {
      const n = {
        ...this.bestResult,
        stock: t,
        shapes: i.filter((a) => a.added && a.stock.id === t.id).map((a) => a.compress())
      };
      this.bestResult = cs(n);
    }
  }
  resetClonedShapes(t) {
    t.forEach((i) => {
      const n = this.shapeList.find((a) => a.id === i.id);
      n && n.reset(!1);
    });
  }
  //various methods of choosing a selection of stock for the calculation
  stockRefinement(t, i, n) {
    if (!t.length) return [];
    const a = /* @__PURE__ */ new Set();
    i.forEach((l) => l.stockLock.forEach((o) => a.add(o)));
    const s = t.filter((l) => a.has(l.parentId));
    let r = Qs(s);
    if (n && n?.options?.stockSelection === "smallest")
      return r.sort(be.AA), [r[0]];
    if (r.some((l) => l.material)) {
      const l = r[0].material;
      r = r.filter((o) => o.material === l);
    }
    if (r.some((l) => l.t)) {
      const l = Math.min(...r.map((o) => o.t));
      r = r.filter((o) => o.t === l);
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
      if (T("allStock", `calculating stock ${s.id} with ${l} calculation`), !Ce.types.includes(l))
        throw new Error(`invalid calculation type: ${l} for stock ${s.id}`);
      return r = r.filter((o) => !o.added && o.stockLock.includes(s.parentId)), await Ce[l].call(
        this,
        {},
        s,
        r
      );
    }
    function n(s, r) {
      const l = s.filter((c) => !c.unusable), o = this.stockRefinement(
        l,
        r,
        this.saw
      );
      return o.sort(be.ID), T("allStock", `refined stock ${o.map((c) => c.id).join()}`), o;
    }
    await this.allStock(i, n), this.config.secondRun.enabled && await this.secondRun(), this.config.captureProfile && "profileEnd" in console && typeof console.profileEnd == "function" && console.profileEnd(t);
    const a = [];
    for (const s of this.stockList)
      if (s.segments)
        for (const r of s.segments) {
          const l = r.shapes?.filter((o) => Z(o) && o.added) || [];
          a.push(...l);
        }
    for (const s of this.shapeList)
      if (!(!F(s) || !s.added)) {
        for (const r of a)
          if (r.shapes.some((l) => l.autoId === s.autoId)) {
            s.group.addedAsGroup = r.autoId;
            break;
          }
      }
    for (let s = this.shapeList.length; s--; ) {
      const r = this.shapeList[s];
      de(r) && (r.added && r.stock && r.placeMyShapes(r.stock), this.shapeList.splice(s, 1), this.shapeList.push(...r.shapes));
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
    let n, a = null, s = null, r, l, o, c;
    for (let f = Le(this.stockList, !1); f.length > 0; f = Le(this.stockList, !1)) {
      let u = Q(this.shapeList);
      if (!u?.length) break;
      for (const d of f)
        if (!Q(u, d, "some")) {
          T("allStock", `stock ${d.id} is unusable`), d.unusable = !0;
          break;
        }
      const h = i.call(
        this,
        f,
        u
      );
      if (E([() => $(h.every((d) => Oe(d.saw))).to.be.true]), !h.length) break;
      if (c) {
        const d = h.findIndex((S) => S?.parentId === c);
        d > -1 && h.unshift(h.splice(d, 1)[0]);
      }
      if (a = null, s = null, this.stockList.some((d) => d.used)) {
        T("stack", `🔄 Checking refined stock for stacks/duplicates: ${h.map((d) => d.id).join(", ")}`);
        for (const d of h) {
          T("stack", `current stock: ${d.id}`);
          const S = Q(
            u,
            d
          );
          if (S?.length) {
            if (n && (a = mo.call(this, d, n, S), a)) {
              n = a, r = d;
              break;
            }
            if (this.config.findDuplicatePatterns && (s = So.call(this, d, S), s)) {
              n = d;
              break;
            }
          }
        }
      }
      if (!a && !s) {
        for (const g of h) {
          l = null;
          try {
            g.applyTrim();
          } catch (x) {
            T("info", `stock.applyTrim error ${x.message}`);
            continue;
          }
          const w = Q(this.shapeList);
          if (!w?.length) return;
          if (l = Q(w, g), !l?.length)
            if (g.allowExactFitShapes && (l = w.filter((x) => k.equalTo(
              x.l,
              g.l + g.trim.l1 + g.trim.l2
            ) && k.equalTo(
              x.w,
              g.w + g.trim.w1 + g.trim.w2
            ) || k.equalTo(
              x.w,
              g.w + g.trim.w1 + g.trim.w2
            ) && k.equalTo(
              x.l,
              g.l + g.trim.l1 + g.trim.l2
            ))), l?.length) g.removeTrim();
            else continue;
          if (!l?.length) {
            g.used = !1;
            continue;
          }
          if (this.config.filtering.enable && l.length > this.config.filtering.minTotal) {
            const x = l.length;
            l = fo(this.uniqueShapes, w, g, {
              similarityThreshold: this.config.filtering.similarityThreshold,
              selectionStrategy: "smallest",
              minTotal: this.config.filtering.minTotal
            });
            const I = l.length;
            T("allStock", `filtering reduced shapes by ${x - I}, orginal: ${x}, filtered: ${I}`);
          }
          await t.call(this, g, l), this.resetShapes(l, {
            keepScores: !1,
            removeGroups: !1,
            keepGuillotineData: !1
          }), f.length > 1 && l.filter((I) => D(I)).forEach((I) => I.destroy());
        }
        if (h.forEach((g) => g.used = !1), !this.bestResult || !this.bestResult?.stock)
          break;
        o = _t(this.bestResult, this.stockList), o.score = this.bestResult.score, o.used = !0, n = o;
        const { updatedShapes: d, groups: S } = Ge({
          bestResult: this.bestResult,
          shapeList: this.shapeList,
          relevantStock: h,
          stockList: this.stockList,
          resetShapes: this.resetShapes.bind(this)
        });
        if (S.length > 0 && this.groupList && S.forEach((g) => {
          this.groupList.find((x) => x.autoId === g.autoId) || this.groupList.push(g);
        }), ct(d), this.bestResult?.offcut) {
          const g = {
            x: this.bestResult.totalLength + this.saw.bladeWidth,
            l: this.bestResult.offcut,
            w: this.bestResult.stock.w,
            stock: o
          };
          this.offcuts.push(g);
        }
        o?.saw?.stockType !== "roll" && this.summariseResults([this.bestResult], o);
      }
      u = Q(this.shapeList);
      let p = [], m = [], y = 0;
      if (this.bestResult = null, this.bestPartialResult = null, a && (r?.autoAdd || ut(this.stockList, r)))
        p.push(r);
      else {
        m = Ie(u, !1);
        const d = m.filter((w) => he(w.stockLock)), S = new Set(d.flatMap((w) => Array.isArray(w.stockLock) ? w.stockLock : [w.stockLock]));
        S.size || T("allStock", "no new stock requirements found");
        for (const w of S) {
          const x = this.stockList.filter((I) => {
            if (w === I.parentId) {
              if (I.autoAdd)
                return !0;
              if (ut(this.stockList, I))
                return !0;
            }
            return !1;
          });
          if (x.length && !x.find((I) => !I.used)) {
            const I = x[0].clone(x.length.toString());
            this.stockList.push(I), y++;
          }
        }
        m.filter((w) => !he(w.stockLock) || !w.stockLock.length).length && !p.length && (p = Le(this.stockList).filter((w) => w.autoAdd || ut(this.stockList, w)));
      }
      if (p.length && p.forEach((d) => {
        const S = d.clone(Zs(this.stockList, d));
        this.stockList.push(S), a ? c = S.parentId : c = !1, y++;
      }), y ? (this.stockList.sort(be.AA), this?.job && this.job.updateProgress({
        socketId: this.socketId,
        type: "addStock",
        message: `added ${y} additional stock`,
        stockCount: this.stockList.reduce(
          (d, S) => S.used ? ++d : d,
          0
        ),
        shapeCount: this.shapeList.reduce(
          (d, S) => S.added ? ++d : d,
          0
        )
      })) : this?.job && this.job.updateProgress({
        socketId: this.socketId,
        type: "stockComplete",
        message: `completed stock ${o.parentId}`,
        stockCount: this.stockList.reduce((d, S) => S.used ? ++d : d, 0),
        shapeCount: this.shapeList.reduce((d, S) => S.added ? ++d : d, 0)
      }), this.useInventory && m.length && Le(this.stockList, !1).length === 0) {
        const d = await lo(
          m,
          this.saw,
          this.stockList
        );
        if (d.stockList.length) {
          const S = $t(d.stockList);
          S.length && this.stockList.push(...S);
        }
      }
    }
    this.stockList = this.stockList.filter((f) => f.used);
  }
  /**
   * this idea with secondRun is to redistribute smaller parts to the least efficient stock - ideally reducing the number of stock needed
   * [] only look at stock with a single shape?
   */
  async secondRun() {
    T("secondRun", "starting second run...");
    const t = this.stockList.filter((s) => s.used);
    if (t.filter((s) => s.stack?.number && !s.stack?.stock).forEach((s) => {
      t.filter((r) => r.stack?.stock && V(r.stack.stock) && r.stack.stock.id === s.id).forEach((r) => {
        r.stack = null, r.rootSegment = s.rootSegment;
      }), s.stack = null;
    }), t[0].cutType !== "guillotine") return;
    E([
      () => $(t.length).equal(this.stockList.length),
      () => $(t.every((s) => s.score)).to.be.true,
      () => $(t.every((s) => s.shapes?.length)).to.be.true
    ]), t.sort((s, r) => s.score.efficiency - r.score.efficiency), T("secondRun", `sorted stock, ${t.map((s) => s.id)}`);
    const n = [], a = [];
    for (const s of t)
      s.score.efficiency >= this.config.secondRun.efficiencyCutoff && s.score.totalShapesPlaced > 1 ? n.push(s) : a.push(s);
    if (!(!n.length || !a.length)) {
      n.sort((s, r) => r.score.efficiency - s.score.efficiency), a.sort((s, r) => r.score.efficiency - s.score.efficiency), T("secondRun", `sorted efficient stock, ${n.map((s) => s.id)}`), T("secondRun", `sorted inefficient stock, ${a.map((s) => s.id)}`);
      for (const s of n) {
        if (!a.length) break;
        const r = [];
        for (let u = 0; u < s.shapes.length; u++) {
          const h = s.shapes[u];
          if (!h) throw new Error("shape not found in donorStock.shapes");
          if (D(h)) {
            h.placeMyShapes(s), h.shapes = h.shapes.map((p) => Object.assign({}, p)), s.shapes.splice(u, 1, ...h.shapes), u--;
            continue;
          }
          if (F(h))
            h.reset(), r.push(h);
          else {
            const p = this.shapeList.find((m) => m.id === h.id);
            if (!p) throw new Error(`shape ${h.id} not found in shapeList`);
            p.reset(), r.push(p), s.shapes[u] = p;
          }
        }
        const l = /* @__PURE__ */ new Set();
        let o, c, f = null;
        for (; r.length > 0 && (o = a.find((g) => g ? !l.has(g?.id) && s.shapes[0].stockLock.includes(g.parentId) : !1), !!o); ) {
          T("secondRun", `recipientStock - ${o.id}`), l.add(o.id);
          const u = Ce.getCalculationType(s);
          if (!u) throw new Error(`calculation type not found for stock ${s.id}`);
          const h = o.cutPreference === "l" ? "x" : "y";
          let p = [];
          if (c = o.rootSegment, T("secondRun", `second run, donor stock ${s.id}, recipient stock ${o.id}`), f) {
            f.shapes.forEach((w, x) => {
              if (!F(w)) {
                const I = this.shapeList.find((b) => b.id === w.id);
                f.shapes[x] = I;
              }
            }), o.shapes.forEach((w, x) => {
              if (!F(w)) {
                const I = this.shapeList.find((b) => b.id === w.id);
                o.shapes[x] = I;
              }
            });
            let g = !1;
            if (this.config.secondRun.stack && (g = gs(o, f, [...r, ...o.shapes], this.shapeList)), g) {
              o.stack = { stock: f }, f.stack ? f.stack?.number && f.incrementStack() : f.stack = { number: 2 }, o.shapes.forEach((x) => {
                const I = r.findIndex((b) => b.id === x.id);
                I > -1 && (r.splice(I, 1), s.shapes.splice(s.shapes.findIndex((b) => b.id === x.id), 1));
              });
              const w = a.findIndex((x) => x.id === o.id);
              w > -1 && a.splice(w, 1), T("secondRun", `stack found for ${o.id} in second run`), ct(o.shapes);
              continue;
            }
          }
          if (!c) throw new Error("no root segment found in second run");
          if (ss(c, (g) => {
            if (g.offcut)
              return g[h] === 0 && (g.cutDirection = o.cutPreference, g.phase = 1), g.addToStock(o), p.push(g), !1;
          }), !p.length || (p = $t(p), !p.length)) continue;
          await Ce[u].call(
            this,
            { secondRun: !0 },
            o,
            r,
            p
          );
          const m = r.length;
          for (let g = r.length; g--; )
            r[g].added && r.splice(g, 1);
          const y = r.length, d = m - y;
          if (T("info", `second run, added ${d}`), f = o, m - y === 0) continue;
          const S = a.findIndex((g) => g.id === o.id);
          S > -1 && a.splice(S, 1), ct(o.shapes);
        }
        if (!r.length || r.every((u) => u.added))
          s.used = !1, s.shapes = [], o.shapes.push(...s.shapes);
        else {
          T("info", `second run, not all shapes moved, reverting ${s.shapes.length} shapes`);
          for (const u of s.shapes) {
            const h = this.shapeList.find((p) => p.id === u.id);
            if (!h) throw new Error("original shape not found in second run");
            h.update(u), h.addToStock(s), E([
              () => $(h.added).to.be.true,
              () => $(h.stock?.id).to.equal(s.id),
              () => $(h.x).to.equal(u.x),
              () => $(h.y).to.equal(u.y)
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
    removeUnplacedGroups: a = !1,
    keepGuillotineData: s = !0,
    keepFirstShapeSampleRotations: r = !1
  } = {}) {
    if (t?.length)
      if (a) {
        const l = /* @__PURE__ */ new Set();
        for (const c of t)
          if (D(c) && c.added && c.shapes?.length)
            for (const f of c.shapes)
              l.add(f.autoId);
        const o = t.length;
        for (let c = o; c--; ) {
          const f = t[c];
          if (D(f)) {
            if (f.shapes?.length)
              for (const u of f.shapes)
                u.reset({
                  keepScores: i,
                  keepGuillotineBatchData: s,
                  keepGroupData: !1,
                  keepFirstShapeSampleRotations: r
                });
            f.added || t.splice(c, 1);
          } else
            l.has(f.autoId) ? t.splice(c, 1) : f.reset({
              keepScores: i,
              keepGuillotineBatchData: s,
              keepGroupData: !1,
              keepFirstShapeSampleRotations: r
            });
        }
      } else {
        const l = t.length;
        for (let o = l; o--; ) {
          const c = t[o];
          if (D(c)) {
            if (c.shapes?.length)
              for (const f of c.shapes)
                f.reset({
                  keepScores: i,
                  keepGuillotineBatchData: s,
                  keepGroupData: !1,
                  keepFirstShapeSampleRotations: r
                });
            n ? t.splice(o, 1) : c.added = !1;
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
function To() {
  R("Issue", Me), R("Line", qe), R(W.Line, qe), R("Point", yt), R(W.Point, yt), R("Rectangle", ei), R(W.Rectangle, ei), R("Container", Re), R(W.Container, Re), R("GuillotineState", ze), R(W.GuillotineState, ze), R("Placeable", pt), R(W.Placeable, pt), R("Group", St), R(W.Group, St), R("Offcut", Xe), R(W.Offcut, Xe), R("Segment", pe), R(W.Segment, pe), R("Shape", ti), R(W.Shape, ti), R("Stock", bt), R(W.Stock, bt), R("Banding", ii), R("banding", ii), R("Corner", si), R("corner", si), R("Cut", dt), R(W.Cut, dt), R("Extras", ni), R(W.Extras, ni), R("Finish", ri), R("finish", ri), R("HingeHole", oi), R("hingeHole", oi), R("Hole", ai), R("hole", ai), R("ImageUpload", mi), R("imageUpload", mi), R("InputSaw", li), R(W.InputSaw, li), R("InputShape", ci), R(W.InputShape, ci), R("InputStock", ui), R(W.InputStock, ui), R("InputUserGroup", fi), R(W.Group, fi), R("Machining", hi), R(W.Machining, hi), R("Optimiser", Di), R(W.Optimiser, Di), R("Planing", pi), R("planing", pi), R("PointCollection", wt), R(W.PointCollection, wt), R("Saw", je), R(W.Saw, je);
}
export {
  To as initializeStaticRegistry
};

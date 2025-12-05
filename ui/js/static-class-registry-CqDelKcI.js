import { G as hs, H as He, J as oe, K as Ei, L as ds, M as ps, N as gs, O as ms, P as rt, Q as Ss, R as ys, T as ws, U as bs, V as $s, W as ht, X as xs, Y as Is, _ as H, $ as dt, a0 as ge, a1 as ks, a2 as Ae, a3 as Ts, a4 as D, a5 as Y, a6 as ye, a7 as P, a8 as ot, a9 as k, aa as vi, ab as F, ac as j, ad as he, ae as M, af as Te, ag as v, ah as $, ai as we, aj as Cs, ak as pt, al as Ft, am as ve, an as J, ao as Di, ap as Z, aq as ze, z as me, ar as re, as as at, at as _, au as De, av as Le, aw as gt, ax as Ps, ay as Ri, az as Es, aA as vs, aB as ue, aC as We, aD as be, aE as Ce, aF as $e, aG as Ds, aH as Ai, aI as Li, aJ as Mi, aK as Oe, aL as Rs, aM as Oi, aN as qi, aO as As, aP as mt, aQ as Ls, aR as le, aS as it, aT as Fi, aU as Ms, aV as Vt, aW as Os, aX as qs, aY as Fs, aZ as Gs, a_ as Kt, a$ as Ns, b0 as St, b1 as yt, b2 as Bs, b3 as Hs, b4 as zs, F as Ne, S as Ue, b5 as Ws, b6 as wt, b7 as bt, b8 as Us, b9 as js, ba as Re, bb as Ys, bc as Xs, bd as lt, be as ct, bf as _s, bg as R, bh as Jt, bi as Qt, bj as Zt, bk as ei, bl as ti, bm as ii, bn as si, bo as ni, bp as ri, bq as oi, I as ai, br as li, bs as ci, bt as ui } from "./components-By5q8-Op.js";
import { b as de, n as se, _ as je, o as Gi, c as fi, s as Ie, a as ut, H as ee, I as W, J as te, K as Pe, L as Vs, M as z, N as Ye, O as U, P as Ks } from "./vendor-zod-PVURV34D.js";
import { m as Ni, a as Js } from "./vendor-lodash-CYGhmG8H.js";
import { k as X } from "./vendor-tCV_BFOF.js";
import { m as Bi } from "./vendor-mongoose-C3uS1h_U.js";
import "./vendor-i18next-CacwiV0i.js";
const Hi = ["root", "firstShape", "near", "far", ""], Qs = hs.extend({
  // Cutting information
  cuts: oe("Cut").default([]).behavior({ compress: "exclude" }),
  // Stock reference - serialize as reference only (default zRef behavior)
  stock: He("Stock", { nullable: !0, description: "Stock reference for this segment" }),
  phase: se().int().min(0).nullable().default(null),
  cutDirection: je(Ei).nullable().default(null).describe("The primary cut direction for this segment"),
  // Segment properties
  merged: de().default(!1),
  firstShape: He("Shape"),
  children: oe("Segment", {
    description: "Child segments"
  }).behavior({
    serialize: "full",
    // Serialize the full segment objects
    compress: "full",
    // Even in compressed mode, keep full objects
    clone: "copy"
  }),
  parent: He("Segment", { nullable: !0 }).behavior({
    serialize: "reference",
    // Parent can stay as reference
    compress: "exclude"
    // Exclude parent in compressed mode to avoid circular refs
  }),
  type: je(Hi).nullable().default(null),
  placementOrder: se().int().min(0).optional(),
  // Beam saw specific
  hasBeamTrim: de().default(!1),
  hasHeadCut: de().default(!1),
  isInitial: de().default(!1),
  // Trim offcut flag - marks segments that represent trim areas (W1, W2, L1 for beam)
  isTrimOffcut: de().default(!1),
  // Visualization flags
  completed: de().optional(),
  rowSegment: de().optional()
});
Gi({
  x: se().optional(),
  y: se().optional(),
  l: se().optional(),
  w: se().optional(),
  type: je(Hi),
  parent: fi(),
  // Segment instance
  stock: fi(),
  // Stock instance
  offcut: de().optional(),
  merged: de().optional(),
  cutDirection: je(Ei).nullable().optional()
});
const Zs = {
  ...ds,
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
}, en = Gi({
  id: Ie().optional(),
  url: Ie().optional(),
  size: se().optional(),
  mimeType: Ie().optional(),
  name: Ie().optional(),
  width: se().optional(),
  height: se().optional()
}), tn = ps.extend({
  // ImageUpload specific properties
  images: ut(en).default([]).describe("Array of uploaded images"),
  maxImages: se().default(5).describe("Maximum number of images allowed"),
  allowedTypes: ut(Ie()).default(["image/jpeg", "image/png", "image/gif"]).describe("Allowed MIME types"),
  maxSizeBytes: se().default(5242880).describe("Maximum file size in bytes (default 5MB)"),
  description: Ie().optional().describe("Description of uploaded images"),
  tags: ut(Ie()).default([]).describe("Tags associated with images")
  // Note: faces and sides inherited from Extra base
}), sn = {
  // Inherit computed properties from Extra base class
  ...gs,
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
}, nn = ms, rn = {
  cacheResults: !0
};
let zi;
zi = Ni({}, nn, rn);
let Q = zi;
function on() {
  if (Q.guillotine.secondPass && !Q.guillotine.strips.rearrange)
    throw new Error("config.guillotine.secondPass requires config.guillotine.strips.rearrange to be enabled");
  if (Q.captureProfile && Q.runTests)
    throw new Error("config.captureProfile and config.runTests should not be both enabled");
}
on();
function an(e, t = null) {
  if (!e) return Q;
  const i = ln(e, t);
  if (!i) return Q;
  const n = Ni({}, Q, i);
  return console.log(`[CONFIG] custom config applied for ${e?.username}`), n;
}
function ln(e, t = null) {
  if (!e || !e?.config) return null;
  switch (e.id) {
    //Glassense Kolu
    case "662a2f8ad28745b63665e68a": {
      const i = "shapeList" in t ? t.shapeList : t.inputShapes, n = i ? i.reduce((o, s) => o + (s.q || 0), 0) : 0;
      if (t) if (n <= 80) {
        const o = { ...e.config };
        return o.groups.guillotine.strips = Q.groups.guillotine.strips, o.sample.guillotine = Q.sample.guillotine, o.guillotine.stripShapes.iterations = Q.guillotine.stripShapes.iterations, o;
      } else
        return e.config;
      else return e.config;
    }
  }
  return e.config;
}
function hi(e, t, i) {
  return Js(e, t, i);
}
const cn = ee({
  // Context - using z.any() for complex external types
  job: U().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: z().nullable().default(null).describe("Socket.io connection ID"),
  user: U().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: U().describe("Configuration object"),
  // Type: Config
  api: W().nullable().default(null).describe("API mode flag"),
  app: W().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: He("Saw").describe("Saw configuration"),
  stockList: oe("Stock").default([]).describe("List of stock materials"),
  shapeList: rt(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: oe("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: oe("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: oe("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: rt(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: rt(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: Ss,
  // Results storage
  cutList: oe("Cut").default([]).describe("List of cuts to make"),
  segmentList: oe("Segment").default([]).describe("List of segments"),
  offcuts: oe("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: oe("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: W().default(!1).describe("Use inventory system"),
  successMetric: z().default(Q.successMetric).describe("Metric for optimization success"),
  enableEvo: W().default(!0).describe("Enable evolutionary algorithm"),
  weighting: Pe(z(), U()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: U().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: U().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: ee({
    placement: Ye().default(0),
    group: Ye().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: W().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: W().default(!1).describe("Run guillotine second pass"),
  runningEvo: W().default(!1).describe("Currently running evolution"),
  evolutionVisData: te(Pe(z(), Vs())).default([]).describe("Evolution visualization data"),
  final: W().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: W().default(!1).describe("Has minimum spacing requirement")
}), un = {}, fn = Ks(["decimal", "fraction"]);
ee({
  job: U().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Allow additional properties like __entityType and autoId
  inputSaw: ys,
  inputShapes: te($s),
  inputStock: te(bs),
  inputUserGroups: te(ws).optional(),
  // Number format for conversion
  numberFormat: fn.optional(),
  // Algorithm configuration
  enableEvo: W().default(!0),
  weighting: U().optional(),
  successMetric: z().optional(),
  useInventory: W().default(!1),
  // Context
  socketId: z().optional(),
  user: U().optional(),
  // IUser type
  // Application flags
  widget: W().optional(),
  api: W().optional(),
  app: W().optional(),
  domain: z().optional(),
  // Extras options (centralized configuration)
  extrasOptions: ee({
    banding: ee({
      options: ee({
        sides: Pe(z(), te(z())).optional()
      }).optional()
    }).optional(),
    finish: ee({
      options: ee({
        faces: Pe(z(), te(z())).optional()
      }).optional()
    }).optional(),
    planing: ee({
      options: ee({
        sides: Pe(z(), te(z())).optional(),
        faces: Pe(z(), te(z())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // API specific
  config: U().optional(),
  v: Ye().optional(),
  // API version
  webhook: z().optional(),
  //source
  sourceVersion: z().nullish(),
  source: z().optional()
});
ee({
  job: U().optional(),
  // Type: Job from BullMQ
  saw: U(),
  // Runtime Saw instance
  shapeList: te(U()),
  // Runtime Shape instances
  stockList: te(U()),
  // Runtime Stock instances
  userGroups: te(U()).optional(),
  // Runtime Group instances
  enableEvo: W(),
  weighting: U().optional(),
  successMetric: z().optional(),
  useInventory: W(),
  socketId: z().optional(),
  user: U().optional(),
  widget: W().optional(),
  api: W().optional(),
  app: W().optional(),
  domain: z().optional(),
  config: U().optional(),
  v: Ye().optional(),
  webhook: z().optional()
});
class Xe extends ht {
  // Required: Define schema and computed properties for SchemaClass
  static schema = xs;
  static computedProperties = Is;
  constructor(t = {}) {
    const i = { ...t, offcut: !0 };
    super(i), this.offcut = !0;
  }
  /**
    * Get entity type
    */
  getType() {
    return H.Offcut;
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
class ce extends dt {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Qs;
  static computedProperties = Zs;
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
    return H.Segment;
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
        ge() && console.log(`[PARENT CHANGE] Moving ${t.autoId} from parent ${i.autoId} to ${this.autoId}`);
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
class di extends ks {
  // Properties are dynamically created from schema via SchemaClass
  // Static schema reference for automatic updates
  static schema = tn;
  static computedProperties = sn;
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
    if (this.images && this.images.length > this.maxImages && i.push(new Ae({
      item: t,
      message: `Too many images: ${this.images.length} exceeds maximum of ${this.maxImages}`,
      type: "error"
    })), this.images)
      for (let n = 0; n < this.images.length; n++) {
        const o = this.images[n];
        if (o.url || i.push(new Ae({
          message: `Image ${n + 1} is missing URL`,
          type: "error"
        })), o.mimeType && !this.allowedTypes.includes(o.mimeType) && i.push(new Ae({
          message: `Image ${n + 1} has unsupported type: ${o.mimeType}`,
          type: "warning"
        })), o.size && o.size > this.maxSizeBytes) {
          const s = (o.size / 1048576).toFixed(2), r = (this.maxSizeBytes / 1048576).toFixed(2);
          i.push(new Ae({
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
X.colors = [
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
const Ee = X("logs"), $t = X("cuts"), _e = X("groups"), Ve = X("guillotine"), xt = X("results"), It = X("scoring"), kt = X("firstShapes"), Tt = X("calculations"), Ct = X("subset"), Pt = X("secondRun"), Et = X("stack"), Ke = X("errors"), vt = X("allStock"), Je = X("reset"), Qe = X("swarm");
Ke.color = 1;
_e.color = 14;
Ve.color = 159;
Je.color = 11;
Qe.color = 5;
function hn(e = "info", t, i) {
  const n = t.map((r) => {
    const l = { ...r };
    for (const c in l)
      typeof l[c] == "string" && l[c].length > 30 && (l[c] = l[c].slice(0, 50) + "...");
    return l;
  }), o = console.table;
  let s = "";
  switch (console.table = (r, l) => {
    const c = console.log;
    console.log = (a) => {
      s += a + `
`;
    }, o(r, l), console.log = c;
  }, console.table(n, i), e) {
    case "info":
      Ee(s);
      break;
    case "guillotine":
      Ve(s);
      break;
    case "results":
      xt(s);
      break;
    case "secondRun":
      Pt(s);
      break;
    case "cuts":
      $t(s);
      break;
    case "scoring":
      It(s);
      break;
    case "calculations":
      Tt(s);
      break;
    case "stack":
      Et(s);
      break;
    case "subset":
      Ct(s);
      break;
    case "errors":
      Ke(s);
      break;
    case "allStock":
      vt(s);
      break;
    case "firstShapes":
      kt(s);
      break;
    case "groups":
      _e(s);
      break;
    case "reset":
      Je(s);
      break;
    case "swarm":
      Qe(s);
      break;
    default:
      Ee(s);
  }
  console.table = o;
}
const dn = "\x1B[31m", pn = "\x1B[0m", T = (e = "info", t, i = null, n = null, o = !1, s) => {
  if (s?.enableLogging, o) {
    switch (e) {
      case "info":
        Ee(t);
        break;
      case "guillotine":
        Ve(t);
        break;
      case "results":
        xt(t);
        break;
      case "secondRun":
        Pt(t);
        break;
      case "cuts":
        $t(t);
        break;
      case "scoring":
        It(t);
        break;
      case "calculations":
        Tt(t);
        break;
      case "stack":
        Et(t);
        break;
      case "subset":
        Ct(t);
        break;
      case "errors":
        Ke(`${dn}${t}${pn}`);
        break;
      case "allStock":
        vt(t);
        break;
      case "firstShapes":
        kt(t);
        break;
      case "groups":
        _e(t);
        break;
      case "reset":
        Je(t);
        break;
      case "swarm":
        Qe(t);
        break;
      default:
        Ee(t);
    }
    if (i)
      switch (e) {
        case "info":
          Ee(i);
          break;
        case "guillotine":
          Ve(i);
          break;
        case "results":
          xt(i);
          break;
        case "secondRun":
          Pt(i);
          break;
        case "cuts":
          $t(i);
          break;
        case "scoring":
          It(i);
          break;
        case "calculations":
          Tt(i);
          break;
        case "stack":
          Et(i);
          break;
        case "subset":
          Ct(i);
          break;
        case "errors":
          Ke(i);
          break;
        case "allStock":
          vt(i);
          break;
        case "firstShapes":
          kt(i);
          break;
        case "groups":
          _e(i);
          break;
        case "reset":
          Je(i);
          break;
        case "swarm":
          Qe(i);
          break;
        default:
          Ee(i);
      }
    n && hn(e, n);
  }
};
Ts(T);
function gn(e, t) {
  return e?.length && e.forEach((i) => {
    t = t.filter((n) => !(n.id === i.id || D(n) && n.shapes.find((o) => o.id === i.id)));
  }), t;
}
const ie = {
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
function pe(e, t) {
  if (!t) return e;
  const i = t.weighting;
  if (!i) return e;
  for (const n in i)
    i[n] !== null && (e[n] = e[n] * i[n]);
  return e;
}
function Gt(e, t, i) {
  if (this?.weighting?.custom)
    return pe(this.weighting.custom, i);
  switch (e.cutType) {
    case "efficiency":
      if (t?.saw?.stockType === "roll")
        return pe(ie.roll.efficiency(), i);
      break;
    case "beam":
      return pe(ie.guillotine.beam(), i);
    case "guillotine": {
      if (t?.saw?.stockType === "roll")
        return pe(ie.roll.guillotine(), i);
      switch (t.saw.guillotineOptions.strategy) {
        case "time":
          return pe(
            ie.guillotine.time(),
            i
          );
        case "efficiency":
          return pe(
            ie.guillotine.stock(),
            i
          );
        default:
          return pe(
            ie.guillotine.stock(),
            i
          );
      }
    }
  }
  return pe(ie[e.cutType].standard(), i);
}
class mn {
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
      weighting: Gt.call(
        this.CLO,
        i,
        Y(i) ? i : i.getStock
      )
    }, this.weighting = this.weightingKeys[this.container.cutType], i?.saw?.stockType === "roll" && (this.selectionMethod = "rollLength", this.weighting = this.weightingKeys.roll), this.uniqueShapes = ye(n, !1), this.population = [], this.options = {
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
      this.population.push(new pi(this, t));
    this.population.push(new pi(
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
        this.bestResult = t, this.bestResult.weighting = structuredClone(i.weighting), D(this.bestResult.firstShape) && this.bestResult.firstShape.shapes.forEach((n) => t.shapes.push(n.compress()));
      else {
        if (t.score.efficiency <= this.bestResult.score.efficiency)
          return;
        this.bestResult = t, this.bestResult.weighting = structuredClone(i.weighting), D(this.bestResult.firstShape) && this.bestResult.firstShape.shapes.forEach((n) => t.shapes.push(n.compress()));
      }
  }
  async run() {
    this.CLO.runningEvo = !0, P("swarm", `Swarm starting - population: ${this.options.populationSize}, steps: ${this.options.steps}`), this.CLO.resetShapes(this.shapeList), this.createPopulation();
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
    return await t.call(this), this.CLO.runningEvo = !1, this.bestResult.type = "evo", P("swarm", `Swarm complete - best efficiency: ${this.bestResult?.score?.efficiency?.toFixed(3)}`), {
      result: this.bestResult,
      evolutionVisData: this.evolutionVisData
    };
  }
}
class pi {
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
    const t = ie.efficiency.standard();
    this.weighting = {};
    for (const [i, n] of Object.entries(t)) {
      const o = n;
      if (this.swarm?.weighting && this.swarm.weighting.indexOf(i) > -1) {
        let s = o - this.swarm.mutation.range, r = o + this.swarm.mutation.range;
        s < this.swarm.mutation.min && (s = this.swarm.mutation.min), r > this.swarm.mutation.max && (r = this.swarm.mutation.max), this.weighting[i] = ot(s, r);
      } else this.weighting[i] = t[i];
    }
  }
  //assess fitness and generate a score
  async assess() {
    if (this.swarm.progress.current++, !!this.alive) {
      switch (this.previousScore = this.score, this.previousScore && (this.previousScore.weighting = this.weighting), this.swarm.container.cutType) {
        case "efficiency":
          {
            const t = await ke.runSpecificStrategy.call(
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
      if (this.score) {
        const t = Object.entries(this.weighting).map(([i, n]) => `${i}: ${typeof n == "number" ? n.toFixed(2) : n}`).join(", ");
        P("swarm", `Individual ${this.id} - efficiency: ${this.score.efficiency?.toFixed(3)} | weighting: { ${t} }`);
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
      i ? r += ot(-0.1, 0.1) : r += ot(-0.05, 0.05), this.weighting[n] += r;
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
function Dt(e, t, i = "x") {
  if (!t) return !1;
  const n = i === "x" ? "l" : "w";
  return !!(k.greaterThanOrEqualTo(e[i], t[i]) && k.lessThanOrEqualTo(e[i] + e[n], t[i] + t[n]));
}
function Ze(e, t, i = "x") {
  if (!t) return !1;
  const n = vi(i);
  return !!(k.greaterThanOrEqualTo(e[i], t[i]) && k.lessThan(e[i], t[i] + t[n]));
}
function Wi(e) {
  return {
    cutAxis: e === "l" ? "x" : "y",
    positionAxis: e === "l" ? "y" : "x",
    cutDimension: e,
    positionDimension: F(e)
  };
}
function Sn(e, t, i) {
  return e?.length ? e.filter((n) => n.added && k.equalTo(n[t], i)) : [];
}
function yn(e, t) {
  return e?.guillotineState?.myPhase === t;
}
function wn(e, t) {
  e?.guillotineState && (e.guillotineState.myStripDirection = t);
}
function bn(e, t) {
  if (!e) return;
  let i = e;
  for (; i.parent; )
    i = i.parent, t();
}
const B = {
  previousSegments: [],
  ptxCuts: 0,
  segments: 0,
  //this needs to be here, as it's shared with the front end - cannot be put into optimiser
  makeCutsIteration: 0
};
function Ui() {
  B.previousSegments = [], B.ptxCuts = 0, B.segments = 0, B.makeCutsIteration = -1;
}
function Nt({
  container: e,
  shapes: t = [],
  forceNoHeadCut: i = !1,
  final: n = !1,
  saw: o = null
}) {
  B.ptxCuts = 0;
  const s = e.getStock;
  o && (s.saw = o);
  const r = j(e);
  let l;
  const c = r ? e.cutDirection : e.cutPreference;
  if (r && e.type === "root")
    l = e, l.cuts = [], l.children = [], P("cuts", `REUSING ROOT [${l.autoId ? l.id : "unknown"}] l=${l.l}, w=${l.w}, DIR ${c?.toUpperCase()}`);
  else {
    const d = B.segments.toString();
    B.segments++, l = new ce({
      id: d,
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
      type: B.segments === 0 ? "root" : "",
      phase: r ? e.phase + 1 : 0,
      hasHeadCut: r ? e.hasHeadCut : !1,
      cutDirection: c,
      isInitial: r ? e.isInitial : !0
    });
  }
  B.previousSegments = [];
  const a = Fe.call(
    this,
    {
      segment: l,
      stock: s,
      allStockShapes: t,
      forceNoHeadCut: i,
      final: n
    }
  );
  let h, f, u;
  try {
    [h, f, u] = Un(l, n, a.headCutCount);
  } catch (d) {
    return P("errors", `issue analysing segments ${d.message}`), {
      rootSegment: null,
      cuts: [],
      offcuts: []
    };
  }
  if (r && u.length > 0) {
    const d = u.map((p) => `${p.id}@(${p.x},${p.y})`).join(", ");
    P("cuts", `[calculateStripCuts] Returning ${u.length} offcuts for container segment at (${e.x},${e.y}): ${d}`);
  }
  return {
    rootSegment: h,
    cuts: f,
    offcuts: u
  };
}
function $n(e, t = !1) {
  let i = Wi(e);
  return t && (i = Xi(i)), i;
}
function xn(e, t, i, n, o, s, r) {
  if (this?.config && !this?.config?.guillotine?.extendSegments || t.cutType !== "guillotine" || t?.saw?.guillotineOptions?.strategy === "time") return !1;
  const l = e?.merged, c = e?.parent?.merged;
  if (l && c) return !1;
  const a = yn(i, 1), h = e?.parent ? e.parent?.hasHeadCut : !1;
  let f = !a || h;
  if (!f || (t?.saw?.stockType === "roll" && a && (f = !1), t?.saw?.stockType === "roll" && s === "w")) return !1;
  let u = r.length > 1 && n < r.length - 1;
  h && (u = !0);
  const d = k.lessThan(
    i[s],
    e[s]
  );
  return u && d && !o;
}
function Bt(e) {
  const t = F(e.cutPreference);
  return ve(t);
}
function In(e) {
  return F(e.cutPreference);
}
function kn(e) {
  const t = Bt(e);
  let i = 0;
  return e?.getStock?.hasTrim && e?.getStock?.trimmed === !1 && (i = e?.getStock?.trim?.[t === "x" ? "x1" : "y1"] ?? 0), i;
}
function ji(e) {
  const t = Bt(e), i = kn(e);
  return e[t] === i;
}
function Yi(e, t, i) {
  if (!this?.config?.guillotine?.allowHeadCuts || !e?.guillotineOptions?.headCuts || !ji(i)) return !1;
  const n = In(i), o = Bt(i);
  if (t[o] > i[o]) return !1;
  let s = !1;
  const r = 0.75;
  if (M(t) && t.group.addedAsGroup) {
    const l = i.shapes.filter((h) => h.group?.addedAsGroup === t.group.addedAsGroup), c = ve(n), a = Te(l, c);
    a[n] + a[c] >= i[n] * r && (s = !0);
  } else t[n] >= i[n] * r && (s = !0);
  return s;
}
class Ht {
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
    const t = $n(this.segment.cutDirection, this.isHeadCut);
    return v([() => $(t.cutDimension).to.equal(this.isHeadCut ? F(this.segment.cutDirection) : this.segment.cutDirection)]), t;
  }
  //segment cut direction doesn't change, but this computed property will
  get cutDirection() {
    return this.isHeadCut ? F(this.segment.cutDirection) : this.segment.cutDirection;
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
    return new Ht({
      ...this,
      ...t
    });
  }
  // get shapes that are within boundaries of current strip
  getShapesInCurrentStrip() {
    return this.currentStripParent ? this.segment.shapes.filter((t) => Ze(t, this.currentStripParent, this.cutInfo.positionAxis)) : [];
  }
}
function Xi(e) {
  return {
    positionAxis: we(e.positionAxis),
    positionDimension: F(e.positionDimension),
    cutAxis: we(e.cutAxis),
    cutDimension: F(e.cutDimension)
  };
}
function gi(e) {
  return e.type === "root" && e.isInitial;
}
function Fe({
  segment: e,
  stock: t,
  allStockShapes: i = [],
  forceNoHeadCut: n = !1,
  previousCutPosition: o = null,
  previousEdgeOfSegment: s = !1,
  final: r = !1,
  headCutCount: l = 0,
  attemptedDirections: c = /* @__PURE__ */ new Set()
}) {
  P("cuts", `[makeCuts] START: segment ${e.l}x${e.w} phase=${e.phase} type=${e.type} shapes=${e.shapes?.length || 0} final=${r}`);
  let a = new Ht({
    segment: e,
    stock: t,
    allStockShapes: i,
    forceNoHeadCut: n,
    previousCutPosition: o,
    previousEdgeOfSegment: s,
    final: r,
    headCutCount: l,
    attemptedDirections: c
  });
  if (!Cn.call(this, a)) {
    P("cuts", "[makeCuts] EARLY RETURN: invalid input");
    return;
  }
  if (En.call(this, a)) {
    P("cuts", "[makeCuts] EARLY RETURN: duplicate segment");
    return;
  }
  Pn(a), a = vn.call(this, a), a = Rn.call(this, a), P("cuts", `[makeCuts] Found ${a.stripParentShapes.length} strip parent shapes`), a.stripParentShapes.length && (a.segment.offcut = !1);
  for (let y = 0; y < a.stripParentShapes.length; y++) {
    if (a = a.with({ currentStripIndex: y }), P("cuts", `[makeCuts] Processing shape ${y}: ${a.currentStripParent.l}x${a.currentStripParent.w}`), a.currentStripParent.l === t.l && a.currentStripParent.w === t.w) {
      P("cuts", "[makeCuts] Shape matches stock size, marking as produced"), a = Si.call(this, a);
      break;
    }
    if (a = zn.call(this, a), a.final && a.segment?.parent?.hasHeadCut && a.segment.phase === 1 && e.type === "far" && a.isHeadCut === !1) {
      const w = Xi(a.cutInfo), { cutAxis: x, cutDimension: I, positionDimension: b, positionAxis: E } = w;
      st({
        parentSegment: e,
        stock: t,
        cutDirection: I,
        cutAxis: x,
        positionAxis: E,
        position: e[b] + e[E],
        headCut: !0,
        ptxDummyCut: !0
      });
    }
    if (a = An.call(this, a), a.final && t.cutType === "beam" && y === 0 && (e.type !== "far" || _i(a)) && (a = Ln.call(this, a)), a = Mn.call(this, a), Tn.call(this, a) === !0) {
      P("cuts", "[makeCuts] Breaking due to edge of segment");
      break;
    }
    if (a = Nn.call(this, a), a.cut)
      a.isHeadCut && (a.segment.hasHeadCut = !0);
    else if (a.isHeadCut) {
      const w = F(a.cutDirection);
      a.attemptedDirections.has(w) ? P("cuts", `[makeCuts] Skipping reattempt - direction ${w} already attempted`) : (a = a.with({ forceNoHeadCut: !0 }), mi.call(this, a, w));
      break;
    }
    if (a = a.with({
      cutSuccess: !!a.cut,
      skippedCut: a.cut ? null : !0,
      headCutCount: a.isHeadCut && a.cut ? a.headCutCount + 1 : a.headCutCount
    }), a.cut) {
      if (a.final && (a = Si.call(this, a), t.cutType === "beam" && On.call(this, a), a.cut)) {
        let w = e.parent?.autoId;
        (w === "root" || !w) && (w = "R"), w = `[${w}]`;
        let x = e.autoId ? e.id : "unknown";
        x = `[${x}]`, P("cuts", `${w}->${x} P${e.phase} {${a.currentStripParent.autoId}} ${a.isHeadCut ? "HEAD" : "NORM"} ${e?.type?.toUpperCase()} ${he(e.l, 4)}x${he(e.w, 4)} ${he(a.cutPosition, 4)} ${he(a?.cut?.x1, 4)}|${he(a?.cut?.x2, 4)}|${he(a?.cut?.y1, 4)}|${he(a?.cut?.y2, 4)}`), P("cuts", `DIRECTIONS FOR ${x}: STATE ${a?.cutDirection?.toUpperCase()} CUT ${a.cut?.dimension?.toUpperCase() ?? "N/A"} SEGMENT ${e?.cutDirection?.toUpperCase()}`);
      }
      if (a = Bn.call(this, a), a = Hn.call(this, a), a.isHeadCut) break;
    }
  }
  const h = Vi(a.segment), { allShapesCut: f } = Ji(a.segment.shapes, h, a.segment), u = a.segment.cutDirection, d = F(u), p = !a.attemptedDirections.has(u), m = !a.attemptedDirections.has(d), g = e.cuts.length === 0;
  if (!f && p && m && g) {
    P("cuts", `[makeCuts] Not all shapes cut in segment [${e.id}] with ${a.segment.shapes.length} shapes, retrying in ${d?.toUpperCase()} direction`);
    const y = new Set(a.attemptedDirections);
    return y.add(u), a = a.with({ attemptedDirections: y }), mi.call(this, a, d), a;
  }
  return a.final && t.cutType === "beam" && e.phase === 0 && (a = Fn.call(this, a)), a.final && t.cutType === "beam" && e.type === "far" && e.parent.hasHeadCut && (a = Gn.call(this, a)), a;
}
function _i(e) {
  const { segment: t, isHeadCut: i } = e;
  return i ? !1 : t?.parent?.hasHeadCut && t.type === "far";
}
function Tn(e) {
  if (!e.isEdgeOfSegment) return !1;
  const { currentStripParent: t, segment: i, cutInfo: n } = e, { positionDimension: o, positionAxis: s } = n;
  if (k.greaterThanOrEqualTo(t[o] + t[s] + e.bladeWidth, i[o] + i[s]) && e.stock.cutType === "beam" || (e = e.with({ previousEdgeOfSegment: !0 }), !i.children.length)) return !1;
  const l = e.segment.children.findLast((c) => c.type === "far");
  return l && (e = e.with({ segment: l }), l.cutDirection = F(e.cutDirection), Fe.call(this, {
    segment: l,
    stock: e.stock,
    allStockShapes: e.allStockShapes,
    forceNoHeadCut: e.forceNoHeadCut,
    previousCutPosition: e.previousCutPosition,
    previousEdgeOfSegment: e.previousEdgeOfSegment,
    final: e.final,
    headCutCount: e.headCutCount
  })), !0;
}
function Vi(e, t = /* @__PURE__ */ new Set()) {
  if (t.has(e.autoId)) return [];
  t.add(e.autoId);
  const i = [...e.cuts];
  if (e.children?.length)
    for (const n of e.children)
      i.push(...Vi(n, t));
  return i;
}
function mi(e, t) {
  const { segment: i } = e;
  i.cutDirection = t;
  const n = new Set(e.attemptedDirections);
  return n.add(t), e = e.with({
    isHeadCut: !1,
    attemptedDirections: n
  }), i.cuts.length = 0, i.clearChildren(), e.segment.hasHeadCut = !1, P("cuts", `REATTEMPTING [${i.id}] new direction ${i?.cutDirection?.toUpperCase()}`), Fe.call(this, {
    segment: e.segment,
    stock: e.stock,
    allStockShapes: e.allStockShapes,
    forceNoHeadCut: e.forceNoHeadCut,
    previousCutPosition: e.previousCutPosition,
    previousEdgeOfSegment: e.previousEdgeOfSegment,
    final: e.final,
    headCutCount: e.headCutCount,
    attemptedDirections: n
  }), !0;
}
function Cn(e) {
  if (!e.segment) return !1;
  const { segment: t, stock: i, cutDirection: n, previousCutPosition: o, allStockShapes: s } = e;
  return !["l", "w"].includes(n) || t.l <= 0 || t.w <= 0 || o === void 0 ? !1 : (v([
    () => $(s.every((r) => M(r) || D(r)), "allStockShapes must be shape or any type of group").to.be.true,
    () => $(Y(i)).to.be.true
  ]), !0);
}
function Pn(e) {
  const { final: t } = e;
  return t && B.makeCutsIteration++, e;
}
function En(e) {
  const { segment: t, cutDirection: i } = e;
  return t.type !== "root" && B.previousSegments.some((n) => t.l === n.l && t.w === n.w && t.x === n.x && t.y === n.y && t.type === n.type && i === n.cutDirection);
}
function vn(e) {
  const { segment: t, cutDirection: i } = e;
  return B.previousSegments.push({
    w: t.w.valueOf(),
    l: t.l.valueOf(),
    x: t.x.valueOf(),
    y: t.y.valueOf(),
    type: t.type,
    cutDirection: i.valueOf()
  }), B.previousSegments.length > 20 && (B.previousSegments = B.previousSegments.slice(-20)), e;
}
function Dn(e, t, i) {
  return e.filter(
    (n, o, s) => s.findIndex(
      (r) => k.equalTo(
        r[t] + r[i],
        n[t] + n[i]
      )
    ) === o
  );
}
function Rn(e) {
  const { segment: t, stock: i, cutDirection: n, cutInfo: o, previousCutPosition: s, halfBladeWidth: r } = e, { cutAxis: l, positionAxis: c, positionDimension: a } = o;
  let h = [];
  if (P("cuts", `Finding strip parent shapes. Segment ${t.id} has ${t.shapes.length} shapes:`), t.shapes.slice(0, 3).forEach((f) => {
    P("cuts", `  Shape ${f.id}: l=${f.l}, w=${f.w}, rot=${f.rot}, at (${f.x},${f.y}), added=${f.added}`);
  }), i.cutPreference === n) {
    const f = t.type === "far" && i.cutType === "guillotine" || !s ? t[l] : s + r;
    P("cuts", `[findStripParentShapes] cutPreference=${i.cutPreference}, cutDirection=${n}, cutAxis=${l}, axisPosition=${f}, segment.shapes[0]?.[${l}]=${t.shapes[0]?.[l]}, segment.type=${t.type}`), h = Sn(
      t.shapes,
      l,
      f
    );
  } else {
    P("cuts", `[findStripParentShapes] NOT using cutPreference path, cutPreference=${i.cutPreference}, cutDirection=${n}, cutAxis=${l}, segment[${l}]=${t[l]}, segment.shapes[0]?.[${l}]=${t.shapes[0]?.[l]}, segment.shapes[0]?.added=${t.shapes[0]?.added}`), h = t.shapes.filter(
      (u) => u.added && k.equalTo(u[l], t[l])
    );
    const f = h.filter((u) => D(u));
    if (f.length > 0) {
      const u = /* @__PURE__ */ new Set();
      f.forEach((d) => {
        d.shapes && Array.isArray(d.shapes) && d.shapes.forEach((p) => u.add(p.autoId));
      }), h = h.filter((d) => D(d) ? !0 : !u.has(d.autoId));
    }
    h = Dn(h, c, a);
  }
  if (h.sort((f, u) => f[c] - u[c]), h.length && !t?.hasHeadCut) {
    const f = t.shapes.filter((d) => d.added), u = Te(f, c);
    u && !h.some((d) => d.autoId === u.autoId) && h.push(u);
  }
  return e.with({ stripParentShapes: h });
}
function An(e) {
  const { segment: t, stock: i, cutDirection: n, cutInfo: o, halfBladeWidth: s, allStockShapes: r, previousStripShape: l, currentStripParent: c, currentStripIndex: a, bladeWidth: h } = e, { cutAxis: f, positionAxis: u, cutDimension: d, positionDimension: p } = o;
  if (a === 0) return e;
  if (l && k.equalTo(c[f], t[f]) && k.equalTo(l[f], t[f]) && !k.equalTo(
    c[u],
    l[u] + l[p] + h
  )) {
    P("cuts", `[makeCuts] Creating gap cut at position ${c[u] - s}, dir=${n}`);
    const { cut: m, previousCutPosition: g } = st({
      parentSegment: t,
      stock: i,
      cutDirection: n,
      cutAxis: f,
      positionAxis: u,
      position: c[u] - s,
      allStockShapes: r
    });
    if (m) {
      const y = g < t[u] ? t[u] : g, S = y + s - t[u], w = c[u] - y - h - s, x = t[u] + S, I = w > 0 ? zt.call(this, {
        parent: t,
        stock: i,
        offcut: !0,
        type: "near",
        [f]: t[f],
        [d]: t[d],
        [u]: x,
        [p]: w
      }) : null;
      I && v([
        () => $(
          I.cutDirection,
          `near side segment ${I.id} has the same cutDirection as segment ${t.id}`
        ).not.to.equal(t.cutDirection)
      ]);
    }
  }
  return e;
}
function Ln(e) {
  if (e.stock.cutType !== "beam" || e.currentStripIndex !== 0 || e.segment.type === "far" && !_i(e)) return e;
  const { segment: t, stock: i, cutDirection: n, cutInfo: o, allStockShapes: s, halfBladeWidth: r } = e, { cutAxis: l, positionAxis: c, positionDimension: a } = o;
  return t.phase !== 1 || !e.final || Xn({
    segment: t,
    stock: i,
    cutDirection: n,
    cutAxis: l,
    positionAxis: c,
    positionDimension: a,
    position: 1,
    allStockShapes: s,
    halfBladeWidth: r
  }), e;
}
function Mn(e) {
  const { segment: t, stock: i, cutInfo: n, halfBladeWidth: o, currentStripParent: s, currentStripIndex: r, stripParentShapes: l, isHeadCut: c, bladeWidth: a, previousEdgeOfSegment: h } = e, { positionAxis: f, cutAxis: u, positionDimension: d, cutDimension: p } = n;
  let m = s[f] + s[d] + o, g = !1, y = r;
  P("cuts", `Cut position calc: shape ${s.l}x${s.w}, posAxis=${f}, posDim=${d}`), P("cuts", `  Shape rot=${s.rot}, autoId=${s.autoId}`), P("cuts", `  ${f}=${s[f]}, ${d}=${s[d]} => cutPos=${m}`), P("cuts", `  cutDirection=${e.cutDirection}, cutAxis=${n.cutAxis}, cutDim=${n.cutDimension}`), P("cuts", `  Shape actual extent: x=[${s.x} to ${s.x + s.l}], y=[${s.y} to ${s.y + s.w}]`), P("cuts", `  Strip parent shapes count: ${l.length}`), l.length > 1 && P("cuts", `  All strip parents: ${l.map((x) => `${x.id}(${x.l}x${x.w} rot=${x.rot})`).join(", ")}`);
  let S = k.greaterThanOrEqualTo(
    s[f] + s[d] + a,
    t[f] + t[d]
  );
  const w = t.shapes;
  if (!c && !S && !h && xn.call(this, t, i, s, r, S, e.cutDirection, l)) {
    let x = s;
    for (let I = r + 1; I < l.length; I++) {
      const b = l[I];
      if (b.autoId === x.autoId) continue;
      if (!b) break;
      const E = w.filter(
        (C) => Ze(C, s, f)
      ), A = Te(E, u), O = E.reduce(
        (C, q) => k.greaterThan(C[d], q[d]) ? C : q
      );
      k.greaterThan(
        O[f] + O[d],
        x[f] + x[d]
      ) && (x = O, m = x[f] + x[d] + o);
      const G = Te(
        w.filter(
          (C) => Ze(C, b, f)
        ),
        u
      );
      if (!k.equalTo(
        A[u] + A[p],
        G[u] + G[p]
      ))
        break;
      if (k.equalTo(x[p], b[p]) && k.equalTo(x[u], b[u]))
        g = !0, m = b[f] + b[d] + o, x = b, y = I;
      else
        break;
    }
    g && (t.merged = !0, S = k.greaterThanOrEqualTo(
      m - o,
      t[f] + t[d]
    ));
  }
  return e.with({
    cutPosition: m,
    mergedCut: g,
    isEdgeOfSegment: S,
    currentStripIndex: y
  });
}
function On(e) {
  if (e.stock.cutType !== "beam" || !e.cut) return e;
  const { cut: t, segment: i, cutInfo: n, currentStripParent: o, currentStripIndex: s, stripParentShapes: r } = e, { positionAxis: l, positionDimension: c } = n;
  t?.guillotineState?.partProduced && s === r.length - 1 && k.equalTo(
    o[l] + o[c],
    i[l] + i[c]
  ) && (P("cuts", `MARKING PTX DUMMY CUT ${o.autoId} ${e.cutPosition}`), t.ptxData.isDummy = !0);
}
function qn(e) {
  return e.hasHeadCut ? F(e.cutDirection) : e.cutDirection;
}
function Fn(e) {
  if (e.stock.cutType !== "beam") return e;
  const { segment: t, cutInfo: i, stock: n, cutDirection: o } = e;
  if (t.phase !== 0) return e;
  const { cutAxis: s } = i;
  for (const r of t.cuts)
    r.dimension === qn(t) && (r[s + 1] = 0, r[s + 2] = n[o]);
  return e;
}
function Gn(e) {
  if (e.stock.cutType !== "beam") return e;
  const { segment: t, cutInfo: i, stock: n, cutDirection: o } = e;
  if (t.phase !== 1) return e;
  const { cutAxis: s } = i;
  for (const r of t.cuts)
    t.hasHeadCut ? r.dimension === F(t.cutDirection) && (r[we(s) + 2] = n[F(o)]) : r.dimension === t.cutDirection && (r[s + 2] = n[o]);
}
function Nn(e) {
  const { segment: t, stock: i, cutDirection: n, cutInfo: o, cutPosition: s, allStockShapes: r, currentStripParent: l, isHeadCut: c } = e, { cutAxis: a, positionAxis: h } = o;
  c && wn(l, n);
  const { cut: f, farSideSegmentSize: u, previousCutPosition: d } = st({
    parentSegment: t,
    stock: i,
    cutDirection: n,
    cutAxis: a,
    positionAxis: h,
    position: s,
    allStockShapes: t.phase === 0 ? r : [],
    headCut: e.isHeadCut
  });
  return f && e.final && P("cuts", `MADE CUT ${f.x1}|${f.x2}|${f.y1}|${f.y2} ${f.isHead ? "HEAD" : "NORM"}`), e.with({
    cut: f,
    farSideSegmentSize: u,
    previousCutPosition: d
  });
}
function Si(e) {
  if (e.stock.cutType !== "beam") return e;
  const { cut: t, cutInfo: i, halfBladeWidth: n, currentStripParent: o } = e;
  if (!t) return e;
  const { cutAxis: s, cutDimension: r, positionAxis: l, positionDimension: c } = i;
  return k.equalTo(
    t[s + 2] - t[s + 1],
    o[r]
  ) && k.equalTo(
    t[l + 1],
    o[l] + o[c] + n
  ) && (t.guillotineState.partProduced = o.parentId), e;
}
function Bn(e) {
  const {
    segment: t,
    stock: i,
    cutInfo: n,
    cutPosition: o,
    mergedCut: s,
    currentStripParent: r,
    previousCutPosition: l,
    cut: c,
    isEdgeOfSegment: a,
    halfBladeWidth: h,
    bladeWidth: f,
    allStockShapes: u,
    final: d,
    cutDirection: p,
    currentStripIndex: m
  } = e, { cutAxis: g, positionAxis: y, cutDimension: S, positionDimension: w } = n, x = m === 0 && k.greaterThan(r[y], t[y]);
  if (!c && !a && !x) return e;
  const I = {
    parent: t,
    stock: i,
    merged: s,
    type: "near",
    hasHeadCut: t.hasHeadCut,
    shapes: []
  }, b = x && !c ? r[y] : o, E = l != null && l >= t[y], A = E ? l + h : t[y], O = b - (E ? l + f : h + t[y]);
  P("cuts", `[createNearSegment] segment[${t.id}] at (${t.x},${t.y}), posAxis=${y}, cutAxis=${g}, previousCutPosition=${l}, hasPreviousCut=${E}, nearSegmentPosition=${A}`);
  const G = {
    [g]: t[g],
    [S]: t[S],
    [y]: A,
    [w]: O,
    cutDirection: F(p)
  };
  P("cuts", `[createNearSegment] dimensionProps: x=${G.x ?? "N/A"}, y=${G.y ?? "N/A"}, l=${G.l ?? "N/A"}, w=${G.w ?? "N/A"}`);
  const C = zt.call(
    this,
    { ...I, ...G },
    !1
    // Don't reject if identical - we'll filter shapes ourselves
  );
  if (!C) return e;
  if (P("cuts", `[createNearSegment] AFTER creation: segment ${t.id} at (${C.x},${C.y}) ${C.l}x${C.w}`), C.shapes = t.shapes.filter((q) => k.greaterThanOrEqualTo(q.x, C.x) && k.lessThanOrEqualTo(q.x + q.l, C.x + C.l) && k.greaterThanOrEqualTo(q.y, C.y) && k.lessThanOrEqualTo(q.y + q.w, C.y + C.w)), P("cuts", `[createNearSegment] nearSideSegment.shapes.length = ${C.shapes.length}`), C.shapes.length > 0) {
    const q = k.equalTo(C.l, r.l) && k.equalTo(C.w, r.w);
    if (P("cuts", `[createNearSegment] nearSegment: ${C.l}x${C.w}, shape: ${r.l}x${r.w}, identical: ${q}, mergedCut: ${s}`), s || !q) {
      P("cuts", `CUTTING NEAR SIDE SEGMENT [${C.id}] DIR ${C?.cutDirection?.toUpperCase()}`), P("cuts", `[createNearSegment] CALLING makeCuts recursively with segment ${C.l}x${C.w}, segment.shapes.length=${C.shapes?.length}, final=${d}`);
      const V = Fe.call(
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
      P("cuts", `[createNearSegment] RETURNED from makeCuts, childState=${V}`), e = e.with({ headCutCount: V?.headCutCount || e.headCutCount });
    }
  }
  return e.with({ nearSideSegment: C });
}
function Hn(e) {
  const {
    segment: t,
    stock: i,
    cutInfo: n,
    cutPosition: o,
    farSideSegmentSize: s,
    halfBladeWidth: r,
    currentStripIndex: l,
    stripParentShapes: c,
    isHeadCut: a,
    allStockShapes: h,
    final: f
  } = e, { cutAxis: u, positionAxis: d, cutDimension: p, positionDimension: m } = n, g = {
    parent: t,
    stock: i,
    offcut: a ? !1 : l === c.length - 1,
    type: "far",
    hasHeadCut: !1,
    shapes: [],
    cutDirection: t.cutDirection
    //[] test
  }, y = {
    [u]: t[u],
    [p]: t[p],
    [d]: o + r,
    [m]: s
  };
  P("cuts", `Creating FAR segment: cutAxis=${u}, cutDim=${p}, posAxis=${d}, posDim=${m}`), P("cuts", `FAR segment props: ${u}=${t[u]}, ${p}=${t[p]}, ${d}=${o + r}, ${m}=${s}`), P("cuts", `FAR segment calculation: cutPosition=${o}, halfBladeWidth=${r}, result=${o + r}`);
  const S = zt.call(this, { ...g, ...y });
  if (!S) return e;
  if (P("cuts", `FAR segment created [${S.id}] at (${S.x},${S.y}) ${S.l}x${S.w}`), P("cuts", `  Parent has ${t.shapes.length} shapes, far segment has ${S.shapes.length} shapes`), P("cuts", `  Cut was at position ${o} (${d}=${o})`), P("cuts", `  Expected offcut dimensions based on stock (1200x1200): should be ${t.l - o}x${t.w} or ${t.l}x${t.w - o}`), a) {
    S.shapes = t.shapes.filter((x) => {
      const I = x[we(u)] + x[F(p)];
      return k.greaterThan(I, o);
    }), P("cuts", `HEAD CUT: Making cuts in far segment [${S.id}] with ${S.shapes.length} shapes`);
    const w = Fe.call(
      this,
      {
        segment: S,
        stock: i,
        cutDirection: S.cutDirection,
        previousCutPosition: null,
        // No previous cut in this new segment yet
        allStockShapes: h,
        final: f,
        headCutCount: e.headCutCount
      }
    );
    e = e.with({ headCutCount: w?.headCutCount || e.headCutCount });
  }
  return e.with({ farSideSegment: S });
}
function Ki(e) {
  if (!this?.config?.guillotine?.allowHeadCuts || !e?.saw?.guillotineOptions?.headCuts) return !1;
  if (gi(e)) return !0;
  if (e.type === "far" || e.type === "root") {
    if (!ji(e)) return !1;
    if (e.parent.hasHeadCut || gi(e.parent)) return !0;
  }
  return !1;
}
function zn(e) {
  const { segment: t, currentStripParent: i, forceNoHeadCut: n } = e;
  if (n) return e.with({ isHeadCut: !1 });
  let o = !1;
  return Ki.call(this, t) ? (o = Yi.call(this, t.saw, i, t, e.cutDirection), e.with({ isHeadCut: o })) : e.with({ isHeadCut: !1 });
}
function st({
  parentSegment: e,
  stock: t,
  cutDirection: i,
  cutAxis: n,
  positionAxis: o,
  position: s,
  allStockShapes: r = [],
  headCut: l = !1,
  ptxDummyCut: c = !1,
  skipCollisionCheck: a = !1
}) {
  const h = t.halfBladeWidth, f = vi(o), u = Cs.parse({
    stock: t,
    isGuillotine: !0,
    isHead: l,
    ptxData: {
      isDummy: c
    },
    //NOTE: this has changed from cutAxis to positionAxis
    x1: o === "x" ? s : e.x,
    x2: o === "x" ? s : e.x + e.l,
    y1: o === "y" ? s : e.y,
    y2: o === "y" ? s : e.y + e.w
  });
  let d = new pt(u);
  if (!c && e.type === "near" && e.parent.hasHeadCut && (d.ptxData.headCutStrip = !0), !a) {
    const I = r.length ? r : e.shapes;
    if (Ft(
      d,
      t,
      I
    ))
      return P("cuts", `[createCut] REJECTED collision: cut at (${d.x1},${d.y1})-(${d.x2},${d.y2}), segment=(${e.x},${e.y}) ${e.l}x${e.w}`), {
        cut: null,
        farSideSegmentSize: null,
        previousCutPosition: null
      };
  }
  const p = e.cuts.filter((I) => I.dimension === i && k.equalTo(I[n + 1], d[n + 1])), m = p.length ? p[p.length - 1] : null, g = m ? m[o + 1] : null;
  if (s && g && k.equalTo(s, g))
    return {
      cut: null,
      farSideSegmentSize: null,
      previousCutPosition: null
    };
  let y = e[o] + e[f] - (s + h);
  y < 0 && (y = 0);
  const S = k.lessThanOrEqualTo(
    s - h,
    e[o] + e[f]
  ), w = y > 0, x = t.cutType === "guillotine" && !w;
  return d.beamTrimL1 || d.beamTrimW1 || t.cutType === "beam" && k.lessThanOrEqualTo(
    s - h,
    e[o] + e[f]
  ) || d.ptxData.isDummy || S && !x ? (d.ptxData.order = B.ptxCuts++, e.cuts.push(d)) : d.stock?.saw?.stockType === "roll" ? e.cuts.push(d) : (d = null, y = null), {
    cut: d,
    farSideSegmentSize: y,
    previousCutPosition: g
  };
}
function Wn({
  x: e,
  y: t,
  l: i,
  w: n,
  type: o,
  parent: s,
  rejectIdentical: r
}) {
  return r && k.equalTo(e, s.x) && k.equalTo(t, s.y) && k.equalTo(n, s.w) && k.equalTo(i, s.l) ? "IDENTICAL_TO_PARENT" : i <= 0 || n <= 0 ? "INVALID_DIMENSIONS" : s && !s.autoId ? (console.error("[ERROR] Parent segment has no autoId!"), console.error(`Parent details: type=${s.type}, x=${s.x}, y=${s.y}, l=${s.l}, w=${s.w}`), "MISSING_PARENT_ID") : o === "root" && s ? (console.error("[ERROR] Attempting to create root segment with a parent!"), console.error(`Parent autoId: ${s.autoId}, Parent type: ${s.type}`), "ROOT_WITH_PARENT") : (o === "root" && s?.type !== void 0 && s.type !== "root" && console.error(`[ERROR] Creating root segment with non-root parent of type: ${s.type}`), null);
}
function zt({
  x: e,
  y: t,
  l: i,
  w: n,
  type: o,
  parent: s,
  stock: r,
  offcut: l = !1,
  merged: c = !1,
  cutDirection: a = null
}, h = !0) {
  if (Wn({ x: e, y: t, l: i, w: n, type: o, parent: s, rejectIdentical: h })) return;
  let u;
  B.segments++;
  let d = s.phase + 1;
  s.hasHeadCut && (s.isInitial || (s.phase = 0), d = s.phase + 1);
  try {
    const m = B.segments.toString();
    if (u = new ce({
      x: e,
      y: t,
      l: i,
      w: n,
      t: typeof r.t == "string" ? parseFloat(r.t) : r.t,
      id: m,
      phase: d,
      parent: s,
      stock: r,
      offcut: l,
      merged: c,
      type: o,
      grain: r.grain,
      material: r.material,
      saw: r.saw,
      cutDirection: a || F(s.cutDirection)
    }), s && s.autoId === u.autoId)
      throw console.error(`[ERROR] Segment created with itself as parent! autoId: ${u.id}`), new Error("Segment cannot be its own parent");
  } catch (m) {
    P("info", `issue creating segment ${m.message}`);
    return;
  }
  const p = s.shapes.filter((m) => m.added ? k.greaterThanOrEqualTo(m.x, u.x) && k.lessThanOrEqualTo(m.x + m.l, u.x + u.l) && k.greaterThanOrEqualTo(m.y, u.y) && k.lessThanOrEqualTo(m.y + m.w, u.y + u.w) : m.willItFit(u));
  return u.shapes = p, u;
}
function Un(e, t = !1, i) {
  t && P("cuts", `------------------- ANALYSE SEGMENTS ${e.id} -------------------`);
  const n = [], o = [], s = [];
  let r = 0, l = 0;
  const c = /* @__PURE__ */ new Set(), a = (h, f = 0) => {
    if (!h) return f;
    if (c.has(h.autoId))
      return console.error(`[CIRCULAR REFERENCE DETECTED] Segment ${h.id} is already in the traversal path!`), console.error(`Traversal path: ${Array.from(c).join(" -> ")} -> ${h.id}`), console.error(`Segment details: autoId=${h.id}, parent=${h.parent?.id}, children=[${h.children?.map((d) => d.autoId).join(", ")}]`), f;
    c.add(h.autoId);
    let u = f;
    n.push(h), (h.offcut === !0 || !h.shapes?.length) && s.push(h);
    for (let d = 0; d < h.cuts.length; d++) {
      const p = h.cuts[d];
      if (p) {
        if (p.guillotineState.phase = h.phase, p.isHead ? (p.ptxData.function = 0, r++) : d > 0 && o[d - 1].isHead ? p.dimension === "l" ? p.ptxData.function = 1 : p.dimension === "w" && (p.ptxData.function = 2) : (p.ptxData.function = p.guillotineState.phase + 1, p.ptxData.headCutStrip && p.ptxData.function--), p.isTrim && l++, t)
          if (p.isHead) {
            let m = 0;
            bn(h, () => m++), u = m, P("cuts", `[${h.id}] reset cut order to ${u}`);
          } else d > 0 && h.cuts[d - 1].isHead && u++;
        p.guillotineState.order = u, p.guillotineState.segmentCutOrder = d, p.guillotineState.parentSegmentID = h?.autoId || "root", t && jn(p, h), o.push(p), t && P("cuts", `[${h.id}] {${u}} ${p.x1}|${p.x2}|${p.y1}|${p.y2}`), u++;
      }
    }
    if (h.children && h.children.length > 0) {
      const d = h.children.filter((p) => p.autoId === h.autoId ? (console.error(`[SELF-REFERENCE FOUND] Removing segment ${h.id} from its own children array`), console.error(`Segment type: ${h.type}, Phase: ${h.phase}`), console.error(`Number of children: ${h.children.length}`), console.error(`Children autoIds: ${h.children.map((m) => m.autoId).join(", ")}`), !1) : !0);
      d.length !== h.children.length && (h.children = d);
      for (const p of h.children)
        if (p && j(p)) {
          if (p.type === "firstShape")
            continue;
          if (p.autoId === h.autoId) {
            console.error(`[CRITICAL SELF-REFERENCE] Segment ${h.id} still has itself as a child!`), console.error("This should have been filtered. Skipping traversal.");
            continue;
          }
          if (c.has(p.autoId)) {
            console.error(`[CIRCULAR REFERENCE] Child segment ${p.autoId} is already in traversal path`), console.error(`Parent: ${h.id}, Path: ${Array.from(c).join(" -> ")}`);
            continue;
          }
          if (h.hasHeadCut) {
            const m = i + o.filter((g) => !g.isHead && !g.ptxData.isDummy).length;
            u = a(p, m);
          } else
            u = a(p, u);
        }
    }
    return c.delete(h.autoId), u;
  };
  return a(e), t && (P("cuts", `Segments processed: ${n.length}`), P("cuts", `Cuts processed: ${o.length}`), P("cuts", `Trim cuts found: ${l}`), P("cuts", `Head cuts found: ${r}/${i}`), P("cuts", `Offcuts identified: ${s.length}`), P("cuts", `ROOT segment [${e.id}] has ${e.children?.length || 0} children`), P("cuts", "------------------- END ANALYSE SEGMENTS -------------------")), [e, o, s];
}
function jn(e, t) {
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
function Yn(e, t) {
  return `${t}${e}`;
}
function Xn({
  segment: e,
  stock: t,
  cutDirection: i,
  cutAxis: n,
  positionAxis: o,
  positionDimension: s,
  position: r,
  allStockShapes: l,
  halfBladeWidth: c
}) {
  if (t.cutType !== "beam" || !t.hasTrim || s === "w" && e.phase > 1)
    return;
  const a = Yn(r, i);
  if (!t.trim?.[a]) return;
  const h = t.trimmed ? -c : t.trim[a] - c, f = t.trimmed ? -c : t.trim[a] - c;
  if (v([() => {
    $(h, `trim cut ${r} in the wrong position`).to.equal(f);
  }]), h !== f)
    return;
  const { cut: u } = st({
    parentSegment: e,
    stock: t,
    cutDirection: i,
    cutAxis: n,
    positionAxis: o,
    position: h,
    allStockShapes: l,
    skipCollisionCheck: !0
  });
  u && (u.isTrim = !0, u.guillotineState.parentSegmentID = e.autoId, u.ptxData || (u.ptxData = {}), u.ptxData.function = e.phase, u.ptxData.isDummy = !1, u.dimension === "l" && (u.beamTrimL1 = !0), u.dimension === "w" && (u.beamTrimW1 = !0), u.dimension === "w" ? (new ce({
    x: -t.trim.w1,
    y: e.y,
    // Start at strip's y position
    l: t.trim.w1,
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
  }), t.trim.w2 && t.trim.w2 > 0 && new ce({
    x: t.l,
    // At far edge in trimmed space
    y: e.y,
    l: t.trim.w2,
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
  })) : u.dimension === "l" && new ce({
    x: 0,
    // Start at stock origin
    y: -t.trim.l1,
    l: t.l,
    // Use FULL stock width (not trimmed)
    w: t.trim.l1,
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
function Ji(e, t, i = null) {
  let n = null;
  const o = [];
  if (!e || !e.length) return {
    allShapesCut: !0,
    uncutShape: null,
    uncutShapeAutoIds: []
  };
  const s = e.every((r) => {
    if (!r.added || !r.stock || M(r) && r.group.inGroup) return !0;
    const l = r.stock.halfBladeWidth;
    let c = null;
    i ? c = i.getSides() : c = r.stock.getSides();
    const a = Object.values(r.getSides()).every((h) => {
      const f = () => {
        switch (h.type) {
          case "top": {
            const m = r.y + r.w + l;
            return t.some((y) => y.dimension === "l" && k.equalTo(y.y1, m) && k.lessThanOrEqualTo(y.x1, r.x) && k.greaterThanOrEqualTo(y.x2, r.x + r.l));
          }
          case "bottom": {
            const m = r.y - l;
            return t.some((y) => y.dimension === "l" && k.equalTo(y.y1, m) && k.lessThanOrEqualTo(y.x1, r.x) && k.greaterThanOrEqualTo(y.x2, r.x + r.l));
          }
          case "left": {
            const m = r.x - l;
            return t.some((y) => y.dimension === "w" && k.equalTo(y.x1, m) && k.lessThanOrEqualTo(y.y1, r.y) && k.greaterThanOrEqualTo(y.y2, r.y + r.w));
          }
          case "right": {
            const m = r.x + r.l + l;
            return t.some((y) => y.dimension === "w" && k.equalTo(y.x1, m) && k.lessThanOrEqualTo(y.y1, r.y) && k.greaterThanOrEqualTo(y.y2, r.y + r.w));
          }
        }
      }, u = () => c.some((m) => {
        switch (h.type) {
          case "top":
            return m.dimension === "l" && k.equalTo(m.y1, r.y + r.w) && k.lessThanOrEqualTo(m.x1, r.x) && k.greaterThanOrEqualTo(m.x2, r.x + r.l);
          case "bottom":
            return m.dimension === "l" && k.equalTo(m.y1, r.y) && k.lessThanOrEqualTo(m.x1, r.x) && k.greaterThanOrEqualTo(m.x2, r.x + r.l);
          case "left":
            return m.dimension === "w" && k.equalTo(m.x1, r.x) && k.lessThanOrEqualTo(m.y1, r.y) && k.greaterThanOrEqualTo(m.y2, r.y + r.w);
          case "right":
            return m.dimension === "w" && k.equalTo(m.x1, r.x + r.l) && k.lessThanOrEqualTo(m.y1, r.y) && k.greaterThanOrEqualTo(m.y2, r.y + r.w);
        }
      }), d = f(), p = u();
      return d || p;
    });
    return a || (n = r, o.push(r.autoId)), a;
  });
  return s && (n = null, o.length = 0), { allShapesCut: s, uncutShape: n, uncutShapeAutoIds: o };
}
function Rt(e) {
  return typeof e?.guillotineState?.myPhase == "number";
}
function At(e) {
  return e.type === "root" || e[ve(e.stock.cutPreference)] === 0;
}
function Lt(e, t) {
  return e?.guillotineState?.myPhase === t;
}
function _n(e) {
  const t = Wt(e);
  if (!t) return wi(e, 1);
  const n = ae(t) === "l" ? "w" : "l", o = Qi(e, t, n);
  wi(e, o);
}
function Qi(e, t, i) {
  if (!e) return null;
  if (!t) return 1;
  const n = Ut(t);
  return e[i] === t[i] ? n : n + 1;
}
function Wt(e) {
  return e?.guillotineState?.myStripParent || null;
}
function yi(e, t) {
  e?.guillotineState && (e.guillotineState.myStripParent = t);
}
function wi(e, t) {
  typeof t == "number" && e?.guillotineState && e.guillotineState.setPhase(t);
}
function Ut(e) {
  return e?.guillotineState ? e.guillotineState.myPhase : null;
}
function ae(e) {
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
function bi(e, t) {
  if (j(e)) {
    Vn(t);
    const i = t?.bestScore?.score;
    i && ["currentStripDirection", "myStripDirection", "keyStripDirection", "myPhase"].forEach((o) => {
      i[o] && (t.guillotineState[o] = i[o]);
    });
  }
}
function Vn(e) {
  const t = e.bestScore;
  t?.myStripParent && yi(e, t.myStripParent), D(e) && e.shapes.forEach((i) => yi(i, Wt(i)));
}
function Kn(e, t) {
  let i = null, n = t.x.get(e.x) || [];
  n = n.filter((l) => {
    const c = l.guillotineState.myStripParent;
    return c && !c.guillotineState?.firstShape ? Dt(e, c, "y") : !0;
  }), n.sort((l, c) => l.x - c.x);
  let o = t.y.get(e.y) || [];
  o = o.filter((l) => {
    const c = l.guillotineState.myStripParent;
    return c && !c.guillotineState?.firstShape ? Dt(e, c, "x") : !0;
  }), o.sort((l, c) => l.y - c.y);
  const s = n.length ? n[0] : null, r = o.length ? o[0] : null;
  return s && r ? i = s.placementOrder > r.placementOrder ? s : r : i = s || r, i;
}
function Mt(e, t) {
  e.x.has(t.x) ? e.x.get(t.x).push(t) : e.x.set(t.x, [t]), e.y.has(t.y) ? e.y.get(t.y).push(t) : e.y.set(t.y, [t]);
}
function Jn(e, t) {
  const i = e.x.get(t.x) ?? [], n = i.indexOf(t);
  n !== -1 && (i.splice(n, 1), i.length === 0 && e.x.delete(t.x));
  const o = e.y.get(t.y) ?? [], s = o.indexOf(t);
  s !== -1 && (o.splice(s, 1), o.length === 0 && e.y.delete(t.y));
}
function Qn(e, t = !0) {
  const i = [], n = /* @__PURE__ */ new Set();
  for (const o of e.shapes)
    if (D(o)) {
      const s = o.type === "position", r = J(o);
      if (s || r && t) {
        if (!n.has(o.autoId)) {
          i.push(o), n.add(o.autoId);
          for (const c of o.shapes || [])
            n.add(c.autoId);
        }
      } else if (o.added && e.stock) {
        o.placeMyShapes(e.stock);
        for (const c of o.shapes)
          n.has(c.autoId) || (c.group.addedAsGroup = o, i.push(c), n.add(c.autoId));
      }
    } else
      n.has(o.autoId) || (i.push(o), n.add(o.autoId));
  return e.shapes = i, v([
    () => $(Z(e.shapes)).to.be.false,
    () => Di(e.shapes, "removeGroupsFromSegment")
  ]), e;
}
function Zi(e, t) {
  if (e.children && Array.isArray(e.children)) {
    if (t(e) === !1) return;
    for (const i of e.children)
      Zi(i, t);
  }
}
function Zn(e, t) {
  const i = ye(e, !1);
  for (const n of t) {
    const o = i.filter((c) => c.stockLock.includes(n.parentId));
    if (!o.length) continue;
    const s = o.map((c) => c.area), r = s.reduce((c, a) => c + a, 0) / o.length;
    if (!(k.calculateCoefficientOfVariation(s) < this.config.priority.variationThreshold))
      for (const c of o) {
        c.priority || (c.priority = {});
        const a = er(c, n, r);
        c.priority[n.parentId] = a, e.filter((f) => f.id !== c.id && f.parentId === c.parentId).forEach((f) => {
          f.priority || (f.priority = {}), f.priority[n.parentId] = a;
        });
      }
  }
}
function er(e, t, i) {
  if (e.isExactFit(t) || e.area >= t.area * 0.9 || e.longSide >= t.longSide * 0.9)
    return 1;
  const n = e.area, o = t.area, s = n / o;
  return n > i ? s : 0;
}
function tr(e, t) {
  return e.reduce((i, n) => {
    const o = n.getPriority(t), s = i.getPriority(t);
    return o > s ? n : i;
  });
}
function ir(e, t, i = null) {
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
function es(e, t, i = "y") {
  if (!e || !t || e[i] === void 0 || !t.area || t.area === 0) return 0;
  const n = we(i), o = n === "y" ? "w" : "l", s = t[i] ?? 0, r = t[n] ?? 0, a = (e[i] - s) * t[o] / t.area, u = (e[n] - r) / t[o] * t.aspect * 0.01;
  return 1 - (a + u);
}
function ts(e, t, i = "y") {
  if (!e || !t) return 0;
  "grain" in t && t.grain === "w" && (i = we(i));
  const n = i === "y" ? "w" : "l";
  return (e[i] + e[n]) / t[n];
}
function sr(e, t, i) {
  const n = e.getMinSpacing(i.saw);
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
function nr(e, t, i) {
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
    const c = sr(r, l, i);
    n += c.length, o += c.reduce(
      (a, h) => h ? a + 1 : a,
      0
    );
  };
  return D(e) ? e.shapes.forEach((r) => {
    D(t) ? t.shapes.forEach((l) => {
      s(r, l);
    }) : s(r, t);
  }) : D(t) ? t.shapes.forEach((r) => {
    s(e, r);
  }) : s(e, t), { positiveAlignments: o, possibleAlignments: n };
}
function rr(e, t, i) {
  if (!e || !t || !i)
    return [!1, !1, !1, !1];
  if (e.autoId === t.autoId)
    return [!1, !1, !1, !1];
  const n = e.getMinSpacing(i.saw), o = e.x, s = e.x + e.l, r = e.y + e.w, l = e.y, c = t.x, a = t.x + t.l, h = t.y + t.w, f = t.y, u = () => o === a + n && (l >= f && l < h || r <= h && r > f), d = () => s + n === c && (l >= f && l < h || r <= h && r > f), p = () => l === h + n && (o >= c && o < a || s <= a && s > c), m = () => l + n === f && (o >= c && o < a || s <= a && s > c);
  return [
    u(),
    d(),
    p(),
    m()
  ];
}
function or(e, t) {
  return e.l === t.l && e.x === t.x;
}
function ar(e, t) {
  return e.w === t.w && e.y === t.y;
}
function is(e, t, i, n = {}) {
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
  let c = [];
  o && (c = rr(e, t, i));
  const a = c.filter(Boolean).length;
  if (a > 1)
    throw new Error("number of neighbours should not be greater than one for a single test shape");
  if (a === 0)
    return {
      contactResult: c,
      cohesion: 0,
      alignment: null,
      similarDimensions: 0,
      type: null,
      neighbour: t,
      neighbours: a
    };
  const h = ["lr", "rl", "bt", "tb"], f = c.findIndex(Boolean), u = h[f];
  if (!u) throw new Error("no contact type found");
  let d = null, p = null, m = 0;
  if (l && u && (d = cr(e, t, u)), s && (p = nr(e, t, i)), r) {
    const g = u === "rl" || u === "lr", y = u === "tb" || u === "bt", S = ar(e, t), w = or(e, t);
    (g && S || y && w) && (m = w && S ? 1 : 0.5);
  }
  return {
    contactResult: c,
    cohesion: d,
    alignment: p,
    similarDimensions: m,
    type: u,
    neighbour: t,
    neighbours: a
  };
}
function lr(e, t) {
  if (!t)
    throw new Error(`edge - no stock defined for shape ${e.id}`);
  const i = t.bladeWidth, n = e.w / t.w, o = e.l / t.l;
  let s = 0, r = t.l, l = 0, c = t.w;
  return !t.trimmed && t.hasTrim && (s = t.trim.w1, r = t.l - t.trim.w2, l = t.trim.l1, c = t.w - t.trim.l2), [
    // 0 left
    e.x - i <= s ? n : 0,
    // 1 right
    e.x + e.l + i >= r ? n : 0,
    // 2 bottom
    e.y - i <= l ? o : 0,
    // 3 top
    e.y + e.w + i >= c ? o : 0
  ].reduce((f, u) => f + u, 0);
}
function cr(e, t, i) {
  if (!e || !t || !i) return 0;
  const n = ur(e, t), o = $i(e), s = $i(t), r = o + s, l = Math.max(n.l * n.w, r), c = Math.min(1, Math.max(0, r / l)), a = Math.min(1, Math.max(
    0,
    fr(e, t, i) || 0
  )), h = c * 0.7 + a * 0.3;
  return Math.min(1, Math.max(0, h));
}
function ur(e, t) {
  const i = tt(e), n = tt(t), o = Math.min(i.x, n.x), s = Math.min(i.y, n.y), r = Math.max(i.x + i.l, n.x + n.l), l = Math.max(i.y + i.w, n.y + n.w);
  return {
    x: o,
    y: s,
    l: r - o,
    w: l - s
  };
}
function tt(e) {
  if (D(e)) {
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
function $i(e) {
  return D(e) ? e.shapes.reduce((t, i) => t + i.area, 0) : e.area;
}
function fr(e, t, i) {
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
async function hr(e, t, i, n) {
  return await ke.runSpecificStrategy.call(this, {
    shapes: e,
    container: t,
    firstShape: i,
    firstShapeRotation: n
  });
}
function xi(e, t, i, n = null, o = null, s = null, r = null) {
  if (!n)
    throw new Error("shapePosition was not passed any placed shapes");
  if (!o)
    throw new Error("shapePosition was not passed any unplaced shapes");
  j(t) ? dr(
    e,
    t,
    i,
    n,
    r
    // tidy
  ) : ss(
    e,
    t,
    i,
    n,
    s
  );
}
function dr(e, t, i = null, n = [], o = null) {
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
  }, r = t.cutPreference, l = t.cutDirection, c = t.getStock.bladeWidth, { cutAxis: a } = Wi(l), h = Kn(e, o);
  if (!h) return !1;
  const f = ae(h);
  let u = f;
  const d = f === "l" ? "w" : "l";
  h[d] !== e[d] && (u = F(f));
  const p = Qi(e, h, d);
  if (t.saw.guillotineOptions.maxPhase && p > t.saw.guillotineOptions.maxPhase) return !1;
  const m = ae(h) ?? t.cutDirection;
  if (!m) throw new Error("keyDimension is not defined");
  const g = Wt(h);
  if (g) {
    const I = we(ve(ae(g))), b = Dt(e, g, I);
    if (g.guillotineState.myPhase <= 2 && !b) return !1;
  }
  let y = !1;
  t.firstShape && (y = e[a] > t.firstShape[a]);
  const S = {
    lr: [],
    bt: [],
    tb: [],
    rl: []
  };
  for (const I of n) {
    const b = is(
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
    b.type && (S[b.type].push(I), "cohesion" in s && i.cohesion && y && (s.cohesion += b.cohesion), "similarDimensions" in s && i.similarDimensions && (s.similarDimensions += b?.similarDimensions ? b.similarDimensions : 0), "fenceConsistency" in s && i.fenceConsistency && (r === "w" ? b.type === "lr" && b.neighbour.l === e.l && b.neighbour.y === e.y && (s.fenceConsistency = 1) : r === "l" && b.type === "bt" && b.neighbour.w === e.w && b.neighbour.x === e.x && (s.fenceConsistency = 1)));
  }
  if (t.cutDirection) {
    const I = t.cutDirection;
    if (I === "w") {
      const b = e.y === t.y, E = S.bt && S.bt.length > 0;
      if (!b && !E)
        return !1;
    } else if (I === "l") {
      const b = e.x === t.x, E = S.lr && S.lr.length > 0;
      if (!b && !E)
        return !1;
    }
  }
  if ("exactStripFill" in s && i.exactStripFill && h) {
    const I = F(ae(h)), b = e[I] + c;
    s.exactStripFill = b >= h[I] && b < h[I] + c ? 1 : 0;
  }
  if ("compression" in s && i.compression) {
    const I = m === "l" ? "y" : "x";
    s.compression = es(
      e,
      t,
      I
    );
  }
  if ("fill" in s && i.fill) {
    const I = m === "l" ? "y" : "x";
    s.fill = ts(e, t, I);
  }
  if (s.cohesion = Math.max(0, s.cohesion), "sameStripBonus" in s && i.sameStripBonus && t.firstShape) {
    const I = ae(h);
    if (!y)
      s.sameStripBonus = 0;
    else if (I === "w" && S?.bt?.length) {
      const b = Te(S.bt, "x"), E = b.x + b.l;
      e.x + e.l > E && (s.sameStripBonus = 0, s.cohesion = 0);
    } else if (I === "l" && S?.lr?.length) {
      const b = Te(S.lr, "y"), E = b.y + b.w;
      e.y + e.w > E && (s.sameStripBonus = 0, s.cohesion = 0);
    } else
      s.sameStripBonus = 1;
  }
  if (i.aspectRatio) {
    const I = e.aspect, b = ae(h);
    I < 0.1 ? e[b] > e[F(b)] && (s.aspectRatio = 1) : s.aspectRatio = 0;
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
  return e.score.cutDirection = l, e.score.myStripParent = h, e.score.myStripDirection = u, e.score.myPhase = p, e.score.total > (e?.bestScore?.total || 0) && e.setBestScore(e), !0;
}
function ss(e, t, i, n, o) {
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
  if ("edge" in s && i.edge) {
    let f = 0, u = 0;
    !t.trimmed && t.hasTrim && (f = t.trim.w1, u = t.trim.l1), (e.x === f || e.y === u) && (s.edge = lr(e, t));
  }
  if ("fill" in s && i.fill) {
    const f = t?.saw?.efficiencyOptions?.primaryCompression ? ve(t?.saw?.efficiencyOptions?.primaryCompression) : "y";
    s.fill = ts(
      e,
      t,
      f
    );
  }
  if ("compression" in s && i.compression) {
    const f = t?.saw?.efficiencyOptions?.primaryCompression ? ve(t?.saw?.efficiencyOptions?.primaryCompression) : "y";
    s.compression = es(
      e,
      t,
      f
    );
  }
  let r = 0, l = 0;
  const c = {
    lr: !1,
    rl: !1,
    bt: !1,
    tb: !1
  };
  for (const f of n) {
    const u = is(
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
    u.type && (c[u.type] = !0, i.alignment && u.alignment && (l += u.alignment.positiveAlignments, r += u.alignment.possibleAlignments), i.cohesion && (s.cohesion += u.cohesion), i.similarDimensions && (s.similarDimensions += u?.similarDimensions ? u.similarDimensions : 0));
  }
  s.similarDimensions /= 4, r === 0 ? s.alignment = 0 : s.alignment = l / r, i.exactFit && (e.l === t.l || e.w === t.w) && (s.exactFit = 1), i.area && (s.area = ir(e, n, t));
  const a = { ...s };
  Object.keys(s).forEach((f) => {
    if (typeof s[f] == "number") {
      const u = s[f];
      a[f] = i[f] ? u * i[f] : 0;
    }
  }), e.score = a;
  let h = 0;
  for (const f of Object.values(e.score))
    typeof f == "number" && (h += f);
  if (e.score.total = h, isNaN(e.score.total))
    throw new Error("thisShape.score.total is not a number: " + JSON.stringify(e.score));
  e.score?.total > (e?.bestScore?.total || 0) && e.setBestScore(e, o);
}
function Se(e, t, i) {
  const n = this.shapeList.reduce(
    (C, q) => q.added ? C : ++C,
    0
  );
  let o, s, r;
  const l = t.getStock;
  if (!l) return !1;
  const c = e, a = Y(t) ? re(c, l) : e.filter((C) => C.added);
  let h;
  a.length && (h = tr(a, l)), h && !h.getPriority(l) && (h = null);
  const f = a.length, u = Math.max(...a.map((C) => C.x + C.l)), d = Math.max(...a.map((C) => C.y + C.w));
  let p = 0, m = null, g = null, y;
  if (i || (i = e.find((C) => C.x === (t.x || 0) && C.y === (t.y || 0))), !i) return !1;
  const S = i.area;
  let w = null;
  const x = t.area, I = a.reduce((C, q) => C + q.area, 0);
  if (Y(t)) {
    if (t.cutType === "efficiency" ? (y = t.primaryCompression ?? "w", p = at(
      a,
      y,
      l.bladeWidth
    ), w = i?.bestScore?.total, p = p / t[y === "l" ? "l" : "w"]) : (y = t.cutPreference === "l" ? "x" : "y", p = at(
      a,
      y,
      l.bladeWidth
    ), p = p / t[y === "x" ? "l" : "w"]), t.cutType === "guillotine" && (o = e.filter((C) => C.added && Ut(C) === 1).length), r = I / x, ge() && v([() => $(r).to.be.lessThanOrEqual(1)]), t?.saw?.stockType === "roll") {
      const C = Te(a, "x");
      s = C.x + C.l;
    }
  } else if (j(t)) {
    y = l.cutPreference === "l" ? "x" : "y", p = at(
      a,
      y,
      l.bladeWidth
    ), p = p / t[y === "x" ? "w" : "l"];
    const C = F(l.cutPreference), q = C === "l" ? "x" : "y";
    if (m = l[C] - (i[C] + i[q] + l.bladeWidth), g = i[C], t.cutPreference === "flex")
      throw new Error("cut preference is set to flex, it should be l or w at this point");
    r = I / x;
  } else
    r = I / x;
  const b = a.reduce((C, q) => C + (q?.bestScore?.total ?? 0), 0), E = _(e, t).length + f, A = _(e, l).length + f, O = a.map((C) => C.compress());
  return {
    type: this.tidyStrategy ? "tidy" : "algo",
    stockID: l.id,
    stock: l,
    container: t,
    firstShape: i,
    firstShapeRotation: i.rot,
    topPriorityShape: h ? h.id : null,
    cutPreference: l.cutPreference,
    cutType: l.saw.cutType,
    segmentCutDirection: j(t) ? t.cutDirection : null,
    // Result contains individual shapes (groups have already called placeMyShapes)
    shapes: O,
    score: {
      efficiency: r,
      totalShapeArea: I,
      totalShapesPlaced: f,
      totalShapeScore: b,
      firstRowLength: p,
      // firstShapeFill,
      firstShapeArea: S,
      firstShapeScore: w,
      containerAvailableShapes: E,
      stockAvailableShapes: A,
      totalUnplacedShapes: n,
      rollLength: s || null,
      maxX: u,
      maxY: d,
      stripShapes: o || null,
      stripSize: g || null,
      remainingStripSpace: m || null,
      uniqueStock: this.uniqueStock.length
    }
  };
}
function pr(e, t, i = "sheet") {
  if (e && e?.length) {
    if (e.length === 1) return e[0];
    switch (e = e.filter((n) => n.score?.efficiency), i) {
      case "sheet":
        switch (t) {
          case "tidy":
            e.sort(mr.bind(this));
            break;
          case "strip":
            e.sort(Ii.bind(this));
            break;
          case "guillotine":
          case "beam":
            e.sort(yr.bind(this));
            break;
          default:
            e.sort(wr.bind(this));
            break;
        }
        break;
      case "linear":
        e.sort(gr);
        break;
      case "roll":
        switch (t) {
          case "guillotine":
          case "strip":
            e.find((n) => n.score.containerAvailableShapes === 0) && (e = e.filter((n) => n.score.containerAvailableShapes === 0)), e.sort(Ii);
            break;
          case "efficiency": {
            e.sort(Sr);
            break;
          }
        }
        break;
    }
    return e[0];
  }
}
function gr(e, t) {
  return t.score.efficiency - e.score.efficiency;
}
function Ii(e, t) {
  if (v([() => $(e.score).to.exist, () => $(t.score).to.exist]), !e.score || !t.score) return 0;
  const i = e.score.totalShapesPlaced === e.score.stockAvailableShapes, n = t.score.totalShapesPlaced === t.score.stockAvailableShapes;
  if (i && !n) return -1;
  if (n && !i) return 1;
  if (i && n) {
    const s = (e?.stock?.saw?.cutPreference || t?.stock?.saw?.cutPreference || "l") === "l" ? "w" : "l", r = s === "w" ? e.score.maxY : e.score.maxX, l = s === "w" ? t.score.maxY : t.score.maxX;
    if (r < l) return -1;
    if (l < r) return 1;
  }
  if (!i && !n) {
    if (e.score.totalShapesPlaced > t.score.totalShapesPlaced) return -1;
    if (t.score.totalShapesPlaced > e.score.totalShapesPlaced) return 1;
  }
  return e.score.efficiency > t.score.efficiency ? -1 : t.score.efficiency > e.score.efficiency ? 1 : 0;
}
function mr(e, t) {
  return e.score[this.config.successMetric] > t.score[this.config.successMetric] ? -1 : e.score[this.config.successMetric] < t.score[this.config.successMetric] ? 1 : e.score.firstShapeFill > t.score.firstShapeFill ? -1 : e.score.firstShapeFill < t.score.firstShapeFill ? 1 : e.score.firstRowLength > t.score.firstRowLength ? -1 : e.score.firstRowLength < t.score.firstRowLength ? 1 : e.score.totalShapeScore > t.score.totalShapeScore ? -1 : e.score.totalShapeScore < t.score.totalShapeScore ? 1 : 0;
}
function ns(e, t) {
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
function Sr(e, t) {
  return e.score.efficiency > t.score.efficiency ? -1 : e.score.efficiency < t.score.efficiency ? 1 : e.type !== "evo" && t.type === "evo" ? -1 : e.type === "evo" && t.type !== "evo" ? 1 : e.shapes?.length < t.shapes?.length ? -1 : e.shapes?.length > t.shapes?.length ? 1 : e.score.totalShapeScore > t.score.totalShapeScore ? -1 : e.score.totalShapeScore < t.score.totalShapeScore ? 1 : me.ID(e.stock, t.stock);
}
function yr(e, t) {
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
  const i = ns(e, t);
  return i !== 0 ? i : e.score.firstShapeArea > t.score.firstShapeArea ? -1 : e.score.firstShapeArea < t.score.firstShapeArea ? 1 : me.ID(e.stock, t.stock);
}
function wr(e, t) {
  const i = e.score?.totalUnplacedShapes, n = t.score?.totalUnplacedShapes;
  if (e.stock.id !== t.stock.id && (i === 0 || n === 0) && !(i === 0 && n === 0)) {
    const s = i === 0 ? e : t, r = i === 0 ? t : e, l = s.stock, c = r.stock, a = l.area - s.score.totalShapeArea, h = c.area;
    return s.score.totalShapeArea - r.score.totalShapeArea < h && h < a ? c.id === e.stock.id ? -1 : 1 : c.id === e.stock.id ? 1 : -1;
  }
  if (e.score[this.config.successMetric] > t.score[this.config.successMetric])
    return -1;
  if (e.score[this.config.successMetric] < t.score[this.config.successMetric])
    return 1;
  const o = ns(e, t);
  return o !== 0 ? o : e.type !== "evo" && t.type === "evo" ? -1 : e.type === "evo" && t.type !== "evo" ? 1 : e.score.firstShapeArea > t.score.firstShapeArea ? -1 : e.score.firstShapeArea < t.score.firstShapeArea ? 1 : e.score.totalShapeScore > t.score.totalShapeScore ? -1 : e.score.totalShapeScore < t.score.totalShapeScore ? 1 : me.ID(e.stock, t.stock);
}
function rs(e) {
  if (!e) return e;
  const t = { ...e };
  return e.stock && (t.stock = e.stock), e.resultKey !== "bestPartialResult" && e.firstShape && "toData" in e.firstShape && (t.firstShape = e.firstShape.toData(De.Compressed)), e.shapes?.length && (t.shapes = e.shapes.map((i) => i && "toData" in i ? i.toData(De.Compressed) : i)), "stripShapes" in e && e.stripShapes?.length && (t.stripShapes = e.stripShapes.map((i) => i && "toData" in i ? i.toData(De.Compressed) : i)), "root" in e && e.root && "toData" in e.root && (t.root = e.root.toData(De.Compressed)), "container" in e && e.container && "toData" in e.container && (Y(e.container) ? t.container = e.container : t.container = e.container.toData(De.Compressed)), t;
}
function jt(e, t) {
  return e?.stock ? Y(e.stock) ? e.stock : t.find((i) => i.autoId === e.stock.autoId) || null : null;
}
async function ne(e, t = null) {
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
  if (ge()) {
    const r = e.score.efficiency, l = D(o) ? `${o.id}: [${o?.shapes?.map((a) => a.parentId).join(", ")}]` : o?.id, c = [
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
      ...e.container && j(e.container) ? [{
        property: "Segment ID",
        value: e.container.id
      }] : [],
      ...e.container && j(e.container) ? [{
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
        value: r.toFixed(4)
      },
      {
        property: "Strip batch",
        value: e?.stripShapeBatch ?? "N/A"
      },
      {
        property: "Shapes",
        value: e?.shapes?.map((a) => a.id).join() ?? "N/A"
      }
    ];
    T("results", `Recording ${i}`, null, c);
  }
  let s = e;
  if (n && (s = pr.call(this, [e, n], t || e.stock.cutType, e.stock?.saw?.stockType), s || (T("results", "WARNING: findWinner returned undefined, using current result as winner"), s = e), T("results", `${s.type} winner for stock ${s.stock.id} eff. ${s.score.efficiency}, firstShape [${o?.id || "N/A"}], rot ${o?.rot || "N/A"}, batch ${s?.stripShapeBatch ?? "N/A"}`)), !n || !s?.processed) {
    e.processed = !0;
    const r = rs(s);
    this[i] = r;
  }
  br(s.shapes, s.stock);
}
function br(e, t) {
  if (!e?.length) return;
  const i = e.filter((n) => D(n) && n.type !== "user");
  v([
    () => $(i.every((n) => D(n))).toBe(!0),
    () => $(i.every((n) => n.type !== "user")).toBe(!0)
  ], "expandTemporaryGroups: All filtered groups should be temporary (non-user) groups");
  for (const n of i) {
    const o = n.shapes || [], s = n.type;
    if (n.added)
      try {
        n.placeMyShapes(t), v([
          () => $(o.every((r) => r.group?.addedAsGroup === n)).toBe(!0)
        ], `expandTemporaryGroups: All children of ${s} group should have addedAsGroup reference`);
      } catch (r) {
        T("errors", `Error placing shapes for temporary group ${n.id} during expansion: ${r.message}`);
      }
    n.destroy(), v([
      () => $(o.every((r) => r.group?.reference === null || r.group?.reference === void 0)).toBe(!0),
      () => $(o.every((r) => r.group?.inGroup === !1)).toBe(!0)
    ], `expandTemporaryGroups: Children of ${s} group should be released after destroy`);
  }
}
function qe({
  bestResult: e,
  shapeList: t,
  relevantStock: i = [],
  stockList: n = [],
  resetShapes: o = null
}) {
  T("results", `updating shapes from ${e.resultKey} / ${e.type} - stock ${e.stock.id}, FS: ${e.firstShape.id}`), i.length && i.filter((a) => a.autoId !== e?.stock?.autoId).forEach((a) => {
    const h = t.filter((f) => f.added && f?.stock?.autoId === a.autoId);
    h.length && (o ? o(h, !1, !0, !1) : h.forEach((f) => {
      f.added = !1, f.reset();
    }));
  });
  const s = [];
  let r = n.length ? n.find((a) => a.autoId === e.stock?.autoId) : null;
  if (r && e.stock && e.stock.used && (r.used = !0), !r && e.stock && (r = e.stock, r.saw && !Le(r.saw))) {
    T("results", `⚠️  Found serialized saw in bestResult.stock ${r.autoId}, attempting to restore from stockList`);
    const a = n.find((h) => h.autoId === r.autoId || h.parentId === r.parentId && Le(h.saw));
    a && Le(a.saw) ? (T("results", `✅ Restored live saw instance from stock ${a.autoId}`), r.saw = a.saw) : T("results", `❌ Could not restore live saw instance for stock ${r.autoId}`);
  }
  r || (r = e.stock);
  for (const a of e.shapes)
    if (gt(a) || Ps(a)) {
      const h = t.find((f) => f.autoId === a.autoId);
      if (!h) {
        ge() && (console.warn(`[updateShapeListFromBestResult] Shape ${a.autoId || a.id} from result not found in shapeList!`), console.warn(`  Available autoIds in shapeList: ${t.slice(0, 5).map((f) => f.autoId).join(", ")}...`));
        continue;
      }
      ge() && (M(h) || console.warn(`Shape ${a.autoId} in shapeList is not a live instance!`)), h.update({ ...a, validationMode: "none" }), M(h) && a.group && a.group.inGroup !== void 0 && (h.group.inGroup = a.group.inGroup), h.stock = r, s.push(h);
    }
  v([
    () => $(e.shapes.every((a) => {
      if (!gt(a)) return !0;
      const h = t.find((f) => f.autoId === a.autoId);
      return !(!h || !h.added || h.x !== a.x || h.y !== a.y || h.l !== a.l || h.w !== a.w);
    }), "best shape not found, not added, or not correctly updated").to.be.true
  ]), ge() && (s.every((h) => t.find((f) => f === h)) || console.warn("Some updated shapes are not exact references from shapeList - possible instance copying!")), Ri({
    shapes: s
  }, "updateShapeListFromBestResult");
  let l = [];
  const c = e.shapes.filter((a) => Es(a));
  return T("results", `Best result contains ${e.shapes.length} total items`), T("results", `Found ${c.length} serialized groups to recreate:`), c.forEach((a) => {
    T("results", `  - Group ${a.id}: type=${a.type}, shapes=${a.shapes?.length || 0}, added=${a.added}, x=${a.x}, y=${a.y}`);
  }), c.length > 0 && (T("results", `Recreating ${c.length} groups from bestResult`), l = vs(c, t, r), T("results", `Successfully recreated ${l.length} groups:`), l.forEach((a) => {
    T("results", `  - Group ${a.id}: type=${a.type}, shapes=${a.shapes?.length || 0}, added=${a.added}, x=${a.x}, y=${a.y}`);
  }), l.forEach((a) => {
    a.shapes && Array.isArray(a.shapes) && (a.shapes.forEach((f) => {
      M(f) && (f.group.reference = a, f.group.inGroup = !0, a.added && (f.group.addedAsGroup = a));
    }), v([
      () => $(a.shapes.every((f) => !M(f) || f.group?.reference === a)).toBe(!0)
    ], `updateShapeListFromBestResult: All children of group ${a.id} (type=${a.type}) should have correct reference`), a.added && v([
      () => $(a.shapes.every((f) => !M(f) || f.group?.addedAsGroup === a)).toBe(!0),
      () => $(a.shapes.every((f) => !M(f) || typeof f.group?.addedAsGroup != "string")).toBe(!0)
    ], `updateShapeListFromBestResult: addedAsGroup should be Group reference for group ${a.id} (type=${a.type})`));
    const h = a.added && typeof a.placeMyShapes == "function" && a.type !== "position";
    if (a.added && a.type === "position" && v([
      () => $(h).toBe(!1)
    ], `updateShapeListFromBestResult: Position group ${a.id} should NOT call placeMyShapes`), h)
      try {
        a.placeMyShapes(r);
      } catch (f) {
        throw console.error("[ERROR] placeMyShapes failed for group " + a.id + ":", f.message), console.error(`  Group details: type=${a.type}, x=${a.x}, y=${a.y}, rot=${a.rot}`), console.error("  Child shapes:"), a.shapes?.forEach((u) => {
          console.error(`    ${u.id}: added=${u.added}, x=${u.x}, y=${u.y}, rot=${u.rot}, l=${u.l}, w=${u.w}`);
        }), f;
      }
    ge() && (a.shapes?.forEach((f) => {
      const u = t.find((d) => d.autoId === f.autoId);
      u !== f ? (console.error(`[ERROR] Group ${a.id} child shape ${f.id} is NOT the same instance as in shapeList!`), console.error(`  Group shape: added=${f.added}, x=${f.x}, y=${f.y}`), console.error(`  shapeList shape: added=${u?.added}, x=${u?.x}, y=${u?.y}`)) : f.group?.reference !== a && (console.error(`[ERROR] Group ${a.id} child shape ${f.id} has incorrect group.reference!`), console.error(`  Expected: ${a.id}, Got: ${f.group?.reference?.id || "null"}`));
    }), T("results", `Successfully recreated, placed, and linked ${l.length} groups`));
  })), { updatedShapes: s, groups: l };
}
async function Be(e, t, i, n = null) {
  if (v([
    () => $(Y(t)).to.be.true,
    () => {
      if (i.length) return $(M(i[0]) || ue(i[0])).to.be.true;
    }
  ]), v([() => $(Z(i), "duplicates found").to.be.false]), Ui(), n || (n = Dr.call(this, t, i)), !n) throw new Error("no root segment created");
  if (this.config.sample.enable) {
    if (await xr.call(
      this,
      e,
      t,
      n
    ), e.secondRun || !this.bestResult) return;
    qe({
      bestResult: this.bestResult,
      shapeList: this.shapeList,
      stockList: this.stockList,
      resetShapes: this.resetShapes?.bind(this)
    }), await ki.call(this, {
      options: e,
      shapes: i,
      stock: t
      // root
    }), Tr.call(this, i, n);
  }
  if (this.config.guillotine.stripShapes.allocation && i.length > 1) {
    if (await $r.call(this, e, t, i, n), !this.bestResult) return;
    qe({
      bestResult: this.bestResult,
      shapeList: this.shapeList,
      stockList: this.stockList,
      resetShapes: this.resetShapes?.bind(this)
    }), await ki.call(this, {
      options: e,
      shapes: i,
      stock: t,
      root: n
    });
  }
}
async function ki({
  options: e,
  shapes: t,
  stock: i,
  root: n
}) {
  const o = re(this.shapeList, i);
  Lr.call(
    this,
    jt(this.bestResult, this.stockList),
    o
  ) && await Ir.call(
    this,
    e,
    o,
    t,
    i,
    n
  ), this.bestResult.shapes.forEach((r) => {
    const l = this.shapeList.find((c) => c.id === r.id);
    l && (r.x = l.x, r.y = l.y, r.placementOrder = l.placementOrder);
  });
}
async function $r(e, t, i, n) {
  if (!this.config.guillotine.stripShapes.allocation || (v([
    () => $(Y(t)).to.be.true,
    () => $(i.length ? M(i[0]) : !0).to.be.true,
    () => $(j(n)).to.be.true
  ]), t?.saw?.stockType === "roll")) return !1;
  const o = Br.call(this, n, this.uniqueStock, this.stockList);
  if (o === !1) return !1;
  for (let s = 0; s < o; s++)
    this.resetShapes(i), n.shapes = i, v([
      () => $(Z(n.shapes, `root segment batch ${s} stock ${t.id}`), "duplicates found in root segment").to.be.false,
      () => $(i.length).to.equal(n.shapes.length),
      () => $(i.some((r) => We(r) || J(r)), "groups exist in new strip shape batch calculation").to.be.false
    ]), T("guillotine", `running strip shape batch ${s} for stock ${t.id}`), await Yt.call(
      this,
      e,
      t,
      n,
      s
    ), v([() => $(Z(n.shapes), "duplicates found").to.be.false]);
  return !0;
}
async function xr(e, t, i) {
  T("guillotine", `running basic first shape sample for stock ${t.id}`), v([
    () => $(Y(t)).to.be.true,
    () => $(j(i)).to.be.true,
    () => $(i?.shapes?.length).to.be.greaterThan(0)
  ]), await Yt.call(this, e, t, i);
}
async function Yt(e, t, i, n = null, o = null, s = null) {
  if (v([
    () => $(Y(t)).to.be.true,
    () => $(j(i)).to.be.true,
    () => {
      if (o) return $(M(o)).to.be.true;
      if (n !== null) return $(n).to.be.a("number");
      if (s !== null) return $([0, 1].includes(s)).to.be.true;
    }
  ]), n === null)
    await Me.call(
      this,
      e,
      t,
      i,
      o,
      s,
      null
    );
  else if (await Me.call(
    this,
    e,
    t,
    i,
    void 0,
    void 0,
    n
  ) === !1) return !1;
}
async function Ir(e, t, i, n, o) {
  v([
    () => $(Y(n)).to.be.true,
    () => {
      if (i.length) return $(M(i[0]) || ue(i[0])).to.be.true;
      if (t.length) return $(M(t[0] || ue(i[0]))).to.be.true;
    }
  ]), T("guillotine", `running refinement for stock ${n.id}`);
  try {
    await kr.call(
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
async function kr(e, t, i, n, o) {
  if (v([
    () => $(Y(n)).to.be.true,
    () => {
      if (i.length) return $(M(i[0]) || ue(i[0])).to.be.true;
      if (t.length) return $(M(t[0]) || ue(i[0])).to.be.true;
    }
  ]), !this.config.guillotine.secondPass || !this.saw?.guillotineOptions?.headCuts) return !1;
  T("guillotine", `running second pass for stock ${n.id}`), await Mr.call(this, n, i, t, o);
  const s = re(i, n), r = Se.call(
    this,
    this.shapeList,
    n
  );
  r && n.id === jt(this.bestResult, this.stockList)?.id && s.length - t.length > 0 && (T("guillotine", `runSecondPass added ${s.length - t.length} shape(s) to stock ${n.id}, new total ${s.length}`), r.secondPass = !0, await ne.call(this, r));
}
function Tr(e, t) {
  const i = [];
  if (this.groupList && this.groupList.length > 0)
    for (const s of this.groupList)
      s.added ? i.push(s) : s.reset();
  for (let s = e.length; s--; ) {
    const r = e[s];
    D(r) && e.splice(s, 1), r.reset();
  }
  this.groupList && (this.groupList.length = 0, this.groupList.push(...i)), this.counters.placement = 0, this.bestPartialResult = null, Ui(), t.reset(e);
  const n = t.shapes.filter((s) => M(s)), o = t.shapes.filter((s) => D(s));
  T("reset", "[RESET] RESET ROOT SEGMENT BETWEEN CALCULATIONS", null, [
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
async function Cr(e, t, i, n) {
  v([
    () => $(Y(t)).to.be.true,
    () => $(j(i)).to.be.true
  ]);
  const o = ye(i.shapes, !1, !0), s = this.stockList.findIndex((h) => h.id === t.id);
  let r = null;
  s > 0 && (r = this.stockList[s - 1]);
  const l = F(t.cutPreference);
  let c = [], a = [];
  if (i.l === t.l && i.w === t.w ? s > 0 && (c = re(this.shapeList, r).filter((h) => Rt(h))) : a = re(this.shapeList, t).filter((h) => Rt(h)), c?.length || a?.length) {
    const h = l === "l" ? "x" : "y";
    c.sort((d, p) => d[h] - p[h]), a.sort((d, p) => d[h] - p[h]);
    const f = c.length ? c[c.length - 1] : a[a.length - 1], u = o.filter((d) => f[l] === d.w || f[l] === d.l);
    if (u?.length) {
      for (let d = 0; d < u.length; d++) {
        const p = u[d];
        if (d > 1 && u[d - 1].isIdentical(u[d]))
          continue;
        be(p, 0, t);
        let m;
        f[l] === p[l] ? m = 0 : m = 1;
        const g = await os.call(
          this,
          e,
          p,
          i,
          m
        );
        if (g?.length)
          for (let y = g.length; y--; ) {
            const S = g[y];
            await ne.call(this, S, "strip");
          }
        this.resetShapes(i.shapes);
      }
      return !(!n || n?.length);
    }
  }
  return !1;
}
async function Me(e, t, i, n = null, o = null, s = null) {
  if (i.type === "root" && !e?.secondPass && (t.used = !1, this.counters.placement = 0), !i.shapes?.length) return;
  v([
    () => $(Y(t)).to.be.true,
    () => $(j(i)).to.be.true,
    () => $(n ? M(n) : !0).to.be.true,
    () => $(n ? [0, 1].includes(o) : !0).to.be.true,
    () => $(s !== null ? typeof s == "number" : !0).to.be.true,
    () => $(s !== null ? n === null : !0).to.be.true,
    () => $(o !== null ? [0, 1].includes(o) : !0).to.be.true,
    () => $(i.shapes.every((f) => !We(f), "no segment groups should exist at this point")).to.be.true
  ]);
  const r = typeof s == "number";
  let l = !0;
  if (t.saw.guillotineOptions?.strategy === "time" && (l = !await Cr.call(
    this,
    e,
    t,
    i
  )), l)
    if (At(i))
      if (r) {
        let f = Nr(i.shapes, s, t);
        if (f.sort((p, m) => p.guillotineState.getStripShapeBatchData(s).order - m.guillotineState.getStripShapeBatchData(s).order), T("guillotine", `strip shape candidates ${f.map((p) => p.id).join("|")}`), v([
          () => $(f.find((p) => p.guillotineState.getStripShapeBatchData(s).stockId !== i.getStock.autoId), "found strip shapes in allocatedStripShape from another stock").to.be.undefined,
          () => $(Z(f), "duplicate shapes found in stripShapeCandidates").to.false,
          () => $(f.find((p) => D(p) && !J(p)), "found groups in allocatedStripShape").to.be.undefined,
          () => $(i.shapes.filter((p) => p.added).length === 0, `added shapes found in segment ${i.id}`).to.be.true
        ]), !f.length)
          return Me.call(
            this,
            e,
            t,
            i
          );
        const u = F(t.cutPreference);
        if (f = f.filter((p) => {
          if (D(p)) return !0;
          const m = Ci(p, s, t, !1);
          return Ce(p, m, t) ? (Ci(p, s, t, !0), Ds(p, m, t) ? (v([
            () => $(p.rot, `candidates ${p.id} rotation (${p.rot}) incorrect for batch (${m})`).equal(m)
          ]), !0) : !1) : (T("guillotine", `cannot rotate strip shape ${p.id}, ${p.l}x${p.w} to ${m} on stock ${t.id}`, [p.getStripShapeBatchData(s)]), $e(p, t, m), !1);
        }), this.config.groups.guillotine.strips && f.length > 1) {
          const p = i.shapes.filter((m) => J(m) && m.shapes.some((g) => f.includes(g)));
          p.length > 0 ? (T("guillotine", `Reusing ${p.length} existing strip groups`), f = p) : f = Hr.call(this, s, u, t, i, f);
        }
        if (!f.length)
          return Me.call(
            this,
            e,
            t,
            i
          );
        f.sort(function(m, g) {
          return g[u] !== m[u] ? g[u] - m[u] : g[t.cutPreference] !== m[t.cutPreference] ? g[t.cutPreference] - m[t.cutPreference] : m.autoId.localeCompare(g.autoId, void 0, { numeric: !0 });
        }), n = f[0], T("guillotine", `firstShape for segment ${i.id} is ${n.id}`);
        const d = n.guillotineState.getStripShapeBatchData(s);
        if (!d) throw new Error("no fs batch found");
        v([() => $(d.stockId).equal(i.getStock.autoId)]), n.firstShape.isFirstShape = !0, o = d.rot, v([() => $([0, 1].includes(d.rot)).to.be.true]), await Ot.call(this, {
          options: e,
          fs: n,
          fsRotation: o,
          segment: i,
          stripShapeBatch: s,
          stripShapeCandidates: f
        });
      } else
        n && o !== null ? await Ot.call(this, {
          options: e,
          fs: n,
          fsRotation: o,
          segment: i,
          stripShapeBatch: s
        }) : await ft.call(
          this,
          e,
          i
        );
    else
      await ft.call(
        this,
        e,
        i
      );
  if (!this.bestPartialResult)
    if (s !== null) {
      if (await ft.call(
        this,
        e,
        i,
        !0
      ), !this.bestPartialResult) return;
    } else return;
  const a = this.bestPartialResult.firstShape;
  qe({
    bestResult: this.bestPartialResult,
    shapeList: this.shapeList,
    stockList: this.stockList,
    resetShapes: this.resetShapes?.bind(this)
  }), Qn(i, !0), Ai(a) && i.shapes.push(a), i.shapes = Li(i.shapes, a), v([
    () => $(i.shapes.filter((f) => D(f)).every((f) => J(f)), "number of groups in segment does not equal the number of strip shape groups (others should have been removed)").to.be.true,
    () => Di(i.shapes, "segmentCalculations after removeGroupsFromSegment"),
    () => $(i.shapes.every((f) => !We(f)), "found groups in segment after removal").to.be.true
  ]);
  const h = _(this.shapeList);
  if (this.bestPartialResult = null, h.length || this.config.secondRun.enabled) {
    const f = Rr.call(
      this,
      i,
      a
    );
    if (f?.length) {
      T("cuts", `Created ${f.length} new segments, unplaced shapes: ${h.length}`);
      for (const u of f) {
        if (this.bestPartialResult = null, !u.shapes.length) {
          u.offcut = !0;
          continue;
        }
        u.shapes = u.shapes.filter((d) => !d.added), r && !At(u) && (u.shapes = u.shapes.filter((d) => !d.guillotineState.isInStripShapeBatch(s))), await Me.call(
          this,
          e,
          t,
          u,
          null,
          null,
          s
        );
      }
    }
  }
  if (i.type === "root") {
    i.shapes = i.shapes.map((p) => D(p) ? p : this.shapeList.find((g) => g.autoId === p.autoId) || p);
    const f = Se.call(
      this,
      this.shapeList,
      t,
      a
    );
    if (!f) throw new Error("Unable to score stock");
    if (f.stripShapeBatch = s, f.root = i, !f.score.efficiency) return;
    const u = this.shapeList.filter((p) => !p.group?.inGroup && !D(p) && p.stock?.id === t.id);
    Mi(u).length > 0, s !== null ? f.type = "allocated strips" : f.type = "basic", await ne.call(this, f);
  }
}
async function Ot({
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
    u ? (t.reset(), v([() => $(n.shapes.filter((p) => p.autoId === t.autoId).length, "too many first shapes in segmentShapes").to.equal(1)]), d = Se.call(
      this,
      n.shapes,
      f,
      t
    )) : d = Se.call(
      this,
      n.shapes,
      n,
      t
    ), d.score.totalShapesPlaced && await ne.call(this, d, "strip");
  };
  n.shapes = Pr.call(this, n, t, o), Or.call(
    this,
    t,
    n,
    n.getStock,
    i
  ), t.placementOrder = this.counters.placement++, v([
    () => $(j(n)).to.be.true,
    () => $(o !== null ? typeof o == "number" : !0).to.be.true,
    () => $(i !== null ? [0, 1].includes(i) : !0).to.be.true
  ]), t && v([
    //Accept all group types (segment, user, strip) as well as shapes
    () => $(M(t) || D(t), `first shape ${t.id} is not a shape or group`).to.be.true,
    () => $(t.added, `first shape ${t.id} added too soon`).to.be.true,
    //Only check rotation for shapes, not groups (groups cannot be rotated)
    () => $(D(t) || t.rot === i, `first shape ${t.id} rotation (${t.rot}) incorrect for (${i})`).to.be.true,
    () => $(k.lessThanOrEqualTo(t.l, n.l), `first shape ${t.id} longer than segment ${t.l} > ${n.l}`).to.be.true,
    () => $(k.lessThanOrEqualTo(t.w, n.w), `first shape ${t.id} wider than segment ${t.w} > ${n.w}`).to.be.true
  ]);
  const l = n.getStock, { success: c, firstShapeSegment: a, isHeadCut: h } = await Er.call(this, {
    fs: t,
    segment: n,
    stock: l,
    stripShapeBatch: o,
    stripShapeCandidates: s,
    options: e
  });
  return !(c === !1 && (await r(a), !h));
}
function Pr(e, t, i) {
  if (Z(e.shapes)) {
    const s = /* @__PURE__ */ new Set();
    e.shapes = e.shapes.filter((r) => s.has(r.autoId) ? !1 : (s.add(r.autoId), !0));
  }
  const o = e.shapes.filter((s) => s.willItFit(e) ? !(e.type !== "root" && typeof i == "number" && s.getStripShapeBatchData(i) !== !1 && t.autoId !== s.autoId) : (T("cuts", `  Excluding ${s.autoId}: doesn't fit in segment`), !1));
  return T("cuts", `  Result: ${o.length} shapes selected for segment`), this.resetShapes(o, {
    keepScores: !1,
    removeGroups: !1,
    keepGuillotineData: !0,
    keepFirstShapeSampleRotations: !0
  }), o;
}
async function Er({
  fs: e,
  segment: t,
  stock: i,
  stripShapeBatch: n,
  stripShapeCandidates: o,
  forceNoHeadCut: s,
  options: r
}) {
  T("guillotine", `[createFirstShapeSegmentsPlaceShapesAndScore] Starting for segment ${t.id}, first shape ${e.id}`);
  const { offcuts: l, firstShapeSegment: c, isHeadCut: a, success: h } = await vr.call(this, { fs: e, segment: t, stock: i, stripShapeBatch: n, stripShapeCandidates: o, forceNoHeadCut: s, options: r });
  if (v([() => $(l.length, "too many offcuts generated").to.be.lessThanOrEqual(2)]), h === !1)
    return { success: !1, firstShapeSegment: c, isHeadCut: a };
  if (r.secondPass) {
    const { cuts: S } = Nt.call(
      this,
      {
        container: c,
        shapes: [e],
        forceNoHeadCut: s
      }
    ), { allShapesCut: w } = Ji([e], S, c);
    if (!w) return { success: !1, firstShapeSegment: c, isHeadCut: a };
  }
  if (!l.length) {
    const S = Se.call(
      this,
      t.shapes,
      c,
      e
    );
    return await ne.call(this, S, "strip"), { success: !0, firstShapeSegment: c, isHeadCut: a };
  }
  const f = c.cutDirection, u = l.find((S) => k.equalTo(S[f], c[f]));
  if (!u || u.l <= 0 || u.w <= 0) {
    T("cuts", `No next segment. Remaining shapes: ${t.shapes.length}`), M(e) && !t.shapes.find((w) => w.autoId === e.autoId) && t.shapes.unshift(e), t.shapes.length > 1 && await qt.call(
      this,
      t.shapes,
      e,
      c || t
    );
    const S = Se.call(
      this,
      t.shapes,
      c,
      e
    );
    return await ne.call(this, S, "strip"), { success: !0, firstShapeSegment: c, isHeadCut: a };
  }
  const d = c.cutDirection;
  (t.type === "root" || t.type === "firstShape") && o.length === 1 && (u[d] = t[d], c[d] = t[d]), v([() => $(t.shapes.filter((S) => S.autoId === e.autoId).length, "too many first shapes in segmentShapes").to.equal(1)]), await qt.call(
    this,
    t.shapes,
    e,
    c || t
  );
  const p = Se.call(
    this,
    t.shapes,
    c,
    e
  );
  await ne.call(this, p, "strip");
  const m = t.type === "root" ? t.shapes.filter((S) => J(S)) : [];
  this.resetShapes(t.shapes, {
    keepScores: !1,
    removeGroups: !0,
    keepGuillotineData: !1,
    keepFirstShapeSampleRotations: !0
  });
  const g = new Set(t.shapes.map((S) => S.autoId)), y = m.filter((S) => !g.has(S.autoId));
  return t.shapes.push(...y), { success: !0, firstShapeSegment: c, isHeadCut: a };
}
async function vr({ fs: e, segment: t, stock: i, segmentShapes: n, stripShapeBatch: o, forceNoHeadCut: s, options: r }) {
  let l = !0, c, a = !1;
  !s && Ki.call(this, t) && (a = Yi.call(this, i.saw, e, t), t.hasHeadCut = a);
  try {
    c = Fr.call(
      this,
      e,
      a,
      t,
      i,
      n
    );
  } catch (f) {
    throw T("errors", `firstShapeSegment error, fs: ${e.autoId}, 'ssg: ${o}: ${f.message}`), new Error(`issue with createFirstShapeSegment ${f.message}`);
  }
  if (v([() => $(c[c.cutDirection]).to.equal(e[c.cutDirection])]), r?.secondPass) {
    const f = this.shapeList.filter((u) => u.added && u.stock.autoId === i.autoId && u.autoId !== e.autoId);
    if (qi(c, f, i))
      return l = !1, { firstShapeSegment: c, offcuts: [], success: l };
  }
  const { offcuts: h } = Nt.call(
    this,
    {
      container: t,
      shapes: t.shapes,
      forceNoHeadCut: s
    }
  );
  return { firstShapeSegment: c, offcuts: h, isHeadCut: a, success: l };
}
async function ft(e, t, i = !1) {
  if (!this.config.sample.enable && i === !1) return !1;
  v([
    () => $(t.shapes.every((l) => M(l) || ue(l)), "segment shapes contains groups").to.be.true
  ]);
  let n = [];
  if (t.shapes.length > 1) {
    const l = F(t.cutDirection), c = t[l], a = t.parentSegmentGroupShapes || /* @__PURE__ */ new Set(), h = t.shapes.filter((p) => !a.has(p.id)), f = Rs(h, c * 0.05), u = f.reduce((p, m) => p + m.area, 0), d = t.getStock.area;
    if (this.config?.groups?.guillotine?.firstShape && f.length >= 2 && u >= d * 0.8) {
      n = Oi({
        shapes: f,
        container: t,
        // Use segment as container
        targetSize: c,
        exact: !1,
        direction: l,
        // Pass Direction ('l' or 'w'), not GroupDirection
        config: this.config,
        counters: this.counters,
        preventDuplicates: !0,
        type: "firstShape",
        maxGroups: this.config.sample.guillotine
      });
      const p = /* @__PURE__ */ new Set();
      n = n.filter((m) => {
        const g = `${m.l}-${m.w}`;
        return p.has(g) ? !1 : (p.add(g), !0);
      }), T("groups", `[FIRST SHAPE GROUPS] created ${n.map((m) => m.id).join()} for segment ${t.id} `);
    }
  }
  let o = null;
  e.secondPass && (o = re(
    this.shapeList,
    t.getStock
  ));
  const s = [...t.shapes], r = as.call(
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
    const c = r[l];
    if (T("guillotine", `[FIRST SHAPE] attempting first shape candidate ${c.id} for segment ${t.id}`), l > 1 && r[l - 1].isSameSize(r[l])) {
      c.firstShape.sampleRotations = [];
      continue;
    }
    this.resetShapes(s, {
      removeGroups: !1,
      keepFirstShapeSampleRotations: !0
    }), c.firstShape.isFirstShape = !0, Ai(c) && (t.shapes.find((f) => f.autoId === c.autoId) || t.shapes.push(c), t.shapes = Li(t.shapes, c)), v([
      () => $(Z(t.shapes, `segment ${t.id} before running fs tests for ${c.id}`), "duplicates found in segment").to.be.false,
      () => $(Z(t.shapes), "duplicates found").to.be.false
    ]), await os.call(
      this,
      e,
      c,
      t
    ), v([() => $(Z(t.shapes), "duplicates found").to.be.false]), c.firstShape.isFirstShape = !1, c.firstShape.sampleRotations = [], t.shapes = s, this.resetShapes(t.shapes, {
      removeGroups: !0,
      keepFirstShapeSampleRotations: !0
    });
    const a = t.shapes.filter((f) => M(f)), h = t.shapes.filter((f) => D(f));
    T("reset", `[RESET] RESET SEGMENT ${t.id} BETWEEN FIRST SHAPE CANDIDATES: ${c.id}`, null, [
      {
        type: "Shapes",
        count: a.length,
        added: a.filter((f) => f.added).length,
        ids: a.map((f) => f.id).join(", ")
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
function Dr(e, t) {
  return new ce({
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
function Rr(e, t) {
  T("guillotine", `[SEG-CREATE] creating new segments for segment ${e.id}, stock ${e.stock.id} at (${e.x},${e.y}) ${e.l}x${e.w}, first shape ${t.id} at (${t.x},${t.y}) ${t.l}x${t.w}, cut direction ${e.cutDirection}`), D(t) && T("guillotine", `[SEG-CREATE] first shape ${t.id} is group with ${t.shapes?.length || 0} shapes`, [t.dimensions, t.coords]), v([
    () => $(M(t) || D(t), "first shape is not a shape or group").to.be.true,
    () => $(j(e), "segment is not a segment class").to.be.true
  ]);
  const { offcuts: i } = Nt.call(this, {
    container: e,
    shapes: e.shapes
  });
  if (!i.length) return;
  T("guillotine", `[SEG-CREATE] All new segments for segment ${e.id}:`, null, i.map((c) => ({ id: c.id, x: c.x, y: c.y, l: c.l, w: c.w, dir: c.cutDirection })));
  const n = e.cutDirection === "l" ? "y" : "x", o = F(e.cutPreference), s = i.filter((c) => c[n] < t[n] + t[o]), r = i.find((c) => c[n] >= t[n] + t[o]);
  if (r && (r.rowSegment = !0, s.push(r)), !s?.length) return;
  const l = we(n);
  return s.sort((c, a) => c[n] < a[n] ? -1 : c[n] > a[n] ? 1 : c[l] < a[l] ? -1 : c[l] > a[l] ? 1 : 0), s.forEach((c) => {
    const a = e.shapes.filter((f) => !f.added && $e(f, c)), h = /* @__PURE__ */ new Set();
    c.shapes = a.filter((f) => h.has(f.autoId) ? !1 : (h.add(f.autoId), !0)), v([() => $(c.shapes.every((f) => !f.added), `added shapes in offcut ${c.autoId}`).to.be.true]);
  }), e.children = s, s;
}
function Ar(e, t, i, n, o, s, r, l, c) {
  if (!t || t.length <= 1) return !0;
  try {
    t.sort((b, E) => b[r] - E[r]);
    let a = 0, h = -1 / 0;
    for (const b of t)
      b[r] > h + n && (a += b[l] + n, h = b[r] + b[l]);
    if (a > e[l])
      return console.warn("Preliminary check: shapes would not fit within stock after rearrangement"), !1;
    const f = [], u = n / 2;
    let d, p, m = !1, g = 0, y = 0, S = 0;
    const w = 3;
    for (const b of t) {
      if (!Rt(b)) continue;
      m || (d = b[r], S = 0), p = b[r] + b[l];
      const E = b[r] + b[l] + u, A = new Oe(
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
      if (Ft(A, e, i))
        if (m = !0, S++, S >= w)
          m = !1, console.warn(`Forced strip creation after ${w} consecutive collisions`);
        else
          continue;
      else
        m = !1, S = 0;
      const O = i.filter((L) => k.greaterThanOrEqualTo(L[r], d) && k.lessThan(L[r], p));
      if (!O.length) continue;
      const G = O.length > 0 ? O.reduce((L, N) => {
        const K = L[o] + L[s], fe = N[o] + N[s];
        return k.equalTo(K, fe) ? L[s] > N[s] ? L : N : K > fe ? L : N;
      }) : O[0];
      if (!G) continue;
      const C = G[o] + G[s], q = O.length > 0 ? O.reduce((L, N) => {
        const K = L[r] + L[l], fe = N[r] + N[l];
        return k.equalTo(K, fe) ? L[l] > N[l] ? L : N : K > fe ? L : N;
      }) : O[0];
      if (!q) continue;
      let V = q[r] + q[l];
      p > V && (V = p);
      const Ge = V - d;
      f.push({
        stripStartPoint: d,
        stripEndPoint: p,
        furthestPrimaryPoint: C,
        furthestOrderingPoint: V,
        shapesInThisRow: O,
        width: Ge
      });
    }
    if (!f.length)
      return console.warn("No valid strips found after analysis"), !0;
    const x = /* @__PURE__ */ new Map();
    f.forEach((b) => {
      b.shapesInThisRow.forEach((E) => {
        x.set(E.autoId, E[r]);
      });
    }), f.sort((b, E) => k.equalTo(b.furthestPrimaryPoint, E.furthestPrimaryPoint) ? E.width - b.width : E.furthestPrimaryPoint - b.furthestPrimaryPoint);
    let I = 0;
    for (const b of f)
      I += b.furthestOrderingPoint - b.stripStartPoint + n;
    if (I > e[l])
      return console.warn("Total arrangement would exceed stock dimensions"), !1;
    for (const b of f) {
      b.shapesInThisRow.sort((E, A) => E.placementOrder - A.placementOrder);
      for (let E = 0; E < b.shapesInThisRow.length; E++) {
        const A = b.shapesInThisRow[E], O = A[r] - b.stripStartPoint, G = y + O;
        if (G + A[l] > e[l])
          return console.warn(`Shape ${A.id} would exceed stock boundaries after rearrangement`), Ti(f, x, r), !1;
        const C = A[r];
        A[r] = G, A.placementOrder = E + g, Ut(A) === 1 && k.equalTo(A[o], 0) && et(A, s), !k.equalTo(C, G) && c && (Jn(c, A), Mt(c, A));
      }
      if (g += b.shapesInThisRow.length, y += b.furthestOrderingPoint - b.stripStartPoint + n, y > e[l])
        return console.warn("Rearrangement exceeds stock dimensions"), Ti(f, x, r), !1;
    }
    return !0;
  } catch (a) {
    return console.error("Error during shape rearrangement:", a), !1;
  }
}
function Ti(e, t, i) {
  e.forEach((n) => {
    n.shapesInThisRow.forEach((o) => {
      t.has(o.autoId) && (o[i] = t.get(o.autoId));
    });
  });
}
function Lr(e, t, i) {
  if (!this.config?.guillotine?.strips?.rearrange || e.saw.guillotineOptions?.strategy === "time") return !1;
  const o = e.bladeWidth;
  if (k.equalTo(o, 0) || o < 0)
    return console.warn("Invalid blade width for rearrangement"), !1;
  const s = re(t, e);
  if (!s?.length) return !1;
  const r = e.cutPreference;
  if (r !== "l" && r !== "w")
    return console.warn("Invalid primary dimension:", r), !1;
  const l = r === "l" ? "x" : "y", c = s.filter(
    (u) => Lt(u, 1) && k.equalTo(u[l], 0)
  );
  if (!c.length) return !1;
  const a = F(r), h = r === "l" ? "y" : "x";
  return c.reduce((u, d) => u + d[a], 0) > e[a] ? (console.warn("Total strip width exceeds stock dimensions"), !1) : Ar(
    e,
    c,
    s,
    o,
    l,
    r,
    h,
    a,
    i
  );
}
async function Mr(e, t, i, n) {
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
  const c = l === "l" ? "x" : "y", a = F(l), h = l === "l" ? "y" : "x";
  r.sort((u, d) => u[h] - d[h]);
  let f = 0;
  for (let u = 0; u < r.length; u++) {
    let d = function(L, N, K, fe) {
      return L[N] + L[K] + fe;
    }, p = function(L, N, K, fe, _t) {
      return _t > 0 ? _t - N[K] : L[fe] - N[K];
    };
    const m = r[u], g = u > 0 ? re(this.shapeList, e) : i, y = _(t, e);
    if (!y.length) {
      console.debug("No remaining shapes to place, exiting corner squeeze");
      break;
    }
    const S = g.filter((L) => !Lt(L, 0) && Ze(L, m, h));
    S.some((L) => L.autoId === m.autoId) || S.push(m);
    let w;
    S.length > 0 ? w = S.reduce((L, N) => L[c] + L[l] > N[c] + N[l] ? L : L[c] + L[l] < N[c] + N[l] ? N : L[h] < N[h] ? L : N) : w = m;
    const x = w[c] + w[l] + s;
    let I;
    c === "x" ? I = new Oe({
      x1: x,
      x2: x,
      y1: w[h],
      y2: e[a]
    }) : I = new Oe({
      x1: w[h],
      x2: e[a],
      y1: x,
      y2: x
    });
    const b = Ft(I, e, g, !0);
    if (!Array.isArray(b)) {
      console.warn("Expected collision shapes array but got:", typeof b);
      continue;
    }
    const E = b;
    let A = 0;
    if (E?.length && (A = E.reduce((N, K) => N[h] < K[h] ? N : K)[h] - s, A <= w[h])) {
      console.debug("Invalid segment end point calculation, skipping this squeeze attempt");
      continue;
    }
    const O = typeof B < "u" && typeof B.segments < "u" ? B.segments === 0 ? "root" : (B.segments + 1).toString() : "squeeze-" + Date.now();
    typeof B < "u" && typeof B.segments < "u" && B.segments++;
    const G = d(
      w,
      c,
      l,
      s
    ), C = p(
      e,
      w,
      h,
      a,
      A
    ), q = e[l] - G, V = {
      id: O,
      shapes: y,
      stock: e,
      saw: e.saw,
      material: e.material,
      cutDirection: F(e.cutPreference),
      phase: 0,
      stockType: e?.saw?.stockType,
      t: e.t,
      // Assign all dimensions and positions
      x: c === "x" ? G : w.x,
      y: c === "y" ? G : w.y,
      l: c === "x" ? q : e.l,
      w: c === "y" ? q : e.w,
      [c]: G,
      [h]: w[h],
      [l]: q,
      [a]: C
    };
    if (V.l <= 0 || V.w <= 0) {
      console.debug("Skipping segment with invalid dimensions:", V.l, V.w);
      continue;
    }
    let Ge;
    try {
      Ge = new ce(V);
    } catch (L) {
      console.warn(`Corner squeeze segment creation error - ${L.message} for shape: ${w.id}`);
      continue;
    }
    try {
      await Yt.call(
        this,
        { secondPass: !0 },
        e,
        Ge
      ), f++;
    } catch (L) {
      console.warn(`Error during segment calculations: ${L.message}`);
    }
  }
  f > 0 && console.debug(`Corner squeeze completed with ${f} successful placements`);
}
function Or(e, t, i, n = null) {
  if (!t)
    throw new Error("no segment provided to assignStripShape");
  if (!e) throw new Error("no shape provided to assignStripShape");
  return e.resetBothScores(), e.x = t.x, e.y = t.y, D(e) && (e.initShapes(e.shapes), e.placeMyShapes(i)), T("calculations", `assigning first shape ${e.id}, x: ${e.x}, y: ${e.y}, rot: ${n}`), e.guillotineState || (e.guillotineState = new ze({})), e.firstShape.isFirstShape = !0, _n(e), et(e, t.cutDirection), n !== null && !D(e) ? be(e, n, i) : n !== null && D(e) && e.rot !== n && T("groups", `[assignStripShape] WARNING: Group ${e.id} has computed rot=${e.rot} but requested rotation=${n} - groups cannot be rotated!`), ge() && (D(e) || v([() => $(e.rot).to.equal(n)])), e.addToStock(i), v([() => $(Mi(this.shapeList.filter((o) => o.stock?.id === i.id))).length.to.be(0)]), e;
}
async function os(e, t, i, n = null) {
  if (v([
    () => $(M(t) || D(t), "runFirstShapeRotationTests requires shape or group").to.be.true,
    () => $(j(i)).to.be.true
  ]), !(le(n) && !Ce(t, n, i)))
    for (const o of t.firstShape.sampleRotations)
      await ls.call(
        this,
        t,
        i,
        o,
        Ot,
        {
          options: e,
          fs: t,
          fsRotation: null,
          segment: i
        },
        "fsRotation"
      );
}
function qr(e, t, i) {
  let n;
  return i ? (n = e.cutPreference, et(t, F(n)), e.hasHeadCut = !0) : (k.equalTo(t[e.cutDirection], e[e.cutDirection]) ? n = e.cutDirection : n = At(e) ? F(e.cutPreference) : F(e.cutDirection), et(t, F(n))), v([
    () => $(ae(t)).to.not.equal(n)
  ]), n;
}
function Fr(e, t, i, n, o) {
  i.hasHeadCut = t;
  const s = qr(i, e, t), r = {
    l: s === "w" ? i.l : e.l,
    w: s === "w" ? e.w : i.w
  }, l = new ce({
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
  return v([
    () => $(l.cutDirection, `segment cut direction ${i.id} is the same as first shape ${e.id}`).to.not.equal(ae(e))
  ]), T("cuts", `FIRST SHAPE SEGMENT [${l?.parent?.type === "root" ? "R" : l.parent.id}]->[${l.autoId}] ${t ? "HEAD" : "NORM"} ${he(l.l, 4)}x${he(l.w, 4)}, SEG DIR ${l.cutDirection.toUpperCase()}, SHAPE DIR ${ae(e).toUpperCase()}`), l;
}
function Gr(e, t, i, n, o = null, s) {
  if (!t.length) return [];
  v([
    () => $(t.length).to.be.greaterThan(0),
    () => $(e.every((u) => u.added === !1), "unplaced shapes contain added shapes").to.be.true
  ]);
  let r = [];
  for (const u of t) {
    const d = it(u, n);
    if (u.firstShape.sampleRotations = [], !D(u))
      for (const p of d) {
        let m = 1;
        be(u, p, n);
        const g = u.getPriority(n);
        let y = !0;
        if (be(u, p, n), v([
          () => $(u.rot, `unique shape ${u.id} rotation (${u.rot}) incorrect for (${p})`).equal(p)
        ]), !$e(u, i, p))
          continue;
        if (o?.length) {
          u.x = i.x, u.y = i.y;
          for (const w of o)
            if (Fi(u, w, n)) {
              y = !1;
              break;
            }
        }
        if (!y) continue;
        const S = u.aspect;
        if (S < 0.1) {
          const w = n.cutPreference;
          if (u[w] >= 0.7 * n[w] && u[w] > u[F(w)]) {
            const x = Math.max(1, 10 * (1 - S * 2));
            m *= x;
          }
        }
        r.push({
          id: u.id,
          shape: u,
          rotation: p,
          score: m,
          priority: g
        }), v([
          () => $($e(u, i, p), "canditate will not fit").to.be.true
        ]);
      }
  }
  r.sort((u, d) => u.score !== d.score ? d.score - u.score : u.priority !== d.priority ? d.priority - u.priority : d.shape.area - u.shape.area);
  const l = i.cutDirection, c = n[l], a = this.config.guillotine.firstShapeFullSizeThreshold, h = r.filter((u) => u.shape[l] >= a * c);
  if (h.length > 0) {
    const u = h[0];
    return u.shape.firstShape.sampleRotations = [u.rotation], [u.shape];
  }
  r = r.slice(0, this.config.sample.guillotine);
  const f = [];
  for (const u of r)
    f.find((p) => p.id === u.id) || f.push(u.shape), u.shape.firstShape.sampleRotations.push(u.rotation), v([
      () => $(u.shape.firstShape.sampleRotations.length).to.be.lessThanOrEqual(2),
      () => $(u.shape.firstShape.sampleRotations[0]).to.not.equal(u.shape.firstShape.sampleRotations[1])
    ]);
  return f.push(...s), f;
}
function Nr(e, t, i) {
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
function Br(e, t, i) {
  zr(e.shapes);
  const n = As.call(this, e, t, i);
  return n || !1;
}
function Ci(e, t = null, i, n = !1) {
  let o;
  if (t !== null) {
    const s = e.guillotineState.getStripShapeBatchData(t);
    if (s === !1)
      throw new Error("getStripShapeRotation - could not find strip shape group");
    o = s.rot;
  }
  if (v([() => $([0, 1].includes(o)).to.be.true]), n && o !== e.rot) {
    if (D(e) || !Ce(e, o, i)) return o;
    if (be(e, o, i) === !1)
      throw new Error("getStripShapeRotation - could not rotate strip shape correctly");
  }
  return o;
}
function Hr(e, t, i, n, o) {
  const s = i.cutPreference === "l" ? "l" : "w", r = new Set(o.map((f) => f[s]));
  v([
    () => $(r.size).to.be.greaterThan(0)
  ]);
  const l = o.filter((f) => J(f)), c = o.filter((f) => M(f));
  if (c.length < 2)
    return o;
  const a = [...c], h = [];
  for (const f of r) {
    const u = [], d = f * (1 - this.config.groups.tolerance);
    let p = f * (1 + this.config.groups.tolerance);
    p > n[s] && (p = n[s]);
    for (let m = a.length - 1; m >= 0; m--) {
      const g = a[m];
      !g.getMinSpacing(i.saw, !0) && g[s] <= i[s] && g[s] >= d && g[s] <= p && (u.push(g), a.splice(m, 1));
    }
    u.length > 0 && h.push(u);
  }
  if (h.length > 0) {
    const f = [];
    for (const u of h) {
      if (u.length < 2) continue;
      const d = u[0], p = d.guillotineState.getStripShapeBatchData(e);
      if (p === !1)
        throw new Error("no reference shape group");
      let m;
      try {
        const g = u.slice(0, -1).reduce((E, A) => E + A.getMinSpacing(i), 0), y = u.reduce((E, A) => E + A[t], 0);
        if (g + y > i[t]) continue;
        const S = d.l, w = d.w, b = `ss-${[...new Set(u.map((E) => E.parentId || E.id))].sort().join("-")}_${this.counters.group++}`;
        m = new mt({
          l: S,
          w,
          id: b,
          shapes: u,
          direction: Ls(t),
          container: i,
          type: "strip"
        });
      } catch (g) {
        console.log(g), m = null;
      }
      if (m) {
        const g = Math.min(...u.map((S) => {
          const w = S.guillotineState.getStripShapeBatchData(e);
          return w ? w.order : 1 / 0;
        }));
        m.guillotineState.setStripShapeBatchGroup(e, {
          stockId: i.autoId,
          dimension: m[t],
          rot: m.rot,
          order: g,
          priorityShape: p.priorityShape
        });
        const y = new Set(m.shapes.map((S) => S.id));
        f.push(m), n.shapes = n.shapes.filter((S) => !y.has(S.id)), n.shapes.push(m), o = o.filter((S) => !y.has(S.id));
      }
    }
    o = [...f, ...l, ...o.filter((u) => M(u))];
  } else
    o = [...l, ...c];
  return o;
}
function zr(e) {
  for (const t of e) t.guillotineState.resetStripShapeBatchGroups();
}
function Wr(e, t) {
  const i = t.getStock, n = 0.1 * i.l;
  function o(l) {
    return e.some((c) => l.parentId === c.parentId && !c.added) && Vt(l, i) && l.willItFit(t);
  }
  const s = e.some((l) => Vt(l, i) && l.willItFit(t) && l.l >= n || l.w >= n);
  return e.filter((l) => l.added ? !1 : (ue(l) && l.updateShapeSpacing(t), e.length === 1 || !s ? o(l) : l.l < n && l.w < n ? !1 : o(l)));
}
function as(e, t, i, n = null, o = !1) {
  if (!this.config.sample.enable && o === !1) return [];
  if (!e) throw new Error("getFirstShapeSample - type is required");
  v([
    () => $(e === "guillotine" || e === "efficiency", "type not correct").to.be.true,
    () => $(Ms(i), "should be a container").to.be.true
  ]);
  const s = ye(t, !1, !0);
  if (!s.length) return [];
  const r = t.filter((d) => D(d)), l = [], c = i.getStock;
  let a = Wr(s, i);
  if (!a.length) return [];
  if (e === "guillotine")
    a = Gr.call(
      this,
      t,
      a,
      i,
      c,
      n,
      r
    );
  else if (e === "efficiency") {
    a.push(...r);
    const d = a.filter((p) => p.getPriority(c) > 0);
    d.length && (a = d), a.sort(me.aspect);
  }
  const h = a.filter((d) => D(d)), f = a.filter((d) => !D(d)), u = [...h, ...f];
  for (const d of u)
    if (D(d)) {
      if (!d.willItFit(i)) {
        T("groups", `[getFirstShapeSample] Group ${d.id} does NOT fit container after calculateGroupDimensions - skipping (group: ${d.l}x${d.w}, container: ${i.l}x${i.w})`);
        continue;
      }
      d.firstShape.sampleRotations = [d.rot.valueOf()], l.push(d);
    } else {
      const p = t.find((m) => m.parentId === d.parentId && !m.added && m.constructor.name === d.constructor.name);
      if (p && (p.firstShape.sampleRotations = it(p, i), l.push(p)), l.length >= (e === "guillotine" ? this.config.sample.guillotine : this.config.sample.efficiency))
        break;
    }
  return T("firstShapes", `candidates for stock ${i.getStock?.id}, ${j(i) ? "segment " + i.id : ""}`, l.map((d) => ({ id: d.id, autoId: d.autoId, rotations: d.firstShape.sampleRotations }))), v([() => $(Z(l), "duplicate ids found in candidates with getFirstShapeSample").to.false]), l;
}
const ke = {
  async calculation(e, t, i) {
    if (e?.tidy && (this.resetShapes(re(i, t)), this.tidyStrategy = !0), await ke.tryFirstShapes.call(this, t, i), !!this.bestResult && (this.tidyStrategy = !1, !e?.tidy && Yr.call(this, this.bestResult, t))) {
      t.algoBenchmark = this.bestResult;
      try {
        const o = await new mn(this, t, i).run();
        if (!o) return;
        await ne.call(this, o.result), delete t.algoBenchmark;
      } catch (n) {
        console.error("error with evo", n);
      }
      qe({
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
    if (!le(t)) throw new Error("no rotation provided");
    if (!le(e))
      throw new Error("first shape not provided to defaultFirstShapePlacement");
    if (typeof e != "object")
      throw new Error("first shape is not an object");
    if (e.added)
      throw new Error(`first shape ${e.id} has been added previously`);
    if (!i)
      throw new Error("no stock provided to defaultFirstShapePlacement");
    if (e.rot !== t && !Ce(e, t, i))
      throw new Error(`first shape ${e.id} cannot rotate to: ${t}`);
    be(e, t, i), e.resetBothScores(), ss.call(
      this,
      e,
      i,
      Gt.call(this, i, i, e),
      []
    ), e.addToStock(i), e.firstShape.isFirstShape = !0, e.placementOrder = 0, D(e) ? (e.placeMyShapes(i), this.counters.placement = e.shapes.length) : this.counters.placement = 1;
  },
  /**
   * try all first shapes with both rotations if relevant
   */
  tryFirstShapes: async function(e, t) {
    const i = _(t, e);
    let n = as.call(
      this,
      "efficiency",
      i,
      e
    );
    const o = ye(i, !1, !0);
    let s = o.length > 1;
    s && i.reduce((c, a) => c + a.area, 0) < e.area * this.config.groups.shapeAreaCutOff && (s = !1);
    let r = [];
    s && !this.hasMinSpacing && this.config.groups.efficiency.firstShapes && o.length < this.config.groups.efficiency.limit && (r = ke.createFirstShapeGroups.call(
      this,
      i,
      e
    )), n.push(...r);
    let l = t;
    n = ye(n, !1, !0);
    for (const c of n)
      c.firstShape.isFirstShape = !0, D(c) && (l = gn(
        c.shapes,
        i
      ), l.unshift(c)), await ke.calculateFirstShapeRotations.call(
        this,
        l,
        e,
        c
      ), c.firstShape.isFirstShape = !1;
  },
  /**
   * run the calculations for both first shape rotations
   */
  calculateFirstShapeRotations: async function(e, t, i) {
    const n = it(i, t);
    for (const o of n) {
      this.resetShapes(e, !1, !1), i.added = !1, D(i) && (i.placeMyShapes(t), e.unshift(...i.shapes), e = e.filter((r) => r.id !== i.id));
      const s = await hr.call(
        this,
        e,
        t,
        i,
        o
      );
      le(s.score) && await ne.call(this, s);
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
    if (Y(t) && (t.used = !1), this.resetShapes(e, !0, !1), typeof i == "string")
      i = this.shapeList.find((a) => a.id === i);
    else if (gt(i) || Os(i)) {
      const a = i.autoId || i.id;
      i = this.shapeList.find((h) => h.autoId === a || h.id === a);
    }
    if (!i)
      throw new Error("firstShape not found in shapeList");
    if (i.reset(), e.length) {
      if (o) {
        this.weighting.custom = {};
        for (const h of Object.keys(this.weighting.efficiency.standard()))
          this.weighting.custom[h] = o[h] ? o[h] : 0;
      }
      if (ke.defaultFirstShapePlacement.call(
        this,
        i,
        n,
        t
      ), await qt.call(
        this,
        e,
        i,
        t
      ) === !1) return !1;
    }
    const r = Se.call(
      this,
      e,
      t,
      i
    );
    o && (this.weighting.custom = null);
    const l = performance.now(), c = Math.ceil(l - s);
    return r.time = c, r;
  },
  /**
   * create groups to be used as a first shape
   * CAUTION - can make very simple calculations less efficient
   */
  createFirstShapeGroups: function(e, t) {
    if (!this.config.groups.efficiency.firstShapes) return [];
    const i = _(e, t).filter((r) => M(r)), n = ["l", "w"], o = /* @__PURE__ */ new Map();
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
      }).forEach((c) => {
        const a = `${c.l}-${c.w}`;
        o.has(a) || o.set(a, c);
      }), this.resetShapes(i);
    let s = Array.from(o.values());
    return s.sort((r, l) => l.efficiency - r.efficiency), s = s.slice(0, this.config.sample.groupSize), v([
      () => $(s.every((r) => k.lessThanOrEqualTo(r.l, t.l) && k.lessThanOrEqualTo(r.w, t.w)), "groups larger than container").to.be.true
    ]), s.length ? s : [];
  },
  /**
   * should tidy run?
   */
  shouldUseTidy: function(e, t) {
    return !this.config.efficiency.tidy || t?.saw?.stockType === "roll" || !e ? !1 : e.score.efficiency < 0.9 && t.cutType === "efficiency";
  }
}, xe = {
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
    await ke.calculation.call(this, e, t, i);
  },
  guillotine: async function(e, t, i, n = []) {
    if (this.counters.placement = 0, e.secondRun && n.length) {
      for (const o of n) {
        const s = i.filter((r) => !r.added);
        o.shapes = s, await Be.call(
          this,
          e,
          t,
          s,
          o
        );
      }
      return;
    }
    await Be.call(
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
        o.shapes = s, await Be.call(
          this,
          e,
          t,
          s,
          o
        );
      }
      return;
    }
    await Be.call(
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
        t.saw.cutPreference = "w", n = await xe.guillotine.call(
          this,
          e,
          t,
          i
        );
        break;
      case "efficiency":
        t.saw.efficiencyOptions.primaryCompression = "l", n = await xe.efficiency.call(
          this,
          e,
          t,
          i
        );
        break;
    }
    await ne.call(this, n);
  },
  linear: async function(e, t, i) {
    const n = qs.call(this, t, i);
    n && t && (Fs(n, t, i), n.stock = t, await ne.call(this, n));
  }
};
async function Ur({
  shapeOrGroup: e,
  container: t,
  weighting: i,
  containerPlacedShapes: n = null,
  unplacedShapes: o = null,
  placementPositions: s = null,
  rayCastCoords: r = null,
  placedCoords: l = null
}) {
  if (!n)
    throw new Error("findBestShapePosition was not passed any placedShapes");
  if (!o)
    throw new Error("findBestShapePosition was not passed any unplacedShapes");
  if (!e)
    throw new Error("findBestShapePosition was not passed a shape");
  if (ue(e))
    try {
      e.updateShapeSpacing(t);
    } catch {
      return !1;
    }
  const c = t.l + t.x - e.l, a = t.w + t.y - e.w;
  if (c < 0 || a < 0) return !1;
  const h = new yt(), f = t.getStock;
  if (r)
    for (const u of r.points.values()) {
      const d = Bs(
        e,
        u,
        t
      );
      d && h.addPoints(d.toArray());
    }
  for (const u of s.points.values()) {
    const d = Hs(
      e,
      u,
      t
    );
    h.addPoints(d.toArray());
  }
  if (t.cutType === "efficiency") {
    const u = e.getMinSpacing(t.saw);
    if (u > 0)
      for (const d of h.points.values()) {
        if (e.x = d.x, e.y = d.y, e.isTooCloseToEdges(t)) {
          d.tooClose = !0;
          continue;
        }
        if (!Y(t) && e.isTooCloseToEdges(f)) {
          d.tooClose = !0;
          continue;
        }
        if (!d.tooClose) {
          const p = e.createProximityRectangle(u);
          if (!p)
            throw new Error("unable to create proximity rectangle");
          for (const m of n)
            if (d.tooClose = Fi(
              p,
              m,
              t,
              !1
            ), d.tooClose) break;
        }
      }
  }
  for (const u of h.points.values()) {
    if (u.tooClose || k.greaterThan(u.x, c) || k.greaterThan(u.y, a) || (e.x = u.x, e.y = u.y, qi(e, n, t))) continue;
    xi(
      e,
      t,
      i,
      n,
      o,
      u,
      l
    );
    let p = o.length > 1;
    (t.cutType === "efficiency" && this.config.groups.efficiency.position || ["guillotine", "beam"].includes(t.cutType) && this.config.groups.guillotine.position) && (jr.call(this, o, t) || (p = !1)), p && (t.cutType === "efficiency" && this.config.groups.efficiency.position || ["guillotine", "beam"].includes(t.cutType) && this.config.groups.guillotine.position) && u.type !== "group" && M(e) && zs({
      container: t,
      containerPlacedShapes: n,
      unplacedShapes: o,
      shape: e,
      point: u,
      config: this.config,
      scoreFunction: (m, g, y, S, w) => {
        xi(
          m,
          g,
          i,
          y,
          S,
          w,
          l
        );
      }
    });
  }
  return !0;
}
function jr(e, t) {
  return !0;
}
async function ls(e, t, i = null, n = null, o = {}, s = null) {
  if (!n)
    throw new Error("no testFunction provided to testShapeRotations");
  if (typeof n != "function")
    throw new Error("testFunction provided to testShapeRotations is not a function");
  if (n.constructor.name !== "AsyncFunction")
    throw new Error("testFunction provided to testShapeRotations must be async");
  if (D(e)) {
    s && (o[s] = e.rot), await n.call(this, o);
    return;
  }
  le(e.orientationLock) && (i = Gs(e, t));
  const r = le(i) ? i : 0;
  Ce(e, r, t) && $e(e, t, r) && (be(e, r, t), s && (o[s] = r), await n.call(this, o));
  const l = 1;
  i === null && !e.isSquare && Ce(e, l, t) && $e(e, t, l) && (be(e, l, t), s && (o[s] = l), await n.call(this, o));
}
async function qt(e, t, i) {
  if (!e.length) return !1;
  if (Z(e)) {
    const h = /* @__PURE__ */ new Set();
    e = e.filter((f) => h.has(f.autoId) ? !1 : (h.add(f.autoId), !0));
  }
  const o = i.getStock;
  if (o.saw && !Le(o.saw)) throw new Error("not real saw");
  const s = e?.filter((h) => h.added);
  if (!s.length) return;
  const r = new Set(s.map((h) => h.autoId)), l = Kt.call(
    this,
    null,
    s,
    i
  );
  if (l.points.size === 0) return !1;
  const c = t ? {
    x: /* @__PURE__ */ new Map([[t.x, [t]]]),
    y: /* @__PURE__ */ new Map([[t.y, [t]]])
  } : {
    x: /* @__PURE__ */ new Map(),
    y: /* @__PURE__ */ new Map()
  };
  function a() {
    const h = _(
      e,
      o,
      "filter"
    ), f = /* @__PURE__ */ new Set();
    for (const g of h)
      if (D(g) && !J(g)) {
        const y = g;
        if (y.shapes?.length)
          for (const S of y.shapes)
            f.add(S.autoId);
      }
    const u = h.filter((g) => {
      if (J(g)) return !1;
      if (We(g) || ue(g)) {
        const y = g;
        return !(!y.shapes || y.shapes.length === 0);
      }
      if (M(g))
        return !(f.has(g.autoId) || g?.group?.inGroup);
    }), d = u.filter((g) => D(g) && !J(g)), p = u.filter((g) => M(g)), m = [...d, ...p];
    return T("groups", `[getRelevantUnplacedShapes] ${m.length} unplaced (${d.length} groups, ${p.length} shapes)`), d.length > 0 && d.forEach((g) => {
      T("groups", `Group ${g.id}: ${g.shapes?.length || 0} child shapes, ${g.shapes.map((y) => y.id).join()}, added=${g.added}`);
    }), m;
  }
  for (let h = a(); h.length; ) {
    let f = function() {
      const S = h.filter((I) => typeof I?.bestScore?.total == "number");
      if (!S?.length) return !1;
      const w = _r(S);
      if (!w) return null;
      const x = Xr.call(this, i, o, c, w, s, r);
      return x.added && !r.has(x.autoId) && (D(x) && x.type !== "position" || s.push(x), r.add(x.autoId), j(i) && (i.shapes = i.shapes.filter((b) => b.autoId !== x.autoId))), v([
        () => $(x.added).to.be.true,
        () => $(Z(s), "duplicates found in containerPlacedShapes").to.be.false,
        () => $(s.every((I) => I.added), "containerPlacedShapes contains unplaced shapes").to.be.true
      ]), { bestShapeOrGroup: w, winningShapeOrGroup: x };
    }, u = null;
    this.uniqueShapes.length > 1 && i.cutType === "efficiency" && this.config.efficiency.rayCasting && !this.hasMinSpacing && (u = Ns(
      i,
      s
    ));
    const d = h.length;
    let p = !1;
    for (let S = 0; S < d; S++) {
      let w = !1;
      if (p && h[S].isSameSize(h[S - 1]))
        continue;
      for (let b = 0; b < S; b++)
        if (h[b].isSameSize(h[S])) {
          w = !0;
          break;
        }
      if (w) {
        p = !0;
        continue;
      } else
        p = !1;
      const x = h[S];
      x.resetBestScore();
      const I = Gt.call(this, i, o, x);
      if (await ls.call(
        this,
        x,
        i,
        null,
        Ur,
        {
          shapeOrGroup: x,
          container: i,
          weighting: I,
          containerPlacedShapes: s,
          unplacedShapes: h,
          placementPositions: l,
          rayCastCoords: u,
          placedCoords: c
        }
      ), D(x) && !J(x)) {
        const b = x;
        if (!b.bestScore || typeof b.bestScore.total != "number") {
          T("groups", `[placeShapes] Group ${b.id} has no valid placement. Releasing it and all clones.`);
          const E = b.autoId.replace(/\.\d+$/, ""), A = [];
          for (const O of e)
            if (D(O) && !J(O)) {
              const G = O;
              G.autoId.replace(/\.\d+$/, "") === E && !G.added && A.push(G);
            }
          if (A.length > 0) {
            T("groups", `  Releasing ${A.length} groups (including clones)`);
            const O = [], G = /* @__PURE__ */ new Set();
            for (const C of A)
              if (C.shapes && C.shapes.length > 0)
                for (const q of C.shapes)
                  G.has(q.autoId) || (O.push(q), G.add(q.autoId));
            for (const C of A)
              T("groups", `    Destroying group ${C.id}`), C.destroy();
            O.length > 0 && (T("groups", `  Adding ${O.length} released shapes back to containerShapes`), e.push(...O));
          }
        }
      }
    }
    const m = f.call(this, e);
    if (m === !1 || m === null) return;
    const { bestShapeOrGroup: g, winningShapeOrGroup: y } = m;
    if (h = a(), h.length > 0) {
      const S = Kt(
        y ? [y] : [],
        s,
        i
      );
      l.addPoints(S.toArray()), l.deletePoint(new St(g.x, g.y));
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
function Yr(e, t) {
  if (this.config.evo.disable || e.stockID !== t.id) return !1;
  const i = _(this.shapeList, t, "filter", null), n = ye(i, null, !0);
  return n.length <= 1 || t?.saw?.stockType === "roll" || n.length > 100 || e?.algoTime > 2e3 || !this.enableEvo || e.cutType === "efficiency" && e?.score[this.successMetric] < 0.65 || e?.score?.totalShapesPlaced <= 2 ? !1 : i.length <= this.config.evo.stockLimit;
}
function Xr(e, t, i, n, o, s) {
  const r = D(n) ? n : n.bestScore?.group ?? null;
  if (r) {
    const c = r.shapes.filter((a) => a.added || a.group?.inGroup);
    if (c.length > 0)
      T("groups", `[placeBestShapeOrGroup] Group ${r.id} is invalid - ${c.length}/${r.shapes.length} shapes already placed. Placing individual shape instead.`), D(n) || (n.bestScore.group = null);
    else {
      if (T("groups", `[placeBestShapeOrGroup] Placing group ${r.id} with ${r.shapes.length} shapes (type=${r.type})`), r.placementOrder = this.counters.placement, this.counters.placement += r.shapes.length, r.setPositionToBestScore(), bi(e, r), r.addToStock(t), Mt(i, r), r.placeMyShapes(t), r.type === "position")
        for (const a of r.shapes)
          this.shapeList.some((h) => h.autoId === a.autoId) || this.shapeList.push(a);
      if (r.type !== "position" && r.type !== "firstShape")
        for (const a of r.shapes)
          a.added && !a.group?.inGroup && !s.has(a.autoId) && (o.push(a), s.add(a.autoId));
      return r;
    }
  } else n && (n.placementOrder = this.counters.placement++, n.setPositionToBestScore(), bi(e, n), n.addToStock(t), Mt(i, n));
  return r || n;
}
function _r(e) {
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
let Vr = class {
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
function Kr(...e) {
  return class {
  };
}
const nt = {
  Schema: Vr,
  model: Kr,
  connect: () => Promise.resolve(),
  connection: {}
}, Jr = nt.Schema, cs = new Jr({
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
cs.plugin(Bi);
const Qr = nt.model(
  "material",
  cs,
  "materials"
), Zr = nt.Schema, Xt = new Zr({
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
function eo(e) {
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
Xt.pre("save", function(e) {
  this.material = this.material?.toLowerCase(), this.area = (this.l - parseFloat(this?.trim?.[2]) - parseFloat(this?.trim?.[3])) * (this.w - parseFloat(this?.trim?.[0]) - parseFloat(this?.trim?.[1])), e();
});
Xt.plugin(Bi);
const to = nt.model(
  "stock",
  Xt,
  "stock"
);
async function io(e = [], t, i = []) {
  t instanceof Ue || (t = new Ue(t));
  let n = [];
  const o = [];
  for (const s of e) {
    if (!le(s.material)) continue;
    const r = n.filter((l) => {
      if ($e(s, l)) {
        let c = !1, a = !1, h = !0;
        if (l?.saw?.stockType === "linear" && (k.equalTo(s.w, l.w) || (h = !1)), (s.t === l.t || !le(l.t)) && (a = !0), s.material === l.material && (c = !0), l?.saw?.stockType === "linear") {
          if (c && a && h)
            return !0;
        } else if (c && a) return !0;
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
      }, [c, a] = await Promise.all([
        Qr.findById(s?.material?.toLowerCase())?.lean(),
        //TODO make sorting order and limit configurable based on org
        to.find(l).sort({ area: 1 }).limit(3).lean()
      ]);
      c && a.length ? a.forEach((h) => {
        const f = eo(h.trim), u = {
          l: h.l - (f.l1 ?? 0) - (f.l2 ?? 0),
          w: h.w - (f.w1 ?? 0) - (f.w1 ?? 0)
        };
        if (!(k.lessThanOrEqualTo(
          s.l,
          u.l
        ) && k.lessThanOrEqualTo(
          s.w,
          u.w
        ) || k.lessThanOrEqualTo(
          s.w,
          u.l
        ) && k.lessThanOrEqualTo(
          s.l,
          u.w
        )))
          return;
        const d = Ws.parse({
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
          name: c.name,
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
        n.push(new wt(d)), Array.isArray(s.stockLock) ? s.stockLock.push(d.parentId) : s.stockLock = [d.parentId];
      }) : o.push({
        material: c.name,
        t: s.t,
        shape: s.parentId
      });
    } catch (l) {
      throw console.error("error finding stock", l.message), new Error(l);
    }
  }
  if (n.length)
    n = bt(n);
  else if (!i?.length)
    throw new Error("No relevant stock found - check material, thickness, dimensions & stock quantity");
  return {
    stockList: n,
    unavailableStock: o
  };
}
function so(e, t, i = !1) {
  t.forEach((s) => {
    s.identicalTo = [];
  });
  const n = [];
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    if (n.some((a) => a.some((h) => h.id === r.id))) continue;
    const c = [r];
    for (let a = s + 1; a < e.length; a++) {
      const h = e[a];
      r.isIdentical(h, i) && c.push(h);
    }
    c.length > 1 && n.push(c);
  }
  const o = /* @__PURE__ */ new Map();
  t.forEach((s) => {
    o.has(s.parentId) || o.set(s.parentId, []), o.get(s.parentId).push(s);
  }), n.forEach((s) => {
    const r = s.map((l) => l.parentId);
    r.forEach((l) => {
      (o.get(l) || []).forEach((a) => {
        r.forEach((h) => {
          h !== a.parentId && !a.identicalTo.includes(h) && a.identicalTo.push(h);
        });
      });
    });
  }), t.forEach((s) => {
    (o.get(s.parentId) || []).length > 1 && !s.identicalTo.includes(s.parentId) && s.identicalTo.push(s.parentId);
  });
}
function no(e, t) {
  for (const i of e) {
    i.fitsStock = {};
    for (const n of t) {
      const o = it(i, n);
      i.fitsStock[n.parentId] = {
        any: $e(i, n, null),
        0: o.includes(0),
        1: o.includes(1)
      };
    }
  }
}
function ro(e, t, i, n) {
  const o = n?.similarityThreshold ?? 0.1, s = n?.selectionStrategy, r = n?.minPerShape ?? 0, l = n?.minTotal ?? 0;
  if (e.length <= 1)
    return t;
  const { filtered: c, excludedGroups: a } = ao(
    e,
    i,
    { similarityThreshold: o, selectionStrategy: s }
  );
  let h = [...c], f = [...a];
  if (r > 0) {
    const p = /* @__PURE__ */ new Map();
    for (const g of t) {
      const y = p.get(g.parentId) || 0;
      p.set(g.parentId, y + 1);
    }
    const m = h.filter((g) => (p.get(g.parentId) || 0) < r);
    if (m.length > 0) {
      for (const g of m) {
        const y = g.parentId;
        for (const S of f) {
          const w = S.filter((x) => (p.get(x.original.parentId) || 0) >= r);
          if (w.length > 0) {
            const x = w.sort((b, E) => (p.get(E.original.parentId) || 0) - (p.get(b.original.parentId) || 0))[0], I = h.findIndex((b) => b.parentId === y);
            if (I !== -1) {
              h[I] = x.original;
              const b = S.findIndex((E) => E === x);
              b !== -1 && S.splice(b, 1);
              break;
            }
          }
        }
      }
      f = f.filter((g) => g.length > 0);
    }
  }
  if (l > 0) {
    const p = new Set(h.map((g) => g.parentId)), m = t.filter((g) => p.has(g.parentId)).length;
    if (m < l && f.length > 0) {
      const g = [];
      let y = m;
      for (; y < l && f.some((S) => S.length > 0); ) {
        for (let S = 0; S < f.length && y < l; S++) {
          const w = f[S];
          if (w.length > 0) {
            const I = oo([...w], s)[0], b = I.original.parentId, E = t.filter((O) => O.parentId === b).length;
            g.push(I.original), y += E;
            const A = w.findIndex((O) => O === I);
            A !== -1 && w.splice(A, 1);
          }
        }
        if (f = f.filter((S) => S.length > 0), f.length === 0 || f.every((S) => S.length === 0))
          break;
      }
      h = [...h, ...g];
    }
  }
  const u = new Set(h.map((p) => p.parentId));
  return t.filter((p) => u.has(p.parentId));
}
function oo(e, t) {
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
function ao(e, t, i) {
  const n = i.similarityThreshold, o = i.selectionStrategy;
  if (e.length <= 1) return { filtered: e, excludedGroups: [] };
  const s = e.map((a) => {
    const h = {
      l: a.longSide,
      w: a.shortSide
    };
    return {
      original: a,
      // Keep reference to the original shape object
      rotated: h,
      // Normalized dimensions for comparison (keeping 'rotated' name for compatibility)
      area: a.area
      // Area for 'largest'/'smallest' selection
    };
  }), r = [];
  for (const a of s) {
    let h = !1;
    for (const f of r)
      if (f.some((u) => lo(a.rotated, u.rotated, n))) {
        f.push(a), h = !0;
        break;
      }
    h || r.push([a]);
  }
  const l = [], c = [];
  return r.forEach((a) => {
    if (a.length === 1) {
      l.push(a[0]);
      return;
    }
    let h;
    switch (o) {
      case "largest":
        h = a.reduce((u, d) => d.area > u.area ? d : u, a[0]);
        break;
      case "smallest":
        h = a.reduce((u, d) => d.area < u.area ? d : u, a[0]);
        break;
      case "first":
      default:
        h = a[0];
    }
    l.push(h);
    const f = a.filter((u) => u !== h);
    f.length > 0 && c.push(f);
  }), {
    filtered: l.map((a) => a.original),
    excludedGroups: c
  };
}
function lo(e, t, i) {
  const n = Math.abs(e.l - t.l) / Math.max(e.l, t.l, 1), o = Math.abs(e.w - t.w) / Math.max(e.w, t.w, 1);
  return n <= i && o <= i;
}
function co(e, t, i) {
  if (T("stack", `previous stock ${t.id}`), ["l", "w", "material", "t"].some((s) => e[s] !== t[s])) return !1;
  const n = e.cutType === "guillotine" || e.cutType === "beam", o = e.saw.guillotineOptions?.strategy !== "time";
  if (!n || n && o) {
    const s = us.call(
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
function us(e, t, i, n) {
  if (!this.config.stack || !i.length) return !1;
  const o = e.saw;
  if (!o?.options?.stackingMode || o.options.stackingMode === "none") return !1;
  if (T("stack", `looking for stack for ${e.id}, comparing to ${t.id}`), o.cutType === "beam" && t.stack) {
    let s = t, r = 1;
    if (t.stack.stock ? (s = t.stack.stock, r = s.stack?.number || 1) : t.stack.number && (r = t.stack.number), s.t * r + e.t > o.stackHeight)
      return !1;
  }
  if (e.parentId === t.parentId) {
    if (o.cutType === "beam" && o.stackHeight > 0 && e.t * 2 > o.stackHeight)
      return !1;
    const s = re(n, t);
    if (!s.length) return !1;
    const r = fs.call(this, [t], s, e, i, !0, !0, o.options.stackingMode === "identical");
    if (r)
      return e.stack = { stock: r }, r.stack.number === 1 ? r.stack.number = 2 : r.incrementStack(), r;
  }
  return !1;
}
function uo(e, t) {
  if (!this.config.findDuplicatePatterns) return !1;
  T("stack", `🔎 checkForDuplicates called for ${e.id}`);
  const i = this.shapeList.filter((s) => s.added);
  T("stack", `   Total shapes added across all stock: ${i.length}`);
  const n = this.stockList.filter((s) => s.used && s.id !== e.id && s.l === e.l && s.w === e.w);
  if (T("stack", `   Relevant used stock with matching dimensions: ${n.map((s) => s.id).join(", ")}`), !n.length)
    return T("stack", `   No relevant stock found for ${e.id}`), !1;
  const o = fs.call(this, n, i, e, t, !0, !1);
  return o ? (T("stack", `   ✅ Duplicate found: ${e.id} matches ${o.id}`), Us(o, e), e.used = !0, o) : (T("stack", `   No duplicate pattern found for ${e.id}`), !1);
}
function fs(e, t, i, n, o = !0, s = !0) {
  if (!e.length || !n.length) return null;
  T("stack", `🔍 Checking for duplicate patterns for ${i.id}`), T("stack", `   Current shapes count: ${n.length}`), T("stack", `   Used stock to check: ${e.map((l) => l.id).join(", ")}`);
  const r = /* @__PURE__ */ new Map();
  for (const l of e) {
    T("stack", `   📋 Checking against stock ${l.id}`);
    const c = re(t, l);
    if (!c.length) {
      T("stack", `      ❌ No shapes on ${l.id}, skipping`);
      continue;
    }
    T("stack", `      Stock ${l.id} has ${c.length} shapes`);
    const a = c.length, h = [];
    r.clear();
    let f = !0;
    for (const u of c) {
      let d = null;
      if (s) {
        const p = n.filter((g) => !r.has(g)), m = p.filter((g) => g.isIdentical(u, !1));
        m.length === 1 ? (d = m[0], T("stack", `      ✓ Shape ${u.id} matched to ${d.id}`)) : m.length > 1 ? (d = m.find((g) => g.parentId === u.parentId) || m[0], T("stack", `      ✓ Shape ${u.id} matched to ${d.id} (${m.length} candidates, preferred by parentId: ${d.parentId === u.parentId})`)) : (T("stack", `      ✗ Shape ${u.id} has no identical match`), T("stack", `         Available shapes: ${p.map((g) => g.id).join(", ")}`));
      } else {
        const m = n.filter((g) => !r.has(g)).filter((g) => g.longSide === u.longSide && g.shortSide === u.shortSide && Ce(g, u.rot, l));
        m.length === 1 ? d = m[0] : m.length > 1 && (d = m.find((g) => g.parentId === u.parentId) || m[0]);
      }
      if (d)
        r.set(d, !0), h.push({
          current: d,
          match: u
        });
      else {
        T("stack", `      ❌ Failed to match all shapes for ${l.id}`), f = !1;
        break;
      }
    }
    if (f && h.length === a) {
      if (T("stack", `      ✅ Perfect match found: ${i.id} matches ${l.id}`), o) {
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
      T("stack", `      ⚠️ Stock ${l.id}: allMatched=${f}, matches=${h.length}, target=${a}`);
  }
  return T("stack", `   ❌ No duplicate pattern found for ${i.id}`), null;
}
class Pi extends js {
  // Zod schema for validation and serialization
  static schema = cn;
  static computedProperties = un;
  /**
   * Get entity type
   */
  getType() {
    return H.Optimiser;
  }
  constructor(t) {
    const i = an(t.user, t), n = {
      // Pass through most properties directly
      ...t,
      // Apply defaults for arrays
      stockList: t.stockList || [],
      shapeList: t.shapeList || [],
      userGroups: t.userGroups || [],
      // Config overrides
      config: i,
      successMetric: hi(i, "successMetric", t.successMetric || Q.successMetric),
      enableEvo: hi(i, "evo.disable", !1) ? !1 : t.enableEvo ?? !0,
      weighting: t.weighting || {
        efficiency: ie.efficiency,
        guillotine: ie.guillotine,
        roll: ie.roll
      },
      stockType: t.saw?.stockType || null,
      // Don't skip validation so defaults are applied
      skipSchemaValidation: !1
    };
    super(n), !this.useInventory && this.stockList?.length && this.stockList.forEach((o) => {
      o?.saw?.stockType || (o.saw.stockType = this.saw.stockType);
    }), Ri({
      stocks: this.stockList,
      shapes: this.shapeList
    }, "Optimiser constructor"), this.uniqueStock = Re(this.stockList), this.groupList = [], this.init();
  }
  init() {
    const t = [];
    if (!this.shapeList.length) throw new Error("No parts to process");
    this.shapeList.some((o) => o.duplicate) || ([...this.shapeList].forEach((s) => {
      s.applyTrim();
      for (let r = s.q; r--; )
        r != 0 && this.shapeList.push(s.clone(r.toString()));
    }), this.shapeList.push(...t), this.shapeList.sort(me.ID));
    const i = this.shapeList.filter((o) => !D(o));
    this.shapeAnalysis(i, this.stockList);
    const n = [];
    this.userGroups.forEach((o, s) => {
      for (let r = 0; r < o.q; r++) {
        const l = o.toGroup(s, r, this.shapeList);
        l && n.push(l);
      }
    }), Ys(n, this.stockList, this.saw), this.shapeList.push(...n), this.uniqueShapes = this.shapeList.filter((o) => !o?.duplicate), this.hasMinSpacing = typeof this?.saw?.options?.minSpacing == "number";
  }
  shapeAnalysis(t, i) {
    so.call(this, t, this.shapeList), Zn.call(this, t, i), no.call(this, t, i);
  }
  recordStackToBestResult(t, i = []) {
    if (this.bestResult) {
      const n = {
        ...this.bestResult,
        stock: t,
        shapes: i.filter((o) => o.added && o.stock.id === t.id).map((o) => o.compress())
      };
      this.bestResult = rs(n);
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
    i.forEach((l) => l.stockLock.forEach((c) => o.add(c)));
    const s = t.filter((l) => o.has(l.parentId));
    let r = Xs(s);
    if (n && n?.options?.stockSelection === "smallest")
      return r.sort(me.AA), [r[0]];
    if (r.some((l) => l.material)) {
      const l = r[0].material;
      r = r.filter((c) => c.material === l);
    }
    if (r.some((l) => l.t)) {
      const l = Math.min(...r.map((c) => c.t));
      r = r.filter((c) => c.t === l);
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
      const l = xe.getCalculationType(s);
      if (!l) throw new Error(`calculation type not found for stock ${s.id}`);
      if (T("allStock", `calculating stock ${s.id} with ${l} calculation`), !xe.types.includes(l))
        throw new Error(`invalid calculation type: ${l} for stock ${s.id}`);
      return r = r.filter((c) => !c.added && c.stockLock.includes(s.parentId)), await xe[l].call(
        this,
        {},
        s,
        r
      );
    }
    function n(s, r) {
      const l = s.filter((a) => !a.unusable), c = this.stockRefinement(
        l,
        r,
        this.saw
      );
      return c.sort(me.ID), T("allStock", `refined stock ${c.map((a) => a.id).join()}`), c;
    }
    await this.allStock(i, n), this.config.secondRun.enabled && await this.secondRun(), this.config.captureProfile && "profileEnd" in console && typeof console.profileEnd == "function" && console.profileEnd(t);
    const o = [];
    for (const s of this.stockList)
      if (s.segments)
        for (const r of s.segments) {
          const l = r.shapes?.filter((c) => J(c) && c.added) || [];
          o.push(...l);
        }
    for (const s of this.shapeList)
      if (!(!M(s) || !s.added)) {
        for (const r of o)
          if (r.shapes.some((l) => l.autoId === s.autoId)) {
            s.group.addedAsGroup = r.autoId;
            break;
          }
      }
    for (let s = this.shapeList.length; s--; ) {
      const r = this.shapeList[s];
      ue(r) && (r.added && r.stock && r.placeMyShapes(r.stock), this.shapeList.splice(s, 1), this.shapeList.push(...r.shapes));
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
    let n, o = null, s = null, r, l, c, a;
    for (let h = Re(this.stockList, !1); h.length > 0; h = Re(this.stockList, !1)) {
      let f = _(this.shapeList);
      if (!f?.length) break;
      for (const g of h)
        if (!_(f, g, "some")) {
          T("allStock", `stock ${g.id} is unusable`), g.unusable = !0;
          break;
        }
      const u = i.call(
        this,
        h,
        f
      );
      if (v([() => $(u.every((g) => Le(g.saw))).to.be.true]), !u.length) break;
      if (a) {
        const g = u.findIndex((y) => y?.parentId === a);
        g > -1 && u.unshift(u.splice(g, 1)[0]);
      }
      if (o = null, s = null, this.stockList.some((g) => g.used)) {
        T("stack", `🔄 Checking refined stock for stacks/duplicates: ${u.map((g) => g.id).join(", ")}`);
        for (const g of u) {
          T("stack", `current stock: ${g.id}`);
          const y = _(
            f,
            g
          );
          if (y?.length) {
            if (n && (o = co.call(this, g, n, y), o)) {
              n = o, r = g;
              break;
            }
            if (this.config.findDuplicatePatterns && (s = uo.call(this, g, y), s)) {
              n = g;
              break;
            }
          }
        }
      }
      if (!o && !s) {
        for (const S of u) {
          l = null;
          try {
            S.applyTrim();
          } catch (x) {
            T("info", `stock.applyTrim error ${x.message}`);
            continue;
          }
          const w = _(this.shapeList);
          if (!w?.length) return;
          if (l = _(w, S), !l?.length)
            if (S.allowExactFitShapes && (l = w.filter((x) => k.equalTo(
              x.l,
              S.l + S.trim.l1 + S.trim.l2
            ) && k.equalTo(
              x.w,
              S.w + S.trim.l1 + S.trim.l2
            ) || k.equalTo(
              x.w,
              S.w + S.trim.w1 + S.trim.w2
            ) && k.equalTo(
              x.l,
              S.l + S.trim.w1 + S.trim.w2
            ))), l?.length) S.removeTrim();
            else continue;
          if (!l?.length) {
            S.used = !1;
            continue;
          }
          if (this.config.filtering.enable && l.length > this.config.filtering.minTotal) {
            const x = l.length;
            l = ro(this.uniqueShapes, w, S, {
              similarityThreshold: this.config.filtering.similarityThreshold,
              selectionStrategy: "smallest",
              minTotal: this.config.filtering.minTotal
            });
            const I = l.length;
            T("allStock", `filtering reduced shapes by ${x - I}, orginal: ${x}, filtered: ${I}`);
          }
          await t.call(this, S, l), this.resetShapes(l, {
            keepScores: !1,
            removeGroups: !1,
            keepGuillotineData: !1
          }), h.length > 1 && l.filter((I) => D(I)).forEach((I) => I.destroy());
        }
        if (u.forEach((S) => S.used = !1), !this.bestResult || !this.bestResult?.stock)
          break;
        c = jt(this.bestResult, this.stockList), c.score = this.bestResult.score, c.used = !0, n = c;
        const { updatedShapes: g, groups: y } = qe({
          bestResult: this.bestResult,
          shapeList: this.shapeList,
          relevantStock: u,
          stockList: this.stockList,
          resetShapes: this.resetShapes.bind(this)
        });
        if (y.length > 0 && this.groupList && y.forEach((S) => {
          this.groupList.find((x) => x.autoId === S.autoId) || this.groupList.push(S);
        }), lt(g), this.bestResult?.offcut) {
          const S = {
            x: this.bestResult.totalLength + this.saw.bladeWidth,
            l: this.bestResult.offcut,
            w: this.bestResult.stock.w,
            stock: c
          };
          this.offcuts.push(S);
        }
        c?.saw?.stockType !== "roll" && this.summariseResults([this.bestResult], c);
      }
      f = _(this.shapeList);
      let d = [], p = [], m = 0;
      if (this.bestResult = null, this.bestPartialResult = null, o && (r?.autoAdd || ct(this.stockList, r)))
        d.push(r);
      else {
        p = ye(f, !1);
        const g = p.filter((w) => le(w.stockLock)), y = new Set(g.flatMap((w) => Array.isArray(w.stockLock) ? w.stockLock : [w.stockLock]));
        y.size || T("allStock", "no new stock requirements found");
        for (const w of y) {
          const x = this.stockList.filter((I) => {
            if (w === I.parentId) {
              if (I.autoAdd)
                return !0;
              if (ct(this.stockList, I))
                return !0;
            }
            return !1;
          });
          if (x.length && !x.find((I) => !I.used)) {
            const I = x[0].clone(x.length.toString());
            this.stockList.push(I), m++;
          }
        }
        p.filter((w) => !le(w.stockLock) || !w.stockLock.length).length && !d.length && (d = Re(this.stockList).filter((w) => w.autoAdd || ct(this.stockList, w)));
      }
      if (d.length && d.forEach((g) => {
        const y = g.clone(_s(this.stockList, g));
        this.stockList.push(y), o ? a = y.parentId : a = !1, m++;
      }), m ? (this.stockList.sort(me.AA), this?.job && this.job.updateProgress({
        socketId: this.socketId,
        type: "addStock",
        message: `added ${m} additional stock`,
        stockCount: this.stockList.reduce(
          (g, y) => y.used ? ++g : g,
          0
        ),
        shapeCount: this.shapeList.reduce(
          (g, y) => y.added ? ++g : g,
          0
        )
      })) : this?.job && this.job.updateProgress({
        socketId: this.socketId,
        type: "stockComplete",
        message: `completed stock ${c.parentId}`,
        stockCount: this.stockList.reduce((g, y) => y.used ? ++g : g, 0),
        shapeCount: this.shapeList.reduce((g, y) => y.added ? ++g : g, 0)
      }), this.useInventory && p.length && Re(this.stockList, !1).length === 0) {
        const g = await io(
          p,
          this.saw,
          this.stockList
        );
        if (g.stockList.length) {
          const y = bt(g.stockList);
          y.length && this.stockList.push(...y);
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
    T("secondRun", "starting second run...");
    const t = this.stockList.filter((s) => s.used);
    if (t.filter((s) => s.stack?.number && !s.stack?.stock).forEach((s) => {
      t.filter((r) => r.stack?.stock && Y(r.stack.stock) && r.stack.stock.id === s.id).forEach((r) => {
        r.stack = null, r.rootSegment = s.rootSegment;
      }), s.stack = null;
    }), t[0].cutType !== "guillotine") return;
    v([
      () => $(t.length).equal(this.stockList.length),
      () => $(t.every((s) => s.score)).to.be.true,
      () => $(t.every((s) => s.shapes?.length)).to.be.true
    ]), t.sort((s, r) => s.score.efficiency - r.score.efficiency), T("secondRun", `sorted stock, ${t.map((s) => s.id)}`);
    const n = [], o = [];
    for (const s of t)
      s.score.efficiency >= this.config.secondRun.efficiencyCutoff && s.score.totalShapesPlaced > 1 ? n.push(s) : o.push(s);
    if (!(!n.length || !o.length)) {
      n.sort((s, r) => r.score.efficiency - s.score.efficiency), o.sort((s, r) => r.score.efficiency - s.score.efficiency), T("secondRun", `sorted efficient stock, ${n.map((s) => s.id)}`), T("secondRun", `sorted inefficient stock, ${o.map((s) => s.id)}`);
      for (const s of n) {
        if (!o.length) break;
        const r = [];
        for (let f = 0; f < s.shapes.length; f++) {
          const u = s.shapes[f];
          if (!u) throw new Error("shape not found in donorStock.shapes");
          if (D(u)) {
            u.placeMyShapes(s), u.shapes = u.shapes.map((d) => Object.assign({}, d)), s.shapes.splice(f, 1, ...u.shapes), f--;
            continue;
          }
          if (M(u))
            u.reset(), r.push(u);
          else {
            const d = this.shapeList.find((p) => p.id === u.id);
            if (!d) throw new Error(`shape ${u.id} not found in shapeList`);
            d.reset(), r.push(d), s.shapes[f] = d;
          }
        }
        const l = /* @__PURE__ */ new Set();
        let c, a, h = null;
        for (; r.length > 0 && (c = o.find((S) => S ? !l.has(S?.id) && s.shapes[0].stockLock.includes(S.parentId) : !1), !!c); ) {
          T("secondRun", `recipientStock - ${c.id}`), l.add(c.id);
          const f = xe.getCalculationType(s);
          if (!f) throw new Error(`calculation type not found for stock ${s.id}`);
          const u = c.cutPreference === "l" ? "x" : "y";
          let d = [];
          if (a = c.rootSegment, T("secondRun", `second run, donor stock ${s.id}, recipient stock ${c.id}`), h) {
            h.shapes.forEach((w, x) => {
              if (!M(w)) {
                const I = this.shapeList.find((b) => b.id === w.id);
                h.shapes[x] = I;
              }
            }), c.shapes.forEach((w, x) => {
              if (!M(w)) {
                const I = this.shapeList.find((b) => b.id === w.id);
                c.shapes[x] = I;
              }
            });
            let S = !1;
            if (this.config.secondRun.stack && (S = us(c, h, [...r, ...c.shapes], this.shapeList)), S) {
              c.stack = { stock: h }, h.stack ? h.stack?.number && h.incrementStack() : h.stack = { number: 2 }, c.shapes.forEach((x) => {
                const I = r.findIndex((b) => b.id === x.id);
                I > -1 && (r.splice(I, 1), s.shapes.splice(s.shapes.findIndex((b) => b.id === x.id), 1));
              });
              const w = o.findIndex((x) => x.id === c.id);
              w > -1 && o.splice(w, 1), T("secondRun", `stack found for ${c.id} in second run`), lt(c.shapes);
              continue;
            }
          }
          if (!a) throw new Error("no root segment found in second run");
          if (Zi(a, (S) => {
            if (S.offcut)
              return S[u] === 0 && (S.cutDirection = c.cutPreference, S.phase = 1), S.addToStock(c), d.push(S), !1;
          }), !d.length || (d = bt(d), !d.length)) continue;
          await xe[f].call(
            this,
            { secondRun: !0 },
            c,
            r,
            d
          );
          const p = r.length;
          for (let S = r.length; S--; )
            r[S].added && r.splice(S, 1);
          const m = r.length, g = p - m;
          if (T("info", `second run, added ${g}`), h = c, p - m === 0) continue;
          const y = o.findIndex((S) => S.id === c.id);
          y > -1 && o.splice(y, 1), lt(c.shapes);
        }
        if (!r.length || r.every((f) => f.added))
          s.used = !1, s.shapes = [], c.shapes.push(...s.shapes);
        else {
          T("info", `second run, not all shapes moved, reverting ${s.shapes.length} shapes`);
          for (const f of s.shapes) {
            const u = this.shapeList.find((d) => d.id === f.id);
            if (!u) throw new Error("original shape not found in second run");
            u.update(f), u.addToStock(s), v([
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
        for (const a of t)
          if (D(a) && a.added && a.shapes?.length)
            for (const h of a.shapes)
              l.add(h.autoId);
        const c = t.length;
        for (let a = c; a--; ) {
          const h = t[a];
          if (D(h)) {
            if (h.shapes?.length)
              for (const f of h.shapes)
                f.reset({
                  keepScores: i,
                  keepGuillotineBatchData: s,
                  keepGroupData: !1,
                  keepFirstShapeSampleRotations: r
                });
            h.added || t.splice(a, 1);
          } else
            l.has(h.autoId) ? t.splice(a, 1) : h.reset({
              keepScores: i,
              keepGuillotineBatchData: s,
              keepGroupData: !1,
              keepFirstShapeSampleRotations: r
            });
        }
      } else {
        const l = t.length;
        for (let c = l; c--; ) {
          const a = t[c];
          if (D(a)) {
            if (a.shapes?.length)
              for (const h of a.shapes)
                h.reset({
                  keepScores: i,
                  keepGuillotineBatchData: s,
                  keepGroupData: !1,
                  keepFirstShapeSampleRotations: r
                });
            n ? t.splice(c, 1) : a.added = !1;
          } else
            a.reset({
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
function wo() {
  R("Issue", Ae), R("Line", Oe), R(H.Line, Oe), R("Point", St), R(H.Point, St), R("Rectangle", Jt), R(H.Rectangle, Jt), R("Container", dt), R(H.Container, dt), R("GuillotineState", ze), R(H.GuillotineState, ze), R("Placeable", ht), R(H.Placeable, ht), R("Group", mt), R(H.Group, mt), R("Offcut", Xe), R(H.Offcut, Xe), R("Segment", ce), R(H.Segment, ce), R("Shape", Qt), R(H.Shape, Qt), R("Stock", wt), R(H.Stock, wt), R("Banding", Zt), R("banding", Zt), R("Corner", ei), R("corner", ei), R("Cut", pt), R(H.Cut, pt), R("Extras", ti), R(H.Extras, ti), R("Finish", ii), R("finish", ii), R("HingeHole", si), R("hingeHole", si), R("Hole", ni), R("hole", ni), R("ImageUpload", di), R("imageUpload", di), R("InputSaw", ri), R(H.InputSaw, ri), R("InputShape", oi), R(H.InputShape, oi), R("InputStock", ai), R(H.InputStock, ai), R("InputUserGroup", li), R(H.Group, li), R("Machining", ci), R(H.Machining, ci), R("Optimiser", Pi), R(H.Optimiser, Pi), R("Planing", ui), R("planing", ui), R("PointCollection", yt), R(H.PointCollection, yt), R("Saw", Ue), R(H.Saw, Ue);
}
export {
  wo as initializeStaticRegistry
};

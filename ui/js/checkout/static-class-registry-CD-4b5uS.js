import { c as gs, z as Ue, a as ae, D as Ai, b as ms, e as Ss, d as ys, f as ws, g as ct, s as bs, i as $s, h as xs, j as Is, k as ks, P as mt, o as Ts, l as Cs, E as B, C as St, m as Ps, I as Me, n as Es, p as D, q as _, r as we, t as P, u as ut, v as k, w as Li, x as F, y as j, A as he, B as O, F as Ce, G as v, H as b, J as be, K as vs, L as yt, M as Ht, N as Ae, O as J, Q as Oi, R as ee, S as je, T as me, U as oe, V as ft, W as V, X as Le, Y as qe, Z as wt, _ as Ds, $ as Mi, a0 as Rs, a1 as As, a2 as ue, a3 as _e, a4 as $e, a5 as Pe, a6 as xe, a7 as Ls, a8 as qi, a9 as Fi, aa as Gi, ab as Ge, ac as Os, ad as Ni, ae as Bi, af as Ms, ag as bt, ah as qs, ai as ce, aj as ot, ak as Hi, al as Fs, am as Jt, an as Gs, ao as Ns, ap as Bs, aq as Hs, ar as Zt, as as zs, at as $t, au as xt, av as Ws, aw as Us, ax as js, ay as ze, az as Ye, aA as _s, aB as It, aC as kt, aD as Ys, aE as Xs, aF as Oe, aG as Vs, aH as Ks, aI as ht, aJ as dt, aK as Qs, aL as R, aM as ei, aN as ti, aO as ii, aP as si, aQ as ni, aR as ri, aS as oi, aT as ai, aU as li, aV as ci, aW as ui, aX as fi, aY as hi, aZ as di } from "./result.zod-CjJ6OKhV.js";
import { h as de, n as ne, i as Xe, o as zi, j as pi, k as ke, l as pt, m as te, q as W, t as ie, u as De, v as Ve, w as U, x as z, y as Js, A as Zs, B as Y } from "./vendor-HGGdjwqM.js";
import { m as Wi, g as en } from "./vendor-lodash-B8VQpKjD.js";
import { i as Se } from "./environment-BeBZzWz6.js";
import "./vendor-i18next-CoOqf42x.js";
import { m as Ui } from "./vendor-mongoose-Dk9yGGt_.js";
const ji = ["root", "firstShape", "near", "far", ""], tn = gs.extend({
  // Cutting information
  cuts: ae("Cut").default([]).behavior({ compress: "exclude" }),
  // Stock reference - serialize as reference only (default zRef behavior)
  stock: Ue("Stock", { nullable: !0, description: "Stock reference for this segment" }),
  phase: ne().int().min(0).nullable().default(null),
  cutDirection: Xe(Ai).nullable().default(null).describe("The primary cut direction for this segment"),
  // Segment properties
  merged: de().default(!1),
  firstShape: Ue("Shape"),
  children: ae("Segment", {
    description: "Child segments"
  }).behavior({
    serialize: "full",
    // Serialize the full segment objects
    compress: "full",
    // Even in compressed mode, keep full objects
    clone: "copy"
  }),
  parent: Ue("Segment", { nullable: !0 }).behavior({
    serialize: "reference",
    // Parent can stay as reference
    compress: "exclude"
    // Exclude parent in compressed mode to avoid circular refs
  }),
  type: Xe(ji).nullable().default(null),
  placementOrder: ne().int().min(0).optional(),
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
zi({
  x: ne().optional(),
  y: ne().optional(),
  l: ne().optional(),
  w: ne().optional(),
  type: Xe(ji),
  parent: pi(),
  // Segment instance
  stock: pi(),
  // Stock instance
  offcut: de().optional(),
  merged: de().optional(),
  cutDirection: Xe(Ai).nullable().optional()
});
const sn = {
  ...ms,
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
}, nn = zi({
  id: ke().optional(),
  url: ke().optional(),
  size: ne().optional(),
  mimeType: ke().optional(),
  name: ke().optional(),
  width: ne().optional(),
  height: ne().optional()
}), rn = Ss.extend({
  // ImageUpload specific properties
  images: pt(nn).default([]).describe("Array of uploaded images"),
  maxImages: ne().default(5).describe("Maximum number of images allowed"),
  allowedTypes: pt(ke()).default(["image/jpeg", "image/png", "image/gif"]).describe("Allowed MIME types"),
  maxSizeBytes: ne().default(5242880).describe("Maximum file size in bytes (default 5MB)"),
  description: ke().optional().describe("Description of uploaded images"),
  tags: pt(ke()).default([]).describe("Tags associated with images")
  // Note: faces and sides inherited from Extra base
}), on = {
  // Inherit computed properties from Extra base class
  ...ys,
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
}, an = ws, ln = {
  cacheResults: !0
};
let _i;
_i = Wi({}, an, ln);
let Z = _i;
function cn() {
  if (Z.guillotine.secondPass && !Z.guillotine.strips.rearrange)
    throw new Error("config.guillotine.secondPass requires config.guillotine.strips.rearrange to be enabled");
  if (Z.captureProfile && Z.runTests)
    throw new Error("config.captureProfile and config.runTests should not be both enabled");
}
cn();
function un(e, t = null) {
  if (!e) return Z;
  const i = fn(e, t);
  if (!i) return Z;
  const n = Wi({}, Z, i);
  return console.log(`[CONFIG] custom config applied for ${e?.username}`), n;
}
function fn(e, t = null) {
  if (!e || !e?.config) return null;
  switch (e.id) {
    //Glassense Kolu
    case "662a2f8ad28745b63665e68a": {
      const i = "shapeList" in t ? t.shapeList : t.inputShapes, n = i ? i.reduce((r, s) => r + (s.q || 0), 0) : 0;
      if (t) if (n <= 80) {
        const r = { ...e.config };
        return r.groups.guillotine.strips = Z.groups.guillotine.strips, r.sample.guillotine = Z.sample.guillotine, r.guillotine.stripShapes.iterations = Z.guillotine.stripShapes.iterations, r;
      } else
        return e.config;
      else return e.config;
    }
  }
  return e.config;
}
function gi(e, t, i) {
  return en(e, t, i);
}
const hn = te({
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
  saw: Ue("Saw").describe("Saw configuration"),
  stockList: ae("Stock").default([]).describe("List of stock materials"),
  shapeList: ct(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: ae("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: ae("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: ae("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: ct(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: ct(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: bs,
  // Results storage
  cutList: ae("Cut").default([]).describe("List of cuts to make"),
  segmentList: ae("Segment").default([]).describe("List of segments"),
  offcuts: ae("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: ae("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: W().default(!1).describe("Use inventory system"),
  successMetric: z().default(Z.successMetric).describe("Metric for optimization success"),
  enableEvo: W().default(!0).describe("Enable evolutionary algorithm"),
  weighting: De(z(), U()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: U().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: U().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: te({
    placement: Ve().default(0),
    group: Ve().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: W().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: W().default(!1).describe("Run guillotine second pass"),
  runningEvo: W().default(!1).describe("Currently running evolution"),
  evolutionVisData: ie(De(z(), Zs())).default([]).describe("Evolution visualization data"),
  final: W().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: W().default(!1).describe("Has minimum spacing requirement")
}), dn = {}, pn = Js(["decimal", "fraction"]);
te({
  job: U().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Allow additional properties like __entityType and autoId
  inputSaw: $s,
  inputShapes: ie(ks),
  inputStock: ie(Is),
  inputUserGroups: ie(xs).optional(),
  // Number format for conversion
  numberFormat: pn.optional(),
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
  extrasOptions: te({
    banding: te({
      options: te({
        sides: De(z(), ie(z())).optional()
      }).optional()
    }).optional(),
    finish: te({
      options: te({
        faces: De(z(), ie(z())).optional()
      }).optional()
    }).optional(),
    planing: te({
      options: te({
        sides: De(z(), ie(z())).optional(),
        faces: De(z(), ie(z())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // API specific
  config: U().optional(),
  v: Ve().optional(),
  // API version
  webhook: z().optional(),
  //source
  sourceVersion: z().nullish(),
  source: z().optional()
});
te({
  job: U().optional(),
  // Type: Job from BullMQ
  saw: U(),
  // Runtime Saw instance
  shapeList: ie(U()),
  // Runtime Shape instances
  stockList: ie(U()),
  // Runtime Stock instances
  userGroups: ie(U()).optional(),
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
  v: Ve().optional(),
  webhook: z().optional()
});
class Ke extends mt {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Ts;
  static computedProperties = Cs;
  constructor(t = {}) {
    const i = { ...t, offcut: !0 };
    super(i), this.offcut = !0;
  }
  /**
    * Get entity type
    */
  getType() {
    return B.Offcut;
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
    return new Ke({
      ...t,
      // Include all rectangle properties (l, w, x, y, material)
      flex: t.flex,
      offcut: !0,
      addToInventory: !1,
      added: !1
    });
  }
}
class pe extends St {
  // Required: Define schema and computed properties for SchemaClass
  static schema = tn;
  static computedProperties = sn;
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
    return B.Segment;
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
        Se() && console.log(`[PARENT CHANGE] Moving ${t.autoId} from parent ${i.autoId} to ${this.autoId}`);
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
class mi extends Ps {
  // Properties are dynamically created from schema via SchemaClass
  // Static schema reference for automatic updates
  static schema = rn;
  static computedProperties = on;
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
        const r = this.images[n];
        if (r.url || i.push(new Me({
          message: `Image ${n + 1} is missing URL`,
          type: "error"
        })), r.mimeType && !this.allowedTypes.includes(r.mimeType) && i.push(new Me({
          message: `Image ${n + 1} has unsupported type: ${r.mimeType}`,
          type: "warning"
        })), r.size && r.size > this.maxSizeBytes) {
          const s = (r.size / 1048576).toFixed(2), o = (this.maxSizeBytes / 1048576).toFixed(2);
          i.push(new Me({
            message: `Image ${n + 1} is too large: ${s}MB exceeds ${o}MB`,
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
    const n = (this.images || []).reduce((s, o) => s + (o.size || 0), 0) / 1048576;
    return Math.ceil(n * 0.01 * 100) / 100;
  }
  /**
   * Get description
   */
  getDescription() {
    if (!this.images || this.images.length === 0)
      return "No images uploaded";
    const t = this.images ? this.images.length : 0, n = ((this.images || []).reduce((r, s) => r + (s.size || 0), 0) / 1048576).toFixed(2);
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
Y.colors = [
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
const Re = Y("logs"), Tt = Y("cuts"), Qe = Y("groups"), Je = Y("guillotine"), Ct = Y("results"), Pt = Y("scoring"), Et = Y("firstShapes"), vt = Y("calculations"), Dt = Y("subset"), Rt = Y("secondRun"), At = Y("stack"), Ze = Y("errors"), Lt = Y("allStock"), et = Y("reset"), tt = Y("swarm");
Ze.color = 1;
Qe.color = 14;
Je.color = 159;
et.color = 11;
tt.color = 5;
function gn(e = "info", t, i) {
  const n = t.map((o) => {
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
  }, console.table(n, i), e) {
    case "info":
      Re(s);
      break;
    case "guillotine":
      Je(s);
      break;
    case "results":
      Ct(s);
      break;
    case "secondRun":
      Rt(s);
      break;
    case "cuts":
      Tt(s);
      break;
    case "scoring":
      Pt(s);
      break;
    case "calculations":
      vt(s);
      break;
    case "stack":
      At(s);
      break;
    case "subset":
      Dt(s);
      break;
    case "errors":
      Ze(s);
      break;
    case "allStock":
      Lt(s);
      break;
    case "firstShapes":
      Et(s);
      break;
    case "groups":
      Qe(s);
      break;
    case "reset":
      et(s);
      break;
    case "swarm":
      tt(s);
      break;
    default:
      Re(s);
  }
  console.table = r;
}
const mn = "\x1B[31m", Sn = "\x1B[0m", T = (e = "info", t, i = null, n = null, r = !1, s) => {
  if (s?.enableLogging, r) {
    switch (e) {
      case "info":
        Re(t);
        break;
      case "guillotine":
        Je(t);
        break;
      case "results":
        Ct(t);
        break;
      case "secondRun":
        Rt(t);
        break;
      case "cuts":
        Tt(t);
        break;
      case "scoring":
        Pt(t);
        break;
      case "calculations":
        vt(t);
        break;
      case "stack":
        At(t);
        break;
      case "subset":
        Dt(t);
        break;
      case "errors":
        Ze(`${mn}${t}${Sn}`);
        break;
      case "allStock":
        Lt(t);
        break;
      case "firstShapes":
        Et(t);
        break;
      case "groups":
        Qe(t);
        break;
      case "reset":
        et(t);
        break;
      case "swarm":
        tt(t);
        break;
      default:
        Re(t);
    }
    if (i)
      switch (e) {
        case "info":
          Re(i);
          break;
        case "guillotine":
          Je(i);
          break;
        case "results":
          Ct(i);
          break;
        case "secondRun":
          Rt(i);
          break;
        case "cuts":
          Tt(i);
          break;
        case "scoring":
          Pt(i);
          break;
        case "calculations":
          vt(i);
          break;
        case "stack":
          At(i);
          break;
        case "subset":
          Dt(i);
          break;
        case "errors":
          Ze(i);
          break;
        case "allStock":
          Lt(i);
          break;
        case "firstShapes":
          Et(i);
          break;
        case "groups":
          Qe(i);
          break;
        case "reset":
          et(i);
          break;
        case "swarm":
          tt(i);
          break;
        default:
          Re(i);
      }
    n && gn(e, n);
  }
};
Es(T);
function yn(e, t) {
  return e?.length && e.forEach((i) => {
    t = t.filter((n) => !(n.id === i.id || D(n) && n.shapes.find((r) => r.id === i.id)));
  }), t;
}
const se = {
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
function ge(e, t) {
  if (!t) return e;
  const i = t.weighting;
  if (!i) return e;
  for (const n in i)
    i[n] !== null && (e[n] = e[n] * i[n]);
  return e;
}
function zt(e, t, i) {
  if (this?.weighting?.custom)
    return ge(this.weighting.custom, i);
  switch (e.cutType) {
    case "efficiency":
      if (t?.saw?.stockType === "roll")
        return ge(se.roll.efficiency(), i);
      break;
    case "beam":
      return ge(se.guillotine.beam(), i);
    case "guillotine": {
      if (t?.saw?.stockType === "roll")
        return ge(se.roll.guillotine(), i);
      switch (t.saw.guillotineOptions.strategy) {
        case "time":
          return ge(
            se.guillotine.time(),
            i
          );
        case "efficiency":
          return ge(
            se.guillotine.stock(),
            i
          );
        default:
          return ge(
            se.guillotine.stock(),
            i
          );
      }
    }
  }
  return ge(se[e.cutType].standard(), i);
}
class wn {
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
      weighting: zt.call(
        this.CLO,
        i,
        _(i) ? i : i.getStock
      )
    }, this.weighting = this.weightingKeys[this.container.cutType], i?.saw?.stockType === "roll" && (this.selectionMethod = "rollLength", this.weighting = this.weightingKeys.roll), this.uniqueShapes = we(n, !1), this.population = [], this.options = {
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
      const r = "bestScore";
      return i?.[r]?.[this.selectionMethod] > n?.[r]?.[this.selectionMethod] ? i : n;
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
        for (const r of this.population)
          await r.assess();
        const n = this.getBestIndividual();
        if (this.population.every((r) => r?.bestScore?.[this.selectionMethod] === n?.bestScore?.[this.selectionMethod]))
          return;
        for (const r of this.population)
          try {
            r.alive && r.updatePosition(n);
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
    const t = se.efficiency.standard();
    this.weighting = {};
    for (const [i, n] of Object.entries(t)) {
      const r = n;
      if (this.swarm?.weighting && this.swarm.weighting.indexOf(i) > -1) {
        let s = r - this.swarm.mutation.range, o = r + this.swarm.mutation.range;
        s < this.swarm.mutation.min && (s = this.swarm.mutation.min), o > this.swarm.mutation.max && (o = this.swarm.mutation.max), this.weighting[i] = ut(s, o);
      } else this.weighting[i] = t[i];
    }
  }
  //assess fitness and generate a score
  async assess() {
    if (this.swarm.progress.current++, !!this.alive) {
      switch (this.previousScore = this.score, this.previousScore && (this.previousScore.weighting = this.weighting), this.swarm.container.cutType) {
        case "efficiency":
          {
            const t = await Te.runSpecificStrategy.call(
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
    for (const [n, r] of Object.entries(this.weighting)) {
      let s = 0;
      i ? this.previousScore ? s = this.previousScore.weighting[n] - r : s = this.swarm.benchmark.weighting[n] - r : s = this.following.bestScore.weighting[n] - r;
      let o = s * this.speed * this.socialInfluence;
      i ? o += ut(-0.1, 0.1) : o += ut(-0.05, 0.05), this.weighting[n] += o;
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
function Ot(e, t, i = "x") {
  if (!t) return !1;
  const n = i === "x" ? "l" : "w";
  return !!(k.greaterThanOrEqualTo(e[i], t[i]) && k.lessThanOrEqualTo(e[i] + e[n], t[i] + t[n]));
}
function it(e, t, i = "x") {
  if (!t) return !1;
  const n = Li(i);
  return !!(k.greaterThanOrEqualTo(e[i], t[i]) && k.lessThan(e[i], t[i] + t[n]));
}
function Yi(e) {
  return {
    cutAxis: e === "l" ? "x" : "y",
    positionAxis: e === "l" ? "y" : "x",
    cutDimension: e,
    positionDimension: F(e)
  };
}
function bn(e, t, i) {
  return e?.length ? e.filter((n) => n.added && k.equalTo(n[t], i)) : [];
}
function $n(e, t) {
  return e?.guillotineState?.myPhase === t;
}
function xn(e, t) {
  e?.guillotineState && (e.guillotineState.myStripDirection = t);
}
function In(e, t) {
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
  final: n = !1,
  saw: r = null
}) {
  H.ptxCuts = 0;
  const s = e.getStock;
  r && (s.saw = r);
  const o = j(e);
  let a;
  const c = o ? e.cutDirection : e.cutPreference;
  if (o && e.type === "root")
    a = e, a.cuts = [], a.children = [], a.shapes = t, P("cuts", `REUSING ROOT [${a.autoId ? a.id : "unknown"}] l=${a.l}, w=${a.w}, DIR ${c?.toUpperCase()}`);
  else {
    const d = H.segments, p = d.toString();
    H.segments++, a = new pe({
      id: p,
      x: o ? e.x : 0,
      y: o ? e.y : 0,
      l: o ? e.l : s.l,
      w: o ? e.w : s.w,
      t: s.t,
      saw: s.saw,
      stock: s,
      shapes: t,
      parent: o ? e.parent ?? e : null,
      grain: s.grain,
      material: s.material,
      type: d === 0 ? "root" : "",
      phase: o ? e.phase + 1 : 0,
      hasHeadCut: o ? e.hasHeadCut : !1,
      cutDirection: c,
      isInitial: o ? e.isInitial : !0
    });
  }
  H.previousSegments = [];
  const l = Be.call(
    this,
    {
      segment: a,
      stock: s,
      allStockShapes: t,
      forceNoHeadCut: i,
      final: n
    }
  );
  let h, f, u;
  try {
    [h, f, u] = Yn(a, n, l.headCutCount);
  } catch (d) {
    return P("errors", `issue analysing segments ${d.message}`), {
      rootSegment: null,
      cuts: [],
      offcuts: []
    };
  }
  if (o && u.length > 0) {
    const d = u.map((p) => `${p.id}@(${p.x},${p.y})`).join(", ");
    P("cuts", `[calculateStripCuts] Returning ${u.length} offcuts for container segment at (${e.x},${e.y}): ${d}`);
  }
  return {
    rootSegment: h,
    cuts: f,
    offcuts: u
  };
}
function kn(e, t = !1) {
  let i = Yi(e);
  return t && (i = Qi(i)), i;
}
function Tn(e, t, i, n, r, s, o) {
  if (this?.config && !this?.config?.guillotine?.extendSegments || t.cutType !== "guillotine" || t?.saw?.guillotineOptions?.strategy === "time") return !1;
  const a = e?.merged, c = e?.parent?.merged;
  if (a && c) return !1;
  const l = $n(i, 1), h = e?.parent ? e.parent?.hasHeadCut : !1;
  let f = !l || h;
  if (!f || (t?.saw?.stockType === "roll" && l && (f = !1), t?.saw?.stockType === "roll" && s === "w")) return !1;
  let u = o.length > 1 && n < o.length - 1;
  h && (u = !0);
  const d = k.lessThan(
    i[s],
    e[s]
  );
  return u && d && !r;
}
function Ut(e) {
  const t = F(e.cutPreference);
  return Ae(t);
}
function Cn(e) {
  return F(e.cutPreference);
}
function Pn(e) {
  const t = Ut(e);
  let i = 0;
  return e?.getStock?.hasTrim && e?.getStock?.trimmed === !1 && (i = e?.getStock?.trim?.[t === "x" ? "x1" : "y1"] ?? 0), i;
}
function Vi(e) {
  const t = Ut(e), i = Pn(e);
  return e[t] === i;
}
function Ki(e, t, i) {
  if (!this?.config?.guillotine?.allowHeadCuts || !e?.guillotineOptions?.headCuts || !Vi(i)) return !1;
  const n = Cn(i), r = Ut(i);
  if (t[r] > i[r]) return !1;
  let s = !1;
  const o = 0.75;
  if (O(t) && t.group.addedAsGroup) {
    const a = i.shapes.filter((h) => h.group?.addedAsGroup === t.group.addedAsGroup), c = Ae(n), l = Ce(a, c);
    l[n] + l[c] >= i[n] * o && (s = !0);
  } else t[n] >= i[n] * o && (s = !0);
  return s;
}
class jt {
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
    const t = kn(this.segment.cutDirection, this.isHeadCut);
    return v([() => b(t.cutDimension).to.equal(this.isHeadCut ? F(this.segment.cutDirection) : this.segment.cutDirection)]), t;
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
    return new jt({
      ...this,
      ...t
    });
  }
  // get shapes that are within boundaries of current strip
  getShapesInCurrentStrip() {
    return this.currentStripParent ? this.segment.shapes.filter((t) => it(t, this.currentStripParent, this.cutInfo.positionAxis)) : [];
  }
}
function Qi(e) {
  return {
    positionAxis: be(e.positionAxis),
    positionDimension: F(e.positionDimension),
    cutAxis: be(e.cutAxis),
    cutDimension: F(e.cutDimension)
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
  previousCutPosition: r = null,
  previousEdgeOfSegment: s = !1,
  final: o = !1,
  headCutCount: a = 0,
  attemptedDirections: c = /* @__PURE__ */ new Set()
}) {
  P("cuts", `[makeCuts] START: segment ${e.l}x${e.w} phase=${e.phase} type=${e.type} shapes=${e.shapes?.length || 0} final=${o}`);
  let l = new jt({
    segment: e,
    stock: t,
    allStockShapes: i,
    forceNoHeadCut: n,
    previousCutPosition: r,
    previousEdgeOfSegment: s,
    final: o,
    headCutCount: a,
    attemptedDirections: c
  });
  if (!vn.call(this, l)) {
    P("cuts", "[makeCuts] EARLY RETURN: invalid input");
    return;
  }
  if (Rn.call(this, l)) {
    P("cuts", "[makeCuts] EARLY RETURN: duplicate segment");
    return;
  }
  Dn(l), l = An.call(this, l), l = On.call(this, l), P("cuts", `[makeCuts] Found ${l.stripParentShapes.length} strip parent shapes`), l.stripParentShapes.length && (l.segment.offcut = !1);
  const h = l.stripParentShapes?.length || 0;
  for (let m = 0; m < h; m++) {
    if (l = l.with({ currentStripIndex: m }), P("cuts", `[makeCuts] Processing shape ${m}: ${l.currentStripParent.l}x${l.currentStripParent.w}`), l.currentStripParent.l === t.l && l.currentStripParent.w === t.w) {
      P("cuts", "[makeCuts] Shape matches stock size, marking as produced"), l = bi.call(this, l);
      break;
    }
    if (l = jn.call(this, l), l.final && l.segment?.parent?.hasHeadCut && l.segment.phase === 1 && e.type === "far" && l.isHeadCut === !1) {
      const $ = Qi(l.cutInfo), { cutAxis: I, cutDimension: y, positionDimension: E, positionAxis: A } = $;
      at({
        parentSegment: e,
        stock: t,
        cutDirection: y,
        cutAxis: I,
        positionAxis: A,
        position: e[E] + e[A],
        headCut: !0,
        ptxDummyCut: !0
      });
    }
    if (l = Mn.call(this, l), l.final && t.cutType === "beam" && m === 0 && (e.type !== "far" || Ji(l)) && (l = qn.call(this, l)), l = Fn.call(this, l), En.call(this, l) === !0) {
      P("cuts", "[makeCuts] Breaking due to edge of segment");
      break;
    }
    if (l = zn.call(this, l), l.cut)
      l.isHeadCut && (l.segment.hasHeadCut = !0);
    else if (l.isHeadCut) {
      const $ = F(l.cutDirection);
      l.attemptedDirections.has($) ? P("cuts", `[makeCuts] Skipping reattempt - direction ${$} already attempted`) : (l = l.with({ forceNoHeadCut: !0 }), wi.call(this, l, $));
      break;
    }
    if (l = l.with({
      cutSuccess: !!l.cut,
      skippedCut: l.cut ? null : !0,
      headCutCount: l.isHeadCut && l.cut ? l.headCutCount + 1 : l.headCutCount
    }), l.cut) {
      if (l.final && (l = bi.call(this, l), t.cutType === "beam" && Gn.call(this, l), l.cut)) {
        let $ = e.parent?.autoId;
        ($ === "root" || !$) && ($ = "R"), $ = `[${$}]`;
        let I = e.autoId ? e.id : "unknown";
        I = `[${I}]`, P("cuts", `${$}->${I} P${e.phase} {${l.currentStripParent.autoId}} ${l.isHeadCut ? "HEAD" : "NORM"} ${e?.type?.toUpperCase()} ${he(e.l, 4)}x${he(e.w, 4)} ${he(l.cutPosition, 4)} ${he(l?.cut?.x1, 4)}|${he(l?.cut?.x2, 4)}|${he(l?.cut?.y1, 4)}|${he(l?.cut?.y2, 4)}`), P("cuts", `DIRECTIONS FOR ${I}: STATE ${l?.cutDirection?.toUpperCase()} CUT ${l.cut?.dimension?.toUpperCase() ?? "N/A"} SEGMENT ${e?.cutDirection?.toUpperCase()}`);
      }
      if (l = Wn.call(this, l), l = Un.call(this, l), l.isHeadCut) break;
    }
  }
  const f = Zi(l.segment), { allShapesCut: u } = ts(l.segment.shapes, f, l.segment, { ignoreGroupMembership: !0 }), d = l.segment.cutDirection, p = F(d), S = !l.attemptedDirections.has(d), g = !l.attemptedDirections.has(p), w = e.cuts.length === 0;
  if (!u && S && g && w) {
    P("cuts", `[makeCuts] Not all shapes cut in segment [${e.id}] with ${l.segment.shapes.length} shapes, retrying in ${p?.toUpperCase()} direction`);
    const m = new Set(l.attemptedDirections);
    return m.add(d), l = l.with({ attemptedDirections: m }), wi.call(this, l, p), l;
  }
  return l.final && t.cutType === "beam" && e.phase === 0 && (l = Bn.call(this, l)), l.final && t.cutType === "beam" && e.type === "far" && e.parent.hasHeadCut && (l = Hn.call(this, l)), l;
}
function Ji(e) {
  const { segment: t, isHeadCut: i } = e;
  return i ? !1 : t?.parent?.hasHeadCut && t.type === "far";
}
function En(e) {
  if (!e.isEdgeOfSegment) return !1;
  const { currentStripParent: t, segment: i, cutInfo: n } = e, { positionDimension: r, positionAxis: s } = n;
  if (k.greaterThanOrEqualTo(t[r] + t[s] + e.bladeWidth, i[r] + i[s]) && e.stock.cutType === "beam" || (e = e.with({ previousEdgeOfSegment: !0 }), !i.children.length)) return !1;
  const a = e.segment.children.findLast((c) => c.type === "far");
  return a && (e = e.with({ segment: a }), a.cutDirection = F(e.cutDirection), Be.call(this, {
    segment: a,
    stock: e.stock,
    allStockShapes: e.allStockShapes,
    forceNoHeadCut: e.forceNoHeadCut,
    previousCutPosition: e.previousCutPosition,
    previousEdgeOfSegment: e.previousEdgeOfSegment,
    final: e.final,
    headCutCount: e.headCutCount
  })), !0;
}
function Zi(e, t = /* @__PURE__ */ new Set()) {
  if (t.has(e.autoId)) return [];
  t.add(e.autoId);
  const i = [...e.cuts];
  if (e.children?.length)
    for (const n of e.children)
      i.push(...Zi(n, t));
  return i;
}
function wi(e, t) {
  const { segment: i } = e;
  i.cutDirection = t;
  const n = new Set(e.attemptedDirections);
  return n.add(t), e = e.with({
    isHeadCut: !1,
    attemptedDirections: n
  }), i.cuts.length = 0, i.clearChildren(), e.segment.hasHeadCut = !1, P("cuts", `REATTEMPTING [${i.id}] new direction ${i?.cutDirection?.toUpperCase()}`), Be.call(this, {
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
function vn(e) {
  if (!e.segment) return !1;
  const { segment: t, stock: i, cutDirection: n, previousCutPosition: r, allStockShapes: s } = e;
  return !["l", "w"].includes(n) || t.l <= 0 || t.w <= 0 || r === void 0 ? !1 : (v([
    () => b(s.every((o) => O(o) || D(o)), "allStockShapes must be shape or any type of group").to.be.true,
    () => b(_(i)).to.be.true
  ]), !0);
}
function Dn(e) {
  const { final: t } = e;
  return t && H.makeCutsIteration++, e;
}
function Rn(e) {
  const { segment: t, cutDirection: i } = e;
  return t.type !== "root" && H.previousSegments.some((n) => t.l === n.l && t.w === n.w && t.x === n.x && t.y === n.y && t.type === n.type && i === n.cutDirection);
}
function An(e) {
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
function Ln(e, t, i) {
  return e.filter(
    (n, r, s) => s.findIndex(
      (o) => k.equalTo(
        o[t] + o[i],
        n[t] + n[i]
      )
    ) === r
  );
}
function On(e) {
  const { segment: t, stock: i, cutDirection: n, cutInfo: r, previousCutPosition: s, halfBladeWidth: o } = e, { cutAxis: a, positionAxis: c, positionDimension: l } = r;
  let h = [];
  if (P("cuts", `Finding strip parent shapes. Segment ${t.id} has ${t.shapes.length} shapes:`), t.shapes.slice(0, 3).forEach((f) => {
    P("cuts", `  Shape ${f.id}: l=${f.l}, w=${f.w}, rot=${f.rot}, at (${f.x},${f.y}), added=${f.added}`);
  }), i.cutPreference === n) {
    const f = t.type === "far" && i.cutType === "guillotine" || !s ? t[a] : s + o;
    P("cuts", `[findStripParentShapes] cutPreference=${i.cutPreference}, cutDirection=${n}, cutAxis=${a}, axisPosition=${f}, segment.shapes[0]?.[${a}]=${t.shapes[0]?.[a]}, segment.type=${t.type}`), h = bn(
      t.shapes,
      a,
      f
    );
  } else {
    P("cuts", `[findStripParentShapes] NOT using cutPreference path, cutPreference=${i.cutPreference}, cutDirection=${n}, cutAxis=${a}, segment[${a}]=${t[a]}, segment.shapes[0]?.[${a}]=${t.shapes[0]?.[a]}, segment.shapes[0]?.added=${t.shapes[0]?.added}`), h = t.shapes.filter(
      (u) => u.added && k.equalTo(u[a], t[a])
    );
    const f = h.filter((u) => D(u));
    if (f.length > 0) {
      const u = /* @__PURE__ */ new Set();
      f.forEach((d) => {
        d.shapes && Array.isArray(d.shapes) && d.shapes.forEach((p) => u.add(p.autoId));
      }), h = h.filter((d) => D(d) ? !0 : !u.has(d.autoId));
    }
    h = Ln(h, c, l);
  }
  if (h.sort((f, u) => f[c] - u[c]), h.length && !t?.hasHeadCut) {
    const f = t.shapes.filter((d) => d.added), u = Ce(f, c);
    u && !h.some((d) => d.autoId === u.autoId) && h.push(u);
  }
  return e.with({ stripParentShapes: h });
}
function Mn(e) {
  const { segment: t, stock: i, cutDirection: n, cutInfo: r, halfBladeWidth: s, allStockShapes: o, previousStripShape: a, currentStripParent: c, currentStripIndex: l, bladeWidth: h } = e, { cutAxis: f, positionAxis: u, cutDimension: d, positionDimension: p } = r;
  if (l === 0) return e;
  if (a && k.equalTo(c[f], t[f]) && k.equalTo(a[f], t[f]) && !k.equalTo(
    c[u],
    a[u] + a[p] + h
  )) {
    P("cuts", `[makeCuts] Creating gap cut at position ${c[u] - s}, dir=${n}`);
    const { cut: S, previousCutPosition: g } = at({
      parentSegment: t,
      stock: i,
      cutDirection: n,
      cutAxis: f,
      positionAxis: u,
      position: c[u] - s,
      allStockShapes: o
    });
    if (S) {
      const w = g < t[u] ? t[u] : g, m = w + s - t[u], x = c[u] - w - h - s, $ = t[u] + m, I = x > 0 ? _t.call(this, {
        parent: t,
        stock: i,
        offcut: !0,
        type: "near",
        [f]: t[f],
        [d]: t[d],
        [u]: $,
        [p]: x
      }) : null;
      I && v([
        () => b(
          I.cutDirection,
          `near side segment ${I.id} has the same cutDirection as segment ${t.id}`
        ).not.to.equal(t.cutDirection)
      ]);
    }
  }
  return e;
}
function qn(e) {
  if (e.stock.cutType !== "beam" || e.currentStripIndex !== 0 || e.segment.type === "far" && !Ji(e)) return e;
  const { segment: t, stock: i, cutDirection: n, cutInfo: r, allStockShapes: s, halfBladeWidth: o } = e, { cutAxis: a, positionAxis: c, positionDimension: l } = r;
  return t.phase !== 1 || !e.final || Kn({
    segment: t,
    stock: i,
    cutDirection: n,
    cutAxis: a,
    positionAxis: c,
    positionDimension: l,
    position: 1,
    allStockShapes: s,
    halfBladeWidth: o
  }), e;
}
function Fn(e) {
  const { segment: t, stock: i, cutInfo: n, halfBladeWidth: r, currentStripParent: s, currentStripIndex: o, stripParentShapes: a, isHeadCut: c, bladeWidth: l, previousEdgeOfSegment: h } = e, { positionAxis: f, cutAxis: u, positionDimension: d, cutDimension: p } = n;
  let S = s[f] + s[d] + r, g = !1, w = o;
  P("cuts", `Cut position calc: shape ${s.l}x${s.w}, posAxis=${f}, posDim=${d}`), P("cuts", `  Shape rot=${s.rot}, autoId=${s.autoId}`), P("cuts", `  ${f}=${s[f]}, ${d}=${s[d]} => cutPos=${S}`), P("cuts", `  cutDirection=${e.cutDirection}, cutAxis=${n.cutAxis}, cutDim=${n.cutDimension}`), P("cuts", `  Shape actual extent: x=[${s.x} to ${s.x + s.l}], y=[${s.y} to ${s.y + s.w}]`), P("cuts", `  Strip parent shapes count: ${a.length}`), a.length > 1 && P("cuts", `  All strip parents: ${a.map(($) => `${$.id}(${$.l}x${$.w} rot=${$.rot})`).join(", ")}`);
  let m = k.greaterThanOrEqualTo(
    s[f] + s[d] + l,
    t[f] + t[d]
  );
  const x = t.shapes;
  if (!c && !m && !h && Tn.call(this, t, i, s, o, m, e.cutDirection, a)) {
    let $ = s;
    for (let I = o + 1; I < a.length; I++) {
      const y = a[I];
      if (y.autoId === $.autoId) continue;
      if (!y) break;
      const E = x.filter(
        (C) => it(C, s, f)
      ), A = Ce(E, u), M = E.reduce(
        (C, q) => k.greaterThan(C[d], q[d]) ? C : q
      );
      k.greaterThan(
        M[f] + M[d],
        $[f] + $[d]
      ) && ($ = M, S = $[f] + $[d] + r);
      const G = Ce(
        x.filter(
          (C) => it(C, y, f)
        ),
        u
      );
      if (!k.equalTo(
        A[u] + A[p],
        G[u] + G[p]
      ))
        break;
      if (k.equalTo($[p], y[p]) && k.equalTo($[u], y[u]))
        g = !0, S = y[f] + y[d] + r, $ = y, w = I;
      else
        break;
    }
    g && (t.merged = !0, m = k.greaterThanOrEqualTo(
      S - r,
      t[f] + t[d]
    ));
  }
  return e.with({
    cutPosition: S,
    mergedCut: g,
    isEdgeOfSegment: m,
    currentStripIndex: w
  });
}
function Gn(e) {
  if (e.stock.cutType !== "beam" || !e.cut) return e;
  const { cut: t, segment: i, cutInfo: n, currentStripParent: r, currentStripIndex: s, stripParentShapes: o } = e, { positionAxis: a, positionDimension: c } = n;
  t?.guillotineState?.partProduced && s === o.length - 1 && k.equalTo(
    r[a] + r[c],
    i[a] + i[c]
  ) && (P("cuts", `MARKING PTX DUMMY CUT ${r.autoId} ${e.cutPosition}`), t.ptxData.isDummy = !0);
}
function Nn(e) {
  return e.hasHeadCut ? F(e.cutDirection) : e.cutDirection;
}
function Bn(e) {
  if (e.stock.cutType !== "beam") return e;
  const { segment: t, cutInfo: i, stock: n, cutDirection: r } = e;
  if (t.phase !== 0) return e;
  const { cutAxis: s } = i;
  for (const o of t.cuts)
    o.dimension === Nn(t) && (o[s + 1] = 0, o[s + 2] = n[r]);
  return e;
}
function Hn(e) {
  if (e.stock.cutType !== "beam") return e;
  const { segment: t, cutInfo: i, stock: n, cutDirection: r } = e;
  if (t.phase !== 1) return e;
  const { cutAxis: s } = i;
  for (const o of t.cuts)
    t.hasHeadCut ? o.dimension === F(t.cutDirection) && (o[be(s) + 2] = n[F(r)]) : o.dimension === t.cutDirection && (o[s + 2] = n[r]);
}
function zn(e) {
  const { segment: t, stock: i, cutDirection: n, cutInfo: r, cutPosition: s, allStockShapes: o, currentStripParent: a, isHeadCut: c } = e, { cutAxis: l, positionAxis: h } = r;
  c && xn(a, n);
  const { cut: f, farSideSegmentSize: u, previousCutPosition: d } = at({
    parentSegment: t,
    stock: i,
    cutDirection: n,
    cutAxis: l,
    positionAxis: h,
    position: s,
    allStockShapes: t.phase === 0 ? o : [],
    headCut: e.isHeadCut
  });
  return f && e.final && P("cuts", `MADE CUT ${f.x1}|${f.x2}|${f.y1}|${f.y2} ${f.isHead ? "HEAD" : "NORM"}`), e.with({
    cut: f,
    farSideSegmentSize: u,
    previousCutPosition: d
  });
}
function bi(e) {
  if (e.stock.cutType !== "beam") return e;
  const { cut: t, cutInfo: i, halfBladeWidth: n, currentStripParent: r } = e;
  if (!t) return e;
  const { cutAxis: s, cutDimension: o, positionAxis: a, positionDimension: c } = i;
  return k.equalTo(
    t[s + 2] - t[s + 1],
    r[o]
  ) && k.equalTo(
    t[a + 1],
    r[a] + r[c] + n
  ) && (t.guillotineState.partProduced = r.parentId), e;
}
function Wn(e) {
  const {
    segment: t,
    stock: i,
    cutInfo: n,
    cutPosition: r,
    mergedCut: s,
    currentStripParent: o,
    previousCutPosition: a,
    cut: c,
    isEdgeOfSegment: l,
    halfBladeWidth: h,
    bladeWidth: f,
    allStockShapes: u,
    final: d,
    cutDirection: p,
    currentStripIndex: S
  } = e, { cutAxis: g, positionAxis: w, cutDimension: m, positionDimension: x } = n, $ = S === 0 && k.greaterThan(o[w], t[w]);
  if (!c && !l && !$) return e;
  const I = {
    parent: t,
    stock: i,
    merged: s,
    type: "near",
    hasHeadCut: t.hasHeadCut,
    shapes: []
  }, y = $ && !c ? o[w] : r, E = a != null && a >= t[w], A = E ? a + h : t[w], M = y - (E ? a + f : h + t[w]);
  P("cuts", `[createNearSegment] segment[${t.id}] at (${t.x},${t.y}), posAxis=${w}, cutAxis=${g}, previousCutPosition=${a}, hasPreviousCut=${E}, nearSegmentPosition=${A}`);
  const G = {
    [g]: t[g],
    [m]: t[m],
    [w]: A,
    [x]: M,
    cutDirection: F(p)
  };
  P("cuts", `[createNearSegment] dimensionProps: x=${G.x ?? "N/A"}, y=${G.y ?? "N/A"}, l=${G.l ?? "N/A"}, w=${G.w ?? "N/A"}`);
  const C = _t.call(
    this,
    { ...I, ...G },
    !1
    // Don't reject if identical - we'll filter shapes ourselves
  );
  if (!C) return e;
  if (P("cuts", `[createNearSegment] AFTER creation: segment ${t.id} at (${C.x},${C.y}) ${C.l}x${C.w}`), C.shapes = t.shapes.filter((q) => k.greaterThanOrEqualTo(q.x, C.x) && k.lessThanOrEqualTo(q.x + q.l, C.x + C.l) && k.greaterThanOrEqualTo(q.y, C.y) && k.lessThanOrEqualTo(q.y + q.w, C.y + C.w)), P("cuts", `[createNearSegment] nearSideSegment.shapes.length = ${C.shapes.length}`), C.shapes.length > 0) {
    const q = k.equalTo(C.l, o.l) && k.equalTo(C.w, o.w);
    if (P("cuts", `[createNearSegment] nearSegment: ${C.l}x${C.w}, shape: ${o.l}x${o.w}, identical: ${q}, mergedCut: ${s}`), s || !q) {
      P("cuts", `CUTTING NEAR SIDE SEGMENT [${C.id}] DIR ${C?.cutDirection?.toUpperCase()}`), P("cuts", `[createNearSegment] CALLING makeCuts recursively with segment ${C.l}x${C.w}, segment.shapes.length=${C.shapes?.length}, final=${d}`);
      const K = Be.call(
        this,
        {
          segment: C,
          stock: i,
          cutDirection: C.cutDirection,
          previousCutPosition: a,
          allStockShapes: u,
          final: d,
          headCutCount: e.headCutCount
        }
      );
      P("cuts", `[createNearSegment] RETURNED from makeCuts, childState=${K}`), e = e.with({ headCutCount: K?.headCutCount || e.headCutCount });
    }
  }
  return e.with({ nearSideSegment: C });
}
function Un(e) {
  const {
    segment: t,
    stock: i,
    cutInfo: n,
    cutPosition: r,
    farSideSegmentSize: s,
    halfBladeWidth: o,
    currentStripIndex: a,
    stripParentShapes: c,
    isHeadCut: l,
    allStockShapes: h,
    final: f
  } = e, { cutAxis: u, positionAxis: d, cutDimension: p, positionDimension: S } = n, g = {
    parent: t,
    stock: i,
    offcut: l ? !1 : a === c.length - 1,
    type: "far",
    hasHeadCut: !1,
    shapes: [],
    cutDirection: t.cutDirection
    //[] test
  }, w = {
    [u]: t[u],
    [p]: t[p],
    [d]: r + o,
    [S]: s
  };
  P("cuts", `Creating FAR segment: cutAxis=${u}, cutDim=${p}, posAxis=${d}, posDim=${S}`), P("cuts", `FAR segment props: ${u}=${t[u]}, ${p}=${t[p]}, ${d}=${r + o}, ${S}=${s}`), P("cuts", `FAR segment calculation: cutPosition=${r}, halfBladeWidth=${o}, result=${r + o}`);
  const m = _t.call(this, { ...g, ...w });
  if (!m) return e;
  if (P("cuts", `FAR segment created [${m.id}] at (${m.x},${m.y}) ${m.l}x${m.w}`), P("cuts", `  Parent has ${t.shapes.length} shapes, far segment has ${m.shapes.length} shapes`), P("cuts", `  Cut was at position ${r} (${d}=${r})`), P("cuts", `  Expected offcut dimensions based on stock (1200x1200): should be ${t.l - r}x${t.w} or ${t.l}x${t.w - r}`), l) {
    m.shapes = t.shapes.filter(($) => {
      const I = $[be(u)] + $[F(p)];
      return k.greaterThan(I, r);
    }), P("cuts", `HEAD CUT: Making cuts in far segment [${m.id}] with ${m.shapes.length} shapes`);
    const x = Be.call(
      this,
      {
        segment: m,
        stock: i,
        cutDirection: m.cutDirection,
        previousCutPosition: null,
        // No previous cut in this new segment yet
        allStockShapes: h,
        final: f,
        headCutCount: e.headCutCount
      }
    );
    e = e.with({ headCutCount: x?.headCutCount || e.headCutCount });
  }
  return e.with({ farSideSegment: m });
}
function es(e) {
  if (!this?.config?.guillotine?.allowHeadCuts || !e?.saw?.guillotineOptions?.headCuts) return !1;
  if (yi(e)) return !0;
  if (e.type === "far" || e.type === "root") {
    if (!Vi(e)) return !1;
    if (e.parent.hasHeadCut || yi(e.parent)) return !0;
  }
  return !1;
}
function jn(e) {
  const { segment: t, currentStripParent: i, forceNoHeadCut: n } = e;
  if (n) return e.with({ isHeadCut: !1 });
  let r = !1;
  return es.call(this, t) ? (r = Ki.call(this, t.saw, i, t, e.cutDirection), e.with({ isHeadCut: r })) : e.with({ isHeadCut: !1 });
}
function at({
  parentSegment: e,
  stock: t,
  cutDirection: i,
  cutAxis: n,
  positionAxis: r,
  position: s,
  allStockShapes: o = [],
  headCut: a = !1,
  ptxDummyCut: c = !1,
  skipCollisionCheck: l = !1
}) {
  const h = t.halfBladeWidth, f = Li(r), u = vs.parse({
    stock: t,
    isGuillotine: !0,
    isHead: a,
    ptxData: {
      isDummy: c
    },
    //NOTE: this has changed from cutAxis to positionAxis
    x1: r === "x" ? s : e.x,
    x2: r === "x" ? s : e.x + e.l,
    y1: r === "y" ? s : e.y,
    y2: r === "y" ? s : e.y + e.w
  });
  let d = new yt(u);
  if (!c && e.type === "near" && e.parent.hasHeadCut && (d.ptxData.headCutStrip = !0), !l) {
    const y = o.length ? o : e.shapes;
    if (Ht(
      d,
      t,
      y
    ))
      return P("cuts", `[createCut] REJECTED collision: cut at (${d.x1},${d.y1})-(${d.x2},${d.y2}), segment=(${e.x},${e.y}) ${e.l}x${e.w}`), {
        cut: null,
        farSideSegmentSize: null,
        previousCutPosition: null
      };
  }
  const p = e.cuts.filter((y) => y.dimension === i && k.equalTo(y[n + 1], d[n + 1])), S = p.length ? p[p.length - 1] : null, g = S ? S[r + 1] : null;
  if (s && g && k.equalTo(s, g))
    return {
      cut: null,
      farSideSegmentSize: null,
      previousCutPosition: null
    };
  let w = e[r] + e[f] - (s + h);
  w < 0 && (w = 0);
  const m = k.lessThanOrEqualTo(
    s - h,
    e[r] + e[f]
  ), x = s - h, $ = e[r] + e[f], I = k.greaterThanOrEqualTo(x, $);
  return d.beamTrimL1 || d.beamTrimW1 || t.cutType === "beam" && k.lessThanOrEqualTo(
    s - h,
    e[r] + e[f]
  ) || d.ptxData.isDummy || m && !I ? (d.ptxData.order = H.ptxCuts++, e.cuts.push(d)) : d.stock?.saw?.stockType === "roll" ? e.cuts.push(d) : (d = null, w = null), {
    cut: d,
    farSideSegmentSize: w,
    previousCutPosition: g
  };
}
function _n({
  x: e,
  y: t,
  l: i,
  w: n,
  type: r,
  parent: s,
  rejectIdentical: o
}) {
  return o && k.equalTo(e, s.x) && k.equalTo(t, s.y) && k.equalTo(n, s.w) && k.equalTo(i, s.l) ? "IDENTICAL_TO_PARENT" : i <= 0 || n <= 0 ? "INVALID_DIMENSIONS" : s && !s.autoId ? (console.error("[ERROR] Parent segment has no autoId!"), console.error(`Parent details: type=${s.type}, x=${s.x}, y=${s.y}, l=${s.l}, w=${s.w}`), "MISSING_PARENT_ID") : r === "root" && s ? (console.error("[ERROR] Attempting to create root segment with a parent!"), console.error(`Parent autoId: ${s.autoId}, Parent type: ${s.type}`), "ROOT_WITH_PARENT") : (r === "root" && s?.type !== void 0 && s.type !== "root" && console.error(`[ERROR] Creating root segment with non-root parent of type: ${s.type}`), null);
}
function _t({
  x: e,
  y: t,
  l: i,
  w: n,
  type: r,
  parent: s,
  stock: o,
  offcut: a = !1,
  merged: c = !1,
  cutDirection: l = null
}, h = !0) {
  if (_n({ x: e, y: t, l: i, w: n, type: r, parent: s, rejectIdentical: h })) return;
  let u;
  H.segments++;
  let d = s.phase + 1;
  s.hasHeadCut && (s.isInitial || (s.phase = 0), d = s.phase + 1);
  try {
    const S = H.segments.toString();
    if (u = new pe({
      x: e,
      y: t,
      l: i,
      w: n,
      t: typeof o.t == "string" ? parseFloat(o.t) : o.t,
      id: S,
      phase: d,
      parent: s,
      stock: o,
      offcut: a,
      merged: c,
      type: r,
      grain: o.grain,
      material: o.material,
      saw: o.saw,
      cutDirection: l || F(s.cutDirection)
    }), s && s.autoId === u.autoId)
      throw console.error(`[ERROR] Segment created with itself as parent! autoId: ${u.id}`), new Error("Segment cannot be its own parent");
  } catch (S) {
    P("info", `issue creating segment ${S.message}`);
    return;
  }
  const p = s.shapes.filter((S) => S.added ? k.greaterThanOrEqualTo(S.x, u.x) && k.lessThanOrEqualTo(S.x + S.l, u.x + u.l) && k.greaterThanOrEqualTo(S.y, u.y) && k.lessThanOrEqualTo(S.y + S.w, u.y + u.w) : S.willItFit(u));
  return u.shapes = p, u;
}
function Yn(e, t = !1, i) {
  t && P("cuts", `------------------- ANALYSE SEGMENTS ${e.id} -------------------`);
  const n = [], r = [], s = [];
  let o = 0, a = 0;
  const c = /* @__PURE__ */ new Set(), l = (h, f = 0) => {
    if (!h) return f;
    if (c.has(h.autoId))
      return console.error(`[CIRCULAR REFERENCE DETECTED] Segment ${h.id} is already in the traversal path!`), console.error(`Traversal path: ${Array.from(c).join(" -> ")} -> ${h.id}`), console.error(`Segment details: autoId=${h.id}, parent=${h.parent?.id}, children=[${h.children?.map((d) => d.autoId).join(", ")}]`), f;
    c.add(h.autoId);
    let u = f;
    n.push(h), (h.offcut === !0 || !h.shapes?.length) && s.push(h);
    for (let d = 0; d < h.cuts.length; d++) {
      const p = h.cuts[d];
      if (p) {
        if (p.guillotineState.phase = h.phase, p.isHead ? (p.ptxData.function = 0, o++) : d > 0 && r[d - 1].isHead ? p.dimension === "l" ? p.ptxData.function = 1 : p.dimension === "w" && (p.ptxData.function = 2) : (p.ptxData.function = p.guillotineState.phase + 1, p.ptxData.headCutStrip && p.ptxData.function--), p.isTrim && a++, t)
          if (p.isHead) {
            let S = 0;
            In(h, () => S++), u = S, P("cuts", `[${h.id}] reset cut order to ${u}`);
          } else d > 0 && h.cuts[d - 1].isHead && u++;
        p.guillotineState.order = u, p.guillotineState.segmentCutOrder = d, p.guillotineState.parentSegmentID = h?.autoId || "root", t && Xn(p, h), r.push(p), t && P("cuts", `[${h.id}] {${u}} ${p.x1}|${p.x2}|${p.y1}|${p.y2}`), u++;
      }
    }
    if (h.children && h.children.length > 0) {
      const d = h.children.filter((p) => p.autoId === h.autoId ? (console.error(`[SELF-REFERENCE FOUND] Removing segment ${h.id} from its own children array`), console.error(`Segment type: ${h.type}, Phase: ${h.phase}`), console.error(`Number of children: ${h.children.length}`), console.error(`Children autoIds: ${h.children.map((S) => S.autoId).join(", ")}`), !1) : !0);
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
            const S = i + r.filter((g) => !g.isHead && !g.ptxData.isDummy).length;
            u = l(p, S);
          } else
            u = l(p, u);
        }
    }
    return c.delete(h.autoId), u;
  };
  return l(e), t && (P("cuts", `Segments processed: ${n.length}`), P("cuts", `Cuts processed: ${r.length}`), P("cuts", `Trim cuts found: ${a}`), P("cuts", `Head cuts found: ${o}/${i}`), P("cuts", `Offcuts identified: ${s.length}`), P("cuts", `ROOT segment [${e.id}] has ${e.children?.length || 0} children`), P("cuts", "------------------- END ANALYSE SEGMENTS -------------------")), [e, r, s];
}
function Xn(e, t) {
  const i = {
    top: null,
    bottom: null,
    left: null,
    right: null
  }, n = e.stock.halfBladeWidth;
  if (e.beamTrimL1 || e.beamTrimW1)
    e.beamTrimL1 ? i.left = e.stock.trim.l1 : e.beamTrimW1 && (i.bottom = e.stock.trim.w1);
  else {
    const r = t?.children, s = e.stock.cutType === "beam" && t.cuts[0].isTrim ? e.guillotineState.segmentCutOrder - 1 : e.guillotineState.segmentCutOrder;
    if (r?.length) {
      const o = r.filter((a) => a.type === "near")[s];
      o && (e.dimension === "l" ? (i.bottom = e.y1 - o.y - n, i.top = t.y + t.w - (e.y1 + n)) : e.dimension === "w" && (i.left = e.x1 - o.x - n, i.right = t.x + t.l - (e.x1 + n)));
    }
  }
  e.distances = i;
}
function Vn(e, t) {
  return `${t}${e}`;
}
function Kn({
  segment: e,
  stock: t,
  cutDirection: i,
  cutAxis: n,
  positionAxis: r,
  positionDimension: s,
  position: o,
  allStockShapes: a,
  halfBladeWidth: c
}) {
  if (t.cutType !== "beam" || !t.hasTrim || s === "w" && e.phase > 1)
    return;
  const l = Vn(o, i);
  if (!t.trim?.[l]) return;
  const h = t.trimmed ? -c : t.trim[l] - c, f = t.trimmed ? -c : t.trim[l] - c;
  if (v([() => {
    b(h, `trim cut ${o} in the wrong position`).to.equal(f);
  }]), h !== f)
    return;
  const { cut: u } = at({
    parentSegment: e,
    stock: t,
    cutDirection: i,
    cutAxis: n,
    positionAxis: r,
    position: h,
    allStockShapes: a,
    skipCollisionCheck: !0
  });
  u && (u.isTrim = !0, u.guillotineState.parentSegmentID = e.autoId, u.ptxData || (u.ptxData = {}), u.ptxData.function = e.phase, u.ptxData.isDummy = !1, u.dimension === "l" && (u.beamTrimL1 = !0), u.dimension === "w" && (u.beamTrimW1 = !0), u.dimension === "w" ? new pe({
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
  }) : u.dimension === "l" && new pe({
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
function ts(e, t, i = null, n) {
  let r = null;
  const s = [];
  if (!e || !e.length) return {
    allShapesCut: !0,
    uncutShape: null,
    uncutShapeAutoIds: []
  };
  const o = e.every((a) => {
    if (!a.added || !a.stock || O(a) && a.group.inGroup && !n?.ignoreGroupMembership) return !0;
    const c = a.stock.halfBladeWidth;
    let l = null;
    i ? l = i.getSides() : l = a.stock.getSides();
    const h = Object.values(a.getSides()).every((f) => {
      const u = () => {
        switch (f.type) {
          case "top": {
            const g = a.y + a.w + c;
            return t.some((m) => m.dimension === "l" && k.equalTo(m.y1, g) && k.lessThanOrEqualTo(m.x1, a.x) && k.greaterThanOrEqualTo(m.x2, a.x + a.l));
          }
          case "bottom": {
            const g = a.y - c;
            return t.some((m) => m.dimension === "l" && k.equalTo(m.y1, g) && k.lessThanOrEqualTo(m.x1, a.x) && k.greaterThanOrEqualTo(m.x2, a.x + a.l));
          }
          case "left": {
            const g = a.x - c;
            return t.some((m) => m.dimension === "w" && k.equalTo(m.x1, g) && k.lessThanOrEqualTo(m.y1, a.y) && k.greaterThanOrEqualTo(m.y2, a.y + a.w));
          }
          case "right": {
            const g = a.x + a.l + c;
            return t.some((m) => m.dimension === "w" && k.equalTo(m.x1, g) && k.lessThanOrEqualTo(m.y1, a.y) && k.greaterThanOrEqualTo(m.y2, a.y + a.w));
          }
        }
      }, d = () => l.some((g) => {
        switch (f.type) {
          case "top":
            return g.dimension === "l" && k.equalTo(g.y1, a.y + a.w) && k.lessThanOrEqualTo(g.x1, a.x) && k.greaterThanOrEqualTo(g.x2, a.x + a.l);
          case "bottom":
            return g.dimension === "l" && k.equalTo(g.y1, a.y) && k.lessThanOrEqualTo(g.x1, a.x) && k.greaterThanOrEqualTo(g.x2, a.x + a.l);
          case "left":
            return g.dimension === "w" && k.equalTo(g.x1, a.x) && k.lessThanOrEqualTo(g.y1, a.y) && k.greaterThanOrEqualTo(g.y2, a.y + a.w);
          case "right":
            return g.dimension === "w" && k.equalTo(g.x1, a.x + a.l) && k.lessThanOrEqualTo(g.y1, a.y) && k.greaterThanOrEqualTo(g.y2, a.y + a.w);
        }
      }), p = u(), S = d();
      return p || S;
    });
    return h || (r = a, s.push(a.autoId)), h;
  });
  return o && (r = null, s.length = 0), { allShapesCut: o, uncutShape: r, uncutShapeAutoIds: s };
}
function Mt(e) {
  return typeof e?.guillotineState?.myPhase == "number";
}
function qt(e) {
  return e.type === "root" || e[Ae(e.stock.cutPreference)] === 0;
}
function Ft(e, t) {
  return e?.guillotineState?.myPhase === t;
}
function Qn(e) {
  const t = Yt(e);
  if (!t) return xi(e, 1);
  const n = le(t) === "l" ? "w" : "l", r = is(e, t, n);
  xi(e, r);
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
function le(e) {
  return e?.guillotineState ? e.guillotineState.myStripDirection : null;
}
function st(e, t) {
  if (e?.guillotineState) {
    if (typeof e.guillotineState.setStripDirection != "function") {
      const i = e.guillotineState || {};
      e.guillotineState = new je(i);
    }
    e.guillotineState.setStripDirection(t);
  }
}
function Ii(e, t) {
  if (j(e)) {
    Jn(t);
    const i = t?.bestScore?.score;
    i && ["currentStripDirection", "myStripDirection", "keyStripDirection", "myPhase"].forEach((r) => {
      i[r] && (t.guillotineState[r] = i[r]);
    });
  }
}
function Jn(e) {
  const t = e.bestScore;
  t?.myStripParent && $i(e, t.myStripParent), D(e) && e.shapes.forEach((i) => $i(i, Yt(i)));
}
function Zn(e, t) {
  let i = null, n = t.x.get(e.x) || [];
  n = n.filter((a) => {
    const c = a.guillotineState.myStripParent;
    return c && !c.guillotineState?.firstShape ? Ot(e, c, "y") : !0;
  }), n.sort((a, c) => a.x - c.x);
  let r = t.y.get(e.y) || [];
  r = r.filter((a) => {
    const c = a.guillotineState.myStripParent;
    return c && !c.guillotineState?.firstShape ? Ot(e, c, "x") : !0;
  }), r.sort((a, c) => a.y - c.y);
  const s = n.length ? n[0] : null, o = r.length ? r[0] : null;
  return s && o ? i = s.placementOrder > o.placementOrder ? s : o : i = s || o, i;
}
function Gt(e, t) {
  e.x.has(t.x) ? e.x.get(t.x).push(t) : e.x.set(t.x, [t]), e.y.has(t.y) ? e.y.get(t.y).push(t) : e.y.set(t.y, [t]);
}
function er(e, t) {
  const i = e.x.get(t.x) ?? [], n = i.indexOf(t);
  n !== -1 && (i.splice(n, 1), i.length === 0 && e.x.delete(t.x));
  const r = e.y.get(t.y) ?? [], s = r.indexOf(t);
  s !== -1 && (r.splice(s, 1), r.length === 0 && e.y.delete(t.y));
}
function tr(e, t = !0) {
  const i = [], n = /* @__PURE__ */ new Set();
  for (const r of e.shapes)
    if (D(r)) {
      const s = r.type === "position", o = J(r);
      if (s || o && t) {
        if (!n.has(r.autoId)) {
          i.push(r), n.add(r.autoId);
          for (const c of r.shapes || [])
            n.add(c.autoId);
        }
      } else if (r.added && e.stock) {
        r.placeMyShapes(e.stock);
        for (const c of r.shapes)
          n.has(c.autoId) || (c.group.addedAsGroup = r, i.push(c), n.add(c.autoId));
      }
    } else
      n.has(r.autoId) || (i.push(r), n.add(r.autoId));
  return e.shapes = i, v([
    () => b(ee(e.shapes)).to.be.false,
    () => Oi(e.shapes, "removeGroupsFromSegment")
  ]), e;
}
function ss(e, t) {
  if (e.children && Array.isArray(e.children)) {
    if (t(e) === !1) return;
    for (const i of e.children)
      ss(i, t);
  }
}
function ir(e, t) {
  const i = we(e, !1);
  for (const n of t) {
    const r = i.filter((c) => c.stockLock.includes(n.parentId));
    if (!r.length) continue;
    const s = r.map((c) => c.area), o = s.reduce((c, l) => c + l, 0) / r.length;
    if (!(k.calculateCoefficientOfVariation(s) < this.config.priority.variationThreshold))
      for (const c of r) {
        c.priority || (c.priority = {});
        const l = sr(c, n, o);
        c.priority[n.parentId] = l, e.filter((f) => f.id !== c.id && f.parentId === c.parentId).forEach((f) => {
          f.priority || (f.priority = {}), f.priority[n.parentId] = l;
        });
      }
  }
}
function sr(e, t, i) {
  if (e.isExactFit(t) || e.area >= t.area * 0.9 || e.longSide >= t.longSide * 0.9)
    return 1;
  const n = e.area, r = t.area, s = n / r;
  return n > i ? s : 0;
}
function nr(e, t) {
  return e.reduce((i, n) => {
    const r = n.getPriority(t), s = i.getPriority(t);
    return r > s ? n : i;
  });
}
function rr(e, t, i = null) {
  let n;
  if (t?.length) {
    if (!t.length) return 1;
    const r = t.reduce((s, o) => s.area > o.area ? s : o);
    n = e.area / r.area;
  } else i && (n = e.area / i.area);
  if (n > 1) return 1;
  if (!n)
    throw new Error("no area score found");
  return n;
}
function ns(e, t, i = "y") {
  if (!e || !t || e[i] === void 0 || !t.area || t.area === 0) return 0;
  const n = be(i), r = n === "y" ? "w" : "l", s = t[i] ?? 0, o = t[n] ?? 0, l = (e[i] - s) * t[r] / t.area, u = (e[n] - o) / t[r] * t.aspect * 0.01;
  return 1 - (l + u);
}
function rs(e, t, i = "y") {
  if (!e || !t) return 0;
  "grain" in t && t.grain === "w" && (i = be(i));
  const n = i === "y" ? "w" : "l";
  return (e[i] + e[n]) / t[n];
}
function or(e, t, i) {
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
function ar(e, t, i) {
  let n = 0, r = 0;
  if (!e || !t || !i)
    return {
      possibleAlignments: n,
      positiveAlignments: r
    };
  if (e.autoId === t.autoId)
    return {
      possibleAlignments: 0,
      positiveAlignments: 0
    };
  const s = (o, a) => {
    const c = or(o, a, i);
    n += c.length, r += c.reduce(
      (l, h) => h ? l + 1 : l,
      0
    );
  };
  return D(e) ? e.shapes.forEach((o) => {
    D(t) ? t.shapes.forEach((a) => {
      s(o, a);
    }) : s(o, t);
  }) : D(t) ? t.shapes.forEach((o) => {
    s(e, o);
  }) : s(e, t), { positiveAlignments: r, possibleAlignments: n };
}
function lr(e, t, i) {
  if (!e || !t || !i)
    return [!1, !1, !1, !1];
  if (e.autoId === t.autoId)
    return [!1, !1, !1, !1];
  const n = e.getMinSpacing(i.saw), r = e.x, s = e.x + e.l, o = e.y + e.w, a = e.y, c = t.x, l = t.x + t.l, h = t.y + t.w, f = t.y, u = () => r === l + n && (a >= f && a < h || o <= h && o > f), d = () => s + n === c && (a >= f && a < h || o <= h && o > f), p = () => a === h + n && (r >= c && r < l || s <= l && s > c), S = () => a + n === f && (r >= c && r < l || s <= l && s > c);
  return [
    u(),
    d(),
    p(),
    S()
  ];
}
function cr(e, t) {
  return e.l === t.l && e.x === t.x;
}
function ur(e, t) {
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
    contact: r = !0,
    alignment: s = !0,
    similarDimensions: o = !0,
    cohesion: a = !0
  } = n;
  let c = [];
  r && (c = lr(e, t, i));
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
      neighbour: t,
      neighbours: l
    };
  const h = ["lr", "rl", "bt", "tb"], f = c.findIndex(Boolean), u = h[f];
  if (!u) throw new Error("no contact type found");
  let d = null, p = null, S = 0;
  if (a && u && (d = hr(e, t, u)), s && (p = ar(e, t, i)), o) {
    const g = u === "rl" || u === "lr", w = u === "tb" || u === "bt", m = ur(e, t), x = cr(e, t);
    (g && m || w && x) && (S = x && m ? 1 : 0.5);
  }
  return {
    contactResult: c,
    cohesion: d,
    alignment: p,
    similarDimensions: S,
    type: u,
    neighbour: t,
    neighbours: l
  };
}
function fr(e, t) {
  if (!t)
    throw new Error(`edge - no stock defined for shape ${e.id}`);
  const i = t.bladeWidth, n = e.w / t.w, r = e.l / t.l;
  let s = 0, o = t.l, a = 0, c = t.w;
  return !t.trimmed && t.hasTrim && (s = t.trim.w1, o = t.l - t.trim.w2, a = t.trim.l1, c = t.w - t.trim.l2), [
    // 0 left
    e.x - i <= s ? n : 0,
    // 1 right
    e.x + e.l + i >= o ? n : 0,
    // 2 bottom
    e.y - i <= a ? r : 0,
    // 3 top
    e.y + e.w + i >= c ? r : 0
  ].reduce((f, u) => f + u, 0);
}
function hr(e, t, i) {
  if (!e || !t || !i) return 0;
  const n = dr(e, t), r = ki(e), s = ki(t), o = r + s, a = Math.max(n.l * n.w, o), c = Math.min(1, Math.max(0, o / a)), l = Math.min(1, Math.max(
    0,
    pr(e, t, i) || 0
  )), h = c * 0.7 + l * 0.3;
  return Math.min(1, Math.max(0, h));
}
function dr(e, t) {
  const i = nt(e), n = nt(t), r = Math.min(i.x, n.x), s = Math.min(i.y, n.y), o = Math.max(i.x + i.l, n.x + n.l), a = Math.max(i.y + i.w, n.y + n.w);
  return {
    x: r,
    y: s,
    l: o - r,
    w: a - s
  };
}
function nt(e) {
  if (D(e)) {
    let t = 1 / 0, i = 1 / 0, n = -1 / 0, r = -1 / 0;
    return e.shapes.forEach((s) => {
      t = Math.min(t, s.x), i = Math.min(i, s.y), n = Math.max(n, s.x + s.l), r = Math.max(r, s.y + s.w);
    }), {
      x: t,
      y: i,
      l: n - t,
      w: r - i
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
function pr(e, t, i) {
  const n = nt(e), r = nt(t);
  if (i === "lr" || i === "rl") {
    const s = Math.max(n.w, r.w);
    if (s === 0) return 0;
    const o = Math.min(n.w, r.w) / s;
    return Math.max(0, o);
  }
  if (i === "tb" || i === "bt") {
    const s = Math.max(n.l, r.l);
    if (s === 0) return 0;
    const o = Math.min(n.l, r.l) / s;
    return Math.max(0, o);
  }
  return 0;
}
async function gr(e, t, i, n) {
  return await Te.runSpecificStrategy.call(this, {
    shapes: e,
    container: t,
    firstShape: i,
    firstShapeRotation: n
  });
}
function Ti(e, t, i, n = null, r = null, s = null, o = null) {
  if (!n)
    throw new Error("shapePosition was not passed any placed shapes");
  if (!r)
    throw new Error("shapePosition was not passed any unplaced shapes");
  j(t) ? mr(
    e,
    t,
    i,
    n,
    o
    // tidy
  ) : as(
    e,
    t,
    i,
    n,
    s
  );
}
function mr(e, t, i = null, n = [], r = null) {
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
  }, o = t.cutPreference, a = t.cutDirection, c = t.getStock.bladeWidth, { cutAxis: l } = Yi(a), h = Zn(e, r);
  if (!h) return !1;
  const f = le(h);
  let u = f;
  const d = f === "l" ? "w" : "l";
  h[d] !== e[d] && (u = F(f));
  const p = is(e, h, d);
  if (t.saw.guillotineOptions.maxPhase && p > t.saw.guillotineOptions.maxPhase) return !1;
  const S = le(h) ?? t.cutDirection;
  if (!S) throw new Error("keyDimension is not defined");
  const g = Yt(h);
  if (g) {
    const I = be(Ae(le(g))), y = Ot(e, g, I);
    if (g.guillotineState.myPhase <= 2 && !y) return !1;
  }
  let w = !1;
  t.firstShape && (w = e[l] > t.firstShape[l]);
  const m = {
    lr: [],
    bt: [],
    tb: [],
    rl: []
  };
  for (const I of n) {
    const y = os(
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
    y.type && (m[y.type].push(I), "cohesion" in s && i.cohesion && w && (s.cohesion += y.cohesion), "similarDimensions" in s && i.similarDimensions && (s.similarDimensions += y?.similarDimensions ? y.similarDimensions : 0), "fenceConsistency" in s && i.fenceConsistency && (o === "w" ? y.type === "lr" && y.neighbour.l === e.l && y.neighbour.y === e.y && (s.fenceConsistency = 1) : o === "l" && y.type === "bt" && y.neighbour.w === e.w && y.neighbour.x === e.x && (s.fenceConsistency = 1)));
  }
  if (t.cutDirection) {
    const I = t.cutDirection;
    if (I === "w") {
      const y = e.y === t.y, E = m.bt && m.bt.length > 0;
      if (!y && !E)
        return !1;
    } else if (I === "l") {
      const y = e.x === t.x, E = m.lr && m.lr.length > 0;
      if (!y && !E)
        return !1;
    }
  }
  if ("exactStripFill" in s && i.exactStripFill && h) {
    const I = F(le(h)), y = e[I] + c;
    s.exactStripFill = y >= h[I] && y < h[I] + c ? 1 : 0;
  }
  if ("compression" in s && i.compression) {
    const I = S === "l" ? "y" : "x";
    s.compression = ns(
      e,
      t,
      I
    );
  }
  if ("fill" in s && i.fill) {
    const I = S === "l" ? "y" : "x";
    s.fill = rs(e, t, I);
  }
  if (s.cohesion = Math.max(0, s.cohesion), "sameStripBonus" in s && i.sameStripBonus && t.firstShape) {
    const I = le(h);
    if (!w)
      s.sameStripBonus = 0;
    else if (I === "w" && m?.bt?.length) {
      const y = Ce(m.bt, "x"), E = y.x + y.l;
      e.x + e.l > E && (s.sameStripBonus = 0, s.cohesion = 0);
    } else if (I === "l" && m?.lr?.length) {
      const y = Ce(m.lr, "y"), E = y.y + y.w;
      e.y + e.w > E && (s.sameStripBonus = 0, s.cohesion = 0);
    } else
      s.sameStripBonus = 1;
  }
  if (i.aspectRatio) {
    const I = e.aspect, y = le(h);
    I < 0.1 ? e[y] > e[F(y)] && (s.aspectRatio = 1) : s.aspectRatio = 0;
  }
  const x = { ...s };
  Object.keys(s).forEach((I) => {
    if (typeof s[I] == "number") {
      const y = s[I];
      y < 0 ? x[I] = y : x[I] = i[I] ? y * i[I] : 0;
    }
  }), e.score = x;
  let $ = 0;
  for (const I of Object.values(e.score))
    typeof I == "number" && ($ += I);
  if (e.score.total = $, e.score.total < 0 && (e.score.total = 0), isNaN(e.score.total)) throw new Error("score is not a number");
  return e.score.cutDirection = a, e.score.myStripParent = h, e.score.myStripDirection = u, e.score.myPhase = p, e.score.total > (e?.bestScore?.total || 0) && e.setBestScore(e), !0;
}
function as(e, t, i, n, r) {
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
    !t.trimmed && t.hasTrim && (f = t.trim.w1, u = t.trim.l1), (e.x === f || e.y === u) && (s.edge = fr(e, t));
  }
  if ("fill" in s && i.fill) {
    const f = t?.saw?.efficiencyOptions?.primaryCompression ? Ae(t?.saw?.efficiencyOptions?.primaryCompression) : "y";
    s.fill = rs(
      e,
      t,
      f
    );
  }
  if ("compression" in s && i.compression) {
    const f = t?.saw?.efficiencyOptions?.primaryCompression ? Ae(t?.saw?.efficiencyOptions?.primaryCompression) : "y";
    s.compression = ns(
      e,
      t,
      f
    );
  }
  let o = 0, a = 0;
  const c = {
    lr: !1,
    rl: !1,
    bt: !1,
    tb: !1
  };
  for (const f of n) {
    const u = os(
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
    u.type && (c[u.type] = !0, i.alignment && u.alignment && (a += u.alignment.positiveAlignments, o += u.alignment.possibleAlignments), i.cohesion && (s.cohesion += u.cohesion), i.similarDimensions && (s.similarDimensions += u?.similarDimensions ? u.similarDimensions : 0));
  }
  s.similarDimensions /= 4, o === 0 ? s.alignment = 0 : s.alignment = a / o, i.exactFit && (e.l === t.l || e.w === t.w) && (s.exactFit = 1), i.area && (s.area = rr(e, n, t));
  const l = { ...s };
  Object.keys(s).forEach((f) => {
    if (typeof s[f] == "number") {
      const u = s[f];
      l[f] = i[f] ? u * i[f] : 0;
    }
  }), e.score = l;
  let h = 0;
  for (const f of Object.values(e.score))
    typeof f == "number" && (h += f);
  if (e.score.total = h, isNaN(e.score.total))
    throw new Error("thisShape.score.total is not a number: " + JSON.stringify(e.score));
  e.score?.total > (e?.bestScore?.total || 0) && e.setBestScore(e, r);
}
function ye(e, t, i) {
  const n = this.shapeList.reduce(
    (C, q) => q.added ? C : ++C,
    0
  );
  let r, s, o;
  const a = t.getStock;
  if (!a) return !1;
  const c = e, l = _(t) ? oe(c, a) : e.filter((C) => C.added);
  let h;
  l.length && (h = nr(l, a)), h && !h.getPriority(a) && (h = null);
  const f = l.length, u = Math.max(...l.map((C) => C.x + C.l)), d = Math.max(...l.map((C) => C.y + C.w));
  let p = 0, S = null, g = null, w;
  if (i || (i = e.find((C) => C.x === (t.x || 0) && C.y === (t.y || 0))), !i) return !1;
  const m = i.area;
  let x = null;
  const $ = t.area, I = l.reduce((C, q) => C + q.area, 0);
  if (_(t)) {
    if (t.cutType === "efficiency" ? (w = t.primaryCompression ?? "w", p = ft(
      l,
      w,
      a.bladeWidth
    ), x = i?.bestScore?.total, p = p / t[w === "l" ? "l" : "w"]) : (w = t.cutPreference === "l" ? "x" : "y", p = ft(
      l,
      w,
      a.bladeWidth
    ), p = p / t[w === "x" ? "l" : "w"]), t.cutType === "guillotine" && (r = e.filter((C) => C.added && Xt(C) === 1).length), o = I / $, Se() && v([() => b(o).to.be.lessThanOrEqual(1)]), t?.saw?.stockType === "roll") {
      const C = Ce(l, "x");
      s = C.x + C.l;
    }
  } else if (j(t)) {
    w = a.cutPreference === "l" ? "x" : "y", p = ft(
      l,
      w,
      a.bladeWidth
    ), p = p / t[w === "x" ? "w" : "l"];
    const C = F(a.cutPreference), q = C === "l" ? "x" : "y";
    if (S = a[C] - (i[C] + i[q] + a.bladeWidth), g = i[C], t.cutPreference === "flex")
      throw new Error("cut preference is set to flex, it should be l or w at this point");
    o = I / $;
  } else
    o = I / $;
  const y = l.reduce((C, q) => C + (q?.bestScore?.total ?? 0), 0), E = V(e, t).length + f, A = V(e, a).length + f, M = l.map((C) => C.compress());
  return {
    type: this.tidyStrategy ? "tidy" : "algo",
    stockID: a.id,
    stock: a,
    container: t,
    firstShape: i,
    firstShapeRotation: i.rot,
    topPriorityShape: h ? h.id : null,
    cutPreference: a.cutPreference,
    cutType: a.saw.cutType,
    segmentCutDirection: j(t) ? t.cutDirection : null,
    // Result contains individual shapes (groups have already called placeMyShapes)
    shapes: M,
    score: {
      efficiency: o,
      totalShapeArea: I,
      totalShapesPlaced: f,
      totalShapeScore: y,
      firstRowLength: p,
      // firstShapeFill,
      firstShapeArea: m,
      firstShapeScore: x,
      containerAvailableShapes: E,
      stockAvailableShapes: A,
      totalUnplacedShapes: n,
      rollLength: s || null,
      maxX: u,
      maxY: d,
      stripShapes: r || null,
      stripSize: g || null,
      remainingStripSpace: S || null,
      uniqueStock: this.uniqueStock.length
    }
  };
}
function Sr(e, t, i = "sheet") {
  if (e && e?.length) {
    if (e.length === 1) return e[0];
    switch (e = e.filter((n) => n.score?.efficiency), i) {
      case "sheet":
        switch (t) {
          case "tidy":
            e.sort(wr.bind(this));
            break;
          case "strip":
            e.sort(Ci.bind(this));
            break;
          case "guillotine":
          case "beam":
            e.sort($r.bind(this));
            break;
          default:
            e.sort(xr.bind(this));
            break;
        }
        break;
      case "linear":
        e.sort(yr);
        break;
      case "roll":
        switch (t) {
          case "guillotine":
          case "strip":
            e.find((n) => n.score.containerAvailableShapes === 0) && (e = e.filter((n) => n.score.containerAvailableShapes === 0)), e.sort(Ci);
            break;
          case "efficiency": {
            e.sort(br);
            break;
          }
        }
        break;
    }
    return e[0];
  }
}
function yr(e, t) {
  return t.score.efficiency - e.score.efficiency;
}
function rt(e, t) {
  const {
    totalShapesPlaced: i = 0,
    stockAvailableShapes: n = 1,
    containerAvailableShapes: r = 0,
    efficiency: s = 0
  } = e.score, a = i / (n || 1), c = t === "stock" ? 0.65 : 0.35, l = 1 - c;
  let h = a * c + s * l;
  return (t === "stock" && r === 0 || i === n) && (h += 0.15), h;
}
function Ci(e, t) {
  if (v([() => b(e.score).to.exist, () => b(t.score).to.exist]), !e.score || !t.score) return 0;
  const i = e.score.totalShapesPlaced === e.score.stockAvailableShapes, n = t.score.totalShapesPlaced === t.score.stockAvailableShapes;
  if (i && !n) return -1;
  if (n && !i) return 1;
  const r = rt(e, "strip"), s = rt(t, "strip");
  return r > s ? -1 : s > r ? 1 : 0;
}
function wr(e, t) {
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
function br(e, t) {
  return e.score.efficiency > t.score.efficiency ? -1 : e.score.efficiency < t.score.efficiency ? 1 : e.type !== "evo" && t.type === "evo" ? -1 : e.type === "evo" && t.type !== "evo" ? 1 : e.shapes?.length < t.shapes?.length ? -1 : e.shapes?.length > t.shapes?.length ? 1 : e.score.totalShapeScore > t.score.totalShapeScore ? -1 : e.score.totalShapeScore < t.score.totalShapeScore ? 1 : me.ID(e.stock, t.stock);
}
function $r(e, t) {
  const i = rt(e, "stock"), n = rt(t, "stock");
  if (i > n) return -1;
  if (n > i || e.type === "allocated strips" && t.type !== "allocated strips") return 1;
  if (e.type !== "allocated strips" && t.type === "allocated strips") return -1;
  if ((e.score.containerAvailableShapes === 0 || t.score.containerAvailableShapes === 0) && e.cutPreference === t.cutPreference) {
    const s = e.cutPreference === "l" ? "maxY" : "maxX";
    if (e.score[s] < t.score[s]) return -1;
    if (e.score[s] > t.score[s]) return 1;
    if (e.score.stripShapes < t.score.stripShapes) return -1;
    if (e.score.stripShapes > t.score.stripShapes) return 1;
  }
  const r = ls(e, t);
  return r !== 0 ? r : e.score.firstShapeArea > t.score.firstShapeArea ? -1 : e.score.firstShapeArea < t.score.firstShapeArea ? 1 : me.ID(e.stock, t.stock);
}
function xr(e, t) {
  const i = e.score?.totalUnplacedShapes, n = t.score?.totalUnplacedShapes;
  if (e.stock.id !== t.stock.id && (i === 0 || n === 0) && !(i === 0 && n === 0)) {
    const s = i === 0 ? e : t, o = i === 0 ? t : e, a = s.stock, c = o.stock, l = a.area - s.score.totalShapeArea, h = c.area;
    return s.score.totalShapeArea - o.score.totalShapeArea < h && h < l ? c.id === e.stock.id ? -1 : 1 : c.id === e.stock.id ? 1 : -1;
  }
  if (e.score[this.config.successMetric] > t.score[this.config.successMetric])
    return -1;
  if (e.score[this.config.successMetric] < t.score[this.config.successMetric])
    return 1;
  const r = ls(e, t);
  return r !== 0 ? r : e.type !== "evo" && t.type === "evo" ? -1 : e.type === "evo" && t.type !== "evo" ? 1 : e.score.firstShapeArea > t.score.firstShapeArea ? -1 : e.score.firstShapeArea < t.score.firstShapeArea ? 1 : e.score.totalShapeScore > t.score.totalShapeScore ? -1 : e.score.totalShapeScore < t.score.totalShapeScore ? 1 : me.ID(e.stock, t.stock);
}
function cs(e) {
  if (!e) return e;
  const t = { ...e };
  return e.stock && (t.stock = e.stock), e.resultKey !== "bestPartialResult" && e.firstShape && "toData" in e.firstShape && (t.firstShape = e.firstShape.toData(Le.Compressed)), e.shapes?.length && (t.shapes = e.shapes.map((i) => i && "toData" in i ? i.toData(Le.Compressed) : i)), "stripShapes" in e && e.stripShapes?.length && (t.stripShapes = e.stripShapes.map((i) => i && "toData" in i ? i.toData(Le.Compressed) : i)), "root" in e && e.root && "toData" in e.root && (t.root = e.root.toData(Le.Compressed)), "container" in e && e.container && "toData" in e.container && (_(e.container) ? t.container = e.container : t.container = e.container.toData(Le.Compressed)), t;
}
function Vt(e, t) {
  return e?.stock ? _(e.stock) ? e.stock : t.find((i) => i.autoId === e.stock.autoId) || null : null;
}
async function re(e, t = null) {
  if (e.score?.efficiency === 0 && e.shapes?.length > 0) {
    const o = e.shapes.filter((a) => a.added);
    if (o.length > 0) {
      const a = o.length / e.shapes.length;
      e.score.efficiency = a;
    }
  }
  this?.job && this.job.updateProgress({
    socketId: this.socketId,
    type: "algo",
    message: "result"
  });
  const i = t === "strip" ? "bestPartialResult" : "bestResult";
  e.resultKey = i;
  const n = this[i], r = e?.firstShape;
  if (Se()) {
    const o = e.score.efficiency, a = D(r) ? `${r.id}: [${r?.shapes?.map((l) => l.parentId).join(", ")}]` : r?.id, c = [
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
        value: e?.stripShapeBatch ?? "N/A"
      },
      {
        property: "Shapes",
        value: e?.shapes?.map((l) => l.id).join() ?? "N/A"
      }
    ];
    T("results", `Recording ${i}`, null, c);
  }
  let s = e;
  if (n && (s = Sr.call(this, [e, n], t || e.stock.cutType, e.stock?.saw?.stockType), s || (T("results", "WARNING: findWinner returned undefined, using current result as winner"), s = e), T("results", `${s.type} winner for stock ${s.stock.id} eff. ${s.score.efficiency}, firstShape [${r?.id || "N/A"}], rot ${r?.rot || "N/A"}, batch ${s?.stripShapeBatch ?? "N/A"}`)), !n || !s?.processed) {
    e.processed = !0;
    const o = cs(s);
    this[i] = o;
  }
  Ir(s.shapes, s.stock);
}
function Ir(e, t) {
  if (!e?.length) return;
  const i = e.filter((n) => D(n) && n.type !== "user");
  v([
    () => b(i.every((n) => D(n))).toBe(!0),
    () => b(i.every((n) => n.type !== "user")).toBe(!0)
  ], "expandTemporaryGroups: All filtered groups should be temporary (non-user) groups");
  for (const n of i) {
    const r = n.shapes || [], s = n.type;
    if (n.added)
      try {
        n.placeMyShapes(t), v([
          () => b(r.every((o) => o.group?.addedAsGroup === n)).toBe(!0)
        ], `expandTemporaryGroups: All children of ${s} group should have addedAsGroup reference`);
      } catch (o) {
        T("errors", `Error placing shapes for temporary group ${n.id} during expansion: ${o.message}`);
      }
    n.destroy(), v([
      () => b(r.every((o) => o.group?.reference === null || o.group?.reference === void 0)).toBe(!0),
      () => b(r.every((o) => o.group?.inGroup === !1)).toBe(!0)
    ], `expandTemporaryGroups: Children of ${s} group should be released after destroy`);
  }
}
function Ne({
  bestResult: e,
  shapeList: t,
  relevantStock: i = [],
  stockList: n = [],
  resetShapes: r = null
}) {
  T("results", `updating shapes from ${e.resultKey} / ${e.type} - stock ${e.stock.id}, FS: ${e.firstShape.id}`), i.length && i.filter((l) => l.autoId !== e?.stock?.autoId).forEach((l) => {
    const h = t.filter((f) => f.added && f?.stock?.autoId === l.autoId);
    h.length && (r ? r(h, !1, !0, !1) : h.forEach((f) => {
      f.added = !1, f.reset();
    }));
  });
  const s = [];
  let o = n.length ? n.find((l) => l.autoId === e.stock?.autoId) : null;
  if (o && e.stock && e.stock.used && (o.used = !0), !o && e.stock && (o = e.stock, o.saw && !qe(o.saw))) {
    T("results", `⚠️  Found serialized saw in bestResult.stock ${o.autoId}, attempting to restore from stockList`);
    const l = n.find((h) => h.autoId === o.autoId || h.parentId === o.parentId && qe(h.saw));
    l && qe(l.saw) ? (T("results", `✅ Restored live saw instance from stock ${l.autoId}`), o.saw = l.saw) : T("results", `❌ Could not restore live saw instance for stock ${o.autoId}`);
  }
  o || (o = e.stock);
  for (const l of e.shapes)
    if (wt(l) || Ds(l)) {
      const h = t.find((f) => f.autoId === l.autoId);
      if (!h) {
        Se() && (console.warn(`[updateShapeListFromBestResult] Shape ${l.autoId || l.id} from result not found in shapeList!`), console.warn(`  Available autoIds in shapeList: ${t.slice(0, 5).map((f) => f.autoId).join(", ")}...`));
        continue;
      }
      Se() && (O(h) || console.warn(`Shape ${l.autoId} in shapeList is not a live instance!`)), h.update({ ...l, validationMode: "none" }), O(h) && l.group && l.group.inGroup !== void 0 && (h.group.inGroup = l.group.inGroup), h.stock = o, s.push(h);
    }
  v([
    () => b(e.shapes.every((l) => {
      if (!wt(l)) return !0;
      const h = t.find((f) => f.autoId === l.autoId);
      return !(!h || !h.added || h.x !== l.x || h.y !== l.y || h.l !== l.l || h.w !== l.w);
    }), "best shape not found, not added, or not correctly updated").to.be.true
  ]), Se() && (s.every((h) => t.find((f) => f === h)) || console.warn("Some updated shapes are not exact references from shapeList - possible instance copying!")), Mi({
    shapes: s
  }, "updateShapeListFromBestResult");
  let a = [];
  const c = e.shapes.filter((l) => Rs(l));
  return T("results", `Best result contains ${e.shapes.length} total items`), T("results", `Found ${c.length} serialized groups to recreate:`), c.forEach((l) => {
    T("results", `  - Group ${l.id}: type=${l.type}, shapes=${l.shapes?.length || 0}, added=${l.added}, x=${l.x}, y=${l.y}`);
  }), c.length > 0 && (T("results", `Recreating ${c.length} groups from bestResult`), a = As(c, t, o), T("results", `Successfully recreated ${a.length} groups:`), a.forEach((l) => {
    T("results", `  - Group ${l.id}: type=${l.type}, shapes=${l.shapes?.length || 0}, added=${l.added}, x=${l.x}, y=${l.y}`);
  }), a.forEach((l) => {
    l.shapes && Array.isArray(l.shapes) && (l.shapes.forEach((f) => {
      O(f) && (f.group.reference = l, f.group.inGroup = !0, l.added && (f.group.addedAsGroup = l));
    }), v([
      () => b(l.shapes.every((f) => !O(f) || f.group?.reference === l)).toBe(!0)
    ], `updateShapeListFromBestResult: All children of group ${l.id} (type=${l.type}) should have correct reference`), l.added && v([
      () => b(l.shapes.every((f) => !O(f) || f.group?.addedAsGroup === l)).toBe(!0),
      () => b(l.shapes.every((f) => !O(f) || typeof f.group?.addedAsGroup != "string")).toBe(!0)
    ], `updateShapeListFromBestResult: addedAsGroup should be Group reference for group ${l.id} (type=${l.type})`));
    const h = l.added && typeof l.placeMyShapes == "function" && l.type !== "position";
    if (l.added && l.type === "position" && v([
      () => b(h).toBe(!1)
    ], `updateShapeListFromBestResult: Position group ${l.id} should NOT call placeMyShapes`), h)
      try {
        l.placeMyShapes(o);
      } catch (f) {
        throw console.error("[ERROR] placeMyShapes failed for group " + l.id + ":", f.message), console.error(`  Group details: type=${l.type}, x=${l.x}, y=${l.y}, rot=${l.rot}`), console.error("  Child shapes:"), l.shapes?.forEach((u) => {
          console.error(`    ${u.id}: added=${u.added}, x=${u.x}, y=${u.y}, rot=${u.rot}, l=${u.l}, w=${u.w}`);
        }), f;
      }
    Se() && (l.shapes?.forEach((f) => {
      const u = t.find((d) => d.autoId === f.autoId);
      u !== f ? (console.error(`[ERROR] Group ${l.id} child shape ${f.id} is NOT the same instance as in shapeList!`), console.error(`  Group shape: added=${f.added}, x=${f.x}, y=${f.y}`), console.error(`  shapeList shape: added=${u?.added}, x=${u?.x}, y=${u?.y}`)) : f.group?.reference !== l && (console.error(`[ERROR] Group ${l.id} child shape ${f.id} has incorrect group.reference!`), console.error(`  Expected: ${l.id}, Got: ${f.group?.reference?.id || "null"}`));
    }), T("results", `Successfully recreated, placed, and linked ${a.length} groups`));
  })), { updatedShapes: s, groups: a };
}
async function We(e, t, i, n = null) {
  if (v([
    () => b(_(t)).to.be.true,
    () => {
      if (i.length) return b(O(i[0]) || ue(i[0])).to.be.true;
    }
  ]), v([() => b(ee(i), "duplicates found").to.be.false]), Xi(), n || (n = Lr.call(this, t, i)), !n) throw new Error("no root segment created");
  if (this.config.sample.enable) {
    if (await Tr.call(
      this,
      e,
      t,
      n
    ), e.secondRun || !this.bestResult) return;
    Ne({
      bestResult: this.bestResult,
      shapeList: this.shapeList,
      stockList: this.stockList,
      resetShapes: this.resetShapes?.bind(this)
    }), await Pi.call(this, {
      options: e,
      shapes: i,
      stock: t
      // root
    }), Er.call(this, i, n);
  }
  if (this.config.guillotine.stripShapes.allocation && i.length > 1) {
    if (await kr.call(this, e, t, i, n), !this.bestResult) return;
    Ne({
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
  const r = oe(this.shapeList, i);
  qr.call(
    this,
    Vt(this.bestResult, this.stockList),
    r
  ) && await Cr.call(
    this,
    e,
    r,
    t,
    i,
    n
  ), this.bestResult.shapes.forEach((o) => {
    const a = this.shapeList.find((c) => c.id === o.id);
    a && (o.x = a.x, o.y = a.y, o.placementOrder = a.placementOrder);
  });
}
async function kr(e, t, i, n) {
  if (!this.config.guillotine.stripShapes.allocation || (v([
    () => b(_(t)).to.be.true,
    () => b(i.length ? O(i[0]) : !0).to.be.true,
    () => b(j(n)).to.be.true
  ]), t?.saw?.stockType === "roll")) return !1;
  const r = Wr.call(this, n, this.uniqueStock, this.stockList);
  if (r === !1) return !1;
  for (let s = 0; s < r; s++)
    this.resetShapes(i), n.shapes = i, v([
      () => b(ee(n.shapes, `root segment batch ${s} stock ${t.id}`), "duplicates found in root segment").to.be.false,
      () => b(i.length).to.equal(n.shapes.length),
      () => b(i.some((o) => _e(o) || J(o)), "groups exist in new strip shape batch calculation").to.be.false
    ]), T("guillotine", `running strip shape batch ${s} for stock ${t.id}`), await Kt.call(
      this,
      e,
      t,
      n,
      s
    ), v([() => b(ee(n.shapes), "duplicates found").to.be.false]);
  return !0;
}
async function Tr(e, t, i) {
  T("guillotine", `running basic first shape sample for stock ${t.id}`), v([
    () => b(_(t)).to.be.true,
    () => b(j(i)).to.be.true,
    () => b(i?.shapes?.length).to.be.greaterThan(0)
  ]), await Kt.call(this, e, t, i);
}
async function Kt(e, t, i, n = null, r = null, s = null) {
  if (v([
    () => b(_(t)).to.be.true,
    () => b(j(i)).to.be.true,
    () => {
      if (r) return b(O(r)).to.be.true;
      if (n !== null) return b(n).to.be.a("number");
      if (s !== null) return b([0, 1].includes(s)).to.be.true;
    }
  ]), n === null)
    await Fe.call(
      this,
      e,
      t,
      i,
      r,
      s,
      null
    );
  else if (await Fe.call(
    this,
    e,
    t,
    i,
    void 0,
    void 0,
    n
  ) === !1) return !1;
}
async function Cr(e, t, i, n, r) {
  v([
    () => b(_(n)).to.be.true,
    () => {
      if (i.length) return b(O(i[0]) || ue(i[0])).to.be.true;
      if (t.length) return b(O(t[0] || ue(i[0]))).to.be.true;
    }
  ]), T("guillotine", `running refinement for stock ${n.id}`);
  try {
    await Pr.call(
      this,
      e,
      t,
      i,
      n,
      r
    );
  } catch (s) {
    console.error("issue with runSecondPass", s.message);
  }
}
async function Pr(e, t, i, n, r) {
  if (v([
    () => b(_(n)).to.be.true,
    () => {
      if (i.length) return b(O(i[0]) || ue(i[0])).to.be.true;
      if (t.length) return b(O(t[0]) || ue(i[0])).to.be.true;
    }
  ]), !this.config.guillotine.secondPass || !this.saw?.guillotineOptions?.headCuts) return !1;
  T("guillotine", `running second pass for stock ${n.id}`), await Fr.call(this, n, i, t, r);
  const s = oe(i, n), o = ye.call(
    this,
    this.shapeList,
    n
  );
  o && n.id === Vt(this.bestResult, this.stockList)?.id && s.length - t.length > 0 && (T("guillotine", `runSecondPass added ${s.length - t.length} shape(s) to stock ${n.id}, new total ${s.length}`), o.secondPass = !0, await re.call(this, o));
}
function Er(e, t) {
  const i = [];
  if (this.groupList && this.groupList.length > 0)
    for (const s of this.groupList)
      s.added ? i.push(s) : s.reset();
  for (let s = e.length; s--; ) {
    const o = e[s];
    D(o) && e.splice(s, 1), o.reset();
  }
  this.groupList && (this.groupList.length = 0, this.groupList.push(...i)), this.counters.placement = 0, this.bestPartialResult = null, Xi(), t.reset(e);
  const n = t.shapes.filter((s) => O(s)), r = t.shapes.filter((s) => D(s));
  T("reset", "[RESET] RESET ROOT SEGMENT BETWEEN CALCULATIONS", null, [
    {
      type: "Root shapes",
      count: n.length,
      added: n.filter((s) => s.added).length,
      ids: n.map((s) => s.id).join(", ")
    },
    {
      type: "Root groups",
      count: r.length,
      added: r.filter((s) => s.added).length,
      ids: r.map((s) => s.id).join(", ")
    }
  ]);
}
async function vr(e, t, i, n) {
  v([
    () => b(_(t)).to.be.true,
    () => b(j(i)).to.be.true
  ]);
  const r = we(i.shapes, !1, !0), s = this.stockList.findIndex((h) => h.id === t.id);
  let o = null;
  s > 0 && (o = this.stockList[s - 1]);
  const a = F(t.cutPreference);
  let c = [], l = [];
  if (i.l === t.l && i.w === t.w ? s > 0 && (c = oe(this.shapeList, o).filter((h) => Mt(h))) : l = oe(this.shapeList, t).filter((h) => Mt(h)), c?.length || l?.length) {
    const h = a === "l" ? "x" : "y";
    c.sort((d, p) => d[h] - p[h]), l.sort((d, p) => d[h] - p[h]);
    const f = c.length ? c[c.length - 1] : l[l.length - 1], u = r.filter((d) => f[a] === d.w || f[a] === d.l);
    if (u?.length) {
      for (let d = 0; d < u.length; d++) {
        const p = u[d];
        if (d > 1 && u[d - 1].isIdentical(u[d]))
          continue;
        $e(p, 0, t);
        let S;
        f[a] === p[a] ? S = 0 : S = 1;
        const g = await us.call(
          this,
          e,
          p,
          i,
          S
        );
        if (g?.length)
          for (let w = g.length; w--; ) {
            const m = g[w];
            await re.call(this, m, "strip");
          }
        this.resetShapes(i.shapes);
      }
      return !(!n || n?.length);
    }
  }
  return !1;
}
async function Fe(e, t, i, n = null, r = null, s = null) {
  if (i.type === "root" && !e?.secondPass && (t.used = !1, this.counters.placement = 0), !i.shapes?.length) return;
  v([
    () => b(_(t)).to.be.true,
    () => b(j(i)).to.be.true,
    () => b(n ? O(n) : !0).to.be.true,
    () => b(n ? [0, 1].includes(r) : !0).to.be.true,
    () => b(s !== null ? typeof s == "number" : !0).to.be.true,
    () => b(s !== null ? n === null : !0).to.be.true,
    () => b(r !== null ? [0, 1].includes(r) : !0).to.be.true,
    () => b(i.shapes.every((f) => !_e(f), "no segment groups should exist at this point")).to.be.true
  ]);
  const o = typeof s == "number";
  let a = !0;
  if (t.saw.guillotineOptions?.strategy === "time" && (a = !await vr.call(
    this,
    e,
    t,
    i
  )), a)
    if (qt(i))
      if (o) {
        let f = zr(i.shapes, s, t);
        if (f.sort((p, S) => p.guillotineState.getStripShapeBatchData(s).order - S.guillotineState.getStripShapeBatchData(s).order), T("guillotine", `strip shape candidates ${f.map((p) => p.id).join("|")}`), v([
          () => b(f.find((p) => p.guillotineState.getStripShapeBatchData(s).stockId !== i.getStock.autoId), "found strip shapes in allocatedStripShape from another stock").to.be.undefined,
          () => b(ee(f), "duplicate shapes found in stripShapeCandidates").to.false,
          () => b(f.find((p) => D(p) && !J(p)), "found groups in allocatedStripShape").to.be.undefined,
          () => b(i.shapes.filter((p) => p.added).length === 0, `added shapes found in segment ${i.id}`).to.be.true
        ]), !f.length)
          return Fe.call(
            this,
            e,
            t,
            i
          );
        const u = F(t.cutPreference);
        if (f = f.filter((p) => {
          if (D(p)) return !0;
          const S = vi(p, s, t, !1);
          return Pe(p, S, t) ? (vi(p, s, t, !0), Ls(p, S, t) ? (v([
            () => b(p.rot, `candidates ${p.id} rotation (${p.rot}) incorrect for batch (${S})`).equal(S)
          ]), !0) : !1) : (T("guillotine", `cannot rotate strip shape ${p.id}, ${p.l}x${p.w} to ${S} on stock ${t.id}`, [p.getStripShapeBatchData(s)]), xe(p, t, S), !1);
        }), this.config.groups.guillotine.strips && f.length > 1) {
          const p = i.shapes.filter((S) => J(S) && S.shapes.some((g) => f.includes(g)));
          p.length > 0 ? (T("guillotine", `Reusing ${p.length} existing strip groups`), f = p) : f = Ur.call(this, s, u, t, i, f);
        }
        if (!f.length)
          return Fe.call(
            this,
            e,
            t,
            i
          );
        f.sort(function(S, g) {
          return g[u] !== S[u] ? g[u] - S[u] : g[t.cutPreference] !== S[t.cutPreference] ? g[t.cutPreference] - S[t.cutPreference] : S.autoId.localeCompare(g.autoId, void 0, { numeric: !0 });
        }), n = f[0], T("guillotine", `firstShape for segment ${i.id} is ${n.id}`);
        const d = n.guillotineState.getStripShapeBatchData(s);
        if (!d) throw new Error("no fs batch found");
        v([() => b(d.stockId).equal(i.getStock.autoId)]), n.firstShape.isFirstShape = !0, r = d.rot, v([() => b([0, 1].includes(d.rot)).to.be.true]), await Nt.call(this, {
          options: e,
          fs: n,
          fsRotation: r,
          segment: i,
          stripShapeBatch: s,
          stripShapeCandidates: f
        });
      } else
        n && r !== null ? await Nt.call(this, {
          options: e,
          fs: n,
          fsRotation: r,
          segment: i,
          stripShapeBatch: s
        }) : await gt.call(
          this,
          e,
          i
        );
    else
      await gt.call(
        this,
        e,
        i
      );
  if (!this.bestPartialResult)
    if (s !== null) {
      if (await gt.call(
        this,
        e,
        i,
        !0
      ), !this.bestPartialResult) return;
    } else return;
  const l = this.bestPartialResult.firstShape;
  Ne({
    bestResult: this.bestPartialResult,
    shapeList: this.shapeList,
    stockList: this.stockList,
    resetShapes: this.resetShapes?.bind(this)
  }), tr(i, !0), qi(l) && i.shapes.push(l), i.shapes = Fi(i.shapes, l), v([
    () => b(i.shapes.filter((f) => D(f)).every((f) => J(f)), "number of groups in segment does not equal the number of strip shape groups (others should have been removed)").to.be.true,
    () => Oi(i.shapes, "segmentCalculations after removeGroupsFromSegment"),
    () => b(i.shapes.every((f) => !_e(f)), "found groups in segment after removal").to.be.true
  ]);
  const h = V(this.shapeList);
  if (this.bestPartialResult = null, h.length || this.config.secondRun.enabled) {
    const f = Or.call(
      this,
      i,
      l
    );
    if (f?.length) {
      T("cuts", `Created ${f.length} new segments, unplaced shapes: ${h.length}`);
      for (const u of f) {
        if (this.bestPartialResult = null, !u.shapes.length) {
          u.offcut = !0;
          continue;
        }
        u.shapes = u.shapes.filter((d) => !d.added), o && !qt(u) && (u.shapes = u.shapes.filter((d) => !d.guillotineState.isInStripShapeBatch(s))), await Fe.call(
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
    const f = ye.call(
      this,
      this.shapeList,
      t,
      l
    );
    if (!f) throw new Error("Unable to score stock");
    if (f.stripShapeBatch = s, f.root = i, !f.score.efficiency) return;
    const u = this.shapeList.filter((p) => !p.group?.inGroup && !D(p) && p.stock?.id === t.id);
    Gi(u).length > 0, s !== null ? f.type = "allocated strips" : f.type = "basic", await re.call(this, f);
  }
}
async function Nt({
  options: e = null,
  fs: t = null,
  fsRotation: i = null,
  segment: n = null,
  stripShapeBatch: r = null,
  stripShapeCandidates: s = []
}) {
  if (!t || i === null || !n)
    throw new Error(`firstShapeSegmentCalculations requires firstShape, firstShapeRotation & segment:${t} ${i} ${n}`);
  const o = async (f, u = !0) => {
    let d;
    u ? (t.reset(), v([() => b(n.shapes.filter((p) => p.autoId === t.autoId).length, "too many first shapes in segmentShapes").to.equal(1)]), d = ye.call(
      this,
      n.shapes,
      f,
      t
    )) : d = ye.call(
      this,
      n.shapes,
      n,
      t
    ), d.score.totalShapesPlaced && await re.call(this, d, "strip");
  };
  n.shapes = Dr.call(this, n, t, r), Gr.call(
    this,
    t,
    n,
    n.getStock,
    i
  ), t.placementOrder = this.counters.placement++, v([
    () => b(j(n)).to.be.true,
    () => b(r !== null ? typeof r == "number" : !0).to.be.true,
    () => b(i !== null ? [0, 1].includes(i) : !0).to.be.true
  ]), t && v([
    //Accept all group types (segment, user, strip) as well as shapes
    () => b(O(t) || D(t), `first shape ${t.id} is not a shape or group`).to.be.true,
    () => b(t.added, `first shape ${t.id} added too soon`).to.be.true,
    //Only check rotation for shapes, not groups (groups cannot be rotated)
    () => b(D(t) || t.rot === i, `first shape ${t.id} rotation (${t.rot}) incorrect for (${i})`).to.be.true,
    () => b(k.lessThanOrEqualTo(t.l, n.l), `first shape ${t.id} longer than segment ${t.l} > ${n.l}`).to.be.true,
    () => b(k.lessThanOrEqualTo(t.w, n.w), `first shape ${t.id} wider than segment ${t.w} > ${n.w}`).to.be.true
  ]);
  const a = n.getStock, { success: c, firstShapeSegment: l, isHeadCut: h } = await Rr.call(this, {
    fs: t,
    segment: n,
    stock: a,
    stripShapeBatch: r,
    stripShapeCandidates: s,
    options: e
  });
  return !(c === !1 && (await o(l), !h));
}
function Dr(e, t, i) {
  if (ee(e.shapes)) {
    const s = /* @__PURE__ */ new Set();
    e.shapes = e.shapes.filter((o) => s.has(o.autoId) ? !1 : (s.add(o.autoId), !0));
  }
  const r = e.shapes.filter((s) => s.willItFit(e) ? !(e.type !== "root" && typeof i == "number" && s.getStripShapeBatchData(i) !== !1 && t.autoId !== s.autoId) : (T("cuts", `  Excluding ${s.autoId}: doesn't fit in segment`), !1));
  return T("cuts", `  Result: ${r.length} shapes selected for segment`), this.resetShapes(r, {
    keepScores: !1,
    removeGroups: !1,
    keepGuillotineData: !0,
    keepFirstShapeSampleRotations: !0
  }), r;
}
async function Rr({
  fs: e,
  segment: t,
  stock: i,
  stripShapeBatch: n,
  stripShapeCandidates: r,
  forceNoHeadCut: s,
  options: o
}) {
  T("guillotine", `[createFirstShapeSegmentsPlaceShapesAndScore] Starting for segment ${t.id}, first shape ${e.id}`);
  const { offcuts: a, firstShapeSegment: c, isHeadCut: l, success: h } = await Ar.call(this, { fs: e, segment: t, stock: i, stripShapeBatch: n, stripShapeCandidates: r, forceNoHeadCut: s, options: o });
  if (v([() => b(a.length, "too many offcuts generated").to.be.lessThanOrEqual(2)]), h === !1)
    return { success: !1, firstShapeSegment: c, isHeadCut: l };
  if (o.secondPass) {
    const { cuts: m } = Wt.call(
      this,
      {
        container: c,
        shapes: [e],
        forceNoHeadCut: s
      }
    ), { allShapesCut: x } = ts([e], m, c);
    if (!x) return { success: !1, firstShapeSegment: c, isHeadCut: l };
  }
  if (!a.length) {
    const m = ye.call(
      this,
      t.shapes,
      c,
      e
    );
    return await re.call(this, m, "strip"), { success: !0, firstShapeSegment: c, isHeadCut: l };
  }
  const f = c.cutDirection, u = a.find((m) => k.equalTo(m[f], c[f]));
  if (!u || u.l <= 0 || u.w <= 0) {
    T("cuts", `No next segment. Remaining shapes: ${t.shapes.length}`), O(e) && !t.shapes.find((x) => x.autoId === e.autoId) && t.shapes.unshift(e), t.shapes.length > 1 && await Bt.call(
      this,
      t.shapes,
      e,
      c || t
    );
    const m = ye.call(
      this,
      t.shapes,
      c,
      e
    );
    return await re.call(this, m, "strip"), { success: !0, firstShapeSegment: c, isHeadCut: l };
  }
  const d = c.cutDirection;
  (t.type === "root" || t.type === "firstShape") && r.length === 1 && (u[d] = t[d], c[d] = t[d]), v([() => b(t.shapes.filter((m) => m.autoId === e.autoId).length, "too many first shapes in segmentShapes").to.equal(1)]), await Bt.call(
    this,
    t.shapes,
    e,
    c || t
  );
  const p = ye.call(
    this,
    t.shapes,
    c,
    e
  );
  await re.call(this, p, "strip");
  const S = t.type === "root" ? t.shapes.filter((m) => J(m)) : [];
  this.resetShapes(t.shapes, {
    keepScores: !1,
    removeGroups: !0,
    keepGuillotineData: !1,
    keepFirstShapeSampleRotations: !0
  });
  const g = new Set(t.shapes.map((m) => m.autoId)), w = S.filter((m) => !g.has(m.autoId));
  return t.shapes.push(...w), { success: !0, firstShapeSegment: c, isHeadCut: l };
}
async function Ar({ fs: e, segment: t, stock: i, segmentShapes: n, stripShapeBatch: r, forceNoHeadCut: s, options: o }) {
  let a = !0, c, l = !1;
  !s && es.call(this, t) && (l = Ki.call(this, i.saw, e, t), t.hasHeadCut = l);
  try {
    c = Br.call(
      this,
      e,
      l,
      t,
      i,
      n
    );
  } catch (f) {
    throw T("errors", `firstShapeSegment error, fs: ${e.autoId}, 'ssg: ${r}: ${f.message}`), new Error(`issue with createFirstShapeSegment ${f.message}`);
  }
  if (v([() => b(c[c.cutDirection]).to.equal(e[c.cutDirection])]), o?.secondPass) {
    const f = this.shapeList.filter((u) => u.added && u.stock.autoId === i.autoId && u.autoId !== e.autoId);
    if (Bi(c, f, i))
      return a = !1, { firstShapeSegment: c, offcuts: [], success: a };
  }
  const { offcuts: h } = Wt.call(
    this,
    {
      container: t,
      shapes: t.shapes,
      forceNoHeadCut: s
    }
  );
  return { firstShapeSegment: c, offcuts: h, isHeadCut: l, success: a };
}
async function gt(e, t, i = !1) {
  if (!this.config.sample.enable && i === !1) return !1;
  v([
    () => b(t.shapes.every((a) => O(a) || ue(a)), "segment shapes contains groups").to.be.true
  ]);
  let n = [];
  if (t.shapes.length > 1) {
    const a = F(t.cutDirection), c = t[a], l = t.parentSegmentGroupShapes || /* @__PURE__ */ new Set(), h = t.shapes.filter((p) => !l.has(p.id)), f = Os(h, c * 0.05), u = f.reduce((p, S) => p + S.area, 0), d = t.getStock.area;
    if (this.config?.groups?.guillotine?.firstShape && f.length >= 2 && u >= d * 0.8) {
      n = Ni({
        shapes: f,
        container: t,
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
      n = n.filter((S) => {
        const g = `${S.l}-${S.w}`;
        return p.has(g) ? !1 : (p.add(g), !0);
      }), T("groups", `[FIRST SHAPE GROUPS] created ${n.map((S) => S.id).join()} for segment ${t.id} `);
    }
  }
  let r = null;
  e.secondPass && (r = oe(
    this.shapeList,
    t.getStock
  ));
  const s = [...t.shapes], o = fs.call(
    this,
    "guillotine",
    [...s, ...n],
    t,
    r,
    null,
    i
  );
  if (!o.length) return !1;
  for (let a = 0; a < o.length; a++) {
    const c = o[a];
    if (T("guillotine", `[FIRST SHAPE] attempting first shape candidate ${c.id} for segment ${t.id}`), a > 1 && o[a - 1].isSameSize(o[a])) {
      c.firstShape.sampleRotations = [];
      continue;
    }
    this.resetShapes(s, {
      removeGroups: !1,
      keepFirstShapeSampleRotations: !0
    }), c.firstShape.isFirstShape = !0, qi(c) && (t.shapes.find((f) => f.autoId === c.autoId) || t.shapes.push(c), t.shapes = Fi(t.shapes, c)), v([
      () => b(ee(t.shapes, `segment ${t.id} before running fs tests for ${c.id}`), "duplicates found in segment").to.be.false,
      () => b(ee(t.shapes), "duplicates found").to.be.false
    ]), await us.call(
      this,
      e,
      c,
      t
    ), v([() => b(ee(t.shapes), "duplicates found").to.be.false]), c.firstShape.isFirstShape = !1, c.firstShape.sampleRotations = [], t.shapes = s, this.resetShapes(t.shapes, {
      removeGroups: !0,
      keepFirstShapeSampleRotations: !0
    });
    const l = t.shapes.filter((f) => O(f)), h = t.shapes.filter((f) => D(f));
    T("reset", `[RESET] RESET SEGMENT ${t.id} BETWEEN FIRST SHAPE CANDIDATES: ${c.id}`, null, [
      {
        type: "Shapes",
        count: l.length,
        added: l.filter((f) => f.added).length,
        ids: l.map((f) => f.id).join(", ")
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
function Lr(e, t) {
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
function Or(e, t) {
  T("guillotine", `[SEG-CREATE] creating new segments for segment ${e.id}, stock ${e.stock.id} at (${e.x},${e.y}) ${e.l}x${e.w}, first shape ${t.id} at (${t.x},${t.y}) ${t.l}x${t.w}, cut direction ${e.cutDirection}`), D(t) && T("guillotine", `[SEG-CREATE] first shape ${t.id} is group with ${t.shapes?.length || 0} shapes`, [t.dimensions, t.coords]), v([
    () => b(O(t) || D(t), "first shape is not a shape or group").to.be.true,
    () => b(j(e), "segment is not a segment class").to.be.true
  ]);
  const { offcuts: i } = Wt.call(this, {
    container: e,
    shapes: e.shapes
  });
  if (!i.length) return;
  T("guillotine", `[SEG-CREATE] All new segments for segment ${e.id}:`, null, i.map((c) => ({ id: c.id, x: c.x, y: c.y, l: c.l, w: c.w, dir: c.cutDirection })));
  const n = e.cutDirection === "l" ? "y" : "x", r = F(e.cutPreference), s = i.filter((c) => c[n] < t[n] + t[r]), o = i.find((c) => c[n] >= t[n] + t[r]);
  if (o && (o.rowSegment = !0, s.push(o)), !s?.length) return;
  const a = be(n);
  return s.sort((c, l) => c[n] < l[n] ? -1 : c[n] > l[n] ? 1 : c[a] < l[a] ? -1 : c[a] > l[a] ? 1 : 0), s.forEach((c) => {
    const l = e.shapes.filter((f) => !f.added && xe(f, c)), h = /* @__PURE__ */ new Set();
    c.shapes = l.filter((f) => h.has(f.autoId) ? !1 : (h.add(f.autoId), !0)), v([() => b(c.shapes.every((f) => !f.added), `added shapes in offcut ${c.autoId}`).to.be.true]);
  }), e.children = s, s;
}
function Mr(e, t, i, n, r, s, o, a, c) {
  if (!t || t.length <= 1) return !0;
  try {
    t.sort((y, E) => y[o] - E[o]);
    let l = 0, h = -1 / 0;
    for (const y of t)
      y[o] > h + n && (l += y[a] + n, h = y[o] + y[a]);
    if (l > e[a])
      return console.warn("Preliminary check: shapes would not fit within stock after rearrangement"), !1;
    const f = [], u = n / 2;
    let d, p, S = !1, g = 0, w = 0, m = 0;
    const x = 3;
    for (const y of t) {
      if (!Mt(y)) continue;
      S || (d = y[o], m = 0), p = y[o] + y[a];
      const E = y[o] + y[a] + u, A = new Ge(
        r === "x" ? {
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
      if (Ht(A, e, i))
        if (S = !0, m++, m >= x)
          S = !1, console.warn(`Forced strip creation after ${x} consecutive collisions`);
        else
          continue;
      else
        S = !1, m = 0;
      const M = i.filter((L) => k.greaterThanOrEqualTo(L[o], d) && k.lessThan(L[o], p));
      if (!M.length) continue;
      const G = M.length > 0 ? M.reduce((L, N) => {
        const Q = L[r] + L[s], fe = N[r] + N[s];
        return k.equalTo(Q, fe) ? L[s] > N[s] ? L : N : Q > fe ? L : N;
      }) : M[0];
      if (!G) continue;
      const C = G[r] + G[s], q = M.length > 0 ? M.reduce((L, N) => {
        const Q = L[o] + L[a], fe = N[o] + N[a];
        return k.equalTo(Q, fe) ? L[a] > N[a] ? L : N : Q > fe ? L : N;
      }) : M[0];
      if (!q) continue;
      let K = q[o] + q[a];
      p > K && (K = p);
      const He = K - d;
      f.push({
        stripStartPoint: d,
        stripEndPoint: p,
        furthestPrimaryPoint: C,
        furthestOrderingPoint: K,
        shapesInThisRow: M,
        width: He
      });
    }
    if (!f.length)
      return console.warn("No valid strips found after analysis"), !0;
    const $ = /* @__PURE__ */ new Map();
    f.forEach((y) => {
      y.shapesInThisRow.forEach((E) => {
        $.set(E.autoId, E[o]);
      });
    }), f.sort((y, E) => k.equalTo(y.furthestPrimaryPoint, E.furthestPrimaryPoint) ? E.width - y.width : E.furthestPrimaryPoint - y.furthestPrimaryPoint);
    let I = 0;
    for (const y of f)
      I += y.furthestOrderingPoint - y.stripStartPoint + n;
    if (I > e[a])
      return console.warn("Total arrangement would exceed stock dimensions"), !1;
    for (const y of f) {
      y.shapesInThisRow.sort((E, A) => E.placementOrder - A.placementOrder);
      for (let E = 0; E < y.shapesInThisRow.length; E++) {
        const A = y.shapesInThisRow[E], M = A[o] - y.stripStartPoint, G = w + M;
        if (G + A[a] > e[a])
          return console.warn(`Shape ${A.id} would exceed stock boundaries after rearrangement`), Ei(f, $, o), !1;
        const C = A[o];
        A[o] = G, A.placementOrder = E + g, Xt(A) === 1 && k.equalTo(A[r], 0) && st(A, s), !k.equalTo(C, G) && c && (er(c, A), Gt(c, A));
      }
      if (g += y.shapesInThisRow.length, w += y.furthestOrderingPoint - y.stripStartPoint + n, w > e[a])
        return console.warn("Rearrangement exceeds stock dimensions"), Ei(f, $, o), !1;
    }
    return !0;
  } catch (l) {
    return console.error("Error during shape rearrangement:", l), !1;
  }
}
function Ei(e, t, i) {
  e.forEach((n) => {
    n.shapesInThisRow.forEach((r) => {
      t.has(r.autoId) && (r[i] = t.get(r.autoId));
    });
  });
}
function qr(e, t, i) {
  if (!this.config?.guillotine?.strips?.rearrange || e.saw.guillotineOptions?.strategy === "time") return !1;
  const r = e.bladeWidth;
  if (k.equalTo(r, 0) || r < 0)
    return console.warn("Invalid blade width for rearrangement"), !1;
  const s = oe(t, e);
  if (!s?.length) return !1;
  const o = e.cutPreference;
  if (o !== "l" && o !== "w")
    return console.warn("Invalid primary dimension:", o), !1;
  const a = o === "l" ? "x" : "y", c = s.filter(
    (u) => Ft(u, 1) && k.equalTo(u[a], 0)
  );
  if (!c.length) return !1;
  const l = F(o), h = o === "l" ? "y" : "x";
  return c.reduce((u, d) => u + d[l], 0) > e[l] ? (console.warn("Total strip width exceeds stock dimensions"), !1) : Mr(
    e,
    c,
    s,
    r,
    a,
    o,
    h,
    l,
    i
  );
}
async function Fr(e, t, i, n) {
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
  const o = i.filter((u) => Ft(u, 1));
  if (!o.length) {
    console.debug("No strip shapes found for corner squeeze");
    return;
  }
  const a = e.cutPreference;
  if (a !== "l" && a !== "w") {
    console.warn("Invalid primary dimension:", a);
    return;
  }
  const c = a === "l" ? "x" : "y", l = F(a), h = a === "l" ? "y" : "x";
  o.sort((u, d) => u[h] - d[h]);
  let f = 0;
  for (let u = 0; u < o.length; u++) {
    let d = function(L, N, Q, fe) {
      return L[N] + L[Q] + fe;
    }, p = function(L, N, Q, fe, Qt) {
      return Qt > 0 ? Qt - N[Q] : L[fe] - N[Q];
    };
    const S = o[u], g = u > 0 ? oe(this.shapeList, e) : i, w = V(t, e);
    if (!w.length) {
      console.debug("No remaining shapes to place, exiting corner squeeze");
      break;
    }
    const m = g.filter((L) => !Ft(L, 0) && it(L, S, h));
    m.some((L) => L.autoId === S.autoId) || m.push(S);
    let x;
    m.length > 0 ? x = m.reduce((L, N) => L[c] + L[a] > N[c] + N[a] ? L : L[c] + L[a] < N[c] + N[a] ? N : L[h] < N[h] ? L : N) : x = S;
    const $ = x[c] + x[a] + s;
    let I;
    c === "x" ? I = new Ge({
      x1: $,
      x2: $,
      y1: x[h],
      y2: e[l]
    }) : I = new Ge({
      x1: x[h],
      x2: e[l],
      y1: $,
      y2: $
    });
    const y = Ht(I, e, g, !0);
    if (!Array.isArray(y)) {
      console.warn("Expected collision shapes array but got:", typeof y);
      continue;
    }
    const E = y;
    let A = 0;
    if (E?.length && (A = E.reduce((N, Q) => N[h] < Q[h] ? N : Q)[h] - s, A <= x[h])) {
      console.debug("Invalid segment end point calculation, skipping this squeeze attempt");
      continue;
    }
    const M = typeof H < "u" && typeof H.segments < "u" ? H.segments === 0 ? "root" : (H.segments + 1).toString() : "squeeze-" + Date.now();
    typeof H < "u" && typeof H.segments < "u" && H.segments++;
    const G = d(
      x,
      c,
      a,
      s
    ), C = p(
      e,
      x,
      h,
      l,
      A
    ), q = e[a] - G, K = {
      id: M,
      shapes: w,
      stock: e,
      saw: e.saw,
      material: e.material,
      cutDirection: F(e.cutPreference),
      phase: 0,
      stockType: e?.saw?.stockType,
      t: e.t,
      // Assign all dimensions and positions
      x: c === "x" ? G : x.x,
      y: c === "y" ? G : x.y,
      l: c === "x" ? q : e.l,
      w: c === "y" ? q : e.w,
      [c]: G,
      [h]: x[h],
      [a]: q,
      [l]: C
    };
    if (K.l <= 0 || K.w <= 0) {
      console.debug("Skipping segment with invalid dimensions:", K.l, K.w);
      continue;
    }
    let He;
    try {
      He = new pe(K);
    } catch (L) {
      console.warn(`Corner squeeze segment creation error - ${L.message} for shape: ${x.id}`);
      continue;
    }
    try {
      await Kt.call(
        this,
        { secondPass: !0 },
        e,
        He
      ), f++;
    } catch (L) {
      console.warn(`Error during segment calculations: ${L.message}`);
    }
  }
  f > 0 && console.debug(`Corner squeeze completed with ${f} successful placements`);
}
function Gr(e, t, i, n = null) {
  if (!t)
    throw new Error("no segment provided to assignStripShape");
  if (!e) throw new Error("no shape provided to assignStripShape");
  return e.resetBothScores(), e.x = t.x, e.y = t.y, D(e) && (e.initShapes(e.shapes), e.placeMyShapes(i)), T("calculations", `assigning first shape ${e.id}, x: ${e.x}, y: ${e.y}, rot: ${n}`), e.guillotineState || (e.guillotineState = new je({})), e.firstShape.isFirstShape = !0, Qn(e), st(e, t.cutDirection), n !== null && !D(e) ? $e(e, n, i) : n !== null && D(e) && e.rot !== n && T("groups", `[assignStripShape] WARNING: Group ${e.id} has computed rot=${e.rot} but requested rotation=${n} - groups cannot be rotated!`), Se() && (D(e) || v([() => b(e.rot).to.equal(n)])), e.addToStock(i), v([() => b(Gi(this.shapeList.filter((r) => r.stock?.id === i.id))).length.to.be(0)]), e;
}
async function us(e, t, i, n = null) {
  if (v([
    () => b(O(t) || D(t), "runFirstShapeRotationTests requires shape or group").to.be.true,
    () => b(j(i)).to.be.true
  ]), !(ce(n) && !Pe(t, n, i)))
    for (const r of t.firstShape.sampleRotations)
      await hs.call(
        this,
        t,
        i,
        r,
        Nt,
        {
          options: e,
          fs: t,
          fsRotation: null,
          segment: i
        },
        "fsRotation"
      );
}
function Nr(e, t, i) {
  let n;
  return i ? (n = e.cutPreference, st(t, F(n)), e.hasHeadCut = !0) : (k.equalTo(t[e.cutDirection], e[e.cutDirection]) ? n = e.cutDirection : n = qt(e) ? F(e.cutPreference) : F(e.cutDirection), st(t, F(n))), v([
    () => b(le(t)).to.not.equal(n)
  ]), n;
}
function Br(e, t, i, n, r) {
  i.hasHeadCut = t;
  const s = Nr(i, e, t), o = {
    l: s === "w" ? i.l : e.l,
    w: s === "w" ? e.w : i.w
  }, a = new pe({
    x: e.x,
    y: e.y,
    l: o.l,
    w: o.w,
    t: i.t,
    parent: i,
    stock: n,
    material: n.material,
    shapes: r,
    firstShape: e,
    id: "fs-" + e.id,
    phase: i.phase + 1,
    preventAutoRotation: !0,
    saw: i.stock.saw,
    cutDirection: s,
    hasHeadCut: t,
    type: "firstShape"
  });
  if (a.shapes.unshift(e), !a)
    throw new Error("firstShapeSegment not created");
  return v([
    () => b(a.cutDirection, `segment cut direction ${i.id} is the same as first shape ${e.id}`).to.not.equal(le(e))
  ]), T("cuts", `FIRST SHAPE SEGMENT [${a?.parent?.type === "root" ? "R" : a.parent.id}]->[${a.autoId}] ${t ? "HEAD" : "NORM"} ${he(a.l, 4)}x${he(a.w, 4)}, SEG DIR ${a.cutDirection.toUpperCase()}, SHAPE DIR ${le(e).toUpperCase()}`), a;
}
function Hr(e, t, i, n, r = null, s) {
  if (!t.length) return [];
  v([
    () => b(t.length).to.be.greaterThan(0),
    () => b(e.every((u) => u.added === !1), "unplaced shapes contain added shapes").to.be.true
  ]);
  let o = [];
  for (const u of t) {
    const d = ot(u, n);
    if (u.firstShape.sampleRotations = [], !D(u))
      for (const p of d) {
        let S = 1;
        $e(u, p, n);
        const g = u.getPriority(n);
        let w = !0;
        if ($e(u, p, n), v([
          () => b(u.rot, `unique shape ${u.id} rotation (${u.rot}) incorrect for (${p})`).equal(p)
        ]), !xe(u, i, p))
          continue;
        if (r?.length) {
          u.x = i.x, u.y = i.y;
          for (const x of r)
            if (Hi(u, x, n)) {
              w = !1;
              break;
            }
        }
        if (!w) continue;
        const m = u.aspect;
        if (m < 0.1) {
          const x = n.cutPreference;
          if (u[x] >= 0.7 * n[x] && u[x] > u[F(x)]) {
            const $ = Math.max(1, 10 * (1 - m * 2));
            S *= $;
          }
        }
        o.push({
          id: u.id,
          shape: u,
          rotation: p,
          score: S,
          priority: g
        }), v([
          () => b(xe(u, i, p), "canditate will not fit").to.be.true
        ]);
      }
  }
  o.sort((u, d) => u.score !== d.score ? d.score - u.score : u.priority !== d.priority ? d.priority - u.priority : d.shape.area - u.shape.area);
  const a = i.cutDirection, c = n[a], l = this.config.guillotine.firstShapeFullSizeThreshold, h = o.filter((u) => u.shape[a] >= l * c);
  if (h.length > 0) {
    const u = h[0];
    return u.shape.firstShape.sampleRotations = [u.rotation], [u.shape];
  }
  o = o.slice(0, this.config.sample.guillotine);
  const f = [];
  for (const u of o)
    f.find((p) => p.id === u.id) || f.push(u.shape), u.shape.firstShape.sampleRotations.push(u.rotation), v([
      () => b(u.shape.firstShape.sampleRotations.length).to.be.lessThanOrEqual(2),
      () => b(u.shape.firstShape.sampleRotations[0]).to.not.equal(u.shape.firstShape.sampleRotations[1])
    ]);
  return f.push(...s), f;
}
function zr(e, t, i) {
  if (!e.length) return [];
  if (typeof t != "number") throw new Error("getAllocatedStripShapeBatch - stripShapeBatchNumber must be a number");
  if (!i) throw new Error("getAllocatedStripShapeBatch - stock is required");
  const n = e.filter((o) => {
    if (o.added) return !1;
    const a = o.guillotineState.getStripShapeBatchData(t);
    return !(a === !1 || a.rerunning || a.stockId !== i.autoId);
  }), r = /* @__PURE__ */ new Set();
  return n.filter((o) => r.has(o.autoId) ? !1 : (r.add(o.autoId), !0));
}
function Wr(e, t, i) {
  jr(e.shapes);
  const n = Ms.call(this, e, t, i);
  return n || !1;
}
function vi(e, t = null, i, n = !1) {
  let r;
  if (t !== null) {
    const s = e.guillotineState.getStripShapeBatchData(t);
    if (s === !1)
      throw new Error("getStripShapeRotation - could not find strip shape group");
    r = s.rot;
  }
  if (v([() => b([0, 1].includes(r)).to.be.true]), n && r !== e.rot) {
    if (D(e) || !Pe(e, r, i)) return r;
    if ($e(e, r, i) === !1)
      throw new Error("getStripShapeRotation - could not rotate strip shape correctly");
  }
  return r;
}
function Ur(e, t, i, n, r) {
  const s = i.cutPreference === "l" ? "l" : "w", o = new Set(r.map((f) => f[s]));
  v([
    () => b(o.size).to.be.greaterThan(0)
  ]);
  const a = r.filter((f) => J(f)), c = r.filter((f) => O(f));
  if (c.length < 2)
    return r;
  const l = [...c], h = [];
  for (const f of o) {
    const u = [], d = f * (1 - this.config.groups.tolerance);
    let p = f * (1 + this.config.groups.tolerance);
    p > n[s] && (p = n[s]);
    for (let S = l.length - 1; S >= 0; S--) {
      const g = l[S];
      !g.getMinSpacing(i.saw, !0) && g[s] <= i[s] && g[s] >= d && g[s] <= p && (u.push(g), l.splice(S, 1));
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
      let S;
      try {
        const g = u.slice(0, -1).reduce((E, A) => E + A.getMinSpacing(i), 0), w = u.reduce((E, A) => E + A[t], 0);
        if (g + w > i[t]) continue;
        const m = d.l, x = d.w, y = `ss-${[...new Set(u.map((E) => E.parentId || E.id))].sort().join("-")}_${this.counters.group++}`;
        S = new bt({
          l: m,
          w: x,
          id: y,
          shapes: u,
          direction: qs(t),
          container: i,
          type: "strip"
        });
      } catch (g) {
        console.log(g), S = null;
      }
      if (S) {
        const g = Math.min(...u.map((m) => {
          const x = m.guillotineState.getStripShapeBatchData(e);
          return x ? x.order : 1 / 0;
        }));
        S.guillotineState.setStripShapeBatchGroup(e, {
          stockId: i.autoId,
          dimension: S[t],
          rot: S.rot,
          order: g,
          priorityShape: p.priorityShape
        });
        const w = new Set(S.shapes.map((m) => m.id));
        f.push(S), n.shapes = n.shapes.filter((m) => !w.has(m.id)), n.shapes.push(S), r = r.filter((m) => !w.has(m.id));
      }
    }
    r = [...f, ...a, ...r.filter((u) => O(u))];
  } else
    r = [...a, ...c];
  return r;
}
function jr(e) {
  for (const t of e) t.guillotineState.resetStripShapeBatchGroups();
}
function _r(e, t) {
  const i = t.getStock, n = 0.1 * i.l;
  function r(a) {
    return e.some((c) => a.parentId === c.parentId && !c.added) && Jt(a, i) && a.willItFit(t);
  }
  const s = e.some((a) => Jt(a, i) && a.willItFit(t) && a.l >= n || a.w >= n);
  return e.filter((a) => a.added ? !1 : (ue(a) && a.updateShapeSpacing(t), e.length === 1 || !s ? r(a) : a.l < n && a.w < n ? !1 : r(a)));
}
function fs(e, t, i, n = null, r = !1) {
  if (!this.config.sample.enable && r === !1) return [];
  if (!e) throw new Error("getFirstShapeSample - type is required");
  v([
    () => b(e === "guillotine" || e === "efficiency", "type not correct").to.be.true,
    () => b(Fs(i), "should be a container").to.be.true
  ]);
  const s = we(t, !1, !0);
  if (!s.length) return [];
  const o = t.filter((d) => D(d)), a = [], c = i.getStock;
  let l = _r(s, i);
  if (!l.length) return [];
  if (e === "guillotine")
    l = Hr.call(
      this,
      t,
      l,
      i,
      c,
      n,
      o
    );
  else if (e === "efficiency") {
    l.push(...o);
    const d = l.filter((p) => p.getPriority(c) > 0);
    d.length && (l = d), l.sort(me.aspect);
  }
  const h = l.filter((d) => D(d)), f = l.filter((d) => !D(d)), u = [...h, ...f];
  for (const d of u)
    if (D(d)) {
      if (!d.willItFit(i)) {
        T("groups", `[getFirstShapeSample] Group ${d.id} does NOT fit container after calculateGroupDimensions - skipping (group: ${d.l}x${d.w}, container: ${i.l}x${i.w})`);
        continue;
      }
      d.firstShape.sampleRotations = [d.rot.valueOf()], a.push(d);
    } else {
      const p = t.find((S) => S.parentId === d.parentId && !S.added && S.constructor.name === d.constructor.name);
      if (p && (p.firstShape.sampleRotations = ot(p, i), a.push(p)), a.length >= (e === "guillotine" ? this.config.sample.guillotine : this.config.sample.efficiency))
        break;
    }
  return T("firstShapes", `candidates for stock ${i.getStock?.id}, ${j(i) ? "segment " + i.id : ""}`, a.map((d) => ({ id: d.id, autoId: d.autoId, rotations: d.firstShape.sampleRotations }))), v([() => b(ee(a), "duplicate ids found in candidates with getFirstShapeSample").to.false]), a;
}
const Te = {
  async calculation(e, t, i) {
    if (e?.tidy && (this.resetShapes(oe(i, t)), this.tidyStrategy = !0), await Te.tryFirstShapes.call(this, t, i), !!this.bestResult && (this.tidyStrategy = !1, !e?.tidy && Vr.call(this, this.bestResult, t))) {
      t.algoBenchmark = this.bestResult;
      try {
        const r = await new wn(this, t, i).run();
        if (!r) return;
        await re.call(this, r.result), delete t.algoBenchmark;
      } catch (n) {
        console.error("error with evo", n);
      }
      Ne({
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
    if (!ce(t)) throw new Error("no rotation provided");
    if (!ce(e))
      throw new Error("first shape not provided to defaultFirstShapePlacement");
    if (typeof e != "object")
      throw new Error("first shape is not an object");
    if (e.added)
      throw new Error(`first shape ${e.id} has been added previously`);
    if (!i)
      throw new Error("no stock provided to defaultFirstShapePlacement");
    if (e.rot !== t && !Pe(e, t, i))
      throw new Error(`first shape ${e.id} cannot rotate to: ${t}`);
    $e(e, t, i), e.resetBothScores(), as.call(
      this,
      e,
      i,
      zt.call(this, i, i, e),
      []
    ), e.addToStock(i), e.firstShape.isFirstShape = !0, e.placementOrder = 0, D(e) ? (e.placeMyShapes(i), this.counters.placement = e.shapes.length) : this.counters.placement = 1;
  },
  /**
   * try all first shapes with both rotations if relevant
   */
  tryFirstShapes: async function(e, t) {
    const i = V(t, e);
    let n = fs.call(
      this,
      "efficiency",
      i,
      e
    );
    const r = we(i, !1, !0);
    let s = r.length > 1;
    s && i.reduce((c, l) => c + l.area, 0) < e.area * this.config.groups.shapeAreaCutOff && (s = !1);
    let o = [];
    s && !this.hasMinSpacing && this.config.groups.efficiency.firstShapes && r.length < this.config.groups.efficiency.limit && (o = Te.createFirstShapeGroups.call(
      this,
      i,
      e
    )), n.push(...o);
    let a = t;
    n = we(n, !1, !0);
    for (const c of n)
      c.firstShape.isFirstShape = !0, D(c) && (a = yn(
        c.shapes,
        i
      ), a.unshift(c)), await Te.calculateFirstShapeRotations.call(
        this,
        a,
        e,
        c
      ), c.firstShape.isFirstShape = !1;
  },
  /**
   * run the calculations for both first shape rotations
   */
  calculateFirstShapeRotations: async function(e, t, i) {
    const n = ot(i, t);
    for (const r of n) {
      this.resetShapes(e, !1, !1), i.added = !1, D(i) && (i.placeMyShapes(t), e.unshift(...i.shapes), e = e.filter((o) => o.id !== i.id));
      const s = await gr.call(
        this,
        e,
        t,
        i,
        r
      );
      ce(s.score) && await re.call(this, s);
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
    weighting: r = null
  }) {
    const s = performance.now();
    if (this.counters.placement = 1, !e.length) return !1;
    if (!i)
      throw new Error("no firstShape provided to efficiency.runSpecificStrategy");
    if (_(t) && (t.used = !1), this.resetShapes(e, !0, !1), typeof i == "string")
      i = this.shapeList.find((l) => l.id === i);
    else if (wt(i) || Gs(i)) {
      const l = i.autoId || i.id;
      i = this.shapeList.find((h) => h.autoId === l || h.id === l);
    }
    if (!i)
      throw new Error("firstShape not found in shapeList");
    if (i.reset(), e.length) {
      if (r) {
        this.weighting.custom = {};
        for (const l of Object.keys(this.weighting.efficiency.standard()))
          this.weighting.custom[l] = r[l] ? r[l] : 0;
      }
      Te.defaultFirstShapePlacement.call(
        this,
        i,
        n,
        t
      ), await Bt.call(
        this,
        e,
        i,
        t
      );
    }
    const o = ye.call(
      this,
      e,
      t,
      i
    );
    r && (this.weighting.custom = null);
    const a = performance.now(), c = Math.ceil(a - s);
    return o.time = c, o;
  },
  /**
   * create groups to be used as a first shape
   * CAUTION - can make very simple calculations less efficient
   */
  createFirstShapeGroups: function(e, t) {
    if (!this.config.groups.efficiency.firstShapes) return [];
    const i = V(e, t).filter((o) => O(o)), n = ["l", "w"], r = /* @__PURE__ */ new Map();
    for (const o of n)
      Ni({
        shapes: i,
        container: t,
        targetSize: t[o],
        exact: !1,
        direction: o,
        config: this.config,
        preventDuplicates: !0,
        counters: this.counters
      }).forEach((c) => {
        const l = `${c.l}-${c.w}`;
        r.has(l) || r.set(l, c);
      }), this.resetShapes(i);
    let s = Array.from(r.values());
    return s.sort((o, a) => a.efficiency - o.efficiency), s = s.slice(0, this.config.sample.groupSize), v([
      () => b(s.every((o) => k.lessThanOrEqualTo(o.l, t.l) && k.lessThanOrEqualTo(o.w, t.w)), "groups larger than container").to.be.true
    ]), s.length ? s : [];
  },
  /**
   * should tidy run?
   */
  shouldUseTidy: function(e, t) {
    return !this.config.efficiency.tidy || t?.saw?.stockType === "roll" || !e ? !1 : e.score.efficiency < 0.9 && t.cutType === "efficiency";
  }
}, Ie = {
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
    await Te.calculation.call(this, e, t, i);
  },
  guillotine: async function(e, t, i, n = []) {
    if (this.counters.placement = 0, e.secondRun && n.length) {
      for (const r of n) {
        const s = i.filter((o) => !o.added);
        r.shapes = s, await We.call(
          this,
          e,
          t,
          s,
          r
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
  beam: async function(e, t, i, n = []) {
    if (this.counters.placement = 0, e.secondRun && n.length) {
      for (const r of n) {
        const s = i.filter((o) => !o.added);
        r.shapes = s, await We.call(
          this,
          e,
          t,
          s,
          r
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
        t.saw.cutPreference = "w", n = await Ie.guillotine.call(
          this,
          e,
          t,
          i
        );
        break;
      case "efficiency":
        t.saw.efficiencyOptions.primaryCompression = "l", n = await Ie.efficiency.call(
          this,
          e,
          t,
          i
        );
        break;
    }
    await re.call(this, n);
  },
  linear: async function(e, t, i) {
    const n = Ns.call(this, t, i);
    n && t && (Bs(n, t, i), n.stock = t, await re.call(this, n));
  }
};
async function Yr({
  shapeOrGroup: e,
  container: t,
  weighting: i,
  containerPlacedShapes: n = null,
  unplacedShapes: r = null,
  placementPositions: s = null,
  rayCastCoords: o = null,
  placedCoords: a = null
}) {
  if (!n)
    throw new Error("findBestShapePosition was not passed any placedShapes");
  if (!r)
    throw new Error("findBestShapePosition was not passed any unplacedShapes");
  if (!e)
    throw new Error("findBestShapePosition was not passed a shape");
  if (ue(e))
    try {
      e.updateShapeSpacing(t);
    } catch {
      return !1;
    }
  const c = t.l + t.x - e.l, l = t.w + t.y - e.w;
  if (c < 0 || l < 0) return !1;
  const h = new xt(), f = t.getStock;
  if (o)
    for (const u of o.points.values()) {
      const d = Ws(
        e,
        u,
        t
      );
      d && h.addPoints(d.toArray());
    }
  for (const u of s.points.values()) {
    const d = Us(
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
        if (!_(t) && e.isTooCloseToEdges(f)) {
          d.tooClose = !0;
          continue;
        }
        if (!d.tooClose) {
          const p = e.createProximityRectangle(u);
          if (!p)
            throw new Error("unable to create proximity rectangle");
          for (const S of n)
            if (d.tooClose = Hi(
              p,
              S,
              t,
              !1
            ), d.tooClose) break;
        }
      }
  }
  for (const u of h.points.values()) {
    if (u.tooClose || k.greaterThan(u.x, c) || k.greaterThan(u.y, l) || (e.x = u.x, e.y = u.y, Bi(e, n, t))) continue;
    Ti(
      e,
      t,
      i,
      n,
      r,
      u,
      a
    );
    let p = r.length > 1;
    (t.cutType === "efficiency" && this.config.groups.efficiency.position || ["guillotine", "beam"].includes(t.cutType) && this.config.groups.guillotine.position) && (Xr.call(this, r, t) || (p = !1)), p && (t.cutType === "efficiency" && this.config.groups.efficiency.position || ["guillotine", "beam"].includes(t.cutType) && this.config.groups.guillotine.position) && u.type !== "group" && O(e) && js({
      container: t,
      containerPlacedShapes: n,
      unplacedShapes: r,
      shape: e,
      point: u,
      config: this.config,
      scoreFunction: (S, g, w, m, x) => {
        Ti(
          S,
          g,
          i,
          w,
          m,
          x,
          a
        );
      }
    });
  }
  return !0;
}
function Xr(e, t) {
  return !0;
}
async function hs(e, t, i = null, n = null, r = {}, s = null) {
  if (!n)
    throw new Error("no testFunction provided to testShapeRotations");
  if (typeof n != "function")
    throw new Error("testFunction provided to testShapeRotations is not a function");
  if (n.constructor.name !== "AsyncFunction")
    throw new Error("testFunction provided to testShapeRotations must be async");
  if (D(e)) {
    s && (r[s] = e.rot), await n.call(this, r);
    return;
  }
  ce(e.orientationLock) && (i = Hs(e, t));
  const o = ce(i) ? i : 0;
  Pe(e, o, t) && xe(e, t, o) && ($e(e, o, t), s && (r[s] = o), await n.call(this, r));
  const a = 1;
  i === null && !e.isSquare && Pe(e, a, t) && xe(e, t, a) && ($e(e, a, t), s && (r[s] = a), await n.call(this, r));
}
async function Bt(e, t, i) {
  if (!e.length) return !1;
  if (ee(e)) {
    const h = /* @__PURE__ */ new Set();
    e = e.filter((f) => h.has(f.autoId) ? !1 : (h.add(f.autoId), !0));
  }
  const r = i.getStock;
  if (r.saw && !qe(r.saw)) throw new Error("not real saw");
  const s = e?.filter((h) => h.added);
  if (!s.length) return;
  const o = new Set(s.map((h) => h.autoId)), a = Zt.call(
    this,
    null,
    s,
    i
  );
  if (a.points.size === 0) return !1;
  const c = t ? {
    x: /* @__PURE__ */ new Map([[t.x, [t]]]),
    y: /* @__PURE__ */ new Map([[t.y, [t]]])
  } : {
    x: /* @__PURE__ */ new Map(),
    y: /* @__PURE__ */ new Map()
  };
  function l() {
    const h = V(
      e,
      r,
      "filter"
    ), f = /* @__PURE__ */ new Set();
    for (const g of h)
      if (D(g) && !J(g)) {
        const w = g;
        if (w.shapes?.length)
          for (const m of w.shapes)
            f.add(m.autoId);
      }
    const u = h.filter((g) => {
      if (J(g)) return !1;
      if (_e(g) || ue(g)) {
        const w = g;
        return !(!w.shapes || w.shapes.length === 0);
      }
      if (O(g))
        return !(f.has(g.autoId) || g?.group?.inGroup);
    }), d = u.filter((g) => D(g) && !J(g)), p = u.filter((g) => O(g)), S = [...d, ...p];
    return T("groups", `[getRelevantUnplacedShapes] ${S.length} unplaced (${d.length} groups, ${p.length} shapes)`), d.length > 0 && d.forEach((g) => {
      T("groups", `Group ${g.id}: ${g.shapes?.length || 0} child shapes, ${g.shapes.map((w) => w.id).join()}, added=${g.added}`);
    }), S;
  }
  for (let h = l(); h.length; ) {
    let f = function() {
      const m = h.filter((I) => typeof I?.bestScore?.total == "number");
      if (!m?.length) return !1;
      const x = Qr(m);
      if (!x) return null;
      const $ = Kr.call(this, i, r, c, x, s, o);
      return $.added && !o.has($.autoId) && (D($) && $.type !== "position" || s.push($), o.add($.autoId), j(i) && (i.shapes = i.shapes.filter((y) => y.autoId !== $.autoId))), v([
        () => b($.added).to.be.true,
        () => b(ee(s), "duplicates found in containerPlacedShapes").to.be.false,
        () => b(s.every((I) => I.added), "containerPlacedShapes contains unplaced shapes").to.be.true
      ]), { bestShapeOrGroup: x, winningShapeOrGroup: $ };
    }, u = null;
    this.uniqueShapes.length > 1 && i.cutType === "efficiency" && this.config.efficiency.rayCasting && !this.hasMinSpacing && (u = zs(
      i,
      s
    ));
    const d = h.length;
    let p = !1;
    for (let m = 0; m < d; m++) {
      let x = !1;
      if (p && h[m].isSameSize(h[m - 1]))
        continue;
      for (let y = 0; y < m; y++)
        if (h[y].isSameSize(h[m])) {
          x = !0;
          break;
        }
      if (x) {
        p = !0;
        continue;
      } else
        p = !1;
      const $ = h[m];
      $.resetBestScore();
      const I = zt.call(this, i, r, $);
      if (await hs.call(
        this,
        $,
        i,
        null,
        Yr,
        {
          shapeOrGroup: $,
          container: i,
          weighting: I,
          containerPlacedShapes: s,
          unplacedShapes: h,
          placementPositions: a,
          rayCastCoords: u,
          placedCoords: c
        }
      ), D($) && !J($)) {
        const y = $;
        if (!y.bestScore || typeof y.bestScore.total != "number") {
          T("groups", `[placeShapes] Group ${y.id} has no valid placement. Releasing it and all clones.`);
          const E = y.autoId.replace(/\.\d+$/, ""), A = [];
          for (const M of e)
            if (D(M) && !J(M)) {
              const G = M;
              G.autoId.replace(/\.\d+$/, "") === E && !G.added && A.push(G);
            }
          if (A.length > 0) {
            T("groups", `  Releasing ${A.length} groups (including clones)`);
            const M = [], G = /* @__PURE__ */ new Set();
            for (const C of A)
              if (C.shapes && C.shapes.length > 0)
                for (const q of C.shapes)
                  G.has(q.autoId) || (M.push(q), G.add(q.autoId));
            for (const C of A)
              T("groups", `    Destroying group ${C.id}`), C.destroy();
            M.length > 0 && (T("groups", `  Adding ${M.length} released shapes back to containerShapes`), e.push(...M));
          }
        }
      }
    }
    const S = f.call(this, e);
    if (S === !1 || S === null) return;
    const { bestShapeOrGroup: g, winningShapeOrGroup: w } = S;
    if (h = l(), h.length > 0) {
      const m = Zt(
        w ? [w] : [],
        s,
        i
      );
      a.addPoints(m.toArray()), a.deletePoint(new $t(g.x, g.y));
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
function Vr(e, t) {
  if (this.config.evo.disable || e.stockID !== t.id) return !1;
  const i = V(this.shapeList, t, "filter", null), n = we(i, null, !0);
  return n.length <= 1 || t?.saw?.stockType === "roll" || n.length > 100 || e?.algoTime > 2e3 || !this.enableEvo || e.cutType === "efficiency" && e?.score[this.successMetric] < 0.65 || e?.score?.totalShapesPlaced <= 2 ? !1 : i.length <= this.config.evo.stockLimit;
}
function Kr(e, t, i, n, r, s) {
  const o = D(n) ? n : n.bestScore?.group ?? null;
  if (o) {
    const c = o.shapes.filter((l) => l.added || l.group?.inGroup);
    if (c.length > 0)
      T("groups", `[placeBestShapeOrGroup] Group ${o.id} is invalid - ${c.length}/${o.shapes.length} shapes already placed. Placing individual shape instead.`), D(n) || (n.bestScore.group = null);
    else {
      if (T("groups", `[placeBestShapeOrGroup] Placing group ${o.id} with ${o.shapes.length} shapes (type=${o.type})`), o.placementOrder = this.counters.placement, this.counters.placement += o.shapes.length, o.setPositionToBestScore(), Ii(e, o), o.addToStock(t), Gt(i, o), o.placeMyShapes(t), o.type === "position")
        for (const l of o.shapes)
          this.shapeList.some((h) => h.autoId === l.autoId) || this.shapeList.push(l);
      if (o.type !== "position" && o.type !== "firstShape")
        for (const l of o.shapes)
          l.added && !l.group?.inGroup && !s.has(l.autoId) && (r.push(l), s.add(l.autoId));
      return o;
    }
  } else n && (n.placementOrder = this.counters.placement++, n.setPositionToBestScore(), Ii(e, n), n.addToStock(t), Gt(i, n));
  return o || n;
}
function Qr(e) {
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
let Jr = class {
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
function Zr(...e) {
  return class {
  };
}
const lt = {
  Schema: Jr,
  model: Zr,
  connect: () => Promise.resolve(),
  connection: {}
}, ve = lt.Schema, Ee = new ve({
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
  discount: Number,
  // Percentage discount (0-100)
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
  },
  db_sawId: {
    type: ve.Types.ObjectId,
    ref: "saws"
  },
  // Associated extras by type - stores array of Extra IDs
  extras: {
    banding: [{
      type: ve.Types.ObjectId,
      ref: "extras"
    }],
    finish: [{
      type: ve.Types.ObjectId,
      ref: "extras"
    }],
    planing: [{
      type: ve.Types.ObjectId,
      ref: "extras"
    }],
    machining: [{
      type: ve.Types.ObjectId,
      ref: "extras"
    }]
  },
  category: String,
  color: String,
  imageUrl: String,
  tags: [String],
  weight: Number,
  finish: String,
  // Sample ordering configuration
  sample: {
    enabled: { type: Boolean, default: !1 },
    price: { type: Number, default: 0 },
    // 0 = free
    description: String,
    maxQuantity: { type: Number, default: 1 }
  }
});
Ee.index({ organisation: 1, name: 1 });
Ee.index({ organisation: 1, type: 1 });
Ee.index({ organisation: 1, _id: -1 });
Ee.index({ organisation: 1, l: 1, w: 1 });
Ee.index({ name: "text", type: "text", description: "text" });
Ee.plugin(Ui);
const eo = lt.model(
  "material",
  Ee,
  "materials"
), Di = lt.Schema, X = new Di({
  organisation: {
    type: String,
    required: !0
  },
  name: String,
  material: {
    type: String,
    required: !0
  },
  db_materialId: {
    type: Di.Types.ObjectId,
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
  discount: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
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
  category: String,
  tags: {
    type: [String],
    default: []
  },
  imageUrl: String,
  color: String,
  weight: {
    type: Number,
    min: 0
  },
  finish: String,
  db_sawId: String,
  // Fields that override material values (empty array = inherit all from material)
  // When a field is in this array, the stock's value is used instead of material's
  overrides: {
    type: [String],
    default: void 0
    // undefined = legacy stock (all fields are overrides)
  }
});
function to(e) {
  return e ? {
    l1: ze({ v: e[2], dp: 4 }),
    l2: ze({ v: e[3], dp: 4 }),
    w1: ze({ v: e[0], dp: 4 }),
    w2: ze({ v: e[1], dp: 4 })
  } : {
    l1: 0,
    l2: 0,
    w1: 0,
    w2: 0
  };
}
X.pre("save", function(e) {
  this.material = this.material?.toLowerCase(), this.area = (this.l - parseFloat(this?.trim?.[2]) - parseFloat(this?.trim?.[3])) * (this.w - parseFloat(this?.trim?.[0]) - parseFloat(this?.trim?.[1])), e();
});
X.index({ organisation: 1, name: 1 });
X.index({ organisation: 1, material: 1 });
X.index({ organisation: 1, db_materialId: 1 });
X.index({ organisation: 1, ecommerce: 1, isOffcut: 1, name: 1 });
X.index({ organisation: 1, ecommerce: 1, isOffcut: 1, material: 1 });
X.index({ organisation: 1, ecommerce: 1, isOffcut: 1, _id: -1 });
X.index({ organisation: 1, ecommerce: 1, isOffcut: 1, t: 1 });
X.index({ organisation: 1, ecommerce: 1, isOffcut: 1, cost: 1 });
X.index({ organisation: 1, ecommerce: 1, isOffcut: 1, l: 1, w: 1 });
X.index({ organisation: 1, ecommerce: 1, isOffcut: 1, category: 1 });
X.index({ organisation: 1, ecommerce: 1, q: 1 });
X.index({ organisation: 1, isOffcut: 1, material: 1 });
X.index({ name: "text", material: "text", category: "text", tags: "text" });
X.plugin(Ui);
const io = lt.model(
  "stock",
  X,
  "stock"
);
async function so(e = [], t, i = []) {
  t instanceof Ye || (t = new Ye(t));
  let n = [];
  const r = [];
  for (const s of e) {
    if (!ce(s.material)) continue;
    const o = n.filter((a) => {
      if (xe(s, a)) {
        let c = !1, l = !1, h = !0;
        if (a?.saw?.stockType === "linear" && (k.equalTo(s.w, a.w) || (h = !1)), (s.t === a.t || !ce(a.t)) && (l = !0), s.material === a.material && (c = !0), a?.saw?.stockType === "linear") {
          if (c && l && h)
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
              $nin: i.map((h) => h?.id?.toLowerCase())
            }
          }
        ]
      }, [c, l] = await Promise.all([
        eo.findById(s?.material?.toLowerCase())?.lean(),
        //TODO make sorting order and limit configurable based on org
        io.find(a).sort({ area: 1 }).limit(3).lean()
      ]);
      c && l.length ? l.forEach((h) => {
        const f = to(h.trim), u = {
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
        const d = _s.parse({
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
        n.push(new It(d)), Array.isArray(s.stockLock) ? s.stockLock.push(d.parentId) : s.stockLock = [d.parentId];
      }) : r.push({
        material: c.name,
        t: s.t,
        shape: s.parentId
      });
    } catch (a) {
      throw console.error("error finding stock", a.message), new Error(a);
    }
  }
  if (n.length)
    n = kt(n);
  else if (!i?.length)
    throw new Error("No relevant stock found - check material, thickness, dimensions & stock quantity");
  return {
    stockList: n,
    unavailableStock: r
  };
}
function no(e, t, i = !1) {
  t.forEach((s) => {
    s.identicalTo = [];
  });
  const n = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (n.some((l) => l.some((h) => h.id === o.id))) continue;
    const c = [o];
    for (let l = s + 1; l < e.length; l++) {
      const h = e[l];
      o.isIdentical(h, i) && c.push(h);
    }
    c.length > 1 && n.push(c);
  }
  const r = /* @__PURE__ */ new Map();
  t.forEach((s) => {
    r.has(s.parentId) || r.set(s.parentId, []), r.get(s.parentId).push(s);
  }), n.forEach((s) => {
    const o = s.map((a) => a.parentId);
    o.forEach((a) => {
      (r.get(a) || []).forEach((l) => {
        o.forEach((h) => {
          h !== l.parentId && !l.identicalTo.includes(h) && l.identicalTo.push(h);
        });
      });
    });
  }), t.forEach((s) => {
    (r.get(s.parentId) || []).length > 1 && !s.identicalTo.includes(s.parentId) && s.identicalTo.push(s.parentId);
  });
}
function ro(e, t) {
  for (const i of e) {
    i.fitsStock = {};
    for (const n of t) {
      const r = ot(i, n);
      i.fitsStock[n.parentId] = {
        any: xe(i, n, null),
        0: r.includes(0),
        1: r.includes(1)
      };
    }
  }
}
function oo(e, t, i, n) {
  const r = n?.similarityThreshold ?? 0.1, s = n?.selectionStrategy, o = n?.minPerShape ?? 0, a = n?.minTotal ?? 0;
  if (e.length <= 1)
    return t;
  const { filtered: c, excludedGroups: l } = lo(
    e,
    i,
    { similarityThreshold: r, selectionStrategy: s }
  );
  let h = [...c], f = [...l];
  if (o > 0) {
    const p = /* @__PURE__ */ new Map();
    for (const g of t) {
      const w = p.get(g.parentId) || 0;
      p.set(g.parentId, w + 1);
    }
    const S = h.filter((g) => (p.get(g.parentId) || 0) < o);
    if (S.length > 0) {
      for (const g of S) {
        const w = g.parentId;
        for (const m of f) {
          const x = m.filter(($) => (p.get($.original.parentId) || 0) >= o);
          if (x.length > 0) {
            const $ = x.sort((y, E) => (p.get(E.original.parentId) || 0) - (p.get(y.original.parentId) || 0))[0], I = h.findIndex((y) => y.parentId === w);
            if (I !== -1) {
              h[I] = $.original;
              const y = m.findIndex((E) => E === $);
              y !== -1 && m.splice(y, 1);
              break;
            }
          }
        }
      }
      f = f.filter((g) => g.length > 0);
    }
  }
  if (a > 0) {
    const p = new Set(h.map((g) => g.parentId)), S = t.filter((g) => p.has(g.parentId)).length;
    if (S < a && f.length > 0) {
      const g = [];
      let w = S;
      for (; w < a && f.some((m) => m.length > 0); ) {
        for (let m = 0; m < f.length && w < a; m++) {
          const x = f[m];
          if (x.length > 0) {
            const I = ao([...x], s)[0], y = I.original.parentId, E = t.filter((M) => M.parentId === y).length;
            g.push(I.original), w += E;
            const A = x.findIndex((M) => M === I);
            A !== -1 && x.splice(A, 1);
          }
        }
        if (f = f.filter((m) => m.length > 0), f.length === 0 || f.every((m) => m.length === 0))
          break;
      }
      h = [...h, ...g];
    }
  }
  const u = new Set(h.map((p) => p.parentId));
  return t.filter((p) => u.has(p.parentId));
}
function ao(e, t) {
  switch (t) {
    case "largest":
      return e.sort((i, n) => n.area - i.area);
    case "smallest":
      return e.sort((i, n) => i.area - n.area);
    default:
      return e;
  }
}
function lo(e, t, i) {
  const n = i.similarityThreshold, r = i.selectionStrategy;
  if (e.length <= 1) return { filtered: e, excludedGroups: [] };
  const s = e.map((l) => {
    const h = {
      l: l.longSide,
      w: l.shortSide
    };
    return {
      original: l,
      // Keep reference to the original shape object
      rotated: h,
      // Normalized dimensions for comparison (keeping 'rotated' name for compatibility)
      area: l.area
      // Area for 'largest'/'smallest' selection
    };
  }), o = [];
  for (const l of s) {
    let h = !1;
    for (const f of o)
      if (f.some((u) => co(l.rotated, u.rotated, n))) {
        f.push(l), h = !0;
        break;
      }
    h || o.push([l]);
  }
  const a = [], c = [];
  return o.forEach((l) => {
    if (l.length === 1) {
      a.push(l[0]);
      return;
    }
    let h;
    switch (r) {
      case "largest":
        h = l.reduce((u, d) => d.area > u.area ? d : u, l[0]);
        break;
      case "smallest":
        h = l.reduce((u, d) => d.area < u.area ? d : u, l[0]);
        break;
      default:
        h = l[0];
    }
    a.push(h);
    const f = l.filter((u) => u !== h);
    f.length > 0 && c.push(f);
  }), {
    filtered: a.map((l) => l.original),
    excludedGroups: c
  };
}
function co(e, t, i) {
  const n = Math.abs(e.l - t.l) / Math.max(e.l, t.l, 1), r = Math.abs(e.w - t.w) / Math.max(e.w, t.w, 1);
  return n <= i && r <= i;
}
function uo(e, t, i) {
  if (T("stack", `previous stock ${t.id}`), ["l", "w", "material", "t"].some((s) => e[s] !== t[s])) return !1;
  const n = e.cutType === "guillotine" || e.cutType === "beam", r = e.saw.guillotineOptions?.strategy !== "time";
  if (!n || n && r) {
    const s = ds.call(
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
function ds(e, t, i, n) {
  if (!this.config.stack || !i.length) return !1;
  const r = e.saw;
  if (!r?.options?.stackingMode || r.options.stackingMode === "none") return !1;
  if (T("stack", `looking for stack for ${e.id}, comparing to ${t.id}`), r.cutType === "beam" && t.stack) {
    let s = t, o = 1;
    if (t.stack.stock ? (s = t.stack.stock, o = s.stack?.number || 1) : t.stack.number && (o = t.stack.number), s.t * o + e.t > r.stackHeight)
      return !1;
  }
  if (e.parentId === t.parentId) {
    if (r.cutType === "beam" && r.stackHeight > 0 && e.t * 2 > r.stackHeight)
      return !1;
    const s = oe(n, t);
    if (!s.length) return !1;
    const o = ps.call(this, [t], s, e, i, !0, !0, r.options.stackingMode === "identical");
    if (o)
      return e.stack = { stock: o }, o.stack.number === 1 ? o.stack.number = 2 : o.incrementStack(), o;
  }
  return !1;
}
function fo(e, t) {
  if (!this.config.findDuplicatePatterns) return !1;
  T("stack", `🔎 checkForDuplicates called for ${e.id}`);
  const i = this.shapeList.filter((s) => s.added);
  T("stack", `   Total shapes added across all stock: ${i.length}`);
  const n = this.stockList.filter((s) => s.used && s.id !== e.id && s.l === e.l && s.w === e.w);
  if (T("stack", `   Relevant used stock with matching dimensions: ${n.map((s) => s.id).join(", ")}`), !n.length)
    return T("stack", `   No relevant stock found for ${e.id}`), !1;
  const r = ps.call(this, n, i, e, t, !0, !1);
  return r ? (T("stack", `   ✅ Duplicate found: ${e.id} matches ${r.id}`), Ys(r, e), e.used = !0, r) : (T("stack", `   No duplicate pattern found for ${e.id}`), !1);
}
function ps(e, t, i, n, r = !0, s = !0) {
  if (!e.length || !n.length) return null;
  T("stack", `🔍 Checking for duplicate patterns for ${i.id}`), T("stack", `   Current shapes count: ${n.length}`), T("stack", `   Used stock to check: ${e.map((a) => a.id).join(", ")}`);
  const o = /* @__PURE__ */ new Map();
  for (const a of e) {
    T("stack", `   📋 Checking against stock ${a.id}`);
    const c = oe(t, a);
    if (!c.length) {
      T("stack", `      ❌ No shapes on ${a.id}, skipping`);
      continue;
    }
    T("stack", `      Stock ${a.id} has ${c.length} shapes`);
    const l = c.length, h = [];
    o.clear();
    let f = !0;
    for (const u of c) {
      let d = null;
      if (s) {
        const p = n.filter((g) => !o.has(g)), S = p.filter((g) => g.isIdentical(u, !1));
        S.length === 1 ? (d = S[0], T("stack", `      ✓ Shape ${u.id} matched to ${d.id}`)) : S.length > 1 ? (d = S.find((g) => g.parentId === u.parentId) || S[0], T("stack", `      ✓ Shape ${u.id} matched to ${d.id} (${S.length} candidates, preferred by parentId: ${d.parentId === u.parentId})`)) : (T("stack", `      ✗ Shape ${u.id} has no identical match`), T("stack", `         Available shapes: ${p.map((g) => g.id).join(", ")}`));
      } else {
        const S = n.filter((g) => !o.has(g)).filter((g) => g.longSide === u.longSide && g.shortSide === u.shortSide && Pe(g, u.rot, a));
        S.length === 1 ? d = S[0] : S.length > 1 && (d = S.find((g) => g.parentId === u.parentId) || S[0]);
      }
      if (d)
        o.set(d, !0), h.push({
          current: d,
          match: u
        });
      else {
        T("stack", `      ❌ Failed to match all shapes for ${a.id}`), f = !1;
        break;
      }
    }
    if (f && h.length === l) {
      if (T("stack", `      ✅ Perfect match found: ${i.id} matches ${a.id}`), r) {
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
      return a;
    } else
      T("stack", `      ⚠️ Stock ${a.id}: allMatched=${f}, matches=${h.length}, target=${l}`);
  }
  return T("stack", `   ❌ No duplicate pattern found for ${i.id}`), null;
}
class Ri extends Xs {
  // Zod schema for validation and serialization
  static schema = hn;
  static computedProperties = dn;
  /**
   * Get entity type
   */
  getType() {
    return B.Optimiser;
  }
  constructor(t) {
    const i = un(t.user, t), n = {
      // Pass through most properties directly
      ...t,
      // Apply defaults for arrays
      stockList: t.stockList || [],
      shapeList: t.shapeList || [],
      userGroups: t.userGroups || [],
      // Config overrides
      config: i,
      successMetric: gi(i, "successMetric", t.successMetric || Z.successMetric),
      enableEvo: gi(i, "evo.disable", !1) ? !1 : t.enableEvo ?? !0,
      weighting: t.weighting || {
        efficiency: se.efficiency,
        guillotine: se.guillotine,
        roll: se.roll
      },
      stockType: t.saw?.stockType || null,
      // Don't skip validation so defaults are applied
      skipSchemaValidation: !1
    };
    super(n), !this.useInventory && this.stockList?.length && this.stockList.forEach((r) => {
      r?.saw?.stockType || (r.saw.stockType = this.saw.stockType);
    }), Mi({
      stocks: this.stockList,
      shapes: this.shapeList
    }, "Optimiser constructor"), this.uniqueStock = Oe(this.stockList), this.groupList = [], this.init();
  }
  init() {
    const t = [];
    if (!this.shapeList.length) throw new Error("No parts to process");
    this.shapeList.some((r) => r.duplicate) || ([...this.shapeList].forEach((s) => {
      s.applyTrim();
      for (let o = s.q; o--; )
        o != 0 && this.shapeList.push(s.clone(o.toString()));
    }), this.shapeList.push(...t), this.shapeList.sort(me.ID));
    const i = this.shapeList.filter((r) => !D(r));
    this.shapeAnalysis(i, this.stockList);
    const n = [];
    this.userGroups.forEach((r, s) => {
      for (let o = 0; o < r.q; o++) {
        const a = r.toGroup(s, o, this.shapeList);
        a && n.push(a);
      }
    }), Vs(n, this.stockList, this.saw), this.shapeList.push(...n), this.uniqueShapes = this.shapeList.filter((r) => !r?.duplicate), this.hasMinSpacing = typeof this?.saw?.options?.minSpacing == "number";
  }
  shapeAnalysis(t, i) {
    no.call(this, t, this.shapeList), ir.call(this, t, i), ro.call(this, t, i);
  }
  recordStackToBestResult(t, i = []) {
    if (this.bestResult) {
      const n = {
        ...this.bestResult,
        stock: t,
        shapes: i.filter((r) => r.added && r.stock.id === t.id).map((r) => r.compress())
      };
      this.bestResult = cs(n);
    }
  }
  resetClonedShapes(t) {
    t.forEach((i) => {
      const n = this.shapeList.find((r) => r.id === i.id);
      n && n.reset(!1);
    });
  }
  //various methods of choosing a selection of stock for the calculation
  stockRefinement(t, i, n) {
    if (!t.length) return [];
    const r = /* @__PURE__ */ new Set();
    i.forEach((a) => a.stockLock.forEach((c) => r.add(c)));
    const s = t.filter((a) => r.has(a.parentId));
    let o = Ks(s);
    if (n && n?.options?.stockSelection === "smallest")
      return o.sort(me.AA), [o[0]];
    if (o.some((a) => a.material)) {
      const a = o[0].material;
      o = o.filter((c) => c.material === a);
    }
    if (o.some((a) => a.t)) {
      const a = Math.min(...o.map((c) => c.t));
      o = o.filter((c) => c.t === a);
    }
    switch (n.stockType) {
      case "linear":
        return o.slice(0, 10);
      case "roll":
        return o.slice(0, 10);
      default:
        return i.length < 100 ? o.slice(0, 5) : o.slice(0, 3);
    }
  }
  /**
   * examines all strategies for each stock and returns an array of best results
   * @returns {Array} best results
   */
  async run() {
    let t = "";
    this.config.captureProfile && (t = `profile-${Date.now()}`, "profile" in console && typeof console.profile == "function" && console.profile(t));
    async function i(s, o) {
      const a = Ie.getCalculationType(s);
      if (!a) throw new Error(`calculation type not found for stock ${s.id}`);
      if (!Ie.types.includes(a))
        throw new Error(`invalid calculation type: ${a} for stock ${s.id}`);
      return o = o.filter((c) => !c.added && c.stockLock.includes(s.parentId)), await Ie[a].call(
        this,
        {},
        s,
        o
      );
    }
    function n(s, o) {
      const a = s.filter((l) => !l.unusable), c = this.stockRefinement(
        a,
        o,
        this.saw
      );
      return c.sort(me.ID), T("allStock", `refined stock ${c.map((l) => l.id).join()}`), c;
    }
    await this.allStock(i, n), this.config.secondRun.enabled && await this.secondRun(), this.config.captureProfile && "profileEnd" in console && typeof console.profileEnd == "function" && console.profileEnd(t);
    const r = [];
    for (const s of this.stockList)
      if (s.segments)
        for (const o of s.segments) {
          const a = o.shapes?.filter((c) => J(c) && c.added) || [];
          r.push(...a);
        }
    for (const s of this.shapeList)
      if (!(!O(s) || !s.added)) {
        for (const o of r)
          if (o.shapes.some((a) => a.autoId === s.autoId)) {
            s.group.addedAsGroup = o.autoId;
            break;
          }
      }
    for (let s = this.shapeList.length; s--; ) {
      const o = this.shapeList[s];
      ue(o) && (o.added && o.stock && o.placeMyShapes(o.stock), this.shapeList.splice(s, 1), this.shapeList.push(...o.shapes));
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
    let n, r = null, s = null, o, a, c, l;
    for (let h = Oe(this.stockList, !1); h.length > 0; h = Oe(this.stockList, !1)) {
      let f = V(this.shapeList);
      if (!f?.length) break;
      for (const g of h)
        if (!V(f, g, "some")) {
          T("allStock", `stock ${g.id} is unusable`), g.unusable = !0;
          break;
        }
      const u = i.call(
        this,
        h,
        f
      );
      if (v([() => b(u.every((g) => qe(g.saw))).to.be.true]), !u.length) break;
      if (l) {
        const g = u.findIndex((w) => w?.parentId === l);
        g > -1 && u.unshift(u.splice(g, 1)[0]);
      }
      if (r = null, s = null, this.stockList.some((g) => g.used)) {
        T("stack", `🔄 Checking refined stock for stacks/duplicates: ${u.map((g) => g.id).join(", ")}`);
        for (const g of u) {
          T("stack", `current stock: ${g.id}`);
          const w = V(
            f,
            g
          );
          if (w?.length) {
            if (n && (r = uo.call(this, g, n, w), r)) {
              n = r, o = g;
              break;
            }
            if (this.config.findDuplicatePatterns && (s = fo.call(this, g, w), s)) {
              n = g;
              break;
            }
          }
        }
      }
      if (!r && !s) {
        for (const m of u) {
          a = null;
          try {
            m.applyTrim();
          } catch ($) {
            T("info", `stock.applyTrim error ${$.message}`);
            continue;
          }
          const x = V(this.shapeList);
          if (!x?.length) return;
          if (a = V(x, m), !a?.length)
            if (m.allowExactFitShapes && (a = x.filter(($) => k.equalTo(
              $.l,
              m.l + m.trim.l1 + m.trim.l2
            ) && k.equalTo(
              $.w,
              m.w + m.trim.l1 + m.trim.l2
            ) || k.equalTo(
              $.w,
              m.w + m.trim.w1 + m.trim.w2
            ) && k.equalTo(
              $.l,
              m.l + m.trim.w1 + m.trim.w2
            ))), a?.length) m.removeTrim();
            else continue;
          if (!a?.length) {
            m.used = !1;
            continue;
          }
          if (this.config.filtering.enable && a.length > this.config.filtering.minTotal) {
            const $ = a.length;
            a = oo(this.uniqueShapes, x, m, {
              similarityThreshold: this.config.filtering.similarityThreshold,
              selectionStrategy: "smallest",
              minTotal: this.config.filtering.minTotal
            });
            const I = a.length;
            T("allStock", `filtering reduced shapes by ${$ - I}, orginal: ${$}, filtered: ${I}`);
          }
          await t.call(this, m, a), this.resetShapes(a, {
            keepScores: !1,
            removeGroups: !1,
            keepGuillotineData: !1
          }), h.length > 1 && a.filter((I) => D(I)).forEach((I) => I.destroy());
        }
        if (u.forEach((m) => m.used = !1), !this.bestResult || !this.bestResult?.stock)
          break;
        c = Vt(this.bestResult, this.stockList), c.score = this.bestResult.score, c.used = !0, n = c;
        const { updatedShapes: g, groups: w } = Ne({
          bestResult: this.bestResult,
          shapeList: this.shapeList,
          relevantStock: u,
          stockList: this.stockList,
          resetShapes: this.resetShapes.bind(this)
        });
        if (w.length > 0 && this.groupList && w.forEach((m) => {
          this.groupList.find(($) => $.autoId === m.autoId) || this.groupList.push(m);
        }), ht(g), this.bestResult?.offcut) {
          const m = {
            x: this.bestResult.totalLength + this.saw.bladeWidth,
            l: this.bestResult.offcut,
            w: this.bestResult.stock.w,
            stock: c
          };
          this.offcuts.push(m);
        }
        c?.saw?.stockType !== "roll" && this.summariseResults([this.bestResult], c);
      }
      f = V(this.shapeList);
      let d = [], p = [], S = 0;
      if (this.bestResult = null, this.bestPartialResult = null, r && (o?.autoAdd || dt(this.stockList, o)))
        d.push(o);
      else {
        p = we(f, !1);
        const g = p.filter((x) => ce(x.stockLock)), w = new Set(g.flatMap((x) => Array.isArray(x.stockLock) ? x.stockLock : [x.stockLock]));
        w.size || T("allStock", "no new stock requirements found");
        for (const x of w) {
          const $ = this.stockList.filter((I) => {
            if (x === I.parentId) {
              if (I.autoAdd)
                return !0;
              if (dt(this.stockList, I))
                return !0;
            }
            return !1;
          });
          if ($.length && !$.find((I) => !I.used)) {
            const I = $[0].clone($.length.toString());
            this.stockList.push(I), S++;
          }
        }
        p.filter((x) => !ce(x.stockLock) || !x.stockLock.length).length && !d.length && (d = Oe(this.stockList).filter((x) => x.autoAdd || dt(this.stockList, x)));
      }
      if (d.length && d.forEach((g) => {
        const w = g.clone(Qs(this.stockList, g));
        this.stockList.push(w), r ? l = w.parentId : l = !1, S++;
      }), S ? (this.stockList.sort(me.AA), this?.job && this.job.updateProgress({
        socketId: this.socketId,
        type: "addStock",
        message: `added ${S} additional stock`,
        stockCount: this.stockList.reduce(
          (g, w) => w.used ? ++g : g,
          0
        ),
        shapeCount: this.shapeList.reduce(
          (g, w) => w.added ? ++g : g,
          0
        )
      })) : this?.job && this.job.updateProgress({
        socketId: this.socketId,
        type: "stockComplete",
        message: `completed stock ${c.parentId}`,
        stockCount: this.stockList.reduce((g, w) => w.used ? ++g : g, 0),
        shapeCount: this.shapeList.reduce((g, w) => w.added ? ++g : g, 0)
      }), this.useInventory && p.length && Oe(this.stockList, !1).length === 0) {
        const g = await so(
          p,
          this.saw,
          this.stockList
        );
        if (g.stockList.length) {
          const w = kt(g.stockList);
          w.length && this.stockList.push(...w);
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
      t.filter((o) => o.stack?.stock && _(o.stack.stock) && o.stack.stock.id === s.id).forEach((o) => {
        o.stack = null, o.rootSegment = s.rootSegment;
      }), s.stack = null;
    }), t[0].cutType !== "guillotine") return;
    v([
      () => b(t.length).equal(this.stockList.length),
      () => b(t.every((s) => s.score)).to.be.true,
      () => b(t.every((s) => s.shapes?.length)).to.be.true
    ]), t.sort((s, o) => s.score.efficiency - o.score.efficiency), T("secondRun", `sorted stock, ${t.map((s) => s.id)}`);
    const n = [], r = [];
    for (const s of t)
      s.score.efficiency >= this.config.secondRun.efficiencyCutoff && s.score.totalShapesPlaced > 1 ? n.push(s) : r.push(s);
    if (!(!n.length || !r.length)) {
      n.sort((s, o) => o.score.efficiency - s.score.efficiency), r.sort((s, o) => o.score.efficiency - s.score.efficiency), T("secondRun", `sorted efficient stock, ${n.map((s) => s.id)}`), T("secondRun", `sorted inefficient stock, ${r.map((s) => s.id)}`);
      for (const s of n) {
        if (!r.length) break;
        const o = [];
        for (let f = 0; f < s.shapes.length; f++) {
          const u = s.shapes[f];
          if (!u) throw new Error("shape not found in donorStock.shapes");
          if (D(u)) {
            u.placeMyShapes(s), u.shapes = u.shapes.map((d) => Object.assign({}, d)), s.shapes.splice(f, 1, ...u.shapes), f--;
            continue;
          }
          if (O(u))
            u.reset(), o.push(u);
          else {
            const d = this.shapeList.find((p) => p.id === u.id);
            if (!d) throw new Error(`shape ${u.id} not found in shapeList`);
            d.reset(), o.push(d), s.shapes[f] = d;
          }
        }
        const a = /* @__PURE__ */ new Set();
        let c, l, h = null;
        for (; o.length > 0 && (c = r.find((m) => m ? !a.has(m?.id) && s.shapes[0].stockLock.includes(m.parentId) : !1), !!c); ) {
          T("secondRun", `recipientStock - ${c.id}`), a.add(c.id);
          const f = Ie.getCalculationType(s);
          if (!f) throw new Error(`calculation type not found for stock ${s.id}`);
          const u = c.cutPreference === "l" ? "x" : "y";
          let d = [];
          if (l = c.rootSegment, T("secondRun", `second run, donor stock ${s.id}, recipient stock ${c.id}`), h) {
            h.shapes.forEach((x, $) => {
              if (!O(x)) {
                const I = this.shapeList.find((y) => y.id === x.id);
                h.shapes[$] = I;
              }
            }), c.shapes.forEach((x, $) => {
              if (!O(x)) {
                const I = this.shapeList.find((y) => y.id === x.id);
                c.shapes[$] = I;
              }
            });
            let m = !1;
            if (this.config.secondRun.stack && (m = ds(c, h, [...o, ...c.shapes], this.shapeList)), m) {
              c.stack = { stock: h }, h.stack ? h.stack?.number && h.incrementStack() : h.stack = { number: 2 }, c.shapes.forEach(($) => {
                const I = o.findIndex((y) => y.id === $.id);
                I > -1 && (o.splice(I, 1), s.shapes.splice(s.shapes.findIndex((y) => y.id === $.id), 1));
              });
              const x = r.findIndex(($) => $.id === c.id);
              x > -1 && r.splice(x, 1), T("secondRun", `stack found for ${c.id} in second run`), ht(c.shapes);
              continue;
            }
          }
          if (!l) throw new Error("no root segment found in second run");
          if (ss(l, (m) => {
            if (m.offcut)
              return m[u] === 0 && (m.cutDirection = c.cutPreference, m.phase = 1), m.addToStock(c), d.push(m), !1;
          }), !d.length || (d = kt(d), !d.length)) continue;
          await Ie[f].call(
            this,
            { secondRun: !0 },
            c,
            o,
            d
          );
          const p = o.length;
          for (let m = o.length; m--; )
            o[m].added && o.splice(m, 1);
          const S = o.length, g = p - S;
          if (T("info", `second run, added ${g}`), h = c, p - S === 0) continue;
          const w = r.findIndex((m) => m.id === c.id);
          w > -1 && r.splice(w, 1), ht(c.shapes);
        }
        if (!o.length || o.every((f) => f.added))
          s.used = !1, s.shapes = [], c.shapes.push(...s.shapes);
        else {
          T("info", `second run, not all shapes moved, reverting ${s.shapes.length} shapes`);
          for (const f of s.shapes) {
            const u = this.shapeList.find((d) => d.id === f.id);
            if (!u) throw new Error("original shape not found in second run");
            u.update(f), u.addToStock(s), v([
              () => b(u.added).to.be.true,
              () => b(u.stock?.id).to.equal(s.id),
              () => b(u.x).to.equal(f.x),
              () => b(u.y).to.equal(f.y)
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
    removeUnplacedGroups: r = !1,
    keepGuillotineData: s = !0,
    keepFirstShapeSampleRotations: o = !1
  } = {}) {
    if (t?.length)
      if (r) {
        const a = /* @__PURE__ */ new Set();
        for (const l of t)
          if (D(l) && l.added && l.shapes?.length)
            for (const h of l.shapes)
              a.add(h.autoId);
        const c = t.length;
        for (let l = c; l--; ) {
          const h = t[l];
          if (D(h)) {
            if (h.shapes?.length)
              for (const f of h.shapes)
                f.reset({
                  keepScores: i,
                  keepGuillotineBatchData: s,
                  keepGroupData: !1,
                  keepFirstShapeSampleRotations: o
                });
            h.added || t.splice(l, 1);
          } else
            a.has(h.autoId) ? t.splice(l, 1) : h.reset({
              keepScores: i,
              keepGuillotineBatchData: s,
              keepGroupData: !1,
              keepFirstShapeSampleRotations: o
            });
        }
      } else {
        const a = t.length;
        for (let c = a; c--; ) {
          const l = t[c];
          if (D(l)) {
            if (l.shapes?.length)
              for (const h of l.shapes)
                h.reset({
                  keepScores: i,
                  keepGuillotineBatchData: s,
                  keepGroupData: !1,
                  keepFirstShapeSampleRotations: o
                });
            n ? t.splice(c, 1) : l.added = !1;
          } else
            l.reset({
              keepScores: i,
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
  summariseResults(t, i) {
  }
}
function bo() {
  R("Issue", Me), R("Line", Ge), R(B.Line, Ge), R("Point", $t), R(B.Point, $t), R("Rectangle", ei), R(B.Rectangle, ei), R("Container", St), R(B.Container, St), R("GuillotineState", je), R(B.GuillotineState, je), R("Placeable", mt), R(B.Placeable, mt), R("Group", bt), R(B.Group, bt), R("Offcut", Ke), R(B.Offcut, Ke), R("Segment", pe), R(B.Segment, pe), R("Shape", ti), R(B.Shape, ti), R("Stock", It), R(B.Stock, It), R("Banding", ii), R("banding", ii), R("Corner", si), R("corner", si), R("Cut", yt), R(B.Cut, yt), R("Extras", ni), R(B.Extras, ni), R("Finish", ri), R("finish", ri), R("HingeHole", oi), R("hingeHole", oi), R("Hole", ai), R("hole", ai), R("ImageUpload", mi), R("imageUpload", mi), R("InputSaw", li), R(B.InputSaw, li), R("InputShape", ci), R(B.InputShape, ci), R("InputStock", ui), R(B.InputStock, ui), R("InputUserGroup", fi), R(B.Group, fi), R("Machining", hi), R(B.Machining, hi), R("Optimiser", Ri), R(B.Optimiser, Ri), R("Planing", di), R("planing", di), R("PointCollection", xt), R(B.PointCollection, xt), R("Saw", Ye), R(B.Saw, Ye);
}
export {
  bo as initializeStaticRegistry
};

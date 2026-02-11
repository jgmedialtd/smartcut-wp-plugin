import { c as gs, z as We, a as ae, D as Ii, b as ms, e as Ss, d as ys, f as ws, g as nt, s as $s, i as bs, h as xs, j as Is, k as Ts, P as ft, o as ks, l as Cs, E as N, C as ht, m as Ps, I as Oe, n as vs, p as D, q as Y, r as we, t as v, u as rt, v as T, w as Ti, x as F, y as j, A as he, B as O, F as Ce, G as E, H as x, J as $e, K as Es, L as dt, M as Pt, N as Re, O as J, Q as ki, R as ee, S as Ue, T as me, U as oe, V as ot, W as V, X as Ae, Y as Me, Z as pt, _ as Ds, $ as Ci, a0 as Rs, a1 as As, a2 as ue, a3 as je, a4 as be, a5 as Pe, a6 as xe, a7 as Ls, a8 as Pi, a9 as vi, aa as Ei, ab as Fe, ac as Os, ad as Di, ae as Ri, af as Ms, ag as gt, ah as qs, ai as ce, aj as tt, ak as Ai, al as Fs, am as Wt, an as Gs, ao as Bs, ap as Ns, aq as Hs, ar as Ut, as as zs, at as mt, au as St, av as Ws, aw as Us, ax as js, ay as He, az as Ye, aA as Ys, aB as yt, aC as wt, aD as _s, aE as Xs, aF as Le, aG as Vs, aH as Ks, aI as at, aJ as lt, aK as Qs, aL as R, aM as jt, aN as Yt, aO as _t, aP as Xt, aQ as Vt, aR as Kt, aS as Qt, aT as Jt, aU as Zt, aV as ei, aW as ti, aX as ii, aY as si, aZ as ni } from "./result.zod-B50712hY.js";
import { h as de, n as ne, i as _e, o as Li, j as ri, k as Te, l as ct, m as te, q as W, t as ie, u as De, v as Xe, w as U, x as z, y as Js, A as Zs, B as _ } from "./vendor-C048ug3t.js";
import { m as Oi, g as en } from "./vendor-lodash-B8VQpKjD.js";
import { i as Se } from "./environment-BeBZzWz6.js";
import "./vendor-i18next-2OYl82kj.js";
import { m as Mi } from "./vendor-mongoose-DflRMGuL.js";
const qi = ["root", "firstShape", "near", "far", ""], tn = gs.extend({
  // Cutting information
  cuts: ae("Cut").default([]).behavior({ compress: "exclude" }),
  // Stock reference - serialize as reference only (default zRef behavior)
  stock: We("Stock", { nullable: !0, description: "Stock reference for this segment" }),
  phase: ne().int().min(0).nullable().default(null),
  cutDirection: _e(Ii).nullable().default(null).describe("The primary cut direction for this segment"),
  // Segment properties
  merged: de().default(!1),
  firstShape: We("Shape"),
  children: ae("Segment", {
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
  type: _e(qi).nullable().default(null),
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
Li({
  x: ne().optional(),
  y: ne().optional(),
  l: ne().optional(),
  w: ne().optional(),
  type: _e(qi),
  parent: ri(),
  // Segment instance
  stock: ri(),
  // Stock instance
  offcut: de().optional(),
  merged: de().optional(),
  cutDirection: _e(Ii).nullable().optional()
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
}, nn = Li({
  id: Te().optional(),
  url: Te().optional(),
  size: ne().optional(),
  mimeType: Te().optional(),
  name: Te().optional(),
  width: ne().optional(),
  height: ne().optional()
}), rn = Ss.extend({
  // ImageUpload specific properties
  images: ct(nn).default([]).describe("Array of uploaded images"),
  maxImages: ne().default(5).describe("Maximum number of images allowed"),
  allowedTypes: ct(Te()).default(["image/jpeg", "image/png", "image/gif"]).describe("Allowed MIME types"),
  maxSizeBytes: ne().default(5242880).describe("Maximum file size in bytes (default 5MB)"),
  description: Te().optional().describe("Description of uploaded images"),
  tags: ct(Te()).default([]).describe("Tags associated with images")
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
let Fi;
Fi = Oi({}, an, ln);
let Z = Fi;
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
  const n = Oi({}, Z, i);
  return console.log(`[CONFIG] custom config applied for ${e?.username}`), n;
}
function fn(e, t = null) {
  if (!e || !e?.config) return null;
  switch (e.id) {
    //Glassense Kolu
    case "662a2f8ad28745b63665e68a": {
      const i = "shapeList" in t ? t.shapeList : t.inputShapes, n = i ? i.reduce((o, s) => o + (s.q || 0), 0) : 0;
      if (t) if (n <= 80) {
        const o = { ...e.config };
        return o.groups.guillotine.strips = Z.groups.guillotine.strips, o.sample.guillotine = Z.sample.guillotine, o.guillotine.stripShapes.iterations = Z.guillotine.stripShapes.iterations, o;
      } else
        return e.config;
      else return e.config;
    }
  }
  return e.config;
}
function oi(e, t, i) {
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
  saw: We("Saw").describe("Saw configuration"),
  stockList: ae("Stock").default([]).describe("List of stock materials"),
  shapeList: nt(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: ae("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: ae("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: ae("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: nt(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: nt(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: $s,
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
    placement: Xe().default(0),
    group: Xe().default(0)
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
  inputSaw: bs,
  inputShapes: ie(Ts),
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
  v: Xe().optional(),
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
  v: Xe().optional(),
  webhook: z().optional()
});
class Ve extends ft {
  // Required: Define schema and computed properties for SchemaClass
  static schema = ks;
  static computedProperties = Cs;
  constructor(t = {}) {
    const i = { ...t, offcut: !0 };
    super(i), this.offcut = !0;
  }
  /**
    * Get entity type
    */
  getType() {
    return N.Offcut;
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
    return new Ve({
      ...t,
      // Include all rectangle properties (l, w, x, y, material)
      flex: t.flex,
      offcut: !0,
      addToInventory: !1,
      added: !1
    });
  }
}
class pe extends ht {
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
    return N.Segment;
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
class ai extends Ps {
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
    if (this.images && this.images.length > this.maxImages && i.push(new Oe({
      item: t,
      message: `Too many images: ${this.images.length} exceeds maximum of ${this.maxImages}`,
      type: "error"
    })), this.images)
      for (let n = 0; n < this.images.length; n++) {
        const o = this.images[n];
        if (o.url || i.push(new Oe({
          message: `Image ${n + 1} is missing URL`,
          type: "error"
        })), o.mimeType && !this.allowedTypes.includes(o.mimeType) && i.push(new Oe({
          message: `Image ${n + 1} has unsupported type: ${o.mimeType}`,
          type: "warning"
        })), o.size && o.size > this.maxSizeBytes) {
          const s = (o.size / 1048576).toFixed(2), r = (this.maxSizeBytes / 1048576).toFixed(2);
          i.push(new Oe({
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
_.colors = [
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
const Ke = _("logs"), Gi = _("cuts"), vt = _("groups"), Et = _("guillotine"), Bi = _("results"), Ni = _("scoring"), Hi = _("firstShapes"), zi = _("calculations"), Wi = _("subset"), Ui = _("secondRun"), ji = _("stack"), Dt = _("errors"), Yi = _("allStock"), Rt = _("reset"), At = _("swarm");
Dt.color = 1;
vt.color = 14;
Et.color = 159;
Rt.color = 11;
At.color = 5;
function gn(e = "info", t, i) {
  const n = t.map((r) => {
    const a = { ...r };
    for (const f in a)
      typeof a[f] == "string" && a[f].length > 30 && (a[f] = a[f].slice(0, 50) + "...");
    return a;
  }), o = console.table;
  let s = "";
  switch (console.table = (r, a) => {
    const f = console.log;
    console.log = (l) => {
      s += l + `
`;
    }, o(r, a), console.log = f;
  }, console.table(n, i), e) {
    case "info":
      Ke(s);
      break;
    case "guillotine":
      Et(s);
      break;
    case "results":
      Bi(s);
      break;
    case "secondRun":
      Ui(s);
      break;
    case "cuts":
      Gi(s);
      break;
    case "scoring":
      Ni(s);
      break;
    case "calculations":
      zi(s);
      break;
    case "stack":
      ji(s);
      break;
    case "subset":
      Wi(s);
      break;
    case "errors":
      Dt(s);
      break;
    case "allStock":
      Yi(s);
      break;
    case "firstShapes":
      Hi(s);
      break;
    case "groups":
      vt(s);
      break;
    case "reset":
      Rt(s);
      break;
    case "swarm":
      At(s);
      break;
    default:
      Ke(s);
  }
  console.table = o;
}
const mn = "\x1B[31m", Sn = "\x1B[0m", yn = {
  info: Ke,
  guillotine: Et,
  results: Bi,
  secondRun: Ui,
  cuts: Gi,
  scoring: Ni,
  calculations: zi,
  stack: ji,
  subset: Wi,
  errors: Dt,
  allStock: Yi,
  firstShapes: Hi,
  groups: vt,
  reset: Rt,
  swarm: At
}, k = (e = "info", t, i = null, n = null, o = !1, s) => {
  if (!o || !o && s?.enableLogging === !1) return;
  const r = typeof t == "function" ? t() : t, a = yn[e] || Ke;
  a(e === "errors" ? `${mn}${r}${Sn}` : r), i && a(i), n && gn(e, n);
};
vs(k);
function wn(e, t) {
  return e?.length && e.forEach((i) => {
    t = t.filter((n) => !(n.id === i.id || D(n) && n.shapes.find((o) => o.id === i.id)));
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
function Lt(e, t, i) {
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
class $n {
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
      weighting: Lt.call(
        this.CLO,
        i,
        Y(i) ? i : i.getStock
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
      this.population.push(new li(this, t));
    this.population.push(new li(
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
    this.CLO.runningEvo = !0, v("swarm", `Swarm starting - population: ${this.options.populationSize}, steps: ${this.options.steps}`), this.CLO.resetShapes(this.shapeList), this.createPopulation();
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
    return await t.call(this), this.CLO.runningEvo = !1, this.bestResult.type = "evo", v("swarm", `Swarm complete - best efficiency: ${this.bestResult?.score?.efficiency?.toFixed(3)}`), {
      result: this.bestResult,
      evolutionVisData: this.evolutionVisData
    };
  }
}
class li {
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
      const o = n;
      if (this.swarm?.weighting && this.swarm.weighting.indexOf(i) > -1) {
        let s = o - this.swarm.mutation.range, r = o + this.swarm.mutation.range;
        s < this.swarm.mutation.min && (s = this.swarm.mutation.min), r > this.swarm.mutation.max && (r = this.swarm.mutation.max), this.weighting[i] = rt(s, r);
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
        v("swarm", `Individual ${this.id} - efficiency: ${this.score.efficiency?.toFixed(3)} | weighting: { ${t} }`);
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
      i ? r += rt(-0.1, 0.1) : r += rt(-0.05, 0.05), this.weighting[n] += r;
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
function $t(e, t, i = "x") {
  if (!t) return !1;
  const n = i === "x" ? "l" : "w";
  return !!(T.greaterThanOrEqualTo(e[i], t[i]) && T.lessThanOrEqualTo(e[i] + e[n], t[i] + t[n]));
}
function Qe(e, t, i = "x") {
  if (!t) return !1;
  const n = Ti(i);
  return !!(T.greaterThanOrEqualTo(e[i], t[i]) && T.lessThan(e[i], t[i] + t[n]));
}
function _i(e) {
  return {
    cutAxis: e === "l" ? "x" : "y",
    positionAxis: e === "l" ? "y" : "x",
    cutDimension: e,
    positionDimension: F(e)
  };
}
function bn(e, t, i) {
  return e?.length ? e.filter((n) => n.added && T.equalTo(n[t], i)) : [];
}
function xn(e, t) {
  return e?.guillotineState?.myPhase === t;
}
function In(e, t) {
  e?.guillotineState && (e.guillotineState.myStripDirection = t);
}
function Tn(e, t) {
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
function Ot({
  container: e,
  shapes: t = [],
  forceNoHeadCut: i = !1,
  final: n = !1,
  saw: o = null
}) {
  H.ptxCuts = 0;
  const s = e.getStock;
  o && (s.saw = o);
  const r = j(e);
  let a;
  const f = r ? e.cutDirection : e.cutPreference;
  if (r && e.type === "root")
    a = e, a.cuts = [], a.children = [], a.shapes = t, v("cuts", `REUSING ROOT [${a.autoId ? a.id : "unknown"}] l=${a.l}, w=${a.w}, DIR ${f?.toUpperCase()}`);
  else {
    const d = H.segments, g = d.toString();
    H.segments++, a = new pe({
      id: g,
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
      type: d === 0 ? "root" : "",
      phase: r ? e.phase + 1 : 0,
      hasHeadCut: r ? e.hasHeadCut : !1,
      cutDirection: f,
      isInitial: r ? e.isInitial : !0
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
  let h, c, u;
  try {
    [h, c, u] = Xn(a, n, l.headCutCount);
  } catch (d) {
    return v("errors", `issue analysing segments ${d.message}`), {
      rootSegment: null,
      cuts: [],
      offcuts: []
    };
  }
  if (r && u.length > 0) {
    const d = u.map((g) => `${g.id}@(${g.x},${g.y})`).join(", ");
    v("cuts", `[calculateStripCuts] Returning ${u.length} offcuts for container segment at (${e.x},${e.y}): ${d}`);
  }
  return {
    rootSegment: h,
    cuts: c,
    offcuts: u
  };
}
function kn(e, t = !1) {
  let i = _i(e);
  return t && (i = Qi(i)), i;
}
function Cn(e, t, i, n, o, s, r) {
  if (this?.config && !this?.config?.guillotine?.extendSegments || t.cutType !== "guillotine" || t?.saw?.guillotineOptions?.strategy === "time") return !1;
  const a = e?.merged, f = e?.parent?.merged;
  if (a && f) return !1;
  const l = xn(i, 1), h = e?.parent ? e.parent?.hasHeadCut : !1;
  let c = !l || h;
  if (!c || (t?.saw?.stockType === "roll" && l && (c = !1), t?.saw?.stockType === "roll" && s === "w")) return !1;
  let u = r.length > 1 && n < r.length - 1;
  h && (u = !0);
  const d = T.lessThan(
    i[s],
    e[s]
  );
  return u && d && !o;
}
function Mt(e) {
  const t = F(e.cutPreference);
  return Re(t);
}
function Pn(e) {
  return F(e.cutPreference);
}
function vn(e) {
  const t = Mt(e);
  let i = 0;
  return e?.getStock?.hasTrim && e?.getStock?.trimmed === !1 && (i = e?.getStock?.trim?.[t === "x" ? "x1" : "y1"] ?? 0), i;
}
function Vi(e) {
  const t = Mt(e), i = vn(e);
  return e[t] === i;
}
function Ki(e, t, i) {
  if (!this?.config?.guillotine?.allowHeadCuts || !e?.guillotineOptions?.headCuts || !Vi(i)) return !1;
  const n = Pn(i), o = Mt(i);
  if (t[o] > i[o]) return !1;
  let s = !1;
  const r = 0.75;
  if (O(t) && t.group.addedAsGroup) {
    const a = i.shapes.filter((h) => h.group?.addedAsGroup === t.group.addedAsGroup), f = Re(n), l = Ce(a, f);
    l[n] + l[f] >= i[n] * r && (s = !0);
  } else t[n] >= i[n] * r && (s = !0);
  return s;
}
class qt {
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
    return E([() => x(t.cutDimension).to.equal(this.isHeadCut ? F(this.segment.cutDirection) : this.segment.cutDirection)]), t;
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
    return new qt({
      ...this,
      ...t
    });
  }
  // get shapes that are within boundaries of current strip
  getShapesInCurrentStrip() {
    return this.currentStripParent ? this.segment.shapes.filter((t) => Qe(t, this.currentStripParent, this.cutInfo.positionAxis)) : [];
  }
}
function Qi(e) {
  return {
    positionAxis: $e(e.positionAxis),
    positionDimension: F(e.positionDimension),
    cutAxis: $e(e.cutAxis),
    cutDimension: F(e.cutDimension)
  };
}
function ci(e) {
  return e.type === "root" && e.isInitial;
}
function Be({
  segment: e,
  stock: t,
  allStockShapes: i = [],
  forceNoHeadCut: n = !1,
  previousCutPosition: o = null,
  previousEdgeOfSegment: s = !1,
  final: r = !1,
  headCutCount: a = 0,
  attemptedDirections: f = /* @__PURE__ */ new Set()
}) {
  v("cuts", `[makeCuts] START: segment ${e.l}x${e.w} phase=${e.phase} type=${e.type} shapes=${e.shapes?.length || 0} final=${r}`);
  let l = new qt({
    segment: e,
    stock: t,
    allStockShapes: i,
    forceNoHeadCut: n,
    previousCutPosition: o,
    previousEdgeOfSegment: s,
    final: r,
    headCutCount: a,
    attemptedDirections: f
  });
  if (!Dn.call(this, l)) {
    v("cuts", "[makeCuts] EARLY RETURN: invalid input");
    return;
  }
  if (An.call(this, l)) {
    v("cuts", "[makeCuts] EARLY RETURN: duplicate segment");
    return;
  }
  Rn(l), l = Ln.call(this, l), l = Mn.call(this, l), v("cuts", `[makeCuts] Found ${l.stripParentShapes.length} strip parent shapes`), l.stripParentShapes.length && (l.segment.offcut = !1);
  const h = l.stripParentShapes?.length || 0;
  for (let m = 0; m < h; m++) {
    if (l = l.with({ currentStripIndex: m }), v("cuts", `[makeCuts] Processing shape ${m}: ${l.currentStripParent.l}x${l.currentStripParent.w}`), l.currentStripParent.l === t.l && l.currentStripParent.w === t.w) {
      v("cuts", "[makeCuts] Shape matches stock size, marking as produced"), l = fi.call(this, l);
      break;
    }
    if (l = Yn.call(this, l), l.final && l.segment?.parent?.hasHeadCut && l.segment.phase === 1 && e.type === "far" && l.isHeadCut === !1) {
      const $ = Qi(l.cutInfo), { cutAxis: b, cutDimension: w, positionDimension: P, positionAxis: A } = $;
      it({
        parentSegment: e,
        stock: t,
        cutDirection: w,
        cutAxis: b,
        positionAxis: A,
        position: e[P] + e[A],
        headCut: !0,
        ptxDummyCut: !0
      });
    }
    if (l = qn.call(this, l), l.final && t.cutType === "beam" && m === 0 && (e.type !== "far" || Ji(l)) && (l = Fn.call(this, l)), l = Gn.call(this, l), En.call(this, l) === !0) {
      v("cuts", "[makeCuts] Breaking due to edge of segment");
      break;
    }
    if (l = Wn.call(this, l), l.cut)
      l.isHeadCut && (l.segment.hasHeadCut = !0);
    else if (l.isHeadCut) {
      const $ = F(l.cutDirection);
      l.attemptedDirections.has($) ? v("cuts", `[makeCuts] Skipping reattempt - direction ${$} already attempted`) : (l = l.with({ forceNoHeadCut: !0 }), ui.call(this, l, $));
      break;
    }
    if (l = l.with({
      cutSuccess: !!l.cut,
      skippedCut: l.cut ? null : !0,
      headCutCount: l.isHeadCut && l.cut ? l.headCutCount + 1 : l.headCutCount
    }), l.cut) {
      if (l.final && (l = fi.call(this, l), t.cutType === "beam" && Bn.call(this, l), l.cut)) {
        let $ = e.parent?.autoId;
        ($ === "root" || !$) && ($ = "R"), $ = `[${$}]`;
        let b = e.autoId ? e.id : "unknown";
        b = `[${b}]`, v("cuts", `${$}->${b} P${e.phase} {${l.currentStripParent.autoId}} ${l.isHeadCut ? "HEAD" : "NORM"} ${e?.type?.toUpperCase()} ${he(e.l, 4)}x${he(e.w, 4)} ${he(l.cutPosition, 4)} ${he(l?.cut?.x1, 4)}|${he(l?.cut?.x2, 4)}|${he(l?.cut?.y1, 4)}|${he(l?.cut?.y2, 4)}`), v("cuts", `DIRECTIONS FOR ${b}: STATE ${l?.cutDirection?.toUpperCase()} CUT ${l.cut?.dimension?.toUpperCase() ?? "N/A"} SEGMENT ${e?.cutDirection?.toUpperCase()}`);
      }
      if (l = Un.call(this, l), l = jn.call(this, l), l.isHeadCut) break;
    }
  }
  const c = Zi(l.segment), { allShapesCut: u } = ts(l.segment.shapes, c, l.segment, { ignoreGroupMembership: !0 }), d = l.segment.cutDirection, g = F(d), S = !l.attemptedDirections.has(d), p = !l.attemptedDirections.has(g), y = e.cuts.length === 0;
  if (!u && S && p && y) {
    v("cuts", `[makeCuts] Not all shapes cut in segment [${e.id}] with ${l.segment.shapes.length} shapes, retrying in ${g?.toUpperCase()} direction`);
    const m = new Set(l.attemptedDirections);
    return m.add(d), l = l.with({ attemptedDirections: m }), ui.call(this, l, g), l;
  }
  return l.final && t.cutType === "beam" && e.phase === 0 && (l = Hn.call(this, l)), l.final && t.cutType === "beam" && e.type === "far" && e.parent.hasHeadCut && (l = zn.call(this, l)), l;
}
function Ji(e) {
  const { segment: t, isHeadCut: i } = e;
  return i ? !1 : t?.parent?.hasHeadCut && t.type === "far";
}
function En(e) {
  if (!e.isEdgeOfSegment) return !1;
  const { currentStripParent: t, segment: i, cutInfo: n } = e, { positionDimension: o, positionAxis: s } = n;
  if (T.greaterThanOrEqualTo(t[o] + t[s] + e.bladeWidth, i[o] + i[s]) && e.stock.cutType === "beam" || (e = e.with({ previousEdgeOfSegment: !0 }), !i.children.length)) return !1;
  const a = e.segment.children.findLast((f) => f.type === "far");
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
function ui(e, t) {
  const { segment: i } = e;
  i.cutDirection = t;
  const n = new Set(e.attemptedDirections);
  return n.add(t), e = e.with({
    isHeadCut: !1,
    attemptedDirections: n
  }), i.cuts.length = 0, i.clearChildren(), e.segment.hasHeadCut = !1, v("cuts", `REATTEMPTING [${i.id}] new direction ${i?.cutDirection?.toUpperCase()}`), Be.call(this, {
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
function Dn(e) {
  if (!e.segment) return !1;
  const { segment: t, stock: i, cutDirection: n, previousCutPosition: o, allStockShapes: s } = e;
  return !["l", "w"].includes(n) || t.l <= 0 || t.w <= 0 || o === void 0 ? !1 : (E([
    () => x(s.every((r) => O(r) || D(r)), "allStockShapes must be shape or any type of group").to.be.true,
    () => x(Y(i)).to.be.true
  ]), !0);
}
function Rn(e) {
  const { final: t } = e;
  return t && H.makeCutsIteration++, e;
}
function An(e) {
  const { segment: t, cutDirection: i } = e;
  return t.type !== "root" && H.previousSegments.some((n) => t.l === n.l && t.w === n.w && t.x === n.x && t.y === n.y && t.type === n.type && i === n.cutDirection);
}
function Ln(e) {
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
function On(e, t, i) {
  return e.filter(
    (n, o, s) => s.findIndex(
      (r) => T.equalTo(
        r[t] + r[i],
        n[t] + n[i]
      )
    ) === o
  );
}
function Mn(e) {
  const { segment: t, stock: i, cutDirection: n, cutInfo: o, previousCutPosition: s, halfBladeWidth: r } = e, { cutAxis: a, positionAxis: f, positionDimension: l } = o;
  let h = [];
  if (v("cuts", `Finding strip parent shapes. Segment ${t.id} has ${t.shapes.length} shapes:`), t.shapes.slice(0, 3).forEach((c) => {
    v("cuts", `  Shape ${c.id}: l=${c.l}, w=${c.w}, rot=${c.rot}, at (${c.x},${c.y}), added=${c.added}`);
  }), i.cutPreference === n) {
    const c = t.type === "far" && i.cutType === "guillotine" || !s ? t[a] : s + r;
    v("cuts", `[findStripParentShapes] cutPreference=${i.cutPreference}, cutDirection=${n}, cutAxis=${a}, axisPosition=${c}, segment.shapes[0]?.[${a}]=${t.shapes[0]?.[a]}, segment.type=${t.type}`), h = bn(
      t.shapes,
      a,
      c
    );
  } else {
    v("cuts", `[findStripParentShapes] NOT using cutPreference path, cutPreference=${i.cutPreference}, cutDirection=${n}, cutAxis=${a}, segment[${a}]=${t[a]}, segment.shapes[0]?.[${a}]=${t.shapes[0]?.[a]}, segment.shapes[0]?.added=${t.shapes[0]?.added}`), h = t.shapes.filter(
      (u) => u.added && T.equalTo(u[a], t[a])
    );
    const c = h.filter((u) => D(u));
    if (c.length > 0) {
      const u = /* @__PURE__ */ new Set();
      c.forEach((d) => {
        d.shapes && Array.isArray(d.shapes) && d.shapes.forEach((g) => u.add(g.autoId));
      }), h = h.filter((d) => D(d) ? !0 : !u.has(d.autoId));
    }
    h = On(h, f, l);
  }
  if (h.sort((c, u) => c[f] - u[f]), h.length && !t?.hasHeadCut) {
    const c = t.shapes.filter((d) => d.added), u = Ce(c, f);
    u && !h.some((d) => d.autoId === u.autoId) && h.push(u);
  }
  return e.with({ stripParentShapes: h });
}
function qn(e) {
  const { segment: t, stock: i, cutDirection: n, cutInfo: o, halfBladeWidth: s, allStockShapes: r, previousStripShape: a, currentStripParent: f, currentStripIndex: l, bladeWidth: h } = e, { cutAxis: c, positionAxis: u, cutDimension: d, positionDimension: g } = o;
  if (l === 0) return e;
  if (a && T.equalTo(f[c], t[c]) && T.equalTo(a[c], t[c]) && !T.equalTo(
    f[u],
    a[u] + a[g] + h
  )) {
    v("cuts", `[makeCuts] Creating gap cut at position ${f[u] - s}, dir=${n}`);
    const { cut: S, previousCutPosition: p } = it({
      parentSegment: t,
      stock: i,
      cutDirection: n,
      cutAxis: c,
      positionAxis: u,
      position: f[u] - s,
      allStockShapes: r
    });
    if (S) {
      const y = p < t[u] ? t[u] : p, m = y + s - t[u], I = f[u] - y - h - s, $ = t[u] + m, b = I > 0 ? Ft.call(this, {
        parent: t,
        stock: i,
        offcut: !0,
        type: "near",
        [c]: t[c],
        [d]: t[d],
        [u]: $,
        [g]: I
      }) : null;
      b && E([
        () => x(
          b.cutDirection,
          `near side segment ${b.id} has the same cutDirection as segment ${t.id}`
        ).not.to.equal(t.cutDirection)
      ]);
    }
  }
  return e;
}
function Fn(e) {
  if (e.stock.cutType !== "beam" || e.currentStripIndex !== 0 || e.segment.type === "far" && !Ji(e)) return e;
  const { segment: t, stock: i, cutDirection: n, cutInfo: o, allStockShapes: s, halfBladeWidth: r } = e, { cutAxis: a, positionAxis: f, positionDimension: l } = o;
  return t.phase !== 1 || !e.final || Qn({
    segment: t,
    stock: i,
    cutDirection: n,
    cutAxis: a,
    positionAxis: f,
    positionDimension: l,
    position: 1,
    allStockShapes: s,
    halfBladeWidth: r
  }), e;
}
function Gn(e) {
  const { segment: t, stock: i, cutInfo: n, halfBladeWidth: o, currentStripParent: s, currentStripIndex: r, stripParentShapes: a, isHeadCut: f, bladeWidth: l, previousEdgeOfSegment: h } = e, { positionAxis: c, cutAxis: u, positionDimension: d, cutDimension: g } = n;
  let S = s[c] + s[d] + o, p = !1, y = r;
  v("cuts", `Cut position calc: shape ${s.l}x${s.w}, posAxis=${c}, posDim=${d}`), v("cuts", `  Shape rot=${s.rot}, autoId=${s.autoId}`), v("cuts", `  ${c}=${s[c]}, ${d}=${s[d]} => cutPos=${S}`), v("cuts", `  cutDirection=${e.cutDirection}, cutAxis=${n.cutAxis}, cutDim=${n.cutDimension}`), v("cuts", `  Shape actual extent: x=[${s.x} to ${s.x + s.l}], y=[${s.y} to ${s.y + s.w}]`), v("cuts", `  Strip parent shapes count: ${a.length}`), a.length > 1 && v("cuts", `  All strip parents: ${a.map(($) => `${$.id}(${$.l}x${$.w} rot=${$.rot})`).join(", ")}`);
  let m = T.greaterThanOrEqualTo(
    s[c] + s[d] + l,
    t[c] + t[d]
  );
  const I = t.shapes;
  if (!f && !m && !h && Cn.call(this, t, i, s, r, m, e.cutDirection, a)) {
    let $ = s;
    for (let b = r + 1; b < a.length; b++) {
      const w = a[b];
      if (w.autoId === $.autoId) continue;
      if (!w) break;
      const P = I.filter(
        (C) => Qe(C, s, c)
      ), A = Ce(P, u), M = P.reduce(
        (C, q) => T.greaterThan(C[d], q[d]) ? C : q
      );
      T.greaterThan(
        M[c] + M[d],
        $[c] + $[d]
      ) && ($ = M, S = $[c] + $[d] + o);
      const G = Ce(
        I.filter(
          (C) => Qe(C, w, c)
        ),
        u
      );
      if (!T.equalTo(
        A[u] + A[g],
        G[u] + G[g]
      ))
        break;
      if (T.equalTo($[g], w[g]) && T.equalTo($[u], w[u]))
        p = !0, S = w[c] + w[d] + o, $ = w, y = b;
      else
        break;
    }
    p && (t.merged = !0, m = T.greaterThanOrEqualTo(
      S - o,
      t[c] + t[d]
    ));
  }
  return e.with({
    cutPosition: S,
    mergedCut: p,
    isEdgeOfSegment: m,
    currentStripIndex: y
  });
}
function Bn(e) {
  if (e.stock.cutType !== "beam" || !e.cut) return e;
  const { cut: t, segment: i, cutInfo: n, currentStripParent: o, currentStripIndex: s, stripParentShapes: r } = e, { positionAxis: a, positionDimension: f } = n;
  t?.guillotineState?.partProduced && s === r.length - 1 && T.equalTo(
    o[a] + o[f],
    i[a] + i[f]
  ) && (v("cuts", `MARKING PTX DUMMY CUT ${o.autoId} ${e.cutPosition}`), t.ptxData.isDummy = !0);
}
function Nn(e) {
  return e.hasHeadCut ? F(e.cutDirection) : e.cutDirection;
}
function Hn(e) {
  if (e.stock.cutType !== "beam") return e;
  const { segment: t, cutInfo: i, stock: n, cutDirection: o } = e;
  if (t.phase !== 0) return e;
  const { cutAxis: s } = i;
  for (const r of t.cuts)
    r.dimension === Nn(t) && (r[s + 1] = 0, r[s + 2] = n[o]);
  return e;
}
function zn(e) {
  if (e.stock.cutType !== "beam") return e;
  const { segment: t, cutInfo: i, stock: n, cutDirection: o } = e;
  if (t.phase !== 1) return e;
  const { cutAxis: s } = i;
  for (const r of t.cuts)
    t.hasHeadCut ? r.dimension === F(t.cutDirection) && (r[$e(s) + 2] = n[F(o)]) : r.dimension === t.cutDirection && (r[s + 2] = n[o]);
}
function Wn(e) {
  const { segment: t, stock: i, cutDirection: n, cutInfo: o, cutPosition: s, allStockShapes: r, currentStripParent: a, isHeadCut: f } = e, { cutAxis: l, positionAxis: h } = o;
  f && In(a, n);
  const { cut: c, farSideSegmentSize: u, previousCutPosition: d } = it({
    parentSegment: t,
    stock: i,
    cutDirection: n,
    cutAxis: l,
    positionAxis: h,
    position: s,
    allStockShapes: t.phase === 0 ? r : [],
    headCut: e.isHeadCut
  });
  return c && e.final && v("cuts", `MADE CUT ${c.x1}|${c.x2}|${c.y1}|${c.y2} ${c.isHead ? "HEAD" : "NORM"}`), e.with({
    cut: c,
    farSideSegmentSize: u,
    previousCutPosition: d
  });
}
function fi(e) {
  if (e.stock.cutType !== "beam") return e;
  const { cut: t, cutInfo: i, halfBladeWidth: n, currentStripParent: o } = e;
  if (!t) return e;
  const { cutAxis: s, cutDimension: r, positionAxis: a, positionDimension: f } = i;
  return T.equalTo(
    t[s + 2] - t[s + 1],
    o[r]
  ) && T.equalTo(
    t[a + 1],
    o[a] + o[f] + n
  ) && (t.guillotineState.partProduced = o.parentId), e;
}
function Un(e) {
  const {
    segment: t,
    stock: i,
    cutInfo: n,
    cutPosition: o,
    mergedCut: s,
    currentStripParent: r,
    previousCutPosition: a,
    cut: f,
    isEdgeOfSegment: l,
    halfBladeWidth: h,
    bladeWidth: c,
    allStockShapes: u,
    final: d,
    cutDirection: g,
    currentStripIndex: S
  } = e, { cutAxis: p, positionAxis: y, cutDimension: m, positionDimension: I } = n, $ = S === 0 && T.greaterThan(r[y], t[y]);
  if (!f && !l && !$) return e;
  const b = {
    parent: t,
    stock: i,
    merged: s,
    type: "near",
    hasHeadCut: t.hasHeadCut,
    shapes: []
  }, w = $ && !f ? r[y] : o, P = a != null && a >= t[y], A = P ? a + h : t[y], M = w - (P ? a + c : h + t[y]);
  v("cuts", `[createNearSegment] segment[${t.id}] at (${t.x},${t.y}), posAxis=${y}, cutAxis=${p}, previousCutPosition=${a}, hasPreviousCut=${P}, nearSegmentPosition=${A}`);
  const G = {
    [p]: t[p],
    [m]: t[m],
    [y]: A,
    [I]: M,
    cutDirection: F(g)
  };
  v("cuts", `[createNearSegment] dimensionProps: x=${G.x ?? "N/A"}, y=${G.y ?? "N/A"}, l=${G.l ?? "N/A"}, w=${G.w ?? "N/A"}`);
  const C = Ft.call(
    this,
    { ...b, ...G },
    !1
    // Don't reject if identical - we'll filter shapes ourselves
  );
  if (!C) return e;
  if (v("cuts", `[createNearSegment] AFTER creation: segment ${t.id} at (${C.x},${C.y}) ${C.l}x${C.w}`), C.shapes = t.shapes.filter((q) => T.greaterThanOrEqualTo(q.x, C.x) && T.lessThanOrEqualTo(q.x + q.l, C.x + C.l) && T.greaterThanOrEqualTo(q.y, C.y) && T.lessThanOrEqualTo(q.y + q.w, C.y + C.w)), v("cuts", `[createNearSegment] nearSideSegment.shapes.length = ${C.shapes.length}`), C.shapes.length > 0) {
    const q = T.equalTo(C.l, r.l) && T.equalTo(C.w, r.w);
    if (v("cuts", `[createNearSegment] nearSegment: ${C.l}x${C.w}, shape: ${r.l}x${r.w}, identical: ${q}, mergedCut: ${s}`), s || !q) {
      v("cuts", `CUTTING NEAR SIDE SEGMENT [${C.id}] DIR ${C?.cutDirection?.toUpperCase()}`), v("cuts", `[createNearSegment] CALLING makeCuts recursively with segment ${C.l}x${C.w}, segment.shapes.length=${C.shapes?.length}, final=${d}`);
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
      v("cuts", `[createNearSegment] RETURNED from makeCuts, childState=${K}`), e = e.with({ headCutCount: K?.headCutCount || e.headCutCount });
    }
  }
  return e.with({ nearSideSegment: C });
}
function jn(e) {
  const {
    segment: t,
    stock: i,
    cutInfo: n,
    cutPosition: o,
    farSideSegmentSize: s,
    halfBladeWidth: r,
    currentStripIndex: a,
    stripParentShapes: f,
    isHeadCut: l,
    allStockShapes: h,
    final: c
  } = e, { cutAxis: u, positionAxis: d, cutDimension: g, positionDimension: S } = n, p = {
    parent: t,
    stock: i,
    offcut: l ? !1 : a === f.length - 1,
    type: "far",
    hasHeadCut: !1,
    shapes: [],
    cutDirection: t.cutDirection
    //[] test
  }, y = {
    [u]: t[u],
    [g]: t[g],
    [d]: o + r,
    [S]: s
  };
  v("cuts", `Creating FAR segment: cutAxis=${u}, cutDim=${g}, posAxis=${d}, posDim=${S}`), v("cuts", `FAR segment props: ${u}=${t[u]}, ${g}=${t[g]}, ${d}=${o + r}, ${S}=${s}`), v("cuts", `FAR segment calculation: cutPosition=${o}, halfBladeWidth=${r}, result=${o + r}`);
  const m = Ft.call(this, { ...p, ...y });
  if (!m) return e;
  if (v("cuts", `FAR segment created [${m.id}] at (${m.x},${m.y}) ${m.l}x${m.w}`), v("cuts", `  Parent has ${t.shapes.length} shapes, far segment has ${m.shapes.length} shapes`), v("cuts", `  Cut was at position ${o} (${d}=${o})`), v("cuts", `  Expected offcut dimensions based on stock (1200x1200): should be ${t.l - o}x${t.w} or ${t.l}x${t.w - o}`), l) {
    m.shapes = t.shapes.filter(($) => {
      const b = $[$e(u)] + $[F(g)];
      return T.greaterThan(b, o);
    }), v("cuts", `HEAD CUT: Making cuts in far segment [${m.id}] with ${m.shapes.length} shapes`);
    const I = Be.call(
      this,
      {
        segment: m,
        stock: i,
        cutDirection: m.cutDirection,
        previousCutPosition: null,
        // No previous cut in this new segment yet
        allStockShapes: h,
        final: c,
        headCutCount: e.headCutCount
      }
    );
    e = e.with({ headCutCount: I?.headCutCount || e.headCutCount });
  }
  return e.with({ farSideSegment: m });
}
function es(e) {
  if (!this?.config?.guillotine?.allowHeadCuts || !e?.saw?.guillotineOptions?.headCuts) return !1;
  if (ci(e)) return !0;
  if (e.type === "far" || e.type === "root") {
    if (!Vi(e)) return !1;
    if (e.parent.hasHeadCut || ci(e.parent)) return !0;
  }
  return !1;
}
function Yn(e) {
  const { segment: t, currentStripParent: i, forceNoHeadCut: n } = e;
  if (n) return e.with({ isHeadCut: !1 });
  let o = !1;
  return es.call(this, t) ? (o = Ki.call(this, t.saw, i, t, e.cutDirection), e.with({ isHeadCut: o })) : e.with({ isHeadCut: !1 });
}
function it({
  parentSegment: e,
  stock: t,
  cutDirection: i,
  cutAxis: n,
  positionAxis: o,
  position: s,
  allStockShapes: r = [],
  headCut: a = !1,
  ptxDummyCut: f = !1,
  skipCollisionCheck: l = !1
}) {
  const h = t.halfBladeWidth, c = Ti(o), u = Es.parse({
    stock: t,
    isGuillotine: !0,
    isHead: a,
    ptxData: {
      isDummy: f
    },
    //NOTE: this has changed from cutAxis to positionAxis
    x1: o === "x" ? s : e.x,
    x2: o === "x" ? s : e.x + e.l,
    y1: o === "y" ? s : e.y,
    y2: o === "y" ? s : e.y + e.w
  });
  let d = new dt(u);
  if (!f && e.type === "near" && e.parent.hasHeadCut && (d.ptxData.headCutStrip = !0), !l) {
    const w = r.length ? r : e.shapes;
    if (Pt(
      d,
      t,
      w
    ))
      return v("cuts", `[createCut] REJECTED collision: cut at (${d.x1},${d.y1})-(${d.x2},${d.y2}), segment=(${e.x},${e.y}) ${e.l}x${e.w}`), {
        cut: null,
        farSideSegmentSize: null,
        previousCutPosition: null
      };
  }
  const g = e.cuts.filter((w) => w.dimension === i && T.equalTo(w[n + 1], d[n + 1])), S = g.length ? g[g.length - 1] : null, p = S ? S[o + 1] : null;
  if (s && p && T.equalTo(s, p))
    return {
      cut: null,
      farSideSegmentSize: null,
      previousCutPosition: null
    };
  let y = e[o] + e[c] - (s + h);
  y < 0 && (y = 0);
  const m = T.lessThanOrEqualTo(
    s - h,
    e[o] + e[c]
  ), I = s - h, $ = e[o] + e[c], b = T.greaterThanOrEqualTo(I, $);
  return d.beamTrimL1 || d.beamTrimW1 || t.cutType === "beam" && T.lessThanOrEqualTo(
    s - h,
    e[o] + e[c]
  ) || d.ptxData.isDummy || m && !b ? (d.ptxData.order = H.ptxCuts++, e.cuts.push(d)) : d.stock?.saw?.stockType === "roll" ? e.cuts.push(d) : (d = null, y = null), {
    cut: d,
    farSideSegmentSize: y,
    previousCutPosition: p
  };
}
function _n({
  x: e,
  y: t,
  l: i,
  w: n,
  type: o,
  parent: s,
  rejectIdentical: r
}) {
  return r && T.equalTo(e, s.x) && T.equalTo(t, s.y) && T.equalTo(n, s.w) && T.equalTo(i, s.l) ? "IDENTICAL_TO_PARENT" : i <= 0 || n <= 0 ? "INVALID_DIMENSIONS" : s && !s.autoId ? (console.error("[ERROR] Parent segment has no autoId!"), console.error(`Parent details: type=${s.type}, x=${s.x}, y=${s.y}, l=${s.l}, w=${s.w}`), "MISSING_PARENT_ID") : o === "root" && s ? (console.error("[ERROR] Attempting to create root segment with a parent!"), console.error(`Parent autoId: ${s.autoId}, Parent type: ${s.type}`), "ROOT_WITH_PARENT") : (o === "root" && s?.type !== void 0 && s.type !== "root" && console.error(`[ERROR] Creating root segment with non-root parent of type: ${s.type}`), null);
}
function Ft({
  x: e,
  y: t,
  l: i,
  w: n,
  type: o,
  parent: s,
  stock: r,
  offcut: a = !1,
  merged: f = !1,
  cutDirection: l = null
}, h = !0) {
  if (_n({ x: e, y: t, l: i, w: n, type: o, parent: s, rejectIdentical: h })) return;
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
      t: typeof r.t == "string" ? parseFloat(r.t) : r.t,
      id: S,
      phase: d,
      parent: s,
      stock: r,
      offcut: a,
      merged: f,
      type: o,
      grain: r.grain,
      material: r.material,
      saw: r.saw,
      cutDirection: l || F(s.cutDirection)
    }), s && s.autoId === u.autoId)
      throw console.error(`[ERROR] Segment created with itself as parent! autoId: ${u.id}`), new Error("Segment cannot be its own parent");
  } catch (S) {
    v("info", `issue creating segment ${S.message}`);
    return;
  }
  const g = s.shapes.filter((S) => S.added ? T.greaterThanOrEqualTo(S.x, u.x) && T.lessThanOrEqualTo(S.x + S.l, u.x + u.l) && T.greaterThanOrEqualTo(S.y, u.y) && T.lessThanOrEqualTo(S.y + S.w, u.y + u.w) : S.willItFit(u));
  return u.shapes = g, u;
}
function Xn(e, t = !1, i) {
  t && v("cuts", `------------------- ANALYSE SEGMENTS ${e.id} -------------------`);
  const n = [], o = [], s = [];
  let r = 0, a = 0;
  const f = /* @__PURE__ */ new Set(), l = (h, c = 0) => {
    if (!h) return c;
    if (f.has(h.autoId))
      return console.error(`[CIRCULAR REFERENCE DETECTED] Segment ${h.id} is already in the traversal path!`), console.error(`Traversal path: ${Array.from(f).join(" -> ")} -> ${h.id}`), console.error(`Segment details: autoId=${h.id}, parent=${h.parent?.id}, children=[${h.children?.map((d) => d.autoId).join(", ")}]`), c;
    f.add(h.autoId);
    let u = c;
    n.push(h), (h.offcut === !0 || !h.shapes?.length) && s.push(h);
    for (let d = 0; d < h.cuts.length; d++) {
      const g = h.cuts[d];
      if (g) {
        if (g.guillotineState.phase = h.phase, g.isHead ? (g.ptxData.function = 0, r++) : d > 0 && o[d - 1].isHead ? g.dimension === "l" ? g.ptxData.function = 1 : g.dimension === "w" && (g.ptxData.function = 2) : (g.ptxData.function = g.guillotineState.phase + 1, g.ptxData.headCutStrip && g.ptxData.function--), g.isTrim && a++, t)
          if (g.isHead) {
            let S = 0;
            Tn(h, () => S++), u = S, v("cuts", `[${h.id}] reset cut order to ${u}`);
          } else d > 0 && h.cuts[d - 1].isHead && u++;
        g.guillotineState.order = u, g.guillotineState.segmentCutOrder = d, g.guillotineState.parentSegmentID = h?.autoId || "root", t && Vn(g, h), o.push(g), t && v("cuts", `[${h.id}] {${u}} ${g.x1}|${g.x2}|${g.y1}|${g.y2}`), u++;
      }
    }
    if (h.children && h.children.length > 0) {
      const d = h.children.filter((g) => g.autoId === h.autoId ? (console.error(`[SELF-REFERENCE FOUND] Removing segment ${h.id} from its own children array`), console.error(`Segment type: ${h.type}, Phase: ${h.phase}`), console.error(`Number of children: ${h.children.length}`), console.error(`Children autoIds: ${h.children.map((S) => S.autoId).join(", ")}`), !1) : !0);
      d.length !== h.children.length && (h.children = d);
      for (const g of h.children)
        if (g && j(g)) {
          if (g.type === "firstShape")
            continue;
          if (g.autoId === h.autoId) {
            console.error(`[CRITICAL SELF-REFERENCE] Segment ${h.id} still has itself as a child!`), console.error("This should have been filtered. Skipping traversal.");
            continue;
          }
          if (f.has(g.autoId)) {
            console.error(`[CIRCULAR REFERENCE] Child segment ${g.autoId} is already in traversal path`), console.error(`Parent: ${h.id}, Path: ${Array.from(f).join(" -> ")}`);
            continue;
          }
          if (h.hasHeadCut) {
            const S = i + o.filter((p) => !p.isHead && !p.ptxData.isDummy).length;
            u = l(g, S);
          } else
            u = l(g, u);
        }
    }
    return f.delete(h.autoId), u;
  };
  return l(e), t && (v("cuts", `Segments processed: ${n.length}`), v("cuts", `Cuts processed: ${o.length}`), v("cuts", `Trim cuts found: ${a}`), v("cuts", `Head cuts found: ${r}/${i}`), v("cuts", `Offcuts identified: ${s.length}`), v("cuts", `ROOT segment [${e.id}] has ${e.children?.length || 0} children`), v("cuts", "------------------- END ANALYSE SEGMENTS -------------------")), [e, o, s];
}
function Vn(e, t) {
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
      const r = o.filter((a) => a.type === "near")[s];
      r && (e.dimension === "l" ? (i.bottom = e.y1 - r.y - n, i.top = t.y + t.w - (e.y1 + n)) : e.dimension === "w" && (i.left = e.x1 - r.x - n, i.right = t.x + t.l - (e.x1 + n)));
    }
  }
  e.distances = i;
}
function Kn(e, t) {
  return `${t}${e}`;
}
function Qn({
  segment: e,
  stock: t,
  cutDirection: i,
  cutAxis: n,
  positionAxis: o,
  positionDimension: s,
  position: r,
  allStockShapes: a,
  halfBladeWidth: f
}) {
  if (t.cutType !== "beam" || !t.hasTrim || s === "w" && e.phase > 1)
    return;
  const l = Kn(r, i);
  if (!t.trim?.[l]) return;
  const h = t.trimmed ? -f : t.trim[l] - f, c = t.trimmed ? -f : t.trim[l] - f;
  if (E([() => {
    x(h, `trim cut ${r} in the wrong position`).to.equal(c);
  }]), h !== c)
    return;
  const { cut: u } = it({
    parentSegment: e,
    stock: t,
    cutDirection: i,
    cutAxis: n,
    positionAxis: o,
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
  let o = null;
  const s = [];
  if (!e || !e.length) return {
    allShapesCut: !0,
    uncutShape: null,
    uncutShapeAutoIds: []
  };
  const r = e.every((a) => {
    if (!a.added || !a.stock || O(a) && a.group.inGroup && !n?.ignoreGroupMembership) return !0;
    const f = a.stock.halfBladeWidth;
    let l = null;
    i ? l = i.getSides() : l = a.stock.getSides();
    const h = Object.values(a.getSides()).every((c) => {
      const u = () => {
        switch (c.type) {
          case "top": {
            const p = a.y + a.w + f;
            return t.some((m) => m.dimension === "l" && T.equalTo(m.y1, p) && T.lessThanOrEqualTo(m.x1, a.x) && T.greaterThanOrEqualTo(m.x2, a.x + a.l));
          }
          case "bottom": {
            const p = a.y - f;
            return t.some((m) => m.dimension === "l" && T.equalTo(m.y1, p) && T.lessThanOrEqualTo(m.x1, a.x) && T.greaterThanOrEqualTo(m.x2, a.x + a.l));
          }
          case "left": {
            const p = a.x - f;
            return t.some((m) => m.dimension === "w" && T.equalTo(m.x1, p) && T.lessThanOrEqualTo(m.y1, a.y) && T.greaterThanOrEqualTo(m.y2, a.y + a.w));
          }
          case "right": {
            const p = a.x + a.l + f;
            return t.some((m) => m.dimension === "w" && T.equalTo(m.x1, p) && T.lessThanOrEqualTo(m.y1, a.y) && T.greaterThanOrEqualTo(m.y2, a.y + a.w));
          }
        }
      }, d = () => l.some((p) => {
        switch (c.type) {
          case "top":
            return p.dimension === "l" && T.equalTo(p.y1, a.y + a.w) && T.lessThanOrEqualTo(p.x1, a.x) && T.greaterThanOrEqualTo(p.x2, a.x + a.l);
          case "bottom":
            return p.dimension === "l" && T.equalTo(p.y1, a.y) && T.lessThanOrEqualTo(p.x1, a.x) && T.greaterThanOrEqualTo(p.x2, a.x + a.l);
          case "left":
            return p.dimension === "w" && T.equalTo(p.x1, a.x) && T.lessThanOrEqualTo(p.y1, a.y) && T.greaterThanOrEqualTo(p.y2, a.y + a.w);
          case "right":
            return p.dimension === "w" && T.equalTo(p.x1, a.x + a.l) && T.lessThanOrEqualTo(p.y1, a.y) && T.greaterThanOrEqualTo(p.y2, a.y + a.w);
        }
      }), g = u(), S = d();
      return g || S;
    });
    return h || (o = a, s.push(a.autoId)), h;
  });
  return r && (o = null, s.length = 0), { allShapesCut: r, uncutShape: o, uncutShapeAutoIds: s };
}
function bt(e) {
  return typeof e?.guillotineState?.myPhase == "number";
}
function xt(e) {
  return e.type === "root" || e[Re(e.stock.cutPreference)] === 0;
}
function It(e, t) {
  return e?.guillotineState?.myPhase === t;
}
function Jn(e) {
  const t = Gt(e);
  if (!t) return di(e, 1);
  const n = le(t) === "l" ? "w" : "l", o = is(e, t, n);
  di(e, o);
}
function is(e, t, i) {
  if (!e) return null;
  if (!t) return 1;
  const n = Bt(t);
  return e[i] === t[i] ? n : n + 1;
}
function Gt(e) {
  return e?.guillotineState?.myStripParent || null;
}
function hi(e, t) {
  e?.guillotineState && (e.guillotineState.myStripParent = t);
}
function di(e, t) {
  typeof t == "number" && e?.guillotineState && e.guillotineState.setPhase(t);
}
function Bt(e) {
  return e?.guillotineState ? e.guillotineState.myPhase : null;
}
function le(e) {
  return e?.guillotineState ? e.guillotineState.myStripDirection : null;
}
function Je(e, t) {
  if (e?.guillotineState) {
    if (typeof e.guillotineState.setStripDirection != "function") {
      const i = e.guillotineState || {};
      e.guillotineState = new Ue(i);
    }
    e.guillotineState.setStripDirection(t);
  }
}
function pi(e, t) {
  if (j(e)) {
    Zn(t);
    const i = t?.bestScore?.score;
    i && ["currentStripDirection", "myStripDirection", "keyStripDirection", "myPhase"].forEach((o) => {
      i[o] && (t.guillotineState[o] = i[o]);
    });
  }
}
function Zn(e) {
  const t = e.bestScore;
  t?.myStripParent && hi(e, t.myStripParent), D(e) && e.shapes.forEach((i) => hi(i, Gt(i)));
}
function er(e, t) {
  let i = null, n = t.x.get(e.x) || [];
  n = n.filter((a) => {
    const f = a.guillotineState.myStripParent;
    return f && !f.guillotineState?.firstShape ? $t(e, f, "y") : !0;
  }), n.sort((a, f) => a.x - f.x);
  let o = t.y.get(e.y) || [];
  o = o.filter((a) => {
    const f = a.guillotineState.myStripParent;
    return f && !f.guillotineState?.firstShape ? $t(e, f, "x") : !0;
  }), o.sort((a, f) => a.y - f.y);
  const s = n.length ? n[0] : null, r = o.length ? o[0] : null;
  return s && r ? i = s.placementOrder > r.placementOrder ? s : r : i = s || r, i;
}
function Tt(e, t) {
  e.x.has(t.x) ? e.x.get(t.x).push(t) : e.x.set(t.x, [t]), e.y.has(t.y) ? e.y.get(t.y).push(t) : e.y.set(t.y, [t]);
}
function tr(e, t) {
  const i = e.x.get(t.x) ?? [], n = i.indexOf(t);
  n !== -1 && (i.splice(n, 1), i.length === 0 && e.x.delete(t.x));
  const o = e.y.get(t.y) ?? [], s = o.indexOf(t);
  s !== -1 && (o.splice(s, 1), o.length === 0 && e.y.delete(t.y));
}
function ir(e, t = !0) {
  const i = [], n = /* @__PURE__ */ new Set();
  for (const o of e.shapes)
    if (D(o)) {
      const s = o.type === "position", r = J(o);
      if (s || r && t) {
        if (!n.has(o.autoId)) {
          i.push(o), n.add(o.autoId);
          for (const f of o.shapes || [])
            n.add(f.autoId);
        }
      } else if (o.added && e.stock) {
        o.placeMyShapes(e.stock);
        for (const f of o.shapes)
          n.has(f.autoId) || (f.group.addedAsGroup = o, i.push(f), n.add(f.autoId));
      }
    } else
      n.has(o.autoId) || (i.push(o), n.add(o.autoId));
  return e.shapes = i, E([
    () => x(ee(e.shapes)).to.be.false,
    () => ki(e.shapes, "removeGroupsFromSegment")
  ]), e;
}
function ss(e, t) {
  if (e.children && Array.isArray(e.children)) {
    if (t(e) === !1) return;
    for (const i of e.children)
      ss(i, t);
  }
}
function sr(e, t) {
  const i = we(e, !1), n = /* @__PURE__ */ new Map();
  for (const o of e) {
    let s = n.get(o.parentId);
    s || (s = [], n.set(o.parentId, s)), s.push(o);
  }
  for (const o of t) {
    const s = i.filter((l) => l.stockLock.includes(o.parentId));
    if (!s.length) continue;
    const r = s.map((l) => l.area), a = r.reduce((l, h) => l + h, 0) / s.length;
    if (!(T.calculateCoefficientOfVariation(r) < this.config.priority.variationThreshold))
      for (const l of s) {
        l.priority || (l.priority = {});
        const h = nr(l, o, a);
        l.priority[o.parentId] = h;
        const c = n.get(l.parentId);
        if (c)
          for (const u of c)
            u.id !== l.id && (u.priority || (u.priority = {}), u.priority[o.parentId] = h);
      }
  }
}
function nr(e, t, i) {
  if (e.isExactFit(t) || e.area >= t.area * 0.9 || e.longSide >= t.longSide * 0.9)
    return 1;
  const n = e.area, o = t.area, s = n / o;
  return n > i ? s : 0;
}
function rr(e, t) {
  return e.reduce((i, n) => {
    const o = n.getPriority(t), s = i.getPriority(t);
    return o > s ? n : i;
  });
}
function or(e, t, i = null) {
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
function ns(e, t, i = "y") {
  if (!e || !t || e[i] === void 0 || !t.area || t.area === 0) return 0;
  const n = $e(i), o = n === "y" ? "w" : "l", s = t[i] ?? 0, r = t[n] ?? 0, l = (e[i] - s) * t[o] / t.area, u = (e[n] - r) / t[o] * t.aspect * 0.01;
  return 1 - (l + u);
}
function rs(e, t, i = "y") {
  if (!e || !t) return 0;
  "grain" in t && t.grain === "w" && (i = $e(i));
  const n = i === "y" ? "w" : "l";
  return (e[i] + e[n]) / t[n];
}
function ar(e, t, i) {
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
function lr(e, t, i) {
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
  const s = (r, a) => {
    const f = ar(r, a, i);
    n += f.length, o += f.reduce(
      (l, h) => h ? l + 1 : l,
      0
    );
  };
  return D(e) ? e.shapes.forEach((r) => {
    D(t) ? t.shapes.forEach((a) => {
      s(r, a);
    }) : s(r, t);
  }) : D(t) ? t.shapes.forEach((r) => {
    s(e, r);
  }) : s(e, t), { positiveAlignments: o, possibleAlignments: n };
}
function cr(e, t, i) {
  if (!e || !t || !i)
    return [!1, !1, !1, !1];
  if (e.autoId === t.autoId)
    return [!1, !1, !1, !1];
  const n = e.getMinSpacing(i.saw), o = e.x, s = e.x + e.l, r = e.y + e.w, a = e.y, f = t.x, l = t.x + t.l, h = t.y + t.w, c = t.y, u = () => o === l + n && (a >= c && a < h || r <= h && r > c), d = () => s + n === f && (a >= c && a < h || r <= h && r > c), g = () => a === h + n && (o >= f && o < l || s <= l && s > f), S = () => a + n === c && (o >= f && o < l || s <= l && s > f);
  return [
    u(),
    d(),
    g(),
    S()
  ];
}
function ur(e, t) {
  return e.l === t.l && e.x === t.x;
}
function fr(e, t) {
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
    contact: o = !0,
    alignment: s = !0,
    similarDimensions: r = !0,
    cohesion: a = !0
  } = n;
  let f = [];
  o && (f = cr(e, t, i));
  const l = f.filter(Boolean).length;
  if (l > 1)
    throw new Error("number of neighbours should not be greater than one for a single test shape");
  if (l === 0)
    return {
      contactResult: f,
      cohesion: 0,
      alignment: null,
      similarDimensions: 0,
      type: null,
      neighbour: t,
      neighbours: l
    };
  const h = ["lr", "rl", "bt", "tb"], c = f.findIndex(Boolean), u = h[c];
  if (!u) throw new Error("no contact type found");
  let d = null, g = null, S = 0;
  if (a && u && (d = dr(e, t, u)), s && (g = lr(e, t, i)), r) {
    const p = u === "rl" || u === "lr", y = u === "tb" || u === "bt", m = fr(e, t), I = ur(e, t);
    (p && m || y && I) && (S = I && m ? 1 : 0.5);
  }
  return {
    contactResult: f,
    cohesion: d,
    alignment: g,
    similarDimensions: S,
    type: u,
    neighbour: t,
    neighbours: l
  };
}
function hr(e, t) {
  if (!t)
    throw new Error(`edge - no stock defined for shape ${e.id}`);
  const i = t.bladeWidth, n = e.w / t.w, o = e.l / t.l;
  let s = 0, r = t.l, a = 0, f = t.w;
  return !t.trimmed && t.hasTrim && (s = t.trim.w1, r = t.l - t.trim.w2, a = t.trim.l1, f = t.w - t.trim.l2), [
    // 0 left
    e.x - i <= s ? n : 0,
    // 1 right
    e.x + e.l + i >= r ? n : 0,
    // 2 bottom
    e.y - i <= a ? o : 0,
    // 3 top
    e.y + e.w + i >= f ? o : 0
  ].reduce((c, u) => c + u, 0);
}
function dr(e, t, i) {
  if (!e || !t || !i) return 0;
  const n = pr(e, t), o = gi(e), s = gi(t), r = o + s, a = Math.max(n.l * n.w, r), f = Math.min(1, Math.max(0, r / a)), l = Math.min(1, Math.max(
    0,
    gr(e, t, i) || 0
  )), h = f * 0.7 + l * 0.3;
  return Math.min(1, Math.max(0, h));
}
function pr(e, t) {
  const i = Ze(e), n = Ze(t), o = Math.min(i.x, n.x), s = Math.min(i.y, n.y), r = Math.max(i.x + i.l, n.x + n.l), a = Math.max(i.y + i.w, n.y + n.w);
  return {
    x: o,
    y: s,
    l: r - o,
    w: a - s
  };
}
function Ze(e) {
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
function gi(e) {
  return D(e) ? e.shapes.reduce((t, i) => t + i.area, 0) : e.area;
}
function gr(e, t, i) {
  const n = Ze(e), o = Ze(t);
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
async function mr(e, t, i, n) {
  return await ke.runSpecificStrategy.call(this, {
    shapes: e,
    container: t,
    firstShape: i,
    firstShapeRotation: n
  });
}
function mi(e, t, i, n = null, o = null, s = null, r = null) {
  if (!n)
    throw new Error("shapePosition was not passed any placed shapes");
  if (!o)
    throw new Error("shapePosition was not passed any unplaced shapes");
  j(t) ? Sr(
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
function Sr(e, t, i = null, n = [], o = null) {
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
  }, r = t.cutPreference, a = t.cutDirection, f = t.getStock.bladeWidth, { cutAxis: l } = _i(a), h = er(e, o);
  if (!h) return !1;
  const c = le(h);
  let u = c;
  const d = c === "l" ? "w" : "l";
  h[d] !== e[d] && (u = F(c));
  const g = is(e, h, d);
  if (t.saw.guillotineOptions.maxPhase && g > t.saw.guillotineOptions.maxPhase) return !1;
  const S = le(h) ?? t.cutDirection;
  if (!S) throw new Error("keyDimension is not defined");
  const p = Gt(h);
  if (p) {
    const b = $e(Re(le(p))), w = $t(e, p, b);
    if (p.guillotineState.myPhase <= 2 && !w) return !1;
  }
  let y = !1;
  t.firstShape && (y = e[l] > t.firstShape[l]);
  const m = {
    lr: [],
    bt: [],
    tb: [],
    rl: []
  };
  for (const b of n) {
    const w = os(
      e,
      b,
      t,
      {
        contact: !0,
        cohesion: !!i.cohesion,
        alignment: !!i.alignment,
        similarDimensions: !!i.similarDimensions
      }
    );
    w.type && (m[w.type].push(b), "cohesion" in s && i.cohesion && y && (s.cohesion += w.cohesion), "similarDimensions" in s && i.similarDimensions && (s.similarDimensions += w?.similarDimensions ? w.similarDimensions : 0), "fenceConsistency" in s && i.fenceConsistency && (r === "w" ? w.type === "lr" && w.neighbour.l === e.l && w.neighbour.y === e.y && (s.fenceConsistency = 1) : r === "l" && w.type === "bt" && w.neighbour.w === e.w && w.neighbour.x === e.x && (s.fenceConsistency = 1)));
  }
  if (t.cutDirection) {
    const b = t.cutDirection;
    if (b === "w") {
      const w = e.y === t.y, P = m.bt && m.bt.length > 0;
      if (!w && !P)
        return !1;
    } else if (b === "l") {
      const w = e.x === t.x, P = m.lr && m.lr.length > 0;
      if (!w && !P)
        return !1;
    }
  }
  if ("exactStripFill" in s && i.exactStripFill && h) {
    const b = F(le(h)), w = e[b] + f;
    s.exactStripFill = w >= h[b] && w < h[b] + f ? 1 : 0;
  }
  if ("compression" in s && i.compression) {
    const b = S === "l" ? "y" : "x";
    s.compression = ns(
      e,
      t,
      b
    );
  }
  if ("fill" in s && i.fill) {
    const b = S === "l" ? "y" : "x";
    s.fill = rs(e, t, b);
  }
  if (s.cohesion = Math.max(0, s.cohesion), "sameStripBonus" in s && i.sameStripBonus && t.firstShape) {
    const b = le(h);
    if (!y)
      s.sameStripBonus = 0;
    else if (b === "w" && m?.bt?.length) {
      const w = Ce(m.bt, "x"), P = w.x + w.l;
      e.x + e.l > P && (s.sameStripBonus = 0, s.cohesion = 0);
    } else if (b === "l" && m?.lr?.length) {
      const w = Ce(m.lr, "y"), P = w.y + w.w;
      e.y + e.w > P && (s.sameStripBonus = 0, s.cohesion = 0);
    } else
      s.sameStripBonus = 1;
  }
  if (i.aspectRatio) {
    const b = e.aspect, w = le(h);
    b < 0.1 ? e[w] > e[F(w)] && (s.aspectRatio = 1) : s.aspectRatio = 0;
  }
  const I = { ...s };
  Object.keys(s).forEach((b) => {
    if (typeof s[b] == "number") {
      const w = s[b];
      w < 0 ? I[b] = w : I[b] = i[b] ? w * i[b] : 0;
    }
  }), e.score = I;
  let $ = 0;
  for (const b of Object.values(e.score))
    typeof b == "number" && ($ += b);
  if (e.score.total = $, e.score.total < 0 && (e.score.total = 0), isNaN(e.score.total)) throw new Error("score is not a number");
  return e.score.cutDirection = a, e.score.myStripParent = h, e.score.myStripDirection = u, e.score.myPhase = g, e.score.total > (e?.bestScore?.total || 0) && e.setBestScore(e), !0;
}
function as(e, t, i, n, o) {
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
    let c = 0, u = 0;
    !t.trimmed && t.hasTrim && (c = t.trim.w1, u = t.trim.l1), (e.x === c || e.y === u) && (s.edge = hr(e, t));
  }
  if ("fill" in s && i.fill) {
    const c = t?.saw?.efficiencyOptions?.primaryCompression ? Re(t?.saw?.efficiencyOptions?.primaryCompression) : "y";
    s.fill = rs(
      e,
      t,
      c
    );
  }
  if ("compression" in s && i.compression) {
    const c = t?.saw?.efficiencyOptions?.primaryCompression ? Re(t?.saw?.efficiencyOptions?.primaryCompression) : "y";
    s.compression = ns(
      e,
      t,
      c
    );
  }
  let r = 0, a = 0;
  const f = {
    lr: !1,
    rl: !1,
    bt: !1,
    tb: !1
  };
  for (const c of n) {
    const u = os(
      e,
      c,
      t,
      {
        contact: !0,
        cohesion: !!i.cohesion,
        alignment: !!i.alignment,
        similarDimensions: !!i.similarDimensions
      }
    );
    u.type && (f[u.type] = !0, i.alignment && u.alignment && (a += u.alignment.positiveAlignments, r += u.alignment.possibleAlignments), i.cohesion && (s.cohesion += u.cohesion), i.similarDimensions && (s.similarDimensions += u?.similarDimensions ? u.similarDimensions : 0));
  }
  s.similarDimensions /= 4, r === 0 ? s.alignment = 0 : s.alignment = a / r, i.exactFit && (e.l === t.l || e.w === t.w) && (s.exactFit = 1), i.area && (s.area = or(e, n, t));
  const l = { ...s };
  Object.keys(s).forEach((c) => {
    if (typeof s[c] == "number") {
      const u = s[c];
      l[c] = i[c] ? u * i[c] : 0;
    }
  }), e.score = l;
  let h = 0;
  for (const c of Object.values(e.score))
    typeof c == "number" && (h += c);
  if (e.score.total = h, isNaN(e.score.total))
    throw new Error("thisShape.score.total is not a number: " + JSON.stringify(e.score));
  e.score?.total > (e?.bestScore?.total || 0) && e.setBestScore(e, o);
}
function ye(e, t, i) {
  const n = this.shapeList.reduce(
    (C, q) => q.added ? C : ++C,
    0
  );
  let o, s, r;
  const a = t.getStock;
  if (!a) return !1;
  const f = e, l = Y(t) ? oe(f, a) : e.filter((C) => C.added);
  let h;
  l.length && (h = rr(l, a)), h && !h.getPriority(a) && (h = null);
  const c = l.length, u = Math.max(...l.map((C) => C.x + C.l)), d = Math.max(...l.map((C) => C.y + C.w));
  let g = 0, S = null, p = null, y;
  if (i || (i = e.find((C) => C.x === (t.x || 0) && C.y === (t.y || 0))), !i) return !1;
  const m = i.area;
  let I = null;
  const $ = t.area, b = l.reduce((C, q) => C + q.area, 0);
  if (Y(t)) {
    if (t.cutType === "efficiency" ? (y = t.primaryCompression ?? "w", g = ot(
      l,
      y,
      a.bladeWidth
    ), I = i?.bestScore?.total, g = g / t[y === "l" ? "l" : "w"]) : (y = t.cutPreference === "l" ? "x" : "y", g = ot(
      l,
      y,
      a.bladeWidth
    ), g = g / t[y === "x" ? "l" : "w"]), t.cutType === "guillotine" && (o = e.filter((C) => C.added && Bt(C) === 1).length), r = b / $, Se() && E([() => x(r).to.be.lessThanOrEqual(1)]), t?.saw?.stockType === "roll") {
      const C = Ce(l, "x");
      s = C.x + C.l;
    }
  } else if (j(t)) {
    y = a.cutPreference === "l" ? "x" : "y", g = ot(
      l,
      y,
      a.bladeWidth
    ), g = g / t[y === "x" ? "w" : "l"];
    const C = F(a.cutPreference), q = C === "l" ? "x" : "y";
    if (S = a[C] - (i[C] + i[q] + a.bladeWidth), p = i[C], t.cutPreference === "flex")
      throw new Error("cut preference is set to flex, it should be l or w at this point");
    r = b / $;
  } else
    r = b / $;
  const w = l.reduce((C, q) => C + (q?.bestScore?.total ?? 0), 0), P = V(e, t).length + c, A = V(e, a).length + c, M = l.map((C) => C.compress());
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
      efficiency: r,
      totalShapeArea: b,
      totalShapesPlaced: c,
      totalShapeScore: w,
      firstRowLength: g,
      // firstShapeFill,
      firstShapeArea: m,
      firstShapeScore: I,
      containerAvailableShapes: P,
      stockAvailableShapes: A,
      totalUnplacedShapes: n,
      rollLength: s || null,
      maxX: u,
      maxY: d,
      stripShapes: o || null,
      stripSize: p || null,
      remainingStripSpace: S || null,
      uniqueStock: this.uniqueStock.length
    }
  };
}
function yr(e, t, i = "sheet") {
  if (e && e?.length) {
    if (e.length === 1) return e[0];
    switch (e = e.filter((n) => n.score?.efficiency), i) {
      case "sheet":
        switch (t) {
          case "tidy":
            e.sort($r.bind(this));
            break;
          case "strip":
            e.sort(Si.bind(this));
            break;
          case "guillotine":
          case "beam":
            e.sort(xr.bind(this));
            break;
          default:
            e.sort(Ir.bind(this));
            break;
        }
        break;
      case "linear":
        e.sort(wr);
        break;
      case "roll":
        switch (t) {
          case "guillotine":
          case "strip":
            e.find((n) => n.score.containerAvailableShapes === 0) && (e = e.filter((n) => n.score.containerAvailableShapes === 0)), e.sort(Si);
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
function wr(e, t) {
  return t.score.efficiency - e.score.efficiency;
}
function et(e, t) {
  const {
    totalShapesPlaced: i = 0,
    stockAvailableShapes: n = 1,
    containerAvailableShapes: o = 0,
    efficiency: s = 0,
    maxX: r = 0,
    maxY: a = 0
  } = e.score, l = i / (n || 1), h = t === "stock" ? 0.65 : 0.35, c = 1 - h;
  let u = l * h + s * c;
  const d = t === "stock" && o === 0 || i === n;
  if (d && (u += 0.15), t === "stock" && d && e.stock) {
    const g = e.cutPreference, S = e.stock, p = g === "l" ? a : r, y = g === "l" ? S.w : S.l;
    if (y > 0 && p > 0) {
      const m = 1 - p / y;
      u += m * 0.1;
    }
  }
  return u;
}
function Si(e, t) {
  if (E([() => x(e.score).to.exist, () => x(t.score).to.exist]), !e.score || !t.score) return 0;
  const i = e.score.totalShapesPlaced === e.score.stockAvailableShapes, n = t.score.totalShapesPlaced === t.score.stockAvailableShapes, o = e.score.maxY || 1, s = t.score.maxY || 1, r = e.score.totalShapesPlaced || 1, a = t.score.totalShapesPlaced || 1, f = o / r, l = s / a;
  if (i && !n) {
    const u = l < f * 0.5, d = s < o * 0.5;
    return u && d ? 1 : -1;
  }
  if (n && !i) {
    const u = f < l * 0.5, d = o < s * 0.5;
    return u && d ? -1 : 1;
  }
  const h = et(e, "strip"), c = et(t, "strip");
  return h > c ? -1 : c > h ? 1 : 0;
}
function $r(e, t) {
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
function xr(e, t) {
  const i = et(e, "stock"), n = et(t, "stock");
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
  const o = ls(e, t);
  return o !== 0 ? o : e.score.firstShapeArea > t.score.firstShapeArea ? -1 : e.score.firstShapeArea < t.score.firstShapeArea ? 1 : me.ID(e.stock, t.stock);
}
function Ir(e, t) {
  const i = e.score?.totalUnplacedShapes, n = t.score?.totalUnplacedShapes;
  if (e.stock.id !== t.stock.id && (i === 0 || n === 0) && !(i === 0 && n === 0)) {
    const s = i === 0 ? e : t, r = i === 0 ? t : e, a = s.stock, f = r.stock, l = a.area - s.score.totalShapeArea, h = f.area;
    return s.score.totalShapeArea - r.score.totalShapeArea < h && h < l ? f.id === e.stock.id ? -1 : 1 : f.id === e.stock.id ? 1 : -1;
  }
  if (e.score[this.config.successMetric] > t.score[this.config.successMetric])
    return -1;
  if (e.score[this.config.successMetric] < t.score[this.config.successMetric])
    return 1;
  const o = ls(e, t);
  return o !== 0 ? o : e.type !== "evo" && t.type === "evo" ? -1 : e.type === "evo" && t.type !== "evo" ? 1 : e.score.firstShapeArea > t.score.firstShapeArea ? -1 : e.score.firstShapeArea < t.score.firstShapeArea ? 1 : e.score.totalShapeScore > t.score.totalShapeScore ? -1 : e.score.totalShapeScore < t.score.totalShapeScore ? 1 : me.ID(e.stock, t.stock);
}
function cs(e) {
  if (!e) return e;
  const t = { ...e };
  return e.stock && (t.stock = e.stock), e.resultKey !== "bestPartialResult" && e.firstShape && "toData" in e.firstShape && (t.firstShape = e.firstShape.toData(Ae.Compressed)), e.shapes?.length && (t.shapes = e.shapes.map((i) => i && "toData" in i ? i.toData(Ae.Compressed) : i)), "stripShapes" in e && e.stripShapes?.length && (t.stripShapes = e.stripShapes.map((i) => i && "toData" in i ? i.toData(Ae.Compressed) : i)), "root" in e && e.root && "toData" in e.root && (t.root = e.root.toData(Ae.Compressed)), "container" in e && e.container && "toData" in e.container && (Y(e.container) ? t.container = e.container : t.container = e.container.toData(Ae.Compressed)), t;
}
function Nt(e, t) {
  return e?.stock ? Y(e.stock) ? e.stock : t.find((i) => i.autoId === e.stock.autoId) || null : null;
}
async function re(e, t = null) {
  if (e.score?.efficiency === 0 && e.shapes?.length > 0) {
    const r = e.shapes.filter((a) => a.added);
    if (r.length > 0) {
      const a = r.length / e.shapes.length;
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
  const n = this[i], o = e?.firstShape;
  if (Se()) {
    const r = e.score.efficiency, a = D(o) ? `${o.id}: [${o?.shapes?.map((l) => l.parentId).join(", ")}]` : o?.id, f = [
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
        value: e?.shapes?.map((l) => l.id).join() ?? "N/A"
      }
    ];
    k("results", `Recording ${i}`, null, f);
  }
  let s = e;
  if (n && (s = yr.call(this, [e, n], t || e.stock.cutType, e.stock?.saw?.stockType), s || (k("results", "WARNING: findWinner returned undefined, using current result as winner"), s = e), k("results", `${s.type} winner for stock ${s.stock.id} eff. ${s.score.efficiency}, firstShape [${o?.id || "N/A"}], rot ${o?.rot || "N/A"}, batch ${s?.stripShapeBatch ?? "N/A"}`)), !n || !s?.processed) {
    e.processed = !0;
    const r = cs(s);
    this[i] = r;
  }
  Tr(s.shapes, s.stock);
}
function Tr(e, t) {
  if (!e?.length) return;
  const i = e.filter((n) => D(n) && n.type !== "user");
  E([
    () => x(i.every((n) => D(n))).toBe(!0),
    () => x(i.every((n) => n.type !== "user")).toBe(!0)
  ], "expandTemporaryGroups: All filtered groups should be temporary (non-user) groups");
  for (const n of i) {
    const o = n.shapes || [], s = n.type;
    if (n.added)
      try {
        n.placeMyShapes(t), E([
          () => x(o.every((r) => r.group?.addedAsGroup === n)).toBe(!0)
        ], `expandTemporaryGroups: All children of ${s} group should have addedAsGroup reference`);
      } catch (r) {
        k("errors", `Error placing shapes for temporary group ${n.id} during expansion: ${r.message}`);
      }
    n.destroy(), E([
      () => x(o.every((r) => r.group?.reference === null || r.group?.reference === void 0)).toBe(!0),
      () => x(o.every((r) => r.group?.inGroup === !1)).toBe(!0)
    ], `expandTemporaryGroups: Children of ${s} group should be released after destroy`);
  }
}
function Ge({
  bestResult: e,
  shapeList: t,
  relevantStock: i = [],
  stockList: n = [],
  resetShapes: o = null
}) {
  k("results", `updating shapes from ${e.resultKey} / ${e.type} - stock ${e.stock.id}, FS: ${e.firstShape.id}`), i.length && i.filter((l) => l.autoId !== e?.stock?.autoId).forEach((l) => {
    const h = t.filter((c) => c.added && c?.stock?.autoId === l.autoId);
    h.length && (o ? o(h, !1, !0, !1) : h.forEach((c) => {
      c.added = !1, c.reset();
    }));
  });
  const s = [];
  let r = n.length ? n.find((l) => l.autoId === e.stock?.autoId) : null;
  if (r && e.stock && e.stock.used && (r.used = !0), !r && e.stock && (r = e.stock, r.saw && !Me(r.saw))) {
    k("results", `⚠️  Found serialized saw in bestResult.stock ${r.autoId}, attempting to restore from stockList`);
    const l = n.find((h) => h.autoId === r.autoId || h.parentId === r.parentId && Me(h.saw));
    l && Me(l.saw) ? (k("results", `✅ Restored live saw instance from stock ${l.autoId}`), r.saw = l.saw) : k("results", `❌ Could not restore live saw instance for stock ${r.autoId}`);
  }
  r || (r = e.stock);
  for (const l of e.shapes)
    if (pt(l) || Ds(l)) {
      const h = t.find((c) => c.autoId === l.autoId);
      if (!h) {
        Se() && (console.warn(`[updateShapeListFromBestResult] Shape ${l.autoId || l.id} from result not found in shapeList!`), console.warn(`  Available autoIds in shapeList: ${t.slice(0, 5).map((c) => c.autoId).join(", ")}...`));
        continue;
      }
      Se() && (O(h) || console.warn(`Shape ${l.autoId} in shapeList is not a live instance!`)), h.update({ ...l, validationMode: "none" }), O(h) && l.group && l.group.inGroup !== void 0 && (h.group.inGroup = l.group.inGroup), h.stock = r, s.push(h);
    }
  E([
    () => x(e.shapes.every((l) => {
      if (!pt(l)) return !0;
      const h = t.find((c) => c.autoId === l.autoId);
      return !(!h || !h.added || h.x !== l.x || h.y !== l.y || h.l !== l.l || h.w !== l.w);
    }), "best shape not found, not added, or not correctly updated").to.be.true
  ]), Se() && (s.every((h) => t.find((c) => c === h)) || console.warn("Some updated shapes are not exact references from shapeList - possible instance copying!")), Ci({
    shapes: s
  }, "updateShapeListFromBestResult");
  let a = [];
  const f = e.shapes.filter((l) => Rs(l));
  return k("results", `Best result contains ${e.shapes.length} total items`), k("results", `Found ${f.length} serialized groups to recreate:`), f.forEach((l) => {
    k("results", `  - Group ${l.id}: type=${l.type}, shapes=${l.shapes?.length || 0}, added=${l.added}, x=${l.x}, y=${l.y}`);
  }), f.length > 0 && (k("results", `Recreating ${f.length} groups from bestResult`), a = As(f, t, r), k("results", `Successfully recreated ${a.length} groups:`), a.forEach((l) => {
    k("results", `  - Group ${l.id}: type=${l.type}, shapes=${l.shapes?.length || 0}, added=${l.added}, x=${l.x}, y=${l.y}`);
  }), a.forEach((l) => {
    l.shapes && Array.isArray(l.shapes) && (l.shapes.forEach((c) => {
      O(c) && (c.group.reference = l, c.group.inGroup = !0, l.added && (c.group.addedAsGroup = l));
    }), E([
      () => x(l.shapes.every((c) => !O(c) || c.group?.reference === l)).toBe(!0)
    ], `updateShapeListFromBestResult: All children of group ${l.id} (type=${l.type}) should have correct reference`), l.added && E([
      () => x(l.shapes.every((c) => !O(c) || c.group?.addedAsGroup === l)).toBe(!0),
      () => x(l.shapes.every((c) => !O(c) || typeof c.group?.addedAsGroup != "string")).toBe(!0)
    ], `updateShapeListFromBestResult: addedAsGroup should be Group reference for group ${l.id} (type=${l.type})`));
    const h = l.added && typeof l.placeMyShapes == "function" && l.type !== "position";
    if (l.added && l.type === "position" && E([
      () => x(h).toBe(!1)
    ], `updateShapeListFromBestResult: Position group ${l.id} should NOT call placeMyShapes`), h)
      try {
        l.placeMyShapes(r);
      } catch (c) {
        throw console.error("[ERROR] placeMyShapes failed for group " + l.id + ":", c.message), console.error(`  Group details: type=${l.type}, x=${l.x}, y=${l.y}, rot=${l.rot}`), console.error("  Child shapes:"), l.shapes?.forEach((u) => {
          console.error(`    ${u.id}: added=${u.added}, x=${u.x}, y=${u.y}, rot=${u.rot}, l=${u.l}, w=${u.w}`);
        }), c;
      }
    Se() && (l.shapes?.forEach((c) => {
      const u = t.find((d) => d.autoId === c.autoId);
      u !== c ? (console.error(`[ERROR] Group ${l.id} child shape ${c.id} is NOT the same instance as in shapeList!`), console.error(`  Group shape: added=${c.added}, x=${c.x}, y=${c.y}`), console.error(`  shapeList shape: added=${u?.added}, x=${u?.x}, y=${u?.y}`)) : c.group?.reference !== l && (console.error(`[ERROR] Group ${l.id} child shape ${c.id} has incorrect group.reference!`), console.error(`  Expected: ${l.id}, Got: ${c.group?.reference?.id || "null"}`));
    }), k("results", `Successfully recreated, placed, and linked ${a.length} groups`));
  })), { updatedShapes: s, groups: a };
}
async function ze(e, t, i, n = null) {
  if (E([
    () => x(Y(t)).to.be.true,
    () => {
      if (i.length) return x(O(i[0]) || ue(i[0])).to.be.true;
    }
  ]), E([() => x(ee(i), "duplicates found").to.be.false]), Xi(), n || (n = Or.call(this, t, i)), !n) throw new Error("no root segment created");
  if (this.config.sample.enable) {
    if (await Cr.call(
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
    }), await yi.call(this, {
      options: e,
      shapes: i,
      stock: t
      // root
    }), Er.call(this, i, n);
  }
  if (this.config.guillotine.stripShapes.allocation && i.length > 1) {
    if (await kr.call(this, e, t, i, n), !this.bestResult) return;
    Ge({
      bestResult: this.bestResult,
      shapeList: this.shapeList,
      stockList: this.stockList,
      resetShapes: this.resetShapes?.bind(this)
    }), await yi.call(this, {
      options: e,
      shapes: i,
      stock: t,
      root: n
    });
  }
}
async function yi({
  options: e,
  shapes: t,
  stock: i,
  root: n
}) {
  const o = oe(this.shapeList, i);
  Fr.call(
    this,
    Nt(this.bestResult, this.stockList),
    o
  ) && await Pr.call(
    this,
    e,
    o,
    t,
    i,
    n
  ), this.bestResult.shapes.forEach((r) => {
    const a = this.shapeList.find((f) => f.id === r.id);
    a && (r.x = a.x, r.y = a.y, r.placementOrder = a.placementOrder);
  });
}
async function kr(e, t, i, n) {
  if (!this.config.guillotine.stripShapes.allocation || (E([
    () => x(Y(t)).to.be.true,
    () => x(i.length ? O(i[0]) : !0).to.be.true,
    () => x(j(n)).to.be.true
  ]), t?.saw?.stockType === "roll")) return !1;
  const o = Ur.call(this, n, this.uniqueStock, this.stockList);
  if (o === !1) return !1;
  for (let s = 0; s < o; s++)
    this.resetShapes(i), n.shapes = i, E([
      () => x(ee(n.shapes, `root segment batch ${s} stock ${t.id}`), "duplicates found in root segment").to.be.false,
      () => x(i.length).to.equal(n.shapes.length),
      () => x(i.some((r) => je(r) || J(r)), "groups exist in new strip shape batch calculation").to.be.false
    ]), k("guillotine", `running strip shape batch ${s} for stock ${t.id}`), await Ht.call(
      this,
      e,
      t,
      n,
      s
    ), E([() => x(ee(n.shapes), "duplicates found").to.be.false]);
  return !0;
}
async function Cr(e, t, i) {
  k("guillotine", `running basic first shape sample for stock ${t.id}`), E([
    () => x(Y(t)).to.be.true,
    () => x(j(i)).to.be.true,
    () => x(i?.shapes?.length).to.be.greaterThan(0)
  ]), await Ht.call(this, e, t, i);
}
async function Ht(e, t, i, n = null, o = null, s = null) {
  if (E([
    () => x(Y(t)).to.be.true,
    () => x(j(i)).to.be.true,
    () => {
      if (o) return x(O(o)).to.be.true;
      if (n !== null) return x(n).to.be.a("number");
      if (s !== null) return x([0, 1].includes(s)).to.be.true;
    }
  ]), n === null)
    await qe.call(
      this,
      e,
      t,
      i,
      o,
      s,
      null
    );
  else if (await qe.call(
    this,
    e,
    t,
    i,
    void 0,
    void 0,
    n
  ) === !1) return !1;
}
async function Pr(e, t, i, n, o) {
  E([
    () => x(Y(n)).to.be.true,
    () => {
      if (i.length) return x(O(i[0]) || ue(i[0])).to.be.true;
      if (t.length) return x(O(t[0] || ue(i[0]))).to.be.true;
    }
  ]), k("guillotine", `running refinement for stock ${n.id}`);
  try {
    await vr.call(
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
async function vr(e, t, i, n, o) {
  if (E([
    () => x(Y(n)).to.be.true,
    () => {
      if (i.length) return x(O(i[0]) || ue(i[0])).to.be.true;
      if (t.length) return x(O(t[0]) || ue(i[0])).to.be.true;
    }
  ]), !this.config.guillotine.secondPass || !this.saw?.guillotineOptions?.headCuts) return !1;
  k("guillotine", `running second pass for stock ${n.id}`), await Gr.call(this, n, i, t, o);
  const s = oe(i, n), r = ye.call(
    this,
    this.shapeList,
    n
  );
  r && n.id === Nt(this.bestResult, this.stockList)?.id && s.length - t.length > 0 && (k("guillotine", `runSecondPass added ${s.length - t.length} shape(s) to stock ${n.id}, new total ${s.length}`), r.secondPass = !0, await re.call(this, r));
}
function Er(e, t) {
  const i = [];
  if (this.groupList && this.groupList.length > 0)
    for (const s of this.groupList)
      s.added ? i.push(s) : s.reset();
  for (let s = e.length; s--; ) {
    const r = e[s];
    D(r) && e.splice(s, 1), r.reset();
  }
  this.groupList && (this.groupList.length = 0, this.groupList.push(...i)), this.counters.placement = 0, this.bestPartialResult = null, Xi(), t.reset(e);
  const n = t.shapes.filter((s) => O(s)), o = t.shapes.filter((s) => D(s));
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
async function Dr(e, t, i, n) {
  E([
    () => x(Y(t)).to.be.true,
    () => x(j(i)).to.be.true
  ]);
  const o = we(i.shapes, !1, !0), s = this.stockList.findIndex((h) => h.id === t.id);
  let r = null;
  s > 0 && (r = this.stockList[s - 1]);
  const a = F(t.cutPreference);
  let f = [], l = [];
  if (i.l === t.l && i.w === t.w ? s > 0 && (f = oe(this.shapeList, r).filter((h) => bt(h))) : l = oe(this.shapeList, t).filter((h) => bt(h)), f?.length || l?.length) {
    const h = a === "l" ? "x" : "y";
    f.sort((d, g) => d[h] - g[h]), l.sort((d, g) => d[h] - g[h]);
    const c = f.length ? f[f.length - 1] : l[l.length - 1], u = o.filter((d) => c[a] === d.w || c[a] === d.l);
    if (u?.length) {
      for (let d = 0; d < u.length; d++) {
        const g = u[d];
        if (d > 1 && u[d - 1].isIdentical(u[d]))
          continue;
        be(g, 0, t);
        let S;
        c[a] === g[a] ? S = 0 : S = 1;
        const p = await us.call(
          this,
          e,
          g,
          i,
          S
        );
        if (p?.length)
          for (let y = p.length; y--; ) {
            const m = p[y];
            await re.call(this, m, "strip");
          }
        this.resetShapes(i.shapes);
      }
      return !(!n || n?.length);
    }
  }
  return !1;
}
async function qe(e, t, i, n = null, o = null, s = null) {
  if (i.type === "root" && !e?.secondPass && (t.used = !1, this.counters.placement = 0), !i.shapes?.length) return;
  E([
    () => x(Y(t)).to.be.true,
    () => x(j(i)).to.be.true,
    () => x(n ? O(n) : !0).to.be.true,
    () => x(n ? [0, 1].includes(o) : !0).to.be.true,
    () => x(s !== null ? typeof s == "number" : !0).to.be.true,
    () => x(s !== null ? n === null : !0).to.be.true,
    () => x(o !== null ? [0, 1].includes(o) : !0).to.be.true,
    () => x(i.shapes.every((c) => !je(c), "no segment groups should exist at this point")).to.be.true
  ]);
  const r = typeof s == "number";
  let a = !0;
  if (t.saw.guillotineOptions?.strategy === "time" && (a = !await Dr.call(
    this,
    e,
    t,
    i
  )), a)
    if (xt(i))
      if (r) {
        let c = Wr(i.shapes, s, t);
        if (c.sort((S, p) => S.guillotineState.getStripShapeBatchData(s).order - p.guillotineState.getStripShapeBatchData(s).order), k("guillotine", () => `strip shape candidates ${c.map((S) => S.id).join("|")}`), E([
          () => x(c.find((S) => S.guillotineState.getStripShapeBatchData(s).stockId !== i.getStock.autoId), "found strip shapes in allocatedStripShape from another stock").to.be.undefined,
          () => x(ee(c), "duplicate shapes found in stripShapeCandidates").to.false,
          () => x(c.find((S) => D(S) && !J(S)), "found groups in allocatedStripShape").to.be.undefined,
          () => x(i.shapes.filter((S) => S.added).length === 0, `added shapes found in segment ${i.id}`).to.be.true
        ]), !c.length)
          return qe.call(
            this,
            e,
            t,
            i
          );
        const u = F(t.cutPreference);
        if (c = c.filter((S) => {
          if (D(S)) return !0;
          const p = $i(S, s, t, !1);
          return Pe(S, p, t) ? ($i(S, s, t, !0), Ls(S, p, t) ? (E([
            () => x(S.rot, `candidates ${S.id} rotation (${S.rot}) incorrect for batch (${p})`).equal(p)
          ]), !0) : !1) : (k("guillotine", () => `cannot rotate strip shape ${S.id}, ${S.l}x${S.w} to ${p} on stock ${t.id}`, [S.getStripShapeBatchData(s)]), xe(S, t, p), !1);
        }), t.saw.guillotineOptions?.firstPhaseCutGrouping !== !1 && c.length > 1) {
          const S = i.shapes.filter((p) => J(p) && p.shapes.some((y) => c.includes(y)));
          S.length > 0 ? (k("guillotine", () => `Reusing ${S.length} existing strip groups`), c = S) : c = jr.call(this, s, u, t, i, c);
        }
        if (!c.length)
          return qe.call(
            this,
            e,
            t,
            i
          );
        c.sort(function(p, y) {
          return y[u] !== p[u] ? y[u] - p[u] : y[t.cutPreference] !== p[t.cutPreference] ? y[t.cutPreference] - p[t.cutPreference] : p.autoId.localeCompare(y.autoId, void 0, { numeric: !0 });
        }), n = c[0], k("guillotine", () => `firstShape for segment ${i.id} is ${n.id}`);
        const g = n.guillotineState.getStripShapeBatchData(s);
        if (!g) throw new Error("no fs batch found");
        E([() => x(g.stockId).equal(i.getStock.autoId)]), n.firstShape.isFirstShape = !0, o = g.rot, E([() => x([0, 1].includes(g.rot)).to.be.true]), await kt.call(this, {
          options: e,
          fs: n,
          fsRotation: o,
          segment: i,
          stripShapeBatch: s,
          stripShapeCandidates: c
        });
      } else
        n && o !== null ? await kt.call(this, {
          options: e,
          fs: n,
          fsRotation: o,
          segment: i,
          stripShapeBatch: s
        }) : await ut.call(
          this,
          e,
          i
        );
    else
      await ut.call(
        this,
        e,
        i
      );
  if (!this.bestPartialResult)
    if (s !== null) {
      if (await ut.call(
        this,
        e,
        i,
        !0
      ), !this.bestPartialResult) return;
    } else return;
  const l = this.bestPartialResult.firstShape;
  Ge({
    bestResult: this.bestPartialResult,
    shapeList: this.shapeList,
    stockList: this.stockList,
    resetShapes: this.resetShapes?.bind(this)
  }), ir(i, !0), Pi(l) && i.shapes.push(l), i.shapes = vi(i.shapes, l), E([
    () => x(i.shapes.filter((c) => D(c)).every((c) => J(c)), "number of groups in segment does not equal the number of strip shape groups (others should have been removed)").to.be.true,
    () => ki(i.shapes, "segmentCalculations after removeGroupsFromSegment"),
    () => x(i.shapes.every((c) => !je(c)), "found groups in segment after removal").to.be.true
  ]);
  const h = V(this.shapeList);
  if (this.bestPartialResult = null, h.length || this.config.secondRun.enabled) {
    const c = Mr.call(
      this,
      i,
      l
    );
    if (c?.length) {
      k("cuts", () => `Created ${c.length} new segments, unplaced shapes: ${h.length}`);
      for (const u of c) {
        if (this.bestPartialResult = null, !u.shapes.length) {
          u.offcut = !0;
          continue;
        }
        u.shapes = u.shapes.filter((d) => !d.added), r && !xt(u) && (u.shapes = u.shapes.filter((d) => !d.guillotineState.isInStripShapeBatch(s))), await qe.call(
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
    i.shapes = i.shapes.map((g) => D(g) ? g : this.shapeList.find((p) => p.autoId === g.autoId) || g);
    const c = ye.call(
      this,
      this.shapeList,
      t,
      l
    );
    if (!c) throw new Error("Unable to score stock");
    if (c.stripShapeBatch = s, c.root = i, !c.score.efficiency) return;
    const u = this.shapeList.filter((g) => !g.group?.inGroup && !D(g) && g.stock?.id === t.id);
    Ei(u).length > 0, s !== null ? c.type = "allocated strips" : c.type = "basic", await re.call(this, c);
  }
}
async function kt({
  options: e = null,
  fs: t = null,
  fsRotation: i = null,
  segment: n = null,
  stripShapeBatch: o = null,
  stripShapeCandidates: s = []
}) {
  if (!t || i === null || !n)
    throw new Error(`firstShapeSegmentCalculations requires firstShape, firstShapeRotation & segment:${t} ${i} ${n}`);
  const r = async (c, u = !0) => {
    let d;
    u ? (t.reset(), E([() => x(n.shapes.filter((g) => g.autoId === t.autoId).length, "too many first shapes in segmentShapes").to.equal(1)]), d = ye.call(
      this,
      n.shapes,
      c,
      t
    )) : d = ye.call(
      this,
      n.shapes,
      n,
      t
    ), d.score.totalShapesPlaced && await re.call(this, d, "strip");
  };
  n.shapes = Rr.call(this, n, t, o), Br.call(
    this,
    t,
    n,
    n.getStock,
    i
  ), t.placementOrder = this.counters.placement++, E([
    () => x(j(n)).to.be.true,
    () => x(o !== null ? typeof o == "number" : !0).to.be.true,
    () => x(i !== null ? [0, 1].includes(i) : !0).to.be.true
  ]), t && E([
    //Accept all group types (segment, user, strip) as well as shapes
    () => x(O(t) || D(t), `first shape ${t.id} is not a shape or group`).to.be.true,
    () => x(t.added, `first shape ${t.id} added too soon`).to.be.true,
    //Only check rotation for shapes, not groups (groups cannot be rotated)
    () => x(D(t) || t.rot === i, `first shape ${t.id} rotation (${t.rot}) incorrect for (${i})`).to.be.true,
    () => x(T.lessThanOrEqualTo(t.l, n.l), `first shape ${t.id} longer than segment ${t.l} > ${n.l}`).to.be.true,
    () => x(T.lessThanOrEqualTo(t.w, n.w), `first shape ${t.id} wider than segment ${t.w} > ${n.w}`).to.be.true
  ]);
  const a = n.getStock, { success: f, firstShapeSegment: l, isHeadCut: h } = await Ar.call(this, {
    fs: t,
    segment: n,
    stock: a,
    stripShapeBatch: o,
    stripShapeCandidates: s,
    options: e
  });
  return !(f === !1 && (await r(l), !h));
}
function Rr(e, t, i) {
  if (ee(e.shapes)) {
    const s = /* @__PURE__ */ new Set();
    e.shapes = e.shapes.filter((r) => s.has(r.autoId) ? !1 : (s.add(r.autoId), !0));
  }
  const o = e.shapes.filter((s) => s.willItFit(e) ? !(e.type !== "root" && typeof i == "number" && s.getStripShapeBatchData(i) !== !1 && t.autoId !== s.autoId) : (k("cuts", () => `  Excluding ${s.autoId}: doesn't fit in segment`), !1));
  return k("cuts", () => `  Result: ${o.length} shapes selected for segment`), this.resetShapes(o, {
    keepScores: !1,
    removeGroups: !1,
    keepGuillotineData: !0,
    keepFirstShapeSampleRotations: !0
  }), o;
}
async function Ar({
  fs: e,
  segment: t,
  stock: i,
  stripShapeBatch: n,
  stripShapeCandidates: o,
  forceNoHeadCut: s,
  options: r
}) {
  k("guillotine", () => `[createFirstShapeSegmentsPlaceShapesAndScore] Starting for segment ${t.id}, first shape ${e.id}`);
  const { offcuts: a, firstShapeSegment: f, isHeadCut: l, success: h } = await Lr.call(this, { fs: e, segment: t, stock: i, stripShapeBatch: n, stripShapeCandidates: o, forceNoHeadCut: s, options: r });
  if (E([() => x(a.length, "too many offcuts generated").to.be.lessThanOrEqual(2)]), h === !1)
    return { success: !1, firstShapeSegment: f, isHeadCut: l };
  if (r.secondPass) {
    const { cuts: m } = Ot.call(
      this,
      {
        container: f,
        shapes: [e],
        forceNoHeadCut: s
      }
    ), { allShapesCut: I } = ts([e], m, f);
    if (!I) return { success: !1, firstShapeSegment: f, isHeadCut: l };
  }
  if (!a.length) {
    const m = ye.call(
      this,
      t.shapes,
      f,
      e
    );
    return await re.call(this, m, "strip"), { success: !0, firstShapeSegment: f, isHeadCut: l };
  }
  const c = f.cutDirection, u = a.find((m) => T.equalTo(m[c], f[c]));
  if (!u || u.l <= 0 || u.w <= 0) {
    k("cuts", () => `No next segment. Remaining shapes: ${t.shapes.length}`), O(e) && !t.shapes.find((I) => I.autoId === e.autoId) && t.shapes.unshift(e), t.shapes.length > 1 && await Ct.call(
      this,
      t.shapes,
      e,
      f || t
    );
    const m = ye.call(
      this,
      t.shapes,
      f,
      e
    );
    return await re.call(this, m, "strip"), { success: !0, firstShapeSegment: f, isHeadCut: l };
  }
  const d = f.cutDirection;
  (t.type === "root" || t.type === "firstShape") && o.length === 1 && (u[d] = t[d], f[d] = t[d]), E([() => x(t.shapes.filter((m) => m.autoId === e.autoId).length, "too many first shapes in segmentShapes").to.equal(1)]), await Ct.call(
    this,
    t.shapes,
    e,
    f || t
  );
  const g = ye.call(
    this,
    t.shapes,
    f,
    e
  );
  await re.call(this, g, "strip");
  const S = t.type === "root" ? t.shapes.filter((m) => J(m)) : [];
  this.resetShapes(t.shapes, {
    keepScores: !1,
    removeGroups: !0,
    keepGuillotineData: !1,
    keepFirstShapeSampleRotations: !0
  });
  const p = new Set(t.shapes.map((m) => m.autoId)), y = S.filter((m) => !p.has(m.autoId));
  return t.shapes.push(...y), { success: !0, firstShapeSegment: f, isHeadCut: l };
}
async function Lr({ fs: e, segment: t, stock: i, segmentShapes: n, stripShapeBatch: o, forceNoHeadCut: s, options: r }) {
  let a = !0, f, l = !1;
  !s && es.call(this, t) && (l = Ki.call(this, i.saw, e, t), t.hasHeadCut = l);
  try {
    f = Hr.call(
      this,
      e,
      l,
      t,
      i,
      n
    );
  } catch (c) {
    throw k("errors", () => `firstShapeSegment error, fs: ${e.autoId}, 'ssg: ${o}: ${c.message}`), new Error(`issue with createFirstShapeSegment ${c.message}`);
  }
  if (E([() => x(f[f.cutDirection]).to.equal(e[f.cutDirection])]), r?.secondPass) {
    const c = this.shapeList.filter((u) => u.added && u.stock.autoId === i.autoId && u.autoId !== e.autoId);
    if (Ri(f, c, i))
      return a = !1, { firstShapeSegment: f, offcuts: [], success: a };
  }
  const { offcuts: h } = Ot.call(
    this,
    {
      container: t,
      shapes: t.shapes,
      forceNoHeadCut: s
    }
  );
  return { firstShapeSegment: f, offcuts: h, isHeadCut: l, success: a };
}
async function ut(e, t, i = !1) {
  if (!this.config.sample.enable && i === !1) return !1;
  E([
    () => x(t.shapes.every((a) => O(a) || ue(a)), "segment shapes contains groups").to.be.true
  ]);
  let n = [];
  if (t.shapes.length > 1) {
    const a = F(t.cutDirection), f = t[a], l = t.parentSegmentGroupShapes || /* @__PURE__ */ new Set(), h = t.shapes.filter((g) => !l.has(g.id)), c = Os(h, f * 0.05), u = c.reduce((g, S) => g + S.area, 0), d = t.getStock.area;
    if (this.config?.groups?.guillotine?.firstShape && c.length >= 2 && u >= d * 0.8) {
      n = Di({
        shapes: c,
        container: t,
        // Use segment as container
        targetSize: f,
        exact: !1,
        direction: a,
        // Pass Direction ('l' or 'w'), not GroupDirection
        config: this.config,
        counters: this.counters,
        preventDuplicates: !0,
        type: "firstShape",
        maxGroups: this.config.sample.guillotine
      });
      const g = /* @__PURE__ */ new Set();
      n = n.filter((S) => {
        const p = `${S.l}-${S.w}`;
        return g.has(p) ? !1 : (g.add(p), !0);
      }), k("groups", () => `[FIRST SHAPE GROUPS] created ${n.map((S) => S.id).join()} for segment ${t.id} `);
    }
  }
  let o = null;
  e.secondPass && (o = oe(
    this.shapeList,
    t.getStock
  ));
  const s = [...t.shapes], r = fs.call(
    this,
    "guillotine",
    [...s, ...n],
    t,
    o,
    null,
    i
  );
  if (!r.length) return !1;
  for (let a = 0; a < r.length; a++) {
    const f = r[a];
    if (k("guillotine", () => `[FIRST SHAPE] attempting first shape candidate ${f.id} for segment ${t.id}`), a > 1 && r[a - 1].isSameSize(r[a])) {
      f.firstShape.sampleRotations = [];
      continue;
    }
    this.resetShapes(s, {
      removeGroups: !1,
      keepFirstShapeSampleRotations: !0
    }), f.firstShape.isFirstShape = !0, Pi(f) && (t.shapes.find((c) => c.autoId === f.autoId) || t.shapes.push(f), t.shapes = vi(t.shapes, f)), E([
      () => x(ee(t.shapes, `segment ${t.id} before running fs tests for ${f.id}`), "duplicates found in segment").to.be.false,
      () => x(ee(t.shapes), "duplicates found").to.be.false
    ]), await us.call(
      this,
      e,
      f,
      t
    ), E([() => x(ee(t.shapes), "duplicates found").to.be.false]), f.firstShape.isFirstShape = !1, f.firstShape.sampleRotations = [], t.shapes = s, this.resetShapes(t.shapes, {
      removeGroups: !0,
      keepFirstShapeSampleRotations: !0
    });
    const l = t.shapes.filter((c) => O(c)), h = t.shapes.filter((c) => D(c));
    k("reset", () => `[RESET] RESET SEGMENT ${t.id} BETWEEN FIRST SHAPE CANDIDATES: ${f.id}`, null, [
      {
        type: "Shapes",
        count: l.length,
        added: l.filter((c) => c.added).length,
        ids: l.map((c) => c.id).join(", ")
      },
      {
        type: "Groups",
        count: h.length,
        added: h.filter((c) => c.added).length,
        ids: h.map((c) => c.id).join(", ")
      }
    ]);
  }
  return !0;
}
function Or(e, t) {
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
function Mr(e, t) {
  k("guillotine", () => `[SEG-CREATE] creating new segments for segment ${e.id}, stock ${e.stock.id} at (${e.x},${e.y}) ${e.l}x${e.w}, first shape ${t.id} at (${t.x},${t.y}) ${t.l}x${t.w}, cut direction ${e.cutDirection}`), D(t) && k("guillotine", () => `[SEG-CREATE] first shape ${t.id} is group with ${t.shapes?.length || 0} shapes`, [t.dimensions, t.coords]), E([
    () => x(O(t) || D(t), "first shape is not a shape or group").to.be.true,
    () => x(j(e), "segment is not a segment class").to.be.true
  ]);
  const { offcuts: i } = Ot.call(this, {
    container: e,
    shapes: e.shapes
  });
  if (!i.length) return;
  k("guillotine", () => `[SEG-CREATE] All new segments for segment ${e.id}:`, null, i.map((f) => ({ id: f.id, x: f.x, y: f.y, l: f.l, w: f.w, dir: f.cutDirection })));
  const n = e.cutDirection === "l" ? "y" : "x", o = F(e.cutPreference), s = i.filter((f) => f[n] < t[n] + t[o]), r = i.find((f) => f[n] >= t[n] + t[o]);
  if (r && (r.rowSegment = !0, s.push(r)), !s?.length) return;
  const a = $e(n);
  return s.sort((f, l) => f[n] < l[n] ? -1 : f[n] > l[n] ? 1 : f[a] < l[a] ? -1 : f[a] > l[a] ? 1 : 0), s.forEach((f) => {
    const l = e.shapes.filter((c) => !c.added && xe(c, f)), h = /* @__PURE__ */ new Set();
    f.shapes = l.filter((c) => h.has(c.autoId) ? !1 : (h.add(c.autoId), !0)), E([() => x(f.shapes.every((c) => !c.added), `added shapes in offcut ${f.autoId}`).to.be.true]);
  }), e.children = s, s;
}
function qr(e, t, i, n, o, s, r, a, f) {
  if (!t || t.length <= 1) return !0;
  try {
    t.sort((w, P) => w[r] - P[r]);
    let l = 0, h = -1 / 0;
    for (const w of t)
      w[r] > h + n && (l += w[a] + n, h = w[r] + w[a]);
    if (l > e[a])
      return console.warn("Preliminary check: shapes would not fit within stock after rearrangement"), !1;
    const c = [], u = n / 2;
    let d, g, S = !1, p = 0, y = 0, m = 0;
    const I = 3;
    for (const w of t) {
      if (!bt(w)) continue;
      S || (d = w[r], m = 0), g = w[r] + w[a];
      const P = w[r] + w[a] + u, A = new Fe(
        o === "x" ? {
          x1: 0,
          x2: e[s],
          y1: P,
          y2: P
        } : {
          x1: P,
          x2: P,
          y1: 0,
          y2: e[s]
        }
      );
      if (Pt(A, e, i))
        if (S = !0, m++, m >= I)
          S = !1, console.warn(`Forced strip creation after ${I} consecutive collisions`);
        else
          continue;
      else
        S = !1, m = 0;
      const M = i.filter((L) => T.greaterThanOrEqualTo(L[r], d) && T.lessThan(L[r], g));
      if (!M.length) continue;
      const G = M.length > 0 ? M.reduce((L, B) => {
        const Q = L[o] + L[s], fe = B[o] + B[s];
        return T.equalTo(Q, fe) ? L[s] > B[s] ? L : B : Q > fe ? L : B;
      }) : M[0];
      if (!G) continue;
      const C = G[o] + G[s], q = M.length > 0 ? M.reduce((L, B) => {
        const Q = L[r] + L[a], fe = B[r] + B[a];
        return T.equalTo(Q, fe) ? L[a] > B[a] ? L : B : Q > fe ? L : B;
      }) : M[0];
      if (!q) continue;
      let K = q[r] + q[a];
      g > K && (K = g);
      const Ne = K - d;
      c.push({
        stripStartPoint: d,
        stripEndPoint: g,
        furthestPrimaryPoint: C,
        furthestOrderingPoint: K,
        shapesInThisRow: M,
        width: Ne
      });
    }
    if (!c.length)
      return console.warn("No valid strips found after analysis"), !0;
    const $ = /* @__PURE__ */ new Map();
    c.forEach((w) => {
      w.shapesInThisRow.forEach((P) => {
        $.set(P.autoId, P[r]);
      });
    }), c.sort((w, P) => T.equalTo(w.furthestPrimaryPoint, P.furthestPrimaryPoint) ? P.width - w.width : P.furthestPrimaryPoint - w.furthestPrimaryPoint);
    let b = 0;
    for (const w of c)
      b += w.furthestOrderingPoint - w.stripStartPoint + n;
    if (b > e[a])
      return console.warn("Total arrangement would exceed stock dimensions"), !1;
    for (const w of c) {
      w.shapesInThisRow.sort((P, A) => P.placementOrder - A.placementOrder);
      for (let P = 0; P < w.shapesInThisRow.length; P++) {
        const A = w.shapesInThisRow[P], M = A[r] - w.stripStartPoint, G = y + M;
        if (G + A[a] > e[a])
          return console.warn(`Shape ${A.id} would exceed stock boundaries after rearrangement`), wi(c, $, r), !1;
        const C = A[r];
        A[r] = G, A.placementOrder = P + p, Bt(A) === 1 && T.equalTo(A[o], 0) && Je(A, s), !T.equalTo(C, G) && f && (tr(f, A), Tt(f, A));
      }
      if (p += w.shapesInThisRow.length, y += w.furthestOrderingPoint - w.stripStartPoint + n, y > e[a])
        return console.warn("Rearrangement exceeds stock dimensions"), wi(c, $, r), !1;
    }
    return !0;
  } catch (l) {
    return console.error("Error during shape rearrangement:", l), !1;
  }
}
function wi(e, t, i) {
  e.forEach((n) => {
    n.shapesInThisRow.forEach((o) => {
      t.has(o.autoId) && (o[i] = t.get(o.autoId));
    });
  });
}
function Fr(e, t, i) {
  if (!this.config?.guillotine?.strips?.rearrange || e.saw.guillotineOptions?.strategy === "time") return !1;
  const o = e.bladeWidth;
  if (T.equalTo(o, 0) || o < 0)
    return console.warn("Invalid blade width for rearrangement"), !1;
  const s = oe(t, e);
  if (!s?.length) return !1;
  const r = e.cutPreference;
  if (r !== "l" && r !== "w")
    return console.warn("Invalid primary dimension:", r), !1;
  const a = r === "l" ? "x" : "y", f = s.filter(
    (u) => It(u, 1) && T.equalTo(u[a], 0)
  );
  if (!f.length) return !1;
  const l = F(r), h = r === "l" ? "y" : "x";
  return f.reduce((u, d) => u + d[l], 0) > e[l] ? (console.warn("Total strip width exceeds stock dimensions"), !1) : qr(
    e,
    f,
    s,
    o,
    a,
    r,
    h,
    l,
    i
  );
}
async function Gr(e, t, i, n) {
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
  if (T.equalTo(s, 0) || s < 0) {
    console.warn("Invalid blade width for corner squeeze");
    return;
  }
  const r = i.filter((u) => It(u, 1));
  if (!r.length) {
    console.debug("No strip shapes found for corner squeeze");
    return;
  }
  const a = e.cutPreference;
  if (a !== "l" && a !== "w") {
    console.warn("Invalid primary dimension:", a);
    return;
  }
  const f = a === "l" ? "x" : "y", l = F(a), h = a === "l" ? "y" : "x";
  r.sort((u, d) => u[h] - d[h]);
  let c = 0;
  for (let u = 0; u < r.length; u++) {
    let d = function(L, B, Q, fe) {
      return L[B] + L[Q] + fe;
    }, g = function(L, B, Q, fe, zt) {
      return zt > 0 ? zt - B[Q] : L[fe] - B[Q];
    };
    const S = r[u], p = u > 0 ? oe(this.shapeList, e) : i, y = V(t, e);
    if (!y.length) {
      console.debug("No remaining shapes to place, exiting corner squeeze");
      break;
    }
    const m = p.filter((L) => !It(L, 0) && Qe(L, S, h));
    m.some((L) => L.autoId === S.autoId) || m.push(S);
    let I;
    m.length > 0 ? I = m.reduce((L, B) => L[f] + L[a] > B[f] + B[a] ? L : L[f] + L[a] < B[f] + B[a] ? B : L[h] < B[h] ? L : B) : I = S;
    const $ = I[f] + I[a] + s;
    let b;
    f === "x" ? b = new Fe({
      x1: $,
      x2: $,
      y1: I[h],
      y2: e[l]
    }) : b = new Fe({
      x1: I[h],
      x2: e[l],
      y1: $,
      y2: $
    });
    const w = Pt(b, e, p, !0);
    if (!Array.isArray(w)) {
      console.warn("Expected collision shapes array but got:", typeof w);
      continue;
    }
    const P = w;
    let A = 0;
    if (P?.length && (A = P.reduce((B, Q) => B[h] < Q[h] ? B : Q)[h] - s, A <= I[h])) {
      console.debug("Invalid segment end point calculation, skipping this squeeze attempt");
      continue;
    }
    const M = typeof H < "u" && typeof H.segments < "u" ? H.segments === 0 ? "root" : (H.segments + 1).toString() : "squeeze-" + Date.now();
    typeof H < "u" && typeof H.segments < "u" && H.segments++;
    const G = d(
      I,
      f,
      a,
      s
    ), C = g(
      e,
      I,
      h,
      l,
      A
    ), q = e[a] - G, K = {
      id: M,
      shapes: y,
      stock: e,
      saw: e.saw,
      material: e.material,
      cutDirection: F(e.cutPreference),
      phase: 0,
      stockType: e?.saw?.stockType,
      t: e.t,
      // Assign all dimensions and positions
      x: f === "x" ? G : I.x,
      y: f === "y" ? G : I.y,
      l: f === "x" ? q : e.l,
      w: f === "y" ? q : e.w,
      [f]: G,
      [h]: I[h],
      [a]: q,
      [l]: C
    };
    if (K.l <= 0 || K.w <= 0) {
      console.debug("Skipping segment with invalid dimensions:", K.l, K.w);
      continue;
    }
    let Ne;
    try {
      Ne = new pe(K);
    } catch (L) {
      console.warn(`Corner squeeze segment creation error - ${L.message} for shape: ${I.id}`);
      continue;
    }
    try {
      await Ht.call(
        this,
        { secondPass: !0 },
        e,
        Ne
      ), c++;
    } catch (L) {
      console.warn(`Error during segment calculations: ${L.message}`);
    }
  }
  c > 0 && console.debug(`Corner squeeze completed with ${c} successful placements`);
}
function Br(e, t, i, n = null) {
  if (!t)
    throw new Error("no segment provided to assignStripShape");
  if (!e) throw new Error("no shape provided to assignStripShape");
  return e.resetBothScores(), e.x = t.x, e.y = t.y, D(e) && (e.initShapes(e.shapes), e.placeMyShapes(i)), k("calculations", `assigning first shape ${e.id}, x: ${e.x}, y: ${e.y}, rot: ${n}`), e.guillotineState || (e.guillotineState = new Ue({})), e.firstShape.isFirstShape = !0, Jn(e), Je(e, t.cutDirection), n !== null && !D(e) ? be(e, n, i) : n !== null && D(e) && e.rot !== n && k("groups", `[assignStripShape] WARNING: Group ${e.id} has computed rot=${e.rot} but requested rotation=${n} - groups cannot be rotated!`), Se() && (D(e) || E([() => x(e.rot).to.equal(n)])), e.addToStock(i), E([() => x(Ei(this.shapeList.filter((o) => o.stock?.id === i.id))).length.to.be(0)]), e;
}
async function us(e, t, i, n = null) {
  if (E([
    () => x(O(t) || D(t), "runFirstShapeRotationTests requires shape or group").to.be.true,
    () => x(j(i)).to.be.true
  ]), !(ce(n) && !Pe(t, n, i)))
    for (const o of t.firstShape.sampleRotations)
      await hs.call(
        this,
        t,
        i,
        o,
        kt,
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
  return i ? (n = e.cutPreference, Je(t, F(n)), e.hasHeadCut = !0) : (T.equalTo(t[e.cutDirection], e[e.cutDirection]) ? n = e.cutDirection : n = xt(e) ? F(e.cutPreference) : F(e.cutDirection), Je(t, F(n))), E([
    () => x(le(t)).to.not.equal(n)
  ]), n;
}
function Hr(e, t, i, n, o) {
  i.hasHeadCut = t;
  const s = Nr(i, e, t), r = {
    l: s === "w" ? i.l : e.l,
    w: s === "w" ? e.w : i.w
  }, a = new pe({
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
  if (a.shapes.unshift(e), !a)
    throw new Error("firstShapeSegment not created");
  return E([
    () => x(a.cutDirection, `segment cut direction ${i.id} is the same as first shape ${e.id}`).to.not.equal(le(e))
  ]), k("cuts", `FIRST SHAPE SEGMENT [${a?.parent?.type === "root" ? "R" : a.parent.id}]->[${a.autoId}] ${t ? "HEAD" : "NORM"} ${he(a.l, 4)}x${he(a.w, 4)}, SEG DIR ${a.cutDirection.toUpperCase()}, SHAPE DIR ${le(e).toUpperCase()}`), a;
}
function zr(e, t, i, n, o = null, s) {
  if (!t.length) return [];
  E([
    () => x(t.length).to.be.greaterThan(0),
    () => x(e.every((u) => u.added === !1), "unplaced shapes contain added shapes").to.be.true
  ]);
  let r = [];
  for (const u of t) {
    const d = tt(u, n);
    if (u.firstShape.sampleRotations = [], !D(u))
      for (const g of d) {
        let S = 1;
        be(u, g, n);
        const p = u.getPriority(n);
        let y = !0;
        if (be(u, g, n), E([
          () => x(u.rot, `unique shape ${u.id} rotation (${u.rot}) incorrect for (${g})`).equal(g)
        ]), !xe(u, i, g))
          continue;
        if (o?.length) {
          u.x = i.x, u.y = i.y;
          for (const I of o)
            if (Ai(u, I, n)) {
              y = !1;
              break;
            }
        }
        if (!y) continue;
        const m = u.aspect;
        if (m < 0.1) {
          const I = n.cutPreference;
          if (u[I] >= 0.7 * n[I] && u[I] > u[F(I)]) {
            const $ = Math.max(1, 10 * (1 - m * 2));
            S *= $;
          }
        }
        r.push({
          id: u.id,
          shape: u,
          rotation: g,
          score: S,
          priority: p
        }), E([
          () => x(xe(u, i, g), "canditate will not fit").to.be.true
        ]);
      }
  }
  r.sort((u, d) => u.score !== d.score ? d.score - u.score : u.priority !== d.priority ? d.priority - u.priority : d.shape.area - u.shape.area);
  const a = i.cutDirection, f = n[a], l = this.config.guillotine.firstShapeFullSizeThreshold, h = r.filter((u) => u.shape[a] >= l * f);
  if (h.length > 0) {
    const u = h[0];
    return u.shape.firstShape.sampleRotations = [u.rotation], [u.shape];
  }
  r = r.slice(0, this.config.sample.guillotine);
  const c = [];
  for (const u of r)
    c.find((g) => g.id === u.id) || c.push(u.shape), u.shape.firstShape.sampleRotations.push(u.rotation), E([
      () => x(u.shape.firstShape.sampleRotations.length).to.be.lessThanOrEqual(2),
      () => x(u.shape.firstShape.sampleRotations[0]).to.not.equal(u.shape.firstShape.sampleRotations[1])
    ]);
  return c.push(...s), c;
}
function Wr(e, t, i) {
  if (!e.length) return [];
  if (typeof t != "number") throw new Error("getAllocatedStripShapeBatch - stripShapeBatchNumber must be a number");
  if (!i) throw new Error("getAllocatedStripShapeBatch - stock is required");
  const n = e.filter((r) => {
    if (r.added) return !1;
    const a = r.guillotineState.getStripShapeBatchData(t);
    return !(a === !1 || a.rerunning || a.stockId !== i.autoId);
  }), o = /* @__PURE__ */ new Set();
  return n.filter((r) => o.has(r.autoId) ? !1 : (o.add(r.autoId), !0));
}
function Ur(e, t, i) {
  Yr(e.shapes);
  const n = Ms.call(this, e, t, i);
  return n || !1;
}
function $i(e, t = null, i, n = !1) {
  let o;
  if (t !== null) {
    const s = e.guillotineState.getStripShapeBatchData(t);
    if (s === !1)
      throw new Error("getStripShapeRotation - could not find strip shape group");
    o = s.rot;
  }
  if (E([() => x([0, 1].includes(o)).to.be.true]), n && o !== e.rot) {
    if (D(e) || !Pe(e, o, i)) return o;
    if (be(e, o, i) === !1)
      throw new Error("getStripShapeRotation - could not rotate strip shape correctly");
  }
  return o;
}
function jr(e, t, i, n, o) {
  const s = i.cutPreference === "l" ? "l" : "w", r = new Set(o.map((c) => c[s]));
  E([
    () => x(r.size).to.be.greaterThan(0)
  ]);
  const a = o.filter((c) => J(c)), f = o.filter((c) => O(c));
  if (f.length < 2)
    return o;
  const l = [...f], h = [];
  for (const c of r) {
    const u = [], d = c * (1 - this.config.groups.tolerance);
    let g = c * (1 + this.config.groups.tolerance);
    g > n[s] && (g = n[s]);
    for (let S = l.length - 1; S >= 0; S--) {
      const p = l[S];
      !p.getMinSpacing(i.saw, !0) && p[s] <= i[s] && p[s] >= d && p[s] <= g && (u.push(p), l.splice(S, 1));
    }
    u.length > 0 && h.push(u);
  }
  if (h.length > 0) {
    const c = [];
    for (const u of h) {
      if (u.length < 2) continue;
      const d = u[0], g = d.guillotineState.getStripShapeBatchData(e);
      if (g === !1)
        throw new Error("no reference shape group");
      let S;
      try {
        const p = u.slice(0, -1).reduce((P, A) => P + A.getMinSpacing(i), 0), y = u.reduce((P, A) => P + A[t], 0);
        if (p + y > i[t]) continue;
        const m = d.l, I = d.w, w = `ss-${[...new Set(u.map((P) => P.parentId || P.id))].sort().join("-")}_${this.counters.group++}`;
        S = new gt({
          l: m,
          w: I,
          id: w,
          shapes: u,
          direction: qs(t),
          container: i,
          type: "strip"
        });
      } catch (p) {
        console.log(p), S = null;
      }
      if (S) {
        const p = Math.min(...u.map((m) => {
          const I = m.guillotineState.getStripShapeBatchData(e);
          return I ? I.order : 1 / 0;
        }));
        S.guillotineState.setStripShapeBatchGroup(e, {
          stockId: i.autoId,
          dimension: S[t],
          rot: S.rot,
          order: p,
          priorityShape: g.priorityShape
        });
        const y = new Set(S.shapes.map((m) => m.id));
        c.push(S), n.shapes = n.shapes.filter((m) => !y.has(m.id)), n.shapes.push(S), o = o.filter((m) => !y.has(m.id));
      }
    }
    o = [...c, ...a, ...o.filter((u) => O(u))];
  } else
    o = [...a, ...f];
  return o;
}
function Yr(e) {
  for (const t of e) t.guillotineState.resetStripShapeBatchGroups();
}
function _r(e, t) {
  const i = t.getStock, n = 0.1 * i.l;
  function o(a) {
    return e.some((f) => a.parentId === f.parentId && !f.added) && Wt(a, i) && a.willItFit(t);
  }
  const s = e.some((a) => Wt(a, i) && a.willItFit(t) && a.l >= n || a.w >= n);
  return e.filter((a) => a.added ? !1 : (ue(a) && a.updateShapeSpacing(t), e.length === 1 || !s ? o(a) : a.l < n && a.w < n ? !1 : o(a)));
}
function fs(e, t, i, n = null, o = !1) {
  if (!this.config.sample.enable && o === !1) return [];
  if (!e) throw new Error("getFirstShapeSample - type is required");
  E([
    () => x(e === "guillotine" || e === "efficiency", "type not correct").to.be.true,
    () => x(Fs(i), "should be a container").to.be.true
  ]);
  const s = we(t, !1, !0);
  if (!s.length) return [];
  const r = t.filter((d) => D(d)), a = [], f = i.getStock;
  let l = _r(s, i);
  if (!l.length) return [];
  if (e === "guillotine")
    l = zr.call(
      this,
      t,
      l,
      i,
      f,
      n,
      r
    );
  else if (e === "efficiency") {
    l.push(...r);
    const d = l.filter((g) => g.getPriority(f) > 0);
    d.length && (l = d), l.sort(me.aspect);
  }
  const h = l.filter((d) => D(d)), c = l.filter((d) => !D(d)), u = [...h, ...c];
  for (const d of u)
    if (D(d)) {
      if (!d.willItFit(i)) {
        k("groups", `[getFirstShapeSample] Group ${d.id} does NOT fit container after calculateGroupDimensions - skipping (group: ${d.l}x${d.w}, container: ${i.l}x${i.w})`);
        continue;
      }
      d.firstShape.sampleRotations = [d.rot.valueOf()], a.push(d);
    } else {
      const g = t.find((S) => S.parentId === d.parentId && !S.added && S.constructor.name === d.constructor.name);
      if (g && (g.firstShape.sampleRotations = tt(g, i), a.push(g)), a.length >= (e === "guillotine" ? this.config.sample.guillotine : this.config.sample.efficiency))
        break;
    }
  return k("firstShapes", `candidates for stock ${i.getStock?.id}, ${j(i) ? "segment " + i.id : ""}`, a.map((d) => ({ id: d.id, autoId: d.autoId, rotations: d.firstShape.sampleRotations }))), E([() => x(ee(a), "duplicate ids found in candidates with getFirstShapeSample").to.false]), a;
}
const ke = {
  async calculation(e, t, i) {
    if (e?.tidy && (this.resetShapes(oe(i, t)), this.tidyStrategy = !0), await ke.tryFirstShapes.call(this, t, i), !!this.bestResult && (this.tidyStrategy = !1, !e?.tidy && Kr.call(this, this.bestResult, t))) {
      t.algoBenchmark = this.bestResult;
      try {
        const o = await new $n(this, t, i).run();
        if (!o) return;
        await re.call(this, o.result), delete t.algoBenchmark;
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
    be(e, t, i), e.resetBothScores(), as.call(
      this,
      e,
      i,
      Lt.call(this, i, i, e),
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
    const o = we(i, !1, !0);
    let s = o.length > 1;
    s && i.reduce((f, l) => f + l.area, 0) < e.area * this.config.groups.shapeAreaCutOff && (s = !1);
    let r = [];
    s && !this.hasMinSpacing && this.config.groups.efficiency.firstShapes && o.length < this.config.groups.efficiency.limit && (r = ke.createFirstShapeGroups.call(
      this,
      i,
      e
    )), n.push(...r);
    let a = t;
    n = we(n, !1, !0);
    for (const f of n)
      f.firstShape.isFirstShape = !0, D(f) && (a = wn(
        f.shapes,
        i
      ), a.unshift(f)), await ke.calculateFirstShapeRotations.call(
        this,
        a,
        e,
        f
      ), f.firstShape.isFirstShape = !1;
  },
  /**
   * run the calculations for both first shape rotations
   */
  calculateFirstShapeRotations: async function(e, t, i) {
    const n = tt(i, t);
    for (const o of n) {
      this.resetShapes(e, !1, !1), i.added = !1, D(i) && (i.placeMyShapes(t), e.unshift(...i.shapes), e = e.filter((r) => r.id !== i.id));
      const s = await mr.call(
        this,
        e,
        t,
        i,
        o
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
    weighting: o = null
  }) {
    const s = performance.now();
    if (this.counters.placement = 1, !e.length) return !1;
    if (!i)
      throw new Error("no firstShape provided to efficiency.runSpecificStrategy");
    if (Y(t) && (t.used = !1), this.resetShapes(e, !0, !1), typeof i == "string")
      i = this.shapeList.find((l) => l.id === i);
    else if (pt(i) || Gs(i)) {
      const l = i.autoId || i.id;
      i = this.shapeList.find((h) => h.autoId === l || h.id === l);
    }
    if (!i)
      throw new Error("firstShape not found in shapeList");
    if (i.reset(), e.length) {
      if (o) {
        this.weighting.custom = {};
        for (const l of Object.keys(this.weighting.efficiency.standard()))
          this.weighting.custom[l] = o[l] ? o[l] : 0;
      }
      ke.defaultFirstShapePlacement.call(
        this,
        i,
        n,
        t
      ), await Ct.call(
        this,
        e,
        i,
        t
      );
    }
    const r = ye.call(
      this,
      e,
      t,
      i
    );
    o && (this.weighting.custom = null);
    const a = performance.now(), f = Math.ceil(a - s);
    return r.time = f, r;
  },
  /**
   * create groups to be used as a first shape
   * CAUTION - can make very simple calculations less efficient
   */
  createFirstShapeGroups: function(e, t) {
    if (!this.config.groups.efficiency.firstShapes) return [];
    const i = V(e, t).filter((r) => O(r)), n = ["l", "w"], o = /* @__PURE__ */ new Map();
    for (const r of n)
      Di({
        shapes: i,
        container: t,
        targetSize: t[r],
        exact: !1,
        direction: r,
        config: this.config,
        preventDuplicates: !0,
        counters: this.counters
      }).forEach((f) => {
        const l = `${f.l}-${f.w}`;
        o.has(l) || o.set(l, f);
      }), this.resetShapes(i);
    let s = Array.from(o.values());
    return s.sort((r, a) => a.efficiency - r.efficiency), s = s.slice(0, this.config.sample.groupSize), E([
      () => x(s.every((r) => T.lessThanOrEqualTo(r.l, t.l) && T.lessThanOrEqualTo(r.w, t.w)), "groups larger than container").to.be.true
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
    await ke.calculation.call(this, e, t, i);
  },
  guillotine: async function(e, t, i, n = []) {
    if (this.counters.placement = 0, e.secondRun && n.length) {
      for (const o of n) {
        const s = i.filter((r) => !r.added);
        o.shapes = s, await ze.call(
          this,
          e,
          t,
          s,
          o
        );
      }
      return;
    }
    await ze.call(
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
        o.shapes = s, await ze.call(
          this,
          e,
          t,
          s,
          o
        );
      }
      return;
    }
    await ze.call(
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
    const n = Bs.call(this, t, i);
    n && t && (Ns(n, t, i), n.stock = t, await re.call(this, n));
  }
};
async function Xr({
  shapeOrGroup: e,
  container: t,
  weighting: i,
  containerPlacedShapes: n = null,
  unplacedShapes: o = null,
  placementPositions: s = null,
  rayCastCoords: r = null,
  placedCoords: a = null
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
  const f = t.l + t.x - e.l, l = t.w + t.y - e.w;
  if (f < 0 || l < 0) return !1;
  const h = new St(), c = t.getStock;
  if (r)
    for (const u of r.points.values()) {
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
        if (!Y(t) && e.isTooCloseToEdges(c)) {
          d.tooClose = !0;
          continue;
        }
        if (!d.tooClose) {
          const g = e.createProximityRectangle(u);
          if (!g)
            throw new Error("unable to create proximity rectangle");
          for (const S of n)
            if (d.tooClose = Ai(
              g,
              S,
              t,
              !1
            ), d.tooClose) break;
        }
      }
  }
  for (const u of h.points.values()) {
    if (u.tooClose || T.greaterThan(u.x, f) || T.greaterThan(u.y, l) || (e.x = u.x, e.y = u.y, Ri(e, n, t))) continue;
    mi(
      e,
      t,
      i,
      n,
      o,
      u,
      a
    );
    let g = o.length > 1;
    (t.cutType === "efficiency" && this.config.groups.efficiency.position || ["guillotine", "beam"].includes(t.cutType) && this.config.groups.guillotine.position) && (Vr.call(this, o, t) || (g = !1)), g && (t.cutType === "efficiency" && this.config.groups.efficiency.position || ["guillotine", "beam"].includes(t.cutType) && this.config.groups.guillotine.position) && u.type !== "group" && O(e) && js({
      container: t,
      containerPlacedShapes: n,
      unplacedShapes: o,
      shape: e,
      point: u,
      config: this.config,
      scoreFunction: (S, p, y, m, I) => {
        mi(
          S,
          p,
          i,
          y,
          m,
          I,
          a
        );
      }
    });
  }
  return !0;
}
function Vr(e, t) {
  return !0;
}
async function hs(e, t, i = null, n = null, o = {}, s = null) {
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
  ce(e.orientationLock) && (i = Hs(e, t));
  const r = ce(i) ? i : 0;
  Pe(e, r, t) && xe(e, t, r) && (be(e, r, t), s && (o[s] = r), await n.call(this, o));
  const a = 1;
  i === null && !e.isSquare && Pe(e, a, t) && xe(e, t, a) && (be(e, a, t), s && (o[s] = a), await n.call(this, o));
}
async function Ct(e, t, i) {
  if (!e.length) return !1;
  if (ee(e)) {
    const h = /* @__PURE__ */ new Set();
    e = e.filter((c) => h.has(c.autoId) ? !1 : (h.add(c.autoId), !0));
  }
  const o = i.getStock;
  if (o.saw && !Me(o.saw)) throw new Error("not real saw");
  const s = e?.filter((h) => h.added);
  if (!s.length) return;
  const r = new Set(s.map((h) => h.autoId)), a = Ut.call(
    this,
    null,
    s,
    i
  );
  if (a.points.size === 0) return !1;
  const f = t ? {
    x: /* @__PURE__ */ new Map([[t.x, [t]]]),
    y: /* @__PURE__ */ new Map([[t.y, [t]]])
  } : {
    x: /* @__PURE__ */ new Map(),
    y: /* @__PURE__ */ new Map()
  };
  function l() {
    const h = V(
      e,
      o,
      "filter"
    ), c = /* @__PURE__ */ new Set();
    for (const p of h)
      if (D(p) && !J(p)) {
        const y = p;
        if (y.shapes?.length)
          for (const m of y.shapes)
            c.add(m.autoId);
      }
    const u = h.filter((p) => {
      if (J(p)) return !1;
      if (je(p) || ue(p)) {
        const y = p;
        return !(!y.shapes || y.shapes.length === 0);
      }
      if (O(p))
        return !(c.has(p.autoId) || p?.group?.inGroup);
    }), d = u.filter((p) => D(p) && !J(p)), g = u.filter((p) => O(p)), S = [...d, ...g];
    return k("groups", () => `[getRelevantUnplacedShapes] ${S.length} unplaced (${d.length} groups, ${g.length} shapes)`), d.length > 0 && d.forEach((p) => {
      k("groups", () => `Group ${p.id}: ${p.shapes?.length || 0} child shapes, ${p.shapes.map((y) => y.id).join()}, added=${p.added}`);
    }), S;
  }
  for (let h = l(); h.length; ) {
    let c = function() {
      const m = h.filter((b) => typeof b?.bestScore?.total == "number");
      if (!m?.length) return !1;
      const I = Jr(m);
      if (!I) return null;
      const $ = Qr.call(this, i, o, f, I, s, r);
      return $.added && !r.has($.autoId) && (D($) && $.type !== "position" || s.push($), r.add($.autoId), j(i) && (i.shapes = i.shapes.filter((w) => w.autoId !== $.autoId))), E([
        () => x($.added).to.be.true,
        () => x(ee(s), "duplicates found in containerPlacedShapes").to.be.false,
        () => x(s.every((b) => b.added), "containerPlacedShapes contains unplaced shapes").to.be.true
      ]), { bestShapeOrGroup: I, winningShapeOrGroup: $ };
    }, u = null;
    this.uniqueShapes.length > 1 && i.cutType === "efficiency" && this.config.efficiency.rayCasting && !this.hasMinSpacing && (u = zs(
      i,
      s
    ));
    const d = h.length;
    let g = !1;
    for (let m = 0; m < d; m++) {
      let I = !1;
      if (g && h[m].isSameSize(h[m - 1]))
        continue;
      for (let w = 0; w < m; w++)
        if (h[w].isSameSize(h[m])) {
          I = !0;
          break;
        }
      if (I) {
        g = !0;
        continue;
      } else
        g = !1;
      const $ = h[m];
      $.resetBestScore();
      const b = Lt.call(this, i, o, $);
      if (await hs.call(
        this,
        $,
        i,
        null,
        Xr,
        {
          shapeOrGroup: $,
          container: i,
          weighting: b,
          containerPlacedShapes: s,
          unplacedShapes: h,
          placementPositions: a,
          rayCastCoords: u,
          placedCoords: f
        }
      ), D($) && !J($)) {
        const w = $;
        if (!w.bestScore || typeof w.bestScore.total != "number") {
          k("groups", () => `[placeShapes] Group ${w.id} has no valid placement. Releasing it and all clones.`);
          const P = w.autoId.replace(/\.\d+$/, ""), A = [];
          for (const M of e)
            if (D(M) && !J(M)) {
              const G = M;
              G.autoId.replace(/\.\d+$/, "") === P && !G.added && A.push(G);
            }
          if (A.length > 0) {
            k("groups", () => `  Releasing ${A.length} groups (including clones)`);
            const M = [], G = /* @__PURE__ */ new Set();
            for (const C of A)
              if (C.shapes && C.shapes.length > 0)
                for (const q of C.shapes)
                  G.has(q.autoId) || (M.push(q), G.add(q.autoId));
            for (const C of A)
              k("groups", () => `    Destroying group ${C.id}`), C.destroy();
            M.length > 0 && (k("groups", () => `  Adding ${M.length} released shapes back to containerShapes`), e.push(...M));
          }
        }
      }
    }
    const S = c.call(this, e);
    if (S === !1 || S === null) return;
    const { bestShapeOrGroup: p, winningShapeOrGroup: y } = S;
    if (h = l(), h.length > 0) {
      const m = Ut(
        y ? [y] : [],
        s,
        i
      );
      a.addPoints(m.toArray()), a.deletePoint(new mt(p.x, p.y));
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
function Kr(e, t) {
  if (this.config.evo.disable || e.stockID !== t.id) return !1;
  const i = V(this.shapeList, t, "filter", null), n = we(i, null, !0);
  return n.length <= 1 || t?.saw?.stockType === "roll" || n.length > 100 || e?.algoTime > 2e3 || !this.enableEvo || e.cutType === "efficiency" && e?.score[this.successMetric] < 0.65 || e?.score?.totalShapesPlaced <= 2 ? !1 : i.length <= this.config.evo.stockLimit;
}
function Qr(e, t, i, n, o, s) {
  const r = D(n) ? n : n.bestScore?.group ?? null;
  if (r) {
    const f = r.shapes.filter((l) => l.added || l.group?.inGroup);
    if (f.length > 0)
      k("groups", () => `[placeBestShapeOrGroup] Group ${r.id} is invalid - ${f.length}/${r.shapes.length} shapes already placed. Placing individual shape instead.`), D(n) || (n.bestScore.group = null);
    else {
      if (k("groups", () => `[placeBestShapeOrGroup] Placing group ${r.id} with ${r.shapes.length} shapes (type=${r.type})`), r.placementOrder = this.counters.placement, this.counters.placement += r.shapes.length, r.setPositionToBestScore(), pi(e, r), r.addToStock(t), Tt(i, r), r.placeMyShapes(t), r.type === "position")
        for (const l of r.shapes)
          this.shapeList.some((h) => h.autoId === l.autoId) || this.shapeList.push(l);
      if (r.type !== "position" && r.type !== "firstShape")
        for (const l of r.shapes)
          l.added && !l.group?.inGroup && !s.has(l.autoId) && (o.push(l), s.add(l.autoId));
      return r;
    }
  } else n && (n.placementOrder = this.counters.placement++, n.setPositionToBestScore(), pi(e, n), n.addToStock(t), Tt(i, n));
  return r || n;
}
function Jr(e) {
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
let Zr = class {
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
function eo(...e) {
  return class {
  };
}
const st = {
  Schema: Zr,
  model: eo,
  connect: () => Promise.resolve(),
  connection: {}
}, Ee = st.Schema, ve = new Ee({
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
    type: Ee.Types.ObjectId,
    ref: "saws"
  },
  // Associated extras by type - stores array of Extra IDs
  extras: {
    banding: [{
      type: Ee.Types.ObjectId,
      ref: "extras"
    }],
    finish: [{
      type: Ee.Types.ObjectId,
      ref: "extras"
    }],
    planing: [{
      type: Ee.Types.ObjectId,
      ref: "extras"
    }],
    machining: [{
      type: Ee.Types.ObjectId,
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
ve.index({ organisation: 1, name: 1 });
ve.index({ organisation: 1, type: 1 });
ve.index({ organisation: 1, _id: -1 });
ve.index({ organisation: 1, l: 1, w: 1 });
ve.index({ name: "text", type: "text", description: "text" });
ve.plugin(Mi);
const to = st.model(
  "material",
  ve,
  "materials"
), bi = st.Schema, X = new bi({
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
    type: bi.Types.ObjectId,
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
function io(e) {
  return e ? {
    l1: He({ v: e[2], dp: 4 }),
    l2: He({ v: e[3], dp: 4 }),
    w1: He({ v: e[0], dp: 4 }),
    w2: He({ v: e[1], dp: 4 })
  } : {
    l1: 0,
    l2: 0,
    w1: 0,
    w2: 0
  };
}
X.pre("save", function() {
  this.material = this.material?.toLowerCase(), this.area = (this.l - parseFloat(this?.trim?.[2]) - parseFloat(this?.trim?.[3])) * (this.w - parseFloat(this?.trim?.[0]) - parseFloat(this?.trim?.[1]));
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
X.plugin(Mi);
const so = st.model(
  "stock",
  X,
  "stock"
);
async function no(e = [], t, i = []) {
  t instanceof Ye || (t = new Ye(t));
  let n = [];
  const o = [];
  for (const s of e) {
    if (!ce(s.material)) continue;
    const r = n.filter((a) => {
      if (xe(s, a)) {
        let f = !1, l = !1, h = !0;
        if (a?.saw?.stockType === "linear" && (T.equalTo(s.w, a.w) || (h = !1)), (s.t === a.t || !ce(a.t)) && (l = !0), s.material === a.material && (f = !0), a?.saw?.stockType === "linear") {
          if (f && l && h)
            return !0;
        } else if (f && l) return !0;
      }
      return !1;
    });
    if (r.length) {
      s.stockLock = r.map((a) => a.parentId);
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
      }, [f, l] = await Promise.all([
        to.findById(s?.material?.toLowerCase())?.lean(),
        //TODO make sorting order and limit configurable based on org
        so.find(a).sort({ area: 1 }).limit(3).lean()
      ]);
      f && l.length ? l.forEach((h) => {
        const c = io(h.trim), u = {
          l: h.l - (c.l1 ?? 0) - (c.l2 ?? 0),
          w: h.w - (c.w1 ?? 0) - (c.w1 ?? 0)
        };
        if (!(T.lessThanOrEqualTo(
          s.l,
          u.l
        ) && T.lessThanOrEqualTo(
          s.w,
          u.w
        ) || T.lessThanOrEqualTo(
          s.w,
          u.l
        ) && T.lessThanOrEqualTo(
          s.l,
          u.w
        )))
          return;
        const d = Ys.parse({
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
          name: f.name,
          autoAdd: !1,
          //material based calculations do not allow autoAdd
          trim: c,
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
        n.push(new yt(d)), Array.isArray(s.stockLock) ? s.stockLock.push(d.parentId) : s.stockLock = [d.parentId];
      }) : o.push({
        material: f.name,
        t: s.t,
        shape: s.parentId
      });
    } catch (a) {
      throw console.error("error finding stock", a.message), new Error(a);
    }
  }
  if (n.length)
    n = wt(n);
  else if (!i?.length)
    throw new Error("No relevant stock found - check material, thickness, dimensions & stock quantity");
  return {
    stockList: n,
    unavailableStock: o
  };
}
function ro(e, t) {
  const i = Math.min(e.l, e.w), n = Math.max(e.l, e.w), o = e.trim;
  return `${t ? e.parentId + "|" : ""}${e.t}|${e.orientationLock}|${e.material ?? ""}|${i}|${n}|${o?.l1 ?? ""}|${o?.l2 ?? ""}|${o?.w1 ?? ""}|${o?.w2 ?? ""}`;
}
function oo(e, t, i = !1) {
  const n = /* @__PURE__ */ new Map();
  for (const s of t) {
    s.identicalTo = [];
    let r = n.get(s.parentId);
    r || (r = [], n.set(s.parentId, r)), r.push(s);
  }
  const o = /* @__PURE__ */ new Map();
  for (const s of e) {
    const r = ro(s, i);
    let a = o.get(r);
    a || (a = /* @__PURE__ */ new Set(), o.set(r, a)), a.add(s.parentId);
  }
  for (const s of o.values())
    if (!(s.size <= 1))
      for (const r of s) {
        const a = n.get(r);
        if (a)
          for (const f of a)
            for (const l of s)
              l !== f.parentId && f.identicalTo.push(l);
      }
  for (const [s, r] of n)
    if (r.length > 1)
      for (const a of r)
        a.identicalTo.includes(s) || a.identicalTo.push(s);
}
function ao(e, t) {
  const i = /* @__PURE__ */ new Map();
  for (const o of t)
    i.has(o.parentId) || i.set(o.parentId, o);
  const n = /* @__PURE__ */ new Map();
  for (const o of e) {
    let s = n.get(o.parentId);
    s || (s = [], n.set(o.parentId, s)), s.push(o);
  }
  for (const o of n.values()) {
    const s = o[0], r = {};
    for (const a of i.values()) {
      const f = tt(s, a);
      r[a.parentId] = {
        any: xe(s, a, null),
        0: f.includes(0),
        1: f.includes(1)
      };
    }
    for (const a of o)
      a.fitsStock = r;
  }
}
function lo(e, t, i, n) {
  const o = n?.similarityThreshold ?? 0.1, s = n?.selectionStrategy, r = n?.minPerShape ?? 0, a = n?.minTotal ?? 0;
  if (e.length <= 1)
    return t;
  const { filtered: f, excludedGroups: l } = uo(
    e,
    i,
    { similarityThreshold: o, selectionStrategy: s }
  );
  let h = [...f], c = [...l];
  if (r > 0) {
    const g = /* @__PURE__ */ new Map();
    for (const p of t) {
      const y = g.get(p.parentId) || 0;
      g.set(p.parentId, y + 1);
    }
    const S = h.filter((p) => (g.get(p.parentId) || 0) < r);
    if (S.length > 0) {
      for (const p of S) {
        const y = p.parentId;
        for (const m of c) {
          const I = m.filter(($) => (g.get($.original.parentId) || 0) >= r);
          if (I.length > 0) {
            const $ = I.sort((w, P) => (g.get(P.original.parentId) || 0) - (g.get(w.original.parentId) || 0))[0], b = h.findIndex((w) => w.parentId === y);
            if (b !== -1) {
              h[b] = $.original;
              const w = m.findIndex((P) => P === $);
              w !== -1 && m.splice(w, 1);
              break;
            }
          }
        }
      }
      c = c.filter((p) => p.length > 0);
    }
  }
  if (a > 0) {
    const g = new Set(h.map((p) => p.parentId)), S = t.filter((p) => g.has(p.parentId)).length;
    if (S < a && c.length > 0) {
      const p = [];
      let y = S;
      for (; y < a && c.some((m) => m.length > 0); ) {
        for (let m = 0; m < c.length && y < a; m++) {
          const I = c[m];
          if (I.length > 0) {
            const b = co([...I], s)[0], w = b.original.parentId, P = t.filter((M) => M.parentId === w).length;
            p.push(b.original), y += P;
            const A = I.findIndex((M) => M === b);
            A !== -1 && I.splice(A, 1);
          }
        }
        if (c = c.filter((m) => m.length > 0), c.length === 0 || c.every((m) => m.length === 0))
          break;
      }
      h = [...h, ...p];
    }
  }
  const u = new Set(h.map((g) => g.parentId));
  return t.filter((g) => u.has(g.parentId));
}
function co(e, t) {
  switch (t) {
    case "largest":
      return e.sort((i, n) => n.area - i.area);
    case "smallest":
      return e.sort((i, n) => i.area - n.area);
    default:
      return e;
  }
}
function uo(e, t, i) {
  const n = i.similarityThreshold, o = i.selectionStrategy;
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
  }), r = [];
  for (const l of s) {
    let h = !1;
    for (const c of r)
      if (c.some((u) => fo(l.rotated, u.rotated, n))) {
        c.push(l), h = !0;
        break;
      }
    h || r.push([l]);
  }
  const a = [], f = [];
  return r.forEach((l) => {
    if (l.length === 1) {
      a.push(l[0]);
      return;
    }
    let h;
    switch (o) {
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
    const c = l.filter((u) => u !== h);
    c.length > 0 && f.push(c);
  }), {
    filtered: a.map((l) => l.original),
    excludedGroups: f
  };
}
function fo(e, t, i) {
  const n = Math.abs(e.l - t.l) / Math.max(e.l, t.l, 1), o = Math.abs(e.w - t.w) / Math.max(e.w, t.w, 1);
  return n <= i && o <= i;
}
function ho(e, t, i) {
  if (k("stack", () => `previous stock ${t.id}`), ["l", "w", "material", "t"].some((s) => e[s] !== t[s])) return !1;
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
      return k("stack", () => `stack found: ${e.id} === ${t.id}`), this.recordStackToBestResult(e, i), e.used = !0, e.score = t.score, s;
  }
  return !1;
}
function ds(e, t, i, n) {
  if (!this.config.stack || !i.length) return !1;
  const o = e.saw;
  if (!o?.options?.stackingMode || o.options.stackingMode === "none") return !1;
  if (k("stack", () => `looking for stack for ${e.id}, comparing to ${t.id}`), o.cutType === "beam" && t.stack) {
    let s = t, r = 1;
    if (t.stack.stock ? (s = t.stack.stock, r = s.stack?.number || 1) : t.stack.number && (r = t.stack.number), s.t * r + e.t > o.stackHeight)
      return !1;
  }
  if (e.parentId === t.parentId) {
    if (o.cutType === "beam" && o.stackHeight > 0 && e.t * 2 > o.stackHeight)
      return !1;
    const s = oe(n, t);
    if (!s.length) return !1;
    const r = ps.call(this, [t], s, e, i, !0, o.options.stackingMode === "identical");
    if (r)
      return e.stack = { stock: r }, r.stack.number === 1 ? r.stack.number = 2 : r.incrementStack(), r;
  }
  return !1;
}
function po(e, t) {
  if (!this.config.findDuplicatePatterns) return !1;
  k("stack", () => `🔎 checkForDuplicates called for ${e.id}`);
  const i = this.shapeList.filter((r) => r.added);
  k("stack", () => `   Total shapes added across all stock: ${i.length}`);
  const n = this.stockList.filter((r) => r.used && r.id !== e.id && r.l === e.l && r.w === e.w);
  if (k("stack", () => `   Relevant used stock with matching dimensions: ${n.map((r) => r.id).join(", ")}`), !n.length)
    return k("stack", () => `   No relevant stock found for ${e.id}`), !1;
  const o = e.saw?.options?.stackingMode === "identical", s = ps.call(this, n, i, e, t, !0, o);
  return s ? (k("stack", () => `   ✅ Duplicate found: ${e.id} matches ${s.id}`), _s(s, e), e.used = !0, s) : (k("stack", () => `   No duplicate pattern found for ${e.id}`), !1);
}
function ps(e, t, i, n, o = !0, s = !0) {
  if (!e.length || !n.length) return null;
  k("stack", () => `🔍 Checking for duplicate patterns for ${i.id}`), k("stack", () => `   Current shapes count: ${n.length}`), k("stack", () => `   Used stock to check: ${e.map((c) => c.id).join(", ")}`);
  const r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  for (const c of n) {
    const u = s ? `${c.longSide}|${c.shortSide}|${c.material}` : `${c.longSide}|${c.shortSide}`;
    let d = r.get(u);
    if (d || (d = [], r.set(u, d)), d.push(c), s) {
      if (c.parentId) {
        let g = a.get(c.parentId);
        g || (g = [], a.set(c.parentId, g)), g.push(c);
      }
      if (c.identicalTo && Array.isArray(c.identicalTo))
        for (const g of c.identicalTo) {
          let S = f.get(g);
          S || (S = [], f.set(g, S)), S.push(c);
        }
      if (c.autoId) {
        const g = c.autoId.split(".")[0];
        let S = l.get(g);
        S || (S = [], l.set(g, S)), S.push(c);
      }
    }
  }
  const h = /* @__PURE__ */ new Map();
  for (const c of e) {
    k("stack", () => `   📋 Checking against stock ${c.id}`);
    const u = oe(t, c);
    if (!u.length) {
      k("stack", () => `      ❌ No shapes on ${c.id}, skipping`);
      continue;
    }
    k("stack", () => `      Stock ${c.id} has ${u.length} shapes`);
    const d = u.length, g = [];
    h.clear();
    let S = !0;
    for (const p of u) {
      let y = null;
      if (s) {
        const m = /* @__PURE__ */ new Set(), I = `${p.longSide}|${p.shortSide}|${p.material}`, $ = r.get(I);
        if ($)
          for (const w of $)
            h.has(w) || m.add(w);
        if (p.parentId) {
          const w = f.get(p.parentId);
          if (w)
            for (const A of w)
              h.has(A) || m.add(A);
          const P = a.get(p.parentId);
          if (P)
            for (const A of P)
              h.has(A) || m.add(A);
        }
        if (p.identicalTo && Array.isArray(p.identicalTo))
          for (const w of p.identicalTo) {
            const P = a.get(w);
            if (P)
              for (const A of P)
                h.has(A) || m.add(A);
          }
        if (p.autoId) {
          const w = p.autoId.split(".")[0], P = l.get(w);
          if (P)
            for (const A of P)
              h.has(A) || m.add(A);
        }
        const b = [];
        for (const w of m)
          w.isIdentical(p, !1) && b.push(w);
        b.length === 1 ? (y = b[0], k("stack", () => `      ✓ Shape ${p.id} matched to ${y.id}`)) : b.length > 1 ? (y = b.find((w) => w.parentId === p.parentId) || b[0], k("stack", () => `      ✓ Shape ${p.id} matched to ${y.id} (${b.length} candidates, preferred by parentId: ${y.parentId === p.parentId})`)) : k("stack", () => `      ✗ Shape ${p.id} has no identical match`);
      } else {
        const m = `${p.longSide}|${p.shortSide}`, I = r.get(m), $ = I ? I.filter((b) => !h.has(b) && Pe(b, p.rot, c)) : [];
        $.length === 1 ? y = $[0] : $.length > 1 && (y = $.find((b) => b.parentId === p.parentId) || $[0]);
      }
      if (y)
        h.set(y, !0), g.push({
          current: y,
          match: p
        });
      else {
        k("stack", () => `      ❌ Failed to match all shapes for ${c.id}`), S = !1;
        break;
      }
    }
    if (S && g.length === d) {
      if (k("stack", () => `      ✅ Perfect match found: ${i.id} matches ${c.id}`), o) {
        i.shapes = [];
        for (const { current: p, match: y } of g)
          p.update({
            x: y.x,
            y: y.y,
            w: y.w,
            l: y.l,
            guillotineData: y.guillotineData,
            placementOrder: y.placementOrder,
            added: !0,
            stock: i
          }), i.shapes.push(p);
      }
      return c;
    } else
      k("stack", () => `      ⚠️ Stock ${c.id}: allMatched=${S}, matches=${g.length}, target=${d}`);
  }
  return k("stack", () => `   ❌ No duplicate pattern found for ${i.id}`), null;
}
class xi extends Xs {
  // Zod schema for validation and serialization
  static schema = hn;
  static computedProperties = dn;
  /**
   * Get entity type
   */
  getType() {
    return N.Optimiser;
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
      successMetric: oi(i, "successMetric", t.successMetric || Z.successMetric),
      enableEvo: oi(i, "evo.disable", !1) ? !1 : t.enableEvo ?? !0,
      weighting: t.weighting || {
        efficiency: se.efficiency,
        guillotine: se.guillotine,
        roll: se.roll
      },
      stockType: t.saw?.stockType || null,
      // Don't skip validation so defaults are applied
      skipSchemaValidation: !1
    };
    super(n), !this.useInventory && this.stockList?.length && this.stockList.forEach((o) => {
      o?.saw?.stockType || (o.saw.stockType = this.saw.stockType);
    }), Ci({
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
    }), this.shapeList.push(...t), this.shapeList.sort(me.ID));
    const i = this.shapeList.filter((o) => !D(o));
    this.shapeAnalysis(i, this.stockList);
    const n = [];
    this.userGroups.forEach((o, s) => {
      for (let r = 0; r < o.q; r++) {
        const a = o.toGroup(s, r, this.shapeList);
        a && n.push(a);
      }
    }), Vs(n, this.stockList, this.saw), this.shapeList.push(...n), this.uniqueShapes = this.shapeList.filter((o) => !o?.duplicate), this.hasMinSpacing = typeof this?.saw?.options?.minSpacing == "number";
  }
  shapeAnalysis(t, i) {
    oo.call(this, t, this.shapeList), sr.call(this, t, i), ao.call(this, t, i);
  }
  recordStackToBestResult(t, i = []) {
    if (this.bestResult) {
      const n = {
        ...this.bestResult,
        stock: t,
        shapes: i.filter((o) => o.added && o.stock.id === t.id).map((o) => o.compress())
      };
      this.bestResult = cs(n);
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
    i.forEach((a) => a.stockLock.forEach((f) => o.add(f)));
    const s = t.filter((a) => o.has(a.parentId));
    let r = Ks(s);
    if (n && n?.options?.stockSelection === "smallest")
      return r.sort(me.AA), [r[0]];
    if (r.some((a) => a.material)) {
      const a = r[0].material;
      r = r.filter((f) => f.material === a);
    }
    if (r.some((a) => a.t)) {
      const a = Math.min(...r.map((f) => f.t));
      r = r.filter((f) => f.t === a);
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
      const a = Ie.getCalculationType(s);
      if (!a) throw new Error(`calculation type not found for stock ${s.id}`);
      if (!Ie.types.includes(a))
        throw new Error(`invalid calculation type: ${a} for stock ${s.id}`);
      return r = r.filter((f) => !f.added && f.stockLock.includes(s.parentId)), await Ie[a].call(
        this,
        {},
        s,
        r
      );
    }
    function n(s, r) {
      const a = s.filter((l) => !l.unusable), f = this.stockRefinement(
        a,
        r,
        this.saw
      );
      return f.sort(me.ID), k("allStock", `refined stock ${f.map((l) => l.id).join()}`), f;
    }
    await this.allStock(i, n), this.config.secondRun.enabled && await this.secondRun(), this.config.captureProfile && "profileEnd" in console && typeof console.profileEnd == "function" && console.profileEnd(t);
    const o = [];
    for (const s of this.stockList)
      if (s.segments)
        for (const r of s.segments) {
          const a = r.shapes?.filter((f) => J(f) && f.added) || [];
          o.push(...a);
        }
    for (const s of this.shapeList)
      if (!(!O(s) || !s.added)) {
        for (const r of o)
          if (r.shapes.some((a) => a.autoId === s.autoId)) {
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
    let n, o = null, s = null, r, a, f, l;
    for (let h = Le(this.stockList, !1); h.length > 0; h = Le(this.stockList, !1)) {
      let c = V(this.shapeList);
      if (!c?.length) break;
      for (const p of h)
        if (!V(c, p, "some")) {
          k("allStock", `stock ${p.id} is unusable`), p.unusable = !0;
          break;
        }
      const u = i.call(
        this,
        h,
        c
      );
      if (E([() => x(u.every((p) => Me(p.saw))).to.be.true]), !u.length) break;
      if (l) {
        const p = u.findIndex((y) => y?.parentId === l);
        p > -1 && u.unshift(u.splice(p, 1)[0]);
      }
      if (o = null, s = null, this.stockList.some((p) => p.used)) {
        k("stack", `🔄 Checking refined stock for stacks/duplicates: ${u.map((p) => p.id).join(", ")}`);
        for (const p of u) {
          k("stack", `current stock: ${p.id}`);
          const y = V(
            c,
            p
          );
          if (y?.length) {
            if (n && (o = ho.call(this, p, n, y), o)) {
              n = o, r = p;
              break;
            }
            if (this.config.findDuplicatePatterns && (s = po.call(this, p, y), s)) {
              n = p;
              break;
            }
          }
        }
      }
      if (!o && !s) {
        for (const m of u) {
          a = null;
          try {
            m.applyTrim();
          } catch ($) {
            k("info", `stock.applyTrim error ${$.message}`);
            continue;
          }
          const I = V(this.shapeList);
          if (!I?.length) return;
          if (a = V(I, m), !a?.length)
            if (m.allowExactFitShapes && (a = I.filter(($) => T.equalTo(
              $.l,
              m.l + m.trim.l1 + m.trim.l2
            ) && T.equalTo(
              $.w,
              m.w + m.trim.l1 + m.trim.l2
            ) || T.equalTo(
              $.w,
              m.w + m.trim.w1 + m.trim.w2
            ) && T.equalTo(
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
            a = lo(this.uniqueShapes, I, m, {
              similarityThreshold: this.config.filtering.similarityThreshold,
              selectionStrategy: "smallest",
              minTotal: this.config.filtering.minTotal
            });
            const b = a.length;
            k("allStock", `filtering reduced shapes by ${$ - b}, orginal: ${$}, filtered: ${b}`);
          }
          await t.call(this, m, a), this.resetShapes(a, {
            keepScores: !1,
            removeGroups: !1,
            keepGuillotineData: !1
          }), h.length > 1 && a.filter((b) => D(b)).forEach((b) => b.destroy());
        }
        if (u.forEach((m) => m.used = !1), !this.bestResult || !this.bestResult?.stock)
          break;
        f = Nt(this.bestResult, this.stockList), f.score = this.bestResult.score, f.used = !0, n = f;
        const { updatedShapes: p, groups: y } = Ge({
          bestResult: this.bestResult,
          shapeList: this.shapeList,
          relevantStock: u,
          stockList: this.stockList,
          resetShapes: this.resetShapes.bind(this)
        });
        if (y.length > 0 && this.groupList && y.forEach((m) => {
          this.groupList.find(($) => $.autoId === m.autoId) || this.groupList.push(m);
        }), at(p), this.bestResult?.offcut) {
          const m = {
            x: this.bestResult.totalLength + this.saw.bladeWidth,
            l: this.bestResult.offcut,
            w: this.bestResult.stock.w,
            stock: f
          };
          this.offcuts.push(m);
        }
        f?.saw?.stockType !== "roll" && this.summariseResults([this.bestResult], f);
      }
      c = V(this.shapeList);
      let d = [], g = [], S = 0;
      if (this.bestResult = null, this.bestPartialResult = null, o && (r?.autoAdd || lt(this.stockList, r)))
        d.push(r);
      else {
        g = we(c, !1);
        const p = g.filter((I) => ce(I.stockLock)), y = new Set(p.flatMap((I) => Array.isArray(I.stockLock) ? I.stockLock : [I.stockLock]));
        y.size || k("allStock", "no new stock requirements found");
        for (const I of y) {
          const $ = this.stockList.filter((b) => {
            if (I === b.parentId) {
              if (b.autoAdd)
                return !0;
              if (lt(this.stockList, b))
                return !0;
            }
            return !1;
          });
          if ($.length && !$.find((b) => !b.used)) {
            const b = $[0].clone($.length.toString());
            this.stockList.push(b), S++;
          }
        }
        g.filter((I) => !ce(I.stockLock) || !I.stockLock.length).length && !d.length && (d = Le(this.stockList).filter((I) => I.autoAdd || lt(this.stockList, I)));
      }
      if (d.length && d.forEach((p) => {
        const y = p.clone(Qs(this.stockList, p));
        this.stockList.push(y), o ? l = y.parentId : l = !1, S++;
      }), S ? (this.stockList.sort(me.AA), this?.job && this.job.updateProgress({
        socketId: this.socketId,
        type: "addStock",
        message: `added ${S} additional stock`,
        stockCount: this.stockList.reduce(
          (p, y) => y.used ? ++p : p,
          0
        ),
        shapeCount: this.shapeList.reduce(
          (p, y) => y.added ? ++p : p,
          0
        )
      })) : this?.job && this.job.updateProgress({
        socketId: this.socketId,
        type: "stockComplete",
        message: `completed stock ${f.parentId}`,
        stockCount: this.stockList.reduce((p, y) => y.used ? ++p : p, 0),
        shapeCount: this.shapeList.reduce((p, y) => y.added ? ++p : p, 0)
      }), this.useInventory && g.length && Le(this.stockList, !1).length === 0) {
        const p = await no(
          g,
          this.saw,
          this.stockList
        );
        if (p.stockList.length) {
          const y = wt(p.stockList);
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
    k("secondRun", "starting second run...");
    const t = this.stockList.filter((s) => s.used);
    if (t.filter((s) => s.stack?.number && !s.stack?.stock).forEach((s) => {
      t.filter((r) => r.stack?.stock && Y(r.stack.stock) && r.stack.stock.id === s.id).forEach((r) => {
        r.stack = null, r.rootSegment = s.rootSegment;
      }), s.stack = null;
    }), t[0].cutType !== "guillotine") return;
    E([
      () => x(t.length).equal(this.stockList.length),
      () => x(t.every((s) => s.score)).to.be.true,
      () => x(t.every((s) => s.shapes?.length)).to.be.true
    ]), t.sort((s, r) => s.score.efficiency - r.score.efficiency), k("secondRun", `sorted stock, ${t.map((s) => s.id)}`);
    const n = [], o = [];
    for (const s of t)
      s.score.efficiency >= this.config.secondRun.efficiencyCutoff && s.score.totalShapesPlaced > 1 ? n.push(s) : o.push(s);
    if (!(!n.length || !o.length)) {
      n.sort((s, r) => r.score.efficiency - s.score.efficiency), o.sort((s, r) => r.score.efficiency - s.score.efficiency), k("secondRun", `sorted efficient stock, ${n.map((s) => s.id)}`), k("secondRun", `sorted inefficient stock, ${o.map((s) => s.id)}`);
      for (const s of n) {
        if (!o.length) break;
        const r = [];
        for (let c = 0; c < s.shapes.length; c++) {
          const u = s.shapes[c];
          if (!u) throw new Error("shape not found in donorStock.shapes");
          if (D(u)) {
            u.placeMyShapes(s), u.shapes = u.shapes.map((d) => Object.assign({}, d)), s.shapes.splice(c, 1, ...u.shapes), c--;
            continue;
          }
          if (O(u))
            u.reset(), r.push(u);
          else {
            const d = this.shapeList.find((g) => g.id === u.id);
            if (!d) throw new Error(`shape ${u.id} not found in shapeList`);
            d.reset(), r.push(d), s.shapes[c] = d;
          }
        }
        const a = /* @__PURE__ */ new Set();
        let f, l, h = null;
        for (; r.length > 0 && (f = o.find((m) => m ? !a.has(m?.id) && s.shapes[0].stockLock.includes(m.parentId) : !1), !!f); ) {
          k("secondRun", `recipientStock - ${f.id}`), a.add(f.id);
          const c = Ie.getCalculationType(s);
          if (!c) throw new Error(`calculation type not found for stock ${s.id}`);
          const u = f.cutPreference === "l" ? "x" : "y";
          let d = [];
          if (l = f.rootSegment, k("secondRun", `second run, donor stock ${s.id}, recipient stock ${f.id}`), h) {
            h.shapes.forEach((I, $) => {
              if (!O(I)) {
                const b = this.shapeList.find((w) => w.id === I.id);
                h.shapes[$] = b;
              }
            }), f.shapes.forEach((I, $) => {
              if (!O(I)) {
                const b = this.shapeList.find((w) => w.id === I.id);
                f.shapes[$] = b;
              }
            });
            let m = !1;
            if (this.config.secondRun.stack && (m = ds.call(this, f, h, [...r, ...f.shapes], this.shapeList)), m) {
              f.stack = { stock: h }, h.stack ? h.stack?.number && h.incrementStack() : h.stack = { number: 2 }, f.shapes.forEach(($) => {
                const b = r.findIndex((w) => w.id === $.id);
                b > -1 && (r.splice(b, 1), s.shapes.splice(s.shapes.findIndex((w) => w.id === $.id), 1));
              });
              const I = o.findIndex(($) => $.id === f.id);
              I > -1 && o.splice(I, 1), k("secondRun", `stack found for ${f.id} in second run`), at(f.shapes);
              continue;
            }
          }
          if (!l) throw new Error("no root segment found in second run");
          if (ss(l, (m) => {
            if (m.offcut)
              return m[u] === 0 && (m.cutDirection = f.cutPreference, m.phase = 1), m.addToStock(f), d.push(m), !1;
          }), !d.length || (d = wt(d), !d.length)) continue;
          await Ie[c].call(
            this,
            { secondRun: !0 },
            f,
            r,
            d
          );
          const g = r.length;
          for (let m = r.length; m--; )
            r[m].added && r.splice(m, 1);
          const S = r.length, p = g - S;
          if (k("info", `second run, added ${p}`), h = f, g - S === 0) continue;
          const y = o.findIndex((m) => m.id === f.id);
          y > -1 && o.splice(y, 1), at(f.shapes);
        }
        if (!r.length || r.every((c) => c.added))
          s.used = !1, s.shapes = [], f.shapes.push(...s.shapes);
        else {
          k("info", `second run, not all shapes moved, reverting ${s.shapes.length} shapes`);
          for (const c of s.shapes) {
            const u = this.shapeList.find((d) => d.id === c.id);
            if (!u) throw new Error("original shape not found in second run");
            u.update(c), u.addToStock(s), E([
              () => x(u.added).to.be.true,
              () => x(u.stock?.id).to.equal(s.id),
              () => x(u.x).to.equal(c.x),
              () => x(u.y).to.equal(c.y)
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
        const a = /* @__PURE__ */ new Set();
        for (const l of t)
          if (D(l) && l.added && l.shapes?.length)
            for (const h of l.shapes)
              a.add(h.autoId);
        const f = t.length;
        for (let l = f; l--; ) {
          const h = t[l];
          if (D(h)) {
            if (h.shapes?.length)
              for (const c of h.shapes)
                c.reset({
                  keepScores: i,
                  keepGuillotineBatchData: s,
                  keepGroupData: !1,
                  keepFirstShapeSampleRotations: r
                });
            h.added || t.splice(l, 1);
          } else
            a.has(h.autoId) ? t.splice(l, 1) : h.reset({
              keepScores: i,
              keepGuillotineBatchData: s,
              keepGroupData: !1,
              keepFirstShapeSampleRotations: r
            });
        }
      } else {
        const a = t.length;
        for (let f = a; f--; ) {
          const l = t[f];
          if (D(l)) {
            if (l.shapes?.length)
              for (const h of l.shapes)
                h.reset({
                  keepScores: i,
                  keepGuillotineBatchData: s,
                  keepGroupData: !1,
                  keepFirstShapeSampleRotations: r
                });
            n ? t.splice(f, 1) : l.added = !1;
          } else
            l.reset({
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
function xo() {
  R("Issue", Oe), R("Line", Fe), R(N.Line, Fe), R("Point", mt), R(N.Point, mt), R("Rectangle", jt), R(N.Rectangle, jt), R("Container", ht), R(N.Container, ht), R("GuillotineState", Ue), R(N.GuillotineState, Ue), R("Placeable", ft), R(N.Placeable, ft), R("Group", gt), R(N.Group, gt), R("Offcut", Ve), R(N.Offcut, Ve), R("Segment", pe), R(N.Segment, pe), R("Shape", Yt), R(N.Shape, Yt), R("Stock", yt), R(N.Stock, yt), R("Banding", _t), R("banding", _t), R("Corner", Xt), R("corner", Xt), R("Cut", dt), R(N.Cut, dt), R("Extras", Vt), R(N.Extras, Vt), R("Finish", Kt), R("finish", Kt), R("HingeHole", Qt), R("hingeHole", Qt), R("Hole", Jt), R("hole", Jt), R("ImageUpload", ai), R("imageUpload", ai), R("InputSaw", Zt), R(N.InputSaw, Zt), R("InputShape", ei), R(N.InputShape, ei), R("InputStock", ti), R(N.InputStock, ti), R("InputUserGroup", ii), R(N.Group, ii), R("Machining", si), R(N.Machining, si), R("Optimiser", xi), R(N.Optimiser, xi), R("Planing", ni), R("planing", ni), R("PointCollection", St), R(N.PointCollection, St), R("Saw", Ye), R(N.Saw, Ye);
}
export {
  xo as initializeStaticRegistry
};

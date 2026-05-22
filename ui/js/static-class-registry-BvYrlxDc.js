import { B as Ds, z as $e, C as wt, D as Ai, G as Gs, H as Os, J as Ls, K as Bs, N as Xs, O as Ws, Q as Ys, R as Fs, T as Ns, U as qs, V as zs, W as Fe, X as Hs, Y as Zs, x as Js, Z as Vs, _ as Ve, E as U, $ as js, a0 as ee, a1 as je, a2 as ve, a3 as nt, m as E, a4 as Mi, a5 as V, a6 as Z, a7 as F, a8 as R, a9 as st, aa as Y, ab as Ct, ac as Ft, i as X, ad as Dt, ae as Us, af as Nt, ag as Be, ah as Gt, ai as Ne, aj as pt, ak as Di, al as gt, am as Te, k as Et, an as $t, ao as qe, ap as ft, aq as Qt, ar as se, as as Ue, at as _s, au as _e, av as rt, aw as Gi, ax as Ks, ay as Qs, az as Re, aA as Pt, aB as qt, aC as Vt, aD as to, aE as Oi, aF as Li, aG as Bi, aH as Xi, L as le, aI as eo, aJ as Wi, aK as ke, aL as no, aM as Ke, aN as io, h as ht, aO as de, aP as Yi, aQ as so, aR as Qe, aS as oo, aT as ro, aU as ao, aV as lo, P as tn, aW as co, e as ye, aX as Ee, aY as uo, aZ as en, a_ as nn, a$ as fo, S as ho, b0 as te, b1 as po, b2 as go, b3 as Se, b4 as ze, b5 as mo, g as yo, b as So, b6 as xo, b7 as bo, b8 as wo, b9 as Io, ba as W, bb as Xn, bc as Wn, bd as Yn, be as Fn, bf as Nn, bg as qn, bh as zn, bi as Hn, bj as Zn, bk as Jn, bl as Vn, bm as jn, p as Un, I as _n, bn as Kn, bo as Qn } from "./result.zod-B0Qqh9wj.js";
import { F as j, G as et, H as ce, o as ut, I as tt, i as H, J as it, K as at, h as Jt, L as Co } from "./vendor-CN6j6kBQ.js";
import { a as sn, m as $o, s as He } from "./vendor-lodash-ICw93SXE.js";
import { d as bn, g as ti, a as Po, P as on, b as vo, c as To } from "./coordinates-8K8AWIUO.js";
import { i as At } from "./environment-BeBZzWz6.js";
import "./vendor-i18next-DIDhOEvY.js";
import { m as Fi } from "./vendor-mongoose-DfSMg04I.js";
const Ni = ["root", "firstShape", "near", "far", ""], Ro = Ds.extend({
  // Cutting information
  cuts: wt("Cut").default([]).behavior({ compress: "exclude" }),
  // Stock reference - serialize as reference only (default zRef behavior)
  stock: $e("Stock", { nullable: !0, description: "Stock reference for this segment" }),
  phase: et().int().min(0).nullable().default(null),
  cutDirection: ce(Ai).nullable().default(null).describe("The primary cut direction for this segment"),
  // Segment properties
  merged: j().default(!1),
  firstShape: $e("Shape"),
  children: wt("Segment", {
    description: "Child segments"
  }).behavior({
    serialize: "full",
    // Serialize the full segment objects
    compress: "full",
    // Even in compressed mode, keep full objects
    clone: "copy"
  }),
  parent: $e("Segment", { nullable: !0 }).behavior({
    serialize: "reference",
    // Parent can stay as reference
    compress: "exclude"
    // Exclude parent in compressed mode to avoid circular refs
  }),
  type: ce(Ni).nullable().default(null),
  placementOrder: et().int().min(0).optional(),
  // Beam saw specific
  hasBeamTrim: j().default(!1),
  hasHeadCut: j().default(!1),
  isInitial: j().default(!1),
  // Trim offcut flag - marks segments that represent trim areas (W1, W2, L1 for beam)
  isTrimOffcut: j().default(!1),
  // Visualization flags
  completed: j().optional(),
  rowSegment: j().optional()
});
ut({
  x: et().optional(),
  y: et().optional(),
  l: et().optional(),
  w: et().optional(),
  type: ce(Ni),
  parent: tt(),
  // Segment instance
  stock: tt(),
  // Stock instance
  offcut: j().optional(),
  merged: j().optional(),
  cutDirection: ce(Ai).nullable().optional()
});
const ko = {
  ...Gs,
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
}, Eo = ut({
  id: H().optional(),
  url: H().optional(),
  size: et().optional(),
  mimeType: H().optional(),
  name: H().optional(),
  width: et().optional(),
  height: et().optional()
}), Ao = Os.extend({
  // ImageUpload specific properties
  images: it(Eo).default([]).describe("Array of uploaded images"),
  maxImages: et().default(5).describe("Maximum number of images allowed"),
  allowedTypes: it(H()).default(["image/jpeg", "image/png", "image/gif"]).describe("Allowed MIME types"),
  maxSizeBytes: et().default(5242880).describe("Maximum file size in bytes (default 5MB)"),
  description: H().optional().describe("Description of uploaded images"),
  tags: it(H()).default([]).describe("Tags associated with images")
  // Note: faces and sides inherited from Extra base
}), Mo = {
  // Inherit computed properties from Extra base class
  ...Ls,
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
}, Ze = ut({
  x: et(),
  y: et()
}), rn = Bs.extend({
  // ========== Polygon Outline ==========
  // Closed polygon vertices, origin-normalized (bounding box origin at 0,0)
  // First vertex should equal last vertex (closed polygon)
  outline: it(Ze).default([]).describe("Closed polygon outline vertices (origin-normalized)"),
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
  holes: it(it(Ze)).default([]).describe("Inner contour holes for rendering (CW wound)"),
  // Simplified outline used for NFP computation and placement (hull or DP-simplified).
  // When set, placement math (rotation pivot + normalisation) uses THIS polygon, while
  // rendering + cutting continue to use `outline` for full fidelity. The two representations
  // must agree on the transform reference frame, so client rendering also consults this.
  // Absent when the full outline was used directly (e.g. ≤24 vertices or hull wasn't smaller).
  placementOutline: it(Ze).nullable().optional().describe("Simplified polygon used for NFP/placement; transform reference for render")
}), qi = {
  // Include all Shape computed properties
  ...Xs,
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
  computedProperties: Object.keys(qi)
}));
class Do {
  getStore() {
  }
  run(e, n) {
    return n();
  }
  enterWith(e) {
  }
  disable() {
  }
}
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
const Ae = at("logs"), zi = at("cuts"), wn = at("groups"), In = at("guillotine"), Hi = at("results"), Zi = at("scoring"), Ji = at("firstShapes"), Vi = at("calculations"), ji = at("subset"), Ui = at("secondRun"), _i = at("stack"), Cn = at("errors"), Ki = at("allStock"), $n = at("reset"), Pn = at("swarm");
Cn.color = 1;
wn.color = 14;
In.color = 159;
$n.color = 11;
Pn.color = 5;
function Go(t = "info", e, n) {
  const i = e.map((o) => {
    const a = { ...o };
    for (const l in a)
      typeof a[l] == "string" && a[l].length > 30 && (a[l] = a[l].slice(0, 50) + "...");
    return a;
  }), r = console.table;
  let s = "";
  switch (console.table = (o, a) => {
    const l = console.log;
    console.log = (c) => {
      s += c + `
`;
    }, r(o, a), console.log = l;
  }, console.table(i, n), t) {
    case "info":
      Ae(s);
      break;
    case "guillotine":
      In(s);
      break;
    case "results":
      Hi(s);
      break;
    case "secondRun":
      Ui(s);
      break;
    case "cuts":
      zi(s);
      break;
    case "scoring":
      Zi(s);
      break;
    case "calculations":
      Vi(s);
      break;
    case "stack":
      _i(s);
      break;
    case "subset":
      ji(s);
      break;
    case "errors":
      Cn(s);
      break;
    case "allStock":
      Ki(s);
      break;
    case "firstShapes":
      Ji(s);
      break;
    case "groups":
      wn(s);
      break;
    case "reset":
      $n(s);
      break;
    case "swarm":
      Pn(s);
      break;
    default:
      Ae(s);
  }
  console.table = r;
}
const Oo = "\x1B[31m", Lo = "\x1B[0m";
let Qi = !0;
function Bo(t) {
  Qi = t;
}
const Xo = {
  info: Ae,
  guillotine: In,
  results: Hi,
  secondRun: Ui,
  cuts: zi,
  scoring: Zi,
  calculations: Vi,
  stack: _i,
  subset: ji,
  errors: Cn,
  allStock: Ki,
  firstShapes: Ji,
  groups: wn,
  reset: $n,
  swarm: Pn
}, A = (t = "info", e, n = null, i = null, r = !1) => {
  if (!Qi && !r || !r) return;
  const s = Xo[t] || Ae;
  if (!s.enabled) return;
  const o = typeof e == "function" ? e() : e;
  s(t === "errors" ? `${Oo}${o}${Lo}` : o), n && s(n), i && Go(t, i);
};
Ws(A);
const Wo = qs;
let ts;
ts = Wo;
const Yo = new Do();
let es = ts;
function ne() {
  return Yo.getStore() ?? es;
}
const lt = new Proxy({}, {
  get(t, e, n) {
    return ne()?.[e];
  },
  has(t, e) {
    return e in ne();
  },
  ownKeys() {
    return Object.keys(ne());
  },
  getOwnPropertyDescriptor(t, e) {
    const n = ne();
    if (e in n)
      return { value: n[e], writable: !0, enumerable: !0, configurable: !0 };
  }
});
Bo(es.enableLogging !== !1);
function Fo() {
  if (lt.guillotine.secondPass && !lt.guillotine.strips.rearrange)
    throw new Error("config.guillotine.secondPass requires config.guillotine.strips.rearrange to be enabled");
  if (lt.captureProfile && lt.runTests)
    throw new Error("config.captureProfile and config.runTests should not be both enabled");
  for (const [t, e] of Object.entries(Ys)) {
    const n = sn(lt, t);
    if (typeof n == "number") {
      if (e.min !== void 0 && n < e.min) throw new Error(`config.${t}=${n} below min ${e.min}`);
      if (e.max !== void 0 && n > e.max) throw new Error(`config.${t}=${n} above max ${e.max}`);
      if (e.integer && !Number.isInteger(n)) throw new Error(`config.${t}=${n} must be an integer`);
    }
  }
  for (const [t, e] of Object.entries(Fs)) {
    const n = sn(lt, t);
    if (typeof n == "string" && !e.includes(n))
      throw new Error(`config.${t}="${n}" not in [${e.join(", ")}]`);
  }
}
Fo();
const ei = /* @__PURE__ */ new Map();
function No(t, e) {
  if (e.length === 0) return;
  const n = t || "unknown", i = Date.now(), r = ei.get(n) ?? 0;
  if (i - r < 6e4) return;
  ei.set(n, i);
  const s = e.map((o) => `${o.path} (${o.kind}: ${o.detail})`).join(", ");
  console.warn(`[CONFIG] Reverting ${e.length} broken override(s) for ${n} → defaults: ${s}`);
}
function qo(t, e = null) {
  if (!t) return lt;
  const n = zo(t, e);
  if (!n) return lt;
  const { sanitised: i, dropped: r } = Ns(n, lt);
  No(t?.username, r);
  const s = $o({}, lt, i);
  return Object.keys(i).length > 0 && console.log(`[CONFIG] custom config applied for ${t?.username}`), s;
}
function zo(t, e = null) {
  if (!t || !t?.config) return null;
  switch (t.id) {
    // Glassense Kolu — for jobs ≤ 80 shapes, three perf-heavy knobs are reset
    // to the system defaults (their stored overrides hurt small jobs).
    // Why this lives here, not in defaultConfig: it depends on per-job shape
    // count, which only the runtime knows.
    case "662a2f8ad28745b63665e68a": {
      if (!e) return t.config;
      const n = "shapeList" in e ? e.shapeList : e.inputShapes;
      if ((n ? n.reduce((s, o) => s + (o.q || 0), 0) : 0) > 80) return t.config;
      const r = JSON.parse(JSON.stringify(t.config));
      return He(r, "groups.guillotine.strips", lt.groups.guillotine.strips), He(r, "sample.guillotine", lt.sample.guillotine), He(r, "guillotine.stripShapes.iterations", lt.guillotine.stripShapes.iterations), r;
    }
  }
  return t.config;
}
function ni(t, e, n) {
  return sn(t, e, n);
}
const Ho = ut({
  // Context - using z.any() for complex external types
  job: tt().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: H().nullable().default(null).describe("Socket.io connection ID"),
  user: tt().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: tt().describe("Configuration object"),
  // Type: Config
  api: j().nullable().default(null).describe("API mode flag"),
  app: j().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: $e("Saw").describe("Saw configuration"),
  stockList: wt("Stock").default([]).describe("List of stock materials"),
  shapeList: Fe(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: wt("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: wt("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: wt("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: Fe(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: Fe(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: zs,
  // Results storage
  cutList: wt("Cut").default([]).describe("List of cuts to make"),
  segmentList: wt("Segment").default([]).describe("List of segments"),
  offcuts: wt("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: wt("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: j().default(!1).describe("Use inventory system"),
  successMetric: H().default(lt.successMetric).describe("Metric for optimization success"),
  enableEvo: j().default(!0).describe("Enable evolutionary algorithm"),
  weighting: Jt(H(), tt()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: tt().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: tt().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: ut({
    placement: et().default(0),
    group: et().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: j().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: j().default(!1).describe("Run guillotine second pass"),
  runningEvo: j().default(!1).describe("Currently running evolution"),
  evolutionVisData: it(Jt(H(), Co())).default([]).describe("Evolution visualization data"),
  final: j().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: j().default(!1).describe("Has minimum spacing requirement")
}), Zo = {}, Jo = ce(["decimal", "fraction"]);
ut({
  job: tt().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Extend with autoId/__entityType so they survive Zod validation for worker reconstruction
  inputSaw: Hs.extend({ autoId: H().optional(), __entityType: H().optional() }),
  inputShapes: it(Vs.extend({ autoId: H().optional(), __entityType: H().optional() })),
  inputStock: it(Js.extend({ autoId: H().optional(), __entityType: H().optional() })),
  inputUserGroups: it(Zs.extend({ autoId: H().optional(), __entityType: H().optional() })).optional(),
  // Number format for conversion
  numberFormat: Jo.optional(),
  // Algorithm configuration
  enableEvo: j().default(!0),
  weighting: tt().optional(),
  successMetric: H().optional(),
  useInventory: j().default(!1),
  // Context
  socketId: H().optional(),
  user: tt().optional(),
  // IUser type
  // Application flags
  widget: j().optional(),
  api: j().optional(),
  app: j().optional(),
  domain: H().optional(),
  // Extras options (centralized configuration)
  extrasOptions: ut({
    banding: ut({
      options: ut({
        sides: Jt(H(), it(H())).optional()
      }).optional()
    }).optional(),
    finish: ut({
      options: ut({
        faces: Jt(H(), it(H())).optional()
      }).optional()
    }).optional(),
    planing: ut({
      options: ut({
        sides: Jt(H(), it(H())).optional(),
        faces: Jt(H(), it(H())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // API specific
  config: tt().optional(),
  v: et().optional(),
  // API version
  webhook: H().optional(),
  //source
  sourceVersion: H().nullish(),
  source: H().optional()
});
ut({
  job: tt().optional(),
  // Type: Job from BullMQ
  saw: tt(),
  // Runtime Saw instance
  shapeList: it(tt()),
  // Runtime Shape instances
  stockList: it(tt()),
  // Runtime Stock instances
  userGroups: it(tt()).optional(),
  // Runtime Group instances
  enableEvo: j(),
  weighting: tt().optional(),
  successMetric: H().optional(),
  useInventory: j(),
  socketId: H().optional(),
  user: tt().optional(),
  widget: j().optional(),
  api: j().optional(),
  app: j().optional(),
  domain: H().optional(),
  config: tt().optional(),
  v: et().optional(),
  webhook: H().optional()
});
class vt extends Ve {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Ro;
  static computedProperties = ko;
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
    return U.Segment;
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
        At() && console.log(`[PARENT CHANGE] Moving ${e.autoId} from parent ${n.autoId} to ${this.autoId}`);
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
class ii extends js {
  // Properties are dynamically created from schema via SchemaClass
  // Static schema reference for automatic updates
  static schema = Ao;
  static computedProperties = Mo;
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
    if (this.images && this.images.length > this.maxImages && n.push(new ee({
      item: e,
      message: `Too many images: ${this.images.length} exceeds maximum of ${this.maxImages}`,
      type: "error"
    })), this.images)
      for (let i = 0; i < this.images.length; i++) {
        const r = this.images[i];
        if (r.url || n.push(new ee({
          message: `Image ${i + 1} is missing URL`,
          type: "error"
        })), r.mimeType && !this.allowedTypes.includes(r.mimeType) && n.push(new ee({
          message: `Image ${i + 1} has unsupported type: ${r.mimeType}`,
          type: "warning"
        })), r.size && r.size > this.maxSizeBytes) {
          const s = (r.size / 1048576).toFixed(2), o = (this.maxSizeBytes / 1048576).toFixed(2);
          n.push(new ee({
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
class Me extends je {
  static schema = rn;
  static computedProperties = qi;
  static defaults = rn.parse({});
  constructor(e = {}) {
    super(e);
  }
  getType() {
    return U.NestingShape;
  }
  /**
   * Returns the polygon used as the rotation/normalisation REFERENCE during placement.
   * When `placementOutline` is set (DP-simplified or convex hull), the placement algorithm
   * rotated around its centroid and normalised against its bbox — rendering must do the same
   * so final positions agree. When absent, the outline itself is the reference.
   */
  getTransformReference() {
    return this.placementOutline && this.placementOutline.length >= 3 ? this.placementOutline : this.outline;
  }
  /** Arithmetic centroid of a polygon (matches geometry.ts rotatePolygon pivot). */
  centroidOf(e) {
    let n = 0, i = 0;
    for (const r of e)
      n += r.x, i += r.y;
    return n /= e.length, i /= e.length, { cx: n, cy: i };
  }
  /** Min x/y of a polygon — used as normalisation offset after rotation. */
  minOf(e) {
    let n = 1 / 0, i = 1 / 0;
    for (const r of e)
      r.x < n && (n = r.x), r.y < i && (i = r.y);
    return { minX: n, minY: i };
  }
  /** Rotate a polygon around an arbitrary pivot. */
  rotateAround(e, n, i) {
    if (i === 0) return e;
    const r = Math.cos(i), s = Math.sin(i);
    return e.map((o) => {
      const a = o.x - n.cx, l = o.y - n.cy;
      return {
        x: r * a - s * l + n.cx,
        y: s * a + r * l + n.cy
      };
    });
  }
  /**
   * Get the rotated outline vertices, applying nestingRotation around the arithmetic centroid
   * of the placement reference (so rendering agrees with placement when a placementOutline is used).
   */
  getRotatedOutline() {
    if (!this.outline || this.outline.length < 3) return [];
    if (this.nestingRotation === 0) return this.outline;
    const e = this.getTransformReference(), n = this.centroidOf(e);
    return this.rotateAround(this.outline, n, this.nestingRotation);
  }
  /**
   * Get the rotated + normalized outline (bounding box starts at 0,0)
   * Matches the placement algorithm: rotate around reference centroid, normalise against
   * rotated-reference bbox (not against the outline's own rotated bbox).
   */
  getNormalizedRotatedOutline() {
    if (!this.outline || this.outline.length < 3) return [];
    const e = this.getTransformReference(), n = this.centroidOf(e), i = this.rotateAround(this.outline, n, this.nestingRotation), r = e === this.outline ? i : this.rotateAround(e, n, this.nestingRotation), { minX: s, minY: o } = this.minOf(r);
    return i.map((a) => ({
      x: a.x - s,
      y: a.y - o
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
   * rotate around the placement reference's centroid, normalise using the reference's
   * rotated bbox, translate by (x, y).
   */
  positionContour(e) {
    if (!this.outline || this.outline.length < 3) return e;
    if (!this.nestingRotation || this.nestingRotation === 0)
      return e.map((l) => ({
        x: l.x + (this.x || 0),
        y: l.y + (this.y || 0)
      }));
    const n = this.getTransformReference(), i = this.centroidOf(n), r = this.rotateAround(e, i, this.nestingRotation), s = this.rotateAround(n, i, this.nestingRotation), { minX: o, minY: a } = this.minOf(s);
    return r.map((l) => ({
      x: l.x - o + (this.x || 0),
      y: l.y - a + (this.y || 0)
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
      const a = n[o], l = n[(o + 1) % n.length];
      i.push(new ve({
        stock: nt(this.stock) ? this.stock : e,
        x1: a.x,
        y1: a.y,
        x2: l.x,
        y2: l.y
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
  return !!(E.greaterThanOrEqualTo(t[n], e[n]) && E.lessThanOrEqualTo(t[n] + t[i], e[n] + e[i]));
}
function jt(t, e, n = "x") {
  if (!e) return !1;
  const i = Mi(n);
  return !!(E.greaterThanOrEqualTo(t[n], e[n]) && E.lessThan(t[n], e[n] + e[i]));
}
function ns(t) {
  return {
    cutAxis: t === "l" ? "x" : "y",
    positionAxis: t === "l" ? "y" : "x",
    cutDimension: t,
    positionDimension: V(t)
  };
}
function Vo(t, e, n) {
  return t?.length ? t.filter((i) => i.added && E.equalTo(i[e], n)) : [];
}
function jo(t, e) {
  return t?.guillotineState?.myPhase === e;
}
function Uo(t, e) {
  t?.guillotineState && (t.guillotineState.myStripDirection = e);
}
function _o(t, e) {
  if (!t) return;
  let n = t;
  for (; n.parent; )
    n = n.parent, e();
}
function Ko(t, e) {
  return `${e}${t}`;
}
function Qo({
  segment: t,
  stock: e,
  cutDirection: n,
  cutAxis: i,
  positionAxis: r,
  positionDimension: s,
  position: o,
  allStockShapes: a,
  halfBladeWidth: l
}) {
  if (e.cutType !== "beam" || !e.hasTrim || s === "w" && t.phase > 1)
    return;
  const c = Ko(o, n);
  if (!e.trim?.[c]) return;
  const u = e.trimmed ? -l : e.trim[c] - l, h = e.trimmed ? -l : e.trim[c] - l;
  if (F([() => {
    R(u, `trim cut ${o} in the wrong position`).to.equal(h);
  }]), u !== h)
    return;
  const { cut: f } = Xe({
    parentSegment: t,
    stock: e,
    cutDirection: n,
    cutAxis: i,
    positionAxis: r,
    position: u,
    allStockShapes: a,
    skipCollisionCheck: !0
  });
  f && (f.isTrim = !0, f.guillotineState.parentSegmentID = t.autoId, f.ptxData || (f.ptxData = {}), f.ptxData.function = t.phase, f.ptxData.isDummy = !1, f.dimension === "l" && (f.beamTrimL1 = !0), f.dimension === "w" && (f.beamTrimW1 = !0), f.dimension === "w" ? new vt({
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
  }) : f.dimension === "l" && new vt({
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
function is(t, e, n = null, i) {
  let r = null;
  const s = [];
  if (!t || !t.length) return {
    allShapesCut: !0,
    uncutShape: null,
    uncutShapeAutoIds: []
  };
  const o = t.every((a) => {
    if (!a.added || !a.stock || Z(a) && a.group.inGroup && !i?.ignoreGroupMembership) return !0;
    const l = a.stock.halfBladeWidth;
    let c = null;
    n ? c = n.getSides() : c = a.stock.getSides();
    const u = Object.values(a.getSides()).every((h) => {
      const f = () => {
        switch (h.type) {
          case "top": {
            const m = a.y + a.w + l;
            return e.some((g) => g.dimension === "l" && E.equalTo(g.y1, m) && E.lessThanOrEqualTo(g.x1, a.x) && E.greaterThanOrEqualTo(g.x2, a.x + a.l));
          }
          case "bottom": {
            const m = a.y - l;
            return e.some((g) => g.dimension === "l" && E.equalTo(g.y1, m) && E.lessThanOrEqualTo(g.x1, a.x) && E.greaterThanOrEqualTo(g.x2, a.x + a.l));
          }
          case "left": {
            const m = a.x - l;
            return e.some((g) => g.dimension === "w" && E.equalTo(g.x1, m) && E.lessThanOrEqualTo(g.y1, a.y) && E.greaterThanOrEqualTo(g.y2, a.y + a.w));
          }
          case "right": {
            const m = a.x + a.l + l;
            return e.some((g) => g.dimension === "w" && E.equalTo(g.x1, m) && E.lessThanOrEqualTo(g.y1, a.y) && E.greaterThanOrEqualTo(g.y2, a.y + a.w));
          }
        }
      }, d = () => c.some((m) => {
        switch (h.type) {
          case "top":
            return m.dimension === "l" && E.equalTo(m.y1, a.y + a.w) && E.lessThanOrEqualTo(m.x1, a.x) && E.greaterThanOrEqualTo(m.x2, a.x + a.l);
          case "bottom":
            return m.dimension === "l" && E.equalTo(m.y1, a.y) && E.lessThanOrEqualTo(m.x1, a.x) && E.greaterThanOrEqualTo(m.x2, a.x + a.l);
          case "left":
            return m.dimension === "w" && E.equalTo(m.x1, a.x) && E.lessThanOrEqualTo(m.y1, a.y) && E.greaterThanOrEqualTo(m.y2, a.y + a.w);
          case "right":
            return m.dimension === "w" && E.equalTo(m.x1, a.x + a.l) && E.lessThanOrEqualTo(m.y1, a.y) && E.greaterThanOrEqualTo(m.y2, a.y + a.w);
        }
      }), p = f(), w = d();
      return p || w;
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
function ss() {
  _.previousSegments = [], _.ptxCuts = 0, _.segments = 0, _.makeCutsIteration = -1;
}
function vn({
  container: t,
  shapes: e = [],
  forceNoHeadCut: n = !1,
  final: i = !1,
  saw: r = null
}) {
  _.ptxCuts = 0;
  const s = t.getStock;
  r && (s.saw = r);
  const o = st(t);
  let a;
  const l = o ? t.cutDirection : t.cutPreference;
  if (o && t.type === "root")
    a = t, a.cuts = [], a.children = [], a.shapes = e, Y("cuts", `REUSING ROOT [${a.autoId ? a.id : "unknown"}] l=${a.l}, w=${a.w}, DIR ${l?.toUpperCase()}`);
  else {
    const d = _.segments, p = d.toString();
    _.segments++, a = new vt({
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
      cutDirection: l,
      isInitial: o ? t.isInitial : !0
    });
  }
  _.previousSegments = [];
  const c = pe.call(
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
    [u, h, f] = Ir(a, i, c.headCutCount);
  } catch (d) {
    return Y("errors", `issue analysing segments ${d.message}`), {
      rootSegment: null,
      cuts: [],
      offcuts: []
    };
  }
  if (o && f.length > 0) {
    const d = f.map((p) => `${p.id}@(${p.x},${p.y})`).join(", ");
    Y("cuts", `[calculateStripCuts] Returning ${f.length} offcuts for container segment at (${t.x},${t.y}): ${d}`);
  }
  return {
    rootSegment: u,
    cuts: h,
    offcuts: f
  };
}
function tr(t, e = !1) {
  let n = ns(t);
  return e && (n = as(n)), n;
}
function er(t, e, n, i, r, s, o) {
  if (this?.config && !this?.config?.guillotine?.extendSegments || e.cutType !== "guillotine" || e?.saw?.guillotineOptions?.strategy === "time") return !1;
  const a = t?.merged, l = t?.parent?.merged;
  if (a && l) return !1;
  const c = jo(n, 1), u = t?.parent ? t.parent?.hasHeadCut : !1;
  let h = !c || u;
  if (!h || (e?.saw?.stockType === "roll" && c && (h = !1), e?.saw?.stockType === "roll" && s === "w")) return !1;
  let f = o.length > 1 && i < o.length - 1;
  u && (f = !0);
  const d = E.lessThan(
    n[s],
    t[s]
  );
  return f && d && !r;
}
function Tn(t) {
  const e = V(t.cutPreference);
  return Nt(e);
}
function nr(t) {
  return V(t.cutPreference);
}
function ir(t) {
  const e = Tn(t);
  let n = 0;
  return t?.getStock?.hasTrim && t?.getStock?.trimmed === !1 && (n = t?.getStock?.trim?.[e === "x" ? "x1" : "y1"] ?? 0), n;
}
function os(t) {
  const e = Tn(t), n = ir(t);
  return t[e] === n;
}
function rs(t, e, n) {
  if (!this?.config?.guillotine?.allowHeadCuts || !t?.guillotineOptions?.headCuts || !os(n)) return !1;
  const i = nr(n), r = Tn(n);
  if (e[r] > n[r]) return !1;
  let s = !1;
  const o = 0.75;
  if (Z(e) && e.group.addedAsGroup) {
    const a = n.shapes.filter((u) => u.group?.addedAsGroup === e.group.addedAsGroup), l = Nt(i), c = Ft(a, l);
    c[i] + c[l] >= n[i] * o && (s = !0);
  } else e[i] >= n[i] * o && (s = !0);
  return s;
}
class Rn {
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
    const e = tr(this.segment.cutDirection, this.isHeadCut);
    return F([() => R(e.cutDimension).to.equal(this.isHeadCut ? V(this.segment.cutDirection) : this.segment.cutDirection)]), e;
  }
  //segment cut direction doesn't change, but this computed property will
  get cutDirection() {
    return this.isHeadCut ? V(this.segment.cutDirection) : this.segment.cutDirection;
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
    return new Rn({
      ...this,
      ...e
    });
  }
  // get shapes that are within boundaries of current strip
  getShapesInCurrentStrip() {
    return this.currentStripParent ? this.segment.shapes.filter((e) => jt(e, this.currentStripParent, this.cutInfo.positionAxis)) : [];
  }
}
function as(t) {
  return {
    positionAxis: Dt(t.positionAxis),
    positionDimension: V(t.positionDimension),
    cutAxis: Dt(t.cutAxis),
    cutDimension: V(t.cutDimension)
  };
}
function si(t) {
  return t.type === "root" && t.isInitial;
}
function pe({
  segment: t,
  stock: e,
  allStockShapes: n = [],
  forceNoHeadCut: i = !1,
  previousCutPosition: r = null,
  previousEdgeOfSegment: s = !1,
  final: o = !1,
  headCutCount: a = 0,
  attemptedDirections: l = /* @__PURE__ */ new Set()
}) {
  Y("cuts", `[makeCuts] START: segment ${t.l}x${t.w} phase=${t.phase} type=${t.type} shapes=${t.shapes?.length || 0} final=${o}`);
  let c = new Rn({
    segment: t,
    stock: e,
    allStockShapes: n,
    forceNoHeadCut: i,
    previousCutPosition: r,
    previousEdgeOfSegment: s,
    final: o,
    headCutCount: a,
    attemptedDirections: l
  });
  if (!or.call(this, c)) {
    Y("cuts", "[makeCuts] EARLY RETURN: invalid input");
    return;
  }
  if (ar.call(this, c)) {
    Y("cuts", "[makeCuts] EARLY RETURN: duplicate segment");
    return;
  }
  rr(c), c = lr.call(this, c), c = ur.call(this, c), Y("cuts", `[makeCuts] Found ${c.stripParentShapes.length} strip parent shapes`), c.stripParentShapes.length && (c.segment.offcut = !1);
  const u = c.stripParentShapes?.length || 0;
  for (let g = 0; g < u; g++) {
    if (c = c.with({ currentStripIndex: g }), Y("cuts", `[makeCuts] Processing shape ${g}: ${c.currentStripParent.l}x${c.currentStripParent.w}`), c.currentStripParent.l === e.l && c.currentStripParent.w === e.w) {
      Y("cuts", "[makeCuts] Shape matches stock size, marking as produced"), c = ri.call(this, c);
      break;
    }
    if (c = br.call(this, c), c.final && c.segment?.parent?.hasHeadCut && c.segment.phase === 1 && t.type === "far" && c.isHeadCut === !1) {
      const y = as(c.cutInfo), { cutAxis: I, cutDimension: b, positionDimension: C, positionAxis: $ } = y;
      Xe({
        parentSegment: t,
        stock: e,
        cutDirection: b,
        cutAxis: I,
        positionAxis: $,
        position: t[C] + t[$],
        headCut: !0,
        ptxDummyCut: !0
      });
    }
    if (c = fr.call(this, c), c.final && e.cutType === "beam" && g === 0 && (t.type !== "far" || ls(c)) && (c = hr.call(this, c)), c = dr.call(this, c), g = c.currentStripIndex, sr.call(this, c) === !0) {
      Y("cuts", "[makeCuts] Breaking due to edge of segment");
      break;
    }
    if (c = Sr.call(this, c), c.cut)
      c.isHeadCut && (c.segment.hasHeadCut = !0);
    else {
      if (c.isHeadCut) {
        const y = V(c.cutDirection);
        c.attemptedDirections.has(y) ? Y("cuts", `[makeCuts] Skipping reattempt - direction ${y} already attempted`) : (c = c.with({ forceNoHeadCut: !0 }), oi.call(this, c, y));
        break;
      }
      if (c.rejectedByCollision && e.cutType === "beam" && t.phase > 0) {
        const { cutAxis: y } = c.cutInfo, I = c.currentStripParent[y];
        if (c.collisionShapes?.some((C) => !E.equalTo(C[y], I)))
          continue;
      }
      c = ai.call(this, c);
    }
    if (c = c.with({
      cutSuccess: !!c.cut,
      headCutCount: c.isHeadCut && c.cut ? c.headCutCount + 1 : c.headCutCount
    }), c.cut) {
      if (c.final && (c = ri.call(this, c), e.cutType === "beam" && pr.call(this, c), c.cut)) {
        let y = t.parent?.autoId;
        (y === "root" || !y) && (y = "R"), y = `[${y}]`;
        let I = t.autoId ? t.id : "unknown";
        I = `[${I}]`, Y("cuts", `${y}->${I} P${t.phase} {${c.currentStripParent.autoId}} ${c.isHeadCut ? "HEAD" : "NORM"} ${t?.type?.toUpperCase()} ${Ct(t.l, 4)}x${Ct(t.w, 4)} ${Ct(c.cutPosition, 4)} ${Ct(c?.cut?.x1, 4)}|${Ct(c?.cut?.x2, 4)}|${Ct(c?.cut?.y1, 4)}|${Ct(c?.cut?.y2, 4)}`), Y("cuts", `DIRECTIONS FOR ${I}: STATE ${c?.cutDirection?.toUpperCase()} CUT ${c.cut?.dimension?.toUpperCase() ?? "N/A"} SEGMENT ${t?.cutDirection?.toUpperCase()}`);
      }
      if (c = ai.call(this, c), c = xr.call(this, c), c.isHeadCut) break;
    }
  }
  const h = cs(c.segment), { allShapesCut: f } = is(c.segment.shapes, h, c.segment, { ignoreGroupMembership: !0 }), d = c.segment.cutDirection, p = V(d), w = !c.attemptedDirections.has(d), m = !c.attemptedDirections.has(p), S = t.cuts.length === 0;
  if (!f && w && m && S) {
    Y("cuts", `[makeCuts] Not all shapes cut in segment [${t.id}] with ${c.segment.shapes.length} shapes, retrying in ${p?.toUpperCase()} direction`);
    const g = new Set(c.attemptedDirections);
    return g.add(d), c = c.with({ attemptedDirections: g }), oi.call(this, c, p), c;
  }
  return c.final && e.cutType === "beam" && t.phase === 0 && (c = mr.call(this, c)), c.final && e.cutType === "beam" && t.type === "far" && t.parent.hasHeadCut && (c = yr.call(this, c)), c;
}
function ls(t) {
  const { segment: e, isHeadCut: n } = t;
  return n ? !1 : e?.parent?.hasHeadCut && e.type === "far";
}
function sr(t) {
  if (!t.isEdgeOfSegment) return !1;
  const { currentStripParent: e, segment: n, cutInfo: i } = t, { positionDimension: r, positionAxis: s } = i;
  if (E.greaterThanOrEqualTo(e[r] + e[s] + t.bladeWidth, n[r] + n[s]) && t.stock.cutType === "beam" || (t = t.with({ previousEdgeOfSegment: !0 }), !n.children.length)) return !1;
  const a = t.segment.children.findLast((l) => l.type === "far");
  return a ? (t = t.with({ segment: a }), a.cutDirection = V(t.cutDirection), pe.call(this, {
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
function cs(t, e = /* @__PURE__ */ new Set()) {
  if (e.has(t.autoId)) return [];
  e.add(t.autoId);
  const n = [...t.cuts];
  if (t.children?.length)
    for (const i of t.children)
      n.push(...cs(i, e));
  return n;
}
function oi(t, e) {
  const { segment: n } = t;
  n.cutDirection = e;
  const i = new Set(t.attemptedDirections);
  return i.add(e), t = t.with({
    isHeadCut: !1,
    attemptedDirections: i
  }), n.cuts.length = 0, n.clearChildren(), t.segment.hasHeadCut = !1, Y("cuts", `REATTEMPTING [${n.id}] new direction ${n?.cutDirection?.toUpperCase()}`), pe.call(this, {
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
function or(t) {
  if (!t.segment) return !1;
  const { segment: e, stock: n, cutDirection: i, previousCutPosition: r, allStockShapes: s } = t;
  return !["l", "w"].includes(i) || e.l <= 0 || e.w <= 0 || r === void 0 ? !1 : (F([
    () => R(s.every((o) => Z(o) || X(o)), "allStockShapes must be shape or any type of group").to.be.true,
    () => R(nt(n)).to.be.true
  ]), !0);
}
function rr(t) {
  const { final: e } = t;
  return e && _.makeCutsIteration++, t;
}
function ar(t) {
  const { segment: e, cutDirection: n } = t;
  return e.type !== "root" && _.previousSegments.some((i) => e.l === i.l && e.w === i.w && e.x === i.x && e.y === i.y && e.type === i.type && n === i.cutDirection);
}
function lr(t) {
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
function cr(t, e, n) {
  return t.filter(
    (i, r, s) => s.findIndex(
      (o) => E.equalTo(
        o[e] + o[n],
        i[e] + i[n]
      )
    ) === r
  );
}
function ur(t) {
  const { segment: e, stock: n, cutDirection: i, cutInfo: r, previousCutPosition: s, halfBladeWidth: o } = t, { cutAxis: a, positionAxis: l, positionDimension: c } = r;
  let u = [];
  if (Y("cuts", `Finding strip parent shapes. Segment ${e.id} has ${e.shapes.length} shapes:`), e.shapes.slice(0, 3).forEach((f) => {
    Y("cuts", `  Shape ${f.id}: l=${f.l}, w=${f.w}, rot=${f.rot}, at (${f.x},${f.y}), added=${f.added}`);
  }), n.cutPreference === i) {
    const f = e.type === "far" && n.cutType === "guillotine" || !s ? e[a] : s + o;
    Y("cuts", `[findStripParentShapes] cutPreference=${n.cutPreference}, cutDirection=${i}, cutAxis=${a}, axisPosition=${f}, segment.shapes[0]?.[${a}]=${e.shapes[0]?.[a]}, segment.type=${e.type}`), u = Vo(
      e.shapes,
      a,
      f
    );
  } else {
    Y("cuts", `[findStripParentShapes] NOT using cutPreference path, cutPreference=${n.cutPreference}, cutDirection=${i}, cutAxis=${a}, segment[${a}]=${e[a]}, segment.shapes[0]?.[${a}]=${e.shapes[0]?.[a]}, segment.shapes[0]?.added=${e.shapes[0]?.added}`), u = e.shapes.filter(
      (d) => d.added && E.equalTo(d[a], e[a])
    );
    const f = u.filter((d) => X(d));
    if (f.length > 0) {
      const d = /* @__PURE__ */ new Set();
      f.forEach((p) => {
        p.shapes && Array.isArray(p.shapes) && p.shapes.forEach((w) => d.add(w.autoId));
      }), u = u.filter((p) => X(p) ? !0 : !d.has(p.autoId));
    }
    u = cr(u, l, c);
  }
  if (u.length === 0) {
    const f = e.shapes.filter((d) => d.added);
    if (f.length > 0) {
      const d = Math.min(...f.map((p) => p[a]));
      u = f.filter((p) => E.equalTo(p[a], d)), Y("cuts", `[findStripParentShapes] Fallback: found ${u.length} shapes at min axis position ${d}`);
    }
  }
  const h = e.shapes.filter((f) => X(f) && f.type === "user" && f.added);
  for (const f of h)
    if (!u.some((d) => d.autoId === f.autoId)) {
      const d = n.cutPreference === i ? e.type === "far" && n.cutType === "guillotine" || !s ? e[a] : s + o : e[a];
      E.lessThanOrEqualTo(f[a], d) && u.push(f);
    }
  if (u.sort((f, d) => f[l] - d[l]), !e?.hasHeadCut) {
    const f = e.shapes.filter((p) => p.added), d = Ft(f, l);
    d && !u.some((p) => p.autoId === d.autoId) && u.push(d);
  }
  return t.with({ stripParentShapes: u });
}
function fr(t) {
  const { segment: e, stock: n, cutDirection: i, cutInfo: r, halfBladeWidth: s, allStockShapes: o, previousStripShape: a, currentStripParent: l, currentStripIndex: c, bladeWidth: u } = t, { cutAxis: h, positionAxis: f, cutDimension: d, positionDimension: p } = r;
  if (c === 0) return t;
  if (a && E.equalTo(l[h], e[h]) && E.equalTo(a[h], e[h]) && !E.equalTo(
    l[f],
    a[f] + a[p] + u
  )) {
    Y("cuts", `[makeCuts] Creating gap cut at position ${l[f] - s}, dir=${i}`);
    const { cut: w, previousCutPosition: m } = Xe({
      parentSegment: e,
      stock: n,
      cutDirection: i,
      cutAxis: h,
      positionAxis: f,
      position: l[f] - s,
      allStockShapes: o
    });
    if (w) {
      const S = m < e[f] ? e[f] : m, g = S + s - e[f], x = l[f] - S - u - s, y = e[f] + g, I = x > 0 ? kn.call(this, {
        parent: e,
        stock: n,
        offcut: !0,
        type: "near",
        [h]: e[h],
        [d]: e[d],
        [f]: y,
        [p]: x
      }) : null;
      I && F([
        () => R(
          I.cutDirection,
          `near side segment ${I.id} has the same cutDirection as segment ${e.id}`
        ).not.to.equal(e.cutDirection)
      ]);
    }
  }
  return t;
}
function hr(t) {
  if (t.stock.cutType !== "beam" || t.currentStripIndex !== 0 || t.segment.type === "far" && !ls(t)) return t;
  const { segment: e, stock: n, cutDirection: i, cutInfo: r, allStockShapes: s, halfBladeWidth: o } = t, { cutAxis: a, positionAxis: l, positionDimension: c } = r;
  return e.phase !== 1 || !t.final || Qo({
    segment: e,
    stock: n,
    cutDirection: i,
    cutAxis: a,
    positionAxis: l,
    positionDimension: c,
    position: 1,
    allStockShapes: s,
    halfBladeWidth: o
  }), t;
}
function dr(t) {
  const { segment: e, stock: n, cutInfo: i, halfBladeWidth: r, currentStripParent: s, currentStripIndex: o, stripParentShapes: a, isHeadCut: l, bladeWidth: c, previousEdgeOfSegment: u } = t, { positionAxis: h, cutAxis: f, positionDimension: d, cutDimension: p } = i;
  let w = s[h] + s[d] + r, m = !1, S = o;
  Y("cuts", `Cut position calc: shape ${s.l}x${s.w}, posAxis=${h}, posDim=${d}`), Y("cuts", `  Shape rot=${s.rot}, autoId=${s.autoId}`), Y("cuts", `  ${h}=${s[h]}, ${d}=${s[d]} => cutPos=${w}`), Y("cuts", `  cutDirection=${t.cutDirection}, cutAxis=${i.cutAxis}, cutDim=${i.cutDimension}`), Y("cuts", `  Shape actual extent: x=[${s.x} to ${s.x + s.l}], y=[${s.y} to ${s.y + s.w}]`), Y("cuts", `  Strip parent shapes count: ${a.length}`), a.length > 1 && Y("cuts", `  All strip parents: ${a.map((y) => `${y.id}(${y.l}x${y.w} rot=${y.rot})`).join(", ")}`);
  let g = E.greaterThanOrEqualTo(
    s[h] + s[d] + c,
    e[h] + e[d]
  );
  const x = e.shapes;
  if (!l && !g && !u && er.call(this, e, n, s, o, g, t.cutDirection, a)) {
    let y = s;
    for (let I = o + 1; I < a.length; I++) {
      const b = a[I];
      if (b.autoId === y.autoId) continue;
      if (!b) break;
      const C = x.filter(
        (G) => jt(G, s, h)
      ), $ = Ft(C, f), P = C.reduce(
        (G, O) => E.greaterThan(G[d], O[d]) ? G : O
      );
      E.greaterThan(
        P[h] + P[d],
        y[h] + y[d]
      ) && (y = P, w = y[h] + y[d] + r);
      const M = Ft(
        x.filter(
          (G) => jt(G, b, h)
        ),
        f
      );
      if (!E.equalTo(
        $[f] + $[p],
        M[f] + M[p]
      ))
        break;
      if (E.equalTo(y[p], b[p]) && E.equalTo(y[f], b[f]))
        m = !0, w = b[h] + b[d] + r, y = b, S = I;
      else
        break;
    }
    m && (e.merged = !0, g = E.greaterThanOrEqualTo(
      w - r,
      e[h] + e[d]
    ));
  }
  return t.with({
    cutPosition: w,
    mergedCut: m,
    isEdgeOfSegment: g,
    currentStripIndex: S
  });
}
function pr(t) {
  if (t.stock.cutType !== "beam" || !t.cut) return t;
  const { cut: e, segment: n, cutInfo: i, currentStripParent: r, currentStripIndex: s, stripParentShapes: o } = t, { positionAxis: a, positionDimension: l } = i;
  e?.guillotineState?.partProduced && s === o.length - 1 && E.equalTo(
    r[a] + r[l],
    n[a] + n[l]
  ) && (Y("cuts", `MARKING PTX DUMMY CUT ${r.autoId} ${t.cutPosition}`), e.ptxData.isDummy = !0);
}
function gr(t) {
  return t.hasHeadCut ? V(t.cutDirection) : t.cutDirection;
}
function mr(t) {
  if (t.stock.cutType !== "beam") return t;
  const { segment: e, cutInfo: n, stock: i, cutDirection: r } = t;
  if (e.phase !== 0) return t;
  const { cutAxis: s } = n;
  for (const o of e.cuts)
    o.dimension === gr(e) && (o[s + 1] = 0, o[s + 2] = i[r]);
  return t;
}
function yr(t) {
  if (t.stock.cutType !== "beam") return t;
  const { segment: e, cutInfo: n, stock: i, cutDirection: r } = t;
  if (e.phase !== 1) return t;
  const { cutAxis: s } = n;
  for (const o of e.cuts)
    e.hasHeadCut ? o.dimension === V(e.cutDirection) && (o[Dt(s) + 2] = i[V(r)]) : o.dimension === e.cutDirection && (o[s + 2] = i[r]);
}
function Sr(t) {
  const { segment: e, stock: n, cutDirection: i, cutInfo: r, cutPosition: s, allStockShapes: o, currentStripParent: a, isHeadCut: l } = t, { cutAxis: c, positionAxis: u } = r;
  l && Uo(a, i);
  const { cut: h, farSideSegmentSize: f, previousCutPosition: d, rejectedByCollision: p, collisionShapes: w } = Xe({
    parentSegment: e,
    stock: n,
    cutDirection: i,
    cutAxis: c,
    positionAxis: u,
    position: s,
    allStockShapes: e.phase === 0 ? o : [],
    headCut: t.isHeadCut
  });
  h && t.final && Y("cuts", `MADE CUT ${h.x1}|${h.x2}|${h.y1}|${h.y2} ${h.isHead ? "HEAD" : "NORM"}`);
  const m = p ? t.previousCutPosition : d;
  return t.with({
    cut: h,
    farSideSegmentSize: f,
    previousCutPosition: m,
    rejectedByCollision: p || !1,
    collisionShapes: w || []
  });
}
function ri(t) {
  if (t.stock.cutType !== "beam") return t;
  const { cut: e, cutInfo: n, halfBladeWidth: i, currentStripParent: r } = t;
  if (!e) return t;
  const { cutAxis: s, cutDimension: o, positionAxis: a, positionDimension: l } = n;
  return E.equalTo(
    e[s + 2] - e[s + 1],
    r[o]
  ) && E.equalTo(
    e[a + 1],
    r[a] + r[l] + i
  ) && (e.guillotineState.partProduced = r.parentId), t;
}
function ai(t) {
  const {
    segment: e,
    stock: n,
    cutInfo: i,
    cutPosition: r,
    mergedCut: s,
    currentStripParent: o,
    previousCutPosition: a,
    cut: l,
    isEdgeOfSegment: c,
    halfBladeWidth: u,
    bladeWidth: h,
    allStockShapes: f,
    final: d,
    cutDirection: p,
    currentStripIndex: w
  } = t, { cutAxis: m, positionAxis: S, cutDimension: g, positionDimension: x } = i, y = w === 0 && E.greaterThan(o[S], e[S]);
  if (!l && !c && !y) return t;
  const I = {
    parent: e,
    stock: n,
    merged: s,
    type: "near",
    hasHeadCut: e.hasHeadCut,
    shapes: []
  }, b = y && !l ? o[S] : r, C = a != null && a >= e[S], $ = C ? a + u : e[S], P = b - (C ? a + h : u + e[S]);
  Y("cuts", `[createNearSegment] segment[${e.id}] at (${e.x},${e.y}), posAxis=${S}, cutAxis=${m}, previousCutPosition=${a}, hasPreviousCut=${C}, nearSegmentPosition=${$}`);
  const M = {
    [m]: e[m],
    [g]: e[g],
    [S]: $,
    [x]: P,
    cutDirection: V(p)
  };
  Y("cuts", `[createNearSegment] dimensionProps: x=${M.x ?? "N/A"}, y=${M.y ?? "N/A"}, l=${M.l ?? "N/A"}, w=${M.w ?? "N/A"}`);
  const G = kn.call(
    this,
    { ...I, ...M },
    !1
    // Don't reject if identical - we'll filter shapes ourselves
  );
  if (!G) return t;
  if (Y("cuts", `[createNearSegment] AFTER creation: segment ${e.id} at (${G.x},${G.y}) ${G.l}x${G.w}`), G.shapes = e.shapes.filter((O) => E.greaterThanOrEqualTo(O.x, G.x) && E.lessThanOrEqualTo(O.x + O.l, G.x + G.l) && E.greaterThanOrEqualTo(O.y, G.y) && E.lessThanOrEqualTo(O.y + O.w, G.y + G.w)), Y("cuts", `[createNearSegment] nearSideSegment.shapes.length = ${G.shapes.length}`), G.shapes.length > 0) {
    const O = E.equalTo(G.l, o.l) && E.equalTo(G.w, o.w);
    if (Y("cuts", `[createNearSegment] nearSegment: ${G.l}x${G.w}, shape: ${o.l}x${o.w}, identical: ${O}, mergedCut: ${s}`), s || !O) {
      Y("cuts", `CUTTING NEAR SIDE SEGMENT [${G.id}] DIR ${G?.cutDirection?.toUpperCase()}`), Y("cuts", `[createNearSegment] CALLING makeCuts recursively with segment ${G.l}x${G.w}, segment.shapes.length=${G.shapes?.length}, final=${d}`);
      const N = pe.call(
        this,
        {
          segment: G,
          stock: n,
          cutDirection: G.cutDirection,
          previousCutPosition: a,
          allStockShapes: f,
          final: d,
          headCutCount: t.headCutCount
        }
      );
      Y("cuts", `[createNearSegment] RETURNED from makeCuts, childState=${N}`), t = t.with({ headCutCount: N?.headCutCount || t.headCutCount });
    }
  }
  return t.with({ nearSideSegment: G });
}
function xr(t) {
  const {
    segment: e,
    stock: n,
    cutInfo: i,
    cutPosition: r,
    farSideSegmentSize: s,
    halfBladeWidth: o,
    currentStripIndex: a,
    stripParentShapes: l,
    isHeadCut: c,
    allStockShapes: u,
    final: h
  } = t, { cutAxis: f, positionAxis: d, cutDimension: p, positionDimension: w } = i, m = {
    parent: e,
    stock: n,
    offcut: c ? !1 : a === l.length - 1,
    type: "far",
    hasHeadCut: !1,
    shapes: [],
    cutDirection: e.cutDirection
    //[] test
  }, S = {
    [f]: e[f],
    [p]: e[p],
    [d]: r + o,
    [w]: s
  };
  Y("cuts", `Creating FAR segment: cutAxis=${f}, cutDim=${p}, posAxis=${d}, posDim=${w}`), Y("cuts", `FAR segment props: ${f}=${e[f]}, ${p}=${e[p]}, ${d}=${r + o}, ${w}=${s}`), Y("cuts", `FAR segment calculation: cutPosition=${r}, halfBladeWidth=${o}, result=${r + o}`);
  const g = kn.call(this, { ...m, ...S });
  if (!g) return t;
  if (Y("cuts", `FAR segment created [${g.id}] at (${g.x},${g.y}) ${g.l}x${g.w}`), Y("cuts", `  Parent has ${e.shapes.length} shapes, far segment has ${g.shapes.length} shapes`), Y("cuts", `  Cut was at position ${r} (${d}=${r})`), Y("cuts", `  Expected offcut dimensions based on stock (1200x1200): should be ${e.l - r}x${e.w} or ${e.l}x${e.w - r}`), c) {
    g.shapes = e.shapes.filter((y) => {
      const I = y[Dt(f)] + y[V(p)];
      return E.greaterThan(I, r);
    }), Y("cuts", `HEAD CUT: Making cuts in far segment [${g.id}] with ${g.shapes.length} shapes`);
    const x = pe.call(
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
    t = t.with({ headCutCount: x?.headCutCount || t.headCutCount });
  }
  return t.with({ farSideSegment: g });
}
function us(t) {
  if (!this?.config?.guillotine?.allowHeadCuts || !t?.saw?.guillotineOptions?.headCuts) return !1;
  if (si(t)) return !0;
  if (t.type === "far" || t.type === "root") {
    if (!os(t)) return !1;
    if (t.parent.hasHeadCut || si(t.parent)) return !0;
  }
  return !1;
}
function br(t) {
  const { segment: e, currentStripParent: n, forceNoHeadCut: i } = t;
  if (i) return t.with({ isHeadCut: !1 });
  let r = !1;
  return us.call(this, e) ? (r = rs.call(this, e.saw, n, e, t.cutDirection), t.with({ isHeadCut: r })) : t.with({ isHeadCut: !1 });
}
function Xe({
  parentSegment: t,
  stock: e,
  cutDirection: n,
  cutAxis: i,
  positionAxis: r,
  position: s,
  allStockShapes: o = [],
  headCut: a = !1,
  ptxDummyCut: l = !1,
  skipCollisionCheck: c = !1
}) {
  const u = e.halfBladeWidth, h = Mi(r), f = Us.parse({
    stock: e,
    isGuillotine: !0,
    isHead: a,
    ptxData: {
      isDummy: l
    },
    //NOTE: this has changed from cutAxis to positionAxis
    x1: r === "x" ? s : t.x,
    x2: r === "x" ? s : t.x + t.l,
    y1: r === "y" ? s : t.y,
    y2: r === "y" ? s : t.y + t.w
  });
  let d = new ve(f);
  if (!l && t.type === "near" && t.parent.hasHeadCut && (d.ptxData.headCutStrip = !0), !c) {
    const C = o.length ? o : t.shapes, $ = bn(
      d,
      e,
      C,
      !0
    );
    if ($?.length)
      return {
        cut: null,
        farSideSegmentSize: null,
        previousCutPosition: null,
        rejectedByCollision: !0,
        collisionShapes: $
      };
  }
  const p = t.cuts.filter((C) => C.dimension === n && E.equalTo(C[i + 1], d[i + 1]));
  if (s && p.some((C) => E.equalTo(C[r + 1], s)))
    return {
      cut: null,
      farSideSegmentSize: null,
      previousCutPosition: null
    };
  const w = p.length ? p[p.length - 1] : null;
  let m = w ? w[r + 1] : null, S = t[r] + t[h] - (s + u);
  S < 0 && (S = 0);
  let g = t.parent;
  for (; g; ) {
    if (g.cuts.some(($) => $.dimension === n && E.equalTo($[r + 1], s)))
      return {
        cut: null,
        farSideSegmentSize: S,
        previousCutPosition: m
      };
    g = g.parent;
  }
  const x = E.lessThanOrEqualTo(
    s - u,
    t[r] + t[h]
  ), y = s - u, I = t[r] + t[h], b = E.greaterThanOrEqualTo(y, I);
  return d.beamTrimL1 || d.beamTrimW1 || e.cutType === "beam" && E.lessThanOrEqualTo(
    s - u,
    t[r] + t[h]
  ) || d.ptxData.isDummy || x && !b ? (d.ptxData.order = _.ptxCuts++, t.cuts.push(d)) : d.stock?.saw?.stockType === "roll" ? t.cuts.push(d) : (d = null, S = null, m = null), {
    cut: d,
    farSideSegmentSize: S,
    previousCutPosition: m
  };
}
function wr({
  x: t,
  y: e,
  l: n,
  w: i,
  type: r,
  parent: s,
  rejectIdentical: o
}) {
  return o && E.equalTo(t, s.x) && E.equalTo(e, s.y) && E.equalTo(i, s.w) && E.equalTo(n, s.l) ? "IDENTICAL_TO_PARENT" : n <= 0 || i <= 0 ? "INVALID_DIMENSIONS" : s && !s.autoId ? (console.error("[ERROR] Parent segment has no autoId!"), console.error(`Parent details: type=${s.type}, x=${s.x}, y=${s.y}, l=${s.l}, w=${s.w}`), "MISSING_PARENT_ID") : r === "root" && s ? (console.error("[ERROR] Attempting to create root segment with a parent!"), console.error(`Parent autoId: ${s.autoId}, Parent type: ${s.type}`), "ROOT_WITH_PARENT") : (r === "root" && s?.type !== void 0 && s.type !== "root" && console.error(`[ERROR] Creating root segment with non-root parent of type: ${s.type}`), null);
}
function kn({
  x: t,
  y: e,
  l: n,
  w: i,
  type: r,
  parent: s,
  stock: o,
  offcut: a = !1,
  merged: l = !1,
  cutDirection: c = null
}, u = !0) {
  if (wr({ x: t, y: e, l: n, w: i, type: r, parent: s, rejectIdentical: u })) return;
  let f;
  _.segments++;
  let d = s.phase + 1;
  s.hasHeadCut && (s.isInitial || (s.phase = 0), d = s.phase + 1);
  try {
    const m = _.segments.toString();
    if (f = new vt({
      x: t,
      y: e,
      l: n,
      w: i,
      t: typeof o.t == "string" ? parseFloat(o.t) : o.t,
      id: m,
      phase: d,
      parent: s,
      stock: o,
      offcut: a,
      merged: l,
      type: r,
      grain: o.grain,
      material: o.material,
      saw: o.saw,
      cutDirection: c || V(s.cutDirection)
    }), s && s.autoId === f.autoId)
      throw console.error(`[ERROR] Segment created with itself as parent! autoId: ${f.id}`), new Error("Segment cannot be its own parent");
  } catch (m) {
    Y("info", `issue creating segment ${m.message}`);
    return;
  }
  const p = Be(f), w = s.shapes.filter((m) => m.added ? E.greaterThanOrEqualTo(m.x, f.x) && E.lessThanOrEqualTo(m.x + m.l, f.x + f.l) && E.greaterThanOrEqualTo(m.y, f.y) && E.lessThanOrEqualTo(m.y + m.w, f.y + f.w) : m.willItFit(f, null, p));
  return f.shapes = w, f;
}
function Ir(t, e = !1, n) {
  e && Y("cuts", `------------------- ANALYSE SEGMENTS ${t.id} -------------------`);
  const i = [], r = [], s = [];
  let o = 0, a = 0;
  const l = /* @__PURE__ */ new Set(), c = (u, h = 0) => {
    if (!u) return h;
    if (l.has(u.autoId))
      return console.error(`[CIRCULAR REFERENCE DETECTED] Segment ${u.id} is already in the traversal path!`), console.error(`Traversal path: ${Array.from(l).join(" -> ")} -> ${u.id}`), console.error(`Segment details: autoId=${u.id}, parent=${u.parent?.id}, children=[${u.children?.map((d) => d.autoId).join(", ")}]`), h;
    l.add(u.autoId);
    let f = h;
    i.push(u), (u.offcut === !0 || !u.shapes?.length) && s.push(u);
    for (let d = 0; d < u.cuts.length; d++) {
      const p = u.cuts[d];
      if (p) {
        if (p.guillotineState.phase = u.phase, p.isHead ? (p.ptxData.function = 0, o++) : d > 0 && r[d - 1].isHead ? p.dimension === "l" ? p.ptxData.function = 1 : p.dimension === "w" && (p.ptxData.function = 2) : (p.ptxData.function = p.guillotineState.phase + 1, p.ptxData.headCutStrip && p.ptxData.function--), p.isTrim && a++, e)
          if (p.isHead) {
            let w = 0;
            _o(u, () => w++), f = w, Y("cuts", `[${u.id}] reset cut order to ${f}`);
          } else d > 0 && u.cuts[d - 1].isHead && f++;
        p.guillotineState.order = f, p.guillotineState.segmentCutOrder = d, p.guillotineState.parentSegmentID = u?.autoId || "root", e && Cr(p, u), r.push(p), e && Y("cuts", `[${u.id}] {${f}} ${p.x1}|${p.x2}|${p.y1}|${p.y2}`), f++;
      }
    }
    if (u.children && u.children.length > 0) {
      const d = u.children.filter((p) => p.autoId === u.autoId ? (console.error(`[SELF-REFERENCE FOUND] Removing segment ${u.id} from its own children array`), console.error(`Segment type: ${u.type}, Phase: ${u.phase}`), console.error(`Number of children: ${u.children.length}`), console.error(`Children autoIds: ${u.children.map((w) => w.autoId).join(", ")}`), !1) : !0);
      d.length !== u.children.length && (u.children = d);
      for (const p of u.children)
        if (p && st(p)) {
          if (p.type === "firstShape")
            continue;
          if (p.autoId === u.autoId) {
            console.error(`[CRITICAL SELF-REFERENCE] Segment ${u.id} still has itself as a child!`), console.error("This should have been filtered. Skipping traversal.");
            continue;
          }
          if (l.has(p.autoId)) {
            console.error(`[CIRCULAR REFERENCE] Child segment ${p.autoId} is already in traversal path`), console.error(`Parent: ${u.id}, Path: ${Array.from(l).join(" -> ")}`);
            continue;
          }
          if (u.hasHeadCut) {
            const w = n + r.filter((m) => !m.isHead && !m.ptxData.isDummy).length;
            f = c(p, w);
          } else
            f = c(p, f);
        }
    }
    return l.delete(u.autoId), f;
  };
  return c(t), e && (Y("cuts", `Segments processed: ${i.length}`), Y("cuts", `Cuts processed: ${r.length}`), Y("cuts", `Trim cuts found: ${a}`), Y("cuts", `Head cuts found: ${o}/${n}`), Y("cuts", `Offcuts identified: ${s.length}`), Y("cuts", `ROOT segment [${t.id}] has ${t.children?.length || 0} children`), Y("cuts", "------------------- END ANALYSE SEGMENTS -------------------")), [t, r, s];
}
function Cr(t, e) {
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
function $r(t, e) {
  return t?.length && t.forEach((n) => {
    e = e.filter((i) => !(i.id === n.id || X(i) && i.shapes.find((r) => r.id === n.id)));
  }), e;
}
const St = {
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
        fill: 1
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
        fenceConsistency: 0,
        // Reward placing a shape whose cross-strip dim matches an
        // already-placed shape in the same strip. -12% on bench-8-60
        // 2nd-area + bench-9-9 hits 1/1 target. The deepSearchRetry
        // path overrides this back to 0 to preserve bench-4-256's
        // 13/13 stock-count target hit.
        stripCohesion: 1,
        // Cross-dim tolerance for the stripCohesion bonus — accommodates
        // 1-5mm dimensional drift between shape types so 362-wide rails
        // co-locate with 363-tall panels. Bounded bonus (min(1, matches/4))
        // limits any negative impact when the tolerance over-matches.
        stripCohesionTolerance: 5
      };
    },
    time() {
      const t = this.standard();
      return t.similarDimensions = 1, t.fenceConsistency = 1, t;
    },
    stock() {
      return this.standard();
    },
    beam(t) {
      const e = this.standard();
      e.similarDimensions = 0;
      const n = t ?? ne()?.experimental?.weightingOverride;
      if (n && typeof n == "object")
        for (const [i, r] of Object.entries(n))
          typeof r == "number" && (e[i] = r);
      return e;
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
function kt(t, e) {
  if (!e) return t;
  const n = e.weighting;
  if (!n) return t;
  for (const i in n)
    n[i] !== null && (t[i] = t[i] * n[i]);
  return t;
}
function En(t, e, n) {
  if (this?.weighting?.custom)
    return kt(this.weighting.custom, n);
  const i = t.cutType, r = this?.config?.experimental?.weightingOverride;
  switch (i) {
    case "efficiency":
      if (e?.saw?.stockType === "roll")
        return kt(St.roll.efficiency(), n);
      break;
    case "beam":
      return kt(St.guillotine.beam(r), n);
    case "guillotine": {
      if (e?.saw?.stockType === "roll")
        return kt(St.roll.guillotine(), n);
      switch (e.saw.guillotineOptions.strategy) {
        case "time":
          return kt(
            St.guillotine.time(),
            n
          );
        case "efficiency":
          return kt(
            St.guillotine.stock(),
            n
          );
        default:
          return kt(
            St.guillotine.stock(),
            n
          );
      }
    }
  }
  return kt(St[t.cutType].standard(), n);
}
class Pr {
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
      weighting: En.call(
        this.CLO,
        n,
        nt(n) ? n : n.getStock
      )
    }, this.weighting = this.weightingKeys[this.container.cutType], n?.saw?.stockType === "roll" && (this.selectionMethod = "rollLength", this.weighting = this.weightingKeys.roll), this.uniqueShapes = Gt(i, !1), this.population = [], this.options = {
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
      this.population.push(new li(this, e));
    this.population.push(new li(
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
        this.bestResult = e, this.bestResult.weighting = structuredClone(n.weighting), X(this.bestResult.firstShape) && this.bestResult.firstShape.shapes.forEach((i) => e.shapes.push(i.compress()));
      else {
        if (e.score.efficiency <= this.bestResult.score.efficiency)
          return;
        this.bestResult = e, this.bestResult.weighting = structuredClone(n.weighting), X(this.bestResult.firstShape) && this.bestResult.firstShape.shapes.forEach((i) => e.shapes.push(i.compress()));
      }
  }
  async run() {
    this.CLO.runningEvo = !0, Y("swarm", `Swarm starting - population: ${this.options.populationSize}, steps: ${this.options.steps}`), this.CLO.resetShapes(this.shapeList), this.createPopulation();
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
    return await e.call(this), this.CLO.runningEvo = !1, this.bestResult.type = "evo", Y("swarm", `Swarm complete - best efficiency: ${this.bestResult?.score?.efficiency?.toFixed(3)}`), {
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
  constructor(e, n, i = null) {
    this.swarm = e, this.id = n, this.alive = !0, this.weighting = i, this.score = null, this.bestScore = null, this.previousScore = null, this.speed = 1, this.socialInfluence = 0.8, this.improving = !1, this.following = null, this.firstShape = this.swarm.firstShape, this.firstShapeRotation = this.swarm.firstShapeRotation, this.stripShapes = this.swarm.stripShapes, this.iteration = this.swarm.iteration, this.type = "evo", this.cutType = this.swarm.container.saw.cutType, this.stockID = this.swarm.container.id, this.recentScores = [], this.weighting || this.createRandomWeighting();
  }
  //create weighting
  createRandomWeighting() {
    const e = St.efficiency.standard();
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
            const e = await Wt.runSpecificStrategy.call(
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
        Y("swarm", `Individual ${this.id} - efficiency: ${this.score.efficiency?.toFixed(3)} | weighting: { ${e} }`);
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
function ln(t) {
  return typeof t?.guillotineState?.myPhase == "number";
}
function oe(t) {
  return t.type === "root" || t[Nt(t.stock.cutPreference)] === 0;
}
function cn(t, e) {
  return t?.guillotineState?.myPhase === e;
}
function vr(t) {
  const e = An(t);
  if (!e) return ui(t, 1);
  const i = xt(e) === "l" ? "w" : "l", r = fs(t, e, i);
  ui(t, r);
}
function fs(t, e, n) {
  if (!t) return null;
  if (!e) return 1;
  const i = Mn(e);
  return t[n] === e[n] ? i : i + 1;
}
function An(t) {
  return t?.guillotineState?.myStripParent || null;
}
function ci(t, e) {
  t?.guillotineState && (t.guillotineState.myStripParent = e);
}
function ui(t, e) {
  typeof e == "number" && t?.guillotineState && t.guillotineState.setPhase(e);
}
function Mn(t) {
  return t?.guillotineState ? t.guillotineState.myPhase : null;
}
function xt(t) {
  return t?.guillotineState ? t.guillotineState.myStripDirection : null;
}
function De(t, e) {
  if (t?.guillotineState) {
    if (typeof t.guillotineState.setStripDirection != "function") {
      const n = t.guillotineState || {};
      t.guillotineState = new Te(n);
    }
    t.guillotineState.setStripDirection(e);
  }
}
function fi(t, e) {
  if (st(t)) {
    Tr(e);
    const n = e?.bestScore?.score;
    n && ["currentStripDirection", "myStripDirection", "keyStripDirection", "myPhase"].forEach((r) => {
      n[r] && (e.guillotineState[r] = n[r]);
    });
  }
}
function Tr(t) {
  const e = t.bestScore;
  e?.myStripParent && ci(t, e.myStripParent), X(t) && t.shapes.forEach((n) => ci(n, An(n)));
}
function Rr(t, e) {
  let n = null, i = e.x.get(t.x) || [];
  i = i.filter((a) => {
    const l = a.guillotineState.myStripParent;
    return l && !l.guillotineState?.firstShape ? an(t, l, "y") : !0;
  }), i.sort((a, l) => a.x - l.x);
  let r = e.y.get(t.y) || [];
  r = r.filter((a) => {
    const l = a.guillotineState.myStripParent;
    return l && !l.guillotineState?.firstShape ? an(t, l, "x") : !0;
  }), r.sort((a, l) => a.y - l.y);
  const s = i.length ? i[0] : null, o = r.length ? r[0] : null;
  return s && o ? n = s.placementOrder > o.placementOrder ? s : o : n = s || o, n;
}
function un(t, e) {
  t.x.has(e.x) ? t.x.get(e.x).push(e) : t.x.set(e.x, [e]), t.y.has(e.y) ? t.y.get(e.y).push(e) : t.y.set(e.y, [e]);
}
function kr(t, e) {
  const n = t.x.get(e.x) ?? [], i = n.indexOf(e);
  i !== -1 && (n.splice(i, 1), n.length === 0 && t.x.delete(e.x));
  const r = t.y.get(e.y) ?? [], s = r.indexOf(e);
  s !== -1 && (r.splice(s, 1), r.length === 0 && t.y.delete(e.y));
}
function Er(t, e = !0) {
  const n = [], i = /* @__PURE__ */ new Set();
  for (const r of t.shapes)
    if (X(r)) {
      const s = r.type === "position", o = pt(r), a = r.type === "user";
      if (s || a || o && e) {
        if (!i.has(r.autoId)) {
          n.push(r), i.add(r.autoId);
          for (const c of r.shapes || [])
            i.add(c.autoId);
        }
      } else if (r.added && t.stock) {
        r.placeMyShapes(t.stock);
        for (const c of r.shapes)
          i.has(c.autoId) || (c.group.addedAsGroup = r, n.push(c), i.add(c.autoId));
      }
    } else
      i.has(r.autoId) || (n.push(r), i.add(r.autoId));
  return t.shapes = n, F([
    () => R(gt(t.shapes)).to.be.false,
    () => Di(t.shapes, "removeGroupsFromSegment")
  ]), t;
}
function hs(t, e) {
  if (t.children && Array.isArray(t.children)) {
    if (e(t) === !1) return;
    for (const n of t.children)
      hs(n, e);
  }
}
function Ar(t, e) {
  const n = Gt(t, !1), i = /* @__PURE__ */ new Map();
  for (const r of t) {
    let s = i.get(r.parentId);
    s || (s = [], i.set(r.parentId, s)), s.push(r);
  }
  for (const r of e) {
    const s = n.filter((c) => c.stockLock.includes(r.parentId));
    if (!s.length) continue;
    const o = s.map((c) => c.area), a = o.reduce((c, u) => c + u, 0) / s.length;
    if (!(E.calculateCoefficientOfVariation(o) < this.config.priority.variationThreshold))
      for (const c of s) {
        c.priority || (c.priority = {});
        const u = Mr(c, r, a);
        c.priority[r.parentId] = u;
        const h = i.get(c.parentId);
        if (h)
          for (const f of h)
            f.id !== c.id && (f.priority || (f.priority = {}), f.priority[r.parentId] = u);
      }
  }
}
function Mr(t, e, n) {
  if (t.isExactFit(e) || t.area >= e.area * 0.9 || t.longSide >= e.longSide * 0.9)
    return 1;
  const i = t.area, r = e.area, s = i / r;
  return i > n ? s : 0;
}
function Dr(t, e) {
  return t.reduce((n, i) => {
    const r = i.getPriority(e), s = n.getPriority(e);
    return r > s ? i : n;
  });
}
function Gr(t, e, n = null) {
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
function ds(t, e, n = "y") {
  if (!t || !e || t[n] === void 0 || !e.area || e.area === 0) return 0;
  const i = Dt(n), r = i === "y" ? "w" : "l", s = e[n] ?? 0, o = e[i] ?? 0, c = (t[n] - s) * e[r] / e.area, f = (t[i] - o) / e[r] * e.aspect * 0.01;
  return 1 - (c + f);
}
function ps(t, e, n = "y") {
  if (!t || !e) return 0;
  "grain" in e && e.grain === "w" && (n = Dt(n));
  const i = n === "y" ? "w" : "l";
  return (t[n] + t[i]) / e[i];
}
function Or(t, e, n) {
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
function Lr(t, e, n) {
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
    const l = Or(o, a, n);
    i += l.length, r += l.reduce(
      (c, u) => u ? c + 1 : c,
      0
    );
  };
  return X(t) ? t.shapes.forEach((o) => {
    X(e) ? e.shapes.forEach((a) => {
      s(o, a);
    }) : s(o, e);
  }) : X(e) ? e.shapes.forEach((o) => {
    s(t, o);
  }) : s(t, e), { positiveAlignments: r, possibleAlignments: i };
}
function Br(t, e, n) {
  if (!t || !e || !n)
    return [!1, !1, !1, !1];
  if (t.autoId === e.autoId)
    return [!1, !1, !1, !1];
  const i = t.getMinSpacing(n.saw), r = t.x, s = t.x + t.l, o = t.y + t.w, a = t.y, l = e.x, c = e.x + e.l, u = e.y + e.w, h = e.y, f = () => r === c + i && (a >= h && a < u || o <= u && o > h), d = () => s + i === l && (a >= h && a < u || o <= u && o > h), p = () => a === u + i && (r >= l && r < c || s <= c && s > l), w = () => a + i === h && (r >= l && r < c || s <= c && s > l);
  return [
    f(),
    d(),
    p(),
    w()
  ];
}
function Xr(t, e) {
  return t.l === e.l && t.x === e.x;
}
function Wr(t, e) {
  return t.w === e.w && t.y === e.y;
}
function gs(t, e, n, i = {}) {
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
  let l = [];
  r && (l = Br(t, e, n));
  const c = l.filter(Boolean).length;
  if (c > 1)
    throw new Error("number of neighbours should not be greater than one for a single test shape");
  if (c === 0)
    return {
      contactResult: l,
      cohesion: 0,
      alignment: null,
      similarDimensions: 0,
      type: null,
      neighbour: e,
      neighbours: c
    };
  const u = ["lr", "rl", "bt", "tb"], h = l.findIndex(Boolean), f = u[h];
  if (!f) throw new Error("no contact type found");
  let d = null, p = null, w = 0;
  if (a && f && (d = Fr(t, e, f)), s && (p = Lr(t, e, n)), o) {
    const m = f === "rl" || f === "lr", S = f === "tb" || f === "bt", g = Wr(t, e), x = Xr(t, e);
    (m && g || S && x) && (w = x && g ? 1 : 0.5);
  }
  return {
    contactResult: l,
    cohesion: d,
    alignment: p,
    similarDimensions: w,
    type: f,
    neighbour: e,
    neighbours: c
  };
}
function Yr(t, e) {
  if (!e)
    throw new Error(`edge - no stock defined for shape ${t.id}`);
  const n = e.bladeWidth, i = t.w / e.w, r = t.l / e.l;
  let s = 0, o = e.l, a = 0, l = e.w;
  return !e.trimmed && e.hasTrim && (s = e.trim.w1, o = e.l - e.trim.w2, a = e.trim.l1, l = e.w - e.trim.l2), [
    // 0 left
    t.x - n <= s ? i : 0,
    // 1 right
    t.x + t.l + n >= o ? i : 0,
    // 2 bottom
    t.y - n <= a ? r : 0,
    // 3 top
    t.y + t.w + n >= l ? r : 0
  ].reduce((h, f) => h + f, 0);
}
function Fr(t, e, n) {
  if (!t || !e || !n) return 0;
  const i = Nr(t, e), r = hi(t), s = hi(e), o = r + s, a = Math.max(i.l * i.w, o), l = Math.min(1, Math.max(0, o / a)), c = Math.min(1, Math.max(
    0,
    qr(t, e, n) || 0
  )), u = l * 0.7 + c * 0.3;
  return Math.min(1, Math.max(0, u));
}
function Nr(t, e) {
  const n = Ge(t), i = Ge(e), r = Math.min(n.x, i.x), s = Math.min(n.y, i.y), o = Math.max(n.x + n.l, i.x + i.l), a = Math.max(n.y + n.w, i.y + i.w);
  return {
    x: r,
    y: s,
    l: o - r,
    w: a - s
  };
}
function Ge(t) {
  if (X(t)) {
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
function hi(t) {
  return X(t) ? t.shapes.reduce((e, n) => e + n.area, 0) : t.area;
}
function qr(t, e, n) {
  const i = Ge(t), r = Ge(e);
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
async function zr(t, e, n, i) {
  return await Wt.runSpecificStrategy.call(this, {
    shapes: t,
    container: e,
    firstShape: n,
    firstShapeRotation: i
  });
}
function di(t, e, n, i = null, r = null, s = null, o = null) {
  if (!i)
    throw new Error("shapePosition was not passed any placed shapes");
  if (!r)
    throw new Error("shapePosition was not passed any unplaced shapes");
  st(e) ? Hr(
    t,
    e,
    n,
    i,
    o,
    r
  ) : ms(
    t,
    e,
    n,
    i,
    s
  );
}
function Hr(t, e, n = null, i = [], r = null, s = []) {
  t.resetScore();
  const o = {
    compression: 0,
    fill: 0,
    similarDimensions: 0,
    fenceConsistency: 0,
    sameStripBonus: 0,
    exactStripFill: 0,
    cohesion: 0,
    stripCohesion: 0,
    area: 0,
    total: 0,
    cutDirection: e.cutDirection
  }, a = e.cutPreference, l = e.cutDirection, c = e.getStock.bladeWidth, { cutAxis: u } = ns(l), h = Rr(t, r);
  if (!h) return !1;
  const f = xt(h);
  let d = f;
  const p = f === "l" ? "w" : "l";
  h[p] !== t[p] && (d = V(f));
  const w = fs(t, h, p);
  if (e.saw.guillotineOptions.maxPhase && w > e.saw.guillotineOptions.maxPhase) return !1;
  const m = xt(h) ?? e.cutDirection;
  if (!m) throw new Error("keyDimension is not defined");
  const S = An(h);
  if (S) {
    const b = Dt(Nt(xt(S))), C = an(t, S, b);
    if (S.guillotineState.myPhase <= 2 && !C) return !1;
  }
  let g = !1;
  e.firstShape && (g = t[u] > e.firstShape[u]);
  const x = {
    lr: [],
    bt: [],
    tb: [],
    rl: []
  };
  for (const b of i) {
    const C = gs(
      t,
      b,
      e,
      {
        contact: !0,
        cohesion: !!n.cohesion,
        alignment: !!n.alignment,
        similarDimensions: !!n.similarDimensions
      }
    );
    C.type && (x[C.type].push(b), "cohesion" in o && n.cohesion && g && (o.cohesion += C.cohesion), "similarDimensions" in o && n.similarDimensions && (o.similarDimensions += C?.similarDimensions ? C.similarDimensions : 0), "fenceConsistency" in o && n.fenceConsistency && (a === "w" ? C.type === "lr" && C.neighbour.l === t.l && C.neighbour.y === t.y && (o.fenceConsistency = 1) : a === "l" && C.type === "bt" && C.neighbour.w === t.w && C.neighbour.x === t.x && (o.fenceConsistency = 1)));
  }
  if (e.cutDirection) {
    const b = e.cutDirection;
    if (b === "w") {
      const C = t.y === e.y, $ = x.bt && x.bt.length > 0;
      if (!C && !$)
        return !1;
    } else if (b === "l") {
      const C = t.x === e.x, $ = x.lr && x.lr.length > 0;
      if (!C && !$)
        return !1;
    }
  }
  if ("exactStripFill" in o && n.exactStripFill && h) {
    const b = V(xt(h)), C = t[b] + c;
    o.exactStripFill = C >= h[b] && C < h[b] + c ? 1 : 0;
  }
  if ("compression" in o && n.compression) {
    const b = m === "l" ? "y" : "x";
    o.compression = ds(
      t,
      e,
      b
    );
  }
  if ("fill" in o && n.fill) {
    const b = m === "l" ? "y" : "x";
    o.fill = ps(t, e, b);
  }
  if (o.cohesion = Math.max(0, o.cohesion), "sameStripBonus" in o && n.sameStripBonus && e.firstShape) {
    const b = xt(h);
    if (!g)
      o.sameStripBonus = 0;
    else if (b === "w" && x?.bt?.length) {
      const C = Ft(x.bt, "x"), $ = C.x + C.l;
      t.x + t.l > $ && (o.sameStripBonus = 0, o.cohesion = 0);
    } else if (b === "l" && x?.lr?.length) {
      const C = Ft(x.lr, "y"), $ = C.y + C.w;
      t.y + t.w > $ && (o.sameStripBonus = 0, o.cohesion = 0);
    } else
      o.sameStripBonus = 1;
  }
  if (n.aspectRatio) {
    const b = t.aspect, C = xt(h), $ = n.aspectRatioThreshold ?? 0.1;
    b < $ ? t[C] > t[V(C)] && (o.aspectRatio = 1) : o.aspectRatio = 0;
  }
  if (n.stripCohesion && h && i.length > 0) {
    const b = xt(h), C = V(b), $ = Nt(C), P = h[$], M = P + h[C], G = t[C], O = n.stripCohesionTolerance ?? 0;
    let N = 0;
    for (let L = 0; L < i.length; L++) {
      const v = i[L];
      if (v === t || v === h) continue;
      const D = v[$], B = D + v[C];
      if (D < P - 0.5 || B > M + 0.5) continue;
      const k = v[C];
      (O > 0 ? Math.abs(k - G) <= O : k === G) && N++;
    }
    N > 0 && (o.stripCohesion = Math.min(1, N / 4));
  }
  if (n.area && s && s.length > 0) {
    let b = 0;
    for (const C of s) {
      const $ = C.l * C.w;
      $ > b && (b = $);
    }
    b > 0 && (o.area = t.l * t.w / b);
  }
  const y = { ...o };
  Object.keys(o).forEach((b) => {
    if (typeof o[b] == "number") {
      const C = o[b];
      C < 0 ? y[b] = C : y[b] = n[b] ? C * n[b] : 0;
    }
  }), t.score = y;
  let I = 0;
  for (const b of Object.values(t.score))
    typeof b == "number" && (I += b);
  if (t.score.total = I, t.score.total < 0 && (t.score.total = 0), isNaN(t.score.total)) throw new Error("score is not a number");
  return t.score.cutDirection = l, t.score.myStripParent = h, t.score.myStripDirection = d, t.score.myPhase = w, t.score.total > (t?.bestScore?.total || 0) && t.setBestScore(t), !0;
}
function ms(t, e, n, i, r) {
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
    !e.trimmed && e.hasTrim && (h = e.trim.w1, f = e.trim.l1), (t.x === h || t.y === f) && (s.edge = Yr(t, e));
  }
  if ("fill" in s && n.fill) {
    const h = e?.saw?.efficiencyOptions?.primaryCompression ? Nt(e?.saw?.efficiencyOptions?.primaryCompression) : "y";
    s.fill = ps(
      t,
      e,
      h
    );
  }
  if ("compression" in s && n.compression) {
    const h = e?.saw?.efficiencyOptions?.primaryCompression ? Nt(e?.saw?.efficiencyOptions?.primaryCompression) : "y";
    s.compression = ds(
      t,
      e,
      h
    );
  }
  let o = 0, a = 0;
  const l = {
    lr: !1,
    rl: !1,
    bt: !1,
    tb: !1
  };
  for (const h of i) {
    const f = gs(
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
    f.type && (l[f.type] = !0, n.alignment && f.alignment && (a += f.alignment.positiveAlignments, o += f.alignment.possibleAlignments), n.cohesion && (s.cohesion += f.cohesion), n.similarDimensions && (s.similarDimensions += f?.similarDimensions ? f.similarDimensions : 0));
  }
  s.similarDimensions /= 4, o === 0 ? s.alignment = 0 : s.alignment = a / o, n.exactFit && (t.l === e.l || t.w === e.w) && (s.exactFit = 1), n.area && (s.area = Gr(t, i, e));
  const c = { ...s };
  Object.keys(s).forEach((h) => {
    if (typeof s[h] == "number") {
      const f = s[h];
      c[h] = n[h] ? f * n[h] : 0;
    }
  }), t.score = c;
  let u = 0;
  for (const h of Object.values(t.score))
    typeof h == "number" && (u += h);
  if (t.score.total = u, isNaN(t.score.total)) {
    const h = Object.fromEntries(
      Object.entries(t.score).filter(([, f]) => f === null || ["number", "string", "boolean"].includes(typeof f))
    );
    throw new Error("thisShape.score.total is not a number: " + JSON.stringify(h));
  }
  t.score?.total > (t?.bestScore?.total || 0) && t.setBestScore(t, r);
}
function Mt(t, e, n) {
  const i = this.shapeList.reduce(
    (L, v) => v.added ? L : ++L,
    0
  );
  let r, s, o;
  const a = e.getStock;
  if (!a) return !1;
  const l = t, c = nt(e) ? $t(l, a) : t.filter((L) => L.added);
  let u;
  c.length && (u = Dr(c, a)), u && !u.getPriority(a) && (u = null);
  const h = c.length, f = Math.max(...c.map((L) => L.x + L.l)), d = Math.max(...c.map((L) => L.y + L.w));
  let p = 0, w = null, m = null, S;
  if (n || (n = t.find((L) => L.x === (e.x || 0) && L.y === (e.y || 0))), !n) return !1;
  const g = n.area;
  let x = null;
  const y = e.area, I = c.reduce((L, v) => L + v.area, 0);
  if (nt(e)) {
    if (e.cutType === "efficiency" ? (S = e.primaryCompression ?? "w", p = qe(
      c,
      S,
      a.bladeWidth
    ), x = n?.bestScore?.total, p = p / e[S === "l" ? "l" : "w"]) : (S = e.cutPreference === "l" ? "x" : "y", p = qe(
      c,
      S,
      a.bladeWidth
    ), p = p / e[S === "x" ? "l" : "w"]), e.cutType === "guillotine" && (r = t.filter((L) => L.added && Mn(L) === 1).length), o = I / y, At() && F([() => R(o).to.be.lessThanOrEqual(1)]), e?.saw?.stockType === "roll") {
      const L = Ft(c, "x");
      s = L.x + L.l;
    }
  } else if (st(e)) {
    S = a.cutPreference === "l" ? "x" : "y", p = qe(
      c,
      S,
      a.bladeWidth
    ), p = p / e[S === "x" ? "w" : "l"];
    const L = V(a.cutPreference), v = L === "l" ? "x" : "y";
    if (w = a[L] - (n[L] + n[v] + a.bladeWidth), m = n[L], e.cutPreference === "flex")
      throw new Error("cut preference is set to flex, it should be l or w at this point");
    o = I / y;
  } else
    o = I / y;
  const b = c.reduce((L, v) => L + (v?.bestScore?.total ?? 0), 0), C = ft(t, e), $ = ft(t, a), P = C.length + h, M = $.length + h, G = $.reduce(
    (L, v) => L + v.area,
    I
  ), O = c.map((L) => L.compress());
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
    segmentCutDirection: st(e) ? e.cutDirection : null,
    // Result contains individual shapes (groups have already called placeMyShapes)
    shapes: O,
    score: {
      efficiency: o,
      totalShapeArea: I,
      totalShapesPlaced: h,
      totalShapeScore: b,
      firstRowLength: p,
      // firstShapeFill,
      firstShapeArea: g,
      firstShapeScore: x,
      containerAvailableShapes: P,
      stockAvailableShapes: M,
      stockAvailableShapeArea: G,
      totalUnplacedShapes: i,
      rollLength: s || null,
      maxX: f,
      maxY: d,
      stripShapes: r || null,
      stripSize: m || null,
      remainingStripSpace: w || null,
      uniqueStock: this.uniqueStock.length
    }
  };
}
function Zr(t, e, n = "sheet") {
  if (t && t?.length) {
    if (t.length === 1) return t[0];
    switch (t = t.filter((i) => i.score?.efficiency), n) {
      case "sheet":
        switch (e) {
          case "tidy":
            t.sort(Vr.bind(this));
            break;
          case "strip":
            t.sort(pi.bind(this));
            break;
          case "guillotine":
          case "beam":
            t.sort(Ur.bind(this));
            break;
          default:
            t.sort(_r.bind(this));
            break;
        }
        break;
      case "linear":
        t.sort(Jr);
        break;
      case "roll":
        switch (e) {
          case "guillotine":
          case "strip":
            t.find((i) => i.score.containerAvailableShapes === 0) && (t = t.filter((i) => i.score.containerAvailableShapes === 0)), t.sort(pi);
            break;
          case "efficiency": {
            t.sort(jr);
            break;
          }
        }
        break;
    }
    return t[0];
  }
}
function Jr(t, e) {
  return e.score.efficiency - t.score.efficiency;
}
function Oe(t, e) {
  const {
    totalShapesPlaced: n = 0,
    totalShapeArea: i = 0,
    stockAvailableShapes: r = 1,
    stockAvailableShapeArea: s = 0,
    containerAvailableShapes: o = 0,
    efficiency: a = 0,
    maxX: l = 0,
    maxY: c = 0
  } = t.score, u = r || 1, h = s > 0 ? i / s : n / u, f = e === "stock" ? 0.65 : 0.35, d = 1 - f;
  let p = h * f + a * d;
  const w = e === "stock" && o === 0 || n === r;
  if (w && (p += 0.15), e === "stock" && w && t.stock) {
    const m = t.cutPreference, S = t.stock, g = m === "l" ? c : l, x = m === "l" ? S.w : S.l;
    if (x > 0 && g > 0) {
      const y = 1 - g / x;
      p += y * 0.1;
    }
  }
  return p;
}
function pi(t, e) {
  if (F([() => R(t.score).to.exist, () => R(e.score).to.exist]), !t.score || !e.score) return 0;
  const n = t.score.totalShapesPlaced === t.score.stockAvailableShapes, i = e.score.totalShapesPlaced === e.score.stockAvailableShapes, r = t.score.maxY || 1, s = e.score.maxY || 1, o = t.score.totalShapesPlaced || 1, a = e.score.totalShapesPlaced || 1, l = r / o, c = s / a;
  if (n && !i) {
    const f = c < l * 0.5, d = s < r * 0.5;
    return f && d ? 1 : -1;
  }
  if (i && !n) {
    const f = l < c * 0.5, d = r < s * 0.5;
    return f && d ? -1 : 1;
  }
  const u = Oe(t, "strip"), h = Oe(e, "strip");
  return u > h ? -1 : h > u ? 1 : 0;
}
function Vr(t, e) {
  return t.score[this.config.successMetric] > e.score[this.config.successMetric] ? -1 : t.score[this.config.successMetric] < e.score[this.config.successMetric] ? 1 : t.score.firstShapeFill > e.score.firstShapeFill ? -1 : t.score.firstShapeFill < e.score.firstShapeFill ? 1 : t.score.firstRowLength > e.score.firstRowLength ? -1 : t.score.firstRowLength < e.score.firstRowLength ? 1 : t.score.totalShapeScore > e.score.totalShapeScore ? -1 : t.score.totalShapeScore < e.score.totalShapeScore ? 1 : 0;
}
function ys(t, e) {
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
function jr(t, e) {
  return t.score.efficiency > e.score.efficiency ? -1 : t.score.efficiency < e.score.efficiency ? 1 : t.type !== "evo" && e.type === "evo" ? -1 : t.type === "evo" && e.type !== "evo" ? 1 : t.shapes?.length < e.shapes?.length ? -1 : t.shapes?.length > e.shapes?.length ? 1 : t.score.totalShapeScore > e.score.totalShapeScore ? -1 : t.score.totalShapeScore < e.score.totalShapeScore ? 1 : Et.ID(t.stock, e.stock);
}
function Ur(t, e) {
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
  const r = ys(t, e);
  return r !== 0 ? r : t.score.firstShapeArea > e.score.firstShapeArea ? -1 : t.score.firstShapeArea < e.score.firstShapeArea ? 1 : Et.ID(t.stock, e.stock);
}
function _r(t, e) {
  const n = t.score?.totalUnplacedShapes, i = e.score?.totalUnplacedShapes;
  if (t.stock.id !== e.stock.id && (n === 0 || i === 0) && !(n === 0 && i === 0)) {
    const s = n === 0 ? t : e, o = n === 0 ? e : t, a = s.stock, l = o.stock, c = a.area - s.score.totalShapeArea, u = l.area;
    return s.score.totalShapeArea - o.score.totalShapeArea < u && u < c ? l.id === t.stock.id ? -1 : 1 : l.id === t.stock.id ? 1 : -1;
  }
  if (t.score[this.config.successMetric] > e.score[this.config.successMetric])
    return -1;
  if (t.score[this.config.successMetric] < e.score[this.config.successMetric])
    return 1;
  const r = ys(t, e);
  return r !== 0 ? r : t.type !== "evo" && e.type === "evo" ? -1 : t.type === "evo" && e.type !== "evo" ? 1 : t.score.firstShapeArea > e.score.firstShapeArea ? -1 : t.score.firstShapeArea < e.score.firstShapeArea ? 1 : t.score.totalShapeScore > e.score.totalShapeScore ? -1 : t.score.totalShapeScore < e.score.totalShapeScore ? 1 : Et.ID(t.stock, e.stock);
}
function Ss(t) {
  if (!t) return t;
  const e = { ...t };
  return t.stock && (e.stock = t.stock), t.resultKey !== "bestPartialResult" && t.firstShape && "toData" in t.firstShape && (e.firstShape = t.firstShape.toData(Qt.Compressed)), t.shapes?.length && (e.shapes = t.shapes.map((n) => n && "toData" in n ? n.toData(Qt.Compressed) : n)), "stripShapes" in t && t.stripShapes?.length && (e.stripShapes = t.stripShapes.map((n) => n && "toData" in n ? n.toData(Qt.Compressed) : n)), "root" in t && t.root && "toData" in t.root && (e.root = t.root.toData(Qt.Compressed)), "container" in t && t.container && "toData" in t.container && (nt(t.container) ? e.container = t.container : e.container = t.container.toData(Qt.Compressed)), e;
}
function Dn(t, e) {
  return t?.stock ? nt(t.stock) ? t.stock : e.find((n) => n.autoId === t.stock.autoId) || null : null;
}
async function mt(t, e = null) {
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
  if (At()) {
    const o = t.score.efficiency, a = X(r) ? `${r.id}: [${r?.shapes?.map((c) => c.parentId).join(", ")}]` : r?.id, l = [
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
      ...t.container && st(t.container) ? [{
        property: "Segment ID",
        value: t.container.id
      }] : [],
      ...t.container && st(t.container) ? [{
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
        value: t?.shapes?.map((c) => c.id).join() ?? "N/A"
      }
    ];
    A("results", `Recording ${n}`, null, l);
  }
  let s = t;
  if (i && (s = Zr.call(this, [t, i], e || t.stock.cutType, t.stock?.saw?.stockType), s || (A("results", "WARNING: findWinner returned undefined, using current result as winner"), s = t), A("results", `${s.type} winner for stock ${s.stock.id} eff. ${s.score.efficiency}, firstShape [${r?.id || "N/A"}], rot ${r?.rot || "N/A"}, batch ${s?.stripShapeBatch ?? "N/A"}`)), !i || !s?.processed) {
    t.processed = !0;
    const o = Ss(s);
    this[n] = o;
  }
  Kr(s.shapes, s.stock);
}
function Kr(t, e) {
  if (!t?.length) return;
  const n = t.filter((i) => X(i) && i.type !== "user");
  F([
    () => R(n.every((i) => X(i))).toBe(!0),
    () => R(n.every((i) => i.type !== "user")).toBe(!0)
  ], "expandTemporaryGroups: All filtered groups should be temporary (non-user) groups");
  for (const i of n) {
    const r = i.shapes || [], s = i.type;
    if (i.added)
      try {
        i.placeMyShapes(e), F([
          () => R(r.every((o) => o.group?.addedAsGroup === i)).toBe(!0)
        ], `expandTemporaryGroups: All children of ${s} group should have addedAsGroup reference`);
      } catch (o) {
        A("errors", `Error placing shapes for temporary group ${i.id} during expansion: ${o.message}`);
      }
    i.destroy(), F([
      () => R(r.every((o) => o.group?.reference === null || o.group?.reference === void 0)).toBe(!0),
      () => R(r.every((o) => o.group?.inGroup === !1)).toBe(!0)
    ], `expandTemporaryGroups: Children of ${s} group should be released after destroy`);
  }
}
function ue({
  bestResult: t,
  shapeList: e,
  relevantStock: n = [],
  stockList: i = [],
  resetShapes: r = null,
  groupList: s = null
}) {
  A("results", `updating shapes from ${t.resultKey} / ${t.type} - stock ${t.stock.id}, FS: ${t.firstShape.id}`), n.length && n.filter((u) => u.autoId !== t?.stock?.autoId).forEach((u) => {
    const h = e.filter((f) => f.added && f?.stock?.autoId === u.autoId);
    h.length && (r ? r(h, !1, !0, !1) : h.forEach((f) => {
      f.added = !1, f.reset();
    }));
  });
  const o = [];
  let a = i.length ? i.find((u) => u.autoId === t.stock?.autoId) : null;
  if (a && t.stock && t.stock.used && (a.used = !0), !a && t.stock && (a = t.stock, a.saw && !se(a.saw))) {
    A("results", `⚠️  Found serialized saw in bestResult.stock ${a.autoId}, attempting to restore from stockList`);
    const u = i.find((h) => h.autoId === a.autoId || h.parentId === a.parentId && se(h.saw));
    u && se(u.saw) ? (A("results", `✅ Restored live saw instance from stock ${u.autoId}`), a.saw = u.saw) : A("results", `❌ Could not restore live saw instance for stock ${a.autoId}`);
  }
  a || (a = t.stock);
  for (const u of t.shapes)
    if (Ue(u) || _s(u)) {
      const h = e.find((f) => f.autoId === u.autoId);
      if (!h) {
        At() && (console.warn(`[updateShapeListFromBestResult] Shape ${u.autoId || u.id} from result not found in shapeList!`), console.warn(`  Available autoIds in shapeList: ${e.slice(0, 5).map((f) => f.autoId).join(", ")}...`));
        continue;
      }
      if (At() && (_e(h) || X(h) || console.warn(`Shape ${u.autoId} in shapeList is not a live instance!`)), rt(h)) {
        const { shapes: f, ...d } = u;
        h.update({ ...d, validationMode: "none" });
      } else
        h.update({ ...u, validationMode: "none" });
      _e(h) && u.group && u.group.inGroup !== void 0 && (h.group.inGroup = u.group.inGroup), h.stock = a, o.push(h);
    }
  F([
    () => R(t.shapes.every((u) => {
      if (!Ue(u)) return !0;
      const h = e.find((f) => f.autoId === u.autoId);
      return !(!h || !h.added || h.x !== u.x || h.y !== u.y || h.l !== u.l || h.w !== u.w);
    }), "best shape not found, not added, or not correctly updated").to.be.true
  ]), At() && (o.every((h) => e.find((f) => f === h)) || console.warn("Some updated shapes are not exact references from shapeList - possible instance copying!")), Gi({
    shapes: o
  }, "updateShapeListFromBestResult");
  let l = [];
  const c = t.shapes.filter((u) => Ks(u));
  if (A("results", `Best result contains ${t.shapes.length} total items`), A("results", `Found ${c.length} serialized groups to recreate:`), c.forEach((u) => {
    A("results", `  - Group ${u.id}: type=${u.type}, shapes=${u.shapes?.length || 0}, added=${u.added}, x=${u.x}, y=${u.y}`);
  }), c.length > 0 && (A("results", `Recreating ${c.length} groups from bestResult`), l = Qs(c, e, a), A("results", `Successfully recreated ${l.length} groups:`), l.forEach((u) => {
    A("results", `  - Group ${u.id}: type=${u.type}, shapes=${u.shapes?.length || 0}, added=${u.added}, x=${u.x}, y=${u.y}`);
  }), l.forEach((u) => {
    u.shapes && Array.isArray(u.shapes) && (u.shapes.forEach((f) => {
      Z(f) && (f.group.reference = u, f.group.inGroup = !0, u.added && (f.group.addedAsGroup = u));
    }), F([
      () => R(u.shapes.every((f) => !Z(f) || f.group?.reference === u)).toBe(!0)
    ], `updateShapeListFromBestResult: All children of group ${u.id} (type=${u.type}) should have correct reference`), u.added && F([
      () => R(u.shapes.every((f) => !Z(f) || f.group?.addedAsGroup === u)).toBe(!0),
      () => R(u.shapes.every((f) => !Z(f) || typeof f.group?.addedAsGroup != "string")).toBe(!0)
    ], `updateShapeListFromBestResult: addedAsGroup should be Group reference for group ${u.id} (type=${u.type})`));
    const h = u.added && typeof u.placeMyShapes == "function" && u.type !== "position";
    if (u.added && u.type === "position" && F([
      () => R(h).toBe(!1)
    ], `updateShapeListFromBestResult: Position group ${u.id} should NOT call placeMyShapes`), h)
      try {
        u.placeMyShapes(a);
      } catch (f) {
        throw console.error("[ERROR] placeMyShapes failed for group " + u.id + ":", f.message), console.error(`  Group details: type=${u.type}, x=${u.x}, y=${u.y}, rot=${u.rot}`), console.error("  Child shapes:"), u.shapes?.forEach((d) => {
          console.error(`    ${d.id}: added=${d.added}, x=${d.x}, y=${d.y}, rot=${d.rot}, l=${d.l}, w=${d.w}`);
        }), f;
      }
    At() && (u.shapes?.forEach((f) => {
      const d = e.find((p) => p.autoId === f.autoId);
      d !== f ? (console.error(`[ERROR] Group ${u.id} child shape ${f.id} is NOT the same instance as in shapeList!`), console.error(`  Group shape: added=${f.added}, x=${f.x}, y=${f.y}`), console.error(`  shapeList shape: added=${d?.added}, x=${d?.x}, y=${d?.y}`)) : f.group?.reference !== u && (console.error(`[ERROR] Group ${u.id} child shape ${f.id} has incorrect group.reference!`), console.error(`  Expected: ${u.id}, Got: ${f.group?.reference?.id || "null"}`));
    }), A("results", `Successfully recreated, placed, and linked ${l.length} groups`));
  })), s && l.length)
    for (const u of l)
      s.some((h) => h.autoId === u.autoId) || s.push(u);
  return { updatedShapes: o, groups: l };
}
async function xe(t, e, n, i = null) {
  if (F([
    () => R(nt(e)).to.be.true,
    () => {
      if (n.length) return R(Z(n[0]) || rt(n[0])).to.be.true;
    }
  ]), F([() => R(gt(n), "duplicates found").to.be.false]), ss(), i || (i = xs.call(this, e, n)), !i) throw new Error("no root segment created");
  if (this.config.sample.enable) {
    if (await hn.call(
      this,
      t,
      e,
      i
    ), t.secondRun || !this.bestResult) return;
    ue({
      bestResult: this.bestResult,
      shapeList: this.shapeList,
      stockList: this.stockList,
      resetShapes: this.resetShapes?.bind(this),
      groupList: this.groupList
    }), await gi.call(this, {
      options: t,
      shapes: n,
      stock: e
      // root
    }), dn.call(this, n, i);
  }
  if (this.config.guillotine.stripShapes.allocation && n.length > 1) {
    if (await fn.call(this, t, e, n, i), !this.bestResult) return;
    ue({
      bestResult: this.bestResult,
      shapeList: this.shapeList,
      stockList: this.stockList,
      resetShapes: this.resetShapes?.bind(this),
      groupList: this.groupList
    }), await gi.call(this, {
      options: t,
      shapes: n,
      stock: e,
      root: i
    });
  }
}
async function gi({
  options: t,
  shapes: e,
  stock: n,
  root: i
}) {
  const r = $t(this.shapeList, n);
  la.call(
    this,
    Dn(this.bestResult, this.stockList),
    r
  ) && await Qr.call(
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
    const l = o.get(a.id);
    l && (a.x = l.x, a.y = l.y, a.placementOrder = l.placementOrder);
  });
}
async function mi(t, e, n) {
  F([
    () => R(nt(e)).to.be.true,
    () => {
      if (n.length) return R(Z(n[0])).to.be.true;
    }
  ]), e.saw.cutPreference = "l";
  const i = xs.call(this, e, n);
  if (this.config.sample.enable && (await hn.call(
    this,
    t,
    e,
    i
  ), dn.call(this, n, i)), this.config.guillotine.stripShapes.allocation && n.length > 1 && (await fn.call(
    this,
    t,
    e,
    n,
    i
  ), dn.call(this, n, i)), e.saw.cutPreference = "w", this.config.sample.enable && await hn.call(
    this,
    t,
    e,
    i
  ), this.config.guillotine.stripShapes.allocation && n.length > 1 && await fn.call(
    this,
    t,
    e,
    n,
    i
  ), !this.bestResult) return !1;
  e.saw.cutPreference = this.bestResult.cutPreference;
}
async function fn(t, e, n, i) {
  if (!this.config.guillotine.stripShapes.allocation || (F([
    () => R(nt(e)).to.be.true,
    () => R(n.length ? Z(n[0]) : !0).to.be.true,
    () => R(st(i)).to.be.true
  ]), e?.saw?.stockType === "roll")) return !1;
  const r = ga.call(this, i, this.uniqueStock, this.stockList);
  if (r === !1) return !1;
  for (let s = 0; s < r; s++)
    this.resetShapes(n), i.shapes = n, F([
      () => R(gt(i.shapes, `root segment batch ${s} stock ${e.id}`), "duplicates found in root segment").to.be.false,
      () => R(n.length).to.equal(i.shapes.length),
      () => R(n.some((o) => Re(o) || pt(o)), "groups exist in new strip shape batch calculation").to.be.false
    ]), A("guillotine", `running strip shape batch ${s} for stock ${e.id}`), await Gn.call(
      this,
      t,
      e,
      i,
      s
    ), F([() => R(gt(i.shapes), "duplicates found").to.be.false]);
  return !0;
}
async function hn(t, e, n) {
  A("guillotine", `running basic first shape sample for stock ${e.id}`), F([
    () => R(nt(e)).to.be.true,
    () => R(st(n)).to.be.true,
    () => R(n?.shapes?.length).to.be.greaterThan(0)
  ]), await Gn.call(this, t, e, n);
}
async function Gn(t, e, n, i = null, r = null, s = null) {
  if (F([
    () => R(nt(e)).to.be.true,
    () => R(st(n)).to.be.true,
    () => {
      if (r) return R(Z(r)).to.be.true;
      if (i !== null) return R(i).to.be.a("number");
      if (s !== null) return R([0, 1].includes(s)).to.be.true;
    }
  ]), i === null)
    await re.call(
      this,
      t,
      e,
      n,
      r,
      s,
      null
    );
  else if (await re.call(
    this,
    t,
    e,
    n,
    void 0,
    void 0,
    i
  ) === !1) return !1;
}
async function Qr(t, e, n, i, r) {
  F([
    () => R(nt(i)).to.be.true,
    () => {
      if (n.length) return R(Z(n[0]) || rt(n[0])).to.be.true;
      if (e.length) return R(Z(e[0] || rt(n[0]))).to.be.true;
    }
  ]), A("guillotine", `running refinement for stock ${i.id}`);
  try {
    await ta.call(
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
async function ta(t, e, n, i, r) {
  if (F([
    () => R(nt(i)).to.be.true,
    () => {
      if (n.length) return R(Z(n[0]) || rt(n[0])).to.be.true;
      if (e.length) return R(Z(e[0]) || rt(n[0])).to.be.true;
    }
  ]), !this.config.guillotine.secondPass || !this.saw?.guillotineOptions?.headCuts) return !1;
  A("guillotine", `running second pass for stock ${i.id}`), await ca.call(this, i, n, e, r);
  const s = $t(n, i), o = Mt.call(
    this,
    this.shapeList,
    i
  );
  o && i.id === Dn(this.bestResult, this.stockList)?.id && s.length - e.length > 0 && (A("guillotine", `runSecondPass added ${s.length - e.length} shape(s) to stock ${i.id}, new total ${s.length}`), o.secondPass = !0, await mt.call(this, o));
}
function dn(t, e) {
  const n = [];
  if (this.groupList && this.groupList.length > 0)
    for (const s of this.groupList)
      s.added ? n.push(s) : s.reset();
  for (let s = t.length; s--; ) {
    const o = t[s];
    X(o) && t.splice(s, 1), o.reset();
  }
  this.groupList && (this.groupList.length = 0, this.groupList.push(...n)), this.counters.placement = 0, this.bestPartialResult = null, ss(), e.reset(t);
  const i = e.shapes.filter((s) => Z(s)), r = e.shapes.filter((s) => X(s));
  A("reset", "[RESET] RESET ROOT SEGMENT BETWEEN CALCULATIONS", null, [
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
async function ea(t, e, n, i) {
  F([
    () => R(nt(e)).to.be.true,
    () => R(st(n)).to.be.true
  ]);
  const r = Gt(n.shapes, !1, !0), s = this.stockList.findIndex((u) => u.id === e.id);
  let o = null;
  s > 0 && (o = this.stockList[s - 1]);
  const a = V(e.cutPreference);
  let l = [], c = [];
  if (n.l === e.l && n.w === e.w ? s > 0 && (l = $t(this.shapeList, o).filter((u) => ln(u))) : c = $t(this.shapeList, e).filter((u) => ln(u)), l?.length || c?.length) {
    const u = a === "l" ? "x" : "y";
    l.sort((d, p) => d[u] - p[u]), c.sort((d, p) => d[u] - p[u]);
    const h = l.length ? l[l.length - 1] : c[c.length - 1], f = r.filter((d) => h[a] === d.w || h[a] === d.l);
    if (f?.length) {
      for (let d = 0; d < f.length; d++) {
        const p = f[d];
        if (d > 1 && f[d - 1].isIdentical(f[d]))
          continue;
        Pt(p, 0, e);
        let w;
        h[a] === p[a] ? w = 0 : w = 1;
        const m = await bs.call(
          this,
          t,
          p,
          n,
          w
        );
        if (m?.length)
          for (let S = m.length; S--; ) {
            const g = m[S];
            await mt.call(this, g, "strip");
          }
        this.resetShapes(n.shapes);
      }
      return !(!i || i?.length);
    }
  }
  return !1;
}
async function re(t, e, n, i = null, r = null, s = null) {
  if (n.type === "root" && !t?.secondPass && (e.used = !1, this.counters.placement = 0), !n.shapes?.length) return;
  F([
    () => R(nt(e)).to.be.true,
    () => R(st(n)).to.be.true,
    () => R(i ? Z(i) : !0).to.be.true,
    () => R(i ? [0, 1].includes(r) : !0).to.be.true,
    () => R(s !== null ? typeof s == "number" : !0).to.be.true,
    () => R(s !== null ? i === null : !0).to.be.true,
    () => R(r !== null ? [0, 1].includes(r) : !0).to.be.true,
    () => R(n.shapes.every((f) => !Re(f), "no segment groups should exist at this point")).to.be.true
  ]);
  const o = typeof s == "number";
  let a = !0;
  if (e.saw.guillotineOptions?.strategy === "time" && (a = !await ea.call(
    this,
    t,
    e,
    n
  )), a)
    if (oe(n))
      if (o) {
        let f = pa(n.shapes, s, e);
        if (f.sort((S, g) => S.guillotineState.getStripShapeBatchData(s).order - g.guillotineState.getStripShapeBatchData(s).order), A("guillotine", () => `strip shape candidates ${f.map((S) => S.id).join("|")}`), F([
          () => R(f.find((S) => S.guillotineState.getStripShapeBatchData(s).stockId !== n.getStock.autoId), "found strip shapes in allocatedStripShape from another stock").to.be.undefined,
          () => R(gt(f), "duplicate shapes found in stripShapeCandidates").to.false,
          () => R(f.find((S) => X(S) && !pt(S)), "found groups in allocatedStripShape").to.be.undefined,
          () => R(n.shapes.filter((S) => S.added).length === 0, `added shapes found in segment ${n.id}`).to.be.true
        ]), !f.length)
          return re.call(
            this,
            t,
            e,
            n
          );
        const d = V(e.cutPreference);
        f = f.filter((S) => {
          if (X(S)) return !0;
          const g = Si(S, s, e, !1);
          return qt(S, g, e) ? (Si(S, s, e, !0), to(S, g, e) ? (F([
            () => R(S.rot, `candidates ${S.id} rotation (${S.rot}) incorrect for batch (${g})`).equal(g)
          ]), !0) : !1) : (A("guillotine", () => `cannot rotate strip shape ${S.id}, ${S.l}x${S.w} to ${g} on stock ${e.id}`, [S.getStripShapeBatchData(s)]), Vt(S, e, g), !1);
        });
        const p = e.saw.guillotineOptions, w = p?.limitStripDimensions !== !1 ? Oi(
          n.shapes.filter((S) => !S.added && Z(S)),
          d,
          n[d]
        ) : null;
        if (p?.limitStripDimensions === !1 && f.length > 1) {
          const S = n.shapes.filter((g) => pt(g) && g.shapes.some((x) => f.includes(x)));
          S.length > 0 ? (A("guillotine", () => `Reusing ${S.length} existing strip groups`), f = S) : f = ma.call(this, s, d, e, n, f);
        }
        if (!f.length)
          return re.call(
            this,
            t,
            e,
            n
          );
        f.sort(function(g, x) {
          if (w !== null) {
            const b = g[d] <= w ? 0 : 1, C = x[d] <= w ? 0 : 1;
            if (b !== C) return b - C;
          }
          const y = g.guillotineState?.getStripShapeBatchData?.(s)?.order, I = x.guillotineState?.getStripShapeBatchData?.(s)?.order;
          return y != null && I != null && y !== I ? y - I : x[d] !== g[d] ? x[d] - g[d] : x[e.cutPreference] !== g[e.cutPreference] ? x[e.cutPreference] - g[e.cutPreference] : g.autoId.localeCompare(x.autoId, void 0, { numeric: !0 });
        }), i = f[0], A("guillotine", () => `firstShape for segment ${n.id} is ${i.id}`);
        const m = i.guillotineState.getStripShapeBatchData(s);
        if (!m) throw new Error("no fs batch found");
        F([() => R(m.stockId).equal(n.getStock.autoId)]), i.firstShape.isFirstShape = !0, r = m.rot, F([() => R([0, 1].includes(m.rot)).to.be.true]), await pn.call(this, {
          options: t,
          fs: i,
          fsRotation: r,
          segment: n,
          stripShapeBatch: s,
          stripShapeCandidates: f
        });
      } else
        i && r !== null ? await pn.call(this, {
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
  const c = this.bestPartialResult.firstShape;
  ue({
    bestResult: this.bestPartialResult,
    shapeList: this.shapeList,
    stockList: this.stockList,
    resetShapes: this.resetShapes?.bind(this),
    groupList: this.groupList
  }), Er(n, !0), Li(c) && n.shapes.push(c), n.shapes = Bi(n.shapes, c), F([
    () => R(n.shapes.filter((f) => X(f)).every((f) => pt(f) || rt(f)), "non-strip/user groups found in segment after removeGroupsFromSegment").to.be.true,
    () => Di(n.shapes, "segmentCalculations after removeGroupsFromSegment"),
    () => R(n.shapes.every((f) => !Re(f) || rt(f)), "found non-user groups in segment after removal").to.be.true
  ]);
  let u = null;
  if (this.config.guillotine.strips.duplicateStrips && s !== null && this.bestPartialResult?.container) {
    const f = this.bestPartialResult.container, d = this.shapeList.filter((p) => p.added && p.stock?.id === e.id && E.greaterThanOrEqualTo(p.x, f.x) && E.lessThanOrEqualTo(p.x + p.l, f.x + f.l) && E.greaterThanOrEqualTo(p.y, f.y) && E.lessThanOrEqualTo(p.y + p.w, f.y + f.w));
    d.length && (u = {
      segment: f,
      firstShape: c,
      shapes: d
    });
  }
  const h = ft(this.shapeList);
  if (this.bestPartialResult = null, h.length || this.config.secondRun.enabled) {
    const f = oa.call(
      this,
      n,
      c
    );
    if (f?.length) {
      A("cuts", () => `Created ${f.length} new segments, unplaced shapes: ${h.length}`);
      for (const d of f) {
        if (this.bestPartialResult = null, !d.shapes.length) {
          d.offcut = !0;
          continue;
        }
        const p = o && !oe(d);
        if (d.shapes = d.shapes.filter((w) => !w.added && (!p || !w.guillotineState.isInStripShapeBatch(s))), u && oe(d) && !X(u.firstShape)) {
          const w = ra.call(this, u, d, e, s);
          if (w) {
            A("guillotine", () => `Duplicated strip in segment ${d.id}`), u = w;
            continue;
          }
        }
        await re.call(
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
    for (const m of this.shapeList) f.set(m.autoId, m);
    n.shapes = n.shapes.map((m) => X(m) ? m : f.get(m.autoId) || m);
    const d = Mt.call(
      this,
      this.shapeList,
      e,
      c
    );
    if (!d) throw new Error("Unable to score stock");
    if (d.stripShapeBatch = s, d.root = n, !d.score.efficiency) return;
    const p = this.shapeList.filter((m) => !m.group?.inGroup && !X(m) && m.stock?.id === e.id), w = Xi(p);
    w.length > 0 && A("errors", `Found ${w.length} overlapping shapes on stock ${e.id}`), s !== null ? d.type = "allocated strips" : d.type = "basic", await mt.call(this, d);
  }
}
async function pn({
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
    d ? (e.reset(), F([() => R(i.shapes.filter((w) => w.autoId === e.autoId).length, "too many first shapes in segmentShapes").to.equal(1)]), p = Mt.call(
      this,
      i.shapes,
      f,
      e
    )) : p = Mt.call(
      this,
      i.shapes,
      i,
      e
    ), p.score.totalShapesPlaced && await mt.call(this, p, "strip");
  };
  if (i.shapes = na.call(this, i, e, r), ua.call(
    this,
    e,
    i,
    i.getStock,
    n
  ) === !1)
    return !1;
  e.placementOrder = this.counters.placement++, F([
    () => R(st(i)).to.be.true,
    () => R(r !== null ? typeof r == "number" : !0).to.be.true,
    () => R(n !== null ? [0, 1].includes(n) : !0).to.be.true
  ]), e && F([
    //Accept all group types (segment, user, strip) as well as shapes
    () => R(Z(e) || X(e), `first shape ${e.id} is not a shape or group`).to.be.true,
    () => R(e.added, `first shape ${e.id} added too soon`).to.be.true,
    //Only check rotation for shapes, not groups (groups cannot be rotated)
    () => R(X(e) || e.rot === n, `first shape ${e.id} rotation (${e.rot}) incorrect for (${n})`).to.be.true,
    () => R(E.lessThanOrEqualTo(e.l, i.l), `first shape ${e.id} longer than segment ${e.l} > ${i.l}`).to.be.true,
    () => R(E.lessThanOrEqualTo(e.w, i.w), `first shape ${e.id} wider than segment ${e.w} > ${i.w}`).to.be.true
  ]);
  const l = i.getStock, { success: c, firstShapeSegment: u, isHeadCut: h } = await ia.call(this, {
    fs: e,
    segment: i,
    stock: l,
    stripShapeBatch: r,
    stripShapeCandidates: s,
    options: t
  });
  return !(c === !1 && (await o(u), !h));
}
function na(t, e, n) {
  if (gt(t.shapes)) {
    const o = /* @__PURE__ */ new Set();
    t.shapes = t.shapes.filter((a) => o.has(a.autoId) ? !1 : (o.add(a.autoId), !0));
  }
  const r = Be(t), s = t.shapes.filter((o) => o.willItFit(t, null, r) ? !(t.type !== "root" && typeof n == "number" && o.getStripShapeBatchData(n) !== !1 && e.autoId !== o.autoId) : (A("cuts", () => `  Excluding ${o.autoId}: doesn't fit in segment`), !1));
  return A("cuts", () => `  Result: ${s.length} shapes selected for segment`), this.resetShapes(s, {
    keepScores: !1,
    removeGroups: !1,
    keepGuillotineData: !0,
    keepFirstShapeSampleRotations: !0
  }), s;
}
async function ia({
  fs: t,
  segment: e,
  stock: n,
  stripShapeBatch: i,
  stripShapeCandidates: r,
  forceNoHeadCut: s,
  options: o
}) {
  A("guillotine", () => `[createFirstShapeSegmentsPlaceShapesAndScore] Starting for segment ${e.id}, first shape ${t.id}`);
  const { offcuts: a, firstShapeSegment: l, isHeadCut: c, success: u } = await sa.call(this, { fs: t, segment: e, stock: n, stripShapeBatch: i, stripShapeCandidates: r, forceNoHeadCut: s, options: o });
  if (F([() => R(a.length, "too many offcuts generated").to.be.lessThanOrEqual(2)]), u === !1)
    return { success: !1, firstShapeSegment: l, isHeadCut: c };
  if (o.secondPass) {
    const { cuts: g } = vn.call(
      this,
      {
        container: l,
        shapes: [t],
        forceNoHeadCut: s
      }
    ), { allShapesCut: x } = is([t], g, l);
    if (!x) return { success: !1, firstShapeSegment: l, isHeadCut: c };
  }
  if (!a.length) {
    const g = Mt.call(
      this,
      e.shapes,
      l,
      t
    );
    return await mt.call(this, g, "strip"), { success: !0, firstShapeSegment: l, isHeadCut: c };
  }
  const h = l.cutDirection, f = a.find((g) => E.equalTo(g[h], l[h]));
  if (!f || f.l <= 0 || f.w <= 0) {
    A("cuts", () => `No next segment. Remaining shapes: ${e.shapes.length}`), Z(t) && !e.shapes.find((x) => x.autoId === t.autoId) && e.shapes.unshift(t), e.shapes.length > 1 && await xn.call(
      this,
      e.shapes,
      t,
      l || e
    );
    const g = Mt.call(
      this,
      e.shapes,
      l,
      t
    );
    return await mt.call(this, g, "strip"), { success: !0, firstShapeSegment: l, isHeadCut: c };
  }
  const d = l.cutDirection;
  (e.type === "root" || e.type === "firstShape") && r.length === 1 && (f[d] = e[d], l[d] = e[d]), F([() => R(e.shapes.filter((g) => g.autoId === t.autoId).length, "too many first shapes in segmentShapes").to.equal(1)]), await xn.call(
    this,
    e.shapes,
    t,
    l || e
  );
  const p = Mt.call(
    this,
    e.shapes,
    l,
    t
  );
  await mt.call(this, p, "strip");
  const w = e.type === "root" ? e.shapes.filter((g) => pt(g)) : [];
  this.resetShapes(e.shapes, {
    keepScores: !1,
    removeGroups: !0,
    keepGuillotineData: !1,
    keepFirstShapeSampleRotations: !0
  });
  const m = new Set(e.shapes.map((g) => g.autoId)), S = w.filter((g) => !m.has(g.autoId));
  return e.shapes.push(...S), { success: !0, firstShapeSegment: l, isHeadCut: c };
}
async function sa({ fs: t, segment: e, stock: n, segmentShapes: i, stripShapeBatch: r, forceNoHeadCut: s, options: o }) {
  let a = !0, l, c = !1;
  !s && us.call(this, e) && (c = rs.call(this, n.saw, t, e), e.hasHeadCut = c);
  try {
    l = ha.call(
      this,
      t,
      c,
      e,
      n,
      i
    );
  } catch (f) {
    throw A("errors", () => `firstShapeSegment error, fs: ${t.autoId}, 'ssg: ${r}: ${f.message}`), new Error(`issue with createFirstShapeSegment ${f.message}`);
  }
  if (F([() => R(l[l.cutDirection]).to.equal(t[l.cutDirection])]), o?.secondPass) {
    const f = this.shapeList.filter((d) => d.added && d.stock.autoId === n.autoId && d.autoId !== t.autoId);
    if (ke(l, f, n))
      return a = !1, { firstShapeSegment: l, offcuts: [], success: a };
  }
  const u = e.cutDirection, { offcuts: h } = vn.call(
    this,
    {
      container: e,
      shapes: e.shapes,
      forceNoHeadCut: s
    }
  );
  return e.cutDirection = u, { firstShapeSegment: l, offcuts: h, isHeadCut: c, success: a };
}
async function Je(t, e, n = !1) {
  if (!this.config.sample.enable && n === !1) return !1;
  F([
    () => R(e.shapes.every((a) => Z(a) || rt(a)), "segment shapes contains groups").to.be.true
  ]);
  let i = [];
  if (e.shapes.length > 1) {
    const a = V(e.cutDirection), l = e[a], c = e.parentSegmentGroupShapes || /* @__PURE__ */ new Set(), u = e.shapes.filter((p) => !c.has(p.id)), h = eo(u, l * 0.05), f = h.reduce((p, w) => p + w.area, 0), d = e.getStock.area;
    if (this.config?.groups?.guillotine?.firstShape && h.length >= 2 && f >= d * 0.8) {
      i = Wi({
        shapes: h,
        container: e,
        // Use segment as container
        targetSize: l,
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
      i = i.filter((w) => {
        const m = `${w.l}-${w.w}`;
        return p.has(m) ? !1 : (p.add(m), !0);
      }), A("groups", () => `[FIRST SHAPE GROUPS] created ${i.map((w) => w.id).join()} for segment ${e.id} `);
    }
  }
  let r = null;
  t.secondPass && (r = $t(
    this.shapeList,
    e.getStock
  ));
  const s = [...e.shapes], o = ws.call(
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
    const l = o[a];
    if (A("guillotine", () => `[FIRST SHAPE] attempting first shape candidate ${l.id} for segment ${e.id}`), a > 1 && o[a - 1].isSameSize(o[a])) {
      l.firstShape.sampleRotations = [];
      continue;
    }
    this.resetShapes(s, {
      removeGroups: !1,
      keepFirstShapeSampleRotations: !0
    }), l.firstShape.isFirstShape = !0, Li(l) && (e.shapes.find((h) => h.autoId === l.autoId) || e.shapes.push(l), e.shapes = Bi(e.shapes, l)), F([
      () => R(gt(e.shapes, `segment ${e.id} before running fs tests for ${l.id}`), "duplicates found in segment").to.be.false,
      () => R(gt(e.shapes), "duplicates found").to.be.false
    ]), await bs.call(
      this,
      t,
      l,
      e
    ), F([() => R(gt(e.shapes), "duplicates found").to.be.false]), l.firstShape.isFirstShape = !1, l.firstShape.sampleRotations = [], e.shapes = s, this.resetShapes(e.shapes, {
      removeGroups: !0,
      keepFirstShapeSampleRotations: !0
    });
    const c = e.shapes.filter((h) => Z(h)), u = e.shapes.filter((h) => X(h));
    A("reset", () => `[RESET] RESET SEGMENT ${e.id} BETWEEN FIRST SHAPE CANDIDATES: ${l.id}`, null, [
      {
        type: "Shapes",
        count: c.length,
        added: c.filter((h) => h.added).length,
        ids: c.map((h) => h.id).join(", ")
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
function xs(t, e) {
  return new vt({
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
function oa(t, e) {
  A("guillotine", () => `[SEG-CREATE] creating new segments for segment ${t.id}, stock ${t.stock.id} at (${t.x},${t.y}) ${t.l}x${t.w}, first shape ${e.id} at (${e.x},${e.y}) ${e.l}x${e.w}, cut direction ${t.cutDirection}`), X(e) && A("guillotine", () => `[SEG-CREATE] first shape ${e.id} is group with ${e.shapes?.length || 0} shapes`, [e.dimensions, e.coords]), F([
    () => R(Z(e) || X(e), "first shape is not a shape or group").to.be.true,
    () => R(st(t), "segment is not a segment class").to.be.true
  ]);
  const { offcuts: n } = vn.call(this, {
    container: t,
    shapes: t.shapes
  });
  if (!n.length) return;
  A("guillotine", () => `[SEG-CREATE] All new segments for segment ${t.id}:`, null, n.map((c) => ({ id: c.id, x: c.x, y: c.y, l: c.l, w: c.w, dir: c.cutDirection })));
  const i = t.cutDirection === "l" ? "y" : "x", r = V(t.cutPreference), s = n.filter((c) => c[i] < e[i] + e[r]), o = n.find((c) => c[i] >= e[i] + e[r]);
  if (o && (o.rowSegment = !0, s.push(o)), !s?.length) return;
  const a = Dt(i);
  s.sort((c, u) => c[i] < u[i] ? -1 : c[i] > u[i] ? 1 : c[a] < u[a] ? -1 : c[a] > u[a] ? 1 : 0);
  const l = t.shapes.filter((c) => !c.added);
  return s.forEach((c) => {
    const u = Be(c), h = l.filter((d) => Vt(d, c, null, u)), f = /* @__PURE__ */ new Set();
    c.shapes = h.filter((d) => f.has(d.autoId) ? !1 : (f.add(d.autoId), !0)), F([() => R(c.shapes.every((d) => !d.added), `added shapes in offcut ${c.autoId}`).to.be.true]);
  }), t.children = s, s;
}
function ra(t, e, n) {
  const { segment: i, shapes: r } = t;
  if (!r.length || !E.greaterThanOrEqualTo(e.l, i.l) || !E.greaterThanOrEqualTo(e.w, i.w))
    return null;
  const s = e.shapes.filter((p) => !p.added && Z(p));
  if (s.length < r.length) return null;
  const o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  for (const p of s) {
    const w = `${p.longSide}|${p.shortSide}|${p.material}`;
    let m = o.get(w);
    if (m || (m = [], o.set(w, m)), m.push(p), p.parentId) {
      let S = a.get(p.parentId);
      S || (S = [], a.set(p.parentId, S)), S.push(p);
    }
    if (p.identicalTo && Array.isArray(p.identicalTo))
      for (const S of p.identicalTo) {
        let g = l.get(S);
        g || (g = [], l.set(S, g)), g.push(p);
      }
  }
  const c = e.x - i.x, u = e.y - i.y, h = /* @__PURE__ */ new Set(), f = [];
  for (const p of r) {
    const w = /* @__PURE__ */ new Set(), m = `${p.longSide}|${p.shortSide}|${p.material}`, S = o.get(m);
    if (S)
      for (const y of S)
        h.has(y) || w.add(y);
    if (p.parentId) {
      const y = l.get(p.parentId);
      if (y)
        for (const b of y)
          h.has(b) || w.add(b);
      const I = a.get(p.parentId);
      if (I)
        for (const b of I)
          h.has(b) || w.add(b);
    }
    if (p.identicalTo && Array.isArray(p.identicalTo))
      for (const y of p.identicalTo) {
        const I = a.get(y);
        if (I)
          for (const b of I)
            h.has(b) || w.add(b);
      }
    const g = [];
    for (const y of w)
      y.isIdentical(p, !1) && y.longSide === p.longSide && y.shortSide === p.shortSide && y.material === p.material && g.push(y);
    let x = null;
    if (g.length === 1 ? x = g[0] : g.length > 1 && (x = g.find((y) => y.parentId === p.parentId) || g[0]), !x) return null;
    h.add(x), f.push({ source: p, target: x });
  }
  const d = [];
  for (const { source: p, target: w } of f)
    w.update({
      x: p.x + c,
      y: p.y + u,
      l: p.l,
      w: p.w,
      rot: p.rot,
      placementOrder: this.counters.placement++
    }), w.addToStock(n), d.push(w);
  return A("guillotine", () => `Strip duplicated: ${d.length} shapes placed in segment ${e.id} (offset x=${c}, y=${u})`), {
    segment: e,
    firstShape: t.firstShape,
    shapes: d
  };
}
function aa(t, e, n, i, r, s, o, a, l) {
  if (!e || e.length <= 1) return !0;
  try {
    e.sort((b, C) => b[o] - C[o]);
    let c = 0, u = -1 / 0;
    for (const b of e)
      b[o] > u + i && (c += b[a] + i, u = b[o] + b[a]);
    if (c > t[a])
      return console.warn("Preliminary check: shapes would not fit within stock after rearrangement"), !1;
    const h = [], f = i / 2;
    let d, p, w = !1, m = 0, S = 0, g = 0;
    const x = 3;
    for (const b of e) {
      if (!ln(b)) continue;
      w || (d = b[o], g = 0), p = b[o] + b[a];
      const C = b[o] + b[a] + f, $ = new le(
        r === "x" ? {
          x1: 0,
          x2: t[s],
          y1: C,
          y2: C
        } : {
          x1: C,
          x2: C,
          y1: 0,
          y2: t[s]
        }
      );
      if (bn($, t, n))
        if (w = !0, g++, g >= x)
          w = !1, console.warn(`Forced strip creation after ${x} consecutive collisions`);
        else
          continue;
      else
        w = !1, g = 0;
      const P = n.filter((v) => E.greaterThanOrEqualTo(v[o], d) && E.lessThan(v[o], p));
      if (!P.length) continue;
      const M = P.length > 0 ? P.reduce((v, D) => {
        const B = v[r] + v[s], k = D[r] + D[s];
        return E.equalTo(B, k) ? v[s] > D[s] ? v : D : B > k ? v : D;
      }) : P[0];
      if (!M) continue;
      const G = M[r] + M[s], O = P.length > 0 ? P.reduce((v, D) => {
        const B = v[o] + v[a], k = D[o] + D[a];
        return E.equalTo(B, k) ? v[a] > D[a] ? v : D : B > k ? v : D;
      }) : P[0];
      if (!O) continue;
      let N = O[o] + O[a];
      p > N && (N = p);
      const L = N - d;
      h.push({
        stripStartPoint: d,
        stripEndPoint: p,
        furthestPrimaryPoint: G,
        furthestOrderingPoint: N,
        shapesInThisRow: P,
        width: L
      });
    }
    if (!h.length)
      return console.warn("No valid strips found after analysis"), !0;
    const y = /* @__PURE__ */ new Map();
    h.forEach((b) => {
      b.shapesInThisRow.forEach((C) => {
        y.set(C.autoId, C[o]);
      });
    }), h.sort((b, C) => E.equalTo(b.furthestPrimaryPoint, C.furthestPrimaryPoint) ? C.width - b.width : C.furthestPrimaryPoint - b.furthestPrimaryPoint);
    let I = 0;
    for (const b of h)
      I += b.furthestOrderingPoint - b.stripStartPoint + i;
    if (I > t[a])
      return console.warn("Total arrangement would exceed stock dimensions"), !1;
    for (const b of h) {
      b.shapesInThisRow.sort((C, $) => C.placementOrder - $.placementOrder);
      for (let C = 0; C < b.shapesInThisRow.length; C++) {
        const $ = b.shapesInThisRow[C], P = $[o] - b.stripStartPoint, M = S + P;
        if (M + $[a] > t[a])
          return console.warn(`Shape ${$.id} would exceed stock boundaries after rearrangement`), yi(h, y, o), !1;
        const G = $[o];
        $[o] = M, $.placementOrder = C + m, Mn($) === 1 && E.equalTo($[r], 0) && De($, s), !E.equalTo(G, M) && l && (kr(l, $), un(l, $));
      }
      if (m += b.shapesInThisRow.length, S += b.furthestOrderingPoint - b.stripStartPoint + i, S > t[a])
        return console.warn("Rearrangement exceeds stock dimensions"), yi(h, y, o), !1;
    }
    return !0;
  } catch (c) {
    return console.error("Error during shape rearrangement:", c), !1;
  }
}
function yi(t, e, n) {
  t.forEach((i) => {
    i.shapesInThisRow.forEach((r) => {
      e.has(r.autoId) && (r[n] = e.get(r.autoId));
    });
  });
}
function la(t, e, n) {
  if (!this.config?.guillotine?.strips?.rearrange || t.saw.guillotineOptions?.strategy === "time") return !1;
  const r = t.bladeWidth;
  if (E.equalTo(r, 0) || r < 0)
    return console.warn("Invalid blade width for rearrangement"), !1;
  const s = $t(e, t);
  if (!s?.length) return !1;
  const o = t.cutPreference;
  if (o !== "l" && o !== "w")
    return console.warn("Invalid primary dimension:", o), !1;
  const a = o === "l" ? "x" : "y", l = s.filter(
    (f) => cn(f, 1) && E.equalTo(f[a], 0)
  );
  if (!l.length) return !1;
  const c = V(o), u = o === "l" ? "y" : "x";
  return l.reduce((f, d) => f + d[c], 0) > t[c] ? (console.warn("Total strip width exceeds stock dimensions"), !1) : aa(
    t,
    l,
    s,
    r,
    a,
    o,
    u,
    c,
    n
  );
}
async function ca(t, e, n, i) {
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
  if (E.equalTo(s, 0) || s < 0) {
    console.warn("Invalid blade width for corner squeeze");
    return;
  }
  const o = n.filter((f) => cn(f, 1));
  if (!o.length) {
    console.debug("No strip shapes found for corner squeeze");
    return;
  }
  const a = t.cutPreference;
  if (a !== "l" && a !== "w") {
    console.warn("Invalid primary dimension:", a);
    return;
  }
  const l = a === "l" ? "x" : "y", c = V(a), u = a === "l" ? "y" : "x";
  o.sort((f, d) => f[u] - d[u]);
  let h = 0;
  for (let f = 0; f < o.length; f++) {
    let d = function(v, D, B, k) {
      return v[D] + v[B] + k;
    }, p = function(v, D, B, k, T) {
      return T > 0 ? T - D[B] : v[k] - D[B];
    };
    const w = o[f], m = f > 0 ? $t(this.shapeList, t) : n, S = ft(e, t);
    if (!S.length) {
      console.debug("No remaining shapes to place, exiting corner squeeze");
      break;
    }
    const g = m.filter((v) => !cn(v, 0) && jt(v, w, u));
    g.some((v) => v.autoId === w.autoId) || g.push(w);
    let x;
    g.length > 0 ? x = g.reduce((v, D) => v[l] + v[a] > D[l] + D[a] ? v : v[l] + v[a] < D[l] + D[a] ? D : v[u] < D[u] ? v : D) : x = w;
    const y = x[l] + x[a] + s;
    let I;
    l === "x" ? I = new le({
      x1: y,
      x2: y,
      y1: x[u],
      y2: t[c]
    }) : I = new le({
      x1: x[u],
      x2: t[c],
      y1: y,
      y2: y
    });
    const b = bn(I, t, m, !0);
    if (!Array.isArray(b)) {
      console.warn("Expected collision shapes array but got:", typeof b);
      continue;
    }
    const C = b;
    let $ = 0;
    if (C?.length && ($ = C.reduce((D, B) => D[u] < B[u] ? D : B)[u] - s, $ <= x[u])) {
      console.debug("Invalid segment end point calculation, skipping this squeeze attempt");
      continue;
    }
    const P = typeof _ < "u" && typeof _.segments < "u" ? _.segments === 0 ? "root" : (_.segments + 1).toString() : "squeeze-" + Date.now();
    typeof _ < "u" && typeof _.segments < "u" && _.segments++;
    const M = d(
      x,
      l,
      a,
      s
    ), G = p(
      t,
      x,
      u,
      c,
      $
    ), O = t[a] - M, N = {
      id: P,
      shapes: S,
      stock: t,
      saw: t.saw,
      material: t.material,
      cutDirection: V(t.cutPreference),
      phase: 0,
      stockType: t?.saw?.stockType,
      t: t.t,
      // Assign all dimensions and positions
      x: l === "x" ? M : x.x,
      y: l === "y" ? M : x.y,
      l: l === "x" ? O : t.l,
      w: l === "y" ? O : t.w,
      [l]: M,
      [u]: x[u],
      [a]: O,
      [c]: G
    };
    if (N.l <= 0 || N.w <= 0) {
      console.debug("Skipping segment with invalid dimensions:", N.l, N.w);
      continue;
    }
    let L;
    try {
      L = new vt(N);
    } catch (v) {
      console.warn(`Corner squeeze segment creation error - ${v.message} for shape: ${x.id}`);
      continue;
    }
    try {
      await Gn.call(
        this,
        { secondPass: !0 },
        t,
        L
      ), h++;
    } catch (v) {
      console.warn(`Error during segment calculations: ${v.message}`);
    }
  }
  h > 0 && console.debug(`Corner squeeze completed with ${h} successful placements`);
}
function ua(t, e, n, i = null) {
  if (!e)
    throw new Error("no segment provided to assignStripShape");
  if (!t) throw new Error("no shape provided to assignStripShape");
  t.resetBothScores(), t.x = e.x, t.y = e.y;
  const r = this.shapeList?.filter(
    (s) => s.added && !X(s) && s.stock?.autoId === n.autoId && s.autoId !== t.autoId
  ) || [];
  if (X(t)) {
    const s = new Set(t.shapes?.map((a) => a.autoId)), o = r.filter((a) => !s.has(a.autoId));
    if (o.length > 0 && ke(t, o, n))
      return A("guillotine", `[assignStripShape] PREVENTED — group ${t.id} would collide at (${t.x},${t.y}) ${t.l}x${t.w} on stock ${n.id}`), t.x = 0, t.y = 0, !1;
    t.initShapes(t.shapes), t.placeMyShapes(n);
  }
  return i !== null && !X(t) ? Pt(t, i, n) : i !== null && X(t) && t.rot !== i && A("groups", `[assignStripShape] WARNING: Group ${t.id} has computed rot=${t.rot} but requested rotation=${i} - groups cannot be rotated!`), !X(t) && r.length > 0 && ke(t, r, n) ? (A("guillotine", `[assignStripShape] PREVENTED — shape ${t.id} would collide at (${t.x},${t.y}) ${t.l}x${t.w} on stock ${n.id}`), t.x = 0, t.y = 0, !1) : (A("calculations", `assigning first shape ${t.id}, x: ${t.x}, y: ${t.y}, rot: ${i}`), t.guillotineState || (t.guillotineState = new Te({})), t.firstShape.isFirstShape = !0, vr(t), De(t, e.cutDirection), At() && (X(t) || F([() => R(t.rot).to.equal(i)])), t.addToStock(n), F([() => R(Xi(this.shapeList.filter((s) => s.stock?.id === n.id))).length.to.be(0)]), t);
}
async function bs(t, e, n, i = null) {
  if (F([
    () => R(Z(e) || X(e), "runFirstShapeRotationTests requires shape or group").to.be.true,
    () => R(st(n)).to.be.true
  ]), !(ht(i) && !qt(e, i, n)))
    for (const r of e.firstShape.sampleRotations)
      await Rs.call(
        this,
        e,
        n,
        r,
        pn,
        {
          options: t,
          fs: e,
          fsRotation: null,
          segment: n
        },
        "fsRotation"
      );
}
function fa(t, e, n) {
  let i;
  return n ? (i = t.cutPreference, De(e, V(i)), t.hasHeadCut = !0) : (E.equalTo(e[t.cutDirection], t[t.cutDirection]) ? i = t.cutDirection : i = oe(t) ? V(t.cutPreference) : V(t.cutDirection), De(e, V(i))), F([
    () => R(xt(e)).to.not.equal(i)
  ]), i;
}
function ha(t, e, n, i, r) {
  n.hasHeadCut = e;
  let s = fa(n, t, e);
  const o = (n.phase ?? 0) + 1, a = i.saw.guillotineOptions?.phaseDirection?.[String(o)];
  (a === "l" || a === "w") && (s = a);
  const l = {
    l: s === "w" ? n.l : t.l,
    w: s === "w" ? t.w : n.w
  }, c = new vt({
    x: t.x,
    y: t.y,
    l: l.l,
    w: l.w,
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
  if (c.shapes.unshift(t), !c)
    throw new Error("firstShapeSegment not created");
  return F([
    () => R(c.cutDirection, `segment cut direction ${n.id} is the same as first shape ${t.id}`).to.not.equal(xt(t))
  ]), A("cuts", `FIRST SHAPE SEGMENT [${c?.parent?.type === "root" ? "R" : c.parent.id}]->[${c.autoId}] ${e ? "HEAD" : "NORM"} ${Ct(c.l, 4)}x${Ct(c.w, 4)}, SEG DIR ${c.cutDirection.toUpperCase()}, SHAPE DIR ${xt(t).toUpperCase()}`), c;
}
function da(t, e, n, i, r = null, s) {
  if (!e.length) return [];
  F([
    () => R(e.length).to.be.greaterThan(0),
    () => R(t.every((m) => m.added === !1), "unplaced shapes contain added shapes").to.be.true
  ]);
  const o = i.saw?.guillotineOptions, a = i.cutPreference ? V(i.cutPreference) : null, l = oe(n) && o?.limitStripDimensions !== !1 && a ? Oi(e, a, i[a]) : null;
  let c = [];
  const u = Be(n);
  for (const m of e) {
    const S = de(m, i);
    if (m.firstShape.sampleRotations = [], !X(m))
      for (const g of S) {
        let x = 1;
        Pt(m, g, i);
        const y = m.getPriority(i);
        let I = !0;
        if (Pt(m, g, i), F([
          () => R(m.rot, `unique shape ${m.id} rotation (${m.rot}) incorrect for (${g})`).equal(g)
        ]), !Vt(m, n, g, u))
          continue;
        if (r?.length) {
          m.x = n.x, m.y = n.y;
          for (const C of r)
            if (Yi(m, C, i)) {
              I = !1;
              break;
            }
        }
        if (!I) continue;
        const b = m.aspect;
        if (b < 0.1) {
          const C = i.cutPreference;
          if (m[C] >= 0.7 * i[C] && m[C] > m[V(C)]) {
            const $ = Math.max(1, 10 * (1 - b * 2));
            x *= $;
          }
        }
        l !== null && m[a] > l && (x *= 0.1), c.push({
          id: m.id,
          shape: m,
          rotation: g,
          score: x,
          priority: y
        }), F([
          () => R(Vt(m, n, g), "canditate will not fit").to.be.true
        ]);
      }
  }
  c.sort((m, S) => m.score !== S.score ? S.score - m.score : m.priority !== S.priority ? S.priority - m.priority : S.shape.area - m.shape.area);
  const h = n.cutDirection, f = i[h], d = this.config.guillotine.firstShapeFullSizeThreshold, p = c.filter((m) => m.shape[h] >= d * f);
  if (p.length > 0) {
    const m = p[0];
    return m.shape.firstShape.sampleRotations = [m.rotation], [m.shape];
  }
  c = c.slice(0, this.config.sample.guillotine);
  const w = [];
  for (const m of c)
    w.find((g) => g.id === m.id) || w.push(m.shape), m.shape.firstShape.sampleRotations.push(m.rotation), F([
      () => R(m.shape.firstShape.sampleRotations.length).to.be.lessThanOrEqual(2),
      () => R(m.shape.firstShape.sampleRotations[0]).to.not.equal(m.shape.firstShape.sampleRotations[1])
    ]);
  return o?.limitStripDimensions === !1 && w.push(...s), w;
}
function pa(t, e, n) {
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
function ga(t, e, n) {
  ya(t.shapes);
  const i = no.call(this, t, e, n);
  return i || !1;
}
function Si(t, e = null, n, i = !1) {
  let r;
  if (e !== null) {
    const s = t.guillotineState.getStripShapeBatchData(e);
    if (s === !1)
      throw new Error("getStripShapeRotation - could not find strip shape group");
    r = s.rot;
  }
  if (F([() => R([0, 1].includes(r)).to.be.true]), i && r !== t.rot) {
    if (X(t) || !qt(t, r, n)) return r;
    if (Pt(t, r, n) === !1)
      throw new Error("getStripShapeRotation - could not rotate strip shape correctly");
  }
  return r;
}
function ma(t, e, n, i, r) {
  const s = n.cutPreference === "l" ? "l" : "w", o = new Set(r.map((h) => h[s]));
  F([
    () => R(o.size).to.be.greaterThan(0)
  ]);
  const a = r.filter((h) => pt(h)), l = r.filter((h) => Z(h));
  if (l.length < 2)
    return r;
  const c = [...l], u = [];
  for (const h of o) {
    const f = [], d = h * (1 - this.config.groups.tolerance);
    let p = h * (1 + this.config.groups.tolerance);
    p > i[s] && (p = i[s]);
    for (let w = c.length - 1; w >= 0; w--) {
      const m = c[w];
      !m.getMinSpacing(n.saw, !0) && m[s] <= n[s] && m[s] >= d && m[s] <= p && (f.push(m), c.splice(w, 1));
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
      let w;
      try {
        const m = f.slice(0, -1).reduce((C, $) => C + $.getMinSpacing(n), 0), S = f.reduce((C, $) => C + $[e], 0);
        if (m + S > n[e]) continue;
        const g = d.l, x = d.w, b = `ss-${[...new Set(f.map((C) => C.parentId || C.id))].sort().join("-")}_${this.counters.group++}`;
        w = new Ke({
          l: g,
          w: x,
          id: b,
          shapes: f,
          direction: io(e),
          container: n,
          type: "strip"
        });
      } catch (m) {
        console.log(m), w = null;
      }
      if (w) {
        const m = Math.min(...f.map((g) => {
          const x = g.guillotineState.getStripShapeBatchData(t);
          return x ? x.order : 1 / 0;
        }));
        w.guillotineState.setStripShapeBatchGroup(t, {
          stockId: n.autoId,
          dimension: w[e],
          rot: w.rot,
          order: m,
          priorityShape: p.priorityShape
        });
        const S = new Set(w.shapes.map((g) => g.id));
        h.push(w), i.shapes = i.shapes.filter((g) => !S.has(g.id)), i.shapes.push(w), r = r.filter((g) => !S.has(g.id));
      }
    }
    r = [...h, ...a, ...r.filter((f) => Z(f))];
  } else
    r = [...a, ...l];
  return r;
}
function ya(t) {
  for (const e of t) e.guillotineState.resetStripShapeBatchGroups();
}
function Sa(t, e) {
  const n = e.getStock, i = 0.1 * n.l;
  function r(a) {
    return t.some((l) => a.parentId === l.parentId && !l.added) && Qe(a, n) && a.willItFit(e);
  }
  const s = t.some((a) => Qe(a, n) && a.willItFit(e) && a.l >= i || a.w >= i);
  return t.filter((a) => a.added ? !1 : (rt(a) && a.updateShapeSpacing(e), t.length === 1 || !s ? r(a) : a.l < i && a.w < i ? !1 : r(a)));
}
function ws(t, e, n, i = null, r = !1) {
  if (!this.config.sample.enable && r === !1) return [];
  if (!t) throw new Error("getFirstShapeSample - type is required");
  F([
    () => R(t === "guillotine" || t === "efficiency", "type not correct").to.be.true,
    () => R(so(n), "should be a container").to.be.true
  ]);
  const s = Gt(e, !1, !0);
  if (!s.length) return [];
  const o = e.filter((d) => X(d)), a = [], l = n.getStock;
  let c = Sa(s, n);
  if (!c.length) return [];
  if (t === "guillotine")
    c = da.call(
      this,
      e,
      c,
      n,
      l,
      i,
      o
    );
  else if (t === "efficiency") {
    c.push(...o);
    const d = c.filter((p) => p.getPriority(l) > 0);
    d.length && (c = d), c.sort(Et.aspect);
  }
  const u = c.filter((d) => X(d)), h = c.filter((d) => !X(d)), f = [...u, ...h];
  for (const d of f)
    if (X(d)) {
      if (!d.willItFit(n)) {
        A("groups", `[getFirstShapeSample] Group ${d.id} does NOT fit container after calculateGroupDimensions - skipping (group: ${d.l}x${d.w}, container: ${n.l}x${n.w})`);
        continue;
      }
      d.firstShape.sampleRotations = [d.rot.valueOf()], a.push(d);
    } else {
      const p = e.find((w) => w.parentId === d.parentId && !w.added && w.constructor.name === d.constructor.name);
      if (p && (p.firstShape.sampleRotations = de(p, n), a.push(p)), a.length >= (t === "guillotine" ? this.config.sample.guillotine : this.config.sample.efficiency))
        break;
    }
  return A("firstShapes", `candidates for stock ${n.getStock?.id}, ${st(n) ? "segment " + n.id : ""}`, a.map((d) => ({ id: d.id, autoId: d.autoId, rotations: d.firstShape.sampleRotations }))), F([() => R(gt(a), "duplicate ids found in candidates with getFirstShapeSample").to.false]), a;
}
function Ot(t) {
  let e = 0;
  const n = t.length;
  for (let i = 0, r = n - 1; i < n; r = i++)
    e += (t[r].x + t[i].x) * (t[r].y - t[i].y);
  return e / 2;
}
function xa(t) {
  return Math.abs(Ot(t));
}
function yt(t) {
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
function zt(t, e) {
  if (e === 0) return t;
  let n = 0, i = 0;
  for (const o of t)
    n += o.x, i += o.y;
  n /= t.length, i /= t.length;
  const r = Math.cos(e), s = Math.sin(e);
  return t.map((o) => {
    const a = o.x - n, l = o.y - i;
    return {
      x: r * a - s * l + n,
      y: s * a + r * l + i
    };
  });
}
function ge(t, e, n) {
  return t.map((i) => ({
    x: i.x + e,
    y: i.y + n
  }));
}
function ba(t) {
  return t.map((e) => ({
    x: -e.x,
    y: -e.y
  }));
}
function Ht(t) {
  const e = yt(t);
  return ge(t, -e.minX, -e.minY);
}
function Tt(t, e) {
  let n = !1;
  const i = e.length;
  for (let r = 0, s = i - 1; r < i; s = r++) {
    const o = e[r].x, a = e[r].y, l = e[s].x, c = e[s].y;
    a > t.y != c > t.y && t.x < (l - o) * (t.y - a) / (c - a) + o && (n = !n);
  }
  return n;
}
function Rt(t, e) {
  return t.minX < e.maxX && t.maxX > e.minX && t.minY < e.maxY && t.maxY > e.minY;
}
function wa(t, e) {
  if (t.length <= 3) return t;
  const n = gn(t, e);
  if (n.length > 0) {
    const i = n[0], r = n[n.length - 1];
    (i.x !== r.x || i.y !== r.y) && n.push({ x: i.x, y: i.y });
  }
  return n;
}
function gn(t, e) {
  if (t.length <= 2) return t;
  let n = 0, i = 0;
  const r = t[0], s = t[t.length - 1];
  for (let o = 1; o < t.length - 1; o++) {
    const a = Ia(t[o], r, s);
    a > n && (n = a, i = o);
  }
  if (n > e) {
    const o = gn(t.slice(0, i + 1), e), a = gn(t.slice(i), e);
    return o.slice(0, -1).concat(a);
  } else
    return [r, s];
}
function Ia(t, e, n) {
  const i = n.x - e.x, r = n.y - e.y, s = i * i + r * r;
  if (s === 0) {
    const o = t.x - e.x, a = t.y - e.y;
    return Math.sqrt(o * o + a * a);
  }
  return Math.abs(r * t.x - i * t.y + n.x * e.y - n.y * e.x) / Math.sqrt(s);
}
function Ut(t) {
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
function xi(t) {
  let e = t.length > 3 && t[0].x === t[t.length - 1].x && t[0].y === t[t.length - 1].y ? t.slice(0, -1) : t.slice();
  Ot(e) < 0 && (e = e.slice().reverse());
  const n = [], i = e.map((s, o) => o);
  let r = i.length * 2;
  for (; i.length > 3 && r-- > 0; ) {
    let s = !1;
    for (let o = 0; o < i.length; o++) {
      const a = i[(o - 1 + i.length) % i.length], l = i[o], c = i[(o + 1) % i.length], u = e[a], h = e[l], f = e[c];
      if ((h.x - u.x) * (f.y - u.y) - (h.y - u.y) * (f.x - u.x) <= 0) continue;
      let p = !1;
      for (const w of i)
        if (!(w === a || w === l || w === c) && Ca(e[w], u, h, f)) {
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
function Ca(t, e, n, i) {
  const r = (t.x - n.x) * (e.y - n.y) - (e.x - n.x) * (t.y - n.y), s = (t.x - i.x) * (n.y - i.y) - (n.x - i.x) * (t.y - i.y), o = (t.x - e.x) * (i.y - e.y) - (i.x - e.x) * (t.y - e.y), a = r < 0 || s < 0 || o < 0, l = r > 0 || s > 0 || o > 0;
  return !(a && l);
}
function bi(t, e) {
  let n = Xt(t), i = Xt(e);
  Ot(n) < 0 && (n = n.slice().reverse()), Ot(i) < 0 && (i = i.slice().reverse());
  const r = n.length, s = i.length;
  let o = 0;
  for (let h = 1; h < r; h++)
    (n[h].y < n[o].y || n[h].y === n[o].y && n[h].x < n[o].x) && (o = h);
  let a = 0;
  for (let h = 1; h < s; h++)
    (i[h].y < i[a].y || i[h].y === i[a].y && i[h].x < i[a].x) && (a = h);
  const l = [];
  let c = 0, u = 0;
  for (; c < r || u < s; ) {
    const h = (o + c) % r, f = (a + u) % s;
    l.push({
      x: n[h].x + i[f].x,
      y: n[h].y + i[f].y
    });
    const d = (o + c + 1) % r, p = (a + u + 1) % s, w = n[d].x - n[h].x, m = n[d].y - n[h].y, S = i[p].x - i[f].x, g = i[p].y - i[f].y, x = w * g - m * S;
    c >= r ? u++ : u >= s || x > 0 ? c++ : (x < 0 || c++, u++);
  }
  return l;
}
function Xt(t) {
  return t.length > 1 && t[0].x === t[t.length - 1].x && t[0].y === t[t.length - 1].y ? t.slice(0, -1) : t;
}
function $a(t, e) {
  if (e <= 0) return t;
  const n = Xt(t), i = n.length;
  if (i < 3) return t;
  const s = Ot(n) >= 0 ? n : n.slice().reverse(), o = [];
  for (let l = 0; l < i; l++) {
    const c = s[l], u = s[(l + 1) % i], h = u.x - c.x, f = u.y - c.y, d = Math.sqrt(h * h + f * f);
    if (d === 0) continue;
    const p = f / d, w = -h / d;
    o.push({
      px: c.x + p * e,
      py: c.y + w * e,
      dx: h,
      dy: f
    });
  }
  if (o.length < 3) return t;
  const a = [];
  for (let l = 0; l < o.length; l++) {
    const c = o[l], u = o[(l + 1) % o.length], h = Pa(
      c.px,
      c.py,
      c.px + c.dx,
      c.py + c.dy,
      u.px,
      u.py,
      u.px + u.dx,
      u.py + u.dy
    );
    h && a.push(h);
  }
  return a;
}
function Pa(t, e, n, i, r, s, o, a) {
  const l = (t - n) * (s - a) - (e - i) * (r - o);
  if (Math.abs(l) < 1e-10) return null;
  const c = ((t - r) * (s - a) - (e - s) * (r - o)) / l;
  return {
    x: t + c * (n - t),
    y: e + c * (i - e)
  };
}
function va(t, e, n = 0) {
  const i = ba(e), r = Ut(Xt(t)), s = Ut(Xt(i));
  let o;
  if (r && s)
    o = [bi(t, i)];
  else {
    const a = r ? [Xt(wi(t))] : xi(t), l = s ? [Xt(wi(i))] : xi(i);
    o = [];
    for (const c of a)
      for (const u of l)
        o.push(bi(c, u));
  }
  return n > 0 && (o = o.map((a) => $a(a, n))), o;
}
function Ta(t, e, n) {
  const i = t - n.width, r = e - n.height;
  return i < 0 || r < 0 ? [] : [
    { x: 0, y: 0 },
    { x: i, y: 0 },
    { x: i, y: r },
    { x: 0, y: r },
    { x: 0, y: 0 }
  ];
}
function wi(t) {
  return Ot(t) < 0 ? t.slice().reverse() : t;
}
function Ra(t) {
  const e = t.length;
  if (e < 3) return t.slice();
  const n = t[0].x === t[e - 1].x && t[0].y === t[e - 1].y ? t.slice(0, -1) : t.slice();
  n.sort((a, l) => a.x === l.x ? a.y - l.y : a.x - l.x);
  const i = (a, l, c) => (l.x - a.x) * (c.y - a.y) - (l.y - a.y) * (c.x - a.x), r = [];
  for (const a of n) {
    for (; r.length >= 2 && i(r[r.length - 2], r[r.length - 1], a) <= 0; )
      r.pop();
    r.push(a);
  }
  const s = [];
  for (let a = n.length - 1; a >= 0; a--) {
    const l = n[a];
    for (; s.length >= 2 && i(s[s.length - 2], s[s.length - 1], l) <= 0; )
      s.pop();
    s.push(l);
  }
  r.pop(), s.pop();
  const o = r.concat(s);
  return o.push({ x: o[0].x, y: o[0].y }), o;
}
function _t(t) {
  let e = 0, n = 0;
  for (const i of t)
    e += i.x, n += i.y;
  return {
    x: e / t.length,
    y: n / t.length
  };
}
function ka(t, e, n, i) {
  const r = be(n, i, t), s = be(n, i, e), o = be(t, e, n), a = be(t, e, i);
  return !!((r > 0 && s < 0 || r < 0 && s > 0) && (o > 0 && a < 0 || o < 0 && a > 0) || r === 0 && we(n, i, t) || s === 0 && we(n, i, e) || o === 0 && we(t, e, n) || a === 0 && we(t, e, i));
}
function be(t, e, n) {
  return (e.x - t.x) * (n.y - t.y) - (e.y - t.y) * (n.x - t.x);
}
function we(t, e, n) {
  return Math.min(t.x, e.x) <= n.x && n.x <= Math.max(t.x, e.x) && Math.min(t.y, e.y) <= n.y && n.y <= Math.max(t.y, e.y);
}
function fe(t, e, n = 0) {
  const i = t.length, r = e.length;
  if (i < 3 || r < 3) return !1;
  const s = t[0].x === t[i - 1].x && t[0].y === t[i - 1].y, o = e[0].x === e[r - 1].x && e[0].y === e[r - 1].y, a = s ? i - 1 : i, l = o ? r - 1 : r, c = n * n;
  for (let u = 0; u < a; u++) {
    const h = t[u], f = t[(u + 1) % i];
    for (let d = 0; d < l; d++) {
      const p = e[d], w = e[(d + 1) % r];
      if (ka(h, f, p, w) || n > 0 && Ea(h, f, p, w) < c)
        return !0;
    }
  }
  for (let u = 0; u < a; u++)
    if (Tt(t[u], e)) return !0;
  for (let u = 0; u < l; u++)
    if (Tt(e[u], t)) return !0;
  return !1;
}
function ie(t, e, n) {
  const i = n.x - e.x, r = n.y - e.y, s = i * i + r * r;
  if (s === 0) {
    const h = t.x - e.x, f = t.y - e.y;
    return h * h + f * f;
  }
  let o = ((t.x - e.x) * i + (t.y - e.y) * r) / s;
  o < 0 ? o = 0 : o > 1 && (o = 1);
  const a = e.x + o * i, l = e.y + o * r, c = t.x - a, u = t.y - l;
  return c * c + u * u;
}
function Ea(t, e, n, i) {
  return Math.min(
    ie(t, n, i),
    ie(e, n, i),
    ie(n, t, e),
    ie(i, t, e)
  );
}
function Aa(t, e, n, i) {
  const r = e.x - t.x, s = e.y - t.y, o = i.x - n.x, a = i.y - n.y, l = r * a - s * o;
  if (Math.abs(l) < 1e-10) return null;
  const c = ((n.x - t.x) * a - (n.y - t.y) * o) / l, u = ((n.x - t.x) * s - (n.y - t.y) * r) / l;
  return c < 0 || c > 1 || u < 0 || u > 1 ? null : {
    x: t.x + c * r,
    y: t.y + c * s
  };
}
function Ii(t, e) {
  const n = [], i = t.length - (t[0].x === t[t.length - 1].x && t[0].y === t[t.length - 1].y ? 1 : 0), r = e.length - (e[0].x === e[e.length - 1].x && e[0].y === e[e.length - 1].y ? 1 : 0);
  for (let s = 0; s < i; s++) {
    const o = t[s], a = t[(s + 1) % t.length];
    for (let l = 0; l < r; l++) {
      const c = e[l], u = e[(l + 1) % e.length], h = Aa(o, a, c, u);
      h && n.push(h);
    }
  }
  return n;
}
const Ma = {
  kerfWidth: 0,
  leadIn: { enabled: !0, type: "line", length: 2, angle: 45 },
  leadOut: { enabled: !0, type: "line", length: 2, angle: 45 },
  climbMilling: !0,
  optimization: { method: "2-opt" },
  proximity: { enabled: !0, threshold: 5 },
  commonLine: { enabled: !0, tolerance: 0.5, minOverlapLength: 5 }
};
function Ci(t, e) {
  if (e <= 0 || t.length < 3) return [t];
  const n = t.length, i = [];
  for (let r = 0; r < n; r++) {
    const s = t[(r - 1 + n) % n], o = t[r], a = t[(r + 1) % n], l = o.x - s.x, c = o.y - s.y, u = a.x - o.x, h = a.y - o.y, f = Math.sqrt(l * l + c * c) || 1, d = Math.sqrt(u * u + h * h) || 1, p = c / f, w = -l / f, m = h / d, S = -u / d;
    let g = p + m, x = w + S;
    const y = Math.sqrt(g * g + x * x);
    y < 1e-10 ? (g = p, x = w) : (g /= y, x /= y);
    const I = p * g + w * x, b = I > 0.1 ? e / I : e * 2;
    i.push({
      x: o.x + g * b,
      y: o.y + x * b
    });
  }
  return [i];
}
function Da(t, e) {
  const i = Ot(t) > 0;
  return e && !i || !e && i ? t.slice().reverse() : t;
}
function mn(t, e) {
  const n = e.x - t.x, i = e.y - t.y, r = Math.sqrt(n * n + i * i);
  return r === 0 ? { x: 0, y: -1 } : {
    x: i / r,
    y: -n / r
  };
}
function Ga(t, e, n) {
  let i = 0, r = -1 / 0;
  const s = t.length;
  for (let l = 0; l < s; l++) {
    const c = t[l], u = t[(l + 1) % s], h = {
      x: (c.x + u.x) / 2,
      y: (c.y + u.y) / 2
    }, f = mn(c, u), d = h.x, p = e.l - h.x, w = h.y, m = e.w - h.y, S = Math.min(d, p, w, m), g = h.x - e.l / 2, x = h.y - e.w / 2, y = Math.sqrt(g * g + x * x) || 1, I = f.x * (g / y) + f.y * (x / y);
    let b = -S + I * 10;
    if (n) {
      const C = Math.sqrt(
        (n.x - h.x) ** 2 + (n.y - h.y) ** 2
      );
      b += -C * 0.5;
    }
    b > r && (r = b, i = l);
  }
  const o = t[i], a = t[(i + 1) % s];
  return {
    edgeIndex: i,
    midpoint: {
      x: (o.x + a.x) / 2,
      y: (o.y + a.y) / 2
    },
    normal: mn(o, a)
  };
}
function Is(t, e, n, i) {
  if (!n.leadIn.enabled || t.length < 3)
    return { leadIn: [], entryIndex: 0 };
  const { edgeIndex: r, midpoint: s, normal: o } = Ga(t, e, i), a = n.leadIn.length, l = n.leadIn.angle * Math.PI / 180, c = Math.cos(l), u = Math.sin(l), h = o.x * c - o.y * u, f = o.x * u + o.y * c, d = s.x + h * a, p = s.y + f * a, w = 0.5, m = Math.max(w, Math.min(e.l - w, d)), S = Math.max(w, Math.min(e.w - w, p));
  return { leadIn: [
    { x: m, y: S, type: "rapid" },
    { x: s.x, y: s.y, type: "linear" }
  ], entryIndex: r };
}
function Cs(t, e, n, i) {
  if (!i.leadOut.enabled || t.length < 3)
    return [];
  const r = t.length, s = t[e], o = t[(e + 1) % r], a = {
    x: (s.x + o.x) / 2,
    y: (s.y + o.y) / 2
  }, l = mn(s, o), c = i.leadOut.length, u = i.leadOut.angle * Math.PI / 180, h = Math.cos(u), f = Math.sin(u), d = l.x * h - l.y * f, p = l.x * f + l.y * h, w = a.x + d * c, m = a.y + p * c, S = 0.5, g = Math.max(S, Math.min(n.l - S, w)), x = Math.max(S, Math.min(n.w - S, m));
  return [
    { x: g, y: x, type: "linear" }
  ];
}
function dt(t, e) {
  const n = t.x - e.x, i = t.y - e.y;
  return Math.sqrt(n * n + i * i);
}
function yn(t) {
  return t.leadIn.length > 0 ? t.leadIn[0] : t.contour.length > 0 ? t.contour[0] : t.centroid;
}
function he(t) {
  return t.leadOut.length > 0 ? t.leadOut[t.leadOut.length - 1] : t.contour.length > 0 ? t.contour[t.contour.length - 1] : t.centroid;
}
function Oa(t) {
  const e = /* @__PURE__ */ new Map();
  for (const i of t) {
    let r = e.get(i.shapeId);
    r || (r = { holes: [], outer: null }, e.set(i.shapeId, r)), i.isHole ? r.holes.push(i) : r.outer = i;
  }
  const n = [];
  for (const [i, { holes: r, outer: s }] of e) {
    const o = s?.centroid ?? r[0]?.centroid ?? { x: 0, y: 0 }, a = [], l = r.slice();
    let c = o;
    for (; l.length > 0; ) {
      let f = 0, d = 1 / 0;
      for (let w = 0; w < l.length; w++) {
        const m = dt(c, yn(l[w]));
        m < d && (d = m, f = w);
      }
      const p = l.splice(f, 1)[0];
      a.push(p), c = he(p);
    }
    const u = a[0] ?? s, h = s ?? a[a.length - 1];
    n.push({
      shapeId: i,
      holes: a,
      outer: s,
      entryPoint: u ? yn(u) : { x: 0, y: 0 },
      exitPoint: h ? he(h) : { x: 0, y: 0 }
    });
  }
  return n;
}
function La(t, e) {
  const n = [];
  for (const i of e) {
    const r = t[i];
    n.push(...r.holes), r.outer && n.push(r.outer);
  }
  return n;
}
function Sn(t, e) {
  if (e.length === 0) return 0;
  let n = dt({ x: 0, y: 0 }, t[e[0]].entryPoint);
  for (let i = 0; i < e.length - 1; i++)
    n += dt(t[e[i]].exitPoint, t[e[i + 1]].entryPoint);
  return n;
}
function Ba(t) {
  const e = t.length;
  if (e <= 1) return t.map((r, s) => s);
  let n = [], i = 1 / 0;
  for (let r = -1; r < e; r++) {
    const s = /* @__PURE__ */ new Set(), o = [];
    let a;
    for (r >= 0 ? (s.add(r), o.push(r), a = t[r].exitPoint) : a = { x: 0, y: 0 }; o.length < e; ) {
      let c = -1, u = 1 / 0;
      for (let h = 0; h < e; h++) {
        if (s.has(h)) continue;
        const f = dt(a, t[h].entryPoint);
        f < u && (u = f, c = h);
      }
      s.add(c), o.push(c), a = t[c].exitPoint;
    }
    const l = Sn(t, o);
    l < i && (i = l, n = o);
  }
  return n;
}
function Xa(t, e, n = 50) {
  const i = e.length;
  if (i <= 2) return e;
  const r = e.slice();
  let s = !0, o = 0;
  for (; s && o < n; ) {
    s = !1, o++;
    for (let a = -1; a < i - 1; a++)
      for (let l = a + 2; l < i; l++) {
        const c = a >= 0 ? t[r[a]].exitPoint : { x: 0, y: 0 }, u = l + 1 < i ? t[r[l + 1]].entryPoint : null;
        let h = dt(c, t[r[a + 1]].entryPoint), f = dt(c, t[r[l]].entryPoint);
        u && (h += dt(t[r[l]].exitPoint, u), f += dt(t[r[a + 1]].exitPoint, u));
        for (let d = a + 1; d < l; d++)
          h += dt(t[r[d]].exitPoint, t[r[d + 1]].entryPoint);
        for (let d = l; d > a + 1; d--)
          f += dt(t[r[d]].exitPoint, t[r[d - 1]].entryPoint);
        if (f < h - 1e-10) {
          let d = a + 1, p = l;
          for (; d < p; ) {
            const w = r[d];
            r[d] = r[p], r[p] = w, d++, p--;
          }
          s = !0;
        }
      }
  }
  return r;
}
function Wa(t, e, n = 30) {
  if (e.length <= 2) return e;
  const r = e.slice();
  let s = Sn(t, r), o = 0, a = !0;
  for (; a && o < n; ) {
    a = !1, o++;
    for (let l = 0; l < r.length; l++) {
      const c = r.splice(l, 1)[0];
      let u = l, h = s;
      for (let f = 0; f <= r.length; f++) {
        r.splice(f, 0, c);
        const d = Sn(t, r);
        d < h - 1e-10 && (h = d, u = f), r.splice(f, 1);
      }
      r.splice(u, 0, c), h < s - 1e-10 && (s = h, a = !0);
    }
  }
  return r;
}
function $i(t, e) {
  if (t.length <= 1 || e.optimization.method === "none")
    return t;
  const n = Oa(t);
  let i = Ba(n);
  return e.optimization.method === "2-opt" && (i = Xa(n, i), i = Wa(n, i)), La(n, i);
}
function Pi(t, e, n) {
  let i = { x: 0, y: 0 };
  for (const r of t) {
    const s = r._polygon;
    if (!s || s.length < 3) {
      i = he(r);
      continue;
    }
    const { leadIn: o, entryIndex: a } = Is(s, e, n, i);
    r.leadIn = o, r._entryIndex = a, r.contour = On(s, a), r.leadOut = Cs(s, a, e, n), i = he(r);
  }
}
function Ya(t, e) {
  if (!e.proximity.enabled || t.length < 2) return;
  const n = e.proximity.threshold;
  for (let i = 0; i < t.length - 1; i++) {
    const r = he(t[i]), s = yn(t[i + 1]);
    dt(r, s) < n && (t[i].leadOut = [], t[i + 1].leadIn = []);
  }
}
function Fa(t, e, n) {
  const i = [];
  for (let r = 0; r < t.length; r++) {
    const s = t[r]._polygon;
    if (!s || s.length < 3) continue;
    const o = t[r].bounds;
    for (let a = r + 1; a < t.length; a++) {
      if (t[r].shapeId === t[a].shapeId) continue;
      const l = t[a]._polygon;
      if (!l || l.length < 3) continue;
      const c = t[a].bounds;
      if (o.minX - c.maxX > e || c.minX - o.maxX > e || o.minY - c.maxY > e || c.minY - o.maxY > e) continue;
      const u = s.length, h = l.length;
      for (let f = 0; f < u; f++) {
        const d = s[f], p = s[(f + 1) % u], w = p.x - d.x, m = p.y - d.y, S = Math.sqrt(w * w + m * m);
        if (S < 1e-9) continue;
        const g = w / S, x = m / S;
        for (let y = 0; y < h; y++) {
          const I = l[y], b = l[(y + 1) % h], C = b.x - I.x, $ = b.y - I.y, P = Math.sqrt(C * C + $ * $);
          if (P < 1e-9) continue;
          const M = C / P, G = $ / P, O = g * M + x * G;
          if (Math.abs(O + 1) > 0.05) continue;
          const N = I.x - d.x, L = I.y - d.y;
          if (Math.abs(N * x - L * g) > e) continue;
          const D = 0, B = S, k = (I.x - d.x) * g + (I.y - d.y) * x, T = (b.x - d.x) * g + (b.y - d.y) * x, q = Math.min(k, T), z = Math.max(k, T), Q = Math.max(D, q), J = Math.min(B, z) - Q;
          J >= n && i.push({
            contourA: t[r],
            edgeIdxA: f,
            contourB: t[a],
            edgeIdxB: y,
            overlapLength: J
          });
        }
      }
    }
  }
  return i;
}
function Na(t, e, n, i) {
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
    !o || a == null || (s.contour = On(o, a, s._skipEdges));
  }
}
function vi(t) {
  let e = 0;
  for (let n = 1; n < t.length; n++)
    e += dt(t[n - 1], t[n]);
  return e;
}
function On(t, e, n) {
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
  for (let l = 1; l < i; l++) {
    const c = (a + l) % i, u = (e + l) % i, h = n?.has(u) ?? !1;
    r.push({
      x: t[c].x,
      y: t[c].y,
      type: h ? "rapid" : "linear"
    });
  }
  return r.push({ x: s.x, y: s.y, type: o ? "rapid" : "linear" }), r;
}
function $s(t, e, n) {
  const i = { ...Ma, ...n }, r = e?.saw?.bladeWidth ?? 0;
  i.kerfWidth === 0 && r > 0 && (i.kerfWidth = r);
  const s = i.kerfWidth / 2, o = { l: e.l, w: e.w }, a = [];
  for (const p of t) {
    if (!p.added) continue;
    const w = [], m = p.getPositionedOuterBoundary();
    w.push({
      polygon: m,
      label: p.name || p.autoId,
      isHole: !1
    });
    const S = p.getPositionedHoles();
    for (let g = 0; g < S.length; g++)
      w.push({
        polygon: S[g],
        label: `${p.name || p.autoId} hole ${g + 1}`,
        isHole: !0
      });
    for (const g of w) {
      let x = g.polygon;
      if (!x || x.length < 3) continue;
      x[0].x === x[x.length - 1].x && x[0].y === x[x.length - 1].y && (x = x.slice(0, -1));
      let y;
      if (s > 0) {
        const I = Ot(x);
        if (g.isHole) {
          const b = I < 0 ? x.slice().reverse() : x;
          y = Ci(b, s);
        } else {
          const b = I > 0 ? x.slice().reverse() : x;
          y = Ci(b, s);
        }
      } else
        y = [x];
      for (let I = 0; I < y.length; I++) {
        let b = y[I];
        b = Da(b, i.climbMilling);
        const { leadIn: C, entryIndex: $ } = Is(b, o, i), P = On(b, $), M = Cs(b, $, o, i), G = yt(b), O = _t(b), N = y.length > 1 ? ` (part ${I + 1})` : "";
        a.push({
          shapeId: p.autoId,
          label: g.label + N,
          isHole: g.isHole,
          leadIn: C,
          contour: P,
          leadOut: M,
          centroid: O,
          bounds: G,
          _polygon: b,
          _entryIndex: $
        });
      }
    }
  }
  const l = i.commonLine.enabled ? Fa(a, i.commonLine.tolerance, i.commonLine.minOverlapLength) : [];
  let c = $i(a, i);
  for (let p = 0; p < 3; p++) {
    Pi(c, o, i);
    const w = $i(c, i);
    let m = !0;
    for (let S = 0; S < w.length; S++)
      if (w[S] !== c[S]) {
        m = !1;
        break;
      }
    if (c = w, m) break;
  }
  Pi(c, o, i), Na(c, l), Ya(c, i);
  for (const p of c)
    delete p._polygon, delete p._entryIndex, delete p._skipEdges;
  let u = 0, h = 0, f = 0, d = { x: 0, y: 0 };
  for (const p of c) {
    const w = p.leadIn.length > 0 ? p.leadIn[0] : p.contour[0];
    w && (h += dt(d, w)), u += vi(p.leadIn.filter((S) => S.type === "linear"));
    for (let S = 1; S < p.contour.length; S++) {
      const g = dt(p.contour[S - 1], p.contour[S]);
      p.contour[S].type === "rapid" ? (h += g, f += g) : u += g;
    }
    u += vi(p.leadOut);
    const m = p.leadOut.length > 0 ? p.leadOut[p.leadOut.length - 1] : p.contour[p.contour.length - 1];
    m && (d = m);
  }
  return l.length > 0 && console.log(`[cut] Common-line: ${l.length} shared edges detected, saved ${f.toFixed(1)}mm cutting distance`), {
    contours: c,
    totalCutDistance: Math.round(u * 100) / 100,
    totalRapidDistance: Math.round(h * 100) / 100,
    commonLineSaved: Math.round(f * 100) / 100,
    config: i
  };
}
const Wt = {
  async calculation(t, e, n) {
    if (await Wt.tryFirstShapes.call(this, e, n), !!this.bestResult) {
      if (bl.call(this, this.bestResult, e)) {
        e.algoBenchmark = this.bestResult;
        try {
          const r = await new Pr(this, e, n).run();
          if (!r) return;
          const s = e.algoBenchmark, o = r.result, a = s?.score?.totalShapesPlaced ?? -1, l = o?.score?.totalShapesPlaced ?? -1, c = s?.score?.efficiency ?? 0, u = o?.score?.efficiency ?? 0;
          (l > a || l === a && u > c) && await mt.call(this, r.result), delete e.algoBenchmark;
        } catch (i) {
          console.error("error with evo", i);
        }
        ue({
          bestResult: this.bestResult,
          shapeList: this.shapeList,
          stockList: this.stockList,
          resetShapes: this.resetShapes?.bind(this),
          groupList: this.groupList
        });
      }
      if (t?.cncPlan && this.bestResult?.shapes?.length)
        try {
          const i = e?.saw?.bladeWidth ?? 0, r = this.bestResult.shapes.filter((s) => s.added);
          if (r.length > 0) {
            const s = r.map((a) => {
              const l = a.rot === 1, c = l ? a.w : a.l, u = l ? a.l : a.w;
              return {
                added: !0,
                autoId: a.autoId || a.id,
                getPositionedOuterBoundary() {
                  return [
                    { x: a.x, y: a.y },
                    { x: a.x + c, y: a.y },
                    { x: a.x + c, y: a.y + u },
                    { x: a.x, y: a.y + u }
                  ];
                },
                getPositionedHoles() {
                  return [];
                }
              };
            }), o = $s(
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
    if (!ht(e)) throw new Error("no rotation provided");
    if (!ht(t))
      throw new Error("first shape not provided to defaultFirstShapePlacement");
    if (typeof t != "object")
      throw new Error("first shape is not an object");
    if (t.added)
      throw new Error(`first shape ${t.id} has been added previously`);
    if (!n)
      throw new Error("no stock provided to defaultFirstShapePlacement");
    if (t.rot !== e && !qt(t, e, n))
      throw new Error(`first shape ${t.id} cannot rotate to: ${e}`);
    Pt(t, e, n), t.resetBothScores(), ms.call(
      this,
      t,
      n,
      En.call(this, n, n, t),
      []
    ), t.addToStock(n), t.firstShape.isFirstShape = !0, t.placementOrder = 0, X(t) ? (t.placeMyShapes(n), this.counters.placement = t.shapes.length) : this.counters.placement = 1;
  },
  /**
   * try all first shapes with both rotations if relevant
   */
  tryFirstShapes: async function(t, e) {
    const n = ft(e, t);
    let i = ws.call(
      this,
      "efficiency",
      n,
      t
    );
    const r = Gt(n, !1, !0);
    let s = r.length > 1;
    s && n.reduce((l, c) => l + c.area, 0) < t.area * this.config.groups.shapeAreaCutOff && (s = !1);
    let o = [];
    s && !this.hasMinSpacing && this.config.groups.efficiency.firstShapes && r.length < this.config.groups.efficiency.limit && (o = Wt.createFirstShapeGroups.call(
      this,
      n,
      t
    )), i.push(...o);
    let a = e;
    i = Gt(i, !1, !0);
    for (const l of i)
      l.firstShape.isFirstShape = !0, X(l) && (a = $r(
        l.shapes,
        n
      ), a.unshift(l)), await Wt.calculateFirstShapeRotations.call(
        this,
        a,
        t,
        l
      ), l.firstShape.isFirstShape = !1;
  },
  /**
   * run the calculations for both first shape rotations
   */
  calculateFirstShapeRotations: async function(t, e, n) {
    const i = de(n, e);
    for (const r of i) {
      this.resetShapes(t, !1, !1), n.added = !1, X(n) && (n.placeMyShapes(e), t.unshift(...n.shapes), t = t.filter((o) => o.id !== n.id));
      const s = await zr.call(
        this,
        t,
        e,
        n,
        r
      );
      ht(s.score) && await mt.call(this, s);
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
      n = this.shapeList.find((c) => c.id === n);
    else if (Ue(n) || oo(n)) {
      const c = n.autoId || n.id;
      n = this.shapeList.find((u) => u.autoId === c || u.id === c);
    }
    if (!n)
      throw new Error("firstShape not found in shapeList");
    if (n.reset(), t.length) {
      if (r) {
        this.weighting.custom = {};
        for (const c of Object.keys(this.weighting.efficiency.standard()))
          this.weighting.custom[c] = r[c] ? r[c] : 0;
      }
      Wt.defaultFirstShapePlacement.call(
        this,
        n,
        i,
        e
      ), await xn.call(
        this,
        t,
        n,
        e
      );
    }
    const o = Mt.call(
      this,
      t,
      e,
      n
    );
    r && (this.weighting.custom = null);
    const a = performance.now(), l = Math.ceil(a - s);
    return o.time = l, o;
  },
  /**
   * create groups to be used as a first shape
   * CAUTION - can make very simple calculations less efficient
   */
  createFirstShapeGroups: function(t, e) {
    if (!this.config.groups.efficiency.firstShapes) return [];
    const n = ft(t, e).filter((o) => Z(o)), i = ["l", "w"], r = /* @__PURE__ */ new Map();
    for (const o of i)
      Wi({
        shapes: n,
        container: e,
        targetSize: e[o],
        exact: !1,
        direction: o,
        config: this.config,
        preventDuplicates: !0,
        counters: this.counters
      }).forEach((l) => {
        const c = `${l.l}-${l.w}`;
        r.has(c) || r.set(c, l);
      }), this.resetShapes(n);
    let s = Array.from(r.values());
    return s.sort((o, a) => a.efficiency - o.efficiency), s = s.slice(0, this.config.sample.groupSize), F([
      () => R(s.every((o) => E.lessThanOrEqualTo(o.l, e.l) && E.lessThanOrEqualTo(o.w, e.w)), "groups larger than container").to.be.true
    ]), s.length ? s : [];
  }
};
function qa(t, e = 36) {
  const n = t.length;
  if (n < 4) return new Array(e).fill(0);
  const i = [], r = _t(t);
  for (let a = 0; a < n - 1; a++) {
    const l = t[(a - 1 + n - 1) % (n - 1)], c = t[a], u = t[(a + 1) % (n - 1)], h = c.x - l.x, f = c.y - l.y, d = u.x - c.x, p = u.y - c.y, w = h * p - f * d, m = Math.atan2(c.y - r.y, c.x - r.x);
    i.push({ angle: m, curvature: w });
  }
  i.sort((a, l) => a.angle - l.angle);
  const s = [], o = 2 * Math.PI / e;
  for (let a = 0; a < e; a++) {
    const l = -Math.PI + a * o;
    let c = i[0], u = 1 / 0;
    for (const h of i) {
      let f = Math.abs(h.angle - l);
      f > Math.PI && (f = 2 * Math.PI - f), f < u && (u = f, c = h);
    }
    s.push(c.curvature);
  }
  return s;
}
function za(t, e, n) {
  const i = t.length;
  let r = 0, s = 0;
  for (let o = 0; o < i; o++) {
    const a = t[o], l = e[(o + n + i) % i];
    a !== 0 && l !== 0 && (Math.sign(a) !== Math.sign(l) && (r += Math.min(Math.abs(a), Math.abs(l))), s++);
  }
  return s > 0 ? r / s : 0;
}
function Ha(t, e = 36, n = 3) {
  const i = [];
  for (const o of t)
    !o.outline?.length || o.outline.length < 4 || i.push({
      shapeId: o.autoId,
      samples: qa(o.outline, e),
      sampleAngles: Array.from({ length: e }, (a, l) => -Math.PI + l * (2 * Math.PI / e)),
      outline: o.outline
    });
  const r = [], s = 2 * Math.PI / e;
  for (let o = 0; o < i.length; o++) {
    const a = i[o], l = [];
    for (let c = o + 1; c < i.length; c++) {
      const u = i[c];
      let h = 0, f = 0;
      for (let d = 0; d < e; d++) {
        const p = za(a.samples, u.samples, d);
        p > h && (h = p, f = d);
      }
      if (h > 0) {
        const d = f * s, p = _t(a.outline), w = _t(u.outline), m = yt(a.outline);
        l.push({
          shapeAId: a.shapeId,
          shapeBId: u.shapeId,
          optimalRotationB: d,
          complementScore: h,
          translationHint: {
            dx: p.x - w.x + m.width * 0.5,
            dy: p.y - w.y
          }
        });
      }
    }
    l.sort((c, u) => u.complementScore - c.complementScore), r.push(...l.slice(0, n));
  }
  return r.sort((o, a) => a.complementScore - o.complementScore), r;
}
function Ps(t, e, n) {
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
function Za(t, e) {
  const n = Math.round(e * 1e3), i = t.length;
  if (i === 0) return `empty_${n}`;
  let r = 1 / 0, s = 1 / 0;
  for (const l of t)
    l.x < r && (r = l.x), l.y < s && (s = l.y);
  const o = new Array(i * 2);
  for (let l = 0; l < i; l++)
    o[l * 2] = Math.round((t[l].x - r) * 100), o[l * 2 + 1] = Math.round((t[l].y - s) * 100);
  let a = 2166136261;
  for (let l = 0; l < o.length; l++)
    a ^= o[l], a = a * 16777619 | 0;
  return `${i}_${a >>> 0}_${n}`;
}
function Ti(t, e) {
  return Ht(
    e === 0 ? t : zt(t, e)
  );
}
class Ja {
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
   * Get cached outline hash for a shape at a rotation, or compute and cache it.
   * Uses the placement reference (placementOutline when present) so the hash keys match
   * the geometry actually fed to computeNFP below.
   */
  getShapeHash(e, n) {
    const i = Math.round(n * 1e3);
    let r = this.shapeHashCache.get(e.autoId);
    if (r) {
      const a = r.get(i);
      if (a) return a;
    } else
      r = /* @__PURE__ */ new Map(), this.shapeHashCache.set(e.autoId, r);
    const s = e.placementOutline && e.placementOutline.length >= 3 ? e.placementOutline : e.outline, o = Za(s, n);
    return r.set(i, o), o;
  }
  /**
   * Get NFP for a shape pair at specific rotations.
   * Computes on demand if not already cached.
   */
  get(e, n, i, r) {
    const s = this.getShapeHash(e, n), o = this.getShapeHash(i, r), a = this.getKey(s, o), l = this.cache.get(a);
    if (l) return l;
    if (!e.outline?.length || !i.outline?.length) return null;
    const c = e.placementOutline && e.placementOutline.length >= 3 ? e.placementOutline : e.outline, u = i.placementOutline && i.placementOutline.length >= 3 ? i.placementOutline : i.outline, h = Ti(c, n), f = Ti(u, r), d = va(h, f, this.spacing);
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
function Kt(t) {
  const e = t.placementOutline;
  return e && e.length >= 3 ? e : t.outline;
}
let Ie = null;
async function Va(t) {
  if (Ie) return Ie;
  const e = process.execArgv.find((u) => u.includes("tsx/dist/loader"));
  if (!e)
    return t;
  const n = e.replace(/loader\.mjs$/, "esm/api/index.mjs"), { mkdtempSync: i, writeFileSync: r } = await import("./__vite-browser-external-6O--dxDi.js").then((u) => u._), { tmpdir: s } = await import("./__vite-browser-external-6O--dxDi.js").then((u) => u._), { join: o } = await import("./__vite-browser-external-6O--dxDi.js").then((u) => u._), { pathToFileURL: a } = await import("./__vite-browser-external-6O--dxDi.js").then((u) => u._), l = i(o(s(), "nesting-worker-")), c = o(l, "placement-worker-bootstrap.mjs");
  return r(c, [
    `import { register } from '${n}'`,
    "register()",
    `await import('${t.toString()}')`,
    ""
  ].join(`
`)), Ie = a(c), Ie;
}
function ja(t) {
  if (!t.length) return "";
  let e = t;
  const n = t[t.length - 1];
  return t.length > 1 && Math.abs(t[0].x - n.x) < 0.1 && Math.abs(t[0].y - n.y) < 0.1 && (e = t.slice(0, -1)), e.map((r) => ({ x: Math.round(r.x * 10) / 10, y: Math.round(r.y * 10) / 10 })).sort((r, s) => r.x - s.x || r.y - s.y).map((r) => `${r.x},${r.y}`).join("|");
}
function Ua(t, e) {
  if (!t?.length || t.length < 3) return e;
  const n = /* @__PURE__ */ new Set(), i = [];
  for (const r of e) {
    const s = Ht(
      r === 0 ? t : zt(t, r)
    ), o = ja(s);
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
class _a {
  cache = /* @__PURE__ */ new Map();
  key(e, n) {
    return n === 0 ? e : `${e}:${n}`;
  }
  getNormalized(e, n) {
    const i = this.key(e.autoId, n);
    let r = this.cache.get(i);
    if (!r) {
      const s = Kt(e), o = n === 0 ? s : zt(s, n);
      r = Ht(o), this.cache.set(i, r);
    }
    return r;
  }
  clear() {
    this.cache.clear();
  }
}
class Ln {
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
      for (let l = i; l <= r; l++)
        this.cells[a * this.cols + l].add(e);
  }
  remove(e, n) {
    const { minC: i, maxC: r, minR: s, maxR: o } = this.cellRange(n);
    for (let a = s; a <= o; a++)
      for (let l = i; l <= r; l++)
        this.cells[a * this.cols + l].delete(e);
  }
  // Reusable query buffer to avoid Set allocation per call
  queryResult = /* @__PURE__ */ new Set();
  query(e) {
    const n = this.queryResult;
    n.clear();
    const { minC: i, maxC: r, minR: s, maxR: o } = this.cellRange(e);
    for (let a = s; a <= o; a++)
      for (let l = i; l <= r; l++)
        for (const c of this.cells[a * this.cols + l])
          n.add(c);
    return n;
  }
  rebuild(e) {
    for (const n of this.cells) n.clear();
    for (let n = 0; n < e.length; n++)
      this.insert(n, e[n].bounds);
  }
}
function Ka(t, e, n) {
  let r = 0, s = 0;
  for (let o = 0; o < t.length; o++) {
    const a = t[o], l = t[(o + 1) % t.length], c = l.x - a.x, u = l.y - a.y, h = Math.sqrt(c * c + u * u);
    if (s += h, h < 0.5) continue;
    const f = Math.abs(a.y) < 0.5 && Math.abs(l.y) < 0.5, d = Math.abs(a.x) < 0.5 && Math.abs(l.x) < 0.5, p = Math.abs(a.y - n) < 0.5 && Math.abs(l.y - n) < 0.5, w = Math.abs(a.x - e) < 0.5 && Math.abs(l.x - e) < 0.5;
    (f || d || p || w) && (r += h);
  }
  return s > 0 ? r / s : 0;
}
function Qa(t, e, n) {
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
      const a = e[o], l = Math.max(0, t.minX - a.bounds.maxX, a.bounds.minX - t.maxX), c = Math.max(0, t.minY - a.bounds.maxY, a.bounds.minY - t.maxY), u = Math.sqrt(l * l + c * c);
      u < i && (i = u);
    }
  } else
    for (const r of e) {
      const s = Math.max(0, t.minX - r.bounds.maxX, r.bounds.minX - t.maxX), o = Math.max(0, t.minY - r.bounds.maxY, r.bounds.minY - t.maxY), a = Math.sqrt(s * s + o * o);
      a < i && (i = a);
    }
  return i;
}
function tl(t, e, n, i, r, s, o) {
  const a = t.length - 1;
  if (a < 2) return 0;
  const l = s + 5, c = l * l;
  let u = 0;
  const h = {
    minX: e.minX - l,
    minY: e.minY - l,
    maxX: e.maxX + l,
    maxY: e.maxY + l,
    width: e.width + l * 2,
    height: e.height + l * 2
  }, f = [];
  if (o)
    for (const d of o.query(h))
      f.push(n[d]);
  else
    for (const d of n)
      Rt(h, d.bounds) && f.push(d);
  for (let d = 0; d < a; d++) {
    const p = t[d], w = t[d + 1], m = (p.x + w.x) / 2, S = (p.y + w.y) / 2, g = { x: m, y: S };
    let x = Math.min(
      m * m,
      // left edge
      S * S,
      // bottom edge
      (i - m) * (i - m),
      // right edge
      (r - S) * (r - S)
      // top edge
    );
    if (x > c)
      for (const y of f) {
        for (let I = 0; I < y.polygon.length - 1; I++) {
          const b = ie(g, y.polygon[I], y.polygon[I + 1]);
          if (b < x && (x = b, x <= c))
            break;
        }
        if (x <= c) break;
      }
    x <= c && u++;
  }
  return u / a;
}
function Ri(t, e, n, i, r, s, o, a, l, c, u, h, f, d, p, w) {
  const m = s === "x" ? n : i, S = s === "x" ? i : n;
  if (d === void 0) {
    d = 0;
    for (const B of a) {
      const k = s === "x" ? B.bounds.maxX : B.bounds.maxY;
      k > d && (d = k);
    }
  }
  const g = c ? s === "x" ? c.maxX : c.maxY : s === "x" ? t : e, x = g > d ? g / m : (s === "x" ? t : e) / m * 0.5, y = s === "x" ? e / S : t / S, I = l ? Ka(l, n, i) : 0, b = c ? c.maxX - c.minX : 100, C = c ? c.maxY - c.minY : 100, $ = Math.sqrt(b * b + C * C), P = c ? Qa(c, a, p) : 0, M = Math.min(P / $, 1), G = !w && l && c && a.length > 0 ? tl(l, c, a, n, i, h, p) : 0, O = u % (Math.PI / 2), N = Math.min(O, Math.PI / 2 - O) / (Math.PI / 4);
  let L = 0;
  if (o && a.length > 0) {
    const B = a.find((k) => k.shape.autoId === o.shapeAId);
    if (B) {
      const k = t - (B.x + o.translationHint.dx), T = e - (B.y + o.translationHint.dy), q = Math.sqrt(k * k + T * T);
      L = o.complementScore / (1 + q / 100);
    }
  }
  let v = 0;
  if (a.length > 0 && c) {
    const B = c.minX + c.width / 2, k = c.minY + c.height / 2;
    for (const T of a)
      if (Rt(c, T.bounds) && B >= T.bounds.minX && B <= T.bounds.maxX && k >= T.bounds.minY && k <= T.bounds.maxY && !Tt({ x: B, y: k }, T.polygon)) {
        v = 0.8;
        break;
      }
  }
  const D = f || Le;
  return D.compression * x + D.crossAxis * y - D.edge * I + D.compact * M - D.fit * G + D.axis * N - D.contour * L - D.cavity * v;
}
function el(t, e, n, i, r) {
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
      if (Rt(s, a.bounds) && fe(t, a.polygon, i))
        return !0;
    }
  else
    for (const o of n)
      if (Rt(s, o.bounds) && fe(t, o.polygon, i))
        return !0;
  return !1;
}
function nl(t, e, n, i) {
  const r = i.get(t.shape, t.rotation, e, n);
  if (!r || r.length === 0) return { contours: [], bounds: [] };
  const s = [], o = [];
  for (const a of r) {
    const l = ge(a, t.x, t.y);
    s.push(l), o.push(yt(l));
  }
  return { contours: s, bounds: o };
}
function il(t) {
  const e = [];
  for (const n of t)
    for (let i = 0; i < n.contours.length; i++) {
      const r = n.bounds[i];
      e.push({ contour: n.contours[i], minX: r.minX, minY: r.minY, maxX: r.maxX, maxY: r.maxY });
    }
  return e;
}
function sl(t, e, n) {
  if (!Tt(t, e)) return !1;
  const i = t.x, r = t.y;
  for (let s = 0; s < n.length; s++) {
    const o = n[s];
    if (!(i < o.minX || i > o.maxX || r < o.minY || r > o.maxY) && Tt(t, o.contour))
      return !1;
  }
  return !0;
}
function ol(t, e, n, i, r, s, o) {
  const a = /* @__PURE__ */ new Set(), l = [], c = 0.5;
  function u(x, y) {
    const I = `${Math.round(x / c)},${Math.round(y / c)}`;
    a.has(I) || (a.add(I), l.push({ x, y }));
  }
  for (const x of t)
    u(x.x, x.y);
  const h = t.length - (t[0].x === t[t.length - 1].x && t[0].y === t[t.length - 1].y ? 1 : 0);
  for (let x = 0; x < h; x++) {
    const y = t[x], I = t[(x + 1) % t.length];
    for (let b = 0.25; b <= 0.75; b += 0.25)
      u(y.x + (I.x - y.x) * b, y.y + (I.y - y.y) * b);
  }
  const f = n.length < 60;
  for (const x of n)
    for (const y of x.contours) {
      const I = y.length - (y.length > 1 && y[0].x === y[y.length - 1].x && y[0].y === y[y.length - 1].y ? 1 : 0);
      for (let b = 0; b < I; b++)
        if (u(y[b].x, y[b].y), f) {
          const C = y[(b + 1) % y.length];
          u((y[b].x + C.x) / 2, (y[b].y + C.y) / 2);
        }
    }
  for (const x of n)
    for (let y = 0; y < x.contours.length; y++) {
      if (!Rt(x.bounds[y], e)) continue;
      const I = Ii(x.contours[y], t);
      for (const b of I)
        u(b.x, b.y);
    }
  const d = n.length > 100 ? 5 : 8;
  let p = n;
  if (n.length > d) {
    const x = (e.minX + e.maxX) / 2, y = (e.minY + e.maxY) / 2, I = n.map((b, C) => {
      const $ = b.bounds[0], P = ($.minX + $.maxX) / 2, M = ($.minY + $.maxY) / 2;
      return { idx: C, dist: (P - x) ** 2 + (M - y) ** 2 };
    });
    I.sort((b, C) => b.dist - C.dist), p = I.slice(0, d).map((b) => n[b.idx]);
  }
  for (let x = 0; x < p.length; x++)
    for (let y = x + 1; y < p.length; y++)
      for (let I = 0; I < p[x].contours.length; I++) {
        const b = p[x].bounds[I];
        for (let C = 0; C < p[y].contours.length; C++) {
          if (!Rt(b, p[y].bounds[C])) continue;
          const $ = Ii(p[x].contours[I], p[y].contours[C]);
          for (const P of $)
            u(P.x, P.y);
        }
      }
  if (i && r.length > 0) {
    const x = r.find((y) => y.shape.autoId === i.shapeAId);
    x && u(
      x.x + i.translationHint.dx,
      x.y + i.translationHint.dy
    );
  }
  const w = r.length, m = w < 50 ? 20 : w < 150 ? 10 : 5, S = w < 100 ? 0.5 : 1;
  let g = 0;
  for (const x of r) {
    if (g >= m) break;
    if (x.convex) continue;
    const y = x.bounds.width * x.bounds.height, I = x.shape.trueArea || x.shape.area || y;
    if (y - I < o.width * o.height * 0.5) continue;
    g++;
    const C = Math.max(o.width, o.height) * S;
    if (!(C < 1))
      for (let $ = x.bounds.minX; $ <= x.bounds.maxX - o.width; $ += C)
        for (let P = x.bounds.minY; P <= x.bounds.maxY - o.height; P += C) {
          const M = $ + o.width / 2, G = P + o.height / 2;
          Tt({ x: M, y: G }, x.polygon) || u($, P);
        }
  }
  return s === "x" ? l.sort((x, y) => x.x - y.x) : l.sort((x, y) => x.y - y.y), l;
}
function vs(t, e, n, i, r, s, o, a, l) {
  const c = l ? l.getNormalized(t, n) : Ht(n === 0 ? e : zt(e, n)), u = yt(c), h = Ta(i.l, i.w, u);
  if (h.length === 0) return null;
  const f = yt(h), d = [], p = r.length >= 80;
  let w = 0;
  if (p) {
    let v = 0;
    for (const D of r) {
      const B = s.compressionAxis === "x" ? D.bounds.maxX : D.bounds.maxY;
      B > v && (v = B);
    }
    w = Math.max(0, v * 0.1);
  }
  for (const v of r) {
    if (p && (s.compressionAxis === "x" ? v.bounds.maxX : v.bounds.maxY) < w)
      continue;
    const D = nl(v, t, n, s.nfpCache);
    D.contours.length > 0 && d.push(D);
  }
  const m = ol(
    h,
    f,
    d,
    o,
    r,
    s.compressionAxis,
    u
  ), S = il(d);
  let g = null;
  const x = s.spacing, y = c.map((v) => ({ x: v.x, y: v.y })), I = {
    minX: 0,
    minY: 0,
    maxX: u.width,
    maxY: u.height,
    width: u.width,
    height: u.height
  };
  let b = 0;
  for (const v of r) {
    const D = s.compressionAxis === "x" ? v.bounds.maxX : v.bounds.maxY;
    D > b && (b = D);
  }
  const C = r.length >= 30, $ = 12;
  let P = [];
  const M = (v, D) => {
    if (!sl({ x: v, y: D }, h, S)) return;
    for (let k = 0; k < c.length; k++)
      y[k].x = c[k].x + v, y[k].y = c[k].y + D;
    if (I.minX = v, I.minY = D, I.maxX = v + u.width, I.maxY = D + u.height, el(y, I, r, x, a)) return;
    const B = Ri(
      v,
      D,
      i.l,
      i.w,
      s.strategy,
      s.compressionAxis,
      o,
      r,
      y,
      I,
      n,
      s.spacing,
      s.scoringWeights,
      b,
      a,
      C
      // skip measureFit in cheap pass
    );
    if (C)
      if (P.length < $)
        P.push({ x: v, y: D, score: B });
      else {
        let k = 0;
        for (let T = 1; T < P.length; T++)
          P[T].score > P[k].score && (k = T);
        B < P[k].score && (P[k] = { x: v, y: D, score: B });
      }
    else
      (!g || B < g.score) && (g = { x: v, y: D, score: B });
  }, G = s.scoringWeights?.compression ?? Le.compression, O = s.compressionAxis === "x";
  for (const v of m) {
    if (g || C && P.length >= $) {
      const D = C ? P.reduce((k, T) => T.score > k ? T.score : k, -1 / 0) : g.score;
      if ((O ? v.x / i.l * G * 0.5 : v.y / i.w * G * 0.5) > D) break;
    }
    M(v.x, v.y);
  }
  if (!(g && r.length >= 10 && (s.compressionAxis === "x" ? g.x + u.width <= b * 1.01 : g.y + u.height <= b * 1.01))) {
    const v = Math.max(1, Math.min(u.width, u.height) / 4), D = s.compressionAxis === "x", B = s.scoringWeights?.compression ?? Le.compression;
    if (D)
      for (let k = f.minX; k <= f.maxX && !(g && k / i.l * B > g.score); k += v)
        for (let T = f.minY; T <= f.maxY; T += v)
          M(k, T);
    else
      for (let k = f.minY; k <= f.maxY && !(g && k / i.w * B > g.score); k += v)
        for (let T = f.minX; T <= f.maxX; T += v)
          M(T, k);
  }
  const L = C ? P.length > 0 ? P.reduce((v, D) => v.score < D.score ? v : D) : null : g;
  if (L) {
    const v = Math.max(1, Math.min(u.width, u.height) / 4), D = v / 2;
    for (let B = -v; B <= v; B += D)
      for (let k = -v; k <= v; k += D)
        M(L.x + B, L.y + k);
  }
  if (C && P.length > 0)
    for (const v of P) {
      for (let B = 0; B < c.length; B++)
        y[B].x = c[B].x + v.x, y[B].y = c[B].y + v.y;
      I.minX = v.x, I.minY = v.y, I.maxX = v.x + u.width, I.maxY = v.y + u.height;
      const D = Ri(
        v.x,
        v.y,
        i.l,
        i.w,
        s.strategy,
        s.compressionAxis,
        o,
        r,
        y,
        I,
        n,
        s.spacing,
        s.scoringWeights,
        b,
        a,
        !1
        // full scoring with measureFit
      );
      (!g || D < g.score) && (g = { x: v.x, y: v.y, score: D });
    }
  return g;
}
async function rl(t, e, n) {
  const i = al(e);
  if (i.length <= 1) {
    const s = Ts(t, i[0].shapes, n);
    let o = 0;
    const a = new Map(e.map((c) => [c.autoId, c])), l = We(s, a);
    for (const c of l) {
      const u = n.compressionAxis === "x" ? c.bounds.maxX : c.bounds.maxY;
      u > o && (o = u);
    }
    return console.log(`[nesting] Single ordering: "${i[0].name}" extent=${o.toFixed(1)}`), s;
  }
  console.log(`[nesting] Parallel multi-start: launching ${i.length} orderings via worker threads`);
  const r = await ll(t, i, n);
  return r || (console.log("[nesting] Worker threads unavailable, falling back to sequential"), cl(t, e, i, n));
}
function al(t) {
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
async function ll(t, e, n) {
  let i;
  try {
    i = (await import("./__vite-browser-external-6O--dxDi.js").then((p) => p._)).Worker;
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
  }, s = { l: t.l, w: t.w }, o = (p) => ({
    autoId: p.autoId,
    outline: p.outline,
    // placementOutline MUST be carried across the worker boundary — without it, the worker's
    // placement runs against `outline` (via the placementSource fallback) while the main
    // thread and client render using placementOutline as the transform reference. That
    // mismatch is the exact cause of the visible overlap.
    placementOutline: p.placementOutline,
    l: p.l,
    w: p.w,
    area: p.area,
    trueArea: p.trueArea
  }), a = new URL("data:video/mp2t;base64,LyoqCiAqIFBsYWNlbWVudCBXb3JrZXIKICogUnVucyBhIHNpbmdsZSBwbGFjZW1lbnQgb3JkZXJpbmcgaW4gYSB3b3JrZXIgdGhyZWFkLgogKiBSZWNlaXZlcyBwbGFpbiBkYXRhIG9iamVjdHMgKG5vIGNsYXNzIGluc3RhbmNlcyBuZWVkZWQg4oCUIHRoZSBwbGFjZW1lbnQKICogYWxnb3JpdGhtIG9ubHkgcmVhZHMgcHJvcGVydGllcywgbmV2ZXIgY2FsbHMgbWV0aG9kcykuCiAqLwoKaW1wb3J0IHsgcGFyZW50UG9ydCwgd29ya2VyRGF0YSB9IGZyb20gJ3dvcmtlcl90aHJlYWRzJwppbXBvcnQgeyBORlBDYWNoZSB9IGZyb20gJy4vbmZwLWNhY2hlJwppbXBvcnQgeyBwbGFjZVNoYXBlc0luT3JkZXIsIGJ1aWxkUGxhY2VkU2hhcGVzIH0gZnJvbSAnLi9wbGFjZW1lbnQnCmltcG9ydCB0eXBlIHsgTmVzdGluZ09wdGlvbnMsIE5lc3RpbmdQbGFjZW1lbnQsIENvbXByZXNzaW9uQXhpcyB9IGZyb20gJy4vcGxhY2VtZW50JwoKY29uc3QgewoJc3RvY2tEYXRhLAoJc2hhcGVzRGF0YSwKCW9wdGlvbnNEYXRhLAoJb3JkZXJpbmdOYW1lCn0gPSB3b3JrZXJEYXRhIGFzIHsKCXN0b2NrRGF0YTogeyBsOiBudW1iZXI7IHc6IG51bWJlciB9CglzaGFwZXNEYXRhOiBBcnJheTx7CgkJYXV0b0lkOiBzdHJpbmcKCQlvdXRsaW5lOiBBcnJheTx7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+CgkJLy8gT3B0aW9uYWwg4oCUIGNhcnJpZXMgdGhlIERQLXNpbXBsaWZpZWQgb3IgY29udmV4LWh1bGwgcG9seWdvbiB1c2VkIGZvciBORlAvcGxhY2VtZW50LgoJCS8vIE11c3QgbWF0Y2ggdGhlIGluc3RhbmNlIGZpZWxkIHNvIGBwbGFjZW1lbnRTb3VyY2UoKWAgaW4gcGxhY2VtZW50LnRzIHJldHVybnMgaXQgaGVyZS4KCQlwbGFjZW1lbnRPdXRsaW5lPzogQXJyYXk8eyB4OiBudW1iZXI7IHk6IG51bWJlciB9PgoJCWw6IG51bWJlcgoJCXc6IG51bWJlcgoJCWFyZWE6IG51bWJlcgoJCXRydWVBcmVhPzogbnVtYmVyCgl9PgoJb3B0aW9uc0RhdGE6IHsKCQlyb3RhdGlvblN0ZXBzOiBudW1iZXJbXQoJCXNwYWNpbmc6IG51bWJlcgoJCWNvbnRvdXJNYXRjaGVzOiBhbnlbXQoJCXN0cmF0ZWd5OiBzdHJpbmcKCQljb21wcmVzc2lvbkF4aXM6IENvbXByZXNzaW9uQXhpcwoJCXNjb3JpbmdXZWlnaHRzPzogYW55CgkJc2hhcGVSb3RhdGlvbk1hcEVudHJpZXM6IEFycmF5PFtzdHJpbmcgfCBudW1iZXIsIG51bWJlcltdXT4KCX0KCW9yZGVyaW5nTmFtZTogc3RyaW5nCn0KCi8vIFJlY29uc3RydWN0IHRoZSBvcHRpb25zIHdpdGggYSBmcmVzaCBORlAgY2FjaGUgZm9yIHRoaXMgd29ya2VyCmNvbnN0IG5mcENhY2hlID0gbmV3IE5GUENhY2hlKCkKbmZwQ2FjaGUuc2V0U3BhY2luZyggb3B0aW9uc0RhdGEuc3BhY2luZyApCgpjb25zdCBzaGFwZVJvdGF0aW9uTWFwID0gbmV3IE1hcCggb3B0aW9uc0RhdGEuc2hhcGVSb3RhdGlvbk1hcEVudHJpZXMgKQoKY29uc3Qgb3B0aW9uczogTmVzdGluZ09wdGlvbnMgPSB7Cglyb3RhdGlvblN0ZXBzOiBvcHRpb25zRGF0YS5yb3RhdGlvblN0ZXBzLAoJc3BhY2luZzogb3B0aW9uc0RhdGEuc3BhY2luZywKCWNvbnRvdXJNYXRjaGVzOiBvcHRpb25zRGF0YS5jb250b3VyTWF0Y2hlcywKCW5mcENhY2hlLAoJc3RyYXRlZ3k6IG9wdGlvbnNEYXRhLnN0cmF0ZWd5IGFzIGFueSwKCWNvbXByZXNzaW9uQXhpczogb3B0aW9uc0RhdGEuY29tcHJlc3Npb25BeGlzLAoJc2NvcmluZ1dlaWdodHM6IG9wdGlvbnNEYXRhLnNjb3JpbmdXZWlnaHRzLAoJc2hhcGVSb3RhdGlvbk1hcAoJLy8gTm8gb25Qcm9ncmVzcyDigJQgd29ya2VycyBkb24ndCByZXBvcnQgcGVyLXNoYXBlIHByb2dyZXNzCn0KCi8vIFJ1biBwbGFjZW1lbnQgKHNoYXBlcyBhcmUgcGxhaW4gb2JqZWN0cyDigJQgcGxhY2VtZW50IG9ubHkgcmVhZHMgcHJvcGVydGllcywgbm8gbWV0aG9kcykKY29uc3QgcmVzdWx0ID0gcGxhY2VTaGFwZXNJbk9yZGVyKCBzdG9ja0RhdGEgYXMgYW55LCBzaGFwZXNEYXRhIGFzIGFueSwgb3B0aW9ucyApCgovLyBDb21wdXRlIGV4dGVudCBvbiBjb21wcmVzc2lvbiBheGlzCmxldCBleHRlbnQgPSAwCmNvbnN0IHNoYXBlTWFwID0gbmV3IE1hcCggc2hhcGVzRGF0YS5tYXAoIHMgPT4gW3MuYXV0b0lkLCBzXSApICkKY29uc3QgcGxhY2VkID0gYnVpbGRQbGFjZWRTaGFwZXMoIHJlc3VsdCwgc2hhcGVNYXAgYXMgYW55ICkKZm9yICggY29uc3QgcCBvZiBwbGFjZWQgKQp7Cgljb25zdCBleHQgPSBvcHRpb25zRGF0YS5jb21wcmVzc2lvbkF4aXMgPT09ICd4JyA/IHAuYm91bmRzLm1heFggOiBwLmJvdW5kcy5tYXhZCglpZiAoIGV4dCA+IGV4dGVudCApIGV4dGVudCA9IGV4dAp9CgpwYXJlbnRQb3J0IS5wb3N0TWVzc2FnZSggewoJcGxhY2VtZW50czogcmVzdWx0LAoJZXh0ZW50LAoJb3JkZXJpbmdOYW1lLAoJY2FjaGVTaXplOiBuZnBDYWNoZS5zaXplCn0gKQo=", import.meta.url), l = new URL("data:video/mp2t;base64,LyoqCiAqIFBsYWNlbWVudCBXb3JrZXIKICogUnVucyBhIHNpbmdsZSBwbGFjZW1lbnQgb3JkZXJpbmcgaW4gYSB3b3JrZXIgdGhyZWFkLgogKiBSZWNlaXZlcyBwbGFpbiBkYXRhIG9iamVjdHMgKG5vIGNsYXNzIGluc3RhbmNlcyBuZWVkZWQg4oCUIHRoZSBwbGFjZW1lbnQKICogYWxnb3JpdGhtIG9ubHkgcmVhZHMgcHJvcGVydGllcywgbmV2ZXIgY2FsbHMgbWV0aG9kcykuCiAqLwoKaW1wb3J0IHsgcGFyZW50UG9ydCwgd29ya2VyRGF0YSB9IGZyb20gJ3dvcmtlcl90aHJlYWRzJwppbXBvcnQgeyBORlBDYWNoZSB9IGZyb20gJy4vbmZwLWNhY2hlJwppbXBvcnQgeyBwbGFjZVNoYXBlc0luT3JkZXIsIGJ1aWxkUGxhY2VkU2hhcGVzIH0gZnJvbSAnLi9wbGFjZW1lbnQnCmltcG9ydCB0eXBlIHsgTmVzdGluZ09wdGlvbnMsIE5lc3RpbmdQbGFjZW1lbnQsIENvbXByZXNzaW9uQXhpcyB9IGZyb20gJy4vcGxhY2VtZW50JwoKY29uc3QgewoJc3RvY2tEYXRhLAoJc2hhcGVzRGF0YSwKCW9wdGlvbnNEYXRhLAoJb3JkZXJpbmdOYW1lCn0gPSB3b3JrZXJEYXRhIGFzIHsKCXN0b2NrRGF0YTogeyBsOiBudW1iZXI7IHc6IG51bWJlciB9CglzaGFwZXNEYXRhOiBBcnJheTx7CgkJYXV0b0lkOiBzdHJpbmcKCQlvdXRsaW5lOiBBcnJheTx7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+CgkJLy8gT3B0aW9uYWwg4oCUIGNhcnJpZXMgdGhlIERQLXNpbXBsaWZpZWQgb3IgY29udmV4LWh1bGwgcG9seWdvbiB1c2VkIGZvciBORlAvcGxhY2VtZW50LgoJCS8vIE11c3QgbWF0Y2ggdGhlIGluc3RhbmNlIGZpZWxkIHNvIGBwbGFjZW1lbnRTb3VyY2UoKWAgaW4gcGxhY2VtZW50LnRzIHJldHVybnMgaXQgaGVyZS4KCQlwbGFjZW1lbnRPdXRsaW5lPzogQXJyYXk8eyB4OiBudW1iZXI7IHk6IG51bWJlciB9PgoJCWw6IG51bWJlcgoJCXc6IG51bWJlcgoJCWFyZWE6IG51bWJlcgoJCXRydWVBcmVhPzogbnVtYmVyCgl9PgoJb3B0aW9uc0RhdGE6IHsKCQlyb3RhdGlvblN0ZXBzOiBudW1iZXJbXQoJCXNwYWNpbmc6IG51bWJlcgoJCWNvbnRvdXJNYXRjaGVzOiBhbnlbXQoJCXN0cmF0ZWd5OiBzdHJpbmcKCQljb21wcmVzc2lvbkF4aXM6IENvbXByZXNzaW9uQXhpcwoJCXNjb3JpbmdXZWlnaHRzPzogYW55CgkJc2hhcGVSb3RhdGlvbk1hcEVudHJpZXM6IEFycmF5PFtzdHJpbmcgfCBudW1iZXIsIG51bWJlcltdXT4KCX0KCW9yZGVyaW5nTmFtZTogc3RyaW5nCn0KCi8vIFJlY29uc3RydWN0IHRoZSBvcHRpb25zIHdpdGggYSBmcmVzaCBORlAgY2FjaGUgZm9yIHRoaXMgd29ya2VyCmNvbnN0IG5mcENhY2hlID0gbmV3IE5GUENhY2hlKCkKbmZwQ2FjaGUuc2V0U3BhY2luZyggb3B0aW9uc0RhdGEuc3BhY2luZyApCgpjb25zdCBzaGFwZVJvdGF0aW9uTWFwID0gbmV3IE1hcCggb3B0aW9uc0RhdGEuc2hhcGVSb3RhdGlvbk1hcEVudHJpZXMgKQoKY29uc3Qgb3B0aW9uczogTmVzdGluZ09wdGlvbnMgPSB7Cglyb3RhdGlvblN0ZXBzOiBvcHRpb25zRGF0YS5yb3RhdGlvblN0ZXBzLAoJc3BhY2luZzogb3B0aW9uc0RhdGEuc3BhY2luZywKCWNvbnRvdXJNYXRjaGVzOiBvcHRpb25zRGF0YS5jb250b3VyTWF0Y2hlcywKCW5mcENhY2hlLAoJc3RyYXRlZ3k6IG9wdGlvbnNEYXRhLnN0cmF0ZWd5IGFzIGFueSwKCWNvbXByZXNzaW9uQXhpczogb3B0aW9uc0RhdGEuY29tcHJlc3Npb25BeGlzLAoJc2NvcmluZ1dlaWdodHM6IG9wdGlvbnNEYXRhLnNjb3JpbmdXZWlnaHRzLAoJc2hhcGVSb3RhdGlvbk1hcAoJLy8gTm8gb25Qcm9ncmVzcyDigJQgd29ya2VycyBkb24ndCByZXBvcnQgcGVyLXNoYXBlIHByb2dyZXNzCn0KCi8vIFJ1biBwbGFjZW1lbnQgKHNoYXBlcyBhcmUgcGxhaW4gb2JqZWN0cyDigJQgcGxhY2VtZW50IG9ubHkgcmVhZHMgcHJvcGVydGllcywgbm8gbWV0aG9kcykKY29uc3QgcmVzdWx0ID0gcGxhY2VTaGFwZXNJbk9yZGVyKCBzdG9ja0RhdGEgYXMgYW55LCBzaGFwZXNEYXRhIGFzIGFueSwgb3B0aW9ucyApCgovLyBDb21wdXRlIGV4dGVudCBvbiBjb21wcmVzc2lvbiBheGlzCmxldCBleHRlbnQgPSAwCmNvbnN0IHNoYXBlTWFwID0gbmV3IE1hcCggc2hhcGVzRGF0YS5tYXAoIHMgPT4gW3MuYXV0b0lkLCBzXSApICkKY29uc3QgcGxhY2VkID0gYnVpbGRQbGFjZWRTaGFwZXMoIHJlc3VsdCwgc2hhcGVNYXAgYXMgYW55ICkKZm9yICggY29uc3QgcCBvZiBwbGFjZWQgKQp7Cgljb25zdCBleHQgPSBvcHRpb25zRGF0YS5jb21wcmVzc2lvbkF4aXMgPT09ICd4JyA/IHAuYm91bmRzLm1heFggOiBwLmJvdW5kcy5tYXhZCglpZiAoIGV4dCA+IGV4dGVudCApIGV4dGVudCA9IGV4dAp9CgpwYXJlbnRQb3J0IS5wb3N0TWVzc2FnZSggewoJcGxhY2VtZW50czogcmVzdWx0LAoJZXh0ZW50LAoJb3JkZXJpbmdOYW1lLAoJY2FjaGVTaXplOiBuZnBDYWNoZS5zaXplCn0gKQo=", import.meta.url), { existsSync: c } = await import("./__vite-browser-external-6O--dxDi.js").then((p) => p._), { fileURLToPath: u } = await import("./__vite-browser-external-6O--dxDi.js").then((p) => p._), f = c(u(a)) ? a : await Va(l), d = e.map(
    (p) => new Promise((w, m) => {
      const S = new i(f, {
        workerData: {
          stockData: s,
          shapesData: p.shapes.map(o),
          optionsData: r,
          orderingName: p.name
        }
      });
      S.on("message", (g) => {
        w(g);
      }), S.on("error", (g) => {
        console.error(`[nesting] Worker error (${p.name}):`, g.message), m(g);
      }), S.on("exit", (g) => {
        g !== 0 && m(new Error(`Worker (${p.name}) exited with code ${g}`));
      });
    })
  );
  try {
    const p = await Promise.all(d);
    let w = p[0];
    for (const S of p)
      (S.placements.length > w.placements.length || S.placements.length === w.placements.length && S.extent < w.extent) && (w = S);
    const m = p.map((S) => `${S.orderingName}=${S.cacheSize}`).join(", ");
    return console.log(`[nesting] Parallel multi-start: best="${w.orderingName}" extent=${w.extent.toFixed(1)} placed=${w.placements.length} from ${e.length} orderings (cache: ${m})`), w.placements;
  } catch (p) {
    return console.error("[nesting] Parallel execution failed:", p), null;
  }
}
function cl(t, e, n, i) {
  let r = [], s = 1 / 0, o = "";
  for (const a of n) {
    const l = Ts(t, a.shapes, i);
    let c = 0;
    const u = new Map(e.map((f) => [f.autoId, f])), h = We(l, u);
    for (const f of h) {
      const d = i.compressionAxis === "x" ? f.bounds.maxX : f.bounds.maxY;
      d > c && (c = d);
    }
    (l.length > r.length || l.length === r.length && c < s) && (r = l, s = c, o = a.name);
  }
  return console.log(`[nesting] Sequential multi-start: best="${o}" extent=${s.toFixed(1)} from ${n.length} orderings`), r;
}
function Ts(t, e, n) {
  const i = [], r = [], s = /* @__PURE__ */ new Set(), o = Math.max(t.l, t.w) / 10, a = new Ln(t.l, t.w, o), l = new _a();
  let c = 0;
  for (const u of e) {
    c++;
    const h = r.length >= 150 ? 1 : r.length >= 50 ? 10 : 50;
    if ((c % h === 0 || c === e.length) && ((c % 50 === 0 || c === e.length) && console.log(`[nesting]   placing ${c}/${e.length} (${i.length} placed so far, NFP cache: ${n.nfpCache.size})`), n.onProgress?.(i.length, e.length)), !u.outline?.length || u.outline.length < 3) continue;
    const f = Ps(
      u.autoId,
      s,
      n.contourMatches
    );
    let d = null, p = 1 / 0;
    const w = n.shapeRotationMap?.get(u.autoId) || n.rotationSteps;
    let m = 0, S = n.compressionAxis === "x" ? t.w : t.l;
    if (r.length > 0) {
      for (const P of r) {
        const M = n.compressionAxis === "x" ? P.bounds.maxX : P.bounds.maxY;
        M > m && (m = M);
      }
      const C = m * 0.8;
      let $ = 0;
      for (const P of r)
        if ((n.compressionAxis === "x" ? P.bounds.maxX : P.bounds.maxY) >= C) {
          const G = n.compressionAxis === "x" ? P.bounds.maxY : P.bounds.maxX;
          G > $ && ($ = G);
        }
      S = (n.compressionAxis === "x" ? t.w : t.l) - $;
    }
    const g = [], x = n.compressionAxis === "x" ? t.l : t.w, y = n.compressionAxis === "x" ? t.w : t.l;
    for (const C of w) {
      const $ = yt(l.getNormalized(u, C)), P = n.compressionAxis === "x" ? $.width : $.height, M = n.compressionAxis === "x" ? $.height : $.width;
      let G = 0;
      G += P / x * 0.5, M > S && S > 0 && (G += (M - S) / y * 0.3), G += M / y * 0.1, f && Math.abs(C - f.optimalRotationB) < 0.01 && (G -= 0.3);
      const O = C % (Math.PI / 2), N = Math.min(O, Math.PI / 2 - O) / (Math.PI / 4);
      G += N * 0.1, g.push({ rotation: C, score: G });
    }
    g.sort((C, $) => C.score - $.score);
    const I = r.length < 30 ? w.length : r.length < 150 ? Math.min(4, g.length) : Math.min(3, g.length), b = g.slice(0, I);
    for (const { rotation: C } of b) {
      const $ = vs(
        u,
        Kt(u),
        C,
        t,
        r,
        n,
        f,
        a,
        l
      );
      $ && $.score < p && (p = $.score, d = {
        shapeAutoId: u.autoId,
        x: $.x,
        y: $.y,
        rotation: C
      });
    }
    if (d) {
      i.push(d);
      const C = l.getNormalized(u, d.rotation), $ = ge(C, d.x, d.y), P = yt($), M = {
        shape: u,
        x: d.x,
        y: d.y,
        rotation: d.rotation,
        bounds: P,
        polygon: $,
        convex: Ut($)
      };
      r.push(M), a.insert(r.length - 1, P), s.add(u.autoId);
    }
  }
  return i;
}
const ul = {
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
    const s = Kt(r), o = i.rotation === 0 ? s : zt(s, i.rotation), a = Ht(o), l = ge(a, i.x, i.y), c = yt(l);
    n.push({ shape: r, x: i.x, y: i.y, rotation: i.rotation, bounds: c, polygon: l, convex: Ut(l) });
  }
  return n;
}
function Ce(t, e, n, i) {
  if (t.length === 0) return 0;
  let r = 0, s = 0, o = 0, a = 0;
  for (const d of t) {
    const p = i === "x" ? d.bounds.maxX : d.bounds.maxY, w = i === "x" ? d.bounds.maxY : d.bounds.maxX;
    p > r && (r = p), w > s && (s = w), o += p, a += d.shape.trueArea || d.shape.area || 0;
  }
  const l = i === "x" ? e : n, c = o / t.length / l, u = r / l, h = r * s, f = h > 0 ? 1 - a / h : 0;
  return c * 0.5 + u * 0.35 + f * 0.15;
}
function ae(t, e, n, i, r, s) {
  const o = e[t], a = 0.01;
  if (o.bounds.minX < -a || o.bounds.minY < -a || o.bounds.maxX > n + a || o.bounds.maxY > i + a) return !1;
  const l = r > 0 ? {
    minX: o.bounds.minX - r,
    minY: o.bounds.minY - r,
    maxX: o.bounds.maxX + r,
    maxY: o.bounds.maxY + r,
    width: o.bounds.width + r * 2,
    height: o.bounds.height + r * 2
  } : o.bounds;
  if (s) {
    for (const c of s.query(l))
      if (c !== t && Rt(l, e[c].bounds) && fe(o.polygon, e[c].polygon, r))
        return !1;
  } else
    for (let c = 0; c < e.length; c++)
      if (c !== t && Rt(l, e[c].bounds) && fe(o.polygon, e[c].polygon, r))
        return !1;
  return !0;
}
function Yt(t, e, n, i) {
  const r = Kt(t), s = i === 0 ? r : zt(r, i), o = Ht(s), a = ge(o, e, n), l = yt(a);
  return { shape: t, x: e, y: n, rotation: i, bounds: l, polygon: a, convex: Ut(a) };
}
function fl(t, e, n, i) {
  if (e === "shift") {
    const r = Math.max(t.shape.l, t.shape.w) * n * 2, s = (Math.random() - 0.5) * 2 * r, o = (Math.random() - 0.5) * 2 * r;
    return Yt(t.shape, t.x + s, t.y + o, t.rotation);
  } else if (e === "rotate") {
    const r = i[Math.floor(Math.random() * i.length)];
    return Yt(t.shape, t.x, t.y, r);
  }
  return t;
}
function Pe(t, e, n, i, r, s, o, a) {
  const l = e[t], c = n === "x" ? l.x : l.y;
  if (Math.abs(c - i) < 0.5) return null;
  const u = i < c;
  let h = u ? i : c, f = u ? c : i, d = null;
  const p = Kt(l.shape), w = Ht(
    l.rotation === 0 ? p : zt(p, l.rotation)
  ), m = yt(w), S = w.map((x) => ({ x: x.x, y: x.y })), g = {
    minX: 0,
    minY: 0,
    maxX: m.width,
    maxY: m.height,
    width: m.width,
    height: m.height
  };
  for (let x = 0; x < 12; x++) {
    const y = (h + f) / 2, I = n === "x" ? y : l.x, b = n === "y" ? y : l.y;
    for (let M = 0; M < w.length; M++)
      S[M].x = w[M].x + I, S[M].y = w[M].y + b;
    g.minX = I, g.minY = b, g.maxX = I + m.width, g.maxY = b + m.height;
    const C = S.map((M) => ({ x: M.x, y: M.y })), $ = {
      shape: l.shape,
      x: I,
      y: b,
      rotation: l.rotation,
      bounds: { ...g },
      polygon: C,
      convex: Ut(C)
    }, P = e[t];
    e[t] = $, ae(t, e, r, s, o, a) ? (d = $, u ? f = y : h = y) : u ? h = y : f = y, e[t] = P;
  }
  if (d) {
    const x = n === "x" ? d.x : d.y;
    if (Math.abs(x - c) > 0.5)
      return d;
  }
  return null;
}
function It(t, e, n, i, r, s, o) {
  return Pe(t, e, n, 0, i, r, s, o);
}
function hl(t, e, n, i, r = {}) {
  if (t.length < 2)
    return {
      placements: t,
      stats: { initialEnergy: 0, finalEnergy: 0, bestEnergy: 0, accepted: 0, improving: 0, iterations: 0, improved: !1 }
    };
  const s = { ...ul, ...r }, o = new Map(e.map((x) => [x.autoId, x])), a = i.compressionAxis;
  let l = t.map((x) => ({ ...x })), c = We(l, o), u = Ce(c, n.l, n.w, a);
  const h = u;
  let f = l.map((x) => ({ ...x })), d = u, p = s.initialTemp, w = 0, m = 0;
  const S = Math.max(n.l, n.w) / 10, g = new Ln(n.l, n.w, S);
  g.rebuild(c);
  for (let x = 0; x < s.maxIterations; x++) {
    x % 500 === 0 && i.onProgress?.(t.length, t.length);
    const y = s.moveTypes[Math.floor(Math.random() * s.moveTypes.length)];
    if (y === "swap" && l.length >= 2) {
      const I = Math.floor(Math.random() * l.length);
      let b = Math.floor(Math.random() * (l.length - 1));
      b >= I && b++;
      const C = o.get(l[I].shapeAutoId), $ = o.get(l[b].shapeAutoId);
      if (!C || !$) continue;
      const P = C.trueArea || C.area || 1, M = $.trueArea || $.area || 1;
      if ((P > M ? P / M : M / P) > 3) continue;
      const O = l[b].x, N = l[b].y, L = l[I].x, v = l[I].y, D = c.slice();
      if (D[I] = Yt(C, O, N, l[I].rotation), D[b] = Yt($, L, v, l[b].rotation), ae(I, D, n.l, n.w, i.spacing) && ae(b, D, n.l, n.w, i.spacing)) {
        const B = Ce(D, n.l, n.w, a), k = B - u;
        (k < 0 || Math.random() < Math.exp(-k / p)) && (l[I] = { shapeAutoId: C.autoId, x: O, y: N, rotation: l[I].rotation }, l[b] = { shapeAutoId: $.autoId, x: L, y: v, rotation: l[b].rotation }, c = D, g.rebuild(c), u = B, w++, k < 0 && m++, u < d && (f = l.map((T) => ({ ...T })), d = u));
      }
    } else if (y === "slide" || y === "slideX") {
      const I = y === "slide" ? a : a === "x" ? "y" : "x", b = Math.floor(Math.random() * c.length), C = It(b, c, I, n.l, n.w, i.spacing, g);
      C && (g.remove(b, c[b].bounds), c[b] = C, g.insert(b, C.bounds), l[b] = {
        shapeAutoId: C.shape.autoId,
        x: C.x,
        y: C.y,
        rotation: C.rotation
      }, u = Ce(c, n.l, n.w, a), w++, m++, u < d && (f = l.map(($) => ({ ...$ })), d = u));
    } else {
      const I = y === "swap" ? "shift" : y, b = Math.floor(Math.random() * c.length), C = c[b], $ = i.shapeRotationMap?.get(C.shape.autoId) || i.rotationSteps, P = fl(C, I, p, $), M = c[b];
      if (g.remove(b, M.bounds), c[b] = P, g.insert(b, P.bounds), ae(b, c, n.l, n.w, i.spacing, g)) {
        const G = Ce(c, n.l, n.w, a), O = G - u;
        O < 0 || Math.random() < Math.exp(-O / p) ? (l[b] = {
          shapeAutoId: P.shape.autoId,
          x: P.x,
          y: P.y,
          rotation: P.rotation
        }, u = G, w++, O < 0 && m++, u < d && (f = l.map((N) => ({ ...N })), d = u)) : (g.remove(b, P.bounds), c[b] = M, g.insert(b, M.bounds));
      } else
        g.remove(b, P.bounds), c[b] = M, g.insert(b, M.bounds);
    }
    p *= s.coolingRate;
  }
  return {
    placements: f,
    stats: {
      initialEnergy: h,
      finalEnergy: u,
      bestEnergy: d,
      accepted: w,
      improving: m,
      iterations: s.maxIterations,
      improved: d < h
    }
  };
}
function bt(t, e, n) {
  t[e] = { shapeAutoId: n.shape.autoId, x: n.x, y: n.y, rotation: n.rotation };
}
function dl(t, e, n, i) {
  const r = new Map(e.map((S) => [S.autoId, S])), s = t.map((S) => ({ ...S }));
  let o = We(s, r);
  const a = Math.max(n.l, n.w) / 10, l = new Ln(n.l, n.w, a), c = i.compressionAxis, u = c === "x" ? "y" : "x";
  let h = 0;
  for (let S = 0; S < 5; S++) {
    i.onProgress?.(t.length, t.length);
    let g = 0;
    l.rebuild(o);
    const x = [...Array(o.length).keys()].sort((y, I) => {
      const b = c === "x" ? o[y].bounds.maxX : o[y].bounds.maxY;
      return (c === "x" ? o[I].bounds.maxX : o[I].bounds.maxY) - b;
    });
    for (const y of x) {
      let I = o[y].x, b = o[y].y, C = o[y].rotation, $ = c === "x" ? o[y].bounds.maxX : o[y].bounds.maxY;
      const P = It(y, o, c, n.l, n.w, i.spacing, l);
      P && (l.remove(y, o[y].bounds), o[y] = P, l.insert(y, P.bounds), bt(s, y, P));
      const M = It(y, o, u, n.l, n.w, i.spacing, l);
      M && (l.remove(y, o[y].bounds), o[y] = M, l.insert(y, M.bounds), bt(s, y, M));
      const G = c === "x" ? o[y].bounds.maxX : o[y].bounds.maxY;
      G < $ && ($ = G, I = o[y].x, b = o[y].y, C = o[y].rotation);
      const O = i.shapeRotationMap?.get(o[y].shape.autoId) || i.rotationSteps;
      if (O.length > 1) {
        const N = o[y];
        for (const L of O) {
          if (Math.abs(L - N.rotation) < 1e-3) continue;
          const v = Yt(N.shape, N.x, N.y, L), D = o[y];
          if (l.remove(y, D.bounds), o[y] = v, l.insert(y, v.bounds), !ae(y, o, n.l, n.w, i.spacing, l)) {
            l.remove(y, v.bounds), o[y] = D, l.insert(y, D.bounds);
            continue;
          }
          const B = It(y, o, c, n.l, n.w, i.spacing, l);
          B && (l.remove(y, o[y].bounds), o[y] = B, l.insert(y, B.bounds));
          const k = It(y, o, u, n.l, n.w, i.spacing, l);
          k && (l.remove(y, o[y].bounds), o[y] = k, l.insert(y, k.bounds));
          const T = c === "x" ? o[y].bounds.maxX : o[y].bounds.maxY;
          T < $ - 0.5 && ($ = T, I = o[y].x, b = o[y].y, C = o[y].rotation), l.remove(y, o[y].bounds), o[y] = D, l.insert(y, D.bounds);
        }
        (C !== N.rotation || I !== N.x || b !== N.y) && (l.remove(y, o[y].bounds), o[y] = Yt(N.shape, I, b, C), l.insert(y, o[y].bounds), bt(s, y, o[y]));
      }
      ($ < (c === "x" ? (P || o[y]).bounds.maxX : (P || o[y]).bounds.maxY) - 0.5 || P || M) && g++;
    }
    if (h += g, g === 0) break;
  }
  for (let S = 0; S < 3; S++) {
    i.onProgress?.(t.length, t.length);
    let g = 0;
    l.rebuild(o);
    for (let x = 0; x < o.length; x++) {
      const y = o[x], I = (y.bounds.minX + y.bounds.maxX) / 2, b = (y.bounds.minY + y.bounds.maxY) / 2;
      let C = 1 / 0, $ = -1;
      for (let O = 0; O < o.length; O++) {
        if (O === x) continue;
        const N = o[O], L = (N.bounds.minX + N.bounds.maxX) / 2, v = (N.bounds.minY + N.bounds.maxY) / 2, D = (I - L) ** 2 + (b - v) ** 2;
        D < C && (C = D, $ = O);
      }
      if ($ < 0) continue;
      const P = o[$], M = (P.bounds.minX + P.bounds.maxX) / 2, G = (P.bounds.minY + P.bounds.maxY) / 2;
      if (Math.abs(I - M) > 1) {
        const O = Pe(x, o, "x", M < I ? P.bounds.maxX : P.bounds.minX - y.bounds.width, n.l, n.w, i.spacing, l);
        O && (l.remove(x, o[x].bounds), o[x] = O, l.insert(x, O.bounds), bt(s, x, O), g++);
      }
      if (Math.abs(b - G) > 1) {
        const O = Pe(x, o, "y", G < b ? P.bounds.maxY : P.bounds.minY - y.bounds.height, n.l, n.w, i.spacing, l);
        O && (l.remove(x, o[x].bounds), o[x] = O, l.insert(x, O.bounds), bt(s, x, O), g++);
      }
    }
    if (h += g, g === 0) break;
  }
  let f = 0, d = 0;
  for (const S of o) {
    const g = S.shape.trueArea || S.shape.area || 1, x = u === "x" ? (S.bounds.minX + S.bounds.maxX) / 2 : (S.bounds.minY + S.bounds.maxY) / 2;
    f += x * g, d += g;
  }
  const p = d > 0 ? f / d : 0;
  for (let S = 0; S < 3; S++) {
    let g = 0;
    l.rebuild(o);
    for (let x = 0; x < o.length; x++) {
      const y = o[x], I = u === "x" ? (y.bounds.minX + y.bounds.maxX) / 2 : (y.bounds.minY + y.bounds.maxY) / 2;
      if (Math.abs(I - p) < 1) continue;
      const b = I > p ? y[u] - (I - p) : y[u] + (p - I), C = Pe(x, o, u, b, n.l, n.w, i.spacing, l);
      C && (l.remove(x, o[x].bounds), o[x] = C, l.insert(x, C.bounds), bt(s, x, C), g++);
    }
    if (h += g, g === 0) break;
  }
  for (let S = 0; S < 3; S++) {
    let g = 0;
    l.rebuild(o);
    const x = [...Array(o.length).keys()].sort((y, I) => {
      const b = c === "x" ? o[y].bounds.maxX : o[y].bounds.maxY;
      return (c === "x" ? o[I].bounds.maxX : o[I].bounds.maxY) - b;
    });
    for (const y of x) {
      const I = It(y, o, c, n.l, n.w, i.spacing, l);
      I && (l.remove(y, o[y].bounds), o[y] = I, l.insert(y, I.bounds), bt(s, y, I), g++);
    }
    if (h += g, g === 0) break;
  }
  i.onProgress?.(t.length, t.length);
  for (let S = 0; S < 3; S++) {
    let g = 0, x = 1 / 0;
    for (const T of o) {
      const q = c === "x" ? T.bounds.maxX : T.bounds.maxY;
      q > g && (g = q), q < x && (x = q);
    }
    const y = g - x, b = x + y * (S === 0 ? 0.75 : 0.85), C = [];
    for (let T = 0; T < o.length; T++)
      (c === "x" ? o[T].bounds.maxX : o[T].bounds.maxY) >= b && C.push(T);
    C.sort((T, q) => {
      const z = c === "x" ? o[T].bounds.maxX : o[T].bounds.maxY;
      return (c === "x" ? o[q].bounds.maxX : o[q].bounds.maxY) - z;
    });
    const $ = C.slice(0, 25);
    if ($.length === 0) break;
    console.log(`[nesting] Phase 5 round ${S + 1}: frontier threshold=${b.toFixed(1)}, maxExtent=${g.toFixed(1)}, candidates=${$.length}`);
    const P = s.map((T) => ({ ...T })), M = o.map((T) => ({ ...T })), G = [], O = [...$].sort((T, q) => q - T);
    for (const T of O)
      G.push({ shape: o[T].shape, origIdx: T }), o.splice(T, 1), s.splice(T, 1);
    G.sort((T, q) => {
      const z = T.shape.trueArea || T.shape.area;
      return (q.shape.trueArea || q.shape.area) - z;
    });
    const N = new Set(o.map((T) => T.shape.autoId)), L = {
      ...i.scoringWeights || Le,
      contour: 0.15
      // 5x boost — strongly favor contour-matching positions
    }, v = { ...i, scoringWeights: L }, D = G.map((T) => {
      const q = Ps(T.shape.autoId, N, i.contourMatches);
      return { ...T, contourScore: q?.complementScore ?? 0, contourMatch: q };
    });
    D.sort((T, q) => {
      if (q.contourScore !== T.contourScore) return q.contourScore - T.contourScore;
      const z = T.shape.trueArea || T.shape.area;
      return (q.shape.trueArea || q.shape.area) - z;
    });
    let B = 0;
    for (const { shape: T, contourMatch: q } of D) {
      if (!T.outline?.length || T.outline.length < 3) continue;
      let z = null, Q = 1 / 0;
      const K = [...i.shapeRotationMap?.get(T.autoId) || i.rotationSteps];
      if (q && q.optimalRotationB !== 0) {
        const J = q.optimalRotationB;
        K.some((ct) => Math.abs(ct - J) < 0.01) || K.push(J);
      }
      for (const J of K) {
        const ct = vs(
          T,
          Kt(T),
          J,
          n,
          o,
          v,
          q
        );
        ct && ct.score < Q && (Q = ct.score, z = {
          shapeAutoId: T.autoId,
          x: ct.x,
          y: ct.y,
          rotation: J
        });
      }
      z && (s.push(z), o.push(Yt(T, z.x, z.y, z.rotation)), N.add(T.autoId), B++, h++);
    }
    l.rebuild(o);
    for (let T = 0; T < o.length; T++) {
      const q = It(T, o, c, n.l, n.w, i.spacing, l);
      q && (l.remove(T, o[T].bounds), o[T] = q, l.insert(T, q.bounds), bt(s, T, q));
    }
    let k = 0;
    for (const T of o) {
      const q = c === "x" ? T.bounds.maxX : T.bounds.maxY;
      q > k && (k = q);
    }
    if (console.log(`[nesting] Phase 5 round ${S + 1}: re-inserted ${B}/${G.length}, extent ${g.toFixed(1)} → ${k.toFixed(1)}`), k > g) {
      console.log(`[nesting] Phase 5 round ${S + 1}: rollback (extent increased)`), s.length = 0, o.length = 0;
      for (const T of P) s.push(T);
      for (const T of M) o.push(T);
      l.rebuild(o);
      break;
    }
    if (k >= g * 0.99) break;
  }
  l.rebuild(o);
  for (let S = 0; S < 3; S++) {
    let g = 0;
    const x = [...Array(o.length).keys()].sort((y, I) => {
      const b = c === "x" ? o[y].bounds.maxX : o[y].bounds.maxY;
      return (c === "x" ? o[I].bounds.maxX : o[I].bounds.maxY) - b;
    });
    for (const y of x) {
      const I = It(y, o, c, n.l, n.w, i.spacing, l);
      I && (l.remove(y, o[y].bounds), o[y] = I, l.insert(y, I.bounds), bt(s, y, I), g++);
      const b = It(y, o, u, n.l, n.w, i.spacing, l);
      b && (l.remove(y, o[y].bounds), o[y] = b, l.insert(y, b.bounds), bt(s, y, b), g++);
    }
    if (h += g, g === 0) break;
  }
  const w = /* @__PURE__ */ new Set();
  for (let S = 0; S < o.length; S++)
    if (!w.has(S)) {
      for (let g = S + 1; g < o.length; g++)
        if (!w.has(g) && Rt(o[S].bounds, o[g].bounds) && fe(o[S].polygon, o[g].polygon, 0)) {
          const x = _t(o[S].polygon), y = _t(o[g].polygon);
          (Tt(x, o[g].polygon) || Tt(y, o[S].polygon)) && (console.log(`[nesting] Final guard dropped ${o[g].shape.autoId} — overlapped ${o[S].shape.autoId}`), w.add(g));
        }
    }
  if (w.size > 0) {
    const S = [], g = [];
    for (let x = 0; x < o.length; x++)
      w.has(x) || (S.push(o[x]), g.push(s[x]));
    o.length = 0, s.length = 0;
    for (const x of S) o.push(x);
    for (const x of g) s.push(x);
  }
  let m = 0;
  for (const S of o) {
    const g = c === "x" ? S.bounds.maxX : S.bounds.maxY;
    g > m && (m = g);
  }
  return { placements: s, moved: h, maxExtent: m };
}
function pl(t) {
  const e = [];
  for (let n = 0; n < t; n++)
    e.push(n * 2 * Math.PI / t);
  return e;
}
function gl(t) {
  return t.map((e) => {
    if (e instanceof Me)
      return e;
    const n = e.outline, i = Array.isArray(n) && n.length >= 3, r = i ? n : [
      { x: 0, y: 0 },
      { x: e.l, y: 0 },
      { x: e.l, y: e.w },
      { x: 0, y: e.w },
      { x: 0, y: 0 }
    ];
    return new Me({
      ...e.toData(),
      outline: r,
      trueArea: i ? xa(r) : e.l * e.w,
      nestingRotation: 0
    });
  });
}
function ml(t, e, n) {
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
const yl = {
  async calculation(t, e, n) {
    const i = this.config, r = t?.rotationSteps || i?.nesting?.rotationSteps || 24, s = t?.spacing ?? i?.nesting?.spacing ?? 0, o = t?.contourAnalysis ?? i?.nesting?.contourAnalysis ?? !0, a = t?.strategy || "gravity", l = t?.compressionAxis ?? "x", c = t?.anneal ?? !0, u = t?.annealIterations ?? 5e3, h = e?.saw?.bladeWidth ?? 0, f = h + s;
    A("nesting", `Starting nesting: ${n.length} shapes, ${r} rotation steps, strategy: ${a}, bladeWidth: ${h}, spacing: ${f}`);
    const d = (k, T, q, z) => {
      this?.job && this.job.updateProgress({
        socketId: this.socketId,
        type: "algo",
        message: "progress",
        stockCount: 1,
        shapeCount: k,
        phase: T,
        placed: q,
        total: z
      });
    };
    d(0, "preparing");
    const p = gl(n), w = 24;
    let m = 0, S = 0;
    for (const k of p) {
      if (!k.outline || k.outline.length <= w) continue;
      const T = yt(k.outline);
      let z = Math.sqrt(T.width ** 2 + T.height ** 2) * 5e-3, Q = k.outline;
      for (let J = 0; J < 8 && (Q = wa(k.outline, z), !(Q.length <= w)); J++)
        z *= 1.5;
      let K = !1;
      if (Q.length < k.outline.length && Q.length >= 6) {
        K = !0;
        for (const J of k.outline)
          if (!Tt(J, Q)) {
            K = !1;
            break;
          }
      }
      if (K)
        m++, k.placementOutline = Q;
      else {
        const J = Ra(k.outline);
        J.length >= 4 && J.length < k.outline.length && (S++, k.placementOutline = J);
      }
    }
    (m > 0 || S > 0) && console.log(`[nesting] Simplified ${m} outlines to ≤${w} vertices, ${S} via convex hull (DP would cut inward)`);
    const g = pl(r);
    d(0, "analysing");
    const x = o ? Ha(p) : [];
    x.length > 0 && A("nesting", `Found ${x.length} contour matches`);
    const y = new Ja();
    y.setSpacing(f);
    const I = /* @__PURE__ */ new Map();
    let b = 0;
    for (const k of p) {
      const T = k.placementOutline && k.placementOutline.length >= 3 ? k.placementOutline : k.outline, q = Ua(T, g);
      I.set(k.autoId, q), b += q.length;
    }
    const $ = `Symmetry filter: avg ${p.length > 0 ? (b / p.length).toFixed(1) : "0"} rotations/shape (was ${g.length})`;
    A("nesting", $), console.log(`[nesting] ${$}`), d(0, "placing");
    const P = [l];
    let M = null, G = 1 / 0, O = l;
    for (const k of P) {
      const T = {
        rotationSteps: g,
        spacing: f,
        contourMatches: x,
        nfpCache: y,
        strategy: a,
        compressionAxis: k,
        scoringWeights: t?.scoringWeights,
        shapeRotationMap: I,
        onProgress: (K, J) => {
          d(K, "placing", K, J), this?.job?.extendLock && this.job.extendLock(3e5).catch(() => {
          });
        }
      }, q = setInterval(() => {
        this?.job?.extendLock && this.job.extendLock(3e5).catch(() => {
        });
      }, 12e4);
      let z;
      try {
        z = await rl(e, p, T);
      } finally {
        clearInterval(q);
      }
      A("nesting", `[axis=${k}] Placed ${z.length}/${p.length} shapes`), d(z.length, "placing");
      let Q = 1 / 0;
      if (c && z.length >= 2) {
        d(z.length, "optimising");
        const K = hl(
          z,
          p,
          e,
          T,
          { maxIterations: u }
        );
        z = K.placements, Q = K.stats.bestEnergy;
        const J = K.stats, ct = `SA [axis=${k}]: ${J.accepted} accepted (${J.improving} improving) / ${J.iterations} iterations, energy ${J.initialEnergy.toFixed(6)} → ${J.bestEnergy.toFixed(6)} (${J.improved ? `improved by ${((1 - J.bestEnergy / J.initialEnergy) * 100).toFixed(2)}%` : "no improvement"})`;
        A("nesting", ct), console.log(`[nesting] ${ct}`);
      } else if (z.length > 0) {
        const K = k === "x" ? e.l : e.w;
        let J = 0;
        for (const ct of z) {
          const Ye = p.find((Ms) => Ms.autoId === ct.shapeAutoId);
          if (!Ye) continue;
          const Bn = k === "x" ? ct.x + Ye.l : ct.y + Ye.w;
          Bn > J && (J = Bn);
        }
        Q = J / K;
      }
      if (z.length >= 2) {
        d(z.length, "compacting");
        const K = dl(z, p, e, T);
        z = K.placements, K.moved > 0 && A("nesting", `[axis=${k}] Compaction: ${K.moved} shapes moved tighter`);
        const J = k === "x" ? e.l : e.w;
        Q = K.maxExtent / J;
      }
      console.log(`[nesting] [axis=${k}] Post-compaction energy: ${Q.toFixed(6)}, placed: ${z.length}`), (!M || z.length > M.length || z.length === M.length && Q < G) && (M = z, G = Q, O = k);
    }
    const N = M;
    A("nesting", `Best axis: ${O}, energy: ${G.toFixed(6)}, placed: ${N.length}/${p.length}`);
    const L = [];
    for (const k of N) {
      const T = p.find((q) => q.autoId === k.shapeAutoId);
      T && (T.x = k.x, T.y = k.y, T.nestingRotation = k.rotation, T.added = !0, T.stock = e, L.push(T));
    }
    const v = ml(e, L, p);
    d(L.length, "cutting-plan");
    let D = null;
    try {
      D = $s(L, e, { ...t?.cnc, kerfWidth: h }), console.log(`[nesting] Cutting plan: ${D.contours.length} contours, cut: ${D.totalCutDistance}mm, rapid: ${D.totalRapidDistance}mm` + (D.commonLineSaved > 0 ? `, common-line saved: ${D.commonLineSaved}mm` : ""));
    } catch (k) {
      console.error("[nesting] Cutting plan generation failed:", k);
    }
    D && (this.cuttingPlans || (this.cuttingPlans = {}), this.cuttingPlans[e.autoId] = D);
    const B = {
      shapes: p.map((k) => k.compress()),
      firstShape: L[0] || null,
      topPriorityShape: "",
      cutType: "nesting",
      type: "algo",
      stock: e,
      stockID: e.id,
      score: v,
      cuttingPlan: D
    };
    await mt.call(this, B, "nesting");
  }
}, Bt = {
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
    await Wt.calculation.call(this, t, e, n);
  },
  guillotine: async function(t, e, n, i = []) {
    if (this.counters.placement = 0, t.secondRun && i.length) {
      for (const r of i) {
        const s = n.filter((o) => !o.added);
        r.shapes = s, await xe.call(
          this,
          t,
          e,
          s,
          r
        );
      }
      return;
    }
    e.saw?.cutPreference === "flex" ? await mi.call(this, t, e, n) : await xe.call(
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
        r.shapes = s, await xe.call(
          this,
          t,
          e,
          s,
          r
        );
      }
      return;
    }
    e.saw?.cutPreference === "flex" ? await mi.call(this, t, e, n) : await xe.call(
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
        e.saw.cutPreference = "w", i = await Bt.guillotine.call(
          this,
          t,
          e,
          n
        );
        break;
      case "efficiency":
        e.saw.efficiencyOptions.primaryCompression = "l", i = await Bt.efficiency.call(
          this,
          t,
          e,
          n
        );
        break;
    }
    await mt.call(this, i);
  },
  linear: async function(t, e, n) {
    const i = ro.call(this, e, n);
    i && e && (ao(i, e, n), i.stock = e, await mt.call(this, i));
  },
  nesting: async function(t, e, n) {
    await yl.calculation.call(this, {}, e, n);
  }
};
async function Sl({
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
  const l = e.l + e.x - t.l, c = e.w + e.y - t.w;
  if (l < 0 || c < 0) return !1;
  const u = new on(), h = e.getStock;
  if (o)
    for (const f of o.points.values()) {
      const d = vo(
        t,
        f,
        e
      );
      d && u.addPoints(d.toArray());
    }
  for (const f of s.points.values()) {
    const d = To(
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
          for (const w of i)
            if (d.tooClose = Yi(
              p,
              w,
              e,
              !1
            ), d.tooClose) break;
        }
      }
  }
  for (const f of u.points.values()) {
    if (f.tooClose || E.greaterThan(f.x, l) || E.greaterThan(f.y, c) || (t.x = f.x, t.y = f.y, ke(t, i, e))) continue;
    di(
      t,
      e,
      n,
      i,
      r,
      f,
      a
    );
    let p = r.length > 1;
    (e.cutType === "efficiency" && this.config.groups.efficiency.position || ["guillotine", "beam"].includes(e.cutType) && this.config.groups.guillotine.position) && (xl.call(this, r, e) || (p = !1)), p && (e.cutType === "efficiency" && this.config.groups.efficiency.position || ["guillotine", "beam"].includes(e.cutType) && this.config.groups.guillotine.position) && f.type !== "group" && Z(t) && co({
      container: e,
      containerPlacedShapes: i,
      unplacedShapes: r,
      shape: t,
      point: f,
      config: this.config,
      scoreFunction: (w, m, S, g, x) => {
        di(
          w,
          m,
          n,
          S,
          g,
          x,
          a
        );
      }
    });
  }
  return !0;
}
function xl(t, e) {
  return !0;
}
async function Rs(t, e, n = null, i = null, r = {}, s = null) {
  if (!i)
    throw new Error("no testFunction provided to testShapeRotations");
  if (typeof i != "function")
    throw new Error("testFunction provided to testShapeRotations is not a function");
  if (i.constructor.name !== "AsyncFunction")
    throw new Error("testFunction provided to testShapeRotations must be async");
  if (X(t)) {
    s && (r[s] = t.rot), await i.call(this, r);
    return;
  }
  ht(t.orientationLock) && (n = lo(t, e));
  const o = ht(n) ? n : 0;
  qt(t, o, e) && (Pt(t, o, e), s && (r[s] = o), await i.call(this, r));
  const a = 1;
  n === null && !t.isSquare && qt(t, a, e) && (Pt(t, a, e), s && (r[s] = a), await i.call(this, r));
}
async function xn(t, e, n) {
  if (!t.length) return !1;
  if (gt(t)) {
    const h = /* @__PURE__ */ new Set();
    t = t.filter((f) => h.has(f.autoId) ? !1 : (h.add(f.autoId), !0));
  }
  const r = n.getStock;
  if (r.saw && !se(r.saw)) throw new Error("not real saw");
  const s = t?.filter((h) => h.added);
  if (!s.length) return;
  const o = new Set(s.map((h) => h.autoId)), a = s.filter((h) => jt(h, n, "x") && jt(h, n, "y")), l = ti.call(
    this,
    null,
    a,
    n
  );
  if (l.points.size === 0) return !1;
  const c = e ? {
    x: /* @__PURE__ */ new Map([[e.x, [e]]]),
    y: /* @__PURE__ */ new Map([[e.y, [e]]])
  } : {
    x: /* @__PURE__ */ new Map(),
    y: /* @__PURE__ */ new Map()
  };
  function u() {
    const h = ft(
      t,
      r,
      "filter"
    ), f = /* @__PURE__ */ new Set();
    for (const m of h)
      if (X(m) && !pt(m)) {
        const S = m;
        if (S.shapes?.length)
          for (const g of S.shapes)
            f.add(g.autoId);
      }
    const d = [], p = [];
    for (const m of h)
      if (!pt(m)) {
        if (Re(m) || rt(m)) {
          const S = m;
          if (!S.shapes || S.shapes.length === 0) continue;
          d.push(m);
          continue;
        }
        if (_e(m)) {
          if (f.has(m.autoId) || m?.group?.inGroup) continue;
          p.push(m);
        }
      }
    const w = d.length === 0 ? p : p.length === 0 ? d : [...d, ...p];
    return A("groups", () => `[getRelevantUnplacedShapes] ${w.length} unplaced (${d.length} groups, ${p.length} shapes)`), d.length > 0 && d.forEach((m) => {
      A("groups", () => `Group ${m.id}: ${m.shapes?.length || 0} child shapes, ${m.shapes.map((S) => S.id).join()}, added=${m.added}`);
    }), w;
  }
  for (let h = u(); h.length; ) {
    let f = function() {
      const x = h.filter((b) => typeof b?.bestScore?.total == "number");
      if (!x?.length) return !1;
      const y = Il(x);
      if (!y) return null;
      const I = wl.call(this, n, r, c, y, s, a, o);
      return I.added && !o.has(I.autoId) && (X(I) && I.type !== "position" || (s.push(I), a.push(I)), o.add(I.autoId), st(n) && (n.shapes = n.shapes.filter((C) => C.autoId !== I.autoId))), F([
        () => R(I.added).to.be.true,
        () => R(gt(s), "duplicates found in containerPlacedShapes").to.be.false,
        () => R(s.every((b) => b.added), "containerPlacedShapes contains unplaced shapes").to.be.true
      ]), { bestShapeOrGroup: y, winningShapeOrGroup: I };
    }, d = null;
    this.uniqueShapes.length > 1 && n.cutType === "efficiency" && this.config.efficiency.rayCasting && !this.hasMinSpacing && (d = Po(
      n,
      s
    ));
    const p = h.length;
    let w = !1;
    for (let x = 0; x < p; x++) {
      let y = !1;
      if (w && h[x].isSameSize(h[x - 1]))
        continue;
      for (let C = 0; C < x; C++)
        if (h[C].isSameSize(h[x])) {
          y = !0;
          break;
        }
      if (y) {
        w = !0;
        continue;
      } else
        w = !1;
      const I = h[x];
      I.resetBestScore();
      const b = En.call(this, n, r, I);
      if (await Rs.call(
        this,
        I,
        n,
        null,
        Sl,
        {
          shapeOrGroup: I,
          container: n,
          weighting: b,
          containerPlacedShapes: s,
          unplacedShapes: h,
          placementPositions: l,
          rayCastCoords: d,
          placedCoords: c
        }
      ), X(I) && !pt(I) && !rt(I)) {
        const C = I;
        if (!C.bestScore || typeof C.bestScore.total != "number") {
          A("groups", () => `[placeShapes] Group ${C.id} has no valid placement. Releasing it and all clones.`);
          const $ = C.autoId.replace(/\.\d+$/, ""), P = [];
          for (const M of t)
            if (X(M) && !pt(M)) {
              const G = M;
              G.autoId.replace(/\.\d+$/, "") === $ && !G.added && P.push(G);
            }
          if (P.length > 0) {
            A("groups", () => `  Releasing ${P.length} groups (including clones)`);
            const M = [], G = /* @__PURE__ */ new Set();
            for (const O of P)
              if (O.shapes && O.shapes.length > 0)
                for (const N of O.shapes)
                  G.has(N.autoId) || (M.push(N), G.add(N.autoId));
            for (const O of P)
              A("groups", () => `    Destroying group ${O.id}`), O.destroy();
            M.length > 0 && (A("groups", () => `  Adding ${M.length} released shapes back to containerShapes`), t.push(...M));
          }
        }
      }
    }
    const m = f.call(this, t);
    if (m === !1 || m === null) return;
    const { bestShapeOrGroup: S, winningShapeOrGroup: g } = m;
    if (h = u(), h.length > 0) {
      const x = ti(
        g ? [g] : [],
        a,
        n
      );
      l.addPoints(x.toArray()), l.deletePoint(new tn(S.x, S.y));
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
function bl(t, e) {
  if (this.config.evo.disable || t.stockID !== e.id) return !1;
  const n = ft(this.shapeList, e, "filter", null), i = Gt(n, null, !0);
  return i.length <= 1 || e?.saw?.stockType === "roll" || i.length > 100 || t?.algoTime > 2e3 || !this.enableEvo || t.cutType === "efficiency" && t?.score[this.successMetric] < 0.65 || t?.score?.totalShapesPlaced <= 2 ? !1 : n.length <= this.config.evo.stockLimit;
}
function wl(t, e, n, i, r, s, o) {
  const a = X(i) ? i : i.bestScore?.group ?? null;
  if (a) {
    const c = a.shapes.filter((u) => u.added || u.group?.inGroup);
    if (c.length > 0)
      A("groups", () => `[placeBestShapeOrGroup] Group ${a.id} is invalid - ${c.length}/${a.shapes.length} shapes already placed. Placing individual shape instead.`), X(i) || (i.bestScore.group = null);
    else {
      if (A("groups", () => `[placeBestShapeOrGroup] Placing group ${a.id} with ${a.shapes.length} shapes (type=${a.type})`), a.placementOrder = this.counters.placement, this.counters.placement += a.shapes.length, a.setPositionToBestScore(), fi(t, a), a.addToStock(e), un(n, a), a.placeMyShapes(e), a.type === "position")
        for (const u of a.shapes)
          this.shapeList.some((h) => h.autoId === u.autoId) || this.shapeList.push(u);
      if (a.type !== "position" && a.type !== "firstShape")
        for (const u of a.shapes)
          u.added && !u.group?.inGroup && !o.has(u.autoId) && (r.push(u), s.push(u), o.add(u.autoId));
      return a;
    }
  } else i && (i.placementOrder = this.counters.placement++, i.setPositionToBestScore(), fi(t, i), i.addToStock(e), un(n, i));
  return a || i;
}
function Il(t) {
  return t.reduce((n, i) => {
    if (i.bestScore.total > n.bestScore.total)
      return i;
    if (i.bestScore.total === n.bestScore.total) {
      if (X(i) && !X(n))
        return i;
      if (i.area > n.area) return i;
    }
    return n;
  });
}
let Cl = class {
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
function $l(...t) {
  return class {
  };
}
const me = {
  Schema: Cl,
  model: $l,
  connect: () => Promise.resolve(),
  connection: {}
}, Zt = me.Schema, ks = {
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
  // Optional per-stock pricing override. When set, the checkout pricing layer
  // evaluates this expression once per stock with that stock's calculation
  // context (see shared/formula/pricing-variables.ts) and uses the result in
  // place of the configured global strategy's contribution for this stock.
  pricingFormula: {
    type: String,
    default: void 0
  },
  grain: {
    type: String,
    enum: ["l", "w", "", null],
    default: ""
  },
  trim: Array,
  db_sawId: {
    type: Zt.Types.ObjectId,
    ref: "saws"
  },
  extras: {
    banding: {
      type: Zt.Types.ObjectId,
      ref: "extras"
    },
    finish: {
      type: Zt.Types.ObjectId,
      ref: "extras"
    },
    planing: {
      type: Zt.Types.ObjectId,
      ref: "extras"
    },
    machining: {
      type: Zt.Types.ObjectId,
      ref: "extras"
    }
  },
  category: String,
  variant: String,
  /** Manufacturer / brand name — e.g. "Egger", "Kronospan", "Senoplast".
   *  Distinct from `variant` (which is a free-form sub-grouping) so shops
   *  with multi-brand inventories can filter by manufacturer cleanly. The
   *  `brands` collection optionally carries the per-brand logo + description
   *  shown in the LibraryTab card and DetailModal. */
  brand: String,
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
  finish: String,
  fullSizeOnly: {
    type: Boolean,
    default: !1
  },
  // Optional external links displayed in the DetailModal (shop-owned materials
  // can populate these via the editor; library-sourced rows pull links from
  // the per-brand MaterialCatalogueCategory document instead).
  urls: {
    type: [{
      label: { type: String, default: "" },
      url: { type: String, default: "" }
    }],
    default: []
  },
  // Provenance discriminator. 'self' = shop-owned row (imported, manually created, or inherited
  // from the org's inventory). 'library' = shadow row created from a shared catalogue subscription.
  // Destructive import paths scope their deletes to source === 'self' so library rows survive.
  source: {
    type: String,
    enum: ["self", "library"],
    default: "self",
    index: !0
  },
  // When source === 'library', identifies which catalogue entry this row mirrors.
  libraryRef: {
    catalogueKey: String,
    entryId: {
      type: Zt.Types.ObjectId,
      ref: "material_catalogue_entry"
    }
  },
  // Field paths the user has explicitly pinned — `refreshClonesAfterRuleRemoval`
  // (server/services/ecommerce/rule-cleanup.ts) skips these when undoing a
  // removed rule's writes. Without this entry in the schema, Mongoose's strict
  // mode silently drops the field on `Material.create({ _ruleOverrides: [...] })`,
  // which makes the cleanup logic blow away values the user marked as
  // "explicit intent". Default `undefined` keeps docs without pins compact.
  _ruleOverrides: {
    type: [String],
    default: void 0
  }
}, Pl = me.Schema, Lt = new Pl({
  organisation: {
    type: String,
    required: !0
  },
  // Per-org natural key. Required + unique per `{ organisation, code }` so
  // the calculator round-trip identifier (the parent material's code) can
  // always resolve back to a single Material on enrichment. Stock items
  // inherit this value at display/calc time and don't store their own.
  code: {
    type: String,
    required: !0,
    trim: !0
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
  ...ks
});
Lt.index({ organisation: 1, name: 1 });
Lt.index({ organisation: 1, type: 1 });
Lt.index({ organisation: 1, _id: -1 });
Lt.index({ organisation: 1, l: 1, w: 1 });
Lt.index({ organisation: 1, code: 1 }, { unique: !0, sparse: !0 });
Lt.index(
  { organisation: 1, "libraryRef.catalogueKey": 1, "libraryRef.entryId": 1 },
  { sparse: !0 }
);
Lt.plugin(Fi);
const vl = me.model(
  "material",
  Lt,
  "materials"
), ki = me.Schema, ot = new ki({
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
    type: ki.Types.ObjectId,
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
  ...ks
});
function Tl(t) {
  return t ? {
    l1: ye({ v: t[2], dp: 4 }),
    l2: ye({ v: t[3], dp: 4 }),
    w1: ye({ v: t[0], dp: 4 }),
    w2: ye({ v: t[1], dp: 4 })
  } : {
    l1: 0,
    l2: 0,
    w1: 0,
    w2: 0
  };
}
ot.pre("save", function() {
  this.area = (this.l - parseFloat(this?.trim?.[2]) - parseFloat(this?.trim?.[3])) * (this.w - parseFloat(this?.trim?.[0]) - parseFloat(this?.trim?.[1]));
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
ot.index({ organisation: 1, ecommerce: 1, isOffcut: 1, material: 1, name: 1 });
ot.index({ organisation: 1, isOffcut: 1, material: 1 });
ot.index(
  { organisation: 1, "libraryRef.catalogueKey": 1, "libraryRef.entryId": 1 },
  { sparse: !0 }
);
ot.plugin(Fi);
const Rl = me.model(
  "stock",
  ot,
  "stock"
);
async function kl(t = [], e, n = []) {
  e instanceof Ee || (e = new Ee(e));
  let i = [];
  const r = [];
  for (const s of t) {
    if (!ht(s.material)) continue;
    const o = i.filter((a) => {
      if (Vt(s, a)) {
        let l = !1, c = !1, u = !0;
        if (a?.saw?.stockType === "linear" && (E.equalTo(s.w, a.w) || (u = !1)), (s.t === a.t || !ht(a.t)) && (c = !0), s.material === a.material && (l = !0), a?.saw?.stockType === "linear") {
          if (l && c && u)
            return !0;
        } else if (l && c) return !0;
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
      }, [l, c] = await Promise.all([
        vl.findById(s?.material?.toLowerCase())?.lean(),
        //TODO make sorting order and limit configurable based on org
        Rl.find(a).sort({ area: 1 }).limit(3).lean()
      ]);
      l && c.length ? c.forEach((u) => {
        const h = Tl(u.trim), f = {
          l: u.l - (h.l1 ?? 0) - (h.l2 ?? 0),
          w: u.w - (h.w1 ?? 0) - (h.w1 ?? 0)
        };
        if (!(E.lessThanOrEqualTo(
          s.l,
          f.l
        ) && E.lessThanOrEqualTo(
          s.w,
          f.w
        ) || E.lessThanOrEqualTo(
          s.w,
          f.l
        ) && E.lessThanOrEqualTo(
          s.l,
          f.w
        )))
          return;
        const d = uo.parse({
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
          name: l.name,
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
        i.push(new en(d)), Array.isArray(s.stockLock) ? s.stockLock.push(d.parentId) : s.stockLock = [d.parentId];
      }) : r.push({
        material: l.name,
        t: s.t,
        shape: s.parentId
      });
    } catch (a) {
      throw console.error("error finding stock", a.message), new Error(a);
    }
  }
  if (i.length)
    i = nn(i);
  else if (!n?.length)
    throw new Error("No relevant stock found - check material, thickness, dimensions & stock quantity");
  return {
    stockList: i,
    unavailableStock: r
  };
}
function El(t, e) {
  const n = Math.min(t.l, t.w), i = Math.max(t.l, t.w), r = t.trim;
  return `${e ? t.parentId + "|" : ""}${t.t}|${t.orientationLock}|${t.material ?? ""}|${n}|${i}|${r?.l1 ?? ""}|${r?.l2 ?? ""}|${r?.w1 ?? ""}|${r?.w2 ?? ""}`;
}
function Al(t, e, n = !1) {
  const i = /* @__PURE__ */ new Map();
  for (const s of e) {
    s.identicalTo = [];
    let o = i.get(s.parentId);
    o || (o = [], i.set(s.parentId, o)), o.push(s);
  }
  const r = /* @__PURE__ */ new Map();
  for (const s of t) {
    const o = El(s, n);
    let a = r.get(o);
    a || (a = /* @__PURE__ */ new Set(), r.set(o, a)), a.add(s.parentId);
  }
  for (const s of r.values())
    if (!(s.size <= 1))
      for (const o of s) {
        const a = i.get(o);
        if (a)
          for (const l of a)
            for (const c of s)
              c !== l.parentId && l.identicalTo.push(c);
      }
  for (const [s, o] of i)
    if (o.length > 1)
      for (const a of o)
        a.identicalTo.includes(s) || a.identicalTo.push(s);
}
function Ml(t, e) {
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
      const l = de(s, a);
      o[a.parentId] = {
        any: Vt(s, a, null),
        0: l.includes(0),
        1: l.includes(1)
      };
    }
    for (const a of r)
      a.fitsStock = o;
  }
}
function Dl(t, e, n, i) {
  const r = i?.similarityThreshold ?? 0.1, s = i?.selectionStrategy, o = i?.minPerShape ?? 0, a = i?.minTotal ?? 0;
  if (t.length <= 1)
    return e;
  const { filtered: l, excludedGroups: c } = Ol(
    t,
    n,
    { similarityThreshold: r, selectionStrategy: s }
  );
  let u = [...l], h = [...c];
  if (o > 0) {
    const p = /* @__PURE__ */ new Map();
    for (const m of e) {
      const S = p.get(m.parentId) || 0;
      p.set(m.parentId, S + 1);
    }
    const w = u.filter((m) => (p.get(m.parentId) || 0) < o);
    if (w.length > 0) {
      for (const m of w) {
        const S = m.parentId;
        for (const g of h) {
          const x = g.filter((y) => (p.get(y.original.parentId) || 0) >= o);
          if (x.length > 0) {
            const y = x.sort((b, C) => (p.get(C.original.parentId) || 0) - (p.get(b.original.parentId) || 0))[0], I = u.findIndex((b) => b.parentId === S);
            if (I !== -1) {
              u[I] = y.original;
              const b = g.findIndex((C) => C === y);
              b !== -1 && g.splice(b, 1);
              break;
            }
          }
        }
      }
      h = h.filter((m) => m.length > 0);
    }
  }
  if (a > 0) {
    const p = new Set(u.map((m) => m.parentId)), w = e.filter((m) => p.has(m.parentId)).length;
    if (w < a && h.length > 0) {
      const m = [];
      let S = w;
      for (; S < a && h.some((g) => g.length > 0); ) {
        for (let g = 0; g < h.length && S < a; g++) {
          const x = h[g];
          if (x.length > 0) {
            const I = Gl([...x], s)[0], b = I.original.parentId, C = e.filter((P) => P.parentId === b).length;
            m.push(I.original), S += C;
            const $ = x.findIndex((P) => P === I);
            $ !== -1 && x.splice($, 1);
          }
        }
        if (h = h.filter((g) => g.length > 0), h.length === 0 || h.every((g) => g.length === 0))
          break;
      }
      u = [...u, ...m];
    }
  }
  const f = new Set(u.map((p) => p.parentId));
  return e.filter((p) => f.has(p.parentId));
}
function Gl(t, e) {
  switch (e) {
    case "largest":
      return t.sort((n, i) => i.area - n.area);
    case "smallest":
      return t.sort((n, i) => n.area - i.area);
    default:
      return t;
  }
}
function Ol(t, e, n) {
  const i = n.similarityThreshold, r = n.selectionStrategy;
  if (t.length <= 1) return { filtered: t, excludedGroups: [] };
  const s = t.map((c) => {
    const u = {
      l: c.longSide,
      w: c.shortSide
    };
    return {
      original: c,
      // Keep reference to the original shape object
      rotated: u,
      // Normalized dimensions for comparison (keeping 'rotated' name for compatibility)
      area: c.area
      // Area for 'largest'/'smallest' selection
    };
  }), o = [];
  for (const c of s) {
    let u = !1;
    for (const h of o)
      if (h.some((f) => Ll(c.rotated, f.rotated, i))) {
        h.push(c), u = !0;
        break;
      }
    u || o.push([c]);
  }
  const a = [], l = [];
  return o.forEach((c) => {
    if (c.length === 1) {
      a.push(c[0]);
      return;
    }
    let u;
    switch (r) {
      case "largest":
        u = c.reduce((f, d) => d.area > f.area ? d : f, c[0]);
        break;
      case "smallest":
        u = c.reduce((f, d) => d.area < f.area ? d : f, c[0]);
        break;
      default:
        u = c[0];
    }
    a.push(u);
    const h = c.filter((f) => f !== u);
    h.length > 0 && l.push(h);
  }), {
    filtered: a.map((c) => c.original),
    excludedGroups: l
  };
}
function Ll(t, e, n) {
  const i = Math.abs(t.l - e.l) / Math.max(t.l, e.l, 1), r = Math.abs(t.w - e.w) / Math.max(t.w, e.w, 1);
  return i <= n && r <= n;
}
function Bl(t, e, n) {
  if (A("stack", () => `previous stock ${e.id}`), ["l", "w", "material", "t"].some((s) => t[s] !== e[s])) return !1;
  const i = t.cutType === "guillotine" || t.cutType === "beam", r = t.saw.guillotineOptions?.strategy !== "time";
  if (!i || i && r) {
    const s = Es.call(
      this,
      t,
      e,
      n,
      this.shapeList
    );
    if (s)
      return A("stack", () => `stack found: ${t.id} === ${e.id}`), this.recordStackToBestResult(t, n), t.used = !0, t.score = e.score, s;
  }
  return !1;
}
function Es(t, e, n, i) {
  if (!this.config.stack || !n.length) return !1;
  const r = t.saw;
  if (!r?.options?.stackingMode || r.options.stackingMode === "none") return !1;
  if (A("stack", () => `looking for stack for ${t.id}, comparing to ${e.id}`), r.cutType === "beam" && e.stack) {
    let s = e, o = 1;
    if (e.stack.stock ? (s = e.stack.stock, o = s.stack?.number || 1) : e.stack.number && (o = e.stack.number), s.t * o + t.t > r.stackHeight)
      return !1;
  }
  if (t.parentId === e.parentId) {
    if (r.cutType === "beam" && r.stackHeight > 0 && t.t * 2 > r.stackHeight)
      return !1;
    const s = $t(i, e);
    if (!s.length) return !1;
    const o = As.call(this, [e], s, t, n, !0, r.options.stackingMode === "identical");
    if (o)
      return t.stack = { stock: o }, o.stack.number === 1 ? o.stack.number = 2 : o.incrementStack(), o;
  }
  return !1;
}
function Xl(t, e) {
  if (!this.config.findDuplicatePatterns) return !1;
  A("stack", () => `🔎 checkForDuplicates called for ${t.id}`);
  const n = this.shapeList.filter((o) => o.added);
  A("stack", () => `   Total shapes added across all stock: ${n.length}`);
  const i = this.stockList.filter((o) => o.used && o.id !== t.id && o.l === t.l && o.w === t.w && o.t === t.t);
  if (A("stack", () => `   Relevant used stock with matching dimensions: ${i.map((o) => o.id).join(", ")}`), !i.length)
    return A("stack", () => `   No relevant stock found for ${t.id}`), !1;
  const r = t.saw?.options?.stackingMode === "identical", s = As.call(this, i, n, t, e, !0, r);
  return s ? (A("stack", () => `   ✅ Duplicate found: ${t.id} matches ${s.id}`), fo(s, t), t.used = !0, s) : (A("stack", () => `   No duplicate pattern found for ${t.id}`), !1);
}
function As(t, e, n, i, r = !0, s = !0) {
  if (!t.length || !i.length) return null;
  A("stack", () => `🔍 Checking for duplicate patterns for ${n.id}`), A("stack", () => `   Current shapes count: ${i.length}`), A("stack", () => `   Used stock to check: ${t.map((f) => f.id).join(", ")}`);
  const o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
  for (const f of i) {
    const d = s ? `${f.longSide}|${f.shortSide}|${f.material}` : `${f.longSide}|${f.shortSide}`;
    let p = o.get(d);
    if (p || (p = [], o.set(d, p)), p.push(f), s) {
      if (f.parentId) {
        let w = a.get(f.parentId);
        w || (w = [], a.set(f.parentId, w)), w.push(f);
      }
      if (f.identicalTo && Array.isArray(f.identicalTo))
        for (const w of f.identicalTo) {
          let m = l.get(w);
          m || (m = [], l.set(w, m)), m.push(f);
        }
      if (f.autoId) {
        const w = f.autoId.split(".")[0];
        let m = c.get(w);
        m || (m = [], c.set(w, m)), m.push(f);
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
    A("stack", () => `   📋 Checking against stock ${f.id}`);
    const d = u.get(f.id) || [];
    if (!d.length) {
      A("stack", () => `      ❌ No shapes on ${f.id}, skipping`);
      continue;
    }
    A("stack", () => `      Stock ${f.id} has ${d.length} shapes`);
    const p = d.length;
    if (i.length < p) continue;
    const w = [];
    h.clear();
    let m = !0;
    for (const S of d) {
      let g = null;
      if (s) {
        const x = /* @__PURE__ */ new Set(), y = `${S.longSide}|${S.shortSide}|${S.material}`, I = o.get(y);
        if (I)
          for (const C of I)
            h.has(C) || x.add(C);
        if (S.parentId) {
          const C = l.get(S.parentId);
          if (C)
            for (const P of C)
              h.has(P) || x.add(P);
          const $ = a.get(S.parentId);
          if ($)
            for (const P of $)
              h.has(P) || x.add(P);
        }
        if (S.identicalTo && Array.isArray(S.identicalTo))
          for (const C of S.identicalTo) {
            const $ = a.get(C);
            if ($)
              for (const P of $)
                h.has(P) || x.add(P);
          }
        if (S.autoId) {
          const C = S.autoId.split(".")[0], $ = c.get(C);
          if ($)
            for (const P of $)
              h.has(P) || x.add(P);
        }
        const b = [];
        for (const C of x)
          C.isIdentical(S, !1) && b.push(C);
        b.length === 1 ? (g = b[0], A("stack", () => `      ✓ Shape ${S.id} matched to ${g.id}`)) : b.length > 1 ? (g = b.find((C) => C.parentId === S.parentId) || b[0], A("stack", () => `      ✓ Shape ${S.id} matched to ${g.id} (${b.length} candidates, preferred by parentId: ${g.parentId === S.parentId})`)) : A("stack", () => `      ✗ Shape ${S.id} has no identical match`);
      } else {
        const x = `${S.longSide}|${S.shortSide}`, y = o.get(x), I = y ? y.filter((b) => !h.has(b) && qt(b, S.rot, f)) : [];
        I.length === 1 ? g = I[0] : I.length > 1 && (g = I.find((b) => b.parentId === S.parentId) || I[0]);
      }
      if (g)
        h.set(g, !0), w.push({
          current: g,
          match: S
        });
      else {
        A("stack", () => `      ❌ Failed to match all shapes for ${f.id}`), m = !1;
        break;
      }
    }
    if (m && w.length === p) {
      if (A("stack", () => `      ✅ Perfect match found: ${n.id} matches ${f.id}`), r) {
        n.shapes = [];
        for (const { current: S, match: g } of w)
          S.update({
            x: g.x,
            y: g.y,
            w: g.w,
            l: g.l,
            placementOrder: g.placementOrder,
            added: !0,
            stock: n
          }), n.shapes.push(S);
      }
      return f;
    } else
      A("stack", () => `      ⚠️ Stock ${f.id}: allMatched=${m}, matches=${w.length}, target=${p}`);
  }
  return A("stack", () => `   ❌ No duplicate pattern found for ${n.id}`), null;
}
class Ei extends ho {
  // Zod schema for validation and serialization
  static schema = Ho;
  static computedProperties = Zo;
  // Optional coarse-grained phase timer attached by main.ts:go() to capture
  // placement/refine sub-phases. Not persisted — transient runtime-only state.
  phaseTimer;
  /**
   * Get entity type
   */
  getType() {
    return U.Optimiser;
  }
  constructor(e) {
    const n = qo(e.user, e), i = {
      // Pass through most properties directly
      ...e,
      // Apply defaults for arrays
      stockList: e.stockList || [],
      shapeList: e.shapeList || [],
      userGroups: e.userGroups || [],
      // Config overrides
      config: n,
      successMetric: ni(n, "successMetric", e.successMetric || lt.successMetric),
      enableEvo: ni(n, "evo.disable", !1) ? !1 : e.enableEvo ?? !0,
      weighting: e.weighting || {
        efficiency: St.efficiency,
        guillotine: St.guillotine,
        roll: St.roll
      },
      stockType: e.saw?.stockType || null,
      // Don't skip validation so defaults are applied
      skipSchemaValidation: !1
    };
    super(i), !this.useInventory && this.stockList?.length && this.stockList.forEach((r) => {
      r?.saw?.stockType || (r.saw.stockType = this.saw.stockType);
    }), Gi({
      stocks: this.stockList,
      shapes: this.shapeList
    }, "Optimiser constructor"), this.uniqueStock = te(this.stockList), this.groupList = [], this.init();
  }
  init() {
    const e = [];
    if (this.shapeList = this.shapeList.filter((o) => o.l && o.w), !this.shapeList.length) throw new Error("No parts to process");
    for (const o of this.shapeList)
      !o.id && "parentId" in o && (o.id = `${o.autoId}.0`, o.parentId = o.autoId);
    this.shapeList.some((o) => o.duplicate) || ([...this.shapeList].forEach((a) => {
      a.applyTrim();
      for (let l = a.q; l--; )
        l != 0 && this.shapeList.push(a.clone(l.toString()));
    }), this.shapeList.push(...e), this.shapeList.sort(Et.ID));
    const n = this.shapeList.filter((o) => !X(o));
    this.shapeAnalysis(n, this.stockList);
    const i = [];
    this.userGroups.forEach((o, a) => {
      for (let l = 0; l < o.q; l++) {
        const c = o.toGroup(a, l, this.shapeList, this.saw);
        c && i.push(c);
      }
    });
    const r = po(i, this.stockList, this.saw), s = r.shapeList;
    r.unusableShapes?.length && A("groups", `${r.unusableShapes.length} user groups could not be matched to any stock`), this.shapeList.push(...s), this.uniqueShapes = this.shapeList.filter((o) => !o?.duplicate), this.hasMinSpacing = typeof this?.saw?.options?.minSpacing == "number";
  }
  shapeAnalysis(e, n) {
    Al.call(this, e, this.shapeList), Ar.call(this, e, n), Ml.call(this, e, n);
  }
  recordStackToBestResult(e, n = []) {
    if (this.bestResult) {
      const i = {
        ...this.bestResult,
        stock: e,
        shapes: n.filter((r) => r.added && r.stock.id === e.id).map((r) => r.compress())
      };
      this.bestResult = Ss(i);
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
    n.forEach((a) => a.stockLock.forEach((l) => r.add(l)));
    const s = e.filter((a) => r.has(a.parentId));
    let o = go(s);
    if (!o.length) return [];
    if (i && i?.options?.stockSelection === "smallest")
      return o.sort(Et.AA), [o[0]];
    if (o.some((a) => a.material)) {
      const a = o[0].material;
      o = o.filter((l) => l.material === a);
    }
    if (o.some((a) => a.t)) {
      const a = Math.min(...o.map((l) => l.t));
      o = o.filter((l) => l.t === a);
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
      const a = Bt.getCalculationType(s);
      if (!a) throw new Error(`calculation type not found for stock ${s.id}`);
      if (!Bt.types.includes(a))
        throw new Error(`invalid calculation type: ${a} for stock ${s.id}`);
      return o = o.filter((l) => !l.added && l.stockLock.includes(s.parentId)), await Bt[a].call(
        this,
        {},
        s,
        o
      );
    }
    function i(s, o) {
      const a = s.filter((c) => !c.unusable), l = this.stockRefinement(
        a,
        o,
        this.saw
      );
      return l.sort(Et.ID), A("allStock", `refined stock ${l.map((c) => c.id).join()}`), l;
    }
    this.phaseTimer?.start("placement"), await this.allStock(n, i), this.phaseTimer?.end(), this.saw.stockType === "linear" && (this.phaseTimer?.start("rebalance-linear"), await this.rebalanceUnplacedShapes(), this.phaseTimer?.end()), this.phaseTimer?.start("refine"), this.refineUnplacedShapes(), this.phaseTimer?.end(), this.config.secondRun.enabled && (this.phaseTimer?.start("second-run"), await this.secondRun(), this.phaseTimer?.end()), this.config.captureProfile && "profileEnd" in console && typeof console.profileEnd == "function" && console.profileEnd(e);
    const r = (this.groupList || []).filter((s) => pt(s) && s.added);
    for (const s of this.shapeList)
      if (!(!Z(s) || !s.added)) {
        for (const o of r)
          if (o.shapes.some((a) => a.autoId === s.autoId)) {
            s.group.addedAsGroup = o;
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
    let i, r = null, s = null, o, a, l, c;
    for (let u = te(this.stockList, !1); u.length > 0; u = te(this.stockList, !1)) {
      let h = ft(this.shapeList);
      if (!h?.length) break;
      for (const m of u)
        if (!ft(h, m, "some")) {
          A("allStock", `stock ${m.id} is unusable`), m.unusable = !0;
          break;
        }
      const f = n.call(
        this,
        u,
        h
      );
      if (F([() => R(f.every((m) => se(m.saw))).to.be.true]), !f.length) break;
      if (c) {
        const m = f.findIndex((S) => S?.parentId === c);
        m > -1 && f.unshift(f.splice(m, 1)[0]);
      }
      if (r = null, s = null, this.stockList.some((m) => m.used)) {
        A("stack", `🔄 Checking refined stock for stacks/duplicates: ${f.map((m) => m.id).join(", ")}`);
        for (const m of f) {
          A("stack", `current stock: ${m.id}`);
          const S = ft(
            h,
            m
          );
          if (S?.length) {
            if (i && (r = Bl.call(this, m, i, S), r)) {
              i = r, o = m;
              break;
            }
            if (this.config.findDuplicatePatterns && (s = Xl.call(this, m, S), s)) {
              i = m;
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
          } catch (y) {
            A("info", `stock.applyTrim error ${y.message}`);
            continue;
          }
          const x = ft(this.shapeList);
          if (!x?.length) return;
          if (a = ft(x, g), !a?.length)
            if (g.allowExactFitShapes && (a = x.filter((y) => E.equalTo(
              y.l,
              g.l + g.trim.l1 + g.trim.l2
            ) && E.equalTo(
              y.w,
              g.w + g.trim.l1 + g.trim.l2
            ) || E.equalTo(
              y.w,
              g.w + g.trim.w1 + g.trim.w2
            ) && E.equalTo(
              y.l,
              g.l + g.trim.w1 + g.trim.w2
            ))), a?.length) g.removeTrim();
            else continue;
          if (!a?.length) {
            g.used = !1;
            continue;
          }
          if (this.config.filtering.enable && a.length > this.config.filtering.minTotal) {
            const y = a.length;
            a = Dl(this.uniqueShapes, x, g, {
              similarityThreshold: this.config.filtering.similarityThreshold,
              selectionStrategy: "smallest",
              minTotal: this.config.filtering.minTotal
            });
            const I = a.length;
            A("allStock", `filtering reduced shapes by ${y - I}, orginal: ${y}, filtered: ${I}`);
          }
          await e.call(this, g, a), this.resetShapes(a, {
            keepScores: !1,
            removeGroups: !1,
            keepGuillotineData: !1
          }), u.length > 1 && a.filter((I) => X(I)).forEach((I) => I.destroy());
        }
        if (f.forEach((g) => g.used = !1), !this.bestResult || !this.bestResult?.stock)
          break;
        l = Dn(this.bestResult, this.stockList), l.score = this.bestResult.score, l.used = !0, i = l;
        const { updatedShapes: m, groups: S } = ue({
          bestResult: this.bestResult,
          shapeList: this.shapeList,
          relevantStock: f,
          stockList: this.stockList,
          resetShapes: this.resetShapes.bind(this),
          groupList: this.groupList
        });
        if (S.length > 0 && this.groupList && S.forEach((g) => {
          this.groupList.find((y) => y.autoId === g.autoId) || this.groupList.push(g);
        }), Se(m), this.bestResult?.offcut) {
          const g = {
            x: this.bestResult.totalLength + this.saw.bladeWidth,
            l: this.bestResult.offcut,
            w: this.bestResult.stock.w,
            stock: l
          };
          this.offcuts.push(g);
        }
        l?.saw?.stockType !== "roll" && this.summariseResults([this.bestResult], l);
      }
      h = ft(this.shapeList);
      let d = [], p = [], w = 0;
      if (this.bestResult = null, this.bestPartialResult = null, r && (o?.autoAdd || ze(this.stockList, o)))
        d.push(o);
      else {
        p = Gt(h, !1);
        const m = p.filter((x) => ht(x.stockLock)), S = new Set(m.flatMap((x) => Array.isArray(x.stockLock) ? x.stockLock : [x.stockLock]));
        S.size || A("allStock", "no new stock requirements found");
        for (const x of S) {
          const y = this.stockList.filter((I) => {
            if (x === I.parentId) {
              if (I.autoAdd)
                return !0;
              if (ze(this.stockList, I))
                return !0;
            }
            return !1;
          });
          if (y.length && !y.find((I) => !I.used)) {
            const I = y[0].clone(y.length.toString());
            this.stockList.push(I), w++;
          }
        }
        p.filter((x) => !ht(x.stockLock) || !x.stockLock.length).length && !d.length && (d = te(this.stockList).filter((x) => x.autoAdd || ze(this.stockList, x)));
      }
      if (d.length && d.forEach((m) => {
        const S = m.clone(mo(this.stockList, m));
        this.stockList.push(S), r ? c = S.parentId : c = !1, w++;
      }), w ? (this.stockList.sort(Et.AA), this?.job && this.job.updateProgress({
        socketId: this.socketId,
        type: "addStock",
        message: `added ${w} additional stock`,
        stockCount: this.stockList.reduce(
          (m, S) => S.used ? ++m : m,
          0
        ),
        shapeCount: this.shapeList.reduce(
          (m, S) => S.added ? ++m : m,
          0
        )
      })) : this?.job && this.job.updateProgress({
        socketId: this.socketId,
        type: "stockComplete",
        message: `completed stock ${l.parentId}`,
        stockCount: this.stockList.reduce((m, S) => S.used ? ++m : m, 0),
        shapeCount: this.shapeList.reduce((m, S) => S.added ? ++m : m, 0)
      }), this.useInventory && p.length && te(this.stockList, !1).length === 0) {
        const m = await kl(
          p,
          this.saw,
          this.stockList
        );
        if (m.stockList.length) {
          const S = nn(m.stockList);
          S.length && this.stockList.push(...S);
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
  /**
   * Post-placement refinement: try to fit unplaced shapes into the remaining
   * empty space on each used stock. Uses a snap-grid (corners of already-placed
   * shapes + stock origin) and AABB collision testing.
   *
   * Only runs on efficiency-cut stocks — guillotine/beam require straight cuts
   * that arbitrary post-placement would violate.
   */
  refineUnplacedShapes() {
    const e = this.saw?.bladeWidth ?? 0;
    let n = 0;
    for (const i of this.stockList) {
      if (!i.used || i.cutType !== "efficiency") continue;
      const r = this.shapeList.filter(
        (f) => f.added && Z(f) && f.stock?.autoId === i.autoId
      );
      if (!r.length) continue;
      const s = r.map((f) => ({ x: f.x, y: f.y, l: f.l, w: f.w })), o = i.trim || {}, a = o.x1 ?? 0, l = o.y1 ?? 0, c = i.l - (o.x2 ?? 0), u = i.w - (o.y2 ?? 0), h = this.shapeList.filter(
        (f) => !f.added && Z(f) && (!f.stockLock?.length || f.stockLock.includes(i.parentId))
      );
      for (const f of h) {
        const d = de(f, i);
        let p = !1;
        for (const w of d) {
          if (!Pt(f, w, i)) continue;
          const m = f.l, S = f.w;
          if (m > c - a || S > u - l) continue;
          const g = yo(
            { l: m, w: S },
            s,
            e
          );
          g.push({ x: a, y: l });
          const x = /* @__PURE__ */ new Set([a]), y = /* @__PURE__ */ new Set([l]);
          for (const I of s)
            x.add(I.x), x.add(I.x + I.l + e), y.add(I.y), y.add(I.y + I.w + e);
          for (const I of x)
            for (const b of y)
              g.push({ x: I, y: b });
          for (const I of g) {
            if (E.lessThan(I.x, a) || E.lessThan(I.y, l) || E.greaterThan(I.x + m, c) || E.greaterThan(I.y + S, u)) continue;
            const b = { x: I.x, y: I.y, l: m, w: S };
            let C = !1;
            for (const $ of s)
              if (So(b, $, e)) {
                C = !0;
                break;
              }
            if (!C) {
              f.x = I.x, f.y = I.y, f.addToStock(i), f.placementOrder = r.length + n + 1, s.push(b), n++, p = !0;
              break;
            }
          }
          if (p) break;
        }
      }
    }
    return n > 0 && A("allStock", `refineUnplacedShapes: placed ${n} additional shape(s)`), n;
  }
  async rebalanceUnplacedShapes() {
    const e = this.shapeList.filter((h) => !h.added && Z(h));
    if (!e.length) return;
    const n = this.stockList.filter((h) => h.used && !h.stack?.stock);
    if (n.length < 2) return;
    A("rebalance", `${e.length} unplaced shapes, trying rebalance across ${n.length} stocks`);
    const i = this.saw.bladeWidth, r = /* @__PURE__ */ new Map();
    let s = 0;
    for (const h of n) {
      const f = this.shapeList.filter((d) => d.added && Z(d) && d.stock?.autoId === h.autoId);
      r.set(h.autoId, f), s += f.length;
    }
    const o = Array.from(r.values()).flat(), a = [...o, ...e], l = this.ffdMultiBin1D(a, n, i);
    if (!l) return;
    const c = l.reduce((h, f) => h + f.length, 0);
    if (c <= s) return;
    A("rebalance", `better arrangement found: ${c} vs ${s} shapes across ${n.length} stocks`), o.forEach((h) => h.removeFromStock());
    for (const h of n)
      h.shapes = [], h.rootSegment = null, h.score = null;
    for (let h = 0; h < n.length; h++) {
      const f = n[h], d = l[h];
      if (!d.length) continue;
      f.applyTrim(), xo(d, f, null, "l"), f.used = !0;
      const p = d.reduce((w, m) => w + m.l, 0) + (d.length - 1) * i;
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
    const u = l.flat();
    Se(u), A("rebalance", `rebalanced ${u.length} shapes across ${n.length} stocks`);
  }
  /**
   * Check if a shape is compatible with a stock for rebalancing
   * Validates stockLock, material match, thickness match, and linear width match
   */
  isShapeCompatibleWithStock(e, n) {
    return !(!Qe(e, n) || !bo(e, n, ht(e.material) && ht(n.material)) || !wo(e, n, ht(e.t) && ht(n.t)) || !Io(e, n, this.saw));
  }
  /**
   * First-Fit-Decreasing bin packing for 1D shapes across N bins
   * Tries multiple heuristics (best-fit and worst-fit) and returns whichever places more shapes
   */
  ffdMultiBin1D(e, n, i) {
    const r = n.map((d) => d.l), s = [...e].sort((d, p) => p.l - d.l), o = (d) => {
      const p = r.map(() => []), w = [...r];
      for (const m of s) {
        let S = -1, g = d ? 1 / 0 : -1;
        for (let x = 0; x < p.length; x++) {
          if (!this.isShapeCompatibleWithStock(m, n[x])) continue;
          const y = p[x].length > 0 ? m.l + i : m.l;
          w[x] >= y && (d ? w[x] < g && (S = x, g = w[x]) : w[x] > g && (S = x, g = w[x]));
        }
        if (S >= 0) {
          const x = p[S].length > 0 ? m.l + i : m.l;
          p[S].push(m), w[S] -= x;
        }
      }
      return p;
    }, a = o(!0), l = o(!1), c = a.reduce((d, p) => d + p.length, 0), u = l.reduce((d, p) => d + p.length, 0);
    let h = c >= u ? a : l, f = Math.max(c, u);
    if (f < s.length && s.length <= 30) {
      const d = this.exhaustiveBinPack1D(s, n, i);
      if (d) {
        const p = d.reduce((w, m) => w + m.length, 0);
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
    const r = n.map((C) => C.l), s = [...e].sort((C, $) => $.l - C.l), o = s.length, a = r.length, l = s.map((C) => n.map(($) => this.isShapeCompatibleWithStock(C, $))), c = s.map((C, $) => `${C.l}|${l[$].join("")}`);
    let u = null, h = 0;
    const f = r.map(() => []), d = [...r], p = 1e6, w = 500, m = Date.now();
    let S = 0, g = !1;
    const x = (C) => {
      const $ = r[C], P = f[C].length;
      for (let M = 0; M < C; M++) {
        if (r[M] !== $ || f[M].length !== P) continue;
        let G = !0;
        for (let O = 0; O < P; O++)
          if (f[M][O].l !== f[C][O].l) {
            G = !1;
            break;
          }
        if (G) return !0;
      }
      return !1;
    };
    let y = 0, I = !1;
    const b = (C, $) => {
      if (g) return;
      if (S++, S >= p || (S & 4095) === 0 && Date.now() - m > w) {
        g = !0;
        return;
      }
      if ($ + (o - C) <= h) return;
      if (C === o) {
        $ > h && (h = $, u = f.map((L) => [...L]));
        return;
      }
      const P = C > 0 && c[C] === c[C - 1], M = y, G = I;
      P || (y = 0, I = !1);
      const O = s[C];
      if (!I)
        for (let L = y; L < a && !g; L++) {
          if (!l[C][L] || x(L)) continue;
          const v = f[L].length > 0 ? O.l + i : O.l;
          if (d[L] < v) continue;
          f[L].push(O), d[L] -= v;
          const D = y;
          if (y = L, b(C + 1, $ + 1), y = D, f[L].pop(), d[L] += v, h === o) {
            y = M, I = G;
            return;
          }
        }
      const N = I;
      I = !0, b(C + 1, $), I = N, y = M, I = G;
    };
    return b(0, 0), g && A("exhaustiveBinPack1D", `aborted after ${S} nodes / ${Date.now() - m}ms - returning best partial (${h}/${o} placed)`), u;
  }
  /**
   * this idea with secondRun is to redistribute smaller parts to the least efficient stock - ideally reducing the number of stock needed
   * [] only look at stock with a single shape?
   */
  async secondRun() {
    A("secondRun", "starting second run...");
    const e = this.stockList.filter((s) => s.used);
    if (e.filter((s) => s.stack?.number && !s.stack?.stock).forEach((s) => {
      e.filter((o) => o.stack?.stock && nt(o.stack.stock) && o.stack.stock.id === s.id).forEach((o) => {
        o.stack = null, o.rootSegment = s.rootSegment;
      }), s.stack = null;
    }), e[0].cutType !== "guillotine") return;
    F([
      () => R(e.length).equal(this.stockList.length),
      () => R(e.every((s) => s.score)).to.be.true,
      () => R(e.every((s) => s.shapes?.length)).to.be.true
    ]), e.sort((s, o) => s.score.efficiency - o.score.efficiency), A("secondRun", `sorted stock, ${e.map((s) => s.id)}`);
    const i = [], r = [];
    for (const s of e)
      s.score.efficiency >= this.config.secondRun.efficiencyCutoff && s.score.totalShapesPlaced > 1 ? i.push(s) : r.push(s);
    if (!(!i.length || !r.length)) {
      i.sort((s, o) => o.score.efficiency - s.score.efficiency), r.sort((s, o) => o.score.efficiency - s.score.efficiency), A("secondRun", `sorted efficient stock, ${i.map((s) => s.id)}`), A("secondRun", `sorted inefficient stock, ${r.map((s) => s.id)}`);
      for (const s of i) {
        if (!r.length) break;
        const o = [];
        for (let h = 0; h < s.shapes.length; h++) {
          const f = s.shapes[h];
          if (!f) throw new Error("shape not found in donorStock.shapes");
          if (X(f)) {
            f.placeMyShapes(s), f.shapes = f.shapes.map((d) => Object.assign({}, d)), s.shapes.splice(h, 1, ...f.shapes), h--;
            continue;
          }
          if (Z(f))
            f.reset(), o.push(f);
          else {
            const d = this.shapeList.find((p) => p.id === f.id);
            if (!d) throw new Error(`shape ${f.id} not found in shapeList`);
            d.reset(), o.push(d), s.shapes[h] = d;
          }
        }
        const a = /* @__PURE__ */ new Set();
        let l, c, u = null;
        for (; o.length > 0 && (l = r.find((g) => !g || a.has(g?.id) ? !1 : o.every((x) => this.isShapeCompatibleWithStock(x, g))), !!l); ) {
          A("secondRun", `recipientStock - ${l.id}`), a.add(l.id);
          const h = Bt.getCalculationType(s);
          if (!h) throw new Error(`calculation type not found for stock ${s.id}`);
          const f = l.cutPreference === "l" ? "x" : "y";
          let d = [];
          if (c = l.rootSegment, A("secondRun", `second run, donor stock ${s.id}, recipient stock ${l.id}`), u) {
            u.shapes.forEach((x, y) => {
              if (!Z(x)) {
                const I = this.shapeList.find((b) => b.id === x.id);
                u.shapes[y] = I;
              }
            }), l.shapes.forEach((x, y) => {
              if (!Z(x)) {
                const I = this.shapeList.find((b) => b.id === x.id);
                l.shapes[y] = I;
              }
            });
            let g = !1;
            if (this.config.secondRun.stack && (g = Es.call(this, l, u, [...o, ...l.shapes], this.shapeList)), g) {
              l.stack = { stock: u }, u.stack ? u.stack?.number && u.incrementStack() : u.stack = { number: 2 }, l.shapes.forEach((y) => {
                const I = o.findIndex((b) => b.id === y.id);
                I > -1 && (o.splice(I, 1), s.shapes.splice(s.shapes.findIndex((b) => b.id === y.id), 1));
              });
              const x = r.findIndex((y) => y.id === l.id);
              x > -1 && r.splice(x, 1), A("secondRun", `stack found for ${l.id} in second run`), Se(l.shapes);
              continue;
            }
          }
          if (!c) throw new Error("no root segment found in second run");
          if (hs(c, (g) => {
            if (g.offcut)
              return g[f] === 0 && (g.cutDirection = l.cutPreference, g.phase = 1), g.addToStock(l), d.push(g), !1;
          }), !d.length || (d = nn(d), !d.length)) continue;
          await Bt[h].call(
            this,
            { secondRun: !0 },
            l,
            o,
            d
          );
          const p = o.length;
          for (let g = o.length; g--; )
            o[g].added && o.splice(g, 1);
          const w = o.length, m = p - w;
          if (A("info", `second run, added ${m}`), u = l, p - w === 0) continue;
          const S = r.findIndex((g) => g.id === l.id);
          S > -1 && r.splice(S, 1), Se(l.shapes);
        }
        if (!o.length || o.every((h) => h.added))
          s.used = !1, s.shapes = [], l.shapes.push(...s.shapes);
        else {
          A("info", `second run, not all shapes moved, reverting ${s.shapes.length} shapes`);
          for (const h of s.shapes) {
            const f = this.shapeList.find((d) => d.id === h.id);
            if (!f) throw new Error("original shape not found in second run");
            f.update(h), f.addToStock(s), F([
              () => R(f.added).to.be.true,
              () => R(f.stock?.id).to.equal(s.id),
              () => R(f.x).to.equal(h.x),
              () => R(f.y).to.equal(h.y)
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
        for (const c of e)
          if (X(c) && c.added && c.shapes?.length)
            for (const u of c.shapes)
              a.add(u.autoId);
        const l = e.length;
        for (let c = l; c--; ) {
          const u = e[c];
          if (rt(u)) {
            u.added || e.splice(c, 1);
            continue;
          }
          if (X(u)) {
            if (u.shapes?.length)
              for (const h of u.shapes)
                h.reset({
                  keepScores: n,
                  keepGuillotineBatchData: s,
                  keepGroupData: !1,
                  keepFirstShapeSampleRotations: o
                });
            u.added || e.splice(c, 1);
          } else
            a.has(u.autoId) ? e.splice(c, 1) : u.reset({
              keepScores: n,
              keepGuillotineBatchData: s,
              keepGroupData: !1,
              keepFirstShapeSampleRotations: o
            });
        }
      } else {
        const a = e.length;
        for (let l = a; l--; ) {
          const c = e[l];
          if (rt(c)) {
            c.added = !1;
            continue;
          }
          if (X(c)) {
            if (c.shapes?.length)
              for (const u of c.shapes)
                u.reset({
                  keepScores: n,
                  keepGuillotineBatchData: s,
                  keepGroupData: !1,
                  keepFirstShapeSampleRotations: o
                });
            i ? e.splice(l, 1) : c.added = !1;
          } else
            c.reset({
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
function Jl() {
  W("Issue", ee), W("Line", le), W(U.Line, le), W("Point", tn), W(U.Point, tn), W("Rectangle", Xn), W(U.Rectangle, Xn), W("Container", Ve), W(U.Container, Ve), W("GuillotineState", Te), W(U.GuillotineState, Te), W("Placeable", Wn), W(U.Placeable, Wn), W("Group", Ke), W(U.Group, Ke), W("Offcut", Yn), W(U.Offcut, Yn), W("Segment", vt), W(U.Segment, vt), W("Shape", je), W(U.Shape, je), W("Stock", en), W(U.Stock, en), W("Banding", Fn), W("banding", Fn), W("Corner", Nn), W("corner", Nn), W("Cut", ve), W(U.Cut, ve), W("Extras", qn), W(U.Extras, qn), W("Finish", zn), W("finish", zn), W("Groove", Hn), W("groove", Hn), W("HingeHole", Zn), W("hingeHole", Zn), W("Hole", Jn), W("hole", Jn), W("ImageUpload", ii), W("imageUpload", ii), W("InputSaw", Vn), W(U.InputSaw, Vn), W("InputShape", jn), W(U.InputShape, jn), W("InputStock", Un), W(U.InputStock, Un), W("InputUserGroup", _n), W(U.InputUserGroup, _n), W("Machining", Kn), W(U.Machining, Kn), W("NestingShape", Me), W(U.NestingShape, Me), W("Optimiser", Ei), W(U.Optimiser, Ei), W("Planing", Qn), W("planing", Qn), W("PointCollection", on), W(U.PointCollection, on), W("Saw", Ee), W(U.Saw, Ee);
}
export {
  Jl as initializeStaticRegistry
};

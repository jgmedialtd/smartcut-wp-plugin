import { s as W, k as Qe, Z as zt, x as A, M as tt, X as Rs, I as Mt, d as vt, _ as So, l as fn, N as si, o as T, c as K, a as be, g as lt, u as E, j as Ne, b as ue, t as Se, q as oi, w as Gn, n as Gt, F as Pt, f as Zt, H as gr, $ as Kt, p as tn, P as Ht, i as nn, z as li, h as ts, E as xo, m as st, r as ra, A as Io, C as Bt, D as hr, a0 as Wt, Q as ea, W as vr, v as br, K as un } from "./vendor-vue-D6ZfZC0P.js";
import { i as ot, ac as Ye, ad as Fn, ae as Po, a6 as Nn, af as Wn, ag as zn, ah as yr, n as ht, ai as Si, z as ns, A as Ct, aj as kr, E as Cn, ak as wr, al as Co, I as Lo, am as Sr, an as ia, ao as Oo, ap as Eo, aq as Ao, ar as xr, as as Ir, at as An, au as $t, av as Pr, aw as Cr, ax as Lr, ay as ji, az as Pa, aA as Or, aB as xi, aC as Er, aD as Ln, aE as qs, aF as Va, $ as Jn, a0 as ha, _ as bn, aG as Ar, aH as Bs, aI as js, h as re, aa as Ra, t as Ka, T as va, aJ as ba, W as ya, a5 as ka, aK as Us, aL as Gs, w as Ws, aM as Tr, aN as Fr, aO as Nr, aP as $r, aQ as Mr, aR as To, a as zs, a3 as Ui, s as Dr, Q as _r, B as Ks, F as Vr, O as Rr, a7 as vn, aS as qr, aT as Hs, aU as as, aV as is, aW as Gi, V as Br, c as Zs, aX as jr, d as Ur, f as Gr, aY as Wr, aZ as zr, a_ as Fo, a$ as Kr, b0 as Ii, b1 as Hr, b2 as Zr, b3 as No, b4 as Jr, b5 as Qr, b6 as Yr, b7 as Xr, b8 as eu, b9 as tu, ba as nu, bb as Wi, bc as au, bd as iu, be as su, bf as ou, bg as lu, bh as sa, bi as Pi, bj as ru, bk as Js, bl as Qs, bm as Ci, e as Li, bn as uu, u as cu } from "./InputUserGroup-pBQzFMX3.js";
import { o as $, h as d, n as S, l as xe, i as Ce, q as te, j as ae, k as an, S as du, u as Ze, w as yt, B as fu, E as Ca, I as qa, y as Ys, K as oa, t as pu, J as Xs, L as mu, T as gu, U as eo, V as hu, D as Ba, M as Oi, N as Ei, O as Ai, x as vu } from "./vendor-C76etQCp.js";
import { s as Ti, t as $o, u as bu, l as Fi, d as yu } from "./i18n-DbggOnBy.js";
import { g as ku, h as wu, s as Su } from "./vendor-lodash-wbyiOdVF.js";
import { Icon as ei } from "./index-DQLns-fu.js";
import { o as Mo, f as Do, s as _o, a as Vo, d as xu } from "./vendor-floating-ui-CCq0hEoe.js";
import { _ as sn } from "./Launch-BnHg2-HI.js";
import { t as Te } from "./i18n-cONG3r0U.js";
import { b as zi } from "./environment-BeBZzWz6.js";
import "./vendor-i18next-BVRe4kPe.js";
function to(e, n) {
  return wu(e, n);
}
function qt(e, n) {
  return ku(e, n);
}
function Ni(e, n, t) {
  Su(e, n, t);
}
function no(e, n = !1) {
  if (!ot(e) || typeof e != "object")
    return !1;
  const t = Object.values(e);
  return t.length === 0 ? !1 : n ? t.some((a) => ot(a) && a) : t.some((a) => ot(a));
}
function Iu(e) {
  if (!e?.length)
    return [];
  const n = e.filter((a) => !a.added), t = {};
  return n.forEach((a) => {
    const i = Ro(a.stock) || 1;
    t[a.parentId] ? t[a.parentId].count += i : (t[a.parentId] = {}, t[a.parentId].count = i, t[a.parentId].id = a.parentId, t[a.parentId].autoId = a.autoId || "", t[a.parentId].name = a?.name ? a.name : a.id, t[a.parentId].l = a.l, t[a.parentId].w = a.w, t[a.parentId].t = a.t, t[a.parentId].material = a.material, t[a.parentId].rot = a.rot, t[a.parentId].orientationLock = a.orientationLock);
  }), Object.values(t);
}
function Ro(e, n = []) {
  if (!e)
    return 1;
  if (e?.stack?.number)
    return e.stack.number;
  if (e?.stack?.stock) {
    const t = typeof e.stack.stock == "string" ? e.stack.stock : e.stack.stock?.id;
    if (t && n.length > 0)
      return n.find((i) => i.id === t)?.stack?.number || 1;
  }
  return typeof e?.stack == "string" && n.find((a) => a.id === e.stack)?.stack?.number || 1;
}
function Pu() {
  const e = document.documentElement;
  return "requestFullscreen" in e || "webkitRequestFullscreen" in e || "mozRequestFullScreen" in e || "msRequestFullscreen" in e;
}
function Cu(e, n = "cc") {
  if (!e)
    return e;
  const t = {
    l1: "w2",
    l2: "w1",
    w1: "l1",
    w2: "l2"
  }, a = {
    x1: "y1",
    x2: "y2",
    y1: "x2",
    y2: "x1"
  }, i = {
    a: "d",
    // bottom left -> bottom right
    b: "a",
    // top left -> bottom left
    c: "b",
    // top right -> top left
    d: "c"
    // bottom right -> top right
  }, s = {}, r = Object.keys(e).some((c) => ["x1", "x2", "y1", "y2"].includes(c)) ? a : t;
  if (n === "cc") {
    for (const [c, f] of Object.entries(r))
      c in e && (s[f] = e[c]);
    for (const [c, f] of Object.entries(i))
      c in e && (s[f] = e[c]);
  } else {
    for (const [c, f] of Object.entries(r))
      f in e && (s[c] = e[f]);
    for (const [c, f] of Object.entries(i))
      f in e && (s[c] = e[f]);
  }
  return s;
}
const qo = {
  /**
   * Model 0: Original behavior
   * - L column means larger dimension
   * - L and W order does not matter
   * - Orientation set by orientationLock
   */
  0: {
    name: "Original",
    lColumnMeaning: "Larger dimension (visual)",
    orientationBasedOnDimensions: !1,
    sidesLMatchShapeL: !1,
    affectedExtraTypes: [],
    calculateOrientationLock: () => "",
    defaultOrientationLock: () => ""
  },
  /**
   * Model 1: L = stock length dimension
   * - Orientation and banding controlled by L/W order
   * - Clicking orientation button allows free rotation
   */
  1: {
    name: "L = Stock Length",
    lColumnMeaning: "Stock length dimension",
    orientationBasedOnDimensions: !0,
    sidesLMatchShapeL: !0,
    affectedExtraTypes: ["banding", "planing"],
    calculateOrientationLock: (e, n, t) => n >= t ? e === "n" ? "l" : e === "y" ? "" : e : e === "n" ? "w" : e === "y" ? "" : e === "l" ? "w" : "l",
    defaultOrientationLock: () => ""
  },
  /**
   * Model 2: L = grain direction
   * - L field means direction of GRAIN
   * - Banding L values match L column values
   */
  2: {
    name: "L = Grain Direction",
    lColumnMeaning: "Grain direction",
    orientationBasedOnDimensions: !0,
    sidesLMatchShapeL: !0,
    affectedExtraTypes: ["banding", "planing"],
    calculateOrientationLock: (e, n, t) => e === "n" || e === "y" ? "" : n >= t ? e : e === "l" ? "w" : "l",
    defaultOrientationLock: (e) => e === "n" || e === "y" ? "" : "l"
  }
};
function Lu(e) {
  return e !== 0 && e !== 1 && e !== 2 ? !1 : qo[e].sidesLMatchShapeL;
}
function Ou(e) {
  return e !== 0 && e !== 1 && e !== 2 ? [] : qo[e].affectedExtraTypes;
}
function Ha(e = 0, n, t = null, a = null, i = null) {
  if (!Ye(t) && !Fn || a === "stock")
    return !1;
  let s, u;
  if (Ye(t) ? s = t.orientationLock : Fn(t) ? s = "l" : a === "shape" && (s = i), e === 0 || Fn(t))
    switch (n) {
      case "n":
        u = s === "w" || i === "w";
        break;
      case "l":
      case "y":
        u = s === "w" || i === "w";
        break;
      case "w":
        u = s === "l" || i === "l";
        break;
      default:
        u = i === "w";
    }
  else if (e === 1)
    if (t)
      u = t.w > t.l;
    else
      return !1;
  else if (e === 2) {
    if (!t)
      return !1;
    switch (n) {
      case "n":
        u = t.w > t.l;
        break;
      case "y":
      case "l":
        u = t.w > t.l;
        break;
      case "w":
        u = t.l >= t.w;
        break;
      default:
        u = !1;
    }
  }
  return u;
}
function Eu(e, n, t = null, a = null, i = null) {
  if (!Ye(t) || a === "shape")
    return !1;
  let s;
  return e === 0 || e === 1 || e === 2 ? Ha(e, n, t, a, i) ? "cc" : !1 : s;
}
const Au = {
  successMetric: "efficiency"
};
$({
  // Context - using z.any() for complex external types
  job: xe().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: d().nullable().default(null).describe("Socket.io connection ID"),
  user: xe().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: xe().describe("Configuration object"),
  // Type: Config
  api: ae().nullable().default(null).describe("API mode flag"),
  app: ae().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: ns("Saw").describe("Saw configuration"),
  stockList: ht("Stock").default([]).describe("List of stock materials"),
  shapeList: Si(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: ht("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: ht("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: ht("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: Si(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: Si(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: yr,
  // Results storage
  cutList: ht("Cut").default([]).describe("List of cuts to make"),
  segmentList: ht("Segment").default([]).describe("List of segments"),
  offcuts: ht("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: ht("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: ae().default(!1).describe("Use inventory system"),
  successMetric: d().default(Au.successMetric).describe("Metric for optimization success"),
  enableEvo: ae().default(!0).describe("Enable evolutionary algorithm"),
  weighting: Ce(d(), xe()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: xe().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: xe().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: $({
    placement: S().default(0),
    group: S().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  runningEvo: ae().default(!1).describe("Currently running evolution"),
  evolutionVisData: te(Ce(d(), du())).default([]).describe("Evolution visualization data"),
  final: ae().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: ae().default(!1).describe("Has minimum spacing requirement")
});
const Tu = an(["decimal", "fraction"]), $i = $({
  sku: Ce(d(), d()).optional(),
  name: Ce(d(), d()).optional()
}), ss = $({
  banding: $i.optional(),
  finish: $i.optional(),
  planing: $i.optional()
}), Fu = $({
  job: xe().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Extend with autoId/entityType so they survive Zod validation for worker reconstruction
  inputSaw: zn.extend({ autoId: d().optional(), __entityType: d().optional() }),
  inputShapes: te(Wn.extend({ autoId: d().optional(), __entityType: d().optional() })),
  inputStock: te(Nn.extend({ autoId: d().optional(), __entityType: d().optional() })),
  inputUserGroups: te(Po.extend({ autoId: d().optional(), __entityType: d().optional() })).optional(),
  // Number format for conversion
  numberFormat: Tu.optional(),
  // Algorithm configuration
  enableEvo: ae().default(!0),
  weighting: xe().optional(),
  successMetric: d().optional(),
  useInventory: ae().default(!1),
  // Context
  socketId: d().optional(),
  user: xe().optional(),
  // IUser type
  // Application flags
  widget: ae().optional(),
  api: ae().optional(),
  app: ae().optional(),
  domain: d().optional(),
  // Extras options (centralized configuration)
  extrasOptions: $({
    banding: $({
      options: $({
        sides: Ce(d(), te(d())).optional()
      }).optional()
    }).optional(),
    finish: $({
      options: $({
        faces: Ce(d(), te(d())).optional()
      }).optional()
    }).optional(),
    planing: $({
      options: $({
        sides: Ce(d(), te(d())).optional(),
        faces: Ce(d(), te(d())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // Extras display-value resolution for the cutlist CSV (internal-only;
  // SKU → name → tuple). Storefront-supplied; never on the public /v3 API.
  extrasResolution: ss.optional(),
  // API specific
  config: xe().optional(),
  v: S().optional(),
  // API version
  webhook: d().optional(),
  //source
  sourceVersion: d().nullish(),
  source: d().optional()
});
$({
  job: xe().optional(),
  // Type: Job from BullMQ
  saw: xe(),
  // Runtime Saw instance
  shapeList: te(xe()),
  // Runtime Shape instances
  stockList: te(xe()),
  // Runtime Stock instances
  userGroups: te(xe()).optional(),
  // Runtime Group instances
  enableEvo: ae(),
  weighting: xe().optional(),
  successMetric: d().optional(),
  useInventory: ae(),
  socketId: d().optional(),
  user: xe().optional(),
  widget: ae().optional(),
  api: ae().optional(),
  app: ae().optional(),
  domain: d().optional(),
  config: xe().optional(),
  v: S().optional(),
  webhook: d().optional()
});
const Nu = typeof process < "u" && !!process.env && !!process.env.ALGO_TRACE;
(Nu ? process.env.ALGO_TRACE_DATA ?? "" : "").split(",").map((e) => e.trim()).filter(Boolean);
function Bo(e) {
  return {
    entities: /* @__PURE__ */ new Map(),
    stockList: [],
    shapeList: [],
    ...e
  };
}
function Za(e, n) {
  if (Array.isArray(n))
    for (const t of n)
      t && typeof t == "object" && (t.autoId && e.entities.set(t.autoId, t), t.id && t.id !== t.autoId && e.entities.set(t.id, t));
}
function $u(e, n) {
  if (n) {
    if (n && typeof n == "object" && typeof n.getType == "function")
      return n;
    if (typeof n == "string")
      return e.entities.get(n);
    if (n && typeof n == "object" && n.autoId)
      return e.entities.get(n.autoId);
  }
}
function Ki(e, n) {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((a) => Ki(a, n));
  if (typeof e.getType == "function")
    return e;
  if (e.__ref && (e.id || e.autoId)) {
    const a = e.autoId || e.id;
    return $u(n, a) || e;
  }
  const t = { ...e };
  for (const a in t)
    Object.prototype.hasOwnProperty.call(t, a) && (t[a] = Ki(t[a], n));
  return t;
}
function os(e, n, t) {
  if (e == null || e && typeof e == "object" && typeof e.getType == "function")
    return e;
  if (Array.isArray(e))
    return e.every((r) => r && typeof r == "object" && typeof r.getType == "function") ? e : e.map((r) => os(r, n));
  if (!e || typeof e != "object" || !e.__entityType && !e.__ref && !e.type)
    return e;
  const a = e.__entityType;
  n?.preventAutoRotation && a && (a === Cn.Rectangle || a === Cn.Placeable || a === Cn.Container || a === Cn.Shape || a === Cn.Group || a === Cn.Offcut || a === Cn.Stock || a === Cn.Segment) && (e.preventAutoRotation = !0), n && (e.__context = n);
  const i = e.__ref || a, s = kr();
  if (i && s.has(i)) {
    const u = s.get(i), { __ref: r, __entityType: c, __context: f, ...m } = e, I = new u(m);
    return I.issues && Array.isArray(I.issues) && (I.issues = I.issues.map((O) => O instanceof Ct ? O : Ct.fromData(O, I))), I.warnings && Array.isArray(I.warnings) && (I.warnings = I.warnings.map((O) => O instanceof Ct ? O : Ct.fromData(O, I))), I;
  }
  return delete e.__context, e;
}
function jn(e, n) {
  if (n || (n = Bo()), Array.isArray(e)) {
    const i = [];
    for (const s of e) {
      const u = jn(s, n);
      i.push(u), u && typeof u == "object" && (u.autoId || u.id) && Za(n, [u]);
    }
    return i;
  }
  if (e && typeof e == "object" && typeof e.getType == "function")
    return (e.autoId || e.id) && Za(n, [e]), e;
  const t = Ki(e, n), a = os(t, n);
  return a && typeof a == "object" && (a.autoId || a.id) && Za(n, [a]), a;
}
function Mu(e, n) {
  const t = Bo(n), a = e?.saw ? jn(e.saw, t) : void 0;
  a && Za(t, [a]);
  const i = e?.stockList ? jn(e.stockList, t) : [];
  i.length > 0 && (t.stockList = i);
  const s = Array.isArray(e?.shapeList) ? e.shapeList.map((m) => !m || typeof m != "object" ? m : (m.added === !0 || typeof m.x == "number" && typeof m.y == "number") && m.preventAutoRotation !== !0 ? { ...m, preventAutoRotation: !0 } : m) : e?.shapeList, u = s ? jn(s, t) : [];
  u.length > 0 && (t.shapeList = u);
  const r = e?.cutList ? jn(e.cutList, t) : [], c = e?.segmentList ? jn(e.segmentList, t) : [];
  c.length > 0 && (t.segmentList = c);
  const f = e?.offcuts ? jn(e.offcuts, t) : [];
  return {
    saw: a,
    stockList: i,
    shapeList: u,
    cutList: r,
    segmentList: c,
    offcuts: f,
    context: t
  };
}
function Du(e) {
  const n = {};
  return e.forEach((t) => {
    t.shapeIds.forEach((a) => {
      const i = t.q || 1;
      n[a] ? n[a] += i : n[a] = i;
    });
  }), n;
}
function _u(e, n, t = !0) {
  const a = Du(e), i = [];
  for (const s in a) {
    const u = a[s], r = n.findIndex((m) => m.autoId === s), c = n[r], f = wr({
      item: null,
      // No specific item context for this validation
      index: r >= 0 ? r : 0,
      shapeId: s,
      requiredQuantity: u,
      availableQuantity: Number(c?.q ?? 0),
      shapeName: c?.name,
      shapeIndex: r >= 0 ? r : void 0
    });
    i.push(...f);
  }
  return t && e.forEach((s) => {
    const u = s.validateWithShapes(n);
    u?.length && i.push(...u);
  }), i;
}
function jg(e = [], n = []) {
  e.length && n.length && e.forEach((t) => {
    t.shapeIds = t.shapeIds.filter((a) => n.find((i) => i.autoId === a));
  });
}
const ja = [
  "#03171d",
  "#073b4c",
  "#118ab2",
  "#ef476f",
  "#ffd166",
  "#06d6a0"
];
function Vu(e) {
  const n = (Math.trunc(e) % ja.length + ja.length) % ja.length;
  return ja[n];
}
const ta = $({
  id: d(),
  name: d().max(200).default(""),
  colorIndex: S().int().min(0).default(0),
  grain: Co,
  thicknesses: te(S().positive()).default([])
}), Ru = $({
  id: d(),
  count: S(),
  name: d(),
  l: S(),
  w: S(),
  t: S(),
  material: d()
}), ls = $({
  inputStock: te(Nn),
  inputShapes: te(Wn),
  inputSaw: zn,
  inputUserGroups: te(Po),
  // CLE materials list (project-scoped). Optional for back-compat with projects saved
  // before the materials feature — reverse-engineered from stock/parts on load if absent.
  materials: te(ta).optional(),
  // Centralized extras options for UI dropdowns
  extrasOptions: $({
    banding: $({
      options: te(d())
    }).optional(),
    finish: $({
      options: te(d())
    }).optional(),
    planing: $({
      options: te(d())
    }).optional()
  }).optional()
}).optional(), jo = $({
  // Banding metrics
  bandingLengthByType: Ce(d(), S()).default({}),
  // Finish metrics (by face)
  finishAreaByType: Ce(d(), S()).default({}),
  // Planing metrics (by type)
  planingAreaByType: Ce(d(), S()).default({}),
  // Material summary with nested structure
  materialSummary: Ce(
    d(),
    // material name
    Ce(
      d(),
      // thickness
      $({
        used: S(),
        stacks: S(),
        bandingLengthByType: Ce(d(), S())
      })
    )
  ).default({}),
  // Tallies
  usedStockTally: Ce(d(), S()).default({}),
  addedPartTally: Ce(d(), S()).default({}),
  // Cost metrics
  stockAreaCost: S().default(0),
  totalStockCost: S().default(0),
  // Machining metrics
  hasMachining: ae().default(!1),
  numHoles: S().default(0),
  numCorners: S().default(0),
  // Efficiency metrics
  totalBandingLength: S().default(0),
  totalFinishArea: S().default(0),
  totalPlaningArea: S().default(0),
  totalEfficiency: S().default(0),
  // Cutting metrics
  totalCutLength: S().default(0),
  totalStackedCutLength: S().default(0),
  totalCuts: S().default(0),
  totalStackedCuts: S().default(0),
  // Area metrics
  totalStockArea: S().default(0),
  totalStockUsedArea: S().default(0),
  totalStockUnusedArea: S().default(0),
  totalPartArea: S().optional(),
  // Legacy name
  totalPartsArea: S().default(0),
  totalUnusedPartsArea: S().default(0),
  totalOffcutsArea: S().default(0),
  totalOffcuts: S().default(0),
  totalBladeArea: S().default(0),
  totalTrimArea: S().default(0),
  // Additional metrics
  totalPartsProduced: S().optional(),
  totalUsedStock: S().optional(),
  totalRollLength: S().optional(),
  totalStockWeight: S().optional(),
  totalPartWeight: S().optional()
}), La = jo.extend({
  bandingLengthByType: Ce(d(), S()).default({}),
  unplacedParts: te(Ru).default([]),
  // Ecommerce pricing - calculated client-side
  offcutCost: S().optional()
}), qu = $({
  // Core optimization results
  stockList: ht("Stock"),
  shapeList: ht("Shape"),
  cutList: ht("Cut").optional(),
  segmentList: ht("Segment").optional(),
  offcuts: ht("Offcut").optional(),
  saw: ns("Saw"),
  unusableShapes: ht("Shape").optional(),
  unavailableStock: ht("Stock").optional(),
  evolutionVisData: te($({})).optional(),
  performance: d().optional(),
  algoMs: S().optional(),
  /** Deterministic, machine-independent work count (placement-scoring evals) — the
   *  algorithm-lab gates regressions on this instead of wall-clock `algoMs`. */
  algoComplexity: S().optional(),
  // Per-stage timings for benchmark/debugging. Populated by the optimiser pipeline
  // and surfaced in the benchmark report as a stacked bar chart next to layouts.
  phaseTimings: te($({ phase: d(), ms: S() })).optional(),
  apiVersion: S().optional(),
  // Renamed from 'v'
  metadata: La.optional(),
  credits: S().optional(),
  time: S().optional(),
  // billedMs — what the customer is charged for
  // CNC cutting plans per stock (keyed by stock autoId)
  cuttingPlans: Ce(d(), xe()).optional(),
  // Saw-profile constraint violations — populated when the caller passes
  // `sawProfileId` in RuntimeCalculationData. Each entry describes a way
  // the produced layout cannot be faithfully emitted to the declared saw.
  // REPORT-ONLY today; downstream code can choose to refuse emission or
  // fall back to a different saw / format.
  sawViolations: te($({
    kind: d(),
    stockId: d(),
    message: d(),
    shapeIds: te(d()).optional()
  })).optional(),
  // Optional input data for debugging/API reporting
  inputs: ls
});
$({
  // Job execution metadata
  success: ae(),
  socketId: d().nullable().default(null),
  userId: d(),
  api: ae(),
  app: ae(),
  widget: ae().optional(),
  // Raw request origin ('web' | 'checkout' | 'app' | …) — kept so telemetry can
  // distinguish web-app calcs from external-API calls (both have api=true).
  source: d().optional(),
  cached: ae().optional(),
  hash: d().optional(),
  webhook: d().optional(),
  config: xe().optional(),
  error: d().optional(),
  jobId: S().optional(),
  // Job-level label-printer fields (mirrors V3 request top-level `labels`).
  // Persisted so the export step (post-processor emit) can thread values
  // like JOBS.CUSTOMER into the PTX output without re-loading the request.
  labels: $({
    customer: d().max(100).optional()
  }).optional(),
  // Per-type SKU/name maps to resolve operator-meaningful cutlist labels at
  // export (internal-only; see optimiser.zod extrasResolutionSchema).
  extrasResolution: ss.optional(),
  // Input data
  inputs: ls,
  // The actual optimization results
  optimisation: qu
});
$({
  // Database metadata
  jobId: S().optional(),
  // Job execution data
  success: ae(),
  socketId: d().nullable().default(null),
  userId: d(),
  api: ae(),
  app: ae(),
  widget: ae().optional(),
  // Raw request origin (see `jobResultSchema.source`).
  source: d().optional(),
  cached: ae().optional(),
  hash: d().optional(),
  webhook: d().optional(),
  config: xe().optional(),
  error: d().optional(),
  // Job-level label-printer fields (see `jobResultSchema.labels`).
  labels: $({
    customer: d().max(100).optional()
  }).optional(),
  // Extras display-value resolution maps (see `jobResultSchema.extrasResolution`).
  extrasResolution: ss.optional(),
  // Optimization results (flattened from optimization object)
  stockList: ht("Stock"),
  shapeList: ht("Shape"),
  cutList: ht("Cut").optional(),
  segmentList: ht("Segment").optional(),
  offcuts: ht("Offcut").optional(),
  saw: ns("Saw"),
  unusableShapes: ht("Shape").optional(),
  unavailableStock: ht("Stock").optional(),
  performance: d().optional(),
  algoMs: S().optional(),
  /** Deterministic, machine-independent work count (placement-scoring evals) — the
   *  algorithm-lab gates regressions on this instead of wall-clock `algoMs`. */
  algoComplexity: S().optional(),
  metadata: La.optional(),
  apiVersion: S().optional(),
  credits: S().optional(),
  time: S().optional(),
  // billedMs — what the customer is charged for
  // CNC cutting plans per stock (keyed by stock autoId)
  cuttingPlans: Ce(d(), xe()).optional(),
  // Input data
  inputs: ls,
  // Computed fields for easier querying/display
  numParts: S().optional(),
  numStock: S().optional(),
  workerName: d().optional(),
  queueName: d().optional()
});
$({
  id: d().optional(),
  name: d().optional(),
  l: S(),
  w: S(),
  t: S().nullable().optional(),
  material: d().optional(),
  q: S().optional(),
  orientationLock: Ze([
    yt(""),
    yt("l"),
    yt("w")
  ]).nullable().optional(),
  // Basic extras for display
  banding: xe().optional(),
  finish: xe().optional(),
  planing: xe().optional()
});
const Bu = $({
  issues: te(d()),
  id: d(),
  duplicate: ae(),
  name: d(),
  added: ae(),
  x: S(),
  y: S(),
  l: S(),
  w: S(),
  t: S(),
  q: S().optional(),
  // Add quantity for checkout compatibility
  orientationLock: Ze([
    yt(""),
    yt("l"),
    yt("w")
  ]),
  trim: $({
    l1: S(),
    l2: S(),
    w1: S(),
    w2: S()
  }),
  material: d(),
  banding: xe(),
  // Using any for now, could use bandingPropertiesSchema
  bandingType: xe(),
  // Legacy field
  finish: xe(),
  // Using any for now, could use finishPropertiesSchema
  stock: $({ id: d() }),
  rot: ae(),
  notes: d(),
  customData: Ce(d(), Ze([d(), S(), ae()]))
});
$({
  issues: te(d()),
  id: d(),
  duplicate: ae().optional(),
  name: d(),
  l: S(),
  w: S(),
  t: S().nullable(),
  material: d(),
  cost: S(),
  used: ae(),
  grain: Ze([
    yt(""),
    yt("l"),
    yt("w"),
    fu()
  ]).nullable(),
  trim: $({
    l1: S(),
    l2: S(),
    w1: S(),
    w2: S()
  }),
  parts: te(Bu),
  efficiency: S(),
  notes: d().optional(),
  // Legacy V1 fields
  blade: $({
    width: S()
  }).optional(),
  cutPreference: Ze([
    yt("l"),
    yt("w")
  ]).optional(),
  // Analysis data
  analysis: $({
    partArea: S(),
    totalParts: S(),
    areaEfficiency: S(),
    cutLength: S(),
    bandingLength: S(),
    numberOfCuts: S(),
    rollLength: S().optional()
  }).optional(),
  // Stack info
  stack: xe().optional(),
  // Stock quantity for checkout compatibility
  q: S().optional()
});
function Ug(e, n, t = "metric") {
  return n / (t === "imperial" ? 12 : 1e3) * e;
}
function Gg(e, n) {
  return n / 1e6 * e;
}
function ju(e, n = []) {
  if (!e?.length) return [];
  const t = e.map((a) => a && typeof a.getType == "function" ? a : os(a)).filter((a) => a instanceof Lo);
  return n.length && Uu(t, n), t;
}
function Uu(e = [], n = []) {
  e.length && n.length && e.forEach((t) => {
    t.shapeIds = t.shapeIds.filter((a) => n.find((i) => i.autoId === a));
  });
}
let Ja = null;
if (zi())
  try {
    Ja = require("~/helpers/applicationSettings").applicationSettings;
  } catch (e) {
    console.error("[useCrossPlatformStorage] Failed to load ApplicationSettings:", e);
  }
function Un(e, n, t = {}) {
  const {
    serializer: a = {
      read: (s) => {
        try {
          return JSON.parse(s);
        } catch {
          return s;
        }
      },
      write: (s) => JSON.stringify(s)
    }
  } = t;
  if (!zi()) {
    const u = W((() => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const r = localStorage.getItem(e);
          if (r)
            return a.read(r);
        }
      } catch (r) {
        console.error("[useCrossPlatformStorage] Failed to load", e, "from localStorage:", r);
      }
      return n;
    })());
    return Qe(u, (r) => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const c = a.write(r);
          localStorage.setItem(e, c);
        }
      } catch (c) {
        console.error("[useCrossPlatformStorage] Failed to save", e, "to localStorage:", c);
      }
    }, { deep: !0 }), u;
  }
  if (zi()) {
    if (!Ja)
      return console.error("[useCrossPlatformStorage] ApplicationSettings not available! Using in-memory fallback."), W(n);
    const u = W((() => {
      try {
        const r = Ja.getString(e);
        if (r)
          return a.read(r);
      } catch (r) {
        console.error("[useCrossPlatformStorage] Failed to load", e, "from ApplicationSettings:", r);
      }
      return n;
    })());
    return Qe(u, (r) => {
      try {
        const c = a.write(r);
        Ja.setString(e, c);
      } catch (c) {
        console.error("[useCrossPlatformStorage] Failed to save", e, "to ApplicationSettings:", c);
      }
    }, { deep: !0 }), u;
  }
  return console.warn("[useCrossPlatformStorage] No storage available for key", e, "- using in-memory fallback"), W(n);
}
function Mi(e) {
  if (typeof e != "string" || !e || !(e.startsWith("errors.") || e.startsWith("fields.") || e.startsWith("extras.") || e.startsWith("woodwork.") || e.startsWith("validation."))) return e;
  const t = $o(e);
  return t && t !== e ? t : e;
}
function Gu() {
  const e = Date.now(), n = Math.random().toString(36).substring(2, 15), t = Math.random().toString(36).substring(2, 15);
  return `${e.toString(36)}-${n}-${t}`;
}
const On = W([]), Wu = 6;
function rs() {
  const e = ({
    message: t,
    type: a = "info",
    additional: i = [],
    options: s = {},
    action: u = () => {
    }
  }) => {
    Array.isArray(i) || (console.warn("addNotice - additional must be an array"), i = []);
    const r = {
      id: Gu(),
      message: Ti(Mi(t)),
      additional: i.length > 5 ? i.slice(0, 5).map((f) => Ti(Mi(f))).join("<br>") + "<br>..." : i.slice(0, 5).map((f) => Ti(Mi(f))).join("<br>"),
      type: a,
      persistent: s.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: u
    }, c = s.maxNotices ?? Wu;
    if (On.value.length >= c) {
      const f = On.value.findIndex((m) => !m.persistent);
      if (f !== -1)
        On.value.splice(f, 1);
      else if (!r.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), r.id;
    }
    return On.value.push(r), !r.persistent && s.timeout !== 0 && setTimeout(() => n(r.id), s.timeout || 6e3), r.id;
  }, n = (t) => {
    On.value.findIndex((i) => i.id === t) !== -1 && (On.value = On.value.filter((i) => i.id !== t));
  };
  return {
    notices: On,
    addNotice: e,
    dismissNotice: n
  };
}
const us = Un("cle-extras-config", {}), Hi = (e, n) => {
  us.value[e] = n;
}, dn = (e) => us.value[e] || null, zu = () => us.value;
let ao = !1;
const Ku = () => {
  ao || (Sr({
    getExtrasConfig: dn,
    getAllExtrasConfigs: zu,
    setExtrasConfig: Hi
  }), ao = !0);
}, Hu = (e, n) => {
  const t = dn(e);
  if (!t || !t.options || t.options.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const a = t.options[0], i = Array.isArray(a) && typeof a[0] == "string" ? a : [];
  if (i.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const s = (c) => t.options.length > 1 ? c.includes("|") ? t.pricing && Object.keys(t.pricing).length > 0 ? Object.prototype.hasOwnProperty.call(t.pricing, c) ? !0 : Object.keys(t.pricing).some((I) => I.startsWith(c + "|") || I === c) : c.split("|").every((m, I) => {
    if (I >= t.options.length) return !1;
    const O = t.options[I];
    return Array.isArray(O) && typeof O[0] == "string" && O.includes(m);
  }) : t.options.some((f) => Array.isArray(f) && typeof f[0] == "string" && f.includes(c)) : i.includes(c), u = /* @__PURE__ */ new Set();
  let r = 0;
  return n.forEach((c) => {
    if (!c.extras?.[e]) return;
    const f = c.extras[e].sides || {};
    Object.entries(f).forEach(([I, O]) => {
      typeof O == "string" && O && !s(O) && (u.add(O), f[I] = "", r++);
    });
    const m = c.extras[e].faces || {};
    Object.entries(m).forEach(([I, O]) => {
      typeof O == "string" && O && !s(O) && (u.add(O), m[I] = "", r++);
    });
  }), {
    cleanedCount: r,
    invalidOptions: Array.from(u)
  };
}, Zu = (e) => {
  const {
    customNames: n,
    usedNames: t,
    allowCustomNames: a,
    getSelectOptions: i,
    onCustomNameAdded: s,
    onCustomNameDeleted: u
  } = e, r = W(""), c = A(() => a && r.value?.trim()), f = A(() => !a || !n.value || n.value.length === 0 || n.value.length === 1 && n.value[0] === !0 ? !0 : n.value.filter((_) => typeof _ == "string").every((_) => t.value.includes(_))), m = A(() => {
    const b = [];
    if (a && n.value && n.value.length > 0) {
      if (n.value.length === 1 && n.value[0] === !0)
        return b;
      const U = [...n.value.filter((q) => typeof q == "string")].sort(), me = new Set(t.value ?? []), G = U.filter((q) => !me.has(q));
      b.push({
        id: "delete-header",
        type: "group",
        label: "Delete Type"
      }), G.length > 1 && b.push({
        id: "delete-all-custom-names",
        label: "Delete all",
        icon: ["fass", "trash"],
        class: "del"
      }), U.forEach((q) => {
        const ce = me.has(q);
        b.push({
          id: `delete-${q}`,
          label: ce ? `"${q}" (in use)` : `Delete "${q}"`,
          icon: ["fass", "trash"],
          class: "del",
          disabled: ce
        });
      });
    }
    return b;
  }), I = () => {
    const b = r.value?.trim();
    if (!b) return;
    if (i("", 0).map((U) => U.value).includes(b)) {
      r.value = "";
      return;
    }
    s(b), r.value = "";
  }, O = (b) => {
    const _ = b.item || b;
    if (_.id === "delete-all-custom-names") {
      n.value.filter((U) => typeof U == "string").filter((U) => !(t.value?.includes(U) ?? !1)).forEach((U) => u(U));
      return;
    }
    if (_.id?.startsWith("delete-")) {
      const U = _.id.replace("delete-", "");
      if (t.value?.includes(U)) {
        console.warn(`Cannot delete ${e.extraType} type "${U}" - it is currently in use`);
        return;
      }
      u(U);
    }
  };
  return {
    newCustomName: r,
    canAddCustomName: zt(c),
    isActionMenuDisabled: zt(f),
    customNameActions: m,
    handleAddCustomName: I,
    handleCustomNameAction: O
  };
}, Ju = (e) => {
  const {
    extraType: n,
    labels: t,
    shapeIndex: a,
    enablePricing: i,
    shouldShowAll: s,
    locations: u,
    locationGroups: r = W([]),
    shape: c = W(null),
    orientationModel: f = 0,
    getInputType: m,
    getInputConfig: I,
    getAllInputConfig: O,
    getInputConfigForLocation: b,
    canDelete: _,
    getLocationLabel: U,
    shouldShowDeleteButton: me
  } = e, G = A(() => {
    const ne = [], oe = r.value && r.value.length > 0, R = /* @__PURE__ */ new Set();
    if (oe && r.value.forEach((D) => {
      D.hideIndividualLocations && D.locations.forEach((le) => R.add(le));
    }), oe && r.value.forEach((D) => ne.push(D.id)), !oe && s.value && ne.push("all"), u.value && u.value.length > 0)
      ne.push(...u.value.filter((D) => D !== "all" && !R.has(D)));
    else {
      const D = ia(n), le = Oo(n), ie = Eo(n), se = Ao(n);
      !oe && (le && ie && se) && (xr(n).length > 0 && ne.push("faces"), Ir(n).length > 0 && ne.push("sides")), ne.push(...D.filter((Xe) => !R.has(Xe)));
    }
    let x = Array.from(new Set(ne));
    if ((f === 1 || f === 2) && c.value && c.value.w > c.value.l) {
      const D = ["side.l1", "side.l2", "side.w1", "side.w2"], le = x.map((ie, se) => ({ loc: ie, i: se })).filter((ie) => D.includes(ie.loc));
      if (le.length > 0) {
        const ie = le[0].i, se = le.filter((Ie) => Ie.loc.includes(".w")).sort((Ie, Fe) => Ie.loc.localeCompare(Fe.loc)), We = le.filter((Ie) => Ie.loc.includes(".l")).sort((Ie, Fe) => Ie.loc.localeCompare(Fe.loc)), Xe = [...se.map((Ie) => Ie.loc), ...We.map((Ie) => Ie.loc)];
        x = x.filter((Ie) => !D.includes(Ie)), x.splice(ie, 0, ...Xe);
      }
    }
    return x;
  }), q = A(() => `1fr${i ? " max-content" : ""}`), ce = (ne, oe) => `${n}-${ne}-${t[oe]}-${oe}-${a}`, de = (ne) => {
    const oe = U(ne);
    return `Delete ${n} for ${oe}`;
  }, w = (ne) => ({
    show: me(ne),
    enabled: _(ne),
    ariaLabel: de(ne)
  }), M = (ne, oe) => m(ne, oe);
  return {
    renderLocations: zt(G),
    gridStyle: zt(q),
    getInputId: ce,
    getDeleteAriaLabel: de,
    getInputConfigForLocation: b,
    getDeleteConfig: w,
    getInputTypeForLocation: M,
    // Re-export the passed functions for consistency
    getInputType: m,
    getInputConfig: I,
    getAllInputConfig: O,
    canDelete: _,
    shouldShowDeleteButton: me,
    getLocationLabel: U
  };
}, io = /* @__PURE__ */ new Set(), Qu = (e) => {
  Ku();
  const {
    shape: n,
    extraType: t,
    allOptions: a,
    labels: i,
    userFriendlyFieldMap: s,
    allowCustomNames: u,
    customNames: r = W([]),
    enablePricing: c = !1,
    pricing: f,
    displayNames: m,
    locations: I = W([]),
    locationGroups: O = W([]),
    orientationModel: b = 0,
    getAvailablePricingOptions: _,
    getPrice: U,
    findExtrasPrice: me,
    formatPrice: G
  } = e, q = A(() => Rs(a) ? a.value : a), ce = A(() => Rs(m) ? m.value : m), de = () => {
    const g = dn(t), P = q.value?.length ? q.value : g?.options || [], z = g?.labels || i;
    An(n.value, t, P, z, r.value);
  };
  de(), Qe(
    () => n.value?.extras?.[t],
    (g) => {
      if (g) {
        const P = g?.sides || {}, z = g?.options?.sides || {};
        let Q = !1;
        for (const [V, X] of Object.entries(P))
          if (typeof X == "string" && X !== "" && !z[V]) {
            Q = !0;
            break;
          }
        Q && de();
      }
    },
    { immediate: !1 }
  );
  const w = A(() => dn(t)), M = A(() => {
    const g = q.value?.length ? q.value : w.value?.options || [];
    if (g.length > 1)
      return "multiple";
    const z = (g[0] || []).filter((he) => typeof he == "string"), Q = (r.value || []).filter((he) => typeof he == "string"), X = Array.from(/* @__PURE__ */ new Set([...z, ...Q])).length;
    return X === 0 ? "boolean" : X === 1 ? "single" : "multiple";
  }), ne = A(() => ia(t)), oe = A(() => I.value && I.value.length > 0 ? I.value.filter((g) => g !== "all" && g !== "faces" && g !== "sides") : ne.value), R = A(() => oe.value.filter((g) => Pa(g) === "face")), x = A(() => oe.value.filter((g) => Pa(g) === "side")), D = A(() => Eo(t)), le = A(() => Ao(t)), ie = A(() => Oo(t)), se = () => {
    const g = q.value?.length ? q.value : w.value?.options;
    return !!g && g.length > 1;
  }, We = (g, P, z) => {
    const { singleOption: Q = ve(), operation: V } = z;
    switch (P) {
      case "boolean":
        return !!g;
      case "single":
        return Q ? V === "process" || V === "set" ? g && Q ? Q : "" : g === Q ? Q : "" : !!g;
      case "multiple":
        return g || "";
      default:
        return g;
    }
  }, Xe = (g, P, z) => We(P, z, { operation: "process" }), Ie = (g, P, z, Q, V, X) => {
    switch (X) {
      case "boolean":
        Va(g, P, z, Q, !!V);
        break;
      case "single": {
        const he = ve();
        Va(g, P, z, Q, V ? he : "");
        break;
      }
      case "multiple":
        Va(g, P, z, Q, V || "");
        break;
    }
  }, Fe = (g, P, z = {}) => {
    const Q = z.singleOption || ve();
    return z.allowCustomNames, We(g, P, {
      operation: "get",
      singleOption: Q
    });
  }, De = (g, P, z, Q) => {
    switch (Q) {
      case "boolean":
        return !!g;
      case "single": {
        const V = ve();
        if (V) {
          const X = P.map((qe) => Ln(n.value, t, qe, z)), he = X.every((qe) => qe === V || qe === !0), Oe = X.every((qe) => !qe || qe === "");
          return he ? V : Oe ? "" : null;
        }
        return !!g;
      }
      case "multiple":
        return typeof g == "string" ? g : g || "";
      default:
        return g;
    }
  }, B = (g, P, z, Q = !1) => {
    if (Q)
      g.forEach((V) => ee(V, P, z));
    else {
      const V = i[P] || "", X = Xe(V, z, M.value);
      g.forEach((he) => {
        Ie(n.value, t, he, V, X, M.value);
      });
    }
  }, J = (g, P) => {
    if (se()) {
      const z = i[P] || "", Q = g.map((Oe) => {
        const qe = Ln(n.value, t, Oe, z);
        return qe === !0 ? k(P)[0] || "" : String(qe || "");
      }), V = Q[0] || "";
      return Q.every((Oe) => Oe === V) ? V : null;
    } else {
      const z = i[P] || "";
      if (M.value === "single") {
        const V = ve();
        if (V) {
          const X = g.map((qe) => Ln(n.value, t, qe, z)), he = X.every((qe) => qe === V || qe === !0), Oe = X.every((qe) => !qe || qe === "");
          return he ? V : Oe ? "" : null;
        }
      }
      const Q = qs(n.value, t, g, z, M.value);
      return M.value === "multiple" && Q === !1 && g.every((X) => {
        const he = Ln(n.value, t, X, z, M.value);
        return he === "" || he === !1 || he === null || he === void 0;
      }) ? "" : Q;
    }
  }, ke = (g) => {
    const { location: P, locationType: z = "single", optionIndex: Q, stateValue: V, isAggregate: X = !1 } = g, he = k(Q), Oe = X && P !== void 0 && $t(P), qe = Oe && he.some((Ge) => typeof Ge == "string" && Ge.endsWith(`|${P}`)), gt = Oe && (he.length <= 1 || qe), Pe = X ? Lt(Q, P && $t(P) ? P : z) : Lt(Q, P), Be = c && he.length > 1 && Pe.length === 0, je = (() => {
      if (!Be || Q === 0 || !P) return !1;
      for (let Ge = 0; Ge < Q; Ge++) {
        let Ft = null;
        if (Oe && typeof P == "string" ? Ft = pt(P, Ge) : X ? P === "all" ? Ft = kt(Ge) : P === "faces" ? Ft = Le(Ge) : P === "sides" && (Ft = ze(Ge)) : Ft = we(P, Ge), !Ft) return !0;
      }
      return !1;
    })(), At = !gt && he.length > 1 ? "select" : "checkbox";
    if (Be && P && !je) {
      const Ge = `${t}:${P}:${Q}`;
      io.has(Ge) || (io.add(Ge), rs().addNotice({
        type: "warning",
        message: `No price set for ${t} at ${P}. This option is not currently available.`
      }));
    }
    const Ke = M.value === "multiple" && Pe.length === 1 && c && Q > 0;
    if (Ke && Pe[0]) {
      if (X) {
        let Ge = [];
        z === "all" ? Ge = oe.value : z === "faces" ? Ge = R.value : z === "sides" ? Ge = x.value : P && $t(P) && (Ge = dt(P)), Ge.forEach((Ft) => {
          const pa = we(Ft, Q);
          (!pa || pa !== Pe[0]) && ee(Ft, Q, Pe[0]);
        });
      } else if (P) {
        const Ge = we(P, Q);
        (!Ge || Ge !== Pe[0]) && ee(P, Q, Pe[0]);
      }
    }
    let Tt = !1;
    const Xt = dn(t);
    if (Xt?.optionLocations && P && P !== "all" && At === "checkbox" && he.length === 1) {
      const Ge = Xt.optionLocations[he[0]];
      Ge && !Ge.includes(P) && (Tt = !0);
    }
    const Hn = Be || M.value === "multiple" && (Pe.length === 0 || Ke), Dn = V !== void 0 ? V : P ? we(P, Q) : null, ci = At === "select" ? hn(P || z, Q) : void 0, Oa = (Ge) => (ce.value ?? w.value?.displayNames)?.[Ge] || Ge, fa = At === "checkbox" ? gt ? g.customLabel : he.length === 1 ? Oa(he[0]) : void 0 : void 0;
    let _n, In;
    if (At === "checkbox")
      if (gt && he.length > 1) {
        const Ge = he.find((Ft) => Ft.endsWith(`|${P}`));
        Ge && (_n = Ge, In = "");
      } else he.length === 1 && (_n = he[0], In = "");
    return {
      inputType: At,
      // Alias for backward compatibility
      type: At,
      value: Dn,
      options: ci,
      disabled: Hn,
      hidden: Tt,
      label: fa,
      indeterminate: Dn === null && At === "checkbox",
      trueValue: _n,
      falseValue: In
    };
  }, Re = (g, P, z) => ke({
    locationType: g,
    optionIndex: P,
    stateValue: z,
    isAggregate: !0
  }), ee = (g, P, z) => {
    const Q = i[P] || "";
    if (se()) {
      const V = gn(g, P);
      let X;
      if (V === "checkbox") {
        const Oe = k(P)[0];
        X = z ? Oe : "";
      } else
        X = z || "";
      Va(n.value, t, g, Q, X);
    } else
      Ie(n.value, t, g, Q, z, M.value);
  }, we = (g, P) => {
    const z = i[P] || "";
    if (se()) {
      const Q = Ln(n.value, t, g, z);
      if (gn(g, P) === "checkbox") {
        const he = k(P)[0];
        return Q === !0 || Q === he ? he : "";
      } else
        return Q || "";
    } else {
      const Q = Ln(n.value, t, g, z, M.value);
      return Fe(Q, M.value);
    }
  }, _e = (g, P) => {
    B(oe.value, g, P, se());
  }, kt = (g) => {
    if (se()) {
      const P = i[g] || "", z = oe.value.map((X) => {
        const he = Ln(n.value, t, X, P);
        return he === !0 ? k(g)[0] || "" : String(he || "");
      }), Q = z[0] || "";
      return z.every((X) => X === Q) ? Q : null;
    } else {
      const P = i[g] || "", z = qs(n.value, t, oe.value, P, M.value);
      return De(z, oe.value, P, M.value);
    }
  }, rt = () => {
    xi(n.value, t, oe.value, M.value), tt(n);
  }, Qt = (g) => g === "faces" ? {
    locations: R.value,
    isSupported: D.value
  } : {
    locations: x.value,
    isSupported: le.value
  }, ut = (g, P, z) => {
    const { locations: Q, isSupported: V } = Qt(g);
    V && B(Q, P, z, se());
  }, on = (g, P) => {
    const { locations: z, isSupported: Q } = Qt(g);
    return Q ? J(z, P) : null;
  }, Yt = (g) => {
    const { locations: P, isSupported: z } = Qt(g);
    z && (xi(n.value, t, P, M.value), tt(n));
  }, wn = (g, P) => {
    const { isSupported: z } = Qt(g);
    if (!z) return { type: "checkbox", value: !1 };
    const Q = on(g, P);
    return Re(g, P, Q);
  }, ct = (g, P) => {
    ut("faces", g, P);
  }, Y = (g, P) => {
    ut("sides", g, P);
  }, Le = (g) => on("faces", g), ze = (g) => on("sides", g), Ae = () => {
    Yt("faces");
  }, at = () => {
    Yt("sides");
  }, et = (g) => O.value.find((P) => P.id === g), dt = (g) => {
    const P = et(g);
    return P ? P.locations.filter((z) => oe.value.includes(z)) : [];
  }, ft = (g, P, z) => {
    const Q = dt(g);
    Q.length !== 0 && (Q.forEach((V) => ee(V, P, z)), tt(n));
  }, pt = (g, P) => {
    const z = dt(g);
    if (z.length === 0) return null;
    if (!se()) {
      const X = k(P).find((he) => he.endsWith(`|${g}`));
      if (X) {
        const he = i[P] || "", Oe = z.map((Pe) => Ln(n.value, t, Pe, he)), qe = Oe.every((Pe) => Pe === X), gt = Oe.some((Pe) => Pe === X);
        return qe ? X : gt ? null : "";
      }
    }
    const Q = J(z, P);
    return !se() && (Q === null || Q === !1 || Q === "") ? "" : Q;
  }, pn = (g) => {
    const P = dt(g);
    P.length !== 0 && (xi(n.value, t, P, M.value), tt(n));
  }, it = (g, P) => {
    const z = pt(g, P), Q = et(g);
    return ke({
      location: g,
      optionIndex: P,
      stateValue: z,
      isAggregate: !0,
      customLabel: Q?.label
    });
  }, ln = (g) => {
    Er(n.value, t, g, M.value), tt(n);
  }, mn = (g) => g === "all" ? oe.value.some((P) => !!we(P, 0)) : g === "faces" && D.value ? R.value.some((P) => !!we(P, 0)) : g === "sides" && le.value ? x.value.some((P) => !!we(P, 0)) : $t(g) ? dt(g).some((z) => !!we(z, 0)) : oe.value.includes(g) ? !!we(g, 0) : !1, St = (g) => {
    if (g === "all") return Te("general.all");
    if (g === "faces") return `${Te("general.all")} ${Te("machining.face_other")}`;
    if (g === "sides") return `${Te("general.all")} ${Te("woodwork.edge_other")}`;
    if ($t(g)) {
      const Q = et(g);
      if (Q) return Q.label;
    }
    if (g.startsWith("face.")) {
      const V = `faces.${g.replace("face.", "")}`;
      return Te(V);
    }
    if (g.startsWith("side.")) {
      const Q = !!(n.value && n.value.w > n.value.l);
      return Te(Or(g, b, Q));
    }
    const P = `fields.${g}`, z = Te(P);
    return z !== P ? z : s?.[g] ? s[g] : g;
  }, gn = (g, P) => M.value === "boolean" ? "checkbox" : k(P).length > 1 ? "select" : "checkbox", Sn = (g, P) => ke({
    location: g,
    optionIndex: P,
    isAggregate: !1
  }), Kn = (g) => {
    const P = kt(g);
    return Re("all", g, P);
  }, rn = (g) => wn("faces", g), mt = (g) => wn("sides", g), Dt = (g, P) => g === "all" ? Kn(P) : g === "faces" ? rn(P) : g === "sides" ? mt(P) : $t(g) ? it(g, P) : Sn(g, P), Lt = (g, P) => {
    const z = dn(t), V = (q.value?.length ? q.value : z?.options || [])[g];
    if (!V || V[0] === !0)
      return [];
    const X = P && typeof P == "string" && (P.startsWith("face.") || P.startsWith("side.")), he = P && typeof P == "string" && $t(P), Oe = !X && (P === "all" || P === "faces" || P === "sides" || he);
    if (Array.isArray(V) && V.length === 1 && typeof V[0] == "string" && !(c && _ && (X || Oe) && g > 0))
      return V;
    if (c && _ && X) {
      const Pe = [];
      if (g > 0)
        for (let Be = 0; Be < g; Be++) {
          const je = we(P, Be);
          if (typeof je == "string" && je)
            Pe.push(je);
          else if (typeof je == "boolean")
            Pe.push(je);
          else {
            const At = dn(t), Ke = ji(n.value, t, P);
            return Ke && typeof Ke == "object" && !Array.isArray(Ke) && Object.keys(Ke).length > 1 && At?.options[g] ? At.options[g] : [];
          }
        }
      return _(f, Pe, g);
    }
    if (c && _ && Oe) {
      const Pe = [];
      if (g > 0)
        for (let Be = 0; Be < g; Be++) {
          let je;
          if (P === "all" ? je = kt(Be) : P === "faces" ? je = Le(Be) : P === "sides" ? je = ze(Be) : he && typeof P == "string" && (je = pt(P, Be)), typeof je == "string" && je)
            Pe.push(je);
          else if (typeof je == "boolean")
            Pe.push(je);
          else
            return [];
        }
      return _(f, Pe, g);
    }
    const qe = V, gt = u ? (r.value || []).filter((Pe) => typeof Pe == "string") : [];
    return [.../* @__PURE__ */ new Set([...qe, ...gt])];
  }, hn = (g, P) => {
    const z = dn(t), V = (q.value?.length ? q.value : z?.options)?.[P] || [], X = u && r.value ? r.value.filter((Ke) => typeof Ke == "string") : [];
    let he = [.../* @__PURE__ */ new Set([...V, ...X])];
    z?.optionLocations && g && g !== "all" && (he = he.filter((Ke) => {
      const Tt = z.optionLocations[Ke];
      return Tt ? Tt.includes(g) : !0;
    }));
    const Oe = Lt(P, g), qe = new Set(Oe), gt = ce.value ?? z?.displayNames, Be = typeof g == "string" && (g.startsWith("face.") || g.startsWith("side.")) ? we(g, P) : null, je = typeof Be == "string" ? Be : null;
    return he.filter((Ke) => qe.has(Ke) || Ke === je).map((Ke) => ({
      value: Ke,
      label: gt?.[Ke] || Ke,
      disabled: !qe.has(Ke)
    }));
  }, ve = () => {
    const g = Lt(0);
    return g.length === 1 ? g[0] : void 0;
  }, v = (g) => {
    const P = Lt(g);
    return P.length === 1 ? P[0] : void 0;
  }, k = (g) => {
    const P = dn(t), z = q.value?.length ? q.value : P?.options;
    let Q = [];
    if (z && z[g] && Array.isArray(z[g])) {
      const X = z[g];
      Array.isArray(X) && X.every((he) => typeof he == "string") && (Q = X);
    }
    const V = u && r.value ? r.value.filter((X) => typeof X == "string") : [];
    return [.../* @__PURE__ */ new Set([...Q, ...V])];
  }, y = (g, P = 0) => {
    if (g === "all" || g === "faces" || g === "sides")
      return "";
    if ($t(g)) {
      const Q = et(g);
      return Q?.price !== void 0 && pt(g, P) ? G ? G(Q.price) : Q.price.toString() : "";
    }
    if (!c || !U)
      return "";
    if (!oe.value.includes(g))
      return "N/A";
    const z = U(n.value, t, g, me);
    return z ? G ? G(z) : z.toString() : "N/A";
  }, F = (g) => {
    if (!c || !U) return !1;
    if (typeof g == "string" && $t(g)) {
      const P = et(g);
      return typeof P?.price == "number" ? P.price : !1;
    }
    return U(n.value, t, g, me);
  }, j = A(() => oe.value.length > 1), fe = A(() => ne.value.length > 1), ye = () => M.value === "multiple", Ve = () => {
    const g = 1 + q.value.length, P = M.value === "multiple", z = c, Q = g + (P ? 1 : 0) + (z ? 1 : 0);
    return {
      columns: Q,
      style: `repeat(${Q}, max-content)`
    };
  }, Ee = (g) => g === "all" ? "all" : g === "faces" ? "faces" : g === "sides" ? "sides" : "individual", Ue = (g) => Pa(g), Et = (g) => {
    if (g === "all")
      return j.value;
    if ($t(g))
      return et(g) ? dt(g).length > 0 : !1;
    if (I.value && I.value.length > 0)
      return I.value.includes(g);
    const P = Ee(g);
    return P === "all" ? j.value : P === "faces" || P === "sides" ? P === "faces" && D.value && R.value.length > 0 || P === "sides" && le.value && x.value.length > 0 ? fe.value : !1 : ne.value.includes(g);
  }, xn = (g) => {
    Lr(g, t, r);
  }, ua = (g) => {
    Cr([n.value], t, g, i);
  }, ui = (g) => {
    Pr([n.value], t, g);
  }, ca = (g, P, z) => {
    if (g === "all")
      _e(P, z);
    else if (g === "faces")
      ct(P, z);
    else if (g === "sides")
      Y(P, z);
    else if ($t(g)) {
      let V = z;
      if (!se() && typeof z == "boolean") {
        const X = k(P), he = X.find((Oe) => Oe.endsWith(`|${g}`));
        he ? V = z ? he : "" : X.length === 1 && (V = z ? X[0] : "");
      }
      if (!se() && V) {
        const X = dt(g), he = new Set(X);
        O.value && (O.value.forEach((Oe) => {
          Oe.id !== g && dt(Oe.id).filter((Pe) => !he.has(Pe)).forEach((Pe) => {
            ee(Pe, P, "");
          });
        }), tt(n));
      }
      ft(g, P, V);
    } else
      ee(g, P, z), se() || tt(n);
    const Q = i.length;
    for (let V = P + 1; V < Q; V++) {
      let X;
      if (g === "all" ? X = kt(V) : g === "faces" ? X = Le(V) : g === "sides" ? X = ze(V) : $t(g) ? X = pt(g, V) : X = we(g, V), !X)
        continue;
      const he = Lt(V, g);
      let Oe = !1;
      if (typeof X == "string" ? Oe = he.includes(X) : typeof X == "boolean" && X === !0 && (Oe = he.length > 0), !Oe) {
        const qe = gn(g, V) === "checkbox" ? !1 : "";
        g === "all" ? _e(V, qe) : g === "faces" ? ct(V, qe) : g === "sides" ? Y(V, qe) : $t(g) ? ft(g, V, qe) : ee(g, V, qe);
      }
    }
  }, $n = (g, P = !0) => P && !confirm(`Delete ${t} for ${St(g)}?`) ? !1 : (g === "all" ? rt() : g === "faces" ? Ae() : g === "sides" ? at() : $t(g) ? pn(g) : ln(g), !0), da = () => {
    const g = n.value[t], P = n.value[`${t}Options`];
    return !(!g || typeof g != "object" || !P || typeof P != "object" || D.value && (!("faces" in g) || !("faces" in P)) || le.value && (!("sides" in g) || !("sides" in P)));
  }, Mn = () => {
    const g = [], P = n.value[t], z = n.value[`${t}Options`];
    return !P || typeof P != "object" ? g.push(`Missing or invalid ${t} property in shape`) : (D.value && !("faces" in P) && g.push(`Missing faces property in ${t}`), le.value && !("sides" in P) && g.push(`Missing sides property in ${t}`)), !z || typeof z != "object" ? g.push(`Missing or invalid ${t}Options property in shape`) : (D.value && !("faces" in z) && g.push(`Missing faces property in ${t}Options`), le.value && !("sides" in z) && g.push(`Missing sides property in ${t}Options`)), g;
  };
  return {
    // State - provide raw computed refs for other composables
    mode: M,
    // Raw computed ref (not readonly wrapped)
    allLocations: zt(oe),
    faceLocations: zt(R),
    sideLocations: zt(x),
    shouldShowAll: j,
    // Raw computed ref (not readonly wrapped)
    shouldShowGroupControls: zt(fe),
    // Support flags
    supportsFaces: zt(D),
    supportsSides: zt(le),
    supportsBoth: zt(ie),
    // Core operations
    setValue: ee,
    getValue: we,
    setAll: _e,
    getAll: kt,
    getAllState: kt,
    // Alias for backward compatibility
    deleteSingle: ln,
    deleteAll: rt,
    canDelete: mn,
    // Group-specific operations
    setAllFaces: ct,
    setAllSides: Y,
    getAllFaces: Le,
    getAllSides: ze,
    deleteAllFaces: Ae,
    deleteAllSides: at,
    // UI helpers
    getLocationLabel: St,
    getInputType: gn,
    getInputConfig: Sn,
    getAllInputConfig: Kn,
    getAllFacesInputConfig: rn,
    getAllSidesInputConfig: mt,
    getInputConfigForLocation: Dt,
    getSelectOptions: hn,
    getSingleOptionLabel: v,
    // Pricing
    getPriceDisplay: y,
    getCalculatedPrice: F,
    // Layout & rendering
    shouldShowDeleteButton: ye,
    getGridConfig: Ve,
    getLocationGroup: Ee,
    getLocationScope: Ue,
    isLocationVisible: Et,
    // Options management
    getAvailableOptions: Lt,
    getSingleAvailableOption: ve,
    // Initialization & migration
    initialize: de,
    initializeExtra: de,
    // Alias for backward compatibility
    initializeCustomNames: xn,
    migrateToSingle: ua,
    migrateToBoolean: ui,
    // Event handlers
    handleInputChange: ca,
    handleDelete: $n,
    // Validation
    validateShape: da,
    getValidationErrors: Mn,
    // Debug helpers (development only)
    getDebugInfo: (g, P) => ({
      mode: M.value,
      location: g,
      optionIndex: P,
      value: oe.value.includes(g) ? we(g, P) : "N/A",
      inputType: gn(g, P),
      canDelete: mn(g),
      allState: kt(P),
      availableOptions: Lt(P),
      locationGroup: Ee(g),
      config: w.value,
      supportsFaces: D.value,
      supportsSides: le.value,
      supportsBoth: ie.value,
      ...D.value && {
        allFacesState: Le(P)
      },
      ...le.value && {
        allSidesState: ze(P)
      },
      ...oe.value.includes(g) && {
        locationScope: Ue(g)
      }
    })
  };
};
function Zi(e) {
  const n = {}, t = e, a = t.code;
  if (a === "invalid_type") {
    let i = "unknown";
    if ("input" in t)
      i = typeof t.input;
    else if ("received" in t) {
      const s = t.received;
      i = typeof s == "string" ? s : typeof s;
    }
    n.expected = t.expected, n.received = i;
  } else a === "too_small" ? (n.minimum = t.minimum, n.min = t.minimum, n.inclusive = t.inclusive) : a === "too_big" ? (n.maximum = t.maximum, n.max = t.maximum, n.inclusive = t.inclusive) : a === "invalid_string" && (n.validation = t.validation);
  if (a === "too_small" || a === "too_big" || a === "invalid_type") {
    const i = t.path, s = Array.isArray(i) && i.length > 0 ? String(i[i.length - 1]) : "field";
    n.field = `fields.${s}`;
  }
  return n;
}
function so(e) {
  return e.map((n) => {
    const t = n.path.length > 0 ? n.path.join(".") : "root", a = Zi(n), i = Ka(n.message, a);
    return `[${t}] ${i}`;
  });
}
function wa(e, n) {
  const t = e.safeParse(n);
  return {
    success: t.success,
    data: t.success ? t.data : void 0,
    errors: t.success ? void 0 : t.error.issues
  };
}
function Yu(e = {}) {
  try {
    let n = function(v) {
      if (!v || typeof v != "object") return v;
      const k = { ...v };
      if (delete k.issues, delete k.warnings, k.trim && typeof k.trim == "object") {
        const y = k.trim;
        ("x1" in y || "x2" in y || "y1" in y || "y2" in y) && (k.trim = {
          l1: y.y1 ?? y.l1 ?? 0,
          l2: y.y2 ?? y.l2 ?? 0,
          w1: y.x1 ?? y.w1 ?? 0,
          w2: y.x2 ?? y.w2 ?? 0
        });
      }
      if (k.extras?.banding?.sides && typeof k.extras.banding.sides == "object") {
        const y = k.extras.banding.sides;
        ("x1" in y || "x2" in y || "y1" in y || "y2" in y) && (k.extras.banding.sides = {
          l1: y.y1 ?? y.l1,
          l2: y.y2 ?? y.l2,
          w1: y.x1 ?? y.w1,
          w2: y.x2 ?? y.w2
        });
      }
      if (k.extras?.finish?.sides && typeof k.extras.finish.sides == "object") {
        const y = k.extras.finish.sides;
        ("x1" in y || "x2" in y || "y1" in y || "y2" in y) && (k.extras.finish.sides = {
          l1: y.y1 ?? y.l1,
          l2: y.y2 ?? y.l2,
          w1: y.x1 ?? y.w1,
          w2: y.x2 ?? y.w2
        });
      }
      if (k.extras?.planing?.sides && typeof k.extras.planing.sides == "object") {
        const y = k.extras.planing.sides;
        ("x1" in y || "x2" in y || "y1" in y || "y2" in y) && (k.extras.planing.sides = {
          l1: y.y1 ?? y.l1,
          l2: y.y2 ?? y.l2,
          w1: y.x1 ?? y.w1,
          w2: y.x2 ?? y.w2
        });
      }
      if (k.efficiencyOptions?.primaryCompression) {
        const y = k.efficiencyOptions.primaryCompression;
        y === "x" ? k.efficiencyOptions = {
          ...k.efficiencyOptions,
          primaryCompression: "l"
        } : y === "y" && (k.efficiencyOptions = {
          ...k.efficiencyOptions,
          primaryCompression: "w"
        });
      }
      for (const y in k)
        k[y] === null && delete k[y];
      return k;
    }, t = function(v, k) {
      if (!Array.isArray(v))
        return [];
      const y = [];
      for (let F = 0; F < v.length; F++) {
        const j = v[F], fe = n(j);
        try {
          const ye = {
            ...fe,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored shapes as new to avoid showing validation errors immediately
          };
          j.autoId && (ye.autoId = j.autoId), delete ye.issues, delete ye.warnings;
          const Ve = new Jn(ye, k);
          y.push(Ve);
        } catch (ye) {
          console.error(`Failed to create InputShape at index ${F}:`, ye);
        }
      }
      return y;
    }, a = function(v, k) {
      if (!Array.isArray(v)) return [];
      const y = [];
      for (let F = 0; F < v.length; F++) {
        const j = v[F], fe = n(j);
        try {
          const ye = {
            ...fe,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored stock as new to avoid showing validation errors immediately
          };
          j.autoId && (ye.autoId = j.autoId);
          const Ve = new ha(ye, k);
          y.push(Ve);
        } catch (ye) {
          console.error(`Failed to create InputStock at index ${F}:`, ye);
        }
      }
      return y;
    }, i = function(v) {
      const k = n(v), y = wa(zn, k);
      if (y.success && y.data) {
        const F = {
          ...y.data,
          issues: [],
          warnings: []
        };
        return v?.autoId && (F.autoId = v.autoId), new bn(F);
      } else
        return console.error("Failed to parse input saw:", y.errors), new bn({});
    }, s = function(v, k) {
      return Array.isArray(v) ? k && k.length ? ju(v, k) : v.map((y) => new Lo(y)).filter(Boolean) : [];
    }, u = function(v = {}) {
      try {
        const F = { ...Ca(
          (fe) => {
            if (typeof fe != "object" || fe === null) return fe;
            const ye = { ...fe };
            for (const Ve in ye)
              ye[Ve] === null && delete ye[Ve];
            return ye;
          },
          Wn
        ).parse(v), isNew: !0 }, j = new Jn(F, le);
        return j.createId(ie.value.length), ie.value.push(j), j;
      } catch (k) {
        return k instanceof qa && (console.error("Shape validation failed:", k.issues), q("part", "Invalid shape data", k.issues)), null;
      }
    }, r = function(v = {}) {
      try {
        const y = { ...Nn.parse(v), isNew: !0 }, F = new ha(y, le);
        return F.createId(se.value.length), se.value.push(F), F;
      } catch (k) {
        return k instanceof qa && (console.error("Stock validation failed:", k.issues), q("stock", "Invalid stock data", k.issues)), null;
      }
    }, c = function(v) {
      try {
        const k = v.toData(), y = Wn.parse(k);
        return new Jn(y, le);
      } catch (k) {
        return k instanceof qa && (console.error("Shape clone validation failed:", k.issues), q("part", "Invalid shape data during cloning", k.issues)), null;
      }
    }, f = function(v) {
      try {
        const k = v.toData(), y = Nn.parse(k);
        return new ha(y, le);
      } catch (k) {
        return k instanceof qa && (console.error("Stock clone validation failed:", k.issues), q("stock", "Invalid stock data during cloning", k.issues)), null;
      }
    }, m = function(v, k) {
      const y = ie.value.findIndex((ye) => ye.autoId === v);
      if (y === -1) return !1;
      const F = ie.value[y], j = { ...F.toData(), ...k }, fe = wa(Wn, j);
      if (fe.success && fe.data) {
        if (F.update(fe.data), !F.isNew) {
          const ye = Object.keys(k);
          F.validate({ fields: ye, index: y });
        }
        return !0;
      } else {
        const ye = fe.errors ? so(fe.errors) : [];
        console.error("Shape update validation failed:", ye);
        const Ve = fe.errors || [], Ee = Object.keys(k);
        for (let Ue = F.issues.length - 1; Ue >= 0; Ue--)
          F.issues[Ue].field.some((Et) => Ee.includes(Et[0])) && F.issues.splice(Ue, 1);
        for (const Ue of Ve) {
          const Et = Zi(Ue), xn = Array.isArray(Ue.path) ? Ue.path.map((ua) => String(ua)) : [];
          new Ct({
            item: F,
            category: ["part"],
            message: Ue.message,
            params: Et,
            field: xn.length > 0 ? [xn] : []
          });
        }
        return !1;
      }
    }, I = function(v, k) {
      const y = ie.value.findIndex((j) => j.autoId === v);
      if (y === -1) return !1;
      const F = ie.value[y];
      return F.validate({ fields: [k], index: y }), F.issues.length === 0;
    }, O = function(v, k) {
      const y = se.value.find((fe) => fe.autoId === v);
      if (!y) return !1;
      const F = { ...y.toData(), ...k }, j = wa(Nn, F);
      if (j.success && j.data)
        return y.update(j.data), y.isNew || G(), !0;
      {
        const fe = j.errors ? so(j.errors) : [];
        console.error("Stock update validation failed:", fe);
        const ye = j.errors || [], Ve = Object.keys(k);
        for (let Ee = y.issues.length - 1; Ee >= 0; Ee--)
          y.issues[Ee].field.some((Ue) => Ve.includes(Ue[0])) && y.issues.splice(Ee, 1);
        for (const Ee of ye) {
          const Ue = Zi(Ee), Et = Array.isArray(Ee.path) ? Ee.path.map((xn) => String(xn)) : [];
          new Ct({
            item: y,
            category: ["stock"],
            message: Ee.message,
            params: Ue,
            field: Et.length > 0 ? [Et] : []
          });
        }
        return tt(se), !1;
      }
    }, b = function(v, k) {
      const y = se.value.findIndex((j) => j.autoId === v);
      if (y === -1) return !1;
      const F = se.value[y];
      return F.validate({ fields: [k], index: y }), tt(se), F.issues.length === 0;
    }, _ = function(v) {
      if (ie.value.length === 1) return !1;
      const k = ie.value.findIndex((y) => y.autoId === v);
      return k === -1 ? !1 : (ie.value.splice(k, 1), !0);
    }, U = function(v) {
      if (se.value.length === 1) return !1;
      const k = se.value.findIndex((y) => y.autoId === v);
      return k === -1 ? !1 : (se.value.splice(k, 1), !0);
    }, me = function(v) {
      B.value = !0;
      const k = [];
      try {
        ie.value.forEach((y) => y.issues.length = 0);
        for (let y = 0; y < ie.value.length; y++) {
          const F = ie.value[y];
          if (F.isNew || F.multiEdit)
            continue;
          const j = F.validate({
            inputStockList: se.value,
            index: y,
            stockType: v?.stockType ?? null,
            partTrim: 0,
            useInventory: !1,
            saw: v
          });
          k.push(...j);
        }
        ie.value.some((y) => Number(y.q) > 0) || new Ct({
          category: ["part"],
          message: "errors.validation.no_parts",
          issues: k
        });
      } finally {
        B.value = !1;
      }
      return De.value = k, k;
    }, G = function(v) {
      B.value = !0;
      const k = [];
      try {
        se.value.forEach((y) => y.issues.length = 0);
        for (let y = 0; y < se.value.length; y++) {
          const F = se.value[y];
          if (F.multiEdit)
            continue;
          const j = F.validate({ saw: v }, y);
          k.push(...j);
        }
        se.value.some((y) => Number(y.q) > 0 || y.autoAdd) || new Ct({
          category: ["stock"],
          message: "errors.validation.no_stock",
          issues: k
        });
      } finally {
        B.value = !1;
      }
      return De.value = k, k;
    }, q = function(v, k, y) {
      new Ct({
        category: [v],
        message: k,
        issues: De.value
      }), y && console.log("Validation details:", y);
    }, ce = function() {
      De.value = [], ie.value.forEach((v) => v.issues.length = 0), se.value.forEach((v) => v.issues.length = 0);
    }, de = function(v = {}) {
      const k = [], y = [], F = v.inputShapesOverride ?? ie.value;
      if (!F.length)
        return { shapeList: [], issues: [] };
      for (let j = 0; j < F.length; j++) {
        const fe = F[j];
        if (!fe.q) continue;
        fe.createId(j), fe.applyPartTrim(v.trim, v.stockType);
        const ye = fe.toShape();
        k.push(ye), y.push(...ye.issues);
      }
      return { shapeList: k, issues: y };
    }, w = function(v) {
      if (!se.value.length)
        return { stockList: [], issues: [] };
      const k = [], y = [];
      for (let F = 0; F < se.value.length; F++) {
        const j = se.value[F];
        if (!j.q && !j.autoAdd) continue;
        j.createId(F), j.saw = v;
        const fe = j.toStock();
        k.push(fe), y.push(...fe.issues);
      }
      return { stockList: k, issues: y };
    }, M = function(v, k = le) {
      const y = {
        saw: { success: !1, failed: !1 },
        shapes: { success: 0, failed: 0 },
        stock: { success: 0, failed: 0 },
        groups: { success: 0, failed: 0 }
      };
      if (v.saw) {
        const F = wa(zn, n(v.saw));
        if (F.success && F.data) {
          const j = { ...F.data };
          v.saw?.autoId && (j.autoId = v.saw.autoId), We.value = new bn(j), y.saw.success = !0;
        } else
          console.error("Failed to parse input saw:", F.errors), y.saw.failed = !0;
      }
      if (v.shapes) {
        const F = t(v.shapes, k);
        y.shapes.success = F.length, y.shapes.failed = v.shapes.length - F.length, ie.value = F, De.value = De.value.filter(
          (j) => !j.category.includes("part")
        );
      }
      if (v.stock) {
        const F = a(v.stock, k);
        y.stock.success = F.length, y.stock.failed = v.stock.length - F.length, se.value = F, De.value = De.value.filter(
          (j) => !j.category.includes("stock")
        );
      }
      if (v.groups) {
        const F = s(v.groups);
        y.groups.success = F.length, y.groups.failed = v.groups.length - F.length, Xe.value = F;
      }
      return v.extrasOptions && (Ie.value = { ...v.extrasOptions }), v.materials && (Fe.value = v.materials.map((F) => ta.safeParse(F)).filter((F) => F.success).map((F) => F.data)), y;
    }, ne = function() {
      return {
        shapes: ie.value.map((v) => v.toData()),
        stock: se.value.map((v) => v.toData()),
        inputUserGroups: Xe.value.map((v) => v.toData()),
        extrasOptions: Ie.value,
        materials: Fe.value
      };
    }, oe = function() {
      ie.value = [], se.value = [], Xe.value = [], ce();
    }, R = function(v) {
      const k = { ...We.value.toData(), ...v }, y = wa(zn, k);
      return y.success && y.data ? (We.value.update(y.data), !0) : (console.error("InputSaw update validation failed:", y.errors), q("saw", "Invalid saw update", y.errors), !1);
    }, x = function() {
      We.value = new bn({});
    }, D = function() {
      const v = We.value.validate();
      return De.value = [...De.value.filter((k) => k.category?.[0] !== "saw"), ...v], v;
    };
    const { numberFormat: le = "decimal" } = e, ie = Un("inputs/inputShapes", [], {
      serializer: {
        read: (v) => {
          if (!v) return [];
          let k;
          try {
            k = JSON.parse(v);
          } catch (y) {
            return console.error("Failed to parse input shapes JSON:", y), [];
          }
          return t(k, le);
        },
        write: (v) => {
          const y = v.filter((j) => !j?.multiEdit).map((j) => j.toData());
          return JSON.stringify(y);
        }
      },
      listenToStorageChanges: !1
    }), se = Un("inputs/inputStock", [], {
      serializer: {
        read: (v) => {
          if (!v) return [];
          let k;
          try {
            k = JSON.parse(v);
          } catch (F) {
            return console.error("  Failed to parse stock JSON:", F), [];
          }
          return a(k, le);
        },
        write: (v) => {
          const y = v.filter((j) => !j?.multiEdit).map((j) => j.toData());
          return JSON.stringify(y);
        }
      },
      listenToStorageChanges: !1
    }), We = Un("inputs/inputSaw", new bn({}), {
      serializer: {
        read: (v) => {
          if (!v) return new bn({});
          try {
            const k = JSON.parse(v);
            return i(k);
          } catch (k) {
            return console.error("  Failed to parse saw JSON:", k), new bn({});
          }
        },
        write: (v) => {
          if (!v)
            return JSON.stringify({});
          const k = v.toData();
          return JSON.stringify(k);
        }
      },
      listenToStorageChanges: !1
    }), Xe = Un("inputs/inputUserGroups", [], {
      serializer: {
        read: (v) => s(v ? JSON.parse(v) : []),
        write: (v) => JSON.stringify(v.map((k) => k.toData()))
      }
    }), Ie = Un("inputs/extrasOptions", {
      banding: { options: [] },
      finish: { options: [] },
      planing: { options: [] }
    }, {
      serializer: {
        read: (v) => {
          if (!v) return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          try {
            return JSON.parse(v);
          } catch {
            return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          }
        },
        write: (v) => JSON.stringify(v)
      }
    }), Fe = Un("inputs/materials", [], {
      serializer: {
        read: (v) => {
          if (!v) return [];
          try {
            const k = JSON.parse(v);
            return Array.isArray(k) ? k.map((y) => ta.safeParse(y)).filter((y) => y.success).map((y) => y.data) : [];
          } catch (k) {
            return console.error("Failed to parse materials JSON:", k), [];
          }
        },
        write: (v) => JSON.stringify(v)
      },
      listenToStorageChanges: !1
    }), De = W([]), B = W(!1);
    ie.value.length === 0 && (ie.value = [new Jn({ isNew: !0 })]), se.value.length === 0 && (se.value = [new ha({ isNew: !0 })]);
    const J = A(() => ie.value.reduce((v, k) => {
      const y = Number(k?.q);
      return y && y > 0 && !k?.multiEdit ? v + y : v;
    }, 0)), ke = A(() => se.value.reduce((v, k) => {
      const y = Number(k?.q);
      return y && y > 0 && !k?.multiEdit ? v + y : v;
    }, 0)), Re = A(() => ie.value.reduce((v, k) => k?.multiEdit ? v : v + 1, 0)), ee = A(() => se.value.reduce((v, k) => k?.multiEdit ? v : v + 1, 0)), we = A(() => De.value.length > 0), _e = () => [
      {
        name: "banding",
        type: "object",
        label: "fields.banding",
        fieldMap: "banding",
        w: "32px",
        required: !1
      },
      {
        name: "finish",
        type: "object",
        label: "fields.finish",
        fieldMap: "finish",
        w: "32px",
        required: !1
      },
      {
        name: "planing",
        type: "object",
        label: "fields.planing",
        fieldMap: "planing",
        w: "32px",
        required: !1
      },
      {
        name: "machining",
        type: "object",
        label: "fields.machining",
        fieldMap: "machining",
        w: "32px",
        required: !1
      },
      {
        name: "dxfPreview",
        type: "object",
        label: "fields.dxfPreview",
        fieldMap: "dxfPreview",
        w: "80px",
        required: !1
      }
    ], kt = W(null), rt = W(null), Qt = () => {
      kt.value = null;
    }, ut = ce, on = (v = null) => {
      const k = (v?.inputShapesOverride ?? ie.value).filter((F) => !F.multiEdit), y = me(v?.saw || void 0);
      if (k.length) {
        Ar(k, se.value, v?.saw || We.value);
        const F = k.flatMap((j) => j.issues);
        return [...y, ...F];
      }
      return y;
    }, Yt = async (v, k = "decimal") => {
      const y = v?.inputSaw, F = v?.inputShapes, j = v?.inputStock, fe = v?.inputUserGroups, ye = M({
        saw: y,
        shapes: F,
        stock: j,
        groups: fe,
        materials: v?.materials
      }, k);
      return tt(ie), tt(se), await Mt(), ye;
    }, wn = (v, k = "decimal") => M({ shapes: v }, k).shapes.success > 0, ct = (v, k = "decimal") => M({ stock: v }, k).stock.success > 0, Y = (v, k, y, F, j) => {
      k[0]?.length > 0 && (Ie.value[v] || (Ie.value[v] = { options: [] }), Ie.value[v].options = [...k[0]]), y && F && k.length > 0 ? Hi(v, {
        options: k,
        // Use all columns extracted from pricing
        labels: y,
        pricing: F,
        displayNames: j
      }) : k.length > 0 && console.warn("[setExtrasOptionsFromPricing] Missing data for centralized config:", { labels: y, pricingData: F, pricingOptionsLength: k.length });
    }, Le = () => {
      if (!Object.values(Ie.value).some(
        (y) => y.options.length > 0
      )) return;
      const k = (y, F) => {
        const j = {};
        for (const fe of F)
          j[fe] = [...y];
        return j;
      };
      return {
        banding: Ie.value.banding.options.length > 0 ? {
          options: {
            sides: k(Ie.value.banding.options, ["l1", "l2", "w1", "w2"])
          }
        } : void 0,
        finish: Ie.value.finish.options.length > 0 ? {
          options: {
            faces: k(Ie.value.finish.options, ["a", "b"])
          }
        } : void 0,
        planing: Ie.value.planing.options.length > 0 ? {
          options: {
            sides: k(Ie.value.planing.options, ["l1", "l2", "w1", "w2"]),
            faces: k(Ie.value.planing.options, ["a", "b"])
          }
        } : void 0
      };
    }, ze = (v) => {
      if (!se.value.length) return "n";
      const k = v.material, y = v.t, F = se.value.filter((Ve) => Ve.material === k && Ve.t === y);
      if (!F.length)
        return "n";
      let j = !1, fe = !1, ye = !1;
      for (const Ve of F)
        Ve.grain === "l" ? (j = !0, fe = !0) : Ve.grain === "w" && (j = !0, ye = !0);
      return j ? fe && ye ? "y" : fe ? "l" : ye ? "w" : "n" : "n";
    }, Ae = ({ stock: v = !0, shapes: k = !0 } = {}) => {
      v && (se.value = [new ha({ l: 2440, w: 1220, q: 1 })]), k && (ie.value = [
        new Jn({ l: 500, w: 500, q: 1 }),
        new Jn({ l: 400, w: 400, q: 1 })
      ]);
    }, at = (v) => {
      for (const k of ie.value)
        Bs(k, v);
      for (const k of se.value)
        Bs(k, v);
    };
    let et = !1;
    Qe(ie, (v) => {
      et || !v.length || Mt(() => {
        const k = ["banding", "finish", "planing"], y = [];
        k.forEach((F) => {
          const j = /* @__PURE__ */ new Set();
          if (v.forEach((fe) => {
            const ye = fe.extras?.[F];
            ye && (ye.faces && Object.values(ye.faces).forEach((Ve) => {
              typeof Ve == "string" && Ve.trim() && Ve !== "Y" && j.add(Ve);
            }), ye.sides && Object.values(ye.sides).forEach((Ve) => {
              typeof Ve == "string" && Ve.trim() && Ve !== "Y" && j.add(Ve);
            }));
          }), j.size > 0) {
            const fe = dn(F);
            if (fe) {
              const ye = fe.options[0];
              if (Array.isArray(ye) && (ye.length === 0 || typeof ye[0] == "string")) {
                const Ve = new Set(ye), Ee = Array.from(j).filter((Ue) => !Ve.has(Ue));
                if (Ee.length > 0) {
                  const Ue = [...ye, ...Ee];
                  Hi(F, {
                    ...fe,
                    options: [Ue, ...fe.options.slice(1)]
                  });
                }
              }
            }
          }
        }), k.forEach((F) => {
          const j = Hu(F, v);
          j.cleanedCount > 0 && y.push(
            `${F}: ${j.invalidOptions.join(", ")}`
          );
        }), y.length > 0 && (console.warn(
          `Some extras options no longer exist and have been reset:
` + y.join(`
`)
        ), typeof window < "u" && window.alert && setTimeout(() => {
          alert(
            `Some extras options no longer exist and have been reset:
` + y.join(`
`)
          );
        }, 500)), et = !0;
      });
    }, { immediate: !0 });
    const dt = 6, ft = (v) => (v ?? "").trim().toUpperCase(), pt = (v) => {
      if (v?.materialId)
        return Fe.value.find((k) => k.id === v.materialId);
    }, pn = (v = {}) => {
      const k = ta.parse({
        id: js(),
        colorIndex: Fe.value.length % dt,
        ...v
      });
      return Fe.value = [...Fe.value, k], k;
    }, it = (v, k) => {
      for (const y of [...se.value, ...ie.value]) {
        if (y.materialId !== v) continue;
        const F = y.t;
        if (F == null || F === "") continue;
        const j = re({ v: F });
        j != null && k.some((fe) => Ra.equalTo(fe, j)) && (y.t = null);
      }
    }, ln = (v, k) => {
      for (const y of se.value)
        y.materialId === v && (y.grain = k);
    }, mn = (v, k) => {
      const y = Fe.value.findIndex((Ee) => Ee.id === v);
      if (y === -1) return;
      const F = Fe.value[y], j = ta.parse({ ...F, ...k, id: v }), fe = F.thicknesses.filter(
        (Ee) => !j.thicknesses.some((Ue) => Ra.equalTo(Ue, Ee))
      ), ye = F.grain !== j.grain, Ve = [...Fe.value];
      Ve[y] = j, Fe.value = Ve, fe.length && it(v, fe), ye && ln(v, j.grain), tt(se), tt(ie);
    }, St = (v) => {
      Fe.value = Fe.value.filter((k) => k.id !== v);
      for (const k of [...se.value, ...ie.value])
        k.materialId === v && (k.materialId = void 0, k.material = "", k.t = null);
      tt(se), tt(ie);
    }, gn = (v, k, y = {}) => {
      const F = new Set(y.stock ?? []), j = new Set(y.shapes ?? []), fe = v ? Fe.value.find((Ee) => Ee.id === v) : void 0, ye = (Ee) => {
        if (!fe) return null;
        if (k != null) return k;
        if (fe.thicknesses.length === 1) return fe.thicknesses[0];
        const Ue = Ee.t == null || Ee.t === "" ? null : re({ v: Ee.t });
        return Ue != null && fe.thicknesses.some((Et) => Ra.equalTo(Et, Ue)) ? Ue : null;
      }, Ve = (Ee, Ue) => {
        fe ? (Ee.materialId = fe.id, Ee.material = ft(fe.name), Ee.t = ye(Ee), Ue && (Ee.grain = fe.grain), Ee.isNew = !1) : (Ee.materialId = void 0, Ee.material = "", Ee.t = null);
      };
      for (const Ee of se.value) F.has(Ee.autoId) && Ve(Ee, !0);
      for (const Ee of ie.value) j.has(Ee.autoId) && Ve(Ee, !1);
      tt(se), tt(ie);
    }, Sn = (v) => {
      const k = ft(v), y = Fe.value.find((j) => ft(j.name) === k);
      if (y) return y;
      const F = ta.parse({
        id: js(),
        name: k,
        colorIndex: Fe.value.length % dt
      });
      return Fe.value = [...Fe.value, F], F;
    }, Kn = (v, k, y = !1) => {
      const F = y ? se : ie, j = F.value.find((fe) => fe.autoId === v);
      if (j) {
        if (!ft(k))
          j.materialId = void 0, j.material = "";
        else {
          const fe = Sn(k);
          j.materialId = fe.id, j.material = fe.name;
        }
        tt(F);
      }
    }, rn = () => {
      const v = [...se.value, ...ie.value].filter((F) => !F.multiEdit);
      let k = 0, y = 0;
      for (const F of v) {
        const j = ft(F.material);
        if (!j) continue;
        const fe = Fe.value.length, ye = Sn(j);
        Fe.value.length !== fe && k++;
        const Ve = F.t, Ee = Ve == null || Ve === "" ? null : re({ v: Ve });
        Ee != null && Ee > 0 && Number.isFinite(Ee) && !ye.thicknesses.some((Ue) => Ra.equalTo(Ue, Ee)) && (ye.thicknesses = [...ye.thicknesses, Ee].sort((Ue, Et) => Ue - Et)), F.materialId !== ye.id && (F.materialId = ye.id, y++), F.material = ye.name;
      }
      return tt(Fe), tt(se), tt(ie), { created: k, mapped: y };
    };
    let mt = !1;
    Qe(
      [Fe, se, ie],
      () => {
        if (!mt) {
          mt = !0;
          try {
            const v = new Map(Fe.value.map((y) => [y.id, y]));
            let k = !1;
            for (const y of [...se.value, ...ie.value]) {
              if (!y.materialId) continue;
              const F = v.get(y.materialId);
              if (!F) {
                y.materialId = void 0, k = !0;
                continue;
              }
              const j = ft(F.name);
              y.material !== j && (y.material = j, k = !0);
            }
            k && (tt(se), tt(ie));
          } finally {
            mt = !1;
          }
        }
      },
      { deep: !0 }
    ), Qe(
      [se, ie],
      () => {
        if (mt) return;
        [...se.value, ...ie.value].some(
          (k) => !k.multiEdit && ft(k.material) && !k.materialId
        ) && rn();
      },
      { deep: !0, immediate: !0 }
    );
    let Dt = null;
    return {
      // Bundled object
      inputs: {
        inputStock: se,
        inputShapes: ie,
        inputUserGroups: Xe,
        currentInputShape: kt,
        selectedSaw: rt,
        inputSaw: We,
        materials: Fe
      },
      // State
      inputShapes: ie,
      inputStock: se,
      inputUserGroups: Xe,
      inputSaw: We,
      currentInputShape: kt,
      selectedSaw: rt,
      validationIssues: De,
      isValidating: B,
      // Computed
      totalInputShapes: J,
      totalInputStock: ke,
      totalInputShapeLines: Re,
      totalInputStockLines: ee,
      hasValidationIssues: we,
      // Actions
      addInputShape: u,
      addInputStock: r,
      cloneInputShape: c,
      cloneInputStock: f,
      updateInputShape: m,
      updateInputStock: O,
      updateInputSaw: R,
      removeInputShape: _,
      removeInputStock: U,
      reset: Qt,
      resetInputSaw: x,
      clear: oe,
      clearIssues: ut,
      // Validation
      validateInputShapes: on,
      validateInputShapeField: I,
      validateInputStock: G,
      validateInputStockField: b,
      validateInputSaw: D,
      clearValidationIssues: ce,
      // Conversion
      createShapeList: de,
      createStockList: w,
      // Import/Export/Update
      importData: M,
      exportData: ne,
      updateInputs: Yt,
      importInputShapes: wn,
      importInputStock: ct,
      // Additional functions
      getShapeGrainSummary: ze,
      updateNumberFormat: at,
      createTestData: Ae,
      getSpecialShapeFields: _e,
      // Extras Options Management
      extrasOptions: Ie,
      setExtrasOptionsFromPricing: Y,
      getCentralizedOptions: Le,
      // Materials list (CLE)
      materials: Fe,
      addMaterial: pn,
      updateMaterial: mn,
      removeMaterial: St,
      assignMaterialToRows: gn,
      linkRowMaterialByName: Kn,
      generateMaterialsFromInputs: rn,
      materialFor: pt,
      materialColorHex: Vu,
      // Show part
      showPart: (v) => {
        Dt && Dt(v);
      },
      registerShowPart: (v) => {
        Dt = v;
      }
    };
  } catch (n) {
    throw console.error("[createInputs] Fatal error during initialization:", n), n;
  }
}
let Di = null;
function Uo(e = { numberFormat: "decimal" }) {
  try {
    return Di || (Di = Yu(e)), Di;
  } catch (n) {
    throw console.error("[useInputs] FATAL ERROR in useInputs:", n), console.error("[useInputs] Error stack:", n?.stack), n;
  }
}
const Go = {
  y1: "l1",
  y2: "l2",
  x1: "w1",
  x2: "w2"
}, Xu = {
  l1: "y1",
  l2: "y2",
  w1: "x1",
  w2: "x2"
};
function Ji(e = !1) {
  return {
    l1: e,
    l2: e,
    w1: e,
    w2: e
  };
}
function ec(e = !1) {
  return {
    x1: e,
    x2: e,
    y1: e,
    y2: e
  };
}
function ti(e = !1) {
  return {
    a: e,
    b: e
  };
}
function tc(e = !1) {
  return {
    sides: Ji(e),
    faces: ti(e)
  };
}
function nc(e = !1) {
  return {
    x1: e,
    x2: e,
    y1: e,
    y2: e,
    a: e,
    b: e
  };
}
function ac(e) {
  const n = {};
  for (const [t, a] of Object.entries(Go))
    t in e && (n[a] = e[t]);
  return n;
}
function ic(e) {
  const n = {};
  for (const [t, a] of Object.entries(Xu))
    t in e && (n[a] = e[t]);
  return n;
}
class oo {
  /**
   * Migrate a single shape from old structure to new structure
   */
  static migrateShape(n) {
    this.migrateBanding(n), this.migrateFinish(n), this.migrateStorageFormat(n);
  }
  /**
   * Migrate multiple shapes at once
   */
  static migrateShapes(n) {
    n.forEach((t) => {
      const a = Object.keys(t);
      this.migrateShape(t);
      const i = Object.keys(t);
      a.length, i.length;
    });
  }
  /**
   * Migrate old side format (x1/x2/y1/y2) to new format (l1/l2/w1/w2).
   * Direction is the canonical SideMapper map (x1→w1, y1→l1) — the legacy
   * API x-axis is the WIDTH side. (This previously inverted it to x1→l1,
   * putting banding on the wrong edge — a real bug, not just duplication.)
   */
  static migrateSideNames(n) {
    const t = {};
    for (const [a, i] of Object.entries(n)) {
      const s = Go[a] ?? a;
      t[s] = i;
    }
    return t;
  }
  /**
   * Migrate banding from flat to nested structure
   * Also handles migration from old side names (x1/x2/y1/y2) to new names (l1/l2/w1/w2)
   */
  static migrateBanding(n) {
    const t = n.banding, a = "_banding" in n ? n._banding : void 0, i = Ye(n) ? n.bandingOptions : void 0;
    if (!t && !a && !i) return !1;
    if (t && t instanceof va) {
      const m = t.sides;
      if (m && typeof m == "object" && ("x1" in m || "x2" in m || "y1" in m || "y2" in m)) {
        const O = this.migrateSideNames(m);
        return t.sides = O, !0;
      }
      return !1;
    }
    const s = {}, u = {}, r = { sides: {} };
    if (t && typeof t == "object") {
      const m = this.migrateSideNames(t);
      for (const [I, O] of Object.entries(m))
        ba.includes(I) && (s[I] = O);
    }
    if (a && typeof a == "object") {
      const m = this.migrateSideNames(a);
      for (const [I, O] of Object.entries(m))
        ba.includes(I) && (u[I] = O);
    }
    if (i && typeof i == "object") {
      i.all && (r.sides.all = i.all);
      for (const [m, I] of Object.entries(i))
        m !== "all" && ba.includes(m) && I && (r.sides[m] = I);
    }
    const c = new va(Object.keys(s).length > 0 ? { sides: s } : {}), f = Object.keys(u).length > 0 ? new va({ sides: u }) : void 0;
    return "extras" in n && n.extras ? n.extras.banding = c : Ye(n) && (n.banding = c), f && "_banding" in n && (n._banding = f), Ye(n) && i && (n.bandingOptions = r), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(n) {
    const t = n.finish, a = "_finish" in n ? n._finish : void 0, i = Ye(n) ? n.finishOptions : void 0;
    if (!t && !a && !i || t && t instanceof ya)
      return !1;
    const s = {}, u = {}, r = { faces: {} };
    if (t && typeof t == "object")
      for (const [m, I] of Object.entries(t))
        ka.includes(m) && (s[m] = I);
    if (a && typeof a == "object")
      for (const [m, I] of Object.entries(a))
        ka.includes(m) && (u[m] = I);
    if (i && typeof i == "object") {
      i.all && (r.faces.all = i.all);
      for (const [m, I] of Object.entries(i))
        m !== "all" && ka.includes(m) && I && (r.faces[m] = I);
    }
    const c = new ya(Object.keys(s).length > 0 ? { faces: s } : {}), f = Object.keys(u).length > 0 ? new ya({ faces: u }) : void 0;
    return "extras" in n && n.extras ? n.extras.finish = c : Ye(n) && (n.finish = c), f && "_finish" in n && (n._finish = f), Ye(n) && i && (n.finishOptions = r), !0;
  }
  /**
   * Migrate storage format: Convert boolean true to option name strings in multi-column configs
   * This handles legacy data where single-option checkboxes stored boolean true instead of the option name
   */
  static migrateStorageFormat(n) {
    let t = !1;
    const a = "extras" in n && n.extras ? n.extras : n;
    if (a.banding) {
      const i = Us("banding");
      if (i && i.labels && i.labels.length > 1)
        for (const s of ba) {
          const u = `side.${s}`, r = ji(n, "banding", u);
          if (r && typeof r == "object" && !Array.isArray(r)) {
            let c = !1;
            const f = { ...r };
            for (const m of i.labels)
              if (f[m] === !0) {
                const O = i.labels.indexOf(m);
                if (O !== -1 && i.options[O] && Array.isArray(i.options[O])) {
                  const b = i.options[O];
                  b.length === 1 && (f[m] = b[0], c = !0);
                }
              }
            c && (Gs(n, "banding", u, f), t = !0);
          }
        }
    }
    if (a.finish) {
      const i = Us("finish");
      if (i && i.labels && i.labels.length > 1)
        for (const s of ka) {
          const u = `face.${s}`, r = ji(n, "finish", u);
          if (r && typeof r == "object" && !Array.isArray(r)) {
            let c = !1;
            const f = { ...r };
            for (const m of i.labels)
              if (f[m] === !0) {
                const O = i.labels.indexOf(m);
                if (O !== -1 && i.options[O] && Array.isArray(i.options[O])) {
                  const b = i.options[O];
                  b.length === 1 && (f[m] = b[0], c = !0);
                }
              }
            c && (Gs(n, "finish", u, f), t = !0);
          }
        }
    }
    return t;
  }
  /**
   * Check if shape needs migration (has old structure)
   */
  static needsMigration(n) {
    const t = n.banding;
    if (t && typeof t == "object" && !(t instanceof va) && !("sides" in t) && !("faces" in t))
      return !0;
    if ("_banding" in n) {
      const i = n._banding;
      if (i && typeof i == "object" && !(i instanceof va) && !("sides" in i) && !("faces" in i))
        return !0;
    }
    const a = n.finish;
    if (a && typeof a == "object" && !(a instanceof ya) && !("sides" in a) && !("faces" in a))
      return !0;
    if ("_finish" in n) {
      const i = n._finish;
      if (i && typeof i == "object" && !(i instanceof ya) && !("sides" in i) && !("faces" in i))
        return !0;
    }
    return !1;
  }
  /**
   * Validate that migrated data is in correct new format
   */
  static validateMigratedShape(n) {
    try {
      const t = n.banding;
      if (t) {
        if ("faces" in t && t.faces)
          throw new Error("Banding should not have faces property");
        if ("sides" in t && t.sides) {
          const i = Object.keys(t.sides).filter((s) => !ba.includes(s));
          if (i.length > 0)
            throw new Error(`Invalid side keys in banding: ${i.join(", ")}`);
        }
      }
      const a = n.finish;
      if (a) {
        if ("sides" in a && a.sides)
          throw new Error("Finish should not have sides property");
        if ("faces" in a && a.faces) {
          const i = Object.keys(a.faces).filter((s) => !ka.includes(s));
          if (i.length > 0)
            throw new Error(`Invalid face keys in finish: ${i.join(", ")}`);
        }
      }
      return !0;
    } catch {
      return !1;
    }
  }
  /**
   * Get migration summary
   */
  static getMigrationSummary(n) {
    const t = {
      totalShapes: n.length,
      shapesNeedingMigration: 0,
      shapesWithBanding: 0,
      shapesWithFinish: 0,
      shapesAlreadyMigrated: 0
    };
    return n.forEach((a) => {
      this.needsMigration(a) ? t.shapesNeedingMigration++ : (a.banding || a.finish) && t.shapesAlreadyMigrated++, a.banding && t.shapesWithBanding++, a.finish && t.shapesWithFinish++;
    }), t;
  }
  /**
   * Create backup of shape before migration
   */
  static createBackup(n) {
    const t = {
      banding: n.banding ? JSON.parse(JSON.stringify(n.banding)) : void 0,
      finish: n.finish ? JSON.parse(JSON.stringify(n.finish)) : void 0
    };
    return "_banding" in n && n._banding && (t._banding = JSON.parse(JSON.stringify(n._banding))), "_finish" in n && n._finish && (t._finish = JSON.parse(JSON.stringify(n._finish))), Ye(n) && (n.bandingOptions && (t.bandingOptions = JSON.parse(JSON.stringify(n.bandingOptions))), n.finishOptions && (t.finishOptions = JSON.parse(JSON.stringify(n.finishOptions)))), t;
  }
  /**
   * Restore shape from backup
   */
  static restoreFromBackup(n, t) {
    "extras" in n && n.extras ? (t.banding && (n.extras.banding = t.banding), t.finish && (n.extras.finish = t.finish)) : Ye(n) && (t.banding && (n.banding = t.banding), t.finish && (n.finish = t.finish)), t._banding && "_banding" in n && (n._banding = t._banding), t._finish && "_finish" in n && (n._finish = t._finish), Ye(n) && (t.bandingOptions && (n.bandingOptions = t.bandingOptions), t.finishOptions && (n.finishOptions = t.finishOptions));
  }
}
function Ut(e) {
  return e === 1 ? !0 : e === 0 ? !1 : e;
}
function yn(e) {
  if (!e) return e;
  const n = "x1" in e || "x2" in e || "y1" in e || "y2" in e, t = "l1" in e || "l2" in e || "w1" in e || "w2" in e;
  if (n && t && console.warn("Mixed side format detected in data - using old format (x/y) and ignoring new format (l/w)", e), n) {
    const i = ac(e), s = {};
    return "l1" in i && (s.l1 = Ut(i.l1)), "l2" in i && (s.l2 = Ut(i.l2)), "w1" in i && (s.w1 = Ut(i.w1)), "w2" in i && (s.w2 = Ut(i.w2)), s;
  }
  const a = {};
  return "l1" in e && (a.l1 = Ut(e.l1)), "l2" in e && (a.l2 = Ut(e.l2)), "w1" in e && (a.w1 = Ut(e.w1)), "w2" in e && (a.w2 = Ut(e.w2)), Object.keys(a).length > 0 ? a : e;
}
function sc(e) {
  return !e || typeof e != "string" ? e : {
    "side.x1": "side.w1",
    "side.x2": "side.w2",
    "side.y1": "side.l1",
    "side.y2": "side.l2"
  }[e] || e;
}
function Qn(e) {
  return !e || !Array.isArray(e) ? e : e.map(sc);
}
function oc(e) {
  const n = {};
  if (e.banding && typeof e.banding == "object")
    for (const [t, a] of Object.entries(e.banding))
      a === !0 || a === !1 ? n[t] = a : typeof a == "number" ? n[t] = Ut(a) : typeof a == "string" && a.length > 0 && (n[t] = a);
  if (e.bandingType && typeof e.bandingType == "object")
    for (const [t, a] of Object.entries(e.bandingType))
      if (e.banding) {
        const i = n[t];
        (i === !0 || typeof i == "string" && i.length > 0) && (typeof a == "string" && a.length > 0 ? n[t] = a : typeof a == "number" && a !== 0 && (n[t] = String(a)));
      } else
        typeof a == "string" && a.length > 0 ? n[t] = a : typeof a == "number" && a !== 0 && (n[t] = String(a));
  return Object.keys(n).length > 0 ? n : void 0;
}
function Qi(e) {
  return e && ic(e);
}
function lc(e) {
  e?.type && delete e.type, rc.call(this, e), uc.call(this, e), cc.call(this, e), e.shapes && Array.isArray(e.shapes) && e.shapes.forEach((n) => Yi(n));
}
function rc(e) {
  if (!e?.banding || typeof e.banding != "object") return;
  const n = Object.keys(e.banding);
  if (!n.length) return;
  const t = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  n.every((a) => t.includes(a)) || (e.banding = {
    labels: Object.keys(e.banding),
    pricing: e.bandingPricing || {}
  }, e.bandingPricing && delete e.bandingPricing);
}
function uc(e) {
  if (!e?.finish || typeof e.finish != "object") return;
  const n = Object.keys(e.finish);
  if (!n.length) return;
  const t = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  n.every((a) => t.includes(a)) || (e.finish = {
    labels: Object.keys(e.finish),
    pricing: e.finishPricing || {}
  }, e.finishPricing && delete e.finishPricing);
}
function cc(e) {
  if (!e?.planing || typeof e.planing != "object") return;
  const n = Object.keys(e.planing);
  if (!n.length) return;
  const t = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  n.every((a) => t.includes(a)) || (e.planing = {
    labels: Object.keys(e.planing),
    pricing: e.planingPricing || {}
  }, e.planingPricing && delete e.planingPricing);
}
function Yi(e) {
  !e || typeof e != "object" || (oo.needsMigration(e) && oo.migrateShape(e), e._banding && delete e._banding, e._finish && delete e._finish, e._bandingType && delete e._bandingType);
}
function Wo(e) {
  if (e?.enable) return;
  e.enable = {};
  const n = {
    // Existing mappings
    showDiagram: { new: "diagram", map: "equal" },
    enableFocus: { new: "focus", map: "equal" },
    enableMachining: { new: "machining", map: "equal" },
    enableCSVImport: { new: "csvImport", map: "equal" },
    showProgressNumber: { new: "progressNumber", map: "equal" },
    // Extras mappings
    disableBanding: { new: "banding", map: "reverse" },
    disableFinish: { new: "finish", map: "reverse" },
    disablePlaning: { new: "planing", map: "reverse" },
    // NEW
    disableInfo: { new: "info", map: "reverse" },
    // NEW
    disableImageUpload: { new: "imageUpload", map: "reverse" },
    // NEW
    // Other mappings
    disableOrientation: { new: "orientation", map: "reverse" },
    disableClick: { new: "click", map: "reverse" },
    disablePartName: { new: "partName", map: "reverse" }
  };
  for (const t of Object.keys(n))
    if (t in e) {
      const a = n[t];
      e.enable[a.new] = a.map === "reverse" ? !e[t] : e[t], delete e[t];
    }
}
function Wg(e) {
  if (!(!e || typeof e != "object")) {
    if (lc(e), e.parts && Array.isArray(e.parts) && (e.parts = e.parts.map((n) => (n.extras?.banding?.sides && (n.extras.banding.sides = yn(n.extras.banding.sides)), n.extras?.finish?.sides && (n.extras.finish.sides = yn(n.extras.finish.sides)), n.extras?.planing?.sides && (n.extras.planing.sides = yn(n.extras.planing.sides)), n))), e.stock && Array.isArray(e.stock) && (e.stock = e.stock.map((n) => n?.trim ? {
      ...n,
      trim: yn(n.trim)
    } : n)), e.options) {
      if (Wo(e.options), e.options.bandingLocations && (e.options.bandingLocations = Qn(e.options.bandingLocations)), e.options.finishLocations && (e.options.finishLocations = Qn(e.options.finishLocations)), e.options.planingLocations && (e.options.planingLocations = Qn(e.options.planingLocations)), e.options.extrasLocationGroups)
        for (const n of ["banding", "finish", "planing"]) {
          const t = e.options.extrasLocationGroups[n];
          t && Array.isArray(t) && t.forEach((a) => {
            a.locations && (a.locations = Qn(a.locations));
          });
        }
      if (!e.saw) {
        const n = {}, t = ["bladeWidth", "cutType", "cutPreference", "guillotineOptions", "stackHeight", "stockType"];
        for (const a of t)
          a in e.options && (n[a] = e.options[a], delete e.options[a]);
        Object.keys(n).length > 0 && (console.log("[migrateLegacyData] Migrating saw properties from options to saw:", n), e.saw = n);
      }
    }
    for (const n of ["banding", "finish", "planing"])
      if (e[n]) {
        const t = e[n];
        t.locations && Array.isArray(t.locations) && (t.locations = Qn(t.locations)), t.groups && Array.isArray(t.groups) && t.groups.forEach((a) => {
          a.locations && (a.locations = Qn(a.locations));
        });
      }
    if (e.saw?.cutPreference && ["efficiency", "length", "width", "beam"].includes(e.saw.cutPreference)) {
      const a = {
        efficiency: { cutType: "guillotine", cutPreference: null },
        length: { cutType: "guillotine", cutPreference: "l" },
        width: { cutType: "guillotine", cutPreference: "w" },
        beam: { cutType: "beam", cutPreference: "l" }
      }[e.saw.cutPreference];
      a && (e.saw.cutType = a.cutType, e.saw.cutPreference = a.cutPreference);
    }
    e.shapes && Array.isArray(e.shapes) && e.shapes.forEach((n) => Yi(n)), (e.l !== void 0 || e.w !== void 0 || e.banding !== void 0) && Yi(e);
  }
}
function dc(e) {
  if (!e || typeof e != "object")
    return e;
  const n = { ...e };
  return n.saw && (n.saw = fc(n.saw)), Array.isArray(n.stock) && (n.stock = n.stock.map(pc)), Array.isArray(n.parts) && (n.parts = n.parts.map(mc)), n;
}
function fc(e) {
  const n = { ...e };
  if (n.guillotineOptions && (n.guillotineOptions = { ...n.guillotineOptions }, n.guillotineOptions.strategy === "stock" && (n.guillotineOptions.strategy = "efficiency")), n.efficiencyOptions) {
    n.efficiencyOptions = { ...n.efficiencyOptions };
    const t = n.efficiencyOptions.primaryCompression;
    t === "x" ? n.efficiencyOptions.primaryCompression = "l" : t === "y" && (n.efficiencyOptions.primaryCompression = "w");
  }
  return n.bladeWidth !== void 0 && (n.bladeWidth = Number(n.bladeWidth)), n.stackHeight !== void 0 && (n.stackHeight = Number(n.stackHeight)), n.cutPreference === "flex" ? n.cutPreference = "l" : n.cutPreference === "" && (n.cutPreference = void 0), (n.cutPreference === null || n.cutPreference === void 0) && (n.cutType === "guillotine" || n.cutType === "beam") && (n.cutPreference = "l"), n;
}
function pc(e) {
  const n = { ...e };
  return delete n.numberFormatKeys, delete n.issues, delete n.warnings, n.trim && (n.trim = yn(n.trim)), n.l !== void 0 && (n.l = Number(n.l)), n.w !== void 0 && (n.w = Number(n.w)), n.t !== void 0 && (n.t = Number(n.t)), n.q !== void 0 && (n.q = Number(n.q)), n.cost !== void 0 && (n.cost = Number(n.cost)), n;
}
function mc(e) {
  const n = { ...e };
  if (delete n.numberFormatKeys, delete n.issues, delete n.warnings, n.banding || n.bandingType) {
    const t = oc(n);
    t && Object.keys(t).length > 0 && (n.extras || (n.extras = {}), n.extras.banding || (n.extras.banding = {}), n.extras.banding.sides = yn(t)), delete n.banding, delete n.bandingType;
  }
  if (n.extras?.banding?.sides && (n.extras = { ...n.extras }, n.extras.banding = { ...n.extras.banding }, n.extras.banding.sides = yn(n.extras.banding.sides)), n.finish && !n.extras?.finish) {
    if (n.extras || (n.extras = {}), n.extras.finish || (n.extras.finish = {}), n.finish.a !== void 0 || n.finish.b !== void 0) {
      const t = {};
      "a" in n.finish && (t.a = Ut(n.finish.a)), "b" in n.finish && (t.b = Ut(n.finish.b)), n.extras.finish.faces = t;
    } else
      n.extras.finish.sides = yn(n.finish);
    delete n.finish;
  }
  if (n.extras?.finish?.sides && (n.extras = { ...n.extras }, n.extras.finish = { ...n.extras.finish }, n.extras.finish.sides = yn(n.extras.finish.sides)), n.extras?.finish?.faces) {
    n.extras = { ...n.extras }, n.extras.finish = { ...n.extras.finish };
    const t = n.extras.finish.faces;
    "a" in t && (t.a = Ut(t.a)), "b" in t && (t.b = Ut(t.b));
  }
  return n.l !== void 0 && (n.l = Number(n.l)), n.w !== void 0 && (n.w = Number(n.w)), n.t !== void 0 && (n.t = Number(n.t)), n.q !== void 0 && (n.q = Number(n.q)), n;
}
function Jt(e) {
  if (!e || typeof e != "object") return e;
  if (Array.isArray(e)) return e.map(Jt);
  const n = {};
  for (const [t, a] of Object.entries(e))
    t === "__entityType" || t === "autoId" || (n[t] = Jt(a));
  return n;
}
function ni(e) {
  if (!e || typeof e != "object") return null;
  if (Array.isArray(e)) return e.map(ni);
  const n = {};
  for (const [t, a] of Object.entries(e))
    t === "__entityType" || t === "autoId" || t === "enabled" || t === "type" || t === "issues" || t === "warnings" || (n[t] = a && typeof a == "object" ? ni(a) : a);
  return Object.keys(n).length > 0 ? n : null;
}
function zo(e) {
  if (!e) return null;
  const {
    enabled: n,
    __entityType: t,
    autoId: a,
    issues: i,
    warnings: s,
    ...u
  } = e;
  return Jt(u);
}
function gc(e) {
  return e ? typeof e == "string" ? e : e.id ? e.id : e.autoId ? e.autoId : "" : "";
}
function hc(e) {
  return e.rot !== void 0 ? e.rot ? 1 : 0 : e.rotated !== void 0 ? e.rotated ? 1 : 0 : e.isRotated !== void 0 ? e.isRotated ? 1 : 0 : e.w > e.l ? 1 : 0;
}
$({
  // Job metadata
  jobId: S().describe("Job identifier"),
  // Input configuration (preserved)
  saw: zn.describe("Saw configuration used"),
  // Result data (internal format - l1/l2/w1/w2)
  // Using actual schemas to strip internal-only fields
  stock: te(Nr).describe("Stock items"),
  parts: te(Ws).describe("Parts with coordinates and properties"),
  cuts: te(Fr).optional().describe("Cut instructions"),
  offcuts: te(Tr).optional().describe("Remaining offcut pieces"),
  unusableParts: te(Ws).optional().describe("Parts that could not be placed"),
  // Complete metadata (ALL internal analysis fields)
  metadata: jo.describe("Complete analysis and metrics")
});
$({
  saw: zn.describe("Saw configuration"),
  stock: te(Nn).describe("Stock items"),
  parts: te(Wn).describe("Parts to cut"),
  groups: te($r).optional().describe("User-defined part groups with XY positions"),
  webhook: d().url().optional().describe("Webhook URL for async result delivery"),
  // Job-level label-printer fields (distinct from /v3/labels printable PDFs).
  // `customer` maps to PTX JOBS.CUSTOMER. Mismatches with the chosen saw's
  // format(s) surface as warnings, not request failures.
  labels: $({
    customer: d().max(100).optional().describe("Customer name printed on saw labels (PTX JOBS.CUSTOMER)")
  }).optional().describe("Job-level fields fed to the saw label printer")
});
$({
  error: d().describe("Error message"),
  details: Ys().optional().describe("Detailed error information (Zod validation errors, etc.)"),
  version: yt("V3").describe("API version"),
  help: d().optional().describe("Helpful migration guidance"),
  example: Ys().optional().describe("Example of correct format"),
  docs: d().url().optional().describe("Link to V3 documentation")
});
function vc(e) {
  if (!e) return null;
  const {
    fitsAll: n,
    fitsAny: t,
    largestShape: a,
    smallestShape: i,
    ...s
  } = e;
  return Jt(s);
}
function bc(e) {
  return e ? {
    id: e.id,
    name: e.name,
    l: e.l,
    w: e.w,
    t: e.t,
    material: e.material,
    grain: e.grain ?? null,
    type: e.type ?? "sheet",
    used: e.used ?? !1,
    trim: Jt(e.trim),
    cost: e.cost ?? 0,
    notes: e.notes ?? "",
    code: e.code,
    analysis: vc(e.analysis),
    stack: e.stack?.number ?? 1,
    customData: Jt(e.customData)
  } : null;
}
function yc(e, n) {
  if (!e) return null;
  let t = null;
  const a = gc(e.stock);
  if (a && n) {
    const s = n.get(a);
    s && (t = { ...s });
  } else a && (t = { id: a });
  const i = {
    id: e.id,
    name: e.name,
    l: e.l,
    w: e.w,
    t: e.t,
    material: e.material ?? "",
    x: e.x,
    y: e.y,
    rot: hc(e),
    added: e.added ?? !1,
    notes: e.notes ?? "",
    code: e.code,
    stock: t,
    trim: Jt(e.trim),
    extras: ni(e.extras),
    customData: Jt(e.customData)
  };
  return e.machining && (i.machining = zo(e.machining)), i;
}
function kc(e) {
  if (!e) return null;
  const n = {
    id: e.id,
    name: e.name,
    l: e.l,
    w: e.w,
    t: e.t,
    material: e.material ?? "",
    notes: e.notes ?? "",
    trim: Jt(e.trim),
    extras: ni(e.extras),
    customData: Jt(e.customData)
  };
  return e.machining && (n.machining = zo(e.machining)), e.issues && Array.isArray(e.issues) && e.issues.length > 0 ? n.issues = e.issues.map((t) => ({
    message: $o(t.message) || t.message,
    type: t.type,
    category: t.category,
    field: t.field
  })) : n.issues = [], n;
}
function wc(e) {
  return e ? {
    x1: e.x1,
    x2: e.x2,
    y1: e.y1,
    y2: e.y2,
    dimension: e.dimension,
    position: e.position,
    isTrim: e.isTrim ?? !1,
    order: e.order ?? null,
    stock: e.stock ? { id: e.stock.id || e.stock.autoId } : null
  } : null;
}
function Sc(e) {
  return e ? {
    id: e.id,
    l: e.l,
    w: e.w,
    t: e.t,
    x: e.x,
    y: e.y,
    q: e.q ?? 1,
    material: e.material,
    grain: e.grain ?? null,
    stock: e.stock ? { id: e.stock.id || e.stock.autoId } : null
  } : null;
}
function xc(e) {
  const n = e.stockList || e.stock || [], t = /* @__PURE__ */ new Map();
  for (const f of n) {
    const m = { id: f.id || "" };
    f.code && (m.code = f.code), f.id && t.set(f.id, m), f.autoId && f.autoId !== f.id && t.set(f.autoId, m);
  }
  const a = n.map(bc), i = (e.shapeList || e.parts || []).map((f) => yc(f, t)), s = (e.unusableShapes || []).map(kc), u = (e.cutList || e.cuts || []).map(wc), r = (e.offcuts || []).map(Sc);
  return {
    jobId: e.jobId,
    saw: Jt(e.saw),
    stock: a,
    parts: i,
    cuts: u,
    offcuts: r,
    unusableParts: s,
    metadata: Jt(e.metadata)
  };
}
const lo = (e) => e == null || e === !1;
function Ic(e, n, t) {
  if (n > 0 && lo(t[n - 1]))
    return [];
  const a = /* @__PURE__ */ new Set();
  for (const i of e) {
    if (i.length <= n)
      continue;
    let s = !0;
    for (let u = 0; u < n; u++) {
      const r = t[u];
      if (!lo(r) && i[u] !== r) {
        s = !1;
        break;
      }
    }
    s && a.add(i[n]);
  }
  return [...a];
}
class En extends Error {
  code;
  constructor(n, t) {
    super(n), this.code = t, this.name = "FormulaError";
  }
}
class ri {
  url;
  spec;
  // private formulaCache: FormulaCache = new Map();
  // Update the evaluate method to use the type guard
  evaluate(n, t = {}) {
    if (typeof n == "number" || typeof n == "boolean")
      return n;
    if (typeof n == "string") {
      if (this.isStringLiteral(n))
        return n.slice(1, -1);
      if (n.includes("."))
        return this.resolveNestedVariable(n, t);
      if (!(n in t))
        throw new Error(`Undefined variable: ${n}`);
      return t[n];
    }
    const { operation: a, operands: i } = n;
    if (!a)
      throw new Error("Invalid formula structure");
    if (!this.isFormulaOperation(a))
      throw new Error(`Invalid operation: ${a}`);
    if (a === "ternary")
      return this.evaluate(n.condition, t) ? this.evaluate(n.trueExpr, t) : this.evaluate(n.falseExpr, t);
    if (a === "!") {
      if (!i || !Array.isArray(i) || i.length !== 1)
        throw new Error("Invalid unary NOT expression");
      return !this.evaluate(i[0], t);
    }
    if (!i || !Array.isArray(i) || i.length !== 2)
      throw new Error("Invalid formula structure");
    if (a === "&&") {
      const r = this.evaluate(i[0], t);
      return r && this.evaluate(i[1], t);
    }
    if (a === "||") {
      const r = this.evaluate(i[0], t);
      return r || this.evaluate(i[1], t);
    }
    const [s, u] = i.map((r) => this.evaluate(r, t));
    return [">", "<", ">=", "<=", "==", "!="].includes(a) ? this.evaluateComparison(a, s, u) : this.operations[a](s, u);
  }
  /**
   * Resolve nested variable access via dot-notation
   * e.g., "extras.banding.sides.l1" -> variables.extras.banding.sides.l1
   */
  resolveNestedVariable(n, t) {
    const a = n.split(".");
    let i = t;
    for (const s of a) {
      if (i == null)
        return;
      if (typeof i != "object" || !(s in i)) {
        if (n in t)
          return t[n];
        throw new Error(`Undefined variable: ${n}`);
      }
      i = i[s];
    }
    return i;
  }
  // Update the operations object to use the FormulaOperation type
  operations = {
    add: (n, t) => n + t,
    subtract: (n, t) => n - t,
    multiply: (n, t) => n * t,
    divide: (n, t) => {
      if (t === 0)
        throw new En("Division by zero", "DIVISION_BY_ZERO");
      return n / t;
    },
    ">": (n, t) => n > t,
    "<": (n, t) => n < t,
    ">=": (n, t) => n >= t,
    "<=": (n, t) => n <= t,
    "==": (n, t) => n === t,
    "!=": (n, t) => n !== t,
    "&&": (n, t) => n && t,
    "||": (n, t) => n || t
  };
  // Update getOperation to use the type guard
  getOperation(n) {
    const a = {
      "+": "add",
      "-": "subtract",
      "*": "multiply",
      "/": "divide",
      ">": ">",
      "<": "<",
      ">=": ">=",
      "<=": "<=",
      "==": "==",
      "!=": "!=",
      "&&": "&&",
      "||": "||",
      "!": "!",
      "?:": "ternary"
    }[n];
    if (!this.isFormulaOperation(a))
      throw new Error(`Unsupported operator: ${n}`);
    return a;
  }
  precedence = {
    "||": 1,
    "&&": 2,
    "+": 4,
    "-": 4,
    "*": 5,
    "/": 5,
    "!": 6,
    // Unary-minus on the operator stack is tagged 'UNARY_MINUS' to
    // distinguish it from binary subtract. Listed here so the standard
    // shunting-yard precedence comparison correctly pops it before
    // lower-precedence binary ops (e.g. `-3 + 4` → pop unary, then `+`).
    UNARY_MINUS: 6,
    ">": 3,
    "<": 3,
    ">=": 3,
    "<=": 3,
    "!=": 3,
    "==": 3,
    "?": 2,
    ":": 2
  };
  constructor({ url: n = null, spec: t = null }) {
    n && (this.url = n), t && (this.spec = t);
  }
  isFormulaOperation(n) {
    return ["add", "subtract", "multiply", "divide", ">", "<", ">=", "<=", "==", "!=", "&&", "||", "!", "ternary"].includes(n);
  }
  isFormula(n) {
    return typeof n == "string" && n.startsWith("=");
  }
  stripFormulaPrefix(n) {
    return n.substring(1);
  }
  evaluateValue(n, t, a = {}) {
    return typeof n == "number" || !this.isFormula(n) ? n : this.evaluateFormula(this.stripFormulaPrefix(n), t, a);
  }
  extractDependencies(n) {
    const t = /* @__PURE__ */ new Set();
    if (typeof n == "string") {
      const a = Array.from(n.matchAll(/panels\.(\w+)\.([lwt])/g));
      for (const u of a)
        t.add(`${u[1]}.${u[2]}`);
      const i = Array.from(n.matchAll(/inputs\.(\w+)/g));
      for (const u of i)
        t.add(`input.${u[1]}`);
      const s = /* @__PURE__ */ new Set(["width", "depth", "height", "quantity"]);
      for (const u of s)
        n.includes(u) && t.add(`input.${u}`);
    }
    return t;
  }
  buildFormulaGraph(n, t) {
    const a = {
      nodes: /* @__PURE__ */ new Map(),
      edges: /* @__PURE__ */ new Map()
    }, i = (s, u) => {
      const r = `${n}.${s}`;
      a.nodes.set(r, {
        panelKey: n,
        attribute: s,
        formula: u
      }), a.edges.set(r, this.isFormula(u) ? this.extractDependencies(this.stripFormulaPrefix(u.toString())) : /* @__PURE__ */ new Set());
    };
    return i("l", t.l), i("w", t.w), i("t", t.t), i("q", t.q), a;
  }
  resolveFormulas(n, t, a, i = {}) {
    const s = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Set(), r = (c) => {
      if (s.has(c))
        return s.get(c);
      const [f, m] = c.split(".");
      if (!n.nodes.has(c)) {
        const U = i[f];
        if (U)
          return m === "q" ? U.q : U[m];
        throw new Error(`Node not found: ${c}`);
      }
      if (u.has(c))
        throw new Error(`Circular dependency detected at ${c}`);
      const I = n.nodes.get(c);
      if (typeof I.formula == "number")
        return s.set(c, I.formula), I.formula;
      u.add(c);
      const O = n.edges.get(c) || /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Map();
      for (const U of O)
        if (U.startsWith("input.")) {
          const me = U.split(".")[1];
          b.set(U, a[me]);
        } else
          b.set(U, r(U));
      const _ = this.evaluateFormulaWithDeps(I.formula, b, a);
      return s.set(c, _), u.delete(c), _;
    };
    for (const c of n.nodes.keys())
      r(c);
    return Object.fromEntries(s);
  }
  evaluateFormulaWithDeps(n, t, a, i) {
    if (!this.isFormula(n))
      return n;
    let s = this.stripFormulaPrefix(n.toString());
    return s = s.replace(/inputs\.(\w+)/g, (u, r) => a[r]?.toString() || "0"), s = s.replace(/panels\.(\w+)\.(\w+)/g, (u, r, c) => {
      if (r === i?.panelKey && i[c] !== void 0)
        return i[c].toString();
      if (t.has(`${r}.${c}`))
        return t.get(`${r}.${c}`).toString();
      throw new Error(`Undefined variable in formula: ${u}`);
    }), this.evaluate(this.parse(s), a);
  }
  calculatePanels(n) {
    if (!this.spec?.panels)
      return {};
    const t = {};
    for (const [a, i] of Object.entries(this.spec.panels)) {
      const s = this.buildFormulaGraph(a, i), u = this.resolveFormulas(s, i, n, t), r = {
        panelKey: a,
        l: u[`${a}.l`],
        w: u[`${a}.w`],
        t: u[`${a}.t`],
        // Use `??` so a deliberately-zero q (e.g. `inputs.hasDoor` when
        // the customer turned the door off) survives instead of being
        // coerced back to 1. Only undefined falls through to the
        // default — the panel-not-defined case.
        q: u[`${a}.q`] ?? 1
      };
      t[a] = {
        name: i.name,
        material: i.material,
        bandingOptions: i.bandingOptions ?? {},
        finishOptions: i.finishOptions ?? {},
        ...i.planingOptions !== void 0 ? { planingOptions: i.planingOptions } : {},
        orientationLock: i.orientationLock !== void 0 ? this.evaluateFormulaWithDeps(i.orientationLock, /* @__PURE__ */ new Map(), n, r) : void 0,
        ...r
      };
    }
    return t;
  }
  evaluateFormula(n, t, a = {}) {
    if (typeof n == "number")
      return n;
    if (typeof n == "string") {
      const i = n.replace(/inputs\.(\w+)/g, (u, r) => {
        if (!(r in t))
          throw new Error(`Input not found: ${r}`);
        return t[r].toString();
      }), s = i.match(/panels\.(\w+)\.(l|w|t|q)/);
      if (s) {
        const [, u, r] = s;
        if (!a[u])
          throw new Error(`Panel not found: ${u}`);
        return r === "q" ? a[u].q ?? 1 : a[u].dimensions[r];
      }
      return this.evaluate(this.parse(i), t);
    }
    throw new Error("Invalid formula type");
  }
  tokenize(n) {
    const t = /('(?:\\'|[^'])*'|[0-9.]+|>=|<=|==|!=|&&|\|\||\+|-|\*|\/|>|<|\?|:|\(|\)|!|[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)*)/g;
    return n.match(t) || [];
  }
  isValidToken(n) {
    return this.isNumber(n) || this.isVariable(n) || n in this.precedence || n === "(" || n === ")" || this.isIdentifier(n);
  }
  isIdentifier(n) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)*$/.test(n);
  }
  evaluateComparison(n, t, a) {
    switch (n) {
      case ">":
        return t > a;
      case "<":
        return t < a;
      case ">=":
        return t >= a;
      case "<=":
        return t <= a;
      case "==":
        return t === a;
      case "!=":
        return t !== a;
      default:
        throw new Error(`Unsupported comparison operator: ${n}`);
    }
  }
  isNumber(n) {
    return !isNaN(Number(n));
  }
  isVariable(n) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)*$/.test(n);
  }
  toPostfix(n) {
    const t = [], a = [];
    let i = !1;
    for (let s = 0; s < n.length; s++) {
      const u = n[s];
      if (this.isNumber(u) || this.isStringLiteral(u) || this.isIdentifier(u))
        t.push(this.isNumber(u) ? Number(u) : u), i = !0;
      else if (u === "(")
        a.push(u), i = !1;
      else if (u === ")") {
        for (; a.length && a[a.length - 1] !== "("; )
          t.push(a.pop());
        if (a.length === 0)
          throw new Error("Mismatched parentheses");
        a.pop(), i = !0;
      } else if (u === "!") {
        for (; a.length && a[a.length - 1] !== "(" && this.precedence[a[a.length - 1]] > this.precedence[u]; )
          t.push(a.pop());
        a.push("UNARY_NOT"), i = !1;
      } else if (u === "?") {
        for (; a.length && this.precedence[a[a.length - 1]] > this.precedence[u]; )
          t.push(a.pop());
        a.push(u), i = !1;
      } else if (u === ":") {
        for (; a.length && a[a.length - 1] !== "?"; )
          t.push(a.pop());
        if (a.length === 0)
          throw new Error("Mismatched ternary operator");
        a.pop(), a.push("?:"), i = !1;
      } else if (u === "-" && !i) {
        for (; a.length && a[a.length - 1] !== "(" && this.precedence[a[a.length - 1]] > this.precedence["!"]; )
          t.push(a.pop());
        a.push("UNARY_MINUS"), i = !1;
      } else if (u in this.precedence) {
        for (; a.length && a[a.length - 1] !== "(" && this.precedence[a[a.length - 1]] >= this.precedence[u]; )
          t.push(a.pop());
        a.push(u), i = !1;
      } else
        throw new Error(`Invalid token: ${u}`);
    }
    for (; a.length; ) {
      const s = a.pop();
      if (s === "(" || s === ")")
        throw new Error("Mismatched parentheses");
      t.push(s);
    }
    return t;
  }
  parse(n) {
    if (typeof n != "string")
      throw new Error("Parse input must be a string");
    if (!n.trim())
      throw new Error("Empty input");
    const t = this.tokenize(n), a = this.toPostfix(t);
    return this.toFormulaJSON(a);
  }
  isStringLiteral(n) {
    return /^'.*'$/.test(n);
  }
  toFormulaJSON(n) {
    const t = [];
    for (const a of n) {
      if (!(a === "UNARY_MINUS" || a === "UNARY_NOT" || a === "?:")) {
        if (typeof a == "number" || this.isStringLiteral(a.toString()) || this.isVariable(a.toString())) {
          t.push(a);
          continue;
        }
      }
      if (a === "?:") {
        if (t.length < 3)
          throw new Error("Invalid ternary expression");
        const i = t.pop(), s = t.pop(), u = t.pop();
        t.push({
          operation: "ternary",
          condition: u,
          trueExpr: s,
          falseExpr: i
        });
      } else if (a === "UNARY_NOT") {
        if (t.length < 1)
          throw new Error("Invalid expression: insufficient operands for NOT");
        const i = t.pop();
        t.push({
          operation: "!",
          operands: [i]
        });
      } else if (a === "UNARY_MINUS") {
        if (t.length < 1)
          throw new Error("Invalid expression: insufficient operands for negation");
        const i = t.pop();
        t.push({
          operation: "subtract",
          operands: [0, i]
        });
      } else {
        if (t.length < 2)
          throw new Error("Invalid expression: insufficient operands");
        const i = t.pop(), s = t.pop();
        t.push({
          operation: this.getOperation(a.toString()),
          operands: [s, i]
        });
      }
    }
    if (t.length !== 1)
      throw new Error("Invalid expression: too many operands");
    return t[0];
  }
  calculateHardware(n) {
    return this.spec?.hardware ? Object.entries(this.spec.hardware).reduce((t, [a, i]) => {
      const s = this.evaluateValue(i.q, n), u = this.evaluateValue(i.cost, n);
      return t[a] = {
        name: i.name,
        q: Math.ceil(s),
        totalCost: Math.ceil(s) * u
      }, t;
    }, {}) : {};
  }
  calculateAll(n) {
    this.validateInputs(n);
    const t = this.calculatePanels(n), a = this.calculateHardware(n);
    return {
      inputs: n,
      panels: t,
      hardware: a
    };
  }
  validateInputs(n) {
    if (!this.spec?.inputs)
      throw new En("No input specifications defined", "NO_INPUTS");
    for (const [t, a] of Object.entries(this.spec.inputs)) {
      const i = n[t];
      if (i === void 0)
        throw new En(`Missing required input: ${t}`, "MISSING_INPUT");
      if (i < a.min || i > a.max)
        throw new En(`Input ${t} value ${i} out of range [min: ${a.min}, max: ${a.max}]`, "INPUT_OUT_OF_RANGE");
    }
  }
  async getSpec() {
    if (this.spec)
      return this.validateSpec(), this.spec;
    if (!this.url)
      return null;
    try {
      const n = await fetch(this.url);
      if (!n.ok)
        throw new Error(`HTTP error! status: ${n.status}`);
      const t = await n.json();
      return this.spec = t, this.validateSpec(), t;
    } catch (n) {
      return console.error("Error fetching or parsing JSON file:", n), null;
    }
  }
  validateSpec() {
    const n = [];
    return this.spec ? ((!this.spec.inputs || Object.keys(this.spec.inputs).length === 0) && n.push("Specification must contain inputs"), { isValid: n.length === 0, errors: n }) : (n.push("Specification is required"), { isValid: !1, errors: n });
  }
  validateFields(n) {
    if (!this.spec?.inputs)
      throw new En("No input specifications defined", "NO_INPUTS");
    const t = Object.keys(this.spec.inputs);
    if (n.length !== t.length)
      throw new En(`Expected ${t.length} fields, got ${n.length}`, "INVALID_FIELD_COUNT");
    let a = 0;
    for (const i of n) {
      const s = t[a], u = this.spec.inputs[s];
      if (i.value === null || i.value === void 0)
        throw new En(`Missing value for field ${a}`, "MISSING_FIELD_VALUE");
      if (!!!u.optionsFrom && typeof u.min == "number" && typeof u.max == "number" && (i.value < u.min || i.value > u.max))
        throw new En(`Field ${a} value ${i.value} out of range [min: ${u.min}, max: ${u.max}]`, "FIELD_OUT_OF_RANGE");
      a++;
    }
  }
  fieldsToInputs(n) {
    const t = Object.keys(this.spec?.inputs || {});
    return n.reduce((a, i, s) => {
      const u = t[s];
      return u && (a[u] = i.value), a;
    }, {});
  }
  getEmptyFields() {
    const n = {};
    return this.spec?.inputs && Object.keys(this.spec.inputs).forEach((t, a) => {
      n[a] = { value: 0 };
    }), n;
  }
  getDefaultFields() {
    const n = {};
    return this.spec?.inputs && Object.values(this.spec.inputs).forEach((t, a) => {
      const i = t.default;
      let s;
      typeof i == "number" ? s = i : typeof i == "boolean" ? s = i ? 1 : 0 : s = 0, n[a] = { value: s };
    }), n;
  }
  calculatePanelsFromFields(n) {
    this.validateFields(n);
    const t = this.fieldsToInputs(n);
    return this.calculatePanels(t);
  }
  calculateHardwareFromFields(n) {
    this.validateFields(n);
    const t = this.fieldsToInputs(n);
    return this.calculateHardware(t);
  }
  calculateAllFromFields(n) {
    this.validateFields(n);
    const t = this.fieldsToInputs(n);
    return this.calculateAll(t);
  }
  getFieldMetadata() {
    const n = [];
    return this.spec?.inputs && Object.entries(this.spec.inputs).forEach(([t, a], i) => {
      n.push({
        index: i,
        name: t,
        label: a.label,
        type: a.type,
        min: a.min,
        max: a.max,
        default: a.default
      });
    }), n;
  }
  /**
   * Evaluate a formula string with custom variables
   * Supports: arithmetic (+,-,*,/), comparison (>,<,>=,<=,==), logical (&&,||,!), ternary (?:)
   * Variables can use dot-notation (e.g., extras.banding.sides.l1)
   *
   * @param formula - Formula string to evaluate (e.g., "l > 100 && w > 50")
   * @param variables - Object containing variable values
   * @returns Evaluated result (number or boolean)
   */
  evaluateExpression(n, t = {}) {
    const a = this.parse(n);
    return this.evaluate(a, t);
  }
  /**
   * Validate formula syntax without evaluating
   * Returns validation result with any syntax errors
   *
   * @param formula - Formula string to validate
   * @returns Object with isValid flag and error message if invalid
   */
  validateFormula(n) {
    try {
      return this.parse(n), { isValid: !0 };
    } catch (t) {
      return {
        isValid: !1,
        error: t instanceof Error ? t.message : "Invalid formula"
      };
    }
  }
  /**
   * Parse a formula and return every variable / identifier it references.
   *
   * Uses the engine's own parser so the result reflects what the
   * evaluator will actually look up at runtime — including dot-paths
   * (`analysis.partArea`) treated as single identifiers and string
   * literals correctly excluded.
   *
   * Used by schema-aware validators to spot references to fields that
   * have been renamed or removed from the result schema before evaluation
   * silently falls back.
   *
   * Returns an empty array on syntactically invalid input (callers should
   * combine this with `validateFormula` to distinguish "no refs" from
   * "couldn't parse"). Throws nothing.
   */
  getReferencedIdentifiers(n) {
    const t = /* @__PURE__ */ new Set();
    try {
      const a = this.parse(this.stripFormulaPrefixSafely(n));
      this.collectIdentifiers(a, t);
    } catch {
    }
    return Array.from(t);
  }
  collectIdentifiers(n, t) {
    if (n != null) {
      if (typeof n == "string") {
        this.isStringLiteral(n) || t.add(n);
        return;
      }
      if (typeof n == "object") {
        if (n.operation === "ternary") {
          this.collectIdentifiers(n.condition, t), this.collectIdentifiers(n.trueExpr, t), this.collectIdentifiers(n.falseExpr, t);
          return;
        }
        if (Array.isArray(n.operands))
          for (const a of n.operands)
            this.collectIdentifiers(a, t);
      }
    }
  }
  /**
   * Mirror of `stripFormulaPrefix` that tolerates non-`=`-prefixed input.
   * Public-method-facing only — internal evaluation paths still use
   * `stripFormulaPrefix` directly after their own `isFormula` check.
   */
  stripFormulaPrefixSafely(n) {
    const t = n.trim();
    return t.startsWith("=") ? t.substring(1).trim() : t;
  }
}
const Pc = new ri({});
function Cc(e) {
  const n = e.trim();
  return n.startsWith("=") ? n.substring(1).trim() : n;
}
function cs(e, n) {
  const t = Cc(e);
  if (!t) return null;
  try {
    const a = Pc.evaluateExpression(t, n), i = Number(a);
    return !Number.isFinite(i) || i < 0 ? null : i;
  } catch (a) {
    return console.error("[extras-formula] evaluation failed", { formula: e, err: a }), null;
  }
}
function Lc(e, n) {
  return cs(n, e);
}
function Oc(e, n) {
  return cs(n, e);
}
function ro(e, n) {
  return cs(n, e);
}
const ds = {
  stockL: 0,
  stockW: 0,
  stockCost: 0,
  stockDiscount: 0,
  stockDiscountedCost: 0
};
function Ec(e, n, t, a) {
  return {
    length: n,
    edge: e,
    isLongEdge: e === "l1" || e === "l2" ? 1 : 0,
    partL: t.partL,
    partW: t.partW,
    partT: t.partT,
    partQuantity: t.partQuantity,
    ...ds,
    ...a
  };
}
function Ac(e, n, t, a) {
  return {
    area: n,
    face: e,
    partL: t.partL,
    partW: t.partW,
    partT: t.partT,
    partQuantity: t.partQuantity,
    ...ds,
    ...a
  };
}
function uo(e, n, t, a, i, s) {
  return {
    area: n,
    length: t,
    target: e,
    isFace: a,
    partL: i.partL,
    partW: i.partW,
    partT: i.partT,
    partQuantity: i.partQuantity,
    ...ds,
    ...s
  };
}
function Tc(e) {
  let n = e;
  for (let t = 0; t < 16 && n; t++) {
    if (n instanceof oa)
      return n;
    if (typeof n.unwrap == "function") {
      const i = n.unwrap();
      if (i === n)
        break;
      n = i;
      continue;
    }
    const a = n._def?.innerType ?? n._zod?.def?.innerType;
    if (a && a !== n) {
      n = a;
      continue;
    }
    break;
  }
  return n;
}
function Fc(e) {
  const n = e.shape ?? {};
  return Object.entries(n).filter(([, t]) => Tc(t) instanceof oa).map(([t]) => t);
}
function co(e) {
  const t = (e.split(".").pop() ?? e).replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
}
Fc(La);
function fs(e) {
  const n = (s) => {
    const u = e.meta[s];
    return {
      name: s,
      label: u?.label ?? co(s),
      description: u?.description,
      group: u?.group ?? e.defaultGroup
    };
  }, t = e.handCuratedNames.map(n), a = e.relevantOrderKeys.map((s) => ({
    name: `order.${s}`,
    label: co(s),
    group: "Order"
  })), i = [...t, ...a];
  return { variables: i, variableNames: i.map((s) => s.name) };
}
const Nc = {
  length: { group: "Edge", label: "Edge length", description: "This edge's length in mm." },
  edge: { group: "Edge", label: "Edge name", description: "Edge identifier: 'l1' | 'l2' | 'w1' | 'w2'. Compare with quoted strings." },
  isLongEdge: { group: "Edge", label: "Is long edge", description: "1 when the edge is along the long side (l1/l2), else 0." },
  partL: { group: "Part", label: "Part length", description: "Part's long-side dimension (mm)." },
  partW: { group: "Part", label: "Part width", description: "Part's short-side dimension (mm)." },
  partT: { group: "Part", label: "Part thickness", description: "Part thickness (mm)." },
  partQuantity: { group: "Part", label: "Part quantity", description: "Copies of this part in the order." },
  stockL: { group: "Stock", label: "Stock length" },
  stockW: { group: "Stock", label: "Stock width" },
  stockCost: { group: "Stock", label: "Stock cost", description: "Configured cost per sheet (pre-discount)." },
  stockDiscount: { group: "Stock", label: "Stock discount %" },
  stockDiscountedCost: { group: "Stock", label: "Discounted stock cost" }
}, $c = [
  "length",
  "edge",
  "isLongEdge",
  "partL",
  "partW",
  "partT",
  "partQuantity",
  "stockL",
  "stockW",
  "stockCost",
  "stockDiscount",
  "stockDiscountedCost"
], Mc = [
  "totalBandingLength",
  // the headline one for banding tiering
  "totalPartsProduced",
  "totalStockCost",
  "totalStockArea",
  "totalPartArea"
], { variableNames: Dc } = fs({
  handCuratedNames: $c,
  meta: Nc,
  relevantOrderKeys: Mc,
  defaultGroup: "Edge"
}), _c = Dc, Vc = {
  area: { group: "Face", label: "Face area", description: "This face's area in mm² (partL × partW)." },
  face: { group: "Face", label: "Face name", description: "Face identifier: 'a' | 'b'. Compare with quoted strings." },
  partL: { group: "Part", label: "Part length" },
  partW: { group: "Part", label: "Part width" },
  partT: { group: "Part", label: "Part thickness" },
  partQuantity: { group: "Part", label: "Part quantity", description: "Copies of this part in the order." },
  stockL: { group: "Stock", label: "Stock length" },
  stockW: { group: "Stock", label: "Stock width" },
  stockCost: { group: "Stock", label: "Stock cost", description: "Configured cost per sheet (pre-discount)." },
  stockDiscount: { group: "Stock", label: "Stock discount %" },
  stockDiscountedCost: { group: "Stock", label: "Discounted stock cost" }
}, Rc = [
  "area",
  "face",
  "partL",
  "partW",
  "partT",
  "partQuantity",
  "stockL",
  "stockW",
  "stockCost",
  "stockDiscount",
  "stockDiscountedCost"
], qc = [
  "totalFinishArea",
  "totalPartsProduced",
  "totalStockCost",
  "totalStockArea",
  "totalPartArea"
], { variableNames: Bc } = fs({
  handCuratedNames: Rc,
  meta: Vc,
  relevantOrderKeys: qc,
  defaultGroup: "Face"
}), jc = Bc, Uc = {
  area: { group: "Feature", label: "Face area", description: "Face area in mm² for face-mode planing; 0 for side-mode." },
  length: { group: "Feature", label: "Side length", description: "Side length in mm for side-mode planing; 0 for face-mode." },
  target: { group: "Feature", label: "Target", description: "Location id: 'face.a' | 'face.b' | 'side.l1' | …" },
  isFace: { group: "Feature", label: "Is face", description: "1 when planing a face, 0 when planing a side." },
  partL: { group: "Part", label: "Part length" },
  partW: { group: "Part", label: "Part width" },
  partT: { group: "Part", label: "Part thickness" },
  partQuantity: { group: "Part", label: "Part quantity" },
  stockL: { group: "Stock", label: "Stock length" },
  stockW: { group: "Stock", label: "Stock width" },
  stockCost: { group: "Stock", label: "Stock cost" },
  stockDiscount: { group: "Stock", label: "Stock discount %" },
  stockDiscountedCost: { group: "Stock", label: "Discounted stock cost" }
}, Gc = [
  "area",
  "length",
  "target",
  "isFace",
  "partL",
  "partW",
  "partT",
  "partQuantity",
  "stockL",
  "stockW",
  "stockCost",
  "stockDiscount",
  "stockDiscountedCost"
], Wc = [
  "totalPlaningArea",
  "totalPartsProduced",
  "totalStockCost",
  "totalStockArea",
  "totalPartArea"
], { variableNames: zc } = fs({
  handCuratedNames: Gc,
  meta: Uc,
  relevantOrderKeys: Wc,
  defaultGroup: "Feature"
}), Kc = zc, en = W(null);
let Hc = 0;
function Zc(e) {
  const n = e || `action-menu-${++Hc}-${Date.now()}`, t = A({
    get: () => en.value === n,
    set: (m) => {
      m ? en.value = n : en.value === n && (en.value = null);
    }
  }), a = () => {
    en.value = n;
  }, i = () => {
    en.value === n && (en.value = null);
  }, s = () => {
    en.value = null;
  }, u = () => {
    t.value = !t.value;
  }, r = A(() => en.value !== null), c = A(() => en.value), f = A(() => en.value === n);
  return {
    // Instance-specific
    id: zt(W(n)),
    isOpen: t,
    open: a,
    close: i,
    toggle: u,
    isThisMenuOpen: f,
    // Global singleton state (shared across all instances)
    closeAll: s,
    isAnyMenuOpen: r,
    currentOpenMenuId: c
  };
}
const Jc = { class: "action-menu" }, Qc = ["textContent"], Yc = {
  key: 0,
  class: "menu-divider"
}, Xc = {
  key: 1,
  class: "group-label"
}, ed = /* @__PURE__ */ vt({
  __name: "ActionMenu",
  props: {
    menuItems: {},
    label: { default: "Actions" },
    showLabel: { type: Boolean, default: !0 },
    icon: { default: () => ["fas", "ellipsis-v"] },
    placement: { default: "bottom-start" },
    closeOnLinkClick: { type: Boolean, default: !0 },
    offset: { default: 8 },
    menuId: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["action"],
  setup(e, { emit: n }) {
    const t = e, a = n, { isOpen: i, close: s, toggle: u } = Zc(t.menuId), r = W(), c = W(), f = A(() => t.disabled), m = A(() => t.label), I = A(() => t.showLabel), O = A(() => t.icon), { floatingStyles: b } = So(r, c, {
      placement: t.placement,
      whileElementsMounted: Vo,
      middleware: [
        Mo(t.offset),
        Do(),
        _o({ padding: 8 })
      ]
    }), _ = (x) => {
      if (!x) return ["fas", "question"];
      if (typeof x == "function" && (x = x(t)), Array.isArray(x))
        return x;
      if (typeof x == "string") {
        const D = x.split(" ");
        if (D.length >= 2) {
          const le = D[0], ie = D.slice(1).join("-").replace("fa-", "");
          return [le, ie];
        }
        return ["fas", x.replace("fa-", "")];
      }
      return ["fas", "question"];
    }, U = A(() => _(O.value)), me = (x) => typeof x.active == "function" ? x.active(t) : typeof x.active == "boolean" ? x.active : !1, G = (x) => {
      if (!x.href) return !1;
      try {
        const D = typeof x.href == "function" ? x.href(t) : x.href;
        return new URL(D, window.location.origin).origin !== window.location.origin;
      } catch {
        return !1;
      }
    }, q = (x) => x.href ? "a" : "div", ce = (x) => {
      const D = {};
      if (x.href) {
        const le = typeof x.href == "function" ? x.href(t) : x.href;
        if (D.href = le, G(x)) {
          const ie = typeof x.target == "function" ? x.target(t) : x.target;
          D.target = ie || "_blank", D.rel = x.rel || "noopener noreferrer";
        } else if (x.target) {
          const ie = typeof x.target == "function" ? x.target(t) : x.target;
          D.target = ie;
        }
        x.rel && (D.rel = x.rel);
      }
      return x.attrs && Object.assign(D, x.attrs), D;
    }, de = A(() => t.menuItems.map((x) => {
      const D = { ...x };
      return typeof x.href == "function" && (D.href = x.href(t)), typeof x.icon == "function" && (D.icon = x.icon(t)), typeof x.disabled == "function" && (D.disabled = x.disabled(t)), typeof x.label == "function" && (D.label = x.label(t)), typeof x.variant == "function" && (D.variant = x.variant(t)), typeof x.active == "function" && (D.active = x.active(t)), typeof x.target == "function" && (D.target = x.target(t)), typeof x.show == "function" && (D.show = x.show(t)), D;
    })), w = (x) => {
      x.stopPropagation(), x.preventDefault(), !f.value && u();
    }, M = (x, D) => {
      if (D.stopPropagation(), x.disabled && !x.href) {
        D.preventDefault();
        return;
      }
      if (typeof x.action == "function" && x.action(x) === !1 && x.href) {
        D.preventDefault();
        return;
      }
      a("action", {
        id: x.id,
        item: x
      }), x.href && t.closeOnLinkClick ? s() : x.href || s();
    }, ne = (x) => {
      const D = [];
      if (x.variant) {
        const ie = typeof x.variant == "function" ? x.variant(t) : x.variant;
        D.push(`variant-${ie}`);
      }
      if ((typeof x.disabled == "function" ? x.disabled(t) : x.disabled) && !x.href && D.push("disabled"), me(x) && D.push("active"), x.href && D.push("menu-link"), G(x) && D.push("external-link"), x.class) {
        const ie = typeof x.class == "function" ? x.class(t) : x.class;
        D.push(ie);
      }
      return D.join(" ");
    }, oe = (x) => {
      const D = x.target;
      i.value && r.value && c.value && !r.value.contains(D) && !c.value.contains(D) && s();
    }, R = (x) => {
      x.key === "Escape" && i.value && s();
    };
    return fn(() => {
      document.addEventListener("click", oe), document.addEventListener("keydown", R);
    }), si(() => {
      document.removeEventListener("click", oe), document.removeEventListener("keydown", R);
    }), (x, D) => (T(), K("div", Jc, [
      be("div", {
        ref_key: "trigger",
        ref: r,
        onClick: w,
        class: lt(["actions-btn", { active: E(i), disabled: f.value }])
      }, [
        O.value ? (T(), Ne(E(ei), {
          key: 0,
          icon: U.value,
          class: "icon"
        }, null, 8, ["icon"])) : ue("", !0),
        I.value ? (T(), K("span", {
          key: 1,
          class: "label",
          textContent: Se(m.value)
        }, null, 8, Qc)) : ue("", !0)
      ], 2),
      (T(), Ne(oi, { to: "body" }, [
        E(i) && !f.value ? (T(), K("div", {
          key: 0,
          ref_key: "floating",
          ref: c,
          style: Gt(E(b)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: D[0] || (D[0] = Gn(() => {
          }, ["stop"]))
        }, [
          (T(!0), K(Pt, null, Zt(de.value, (le, ie) => (T(), K(Pt, { key: ie }, [
            le.type === "divider" ? (T(), K("div", Yc)) : le.type === "group" ? (T(), K("div", Xc, Se(le.label), 1)) : le.show !== !1 ? (T(), Ne(gr(q(le)), Kt({
              key: 2,
              ref_for: !0
            }, ce(le), {
              onClick: (se) => M(le, se),
              id: le.id,
              class: ["menu-item", ne(le)],
              disabled: le.disabled && !le.href
            }), {
              default: tn(() => [
                le.icon || me(le) ? (T(), Ne(E(ei), {
                  key: 0,
                  icon: me(le) ? ["fass", "check"] : _(le.icon)
                }, null, 8, ["icon"])) : ue("", !0),
                be("span", null, Se(le.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : ue("", !0)
          ], 64))), 128))
        ], 4)) : ue("", !0),
        E(i) && !f.value ? (T(), K("div", {
          key: 1,
          class: "backdrop",
          onClick: D[1] || (D[1] = //@ts-ignore
          (...le) => E(s) && E(s)(...le))
        })) : ue("", !0)
      ]))
    ]));
  }
}), td = {
  key: 0,
  class: "extras-price-display"
}, nd = { class: "extras-price-breakdown" }, ad = { class: "extras-price-rate" }, id = {
  key: 0,
  class: "extras-price-label"
}, sd = {
  key: 1,
  class: "extras-price-op"
}, od = {
  key: 0,
  class: "extras-price-total"
}, ld = /* @__PURE__ */ vt({
  __name: "ExtrasPriceDisplay",
  props: {
    pricePerUnit: { default: void 0 },
    quantity: { default: void 0 },
    quantityUnit: { default: "m" },
    priceLabel: { default: "" },
    formatPrice: { type: Function, default: void 0 }
  },
  setup(e) {
    const n = e, t = A(() => n.quantity !== void 0 && n.quantity > 0), a = (i) => n.formatPrice ? n.formatPrice(i) : i.toFixed(2);
    return (i, s) => e.pricePerUnit !== void 0 ? (T(), K("span", td, [
      be("span", nd, [
        be("strong", ad, Se(a(e.pricePerUnit)), 1),
        e.priceLabel ? (T(), K("span", id, Se(e.priceLabel), 1)) : ue("", !0),
        t.value ? (T(), K("span", sd, " × " + Se(e.quantity.toFixed(2)) + Se(e.quantityUnit ? " " + e.quantityUnit : "") + " = ", 1)) : ue("", !0)
      ]),
      t.value ? (T(), K("strong", od, Se(a(e.pricePerUnit * e.quantity)), 1)) : ue("", !0)
    ])) : ue("", !0);
  }
}), rd = /* @__PURE__ */ sn(ld, [["__scopeId", "data-v-2e4e7ac7"]]);
function ps(e) {
  const n = e.trim();
  if (n.startsWith("#")) {
    const t = n.slice(1);
    if (t.length === 3)
      return {
        r: parseInt(t[0] + t[0], 16),
        g: parseInt(t[1] + t[1], 16),
        b: parseInt(t[2] + t[2], 16)
      };
    if (t.length >= 6)
      return {
        r: parseInt(t.slice(0, 2), 16),
        g: parseInt(t.slice(2, 4), 16),
        b: parseInt(t.slice(4, 6), 16)
      };
  }
  if (n.startsWith("rgb")) {
    const t = n.match(/\d+/g);
    if (t && t.length >= 3)
      return { r: +t[0], g: +t[1], b: +t[2] };
  }
  return null;
}
function zg(e, n) {
  const t = ps(e);
  return t ? (0.299 * t.r + 0.587 * t.g + 0.114 * t.b) / 255 > 0.55 ? "#000000" : "#ffffff" : "#000000";
}
function fo(e, n = 30, t = 75) {
  const a = ps(e);
  if (!a)
    return e;
  const i = cd(a.r, a.g, a.b);
  if (i.l >= n && i.l <= t && i.s >= 25)
    return e;
  const u = Math.min(t, Math.max(n, i.l)), r = i.s < 25 ? 60 : i.s, [c, f, m] = dd(i.h, r, u);
  return "#" + [c, f, m].map((I) => I.toString(16).padStart(2, "0")).join("");
}
function Kg(e) {
  const n = ud(e);
  return n === null ? "white" : n > 0.55 ? "#cc1f8c" : "white";
}
function ud(e) {
  const n = ps(e);
  return n ? (0.299 * n.r + 0.587 * n.g + 0.114 * n.b) / 255 : null;
}
function cd(e, n, t) {
  const a = e / 255, i = n / 255, s = t / 255, u = Math.max(a, i, s), r = Math.min(a, i, s), c = (u + r) / 2;
  let f = 0, m = 0;
  if (u !== r) {
    const I = u - r;
    switch (m = c > 0.5 ? I / (2 - u - r) : I / (u + r), u) {
      case a:
        f = (i - s) / I + (i < s ? 6 : 0);
        break;
      case i:
        f = (s - a) / I + 2;
        break;
      case s:
        f = (a - i) / I + 4;
        break;
    }
    f *= 60;
  }
  return { h: f, s: m * 100, l: c * 100 };
}
function dd(e, n, t) {
  n /= 100, t /= 100;
  const a = (1 - Math.abs(2 * t - 1)) * n, i = a * (1 - Math.abs(e / 60 % 2 - 1)), s = t - a / 2;
  let u = 0, r = 0, c = 0;
  return e >= 0 && e < 60 ? (u = a, r = i, c = 0) : e >= 60 && e < 120 ? (u = i, r = a, c = 0) : e >= 120 && e < 180 ? (u = 0, r = a, c = i) : e >= 180 && e < 240 ? (u = 0, r = i, c = a) : e >= 240 && e < 300 ? (u = i, r = 0, c = a) : e >= 300 && e < 360 && (u = a, r = 0, c = i), [
    Math.round((u + s) * 255),
    Math.round((r + s) * 255),
    Math.round((c + s) * 255)
  ];
}
const po = (e, n, t) => {
  if (n === "unitDependent")
    if (t === "fraction") {
      if (/\/0$/.test(e))
        return {
          value: e,
          valid: !1,
          message: "division_by_zero"
        };
      const a = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(e), i = To(e);
      return {
        value: e,
        valid: a || i
      };
    } else {
      const i = /^-?\d*\.?\d*$/.test(e);
      if (i && e !== "" && e !== "-" && e !== "." && !e.endsWith(".")) {
        const s = parseFloat(e);
        if (!isNaN(s))
          return {
            value: s,
            valid: !0
          };
      }
      return {
        value: e,
        // Keep as string for partial inputs
        valid: i
      };
    }
  if (n === "integer") {
    const i = /^-?\d*$/.test(e);
    if (i && e !== "" && e !== "-") {
      const s = parseInt(e, 10);
      if (!isNaN(s))
        return {
          value: s,
          valid: !0
        };
    }
    return {
      value: e,
      // Keep as string for partial inputs
      valid: i
    };
  }
  if (n === "float") {
    const i = /^-?\d*\.?\d*$/.test(e);
    if (i && e !== "" && e !== "-" && e !== "." && !e.endsWith(".")) {
      const s = parseFloat(e);
      if (!isNaN(s))
        return {
          value: s,
          valid: !0
        };
    }
    return {
      value: e,
      // Keep as string for partial inputs
      valid: i
    };
  }
  return { value: e, valid: !0 };
};
function fd({
  props: e,
  emit: n,
  isMounted: t
}) {
  const a = W({
    isTyping: !1,
    isMouseDown: !1,
    isComposing: !1,
    lastValidValue: String(e.value ?? "")
  }), i = (r, c = !1) => {
    if (r == null || r === "") {
      const m = e.required && !e.disableRequiredValidation;
      return e.type === "string" ? m ? { value: null, valid: !1, message: "field_required" } : { value: r === null ? null : "", valid: !0 } : Mr(r, "decimal", m);
    }
    const f = String(r);
    switch (e.type) {
      case "string":
        return { value: f, valid: !0 };
      case "unitDependent":
        if (c)
          return po(f, e.type, e.numberFormat);
        try {
          const m = re({
            v: r,
            nf: e.numberFormat,
            dp: e.decimalPlaces,
            fr: e.fractionRoundTo
          });
          if (typeof m == "number") {
            let I = m, O = !0, b;
            return typeof e.min == "number" && I < e.min && (I = e.min, O = !1, b = "below_min"), typeof e.max == "number" && I > e.max && (I = e.max, O = !1, b = "above_max"), { value: I, valid: O, message: b };
          }
          return { value: m, valid: !0 };
        } catch (m) {
          return console.warn("Error converting value:", m), {
            value: null,
            valid: !1,
            message: "invalid_number"
          };
        }
      case "integer":
      case "float":
        if (c)
          return po(f, e.type);
        try {
          const I = re({
            v: r,
            nf: "decimal"
          });
          if (I === null)
            return e.required && !e.disableRequiredValidation ? { value: null, valid: !1, message: "errors.validation.field.required" } : { value: null, valid: !0 };
          let O = I;
          if (e.type === "integer" && (O = Math.round(O)), e.allowZero === !1 && O === 0)
            return {
              value: O,
              valid: !1,
              message: "zero_not_allowed"
            };
          let b = !0, _;
          return typeof e.min == "number" && O < e.min && (O = e.min, b = !1, _ = "below_min"), typeof e.max == "number" && O > e.max && (O = e.max, b = !1, _ = "above_max"), { value: O, valid: b, message: _ };
        } catch {
          return {
            value: null,
            valid: !1,
            message: "invalid_number"
          };
        }
      default:
        return { value: r, valid: !0 };
    }
  }, s = (r, c = !1) => c && e.type === "unitDependent" && e.numberFormat === "fraction" ? !1 : c && (e.type === "integer" || e.type === "float" || e.type === "unitDependent" && e.numberFormat === "decimal") ? typeof r.value == "number" && r.valid : !!(r.valid || r.message === "zero_not_allowed" || r.message === "below_min" || r.message === "above_max" || r.message === "errors.validation.field.required" && !e.disableRequiredValidation);
  return {
    state: a,
    ...{
      //Handler to set the flag on mouse down
      handleMouseDown: () => {
        t.value && (a.value.isMouseDown = !0);
      },
      //Handler to reset the flag on mouse up
      handleMouseUp: () => {
        t.value && (a.value.isMouseDown = !1);
      },
      handleInput: (r) => {
        if (!t.value) return;
        const c = r.target;
        if (a.value.isMouseDown) {
          const m = i(c.value, !1);
          s(m, !1) && (n("update:value", m.value), n("validation", m, e.id)), a.value.isMouseDown = !1;
          return;
        }
        a.value.isTyping = !0;
        const f = i(c.value, !0);
        n("validation", f, e.id), n("input", c.value), s(f, !0) && n("update:value", f.value);
      },
      handleBlur: (r) => {
        if (!t.value) return;
        a.value.isTyping = !1;
        const c = r.target, f = i(c.value, !1);
        n("validation", f, e.id), s(f) && (n("update:value", f.value), a.value.lastValidValue = String(f.value ?? "")), n("blur", r);
      },
      handleFocus: (r) => {
        t.value && (a.value.isTyping = !0, n("focus", r));
      },
      handleKeydown: (r) => {
        if (t.value && !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(r.key)) {
          if (!["Backspace", "Delete", "Tab", "Enter", "Escape"].includes(r.key))
            if (e.type === "unitDependent" && e.numberFormat === "fraction") {
              const c = r.target, f = c.value, m = c.selectionStart || 0, I = f.substring(0, m);
              if (r.key === "/" && f.includes("/")) {
                r.preventDefault();
                return;
              }
              if (r.key === " " && /\s$/.test(I)) {
                r.preventDefault();
                return;
              }
              /^[-0-9\s/]$/.test(r.key) || r.preventDefault();
            } else (e.type === "integer" || e.type === "float") && ((e.type === "integer" ? /^[-0-9]$/.test(r.key) : /^[-0-9.]$/.test(r.key)) || r.preventDefault());
          if (r.key === "Enter") {
            a.value.isTyping = !1;
            const c = r.target, f = i(c.value, !1);
            n("validation", f, e.id), s(f) && (n("update:value", f.value), a.value.lastValidValue = String(f.value ?? "")), n("enter", f);
          }
          r.key === "Escape" && (a.value.isTyping = !1, n("escape"));
        }
      },
      // Better input pattern for HTML validation
      getInputPattern: () => {
        switch (e.type) {
          case "integer":
            return "-?[0-9]*";
          case "float":
            return "-?[0-9]*\\.?[0-9]*";
          case "unitDependent":
            return e.numberFormat === "fraction" ? "-?([0-9]+( [0-9]+)?)?(/[0-9]+)?" : "-?[0-9]*\\.?[0-9]*";
          default:
            return;
        }
      },
      getInputMode: () => {
        switch (e.type) {
          case "integer":
            return "numeric";
          case "float":
            return "decimal";
          case "unitDependent":
            return e.numberFormat === "fraction" ? "numeric" : "decimal";
          default:
            return "text";
        }
      },
      handleCompositionStart: () => {
        a.value.isComposing = !0;
      },
      handleCompositionEnd: (r) => {
        a.value.isComposing = !1, a.value.isTyping = !1;
        const c = r.target, f = i(c.value, !1);
        n("validation", f, e.id), s(f) && (n("update:value", f.value), a.value.lastValidValue = String(f.value ?? ""));
      },
      handlePaste: (r) => {
        if (!t.value) return;
        const c = r.clipboardData?.getData("text")?.trim() || "";
        if (e.type === "unitDependent" && e.numberFormat === "fraction") {
          const f = c.replace(/[""'']/g, "").replace(/\s+/g, " ");
          if (!To(f)) {
            r.preventDefault(), n("validation", {
              value: f,
              valid: !1,
              message: `Pasted text "${c}" is not a valid fraction format`
            }, e.id);
            return;
          }
          if (f !== c) {
            r.preventDefault();
            const m = r.target;
            m.value = f;
            const I = i(f, !0);
            n("validation", I, e.id), n("input", f);
          }
        }
        n("paste", r);
      }
    },
    processValue: i
  };
}
function pd({
  props: e,
  emit: n,
  isMounted: t
}) {
  const a = W({
    isTyping: !1,
    isComposing: !1,
    lastValidValue: String(e.value ?? "")
  }), i = (s) => {
    if (!e?.output || e.output === "string")
      return {
        value: s,
        valid: !0
      };
    if (e.options && e.options.length > 0) {
      let u = s;
      return e.numberFormat && (e.numberFormat === "fraction" ? u = String(s) : u = Number(s)), e.options.some((c) => c.value === u) ? {
        value: u,
        valid: !0
      } : {
        value: u,
        valid: !1,
        message: "invalid_option"
      };
    }
    return {
      value: s,
      valid: !0
    };
  };
  return {
    state: a,
    processValue: i,
    handleSelectChange: (s) => {
      if (!t.value) return;
      const u = s.target;
      if (e.multiEdit && u.value === " ") {
        n("update:value", null);
        return;
      }
      const r = i(u.value);
      n("validation", r, e.id), r.valid && n("update:value", r.value);
    }
  };
}
function md({
  props: e,
  emit: n,
  isMounted: t
}) {
  return {
    handleCheckboxChange: (a) => {
      if (!t.value) return;
      const s = a.target.checked ? e.trueValue : e.falseValue;
      if (s === void 0) {
        console.warn("Checkbox true/false values not properly configured");
        return;
      }
      n("update:value", s);
    },
    handleFocus: (a) => {
      t.value && n("focus", a);
    },
    handleBlur: (a) => {
      t.value && n("blur", a);
    }
  };
}
const gd = ["id", "name", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], hd = /* @__PURE__ */ vt({
  __name: "CheckBoxInput",
  props: {
    trueValue: {},
    falseValue: {},
    id: {},
    name: {},
    value: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    issue: { type: Boolean },
    ariaLabel: {},
    errorId: {},
    inputClasses: {},
    decimalPlaces: {},
    fractionRoundTo: {}
  },
  emits: ["update:value", "input", "focus", "blur"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = W(!0), s = W(null), u = A(() => t.value === t.trueValue), {
      handleCheckboxChange: r,
      handleFocus: c,
      handleBlur: f
    } = md({
      props: t,
      emit: a,
      isMounted: i
    });
    return (m, I) => (T(), K("input", {
      id: t.id,
      name: t.name || t.id,
      ref_key: "inputRef",
      ref: s,
      type: "checkbox",
      checked: u.value,
      disabled: t.readonly || t.disabled,
      required: t.required,
      "aria-label": t.ariaLabel,
      "aria-invalid": !!t.issue,
      "aria-describedby": t.errorId,
      onChange: I[0] || (I[0] = //@ts-ignore
      (...O) => E(r) && E(r)(...O)),
      onFocus: I[1] || (I[1] = //@ts-ignore
      (...O) => E(c) && E(c)(...O)),
      onBlur: I[2] || (I[2] = //@ts-ignore
      (...O) => E(f) && E(f)(...O))
    }, null, 40, gd));
  }
}), vd = ["for"], xa = /* @__PURE__ */ vt({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(e) {
    return (n, t) => (T(), K("label", {
      for: e.id,
      class: "input-label"
    }, [
      Ht(n.$slots, "default", {}, () => [
        nn(Se(e.label), 1)
      ])
    ], 8, vd));
  }
}), Qa = /* @__PURE__ */ new Set();
function bd(e) {
  for (const n of Qa)
    n !== e && n();
}
function Ko(e, n, t = {}, a) {
  const i = W(null);
  if (a) {
    const m = () => {
      a.value && (a.value = !1);
    };
    Qe(a, (I) => {
      I ? (bd(m), Qa.add(m)) : Qa.delete(m);
    }, { flush: "sync" }), li(() => {
      Qa.delete(m);
    });
  }
  fn(() => {
    const m = e.value;
    i.value = m?.closest("dialog") ?? m?.closest(".smartcut-content") ?? document.body;
  });
  const s = [
    Mo(t.offsetPx ?? 4),
    Do({ padding: t.padding ?? 8 }),
    _o({ padding: t.padding ?? 8 })
  ];
  t.sizeApply && s.push(xu({
    padding: t.padding ?? 8,
    apply: t.sizeApply
  })), t.extraMiddleware && s.push(...t.extraMiddleware);
  const { floatingStyles: u, isPositioned: r } = So(e, n, {
    placement: t.placement ?? "bottom-start",
    strategy: "fixed",
    // Passing `open` lets floating-ui reset `isPositioned` to false when
    // the dropdown closes, so the next open starts hidden again until
    // the first middleware run resolves a position. Without this the
    // reveal-on-positioned trick below only works on the first open.
    open: a,
    // `animationFrame: true` runs the recompute on every rAF while the
    // dropdown is open, so the floating element tracks the trigger
    // smoothly during ancestor scrolls instead of lagging behind scroll
    // events. The per-frame work is fine — the dropdown is short-lived.
    whileElementsMounted: (m, I, O) => Vo(m, I, O, { animationFrame: !0 }),
    // `transform: true` (the default) places the dropdown via
    // `transform: translate()`. We pair it with a short CSS transition
    // on transform in `useFloatingDropdownStyle` below so per-frame
    // position updates ease across small jumps instead of stuttering.
    transform: !0,
    middleware: s
  }), c = A(() => ({
    ...u.value,
    visibility: r.value ? "visible" : "hidden",
    opacity: r.value ? 1 : 0,
    transition: "opacity 80ms ease-out"
  }));
  function f() {
    if (!e.value || !n.value) return;
    const m = getComputedStyle(e.value), I = n.value;
    I.style.font = m.font, I.style.color = m.color;
  }
  return {
    floatingStyles: c,
    teleportTarget: i,
    syncFloatingFont: f
  };
}
const yd = ["id", "disabled", "aria-label"], kd = { class: "multiselect__text" }, wd = { class: "multiselect__list" }, Sd = ["checked", "disabled", "onChange"], xd = { class: "multiselect__option-label" }, Id = {
  key: 0,
  class: "multiselect__no-results"
}, Pd = /* @__PURE__ */ vt({
  __name: "MultiselectInput",
  props: {
    id: {},
    name: {},
    value: {},
    options: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    ariaLabel: {},
    placeholder: {},
    searchable: { type: Boolean, default: !1 }
  },
  emits: ["update:value"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = W(!1), s = W(null), u = W(), r = W(), c = W(null), f = W(""), { floatingStyles: m, teleportTarget: I, syncFloatingFont: O } = Ko(
      u,
      r,
      {
        sizeApply({ rects: de, availableWidth: w, availableHeight: M, elements: ne }) {
          const oe = de.reference.width, R = Math.min(w, Math.max(oe, 400));
          Object.assign(ne.floating.style, {
            maxHeight: `${Math.max(200, M)}px`,
            minWidth: `${oe}px`,
            maxWidth: `${R}px`
          });
        }
      },
      i
    ), b = A(() => {
      const de = t.value;
      return de ? Array.isArray(de) ? new Set(de.map(String)) : new Set(String(de).split(",").filter(Boolean)) : /* @__PURE__ */ new Set();
    }), _ = A(() => t.options.map((de) => ({
      value: de.value,
      label: de.label ?? String(de.value),
      hidden: de.hidden ?? !1,
      disabled: de.disabled ?? !1
    }))), U = A(() => {
      if (!f.value) return _.value;
      const de = f.value.toLowerCase();
      return _.value.filter(
        (w) => (w.label ?? String(w.value)).toLowerCase().includes(de)
      );
    }), me = A(() => {
      const de = b.value.size;
      if (de === 0) return t.placeholder || "All";
      if (de === 1) {
        const w = [...b.value][0];
        return _.value.find((ne) => String(ne.value) === w)?.label || w;
      }
      return `${de} selected`;
    });
    function G() {
      t.disabled || (i.value = !i.value, i.value && (f.value = "", Mt(() => {
        O(), t.searchable && c.value?.focus();
      })));
    }
    function q(de) {
      const w = String(de), M = new Set(b.value);
      M.has(w) ? M.delete(w) : M.add(w), a("update:value", [...M]);
    }
    function ce(de) {
      const w = de.target;
      s.value?.contains(w) || r.value?.contains(w) || (i.value = !1);
    }
    return fn(() => document.addEventListener("click", ce)), li(() => document.removeEventListener("click", ce)), (de, w) => (T(), K("div", {
      class: "multiselect",
      ref_key: "rootRef",
      ref: s
    }, [
      be("button", {
        ref_key: "triggerRef",
        ref: u,
        type: "button",
        class: "multiselect__trigger",
        id: t.id,
        disabled: t.disabled,
        "aria-label": t.ariaLabel,
        onClick: G
      }, [
        be("span", kd, Se(me.value), 1)
      ], 8, yd),
      (T(), Ne(oi, {
        to: E(I),
        disabled: !E(I)
      }, [
        i.value ? (T(), K("div", {
          key: 0,
          ref_key: "floatingRef",
          ref: r,
          class: "multiselect__dropdown",
          style: Gt(E(m))
        }, [
          t.searchable ? ts((T(), K("input", {
            key: 0,
            ref_key: "searchRef",
            ref: c,
            "onUpdate:modelValue": w[0] || (w[0] = (M) => f.value = M),
            type: "text",
            class: "multiselect__search",
            placeholder: "Search...",
            onClick: w[1] || (w[1] = Gn(() => {
            }, ["stop"]))
          }, null, 512)), [
            [xo, f.value]
          ]) : ue("", !0),
          be("div", wd, [
            (T(!0), K(Pt, null, Zt(U.value, (M) => (T(), K("label", {
              key: M.value,
              class: lt(["multiselect__option", { "multiselect__option--zero": M.hidden }])
            }, [
              be("input", {
                type: "checkbox",
                checked: b.value.has(String(M.value)),
                disabled: M.disabled,
                onChange: (ne) => q(M.value)
              }, null, 40, Sd),
              be("span", xd, Se(M.label), 1)
            ], 2))), 128)),
            t.searchable && U.value.length === 0 ? (T(), K("div", Id, " No matches ")) : ue("", !0)
          ])
        ], 4)) : ue("", !0)
      ], 8, ["to", "disabled"]))
    ], 512));
  }
}), Cd = /* @__PURE__ */ sn(Pd, [["__scopeId", "data-v-50e58ba3"]]), Ld = ["id", "name", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Od = ["disabled", "selected"], Ed = {
  key: 0,
  value: " "
}, Ad = ["hidden", "value", "disabled"], Td = /* @__PURE__ */ vt({
  __name: "SelectInput",
  props: {
    options: {},
    selectFirstOptionDisabled: { type: Boolean },
    multiEdit: { type: Boolean },
    numberFormat: {},
    output: {},
    text: {},
    id: {},
    name: {},
    value: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    issue: { type: Boolean },
    ariaLabel: {},
    errorId: {},
    inputClasses: {},
    decimalPlaces: {},
    fractionRoundTo: {}
  },
  emits: ["update:value", "focus", "blur", "validation"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = W(!0), s = W(null), u = A(() => t.options.map((c) => ({
      value: c.value,
      label: c.label?.toUpperCase() ?? c.value?.toString()?.toUpperCase(),
      hidden: c.hidden ?? !1,
      disabled: c.disabled ?? !1
    }))), {
      handleSelectChange: r
    } = pd({
      props: t,
      emit: a,
      isMounted: i
    });
    return (c, f) => (T(), K("select", Kt(c.$attrs, {
      id: t.id,
      name: t.name || t.id,
      ref_key: "inputRef",
      ref: s,
      value: t.value,
      disabled: t.readonly || t.disabled,
      required: t.required,
      "aria-label": t.ariaLabel,
      "aria-invalid": !!t.issue,
      "aria-describedby": t.errorId,
      onChange: f[0] || (f[0] = //@ts-ignore
      (...m) => E(r) && E(r)(...m))
    }), [
      be("option", {
        value: "",
        disabled: t.selectFirstOptionDisabled,
        selected: !t.value
      }, Se(t.text?.select?.toUpperCase() ?? "SELECT"), 9, Od),
      t.multiEdit ? (T(), K("option", Ed, Se(t.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : ue("", !0),
      (T(!0), K(Pt, null, Zt(u.value, (m) => (T(), K("option", {
        key: m.value,
        hidden: m.hidden,
        value: m.value,
        disabled: m.disabled
      }, Se(m.label), 9, Ad))), 128))
    ], 16, Ld));
  }
}), Fd = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "step", "autocomplete", "aria-label", "aria-invalid", "aria-describedby"], Ya = /* @__PURE__ */ vt({
  __name: "TextInput",
  props: {
    type: {},
    inputType: {},
    inputMode: {},
    placeholder: {},
    focus: { type: Boolean },
    allowZero: { type: Boolean },
    min: {},
    max: {},
    default: {},
    debounceMs: {},
    numberFormat: {},
    autocomplete: {},
    id: {},
    name: {},
    value: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    issue: { type: Boolean },
    ariaLabel: {},
    errorId: {},
    inputClasses: {},
    decimalPlaces: {},
    fractionRoundTo: {},
    disableRequiredValidation: { type: Boolean, default: !1 }
  },
  emits: ["update:value", "input", "focus", "blur", "validation", "enter", "escape", "paste"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = W(!0), s = W(null), {
      handleInput: u,
      handleMouseDown: r,
      handleMouseUp: c,
      handleFocus: f,
      handleBlur: m,
      handleKeydown: I,
      handleCompositionStart: O,
      handleCompositionEnd: b,
      handlePaste: _
    } = fd({
      props: t,
      emit: a,
      isMounted: i
    }), U = (me) => {
      const G = me.getBoundingClientRect(), q = window.getComputedStyle(me);
      return G.width > 0 && G.height > 0 && q.display !== "none" && q.visibility !== "hidden";
    };
    return fn(() => {
      ot(t.default) && (t.value === void 0 || t.value === null) && a("update:value", t.default), t.focus && s.value && U(s.value) && Mt(() => s.value.focus());
    }), si(() => {
      i.value = !1;
    }), (me, G) => (T(), K("input", Kt(me.$attrs, {
      id: t.id,
      name: t.name || t.id,
      ref_key: "inputRef",
      ref: s,
      value: t.value,
      inputmode: t.inputMode,
      type: t.inputType,
      placeholder: t.placeholder,
      disabled: t.disabled,
      default: t.default,
      readonly: t.readonly,
      min: t.min,
      max: t.max,
      step: t.inputType === "number" ? t.type === "integer" ? "1" : "any" : void 0,
      autocomplete: t.autocomplete,
      "aria-label": t.ariaLabel,
      "aria-invalid": !!t.issue,
      "aria-describedby": t.errorId,
      onInput: G[0] || (G[0] = //@ts-ignore
      (...q) => E(u) && E(u)(...q)),
      onFocus: G[1] || (G[1] = //@ts-ignore
      (...q) => E(f) && E(f)(...q)),
      onBlur: G[2] || (G[2] = //@ts-ignore
      (...q) => E(m) && E(m)(...q)),
      onKeydown: G[3] || (G[3] = //@ts-ignore
      (...q) => E(I) && E(I)(...q)),
      onCompositionstart: G[4] || (G[4] = //@ts-ignore
      (...q) => E(O) && E(O)(...q)),
      onCompositionend: G[5] || (G[5] = //@ts-ignore
      (...q) => E(b) && E(b)(...q)),
      onPaste: G[6] || (G[6] = //@ts-ignore
      (...q) => E(_) && E(_)(...q)),
      onMousedown: G[7] || (G[7] = //@ts-ignore
      (...q) => E(r) && E(r)(...q)),
      onMouseup: G[8] || (G[8] = //@ts-ignore
      (...q) => E(c) && E(c)(...q))
    }), null, 16, Fd));
  }
}), Nd = ["data-field-id"], $d = {
  key: 0,
  class: "input-label-group"
}, Md = {
  key: 1,
  class: "password-input-wrapper"
}, Dd = ["aria-label"], _d = {
  key: 2,
  class: "clearable-input-wrapper"
}, Vd = ["aria-label"], Rd = ["disabled", "selected"], qd = {
  key: 0,
  value: " "
}, Bd = ["hidden", "value", "disabled"], jd = ["id", "name", "value", "disabled"], Ud = {
  key: 7,
  class: "slider-wrapper"
}, Gd = ["id", "name", "value", "min", "max", "step", "disabled", "readonly"], Wd = ["for"], zd = {
  key: 8,
  class: "clearable-input-wrapper clearable-input-wrapper--textarea"
}, Kd = ["id", "name", "value", "placeholder", "disabled", "readonly", "required", "rows", "autocomplete"], Hd = ["aria-label"], Zd = ["id", "name", "value", "placeholder", "disabled", "readonly", "required", "rows", "autocomplete"], Jd = {
  key: 2,
  class: "help-text"
}, Qd = /* @__PURE__ */ vt({
  inheritAttrs: !1,
  __name: "InputField",
  props: {
    value: { default: null },
    id: { default: "" },
    name: { default: void 0 },
    type: { default: "string" },
    focus: { type: Boolean, default: !1 },
    label: { default: "" },
    enableLabel: { type: Boolean, default: !0 },
    labelPosition: { default: "first" },
    output: { default: null },
    options: { default: () => [] },
    selectFirstOptionDisabled: { type: Boolean, default: !0 },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    allowZero: { type: Boolean, default: !0 },
    trueValue: { default: !0 },
    falseValue: { default: !1 },
    default: { default: null },
    numberFormat: { default: "decimal" },
    shouldConvertNumberFormat: { type: Boolean, default: !0 },
    min: { default: null },
    max: { default: null },
    custom: { type: Boolean, default: !1 },
    multiEdit: { type: Boolean, default: !1 },
    text: { default: () => ({ select: "Select", delete: "Delete" }) },
    issue: { type: Boolean, default: !1 },
    warning: { type: Boolean, default: !1 },
    additional: {},
    debounceMs: {},
    inputClasses: {},
    ariaLabel: {},
    autocomplete: { default: void 0 },
    searchable: { type: Boolean, default: !1 },
    disableRequiredValidation: { type: Boolean, default: !1 },
    rows: { default: 3 },
    info: { default: "" },
    step: {},
    clearable: { type: Boolean, default: !1 }
  },
  emits: ["update:value", "validation", "blur"],
  setup(e, { emit: n }) {
    const t = n, a = e, i = W(null), s = W(null), u = W(!0), r = W(a.numberFormat), c = W(!1), f = A(() => a.custom ? "custom-" + a.id : a.id), m = A(() => `${f.value}-error`), I = A(() => a.label || a.placeholder), O = A(() => De(a.type, a.numberFormat, c.value)), b = A(() => B(a.type, a.numberFormat)), _ = A(() => typeof a.value == "string" && a.value.length > 0), U = A(() => _.value ? fo(a.value) : "#ffffff"), me = (ee) => {
      const we = ee.target.value;
      t("update:value", fo(we));
    }, G = () => {
      t("update:value", null);
    }, q = A(() => {
      const ee = a.value;
      if (typeof ee == "number" && Number.isFinite(ee)) return ee;
      const we = parseFloat(ee);
      return Number.isFinite(we) ? we : typeof a.min == "number" ? a.min : 0;
    }), ce = (ee) => {
      const we = ee.target.value, _e = parseFloat(we);
      t("update:value", Number.isFinite(_e) ? _e : null);
    }, de = A(() => ["string", "integer", "float", "unitDependent", "password", "email", "tel"].includes(a.type)), w = A(() => a.value !== null && a.value !== void 0 && a.value !== "");
    function M() {
      const ee = de.value && ["integer", "float", "unitDependent"].includes(a.type) ? null : "";
      t("update:value", ee);
    }
    const ne = A(() => {
      let ee = a.value;
      if (a.multiEdit && (ee === 0 || ee === 1)) return null;
      if (a.type !== "unitDependent" || !ee) return ee;
      try {
        return re({ v: ee, nf: a.numberFormat });
      } catch {
        return a.numberFormat === "decimal" ? 0 : "0";
      }
    }), oe = A(() => a.options.map((ee) => ({
      value: ee.value,
      label: ee.label || ee.value?.toString(),
      hidden: ee.hidden || !1,
      disabled: ee.disabled || !1
    }))), R = A(() => oe.value.map((ee) => {
      const we = ee.label ? Te(ee.label) : ee.value?.toString();
      return {
        ...ee,
        // Translate the label key first, then uppercase the translated result
        label: we?.toUpperCase() || ee.value?.toString().toUpperCase()
      };
    })), x = A(() => ({
      input: !0,
      issue: a.issue || !u.value,
      warning: a.warning,
      required: a.required,
      disabled: a.disabled
    })), D = A(() => ({
      id: f.value,
      name: a.name,
      value: a.value,
      disabled: a.disabled,
      readonly: a.readonly,
      required: a.required,
      "aria-label": I.value,
      "aria-invalid": !!a.issue,
      "aria-describedby": a.issue ? m.value : void 0
    })), le = A(() => ({
      ...D.value,
      type: a.type,
      inputMode: b.value,
      inputType: O.value,
      placeholder: a.placeholder,
      allowZero: a.allowZero,
      min: a.min,
      max: a.max,
      focus: a.focus,
      numberFormat: a.numberFormat,
      default: a.default,
      disableRequiredValidation: a.disableRequiredValidation,
      autocomplete: a.autocomplete
    })), ie = A(() => ({
      ...D.value,
      trueValue: a.trueValue,
      falseValue: a.falseValue
    })), se = A(() => ({
      ...D.value,
      options: R.value,
      selectFirstOptionDisabled: a.selectFirstOptionDisabled,
      multiEdit: a.multiEdit,
      numberFormat: a.numberFormat,
      text: a.text,
      output: a.output
    })), We = A(() => (a.text?.select || "SELECT").toUpperCase()), Xe = A(() => (a.text?.delete || "DELETE").toUpperCase()), Ie = (ee) => {
      s.value = ee;
    }, Fe = (ee) => a.label && a.enableLabel && a.labelPosition === ee, De = (ee, we, _e) => {
      switch (ee) {
        case "integer":
        case "float":
          return "number";
        case "unitDependent":
          return we === "fraction" ? "text" : "number";
        case "password":
          return _e ? "text" : "password";
        case "email":
          return "email";
        case "tel":
          return "tel";
        default:
          return "text";
      }
    }, B = (ee, we) => {
      if (ee === "unitDependent")
        return we === "fraction" ? "text" : "decimal";
      switch (ee) {
        case "integer":
          return "numeric";
        case "float":
          return "decimal";
        case "email":
          return "email";
        case "tel":
          return "tel";
        case "string":
          return "text";
        default:
          return "text";
      }
    }, J = (ee) => {
      t("update:value", ee);
    }, ke = (ee, we) => {
      ee.valid === void 0 || ee.valid === !0 ? (u.value = !0, t("validation", i.value, ee)) : ee.valid === !1 && ee.message && (u.value = !1, console.warn(`Field validation error for field ${we} - ${ee.message}`), t("validation", i.value, ee));
    }, Re = () => {
      t("blur");
    };
    return Qe(() => a.numberFormat, (ee, we) => {
      if (a.shouldConvertNumberFormat !== !1) {
        if (a.type === "unitDependent" && ee !== we && a.value !== null && a.value !== void 0 && a.value !== "")
          try {
            const _e = re({ v: a.value, nf: ee });
            t("update:value", _e);
          } catch {
            t("update:value", ee === "decimal" ? 0 : "0");
          }
        r.value = ee;
      }
    }), (ee, we) => (T(), K("div", {
      ref_key: "fieldRef",
      ref: i,
      class: lt(["input-wrapper", [x.value, ee.$attrs.class]]),
      "data-field-id": f.value
    }, [
      e.type === "checkbox" ? (T(), K("div", $d, [
        Fe("first") ? (T(), Ne(xa, {
          key: 0,
          id: f.value,
          label: e.label,
          required: e.required
        }, {
          default: tn(() => [
            Ht(ee.$slots, "label", {}, () => [
              nn(Se(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ue("", !0),
        e.type === "checkbox" ? (T(), Ne(hd, Kt({
          key: 1,
          ref: Ie,
          type: "checkbox"
        }, ie.value, {
          value: e.value,
          "onUpdate:value": we[0] || (we[0] = (_e) => t("update:value", _e))
        }), null, 16, ["value"])) : ue("", !0),
        Fe("last") ? (T(), Ne(xa, {
          key: 2,
          id: f.value,
          label: e.label,
          required: e.required
        }, {
          default: tn(() => [
            Ht(ee.$slots, "label", {}, () => [
              nn(Se(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ue("", !0)
      ])) : (T(), K(Pt, { key: 1 }, [
        Fe("first") ? (T(), Ne(xa, {
          key: 0,
          id: f.value,
          label: e.label,
          required: e.required
        }, {
          default: tn(() => [
            Ht(ee.$slots, "label", {}, () => [
              nn(Se(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ue("", !0),
        e.type === "password" ? (T(), K("div", Md, [
          st(Ya, Kt({ ref: Ie }, le.value, {
            name: a.name,
            "input-type": O.value,
            "input-mode": b.value,
            value: ne.value,
            "disable-required-validation": e.disableRequiredValidation,
            onValidation: ke,
            "onUpdate:value": J,
            onBlur: Re
          }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"]),
          be("button", {
            type: "button",
            class: "password-toggle c-btn--unstyled",
            "aria-label": c.value ? "Hide password" : "Show password",
            onClick: we[1] || (we[1] = (_e) => c.value = !c.value)
          }, Se(c.value ? "🙈" : "👁"), 9, Dd)
        ])) : de.value && e.clearable ? (T(), K("div", _d, [
          st(Ya, Kt({ ref: Ie }, le.value, {
            name: a.name,
            "input-type": O.value,
            "input-mode": b.value,
            value: ne.value,
            "disable-required-validation": e.disableRequiredValidation,
            onValidation: ke,
            "onUpdate:value": J,
            onBlur: Re
          }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"]),
          w.value && !e.disabled && !e.readonly ? (T(), K("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--xs c-btn--unstyled field-clear-btn clearable-input__clear",
            "aria-label": E(Te)("actions.clear"),
            title: "Clear",
            onClick: M
          }, "×", 8, Vd)) : ue("", !0)
        ])) : de.value ? (T(), Ne(Ya, Kt({
          key: 3,
          ref: Ie
        }, le.value, {
          name: a.name,
          "input-type": O.value,
          "input-mode": b.value,
          value: ne.value,
          "disable-required-validation": e.disableRequiredValidation,
          onValidation: ke,
          "onUpdate:value": J,
          onBlur: Re
        }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"])) : e.type === "select" ? (T(), Ne(Td, Kt({
          key: 4,
          ref: Ie
        }, se.value, {
          name: a.name,
          "onUpdate:value": we[2] || (we[2] = (_e) => t("update:value", _e))
        }), {
          default: tn(() => [
            be("option", {
              value: "",
              disabled: e.selectFirstOptionDisabled,
              selected: !e.value
            }, Se(We.value), 9, Rd),
            e.multiEdit ? (T(), K("option", qd, Se(Xe.value), 1)) : ue("", !0),
            (T(!0), K(Pt, null, Zt(R.value, (_e) => (T(), K("option", {
              key: _e.value,
              hidden: _e.hidden,
              value: _e.value,
              disabled: _e.disabled
            }, Se(_e.label), 9, Bd))), 128))
          ]),
          _: 1
        }, 16, ["name"])) : e.type === "multiselect" ? (T(), Ne(Cd, {
          key: 5,
          ref: Ie,
          id: f.value,
          name: a.name,
          value: e.value,
          options: oe.value,
          disabled: e.disabled,
          readonly: e.readonly,
          "aria-label": I.value,
          placeholder: e.placeholder,
          searchable: a.searchable,
          "onUpdate:value": we[3] || (we[3] = (_e) => t("update:value", _e))
        }, null, 8, ["id", "name", "value", "options", "disabled", "readonly", "aria-label", "placeholder", "searchable"])) : e.type === "color" ? (T(), K("input", {
          key: 6,
          id: f.value,
          name: a.name || f.value,
          ref: Ie,
          type: "color",
          value: U.value,
          class: lt({ "color-input--empty": !_.value }),
          disabled: e.disabled,
          onChange: me,
          onContextmenu: Gn(G, ["prevent"])
        }, null, 42, jd)) : e.type === "slider" ? (T(), K("div", Ud, [
          be("input", {
            id: f.value,
            name: a.name || f.value,
            ref: Ie,
            type: "range",
            class: "slider-input",
            value: q.value,
            min: a.min ?? 0,
            max: a.max ?? 100,
            step: a.step ?? 1,
            disabled: e.disabled,
            readonly: e.readonly,
            onInput: ce
          }, null, 40, Gd),
          be("output", {
            class: "slider-output",
            for: f.value
          }, Se(q.value), 9, Wd)
        ])) : e.type === "textarea" && e.clearable ? (T(), K("div", zd, [
          be("textarea", {
            id: f.value,
            name: a.name || f.value,
            ref: Ie,
            value: e.value,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            rows: e.rows,
            autocomplete: e.autocomplete,
            onInput: we[4] || (we[4] = (_e) => t("update:value", _e.target.value)),
            onBlur: Re
          }, null, 40, Kd),
          w.value && !e.disabled && !e.readonly ? (T(), K("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--xs c-btn--unstyled field-clear-btn clearable-input__clear",
            "aria-label": E(Te)("actions.clear"),
            title: "Clear",
            onClick: M
          }, "×", 8, Hd)) : ue("", !0)
        ])) : e.type === "textarea" ? (T(), K("textarea", {
          key: 9,
          id: f.value,
          name: a.name || f.value,
          ref: Ie,
          value: e.value,
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: e.readonly,
          required: e.required,
          rows: e.rows,
          autocomplete: e.autocomplete,
          onInput: we[5] || (we[5] = (_e) => t("update:value", _e.target.value)),
          onBlur: Re
        }, null, 40, Zd)) : ue("", !0),
        Fe("last") ? (T(), Ne(xa, {
          key: 10,
          id: f.value,
          label: e.label,
          required: e.required
        }, {
          default: tn(() => [
            Ht(ee.$slots, "label", {}, () => [
              nn(Se(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ue("", !0)
      ], 64)),
      e.info ? (T(), K("small", Jd, Se(e.info), 1)) : ue("", !0),
      Ht(ee.$slots, "default", {}, void 0, !0)
    ], 10, Nd));
  }
}), Ia = /* @__PURE__ */ sn(Qd, [["__scopeId", "data-v-0c816cd2"]]), Yd = {
  key: 0,
  class: "loading-spinner__label"
}, Xd = /* @__PURE__ */ vt({
  __name: "LoadingSpinner",
  props: {
    size: { default: "medium" },
    label: { default: "" },
    block: { type: Boolean, default: !1 },
    fullPage: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (n, t) => (T(), K("div", {
      class: lt(["loading-spinner", [
        `loading-spinner--${e.size}`,
        {
          "loading-spinner--block": e.block || e.fullPage,
          "loading-spinner--full-page": e.fullPage
        }
      ]]),
      role: "status",
      "aria-live": "polite"
    }, [
      t[0] || (t[0] = be("span", {
        class: "loading-spinner__circle",
        "aria-hidden": "true"
      }, null, -1)),
      e.label ? (T(), K("span", Yd, Se(e.label), 1)) : ue("", !0)
    ], 2));
  }
}), Ho = /* @__PURE__ */ sn(Xd, [["__scopeId", "data-v-ef6d8370"]]), ef = {
  key: 0,
  class: "action-bar"
}, tf = { class: "add-custom" }, nf = ["disabled"], af = {
  key: 0,
  class: "extras-row"
}, sf = { class: "c-field-action extras-field-group" }, of = ["disabled", "title", "onClick"], lf = {
  key: 0,
  class: "price"
}, rf = {
  key: 0,
  class: "formula-price"
}, uf = {
  key: 0,
  class: "price-label"
}, cf = /* @__PURE__ */ vt({
  __name: "ExtrasInputs",
  props: {
    translate: { type: Boolean, default: !0 },
    shape: {},
    shapeIndex: { default: 0 },
    extraType: {},
    extraLabel: {},
    allOptions: {},
    labels: {},
    userFriendlyFieldMap: {},
    partColumns: {},
    orientationModel: { default: 0 },
    stockGrain: { default: "n" },
    allowCustomNames: { type: Boolean, default: !1 },
    customNames: { default: () => [] },
    usedNames: { default: () => [] },
    existingTypes: {},
    enablePricing: { type: Boolean, default: !0 },
    priceLabel: { default: "" },
    pricing: { default: () => ({}) },
    formulas: { default: () => ({}) },
    displayNames: { default: () => ({}) },
    locations: { default: () => [] },
    locationGroups: { default: () => [] },
    getPrice: {},
    formatPrice: {},
    getAvailablePricingOptions: {},
    findExtrasPrice: {},
    debug: { type: Boolean, default: !1 },
    catalogueKey: { default: "" },
    catalogueExtraId: { default: "" },
    extraName: { default: "" },
    pricePerLength: { default: void 0 },
    catalogueMaxGap: { default: void 0 },
    cataloguePerSide: { type: Boolean, default: !1 },
    codes: { default: void 0 }
  },
  emits: ["update-all", "set", "custom-name-added", "custom-name-deleted"],
  setup(e, { emit: n }) {
    const t = Bt({
      loader: () => import("./CatalogueBandingExtra-DKVIqzug.js"),
      loadingComponent: () => hr(Ho, { size: "small", label: "Loading banding…" }),
      delay: 200
    }), a = Bt(() => import("./ObjectViewer-D4FhhG99.js")), i = !1, s = e, u = A(() => (s.extraType === "banding" || s.extraType === "finish" || s.extraType === "planing") && !!s.catalogueKey), r = n, {
      mode: c,
      shouldShowAll: f,
      supportsFaces: m,
      supportsSides: I,
      canDelete: O,
      getLocationLabel: b,
      getInputType: _,
      getInputConfigForLocation: U,
      getSelectOptions: me,
      getPriceDisplay: G,
      getCalculatedPrice: q,
      shouldShowDeleteButton: ce,
      getLocationGroup: de,
      isLocationVisible: w,
      handleInputChange: M,
      handleDelete: ne
    } = Qu({
      shape: Wt(s, "shape"),
      extraType: s.extraType,
      allOptions: Wt(s, "allOptions"),
      labels: s.labels,
      userFriendlyFieldMap: s.userFriendlyFieldMap,
      allowCustomNames: s.allowCustomNames,
      customNames: Wt(s, "customNames"),
      enablePricing: s.enablePricing,
      pricing: s.pricing,
      displayNames: Wt(s, "displayNames"),
      orientationModel: s.orientationModel,
      stockGrain: s.stockGrain,
      getAvailablePricingOptions: s.getAvailablePricingOptions,
      getPrice: s.getPrice,
      formatPrice: s.formatPrice,
      findExtrasPrice: s.findExtrasPrice,
      locations: Wt(s, "locations"),
      locationGroups: Wt(s, "locationGroups")
    }), {
      newCustomName: oe,
      canAddCustomName: R,
      isActionMenuDisabled: x,
      customNameActions: D,
      handleAddCustomName: le,
      handleCustomNameAction: ie
    } = Zu({
      extraType: s.extraType,
      customNames: Wt(s, "customNames"),
      usedNames: Wt(s, "usedNames"),
      allowCustomNames: s.allowCustomNames,
      getSelectOptions: me,
      onCustomNameAdded: (Y) => r("custom-name-added", s.extraType, Y),
      onCustomNameDeleted: (Y) => r("custom-name-deleted", s.extraType, Y)
    }), {
      renderLocations: se,
      getInputId: We,
      getDeleteConfig: Xe
    } = Ju({
      extraType: s.extraType,
      allOptions: s.allOptions,
      labels: s.labels,
      shapeIndex: s.shapeIndex || 0,
      enablePricing: s.enablePricing,
      shouldShowAll: f,
      getInputType: _,
      getInputConfig: (Y, Le) => U(Y, Le),
      getAllInputConfig: (Y) => U("all", Y),
      getInputConfigForLocation: U,
      canDelete: O,
      getLocationLabel: b,
      shouldShowDeleteButton: ce,
      locations: Wt(s, "locations"),
      locationGroups: Wt(s, "locationGroups"),
      shape: Wt(s, "shape"),
      orientationModel: s.orientationModel
    }), Ie = W(!1), Fe = W(null), De = W("auto"), B = A(() => `${se.value.filter((Le) => w(Le)).map((Le) => b(Le)).join("|")}::${JSON.stringify(s.allOptions)}`), J = (Y) => [...Y.querySelectorAll(":scope > .c-field-action > .input-wrapper")], ke = async () => {
      const Y = Fe.value;
      if (!Y) return;
      const Le = [...Y.querySelectorAll(".extras-row")];
      De.value = "auto", Le.forEach((et) => J(et).forEach((dt) => dt.style.removeProperty("--col-w"))), await Mt();
      let ze = 0;
      Y.querySelectorAll(".extras-location-label").forEach((et) => {
        ze = Math.max(ze, et.offsetWidth);
      }), ze > 0 && (De.value = `${Math.ceil(ze)}px`);
      const Ae = [], at = Le.map(J);
      at.forEach((et) => et.forEach((dt, ft) => {
        Ae[ft] = Math.max(Ae[ft] ?? 0, dt.offsetWidth);
      })), at.forEach((et) => et.forEach((dt, ft) => {
        dt.style.setProperty("--col-w", `${Math.ceil(Ae[ft])}px`);
      }));
    };
    Qe(B, () => {
      ke();
    }, { flush: "post" });
    const Re = A(() => (Y) => {
      const Le = de(Y);
      return Le === "all" || Le === "faces" || Le === "sides";
    }), ee = A(() => (Y) => ia(s.extraType).includes(Y) ? Pa(Y) === "face" : !1), we = A(() => (Y) => ia(s.extraType).includes(Y) ? Pa(Y) === "side" : !1), _e = (Y) => {
      const Le = G(Y);
      return !!Le && Le !== "N/A";
    };
    function kt(Y) {
      const ze = s.shape?.extras?.[s.extraType];
      if (!ze) return null;
      if (Y.startsWith("side.")) {
        const Ae = Y.replace(/^side\./, ""), at = ze.sides?.[Ae];
        return typeof at == "string" && at ? at : null;
      }
      if (Y.startsWith("face.")) {
        const Ae = Y.replace(/^face\./, ""), at = ze.faces?.[Ae];
        return typeof at == "string" && at ? at : null;
      }
      return null;
    }
    const rt = (Y) => {
      const Le = kt(Y);
      if (!Le) return null;
      const ze = s.formulas?.[Le];
      if (!ze) return null;
      const Ae = Number(s.shape?.l) || 0, at = Number(s.shape?.w) || 0, et = Number(s.shape?.t) || 0, dt = Number(s.shape?.q) || 1, ft = { partL: Ae, partW: at, partT: et, partQuantity: dt }, pt = {}, pn = s.extraType === "banding" ? _c : s.extraType === "finish" ? jc : s.extraType === "planing" ? Kc : [];
      for (const it of pn)
        it.startsWith("order.") && (pt[it] = 0);
      if (s.extraType === "banding" && Y.startsWith("side.")) {
        const it = Y.replace(/^side\./, "");
        return Lc(Ec(it, it === "l1" || it === "l2" ? Ae : at, ft, pt), ze);
      }
      if (s.extraType === "finish" && Y.startsWith("face.")) {
        const it = Y.replace(/^face\./, "");
        return Oc(Ac(it, Ae * at, ft, pt), ze);
      }
      if (s.extraType === "planing") {
        if (Y.startsWith("face.")) {
          const it = Y.replace(/^face\./, "");
          return ro(uo(`face.${it}`, Ae * at, 0, 1, ft, pt), ze);
        }
        if (Y.startsWith("side.")) {
          const it = Y.replace(/^side\./, ""), ln = it === "l1" || it === "l2" ? Ae : at;
          return ro(uo(`side.${it}`, 0, ln, 0, ft, pt), ze);
        }
      }
      return null;
    }, Qt = (Y) => {
      const Le = rt(Y);
      return typeof Le == "number" && Number.isFinite(Le);
    }, ut = (Y) => s.formatPrice ? s.formatPrice(Y) : Y.toFixed(2), on = (Y) => {
      const Le = q(Y);
      return typeof Le == "number" && Number.isFinite(Le) ? Le : void 0;
    }, Yt = (Y) => {
      if (ia(s.extraType).includes(Y))
        return zs(s.shape, Y).quantity;
    }, wn = (Y) => ia(s.extraType).includes(Y) ? zs(s.shape, Y).unit : "m", ct = A(() => (Y) => s.shape.issues?.some((Le) => Le.category?.includes("extras") && Le.field?.some((ze) => ze[0] === "extras" && ze[1] === s.extraType && ze[2] === Y)) ?? !1);
    return fn(() => {
      const Le = s.shape.extras?.[s.extraType];
      if (!Le || typeof Le != "object") {
        Ie.value = !0, console.error(`Missing or invalid ${s.extraType} in shape`);
        return;
      }
      if (m.value && !("faces" in Le)) {
        Ie.value = !0, console.error(`Missing faces property in ${s.extraType}`);
        return;
      }
      if (I.value && !("sides" in Le)) {
        Ie.value = !0, console.error(`Missing sides property in ${s.extraType}`);
        return;
      }
      ke();
    }), (Y, Le) => {
      const ze = ra("Icon");
      return Ie.value ? ue("", !0) : (T(), K("div", {
        key: 0,
        class: lt(["extras group", [e.extraType]]),
        style: Gt({ "grid-column-end": "span " + e.partColumns })
      }, [
        e.allowCustomNames ? (T(), K("div", ef, [
          be("div", tf, [
            st(Ya, {
              id: `${e.extraType}-custom-input-${e.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: E(oe),
              placeholder: `Add ${e.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": Le[0] || (Le[0] = (Ae) => oe.value = Ae || ""),
              onKeydown: Io(E(le), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            be("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !E(R),
              onClick: Le[1] || (Le[1] = //@ts-ignore
              (...Ae) => E(le) && E(le)(...Ae))
            }, " Add ", 8, nf)
          ]),
          st(ed, {
            "menu-items": E(D),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: E(x),
            onAction: E(ie)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : ue("", !0),
        u.value ? (T(), Ne(E(t), {
          key: 1,
          shape: s.shape,
          "shape-index": s.shapeIndex,
          "extra-type": s.extraType,
          "catalogue-key": s.catalogueKey,
          "extra-id": s.catalogueExtraId,
          "extra-name": s.extraName,
          locations: s.locations,
          "price-per-length": s.pricePerLength,
          pricing: s.pricing,
          "price-label": s.priceLabel,
          "format-price": s.formatPrice,
          "max-gap": s.catalogueMaxGap,
          "per-side": s.cataloguePerSide,
          "orientation-model": s.orientationModel,
          debug: s.debug || i
        }, null, 8, ["shape", "shape-index", "extra-type", "catalogue-key", "extra-id", "extra-name", "locations", "price-per-length", "pricing", "price-label", "format-price", "max-gap", "per-side", "orientation-model", "debug"])) : (T(), K("div", {
          key: 2,
          ref_key: "gridRef",
          ref: Fe,
          class: lt(["inputs extras-grid grid-layout", { "has-pricing": e.enablePricing }]),
          style: Gt({ "--extras-label-w": De.value })
        }, [
          (T(!0), K(Pt, null, Zt(E(se), (Ae) => (T(), K(Pt, { key: Ae }, [
            E(w)(Ae) ? (T(), K("div", af, [
              be("div", sf, [
                be("label", {
                  class: lt(["extras-location-label", {
                    "group-label": Re.value(Ae),
                    "face-label": ee.value(Ae),
                    "side-label": we.value(Ae),
                    "has-validation-issue": ct.value(Ae)
                  }])
                }, Se(E(b)(Ae)), 3),
                (T(!0), K(Pt, null, Zt(e.allOptions, (at, et) => (T(), Ne(Ia, Kt({
                  key: `${Ae}-${et}`,
                  id: E(We)(Ae, et),
                  "data-field": `${e.extraType}-${Ae}`,
                  "data-index": e.shapeIndex,
                  "data-option-index": et
                }, { ref_for: !0 }, E(U)(Ae, et), {
                  "onUpdate:value": (dt) => E(M)(Ae, et, dt)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"]))), 128)),
                E(Xe)(Ae).show ? (T(), K("button", {
                  key: 0,
                  type: "button",
                  class: "c-btn c-btn--delete",
                  disabled: !E(Xe)(Ae).enabled,
                  title: E(Xe)(Ae).ariaLabel,
                  onClick: (at) => E(ne)(Ae)
                }, [
                  st(ze, { icon: ["fass", "trash"] })
                ], 8, of)) : ue("", !0)
              ]),
              e.enablePricing ? (T(), K("div", lf, [
                Qt(Ae) ? (T(), K("span", rf, [
                  nn(Se(ut(rt(Ae))), 1),
                  e.priceLabel ? (T(), K("span", uf, Se(e.priceLabel), 1)) : ue("", !0)
                ])) : _e(Ae) ? (T(), Ne(rd, {
                  key: 1,
                  "price-per-unit": on(Ae),
                  quantity: Yt(Ae),
                  "quantity-unit": wn(Ae),
                  "price-label": e.priceLabel,
                  "format-price": s.formatPrice
                }, null, 8, ["price-per-unit", "quantity", "quantity-unit", "price-label", "format-price"])) : ue("", !0)
              ])) : ue("", !0)
            ])) : ue("", !0)
          ], 64))), 128))
        ], 6)),
        s.debug || i ? (T(), Ne(E(a), {
          key: 3,
          title: `${e.extraType} debug`,
          data: [{
            extraType: e.extraType,
            mode: E(c),
            catalogueKey: s.catalogueKey,
            useCataloguePicker: u.value,
            allOptions: s.allOptions,
            labels: s.labels,
            pricing: s.pricing,
            displayNames: s.displayNames,
            enablePricing: s.enablePricing,
            shapeMaterial: s.shape?.material,
            shapeStockDbId: s.shape?.stock?.db_id,
            stockExtras: s.shape?.stock?.customData?.stockExtras,
            hasGetPrice: !!s.getPrice,
            hasFindExtrasPrice: !!s.findExtrasPrice,
            locationsProp: s.locations,
            locationGroupsProp: s.locationGroups
          }],
          paths: [`${e.extraType}`],
          root: !1
        }, null, 8, ["title", "data", "paths"])) : ue("", !0)
      ], 6));
    };
  }
}), df = /* @__PURE__ */ sn(cf, [["__scopeId", "data-v-d50e6e8d"]]);
function Rt(e) {
  return typeof e == "string" && e.trim().length > 0 ? e.trim() : "";
}
function ff(e) {
  const t = (Array.isArray(e.availableThicknesses) && e.availableThicknesses.length > 0 ? e.availableThicknesses : Array.isArray(e.t) ? e.t : e.t != null ? [e.t] : []).map((a) => typeof a == "number" ? a : Number(a)).filter((a) => Number.isFinite(a));
  return [...new Set(t)].sort((a, i) => a - i);
}
function Zo(e, n, t, a, i) {
  const s = [], f = (!!i && !!e && e.toUpperCase() === i.toUpperCase() ? "" : e) || (n && !!i ? "" : a);
  if (n && s.push(n), f) {
    const m = n.toLowerCase(), I = f.toLowerCase();
    n && m.includes(I) || (n && I.startsWith(m + " ") ? s.push(f.slice(n.length).trimStart()) : s.push(f));
  }
  if (t) {
    const m = t.toLowerCase(), I = m.split(/\s+/)[0] ?? "", O = `${n} ${f}`.toLowerCase();
    !(O.includes(m) || I && O.split(/\s+/).includes(I)) && (f || n) && s.push(t);
  }
  return s;
}
function pf(e, n, t, a, i, s, u, r) {
  const c = [];
  n && c.push(n);
  const f = Zo(e, t, a, i, s);
  for (const m of f)
    (!n || !n.toLowerCase().includes(m.toLowerCase())) && c.push(m);
  return c.length > 0 ? c.join(" ") : u || r;
}
function mf(e, n, t, a, i, s, u) {
  const r = Zo(e, n, t, a, i);
  return r.length > 0 ? r.join(" ") : s || u;
}
function la(e, n = {}) {
  const t = n.fallback ?? "(unnamed)";
  if (!e)
    return {
      name: t,
      fullLabel: t,
      productLabel: t,
      groupKey: "",
      thicknesses: []
    };
  const a = Rt(e.name), i = Rt(e.brand) || Rt(n.inheritFrom?.brand), s = Rt(e.material) || Rt(n.inheritFrom?.material), u = Rt(e.variant) || Rt(n.inheritFrom?.variant), r = Rt(e.finish), c = Rt(e.code), f = Rt(e.displayName), m = [i, s].filter(Boolean).join(" · ");
  let I;
  m && u ? I = `${m} → ${u}` : m ? I = m : u && (I = u);
  let O;
  a ? O = a : c ? O = c : u && !s && !i ? O = u : s && !u ? O = s : i && !u && !s ? O = i : O = t;
  const b = pf(
    a,
    i,
    u,
    r,
    s,
    c,
    f,
    t
  ), _ = mf(
    a,
    u,
    r,
    s,
    c,
    f,
    t
  ), U = (() => {
    if (c && !(!a && c.toUpperCase() === O.toUpperCase()) && c.toUpperCase() !== _.toUpperCase())
      return c;
  })(), me = `${i.toUpperCase()}|${u.toUpperCase()}|${(a || s).toUpperCase()}`, G = Rt(e.shortDescription) || Rt(e.description) || void 0, q = Rt(e.imageUrl) || void 0;
  return {
    hierarchy: I,
    name: O,
    code: U,
    fullLabel: b,
    productLabel: _,
    groupKey: me,
    brand: i || void 0,
    material: s || void 0,
    variant: u || void 0,
    finish: r || void 0,
    description: G,
    imageUrl: q,
    thicknesses: ff(e)
  };
}
let jt = null;
function gf(e, n) {
  return jt = vf(e, n), jt;
}
function hf(e) {
  if (!jt) throw new Error("Pagination not initialized");
  return {
    items: A(() => jt.getItems(e)),
    currentPage: A(() => jt.getCurrentPage(e)),
    currentIndex: A(() => jt.getCurrentIndex(e)),
    totalPages: A(() => jt.paginatedArrays.value.get(e)?.totalPages || 0),
    itemsPerPage: A(() => jt.getItemsPerPage(e)),
    resetPagination: () => jt.resetPagination(e),
    nextPage: () => jt.nextPage(e),
    previousPage: () => jt.previousPage(e),
    goToPage: (n) => jt.goToPage(e, n),
    setItemsPerPage: (n) => jt.setItemsPerPage(e, n)
  };
}
function Hg(e, n) {
  const t = hf(e);
  return t.setItemsPerPage(n), t;
}
function vf(e, n) {
  const t = /* @__PURE__ */ new Map(), a = W({}), i = (w, M) => {
    if ("value" in M) {
      const ne = n[w]?.alwaysInclude;
      Qe(
        () => {
          const oe = M.value;
          return ne ? oe.filter((R) => !ne(R)).length : oe.length;
        },
        (oe, R) => {
          const x = a.value[w];
          if (!x) return;
          const D = Math.ceil(oe / x.itemsPerPage);
          if (oe > R) {
            const le = Math.ceil(oe / x.itemsPerPage), ie = x.currentPage * x.itemsPerPage;
            oe > ie && x.currentPage < le && (x.currentPage = le);
          } else oe < R && x.currentPage > D && (x.currentPage = Math.max(1, D));
        },
        { immediate: !1 }
      );
    }
  };
  Object.entries(e).forEach(([w, M]) => {
    const ne = n[w];
    if (!ne)
      throw new Error(`Missing pagination options for array: ${w}`);
    t.set(w, M), a.value[w] = {
      currentPage: ne.initialPage || 1,
      itemsPerPage: ne.itemsPerPage
    }, i(w, M);
  });
  const s = (w, M) => {
    const ne = a.value[w];
    if (!ne) return;
    const oe = u(w);
    ne.currentPage = Math.max(1, Math.min(M, oe));
  }, u = (w) => {
    const M = t.get(w);
    if (!M) return 0;
    const ne = E(M), oe = a.value[w];
    if (!oe) return 0;
    const R = n[w], x = R?.alwaysInclude ? ne.filter((D) => !R.alwaysInclude(D)) : ne;
    return Math.max(1, Math.ceil(x.length / oe.itemsPerPage));
  }, r = A(() => {
    const w = /* @__PURE__ */ new Map();
    return t.forEach((M, ne) => {
      const oe = E(M), R = Array.isArray(oe) ? oe : [], x = a.value[ne], D = n[ne], le = D?.alwaysInclude ? R.filter(D.alwaysInclude) : [], ie = D?.alwaysInclude ? R.filter((Fe) => !D.alwaysInclude(Fe)) : R, se = Math.ceil(ie.length / x.itemsPerPage), We = (x.currentPage - 1) * x.itemsPerPage, Xe = We + x.itemsPerPage, Ie = [
        ...le,
        ...ie.slice(We, Xe)
      ];
      w.set(ne, {
        items: Ie,
        currentPage: x.currentPage,
        totalPages: se,
        isLastPage: x.currentPage >= se,
        hasNextPage: x.currentPage < se,
        hasPreviousPage: x.currentPage > 1
      });
    }), w;
  });
  return {
    paginatedArrays: r,
    addArray: (w, M, ne) => {
      t.set(w, M), a.value[w] = {
        currentPage: ne.initialPage || 1,
        itemsPerPage: ne.itemsPerPage
      }, n[w] = ne, i(w, M);
    },
    removeArray: (w) => {
      t.delete(w);
      const M = { ...a.value };
      delete M[w], a.value = M;
    },
    hasArray: (w) => t.has(w),
    clearArrays: () => {
      t.clear(), a.value = {};
    },
    goToPage: s,
    nextPage: (w) => {
      const M = a.value[w];
      M && s(w, M.currentPage + 1);
    },
    previousPage: (w) => {
      const M = a.value[w];
      M && s(w, M.currentPage - 1);
    },
    resetPagination: (w) => {
      if (w) {
        const M = a.value[w];
        M && (M.currentPage = 1);
      } else
        Object.values(a.value).forEach((M) => {
          M.currentPage = 1;
        });
    },
    getCurrentPage: (w) => a.value[w]?.currentPage || 1,
    getCurrentIndex: (w) => {
      const M = a.value[w];
      return M ? (M.currentPage - 1) * M.itemsPerPage : 0;
    },
    getItemsPerPage: (w) => {
      const M = a.value[w];
      if (!M) throw new Error(`No pagination state found for key: ${w}`);
      return M.itemsPerPage;
    },
    setItemsPerPage: (w, M) => {
      const ne = a.value[w];
      ne && (ne.itemsPerPage = M, s(w, ne.currentPage));
    },
    getStartIndex: (w) => {
      const M = a.value[w];
      return M ? (M.currentPage - 1) * M.itemsPerPage : 0;
    },
    getItems: (w) => r.value.get(w)?.items || []
  };
}
const mo = W({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function Jo() {
  return {
    progress: mo,
    reset: () => {
      mo.value = {
        queued: !1,
        started: !1,
        stockCount: 0,
        shapeCount: 0,
        resultCount: 0,
        complete: !1
      };
    }
  };
}
let Ua = null;
function bf() {
  const e = W(null), n = W(null), t = W(null), a = ea([]), i = ea([]), s = ea([]), u = ea([]), r = W([]), c = W(null), f = ea([]), m = W(null), I = W(null), O = W({});
  return {
    // All state
    jobId: e,
    saw: n,
    activeStockAutoId: t,
    shapeList: a,
    stockList: i,
    cutList: s,
    segmentList: u,
    offcuts: r,
    metadata: c,
    unusableShapes: f,
    currentCutIndex: m,
    activeShape: I,
    cuttingPlans: O,
    r: {
      saw: n,
      activeStockAutoId: t,
      jobId: e,
      shapeList: a,
      stockList: i,
      cutList: s,
      segmentList: u,
      offcuts: r,
      unusableShapes: f,
      metadata: c,
      currentCutIndex: m,
      cuttingPlans: O
    }
  };
}
function yf() {
  if (Ua) return Ua;
  const e = bf(), n = A(() => e.activeStockAutoId.value ? ie(e.activeStockAutoId.value) : []), t = A(() => !e.activeStockAutoId.value || !e.stockList.value?.length ? null : le(e.activeStockAutoId.value)), a = A(() => !t.value || !e.cutList.value?.length ? [] : We(t.value.autoId)), i = A(() => !t.value || !e.segmentList.value?.length ? [] : se(e.activeStockAutoId.value)), s = A(() => e.stockList.value?.length ? Xe(e.stockList.value) : []), u = A(() => e.shapeList.value.filter((B) => B.added)), r = A(() => e.shapeList.value?.length ? e.shapeList.value.filter((B) => !B.added) : []), c = A(() => e.shapeList.value?.length ? Iu(e.shapeList.value) : []), f = A(() => e.shapeList.value?.length ? e.shapeList.value.filter((B) => !B.duplicate) : []), m = A(() => f.value.filter((B) => B.added)), I = A(() => e.stockList.value?.length ? e.stockList.value.filter((B) => B.used && !B.duplicate) : []), O = A(() => I.value.filter((B) => B.used)), b = A(() => e.cutList.value?.length ? a.value.reduce((B, J) => B + J.area, 0) : 0), _ = A(() => !e.stockList.value?.length || !t.value ? 0 : t.value ? t.value.area : 0), U = A(() => !e.shapeList.value?.length || !n.value ? 0 : n.value ? n.value.reduce((B, J) => B + J.area, 0) : 0), me = A(() => !e.cutList.value?.length || !t.value ? null : t.value.cutType), G = A(() => e.stockList.value?.length ? e.stockList.value.filter((J) => J.used && !J.isStacked) : []), q = A(() => e.stockList.value?.length ? Ro(t.value, e.stockList.value) : 0), ce = A(() => {
    if (!e.stockList.value?.length) return 0;
    let B = _.value ? (b.value + U.value) / _.value : null;
    return B > 1 && (B = 1), B;
  }), de = A(() => e.activeStockAutoId.value && e.cuttingPlans.value?.[e.activeStockAutoId.value] || null), w = () => {
    e.saw.value = null, e.shapeList.value.length = 0, e.stockList.value.length = 0, e.cutList.value.length = 0, e.segmentList.value.length = 0, e.offcuts.value.length = 0, e.unusableShapes.value.length = 0, e.currentCutIndex.value = null;
  }, M = () => {
    e.saw.value = null, e.activeStockAutoId.value = null, e.activeShape.value = null, e.metadata.value = null, e.shapeList.value = [], e.stockList.value = [], e.cutList.value = [], e.segmentList.value = [], e.offcuts.value = [], e.currentCutIndex.value = null, e.unusableShapes.value = [], e.cuttingPlans.value = {};
  }, ne = (B, J) => {
    B in this && this[B]?.sort(Dr[J]);
  }, oe = (B) => {
    tt(B);
  }, R = () => {
    tt(e.shapeList);
  }, x = () => {
    tt(e.stockList);
  }, D = (B) => {
    if (!B?.shapeList?.some((J) => J.added)) {
      M();
      return;
    }
    e.metadata.value = B.metadata, e.unusableShapes.value = B.unusableShapes || [];
    try {
      B?.saw && (e.saw.value = new Ui(B.saw));
      const J = Mu(B, {
        preventAutoRotation: !0
      });
      e.stockList.value = J.stockList, e.shapeList.value = J.shapeList, e.cutList.value = J.cutList, e.segmentList.value = J.segmentList, e.offcuts.value = J.offcuts, e.cuttingPlans.value = B.cuttingPlans || {}, ["saw", "stockList", "shapeList", "cutList", "segmentList"].forEach((Re) => tt(e[Re])), e.activeStockAutoId.value = Xe(e.stockList.value)?.[0]?.autoId || null;
    } catch (J) {
      console.error("Error updating from result", J);
    }
  }, le = (B) => e.stockList.value?.length ? e.stockList.value.find((J) => J.autoId === B) : null, ie = (B) => e.shapeList.value?.length ? e.shapeList.value.filter((J) => J.added && J?.stock?.autoId === B) : [], se = (B) => e.segmentList.value?.length ? e.segmentList.value.filter((ke) => ke?.stock?.autoId === B) : [], We = (B) => {
    const J = e?.cutList?.value;
    return !J && !J.length ? [] : J.filter((ke) => ke?.stock?.autoId === B).sort((ke, Re) => ke?.guillotineState?.order - Re?.guillotineState?.order);
  }, Xe = (B) => B?.length ? B.filter((J) => J.used === !0) : [], Ie = (B) => {
    e.activeStockAutoId.value !== B && (e.activeShape.value = null, e.activeStockAutoId.value = B);
  }, Fe = (B) => B.id.endsWith(".0") ? B.autoId : e.shapeList.value.find((ke) => ke.parentId === B.parentId && ke.id.endsWith(".0"))?.autoId || B.autoId, De = () => {
    e.saw.value = new Ui({
      bladeWidth: 3,
      stockType: "sheet",
      cutType: "beam",
      cutPreference: "l"
    });
    const B = {
      autoId: "1.0",
      l: 2440,
      w: 1220,
      t: 18,
      q: 1,
      used: !0
    }, J = new _r(B), ke = new Ks({
      l: 500,
      w: 500,
      t: 18,
      q: 1,
      x: 0,
      y: 0,
      added: !0,
      id: "1.0"
    });
    ke.addToStock(J);
    const Re = new Ks({
      l: 400,
      w: 400,
      t: 18,
      q: 1,
      x: 500,
      y: 0,
      added: !0,
      id: "2.0"
    });
    Re.addToStock(J);
    const ee = (rt) => ({
      ptxData: {
        function: 1,
        order: rt,
        isDummy: !1,
        isFirst: rt === 0,
        isLast: !1,
        technologyTable: "01"
      }
    }), _e = [
      { x: 0, y: 0, l: 500, vertical: !0, stock: J, ...ee(0) },
      { x: 500, y: 0, l: 500, vertical: !1, stock: J, ...ee(1) },
      { x: 500, y: 500, l: 400, vertical: !0, stock: J, ...ee(2) },
      { x: 900, y: 500, l: 400, vertical: !1, stock: J, ...ee(3) }
    ].map((rt) => new Vr(rt)), kt = new Rr({
      l: 1500,
      w: 720,
      t: 18,
      x: 940,
      y: 0
    });
    try {
      kt.addToStock?.(J);
    } catch {
    }
    e.stockList.value = [J], e.shapeList.value = [ke, Re], e.cutList.value = _e, e.offcuts.value = [kt], e.activeStockAutoId.value = J.autoId;
  };
  return Ua = {
    // all result items for convenience
    r: e.r,
    // state
    activeStockAutoId: e.activeStockAutoId,
    saw: e.saw,
    shapeList: e.shapeList,
    stockList: e.stockList,
    cutList: e.cutList,
    segmentList: e.segmentList,
    offcuts: e.offcuts,
    unusableShapes: e.unusableShapes,
    currentCutIndex: e.currentCutIndex,
    activeShape: e.activeShape,
    cuttingPlans: e.cuttingPlans,
    // computed
    addedShapes: u,
    activeShapes: n,
    unplacedShapes: r,
    uniqueShapes: f,
    uniqueAddedShapes: m,
    unplacedShapeTally: c,
    uniqueStock: I,
    uniqueUsedStock: O,
    activeStock: t,
    activeCuts: a,
    activeCutsArea: b,
    activeCutType: me,
    usedStock: s,
    stackedStock: G,
    activeStockArea: _,
    activeShapeArea: U,
    activeStockStackCount: q,
    activeTotalArea: ce,
    activeSegments: i,
    cuttingPlan: de,
    // methods
    reset: w,
    clear: M,
    createTestData: De,
    sortItems: ne,
    update: oe,
    updateShapes: R,
    updateStock: x,
    updateFromResult: D,
    getStock: le,
    getShapes: ie,
    getSegments: se,
    getCuts: We,
    setActiveStockAutoId: Ie,
    getInputAutoId: Fe
  }, Ua;
}
const kf = pu(() => $({
  // Full stock - purchase entire sheet without cutting (first field after ID)
  fullStock: vn(ae().default(!1), {
    label: "fields.fullStock",
    propertyPath: "fullStock",
    group: "properties",
    order: -1
  }),
  // Material field
  material: vn(d().optional(), {
    label: "fields.material",
    placeholder: "fields.material",
    propertyPath: "material",
    output: "string",
    group: "properties",
    order: 0
  }),
  // Thickness field
  t: vn(Ze([S(), d()]).optional(), {
    label: "fields.t",
    propertyPath: "t",
    group: "dimensions",
    order: 0,
    allowZero: !1
  }),
  // Length field
  l: Hs({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !1
  }),
  // Width field
  w: Hs({
    label: "fields.w",
    placeholder: "fields.w",
    allowZero: !1
  }),
  // Quantity field
  q: vn(S().int().positive().default(1), {
    label: "fields.q",
    placeholder: "fields.q",
    propertyPath: "q",
    group: "general",
    order: 1,
    step: 1
  }),
  // Name field
  name: qr({
    placeholder: "fields.name"
  }),
  // Orientation lock field
  orientationLock: vn(an(["n", "l", "w"]).default("n").optional(), {
    label: "fields.orientationLock",
    propertyPath: "orientationLock",
    group: "properties",
    order: 3,
    options: [
      { value: "n", label: "fields.orientationLock.free" },
      { value: "l", label: "fields.orientationLock.length" },
      { value: "w", label: "fields.orientationLock.width" }
    ]
  }),
  // Banding button
  banding: vn(ae().default(!1), {
    label: "fields.banding",
    propertyPath: "banding",
    group: "extras",
    order: 0
  }),
  // Finish options
  finish: vn($({
    enabled: ae().default(!1),
    type: d().optional(),
    sides: S().optional()
  }).optional(), {
    label: "fields.finish",
    propertyPath: "finish",
    group: "extras",
    order: 2
  }),
  // Machining options
  machining: vn($({
    enabled: ae().default(!1),
    operations: te(xe()).optional()
  }).optional(), {
    label: "fields.machining",
    propertyPath: "machining",
    group: "extras",
    order: 3
  }),
  // Planing button
  planing: vn(ae().default(!1), {
    label: "fields.planing",
    propertyPath: "planing",
    group: "extras",
    order: 4
  })
  // Image upload
  /* imageUpload: field(
      z.object( {
          enabled: z.boolean().default( false ),
          url: z.string().optional(),
          file: z.any().optional()
      } ).optional(),
      {
          label: 'image_upload',
          propertyPath: 'imageUpload',
          group: 'extras',
          order: 4
      }
  ) */
}));
function wf(e) {
  const n = kf._def.getter();
  return e === "linear" ? n.omit({
    orientationLock: !0,
    banding: !0,
    machining: !0,
    planing: !0
  }) : e === "roll" ? n.omit({
    banding: !0,
    machining: !0,
    planing: !0
  }) : n;
}
class Sf {
  /**
   * Generate field metadata from a Zod schema
   * @param schema - The Zod schema to extract fields from
   * @param options - Options for field generation
   */
  generateFields(n, t) {
    const a = [], i = this.unwrapSchema(n);
    if (!this.isZodObject(i))
      return console.warn("Schema is not a ZodObject:", i), a;
    const s = i.shape;
    for (const [u, r] of Object.entries(s)) {
      if (u.startsWith("_") || this.isComputedField(r))
        continue;
      if (u === "trim" && this.isTrimField(r)) {
        const f = this.generateTrimFields(r);
        a.push(...f);
        continue;
      }
      const c = this.extractFieldMetadata(u, r);
      c && a.push(c);
    }
    return t?.sortByOrder ? a.sort((u, r) => (u.order || 999) - (r.order || 999)) : a;
  }
  /**
   * Extract metadata from a single field
   */
  extractFieldMetadata(n, t) {
    let a = t._metadata;
    const i = this.unwrapField(t);
    if (a || (a = i._metadata), a) {
      if (a.hidden)
        return null;
      const c = {
        name: n,
        type: a.type || this.getFieldType(i),
        label: a.label || this.formatLabel(n),
        description: a.description,
        required: !this.isOptional(t),
        defaultValue: a.defaultValue ?? this.getDefaultValue(t),
        ...a
      };
      return this.extractTypeSpecificMetadata(c, i), c;
    }
    const s = i._def?.description, u = this.parseFieldDescription(s), r = {
      name: n,
      type: this.getFieldType(i),
      label: u.label || this.formatLabel(n),
      description: u.description,
      required: !this.isOptional(t),
      defaultValue: this.getDefaultValue(t),
      ...u
    };
    return this.extractTypeSpecificMetadata(r, i), r;
  }
  /**
   * Get the field type from a Zod schema
   */
  getFieldType(n) {
    const t = this.unwrapField(n);
    if (t instanceof Xs) {
      const a = t._def?.options || [];
      for (const i of a)
        if (i instanceof oa)
          return this.isIntegerNumber(i) ? "integer" : "number";
    }
    return t instanceof oa ? this.isIntegerNumber(t) ? "integer" : "number" : t instanceof mu ? "string" : t instanceof gu ? "boolean" : t instanceof eo || t._def?.typeName === "ZodNativeEnum" ? "enum" : t instanceof hu ? "array" : t instanceof Ba ? "object" : "string";
  }
  /**
   * Extract constraints from a ZodNumber schema
   */
  extractNumberConstraints(n, t) {
    const a = t, i = (u) => u === Number.MAX_SAFE_INTEGER || u === Number.MIN_SAFE_INTEGER;
    if (a.minValue !== void 0 && a.minValue !== -1 / 0 && !i(a.minValue)) {
      n.min = a.minValue;
      const u = t._def?.checks?.find(
        (r) => r.constructor?.name === "$ZodCheckGreaterThan"
      );
      if (u && a.minValue === 0) {
        const r = u._zod?.def?.inclusive ?? u.inclusive;
        n.allowZero = r === !0;
      } else
        n.allowZero = a.minValue === 0;
    }
    a.maxValue !== void 0 && a.maxValue !== 1 / 0 && !i(a.maxValue) && (n.max = a.maxValue);
    const s = t._def?.checks || [];
    for (const u of s) {
      let r, c, f = !0;
      if (u.kind)
        r = u.kind, c = u.value, f = u.inclusive !== void 0 ? u.inclusive : !0;
      else if (u?._zod?.def) {
        const m = u._zod.def;
        r = m.check, c = m.value, f = m.inclusive !== void 0 ? m.inclusive : !0;
      } else
        continue;
      if (r === "min" || r === "greater_than")
        n.min === void 0 && (n.min = r === "greater_than" && !f ? c + 1e-6 : c, n.allowZero = n.min === 0);
      else if (r === "max" || r === "less_than")
        n.max === void 0 && (n.max = r === "less_than" && !f ? c - 1e-6 : c);
      else if (r === "int")
        n.step = 1;
      else if (r === "number_format") {
        const m = u?._zod?.def?.format ?? u?.format;
        (m === "safeint" || m === "int") && (n.step = 1);
      }
    }
  }
  /**
   * Extract type-specific metadata
   */
  extractTypeSpecificMetadata(n, t) {
    if (t instanceof Xs) {
      const a = t._def?.options || [];
      for (const i of a)
        if (i instanceof oa) {
          this.extractNumberConstraints(n, i), n.type = "number";
          break;
        }
    } else t instanceof oa && this.extractNumberConstraints(n, t);
    if (!n.options) {
      if (t instanceof eo) {
        const a = t._def || {}, i = a.entries ?? a.values ?? t.options;
        Array.isArray(i) ? n.options = i.map((s) => ({
          value: s,
          label: this.formatLabel(String(s))
        })) : i && typeof i == "object" ? n.options = Object.values(i).map((s) => ({
          value: s,
          label: this.formatLabel(String(s))
        })) : n.options = [];
      }
      if (t._def?.typeName === "ZodNativeEnum") {
        const a = t._def?.values || {};
        n.options = Object.entries(a).filter(([i]) => isNaN(Number(i))).map(([i, s]) => ({
          value: s,
          label: this.formatLabel(i)
        }));
      }
    }
  }
  /**
   * Parse field description for metadata
   */
  parseFieldDescription(n) {
    if (!n) return {};
    const t = {}, a = n.match(/^(.+?)\s*\[(.+?)\]\s*$/);
    if (a) {
      t.description = a[1].trim();
      const i = a[2].split(",");
      for (const s of i) {
        const [u, r] = s.split(":").map((c) => c.trim());
        u === "group" && (t.group = r), u === "order" && (t.order = parseInt(r)), u === "units" && (t.units = r), u === "hidden" && (t.hidden = r === "true"), u === "readonly" && (t.readonly = r === "true"), u === "placeholder" && (t.placeholder = r);
      }
    } else
      t.description = n;
    return t;
  }
  /**
   * Format a field name as a label
   */
  formatLabel(n) {
    return n.replace(/([A-Z])/g, " $1").replace(/^./, (t) => t.toUpperCase()).replace(/_/g, " ").trim();
  }
  /**
   * Check if a field is optional
   */
  isOptional(n) {
    if (n instanceof Oi || n instanceof Ei)
      return !0;
    if (n.constructor?.name === "ZodPipe" || n._def?.type === "pipe") {
      const t = n._def?.out, a = n._def?.in;
      if (t) {
        const i = this.isOptional(t);
        if (i) return i;
      }
      if (a) {
        const i = this.isOptional(a);
        if (i) return i;
      }
    }
    return n._def?.typeName === "ZodEffects" ? this.isOptional(n._def?.schema) : n instanceof Ai ? this.isOptional(n._def?.innerType) : !1;
  }
  /**
   * Check if a field is computed
   */
  isComputedField(n) {
    return n?._def?.typeName === "ZodComputed" || n?._def?.isComputed === !0;
  }
  /**
   * Unwrap schema from effects/transforms
   */
  unwrapSchema(n) {
    if (n._def?.typeName === "ZodEffects")
      return this.unwrapSchema(n._def?.schema);
    if (n._def?.typeName === "ZodLazy" || n._def?.type === "lazy") {
      const t = n._def?.getter;
      if (typeof t == "function")
        return this.unwrapSchema(t());
    }
    return n;
  }
  /**
   * Unwrap a field schema
   */
  unwrapField(n) {
    const t = n._def?.typeName, a = n.constructor.name;
    if (n instanceof Oi || n instanceof Ei)
      return this.unwrapField(n._def?.innerType);
    if (n instanceof Ai || a === "ZodDefault")
      return this.unwrapField(n._def?.innerType);
    if (t === "ZodEffects")
      return this.unwrapField(n._def?.schema);
    if (a === "ZodPipe" || n._def?.type === "pipe") {
      const i = n._def?.out;
      if (i)
        return this.unwrapField(i);
    }
    return n;
  }
  /**
   * Get default value from schema
   */
  getDefaultValue(n) {
    if (n instanceof Ai) {
      const t = n._def?.defaultValue;
      return typeof t == "function" ? t() : t;
    }
    if (n.constructor?.name === "ZodPipe" || n._def?.type === "pipe") {
      const t = n._def?.in;
      if (t)
        return this.getDefaultValue(t);
    }
    if (n instanceof Oi || n instanceof Ei) {
      const t = n._def?.innerType;
      if (t)
        return this.getDefaultValue(t);
    }
    if (n._def?.typeName === "ZodEffects") {
      const t = n._def?.schema;
      if (t)
        return this.getDefaultValue(t);
    }
    if ("_def" in n && "defaultValue" in n._def) {
      const t = n._def?.defaultValue;
      return typeof t == "function" ? t() : t;
    }
  }
  /**
   * Check if a ZodNumber schema has integer constraints
   */
  isIntegerNumber(n) {
    return n.isInt === !0 ? !0 : (n._def?.checks || []).some((a) => a.kind === "int");
  }
  /**
   * Check if schema is a ZodObject
   */
  isZodObject(n) {
    return n instanceof Ba;
  }
  /**
   * Group fields by their group metadata
   */
  groupFields(n) {
    const t = /* @__PURE__ */ new Map(), a = [];
    for (const s of n)
      s.group ? (t.has(s.group) || t.set(s.group, []), t.get(s.group).push(s)) : a.push(s);
    const i = [];
    return t.forEach((s, u) => {
      i.push({
        name: u,
        label: this.formatLabel(u),
        fields: s.sort((r, c) => (r.order || 999) - (c.order || 999))
      });
    }), a.length > 0 && i.push({
      name: "general",
      label: "General",
      fields: a.sort((s, u) => (s.order || 999) - (u.order || 999))
    }), i.sort((s, u) => (s.order || 999) - (u.order || 999));
  }
  /**
   * Check if a field is a trim object (has l1, l2, w1, w2 properties)
   */
  isTrimField(n) {
    const t = this.unwrapField(n);
    if (t instanceof Ba) {
      const a = t.shape;
      return "l1" in a && "l2" in a && "w1" in a && "w2" in a;
    }
    return !1;
  }
  /**
   * Generate individual field metadata for trim sides (l1, l2, w1, w2)
   */
  generateTrimFields(n) {
    const t = [], a = this.unwrapField(n);
    if (!(a instanceof Ba))
      return t;
    const i = a.shape, s = ["l1", "l2", "w1", "w2"];
    for (const u of s)
      if (u in i) {
        const r = i[u], c = this.extractFieldMetadata(`trim.${u}`, r);
        c && (c.propertyPath = `trim.${u}`, c.name = `trim.${u}`, c.group || (c.group = "trim"), t.push(c));
      }
    return t;
  }
}
const go = new Sf();
function xf(e, n = {}) {
  const t = W([]), a = W([]), i = W(/* @__PURE__ */ new Map()), s = W(/* @__PURE__ */ new Map()), u = (b) => {
    let _ = go.generateFields(e);
    n.overrides && (_ = _.map((me) => {
      const G = n.overrides[me.name];
      if (G) {
        const q = { ...me, ...G };
        return G.min === void 0 && me.min !== void 0 && (q.min = me.min), G.max === void 0 && me.max !== void 0 && (q.max = me.max), q;
      }
      return me;
    })), s.value.clear();
    for (const me of _)
      s.value.set(me.name, me);
    const U = b || n.allowedFieldIds;
    if (U && U.length > 0) {
      const me = U, G = /* @__PURE__ */ new Map();
      for (const ce of _)
        G.set(ce.name, ce);
      const q = [];
      for (const ce of me) {
        const de = G.get(ce);
        de && q.push(de);
      }
      _ = q;
    }
    n.filter && (_ = _.filter(n.filter)), t.value = _, i.value.clear();
    for (const me of _)
      i.value.set(me.name, me);
    n.grouped && (a.value = go.groupFields(_));
  };
  u();
  const r = (b) => i.value.get(b), c = (b) => s.value.get(b), f = () => s.value, m = (b, _) => {
    const U = i.value.get(b);
    U && Object.assign(U, _);
  }, I = (b) => {
    const _ = r(b);
    return !(!_ || _.hidden);
  }, O = (b) => {
    const _ = r(b);
    if (!_) return {};
    const U = {};
    return _.required && (U.required = !0), _.type === "number" && (_.min !== void 0 && (U.min = _.min), _.max !== void 0 && (U.max = _.max)), U;
  };
  return {
    fields: A(() => t.value),
    groups: A(() => a.value),
    fieldMap: A(() => i.value),
    allFieldsMap: A(() => s.value),
    getField: r,
    getFieldMetadata: c,
    getAllFieldMetadata: f,
    updateField: m,
    isFieldVisible: I,
    getFieldValidation: O,
    regenerateFields: u
  };
}
function If(e) {
  const { stockType: n, materials: t = [], minDimension: a = 0 } = e, i = wf(n), s = {
    // Add minimum dimensions for length/width
    l: {
      min: a,
      w: "1fr"
      // Full width for length field
    },
    w: {
      min: a,
      w: "1fr"
      // Full width for width field
    },
    // Specific widths for compact fields
    material: {
      w: "minmax(20px, max-content)"
    },
    t: {
      w: "minmax(20px, max-content)"
    },
    q: {
      w: "80px"
    },
    name: {
      w: "1fr"
    },
    // Icon-sized fields for special components
    orientationLock: {
      w: "36px"
    },
    banding: {
      w: "32px"
    },
    finish: {
      w: "32px"
    },
    planing: {
      w: "32px"
    },
    machining: {
      w: "32px"
    },
    imageUpload: {
      w: "32px"
    },
    fullStock: {
      w: "32px"
    }
  };
  return t.length > 0 && (s.material = {
    ...s.material,
    type: "enum",
    options: t.map((u) => ({ value: u.name, label: u.name })),
    defaultValue: t[0]?.name
  }), xf(i, {
    ...e,
    overrides: { ...s, ...e.overrides }
  });
}
const { progress: nt, reset: Ga } = Jo(), ms = "sc:inflight-job", Pf = 2 * 3600 * 1e3;
function ho(e, n) {
  try {
    localStorage.setItem(ms, JSON.stringify({ jobId: e, socketId: n, queuedAt: Date.now() }));
  } catch {
  }
}
function na() {
  try {
    localStorage.removeItem(ms);
  } catch {
  }
}
function Yn() {
  try {
    const e = localStorage.getItem(ms);
    if (!e) return null;
    const n = JSON.parse(e);
    return !n?.jobId || Date.now() - n.queuedAt > Pf ? (na(), null) : n;
  } catch {
    return null;
  }
}
function Cf(e) {
  const n = "https://api.cutlistevo.com/", t = "https://api.cutlistevo.com/";
  let a, i = null;
  const s = () => {
    a = vu(n, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), a.on("connect", () => {
      e.refs?.connected && (e.refs.connected.value = !0);
      const m = Yn();
      m && !nt.value.complete && (i = m.jobId, nt.value.reattaching = !0, a.emit("reattach", m.jobId)), e.callbacks?.onConnect?.();
    }), a.on("connect_error", (m) => {
      e.refs?.connected && (e.refs.connected.value = !1), !nt.value.complete && Yn() ? nt.value.reattaching = !0 : e.refs?.thinking && (e.refs.thinking.value = !1), e.callbacks?.onConnectError?.(m);
    }), a.on("connect_timeout", (m) => {
      e.refs?.connected && (e.refs.connected.value = !1), !nt.value.complete && Yn() ? nt.value.reattaching = !0 : e.refs?.thinking && (e.refs.thinking.value = !1), e.callbacks?.onConnectError?.(m);
    }), a.on("disconnect", () => {
      e.refs?.connected && (e.refs.connected.value = !1), !nt.value.complete && Yn() && (nt.value.reattaching = !0), e.callbacks?.onDisconnect?.();
    }), a.on("result", (m) => {
      nt.value.complete = !0, nt.value.reattaching = !1, na(), i = null, e.callbacks?.onResult?.(m), a.disconnect();
    }), a.on("queued", (m) => {
      Ga(), nt.value.queued = !0, m && (i = m, ho(m, a.id ?? null));
    }), a.on("jobInProgess", (m) => {
      m && (i = m, ho(m, a.id ?? null), nt.value.queued = !0, nt.value.reattaching = !0, a.emit("reattach", m));
    }), a.on("reattached", () => {
      nt.value.reattaching = !1, nt.value.queued = !0;
    }), a.on("reattach-stale", (m) => {
      nt.value.reattaching = !1, na(), i = null, Ga(), e.callbacks?.onStale?.(m?.jobId);
    }), a.on("cancelled", () => {
      nt.value.reattaching = !1, na(), i = null, Ga();
    }), a.on("started", () => {
      nt.value.started = !0, nt.value.reattaching = !1;
    }), a.on("progress", (m) => {
      nt.value.reattaching = !1, m?.data?.message === "result" ? nt.value.resultCount++ : (nt.value.stockCount = m.data.stockCount, nt.value.shapeCount = m.data.shapeCount), m?.data?.phase && (nt.value.phase = m.data.phase), m?.data?.placed !== void 0 && (nt.value.placed = m.data.placed, nt.value.total = m.data.total);
    }), a.on("user", (m) => {
      e.callbacks?.onUser?.(m);
    }), a.on("error", (m) => {
      e.refs?.thinking && (e.refs.thinking.value = !1), na(), i = null, Ga(), e.callbacks?.onError?.(m);
    });
  }, u = () => a?.disconnect(), r = () => a?.connect(), c = (m) => {
    const I = m ?? i ?? Yn()?.jobId;
    I && (i = I, a?.connected ? a.emit("reattach", I) : a?.connect());
  }, f = () => {
    const m = Yn(), I = i ?? m?.jobId;
    if (I) {
      try {
        const O = m?.socketId ?? a?.id ?? "", b = O ? `?socketId=${encodeURIComponent(O)}` : "";
        navigator.sendBeacon?.(`${t}v3/job/${I}/cancel${b}`);
      } catch {
      }
      na(), i = null;
    }
  };
  return s(), {
    socket: a,
    connect: r,
    disconnect: u,
    reattach: c,
    cancel: f
  };
}
const kn = $({
  min: S().min(0).optional(),
  max: S().min(0).optional()
}).optional(), Lf = $({
  // Location identifier (e.g., 'side.l1', 'face.a')
  location: d().min(1),
  // Dimension constraints for this location
  longSide: kn,
  shortSide: kn,
  t: kn,
  // Formula-based validation
  formula: d().optional(),
  // Custom message for this location
  message: d().optional()
}), _i = $({
  // Shape dimension constraints (type-level, apply to all locations by default)
  longSide: kn,
  shortSide: kn,
  t: kn,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: d().optional(),
  // Custom validation message (optional)
  message: d().optional(),
  // Location-specific rules (override type-level rules for specific locations)
  locations: te(Lf).optional()
}), Of = $({
  banding: _i.optional(),
  finish: _i.optional(),
  planing: _i.optional()
}).optional();
function Ef(e, n) {
  try {
    return !!new ri({}).evaluateExpression(e, {
      longSide: n.longSide || 0,
      shortSide: n.shortSide || 0,
      t: n.t || 0
    });
  } catch (t) {
    return console.warn("Formula evaluation error:", t, "Formula:", e), !0;
  }
}
function Af(e) {
  return e.formula ? "" : as({
    dimensionName: is(e.dimension),
    constraint: e.constraint,
    limit: e.limit,
    value: e.value
  });
}
function Tf(e, n, t) {
  const a = n.charAt(0).toUpperCase() + n.slice(1);
  return e.formula ? `${a} does not meet the validation requirements` : as({
    dimensionName: is(e.dimension),
    constraint: e.constraint,
    limit: e.limit,
    value: e.value,
    subject: a,
    location: e.location
  });
}
function Ff(e, n, t) {
  if (e?.locations?.length) {
    const a = e.locations.find((i) => i.location === n);
    if (a)
      return { rule: a, message: a.message, source: "location" };
  }
  if (t?.length) {
    for (const a of t)
      if (a.rules && a.locations.includes(n))
        return { rule: a.rules, message: a.rules.message, source: "group" };
  }
  return { rule: e || {}, message: e?.message, source: "type" };
}
function Nf(e, n, t, a) {
  const { rule: i, message: s, source: u } = Ff(n, t, a), r = [], c = (m, I, O) => {
    I == null || O === void 0 || (O.min !== void 0 && I < O.min && r.push({
      valid: !1,
      dimension: m,
      value: I,
      constraint: "min",
      limit: O.min,
      location: t
    }), O.max !== void 0 && I > O.max && r.push({
      valid: !1,
      dimension: m,
      value: I,
      constraint: "max",
      limit: O.max,
      location: t
    }));
  };
  c("longSide", e.longSide, i.longSide), c("shortSide", e.shortSide, i.shortSide);
  const f = typeof e.t == "string" ? parseFloat(e.t) : e.t;
  return isNaN(f) || c("t", f, i.t), i.formula && (Ef(i.formula, {
    longSide: e.longSide,
    shortSide: e.shortSide,
    t: f
  }) || r.push({
    valid: !1,
    dimension: "longSide",
    // placeholder; `formula` is the real signal
    value: e.longSide || 0,
    constraint: "min",
    limit: 0,
    location: t,
    formula: !0
  })), {
    valid: r.length === 0,
    violations: r,
    message: s,
    source: u
  };
}
const { addNotice: Xn } = rs();
let Vi = null;
function $f() {
  return Vi || (Vi = Uo()), Vi;
}
function vo(e) {
  return e.filter((n) => n?.l || n?.w);
}
function Mf(e) {
  return !!e && "locations" in e && Array.isArray(e.locations);
}
async function Df(e) {
  const n = e.t, t = [];
  try {
    const { inputs: a, validateInputShapes: i, validateInputStock: s } = $f(), u = e.inputShapes ?? a.inputShapes.value, r = e.inputStock ?? a.inputStock.value, c = e.inputUserGroups ?? a.inputUserGroups?.value ?? [], f = vo(u), m = vo(r);
    if (f.forEach((G) => G.isNew = !1), m.forEach((G) => G.isNew = !1), !e.isAdmin && !e.shared && e.maxShapes !== 1 / 0) {
      const G = f.reduce((ce, de) => ce + (Number(de.q) || 1), 0), q = m.reduce((ce, de) => ce + (Number(de.q) || 1), 0);
      if (G > e.maxShapes || q > e.maxStock)
        return Xn({
          type: "error",
          message: n("errors.validation.above_max_parts")
        }), e.onLimit?.(), { valid: !1, issues: t };
    }
    if (!f.length)
      return Xn({
        type: "error",
        message: n("errors.validation.no_parts_list")
      }), { valid: !1, issues: t };
    if (!e.useInventory && !m.length)
      return Xn({
        type: "error",
        message: n("errors.validation.no_stock")
      }), { valid: !1, issues: t };
    let I;
    if (e.useInventory && e.selectedSaw)
      I = e.selectedSaw;
    else if (e.inputSaw instanceof bn) {
      const G = e.inputSaw.validate();
      t.push(...G), I = e.inputSaw.toData();
    } else {
      I = e.inputSaw;
      const G = new Ui(I);
      t.push(...G.issues);
    }
    const O = I?.cutType;
    if (O === "nesting") {
      const G = f.filter(
        (q) => !Array.isArray(q.outline) || q.outline.length < 3
      );
      if (G.length)
        for (const q of G)
          t.push(new Ct({
            item: q,
            category: ["part"],
            message: "Nesting mode requires a polygon outline — import this part via DXF or switch to Rectangular mode.",
            shouldTranslate: !1
          }));
    } else if (O) {
      const G = f.filter(
        (q) => Array.isArray(q.outline) && q.outline.length >= 3
      );
      if (G.length)
        for (const q of G)
          t.push(new Ct({
            item: q,
            category: ["part"],
            message: "This part has a polygon outline and can only be used in Nesting mode — switch mode or remove the outlined parts.",
            shouldTranslate: !1
          }));
    }
    const b = i({
      saw: I,
      partTrim: re({ v: e.partTrim }),
      useInventory: e.useInventory,
      inputShapesOverride: f
    });
    if (t.push(...b), e.useInventory) {
      if (e.materialStore)
        for (const G of f)
          G.material || t.push(new Ct({
            item: G,
            category: ["part"],
            message: "errors.validation.business.no_material"
          }));
    } else {
      const G = s(I);
      t.push(...G);
    }
    if (c.length > 0) {
      c.forEach((q) => q.populateParentID(f));
      const G = _u(c, f);
      t.push(...G);
    }
    await Vf(f, e, t);
    const _ = Gi(t);
    if (_.length > 0) {
      const G = {
        saw: _.filter((q) => q.category?.includes("saw")),
        stock: _.filter((q) => q.category?.includes("stock")),
        part: _.filter((q) => q.category?.includes("part") && !q.category?.includes("extras")),
        extras: _.filter((q) => q.category?.includes("extras")),
        group: _.filter((q) => q.category?.includes("group"))
      };
      for (const [q, ce] of Object.entries(G))
        if (ce.length > 0) {
          Xn({
            type: "error",
            message: n("errors.validation.inputs_issue", { 0: q }),
            additional: ce.map((de) => n(de.message))
          });
          break;
        }
      return { valid: !1, issues: t };
    }
    const U = {
      inputSaw: I,
      inputShapes: f.map((G) => G.toData()),
      inputStock: m.map((G) => G.toData()),
      inputGroups: c.map((G) => G.toData()),
      enableEvo: !0,
      useInventory: e.useInventory || !1
    }, me = Fu.safeParse(U);
    return me.success ? {
      valid: !0,
      issues: t,
      sawData: I
    } : (console.error("[Validation] Zod validation failed:", me.error.issues), Xn({
      type: "error",
      message: n("errors.validation.invalid_data_structure"),
      additional: me.error.issues.map((G) => `${G.path.join(".")}: ${G.message}`)
    }), { valid: !1, issues: t });
  } catch (a) {
    return console.error("[Validation] error:", a), Xn({
      type: "error",
      message: n("errors.general.unexpected"),
      additional: [a?.message ?? ""]
    }), { valid: !1, issues: t };
  }
}
function _f(e, n) {
  const t = [], a = e.extras;
  if (!a) return t;
  if (n === "banding" && a.banding?.sides)
    for (const [i, s] of Object.entries(a.banding.sides))
      s !== void 0 && s !== !1 && s !== "" && t.push(`side.${i}`);
  else if (n === "finish" && a.finish?.faces)
    for (const [i, s] of Object.entries(a.finish.faces))
      s !== void 0 && s !== !1 && s !== "" && t.push(`face.${i}`);
  else if (n === "planing") {
    if (a.planing?.faces)
      for (const [i, s] of Object.entries(a.planing.faces))
        s !== void 0 && s !== !1 && s !== "" && t.push(`face.${i}`);
    if (a.planing?.sides)
      for (const [i, s] of Object.entries(a.planing.sides))
        s !== void 0 && s !== !1 && s !== "" && t.push(`side.${i}`);
  }
  return t;
}
async function Vf(e, n, t) {
  if (!n.findExtrasPrice)
    return;
  const a = [
    { type: "banding", pricing: n.bandingPricing },
    { type: "finish", pricing: n.finishPricing },
    { type: "planing", pricing: n.planingPricing }
  ];
  for (const i of e)
    for (const { type: s, pricing: u } of a) {
      const r = n.getShapeExtrasPricing?.(i, s) ?? u;
      if (n.extrasValidationRules && Br.hasExtras(i, s)) {
        const I = n.extrasValidationRules?.[s], O = n.extrasLocationGroups?.[s], b = Mf(I) && I.locations.length > 0, _ = O?.some((U) => U.rules);
        if (b || _) {
          const U = _f(i, s), me = (O || []).map((ce) => ({
            id: ce.id,
            locations: ce.locations,
            rules: ce.rules
          })), G = I || {}, q = /* @__PURE__ */ new Set();
          for (const ce of U) {
            const de = Nf(
              i,
              G,
              ce,
              me
            );
            if (!de.valid) {
              if (de.source === "group") {
                const w = me.find(
                  (M) => M.rules && M.locations.includes(ce)
                );
                if (w && q.has(w.id))
                  continue;
                w && q.add(w.id);
              }
              if (de.message) {
                const w = new Ct({
                  item: i,
                  category: ["part", "extras"],
                  message: Zs(de.violations.map(Af), de.message),
                  field: [["extras", s, ce]],
                  shouldTranslate: !1
                });
                t.push(w);
              } else
                de.violations.forEach((w) => {
                  const M = Tf(w, s), ne = new Ct({
                    item: i,
                    category: ["part", "extras"],
                    message: M,
                    field: [["extras", s, ce]],
                    shouldTranslate: !1
                  });
                  t.push(ne);
                });
            }
          }
        } else {
          const U = jr(i, s, n.extrasValidationRules);
          if (!U.valid) {
            const me = (G) => t.push(new Ct({
              item: i,
              category: ["part", "extras"],
              message: G,
              field: [["extras", s]],
              shouldTranslate: !1
            }));
            U.message ? me(Zs(
              U.violations.map(Ur),
              U.message
            )) : U.violations.forEach((G) => me(Gr(s, G)));
          }
        }
      }
      if (!r || !Object.keys(r).length)
        continue;
      const c = n.getShapeExtrasCodes?.(i, s), f = Wr(i, s, r, n.findExtrasPrice, c);
      f.valid || f.incompleteLocations.forEach((m) => {
        t.push(new Ct({
          item: i,
          category: ["part", "extras"],
          message: "errors.extras.selection_incomplete",
          params: {
            extraType: `extras.${s}`,
            // Translation key for extra type (banding, finish, planing)
            location: zr(m, { returnKey: !0 })
            // Translation key for location
          },
          field: [["extras", s, m]]
        }));
      });
    }
}
const Rf = ["decor", "width", "thickness"];
new Set(Rf);
const Qo = ["banding", "finish", "planing", "machining"], qf = /* @__PURE__ */ new Set(["st", "p", "mm", "mb", "tm", "sm", "pm", "pa", "li", "ro", "r2"]), Bf = 15;
function Xi(e) {
  return e.trim().toLowerCase().split(/[\s_-]+/).filter(Boolean);
}
function jf(e) {
  return /[a-z]/.test(e) && /\d/.test(e);
}
function bo(e) {
  return Xi(e).filter((n) => !qf.has(n) && n.length > 1);
}
function Uf(e, n) {
  let t = 0;
  const a = Math.min(e.length, n.length);
  for (; t < a && e[t] === n[t]; )
    t++;
  return t;
}
function Gf(e) {
  return e ? typeof e == "string" ? { name: e } : e : {};
}
function Zg(e, n) {
  const t = Gf(n);
  if (!t.name && !t.code && !t.material && !t.description || e.decors.length === 0)
    return null;
  if (t.name) {
    const c = t.name.trim().toLowerCase();
    if (c) {
      const f = e.decors.find((m) => m.value.toLowerCase() === c);
      if (f)
        return { value: f.value, score: 1e3, matchedOn: ["name"] };
    }
  }
  const a = /* @__PURE__ */ new Set();
  for (const c of [t.name, t.material, t.description, t.code])
    if (c)
      for (const f of bo(c))
        a.add(f);
  const i = t.code || t.material ? Xi(t.code || t.material || "") : [];
  let s = null, u = 0, r = [];
  for (const c of e.decors) {
    const f = bo(c.value);
    let m = 0;
    const I = [];
    if (t.name) {
      const b = t.name.trim().toLowerCase(), _ = c.value.toLowerCase();
      b && (b.includes(_) || _.includes(b)) && (m += 200, I.push("name-substring"));
    }
    let O = 0;
    for (const b of f)
      a.has(b) && (m += jf(b) ? 20 : 5, O++);
    if (O > 0 && I.push("tokens"), t.color && c.color && t.color.trim().toLowerCase() === c.color.trim().toLowerCase() && (m += 30, I.push("color")), i.length > 0) {
      let b = 0;
      for (const _ of e.rows) {
        if ((_.decor?.name ?? "") !== c.value)
          continue;
        const U = Uf(i, Xi(_.code));
        U > b && (b = U);
      }
      b >= 2 && (m += b * 15, I.push("code-prefix"));
    }
    m > u && (u = m, s = c, r = I);
  }
  return !s || u < Bf ? null : { value: s.value, score: u, matchedOn: r };
}
const Yo = {
  // ============================================================
  // CSV TEMPLATE FIELDS (order determines CSV column order)
  // ============================================================
  code: {
    label: "Code",
    inputType: "string",
    // Code lives on the material only at the storage level — stock items
    // inherit at display/calc time via the read-time resolver, but don't
    // carry their own value and can't override. `scope: 'shared'` keeps the
    // runtime stock view exposing the inherited code (PDF, OrderSummary,
    // the calc round-trip), while `materialRequired` + the unique
    // `{ organisation, code }` index pin uniqueness on the material side.
    scope: "shared",
    inheritable: !0,
    importable: !0,
    materialRequired: !0,
    csvAliases: ["material_code", "sku"],
    csvDescription: "Unique identifier (manufacturer SKU) for the material — required on every row, must be unique within your shop. Rows sharing a code are merged into one material; if you really have two materials, give them distinct codes. Stock items inherit this from their parent material; you can't set a stock-level code separately.",
    // Example rows tell three coherent stories:
    //  Row 1: catalogue-style (variant IS the per-decor identity)
    //  Row 2: family-decor (variant = finish family, name = decor) — ✓ supported
    //  Row 3: another decor in the same family — shows auto keeps them apart
    //  Row 4: generic / no variant — legacy pattern
    csvExamples: ["F037-ST76", "CG18-AG", "CG29-AG", "PLY-BIRCH-18"]
  },
  brand: {
    label: "Brand",
    inputType: "string",
    scope: "shared",
    inheritable: !0,
    libraryOverridable: !1,
    // identity field — curator-owned on library entries
    importable: !0,
    csvAliases: ["manufacturer"],
    csvDescription: "Manufacturer / brand name. Distinct from Variant — Brand is the company that made the material; Variant is a sub-grouping within that brand.",
    csvExamples: ["Egger", "Senoplast", "Senoplast", ""]
  },
  material: {
    label: "Material",
    kindLabels: { banding: "Banding material" },
    inputType: "string",
    scope: "stock",
    importable: !0,
    csvAliases: ["mat", "material_name"],
    stockRequired: !0,
    csvDescription: "Material group name. Rows with the same material value are grouped into one material item. Required.",
    csvExamples: ["MDF", "MDF", "MDF", "Plywood"]
  },
  variant: {
    label: "Variant",
    kindLabels: { banding: "Banding type" },
    inputType: "string",
    scope: "shared",
    inheritable: !0,
    importable: !0,
    csvAliases: ["var"],
    csvDescription: 'Sub-grouping within a brand or material (product line, range, sub-collection). Free-form. Two valid patterns: (a) per-decor identity ("F037 ST76 Taormina Travertine") where variant ≈ name; (b) finish family ("Acrylic Gloss", "Super Matt") shared across many decors, with name carrying the per-decor identity. Auto import preserves both correctly.',
    csvExamples: [
      "F037 ST76 Taormina Travertine",
      // catalogue-style (variant = decor identity)
      "Acrylic Gloss",
      // family-decor pattern (variant = family)
      "Acrylic Gloss",
      //   another decor under the same family
      ""
      // generic / no variant
    ]
  },
  name: {
    label: "Name",
    inputType: "string",
    scope: "material",
    importable: !0,
    csvAliases: ["stock_name", "display_name"],
    materialRequired: !0,
    csvDescription: 'Display name for the material item shown to customers. Required. When using a finish-family variant, put the per-decor identity here ("Dust Grey", "Taupe") — auto import keeps each decor as a separate material.',
    csvExamples: [
      "F037 ST76 Taormina Travertine",
      // matches variant — catalogue pattern
      "Frost White",
      // decor name under family variant
      "Almond",
      //   another decor name
      "Marine Birch 18mm"
      // descriptive name when no variant
    ]
  },
  description: {
    label: "Description",
    inputType: "textarea",
    scope: "material",
    importable: !0,
    csvAliases: ["desc"],
    csvDescription: "Detailed description of the material item.",
    csvExamples: [
      "Egger Eurodekor Melamine MDF",
      "Senoplast Acrylic Faced MDF — Frost White",
      "Senoplast Acrylic Faced MDF — Almond",
      "Marine Grade Baltic Birch Plywood"
    ]
  },
  type: {
    label: "Stock Type",
    // Banding catalogues are always 'roll' — surface this on rule editors
    // would invite a no-op axis.
    productKinds: ["material"],
    inputType: "select",
    scope: "material",
    importable: !0,
    defaultValue: "sheet",
    csvAliases: ["stock_type", "material_type"],
    options: [
      { value: "sheet", label: "Sheet" },
      { value: "linear", label: "Linear" },
      { value: "roll", label: "Roll" }
    ],
    csvDescription: "Type of stock. Must be one of: sheet, linear, roll. Defaults to sheet.",
    csvExamples: ["sheet", "sheet", "sheet", "sheet"]
  },
  l: {
    label: "Length",
    kindLabels: { banding: "Roll length (m)" },
    inputType: "float",
    scope: "stock",
    importable: !0,
    min: 0,
    csvAliases: ["length", "len"],
    csvParse: "number",
    stockRequired: !0,
    csvDescription: "Stock length in mm. Required.",
    csvExamples: ["2800", "3050", "3050", "2440"]
  },
  w: {
    label: "Width",
    kindLabels: { banding: "Banding width (mm)" },
    inputType: "float",
    scope: "stock",
    importable: !0,
    min: 0,
    csvAliases: ["width", "wid"],
    csvParse: "number",
    stockRequired: !0,
    csvDescription: "Stock width in mm. Required.",
    csvExamples: ["2070", "1220", "1220", "1220"]
  },
  t: {
    label: "Thickness",
    kindLabels: { banding: "Banding thickness (mm)" },
    inputType: "float",
    scope: "stock",
    importable: !0,
    csvAliases: ["thickness", "thick", "depth"],
    csvParse: "thickness",
    stockRequired: !0,
    csvDescription: 'Stock thickness in mm. Required. For bonded boards use comma-separated values in quotes, e.g. "18,36".',
    csvExamples: ["18", "19", "19", "18"]
  },
  availableThicknesses: {
    label: "Available thicknesses",
    kindLabels: { banding: "Available roll lengths" },
    inputType: "array",
    scope: "shared",
    inheritable: !0,
    importable: !0,
    csvAliases: ["thicknesses_available", "thicknesses", "avail_thicknesses"],
    csvDescription: 'Pipe-separated list of every thickness this entry is stocked in. Library catalogues from sources that consolidate per-decor sizes (e.g. Egger) populate this so the LibraryTab card lists "8 / 15 / 18 / 22 mm" instead of one card per thickness. Optional — falls back to the single `t` value when absent.',
    csvExamples: ["18|25", "19|38", "19|38", "12|18"]
  },
  q: {
    label: "Quantity",
    // Banding is sold by the metre against an unlimited-stock model — per-row quantity isn't meaningful.
    productKinds: ["material"],
    inputType: "integer",
    scope: "stock",
    libraryOverridable: !0,
    importable: !0,
    defaultValue: 1,
    min: 0,
    csvAliases: ["qty", "quantity"],
    csvParse: "integer",
    csvDescription: "Number of sheets in stock. Ignored if unlimited is Y. Defaults to 1.",
    csvExamples: ["10", "5", "5", "20"]
  },
  cost: {
    label: "Cost",
    // Banding pricing is owned by the per-extra BandingPricingRulesEditor;
    // two competing pricing systems on the same SKU set is a footgun.
    productKinds: ["material"],
    inputType: "float",
    scope: "shared",
    inheritable: !0,
    libraryOverridable: !0,
    importable: !0,
    defaultValue: 0,
    min: 0,
    csvAliases: ["price", "unit_price", "unitprice"],
    csvParse: "number",
    csvDescription: "Unit price per sheet. Numeric value.",
    csvExamples: ["45", "90", "90", "32"]
  },
  discount: {
    label: "Discount",
    productKinds: ["material"],
    inputType: "float",
    scope: "shared",
    inheritable: !0,
    libraryOverridable: !0,
    importable: !0,
    defaultValue: 0,
    min: 0,
    max: 100,
    csvAliases: ["disc", "sale", "sale_percent", "salepercent"],
    csvParse: "number",
    csvDescription: "Discount percentage (0-100). e.g. 15 means 15% off.",
    csvExamples: ["0", "0", "0", "0"]
  },
  pricingFormula: {
    label: "Pricing Formula",
    // Banding pricing is owned by the per-extra BandingPricingRulesEditor.
    productKinds: ["material"],
    inputType: "formula",
    scope: "shared",
    inheritable: !0,
    libraryOverridable: !0,
    importable: !1
  },
  unlimitedQuantity: {
    label: "Unlimited",
    productKinds: ["material"],
    inputType: "boolean",
    scope: "stock",
    libraryOverridable: !0,
    importable: !0,
    csvColumn: "unlimited",
    csvAliases: ["unlimitedquantity", "infinite", "infinitestock"],
    csvParse: "boolean-yn",
    csvDescription: "Whether stock is unlimited. Use y or n. When y, the quantity value is ignored.",
    csvExamples: ["n", "n", "n", "y"]
  },
  fullSizeOnly: {
    label: "Full size only",
    productKinds: ["material"],
    inputType: "boolean",
    scope: "shared",
    inheritable: !0,
    libraryOverridable: !0,
    importable: !0,
    csvAliases: ["full_size", "fullsize", "wholesheet", "whole_sheet"],
    csvParse: "boolean-yn",
    csvDescription: "Disable cut-to-size. When y, customers must purchase whole sheets only.",
    csvExamples: ["n", "n", "y", "n"]
  },
  weight: {
    label: "Weight",
    // Sheets carry per-piece weight; banding rolls don't have a comparable per-row weight axis.
    // Optional manual override — if `density` is set on the entry/material,
    // the cart/offcut weight is derived as `density × l × w × t` so it scales
    // correctly with the customer's selected thickness. Set `weight`
    // explicitly only when you need to pin a specific per-row number that
    // the density compute can't express (e.g. a packed bundle).
    productKinds: ["material"],
    inputType: "float",
    scope: "shared",
    inheritable: !0,
    importable: !0,
    min: 0,
    csvAliases: ["wt"],
    csvParse: "number",
    csvDescription: "Weight per unit. Optional — when density is set, weight is computed from `density × l × w × t`. Override here only when the compute can't express the per-row weight (packed bundles, mixed materials).",
    csvExamples: ["", "", "", ""]
  },
  density: {
    label: "Density (kg/m³)",
    // Per-substrate density — the customer cart, offcut weight, and
    // shipping calculation all derive weight as `density × volume`.
    // Storing density on the material instead of per-row weight means
    // weight stays correct across every available thickness and cut
    // dimension. Library entries set it from the supplier's substrate
    // (e.g. Egger Eurodekor chipboard ~640 kg/m³); shops can override
    // per material if they buy a denser / lighter grade.
    productKinds: ["material"],
    inputType: "float",
    scope: "shared",
    inheritable: !0,
    libraryOverridable: !0,
    importable: !0,
    min: 0,
    csvAliases: ["rho", "kg_per_m3", "kgm3"],
    csvParse: "number",
    csvDescription: "Density in kg/m³. Drives the computed weight (`density × l × w × t`) shown in the cart, on offcuts, and used by shipping. Typical: chipboard ~640, MDF ~720, plywood ~600, HPL ~1400, honeycomb-core lightweight ~340.",
    csvExamples: ["720", "720", "720", "680"]
  },
  finish: {
    label: "Finish",
    inputType: "string",
    scope: "shared",
    inheritable: !0,
    importable: !0,
    csvAliases: ["surface", "surface_finish"],
    csvDescription: "Surface finish description, e.g. Natural, High Gloss, Sanded.",
    csvExamples: ["ST76 Mineral Rough Matt", "High Gloss", "High Gloss", "Sanded"]
  },
  color: {
    label: "Colour",
    inputType: "string",
    scope: "shared",
    inheritable: !0,
    importable: !0,
    csvAliases: ["colour", "colorname", "color_name", "colour_name"],
    csvDescription: "Colour name, e.g. White, Natural, Oak Brown.",
    csvExamples: ["Brown", "Frost White", "Almond", "Natural"]
  },
  colorHex: {
    label: "Colour Hex",
    inputType: "color",
    scope: "shared",
    inheritable: !0,
    importable: !0,
    csvAliases: ["color_hex", "hex", "hexcolor", "hex_color", "colourhex", "colour_hex"],
    csvDescription: "Hex colour code, e.g. #8B4513, #FFFFFF.",
    csvExamples: ["#8B6F47", "#FAFAFA", "#EBD5B3", "#D2B48C"]
  },
  // ============================================================
  // ADDITIONAL IMPORTABLE FIELDS
  // ============================================================
  grain: {
    label: "Grain",
    // Banding rolls have no grain direction — running a banding tape one
    // way vs the other doesn't change the visible decor.
    productKinds: ["material"],
    inputType: "select",
    scope: "shared",
    inheritable: !0,
    importable: !0,
    defaultValue: "",
    csvAliases: ["orientation", "dir", "direction"],
    options: [
      { value: "", label: "None" },
      { value: "l", label: "Along Length" },
      { value: "w", label: "Along Width" }
    ],
    csvDescription: "Grain direction. Use l (along length), w (along width), or leave empty for none.",
    csvExamples: ["", "", "", "l"]
  },
  category: {
    label: "Category",
    inputType: "string",
    scope: "shared",
    inheritable: !0,
    importable: !0,
    csvAliases: ["cat", "group"],
    csvDescription: "Category for grouping in the store, e.g. Water Resistant, Fire Rated, Exterior.",
    csvExamples: ["Catalogue", "Decorative", "Decorative", "Marine"]
  },
  imageUrl: {
    label: "Image URL",
    inputType: "string",
    scope: "shared",
    inheritable: !0,
    importable: !0,
    csvColumn: "image",
    csvAliases: ["img", "imageurl", "image_url", "picture", "photo"],
    csvDescription: "Full URL to a product image. Must be a valid URL, e.g. https://example.com/image.jpg.",
    csvExamples: [
      "https://example.com/images/mdf-egger.jpg",
      "https://example.com/images/mdf-senoplast.jpg",
      "https://example.com/images/plywood-marine.jpg",
      "https://example.com/images/plywood-birch.jpg"
    ]
  },
  tags: {
    label: "Tags",
    inputType: "array",
    scope: "shared",
    inheritable: !0,
    importable: !0,
    defaultValue: [],
    csvAliases: ["tag", "keywords"],
    csvParse: "pipe-array",
    csvDescription: "Searchable tags. Pipe-separated, e.g. plywood|birch|hardwood.",
    csvExamples: ["egger|melamine|decorative", "senoplast|acrylic|gloss", "senoplast|acrylic|gloss", "plywood|birch|marine"]
  },
  // ============================================================
  // NON-IMPORTABLE FIELDS
  // ============================================================
  trim: {
    label: "Trim",
    // Sheet-only field (per-edge cut allowance). Stored as
    // `{ l1, l2, w1, w2 }`; rule editors target each edge separately via
    // the dotted sub-paths declared in `subFields` so the picker, value
    // input, and engine can treat each side as a real numeric target.
    productKinds: ["material"],
    inputType: "trim",
    scope: "shared",
    inheritable: !0,
    libraryOverridable: !0,
    importable: !1,
    subFields: {
      l1: { label: "L1", inputType: "float", min: 0 },
      l2: { label: "L2", inputType: "float", min: 0 },
      w1: { label: "W1", inputType: "float", min: 0 },
      w2: { label: "W2", inputType: "float", min: 0 }
    }
  },
  extras: {
    label: "Extras",
    inputType: "extras",
    scope: "shared",
    inheritable: !0,
    libraryOverridable: !0,
    importable: !1
  },
  // Relation field: stores the saw's ObjectId.
  //   • libraryOverridable — different shops on the same library entry use
  //     different saws.
  //   • inheritable — stock auto-inherits its parent material's saw at read
  //     time (Stage D inheritance model). A shop can still override per-stock
  //     by setting `db_sawId` on the stock and adding `'db_sawId'` to its
  //     overrides[] array.
  db_sawId: {
    label: "Saw",
    // Saws cut sheet/linear stock, not banding rolls.
    productKinds: ["material"],
    inputType: "relation",
    relationTarget: "saw",
    scope: "shared",
    inheritable: !0,
    libraryOverridable: !0,
    importable: !1
  }
};
Object.entries(Yo).filter(([, e]) => e.inheritable).map(([e]) => e);
const Wf = Object.entries(Yo).filter(([, e]) => e.libraryOverridable).map(([e]) => e);
new Set(Wf);
const zf = [
  "name",
  "code",
  "material",
  "brand",
  "variant",
  "category",
  "finish",
  "color",
  "type",
  "t",
  "l",
  "w",
  "cost",
  "discount",
  "weight"
];
new Set(zf);
const Kf = Qo, Hf = (e) => e.charAt(0).toUpperCase() + e.slice(1), Zf = Kf.map((e) => ({
  key: `extras.${e}`,
  label: Hf(e),
  extrasType: e
}));
new Set(Zf.map((e) => e.key));
const Jf = 4;
Array.from({ length: Jf }, (e, n) => n + 1);
function Xo(e) {
  return typeof e == "string" && e.includes(",");
}
function es(e) {
  if (!Xo(e))
    return null;
  const n = e.split(",").map((i) => parseFloat(i.trim()));
  if (n.length !== 2)
    return null;
  const [t, a] = n;
  return !Number.isFinite(t) || !Number.isFinite(a) || t <= 0 || a <= 0 ? null : { base: t, double: a };
}
function aa(e) {
  const n = e?.customData?.bondedThickness;
  return es(n) ? n : Xo(e?.t) && es(e?.t) ? e.t : null;
}
function Qf(e) {
  const n = es(aa(e));
  return n ? n.base : null;
}
function Yf(e, n, t, a = (i) => Number(i)) {
  if (!(!n.length || !t.length))
    for (const i of e) {
      if (i.t === void 0 || i.t === null || i.t === "") continue;
      const s = a(i.t), u = n.findIndex((f) => a(f) === s);
      if (u === -1) continue;
      const r = t.find((f) => f.includes(u));
      if (!r) continue;
      const c = Math.min(...r.map((f) => a(n[f])));
      s > c && (i.q = a(i.q) * (s / c), i.notes = `Bond to form ${s}`, i.t = c);
    }
}
const Xf = new ri({});
function ep(e) {
  const n = Number(e.l) || 0, t = Number(e.w) || 0, a = {
    // Core dimensions
    l: n,
    w: t,
    t: Number(e.t) || 0,
    q: Number(e.q) || 1,
    longSide: Math.max(n, t),
    shortSide: Math.min(n, t),
    // Basic properties
    material: e.material || e.selectedMaterial?.name || "",
    name: e.name || "",
    grain: e.grain || "",
    // Nested extras object for dot-notation access
    extras: {
      banding: {
        sides: {
          l1: e.extras?.banding?.sides?.l1 || "",
          l2: e.extras?.banding?.sides?.l2 || "",
          w1: e.extras?.banding?.sides?.w1 || "",
          w2: e.extras?.banding?.sides?.w2 || ""
        }
      },
      finish: {
        faces: {
          a: e.extras?.finish?.faces?.a || "",
          b: e.extras?.finish?.faces?.b || ""
        }
      },
      planing: {
        faces: {
          a: e.extras?.planing?.faces?.a || "",
          b: e.extras?.planing?.faces?.b || ""
        }
      }
    },
    // Convenience boolean flags
    hasBanding: !!(e.extras?.banding?.sides && Object.values(e.extras.banding.sides).some((i) => i)),
    hasFinish: !!(e.extras?.finish?.faces && Object.values(e.extras.finish.faces).some((i) => i)),
    hasPlaning: !!(e.extras?.planing?.faces && Object.values(e.extras.planing.faces).some((i) => i)),
    hasMachining: !!e.machining,
    // Nested machining object for dot-notation access
    machining: {
      holes: e.machining?.holes?.length || 0,
      corners: e.machining?.corners?.length || 0
    },
    // Full stock flag
    fullStock: !!e.fullStock
  };
  return a["extras.banding.sides.l1"] = a.extras.banding.sides.l1, a["extras.banding.sides.l2"] = a.extras.banding.sides.l2, a["extras.banding.sides.w1"] = a.extras.banding.sides.w1, a["extras.banding.sides.w2"] = a.extras.banding.sides.w2, a["extras.finish.faces.a"] = a.extras.finish.faces.a, a["extras.finish.faces.b"] = a.extras.finish.faces.b, a["extras.planing.faces.a"] = a.extras.planing.faces.a, a["extras.planing.faces.b"] = a.extras.planing.faces.b, a["machining.holes"] = a.machining.holes, a["machining.corners"] = a.machining.corners, a;
}
function tp(e, n) {
  const t = [], a = e.filter((i) => i.enabled !== !1);
  for (let i = 0; i < n.length; i++) {
    const s = n[i], u = ep(s);
    for (const r of a)
      try {
        Xf.evaluateExpression(r.formula, u) || t.push({
          partIndex: i,
          partName: s.name || void 0,
          ruleName: r.name || void 0,
          message: r.message
        });
      } catch (c) {
        t.push({
          partIndex: i,
          partName: s.name || void 0,
          ruleName: r.name || void 0,
          message: `Validation error: ${c instanceof Error ? c.message : "Unknown error"}`
        });
      }
  }
  return {
    valid: t.length === 0,
    errors: t
  };
}
const np = $({
  longSide: kn,
  shortSide: kn,
  t: kn,
  formula: d().optional(),
  message: d().optional()
}).optional(), Xa = $({
  // Unique identifier for this group (used internally)
  id: d().min(1),
  // Display label for the group (shown in UI)
  label: d().min(1),
  // Array of location strings in this group
  // Examples: ['side.l1', 'side.l2'], ['face.a', 'face.b']
  locations: te(d().min(1)).min(1),
  // Optional price override for this group
  // When set, this price will be used instead of calculating from individual locations
  price: S().optional(),
  // Hide individual location inputs when this group is enabled
  // When true, only shows the group control, hiding the individual face/side inputs
  hideIndividualLocations: ae().optional().default(!1),
  // Validation rules that apply when using this group
  // These rules apply when any location in the group is selected
  rules: np
}), ap = $({
  banding: te(Xa).optional(),
  finish: te(Xa).optional(),
  planing: te(Xa).optional()
}).optional(), ip = an(["decimal", "fraction"]), sp = an(["metric", "imperial"]), op = an(Kr), yo = Ze([
  yt(0),
  yt(1),
  yt(2)
]).catch(0), lp = $({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: d().optional(),
  partB: d().optional(),
  partSelected: d().optional(),
  stock: d().optional(),
  text: d().optional(),
  // Checkout-specific colors
  button: d(),
  buttonText: d()
}), It = (e) => Ca((n) => n ?? e, ae()), rp = $({
  banding: It(!1),
  finish: It(!1),
  planing: It(!1),
  orientation: It(!0),
  diagram: It(!0),
  focus: It(!0),
  machining: It(!1),
  csvImport: It(!1),
  csvTemplate: It(!1),
  groups: It(!1),
  click: It(!0),
  partName: It(!0),
  progressNumber: It(!0),
  pagination: It(!1),
  fullStock: It(!1),
  imageUpload: It(!1),
  diagramNav: It(!1),
  debug: It(!1)
}), up = $({
  // Localization
  locale: d().default("en-US"),
  currency: d().default("USD"),
  apiVersion: S().min(2).default(3),
  // Unit system (metric or imperial)
  unitSystem: sp.default("metric"),
  // Number formatting
  numberFormat: ip.default("decimal"),
  decimalPlaces: S().min(0).max(10).default(2),
  fractionRoundTo: S().default(0),
  // Stock configuration
  stockSelection: op.optional(),
  stockGrain: Co.optional(),
  // Part configuration
  minSpacing: Fo.optional(),
  maxParts: S().min(0).default(0),
  orientationModel: yo.default(0),
  resultOrientationModel: yo.default(0),
  minDimension: S().min(0).default(0),
  partTrim: Ca((e) => e ?? void 0, S().min(0).optional()),
  partsPerPage: Ca((e) => e ?? void 0, S().min(1).default(10)),
  // UI configuration
  debug: ae().default(!1),
  enable: rp.default({
    banding: !1,
    finish: !1,
    planing: !1,
    orientation: !0,
    diagram: !0,
    focus: !0,
    machining: !1,
    csvImport: !1,
    csvTemplate: !1,
    groups: !1,
    click: !0,
    partName: !0,
    progressNumber: !0,
    pagination: !1,
    fullStock: !1,
    imageUpload: !1,
    diagramNav: !1,
    debug: !1
  }),
  colors: lp.default({
    button: "#118ab2",
    buttonText: "#ffffff"
  }),
  // Custom fields
  customFields: te(xe()).optional(),
  fieldOrder: Ca((e) => e ?? void 0, te(d()).optional()),
  // Extras location filtering
  bandingLocations: te(Ii).optional(),
  finishLocations: te(Ii).optional(),
  planingLocations: te(Ii).optional(),
  // Extras location groups
  extrasLocationGroups: ap,
  // Extras validation rules
  extrasValidationRules: Of
}), Sa = $({
  min: S().min(0).nullable().optional(),
  max: S().min(0).nullable().optional()
}).nullable().optional(), cp = $({
  // Master toggle for the feature. Server gates on this; consumers don't need to.
  enabled: ae().optional(),
  // Orientation-independent dimension constraints
  // longSide = the larger of l/w, shortSide = the smaller of l/w
  longSide: Sa,
  shortSide: Sa,
  // Direct dimension constraints (as stored by admin panel)
  l: Sa,
  w: Sa,
  t: Sa,
  // Cross-dimensional rules
  // For complex scenarios like "one side must be >= 100mm, the other >= 50mm"
  crossDimensionalRule: $({
    // At least one side must be >= primaryMin
    primaryMin: S().min(0).nullable().optional(),
    // The other side must be >= secondaryMin
    secondaryMin: S().min(0).nullable().optional()
  }).nullable().optional(),
  // Formula-based validation using JavaScript expression
  // Formula can reference: l, w, longSide, shortSide
  // Examples: "(l * w) > 100", "longSide >= 50"
  formula: d().nullable().optional(),
  // Custom validation message (optional)
  message: d().nullable().optional()
});
function dp(e, n) {
  const t = [], a = e.l || 0, i = e.w || 0, s = e.longSide ?? Math.max(a, i), u = e.shortSide ?? Math.min(a, i), r = (c, f, m) => {
    m != null && (m.min !== void 0 && m.min !== null && f < m.min && t.push({
      valid: !1,
      dimension: c,
      value: f,
      constraint: "min",
      limit: m.min
    }), m.max !== void 0 && m.max !== null && f > m.max && t.push({
      valid: !1,
      dimension: c,
      value: f,
      constraint: "max",
      limit: m.max
    }));
  };
  if (r("longSide", s, n.longSide), r("shortSide", u, n.shortSide), r("longSide", a, n.l), r("shortSide", i, n.w), r("t", Number(e.t) || 0, n.t), n.crossDimensionalRule) {
    const { primaryMin: c, secondaryMin: f } = n.crossDimensionalRule, m = e.l || 0, I = e.w || 0;
    if (c != null && f != null) {
      const O = m >= c && I >= f, b = I >= c && m >= f;
      !O && !b && t.push({
        valid: !1,
        dimension: "crossDimensional",
        constraint: "crossDimensional",
        message: n.message || `At least one side must be ≥ ${c} mm and the other side must be ≥ ${f} mm`
      });
    }
  }
  return n.formula && (fp(n.formula, {
    l: e.l,
    w: e.w,
    longSide: e.longSide,
    shortSide: e.shortSide
  }) || t.push({
    valid: !1,
    dimension: "longSide",
    value: e.longSide || 0,
    constraint: "min",
    limit: 0,
    message: n.message || "Part does not meet validation requirements"
  })), {
    valid: t.length === 0,
    violations: t
  };
}
function fp(e, n) {
  try {
    return !!new ri({}).evaluateExpression(e, {
      l: n.l || 0,
      w: n.w || 0,
      longSide: n.longSide || 0,
      shortSide: n.shortSide || 0
    });
  } catch (t) {
    return console.warn("Formula evaluation error:", t, "Formula:", e), !0;
  }
}
function pp(e) {
  if (e.message)
    return e.message;
  if (e.constraint === "crossDimensional")
    return "Part dimensions do not meet requirements";
  const n = is(String(e.dimension));
  return as({
    dimensionName: n,
    constraint: e.constraint === "max" ? "max" : "min",
    limit: e.limit ?? 0,
    value: e.value ?? 0,
    subject: "Part"
  });
}
an([
  "full_stock",
  "part_area",
  "cut_length",
  "full_stock_plus_cut_length",
  "full_stock_plus_num_parts",
  "full_stock_plus_part_perimeter",
  "roll_length"
]);
const mp = Ce(
  d(),
  S().min(0)
).default({}), gp = $({
  banding: d().optional(),
  finish: d().optional(),
  planing: d().optional(),
  machining: d().optional()
}).optional(), hp = $({
  name: d().trim().min(1),
  db_id: d().optional(),
  code: d().optional(),
  brand: d().optional(),
  variant: d().optional(),
  finish: d().optional(),
  // Raw `material` label from source stock — preserved when the source
  // data uses it as the friendly product name (typical WordPress / widget
  // shape: `material: "Birch Plywood", name: "SKU-123"`). The catalogue
  // flow doesn't set this; it carries identity on `name` + `code` instead.
  material: d().optional(),
  displayName: d().optional(),
  imageUrl: d().optional(),
  color: d().optional(),
  colorHex: d().optional(),
  thicknesses: te(
    Ze([
      d().transform((e) => {
        const n = parseFloat(e);
        return isNaN(n) ? e : n;
      }),
      S()
    ])
  ).min(1),
  widths: te(
    Ze([
      d().transform((e) => {
        const n = parseFloat(e);
        return isNaN(n) ? e : n;
      }),
      S()
    ])
  ).optional(),
  // Unique (l, w) sheet sizes available for this material across all
  // thicknesses. Populated for panel stock only — linear stock uses `widths`
  // above for its single-dimension variant axis. The full-stock dialog uses
  // this list to let the customer pick which sheet size they're buying when
  // more than one is available for the chosen material + thickness.
  dimensions: te($({
    l: S(),
    w: S()
  })).optional(),
  extras: gp,
  fullSizeOnly: ae().optional()
}), Ri = $({
  labels: te(d()).default([]),
  pricing: Ce(d(), S().min(0)).default({}),
  options: xe().optional(),
  keys: te(d()).optional(),
  // if not all the default keys should be set
  locations: te(d()).optional(),
  // available locations for this extras type
  groups: te(Xa).optional(),
  // custom location groups
  rules: xe().optional(),
  // validation rules for this extras type
  displayNames: Ce(d(), d()).optional(),
  // slug key → product name for dropdown display
  codes: Ce(d(), d()).optional(),
  // tuple key → SKU (WC flow: built from variation SKUs for the cutlist CSV)
  maxGap: S().optional(),
  // banding-only: max gap (mm) between part thickness and strip width (catalogue picker)
  perSide: ae().optional(),
  // banding-only: catalogue picker renders one decor cascade per edge instead of one shared SKU
  defaultPrice: S().optional(),
  // fallback per-metre rate for catalogue-linked banding SKUs not in `pricing`
  // True when the server included any catalogue-linked extra (sourceCatalogueKey set) of this type.
  // Drives the storefront calculator out of legacy-global fallback mode so the org's full catalogue
  // (e.g. ~1,700 Egger SKUs in `pricing`, kept for cart-side lookup) doesn't leak onto materials
  // that never linked it. See `getShapeExtrasConfig` in EcommerceCalculator.vue.
  containsCatalogueLinked: ae().optional(),
  // Compound-key pricing for group-mode extras, keyed `<extraKey>|<groupId>`.
  // Kept in a sibling field (not merged into `pricing`) so `validateExtrasCompleteness`
  // doesn't see the `|` and mis-derive `maxPricingLevels` — see the EcommerceCalculator
  // `initExtra` comment. Consumed at the cart-total site, not by the widget itself.
  groupPricing: Ce(d(), S()).optional(),
  // Per-code pricing formulas. When a formula exists for a code, both the
  // inline per-feature preview AND the cart total evaluate the formula
  // instead of multiplying the flat rate. Fanned out per-code by the
  // server's `buildExtrasConfig` so one Extra → many code entries.
  formulas: Ce(d(), d()).optional()
});
$({
  success: ae(),
  price: S().optional(),
  error: d().optional(),
  cacheHit: ae().optional()
});
$({
  valid: ae(),
  errors: te(d()),
  warnings: te(d())
});
$({
  pricing: mp,
  labels: te(d()),
  options: te(te(d())),
  // Simplified to string arrays only
  keys: te(d()),
  maxLevels: S().min(1)
});
$({
  enableCaching: ae().default(!0),
  enableLogging: ae().default(!1),
  maxCacheSize: S().min(1).default(1e3)
});
const el = an(["select", "multiselect", "range", "boolean", "search"]), tl = an(["asc", "desc"]), nl = an(["grid", "list"]), Wa = $({
  _id: d(),
  name: d(),
  code: d().optional(),
  labels: te(d()).optional(),
  pricing: Ce(d(), S()).optional(),
  price: S().optional(),
  // Catalogue link — when set, the customer renders a Decor × Type ×
  // Width × Thickness picker against /catalogues/<key>/banding-axes.
  sourceCatalogueKey: d().optional(),
  // Per-axis pricing rules — preserved so per-shape inline price hints
  // can compute against the rule that matches.
  pricingRules: te($({
    materials: te(d()).optional(),
    widths: te(S()).optional(),
    thicknesses: te(S()).optional(),
    price: S()
  })).optional()
}), vp = $({
  banding: Wa.optional(),
  finish: Wa.optional(),
  planing: Wa.optional(),
  machining: Wa.optional()
}).optional(), bp = $({
  enabled: ae(),
  price: S(),
  description: d().optional(),
  maxQuantity: S().optional()
}).optional(), yp = $({
  // Visual (Note: color, weight, imageUrl, tags, available are now in InputStock base schema)
  colorHex: Hr,
  name: d().optional().describe("User-friendly display name"),
  description: d().optional().describe("Detailed description"),
  code: d().optional().describe("Internal material/product code"),
  // Categorization
  category: d().optional().describe("Stock category"),
  // Surface finish (e.g., "High Gloss", "Matt", "Satin")
  finish: d().optional().describe("Surface finish"),
  // Available extras from material (resolved from material.extras)
  extras: vp.describe("Available extras for this stock"),
  // Sample ordering configuration (from material)
  sample: bp.describe("Sample ordering configuration"),
  // External links — supplier-supplied datasheets, asset bundles, 3D viewer
  // URLs etc. surfaced in the customer-side Details dialog. Populated for
  // library-sourced rows from the catalogue entry's `urls` field; absent
  // or empty for shop-owned stock until the editor populates it.
  urls: te($({
    label: d(),
    url: d()
  })).optional().describe("Supplier external links (datasheets, asset bundle, …)"),
  // UI metadata
  minQuantity: S().int().positive().nullable().optional().describe("Minimum order quantity")
});
Nn.merge(yp).describe("Stock option with filtering and display metadata");
const kp = $({
  field: d().describe("Property name to filter on"),
  type: el,
  label: d().describe("Display label"),
  custom: ae().default(!1).describe("Whether this is a custom property"),
  // Range filter options
  min: S().nullable().optional().describe("Minimum value for range filter"),
  max: S().nullable().optional().describe("Maximum value for range filter"),
  step: S().nullable().optional().describe("Step size for range filter"),
  // Select filter options
  options: te($({
    label: d(),
    value: xe()
  })).optional().describe("Predefined options for select filters"),
  // Display options
  visible: ae().default(!0).describe("Whether filter is visible"),
  collapsible: ae().default(!0).describe("Whether filter panel is collapsible"),
  order: S().int().nullable().optional().describe("Display order")
}), wp = $({
  field: d().describe("Field to sort by"),
  order: tl,
  label: d().optional().describe("Display label for sort option")
}), gs = $({
  // Filter configuration
  availableFilters: te(kp).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: te(d()).default(["cost", "material", "t"]).describe("Sortable fields"),
  defaultSort: wp.default({
    field: "cost",
    order: "asc"
  }).describe("Default sort configuration"),
  // Display configuration
  displayMode: nl.default("grid").describe("Default display mode"),
  itemsPerPage: S().int().positive().default(20).describe("Items per page for pagination"),
  // Feature toggles
  enableSearch: ae().default(!0).describe("Enable search functionality"),
  // Selection behavior
  allowMultipleSelection: ae().default(!0).describe("Allow multiple stock selection"),
  maxSelection: S().int().positive().nullable().optional().describe("Maximum number of stock items to select")
}), Sp = $({
  field: d(),
  value: xe(),
  type: el
});
$({
  // Active filters
  activeFilters: te(Sp).default([]).describe("Currently active filters"),
  // Search
  searchQuery: d().default("").describe("Current search query"),
  // Sort
  sortBy: d().default("cost").describe("Current sort field"),
  sortOrder: tl.default("asc").describe("Current sort order"),
  // Display
  displayMode: nl.default("grid").describe("Current display mode"),
  currentPage: S().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: te(d()).default([]).describe("IDs of selected stock items")
});
function Jg() {
  return gs.parse({});
}
const al = $({}).passthrough(), il = $({
  l: S(),
  w: S(),
  t: S().nullable(),
  q: S(),
  stockId: d()
}), hs = Zr.partial(), sl = $({
  q: S().optional(),
  analysis: hs.nullable().optional()
}), ol = $({
  holes: te($({
    x: S(),
    y: S(),
    diameter: S(),
    depth: S().optional(),
    face: S().optional(),
    type: d().optional()
  })).optional(),
  hingeHoles: te($({
    position: S(),
    side: d(),
    face: S().optional(),
    numHoles: S().optional(),
    diameter: S().optional(),
    depth: S().optional(),
    hingeLength: S().optional(),
    distanceFromEdge: S().optional(),
    outerSpacing: S().optional()
  })).optional(),
  corners: te($({
    index: S(),
    type: d().nullable().optional(),
    size: S().nullable().optional()
  })).optional()
}), ll = $({
  bladeWidth: S().optional(),
  cutType: d().optional(),
  cutPreference: d().optional(),
  stackHeight: S().optional()
}), xp = $({
  l: S(),
  w: S(),
  t: S().nullable(),
  material: d().nullable(),
  orientationLock: No.nullable(),
  q: S(),
  name: d().nullable(),
  // V2 format: flat banding/finish (x1/x2/y1/y2 for banding, a/b for finish)
  banding: Ce(d(), Ze([d(), ae()])).nullable().optional(),
  finish: Ce(d(), Ze([d(), ae()])).nullable().optional(),
  planing: Ce(d(), Ze([d(), ae()])).nullable().optional(),
  customData: Ce(d(), xe()).nullable().optional()
}), Ip = $({
  id: d(),
  name: d().nullable(),
  l: S(),
  w: S(),
  t: S().nullable(),
  material: d().nullable(),
  q: S(),
  trim: $({
    x1: S(),
    x2: S(),
    y1: S(),
    y2: S()
  }).nullable().optional(),
  cost: S().nullable().optional(),
  /** Configured percentage discount (0–100) — surfaced to pricing formulas. */
  discount: S().nullable().optional(),
  /** Per-stock pricing override evaluated at checkout — see
   *  shared/formula/pricing-variables.ts for the available variable surface. */
  pricingFormula: d().nullable().optional(),
  db_id: d().nullable().optional(),
  code: d().nullable().optional(),
  analysis: hs.nullable().optional(),
  /** Per-sheet analysis — present when the cut server emits per-sheet data.
   *  Pricing formulas iterate these when set so usedFraction reflects each
   *  physical sheet, not the order-wide average. */
  sheets: te(sl).nullable().optional(),
  customData: Ce(d(), xe()).nullable().optional()
}), Pp = $({
  id: d().optional(),
  name: d().optional(),
  l: S(),
  w: S(),
  t: S().nullable().optional(),
  material: d().optional(),
  q: S().optional(),
  orientationLock: Ze([
    yt(""),
    yt("l"),
    yt("w")
  ]).nullable().optional(),
  // V2 format: flat banding/finish
  banding: Ce(d(), Ze([d(), ae()])).nullable().optional(),
  finish: Ce(d(), Ze([d(), ae()])).nullable().optional(),
  planing: Ce(d(), Ze([d(), ae()])).nullable().optional(),
  // V3 nested extras also stored on inputs even for V2 results (see mapToCheckoutResultV2)
  extras: $({
    banding: $({
      sides: Ce(d(), Ze([d(), ae()]))
    }).nullable().optional(),
    finish: $({
      faces: Ce(d(), Ze([d(), ae()]))
    }).nullable().optional(),
    planing: $({
      sides: Ce(d(), Ze([d(), ae()])).optional(),
      faces: Ce(d(), Ze([d(), ae()])).optional()
    }).nullable().optional()
  }).optional(),
  machining: ol.optional(),
  stock: $({
    db_id: d().optional(),
    code: d().optional(),
    material: d().optional(),
    thickness: S().optional()
  }).nullable().optional(),
  customData: Ce(d(), xe()).nullable().optional()
});
$({
  jobId: S(),
  metadata: La.optional(),
  parts: te(xp),
  stock: te(Ip),
  offcuts: te(il),
  inputs: $({
    parts: te(Pp),
    saw: ll.optional()
  }),
  apiResultV3: al.optional()
});
const Cp = $({
  l: S(),
  w: S(),
  t: S().nullable(),
  material: d().nullable(),
  orientationLock: No.nullable(),
  q: S(),
  name: d().nullable(),
  // V3 format: nested extras structure
  extras: $({
    banding: $({
      sides: Ce(d(), Ze([d(), ae()]))
    }).nullable().optional(),
    finish: $({
      faces: Ce(d(), Ze([d(), ae()]))
    }).nullable().optional(),
    planing: $({
      sides: Ce(d(), Ze([d(), ae()])).optional(),
      faces: Ce(d(), Ze([d(), ae()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: Ce(d(), xe()).nullable().optional()
}), Lp = $({
  id: d(),
  name: d().nullable(),
  l: S(),
  w: S(),
  t: S().nullable(),
  material: d().nullable(),
  q: S(),
  trim: $({
    l1: S().optional(),
    l2: S().optional(),
    w1: S().optional(),
    w2: S().optional()
  }).nullable().optional(),
  cost: S().nullable().optional(),
  /** Configured percentage discount (0–100) — surfaced to pricing formulas. */
  discount: S().nullable().optional(),
  /** Per-stock pricing override evaluated at checkout — see
   *  shared/formula/pricing-variables.ts for the available variable surface. */
  pricingFormula: d().nullable().optional(),
  db_id: d().nullable().optional(),
  code: d().nullable().optional(),
  analysis: hs.nullable().optional(),
  /** Per-sheet analysis — present when the cut server emits per-sheet data.
   *  Pricing formulas iterate these when set so usedFraction reflects each
   *  physical sheet, not the order-wide average. */
  sheets: te(sl).nullable().optional(),
  // New stock fields
  color: Jr.nullable(),
  weight: S().positive().nullable().optional(),
  imageUrl: d().nullable().optional(),
  tags: te(d()).nullable().optional(),
  available: ae().nullable().optional(),
  customData: Ce(d(), xe()).nullable().optional()
}), Op = $({
  id: d().optional(),
  name: d().optional(),
  l: S(),
  w: S(),
  t: S().nullable().optional(),
  material: d().optional(),
  q: S().optional(),
  orientationLock: Ze([
    yt(""),
    yt("l"),
    yt("w")
  ]).nullable().optional(),
  // V3 format: nested extras structure
  extras: $({
    banding: $({
      sides: Ce(d(), Ze([d(), ae()]))
    }).nullable().optional(),
    finish: $({
      faces: Ce(d(), Ze([d(), ae()]))
    }).nullable().optional(),
    planing: $({
      sides: Ce(d(), Ze([d(), ae()])).optional(),
      faces: Ce(d(), Ze([d(), ae()])).optional()
    }).nullable().optional()
  }).optional(),
  machining: ol.optional(),
  stock: $({
    db_id: d().optional(),
    code: d().optional(),
    material: d().optional(),
    thickness: S().optional()
  }).nullable().optional(),
  customData: Ce(d(), xe()).nullable().optional()
});
$({
  jobId: S(),
  metadata: La.optional(),
  parts: te(Cp),
  stock: te(Lp),
  offcuts: te(il),
  inputs: $({
    parts: te(Op),
    saw: ll.optional()
  }),
  apiResultV3: al.optional()
});
function rl(e) {
  return {
    l: e.l,
    w: e.w,
    t: e.t ?? null,
    q: e.q,
    // Use stock.id to match the id property in the result's stock array
    stockId: e?.stock?.id || e?.stock?.parentId || ""
  };
}
function ul(e) {
  const n = /* @__PURE__ */ new Map();
  for (const t of e)
    t?.parentId && (n.has(t.parentId) || n.set(t.parentId, []), n.get(t.parentId).push({
      q: t.q ?? 1,
      analysis: t.analysis ?? null
    }));
  return n;
}
function cl(e) {
  const n = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  for (const a of e) {
    if (!a?.analysis || !a?.parentId) continue;
    const i = a.parentId, s = a.analysis;
    if (!n.has(i))
      n.set(i, {
        areaEfficiency: s.areaEfficiency ?? 0,
        finishArea: s.finishArea ?? 0,
        bandingLength: s.bandingLength ?? 0,
        partArea: s.partArea ?? 0,
        totalParts: s.totalParts ?? 0,
        stackedNumberOfCuts: s.stackedNumberOfCuts ?? 0,
        numberOfCuts: s.numberOfCuts ?? 0,
        stackedCutLength: s.stackedCutLength ?? 0,
        cutLength: s.cutLength ?? 0,
        rollLength: s.rollLength ?? 0
      }), t.set(i, 1);
    else {
      const u = n.get(i), r = t.get(i) + 1;
      t.set(i, r), n.set(i, {
        // Sum for areaEfficiency (we'll average it at the end)
        areaEfficiency: u.areaEfficiency + (s.areaEfficiency ?? 0),
        // Sum all other fields
        finishArea: u.finishArea + (s.finishArea ?? 0),
        bandingLength: u.bandingLength + (s.bandingLength ?? 0),
        partArea: u.partArea + (s.partArea ?? 0),
        totalParts: u.totalParts + (s.totalParts ?? 0),
        stackedNumberOfCuts: u.stackedNumberOfCuts + (s.stackedNumberOfCuts ?? 0),
        numberOfCuts: u.numberOfCuts + (s.numberOfCuts ?? 0),
        stackedCutLength: u.stackedCutLength + (s.stackedCutLength ?? 0),
        cutLength: u.cutLength + (s.cutLength ?? 0),
        rollLength: u.rollLength + (s.rollLength ?? 0)
      });
    }
  }
  for (const [a, i] of n) {
    const s = t.get(a) ?? 1;
    i.areaEfficiency = Math.round(i.areaEfficiency / s * 100) / 100;
  }
  return n;
}
const Ep = $({
  stockSelection: iu.optional(),
  stackingMode: au.optional(),
  minSpacing: Fo.optional()
}).optional(), Ap = $({
  stockType: an([...Wi]).optional(),
  bladeWidth: Ze([
    nu,
    d()
  ]).optional(),
  cutType: eu,
  cutPreference: Xr,
  stackHeight: Yr,
  guillotineOptions: Qr,
  efficiencyOptions: tu.optional(),
  options: Ep
}).optional(), Tp = $({
  holes: S().min(0).nullable().optional(),
  corners: S().min(0).nullable().optional()
}).optional(), Fp = Wn.pick({
  l: !0,
  w: !0,
  t: !0,
  q: !0,
  name: !0,
  material: !0,
  orientationLock: !0,
  customData: !0,
  stock: !0
}).extend({
  // Checkout-specific: flattened extras (not in extras container)
  banding: lu.nullable().optional(),
  finish: ou.nullable().optional(),
  planing: su.nullable().optional(),
  stockId: d().nullable().optional()
}), Np = $({
  stock: te(Nn).default([]),
  parts: te(Fp).optional(),
  options: up,
  type: d().optional(),
  // variable | simple
  materials: te(hp).optional(),
  banding: Ri.nullable().optional(),
  finish: Ri.nullable().optional(),
  planing: Ri.nullable().optional(),
  machining: xe().optional(),
  machiningPricing: Tp,
  // DEPRECATED: bandingPricing, finishPricing, planingPricing are now in banding.pricing, finish.pricing, planing.pricing
  variations: xe().optional(),
  partRules: cp.optional(),
  customValidation: $({
    enabled: ae(),
    rules: te(xe())
  }).optional(),
  saw: Ap,
  // Map of saw_id → SawConfig for every saw any pickable stock /
  // material / library override might route to. Used by the calculator
  // to swap `sawData` when the customer picks a material whose
  // `db_sawId` differs from the page-load saw — keeps the storefront
  // UI (stockType-driven fields, bladeWidth, validation) consistent
  // with what the server-side resolve will actually apply at calc
  // time. Loose value schema (`z.any()`) because the shape mirrors the
  // `saw` field above — the source of truth lives server-side in
  // `sawDocToConfig`, and we don't want to maintain a redundant
  // client-side schema.
  sawsById: Ce(d(), xe()).optional(),
  stockFilter: $({
    enabled: ae().optional(),
    serverMode: ae().optional(),
    config: gs.optional()
  }).optional(),
  // Product catalog configuration
  products: $({
    enabled: ae().optional(),
    showCategories: ae().optional()
  }).optional(),
  // API configuration (for order lookup and other API features)
  api: $({
    baseUrl: d(),
    orgSlug: d(),
    isCustomDomain: ae().optional(),
    // WebSocket origin + org id for the storefront's inventory-change watcher
    // (Vanilla.vue startInventoryWatch). Host integrations inject these from
    // the /config response wrapper (`orgId`) and their deploy env.
    wsServer: d().optional(),
    orgId: d().optional()
  }).optional(),
  // Admin configuration (configurator, etc.)
  config: $({
    configurator: $({
      enabled: ae(),
      url: d().nullable().optional(),
      spec: xe().nullable().optional()
    }).optional()
  }).optional()
});
$({
  slug: d().optional(),
  company: $({
    name: d(),
    contactEmail: d(),
    phone: d().optional(),
    address: d().optional()
  }),
  branding: $({
    logo: d().optional(),
    favicon: d().optional(),
    colors: $({
      button: d(),
      buttonText: d(),
      headerBackground: d().optional(),
      headerText: d().optional(),
      partA: d().optional(),
      partB: d().optional(),
      partSelected: d().optional(),
      stock: d().optional(),
      text: d().optional()
    }),
    showCredit: ae().optional()
  }),
  config: $({
    stockCount: S().optional(),
    stock: te(xe()).optional(),
    materials: te(xe()).optional(),
    options: xe().optional(),
    pricing: xe().optional(),
    banding: xe().optional(),
    finish: xe().optional(),
    planing: xe().optional(),
    machining: xe().optional(),
    bandingPricing: Ce(d(), S()).optional(),
    finishPricing: Ce(d(), S()).optional(),
    planingPricing: Ce(d(), S()).optional(),
    machiningPricing: Ce(d(), S()).optional(),
    saw: xe().optional(),
    shipping: $({
      enabled: ae(),
      originCountry: d().optional()
    }).optional(),
    stockFilter: $({
      config: gs.optional()
    }).optional(),
    partRules: xe().optional(),
    customFields: te(xe()).optional(),
    termsUrl: d().optional(),
    termsContent: d().optional(),
    tracking: $({
      gaMeasurementId: d().optional(),
      gtmContainerId: d().optional()
    }).optional(),
    customValidation: $({
      enabled: ae(),
      rules: te(xe())
    }).optional(),
    importSettings: $({
      grouping: an(["material", "material-variant", "auto"]).optional(),
      codeRegex: d().optional()
    }).optional()
  }),
  stripe: $({
    enabled: ae(),
    publishableKey: d().optional(),
    currency: d().optional()
  }).optional(),
  customerAccounts: $({
    enabled: ae(),
    requireForCheckout: ae().optional()
  }).optional()
});
function $p(e) {
  const n = Np.safeParse(e);
  return {
    success: n.success,
    data: n.success ? n.data : void 0,
    error: n.success ? void 0 : n.error
  };
}
function Mp(e) {
  const n = $p(e);
  if (!n.success) {
    const t = n.error?.issues.map((a) => `${a.path.join(".")}: ${a.message}`).join(", ") || "Unknown validation error";
    throw console.error("Invalid checkout data:", JSON.stringify(e, null, 2)), console.error("Validation errors:", t), new Error(`Invalid checkout data: ${t}`);
  }
  return n.data;
}
function cn(e) {
  return e == null ? !1 : typeof e == "object" && e.value !== void 0 ? e.value : e;
}
function Dp(e) {
  if (e.extras?.banding?.sides) {
    const n = e.extras.banding.sides, t = {};
    if (ot(n.a) || ot(n.b) || ot(n.c) || ot(n.d))
      t.x1 = ot(n.a) ? cn(n.a) : !1, t.y1 = ot(n.b) ? cn(n.b) : !1, t.x2 = ot(n.c) ? cn(n.c) : !1, t.y2 = ot(n.d) ? cn(n.d) : !1;
    else {
      const i = Qi(n);
      t.x1 = ot(i.x1) ? cn(i.x1) : !1, t.x2 = ot(i.x2) ? cn(i.x2) : !1, t.y1 = ot(i.y1) ? cn(i.y1) : !1, t.y2 = ot(i.y2) ? cn(i.y2) : !1;
    }
    e.banding = t;
  }
  if (e.extras?.finish?.faces) {
    const n = e.extras.finish.faces, t = {};
    t.a = ot(n.a) ? cn(n.a) : !1, t.b = ot(n.b) ? cn(n.b) : !1, e.finish = t;
  }
  if (e.extras?.planing) {
    const n = e.extras.planing, t = {}, a = Qi(n.sides || {});
    n.sides && (ot(a.x1) && (t.x1 = a.x1), ot(a.x2) && (t.x2 = a.x2), ot(a.y1) && (t.y1 = a.y1), ot(a.y2) && (t.y2 = a.y2)), n.faces && (ot(n.faces.a) && (t.a = n.faces.a), ot(n.faces.b) && (t.b = n.faces.b)), Object.keys(t).length > 0 && (e.planing = t);
  }
  (e.extras?.banding || e.extras?.finish || e.extras?.planing) && delete e.extras;
}
function _p(e, n = 0) {
  if (n === 0)
    return e;
  if (n === 1 || n === 2) {
    const t = Math.max(e.l, e.w), a = Math.min(e.l, e.w);
    e.w > e.l && (e.l = t, e.w = a);
  }
  return e;
}
function dl(e, n = 0) {
  debugger;
  return n === 0 || e.forEach((t) => _p(t, n)), e;
}
function Vp(e) {
  const n = typeof e.weight == "number" && Number.isFinite(e.weight) && e.weight > 0 ? e.weight : null;
  if (n !== null) return n;
  const t = typeof e.density == "number" && Number.isFinite(e.density) && e.density > 0 ? e.density : null, a = typeof e.l == "number" ? e.l : null, i = typeof e.w == "number" ? e.w : null, s = typeof e.t == "number" ? e.t : null;
  if (!t || !a || !i || !s) return null;
  const u = a / 1e3 * (i / 1e3) * (s / 1e3);
  return Math.round(t * u * 100) / 100;
}
function fl(e) {
  const n = e.machining;
  if (!n) return;
  const t = {};
  return n.holes?.length && (t.holes = n.holes.map((a) => ({
    x: a.x,
    y: a.y,
    diameter: a.diameter,
    ...a.depth != null && { depth: a.depth },
    face: a.face ?? 0,
    type: a.type ?? "regular"
  }))), n.hingeHoles?.length && (t.hingeHoles = n.hingeHoles.map((a) => ({
    position: a.position,
    side: a.side,
    face: a.face ?? 0,
    numHoles: a.numHoles,
    diameter: a.diameter,
    depth: a.depth,
    hingeLength: a.hingeLength,
    distanceFromEdge: a.distanceFromEdge,
    outerSpacing: a.outerSpacing
  }))), n.corners?.length && (t.corners = n.corners.map((a) => ({
    index: a.index,
    type: a.type ?? null,
    size: a.size ?? null
  }))), Object.keys(t).length > 0 ? t : void 0;
}
function Rp(e, n, t, a, i, s, u, r) {
  const c = cl(a), f = ul(a), m = n.map((b) => {
    const _ = {
      l: b.l,
      w: b.w,
      t: b?.t ?? null,
      material: b.material ?? null,
      orientationLock: b.orientationLock ?? null,
      q: u?.addedPartTally?.[b.parentId] || b.q,
      name: b.name ?? null,
      customData: b.customData ?? null,
      // Always include extras properties even if not set (using API format)
      banding: ec(),
      finish: ti(),
      planing: nc()
    }, U = { ...b };
    return Dp(U), U.banding && (_.banding = U.banding), U.finish && (_.finish = U.finish), U.planing && (_.planing = U.planing), _;
  }), I = t.map((b) => {
    const _ = {
      id: b.id,
      name: b?.name ?? null,
      l: b.l,
      w: b.w,
      t: b?.t ?? null,
      material: b.material ?? null,
      code: b?.code ?? null,
      q: u?.usedStockTally?.[b.parentId] || b.q,
      cost: b?.cost ?? null,
      discount: b?.discount ?? null,
      pricingFormula: b?.pricingFormula ?? null,
      analysis: c.get(b.parentId) ?? null,
      sheets: f.get(b.parentId) ?? null,
      customData: b?.customData ?? null
    };
    return b?.trim && (_.trim = Qi(b.trim)), _;
  }), O = {
    parts: s.map((b) => {
      const _ = {
        id: b.id ? String(b.id).split(".")[0] : b.id,
        name: b.name,
        l: b.l,
        w: b.w,
        t: b.t ?? null,
        material: b.material,
        q: b.q,
        orientationLock: b.orientationLock ?? null,
        stock: b.stock ?? null,
        customData: b.customData ?? null
      };
      b.extras && (_.extras = {}, b.extras.banding?.sides && (_.extras.banding = { sides: b.extras.banding.sides }), b.extras.finish?.faces && (_.extras.finish = { faces: b.extras.finish.faces }), b.extras.planing && (_.extras.planing = {
        ...b.extras.planing.sides && { sides: b.extras.planing.sides },
        ...b.extras.planing.faces && { faces: b.extras.planing.faces }
      }));
      const U = fl(b);
      return U && (_.machining = U), _;
    })
  };
  return r && dl(m, r), {
    jobId: e,
    metadata: u,
    parts: m,
    stock: I,
    offcuts: i?.map(rl) || [],
    inputs: O
  };
}
function qp(e, n, t, a, i, s, u, r) {
  const c = cl(a), f = ul(a), m = n.map((b) => {
    const _ = {
      l: b.l,
      w: b.w,
      t: b?.t ?? null,
      material: b.material ?? null,
      orientationLock: b.orientationLock ?? null,
      q: u?.addedPartTally?.[b.parentId] || b.q,
      name: b.name ?? null,
      customData: b.customData ?? null,
      // Always include extras structure even if not set (using internal format)
      extras: {
        banding: { sides: Ji() },
        finish: { faces: ti() },
        planing: tc()
      }
    };
    return b.extras && (b.extras.banding?.sides && (_.extras.banding = { sides: b.extras.banding.sides }), b.extras.finish?.faces && (_.extras.finish = { faces: b.extras.finish.faces }), b.extras.planing && (_.extras.planing = {
      sides: b.extras.planing.sides || Ji(),
      faces: b.extras.planing.faces || ti()
    })), _;
  }), I = t.map((b) => ({
    id: b.id,
    name: b?.name ?? null,
    l: b.l,
    w: b.w,
    t: b?.t ?? null,
    material: b.material ?? null,
    code: b?.code ?? null,
    q: u?.usedStockTally?.[b.parentId] || b.q,
    trim: b?.trim ?? null,
    // Keep internal format (l1/l2/w1/w2)
    cost: b?.cost ?? null,
    discount: b?.discount ?? null,
    pricingFormula: b?.pricingFormula ?? null,
    analysis: c.get(b.parentId) ?? null,
    sheets: f.get(b.parentId) ?? null,
    // New stock fields
    color: b?.color ?? null,
    density: b?.density ?? null,
    weight: Vp(b),
    imageUrl: b?.imageUrl ?? null,
    tags: b?.tags ?? null,
    available: b?.available ?? null,
    customData: b?.customData ?? null
  })), O = {
    parts: s.map((b) => {
      const _ = {
        id: b.id ? String(b.id).split(".")[0] : b.id,
        name: b.name,
        l: b.l,
        w: b.w,
        t: b.t ?? null,
        material: b.material,
        q: b.q,
        orientationLock: b.orientationLock ?? null,
        stock: b.stock ?? null,
        customData: b.customData ?? null
      };
      b.extras && (_.extras = {}, b.extras.banding?.sides && (_.extras.banding = { sides: b.extras.banding.sides }), b.extras.finish?.faces && (_.extras.finish = { faces: b.extras.finish.faces }), b.extras.planing && (_.extras.planing = {
        ...b.extras.planing.sides && { sides: b.extras.planing.sides },
        ...b.extras.planing.faces && { faces: b.extras.planing.faces }
      }));
      const U = fl(b);
      return U && (_.machining = U), _;
    })
  };
  return r && dl(m, r), {
    jobId: e,
    metadata: u,
    parts: m,
    stock: I,
    offcuts: i?.map(rl) || [],
    inputs: O
  };
}
function Bp(e) {
  return e ? !!e.code || !!e.name || !!e.sourceCatalogueKey || Array.isArray(e.groups) && e.groups.length > 0 || Array.isArray(e.labels) && e.labels.length > 0 || !!e.pricing && typeof e.pricing == "object" && Object.keys(e.pricing).length > 0 : !1;
}
function jp(e, n, t) {
  const a = e.sourceCatalogueKey ? n?.pricing || {} : {};
  return e.pricing && typeof e.pricing == "object" ? { ...a, ...e.pricing } : t ? { ...a, [t]: e.price ?? 0 } : { ...a };
}
const Up = "stockExtras";
function Qg(e, n) {
  !n || typeof n != "object" || (e.resolvedExtras = n);
}
function ai(e) {
  const n = e?.resolvedExtras;
  if (n && typeof n == "object") return n;
  const t = e?.customData?.[Up];
  if (t && typeof t == "object") return t;
}
function pl(e, n) {
  return ai(e)?.[n];
}
function Gp(e) {
  const n = ai(e);
  if (!n) return !1;
  for (const t of Qo)
    if (n[t]) return !0;
  return !1;
}
function Wp(e) {
  const t = pl(e, "banding")?.sourceCatalogueKey;
  return typeof t == "string" && t ? t : null;
}
function zp(e, n) {
  if (n !== "banding") return !1;
  const t = e?.sourceCatalogueKey;
  return typeof t == "string" && t.length > 0;
}
function Kp(e) {
  const n = e.customData?.stockName || "";
  return {
    name: e.name || n || void 0,
    brand: e.brand,
    variant: e.variant,
    material: e.material,
    finish: e.finish,
    code: e.code,
    displayName: e.displayName
  };
}
function qi(e) {
  const n = (e.variant || "").trim(), t = (e.material || "").trim(), a = (e.name || "").trim();
  if (n && a && t && n.toUpperCase() !== a.toUpperCase())
    return `${n} ${a}`.toUpperCase();
  if (n && t) return n.toUpperCase();
  if (t) return t.toUpperCase();
  const i = (e.code || "").trim();
  return i ? i.toUpperCase() : (la(Kp(e), { fallback: "" }).fullLabel || "").toUpperCase();
}
function Hp(e) {
  if (e && typeof e == "object" && "resolvedExtras" in e) {
    const { resolvedExtras: n, ...t } = e;
    return t;
  }
  return e;
}
const Zp = ["id", "data-index"], Jp = /* @__PURE__ */ vt({
  __name: "BandingButton",
  props: {
    inputShape: { default: null },
    open: { type: Boolean, default: !1 },
    id: { default: "" },
    orientationModel: { default: 0 },
    stockGrain: { default: "n" },
    disabled: { type: Boolean, default: !1 },
    index: { default: 0 }
  },
  emits: ["clicked"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = W({
      l1: !1,
      l2: !1,
      w1: !1,
      w2: !1
    }), s = () => {
      if (!t.inputShape) return;
      let c = {
        l1: sa(t.inputShape, "banding", "side.l1"),
        l2: sa(t.inputShape, "banding", "side.l2"),
        w1: sa(t.inputShape, "banding", "side.w1"),
        w2: sa(t.inputShape, "banding", "side.w2")
      };
      const f = Eu(
        t.orientationModel,
        t.stockGrain,
        t.inputShape
      );
      f && (c = Cu(c, f)), i.value = c;
    };
    Qe([
      () => t.inputShape,
      // Watching the entire inputShape for deep changes
      () => t.orientationModel,
      () => t.stockGrain,
      () => t.inputShape?.orientationLock
      // Still watch orientationLock explicitly if it triggers a re-evaluation
    ], () => {
      s();
    }, { deep: !0, immediate: !0 });
    const u = (c) => {
      (c.key === "Enter" || c.key === " ") && r();
    }, r = () => {
      t.disabled || a("clicked");
    };
    return fn(() => {
      document.getElementById(t.id)?.addEventListener("keydown", u);
    }), si(() => {
      document.getElementById(t.id)?.removeEventListener("keydown", u);
    }), (c, f) => (T(), K("div", {
      id: e.id,
      class: lt(["banding-button", { open: e.open, disabled: e.disabled }]),
      "data-field": "banding",
      "data-index": e.index,
      tabindex: "0",
      onClick: r
    }, [
      be("div", {
        class: lt(["outer", {
          l1: i.value.l1,
          l2: i.value.l2,
          w1: i.value.w1,
          w2: i.value.w2
        }])
      }, [...f[0] || (f[0] = [
        be("div", { class: "inner" }, null, -1)
      ])], 2)
    ], 10, Zp));
  }
}), Qp = /* @__PURE__ */ sn(Jp, [["__scopeId", "data-v-60b62a98"]]), Yp = {
  key: 0,
  class: "material-picker__selected"
}, Xp = ["src", "alt"], em = ["title"], tm = { class: "material-picker__selected-stack" }, nm = { class: "material-picker__selected-line" }, am = { class: "material-picker__selected-name" }, im = {
  key: 0,
  class: "c-badge c-badge--light c-badge--sm material-picker__brand"
}, sm = {
  key: 0,
  class: "material-picker__selected-code"
}, om = {
  key: 1,
  class: "material-picker__placeholder"
}, lm = { class: "material-picker__search-wrap" }, rm = ["placeholder"], um = {
  key: 0,
  class: "material-picker__search-spinner",
  "aria-hidden": "true"
}, cm = {
  class: "material-picker__list",
  role: "listbox"
}, dm = {
  key: 0,
  class: "material-picker__empty"
}, fm = ["aria-selected", "onMousedown", "onMouseenter"], pm = ["src", "alt"], mm = ["title"], gm = { class: "material-picker__selected-stack" }, hm = { class: "material-picker__selected-line" }, vm = { class: "material-picker__selected-name" }, bm = {
  key: 0,
  class: "c-badge c-badge--light c-badge--sm material-picker__brand"
}, ym = {
  key: 0,
  class: "material-picker__selected-code"
}, km = /* @__PURE__ */ vt({
  __name: "MaterialPicker",
  props: {
    modelValue: { default: null },
    value: { default: void 0 },
    valueKey: { default: "name" },
    options: { default: void 0 },
    searchFn: { type: Function, default: void 0 },
    loadFn: { type: Function, default: void 0 },
    minQueryLength: { default: 2 },
    debounceMs: { default: 300 },
    id: { default: "" },
    label: { default: "" },
    placeholder: { default: "" },
    searchPlaceholder: { default: "Search materials..." },
    emptyMessage: { default: "No matching materials" },
    enableLabel: { type: Boolean, default: !0 },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    issue: { type: Boolean, default: !1 },
    allowClear: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "update:value", "select", "loaded", "clear"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = W(), s = W(), u = W(), r = W(!1), c = W(""), f = W(0), m = W(!1);
    let I = null, O = null;
    const b = W([]), _ = /* @__PURE__ */ new Map(), U = W(null), me = A(() => t.id || `material-picker-${Math.random().toString(36).slice(2, 8)}`), G = A(() => t.modelValue !== void 0 && t.modelValue !== null ? t.modelValue : t.value !== void 0 && t.value !== null ? t.value : null), { floatingStyles: q, teleportTarget: ce, syncFloatingFont: de } = Ko(
      i,
      s,
      {
        sizeApply({ rects: B, availableWidth: J, availableHeight: ke, elements: Re }) {
          const ee = B.reference.width, we = Math.min(J, Math.max(ee, 360));
          Object.assign(Re.floating.style, {
            maxHeight: `${Math.max(200, ke)}px`,
            minWidth: `${ee}px`,
            width: `${we}px`,
            maxWidth: `${J}px`
          });
        }
      },
      r
    ), w = A(() => Array.isArray(t.options));
    function M(B) {
      return B.map((J, ke) => {
        const Re = la(J, { fallback: J.name }), ee = [Re.fullLabel, J.code, J.displayName].filter(Boolean).join(" ").toLowerCase(), we = J._id || `idx-${ke}`;
        return { ...J, _key: `${Re.groupKey}|${we}`, _summary: Re, _haystack: ee };
      });
    }
    const ne = A(() => w.value ? M(t.options ?? []) : []), oe = A(() => w.value ? [] : M(b.value)), R = A(() => {
      if (w.value) {
        const B = c.value.trim().toLowerCase();
        return B ? ne.value.filter((J) => J._haystack.includes(B)) : ne.value;
      }
      return oe.value;
    }), x = A(() => {
      const B = G.value;
      if (!B) return null;
      if (w.value) {
        const Re = B.toUpperCase(), we = ne.value.find(
          (_e) => typeof _e.code == "string" && _e.code.toUpperCase() === Re
        ) || ne.value.find((_e) => D(_e) === B);
        if (we) return we;
      } else if (U.value && D(U.value) === B)
        return M([U.value])[0];
      const J = { name: B }, ke = la(J, { fallback: B });
      return { ...J, _key: `${ke.groupKey}|stub`, _summary: ke, _haystack: "" };
    });
    function D(B) {
      const J = t.valueKey === "_id" ? B._id : B.name;
      return J != null ? String(J) : null;
    }
    function le(B) {
      return D(B) === G.value;
    }
    function ie() {
      t.disabled || t.readonly || (r.value = !r.value, r.value && (c.value = "", f.value = 0, Mt(() => {
        de(), u.value?.focus(), !w.value && b.value.length === 0 && Xe("");
      })));
    }
    function se(B) {
      U.value = B;
      const J = D(B);
      a("update:modelValue", J), a("update:value", J), a("select", B), r.value = !1, c.value = "";
    }
    function We() {
      U.value = null, a("update:modelValue", null), a("update:value", null), a("clear");
    }
    async function Xe(B) {
      if (!t.searchFn) return;
      const J = B.toLowerCase(), ke = _.get(J);
      if (ke) {
        b.value = ke;
        return;
      }
      if (B.length > 0 && B.length < t.minQueryLength) {
        b.value = [];
        return;
      }
      O && O.abort(), O = new AbortController(), m.value = !0;
      try {
        const Re = await t.searchFn(B);
        _.set(J, Re), b.value = Re;
      } catch (Re) {
        if (Re?.name === "CanceledError" || Re?.code === "ERR_CANCELED") return;
        b.value = [];
      } finally {
        m.value = !1;
      }
    }
    function Ie() {
      w.value || (I && clearTimeout(I), I = setTimeout(
        () => Xe(c.value),
        t.debounceMs
      ));
    }
    Qe(G, async (B) => {
      if (!w.value) {
        if (!B || !t.loadFn) {
          U.value = null;
          return;
        }
        if (D(U.value ?? {}) !== B)
          try {
            const J = await t.loadFn(B);
            J && (U.value = J, a("loaded", J));
          } catch {
          }
      }
    }, { immediate: !0 }), fn(() => {
      if (w.value && G.value) {
        const B = ne.value.find((J) => D(J) === G.value);
        B && a("loaded", B);
      }
    });
    function Fe(B) {
      switch (B.key) {
        case "ArrowDown":
          B.preventDefault(), f.value < R.value.length - 1 && f.value++;
          break;
        case "ArrowUp":
          B.preventDefault(), f.value > 0 && f.value--;
          break;
        case "Enter":
          B.preventDefault(), R.value[f.value] && se(R.value[f.value]);
          break;
        case "Escape":
          B.preventDefault(), r.value = !1;
          break;
      }
    }
    function De(B) {
      if (!r.value) return;
      const J = B.target;
      i.value?.contains(J) || s.value?.contains(J) || (r.value = !1);
    }
    return Qe(r, (B) => {
      B ? document.addEventListener("mousedown", De) : document.removeEventListener("mousedown", De);
    }), li(() => {
      document.removeEventListener("mousedown", De), I && clearTimeout(I), O && O.abort();
    }), Qe(R, () => {
      f.value = 0;
    }), (B, J) => (T(), K("div", {
      class: lt(["input-wrapper material-picker", { issue: e.issue, required: e.required, disabled: e.disabled, focused: r.value }])
    }, [
      e.label && e.enableLabel ? (T(), Ne(xa, {
        key: 0,
        id: me.value,
        label: e.label,
        required: e.required
      }, {
        default: tn(() => [
          Ht(B.$slots, "label", {}, () => [
            nn(Se(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["id", "label", "required"])) : ue("", !0),
      be("div", {
        ref_key: "triggerRef",
        ref: i,
        class: lt(["material-picker__wrapper", { focused: r.value, empty: !x.value }]),
        onClick: ie
      }, [
        x.value ? (T(), K("div", Yp, [
          x.value._summary.imageUrl ? (T(), K("img", {
            key: 0,
            src: x.value._summary.imageUrl,
            class: "material-picker__thumb material-picker__thumb--lazy",
            loading: "lazy",
            alt: x.value._summary.productLabel,
            onLoad: J[0] || (J[0] = (ke) => ke.target.classList.add("material-picker__thumb--loaded"))
          }, null, 40, Xp)) : x.value.colorHex ? (T(), K("span", {
            key: 1,
            class: "material-picker__swatch",
            style: Gt({ background: x.value.colorHex }),
            title: x.value.color || "",
            "aria-hidden": "true"
          }, null, 12, em)) : ue("", !0),
          be("span", tm, [
            be("span", nm, [
              be("span", am, Se(x.value._summary.productLabel), 1),
              x.value._summary.brand ? (T(), K("span", im, Se(x.value._summary.brand), 1)) : ue("", !0)
            ]),
            x.value._summary.code ? (T(), K("span", sm, Se(x.value._summary.code), 1)) : ue("", !0)
          ])
        ])) : (T(), K("span", om, Se(e.placeholder || "Select…"), 1)),
        x.value && !e.disabled && e.allowClear ? (T(), K("button", {
          key: 2,
          type: "button",
          class: "c-btn c-btn--xs c-btn--unstyled field-clear-btn material-picker__clear",
          "aria-label": "Clear selection",
          onClick: Gn(We, ["stop"])
        }, "×")) : ue("", !0)
      ], 2),
      (T(), Ne(oi, {
        to: E(ce),
        disabled: !E(ce)
      }, [
        r.value ? (T(), K("div", {
          key: 0,
          ref_key: "floatingRef",
          ref: s,
          class: "material-picker__dropdown",
          style: Gt(E(q)),
          onMousedown: J[4] || (J[4] = Gn(() => {
          }, ["prevent"]))
        }, [
          be("div", lm, [
            J[5] || (J[5] = be("span", {
              class: "material-picker__search-icon",
              "aria-hidden": "true"
            }, "⌕", -1)),
            ts(be("input", {
              ref_key: "searchRef",
              ref: u,
              "onUpdate:modelValue": J[1] || (J[1] = (ke) => c.value = ke),
              type: "text",
              class: "material-picker__search",
              placeholder: e.searchPlaceholder,
              onMousedown: J[2] || (J[2] = Gn(() => {
              }, ["stop"])),
              onInput: Ie,
              onKeydown: Fe
            }, null, 40, rm), [
              [xo, c.value]
            ]),
            m.value ? (T(), K("span", um, "…")) : ue("", !0)
          ]),
          be("div", cm, [
            R.value.length === 0 ? (T(), K("div", dm, Se(e.emptyMessage), 1)) : ue("", !0),
            (T(!0), K(Pt, null, Zt(R.value, (ke, Re) => (T(), K("div", {
              key: ke._key,
              class: lt(["material-picker__option", {
                highlighted: Re === f.value,
                selected: le(ke)
              }]),
              role: "option",
              "aria-selected": le(ke),
              onMousedown: Gn((ee) => se(ke), ["prevent"]),
              onMouseenter: (ee) => f.value = Re
            }, [
              ke._summary.imageUrl ? (T(), K("img", {
                key: 0,
                src: ke._summary.imageUrl,
                class: "material-picker__thumb material-picker__thumb--lazy",
                loading: "lazy",
                alt: ke._summary.productLabel,
                onLoad: J[3] || (J[3] = (ee) => ee.target.classList.add("material-picker__thumb--loaded"))
              }, null, 40, pm)) : ke.colorHex ? (T(), K("span", {
                key: 1,
                class: "material-picker__swatch",
                style: Gt({ background: ke.colorHex }),
                title: ke.color || "",
                "aria-hidden": "true"
              }, null, 12, mm)) : ue("", !0),
              be("span", gm, [
                be("span", hm, [
                  be("span", vm, Se(ke._summary.productLabel), 1),
                  ke._summary.brand ? (T(), K("span", bm, Se(ke._summary.brand), 1)) : ue("", !0)
                ]),
                ke._summary.code ? (T(), K("span", ym, Se(ke._summary.code), 1)) : ue("", !0)
              ])
            ], 42, fm))), 128))
          ])
        ], 36)) : ue("", !0)
      ], 8, ["to", "disabled"]))
    ], 2));
  }
}), wm = /* @__PURE__ */ sn(km, [["__scopeId", "data-v-6712de1b"]]), Sm = ["id", "data-field", "data-index", "disabled"], ml = /* @__PURE__ */ vt({
  __name: "FaceExtraButton",
  props: {
    type: {},
    inputShape: { default: null },
    open: { type: Boolean, default: !1 },
    id: { default: "" },
    disabled: { type: Boolean, default: !1 },
    index: { default: 0 }
  },
  emits: ["clicked"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = A(() => t.type === "finish" ? ["fass", "spray-can"] : ["fass", "planing"]), s = A(() => !!t.inputShape && sa(t.inputShape, t.type, "face.a")), u = A(() => !!t.inputShape && sa(t.inputShape, t.type, "face.b")), r = () => {
      t.disabled || a("clicked");
    };
    return (c, f) => {
      const m = ra("Icon");
      return T(), K("button", {
        id: e.id,
        class: lt(["c-btn", [`${e.type}-button`, {
          "face-a": s.value,
          "face-b": u.value,
          selected: e.open
        }]]),
        "data-field": e.type,
        "data-index": e.index,
        type: "button",
        tabindex: "0",
        disabled: e.disabled,
        onClick: r
      }, [
        st(m, { icon: i.value }, null, 8, ["icon"])
      ], 10, Sm);
    };
  }
}), xm = { inheritAttrs: !1 }, Im = /* @__PURE__ */ vt({
  ...xm,
  __name: "FinishButton",
  setup(e) {
    return (n, t) => (T(), Ne(ml, Kt({ type: "finish" }, n.$attrs), null, 16));
  }
});
function Pm(e) {
  return e.machining ? "toData" in e.machining ? e.machining.toData() : e.machining : { holes: [], hingeHoles: [], corners: {} };
}
function Cm(e) {
  const n = Pm(e);
  return n ? !!(n.holes && n.holes.length > 0 || n.hingeHoles && n.hingeHoles.length > 0 || n.corners && Object.values(n.corners).some((t) => t && t.type && t.size > 0)) : !1;
}
const Lm = vt({
  name: "MachiningButton",
  props: {
    inputShape: {
      type: Object,
      default: null
    },
    id: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["open"],
  computed: {
    hasMachining() {
      return Cm(this.inputShape);
    },
    disabledOrReadonly() {
      return this.disabled || !!this.inputShape?.readonly;
    }
  },
  methods: {
    openMachining() {
      this.disabled || this.$emit("open");
    }
  }
}), Om = ["id", "disabled"];
function Em(e, n, t, a, i, s) {
  const u = ra("Icon");
  return T(), K("button", {
    id: e.id,
    class: lt(["c-btn machining-button", { selected: e.hasMachining }]),
    type: "button",
    disabled: e.disabled,
    onClick: n[0] || (n[0] = (...r) => e.openMachining && e.openMachining(...r))
  }, [
    st(u, { icon: ["fass", "machining"] })
  ], 10, Om);
}
const Am = /* @__PURE__ */ sn(Lm, [["render", Em]]), Tm = vt({
  name: "CustomProductsButton",
  props: {
    inputShape: {
      type: Object,
      default: null
    },
    id: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["open"],
  computed: {
    hasSelections() {
      const e = this.inputShape?.extras?.machining ?? null, n = this.inputShape?.extras?.addon?.[""] ?? null;
      return !!(e && Object.keys(e).length || n && Object.values(n).some((t) => t !== !1 && t !== "" && t !== 0 && t !== void 0 && t !== null));
    }
  },
  methods: {
    open() {
      this.disabled || this.$emit("open");
    }
  }
}), Fm = ["id", "disabled"];
function Nm(e, n, t, a, i, s) {
  const u = ra("Icon");
  return T(), K("button", {
    id: e.id,
    class: lt(["c-btn custom-products-button", { selected: e.hasSelections }]),
    type: "button",
    disabled: e.disabled,
    onClick: n[0] || (n[0] = (...r) => e.open && e.open(...r))
  }, [
    st(u, { icon: ["fass", "box"] })
  ], 10, Fm);
}
const $m = /* @__PURE__ */ sn(Tm, [["render", Nm]]), Mm = ["id"], ko = /* @__PURE__ */ vt({
  __name: "OrientationButton",
  props: {
    id: { default: "" },
    orientationModel: { default: 0 },
    rectangleType: { default: null },
    rectangle: { default: () => null },
    shapeOrientation: { default: "" },
    stockGrain: { default: "n" },
    disabled: { type: Boolean, default: !1 },
    debug: { type: Boolean, default: !1 }
  },
  emits: ["updateOrientation"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = W(0), s = W(!1), u = (R, x, D, le) => {
      if (!Ye(D) || x === 0)
        return R;
      const ie = r();
      return x === 1 || x === 2 && le !== "n" && R ? ie : R;
    }, r = (R) => {
      const x = { ...t, ...R };
      if (!x.rectangle || !Ye(x.rectangle)) return "";
      let D = "";
      switch (x.orientationModel) {
        case 0:
          D = ce.value;
          break;
        case 1:
          x.stockGrain === "y" || x.stockGrain === "n" ? D = x.rectangle.l >= x.rectangle.w ? "l" : "w" : x.rectangle.l >= x.rectangle.w ? D = x.stockGrain : D = D = x.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          D = x.rectangle.l >= x.rectangle.w ? "l" : "w";
          break;
      }
      return D;
    }, c = () => {
      if (t.disabled || G.value.length <= 1)
        return;
      const R = f(ce.value);
      "multiEdit" in t.rectangle && t.rectangle.multiEdit && ce.value === "" && i.value !== R && i.value === 0 && (i.value = R);
      let D = null;
      [1, 2].includes(t.orientationModel) ? D = I() : D = m(), i.value = D;
    }, f = (R) => {
      const x = G.value.findIndex((D) => D === R);
      return x === -1 ? 0 : x;
    }, m = () => {
      let R = i.value + 1;
      return R > G.value.length - 1 && (R = 0), R;
    }, I = () => {
      let R = 0;
      if (ce.value === "") {
        const x = r();
        R = G.value.findIndex((D) => D === x);
      } else
        R = G.value.findIndex((x) => x === "");
      return R;
    }, O = (R) => {
      a("updateOrientation", R);
    }, b = () => {
      const R = ce.value;
      if ("multiEdit" in t.rectangle && t.rectangle.multiEdit)
        return R === " " ? " " : R === "" ? "" : R === "l" ? "l" : R === "w" ? "w" : "default";
      switch (t.orientationModel) {
        case 0:
          return R === " " ? " " : R ? t.stockGrain === "n" ? R || t.shapeOrientation || "default" : t.stockGrain === "w" ? R === "w" ? "w" : "l" : R === "l" ? "l" : "w" : "default";
        case 1:
          return R === " " ? " " : R ? t.stockGrain === "n" ? R || t.shapeOrientation || "default" : t.stockGrain === "w" ? R === "w" ? "w" : "l" : R === "l" ? "l" : "w" : "default";
        case 2:
          return R === " " ? " " : R ? t.stockGrain === "n" ? R || t.shapeOrientation || "default" : t.stockGrain === "w" ? R === "w" ? "w" : "l" : R === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, _ = () => {
      if (!t.rectangle)
        return;
      if ("multiEdit" in t.rectangle && t.rectangle.multiEdit && !ce.value) {
        me("");
        return;
      }
      const R = u(
        ce.value,
        t.orientationModel,
        t.rectangle,
        t.stockGrain
      );
      if (R !== ce.value) {
        me(R);
        return;
      }
      if (!s.value || i.value === -1) {
        const x = f(ce.value);
        i.value = x;
      }
      if (Ye(t.rectangle)) {
        if (t.orientationModel === 1) {
          const x = w.value ? r() : ce.value;
          me(x);
          return;
        }
        if (t.orientationModel === 2) {
          let x;
          w.value ? x = t.stockGrain !== "n" ? r() : "" : x = ce.value, me(x);
        }
      }
    }, U = W(!1), me = (R) => {
      const x = f(R);
      U.value = !0, i.value = x, U.value = !1, O(R);
    }, G = A(() => {
      if (!t.rectangle) return ["l", "w"];
      if (Fn(t.rectangle)) return ["l", "w"];
      let R = ["", "l", "w"];
      return t.rectangle.multiEdit ? [" ", "", "l", "w"] : (q.value && (R = R.filter((x) => x !== "w")), R);
    }), q = A(() => Ye(t.rectangle) || Pi(t.rectangle) ? t.rectangle.isSquare : t.rectangleType && t.rectangle?.l && t.rectangle?.w ? t.rectangle?.l === t.rectangle?.w : !1), ce = A(() => {
      let R = "";
      if (Fn(t.rectangle))
        R = t.rectangle.direction === "horizontal" ? "l" : "w";
      else if (Ye(t.rectangle)) {
        const x = t.rectangle.orientationLock;
        R = x === null ? "" : x;
      } else if (Pi(t.rectangle)) {
        const D = t.rectangle.grain ?? "";
        D === "l" || D === "w" || D === "" || D === " " ? R = D : R = "";
      }
      return R;
    }), de = A(() => Fn(t.rectangle) || !t.rectangle ? {
      l: null,
      w: null
    } : {
      l: t.rectangle.l,
      w: t.rectangle.w
    }), w = A(() => !de.value.l && !de.value.w), M = A(() => Fn(t.rectangle) ? !1 : Ha(
      t.orientationModel,
      t.stockGrain,
      t.rectangle,
      t.rectangleType,
      t.shapeOrientation
    )), ne = A(() => {
      if (!t.rectangle)
        return t.shapeOrientation ? "noGrain" : "freeRotation";
      if (Pi(t.rectangle) || t.rectangleType === "stock") {
        const ie = t.rectangle.grain;
        return "multiEdit" in t.rectangle && t.rectangle.multiEdit ? {
          " ": "noGrain",
          // Clear to no grain
          "": "noChange",
          // No change
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[ie] || "noGrain" : {
          "": "noGrain",
          // No grain
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[ie] || "noGrain";
      }
      const R = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, x = t.stockGrain || "default";
      let D = "default";
      Ye(t.rectangle) || t.rectangleType === "shape" ? D = b() : Fn(t.rectangle) && (D = t.rectangle.direction || "default");
      const le = R[x]?.[D];
      return le || R[x]?.default || "freeRotation";
    }), oe = A(() => ({
      delete: "trash",
      noChange: "no-change",
      freeRotation: "arrows-rotate",
      leftRight: "arrows-left-right",
      topBottom: "arrows-up-down",
      grainLeftRight: "grain-h",
      grainTopBottom: "grain-v",
      noGrain: "no-grain"
    })[ne.value]);
    return Qe(i, (R, x) => {
      s.value && x !== void 0 && (U.value || O(G.value[R]));
    }, { immediate: !1 }), Qe(de, (R, x) => {
      if (!t.rectangle || t.orientationModel === 0 || !Ye(t.rectangle) || Ye(t.rectangle) && (t.orientationModel === 2 && x.l && x.w && !ce.value || t.stockGrain === "n" && !ce.value))
        return;
      const D = r();
      ce.value !== D && O(D);
    }, { immediate: !1 }), Qe(() => t.stockGrain, (R, x) => {
      R !== x && _();
    }, { immediate: !0 }), fn(() => {
      _(), Mt(() => s.value = !0);
    }), (R, x) => {
      const D = ra("Icon");
      return T(), K("button", {
        type: "button",
        id: e.id,
        class: lt(["c-btn orientation-button", { rot: M.value, square: q.value, disabled: e.disabled, [ne.value]: !0 }]),
        tabindex: "0",
        "aria-label": "Part orientation",
        onClick: c
      }, [
        st(D, { name: oe.value }, null, 8, ["name"])
      ], 10, Mm);
    };
  }
}), Dm = { inheritAttrs: !1 }, _m = /* @__PURE__ */ vt({
  ...Dm,
  __name: "PlaningButton",
  setup(e) {
    return (n, t) => (T(), Ne(ml, Kt({ type: "planing" }, n.$attrs), null, 16));
  }
});
function Vm(e, n, t) {
  let a = null;
  Qe(
    () => e.value ? { l: e.value.l, w: e.value.w } : null,
    (i) => {
      const s = typeof n == "number" ? n : n.value;
      if (!Lu(s) || !i || !e.value) return;
      const u = i.w > i.l;
      if (a === null) {
        a = u;
        return;
      }
      if (a !== u) {
        const r = Ou(s);
        for (const c of r)
          ru(e.value, c);
        a = u;
      }
    },
    { immediate: !0 }
  );
}
const Rm = {
  key: 0,
  class: "info"
}, qm = ["disabled"], Bm = /* @__PURE__ */ vt({
  __name: "CheckoutField",
  props: {
    field: {
      type: Object,
      required: !0
    },
    item: {
      type: Object,
      required: !0
    },
    index: {
      type: Number,
      required: !0
    },
    typePrefix: {
      type: String,
      required: !0
    },
    numberFormat: {
      type: String,
      default: "decimal"
    },
    multiEdit: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    enableLabel: {
      type: Boolean,
      default: !1
    },
    stockGrain: {
      type: String,
      default: "n"
    },
    orientationModel: {
      type: Number,
      default: 0
    },
    bandingEnabled: {
      type: Object,
      default: null
    },
    materialOptions: {
      type: Array,
      default: () => []
    },
    // Optional rich material items used by the searchable MaterialPicker.
    // When omitted, the field falls back to the legacy <select> driven by
    // `materialOptions` so older callers keep working.
    materialItems: {
      type: Array,
      default: () => []
    },
    thicknessOptions: {
      type: Array,
      default: () => []
    },
    widthOptions: {
      type: Array,
      default: () => []
    },
    issue: {
      type: Boolean,
      default: !1
    },
    warning: {
      type: Boolean,
      default: !1
    },
    fullStockDisabled: {
      type: Boolean,
      default: !1
    },
    materialExtrasDisabled: {
      type: Object,
      default: () => ({ banding: !1, finish: !1, planing: !1, machining: !1 })
    }
  },
  emits: ["update", "validation", "blur", "open-banding", "open-machining", "open-custom-products", "open-finish", "open-planing", "open-image-upload"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = A(() => t.field.name === "banding" && Ye(t.item) ? t.item : null);
    Vm(i, Wt(t, "orientationModel"));
    const s = ["orientationLock", "grain", "banding", "bandingOptions", "machining", "finish", "planing", "imageUpload"], u = A(() => s.includes(t.field.name) || t.field.name === "material" && t.typePrefix === "part" || t.field.name === "t" && t.thicknessOptions?.length > 0 || t.field.name === "w" && t.widthOptions?.length > 0), r = A(() => {
      try {
        const w = t.field.propertyPath || t.field.name;
        return w.includes(".") ? qt(t.item, w) ?? null : t.item[w] ?? null;
      } catch (w) {
        return console.error("[CheckoutField] Error getting field value:", w), null;
      }
    }), c = A(() => {
      if (t.field.custom && t.field.type) {
        const ne = t.field.type;
        if (["checkbox", "select", "string", "integer", "unitDependent"].includes(ne))
          return ne;
      }
      const w = {
        number: "unitDependent",
        integer: "integer",
        string: "string",
        boolean: "checkbox",
        enum: "select"
      };
      if (t.field.name === "q") return "integer";
      if (t.field.name === "cost") return "string";
      if (t.field.name === "autoAdd") return "checkbox";
      if (t.field.name === "material" && t.typePrefix === "stock") return "string";
      if (["l", "w", "t", "trim"].includes(t.field.name)) return "unitDependent";
      const M = w[t.field.type];
      return M || "string";
    }), f = A(() => t.field.output ? t.field.output : null), m = A(() => t.field.options || []), I = A(() => !!(t.readonly || t.item?.readonly || t.fullStockDisabled)), O = A(() => t.item.isNew ? !1 : Js(t.item, [t.field.name])), b = A(() => t.item.isNew ? !1 : Js(t.item, [t.field.name], !0)), _ = A(() => t.multiEdit || t.item.isNew || !1), U = A(() => t.materialOptions?.length > 0 && Ye(t.item) ? !t.item.material : !1), me = A(() => t.widthOptions?.length === 1), G = A(() => t.field.info ? typeof t.field.info == "string" ? t.field.info : typeof t.field.info == "object" && r.value !== null && t.field.info[r.value] || null : null), q = (w) => {
      a("update", w);
    }, ce = (w, M) => {
      a("validation", w, M);
    }, de = () => {
      a("blur");
    };
    return (w, M) => u.value ? (T(), K(Pt, { key: 1 }, [
      e.field.name === "orientationLock" ? (T(), Ne(ko, {
        key: 0,
        rectangle: e.item,
        "stock-grain": e.stockGrain,
        "orientation-model": e.orientationModel,
        "button-background": "#2c8d8f",
        disabled: I.value,
        onUpdateOrientation: q
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : e.field.name === "grain" ? (T(), Ne(ko, {
        key: 1,
        rectangle: e.item,
        "button-background": "#2c8d8f",
        "stock-grain": e.stockGrain,
        "orientation-model": e.orientationModel,
        disabled: I.value,
        onUpdateOrientation: q
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : e.field.name === "banding" ? (T(), Ne(Qp, {
        key: 2,
        "input-shape": E(Ye)(e.item) ? e.item : null,
        open: e.bandingEnabled?.autoId === e.item.autoId,
        "stock-grain": e.stockGrain,
        "orientation-model": e.orientationModel,
        index: e.index,
        disabled: I.value || e.materialExtrasDisabled?.banding,
        onClicked: M[0] || (M[0] = (ne) => w.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "orientation-model", "index", "disabled"])) : e.field.name === "finish" ? (T(), Ne(Im, {
        key: 3,
        "input-shape": E(Ye)(e.item) ? e.item : null,
        open: !1,
        index: e.index,
        disabled: I.value || e.materialExtrasDisabled?.finish,
        onClicked: M[1] || (M[1] = (ne) => w.$emit("open-finish"))
      }, null, 8, ["input-shape", "index", "disabled"])) : e.field.name === "planing" ? (T(), Ne(_m, {
        key: 4,
        "input-shape": E(Ye)(e.item) ? e.item : null,
        open: !1,
        index: e.index,
        disabled: I.value || e.materialExtrasDisabled?.planing,
        onClicked: M[2] || (M[2] = (ne) => w.$emit("open-planing"))
      }, null, 8, ["input-shape", "index", "disabled"])) : e.field.name === "machining" ? (T(), Ne(Am, {
        key: 5,
        "input-shape": E(Ye)(e.item) ? e.item : null,
        disabled: I.value || e.materialExtrasDisabled?.machining,
        onOpen: M[3] || (M[3] = (ne) => w.$emit("open-machining"))
      }, null, 8, ["input-shape", "disabled"])) : e.field.name === "customProducts" ? (T(), Ne($m, {
        key: 6,
        "input-shape": E(Ye)(e.item) ? e.item : null,
        disabled: I.value,
        onOpen: M[4] || (M[4] = (ne) => w.$emit("open-custom-products"))
      }, null, 8, ["input-shape", "disabled"])) : e.field.name === "material" && e.typePrefix === "part" && e.materialItems && e.materialItems.length > 0 ? (T(), Ne(wm, {
        key: 7,
        id: `${e.typePrefix}-material-${e.index}`,
        value: r.value,
        options: e.materialItems,
        "value-key": "name",
        label: E(Te)(e.field.label || "fields.material"),
        placeholder: E(Te)(e.field.placeholder || "fields.material"),
        "enable-label": !1,
        disabled: e.field.disabled || I.value || e.readonly,
        required: e.field.required || !1,
        issue: O.value,
        "allow-clear": !1,
        "onUpdate:value": q
      }, null, 8, ["id", "value", "options", "label", "placeholder", "disabled", "required", "issue"])) : e.field.name === "material" && e.typePrefix === "part" ? (T(), Ne(Ia, {
        key: 8,
        id: `${e.typePrefix}-material-${e.index}`,
        "data-field": e.field.name,
        "data-index": e.index,
        type: "select",
        value: r.value,
        label: E(Te)(e.field.label || "fields.material"),
        placeholder: E(Te)(e.field.placeholder || "fields.material"),
        "enable-label": !1,
        output: "string",
        options: e.materialOptions,
        "select-first-option-disabled": !0,
        disabled: !e.materialOptions?.length,
        required: !1,
        text: {
          select: E(Te)("actions.select"),
          delete: E(Te)("actions.delete")
        },
        "onUpdate:value": q,
        onValidation: ce
      }, {
        default: tn(() => [
          Ht(w.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : e.field.name === "t" && e.thicknessOptions?.length > 0 ? (T(), Ne(Ia, {
        key: 9,
        id: `${e.typePrefix}-${e.field.name}-${e.index}`,
        "data-field": e.field.name,
        "data-index": e.index,
        type: "select",
        value: r.value,
        label: E(Te)(e.field.label || "fields.t"),
        "enable-label": !1,
        options: e.thicknessOptions,
        readonly: e.readonly,
        disabled: U.value,
        required: e.field.required || !1,
        "number-format": e.numberFormat,
        text: {
          select: E(Te)("actions.select"),
          delete: E(Te)("actions.delete")
        },
        output: "number",
        "onUpdate:value": q,
        onValidation: ce
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : e.field.name === "w" && e.widthOptions?.length > 0 ? (T(), Ne(Ia, {
        key: 10,
        id: `${e.typePrefix}-${e.field.name}-${e.index}`,
        "data-field": e.field.name,
        "data-index": e.index,
        type: "select",
        value: r.value,
        label: E(Te)(e.field.label || "fields.w"),
        "enable-label": !1,
        options: e.widthOptions,
        readonly: e.readonly,
        disabled: me.value,
        required: e.field.required || !1,
        "number-format": e.numberFormat,
        text: {
          select: E(Te)("actions.select"),
          delete: E(Te)("actions.delete")
        },
        output: "number",
        "onUpdate:value": q,
        onValidation: ce
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : e.field.name === "imageUpload" ? (T(), K("button", {
        key: 11,
        type: "button",
        disabled: e.readonly,
        onClick: M[5] || (M[5] = (ne) => w.$emit("open-image-upload"))
      }, [
        st(E(ei), { icon: ["fass", "image"] })
      ], 8, qm)) : ue("", !0)
    ], 64)) : (T(), Ne(Ia, {
      key: 0,
      id: `${e.typePrefix}-${e.field.name}-${e.index}`,
      "data-field": e.field.name,
      "data-index": e.index,
      type: c.value,
      value: r.value,
      label: E(Te)(e.field.label || e.field.name),
      placeholder: E(Te)(e.field.placeholder || e.field.name),
      "enable-label": e.enableLabel,
      output: f.value,
      options: m.value,
      "select-first-option-disabled": e.field.selectFirstOptionDisabled ?? !0,
      disabled: e.field.disabled || I.value,
      readonly: e.readonly || e.field.readonly,
      required: e.field.required || !1,
      "allow-zero": e.field.allowZero ?? !1,
      "true-value": e.field.trueValue ?? !0,
      "false-value": e.field.falseValue ?? !1,
      default: e.field.defaultValue,
      "number-format": e.numberFormat,
      min: e.field.min || null,
      max: e.field.max || null,
      "multi-edit": e.multiEdit,
      text: e.field.text,
      issue: O.value,
      warning: b.value,
      "disable-required-validation": _.value,
      "onUpdate:value": q,
      onValidation: ce,
      onBlur: de
    }, {
      default: tn(() => [
        G.value ? (T(), K("p", Rm, [
          st(E(ei), { icon: ["fass", "info-circle"] }),
          nn(" " + Se(G.value), 1)
        ])) : ue("", !0),
        Ht(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "data-field", "data-index", "type", "value", "label", "placeholder", "enable-label", "output", "options", "select-first-option-disabled", "disabled", "readonly", "required", "allow-zero", "true-value", "false-value", "default", "number-format", "min", "max", "multi-edit", "text", "issue", "warning", "disable-required-validation"]));
  }
}), Tn = window.__topLayerDialogStack ?? (window.__topLayerDialogStack = W([]));
function za(e) {
  return !!e && (e.matches?.(":popover-open") || e.open);
}
const ii = /* @__PURE__ */ new Set();
function wo(e, n) {
  e.inert = n, n ? ii.add(e) : ii.delete(e);
}
function jm(e) {
  const n = [];
  let t = e.parentElement;
  for (; t && t !== document.body; )
    n.push(t), t = t.parentElement;
  return n;
}
function Bi() {
  for (const u of ii) u.inert = !1;
  ii.clear();
  const e = Tn.value, n = e[e.length - 1], t = n?.el ?? null, a = !!n?.modal, i = t ? new Set(jm(t)) : /* @__PURE__ */ new Set(), s = (u) => {
    for (const r of Array.from(u.children)) {
      const c = r;
      if (c === t) {
        c.inert = !1;
        continue;
      }
      if (i.has(c)) {
        c.inert = !1, s(c);
        continue;
      }
      if (c.matches?.(":popover-open")) {
        c.inert = !1;
        continue;
      }
      wo(c, a);
    }
  };
  s(document.body);
  for (const u of e)
    u.el && u !== n && wo(u.el, !0);
}
function Um() {
  const e = document.getElementById("smartcut-notices");
  e?.matches(":popover-open") && (e.hidePopover(), e.showPopover());
}
function Gm(e, n = {}) {
  const t = /* @__PURE__ */ Symbol("top-layer-dialog"), a = A(() => Tn.value.findIndex((f) => f.token === t));
  function i() {
    const f = e.value;
    if (!f || za(f)) return;
    typeof f.showPopover == "function" ? f.showPopover() : typeof f.showModal == "function" ? f.showModal() : f.setAttribute("open", "");
    const m = n.modal ? n.modal() : !0;
    Tn.value.some((I) => I.token === t) || Tn.value.push({ token: t, el: f, modal: m }), Bi(), Um();
  }
  function s() {
    const f = e.value;
    !f || !za(f) || (f.matches?.(":popover-open") && typeof f.hidePopover == "function" ? f.hidePopover() : f.open ? f.close() : f.removeAttribute("open"));
  }
  function u() {
    const f = Tn.value.findIndex((I) => I.token === t);
    if (f < 0) return !1;
    const [m] = Tn.value.splice(f, 1);
    return m?.el && (m.el.inert = !1), Bi(), !0;
  }
  function r(f) {
    return f.newState === "closed" ? u() : !1;
  }
  function c() {
    const f = e.value;
    f && za(f) && s();
    const m = Tn.value.findIndex((I) => I.token === t);
    m >= 0 && Tn.value.splice(m, 1), f && (f.inert = !1), Bi();
  }
  return { show: i, close: s, onClosed: u, onToggle: r, cleanup: c, isShown: za, stackIndex: a };
}
const Wm = {
  key: 0,
  class: "base-dialog__header"
}, zm = {
  key: 1,
  class: "base-dialog__footer"
}, Km = /* @__PURE__ */ vt({
  __name: "BaseDialog",
  props: {
    open: { type: Boolean, default: void 0 },
    title: {},
    size: { default: "md" },
    closeOnBackdrop: { type: Boolean, default: !0 },
    compact: { type: Boolean, default: !0 },
    bodyForm: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open", "opened", "closed"],
  setup(e, { expose: n, emit: t }) {
    const a = e, i = t, s = W(null), u = W(null), r = W(null), c = W({}), f = !1;
    function m() {
      const oe = r.value;
      if (!oe) return;
      const R = getComputedStyle(oe);
      c.value = {
        "font-family": R.fontFamily,
        "font-size": R.fontSize,
        "line-height": R.lineHeight,
        color: R.color
      };
    }
    const {
      show: I,
      close: O,
      onClosed: b,
      cleanup: _,
      isShown: U,
      stackIndex: me
    } = Gm(s, { modal: () => a.modal }), G = A(() => ({
      "base-dialog__body--form": a.bodyForm,
      "smartcut-content": a.compact
    })), q = A(() => ({ ...c.value }));
    function ce() {
      const oe = s.value;
      !oe || U(oe) || (m(), I(), i("opened"));
    }
    function de() {
      b() && (i("update:open", !1), i("closed"));
    }
    function w(oe) {
      oe.newState === "closed" && de();
    }
    function M() {
      O();
    }
    function ne(oe) {
      a.closeOnBackdrop && oe.target === s.value && O();
    }
    return Qe(() => a.open, (oe, R) => {
      oe !== void 0 && (oe && !R ? ce() : !oe && R && O());
    }), fn(() => {
      a.open === !0 && ce();
    }), li(() => {
      _();
    }), n({
      show: ce,
      close: O,
      dialogRef: s,
      bodyRef: u
    }), (oe, R) => (T(), K(Pt, null, [
      be("span", {
        ref_key: "anchorRef",
        ref: r,
        class: "base-dialog__anchor",
        "aria-hidden": "true"
      }, null, 512),
      (T(), Ne(oi, {
        to: "body",
        disabled: f
      }, [
        be("dialog", {
          ref_key: "dialogRef",
          ref: s,
          popover: "manual",
          class: lt(["base-dialog", [`base-dialog--${e.size}`, { "base-dialog--compact": e.compact, "base-dialog--stacked": E(me) > 0 }]]),
          style: Gt(q.value),
          onClick: ne,
          onToggle: w,
          onClose: de,
          onKeydown: Io(M, ["esc"])
        }, [
          oe.$slots.header || e.title ? (T(), K("header", Wm, [
            Ht(oe.$slots, "header", {}, () => [
              be("h3", null, Se(e.title), 1),
              be("button", {
                type: "button",
                class: "base-dialog__close",
                "aria-label": "Close",
                onClick: R[0] || (R[0] = //@ts-ignore
                (...x) => E(O) && E(O)(...x))
              }, "×")
            ])
          ])) : ue("", !0),
          be("div", {
            ref_key: "bodyRef",
            ref: u,
            class: lt(["base-dialog__body", G.value])
          }, [
            Ht(oe.$slots, "default")
          ], 2),
          oe.$slots.footer ? (T(), K("footer", zm, [
            Ht(oe.$slots, "footer", { close: E(O) })
          ])) : ue("", !0)
        ], 38)
      ]))
    ], 64));
  }
}), Hm = { class: "full-stock-dialog__intro" }, Zm = { class: "full-stock-dialog__options" }, Jm = ["onClick"], Qm = { class: "full-stock-dialog__dim" }, Ym = {
  key: 0,
  class: "full-stock-dialog__price"
}, Xm = ["onClick"], eg = /* @__PURE__ */ vt({
  __name: "FullStockDialog",
  props: {
    open: { type: Boolean },
    options: {},
    materialLabel: {},
    thickness: {},
    formatPrice: { type: Function }
  },
  emits: ["update:open", "pick", "cancel"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = A({
      get: () => t.open,
      set: (m) => a("update:open", m)
    }), s = A(() => "Choose sheet size"), u = A(() => {
      const m = [];
      t.materialLabel && m.push(t.materialLabel), t.thickness != null && t.thickness !== "" && m.push(`${t.thickness}mm`);
      const I = m.join(" · ");
      return I ? `Multiple sheet sizes available for ${I}. Pick the one you want to buy.` : "Multiple sheet sizes available. Pick the one you want to buy.";
    });
    let r = !1;
    function c(m) {
      r = !0, a("pick", m), a("update:open", !1);
    }
    function f() {
      r || a("cancel"), r = !1;
    }
    return (m, I) => (T(), Ne(Km, {
      open: i.value,
      "onUpdate:open": I[0] || (I[0] = (O) => i.value = O),
      title: s.value,
      size: "sm",
      onClosed: f
    }, {
      footer: tn(({ close: O }) => [
        be("button", {
          type: "button",
          class: "c-btn c-btn--ghost",
          onClick: O
        }, "Cancel", 8, Xm)
      ]),
      default: tn(() => [
        be("div", Hm, Se(u.value), 1),
        be("ul", Zm, [
          (T(!0), K(Pt, null, Zt(e.options, (O) => (T(), K("li", {
            key: `${O.l}x${O.w}`,
            class: "full-stock-dialog__option"
          }, [
            be("button", {
              type: "button",
              class: "full-stock-dialog__option-btn",
              onClick: (b) => c(O)
            }, [
              be("span", Qm, Se(O.l) + " × " + Se(O.w), 1),
              O.cost != null && e.formatPrice ? (T(), K("span", Ym, Se(e.formatPrice(O.cost)), 1)) : ue("", !0)
            ], 8, Jm)
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title"]));
  }
}), tg = /* @__PURE__ */ sn(eg, [["__scopeId", "data-v-df7e1e1c"]]), ng = { class: "checkout-calculator-wrapper" }, ag = {
  key: 0,
  class: "row table-heading"
}, ig = {
  key: 0,
  class: "cell center"
}, sg = ["onClick"], og = {
  key: 0,
  class: "cell"
}, lg = ["onClick"], rg = { class: "cell" }, ug = ["disabled", "aria-label", "onClick"], cg = { class: "button-wrapper main" }, dg = ["aria-label"], fg = ["aria-label", "title", "disabled"], pg = ["aria-label"], mg = { id: "part-count" }, gg = {
  key: 5,
  class: "pagination-controls"
}, hg = { class: "c-btn-group" }, vg = ["disabled"], bg = ["disabled"], yg = { class: "pagination-info" }, kg = ["disabled"], wg = ["disabled"], Sg = {
  key: 7,
  id: "messages"
}, xg = {
  key: 0,
  class: "heading"
}, Ig = { class: "content" }, Pg = {
  key: 8,
  id: "progress"
}, Cg = { id: "diagram-wrapper" }, Lg = {
  key: 0,
  id: "stack"
}, Og = {
  key: 3,
  class: "debug"
}, Eg = /* @__PURE__ */ vt({
  __name: "EcommerceCalculator",
  props: {
    inputStock: {
      type: Array,
      default: () => []
    },
    findExtrasPrice: {
      type: Function,
      required: !0
    },
    formatPrice: {
      type: Function,
      required: !0
    },
    inputType: {
      type: String,
      default: "manual"
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    showCredit: {
      type: Boolean,
      default: void 0
    },
    diagramNav: {
      type: Boolean,
      default: !1
    },
    debug: {
      type: Boolean,
      default: !1
    },
    // When true, the Calculate button is disabled even if stock is
    // loaded — used by the Products tab to block calculation until
    // every required material-group pick is made. The button still
    // honours the stock-and-thinking checks below; this is an
    // additional gate, not a replacement. Optional tooltip describes
    // what's missing.
    calculateDisabled: {
      type: Boolean,
      default: !1
    },
    calculateDisabledReason: {
      type: String,
      default: ""
    }
  },
  emits: ["inputs-changed", "calculating", "validation-error", "before-calculate", "result", "no-result", "log", "error"],
  setup(e, { expose: n, emit: t }) {
    const a = Bt(() => import("./InputIssues-Cu6HEApy.js")), i = Bt(() => import("./Machining-DYxj1gTc.js")), s = Bt(() => import("./CustomProducts-9YRVuMLd.js")), u = Bt(() => import("./ImportCSV-BchayLEU.js")), r = Bt(() => import("./ObjectViewer-D4FhhG99.js")), c = Bt(() => import("./ImageUpload-h57JjwyI.js")), f = Bt(() => import("./EcommerceGroups-Dq6Sc9_c.js")), m = () => import("./Diagram-CIWUIKzp.js"), I = () => import("./Navigation-2J59sG6U.js"), O = () => import("./StockNavigation-BHRZOs6Z.js"), b = () => import("./CalculationSpinner-QnhrLP0b.js"), _ = Bt(m), U = Bt(I), me = Bt(O), G = Bt(b);
    let q = !1;
    const ce = W(!1);
    function de() {
      q || (q = !0, m().then(() => {
        ce.value = !0;
      }), I(), O(), b());
    }
    const {
      inputs: w,
      totalInputShapes: M,
      getShapeGrainSummary: ne,
      updateNumberFormat: oe,
      validateInputStock: R,
      // validateInputShapeField,
      // validateInputStockField,
      removeInputShape: x,
      addInputShape: D,
      addInputStock: le,
      cloneInputShape: ie,
      updateInputShape: se,
      linkRowMaterialByName: We,
      validationIssues: Xe,
      setExtrasOptionsFromPricing: Ie,
      getCentralizedOptions: Fe
    } = Uo(), { r: De, updateFromResult: B, stackedStock: J, uniqueAddedShapes: ke, uniqueUsedStock: Re, usedStock: ee, activeStockAutoId: we, activeStock: _e, setActiveStockAutoId: kt } = yf();
    gf({
      stockList: De.stockList
    }, {
      stockList: { itemsPerPage: 10 }
    });
    const { progress: rt, reset: Qt } = Jo(), { addNotice: ut } = rs();
    Qe(() => w.inputStock.value?.length ?? 0, (o) => {
      o > 0 && de();
    }, { immediate: !0 }), Qe(
      () => w.inputStock.value?.[0]?.db_sawId ?? null,
      (o) => {
        if (!o || String(o) === k.value) return;
        const l = y.value?.[String(o)];
        l && F(l);
      }
    );
    const on = W(!1);
    Qe(() => rt.value.complete, (o) => {
      o && (on.value = !0);
    }, { immediate: !0 });
    const Yt = A(() => w.inputShapes.value.filter(Ye)), wn = (o) => !o || !Array.isArray(o) ? [] : o.map((l) => dc({ parts: [l] }).parts?.[0] || l), ct = e, Y = t, Le = W(!1), ze = W(navigator?.language || "en-US"), Ae = ea(null), at = window.location.hostname, et = W(!1), dt = W(!0), ft = vr("Checkout/currentURL", window.location.href), pt = W([]), pn = W(null), it = W(null), ln = W(!1), mn = W(!1), St = W(!1), gn = W(!1), Sn = W(!1), Kn = W(Pu()), rn = W(!1), mt = W(1), Dt = W(10), { socket: Lt } = Cf({
      refs: {
        connected: et,
        thinking: St
      },
      callbacks: {
        onResult(o) {
          const l = o.optimisation;
          if (B(l), !l.shapeList?.length || !l.stockList?.length) {
            Qt(), ut({
              type: "error",
              message: Te("errors.calculation.no_result"),
              additional: [Te("errors.validation.check_inputs")]
            }), St.value = !1;
            return;
          }
          if ((ve.apiVersion || 3) === 2 ? it.value = Rp(
            o.jobId,
            ke.value,
            Re.value,
            ee.value,
            De.offcuts?.value || [],
            w.inputShapes.value,
            De.metadata.value,
            ve.resultOrientationModel
          ) : it.value = qp(
            o.jobId,
            ke.value,
            Re.value,
            ee.value,
            De.offcuts?.value || [],
            w.inputShapes.value,
            De.metadata.value,
            ve.resultOrientationModel
          ), De?.metadata?.value?.unplacedParts?.length) {
            const p = De.metadata.value.unplacedParts.map((C) => C.id).join();
            ut({
              type: "warning",
              message: Te("errors.validation.parts_not_fit", { count: De.metadata.value.unplacedParts.length }) + ": " + p
            });
          }
          it.value && (it.value.apiResultV3 = xc({
            jobId: o.jobId,
            saw: l.saw,
            stockList: l.stockList,
            shapeList: l.shapeList,
            cutList: l.cutList,
            offcuts: De.offcuts?.value || [],
            unusableShapes: l.unusableShapes,
            metadata: De.metadata.value
          }), Y("result", it.value)), St.value = !1;
        },
        onUser(o) {
          Ae.value = o;
        },
        onConnectError(o) {
          ut({
            type: "error",
            message: Te("errors.network.cannot_connect"),
            additional: [o]
          });
        },
        onError(o) {
          ut({
            type: "error",
            message: Te("errors.general.error_occurred"),
            additional: [o]
          });
        }
      }
    }), hn = {
      enable: {
        diagram: !0,
        focus: !0,
        click: !0,
        partName: !0,
        progressNumber: !0,
        orientation: !0,
        banding: !1,
        finish: !1,
        planing: !1,
        machining: !1,
        csvImport: !1,
        pagination: !1,
        fullStock: !1,
        imageUpload: !1,
        diagramNav: !1,
        debug: !1
      },
      colors: {
        partA: "#118ab2",
        partB: void 0,
        partSelected: void 0,
        stock: "#ffd166",
        button: "#118ab2",
        buttonText: "#ffffff",
        text: "#ffffff"
      },
      apiVersion: 3,
      unitSystem: "metric",
      numberFormat: "decimal",
      decimalPlaces: 2,
      fractionRoundTo: 0,
      maxParts: 10,
      partsPerPage: 10,
      locale: navigator?.language || "en-US",
      orientationModel: 0,
      resultOrientationModel: 2,
      customFields: [],
      fieldOrder: [],
      minDimension: 0,
      stockSelection: void 0,
      stockGrain: void 0,
      partTrim: 0,
      currency: "USD",
      debug: !1
    }, ve = un(hn), v = un({
      issues: [],
      warnings: [],
      bladeWidth: 1,
      cutPreference: "l",
      cutType: "guillotine",
      stockType: "sheet",
      stackHeight: 0,
      guillotineOptions: {
        headCuts: !1,
        strategy: "efficiency",
        maxPhase: 3,
        limitStripDimensions: !1
      },
      efficiencyOptions: {
        primaryCompression: "w"
      },
      options: {
        stockSelection: "efficiency",
        minSpacing: 0,
        stackingMode: "identical",
        minSpacingDimension: {
          dimension: 0,
          minSpacing: 0
        }
      }
    }), k = W(null), y = W({});
    function F(o) {
      if (o) {
        if (o.stockType !== void 0 && (Wi.includes(o.stockType) || console.warn(`${o.stockType} is not a valid stockType, expected ${Wi.join("|")}`), v.stockType = o.stockType, o.stockType === "linear" && (v.cutType = void 0, v.cutPreference = void 0)), o.bladeWidth !== void 0) {
          const l = typeof o.bladeWidth == "string" ? parseFloat(o.bladeWidth) : o.bladeWidth;
          l >= 0 ? v.bladeWidth = l : console.warn(`SmartCut - you provided an incorrect blade width of: ${o.bladeWidth}`);
        }
        if (o.cutType !== void 0 && (v.cutType = o.cutType), o.cutPreference !== void 0 && (Qs.includes(o.cutPreference) ? v.cutPreference = o.cutPreference : console.warn(`SmartCut - cut preference ${o.cutPreference || "N/A"} is not valid. Expected: ${Qs.join("|")}`)), o.guillotineOptions !== void 0 && typeof o.guillotineOptions == "object" && Object.assign(v.guillotineOptions, o.guillotineOptions), o.stackHeight !== void 0) {
          const l = typeof o.stackHeight == "string" ? parseFloat(o.stackHeight) : o.stackHeight;
          v.stackHeight = l;
        }
        o.efficiencyOptions !== void 0 && typeof o.efficiencyOptions == "object" && Object.assign(v.efficiencyOptions, o.efficiencyOptions), o.options !== void 0 && typeof o.options == "object" && (o.options.stockSelection !== void 0 && (v.options.stockSelection = o.options.stockSelection), o.options.stackingMode !== void 0 && (v.options.stackingMode = o.options.stackingMode), o.options.minSpacing !== void 0 && (v.options.minSpacing = o.options.minSpacing)), o.db_id && (k.value = String(o.db_id));
      }
    }
    const j = W(null), fe = A(() => !!ve.enable?.groups && !ct.readonly), ye = W(null), Ve = W(0), Ee = W(null), Ue = A(() => {
      const o = w.inputStock.value.map((l) => l.grain).filter((l) => !!l);
      return o.length ? o.every((l) => l === "l") ? "l" : o.every((l) => l === "w") ? "w" : o.some((l) => l === "l" || l === "w") ? "y" : "n" : "n";
    }), Et = A(() => ({
      numberFormat: ve.numberFormat,
      decimalPlaces: ve.decimalPlaces ?? 2,
      fractionRoundTo: ve.fractionRoundTo ?? 0
    })), xn = (o) => {
      Ee.value?.currentGroup && (ye.value = o, Ve.value++);
    }, ua = (o) => {
      j.value = w.inputShapes.value.find((l) => l.autoId === o) ?? null;
    }, ui = () => {
    }, ca = W(!1), $n = W(""), da = W(""), Mn = W(!1), g = W(null);
    function P(o) {
      const l = g.value;
      if (Mn.value = !1, g.value = null, !l) return;
      const h = { fullStock: !0, l: o.l, w: o.w };
      if (se(l.shape.autoId, h) || (l.shape.fullStock = !0, l.shape.l = o.l, l.shape.w = o.w, l.shape.isNew || l.shape.validate({ fields: ["fullStock", "l", "w"] })), o.db_id || o.code) {
        const C = l.shape.stock || {};
        l.shape.stock = {
          ...C,
          ...o.db_id ? { db_id: o.db_id } : {},
          ...o.code ? { code: o.code } : {}
        };
      }
    }
    function z() {
      Mn.value = !1, g.value = null;
    }
    Qe(Xe, (o) => {
      o?.length > 0 ? (ca.value = !0, $n.value = "Validation Errors", da.value = o.map((l) => `${Ka(l.message, l.context || l.params)} (${l.category.join(", ")})`).join(`

`)) : $n.value === "Validation Errors" && (ca.value = !1, $n.value = "", da.value = "");
    }, { deep: !0 });
    const Q = un({
      banding: null,
      finish: null,
      info: null,
      planing: null,
      machining: null,
      addon: null
      // imageUpload: null
    }), V = W([]), X = W([]), he = W([]), Oe = W([]);
    function qe(o) {
      if (o.length > 1) return !0;
      if (o.length === 0) return !1;
      const l = o[0];
      return !!(l.brand || l.variant || l.displayName && l.displayName !== l.name);
    }
    const gt = un({
      numberFormat: "decimal",
      decimalPlaces: 2,
      fractionRoundTo: 0,
      faces: { enabled: !0 },
      holes: { enabled: !1 },
      corners: {
        enabled: !1,
        types: []
      },
      banding: { enabled: !1 },
      hingeHoles: { enabled: !1 },
      shelfHoles: { enabled: !1 }
    }), Pe = un({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["l1", "l2", "w1", "w2"]
    }), Be = un({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["a", "b"]
    }), je = un({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]
      // All sides and faces by default
    }), At = W(null), Ke = un({}), Tt = un({}), Xt = un({}), Hn = W(null), Dn = W(null), ci = A(() => ({
      banding: Ke.rules,
      finish: Tt.rules,
      planing: Xt.rules
    })), Oa = A(() => If({
      stockType: v.stockType || "sheet",
      materials: V.value,
      minDimension: ve.minDimension,
      ...ve.fieldOrder && ve.fieldOrder.length > 0 ? { allowedFieldIds: ve.fieldOrder } : {}
    })), fa = W([]), _n = W({
      material: !1,
      l: !0,
      w: !0,
      t: !1,
      q: !0,
      name: !0,
      orientationLock: !0,
      machining: !1,
      imageUpload: !1,
      fullStock: !1
    }), In = (o, l) => l ? _l(l, o).length > 0 ? !0 : o === "banding" ? !!mi(l) : !!Nt(l, o)?.sourceCatalogueKey : !1, Ge = ["banding", "finish", "planing"], Ft = (o) => ve.enable?.[o] ? w.inputShapes.value.some((l) => In(o, l)) : !1, pa = (o) => Ge.includes(o) ? Ft(o) : _n.value[o] ?? !0, Ea = A(() => {
      const o = Oa.value.fields.value, l = Oa.value.allFieldsMap.value, h = o.filter((Z) => pa(Z.name)), p = ["orientationLock", "banding", "finish", "planing", "machining", "imageUpload"], C = [];
      let L = null;
      const N = h.filter((Z) => Z.name !== "fullStock");
      _n.value.fullStock && (L = h.find((Z) => Z.name === "fullStock") || l.get("fullStock"));
      for (const Z of p) {
        const ge = pa(Z), Me = N.find(($e) => $e.name === Z);
        if (ge && !Me) {
          const $e = l.get(Z);
          $e && C.push($e);
        }
      }
      const H = fa.value || [];
      return [
        ...L ? [L] : [],
        ...N,
        ...C,
        ...H
      ];
    }), Aa = A(() => {
      let o = Ea.value.length + 2;
      return bt.value && o++, o;
    }), gl = A(() => {
      const o = {
        id: 34,
        del: 32,
        info: 32
      }, l = {
        id: `${o.id}px`,
        del: `${o.del}px`,
        info: `${o.info}px`
      }, h = [];
      for (const p of Ea.value) {
        if (p.name === "trim") continue;
        const C = p.w ?? "minmax(20px, 1fr)";
        h.push(C);
      }
      return h.unshift(l.id), bt.value && h.push(l.info), h.push(l.del), h.join(" ");
    }), ma = A(() => ve.enable?.pagination), vs = A(() => ct.diagramNav || ve.enable?.diagramNav), Vn = A(() => ma.value ? Math.ceil(Yt.value.length / Dt.value) : 1), hl = A(() => {
      if (!ma.value) return Yt.value;
      const o = (mt.value - 1) * Dt.value, l = o + Dt.value;
      return Yt.value.slice(o, l);
    }), vl = A(() => ma.value ? (mt.value - 1) * Dt.value : 0), Ta = (o) => {
      o < 1 && (o = 1), o > Vn.value && (o = Vn.value), mt.value = o;
    }, bl = () => Ta(1), yl = () => Ta(mt.value - 1), kl = () => Ta(mt.value + 1), wl = () => Ta(Vn.value), bt = A(() => ct.debug || ve.debug || ve.enable?.debug), Sl = A(() => {
      try {
        const o = localStorage.getItem("inputs/inputStock");
        if (!o) return "(empty)";
        const l = JSON.parse(o);
        return JSON.stringify(l.map((h) => ({ material: h.material, db_id: h.db_id, l: h.l, w: h.w, t: h.t })), null, 2);
      } catch {
        return "(parse error)";
      }
    }), xl = A(() => {
      try {
        const o = localStorage.getItem("stock-filter-selections");
        return o || "(empty)";
      } catch {
        return "(read error)";
      }
    }), Il = A(() => ({
      "--btn-color": ve.colors.buttonText,
      "--btn-bg": ve.colors.button,
      "--btn-hover-bg": Pl(ve.colors.button, -8),
      "--btn-focus-ring": ve.colors.button
    }));
    function Pl(o, l) {
      const h = o.replace("#", ""), p = parseInt(h, 16), C = Math.round(2.55 * l), L = (p >> 16) + C, N = (p >> 8 & 255) + C, H = (p & 255) + C;
      return `#${(16777216 + (L < 255 ? L < 1 ? 0 : L : 255) * 65536 + (N < 255 ? N < 1 ? 0 : N : 255) * 256 + (H < 255 ? H < 1 ? 0 : H : 255)).toString(16).slice(1)}`;
    }
    const Cl = {
      position: "absolute",
      display: "inline-block",
      left: "auto",
      right: "0px",
      top: "0px",
      bottom: "auto",
      margin: "0px",
      padding: "0px",
      visibility: "visible",
      opacity: "1",
      height: "auto",
      width: "auto",
      color: "#4e4e4e",
      border: "none",
      fontSize: "12px"
    }, bs = A(() => ct.showCredit !== void 0 ? ct.showCredit : Ae.value ? !(Ae.value && Ae.value?.api?.whiteLabel) : !0), Fa = {
      // @deprecated Use saw.options.stockSelection instead
      stockSelection: (o) => {
        const l = ["efficiency", "smallest"];
        o && !l.includes(o) ? console.warn(`${o} is not a valid stockSelection, expected ${l.join("|")}`) : v.options.stockSelection = o;
      },
      // @deprecated Use saw.options.minSpacing instead
      minSpacing: (o) => {
        v.options.minSpacing = o;
      },
      maxParts: (o) => {
        ve.maxParts = o;
      },
      partsPerPage: (o) => {
        o && o > 0 && (Dt.value = o, ve.partsPerPage = o);
      },
      locale: (o) => {
        ze.value = o.replace(/_/g, "-");
      },
      enable: (o) => {
        const l = {
          name: "partName",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload",
          fullStock: "fullStock"
        };
        if (o) {
          for (const h in hn.enable)
            h in o && (ve.enable[h] = o[h]);
          for (const h in l) {
            const p = l[h], C = qt(o, [p]), L = hn.enable[p];
            Ot(h, C !== void 0 ? C : L);
          }
          Sn.value = qt(o, ["csvImport"]) ?? hn.enable?.csvImport;
        }
      },
      colors: (o) => {
        if (o)
          for (const l in hn.colors)
            l in o && (ve.colors[l] = o[l]);
      },
      orientationModel: (o) => {
        if (![0, 1, 2].includes(o)) {
          ve.orientationModel = 0;
          return;
        }
        ve.orientationModel = o;
      },
      numberFormat: (o) => {
        if (!["decimal", "fraction"].includes(o)) {
          ve.numberFormat = "decimal";
          return;
        }
        ve.numberFormat = o;
      },
      customFields: (o) => {
        if (!Array.isArray(o) || !o?.length)
          return;
        const l = [];
        o.forEach((h) => {
          const p = ys(h.id), C = {
            ...h,
            custom: !0,
            id: p,
            name: p,
            // CheckoutField expects 'name' property
            propertyPath: "customData." + p,
            fieldMap: "customData." + p
          };
          h.type === "checkbox" && (C.w = "32px"), h.type === "integer" || h.type === "float" ? C.output = h.output ?? "number" : h.type === "select" && (C.output = h.output ?? "string", C.options = h.options), l.push(C);
        }), fa.value = l, Mt(() => {
          for (const h of w.inputShapes.value)
            h.customData = o.reduce((p, C) => {
              const L = ys(C.id);
              return p[L] = h.customData?.[L] || C.default || "", p;
            }, {});
        });
      }
    }, Ll = (o) => {
      bt.value && Y("log", ["checkout init...", o]), o?.stockFilterEnabled && localStorage.removeItem("inputs/inputStock"), o?.parts && (o.parts = wn(o.parts));
      let l;
      try {
        l = Mp(o);
      } catch (p) {
        console.error("[init] validation FAILED:", p.message), Y("error", p.message || "Invalid init data");
        return;
      }
      if (l.saw && F(l.saw), l.sawsById && (y.value = l.sawsById), l?.options) {
        const p = l.options;
        Wo(p);
        const C = ["stockType", "bladeWidth"];
        if (!l.saw && !o?.stockFilterEnabled)
          Y("error", `Saw configuration is required. Missing properties: ${C.join(", ")}`);
        else if (l.saw) {
          const N = C.filter((H) => !(H in l.saw));
          N.length > 0 && Y("error", `Missing required saw properties: ${N.join(", ")}`), (l.saw.cutType === "guillotine" || l.saw.cutType === "beam") && !("cutPreference" in l.saw) && Y("error", "cutPreference is a required saw property for guillotine and beam cut types");
        }
        const L = ["enable", "colors"];
        for (const N in p)
          L.includes(N) || (ve[N] = p[N]), N in Fa && Fa[N]?.(p[N]);
      }
      if (l.options.colors && "colors" in Fa && Fa.colors(l.options.colors), l.banding) {
        const p = l.banding;
        "locations" in p && p.locations && (Ke.locations = p.locations), "groups" in p && p.groups && (Ke.groups = p.groups), "rules" in p && p.rules && (Ke.rules = p.rules), "maxGap" in p && typeof p.maxGap == "number" && (Ke.maxGap = p.maxGap), "perSide" in p && typeof p.perSide == "boolean" && (Ke.perSide = p.perSide);
      }
      if (l.finish) {
        const p = l.finish;
        "locations" in p && p.locations && (Tt.locations = p.locations), "groups" in p && p.groups && (Tt.groups = p.groups), "rules" in p && p.rules && (Tt.rules = p.rules);
      }
      if (l.planing) {
        const p = l.planing;
        "locations" in p && p.locations && (Xt.locations = p.locations), "groups" in p && p.groups && (Xt.groups = p.groups), "rules" in p && p.rules && (Xt.rules = p.rules);
      }
      l.partRules && (Hn.value = l.partRules), l.customValidation && (Dn.value = l.customValidation), yi("banding", l), yi("finish", l), yi("planing", l);
      for (const p of ["banding", "finish", "planing"]) {
        const C = !!qt(l, ["options", "enable", p]), L = !!qt(l, [p, "containsCatalogueLinked"]), N = Object.keys(qt(l, [p, "pricing"]) || {}), H = (pi(p)?.labels?.length ?? 0) > 0;
        C && !L && N.length > 0 && !H && ut({
          type: "error",
          message: `${Li(p)} options couldn't be loaded`,
          additional: ["Check that the number of labels matches the pricing levels (details in the console)."]
        });
      }
      Tl(l), Es(l), w.inputShapes.value.length && Ns(), mn.value = !0, bt.value && Y("log", ["init complete"]);
      const h = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(h), Mt(() => {
        bs.value && !Kl() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      }), l.parts?.length && Mt(() => {
        bt.value && Y("log", ["loading parts via init..."]), w.inputShapes.value.length = 0;
        let p = 0;
        for (const L of l.parts) {
          const N = $a(L);
          N ? N.issues?.length && bt.value && Y("log", [`SmartCut - issues found while importing part at index ${p}`, N.issues]) : bt.value && Y("log", [`SmartCut - error loading part at index ${p}`, L]), p++;
        }
        w.inputShapes.value.flatMap((L) => Gi(L.issues)).length && ut({
          type: "error",
          message: Te("errors.general.issues_found")
        }), bt.value && Y("log", [`loaded ${w.inputShapes.value.length} parts via init`]);
      });
    }, Ot = (o, l = !1) => {
      _n.value[o] = l;
    }, ys = (o) => o ? yu(o)?.toLowerCase() : null, Ol = (o, l, h) => {
      try {
        if (!o || !l) return;
        const C = h !== null && h !== "" && h !== void 0 && !["orientationLock", "grain"].includes(l), L = (Z, ge) => {
          if (!se(Z.autoId, ge)) {
            for (const [$e, Je] of Object.entries(ge))
              Ni(Z, $e, Je);
            Z.isNew || Z.validate({ fields: Object.keys(ge) });
          }
          "material" in ge && We(Z.autoId, ge.material);
        }, N = (Z, ge, Me) => {
          const $e = ge ?? Z.material, Je = Me ?? Z.t, xt = $e ? String($e).toUpperCase() : null, He = w.inputStock.value.find((wt) => {
            const _t = !xt || qn(wt) === xt, Bn = Je == null || re({ v: wt.t }) === re({ v: Je });
            return _t && Bn;
          });
          return He ? { l: re({ v: He.l }), w: re({ v: He.w }) } : null;
        }, H = (Z, ge) => {
          if (!Z) return [];
          const Me = String(Z).toUpperCase(), $e = ge != null ? re({ v: ge }) : null, Je = /* @__PURE__ */ new Set(), xt = [];
          for (const He of w.inputStock.value) {
            if (qn(He) !== Me || $e != null && re({ v: He.t }) !== $e) continue;
            const wt = re({ v: He.l }), _t = re({ v: He.w });
            if (typeof wt != "number" || typeof _t != "number") continue;
            const Bn = `${wt}x${_t}`;
            Je.has(Bn) || (Je.add(Bn), xt.push({
              l: wt,
              w: _t,
              db_id: He.db_id,
              code: He.code,
              cost: typeof He.cost == "number" ? He.cost : null
            }));
          }
          return xt;
        };
        if (l === "material" && (!h || h === "")) {
          const Z = { material: null, t: null };
          v.stockType === "linear" && (Z.w = null), L(o, Z);
          return;
        }
        if (l === "material" && h && V.value?.length) {
          const Z = V.value.find((ge) => ge.name === h);
          if (Z) {
            const ge = { material: h }, Me = Is(h), $e = o.t != null ? re({ v: o.t }) : null;
            if (!($e != null && Me.includes($e)) && Me.length > 0 && (Me.length === 1 || $e != null) && (ge.t = Me[0]), v.stockType === "linear" && o.w != null && Z.widths) {
              const He = re({ v: o.w });
              !Z.widths.some((wt) => re({ v: wt }) === He) && Z.widths.length > 0 && (ge.w = re({ v: Z.widths[0] }));
            }
            if (Z.fullSizeOnly) {
              const He = N(
                o,
                h,
                ge.t != null ? ge.t : o.t
              );
              ge.fullStock = !0, He && (ge.l = He.l, ge.w = He.w);
            } else o.fullStock && (ge.fullStock = !1);
            L(o, ge), Pn(o, Z), Zn(o);
            const xt = w.inputShapes.value.indexOf(o);
            for (const He of ["banding", "finish", "planing"]) {
              if (Q[He] !== xt) continue;
              const wt = Rn(o, He), _t = He === "banding" && !!mi(o);
              if (!wt.options.length && !_t) {
                Q[He] = null;
                continue;
              }
              Ie(He, wt.options, wt.labels, wt.pricing);
            }
            return;
          }
        }
        if (l === "fullStock") {
          if (h !== !0 && Os(o) || h === !0 && !gi(o))
            return;
          if (h === !0) {
            const Z = H(o.material, o.t);
            if (Z.length > 1) {
              g.value = { shape: o, options: Z }, Mn.value = !0;
              return;
            }
            const ge = N(o);
            if (ge) {
              L(o, { fullStock: !0, l: ge.l, w: ge.w });
              return;
            }
          } else {
            L(o, { fullStock: !1, l: null, w: null });
            return;
          }
        }
        if ((l === "material" || l === "t") && o.fullStock) {
          const Z = {
            ...o,
            material: l === "material" ? h : o.material,
            t: l === "t" ? h : o.t
          };
          if (!gi(Z)) {
            L(o, { [l]: h, fullStock: !1, l: null, w: null });
            return;
          }
          const ge = N(
            o,
            l === "material" ? h : void 0,
            l === "t" ? h : void 0
          );
          if (ge) {
            L(o, { [l]: h, l: ge.l, w: ge.w });
            return;
          }
        }
        if (o.isNew)
          if (C)
            o.isNew = !1;
          else {
            Ni(o, l, h);
            return;
          }
        let pe;
        if (l.includes(".")) {
          const Z = l.split("."), ge = Z[0], Me = Z.slice(1).join("."), Je = { ...o[ge] || {} };
          Ni(Je, Me, h), pe = { [ge]: Je };
        } else
          pe = { [l]: h };
        if (L(o, pe), l === "t" && V.value?.length && o.material) {
          const Z = V.value.find((ge) => ge.name === o.material);
          Z && Pn(o, Z);
        }
        l === "t" && v.stockType === "linear" && V.value?.length && o.material && Mt(() => {
          const Z = Ps(o);
          if (Z.length > 0 && o.w != null) {
            const ge = re({ v: o.w });
            Z.some((Me) => re({ v: Me }) === ge) || L(o, { w: re({ v: Z[0] }) });
          }
        });
      } catch (p) {
        console.error("[CHECKOUT] Error updating field:", p);
      }
    }, El = () => {
    }, Al = (o, l) => {
      o?.isNew && (o.isNew = !1), o.validate({ fields: [l] }), ["l", "w", "t"].includes(l) && ks(o);
    }, ks = (o) => {
      if (Hn.value && o && !o.isNew && !(!o.l && !o.w))
        try {
          const l = dp(o, Hn.value);
          if (o.issues && (o.issues = o.issues.filter((h) => !h.category?.includes("part"))), !l.valid && l.violations.length > 0)
            for (const h of l.violations) {
              const p = pp(h), C = h.dimension === "longSide" ? "l" : h.dimension === "shortSide" ? "w" : h.dimension === "t" ? "t" : null;
              new Ct({
                item: o,
                type: "error",
                category: ["part"],
                field: C ? [[C]] : [],
                message: p,
                shouldTranslate: !1
              });
            }
        } catch (l) {
          console.error("[CHECKOUT] Error validating part:", l);
        }
    }, Tl = (o) => {
      if (qt(ve, ["enable", "machining"]) && o?.machining) {
        for (const l in gt)
          o.machining[l] && (gt[l] = o.machining[l]);
        if (["holes", "hingeHoles"].forEach((l) => {
          o?.machining?.[l] && (gt[l].enabled = o?.machining?.[l].enabled);
        }), o?.machining?.corners?.types?.length && (gt.corners.enabled = !0, gt.corners.types = o.machining.corners.types), o.banding && o?.options?.enable?.banding) {
          if (!Pe) return;
          gt.banding = {
            enabled: !0
          }, Pe.options.length && (gt.banding.options = Pe.options), Pe.labels.length && (gt.banding.labels = Pe.labels), no(Pe.pricing) && (gt.banding.pricing = Pe.pricing);
        }
      }
    }, Fl = (o = null) => {
      j.value = o, o && Ye(o) && o.l && o.w ? Le.value = !0 : alert(Te("machining.enter_dimensions_first"));
    }, Nl = () => {
      Le.value = !1;
    }, di = W(!1), $l = (o = null) => {
      j.value = o, o && (di.value = !0);
    }, Ml = () => {
      di.value = !1;
    }, ws = (o) => {
      if (!o) return [];
      const l = o.stockId ?? o.stock?.id, h = l ? w.inputStock.value?.find((C) => String(C.id) === String(l)) : null;
      return (h?.extras?.customProducts ?? h?.material?.extras?.customProducts ?? []).length ? [] : [];
    }, Dl = (o) => ws(o).filter((l) => l.type === "machining"), Ss = (o = []) => {
      if (X.value = [], he.value = [], Ot("t", !1), !!o.length) {
        for (const l of o) {
          if (!l?.t) continue;
          const h = aa(l);
          if (h) {
            const p = Na(h, !0);
            p.length === 2 ? (ql(p), Ot("t", !0), l.t = X.value[0]) : Y("error", "bonded thickness found which does not have 2 options");
          } else X.value.includes(l.t) || X.value.push(l.t);
        }
        X.value.length > 1 && Ot("t", !0);
      }
    }, fi = (o = []) => {
      if (Oe.value = [], !o.length) {
        Ot("w", !1);
        return;
      }
      for (const l of o) {
        if (!l?.w) continue;
        const h = re({ v: l.w });
        Oe.value.includes(h) || Oe.value.push(h);
      }
      Oe.value.length >= 1 ? Ot("w", !0) : Ot("w", !1);
    }, xs = (o) => {
      if (!o) return { thicknesses: [], bondedThicknesses: [] };
      if (!V.value?.length)
        return {
          thicknesses: X.value,
          bondedThicknesses: []
        };
      if (!o.material)
        return {
          thicknesses: X.value,
          bondedThicknesses: []
        };
      const l = V.value.find((Z) => Z.name === o.material);
      let h;
      if (l)
        h = [...l.thicknesses];
      else {
        const Z = String(o.material).trim().toUpperCase(), ge = /* @__PURE__ */ new Set();
        for (const Me of w.inputStock.value) {
          if (qi(Me) !== Z || Me.t == null) continue;
          const $e = aa(Me);
          ge.add($e || re({ v: Me.t }));
        }
        h = Array.from(ge).sort((Me, $e) => re({ v: Me }) - re({ v: $e }));
      }
      const p = [...h], C = [];
      for (let Z = 0; Z < p.length; Z++) {
        const ge = p[Z], Me = Na(ge), $e = [];
        if (Me.length) {
          for (const Je of Me)
            p[Z] = Je, $e.push(Z);
          Z++;
        }
        $e.length && C.push($e);
      }
      const L = String(o.material).trim().toUpperCase(), N = /* @__PURE__ */ new Set();
      for (const Z of w.inputStock.value)
        qi(Z) === L && Z.t != null && (aa(Z) || N.add(re({ v: Z.t })));
      const H = p.map((Z) => re({ v: Z }));
      return {
        thicknesses: p.filter((Z) => {
          const ge = re({ v: Z });
          return N.has(ge) ? !0 : !he.value.some(($e) => {
            if ($e.length !== 2) return !1;
            const Je = re({ v: X.value[$e[0]] }), xt = re({ v: X.value[$e[1]] }), He = Math.min(Je, xt), wt = Math.max(Je, xt);
            return ge === He && H.includes(wt);
          });
        }),
        bondedThicknesses: C
      };
    }, Is = (o) => o ? xs({ material: o }).thicknesses.map((l) => re({ v: l })).filter((l) => typeof l == "number" && Number.isFinite(l)) : [], Ps = (o) => {
      if (!o) return [];
      if (!V.value?.length || !o.material)
        return Oe.value;
      const l = V.value.find((h) => h.name === o.material);
      if (!l)
        return Oe.value;
      if (o.t != null && w.inputStock?.value?.length) {
        const h = re({ v: o.t }), p = /* @__PURE__ */ new Set();
        for (const C of w.inputStock.value)
          C.material?.toUpperCase() === o.material && re({ v: C.t }) === h && C.w != null && p.add(re({ v: C.w }));
        if (p.size > 0)
          return Array.from(p).sort((C, L) => C - L);
      }
      return l.widths || Oe.value;
    }, pi = (o) => o === "banding" ? Pe : o === "finish" ? Be : o === "planing" ? je : null, Nt = (o, l) => pl(Ma(o?.stock?.db_id) || null, l), mi = (o) => Wp(Ma(o?.stock?.db_id) || null), Cs = (o) => {
      switch (o) {
        case "banding":
          return Ke.groups;
        case "finish":
          return Tt.groups;
        case "planing":
          return Xt.groups;
        default:
          return;
      }
    }, Ls = () => w.inputStock.value.some((o) => Gp(o)), Rn = (o, l) => {
      const h = pi(l), p = Cs(l), C = h?.formulas, L = {
        options: h?.options ?? [],
        labels: h?.labels ?? [],
        pricing: h?.pricing ?? {},
        ...C && { formulas: C },
        displayNames: h?.displayNames ?? {},
        ...p?.length && { locationGroups: p }
      }, N = { options: [], labels: [], pricing: {}, displayNames: {} };
      if (!o?.material) return L;
      const H = Nt(o, l);
      if (!Bp(H))
        return h?.containsCatalogueLinked || Ls() ? N : L;
      const pe = H.code || H.name, Z = H.groups;
      if (Z && Z.length > 0) {
        const wt = Cs(l) || [], _t = {};
        for (const Vt of Z)
          typeof Vt.price == "number" && (_t[Vt.id] = Vt.price);
        const Bn = wt.filter((Vt) => _t[Vt.id] !== void 0).map((Vt) => ({ ...Vt, price: _t[Vt.id] })), Ds = {}, _s = [], Vs = {}, ki = {}, wi = H.pricingFormula;
        for (const Vt of Bn) {
          const _a = `${pe}|${Vt.id}`;
          Ds[_a] = Vt.price, _s.push(_a), Vt.label && (Vs[_a] = Vt.label), typeof wi == "string" && wi.trim() && (ki[_a] = wi.trim());
        }
        const mr = [Li(l)];
        return {
          options: [_s],
          labels: mr,
          pricing: Ds,
          ...Object.keys(ki).length && { formulas: ki },
          displayNames: Vs,
          locations: [],
          // empty so render path applies hideIndividualLocations filter
          locationGroups: Bn
        };
      }
      const ge = jp(H, h, pe), Me = H.labels?.length ? H.labels : [Li(l)], $e = zp(H, l) ? [] : $s(ge), Je = H.displayNames && typeof H.displayNames == "object" ? { ...H.displayNames } : { ...h?.displayNames ?? {} };
      H.code && H.name && H.code !== H.name && (Je[H.code] = H.name);
      const xt = { ...C || {} }, He = H.pricingFormula;
      if (typeof He == "string" && He.trim()) {
        const wt = He.trim();
        for (const _t of Object.keys(ge)) xt[_t] = wt;
      }
      return {
        options: $e,
        labels: Me,
        pricing: ge,
        ...Object.keys(xt).length && { formulas: xt },
        displayNames: Je,
        locations: H.locations?.length ? H.locations : void 0
      };
    }, _l = (o, l) => Rn(o, l).options, Os = (o) => !o?.material || !V.value?.length ? !1 : !!V.value.find((h) => h.name === o.material)?.fullSizeOnly, gi = (o) => {
      if (!o?.material) return !1;
      const l = String(o.material).toUpperCase(), h = o.t != null ? re({ v: o.t }) : null;
      return w.inputStock.value.some((p) => qn(p) !== l || h != null && re({ v: p.t }) !== h ? !1 : !!p.allowExactFitShapes);
    }, ga = (o, l) => {
      if (!l.fullSizeOnly) return;
      const h = o.t, p = w.inputStock.value.find((C) => C.material === l.name && (h == null || re({ v: C.t }) === re({ v: h })));
      o.fullStock = !0, p && (o.l = re({ v: p.l }), o.w = re({ v: p.w }));
    }, Vl = (o) => {
      const l = { banding: !1, finish: !1, planing: !1, machining: !1 };
      if (!o?.material || !(Pe?.containsCatalogueLinked || Be?.containsCatalogueLinked || je?.containsCatalogueLinked || Ls())) return l;
      const p = Ma(o?.stock?.db_id), C = ai(p || null) || {};
      return {
        banding: !C.banding,
        finish: !C.finish,
        planing: !C.planing,
        machining: !C.machining
      };
    }, Es = (o) => {
      if (o?.stock?.some((l) => l?.material)) {
        V.value = [], X.value = [], he.value = [];
        const l = /* @__PURE__ */ new Map();
        for (const C of o.stock) {
          if (!C.material) continue;
          const L = qn(C), N = (C.code || C.name || "").toString().trim(), H = C.name || C.customData?.stockName || C.material || L;
          if (l.has(L) ? C.fullSizeOnly && (l.get(L).fullSizeOnly = !0) : l.set(L, {
            displayName: H,
            material: C.customData?.materialLabel || C.material,
            db_id: C.db_id,
            codes: /* @__PURE__ */ new Set(),
            brand: C.brand,
            variant: C.variant,
            imageUrl: C.imageUrl,
            color: typeof C.color == "string" ? C.color : void 0,
            fullSizeOnly: !!C.fullSizeOnly,
            thicknesses: /* @__PURE__ */ new Set(),
            widths: /* @__PURE__ */ new Set(),
            dimensions: /* @__PURE__ */ new Set()
          }), N && l.get(L).codes.add(N), C.t != null) {
            const pe = aa(C);
            pe ? l.get(L)?.thicknesses.add(pe) : l.get(L)?.thicknesses.add(re({ v: C.t }));
          }
          if (v.stockType === "linear" && C.w != null && l.get(L)?.widths.add(re({ v: C.w })), v.stockType !== "linear" && C.l != null && C.w != null) {
            const pe = re({ v: C.l }), Z = re({ v: C.w });
            l.get(L)?.dimensions.add(`${pe}x${Z}`);
          }
        }
        const h = Array.from(l.entries()).map(([C, L]) => {
          const N = [], H = [];
          for (const pe of L.thicknesses)
            typeof pe == "string" && pe.includes(",") ? H.push(pe) : N.push(re({ v: pe }));
          return { name: C, sets: L, regularThicknesses: N, bondedStrings: H };
        });
        V.value = h.map(({ name: C, sets: L, regularThicknesses: N }) => {
          const H = L.codes.size === 1 ? [...L.codes][0] : void 0, pe = {
            name: C,
            displayName: L.displayName,
            material: L.material,
            db_id: L.db_id,
            code: H,
            brand: L.brand,
            variant: L.variant,
            imageUrl: L.imageUrl,
            color: L.color,
            fullSizeOnly: L.fullSizeOnly,
            thicknesses: N.sort((Z, ge) => Z - ge)
          };
          return v.stockType === "linear" && L.widths.size > 0 && (pe.widths = Array.from(L.widths).sort((Z, ge) => Z - ge)), v.stockType !== "linear" && L.dimensions.size > 0 && (pe.dimensions = Array.from(L.dimensions).map((Z) => {
            const [ge, Me] = Z.split("x").map(($e) => Number($e));
            return { l: ge, w: Me };
          })), pe;
        });
        const p = /* @__PURE__ */ new Set();
        for (const C of V.value)
          for (const L of C.thicknesses)
            p.add(re({ v: L }));
        X.value = Array.from(p).sort((C, L) => C - L);
        for (let C = 0; C < h.length; C++) {
          const { bondedStrings: L } = h[C], N = V.value[C];
          for (const H of L) {
            const pe = Na(H, !0);
            if (pe.length !== 2) continue;
            const Z = [];
            for (const ge of pe) {
              const Me = re({ v: ge });
              let $e = X.value.findIndex((Je) => re({ v: Je }) === Me);
              $e === -1 ? (X.value.push(Me), N.thicknesses.push(Me), $e = X.value.length - 1) : N.thicknesses.some((Je) => re({ v: Je }) === Me) || N.thicknesses.push(Me), Z.push($e);
            }
            he.value.push(Z);
          }
        }
        if (v.stockType === "linear") {
          const C = /* @__PURE__ */ new Set();
          for (const L of V.value)
            if (L.widths)
              for (const N of L.widths)
                C.add(re({ v: N }));
          Oe.value = Array.from(C).sort((L, N) => L - N);
        }
        Ot("material", qe(V.value)), X.value.length > 1 ? Ot("t", !0) : Ot("t", !1), v.stockType === "linear" && Oe.value.length > 1 ? Ot("w", !0) : v.stockType === "linear" && Ot("w", !1);
      } else
        Ss(o.stock);
      v.stockType === "linear" && !V.value?.length && fi(o.stock);
    }, Rl = (o) => {
      if (!o?.length) {
        V.value = [], X.value = [], Oe.value = [];
        return;
      }
      if (o.some((h) => h?.material)) {
        const h = /* @__PURE__ */ new Map();
        he.value = [];
        for (const L of o) {
          if (!L.material) continue;
          const N = qn(L), H = (L.code || L.name || "").toString().trim(), pe = (L.material || N).toString();
          if (h.has(N) ? L.fullSizeOnly && (h.get(N).fullSizeOnly = !0) : h.set(N, {
            displayName: pe,
            material: L.customData?.materialLabel || L.material,
            db_id: L.db_id,
            codes: /* @__PURE__ */ new Set(),
            brand: L.brand,
            variant: L.variant,
            imageUrl: L.imageUrl,
            color: typeof L.color == "string" ? L.color : void 0,
            fullSizeOnly: !!L.fullSizeOnly,
            thicknesses: /* @__PURE__ */ new Set(),
            widths: /* @__PURE__ */ new Set(),
            dimensions: /* @__PURE__ */ new Set()
          }), H && h.get(N).codes.add(H), L.t != null) {
            const Z = aa(L);
            Z ? h.get(N)?.thicknesses.add(Z) : h.get(N)?.thicknesses.add(re({ v: L.t }));
          }
          if (v.stockType === "linear" && L.w != null && h.get(N)?.widths.add(re({ v: L.w })), v.stockType !== "linear" && L.l != null && L.w != null) {
            const Z = re({ v: L.l }), ge = re({ v: L.w });
            h.get(N)?.dimensions.add(`${Z}x${ge}`);
          }
        }
        const p = Array.from(h.entries()).map(([L, N]) => {
          const H = [], pe = [];
          for (const Z of N.thicknesses)
            typeof Z == "string" && Z.includes(",") ? pe.push(Z) : H.push(re({ v: Z }));
          return { name: L, sets: N, regularThicknesses: H, bondedStrings: pe };
        });
        V.value = p.map(({ name: L, sets: N, regularThicknesses: H }) => {
          const pe = N.codes.size === 1 ? [...N.codes][0] : void 0, Z = {
            name: L,
            displayName: N.displayName,
            material: N.material,
            db_id: N.db_id,
            code: pe,
            brand: N.brand,
            variant: N.variant,
            imageUrl: N.imageUrl,
            color: N.color,
            fullSizeOnly: N.fullSizeOnly,
            thicknesses: H.sort((ge, Me) => ge - Me)
          };
          return v.stockType === "linear" && N.widths.size > 0 && (Z.widths = Array.from(N.widths).sort((ge, Me) => ge - Me)), v.stockType !== "linear" && N.dimensions.size > 0 && (Z.dimensions = Array.from(N.dimensions).map((ge) => {
            const [Me, $e] = ge.split("x").map((Je) => Number(Je));
            return { l: Me, w: $e };
          })), Z;
        });
        const C = /* @__PURE__ */ new Set();
        for (const L of V.value)
          for (const N of L.thicknesses)
            C.add(re({ v: N }));
        X.value = Array.from(C).sort((L, N) => L - N);
        for (let L = 0; L < p.length; L++) {
          const { bondedStrings: N } = p[L], H = V.value[L];
          for (const pe of N) {
            const Z = Na(pe, !0);
            if (Z.length !== 2) continue;
            const ge = [];
            for (const Me of Z) {
              const $e = re({ v: Me });
              let Je = X.value.findIndex((xt) => re({ v: xt }) === $e);
              Je === -1 ? (X.value.push($e), H.thicknesses.push($e), Je = X.value.length - 1) : H.thicknesses.some((xt) => re({ v: xt }) === $e) || H.thicknesses.push($e), ge.push(Je);
            }
            he.value.push(ge);
          }
        }
        if (v.stockType === "linear") {
          const L = /* @__PURE__ */ new Set();
          for (const N of V.value)
            if (N.widths)
              for (const H of N.widths)
                L.add(re({ v: H }));
          Oe.value = Array.from(L).sort((N, H) => N - H);
        }
        Ot("material", qe(V.value)), Ot("t", X.value.length > 1), v.stockType === "linear" && Ot("w", Oe.value.length > 1);
      } else
        Ss(o), v.stockType === "linear" && fi(o);
    }, ql = (o, l = null) => {
      if (!Array.isArray(o)) {
        Y("error", "addBondedThicknesses expects an array");
        return;
      }
      const h = [];
      for (let p of o)
        ve.numberFormat === "decimal" && (p = parseFloat(p)), X.value.push(p), l && l.thicknesses.push(p), h.push(X.value.length - 1);
      he.value.push(h);
    }, Bl = (o) => {
      const { thicknesses: l } = xs(o);
      return l?.length ? l.map((h) => ({
        label: h?.toString(),
        value: h
      })) : [];
    };
    function jl(o) {
      return o?.length ? o.map((l) => ({
        name: l.name,
        brand: l.brand,
        variant: l.variant,
        finish: l.finish,
        material: l.material || void 0,
        code: l.code || void 0,
        displayName: l.displayName,
        imageUrl: l.imageUrl,
        color: l.color,
        colorHex: l.colorHex
      })) : [];
    }
    const Ul = (o) => {
      const l = Ps(o);
      return l?.length ? l.map((h) => ({
        label: h?.toString(),
        value: h
      })) : [];
    }, Na = (o, l = !1) => {
      if (typeof o == "string" && o.includes(",")) {
        const h = o.split(",");
        if (h.length === 2) {
          const p = parseFloat(h[0]), C = parseFloat(h[1]);
          !isNaN(p) && !isNaN(C) && C !== p * 2 && ut({
            type: "warning",
            message: `Bonded thickness "${o}" does not follow the expected pattern (second value should be double the first)`
          });
        }
        return l ? h.map((p) => re({ v: p })) : h;
      }
      return [];
    }, Gl = () => {
      rn.value ? zl() : Wl();
    }, Wl = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), rn.value = !0;
    }, zl = () => {
      document.exitFullscreen && document.exitFullscreen(), rn.value = !1;
    }, Kl = () => {
      if (Ae.value?.api?.whiteLabel) return !0;
      let o = !0;
      const l = document.querySelector("#smartcut-checkout a#credit");
      if (!l) return o = !1;
      const h = window.getComputedStyle(l);
      return h.display === "none" || h.display === "hidden" || h.opacity === "0" || h.color === "transparent" || h.position !== "absolute" || h.color !== "#4e4e4e" && h.color !== "rgb(78, 78, 78)" ? o = !1 : (dt.value = o, o);
    }, Hl = A(() => typeof ct.findExtrasPrice == "function"), Zl = A(() => ve.unitSystem === "imperial" ? "/ square ft" : "/ square m"), Jl = A(() => ve.unitSystem === "imperial" ? "/ ft" : "/ m"), Ql = A(() => [
      {
        type: "banding",
        keys: Pe.keys,
        fallbackLocations: Ke.locations,
        show: (o) => In("banding", o),
        extraProps: (o) => ({
          priceLabel: Jl.value,
          catalogueKey: mi(o) || "",
          // The resolved extra's id drives the picker's on-demand
          // `/extras/:id/levels` fetch. Present whenever the catalogue picker
          // renders (catalogue-linked stock carries a resolved extra with _id).
          catalogueExtraId: String(Nt(o, "banding")?._id || ""),
          catalogueMaxGap: Ke.maxGap,
          cataloguePerSide: Ke.perSide,
          extraName: Nt(o, "banding")?.name,
          pricePerLength: Nt(o, "banding")?.price
        })
      },
      {
        type: "finish",
        keys: Be.keys,
        fallbackLocations: Tt.locations,
        show: (o) => In("finish", o),
        extraProps: (o) => ({
          priceLabel: Zl.value,
          catalogueKey: Nt(o, "finish")?.sourceCatalogueKey || "",
          catalogueExtraId: String(Nt(o, "finish")?._id || ""),
          extraName: Nt(o, "finish")?.name,
          pricePerLength: Nt(o, "finish")?.price
        })
      },
      {
        type: "planing",
        keys: je.keys,
        fallbackLocations: Xt.locations,
        show: (o) => In("planing", o),
        extraProps: (o) => ({
          catalogueKey: Nt(o, "planing")?.sourceCatalogueKey || "",
          catalogueExtraId: String(Nt(o, "planing")?._id || ""),
          extraName: Nt(o, "planing")?.name,
          pricePerLength: Nt(o, "planing")?.price
        })
      }
    ]), Yl = (o, l) => {
      const h = Rn(o, l.type);
      return {
        allOptions: h.options,
        pricing: h.pricing,
        formulas: h.formulas,
        displayNames: h.displayNames,
        labels: h.labels,
        locations: h.locations || l.fallbackLocations,
        locationGroups: h.locationGroups || []
      };
    }, As = (o, l) => {
      let h, p;
      switch (l) {
        case "banding":
          h = Pe.options, p = Pe.labels;
          break;
        case "finish":
          h = Be.options, p = Be.labels;
          break;
        case "planing":
          h = je.options, p = je.labels;
          break;
        default:
          h = [], p = [];
      }
      An(o, l, h, p);
    }, Ts = (o) => {
      const l = Object.keys(o);
      return l.length ? Math.max(...l.map((h) => h.split("|").length)) : 0;
    }, hi = (o, l, h) => o ? Ic(
      Object.keys(o).map((p) => p.split("|")),
      h,
      l
    ) : [], Xl = (o, l, h, p) => {
      const C = Rn(o, l);
      return Ci(o, l, h, (N, H) => {
        const pe = H.filter((Z) => Z?.trim()).join("|");
        return pe && C.pricing[pe] !== void 0 ? C.pricing[pe] : p ? p(N, H) : null;
      }, C.options, C.labels);
    }, er = (o, l, h) => {
      let p, C;
      switch (l) {
        case "banding":
          p = Pe.options, C = Pe.labels;
          break;
        case "finish":
          p = Be.options, C = Be.labels;
          break;
        case "planing":
          p = je.options, C = je.labels;
          break;
        default:
          p = [], C = [];
      }
      return Ci(o, l, h, ct.findExtrasPrice, p, C);
    }, tr = W({}), nr = (o) => {
      const l = pt.value.findIndex((h) => h.shapeId === o.shapeId);
      l !== -1 ? pt.value[l] = o : pt.value.push(o), window.smartcutImages = pt.value;
    }, ar = (o) => {
      pt.value = pt.value.filter((l) => l.shapeId !== o), window.smartcutImages = pt.value;
    }, ir = (o) => {
      pn.value = pn.value === o ? null : o;
    }, vi = (o = 1) => {
      for (let l = o; l--; ) {
        let h = {
          l: null,
          w: v.stockType === "linear" && Oe.value.length === 1 ? Oe.value[0] : null,
          t: X.value.length ? X.value[0] : null,
          q: 1,
          material: V.value?.length === 1 ? V.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (w.inputShapes.value.length > 0) {
          const C = w.inputShapes.value[w.inputShapes.value.length - 1];
          h.material = C.material, h.materialId = C.materialId, h.t = C.t, C.stock && (h.stock = { ...C.stock }), v.stockType === "linear" && C.w && (h.w = C.w);
        }
        const p = D(h);
        p && (Pe?.labels?.length && An(p, "banding", Pe.options, Pe.labels), Be?.labels?.length && An(p, "finish", Be.options, Be.labels), je?.labels?.length && An(p, "planing", je.options, je.labels));
      }
    }, $a = (o = {}) => {
      const l = {
        q: 1,
        // Always set quantity to 1
        ...o
      }, h = D(l);
      return h && (v.stockType === "linear" && Oe.value.length === 1 && !h.w && (h.w = Oe.value[0]), X.value.length && !h.t && (h.t = X.value[0]), V.value?.length === 1 && !h.material && We(h.autoId, V.value[0].name), Pe?.labels?.length && An(h, "banding", Pe.options, Pe.labels), Be?.labels?.length && An(h, "finish", Be.options, Be.labels), je?.labels?.length && An(h, "planing", je.options, je.labels)), h;
    }, sr = (o) => {
      Yf(
        o,
        X.value,
        he.value,
        (l) => re({ v: l })
      );
    }, Fs = () => {
      Qt(), kt(null), De.stockList.value = [], De.shapeList.value = [], De.cutList.value = [];
    }, bi = () => {
      w.inputShapes.value.length = 0, ct.inputType !== "formula" && Mt(() => vi());
    }, Ma = (o) => {
      if (o)
        return w.inputStock.value.find((l) => l.db_id === o);
    }, Zn = (o) => {
      o.extras && (o.extras.banding = null, o.extras.finish = null, o.extras.planing = null);
    }, or = (o, l) => {
      const h = Rn(o, l);
      return uu(h.pricing);
    }, lr = (o) => {
      const l = { pruned: !1, types: /* @__PURE__ */ new Set() };
      if (!o?.extras) return l;
      const h = ["banding", "finish", "planing"];
      for (const p of h) {
        const C = o.extras[p];
        if (!C || Nt(o, p)?.sourceCatalogueKey) continue;
        const N = or(o, p);
        if (C.faces)
          for (const H of ["a", "b"]) {
            const pe = C.faces[H];
            typeof pe == "string" && pe !== "" && !N.has(pe) && (C.faces[H] = "", l.pruned = !0, l.types.add(p));
          }
        if (C.sides)
          for (const H of ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]) {
            const pe = C.sides[H];
            typeof pe == "string" && pe !== "" && !N.has(pe) && (C.sides[H] = "", l.pruned = !0, l.types.add(p));
          }
      }
      return l;
    }, qn = (o) => qi(o), rr = (o, l) => {
      const h = o.toUpperCase();
      return w.inputStock.value.find((p) => qn(p) === h && re({ v: p.t }) === l);
    }, Pn = (o, l) => {
      const h = re({ v: o.t }), p = rr(l.name, h), C = {
        db_id: p?.db_id || l.db_id,
        code: p?.code || l.code,
        material: l.displayName || l.name
      };
      typeof h == "number" && Number.isFinite(h) && (C.thickness = h), o.stock = C;
    }, Ns = () => {
      const o = /* @__PURE__ */ new Set();
      for (const l of w.inputShapes.value) {
        const h = l.stock, p = l.material?.toUpperCase();
        let C = null;
        if (h?.db_id) {
          const H = Ma(h.db_id);
          H && (C = V.value.find((pe) => pe.name === qn(H))), C || (C = V.value.find((pe) => pe.db_id && pe.db_id === h.db_id));
        }
        if (!C && h?.code && (C = V.value.find((H) => H.code && H.code === h.code)), !C && p && (C = V.value.find((H) => H.name === p)), C)
          l.material = C.name, Pn(l, C), l.t != null && !C.thicknesses.includes(re({ v: l.t })) && (l.t = null, l.stock = null, Zn(l)), ga(l, C);
        else {
          if ((h?.db_id || h?.code) && !V.value?.length)
            continue;
          if (V.value?.length === 1) {
            const H = V.value[0], pe = l.material !== H.name;
            l.material = H.name, H.thicknesses.includes(re({ v: l.t })) || (l.t = re({ v: H.thicknesses[0] })), Pn(l, H), pe && Zn(l), ga(l, H);
          } else if (V.value?.length > 1 && l.t) {
            const H = V.value.find((pe) => pe.thicknesses.some((Z) => re({ v: Z }) === re({ v: l.t })));
            H ? (l.material !== H.name && Zn(l), l.material = H.name, Pn(l, H), ga(l, H)) : (Zn(l), l.material = V.value[0].name, l.t = re({ v: V.value[0].thicknesses[0] }), Pn(l, V.value[0]), ga(l, V.value[0]));
          } else V.value?.length > 1 ? (Zn(l), l.material = V.value[0].name, l.t = re({ v: V.value[0].thicknesses[0] }), Pn(l, V.value[0]), ga(l, V.value[0])) : !l.t && w.inputStock.value[0]?.t && (l.t = re({ v: w.inputStock.value[0].t }));
        }
        We(l.autoId, l.material);
        const { pruned: L, types: N } = lr(l);
        L && N.forEach((H) => o.add(H));
      }
      if (o.size > 0) {
        const l = [...o].join(", ");
        ut({
          type: "warning",
          message: `Some previously selected ${l} options are no longer available and have been cleared. Please review your selection.`
        });
      }
    }, ur = async () => {
      if (de(), Y("calculating"), St.value) return !1;
      St.value = !0, gn.value = !1, Ns();
      const o = await Df({
        t: Te,
        partTrim: ve.partTrim,
        maxShapes: ve.maxParts || 1e3,
        maxStock: 1 / 0,
        // CheckoutCalculator doesn't have stock limits
        inputSaw: w.inputSaw.value,
        // Extras validation data
        bandingPricing: Pe.pricing,
        finishPricing: Be.pricing,
        planingPricing: je.pricing,
        findExtrasPrice: ct.findExtrasPrice,
        getShapeExtrasPricing: (L, N) => Rn(L, N).pricing,
        // Banding is tuple-canonical on the client: the shape stores the axis
        // tuple, so completeness validates against the tuple-keyed pricing alone —
        // no per-shape SKU codes needed (the SKU is a server-side lookup).
        extrasValidationRules: ci.value,
        extrasLocationGroups: {
          banding: Ke.groups,
          finish: Tt.groups,
          planing: Xt.groups
        },
        onLimit: () => {
          ut({
            type: "error",
            message: Te("limits.max_parts") + " " + ve.maxParts
          });
        }
      });
      if (Hn.value)
        for (const L of w.inputShapes.value)
          ks(L);
      const l = w.inputShapes.value.flatMap((L) => L.issues || []).filter((L) => L.type === "error" && L.category?.includes("part") && !L.category?.includes("extras"));
      if (l.length > 0) {
        ut({
          type: "error",
          message: Te("errors.validation.inputs_issue", { 0: "part" }),
          additional: l.map((L) => Ka(L.message, L.context || L.params))
        }), Y("validation-error"), St.value = !1;
        return;
      }
      if (!o.valid) {
        Y("validation-error"), St.value = !1;
        return;
      }
      Fs(), w.inputShapes.value.forEach((L, N) => {
        L.createId(N);
      }), w.inputStock.value.forEach((L, N) => {
        L.createId(N);
      });
      const h = w.inputShapes.value.map((L) => ie(L)).filter(Boolean);
      if (h.length !== w.inputShapes.value.length)
        return ut({
          type: "error",
          message: "Some parts have validation errors and cannot be processed",
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), St.value = !1, !1;
      sr(h), bt.value && Y("log", [
        "SmartCut - calculating",
        "stock",
        w.inputStock.value.map((L) => ({ l: L.l, w: L.w })),
        "parts",
        h.map((L) => ({ l: L.l, w: L.w }))
      ]);
      const p = {
        inputSaw: w.inputSaw.value.toData(),
        inputShapes: h.map((L) => L.toData()),
        inputStock: w.inputStock.value.map((L) => {
          const N = Hp(L.toData()), H = Qf(L);
          return H != null && (N.t = H), N;
        }),
        inputUserGroups: fe.value ? w.inputUserGroups.value.map((L) => L.toData()) : [],
        enableEvo: !0,
        useInventory: !1,
        domain: at,
        extrasOptions: Fe(),
        // SKU/name maps for the cutlist CSV's operator-meaningful labels
        // (internal-only; resolved server-side as SKU → name → tuple). WC
        // ships sku (variation SKUs) + name; DB-flow ships name only (its
        // codes are resolved from Extra docs at export, never shipped here).
        extrasResolution: {
          banding: { sku: Pe.codes, name: Pe.displayNames },
          finish: { sku: Be.codes, name: Be.displayNames },
          planing: { sku: je.codes, name: je.displayNames }
        },
        source: "checkout",
        sourceVersion: "4.3.4"
      };
      if (Dn.value?.enabled && Dn.value?.rules?.length > 0) {
        const L = tp(
          Dn.value.rules,
          w.inputShapes.value.map((N) => N.toData())
        );
        if (!L.valid) {
          for (const N of L.errors) {
            const H = N.partName ? `Part "${N.partName}"` : `Part ${N.partIndex + 1}`;
            ut({
              type: "error",
              message: `${H}: ${N.message}`
            });
          }
          St.value = !1;
          return;
        }
      }
      Y("before-calculate", p);
      const C = new CustomEvent("smartcut/beforeCalculate", {
        cancelable: !0,
        detail: {
          data: p,
          error: null
        }
      });
      if (window.dispatchEvent(C), C.defaultPrevented) {
        C.detail.error && ut({
          type: "error",
          message: C.detail.error
        }), St.value = !1;
        return;
      }
      await Lt.connect(), Lt.emit("calculate", p);
    }, cr = (o, l) => {
      const h = [o, "pricing"];
      if (!to(l, h))
        return Y("error", `${h.join(".")} not found in sent data`), null;
      const p = qt(l, h);
      if (typeof p != "object")
        return Y("error", `${h.join(".")} data must be an object`), null;
      if (!no(p))
        return Y("error", `if provided, ${h.join(".")} data must contain some values`), null;
      const C = Object.keys(p);
      if (!C.length)
        return Y("error", `no ${h.join(".")} pricing found`), null;
      if (C.some((pe) => /,/.test(pe)))
        return Y("error", `${h.join(".")} keys must not contain commas and should only be separated by a pipe (|)`), null;
      if (Object.values(p).some((pe) => isNaN(pe)))
        return Y("error", `${h.join(".")} values must be a number`), null;
      const L = [o, "labels"];
      if (!to(l, L))
        return Y("error", `${L.join(".")} not found`), null;
      const N = qt(l, L);
      if (!N)
        return Y("error", `${L.join(".")} data not provided`), null;
      if (!Array.isArray(N))
        return Y("error", `${L.join(".")} data must be an array`), null;
      if (!N.length)
        return Y("error", `if provided, ${L.join(".")} data must contain values`), null;
      const H = Ts(p);
      return N.length !== H ? (Y("error", `${L.join(".")} length (${N.length}) must match the number of levels in ${h.join(".")} (${H})`), null) : { pricing: p, labels: N };
    }, yi = (o, l) => {
      const h = l?.[o], p = !!h?.containsCatalogueLinked;
      if (!o || !h || !qt(ve, ["enable", o])) return;
      let C = h.pricing ?? {}, L = h.labels ?? [];
      if (!p) {
        const pe = cr(o, l);
        if (!pe) return;
        C = pe.pricing, L = pe.labels;
      }
      const N = qt(l, [o, "displayNames"]) || void 0, H = qt(l, [o, "formulas"]);
      if (o === "banding" || o === "finish" || o === "planing") {
        const pe = pi(o);
        pe.labels = L, pe.pricing = C, pe.displayNames = N || {}, pe.codes = qt(l, [o, "codes"]) || {}, pe.containsCatalogueLinked = p, pe.formulas = H;
        const Z = $s(C);
        pe.options = Z, Ie(o, Z, L, C, N);
      }
      if (At.value = Fe(), !!w.inputShapes.value?.length)
        for (const pe of w.inputShapes.value) As(pe, o);
    }, $s = (o) => {
      const l = [], h = Object.keys(o), p = Ts(o);
      for (let C = p; C--; ) l.push(/* @__PURE__ */ new Set());
      for (const C of h) {
        const L = C.split("|");
        p > 1 && L.length === 1 || L.forEach((N, H) => {
          H < p && l[H].add(N);
        });
      }
      for (let C = 0; C < p; C++)
        l[C] = Array.from(l[C]);
      return l;
    }, Da = (o, l) => {
      if (!l) return;
      o !== "info" && Object.keys(Q).forEach((p) => {
        p !== o && p !== "info" && (Q[p] = null);
      });
      const h = w.inputShapes.value.indexOf(l);
      if (Q[o] === h)
        j.value = null, Q[o] = null, tr.value[o] = void 0;
      else if (j.value = l, Q[o] = h, o !== "info") {
        const p = Rn(l, o);
        p.options.length && Ie(
          o,
          p.options,
          p.labels,
          p.pricing
        );
      }
    }, Ms = (o) => {
      bt.value && Y("log", ["load event received"]), mn.value && dr(o.detail);
    }, dr = (o) => {
      if (bt.value && Y("log", ["loading parts..."]), !o || !o?.inputs?.parts?.length) {
        bt.value && Y("log", ["could not find any parts to import"]);
        return;
      }
      w.inputShapes.value.length = 0;
      let l = 0;
      for (const p of o.inputs.parts) {
        const C = $a(p);
        C ? C.issues?.length && bt.value && Y("log", [`SmartCut - issues found while importing part at index ${l}`, C.issues]) : bt.value && Y("log", [`SmartCut - error loading part at index ${l}`, p]), l++;
      }
      w.inputShapes.value.flatMap((p) => Gi(p.issues)).length && ut({
        type: "error",
        message: Te("errors.general.issues_found")
      }), bt.value && Y("log", [`loaded ${w.inputShapes.value.length} parts`]);
    }, fr = (o) => {
      w.inputShapes.value.length = 0, Mt(() => {
        for (const l of o)
          l.t = w.inputStock.value?.[0]?.t ?? null, v.stockType === "linear" && Oe.value.length === 1 && !l.w && (l.w = Oe.value[0]), $a(l);
      });
    };
    Qe(() => ct.inputStock, (o) => {
      if (Fs(), Array.isArray(o) || console.warn("SmartCut - stock must be passed as an array"), !o?.length) return;
      w.inputStock.value.length = 0;
      const l = o.map((h) => h.toData());
      Rl(l);
      for (const h of o)
        le({
          ...h.toData(),
          autoAdd: !0,
          q: 1
        }) || (console.error("Failed to add stock item:", h), ut({
          type: "error",
          message: "Failed to add some stock items due to validation errors"
        }));
      if (w.inputStock.value.length) {
        if (!w.inputShapes.value.length)
          ct.inputType !== "formula" && Mt(() => {
            w.inputShapes.value.length || vi();
          });
        else if (V.value.length === 1) {
          const p = V.value[0];
          for (const C of w.inputShapes.value)
            C.material || (We(C.autoId, p.name), (C.t == null || !p.thicknesses.includes(re({ v: C.t }))) && (C.t = re({ v: p.thicknesses[0] })), Pn(C, p));
        }
        const h = R(w.inputSaw.value);
        h.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(h))), ut({
          type: "error",
          message: Te("errors.validation.stock_issue"),
          additional: h.map((p) => Ka(p.message, p.context || p.params))
        }));
      }
    }, { immediate: !0 }), Qe(w.inputShapes, (o) => {
      Y("inputs-changed"), o.forEach((l) => {
        if (v.stockType === "linear" && Oe.value.length && (!l.w || !Oe.value.includes(re({ v: l.w }))) && (l.w = Oe.value[0]), l.material) {
          const h = Is(l.material);
          h.length && !h.includes(re({ v: l.t })) && (l.t = h[0]);
        }
      });
    }, { deep: !0 }), Qe(() => Yt.value.length, (o, l) => {
      if (ma.value) {
        if (o > l) {
          const h = Math.ceil(o / Dt.value);
          mt.value < h && (mt.value = h);
        } else if (o < l) {
          const h = Math.ceil(o / Dt.value);
          mt.value > h && (mt.value = Math.max(1, h));
        }
      }
    }), Qe(() => ve.numberFormat, (o) => {
      oe(o);
    }), Qe(w.inputStock, (o) => {
      v.stockType === "linear" && fi(o.map((l) => l.toData()));
    }, { deep: !0 }), Qe(() => v, (o) => {
      w.inputSaw.value = new bn(o);
    }, { deep: !0 }), fn(async () => {
      if (ln.value) return;
      ln.value = !0;
      const o = new URL(window.location.href), l = o.searchParams.toString(), h = o.origin + o.pathname + (l ? `?${l}` : "");
      ft.value !== h && bi(), ft.value = h, ze.value = ve.locale, await Lt.connect(), Lt.emit("getUserFromDomain"), window.addEventListener("smartcut/load", Ms);
    });
    const pr = () => {
      Lt && Lt.disconnect();
    };
    return si(() => {
      window.removeEventListener("smartcut/load", Ms), pr(), delete window.smartcutCheckout;
    }), n({
      init: Ll,
      clear: bi,
      getAvailablePricingOptions: hi,
      getExtrasPrice: er,
      formatPrice: ct.formatPrice,
      findExtrasPrice: ct.findExtrasPrice,
      inputShapes: w.inputShapes,
      initExtrasOptions: As,
      createAndAddInputShape: $a,
      initMaterialsThicknesses: Es
    }), (o, l) => {
      const h = ra("Icon");
      return T(), K("div", ng, [
        bt.value ? (T(), Ne(E(r), {
          key: 0,
          title: "Ecommerce Calculator Debug",
          data: [{
            inputStock: E(w).inputStock.value.map((p) => ({ name: E(la)(p).fullLabel, materialKey: p.material, db_id: p.db_id || null, code: p.code || null, l: p.l, w: p.w, t: p.t, db_sawId: p.db_sawId || null, stockExtras: E(ai)(p) })),
            materials: V.value.map((p) => ({ name: E(la)(p).fullLabel, materialKey: p.name, thicknesses: p.thicknesses, db_id: p.db_id, code: p.code })),
            inputShapesStockRefs: E(w).inputShapes.value.map((p) => ({ material: p.material || "?", t: p.t, stock: p.stock || null })),
            saw: {
              inputSaw: E(w).inputSaw.value ? {
                name: E(w).inputSaw.value.name || null,
                db_id: E(w).inputSaw.value.db_id || null,
                stockType: E(w).inputSaw.value.stockType || null,
                bladeWidth: E(w).inputSaw.value.bladeWidth ?? null,
                bladeWidthEnd: E(w).inputSaw.value.bladeWidthEnd ?? null,
                cutPreference: E(w).inputSaw.value.cutPreference || null
              } : null,
              stockSawIds: E(w).inputStock.value.map((p) => ({ name: E(la)(p).fullLabel, db_sawId: p.db_sawId || null })),
              resultSaw: E(De).saw ? { name: E(De).saw.name || null, db_id: E(De).saw.db_id || null } : null
            },
            localStorage: { inputStock: Sl.value, stockFilterSelections: xl.value }
          }],
          paths: ["ecommerce-calculator"],
          root: !1
        }, null, 8, ["data"])) : ue("", !0),
        mn.value ? ue("", !0) : (T(), Ne(Ho, {
          key: 1,
          size: "large",
          label: "Loading...",
          block: ""
        })),
        mn.value ? (T(), K("section", {
          key: 2,
          id: "smartcut-checkout",
          class: lt(["smartcut-content", { fullscreen: rn.value }]),
          style: Gt(Il.value)
        }, [
          j.value?.machining && Le.value ? (T(), Ne(E(i), {
            key: 0,
            "input-shape": j.value,
            "onUpdate:inputShape": l[0] || (l[0] = (p) => j.value = p),
            translate: !0,
            options: gt,
            "find-extras-price": e.findExtrasPrice,
            "get-extras-price": E(Ci),
            "get-available-pricing-options": hi,
            "format-price": e.formatPrice,
            "custom-machining-products": Dl(j.value),
            onClose: Nl
          }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price", "custom-machining-products"])) : ue("", !0),
          j.value && di.value ? (T(), Ne(E(s), {
            key: 1,
            "input-shape": j.value,
            "onUpdate:inputShape": l[1] || (l[1] = (p) => j.value = p),
            products: ws(j.value),
            "find-extras-price": e.findExtrasPrice,
            "format-price": e.formatPrice,
            onClose: Ml
          }, null, 8, ["input-shape", "products", "find-extras-price", "format-price"])) : ue("", !0),
          Kn.value && !e.readonly ? (T(), K("button", {
            key: 2,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            onClick: l[2] || (l[2] = (p) => Gl())
          }, [
            st(h, { icon: ["fass", "expand"] }),
            nn(" " + Se(E(Te)("general.full_screen")), 1)
          ])) : ue("", !0),
          bs.value ? (T(), K("a", {
            key: 3,
            id: "credit",
            style: Cl,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, Se(E(bu)(E(Te)("general.powered_by"))), 1)) : ue("", !0),
          be("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: Gt({ "grid-template-columns": gl.value })
          }, [
            E(w).inputShapes.value.length ? (T(), K("div", ag, [
              l[8] || (l[8] = be("div", { class: "cell id" }, null, -1)),
              (T(!0), K(Pt, null, Zt(Ea.value, (p) => (T(), K("div", {
                key: p.name,
                class: lt(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(p.name) || p.type === "boolean" }])
              }, Se(E(Te)(p.label)), 3))), 128)),
              bt.value ? (T(), K("div", ig, " Info ")) : ue("", !0),
              l[9] || (l[9] = be("div", { class: "cell del" }, null, -1))
            ])) : ue("", !0),
            (T(!0), K(Pt, null, Zt(hl.value, (p, C) => (T(), K("div", {
              key: p.autoId,
              class: lt(["row inputs", { "group-pickable": fe.value, "row--readonly": !!p.readonly }])
            }, [
              be("div", {
                class: lt(["cell", { clickable: fe.value }]),
                onClick: (L) => fe.value && xn(p)
              }, [
                be("div", {
                  class: "id",
                  style: Gt({
                    background: ve.colors.partA,
                    color: ve.colors.text
                  })
                }, Se(vl.value + C + 1), 5)
              ], 10, sg),
              (T(!0), K(Pt, null, Zt(Ea.value, (L) => (T(), K("div", {
                key: L.name,
                class: "cell"
              }, [
                p ? (T(), Ne(Bm, {
                  key: 0,
                  field: L,
                  item: p,
                  index: C,
                  "type-prefix": "part",
                  readonly: e.readonly || !!p.readonly,
                  "number-format": ve.numberFormat,
                  "orientation-model": ve.orientationModel,
                  "stock-grain": E(ne)(p),
                  "material-options": V.value?.map((N) => ({ label: N.displayName || N.name, value: N.name })) || [],
                  "material-items": jl(V.value),
                  "thickness-options": L.name === "t" ? Bl(p) : [],
                  "width-options": L.name === "w" && v.stockType === "linear" ? Ul(p) : [],
                  "banding-enabled": Q.banding === C ? p : null,
                  "full-stock-disabled": p.fullStock && !["material", "t", "q", "fullStock"].includes(L.name) || L.name === "fullStock" && (Os(p) || !p.fullStock && !gi(p)),
                  "material-extras-disabled": Vl(p),
                  onUpdate: (N) => Ol(p, L.propertyPath || L.fieldMap || L.name, N),
                  onValidation: l[3] || (l[3] = (N, H) => El()),
                  onBlur: () => Al(p, L.name),
                  onOpenBanding: (N) => Da("banding", p),
                  onOpenMachining: (N) => Fl(p),
                  onOpenCustomProducts: (N) => $l(p),
                  onOpenFinish: (N) => Da("finish", p),
                  onOpenPlaning: (N) => Da("planing", p),
                  onOpenImageUpload: (N) => ir(C)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "orientation-model", "stock-grain", "material-options", "material-items", "thickness-options", "width-options", "banding-enabled", "full-stock-disabled", "material-extras-disabled", "onUpdate", "onBlur", "onOpenBanding", "onOpenMachining", "onOpenCustomProducts", "onOpenFinish", "onOpenPlaning", "onOpenImageUpload"])) : ue("", !0)
              ]))), 128)),
              bt.value ? (T(), K("div", og, [
                be("button", {
                  class: lt(["c-btn", { selected: Q.info === C }]),
                  type: "button",
                  onClick: (L) => Da("info", p)
                }, " i ", 10, lg)
              ])) : ue("", !0),
              be("div", rg, [
                be("button", {
                  disabled: E(w).inputShapes.value.length <= 1 || e.readonly || !!p.readonly,
                  type: "button",
                  class: "c-btn delete",
                  "aria-label": `${E(Te)("actions.remove")} ${E(Fi)(E(Te)("woodwork.part"))}`,
                  onClick: (L) => E(x)(p.autoId)
                }, [
                  st(h, { icon: ["fass", "trash"] })
                ], 8, ug)
              ]),
              st(E(a), {
                item: p,
                "num-columns": Aa.value
              }, null, 8, ["item", "num-columns"]),
              (T(!0), K(Pt, null, Zt(Ql.value, (L) => (T(), K(Pt, {
                key: L.type + "-" + (p?.material || "")
              }, [
                Q[L.type] === C && Hl.value && L.show(p) ? (T(), Ne(df, Kt({
                  key: 0,
                  shape: p,
                  "shape-index": C,
                  "extra-type": L.type,
                  "extra-label": L.type,
                  "extra-keys": L.keys,
                  "user-friendly-field-map": E(cu),
                  "part-columns": Aa.value,
                  "format-price": e.formatPrice,
                  "find-extras-price": ct.findExtrasPrice,
                  "get-price": Xl,
                  "orientation-model": ve.orientationModel,
                  "stock-grain": E(ne)(p),
                  "get-available-pricing-options": hi,
                  "allow-custom-names": !1,
                  debug: bt.value
                }, { ref_for: !0 }, { ...Yl(p, L), ...L.extraProps(p) }), null, 16, ["shape", "shape-index", "extra-type", "extra-label", "extra-keys", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain", "debug"])) : ue("", !0)
              ], 64))), 128)),
              Q.info === C ? (T(), K("div", {
                key: 1,
                id: "shape-info",
                style: Gt({ "grid-column-end": "span " + Aa.value })
              }, [
                be("div", null, Se(p?.banding), 1),
                be("div", null, Se(At.value?.banding?.options || "No options"), 1)
              ], 4)) : ue("", !0),
              pn.value === C ? (T(), Ne(E(c), {
                key: 2,
                prefix: (C + 1).toString(),
                "unique-id": p.autoId,
                "shape-id": p.autoId,
                style: Gt({ "grid-column-end": "span " + Aa.value }),
                images: pt.value,
                debug: bt.value,
                onUpdate: nr,
                onRemove: ar
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images", "debug"])) : ue("", !0)
            ], 2))), 128))
          ], 4),
          be("div", cg, [
            e.readonly ? ue("", !0) : (T(), K("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${E(Te)("actions.add")} ${E(Fi)(E(Te)("woodwork.part"))}`,
              onClick: l[4] || (l[4] = (p) => vi())
            }, [
              st(h, { icon: ["fass", "plus-large"] }),
              nn(" " + Se(`${E(Te)("actions.add")} ${E(Fi)(E(Te)("woodwork.part"))}`), 1)
            ], 8, dg)),
            be("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": E(Te)("actions.calculate"),
              title: e.calculateDisabled && e.calculateDisabledReason ? e.calculateDisabledReason : void 0,
              disabled: !E(w).inputStock.value?.length || St.value || e.calculateDisabled,
              onClick: l[5] || (l[5] = (p) => ur())
            }, [
              st(h, { icon: ["fass", "calculator"] }),
              nn(Se(E(Te)("actions.calculate")), 1)
            ], 8, fg),
            e.readonly ? ue("", !0) : (T(), K("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": E(Te)("actions.clear"),
              onClick: l[6] || (l[6] = (p) => bi())
            }, [
              st(h, { icon: ["fass", "trash"] })
            ], 8, pg)),
            be("div", mg, Se(E(M)) + Se(ve?.maxParts ? "/" + ve.maxParts : ""), 1)
          ]),
          fe.value && !e.readonly ? (T(), Ne(E(f), {
            key: 4,
            ref_key: "groupsRef",
            ref: Ee,
            "selected-shape": ye.value,
            "selected-shape-counter": Ve.value,
            "stock-grain": Ue.value,
            "format-options": Et.value,
            onHighlightShape: ua,
            onClearHighlight: ui
          }, null, 8, ["selected-shape", "selected-shape-counter", "stock-grain", "format-options"])) : ue("", !0),
          ma.value && Vn.value > 1 ? (T(), K("div", gg, [
            be("div", hg, [
              be("button", {
                type: "button",
                class: "c-btn",
                disabled: mt.value === 1,
                onClick: bl
              }, [
                st(h, { icon: ["fass", "chevrons-left"] })
              ], 8, vg),
              be("button", {
                type: "button",
                class: "c-btn",
                disabled: mt.value === 1,
                onClick: yl
              }, [
                st(h, { icon: ["fass", "chevron-left"] })
              ], 8, bg),
              be("span", yg, Se(mt.value) + " / " + Se(Vn.value), 1),
              be("button", {
                type: "button",
                class: "c-btn",
                disabled: mt.value >= Vn.value,
                onClick: kl
              }, [
                st(h, { icon: ["fass", "chevron-right"] })
              ], 8, kg),
              be("button", {
                type: "button",
                class: "c-btn",
                disabled: mt.value >= Vn.value,
                onClick: wl
              }, [
                st(h, { icon: ["fass", "chevrons-right"] })
              ], 8, wg)
            ])
          ])) : ue("", !0),
          Sn.value && !e.readonly ? (T(), Ne(E(u), {
            key: 6,
            ref: "import",
            "number-format": ve.numberFormat,
            "custom-fields": fa.value,
            "banding-options": Pe.options,
            "banding-labels": Pe.labels,
            "finish-options": Be.options,
            "finish-labels": Be.labels,
            "show-template": ve.enable?.csvTemplate !== !1,
            onImport: fr
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels", "show-template"])) : ue("", !0),
          ca.value ? (T(), K("div", Sg, [
            $n.value ? (T(), K("div", xg, Se($n.value), 1)) : ue("", !0),
            be("pre", Ig, Se(da.value), 1)
          ])) : ue("", !0),
          (ve.enable?.diagram ? St.value && !E(rt).complete || E(rt).complete && !ce.value : St.value || E(rt).complete) ? (T(), K("div", Pg, [
            st(E(G), {
              size: 50,
              number: E(rt).shapeCount,
              complete: E(rt).complete,
              "show-number": ve.enable?.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : ue("", !0),
          ts(be("div", Cg, [
            E(_e)?.saw?.stockType !== "roll" ? (T(), K("div", Lg, Se(E(_e)?.stack?.number ? E(_e).stack.number : 1), 1)) : ue("", !0),
            on.value ? (T(), Ne(E(_), {
              key: 1,
              "element-id": "diagram",
              "number-format": ve.numberFormat,
              "decimal-places": ve.decimalPlaces,
              colors: ve.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])) : ue("", !0)
          ], 512), [
            [br, ve.enable?.diagram && E(rt).complete && ce.value]
          ]),
          vs.value && ve.enable?.diagram && E(J).length > 1 && E(rt).complete ? (T(), Ne(E(U), {
            key: 9,
            display: !0,
            "use-stack": !0,
            "show-sorting": !1,
            onShow: E(kt)
          }, null, 8, ["onShow"])) : ue("", !0),
          !vs.value && ve.enable?.diagram && E(J).length > 1 && E(rt).complete ? (T(), Ne(E(me), {
            key: 10,
            ref: "stockNavigation",
            "active-stock-id": E(we),
            "stock-list": E(J),
            "primary-color": ve.colors.stock?.replace("#", ""),
            "secondary-color": ve.colors.partA?.replace("#", ""),
            onShowStock: E(kt)
          }, null, 8, ["active-stock-id", "stock-list", "primary-color", "secondary-color", "onShowStock"])) : ue("", !0)
        ], 6)) : ue("", !0),
        bt.value ? (T(), K("div", Og, [
          st(E(r), {
            data: [E(w)?.inputShapes?.value?.[0]],
            paths: ["inputShapes"]
          }, null, 8, ["data"]),
          l[10] || (l[10] = be("div", null, "Result data", -1)),
          st(E(r), {
            data: [it.value],
            paths: ["checkoutResult"]
          }, null, 8, ["data"])
        ])) : ue("", !0),
        st(tg, {
          open: Mn.value,
          "onUpdate:open": l[7] || (l[7] = (p) => Mn.value = p),
          options: g.value?.options || [],
          "material-label": g.value?.shape?.material || "",
          thickness: g.value?.shape?.t,
          "format-price": ct.formatPrice,
          onPick: P,
          onCancel: z
        }, null, 8, ["open", "options", "material-label", "thickness", "format-price"])
      ]);
    };
  }
}), Yg = /* @__PURE__ */ sn(Eg, [["__scopeId", "data-v-84a739c7"]]);
export {
  Kg as A,
  Cu as B,
  la as C,
  aa as D,
  rd as E,
  ri as F,
  Qg as G,
  Ia as I,
  Ho as L,
  Cd as M,
  Qo as S,
  Km as _,
  Gm as a,
  Uo as b,
  df as c,
  Hg as d,
  yf as e,
  hf as f,
  qt as g,
  Cm as h,
  Fc as i,
  Vp as j,
  Yg as k,
  to as l,
  La as m,
  Ug as n,
  no as o,
  Gg as p,
  Jg as q,
  jg as r,
  Ni as s,
  Wg as t,
  rs as u,
  _u as v,
  Ic as w,
  Ko as x,
  Zg as y,
  zg as z
};

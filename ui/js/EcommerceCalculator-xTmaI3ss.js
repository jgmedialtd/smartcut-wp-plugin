import { s as G, k as Qe, Z as zt, x as F, L as tt, X as Ms, H as Mt, d as vt, _ as hl, l as fn, M as ni, o as A, c as K, a as be, g as ot, u as E, j as Ne, b as ue, t as Se, q as ai, w as Un, n as Gt, F as It, f as Zt, G as ur, $ as Kt, p as tn, P as Ht, i as nn, A as ii, h as Qi, D as vl, m as st, r as oa, N as cr, B as Bt, C as dr, a0 as Wt, Q as Xn, W as fr, v as pr, J as un } from "./vendor-vue-DcIxm_xE.js";
import { i as lt, ac as Ye, ad as An, ae as bl, a6 as Tn, af as Gn, ag as Wn, ah as mr, n as ht, ai as yi, z as Yi, A as Ct, aj as gr, E as Cn, ak as hr, al as yl, I as kl, am as vr, an as aa, ao as wl, ap as Sl, aq as xl, ar as br, as as yr, at as Fn, au as $t, av as kr, aw as wr, ax as Sr, ay as Ri, az as Pa, aA as xr, aB as ki, aC as Pr, aD as Ln, aE as Ds, aF as _a, $ as Zn, a0 as ga, _ as bn, aG as Ir, aH as _s, aI as Rs, h as re, aa as Ra, t as Wa, T as ha, aJ as va, W as ba, a5 as ya, aK as Vs, aL as qs, w as Bs, aM as Cr, aN as Lr, aO as Or, aP as Er, aQ as Fr, aR as Pl, a as js, a3 as Vi, s as Ar, Q as Tr, B as Us, F as Nr, O as $r, a7 as vn, aS as Mr, aT as Gs, aU as Xi, aV as es, aW as qi, V as Dr, c as Ws, aX as _r, d as Rr, f as Vr, aY as qr, aZ as Br, a_ as Il, a$ as jr, b0 as wi, b1 as Ur, b2 as Gr, b3 as Cl, b4 as Wr, b5 as zr, b6 as Kr, b7 as Hr, b8 as Zr, b9 as Jr, ba as Qr, bb as Bi, bc as Yr, bd as Xr, be as eu, bf as tu, bg as nu, bh as ia, bi as Si, bj as au, bk as zs, bl as Ks, bm as xi, e as Pi, bn as iu, u as su } from "./InputUserGroup-BS7MVA1o.js";
import { o as $, h as c, n as S, l as xe, i as Ce, q as ne, j as ae, k as an, S as lu, u as Ze, w as yt, B as ou, E as Ia, I as Va, y as Hs, K as sa, t as ru, J as Zs, L as uu, T as cu, U as Js, V as du, D as qa, M as Ii, N as Ci, O as Li, x as fu } from "./vendor-C76etQCp.js";
import { s as Oi, t as Ll, u as pu, l as Ei, d as mu } from "./i18n-uloQAa9l.js";
import { g as gu, h as hu, s as vu } from "./vendor-lodash-wbyiOdVF.js";
import { Icon as Ya } from "./index-DLa-cABK.js";
import { o as Ol, f as El, s as Fl, a as Al, d as bu } from "./vendor-floating-ui-CCq0hEoe.js";
import { _ as sn } from "./Launch-CoGHL0vS.js";
import { t as Ae } from "./i18n-BsG8Q9fA.js";
import { b as ji } from "./environment-BeBZzWz6.js";
import "./vendor-i18next-DIDhOEvY.js";
function Qs(e, n) {
  return hu(e, n);
}
function qt(e, n) {
  return gu(e, n);
}
function Fi(e, n, t) {
  vu(e, n, t);
}
function Ys(e, n = !1) {
  if (!lt(e) || typeof e != "object")
    return !1;
  const t = Object.values(e);
  return t.length === 0 ? !1 : n ? t.some((a) => lt(a) && a) : t.some((a) => lt(a));
}
function yu(e) {
  if (!e?.length)
    return [];
  const n = e.filter((a) => !a.added), t = {};
  return n.forEach((a) => {
    const i = Tl(a.stock) || 1;
    t[a.parentId] ? t[a.parentId].count += i : (t[a.parentId] = {}, t[a.parentId].count = i, t[a.parentId].id = a.parentId, t[a.parentId].autoId = a.autoId || "", t[a.parentId].name = a?.name ? a.name : a.id, t[a.parentId].l = a.l, t[a.parentId].w = a.w, t[a.parentId].t = a.t, t[a.parentId].material = a.material, t[a.parentId].rot = a.rot, t[a.parentId].orientationLock = a.orientationLock);
  }), Object.values(t);
}
function Tl(e, n = []) {
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
function ku() {
  const e = document.documentElement;
  return "requestFullscreen" in e || "webkitRequestFullscreen" in e || "mozRequestFullScreen" in e || "msRequestFullscreen" in e;
}
function wu(e, n = "cc") {
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
  }, s = {}, r = Object.keys(e).some((d) => ["x1", "x2", "y1", "y2"].includes(d)) ? a : t;
  if (n === "cc") {
    for (const [d, h] of Object.entries(r))
      d in e && (s[h] = e[d]);
    for (const [d, h] of Object.entries(i))
      d in e && (s[h] = e[d]);
  } else {
    for (const [d, h] of Object.entries(r))
      h in e && (s[d] = e[h]);
    for (const [d, h] of Object.entries(i))
      h in e && (s[d] = e[h]);
  }
  return s;
}
const Nl = {
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
function Su(e) {
  return e !== 0 && e !== 1 && e !== 2 ? !1 : Nl[e].sidesLMatchShapeL;
}
function xu(e) {
  return e !== 0 && e !== 1 && e !== 2 ? [] : Nl[e].affectedExtraTypes;
}
function za(e = 0, n, t = null, a = null, i = null) {
  if (!Ye(t) && !An || a === "stock")
    return !1;
  let s, u;
  if (Ye(t) ? s = t.orientationLock : An(t) ? s = "l" : a === "shape" && (s = i), e === 0 || An(t))
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
function Pu(e, n, t = null, a = null, i = null) {
  if (!Ye(t) || a === "shape")
    return !1;
  let s;
  return e === 0 || e === 1 || e === 2 ? za(e, n, t, a, i) ? "cc" : !1 : s;
}
const Iu = {
  successMetric: "efficiency"
};
$({
  // Context - using z.any() for complex external types
  job: xe().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: c().nullable().default(null).describe("Socket.io connection ID"),
  user: xe().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: xe().describe("Configuration object"),
  // Type: Config
  api: ae().nullable().default(null).describe("API mode flag"),
  app: ae().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: Yi("Saw").describe("Saw configuration"),
  stockList: ht("Stock").default([]).describe("List of stock materials"),
  shapeList: yi(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: ht("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: ht("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: ht("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: yi(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: yi(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: mr,
  // Results storage
  cutList: ht("Cut").default([]).describe("List of cuts to make"),
  segmentList: ht("Segment").default([]).describe("List of segments"),
  offcuts: ht("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: ht("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: ae().default(!1).describe("Use inventory system"),
  successMetric: c().default(Iu.successMetric).describe("Metric for optimization success"),
  enableEvo: ae().default(!0).describe("Enable evolutionary algorithm"),
  weighting: Ce(c(), xe()).default({}).describe("Weighting configuration"),
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
  evolutionVisData: ne(Ce(c(), lu())).default([]).describe("Evolution visualization data"),
  final: ae().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: ae().default(!1).describe("Has minimum spacing requirement")
});
const Cu = an(["decimal", "fraction"]), Ai = $({
  sku: Ce(c(), c()).optional(),
  name: Ce(c(), c()).optional()
}), ts = $({
  banding: Ai.optional(),
  finish: Ai.optional(),
  planing: Ai.optional()
}), Lu = $({
  job: xe().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Extend with autoId/entityType so they survive Zod validation for worker reconstruction
  inputSaw: Wn.extend({ autoId: c().optional(), __entityType: c().optional() }),
  inputShapes: ne(Gn.extend({ autoId: c().optional(), __entityType: c().optional() })),
  inputStock: ne(Tn.extend({ autoId: c().optional(), __entityType: c().optional() })),
  inputUserGroups: ne(bl.extend({ autoId: c().optional(), __entityType: c().optional() })).optional(),
  // Number format for conversion
  numberFormat: Cu.optional(),
  // Algorithm configuration
  enableEvo: ae().default(!0),
  weighting: xe().optional(),
  successMetric: c().optional(),
  useInventory: ae().default(!1),
  // Context
  socketId: c().optional(),
  user: xe().optional(),
  // IUser type
  // Application flags
  widget: ae().optional(),
  api: ae().optional(),
  app: ae().optional(),
  domain: c().optional(),
  // Extras options (centralized configuration)
  extrasOptions: $({
    banding: $({
      options: $({
        sides: Ce(c(), ne(c())).optional()
      }).optional()
    }).optional(),
    finish: $({
      options: $({
        faces: Ce(c(), ne(c())).optional()
      }).optional()
    }).optional(),
    planing: $({
      options: $({
        sides: Ce(c(), ne(c())).optional(),
        faces: Ce(c(), ne(c())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // Extras display-value resolution for the cutlist CSV (internal-only;
  // SKU → name → tuple). Storefront-supplied; never on the public /v3 API.
  extrasResolution: ts.optional(),
  // API specific
  config: xe().optional(),
  v: S().optional(),
  // API version
  webhook: c().optional(),
  //source
  sourceVersion: c().nullish(),
  source: c().optional()
});
$({
  job: xe().optional(),
  // Type: Job from BullMQ
  saw: xe(),
  // Runtime Saw instance
  shapeList: ne(xe()),
  // Runtime Shape instances
  stockList: ne(xe()),
  // Runtime Stock instances
  userGroups: ne(xe()).optional(),
  // Runtime Group instances
  enableEvo: ae(),
  weighting: xe().optional(),
  successMetric: c().optional(),
  useInventory: ae(),
  socketId: c().optional(),
  user: xe().optional(),
  widget: ae().optional(),
  api: ae().optional(),
  app: ae().optional(),
  domain: c().optional(),
  config: xe().optional(),
  v: S().optional(),
  webhook: c().optional()
});
const Ou = typeof process < "u" && !!process.env && !!process.env.ALGO_TRACE;
(Ou ? process.env.ALGO_TRACE_DATA ?? "" : "").split(",").map((e) => e.trim()).filter(Boolean);
function $l(e) {
  return {
    entities: /* @__PURE__ */ new Map(),
    stockList: [],
    shapeList: [],
    ...e
  };
}
function Ka(e, n) {
  if (Array.isArray(n))
    for (const t of n)
      t && typeof t == "object" && (t.autoId && e.entities.set(t.autoId, t), t.id && t.id !== t.autoId && e.entities.set(t.id, t));
}
function Eu(e, n) {
  if (n) {
    if (n && typeof n == "object" && typeof n.getType == "function")
      return n;
    if (typeof n == "string")
      return e.entities.get(n);
    if (n && typeof n == "object" && n.autoId)
      return e.entities.get(n.autoId);
  }
}
function Ui(e, n) {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((a) => Ui(a, n));
  if (typeof e.getType == "function")
    return e;
  if (e.__ref && (e.id || e.autoId)) {
    const a = e.autoId || e.id;
    return Eu(n, a) || e;
  }
  const t = { ...e };
  for (const a in t)
    Object.prototype.hasOwnProperty.call(t, a) && (t[a] = Ui(t[a], n));
  return t;
}
function ns(e, n, t) {
  if (e == null || e && typeof e == "object" && typeof e.getType == "function")
    return e;
  if (Array.isArray(e))
    return e.every((r) => r && typeof r == "object" && typeof r.getType == "function") ? e : e.map((r) => ns(r, n));
  if (!e || typeof e != "object" || !e.__entityType && !e.__ref && !e.type)
    return e;
  const a = e.__entityType;
  n?.preventAutoRotation && a && (a === Cn.Rectangle || a === Cn.Placeable || a === Cn.Container || a === Cn.Shape || a === Cn.Group || a === Cn.Offcut || a === Cn.Stock || a === Cn.Segment) && (e.preventAutoRotation = !0), n && (e.__context = n);
  const i = e.__ref || a, s = gr();
  if (i && s.has(i)) {
    const u = s.get(i), { __ref: r, __entityType: d, __context: h, ...m } = e, P = new u(m);
    return P.issues && Array.isArray(P.issues) && (P.issues = P.issues.map((O) => O instanceof Ct ? O : Ct.fromData(O, P))), P.warnings && Array.isArray(P.warnings) && (P.warnings = P.warnings.map((O) => O instanceof Ct ? O : Ct.fromData(O, P))), P;
  }
  return delete e.__context, e;
}
function Bn(e, n) {
  if (n || (n = $l()), Array.isArray(e)) {
    const i = [];
    for (const s of e) {
      const u = Bn(s, n);
      i.push(u), u && typeof u == "object" && (u.autoId || u.id) && Ka(n, [u]);
    }
    return i;
  }
  if (e && typeof e == "object" && typeof e.getType == "function")
    return (e.autoId || e.id) && Ka(n, [e]), e;
  const t = Ui(e, n), a = ns(t, n);
  return a && typeof a == "object" && (a.autoId || a.id) && Ka(n, [a]), a;
}
function Fu(e, n) {
  const t = $l(n), a = e?.saw ? Bn(e.saw, t) : void 0;
  a && Ka(t, [a]);
  const i = e?.stockList ? Bn(e.stockList, t) : [];
  i.length > 0 && (t.stockList = i);
  const s = Array.isArray(e?.shapeList) ? e.shapeList.map((m) => !m || typeof m != "object" ? m : (m.added === !0 || typeof m.x == "number" && typeof m.y == "number") && m.preventAutoRotation !== !0 ? { ...m, preventAutoRotation: !0 } : m) : e?.shapeList, u = s ? Bn(s, t) : [];
  u.length > 0 && (t.shapeList = u);
  const r = e?.cutList ? Bn(e.cutList, t) : [], d = e?.segmentList ? Bn(e.segmentList, t) : [];
  d.length > 0 && (t.segmentList = d);
  const h = e?.offcuts ? Bn(e.offcuts, t) : [];
  return {
    saw: a,
    stockList: i,
    shapeList: u,
    cutList: r,
    segmentList: d,
    offcuts: h,
    context: t
  };
}
function Au(e) {
  const n = {};
  return e.forEach((t) => {
    t.shapeIds.forEach((a) => {
      const i = t.q || 1;
      n[a] ? n[a] += i : n[a] = i;
    });
  }), n;
}
function Tu(e, n, t = !0) {
  const a = Au(e), i = [];
  for (const s in a) {
    const u = a[s], r = n.findIndex((m) => m.autoId === s), d = n[r], h = hr({
      item: null,
      // No specific item context for this validation
      index: r >= 0 ? r : 0,
      shapeId: s,
      requiredQuantity: u,
      availableQuantity: Number(d?.q ?? 0),
      shapeName: d?.name,
      shapeIndex: r >= 0 ? r : void 0
    });
    i.push(...h);
  }
  return t && e.forEach((s) => {
    const u = s.validateWithShapes(n);
    u?.length && i.push(...u);
  }), i;
}
function $g(e = [], n = []) {
  e.length && n.length && e.forEach((t) => {
    t.shapeIds = t.shapeIds.filter((a) => n.find((i) => i.autoId === a));
  });
}
const Ba = [
  "#03171d",
  "#073b4c",
  "#118ab2",
  "#ef476f",
  "#ffd166",
  "#06d6a0"
];
function Nu(e) {
  const n = (Math.trunc(e) % Ba.length + Ba.length) % Ba.length;
  return Ba[n];
}
const ea = $({
  id: c(),
  name: c().max(200).default(""),
  colorIndex: S().int().min(0).default(0),
  grain: yl,
  thicknesses: ne(S().positive()).default([])
}), $u = $({
  id: c(),
  count: S(),
  name: c(),
  l: S(),
  w: S(),
  t: S(),
  material: c()
}), as = $({
  inputStock: ne(Tn),
  inputShapes: ne(Gn),
  inputSaw: Wn,
  inputUserGroups: ne(bl),
  // CLE materials list (project-scoped). Optional for back-compat with projects saved
  // before the materials feature — reverse-engineered from stock/parts on load if absent.
  materials: ne(ea).optional(),
  // Centralized extras options for UI dropdowns
  extrasOptions: $({
    banding: $({
      options: ne(c())
    }).optional(),
    finish: $({
      options: ne(c())
    }).optional(),
    planing: $({
      options: ne(c())
    }).optional()
  }).optional()
}).optional(), Ml = $({
  // Banding metrics
  bandingLengthByType: Ce(c(), S()).default({}),
  // Finish metrics (by face)
  finishAreaByType: Ce(c(), S()).default({}),
  // Planing metrics (by type)
  planingAreaByType: Ce(c(), S()).default({}),
  // Material summary with nested structure
  materialSummary: Ce(
    c(),
    // material name
    Ce(
      c(),
      // thickness
      $({
        used: S(),
        stacks: S(),
        bandingLengthByType: Ce(c(), S())
      })
    )
  ).default({}),
  // Tallies
  usedStockTally: Ce(c(), S()).default({}),
  addedPartTally: Ce(c(), S()).default({}),
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
}), Ca = Ml.extend({
  bandingLengthByType: Ce(c(), S()).default({}),
  unplacedParts: ne($u).default([]),
  // Ecommerce pricing - calculated client-side
  offcutCost: S().optional()
}), Mu = $({
  // Core optimization results
  stockList: ht("Stock"),
  shapeList: ht("Shape"),
  cutList: ht("Cut").optional(),
  segmentList: ht("Segment").optional(),
  offcuts: ht("Offcut").optional(),
  saw: Yi("Saw"),
  unusableShapes: ht("Shape").optional(),
  unavailableStock: ht("Stock").optional(),
  evolutionVisData: ne($({})).optional(),
  performance: c().optional(),
  algoMs: S().optional(),
  /** Deterministic, machine-independent work count (placement-scoring evals) — the
   *  algorithm-lab gates regressions on this instead of wall-clock `algoMs`. */
  algoComplexity: S().optional(),
  // Per-stage timings for benchmark/debugging. Populated by the optimiser pipeline
  // and surfaced in the benchmark report as a stacked bar chart next to layouts.
  phaseTimings: ne($({ phase: c(), ms: S() })).optional(),
  apiVersion: S().optional(),
  // Renamed from 'v'
  metadata: Ca.optional(),
  credits: S().optional(),
  time: S().optional(),
  // billedMs — what the customer is charged for
  // CNC cutting plans per stock (keyed by stock autoId)
  cuttingPlans: Ce(c(), xe()).optional(),
  // Saw-profile constraint violations — populated when the caller passes
  // `sawProfileId` in RuntimeCalculationData. Each entry describes a way
  // the produced layout cannot be faithfully emitted to the declared saw.
  // REPORT-ONLY today; downstream code can choose to refuse emission or
  // fall back to a different saw / format.
  sawViolations: ne($({
    kind: c(),
    stockId: c(),
    message: c(),
    shapeIds: ne(c()).optional()
  })).optional(),
  // Optional input data for debugging/API reporting
  inputs: as
});
$({
  // Job execution metadata
  success: ae(),
  socketId: c().nullable().default(null),
  userId: c(),
  api: ae(),
  app: ae(),
  widget: ae().optional(),
  cached: ae().optional(),
  hash: c().optional(),
  webhook: c().optional(),
  config: xe().optional(),
  error: c().optional(),
  jobId: S().optional(),
  // Job-level label-printer fields (mirrors V3 request top-level `labels`).
  // Persisted so the export step (post-processor emit) can thread values
  // like JOBS.CUSTOMER into the PTX output without re-loading the request.
  labels: $({
    customer: c().max(100).optional()
  }).optional(),
  // Per-type SKU/name maps to resolve operator-meaningful cutlist labels at
  // export (internal-only; see optimiser.zod extrasResolutionSchema).
  extrasResolution: ts.optional(),
  // Input data
  inputs: as,
  // The actual optimization results
  optimisation: Mu
});
$({
  // Database metadata
  jobId: S().optional(),
  // Job execution data
  success: ae(),
  socketId: c().nullable().default(null),
  userId: c(),
  api: ae(),
  app: ae(),
  widget: ae().optional(),
  cached: ae().optional(),
  hash: c().optional(),
  webhook: c().optional(),
  config: xe().optional(),
  error: c().optional(),
  // Job-level label-printer fields (see `jobResultSchema.labels`).
  labels: $({
    customer: c().max(100).optional()
  }).optional(),
  // Extras display-value resolution maps (see `jobResultSchema.extrasResolution`).
  extrasResolution: ts.optional(),
  // Optimization results (flattened from optimization object)
  stockList: ht("Stock"),
  shapeList: ht("Shape"),
  cutList: ht("Cut").optional(),
  segmentList: ht("Segment").optional(),
  offcuts: ht("Offcut").optional(),
  saw: Yi("Saw"),
  unusableShapes: ht("Shape").optional(),
  unavailableStock: ht("Stock").optional(),
  performance: c().optional(),
  algoMs: S().optional(),
  /** Deterministic, machine-independent work count (placement-scoring evals) — the
   *  algorithm-lab gates regressions on this instead of wall-clock `algoMs`. */
  algoComplexity: S().optional(),
  metadata: Ca.optional(),
  apiVersion: S().optional(),
  credits: S().optional(),
  time: S().optional(),
  // billedMs — what the customer is charged for
  // CNC cutting plans per stock (keyed by stock autoId)
  cuttingPlans: Ce(c(), xe()).optional(),
  // Input data
  inputs: as,
  // Computed fields for easier querying/display
  numParts: S().optional(),
  numStock: S().optional(),
  workerName: c().optional(),
  queueName: c().optional()
});
$({
  id: c().optional(),
  name: c().optional(),
  l: S(),
  w: S(),
  t: S().nullable().optional(),
  material: c().optional(),
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
const Du = $({
  issues: ne(c()),
  id: c(),
  duplicate: ae(),
  name: c(),
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
  material: c(),
  banding: xe(),
  // Using any for now, could use bandingPropertiesSchema
  bandingType: xe(),
  // Legacy field
  finish: xe(),
  // Using any for now, could use finishPropertiesSchema
  stock: $({ id: c() }),
  rot: ae(),
  notes: c(),
  customData: Ce(c(), Ze([c(), S(), ae()]))
});
$({
  issues: ne(c()),
  id: c(),
  duplicate: ae().optional(),
  name: c(),
  l: S(),
  w: S(),
  t: S().nullable(),
  material: c(),
  cost: S(),
  used: ae(),
  grain: Ze([
    yt(""),
    yt("l"),
    yt("w"),
    ou()
  ]).nullable(),
  trim: $({
    l1: S(),
    l2: S(),
    w1: S(),
    w2: S()
  }),
  parts: ne(Du),
  efficiency: S(),
  notes: c().optional(),
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
function Mg(e, n, t = "metric") {
  return n / (t === "imperial" ? 12 : 1e3) * e;
}
function Dg(e, n) {
  return n / 1e6 * e;
}
function _u(e, n = []) {
  if (!e?.length) return [];
  const t = e.map((a) => a && typeof a.getType == "function" ? a : ns(a)).filter((a) => a instanceof kl);
  return n.length && Ru(t, n), t;
}
function Ru(e = [], n = []) {
  e.length && n.length && e.forEach((t) => {
    t.shapeIds = t.shapeIds.filter((a) => n.find((i) => i.autoId === a));
  });
}
let Ha = null;
if (ji())
  try {
    Ha = require("~/helpers/applicationSettings").applicationSettings;
  } catch (e) {
    console.error("[useCrossPlatformStorage] Failed to load ApplicationSettings:", e);
  }
function jn(e, n, t = {}) {
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
  if (!ji()) {
    const u = G((() => {
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
          const d = a.write(r);
          localStorage.setItem(e, d);
        }
      } catch (d) {
        console.error("[useCrossPlatformStorage] Failed to save", e, "to localStorage:", d);
      }
    }, { deep: !0 }), u;
  }
  if (ji()) {
    if (!Ha)
      return console.error("[useCrossPlatformStorage] ApplicationSettings not available! Using in-memory fallback."), G(n);
    const u = G((() => {
      try {
        const r = Ha.getString(e);
        if (r)
          return a.read(r);
      } catch (r) {
        console.error("[useCrossPlatformStorage] Failed to load", e, "from ApplicationSettings:", r);
      }
      return n;
    })());
    return Qe(u, (r) => {
      try {
        const d = a.write(r);
        Ha.setString(e, d);
      } catch (d) {
        console.error("[useCrossPlatformStorage] Failed to save", e, "to ApplicationSettings:", d);
      }
    }, { deep: !0 }), u;
  }
  return console.warn("[useCrossPlatformStorage] No storage available for key", e, "- using in-memory fallback"), G(n);
}
function Ti(e) {
  if (typeof e != "string" || !e || !(e.startsWith("errors.") || e.startsWith("fields.") || e.startsWith("extras.") || e.startsWith("woodwork.") || e.startsWith("validation."))) return e;
  const t = Ll(e);
  return t && t !== e ? t : e;
}
function Vu() {
  const e = Date.now(), n = Math.random().toString(36).substring(2, 15), t = Math.random().toString(36).substring(2, 15);
  return `${e.toString(36)}-${n}-${t}`;
}
const On = G([]), qu = 6;
function is() {
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
      id: Vu(),
      message: Oi(Ti(t)),
      additional: i.length > 5 ? i.slice(0, 5).map((h) => Oi(Ti(h))).join("<br>") + "<br>..." : i.slice(0, 5).map((h) => Oi(Ti(h))).join("<br>"),
      type: a,
      persistent: s.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: u
    }, d = s.maxNotices ?? qu;
    if (On.value.length >= d) {
      const h = On.value.findIndex((m) => !m.persistent);
      if (h !== -1)
        On.value.splice(h, 1);
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
const ss = jn("cle-extras-config", {}), Gi = (e, n) => {
  ss.value[e] = n;
}, dn = (e) => ss.value[e] || null, Bu = () => ss.value;
let Xs = !1;
const ju = () => {
  Xs || (vr({
    getExtrasConfig: dn,
    getAllExtrasConfigs: Bu,
    setExtrasConfig: Gi
  }), Xs = !0);
}, Uu = (e, n) => {
  const t = dn(e);
  if (!t || !t.options || t.options.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const a = t.options[0], i = Array.isArray(a) && typeof a[0] == "string" ? a : [];
  if (i.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const s = (d) => t.options.length > 1 ? d.includes("|") ? t.pricing && Object.keys(t.pricing).length > 0 ? Object.prototype.hasOwnProperty.call(t.pricing, d) ? !0 : Object.keys(t.pricing).some((P) => P.startsWith(d + "|") || P === d) : d.split("|").every((m, P) => {
    if (P >= t.options.length) return !1;
    const O = t.options[P];
    return Array.isArray(O) && typeof O[0] == "string" && O.includes(m);
  }) : t.options.some((h) => Array.isArray(h) && typeof h[0] == "string" && h.includes(d)) : i.includes(d), u = /* @__PURE__ */ new Set();
  let r = 0;
  return n.forEach((d) => {
    if (!d.extras?.[e]) return;
    const h = d.extras[e].sides || {};
    Object.entries(h).forEach(([P, O]) => {
      typeof O == "string" && O && !s(O) && (u.add(O), h[P] = "", r++);
    });
    const m = d.extras[e].faces || {};
    Object.entries(m).forEach(([P, O]) => {
      typeof O == "string" && O && !s(O) && (u.add(O), m[P] = "", r++);
    });
  }), {
    cleanedCount: r,
    invalidOptions: Array.from(u)
  };
}, Gu = (e) => {
  const {
    customNames: n,
    usedNames: t,
    allowCustomNames: a,
    getSelectOptions: i,
    onCustomNameAdded: s,
    onCustomNameDeleted: u
  } = e, r = G(""), d = F(() => a && r.value?.trim()), h = F(() => !a || !n.value || n.value.length === 0 || n.value.length === 1 && n.value[0] === !0 ? !0 : n.value.filter((_) => typeof _ == "string").every((_) => t.value.includes(_))), m = F(() => {
    const b = [];
    if (a && n.value && n.value.length > 0) {
      if (n.value.length === 1 && n.value[0] === !0)
        return b;
      const U = [...n.value.filter((V) => typeof V == "string")].sort(), de = new Set(t.value ?? []), q = U.filter((V) => !de.has(V));
      b.push({
        id: "delete-header",
        type: "group",
        label: "Delete Type"
      }), q.length > 1 && b.push({
        id: "delete-all-custom-names",
        label: "Delete all",
        icon: ["fass", "trash"],
        class: "del"
      }), U.forEach((V) => {
        const fe = de.has(V);
        b.push({
          id: `delete-${V}`,
          label: fe ? `"${V}" (in use)` : `Delete "${V}"`,
          icon: ["fass", "trash"],
          class: "del",
          disabled: fe
        });
      });
    }
    return b;
  }), P = () => {
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
    canAddCustomName: zt(d),
    isActionMenuDisabled: zt(h),
    customNameActions: m,
    handleAddCustomName: P,
    handleCustomNameAction: O
  };
}, Wu = (e) => {
  const {
    extraType: n,
    labels: t,
    shapeIndex: a,
    enablePricing: i,
    shouldShowAll: s,
    locations: u,
    locationGroups: r = G([]),
    shape: d = G(null),
    orientationModel: h = 0,
    getInputType: m,
    getInputConfig: P,
    getAllInputConfig: O,
    getInputConfigForLocation: b,
    canDelete: _,
    getLocationLabel: U,
    shouldShowDeleteButton: de
  } = e, q = F(() => {
    const le = [], ge = r.value && r.value.length > 0, W = /* @__PURE__ */ new Set();
    if (ge && r.value.forEach((D) => {
      D.hideIndividualLocations && D.locations.forEach((oe) => W.add(oe));
    }), ge && r.value.forEach((D) => le.push(D.id)), !ge && s.value && le.push("all"), u.value && u.value.length > 0)
      le.push(...u.value.filter((D) => D !== "all" && !W.has(D)));
    else {
      const D = aa(n), oe = wl(n), ie = Sl(n), se = xl(n);
      !ge && (oe && ie && se) && (br(n).length > 0 && le.push("faces"), yr(n).length > 0 && le.push("sides")), le.push(...D.filter((Xe) => !W.has(Xe)));
    }
    let x = Array.from(new Set(le));
    if ((h === 1 || h === 2) && d.value && d.value.w > d.value.l) {
      const D = ["side.l1", "side.l2", "side.w1", "side.w2"], oe = x.map((ie, se) => ({ loc: ie, i: se })).filter((ie) => D.includes(ie.loc));
      if (oe.length > 0) {
        const ie = oe[0].i, se = oe.filter((Pe) => Pe.loc.includes(".w")).sort((Pe, Te) => Pe.loc.localeCompare(Te.loc)), We = oe.filter((Pe) => Pe.loc.includes(".l")).sort((Pe, Te) => Pe.loc.localeCompare(Te.loc)), Xe = [...se.map((Pe) => Pe.loc), ...We.map((Pe) => Pe.loc)];
        x = x.filter((Pe) => !D.includes(Pe)), x.splice(ie, 0, ...Xe);
      }
    }
    return x;
  }), V = F(() => `1fr${i ? " max-content" : ""}`), fe = (le, ge) => `${n}-${le}-${t[ge]}-${ge}-${a}`, Y = (le) => {
    const ge = U(le);
    return `Delete ${n} for ${ge}`;
  }, k = (le) => ({
    show: de(le),
    enabled: _(le),
    ariaLabel: Y(le)
  }), M = (le, ge) => m(le, ge);
  return {
    renderLocations: zt(q),
    gridStyle: zt(V),
    getInputId: fe,
    getDeleteAriaLabel: Y,
    getInputConfigForLocation: b,
    getDeleteConfig: k,
    getInputTypeForLocation: M,
    // Re-export the passed functions for consistency
    getInputType: m,
    getInputConfig: P,
    getAllInputConfig: O,
    canDelete: _,
    shouldShowDeleteButton: de,
    getLocationLabel: U
  };
}, el = /* @__PURE__ */ new Set(), zu = (e) => {
  ju();
  const {
    shape: n,
    extraType: t,
    allOptions: a,
    labels: i,
    userFriendlyFieldMap: s,
    allowCustomNames: u,
    customNames: r = G([]),
    enablePricing: d = !1,
    pricing: h,
    displayNames: m,
    locations: P = G([]),
    locationGroups: O = G([]),
    orientationModel: b = 0,
    getAvailablePricingOptions: _,
    getPrice: U,
    findExtrasPrice: de,
    formatPrice: q
  } = e, V = F(() => Ms(a) ? a.value : a), fe = F(() => Ms(m) ? m.value : m), Y = () => {
    const p = dn(t), I = V.value?.length ? V.value : p?.options || [], z = p?.labels || i;
    Fn(n.value, t, I, z, r.value);
  };
  Y(), Qe(
    () => n.value?.extras?.[t],
    (p) => {
      if (p) {
        const I = p?.sides || {}, z = p?.options?.sides || {};
        let Q = !1;
        for (const [R, ee] of Object.entries(I))
          if (typeof ee == "string" && ee !== "" && !z[R]) {
            Q = !0;
            break;
          }
        Q && Y();
      }
    },
    { immediate: !1 }
  );
  const k = F(() => dn(t)), M = F(() => {
    const p = V.value?.length ? V.value : k.value?.options || [];
    if (p.length > 1)
      return "multiple";
    const z = (p[0] || []).filter((he) => typeof he == "string"), Q = (r.value || []).filter((he) => typeof he == "string"), ee = Array.from(/* @__PURE__ */ new Set([...z, ...Q])).length;
    return ee === 0 ? "boolean" : ee === 1 ? "single" : "multiple";
  }), le = F(() => aa(t)), ge = F(() => P.value && P.value.length > 0 ? P.value.filter((p) => p !== "all" && p !== "faces" && p !== "sides") : le.value), W = F(() => ge.value.filter((p) => Pa(p) === "face")), x = F(() => ge.value.filter((p) => Pa(p) === "side")), D = F(() => Sl(t)), oe = F(() => xl(t)), ie = F(() => wl(t)), se = () => {
    const p = V.value?.length ? V.value : k.value?.options;
    return !!p && p.length > 1;
  }, We = (p, I, z) => {
    const { singleOption: Q = ve(), operation: R } = z;
    switch (I) {
      case "boolean":
        return !!p;
      case "single":
        return Q ? R === "process" || R === "set" ? p && Q ? Q : "" : p === Q ? Q : "" : !!p;
      case "multiple":
        return p || "";
      default:
        return p;
    }
  }, Xe = (p, I, z) => We(I, z, { operation: "process" }), Pe = (p, I, z, Q, R, ee) => {
    switch (ee) {
      case "boolean":
        _a(p, I, z, Q, !!R);
        break;
      case "single": {
        const he = ve();
        _a(p, I, z, Q, R ? he : "");
        break;
      }
      case "multiple":
        _a(p, I, z, Q, R || "");
        break;
    }
  }, Te = (p, I, z = {}) => {
    const Q = z.singleOption || ve();
    return z.allowCustomNames, We(p, I, {
      operation: "get",
      singleOption: Q
    });
  }, De = (p, I, z, Q) => {
    switch (Q) {
      case "boolean":
        return !!p;
      case "single": {
        const R = ve();
        if (R) {
          const ee = I.map((qe) => Ln(n.value, t, qe, z)), he = ee.every((qe) => qe === R || qe === !0), Oe = ee.every((qe) => !qe || qe === "");
          return he ? R : Oe ? "" : null;
        }
        return !!p;
      }
      case "multiple":
        return typeof p == "string" ? p : p || "";
      default:
        return p;
    }
  }, B = (p, I, z, Q = !1) => {
    if (Q)
      p.forEach((R) => te(R, I, z));
    else {
      const R = i[I] || "", ee = Xe(R, z, M.value);
      p.forEach((he) => {
        Pe(n.value, t, he, R, ee, M.value);
      });
    }
  }, J = (p, I) => {
    if (se()) {
      const z = i[I] || "", Q = p.map((Oe) => {
        const qe = Ln(n.value, t, Oe, z);
        return qe === !0 ? w(I)[0] || "" : String(qe || "");
      }), R = Q[0] || "";
      return Q.every((Oe) => Oe === R) ? R : null;
    } else {
      const z = i[I] || "";
      if (M.value === "single") {
        const R = ve();
        if (R) {
          const ee = p.map((qe) => Ln(n.value, t, qe, z)), he = ee.every((qe) => qe === R || qe === !0), Oe = ee.every((qe) => !qe || qe === "");
          return he ? R : Oe ? "" : null;
        }
      }
      const Q = Ds(n.value, t, p, z, M.value);
      return M.value === "multiple" && Q === !1 && p.every((ee) => {
        const he = Ln(n.value, t, ee, z, M.value);
        return he === "" || he === !1 || he === null || he === void 0;
      }) ? "" : Q;
    }
  }, ke = (p) => {
    const { location: I, locationType: z = "single", optionIndex: Q, stateValue: R, isAggregate: ee = !1 } = p, he = w(Q), Oe = ee && I !== void 0 && $t(I), qe = Oe && he.some((Ge) => typeof Ge == "string" && Ge.endsWith(`|${I}`)), gt = Oe && (he.length <= 1 || qe), Ie = ee ? Lt(Q, I && $t(I) ? I : z) : Lt(Q, I), Be = d && he.length > 1 && Ie.length === 0, je = (() => {
      if (!Be || Q === 0 || !I) return !1;
      for (let Ge = 0; Ge < Q; Ge++) {
        let Tt = null;
        if (Oe && typeof I == "string" ? Tt = pt(I, Ge) : ee ? I === "all" ? Tt = kt(Ge) : I === "faces" ? Tt = Le(Ge) : I === "sides" && (Tt = ze(Ge)) : Tt = we(I, Ge), !Tt) return !0;
      }
      return !1;
    })(), Ft = !gt && he.length > 1 ? "select" : "checkbox";
    if (Be && I && !je) {
      const Ge = `${t}:${I}:${Q}`;
      el.has(Ge) || (el.add(Ge), is().addNotice({
        type: "warning",
        message: `No price set for ${t} at ${I}. This option is not currently available.`
      }));
    }
    const Ke = M.value === "multiple" && Ie.length === 1 && d && Q > 0;
    if (Ke && Ie[0]) {
      if (ee) {
        let Ge = [];
        z === "all" ? Ge = ge.value : z === "faces" ? Ge = W.value : z === "sides" ? Ge = x.value : I && $t(I) && (Ge = dt(I)), Ge.forEach((Tt) => {
          const fa = we(Tt, Q);
          (!fa || fa !== Ie[0]) && te(Tt, Q, Ie[0]);
        });
      } else if (I) {
        const Ge = we(I, Q);
        (!Ge || Ge !== Ie[0]) && te(I, Q, Ie[0]);
      }
    }
    let At = !1;
    const Xt = dn(t);
    if (Xt?.optionLocations && I && I !== "all" && Ft === "checkbox" && he.length === 1) {
      const Ge = Xt.optionLocations[he[0]];
      Ge && !Ge.includes(I) && (At = !0);
    }
    const Kn = Be || M.value === "multiple" && (Ie.length === 0 || Ke), Mn = R !== void 0 ? R : I ? we(I, Q) : null, oi = Ft === "select" ? hn(I || z, Q) : void 0, La = (Ge) => (fe.value ?? k.value?.displayNames)?.[Ge] || Ge, da = Ft === "checkbox" ? gt ? p.customLabel : he.length === 1 ? La(he[0]) : void 0 : void 0;
    let Dn, Pn;
    if (Ft === "checkbox")
      if (gt && he.length > 1) {
        const Ge = he.find((Tt) => Tt.endsWith(`|${I}`));
        Ge && (Dn = Ge, Pn = "");
      } else he.length === 1 && (Dn = he[0], Pn = "");
    return {
      inputType: Ft,
      // Alias for backward compatibility
      type: Ft,
      value: Mn,
      options: oi,
      disabled: Kn,
      hidden: At,
      label: da,
      indeterminate: Mn === null && Ft === "checkbox",
      trueValue: Dn,
      falseValue: Pn
    };
  }, Ve = (p, I, z) => ke({
    locationType: p,
    optionIndex: I,
    stateValue: z,
    isAggregate: !0
  }), te = (p, I, z) => {
    const Q = i[I] || "";
    if (se()) {
      const R = gn(p, I);
      let ee;
      if (R === "checkbox") {
        const Oe = w(I)[0];
        ee = z ? Oe : "";
      } else
        ee = z || "";
      _a(n.value, t, p, Q, ee);
    } else
      Pe(n.value, t, p, Q, z, M.value);
  }, we = (p, I) => {
    const z = i[I] || "";
    if (se()) {
      const Q = Ln(n.value, t, p, z);
      if (gn(p, I) === "checkbox") {
        const he = w(I)[0];
        return Q === !0 || Q === he ? he : "";
      } else
        return Q || "";
    } else {
      const Q = Ln(n.value, t, p, z, M.value);
      return Te(Q, M.value);
    }
  }, _e = (p, I) => {
    B(ge.value, p, I, se());
  }, kt = (p) => {
    if (se()) {
      const I = i[p] || "", z = ge.value.map((ee) => {
        const he = Ln(n.value, t, ee, I);
        return he === !0 ? w(p)[0] || "" : String(he || "");
      }), Q = z[0] || "";
      return z.every((ee) => ee === Q) ? Q : null;
    } else {
      const I = i[p] || "", z = Ds(n.value, t, ge.value, I, M.value);
      return De(z, ge.value, I, M.value);
    }
  }, rt = () => {
    ki(n.value, t, ge.value, M.value), tt(n);
  }, Qt = (p) => p === "faces" ? {
    locations: W.value,
    isSupported: D.value
  } : {
    locations: x.value,
    isSupported: oe.value
  }, ut = (p, I, z) => {
    const { locations: Q, isSupported: R } = Qt(p);
    R && B(Q, I, z, se());
  }, ln = (p, I) => {
    const { locations: z, isSupported: Q } = Qt(p);
    return Q ? J(z, I) : null;
  }, Yt = (p) => {
    const { locations: I, isSupported: z } = Qt(p);
    z && (ki(n.value, t, I, M.value), tt(n));
  }, wn = (p, I) => {
    const { isSupported: z } = Qt(p);
    if (!z) return { type: "checkbox", value: !1 };
    const Q = ln(p, I);
    return Ve(p, I, Q);
  }, ct = (p, I) => {
    ut("faces", p, I);
  }, X = (p, I) => {
    ut("sides", p, I);
  }, Le = (p) => ln("faces", p), ze = (p) => ln("sides", p), Fe = () => {
    Yt("faces");
  }, at = () => {
    Yt("sides");
  }, et = (p) => O.value.find((I) => I.id === p), dt = (p) => {
    const I = et(p);
    return I ? I.locations.filter((z) => ge.value.includes(z)) : [];
  }, ft = (p, I, z) => {
    const Q = dt(p);
    Q.length !== 0 && (Q.forEach((R) => te(R, I, z)), tt(n));
  }, pt = (p, I) => {
    const z = dt(p);
    if (z.length === 0) return null;
    if (!se()) {
      const ee = w(I).find((he) => he.endsWith(`|${p}`));
      if (ee) {
        const he = i[I] || "", Oe = z.map((Ie) => Ln(n.value, t, Ie, he)), qe = Oe.every((Ie) => Ie === ee), gt = Oe.some((Ie) => Ie === ee);
        return qe ? ee : gt ? null : "";
      }
    }
    const Q = J(z, I);
    return !se() && (Q === null || Q === !1 || Q === "") ? "" : Q;
  }, pn = (p) => {
    const I = dt(p);
    I.length !== 0 && (ki(n.value, t, I, M.value), tt(n));
  }, it = (p, I) => {
    const z = pt(p, I), Q = et(p);
    return ke({
      location: p,
      optionIndex: I,
      stateValue: z,
      isAggregate: !0,
      customLabel: Q?.label
    });
  }, on = (p) => {
    Pr(n.value, t, p, M.value), tt(n);
  }, mn = (p) => p === "all" ? ge.value.some((I) => !!we(I, 0)) : p === "faces" && D.value ? W.value.some((I) => !!we(I, 0)) : p === "sides" && oe.value ? x.value.some((I) => !!we(I, 0)) : $t(p) ? dt(p).some((z) => !!we(z, 0)) : ge.value.includes(p) ? !!we(p, 0) : !1, St = (p) => {
    if (p === "all") return Ae("general.all");
    if (p === "faces") return `${Ae("general.all")} ${Ae("machining.face_other")}`;
    if (p === "sides") return `${Ae("general.all")} ${Ae("woodwork.edge_other")}`;
    if ($t(p)) {
      const Q = et(p);
      if (Q) return Q.label;
    }
    if (p.startsWith("face.")) {
      const R = `faces.${p.replace("face.", "")}`;
      return Ae(R);
    }
    if (p.startsWith("side.")) {
      const Q = !!(n.value && n.value.w > n.value.l);
      return Ae(xr(p, b, Q));
    }
    const I = `fields.${p}`, z = Ae(I);
    return z !== I ? z : s?.[p] ? s[p] : p;
  }, gn = (p, I) => M.value === "boolean" ? "checkbox" : w(I).length > 1 ? "select" : "checkbox", Sn = (p, I) => ke({
    location: p,
    optionIndex: I,
    isAggregate: !1
  }), zn = (p) => {
    const I = kt(p);
    return Ve("all", p, I);
  }, rn = (p) => wn("faces", p), mt = (p) => wn("sides", p), Dt = (p, I) => p === "all" ? zn(I) : p === "faces" ? rn(I) : p === "sides" ? mt(I) : $t(p) ? it(p, I) : Sn(p, I), Lt = (p, I) => {
    const z = dn(t), R = (V.value?.length ? V.value : z?.options || [])[p];
    if (!R || R[0] === !0)
      return [];
    const ee = I && typeof I == "string" && (I.startsWith("face.") || I.startsWith("side.")), he = I && typeof I == "string" && $t(I), Oe = !ee && (I === "all" || I === "faces" || I === "sides" || he);
    if (Array.isArray(R) && R.length === 1 && typeof R[0] == "string" && !(d && _ && (ee || Oe) && p > 0))
      return R;
    if (d && _ && ee) {
      const Ie = [];
      if (p > 0)
        for (let Be = 0; Be < p; Be++) {
          const je = we(I, Be);
          if (typeof je == "string" && je)
            Ie.push(je);
          else if (typeof je == "boolean")
            Ie.push(je);
          else {
            const Ft = dn(t), Ke = Ri(n.value, t, I);
            return Ke && typeof Ke == "object" && !Array.isArray(Ke) && Object.keys(Ke).length > 1 && Ft?.options[p] ? Ft.options[p] : [];
          }
        }
      return _(h, Ie, p);
    }
    if (d && _ && Oe) {
      const Ie = [];
      if (p > 0)
        for (let Be = 0; Be < p; Be++) {
          let je;
          if (I === "all" ? je = kt(Be) : I === "faces" ? je = Le(Be) : I === "sides" ? je = ze(Be) : he && typeof I == "string" && (je = pt(I, Be)), typeof je == "string" && je)
            Ie.push(je);
          else if (typeof je == "boolean")
            Ie.push(je);
          else
            return [];
        }
      return _(h, Ie, p);
    }
    const qe = R, gt = u ? (r.value || []).filter((Ie) => typeof Ie == "string") : [];
    return [.../* @__PURE__ */ new Set([...qe, ...gt])];
  }, hn = (p, I) => {
    const z = dn(t), R = (V.value?.length ? V.value : z?.options)?.[I] || [], ee = u && r.value ? r.value.filter((Ke) => typeof Ke == "string") : [];
    let he = [.../* @__PURE__ */ new Set([...R, ...ee])];
    z?.optionLocations && p && p !== "all" && (he = he.filter((Ke) => {
      const At = z.optionLocations[Ke];
      return At ? At.includes(p) : !0;
    }));
    const Oe = Lt(I, p), qe = new Set(Oe), gt = fe.value ?? z?.displayNames, Be = typeof p == "string" && (p.startsWith("face.") || p.startsWith("side.")) ? we(p, I) : null, je = typeof Be == "string" ? Be : null;
    return he.filter((Ke) => qe.has(Ke) || Ke === je).map((Ke) => ({
      value: Ke,
      label: gt?.[Ke] || Ke,
      disabled: !qe.has(Ke)
    }));
  }, ve = () => {
    const p = Lt(0);
    return p.length === 1 ? p[0] : void 0;
  }, v = (p) => {
    const I = Lt(p);
    return I.length === 1 ? I[0] : void 0;
  }, w = (p) => {
    const I = dn(t), z = V.value?.length ? V.value : I?.options;
    let Q = [];
    if (z && z[p] && Array.isArray(z[p])) {
      const ee = z[p];
      Array.isArray(ee) && ee.every((he) => typeof he == "string") && (Q = ee);
    }
    const R = u && r.value ? r.value.filter((ee) => typeof ee == "string") : [];
    return [.../* @__PURE__ */ new Set([...Q, ...R])];
  }, y = (p, I = 0) => {
    if (p === "all" || p === "faces" || p === "sides")
      return "";
    if ($t(p)) {
      const Q = et(p);
      return Q?.price !== void 0 && pt(p, I) ? q ? q(Q.price) : Q.price.toString() : "";
    }
    if (!d || !U)
      return "";
    if (!ge.value.includes(p))
      return "N/A";
    const z = U(n.value, t, p, de);
    return z ? q ? q(z) : z.toString() : "N/A";
  }, T = (p) => {
    if (!d || !U) return !1;
    if (typeof p == "string" && $t(p)) {
      const I = et(p);
      return typeof I?.price == "number" ? I.price : !1;
    }
    return U(n.value, t, p, de);
  }, j = F(() => ge.value.length > 1), ce = F(() => le.value.length > 1), ye = () => M.value === "multiple", Re = () => {
    const p = 1 + V.value.length, I = M.value === "multiple", z = d, Q = p + (I ? 1 : 0) + (z ? 1 : 0);
    return {
      columns: Q,
      style: `repeat(${Q}, max-content)`
    };
  }, Ee = (p) => p === "all" ? "all" : p === "faces" ? "faces" : p === "sides" ? "sides" : "individual", Ue = (p) => Pa(p), Et = (p) => {
    if (p === "all")
      return j.value;
    if ($t(p))
      return et(p) ? dt(p).length > 0 : !1;
    if (P.value && P.value.length > 0)
      return P.value.includes(p);
    const I = Ee(p);
    return I === "all" ? j.value : I === "faces" || I === "sides" ? I === "faces" && D.value && W.value.length > 0 || I === "sides" && oe.value && x.value.length > 0 ? ce.value : !1 : le.value.includes(p);
  }, xn = (p) => {
    Sr(p, t, r);
  }, ra = (p) => {
    wr([n.value], t, p, i);
  }, li = (p) => {
    kr([n.value], t, p);
  }, ua = (p, I, z) => {
    if (p === "all")
      _e(I, z);
    else if (p === "faces")
      ct(I, z);
    else if (p === "sides")
      X(I, z);
    else if ($t(p)) {
      let R = z;
      if (!se() && typeof z == "boolean") {
        const ee = w(I), he = ee.find((Oe) => Oe.endsWith(`|${p}`));
        he ? R = z ? he : "" : ee.length === 1 && (R = z ? ee[0] : "");
      }
      if (!se() && R) {
        const ee = dt(p), he = new Set(ee);
        O.value && (O.value.forEach((Oe) => {
          Oe.id !== p && dt(Oe.id).filter((Ie) => !he.has(Ie)).forEach((Ie) => {
            te(Ie, I, "");
          });
        }), tt(n));
      }
      ft(p, I, R);
    } else
      te(p, I, z), se() || tt(n);
    const Q = i.length;
    for (let R = I + 1; R < Q; R++) {
      let ee;
      if (p === "all" ? ee = kt(R) : p === "faces" ? ee = Le(R) : p === "sides" ? ee = ze(R) : $t(p) ? ee = pt(p, R) : ee = we(p, R), !ee)
        continue;
      const he = Lt(R, p);
      let Oe = !1;
      if (typeof ee == "string" ? Oe = he.includes(ee) : typeof ee == "boolean" && ee === !0 && (Oe = he.length > 0), !Oe) {
        const qe = gn(p, R) === "checkbox" ? !1 : "";
        p === "all" ? _e(R, qe) : p === "faces" ? ct(R, qe) : p === "sides" ? X(R, qe) : $t(p) ? ft(p, R, qe) : te(p, R, qe);
      }
    }
  }, Nn = (p, I = !0) => I && !confirm(`Delete ${t} for ${St(p)}?`) ? !1 : (p === "all" ? rt() : p === "faces" ? Fe() : p === "sides" ? at() : $t(p) ? pn(p) : on(p), !0), ca = () => {
    const p = n.value[t], I = n.value[`${t}Options`];
    return !(!p || typeof p != "object" || !I || typeof I != "object" || D.value && (!("faces" in p) || !("faces" in I)) || oe.value && (!("sides" in p) || !("sides" in I)));
  }, $n = () => {
    const p = [], I = n.value[t], z = n.value[`${t}Options`];
    return !I || typeof I != "object" ? p.push(`Missing or invalid ${t} property in shape`) : (D.value && !("faces" in I) && p.push(`Missing faces property in ${t}`), oe.value && !("sides" in I) && p.push(`Missing sides property in ${t}`)), !z || typeof z != "object" ? p.push(`Missing or invalid ${t}Options property in shape`) : (D.value && !("faces" in z) && p.push(`Missing faces property in ${t}Options`), oe.value && !("sides" in z) && p.push(`Missing sides property in ${t}Options`)), p;
  };
  return {
    // State - provide raw computed refs for other composables
    mode: M,
    // Raw computed ref (not readonly wrapped)
    allLocations: zt(ge),
    faceLocations: zt(W),
    sideLocations: zt(x),
    shouldShowAll: j,
    // Raw computed ref (not readonly wrapped)
    shouldShowGroupControls: zt(ce),
    // Support flags
    supportsFaces: zt(D),
    supportsSides: zt(oe),
    supportsBoth: zt(ie),
    // Core operations
    setValue: te,
    getValue: we,
    setAll: _e,
    getAll: kt,
    getAllState: kt,
    // Alias for backward compatibility
    deleteSingle: on,
    deleteAll: rt,
    canDelete: mn,
    // Group-specific operations
    setAllFaces: ct,
    setAllSides: X,
    getAllFaces: Le,
    getAllSides: ze,
    deleteAllFaces: Fe,
    deleteAllSides: at,
    // UI helpers
    getLocationLabel: St,
    getInputType: gn,
    getInputConfig: Sn,
    getAllInputConfig: zn,
    getAllFacesInputConfig: rn,
    getAllSidesInputConfig: mt,
    getInputConfigForLocation: Dt,
    getSelectOptions: hn,
    getSingleOptionLabel: v,
    // Pricing
    getPriceDisplay: y,
    getCalculatedPrice: T,
    // Layout & rendering
    shouldShowDeleteButton: ye,
    getGridConfig: Re,
    getLocationGroup: Ee,
    getLocationScope: Ue,
    isLocationVisible: Et,
    // Options management
    getAvailableOptions: Lt,
    getSingleAvailableOption: ve,
    // Initialization & migration
    initialize: Y,
    initializeExtra: Y,
    // Alias for backward compatibility
    initializeCustomNames: xn,
    migrateToSingle: ra,
    migrateToBoolean: li,
    // Event handlers
    handleInputChange: ua,
    handleDelete: Nn,
    // Validation
    validateShape: ca,
    getValidationErrors: $n,
    // Debug helpers (development only)
    getDebugInfo: (p, I) => ({
      mode: M.value,
      location: p,
      optionIndex: I,
      value: ge.value.includes(p) ? we(p, I) : "N/A",
      inputType: gn(p, I),
      canDelete: mn(p),
      allState: kt(I),
      availableOptions: Lt(I),
      locationGroup: Ee(p),
      config: k.value,
      supportsFaces: D.value,
      supportsSides: oe.value,
      supportsBoth: ie.value,
      ...D.value && {
        allFacesState: Le(I)
      },
      ...oe.value && {
        allSidesState: ze(I)
      },
      ...ge.value.includes(p) && {
        locationScope: Ue(p)
      }
    })
  };
};
function Wi(e) {
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
function tl(e) {
  return e.map((n) => {
    const t = n.path.length > 0 ? n.path.join(".") : "root", a = Wi(n), i = Wa(n.message, a);
    return `[${t}] ${i}`;
  });
}
function ka(e, n) {
  const t = e.safeParse(n);
  return {
    success: t.success,
    data: t.success ? t.data : void 0,
    errors: t.success ? void 0 : t.error.issues
  };
}
function Ku(e = {}) {
  try {
    let n = function(v) {
      if (!v || typeof v != "object") return v;
      const w = { ...v };
      if (delete w.issues, delete w.warnings, w.trim && typeof w.trim == "object") {
        const y = w.trim;
        ("x1" in y || "x2" in y || "y1" in y || "y2" in y) && (w.trim = {
          l1: y.y1 ?? y.l1 ?? 0,
          l2: y.y2 ?? y.l2 ?? 0,
          w1: y.x1 ?? y.w1 ?? 0,
          w2: y.x2 ?? y.w2 ?? 0
        });
      }
      if (w.extras?.banding?.sides && typeof w.extras.banding.sides == "object") {
        const y = w.extras.banding.sides;
        ("x1" in y || "x2" in y || "y1" in y || "y2" in y) && (w.extras.banding.sides = {
          l1: y.y1 ?? y.l1,
          l2: y.y2 ?? y.l2,
          w1: y.x1 ?? y.w1,
          w2: y.x2 ?? y.w2
        });
      }
      if (w.extras?.finish?.sides && typeof w.extras.finish.sides == "object") {
        const y = w.extras.finish.sides;
        ("x1" in y || "x2" in y || "y1" in y || "y2" in y) && (w.extras.finish.sides = {
          l1: y.y1 ?? y.l1,
          l2: y.y2 ?? y.l2,
          w1: y.x1 ?? y.w1,
          w2: y.x2 ?? y.w2
        });
      }
      if (w.extras?.planing?.sides && typeof w.extras.planing.sides == "object") {
        const y = w.extras.planing.sides;
        ("x1" in y || "x2" in y || "y1" in y || "y2" in y) && (w.extras.planing.sides = {
          l1: y.y1 ?? y.l1,
          l2: y.y2 ?? y.l2,
          w1: y.x1 ?? y.w1,
          w2: y.x2 ?? y.w2
        });
      }
      if (w.efficiencyOptions?.primaryCompression) {
        const y = w.efficiencyOptions.primaryCompression;
        y === "x" ? w.efficiencyOptions = {
          ...w.efficiencyOptions,
          primaryCompression: "l"
        } : y === "y" && (w.efficiencyOptions = {
          ...w.efficiencyOptions,
          primaryCompression: "w"
        });
      }
      for (const y in w)
        w[y] === null && delete w[y];
      return w;
    }, t = function(v, w) {
      if (!Array.isArray(v))
        return [];
      const y = [];
      for (let T = 0; T < v.length; T++) {
        const j = v[T], ce = n(j);
        try {
          const ye = {
            ...ce,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored shapes as new to avoid showing validation errors immediately
          };
          j.autoId && (ye.autoId = j.autoId), delete ye.issues, delete ye.warnings;
          const Re = new Zn(ye, w);
          y.push(Re);
        } catch (ye) {
          console.error(`Failed to create InputShape at index ${T}:`, ye);
        }
      }
      return y;
    }, a = function(v, w) {
      if (!Array.isArray(v)) return [];
      const y = [];
      for (let T = 0; T < v.length; T++) {
        const j = v[T], ce = n(j);
        try {
          const ye = {
            ...ce,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored stock as new to avoid showing validation errors immediately
          };
          j.autoId && (ye.autoId = j.autoId);
          const Re = new ga(ye, w);
          y.push(Re);
        } catch (ye) {
          console.error(`Failed to create InputStock at index ${T}:`, ye);
        }
      }
      return y;
    }, i = function(v) {
      const w = n(v), y = ka(Wn, w);
      if (y.success && y.data) {
        const T = {
          ...y.data,
          issues: [],
          warnings: []
        };
        return v?.autoId && (T.autoId = v.autoId), new bn(T);
      } else
        return console.error("Failed to parse input saw:", y.errors), new bn({});
    }, s = function(v, w) {
      return Array.isArray(v) ? w && w.length ? _u(v, w) : v.map((y) => new kl(y)).filter(Boolean) : [];
    }, u = function(v = {}) {
      try {
        const T = { ...Ia(
          (ce) => {
            if (typeof ce != "object" || ce === null) return ce;
            const ye = { ...ce };
            for (const Re in ye)
              ye[Re] === null && delete ye[Re];
            return ye;
          },
          Gn
        ).parse(v), isNew: !0 }, j = new Zn(T, oe);
        return j.createId(ie.value.length), ie.value.push(j), j;
      } catch (w) {
        return w instanceof Va && (console.error("Shape validation failed:", w.issues), V("part", "Invalid shape data", w.issues)), null;
      }
    }, r = function(v = {}) {
      try {
        const y = { ...Tn.parse(v), isNew: !0 }, T = new ga(y, oe);
        return T.createId(se.value.length), se.value.push(T), T;
      } catch (w) {
        return w instanceof Va && (console.error("Stock validation failed:", w.issues), V("stock", "Invalid stock data", w.issues)), null;
      }
    }, d = function(v) {
      try {
        const w = v.toData(), y = Gn.parse(w);
        return new Zn(y, oe);
      } catch (w) {
        return w instanceof Va && (console.error("Shape clone validation failed:", w.issues), V("part", "Invalid shape data during cloning", w.issues)), null;
      }
    }, h = function(v) {
      try {
        const w = v.toData(), y = Tn.parse(w);
        return new ga(y, oe);
      } catch (w) {
        return w instanceof Va && (console.error("Stock clone validation failed:", w.issues), V("stock", "Invalid stock data during cloning", w.issues)), null;
      }
    }, m = function(v, w) {
      const y = ie.value.findIndex((ye) => ye.autoId === v);
      if (y === -1) return !1;
      const T = ie.value[y], j = { ...T.toData(), ...w }, ce = ka(Gn, j);
      if (ce.success && ce.data) {
        if (T.update(ce.data), !T.isNew) {
          const ye = Object.keys(w);
          T.validate({ fields: ye, index: y });
        }
        return !0;
      } else {
        const ye = ce.errors ? tl(ce.errors) : [];
        console.error("Shape update validation failed:", ye);
        const Re = ce.errors || [], Ee = Object.keys(w);
        for (let Ue = T.issues.length - 1; Ue >= 0; Ue--)
          T.issues[Ue].field.some((Et) => Ee.includes(Et[0])) && T.issues.splice(Ue, 1);
        for (const Ue of Re) {
          const Et = Wi(Ue), xn = Array.isArray(Ue.path) ? Ue.path.map((ra) => String(ra)) : [];
          new Ct({
            item: T,
            category: ["part"],
            message: Ue.message,
            params: Et,
            field: xn.length > 0 ? [xn] : []
          });
        }
        return !1;
      }
    }, P = function(v, w) {
      const y = ie.value.findIndex((j) => j.autoId === v);
      if (y === -1) return !1;
      const T = ie.value[y];
      return T.validate({ fields: [w], index: y }), T.issues.length === 0;
    }, O = function(v, w) {
      const y = se.value.find((ce) => ce.autoId === v);
      if (!y) return !1;
      const T = { ...y.toData(), ...w }, j = ka(Tn, T);
      if (j.success && j.data)
        return y.update(j.data), y.isNew || q(), !0;
      {
        const ce = j.errors ? tl(j.errors) : [];
        console.error("Stock update validation failed:", ce);
        const ye = j.errors || [], Re = Object.keys(w);
        for (let Ee = y.issues.length - 1; Ee >= 0; Ee--)
          y.issues[Ee].field.some((Ue) => Re.includes(Ue[0])) && y.issues.splice(Ee, 1);
        for (const Ee of ye) {
          const Ue = Wi(Ee), Et = Array.isArray(Ee.path) ? Ee.path.map((xn) => String(xn)) : [];
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
    }, b = function(v, w) {
      const y = se.value.findIndex((j) => j.autoId === v);
      if (y === -1) return !1;
      const T = se.value[y];
      return T.validate({ fields: [w], index: y }), tt(se), T.issues.length === 0;
    }, _ = function(v) {
      if (ie.value.length === 1) return !1;
      const w = ie.value.findIndex((y) => y.autoId === v);
      return w === -1 ? !1 : (ie.value.splice(w, 1), !0);
    }, U = function(v) {
      if (se.value.length === 1) return !1;
      const w = se.value.findIndex((y) => y.autoId === v);
      return w === -1 ? !1 : (se.value.splice(w, 1), !0);
    }, de = function(v) {
      B.value = !0;
      const w = [];
      try {
        ie.value.forEach((y) => y.issues.length = 0);
        for (let y = 0; y < ie.value.length; y++) {
          const T = ie.value[y];
          if (T.isNew || T.multiEdit)
            continue;
          const j = T.validate({
            inputStockList: se.value,
            index: y,
            stockType: v?.stockType ?? null,
            partTrim: 0,
            useInventory: !1,
            saw: v
          });
          w.push(...j);
        }
        ie.value.some((y) => Number(y.q) > 0) || new Ct({
          category: ["part"],
          message: "errors.validation.no_parts",
          issues: w
        });
      } finally {
        B.value = !1;
      }
      return De.value = w, w;
    }, q = function(v) {
      B.value = !0;
      const w = [];
      try {
        se.value.forEach((y) => y.issues.length = 0);
        for (let y = 0; y < se.value.length; y++) {
          const T = se.value[y];
          if (T.multiEdit)
            continue;
          const j = T.validate({ saw: v }, y);
          w.push(...j);
        }
        se.value.some((y) => Number(y.q) > 0 || y.autoAdd) || new Ct({
          category: ["stock"],
          message: "errors.validation.no_stock",
          issues: w
        });
      } finally {
        B.value = !1;
      }
      return De.value = w, w;
    }, V = function(v, w, y) {
      new Ct({
        category: [v],
        message: w,
        issues: De.value
      }), y && console.log("Validation details:", y);
    }, fe = function() {
      De.value = [], ie.value.forEach((v) => v.issues.length = 0), se.value.forEach((v) => v.issues.length = 0);
    }, Y = function(v = {}) {
      const w = [], y = [], T = v.inputShapesOverride ?? ie.value;
      if (!T.length)
        return { shapeList: [], issues: [] };
      for (let j = 0; j < T.length; j++) {
        const ce = T[j];
        if (!ce.q) continue;
        ce.createId(j), ce.applyPartTrim(v.trim, v.stockType);
        const ye = ce.toShape();
        w.push(ye), y.push(...ye.issues);
      }
      return { shapeList: w, issues: y };
    }, k = function(v) {
      if (!se.value.length)
        return { stockList: [], issues: [] };
      const w = [], y = [];
      for (let T = 0; T < se.value.length; T++) {
        const j = se.value[T];
        if (!j.q && !j.autoAdd) continue;
        j.createId(T), j.saw = v;
        const ce = j.toStock();
        w.push(ce), y.push(...ce.issues);
      }
      return { stockList: w, issues: y };
    }, M = function(v, w = oe) {
      const y = {
        saw: { success: !1, failed: !1 },
        shapes: { success: 0, failed: 0 },
        stock: { success: 0, failed: 0 },
        groups: { success: 0, failed: 0 }
      };
      if (v.saw) {
        const T = ka(Wn, n(v.saw));
        if (T.success && T.data) {
          const j = { ...T.data };
          v.saw?.autoId && (j.autoId = v.saw.autoId), We.value = new bn(j), y.saw.success = !0;
        } else
          console.error("Failed to parse input saw:", T.errors), y.saw.failed = !0;
      }
      if (v.shapes) {
        const T = t(v.shapes, w);
        y.shapes.success = T.length, y.shapes.failed = v.shapes.length - T.length, ie.value = T, De.value = De.value.filter(
          (j) => !j.category.includes("part")
        );
      }
      if (v.stock) {
        const T = a(v.stock, w);
        y.stock.success = T.length, y.stock.failed = v.stock.length - T.length, se.value = T, De.value = De.value.filter(
          (j) => !j.category.includes("stock")
        );
      }
      if (v.groups) {
        const T = s(v.groups);
        y.groups.success = T.length, y.groups.failed = v.groups.length - T.length, Xe.value = T;
      }
      return v.extrasOptions && (Pe.value = { ...v.extrasOptions }), v.materials && (Te.value = v.materials.map((T) => ea.safeParse(T)).filter((T) => T.success).map((T) => T.data)), y;
    }, le = function() {
      return {
        shapes: ie.value.map((v) => v.toData()),
        stock: se.value.map((v) => v.toData()),
        inputUserGroups: Xe.value.map((v) => v.toData()),
        extrasOptions: Pe.value,
        materials: Te.value
      };
    }, ge = function() {
      ie.value = [], se.value = [], Xe.value = [], fe();
    }, W = function(v) {
      const w = { ...We.value.toData(), ...v }, y = ka(Wn, w);
      return y.success && y.data ? (We.value.update(y.data), !0) : (console.error("InputSaw update validation failed:", y.errors), V("saw", "Invalid saw update", y.errors), !1);
    }, x = function() {
      We.value = new bn({});
    }, D = function() {
      const v = We.value.validate();
      return De.value = [...De.value.filter((w) => w.category?.[0] !== "saw"), ...v], v;
    };
    const { numberFormat: oe = "decimal" } = e, ie = jn("inputs/inputShapes", [], {
      serializer: {
        read: (v) => {
          if (!v) return [];
          let w;
          try {
            w = JSON.parse(v);
          } catch (y) {
            return console.error("Failed to parse input shapes JSON:", y), [];
          }
          return t(w, oe);
        },
        write: (v) => {
          const y = v.filter((j) => !j?.multiEdit).map((j) => j.toData());
          return JSON.stringify(y);
        }
      },
      listenToStorageChanges: !1
    }), se = jn("inputs/inputStock", [], {
      serializer: {
        read: (v) => {
          if (!v) return [];
          let w;
          try {
            w = JSON.parse(v);
          } catch (T) {
            return console.error("  Failed to parse stock JSON:", T), [];
          }
          return a(w, oe);
        },
        write: (v) => {
          const y = v.filter((j) => !j?.multiEdit).map((j) => j.toData());
          return JSON.stringify(y);
        }
      },
      listenToStorageChanges: !1
    }), We = jn("inputs/inputSaw", new bn({}), {
      serializer: {
        read: (v) => {
          if (!v) return new bn({});
          try {
            const w = JSON.parse(v);
            return i(w);
          } catch (w) {
            return console.error("  Failed to parse saw JSON:", w), new bn({});
          }
        },
        write: (v) => {
          if (!v)
            return JSON.stringify({});
          const w = v.toData();
          return JSON.stringify(w);
        }
      },
      listenToStorageChanges: !1
    }), Xe = jn("inputs/inputUserGroups", [], {
      serializer: {
        read: (v) => s(v ? JSON.parse(v) : []),
        write: (v) => JSON.stringify(v.map((w) => w.toData()))
      }
    }), Pe = jn("inputs/extrasOptions", {
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
    }), Te = jn("inputs/materials", [], {
      serializer: {
        read: (v) => {
          if (!v) return [];
          try {
            const w = JSON.parse(v);
            return Array.isArray(w) ? w.map((y) => ea.safeParse(y)).filter((y) => y.success).map((y) => y.data) : [];
          } catch (w) {
            return console.error("Failed to parse materials JSON:", w), [];
          }
        },
        write: (v) => JSON.stringify(v)
      },
      listenToStorageChanges: !1
    }), De = G([]), B = G(!1);
    ie.value.length === 0 && (ie.value = [new Zn({ isNew: !0 })]), se.value.length === 0 && (se.value = [new ga({ isNew: !0 })]);
    const J = F(() => ie.value.reduce((v, w) => {
      const y = Number(w?.q);
      return y && y > 0 && !w?.multiEdit ? v + y : v;
    }, 0)), ke = F(() => se.value.reduce((v, w) => {
      const y = Number(w?.q);
      return y && y > 0 && !w?.multiEdit ? v + y : v;
    }, 0)), Ve = F(() => ie.value.reduce((v, w) => w?.multiEdit ? v : v + 1, 0)), te = F(() => se.value.reduce((v, w) => w?.multiEdit ? v : v + 1, 0)), we = F(() => De.value.length > 0), _e = () => [
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
    ], kt = G(null), rt = G(null), Qt = () => {
      kt.value = null;
    }, ut = fe, ln = (v = null) => {
      const w = (v?.inputShapesOverride ?? ie.value).filter((T) => !T.multiEdit), y = de(v?.saw || void 0);
      if (w.length) {
        Ir(w, se.value, v?.saw || We.value);
        const T = w.flatMap((j) => j.issues);
        return [...y, ...T];
      }
      return y;
    }, Yt = async (v, w = "decimal") => {
      const y = v?.inputSaw, T = v?.inputShapes, j = v?.inputStock, ce = v?.inputUserGroups, ye = M({
        saw: y,
        shapes: T,
        stock: j,
        groups: ce,
        materials: v?.materials
      }, w);
      return tt(ie), tt(se), await Mt(), ye;
    }, wn = (v, w = "decimal") => M({ shapes: v }, w).shapes.success > 0, ct = (v, w = "decimal") => M({ stock: v }, w).stock.success > 0, X = (v, w, y, T, j) => {
      w[0]?.length > 0 && (Pe.value[v] || (Pe.value[v] = { options: [] }), Pe.value[v].options = [...w[0]]), y && T && w.length > 0 ? Gi(v, {
        options: w,
        // Use all columns extracted from pricing
        labels: y,
        pricing: T,
        displayNames: j
      }) : w.length > 0 && console.warn("[setExtrasOptionsFromPricing] Missing data for centralized config:", { labels: y, pricingData: T, pricingOptionsLength: w.length });
    }, Le = () => {
      if (!Object.values(Pe.value).some(
        (y) => y.options.length > 0
      )) return;
      const w = (y, T) => {
        const j = {};
        for (const ce of T)
          j[ce] = [...y];
        return j;
      };
      return {
        banding: Pe.value.banding.options.length > 0 ? {
          options: {
            sides: w(Pe.value.banding.options, ["l1", "l2", "w1", "w2"])
          }
        } : void 0,
        finish: Pe.value.finish.options.length > 0 ? {
          options: {
            faces: w(Pe.value.finish.options, ["a", "b"])
          }
        } : void 0,
        planing: Pe.value.planing.options.length > 0 ? {
          options: {
            sides: w(Pe.value.planing.options, ["l1", "l2", "w1", "w2"]),
            faces: w(Pe.value.planing.options, ["a", "b"])
          }
        } : void 0
      };
    }, ze = (v) => {
      if (!se.value.length) return "n";
      const w = v.material, y = v.t, T = se.value.filter((Re) => Re.material === w && Re.t === y);
      if (!T.length)
        return "n";
      let j = !1, ce = !1, ye = !1;
      for (const Re of T)
        Re.grain === "l" ? (j = !0, ce = !0) : Re.grain === "w" && (j = !0, ye = !0);
      return j ? ce && ye ? "y" : ce ? "l" : ye ? "w" : "n" : "n";
    }, Fe = ({ stock: v = !0, shapes: w = !0 } = {}) => {
      v && (se.value = [new ga({ l: 2440, w: 1220, q: 1 })]), w && (ie.value = [
        new Zn({ l: 500, w: 500, q: 1 }),
        new Zn({ l: 400, w: 400, q: 1 })
      ]);
    }, at = (v) => {
      for (const w of ie.value)
        _s(w, v);
      for (const w of se.value)
        _s(w, v);
    };
    let et = !1;
    Qe(ie, (v) => {
      et || !v.length || Mt(() => {
        const w = ["banding", "finish", "planing"], y = [];
        w.forEach((T) => {
          const j = /* @__PURE__ */ new Set();
          if (v.forEach((ce) => {
            const ye = ce.extras?.[T];
            ye && (ye.faces && Object.values(ye.faces).forEach((Re) => {
              typeof Re == "string" && Re.trim() && Re !== "Y" && j.add(Re);
            }), ye.sides && Object.values(ye.sides).forEach((Re) => {
              typeof Re == "string" && Re.trim() && Re !== "Y" && j.add(Re);
            }));
          }), j.size > 0) {
            const ce = dn(T);
            if (ce) {
              const ye = ce.options[0];
              if (Array.isArray(ye) && (ye.length === 0 || typeof ye[0] == "string")) {
                const Re = new Set(ye), Ee = Array.from(j).filter((Ue) => !Re.has(Ue));
                if (Ee.length > 0) {
                  const Ue = [...ye, ...Ee];
                  Gi(T, {
                    ...ce,
                    options: [Ue, ...ce.options.slice(1)]
                  });
                }
              }
            }
          }
        }), w.forEach((T) => {
          const j = Uu(T, v);
          j.cleanedCount > 0 && y.push(
            `${T}: ${j.invalidOptions.join(", ")}`
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
        return Te.value.find((w) => w.id === v.materialId);
    }, pn = (v = {}) => {
      const w = ea.parse({
        id: Rs(),
        colorIndex: Te.value.length % dt,
        ...v
      });
      return Te.value = [...Te.value, w], w;
    }, it = (v, w) => {
      for (const y of [...se.value, ...ie.value]) {
        if (y.materialId !== v) continue;
        const T = y.t;
        if (T == null || T === "") continue;
        const j = re({ v: T });
        j != null && w.some((ce) => Ra.equalTo(ce, j)) && (y.t = null);
      }
    }, on = (v, w) => {
      for (const y of se.value)
        y.materialId === v && (y.grain = w);
    }, mn = (v, w) => {
      const y = Te.value.findIndex((Ee) => Ee.id === v);
      if (y === -1) return;
      const T = Te.value[y], j = ea.parse({ ...T, ...w, id: v }), ce = T.thicknesses.filter(
        (Ee) => !j.thicknesses.some((Ue) => Ra.equalTo(Ue, Ee))
      ), ye = T.grain !== j.grain, Re = [...Te.value];
      Re[y] = j, Te.value = Re, ce.length && it(v, ce), ye && on(v, j.grain), tt(se), tt(ie);
    }, St = (v) => {
      Te.value = Te.value.filter((w) => w.id !== v);
      for (const w of [...se.value, ...ie.value])
        w.materialId === v && (w.materialId = void 0, w.material = "", w.t = null);
      tt(se), tt(ie);
    }, gn = (v, w, y = {}) => {
      const T = new Set(y.stock ?? []), j = new Set(y.shapes ?? []), ce = v ? Te.value.find((Ee) => Ee.id === v) : void 0, ye = (Ee) => {
        if (!ce) return null;
        if (w != null) return w;
        if (ce.thicknesses.length === 1) return ce.thicknesses[0];
        const Ue = Ee.t == null || Ee.t === "" ? null : re({ v: Ee.t });
        return Ue != null && ce.thicknesses.some((Et) => Ra.equalTo(Et, Ue)) ? Ue : null;
      }, Re = (Ee, Ue) => {
        ce ? (Ee.materialId = ce.id, Ee.material = ft(ce.name), Ee.t = ye(Ee), Ue && (Ee.grain = ce.grain), Ee.isNew = !1) : (Ee.materialId = void 0, Ee.material = "", Ee.t = null);
      };
      for (const Ee of se.value) T.has(Ee.autoId) && Re(Ee, !0);
      for (const Ee of ie.value) j.has(Ee.autoId) && Re(Ee, !1);
      tt(se), tt(ie);
    }, Sn = (v) => {
      const w = ft(v), y = Te.value.find((j) => ft(j.name) === w);
      if (y) return y;
      const T = ea.parse({
        id: Rs(),
        name: w,
        colorIndex: Te.value.length % dt
      });
      return Te.value = [...Te.value, T], T;
    }, zn = (v, w, y = !1) => {
      const T = y ? se : ie, j = T.value.find((ce) => ce.autoId === v);
      if (j) {
        if (!ft(w))
          j.materialId = void 0, j.material = "";
        else {
          const ce = Sn(w);
          j.materialId = ce.id, j.material = ce.name;
        }
        tt(T);
      }
    }, rn = () => {
      const v = [...se.value, ...ie.value].filter((T) => !T.multiEdit);
      let w = 0, y = 0;
      for (const T of v) {
        const j = ft(T.material);
        if (!j) continue;
        const ce = Te.value.length, ye = Sn(j);
        Te.value.length !== ce && w++;
        const Re = T.t, Ee = Re == null || Re === "" ? null : re({ v: Re });
        Ee != null && Ee > 0 && Number.isFinite(Ee) && !ye.thicknesses.some((Ue) => Ra.equalTo(Ue, Ee)) && (ye.thicknesses = [...ye.thicknesses, Ee].sort((Ue, Et) => Ue - Et)), T.materialId !== ye.id && (T.materialId = ye.id, y++), T.material = ye.name;
      }
      return tt(Te), tt(se), tt(ie), { created: w, mapped: y };
    };
    let mt = !1;
    Qe(
      [Te, se, ie],
      () => {
        if (!mt) {
          mt = !0;
          try {
            const v = new Map(Te.value.map((y) => [y.id, y]));
            let w = !1;
            for (const y of [...se.value, ...ie.value]) {
              if (!y.materialId) continue;
              const T = v.get(y.materialId);
              if (!T) {
                y.materialId = void 0, w = !0;
                continue;
              }
              const j = ft(T.name);
              y.material !== j && (y.material = j, w = !0);
            }
            w && (tt(se), tt(ie));
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
          (w) => !w.multiEdit && ft(w.material) && !w.materialId
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
        materials: Te
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
      totalInputShapeLines: Ve,
      totalInputStockLines: te,
      hasValidationIssues: we,
      // Actions
      addInputShape: u,
      addInputStock: r,
      cloneInputShape: d,
      cloneInputStock: h,
      updateInputShape: m,
      updateInputStock: O,
      updateInputSaw: W,
      removeInputShape: _,
      removeInputStock: U,
      reset: Qt,
      resetInputSaw: x,
      clear: ge,
      clearIssues: ut,
      // Validation
      validateInputShapes: ln,
      validateInputShapeField: P,
      validateInputStock: q,
      validateInputStockField: b,
      validateInputSaw: D,
      clearValidationIssues: fe,
      // Conversion
      createShapeList: Y,
      createStockList: k,
      // Import/Export/Update
      importData: M,
      exportData: le,
      updateInputs: Yt,
      importInputShapes: wn,
      importInputStock: ct,
      // Additional functions
      getShapeGrainSummary: ze,
      updateNumberFormat: at,
      createTestData: Fe,
      getSpecialShapeFields: _e,
      // Extras Options Management
      extrasOptions: Pe,
      setExtrasOptionsFromPricing: X,
      getCentralizedOptions: Le,
      // Materials list (CLE)
      materials: Te,
      addMaterial: pn,
      updateMaterial: mn,
      removeMaterial: St,
      assignMaterialToRows: gn,
      linkRowMaterialByName: zn,
      generateMaterialsFromInputs: rn,
      materialFor: pt,
      materialColorHex: Nu,
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
let Ni = null;
function Dl(e = { numberFormat: "decimal" }) {
  try {
    return Ni || (Ni = Ku(e)), Ni;
  } catch (n) {
    throw console.error("[useInputs] FATAL ERROR in useInputs:", n), console.error("[useInputs] Error stack:", n?.stack), n;
  }
}
const _l = {
  y1: "l1",
  y2: "l2",
  x1: "w1",
  x2: "w2"
}, Hu = {
  l1: "y1",
  l2: "y2",
  w1: "x1",
  w2: "x2"
};
function zi(e = !1) {
  return {
    l1: e,
    l2: e,
    w1: e,
    w2: e
  };
}
function Zu(e = !1) {
  return {
    x1: e,
    x2: e,
    y1: e,
    y2: e
  };
}
function Xa(e = !1) {
  return {
    a: e,
    b: e
  };
}
function Ju(e = !1) {
  return {
    sides: zi(e),
    faces: Xa(e)
  };
}
function Qu(e = !1) {
  return {
    x1: e,
    x2: e,
    y1: e,
    y2: e,
    a: e,
    b: e
  };
}
function Yu(e) {
  const n = {};
  for (const [t, a] of Object.entries(_l))
    t in e && (n[a] = e[t]);
  return n;
}
function Xu(e) {
  const n = {};
  for (const [t, a] of Object.entries(Hu))
    t in e && (n[a] = e[t]);
  return n;
}
class nl {
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
      const s = _l[a] ?? a;
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
    if (t && t instanceof ha) {
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
      for (const [P, O] of Object.entries(m))
        va.includes(P) && (s[P] = O);
    }
    if (a && typeof a == "object") {
      const m = this.migrateSideNames(a);
      for (const [P, O] of Object.entries(m))
        va.includes(P) && (u[P] = O);
    }
    if (i && typeof i == "object") {
      i.all && (r.sides.all = i.all);
      for (const [m, P] of Object.entries(i))
        m !== "all" && va.includes(m) && P && (r.sides[m] = P);
    }
    const d = new ha(Object.keys(s).length > 0 ? { sides: s } : {}), h = Object.keys(u).length > 0 ? new ha({ sides: u }) : void 0;
    return "extras" in n && n.extras ? n.extras.banding = d : Ye(n) && (n.banding = d), h && "_banding" in n && (n._banding = h), Ye(n) && i && (n.bandingOptions = r), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(n) {
    const t = n.finish, a = "_finish" in n ? n._finish : void 0, i = Ye(n) ? n.finishOptions : void 0;
    if (!t && !a && !i || t && t instanceof ba)
      return !1;
    const s = {}, u = {}, r = { faces: {} };
    if (t && typeof t == "object")
      for (const [m, P] of Object.entries(t))
        ya.includes(m) && (s[m] = P);
    if (a && typeof a == "object")
      for (const [m, P] of Object.entries(a))
        ya.includes(m) && (u[m] = P);
    if (i && typeof i == "object") {
      i.all && (r.faces.all = i.all);
      for (const [m, P] of Object.entries(i))
        m !== "all" && ya.includes(m) && P && (r.faces[m] = P);
    }
    const d = new ba(Object.keys(s).length > 0 ? { faces: s } : {}), h = Object.keys(u).length > 0 ? new ba({ faces: u }) : void 0;
    return "extras" in n && n.extras ? n.extras.finish = d : Ye(n) && (n.finish = d), h && "_finish" in n && (n._finish = h), Ye(n) && i && (n.finishOptions = r), !0;
  }
  /**
   * Migrate storage format: Convert boolean true to option name strings in multi-column configs
   * This handles legacy data where single-option checkboxes stored boolean true instead of the option name
   */
  static migrateStorageFormat(n) {
    let t = !1;
    const a = "extras" in n && n.extras ? n.extras : n;
    if (a.banding) {
      const i = Vs("banding");
      if (i && i.labels && i.labels.length > 1)
        for (const s of va) {
          const u = `side.${s}`, r = Ri(n, "banding", u);
          if (r && typeof r == "object" && !Array.isArray(r)) {
            let d = !1;
            const h = { ...r };
            for (const m of i.labels)
              if (h[m] === !0) {
                const O = i.labels.indexOf(m);
                if (O !== -1 && i.options[O] && Array.isArray(i.options[O])) {
                  const b = i.options[O];
                  b.length === 1 && (h[m] = b[0], d = !0);
                }
              }
            d && (qs(n, "banding", u, h), t = !0);
          }
        }
    }
    if (a.finish) {
      const i = Vs("finish");
      if (i && i.labels && i.labels.length > 1)
        for (const s of ya) {
          const u = `face.${s}`, r = Ri(n, "finish", u);
          if (r && typeof r == "object" && !Array.isArray(r)) {
            let d = !1;
            const h = { ...r };
            for (const m of i.labels)
              if (h[m] === !0) {
                const O = i.labels.indexOf(m);
                if (O !== -1 && i.options[O] && Array.isArray(i.options[O])) {
                  const b = i.options[O];
                  b.length === 1 && (h[m] = b[0], d = !0);
                }
              }
            d && (qs(n, "finish", u, h), t = !0);
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
    if (t && typeof t == "object" && !(t instanceof ha) && !("sides" in t) && !("faces" in t))
      return !0;
    if ("_banding" in n) {
      const i = n._banding;
      if (i && typeof i == "object" && !(i instanceof ha) && !("sides" in i) && !("faces" in i))
        return !0;
    }
    const a = n.finish;
    if (a && typeof a == "object" && !(a instanceof ba) && !("sides" in a) && !("faces" in a))
      return !0;
    if ("_finish" in n) {
      const i = n._finish;
      if (i && typeof i == "object" && !(i instanceof ba) && !("sides" in i) && !("faces" in i))
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
          const i = Object.keys(t.sides).filter((s) => !va.includes(s));
          if (i.length > 0)
            throw new Error(`Invalid side keys in banding: ${i.join(", ")}`);
        }
      }
      const a = n.finish;
      if (a) {
        if ("sides" in a && a.sides)
          throw new Error("Finish should not have sides property");
        if ("faces" in a && a.faces) {
          const i = Object.keys(a.faces).filter((s) => !ya.includes(s));
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
    const i = Yu(e), s = {};
    return "l1" in i && (s.l1 = Ut(i.l1)), "l2" in i && (s.l2 = Ut(i.l2)), "w1" in i && (s.w1 = Ut(i.w1)), "w2" in i && (s.w2 = Ut(i.w2)), s;
  }
  const a = {};
  return "l1" in e && (a.l1 = Ut(e.l1)), "l2" in e && (a.l2 = Ut(e.l2)), "w1" in e && (a.w1 = Ut(e.w1)), "w2" in e && (a.w2 = Ut(e.w2)), Object.keys(a).length > 0 ? a : e;
}
function ec(e) {
  return !e || typeof e != "string" ? e : {
    "side.x1": "side.w1",
    "side.x2": "side.w2",
    "side.y1": "side.l1",
    "side.y2": "side.l2"
  }[e] || e;
}
function Jn(e) {
  return !e || !Array.isArray(e) ? e : e.map(ec);
}
function tc(e) {
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
function Ki(e) {
  return e && Xu(e);
}
function nc(e) {
  e?.type && delete e.type, ac.call(this, e), ic.call(this, e), sc.call(this, e), e.shapes && Array.isArray(e.shapes) && e.shapes.forEach((n) => Hi(n));
}
function ac(e) {
  if (!e?.banding || typeof e.banding != "object") return;
  const n = Object.keys(e.banding);
  if (!n.length) return;
  const t = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  n.every((a) => t.includes(a)) || (e.banding = {
    labels: Object.keys(e.banding),
    pricing: e.bandingPricing || {}
  }, e.bandingPricing && delete e.bandingPricing);
}
function ic(e) {
  if (!e?.finish || typeof e.finish != "object") return;
  const n = Object.keys(e.finish);
  if (!n.length) return;
  const t = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  n.every((a) => t.includes(a)) || (e.finish = {
    labels: Object.keys(e.finish),
    pricing: e.finishPricing || {}
  }, e.finishPricing && delete e.finishPricing);
}
function sc(e) {
  if (!e?.planing || typeof e.planing != "object") return;
  const n = Object.keys(e.planing);
  if (!n.length) return;
  const t = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  n.every((a) => t.includes(a)) || (e.planing = {
    labels: Object.keys(e.planing),
    pricing: e.planingPricing || {}
  }, e.planingPricing && delete e.planingPricing);
}
function Hi(e) {
  !e || typeof e != "object" || (nl.needsMigration(e) && nl.migrateShape(e), e._banding && delete e._banding, e._finish && delete e._finish, e._bandingType && delete e._bandingType);
}
function Rl(e) {
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
function _g(e) {
  if (!(!e || typeof e != "object")) {
    if (nc(e), e.parts && Array.isArray(e.parts) && (e.parts = e.parts.map((n) => (n.extras?.banding?.sides && (n.extras.banding.sides = yn(n.extras.banding.sides)), n.extras?.finish?.sides && (n.extras.finish.sides = yn(n.extras.finish.sides)), n.extras?.planing?.sides && (n.extras.planing.sides = yn(n.extras.planing.sides)), n))), e.stock && Array.isArray(e.stock) && (e.stock = e.stock.map((n) => n?.trim ? {
      ...n,
      trim: yn(n.trim)
    } : n)), e.options) {
      if (Rl(e.options), e.options.bandingLocations && (e.options.bandingLocations = Jn(e.options.bandingLocations)), e.options.finishLocations && (e.options.finishLocations = Jn(e.options.finishLocations)), e.options.planingLocations && (e.options.planingLocations = Jn(e.options.planingLocations)), e.options.extrasLocationGroups)
        for (const n of ["banding", "finish", "planing"]) {
          const t = e.options.extrasLocationGroups[n];
          t && Array.isArray(t) && t.forEach((a) => {
            a.locations && (a.locations = Jn(a.locations));
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
        t.locations && Array.isArray(t.locations) && (t.locations = Jn(t.locations)), t.groups && Array.isArray(t.groups) && t.groups.forEach((a) => {
          a.locations && (a.locations = Jn(a.locations));
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
    e.shapes && Array.isArray(e.shapes) && e.shapes.forEach((n) => Hi(n)), (e.l !== void 0 || e.w !== void 0 || e.banding !== void 0) && Hi(e);
  }
}
function lc(e) {
  if (!e || typeof e != "object")
    return e;
  const n = { ...e };
  return n.saw && (n.saw = oc(n.saw)), Array.isArray(n.stock) && (n.stock = n.stock.map(rc)), Array.isArray(n.parts) && (n.parts = n.parts.map(uc)), n;
}
function oc(e) {
  const n = { ...e };
  if (n.guillotineOptions && (n.guillotineOptions = { ...n.guillotineOptions }, n.guillotineOptions.strategy === "stock" && (n.guillotineOptions.strategy = "efficiency")), n.efficiencyOptions) {
    n.efficiencyOptions = { ...n.efficiencyOptions };
    const t = n.efficiencyOptions.primaryCompression;
    t === "x" ? n.efficiencyOptions.primaryCompression = "l" : t === "y" && (n.efficiencyOptions.primaryCompression = "w");
  }
  return n.bladeWidth !== void 0 && (n.bladeWidth = Number(n.bladeWidth)), n.stackHeight !== void 0 && (n.stackHeight = Number(n.stackHeight)), n.cutPreference === "flex" ? n.cutPreference = "l" : n.cutPreference === "" && (n.cutPreference = void 0), (n.cutPreference === null || n.cutPreference === void 0) && (n.cutType === "guillotine" || n.cutType === "beam") && (n.cutPreference = "l"), n;
}
function rc(e) {
  const n = { ...e };
  return delete n.numberFormatKeys, delete n.issues, delete n.warnings, n.trim && (n.trim = yn(n.trim)), n.l !== void 0 && (n.l = Number(n.l)), n.w !== void 0 && (n.w = Number(n.w)), n.t !== void 0 && (n.t = Number(n.t)), n.q !== void 0 && (n.q = Number(n.q)), n.cost !== void 0 && (n.cost = Number(n.cost)), n;
}
function uc(e) {
  const n = { ...e };
  if (delete n.numberFormatKeys, delete n.issues, delete n.warnings, n.banding || n.bandingType) {
    const t = tc(n);
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
function ei(e) {
  if (!e || typeof e != "object") return null;
  if (Array.isArray(e)) return e.map(ei);
  const n = {};
  for (const [t, a] of Object.entries(e))
    t === "__entityType" || t === "autoId" || t === "enabled" || t === "type" || t === "issues" || t === "warnings" || (n[t] = a && typeof a == "object" ? ei(a) : a);
  return Object.keys(n).length > 0 ? n : null;
}
function Vl(e) {
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
function cc(e) {
  return e ? typeof e == "string" ? e : e.id ? e.id : e.autoId ? e.autoId : "" : "";
}
function dc(e) {
  return e.rot !== void 0 ? e.rot ? 1 : 0 : e.rotated !== void 0 ? e.rotated ? 1 : 0 : e.isRotated !== void 0 ? e.isRotated ? 1 : 0 : e.w > e.l ? 1 : 0;
}
$({
  // Job metadata
  jobId: S().describe("Job identifier"),
  // Input configuration (preserved)
  saw: Wn.describe("Saw configuration used"),
  // Result data (internal format - l1/l2/w1/w2)
  // Using actual schemas to strip internal-only fields
  stock: ne(Or).describe("Stock items"),
  parts: ne(Bs).describe("Parts with coordinates and properties"),
  cuts: ne(Lr).optional().describe("Cut instructions"),
  offcuts: ne(Cr).optional().describe("Remaining offcut pieces"),
  unusableParts: ne(Bs).optional().describe("Parts that could not be placed"),
  // Complete metadata (ALL internal analysis fields)
  metadata: Ml.describe("Complete analysis and metrics")
});
$({
  saw: Wn.describe("Saw configuration"),
  stock: ne(Tn).describe("Stock items"),
  parts: ne(Gn).describe("Parts to cut"),
  groups: ne(Er).optional().describe("User-defined part groups with XY positions"),
  webhook: c().url().optional().describe("Webhook URL for async result delivery"),
  // Job-level label-printer fields (distinct from /v3/labels printable PDFs).
  // `customer` maps to PTX JOBS.CUSTOMER. Mismatches with the chosen saw's
  // format(s) surface as warnings, not request failures.
  labels: $({
    customer: c().max(100).optional().describe("Customer name printed on saw labels (PTX JOBS.CUSTOMER)")
  }).optional().describe("Job-level fields fed to the saw label printer")
});
$({
  error: c().describe("Error message"),
  details: Hs().optional().describe("Detailed error information (Zod validation errors, etc.)"),
  version: yt("V3").describe("API version"),
  help: c().optional().describe("Helpful migration guidance"),
  example: Hs().optional().describe("Example of correct format"),
  docs: c().url().optional().describe("Link to V3 documentation")
});
function fc(e) {
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
function pc(e) {
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
    analysis: fc(e.analysis),
    stack: e.stack?.number ?? 1,
    customData: Jt(e.customData)
  } : null;
}
function mc(e, n) {
  if (!e) return null;
  let t = null;
  const a = cc(e.stock);
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
    rot: dc(e),
    added: e.added ?? !1,
    notes: e.notes ?? "",
    code: e.code,
    stock: t,
    trim: Jt(e.trim),
    extras: ei(e.extras),
    customData: Jt(e.customData)
  };
  return e.machining && (i.machining = Vl(e.machining)), i;
}
function gc(e) {
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
    extras: ei(e.extras),
    customData: Jt(e.customData)
  };
  return e.machining && (n.machining = Vl(e.machining)), e.issues && Array.isArray(e.issues) && e.issues.length > 0 ? n.issues = e.issues.map((t) => ({
    message: Ll(t.message) || t.message,
    type: t.type,
    category: t.category,
    field: t.field
  })) : n.issues = [], n;
}
function hc(e) {
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
function vc(e) {
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
function bc(e) {
  const n = e.stockList || e.stock || [], t = /* @__PURE__ */ new Map();
  for (const h of n) {
    const m = { id: h.id || "" };
    h.code && (m.code = h.code), h.id && t.set(h.id, m), h.autoId && h.autoId !== h.id && t.set(h.autoId, m);
  }
  const a = n.map(pc), i = (e.shapeList || e.parts || []).map((h) => mc(h, t)), s = (e.unusableShapes || []).map(gc), u = (e.cutList || e.cuts || []).map(hc), r = (e.offcuts || []).map(vc);
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
const al = (e) => e == null || e === !1;
function yc(e, n, t) {
  if (n > 0 && al(t[n - 1]))
    return [];
  const a = /* @__PURE__ */ new Set();
  for (const i of e) {
    if (i.length <= n)
      continue;
    let s = !0;
    for (let u = 0; u < n; u++) {
      const r = t[u];
      if (!al(r) && i[u] !== r) {
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
class si {
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
    const s = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Set(), r = (d) => {
      if (s.has(d))
        return s.get(d);
      const [h, m] = d.split(".");
      if (!n.nodes.has(d)) {
        const U = i[h];
        if (U)
          return m === "q" ? U.q : U[m];
        throw new Error(`Node not found: ${d}`);
      }
      if (u.has(d))
        throw new Error(`Circular dependency detected at ${d}`);
      const P = n.nodes.get(d);
      if (typeof P.formula == "number")
        return s.set(d, P.formula), P.formula;
      u.add(d);
      const O = n.edges.get(d) || /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Map();
      for (const U of O)
        if (U.startsWith("input.")) {
          const de = U.split(".")[1];
          b.set(U, a[de]);
        } else
          b.set(U, r(U));
      const _ = this.evaluateFormulaWithDeps(P.formula, b, a);
      return s.set(d, _), u.delete(d), _;
    };
    for (const d of n.nodes.keys())
      r(d);
    return Object.fromEntries(s);
  }
  evaluateFormulaWithDeps(n, t, a, i) {
    if (!this.isFormula(n))
      return n;
    let s = this.stripFormulaPrefix(n.toString());
    return s = s.replace(/inputs\.(\w+)/g, (u, r) => a[r]?.toString() || "0"), s = s.replace(/panels\.(\w+)\.(\w+)/g, (u, r, d) => {
      if (r === i?.panelKey && i[d] !== void 0)
        return i[d].toString();
      if (t.has(`${r}.${d}`))
        return t.get(`${r}.${d}`).toString();
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
const kc = new si({});
function wc(e) {
  const n = e.trim();
  return n.startsWith("=") ? n.substring(1).trim() : n;
}
function ls(e, n) {
  const t = wc(e);
  if (!t) return null;
  try {
    const a = kc.evaluateExpression(t, n), i = Number(a);
    return !Number.isFinite(i) || i < 0 ? null : i;
  } catch (a) {
    return console.error("[extras-formula] evaluation failed", { formula: e, err: a }), null;
  }
}
function Sc(e, n) {
  return ls(n, e);
}
function xc(e, n) {
  return ls(n, e);
}
function il(e, n) {
  return ls(n, e);
}
const os = {
  stockL: 0,
  stockW: 0,
  stockCost: 0,
  stockDiscount: 0,
  stockDiscountedCost: 0
};
function Pc(e, n, t, a) {
  return {
    length: n,
    edge: e,
    isLongEdge: e === "l1" || e === "l2" ? 1 : 0,
    partL: t.partL,
    partW: t.partW,
    partT: t.partT,
    partQuantity: t.partQuantity,
    ...os,
    ...a
  };
}
function Ic(e, n, t, a) {
  return {
    area: n,
    face: e,
    partL: t.partL,
    partW: t.partW,
    partT: t.partT,
    partQuantity: t.partQuantity,
    ...os,
    ...a
  };
}
function sl(e, n, t, a, i, s) {
  return {
    area: n,
    length: t,
    target: e,
    isFace: a,
    partL: i.partL,
    partW: i.partW,
    partT: i.partT,
    partQuantity: i.partQuantity,
    ...os,
    ...s
  };
}
function Cc(e) {
  let n = e;
  for (let t = 0; t < 16 && n; t++) {
    if (n instanceof sa)
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
function Lc(e) {
  const n = e.shape ?? {};
  return Object.entries(n).filter(([, t]) => Cc(t) instanceof sa).map(([t]) => t);
}
function ll(e) {
  const t = (e.split(".").pop() ?? e).replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
}
Lc(Ca);
function rs(e) {
  const n = (s) => {
    const u = e.meta[s];
    return {
      name: s,
      label: u?.label ?? ll(s),
      description: u?.description,
      group: u?.group ?? e.defaultGroup
    };
  }, t = e.handCuratedNames.map(n), a = e.relevantOrderKeys.map((s) => ({
    name: `order.${s}`,
    label: ll(s),
    group: "Order"
  })), i = [...t, ...a];
  return { variables: i, variableNames: i.map((s) => s.name) };
}
const Oc = {
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
}, Ec = [
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
], Fc = [
  "totalBandingLength",
  // the headline one for banding tiering
  "totalPartsProduced",
  "totalStockCost",
  "totalStockArea",
  "totalPartArea"
], { variableNames: Ac } = rs({
  handCuratedNames: Ec,
  meta: Oc,
  relevantOrderKeys: Fc,
  defaultGroup: "Edge"
}), Tc = Ac, Nc = {
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
}, $c = [
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
], Mc = [
  "totalFinishArea",
  "totalPartsProduced",
  "totalStockCost",
  "totalStockArea",
  "totalPartArea"
], { variableNames: Dc } = rs({
  handCuratedNames: $c,
  meta: Nc,
  relevantOrderKeys: Mc,
  defaultGroup: "Face"
}), _c = Dc, Rc = {
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
}, Vc = [
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
], qc = [
  "totalPlaningArea",
  "totalPartsProduced",
  "totalStockCost",
  "totalStockArea",
  "totalPartArea"
], { variableNames: Bc } = rs({
  handCuratedNames: Vc,
  meta: Rc,
  relevantOrderKeys: qc,
  defaultGroup: "Feature"
}), jc = Bc, en = G(null);
let Uc = 0;
function Gc(e) {
  const n = e || `action-menu-${++Uc}-${Date.now()}`, t = F({
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
  }, r = F(() => en.value !== null), d = F(() => en.value), h = F(() => en.value === n);
  return {
    // Instance-specific
    id: zt(G(n)),
    isOpen: t,
    open: a,
    close: i,
    toggle: u,
    isThisMenuOpen: h,
    // Global singleton state (shared across all instances)
    closeAll: s,
    isAnyMenuOpen: r,
    currentOpenMenuId: d
  };
}
const Wc = { class: "action-menu" }, zc = ["textContent"], Kc = {
  key: 0,
  class: "menu-divider"
}, Hc = {
  key: 1,
  class: "group-label"
}, Zc = /* @__PURE__ */ vt({
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
    const t = e, a = n, { isOpen: i, close: s, toggle: u } = Gc(t.menuId), r = G(), d = G(), h = F(() => t.disabled), m = F(() => t.label), P = F(() => t.showLabel), O = F(() => t.icon), { floatingStyles: b } = hl(r, d, {
      placement: t.placement,
      whileElementsMounted: Al,
      middleware: [
        Ol(t.offset),
        El(),
        Fl({ padding: 8 })
      ]
    }), _ = (x) => {
      if (!x) return ["fas", "question"];
      if (typeof x == "function" && (x = x(t)), Array.isArray(x))
        return x;
      if (typeof x == "string") {
        const D = x.split(" ");
        if (D.length >= 2) {
          const oe = D[0], ie = D.slice(1).join("-").replace("fa-", "");
          return [oe, ie];
        }
        return ["fas", x.replace("fa-", "")];
      }
      return ["fas", "question"];
    }, U = F(() => _(O.value)), de = (x) => typeof x.active == "function" ? x.active(t) : typeof x.active == "boolean" ? x.active : !1, q = (x) => {
      if (!x.href) return !1;
      try {
        const D = typeof x.href == "function" ? x.href(t) : x.href;
        return new URL(D, window.location.origin).origin !== window.location.origin;
      } catch {
        return !1;
      }
    }, V = (x) => x.href ? "a" : "div", fe = (x) => {
      const D = {};
      if (x.href) {
        const oe = typeof x.href == "function" ? x.href(t) : x.href;
        if (D.href = oe, q(x)) {
          const ie = typeof x.target == "function" ? x.target(t) : x.target;
          D.target = ie || "_blank", D.rel = x.rel || "noopener noreferrer";
        } else if (x.target) {
          const ie = typeof x.target == "function" ? x.target(t) : x.target;
          D.target = ie;
        }
        x.rel && (D.rel = x.rel);
      }
      return x.attrs && Object.assign(D, x.attrs), D;
    }, Y = F(() => t.menuItems.map((x) => {
      const D = { ...x };
      return typeof x.href == "function" && (D.href = x.href(t)), typeof x.icon == "function" && (D.icon = x.icon(t)), typeof x.disabled == "function" && (D.disabled = x.disabled(t)), typeof x.label == "function" && (D.label = x.label(t)), typeof x.variant == "function" && (D.variant = x.variant(t)), typeof x.active == "function" && (D.active = x.active(t)), typeof x.target == "function" && (D.target = x.target(t)), typeof x.show == "function" && (D.show = x.show(t)), D;
    })), k = (x) => {
      x.stopPropagation(), x.preventDefault(), !h.value && u();
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
    }, le = (x) => {
      const D = [];
      if (x.variant) {
        const ie = typeof x.variant == "function" ? x.variant(t) : x.variant;
        D.push(`variant-${ie}`);
      }
      if ((typeof x.disabled == "function" ? x.disabled(t) : x.disabled) && !x.href && D.push("disabled"), de(x) && D.push("active"), x.href && D.push("menu-link"), q(x) && D.push("external-link"), x.class) {
        const ie = typeof x.class == "function" ? x.class(t) : x.class;
        D.push(ie);
      }
      return D.join(" ");
    }, ge = (x) => {
      const D = x.target;
      i.value && r.value && d.value && !r.value.contains(D) && !d.value.contains(D) && s();
    }, W = (x) => {
      x.key === "Escape" && i.value && s();
    };
    return fn(() => {
      document.addEventListener("click", ge), document.addEventListener("keydown", W);
    }), ni(() => {
      document.removeEventListener("click", ge), document.removeEventListener("keydown", W);
    }), (x, D) => (A(), K("div", Wc, [
      be("div", {
        ref_key: "trigger",
        ref: r,
        onClick: k,
        class: ot(["actions-btn", { active: E(i), disabled: h.value }])
      }, [
        O.value ? (A(), Ne(E(Ya), {
          key: 0,
          icon: U.value,
          class: "icon"
        }, null, 8, ["icon"])) : ue("", !0),
        P.value ? (A(), K("span", {
          key: 1,
          class: "label",
          textContent: Se(m.value)
        }, null, 8, zc)) : ue("", !0)
      ], 2),
      (A(), Ne(ai, { to: "body" }, [
        E(i) && !h.value ? (A(), K("div", {
          key: 0,
          ref_key: "floating",
          ref: d,
          style: Gt(E(b)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: D[0] || (D[0] = Un(() => {
          }, ["stop"]))
        }, [
          (A(!0), K(It, null, Zt(Y.value, (oe, ie) => (A(), K(It, { key: ie }, [
            oe.type === "divider" ? (A(), K("div", Kc)) : oe.type === "group" ? (A(), K("div", Hc, Se(oe.label), 1)) : oe.show !== !1 ? (A(), Ne(ur(V(oe)), Kt({
              key: 2,
              ref_for: !0
            }, fe(oe), {
              onClick: (se) => M(oe, se),
              id: oe.id,
              class: ["menu-item", le(oe)],
              disabled: oe.disabled && !oe.href
            }), {
              default: tn(() => [
                oe.icon || de(oe) ? (A(), Ne(E(Ya), {
                  key: 0,
                  icon: de(oe) ? ["fass", "check"] : _(oe.icon)
                }, null, 8, ["icon"])) : ue("", !0),
                be("span", null, Se(oe.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : ue("", !0)
          ], 64))), 128))
        ], 4)) : ue("", !0),
        E(i) && !h.value ? (A(), K("div", {
          key: 1,
          class: "backdrop",
          onClick: D[1] || (D[1] = //@ts-ignore
          (...oe) => E(s) && E(s)(...oe))
        })) : ue("", !0)
      ]))
    ]));
  }
}), Jc = {
  key: 0,
  class: "extras-price-display"
}, Qc = { class: "extras-price-breakdown" }, Yc = { class: "extras-price-rate" }, Xc = {
  key: 0,
  class: "extras-price-label"
}, ed = {
  key: 1,
  class: "extras-price-op"
}, td = {
  key: 0,
  class: "extras-price-total"
}, nd = /* @__PURE__ */ vt({
  __name: "ExtrasPriceDisplay",
  props: {
    pricePerUnit: { default: void 0 },
    quantity: { default: void 0 },
    quantityUnit: { default: "m" },
    priceLabel: { default: "" },
    formatPrice: { type: Function, default: void 0 }
  },
  setup(e) {
    const n = e, t = F(() => n.quantity !== void 0 && n.quantity > 0), a = (i) => n.formatPrice ? n.formatPrice(i) : i.toFixed(2);
    return (i, s) => e.pricePerUnit !== void 0 ? (A(), K("span", Jc, [
      be("span", Qc, [
        be("strong", Yc, Se(a(e.pricePerUnit)), 1),
        e.priceLabel ? (A(), K("span", Xc, Se(e.priceLabel), 1)) : ue("", !0),
        t.value ? (A(), K("span", ed, " × " + Se(e.quantity.toFixed(2)) + Se(e.quantityUnit ? " " + e.quantityUnit : "") + " = ", 1)) : ue("", !0)
      ]),
      t.value ? (A(), K("strong", td, Se(a(e.pricePerUnit * e.quantity)), 1)) : ue("", !0)
    ])) : ue("", !0);
  }
}), ad = /* @__PURE__ */ sn(nd, [["__scopeId", "data-v-2e4e7ac7"]]);
function us(e) {
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
function Rg(e, n) {
  const t = us(e);
  return t ? (0.299 * t.r + 0.587 * t.g + 0.114 * t.b) / 255 > 0.55 ? "#000000" : "#ffffff" : "#000000";
}
function ol(e, n = 30, t = 75) {
  const a = us(e);
  if (!a)
    return e;
  const i = sd(a.r, a.g, a.b);
  if (i.l >= n && i.l <= t && i.s >= 25)
    return e;
  const u = Math.min(t, Math.max(n, i.l)), r = i.s < 25 ? 60 : i.s, [d, h, m] = ld(i.h, r, u);
  return "#" + [d, h, m].map((P) => P.toString(16).padStart(2, "0")).join("");
}
function Vg(e) {
  const n = id(e);
  return n === null ? "white" : n > 0.55 ? "#cc1f8c" : "white";
}
function id(e) {
  const n = us(e);
  return n ? (0.299 * n.r + 0.587 * n.g + 0.114 * n.b) / 255 : null;
}
function sd(e, n, t) {
  const a = e / 255, i = n / 255, s = t / 255, u = Math.max(a, i, s), r = Math.min(a, i, s), d = (u + r) / 2;
  let h = 0, m = 0;
  if (u !== r) {
    const P = u - r;
    switch (m = d > 0.5 ? P / (2 - u - r) : P / (u + r), u) {
      case a:
        h = (i - s) / P + (i < s ? 6 : 0);
        break;
      case i:
        h = (s - a) / P + 2;
        break;
      case s:
        h = (a - i) / P + 4;
        break;
    }
    h *= 60;
  }
  return { h, s: m * 100, l: d * 100 };
}
function ld(e, n, t) {
  n /= 100, t /= 100;
  const a = (1 - Math.abs(2 * t - 1)) * n, i = a * (1 - Math.abs(e / 60 % 2 - 1)), s = t - a / 2;
  let u = 0, r = 0, d = 0;
  return e >= 0 && e < 60 ? (u = a, r = i, d = 0) : e >= 60 && e < 120 ? (u = i, r = a, d = 0) : e >= 120 && e < 180 ? (u = 0, r = a, d = i) : e >= 180 && e < 240 ? (u = 0, r = i, d = a) : e >= 240 && e < 300 ? (u = i, r = 0, d = a) : e >= 300 && e < 360 && (u = a, r = 0, d = i), [
    Math.round((u + s) * 255),
    Math.round((r + s) * 255),
    Math.round((d + s) * 255)
  ];
}
const rl = (e, n, t) => {
  if (n === "unitDependent")
    if (t === "fraction") {
      if (/\/0$/.test(e))
        return {
          value: e,
          valid: !1,
          message: "division_by_zero"
        };
      const a = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(e), i = Pl(e);
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
function od({
  props: e,
  emit: n,
  isMounted: t
}) {
  const a = G({
    isTyping: !1,
    isMouseDown: !1,
    isComposing: !1,
    lastValidValue: String(e.value ?? "")
  }), i = (r, d = !1) => {
    if (r == null || r === "") {
      const m = e.required && !e.disableRequiredValidation;
      return e.type === "string" ? m ? { value: null, valid: !1, message: "field_required" } : { value: r === null ? null : "", valid: !0 } : Fr(r, "decimal", m);
    }
    const h = String(r);
    switch (e.type) {
      case "string":
        return { value: h, valid: !0 };
      case "unitDependent":
        if (d)
          return rl(h, e.type, e.numberFormat);
        try {
          const m = re({
            v: r,
            nf: e.numberFormat,
            dp: e.decimalPlaces,
            fr: e.fractionRoundTo
          });
          if (typeof m == "number") {
            let P = m, O = !0, b;
            return typeof e.min == "number" && P < e.min && (P = e.min, O = !1, b = "below_min"), typeof e.max == "number" && P > e.max && (P = e.max, O = !1, b = "above_max"), { value: P, valid: O, message: b };
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
        if (d)
          return rl(h, e.type);
        try {
          const P = re({
            v: r,
            nf: "decimal"
          });
          if (P === null)
            return e.required && !e.disableRequiredValidation ? { value: null, valid: !1, message: "errors.validation.field.required" } : { value: null, valid: !0 };
          let O = P;
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
  }, s = (r, d = !1) => d && e.type === "unitDependent" && e.numberFormat === "fraction" ? !1 : d && (e.type === "integer" || e.type === "float" || e.type === "unitDependent" && e.numberFormat === "decimal") ? typeof r.value == "number" && r.valid : !!(r.valid || r.message === "zero_not_allowed" || r.message === "below_min" || r.message === "above_max" || r.message === "errors.validation.field.required" && !e.disableRequiredValidation);
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
        const d = r.target;
        if (a.value.isMouseDown) {
          const m = i(d.value, !1);
          s(m, !1) && (n("update:value", m.value), n("validation", m, e.id)), a.value.isMouseDown = !1;
          return;
        }
        a.value.isTyping = !0;
        const h = i(d.value, !0);
        n("validation", h, e.id), n("input", d.value), s(h, !0) && n("update:value", h.value);
      },
      handleBlur: (r) => {
        if (!t.value) return;
        a.value.isTyping = !1;
        const d = r.target, h = i(d.value, !1);
        n("validation", h, e.id), s(h) && (n("update:value", h.value), a.value.lastValidValue = String(h.value ?? "")), n("blur", r);
      },
      handleFocus: (r) => {
        t.value && (a.value.isTyping = !0, n("focus", r));
      },
      handleKeydown: (r) => {
        if (t.value && !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(r.key)) {
          if (!["Backspace", "Delete", "Tab", "Enter", "Escape"].includes(r.key))
            if (e.type === "unitDependent" && e.numberFormat === "fraction") {
              const d = r.target, h = d.value, m = d.selectionStart || 0, P = h.substring(0, m);
              if (r.key === "/" && h.includes("/")) {
                r.preventDefault();
                return;
              }
              if (r.key === " " && /\s$/.test(P)) {
                r.preventDefault();
                return;
              }
              /^[-0-9\s/]$/.test(r.key) || r.preventDefault();
            } else (e.type === "integer" || e.type === "float") && ((e.type === "integer" ? /^[-0-9]$/.test(r.key) : /^[-0-9.]$/.test(r.key)) || r.preventDefault());
          if (r.key === "Enter") {
            a.value.isTyping = !1;
            const d = r.target, h = i(d.value, !1);
            n("validation", h, e.id), s(h) && (n("update:value", h.value), a.value.lastValidValue = String(h.value ?? "")), n("enter", h);
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
        const d = r.target, h = i(d.value, !1);
        n("validation", h, e.id), s(h) && (n("update:value", h.value), a.value.lastValidValue = String(h.value ?? ""));
      },
      handlePaste: (r) => {
        if (!t.value) return;
        const d = r.clipboardData?.getData("text")?.trim() || "";
        if (e.type === "unitDependent" && e.numberFormat === "fraction") {
          const h = d.replace(/[""'']/g, "").replace(/\s+/g, " ");
          if (!Pl(h)) {
            r.preventDefault(), n("validation", {
              value: h,
              valid: !1,
              message: `Pasted text "${d}" is not a valid fraction format`
            }, e.id);
            return;
          }
          if (h !== d) {
            r.preventDefault();
            const m = r.target;
            m.value = h;
            const P = i(h, !0);
            n("validation", P, e.id), n("input", h);
          }
        }
        n("paste", r);
      }
    },
    processValue: i
  };
}
function rd({
  props: e,
  emit: n,
  isMounted: t
}) {
  const a = G({
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
      return e.numberFormat && (e.numberFormat === "fraction" ? u = String(s) : u = Number(s)), e.options.some((d) => d.value === u) ? {
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
function ud({
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
const cd = ["id", "name", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], dd = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = G(!0), s = G(null), u = F(() => t.value === t.trueValue), {
      handleCheckboxChange: r,
      handleFocus: d,
      handleBlur: h
    } = ud({
      props: t,
      emit: a,
      isMounted: i
    });
    return (m, P) => (A(), K("input", {
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
      onChange: P[0] || (P[0] = //@ts-ignore
      (...O) => E(r) && E(r)(...O)),
      onFocus: P[1] || (P[1] = //@ts-ignore
      (...O) => E(d) && E(d)(...O)),
      onBlur: P[2] || (P[2] = //@ts-ignore
      (...O) => E(h) && E(h)(...O))
    }, null, 40, cd));
  }
}), fd = ["for"], Sa = /* @__PURE__ */ vt({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(e) {
    return (n, t) => (A(), K("label", {
      for: e.id,
      class: "input-label"
    }, [
      Ht(n.$slots, "default", {}, () => [
        nn(Se(e.label), 1)
      ])
    ], 8, fd));
  }
}), Za = /* @__PURE__ */ new Set();
function pd(e) {
  for (const n of Za)
    n !== e && n();
}
function ql(e, n, t = {}, a) {
  const i = G(null);
  if (a) {
    const m = () => {
      a.value && (a.value = !1);
    };
    Qe(a, (P) => {
      P ? (pd(m), Za.add(m)) : Za.delete(m);
    }, { flush: "sync" }), ii(() => {
      Za.delete(m);
    });
  }
  fn(() => {
    const m = e.value;
    i.value = m?.closest("dialog") ?? m?.closest(".smartcut-content") ?? document.body;
  });
  const s = [
    Ol(t.offsetPx ?? 4),
    El({ padding: t.padding ?? 8 }),
    Fl({ padding: t.padding ?? 8 })
  ];
  t.sizeApply && s.push(bu({
    padding: t.padding ?? 8,
    apply: t.sizeApply
  })), t.extraMiddleware && s.push(...t.extraMiddleware);
  const { floatingStyles: u, isPositioned: r } = hl(e, n, {
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
    whileElementsMounted: (m, P, O) => Al(m, P, O, { animationFrame: !0 }),
    // `transform: true` (the default) places the dropdown via
    // `transform: translate()`. We pair it with a short CSS transition
    // on transform in `useFloatingDropdownStyle` below so per-frame
    // position updates ease across small jumps instead of stuttering.
    transform: !0,
    middleware: s
  }), d = F(() => ({
    ...u.value,
    visibility: r.value ? "visible" : "hidden",
    opacity: r.value ? 1 : 0,
    transition: "opacity 80ms ease-out"
  }));
  function h() {
    if (!e.value || !n.value) return;
    const m = getComputedStyle(e.value), P = n.value;
    P.style.font = m.font, P.style.color = m.color;
  }
  return {
    floatingStyles: d,
    teleportTarget: i,
    syncFloatingFont: h
  };
}
const md = ["id", "disabled", "aria-label"], gd = { class: "multiselect__text" }, hd = { class: "multiselect__list" }, vd = ["checked", "disabled", "onChange"], bd = { class: "multiselect__option-label" }, yd = {
  key: 0,
  class: "multiselect__no-results"
}, kd = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = G(!1), s = G(null), u = G(), r = G(), d = G(null), h = G(""), { floatingStyles: m, teleportTarget: P, syncFloatingFont: O } = ql(
      u,
      r,
      {
        sizeApply({ rects: Y, availableWidth: k, availableHeight: M, elements: le }) {
          const ge = Y.reference.width, W = Math.min(k, Math.max(ge, 400));
          Object.assign(le.floating.style, {
            maxHeight: `${Math.max(200, M)}px`,
            minWidth: `${ge}px`,
            maxWidth: `${W}px`
          });
        }
      },
      i
    ), b = F(() => {
      const Y = t.value;
      return Y ? Array.isArray(Y) ? new Set(Y.map(String)) : new Set(String(Y).split(",").filter(Boolean)) : /* @__PURE__ */ new Set();
    }), _ = F(() => t.options.map((Y) => ({
      value: Y.value,
      label: Y.label ?? String(Y.value),
      hidden: Y.hidden ?? !1,
      disabled: Y.disabled ?? !1
    }))), U = F(() => {
      if (!h.value) return _.value;
      const Y = h.value.toLowerCase();
      return _.value.filter(
        (k) => (k.label ?? String(k.value)).toLowerCase().includes(Y)
      );
    }), de = F(() => {
      const Y = b.value.size;
      if (Y === 0) return t.placeholder || "All";
      if (Y === 1) {
        const k = [...b.value][0];
        return _.value.find((le) => String(le.value) === k)?.label || k;
      }
      return `${Y} selected`;
    });
    function q() {
      t.disabled || (i.value = !i.value, i.value && (h.value = "", Mt(() => {
        O(), t.searchable && d.value?.focus();
      })));
    }
    function V(Y) {
      const k = String(Y), M = new Set(b.value);
      M.has(k) ? M.delete(k) : M.add(k), a("update:value", [...M]);
    }
    function fe(Y) {
      const k = Y.target;
      s.value?.contains(k) || r.value?.contains(k) || (i.value = !1);
    }
    return fn(() => document.addEventListener("click", fe)), ii(() => document.removeEventListener("click", fe)), (Y, k) => (A(), K("div", {
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
        onClick: q
      }, [
        be("span", gd, Se(de.value), 1)
      ], 8, md),
      (A(), Ne(ai, {
        to: E(P),
        disabled: !E(P)
      }, [
        i.value ? (A(), K("div", {
          key: 0,
          ref_key: "floatingRef",
          ref: r,
          class: "multiselect__dropdown",
          style: Gt(E(m))
        }, [
          t.searchable ? Qi((A(), K("input", {
            key: 0,
            ref_key: "searchRef",
            ref: d,
            "onUpdate:modelValue": k[0] || (k[0] = (M) => h.value = M),
            type: "text",
            class: "multiselect__search",
            placeholder: "Search...",
            onClick: k[1] || (k[1] = Un(() => {
            }, ["stop"]))
          }, null, 512)), [
            [vl, h.value]
          ]) : ue("", !0),
          be("div", hd, [
            (A(!0), K(It, null, Zt(U.value, (M) => (A(), K("label", {
              key: M.value,
              class: ot(["multiselect__option", { "multiselect__option--zero": M.hidden }])
            }, [
              be("input", {
                type: "checkbox",
                checked: b.value.has(String(M.value)),
                disabled: M.disabled,
                onChange: (le) => V(M.value)
              }, null, 40, vd),
              be("span", bd, Se(M.label), 1)
            ], 2))), 128)),
            t.searchable && U.value.length === 0 ? (A(), K("div", yd, " No matches ")) : ue("", !0)
          ])
        ], 4)) : ue("", !0)
      ], 8, ["to", "disabled"]))
    ], 512));
  }
}), wd = /* @__PURE__ */ sn(kd, [["__scopeId", "data-v-50e58ba3"]]), Sd = ["id", "name", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], xd = ["disabled", "selected"], Pd = {
  key: 0,
  value: " "
}, Id = ["hidden", "value", "disabled"], Cd = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = G(!0), s = G(null), u = F(() => t.options.map((d) => ({
      value: d.value,
      label: d.label?.toUpperCase() ?? d.value?.toString()?.toUpperCase(),
      hidden: d.hidden ?? !1,
      disabled: d.disabled ?? !1
    }))), {
      handleSelectChange: r
    } = rd({
      props: t,
      emit: a,
      isMounted: i
    });
    return (d, h) => (A(), K("select", Kt(d.$attrs, {
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
      onChange: h[0] || (h[0] = //@ts-ignore
      (...m) => E(r) && E(r)(...m))
    }), [
      be("option", {
        value: "",
        disabled: t.selectFirstOptionDisabled,
        selected: !t.value
      }, Se(t.text?.select?.toUpperCase() ?? "SELECT"), 9, xd),
      t.multiEdit ? (A(), K("option", Pd, Se(t.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : ue("", !0),
      (A(!0), K(It, null, Zt(u.value, (m) => (A(), K("option", {
        key: m.value,
        hidden: m.hidden,
        value: m.value,
        disabled: m.disabled
      }, Se(m.label), 9, Id))), 128))
    ], 16, Sd));
  }
}), Ld = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "step", "autocomplete", "aria-label", "aria-invalid", "aria-describedby"], Ja = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = G(!0), s = G(null), {
      handleInput: u,
      handleMouseDown: r,
      handleMouseUp: d,
      handleFocus: h,
      handleBlur: m,
      handleKeydown: P,
      handleCompositionStart: O,
      handleCompositionEnd: b,
      handlePaste: _
    } = od({
      props: t,
      emit: a,
      isMounted: i
    }), U = (de) => {
      const q = de.getBoundingClientRect(), V = window.getComputedStyle(de);
      return q.width > 0 && q.height > 0 && V.display !== "none" && V.visibility !== "hidden";
    };
    return fn(() => {
      lt(t.default) && (t.value === void 0 || t.value === null) && a("update:value", t.default), t.focus && s.value && U(s.value) && Mt(() => s.value.focus());
    }), ni(() => {
      i.value = !1;
    }), (de, q) => (A(), K("input", Kt(de.$attrs, {
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
      onInput: q[0] || (q[0] = //@ts-ignore
      (...V) => E(u) && E(u)(...V)),
      onFocus: q[1] || (q[1] = //@ts-ignore
      (...V) => E(h) && E(h)(...V)),
      onBlur: q[2] || (q[2] = //@ts-ignore
      (...V) => E(m) && E(m)(...V)),
      onKeydown: q[3] || (q[3] = //@ts-ignore
      (...V) => E(P) && E(P)(...V)),
      onCompositionstart: q[4] || (q[4] = //@ts-ignore
      (...V) => E(O) && E(O)(...V)),
      onCompositionend: q[5] || (q[5] = //@ts-ignore
      (...V) => E(b) && E(b)(...V)),
      onPaste: q[6] || (q[6] = //@ts-ignore
      (...V) => E(_) && E(_)(...V)),
      onMousedown: q[7] || (q[7] = //@ts-ignore
      (...V) => E(r) && E(r)(...V)),
      onMouseup: q[8] || (q[8] = //@ts-ignore
      (...V) => E(d) && E(d)(...V))
    }), null, 16, Ld));
  }
}), Od = ["data-field-id"], Ed = {
  key: 0,
  class: "input-label-group"
}, Fd = {
  key: 1,
  class: "password-input-wrapper"
}, Ad = ["aria-label"], Td = {
  key: 2,
  class: "clearable-input-wrapper"
}, Nd = ["aria-label"], $d = ["disabled", "selected"], Md = {
  key: 0,
  value: " "
}, Dd = ["hidden", "value", "disabled"], _d = ["id", "name", "value", "disabled"], Rd = {
  key: 7,
  class: "slider-wrapper"
}, Vd = ["id", "name", "value", "min", "max", "step", "disabled", "readonly"], qd = ["for"], Bd = {
  key: 8,
  class: "clearable-input-wrapper clearable-input-wrapper--textarea"
}, jd = ["id", "name", "value", "placeholder", "disabled", "readonly", "required", "rows", "autocomplete"], Ud = ["aria-label"], Gd = ["id", "name", "value", "placeholder", "disabled", "readonly", "required", "rows", "autocomplete"], Wd = {
  key: 2,
  class: "help-text"
}, zd = /* @__PURE__ */ vt({
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
    const t = n, a = e, i = G(null), s = G(null), u = G(!0), r = G(a.numberFormat), d = G(!1), h = F(() => a.custom ? "custom-" + a.id : a.id), m = F(() => `${h.value}-error`), P = F(() => a.label || a.placeholder), O = F(() => De(a.type, a.numberFormat, d.value)), b = F(() => B(a.type, a.numberFormat)), _ = F(() => typeof a.value == "string" && a.value.length > 0), U = F(() => _.value ? ol(a.value) : "#ffffff"), de = (te) => {
      const we = te.target.value;
      t("update:value", ol(we));
    }, q = () => {
      t("update:value", null);
    }, V = F(() => {
      const te = a.value;
      if (typeof te == "number" && Number.isFinite(te)) return te;
      const we = parseFloat(te);
      return Number.isFinite(we) ? we : typeof a.min == "number" ? a.min : 0;
    }), fe = (te) => {
      const we = te.target.value, _e = parseFloat(we);
      t("update:value", Number.isFinite(_e) ? _e : null);
    }, Y = F(() => ["string", "integer", "float", "unitDependent", "password", "email", "tel"].includes(a.type)), k = F(() => a.value !== null && a.value !== void 0 && a.value !== "");
    function M() {
      const te = Y.value && ["integer", "float", "unitDependent"].includes(a.type) ? null : "";
      t("update:value", te);
    }
    const le = F(() => {
      let te = a.value;
      if (a.multiEdit && (te === 0 || te === 1)) return null;
      if (a.type !== "unitDependent" || !te) return te;
      try {
        return re({ v: te, nf: a.numberFormat });
      } catch {
        return a.numberFormat === "decimal" ? 0 : "0";
      }
    }), ge = F(() => a.options.map((te) => ({
      value: te.value,
      label: te.label || te.value?.toString(),
      hidden: te.hidden || !1,
      disabled: te.disabled || !1
    }))), W = F(() => ge.value.map((te) => {
      const we = te.label ? Ae(te.label) : te.value?.toString();
      return {
        ...te,
        // Translate the label key first, then uppercase the translated result
        label: we?.toUpperCase() || te.value?.toString().toUpperCase()
      };
    })), x = F(() => ({
      input: !0,
      issue: a.issue || !u.value,
      warning: a.warning,
      required: a.required,
      disabled: a.disabled
    })), D = F(() => ({
      id: h.value,
      name: a.name,
      value: a.value,
      disabled: a.disabled,
      readonly: a.readonly,
      required: a.required,
      "aria-label": P.value,
      "aria-invalid": !!a.issue,
      "aria-describedby": a.issue ? m.value : void 0
    })), oe = F(() => ({
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
    })), ie = F(() => ({
      ...D.value,
      trueValue: a.trueValue,
      falseValue: a.falseValue
    })), se = F(() => ({
      ...D.value,
      options: W.value,
      selectFirstOptionDisabled: a.selectFirstOptionDisabled,
      multiEdit: a.multiEdit,
      numberFormat: a.numberFormat,
      text: a.text,
      output: a.output
    })), We = F(() => (a.text?.select || "SELECT").toUpperCase()), Xe = F(() => (a.text?.delete || "DELETE").toUpperCase()), Pe = (te) => {
      s.value = te;
    }, Te = (te) => a.label && a.enableLabel && a.labelPosition === te, De = (te, we, _e) => {
      switch (te) {
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
    }, B = (te, we) => {
      if (te === "unitDependent")
        return we === "fraction" ? "text" : "decimal";
      switch (te) {
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
    }, J = (te) => {
      t("update:value", te);
    }, ke = (te, we) => {
      te.valid === void 0 || te.valid === !0 ? (u.value = !0, t("validation", i.value, te)) : te.valid === !1 && te.message && (u.value = !1, console.warn(`Field validation error for field ${we} - ${te.message}`), t("validation", i.value, te));
    }, Ve = () => {
      t("blur");
    };
    return Qe(() => a.numberFormat, (te, we) => {
      if (a.shouldConvertNumberFormat !== !1) {
        if (a.type === "unitDependent" && te !== we && a.value !== null && a.value !== void 0 && a.value !== "")
          try {
            const _e = re({ v: a.value, nf: te });
            t("update:value", _e);
          } catch {
            t("update:value", te === "decimal" ? 0 : "0");
          }
        r.value = te;
      }
    }), (te, we) => (A(), K("div", {
      ref_key: "fieldRef",
      ref: i,
      class: ot(["input-wrapper", [x.value, te.$attrs.class]]),
      "data-field-id": h.value
    }, [
      e.type === "checkbox" ? (A(), K("div", Ed, [
        Te("first") ? (A(), Ne(Sa, {
          key: 0,
          id: h.value,
          label: e.label,
          required: e.required
        }, {
          default: tn(() => [
            Ht(te.$slots, "label", {}, () => [
              nn(Se(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ue("", !0),
        e.type === "checkbox" ? (A(), Ne(dd, Kt({
          key: 1,
          ref: Pe,
          type: "checkbox"
        }, ie.value, {
          value: e.value,
          "onUpdate:value": we[0] || (we[0] = (_e) => t("update:value", _e))
        }), null, 16, ["value"])) : ue("", !0),
        Te("last") ? (A(), Ne(Sa, {
          key: 2,
          id: h.value,
          label: e.label,
          required: e.required
        }, {
          default: tn(() => [
            Ht(te.$slots, "label", {}, () => [
              nn(Se(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ue("", !0)
      ])) : (A(), K(It, { key: 1 }, [
        Te("first") ? (A(), Ne(Sa, {
          key: 0,
          id: h.value,
          label: e.label,
          required: e.required
        }, {
          default: tn(() => [
            Ht(te.$slots, "label", {}, () => [
              nn(Se(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ue("", !0),
        e.type === "password" ? (A(), K("div", Fd, [
          st(Ja, Kt({ ref: Pe }, oe.value, {
            name: a.name,
            "input-type": O.value,
            "input-mode": b.value,
            value: le.value,
            "disable-required-validation": e.disableRequiredValidation,
            onValidation: ke,
            "onUpdate:value": J,
            onBlur: Ve
          }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"]),
          be("button", {
            type: "button",
            class: "password-toggle c-btn--unstyled",
            "aria-label": d.value ? "Hide password" : "Show password",
            onClick: we[1] || (we[1] = (_e) => d.value = !d.value)
          }, Se(d.value ? "🙈" : "👁"), 9, Ad)
        ])) : Y.value && e.clearable ? (A(), K("div", Td, [
          st(Ja, Kt({ ref: Pe }, oe.value, {
            name: a.name,
            "input-type": O.value,
            "input-mode": b.value,
            value: le.value,
            "disable-required-validation": e.disableRequiredValidation,
            onValidation: ke,
            "onUpdate:value": J,
            onBlur: Ve
          }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"]),
          k.value && !e.disabled && !e.readonly ? (A(), K("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--xs c-btn--unstyled field-clear-btn clearable-input__clear",
            "aria-label": E(Ae)("actions.clear"),
            title: "Clear",
            onClick: M
          }, "×", 8, Nd)) : ue("", !0)
        ])) : Y.value ? (A(), Ne(Ja, Kt({
          key: 3,
          ref: Pe
        }, oe.value, {
          name: a.name,
          "input-type": O.value,
          "input-mode": b.value,
          value: le.value,
          "disable-required-validation": e.disableRequiredValidation,
          onValidation: ke,
          "onUpdate:value": J,
          onBlur: Ve
        }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"])) : e.type === "select" ? (A(), Ne(Cd, Kt({
          key: 4,
          ref: Pe
        }, se.value, {
          name: a.name,
          "onUpdate:value": we[2] || (we[2] = (_e) => t("update:value", _e))
        }), {
          default: tn(() => [
            be("option", {
              value: "",
              disabled: e.selectFirstOptionDisabled,
              selected: !e.value
            }, Se(We.value), 9, $d),
            e.multiEdit ? (A(), K("option", Md, Se(Xe.value), 1)) : ue("", !0),
            (A(!0), K(It, null, Zt(W.value, (_e) => (A(), K("option", {
              key: _e.value,
              hidden: _e.hidden,
              value: _e.value,
              disabled: _e.disabled
            }, Se(_e.label), 9, Dd))), 128))
          ]),
          _: 1
        }, 16, ["name"])) : e.type === "multiselect" ? (A(), Ne(wd, {
          key: 5,
          ref: Pe,
          id: h.value,
          name: a.name,
          value: e.value,
          options: ge.value,
          disabled: e.disabled,
          readonly: e.readonly,
          "aria-label": P.value,
          placeholder: e.placeholder,
          searchable: a.searchable,
          "onUpdate:value": we[3] || (we[3] = (_e) => t("update:value", _e))
        }, null, 8, ["id", "name", "value", "options", "disabled", "readonly", "aria-label", "placeholder", "searchable"])) : e.type === "color" ? (A(), K("input", {
          key: 6,
          id: h.value,
          name: a.name || h.value,
          ref: Pe,
          type: "color",
          value: U.value,
          class: ot({ "color-input--empty": !_.value }),
          disabled: e.disabled,
          onChange: de,
          onContextmenu: Un(q, ["prevent"])
        }, null, 42, _d)) : e.type === "slider" ? (A(), K("div", Rd, [
          be("input", {
            id: h.value,
            name: a.name || h.value,
            ref: Pe,
            type: "range",
            class: "slider-input",
            value: V.value,
            min: a.min ?? 0,
            max: a.max ?? 100,
            step: a.step ?? 1,
            disabled: e.disabled,
            readonly: e.readonly,
            onInput: fe
          }, null, 40, Vd),
          be("output", {
            class: "slider-output",
            for: h.value
          }, Se(V.value), 9, qd)
        ])) : e.type === "textarea" && e.clearable ? (A(), K("div", Bd, [
          be("textarea", {
            id: h.value,
            name: a.name || h.value,
            ref: Pe,
            value: e.value,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            rows: e.rows,
            autocomplete: e.autocomplete,
            onInput: we[4] || (we[4] = (_e) => t("update:value", _e.target.value)),
            onBlur: Ve
          }, null, 40, jd),
          k.value && !e.disabled && !e.readonly ? (A(), K("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--xs c-btn--unstyled field-clear-btn clearable-input__clear",
            "aria-label": E(Ae)("actions.clear"),
            title: "Clear",
            onClick: M
          }, "×", 8, Ud)) : ue("", !0)
        ])) : e.type === "textarea" ? (A(), K("textarea", {
          key: 9,
          id: h.value,
          name: a.name || h.value,
          ref: Pe,
          value: e.value,
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: e.readonly,
          required: e.required,
          rows: e.rows,
          autocomplete: e.autocomplete,
          onInput: we[5] || (we[5] = (_e) => t("update:value", _e.target.value)),
          onBlur: Ve
        }, null, 40, Gd)) : ue("", !0),
        Te("last") ? (A(), Ne(Sa, {
          key: 10,
          id: h.value,
          label: e.label,
          required: e.required
        }, {
          default: tn(() => [
            Ht(te.$slots, "label", {}, () => [
              nn(Se(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ue("", !0)
      ], 64)),
      e.info ? (A(), K("small", Wd, Se(e.info), 1)) : ue("", !0),
      Ht(te.$slots, "default", {}, void 0, !0)
    ], 10, Od));
  }
}), xa = /* @__PURE__ */ sn(zd, [["__scopeId", "data-v-0c816cd2"]]), Kd = {
  key: 0,
  class: "loading-spinner__label"
}, Hd = /* @__PURE__ */ vt({
  __name: "LoadingSpinner",
  props: {
    size: { default: "medium" },
    label: { default: "" },
    block: { type: Boolean, default: !1 },
    fullPage: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (n, t) => (A(), K("div", {
      class: ot(["loading-spinner", [
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
      e.label ? (A(), K("span", Kd, Se(e.label), 1)) : ue("", !0)
    ], 2));
  }
}), Bl = /* @__PURE__ */ sn(Hd, [["__scopeId", "data-v-ef6d8370"]]), Zd = {
  key: 0,
  class: "action-bar"
}, Jd = { class: "add-custom" }, Qd = ["disabled"], Yd = {
  key: 0,
  class: "extras-row"
}, Xd = { class: "c-field-action extras-field-group" }, ef = ["disabled", "title", "onClick"], tf = {
  key: 0,
  class: "price"
}, nf = {
  key: 0,
  class: "formula-price"
}, af = {
  key: 0,
  class: "price-label"
}, sf = /* @__PURE__ */ vt({
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
      loader: () => import("./CatalogueBandingExtra-C4zQCvz5.js"),
      loadingComponent: () => dr(Bl, { size: "small", label: "Loading banding…" }),
      delay: 200
    }), a = Bt(() => import("./ObjectViewer-BvG3JkRw.js")), i = !1, s = e, u = F(() => (s.extraType === "banding" || s.extraType === "finish" || s.extraType === "planing") && !!s.catalogueKey), r = n, {
      mode: d,
      shouldShowAll: h,
      supportsFaces: m,
      supportsSides: P,
      canDelete: O,
      getLocationLabel: b,
      getInputType: _,
      getInputConfigForLocation: U,
      getSelectOptions: de,
      getPriceDisplay: q,
      getCalculatedPrice: V,
      shouldShowDeleteButton: fe,
      getLocationGroup: Y,
      isLocationVisible: k,
      handleInputChange: M,
      handleDelete: le
    } = zu({
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
      newCustomName: ge,
      canAddCustomName: W,
      isActionMenuDisabled: x,
      customNameActions: D,
      handleAddCustomName: oe,
      handleCustomNameAction: ie
    } = Gu({
      extraType: s.extraType,
      customNames: Wt(s, "customNames"),
      usedNames: Wt(s, "usedNames"),
      allowCustomNames: s.allowCustomNames,
      getSelectOptions: de,
      onCustomNameAdded: (X) => r("custom-name-added", s.extraType, X),
      onCustomNameDeleted: (X) => r("custom-name-deleted", s.extraType, X)
    }), {
      renderLocations: se,
      getInputId: We,
      getDeleteConfig: Xe
    } = Wu({
      extraType: s.extraType,
      allOptions: s.allOptions,
      labels: s.labels,
      shapeIndex: s.shapeIndex || 0,
      enablePricing: s.enablePricing,
      shouldShowAll: h,
      getInputType: _,
      getInputConfig: (X, Le) => U(X, Le),
      getAllInputConfig: (X) => U("all", X),
      getInputConfigForLocation: U,
      canDelete: O,
      getLocationLabel: b,
      shouldShowDeleteButton: fe,
      locations: Wt(s, "locations"),
      locationGroups: Wt(s, "locationGroups"),
      shape: Wt(s, "shape"),
      orientationModel: s.orientationModel
    }), Pe = G(!1), Te = G(null), De = G("auto"), B = F(() => `${se.value.filter((Le) => k(Le)).map((Le) => b(Le)).join("|")}::${JSON.stringify(s.allOptions)}`), J = (X) => [...X.querySelectorAll(":scope > .c-field-action > .input-wrapper")], ke = async () => {
      const X = Te.value;
      if (!X) return;
      const Le = [...X.querySelectorAll(".extras-row")];
      De.value = "auto", Le.forEach((et) => J(et).forEach((dt) => dt.style.removeProperty("--col-w"))), await Mt();
      let ze = 0;
      X.querySelectorAll(".extras-location-label").forEach((et) => {
        ze = Math.max(ze, et.offsetWidth);
      }), ze > 0 && (De.value = `${Math.ceil(ze)}px`);
      const Fe = [], at = Le.map(J);
      at.forEach((et) => et.forEach((dt, ft) => {
        Fe[ft] = Math.max(Fe[ft] ?? 0, dt.offsetWidth);
      })), at.forEach((et) => et.forEach((dt, ft) => {
        dt.style.setProperty("--col-w", `${Math.ceil(Fe[ft])}px`);
      }));
    };
    Qe(B, () => {
      ke();
    }, { flush: "post" });
    const Ve = F(() => (X) => {
      const Le = Y(X);
      return Le === "all" || Le === "faces" || Le === "sides";
    }), te = F(() => (X) => aa(s.extraType).includes(X) ? Pa(X) === "face" : !1), we = F(() => (X) => aa(s.extraType).includes(X) ? Pa(X) === "side" : !1), _e = (X) => {
      const Le = q(X);
      return !!Le && Le !== "N/A";
    };
    function kt(X) {
      const ze = s.shape?.extras?.[s.extraType];
      if (!ze) return null;
      if (X.startsWith("side.")) {
        const Fe = X.replace(/^side\./, ""), at = ze.sides?.[Fe];
        return typeof at == "string" && at ? at : null;
      }
      if (X.startsWith("face.")) {
        const Fe = X.replace(/^face\./, ""), at = ze.faces?.[Fe];
        return typeof at == "string" && at ? at : null;
      }
      return null;
    }
    const rt = (X) => {
      const Le = kt(X);
      if (!Le) return null;
      const ze = s.formulas?.[Le];
      if (!ze) return null;
      const Fe = Number(s.shape?.l) || 0, at = Number(s.shape?.w) || 0, et = Number(s.shape?.t) || 0, dt = Number(s.shape?.q) || 1, ft = { partL: Fe, partW: at, partT: et, partQuantity: dt }, pt = {}, pn = s.extraType === "banding" ? Tc : s.extraType === "finish" ? _c : s.extraType === "planing" ? jc : [];
      for (const it of pn)
        it.startsWith("order.") && (pt[it] = 0);
      if (s.extraType === "banding" && X.startsWith("side.")) {
        const it = X.replace(/^side\./, "");
        return Sc(Pc(it, it === "l1" || it === "l2" ? Fe : at, ft, pt), ze);
      }
      if (s.extraType === "finish" && X.startsWith("face.")) {
        const it = X.replace(/^face\./, "");
        return xc(Ic(it, Fe * at, ft, pt), ze);
      }
      if (s.extraType === "planing") {
        if (X.startsWith("face.")) {
          const it = X.replace(/^face\./, "");
          return il(sl(`face.${it}`, Fe * at, 0, 1, ft, pt), ze);
        }
        if (X.startsWith("side.")) {
          const it = X.replace(/^side\./, ""), on = it === "l1" || it === "l2" ? Fe : at;
          return il(sl(`side.${it}`, 0, on, 0, ft, pt), ze);
        }
      }
      return null;
    }, Qt = (X) => {
      const Le = rt(X);
      return typeof Le == "number" && Number.isFinite(Le);
    }, ut = (X) => s.formatPrice ? s.formatPrice(X) : X.toFixed(2), ln = (X) => {
      const Le = V(X);
      return typeof Le == "number" && Number.isFinite(Le) ? Le : void 0;
    }, Yt = (X) => {
      if (aa(s.extraType).includes(X))
        return js(s.shape, X).quantity;
    }, wn = (X) => aa(s.extraType).includes(X) ? js(s.shape, X).unit : "m", ct = F(() => (X) => s.shape.issues?.some((Le) => Le.category?.includes("extras") && Le.field?.some((ze) => ze[0] === "extras" && ze[1] === s.extraType && ze[2] === X)) ?? !1);
    return fn(() => {
      const Le = s.shape.extras?.[s.extraType];
      if (!Le || typeof Le != "object") {
        Pe.value = !0, console.error(`Missing or invalid ${s.extraType} in shape`);
        return;
      }
      if (m.value && !("faces" in Le)) {
        Pe.value = !0, console.error(`Missing faces property in ${s.extraType}`);
        return;
      }
      if (P.value && !("sides" in Le)) {
        Pe.value = !0, console.error(`Missing sides property in ${s.extraType}`);
        return;
      }
      ke();
    }), (X, Le) => {
      const ze = oa("Icon");
      return Pe.value ? ue("", !0) : (A(), K("div", {
        key: 0,
        class: ot(["extras group", [e.extraType]]),
        style: Gt({ "grid-column-end": "span " + e.partColumns })
      }, [
        e.allowCustomNames ? (A(), K("div", Zd, [
          be("div", Jd, [
            st(Ja, {
              id: `${e.extraType}-custom-input-${e.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: E(ge),
              placeholder: `Add ${e.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": Le[0] || (Le[0] = (Fe) => ge.value = Fe || ""),
              onKeydown: cr(E(oe), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            be("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !E(W),
              onClick: Le[1] || (Le[1] = //@ts-ignore
              (...Fe) => E(oe) && E(oe)(...Fe))
            }, " Add ", 8, Qd)
          ]),
          st(Zc, {
            "menu-items": E(D),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: E(x),
            onAction: E(ie)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : ue("", !0),
        u.value ? (A(), Ne(E(t), {
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
        }, null, 8, ["shape", "shape-index", "extra-type", "catalogue-key", "extra-id", "extra-name", "locations", "price-per-length", "pricing", "price-label", "format-price", "max-gap", "per-side", "orientation-model", "debug"])) : (A(), K("div", {
          key: 2,
          ref_key: "gridRef",
          ref: Te,
          class: ot(["inputs extras-grid grid-layout", { "has-pricing": e.enablePricing }]),
          style: Gt({ "--extras-label-w": De.value })
        }, [
          (A(!0), K(It, null, Zt(E(se), (Fe) => (A(), K(It, { key: Fe }, [
            E(k)(Fe) ? (A(), K("div", Yd, [
              be("div", Xd, [
                be("label", {
                  class: ot(["extras-location-label", {
                    "group-label": Ve.value(Fe),
                    "face-label": te.value(Fe),
                    "side-label": we.value(Fe),
                    "has-validation-issue": ct.value(Fe)
                  }])
                }, Se(E(b)(Fe)), 3),
                (A(!0), K(It, null, Zt(e.allOptions, (at, et) => (A(), Ne(xa, Kt({
                  key: `${Fe}-${et}`,
                  id: E(We)(Fe, et),
                  "data-field": `${e.extraType}-${Fe}`,
                  "data-index": e.shapeIndex,
                  "data-option-index": et
                }, { ref_for: !0 }, E(U)(Fe, et), {
                  "onUpdate:value": (dt) => E(M)(Fe, et, dt)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"]))), 128)),
                E(Xe)(Fe).show ? (A(), K("button", {
                  key: 0,
                  type: "button",
                  class: "c-btn c-btn--delete",
                  disabled: !E(Xe)(Fe).enabled,
                  title: E(Xe)(Fe).ariaLabel,
                  onClick: (at) => E(le)(Fe)
                }, [
                  st(ze, { icon: ["fass", "trash"] })
                ], 8, ef)) : ue("", !0)
              ]),
              e.enablePricing ? (A(), K("div", tf, [
                Qt(Fe) ? (A(), K("span", nf, [
                  nn(Se(ut(rt(Fe))), 1),
                  e.priceLabel ? (A(), K("span", af, Se(e.priceLabel), 1)) : ue("", !0)
                ])) : _e(Fe) ? (A(), Ne(ad, {
                  key: 1,
                  "price-per-unit": ln(Fe),
                  quantity: Yt(Fe),
                  "quantity-unit": wn(Fe),
                  "price-label": e.priceLabel,
                  "format-price": s.formatPrice
                }, null, 8, ["price-per-unit", "quantity", "quantity-unit", "price-label", "format-price"])) : ue("", !0)
              ])) : ue("", !0)
            ])) : ue("", !0)
          ], 64))), 128))
        ], 6)),
        s.debug || i ? (A(), Ne(E(a), {
          key: 3,
          title: `${e.extraType} debug`,
          data: [{
            extraType: e.extraType,
            mode: E(d),
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
}), lf = /* @__PURE__ */ sn(sf, [["__scopeId", "data-v-d50e6e8d"]]);
function Vt(e) {
  return typeof e == "string" && e.trim().length > 0 ? e.trim() : "";
}
function of(e) {
  const t = (Array.isArray(e.availableThicknesses) && e.availableThicknesses.length > 0 ? e.availableThicknesses : Array.isArray(e.t) ? e.t : e.t != null ? [e.t] : []).map((a) => typeof a == "number" ? a : Number(a)).filter((a) => Number.isFinite(a));
  return [...new Set(t)].sort((a, i) => a - i);
}
function jl(e, n, t, a, i) {
  const s = [], h = (!!i && !!e && e.toUpperCase() === i.toUpperCase() ? "" : e) || (n && !!i ? "" : a);
  if (n && s.push(n), h) {
    const m = n.toLowerCase(), P = h.toLowerCase();
    n && m.includes(P) || (n && P.startsWith(m + " ") ? s.push(h.slice(n.length).trimStart()) : s.push(h));
  }
  if (t) {
    const m = t.toLowerCase(), P = m.split(/\s+/)[0] ?? "", O = `${n} ${h}`.toLowerCase();
    !(O.includes(m) || P && O.split(/\s+/).includes(P)) && (h || n) && s.push(t);
  }
  return s;
}
function rf(e, n, t, a, i, s, u, r) {
  const d = [];
  n && d.push(n);
  const h = jl(e, t, a, i, s);
  for (const m of h)
    (!n || !n.toLowerCase().includes(m.toLowerCase())) && d.push(m);
  return d.length > 0 ? d.join(" ") : u || r;
}
function uf(e, n, t, a, i, s, u) {
  const r = jl(e, n, t, a, i);
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
  const a = Vt(e.name), i = Vt(e.brand) || Vt(n.inheritFrom?.brand), s = Vt(e.material) || Vt(n.inheritFrom?.material), u = Vt(e.variant) || Vt(n.inheritFrom?.variant), r = Vt(e.finish), d = Vt(e.code), h = Vt(e.displayName), m = [i, s].filter(Boolean).join(" · ");
  let P;
  m && u ? P = `${m} → ${u}` : m ? P = m : u && (P = u);
  let O;
  a ? O = a : d ? O = d : u && !s && !i ? O = u : s && !u ? O = s : i && !u && !s ? O = i : O = t;
  const b = rf(
    a,
    i,
    u,
    r,
    s,
    d,
    h,
    t
  ), _ = uf(
    a,
    u,
    r,
    s,
    d,
    h,
    t
  ), U = (() => {
    if (d && !(!a && d.toUpperCase() === O.toUpperCase()) && d.toUpperCase() !== _.toUpperCase())
      return d;
  })(), de = `${i.toUpperCase()}|${u.toUpperCase()}|${(a || s).toUpperCase()}`, q = Vt(e.shortDescription) || Vt(e.description) || void 0, V = Vt(e.imageUrl) || void 0;
  return {
    hierarchy: P,
    name: O,
    code: U,
    fullLabel: b,
    productLabel: _,
    groupKey: de,
    brand: i || void 0,
    material: s || void 0,
    variant: u || void 0,
    finish: r || void 0,
    description: q,
    imageUrl: V,
    thicknesses: of(e)
  };
}
let jt = null;
function cf(e, n) {
  return jt = ff(e, n), jt;
}
function df(e) {
  if (!jt) throw new Error("Pagination not initialized");
  return {
    items: F(() => jt.getItems(e)),
    currentPage: F(() => jt.getCurrentPage(e)),
    currentIndex: F(() => jt.getCurrentIndex(e)),
    totalPages: F(() => jt.paginatedArrays.value.get(e)?.totalPages || 0),
    itemsPerPage: F(() => jt.getItemsPerPage(e)),
    resetPagination: () => jt.resetPagination(e),
    nextPage: () => jt.nextPage(e),
    previousPage: () => jt.previousPage(e),
    goToPage: (n) => jt.goToPage(e, n),
    setItemsPerPage: (n) => jt.setItemsPerPage(e, n)
  };
}
function qg(e, n) {
  const t = df(e);
  return t.setItemsPerPage(n), t;
}
function ff(e, n) {
  const t = /* @__PURE__ */ new Map(), a = G({}), i = (k, M) => {
    if ("value" in M) {
      const le = n[k]?.alwaysInclude;
      Qe(
        () => {
          const ge = M.value;
          return le ? ge.filter((W) => !le(W)).length : ge.length;
        },
        (ge, W) => {
          const x = a.value[k];
          if (!x) return;
          const D = Math.ceil(ge / x.itemsPerPage);
          if (ge > W) {
            const oe = Math.ceil(ge / x.itemsPerPage), ie = x.currentPage * x.itemsPerPage;
            ge > ie && x.currentPage < oe && (x.currentPage = oe);
          } else ge < W && x.currentPage > D && (x.currentPage = Math.max(1, D));
        },
        { immediate: !1 }
      );
    }
  };
  Object.entries(e).forEach(([k, M]) => {
    const le = n[k];
    if (!le)
      throw new Error(`Missing pagination options for array: ${k}`);
    t.set(k, M), a.value[k] = {
      currentPage: le.initialPage || 1,
      itemsPerPage: le.itemsPerPage
    }, i(k, M);
  });
  const s = (k, M) => {
    const le = a.value[k];
    if (!le) return;
    const ge = u(k);
    le.currentPage = Math.max(1, Math.min(M, ge));
  }, u = (k) => {
    const M = t.get(k);
    if (!M) return 0;
    const le = E(M), ge = a.value[k];
    if (!ge) return 0;
    const W = n[k], x = W?.alwaysInclude ? le.filter((D) => !W.alwaysInclude(D)) : le;
    return Math.max(1, Math.ceil(x.length / ge.itemsPerPage));
  }, r = F(() => {
    const k = /* @__PURE__ */ new Map();
    return t.forEach((M, le) => {
      const ge = E(M), W = Array.isArray(ge) ? ge : [], x = a.value[le], D = n[le], oe = D?.alwaysInclude ? W.filter(D.alwaysInclude) : [], ie = D?.alwaysInclude ? W.filter((Te) => !D.alwaysInclude(Te)) : W, se = Math.ceil(ie.length / x.itemsPerPage), We = (x.currentPage - 1) * x.itemsPerPage, Xe = We + x.itemsPerPage, Pe = [
        ...oe,
        ...ie.slice(We, Xe)
      ];
      k.set(le, {
        items: Pe,
        currentPage: x.currentPage,
        totalPages: se,
        isLastPage: x.currentPage >= se,
        hasNextPage: x.currentPage < se,
        hasPreviousPage: x.currentPage > 1
      });
    }), k;
  });
  return {
    paginatedArrays: r,
    addArray: (k, M, le) => {
      t.set(k, M), a.value[k] = {
        currentPage: le.initialPage || 1,
        itemsPerPage: le.itemsPerPage
      }, n[k] = le, i(k, M);
    },
    removeArray: (k) => {
      t.delete(k);
      const M = { ...a.value };
      delete M[k], a.value = M;
    },
    hasArray: (k) => t.has(k),
    clearArrays: () => {
      t.clear(), a.value = {};
    },
    goToPage: s,
    nextPage: (k) => {
      const M = a.value[k];
      M && s(k, M.currentPage + 1);
    },
    previousPage: (k) => {
      const M = a.value[k];
      M && s(k, M.currentPage - 1);
    },
    resetPagination: (k) => {
      if (k) {
        const M = a.value[k];
        M && (M.currentPage = 1);
      } else
        Object.values(a.value).forEach((M) => {
          M.currentPage = 1;
        });
    },
    getCurrentPage: (k) => a.value[k]?.currentPage || 1,
    getCurrentIndex: (k) => {
      const M = a.value[k];
      return M ? (M.currentPage - 1) * M.itemsPerPage : 0;
    },
    getItemsPerPage: (k) => {
      const M = a.value[k];
      if (!M) throw new Error(`No pagination state found for key: ${k}`);
      return M.itemsPerPage;
    },
    setItemsPerPage: (k, M) => {
      const le = a.value[k];
      le && (le.itemsPerPage = M, s(k, le.currentPage));
    },
    getStartIndex: (k) => {
      const M = a.value[k];
      return M ? (M.currentPage - 1) * M.itemsPerPage : 0;
    },
    getItems: (k) => r.value.get(k)?.items || []
  };
}
const ul = G({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function Ul() {
  return {
    progress: ul,
    reset: () => {
      ul.value = {
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
let ja = null;
function pf() {
  const e = G(null), n = G(null), t = G(null), a = Xn([]), i = Xn([]), s = Xn([]), u = Xn([]), r = G([]), d = G(null), h = Xn([]), m = G(null), P = G(null), O = G({});
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
    metadata: d,
    unusableShapes: h,
    currentCutIndex: m,
    activeShape: P,
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
      unusableShapes: h,
      metadata: d,
      currentCutIndex: m,
      cuttingPlans: O
    }
  };
}
function mf() {
  if (ja) return ja;
  const e = pf(), n = F(() => e.activeStockAutoId.value ? ie(e.activeStockAutoId.value) : []), t = F(() => !e.activeStockAutoId.value || !e.stockList.value?.length ? null : oe(e.activeStockAutoId.value)), a = F(() => !t.value || !e.cutList.value?.length ? [] : We(t.value.autoId)), i = F(() => !t.value || !e.segmentList.value?.length ? [] : se(e.activeStockAutoId.value)), s = F(() => e.stockList.value?.length ? Xe(e.stockList.value) : []), u = F(() => e.shapeList.value.filter((B) => B.added)), r = F(() => e.shapeList.value?.length ? e.shapeList.value.filter((B) => !B.added) : []), d = F(() => e.shapeList.value?.length ? yu(e.shapeList.value) : []), h = F(() => e.shapeList.value?.length ? e.shapeList.value.filter((B) => !B.duplicate) : []), m = F(() => h.value.filter((B) => B.added)), P = F(() => e.stockList.value?.length ? e.stockList.value.filter((B) => B.used && !B.duplicate) : []), O = F(() => P.value.filter((B) => B.used)), b = F(() => e.cutList.value?.length ? a.value.reduce((B, J) => B + J.area, 0) : 0), _ = F(() => !e.stockList.value?.length || !t.value ? 0 : t.value ? t.value.area : 0), U = F(() => !e.shapeList.value?.length || !n.value ? 0 : n.value ? n.value.reduce((B, J) => B + J.area, 0) : 0), de = F(() => !e.cutList.value?.length || !t.value ? null : t.value.cutType), q = F(() => e.stockList.value?.length ? e.stockList.value.filter((J) => J.used && !J.isStacked) : []), V = F(() => e.stockList.value?.length ? Tl(t.value, e.stockList.value) : 0), fe = F(() => {
    if (!e.stockList.value?.length) return 0;
    let B = _.value ? (b.value + U.value) / _.value : null;
    return B > 1 && (B = 1), B;
  }), Y = F(() => e.activeStockAutoId.value && e.cuttingPlans.value?.[e.activeStockAutoId.value] || null), k = () => {
    e.saw.value = null, e.shapeList.value.length = 0, e.stockList.value.length = 0, e.cutList.value.length = 0, e.segmentList.value.length = 0, e.offcuts.value.length = 0, e.unusableShapes.value.length = 0, e.currentCutIndex.value = null;
  }, M = () => {
    e.saw.value = null, e.activeStockAutoId.value = null, e.activeShape.value = null, e.metadata.value = null, e.shapeList.value = [], e.stockList.value = [], e.cutList.value = [], e.segmentList.value = [], e.offcuts.value = [], e.currentCutIndex.value = null, e.unusableShapes.value = [], e.cuttingPlans.value = {};
  }, le = (B, J) => {
    B in this && this[B]?.sort(Ar[J]);
  }, ge = (B) => {
    tt(B);
  }, W = () => {
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
      B?.saw && (e.saw.value = new Vi(B.saw));
      const J = Fu(B, {
        preventAutoRotation: !0
      });
      e.stockList.value = J.stockList, e.shapeList.value = J.shapeList, e.cutList.value = J.cutList, e.segmentList.value = J.segmentList, e.offcuts.value = J.offcuts, e.cuttingPlans.value = B.cuttingPlans || {}, ["saw", "stockList", "shapeList", "cutList", "segmentList"].forEach((Ve) => tt(e[Ve])), e.activeStockAutoId.value = Xe(e.stockList.value)?.[0]?.autoId || null;
    } catch (J) {
      console.error("Error updating from result", J);
    }
  }, oe = (B) => e.stockList.value?.length ? e.stockList.value.find((J) => J.autoId === B) : null, ie = (B) => e.shapeList.value?.length ? e.shapeList.value.filter((J) => J.added && J?.stock?.autoId === B) : [], se = (B) => e.segmentList.value?.length ? e.segmentList.value.filter((ke) => ke?.stock?.autoId === B) : [], We = (B) => {
    const J = e?.cutList?.value;
    return !J && !J.length ? [] : J.filter((ke) => ke?.stock?.autoId === B).sort((ke, Ve) => ke?.guillotineState?.order - Ve?.guillotineState?.order);
  }, Xe = (B) => B?.length ? B.filter((J) => J.used === !0) : [], Pe = (B) => {
    e.activeStockAutoId.value !== B && (e.activeShape.value = null, e.activeStockAutoId.value = B);
  }, Te = (B) => B.id.endsWith(".0") ? B.autoId : e.shapeList.value.find((ke) => ke.parentId === B.parentId && ke.id.endsWith(".0"))?.autoId || B.autoId, De = () => {
    e.saw.value = new Vi({
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
    }, J = new Tr(B), ke = new Us({
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
    const Ve = new Us({
      l: 400,
      w: 400,
      t: 18,
      q: 1,
      x: 500,
      y: 0,
      added: !0,
      id: "2.0"
    });
    Ve.addToStock(J);
    const te = (rt) => ({
      ptxData: {
        function: 1,
        order: rt,
        isDummy: !1,
        isFirst: rt === 0,
        isLast: !1,
        technologyTable: "01"
      }
    }), _e = [
      { x: 0, y: 0, l: 500, vertical: !0, stock: J, ...te(0) },
      { x: 500, y: 0, l: 500, vertical: !1, stock: J, ...te(1) },
      { x: 500, y: 500, l: 400, vertical: !0, stock: J, ...te(2) },
      { x: 900, y: 500, l: 400, vertical: !1, stock: J, ...te(3) }
    ].map((rt) => new Nr(rt)), kt = new $r({
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
    e.stockList.value = [J], e.shapeList.value = [ke, Ve], e.cutList.value = _e, e.offcuts.value = [kt], e.activeStockAutoId.value = J.autoId;
  };
  return ja = {
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
    uniqueShapes: h,
    uniqueAddedShapes: m,
    unplacedShapeTally: d,
    uniqueStock: P,
    uniqueUsedStock: O,
    activeStock: t,
    activeCuts: a,
    activeCutsArea: b,
    activeCutType: de,
    usedStock: s,
    stackedStock: q,
    activeStockArea: _,
    activeShapeArea: U,
    activeStockStackCount: V,
    activeTotalArea: fe,
    activeSegments: i,
    cuttingPlan: Y,
    // methods
    reset: k,
    clear: M,
    createTestData: De,
    sortItems: le,
    update: ge,
    updateShapes: W,
    updateStock: x,
    updateFromResult: D,
    getStock: oe,
    getShapes: ie,
    getSegments: se,
    getCuts: We,
    setActiveStockAutoId: Pe,
    getInputAutoId: Te
  }, ja;
}
const gf = ru(() => $({
  // Full stock - purchase entire sheet without cutting (first field after ID)
  fullStock: vn(ae().default(!1), {
    label: "fields.fullStock",
    propertyPath: "fullStock",
    group: "properties",
    order: -1
  }),
  // Material field
  material: vn(c().optional(), {
    label: "fields.material",
    placeholder: "fields.material",
    propertyPath: "material",
    output: "string",
    group: "properties",
    order: 0
  }),
  // Thickness field
  t: vn(Ze([S(), c()]).optional(), {
    label: "fields.t",
    propertyPath: "t",
    group: "dimensions",
    order: 0,
    allowZero: !1
  }),
  // Length field
  l: Gs({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !1
  }),
  // Width field
  w: Gs({
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
  name: Mr({
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
    type: c().optional(),
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
    operations: ne(xe()).optional()
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
function hf(e) {
  const n = gf._def.getter();
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
class vf {
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
        const h = this.generateTrimFields(r);
        a.push(...h);
        continue;
      }
      const d = this.extractFieldMetadata(u, r);
      d && a.push(d);
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
      const d = {
        name: n,
        type: a.type || this.getFieldType(i),
        label: a.label || this.formatLabel(n),
        description: a.description,
        required: !this.isOptional(t),
        defaultValue: a.defaultValue ?? this.getDefaultValue(t),
        ...a
      };
      return this.extractTypeSpecificMetadata(d, i), d;
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
    if (t instanceof Zs) {
      const a = t._def?.options || [];
      for (const i of a)
        if (i instanceof sa)
          return this.isIntegerNumber(i) ? "integer" : "number";
    }
    return t instanceof sa ? this.isIntegerNumber(t) ? "integer" : "number" : t instanceof uu ? "string" : t instanceof cu ? "boolean" : t instanceof Js || t._def?.typeName === "ZodNativeEnum" ? "enum" : t instanceof du ? "array" : t instanceof qa ? "object" : "string";
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
      let r, d, h = !0;
      if (u.kind)
        r = u.kind, d = u.value, h = u.inclusive !== void 0 ? u.inclusive : !0;
      else if (u?._zod?.def) {
        const m = u._zod.def;
        r = m.check, d = m.value, h = m.inclusive !== void 0 ? m.inclusive : !0;
      } else
        continue;
      if (r === "min" || r === "greater_than")
        n.min === void 0 && (n.min = r === "greater_than" && !h ? d + 1e-6 : d, n.allowZero = n.min === 0);
      else if (r === "max" || r === "less_than")
        n.max === void 0 && (n.max = r === "less_than" && !h ? d - 1e-6 : d);
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
    if (t instanceof Zs) {
      const a = t._def?.options || [];
      for (const i of a)
        if (i instanceof sa) {
          this.extractNumberConstraints(n, i), n.type = "number";
          break;
        }
    } else t instanceof sa && this.extractNumberConstraints(n, t);
    if (!n.options) {
      if (t instanceof Js) {
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
        const [u, r] = s.split(":").map((d) => d.trim());
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
    if (n instanceof Ii || n instanceof Ci)
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
    return n._def?.typeName === "ZodEffects" ? this.isOptional(n._def?.schema) : n instanceof Li ? this.isOptional(n._def?.innerType) : !1;
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
    if (n instanceof Ii || n instanceof Ci)
      return this.unwrapField(n._def?.innerType);
    if (n instanceof Li || a === "ZodDefault")
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
    if (n instanceof Li) {
      const t = n._def?.defaultValue;
      return typeof t == "function" ? t() : t;
    }
    if (n.constructor?.name === "ZodPipe" || n._def?.type === "pipe") {
      const t = n._def?.in;
      if (t)
        return this.getDefaultValue(t);
    }
    if (n instanceof Ii || n instanceof Ci) {
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
    return n instanceof qa;
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
        fields: s.sort((r, d) => (r.order || 999) - (d.order || 999))
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
    if (t instanceof qa) {
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
    if (!(a instanceof qa))
      return t;
    const i = a.shape, s = ["l1", "l2", "w1", "w2"];
    for (const u of s)
      if (u in i) {
        const r = i[u], d = this.extractFieldMetadata(`trim.${u}`, r);
        d && (d.propertyPath = `trim.${u}`, d.name = `trim.${u}`, d.group || (d.group = "trim"), t.push(d));
      }
    return t;
  }
}
const cl = new vf();
function bf(e, n = {}) {
  const t = G([]), a = G([]), i = G(/* @__PURE__ */ new Map()), s = G(/* @__PURE__ */ new Map()), u = (b) => {
    let _ = cl.generateFields(e);
    n.overrides && (_ = _.map((de) => {
      const q = n.overrides[de.name];
      if (q) {
        const V = { ...de, ...q };
        return q.min === void 0 && de.min !== void 0 && (V.min = de.min), q.max === void 0 && de.max !== void 0 && (V.max = de.max), V;
      }
      return de;
    })), s.value.clear();
    for (const de of _)
      s.value.set(de.name, de);
    const U = b || n.allowedFieldIds;
    if (U && U.length > 0) {
      const de = U, q = /* @__PURE__ */ new Map();
      for (const fe of _)
        q.set(fe.name, fe);
      const V = [];
      for (const fe of de) {
        const Y = q.get(fe);
        Y && V.push(Y);
      }
      _ = V;
    }
    n.filter && (_ = _.filter(n.filter)), t.value = _, i.value.clear();
    for (const de of _)
      i.value.set(de.name, de);
    n.grouped && (a.value = cl.groupFields(_));
  };
  u();
  const r = (b) => i.value.get(b), d = (b) => s.value.get(b), h = () => s.value, m = (b, _) => {
    const U = i.value.get(b);
    U && Object.assign(U, _);
  }, P = (b) => {
    const _ = r(b);
    return !(!_ || _.hidden);
  }, O = (b) => {
    const _ = r(b);
    if (!_) return {};
    const U = {};
    return _.required && (U.required = !0), _.type === "number" && (_.min !== void 0 && (U.min = _.min), _.max !== void 0 && (U.max = _.max)), U;
  };
  return {
    fields: F(() => t.value),
    groups: F(() => a.value),
    fieldMap: F(() => i.value),
    allFieldsMap: F(() => s.value),
    getField: r,
    getFieldMetadata: d,
    getAllFieldMetadata: h,
    updateField: m,
    isFieldVisible: P,
    getFieldValidation: O,
    regenerateFields: u
  };
}
function yf(e) {
  const { stockType: n, materials: t = [], minDimension: a = 0 } = e, i = hf(n), s = {
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
  }), bf(i, {
    ...e,
    overrides: { ...s, ...e.overrides }
  });
}
const { progress: nt, reset: Ua } = Ul(), cs = "sc:inflight-job", kf = 2 * 3600 * 1e3;
function dl(e, n) {
  try {
    localStorage.setItem(cs, JSON.stringify({ jobId: e, socketId: n, queuedAt: Date.now() }));
  } catch {
  }
}
function ta() {
  try {
    localStorage.removeItem(cs);
  } catch {
  }
}
function Qn() {
  try {
    const e = localStorage.getItem(cs);
    if (!e) return null;
    const n = JSON.parse(e);
    return !n?.jobId || Date.now() - n.queuedAt > kf ? (ta(), null) : n;
  } catch {
    return null;
  }
}
function wf(e) {
  const n = "https://api.cutlistevo.com/", t = "https://api.cutlistevo.com/";
  let a, i = null;
  const s = () => {
    a = fu(n, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), a.on("connect", () => {
      e.refs?.connected && (e.refs.connected.value = !0);
      const m = Qn();
      m && !nt.value.complete && (i = m.jobId, nt.value.reattaching = !0, a.emit("reattach", m.jobId)), e.callbacks?.onConnect?.();
    }), a.on("connect_error", (m) => {
      e.refs?.connected && (e.refs.connected.value = !1), !nt.value.complete && Qn() ? nt.value.reattaching = !0 : e.refs?.thinking && (e.refs.thinking.value = !1), e.callbacks?.onConnectError?.(m);
    }), a.on("connect_timeout", (m) => {
      e.refs?.connected && (e.refs.connected.value = !1), !nt.value.complete && Qn() ? nt.value.reattaching = !0 : e.refs?.thinking && (e.refs.thinking.value = !1), e.callbacks?.onConnectError?.(m);
    }), a.on("disconnect", () => {
      e.refs?.connected && (e.refs.connected.value = !1), !nt.value.complete && Qn() && (nt.value.reattaching = !0), e.callbacks?.onDisconnect?.();
    }), a.on("result", (m) => {
      nt.value.complete = !0, nt.value.reattaching = !1, ta(), i = null, e.callbacks?.onResult?.(m), a.disconnect();
    }), a.on("queued", (m) => {
      Ua(), nt.value.queued = !0, m && (i = m, dl(m, a.id ?? null));
    }), a.on("jobInProgess", (m) => {
      m && (i = m, dl(m, a.id ?? null), nt.value.queued = !0, nt.value.reattaching = !0, a.emit("reattach", m));
    }), a.on("reattached", () => {
      nt.value.reattaching = !1, nt.value.queued = !0;
    }), a.on("reattach-stale", (m) => {
      nt.value.reattaching = !1, ta(), i = null, Ua(), e.callbacks?.onStale?.(m?.jobId);
    }), a.on("cancelled", () => {
      nt.value.reattaching = !1, ta(), i = null, Ua();
    }), a.on("started", () => {
      nt.value.started = !0, nt.value.reattaching = !1;
    }), a.on("progress", (m) => {
      nt.value.reattaching = !1, m?.data?.message === "result" ? nt.value.resultCount++ : (nt.value.stockCount = m.data.stockCount, nt.value.shapeCount = m.data.shapeCount), m?.data?.phase && (nt.value.phase = m.data.phase), m?.data?.placed !== void 0 && (nt.value.placed = m.data.placed, nt.value.total = m.data.total);
    }), a.on("user", (m) => {
      e.callbacks?.onUser?.(m);
    }), a.on("error", (m) => {
      e.refs?.thinking && (e.refs.thinking.value = !1), ta(), i = null, Ua(), e.callbacks?.onError?.(m);
    });
  }, u = () => a?.disconnect(), r = () => a?.connect(), d = (m) => {
    const P = m ?? i ?? Qn()?.jobId;
    P && (i = P, a?.connected ? a.emit("reattach", P) : a?.connect());
  }, h = () => {
    const m = Qn(), P = i ?? m?.jobId;
    if (P) {
      try {
        const O = m?.socketId ?? a?.id ?? "", b = O ? `?socketId=${encodeURIComponent(O)}` : "";
        navigator.sendBeacon?.(`${t}v3/job/${P}/cancel${b}`);
      } catch {
      }
      ta(), i = null;
    }
  };
  return s(), {
    socket: a,
    connect: r,
    disconnect: u,
    reattach: d,
    cancel: h
  };
}
const kn = $({
  min: S().min(0).optional(),
  max: S().min(0).optional()
}).optional(), Sf = $({
  // Location identifier (e.g., 'side.l1', 'face.a')
  location: c().min(1),
  // Dimension constraints for this location
  longSide: kn,
  shortSide: kn,
  t: kn,
  // Formula-based validation
  formula: c().optional(),
  // Custom message for this location
  message: c().optional()
}), $i = $({
  // Shape dimension constraints (type-level, apply to all locations by default)
  longSide: kn,
  shortSide: kn,
  t: kn,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: c().optional(),
  // Custom validation message (optional)
  message: c().optional(),
  // Location-specific rules (override type-level rules for specific locations)
  locations: ne(Sf).optional()
}), xf = $({
  banding: $i.optional(),
  finish: $i.optional(),
  planing: $i.optional()
}).optional();
function Pf(e, n) {
  try {
    return !!new si({}).evaluateExpression(e, {
      longSide: n.longSide || 0,
      shortSide: n.shortSide || 0,
      t: n.t || 0
    });
  } catch (t) {
    return console.warn("Formula evaluation error:", t, "Formula:", e), !0;
  }
}
function If(e) {
  return e.formula ? "" : Xi({
    dimensionName: es(e.dimension),
    constraint: e.constraint,
    limit: e.limit,
    value: e.value
  });
}
function Cf(e, n, t) {
  const a = n.charAt(0).toUpperCase() + n.slice(1);
  return e.formula ? `${a} does not meet the validation requirements` : Xi({
    dimensionName: es(e.dimension),
    constraint: e.constraint,
    limit: e.limit,
    value: e.value,
    subject: a,
    location: e.location
  });
}
function Lf(e, n, t) {
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
function Of(e, n, t, a) {
  const { rule: i, message: s, source: u } = Lf(n, t, a), r = [], d = (m, P, O) => {
    P == null || O === void 0 || (O.min !== void 0 && P < O.min && r.push({
      valid: !1,
      dimension: m,
      value: P,
      constraint: "min",
      limit: O.min,
      location: t
    }), O.max !== void 0 && P > O.max && r.push({
      valid: !1,
      dimension: m,
      value: P,
      constraint: "max",
      limit: O.max,
      location: t
    }));
  };
  d("longSide", e.longSide, i.longSide), d("shortSide", e.shortSide, i.shortSide);
  const h = typeof e.t == "string" ? parseFloat(e.t) : e.t;
  return isNaN(h) || d("t", h, i.t), i.formula && (Pf(i.formula, {
    longSide: e.longSide,
    shortSide: e.shortSide,
    t: h
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
const { addNotice: Yn } = is();
let Mi = null;
function Ef() {
  return Mi || (Mi = Dl()), Mi;
}
function fl(e) {
  return e.filter((n) => n?.l || n?.w);
}
function Ff(e) {
  return !!e && "locations" in e && Array.isArray(e.locations);
}
async function Af(e) {
  const n = e.t, t = [];
  try {
    const { inputs: a, validateInputShapes: i, validateInputStock: s } = Ef(), u = e.inputShapes ?? a.inputShapes.value, r = e.inputStock ?? a.inputStock.value, d = e.inputUserGroups ?? a.inputUserGroups?.value ?? [], h = fl(u), m = fl(r);
    if (h.forEach((q) => q.isNew = !1), m.forEach((q) => q.isNew = !1), !e.isAdmin && !e.shared && e.maxShapes !== 1 / 0) {
      const q = h.reduce((fe, Y) => fe + (Number(Y.q) || 1), 0), V = m.reduce((fe, Y) => fe + (Number(Y.q) || 1), 0);
      if (q > e.maxShapes || V > e.maxStock)
        return Yn({
          type: "error",
          message: n("errors.validation.above_max_parts")
        }), e.onLimit?.(), { valid: !1, issues: t };
    }
    if (!h.length)
      return Yn({
        type: "error",
        message: n("errors.validation.no_parts_list")
      }), { valid: !1, issues: t };
    if (!e.useInventory && !m.length)
      return Yn({
        type: "error",
        message: n("errors.validation.no_stock")
      }), { valid: !1, issues: t };
    let P;
    if (e.useInventory && e.selectedSaw)
      P = e.selectedSaw;
    else if (e.inputSaw instanceof bn) {
      const q = e.inputSaw.validate();
      t.push(...q), P = e.inputSaw.toData();
    } else {
      P = e.inputSaw;
      const q = new Vi(P);
      t.push(...q.issues);
    }
    const O = P?.cutType;
    if (O === "nesting") {
      const q = h.filter(
        (V) => !Array.isArray(V.outline) || V.outline.length < 3
      );
      if (q.length)
        for (const V of q)
          t.push(new Ct({
            item: V,
            category: ["part"],
            message: "Nesting mode requires a polygon outline — import this part via DXF or switch to Rectangular mode.",
            shouldTranslate: !1
          }));
    } else if (O) {
      const q = h.filter(
        (V) => Array.isArray(V.outline) && V.outline.length >= 3
      );
      if (q.length)
        for (const V of q)
          t.push(new Ct({
            item: V,
            category: ["part"],
            message: "This part has a polygon outline and can only be used in Nesting mode — switch mode or remove the outlined parts.",
            shouldTranslate: !1
          }));
    }
    const b = i({
      saw: P,
      partTrim: re({ v: e.partTrim }),
      useInventory: e.useInventory,
      inputShapesOverride: h
    });
    if (t.push(...b), e.useInventory) {
      if (e.materialStore)
        for (const q of h)
          q.material || t.push(new Ct({
            item: q,
            category: ["part"],
            message: "errors.validation.business.no_material"
          }));
    } else {
      const q = s(P);
      t.push(...q);
    }
    if (d.length > 0) {
      d.forEach((V) => V.populateParentID(h));
      const q = Tu(d, h);
      t.push(...q);
    }
    await Nf(h, e, t);
    const _ = qi(t);
    if (_.length > 0) {
      const q = {
        saw: _.filter((V) => V.category?.includes("saw")),
        stock: _.filter((V) => V.category?.includes("stock")),
        part: _.filter((V) => V.category?.includes("part") && !V.category?.includes("extras")),
        extras: _.filter((V) => V.category?.includes("extras")),
        group: _.filter((V) => V.category?.includes("group"))
      };
      for (const [V, fe] of Object.entries(q))
        if (fe.length > 0) {
          Yn({
            type: "error",
            message: n("errors.validation.inputs_issue", { 0: V }),
            additional: fe.map((Y) => n(Y.message))
          });
          break;
        }
      return { valid: !1, issues: t };
    }
    const U = {
      inputSaw: P,
      inputShapes: h.map((q) => q.toData()),
      inputStock: m.map((q) => q.toData()),
      inputGroups: d.map((q) => q.toData()),
      enableEvo: !0,
      useInventory: e.useInventory || !1
    }, de = Lu.safeParse(U);
    return de.success ? {
      valid: !0,
      issues: t,
      sawData: P
    } : (console.error("[Validation] Zod validation failed:", de.error.issues), Yn({
      type: "error",
      message: n("errors.validation.invalid_data_structure"),
      additional: de.error.issues.map((q) => `${q.path.join(".")}: ${q.message}`)
    }), { valid: !1, issues: t });
  } catch (a) {
    return console.error("[Validation] error:", a), Yn({
      type: "error",
      message: n("errors.general.unexpected"),
      additional: [a?.message ?? ""]
    }), { valid: !1, issues: t };
  }
}
function Tf(e, n) {
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
async function Nf(e, n, t) {
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
      if (n.extrasValidationRules && Dr.hasExtras(i, s)) {
        const P = n.extrasValidationRules?.[s], O = n.extrasLocationGroups?.[s], b = Ff(P) && P.locations.length > 0, _ = O?.some((U) => U.rules);
        if (b || _) {
          const U = Tf(i, s), de = (O || []).map((fe) => ({
            id: fe.id,
            locations: fe.locations,
            rules: fe.rules
          })), q = P || {}, V = /* @__PURE__ */ new Set();
          for (const fe of U) {
            const Y = Of(
              i,
              q,
              fe,
              de
            );
            if (!Y.valid) {
              if (Y.source === "group") {
                const k = de.find(
                  (M) => M.rules && M.locations.includes(fe)
                );
                if (k && V.has(k.id))
                  continue;
                k && V.add(k.id);
              }
              if (Y.message) {
                const k = new Ct({
                  item: i,
                  category: ["part", "extras"],
                  message: Ws(Y.violations.map(If), Y.message),
                  field: [["extras", s, fe]],
                  shouldTranslate: !1
                });
                t.push(k);
              } else
                Y.violations.forEach((k) => {
                  const M = Cf(k, s), le = new Ct({
                    item: i,
                    category: ["part", "extras"],
                    message: M,
                    field: [["extras", s, fe]],
                    shouldTranslate: !1
                  });
                  t.push(le);
                });
            }
          }
        } else {
          const U = _r(i, s, n.extrasValidationRules);
          if (!U.valid) {
            const de = (q) => t.push(new Ct({
              item: i,
              category: ["part", "extras"],
              message: q,
              field: [["extras", s]],
              shouldTranslate: !1
            }));
            U.message ? de(Ws(
              U.violations.map(Rr),
              U.message
            )) : U.violations.forEach((q) => de(Vr(s, q)));
          }
        }
      }
      if (!r || !Object.keys(r).length)
        continue;
      const d = n.getShapeExtrasCodes?.(i, s), h = qr(i, s, r, n.findExtrasPrice, d);
      h.valid || h.incompleteLocations.forEach((m) => {
        t.push(new Ct({
          item: i,
          category: ["part", "extras"],
          message: "errors.extras.selection_incomplete",
          params: {
            extraType: `extras.${s}`,
            // Translation key for extra type (banding, finish, planing)
            location: Br(m, { returnKey: !0 })
            // Translation key for location
          },
          field: [["extras", s, m]]
        }));
      });
    }
}
const $f = ["decor", "width", "thickness"];
new Set($f);
const Gl = ["banding", "finish", "planing", "machining"], Mf = /* @__PURE__ */ new Set(["st", "p", "mm", "mb", "tm", "sm", "pm", "pa", "li", "ro", "r2"]), Df = 15;
function Zi(e) {
  return e.trim().toLowerCase().split(/[\s_-]+/).filter(Boolean);
}
function _f(e) {
  return /[a-z]/.test(e) && /\d/.test(e);
}
function pl(e) {
  return Zi(e).filter((n) => !Mf.has(n) && n.length > 1);
}
function Rf(e, n) {
  let t = 0;
  const a = Math.min(e.length, n.length);
  for (; t < a && e[t] === n[t]; )
    t++;
  return t;
}
function Vf(e) {
  return e ? typeof e == "string" ? { name: e } : e : {};
}
function Bg(e, n) {
  const t = Vf(n);
  if (!t.name && !t.code && !t.material && !t.description || e.decors.length === 0)
    return null;
  if (t.name) {
    const d = t.name.trim().toLowerCase();
    if (d) {
      const h = e.decors.find((m) => m.value.toLowerCase() === d);
      if (h)
        return { value: h.value, score: 1e3, matchedOn: ["name"] };
    }
  }
  const a = /* @__PURE__ */ new Set();
  for (const d of [t.name, t.material, t.description, t.code])
    if (d)
      for (const h of pl(d))
        a.add(h);
  const i = t.code || t.material ? Zi(t.code || t.material || "") : [];
  let s = null, u = 0, r = [];
  for (const d of e.decors) {
    const h = pl(d.value);
    let m = 0;
    const P = [];
    if (t.name) {
      const b = t.name.trim().toLowerCase(), _ = d.value.toLowerCase();
      b && (b.includes(_) || _.includes(b)) && (m += 200, P.push("name-substring"));
    }
    let O = 0;
    for (const b of h)
      a.has(b) && (m += _f(b) ? 20 : 5, O++);
    if (O > 0 && P.push("tokens"), t.color && d.color && t.color.trim().toLowerCase() === d.color.trim().toLowerCase() && (m += 30, P.push("color")), i.length > 0) {
      let b = 0;
      for (const _ of e.rows) {
        if ((_.decor?.name ?? "") !== d.value)
          continue;
        const U = Rf(i, Zi(_.code));
        U > b && (b = U);
      }
      b >= 2 && (m += b * 15, P.push("code-prefix"));
    }
    m > u && (u = m, s = d, r = P);
  }
  return !s || u < Df ? null : { value: s.value, score: u, matchedOn: r };
}
const Wl = {
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
Object.entries(Wl).filter(([, e]) => e.inheritable).map(([e]) => e);
const qf = Object.entries(Wl).filter(([, e]) => e.libraryOverridable).map(([e]) => e);
new Set(qf);
const Bf = [
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
new Set(Bf);
const jf = Gl, Uf = (e) => e.charAt(0).toUpperCase() + e.slice(1), Gf = jf.map((e) => ({
  key: `extras.${e}`,
  label: Uf(e),
  extrasType: e
}));
new Set(Gf.map((e) => e.key));
const Wf = 4;
Array.from({ length: Wf }, (e, n) => n + 1);
function zl(e) {
  return typeof e == "string" && e.includes(",");
}
function Ji(e) {
  if (!zl(e))
    return null;
  const n = e.split(",").map((i) => parseFloat(i.trim()));
  if (n.length !== 2)
    return null;
  const [t, a] = n;
  return !Number.isFinite(t) || !Number.isFinite(a) || t <= 0 || a <= 0 ? null : { base: t, double: a };
}
function na(e) {
  const n = e?.customData?.bondedThickness;
  return Ji(n) ? n : zl(e?.t) && Ji(e?.t) ? e.t : null;
}
function zf(e) {
  const n = Ji(na(e));
  return n ? n.base : null;
}
function Kf(e, n, t, a = (i) => Number(i)) {
  if (!(!n.length || !t.length))
    for (const i of e) {
      if (i.t === void 0 || i.t === null || i.t === "") continue;
      const s = a(i.t), u = n.findIndex((h) => a(h) === s);
      if (u === -1) continue;
      const r = t.find((h) => h.includes(u));
      if (!r) continue;
      const d = Math.min(...r.map((h) => a(n[h])));
      s > d && (i.q = a(i.q) * (s / d), i.notes = `Bond to form ${s}`, i.t = d);
    }
}
const Hf = new si({});
function Zf(e) {
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
function Jf(e, n) {
  const t = [], a = e.filter((i) => i.enabled !== !1);
  for (let i = 0; i < n.length; i++) {
    const s = n[i], u = Zf(s);
    for (const r of a)
      try {
        Hf.evaluateExpression(r.formula, u) || t.push({
          partIndex: i,
          partName: s.name || void 0,
          ruleName: r.name || void 0,
          message: r.message
        });
      } catch (d) {
        t.push({
          partIndex: i,
          partName: s.name || void 0,
          ruleName: r.name || void 0,
          message: `Validation error: ${d instanceof Error ? d.message : "Unknown error"}`
        });
      }
  }
  return {
    valid: t.length === 0,
    errors: t
  };
}
const Qf = $({
  longSide: kn,
  shortSide: kn,
  t: kn,
  formula: c().optional(),
  message: c().optional()
}).optional(), Qa = $({
  // Unique identifier for this group (used internally)
  id: c().min(1),
  // Display label for the group (shown in UI)
  label: c().min(1),
  // Array of location strings in this group
  // Examples: ['side.l1', 'side.l2'], ['face.a', 'face.b']
  locations: ne(c().min(1)).min(1),
  // Optional price override for this group
  // When set, this price will be used instead of calculating from individual locations
  price: S().optional(),
  // Hide individual location inputs when this group is enabled
  // When true, only shows the group control, hiding the individual face/side inputs
  hideIndividualLocations: ae().optional().default(!1),
  // Validation rules that apply when using this group
  // These rules apply when any location in the group is selected
  rules: Qf
}), Yf = $({
  banding: ne(Qa).optional(),
  finish: ne(Qa).optional(),
  planing: ne(Qa).optional()
}).optional(), Xf = an(["decimal", "fraction"]), ep = an(["metric", "imperial"]), tp = an(jr), ml = Ze([
  yt(0),
  yt(1),
  yt(2)
]).catch(0), np = $({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: c().optional(),
  partB: c().optional(),
  partSelected: c().optional(),
  stock: c().optional(),
  text: c().optional(),
  // Checkout-specific colors
  button: c(),
  buttonText: c()
}), Pt = (e) => Ia((n) => n ?? e, ae()), ap = $({
  banding: Pt(!1),
  finish: Pt(!1),
  planing: Pt(!1),
  orientation: Pt(!0),
  diagram: Pt(!0),
  focus: Pt(!0),
  machining: Pt(!1),
  csvImport: Pt(!1),
  csvTemplate: Pt(!1),
  groups: Pt(!1),
  click: Pt(!0),
  partName: Pt(!0),
  progressNumber: Pt(!0),
  pagination: Pt(!1),
  fullStock: Pt(!1),
  imageUpload: Pt(!1),
  diagramNav: Pt(!1),
  debug: Pt(!1)
}), ip = $({
  // Localization
  locale: c().default("en-US"),
  currency: c().default("USD"),
  apiVersion: S().min(2).default(3),
  // Unit system (metric or imperial)
  unitSystem: ep.default("metric"),
  // Number formatting
  numberFormat: Xf.default("decimal"),
  decimalPlaces: S().min(0).max(10).default(2),
  fractionRoundTo: S().default(0),
  // Stock configuration
  stockSelection: tp.optional(),
  stockGrain: yl.optional(),
  // Part configuration
  minSpacing: Il.optional(),
  maxParts: S().min(0).default(0),
  orientationModel: ml.default(0),
  resultOrientationModel: ml.default(0),
  minDimension: S().min(0).default(0),
  partTrim: Ia((e) => e ?? void 0, S().min(0).optional()),
  partsPerPage: Ia((e) => e ?? void 0, S().min(1).default(10)),
  // UI configuration
  debug: ae().default(!1),
  enable: ap.default({
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
  colors: np.default({
    button: "#118ab2",
    buttonText: "#ffffff"
  }),
  // Custom fields
  customFields: ne(xe()).optional(),
  fieldOrder: Ia((e) => e ?? void 0, ne(c()).optional()),
  // Extras location filtering
  bandingLocations: ne(wi).optional(),
  finishLocations: ne(wi).optional(),
  planingLocations: ne(wi).optional(),
  // Extras location groups
  extrasLocationGroups: Yf,
  // Extras validation rules
  extrasValidationRules: xf
}), wa = $({
  min: S().min(0).nullable().optional(),
  max: S().min(0).nullable().optional()
}).nullable().optional(), sp = $({
  // Master toggle for the feature. Server gates on this; consumers don't need to.
  enabled: ae().optional(),
  // Orientation-independent dimension constraints
  // longSide = the larger of l/w, shortSide = the smaller of l/w
  longSide: wa,
  shortSide: wa,
  // Direct dimension constraints (as stored by admin panel)
  l: wa,
  w: wa,
  t: wa,
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
  formula: c().nullable().optional(),
  // Custom validation message (optional)
  message: c().nullable().optional()
});
function lp(e, n) {
  const t = [], a = e.l || 0, i = e.w || 0, s = e.longSide ?? Math.max(a, i), u = e.shortSide ?? Math.min(a, i), r = (d, h, m) => {
    m != null && (m.min !== void 0 && m.min !== null && h < m.min && t.push({
      valid: !1,
      dimension: d,
      value: h,
      constraint: "min",
      limit: m.min
    }), m.max !== void 0 && m.max !== null && h > m.max && t.push({
      valid: !1,
      dimension: d,
      value: h,
      constraint: "max",
      limit: m.max
    }));
  };
  if (r("longSide", s, n.longSide), r("shortSide", u, n.shortSide), r("longSide", a, n.l), r("shortSide", i, n.w), r("t", Number(e.t) || 0, n.t), n.crossDimensionalRule) {
    const { primaryMin: d, secondaryMin: h } = n.crossDimensionalRule, m = e.l || 0, P = e.w || 0;
    if (d != null && h != null) {
      const O = m >= d && P >= h, b = P >= d && m >= h;
      !O && !b && t.push({
        valid: !1,
        dimension: "crossDimensional",
        constraint: "crossDimensional",
        message: n.message || `At least one side must be ≥ ${d} mm and the other side must be ≥ ${h} mm`
      });
    }
  }
  return n.formula && (op(n.formula, {
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
function op(e, n) {
  try {
    return !!new si({}).evaluateExpression(e, {
      l: n.l || 0,
      w: n.w || 0,
      longSide: n.longSide || 0,
      shortSide: n.shortSide || 0
    });
  } catch (t) {
    return console.warn("Formula evaluation error:", t, "Formula:", e), !0;
  }
}
function rp(e) {
  if (e.message)
    return e.message;
  if (e.constraint === "crossDimensional")
    return "Part dimensions do not meet requirements";
  const n = es(String(e.dimension));
  return Xi({
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
const up = Ce(
  c(),
  S().min(0)
).default({}), cp = $({
  banding: c().optional(),
  finish: c().optional(),
  planing: c().optional(),
  machining: c().optional()
}).optional(), dp = $({
  name: c().trim().min(1),
  db_id: c().optional(),
  code: c().optional(),
  brand: c().optional(),
  variant: c().optional(),
  finish: c().optional(),
  // Raw `material` label from source stock — preserved when the source
  // data uses it as the friendly product name (typical WordPress / widget
  // shape: `material: "Birch Plywood", name: "SKU-123"`). The catalogue
  // flow doesn't set this; it carries identity on `name` + `code` instead.
  material: c().optional(),
  displayName: c().optional(),
  imageUrl: c().optional(),
  color: c().optional(),
  colorHex: c().optional(),
  thicknesses: ne(
    Ze([
      c().transform((e) => {
        const n = parseFloat(e);
        return isNaN(n) ? e : n;
      }),
      S()
    ])
  ).min(1),
  widths: ne(
    Ze([
      c().transform((e) => {
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
  dimensions: ne($({
    l: S(),
    w: S()
  })).optional(),
  extras: cp,
  fullSizeOnly: ae().optional()
}), Di = $({
  labels: ne(c()).default([]),
  pricing: Ce(c(), S().min(0)).default({}),
  options: xe().optional(),
  keys: ne(c()).optional(),
  // if not all the default keys should be set
  locations: ne(c()).optional(),
  // available locations for this extras type
  groups: ne(Qa).optional(),
  // custom location groups
  rules: xe().optional(),
  // validation rules for this extras type
  displayNames: Ce(c(), c()).optional(),
  // slug key → product name for dropdown display
  codes: Ce(c(), c()).optional(),
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
  groupPricing: Ce(c(), S()).optional(),
  // Per-code pricing formulas. When a formula exists for a code, both the
  // inline per-feature preview AND the cart total evaluate the formula
  // instead of multiplying the flat rate. Fanned out per-code by the
  // server's `buildExtrasConfig` so one Extra → many code entries.
  formulas: Ce(c(), c()).optional()
});
$({
  success: ae(),
  price: S().optional(),
  error: c().optional(),
  cacheHit: ae().optional()
});
$({
  valid: ae(),
  errors: ne(c()),
  warnings: ne(c())
});
$({
  pricing: up,
  labels: ne(c()),
  options: ne(ne(c())),
  // Simplified to string arrays only
  keys: ne(c()),
  maxLevels: S().min(1)
});
$({
  enableCaching: ae().default(!0),
  enableLogging: ae().default(!1),
  maxCacheSize: S().min(1).default(1e3)
});
const Kl = an(["select", "multiselect", "range", "boolean", "search"]), Hl = an(["asc", "desc"]), Zl = an(["grid", "list"]), Ga = $({
  _id: c(),
  name: c(),
  code: c().optional(),
  labels: ne(c()).optional(),
  pricing: Ce(c(), S()).optional(),
  price: S().optional(),
  // Catalogue link — when set, the customer renders a Decor × Type ×
  // Width × Thickness picker against /catalogues/<key>/banding-axes.
  sourceCatalogueKey: c().optional(),
  // Per-axis pricing rules — preserved so per-shape inline price hints
  // can compute against the rule that matches.
  pricingRules: ne($({
    materials: ne(c()).optional(),
    widths: ne(S()).optional(),
    thicknesses: ne(S()).optional(),
    price: S()
  })).optional()
}), fp = $({
  banding: Ga.optional(),
  finish: Ga.optional(),
  planing: Ga.optional(),
  machining: Ga.optional()
}).optional(), pp = $({
  enabled: ae(),
  price: S(),
  description: c().optional(),
  maxQuantity: S().optional()
}).optional(), mp = $({
  // Visual (Note: color, weight, imageUrl, tags, available are now in InputStock base schema)
  colorHex: Ur,
  name: c().optional().describe("User-friendly display name"),
  description: c().optional().describe("Detailed description"),
  code: c().optional().describe("Internal material/product code"),
  // Categorization
  category: c().optional().describe("Stock category"),
  // Surface finish (e.g., "High Gloss", "Matt", "Satin")
  finish: c().optional().describe("Surface finish"),
  // Available extras from material (resolved from material.extras)
  extras: fp.describe("Available extras for this stock"),
  // Sample ordering configuration (from material)
  sample: pp.describe("Sample ordering configuration"),
  // External links — supplier-supplied datasheets, asset bundles, 3D viewer
  // URLs etc. surfaced in the customer-side Details dialog. Populated for
  // library-sourced rows from the catalogue entry's `urls` field; absent
  // or empty for shop-owned stock until the editor populates it.
  urls: ne($({
    label: c(),
    url: c()
  })).optional().describe("Supplier external links (datasheets, asset bundle, …)"),
  // UI metadata
  minQuantity: S().int().positive().nullable().optional().describe("Minimum order quantity")
});
Tn.merge(mp).describe("Stock option with filtering and display metadata");
const gp = $({
  field: c().describe("Property name to filter on"),
  type: Kl,
  label: c().describe("Display label"),
  custom: ae().default(!1).describe("Whether this is a custom property"),
  // Range filter options
  min: S().nullable().optional().describe("Minimum value for range filter"),
  max: S().nullable().optional().describe("Maximum value for range filter"),
  step: S().nullable().optional().describe("Step size for range filter"),
  // Select filter options
  options: ne($({
    label: c(),
    value: xe()
  })).optional().describe("Predefined options for select filters"),
  // Display options
  visible: ae().default(!0).describe("Whether filter is visible"),
  collapsible: ae().default(!0).describe("Whether filter panel is collapsible"),
  order: S().int().nullable().optional().describe("Display order")
}), hp = $({
  field: c().describe("Field to sort by"),
  order: Hl,
  label: c().optional().describe("Display label for sort option")
}), ds = $({
  // Filter configuration
  availableFilters: ne(gp).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: ne(c()).default(["cost", "material", "t"]).describe("Sortable fields"),
  defaultSort: hp.default({
    field: "cost",
    order: "asc"
  }).describe("Default sort configuration"),
  // Display configuration
  displayMode: Zl.default("grid").describe("Default display mode"),
  itemsPerPage: S().int().positive().default(20).describe("Items per page for pagination"),
  // Feature toggles
  enableSearch: ae().default(!0).describe("Enable search functionality"),
  // Selection behavior
  allowMultipleSelection: ae().default(!0).describe("Allow multiple stock selection"),
  maxSelection: S().int().positive().nullable().optional().describe("Maximum number of stock items to select")
}), vp = $({
  field: c(),
  value: xe(),
  type: Kl
});
$({
  // Active filters
  activeFilters: ne(vp).default([]).describe("Currently active filters"),
  // Search
  searchQuery: c().default("").describe("Current search query"),
  // Sort
  sortBy: c().default("cost").describe("Current sort field"),
  sortOrder: Hl.default("asc").describe("Current sort order"),
  // Display
  displayMode: Zl.default("grid").describe("Current display mode"),
  currentPage: S().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: ne(c()).default([]).describe("IDs of selected stock items")
});
function jg() {
  return ds.parse({});
}
const Jl = $({}).passthrough(), Ql = $({
  l: S(),
  w: S(),
  t: S().nullable(),
  q: S(),
  stockId: c()
}), fs = Gr.partial(), Yl = $({
  q: S().optional(),
  analysis: fs.nullable().optional()
}), Xl = $({
  holes: ne($({
    x: S(),
    y: S(),
    diameter: S(),
    depth: S().optional(),
    face: S().optional(),
    type: c().optional()
  })).optional(),
  hingeHoles: ne($({
    position: S(),
    side: c(),
    face: S().optional(),
    numHoles: S().optional(),
    diameter: S().optional(),
    depth: S().optional(),
    hingeLength: S().optional(),
    distanceFromEdge: S().optional(),
    outerSpacing: S().optional()
  })).optional(),
  corners: ne($({
    index: S(),
    type: c().nullable().optional(),
    size: S().nullable().optional()
  })).optional()
}), eo = $({
  bladeWidth: S().optional(),
  cutType: c().optional(),
  cutPreference: c().optional(),
  stackHeight: S().optional()
}), bp = $({
  l: S(),
  w: S(),
  t: S().nullable(),
  material: c().nullable(),
  orientationLock: Cl.nullable(),
  q: S(),
  name: c().nullable(),
  // V2 format: flat banding/finish (x1/x2/y1/y2 for banding, a/b for finish)
  banding: Ce(c(), Ze([c(), ae()])).nullable().optional(),
  finish: Ce(c(), Ze([c(), ae()])).nullable().optional(),
  planing: Ce(c(), Ze([c(), ae()])).nullable().optional(),
  customData: Ce(c(), xe()).nullable().optional()
}), yp = $({
  id: c(),
  name: c().nullable(),
  l: S(),
  w: S(),
  t: S().nullable(),
  material: c().nullable(),
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
  pricingFormula: c().nullable().optional(),
  db_id: c().nullable().optional(),
  code: c().nullable().optional(),
  analysis: fs.nullable().optional(),
  /** Per-sheet analysis — present when the cut server emits per-sheet data.
   *  Pricing formulas iterate these when set so usedFraction reflects each
   *  physical sheet, not the order-wide average. */
  sheets: ne(Yl).nullable().optional(),
  customData: Ce(c(), xe()).nullable().optional()
}), kp = $({
  id: c().optional(),
  name: c().optional(),
  l: S(),
  w: S(),
  t: S().nullable().optional(),
  material: c().optional(),
  q: S().optional(),
  orientationLock: Ze([
    yt(""),
    yt("l"),
    yt("w")
  ]).nullable().optional(),
  // V2 format: flat banding/finish
  banding: Ce(c(), Ze([c(), ae()])).nullable().optional(),
  finish: Ce(c(), Ze([c(), ae()])).nullable().optional(),
  planing: Ce(c(), Ze([c(), ae()])).nullable().optional(),
  // V3 nested extras also stored on inputs even for V2 results (see mapToCheckoutResultV2)
  extras: $({
    banding: $({
      sides: Ce(c(), Ze([c(), ae()]))
    }).nullable().optional(),
    finish: $({
      faces: Ce(c(), Ze([c(), ae()]))
    }).nullable().optional(),
    planing: $({
      sides: Ce(c(), Ze([c(), ae()])).optional(),
      faces: Ce(c(), Ze([c(), ae()])).optional()
    }).nullable().optional()
  }).optional(),
  machining: Xl.optional(),
  stock: $({
    db_id: c().optional(),
    code: c().optional(),
    material: c().optional(),
    thickness: S().optional()
  }).nullable().optional(),
  customData: Ce(c(), xe()).nullable().optional()
});
$({
  jobId: S(),
  metadata: Ca.optional(),
  parts: ne(bp),
  stock: ne(yp),
  offcuts: ne(Ql),
  inputs: $({
    parts: ne(kp),
    saw: eo.optional()
  }),
  apiResultV3: Jl.optional()
});
const wp = $({
  l: S(),
  w: S(),
  t: S().nullable(),
  material: c().nullable(),
  orientationLock: Cl.nullable(),
  q: S(),
  name: c().nullable(),
  // V3 format: nested extras structure
  extras: $({
    banding: $({
      sides: Ce(c(), Ze([c(), ae()]))
    }).nullable().optional(),
    finish: $({
      faces: Ce(c(), Ze([c(), ae()]))
    }).nullable().optional(),
    planing: $({
      sides: Ce(c(), Ze([c(), ae()])).optional(),
      faces: Ce(c(), Ze([c(), ae()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: Ce(c(), xe()).nullable().optional()
}), Sp = $({
  id: c(),
  name: c().nullable(),
  l: S(),
  w: S(),
  t: S().nullable(),
  material: c().nullable(),
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
  pricingFormula: c().nullable().optional(),
  db_id: c().nullable().optional(),
  code: c().nullable().optional(),
  analysis: fs.nullable().optional(),
  /** Per-sheet analysis — present when the cut server emits per-sheet data.
   *  Pricing formulas iterate these when set so usedFraction reflects each
   *  physical sheet, not the order-wide average. */
  sheets: ne(Yl).nullable().optional(),
  // New stock fields
  color: Wr.nullable(),
  weight: S().positive().nullable().optional(),
  imageUrl: c().nullable().optional(),
  tags: ne(c()).nullable().optional(),
  available: ae().nullable().optional(),
  customData: Ce(c(), xe()).nullable().optional()
}), xp = $({
  id: c().optional(),
  name: c().optional(),
  l: S(),
  w: S(),
  t: S().nullable().optional(),
  material: c().optional(),
  q: S().optional(),
  orientationLock: Ze([
    yt(""),
    yt("l"),
    yt("w")
  ]).nullable().optional(),
  // V3 format: nested extras structure
  extras: $({
    banding: $({
      sides: Ce(c(), Ze([c(), ae()]))
    }).nullable().optional(),
    finish: $({
      faces: Ce(c(), Ze([c(), ae()]))
    }).nullable().optional(),
    planing: $({
      sides: Ce(c(), Ze([c(), ae()])).optional(),
      faces: Ce(c(), Ze([c(), ae()])).optional()
    }).nullable().optional()
  }).optional(),
  machining: Xl.optional(),
  stock: $({
    db_id: c().optional(),
    code: c().optional(),
    material: c().optional(),
    thickness: S().optional()
  }).nullable().optional(),
  customData: Ce(c(), xe()).nullable().optional()
});
$({
  jobId: S(),
  metadata: Ca.optional(),
  parts: ne(wp),
  stock: ne(Sp),
  offcuts: ne(Ql),
  inputs: $({
    parts: ne(xp),
    saw: eo.optional()
  }),
  apiResultV3: Jl.optional()
});
function to(e) {
  return {
    l: e.l,
    w: e.w,
    t: e.t ?? null,
    q: e.q,
    // Use stock.id to match the id property in the result's stock array
    stockId: e?.stock?.id || e?.stock?.parentId || ""
  };
}
function no(e) {
  const n = /* @__PURE__ */ new Map();
  for (const t of e)
    t?.parentId && (n.has(t.parentId) || n.set(t.parentId, []), n.get(t.parentId).push({
      q: t.q ?? 1,
      analysis: t.analysis ?? null
    }));
  return n;
}
function ao(e) {
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
const Pp = $({
  stockSelection: Xr.optional(),
  stackingMode: Yr.optional(),
  minSpacing: Il.optional()
}).optional(), Ip = $({
  stockType: an([...Bi]).optional(),
  bladeWidth: Ze([
    Qr,
    c()
  ]).optional(),
  cutType: Zr,
  cutPreference: Hr,
  stackHeight: Kr,
  guillotineOptions: zr,
  efficiencyOptions: Jr.optional(),
  options: Pp
}).optional(), Cp = $({
  holes: S().min(0).nullable().optional(),
  corners: S().min(0).nullable().optional()
}).optional(), Lp = Gn.pick({
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
  banding: nu.nullable().optional(),
  finish: tu.nullable().optional(),
  planing: eu.nullable().optional(),
  stockId: c().nullable().optional()
}), Op = $({
  stock: ne(Tn).default([]),
  parts: ne(Lp).optional(),
  options: ip,
  type: c().optional(),
  // variable | simple
  materials: ne(dp).optional(),
  banding: Di.nullable().optional(),
  finish: Di.nullable().optional(),
  planing: Di.nullable().optional(),
  machining: xe().optional(),
  machiningPricing: Cp,
  // DEPRECATED: bandingPricing, finishPricing, planingPricing are now in banding.pricing, finish.pricing, planing.pricing
  variations: xe().optional(),
  partRules: sp.optional(),
  customValidation: $({
    enabled: ae(),
    rules: ne(xe())
  }).optional(),
  saw: Ip,
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
  sawsById: Ce(c(), xe()).optional(),
  stockFilter: $({
    enabled: ae().optional(),
    serverMode: ae().optional(),
    config: ds.optional()
  }).optional(),
  // Product catalog configuration
  products: $({
    enabled: ae().optional(),
    showCategories: ae().optional()
  }).optional(),
  // API configuration (for order lookup and other API features)
  api: $({
    baseUrl: c(),
    orgSlug: c(),
    isCustomDomain: ae().optional(),
    // WebSocket origin + org id for the storefront's inventory-change watcher
    // (Vanilla.vue startInventoryWatch). Host integrations inject these from
    // the /config response wrapper (`orgId`) and their deploy env.
    wsServer: c().optional(),
    orgId: c().optional()
  }).optional(),
  // Admin configuration (configurator, etc.)
  config: $({
    configurator: $({
      enabled: ae(),
      url: c().nullable().optional(),
      spec: xe().nullable().optional()
    }).optional()
  }).optional()
});
$({
  slug: c().optional(),
  company: $({
    name: c(),
    contactEmail: c(),
    phone: c().optional(),
    address: c().optional()
  }),
  branding: $({
    logo: c().optional(),
    favicon: c().optional(),
    colors: $({
      button: c(),
      buttonText: c(),
      headerBackground: c().optional(),
      headerText: c().optional(),
      partA: c().optional(),
      partB: c().optional(),
      partSelected: c().optional(),
      stock: c().optional(),
      text: c().optional()
    }),
    showCredit: ae().optional()
  }),
  config: $({
    stockCount: S().optional(),
    stock: ne(xe()).optional(),
    materials: ne(xe()).optional(),
    options: xe().optional(),
    pricing: xe().optional(),
    banding: xe().optional(),
    finish: xe().optional(),
    planing: xe().optional(),
    machining: xe().optional(),
    bandingPricing: Ce(c(), S()).optional(),
    finishPricing: Ce(c(), S()).optional(),
    planingPricing: Ce(c(), S()).optional(),
    machiningPricing: Ce(c(), S()).optional(),
    saw: xe().optional(),
    shipping: $({
      enabled: ae(),
      originCountry: c().optional()
    }).optional(),
    stockFilter: $({
      config: ds.optional()
    }).optional(),
    partRules: xe().optional(),
    customFields: ne(xe()).optional(),
    termsUrl: c().optional(),
    termsContent: c().optional(),
    tracking: $({
      gaMeasurementId: c().optional(),
      gtmContainerId: c().optional()
    }).optional(),
    customValidation: $({
      enabled: ae(),
      rules: ne(xe())
    }).optional(),
    importSettings: $({
      grouping: an(["material", "material-variant", "auto"]).optional(),
      codeRegex: c().optional()
    }).optional()
  }),
  stripe: $({
    enabled: ae(),
    publishableKey: c().optional(),
    currency: c().optional()
  }).optional(),
  customerAccounts: $({
    enabled: ae(),
    requireForCheckout: ae().optional()
  }).optional()
});
function Ep(e) {
  const n = Op.safeParse(e);
  return {
    success: n.success,
    data: n.success ? n.data : void 0,
    error: n.success ? void 0 : n.error
  };
}
function Fp(e) {
  const n = Ep(e);
  if (!n.success) {
    const t = n.error?.issues.map((a) => `${a.path.join(".")}: ${a.message}`).join(", ") || "Unknown validation error";
    throw console.error("Invalid checkout data:", JSON.stringify(e, null, 2)), console.error("Validation errors:", t), new Error(`Invalid checkout data: ${t}`);
  }
  return n.data;
}
function cn(e) {
  return e == null ? !1 : typeof e == "object" && e.value !== void 0 ? e.value : e;
}
function Ap(e) {
  if (e.extras?.banding?.sides) {
    const n = e.extras.banding.sides, t = {};
    if (lt(n.a) || lt(n.b) || lt(n.c) || lt(n.d))
      t.x1 = lt(n.a) ? cn(n.a) : !1, t.y1 = lt(n.b) ? cn(n.b) : !1, t.x2 = lt(n.c) ? cn(n.c) : !1, t.y2 = lt(n.d) ? cn(n.d) : !1;
    else {
      const i = Ki(n);
      t.x1 = lt(i.x1) ? cn(i.x1) : !1, t.x2 = lt(i.x2) ? cn(i.x2) : !1, t.y1 = lt(i.y1) ? cn(i.y1) : !1, t.y2 = lt(i.y2) ? cn(i.y2) : !1;
    }
    e.banding = t;
  }
  if (e.extras?.finish?.faces) {
    const n = e.extras.finish.faces, t = {};
    t.a = lt(n.a) ? cn(n.a) : !1, t.b = lt(n.b) ? cn(n.b) : !1, e.finish = t;
  }
  if (e.extras?.planing) {
    const n = e.extras.planing, t = {}, a = Ki(n.sides || {});
    n.sides && (lt(a.x1) && (t.x1 = a.x1), lt(a.x2) && (t.x2 = a.x2), lt(a.y1) && (t.y1 = a.y1), lt(a.y2) && (t.y2 = a.y2)), n.faces && (lt(n.faces.a) && (t.a = n.faces.a), lt(n.faces.b) && (t.b = n.faces.b)), Object.keys(t).length > 0 && (e.planing = t);
  }
  (e.extras?.banding || e.extras?.finish || e.extras?.planing) && delete e.extras;
}
function Tp(e, n = 0) {
  if (n === 0)
    return e;
  if (n === 1 || n === 2) {
    const t = Math.max(e.l, e.w), a = Math.min(e.l, e.w);
    e.w > e.l && (e.l = t, e.w = a);
  }
  return e;
}
function io(e, n = 0) {
  debugger;
  return n === 0 || e.forEach((t) => Tp(t, n)), e;
}
function Np(e) {
  const n = typeof e.weight == "number" && Number.isFinite(e.weight) && e.weight > 0 ? e.weight : null;
  if (n !== null) return n;
  const t = typeof e.density == "number" && Number.isFinite(e.density) && e.density > 0 ? e.density : null, a = typeof e.l == "number" ? e.l : null, i = typeof e.w == "number" ? e.w : null, s = typeof e.t == "number" ? e.t : null;
  if (!t || !a || !i || !s) return null;
  const u = a / 1e3 * (i / 1e3) * (s / 1e3);
  return Math.round(t * u * 100) / 100;
}
function so(e) {
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
function $p(e, n, t, a, i, s, u, r) {
  const d = ao(a), h = no(a), m = n.map((b) => {
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
      banding: Zu(),
      finish: Xa(),
      planing: Qu()
    }, U = { ...b };
    return Ap(U), U.banding && (_.banding = U.banding), U.finish && (_.finish = U.finish), U.planing && (_.planing = U.planing), _;
  }), P = t.map((b) => {
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
      analysis: d.get(b.parentId) ?? null,
      sheets: h.get(b.parentId) ?? null,
      customData: b?.customData ?? null
    };
    return b?.trim && (_.trim = Ki(b.trim)), _;
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
      const U = so(b);
      return U && (_.machining = U), _;
    })
  };
  return r && io(m, r), {
    jobId: e,
    metadata: u,
    parts: m,
    stock: P,
    offcuts: i?.map(to) || [],
    inputs: O
  };
}
function Mp(e, n, t, a, i, s, u, r) {
  const d = ao(a), h = no(a), m = n.map((b) => {
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
        banding: { sides: zi() },
        finish: { faces: Xa() },
        planing: Ju()
      }
    };
    return b.extras && (b.extras.banding?.sides && (_.extras.banding = { sides: b.extras.banding.sides }), b.extras.finish?.faces && (_.extras.finish = { faces: b.extras.finish.faces }), b.extras.planing && (_.extras.planing = {
      sides: b.extras.planing.sides || zi(),
      faces: b.extras.planing.faces || Xa()
    })), _;
  }), P = t.map((b) => ({
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
    analysis: d.get(b.parentId) ?? null,
    sheets: h.get(b.parentId) ?? null,
    // New stock fields
    color: b?.color ?? null,
    density: b?.density ?? null,
    weight: Np(b),
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
      const U = so(b);
      return U && (_.machining = U), _;
    })
  };
  return r && io(m, r), {
    jobId: e,
    metadata: u,
    parts: m,
    stock: P,
    offcuts: i?.map(to) || [],
    inputs: O
  };
}
function Dp(e) {
  return e ? !!e.code || !!e.name || !!e.sourceCatalogueKey || Array.isArray(e.groups) && e.groups.length > 0 || Array.isArray(e.labels) && e.labels.length > 0 || !!e.pricing && typeof e.pricing == "object" && Object.keys(e.pricing).length > 0 : !1;
}
function _p(e, n, t) {
  const a = e.sourceCatalogueKey ? n?.pricing || {} : {};
  return e.pricing && typeof e.pricing == "object" ? { ...a, ...e.pricing } : t ? { ...a, [t]: e.price ?? 0 } : { ...a };
}
const Rp = "stockExtras";
function Ug(e, n) {
  !n || typeof n != "object" || (e.resolvedExtras = n);
}
function ti(e) {
  const n = e?.resolvedExtras;
  if (n && typeof n == "object") return n;
  const t = e?.customData?.[Rp];
  if (t && typeof t == "object") return t;
}
function lo(e, n) {
  return ti(e)?.[n];
}
function Vp(e) {
  const n = ti(e);
  if (!n) return !1;
  for (const t of Gl)
    if (n[t]) return !0;
  return !1;
}
function qp(e) {
  const t = lo(e, "banding")?.sourceCatalogueKey;
  return typeof t == "string" && t ? t : null;
}
function Bp(e, n) {
  if (n !== "banding") return !1;
  const t = e?.sourceCatalogueKey;
  return typeof t == "string" && t.length > 0;
}
function jp(e) {
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
function _i(e) {
  const n = (e.variant || "").trim(), t = (e.material || "").trim(), a = (e.name || "").trim();
  if (n && a && t && n.toUpperCase() !== a.toUpperCase())
    return `${n} ${a}`.toUpperCase();
  if (n && t) return n.toUpperCase();
  if (t) return t.toUpperCase();
  const i = (e.code || "").trim();
  return i ? i.toUpperCase() : (la(jp(e), { fallback: "" }).fullLabel || "").toUpperCase();
}
function Up(e) {
  if (e && typeof e == "object" && "resolvedExtras" in e) {
    const { resolvedExtras: n, ...t } = e;
    return t;
  }
  return e;
}
const Gp = ["id", "data-index"], Wp = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = G({
      l1: !1,
      l2: !1,
      w1: !1,
      w2: !1
    }), s = () => {
      if (!t.inputShape) return;
      let d = {
        l1: ia(t.inputShape, "banding", "side.l1"),
        l2: ia(t.inputShape, "banding", "side.l2"),
        w1: ia(t.inputShape, "banding", "side.w1"),
        w2: ia(t.inputShape, "banding", "side.w2")
      };
      const h = Pu(
        t.orientationModel,
        t.stockGrain,
        t.inputShape
      );
      h && (d = wu(d, h)), i.value = d;
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
    const u = (d) => {
      (d.key === "Enter" || d.key === " ") && r();
    }, r = () => {
      t.disabled || a("clicked");
    };
    return fn(() => {
      document.getElementById(t.id)?.addEventListener("keydown", u);
    }), ni(() => {
      document.getElementById(t.id)?.removeEventListener("keydown", u);
    }), (d, h) => (A(), K("div", {
      id: e.id,
      class: ot(["banding-button", { open: e.open, disabled: e.disabled }]),
      "data-field": "banding",
      "data-index": e.index,
      tabindex: "0",
      onClick: r
    }, [
      be("div", {
        class: ot(["outer", {
          l1: i.value.l1,
          l2: i.value.l2,
          w1: i.value.w1,
          w2: i.value.w2
        }])
      }, [...h[0] || (h[0] = [
        be("div", { class: "inner" }, null, -1)
      ])], 2)
    ], 10, Gp));
  }
}), zp = /* @__PURE__ */ sn(Wp, [["__scopeId", "data-v-60b62a98"]]), Kp = {
  key: 0,
  class: "material-picker__selected"
}, Hp = ["src", "alt"], Zp = ["title"], Jp = { class: "material-picker__selected-stack" }, Qp = { class: "material-picker__selected-line" }, Yp = { class: "material-picker__selected-name" }, Xp = {
  key: 0,
  class: "c-badge c-badge--light c-badge--sm material-picker__brand"
}, em = {
  key: 0,
  class: "material-picker__selected-code"
}, tm = {
  key: 1,
  class: "material-picker__placeholder"
}, nm = { class: "material-picker__search-wrap" }, am = ["placeholder"], im = {
  key: 0,
  class: "material-picker__search-spinner",
  "aria-hidden": "true"
}, sm = {
  class: "material-picker__list",
  role: "listbox"
}, lm = {
  key: 0,
  class: "material-picker__empty"
}, om = ["aria-selected", "onMousedown", "onMouseenter"], rm = ["src", "alt"], um = ["title"], cm = { class: "material-picker__selected-stack" }, dm = { class: "material-picker__selected-line" }, fm = { class: "material-picker__selected-name" }, pm = {
  key: 0,
  class: "c-badge c-badge--light c-badge--sm material-picker__brand"
}, mm = {
  key: 0,
  class: "material-picker__selected-code"
}, gm = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = G(), s = G(), u = G(), r = G(!1), d = G(""), h = G(0), m = G(!1);
    let P = null, O = null;
    const b = G([]), _ = /* @__PURE__ */ new Map(), U = G(null), de = F(() => t.id || `material-picker-${Math.random().toString(36).slice(2, 8)}`), q = F(() => t.modelValue !== void 0 && t.modelValue !== null ? t.modelValue : t.value !== void 0 && t.value !== null ? t.value : null), { floatingStyles: V, teleportTarget: fe, syncFloatingFont: Y } = ql(
      i,
      s,
      {
        sizeApply({ rects: B, availableWidth: J, availableHeight: ke, elements: Ve }) {
          const te = B.reference.width, we = Math.min(J, Math.max(te, 360));
          Object.assign(Ve.floating.style, {
            maxHeight: `${Math.max(200, ke)}px`,
            minWidth: `${te}px`,
            width: `${we}px`,
            maxWidth: `${J}px`
          });
        }
      },
      r
    ), k = F(() => Array.isArray(t.options));
    function M(B) {
      return B.map((J, ke) => {
        const Ve = la(J, { fallback: J.name }), te = [Ve.fullLabel, J.code, J.displayName].filter(Boolean).join(" ").toLowerCase(), we = J._id || `idx-${ke}`;
        return { ...J, _key: `${Ve.groupKey}|${we}`, _summary: Ve, _haystack: te };
      });
    }
    const le = F(() => k.value ? M(t.options ?? []) : []), ge = F(() => k.value ? [] : M(b.value)), W = F(() => {
      if (k.value) {
        const B = d.value.trim().toLowerCase();
        return B ? le.value.filter((J) => J._haystack.includes(B)) : le.value;
      }
      return ge.value;
    }), x = F(() => {
      const B = q.value;
      if (!B) return null;
      if (k.value) {
        const Ve = B.toUpperCase(), we = le.value.find(
          (_e) => typeof _e.code == "string" && _e.code.toUpperCase() === Ve
        ) || le.value.find((_e) => D(_e) === B);
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
    function oe(B) {
      return D(B) === q.value;
    }
    function ie() {
      t.disabled || t.readonly || (r.value = !r.value, r.value && (d.value = "", h.value = 0, Mt(() => {
        Y(), u.value?.focus(), !k.value && b.value.length === 0 && Xe("");
      })));
    }
    function se(B) {
      U.value = B;
      const J = D(B);
      a("update:modelValue", J), a("update:value", J), a("select", B), r.value = !1, d.value = "";
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
        const Ve = await t.searchFn(B);
        _.set(J, Ve), b.value = Ve;
      } catch (Ve) {
        if (Ve?.name === "CanceledError" || Ve?.code === "ERR_CANCELED") return;
        b.value = [];
      } finally {
        m.value = !1;
      }
    }
    function Pe() {
      k.value || (P && clearTimeout(P), P = setTimeout(
        () => Xe(d.value),
        t.debounceMs
      ));
    }
    Qe(q, async (B) => {
      if (!k.value) {
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
      if (k.value && q.value) {
        const B = le.value.find((J) => D(J) === q.value);
        B && a("loaded", B);
      }
    });
    function Te(B) {
      switch (B.key) {
        case "ArrowDown":
          B.preventDefault(), h.value < W.value.length - 1 && h.value++;
          break;
        case "ArrowUp":
          B.preventDefault(), h.value > 0 && h.value--;
          break;
        case "Enter":
          B.preventDefault(), W.value[h.value] && se(W.value[h.value]);
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
    }), ii(() => {
      document.removeEventListener("mousedown", De), P && clearTimeout(P), O && O.abort();
    }), Qe(W, () => {
      h.value = 0;
    }), (B, J) => (A(), K("div", {
      class: ot(["input-wrapper material-picker", { issue: e.issue, required: e.required, disabled: e.disabled, focused: r.value }])
    }, [
      e.label && e.enableLabel ? (A(), Ne(Sa, {
        key: 0,
        id: de.value,
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
        class: ot(["material-picker__wrapper", { focused: r.value, empty: !x.value }]),
        onClick: ie
      }, [
        x.value ? (A(), K("div", Kp, [
          x.value._summary.imageUrl ? (A(), K("img", {
            key: 0,
            src: x.value._summary.imageUrl,
            class: "material-picker__thumb material-picker__thumb--lazy",
            loading: "lazy",
            alt: x.value._summary.productLabel,
            onLoad: J[0] || (J[0] = (ke) => ke.target.classList.add("material-picker__thumb--loaded"))
          }, null, 40, Hp)) : x.value.colorHex ? (A(), K("span", {
            key: 1,
            class: "material-picker__swatch",
            style: Gt({ background: x.value.colorHex }),
            title: x.value.color || "",
            "aria-hidden": "true"
          }, null, 12, Zp)) : ue("", !0),
          be("span", Jp, [
            be("span", Qp, [
              be("span", Yp, Se(x.value._summary.productLabel), 1),
              x.value._summary.brand ? (A(), K("span", Xp, Se(x.value._summary.brand), 1)) : ue("", !0)
            ]),
            x.value._summary.code ? (A(), K("span", em, Se(x.value._summary.code), 1)) : ue("", !0)
          ])
        ])) : (A(), K("span", tm, Se(e.placeholder || "Select…"), 1)),
        x.value && !e.disabled && e.allowClear ? (A(), K("button", {
          key: 2,
          type: "button",
          class: "c-btn c-btn--xs c-btn--unstyled field-clear-btn material-picker__clear",
          "aria-label": "Clear selection",
          onClick: Un(We, ["stop"])
        }, "×")) : ue("", !0)
      ], 2),
      (A(), Ne(ai, {
        to: E(fe),
        disabled: !E(fe)
      }, [
        r.value ? (A(), K("div", {
          key: 0,
          ref_key: "floatingRef",
          ref: s,
          class: "material-picker__dropdown",
          style: Gt(E(V)),
          onMousedown: J[4] || (J[4] = Un(() => {
          }, ["prevent"]))
        }, [
          be("div", nm, [
            J[5] || (J[5] = be("span", {
              class: "material-picker__search-icon",
              "aria-hidden": "true"
            }, "⌕", -1)),
            Qi(be("input", {
              ref_key: "searchRef",
              ref: u,
              "onUpdate:modelValue": J[1] || (J[1] = (ke) => d.value = ke),
              type: "text",
              class: "material-picker__search",
              placeholder: e.searchPlaceholder,
              onMousedown: J[2] || (J[2] = Un(() => {
              }, ["stop"])),
              onInput: Pe,
              onKeydown: Te
            }, null, 40, am), [
              [vl, d.value]
            ]),
            m.value ? (A(), K("span", im, "…")) : ue("", !0)
          ]),
          be("div", sm, [
            W.value.length === 0 ? (A(), K("div", lm, Se(e.emptyMessage), 1)) : ue("", !0),
            (A(!0), K(It, null, Zt(W.value, (ke, Ve) => (A(), K("div", {
              key: ke._key,
              class: ot(["material-picker__option", {
                highlighted: Ve === h.value,
                selected: oe(ke)
              }]),
              role: "option",
              "aria-selected": oe(ke),
              onMousedown: Un((te) => se(ke), ["prevent"]),
              onMouseenter: (te) => h.value = Ve
            }, [
              ke._summary.imageUrl ? (A(), K("img", {
                key: 0,
                src: ke._summary.imageUrl,
                class: "material-picker__thumb material-picker__thumb--lazy",
                loading: "lazy",
                alt: ke._summary.productLabel,
                onLoad: J[3] || (J[3] = (te) => te.target.classList.add("material-picker__thumb--loaded"))
              }, null, 40, rm)) : ke.colorHex ? (A(), K("span", {
                key: 1,
                class: "material-picker__swatch",
                style: Gt({ background: ke.colorHex }),
                title: ke.color || "",
                "aria-hidden": "true"
              }, null, 12, um)) : ue("", !0),
              be("span", cm, [
                be("span", dm, [
                  be("span", fm, Se(ke._summary.productLabel), 1),
                  ke._summary.brand ? (A(), K("span", pm, Se(ke._summary.brand), 1)) : ue("", !0)
                ]),
                ke._summary.code ? (A(), K("span", mm, Se(ke._summary.code), 1)) : ue("", !0)
              ])
            ], 42, om))), 128))
          ])
        ], 36)) : ue("", !0)
      ], 8, ["to", "disabled"]))
    ], 2));
  }
}), hm = /* @__PURE__ */ sn(gm, [["__scopeId", "data-v-6712de1b"]]), vm = ["id", "data-field", "data-index", "disabled"], oo = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = F(() => t.type === "finish" ? ["fass", "spray-can"] : ["fass", "planing"]), s = F(() => !!t.inputShape && ia(t.inputShape, t.type, "face.a")), u = F(() => !!t.inputShape && ia(t.inputShape, t.type, "face.b")), r = () => {
      t.disabled || a("clicked");
    };
    return (d, h) => {
      const m = oa("Icon");
      return A(), K("button", {
        id: e.id,
        class: ot(["c-btn", [`${e.type}-button`, {
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
      ], 10, vm);
    };
  }
}), bm = { inheritAttrs: !1 }, ym = /* @__PURE__ */ vt({
  ...bm,
  __name: "FinishButton",
  setup(e) {
    return (n, t) => (A(), Ne(oo, Kt({ type: "finish" }, n.$attrs), null, 16));
  }
});
function km(e) {
  return e.machining ? "toData" in e.machining ? e.machining.toData() : e.machining : { holes: [], hingeHoles: [], corners: {} };
}
function wm(e) {
  const n = km(e);
  return n ? !!(n.holes && n.holes.length > 0 || n.hingeHoles && n.hingeHoles.length > 0 || n.corners && Object.values(n.corners).some((t) => t && t.type && t.size > 0)) : !1;
}
const Sm = vt({
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
      return wm(this.inputShape);
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
}), xm = ["id", "disabled"];
function Pm(e, n, t, a, i, s) {
  const u = oa("Icon");
  return A(), K("button", {
    id: e.id,
    class: ot(["c-btn machining-button", { selected: e.hasMachining }]),
    type: "button",
    disabled: e.disabled,
    onClick: n[0] || (n[0] = (...r) => e.openMachining && e.openMachining(...r))
  }, [
    st(u, { icon: ["fass", "machining"] })
  ], 10, xm);
}
const Im = /* @__PURE__ */ sn(Sm, [["render", Pm]]), Cm = vt({
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
}), Lm = ["id", "disabled"];
function Om(e, n, t, a, i, s) {
  const u = oa("Icon");
  return A(), K("button", {
    id: e.id,
    class: ot(["c-btn custom-products-button", { selected: e.hasSelections }]),
    type: "button",
    disabled: e.disabled,
    onClick: n[0] || (n[0] = (...r) => e.open && e.open(...r))
  }, [
    st(u, { icon: ["fass", "box"] })
  ], 10, Lm);
}
const Em = /* @__PURE__ */ sn(Cm, [["render", Om]]), Fm = ["id"], gl = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = G(0), s = G(!1), u = (W, x, D, oe) => {
      if (!Ye(D) || x === 0)
        return W;
      const ie = r();
      return x === 1 || x === 2 && oe !== "n" && W ? ie : W;
    }, r = (W) => {
      const x = { ...t, ...W };
      if (!x.rectangle || !Ye(x.rectangle)) return "";
      let D = "";
      switch (x.orientationModel) {
        case 0:
          D = fe.value;
          break;
        case 1:
          x.stockGrain === "y" || x.stockGrain === "n" ? D = x.rectangle.l >= x.rectangle.w ? "l" : "w" : x.rectangle.l >= x.rectangle.w ? D = x.stockGrain : D = D = x.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          D = x.rectangle.l >= x.rectangle.w ? "l" : "w";
          break;
      }
      return D;
    }, d = () => {
      if (t.disabled || q.value.length <= 1)
        return;
      const W = h(fe.value);
      "multiEdit" in t.rectangle && t.rectangle.multiEdit && fe.value === "" && i.value !== W && i.value === 0 && (i.value = W);
      let D = null;
      [1, 2].includes(t.orientationModel) ? D = P() : D = m(), i.value = D;
    }, h = (W) => {
      const x = q.value.findIndex((D) => D === W);
      return x === -1 ? 0 : x;
    }, m = () => {
      let W = i.value + 1;
      return W > q.value.length - 1 && (W = 0), W;
    }, P = () => {
      let W = 0;
      if (fe.value === "") {
        const x = r();
        W = q.value.findIndex((D) => D === x);
      } else
        W = q.value.findIndex((x) => x === "");
      return W;
    }, O = (W) => {
      a("updateOrientation", W);
    }, b = () => {
      const W = fe.value;
      if ("multiEdit" in t.rectangle && t.rectangle.multiEdit)
        return W === " " ? " " : W === "" ? "" : W === "l" ? "l" : W === "w" ? "w" : "default";
      switch (t.orientationModel) {
        case 0:
          return W === " " ? " " : W ? t.stockGrain === "n" ? W || t.shapeOrientation || "default" : t.stockGrain === "w" ? W === "w" ? "w" : "l" : W === "l" ? "l" : "w" : "default";
        case 1:
          return W === " " ? " " : W ? t.stockGrain === "n" ? W || t.shapeOrientation || "default" : t.stockGrain === "w" ? W === "w" ? "w" : "l" : W === "l" ? "l" : "w" : "default";
        case 2:
          return W === " " ? " " : W ? t.stockGrain === "n" ? W || t.shapeOrientation || "default" : t.stockGrain === "w" ? W === "w" ? "w" : "l" : W === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, _ = () => {
      if (!t.rectangle)
        return;
      if ("multiEdit" in t.rectangle && t.rectangle.multiEdit && !fe.value) {
        de("");
        return;
      }
      const W = u(
        fe.value,
        t.orientationModel,
        t.rectangle,
        t.stockGrain
      );
      if (W !== fe.value) {
        de(W);
        return;
      }
      if (!s.value || i.value === -1) {
        const x = h(fe.value);
        i.value = x;
      }
      if (Ye(t.rectangle)) {
        if (t.orientationModel === 1) {
          const x = k.value ? r() : fe.value;
          de(x);
          return;
        }
        if (t.orientationModel === 2) {
          let x;
          k.value ? x = t.stockGrain !== "n" ? r() : "" : x = fe.value, de(x);
        }
      }
    }, U = G(!1), de = (W) => {
      const x = h(W);
      U.value = !0, i.value = x, U.value = !1, O(W);
    }, q = F(() => {
      if (!t.rectangle) return ["l", "w"];
      if (An(t.rectangle)) return ["l", "w"];
      let W = ["", "l", "w"];
      return t.rectangle.multiEdit ? [" ", "", "l", "w"] : (V.value && (W = W.filter((x) => x !== "w")), W);
    }), V = F(() => Ye(t.rectangle) || Si(t.rectangle) ? t.rectangle.isSquare : t.rectangleType && t.rectangle?.l && t.rectangle?.w ? t.rectangle?.l === t.rectangle?.w : !1), fe = F(() => {
      let W = "";
      if (An(t.rectangle))
        W = t.rectangle.direction === "horizontal" ? "l" : "w";
      else if (Ye(t.rectangle)) {
        const x = t.rectangle.orientationLock;
        W = x === null ? "" : x;
      } else if (Si(t.rectangle)) {
        const D = t.rectangle.grain ?? "";
        D === "l" || D === "w" || D === "" || D === " " ? W = D : W = "";
      }
      return W;
    }), Y = F(() => An(t.rectangle) || !t.rectangle ? {
      l: null,
      w: null
    } : {
      l: t.rectangle.l,
      w: t.rectangle.w
    }), k = F(() => !Y.value.l && !Y.value.w), M = F(() => An(t.rectangle) ? !1 : za(
      t.orientationModel,
      t.stockGrain,
      t.rectangle,
      t.rectangleType,
      t.shapeOrientation
    )), le = F(() => {
      if (!t.rectangle)
        return t.shapeOrientation ? "noGrain" : "freeRotation";
      if (Si(t.rectangle) || t.rectangleType === "stock") {
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
      const W = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, x = t.stockGrain || "default";
      let D = "default";
      Ye(t.rectangle) || t.rectangleType === "shape" ? D = b() : An(t.rectangle) && (D = t.rectangle.direction || "default");
      const oe = W[x]?.[D];
      return oe || W[x]?.default || "freeRotation";
    }), ge = F(() => ({
      delete: "trash",
      noChange: "no-change",
      freeRotation: "arrows-rotate",
      leftRight: "arrows-left-right",
      topBottom: "arrows-up-down",
      grainLeftRight: "grain-h",
      grainTopBottom: "grain-v",
      noGrain: "no-grain"
    })[le.value]);
    return Qe(i, (W, x) => {
      s.value && x !== void 0 && (U.value || O(q.value[W]));
    }, { immediate: !1 }), Qe(Y, (W, x) => {
      if (!t.rectangle || t.orientationModel === 0 || !Ye(t.rectangle) || Ye(t.rectangle) && (t.orientationModel === 2 && x.l && x.w && !fe.value || t.stockGrain === "n" && !fe.value))
        return;
      const D = r();
      fe.value !== D && O(D);
    }, { immediate: !1 }), Qe(() => t.stockGrain, (W, x) => {
      W !== x && _();
    }, { immediate: !0 }), fn(() => {
      _(), Mt(() => s.value = !0);
    }), (W, x) => {
      const D = oa("Icon");
      return A(), K("button", {
        type: "button",
        id: e.id,
        class: ot(["c-btn orientation-button", { rot: M.value, square: V.value, disabled: e.disabled, [le.value]: !0 }]),
        tabindex: "0",
        "aria-label": "Part orientation",
        onClick: d
      }, [
        st(D, { name: ge.value }, null, 8, ["name"])
      ], 10, Fm);
    };
  }
}), Am = { inheritAttrs: !1 }, Tm = /* @__PURE__ */ vt({
  ...Am,
  __name: "PlaningButton",
  setup(e) {
    return (n, t) => (A(), Ne(oo, Kt({ type: "planing" }, n.$attrs), null, 16));
  }
});
function Nm(e, n, t) {
  let a = null;
  Qe(
    () => e.value ? { l: e.value.l, w: e.value.w } : null,
    (i) => {
      const s = typeof n == "number" ? n : n.value;
      if (!Su(s) || !i || !e.value) return;
      const u = i.w > i.l;
      if (a === null) {
        a = u;
        return;
      }
      if (a !== u) {
        const r = xu(s);
        for (const d of r)
          au(e.value, d);
        a = u;
      }
    },
    { immediate: !0 }
  );
}
const $m = {
  key: 0,
  class: "info"
}, Mm = ["disabled"], Dm = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = F(() => t.field.name === "banding" && Ye(t.item) ? t.item : null);
    Nm(i, Wt(t, "orientationModel"));
    const s = ["orientationLock", "grain", "banding", "bandingOptions", "machining", "finish", "planing", "imageUpload"], u = F(() => s.includes(t.field.name) || t.field.name === "material" && t.typePrefix === "part" || t.field.name === "t" && t.thicknessOptions?.length > 0 || t.field.name === "w" && t.widthOptions?.length > 0), r = F(() => {
      try {
        const k = t.field.propertyPath || t.field.name;
        return k.includes(".") ? qt(t.item, k) ?? null : t.item[k] ?? null;
      } catch (k) {
        return console.error("[CheckoutField] Error getting field value:", k), null;
      }
    }), d = F(() => {
      if (t.field.custom && t.field.type) {
        const le = t.field.type;
        if (["checkbox", "select", "string", "integer", "unitDependent"].includes(le))
          return le;
      }
      const k = {
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
      const M = k[t.field.type];
      return M || "string";
    }), h = F(() => t.field.output ? t.field.output : null), m = F(() => t.field.options || []), P = F(() => !!(t.readonly || t.item?.readonly || t.fullStockDisabled)), O = F(() => t.item.isNew ? !1 : zs(t.item, [t.field.name])), b = F(() => t.item.isNew ? !1 : zs(t.item, [t.field.name], !0)), _ = F(() => t.multiEdit || t.item.isNew || !1), U = F(() => t.materialOptions?.length > 0 && Ye(t.item) ? !t.item.material : !1), de = F(() => t.widthOptions?.length === 1), q = F(() => t.field.info ? typeof t.field.info == "string" ? t.field.info : typeof t.field.info == "object" && r.value !== null && t.field.info[r.value] || null : null), V = (k) => {
      a("update", k);
    }, fe = (k, M) => {
      a("validation", k, M);
    }, Y = () => {
      a("blur");
    };
    return (k, M) => u.value ? (A(), K(It, { key: 1 }, [
      e.field.name === "orientationLock" ? (A(), Ne(gl, {
        key: 0,
        rectangle: e.item,
        "stock-grain": e.stockGrain,
        "orientation-model": e.orientationModel,
        "button-background": "#2c8d8f",
        disabled: P.value,
        onUpdateOrientation: V
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : e.field.name === "grain" ? (A(), Ne(gl, {
        key: 1,
        rectangle: e.item,
        "button-background": "#2c8d8f",
        "stock-grain": e.stockGrain,
        "orientation-model": e.orientationModel,
        disabled: P.value,
        onUpdateOrientation: V
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : e.field.name === "banding" ? (A(), Ne(zp, {
        key: 2,
        "input-shape": E(Ye)(e.item) ? e.item : null,
        open: e.bandingEnabled?.autoId === e.item.autoId,
        "stock-grain": e.stockGrain,
        "orientation-model": e.orientationModel,
        index: e.index,
        disabled: P.value || e.materialExtrasDisabled?.banding,
        onClicked: M[0] || (M[0] = (le) => k.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "orientation-model", "index", "disabled"])) : e.field.name === "finish" ? (A(), Ne(ym, {
        key: 3,
        "input-shape": E(Ye)(e.item) ? e.item : null,
        open: !1,
        index: e.index,
        disabled: P.value || e.materialExtrasDisabled?.finish,
        onClicked: M[1] || (M[1] = (le) => k.$emit("open-finish"))
      }, null, 8, ["input-shape", "index", "disabled"])) : e.field.name === "planing" ? (A(), Ne(Tm, {
        key: 4,
        "input-shape": E(Ye)(e.item) ? e.item : null,
        open: !1,
        index: e.index,
        disabled: P.value || e.materialExtrasDisabled?.planing,
        onClicked: M[2] || (M[2] = (le) => k.$emit("open-planing"))
      }, null, 8, ["input-shape", "index", "disabled"])) : e.field.name === "machining" ? (A(), Ne(Im, {
        key: 5,
        "input-shape": E(Ye)(e.item) ? e.item : null,
        disabled: P.value || e.materialExtrasDisabled?.machining,
        onOpen: M[3] || (M[3] = (le) => k.$emit("open-machining"))
      }, null, 8, ["input-shape", "disabled"])) : e.field.name === "customProducts" ? (A(), Ne(Em, {
        key: 6,
        "input-shape": E(Ye)(e.item) ? e.item : null,
        disabled: P.value,
        onOpen: M[4] || (M[4] = (le) => k.$emit("open-custom-products"))
      }, null, 8, ["input-shape", "disabled"])) : e.field.name === "material" && e.typePrefix === "part" && e.materialItems && e.materialItems.length > 0 ? (A(), Ne(hm, {
        key: 7,
        id: `${e.typePrefix}-material-${e.index}`,
        value: r.value,
        options: e.materialItems,
        "value-key": "name",
        label: E(Ae)(e.field.label || "fields.material"),
        placeholder: E(Ae)(e.field.placeholder || "fields.material"),
        "enable-label": !1,
        disabled: e.field.disabled || P.value || e.readonly,
        required: e.field.required || !1,
        issue: O.value,
        "allow-clear": !1,
        "onUpdate:value": V
      }, null, 8, ["id", "value", "options", "label", "placeholder", "disabled", "required", "issue"])) : e.field.name === "material" && e.typePrefix === "part" ? (A(), Ne(xa, {
        key: 8,
        id: `${e.typePrefix}-material-${e.index}`,
        "data-field": e.field.name,
        "data-index": e.index,
        type: "select",
        value: r.value,
        label: E(Ae)(e.field.label || "fields.material"),
        placeholder: E(Ae)(e.field.placeholder || "fields.material"),
        "enable-label": !1,
        output: "string",
        options: e.materialOptions,
        "select-first-option-disabled": !0,
        disabled: !e.materialOptions?.length,
        required: !1,
        text: {
          select: E(Ae)("actions.select"),
          delete: E(Ae)("actions.delete")
        },
        "onUpdate:value": V,
        onValidation: fe
      }, {
        default: tn(() => [
          Ht(k.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : e.field.name === "t" && e.thicknessOptions?.length > 0 ? (A(), Ne(xa, {
        key: 9,
        id: `${e.typePrefix}-${e.field.name}-${e.index}`,
        "data-field": e.field.name,
        "data-index": e.index,
        type: "select",
        value: r.value,
        label: E(Ae)(e.field.label || "fields.t"),
        "enable-label": !1,
        options: e.thicknessOptions,
        readonly: e.readonly,
        disabled: U.value,
        required: e.field.required || !1,
        "number-format": e.numberFormat,
        text: {
          select: E(Ae)("actions.select"),
          delete: E(Ae)("actions.delete")
        },
        output: "number",
        "onUpdate:value": V,
        onValidation: fe
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : e.field.name === "w" && e.widthOptions?.length > 0 ? (A(), Ne(xa, {
        key: 10,
        id: `${e.typePrefix}-${e.field.name}-${e.index}`,
        "data-field": e.field.name,
        "data-index": e.index,
        type: "select",
        value: r.value,
        label: E(Ae)(e.field.label || "fields.w"),
        "enable-label": !1,
        options: e.widthOptions,
        readonly: e.readonly,
        disabled: de.value,
        required: e.field.required || !1,
        "number-format": e.numberFormat,
        text: {
          select: E(Ae)("actions.select"),
          delete: E(Ae)("actions.delete")
        },
        output: "number",
        "onUpdate:value": V,
        onValidation: fe
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : e.field.name === "imageUpload" ? (A(), K("button", {
        key: 11,
        type: "button",
        disabled: e.readonly,
        onClick: M[5] || (M[5] = (le) => k.$emit("open-image-upload"))
      }, [
        st(E(Ya), { icon: ["fass", "image"] })
      ], 8, Mm)) : ue("", !0)
    ], 64)) : (A(), Ne(xa, {
      key: 0,
      id: `${e.typePrefix}-${e.field.name}-${e.index}`,
      "data-field": e.field.name,
      "data-index": e.index,
      type: d.value,
      value: r.value,
      label: E(Ae)(e.field.label || e.field.name),
      placeholder: E(Ae)(e.field.placeholder || e.field.name),
      "enable-label": e.enableLabel,
      output: h.value,
      options: m.value,
      "select-first-option-disabled": e.field.selectFirstOptionDisabled ?? !0,
      disabled: e.field.disabled || P.value,
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
      "onUpdate:value": V,
      onValidation: fe,
      onBlur: Y
    }, {
      default: tn(() => [
        q.value ? (A(), K("p", $m, [
          st(E(Ya), { icon: ["fass", "info-circle"] }),
          nn(" " + Se(q.value), 1)
        ])) : ue("", !0),
        Ht(k.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "data-field", "data-index", "type", "value", "label", "placeholder", "enable-label", "output", "options", "select-first-option-disabled", "disabled", "readonly", "required", "allow-zero", "true-value", "false-value", "default", "number-format", "min", "max", "multi-edit", "text", "issue", "warning", "disable-required-validation"]));
  }
}), _m = {
  key: 0,
  class: "base-dialog__header"
}, Rm = {
  key: 1,
  class: "base-dialog__footer"
}, Vm = /* @__PURE__ */ vt({
  __name: "BaseDialog",
  props: {
    open: { type: Boolean, default: void 0 },
    title: {},
    size: { default: "md" },
    closeOnBackdrop: { type: Boolean, default: !0 },
    compact: { type: Boolean, default: !0 },
    bodyForm: { type: Boolean, default: !1 }
  },
  emits: ["update:open", "opened", "closed"],
  setup(e, { expose: n, emit: t }) {
    const a = e, i = t, s = G(null), u = G(null), r = G(null), d = G({}), h = !1;
    function m() {
      const Y = r.value;
      if (!Y) return;
      const k = getComputedStyle(Y);
      d.value = {
        "font-family": k.fontFamily,
        "font-size": k.fontSize,
        "line-height": k.lineHeight,
        color: k.color
      };
    }
    const P = window.__baseDialogStack ?? (window.__baseDialogStack = G([])), O = /* @__PURE__ */ Symbol("base-dialog"), b = F(() => P.value.indexOf(O)), _ = F(() => ({
      "base-dialog__body--form": a.bodyForm,
      "smartcut-content": a.compact
    })), U = F(() => ({ ...d.value }));
    function de() {
      const Y = s.value;
      if (!Y || Y.open) return;
      m(), Y.showModal(), P.value.includes(O) || P.value.push(O);
      const k = document.getElementById("smartcut-notices");
      k?.matches(":popover-open") && (k.hidePopover(), k.showPopover()), i("opened");
    }
    function q() {
      const Y = s.value;
      !Y || !Y.open || Y.close();
    }
    function V() {
      const Y = P.value.indexOf(O);
      Y >= 0 && P.value.splice(Y, 1), i("update:open", !1), i("closed");
    }
    function fe(Y) {
      a.closeOnBackdrop && Y.target === s.value && q();
    }
    return Qe(() => a.open, (Y, k) => {
      Y !== void 0 && (Y && !k ? de() : !Y && k && q());
    }), fn(() => {
      a.open === !0 && de();
    }), ii(() => {
      s.value?.open && s.value.close();
      const Y = P.value.indexOf(O);
      Y >= 0 && P.value.splice(Y, 1);
    }), n({
      show: de,
      close: q,
      dialogRef: s,
      bodyRef: u
    }), (Y, k) => (A(), K(It, null, [
      be("span", {
        ref_key: "anchorRef",
        ref: r,
        class: "base-dialog__anchor",
        "aria-hidden": "true"
      }, null, 512),
      (A(), Ne(ai, {
        to: "body",
        disabled: h
      }, [
        be("dialog", {
          ref_key: "dialogRef",
          ref: s,
          class: ot(["base-dialog", [`base-dialog--${e.size}`, { "base-dialog--compact": e.compact, "base-dialog--stacked": b.value > 0 }]]),
          style: Gt(U.value),
          onClick: fe,
          onClose: V
        }, [
          Y.$slots.header || e.title ? (A(), K("header", _m, [
            Ht(Y.$slots, "header", {}, () => [
              be("h3", null, Se(e.title), 1),
              be("button", {
                type: "button",
                class: "base-dialog__close",
                "aria-label": "Close",
                onClick: q
              }, "×")
            ])
          ])) : ue("", !0),
          be("div", {
            ref_key: "bodyRef",
            ref: u,
            class: ot(["base-dialog__body", _.value])
          }, [
            Ht(Y.$slots, "default")
          ], 2),
          Y.$slots.footer ? (A(), K("footer", Rm, [
            Ht(Y.$slots, "footer", { close: q })
          ])) : ue("", !0)
        ], 38)
      ]))
    ], 64));
  }
}), qm = { class: "full-stock-dialog__intro" }, Bm = { class: "full-stock-dialog__options" }, jm = ["onClick"], Um = { class: "full-stock-dialog__dim" }, Gm = {
  key: 0,
  class: "full-stock-dialog__price"
}, Wm = ["onClick"], zm = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = F({
      get: () => t.open,
      set: (m) => a("update:open", m)
    }), s = F(() => "Choose sheet size"), u = F(() => {
      const m = [];
      t.materialLabel && m.push(t.materialLabel), t.thickness != null && t.thickness !== "" && m.push(`${t.thickness}mm`);
      const P = m.join(" · ");
      return P ? `Multiple sheet sizes available for ${P}. Pick the one you want to buy.` : "Multiple sheet sizes available. Pick the one you want to buy.";
    });
    let r = !1;
    function d(m) {
      r = !0, a("pick", m), a("update:open", !1);
    }
    function h() {
      r || a("cancel"), r = !1;
    }
    return (m, P) => (A(), Ne(Vm, {
      open: i.value,
      "onUpdate:open": P[0] || (P[0] = (O) => i.value = O),
      title: s.value,
      size: "sm",
      onClosed: h
    }, {
      footer: tn(({ close: O }) => [
        be("button", {
          type: "button",
          class: "c-btn c-btn--ghost",
          onClick: O
        }, "Cancel", 8, Wm)
      ]),
      default: tn(() => [
        be("div", qm, Se(u.value), 1),
        be("ul", Bm, [
          (A(!0), K(It, null, Zt(e.options, (O) => (A(), K("li", {
            key: `${O.l}x${O.w}`,
            class: "full-stock-dialog__option"
          }, [
            be("button", {
              type: "button",
              class: "full-stock-dialog__option-btn",
              onClick: (b) => d(O)
            }, [
              be("span", Um, Se(O.l) + " × " + Se(O.w), 1),
              O.cost != null && e.formatPrice ? (A(), K("span", Gm, Se(e.formatPrice(O.cost)), 1)) : ue("", !0)
            ], 8, jm)
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title"]));
  }
}), Km = /* @__PURE__ */ sn(zm, [["__scopeId", "data-v-df7e1e1c"]]), Hm = { class: "checkout-calculator-wrapper" }, Zm = {
  key: 0,
  class: "row table-heading"
}, Jm = {
  key: 0,
  class: "cell center"
}, Qm = ["onClick"], Ym = {
  key: 0,
  class: "cell"
}, Xm = ["onClick"], eg = { class: "cell" }, tg = ["disabled", "aria-label", "onClick"], ng = { class: "button-wrapper main" }, ag = ["aria-label"], ig = ["aria-label", "title", "disabled"], sg = ["aria-label"], lg = { id: "part-count" }, og = {
  key: 5,
  class: "pagination-controls"
}, rg = { class: "c-btn-group" }, ug = ["disabled"], cg = ["disabled"], dg = { class: "pagination-info" }, fg = ["disabled"], pg = ["disabled"], mg = {
  key: 7,
  id: "messages"
}, gg = {
  key: 0,
  class: "heading"
}, hg = { class: "content" }, vg = {
  key: 8,
  id: "progress"
}, bg = { id: "diagram-wrapper" }, yg = {
  key: 0,
  id: "stack"
}, kg = {
  key: 3,
  class: "debug"
}, wg = /* @__PURE__ */ vt({
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
    const a = Bt(() => import("./InputIssues-BMr2f9GF.js")), i = Bt(() => import("./Machining-m8k-ti5H.js")), s = Bt(() => import("./CustomProducts-z3VYnOtv.js")), u = Bt(() => import("./ImportCSV-CmoHXrdq.js")), r = Bt(() => import("./ObjectViewer-BvG3JkRw.js")), d = Bt(() => import("./ImageUpload-CmSlvVMs.js")), h = Bt(() => import("./EcommerceGroups-BqVoCjff.js")), m = () => import("./Diagram-DWrNP2dW.js"), P = () => import("./Navigation-l4PiyTga.js"), O = () => import("./StockNavigation-CO_tA22b.js"), b = () => import("./CalculationSpinner-CZbtUhus.js"), _ = Bt(m), U = Bt(P), de = Bt(O), q = Bt(b);
    let V = !1;
    const fe = G(!1);
    function Y() {
      V || (V = !0, m().then(() => {
        fe.value = !0;
      }), P(), O(), b());
    }
    const {
      inputs: k,
      totalInputShapes: M,
      getShapeGrainSummary: le,
      updateNumberFormat: ge,
      validateInputStock: W,
      // validateInputShapeField,
      // validateInputStockField,
      removeInputShape: x,
      addInputShape: D,
      addInputStock: oe,
      cloneInputShape: ie,
      updateInputShape: se,
      linkRowMaterialByName: We,
      validationIssues: Xe,
      setExtrasOptionsFromPricing: Pe,
      getCentralizedOptions: Te
    } = Dl(), { r: De, updateFromResult: B, stackedStock: J, uniqueAddedShapes: ke, uniqueUsedStock: Ve, usedStock: te, activeStockAutoId: we, activeStock: _e, setActiveStockAutoId: kt } = mf();
    cf({
      stockList: De.stockList
    }, {
      stockList: { itemsPerPage: 10 }
    });
    const { progress: rt, reset: Qt } = Ul(), { addNotice: ut } = is();
    Qe(() => k.inputStock.value?.length ?? 0, (l) => {
      l > 0 && Y();
    }, { immediate: !0 }), Qe(
      () => k.inputStock.value?.[0]?.db_sawId ?? null,
      (l) => {
        if (!l || String(l) === w.value) return;
        const o = y.value?.[String(l)];
        o && T(o);
      }
    );
    const ln = G(!1);
    Qe(() => rt.value.complete, (l) => {
      l && (ln.value = !0);
    }, { immediate: !0 });
    const Yt = F(() => k.inputShapes.value.filter(Ye)), wn = (l) => !l || !Array.isArray(l) ? [] : l.map((o) => lc({ parts: [o] }).parts?.[0] || o), ct = e, X = t, Le = G(!1), ze = G(navigator?.language || "en-US"), Fe = Xn(null), at = window.location.hostname, et = G(!1), dt = G(!0), ft = fr("Checkout/currentURL", window.location.href), pt = G([]), pn = G(null), it = G(null), on = G(!1), mn = G(!1), St = G(!1), gn = G(!1), Sn = G(!1), zn = G(ku()), rn = G(!1), mt = G(1), Dt = G(10), { socket: Lt } = wf({
      refs: {
        connected: et,
        thinking: St
      },
      callbacks: {
        onResult(l) {
          const o = l.optimisation;
          if (B(o), !o.shapeList?.length || !o.stockList?.length) {
            Qt(), ut({
              type: "error",
              message: Ae("errors.calculation.no_result"),
              additional: [Ae("errors.validation.check_inputs")]
            }), St.value = !1;
            return;
          }
          if ((ve.apiVersion || 3) === 2 ? it.value = $p(
            l.jobId,
            ke.value,
            Ve.value,
            te.value,
            De.offcuts?.value || [],
            k.inputShapes.value,
            De.metadata.value,
            ve.resultOrientationModel
          ) : it.value = Mp(
            l.jobId,
            ke.value,
            Ve.value,
            te.value,
            De.offcuts?.value || [],
            k.inputShapes.value,
            De.metadata.value,
            ve.resultOrientationModel
          ), De?.metadata?.value?.unplacedParts?.length) {
            const f = De.metadata.value.unplacedParts.map((C) => C.id).join();
            ut({
              type: "warning",
              message: Ae("errors.validation.parts_not_fit", { count: De.metadata.value.unplacedParts.length }) + ": " + f
            });
          }
          it.value && (it.value.apiResultV3 = bc({
            jobId: l.jobId,
            saw: o.saw,
            stockList: o.stockList,
            shapeList: o.shapeList,
            cutList: o.cutList,
            offcuts: De.offcuts?.value || [],
            unusableShapes: o.unusableShapes,
            metadata: De.metadata.value
          }), X("result", it.value)), St.value = !1;
        },
        onUser(l) {
          Fe.value = l;
        },
        onConnectError(l) {
          ut({
            type: "error",
            message: Ae("errors.network.cannot_connect"),
            additional: [l]
          });
        },
        onError(l) {
          ut({
            type: "error",
            message: Ae("errors.general.error_occurred"),
            additional: [l]
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
    }), w = G(null), y = G({});
    function T(l) {
      if (l) {
        if (l.stockType !== void 0 && (Bi.includes(l.stockType) || console.warn(`${l.stockType} is not a valid stockType, expected ${Bi.join("|")}`), v.stockType = l.stockType, l.stockType === "linear" && (v.cutType = void 0, v.cutPreference = void 0)), l.bladeWidth !== void 0) {
          const o = typeof l.bladeWidth == "string" ? parseFloat(l.bladeWidth) : l.bladeWidth;
          o >= 0 ? v.bladeWidth = o : console.warn(`SmartCut - you provided an incorrect blade width of: ${l.bladeWidth}`);
        }
        if (l.cutType !== void 0 && (v.cutType = l.cutType), l.cutPreference !== void 0 && (Ks.includes(l.cutPreference) ? v.cutPreference = l.cutPreference : console.warn(`SmartCut - cut preference ${l.cutPreference || "N/A"} is not valid. Expected: ${Ks.join("|")}`)), l.guillotineOptions !== void 0 && typeof l.guillotineOptions == "object" && Object.assign(v.guillotineOptions, l.guillotineOptions), l.stackHeight !== void 0) {
          const o = typeof l.stackHeight == "string" ? parseFloat(l.stackHeight) : l.stackHeight;
          v.stackHeight = o;
        }
        l.efficiencyOptions !== void 0 && typeof l.efficiencyOptions == "object" && Object.assign(v.efficiencyOptions, l.efficiencyOptions), l.options !== void 0 && typeof l.options == "object" && (l.options.stockSelection !== void 0 && (v.options.stockSelection = l.options.stockSelection), l.options.stackingMode !== void 0 && (v.options.stackingMode = l.options.stackingMode), l.options.minSpacing !== void 0 && (v.options.minSpacing = l.options.minSpacing)), l.db_id && (w.value = String(l.db_id));
      }
    }
    const j = G(null), ce = F(() => !!ve.enable?.groups && !ct.readonly), ye = G(null), Re = G(0), Ee = G(null), Ue = F(() => {
      const l = k.inputStock.value.map((o) => o.grain).filter((o) => !!o);
      return l.length ? l.every((o) => o === "l") ? "l" : l.every((o) => o === "w") ? "w" : l.some((o) => o === "l" || o === "w") ? "y" : "n" : "n";
    }), Et = F(() => ({
      numberFormat: ve.numberFormat,
      decimalPlaces: ve.decimalPlaces ?? 2,
      fractionRoundTo: ve.fractionRoundTo ?? 0
    })), xn = (l) => {
      Ee.value?.currentGroup && (ye.value = l, Re.value++);
    }, ra = (l) => {
      j.value = k.inputShapes.value.find((o) => o.autoId === l) ?? null;
    }, li = () => {
    }, ua = G(!1), Nn = G(""), ca = G(""), $n = G(!1), p = G(null);
    function I(l) {
      const o = p.value;
      if ($n.value = !1, p.value = null, !o) return;
      const g = { fullStock: !0, l: l.l, w: l.w };
      if (se(o.shape.autoId, g) || (o.shape.fullStock = !0, o.shape.l = l.l, o.shape.w = l.w, o.shape.isNew || o.shape.validate({ fields: ["fullStock", "l", "w"] })), l.db_id || l.code) {
        const C = o.shape.stock || {};
        o.shape.stock = {
          ...C,
          ...l.db_id ? { db_id: l.db_id } : {},
          ...l.code ? { code: l.code } : {}
        };
      }
    }
    function z() {
      $n.value = !1, p.value = null;
    }
    Qe(Xe, (l) => {
      l?.length > 0 ? (ua.value = !0, Nn.value = "Validation Errors", ca.value = l.map((o) => `${Wa(o.message, o.context || o.params)} (${o.category.join(", ")})`).join(`

`)) : Nn.value === "Validation Errors" && (ua.value = !1, Nn.value = "", ca.value = "");
    }, { deep: !0 });
    const Q = un({
      banding: null,
      finish: null,
      info: null,
      planing: null,
      machining: null,
      addon: null
      // imageUpload: null
    }), R = G([]), ee = G([]), he = G([]), Oe = G([]);
    function qe(l) {
      if (l.length > 1) return !0;
      if (l.length === 0) return !1;
      const o = l[0];
      return !!(o.brand || o.variant || o.displayName && o.displayName !== o.name);
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
    }), Ie = un({
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
    }), Ft = G(null), Ke = un({}), At = un({}), Xt = un({}), Kn = G(null), Mn = G(null), oi = F(() => ({
      banding: Ke.rules,
      finish: At.rules,
      planing: Xt.rules
    })), La = F(() => yf({
      stockType: v.stockType || "sheet",
      materials: R.value,
      minDimension: ve.minDimension,
      ...ve.fieldOrder && ve.fieldOrder.length > 0 ? { allowedFieldIds: ve.fieldOrder } : {}
    })), da = G([]), Dn = G({
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
    }), Pn = (l, o) => o ? Ao(o, l).length > 0 ? !0 : l === "banding" ? !!di(o) : !!Nt(o, l)?.sourceCatalogueKey : !1, Ge = ["banding", "finish", "planing"], Tt = (l) => ve.enable?.[l] ? k.inputShapes.value.some((o) => Pn(l, o)) : !1, fa = (l) => Ge.includes(l) ? Tt(l) : Dn.value[l] ?? !0, Oa = F(() => {
      const l = La.value.fields.value, o = La.value.allFieldsMap.value, g = l.filter((Z) => fa(Z.name)), f = ["orientationLock", "banding", "finish", "planing", "machining", "imageUpload"], C = [];
      let L = null;
      const N = g.filter((Z) => Z.name !== "fullStock");
      Dn.value.fullStock && (L = g.find((Z) => Z.name === "fullStock") || o.get("fullStock"));
      for (const Z of f) {
        const me = fa(Z), Me = N.find(($e) => $e.name === Z);
        if (me && !Me) {
          const $e = o.get(Z);
          $e && C.push($e);
        }
      }
      const H = da.value || [];
      return [
        ...L ? [L] : [],
        ...N,
        ...C,
        ...H
      ];
    }), Ea = F(() => {
      let l = Oa.value.length + 2;
      return bt.value && l++, l;
    }), ro = F(() => {
      const l = {
        id: 34,
        del: 32,
        info: 32
      }, o = {
        id: `${l.id}px`,
        del: `${l.del}px`,
        info: `${l.info}px`
      }, g = [];
      for (const f of Oa.value) {
        if (f.name === "trim") continue;
        const C = f.w ?? "minmax(20px, 1fr)";
        g.push(C);
      }
      return g.unshift(o.id), bt.value && g.push(o.info), g.push(o.del), g.join(" ");
    }), pa = F(() => ve.enable?.pagination), ps = F(() => ct.diagramNav || ve.enable?.diagramNav), _n = F(() => pa.value ? Math.ceil(Yt.value.length / Dt.value) : 1), uo = F(() => {
      if (!pa.value) return Yt.value;
      const l = (mt.value - 1) * Dt.value, o = l + Dt.value;
      return Yt.value.slice(l, o);
    }), co = F(() => pa.value ? (mt.value - 1) * Dt.value : 0), Fa = (l) => {
      l < 1 && (l = 1), l > _n.value && (l = _n.value), mt.value = l;
    }, fo = () => Fa(1), po = () => Fa(mt.value - 1), mo = () => Fa(mt.value + 1), go = () => Fa(_n.value), bt = F(() => ct.debug || ve.debug || ve.enable?.debug), ho = F(() => {
      try {
        const l = localStorage.getItem("inputs/inputStock");
        if (!l) return "(empty)";
        const o = JSON.parse(l);
        return JSON.stringify(o.map((g) => ({ material: g.material, db_id: g.db_id, l: g.l, w: g.w, t: g.t })), null, 2);
      } catch {
        return "(parse error)";
      }
    }), vo = F(() => {
      try {
        const l = localStorage.getItem("stock-filter-selections");
        return l || "(empty)";
      } catch {
        return "(read error)";
      }
    }), bo = F(() => ({
      "--btn-color": ve.colors.buttonText,
      "--btn-bg": ve.colors.button,
      "--btn-hover-bg": yo(ve.colors.button, -8),
      "--btn-focus-ring": ve.colors.button
    }));
    function yo(l, o) {
      const g = l.replace("#", ""), f = parseInt(g, 16), C = Math.round(2.55 * o), L = (f >> 16) + C, N = (f >> 8 & 255) + C, H = (f & 255) + C;
      return `#${(16777216 + (L < 255 ? L < 1 ? 0 : L : 255) * 65536 + (N < 255 ? N < 1 ? 0 : N : 255) * 256 + (H < 255 ? H < 1 ? 0 : H : 255)).toString(16).slice(1)}`;
    }
    const ko = {
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
    }, ms = F(() => ct.showCredit !== void 0 ? ct.showCredit : Fe.value ? !(Fe.value && Fe.value?.api?.whiteLabel) : !0), Aa = {
      // @deprecated Use saw.options.stockSelection instead
      stockSelection: (l) => {
        const o = ["efficiency", "smallest"];
        l && !o.includes(l) ? console.warn(`${l} is not a valid stockSelection, expected ${o.join("|")}`) : v.options.stockSelection = l;
      },
      // @deprecated Use saw.options.minSpacing instead
      minSpacing: (l) => {
        v.options.minSpacing = l;
      },
      maxParts: (l) => {
        ve.maxParts = l;
      },
      partsPerPage: (l) => {
        l && l > 0 && (Dt.value = l, ve.partsPerPage = l);
      },
      locale: (l) => {
        ze.value = l.replace(/_/g, "-");
      },
      enable: (l) => {
        const o = {
          name: "partName",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload",
          fullStock: "fullStock"
        };
        if (l) {
          for (const g in hn.enable)
            g in l && (ve.enable[g] = l[g]);
          for (const g in o) {
            const f = o[g], C = qt(l, [f]), L = hn.enable[f];
            Ot(g, C !== void 0 ? C : L);
          }
          Sn.value = qt(l, ["csvImport"]) ?? hn.enable?.csvImport;
        }
      },
      colors: (l) => {
        if (l)
          for (const o in hn.colors)
            o in l && (ve.colors[o] = l[o]);
      },
      orientationModel: (l) => {
        if (![0, 1, 2].includes(l)) {
          ve.orientationModel = 0;
          return;
        }
        ve.orientationModel = l;
      },
      numberFormat: (l) => {
        if (!["decimal", "fraction"].includes(l)) {
          ve.numberFormat = "decimal";
          return;
        }
        ve.numberFormat = l;
      },
      customFields: (l) => {
        if (!Array.isArray(l) || !l?.length)
          return;
        const o = [];
        l.forEach((g) => {
          const f = gs(g.id), C = {
            ...g,
            custom: !0,
            id: f,
            name: f,
            // CheckoutField expects 'name' property
            propertyPath: "customData." + f,
            fieldMap: "customData." + f
          };
          g.type === "checkbox" && (C.w = "32px"), g.type === "integer" || g.type === "float" ? C.output = g.output ?? "number" : g.type === "select" && (C.output = g.output ?? "string", C.options = g.options), o.push(C);
        }), da.value = o, Mt(() => {
          for (const g of k.inputShapes.value)
            g.customData = l.reduce((f, C) => {
              const L = gs(C.id);
              return f[L] = g.customData?.[L] || C.default || "", f;
            }, {});
        });
      }
    }, wo = (l) => {
      bt.value && X("log", ["checkout init...", l]), l?.stockFilterEnabled && localStorage.removeItem("inputs/inputStock"), l?.parts && (l.parts = wn(l.parts));
      let o;
      try {
        o = Fp(l);
      } catch (f) {
        console.error("[init] validation FAILED:", f.message), X("error", f.message || "Invalid init data");
        return;
      }
      if (o.saw && T(o.saw), o.sawsById && (y.value = o.sawsById), o?.options) {
        const f = o.options;
        Rl(f);
        const C = ["stockType", "bladeWidth"];
        if (!o.saw && !l?.stockFilterEnabled)
          X("error", `Saw configuration is required. Missing properties: ${C.join(", ")}`);
        else if (o.saw) {
          const N = C.filter((H) => !(H in o.saw));
          N.length > 0 && X("error", `Missing required saw properties: ${N.join(", ")}`), (o.saw.cutType === "guillotine" || o.saw.cutType === "beam") && !("cutPreference" in o.saw) && X("error", "cutPreference is a required saw property for guillotine and beam cut types");
        }
        const L = ["enable", "colors"];
        for (const N in f)
          L.includes(N) || (ve[N] = f[N]), N in Aa && Aa[N]?.(f[N]);
      }
      if (o.options.colors && "colors" in Aa && Aa.colors(o.options.colors), o.banding) {
        const f = o.banding;
        "locations" in f && f.locations && (Ke.locations = f.locations), "groups" in f && f.groups && (Ke.groups = f.groups), "rules" in f && f.rules && (Ke.rules = f.rules), "maxGap" in f && typeof f.maxGap == "number" && (Ke.maxGap = f.maxGap), "perSide" in f && typeof f.perSide == "boolean" && (Ke.perSide = f.perSide);
      }
      if (o.finish) {
        const f = o.finish;
        "locations" in f && f.locations && (At.locations = f.locations), "groups" in f && f.groups && (At.groups = f.groups), "rules" in f && f.rules && (At.rules = f.rules);
      }
      if (o.planing) {
        const f = o.planing;
        "locations" in f && f.locations && (Xt.locations = f.locations), "groups" in f && f.groups && (Xt.groups = f.groups), "rules" in f && f.rules && (Xt.rules = f.rules);
      }
      o.partRules && (Kn.value = o.partRules), o.customValidation && (Mn.value = o.customValidation), hi("banding", o), hi("finish", o), hi("planing", o);
      for (const f of ["banding", "finish", "planing"]) {
        const C = !!qt(o, ["options", "enable", f]), L = !!qt(o, [f, "containsCatalogueLinked"]), N = Object.keys(qt(o, [f, "pricing"]) || {}), H = (ci(f)?.labels?.length ?? 0) > 0;
        C && !L && N.length > 0 && !H && ut({
          type: "error",
          message: `${Pi(f)} options couldn't be loaded`,
          additional: ["Check that the number of labels matches the pricing levels (details in the console)."]
        });
      }
      Io(o), Is(o), k.inputShapes.value.length && Es(), mn.value = !0, bt.value && X("log", ["init complete"]);
      const g = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(g), Mt(() => {
        ms.value && !Bo() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      }), o.parts?.length && Mt(() => {
        bt.value && X("log", ["loading parts via init..."]), k.inputShapes.value.length = 0;
        let f = 0;
        for (const L of o.parts) {
          const N = Na(L);
          N ? N.issues?.length && bt.value && X("log", [`SmartCut - issues found while importing part at index ${f}`, N.issues]) : bt.value && X("log", [`SmartCut - error loading part at index ${f}`, L]), f++;
        }
        k.inputShapes.value.flatMap((L) => qi(L.issues)).length && ut({
          type: "error",
          message: Ae("errors.general.issues_found")
        }), bt.value && X("log", [`loaded ${k.inputShapes.value.length} parts via init`]);
      });
    }, Ot = (l, o = !1) => {
      Dn.value[l] = o;
    }, gs = (l) => l ? mu(l)?.toLowerCase() : null, So = (l, o, g) => {
      try {
        if (!l || !o) return;
        const C = g !== null && g !== "" && g !== void 0 && !["orientationLock", "grain"].includes(o), L = (Z, me) => {
          if (!se(Z.autoId, me)) {
            for (const [$e, Je] of Object.entries(me))
              Fi(Z, $e, Je);
            Z.isNew || Z.validate({ fields: Object.keys(me) });
          }
          "material" in me && We(Z.autoId, me.material);
        }, N = (Z, me, Me) => {
          const $e = me ?? Z.material, Je = Me ?? Z.t, xt = $e ? String($e).toUpperCase() : null, He = k.inputStock.value.find((wt) => {
            const _t = !xt || Vn(wt) === xt, qn = Je == null || re({ v: wt.t }) === re({ v: Je });
            return _t && qn;
          });
          return He ? { l: re({ v: He.l }), w: re({ v: He.w }) } : null;
        }, H = (Z, me) => {
          if (!Z) return [];
          const Me = String(Z).toUpperCase(), $e = me != null ? re({ v: me }) : null, Je = /* @__PURE__ */ new Set(), xt = [];
          for (const He of k.inputStock.value) {
            if (Vn(He) !== Me || $e != null && re({ v: He.t }) !== $e) continue;
            const wt = re({ v: He.l }), _t = re({ v: He.w });
            if (typeof wt != "number" || typeof _t != "number") continue;
            const qn = `${wt}x${_t}`;
            Je.has(qn) || (Je.add(qn), xt.push({
              l: wt,
              w: _t,
              db_id: He.db_id,
              code: He.code,
              cost: typeof He.cost == "number" ? He.cost : null
            }));
          }
          return xt;
        };
        if (o === "material" && (!g || g === "")) {
          const Z = { material: null, t: null };
          v.stockType === "linear" && (Z.w = null), L(l, Z);
          return;
        }
        if (o === "material" && g && R.value?.length) {
          const Z = R.value.find((me) => me.name === g);
          if (Z) {
            const me = { material: g }, Me = ks(g), $e = l.t != null ? re({ v: l.t }) : null;
            if (!($e != null && Me.includes($e)) && Me.length > 0 && (Me.length === 1 || $e != null) && (me.t = Me[0]), v.stockType === "linear" && l.w != null && Z.widths) {
              const He = re({ v: l.w });
              !Z.widths.some((wt) => re({ v: wt }) === He) && Z.widths.length > 0 && (me.w = re({ v: Z.widths[0] }));
            }
            if (Z.fullSizeOnly) {
              const He = N(
                l,
                g,
                me.t != null ? me.t : l.t
              );
              me.fullStock = !0, He && (me.l = He.l, me.w = He.w);
            } else l.fullStock && (me.fullStock = !1);
            L(l, me), In(l, Z), Hn(l);
            const xt = k.inputShapes.value.indexOf(l);
            for (const He of ["banding", "finish", "planing"]) {
              if (Q[He] !== xt) continue;
              const wt = Rn(l, He), _t = He === "banding" && !!di(l);
              if (!wt.options.length && !_t) {
                Q[He] = null;
                continue;
              }
              Pe(He, wt.options, wt.labels, wt.pricing);
            }
            return;
          }
        }
        if (o === "fullStock") {
          if (g !== !0 && Ps(l) || g === !0 && !fi(l))
            return;
          if (g === !0) {
            const Z = H(l.material, l.t);
            if (Z.length > 1) {
              p.value = { shape: l, options: Z }, $n.value = !0;
              return;
            }
            const me = N(l);
            if (me) {
              L(l, { fullStock: !0, l: me.l, w: me.w });
              return;
            }
          } else {
            L(l, { fullStock: !1, l: null, w: null });
            return;
          }
        }
        if ((o === "material" || o === "t") && l.fullStock) {
          const Z = {
            ...l,
            material: o === "material" ? g : l.material,
            t: o === "t" ? g : l.t
          };
          if (!fi(Z)) {
            L(l, { [o]: g, fullStock: !1, l: null, w: null });
            return;
          }
          const me = N(
            l,
            o === "material" ? g : void 0,
            o === "t" ? g : void 0
          );
          if (me) {
            L(l, { [o]: g, l: me.l, w: me.w });
            return;
          }
        }
        if (l.isNew)
          if (C)
            l.isNew = !1;
          else {
            Fi(l, o, g);
            return;
          }
        let pe;
        if (o.includes(".")) {
          const Z = o.split("."), me = Z[0], Me = Z.slice(1).join("."), Je = { ...l[me] || {} };
          Fi(Je, Me, g), pe = { [me]: Je };
        } else
          pe = { [o]: g };
        if (L(l, pe), o === "t" && R.value?.length && l.material) {
          const Z = R.value.find((me) => me.name === l.material);
          Z && In(l, Z);
        }
        o === "t" && v.stockType === "linear" && R.value?.length && l.material && Mt(() => {
          const Z = ws(l);
          if (Z.length > 0 && l.w != null) {
            const me = re({ v: l.w });
            Z.some((Me) => re({ v: Me }) === me) || L(l, { w: re({ v: Z[0] }) });
          }
        });
      } catch (f) {
        console.error("[CHECKOUT] Error updating field:", f);
      }
    }, xo = () => {
    }, Po = (l, o) => {
      l?.isNew && (l.isNew = !1), l.validate({ fields: [o] }), ["l", "w", "t"].includes(o) && hs(l);
    }, hs = (l) => {
      if (Kn.value && l && !l.isNew && !(!l.l && !l.w))
        try {
          const o = lp(l, Kn.value);
          if (l.issues && (l.issues = l.issues.filter((g) => !g.category?.includes("part"))), !o.valid && o.violations.length > 0)
            for (const g of o.violations) {
              const f = rp(g), C = g.dimension === "longSide" ? "l" : g.dimension === "shortSide" ? "w" : g.dimension === "t" ? "t" : null;
              new Ct({
                item: l,
                type: "error",
                category: ["part"],
                field: C ? [[C]] : [],
                message: f,
                shouldTranslate: !1
              });
            }
        } catch (o) {
          console.error("[CHECKOUT] Error validating part:", o);
        }
    }, Io = (l) => {
      if (qt(ve, ["enable", "machining"]) && l?.machining) {
        for (const o in gt)
          l.machining[o] && (gt[o] = l.machining[o]);
        if (["holes", "hingeHoles"].forEach((o) => {
          l?.machining?.[o] && (gt[o].enabled = l?.machining?.[o].enabled);
        }), l?.machining?.corners?.types?.length && (gt.corners.enabled = !0, gt.corners.types = l.machining.corners.types), l.banding && l?.options?.enable?.banding) {
          if (!Ie) return;
          gt.banding = {
            enabled: !0
          }, Ie.options.length && (gt.banding.options = Ie.options), Ie.labels.length && (gt.banding.labels = Ie.labels), Ys(Ie.pricing) && (gt.banding.pricing = Ie.pricing);
        }
      }
    }, Co = (l = null) => {
      j.value = l, l && Ye(l) && l.l && l.w ? Le.value = !0 : alert(Ae("machining.enter_dimensions_first"));
    }, Lo = () => {
      Le.value = !1;
    }, ri = G(!1), Oo = (l = null) => {
      j.value = l, l && (ri.value = !0);
    }, Eo = () => {
      ri.value = !1;
    }, vs = (l) => {
      if (!l) return [];
      const o = l.stockId ?? l.stock?.id, g = o ? k.inputStock.value?.find((C) => String(C.id) === String(o)) : null;
      return (g?.extras?.customProducts ?? g?.material?.extras?.customProducts ?? []).length ? [] : [];
    }, Fo = (l) => vs(l).filter((o) => o.type === "machining"), bs = (l = []) => {
      if (ee.value = [], he.value = [], Ot("t", !1), !!l.length) {
        for (const o of l) {
          if (!o?.t) continue;
          const g = na(o);
          if (g) {
            const f = Ta(g, !0);
            f.length === 2 ? ($o(f), Ot("t", !0), o.t = ee.value[0]) : X("error", "bonded thickness found which does not have 2 options");
          } else ee.value.includes(o.t) || ee.value.push(o.t);
        }
        ee.value.length > 1 && Ot("t", !0);
      }
    }, ui = (l = []) => {
      if (Oe.value = [], !l.length) {
        Ot("w", !1);
        return;
      }
      for (const o of l) {
        if (!o?.w) continue;
        const g = re({ v: o.w });
        Oe.value.includes(g) || Oe.value.push(g);
      }
      Oe.value.length >= 1 ? Ot("w", !0) : Ot("w", !1);
    }, ys = (l) => {
      if (!l) return { thicknesses: [], bondedThicknesses: [] };
      if (!R.value?.length)
        return {
          thicknesses: ee.value,
          bondedThicknesses: []
        };
      if (!l.material)
        return {
          thicknesses: ee.value,
          bondedThicknesses: []
        };
      const o = R.value.find((Z) => Z.name === l.material);
      let g;
      if (o)
        g = [...o.thicknesses];
      else {
        const Z = String(l.material).trim().toUpperCase(), me = /* @__PURE__ */ new Set();
        for (const Me of k.inputStock.value) {
          if (_i(Me) !== Z || Me.t == null) continue;
          const $e = na(Me);
          me.add($e || re({ v: Me.t }));
        }
        g = Array.from(me).sort((Me, $e) => re({ v: Me }) - re({ v: $e }));
      }
      const f = [...g], C = [];
      for (let Z = 0; Z < f.length; Z++) {
        const me = f[Z], Me = Ta(me), $e = [];
        if (Me.length) {
          for (const Je of Me)
            f[Z] = Je, $e.push(Z);
          Z++;
        }
        $e.length && C.push($e);
      }
      const L = String(l.material).trim().toUpperCase(), N = /* @__PURE__ */ new Set();
      for (const Z of k.inputStock.value)
        _i(Z) === L && Z.t != null && (na(Z) || N.add(re({ v: Z.t })));
      const H = f.map((Z) => re({ v: Z }));
      return {
        thicknesses: f.filter((Z) => {
          const me = re({ v: Z });
          return N.has(me) ? !0 : !he.value.some(($e) => {
            if ($e.length !== 2) return !1;
            const Je = re({ v: ee.value[$e[0]] }), xt = re({ v: ee.value[$e[1]] }), He = Math.min(Je, xt), wt = Math.max(Je, xt);
            return me === He && H.includes(wt);
          });
        }),
        bondedThicknesses: C
      };
    }, ks = (l) => l ? ys({ material: l }).thicknesses.map((o) => re({ v: o })).filter((o) => typeof o == "number" && Number.isFinite(o)) : [], ws = (l) => {
      if (!l) return [];
      if (!R.value?.length || !l.material)
        return Oe.value;
      const o = R.value.find((g) => g.name === l.material);
      if (!o)
        return Oe.value;
      if (l.t != null && k.inputStock?.value?.length) {
        const g = re({ v: l.t }), f = /* @__PURE__ */ new Set();
        for (const C of k.inputStock.value)
          C.material?.toUpperCase() === l.material && re({ v: C.t }) === g && C.w != null && f.add(re({ v: C.w }));
        if (f.size > 0)
          return Array.from(f).sort((C, L) => C - L);
      }
      return o.widths || Oe.value;
    }, ci = (l) => l === "banding" ? Ie : l === "finish" ? Be : l === "planing" ? je : null, Nt = (l, o) => lo($a(l?.stock?.db_id) || null, o), di = (l) => qp($a(l?.stock?.db_id) || null), Ss = (l) => {
      switch (l) {
        case "banding":
          return Ke.groups;
        case "finish":
          return At.groups;
        case "planing":
          return Xt.groups;
        default:
          return;
      }
    }, xs = () => k.inputStock.value.some((l) => Vp(l)), Rn = (l, o) => {
      const g = ci(o), f = Ss(o), C = g?.formulas, L = {
        options: g?.options ?? [],
        labels: g?.labels ?? [],
        pricing: g?.pricing ?? {},
        ...C && { formulas: C },
        displayNames: g?.displayNames ?? {},
        ...f?.length && { locationGroups: f }
      }, N = { options: [], labels: [], pricing: {}, displayNames: {} };
      if (!l?.material) return L;
      const H = Nt(l, o);
      if (!Dp(H))
        return g?.containsCatalogueLinked || xs() ? N : L;
      const pe = H.code || H.name, Z = H.groups;
      if (Z && Z.length > 0) {
        const wt = Ss(o) || [], _t = {};
        for (const Rt of Z)
          typeof Rt.price == "number" && (_t[Rt.id] = Rt.price);
        const qn = wt.filter((Rt) => _t[Rt.id] !== void 0).map((Rt) => ({ ...Rt, price: _t[Rt.id] })), Ts = {}, Ns = [], $s = {}, vi = {}, bi = H.pricingFormula;
        for (const Rt of qn) {
          const Da = `${pe}|${Rt.id}`;
          Ts[Da] = Rt.price, Ns.push(Da), Rt.label && ($s[Da] = Rt.label), typeof bi == "string" && bi.trim() && (vi[Da] = bi.trim());
        }
        const rr = [Pi(o)];
        return {
          options: [Ns],
          labels: rr,
          pricing: Ts,
          ...Object.keys(vi).length && { formulas: vi },
          displayNames: $s,
          locations: [],
          // empty so render path applies hideIndividualLocations filter
          locationGroups: qn
        };
      }
      const me = _p(H, g, pe), Me = H.labels?.length ? H.labels : [Pi(o)], $e = Bp(H, o) ? [] : Fs(me), Je = H.displayNames && typeof H.displayNames == "object" ? { ...H.displayNames } : { ...g?.displayNames ?? {} };
      H.code && H.name && H.code !== H.name && (Je[H.code] = H.name);
      const xt = { ...C || {} }, He = H.pricingFormula;
      if (typeof He == "string" && He.trim()) {
        const wt = He.trim();
        for (const _t of Object.keys(me)) xt[_t] = wt;
      }
      return {
        options: $e,
        labels: Me,
        pricing: me,
        ...Object.keys(xt).length && { formulas: xt },
        displayNames: Je,
        locations: H.locations?.length ? H.locations : void 0
      };
    }, Ao = (l, o) => Rn(l, o).options, Ps = (l) => !l?.material || !R.value?.length ? !1 : !!R.value.find((g) => g.name === l.material)?.fullSizeOnly, fi = (l) => {
      if (!l?.material) return !1;
      const o = String(l.material).toUpperCase(), g = l.t != null ? re({ v: l.t }) : null;
      return k.inputStock.value.some((f) => Vn(f) !== o || g != null && re({ v: f.t }) !== g ? !1 : !!f.allowExactFitShapes);
    }, ma = (l, o) => {
      if (!o.fullSizeOnly) return;
      const g = l.t, f = k.inputStock.value.find((C) => C.material === o.name && (g == null || re({ v: C.t }) === re({ v: g })));
      l.fullStock = !0, f && (l.l = re({ v: f.l }), l.w = re({ v: f.w }));
    }, To = (l) => {
      const o = { banding: !1, finish: !1, planing: !1, machining: !1 };
      if (!l?.material || !(Ie?.containsCatalogueLinked || Be?.containsCatalogueLinked || je?.containsCatalogueLinked || xs())) return o;
      const f = $a(l?.stock?.db_id), C = ti(f || null) || {};
      return {
        banding: !C.banding,
        finish: !C.finish,
        planing: !C.planing,
        machining: !C.machining
      };
    }, Is = (l) => {
      if (l?.stock?.some((o) => o?.material)) {
        R.value = [], ee.value = [], he.value = [];
        const o = /* @__PURE__ */ new Map();
        for (const C of l.stock) {
          if (!C.material) continue;
          const L = Vn(C), N = (C.code || C.name || "").toString().trim(), H = C.name || C.customData?.stockName || C.material || L;
          if (o.has(L) ? C.fullSizeOnly && (o.get(L).fullSizeOnly = !0) : o.set(L, {
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
          }), N && o.get(L).codes.add(N), C.t != null) {
            const pe = na(C);
            pe ? o.get(L)?.thicknesses.add(pe) : o.get(L)?.thicknesses.add(re({ v: C.t }));
          }
          if (v.stockType === "linear" && C.w != null && o.get(L)?.widths.add(re({ v: C.w })), v.stockType !== "linear" && C.l != null && C.w != null) {
            const pe = re({ v: C.l }), Z = re({ v: C.w });
            o.get(L)?.dimensions.add(`${pe}x${Z}`);
          }
        }
        const g = Array.from(o.entries()).map(([C, L]) => {
          const N = [], H = [];
          for (const pe of L.thicknesses)
            typeof pe == "string" && pe.includes(",") ? H.push(pe) : N.push(re({ v: pe }));
          return { name: C, sets: L, regularThicknesses: N, bondedStrings: H };
        });
        R.value = g.map(({ name: C, sets: L, regularThicknesses: N }) => {
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
            thicknesses: N.sort((Z, me) => Z - me)
          };
          return v.stockType === "linear" && L.widths.size > 0 && (pe.widths = Array.from(L.widths).sort((Z, me) => Z - me)), v.stockType !== "linear" && L.dimensions.size > 0 && (pe.dimensions = Array.from(L.dimensions).map((Z) => {
            const [me, Me] = Z.split("x").map(($e) => Number($e));
            return { l: me, w: Me };
          })), pe;
        });
        const f = /* @__PURE__ */ new Set();
        for (const C of R.value)
          for (const L of C.thicknesses)
            f.add(re({ v: L }));
        ee.value = Array.from(f).sort((C, L) => C - L);
        for (let C = 0; C < g.length; C++) {
          const { bondedStrings: L } = g[C], N = R.value[C];
          for (const H of L) {
            const pe = Ta(H, !0);
            if (pe.length !== 2) continue;
            const Z = [];
            for (const me of pe) {
              const Me = re({ v: me });
              let $e = ee.value.findIndex((Je) => re({ v: Je }) === Me);
              $e === -1 ? (ee.value.push(Me), N.thicknesses.push(Me), $e = ee.value.length - 1) : N.thicknesses.some((Je) => re({ v: Je }) === Me) || N.thicknesses.push(Me), Z.push($e);
            }
            he.value.push(Z);
          }
        }
        if (v.stockType === "linear") {
          const C = /* @__PURE__ */ new Set();
          for (const L of R.value)
            if (L.widths)
              for (const N of L.widths)
                C.add(re({ v: N }));
          Oe.value = Array.from(C).sort((L, N) => L - N);
        }
        Ot("material", qe(R.value)), ee.value.length > 1 ? Ot("t", !0) : Ot("t", !1), v.stockType === "linear" && Oe.value.length > 1 ? Ot("w", !0) : v.stockType === "linear" && Ot("w", !1);
      } else
        bs(l.stock);
      v.stockType === "linear" && !R.value?.length && ui(l.stock);
    }, No = (l) => {
      if (!l?.length) {
        R.value = [], ee.value = [], Oe.value = [];
        return;
      }
      if (l.some((g) => g?.material)) {
        const g = /* @__PURE__ */ new Map();
        he.value = [];
        for (const L of l) {
          if (!L.material) continue;
          const N = Vn(L), H = (L.code || L.name || "").toString().trim(), pe = (L.material || N).toString();
          if (g.has(N) ? L.fullSizeOnly && (g.get(N).fullSizeOnly = !0) : g.set(N, {
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
          }), H && g.get(N).codes.add(H), L.t != null) {
            const Z = na(L);
            Z ? g.get(N)?.thicknesses.add(Z) : g.get(N)?.thicknesses.add(re({ v: L.t }));
          }
          if (v.stockType === "linear" && L.w != null && g.get(N)?.widths.add(re({ v: L.w })), v.stockType !== "linear" && L.l != null && L.w != null) {
            const Z = re({ v: L.l }), me = re({ v: L.w });
            g.get(N)?.dimensions.add(`${Z}x${me}`);
          }
        }
        const f = Array.from(g.entries()).map(([L, N]) => {
          const H = [], pe = [];
          for (const Z of N.thicknesses)
            typeof Z == "string" && Z.includes(",") ? pe.push(Z) : H.push(re({ v: Z }));
          return { name: L, sets: N, regularThicknesses: H, bondedStrings: pe };
        });
        R.value = f.map(({ name: L, sets: N, regularThicknesses: H }) => {
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
            thicknesses: H.sort((me, Me) => me - Me)
          };
          return v.stockType === "linear" && N.widths.size > 0 && (Z.widths = Array.from(N.widths).sort((me, Me) => me - Me)), v.stockType !== "linear" && N.dimensions.size > 0 && (Z.dimensions = Array.from(N.dimensions).map((me) => {
            const [Me, $e] = me.split("x").map((Je) => Number(Je));
            return { l: Me, w: $e };
          })), Z;
        });
        const C = /* @__PURE__ */ new Set();
        for (const L of R.value)
          for (const N of L.thicknesses)
            C.add(re({ v: N }));
        ee.value = Array.from(C).sort((L, N) => L - N);
        for (let L = 0; L < f.length; L++) {
          const { bondedStrings: N } = f[L], H = R.value[L];
          for (const pe of N) {
            const Z = Ta(pe, !0);
            if (Z.length !== 2) continue;
            const me = [];
            for (const Me of Z) {
              const $e = re({ v: Me });
              let Je = ee.value.findIndex((xt) => re({ v: xt }) === $e);
              Je === -1 ? (ee.value.push($e), H.thicknesses.push($e), Je = ee.value.length - 1) : H.thicknesses.some((xt) => re({ v: xt }) === $e) || H.thicknesses.push($e), me.push(Je);
            }
            he.value.push(me);
          }
        }
        if (v.stockType === "linear") {
          const L = /* @__PURE__ */ new Set();
          for (const N of R.value)
            if (N.widths)
              for (const H of N.widths)
                L.add(re({ v: H }));
          Oe.value = Array.from(L).sort((N, H) => N - H);
        }
        Ot("material", qe(R.value)), Ot("t", ee.value.length > 1), v.stockType === "linear" && Ot("w", Oe.value.length > 1);
      } else
        bs(l), v.stockType === "linear" && ui(l);
    }, $o = (l, o = null) => {
      if (!Array.isArray(l)) {
        X("error", "addBondedThicknesses expects an array");
        return;
      }
      const g = [];
      for (let f of l)
        ve.numberFormat === "decimal" && (f = parseFloat(f)), ee.value.push(f), o && o.thicknesses.push(f), g.push(ee.value.length - 1);
      he.value.push(g);
    }, Mo = (l) => {
      const { thicknesses: o } = ys(l);
      return o?.length ? o.map((g) => ({
        label: g?.toString(),
        value: g
      })) : [];
    };
    function Do(l) {
      return l?.length ? l.map((o) => ({
        name: o.name,
        brand: o.brand,
        variant: o.variant,
        finish: o.finish,
        material: o.material || void 0,
        code: o.code || void 0,
        displayName: o.displayName,
        imageUrl: o.imageUrl,
        color: o.color,
        colorHex: o.colorHex
      })) : [];
    }
    const _o = (l) => {
      const o = ws(l);
      return o?.length ? o.map((g) => ({
        label: g?.toString(),
        value: g
      })) : [];
    }, Ta = (l, o = !1) => {
      if (typeof l == "string" && l.includes(",")) {
        const g = l.split(",");
        if (g.length === 2) {
          const f = parseFloat(g[0]), C = parseFloat(g[1]);
          !isNaN(f) && !isNaN(C) && C !== f * 2 && ut({
            type: "warning",
            message: `Bonded thickness "${l}" does not follow the expected pattern (second value should be double the first)`
          });
        }
        return o ? g.map((f) => re({ v: f })) : g;
      }
      return [];
    }, Ro = () => {
      rn.value ? qo() : Vo();
    }, Vo = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), rn.value = !0;
    }, qo = () => {
      document.exitFullscreen && document.exitFullscreen(), rn.value = !1;
    }, Bo = () => {
      if (Fe.value?.api?.whiteLabel) return !0;
      let l = !0;
      const o = document.querySelector("#smartcut-checkout a#credit");
      if (!o) return l = !1;
      const g = window.getComputedStyle(o);
      return g.display === "none" || g.display === "hidden" || g.opacity === "0" || g.color === "transparent" || g.position !== "absolute" || g.color !== "#4e4e4e" && g.color !== "rgb(78, 78, 78)" ? l = !1 : (dt.value = l, l);
    }, jo = F(() => typeof ct.findExtrasPrice == "function"), Uo = F(() => ve.unitSystem === "imperial" ? "/ square ft" : "/ square m"), Go = F(() => ve.unitSystem === "imperial" ? "/ ft" : "/ m"), Wo = F(() => [
      {
        type: "banding",
        keys: Ie.keys,
        fallbackLocations: Ke.locations,
        show: (l) => Pn("banding", l),
        extraProps: (l) => ({
          priceLabel: Go.value,
          catalogueKey: di(l) || "",
          // The resolved extra's id drives the picker's on-demand
          // `/extras/:id/levels` fetch. Present whenever the catalogue picker
          // renders (catalogue-linked stock carries a resolved extra with _id).
          catalogueExtraId: String(Nt(l, "banding")?._id || ""),
          catalogueMaxGap: Ke.maxGap,
          cataloguePerSide: Ke.perSide,
          extraName: Nt(l, "banding")?.name,
          pricePerLength: Nt(l, "banding")?.price
        })
      },
      {
        type: "finish",
        keys: Be.keys,
        fallbackLocations: At.locations,
        show: (l) => Pn("finish", l),
        extraProps: (l) => ({
          priceLabel: Uo.value,
          catalogueKey: Nt(l, "finish")?.sourceCatalogueKey || "",
          catalogueExtraId: String(Nt(l, "finish")?._id || ""),
          extraName: Nt(l, "finish")?.name,
          pricePerLength: Nt(l, "finish")?.price
        })
      },
      {
        type: "planing",
        keys: je.keys,
        fallbackLocations: Xt.locations,
        show: (l) => Pn("planing", l),
        extraProps: (l) => ({
          catalogueKey: Nt(l, "planing")?.sourceCatalogueKey || "",
          catalogueExtraId: String(Nt(l, "planing")?._id || ""),
          extraName: Nt(l, "planing")?.name,
          pricePerLength: Nt(l, "planing")?.price
        })
      }
    ]), zo = (l, o) => {
      const g = Rn(l, o.type);
      return {
        allOptions: g.options,
        pricing: g.pricing,
        formulas: g.formulas,
        displayNames: g.displayNames,
        labels: g.labels,
        locations: g.locations || o.fallbackLocations,
        locationGroups: g.locationGroups || []
      };
    }, Cs = (l, o) => {
      let g, f;
      switch (o) {
        case "banding":
          g = Ie.options, f = Ie.labels;
          break;
        case "finish":
          g = Be.options, f = Be.labels;
          break;
        case "planing":
          g = je.options, f = je.labels;
          break;
        default:
          g = [], f = [];
      }
      Fn(l, o, g, f);
    }, Ls = (l) => {
      const o = Object.keys(l);
      return o.length ? Math.max(...o.map((g) => g.split("|").length)) : 0;
    }, pi = (l, o, g) => l ? yc(
      Object.keys(l).map((f) => f.split("|")),
      g,
      o
    ) : [], Ko = (l, o, g, f) => {
      const C = Rn(l, o);
      return xi(l, o, g, (N, H) => {
        const pe = H.filter((Z) => Z?.trim()).join("|");
        return pe && C.pricing[pe] !== void 0 ? C.pricing[pe] : f ? f(N, H) : null;
      }, C.options, C.labels);
    }, Ho = (l, o, g) => {
      let f, C;
      switch (o) {
        case "banding":
          f = Ie.options, C = Ie.labels;
          break;
        case "finish":
          f = Be.options, C = Be.labels;
          break;
        case "planing":
          f = je.options, C = je.labels;
          break;
        default:
          f = [], C = [];
      }
      return xi(l, o, g, ct.findExtrasPrice, f, C);
    }, Zo = G({}), Jo = (l) => {
      const o = pt.value.findIndex((g) => g.shapeId === l.shapeId);
      o !== -1 ? pt.value[o] = l : pt.value.push(l), window.smartcutImages = pt.value;
    }, Qo = (l) => {
      pt.value = pt.value.filter((o) => o.shapeId !== l), window.smartcutImages = pt.value;
    }, Yo = (l) => {
      pn.value = pn.value === l ? null : l;
    }, mi = (l = 1) => {
      for (let o = l; o--; ) {
        let g = {
          l: null,
          w: v.stockType === "linear" && Oe.value.length === 1 ? Oe.value[0] : null,
          t: ee.value.length ? ee.value[0] : null,
          q: 1,
          material: R.value?.length === 1 ? R.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (k.inputShapes.value.length > 0) {
          const C = k.inputShapes.value[k.inputShapes.value.length - 1];
          g.material = C.material, g.materialId = C.materialId, g.t = C.t, C.stock && (g.stock = { ...C.stock }), v.stockType === "linear" && C.w && (g.w = C.w);
        }
        const f = D(g);
        f && (Ie?.labels?.length && Fn(f, "banding", Ie.options, Ie.labels), Be?.labels?.length && Fn(f, "finish", Be.options, Be.labels), je?.labels?.length && Fn(f, "planing", je.options, je.labels));
      }
    }, Na = (l = {}) => {
      const o = {
        q: 1,
        // Always set quantity to 1
        ...l
      }, g = D(o);
      return g && (v.stockType === "linear" && Oe.value.length === 1 && !g.w && (g.w = Oe.value[0]), ee.value.length && !g.t && (g.t = ee.value[0]), R.value?.length === 1 && !g.material && We(g.autoId, R.value[0].name), Ie?.labels?.length && Fn(g, "banding", Ie.options, Ie.labels), Be?.labels?.length && Fn(g, "finish", Be.options, Be.labels), je?.labels?.length && Fn(g, "planing", je.options, je.labels)), g;
    }, Xo = (l) => {
      Kf(
        l,
        ee.value,
        he.value,
        (o) => re({ v: o })
      );
    }, Os = () => {
      Qt(), kt(null), De.stockList.value = [], De.shapeList.value = [], De.cutList.value = [];
    }, gi = () => {
      k.inputShapes.value.length = 0, ct.inputType !== "formula" && Mt(() => mi());
    }, $a = (l) => {
      if (l)
        return k.inputStock.value.find((o) => o.db_id === l);
    }, Hn = (l) => {
      l.extras && (l.extras.banding = null, l.extras.finish = null, l.extras.planing = null);
    }, er = (l, o) => {
      const g = Rn(l, o);
      return iu(g.pricing);
    }, tr = (l) => {
      const o = { pruned: !1, types: /* @__PURE__ */ new Set() };
      if (!l?.extras) return o;
      const g = ["banding", "finish", "planing"];
      for (const f of g) {
        const C = l.extras[f];
        if (!C || Nt(l, f)?.sourceCatalogueKey) continue;
        const N = er(l, f);
        if (C.faces)
          for (const H of ["a", "b"]) {
            const pe = C.faces[H];
            typeof pe == "string" && pe !== "" && !N.has(pe) && (C.faces[H] = "", o.pruned = !0, o.types.add(f));
          }
        if (C.sides)
          for (const H of ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]) {
            const pe = C.sides[H];
            typeof pe == "string" && pe !== "" && !N.has(pe) && (C.sides[H] = "", o.pruned = !0, o.types.add(f));
          }
      }
      return o;
    }, Vn = (l) => _i(l), nr = (l, o) => {
      const g = l.toUpperCase();
      return k.inputStock.value.find((f) => Vn(f) === g && re({ v: f.t }) === o);
    }, In = (l, o) => {
      const g = re({ v: l.t }), f = nr(o.name, g), C = {
        db_id: f?.db_id || o.db_id,
        code: f?.code || o.code,
        material: o.displayName || o.name
      };
      typeof g == "number" && Number.isFinite(g) && (C.thickness = g), l.stock = C;
    }, Es = () => {
      const l = /* @__PURE__ */ new Set();
      for (const o of k.inputShapes.value) {
        const g = o.stock, f = o.material?.toUpperCase();
        let C = null;
        if (g?.db_id) {
          const H = $a(g.db_id);
          H && (C = R.value.find((pe) => pe.name === Vn(H))), C || (C = R.value.find((pe) => pe.db_id && pe.db_id === g.db_id));
        }
        if (!C && g?.code && (C = R.value.find((H) => H.code && H.code === g.code)), !C && f && (C = R.value.find((H) => H.name === f)), C)
          o.material = C.name, In(o, C), o.t != null && !C.thicknesses.includes(re({ v: o.t })) && (o.t = null, o.stock = null, Hn(o)), ma(o, C);
        else {
          if ((g?.db_id || g?.code) && !R.value?.length)
            continue;
          if (R.value?.length === 1) {
            const H = R.value[0], pe = o.material !== H.name;
            o.material = H.name, H.thicknesses.includes(re({ v: o.t })) || (o.t = re({ v: H.thicknesses[0] })), In(o, H), pe && Hn(o), ma(o, H);
          } else if (R.value?.length > 1 && o.t) {
            const H = R.value.find((pe) => pe.thicknesses.some((Z) => re({ v: Z }) === re({ v: o.t })));
            H ? (o.material !== H.name && Hn(o), o.material = H.name, In(o, H), ma(o, H)) : (Hn(o), o.material = R.value[0].name, o.t = re({ v: R.value[0].thicknesses[0] }), In(o, R.value[0]), ma(o, R.value[0]));
          } else R.value?.length > 1 ? (Hn(o), o.material = R.value[0].name, o.t = re({ v: R.value[0].thicknesses[0] }), In(o, R.value[0]), ma(o, R.value[0])) : !o.t && k.inputStock.value[0]?.t && (o.t = re({ v: k.inputStock.value[0].t }));
        }
        We(o.autoId, o.material);
        const { pruned: L, types: N } = tr(o);
        L && N.forEach((H) => l.add(H));
      }
      if (l.size > 0) {
        const o = [...l].join(", ");
        ut({
          type: "warning",
          message: `Some previously selected ${o} options are no longer available and have been cleared. Please review your selection.`
        });
      }
    }, ar = async () => {
      if (Y(), X("calculating"), St.value) return !1;
      St.value = !0, gn.value = !1, Es();
      const l = await Af({
        t: Ae,
        partTrim: ve.partTrim,
        maxShapes: ve.maxParts || 1e3,
        maxStock: 1 / 0,
        // CheckoutCalculator doesn't have stock limits
        inputSaw: k.inputSaw.value,
        // Extras validation data
        bandingPricing: Ie.pricing,
        finishPricing: Be.pricing,
        planingPricing: je.pricing,
        findExtrasPrice: ct.findExtrasPrice,
        getShapeExtrasPricing: (L, N) => Rn(L, N).pricing,
        // Banding is tuple-canonical on the client: the shape stores the axis
        // tuple, so completeness validates against the tuple-keyed pricing alone —
        // no per-shape SKU codes needed (the SKU is a server-side lookup).
        extrasValidationRules: oi.value,
        extrasLocationGroups: {
          banding: Ke.groups,
          finish: At.groups,
          planing: Xt.groups
        },
        onLimit: () => {
          ut({
            type: "error",
            message: Ae("limits.max_parts") + " " + ve.maxParts
          });
        }
      });
      if (Kn.value)
        for (const L of k.inputShapes.value)
          hs(L);
      const o = k.inputShapes.value.flatMap((L) => L.issues || []).filter((L) => L.type === "error" && L.category?.includes("part") && !L.category?.includes("extras"));
      if (o.length > 0) {
        ut({
          type: "error",
          message: Ae("errors.validation.inputs_issue", { 0: "part" }),
          additional: o.map((L) => Wa(L.message, L.context || L.params))
        }), X("validation-error"), St.value = !1;
        return;
      }
      if (!l.valid) {
        X("validation-error"), St.value = !1;
        return;
      }
      Os(), k.inputShapes.value.forEach((L, N) => {
        L.createId(N);
      }), k.inputStock.value.forEach((L, N) => {
        L.createId(N);
      });
      const g = k.inputShapes.value.map((L) => ie(L)).filter(Boolean);
      if (g.length !== k.inputShapes.value.length)
        return ut({
          type: "error",
          message: "Some parts have validation errors and cannot be processed",
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), St.value = !1, !1;
      Xo(g), bt.value && X("log", [
        "SmartCut - calculating",
        "stock",
        k.inputStock.value.map((L) => ({ l: L.l, w: L.w })),
        "parts",
        g.map((L) => ({ l: L.l, w: L.w }))
      ]);
      const f = {
        inputSaw: k.inputSaw.value.toData(),
        inputShapes: g.map((L) => L.toData()),
        inputStock: k.inputStock.value.map((L) => {
          const N = Up(L.toData()), H = zf(L);
          return H != null && (N.t = H), N;
        }),
        inputUserGroups: ce.value ? k.inputUserGroups.value.map((L) => L.toData()) : [],
        enableEvo: !0,
        useInventory: !1,
        domain: at,
        extrasOptions: Te(),
        // SKU/name maps for the cutlist CSV's operator-meaningful labels
        // (internal-only; resolved server-side as SKU → name → tuple). WC
        // ships sku (variation SKUs) + name; DB-flow ships name only (its
        // codes are resolved from Extra docs at export, never shipped here).
        extrasResolution: {
          banding: { sku: Ie.codes, name: Ie.displayNames },
          finish: { sku: Be.codes, name: Be.displayNames },
          planing: { sku: je.codes, name: je.displayNames }
        },
        source: "checkout",
        sourceVersion: "4.3.2"
      };
      if (Mn.value?.enabled && Mn.value?.rules?.length > 0) {
        const L = Jf(
          Mn.value.rules,
          k.inputShapes.value.map((N) => N.toData())
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
      X("before-calculate", f);
      const C = new CustomEvent("smartcut/beforeCalculate", {
        cancelable: !0,
        detail: {
          data: f,
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
      await Lt.connect(), Lt.emit("calculate", f);
    }, ir = (l, o) => {
      const g = [l, "pricing"];
      if (!Qs(o, g))
        return X("error", `${g.join(".")} not found in sent data`), null;
      const f = qt(o, g);
      if (typeof f != "object")
        return X("error", `${g.join(".")} data must be an object`), null;
      if (!Ys(f))
        return X("error", `if provided, ${g.join(".")} data must contain some values`), null;
      const C = Object.keys(f);
      if (!C.length)
        return X("error", `no ${g.join(".")} pricing found`), null;
      if (C.some((pe) => /,/.test(pe)))
        return X("error", `${g.join(".")} keys must not contain commas and should only be separated by a pipe (|)`), null;
      if (Object.values(f).some((pe) => isNaN(pe)))
        return X("error", `${g.join(".")} values must be a number`), null;
      const L = [l, "labels"];
      if (!Qs(o, L))
        return X("error", `${L.join(".")} not found`), null;
      const N = qt(o, L);
      if (!N)
        return X("error", `${L.join(".")} data not provided`), null;
      if (!Array.isArray(N))
        return X("error", `${L.join(".")} data must be an array`), null;
      if (!N.length)
        return X("error", `if provided, ${L.join(".")} data must contain values`), null;
      const H = Ls(f);
      return N.length !== H ? (X("error", `${L.join(".")} length (${N.length}) must match the number of levels in ${g.join(".")} (${H})`), null) : { pricing: f, labels: N };
    }, hi = (l, o) => {
      const g = o?.[l], f = !!g?.containsCatalogueLinked;
      if (!l || !g || !qt(ve, ["enable", l])) return;
      let C = g.pricing ?? {}, L = g.labels ?? [];
      if (!f) {
        const pe = ir(l, o);
        if (!pe) return;
        C = pe.pricing, L = pe.labels;
      }
      const N = qt(o, [l, "displayNames"]) || void 0, H = qt(o, [l, "formulas"]);
      if (l === "banding" || l === "finish" || l === "planing") {
        const pe = ci(l);
        pe.labels = L, pe.pricing = C, pe.displayNames = N || {}, pe.codes = qt(o, [l, "codes"]) || {}, pe.containsCatalogueLinked = f, pe.formulas = H;
        const Z = Fs(C);
        pe.options = Z, Pe(l, Z, L, C, N);
      }
      if (Ft.value = Te(), !!k.inputShapes.value?.length)
        for (const pe of k.inputShapes.value) Cs(pe, l);
    }, Fs = (l) => {
      const o = [], g = Object.keys(l), f = Ls(l);
      for (let C = f; C--; ) o.push(/* @__PURE__ */ new Set());
      for (const C of g) {
        const L = C.split("|");
        f > 1 && L.length === 1 || L.forEach((N, H) => {
          H < f && o[H].add(N);
        });
      }
      for (let C = 0; C < f; C++)
        o[C] = Array.from(o[C]);
      return o;
    }, Ma = (l, o) => {
      if (!o) return;
      l !== "info" && Object.keys(Q).forEach((f) => {
        f !== l && f !== "info" && (Q[f] = null);
      });
      const g = k.inputShapes.value.indexOf(o);
      if (Q[l] === g)
        j.value = null, Q[l] = null, Zo.value[l] = void 0;
      else if (j.value = o, Q[l] = g, l !== "info") {
        const f = Rn(o, l);
        f.options.length && Pe(
          l,
          f.options,
          f.labels,
          f.pricing
        );
      }
    }, As = (l) => {
      bt.value && X("log", ["load event received"]), mn.value && sr(l.detail);
    }, sr = (l) => {
      if (bt.value && X("log", ["loading parts..."]), !l || !l?.inputs?.parts?.length) {
        bt.value && X("log", ["could not find any parts to import"]);
        return;
      }
      k.inputShapes.value.length = 0;
      let o = 0;
      for (const f of l.inputs.parts) {
        const C = Na(f);
        C ? C.issues?.length && bt.value && X("log", [`SmartCut - issues found while importing part at index ${o}`, C.issues]) : bt.value && X("log", [`SmartCut - error loading part at index ${o}`, f]), o++;
      }
      k.inputShapes.value.flatMap((f) => qi(f.issues)).length && ut({
        type: "error",
        message: Ae("errors.general.issues_found")
      }), bt.value && X("log", [`loaded ${k.inputShapes.value.length} parts`]);
    }, lr = (l) => {
      k.inputShapes.value.length = 0, Mt(() => {
        for (const o of l)
          o.t = k.inputStock.value?.[0]?.t ?? null, v.stockType === "linear" && Oe.value.length === 1 && !o.w && (o.w = Oe.value[0]), Na(o);
      });
    };
    Qe(() => ct.inputStock, (l) => {
      if (Os(), Array.isArray(l) || console.warn("SmartCut - stock must be passed as an array"), !l?.length) return;
      k.inputStock.value.length = 0;
      const o = l.map((g) => g.toData());
      No(o);
      for (const g of l)
        oe({
          ...g.toData(),
          autoAdd: !0,
          q: 1
        }) || (console.error("Failed to add stock item:", g), ut({
          type: "error",
          message: "Failed to add some stock items due to validation errors"
        }));
      if (k.inputStock.value.length) {
        if (!k.inputShapes.value.length)
          ct.inputType !== "formula" && Mt(() => {
            k.inputShapes.value.length || mi();
          });
        else if (R.value.length === 1) {
          const f = R.value[0];
          for (const C of k.inputShapes.value)
            C.material || (We(C.autoId, f.name), (C.t == null || !f.thicknesses.includes(re({ v: C.t }))) && (C.t = re({ v: f.thicknesses[0] })), In(C, f));
        }
        const g = W(k.inputSaw.value);
        g.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(g))), ut({
          type: "error",
          message: Ae("errors.validation.stock_issue"),
          additional: g.map((f) => Wa(f.message, f.context || f.params))
        }));
      }
    }, { immediate: !0 }), Qe(k.inputShapes, (l) => {
      X("inputs-changed"), l.forEach((o) => {
        if (v.stockType === "linear" && Oe.value.length && (!o.w || !Oe.value.includes(re({ v: o.w }))) && (o.w = Oe.value[0]), o.material) {
          const g = ks(o.material);
          g.length && !g.includes(re({ v: o.t })) && (o.t = g[0]);
        }
      });
    }, { deep: !0 }), Qe(() => Yt.value.length, (l, o) => {
      if (pa.value) {
        if (l > o) {
          const g = Math.ceil(l / Dt.value);
          mt.value < g && (mt.value = g);
        } else if (l < o) {
          const g = Math.ceil(l / Dt.value);
          mt.value > g && (mt.value = Math.max(1, g));
        }
      }
    }), Qe(() => ve.numberFormat, (l) => {
      ge(l);
    }), Qe(k.inputStock, (l) => {
      v.stockType === "linear" && ui(l.map((o) => o.toData()));
    }, { deep: !0 }), Qe(() => v, (l) => {
      k.inputSaw.value = new bn(l);
    }, { deep: !0 }), fn(async () => {
      if (on.value) return;
      on.value = !0;
      const l = new URL(window.location.href), o = l.searchParams.toString(), g = l.origin + l.pathname + (o ? `?${o}` : "");
      ft.value !== g && gi(), ft.value = g, ze.value = ve.locale, await Lt.connect(), Lt.emit("getUserFromDomain"), window.addEventListener("smartcut/load", As);
    });
    const or = () => {
      Lt && Lt.disconnect();
    };
    return ni(() => {
      window.removeEventListener("smartcut/load", As), or(), delete window.smartcutCheckout;
    }), n({
      init: wo,
      clear: gi,
      getAvailablePricingOptions: pi,
      getExtrasPrice: Ho,
      formatPrice: ct.formatPrice,
      findExtrasPrice: ct.findExtrasPrice,
      inputShapes: k.inputShapes,
      initExtrasOptions: Cs,
      createAndAddInputShape: Na,
      initMaterialsThicknesses: Is
    }), (l, o) => {
      const g = oa("Icon");
      return A(), K("div", Hm, [
        bt.value ? (A(), Ne(E(r), {
          key: 0,
          title: "Ecommerce Calculator Debug",
          data: [{
            inputStock: E(k).inputStock.value.map((f) => ({ name: E(la)(f).fullLabel, materialKey: f.material, db_id: f.db_id || null, code: f.code || null, l: f.l, w: f.w, t: f.t, db_sawId: f.db_sawId || null, stockExtras: E(ti)(f) })),
            materials: R.value.map((f) => ({ name: E(la)(f).fullLabel, materialKey: f.name, thicknesses: f.thicknesses, db_id: f.db_id, code: f.code })),
            inputShapesStockRefs: E(k).inputShapes.value.map((f) => ({ material: f.material || "?", t: f.t, stock: f.stock || null })),
            saw: {
              inputSaw: E(k).inputSaw.value ? {
                name: E(k).inputSaw.value.name || null,
                db_id: E(k).inputSaw.value.db_id || null,
                stockType: E(k).inputSaw.value.stockType || null,
                bladeWidth: E(k).inputSaw.value.bladeWidth ?? null,
                bladeWidthEnd: E(k).inputSaw.value.bladeWidthEnd ?? null,
                cutPreference: E(k).inputSaw.value.cutPreference || null
              } : null,
              stockSawIds: E(k).inputStock.value.map((f) => ({ name: E(la)(f).fullLabel, db_sawId: f.db_sawId || null })),
              resultSaw: E(De).saw ? { name: E(De).saw.name || null, db_id: E(De).saw.db_id || null } : null
            },
            localStorage: { inputStock: ho.value, stockFilterSelections: vo.value }
          }],
          paths: ["ecommerce-calculator"],
          root: !1
        }, null, 8, ["data"])) : ue("", !0),
        mn.value ? ue("", !0) : (A(), Ne(Bl, {
          key: 1,
          size: "large",
          label: "Loading...",
          block: ""
        })),
        mn.value ? (A(), K("section", {
          key: 2,
          id: "smartcut-checkout",
          class: ot(["smartcut-content", { fullscreen: rn.value }]),
          style: Gt(bo.value)
        }, [
          j.value?.machining && Le.value ? (A(), Ne(E(i), {
            key: 0,
            "input-shape": j.value,
            "onUpdate:inputShape": o[0] || (o[0] = (f) => j.value = f),
            translate: !0,
            options: gt,
            "find-extras-price": e.findExtrasPrice,
            "get-extras-price": E(xi),
            "get-available-pricing-options": pi,
            "format-price": e.formatPrice,
            "custom-machining-products": Fo(j.value),
            onClose: Lo
          }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price", "custom-machining-products"])) : ue("", !0),
          j.value && ri.value ? (A(), Ne(E(s), {
            key: 1,
            "input-shape": j.value,
            "onUpdate:inputShape": o[1] || (o[1] = (f) => j.value = f),
            products: vs(j.value),
            "find-extras-price": e.findExtrasPrice,
            "format-price": e.formatPrice,
            onClose: Eo
          }, null, 8, ["input-shape", "products", "find-extras-price", "format-price"])) : ue("", !0),
          zn.value && !e.readonly ? (A(), K("button", {
            key: 2,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            onClick: o[2] || (o[2] = (f) => Ro())
          }, [
            st(g, { icon: ["fass", "expand"] }),
            nn(" " + Se(E(Ae)("general.full_screen")), 1)
          ])) : ue("", !0),
          ms.value ? (A(), K("a", {
            key: 3,
            id: "credit",
            style: ko,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, Se(E(pu)(E(Ae)("general.powered_by"))), 1)) : ue("", !0),
          be("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: Gt({ "grid-template-columns": ro.value })
          }, [
            E(k).inputShapes.value.length ? (A(), K("div", Zm, [
              o[8] || (o[8] = be("div", { class: "cell id" }, null, -1)),
              (A(!0), K(It, null, Zt(Oa.value, (f) => (A(), K("div", {
                key: f.name,
                class: ot(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(f.name) || f.type === "boolean" }])
              }, Se(E(Ae)(f.label)), 3))), 128)),
              bt.value ? (A(), K("div", Jm, " Info ")) : ue("", !0),
              o[9] || (o[9] = be("div", { class: "cell del" }, null, -1))
            ])) : ue("", !0),
            (A(!0), K(It, null, Zt(uo.value, (f, C) => (A(), K("div", {
              key: f.autoId,
              class: ot(["row inputs", { "group-pickable": ce.value, "row--readonly": !!f.readonly }])
            }, [
              be("div", {
                class: ot(["cell", { clickable: ce.value }]),
                onClick: (L) => ce.value && xn(f)
              }, [
                be("div", {
                  class: "id",
                  style: Gt({
                    background: ve.colors.partA,
                    color: ve.colors.text
                  })
                }, Se(co.value + C + 1), 5)
              ], 10, Qm),
              (A(!0), K(It, null, Zt(Oa.value, (L) => (A(), K("div", {
                key: L.name,
                class: "cell"
              }, [
                f ? (A(), Ne(Dm, {
                  key: 0,
                  field: L,
                  item: f,
                  index: C,
                  "type-prefix": "part",
                  readonly: e.readonly || !!f.readonly,
                  "number-format": ve.numberFormat,
                  "orientation-model": ve.orientationModel,
                  "stock-grain": E(le)(f),
                  "material-options": R.value?.map((N) => ({ label: N.displayName || N.name, value: N.name })) || [],
                  "material-items": Do(R.value),
                  "thickness-options": L.name === "t" ? Mo(f) : [],
                  "width-options": L.name === "w" && v.stockType === "linear" ? _o(f) : [],
                  "banding-enabled": Q.banding === C ? f : null,
                  "full-stock-disabled": f.fullStock && !["material", "t", "q", "fullStock"].includes(L.name) || L.name === "fullStock" && (Ps(f) || !f.fullStock && !fi(f)),
                  "material-extras-disabled": To(f),
                  onUpdate: (N) => So(f, L.propertyPath || L.fieldMap || L.name, N),
                  onValidation: o[3] || (o[3] = (N, H) => xo()),
                  onBlur: () => Po(f, L.name),
                  onOpenBanding: (N) => Ma("banding", f),
                  onOpenMachining: (N) => Co(f),
                  onOpenCustomProducts: (N) => Oo(f),
                  onOpenFinish: (N) => Ma("finish", f),
                  onOpenPlaning: (N) => Ma("planing", f),
                  onOpenImageUpload: (N) => Yo(C)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "orientation-model", "stock-grain", "material-options", "material-items", "thickness-options", "width-options", "banding-enabled", "full-stock-disabled", "material-extras-disabled", "onUpdate", "onBlur", "onOpenBanding", "onOpenMachining", "onOpenCustomProducts", "onOpenFinish", "onOpenPlaning", "onOpenImageUpload"])) : ue("", !0)
              ]))), 128)),
              bt.value ? (A(), K("div", Ym, [
                be("button", {
                  class: ot(["c-btn", { selected: Q.info === C }]),
                  type: "button",
                  onClick: (L) => Ma("info", f)
                }, " i ", 10, Xm)
              ])) : ue("", !0),
              be("div", eg, [
                be("button", {
                  disabled: E(k).inputShapes.value.length <= 1 || e.readonly || !!f.readonly,
                  type: "button",
                  class: "c-btn delete",
                  "aria-label": `${E(Ae)("actions.remove")} ${E(Ei)(E(Ae)("woodwork.part"))}`,
                  onClick: (L) => E(x)(f.autoId)
                }, [
                  st(g, { icon: ["fass", "trash"] })
                ], 8, tg)
              ]),
              st(E(a), {
                item: f,
                "num-columns": Ea.value
              }, null, 8, ["item", "num-columns"]),
              (A(!0), K(It, null, Zt(Wo.value, (L) => (A(), K(It, {
                key: L.type + "-" + (f?.material || "")
              }, [
                Q[L.type] === C && jo.value && L.show(f) ? (A(), Ne(lf, Kt({
                  key: 0,
                  shape: f,
                  "shape-index": C,
                  "extra-type": L.type,
                  "extra-label": L.type,
                  "extra-keys": L.keys,
                  "user-friendly-field-map": E(su),
                  "part-columns": Ea.value,
                  "format-price": e.formatPrice,
                  "find-extras-price": ct.findExtrasPrice,
                  "get-price": Ko,
                  "orientation-model": ve.orientationModel,
                  "stock-grain": E(le)(f),
                  "get-available-pricing-options": pi,
                  "allow-custom-names": !1,
                  debug: bt.value
                }, { ref_for: !0 }, { ...zo(f, L), ...L.extraProps(f) }), null, 16, ["shape", "shape-index", "extra-type", "extra-label", "extra-keys", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain", "debug"])) : ue("", !0)
              ], 64))), 128)),
              Q.info === C ? (A(), K("div", {
                key: 1,
                id: "shape-info",
                style: Gt({ "grid-column-end": "span " + Ea.value })
              }, [
                be("div", null, Se(f?.banding), 1),
                be("div", null, Se(Ft.value?.banding?.options || "No options"), 1)
              ], 4)) : ue("", !0),
              pn.value === C ? (A(), Ne(E(d), {
                key: 2,
                prefix: (C + 1).toString(),
                "unique-id": f.autoId,
                "shape-id": f.autoId,
                style: Gt({ "grid-column-end": "span " + Ea.value }),
                images: pt.value,
                debug: bt.value,
                onUpdate: Jo,
                onRemove: Qo
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images", "debug"])) : ue("", !0)
            ], 2))), 128))
          ], 4),
          be("div", ng, [
            e.readonly ? ue("", !0) : (A(), K("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${E(Ae)("actions.add")} ${E(Ei)(E(Ae)("woodwork.part"))}`,
              onClick: o[4] || (o[4] = (f) => mi())
            }, [
              st(g, { icon: ["fass", "plus-large"] }),
              nn(" " + Se(`${E(Ae)("actions.add")} ${E(Ei)(E(Ae)("woodwork.part"))}`), 1)
            ], 8, ag)),
            be("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": E(Ae)("actions.calculate"),
              title: e.calculateDisabled && e.calculateDisabledReason ? e.calculateDisabledReason : void 0,
              disabled: !E(k).inputStock.value?.length || St.value || e.calculateDisabled,
              onClick: o[5] || (o[5] = (f) => ar())
            }, [
              st(g, { icon: ["fass", "calculator"] }),
              nn(Se(E(Ae)("actions.calculate")), 1)
            ], 8, ig),
            e.readonly ? ue("", !0) : (A(), K("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": E(Ae)("actions.clear"),
              onClick: o[6] || (o[6] = (f) => gi())
            }, [
              st(g, { icon: ["fass", "trash"] })
            ], 8, sg)),
            be("div", lg, Se(E(M)) + Se(ve?.maxParts ? "/" + ve.maxParts : ""), 1)
          ]),
          ce.value && !e.readonly ? (A(), Ne(E(h), {
            key: 4,
            ref_key: "groupsRef",
            ref: Ee,
            "selected-shape": ye.value,
            "selected-shape-counter": Re.value,
            "stock-grain": Ue.value,
            "format-options": Et.value,
            onHighlightShape: ra,
            onClearHighlight: li
          }, null, 8, ["selected-shape", "selected-shape-counter", "stock-grain", "format-options"])) : ue("", !0),
          pa.value && _n.value > 1 ? (A(), K("div", og, [
            be("div", rg, [
              be("button", {
                type: "button",
                class: "c-btn",
                disabled: mt.value === 1,
                onClick: fo
              }, [
                st(g, { icon: ["fass", "chevrons-left"] })
              ], 8, ug),
              be("button", {
                type: "button",
                class: "c-btn",
                disabled: mt.value === 1,
                onClick: po
              }, [
                st(g, { icon: ["fass", "chevron-left"] })
              ], 8, cg),
              be("span", dg, Se(mt.value) + " / " + Se(_n.value), 1),
              be("button", {
                type: "button",
                class: "c-btn",
                disabled: mt.value >= _n.value,
                onClick: mo
              }, [
                st(g, { icon: ["fass", "chevron-right"] })
              ], 8, fg),
              be("button", {
                type: "button",
                class: "c-btn",
                disabled: mt.value >= _n.value,
                onClick: go
              }, [
                st(g, { icon: ["fass", "chevrons-right"] })
              ], 8, pg)
            ])
          ])) : ue("", !0),
          Sn.value && !e.readonly ? (A(), Ne(E(u), {
            key: 6,
            ref: "import",
            "number-format": ve.numberFormat,
            "custom-fields": da.value,
            "banding-options": Ie.options,
            "banding-labels": Ie.labels,
            "finish-options": Be.options,
            "finish-labels": Be.labels,
            "show-template": ve.enable?.csvTemplate !== !1,
            onImport: lr
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels", "show-template"])) : ue("", !0),
          ua.value ? (A(), K("div", mg, [
            Nn.value ? (A(), K("div", gg, Se(Nn.value), 1)) : ue("", !0),
            be("pre", hg, Se(ca.value), 1)
          ])) : ue("", !0),
          (ve.enable?.diagram ? St.value && !E(rt).complete || E(rt).complete && !fe.value : St.value || E(rt).complete) ? (A(), K("div", vg, [
            st(E(q), {
              size: 50,
              number: E(rt).shapeCount,
              complete: E(rt).complete,
              "show-number": ve.enable?.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : ue("", !0),
          Qi(be("div", bg, [
            E(_e)?.saw?.stockType !== "roll" ? (A(), K("div", yg, Se(E(_e)?.stack?.number ? E(_e).stack.number : 1), 1)) : ue("", !0),
            ln.value ? (A(), Ne(E(_), {
              key: 1,
              "element-id": "diagram",
              "number-format": ve.numberFormat,
              "decimal-places": ve.decimalPlaces,
              colors: ve.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])) : ue("", !0)
          ], 512), [
            [pr, ve.enable?.diagram && E(rt).complete && fe.value]
          ]),
          ps.value && ve.enable?.diagram && E(J).length > 1 && E(rt).complete ? (A(), Ne(E(U), {
            key: 9,
            display: !0,
            "use-stack": !0,
            "show-sorting": !1,
            onShow: E(kt)
          }, null, 8, ["onShow"])) : ue("", !0),
          !ps.value && ve.enable?.diagram && E(J).length > 1 && E(rt).complete ? (A(), Ne(E(de), {
            key: 10,
            ref: "stockNavigation",
            "active-stock-id": E(we),
            "stock-list": E(J),
            "primary-color": ve.colors.stock?.replace("#", ""),
            "secondary-color": ve.colors.partA?.replace("#", ""),
            onShowStock: E(kt)
          }, null, 8, ["active-stock-id", "stock-list", "primary-color", "secondary-color", "onShowStock"])) : ue("", !0)
        ], 6)) : ue("", !0),
        bt.value ? (A(), K("div", kg, [
          st(E(r), {
            data: [E(k)?.inputShapes?.value?.[0]],
            paths: ["inputShapes"]
          }, null, 8, ["data"]),
          o[10] || (o[10] = be("div", null, "Result data", -1)),
          st(E(r), {
            data: [it.value],
            paths: ["checkoutResult"]
          }, null, 8, ["data"])
        ])) : ue("", !0),
        st(Km, {
          open: $n.value,
          "onUpdate:open": o[7] || (o[7] = (f) => $n.value = f),
          options: p.value?.options || [],
          "material-label": p.value?.shape?.material || "",
          thickness: p.value?.shape?.t,
          "format-price": ct.formatPrice,
          onPick: I,
          onCancel: z
        }, null, 8, ["open", "options", "material-label", "thickness", "format-price"])
      ]);
    };
  }
}), Gg = /* @__PURE__ */ sn(wg, [["__scopeId", "data-v-84a739c7"]]);
export {
  wu as A,
  la as B,
  na as C,
  Ug as D,
  ad as E,
  si as F,
  xa as I,
  Bl as L,
  wd as M,
  Gl as S,
  Vm as _,
  Dl as a,
  lf as b,
  qg as c,
  mf as d,
  df as e,
  Lc as f,
  qt as g,
  wm as h,
  Np as i,
  Gg as j,
  Qs as k,
  Mg as l,
  Ca as m,
  jg as n,
  Ys as o,
  Dg as p,
  _g as q,
  $g as r,
  Fi as s,
  yc as t,
  is as u,
  Tu as v,
  ql as w,
  Bg as x,
  Rg as y,
  Vg as z
};

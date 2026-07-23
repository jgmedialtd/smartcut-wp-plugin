import { s as K, k as Je, _ as Kt, x as A, M as nt, Y as Zs, I as _t, d as vt, $ as Fo, l as pn, N as ci, o as F, c as Z, a as be, g as ut, u as T, j as Me, b as ce, t as we, q as di, w as Hn, n as Wt, F as Ot, f as Jt, H as Cr, a0 as Ht, p as nn, P as Zt, i as an, z as fi, h as ls, E as No, m as ot, r as da, A as $o, C as jt, D as Lr, a1 as zt, Q as aa, X as Or, v as Er, K as cn } from "./vendor-vue-CeWGZ1lm.js";
import { i as rt, ac as Xe, ad as Fn, ae as Mo, a6 as Nn, af as Zn, ag as Jn, ah as Tr, n as ht, ai as Ci, z as rs, A as St, aj as Ar, E as Cn, ak as Fr, al as Do, I as _o, am as Nr, an as la, ao as Ro, ap as Vo, aq as qo, ar as $r, as as Mr, at as Tn, au as Dt, av as Dr, aw as _r, ax as Rr, ay as zi, az as Ca, aA as Vr, aB as Li, aC as qr, aD as Ln, aE as Js, aF as Ba, $ as Xn, a0 as va, _ as kn, aG as Br, aH as Qs, aI as Ys, h as ue, aa as ja, t as Qa, T as ba, aJ as ya, W as ka, a5 as wa, aK as Xs, aL as eo, w as to, aM as jr, aN as Ur, aO as Gr, aP as Wr, aQ as zr, aR as Bo, a as no, a3 as Ki, s as Kr, Q as Hr, B as ao, F as Zr, O as Jr, a7 as yn, aS as Qr, aT as io, aU as us, aV as cs, aW as Hi, V as Yr, c as so, aX as Xr, d as eu, f as tu, aY as nu, aZ as au, a_ as jo, a$ as iu, b0 as Oi, b1 as su, b2 as ou, b3 as Uo, b4 as lu, b5 as ru, b6 as uu, b7 as cu, b8 as du, b9 as fu, ba as pu, bb as Zi, bc as mu, bd as gu, be as hu, bf as vu, bg as bu, bh as ra, bi as Ei, bj as yu, bk as oo, bl as lo, bm as Ti, e as Ai, bn as ku, u as wu } from "./InputUserGroup-Cp-L9c2U.js";
import { o as $, h as d, i as xe, y as ii, n as k, l as Se, q as ee, j as ae, k as sn, S as Su, u as Qe, w as yt, B as xu, E as La, I as Ua, K as ua, t as Pu, J as ro, L as Iu, T as Cu, U as uo, V as Lu, D as Ga, M as Fi, N as Ni, O as $i, x as Ou } from "./vendor-C76etQCp.js";
import { s as Mi, t as Go, u as Eu, l as Di, d as Tu } from "./i18n-D1euh3nS.js";
import { g as Au, h as Fu, s as Nu } from "./vendor-lodash-wbyiOdVF.js";
import { Icon as si } from "./index-BYdfCLOt.js";
import { o as Wo, f as zo, s as Ko, a as Ho, d as $u } from "./vendor-floating-ui-CCq0hEoe.js";
import { _ as on } from "./Launch-_29Ox10h.js";
import { t as Te } from "./i18n-gSInbpCa.js";
import { b as Ji } from "./environment-BeBZzWz6.js";
import "./vendor-i18next-BVRe4kPe.js";
function co(e, n) {
  return Fu(e, n);
}
function Bt(e, n) {
  return Au(e, n);
}
function _i(e, n, t) {
  Nu(e, n, t);
}
function fo(e, n = !1) {
  if (!rt(e) || typeof e != "object") return !1;
  const t = Object.values(e);
  return t.length === 0 ? !1 : n ? t.some((a) => rt(a) && a) : t.some((a) => rt(a));
}
function Mu(e) {
  if (!e?.length) return [];
  const n = e.filter((a) => !a.added), t = {};
  return n.forEach((a) => {
    const i = Zo(a.stock) || 1;
    t[a.parentId] ? t[a.parentId].count += i : (t[a.parentId] = {}, t[a.parentId].count = i, t[a.parentId].id = a.parentId, t[a.parentId].autoId = a.autoId || "", t[a.parentId].name = a?.name ? a.name : a.id, t[a.parentId].l = a.l, t[a.parentId].w = a.w, t[a.parentId].t = a.t, t[a.parentId].material = a.material, t[a.parentId].rot = a.rot, t[a.parentId].orientationLock = a.orientationLock);
  }), Object.values(t);
}
function Zo(e, n = []) {
  if (!e) return 1;
  if (e?.stack?.number) return e.stack.number;
  if (e?.stack?.stock) {
    const t = typeof e.stack.stock == "string" ? e.stack.stock : e.stack.stock?.id;
    if (t && n.length > 0)
      return n.find((i) => i.id === t)?.stack?.number || 1;
  }
  return typeof e?.stack == "string" && n.find((a) => a.id === e.stack)?.stack?.number || 1;
}
function Du() {
  const e = document.documentElement;
  return "requestFullscreen" in e || "webkitRequestFullscreen" in e || "mozRequestFullScreen" in e || "msRequestFullscreen" in e;
}
function _u(e, n = "cc") {
  if (!e) return e;
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
const Jo = {
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
function Ru(e) {
  return e !== 0 && e !== 1 && e !== 2 ? !1 : Jo[e].sidesLMatchShapeL;
}
function Vu(e) {
  return e !== 0 && e !== 1 && e !== 2 ? [] : Jo[e].affectedExtraTypes;
}
function Ya(e = 0, n, t = null, a = null, i = null) {
  if (!Xe(t) && !Fn || a === "stock") return !1;
  let s, u;
  if (Xe(t) ? s = t.orientationLock : Fn(t) ? s = "l" : a === "shape" && (s = i), e === 0 || Fn(t))
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
    if (t) u = t.w > t.l;
    else return !1;
  else if (e === 2) {
    if (!t) return !1;
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
function qu(e, n, t = null, a = null, i = null) {
  if (!Xe(t) || a === "shape") return !1;
  let s;
  return e === 0 || e === 1 || e === 2 ? Ya(e, n, t, a, i) ? "cc" : !1 : s;
}
const Bu = {
  successMetric: "efficiency"
};
$({
  // Context - using z.any() for complex external types
  job: Se().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: d().nullable().default(null).describe("Socket.io connection ID"),
  user: Se().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: Se().describe("Configuration object"),
  // Type: Config
  api: ae().nullable().default(null).describe("API mode flag"),
  app: ae().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: rs("Saw").describe("Saw configuration"),
  stockList: ht("Stock").default([]).describe("List of stock materials"),
  shapeList: Ci(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: ht("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: ht("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: ht("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: Ci(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: Ci(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: Tr,
  // Results storage
  cutList: ht("Cut").default([]).describe("List of cuts to make"),
  segmentList: ht("Segment").default([]).describe("List of segments"),
  offcuts: ht("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: ht("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: ae().default(!1).describe("Use inventory system"),
  successMetric: d().default(Bu.successMetric).describe("Metric for optimization success"),
  enableEvo: ae().default(!0).describe("Enable evolutionary algorithm"),
  weighting: xe(d(), Se()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: Se().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: Se().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: $({
    placement: k().default(0),
    group: k().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  runningEvo: ae().default(!1).describe("Currently running evolution"),
  evolutionVisData: ee(xe(d(), Su())).default([]).describe("Evolution visualization data"),
  final: ae().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: ae().default(!1).describe("Has minimum spacing requirement")
});
const ju = sn(["decimal", "fraction"]), Ri = $({
  sku: xe(d(), d()).optional(),
  name: xe(d(), d()).optional()
}), ds = $({
  banding: Ri.optional(),
  finish: Ri.optional(),
  planing: Ri.optional()
}), Uu = $({
  job: Se().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Extend with autoId/entityType so they survive Zod validation for worker reconstruction
  inputSaw: Jn.extend({ autoId: d().optional(), __entityType: d().optional() }),
  inputShapes: ee(Zn.extend({ autoId: d().optional(), __entityType: d().optional() })),
  inputStock: ee(Nn.extend({ autoId: d().optional(), __entityType: d().optional() })),
  inputUserGroups: ee(Mo.extend({ autoId: d().optional(), __entityType: d().optional() })).optional(),
  // Number format for conversion
  numberFormat: ju.optional(),
  // Algorithm configuration
  enableEvo: ae().default(!0),
  weighting: Se().optional(),
  successMetric: d().optional(),
  useInventory: ae().default(!1),
  // Context
  socketId: d().optional(),
  user: Se().optional(),
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
        sides: xe(d(), ee(d())).optional()
      }).optional()
    }).optional(),
    finish: $({
      options: $({
        faces: xe(d(), ee(d())).optional()
      }).optional()
    }).optional(),
    planing: $({
      options: $({
        sides: xe(d(), ee(d())).optional(),
        faces: xe(d(), ee(d())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // Extras display-value resolution for the cutlist CSV (internal-only;
  // SKU → name → tuple). Storefront-supplied; never on the public /v3 API.
  extrasResolution: ds.optional(),
  // API specific
  config: Se().optional(),
  v: k().optional(),
  // API version
  webhook: d().optional(),
  // Named optimisation MODEL (the solver approach). One naming convention — only the canonical ids
  // below are accepted (no aliases); the server maps the value to a config bundle. Canonical ids:
  // 'rectangle-guillotine-fast' (default) and the Max tiers 'rectangle-guillotine-max-1|2|3'.
  // NOTE: the Max tiers are currently BEAM-ONLY — a Max request on a non-beam saw (or a beam saw
  // without a recognised profile) is downgraded to Fast (see server/optimiser/models.ts
  // selectAlgorithm / maxModelBlockReason).
  model: d().optional().describe(
    "Optimisation model. Canonical ids only (no aliases): 'rectangle-guillotine-fast' (default) | 'rectangle-guillotine-max-1' | 'rectangle-guillotine-max-2' | 'rectangle-guillotine-max-3'. The Max tiers are currently BEAM-only and require a recognised beam saw profile; otherwise the job runs Fast. Unknown/absent → Fast."
  ),
  // Admin-only per-request config override (algolab smoke-testing from the UI). Carries experimental
  // flags / guillotine overrides for ONE calc; the server applies it ONLY when the requesting user is
  // an admin (server/workers/bull-process.ts), so a non-admin payload is ignored. Mirrors the
  // __configOverrides the batch-run/run-single tools use.
  __configOverrides: $({
    experimental: xe(d(), ii()).optional(),
    guillotine: xe(d(), ii()).optional()
  }).passthrough().optional(),
  //source
  sourceVersion: d().nullish(),
  source: d().optional()
});
$({
  job: Se().optional(),
  // Type: Job from BullMQ
  saw: Se(),
  // Runtime Saw instance
  shapeList: ee(Se()),
  // Runtime Shape instances
  stockList: ee(Se()),
  // Runtime Stock instances
  userGroups: ee(Se()).optional(),
  // Runtime Group instances
  enableEvo: ae(),
  weighting: Se().optional(),
  successMetric: d().optional(),
  useInventory: ae(),
  socketId: d().optional(),
  user: Se().optional(),
  widget: ae().optional(),
  api: ae().optional(),
  app: ae().optional(),
  domain: d().optional(),
  config: Se().optional(),
  v: k().optional(),
  webhook: d().optional()
});
const Gu = typeof process < "u" && !!process.env && !!process.env.ALGO_TRACE;
(Gu ? process.env.ALGO_TRACE_DATA ?? "" : "").split(",").map((e) => e.trim()).filter(Boolean);
function Qo(e) {
  return {
    entities: /* @__PURE__ */ new Map(),
    stockList: [],
    shapeList: [],
    ...e
  };
}
function Xa(e, n) {
  if (Array.isArray(n))
    for (const t of n)
      t && typeof t == "object" && (t.autoId && e.entities.set(t.autoId, t), t.id && t.id !== t.autoId && e.entities.set(t.id, t));
}
function Wu(e, n) {
  if (n) {
    if (n && typeof n == "object" && typeof n.getType == "function")
      return n;
    if (typeof n == "string")
      return e.entities.get(n);
    if (n && typeof n == "object" && n.autoId)
      return e.entities.get(n.autoId);
  }
}
function Qi(e, n) {
  if (!e || typeof e != "object") return e;
  if (Array.isArray(e))
    return e.map((a) => Qi(a, n));
  if (typeof e.getType == "function")
    return e;
  if (e.__ref && (e.id || e.autoId)) {
    const a = e.autoId || e.id;
    return Wu(n, a) || e;
  }
  const t = { ...e };
  for (const a in t)
    Object.prototype.hasOwnProperty.call(t, a) && (t[a] = Qi(t[a], n));
  return t;
}
function fs(e, n, t) {
  if (e == null || e && typeof e == "object" && typeof e.getType == "function")
    return e;
  if (Array.isArray(e))
    return e.every((r) => r && typeof r == "object" && typeof r.getType == "function") ? e : e.map((r) => fs(r, n));
  if (!e || typeof e != "object" || !e.__entityType && !e.__ref && !e.type)
    return e;
  const a = e.__entityType;
  n?.preventAutoRotation && a && (a === Cn.Rectangle || a === Cn.Placeable || a === Cn.Container || a === Cn.Shape || a === Cn.Group || a === Cn.Offcut || a === Cn.Stock || a === Cn.Segment) && (e.preventAutoRotation = !0), n && (e.__context = n);
  const i = e.__ref || a, s = Ar();
  if (i && s.has(i)) {
    const u = s.get(i), { __ref: r, __entityType: c, __context: f, ...h } = e, C = new u(h);
    return C.issues && Array.isArray(C.issues) && (C.issues = C.issues.map((b) => b instanceof St ? b : St.fromData(b, C))), C.warnings && Array.isArray(C.warnings) && (C.warnings = C.warnings.map((b) => b instanceof St ? b : St.fromData(b, C))), C;
  }
  return delete e.__context, e;
}
function zn(e, n) {
  if (n || (n = Qo()), Array.isArray(e)) {
    const i = [];
    for (const s of e) {
      const u = zn(s, n);
      i.push(u), u && typeof u == "object" && (u.autoId || u.id) && Xa(n, [u]);
    }
    return i;
  }
  if (e && typeof e == "object" && typeof e.getType == "function")
    return (e.autoId || e.id) && Xa(n, [e]), e;
  const t = Qi(e, n), a = fs(t, n);
  return a && typeof a == "object" && (a.autoId || a.id) && Xa(n, [a]), a;
}
function zu(e, n) {
  const t = Qo(n), a = e?.saw ? zn(e.saw, t) : void 0;
  a && Xa(t, [a]);
  const i = e?.stockList ? zn(e.stockList, t) : [];
  i.length > 0 && (t.stockList = i);
  const s = Array.isArray(e?.shapeList) ? e.shapeList.map((h) => !h || typeof h != "object" ? h : (h.added === !0 || typeof h.x == "number" && typeof h.y == "number") && h.preventAutoRotation !== !0 ? { ...h, preventAutoRotation: !0 } : h) : e?.shapeList, u = s ? zn(s, t) : [];
  u.length > 0 && (t.shapeList = u);
  const r = e?.cutList ? zn(e.cutList, t) : [], c = e?.segmentList ? zn(e.segmentList, t) : [];
  c.length > 0 && (t.segmentList = c);
  const f = e?.offcuts ? zn(e.offcuts, t) : [];
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
function Ku(e) {
  const n = {};
  return e.forEach((t) => {
    t.shapeIds.forEach((a) => {
      const i = t.q || 1;
      n[a] ? n[a] += i : n[a] = i;
    });
  }), n;
}
function Hu(e, n, t = !0) {
  const a = Ku(e), i = [];
  for (const s in a) {
    const u = a[s], r = n.findIndex((h) => h.autoId === s), c = n[r], f = Fr({
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
function Xg(e = [], n = []) {
  e.length && n.length && e.forEach((t) => {
    t.shapeIds = t.shapeIds.filter((a) => n.find((i) => i.autoId === a));
  });
}
const Wa = [
  "#03171d",
  "#073b4c",
  "#118ab2",
  "#ef476f",
  "#ffd166",
  "#06d6a0"
];
function Zu(e) {
  const n = (Math.trunc(e) % Wa.length + Wa.length) % Wa.length;
  return Wa[n];
}
const ia = $({
  id: d(),
  name: d().max(200).default(""),
  colorIndex: k().int().min(0).default(0),
  grain: Do,
  thicknesses: ee(k().positive()).default([])
}), Ju = $({
  id: d(),
  count: k(),
  name: d(),
  l: k(),
  w: k(),
  t: k(),
  material: d()
}), ps = $({
  inputStock: ee(Nn),
  inputShapes: ee(Zn),
  inputSaw: Jn,
  inputUserGroups: ee(Mo),
  // CLE materials list (project-scoped). Optional for back-compat with projects saved
  // before the materials feature — reverse-engineered from stock/parts on load if absent.
  materials: ee(ia).optional(),
  // Centralized extras options for UI dropdowns
  extrasOptions: $({
    banding: $({
      options: ee(d())
    }).optional(),
    finish: $({
      options: ee(d())
    }).optional(),
    planing: $({
      options: ee(d())
    }).optional()
  }).optional()
}).optional(), Yo = $({
  // Banding metrics
  bandingLengthByType: xe(d(), k()).default({}),
  // Finish metrics (by face)
  finishAreaByType: xe(d(), k()).default({}),
  // Planing metrics (by type)
  planingAreaByType: xe(d(), k()).default({}),
  // Material summary with nested structure
  materialSummary: xe(
    d(),
    // material name
    xe(
      d(),
      // thickness
      $({
        used: k(),
        stacks: k(),
        bandingLengthByType: xe(d(), k())
      })
    )
  ).default({}),
  // Tallies
  usedStockTally: xe(d(), k()).default({}),
  addedPartTally: xe(d(), k()).default({}),
  // Cost metrics
  stockAreaCost: k().default(0),
  totalStockCost: k().default(0),
  // Machining metrics
  hasMachining: ae().default(!1),
  numHoles: k().default(0),
  numCorners: k().default(0),
  // Efficiency metrics
  totalBandingLength: k().default(0),
  totalFinishArea: k().default(0),
  totalPlaningArea: k().default(0),
  totalEfficiency: k().default(0),
  // Cutting metrics
  totalCutLength: k().default(0),
  totalStackedCutLength: k().default(0),
  totalCuts: k().default(0),
  totalStackedCuts: k().default(0),
  // Area metrics
  totalStockArea: k().default(0),
  totalStockUsedArea: k().default(0),
  totalStockUnusedArea: k().default(0),
  totalPartArea: k().optional(),
  // Legacy name
  totalPartsArea: k().default(0),
  totalUnusedPartsArea: k().default(0),
  totalOffcutsArea: k().default(0),
  totalOffcuts: k().default(0),
  totalBladeArea: k().default(0),
  totalTrimArea: k().default(0),
  // Additional metrics
  totalPartsProduced: k().optional(),
  totalUsedStock: k().optional(),
  totalRollLength: k().optional(),
  totalStockWeight: k().optional(),
  totalPartWeight: k().optional()
}), Ea = Yo.extend({
  bandingLengthByType: xe(d(), k()).default({}),
  unplacedParts: ee(Ju).default([]),
  // Ecommerce pricing - calculated client-side
  offcutCost: k().optional()
}), Qu = $({
  // Core optimization results
  stockList: ht("Stock"),
  shapeList: ht("Shape"),
  cutList: ht("Cut").optional(),
  segmentList: ht("Segment").optional(),
  offcuts: ht("Offcut").optional(),
  saw: rs("Saw"),
  unusableShapes: ht("Shape").optional(),
  unavailableStock: ht("Stock").optional(),
  evolutionVisData: ee($({})).optional(),
  performance: d().optional(),
  algoMs: k().optional(),
  /** Named optimisation MODEL that actually produced this result (canonical id from
   *  composeModelSelection, e.g. `rectangle-guillotine-fast` / `…-max-1`). Recorded for
   *  telemetry — "which algorithm ran" + its speed (algoMs) on real jobs. */
  model: d().optional(),
  /** Deterministic, machine-independent work count (placement-scoring evals) — the
   *  algorithm-lab gates regressions on this instead of wall-clock `algoMs`. */
  algoComplexity: k().optional(),
  // Per-stage timings for benchmark/debugging. Populated by the optimiser pipeline
  // and surfaced in the benchmark report as a stacked bar chart next to layouts.
  phaseTimings: ee($({ phase: d(), ms: k() })).optional(),
  apiVersion: k().optional(),
  // Renamed from 'v'
  metadata: Ea.optional(),
  credits: k().optional(),
  time: k().optional(),
  // billedMs — what the customer is charged for
  // CNC cutting plans per stock (keyed by stock autoId)
  cuttingPlans: xe(d(), Se()).optional(),
  // Saw-profile constraint violations — populated when the caller passes
  // `sawProfileId` in RuntimeCalculationData. Each entry describes a way
  // the produced layout cannot be faithfully emitted to the declared saw.
  // REPORT-ONLY today; downstream code can choose to refuse emission or
  // fall back to a different saw / format.
  sawViolations: ee($({
    kind: d(),
    stockId: d(),
    message: d(),
    shapeIds: ee(d()).optional()
  })).optional(),
  // Optional input data for debugging/API reporting
  inputs: ps
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
  config: Se().optional(),
  error: d().optional(),
  jobId: k().optional(),
  // Job-level label-printer fields (mirrors V3 request top-level `labels`).
  // Persisted so the export step (post-processor emit) can thread values
  // like JOBS.CUSTOMER into the PTX output without re-loading the request.
  labels: $({
    customer: d().max(100).optional()
  }).optional(),
  // Per-type SKU/name maps to resolve operator-meaningful cutlist labels at
  // export (internal-only; see optimiser.zod extrasResolutionSchema).
  extrasResolution: ds.optional(),
  // Input data
  inputs: ps,
  // The actual optimization results
  optimisation: Qu
});
$({
  // Database metadata
  jobId: k().optional(),
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
  config: Se().optional(),
  error: d().optional(),
  // Job-level label-printer fields (see `jobResultSchema.labels`).
  labels: $({
    customer: d().max(100).optional()
  }).optional(),
  // Extras display-value resolution maps (see `jobResultSchema.extrasResolution`).
  extrasResolution: ds.optional(),
  // Optimization results (flattened from optimization object)
  stockList: ht("Stock"),
  shapeList: ht("Shape"),
  cutList: ht("Cut").optional(),
  segmentList: ht("Segment").optional(),
  offcuts: ht("Offcut").optional(),
  saw: rs("Saw"),
  unusableShapes: ht("Shape").optional(),
  unavailableStock: ht("Stock").optional(),
  performance: d().optional(),
  algoMs: k().optional(),
  /** Named optimisation MODEL that produced this result (see optimisationOutputSchema.model) —
   *  flattened here so the telemetry performance query can group jobs by algorithm. */
  model: d().optional(),
  /** Deterministic, machine-independent work count (placement-scoring evals) — the
   *  algorithm-lab gates regressions on this instead of wall-clock `algoMs`. */
  algoComplexity: k().optional(),
  metadata: Ea.optional(),
  apiVersion: k().optional(),
  credits: k().optional(),
  time: k().optional(),
  // billedMs — what the customer is charged for
  // CNC cutting plans per stock (keyed by stock autoId)
  cuttingPlans: xe(d(), Se()).optional(),
  // Input data
  inputs: ps,
  // Computed fields for easier querying/display
  numParts: k().optional(),
  numStock: k().optional(),
  workerName: d().optional(),
  queueName: d().optional()
});
$({
  id: d().optional(),
  name: d().optional(),
  l: k(),
  w: k(),
  t: k().nullable().optional(),
  material: d().optional(),
  q: k().optional(),
  orientationLock: Qe([
    yt(""),
    yt("l"),
    yt("w")
  ]).nullable().optional(),
  // Basic extras for display
  banding: Se().optional(),
  finish: Se().optional(),
  planing: Se().optional()
});
const Yu = $({
  issues: ee(d()),
  id: d(),
  duplicate: ae(),
  name: d(),
  added: ae(),
  x: k(),
  y: k(),
  l: k(),
  w: k(),
  t: k(),
  q: k().optional(),
  // Add quantity for checkout compatibility
  orientationLock: Qe([
    yt(""),
    yt("l"),
    yt("w")
  ]),
  trim: $({
    l1: k(),
    l2: k(),
    w1: k(),
    w2: k()
  }),
  material: d(),
  banding: Se(),
  // Using any for now, could use bandingPropertiesSchema
  bandingType: Se(),
  // Legacy field
  finish: Se(),
  // Using any for now, could use finishPropertiesSchema
  stock: $({ id: d() }),
  rot: ae(),
  notes: d(),
  customData: xe(d(), Qe([d(), k(), ae()]))
});
$({
  issues: ee(d()),
  id: d(),
  duplicate: ae().optional(),
  name: d(),
  l: k(),
  w: k(),
  t: k().nullable(),
  material: d(),
  cost: k(),
  used: ae(),
  grain: Qe([
    yt(""),
    yt("l"),
    yt("w"),
    xu()
  ]).nullable(),
  trim: $({
    l1: k(),
    l2: k(),
    w1: k(),
    w2: k()
  }),
  parts: ee(Yu),
  efficiency: k(),
  notes: d().optional(),
  // Legacy V1 fields
  blade: $({
    width: k()
  }).optional(),
  cutPreference: Qe([
    yt("l"),
    yt("w")
  ]).optional(),
  // Analysis data
  analysis: $({
    partArea: k(),
    totalParts: k(),
    areaEfficiency: k(),
    cutLength: k(),
    bandingLength: k(),
    numberOfCuts: k(),
    rollLength: k().optional()
  }).optional(),
  // Stack info
  stack: Se().optional(),
  // Stock quantity for checkout compatibility
  q: k().optional()
});
function eh(e, n, t = "metric") {
  return n / (t === "imperial" ? 12 : 1e3) * e;
}
function th(e, n) {
  return n / 1e6 * e;
}
function Xu(e, n = []) {
  if (!e?.length) return [];
  const t = e.map((a) => a && typeof a.getType == "function" ? a : fs(a)).filter((a) => a instanceof _o);
  return n.length && ec(t, n), t;
}
function ec(e = [], n = []) {
  e.length && n.length && e.forEach((t) => {
    t.shapeIds = t.shapeIds.filter((a) => n.find((i) => i.autoId === a));
  });
}
let ei = null;
if (Ji())
  try {
    ei = require("~/helpers/applicationSettings").applicationSettings;
  } catch (e) {
    console.error("[useCrossPlatformStorage] Failed to load ApplicationSettings:", e);
  }
function Kn(e, n, t = {}) {
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
  if (!Ji()) {
    const u = K((() => {
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
    return Je(u, (r) => {
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
  if (Ji()) {
    if (!ei)
      return console.error("[useCrossPlatformStorage] ApplicationSettings not available! Using in-memory fallback."), K(n);
    const u = K((() => {
      try {
        const r = ei.getString(e);
        if (r)
          return a.read(r);
      } catch (r) {
        console.error("[useCrossPlatformStorage] Failed to load", e, "from ApplicationSettings:", r);
      }
      return n;
    })());
    return Je(u, (r) => {
      try {
        const c = a.write(r);
        ei.setString(e, c);
      } catch (c) {
        console.error("[useCrossPlatformStorage] Failed to save", e, "to ApplicationSettings:", c);
      }
    }, { deep: !0 }), u;
  }
  return console.warn("[useCrossPlatformStorage] No storage available for key", e, "- using in-memory fallback"), K(n);
}
function Vi(e) {
  if (typeof e != "string" || !e || !(e.startsWith("errors.") || e.startsWith("fields.") || e.startsWith("extras.") || e.startsWith("woodwork.") || e.startsWith("validation."))) return e;
  const t = Go(e);
  return t && t !== e ? t : e;
}
function tc() {
  const e = Date.now(), n = Math.random().toString(36).substring(2, 15), t = Math.random().toString(36).substring(2, 15);
  return `${e.toString(36)}-${n}-${t}`;
}
const On = K([]), nc = 6;
function ms() {
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
      id: tc(),
      message: Mi(Vi(t)),
      additional: i.length > 5 ? i.slice(0, 5).map((f) => Mi(Vi(f))).join("<br>") + "<br>..." : i.slice(0, 5).map((f) => Mi(Vi(f))).join("<br>"),
      type: a,
      persistent: s.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: u
    }, c = s.maxNotices ?? nc;
    if (On.value.length >= c) {
      const f = On.value.findIndex((h) => !h.persistent);
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
const gs = Kn("cle-extras-config", {}), Yi = (e, n) => {
  gs.value[e] = n;
}, fn = (e) => gs.value[e] || null, ac = () => gs.value;
let po = !1;
const ic = () => {
  po || (Nr({
    getExtrasConfig: fn,
    getAllExtrasConfigs: ac,
    setExtrasConfig: Yi
  }), po = !0);
}, sc = (e, n) => {
  const t = fn(e);
  if (!t || !t.options || t.options.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const a = t.options[0], i = Array.isArray(a) && typeof a[0] == "string" ? a : [];
  if (i.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const s = (c) => t.options.length > 1 ? c.includes("|") ? t.pricing && Object.keys(t.pricing).length > 0 ? Object.prototype.hasOwnProperty.call(t.pricing, c) ? !0 : Object.keys(t.pricing).some((C) => C.startsWith(c + "|") || C === c) : c.split("|").every((h, C) => {
    if (C >= t.options.length) return !1;
    const b = t.options[C];
    return Array.isArray(b) && typeof b[0] == "string" && b.includes(h);
  }) : t.options.some((f) => Array.isArray(f) && typeof f[0] == "string" && f.includes(c)) : i.includes(c), u = /* @__PURE__ */ new Set();
  let r = 0;
  return n.forEach((c) => {
    if (!c.extras?.[e]) return;
    const f = c.extras[e].sides || {};
    Object.entries(f).forEach(([C, b]) => {
      typeof b == "string" && b && !s(b) && (u.add(b), f[C] = "", r++);
    });
    const h = c.extras[e].faces || {};
    Object.entries(h).forEach(([C, b]) => {
      typeof b == "string" && b && !s(b) && (u.add(b), h[C] = "", r++);
    });
  }), {
    cleanedCount: r,
    invalidOptions: Array.from(u)
  };
}, oc = (e) => {
  const {
    customNames: n,
    usedNames: t,
    allowCustomNames: a,
    getSelectOptions: i,
    onCustomNameAdded: s,
    onCustomNameDeleted: u
  } = e, r = K(""), c = A(() => a && r.value?.trim()), f = A(() => !a || !n.value || n.value.length === 0 || n.value.length === 1 && n.value[0] === !0 ? !0 : n.value.filter((M) => typeof M == "string").every((M) => t.value.includes(M))), h = A(() => {
    const v = [];
    if (a && n.value && n.value.length > 0) {
      if (n.value.length === 1 && n.value[0] === !0)
        return v;
      const U = [...n.value.filter((_) => typeof _ == "string")].sort(), de = new Set(t.value ?? []), z = U.filter((_) => !de.has(_));
      v.push({
        id: "delete-header",
        type: "group",
        label: "Delete Type"
      }), z.length > 1 && v.push({
        id: "delete-all-custom-names",
        label: "Delete all",
        icon: ["fass", "trash"],
        class: "del"
      }), U.forEach((_) => {
        const me = de.has(_);
        v.push({
          id: `delete-${_}`,
          label: me ? `"${_}" (in use)` : `Delete "${_}"`,
          icon: ["fass", "trash"],
          class: "del",
          disabled: me
        });
      });
    }
    return v;
  }), C = () => {
    const v = r.value?.trim();
    if (!v) return;
    if (i("", 0).map((U) => U.value).includes(v)) {
      r.value = "";
      return;
    }
    s(v), r.value = "";
  }, b = (v) => {
    const M = v.item || v;
    if (M.id === "delete-all-custom-names") {
      n.value.filter((U) => typeof U == "string").filter((U) => !(t.value?.includes(U) ?? !1)).forEach((U) => u(U));
      return;
    }
    if (M.id?.startsWith("delete-")) {
      const U = M.id.replace("delete-", "");
      if (t.value?.includes(U)) {
        console.warn(`Cannot delete ${e.extraType} type "${U}" - it is currently in use`);
        return;
      }
      u(U);
    }
  };
  return {
    newCustomName: r,
    canAddCustomName: Kt(c),
    isActionMenuDisabled: Kt(f),
    customNameActions: h,
    handleAddCustomName: C,
    handleCustomNameAction: b
  };
}, lc = (e) => {
  const {
    extraType: n,
    labels: t,
    shapeIndex: a,
    enablePricing: i,
    shouldShowAll: s,
    locations: u,
    locationGroups: r = K([]),
    shape: c = K(null),
    orientationModel: f = 0,
    getInputType: h,
    getInputConfig: C,
    getAllInputConfig: b,
    getInputConfigForLocation: v,
    canDelete: M,
    getLocationLabel: U,
    shouldShowDeleteButton: de
  } = e, z = A(() => {
    const ie = [], le = r.value && r.value.length > 0, j = /* @__PURE__ */ new Set();
    if (le && r.value.forEach((R) => {
      R.hideIndividualLocations && R.locations.forEach((re) => j.add(re));
    }), le && r.value.forEach((R) => ie.push(R.id)), !le && s.value && ie.push("all"), u.value && u.value.length > 0)
      ie.push(...u.value.filter((R) => R !== "all" && !j.has(R)));
    else {
      const R = la(n), re = Ro(n), se = Vo(n), oe = qo(n);
      !le && (re && se && oe) && ($r(n).length > 0 && ie.push("faces"), Mr(n).length > 0 && ie.push("sides")), ie.push(...R.filter((et) => !j.has(et)));
    }
    let P = Array.from(new Set(ie));
    if ((f === 1 || f === 2) && c.value && c.value.w > c.value.l) {
      const R = ["side.l1", "side.l2", "side.w1", "side.w2"], re = P.map((se, oe) => ({ loc: se, i: oe })).filter((se) => R.includes(se.loc));
      if (re.length > 0) {
        const se = re[0].i, oe = re.filter((Pe) => Pe.loc.includes(".w")).sort((Pe, Fe) => Pe.loc.localeCompare(Fe.loc)), Ke = re.filter((Pe) => Pe.loc.includes(".l")).sort((Pe, Fe) => Pe.loc.localeCompare(Fe.loc)), et = [...oe.map((Pe) => Pe.loc), ...Ke.map((Pe) => Pe.loc)];
        P = P.filter((Pe) => !R.includes(Pe)), P.splice(se, 0, ...et);
      }
    }
    return P;
  }), _ = A(() => `1fr${i ? " max-content" : ""}`), me = (ie, le) => `${n}-${ie}-${t[le]}-${le}-${a}`, ge = (ie) => {
    const le = U(ie);
    return `Delete ${n} for ${le}`;
  }, w = (ie) => ({
    show: de(ie),
    enabled: M(ie),
    ariaLabel: ge(ie)
  }), D = (ie, le) => h(ie, le);
  return {
    renderLocations: Kt(z),
    gridStyle: Kt(_),
    getInputId: me,
    getDeleteAriaLabel: ge,
    getInputConfigForLocation: v,
    getDeleteConfig: w,
    getInputTypeForLocation: D,
    // Re-export the passed functions for consistency
    getInputType: h,
    getInputConfig: C,
    getAllInputConfig: b,
    canDelete: M,
    shouldShowDeleteButton: de,
    getLocationLabel: U
  };
}, mo = /* @__PURE__ */ new Set(), rc = (e) => {
  ic();
  const {
    shape: n,
    extraType: t,
    allOptions: a,
    labels: i,
    userFriendlyFieldMap: s,
    allowCustomNames: u,
    customNames: r = K([]),
    enablePricing: c = !1,
    pricing: f,
    displayNames: h,
    locations: C = K([]),
    locationGroups: b = K([]),
    orientationModel: v = 0,
    getAvailablePricingOptions: M,
    getPrice: U,
    findExtrasPrice: de,
    formatPrice: z
  } = e, _ = A(() => Zs(a) ? a.value : a), me = A(() => Zs(h) ? h.value : h), ge = () => {
    const g = fn(t), L = _.value?.length ? _.value : g?.options || [], H = g?.labels || i;
    Tn(n.value, t, L, H, r.value);
  };
  ge(), Je(
    () => n.value?.extras?.[t],
    (g) => {
      if (g) {
        const L = g?.sides || {}, H = g?.options?.sides || {};
        let Q = !1;
        for (const [V, X] of Object.entries(L))
          if (typeof X == "string" && X !== "" && !H[V]) {
            Q = !0;
            break;
          }
        Q && ge();
      }
    },
    { immediate: !1 }
  );
  const w = A(() => fn(t)), D = A(() => {
    const g = _.value?.length ? _.value : w.value?.options || [];
    if (g.length > 1)
      return "multiple";
    const H = (g[0] || []).filter((ve) => typeof ve == "string"), Q = (r.value || []).filter((ve) => typeof ve == "string"), X = Array.from(/* @__PURE__ */ new Set([...H, ...Q])).length;
    return X === 0 ? "boolean" : X === 1 ? "single" : "multiple";
  }), ie = A(() => la(t)), le = A(() => C.value && C.value.length > 0 ? C.value.filter((g) => g !== "all" && g !== "faces" && g !== "sides") : ie.value), j = A(() => le.value.filter((g) => Ca(g) === "face")), P = A(() => le.value.filter((g) => Ca(g) === "side")), R = A(() => Vo(t)), re = A(() => qo(t)), se = A(() => Ro(t)), oe = () => {
    const g = _.value?.length ? _.value : w.value?.options;
    return !!g && g.length > 1;
  }, Ke = (g, L, H) => {
    const { singleOption: Q = he(), operation: V } = H;
    switch (L) {
      case "boolean":
        return !!g;
      case "single":
        return Q ? V === "process" || V === "set" ? g && Q ? Q : "" : g === Q ? Q : "" : !!g;
      case "multiple":
        return g || "";
      default:
        return g;
    }
  }, et = (g, L, H) => Ke(L, H, { operation: "process" }), Pe = (g, L, H, Q, V, X) => {
    switch (X) {
      case "boolean":
        Ba(g, L, H, Q, !!V);
        break;
      case "single": {
        const ve = he();
        Ba(g, L, H, Q, V ? ve : "");
        break;
      }
      case "multiple":
        Ba(g, L, H, Q, V || "");
        break;
    }
  }, Fe = (g, L, H = {}) => {
    const Q = H.singleOption || he();
    return H.allowCustomNames, Ke(g, L, {
      operation: "get",
      singleOption: Q
    });
  }, Re = (g, L, H, Q) => {
    switch (Q) {
      case "boolean":
        return !!g;
      case "single": {
        const V = he();
        if (V) {
          const X = L.map((Be) => Ln(n.value, t, Be, H)), ve = X.every((Be) => Be === V || Be === !0), Oe = X.every((Be) => !Be || Be === "");
          return ve ? V : Oe ? "" : null;
        }
        return !!g;
      }
      case "multiple":
        return typeof g == "string" ? g : g || "";
      default:
        return g;
    }
  }, W = (g, L, H, Q = !1) => {
    if (Q)
      g.forEach((V) => te(V, L, H));
    else {
      const V = i[L] || "", X = et(V, H, D.value);
      g.forEach((ve) => {
        Pe(n.value, t, ve, V, X, D.value);
      });
    }
  }, J = (g, L) => {
    if (oe()) {
      const H = i[L] || "", Q = g.map((Oe) => {
        const Be = Ln(n.value, t, Oe, H);
        return Be === !0 ? I(L)[0] || "" : String(Be || "");
      }), V = Q[0] || "";
      return Q.every((Oe) => Oe === V) ? V : null;
    } else {
      const H = i[L] || "";
      if (D.value === "single") {
        const V = he();
        if (V) {
          const X = g.map((Be) => Ln(n.value, t, Be, H)), ve = X.every((Be) => Be === V || Be === !0), Oe = X.every((Be) => !Be || Be === "");
          return ve ? V : Oe ? "" : null;
        }
      }
      const Q = Js(n.value, t, g, H, D.value);
      return D.value === "multiple" && Q === !1 && g.every((X) => {
        const ve = Ln(n.value, t, X, H, D.value);
        return ve === "" || ve === !1 || ve === null || ve === void 0;
      }) ? "" : Q;
    }
  }, ye = (g) => {
    const { location: L, locationType: H = "single", optionIndex: Q, stateValue: V, isAggregate: X = !1 } = g, ve = I(Q), Oe = X && L !== void 0 && Dt(L), Be = Oe && ve.some((Ge) => typeof Ge == "string" && Ge.endsWith(`|${L}`)), gt = Oe && (ve.length <= 1 || Be), Ce = X ? Pt(Q, L && Dt(L) ? L : H) : Pt(Q, L), je = c && ve.length > 1 && Ce.length === 0, Ue = (() => {
      if (!je || Q === 0 || !L) return !1;
      for (let Ge = 0; Ge < Q; Ge++) {
        let $t = null;
        if (Oe && typeof L == "string" ? $t = mt(L, Ge) : X ? L === "all" ? $t = kt(Ge) : L === "faces" ? $t = Le(Ge) : L === "sides" && ($t = He(Ge)) : $t = ke(L, Ge), !$t) return !0;
      }
      return !1;
    })(), Ft = !gt && ve.length > 1 ? "select" : "checkbox";
    if (je && L && !Ue) {
      const Ge = `${t}:${L}:${Q}`;
      mo.has(Ge) || (mo.add(Ge), ms().addNotice({
        type: "warning",
        message: `No price set for ${t} at ${L}. This option is not currently available.`
      }));
    }
    const ze = D.value === "multiple" && Ce.length === 1 && c && Q > 0;
    if (ze && Ce[0]) {
      if (X) {
        let Ge = [];
        H === "all" ? Ge = le.value : H === "faces" ? Ge = j.value : H === "sides" ? Ge = P.value : L && Dt(L) && (Ge = ft(L)), Ge.forEach(($t) => {
          const Aa = ke($t, Q);
          (!Aa || Aa !== Ce[0]) && te($t, Q, Ce[0]);
        });
      } else if (L) {
        const Ge = ke(L, Q);
        (!Ge || Ge !== Ce[0]) && te(L, Q, Ce[0]);
      }
    }
    let Nt = !1;
    const en = fn(t);
    if (en?.optionLocations && L && L !== "all" && Ft === "checkbox" && ve.length === 1) {
      const Ge = en.optionLocations[ve[0]];
      Ge && !Ge.includes(L) && (Nt = !0);
    }
    const Qn = je || D.value === "multiple" && (Ce.length === 0 || ze), Pn = V !== void 0 ? V : L ? ke(L, Q) : null, pi = Ft === "select" ? bn(L || H, Q) : void 0, Rn = (Ge) => (me.value ?? w.value?.displayNames)?.[Ge] || Ge, Ta = Ft === "checkbox" ? gt ? g.customLabel : ve.length === 1 ? Rn(ve[0]) : void 0 : void 0;
    let Vn, qn;
    if (Ft === "checkbox")
      if (gt && ve.length > 1) {
        const Ge = ve.find(($t) => $t.endsWith(`|${L}`));
        Ge && (Vn = Ge, qn = "");
      } else ve.length === 1 && (Vn = ve[0], qn = "");
    return {
      inputType: Ft,
      // Alias for backward compatibility
      type: Ft,
      value: Pn,
      options: pi,
      disabled: Qn,
      hidden: Nt,
      label: Ta,
      indeterminate: Pn === null && Ft === "checkbox",
      trueValue: Vn,
      falseValue: qn
    };
  }, qe = (g, L, H) => ye({
    locationType: g,
    optionIndex: L,
    stateValue: H,
    isAggregate: !0
  }), te = (g, L, H) => {
    const Q = i[L] || "";
    if (oe()) {
      const V = hn(g, L);
      let X;
      if (V === "checkbox") {
        const Oe = I(L)[0];
        X = H ? Oe : "";
      } else
        X = H || "";
      Ba(n.value, t, g, Q, X);
    } else
      Pe(n.value, t, g, Q, H, D.value);
  }, ke = (g, L) => {
    const H = i[L] || "";
    if (oe()) {
      const Q = Ln(n.value, t, g, H);
      if (hn(g, L) === "checkbox") {
        const ve = I(L)[0];
        return Q === !0 || Q === ve ? ve : "";
      } else
        return Q || "";
    } else {
      const Q = Ln(n.value, t, g, H, D.value);
      return Fe(Q, D.value);
    }
  }, Ve = (g, L) => {
    W(le.value, g, L, oe());
  }, kt = (g) => {
    if (oe()) {
      const L = i[g] || "", H = le.value.map((X) => {
        const ve = Ln(n.value, t, X, L);
        return ve === !0 ? I(g)[0] || "" : String(ve || "");
      }), Q = H[0] || "";
      return H.every((X) => X === Q) ? Q : null;
    } else {
      const L = i[g] || "", H = Js(n.value, t, le.value, L, D.value);
      return Re(H, le.value, L, D.value);
    }
  }, ct = () => {
    Li(n.value, t, le.value, D.value), nt(n);
  }, Yt = (g) => g === "faces" ? {
    locations: j.value,
    isSupported: R.value
  } : {
    locations: P.value,
    isSupported: re.value
  }, lt = (g, L, H) => {
    const { locations: Q, isSupported: V } = Yt(g);
    V && W(Q, L, H, oe());
  }, ln = (g, L) => {
    const { locations: H, isSupported: Q } = Yt(g);
    return Q ? J(H, L) : null;
  }, Xt = (g) => {
    const { locations: L, isSupported: H } = Yt(g);
    H && (Li(n.value, t, L, D.value), nt(n));
  }, xn = (g, L) => {
    const { isSupported: H } = Yt(g);
    if (!H) return { type: "checkbox", value: !1 };
    const Q = ln(g, L);
    return qe(g, L, Q);
  }, dt = (g, L) => {
    lt("faces", g, L);
  }, Y = (g, L) => {
    lt("sides", g, L);
  }, Le = (g) => ln("faces", g), He = (g) => ln("sides", g), Ee = () => {
    Xt("faces");
  }, it = () => {
    Xt("sides");
  }, tt = (g) => b.value.find((L) => L.id === g), ft = (g) => {
    const L = tt(g);
    return L ? L.locations.filter((H) => le.value.includes(H)) : [];
  }, pt = (g, L, H) => {
    const Q = ft(g);
    Q.length !== 0 && (Q.forEach((V) => te(V, L, H)), nt(n));
  }, mt = (g, L) => {
    const H = ft(g);
    if (H.length === 0) return null;
    if (!oe()) {
      const X = I(L).find((ve) => ve.endsWith(`|${g}`));
      if (X) {
        const ve = i[L] || "", Oe = H.map((Ce) => Ln(n.value, t, Ce, ve)), Be = Oe.every((Ce) => Ce === X), gt = Oe.some((Ce) => Ce === X);
        return Be ? X : gt ? null : "";
      }
    }
    const Q = J(H, L);
    return !oe() && (Q === null || Q === !1 || Q === "") ? "" : Q;
  }, mn = (g) => {
    const L = ft(g);
    L.length !== 0 && (Li(n.value, t, L, D.value), nt(n));
  }, st = (g, L) => {
    const H = mt(g, L), Q = tt(g);
    return ye({
      location: g,
      optionIndex: L,
      stateValue: H,
      isAggregate: !0,
      customLabel: Q?.label
    });
  }, rn = (g) => {
    qr(n.value, t, g, D.value), nt(n);
  }, gn = (g) => g === "all" ? le.value.some((L) => !!ke(L, 0)) : g === "faces" && R.value ? j.value.some((L) => !!ke(L, 0)) : g === "sides" && re.value ? P.value.some((L) => !!ke(L, 0)) : Dt(g) ? ft(g).some((H) => !!ke(H, 0)) : le.value.includes(g) ? !!ke(g, 0) : !1, xt = (g) => {
    if (g === "all") return Te("general.all");
    if (g === "faces") return `${Te("general.all")} ${Te("machining.face_other")}`;
    if (g === "sides") return `${Te("general.all")} ${Te("woodwork.edge_other")}`;
    if (Dt(g)) {
      const Q = tt(g);
      if (Q) return Q.label;
    }
    if (g.startsWith("face.")) {
      const V = `faces.${g.replace("face.", "")}`;
      return Te(V);
    }
    if (g.startsWith("side.")) {
      const Q = !!(n.value && n.value.w > n.value.l);
      return Te(Vr(g, v, Q));
    }
    const L = `fields.${g}`, H = Te(L);
    return H !== L ? H : s?.[g] ? s[g] : g;
  }, hn = (g, L) => D.value === "boolean" ? "checkbox" : I(L).length > 1 ? "select" : "checkbox", $n = (g, L) => ye({
    location: g,
    optionIndex: L,
    isAggregate: !1
  }), Mn = (g) => {
    const L = kt(g);
    return qe("all", g, L);
  }, vn = (g) => xn("faces", g), wt = (g) => xn("sides", g), At = (g, L) => g === "all" ? Mn(L) : g === "faces" ? vn(L) : g === "sides" ? wt(L) : Dt(g) ? st(g, L) : $n(g, L), Pt = (g, L) => {
    const H = fn(t), V = (_.value?.length ? _.value : H?.options || [])[g];
    if (!V || V[0] === !0)
      return [];
    const X = L && typeof L == "string" && (L.startsWith("face.") || L.startsWith("side.")), ve = L && typeof L == "string" && Dt(L), Oe = !X && (L === "all" || L === "faces" || L === "sides" || ve);
    if (Array.isArray(V) && V.length === 1 && typeof V[0] == "string" && !(c && M && (X || Oe) && g > 0))
      return V;
    if (c && M && X) {
      const Ce = [];
      if (g > 0)
        for (let je = 0; je < g; je++) {
          const Ue = ke(L, je);
          if (typeof Ue == "string" && Ue)
            Ce.push(Ue);
          else if (typeof Ue == "boolean")
            Ce.push(Ue);
          else {
            const Ft = fn(t), ze = zi(n.value, t, L);
            return ze && typeof ze == "object" && !Array.isArray(ze) && Object.keys(ze).length > 1 && Ft?.options[g] ? Ft.options[g] : [];
          }
        }
      return M(f, Ce, g);
    }
    if (c && M && Oe) {
      const Ce = [];
      if (g > 0)
        for (let je = 0; je < g; je++) {
          let Ue;
          if (L === "all" ? Ue = kt(je) : L === "faces" ? Ue = Le(je) : L === "sides" ? Ue = He(je) : ve && typeof L == "string" && (Ue = mt(L, je)), typeof Ue == "string" && Ue)
            Ce.push(Ue);
          else if (typeof Ue == "boolean")
            Ce.push(Ue);
          else
            return [];
        }
      return M(f, Ce, g);
    }
    const Be = V, gt = u ? (r.value || []).filter((Ce) => typeof Ce == "string") : [];
    return [.../* @__PURE__ */ new Set([...Be, ...gt])];
  }, bn = (g, L) => {
    const H = fn(t), V = (_.value?.length ? _.value : H?.options)?.[L] || [], X = u && r.value ? r.value.filter((ze) => typeof ze == "string") : [];
    let ve = [.../* @__PURE__ */ new Set([...V, ...X])];
    H?.optionLocations && g && g !== "all" && (ve = ve.filter((ze) => {
      const Nt = H.optionLocations[ze];
      return Nt ? Nt.includes(g) : !0;
    }));
    const Oe = Pt(L, g), Be = new Set(Oe), gt = me.value ?? H?.displayNames, je = typeof g == "string" && (g.startsWith("face.") || g.startsWith("side.")) ? ke(g, L) : null, Ue = typeof je == "string" ? je : null;
    return ve.filter((ze) => Be.has(ze) || ze === Ue).map((ze) => ({
      value: ze,
      label: gt?.[ze] || ze,
      disabled: !Be.has(ze)
    }));
  }, he = () => {
    const g = Pt(0);
    return g.length === 1 ? g[0] : void 0;
  }, _e = (g) => {
    const L = Pt(g);
    return L.length === 1 ? L[0] : void 0;
  }, I = (g) => {
    const L = fn(t), H = _.value?.length ? _.value : L?.options;
    let Q = [];
    if (H && H[g] && Array.isArray(H[g])) {
      const X = H[g];
      Array.isArray(X) && X.every((ve) => typeof ve == "string") && (Q = X);
    }
    const V = u && r.value ? r.value.filter((X) => typeof X == "string") : [];
    return [.../* @__PURE__ */ new Set([...Q, ...V])];
  }, S = (g, L = 0) => {
    if (g === "all" || g === "faces" || g === "sides")
      return "";
    if (Dt(g)) {
      const Q = tt(g);
      return Q?.price !== void 0 && mt(g, L) ? z ? z(Q.price) : Q.price.toString() : "";
    }
    if (!c || !U)
      return "";
    if (!le.value.includes(g))
      return "N/A";
    const H = U(n.value, t, g, de);
    return H ? z ? z(H) : H.toString() : "N/A";
  }, y = (g) => {
    if (!c || !U) return !1;
    if (typeof g == "string" && Dt(g)) {
      const L = tt(g);
      return typeof L?.price == "number" ? L.price : !1;
    }
    return U(n.value, t, g, de);
  }, E = A(() => le.value.length > 1), B = A(() => ie.value.length > 1), fe = () => D.value === "multiple", Ie = () => {
    const g = 1 + _.value.length, L = D.value === "multiple", H = c, Q = g + (L ? 1 : 0) + (H ? 1 : 0);
    return {
      columns: Q,
      style: `repeat(${Q}, max-content)`
    };
  }, Ne = (g) => g === "all" ? "all" : g === "faces" ? "faces" : g === "sides" ? "sides" : "individual", Ae = (g) => Ca(g), We = (g) => {
    if (g === "all")
      return E.value;
    if (Dt(g))
      return tt(g) ? ft(g).length > 0 : !1;
    if (C.value && C.value.length > 0)
      return C.value.includes(g);
    const L = Ne(g);
    return L === "all" ? E.value : L === "faces" || L === "sides" ? L === "faces" && R.value && j.value.length > 0 || L === "sides" && re.value && P.value.length > 0 ? B.value : !1 : ie.value.includes(g);
  }, Et = (g) => {
    Rr(g, t, r);
  }, un = (g) => {
    _r([n.value], t, g, i);
  }, fa = (g) => {
    Dr([n.value], t, g);
  }, pa = (g, L, H) => {
    if (g === "all")
      Ve(L, H);
    else if (g === "faces")
      dt(L, H);
    else if (g === "sides")
      Y(L, H);
    else if (Dt(g)) {
      let V = H;
      if (!oe() && typeof H == "boolean") {
        const X = I(L), ve = X.find((Oe) => Oe.endsWith(`|${g}`));
        ve ? V = H ? ve : "" : X.length === 1 && (V = H ? X[0] : "");
      }
      if (!oe() && V) {
        const X = ft(g), ve = new Set(X);
        b.value && (b.value.forEach((Oe) => {
          Oe.id !== g && ft(Oe.id).filter((Ce) => !ve.has(Ce)).forEach((Ce) => {
            te(Ce, L, "");
          });
        }), nt(n));
      }
      pt(g, L, V);
    } else
      te(g, L, H), oe() || nt(n);
    const Q = i.length;
    for (let V = L + 1; V < Q; V++) {
      let X;
      if (g === "all" ? X = kt(V) : g === "faces" ? X = Le(V) : g === "sides" ? X = He(V) : Dt(g) ? X = mt(g, V) : X = ke(g, V), !X)
        continue;
      const ve = Pt(V, g);
      let Oe = !1;
      if (typeof X == "string" ? Oe = ve.includes(X) : typeof X == "boolean" && X === !0 && (Oe = ve.length > 0), !Oe) {
        const Be = hn(g, V) === "checkbox" ? !1 : "";
        g === "all" ? Ve(V, Be) : g === "faces" ? dt(V, Be) : g === "sides" ? Y(V, Be) : Dt(g) ? pt(g, V, Be) : te(g, V, Be);
      }
    }
  }, Dn = (g, L = !0) => L && !confirm(`Delete ${t} for ${xt(g)}?`) ? !1 : (g === "all" ? ct() : g === "faces" ? Ee() : g === "sides" ? it() : Dt(g) ? mn(g) : rn(g), !0), ma = () => {
    const g = n.value[t], L = n.value[`${t}Options`];
    return !(!g || typeof g != "object" || !L || typeof L != "object" || R.value && (!("faces" in g) || !("faces" in L)) || re.value && (!("sides" in g) || !("sides" in L)));
  }, _n = () => {
    const g = [], L = n.value[t], H = n.value[`${t}Options`];
    return !L || typeof L != "object" ? g.push(`Missing or invalid ${t} property in shape`) : (R.value && !("faces" in L) && g.push(`Missing faces property in ${t}`), re.value && !("sides" in L) && g.push(`Missing sides property in ${t}`)), !H || typeof H != "object" ? g.push(`Missing or invalid ${t}Options property in shape`) : (R.value && !("faces" in H) && g.push(`Missing faces property in ${t}Options`), re.value && !("sides" in H) && g.push(`Missing sides property in ${t}Options`)), g;
  };
  return {
    // State - provide raw computed refs for other composables
    mode: D,
    // Raw computed ref (not readonly wrapped)
    allLocations: Kt(le),
    faceLocations: Kt(j),
    sideLocations: Kt(P),
    shouldShowAll: E,
    // Raw computed ref (not readonly wrapped)
    shouldShowGroupControls: Kt(B),
    // Support flags
    supportsFaces: Kt(R),
    supportsSides: Kt(re),
    supportsBoth: Kt(se),
    // Core operations
    setValue: te,
    getValue: ke,
    setAll: Ve,
    getAll: kt,
    getAllState: kt,
    // Alias for backward compatibility
    deleteSingle: rn,
    deleteAll: ct,
    canDelete: gn,
    // Group-specific operations
    setAllFaces: dt,
    setAllSides: Y,
    getAllFaces: Le,
    getAllSides: He,
    deleteAllFaces: Ee,
    deleteAllSides: it,
    // UI helpers
    getLocationLabel: xt,
    getInputType: hn,
    getInputConfig: $n,
    getAllInputConfig: Mn,
    getAllFacesInputConfig: vn,
    getAllSidesInputConfig: wt,
    getInputConfigForLocation: At,
    getSelectOptions: bn,
    getSingleOptionLabel: _e,
    // Pricing
    getPriceDisplay: S,
    getCalculatedPrice: y,
    // Layout & rendering
    shouldShowDeleteButton: fe,
    getGridConfig: Ie,
    getLocationGroup: Ne,
    getLocationScope: Ae,
    isLocationVisible: We,
    // Options management
    getAvailableOptions: Pt,
    getSingleAvailableOption: he,
    // Initialization & migration
    initialize: ge,
    initializeExtra: ge,
    // Alias for backward compatibility
    initializeCustomNames: Et,
    migrateToSingle: un,
    migrateToBoolean: fa,
    // Event handlers
    handleInputChange: pa,
    handleDelete: Dn,
    // Validation
    validateShape: ma,
    getValidationErrors: _n,
    // Debug helpers (development only)
    getDebugInfo: (g, L) => ({
      mode: D.value,
      location: g,
      optionIndex: L,
      value: le.value.includes(g) ? ke(g, L) : "N/A",
      inputType: hn(g, L),
      canDelete: gn(g),
      allState: kt(L),
      availableOptions: Pt(L),
      locationGroup: Ne(g),
      config: w.value,
      supportsFaces: R.value,
      supportsSides: re.value,
      supportsBoth: se.value,
      ...R.value && {
        allFacesState: Le(L)
      },
      ...re.value && {
        allSidesState: He(L)
      },
      ...le.value.includes(g) && {
        locationScope: Ae(g)
      }
    })
  };
};
function Xi(e) {
  return e.reduce((n, t) => {
    if (!t || t.multiEdit) return n;
    const a = Number(t.q);
    return !a || a <= 0 ? n : n + a;
  }, 0);
}
function es(e) {
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
function go(e) {
  return e.map((n) => {
    const t = n.path.length > 0 ? n.path.join(".") : "root", a = es(n), i = Qa(n.message, a);
    return `[${t}] ${i}`;
  });
}
function Sa(e, n) {
  const t = e.safeParse(n);
  return {
    success: t.success,
    data: t.success ? t.data : void 0,
    errors: t.success ? void 0 : t.error.issues
  };
}
function uc(e = {}) {
  try {
    let n = function(I) {
      if (!I || typeof I != "object") return I;
      const S = { ...I };
      if (delete S.issues, delete S.warnings, S.trim && typeof S.trim == "object") {
        const y = S.trim;
        ("x1" in y || "x2" in y || "y1" in y || "y2" in y) && (S.trim = {
          l1: y.y1 ?? y.l1 ?? 0,
          l2: y.y2 ?? y.l2 ?? 0,
          w1: y.x1 ?? y.w1 ?? 0,
          w2: y.x2 ?? y.w2 ?? 0
        });
      }
      if (S.extras?.banding?.sides && typeof S.extras.banding.sides == "object") {
        const y = S.extras.banding.sides;
        ("x1" in y || "x2" in y || "y1" in y || "y2" in y) && (S.extras.banding.sides = {
          l1: y.y1 ?? y.l1,
          l2: y.y2 ?? y.l2,
          w1: y.x1 ?? y.w1,
          w2: y.x2 ?? y.w2
        });
      }
      if (S.extras?.finish?.sides && typeof S.extras.finish.sides == "object") {
        const y = S.extras.finish.sides;
        ("x1" in y || "x2" in y || "y1" in y || "y2" in y) && (S.extras.finish.sides = {
          l1: y.y1 ?? y.l1,
          l2: y.y2 ?? y.l2,
          w1: y.x1 ?? y.w1,
          w2: y.x2 ?? y.w2
        });
      }
      if (S.extras?.planing?.sides && typeof S.extras.planing.sides == "object") {
        const y = S.extras.planing.sides;
        ("x1" in y || "x2" in y || "y1" in y || "y2" in y) && (S.extras.planing.sides = {
          l1: y.y1 ?? y.l1,
          l2: y.y2 ?? y.l2,
          w1: y.x1 ?? y.w1,
          w2: y.x2 ?? y.w2
        });
      }
      if (S.efficiencyOptions?.primaryCompression) {
        const y = S.efficiencyOptions.primaryCompression;
        y === "x" ? S.efficiencyOptions = {
          ...S.efficiencyOptions,
          primaryCompression: "l"
        } : y === "y" && (S.efficiencyOptions = {
          ...S.efficiencyOptions,
          primaryCompression: "w"
        });
      }
      for (const y in S)
        S[y] === null && delete S[y];
      return S;
    }, t = function(I, S) {
      if (!Array.isArray(I))
        return [];
      const y = [];
      for (let E = 0; E < I.length; E++) {
        const B = I[E], fe = n(B);
        try {
          const Ie = {
            ...fe,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored shapes as new to avoid showing validation errors immediately
          };
          B.autoId && (Ie.autoId = B.autoId), delete Ie.issues, delete Ie.warnings;
          const Ne = new Xn(Ie, S);
          y.push(Ne);
        } catch (Ie) {
          console.error(`Failed to create InputShape at index ${E}:`, Ie);
        }
      }
      return y;
    }, a = function(I, S) {
      if (!Array.isArray(I)) return [];
      const y = [];
      for (let E = 0; E < I.length; E++) {
        const B = I[E], fe = n(B);
        try {
          const Ie = {
            ...fe,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored stock as new to avoid showing validation errors immediately
          };
          B.autoId && (Ie.autoId = B.autoId);
          const Ne = new va(Ie, S);
          y.push(Ne);
        } catch (Ie) {
          console.error(`Failed to create InputStock at index ${E}:`, Ie);
        }
      }
      return y;
    }, i = function(I) {
      const S = n(I), y = Sa(Jn, S);
      if (y.success && y.data) {
        const E = {
          ...y.data,
          issues: [],
          warnings: []
        };
        return I?.autoId && (E.autoId = I.autoId), new kn(E);
      } else
        return console.error("Failed to parse input saw:", y.errors), new kn({});
    }, s = function(I, S) {
      return Array.isArray(I) ? S && S.length ? Xu(I, S) : I.map((y) => new _o(y)).filter(Boolean) : [];
    }, u = function(I = {}) {
      try {
        const E = { ...La(
          (fe) => {
            if (typeof fe != "object" || fe === null) return fe;
            const Ie = { ...fe };
            for (const Ne in Ie)
              Ie[Ne] === null && delete Ie[Ne];
            return Ie;
          },
          Zn
        ).parse(I), isNew: !0 }, B = new Xn(E, re);
        return B.createId(se.value.length), se.value.push(B), B;
      } catch (S) {
        return S instanceof Ua && (console.error("Shape validation failed:", S.issues), _("part", "Invalid shape data", S.issues)), null;
      }
    }, r = function(I = {}) {
      try {
        const y = { ...Nn.parse(I), isNew: !0 }, E = new va(y, re);
        return E.createId(oe.value.length), oe.value.push(E), E;
      } catch (S) {
        return S instanceof Ua && (console.error("Stock validation failed:", S.issues), _("stock", "Invalid stock data", S.issues)), null;
      }
    }, c = function(I) {
      try {
        const S = I.toData(), y = Zn.parse(S);
        return new Xn(y, re);
      } catch (S) {
        return S instanceof Ua && (console.error("Shape clone validation failed:", S.issues), _("part", "Invalid shape data during cloning", S.issues)), null;
      }
    }, f = function(I) {
      try {
        const S = I.toData(), y = Nn.parse(S);
        return new va(y, re);
      } catch (S) {
        return S instanceof Ua && (console.error("Stock clone validation failed:", S.issues), _("stock", "Invalid stock data during cloning", S.issues)), null;
      }
    }, h = function(I, S) {
      const y = se.value.findIndex((Ie) => Ie.autoId === I);
      if (y === -1) return !1;
      const E = se.value[y], B = { ...E.toData(), ...S }, fe = Sa(Zn, B);
      if (fe.success && fe.data) {
        if (E.update(fe.data), !E.isNew) {
          const Ie = Object.keys(S);
          E.validate({ fields: Ie, index: y });
        }
        return !0;
      } else {
        const Ie = fe.errors ? go(fe.errors) : [];
        console.error("Shape update validation failed:", Ie);
        const Ne = fe.errors || [], Ae = Object.keys(S);
        for (let We = E.issues.length - 1; We >= 0; We--)
          E.issues[We].field.some((Et) => Ae.includes(Et[0])) && E.issues.splice(We, 1);
        for (const We of Ne) {
          const Et = es(We), un = Array.isArray(We.path) ? We.path.map((fa) => String(fa)) : [];
          new St({
            item: E,
            category: ["part"],
            message: We.message,
            params: Et,
            field: un.length > 0 ? [un] : []
          });
        }
        return !1;
      }
    }, C = function(I, S) {
      const y = se.value.findIndex((B) => B.autoId === I);
      if (y === -1) return !1;
      const E = se.value[y];
      return E.validate({ fields: [S], index: y }), E.issues.length === 0;
    }, b = function(I, S) {
      const y = oe.value.find((fe) => fe.autoId === I);
      if (!y) return !1;
      const E = { ...y.toData(), ...S }, B = Sa(Nn, E);
      if (B.success && B.data)
        return y.update(B.data), y.isNew || z(), !0;
      {
        const fe = B.errors ? go(B.errors) : [];
        console.error("Stock update validation failed:", fe);
        const Ie = B.errors || [], Ne = Object.keys(S);
        for (let Ae = y.issues.length - 1; Ae >= 0; Ae--)
          y.issues[Ae].field.some((We) => Ne.includes(We[0])) && y.issues.splice(Ae, 1);
        for (const Ae of Ie) {
          const We = es(Ae), Et = Array.isArray(Ae.path) ? Ae.path.map((un) => String(un)) : [];
          new St({
            item: y,
            category: ["stock"],
            message: Ae.message,
            params: We,
            field: Et.length > 0 ? [Et] : []
          });
        }
        return nt(oe), !1;
      }
    }, v = function(I, S) {
      const y = oe.value.findIndex((B) => B.autoId === I);
      if (y === -1) return !1;
      const E = oe.value[y];
      return E.validate({ fields: [S], index: y }), nt(oe), E.issues.length === 0;
    }, M = function(I) {
      if (se.value.length === 1) return !1;
      const S = se.value.findIndex((y) => y.autoId === I);
      return S === -1 ? !1 : (se.value.splice(S, 1), !0);
    }, U = function(I) {
      if (oe.value.length === 1) return !1;
      const S = oe.value.findIndex((y) => y.autoId === I);
      return S === -1 ? !1 : (oe.value.splice(S, 1), !0);
    }, de = function(I) {
      W.value = !0;
      const S = [];
      try {
        se.value.forEach((E) => E.issues.length = 0);
        for (let E = 0; E < se.value.length; E++) {
          const B = se.value[E];
          if (B.isNew || B.multiEdit)
            continue;
          const fe = B.validate({
            inputStockList: oe.value,
            index: E,
            stockType: I?.stockType ?? null,
            partTrim: 0,
            useInventory: !1,
            saw: I
          });
          S.push(...fe);
        }
        se.value.some((E) => Number(E.q) > 0) || new St({
          category: ["part"],
          message: "errors.validation.no_parts",
          issues: S
        });
        const y = Number(I?.bladeWidth);
        if (Number.isFinite(y) && y > 0) {
          const E = se.value.filter((B) => !B.multiEdit).map((B) => Math.min(Number(B.l), Number(B.w))).filter((B) => Number.isFinite(B) && B > 0).sort((B, fe) => B - fe);
          if (E.length) {
            const B = E[Math.floor(E.length / 2)];
            y / B > 0.08 && new St({
              category: ["saw"],
              type: "warning",
              message: "errors.validation.blade_width_units",
              params: { blade: y },
              issues: S
            });
          }
        }
      } finally {
        W.value = !1;
      }
      return Re.value = S, S;
    }, z = function(I) {
      W.value = !0;
      const S = [];
      try {
        oe.value.forEach((y) => y.issues.length = 0);
        for (let y = 0; y < oe.value.length; y++) {
          const E = oe.value[y];
          if (E.multiEdit)
            continue;
          const B = E.validate({ saw: I }, y);
          S.push(...B);
        }
        oe.value.some((y) => Number(y.q) > 0 || y.autoAdd) || new St({
          category: ["stock"],
          message: "errors.validation.no_stock",
          issues: S
        });
      } finally {
        W.value = !1;
      }
      return Re.value = S, S;
    }, _ = function(I, S, y) {
      new St({
        category: [I],
        message: S,
        issues: Re.value
      }), y && console.log("Validation details:", y);
    }, me = function() {
      Re.value = [], se.value.forEach((I) => I.issues.length = 0), oe.value.forEach((I) => I.issues.length = 0);
    }, ge = function(I = {}) {
      const S = [], y = [], E = I.inputShapesOverride ?? se.value;
      if (!E.length)
        return { shapeList: [], issues: [] };
      for (let B = 0; B < E.length; B++) {
        const fe = E[B];
        if (!fe.q) continue;
        fe.createId(B), fe.applyPartTrim(I.trim, I.stockType);
        const Ie = fe.toShape();
        S.push(Ie), y.push(...Ie.issues);
      }
      return { shapeList: S, issues: y };
    }, w = function(I) {
      if (!oe.value.length)
        return { stockList: [], issues: [] };
      const S = [], y = [];
      for (let E = 0; E < oe.value.length; E++) {
        const B = oe.value[E];
        if (!B.q && !B.autoAdd) continue;
        B.createId(E), B.saw = I;
        const fe = B.toStock();
        S.push(fe), y.push(...fe.issues);
      }
      return { stockList: S, issues: y };
    }, D = function(I, S = re) {
      const y = {
        saw: { success: !1, failed: !1 },
        shapes: { success: 0, failed: 0 },
        stock: { success: 0, failed: 0 },
        groups: { success: 0, failed: 0 }
      };
      if (Fe.value = [], I.saw) {
        const E = Sa(Jn, n(I.saw));
        if (E.success && E.data) {
          const B = { ...E.data };
          I.saw?.autoId && (B.autoId = I.saw.autoId), Ke.value = new kn(B), y.saw.success = !0;
        } else
          console.error("Failed to parse input saw:", E.errors), y.saw.failed = !0;
      }
      if (I.shapes) {
        const E = t(I.shapes, S);
        y.shapes.success = E.length, y.shapes.failed = I.shapes.length - E.length, se.value = E, Re.value = Re.value.filter(
          (B) => !B.category.includes("part")
        );
      }
      if (I.stock) {
        const E = a(I.stock, S);
        y.stock.success = E.length, y.stock.failed = I.stock.length - E.length, oe.value = E, Re.value = Re.value.filter(
          (B) => !B.category.includes("stock")
        );
      }
      if (I.groups) {
        const E = s(I.groups);
        y.groups.success = E.length, y.groups.failed = I.groups.length - E.length, et.value = E;
      }
      return I.extrasOptions && (Pe.value = { ...I.extrasOptions }), I.materials && (Fe.value = I.materials.map((E) => ia.safeParse(E)).filter((E) => E.success).map((E) => E.data)), y;
    }, ie = function() {
      return {
        shapes: se.value.map((I) => I.toData()),
        stock: oe.value.map((I) => I.toData()),
        inputUserGroups: et.value.map((I) => I.toData()),
        extrasOptions: Pe.value,
        materials: Fe.value
      };
    }, le = function() {
      se.value = [], oe.value = [], et.value = [], me();
    }, j = function(I) {
      const S = { ...Ke.value.toData(), ...I }, y = Sa(Jn, S);
      return y.success && y.data ? (Ke.value.update(y.data), !0) : (console.error("InputSaw update validation failed:", y.errors), _("saw", "Invalid saw update", y.errors), !1);
    }, P = function() {
      Ke.value = new kn({});
    }, R = function() {
      const I = Ke.value.validate();
      return Re.value = [...Re.value.filter((S) => S.category?.[0] !== "saw"), ...I], I;
    };
    const { numberFormat: re = "decimal" } = e, se = Kn("inputs/inputShapes", [], {
      serializer: {
        read: (I) => {
          if (!I) return [];
          let S;
          try {
            S = JSON.parse(I);
          } catch (y) {
            return console.error("Failed to parse input shapes JSON:", y), [];
          }
          return t(S, re);
        },
        write: (I) => {
          const y = I.filter((B) => !B?.multiEdit).map((B) => B.toData());
          return JSON.stringify(y);
        }
      },
      listenToStorageChanges: !1
    }), oe = Kn("inputs/inputStock", [], {
      serializer: {
        read: (I) => {
          if (!I) return [];
          let S;
          try {
            S = JSON.parse(I);
          } catch (E) {
            return console.error("  Failed to parse stock JSON:", E), [];
          }
          return a(S, re);
        },
        write: (I) => {
          const y = I.filter((B) => !B?.multiEdit).map((B) => B.toData());
          return JSON.stringify(y);
        }
      },
      listenToStorageChanges: !1
    }), Ke = Kn("inputs/inputSaw", new kn({}), {
      serializer: {
        read: (I) => {
          if (!I) return new kn({});
          try {
            const S = JSON.parse(I);
            return i(S);
          } catch (S) {
            return console.error("  Failed to parse saw JSON:", S), new kn({});
          }
        },
        write: (I) => {
          if (!I)
            return JSON.stringify({});
          const S = I.toData();
          return JSON.stringify(S);
        }
      },
      listenToStorageChanges: !1
    }), et = Kn("inputs/inputUserGroups", [], {
      serializer: {
        read: (I) => s(I ? JSON.parse(I) : []),
        write: (I) => JSON.stringify(I.map((S) => S.toData()))
      }
    }), Pe = Kn("inputs/extrasOptions", {
      banding: { options: [] },
      finish: { options: [] },
      planing: { options: [] }
    }, {
      serializer: {
        read: (I) => {
          if (!I) return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          try {
            return JSON.parse(I);
          } catch {
            return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          }
        },
        write: (I) => JSON.stringify(I)
      }
    }), Fe = Kn("inputs/materials", [], {
      serializer: {
        read: (I) => {
          if (!I) return [];
          try {
            const S = JSON.parse(I);
            return Array.isArray(S) ? S.map((y) => ia.safeParse(y)).filter((y) => y.success).map((y) => y.data) : [];
          } catch (S) {
            return console.error("Failed to parse materials JSON:", S), [];
          }
        },
        write: (I) => JSON.stringify(I)
      },
      listenToStorageChanges: !1
    }), Re = K([]), W = K(!1);
    se.value.length === 0 && (se.value = [new Xn({ isNew: !0 })]), oe.value.length === 0 && (oe.value = [new va({ isNew: !0 })]);
    const J = A(() => Xi(se.value)), ye = A(() => Xi(oe.value)), qe = A(() => se.value.reduce((I, S) => S?.multiEdit ? I : I + 1, 0)), te = A(() => oe.value.reduce((I, S) => S?.multiEdit ? I : I + 1, 0)), ke = A(() => Re.value.length > 0), Ve = () => [
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
    ], kt = K(null), ct = K(null), Yt = () => {
      kt.value = null;
    }, lt = me, ln = (I = null) => {
      const S = (I?.inputShapesOverride ?? se.value).filter((E) => !E.multiEdit), y = de(I?.saw || void 0);
      if (S.length) {
        Br(S, oe.value, I?.saw || Ke.value);
        const E = S.flatMap((B) => B.issues);
        return [...y, ...E];
      }
      return y;
    }, Xt = async (I, S = "decimal") => {
      const y = I?.inputSaw, E = I?.inputShapes, B = I?.inputStock, fe = I?.inputUserGroups, Ie = D({
        saw: y,
        shapes: E,
        stock: B,
        groups: fe,
        materials: I?.materials
      }, S);
      return nt(se), nt(oe), await _t(), Ie;
    }, xn = (I, S = "decimal") => D({ shapes: I }, S).shapes.success > 0, dt = (I, S = "decimal") => D({ stock: I }, S).stock.success > 0, Y = (I, S, y, E, B) => {
      S[0]?.length > 0 && (Pe.value[I] || (Pe.value[I] = { options: [] }), Pe.value[I].options = [...S[0]]), y && E && S.length > 0 ? Yi(I, {
        options: S,
        // Use all columns extracted from pricing
        labels: y,
        pricing: E,
        displayNames: B
      }) : S.length > 0 && console.warn("[setExtrasOptionsFromPricing] Missing data for centralized config:", { labels: y, pricingData: E, pricingOptionsLength: S.length });
    }, Le = () => {
      if (!Object.values(Pe.value).some(
        (y) => y.options.length > 0
      )) return;
      const S = (y, E) => {
        const B = {};
        for (const fe of E)
          B[fe] = [...y];
        return B;
      };
      return {
        banding: Pe.value.banding.options.length > 0 ? {
          options: {
            sides: S(Pe.value.banding.options, ["l1", "l2", "w1", "w2"])
          }
        } : void 0,
        finish: Pe.value.finish.options.length > 0 ? {
          options: {
            faces: S(Pe.value.finish.options, ["a", "b"])
          }
        } : void 0,
        planing: Pe.value.planing.options.length > 0 ? {
          options: {
            sides: S(Pe.value.planing.options, ["l1", "l2", "w1", "w2"]),
            faces: S(Pe.value.planing.options, ["a", "b"])
          }
        } : void 0
      };
    }, He = (I) => {
      if (!oe.value.length) return "n";
      const S = I.material, y = I.t, E = oe.value.filter((Ne) => Ne.material === S && Ne.t === y);
      if (!E.length)
        return "n";
      let B = !1, fe = !1, Ie = !1;
      for (const Ne of E)
        Ne.grain === "l" ? (B = !0, fe = !0) : Ne.grain === "w" && (B = !0, Ie = !0);
      return B ? fe && Ie ? "y" : fe ? "l" : Ie ? "w" : "n" : "n";
    }, Ee = ({ stock: I = !0, shapes: S = !0 } = {}) => {
      I && (oe.value = [new va({ l: 2440, w: 1220, q: 1 })]), S && (se.value = [
        new Xn({ l: 500, w: 500, q: 1 }),
        new Xn({ l: 400, w: 400, q: 1 })
      ]);
    }, it = (I) => {
      for (const S of se.value)
        Qs(S, I);
      for (const S of oe.value)
        Qs(S, I);
    };
    let tt = !1;
    Je(se, (I) => {
      tt || !I.length || _t(() => {
        const S = ["banding", "finish", "planing"], y = [];
        S.forEach((E) => {
          const B = /* @__PURE__ */ new Set();
          if (I.forEach((fe) => {
            const Ie = fe.extras?.[E];
            Ie && (Ie.faces && Object.values(Ie.faces).forEach((Ne) => {
              typeof Ne == "string" && Ne.trim() && Ne !== "Y" && B.add(Ne);
            }), Ie.sides && Object.values(Ie.sides).forEach((Ne) => {
              typeof Ne == "string" && Ne.trim() && Ne !== "Y" && B.add(Ne);
            }));
          }), B.size > 0) {
            const fe = fn(E);
            if (fe) {
              const Ie = fe.options[0];
              if (Array.isArray(Ie) && (Ie.length === 0 || typeof Ie[0] == "string")) {
                const Ne = new Set(Ie), Ae = Array.from(B).filter((We) => !Ne.has(We));
                if (Ae.length > 0) {
                  const We = [...Ie, ...Ae];
                  Yi(E, {
                    ...fe,
                    options: [We, ...fe.options.slice(1)]
                  });
                }
              }
            }
          }
        }), S.forEach((E) => {
          const B = sc(E, I);
          B.cleanedCount > 0 && y.push(
            `${E}: ${B.invalidOptions.join(", ")}`
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
        }, 500)), tt = !0;
      });
    }, { immediate: !0 });
    const ft = 6, pt = (I) => (I ?? "").trim().toUpperCase(), mt = (I) => {
      const S = (I ?? "").trim(), y = S.match(/^ID:[0-9a-fA-F]+\s*:\s*(.+?)(?:\s*\|\s*([\d.]+))?\s*$/i);
      if (!y) return { name: S, thickness: null };
      const E = y[2] != null ? Number(y[2]) : null;
      return {
        name: y[1].trim() || S,
        thickness: E != null && Number.isFinite(E) && E > 0 ? E : null
      };
    }, mn = (I) => {
      if (I?.materialId)
        return Fe.value.find((S) => S.id === I.materialId);
    }, st = (I = {}) => {
      const S = ia.parse({
        id: Ys(),
        colorIndex: Fe.value.length % ft,
        ...I
      });
      return Fe.value = [...Fe.value, S], S;
    }, rn = (I, S) => {
      for (const y of [...oe.value, ...se.value]) {
        if (y.materialId !== I) continue;
        const E = y.t;
        if (E == null || E === "") continue;
        const B = ue({ v: E });
        B != null && S.some((fe) => ja.equalTo(fe, B)) && (y.t = null);
      }
    }, gn = (I, S) => {
      for (const y of oe.value)
        y.materialId === I && (y.grain = S);
    }, xt = (I, S) => {
      const y = Fe.value.findIndex((Ae) => Ae.id === I);
      if (y === -1) return;
      const E = Fe.value[y], B = ia.parse({ ...E, ...S, id: I }), fe = E.thicknesses.filter(
        (Ae) => !B.thicknesses.some((We) => ja.equalTo(We, Ae))
      ), Ie = E.grain !== B.grain, Ne = [...Fe.value];
      Ne[y] = B, Fe.value = Ne, fe.length && rn(I, fe), Ie && gn(I, B.grain), nt(oe), nt(se);
    }, hn = (I) => {
      Fe.value = Fe.value.filter((S) => S.id !== I);
      for (const S of [...oe.value, ...se.value])
        S.materialId === I && (S.materialId = void 0, S.material = "", S.t = null);
      nt(oe), nt(se);
    }, $n = (I, S, y = {}) => {
      const E = new Set(y.stock ?? []), B = new Set(y.shapes ?? []), fe = I ? Fe.value.find((Ae) => Ae.id === I) : void 0, Ie = (Ae) => {
        if (!fe) return null;
        if (S != null) return S;
        if (fe.thicknesses.length === 1) return fe.thicknesses[0];
        const We = Ae.t == null || Ae.t === "" ? null : ue({ v: Ae.t });
        return We != null && fe.thicknesses.some((Et) => ja.equalTo(Et, We)) ? We : null;
      }, Ne = (Ae, We) => {
        fe ? (Ae.materialId = fe.id, Ae.material = pt(fe.name), Ae.t = Ie(Ae), We && (Ae.grain = fe.grain), Ae.isNew = !1) : (Ae.materialId = void 0, Ae.material = "", Ae.t = null);
      };
      for (const Ae of oe.value) E.has(Ae.autoId) && Ne(Ae, !0);
      for (const Ae of se.value) B.has(Ae.autoId) && Ne(Ae, !1);
      nt(oe), nt(se);
    }, Mn = (I) => {
      const S = pt(I), y = Fe.value.find((B) => pt(B.name) === S);
      if (y) return y;
      const E = ia.parse({
        id: Ys(),
        name: S,
        colorIndex: Fe.value.length % ft
      });
      return Fe.value = [...Fe.value, E], E;
    }, vn = (I, S, y = !1) => {
      const E = y ? oe : se, B = E.value.find((fe) => fe.autoId === I);
      if (B) {
        if (!pt(S))
          B.materialId = void 0, B.material = "";
        else {
          const fe = Mn(S);
          B.materialId = fe.id, B.material = fe.name;
        }
        nt(E);
      }
    }, wt = () => {
      const I = [...oe.value, ...se.value].filter((E) => !E.multiEdit);
      let S = 0, y = 0;
      for (const E of I) {
        const B = mt(E.material), fe = pt(B.name);
        if (!fe) continue;
        const Ie = Fe.value.length, Ne = Mn(fe);
        Fe.value.length !== Ie && S++;
        const Ae = E.t, We = Ae == null || Ae === "" ? B.thickness : ue({ v: Ae });
        We != null && We > 0 && Number.isFinite(We) && !Ne.thicknesses.some((Et) => ja.equalTo(Et, We)) && (Ne.thicknesses = [...Ne.thicknesses, We].sort((Et, un) => Et - un)), E.materialId !== Ne.id && (E.materialId = Ne.id, y++), E.material = Ne.name;
      }
      return nt(Fe), nt(oe), nt(se), { created: S, mapped: y };
    };
    let At = !1;
    Je(
      [Fe, oe, se],
      () => {
        if (!At) {
          At = !0;
          try {
            const I = new Map(Fe.value.map((y) => [y.id, y]));
            let S = !1;
            for (const y of [...oe.value, ...se.value]) {
              if (!y.materialId) continue;
              const E = I.get(y.materialId);
              if (!E) {
                y.materialId = void 0, S = !0;
                continue;
              }
              const B = pt(E.name);
              y.material !== B && (y.material = B, S = !0);
            }
            S && (nt(oe), nt(se));
          } finally {
            At = !1;
          }
        }
      },
      { deep: !0 }
    ), Je(
      [oe, se],
      () => {
        if (At) return;
        [...oe.value, ...se.value].some(
          (S) => !S.multiEdit && pt(S.material) && !S.materialId
        ) && wt();
      },
      { deep: !0, immediate: !0 }
    );
    let Pt = null;
    return {
      // Bundled object
      inputs: {
        inputStock: oe,
        inputShapes: se,
        inputUserGroups: et,
        currentInputShape: kt,
        selectedSaw: ct,
        inputSaw: Ke,
        materials: Fe
      },
      // State
      inputShapes: se,
      inputStock: oe,
      inputUserGroups: et,
      inputSaw: Ke,
      currentInputShape: kt,
      selectedSaw: ct,
      validationIssues: Re,
      isValidating: W,
      // Computed
      totalInputShapes: J,
      totalInputStock: ye,
      totalInputShapeLines: qe,
      totalInputStockLines: te,
      hasValidationIssues: ke,
      // Actions
      addInputShape: u,
      addInputStock: r,
      cloneInputShape: c,
      cloneInputStock: f,
      updateInputShape: h,
      updateInputStock: b,
      updateInputSaw: j,
      removeInputShape: M,
      removeInputStock: U,
      reset: Yt,
      resetInputSaw: P,
      clear: le,
      clearIssues: lt,
      // Validation
      validateInputShapes: ln,
      validateInputShapeField: C,
      validateInputStock: z,
      validateInputStockField: v,
      validateInputSaw: R,
      clearValidationIssues: me,
      // Conversion
      createShapeList: ge,
      createStockList: w,
      // Import/Export/Update
      importData: D,
      exportData: ie,
      updateInputs: Xt,
      importInputShapes: xn,
      importInputStock: dt,
      // Additional functions
      getShapeGrainSummary: He,
      updateNumberFormat: it,
      createTestData: Ee,
      getSpecialShapeFields: Ve,
      // Extras Options Management
      extrasOptions: Pe,
      setExtrasOptionsFromPricing: Y,
      getCentralizedOptions: Le,
      // Materials list (CLE)
      materials: Fe,
      addMaterial: st,
      updateMaterial: xt,
      removeMaterial: hn,
      assignMaterialToRows: $n,
      linkRowMaterialByName: vn,
      generateMaterialsFromInputs: wt,
      materialFor: mn,
      materialColorHex: Zu,
      // Show part
      showPart: (I) => {
        Pt && Pt(I);
      },
      registerShowPart: (I) => {
        Pt = I;
      }
    };
  } catch (n) {
    throw console.error("[createInputs] Fatal error during initialization:", n), n;
  }
}
let qi = null;
function Xo(e = { numberFormat: "decimal" }) {
  try {
    return qi || (qi = uc(e)), qi;
  } catch (n) {
    throw console.error("[useInputs] FATAL ERROR in useInputs:", n), console.error("[useInputs] Error stack:", n?.stack), n;
  }
}
const el = {
  y1: "l1",
  y2: "l2",
  x1: "w1",
  x2: "w2"
}, cc = {
  l1: "y1",
  l2: "y2",
  w1: "x1",
  w2: "x2"
};
function ts(e = !1) {
  return {
    l1: e,
    l2: e,
    w1: e,
    w2: e
  };
}
function dc(e = !1) {
  return {
    x1: e,
    x2: e,
    y1: e,
    y2: e
  };
}
function oi(e = !1) {
  return {
    a: e,
    b: e
  };
}
function fc(e = !1) {
  return {
    sides: ts(e),
    faces: oi(e)
  };
}
function pc(e = !1) {
  return {
    x1: e,
    x2: e,
    y1: e,
    y2: e,
    a: e,
    b: e
  };
}
function mc(e) {
  const n = {};
  for (const [t, a] of Object.entries(el))
    t in e && (n[a] = e[t]);
  return n;
}
function gc(e) {
  const n = {};
  for (const [t, a] of Object.entries(cc))
    t in e && (n[a] = e[t]);
  return n;
}
class ho {
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
      const s = el[a] ?? a;
      t[s] = i;
    }
    return t;
  }
  /**
   * Migrate banding from flat to nested structure
   * Also handles migration from old side names (x1/x2/y1/y2) to new names (l1/l2/w1/w2)
   */
  static migrateBanding(n) {
    const t = n.banding, a = "_banding" in n ? n._banding : void 0, i = Xe(n) ? n.bandingOptions : void 0;
    if (!t && !a && !i) return !1;
    if (t && t instanceof ba) {
      const h = t.sides;
      if (h && typeof h == "object" && ("x1" in h || "x2" in h || "y1" in h || "y2" in h)) {
        const b = this.migrateSideNames(h);
        return t.sides = b, !0;
      }
      return !1;
    }
    const s = {}, u = {}, r = { sides: {} };
    if (t && typeof t == "object") {
      const h = this.migrateSideNames(t);
      for (const [C, b] of Object.entries(h))
        ya.includes(C) && (s[C] = b);
    }
    if (a && typeof a == "object") {
      const h = this.migrateSideNames(a);
      for (const [C, b] of Object.entries(h))
        ya.includes(C) && (u[C] = b);
    }
    if (i && typeof i == "object") {
      i.all && (r.sides.all = i.all);
      for (const [h, C] of Object.entries(i))
        h !== "all" && ya.includes(h) && C && (r.sides[h] = C);
    }
    const c = new ba(Object.keys(s).length > 0 ? { sides: s } : {}), f = Object.keys(u).length > 0 ? new ba({ sides: u }) : void 0;
    return "extras" in n && n.extras ? n.extras.banding = c : Xe(n) && (n.banding = c), f && "_banding" in n && (n._banding = f), Xe(n) && i && (n.bandingOptions = r), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(n) {
    const t = n.finish, a = "_finish" in n ? n._finish : void 0, i = Xe(n) ? n.finishOptions : void 0;
    if (!t && !a && !i || t && t instanceof ka)
      return !1;
    const s = {}, u = {}, r = { faces: {} };
    if (t && typeof t == "object")
      for (const [h, C] of Object.entries(t))
        wa.includes(h) && (s[h] = C);
    if (a && typeof a == "object")
      for (const [h, C] of Object.entries(a))
        wa.includes(h) && (u[h] = C);
    if (i && typeof i == "object") {
      i.all && (r.faces.all = i.all);
      for (const [h, C] of Object.entries(i))
        h !== "all" && wa.includes(h) && C && (r.faces[h] = C);
    }
    const c = new ka(Object.keys(s).length > 0 ? { faces: s } : {}), f = Object.keys(u).length > 0 ? new ka({ faces: u }) : void 0;
    return "extras" in n && n.extras ? n.extras.finish = c : Xe(n) && (n.finish = c), f && "_finish" in n && (n._finish = f), Xe(n) && i && (n.finishOptions = r), !0;
  }
  /**
   * Migrate storage format: Convert boolean true to option name strings in multi-column configs
   * This handles legacy data where single-option checkboxes stored boolean true instead of the option name
   */
  static migrateStorageFormat(n) {
    let t = !1;
    const a = "extras" in n && n.extras ? n.extras : n;
    if (a.banding) {
      const i = Xs("banding");
      if (i && i.labels && i.labels.length > 1)
        for (const s of ya) {
          const u = `side.${s}`, r = zi(n, "banding", u);
          if (r && typeof r == "object" && !Array.isArray(r)) {
            let c = !1;
            const f = { ...r };
            for (const h of i.labels)
              if (f[h] === !0) {
                const b = i.labels.indexOf(h);
                if (b !== -1 && i.options[b] && Array.isArray(i.options[b])) {
                  const v = i.options[b];
                  v.length === 1 && (f[h] = v[0], c = !0);
                }
              }
            c && (eo(n, "banding", u, f), t = !0);
          }
        }
    }
    if (a.finish) {
      const i = Xs("finish");
      if (i && i.labels && i.labels.length > 1)
        for (const s of wa) {
          const u = `face.${s}`, r = zi(n, "finish", u);
          if (r && typeof r == "object" && !Array.isArray(r)) {
            let c = !1;
            const f = { ...r };
            for (const h of i.labels)
              if (f[h] === !0) {
                const b = i.labels.indexOf(h);
                if (b !== -1 && i.options[b] && Array.isArray(i.options[b])) {
                  const v = i.options[b];
                  v.length === 1 && (f[h] = v[0], c = !0);
                }
              }
            c && (eo(n, "finish", u, f), t = !0);
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
    if (t && typeof t == "object" && !(t instanceof ba) && !("sides" in t) && !("faces" in t))
      return !0;
    if ("_banding" in n) {
      const i = n._banding;
      if (i && typeof i == "object" && !(i instanceof ba) && !("sides" in i) && !("faces" in i))
        return !0;
    }
    const a = n.finish;
    if (a && typeof a == "object" && !(a instanceof ka) && !("sides" in a) && !("faces" in a))
      return !0;
    if ("_finish" in n) {
      const i = n._finish;
      if (i && typeof i == "object" && !(i instanceof ka) && !("sides" in i) && !("faces" in i))
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
          const i = Object.keys(t.sides).filter((s) => !ya.includes(s));
          if (i.length > 0)
            throw new Error(`Invalid side keys in banding: ${i.join(", ")}`);
        }
      }
      const a = n.finish;
      if (a) {
        if ("sides" in a && a.sides)
          throw new Error("Finish should not have sides property");
        if ("faces" in a && a.faces) {
          const i = Object.keys(a.faces).filter((s) => !wa.includes(s));
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
    return "_banding" in n && n._banding && (t._banding = JSON.parse(JSON.stringify(n._banding))), "_finish" in n && n._finish && (t._finish = JSON.parse(JSON.stringify(n._finish))), Xe(n) && (n.bandingOptions && (t.bandingOptions = JSON.parse(JSON.stringify(n.bandingOptions))), n.finishOptions && (t.finishOptions = JSON.parse(JSON.stringify(n.finishOptions)))), t;
  }
  /**
   * Restore shape from backup
   */
  static restoreFromBackup(n, t) {
    "extras" in n && n.extras ? (t.banding && (n.extras.banding = t.banding), t.finish && (n.extras.finish = t.finish)) : Xe(n) && (t.banding && (n.banding = t.banding), t.finish && (n.finish = t.finish)), t._banding && "_banding" in n && (n._banding = t._banding), t._finish && "_finish" in n && (n._finish = t._finish), Xe(n) && (t.bandingOptions && (n.bandingOptions = t.bandingOptions), t.finishOptions && (n.finishOptions = t.finishOptions));
  }
}
function Gt(e) {
  return e === 1 ? !0 : e === 0 ? !1 : e;
}
function wn(e) {
  if (!e) return e;
  const n = "x1" in e || "x2" in e || "y1" in e || "y2" in e, t = "l1" in e || "l2" in e || "w1" in e || "w2" in e;
  if (n && t && console.warn("Mixed side format detected in data - using old format (x/y) and ignoring new format (l/w)", e), n) {
    const i = mc(e), s = {};
    return "l1" in i && (s.l1 = Gt(i.l1)), "l2" in i && (s.l2 = Gt(i.l2)), "w1" in i && (s.w1 = Gt(i.w1)), "w2" in i && (s.w2 = Gt(i.w2)), s;
  }
  const a = {};
  return "l1" in e && (a.l1 = Gt(e.l1)), "l2" in e && (a.l2 = Gt(e.l2)), "w1" in e && (a.w1 = Gt(e.w1)), "w2" in e && (a.w2 = Gt(e.w2)), Object.keys(a).length > 0 ? a : e;
}
function hc(e) {
  return !e || typeof e != "string" ? e : {
    "side.x1": "side.w1",
    "side.x2": "side.w2",
    "side.y1": "side.l1",
    "side.y2": "side.l2"
  }[e] || e;
}
function ea(e) {
  return !e || !Array.isArray(e) ? e : e.map(hc);
}
function vc(e) {
  const n = {};
  if (e.banding && typeof e.banding == "object")
    for (const [t, a] of Object.entries(e.banding))
      a === !0 || a === !1 ? n[t] = a : typeof a == "number" ? n[t] = Gt(a) : typeof a == "string" && a.length > 0 && (n[t] = a);
  if (e.bandingType && typeof e.bandingType == "object")
    for (const [t, a] of Object.entries(e.bandingType))
      if (e.banding) {
        const i = n[t];
        (i === !0 || typeof i == "string" && i.length > 0) && (typeof a == "string" && a.length > 0 ? n[t] = a : typeof a == "number" && a !== 0 && (n[t] = String(a)));
      } else
        typeof a == "string" && a.length > 0 ? n[t] = a : typeof a == "number" && a !== 0 && (n[t] = String(a));
  return Object.keys(n).length > 0 ? n : void 0;
}
function ns(e) {
  return e && gc(e);
}
function bc(e) {
  e?.type && delete e.type, yc.call(this, e), kc.call(this, e), wc.call(this, e), e.shapes && Array.isArray(e.shapes) && e.shapes.forEach((n) => as(n));
}
function yc(e) {
  if (!e?.banding || typeof e.banding != "object") return;
  const n = Object.keys(e.banding);
  if (!n.length) return;
  const t = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  n.every((a) => t.includes(a)) || (e.banding = {
    labels: Object.keys(e.banding),
    pricing: e.bandingPricing || {}
  }, e.bandingPricing && delete e.bandingPricing);
}
function kc(e) {
  if (!e?.finish || typeof e.finish != "object") return;
  const n = Object.keys(e.finish);
  if (!n.length) return;
  const t = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  n.every((a) => t.includes(a)) || (e.finish = {
    labels: Object.keys(e.finish),
    pricing: e.finishPricing || {}
  }, e.finishPricing && delete e.finishPricing);
}
function wc(e) {
  if (!e?.planing || typeof e.planing != "object") return;
  const n = Object.keys(e.planing);
  if (!n.length) return;
  const t = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  n.every((a) => t.includes(a)) || (e.planing = {
    labels: Object.keys(e.planing),
    pricing: e.planingPricing || {}
  }, e.planingPricing && delete e.planingPricing);
}
function as(e) {
  !e || typeof e != "object" || (ho.needsMigration(e) && ho.migrateShape(e), e._banding && delete e._banding, e._finish && delete e._finish, e._bandingType && delete e._bandingType);
}
function tl(e) {
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
function nh(e) {
  if (!(!e || typeof e != "object")) {
    if (bc(e), e.parts && Array.isArray(e.parts) && (e.parts = e.parts.map((n) => (n.extras?.banding?.sides && (n.extras.banding.sides = wn(n.extras.banding.sides)), n.extras?.finish?.sides && (n.extras.finish.sides = wn(n.extras.finish.sides)), n.extras?.planing?.sides && (n.extras.planing.sides = wn(n.extras.planing.sides)), n))), e.stock && Array.isArray(e.stock) && (e.stock = e.stock.map((n) => n?.trim ? {
      ...n,
      trim: wn(n.trim)
    } : n)), e.options) {
      if (tl(e.options), e.options.bandingLocations && (e.options.bandingLocations = ea(e.options.bandingLocations)), e.options.finishLocations && (e.options.finishLocations = ea(e.options.finishLocations)), e.options.planingLocations && (e.options.planingLocations = ea(e.options.planingLocations)), e.options.extrasLocationGroups)
        for (const n of ["banding", "finish", "planing"]) {
          const t = e.options.extrasLocationGroups[n];
          t && Array.isArray(t) && t.forEach((a) => {
            a.locations && (a.locations = ea(a.locations));
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
        t.locations && Array.isArray(t.locations) && (t.locations = ea(t.locations)), t.groups && Array.isArray(t.groups) && t.groups.forEach((a) => {
          a.locations && (a.locations = ea(a.locations));
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
    e.shapes && Array.isArray(e.shapes) && e.shapes.forEach((n) => as(n)), (e.l !== void 0 || e.w !== void 0 || e.banding !== void 0) && as(e);
  }
}
function Sc(e) {
  if (!e || typeof e != "object")
    return e;
  const n = { ...e };
  return n.saw && (n.saw = xc(n.saw)), Array.isArray(n.stock) && (n.stock = n.stock.map(Pc)), Array.isArray(n.parts) && (n.parts = n.parts.map(Ic)), n;
}
function xc(e) {
  const n = { ...e };
  if (n.guillotineOptions && (n.guillotineOptions = { ...n.guillotineOptions }, n.guillotineOptions.strategy === "stock" && (n.guillotineOptions.strategy = "efficiency")), n.efficiencyOptions) {
    n.efficiencyOptions = { ...n.efficiencyOptions };
    const t = n.efficiencyOptions.primaryCompression;
    t === "x" ? n.efficiencyOptions.primaryCompression = "l" : t === "y" && (n.efficiencyOptions.primaryCompression = "w");
  }
  return n.bladeWidth !== void 0 && (n.bladeWidth = Number(n.bladeWidth)), n.stackHeight !== void 0 && (n.stackHeight = Number(n.stackHeight)), n.cutPreference === "flex" ? n.cutPreference = "l" : n.cutPreference === "" && (n.cutPreference = void 0), (n.cutPreference === null || n.cutPreference === void 0) && (n.cutType === "guillotine" || n.cutType === "beam") && (n.cutPreference = "l"), n;
}
function Pc(e) {
  const n = { ...e };
  return delete n.numberFormatKeys, delete n.issues, delete n.warnings, n.trim && (n.trim = wn(n.trim)), n.l !== void 0 && (n.l = Number(n.l)), n.w !== void 0 && (n.w = Number(n.w)), n.t !== void 0 && (n.t = Number(n.t)), n.q !== void 0 && (n.q = Number(n.q)), n.cost !== void 0 && (n.cost = Number(n.cost)), n;
}
function Ic(e) {
  const n = { ...e };
  if (delete n.numberFormatKeys, delete n.issues, delete n.warnings, n.banding || n.bandingType) {
    const t = vc(n);
    t && Object.keys(t).length > 0 && (n.extras || (n.extras = {}), n.extras.banding || (n.extras.banding = {}), n.extras.banding.sides = wn(t)), delete n.banding, delete n.bandingType;
  }
  if (n.extras?.banding?.sides && (n.extras = { ...n.extras }, n.extras.banding = { ...n.extras.banding }, n.extras.banding.sides = wn(n.extras.banding.sides)), n.finish && !n.extras?.finish) {
    if (n.extras || (n.extras = {}), n.extras.finish || (n.extras.finish = {}), n.finish.a !== void 0 || n.finish.b !== void 0) {
      const t = {};
      "a" in n.finish && (t.a = Gt(n.finish.a)), "b" in n.finish && (t.b = Gt(n.finish.b)), n.extras.finish.faces = t;
    } else
      n.extras.finish.sides = wn(n.finish);
    delete n.finish;
  }
  if (n.extras?.finish?.sides && (n.extras = { ...n.extras }, n.extras.finish = { ...n.extras.finish }, n.extras.finish.sides = wn(n.extras.finish.sides)), n.extras?.finish?.faces) {
    n.extras = { ...n.extras }, n.extras.finish = { ...n.extras.finish };
    const t = n.extras.finish.faces;
    "a" in t && (t.a = Gt(t.a)), "b" in t && (t.b = Gt(t.b));
  }
  return n.l !== void 0 && (n.l = Number(n.l)), n.w !== void 0 && (n.w = Number(n.w)), n.t !== void 0 && (n.t = Number(n.t)), n.q !== void 0 && (n.q = Number(n.q)), n;
}
function Qt(e) {
  if (!e || typeof e != "object") return e;
  if (Array.isArray(e)) return e.map(Qt);
  const n = {};
  for (const [t, a] of Object.entries(e))
    t === "__entityType" || t === "autoId" || (n[t] = Qt(a));
  return n;
}
function li(e) {
  if (!e || typeof e != "object") return null;
  if (Array.isArray(e)) return e.map(li);
  const n = {};
  for (const [t, a] of Object.entries(e))
    t === "__entityType" || t === "autoId" || t === "enabled" || t === "type" || t === "issues" || t === "warnings" || (n[t] = a && typeof a == "object" ? li(a) : a);
  return Object.keys(n).length > 0 ? n : null;
}
function nl(e) {
  if (!e) return null;
  const {
    enabled: n,
    __entityType: t,
    autoId: a,
    issues: i,
    warnings: s,
    ...u
  } = e;
  return Qt(u);
}
function Cc(e) {
  return e ? typeof e == "string" ? e : e.id ? e.id : e.autoId ? e.autoId : "" : "";
}
function Lc(e) {
  return e.rot !== void 0 ? e.rot ? 1 : 0 : e.rotated !== void 0 ? e.rotated ? 1 : 0 : e.isRotated !== void 0 ? e.isRotated ? 1 : 0 : e.w > e.l ? 1 : 0;
}
$({
  // Job metadata
  jobId: k().describe("Job identifier"),
  calcTime: k().optional().describe("Calculation time in milliseconds"),
  // Input configuration (preserved)
  saw: Jn.describe("Saw configuration used"),
  // Result data (internal format - l1/l2/w1/w2)
  // Using actual schemas to strip internal-only fields
  stock: ee(Gr).describe("Stock items"),
  parts: ee(to).describe("Parts with coordinates and properties"),
  cuts: ee(Ur).optional().describe("Cut instructions"),
  offcuts: ee(jr).optional().describe("Remaining offcut pieces"),
  unusableParts: ee(to).optional().describe("Parts that could not be placed"),
  // Complete metadata (ALL internal analysis fields)
  metadata: Yo.describe("Complete analysis and metrics")
});
$({
  saw: Jn.describe("Saw configuration"),
  stock: ee(Nn).describe("Stock items"),
  parts: ee(Zn).describe("Parts to cut"),
  groups: ee(Wr).optional().describe("User-defined part groups with XY positions"),
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
  details: ii().optional().describe("Detailed error information (Zod validation errors, etc.)"),
  version: yt("V3").describe("API version"),
  help: d().optional().describe("Helpful migration guidance"),
  example: ii().optional().describe("Example of correct format"),
  docs: d().url().optional().describe("Link to V3 documentation")
});
function Oc(e) {
  if (!e) return null;
  const {
    fitsAll: n,
    fitsAny: t,
    largestShape: a,
    smallestShape: i,
    ...s
  } = e;
  return Qt(s);
}
function Ec(e) {
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
    trim: Qt(e.trim),
    cost: e.cost ?? 0,
    notes: e.notes ?? "",
    code: e.code,
    analysis: Oc(e.analysis),
    stack: e.stack?.number ?? 1,
    customData: Qt(e.customData)
  } : null;
}
function Tc(e, n) {
  if (!e) return null;
  let t = null;
  const a = Cc(e.stock);
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
    rot: Lc(e),
    added: e.added ?? !1,
    notes: e.notes ?? "",
    code: e.code,
    stock: t,
    trim: Qt(e.trim),
    extras: li(e.extras),
    customData: Qt(e.customData)
  };
  return e.machining && (i.machining = nl(e.machining)), i;
}
function Ac(e) {
  if (!e) return null;
  const n = {
    id: e.id,
    name: e.name,
    l: e.l,
    w: e.w,
    t: e.t,
    material: e.material ?? "",
    notes: e.notes ?? "",
    trim: Qt(e.trim),
    extras: li(e.extras),
    customData: Qt(e.customData)
  };
  return e.machining && (n.machining = nl(e.machining)), e.issues && Array.isArray(e.issues) && e.issues.length > 0 ? n.issues = e.issues.map((t) => ({
    message: Go(t.message) || t.message,
    type: t.type,
    category: t.category,
    field: t.field
  })) : n.issues = [], n;
}
function Fc(e) {
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
function Nc(e) {
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
function $c(e) {
  const n = e.stockList || e.stock || [], t = /* @__PURE__ */ new Map();
  for (const f of n) {
    const h = { id: f.id || "" };
    f.code && (h.code = f.code), f.id && t.set(f.id, h), f.autoId && f.autoId !== f.id && t.set(f.autoId, h);
  }
  const a = n.map(Ec), i = (e.shapeList || e.parts || []).map((f) => Tc(f, t)), s = (e.unusableShapes || []).map(Ac), u = (e.cutList || e.cuts || []).map(Fc), r = (e.offcuts || []).map(Nc);
  return {
    jobId: e.jobId,
    // Billed compute ms (`time` on the stored result); raw algorithm ms covers
    // results saved before a billed value was recorded.
    calcTime: e.time ?? e.algoMs,
    saw: Qt(e.saw),
    stock: a,
    parts: i,
    cuts: u,
    offcuts: r,
    unusableParts: s,
    metadata: Qt(e.metadata)
  };
}
const Oa = { minEdgeLength: 140, minPanelDepth: 70 };
function Mc(e, n, t, a, i = Oa) {
  const { minEdgeLength: s, minPanelDepth: u } = i, r = (me) => ({ allowed: !1, reason: me, recut: !1, cutLength: e, cutWidth: n, finalLength: e, finalWidth: n, sequence: [] });
  if (t === 2 && n < u)
    return r(`Both long sides requested but the short side is permanently under ${u}mm.`);
  if (a === 2 && e < u)
    return r(`Both short sides requested but the long side is permanently under ${u}mm.`);
  if (t === 2 && a === 2 && e < s && n < s)
    return r(`All four sides requested but both dimensions are under ${s}mm — no valid cutting order exists.`);
  const c = t > 0 ? s : a > 0 ? u : 0, f = a > 0 ? s : t > 0 ? u : 0, h = e < c, C = n < f;
  if (!h && !C)
    return { allowed: !0, recut: !1, cutLength: e, cutWidth: n, finalLength: e, finalWidth: n, sequence: [{ step: "band", edges: "all" }] };
  const b = h ? c : e, v = C ? f : n, M = [];
  h && M.push(`L${e}`), C && M.push(`W${n}`);
  const U = `**RC ${M.join(" ")}**`, de = t === 2 && C, z = a === 2 && h, _ = [{ step: "cutBlank", length: b, width: v }];
  return a > 0 && !z && _.push({ step: "band", edges: "width" }), t > 0 && !de && _.push({ step: "band", edges: "length" }), de ? (_.push({ step: "recut", dimension: "width", to: n }), _.push({ step: "band", edges: "length" }), h && _.push({ step: "recut", dimension: "length", to: e })) : z ? (_.push({ step: "recut", dimension: "length", to: e }), _.push({ step: "band", edges: "width" }), C && _.push({ step: "recut", dimension: "width", to: n })) : (C && _.push({ step: "recut", dimension: "width", to: n }), h && _.push({ step: "recut", dimension: "length", to: e })), { allowed: !0, recut: !0, cutLength: b, cutWidth: v, finalLength: e, finalWidth: n, tag: U, sequence: _ };
}
const za = (e) => e != null && e !== !1 && e !== "";
function is(e, n = Oa) {
  const t = Number(e.l) || 0, a = Number(e.w) || 0, i = e.extras?.banding?.sides ?? {}, s = (za(i.l1) ? 1 : 0) + (za(i.l2) ? 1 : 0), u = (za(i.w1) ? 1 : 0) + (za(i.w2) ? 1 : 0);
  return Mc(t, a, s, u, n);
}
function Dc(e) {
  const n = Number(e?.minEdgeLength), t = Number(e?.minPanelDepth);
  return {
    minEdgeLength: Number.isFinite(n) && n > 0 ? n : Oa.minEdgeLength,
    minPanelDepth: Number.isFinite(t) && t > 0 ? t : Oa.minPanelDepth
  };
}
function _c(e, n) {
  const t = (n ?? "").trim();
  return t ? t.startsWith(e) ? t : `${e} ${t}` : e;
}
function Rc(e, n = Oa) {
  const t = is(e, n);
  if (!t.allowed || !t.recut) return t;
  e.l = t.cutLength, e.w = t.cutWidth, e.name = _c(t.tag, e.name);
  const a = {
    finalLength: t.finalLength,
    finalWidth: t.finalWidth,
    tag: t.tag,
    sequence: t.sequence
  };
  return e.customData = { ...e.customData ?? {}, edgeBandingRecut: a }, t;
}
const vo = (e) => e == null || e === !1;
function Vc(e, n, t) {
  if (n > 0 && vo(t[n - 1])) return [];
  const a = /* @__PURE__ */ new Set();
  for (const i of e) {
    if (i.length <= n) continue;
    let s = !0;
    for (let u = 0; u < n; u++) {
      const r = t[u];
      if (!vo(r) && i[u] !== r) {
        s = !1;
        break;
      }
    }
    s && a.add(i[n]);
  }
  return [...a];
}
class En extends Error {
  constructor(n, t) {
    super(n), this.code = t, this.name = "FormulaError";
  }
}
class hs {
  url;
  spec;
  // private formulaCache: FormulaCache = new Map();
  // Update the evaluate method to use the type guard
  evaluate(n, t = {}) {
    if (typeof n == "number" || typeof n == "boolean") return n;
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
      if (t === 0) throw new En("Division by zero", "DIVISION_BY_ZERO");
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
      const [f, h] = c.split(".");
      if (!n.nodes.has(c)) {
        const U = i[f];
        if (U)
          return h === "q" ? U.q : U[h];
        throw new Error(`Node not found: ${c}`);
      }
      if (u.has(c))
        throw new Error(`Circular dependency detected at ${c}`);
      const C = n.nodes.get(c);
      if (typeof C.formula == "number")
        return s.set(c, C.formula), C.formula;
      u.add(c);
      const b = n.edges.get(c) || /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Map();
      for (const U of b)
        if (U.startsWith("input.")) {
          const de = U.split(".")[1];
          v.set(U, a[de]);
        } else
          v.set(U, r(U));
      const M = this.evaluateFormulaWithDeps(C.formula, v, a);
      return s.set(c, M), u.delete(c), M;
    };
    for (const c of n.nodes.keys())
      r(c);
    return Object.fromEntries(s);
  }
  evaluateFormulaWithDeps(n, t, a, i) {
    if (!this.isFormula(n)) return n;
    let s = this.stripFormulaPrefix(n.toString());
    return s = s.replace(
      /inputs\.(\w+)/g,
      (u, r) => a[r]?.toString() || "0"
    ), s = s.replace(
      /panels\.(\w+)\.(\w+)/g,
      (u, r, c) => {
        if (r === i?.panelKey && i[c] !== void 0)
          return i[c].toString();
        if (t.has(`${r}.${c}`))
          return t.get(`${r}.${c}`).toString();
        throw new Error(`Undefined variable in formula: ${u}`);
      }
    ), this.evaluate(this.parse(s), a);
  }
  calculatePanels(n) {
    if (!this.spec?.panels) return {};
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
    if (typeof n == "number") return n;
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
    if (!this.spec?.inputs) throw new En("No input specifications defined", "NO_INPUTS");
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
    if (!this.url) return null;
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
          for (const a of n.operands) this.collectIdentifiers(a, t);
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
const qc = new hs({});
function Bc(e) {
  const n = e.trim();
  return n.startsWith("=") ? n.substring(1).trim() : n;
}
function vs(e, n) {
  const t = Bc(e);
  if (!t) return null;
  try {
    const a = qc.evaluateExpression(t, n), i = Number(a);
    return !Number.isFinite(i) || i < 0 ? null : i;
  } catch (a) {
    return console.error("[extras-formula] evaluation failed", { formula: e, err: a }), null;
  }
}
function jc(e, n) {
  return vs(n, e);
}
function Uc(e, n) {
  return vs(n, e);
}
function bo(e, n) {
  return vs(n, e);
}
const bs = {
  stockL: 0,
  stockW: 0,
  stockCost: 0,
  stockDiscount: 0,
  stockDiscountedCost: 0
};
function Gc(e, n, t, a) {
  return {
    length: n,
    edge: e,
    isLongEdge: e === "l1" || e === "l2" ? 1 : 0,
    partL: t.partL,
    partW: t.partW,
    partT: t.partT,
    partQuantity: t.partQuantity,
    ...bs,
    ...a
  };
}
function Wc(e, n, t, a) {
  return {
    area: n,
    face: e,
    partL: t.partL,
    partW: t.partW,
    partT: t.partT,
    partQuantity: t.partQuantity,
    ...bs,
    ...a
  };
}
function yo(e, n, t, a, i, s) {
  return {
    area: n,
    length: t,
    target: e,
    isFace: a,
    partL: i.partL,
    partW: i.partW,
    partT: i.partT,
    partQuantity: i.partQuantity,
    ...bs,
    ...s
  };
}
function zc(e) {
  let n = e;
  for (let t = 0; t < 16 && n; t++) {
    if (n instanceof ua) return n;
    if (typeof n.unwrap == "function") {
      const i = n.unwrap();
      if (i === n) break;
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
function Kc(e) {
  const n = e.shape ?? {};
  return Object.entries(n).filter(([, t]) => zc(t) instanceof ua).map(([t]) => t);
}
function ko(e) {
  const t = (e.split(".").pop() ?? e).replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
}
Kc(Ea);
function ys(e) {
  const n = (s) => {
    const u = e.meta[s];
    return {
      name: s,
      label: u?.label ?? ko(s),
      description: u?.description,
      group: u?.group ?? e.defaultGroup
    };
  }, t = e.handCuratedNames.map(n), a = e.relevantOrderKeys.map((s) => ({
    name: `order.${s}`,
    label: ko(s),
    group: "Order"
  })), i = [...t, ...a];
  return { variables: i, variableNames: i.map((s) => s.name) };
}
const Hc = {
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
}, Zc = [
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
], Jc = [
  "totalBandingLength",
  // the headline one for banding tiering
  "totalPartsProduced",
  "totalStockCost",
  "totalStockArea",
  "totalPartArea"
], { variableNames: Qc } = ys({
  handCuratedNames: Zc,
  meta: Hc,
  relevantOrderKeys: Jc,
  defaultGroup: "Edge"
}), Yc = Qc, Xc = {
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
}, ed = [
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
], td = [
  "totalFinishArea",
  "totalPartsProduced",
  "totalStockCost",
  "totalStockArea",
  "totalPartArea"
], { variableNames: nd } = ys({
  handCuratedNames: ed,
  meta: Xc,
  relevantOrderKeys: td,
  defaultGroup: "Face"
}), ad = nd, id = {
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
}, sd = [
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
], od = [
  "totalPlaningArea",
  "totalPartsProduced",
  "totalStockCost",
  "totalStockArea",
  "totalPartArea"
], { variableNames: ld } = ys({
  handCuratedNames: sd,
  meta: id,
  relevantOrderKeys: od,
  defaultGroup: "Feature"
}), rd = ld, tn = K(null);
let ud = 0;
function cd(e) {
  const n = e || `action-menu-${++ud}-${Date.now()}`, t = A({
    get: () => tn.value === n,
    set: (h) => {
      h ? tn.value = n : tn.value === n && (tn.value = null);
    }
  }), a = () => {
    tn.value = n;
  }, i = () => {
    tn.value === n && (tn.value = null);
  }, s = () => {
    tn.value = null;
  }, u = () => {
    t.value = !t.value;
  }, r = A(() => tn.value !== null), c = A(() => tn.value), f = A(() => tn.value === n);
  return {
    // Instance-specific
    id: Kt(K(n)),
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
const dd = { class: "action-menu" }, fd = ["textContent"], pd = {
  key: 0,
  class: "menu-divider"
}, md = {
  key: 1,
  class: "group-label"
}, gd = /* @__PURE__ */ vt({
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
    const t = e, a = n, { isOpen: i, close: s, toggle: u } = cd(t.menuId), r = K(), c = K(), f = A(() => t.disabled), h = A(() => t.label), C = A(() => t.showLabel), b = A(() => t.icon), { floatingStyles: v } = Fo(r, c, {
      placement: t.placement,
      whileElementsMounted: Ho,
      middleware: [
        Wo(t.offset),
        zo(),
        Ko({ padding: 8 })
      ]
    }), M = (P) => {
      if (!P) return ["fas", "question"];
      if (typeof P == "function" && (P = P(t)), Array.isArray(P))
        return P;
      if (typeof P == "string") {
        const R = P.split(" ");
        if (R.length >= 2) {
          const re = R[0], se = R.slice(1).join("-").replace("fa-", "");
          return [re, se];
        }
        return ["fas", P.replace("fa-", "")];
      }
      return ["fas", "question"];
    }, U = A(() => M(b.value)), de = (P) => typeof P.active == "function" ? P.active(t) : typeof P.active == "boolean" ? P.active : !1, z = (P) => {
      if (!P.href) return !1;
      try {
        const R = typeof P.href == "function" ? P.href(t) : P.href;
        return new URL(R, window.location.origin).origin !== window.location.origin;
      } catch {
        return !1;
      }
    }, _ = (P) => P.href ? "a" : "div", me = (P) => {
      const R = {};
      if (P.href) {
        const re = typeof P.href == "function" ? P.href(t) : P.href;
        if (R.href = re, z(P)) {
          const se = typeof P.target == "function" ? P.target(t) : P.target;
          R.target = se || "_blank", R.rel = P.rel || "noopener noreferrer";
        } else if (P.target) {
          const se = typeof P.target == "function" ? P.target(t) : P.target;
          R.target = se;
        }
        P.rel && (R.rel = P.rel);
      }
      return P.attrs && Object.assign(R, P.attrs), R;
    }, ge = A(() => t.menuItems.map((P) => {
      const R = { ...P };
      return typeof P.href == "function" && (R.href = P.href(t)), typeof P.icon == "function" && (R.icon = P.icon(t)), typeof P.disabled == "function" && (R.disabled = P.disabled(t)), typeof P.label == "function" && (R.label = P.label(t)), typeof P.variant == "function" && (R.variant = P.variant(t)), typeof P.active == "function" && (R.active = P.active(t)), typeof P.target == "function" && (R.target = P.target(t)), typeof P.show == "function" && (R.show = P.show(t)), R;
    })), w = (P) => {
      P.stopPropagation(), P.preventDefault(), !f.value && u();
    }, D = (P, R) => {
      if (R.stopPropagation(), P.disabled && !P.href) {
        R.preventDefault();
        return;
      }
      if (typeof P.action == "function" && P.action(P) === !1 && P.href) {
        R.preventDefault();
        return;
      }
      a("action", {
        id: P.id,
        item: P
      }), P.href && t.closeOnLinkClick ? s() : P.href || s();
    }, ie = (P) => {
      const R = [];
      if (P.variant) {
        const se = typeof P.variant == "function" ? P.variant(t) : P.variant;
        R.push(`variant-${se}`);
      }
      if ((typeof P.disabled == "function" ? P.disabled(t) : P.disabled) && !P.href && R.push("disabled"), de(P) && R.push("active"), P.href && R.push("menu-link"), z(P) && R.push("external-link"), P.class) {
        const se = typeof P.class == "function" ? P.class(t) : P.class;
        R.push(se);
      }
      return R.join(" ");
    }, le = (P) => {
      const R = P.target;
      i.value && r.value && c.value && !r.value.contains(R) && !c.value.contains(R) && s();
    }, j = (P) => {
      P.key === "Escape" && i.value && s();
    };
    return pn(() => {
      document.addEventListener("click", le), document.addEventListener("keydown", j);
    }), ci(() => {
      document.removeEventListener("click", le), document.removeEventListener("keydown", j);
    }), (P, R) => (F(), Z("div", dd, [
      be("div", {
        ref_key: "trigger",
        ref: r,
        onClick: w,
        class: ut(["actions-btn", { active: T(i), disabled: f.value }])
      }, [
        b.value ? (F(), Me(T(si), {
          key: 0,
          icon: U.value,
          class: "icon"
        }, null, 8, ["icon"])) : ce("", !0),
        C.value ? (F(), Z("span", {
          key: 1,
          class: "label",
          textContent: we(h.value)
        }, null, 8, fd)) : ce("", !0)
      ], 2),
      (F(), Me(di, { to: "body" }, [
        T(i) && !f.value ? (F(), Z("div", {
          key: 0,
          ref_key: "floating",
          ref: c,
          style: Wt(T(v)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: R[0] || (R[0] = Hn(() => {
          }, ["stop"]))
        }, [
          (F(!0), Z(Ot, null, Jt(ge.value, (re, se) => (F(), Z(Ot, { key: se }, [
            re.type === "divider" ? (F(), Z("div", pd)) : re.type === "group" ? (F(), Z("div", md, we(re.label), 1)) : re.show !== !1 ? (F(), Me(Cr(_(re)), Ht({
              key: 2,
              ref_for: !0
            }, me(re), {
              onClick: (oe) => D(re, oe),
              id: re.id,
              class: ["menu-item", ie(re)],
              disabled: re.disabled && !re.href
            }), {
              default: nn(() => [
                re.icon || de(re) ? (F(), Me(T(si), {
                  key: 0,
                  icon: de(re) ? ["fass", "check"] : M(re.icon)
                }, null, 8, ["icon"])) : ce("", !0),
                be("span", null, we(re.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : ce("", !0)
          ], 64))), 128))
        ], 4)) : ce("", !0),
        T(i) && !f.value ? (F(), Z("div", {
          key: 1,
          class: "backdrop",
          onClick: R[1] || (R[1] = //@ts-ignore
          (...re) => T(s) && T(s)(...re))
        })) : ce("", !0)
      ]))
    ]));
  }
}), hd = {
  key: 0,
  class: "extras-price-display"
}, vd = { class: "extras-price-breakdown" }, bd = { class: "extras-price-rate" }, yd = {
  key: 0,
  class: "extras-price-label"
}, kd = {
  key: 1,
  class: "extras-price-op"
}, wd = {
  key: 0,
  class: "extras-price-total"
}, Sd = /* @__PURE__ */ vt({
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
    return (i, s) => e.pricePerUnit !== void 0 ? (F(), Z("span", hd, [
      be("span", vd, [
        be("strong", bd, we(a(e.pricePerUnit)), 1),
        e.priceLabel ? (F(), Z("span", yd, we(e.priceLabel), 1)) : ce("", !0),
        t.value ? (F(), Z("span", kd, " × " + we(e.quantity.toFixed(2)) + we(e.quantityUnit ? " " + e.quantityUnit : "") + " = ", 1)) : ce("", !0)
      ]),
      t.value ? (F(), Z("strong", wd, we(a(e.pricePerUnit * e.quantity)), 1)) : ce("", !0)
    ])) : ce("", !0);
  }
}), xd = /* @__PURE__ */ on(Sd, [["__scopeId", "data-v-2e4e7ac7"]]);
function ks(e) {
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
function ah(e, n) {
  const t = ks(e);
  return t ? (0.299 * t.r + 0.587 * t.g + 0.114 * t.b) / 255 > 0.55 ? "#000000" : "#ffffff" : "#000000";
}
function wo(e, n = 30, t = 75) {
  const a = ks(e);
  if (!a) return e;
  const i = Id(a.r, a.g, a.b);
  if (i.l >= n && i.l <= t && i.s >= 25) return e;
  const u = Math.min(t, Math.max(n, i.l)), r = i.s < 25 ? 60 : i.s, [c, f, h] = Cd(i.h, r, u);
  return "#" + [c, f, h].map((C) => C.toString(16).padStart(2, "0")).join("");
}
function ih(e) {
  const n = Pd(e);
  return n === null ? "white" : n > 0.55 ? "#cc1f8c" : "white";
}
function Pd(e) {
  const n = ks(e);
  return n ? (0.299 * n.r + 0.587 * n.g + 0.114 * n.b) / 255 : null;
}
function Id(e, n, t) {
  const a = e / 255, i = n / 255, s = t / 255, u = Math.max(a, i, s), r = Math.min(a, i, s), c = (u + r) / 2;
  let f = 0, h = 0;
  if (u !== r) {
    const C = u - r;
    switch (h = c > 0.5 ? C / (2 - u - r) : C / (u + r), u) {
      case a:
        f = (i - s) / C + (i < s ? 6 : 0);
        break;
      case i:
        f = (s - a) / C + 2;
        break;
      case s:
        f = (a - i) / C + 4;
        break;
    }
    f *= 60;
  }
  return { h: f, s: h * 100, l: c * 100 };
}
function Cd(e, n, t) {
  n /= 100, t /= 100;
  const a = (1 - Math.abs(2 * t - 1)) * n, i = a * (1 - Math.abs(e / 60 % 2 - 1)), s = t - a / 2;
  let u = 0, r = 0, c = 0;
  return e >= 0 && e < 60 ? (u = a, r = i, c = 0) : e >= 60 && e < 120 ? (u = i, r = a, c = 0) : e >= 120 && e < 180 ? (u = 0, r = a, c = i) : e >= 180 && e < 240 ? (u = 0, r = i, c = a) : e >= 240 && e < 300 ? (u = i, r = 0, c = a) : e >= 300 && e < 360 && (u = a, r = 0, c = i), [
    Math.round((u + s) * 255),
    Math.round((r + s) * 255),
    Math.round((c + s) * 255)
  ];
}
const So = (e, n, t) => {
  if (n === "unitDependent")
    if (t === "fraction") {
      if (/\/0$/.test(e))
        return {
          value: e,
          valid: !1,
          message: "division_by_zero"
        };
      const a = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(e), i = Bo(e);
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
function Ld({
  props: e,
  emit: n,
  isMounted: t
}) {
  const a = K({
    isTyping: !1,
    isMouseDown: !1,
    isComposing: !1,
    lastValidValue: String(e.value ?? "")
  }), i = (r, c = !1) => {
    if (r == null || r === "") {
      const h = e.required && !e.disableRequiredValidation;
      return e.type === "string" ? h ? { value: null, valid: !1, message: "field_required" } : { value: r === null ? null : "", valid: !0 } : zr(r, "decimal", h);
    }
    const f = String(r);
    switch (e.type) {
      case "string":
        return { value: f, valid: !0 };
      case "unitDependent":
        if (c)
          return So(f, e.type, e.numberFormat);
        try {
          const h = ue({
            v: r,
            nf: e.numberFormat,
            dp: e.decimalPlaces,
            fr: e.fractionRoundTo
          });
          if (typeof h == "number") {
            let C = h, b = !0, v;
            return typeof e.min == "number" && C < e.min && (C = e.min, b = !1, v = "below_min"), typeof e.max == "number" && C > e.max && (C = e.max, b = !1, v = "above_max"), { value: C, valid: b, message: v };
          }
          return { value: h, valid: !0 };
        } catch (h) {
          return console.warn("Error converting value:", h), {
            value: null,
            valid: !1,
            message: "invalid_number"
          };
        }
      case "integer":
      case "float":
        if (c)
          return So(f, e.type);
        try {
          const C = ue({
            v: r,
            nf: "decimal"
          });
          if (C === null)
            return e.required && !e.disableRequiredValidation ? { value: null, valid: !1, message: "errors.validation.field.required" } : { value: null, valid: !0 };
          let b = C;
          if (e.type === "integer" && (b = Math.round(b)), e.allowZero === !1 && b === 0)
            return {
              value: b,
              valid: !1,
              message: "zero_not_allowed"
            };
          let v = !0, M;
          return typeof e.min == "number" && b < e.min && (b = e.min, v = !1, M = "below_min"), typeof e.max == "number" && b > e.max && (b = e.max, v = !1, M = "above_max"), { value: b, valid: v, message: M };
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
          const h = i(c.value, !1);
          s(h, !1) && (n("update:value", h.value), n("validation", h, e.id)), a.value.isMouseDown = !1;
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
              const c = r.target, f = c.value, h = c.selectionStart || 0, C = f.substring(0, h);
              if (r.key === "/" && f.includes("/")) {
                r.preventDefault();
                return;
              }
              if (r.key === " " && /\s$/.test(C)) {
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
          if (!Bo(f)) {
            r.preventDefault(), n("validation", {
              value: f,
              valid: !1,
              message: `Pasted text "${c}" is not a valid fraction format`
            }, e.id);
            return;
          }
          if (f !== c) {
            r.preventDefault();
            const h = r.target;
            h.value = f;
            const C = i(f, !0);
            n("validation", C, e.id), n("input", f);
          }
        }
        n("paste", r);
      }
    },
    processValue: i
  };
}
function Od({
  props: e,
  emit: n,
  isMounted: t
}) {
  const a = K({
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
function Ed({
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
const Td = ["id", "name", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Ad = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = K(!0), s = K(null), u = A(() => t.value === t.trueValue), {
      handleCheckboxChange: r,
      handleFocus: c,
      handleBlur: f
    } = Ed({
      props: t,
      emit: a,
      isMounted: i
    });
    return (h, C) => (F(), Z("input", {
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
      onChange: C[0] || (C[0] = //@ts-ignore
      (...b) => T(r) && T(r)(...b)),
      onFocus: C[1] || (C[1] = //@ts-ignore
      (...b) => T(c) && T(c)(...b)),
      onBlur: C[2] || (C[2] = //@ts-ignore
      (...b) => T(f) && T(f)(...b))
    }, null, 40, Td));
  }
}), Fd = ["for"], Pa = /* @__PURE__ */ vt({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(e) {
    return (n, t) => (F(), Z("label", {
      for: e.id,
      class: "input-label"
    }, [
      Zt(n.$slots, "default", {}, () => [
        an(we(e.label), 1)
      ])
    ], 8, Fd));
  }
}), ti = /* @__PURE__ */ new Set();
function Nd(e) {
  for (const n of ti)
    n !== e && n();
}
function al(e, n, t = {}, a) {
  const i = K(null);
  if (a) {
    const h = () => {
      a.value && (a.value = !1);
    };
    Je(a, (C) => {
      C ? (Nd(h), ti.add(h)) : ti.delete(h);
    }, { flush: "sync" }), fi(() => {
      ti.delete(h);
    });
  }
  pn(() => {
    const h = e.value;
    i.value = h?.closest("dialog") ?? h?.closest(".smartcut-content") ?? document.body;
  });
  const s = [
    Wo(t.offsetPx ?? 4),
    zo({ padding: t.padding ?? 8 }),
    Ko({ padding: t.padding ?? 8 })
  ];
  t.sizeApply && s.push($u({
    padding: t.padding ?? 8,
    apply: t.sizeApply
  })), t.extraMiddleware && s.push(...t.extraMiddleware);
  const { floatingStyles: u, isPositioned: r } = Fo(e, n, {
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
    whileElementsMounted: (h, C, b) => Ho(h, C, b, { animationFrame: !0 }),
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
    const h = getComputedStyle(e.value), C = n.value;
    C.style.font = h.font, C.style.color = h.color;
  }
  return {
    floatingStyles: c,
    teleportTarget: i,
    syncFloatingFont: f
  };
}
const $d = ["id", "disabled", "aria-label"], Md = { class: "multiselect__text" }, Dd = { class: "multiselect__list" }, _d = ["checked", "disabled", "onChange"], Rd = { class: "multiselect__option-label" }, Vd = {
  key: 0,
  class: "multiselect__no-results"
}, qd = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = K(!1), s = K(null), u = K(), r = K(), c = K(null), f = K(""), { floatingStyles: h, teleportTarget: C, syncFloatingFont: b } = al(
      u,
      r,
      {
        sizeApply({ rects: ge, availableWidth: w, availableHeight: D, elements: ie }) {
          const le = ge.reference.width, j = Math.min(w, Math.max(le, 400));
          Object.assign(ie.floating.style, {
            maxHeight: `${Math.max(200, D)}px`,
            minWidth: `${le}px`,
            maxWidth: `${j}px`
          });
        }
      },
      i
    ), v = A(() => {
      const ge = t.value;
      return ge ? Array.isArray(ge) ? new Set(ge.map(String)) : new Set(String(ge).split(",").filter(Boolean)) : /* @__PURE__ */ new Set();
    }), M = A(() => t.options.map((ge) => ({
      value: ge.value,
      label: ge.label ?? String(ge.value),
      hidden: ge.hidden ?? !1,
      disabled: ge.disabled ?? !1
    }))), U = A(() => {
      if (!f.value) return M.value;
      const ge = f.value.toLowerCase();
      return M.value.filter(
        (w) => (w.label ?? String(w.value)).toLowerCase().includes(ge)
      );
    }), de = A(() => {
      const ge = v.value.size;
      if (ge === 0) return t.placeholder || "All";
      if (ge === 1) {
        const w = [...v.value][0];
        return M.value.find((ie) => String(ie.value) === w)?.label || w;
      }
      return `${ge} selected`;
    });
    function z() {
      t.disabled || (i.value = !i.value, i.value && (f.value = "", _t(() => {
        b(), t.searchable && c.value?.focus();
      })));
    }
    function _(ge) {
      const w = String(ge), D = new Set(v.value);
      D.has(w) ? D.delete(w) : D.add(w), a("update:value", [...D]);
    }
    function me(ge) {
      const w = ge.target;
      s.value?.contains(w) || r.value?.contains(w) || (i.value = !1);
    }
    return pn(() => document.addEventListener("click", me)), fi(() => document.removeEventListener("click", me)), (ge, w) => (F(), Z("div", {
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
        onClick: z
      }, [
        be("span", Md, we(de.value), 1)
      ], 8, $d),
      (F(), Me(di, {
        to: T(C),
        disabled: !T(C)
      }, [
        i.value ? (F(), Z("div", {
          key: 0,
          ref_key: "floatingRef",
          ref: r,
          class: "multiselect__dropdown",
          style: Wt(T(h))
        }, [
          t.searchable ? ls((F(), Z("input", {
            key: 0,
            ref_key: "searchRef",
            ref: c,
            "onUpdate:modelValue": w[0] || (w[0] = (D) => f.value = D),
            type: "text",
            class: "multiselect__search",
            placeholder: "Search...",
            onClick: w[1] || (w[1] = Hn(() => {
            }, ["stop"]))
          }, null, 512)), [
            [No, f.value]
          ]) : ce("", !0),
          be("div", Dd, [
            (F(!0), Z(Ot, null, Jt(U.value, (D) => (F(), Z("label", {
              key: D.value,
              class: ut(["multiselect__option", { "multiselect__option--zero": D.hidden }])
            }, [
              be("input", {
                type: "checkbox",
                checked: v.value.has(String(D.value)),
                disabled: D.disabled,
                onChange: (ie) => _(D.value)
              }, null, 40, _d),
              be("span", Rd, we(D.label), 1)
            ], 2))), 128)),
            t.searchable && U.value.length === 0 ? (F(), Z("div", Vd, " No matches ")) : ce("", !0)
          ])
        ], 4)) : ce("", !0)
      ], 8, ["to", "disabled"]))
    ], 512));
  }
}), Bd = /* @__PURE__ */ on(qd, [["__scopeId", "data-v-50e58ba3"]]), jd = ["id", "name", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Ud = ["disabled", "selected"], Gd = {
  key: 0,
  value: " "
}, Wd = ["hidden", "value", "disabled"], zd = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = K(!0), s = K(null), u = A(() => t.options.map((c) => ({
      value: c.value,
      label: c.label?.toUpperCase() ?? c.value?.toString()?.toUpperCase(),
      hidden: c.hidden ?? !1,
      disabled: c.disabled ?? !1
    }))), {
      handleSelectChange: r
    } = Od({
      props: t,
      emit: a,
      isMounted: i
    });
    return (c, f) => (F(), Z("select", Ht(c.$attrs, {
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
      (...h) => T(r) && T(r)(...h))
    }), [
      be("option", {
        value: "",
        disabled: t.selectFirstOptionDisabled,
        selected: !t.value
      }, we(t.text?.select?.toUpperCase() ?? "SELECT"), 9, Ud),
      t.multiEdit ? (F(), Z("option", Gd, we(t.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : ce("", !0),
      (F(!0), Z(Ot, null, Jt(u.value, (h) => (F(), Z("option", {
        key: h.value,
        hidden: h.hidden,
        value: h.value,
        disabled: h.disabled
      }, we(h.label), 9, Wd))), 128))
    ], 16, jd));
  }
}), Kd = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "step", "autocomplete", "aria-label", "aria-invalid", "aria-describedby"], ni = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = K(!0), s = K(null), {
      handleInput: u,
      handleMouseDown: r,
      handleMouseUp: c,
      handleFocus: f,
      handleBlur: h,
      handleKeydown: C,
      handleCompositionStart: b,
      handleCompositionEnd: v,
      handlePaste: M
    } = Ld({
      props: t,
      emit: a,
      isMounted: i
    }), U = (de) => {
      const z = de.getBoundingClientRect(), _ = window.getComputedStyle(de);
      return z.width > 0 && z.height > 0 && _.display !== "none" && _.visibility !== "hidden";
    };
    return pn(() => {
      rt(t.default) && (t.value === void 0 || t.value === null) && a("update:value", t.default), t.focus && s.value && U(s.value) && _t(() => s.value.focus());
    }), ci(() => {
      i.value = !1;
    }), (de, z) => (F(), Z("input", Ht(de.$attrs, {
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
      onInput: z[0] || (z[0] = //@ts-ignore
      (..._) => T(u) && T(u)(..._)),
      onFocus: z[1] || (z[1] = //@ts-ignore
      (..._) => T(f) && T(f)(..._)),
      onBlur: z[2] || (z[2] = //@ts-ignore
      (..._) => T(h) && T(h)(..._)),
      onKeydown: z[3] || (z[3] = //@ts-ignore
      (..._) => T(C) && T(C)(..._)),
      onCompositionstart: z[4] || (z[4] = //@ts-ignore
      (..._) => T(b) && T(b)(..._)),
      onCompositionend: z[5] || (z[5] = //@ts-ignore
      (..._) => T(v) && T(v)(..._)),
      onPaste: z[6] || (z[6] = //@ts-ignore
      (..._) => T(M) && T(M)(..._)),
      onMousedown: z[7] || (z[7] = //@ts-ignore
      (..._) => T(r) && T(r)(..._)),
      onMouseup: z[8] || (z[8] = //@ts-ignore
      (..._) => T(c) && T(c)(..._))
    }), null, 16, Kd));
  }
}), Hd = ["data-field-id"], Zd = {
  key: 0,
  class: "input-label-group"
}, Jd = {
  key: 1,
  class: "password-input-wrapper"
}, Qd = ["aria-label"], Yd = {
  key: 2,
  class: "clearable-input-wrapper"
}, Xd = ["aria-label"], ef = ["disabled", "selected"], tf = {
  key: 0,
  value: " "
}, nf = ["hidden", "value", "disabled"], af = ["id", "name", "value", "disabled"], sf = {
  key: 7,
  class: "slider-wrapper"
}, of = ["id", "name", "value", "min", "max", "step", "disabled", "readonly"], lf = ["for"], rf = {
  key: 8,
  class: "clearable-input-wrapper clearable-input-wrapper--textarea"
}, uf = ["id", "name", "value", "placeholder", "disabled", "readonly", "required", "rows", "autocomplete"], cf = ["aria-label"], df = ["id", "name", "value", "placeholder", "disabled", "readonly", "required", "rows", "autocomplete"], ff = {
  key: 2,
  class: "help-text"
}, pf = /* @__PURE__ */ vt({
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
    const t = n, a = e, i = K(null), s = K(null), u = K(!0), r = K(a.numberFormat), c = K(!1), f = A(() => a.custom ? "custom-" + a.id : a.id), h = A(() => `${f.value}-error`), C = A(() => a.label || a.placeholder), b = A(() => Re(a.type, a.numberFormat, c.value)), v = A(() => W(a.type, a.numberFormat)), M = A(() => typeof a.value == "string" && a.value.length > 0), U = A(() => M.value ? wo(a.value) : "#ffffff"), de = (te) => {
      const ke = te.target.value;
      t("update:value", wo(ke));
    }, z = () => {
      t("update:value", null);
    }, _ = A(() => {
      const te = a.value;
      if (typeof te == "number" && Number.isFinite(te)) return te;
      const ke = parseFloat(te);
      return Number.isFinite(ke) ? ke : typeof a.min == "number" ? a.min : 0;
    }), me = (te) => {
      const ke = te.target.value, Ve = parseFloat(ke);
      t("update:value", Number.isFinite(Ve) ? Ve : null);
    }, ge = A(() => ["string", "integer", "float", "unitDependent", "password", "email", "tel"].includes(a.type)), w = A(() => a.value !== null && a.value !== void 0 && a.value !== "");
    function D() {
      const te = ge.value && ["integer", "float", "unitDependent"].includes(a.type) ? null : "";
      t("update:value", te);
    }
    const ie = A(() => {
      let te = a.value;
      if (a.multiEdit && (te === 0 || te === 1)) return null;
      if (a.type !== "unitDependent" || !te) return te;
      try {
        return ue({ v: te, nf: a.numberFormat });
      } catch {
        return a.numberFormat === "decimal" ? 0 : "0";
      }
    }), le = A(() => a.options.map((te) => ({
      value: te.value,
      label: te.label || te.value?.toString(),
      hidden: te.hidden || !1,
      disabled: te.disabled || !1
    }))), j = A(() => le.value.map((te) => {
      const ke = te.label ? Te(te.label) : te.value?.toString();
      return {
        ...te,
        // Translate the label key first, then uppercase the translated result
        label: ke?.toUpperCase() || te.value?.toString().toUpperCase()
      };
    })), P = A(() => ({
      input: !0,
      issue: a.issue || !u.value,
      warning: a.warning,
      required: a.required,
      disabled: a.disabled
    })), R = A(() => ({
      id: f.value,
      name: a.name,
      value: a.value,
      disabled: a.disabled,
      readonly: a.readonly,
      required: a.required,
      "aria-label": C.value,
      "aria-invalid": !!a.issue,
      "aria-describedby": a.issue ? h.value : void 0
    })), re = A(() => ({
      ...R.value,
      type: a.type,
      inputMode: v.value,
      inputType: b.value,
      placeholder: a.placeholder,
      allowZero: a.allowZero,
      min: a.min,
      max: a.max,
      focus: a.focus,
      numberFormat: a.numberFormat,
      default: a.default,
      disableRequiredValidation: a.disableRequiredValidation,
      autocomplete: a.autocomplete
    })), se = A(() => ({
      ...R.value,
      trueValue: a.trueValue,
      falseValue: a.falseValue
    })), oe = A(() => ({
      ...R.value,
      options: j.value,
      selectFirstOptionDisabled: a.selectFirstOptionDisabled,
      multiEdit: a.multiEdit,
      numberFormat: a.numberFormat,
      text: a.text,
      output: a.output
    })), Ke = A(() => (a.text?.select || "SELECT").toUpperCase()), et = A(() => (a.text?.delete || "DELETE").toUpperCase()), Pe = (te) => {
      s.value = te;
    }, Fe = (te) => a.label && a.enableLabel && a.labelPosition === te, Re = (te, ke, Ve) => {
      switch (te) {
        case "integer":
        case "float":
          return "number";
        case "unitDependent":
          return ke === "fraction" ? "text" : "number";
        case "password":
          return Ve ? "text" : "password";
        case "email":
          return "email";
        case "tel":
          return "tel";
        default:
          return "text";
      }
    }, W = (te, ke) => {
      if (te === "unitDependent")
        return ke === "fraction" ? "text" : "decimal";
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
    }, ye = (te, ke) => {
      te.valid === void 0 || te.valid === !0 ? (u.value = !0, t("validation", i.value, te)) : te.valid === !1 && te.message && (u.value = !1, console.warn(`Field validation error for field ${ke} - ${te.message}`), t("validation", i.value, te));
    }, qe = () => {
      t("blur");
    };
    return Je(() => a.numberFormat, (te, ke) => {
      if (a.shouldConvertNumberFormat !== !1) {
        if (a.type === "unitDependent" && te !== ke && a.value !== null && a.value !== void 0 && a.value !== "")
          try {
            const Ve = ue({ v: a.value, nf: te });
            t("update:value", Ve);
          } catch {
            t("update:value", te === "decimal" ? 0 : "0");
          }
        r.value = te;
      }
    }), (te, ke) => (F(), Z("div", {
      ref_key: "fieldRef",
      ref: i,
      class: ut(["input-wrapper", [P.value, te.$attrs.class]]),
      "data-field-id": f.value
    }, [
      e.type === "checkbox" ? (F(), Z("div", Zd, [
        Fe("first") ? (F(), Me(Pa, {
          key: 0,
          id: f.value,
          label: e.label,
          required: e.required
        }, {
          default: nn(() => [
            Zt(te.$slots, "label", {}, () => [
              an(we(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ce("", !0),
        e.type === "checkbox" ? (F(), Me(Ad, Ht({
          key: 1,
          ref: Pe,
          type: "checkbox"
        }, se.value, {
          value: e.value,
          "onUpdate:value": ke[0] || (ke[0] = (Ve) => t("update:value", Ve))
        }), null, 16, ["value"])) : ce("", !0),
        Fe("last") ? (F(), Me(Pa, {
          key: 2,
          id: f.value,
          label: e.label,
          required: e.required
        }, {
          default: nn(() => [
            Zt(te.$slots, "label", {}, () => [
              an(we(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ce("", !0)
      ])) : (F(), Z(Ot, { key: 1 }, [
        Fe("first") ? (F(), Me(Pa, {
          key: 0,
          id: f.value,
          label: e.label,
          required: e.required
        }, {
          default: nn(() => [
            Zt(te.$slots, "label", {}, () => [
              an(we(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ce("", !0),
        e.type === "password" ? (F(), Z("div", Jd, [
          ot(ni, Ht({ ref: Pe }, re.value, {
            name: a.name,
            "input-type": b.value,
            "input-mode": v.value,
            value: ie.value,
            "disable-required-validation": e.disableRequiredValidation,
            onValidation: ye,
            "onUpdate:value": J,
            onBlur: qe
          }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"]),
          be("button", {
            type: "button",
            class: "password-toggle c-btn--unstyled",
            "aria-label": c.value ? "Hide password" : "Show password",
            onClick: ke[1] || (ke[1] = (Ve) => c.value = !c.value)
          }, we(c.value ? "🙈" : "👁"), 9, Qd)
        ])) : ge.value && e.clearable ? (F(), Z("div", Yd, [
          ot(ni, Ht({ ref: Pe }, re.value, {
            name: a.name,
            "input-type": b.value,
            "input-mode": v.value,
            value: ie.value,
            "disable-required-validation": e.disableRequiredValidation,
            onValidation: ye,
            "onUpdate:value": J,
            onBlur: qe
          }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"]),
          w.value && !e.disabled && !e.readonly ? (F(), Z("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--xs c-btn--unstyled field-clear-btn clearable-input__clear",
            "aria-label": T(Te)("actions.clear"),
            title: "Clear",
            onClick: D
          }, "×", 8, Xd)) : ce("", !0)
        ])) : ge.value ? (F(), Me(ni, Ht({
          key: 3,
          ref: Pe
        }, re.value, {
          name: a.name,
          "input-type": b.value,
          "input-mode": v.value,
          value: ie.value,
          "disable-required-validation": e.disableRequiredValidation,
          onValidation: ye,
          "onUpdate:value": J,
          onBlur: qe
        }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"])) : e.type === "select" ? (F(), Me(zd, Ht({
          key: 4,
          ref: Pe
        }, oe.value, {
          name: a.name,
          "onUpdate:value": ke[2] || (ke[2] = (Ve) => t("update:value", Ve))
        }), {
          default: nn(() => [
            be("option", {
              value: "",
              disabled: e.selectFirstOptionDisabled,
              selected: !e.value
            }, we(Ke.value), 9, ef),
            e.multiEdit ? (F(), Z("option", tf, we(et.value), 1)) : ce("", !0),
            (F(!0), Z(Ot, null, Jt(j.value, (Ve) => (F(), Z("option", {
              key: Ve.value,
              hidden: Ve.hidden,
              value: Ve.value,
              disabled: Ve.disabled
            }, we(Ve.label), 9, nf))), 128))
          ]),
          _: 1
        }, 16, ["name"])) : e.type === "multiselect" ? (F(), Me(Bd, {
          key: 5,
          ref: Pe,
          id: f.value,
          name: a.name,
          value: e.value,
          options: le.value,
          disabled: e.disabled,
          readonly: e.readonly,
          "aria-label": C.value,
          placeholder: e.placeholder,
          searchable: a.searchable,
          "onUpdate:value": ke[3] || (ke[3] = (Ve) => t("update:value", Ve))
        }, null, 8, ["id", "name", "value", "options", "disabled", "readonly", "aria-label", "placeholder", "searchable"])) : e.type === "color" ? (F(), Z("input", {
          key: 6,
          id: f.value,
          name: a.name || f.value,
          ref: Pe,
          type: "color",
          value: U.value,
          class: ut({ "color-input--empty": !M.value }),
          disabled: e.disabled,
          onChange: de,
          onContextmenu: Hn(z, ["prevent"])
        }, null, 42, af)) : e.type === "slider" ? (F(), Z("div", sf, [
          be("input", {
            id: f.value,
            name: a.name || f.value,
            ref: Pe,
            type: "range",
            class: "slider-input",
            value: _.value,
            min: a.min ?? 0,
            max: a.max ?? 100,
            step: a.step ?? 1,
            disabled: e.disabled,
            readonly: e.readonly,
            onInput: me
          }, null, 40, of),
          be("output", {
            class: "slider-output",
            for: f.value
          }, we(_.value), 9, lf)
        ])) : e.type === "textarea" && e.clearable ? (F(), Z("div", rf, [
          be("textarea", {
            id: f.value,
            name: a.name || f.value,
            ref: Pe,
            value: e.value,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            rows: e.rows,
            autocomplete: e.autocomplete,
            onInput: ke[4] || (ke[4] = (Ve) => t("update:value", Ve.target.value)),
            onBlur: qe
          }, null, 40, uf),
          w.value && !e.disabled && !e.readonly ? (F(), Z("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--xs c-btn--unstyled field-clear-btn clearable-input__clear",
            "aria-label": T(Te)("actions.clear"),
            title: "Clear",
            onClick: D
          }, "×", 8, cf)) : ce("", !0)
        ])) : e.type === "textarea" ? (F(), Z("textarea", {
          key: 9,
          id: f.value,
          name: a.name || f.value,
          ref: Pe,
          value: e.value,
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: e.readonly,
          required: e.required,
          rows: e.rows,
          autocomplete: e.autocomplete,
          onInput: ke[5] || (ke[5] = (Ve) => t("update:value", Ve.target.value)),
          onBlur: qe
        }, null, 40, df)) : ce("", !0),
        Fe("last") ? (F(), Me(Pa, {
          key: 10,
          id: f.value,
          label: e.label,
          required: e.required
        }, {
          default: nn(() => [
            Zt(te.$slots, "label", {}, () => [
              an(we(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ce("", !0)
      ], 64)),
      e.info ? (F(), Z("small", ff, we(e.info), 1)) : ce("", !0),
      Zt(te.$slots, "default", {}, void 0, !0)
    ], 10, Hd));
  }
}), Ia = /* @__PURE__ */ on(pf, [["__scopeId", "data-v-0c816cd2"]]), mf = {
  key: 0,
  class: "loading-spinner__label"
}, gf = /* @__PURE__ */ vt({
  __name: "LoadingSpinner",
  props: {
    size: { default: "medium" },
    label: { default: "" },
    block: { type: Boolean, default: !1 },
    fullPage: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (n, t) => (F(), Z("div", {
      class: ut(["loading-spinner", [
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
      e.label ? (F(), Z("span", mf, we(e.label), 1)) : ce("", !0)
    ], 2));
  }
}), il = /* @__PURE__ */ on(gf, [["__scopeId", "data-v-ef6d8370"]]), hf = {
  key: 0,
  class: "action-bar"
}, vf = { class: "add-custom" }, bf = ["disabled"], yf = {
  key: 0,
  class: "extras-row"
}, kf = { class: "c-field-action extras-field-group" }, wf = ["disabled", "title", "onClick"], Sf = {
  key: 0,
  class: "price"
}, xf = {
  key: 0,
  class: "formula-price"
}, Pf = {
  key: 0,
  class: "price-label"
}, If = /* @__PURE__ */ vt({
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
    const t = jt({
      loader: () => import("./CatalogueBandingExtra-COWjwRTD.js"),
      loadingComponent: () => Lr(il, { size: "small", label: "Loading banding…" }),
      delay: 200
    }), a = jt(() => import("./ObjectViewer-C89c1lhH.js")), i = !1, s = e, u = A(() => (s.extraType === "banding" || s.extraType === "finish" || s.extraType === "planing") && !!s.catalogueKey), r = n, {
      mode: c,
      shouldShowAll: f,
      supportsFaces: h,
      supportsSides: C,
      canDelete: b,
      getLocationLabel: v,
      getInputType: M,
      getInputConfigForLocation: U,
      getSelectOptions: de,
      getPriceDisplay: z,
      getCalculatedPrice: _,
      shouldShowDeleteButton: me,
      getLocationGroup: ge,
      isLocationVisible: w,
      handleInputChange: D,
      handleDelete: ie
    } = rc({
      shape: zt(s, "shape"),
      extraType: s.extraType,
      allOptions: zt(s, "allOptions"),
      labels: s.labels,
      userFriendlyFieldMap: s.userFriendlyFieldMap,
      allowCustomNames: s.allowCustomNames,
      customNames: zt(s, "customNames"),
      enablePricing: s.enablePricing,
      pricing: s.pricing,
      displayNames: zt(s, "displayNames"),
      orientationModel: s.orientationModel,
      stockGrain: s.stockGrain,
      getAvailablePricingOptions: s.getAvailablePricingOptions,
      getPrice: s.getPrice,
      formatPrice: s.formatPrice,
      findExtrasPrice: s.findExtrasPrice,
      locations: zt(s, "locations"),
      locationGroups: zt(s, "locationGroups")
    }), {
      newCustomName: le,
      canAddCustomName: j,
      isActionMenuDisabled: P,
      customNameActions: R,
      handleAddCustomName: re,
      handleCustomNameAction: se
    } = oc({
      extraType: s.extraType,
      customNames: zt(s, "customNames"),
      usedNames: zt(s, "usedNames"),
      allowCustomNames: s.allowCustomNames,
      getSelectOptions: de,
      onCustomNameAdded: (Y) => r("custom-name-added", s.extraType, Y),
      onCustomNameDeleted: (Y) => r("custom-name-deleted", s.extraType, Y)
    }), {
      renderLocations: oe,
      getInputId: Ke,
      getDeleteConfig: et
    } = lc({
      extraType: s.extraType,
      allOptions: s.allOptions,
      labels: s.labels,
      shapeIndex: s.shapeIndex || 0,
      enablePricing: s.enablePricing,
      shouldShowAll: f,
      getInputType: M,
      getInputConfig: (Y, Le) => U(Y, Le),
      getAllInputConfig: (Y) => U("all", Y),
      getInputConfigForLocation: U,
      canDelete: b,
      getLocationLabel: v,
      shouldShowDeleteButton: me,
      locations: zt(s, "locations"),
      locationGroups: zt(s, "locationGroups"),
      shape: zt(s, "shape"),
      orientationModel: s.orientationModel
    }), Pe = K(!1), Fe = K(null), Re = K("auto"), W = A(() => `${oe.value.filter((Le) => w(Le)).map((Le) => v(Le)).join("|")}::${JSON.stringify(s.allOptions)}`), J = (Y) => [...Y.querySelectorAll(":scope > .c-field-action > .input-wrapper")], ye = async () => {
      const Y = Fe.value;
      if (!Y) return;
      const Le = [...Y.querySelectorAll(".extras-row")];
      Re.value = "auto", Le.forEach((tt) => J(tt).forEach((ft) => ft.style.removeProperty("--col-w"))), await _t();
      let He = 0;
      Y.querySelectorAll(".extras-location-label").forEach((tt) => {
        He = Math.max(He, tt.offsetWidth);
      }), He > 0 && (Re.value = `${Math.ceil(He)}px`);
      const Ee = [], it = Le.map(J);
      it.forEach((tt) => tt.forEach((ft, pt) => {
        Ee[pt] = Math.max(Ee[pt] ?? 0, ft.offsetWidth);
      })), it.forEach((tt) => tt.forEach((ft, pt) => {
        ft.style.setProperty("--col-w", `${Math.ceil(Ee[pt])}px`);
      }));
    };
    Je(W, () => {
      ye();
    }, { flush: "post" });
    const qe = A(() => (Y) => {
      const Le = ge(Y);
      return Le === "all" || Le === "faces" || Le === "sides";
    }), te = A(() => (Y) => la(s.extraType).includes(Y) ? Ca(Y) === "face" : !1), ke = A(() => (Y) => la(s.extraType).includes(Y) ? Ca(Y) === "side" : !1), Ve = (Y) => {
      const Le = z(Y);
      return !!Le && Le !== "N/A";
    };
    function kt(Y) {
      const He = s.shape?.extras?.[s.extraType];
      if (!He) return null;
      if (Y.startsWith("side.")) {
        const Ee = Y.replace(/^side\./, ""), it = He.sides?.[Ee];
        return typeof it == "string" && it ? it : null;
      }
      if (Y.startsWith("face.")) {
        const Ee = Y.replace(/^face\./, ""), it = He.faces?.[Ee];
        return typeof it == "string" && it ? it : null;
      }
      return null;
    }
    const ct = (Y) => {
      const Le = kt(Y);
      if (!Le) return null;
      const He = s.formulas?.[Le];
      if (!He) return null;
      const Ee = Number(s.shape?.l) || 0, it = Number(s.shape?.w) || 0, tt = Number(s.shape?.t) || 0, ft = Number(s.shape?.q) || 1, pt = { partL: Ee, partW: it, partT: tt, partQuantity: ft }, mt = {}, mn = s.extraType === "banding" ? Yc : s.extraType === "finish" ? ad : s.extraType === "planing" ? rd : [];
      for (const st of mn)
        st.startsWith("order.") && (mt[st] = 0);
      if (s.extraType === "banding" && Y.startsWith("side.")) {
        const st = Y.replace(/^side\./, "");
        return jc(Gc(st, st === "l1" || st === "l2" ? Ee : it, pt, mt), He);
      }
      if (s.extraType === "finish" && Y.startsWith("face.")) {
        const st = Y.replace(/^face\./, "");
        return Uc(Wc(st, Ee * it, pt, mt), He);
      }
      if (s.extraType === "planing") {
        if (Y.startsWith("face.")) {
          const st = Y.replace(/^face\./, "");
          return bo(yo(`face.${st}`, Ee * it, 0, 1, pt, mt), He);
        }
        if (Y.startsWith("side.")) {
          const st = Y.replace(/^side\./, ""), rn = st === "l1" || st === "l2" ? Ee : it;
          return bo(yo(`side.${st}`, 0, rn, 0, pt, mt), He);
        }
      }
      return null;
    }, Yt = (Y) => {
      const Le = ct(Y);
      return typeof Le == "number" && Number.isFinite(Le);
    }, lt = (Y) => s.formatPrice ? s.formatPrice(Y) : Y.toFixed(2), ln = (Y) => {
      const Le = _(Y);
      return typeof Le == "number" && Number.isFinite(Le) ? Le : void 0;
    }, Xt = (Y) => {
      if (la(s.extraType).includes(Y))
        return no(s.shape, Y).quantity;
    }, xn = (Y) => la(s.extraType).includes(Y) ? no(s.shape, Y).unit : "m", dt = A(() => (Y) => s.shape.issues?.some((Le) => Le.category?.includes("extras") && Le.field?.some((He) => He[0] === "extras" && He[1] === s.extraType && He[2] === Y)) ?? !1);
    return pn(() => {
      const Le = s.shape.extras?.[s.extraType];
      if (!Le || typeof Le != "object") {
        Pe.value = !0, console.error(`Missing or invalid ${s.extraType} in shape`);
        return;
      }
      if (h.value && !("faces" in Le)) {
        Pe.value = !0, console.error(`Missing faces property in ${s.extraType}`);
        return;
      }
      if (C.value && !("sides" in Le)) {
        Pe.value = !0, console.error(`Missing sides property in ${s.extraType}`);
        return;
      }
      ye();
    }), (Y, Le) => {
      const He = da("Icon");
      return Pe.value ? ce("", !0) : (F(), Z("div", {
        key: 0,
        class: ut(["extras group", [e.extraType]]),
        style: Wt({ "grid-column-end": "span " + e.partColumns })
      }, [
        e.allowCustomNames ? (F(), Z("div", hf, [
          be("div", vf, [
            ot(ni, {
              id: `${e.extraType}-custom-input-${e.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: T(le),
              placeholder: `Add ${e.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": Le[0] || (Le[0] = (Ee) => le.value = Ee || ""),
              onKeydown: $o(T(re), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            be("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !T(j),
              onClick: Le[1] || (Le[1] = //@ts-ignore
              (...Ee) => T(re) && T(re)(...Ee))
            }, " Add ", 8, bf)
          ]),
          ot(gd, {
            "menu-items": T(R),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: T(P),
            onAction: T(se)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : ce("", !0),
        u.value ? (F(), Me(T(t), {
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
        }, null, 8, ["shape", "shape-index", "extra-type", "catalogue-key", "extra-id", "extra-name", "locations", "price-per-length", "pricing", "price-label", "format-price", "max-gap", "per-side", "orientation-model", "debug"])) : (F(), Z("div", {
          key: 2,
          ref_key: "gridRef",
          ref: Fe,
          class: ut(["inputs extras-grid grid-layout", { "has-pricing": e.enablePricing }]),
          style: Wt({ "--extras-label-w": Re.value })
        }, [
          (F(!0), Z(Ot, null, Jt(T(oe), (Ee) => (F(), Z(Ot, { key: Ee }, [
            T(w)(Ee) ? (F(), Z("div", yf, [
              be("div", kf, [
                be("label", {
                  class: ut(["extras-location-label", {
                    "group-label": qe.value(Ee),
                    "face-label": te.value(Ee),
                    "side-label": ke.value(Ee),
                    "has-validation-issue": dt.value(Ee)
                  }])
                }, we(T(v)(Ee)), 3),
                (F(!0), Z(Ot, null, Jt(e.allOptions, (it, tt) => (F(), Me(Ia, Ht({
                  key: `${Ee}-${tt}`,
                  id: T(Ke)(Ee, tt),
                  "data-field": `${e.extraType}-${Ee}`,
                  "data-index": e.shapeIndex,
                  "data-option-index": tt
                }, { ref_for: !0 }, T(U)(Ee, tt), {
                  "onUpdate:value": (ft) => T(D)(Ee, tt, ft)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"]))), 128)),
                T(et)(Ee).show ? (F(), Z("button", {
                  key: 0,
                  type: "button",
                  class: "c-btn c-btn--delete",
                  disabled: !T(et)(Ee).enabled,
                  title: T(et)(Ee).ariaLabel,
                  onClick: (it) => T(ie)(Ee)
                }, [
                  ot(He, { icon: ["fass", "trash"] })
                ], 8, wf)) : ce("", !0)
              ]),
              e.enablePricing ? (F(), Z("div", Sf, [
                Yt(Ee) ? (F(), Z("span", xf, [
                  an(we(lt(ct(Ee))), 1),
                  e.priceLabel ? (F(), Z("span", Pf, we(e.priceLabel), 1)) : ce("", !0)
                ])) : Ve(Ee) ? (F(), Me(xd, {
                  key: 1,
                  "price-per-unit": ln(Ee),
                  quantity: Xt(Ee),
                  "quantity-unit": xn(Ee),
                  "price-label": e.priceLabel,
                  "format-price": s.formatPrice
                }, null, 8, ["price-per-unit", "quantity", "quantity-unit", "price-label", "format-price"])) : ce("", !0)
              ])) : ce("", !0)
            ])) : ce("", !0)
          ], 64))), 128))
        ], 6)),
        s.debug || i ? (F(), Me(T(a), {
          key: 3,
          title: `${e.extraType} debug`,
          data: [{
            extraType: e.extraType,
            mode: T(c),
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
        }, null, 8, ["title", "data", "paths"])) : ce("", !0)
      ], 6));
    };
  }
}), Cf = /* @__PURE__ */ on(If, [["__scopeId", "data-v-d50e6e8d"]]);
function qt(e) {
  return typeof e == "string" && e.trim().length > 0 ? e.trim() : "";
}
function Lf(e) {
  const t = (Array.isArray(e.availableThicknesses) && e.availableThicknesses.length > 0 ? e.availableThicknesses : Array.isArray(e.t) ? e.t : e.t != null ? [e.t] : []).map((a) => typeof a == "number" ? a : Number(a)).filter((a) => Number.isFinite(a));
  return [...new Set(t)].sort((a, i) => a - i);
}
function sl(e, n, t, a, i) {
  const s = [], f = (!!i && !!e && e.toUpperCase() === i.toUpperCase() ? "" : e) || (n && !!i ? "" : a);
  if (n && s.push(n), f) {
    const h = n.toLowerCase(), C = f.toLowerCase();
    n && h.includes(C) || (n && C.startsWith(h + " ") ? s.push(f.slice(n.length).trimStart()) : s.push(f));
  }
  if (t) {
    const h = t.toLowerCase(), C = h.split(/\s+/)[0] ?? "", b = `${n} ${f}`.toLowerCase();
    !(b.includes(h) || C && b.split(/\s+/).includes(C)) && (f || n) && s.push(t);
  }
  return s;
}
function Of(e, n, t, a, i, s, u, r) {
  const c = [];
  n && c.push(n);
  const f = sl(e, t, a, i, s);
  for (const h of f)
    (!n || !n.toLowerCase().includes(h.toLowerCase())) && c.push(h);
  return c.length > 0 ? c.join(" ") : u || r;
}
function Ef(e, n, t, a, i, s, u) {
  const r = sl(e, n, t, a, i);
  return r.length > 0 ? r.join(" ") : s || u;
}
function ca(e, n = {}) {
  const t = n.fallback ?? "(unnamed)";
  if (!e)
    return {
      name: t,
      fullLabel: t,
      productLabel: t,
      groupKey: "",
      thicknesses: []
    };
  const a = qt(e.name), i = qt(e.brand) || qt(n.inheritFrom?.brand), s = qt(e.material) || qt(n.inheritFrom?.material), u = qt(e.variant) || qt(n.inheritFrom?.variant), r = qt(e.finish), c = qt(e.code), f = qt(e.displayName), h = [i, s].filter(Boolean).join(" · ");
  let C;
  h && u ? C = `${h} → ${u}` : h ? C = h : u && (C = u);
  let b;
  a ? b = a : c ? b = c : u && !s && !i ? b = u : s && !u ? b = s : i && !u && !s ? b = i : b = t;
  const v = Of(
    a,
    i,
    u,
    r,
    s,
    c,
    f,
    t
  ), M = Ef(
    a,
    u,
    r,
    s,
    c,
    f,
    t
  ), U = (() => {
    if (c && !(!a && c.toUpperCase() === b.toUpperCase()) && c.toUpperCase() !== M.toUpperCase())
      return c;
  })(), de = `${i.toUpperCase()}|${u.toUpperCase()}|${(a || s).toUpperCase()}`, z = qt(e.shortDescription) || qt(e.description) || void 0, _ = qt(e.imageUrl) || void 0;
  return {
    hierarchy: C,
    name: b,
    code: U,
    fullLabel: v,
    productLabel: M,
    groupKey: de,
    brand: i || void 0,
    material: s || void 0,
    variant: u || void 0,
    finish: r || void 0,
    description: z,
    imageUrl: _,
    thicknesses: Lf(e)
  };
}
let Ut = null;
function Tf(e, n) {
  return Ut = Ff(e, n), Ut;
}
function Af(e) {
  if (!Ut) throw new Error("Pagination not initialized");
  return {
    items: A(() => Ut.getItems(e)),
    currentPage: A(() => Ut.getCurrentPage(e)),
    currentIndex: A(() => Ut.getCurrentIndex(e)),
    totalPages: A(() => Ut.paginatedArrays.value.get(e)?.totalPages || 0),
    itemsPerPage: A(() => Ut.getItemsPerPage(e)),
    resetPagination: () => Ut.resetPagination(e),
    nextPage: () => Ut.nextPage(e),
    previousPage: () => Ut.previousPage(e),
    goToPage: (n) => Ut.goToPage(e, n),
    setItemsPerPage: (n) => Ut.setItemsPerPage(e, n)
  };
}
function sh(e, n) {
  const t = Af(e);
  return t.setItemsPerPage(n), t;
}
function Ff(e, n) {
  const t = /* @__PURE__ */ new Map(), a = K({}), i = (w, D) => {
    if ("value" in D) {
      const ie = n[w]?.alwaysInclude;
      Je(
        () => {
          const le = D.value;
          return ie ? le.filter((j) => !ie(j)).length : le.length;
        },
        (le, j) => {
          const P = a.value[w];
          if (!P) return;
          const R = Math.ceil(le / P.itemsPerPage);
          if (le > j) {
            const re = Math.ceil(le / P.itemsPerPage), se = P.currentPage * P.itemsPerPage;
            le > se && P.currentPage < re && (P.currentPage = re);
          } else le < j && P.currentPage > R && (P.currentPage = Math.max(1, R));
        },
        { immediate: !1 }
      );
    }
  };
  Object.entries(e).forEach(([w, D]) => {
    const ie = n[w];
    if (!ie)
      throw new Error(`Missing pagination options for array: ${w}`);
    t.set(w, D), a.value[w] = {
      currentPage: ie.initialPage || 1,
      itemsPerPage: ie.itemsPerPage
    }, i(w, D);
  });
  const s = (w, D) => {
    const ie = a.value[w];
    if (!ie) return;
    const le = u(w);
    ie.currentPage = Math.max(1, Math.min(D, le));
  }, u = (w) => {
    const D = t.get(w);
    if (!D) return 0;
    const ie = T(D), le = a.value[w];
    if (!le) return 0;
    const j = n[w], P = j?.alwaysInclude ? ie.filter((R) => !j.alwaysInclude(R)) : ie;
    return Math.max(1, Math.ceil(P.length / le.itemsPerPage));
  }, r = A(() => {
    const w = /* @__PURE__ */ new Map();
    return t.forEach((D, ie) => {
      const le = T(D), j = Array.isArray(le) ? le : [], P = a.value[ie], R = n[ie], re = R?.alwaysInclude ? j.filter(R.alwaysInclude) : [], se = R?.alwaysInclude ? j.filter((Fe) => !R.alwaysInclude(Fe)) : j, oe = Math.ceil(se.length / P.itemsPerPage), Ke = (P.currentPage - 1) * P.itemsPerPage, et = Ke + P.itemsPerPage, Pe = [
        ...re,
        ...se.slice(Ke, et)
      ];
      w.set(ie, {
        items: Pe,
        currentPage: P.currentPage,
        totalPages: oe,
        isLastPage: P.currentPage >= oe,
        hasNextPage: P.currentPage < oe,
        hasPreviousPage: P.currentPage > 1
      });
    }), w;
  });
  return {
    paginatedArrays: r,
    addArray: (w, D, ie) => {
      t.set(w, D), a.value[w] = {
        currentPage: ie.initialPage || 1,
        itemsPerPage: ie.itemsPerPage
      }, n[w] = ie, i(w, D);
    },
    removeArray: (w) => {
      t.delete(w);
      const D = { ...a.value };
      delete D[w], a.value = D;
    },
    hasArray: (w) => t.has(w),
    clearArrays: () => {
      t.clear(), a.value = {};
    },
    goToPage: s,
    nextPage: (w) => {
      const D = a.value[w];
      D && s(w, D.currentPage + 1);
    },
    previousPage: (w) => {
      const D = a.value[w];
      D && s(w, D.currentPage - 1);
    },
    resetPagination: (w) => {
      if (w) {
        const D = a.value[w];
        D && (D.currentPage = 1);
      } else
        Object.values(a.value).forEach((D) => {
          D.currentPage = 1;
        });
    },
    getCurrentPage: (w) => a.value[w]?.currentPage || 1,
    getCurrentIndex: (w) => {
      const D = a.value[w];
      return D ? (D.currentPage - 1) * D.itemsPerPage : 0;
    },
    getItemsPerPage: (w) => {
      const D = a.value[w];
      if (!D) throw new Error(`No pagination state found for key: ${w}`);
      return D.itemsPerPage;
    },
    setItemsPerPage: (w, D) => {
      const ie = a.value[w];
      ie && (ie.itemsPerPage = D, s(w, ie.currentPage));
    },
    getStartIndex: (w) => {
      const D = a.value[w];
      return D ? (D.currentPage - 1) * D.itemsPerPage : 0;
    },
    getItems: (w) => r.value.get(w)?.items || []
  };
}
const xo = K({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function ol() {
  return {
    progress: xo,
    reset: () => {
      xo.value = {
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
let Ka = null;
function Nf() {
  const e = K(null), n = K(null), t = K(null), a = aa([]), i = aa([]), s = aa([]), u = aa([]), r = K([]), c = K(null), f = aa([]), h = K(null), C = K(null), b = K({});
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
    currentCutIndex: h,
    activeShape: C,
    cuttingPlans: b,
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
      currentCutIndex: h,
      cuttingPlans: b
    }
  };
}
function $f() {
  if (Ka) return Ka;
  const e = Nf(), n = A(() => e.activeStockAutoId.value ? se(e.activeStockAutoId.value) : []), t = A(() => !e.activeStockAutoId.value || !e.stockList.value?.length ? null : re(e.activeStockAutoId.value)), a = A(() => !t.value || !e.cutList.value?.length ? [] : Ke(t.value.autoId)), i = A(() => !t.value || !e.segmentList.value?.length ? [] : oe(e.activeStockAutoId.value)), s = A(() => e.stockList.value?.length ? et(e.stockList.value) : []), u = A(() => e.shapeList.value.filter((W) => W.added)), r = A(() => e.shapeList.value?.length ? e.shapeList.value.filter((W) => !W.added) : []), c = A(() => e.shapeList.value?.length ? Mu(e.shapeList.value) : []), f = A(() => e.shapeList.value?.length ? e.shapeList.value.filter((W) => !W.duplicate) : []), h = A(() => f.value.filter((W) => W.added)), C = A(() => e.stockList.value?.length ? e.stockList.value.filter((W) => W.used && !W.duplicate) : []), b = A(() => C.value.filter((W) => W.used)), v = A(() => e.cutList.value?.length ? a.value.reduce((W, J) => W + J.area, 0) : 0), M = A(() => !e.stockList.value?.length || !t.value ? 0 : t.value ? t.value.area : 0), U = A(() => !e.shapeList.value?.length || !n.value ? 0 : n.value ? n.value.reduce((W, J) => W + J.area, 0) : 0), de = A(() => !e.cutList.value?.length || !t.value ? null : t.value.cutType), z = A(() => e.stockList.value?.length ? e.stockList.value.filter((J) => J.used && !J.isStacked) : []), _ = A(() => e.stockList.value?.length ? Zo(t.value, e.stockList.value) : 0), me = A(() => {
    if (!e.stockList.value?.length) return 0;
    let W = M.value ? (v.value + U.value) / M.value : null;
    return W > 1 && (W = 1), W;
  }), ge = A(() => e.activeStockAutoId.value && e.cuttingPlans.value?.[e.activeStockAutoId.value] || null), w = () => {
    e.saw.value = null, e.shapeList.value.length = 0, e.stockList.value.length = 0, e.cutList.value.length = 0, e.segmentList.value.length = 0, e.offcuts.value.length = 0, e.unusableShapes.value.length = 0, e.currentCutIndex.value = null;
  }, D = () => {
    e.saw.value = null, e.activeStockAutoId.value = null, e.activeShape.value = null, e.metadata.value = null, e.shapeList.value = [], e.stockList.value = [], e.cutList.value = [], e.segmentList.value = [], e.offcuts.value = [], e.currentCutIndex.value = null, e.unusableShapes.value = [], e.cuttingPlans.value = {};
  }, ie = (W, J) => {
    W in this && this[W]?.sort(Kr[J]);
  }, le = (W) => {
    nt(W);
  }, j = () => {
    nt(e.shapeList);
  }, P = () => {
    nt(e.stockList);
  }, R = (W) => {
    if (!W?.shapeList?.some((J) => J.added)) {
      D();
      return;
    }
    e.metadata.value = W.metadata, e.unusableShapes.value = W.unusableShapes || [];
    try {
      W?.saw && (e.saw.value = new Ki(W.saw));
      const J = zu(W, {
        preventAutoRotation: !0
      });
      e.stockList.value = J.stockList, e.shapeList.value = J.shapeList, e.cutList.value = J.cutList, e.segmentList.value = J.segmentList, e.offcuts.value = J.offcuts, e.cuttingPlans.value = W.cuttingPlans || {}, ["saw", "stockList", "shapeList", "cutList", "segmentList"].forEach((qe) => nt(e[qe])), e.activeStockAutoId.value = et(e.stockList.value)?.[0]?.autoId || null;
    } catch (J) {
      console.error("Error updating from result", J);
    }
  }, re = (W) => e.stockList.value?.length ? e.stockList.value.find((J) => J.autoId === W) : null, se = (W) => e.shapeList.value?.length ? e.shapeList.value.filter((J) => J.added && J?.stock?.autoId === W) : [], oe = (W) => e.segmentList.value?.length ? e.segmentList.value.filter((ye) => ye?.stock?.autoId === W) : [], Ke = (W) => {
    const J = e?.cutList?.value;
    return !J && !J.length ? [] : J.filter((ye) => ye?.stock?.autoId === W).sort((ye, qe) => ye?.guillotineState?.order - qe?.guillotineState?.order);
  }, et = (W) => W?.length ? W.filter((J) => J.used === !0) : [], Pe = (W) => {
    e.activeStockAutoId.value !== W && (e.activeShape.value = null, e.activeStockAutoId.value = W);
  }, Fe = (W) => W.id.endsWith(".0") ? W.autoId : e.shapeList.value.find((ye) => ye.parentId === W.parentId && ye.id.endsWith(".0"))?.autoId || W.autoId, Re = () => {
    e.saw.value = new Ki({
      bladeWidth: 3,
      stockType: "sheet",
      cutType: "beam",
      cutPreference: "l"
    });
    const W = {
      autoId: "1.0",
      l: 2440,
      w: 1220,
      t: 18,
      q: 1,
      used: !0
    }, J = new Hr(W), ye = new ao({
      l: 500,
      w: 500,
      t: 18,
      q: 1,
      x: 0,
      y: 0,
      added: !0,
      id: "1.0"
    });
    ye.addToStock(J);
    const qe = new ao({
      l: 400,
      w: 400,
      t: 18,
      q: 1,
      x: 500,
      y: 0,
      added: !0,
      id: "2.0"
    });
    qe.addToStock(J);
    const te = (ct) => ({
      ptxData: {
        function: 1,
        order: ct,
        isDummy: !1,
        isFirst: ct === 0,
        isLast: !1,
        technologyTable: "01"
      }
    }), Ve = [
      { x: 0, y: 0, l: 500, vertical: !0, stock: J, ...te(0) },
      { x: 500, y: 0, l: 500, vertical: !1, stock: J, ...te(1) },
      { x: 500, y: 500, l: 400, vertical: !0, stock: J, ...te(2) },
      { x: 900, y: 500, l: 400, vertical: !1, stock: J, ...te(3) }
    ].map((ct) => new Zr(ct)), kt = new Jr({
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
    e.stockList.value = [J], e.shapeList.value = [ye, qe], e.cutList.value = Ve, e.offcuts.value = [kt], e.activeStockAutoId.value = J.autoId;
  };
  return Ka = {
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
    uniqueAddedShapes: h,
    unplacedShapeTally: c,
    uniqueStock: C,
    uniqueUsedStock: b,
    activeStock: t,
    activeCuts: a,
    activeCutsArea: v,
    activeCutType: de,
    usedStock: s,
    stackedStock: z,
    activeStockArea: M,
    activeShapeArea: U,
    activeStockStackCount: _,
    activeTotalArea: me,
    activeSegments: i,
    cuttingPlan: ge,
    // methods
    reset: w,
    clear: D,
    createTestData: Re,
    sortItems: ie,
    update: le,
    updateShapes: j,
    updateStock: P,
    updateFromResult: R,
    getStock: re,
    getShapes: se,
    getSegments: oe,
    getCuts: Ke,
    setActiveStockAutoId: Pe,
    getInputAutoId: Fe
  }, Ka;
}
const Mf = Pu(() => $({
  // Full stock - purchase entire sheet without cutting (first field after ID)
  fullStock: yn(
    ae().default(!1),
    {
      label: "fields.fullStock",
      propertyPath: "fullStock",
      group: "properties",
      order: -1
    }
  ),
  // Material field
  material: yn(
    d().optional(),
    {
      label: "fields.material",
      placeholder: "fields.material",
      propertyPath: "material",
      output: "string",
      group: "properties",
      order: 0
    }
  ),
  // Thickness field
  t: yn(
    Qe([k(), d()]).optional(),
    {
      label: "fields.t",
      propertyPath: "t",
      group: "dimensions",
      order: 0,
      allowZero: !1
    }
  ),
  // Length field
  l: io({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !1
  }),
  // Width field
  w: io({
    label: "fields.w",
    placeholder: "fields.w",
    allowZero: !1
  }),
  // Quantity field
  q: yn(
    k().int().positive().default(1),
    {
      label: "fields.q",
      placeholder: "fields.q",
      propertyPath: "q",
      group: "general",
      order: 1,
      step: 1
    }
  ),
  // Name field
  name: Qr({
    placeholder: "fields.name"
  }),
  // Orientation lock field
  orientationLock: yn(
    sn(["n", "l", "w"]).default("n").optional(),
    {
      label: "fields.orientationLock",
      propertyPath: "orientationLock",
      group: "properties",
      order: 3,
      options: [
        { value: "n", label: "fields.orientationLock.free" },
        { value: "l", label: "fields.orientationLock.length" },
        { value: "w", label: "fields.orientationLock.width" }
      ]
    }
  ),
  // Banding button
  banding: yn(
    ae().default(!1),
    {
      label: "fields.banding",
      propertyPath: "banding",
      group: "extras",
      order: 0
    }
  ),
  // Finish options
  finish: yn(
    $({
      enabled: ae().default(!1),
      type: d().optional(),
      sides: k().optional()
    }).optional(),
    {
      label: "fields.finish",
      propertyPath: "finish",
      group: "extras",
      order: 2
    }
  ),
  // Machining options
  machining: yn(
    $({
      enabled: ae().default(!1),
      operations: ee(Se()).optional()
    }).optional(),
    {
      label: "fields.machining",
      propertyPath: "machining",
      group: "extras",
      order: 3
    }
  ),
  // Planing button
  planing: yn(
    ae().default(!1),
    {
      label: "fields.planing",
      propertyPath: "planing",
      group: "extras",
      order: 4
    }
  )
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
function Df(e) {
  const n = Mf._def.getter();
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
class _f {
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
    if (t instanceof ro) {
      const a = t._def?.options || [];
      for (const i of a)
        if (i instanceof ua)
          return this.isIntegerNumber(i) ? "integer" : "number";
    }
    return t instanceof ua ? this.isIntegerNumber(t) ? "integer" : "number" : t instanceof Iu ? "string" : t instanceof Cu ? "boolean" : t instanceof uo || t._def?.typeName === "ZodNativeEnum" ? "enum" : t instanceof Lu ? "array" : t instanceof Ga ? "object" : "string";
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
        const h = u._zod.def;
        r = h.check, c = h.value, f = h.inclusive !== void 0 ? h.inclusive : !0;
      } else
        continue;
      if (r === "min" || r === "greater_than")
        n.min === void 0 && (n.min = r === "greater_than" && !f ? c + 1e-6 : c, n.allowZero = n.min === 0);
      else if (r === "max" || r === "less_than")
        n.max === void 0 && (n.max = r === "less_than" && !f ? c - 1e-6 : c);
      else if (r === "int")
        n.step = 1;
      else if (r === "number_format") {
        const h = u?._zod?.def?.format ?? u?.format;
        (h === "safeint" || h === "int") && (n.step = 1);
      }
    }
  }
  /**
   * Extract type-specific metadata
   */
  extractTypeSpecificMetadata(n, t) {
    if (t instanceof ro) {
      const a = t._def?.options || [];
      for (const i of a)
        if (i instanceof ua) {
          this.extractNumberConstraints(n, i), n.type = "number";
          break;
        }
    } else t instanceof ua && this.extractNumberConstraints(n, t);
    if (!n.options) {
      if (t instanceof uo) {
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
    if (n instanceof Fi || n instanceof Ni)
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
    return n._def?.typeName === "ZodEffects" ? this.isOptional(n._def?.schema) : n instanceof $i ? this.isOptional(n._def?.innerType) : !1;
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
    if (n instanceof Fi || n instanceof Ni)
      return this.unwrapField(n._def?.innerType);
    if (n instanceof $i || a === "ZodDefault")
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
    if (n instanceof $i) {
      const t = n._def?.defaultValue;
      return typeof t == "function" ? t() : t;
    }
    if (n.constructor?.name === "ZodPipe" || n._def?.type === "pipe") {
      const t = n._def?.in;
      if (t)
        return this.getDefaultValue(t);
    }
    if (n instanceof Fi || n instanceof Ni) {
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
    return n instanceof Ga;
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
    if (t instanceof Ga) {
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
    if (!(a instanceof Ga))
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
const Po = new _f();
function Rf(e, n = {}) {
  const t = K([]), a = K([]), i = K(/* @__PURE__ */ new Map()), s = K(/* @__PURE__ */ new Map()), u = (v) => {
    let M = Po.generateFields(e);
    n.overrides && (M = M.map((de) => {
      const z = n.overrides[de.name];
      if (z) {
        const _ = { ...de, ...z };
        return z.min === void 0 && de.min !== void 0 && (_.min = de.min), z.max === void 0 && de.max !== void 0 && (_.max = de.max), _;
      }
      return de;
    })), s.value.clear();
    for (const de of M)
      s.value.set(de.name, de);
    const U = v || n.allowedFieldIds;
    if (U && U.length > 0) {
      const de = U, z = /* @__PURE__ */ new Map();
      for (const me of M)
        z.set(me.name, me);
      const _ = [];
      for (const me of de) {
        const ge = z.get(me);
        ge && _.push(ge);
      }
      M = _;
    }
    n.filter && (M = M.filter(n.filter)), t.value = M, i.value.clear();
    for (const de of M)
      i.value.set(de.name, de);
    n.grouped && (a.value = Po.groupFields(M));
  };
  u();
  const r = (v) => i.value.get(v), c = (v) => s.value.get(v), f = () => s.value, h = (v, M) => {
    const U = i.value.get(v);
    U && Object.assign(U, M);
  }, C = (v) => {
    const M = r(v);
    return !(!M || M.hidden);
  }, b = (v) => {
    const M = r(v);
    if (!M) return {};
    const U = {};
    return M.required && (U.required = !0), M.type === "number" && (M.min !== void 0 && (U.min = M.min), M.max !== void 0 && (U.max = M.max)), U;
  };
  return {
    fields: A(() => t.value),
    groups: A(() => a.value),
    fieldMap: A(() => i.value),
    allFieldsMap: A(() => s.value),
    getField: r,
    getFieldMetadata: c,
    getAllFieldMetadata: f,
    updateField: h,
    isFieldVisible: C,
    getFieldValidation: b,
    regenerateFields: u
  };
}
function Vf(e) {
  const { stockType: n, materials: t = [], minDimension: a = 0 } = e, i = Df(n), s = {
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
  }), e.orientationModel === 0 && (s.l = { ...s.l, label: "fields.long", placeholder: "fields.long" }, s.w = { ...s.w, label: "fields.short", placeholder: "fields.short" }), Rf(i, {
    ...e,
    overrides: { ...s, ...e.overrides }
  });
}
const { progress: at, reset: Ha } = ol(), ws = "sc:inflight-job", qf = 2 * 3600 * 1e3;
function Io(e, n) {
  try {
    localStorage.setItem(ws, JSON.stringify({ jobId: e, socketId: n, queuedAt: Date.now() }));
  } catch {
  }
}
function sa() {
  try {
    localStorage.removeItem(ws);
  } catch {
  }
}
function ta() {
  try {
    const e = localStorage.getItem(ws);
    if (!e) return null;
    const n = JSON.parse(e);
    return !n?.jobId || Date.now() - n.queuedAt > qf ? (sa(), null) : n;
  } catch {
    return null;
  }
}
function Bf(e) {
  const n = "https://api.cutlistevo.com/", t = "https://api.cutlistevo.com/";
  let a, i = null;
  const s = /* @__PURE__ */ new Set([
    "xhr poll error",
    "xhr post error",
    "websocket error",
    "transport error",
    "transport close",
    "timeout",
    "parse error"
  ]), u = (b) => {
    const v = s.has(b?.message) ? "unreachable" : "rejected";
    b && typeof b == "object" && (b.endpoint = n, b.kind = v), console.error(
      v === "unreachable" ? `SmartCut: calculation server unreachable at ${n} — verify VITE_WS_SERVER targets the live API (not localhost) and the server is online` : `SmartCut: calculation server at ${n} rejected the connection (authentication / authorisation)`,
      {
        endpoint: n,
        kind: v,
        message: b?.message,
        description: b?.description,
        context: b?.context,
        data: b?.data
      }
    );
  }, r = () => {
    a = Ou(n, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), a.on("connect", () => {
      e.refs?.connected && (e.refs.connected.value = !0);
      const b = ta();
      b && !at.value.complete && (i = b.jobId, at.value.reattaching = !0, a.emit("reattach", b.jobId)), e.callbacks?.onConnect?.();
    }), a.on("connect_error", (b) => {
      u(b), e.refs?.connected && (e.refs.connected.value = !1), !at.value.complete && ta() ? at.value.reattaching = !0 : e.refs?.thinking && (e.refs.thinking.value = !1), e.callbacks?.onConnectError?.(b);
    }), a.on("connect_timeout", (b) => {
      u(b), e.refs?.connected && (e.refs.connected.value = !1), !at.value.complete && ta() ? at.value.reattaching = !0 : e.refs?.thinking && (e.refs.thinking.value = !1), e.callbacks?.onConnectError?.(b);
    }), a.on("disconnect", () => {
      e.refs?.connected && (e.refs.connected.value = !1), !at.value.complete && ta() && (at.value.reattaching = !0), e.callbacks?.onDisconnect?.();
    }), a.on("result", (b) => {
      at.value.complete = !0, at.value.reattaching = !1, sa(), i = null, e.callbacks?.onResult?.(b), a.disconnect();
    }), a.on("queued", (b) => {
      Ha(), at.value.queued = !0, b && (i = b, Io(b, a.id ?? null));
    }), a.on("jobInProgess", (b) => {
      b && (i = b, Io(b, a.id ?? null), at.value.queued = !0, at.value.reattaching = !0, a.emit("reattach", b));
    }), a.on("reattached", () => {
      at.value.reattaching = !1, at.value.queued = !0;
    }), a.on("reattach-stale", (b) => {
      at.value.reattaching = !1, sa(), i = null, Ha(), e.callbacks?.onStale?.(b?.jobId);
    }), a.on("cancelled", () => {
      at.value.reattaching = !1, sa(), i = null, Ha();
    }), a.on("started", () => {
      at.value.started = !0, at.value.reattaching = !1;
    }), a.on("progress", (b) => {
      at.value.reattaching = !1, b?.data?.message === "result" ? at.value.resultCount++ : (at.value.stockCount = b.data.stockCount, at.value.shapeCount = b.data.shapeCount), b?.data?.phase && (at.value.phase = b.data.phase), b?.data?.placed !== void 0 && (at.value.placed = b.data.placed, at.value.total = b.data.total);
    }), a.on("user", (b) => {
      e.callbacks?.onUser?.(b);
    }), a.on("error", (b) => {
      e.refs?.thinking && (e.refs.thinking.value = !1), sa(), i = null, Ha(), e.callbacks?.onError?.(b);
    });
  }, c = () => a?.disconnect(), f = () => a?.connect(), h = (b) => {
    const v = b ?? i ?? ta()?.jobId;
    v && (i = v, a?.connected ? a.emit("reattach", v) : a?.connect());
  }, C = () => {
    const b = ta(), v = i ?? b?.jobId;
    if (v) {
      try {
        const M = b?.socketId ?? a?.id ?? "", U = M ? `?socketId=${encodeURIComponent(M)}` : "";
        navigator.sendBeacon?.(`${t}v3/job/${v}/cancel${U}`);
      } catch {
      }
      sa(), i = null;
    }
  };
  return r(), {
    socket: a,
    connect: f,
    disconnect: c,
    reattach: h,
    cancel: C
  };
}
const jf = new hs({});
function Wn(e) {
  return e != null && e !== !1 && e !== "";
}
function Ss(e) {
  const n = Number(e.l) || 0, t = Number(e.w) || 0, a = Number(e.longSide) || Math.max(n, t), i = Number(e.shortSide) || Math.min(n, t), s = e.extras?.banding?.sides ?? {}, u = (Wn(s.l1) ? 1 : 0) + (Wn(s.l2) ? 1 : 0), r = (Wn(s.w1) ? 1 : 0) + (Wn(s.w2) ? 1 : 0), c = {
    // Core dimensions
    l: n,
    w: t,
    t: Number(e.t) || 0,
    q: Number(e.q) || 1,
    longSide: a,
    shortSide: i,
    // Basic properties
    material: e.material || e.selectedMaterial?.name || "",
    name: e.name || "",
    grain: e.grain || "",
    fullStock: !!e.fullStock,
    // Banded-side counts (the feasibility surface)
    bandedLongSides: u,
    bandedShortSides: r,
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
    hasBanding: !!(e.extras?.banding?.sides && Object.values(e.extras.banding.sides).some((f) => Wn(f))),
    hasFinish: !!(e.extras?.finish?.faces && Object.values(e.extras.finish.faces).some((f) => Wn(f))),
    hasPlaning: !!(e.extras?.planing?.faces && Object.values(e.extras.planing.faces).some((f) => Wn(f))),
    hasMachining: !!e.machining,
    // Nested machining object for dot-notation access
    machining: {
      holes: e.machining?.holes?.length || 0,
      corners: e.machining?.corners?.length || 0
    }
  };
  return c["extras.banding.sides.l1"] = c.extras.banding.sides.l1, c["extras.banding.sides.l2"] = c.extras.banding.sides.l2, c["extras.banding.sides.w1"] = c.extras.banding.sides.w1, c["extras.banding.sides.w2"] = c.extras.banding.sides.w2, c["extras.finish.faces.a"] = c.extras.finish.faces.a, c["extras.finish.faces.b"] = c.extras.finish.faces.b, c["extras.planing.faces.a"] = c.extras.planing.faces.a, c["extras.planing.faces.b"] = c.extras.planing.faces.b, c["machining.holes"] = c.machining.holes, c["machining.corners"] = c.machining.corners, c;
}
function xs(e, n) {
  const t = (e ?? "").trim();
  if (!t) return !0;
  const a = t.startsWith("=") ? t.substring(1).trim() : t;
  if (!a) return !0;
  try {
    return !!jf.evaluateExpression(a, n);
  } catch (i) {
    return console.warn("[part-predicate] formula evaluation failed (passing fail-open):", { formula: e, err: i }), !0;
  }
}
const Sn = $({
  min: k().min(0).optional(),
  max: k().min(0).optional()
}).optional(), Uf = $({
  // Location identifier (e.g., 'side.l1', 'face.a')
  location: d().min(1),
  // Dimension constraints for this location
  longSide: Sn,
  shortSide: Sn,
  t: Sn,
  // Formula-based validation
  formula: d().optional(),
  // Custom message for this location
  message: d().optional()
}), Bi = $({
  // Shape dimension constraints (type-level, apply to all locations by default)
  longSide: Sn,
  shortSide: Sn,
  t: Sn,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: d().optional(),
  // Custom validation message (optional)
  message: d().optional(),
  // Location-specific rules (override type-level rules for specific locations)
  locations: ee(Uf).optional()
}), Gf = $({
  banding: Bi.optional(),
  finish: Bi.optional(),
  planing: Bi.optional()
}).optional();
function Wf(e) {
  return e.formula ? "" : us({
    dimensionName: cs(e.dimension),
    constraint: e.constraint,
    limit: e.limit,
    value: e.value
  });
}
function zf(e, n, t) {
  const a = n.charAt(0).toUpperCase() + n.slice(1);
  return e.formula ? `${a} does not meet the validation requirements` : us({
    dimensionName: cs(e.dimension),
    constraint: e.constraint,
    limit: e.limit,
    value: e.value,
    subject: a,
    location: e.location
  });
}
function Kf(e, n, t) {
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
function Hf(e, n, t, a) {
  const { rule: i, message: s, source: u } = Kf(n, t, a), r = [], c = (h, C, b) => {
    C == null || b === void 0 || (b.min !== void 0 && C < b.min && r.push({
      valid: !1,
      dimension: h,
      value: C,
      constraint: "min",
      limit: b.min,
      location: t
    }), b.max !== void 0 && C > b.max && r.push({
      valid: !1,
      dimension: h,
      value: C,
      constraint: "max",
      limit: b.max,
      location: t
    }));
  };
  c("longSide", e.longSide, i.longSide), c("shortSide", e.shortSide, i.shortSide);
  const f = typeof e.t == "string" ? parseFloat(e.t) : e.t;
  return isNaN(f) || c("t", f, i.t), i.formula && (xs(i.formula, Ss(e)) || r.push({
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
const { addNotice: na } = ms();
let ji = null;
function Zf() {
  return ji || (ji = Xo()), ji;
}
function Co(e) {
  return e.filter((n) => n?.l || n?.w);
}
function Jf(e) {
  return !!e && "locations" in e && Array.isArray(e.locations);
}
async function Qf(e) {
  const n = e.t, t = [];
  try {
    const { inputs: a, validateInputShapes: i, validateInputStock: s } = Zf(), u = e.inputShapes ?? a.inputShapes.value, r = e.inputStock ?? a.inputStock.value, c = e.inputUserGroups ?? a.inputUserGroups?.value ?? [], f = Co(u), h = Co(r);
    if (f.forEach((z) => z.isNew = !1), h.forEach((z) => z.isNew = !1), !e.isAdmin && !e.shared && e.maxShapes !== 1 / 0 && Xi(f) > e.maxShapes)
      return na({
        type: "error",
        message: n("errors.validation.above_max_parts")
      }), e.onLimit?.(), { valid: !1, issues: t };
    if (!f.length)
      return na({
        type: "error",
        message: n("errors.validation.no_parts_list")
      }), { valid: !1, issues: t };
    if (!e.useInventory && !h.length)
      return na({
        type: "error",
        message: n("errors.validation.no_stock")
      }), { valid: !1, issues: t };
    let C;
    if (e.useInventory && e.selectedSaw)
      C = e.selectedSaw;
    else if (e.inputSaw instanceof kn) {
      const z = e.inputSaw.validate();
      t.push(...z), C = e.inputSaw.toData();
    } else {
      C = e.inputSaw;
      const z = new Ki(C);
      t.push(...z.issues);
    }
    const b = C?.cutType;
    if (b === "nesting") {
      const z = f.filter(
        (_) => !Array.isArray(_.outline) || _.outline.length < 3
      );
      if (z.length)
        for (const _ of z)
          t.push(new St({
            item: _,
            category: ["part"],
            message: "Nesting mode requires a polygon outline — import this part via DXF or switch to Rectangular mode.",
            shouldTranslate: !1
          }));
    } else if (b) {
      const z = f.filter(
        (_) => Array.isArray(_.outline) && _.outline.length >= 3
      );
      if (z.length)
        for (const _ of z)
          t.push(new St({
            item: _,
            category: ["part"],
            message: "This part has a polygon outline and can only be used in Nesting mode — switch mode or remove the outlined parts.",
            shouldTranslate: !1
          }));
    }
    const v = i({
      saw: C,
      partTrim: ue({ v: e.partTrim }),
      useInventory: e.useInventory,
      inputShapesOverride: f
    });
    if (t.push(...v), e.useInventory) {
      if (e.materialStore)
        for (const z of f)
          z.material || t.push(new St({
            item: z,
            category: ["part"],
            message: "errors.validation.business.no_material"
          }));
    } else {
      const z = s(C);
      t.push(...z);
    }
    if (c.length > 0) {
      c.forEach((_) => _.populateParentID(f));
      const z = Hu(c, f);
      t.push(...z);
    }
    await Xf(f, e, t);
    const M = Hi(t);
    if (M.length > 0) {
      const z = {
        saw: M.filter((_) => _.category?.includes("saw")),
        stock: M.filter((_) => _.category?.includes("stock")),
        part: M.filter((_) => _.category?.includes("part") && !_.category?.includes("extras")),
        extras: M.filter((_) => _.category?.includes("extras")),
        group: M.filter((_) => _.category?.includes("group"))
      };
      for (const [_, me] of Object.entries(z))
        if (me.length > 0) {
          na({
            type: "error",
            message: n("errors.validation.inputs_issue", { 0: _ }),
            additional: me.map((ge) => n(ge.message))
          });
          break;
        }
      return { valid: !1, issues: t };
    }
    const U = {
      inputSaw: C,
      inputShapes: f.map((z) => z.toData()),
      inputStock: h.map((z) => z.toData()),
      inputGroups: c.map((z) => z.toData()),
      enableEvo: !0,
      useInventory: e.useInventory || !1
    }, de = Uu.safeParse(U);
    return de.success ? {
      valid: !0,
      issues: t,
      sawData: C,
      cleanedShapes: f,
      cleanedStock: h
    } : (console.error("[Validation] Zod validation failed:", de.error.issues), na({
      type: "error",
      message: n("errors.validation.invalid_data_structure"),
      additional: de.error.issues.map((z) => `${z.path.join(".")}: ${z.message}`)
    }), { valid: !1, issues: t });
  } catch (a) {
    return console.error("[Validation] error:", a), na({
      type: "error",
      message: n("errors.general.unexpected"),
      additional: [a?.message ?? ""]
    }), { valid: !1, issues: t };
  }
}
function Yf(e, n) {
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
async function Xf(e, n, t) {
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
      if (n.extrasValidationRules && Yr.hasExtras(i, s)) {
        const C = n.extrasValidationRules?.[s], b = n.extrasLocationGroups?.[s], v = Jf(C) && C.locations.length > 0, M = b?.some((U) => U.rules);
        if (v || M) {
          const U = Yf(i, s), de = (b || []).map((me) => ({
            id: me.id,
            locations: me.locations,
            rules: me.rules
          })), z = C || {}, _ = /* @__PURE__ */ new Set();
          for (const me of U) {
            const ge = Hf(
              i,
              z,
              me,
              de
            );
            if (!ge.valid) {
              if (ge.source === "group") {
                const w = de.find(
                  (D) => D.rules && D.locations.includes(me)
                );
                if (w && _.has(w.id))
                  continue;
                w && _.add(w.id);
              }
              if (ge.message) {
                const w = new St({
                  item: i,
                  category: ["part", "extras"],
                  message: so(ge.violations.map(Wf), ge.message),
                  field: [["extras", s, me]],
                  shouldTranslate: !1
                });
                t.push(w);
              } else
                ge.violations.forEach((w) => {
                  const D = zf(w, s), ie = new St({
                    item: i,
                    category: ["part", "extras"],
                    message: D,
                    field: [["extras", s, me]],
                    shouldTranslate: !1
                  });
                  t.push(ie);
                });
            }
          }
        } else {
          const U = Xr(i, s, n.extrasValidationRules);
          if (!U.valid) {
            const de = (z) => t.push(new St({
              item: i,
              category: ["part", "extras"],
              message: z,
              field: [["extras", s]],
              shouldTranslate: !1
            }));
            U.message ? de(so(
              U.violations.map(eu),
              U.message
            )) : U.violations.forEach((z) => de(tu(s, z)));
          }
        }
      }
      if (!r || !Object.keys(r).length)
        continue;
      const c = n.getShapeExtrasCodes?.(i, s), f = nu(i, s, r, n.findExtrasPrice, c);
      f.valid || f.incompleteLocations.forEach((h) => {
        t.push(new St({
          item: i,
          category: ["part", "extras"],
          message: "errors.extras.selection_incomplete",
          params: {
            extraType: `extras.${s}`,
            // Translation key for extra type (banding, finish, planing)
            location: au(h, { returnKey: !0 })
            // Translation key for location
          },
          field: [["extras", s, h]]
        }));
      });
    }
}
const ep = ["decor", "width", "thickness", "boardThickness"];
new Set(ep);
const ll = ["banding", "finish", "planing", "machining"], tp = /* @__PURE__ */ new Set(["st", "p", "mm", "mb", "tm", "sm", "pm", "pa", "li", "ro", "r2"]), np = 15;
function ss(e) {
  return e.trim().toLowerCase().split(/[\s_-]+/).filter(Boolean);
}
function ap(e) {
  return /[a-z]/.test(e) && /\d/.test(e);
}
function Lo(e) {
  return ss(e).filter((n) => !tp.has(n) && n.length > 1);
}
function ip(e, n) {
  let t = 0;
  const a = Math.min(e.length, n.length);
  for (; t < a && e[t] === n[t]; ) t++;
  return t;
}
function sp(e) {
  return e ? typeof e == "string" ? { name: e } : e : {};
}
function oh(e, n) {
  const t = sp(n);
  if (!t.name && !t.code && !t.material && !t.description || e.decors.length === 0) return null;
  if (t.name) {
    const c = t.name.trim().toLowerCase();
    if (c) {
      const f = e.decors.find((h) => h.value.toLowerCase() === c);
      if (f) return { value: f.value, score: 1e3, matchedOn: ["name"] };
    }
  }
  const a = /* @__PURE__ */ new Set();
  for (const c of [t.name, t.material, t.description, t.code])
    if (c)
      for (const f of Lo(c)) a.add(f);
  const i = t.code || t.material ? ss(t.code || t.material || "") : [];
  let s = null, u = 0, r = [];
  for (const c of e.decors) {
    const f = Lo(c.value);
    let h = 0;
    const C = [];
    if (t.name) {
      const v = t.name.trim().toLowerCase(), M = c.value.toLowerCase();
      v && (v.includes(M) || M.includes(v)) && (h += 200, C.push("name-substring"));
    }
    let b = 0;
    for (const v of f)
      a.has(v) && (h += ap(v) ? 20 : 5, b++);
    if (b > 0 && C.push("tokens"), t.color && c.color && t.color.trim().toLowerCase() === c.color.trim().toLowerCase() && (h += 30, C.push("color")), i.length > 0) {
      let v = 0;
      for (const M of e.rows) {
        if ((M.decor?.name ?? "") !== c.value) continue;
        const U = ip(i, ss(M.code));
        U > v && (v = U);
      }
      v >= 2 && (h += v * 15, C.push("code-prefix"));
    }
    h > u && (u = h, s = c, r = C);
  }
  return !s || u < np ? null : { value: s.value, score: u, matchedOn: r };
}
const rl = {
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
Object.entries(rl).filter(([, e]) => e.inheritable).map(([e]) => e);
const op = Object.entries(rl).filter(([, e]) => e.libraryOverridable).map(([e]) => e);
new Set(op);
const lp = [
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
new Set(lp);
const rp = ll, up = (e) => e.charAt(0).toUpperCase() + e.slice(1), cp = rp.map((e) => ({
  key: `extras.${e}`,
  label: up(e),
  extrasType: e
}));
new Set(cp.map((e) => e.key));
const dp = 4;
Array.from(
  { length: dp },
  (e, n) => n + 1
);
function ul(e) {
  return typeof e == "string" && e.includes(",");
}
function os(e) {
  if (!ul(e)) return null;
  const n = e.split(",").map((i) => parseFloat(i.trim()));
  if (n.length !== 2) return null;
  const [t, a] = n;
  return !Number.isFinite(t) || !Number.isFinite(a) || t <= 0 || a <= 0 ? null : { base: t, double: a };
}
function oa(e) {
  const n = e?.customData?.bondedThickness;
  return os(n) ? n : ul(e?.t) && os(e?.t) ? e.t : null;
}
function fp(e) {
  const n = os(oa(e));
  return n ? n.base : null;
}
function pp(e, n, t, a = (i) => Number(i)) {
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
new hs({});
function Oo(e, n) {
  const t = [], a = e.filter((i) => i.enabled !== !1);
  for (let i = 0; i < n.length; i++) {
    const s = n[i], u = Ss(s);
    for (const r of a)
      xs(r.formula, u) || t.push({
        partIndex: i,
        partName: s.name || void 0,
        ruleName: r.name || void 0,
        message: r.message
      });
  }
  return {
    valid: t.length === 0,
    errors: t
  };
}
const mp = $({
  longSide: Sn,
  shortSide: Sn,
  t: Sn,
  formula: d().optional(),
  message: d().optional()
}).optional(), ai = $({
  // Unique identifier for this group (used internally)
  id: d().min(1),
  // Display label for the group (shown in UI)
  label: d().min(1),
  // Array of location strings in this group
  // Examples: ['side.l1', 'side.l2'], ['face.a', 'face.b']
  locations: ee(d().min(1)).min(1),
  // Optional price override for this group
  // When set, this price will be used instead of calculating from individual locations
  price: k().optional(),
  // Hide individual location inputs when this group is enabled
  // When true, only shows the group control, hiding the individual face/side inputs
  hideIndividualLocations: ae().optional().default(!1),
  // Validation rules that apply when using this group
  // These rules apply when any location in the group is selected
  rules: mp
}), gp = $({
  banding: ee(ai).optional(),
  finish: ee(ai).optional(),
  planing: ee(ai).optional()
}).optional(), hp = sn(["decimal", "fraction"]), vp = sn(["metric", "imperial"]), bp = sn(iu), Eo = Qe([
  yt(0),
  yt(1),
  yt(2)
]).catch(0), yp = $({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: d().optional(),
  partB: d().optional(),
  partSelected: d().optional(),
  stock: d().optional(),
  text: d().optional(),
  // Checkout-specific colors
  button: d(),
  buttonText: d()
}), Ct = (e) => La((n) => n ?? e, ae()), kp = $({
  banding: Ct(!1),
  finish: Ct(!1),
  planing: Ct(!1),
  orientation: Ct(!0),
  diagram: Ct(!0),
  focus: Ct(!0),
  machining: Ct(!1),
  csvImport: Ct(!1),
  csvTemplate: Ct(!1),
  groups: Ct(!1),
  click: Ct(!0),
  partName: Ct(!0),
  progressNumber: Ct(!0),
  pagination: Ct(!1),
  fullStock: Ct(!1),
  imageUpload: Ct(!1),
  diagramNav: Ct(!1),
  // Lets the customer label each basket line with their own project/job reference.
  projectReference: Ct(!1),
  debug: Ct(!1)
}), wp = $({
  // Localization
  locale: d().default("en-US"),
  currency: d().default("USD"),
  apiVersion: k().min(2).default(3),
  // Unit system (metric or imperial)
  unitSystem: vp.default("metric"),
  // Number formatting
  numberFormat: hp.default("decimal"),
  decimalPlaces: k().min(0).max(10).default(2),
  fractionRoundTo: k().default(0),
  // Stock configuration
  stockSelection: bp.optional(),
  stockGrain: Do.optional(),
  // Part configuration
  minSpacing: jo.optional(),
  maxParts: k().min(0).default(0),
  orientationModel: Eo.default(0),
  resultOrientationModel: Eo.default(0),
  minDimension: k().min(0).default(0),
  partTrim: La((e) => e ?? void 0, k().min(0).optional()),
  partsPerPage: La((e) => e ?? void 0, k().min(1).default(10)),
  // UI configuration
  debug: ae().default(!1),
  enable: kp.default({
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
  colors: yp.default({
    button: "#0e7fa6",
    buttonText: "#ffffff"
  }),
  // Custom fields
  customFields: ee(Se()).optional(),
  fieldOrder: La((e) => e ?? void 0, ee(d()).optional()),
  // Extras location filtering
  bandingLocations: ee(Oi).optional(),
  finishLocations: ee(Oi).optional(),
  planingLocations: ee(Oi).optional(),
  // Extras location groups
  extrasLocationGroups: gp,
  // Extras validation rules
  extrasValidationRules: Gf
}), xa = $({
  min: k().min(0).nullable().optional(),
  max: k().min(0).nullable().optional()
}).nullable().optional(), Sp = $({
  // Master toggle for the feature. Server gates on this; consumers don't need to.
  enabled: ae().optional(),
  // Orientation-independent dimension constraints
  // longSide = the larger of l/w, shortSide = the smaller of l/w
  longSide: xa,
  shortSide: xa,
  // Direct dimension constraints (as stored by admin panel)
  l: xa,
  w: xa,
  t: xa,
  // Cross-dimensional rules
  // For complex scenarios like "one side must be >= 100mm, the other >= 50mm"
  crossDimensionalRule: $({
    // At least one side must be >= primaryMin
    primaryMin: k().min(0).nullable().optional(),
    // The other side must be >= secondaryMin
    secondaryMin: k().min(0).nullable().optional()
  }).nullable().optional(),
  // Formula-based validation using JavaScript expression
  // Formula can reference: l, w, longSide, shortSide
  // Examples: "(l * w) > 100", "longSide >= 50"
  formula: d().nullable().optional(),
  // Custom validation message (optional)
  message: d().nullable().optional()
});
function xp(e, n) {
  const t = [], a = e.l || 0, i = e.w || 0, s = e.longSide ?? Math.max(a, i), u = e.shortSide ?? Math.min(a, i), r = (c, f, h) => {
    h != null && (h.min !== void 0 && h.min !== null && f < h.min && t.push({
      valid: !1,
      dimension: c,
      value: f,
      constraint: "min",
      limit: h.min
    }), h.max !== void 0 && h.max !== null && f > h.max && t.push({
      valid: !1,
      dimension: c,
      value: f,
      constraint: "max",
      limit: h.max
    }));
  };
  if (r("longSide", s, n.longSide), r("shortSide", u, n.shortSide), r("longSide", a, n.l), r("shortSide", i, n.w), r("t", Number(e.t) || 0, n.t), n.crossDimensionalRule) {
    const { primaryMin: c, secondaryMin: f } = n.crossDimensionalRule, h = e.l || 0, C = e.w || 0;
    if (c != null && f != null) {
      const b = h >= c && C >= f, v = C >= c && h >= f;
      !b && !v && t.push({
        valid: !1,
        dimension: "crossDimensional",
        constraint: "crossDimensional",
        message: n.message || `At least one side must be ≥ ${c} mm and the other side must be ≥ ${f} mm`
      });
    }
  }
  return n.formula && (xs(n.formula, Ss(e)) || t.push({
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
function Pp(e) {
  if (e.message)
    return e.message;
  if (e.constraint === "crossDimensional")
    return "Part dimensions do not meet requirements";
  const n = cs(String(e.dimension));
  return us({
    dimensionName: n,
    constraint: e.constraint === "max" ? "max" : "min",
    limit: e.limit ?? 0,
    value: e.value ?? 0,
    subject: "Part"
  });
}
sn([
  "full_stock",
  "part_area",
  "cut_length",
  "full_stock_plus_cut_length",
  "full_stock_plus_num_parts",
  "full_stock_plus_part_perimeter",
  "roll_length"
]);
const Ip = xe(
  d(),
  k().min(0)
).default({}), Cp = $({
  banding: d().optional(),
  finish: d().optional(),
  planing: d().optional(),
  machining: d().optional()
}).optional(), Lp = $({
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
  thicknesses: ee(
    Qe([
      d().transform((e) => {
        const n = parseFloat(e);
        return isNaN(n) ? e : n;
      }),
      k()
    ])
  ).min(1),
  widths: ee(
    Qe([
      d().transform((e) => {
        const n = parseFloat(e);
        return isNaN(n) ? e : n;
      }),
      k()
    ])
  ).optional(),
  // Unique (l, w) sheet sizes available for this material across all
  // thicknesses. Populated for panel stock only — linear stock uses `widths`
  // above for its single-dimension variant axis. The full-stock dialog uses
  // this list to let the customer pick which sheet size they're buying when
  // more than one is available for the chosen material + thickness.
  dimensions: ee($({
    l: k(),
    w: k()
  })).optional(),
  extras: Cp,
  fullSizeOnly: ae().optional()
}), Ui = $({
  labels: ee(d()).default([]),
  pricing: xe(d(), k().min(0)).default({}),
  options: Se().optional(),
  keys: ee(d()).optional(),
  // if not all the default keys should be set
  locations: ee(d()).optional(),
  // available locations for this extras type
  groups: ee(ai).optional(),
  // custom location groups
  rules: Se().optional(),
  // validation rules for this extras type
  displayNames: xe(d(), d()).optional(),
  // slug key → product name for dropdown display
  codes: xe(d(), d()).optional(),
  // tuple key → SKU (WC flow: built from variation SKUs for the cutlist CSV)
  maxGap: k().optional(),
  // banding-only: max gap (mm) between part thickness and strip width (catalogue picker)
  perSide: ae().optional(),
  // banding-only: catalogue picker renders one decor cascade per edge instead of one shared SKU
  // banding-only, per-org opt-in: oversize-and-recut for parts too small to band
  // directly. When enabled, the storefront blocks only the hard blocks (spec §3
  // A/B/C) and silently feeds an oversized BLANK to the optimiser + tags the cut
  // file for recoverable parts (data/utils/extras/edge-banding-recut.ts). Limits
  // default to the machine's 140mm edge / 70mm depth.
  recut: $({
    enabled: ae().optional(),
    minEdgeLength: k().optional(),
    minPanelDepth: k().optional()
  }).optional(),
  defaultPrice: k().optional(),
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
  groupPricing: xe(d(), k()).optional(),
  // Per-code pricing formulas. When a formula exists for a code, both the
  // inline per-feature preview AND the cart total evaluate the formula
  // instead of multiplying the flat rate. Fanned out per-code by the
  // server's `buildExtrasConfig` so one Extra → many code entries.
  formulas: xe(d(), d()).optional()
});
$({
  success: ae(),
  price: k().optional(),
  error: d().optional(),
  cacheHit: ae().optional()
});
$({
  valid: ae(),
  errors: ee(d()),
  warnings: ee(d())
});
$({
  pricing: Ip,
  labels: ee(d()),
  options: ee(ee(d())),
  // Simplified to string arrays only
  keys: ee(d()),
  maxLevels: k().min(1)
});
$({
  enableCaching: ae().default(!0),
  enableLogging: ae().default(!1),
  maxCacheSize: k().min(1).default(1e3)
});
const cl = sn(["select", "multiselect", "range", "boolean", "search"]), dl = sn(["asc", "desc"]), fl = sn(["grid", "list"]), Za = $({
  _id: d(),
  name: d(),
  code: d().optional(),
  labels: ee(d()).optional(),
  pricing: xe(d(), k()).optional(),
  price: k().optional(),
  // Catalogue link — when set, the customer renders a Decor × Type ×
  // Width × Thickness picker against /catalogues/<key>/banding-axes.
  sourceCatalogueKey: d().optional(),
  // Per-axis pricing rules — preserved so per-shape inline price hints
  // can compute against the rule that matches.
  pricingRules: ee($({
    materials: ee(d()).optional(),
    widths: ee(k()).optional(),
    thicknesses: ee(k()).optional(),
    price: k()
  })).optional()
}), Op = $({
  banding: Za.optional(),
  finish: Za.optional(),
  planing: Za.optional(),
  machining: Za.optional()
}).optional(), Ep = $({
  enabled: ae(),
  price: k(),
  description: d().optional(),
  maxQuantity: k().optional()
}).optional(), pl = $({
  id: d(),
  label: d(),
  price: k()
});
pl.extend({
  quantity: k().int().min(1).default(1)
});
const Tp = $({
  // Visual (Note: color, weight, imageUrl, tags, available are now in InputStock base schema)
  colorHex: su,
  name: d().optional().describe("User-friendly display name"),
  description: d().optional().describe("Detailed description"),
  code: d().optional().describe("Internal material/product code"),
  // Categorization
  category: d().optional().describe("Stock category"),
  // Surface finish (e.g., "High Gloss", "Matt", "Satin")
  finish: d().optional().describe("Surface finish"),
  // Available extras from material (resolved from material.extras)
  extras: Op.describe("Available extras for this stock"),
  // Sample ordering configuration (from material)
  sample: Ep.describe("Sample ordering configuration"),
  // External links — supplier-supplied datasheets, asset bundles, 3D viewer
  // URLs etc. surfaced in the customer-side Details dialog. Populated for
  // library-sourced rows from the catalogue entry's `urls` field; absent
  // or empty for shop-owned stock until the editor populates it.
  urls: ee($({
    label: d(),
    url: d()
  })).optional().describe("Supplier external links (datasheets, asset bundle, …)"),
  // UI metadata
  minQuantity: k().int().positive().nullable().optional().describe("Minimum order quantity"),
  // Priced add-on options (e.g. "CNC", "Spray") offered when this stock is
  // bought as a full/uncut sheet. Configured at the material/stock level and
  // surfaced on the catalogue card's full-stock buy flow; also the options a
  // store admin can toggle + price-override when building a quote.
  fullStockOptions: ee(pl).optional().describe("Priced options (cnc, spray, …) for full-sheet ordering")
});
Nn.merge(Tp).describe("Stock option with filtering and display metadata");
const Ap = $({
  field: d().describe("Property name to filter on"),
  type: cl,
  label: d().describe("Display label"),
  custom: ae().default(!1).describe("Whether this is a custom property"),
  // Range filter options
  min: k().nullable().optional().describe("Minimum value for range filter"),
  max: k().nullable().optional().describe("Maximum value for range filter"),
  step: k().nullable().optional().describe("Step size for range filter"),
  // Select filter options
  options: ee($({
    label: d(),
    value: Se()
  })).optional().describe("Predefined options for select filters"),
  // Display options
  visible: ae().default(!0).describe("Whether filter is visible"),
  collapsible: ae().default(!0).describe("Whether filter panel is collapsible"),
  order: k().int().nullable().optional().describe("Display order")
}), Fp = $({
  field: d().describe("Field to sort by"),
  order: dl,
  label: d().optional().describe("Display label for sort option")
}), Ps = $({
  // Filter configuration
  availableFilters: ee(Ap).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: ee(d()).default(["cost", "material", "t"]).describe("Sortable fields"),
  defaultSort: Fp.default({
    field: "cost",
    order: "asc"
  }).describe("Default sort configuration"),
  // Display configuration
  displayMode: fl.default("grid").describe("Default display mode"),
  itemsPerPage: k().int().positive().default(20).describe("Items per page for pagination"),
  // Feature toggles
  enableSearch: ae().default(!0).describe("Enable search functionality"),
  // Selection behavior
  allowMultipleSelection: ae().default(!0).describe("Allow multiple stock selection"),
  maxSelection: k().int().positive().nullable().optional().describe("Maximum number of stock items to select"),
  // Full-stock purchase: when enabled, catalogue cards show an "Add sheet"
  // button + quantity stepper to buy whole/uncut sheets straight to the
  // basket, skipping the cut-list/optimiser step. Off by default so
  // cut-to-size-only stores are unaffected.
  allowFullStockPurchase: ae().default(!1).describe("Allow buying whole/uncut sheets directly to the basket")
}), Np = $({
  field: d(),
  value: Se(),
  type: cl
});
$({
  // Active filters
  activeFilters: ee(Np).default([]).describe("Currently active filters"),
  // Search
  searchQuery: d().default("").describe("Current search query"),
  // Sort
  sortBy: d().default("cost").describe("Current sort field"),
  sortOrder: dl.default("asc").describe("Current sort order"),
  // Display
  displayMode: fl.default("grid").describe("Current display mode"),
  currentPage: k().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: ee(d()).default([]).describe("IDs of selected stock items")
});
function lh() {
  return Ps.parse({});
}
const ml = $({}).passthrough(), gl = $({
  l: k(),
  w: k(),
  t: k().nullable(),
  q: k(),
  stockId: d()
}), Is = ou.partial(), hl = $({
  q: k().optional(),
  analysis: Is.nullable().optional()
}), vl = $({
  holes: ee($({
    x: k(),
    y: k(),
    diameter: k(),
    depth: k().optional(),
    face: k().optional(),
    type: d().optional()
  })).optional(),
  hingeHoles: ee($({
    position: k(),
    side: d(),
    face: k().optional(),
    numHoles: k().optional(),
    diameter: k().optional(),
    depth: k().optional(),
    hingeLength: k().optional(),
    distanceFromEdge: k().optional(),
    outerSpacing: k().optional()
  })).optional(),
  corners: ee($({
    index: k(),
    type: d().nullable().optional(),
    size: k().nullable().optional()
  })).optional()
}), bl = $({
  bladeWidth: k().optional(),
  cutType: d().optional(),
  cutPreference: d().optional(),
  stackHeight: k().optional()
}), $p = $({
  l: k(),
  w: k(),
  t: k().nullable(),
  material: d().nullable(),
  orientationLock: Uo.nullable(),
  q: k(),
  name: d().nullable(),
  // V2 format: flat banding/finish (x1/x2/y1/y2 for banding, a/b for finish)
  banding: xe(d(), Qe([d(), ae()])).nullable().optional(),
  finish: xe(d(), Qe([d(), ae()])).nullable().optional(),
  planing: xe(d(), Qe([d(), ae()])).nullable().optional(),
  customData: xe(d(), Se()).nullable().optional()
}), Mp = $({
  id: d(),
  name: d().nullable(),
  l: k(),
  w: k(),
  t: k().nullable(),
  material: d().nullable(),
  q: k(),
  trim: $({
    x1: k(),
    x2: k(),
    y1: k(),
    y2: k()
  }).nullable().optional(),
  cost: k().nullable().optional(),
  /** Configured percentage discount (0–100) — surfaced to pricing formulas. */
  discount: k().nullable().optional(),
  /** Per-stock pricing override evaluated at checkout — see
   *  shared/formula/pricing-variables.ts for the available variable surface. */
  pricingFormula: d().nullable().optional(),
  db_id: d().nullable().optional(),
  code: d().nullable().optional(),
  analysis: Is.nullable().optional(),
  /** Per-sheet analysis — present when the cut server emits per-sheet data.
   *  Pricing formulas iterate these when set so usedFraction reflects each
   *  physical sheet, not the order-wide average. */
  sheets: ee(hl).nullable().optional(),
  customData: xe(d(), Se()).nullable().optional()
}), Dp = $({
  id: d().optional(),
  name: d().optional(),
  l: k(),
  w: k(),
  t: k().nullable().optional(),
  material: d().optional(),
  q: k().optional(),
  orientationLock: Qe([
    yt(""),
    yt("l"),
    yt("w")
  ]).nullable().optional(),
  // V2 format: flat banding/finish
  banding: xe(d(), Qe([d(), ae()])).nullable().optional(),
  finish: xe(d(), Qe([d(), ae()])).nullable().optional(),
  planing: xe(d(), Qe([d(), ae()])).nullable().optional(),
  // V3 nested extras also stored on inputs even for V2 results (see mapToCheckoutResultV2)
  extras: $({
    banding: $({
      sides: xe(d(), Qe([d(), ae()]))
    }).nullable().optional(),
    finish: $({
      faces: xe(d(), Qe([d(), ae()]))
    }).nullable().optional(),
    planing: $({
      sides: xe(d(), Qe([d(), ae()])).optional(),
      faces: xe(d(), Qe([d(), ae()])).optional()
    }).nullable().optional()
  }).optional(),
  machining: vl.optional(),
  stock: $({
    db_id: d().optional(),
    code: d().optional(),
    material: d().optional(),
    thickness: k().optional()
  }).nullable().optional(),
  customData: xe(d(), Se()).nullable().optional()
});
$({
  jobId: k(),
  metadata: Ea.optional(),
  parts: ee($p),
  stock: ee(Mp),
  offcuts: ee(gl),
  inputs: $({
    parts: ee(Dp),
    saw: bl.optional()
  }),
  apiResultV3: ml.optional()
});
const _p = $({
  l: k(),
  w: k(),
  t: k().nullable(),
  material: d().nullable(),
  orientationLock: Uo.nullable(),
  q: k(),
  name: d().nullable(),
  // V3 format: nested extras structure
  extras: $({
    banding: $({
      sides: xe(d(), Qe([d(), ae()]))
    }).nullable().optional(),
    finish: $({
      faces: xe(d(), Qe([d(), ae()]))
    }).nullable().optional(),
    planing: $({
      sides: xe(d(), Qe([d(), ae()])).optional(),
      faces: xe(d(), Qe([d(), ae()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: xe(d(), Se()).nullable().optional()
}), Rp = $({
  id: d(),
  name: d().nullable(),
  l: k(),
  w: k(),
  t: k().nullable(),
  material: d().nullable(),
  q: k(),
  trim: $({
    l1: k().optional(),
    l2: k().optional(),
    w1: k().optional(),
    w2: k().optional()
  }).nullable().optional(),
  cost: k().nullable().optional(),
  /** Configured percentage discount (0–100) — surfaced to pricing formulas. */
  discount: k().nullable().optional(),
  /** Per-stock pricing override evaluated at checkout — see
   *  shared/formula/pricing-variables.ts for the available variable surface. */
  pricingFormula: d().nullable().optional(),
  db_id: d().nullable().optional(),
  code: d().nullable().optional(),
  analysis: Is.nullable().optional(),
  /** Per-sheet analysis — present when the cut server emits per-sheet data.
   *  Pricing formulas iterate these when set so usedFraction reflects each
   *  physical sheet, not the order-wide average. */
  sheets: ee(hl).nullable().optional(),
  // New stock fields
  color: lu.nullable(),
  weight: k().positive().nullable().optional(),
  imageUrl: d().nullable().optional(),
  tags: ee(d()).nullable().optional(),
  available: ae().nullable().optional(),
  customData: xe(d(), Se()).nullable().optional()
}), Vp = $({
  id: d().optional(),
  name: d().optional(),
  l: k(),
  w: k(),
  t: k().nullable().optional(),
  material: d().optional(),
  q: k().optional(),
  orientationLock: Qe([
    yt(""),
    yt("l"),
    yt("w")
  ]).nullable().optional(),
  // V3 format: nested extras structure
  extras: $({
    banding: $({
      sides: xe(d(), Qe([d(), ae()]))
    }).nullable().optional(),
    finish: $({
      faces: xe(d(), Qe([d(), ae()]))
    }).nullable().optional(),
    planing: $({
      sides: xe(d(), Qe([d(), ae()])).optional(),
      faces: xe(d(), Qe([d(), ae()])).optional()
    }).nullable().optional()
  }).optional(),
  machining: vl.optional(),
  stock: $({
    db_id: d().optional(),
    code: d().optional(),
    material: d().optional(),
    thickness: k().optional()
  }).nullable().optional(),
  customData: xe(d(), Se()).nullable().optional()
});
$({
  jobId: k(),
  metadata: Ea.optional(),
  parts: ee(_p),
  stock: ee(Rp),
  offcuts: ee(gl),
  inputs: $({
    parts: ee(Vp),
    saw: bl.optional()
  }),
  apiResultV3: ml.optional()
});
function yl(e) {
  return {
    l: e.l,
    w: e.w,
    t: e.t ?? null,
    q: e.q,
    // Use stock.id to match the id property in the result's stock array
    stockId: e?.stock?.id || e?.stock?.parentId || ""
  };
}
function kl(e) {
  const n = /* @__PURE__ */ new Map();
  for (const t of e)
    t?.parentId && (n.has(t.parentId) || n.set(t.parentId, []), n.get(t.parentId).push({
      q: t.q ?? 1,
      analysis: t.analysis ?? null
    }));
  return n;
}
function wl(e) {
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
const qp = $({
  stockSelection: gu.optional(),
  stackingMode: mu.optional(),
  minSpacing: jo.optional()
}).optional(), Bp = $({
  stockType: sn([...Zi]).optional(),
  bladeWidth: Qe([
    pu,
    d()
  ]).optional(),
  cutType: du,
  cutPreference: cu,
  stackHeight: uu,
  guillotineOptions: ru,
  efficiencyOptions: fu.optional(),
  options: qp
}).optional(), jp = $({
  holes: k().min(0).nullable().optional(),
  corners: k().min(0).nullable().optional()
}).optional(), Up = Zn.pick({
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
  banding: bu.nullable().optional(),
  finish: vu.nullable().optional(),
  planing: hu.nullable().optional(),
  stockId: d().nullable().optional()
}), Gp = $({
  stock: ee(Nn).default([]),
  parts: ee(Up).optional(),
  options: wp,
  type: d().optional(),
  // variable | simple
  materials: ee(Lp).optional(),
  banding: Ui.nullable().optional(),
  finish: Ui.nullable().optional(),
  planing: Ui.nullable().optional(),
  machining: Se().optional(),
  machiningPricing: jp,
  // DEPRECATED: bandingPricing, finishPricing, planingPricing are now in banding.pricing, finish.pricing, planing.pricing
  variations: Se().optional(),
  partRules: Sp.optional(),
  customValidation: $({
    enabled: ae(),
    rules: ee(Se())
  }).optional(),
  saw: Bp,
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
  sawsById: xe(d(), Se()).optional(),
  stockFilter: $({
    enabled: ae().optional(),
    serverMode: ae().optional(),
    config: Ps.optional()
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
      spec: Se().nullable().optional()
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
    stockCount: k().optional(),
    stock: ee(Se()).optional(),
    materials: ee(Se()).optional(),
    options: Se().optional(),
    pricing: Se().optional(),
    banding: Se().optional(),
    finish: Se().optional(),
    planing: Se().optional(),
    machining: Se().optional(),
    bandingPricing: xe(d(), k()).optional(),
    finishPricing: xe(d(), k()).optional(),
    planingPricing: xe(d(), k()).optional(),
    machiningPricing: xe(d(), k()).optional(),
    saw: Se().optional(),
    shipping: $({
      enabled: ae(),
      originCountry: d().optional()
    }).optional(),
    stockFilter: $({
      config: Ps.optional()
    }).optional(),
    partRules: Se().optional(),
    customFields: ee(Se()).optional(),
    termsUrl: d().optional(),
    termsContent: d().optional(),
    tracking: $({
      gaMeasurementId: d().optional(),
      gtmContainerId: d().optional()
    }).optional(),
    customValidation: $({
      enabled: ae(),
      rules: ee(Se())
    }).optional(),
    importSettings: $({
      grouping: sn(["material", "material-variant", "auto"]).optional(),
      codeRegex: d().optional()
    }).optional()
  }),
  stripe: $({
    enabled: ae(),
    publishableKey: d().optional(),
    currency: d().optional()
  }).optional(),
  invoice: $({
    enabled: ae(),
    terms: d().optional()
  }).optional(),
  customerAccounts: $({
    enabled: ae(),
    requireForCheckout: ae().optional()
  }).optional()
});
function Wp(e) {
  const n = Gp.safeParse(e);
  return {
    success: n.success,
    data: n.success ? n.data : void 0,
    error: n.success ? void 0 : n.error
  };
}
function zp(e) {
  const n = Wp(e);
  if (!n.success) {
    const t = n.error?.issues.map((a) => `${a.path.join(".")}: ${a.message}`).join(", ") || "Unknown validation error";
    throw console.error("Invalid checkout data:", JSON.stringify(e, null, 2)), console.error("Validation errors:", t), new Error(`Invalid checkout data: ${t}`);
  }
  return n.data;
}
function dn(e) {
  return e == null ? !1 : typeof e == "object" && e.value !== void 0 ? e.value : e;
}
function Kp(e) {
  if (e.extras?.banding?.sides) {
    const n = e.extras.banding.sides, t = {};
    if (rt(n.a) || rt(n.b) || rt(n.c) || rt(n.d))
      t.x1 = rt(n.a) ? dn(n.a) : !1, t.y1 = rt(n.b) ? dn(n.b) : !1, t.x2 = rt(n.c) ? dn(n.c) : !1, t.y2 = rt(n.d) ? dn(n.d) : !1;
    else {
      const i = ns(n);
      t.x1 = rt(i.x1) ? dn(i.x1) : !1, t.x2 = rt(i.x2) ? dn(i.x2) : !1, t.y1 = rt(i.y1) ? dn(i.y1) : !1, t.y2 = rt(i.y2) ? dn(i.y2) : !1;
    }
    e.banding = t;
  }
  if (e.extras?.finish?.faces) {
    const n = e.extras.finish.faces, t = {};
    t.a = rt(n.a) ? dn(n.a) : !1, t.b = rt(n.b) ? dn(n.b) : !1, e.finish = t;
  }
  if (e.extras?.planing) {
    const n = e.extras.planing, t = {}, a = ns(n.sides || {});
    n.sides && (rt(a.x1) && (t.x1 = a.x1), rt(a.x2) && (t.x2 = a.x2), rt(a.y1) && (t.y1 = a.y1), rt(a.y2) && (t.y2 = a.y2)), n.faces && (rt(n.faces.a) && (t.a = n.faces.a), rt(n.faces.b) && (t.b = n.faces.b)), Object.keys(t).length > 0 && (e.planing = t);
  }
  (e.extras?.banding || e.extras?.finish || e.extras?.planing) && delete e.extras;
}
function Hp(e, n = 0) {
  if (n === 0)
    return e;
  if (n === 1 || n === 2) {
    const t = Math.max(e.l, e.w), a = Math.min(e.l, e.w);
    e.w > e.l && (e.l = t, e.w = a);
  }
  return e;
}
function Sl(e, n = 0) {
  debugger;
  return n === 0 || e.forEach((t) => Hp(t, n)), e;
}
function Zp(e) {
  const n = typeof e.weight == "number" && Number.isFinite(e.weight) && e.weight > 0 ? e.weight : null;
  if (n !== null) return n;
  const t = typeof e.density == "number" && Number.isFinite(e.density) && e.density > 0 ? e.density : null, a = typeof e.l == "number" ? e.l : null, i = typeof e.w == "number" ? e.w : null, s = typeof e.t == "number" ? e.t : null;
  if (!t || !a || !i || !s) return null;
  const u = a / 1e3 * (i / 1e3) * (s / 1e3);
  return Math.round(t * u * 100) / 100;
}
function xl(e) {
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
function Jp(e, n, t, a, i, s, u, r) {
  const c = wl(a), f = kl(a), h = n.map((v) => {
    const M = {
      l: v.l,
      w: v.w,
      t: v?.t ?? null,
      material: v.material ?? null,
      orientationLock: v.orientationLock ?? null,
      q: u?.addedPartTally?.[v.parentId] || v.q,
      name: v.name ?? null,
      customData: v.customData ?? null,
      // Always include extras properties even if not set (using API format)
      banding: dc(),
      finish: oi(),
      planing: pc()
    }, U = { ...v };
    return Kp(U), U.banding && (M.banding = U.banding), U.finish && (M.finish = U.finish), U.planing && (M.planing = U.planing), M;
  }), C = t.map((v) => {
    const M = {
      id: v.id,
      name: v?.name ?? null,
      l: v.l,
      w: v.w,
      t: v?.t ?? null,
      material: v.material ?? null,
      code: v?.code ?? null,
      q: u?.usedStockTally?.[v.parentId] || v.q,
      cost: v?.cost ?? null,
      discount: v?.discount ?? null,
      pricingFormula: v?.pricingFormula ?? null,
      analysis: c.get(v.parentId) ?? null,
      sheets: f.get(v.parentId) ?? null,
      customData: v?.customData ?? null
    };
    return v?.trim && (M.trim = ns(v.trim)), M;
  }), b = {
    parts: s.map((v) => {
      const M = {
        id: v.id ? String(v.id).split(".")[0] : v.id,
        name: v.name,
        l: v.l,
        w: v.w,
        t: v.t ?? null,
        material: v.material,
        q: v.q,
        orientationLock: v.orientationLock ?? null,
        stock: v.stock ?? null,
        customData: v.customData ?? null
      };
      v.extras && (M.extras = {}, v.extras.banding?.sides && (M.extras.banding = { sides: v.extras.banding.sides }), v.extras.finish?.faces && (M.extras.finish = { faces: v.extras.finish.faces }), v.extras.planing && (M.extras.planing = {
        ...v.extras.planing.sides && { sides: v.extras.planing.sides },
        ...v.extras.planing.faces && { faces: v.extras.planing.faces }
      }));
      const U = xl(v);
      return U && (M.machining = U), M;
    })
  };
  return r && Sl(h, r), {
    jobId: e,
    metadata: u,
    parts: h,
    stock: C,
    offcuts: i?.map(yl) || [],
    inputs: b
  };
}
function Qp(e, n, t, a, i, s, u, r) {
  const c = wl(a), f = kl(a), h = n.map((v) => {
    const M = {
      l: v.l,
      w: v.w,
      t: v?.t ?? null,
      material: v.material ?? null,
      orientationLock: v.orientationLock ?? null,
      q: u?.addedPartTally?.[v.parentId] || v.q,
      name: v.name ?? null,
      customData: v.customData ?? null,
      // Always include extras structure even if not set (using internal format)
      extras: {
        banding: { sides: ts() },
        finish: { faces: oi() },
        planing: fc()
      }
    };
    return v.extras && (v.extras.banding?.sides && (M.extras.banding = { sides: v.extras.banding.sides }), v.extras.finish?.faces && (M.extras.finish = { faces: v.extras.finish.faces }), v.extras.planing && (M.extras.planing = {
      sides: v.extras.planing.sides || ts(),
      faces: v.extras.planing.faces || oi()
    })), M;
  }), C = t.map((v) => ({
    id: v.id,
    name: v?.name ?? null,
    l: v.l,
    w: v.w,
    t: v?.t ?? null,
    material: v.material ?? null,
    code: v?.code ?? null,
    q: u?.usedStockTally?.[v.parentId] || v.q,
    trim: v?.trim ?? null,
    // Keep internal format (l1/l2/w1/w2)
    cost: v?.cost ?? null,
    discount: v?.discount ?? null,
    pricingFormula: v?.pricingFormula ?? null,
    analysis: c.get(v.parentId) ?? null,
    sheets: f.get(v.parentId) ?? null,
    // New stock fields
    color: v?.color ?? null,
    density: v?.density ?? null,
    weight: Zp(v),
    imageUrl: v?.imageUrl ?? null,
    tags: v?.tags ?? null,
    available: v?.available ?? null,
    customData: v?.customData ?? null
  })), b = {
    parts: s.map((v) => {
      const M = {
        id: v.id ? String(v.id).split(".")[0] : v.id,
        name: v.name,
        l: v.l,
        w: v.w,
        t: v.t ?? null,
        material: v.material,
        q: v.q,
        orientationLock: v.orientationLock ?? null,
        stock: v.stock ?? null,
        customData: v.customData ?? null
      };
      v.extras && (M.extras = {}, v.extras.banding?.sides && (M.extras.banding = { sides: v.extras.banding.sides }), v.extras.finish?.faces && (M.extras.finish = { faces: v.extras.finish.faces }), v.extras.planing && (M.extras.planing = {
        ...v.extras.planing.sides && { sides: v.extras.planing.sides },
        ...v.extras.planing.faces && { faces: v.extras.planing.faces }
      }));
      const U = xl(v);
      return U && (M.machining = U), M;
    })
  };
  return r && Sl(h, r), {
    jobId: e,
    metadata: u,
    parts: h,
    stock: C,
    offcuts: i?.map(yl) || [],
    inputs: b
  };
}
function Yp(e) {
  return e ? !!e.code || !!e.name || !!e.sourceCatalogueKey || Array.isArray(e.groups) && e.groups.length > 0 || Array.isArray(e.labels) && e.labels.length > 0 || !!e.pricing && typeof e.pricing == "object" && Object.keys(e.pricing).length > 0 : !1;
}
function Xp(e, n, t) {
  const a = e.sourceCatalogueKey ? n?.pricing || {} : {};
  return e.pricing && typeof e.pricing == "object" ? { ...a, ...e.pricing } : t ? { ...a, [t]: e.price ?? 0 } : { ...a };
}
const em = "stockExtras";
function rh(e, n) {
  !n || typeof n != "object" || (e.resolvedExtras = n);
}
function ri(e) {
  const n = e?.resolvedExtras;
  if (n && typeof n == "object") return n;
  const t = e?.customData?.[em];
  if (t && typeof t == "object") return t;
}
function Pl(e, n) {
  return ri(e)?.[n];
}
function tm(e) {
  const n = ri(e);
  if (!n) return !1;
  for (const t of ll)
    if (n[t]) return !0;
  return !1;
}
function nm(e) {
  const t = Pl(e, "banding")?.sourceCatalogueKey;
  return typeof t == "string" && t ? t : null;
}
function am(e, n) {
  if (n !== "banding") return !1;
  const t = e?.sourceCatalogueKey;
  return typeof t == "string" && t.length > 0;
}
function im(e) {
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
function Gi(e) {
  const n = (e.variant || "").trim(), t = (e.material || "").trim(), a = (e.name || "").trim();
  if (n && a && t && n.toUpperCase() !== a.toUpperCase())
    return `${n} ${a}`.toUpperCase();
  if (n && t) return n.toUpperCase();
  if (t) return t.toUpperCase();
  const i = (e.code || "").trim();
  return i ? i.toUpperCase() : (ca(im(e), { fallback: "" }).fullLabel || "").toUpperCase();
}
function sm(e) {
  if (e && typeof e == "object" && "resolvedExtras" in e) {
    const { resolvedExtras: n, ...t } = e;
    return t;
  }
  return e;
}
const om = ["id", "data-index"], lm = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = K({
      l1: !1,
      l2: !1,
      w1: !1,
      w2: !1
    }), s = () => {
      if (!t.inputShape) return;
      let c = {
        l1: ra(t.inputShape, "banding", "side.l1"),
        l2: ra(t.inputShape, "banding", "side.l2"),
        w1: ra(t.inputShape, "banding", "side.w1"),
        w2: ra(t.inputShape, "banding", "side.w2")
      };
      const f = qu(
        t.orientationModel,
        t.stockGrain,
        t.inputShape
      );
      f && (c = _u(c, f)), i.value = c;
    };
    Je([
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
    return pn(() => {
      document.getElementById(t.id)?.addEventListener("keydown", u);
    }), ci(() => {
      document.getElementById(t.id)?.removeEventListener("keydown", u);
    }), (c, f) => (F(), Z("div", {
      id: e.id,
      class: ut(["banding-button", { open: e.open, disabled: e.disabled }]),
      "data-field": "banding",
      "data-index": e.index,
      tabindex: "0",
      onClick: r
    }, [
      be("div", {
        class: ut(["outer", {
          l1: i.value.l1,
          l2: i.value.l2,
          w1: i.value.w1,
          w2: i.value.w2
        }])
      }, [...f[0] || (f[0] = [
        be("div", { class: "inner" }, null, -1)
      ])], 2)
    ], 10, om));
  }
}), rm = /* @__PURE__ */ on(lm, [["__scopeId", "data-v-60b62a98"]]), um = {
  key: 0,
  class: "material-picker__selected"
}, cm = ["src", "alt"], dm = ["title"], fm = { class: "material-picker__selected-stack" }, pm = { class: "material-picker__selected-line" }, mm = { class: "material-picker__selected-name" }, gm = {
  key: 0,
  class: "c-badge c-badge--light c-badge--sm material-picker__brand"
}, hm = {
  key: 0,
  class: "material-picker__selected-code"
}, vm = {
  key: 1,
  class: "material-picker__placeholder"
}, bm = { class: "material-picker__search-wrap" }, ym = ["placeholder"], km = {
  key: 0,
  class: "material-picker__search-spinner",
  "aria-hidden": "true"
}, wm = {
  class: "material-picker__list",
  role: "listbox"
}, Sm = {
  key: 0,
  class: "material-picker__empty"
}, xm = ["aria-selected", "onMousedown", "onMouseenter"], Pm = ["src", "alt"], Im = ["title"], Cm = { class: "material-picker__selected-stack" }, Lm = { class: "material-picker__selected-line" }, Om = { class: "material-picker__selected-name" }, Em = {
  key: 0,
  class: "c-badge c-badge--light c-badge--sm material-picker__brand"
}, Tm = {
  key: 0,
  class: "material-picker__selected-code"
}, Am = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = K(), s = K(), u = K(), r = K(!1), c = K(""), f = K(0), h = K(!1);
    let C = null, b = null;
    const v = K([]), M = /* @__PURE__ */ new Map(), U = K(null), de = A(() => t.id || `material-picker-${Math.random().toString(36).slice(2, 8)}`), z = A(() => t.modelValue !== void 0 && t.modelValue !== null ? t.modelValue : t.value !== void 0 && t.value !== null ? t.value : null), { floatingStyles: _, teleportTarget: me, syncFloatingFont: ge } = al(
      i,
      s,
      {
        sizeApply({ rects: W, availableWidth: J, availableHeight: ye, elements: qe }) {
          const te = W.reference.width, ke = Math.min(J, Math.max(te, 360));
          Object.assign(qe.floating.style, {
            maxHeight: `${Math.max(200, ye)}px`,
            minWidth: `${te}px`,
            width: `${ke}px`,
            maxWidth: `${J}px`
          });
        }
      },
      r
    ), w = A(() => Array.isArray(t.options));
    function D(W) {
      return W.map((J, ye) => {
        const qe = ca(J, { fallback: J.name }), te = [qe.fullLabel, J.code, J.displayName].filter(Boolean).join(" ").toLowerCase(), ke = J._id || `idx-${ye}`;
        return { ...J, _key: `${qe.groupKey}|${ke}`, _summary: qe, _haystack: te };
      });
    }
    const ie = A(() => w.value ? D(t.options ?? []) : []), le = A(() => w.value ? [] : D(v.value)), j = A(() => {
      if (w.value) {
        const W = c.value.trim().toLowerCase();
        return W ? ie.value.filter((J) => J._haystack.includes(W)) : ie.value;
      }
      return le.value;
    }), P = A(() => {
      const W = z.value;
      if (!W) return null;
      if (w.value) {
        const qe = W.toUpperCase(), ke = ie.value.find(
          (Ve) => typeof Ve.code == "string" && Ve.code.toUpperCase() === qe
        ) || ie.value.find((Ve) => R(Ve) === W);
        if (ke) return ke;
      } else if (U.value && R(U.value) === W)
        return D([U.value])[0];
      const J = { name: W }, ye = ca(J, { fallback: W });
      return { ...J, _key: `${ye.groupKey}|stub`, _summary: ye, _haystack: "" };
    });
    function R(W) {
      const J = t.valueKey === "_id" ? W._id : W.name;
      return J != null ? String(J) : null;
    }
    function re(W) {
      return R(W) === z.value;
    }
    function se() {
      t.disabled || t.readonly || (r.value = !r.value, r.value && (c.value = "", f.value = 0, _t(() => {
        ge(), u.value?.focus(), !w.value && v.value.length === 0 && et("");
      })));
    }
    function oe(W) {
      U.value = W;
      const J = R(W);
      a("update:modelValue", J), a("update:value", J), a("select", W), r.value = !1, c.value = "";
    }
    function Ke() {
      U.value = null, a("update:modelValue", null), a("update:value", null), a("clear");
    }
    async function et(W) {
      if (!t.searchFn) return;
      const J = W.toLowerCase(), ye = M.get(J);
      if (ye) {
        v.value = ye;
        return;
      }
      if (W.length > 0 && W.length < t.minQueryLength) {
        v.value = [];
        return;
      }
      b && b.abort(), b = new AbortController(), h.value = !0;
      try {
        const qe = await t.searchFn(W);
        M.set(J, qe), v.value = qe;
      } catch (qe) {
        if (qe?.name === "CanceledError" || qe?.code === "ERR_CANCELED") return;
        v.value = [];
      } finally {
        h.value = !1;
      }
    }
    function Pe() {
      w.value || (C && clearTimeout(C), C = setTimeout(
        () => et(c.value),
        t.debounceMs
      ));
    }
    Je(z, async (W) => {
      if (!w.value) {
        if (!W || !t.loadFn) {
          U.value = null;
          return;
        }
        if (R(U.value ?? {}) !== W)
          try {
            const J = await t.loadFn(W);
            J && (U.value = J, a("loaded", J));
          } catch {
          }
      }
    }, { immediate: !0 }), pn(() => {
      if (w.value && z.value) {
        const W = ie.value.find((J) => R(J) === z.value);
        W && a("loaded", W);
      }
    });
    function Fe(W) {
      switch (W.key) {
        case "ArrowDown":
          W.preventDefault(), f.value < j.value.length - 1 && f.value++;
          break;
        case "ArrowUp":
          W.preventDefault(), f.value > 0 && f.value--;
          break;
        case "Enter":
          W.preventDefault(), j.value[f.value] && oe(j.value[f.value]);
          break;
        case "Escape":
          W.preventDefault(), r.value = !1;
          break;
      }
    }
    function Re(W) {
      if (!r.value) return;
      const J = W.target;
      i.value?.contains(J) || s.value?.contains(J) || (r.value = !1);
    }
    return Je(r, (W) => {
      W ? document.addEventListener("mousedown", Re) : document.removeEventListener("mousedown", Re);
    }), fi(() => {
      document.removeEventListener("mousedown", Re), C && clearTimeout(C), b && b.abort();
    }), Je(j, () => {
      f.value = 0;
    }), (W, J) => (F(), Z("div", {
      class: ut(["input-wrapper material-picker", { issue: e.issue, required: e.required, disabled: e.disabled, focused: r.value }])
    }, [
      e.label && e.enableLabel ? (F(), Me(Pa, {
        key: 0,
        id: de.value,
        label: e.label,
        required: e.required
      }, {
        default: nn(() => [
          Zt(W.$slots, "label", {}, () => [
            an(we(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["id", "label", "required"])) : ce("", !0),
      be("div", {
        ref_key: "triggerRef",
        ref: i,
        class: ut(["material-picker__wrapper", { focused: r.value, empty: !P.value }]),
        onClick: se
      }, [
        P.value ? (F(), Z("div", um, [
          P.value._summary.imageUrl ? (F(), Z("img", {
            key: 0,
            src: P.value._summary.imageUrl,
            class: "material-picker__thumb material-picker__thumb--lazy",
            loading: "lazy",
            alt: P.value._summary.productLabel,
            onLoad: J[0] || (J[0] = (ye) => ye.target.classList.add("material-picker__thumb--loaded"))
          }, null, 40, cm)) : P.value.colorHex ? (F(), Z("span", {
            key: 1,
            class: "material-picker__swatch",
            style: Wt({ background: P.value.colorHex }),
            title: P.value.color || "",
            "aria-hidden": "true"
          }, null, 12, dm)) : ce("", !0),
          be("span", fm, [
            be("span", pm, [
              be("span", mm, we(P.value._summary.productLabel), 1),
              P.value._summary.brand ? (F(), Z("span", gm, we(P.value._summary.brand), 1)) : ce("", !0)
            ]),
            P.value._summary.code ? (F(), Z("span", hm, we(P.value._summary.code), 1)) : ce("", !0)
          ])
        ])) : (F(), Z("span", vm, we(e.placeholder || "Select…"), 1)),
        P.value && !e.disabled && e.allowClear ? (F(), Z("button", {
          key: 2,
          type: "button",
          class: "c-btn c-btn--xs c-btn--unstyled field-clear-btn material-picker__clear",
          "aria-label": "Clear selection",
          onClick: Hn(Ke, ["stop"])
        }, "×")) : ce("", !0)
      ], 2),
      (F(), Me(di, {
        to: T(me),
        disabled: !T(me)
      }, [
        r.value ? (F(), Z("div", {
          key: 0,
          ref_key: "floatingRef",
          ref: s,
          class: "material-picker__dropdown",
          style: Wt(T(_)),
          onMousedown: J[4] || (J[4] = Hn(() => {
          }, ["prevent"]))
        }, [
          be("div", bm, [
            J[5] || (J[5] = be("span", {
              class: "material-picker__search-icon",
              "aria-hidden": "true"
            }, "⌕", -1)),
            ls(be("input", {
              ref_key: "searchRef",
              ref: u,
              "onUpdate:modelValue": J[1] || (J[1] = (ye) => c.value = ye),
              type: "text",
              class: "material-picker__search",
              placeholder: e.searchPlaceholder,
              onMousedown: J[2] || (J[2] = Hn(() => {
              }, ["stop"])),
              onInput: Pe,
              onKeydown: Fe
            }, null, 40, ym), [
              [No, c.value]
            ]),
            h.value ? (F(), Z("span", km, "…")) : ce("", !0)
          ]),
          be("div", wm, [
            j.value.length === 0 ? (F(), Z("div", Sm, we(e.emptyMessage), 1)) : ce("", !0),
            (F(!0), Z(Ot, null, Jt(j.value, (ye, qe) => (F(), Z("div", {
              key: ye._key,
              class: ut(["material-picker__option", {
                highlighted: qe === f.value,
                selected: re(ye)
              }]),
              role: "option",
              "aria-selected": re(ye),
              onMousedown: Hn((te) => oe(ye), ["prevent"]),
              onMouseenter: (te) => f.value = qe
            }, [
              ye._summary.imageUrl ? (F(), Z("img", {
                key: 0,
                src: ye._summary.imageUrl,
                class: "material-picker__thumb material-picker__thumb--lazy",
                loading: "lazy",
                alt: ye._summary.productLabel,
                onLoad: J[3] || (J[3] = (te) => te.target.classList.add("material-picker__thumb--loaded"))
              }, null, 40, Pm)) : ye.colorHex ? (F(), Z("span", {
                key: 1,
                class: "material-picker__swatch",
                style: Wt({ background: ye.colorHex }),
                title: ye.color || "",
                "aria-hidden": "true"
              }, null, 12, Im)) : ce("", !0),
              be("span", Cm, [
                be("span", Lm, [
                  be("span", Om, we(ye._summary.productLabel), 1),
                  ye._summary.brand ? (F(), Z("span", Em, we(ye._summary.brand), 1)) : ce("", !0)
                ]),
                ye._summary.code ? (F(), Z("span", Tm, we(ye._summary.code), 1)) : ce("", !0)
              ])
            ], 42, xm))), 128))
          ])
        ], 36)) : ce("", !0)
      ], 8, ["to", "disabled"]))
    ], 2));
  }
}), Fm = /* @__PURE__ */ on(Am, [["__scopeId", "data-v-33e02746"]]), Nm = ["id", "data-field", "data-index", "disabled"], Il = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = A(() => t.type === "finish" ? ["fass", "spray-can"] : ["fass", "planing"]), s = A(() => !!t.inputShape && ra(t.inputShape, t.type, "face.a")), u = A(() => !!t.inputShape && ra(t.inputShape, t.type, "face.b")), r = () => {
      t.disabled || a("clicked");
    };
    return (c, f) => {
      const h = da("Icon");
      return F(), Z("button", {
        id: e.id,
        class: ut(["c-btn", [`${e.type}-button`, {
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
        ot(h, { icon: i.value }, null, 8, ["icon"])
      ], 10, Nm);
    };
  }
}), $m = { inheritAttrs: !1 }, Mm = /* @__PURE__ */ vt({
  ...$m,
  __name: "FinishButton",
  setup(e) {
    return (n, t) => (F(), Me(Il, Ht({ type: "finish" }, n.$attrs), null, 16));
  }
});
function Dm(e) {
  return e.machining ? "toData" in e.machining ? e.machining.toData() : e.machining : { holes: [], hingeHoles: [], corners: {} };
}
function _m(e) {
  const n = Dm(e);
  return n ? !!(n.holes && n.holes.length > 0 || n.hingeHoles && n.hingeHoles.length > 0 || n.corners && Object.values(n.corners).some((t) => t && t.type && t.size > 0)) : !1;
}
const Rm = vt({
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
      return _m(this.inputShape);
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
}), Vm = ["id", "disabled"];
function qm(e, n, t, a, i, s) {
  const u = da("Icon");
  return F(), Z("button", {
    id: e.id,
    class: ut(["c-btn machining-button", { selected: e.hasMachining }]),
    type: "button",
    disabled: e.disabled,
    onClick: n[0] || (n[0] = (...r) => e.openMachining && e.openMachining(...r))
  }, [
    ot(u, { icon: ["fass", "machining"] })
  ], 10, Vm);
}
const Bm = /* @__PURE__ */ on(Rm, [["render", qm]]), jm = vt({
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
}), Um = ["id", "disabled"];
function Gm(e, n, t, a, i, s) {
  const u = da("Icon");
  return F(), Z("button", {
    id: e.id,
    class: ut(["c-btn custom-products-button", { selected: e.hasSelections }]),
    type: "button",
    disabled: e.disabled,
    onClick: n[0] || (n[0] = (...r) => e.open && e.open(...r))
  }, [
    ot(u, { icon: ["fass", "box"] })
  ], 10, Um);
}
const Wm = /* @__PURE__ */ on(jm, [["render", Gm]]), zm = ["id"], To = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = K(0), s = K(!1), u = (j, P, R, re) => {
      if (!Xe(R) || P === 0)
        return j;
      const se = r();
      return P === 1 || P === 2 && re !== "n" && j ? se : j;
    }, r = (j) => {
      const P = { ...t, ...j };
      if (!P.rectangle || !Xe(P.rectangle)) return "";
      let R = "";
      switch (P.orientationModel) {
        case 0:
          R = me.value;
          break;
        case 1:
          P.stockGrain === "y" || P.stockGrain === "n" ? R = P.rectangle.l >= P.rectangle.w ? "l" : "w" : P.rectangle.l >= P.rectangle.w ? R = P.stockGrain : R = R = P.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          R = P.rectangle.l >= P.rectangle.w ? "l" : "w";
          break;
      }
      return R;
    }, c = () => {
      if (t.disabled || z.value.length <= 1)
        return;
      const j = f(me.value);
      "multiEdit" in t.rectangle && t.rectangle.multiEdit && me.value === "" && i.value !== j && i.value === 0 && (i.value = j);
      let R = null;
      [1, 2].includes(t.orientationModel) ? R = C() : R = h(), i.value = R;
    }, f = (j) => {
      const P = z.value.findIndex((R) => R === j);
      return P === -1 ? 0 : P;
    }, h = () => {
      let j = i.value + 1;
      return j > z.value.length - 1 && (j = 0), j;
    }, C = () => {
      let j = 0;
      if (me.value === "") {
        const P = r();
        j = z.value.findIndex((R) => R === P);
      } else
        j = z.value.findIndex((P) => P === "");
      return j;
    }, b = (j) => {
      a("updateOrientation", j);
    }, v = () => {
      const j = me.value;
      if ("multiEdit" in t.rectangle && t.rectangle.multiEdit)
        return j === " " ? " " : j === "" ? "" : j === "l" ? "l" : j === "w" ? "w" : "default";
      switch (t.orientationModel) {
        case 0:
          return j === " " ? " " : j ? t.stockGrain === "n" ? j || t.shapeOrientation || "default" : t.stockGrain === "w" ? j === "w" ? "w" : "l" : j === "l" ? "l" : "w" : "default";
        case 1:
          return j === " " ? " " : j ? t.stockGrain === "n" ? j || t.shapeOrientation || "default" : t.stockGrain === "w" ? j === "w" ? "w" : "l" : j === "l" ? "l" : "w" : "default";
        case 2:
          return j === " " ? " " : j ? t.stockGrain === "n" ? j || t.shapeOrientation || "default" : t.stockGrain === "w" ? j === "w" ? "w" : "l" : j === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, M = () => {
      if (!t.rectangle)
        return;
      if ("multiEdit" in t.rectangle && t.rectangle.multiEdit && !me.value) {
        de("");
        return;
      }
      const j = u(
        me.value,
        t.orientationModel,
        t.rectangle,
        t.stockGrain
      );
      if (j !== me.value) {
        de(j);
        return;
      }
      if (!s.value || i.value === -1) {
        const P = f(me.value);
        i.value = P;
      }
      if (Xe(t.rectangle)) {
        if (t.orientationModel === 1) {
          const P = w.value ? r() : me.value;
          de(P);
          return;
        }
        if (t.orientationModel === 2) {
          let P;
          w.value ? P = t.stockGrain !== "n" ? r() : "" : P = me.value, de(P);
        }
      }
    }, U = K(!1), de = (j) => {
      const P = f(j);
      U.value = !0, i.value = P, U.value = !1, b(j);
    }, z = A(() => {
      if (!t.rectangle) return ["l", "w"];
      if (Fn(t.rectangle)) return ["l", "w"];
      let j = ["", "l", "w"];
      return t.rectangle.multiEdit ? [" ", "", "l", "w"] : (_.value && (j = j.filter((P) => P !== "w")), j);
    }), _ = A(() => Xe(t.rectangle) || Ei(t.rectangle) ? t.rectangle.isSquare : t.rectangleType && t.rectangle?.l && t.rectangle?.w ? t.rectangle?.l === t.rectangle?.w : !1), me = A(() => {
      let j = "";
      if (Fn(t.rectangle))
        j = t.rectangle.direction === "horizontal" ? "l" : "w";
      else if (Xe(t.rectangle)) {
        const P = t.rectangle.orientationLock;
        j = P === null ? "" : P;
      } else if (Ei(t.rectangle)) {
        const R = t.rectangle.grain ?? "";
        R === "l" || R === "w" || R === "" || R === " " ? j = R : j = "";
      }
      return j;
    }), ge = A(() => Fn(t.rectangle) || !t.rectangle ? {
      l: null,
      w: null
    } : {
      l: t.rectangle.l,
      w: t.rectangle.w
    }), w = A(() => !ge.value.l && !ge.value.w), D = A(() => Fn(t.rectangle) ? !1 : Ya(
      t.orientationModel,
      t.stockGrain,
      t.rectangle,
      t.rectangleType,
      t.shapeOrientation
    )), ie = A(() => {
      if (!t.rectangle)
        return t.shapeOrientation ? "noGrain" : "freeRotation";
      if (Ei(t.rectangle) || t.rectangleType === "stock") {
        const se = t.rectangle.grain;
        return "multiEdit" in t.rectangle && t.rectangle.multiEdit ? {
          " ": "noGrain",
          // Clear to no grain
          "": "noChange",
          // No change
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[se] || "noGrain" : {
          "": "noGrain",
          // No grain
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[se] || "noGrain";
      }
      const j = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, P = t.stockGrain || "default";
      let R = "default";
      Xe(t.rectangle) || t.rectangleType === "shape" ? R = v() : Fn(t.rectangle) && (R = t.rectangle.direction || "default");
      const re = j[P]?.[R];
      return re || j[P]?.default || "freeRotation";
    }), le = A(() => ({
      delete: "trash",
      noChange: "no-change",
      freeRotation: "arrows-rotate",
      leftRight: "arrows-left-right",
      topBottom: "arrows-up-down",
      grainLeftRight: "grain-h",
      grainTopBottom: "grain-v",
      noGrain: "no-grain"
    })[ie.value]);
    return Je(i, (j, P) => {
      s.value && P !== void 0 && (U.value || b(z.value[j]));
    }, { immediate: !1 }), Je(ge, (j, P) => {
      if (!t.rectangle || t.orientationModel === 0 || !Xe(t.rectangle) || Xe(t.rectangle) && (t.orientationModel === 2 && P.l && P.w && !me.value || t.stockGrain === "n" && !me.value))
        return;
      const R = r();
      me.value !== R && b(R);
    }, { immediate: !1 }), Je(() => t.stockGrain, (j, P) => {
      j !== P && M();
    }, { immediate: !0 }), pn(() => {
      M(), _t(() => s.value = !0);
    }), (j, P) => {
      const R = da("Icon");
      return F(), Z("button", {
        type: "button",
        id: e.id,
        class: ut(["c-btn orientation-button", { rot: D.value, square: _.value, disabled: e.disabled, [ie.value]: !0 }]),
        tabindex: "0",
        "aria-label": "Part orientation",
        onClick: c
      }, [
        ot(R, { name: le.value }, null, 8, ["name"])
      ], 10, zm);
    };
  }
}), Km = { inheritAttrs: !1 }, Hm = /* @__PURE__ */ vt({
  ...Km,
  __name: "PlaningButton",
  setup(e) {
    return (n, t) => (F(), Me(Il, Ht({ type: "planing" }, n.$attrs), null, 16));
  }
});
function Zm(e, n, t) {
  let a = null;
  Je(
    () => e.value ? { l: e.value.l, w: e.value.w } : null,
    (i) => {
      const s = typeof n == "number" ? n : n.value;
      if (!Ru(s) || !i || !e.value) return;
      const u = i.w > i.l;
      if (a === null) {
        a = u;
        return;
      }
      if (a !== u) {
        const r = Vu(s);
        for (const c of r)
          yu(e.value, c);
        a = u;
      }
    },
    { immediate: !0 }
  );
}
const Jm = {
  key: 0,
  class: "info"
}, Qm = ["disabled"], Ym = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = A(() => t.field.name === "banding" && Xe(t.item) ? t.item : null);
    Zm(i, zt(t, "orientationModel"));
    const s = ["orientationLock", "grain", "banding", "bandingOptions", "machining", "finish", "planing", "imageUpload"], u = A(() => s.includes(t.field.name) || t.field.name === "material" && t.typePrefix === "part" || t.field.name === "t" && t.thicknessOptions?.length > 0 || t.field.name === "w" && t.widthOptions?.length > 0), r = A(() => {
      try {
        const w = t.field.propertyPath || t.field.name;
        return w.includes(".") ? Bt(t.item, w) ?? null : t.item[w] ?? null;
      } catch (w) {
        return console.error("[CheckoutField] Error getting field value:", w), null;
      }
    }), c = A(() => {
      if (t.field.custom && t.field.type) {
        const ie = t.field.type;
        if (["checkbox", "select", "string", "integer", "unitDependent"].includes(ie))
          return ie;
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
      const D = w[t.field.type];
      return D || "string";
    }), f = A(() => t.field.output ? t.field.output : null), h = A(() => t.field.options || []), C = A(() => !!(t.readonly || t.item?.readonly || t.fullStockDisabled)), b = A(() => t.item.isNew ? !1 : oo(t.item, [t.field.name])), v = A(() => t.item.isNew ? !1 : oo(t.item, [t.field.name], !0)), M = A(() => t.multiEdit || t.item.isNew || !1), U = A(() => t.materialOptions?.length > 0 && Xe(t.item) ? !t.item.material : !1), de = A(() => t.widthOptions?.length === 1), z = A(() => t.field.info ? typeof t.field.info == "string" ? t.field.info : typeof t.field.info == "object" && r.value !== null && t.field.info[r.value] || null : null), _ = (w) => {
      a("update", w);
    }, me = (w, D) => {
      a("validation", w, D);
    }, ge = () => {
      a("blur");
    };
    return (w, D) => u.value ? (F(), Z(Ot, { key: 1 }, [
      e.field.name === "orientationLock" ? (F(), Me(To, {
        key: 0,
        rectangle: e.item,
        "stock-grain": e.stockGrain,
        "orientation-model": e.orientationModel,
        "button-background": "#2c8d8f",
        disabled: C.value,
        onUpdateOrientation: _
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : e.field.name === "grain" ? (F(), Me(To, {
        key: 1,
        rectangle: e.item,
        "button-background": "#2c8d8f",
        "stock-grain": e.stockGrain,
        "orientation-model": e.orientationModel,
        disabled: C.value,
        onUpdateOrientation: _
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : e.field.name === "banding" ? (F(), Me(rm, {
        key: 2,
        "input-shape": T(Xe)(e.item) ? e.item : null,
        open: e.bandingEnabled?.autoId === e.item.autoId,
        "stock-grain": e.stockGrain,
        "orientation-model": e.orientationModel,
        index: e.index,
        disabled: C.value || e.materialExtrasDisabled?.banding,
        onClicked: D[0] || (D[0] = (ie) => w.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "orientation-model", "index", "disabled"])) : e.field.name === "finish" ? (F(), Me(Mm, {
        key: 3,
        "input-shape": T(Xe)(e.item) ? e.item : null,
        open: !1,
        index: e.index,
        disabled: C.value || e.materialExtrasDisabled?.finish,
        onClicked: D[1] || (D[1] = (ie) => w.$emit("open-finish"))
      }, null, 8, ["input-shape", "index", "disabled"])) : e.field.name === "planing" ? (F(), Me(Hm, {
        key: 4,
        "input-shape": T(Xe)(e.item) ? e.item : null,
        open: !1,
        index: e.index,
        disabled: C.value || e.materialExtrasDisabled?.planing,
        onClicked: D[2] || (D[2] = (ie) => w.$emit("open-planing"))
      }, null, 8, ["input-shape", "index", "disabled"])) : e.field.name === "machining" ? (F(), Me(Bm, {
        key: 5,
        "input-shape": T(Xe)(e.item) ? e.item : null,
        disabled: C.value || e.materialExtrasDisabled?.machining,
        onOpen: D[3] || (D[3] = (ie) => w.$emit("open-machining"))
      }, null, 8, ["input-shape", "disabled"])) : e.field.name === "customProducts" ? (F(), Me(Wm, {
        key: 6,
        "input-shape": T(Xe)(e.item) ? e.item : null,
        disabled: C.value,
        onOpen: D[4] || (D[4] = (ie) => w.$emit("open-custom-products"))
      }, null, 8, ["input-shape", "disabled"])) : e.field.name === "material" && e.typePrefix === "part" && e.materialItems && e.materialItems.length > 0 ? (F(), Me(Fm, {
        key: 7,
        id: `${e.typePrefix}-material-${e.index}`,
        value: r.value,
        options: e.materialItems,
        "value-key": "name",
        label: T(Te)(e.field.label || "fields.material"),
        placeholder: T(Te)(e.field.placeholder || "fields.material"),
        "enable-label": !1,
        disabled: e.field.disabled || C.value || e.readonly,
        required: e.field.required || !1,
        issue: b.value,
        "allow-clear": !1,
        "onUpdate:value": _
      }, null, 8, ["id", "value", "options", "label", "placeholder", "disabled", "required", "issue"])) : e.field.name === "material" && e.typePrefix === "part" ? (F(), Me(Ia, {
        key: 8,
        id: `${e.typePrefix}-material-${e.index}`,
        "data-field": e.field.name,
        "data-index": e.index,
        type: "select",
        value: r.value,
        label: T(Te)(e.field.label || "fields.material"),
        placeholder: T(Te)(e.field.placeholder || "fields.material"),
        "enable-label": !1,
        output: "string",
        options: e.materialOptions,
        "select-first-option-disabled": !0,
        disabled: !e.materialOptions?.length,
        required: !1,
        text: {
          select: T(Te)("actions.select"),
          delete: T(Te)("actions.delete")
        },
        "onUpdate:value": _,
        onValidation: me
      }, {
        default: nn(() => [
          Zt(w.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : e.field.name === "t" && e.thicknessOptions?.length > 0 ? (F(), Me(Ia, {
        key: 9,
        id: `${e.typePrefix}-${e.field.name}-${e.index}`,
        "data-field": e.field.name,
        "data-index": e.index,
        type: "select",
        value: r.value,
        label: T(Te)(e.field.label || "fields.t"),
        "enable-label": !1,
        options: e.thicknessOptions,
        readonly: e.readonly,
        disabled: U.value,
        required: e.field.required || !1,
        "number-format": e.numberFormat,
        text: {
          select: T(Te)("actions.select"),
          delete: T(Te)("actions.delete")
        },
        output: "number",
        "onUpdate:value": _,
        onValidation: me
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : e.field.name === "w" && e.widthOptions?.length > 0 ? (F(), Me(Ia, {
        key: 10,
        id: `${e.typePrefix}-${e.field.name}-${e.index}`,
        "data-field": e.field.name,
        "data-index": e.index,
        type: "select",
        value: r.value,
        label: T(Te)(e.field.label || "fields.w"),
        "enable-label": !1,
        options: e.widthOptions,
        readonly: e.readonly,
        disabled: de.value,
        required: e.field.required || !1,
        "number-format": e.numberFormat,
        text: {
          select: T(Te)("actions.select"),
          delete: T(Te)("actions.delete")
        },
        output: "number",
        "onUpdate:value": _,
        onValidation: me
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : e.field.name === "imageUpload" ? (F(), Z("button", {
        key: 11,
        type: "button",
        disabled: e.readonly,
        onClick: D[5] || (D[5] = (ie) => w.$emit("open-image-upload"))
      }, [
        ot(T(si), { icon: ["fass", "image"] })
      ], 8, Qm)) : ce("", !0)
    ], 64)) : (F(), Me(Ia, {
      key: 0,
      id: `${e.typePrefix}-${e.field.name}-${e.index}`,
      "data-field": e.field.name,
      "data-index": e.index,
      type: c.value,
      value: r.value,
      label: T(Te)(e.field.label || e.field.name),
      placeholder: T(Te)(e.field.placeholder || e.field.name),
      "enable-label": e.enableLabel,
      output: f.value,
      options: h.value,
      "select-first-option-disabled": e.field.selectFirstOptionDisabled ?? !0,
      disabled: e.field.disabled || C.value,
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
      issue: b.value,
      warning: v.value,
      "disable-required-validation": M.value,
      "onUpdate:value": _,
      onValidation: me,
      onBlur: ge
    }, {
      default: nn(() => [
        z.value ? (F(), Z("p", Jm, [
          ot(T(si), { icon: ["fass", "info-circle"] }),
          an(" " + we(z.value), 1)
        ])) : ce("", !0),
        Zt(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "data-field", "data-index", "type", "value", "label", "placeholder", "enable-label", "output", "options", "select-first-option-disabled", "disabled", "readonly", "required", "allow-zero", "true-value", "false-value", "default", "number-format", "min", "max", "multi-edit", "text", "issue", "warning", "disable-required-validation"]));
  }
}), An = window.__topLayerDialogStack ?? (window.__topLayerDialogStack = K([]));
function Ja(e) {
  return !!e && (e.matches?.(":popover-open") || e.open);
}
const ui = /* @__PURE__ */ new Set();
function Ao(e, n) {
  e.inert = n, n ? ui.add(e) : ui.delete(e);
}
function Xm(e) {
  const n = [];
  let t = e.parentElement;
  for (; t && t !== document.body; )
    n.push(t), t = t.parentElement;
  return n;
}
function Wi() {
  for (const u of ui) u.inert = !1;
  ui.clear();
  const e = An.value, n = e[e.length - 1], t = n?.el ?? null, a = !!n?.modal, i = t ? new Set(Xm(t)) : /* @__PURE__ */ new Set(), s = (u) => {
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
      Ao(c, a);
    }
  };
  s(document.body);
  for (const u of e)
    u.el && u !== n && Ao(u.el, !0);
}
function eg() {
  const e = document.getElementById("smartcut-notices");
  e?.matches(":popover-open") && (e.hidePopover(), e.showPopover());
}
function tg(e, n = {}) {
  const t = /* @__PURE__ */ Symbol("top-layer-dialog"), a = A(() => An.value.findIndex((f) => f.token === t));
  function i() {
    const f = e.value;
    if (!f || Ja(f)) return;
    typeof f.showPopover == "function" ? f.showPopover() : typeof f.showModal == "function" ? f.showModal() : f.setAttribute("open", "");
    const h = n.modal ? n.modal() : !0;
    An.value.some((C) => C.token === t) || An.value.push({ token: t, el: f, modal: h }), Wi(), eg();
  }
  function s() {
    const f = e.value;
    !f || !Ja(f) || (f.matches?.(":popover-open") && typeof f.hidePopover == "function" ? f.hidePopover() : f.open ? f.close() : f.removeAttribute("open"));
  }
  function u() {
    const f = An.value.findIndex((C) => C.token === t);
    if (f < 0) return !1;
    const [h] = An.value.splice(f, 1);
    return h?.el && (h.el.inert = !1), Wi(), !0;
  }
  function r(f) {
    return f.newState === "closed" ? u() : !1;
  }
  function c() {
    const f = e.value;
    f && Ja(f) && s();
    const h = An.value.findIndex((C) => C.token === t);
    h >= 0 && An.value.splice(h, 1), f && (f.inert = !1), Wi();
  }
  return { show: i, close: s, onClosed: u, onToggle: r, cleanup: c, isShown: Ja, stackIndex: a };
}
const ng = {
  key: 0,
  class: "base-dialog__header"
}, ag = {
  key: 1,
  class: "base-dialog__footer"
}, ig = /* @__PURE__ */ vt({
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
    const a = e, i = t, s = K(null), u = K(null), r = K(null), c = K({}), f = !1;
    function h() {
      const le = r.value;
      if (!le) return;
      const j = getComputedStyle(le);
      c.value = {
        "font-family": j.fontFamily,
        "font-size": j.fontSize,
        "line-height": j.lineHeight,
        color: j.color
      };
    }
    const {
      show: C,
      close: b,
      onClosed: v,
      cleanup: M,
      isShown: U,
      stackIndex: de
    } = tg(s, { modal: () => a.modal }), z = A(() => ({
      "base-dialog__body--form": a.bodyForm,
      "smartcut-content": a.compact
    })), _ = A(() => ({ ...c.value }));
    function me() {
      const le = s.value;
      !le || U(le) || (h(), C(), i("opened"));
    }
    function ge() {
      v() && (i("update:open", !1), i("closed"));
    }
    function w(le) {
      le.newState === "closed" && ge();
    }
    function D() {
      b();
    }
    function ie(le) {
      a.closeOnBackdrop && le.target === s.value && b();
    }
    return Je(() => a.open, (le, j) => {
      le !== void 0 && (le && !j ? me() : !le && j && b());
    }), pn(() => {
      a.open === !0 && me();
    }), fi(() => {
      M();
    }), n({
      show: me,
      close: b,
      dialogRef: s,
      bodyRef: u
    }), (le, j) => (F(), Z(Ot, null, [
      be("span", {
        ref_key: "anchorRef",
        ref: r,
        class: "base-dialog__anchor",
        "aria-hidden": "true"
      }, null, 512),
      (F(), Me(di, {
        to: "body",
        disabled: f
      }, [
        be("dialog", {
          ref_key: "dialogRef",
          ref: s,
          popover: "manual",
          class: ut(["base-dialog", [`base-dialog--${e.size}`, { "base-dialog--compact": e.compact, "base-dialog--stacked": T(de) > 0 }]]),
          style: Wt(_.value),
          onClick: ie,
          onToggle: w,
          onClose: ge,
          onKeydown: $o(D, ["esc"])
        }, [
          le.$slots.header || e.title ? (F(), Z("header", ng, [
            Zt(le.$slots, "header", {}, () => [
              be("h3", null, we(e.title), 1),
              be("button", {
                type: "button",
                class: "base-dialog__close",
                "aria-label": "Close",
                onClick: j[0] || (j[0] = //@ts-ignore
                (...P) => T(b) && T(b)(...P))
              }, "×")
            ])
          ])) : ce("", !0),
          be("div", {
            ref_key: "bodyRef",
            ref: u,
            class: ut(["base-dialog__body", z.value])
          }, [
            Zt(le.$slots, "default")
          ], 2),
          le.$slots.footer ? (F(), Z("footer", ag, [
            Zt(le.$slots, "footer", { close: T(b) })
          ])) : ce("", !0)
        ], 38)
      ]))
    ], 64));
  }
}), sg = { class: "full-stock-dialog__intro" }, og = { class: "full-stock-dialog__options" }, lg = ["onClick"], rg = { class: "full-stock-dialog__dim" }, ug = {
  key: 0,
  class: "full-stock-dialog__price"
}, cg = ["onClick"], dg = /* @__PURE__ */ vt({
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
      set: (h) => a("update:open", h)
    }), s = A(() => "Choose sheet size"), u = A(() => {
      const h = [];
      t.materialLabel && h.push(t.materialLabel), t.thickness != null && t.thickness !== "" && h.push(`${t.thickness}mm`);
      const C = h.join(" · ");
      return C ? `Multiple sheet sizes available for ${C}. Pick the one you want to buy.` : "Multiple sheet sizes available. Pick the one you want to buy.";
    });
    let r = !1;
    function c(h) {
      r = !0, a("pick", h), a("update:open", !1);
    }
    function f() {
      r || a("cancel"), r = !1;
    }
    return (h, C) => (F(), Me(ig, {
      open: i.value,
      "onUpdate:open": C[0] || (C[0] = (b) => i.value = b),
      title: s.value,
      size: "sm",
      onClosed: f
    }, {
      footer: nn(({ close: b }) => [
        be("button", {
          type: "button",
          class: "c-btn c-btn--ghost",
          onClick: b
        }, "Cancel", 8, cg)
      ]),
      default: nn(() => [
        be("div", sg, we(u.value), 1),
        be("ul", og, [
          (F(!0), Z(Ot, null, Jt(e.options, (b) => (F(), Z("li", {
            key: `${b.l}x${b.w}`,
            class: "full-stock-dialog__option"
          }, [
            be("button", {
              type: "button",
              class: "full-stock-dialog__option-btn",
              onClick: (v) => c(b)
            }, [
              be("span", rg, we(b.l) + " × " + we(b.w), 1),
              b.cost != null && e.formatPrice ? (F(), Z("span", ug, we(e.formatPrice(b.cost)), 1)) : ce("", !0)
            ], 8, lg)
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title"]));
  }
}), fg = /* @__PURE__ */ on(dg, [["__scopeId", "data-v-df7e1e1c"]]), pg = { class: "checkout-calculator-wrapper" }, mg = {
  key: 0,
  class: "row table-heading"
}, gg = {
  key: 0,
  class: "cell center"
}, hg = ["onClick"], vg = {
  key: 0,
  class: "cell"
}, bg = ["onClick"], yg = { class: "cell" }, kg = ["disabled", "aria-label", "onClick"], wg = { class: "button-wrapper main" }, Sg = ["aria-label"], xg = ["aria-label", "title", "disabled"], Pg = ["aria-label"], Ig = { id: "part-count" }, Cg = {
  key: 5,
  class: "pagination-controls"
}, Lg = { class: "c-btn-group" }, Og = ["disabled"], Eg = ["disabled"], Tg = { class: "pagination-info" }, Ag = ["disabled"], Fg = ["disabled"], Ng = {
  key: 7,
  id: "messages"
}, $g = {
  key: 0,
  class: "heading"
}, Mg = { class: "content" }, Dg = {
  key: 8,
  id: "progress"
}, _g = { id: "diagram-wrapper" }, Rg = {
  key: 0,
  id: "stack"
}, Vg = {
  key: 3,
  class: "debug"
}, qg = /* @__PURE__ */ vt({
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
    const a = jt(() => import("./InputIssues-BW5QKKfg.js")), i = jt(() => import("./Machining-BK1kVS_O.js")), s = jt(() => import("./CustomProducts-B7SefoRv.js")), u = jt(() => import("./ImportCSV--BAqRsyh.js")), r = jt(() => import("./ObjectViewer-C89c1lhH.js")), c = jt(() => import("./ImageUpload-D4MLwPAV.js")), f = jt(() => import("./EcommerceGroups-N9y4sXoK.js")), h = () => import("./Diagram-KBCeqIP7.js"), C = () => import("./Navigation-DIjsj-U-.js"), b = () => import("./StockNavigation-CTqPCeTr.js"), v = () => import("./CalculationSpinner-DXjnfwKA.js"), M = jt(h), U = jt(C), de = jt(b), z = jt(v);
    let _ = !1;
    const me = K(!1);
    function ge() {
      _ || (_ = !0, h().then(() => {
        me.value = !0;
      }), C(), b(), v());
    }
    const {
      inputs: w,
      totalInputShapes: D,
      getShapeGrainSummary: ie,
      updateNumberFormat: le,
      validateInputStock: j,
      // validateInputShapeField,
      // validateInputStockField,
      removeInputShape: P,
      addInputShape: R,
      addInputStock: re,
      cloneInputShape: se,
      updateInputShape: oe,
      linkRowMaterialByName: Ke,
      validationIssues: et,
      setExtrasOptionsFromPricing: Pe,
      getCentralizedOptions: Fe
    } = Xo(), { r: Re, updateFromResult: W, stackedStock: J, uniqueAddedShapes: ye, uniqueUsedStock: qe, usedStock: te, activeStockAutoId: ke, activeStock: Ve, setActiveStockAutoId: kt } = $f();
    Tf({
      stockList: Re.stockList
    }, {
      stockList: { itemsPerPage: 10 }
    });
    const { progress: ct, reset: Yt } = ol(), { addNotice: lt } = ms();
    Je(() => w.inputStock.value?.length ?? 0, (o) => {
      o > 0 && ge();
    }, { immediate: !0 }), Je(
      () => w.inputStock.value?.[0]?.db_sawId ?? null,
      (o) => {
        if (!o || String(o) === I.value) return;
        const l = S.value?.[String(o)];
        l && y(l);
      }
    );
    const ln = K(!1);
    Je(() => ct.value.complete, (o) => {
      o && (ln.value = !0);
    }, { immediate: !0 });
    const Xt = A(() => w.inputShapes.value.filter(Xe)), xn = (o) => !o || !Array.isArray(o) ? [] : o.map((l) => Sc({ parts: [l] }).parts?.[0] || l), dt = e, Y = t, Le = K(!1), He = K(navigator?.language || "en-US"), Ee = aa(null), it = window.location.hostname, tt = K(!1), ft = K(!0), pt = Or("Checkout/currentURL", window.location.href), mt = K([]), mn = K(null), st = K(null), rn = K(!1), gn = K(!1), xt = K(!1), hn = K(!1), $n = K(!1), Mn = K(Du()), vn = K(!1), wt = K(1), At = K(10), { socket: Pt } = Bf({
      refs: {
        connected: tt,
        thinking: xt
      },
      callbacks: {
        onResult(o) {
          const l = o.optimisation;
          if (W(l), !l.shapeList?.length || !l.stockList?.length) {
            Yt(), lt({
              type: "error",
              message: Te("errors.calculation.no_result"),
              additional: [Te("errors.validation.check_inputs")]
            }), xt.value = !1;
            return;
          }
          if ((he.apiVersion || 3) === 2 ? st.value = Jp(
            o.jobId,
            ye.value,
            qe.value,
            te.value,
            Re.offcuts?.value || [],
            w.inputShapes.value,
            Re.metadata.value,
            he.resultOrientationModel
          ) : st.value = Qp(
            o.jobId,
            ye.value,
            qe.value,
            te.value,
            Re.offcuts?.value || [],
            w.inputShapes.value,
            Re.metadata.value,
            he.resultOrientationModel
          ), Re?.metadata?.value?.unplacedParts?.length) {
            const p = Re.metadata.value.unplacedParts.map((x) => x.id).join();
            lt({
              type: "warning",
              message: Te("errors.validation.parts_not_fit", { count: Re.metadata.value.unplacedParts.length }) + ": " + p
            });
          }
          st.value && (st.value.apiResultV3 = $c({
            jobId: o.jobId,
            saw: l.saw,
            stockList: l.stockList,
            shapeList: l.shapeList,
            cutList: l.cutList,
            offcuts: Re.offcuts?.value || [],
            unusableShapes: l.unusableShapes,
            metadata: Re.metadata.value
          }), Y("result", st.value)), xt.value = !1;
        },
        onUser(o) {
          Ee.value = o;
        },
        onConnectError(o) {
          const l = o?.kind === "rejected", m = o?.endpoint;
          lt({
            type: "error",
            message: l ? Te("errors.general.server") : Te("errors.network.cannot_connect"),
            additional: m ? [m, o] : [o]
          });
        },
        onError(o) {
          lt({
            type: "error",
            message: Te("errors.general.error_occurred"),
            additional: [o]
          });
        }
      }
    }), bn = {
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
        button: "#0e7fa6",
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
    }, he = cn(bn), _e = cn({
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
    }), I = K(null), S = K({});
    function y(o) {
      if (o) {
        if (o.stockType !== void 0 && (Zi.includes(o.stockType) || console.warn(`${o.stockType} is not a valid stockType, expected ${Zi.join("|")}`), _e.stockType = o.stockType, o.stockType === "linear" && (_e.cutType = void 0, _e.cutPreference = void 0)), o.bladeWidth !== void 0) {
          const l = typeof o.bladeWidth == "string" ? parseFloat(o.bladeWidth) : o.bladeWidth;
          l >= 0 ? _e.bladeWidth = l : console.warn(`SmartCut - you provided an incorrect blade width of: ${o.bladeWidth}`);
        }
        if (o.cutType !== void 0 && (_e.cutType = o.cutType), o.cutPreference !== void 0 && (lo.includes(o.cutPreference) ? _e.cutPreference = o.cutPreference : console.warn(`SmartCut - cut preference ${o.cutPreference || "N/A"} is not valid. Expected: ${lo.join("|")}`)), o.guillotineOptions !== void 0 && typeof o.guillotineOptions == "object" && Object.assign(_e.guillotineOptions, o.guillotineOptions), o.stackHeight !== void 0) {
          const l = typeof o.stackHeight == "string" ? parseFloat(o.stackHeight) : o.stackHeight;
          _e.stackHeight = l;
        }
        o.efficiencyOptions !== void 0 && typeof o.efficiencyOptions == "object" && Object.assign(_e.efficiencyOptions, o.efficiencyOptions), o.options !== void 0 && typeof o.options == "object" && (o.options.stockSelection !== void 0 && (_e.options.stockSelection = o.options.stockSelection), o.options.stackingMode !== void 0 && (_e.options.stackingMode = o.options.stackingMode), o.options.minSpacing !== void 0 && (_e.options.minSpacing = o.options.minSpacing)), o.db_id && (I.value = String(o.db_id));
      }
    }
    const E = K(null), B = A(() => !!he.enable?.groups && !dt.readonly), fe = K(null), Ie = K(0), Ne = K(null), Ae = A(() => {
      const o = w.inputStock.value.map((l) => l.grain).filter((l) => !!l);
      return o.length ? o.every((l) => l === "l") ? "l" : o.every((l) => l === "w") ? "w" : o.some((l) => l === "l" || l === "w") ? "y" : "n" : "n";
    }), We = A(() => ({
      numberFormat: he.numberFormat,
      decimalPlaces: he.decimalPlaces ?? 2,
      fractionRoundTo: he.fractionRoundTo ?? 0
    })), Et = (o) => {
      Ne.value?.currentGroup && (fe.value = o, Ie.value++);
    }, un = (o) => {
      E.value = w.inputShapes.value.find((l) => l.autoId === o) ?? null;
    }, fa = () => {
    }, pa = K(!1), Dn = K(""), ma = K(""), _n = K(!1), g = K(null);
    function L(o) {
      const l = g.value;
      if (_n.value = !1, g.value = null, !l) return;
      const m = { fullStock: !0, l: o.l, w: o.w };
      if (oe(l.shape.autoId, m) || (l.shape.fullStock = !0, l.shape.l = o.l, l.shape.w = o.w, l.shape.isNew || l.shape.validate({ fields: ["fullStock", "l", "w"] })), o.db_id || o.code) {
        const x = l.shape.stock || {};
        l.shape.stock = {
          ...x,
          ...o.db_id ? { db_id: o.db_id } : {},
          ...o.code ? { code: o.code } : {}
        };
      }
    }
    function H() {
      _n.value = !1, g.value = null;
    }
    Je(et, (o) => {
      o?.length > 0 ? (pa.value = !0, Dn.value = "Validation Errors", ma.value = o.map((l) => `${Qa(l.message, l.context || l.params)} (${l.category.join(", ")})`).join(`

`)) : Dn.value === "Validation Errors" && (pa.value = !1, Dn.value = "", ma.value = "");
    }, { deep: !0 });
    const Q = cn({
      banding: null,
      finish: null,
      info: null,
      planing: null,
      machining: null,
      addon: null
      // imageUpload: null
    }), V = K([]), X = K([]), ve = K([]), Oe = K([]);
    function Be(o) {
      if (o.length > 1) return !0;
      if (o.length === 0) return !1;
      const l = o[0];
      return !!(l.brand || l.variant || l.displayName && l.displayName !== l.name);
    }
    const gt = cn({
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
    }), Ce = cn({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["l1", "l2", "w1", "w2"]
    }), je = cn({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["a", "b"]
    }), Ue = cn({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]
      // All sides and faces by default
    }), Ft = K(null), ze = cn({}), Nt = cn({}), en = cn({}), Qn = K(null), Pn = K(null), pi = A(() => ({
      banding: ze.rules,
      finish: Nt.rules,
      planing: en.rules
    })), Rn = A(() => {
      const o = ze.recut;
      return o?.enabled ? { limits: Dc(o) } : null;
    }), Ta = A(() => Vf({
      stockType: _e.stockType || "sheet",
      materials: V.value,
      minDimension: he.minDimension,
      orientationModel: he.orientationModel,
      ...he.fieldOrder && he.fieldOrder.length > 0 ? { allowedFieldIds: he.fieldOrder } : {}
    })), Vn = K([]), qn = K({
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
    }), Ge = (o, l) => l ? Hl(l, o).length > 0 ? !0 : o === "banding" ? !!bi(l) : !!Mt(l, o)?.sourceCatalogueKey : !1, $t = ["banding", "finish", "planing"], Aa = (o) => he.enable?.[o] ? w.inputShapes.value.some((l) => Ge(o, l)) : !1, Cs = (o) => $t.includes(o) ? Aa(o) : qn.value[o] ?? !0, Fa = A(() => {
      const o = Ta.value.fields.value, l = Ta.value.allFieldsMap.value, m = o.filter((G) => Cs(G.name)), p = ["orientationLock", "banding", "finish", "planing", "machining", "imageUpload"], x = [];
      let O = null;
      const q = m.filter((G) => G.name !== "fullStock");
      qn.value.fullStock && (O = m.find((G) => G.name === "fullStock") || l.get("fullStock"));
      for (const G of p) {
        const pe = Cs(G), De = q.find(($e) => $e.name === G);
        if (pe && !De) {
          const $e = l.get(G);
          $e && x.push($e);
        }
      }
      const N = Vn.value || [];
      return [
        ...O ? [O] : [],
        ...q,
        ...x,
        ...N
      ];
    }), Na = A(() => {
      let o = Fa.value.length + 2;
      return bt.value && o++, o;
    }), Cl = A(() => {
      const o = {
        id: 34,
        del: 32,
        info: 32
      }, l = {
        id: `${o.id}px`,
        del: `${o.del}px`,
        info: `${o.info}px`
      }, m = [];
      for (const p of Fa.value) {
        if (p.name === "trim") continue;
        const x = p.w ?? "minmax(20px, 1fr)";
        m.push(x);
      }
      return m.unshift(l.id), bt.value && m.push(l.info), m.push(l.del), m.join(" ");
    }), ga = A(() => he.enable?.pagination), Ls = A(() => dt.diagramNav || he.enable?.diagramNav), Bn = A(() => ga.value ? Math.ceil(Xt.value.length / At.value) : 1), Ll = A(() => {
      if (!ga.value) return Xt.value;
      const o = (wt.value - 1) * At.value, l = o + At.value;
      return Xt.value.slice(o, l);
    }), Ol = A(() => ga.value ? (wt.value - 1) * At.value : 0), $a = (o) => {
      o < 1 && (o = 1), o > Bn.value && (o = Bn.value), wt.value = o;
    }, El = () => $a(1), Tl = () => $a(wt.value - 1), Al = () => $a(wt.value + 1), Fl = () => $a(Bn.value), bt = A(() => dt.debug || he.debug || he.enable?.debug), Nl = A(() => {
      try {
        const o = localStorage.getItem("inputs/inputStock");
        if (!o) return "(empty)";
        const l = JSON.parse(o);
        return JSON.stringify(l.map((m) => ({ material: m.material, db_id: m.db_id, l: m.l, w: m.w, t: m.t })), null, 2);
      } catch {
        return "(parse error)";
      }
    }), $l = A(() => {
      try {
        const o = localStorage.getItem("stock-filter-selections");
        return o || "(empty)";
      } catch {
        return "(read error)";
      }
    }), Ml = A(() => ({
      "--btn-color": he.colors.buttonText,
      "--btn-bg": he.colors.button,
      "--btn-hover-bg": Dl(he.colors.button, -8),
      "--btn-focus-ring": he.colors.button
    }));
    function Dl(o, l) {
      const m = o.replace("#", ""), p = parseInt(m, 16), x = Math.round(2.55 * l), O = (p >> 16) + x, q = (p >> 8 & 255) + x, N = (p & 255) + x;
      return `#${(16777216 + (O < 255 ? O < 1 ? 0 : O : 255) * 65536 + (q < 255 ? q < 1 ? 0 : q : 255) * 256 + (N < 255 ? N < 1 ? 0 : N : 255)).toString(16).slice(1)}`;
    }
    const _l = {
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
    }, Os = A(() => dt.showCredit !== void 0 ? dt.showCredit : Ee.value ? !(Ee.value && Ee.value?.api?.whiteLabel) : !0), Ma = {
      // @deprecated Use saw.options.stockSelection instead
      stockSelection: (o) => {
        const l = ["efficiency", "smallest"];
        o && !l.includes(o) ? console.warn(`${o} is not a valid stockSelection, expected ${l.join("|")}`) : _e.options.stockSelection = o;
      },
      // @deprecated Use saw.options.minSpacing instead
      minSpacing: (o) => {
        _e.options.minSpacing = o;
      },
      maxParts: (o) => {
        he.maxParts = o;
      },
      partsPerPage: (o) => {
        o && o > 0 && (At.value = o, he.partsPerPage = o);
      },
      locale: (o) => {
        He.value = o.replace(/_/g, "-");
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
          for (const m in bn.enable)
            m in o && (he.enable[m] = o[m]);
          for (const m in l) {
            const p = l[m], x = Bt(o, [p]), O = bn.enable[p];
            Tt(m, x !== void 0 ? x : O);
          }
          $n.value = Bt(o, ["csvImport"]) ?? bn.enable?.csvImport;
        }
      },
      colors: (o) => {
        if (o)
          for (const l in bn.colors)
            l in o && (he.colors[l] = o[l]);
      },
      orientationModel: (o) => {
        if (![0, 1, 2].includes(o)) {
          he.orientationModel = 0;
          return;
        }
        he.orientationModel = o;
      },
      numberFormat: (o) => {
        if (!["decimal", "fraction"].includes(o)) {
          he.numberFormat = "decimal";
          return;
        }
        he.numberFormat = o;
      },
      customFields: (o) => {
        if (!Array.isArray(o) || !o?.length)
          return;
        const l = [];
        o.forEach((m) => {
          const p = Es(m.id), x = {
            ...m,
            custom: !0,
            id: p,
            name: p,
            // CheckoutField expects 'name' property
            propertyPath: "customData." + p,
            fieldMap: "customData." + p
          };
          m.type === "checkbox" && (x.w = "32px"), m.type === "integer" || m.type === "float" ? x.output = m.output ?? "number" : m.type === "select" && (x.output = m.output ?? "string", x.options = m.options), l.push(x);
        }), Vn.value = l, _t(() => {
          for (const m of w.inputShapes.value)
            m.customData = o.reduce((p, x) => {
              const O = Es(x.id);
              return p[O] = m.customData?.[O] || x.default || "", p;
            }, {});
        });
      }
    }, Rl = (o) => {
      bt.value && Y("log", ["checkout init...", o]), o?.stockFilterEnabled && localStorage.removeItem("inputs/inputStock"), o?.parts && (o.parts = xn(o.parts));
      let l;
      try {
        l = zp(o);
      } catch (p) {
        console.error("[init] validation FAILED:", p.message), Y("error", p.message || "Invalid init data");
        return;
      }
      if (l.saw && y(l.saw), l.sawsById && (S.value = l.sawsById), l?.options) {
        const p = l.options;
        tl(p);
        const x = ["stockType", "bladeWidth"];
        if (!l.saw && !o?.stockFilterEnabled)
          Y("error", `Saw configuration is required. Missing properties: ${x.join(", ")}`);
        else if (l.saw) {
          const q = x.filter((N) => !(N in l.saw));
          q.length > 0 && Y("error", `Missing required saw properties: ${q.join(", ")}`), (l.saw.cutType === "guillotine" || l.saw.cutType === "beam") && !("cutPreference" in l.saw) && Y("error", "cutPreference is a required saw property for guillotine and beam cut types");
        }
        const O = ["enable", "colors"];
        for (const q in p)
          O.includes(q) || (he[q] = p[q]), q in Ma && Ma[q]?.(p[q]);
      }
      if (l.options.colors && "colors" in Ma && Ma.colors(l.options.colors), l.banding) {
        const p = l.banding;
        "locations" in p && p.locations && (ze.locations = p.locations), "groups" in p && p.groups && (ze.groups = p.groups), "rules" in p && p.rules && (ze.rules = p.rules), "maxGap" in p && typeof p.maxGap == "number" && (ze.maxGap = p.maxGap), "perSide" in p && typeof p.perSide == "boolean" && (ze.perSide = p.perSide), "recut" in p && p.recut && (ze.recut = p.recut);
      }
      if (l.finish) {
        const p = l.finish;
        "locations" in p && p.locations && (Nt.locations = p.locations), "groups" in p && p.groups && (Nt.groups = p.groups), "rules" in p && p.rules && (Nt.rules = p.rules);
      }
      if (l.planing) {
        const p = l.planing;
        "locations" in p && p.locations && (en.locations = p.locations), "groups" in p && p.groups && (en.groups = p.groups), "rules" in p && p.rules && (en.rules = p.rules);
      }
      l.partRules && (Qn.value = l.partRules), l.customValidation && (Pn.value = l.customValidation), xi("banding", l), xi("finish", l), xi("planing", l);
      for (const p of ["banding", "finish", "planing"]) {
        const x = !!Bt(l, ["options", "enable", p]), O = !!Bt(l, [p, "containsCatalogueLinked"]), q = Object.keys(Bt(l, [p, "pricing"]) || {}), N = (vi(p)?.labels?.length ?? 0) > 0;
        x && !O && q.length > 0 && !N && lt({
          type: "error",
          message: `${Ai(p)} options couldn't be loaded`,
          additional: ["Check that the number of labels matches the pricing levels (details in the console)."]
        });
      }
      jl(l), Vs(l), w.inputShapes.value.length && Us(), gn.value = !0, bt.value && Y("log", ["init complete"]);
      const m = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(m), _t(() => {
        Os.value && !ir() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      }), l.parts?.length && _t(() => {
        bt.value && Y("log", ["loading parts via init..."]), w.inputShapes.value.length = 0;
        let p = 0;
        for (const O of l.parts) {
          const q = _a(O);
          q ? q.issues?.length && bt.value && Y("log", [`SmartCut - issues found while importing part at index ${p}`, q.issues]) : bt.value && Y("log", [`SmartCut - error loading part at index ${p}`, O]), p++;
        }
        w.inputShapes.value.flatMap((O) => Hi(O.issues)).length && lt({
          type: "error",
          message: Te("errors.general.issues_found")
        }), bt.value && Y("log", [`loaded ${w.inputShapes.value.length} parts via init`]);
      });
    }, Tt = (o, l = !1) => {
      qn.value[o] = l;
    }, Es = (o) => o ? Tu(o)?.toLowerCase() : null, Vl = (o, l, m) => {
      try {
        if (!o || !l) return;
        const x = m !== null && m !== "" && m !== void 0 && !["orientationLock", "grain"].includes(l), O = (G, pe) => {
          if (!oe(G.autoId, pe)) {
            for (const [$e, Ye] of Object.entries(pe))
              _i(G, $e, Ye);
            G.isNew || G.validate({ fields: Object.keys(pe) });
          }
          "material" in pe && Ke(G.autoId, pe.material);
        }, q = (G, pe, De) => {
          const $e = pe ?? G.material, Ye = De ?? G.t, Lt = $e ? String($e).toUpperCase() : null, Ze = w.inputStock.value.find((It) => {
            const Rt = !Lt || Un(It) === Lt, Gn = Ye == null || ue({ v: It.t }) === ue({ v: Ye });
            return Rt && Gn;
          });
          return Ze ? { l: ue({ v: Ze.l }), w: ue({ v: Ze.w }) } : null;
        }, N = (G, pe) => {
          if (!G) return [];
          const De = String(G).toUpperCase(), $e = pe != null ? ue({ v: pe }) : null, Ye = /* @__PURE__ */ new Set(), Lt = [];
          for (const Ze of w.inputStock.value) {
            if (Un(Ze) !== De || $e != null && ue({ v: Ze.t }) !== $e) continue;
            const It = ue({ v: Ze.l }), Rt = ue({ v: Ze.w });
            if (typeof It != "number" || typeof Rt != "number") continue;
            const Gn = `${It}x${Rt}`;
            Ye.has(Gn) || (Ye.add(Gn), Lt.push({
              l: It,
              w: Rt,
              db_id: Ze.db_id,
              code: Ze.code,
              cost: typeof Ze.cost == "number" ? Ze.cost : null
            }));
          }
          return Lt;
        };
        if (l === "material" && (!m || m === "")) {
          const G = { material: null, t: null };
          _e.stockType === "linear" && (G.w = null), O(o, G);
          return;
        }
        if (l === "material" && m && V.value?.length) {
          const G = V.value.find((pe) => pe.name === m);
          if (G) {
            const pe = { material: m }, De = $s(m), $e = o.t != null ? ue({ v: o.t }) : null;
            if (!($e != null && De.includes($e)) && De.length > 0 && (De.length === 1 || $e != null) && (pe.t = De[0]), _e.stockType === "linear" && o.w != null && G.widths) {
              const Ze = ue({ v: o.w });
              !G.widths.some((It) => ue({ v: It }) === Ze) && G.widths.length > 0 && (pe.w = ue({ v: G.widths[0] }));
            }
            if (G.fullSizeOnly) {
              const Ze = q(
                o,
                m,
                pe.t != null ? pe.t : o.t
              );
              pe.fullStock = !0, Ze && (pe.l = Ze.l, pe.w = Ze.w);
            } else o.fullStock && (pe.fullStock = !1);
            O(o, pe), In(o, G), Yn(o);
            const Lt = w.inputShapes.value.indexOf(o);
            for (const Ze of ["banding", "finish", "planing"]) {
              if (Q[Ze] !== Lt) continue;
              const It = jn(o, Ze), Rt = Ze === "banding" && !!bi(o);
              if (!It.options.length && !Rt) {
                Q[Ze] = null;
                continue;
              }
              Pe(Ze, It.options, It.labels, It.pricing);
            }
            return;
          }
        }
        if (l === "fullStock") {
          if (m !== !0 && Rs(o) || m === !0 && !yi(o))
            return;
          if (m === !0) {
            const G = N(o.material, o.t);
            if (G.length > 1) {
              g.value = { shape: o, options: G }, _n.value = !0;
              return;
            }
            const pe = q(o);
            if (pe) {
              O(o, { fullStock: !0, l: pe.l, w: pe.w });
              return;
            }
          } else {
            O(o, { fullStock: !1, l: null, w: null });
            return;
          }
        }
        if ((l === "material" || l === "t") && o.fullStock) {
          const G = {
            ...o,
            material: l === "material" ? m : o.material,
            t: l === "t" ? m : o.t
          };
          if (!yi(G)) {
            O(o, { [l]: m, fullStock: !1, l: null, w: null });
            return;
          }
          const pe = q(
            o,
            l === "material" ? m : void 0,
            l === "t" ? m : void 0
          );
          if (pe) {
            O(o, { [l]: m, l: pe.l, w: pe.w });
            return;
          }
        }
        if (o.isNew)
          if (x)
            o.isNew = !1;
          else {
            _i(o, l, m);
            return;
          }
        let ne;
        if (l.includes(".")) {
          const G = l.split("."), pe = G[0], De = G.slice(1).join("."), Ye = { ...o[pe] || {} };
          _i(Ye, De, m), ne = { [pe]: Ye };
        } else
          ne = { [l]: m };
        if (O(o, ne), l === "t" && V.value?.length && o.material) {
          const G = V.value.find((pe) => pe.name === o.material);
          G && In(o, G);
        }
        l === "t" && _e.stockType === "linear" && V.value?.length && o.material && _t(() => {
          const G = Ms(o);
          if (G.length > 0 && o.w != null) {
            const pe = ue({ v: o.w });
            G.some((De) => ue({ v: De }) === pe) || O(o, { w: ue({ v: G[0] }) });
          }
        });
      } catch (p) {
        console.error("[CHECKOUT] Error updating field:", p);
      }
    }, ql = () => {
    }, Bl = (o, l) => {
      o?.isNew && (o.isNew = !1), o.validate({ fields: [l] }), ["l", "w", "t"].includes(l) && Ts(o), mi(o);
    }, mi = (o) => {
      if (!o || o.isNew) return;
      const l = Pn.value, m = Rn.value, p = !!(l?.enabled && l.rules?.length);
      if (!(!p && !m)) {
        o.issues && (o.issues = o.issues.filter((x) => !x.category?.includes("custom")));
        try {
          if (p) {
            const x = Oo(l.rules, [o.toData()]);
            for (const O of x.errors)
              new St({
                item: o,
                type: "error",
                category: ["custom"],
                field: [["banding"]],
                message: O.message,
                shouldTranslate: !1
              });
          }
          if (m) {
            const x = is(o.toData(), m.limits);
            !x.allowed && x.reason && new St({
              item: o,
              type: "error",
              category: ["custom"],
              field: [["banding"]],
              message: x.reason,
              shouldTranslate: !1
            });
          }
        } catch (x) {
          console.error("[CHECKOUT] Error validating custom rules:", x);
        }
      }
    };
    Je(
      () => w.inputShapes.value.map(
        (o) => JSON.stringify(o.extras?.banding?.sides ?? {})
      ).join("|"),
      () => {
        for (const o of w.inputShapes.value) mi(o);
      }
    );
    const Ts = (o) => {
      if (Qn.value && o && !o.isNew && !(!o.l && !o.w))
        try {
          const l = xp(o, Qn.value);
          if (o.issues && (o.issues = o.issues.filter((m) => !m.category?.includes("part"))), !l.valid && l.violations.length > 0)
            for (const m of l.violations) {
              const p = Pp(m), x = m.dimension === "longSide" ? "l" : m.dimension === "shortSide" ? "w" : m.dimension === "t" ? "t" : null;
              new St({
                item: o,
                type: "error",
                category: ["part"],
                field: x ? [[x]] : [],
                message: p,
                shouldTranslate: !1
              });
            }
        } catch (l) {
          console.error("[CHECKOUT] Error validating part:", l);
        }
    }, jl = (o) => {
      if (Bt(he, ["enable", "machining"]) && o?.machining) {
        for (const l in gt)
          o.machining[l] && (gt[l] = o.machining[l]);
        if (["holes", "hingeHoles"].forEach((l) => {
          o?.machining?.[l] && (gt[l].enabled = o?.machining?.[l].enabled);
        }), o?.machining?.corners?.types?.length && (gt.corners.enabled = !0, gt.corners.types = o.machining.corners.types), o.banding && o?.options?.enable?.banding) {
          if (!Ce) return;
          gt.banding = {
            enabled: !0
          }, Ce.options.length && (gt.banding.options = Ce.options), Ce.labels.length && (gt.banding.labels = Ce.labels), fo(Ce.pricing) && (gt.banding.pricing = Ce.pricing);
        }
      }
    }, Ul = (o = null) => {
      E.value = o, o && Xe(o) && o.l && o.w ? Le.value = !0 : alert(Te("machining.enter_dimensions_first"));
    }, Gl = () => {
      Le.value = !1;
    }, gi = K(!1), Wl = (o = null) => {
      E.value = o, o && (gi.value = !0);
    }, zl = () => {
      gi.value = !1;
    }, As = (o) => {
      if (!o) return [];
      const l = o.stockId ?? o.stock?.id, m = l ? w.inputStock.value?.find((x) => String(x.id) === String(l)) : null;
      return (m?.extras?.customProducts ?? m?.material?.extras?.customProducts ?? []).length ? [] : [];
    }, Kl = (o) => As(o).filter((l) => l.type === "machining"), Fs = (o = []) => {
      if (X.value = [], ve.value = [], Tt("t", !1), !!o.length) {
        for (const l of o) {
          if (!l?.t) continue;
          const m = oa(l);
          if (m) {
            const p = Da(m, !0);
            p.length === 2 ? (Ql(p), Tt("t", !0), l.t = X.value[0]) : Y("error", "bonded thickness found which does not have 2 options");
          } else X.value.includes(l.t) || X.value.push(l.t);
        }
        X.value.length > 1 && Tt("t", !0);
      }
    }, hi = (o = []) => {
      if (Oe.value = [], !o.length) {
        Tt("w", !1);
        return;
      }
      for (const l of o) {
        if (!l?.w) continue;
        const m = ue({ v: l.w });
        Oe.value.includes(m) || Oe.value.push(m);
      }
      Oe.value.length >= 1 ? Tt("w", !0) : Tt("w", !1);
    }, Ns = (o) => {
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
      const l = V.value.find((G) => G.name === o.material);
      let m;
      if (l)
        m = [...l.thicknesses];
      else {
        const G = String(o.material).trim().toUpperCase(), pe = /* @__PURE__ */ new Set();
        for (const De of w.inputStock.value) {
          if (Gi(De) !== G || De.t == null) continue;
          const $e = oa(De);
          pe.add($e || ue({ v: De.t }));
        }
        m = Array.from(pe).sort((De, $e) => ue({ v: De }) - ue({ v: $e }));
      }
      const p = [...m], x = [];
      for (let G = 0; G < p.length; G++) {
        const pe = p[G], De = Da(pe), $e = [];
        if (De.length) {
          for (const Ye of De)
            p[G] = Ye, $e.push(G);
          G++;
        }
        $e.length && x.push($e);
      }
      const O = String(o.material).trim().toUpperCase(), q = /* @__PURE__ */ new Set();
      for (const G of w.inputStock.value)
        Gi(G) === O && G.t != null && (oa(G) || q.add(ue({ v: G.t })));
      const N = p.map((G) => ue({ v: G }));
      return {
        thicknesses: p.filter((G) => {
          const pe = ue({ v: G });
          return q.has(pe) ? !0 : !ve.value.some(($e) => {
            if ($e.length !== 2) return !1;
            const Ye = ue({ v: X.value[$e[0]] }), Lt = ue({ v: X.value[$e[1]] }), Ze = Math.min(Ye, Lt), It = Math.max(Ye, Lt);
            return pe === Ze && N.includes(It);
          });
        }),
        bondedThicknesses: x
      };
    }, $s = (o) => o ? Ns({ material: o }).thicknesses.map((l) => ue({ v: l })).filter((l) => typeof l == "number" && Number.isFinite(l)) : [], Ms = (o) => {
      if (!o) return [];
      if (!V.value?.length || !o.material)
        return Oe.value;
      const l = V.value.find((m) => m.name === o.material);
      if (!l)
        return Oe.value;
      if (o.t != null && w.inputStock?.value?.length) {
        const m = ue({ v: o.t }), p = /* @__PURE__ */ new Set();
        for (const x of w.inputStock.value)
          x.material?.toUpperCase() === o.material && ue({ v: x.t }) === m && x.w != null && p.add(ue({ v: x.w }));
        if (p.size > 0)
          return Array.from(p).sort((x, O) => x - O);
      }
      return l.widths || Oe.value;
    }, vi = (o) => o === "banding" ? Ce : o === "finish" ? je : o === "planing" ? Ue : null, Mt = (o, l) => Pl(Ra(o?.stock?.db_id) || null, l), bi = (o) => nm(Ra(o?.stock?.db_id) || null), Ds = (o) => {
      switch (o) {
        case "banding":
          return ze.groups;
        case "finish":
          return Nt.groups;
        case "planing":
          return en.groups;
        default:
          return;
      }
    }, _s = () => w.inputStock.value.some((o) => tm(o)), jn = (o, l) => {
      const m = vi(l), p = Ds(l), x = m?.formulas, O = {
        options: m?.options ?? [],
        labels: m?.labels ?? [],
        pricing: m?.pricing ?? {},
        ...x && { formulas: x },
        displayNames: m?.displayNames ?? {},
        ...p?.length && { locationGroups: p }
      }, q = { options: [], labels: [], pricing: {}, displayNames: {} };
      if (!o?.material) return O;
      const N = Mt(o, l);
      if (!Yp(N))
        return m?.containsCatalogueLinked || _s() ? q : O;
      const ne = N.code || N.name, G = N.groups;
      if (G && G.length > 0) {
        const It = Ds(l) || [], Rt = {};
        for (const Vt of G)
          typeof Vt.price == "number" && (Rt[Vt.id] = Vt.price);
        const Gn = It.filter((Vt) => Rt[Vt.id] !== void 0).map((Vt) => ({ ...Vt, price: Rt[Vt.id] })), zs = {}, Ks = [], Hs = {}, Pi = {}, Ii = N.pricingFormula;
        for (const Vt of Gn) {
          const qa = `${ne}|${Vt.id}`;
          zs[qa] = Vt.price, Ks.push(qa), Vt.label && (Hs[qa] = Vt.label), typeof Ii == "string" && Ii.trim() && (Pi[qa] = Ii.trim());
        }
        const Ir = [Ai(l)];
        return {
          options: [Ks],
          labels: Ir,
          pricing: zs,
          ...Object.keys(Pi).length && { formulas: Pi },
          displayNames: Hs,
          locations: [],
          // empty so render path applies hideIndividualLocations filter
          locationGroups: Gn
        };
      }
      const pe = Xp(N, m, ne), De = N.labels?.length ? N.labels : [Ai(l)], $e = am(N, l) ? [] : Gs(pe), Ye = N.displayNames && typeof N.displayNames == "object" ? { ...N.displayNames } : { ...m?.displayNames ?? {} };
      N.code && N.name && N.code !== N.name && (Ye[N.code] = N.name);
      const Lt = { ...x || {} }, Ze = N.pricingFormula;
      if (typeof Ze == "string" && Ze.trim()) {
        const It = Ze.trim();
        for (const Rt of Object.keys(pe)) Lt[Rt] = It;
      }
      return {
        options: $e,
        labels: De,
        pricing: pe,
        ...Object.keys(Lt).length && { formulas: Lt },
        displayNames: Ye,
        locations: N.locations?.length ? N.locations : void 0
      };
    }, Hl = (o, l) => jn(o, l).options, Rs = (o) => !o?.material || !V.value?.length ? !1 : !!V.value.find((m) => m.name === o.material)?.fullSizeOnly, yi = (o) => {
      if (!o?.material) return !1;
      const l = String(o.material).toUpperCase(), m = o.t != null ? ue({ v: o.t }) : null;
      return w.inputStock.value.some((p) => Un(p) !== l || m != null && ue({ v: p.t }) !== m ? !1 : !!p.allowExactFitShapes);
    }, ha = (o, l) => {
      if (!l.fullSizeOnly) return;
      const m = o.t, p = w.inputStock.value.find((x) => x.material === l.name && (m == null || ue({ v: x.t }) === ue({ v: m })));
      o.fullStock = !0, p && (o.l = ue({ v: p.l }), o.w = ue({ v: p.w }));
    }, Zl = (o) => {
      const l = { banding: !1, finish: !1, planing: !1, machining: !1 };
      if (!o?.material || !(Ce?.containsCatalogueLinked || je?.containsCatalogueLinked || Ue?.containsCatalogueLinked || _s())) return l;
      const p = Ra(o?.stock?.db_id), x = ri(p || null) || {};
      return {
        banding: !x.banding,
        finish: !x.finish,
        planing: !x.planing,
        machining: !x.machining
      };
    }, Vs = (o) => {
      if (o?.stock?.some((l) => l?.material)) {
        V.value = [], X.value = [], ve.value = [];
        const l = /* @__PURE__ */ new Map();
        for (const x of o.stock) {
          if (!x.material) continue;
          const O = Un(x), q = (x.code || x.name || "").toString().trim(), N = x.name || x.customData?.stockName || x.material || O;
          if (l.has(O) ? x.fullSizeOnly && (l.get(O).fullSizeOnly = !0) : l.set(O, {
            displayName: N,
            material: x.customData?.materialLabel || x.material,
            db_id: x.db_id,
            codes: /* @__PURE__ */ new Set(),
            brand: x.brand,
            variant: x.variant,
            imageUrl: x.imageUrl,
            color: typeof x.color == "string" ? x.color : void 0,
            fullSizeOnly: !!x.fullSizeOnly,
            thicknesses: /* @__PURE__ */ new Set(),
            widths: /* @__PURE__ */ new Set(),
            dimensions: /* @__PURE__ */ new Set()
          }), q && l.get(O).codes.add(q), x.t != null) {
            const ne = oa(x);
            ne ? l.get(O)?.thicknesses.add(ne) : l.get(O)?.thicknesses.add(ue({ v: x.t }));
          }
          if (_e.stockType === "linear" && x.w != null && l.get(O)?.widths.add(ue({ v: x.w })), _e.stockType !== "linear" && x.l != null && x.w != null) {
            const ne = ue({ v: x.l }), G = ue({ v: x.w });
            l.get(O)?.dimensions.add(`${ne}x${G}`);
          }
        }
        const m = Array.from(l.entries()).map(([x, O]) => {
          const q = [], N = [];
          for (const ne of O.thicknesses)
            typeof ne == "string" && ne.includes(",") ? N.push(ne) : q.push(ue({ v: ne }));
          return { name: x, sets: O, regularThicknesses: q, bondedStrings: N };
        });
        V.value = m.map(({ name: x, sets: O, regularThicknesses: q }) => {
          const N = O.codes.size === 1 ? [...O.codes][0] : void 0, ne = {
            name: x,
            displayName: O.displayName,
            material: O.material,
            db_id: O.db_id,
            code: N,
            brand: O.brand,
            variant: O.variant,
            imageUrl: O.imageUrl,
            color: O.color,
            fullSizeOnly: O.fullSizeOnly,
            thicknesses: q.sort((G, pe) => G - pe)
          };
          return _e.stockType === "linear" && O.widths.size > 0 && (ne.widths = Array.from(O.widths).sort((G, pe) => G - pe)), _e.stockType !== "linear" && O.dimensions.size > 0 && (ne.dimensions = Array.from(O.dimensions).map((G) => {
            const [pe, De] = G.split("x").map(($e) => Number($e));
            return { l: pe, w: De };
          })), ne;
        });
        const p = /* @__PURE__ */ new Set();
        for (const x of V.value)
          for (const O of x.thicknesses)
            p.add(ue({ v: O }));
        X.value = Array.from(p).sort((x, O) => x - O);
        for (let x = 0; x < m.length; x++) {
          const { bondedStrings: O } = m[x], q = V.value[x];
          for (const N of O) {
            const ne = Da(N, !0);
            if (ne.length !== 2) continue;
            const G = [];
            for (const pe of ne) {
              const De = ue({ v: pe });
              let $e = X.value.findIndex((Ye) => ue({ v: Ye }) === De);
              $e === -1 ? (X.value.push(De), q.thicknesses.push(De), $e = X.value.length - 1) : q.thicknesses.some((Ye) => ue({ v: Ye }) === De) || q.thicknesses.push(De), G.push($e);
            }
            ve.value.push(G);
          }
        }
        if (_e.stockType === "linear") {
          const x = /* @__PURE__ */ new Set();
          for (const O of V.value)
            if (O.widths)
              for (const q of O.widths)
                x.add(ue({ v: q }));
          Oe.value = Array.from(x).sort((O, q) => O - q);
        }
        Tt("material", Be(V.value)), X.value.length > 1 ? Tt("t", !0) : Tt("t", !1), _e.stockType === "linear" && Oe.value.length > 1 ? Tt("w", !0) : _e.stockType === "linear" && Tt("w", !1);
      } else
        Fs(o.stock);
      _e.stockType === "linear" && !V.value?.length && hi(o.stock);
    }, Jl = (o) => {
      if (!o?.length) {
        V.value = [], X.value = [], Oe.value = [];
        return;
      }
      if (o.some((m) => m?.material)) {
        const m = /* @__PURE__ */ new Map();
        ve.value = [];
        for (const O of o) {
          if (!O.material) continue;
          const q = Un(O), N = (O.code || O.name || "").toString().trim(), ne = (O.material || q).toString();
          if (m.has(q) ? O.fullSizeOnly && (m.get(q).fullSizeOnly = !0) : m.set(q, {
            displayName: ne,
            material: O.customData?.materialLabel || O.material,
            db_id: O.db_id,
            codes: /* @__PURE__ */ new Set(),
            brand: O.brand,
            variant: O.variant,
            imageUrl: O.imageUrl,
            color: typeof O.color == "string" ? O.color : void 0,
            fullSizeOnly: !!O.fullSizeOnly,
            thicknesses: /* @__PURE__ */ new Set(),
            widths: /* @__PURE__ */ new Set(),
            dimensions: /* @__PURE__ */ new Set()
          }), N && m.get(q).codes.add(N), O.t != null) {
            const G = oa(O);
            G ? m.get(q)?.thicknesses.add(G) : m.get(q)?.thicknesses.add(ue({ v: O.t }));
          }
          if (_e.stockType === "linear" && O.w != null && m.get(q)?.widths.add(ue({ v: O.w })), _e.stockType !== "linear" && O.l != null && O.w != null) {
            const G = ue({ v: O.l }), pe = ue({ v: O.w });
            m.get(q)?.dimensions.add(`${G}x${pe}`);
          }
        }
        const p = Array.from(m.entries()).map(([O, q]) => {
          const N = [], ne = [];
          for (const G of q.thicknesses)
            typeof G == "string" && G.includes(",") ? ne.push(G) : N.push(ue({ v: G }));
          return { name: O, sets: q, regularThicknesses: N, bondedStrings: ne };
        });
        V.value = p.map(({ name: O, sets: q, regularThicknesses: N }) => {
          const ne = q.codes.size === 1 ? [...q.codes][0] : void 0, G = {
            name: O,
            displayName: q.displayName,
            material: q.material,
            db_id: q.db_id,
            code: ne,
            brand: q.brand,
            variant: q.variant,
            imageUrl: q.imageUrl,
            color: q.color,
            fullSizeOnly: q.fullSizeOnly,
            thicknesses: N.sort((pe, De) => pe - De)
          };
          return _e.stockType === "linear" && q.widths.size > 0 && (G.widths = Array.from(q.widths).sort((pe, De) => pe - De)), _e.stockType !== "linear" && q.dimensions.size > 0 && (G.dimensions = Array.from(q.dimensions).map((pe) => {
            const [De, $e] = pe.split("x").map((Ye) => Number(Ye));
            return { l: De, w: $e };
          })), G;
        });
        const x = /* @__PURE__ */ new Set();
        for (const O of V.value)
          for (const q of O.thicknesses)
            x.add(ue({ v: q }));
        X.value = Array.from(x).sort((O, q) => O - q);
        for (let O = 0; O < p.length; O++) {
          const { bondedStrings: q } = p[O], N = V.value[O];
          for (const ne of q) {
            const G = Da(ne, !0);
            if (G.length !== 2) continue;
            const pe = [];
            for (const De of G) {
              const $e = ue({ v: De });
              let Ye = X.value.findIndex((Lt) => ue({ v: Lt }) === $e);
              Ye === -1 ? (X.value.push($e), N.thicknesses.push($e), Ye = X.value.length - 1) : N.thicknesses.some((Lt) => ue({ v: Lt }) === $e) || N.thicknesses.push($e), pe.push(Ye);
            }
            ve.value.push(pe);
          }
        }
        if (_e.stockType === "linear") {
          const O = /* @__PURE__ */ new Set();
          for (const q of V.value)
            if (q.widths)
              for (const N of q.widths)
                O.add(ue({ v: N }));
          Oe.value = Array.from(O).sort((q, N) => q - N);
        }
        Tt("material", Be(V.value)), Tt("t", X.value.length > 1), _e.stockType === "linear" && Tt("w", Oe.value.length > 1);
      } else
        Fs(o), _e.stockType === "linear" && hi(o);
    }, Ql = (o, l = null) => {
      if (!Array.isArray(o)) {
        Y("error", "addBondedThicknesses expects an array");
        return;
      }
      const m = [];
      for (let p of o)
        he.numberFormat === "decimal" && (p = parseFloat(p)), X.value.push(p), l && l.thicknesses.push(p), m.push(X.value.length - 1);
      ve.value.push(m);
    }, Yl = (o) => {
      const { thicknesses: l } = Ns(o);
      return l?.length ? l.map((m) => ({
        label: m?.toString(),
        value: m
      })) : [];
    };
    function Xl(o) {
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
    const er = (o) => {
      const l = Ms(o);
      return l?.length ? l.map((m) => ({
        label: m?.toString(),
        value: m
      })) : [];
    }, Da = (o, l = !1) => {
      if (typeof o == "string" && o.includes(",")) {
        const m = o.split(",");
        if (m.length === 2) {
          const p = parseFloat(m[0]), x = parseFloat(m[1]);
          !isNaN(p) && !isNaN(x) && x !== p * 2 && lt({
            type: "warning",
            message: `Bonded thickness "${o}" does not follow the expected pattern (second value should be double the first)`
          });
        }
        return l ? m.map((p) => ue({ v: p })) : m;
      }
      return [];
    }, tr = () => {
      vn.value ? ar() : nr();
    }, nr = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), vn.value = !0;
    }, ar = () => {
      document.exitFullscreen && document.exitFullscreen(), vn.value = !1;
    }, ir = () => {
      if (Ee.value?.api?.whiteLabel) return !0;
      let o = !0;
      const l = document.querySelector("#smartcut-checkout a#credit");
      if (!l) return o = !1;
      const m = window.getComputedStyle(l);
      return m.display === "none" || m.display === "hidden" || m.opacity === "0" || m.color === "transparent" || m.position !== "absolute" || m.color !== "#4e4e4e" && m.color !== "rgb(78, 78, 78)" ? o = !1 : (ft.value = o, o);
    }, sr = A(() => typeof dt.findExtrasPrice == "function"), or = A(() => he.unitSystem === "imperial" ? "/ square ft" : "/ square m"), lr = A(() => he.unitSystem === "imperial" ? "/ ft" : "/ m"), rr = A(() => [
      {
        type: "banding",
        keys: Ce.keys,
        fallbackLocations: ze.locations,
        show: (o) => Ge("banding", o),
        extraProps: (o) => ({
          priceLabel: lr.value,
          catalogueKey: bi(o) || "",
          // The resolved extra's id drives the picker's on-demand
          // `/extras/:id/levels` fetch. Present whenever the catalogue picker
          // renders (catalogue-linked stock carries a resolved extra with _id).
          catalogueExtraId: String(Mt(o, "banding")?._id || ""),
          catalogueMaxGap: ze.maxGap,
          cataloguePerSide: ze.perSide,
          extraName: Mt(o, "banding")?.name,
          pricePerLength: Mt(o, "banding")?.price
        })
      },
      {
        type: "finish",
        keys: je.keys,
        fallbackLocations: Nt.locations,
        show: (o) => Ge("finish", o),
        extraProps: (o) => ({
          priceLabel: or.value,
          catalogueKey: Mt(o, "finish")?.sourceCatalogueKey || "",
          catalogueExtraId: String(Mt(o, "finish")?._id || ""),
          extraName: Mt(o, "finish")?.name,
          pricePerLength: Mt(o, "finish")?.price
        })
      },
      {
        type: "planing",
        keys: Ue.keys,
        fallbackLocations: en.locations,
        show: (o) => Ge("planing", o),
        extraProps: (o) => ({
          catalogueKey: Mt(o, "planing")?.sourceCatalogueKey || "",
          catalogueExtraId: String(Mt(o, "planing")?._id || ""),
          extraName: Mt(o, "planing")?.name,
          pricePerLength: Mt(o, "planing")?.price
        })
      }
    ]), ur = (o, l) => {
      const m = jn(o, l.type);
      return {
        allOptions: m.options,
        pricing: m.pricing,
        formulas: m.formulas,
        displayNames: m.displayNames,
        labels: m.labels,
        locations: m.locations || l.fallbackLocations,
        locationGroups: m.locationGroups || []
      };
    }, qs = (o, l) => {
      let m, p;
      switch (l) {
        case "banding":
          m = Ce.options, p = Ce.labels;
          break;
        case "finish":
          m = je.options, p = je.labels;
          break;
        case "planing":
          m = Ue.options, p = Ue.labels;
          break;
        default:
          m = [], p = [];
      }
      Tn(o, l, m, p);
    }, Bs = (o) => {
      const l = Object.keys(o);
      return l.length ? Math.max(...l.map((m) => m.split("|").length)) : 0;
    }, ki = (o, l, m) => o ? Vc(
      Object.keys(o).map((p) => p.split("|")),
      m,
      l
    ) : [], cr = (o, l, m, p) => {
      const x = jn(o, l);
      return Ti(o, l, m, (q, N) => {
        const ne = N.filter((G) => G?.trim()).join("|");
        return ne && x.pricing[ne] !== void 0 ? x.pricing[ne] : p ? p(q, N) : null;
      }, x.options, x.labels);
    }, dr = (o, l, m) => {
      let p, x;
      switch (l) {
        case "banding":
          p = Ce.options, x = Ce.labels;
          break;
        case "finish":
          p = je.options, x = je.labels;
          break;
        case "planing":
          p = Ue.options, x = Ue.labels;
          break;
        default:
          p = [], x = [];
      }
      return Ti(o, l, m, dt.findExtrasPrice, p, x);
    }, fr = K({}), pr = (o) => {
      const l = mt.value.findIndex((m) => m.shapeId === o.shapeId);
      l !== -1 ? mt.value[l] = o : mt.value.push(o), window.smartcutImages = mt.value;
    }, mr = (o) => {
      mt.value = mt.value.filter((l) => l.shapeId !== o), window.smartcutImages = mt.value;
    }, gr = (o) => {
      mn.value = mn.value === o ? null : o;
    }, wi = (o = 1) => {
      for (let l = o; l--; ) {
        let m = {
          l: null,
          w: _e.stockType === "linear" && Oe.value.length === 1 ? Oe.value[0] : null,
          t: X.value.length ? X.value[0] : null,
          q: 1,
          material: V.value?.length === 1 ? V.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (w.inputShapes.value.length > 0) {
          const x = w.inputShapes.value[w.inputShapes.value.length - 1];
          m.material = x.material, m.materialId = x.materialId, m.t = x.t, x.stock && (m.stock = { ...x.stock }), _e.stockType === "linear" && x.w && (m.w = x.w);
        }
        const p = R(m);
        p && (Ce?.labels?.length && Tn(p, "banding", Ce.options, Ce.labels), je?.labels?.length && Tn(p, "finish", je.options, je.labels), Ue?.labels?.length && Tn(p, "planing", Ue.options, Ue.labels));
      }
    }, _a = (o = {}) => {
      const l = {
        q: 1,
        // Always set quantity to 1
        ...o
      }, m = R(l);
      return m && (_e.stockType === "linear" && Oe.value.length === 1 && !m.w && (m.w = Oe.value[0]), X.value.length && !m.t && (m.t = X.value[0]), V.value?.length === 1 && !m.material && Ke(m.autoId, V.value[0].name), Ce?.labels?.length && Tn(m, "banding", Ce.options, Ce.labels), je?.labels?.length && Tn(m, "finish", je.options, je.labels), Ue?.labels?.length && Tn(m, "planing", Ue.options, Ue.labels)), m;
    }, hr = (o) => {
      pp(
        o,
        X.value,
        ve.value,
        (l) => ue({ v: l })
      );
    }, js = () => {
      Yt(), kt(null), Re.stockList.value = [], Re.shapeList.value = [], Re.cutList.value = [];
    }, Si = () => {
      w.inputShapes.value.length = 0, dt.inputType !== "formula" && _t(() => wi());
    }, Ra = (o) => {
      if (o)
        return w.inputStock.value.find((l) => l.db_id === o);
    }, Yn = (o) => {
      o.extras && (o.extras.banding = null, o.extras.finish = null, o.extras.planing = null);
    }, vr = (o, l) => {
      const m = jn(o, l);
      return ku(m.pricing);
    }, br = (o) => {
      const l = { pruned: !1, types: /* @__PURE__ */ new Set() };
      if (!o?.extras) return l;
      const m = ["banding", "finish", "planing"];
      for (const p of m) {
        const x = o.extras[p];
        if (!x || Mt(o, p)?.sourceCatalogueKey) continue;
        const q = vr(o, p);
        if (x.faces)
          for (const N of ["a", "b"]) {
            const ne = x.faces[N];
            typeof ne == "string" && ne !== "" && !q.has(ne) && (x.faces[N] = "", l.pruned = !0, l.types.add(p));
          }
        if (x.sides)
          for (const N of ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]) {
            const ne = x.sides[N];
            typeof ne == "string" && ne !== "" && !q.has(ne) && (x.sides[N] = "", l.pruned = !0, l.types.add(p));
          }
      }
      return l;
    }, Un = (o) => Gi(o), yr = (o, l) => {
      const m = o.toUpperCase();
      return w.inputStock.value.find((p) => Un(p) === m && ue({ v: p.t }) === l);
    }, In = (o, l) => {
      const m = ue({ v: o.t }), p = yr(l.name, m), x = {
        db_id: p?.db_id || l.db_id,
        code: p?.code || l.code,
        material: l.displayName || l.name
      };
      typeof m == "number" && Number.isFinite(m) && (x.thickness = m), o.stock = x;
    }, Us = () => {
      const o = /* @__PURE__ */ new Set();
      for (const l of w.inputShapes.value) {
        const m = l.stock, p = l.material?.toUpperCase();
        let x = null;
        if (m?.db_id) {
          const N = Ra(m.db_id);
          N && (x = V.value.find((ne) => ne.name === Un(N))), x || (x = V.value.find((ne) => ne.db_id && ne.db_id === m.db_id));
        }
        if (!x && m?.code && (x = V.value.find((N) => N.code && N.code === m.code)), !x && p && (x = V.value.find((N) => N.name === p)), x)
          l.material = x.name, In(l, x), l.t != null && !x.thicknesses.includes(ue({ v: l.t })) && (l.t = null, l.stock = null, Yn(l)), ha(l, x);
        else {
          if ((m?.db_id || m?.code) && !V.value?.length)
            continue;
          if (V.value?.length === 1) {
            const N = V.value[0], ne = l.material !== N.name;
            l.material = N.name, N.thicknesses.includes(ue({ v: l.t })) || (l.t = ue({ v: N.thicknesses[0] })), In(l, N), ne && Yn(l), ha(l, N);
          } else if (V.value?.length > 1 && l.t) {
            const N = V.value.find((ne) => ne.thicknesses.some((G) => ue({ v: G }) === ue({ v: l.t })));
            N ? (l.material !== N.name && Yn(l), l.material = N.name, In(l, N), ha(l, N)) : (Yn(l), l.material = V.value[0].name, l.t = ue({ v: V.value[0].thicknesses[0] }), In(l, V.value[0]), ha(l, V.value[0]));
          } else V.value?.length > 1 ? (Yn(l), l.material = V.value[0].name, l.t = ue({ v: V.value[0].thicknesses[0] }), In(l, V.value[0]), ha(l, V.value[0])) : !l.t && w.inputStock.value[0]?.t && (l.t = ue({ v: w.inputStock.value[0].t }));
        }
        Ke(l.autoId, l.material);
        const { pruned: O, types: q } = br(l);
        O && q.forEach((N) => o.add(N));
      }
      if (o.size > 0) {
        const l = [...o].join(", ");
        lt({
          type: "warning",
          message: `Some previously selected ${l} options are no longer available and have been cleared. Please review your selection.`
        });
      }
    }, kr = async () => {
      if (ge(), Y("calculating"), xt.value) return !1;
      xt.value = !0, hn.value = !1, Us();
      const o = await Qf({
        t: Te,
        partTrim: he.partTrim,
        maxShapes: he.maxParts || 1e3,
        inputSaw: w.inputSaw.value,
        // Extras validation data
        bandingPricing: Ce.pricing,
        finishPricing: je.pricing,
        planingPricing: Ue.pricing,
        findExtrasPrice: dt.findExtrasPrice,
        getShapeExtrasPricing: (N, ne) => jn(N, ne).pricing,
        // Banding is tuple-canonical on the client: the shape stores the axis
        // tuple, so completeness validates against the tuple-keyed pricing alone —
        // no per-shape SKU codes needed (the SKU is a server-side lookup).
        extrasValidationRules: pi.value,
        extrasLocationGroups: {
          banding: ze.groups,
          finish: Nt.groups,
          planing: en.groups
        },
        onLimit: () => {
          lt({
            type: "error",
            message: Te("limits.max_parts") + " " + he.maxParts
          });
        }
      }), l = o.cleanedShapes ?? w.inputShapes.value, m = o.cleanedStock ?? w.inputStock.value;
      if (Qn.value)
        for (const N of l)
          Ts(N);
      for (const N of l)
        mi(N);
      const p = l.flatMap((N) => N.issues || []).filter((N) => N.type === "error" && N.category?.includes("part") && !N.category?.includes("extras"));
      if (p.length > 0) {
        lt({
          type: "error",
          message: Te("errors.validation.inputs_issue", { 0: "part" }),
          additional: p.map((N) => Qa(N.message, N.context || N.params))
        }), Y("validation-error"), xt.value = !1;
        return;
      }
      if (!o.valid) {
        Y("validation-error"), xt.value = !1;
        return;
      }
      js(), l.forEach((N, ne) => {
        N.createId(ne);
      }), m.forEach((N, ne) => {
        N.createId(ne);
      });
      const x = l.map((N) => se(N)).filter(Boolean);
      if (x.length !== l.length)
        return lt({
          type: "error",
          message: "Some parts have validation errors and cannot be processed",
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), xt.value = !1, !1;
      if (hr(x), Rn.value)
        for (const N of x) Rc(N, Rn.value.limits);
      bt.value && Y("log", [
        "SmartCut - calculating",
        "stock",
        m.map((N) => ({ l: N.l, w: N.w })),
        "parts",
        x.map((N) => ({ l: N.l, w: N.w }))
      ]);
      const O = {
        inputSaw: w.inputSaw.value.toData(),
        inputShapes: x.map((N) => N.toData()),
        inputStock: m.map((N) => {
          const ne = sm(N.toData()), G = fp(N);
          return G != null && (ne.t = G), ne;
        }),
        inputUserGroups: B.value ? w.inputUserGroups.value.map((N) => N.toData()) : [],
        enableEvo: !0,
        useInventory: !1,
        domain: it,
        extrasOptions: Fe(),
        // SKU/name maps for the cutlist CSV's operator-meaningful labels
        // (internal-only; resolved server-side as SKU → name → tuple). WC
        // ships sku (variation SKUs) + name; DB-flow ships name only (its
        // codes are resolved from Extra docs at export, never shipped here).
        extrasResolution: {
          banding: { sku: Ce.codes, name: Ce.displayNames },
          finish: { sku: je.codes, name: je.displayNames },
          planing: { sku: Ue.codes, name: Ue.displayNames }
        },
        source: "checkout",
        sourceVersion: "4.5.0"
      };
      if (Pn.value?.enabled && Pn.value?.rules?.length > 0) {
        const N = Oo(
          Pn.value.rules,
          l.map((ne) => ne.toData())
        );
        if (!N.valid) {
          for (const ne of N.errors) {
            const G = ne.partName ? `Part "${ne.partName}"` : `Part ${ne.partIndex + 1}`;
            lt({
              type: "error",
              message: `${G}: ${ne.message}`
            });
          }
          Y("validation-error"), xt.value = !1;
          return;
        }
      }
      if (Rn.value) {
        const N = Rn.value.limits, ne = l.map((G, pe) => ({ shape: G, index: pe, plan: is(G.toData(), N) })).filter((G) => !G.plan.allowed);
        if (ne.length > 0) {
          for (const { shape: G, index: pe, plan: De } of ne) {
            const $e = G.name ? `Part "${G.name}"` : `Part ${pe + 1}`;
            lt({ type: "error", message: `${$e}: ${De.reason}` });
          }
          Y("validation-error"), xt.value = !1;
          return;
        }
      }
      Y("before-calculate", O);
      const q = new CustomEvent("smartcut/beforeCalculate", {
        cancelable: !0,
        detail: {
          data: O,
          error: null
        }
      });
      if (window.dispatchEvent(q), q.defaultPrevented) {
        q.detail.error && lt({
          type: "error",
          message: q.detail.error
        }), xt.value = !1;
        return;
      }
      await Pt.connect(), Pt.emit("calculate", O);
    }, wr = (o, l) => {
      const m = [o, "pricing"];
      if (!co(l, m))
        return Y("error", `${m.join(".")} not found in sent data`), null;
      const p = Bt(l, m);
      if (typeof p != "object")
        return Y("error", `${m.join(".")} data must be an object`), null;
      if (!fo(p))
        return Y("error", `if provided, ${m.join(".")} data must contain some values`), null;
      const x = Object.keys(p);
      if (!x.length)
        return Y("error", `no ${m.join(".")} pricing found`), null;
      if (x.some((ne) => /,/.test(ne)))
        return Y("error", `${m.join(".")} keys must not contain commas and should only be separated by a pipe (|)`), null;
      if (Object.values(p).some((ne) => isNaN(ne)))
        return Y("error", `${m.join(".")} values must be a number`), null;
      const O = [o, "labels"];
      if (!co(l, O))
        return Y("error", `${O.join(".")} not found`), null;
      const q = Bt(l, O);
      if (!q)
        return Y("error", `${O.join(".")} data not provided`), null;
      if (!Array.isArray(q))
        return Y("error", `${O.join(".")} data must be an array`), null;
      if (!q.length)
        return Y("error", `if provided, ${O.join(".")} data must contain values`), null;
      const N = Bs(p);
      return q.length !== N ? (Y("error", `${O.join(".")} length (${q.length}) must match the number of levels in ${m.join(".")} (${N})`), null) : { pricing: p, labels: q };
    }, xi = (o, l) => {
      const m = l?.[o], p = !!m?.containsCatalogueLinked;
      if (!o || !m || !Bt(he, ["enable", o])) return;
      let x = m.pricing ?? {}, O = m.labels ?? [];
      if (!p) {
        const ne = wr(o, l);
        if (!ne) return;
        x = ne.pricing, O = ne.labels;
      }
      const q = Bt(l, [o, "displayNames"]) || void 0, N = Bt(l, [o, "formulas"]);
      if (o === "banding" || o === "finish" || o === "planing") {
        const ne = vi(o);
        ne.labels = O, ne.pricing = x, ne.displayNames = q || {}, ne.codes = Bt(l, [o, "codes"]) || {}, ne.containsCatalogueLinked = p, ne.formulas = N;
        const G = Gs(x);
        ne.options = G, Pe(o, G, O, x, q);
      }
      if (Ft.value = Fe(), !!w.inputShapes.value?.length)
        for (const ne of w.inputShapes.value) qs(ne, o);
    }, Gs = (o) => {
      const l = [], m = Object.keys(o), p = Bs(o);
      for (let x = p; x--; ) l.push(/* @__PURE__ */ new Set());
      for (const x of m) {
        const O = x.split("|");
        p > 1 && O.length === 1 || O.forEach((q, N) => {
          N < p && l[N].add(q);
        });
      }
      for (let x = 0; x < p; x++)
        l[x] = Array.from(l[x]);
      return l;
    }, Va = (o, l) => {
      if (!l) return;
      o !== "info" && Object.keys(Q).forEach((p) => {
        p !== o && p !== "info" && (Q[p] = null);
      });
      const m = w.inputShapes.value.indexOf(l);
      if (Q[o] === m)
        E.value = null, Q[o] = null, fr.value[o] = void 0;
      else if (E.value = l, Q[o] = m, o !== "info") {
        const p = jn(l, o);
        p.options.length && Pe(
          o,
          p.options,
          p.labels,
          p.pricing
        );
      }
    }, Ws = (o) => {
      bt.value && Y("log", ["load event received"]), gn.value && Sr(o.detail);
    }, Sr = (o) => {
      if (bt.value && Y("log", ["loading parts..."]), !o || !o?.inputs?.parts?.length) {
        bt.value && Y("log", ["could not find any parts to import"]);
        return;
      }
      w.inputShapes.value.length = 0;
      let l = 0;
      for (const p of o.inputs.parts) {
        const x = _a(p);
        x ? x.issues?.length && bt.value && Y("log", [`SmartCut - issues found while importing part at index ${l}`, x.issues]) : bt.value && Y("log", [`SmartCut - error loading part at index ${l}`, p]), l++;
      }
      w.inputShapes.value.flatMap((p) => Hi(p.issues)).length && lt({
        type: "error",
        message: Te("errors.general.issues_found")
      }), bt.value && Y("log", [`loaded ${w.inputShapes.value.length} parts`]);
    }, xr = (o) => {
      w.inputShapes.value.length = 0, _t(() => {
        for (const l of o)
          l.t = w.inputStock.value?.[0]?.t ?? null, _e.stockType === "linear" && Oe.value.length === 1 && !l.w && (l.w = Oe.value[0]), _a(l);
      });
    };
    Je(() => dt.inputStock, (o) => {
      if (js(), Array.isArray(o) || console.warn("SmartCut - stock must be passed as an array"), !o?.length) return;
      w.inputStock.value.length = 0;
      const l = o.map((m) => m.toData());
      Jl(l);
      for (const m of o)
        re({
          ...m.toData(),
          autoAdd: !0,
          q: 1
        }) || (console.error("Failed to add stock item:", m), lt({
          type: "error",
          message: "Failed to add some stock items due to validation errors"
        }));
      if (w.inputStock.value.length) {
        if (!w.inputShapes.value.length)
          dt.inputType !== "formula" && _t(() => {
            w.inputShapes.value.length || wi();
          });
        else if (V.value.length === 1) {
          const p = V.value[0];
          for (const x of w.inputShapes.value)
            x.material || (Ke(x.autoId, p.name), (x.t == null || !p.thicknesses.includes(ue({ v: x.t }))) && (x.t = ue({ v: p.thicknesses[0] })), In(x, p));
        }
        const m = j(w.inputSaw.value);
        m.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(m))), lt({
          type: "error",
          message: Te("errors.validation.stock_issue"),
          additional: m.map((p) => Qa(p.message, p.context || p.params))
        }));
      }
    }, { immediate: !0 }), Je(w.inputShapes, (o) => {
      Y("inputs-changed"), o.forEach((l) => {
        if (_e.stockType === "linear" && Oe.value.length && (!l.w || !Oe.value.includes(ue({ v: l.w }))) && (l.w = Oe.value[0]), l.material) {
          const m = $s(l.material);
          m.length && !m.includes(ue({ v: l.t })) && (l.t = m[0]);
        }
      });
    }, { deep: !0 }), Je(() => Xt.value.length, (o, l) => {
      if (ga.value) {
        if (o > l) {
          const m = Math.ceil(o / At.value);
          wt.value < m && (wt.value = m);
        } else if (o < l) {
          const m = Math.ceil(o / At.value);
          wt.value > m && (wt.value = Math.max(1, m));
        }
      }
    }), Je(() => he.numberFormat, (o) => {
      le(o);
    }), Je(w.inputStock, (o) => {
      _e.stockType === "linear" && hi(o.map((l) => l.toData()));
    }, { deep: !0 }), Je(() => _e, (o) => {
      w.inputSaw.value = new kn(o);
    }, { deep: !0 }), pn(async () => {
      if (rn.value) return;
      rn.value = !0;
      const o = new URL(window.location.href), l = o.searchParams.toString(), m = o.origin + o.pathname + (l ? `?${l}` : "");
      pt.value !== m && Si(), pt.value = m, He.value = he.locale, await Pt.connect(), Pt.emit("getUserFromDomain"), window.addEventListener("smartcut/load", Ws);
    });
    const Pr = () => {
      Pt && Pt.disconnect();
    };
    return ci(() => {
      window.removeEventListener("smartcut/load", Ws), Pr(), delete window.smartcutCheckout;
    }), n({
      init: Rl,
      clear: Si,
      getAvailablePricingOptions: ki,
      getExtrasPrice: dr,
      formatPrice: dt.formatPrice,
      findExtrasPrice: dt.findExtrasPrice,
      inputShapes: w.inputShapes,
      initExtrasOptions: qs,
      createAndAddInputShape: _a,
      initMaterialsThicknesses: Vs
    }), (o, l) => {
      const m = da("Icon");
      return F(), Z("div", pg, [
        bt.value ? (F(), Me(T(r), {
          key: 0,
          title: "Ecommerce Calculator Debug",
          data: [{
            inputStock: T(w).inputStock.value.map((p) => ({ name: T(ca)(p).fullLabel, materialKey: p.material, db_id: p.db_id || null, code: p.code || null, l: p.l, w: p.w, t: p.t, db_sawId: p.db_sawId || null, stockExtras: T(ri)(p) })),
            materials: V.value.map((p) => ({ name: T(ca)(p).fullLabel, materialKey: p.name, thicknesses: p.thicknesses, db_id: p.db_id, code: p.code })),
            inputShapesStockRefs: T(w).inputShapes.value.map((p) => ({ material: p.material || "?", t: p.t, stock: p.stock || null })),
            saw: {
              inputSaw: T(w).inputSaw.value ? {
                name: T(w).inputSaw.value.name || null,
                db_id: T(w).inputSaw.value.db_id || null,
                stockType: T(w).inputSaw.value.stockType || null,
                bladeWidth: T(w).inputSaw.value.bladeWidth ?? null,
                bladeWidthEnd: T(w).inputSaw.value.bladeWidthEnd ?? null,
                cutPreference: T(w).inputSaw.value.cutPreference || null
              } : null,
              stockSawIds: T(w).inputStock.value.map((p) => ({ name: T(ca)(p).fullLabel, db_sawId: p.db_sawId || null })),
              resultSaw: T(Re).saw ? { name: T(Re).saw.name || null, db_id: T(Re).saw.db_id || null } : null
            },
            localStorage: { inputStock: Nl.value, stockFilterSelections: $l.value }
          }],
          paths: ["ecommerce-calculator"],
          root: !1
        }, null, 8, ["data"])) : ce("", !0),
        gn.value ? ce("", !0) : (F(), Me(il, {
          key: 1,
          size: "large",
          label: "Loading...",
          block: ""
        })),
        gn.value ? (F(), Z("section", {
          key: 2,
          id: "smartcut-checkout",
          class: ut(["smartcut-content", { fullscreen: vn.value }]),
          style: Wt(Ml.value)
        }, [
          E.value?.machining && Le.value ? (F(), Me(T(i), {
            key: 0,
            "input-shape": E.value,
            "onUpdate:inputShape": l[0] || (l[0] = (p) => E.value = p),
            translate: !0,
            options: gt,
            "find-extras-price": e.findExtrasPrice,
            "get-extras-price": T(Ti),
            "get-available-pricing-options": ki,
            "format-price": e.formatPrice,
            "custom-machining-products": Kl(E.value),
            onClose: Gl
          }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price", "custom-machining-products"])) : ce("", !0),
          E.value && gi.value ? (F(), Me(T(s), {
            key: 1,
            "input-shape": E.value,
            "onUpdate:inputShape": l[1] || (l[1] = (p) => E.value = p),
            products: As(E.value),
            "find-extras-price": e.findExtrasPrice,
            "format-price": e.formatPrice,
            onClose: zl
          }, null, 8, ["input-shape", "products", "find-extras-price", "format-price"])) : ce("", !0),
          Mn.value && !e.readonly ? (F(), Z("button", {
            key: 2,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            onClick: l[2] || (l[2] = (p) => tr())
          }, [
            ot(m, { icon: ["fass", "expand"] }),
            an(" " + we(T(Te)("general.full_screen")), 1)
          ])) : ce("", !0),
          Os.value ? (F(), Z("a", {
            key: 3,
            id: "credit",
            style: _l,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, we(T(Eu)(T(Te)("general.powered_by"))), 1)) : ce("", !0),
          be("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: Wt({ "grid-template-columns": Cl.value })
          }, [
            T(w).inputShapes.value.length ? (F(), Z("div", mg, [
              l[8] || (l[8] = be("div", { class: "cell id" }, null, -1)),
              (F(!0), Z(Ot, null, Jt(Fa.value, (p) => (F(), Z("div", {
                key: p.name,
                class: ut(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(p.name) || p.type === "boolean" }])
              }, we(T(Te)(p.label)), 3))), 128)),
              bt.value ? (F(), Z("div", gg, " Info ")) : ce("", !0),
              l[9] || (l[9] = be("div", { class: "cell del" }, null, -1))
            ])) : ce("", !0),
            (F(!0), Z(Ot, null, Jt(Ll.value, (p, x) => (F(), Z("div", {
              key: p.autoId,
              class: ut(["row inputs", { "group-pickable": B.value, "row--readonly": !!p.readonly }])
            }, [
              be("div", {
                class: ut(["cell", { clickable: B.value }]),
                onClick: (O) => B.value && Et(p)
              }, [
                be("div", {
                  class: "id",
                  style: Wt({
                    background: he.colors.partA,
                    color: he.colors.text
                  })
                }, we(Ol.value + x + 1), 5)
              ], 10, hg),
              (F(!0), Z(Ot, null, Jt(Fa.value, (O) => (F(), Z("div", {
                key: O.name,
                class: "cell"
              }, [
                p ? (F(), Me(Ym, {
                  key: 0,
                  field: O,
                  item: p,
                  index: x,
                  "type-prefix": "part",
                  readonly: e.readonly || !!p.readonly,
                  "number-format": he.numberFormat,
                  "orientation-model": he.orientationModel,
                  "stock-grain": T(ie)(p),
                  "material-options": V.value?.map((q) => ({ label: q.displayName || q.name, value: q.name })) || [],
                  "material-items": Xl(V.value),
                  "thickness-options": O.name === "t" ? Yl(p) : [],
                  "width-options": O.name === "w" && _e.stockType === "linear" ? er(p) : [],
                  "banding-enabled": Q.banding === x ? p : null,
                  "full-stock-disabled": p.fullStock && !["material", "t", "q", "fullStock"].includes(O.name) || O.name === "fullStock" && (Rs(p) || !p.fullStock && !yi(p)),
                  "material-extras-disabled": Zl(p),
                  onUpdate: (q) => Vl(p, O.propertyPath || O.fieldMap || O.name, q),
                  onValidation: l[3] || (l[3] = (q, N) => ql()),
                  onBlur: () => Bl(p, O.name),
                  onOpenBanding: (q) => Va("banding", p),
                  onOpenMachining: (q) => Ul(p),
                  onOpenCustomProducts: (q) => Wl(p),
                  onOpenFinish: (q) => Va("finish", p),
                  onOpenPlaning: (q) => Va("planing", p),
                  onOpenImageUpload: (q) => gr(x)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "orientation-model", "stock-grain", "material-options", "material-items", "thickness-options", "width-options", "banding-enabled", "full-stock-disabled", "material-extras-disabled", "onUpdate", "onBlur", "onOpenBanding", "onOpenMachining", "onOpenCustomProducts", "onOpenFinish", "onOpenPlaning", "onOpenImageUpload"])) : ce("", !0)
              ]))), 128)),
              bt.value ? (F(), Z("div", vg, [
                be("button", {
                  class: ut(["c-btn", { selected: Q.info === x }]),
                  type: "button",
                  onClick: (O) => Va("info", p)
                }, " i ", 10, bg)
              ])) : ce("", !0),
              be("div", yg, [
                be("button", {
                  disabled: T(w).inputShapes.value.length <= 1 || e.readonly || !!p.readonly,
                  type: "button",
                  class: "c-btn delete",
                  "aria-label": `${T(Te)("actions.remove")} ${T(Di)(T(Te)("woodwork.part"))}`,
                  onClick: (O) => T(P)(p.autoId)
                }, [
                  ot(m, { icon: ["fass", "trash"] })
                ], 8, kg)
              ]),
              ot(T(a), {
                item: p,
                "num-columns": Na.value
              }, null, 8, ["item", "num-columns"]),
              (F(!0), Z(Ot, null, Jt(rr.value, (O) => (F(), Z(Ot, {
                key: O.type + "-" + (p?.material || "")
              }, [
                Q[O.type] === x && sr.value && O.show(p) ? (F(), Me(Cf, Ht({
                  key: 0,
                  shape: p,
                  "shape-index": x,
                  "extra-type": O.type,
                  "extra-label": O.type,
                  "extra-keys": O.keys,
                  "user-friendly-field-map": T(wu),
                  "part-columns": Na.value,
                  "format-price": e.formatPrice,
                  "find-extras-price": dt.findExtrasPrice,
                  "get-price": cr,
                  "orientation-model": he.orientationModel,
                  "stock-grain": T(ie)(p),
                  "get-available-pricing-options": ki,
                  "allow-custom-names": !1,
                  debug: bt.value
                }, { ref_for: !0 }, { ...ur(p, O), ...O.extraProps(p) }), null, 16, ["shape", "shape-index", "extra-type", "extra-label", "extra-keys", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain", "debug"])) : ce("", !0)
              ], 64))), 128)),
              Q.info === x ? (F(), Z("div", {
                key: 1,
                id: "shape-info",
                style: Wt({ "grid-column-end": "span " + Na.value })
              }, [
                be("div", null, we(p?.banding), 1),
                be("div", null, we(Ft.value?.banding?.options || "No options"), 1)
              ], 4)) : ce("", !0),
              mn.value === x ? (F(), Me(T(c), {
                key: 2,
                prefix: (x + 1).toString(),
                "unique-id": p.autoId,
                "shape-id": p.autoId,
                style: Wt({ "grid-column-end": "span " + Na.value }),
                images: mt.value,
                debug: bt.value,
                onUpdate: pr,
                onRemove: mr
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images", "debug"])) : ce("", !0)
            ], 2))), 128))
          ], 4),
          be("div", wg, [
            e.readonly ? ce("", !0) : (F(), Z("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${T(Te)("actions.add")} ${T(Di)(T(Te)("woodwork.part"))}`,
              onClick: l[4] || (l[4] = (p) => wi())
            }, [
              ot(m, { icon: ["fass", "plus-large"] }),
              an(" " + we(`${T(Te)("actions.add")} ${T(Di)(T(Te)("woodwork.part"))}`), 1)
            ], 8, Sg)),
            be("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": T(Te)("actions.calculate"),
              title: e.calculateDisabled && e.calculateDisabledReason ? e.calculateDisabledReason : void 0,
              disabled: !T(w).inputStock.value?.length || xt.value || e.calculateDisabled,
              onClick: l[5] || (l[5] = (p) => kr())
            }, [
              ot(m, { icon: ["fass", "calculator"] }),
              an(we(T(Te)("actions.calculate")), 1)
            ], 8, xg),
            e.readonly ? ce("", !0) : (F(), Z("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": T(Te)("actions.clear"),
              onClick: l[6] || (l[6] = (p) => Si())
            }, [
              ot(m, { icon: ["fass", "trash"] })
            ], 8, Pg)),
            be("div", Ig, we(T(D)) + we(he?.maxParts ? "/" + he.maxParts : ""), 1)
          ]),
          B.value && !e.readonly ? (F(), Me(T(f), {
            key: 4,
            ref_key: "groupsRef",
            ref: Ne,
            "selected-shape": fe.value,
            "selected-shape-counter": Ie.value,
            "stock-grain": Ae.value,
            "format-options": We.value,
            onHighlightShape: un,
            onClearHighlight: fa
          }, null, 8, ["selected-shape", "selected-shape-counter", "stock-grain", "format-options"])) : ce("", !0),
          ga.value && Bn.value > 1 ? (F(), Z("div", Cg, [
            be("div", Lg, [
              be("button", {
                type: "button",
                class: "c-btn",
                disabled: wt.value === 1,
                onClick: El
              }, [
                ot(m, { icon: ["fass", "chevrons-left"] })
              ], 8, Og),
              be("button", {
                type: "button",
                class: "c-btn",
                disabled: wt.value === 1,
                onClick: Tl
              }, [
                ot(m, { icon: ["fass", "chevron-left"] })
              ], 8, Eg),
              be("span", Tg, we(wt.value) + " / " + we(Bn.value), 1),
              be("button", {
                type: "button",
                class: "c-btn",
                disabled: wt.value >= Bn.value,
                onClick: Al
              }, [
                ot(m, { icon: ["fass", "chevron-right"] })
              ], 8, Ag),
              be("button", {
                type: "button",
                class: "c-btn",
                disabled: wt.value >= Bn.value,
                onClick: Fl
              }, [
                ot(m, { icon: ["fass", "chevrons-right"] })
              ], 8, Fg)
            ])
          ])) : ce("", !0),
          $n.value && !e.readonly ? (F(), Me(T(u), {
            key: 6,
            ref: "import",
            "number-format": he.numberFormat,
            "custom-fields": Vn.value,
            "banding-options": Ce.options,
            "banding-labels": Ce.labels,
            "finish-options": je.options,
            "finish-labels": je.labels,
            "show-template": he.enable?.csvTemplate !== !1,
            onImport: xr
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels", "show-template"])) : ce("", !0),
          pa.value ? (F(), Z("div", Ng, [
            Dn.value ? (F(), Z("div", $g, we(Dn.value), 1)) : ce("", !0),
            be("pre", Mg, we(ma.value), 1)
          ])) : ce("", !0),
          (he.enable?.diagram ? xt.value && !T(ct).complete || T(ct).complete && !me.value : xt.value || T(ct).complete) ? (F(), Z("div", Dg, [
            ot(T(z), {
              size: 50,
              number: T(ct).shapeCount,
              complete: T(ct).complete,
              "show-number": he.enable?.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : ce("", !0),
          ls(be("div", _g, [
            T(Ve)?.saw?.stockType !== "roll" ? (F(), Z("div", Rg, we(T(Ve)?.stack?.number ? T(Ve).stack.number : 1), 1)) : ce("", !0),
            ln.value ? (F(), Me(T(M), {
              key: 1,
              "element-id": "diagram",
              "number-format": he.numberFormat,
              "decimal-places": he.decimalPlaces,
              colors: he.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])) : ce("", !0)
          ], 512), [
            [Er, he.enable?.diagram && T(ct).complete && me.value]
          ]),
          Ls.value && he.enable?.diagram && T(J).length > 1 && T(ct).complete ? (F(), Me(T(U), {
            key: 9,
            display: !0,
            "use-stack": !0,
            "show-sorting": !1,
            onShow: T(kt)
          }, null, 8, ["onShow"])) : ce("", !0),
          !Ls.value && he.enable?.diagram && T(J).length > 1 && T(ct).complete ? (F(), Me(T(de), {
            key: 10,
            ref: "stockNavigation",
            "active-stock-id": T(ke),
            "stock-list": T(J),
            "primary-color": he.colors.stock?.replace("#", ""),
            "secondary-color": he.colors.partA?.replace("#", ""),
            onShowStock: T(kt)
          }, null, 8, ["active-stock-id", "stock-list", "primary-color", "secondary-color", "onShowStock"])) : ce("", !0)
        ], 6)) : ce("", !0),
        bt.value ? (F(), Z("div", Vg, [
          ot(T(r), {
            data: [T(w)?.inputShapes?.value?.[0]],
            paths: ["inputShapes"]
          }, null, 8, ["data"]),
          l[10] || (l[10] = be("div", null, "Result data", -1)),
          ot(T(r), {
            data: [st.value],
            paths: ["checkoutResult"]
          }, null, 8, ["data"])
        ])) : ce("", !0),
        ot(fg, {
          open: _n.value,
          "onUpdate:open": l[7] || (l[7] = (p) => _n.value = p),
          options: g.value?.options || [],
          "material-label": g.value?.shape?.material || "",
          thickness: g.value?.shape?.t,
          "format-price": dt.formatPrice,
          onPick: L,
          onCancel: H
        }, null, 8, ["open", "options", "material-label", "thickness", "format-price"])
      ]);
    };
  }
}), uh = /* @__PURE__ */ on(qg, [["__scopeId", "data-v-38ead3d9"]]);
export {
  ih as A,
  _u as B,
  ca as C,
  oa as D,
  xd as E,
  hs as F,
  rh as G,
  Ia as I,
  il as L,
  Bd as M,
  ll as S,
  ig as _,
  tg as a,
  Xo as b,
  Cf as c,
  sh as d,
  $f as e,
  Af as f,
  Bt as g,
  _m as h,
  Kc as i,
  Zp as j,
  uh as k,
  co as l,
  Ea as m,
  eh as n,
  fo as o,
  th as p,
  lh as q,
  Xg as r,
  _i as s,
  nh as t,
  ms as u,
  Hu as v,
  Vc as w,
  al as x,
  oh as y,
  ah as z
};

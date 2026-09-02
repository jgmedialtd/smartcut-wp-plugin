import { s as ee, k as tt, _ as en, x as M, Q as it, X as ro, I as jt, d as St, $ as Ho, l as vn, M as Si, o as D, c as te, a as we, g as gt, u as N, j as $e, b as fe, t as Ce, q as xi, w as Qn, n as Xt, F as At, f as an, H as au, a0 as tn, p as cn, R as nn, i as dn, z as Ii, h as ws, E as Zo, m as ct, r as ya, A as Jo, C as zt, D as iu, a1 as Yt, O as ua, W as su, v as ou, K as gn } from "./vendor-vue-CrNGqS0k.js";
import { _ as pt, a9 as st, aa as qn, ab as Pi, ac as fn, o as mt, ad as lu, E as Fn, ae as ru, I as os, T as ca, af as uu, ag as cu, ah as ga, ai as Xo, aj as Qo, ak as Yo, al as du, am as fu, an as Dn, ao as Ut, ap as pu, aq as mu, ar as gu, as as ls, at as Na, au as hu, av as Vi, aw as bu, ax as Nn, ay as uo, az as Ja, Q as sa, N as un, aA as Yn, aB as Cn, U as vu, M as yu, aC as el, aD as co, aE as fo, Y as pe, a7 as Xa, t as li, B as xa, aF as Ia, H as Pa, a4 as Ca, aG as po, aH as mo, aI as Ss, aJ as tl, aK as ku, i as wt, aL as Ui, z as xs, aM as wu, aN as Su, aO as go, aP as xu, aQ as Iu, aR as Pu, aS as Cu, aT as nl, a as ho, aU as Lu, X as da, a1 as Eu, x as Qa, w as La, A as bo, V as Tu, O as Ou, aV as O, aW as Au, aX as vo, aY as Is, aZ as Ps, a_ as rs, F as Fu, c as yo, a$ as Nu, d as Mu, f as $u, b0 as Du, b1 as _u, b2 as al, b3 as Ru, b4 as ji, b5 as qu, b6 as Bu, b7 as il, b8 as Vu, b9 as Uu, ba as ju, bb as Gu, bc as Wu, bd as Ku, be as zu, bf as us, bg as Hu, bh as Zu, bi as Ju, bj as Xu, bk as Qu, bl as ha, bm as Gi, bn as Yu, bo as ko, bp as wo, bq as ec, br as Wi, e as Ki, bs as tc, $ as nc } from "./NestingShape-JAVnw-aP.js";
import { o as T, n as m, q as Z, h as l, C as Re, I as Ya, i as ve, F as Jt, l as Se, j as ne, u as je, k as Xe, Q as ac, x as lt, y as ic, K as ba, v as sc, J as So, L as oc, S as lc, T as xo, U as rc, B as ei, M as zi, N as Hi, O as Zi, t as uc, V as gi } from "./vendor-CIXsT6Bd.js";
import { s as Ji, t as Cs, u as cc, l as ti, d as dc } from "./i18n-_RhbYOEZ.js";
import { g as fc, h as pc, s as mc } from "./vendor-lodash-wbyiOdVF.js";
import { Icon as hi } from "./index-Cn_P_Cu_.js";
import { o as sl, f as ol, s as ll, a as rl, d as gc } from "./vendor-floating-ui-CCq0hEoe.js";
import { _ as pn } from "./Launch-9LoYYNsk.js";
import { t as Pe, tData as ri } from "./i18n-DGE8ywV5.js";
import { b as cs } from "./environment-BCYVY3oS.js";
import "./vendor-i18next-BVRe4kPe.js";
function Io(e, n) {
  return pc(e, n);
}
function Kt(e, n) {
  return fc(e, n);
}
function Xi(e, n, t) {
  mc(e, n, t);
}
function Po(e, n = !1) {
  if (!pt(e) || typeof e != "object") return !1;
  const t = Object.values(e);
  return t.length === 0 ? !1 : n ? t.some((a) => pt(a) && a) : t.some((a) => pt(a));
}
function hc(e) {
  if (!e?.length) return [];
  const n = e.filter((a) => !a.added), t = {};
  return n.forEach((a) => {
    const i = ul(a.stock) || 1;
    t[a.parentId] ? t[a.parentId].count += i : (t[a.parentId] = {}, t[a.parentId].count = i, t[a.parentId].id = a.parentId, t[a.parentId].autoId = a.autoId || "", t[a.parentId].name = a?.name ? a.name : a.id, t[a.parentId].l = a.l, t[a.parentId].w = a.w, t[a.parentId].t = a.t, t[a.parentId].material = a.material, t[a.parentId].rot = a.rot, t[a.parentId].orientationLock = a.orientationLock);
  }), Object.values(t);
}
function ul(e, n = []) {
  if (!e) return 1;
  if (e?.stack?.number) return e.stack.number;
  if (e?.stack?.stock) {
    const t = typeof e.stack.stock == "string" ? e.stack.stock : e.stack.stock?.id;
    if (t && n.length > 0)
      return n.find((i) => i.id === t)?.stack?.number || 1;
  }
  return typeof e?.stack == "string" && n.find((a) => a.id === e.stack)?.stack?.number || 1;
}
function bc() {
  const e = document.documentElement;
  return "requestFullscreen" in e || "webkitRequestFullscreen" in e || "mozRequestFullScreen" in e || "msRequestFullscreen" in e;
}
const cl = {
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
function vc(e) {
  return e !== 0 && e !== 1 && e !== 2 ? !1 : cl[e].sidesLMatchShapeL;
}
function yc(e) {
  return e !== 0 && e !== 1 && e !== 2 ? [] : cl[e].affectedExtraTypes;
}
function ui(e = 0, n, t = null, a = null, i = null) {
  if (!st(t) && !qn || a === "stock") return !1;
  let s, u;
  if (st(t) ? s = t.orientationLock : qn(t) ? s = "l" : a === "shape" && (s = i), e === 0 || qn(t))
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
function kc(e, n, t = null, a = null, i = null) {
  if (!st(t) || a === "shape") return !1;
  let s;
  return e === 0 || e === 1 || e === 2 ? ui(e, n, t, a, i) ? "cc" : !1 : s;
}
function wc(e, n, t, a) {
  switch (e) {
    case 0:
      return "";
    // Model 0 uses current orientation from shape
    case 1:
      return n === "y" || n === "n" ? t >= a ? "l" : "w" : t >= a ? n : n === "l" ? "w" : "l";
    case 2:
      return t >= a ? "l" : "w";
    default:
      return "";
  }
}
function Sc(e, n = "cc") {
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
  }, s = {}, c = Object.keys(e).some((p) => ["x1", "x2", "y1", "y2"].includes(p)) ? a : t;
  if (n === "cc") {
    for (const [p, f] of Object.entries(c))
      p in e && (s[f] = e[p]);
    for (const [p, f] of Object.entries(i))
      p in e && (s[f] = e[p]);
  } else {
    for (const [p, f] of Object.entries(c))
      f in e && (s[p] = e[f]);
    for (const [p, f] of Object.entries(i))
      f in e && (s[p] = e[f]);
  }
  return s;
}
function Cb(e, n, t = "metric") {
  return n / (t === "imperial" ? 12 : 1e3) * e;
}
function Lb(e, n) {
  return n / 1e6 * e;
}
const Oa = [
  "#03171d",
  // near-black teal
  "#073b4c",
  // deep teal
  "#118ab2",
  // cyan
  "#ef476f",
  // rose
  "#ffd166",
  // amber
  "#06d6a0",
  // mint
  "#7048e8",
  // violet
  "#f77f00",
  // orange
  "#2b8a3e",
  // forest
  "#d6336c",
  // magenta
  "#4263eb",
  // indigo
  "#a61e4d",
  // wine
  "#0ca678",
  // jade
  "#c2410c",
  // rust
  "#5f3dc4",
  // grape
  "#1098ad"
  // teal-bright
];
function xc(e) {
  const n = (Math.trunc(e) % Oa.length + Oa.length) % Oa.length;
  return Oa[n];
}
const fa = T({
  id: l(),
  name: l().max(200).default(""),
  colorIndex: m().int().min(0).default(0),
  grain: Pi,
  thicknesses: Z(m().positive()).default([]),
  cost: m().nonnegative().optional(),
  saw: fn.optional()
});
function dl(e) {
  return {
    entities: /* @__PURE__ */ new Map(),
    stockList: [],
    shapeList: [],
    ...e
  };
}
function ci(e, n) {
  if (Array.isArray(n))
    for (const t of n)
      t && typeof t == "object" && (t.autoId && e.entities.set(t.autoId, t), t.id && t.id !== t.autoId && e.entities.set(t.id, t));
}
function Ic(e, n) {
  if (n) {
    if (n && typeof n == "object" && typeof n.getType == "function")
      return n;
    if (typeof n == "string")
      return e.entities.get(n);
    if (n && typeof n == "object" && n.autoId)
      return e.entities.get(n.autoId);
  }
}
function ds(e, n) {
  if (!e || typeof e != "object") return e;
  if (Array.isArray(e))
    return e.map((a) => ds(a, n));
  if (typeof e.getType == "function")
    return e;
  if (e.__ref && (e.id || e.autoId)) {
    const a = e.autoId || e.id;
    return Ic(n, a) || e;
  }
  const t = { ...e };
  for (const a in t)
    Object.prototype.hasOwnProperty.call(t, a) && (t[a] = ds(t[a], n));
  return t;
}
function Ls(e, n, t) {
  if (e == null || e && typeof e == "object" && typeof e.getType == "function")
    return e;
  if (Array.isArray(e))
    return e.every((c) => c && typeof c == "object" && typeof c.getType == "function") ? e : e.map((c) => Ls(c, n));
  if (!e || typeof e != "object" || !e.__entityType && !e.__ref && !e.type)
    return e;
  const a = e.__entityType;
  n?.preventAutoRotation && a && (a === Fn.Rectangle || a === Fn.Placeable || a === Fn.Container || a === Fn.Shape || a === Fn.Group || a === Fn.Offcut || a === Fn.Stock || a === Fn.Segment) && (e.preventAutoRotation = !0), n && (e.__context = n);
  const i = e.__ref || a, s = lu();
  if (i && s.has(i)) {
    const u = s.get(i), { __ref: c, __entityType: p, __context: f, ...y } = e, I = new u(y);
    return I.issues && Array.isArray(I.issues) && (I.issues = I.issues.map((P) => P instanceof mt ? P : mt.fromData(P, I))), I.warnings && Array.isArray(I.warnings) && (I.warnings = I.warnings.map((P) => P instanceof mt ? P : mt.fromData(P, I))), I;
  }
  return delete e.__context, e;
}
function Jn(e, n) {
  if (n || (n = dl()), Array.isArray(e)) {
    const i = [];
    for (const s of e) {
      const u = Jn(s, n);
      i.push(u), u && typeof u == "object" && (u.autoId || u.id) && ci(n, [u]);
    }
    return i;
  }
  if (e && typeof e == "object" && typeof e.getType == "function")
    return (e.autoId || e.id) && ci(n, [e]), e;
  const t = ds(e, n), a = Ls(t, n);
  return a && typeof a == "object" && (a.autoId || a.id) && ci(n, [a]), a;
}
function Pc(e, n) {
  const t = dl(n), a = e?.saw ? Jn(e.saw, t) : void 0;
  a && ci(t, [a]);
  const i = e?.stockList ? Jn(e.stockList, t) : [];
  i.length > 0 && (t.stockList = i);
  const s = Array.isArray(e?.shapeList) ? e.shapeList.map((y) => !y || typeof y != "object" ? y : (y.added === !0 || typeof y.x == "number" && typeof y.y == "number") && y.preventAutoRotation !== !0 ? { ...y, preventAutoRotation: !0 } : y) : e?.shapeList, u = s ? Jn(s, t) : [];
  u.length > 0 && (t.shapeList = u);
  const c = e?.cutList ? Jn(e.cutList, t) : [], p = e?.segmentList ? Jn(e.segmentList, t) : [];
  p.length > 0 && (t.segmentList = p);
  const f = e?.offcuts ? Jn(e.offcuts, t) : [];
  return {
    saw: a,
    stockList: i,
    shapeList: u,
    cutList: c,
    segmentList: p,
    offcuts: f,
    context: t
  };
}
function Cc(e, n = []) {
  if (!e?.length) return [];
  const t = e.map((a) => a && typeof a.getType == "function" ? a : Ls(a)).filter((a) => a instanceof os);
  return n.length && fl(t, n), t;
}
function fl(e = [], n = []) {
  if (!e.length) return;
  const t = (a) => n.some((i) => i.autoId === a);
  e.forEach((a) => {
    a.shapeIds = (a.shapeIds ?? []).filter((i) => t(i)), a.positions?.length && (a.positions = a.positions.filter((i) => t(i.autoId)));
  });
}
function Lc(e) {
  const n = {};
  return e.forEach((t) => {
    t.shapeIds.forEach((a) => {
      const i = t.q || 1;
      n[a] ? n[a] += i : n[a] = i;
    });
  }), n;
}
function Ec(e, n, t = !0) {
  const a = Lc(e), i = [];
  for (const s in a) {
    const u = a[s], c = n.findIndex((y) => y.autoId === s), p = n[c], f = ru({
      item: null,
      // No specific item context for this validation
      index: c >= 0 ? c : 0,
      shapeId: s,
      requiredQuantity: u,
      availableQuantity: Number(p?.q ?? 0),
      shapeName: p?.name,
      shapeIndex: c >= 0 ? c : void 0
    });
    i.push(...f);
  }
  return t && e.forEach((s) => {
    const u = s.validateWithShapes(n);
    u?.length && i.push(...u);
  }), i;
}
function Tc(e, n) {
  return e.map((t) => {
    const { grain: a, ...i } = t, s = new ca(i, n);
    return a && (s.grain = a), s;
  });
}
const pl = 0.08;
function Oc(e) {
  return uu(e);
}
let di = null;
if (cs())
  try {
    di = require("~/helpers/applicationSettings").applicationSettings;
  } catch (e) {
    console.error("[useCrossPlatformStorage] Failed to load ApplicationSettings:", e);
  }
function Xn(e, n, t = {}) {
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
  if (!cs()) {
    const u = ee((() => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const c = localStorage.getItem(e);
          if (c)
            return a.read(c);
        }
      } catch (c) {
        console.error("[useCrossPlatformStorage] Failed to load", e, "from localStorage:", c);
      }
      return n;
    })());
    return tt(u, (c) => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const p = a.write(c);
          localStorage.setItem(e, p);
        }
      } catch (p) {
        console.error("[useCrossPlatformStorage] Failed to save", e, "to localStorage:", p);
      }
    }, { deep: !0 }), u;
  }
  if (cs()) {
    if (!di)
      return console.error("[useCrossPlatformStorage] ApplicationSettings not available! Using in-memory fallback."), ee(n);
    const u = ee((() => {
      try {
        const c = di.getString(e);
        if (c)
          return a.read(c);
      } catch (c) {
        console.error("[useCrossPlatformStorage] Failed to load", e, "from ApplicationSettings:", c);
      }
      return n;
    })());
    return tt(u, (c) => {
      try {
        const p = a.write(c);
        di.setString(e, p);
      } catch (p) {
        console.error("[useCrossPlatformStorage] Failed to save", e, "to ApplicationSettings:", p);
      }
    }, { deep: !0 }), u;
  }
  return console.warn("[useCrossPlatformStorage] No storage available for key", e, "- using in-memory fallback"), ee(n);
}
function Qi(e) {
  if (typeof e != "string" || !e || !(e.startsWith("errors.") || e.startsWith("fields.") || e.startsWith("extras.") || e.startsWith("woodwork.") || e.startsWith("validation."))) return e;
  const t = Cs(e);
  return t && t !== e ? t : e;
}
function Ac() {
  const e = Date.now(), n = Math.random().toString(36).substring(2, 15), t = Math.random().toString(36).substring(2, 15);
  return `${e.toString(36)}-${n}-${t}`;
}
const Mn = ee([]), Fc = 6;
function Ci() {
  const e = ({
    message: t,
    type: a = "info",
    additional: i = [],
    options: s = {},
    action: u = () => {
    }
  }) => {
    Array.isArray(i) || (console.warn("addNotice - additional must be an array"), i = []);
    const c = {
      id: Ac(),
      message: Ji(Qi(t)),
      additional: i.length > 5 ? i.slice(0, 5).map((f) => Ji(Qi(f))).join("<br>") + "<br>..." : i.slice(0, 5).map((f) => Ji(Qi(f))).join("<br>"),
      type: a,
      persistent: s.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: u
    }, p = s.maxNotices ?? Fc;
    if (Mn.value.length >= p) {
      const f = Mn.value.findIndex((y) => !y.persistent);
      if (f !== -1)
        Mn.value.splice(f, 1);
      else if (!c.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), c.id;
    }
    return Mn.value.push(c), !c.persistent && s.timeout !== 0 && setTimeout(() => n(c.id), s.timeout || 6e3), c.id;
  }, n = (t) => {
    Mn.value.findIndex((i) => i.id === t) !== -1 && (Mn.value = Mn.value.filter((i) => i.id !== t));
  };
  return {
    notices: Mn,
    addNotice: e,
    dismissNotice: n
  };
}
const Es = Xn("cle-extras-config", {}), fs = (e, n) => {
  Es.value[e] = n;
}, bn = (e) => Es.value[e] || null, Nc = () => Es.value;
let Co = !1;
const Mc = () => {
  Co || (cu({
    getExtrasConfig: bn,
    getAllExtrasConfigs: Nc,
    setExtrasConfig: fs
  }), Co = !0);
}, $c = (e, n) => {
  const t = bn(e);
  if (!t || !t.options || t.options.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const a = t.options[0], i = Array.isArray(a) && typeof a[0] == "string" ? a : [];
  if (i.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const s = (p) => t.options.length > 1 ? p.includes("|") ? t.pricing && Object.keys(t.pricing).length > 0 ? Object.prototype.hasOwnProperty.call(t.pricing, p) ? !0 : Object.keys(t.pricing).some((I) => I.startsWith(p + "|") || I === p) : p.split("|").every((y, I) => {
    if (I >= t.options.length) return !1;
    const P = t.options[I];
    return Array.isArray(P) && typeof P[0] == "string" && P.includes(y);
  }) : t.options.some((f) => Array.isArray(f) && typeof f[0] == "string" && f.includes(p)) : i.includes(p), u = /* @__PURE__ */ new Set();
  let c = 0;
  return n.forEach((p) => {
    if (!p.extras?.[e]) return;
    const f = p.extras[e].sides || {};
    Object.entries(f).forEach(([I, P]) => {
      typeof P == "string" && P && !s(P) && (u.add(P), f[I] = "", c++);
    });
    const y = p.extras[e].faces || {};
    Object.entries(y).forEach(([I, P]) => {
      typeof P == "string" && P && !s(P) && (u.add(P), y[I] = "", c++);
    });
  }), {
    cleanedCount: c,
    invalidOptions: Array.from(u)
  };
}, Dc = (e) => {
  const {
    customNames: n,
    usedNames: t,
    allowCustomNames: a,
    getSelectOptions: i,
    onCustomNameAdded: s,
    onCustomNameDeleted: u
  } = e, c = ee(""), p = M(() => a && c.value?.trim()), f = M(() => !a || !n.value || n.value.length === 0 || n.value.length === 1 && n.value[0] === !0 ? !0 : n.value.filter((j) => typeof j == "string").every((j) => t.value.includes(j))), y = M(() => {
    const v = [];
    if (a && n.value && n.value.length > 0) {
      if (n.value.length === 1 && n.value[0] === !0)
        return v;
      const X = [...n.value.filter((ae) => typeof ae == "string")].sort(), he = new Set(t.value ?? []), ue = X.filter((ae) => !he.has(ae));
      v.push({
        id: "delete-header",
        type: "group",
        label: "Delete Type"
      }), ue.length > 1 && v.push({
        id: "delete-all-custom-names",
        label: "Delete all",
        icon: ["fass", "trash"],
        class: "del"
      }), X.forEach((ae) => {
        const me = he.has(ae);
        v.push({
          id: `delete-${ae}`,
          label: me ? `"${ae}" (in use)` : `Delete "${ae}"`,
          icon: ["fass", "trash"],
          class: "del",
          disabled: me
        });
      });
    }
    return v;
  }), I = () => {
    const v = c.value?.trim();
    if (!v) return;
    if (i("", 0).map((X) => X.value).includes(v)) {
      c.value = "";
      return;
    }
    s(v), c.value = "";
  }, P = (v) => {
    const j = v.item || v;
    if (j.id === "delete-all-custom-names") {
      n.value.filter((X) => typeof X == "string").filter((X) => !(t.value?.includes(X) ?? !1)).forEach((X) => u(X));
      return;
    }
    if (j.id?.startsWith("delete-")) {
      const X = j.id.replace("delete-", "");
      if (t.value?.includes(X)) {
        console.warn(`Cannot delete ${e.extraType} type "${X}" - it is currently in use`);
        return;
      }
      u(X);
    }
  };
  return {
    newCustomName: c,
    canAddCustomName: en(p),
    isActionMenuDisabled: en(f),
    customNameActions: y,
    handleAddCustomName: I,
    handleCustomNameAction: P
  };
}, _c = (e) => {
  const {
    extraType: n,
    labels: t,
    shapeIndex: a,
    enablePricing: i,
    shouldShowAll: s,
    locations: u,
    locationGroups: c = ee([]),
    shape: p = ee(null),
    orientationModel: f = 0,
    getInputType: y,
    getInputConfig: I,
    getAllInputConfig: P,
    getInputConfigForLocation: v,
    canDelete: j,
    getLocationLabel: X,
    shouldShowDeleteButton: he
  } = e, ue = M(() => {
    const K = [], U = c.value && c.value.length > 0, _ = /* @__PURE__ */ new Set();
    if (U && c.value.forEach((R) => {
      R.hideIndividualLocations && R.locations.forEach((de) => _.add(de));
    }), U && c.value.forEach((R) => K.push(R.id)), !U && s.value && K.push("all"), u.value && u.value.length > 0)
      K.push(...u.value.filter((R) => R !== "all" && !_.has(R)));
    else {
      const R = ga(n), de = Xo(n), Ae = Qo(n), Be = Yo(n);
      !U && (de && Ae && Be) && (du(n).length > 0 && K.push("faces"), fu(n).length > 0 && K.push("sides")), K.push(...R.filter((dt) => !_.has(dt)));
    }
    let w = Array.from(new Set(K));
    if ((f === 1 || f === 2) && p.value && p.value.w > p.value.l) {
      const R = ["side.l1", "side.l2", "side.w1", "side.w2"], de = w.map((Ae, Be) => ({ loc: Ae, i: Be })).filter((Ae) => R.includes(Ae.loc));
      if (de.length > 0) {
        const Ae = de[0].i, Be = de.filter((He) => He.loc.includes(".w")).sort((He, Je) => He.loc.localeCompare(Je.loc)), vt = de.filter((He) => He.loc.includes(".l")).sort((He, Je) => He.loc.localeCompare(Je.loc)), dt = [...Be.map((He) => He.loc), ...vt.map((He) => He.loc)];
        w = w.filter((He) => !R.includes(He)), w.splice(Ae, 0, ...dt);
      }
    }
    return w;
  }), ae = M(() => `1fr${i ? " max-content" : ""}`), me = (K, U) => `${n}-${K}-${t[U]}-${U}-${a}`, ye = (K) => {
    const U = X(K);
    return `Delete ${n} for ${U}`;
  }, C = (K) => ({
    show: he(K),
    enabled: j(K),
    ariaLabel: ye(K)
  }), E = (K, U) => y(K, U);
  return {
    renderLocations: en(ue),
    gridStyle: en(ae),
    getInputId: me,
    getDeleteAriaLabel: ye,
    getInputConfigForLocation: v,
    getDeleteConfig: C,
    getInputTypeForLocation: E,
    // Re-export the passed functions for consistency
    getInputType: y,
    getInputConfig: I,
    getAllInputConfig: P,
    canDelete: j,
    shouldShowDeleteButton: he,
    getLocationLabel: X
  };
}, Lo = /* @__PURE__ */ new Set(), Rc = (e) => {
  Mc();
  const {
    shape: n,
    extraType: t,
    allOptions: a,
    labels: i,
    userFriendlyFieldMap: s,
    allowCustomNames: u,
    customNames: c = ee([]),
    enablePricing: p = !1,
    pricing: f,
    displayNames: y,
    locations: I = ee([]),
    locationGroups: P = ee([]),
    orientationModel: v = 0,
    getAvailablePricingOptions: j,
    getPrice: X,
    findExtrasPrice: he,
    formatPrice: ue
  } = e, ae = M(() => ro(a) ? a.value : a), me = M(() => ro(y) ? y.value : y), ye = () => {
    const d = bn(t), b = ae.value?.length ? ae.value : d?.options || [], $ = d?.labels || i;
    Dn(n.value, t, b, $, c.value);
  };
  ye(), tt(
    () => n.value?.extras?.[t],
    (d) => {
      if (d) {
        const b = d?.sides || {}, $ = d?.options?.sides || {};
        let B = !1;
        for (const [z, V] of Object.entries(b))
          if (typeof V == "string" && V !== "" && !$[z]) {
            B = !0;
            break;
          }
        B && ye();
      }
    },
    { immediate: !1 }
  );
  const C = M(() => bn(t)), E = M(() => {
    const d = ae.value?.length ? ae.value : C.value?.options || [];
    if (d.length > 1)
      return "multiple";
    const $ = (d[0] || []).filter((ie) => typeof ie == "string"), B = (c.value || []).filter((ie) => typeof ie == "string"), V = Array.from(/* @__PURE__ */ new Set([...$, ...B])).length;
    return V === 0 ? "boolean" : V === 1 ? "single" : "multiple";
  }), K = M(() => ga(t)), U = M(() => I.value && I.value.length > 0 ? I.value.filter((d) => d !== "all" && d !== "faces" && d !== "sides") : K.value), _ = M(() => U.value.filter((d) => Na(d) === "face")), w = M(() => U.value.filter((d) => Na(d) === "side")), R = M(() => Qo(t)), de = M(() => Yo(t)), Ae = M(() => Xo(t)), Be = () => {
    const d = ae.value?.length ? ae.value : C.value?.options;
    return !!d && d.length > 1;
  }, vt = (d, b, $) => {
    const { singleOption: B = Bt(), operation: z } = $;
    switch (b) {
      case "boolean":
        return !!d;
      case "single":
        return B ? z === "process" || z === "set" ? d && B ? B : "" : d === B ? B : "" : !!d;
      case "multiple":
        return d || "";
      default:
        return d;
    }
  }, dt = (d, b, $) => vt(b, $, { operation: "process" }), He = (d, b, $, B, z, V) => {
    switch (V) {
      case "boolean":
        Ja(d, b, $, B, !!z);
        break;
      case "single": {
        const ie = Bt();
        Ja(d, b, $, B, z ? ie : "");
        break;
      }
      case "multiple":
        Ja(d, b, $, B, z || "");
        break;
    }
  }, Je = (d, b, $ = {}) => {
    const B = $.singleOption || Bt();
    return $.allowCustomNames, vt(d, b, {
      operation: "get",
      singleOption: B
    });
  }, rt = (d, b, $, B) => {
    switch (B) {
      case "boolean":
        return !!d;
      case "single": {
        const z = Bt();
        if (z) {
          const V = b.map((ke) => Nn(n.value, t, ke, $)), ie = V.every((ke) => ke === z || ke === !0), xe = V.every((ke) => !ke || ke === "");
          return ie ? z : xe ? "" : null;
        }
        return !!d;
      }
      case "multiple":
        return typeof d == "string" ? d : d || "";
      default:
        return d;
    }
  }, G = (d, b, $, B = !1) => {
    if (B)
      d.forEach((z) => _e(z, b, $));
    else {
      const z = i[b] || "", V = dt(z, $, E.value);
      d.forEach((ie) => {
        He(n.value, t, ie, z, V, E.value);
      });
    }
  }, Y = (d, b) => {
    if (Be()) {
      const $ = i[b] || "", B = d.map((xe) => {
        const ke = Nn(n.value, t, xe, $);
        return ke === !0 ? Ee(b)[0] || "" : String(ke || "");
      }), z = B[0] || "";
      return B.every((xe) => xe === z) ? z : null;
    } else {
      const $ = i[b] || "";
      if (E.value === "single") {
        const z = Bt();
        if (z) {
          const V = d.map((ke) => Nn(n.value, t, ke, $)), ie = V.every((ke) => ke === z || ke === !0), xe = V.every((ke) => !ke || ke === "");
          return ie ? z : xe ? "" : null;
        }
      }
      const B = uo(n.value, t, d, $, E.value);
      return E.value === "multiple" && B === !1 && d.every((V) => {
        const ie = Nn(n.value, t, V, $, E.value);
        return ie === "" || ie === !1 || ie === null || ie === void 0;
      }) ? "" : B;
    }
  }, Le = (d) => {
    const { location: b, locationType: $ = "single", optionIndex: B, stateValue: z, isAggregate: V = !1 } = d, ie = Ee(B), xe = V && b !== void 0 && Ut(b), ke = xe && ie.some((Ze) => typeof Ze == "string" && Ze.endsWith(`|${b}`)), Ct = xe && (ie.length <= 1 || ke), Oe = V ? Tt(B, b && Ut(b) ? b : $) : Tt(B, b), De = p && ie.length > 1 && Oe.length === 0, Ue = (() => {
      if (!De || B === 0 || !b) return !1;
      for (let Ze = 0; Ze < B; Ze++) {
        let Mt = null;
        if (xe && typeof b == "string" ? Mt = Nt(b, Ze) : V ? b === "all" ? Mt = H(Ze) : b === "faces" ? Mt = oe(Ze) : b === "sides" && (Mt = ze(Ze)) : Mt = Ie(b, Ze), !Mt) return !0;
      }
      return !1;
    })(), ot = !Ct && ie.length > 1 ? "select" : "checkbox";
    if (De && b && !Ue) {
      const Ze = `${t}:${b}:${B}`;
      Lo.has(Ze) || (Lo.add(Ze), Ci().addNotice({
        type: "warning",
        message: `No price set for ${t} at ${b}. This option is not currently available.`
      }));
    }
    const kt = E.value === "multiple" && Oe.length === 1 && p && B > 0;
    if (kt && Oe[0]) {
      if (V) {
        let Ze = [];
        $ === "all" ? Ze = U.value : $ === "faces" ? Ze = _.value : $ === "sides" ? Ze = w.value : b && Ut(b) && (Ze = ft(b)), Ze.forEach((Mt) => {
          const Wn = Ie(Mt, B);
          (!Wn || Wn !== Oe[0]) && _e(Mt, B, Oe[0]);
        });
      } else if (b) {
        const Ze = Ie(b, B);
        (!Ze || Ze !== Oe[0]) && _e(b, B, Oe[0]);
      }
    }
    let Pt = !1;
    const ln = bn(t);
    if (ln?.optionLocations && b && b !== "all" && ot === "checkbox" && ie.length === 1) {
      const Ze = ln.optionLocations[ie[0]];
      Ze && !Ze.includes(b) && (Pt = !0);
    }
    const xn = De || E.value === "multiple" && (Oe.length === 0 || kt), Vn = z !== void 0 ? z : b ? Ie(b, B) : null, Un = ot === "select" ? sn(b || $, B) : void 0, Li = (Ze) => (me.value ?? C.value?.displayNames)?.[Ze] || Ze, jn = ot === "checkbox" ? Ct ? d.customLabel : ie.length === 1 ? Li(ie[0]) : void 0 : void 0;
    let aa, Gn;
    if (ot === "checkbox")
      if (Ct && ie.length > 1) {
        const Ze = ie.find((Mt) => Mt.endsWith(`|${b}`));
        Ze && (aa = Ze, Gn = "");
      } else ie.length === 1 && (aa = ie[0], Gn = "");
    return {
      inputType: ot,
      // Alias for backward compatibility
      type: ot,
      value: Vn,
      options: Un,
      disabled: xn,
      hidden: Pt,
      label: jn,
      indeterminate: Vn === null && ot === "checkbox",
      trueValue: aa,
      falseValue: Gn
    };
  }, qe = (d, b, $) => Le({
    locationType: d,
    optionIndex: b,
    stateValue: $,
    isAggregate: !0
  }), _e = (d, b, $) => {
    const B = i[b] || "";
    if (Be()) {
      const z = Ye(d, b);
      let V;
      if (z === "checkbox") {
        const xe = Ee(b)[0];
        V = $ ? xe : "";
      } else
        V = $ || "";
      Ja(n.value, t, d, B, V);
    } else
      He(n.value, t, d, B, $, E.value);
  }, Ie = (d, b) => {
    const $ = i[b] || "";
    if (Be()) {
      const B = Nn(n.value, t, d, $);
      if (Ye(d, b) === "checkbox") {
        const ie = Ee(b)[0];
        return B === !0 || B === ie ? ie : "";
      } else
        return B || "";
    } else {
      const B = Nn(n.value, t, d, $, E.value);
      return Je(B, E.value);
    }
  }, le = (d, b) => {
    G(U.value, d, b, Be());
  }, H = (d) => {
    if (Be()) {
      const b = i[d] || "", $ = U.value.map((V) => {
        const ie = Nn(n.value, t, V, b);
        return ie === !0 ? Ee(d)[0] || "" : String(ie || "");
      }), B = $[0] || "";
      return $.every((V) => V === B) ? B : null;
    } else {
      const b = i[d] || "", $ = uo(n.value, t, U.value, b, E.value);
      return rt($, U.value, b, E.value);
    }
  }, ce = () => {
    Vi(n.value, t, U.value, E.value), it(n);
  }, Ve = (d) => d === "faces" ? {
    locations: _.value,
    isSupported: R.value
  } : {
    locations: w.value,
    isSupported: de.value
  }, Ke = (d, b, $) => {
    const { locations: B, isSupported: z } = Ve(d);
    z && G(B, b, $, Be());
  }, Ge = (d, b) => {
    const { locations: $, isSupported: B } = Ve(d);
    return B ? Y($, b) : null;
  }, $t = (d) => {
    const { locations: b, isSupported: $ } = Ve(d);
    $ && (Vi(n.value, t, b, E.value), it(n));
  }, Ft = (d, b) => {
    const { isSupported: $ } = Ve(d);
    if (!$) return { type: "checkbox", value: !1 };
    const B = Ge(d, b);
    return qe(d, b, B);
  }, ht = (d, b) => {
    Ke("faces", d, b);
  }, re = (d, b) => {
    Ke("sides", d, b);
  }, oe = (d) => Ge("faces", d), ze = (d) => Ge("sides", d), Te = () => {
    $t("faces");
  }, We = () => {
    $t("sides");
  }, nt = (d) => P.value.find((b) => b.id === d), ft = (d) => {
    const b = nt(d);
    return b ? b.locations.filter(($) => U.value.includes($)) : [];
  }, bt = (d, b, $) => {
    const B = ft(d);
    B.length !== 0 && (B.forEach((z) => _e(z, b, $)), it(n));
  }, Nt = (d, b) => {
    const $ = ft(d);
    if ($.length === 0) return null;
    if (!Be()) {
      const V = Ee(b).find((ie) => ie.endsWith(`|${d}`));
      if (V) {
        const ie = i[b] || "", xe = $.map((Oe) => Nn(n.value, t, Oe, ie)), ke = xe.every((Oe) => Oe === V), Ct = xe.some((Oe) => Oe === V);
        return ke ? V : Ct ? null : "";
      }
    }
    const B = Y($, b);
    return !Be() && (B === null || B === !1 || B === "") ? "" : B;
  }, Rt = (d) => {
    const b = ft(d);
    b.length !== 0 && (Vi(n.value, t, b, E.value), it(n));
  }, yt = (d, b) => {
    const $ = Nt(d, b), B = nt(d);
    return Le({
      location: d,
      optionIndex: b,
      stateValue: $,
      isAggregate: !0,
      customLabel: B?.label
    });
  }, qt = (d) => {
    bu(n.value, t, d, E.value), it(n);
  }, En = (d) => d === "all" ? U.value.some((b) => !!Ie(b, 0)) : d === "faces" && R.value ? _.value.some((b) => !!Ie(b, 0)) : d === "sides" && de.value ? w.value.some((b) => !!Ie(b, 0)) : Ut(d) ? ft(d).some(($) => !!Ie($, 0)) : U.value.includes(d) ? !!Ie(d, 0) : !1, mn = (d) => {
    if (d === "all") return Pe("general.all");
    if (d === "faces") return `${Pe("general.all")} ${Pe("machining.face_other")}`;
    if (d === "sides") return `${Pe("general.all")} ${Pe("woodwork.edge_other")}`;
    if (Ut(d)) {
      const B = nt(d);
      if (B) return B.label;
    }
    if (d.startsWith("face.")) {
      const z = `faces.${d.replace("face.", "")}`;
      return Pe(z);
    }
    if (d.startsWith("side.")) {
      const B = !!(n.value && n.value.w > n.value.l);
      return Pe(hu(d, v, B));
    }
    const b = `fields.${d}`, $ = Pe(b);
    return $ !== b ? $ : s?.[d] ? s[d] : d;
  }, Ye = (d, b) => E.value === "boolean" ? "checkbox" : Ee(b).length > 1 ? "select" : "checkbox", ea = (d, b) => Le({
    location: d,
    optionIndex: b,
    isAggregate: !1
  }), yn = (d) => {
    const b = H(d);
    return qe("all", d, b);
  }, Tn = (d) => Ft("faces", d), kn = (d) => Ft("sides", d), Et = (d, b) => d === "all" ? yn(b) : d === "faces" ? Tn(b) : d === "sides" ? kn(b) : Ut(d) ? yt(d, b) : ea(d, b), Tt = (d, b) => {
    const $ = bn(t), z = (ae.value?.length ? ae.value : $?.options || [])[d];
    if (!z || z[0] === !0)
      return [];
    const V = b && typeof b == "string" && (b.startsWith("face.") || b.startsWith("side.")), ie = b && typeof b == "string" && Ut(b), xe = !V && (b === "all" || b === "faces" || b === "sides" || ie);
    if (Array.isArray(z) && z.length === 1 && typeof z[0] == "string" && !(p && j && (V || xe) && d > 0))
      return z;
    if (p && j && V) {
      const Oe = [];
      if (d > 0)
        for (let De = 0; De < d; De++) {
          const Ue = Ie(b, De);
          if (typeof Ue == "string" && Ue)
            Oe.push(Ue);
          else if (typeof Ue == "boolean")
            Oe.push(Ue);
          else {
            const ot = bn(t), kt = ls(n.value, t, b);
            return kt && typeof kt == "object" && !Array.isArray(kt) && Object.keys(kt).length > 1 && ot?.options[d] ? ot.options[d] : [];
          }
        }
      return j(f, Oe, d);
    }
    if (p && j && xe) {
      const Oe = [];
      if (d > 0)
        for (let De = 0; De < d; De++) {
          let Ue;
          if (b === "all" ? Ue = H(De) : b === "faces" ? Ue = oe(De) : b === "sides" ? Ue = ze(De) : ie && typeof b == "string" && (Ue = Nt(b, De)), typeof Ue == "string" && Ue)
            Oe.push(Ue);
          else if (typeof Ue == "boolean")
            Oe.push(Ue);
          else
            return [];
        }
      return j(f, Oe, d);
    }
    const ke = z, Ct = u ? (c.value || []).filter((Oe) => typeof Oe == "string") : [];
    return [.../* @__PURE__ */ new Set([...ke, ...Ct])];
  }, sn = (d, b) => {
    const $ = bn(t), z = (ae.value?.length ? ae.value : $?.options)?.[b] || [], V = u && c.value ? c.value.filter((kt) => typeof kt == "string") : [];
    let ie = [.../* @__PURE__ */ new Set([...z, ...V])];
    $?.optionLocations && d && d !== "all" && (ie = ie.filter((kt) => {
      const Pt = $.optionLocations[kt];
      return Pt ? Pt.includes(d) : !0;
    }));
    const xe = Tt(b, d), ke = new Set(xe), Ct = me.value ?? $?.displayNames, De = typeof d == "string" && (d.startsWith("face.") || d.startsWith("side.")) ? Ie(d, b) : null, Ue = typeof De == "string" ? De : null;
    return ie.filter((kt) => ke.has(kt) || kt === Ue).map((kt) => ({
      value: kt,
      label: Ct?.[kt] || kt,
      disabled: !ke.has(kt)
    }));
  }, Bt = () => {
    const d = Tt(0);
    return d.length === 1 ? d[0] : void 0;
  }, be = (d) => {
    const b = Tt(d);
    return b.length === 1 ? b[0] : void 0;
  }, Ee = (d) => {
    const b = bn(t), $ = ae.value?.length ? ae.value : b?.options;
    let B = [];
    if ($ && $[d] && Array.isArray($[d])) {
      const V = $[d];
      Array.isArray(V) && V.every((ie) => typeof ie == "string") && (B = V);
    }
    const z = u && c.value ? c.value.filter((V) => typeof V == "string") : [];
    return [.../* @__PURE__ */ new Set([...B, ...z])];
  }, ta = (d, b = 0) => {
    if (d === "all" || d === "faces" || d === "sides")
      return "";
    if (Ut(d)) {
      const B = nt(d);
      return B?.price !== void 0 && Nt(d, b) ? ue ? ue(B.price) : B.price.toString() : "";
    }
    if (!p || !X)
      return "";
    if (!U.value.includes(d))
      return "N/A";
    const $ = X(n.value, t, d, he);
    return $ ? ue ? ue($) : $.toString() : "N/A";
  }, na = (d) => {
    if (!p || !X) return !1;
    if (typeof d == "string" && Ut(d)) {
      const b = nt(d);
      return typeof b?.price == "number" ? b.price : !1;
    }
    return X(n.value, t, d, he);
  }, On = M(() => U.value.length > 1), It = M(() => K.value.length > 1), wn = () => E.value === "multiple", Bn = () => {
    const d = 1 + ae.value.length, b = E.value === "multiple", $ = p, B = d + (b ? 1 : 0) + ($ ? 1 : 0);
    return {
      columns: B,
      style: `repeat(${B}, max-content)`
    };
  }, on = (d) => d === "all" ? "all" : d === "faces" ? "faces" : d === "sides" ? "sides" : "individual", Sn = (d) => Na(d), _a = (d) => {
    if (d === "all")
      return On.value;
    if (Ut(d))
      return nt(d) ? ft(d).length > 0 : !1;
    if (I.value && I.value.length > 0)
      return I.value.includes(d);
    const b = on(d);
    return b === "all" ? On.value : b === "faces" || b === "sides" ? b === "faces" && R.value && _.value.length > 0 || b === "sides" && de.value && w.value.length > 0 ? It.value : !1 : K.value.includes(d);
  }, Ra = (d) => {
    gu(d, t, c);
  }, qa = (d) => {
    mu([n.value], t, d, i);
  }, x = (d) => {
    pu([n.value], t, d);
  }, S = (d, b, $) => {
    if (d === "all")
      le(b, $);
    else if (d === "faces")
      ht(b, $);
    else if (d === "sides")
      re(b, $);
    else if (Ut(d)) {
      let z = $;
      if (!Be() && typeof $ == "boolean") {
        const V = Ee(b), ie = V.find((xe) => xe.endsWith(`|${d}`));
        ie ? z = $ ? ie : "" : V.length === 1 && (z = $ ? V[0] : "");
      }
      if (!Be() && z) {
        const V = ft(d), ie = new Set(V);
        P.value && (P.value.forEach((xe) => {
          xe.id !== d && ft(xe.id).filter((Oe) => !ie.has(Oe)).forEach((Oe) => {
            _e(Oe, b, "");
          });
        }), it(n));
      }
      bt(d, b, z);
    } else
      _e(d, b, $), Be() || it(n);
    const B = i.length;
    for (let z = b + 1; z < B; z++) {
      let V;
      if (d === "all" ? V = H(z) : d === "faces" ? V = oe(z) : d === "sides" ? V = ze(z) : Ut(d) ? V = Nt(d, z) : V = Ie(d, z), !V)
        continue;
      const ie = Tt(z, d);
      let xe = !1;
      if (typeof V == "string" ? xe = ie.includes(V) : typeof V == "boolean" && V === !0 && (xe = ie.length > 0), !xe) {
        const ke = Ye(d, z) === "checkbox" ? !1 : "";
        d === "all" ? le(z, ke) : d === "faces" ? ht(z, ke) : d === "sides" ? re(z, ke) : Ut(d) ? bt(d, z, ke) : _e(d, z, ke);
      }
    }
  }, k = (d, b = !0) => b && !confirm(`Delete ${t} for ${mn(d)}?`) ? !1 : (d === "all" ? ce() : d === "faces" ? Te() : d === "sides" ? We() : Ut(d) ? Rt(d) : qt(d), !0), A = () => {
    const d = n.value[t], b = n.value[`${t}Options`];
    return !(!d || typeof d != "object" || !b || typeof b != "object" || R.value && (!("faces" in d) || !("faces" in b)) || de.value && (!("sides" in d) || !("sides" in b)));
  }, W = () => {
    const d = [], b = n.value[t], $ = n.value[`${t}Options`];
    return !b || typeof b != "object" ? d.push(`Missing or invalid ${t} property in shape`) : (R.value && !("faces" in b) && d.push(`Missing faces property in ${t}`), de.value && !("sides" in b) && d.push(`Missing sides property in ${t}`)), !$ || typeof $ != "object" ? d.push(`Missing or invalid ${t}Options property in shape`) : (R.value && !("faces" in $) && d.push(`Missing faces property in ${t}Options`), de.value && !("sides" in $) && d.push(`Missing sides property in ${t}Options`)), d;
  };
  return {
    // State - provide raw computed refs for other composables
    mode: E,
    // Raw computed ref (not readonly wrapped)
    allLocations: en(U),
    faceLocations: en(_),
    sideLocations: en(w),
    shouldShowAll: On,
    // Raw computed ref (not readonly wrapped)
    shouldShowGroupControls: en(It),
    // Support flags
    supportsFaces: en(R),
    supportsSides: en(de),
    supportsBoth: en(Ae),
    // Core operations
    setValue: _e,
    getValue: Ie,
    setAll: le,
    getAll: H,
    getAllState: H,
    // Alias for backward compatibility
    deleteSingle: qt,
    deleteAll: ce,
    canDelete: En,
    // Group-specific operations
    setAllFaces: ht,
    setAllSides: re,
    getAllFaces: oe,
    getAllSides: ze,
    deleteAllFaces: Te,
    deleteAllSides: We,
    // UI helpers
    getLocationLabel: mn,
    getInputType: Ye,
    getInputConfig: ea,
    getAllInputConfig: yn,
    getAllFacesInputConfig: Tn,
    getAllSidesInputConfig: kn,
    getInputConfigForLocation: Et,
    getSelectOptions: sn,
    getSingleOptionLabel: be,
    // Pricing
    getPriceDisplay: ta,
    getCalculatedPrice: na,
    // Layout & rendering
    shouldShowDeleteButton: wn,
    getGridConfig: Bn,
    getLocationGroup: on,
    getLocationScope: Sn,
    isLocationVisible: _a,
    // Options management
    getAvailableOptions: Tt,
    getSingleAvailableOption: Bt,
    // Initialization & migration
    initialize: ye,
    initializeExtra: ye,
    // Alias for backward compatibility
    initializeCustomNames: Ra,
    migrateToSingle: qa,
    migrateToBoolean: x,
    // Event handlers
    handleInputChange: S,
    handleDelete: k,
    // Validation
    validateShape: A,
    getValidationErrors: W,
    // Debug helpers (development only)
    getDebugInfo: (d, b) => ({
      mode: E.value,
      location: d,
      optionIndex: b,
      value: U.value.includes(d) ? Ie(d, b) : "N/A",
      inputType: Ye(d, b),
      canDelete: En(d),
      allState: H(b),
      availableOptions: Tt(b),
      locationGroup: on(d),
      config: C.value,
      supportsFaces: R.value,
      supportsSides: de.value,
      supportsBoth: Ae.value,
      ...R.value && {
        allFacesState: oe(b)
      },
      ...de.value && {
        allSidesState: ze(b)
      },
      ...U.value.includes(d) && {
        locationScope: Sn(d)
      }
    })
  };
};
function bi(e) {
  return e.reduce((n, t) => {
    if (!t || t.multiEdit) return n;
    const a = Number(t.q);
    return !a || a <= 0 ? n : n + a;
  }, 0);
}
function ps(e) {
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
function Eo(e) {
  return e.map((n) => {
    const t = n.path.length > 0 ? n.path.join(".") : "root", a = ps(n), i = li(n.message, a);
    return `[${t}] ${i}`;
  });
}
function Ea(e, n) {
  const t = e.safeParse(n);
  return {
    success: t.success,
    data: t.success ? t.data : void 0,
    errors: t.success ? void 0 : t.error.issues
  };
}
function qc(e = {}) {
  try {
    let n = function(x) {
      if (!x || typeof x != "object") return x;
      const S = { ...x };
      if (delete S.issues, delete S.warnings, S.trim && typeof S.trim == "object") {
        const k = S.trim;
        ("x1" in k || "x2" in k || "y1" in k || "y2" in k) && (S.trim = {
          l1: k.y1 ?? k.l1 ?? 0,
          l2: k.y2 ?? k.l2 ?? 0,
          w1: k.x1 ?? k.w1 ?? 0,
          w2: k.x2 ?? k.w2 ?? 0
        });
      }
      if (S.extras?.banding?.sides && typeof S.extras.banding.sides == "object") {
        const k = S.extras.banding.sides;
        ("x1" in k || "x2" in k || "y1" in k || "y2" in k) && (S.extras.banding.sides = {
          l1: k.y1 ?? k.l1,
          l2: k.y2 ?? k.l2,
          w1: k.x1 ?? k.w1,
          w2: k.x2 ?? k.w2
        });
      }
      if (S.extras?.finish?.sides && typeof S.extras.finish.sides == "object") {
        const k = S.extras.finish.sides;
        ("x1" in k || "x2" in k || "y1" in k || "y2" in k) && (S.extras.finish.sides = {
          l1: k.y1 ?? k.l1,
          l2: k.y2 ?? k.l2,
          w1: k.x1 ?? k.w1,
          w2: k.x2 ?? k.w2
        });
      }
      if (S.extras?.planing?.sides && typeof S.extras.planing.sides == "object") {
        const k = S.extras.planing.sides;
        ("x1" in k || "x2" in k || "y1" in k || "y2" in k) && (S.extras.planing.sides = {
          l1: k.y1 ?? k.l1,
          l2: k.y2 ?? k.l2,
          w1: k.x1 ?? k.w1,
          w2: k.x2 ?? k.w2
        });
      }
      if (S.efficiencyOptions?.primaryCompression) {
        const k = S.efficiencyOptions.primaryCompression;
        k === "x" ? S.efficiencyOptions = {
          ...S.efficiencyOptions,
          primaryCompression: "l"
        } : k === "y" && (S.efficiencyOptions = {
          ...S.efficiencyOptions,
          primaryCompression: "w"
        });
      }
      for (const k in S)
        S[k] === null && delete S[k];
      return S;
    }, t = function(x, S) {
      if (!Array.isArray(x))
        return [];
      const k = [];
      for (let A = 0; A < x.length; A++) {
        const W = x[A], d = n(W);
        try {
          const b = {
            ...d,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored shapes as new to avoid showing validation errors immediately
          };
          W.autoId && (b.autoId = W.autoId), delete b.issues, delete b.warnings;
          const $ = new sa(b, S);
          k.push($);
        } catch (b) {
          console.error(`Failed to create InputShape at index ${A}:`, b);
        }
      }
      return k;
    }, a = function(x, S) {
      if (!Array.isArray(x)) return [];
      const k = [];
      for (let A = 0; A < x.length; A++) {
        const W = x[A], d = n(W);
        try {
          const b = {
            ...d,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored stock as new to avoid showing validation errors immediately
          };
          W.autoId && (b.autoId = W.autoId);
          const $ = new ca(b, S);
          k.push($);
        } catch (b) {
          console.error(`Failed to create InputStock at index ${A}:`, b);
        }
      }
      return k;
    }, i = function(x) {
      const S = n(x), k = Ea(fn, S);
      if (k.success && k.data) {
        const A = {
          ...k.data,
          issues: [],
          warnings: []
        };
        return x?.autoId && (A.autoId = x.autoId), new un(A);
      } else
        return console.error("Failed to parse input saw:", k.errors), new un({});
    }, s = function(x, S) {
      return Array.isArray(x) ? S && S.length ? Cc(x, S) : x.map((k) => new os(k)).filter(Boolean) : [];
    }, u = function(x = {}) {
      try {
        const A = { ...Re(
          (d) => {
            if (typeof d != "object" || d === null) return d;
            const b = { ...d };
            for (const $ in b)
              b[$] === null && delete b[$];
            return b;
          },
          Yn
        ).parse(x), isNew: !0 }, W = new sa(A, rt);
        return W.createId(G.value.length), G.value.push(W), W;
      } catch (S) {
        return S instanceof Ya && (console.error("Shape validation failed:", S.issues), C("part", "Invalid shape data", S.issues)), null;
      }
    }, c = function(x = {}) {
      try {
        const k = { ...Cn.parse(x), isNew: !0 }, A = new ca(k, rt);
        return A.createId(Y.value.length), Y.value.push(A), A;
      } catch (S) {
        return S instanceof Ya && (console.error("Stock validation failed:", S.issues), C("stock", "Invalid stock data", S.issues)), null;
      }
    }, p = function(x) {
      try {
        const S = x.toData(), k = Yn.parse(S);
        return new sa(k, rt);
      } catch (S) {
        return S instanceof Ya && (console.error("Shape clone validation failed:", S.issues), C("part", "Invalid shape data during cloning", S.issues)), null;
      }
    }, f = function(x) {
      try {
        const S = x.toData(), k = Cn.parse(S);
        return new ca(k, rt);
      } catch (S) {
        return S instanceof Ya && (console.error("Stock clone validation failed:", S.issues), C("stock", "Invalid stock data during cloning", S.issues)), null;
      }
    }, y = function(x) {
      const S = G.value.findIndex((A) => A.autoId === x);
      if (S === -1) return null;
      const k = p(G.value[S]);
      return k ? (G.value.splice(S + 1, 0, k), G.value.forEach((A, W) => A.createId(W)), k) : null;
    }, I = function(x) {
      const S = Y.value.findIndex((A) => A.autoId === x);
      if (S === -1) return null;
      const k = f(Y.value[S]);
      return k ? (Y.value.splice(S + 1, 0, k), Y.value.forEach((A, W) => A.createId(W)), k) : null;
    }, P = function(x, S) {
      const k = G.value.findIndex((b) => b.autoId === x);
      if (k === -1) return !1;
      const A = G.value[k], W = { ...A.toData(), ...S }, d = Ea(Yn, W);
      if (d.success && d.data) {
        if (A.update(d.data), !A.isNew) {
          const b = Object.keys(S);
          A.validate({ fields: b, index: k });
        }
        return !0;
      } else {
        const b = d.errors ? Eo(d.errors) : [];
        console.error("Shape update validation failed:", b);
        const $ = d.errors || [], B = Object.keys(S);
        for (let z = A.issues.length - 1; z >= 0; z--)
          A.issues[z].field.some((V) => B.includes(V[0])) && A.issues.splice(z, 1);
        for (const z of $) {
          const V = ps(z), ie = Array.isArray(z.path) ? z.path.map((xe) => String(xe)) : [];
          new mt({
            item: A,
            category: ["part"],
            message: z.message,
            params: V,
            field: ie.length > 0 ? [ie] : []
          });
        }
        return !1;
      }
    }, v = function(x, S) {
      const k = G.value.findIndex((W) => W.autoId === x);
      if (k === -1) return !1;
      const A = G.value[k];
      return A.validate({ fields: [S], index: k }), A.issues.length === 0;
    }, j = function(x, S) {
      const k = Y.value.find((d) => d.autoId === x);
      if (!k) return !1;
      const A = { ...k.toData(), ...S }, W = Ea(Cn, A);
      if (W.success && W.data)
        return k.update(W.data), k.isNew || ye(), !0;
      {
        const d = W.errors ? Eo(W.errors) : [];
        console.error("Stock update validation failed:", d);
        const b = W.errors || [], $ = Object.keys(S);
        for (let B = k.issues.length - 1; B >= 0; B--)
          k.issues[B].field.some((z) => $.includes(z[0])) && k.issues.splice(B, 1);
        for (const B of b) {
          const z = ps(B), V = Array.isArray(B.path) ? B.path.map((ie) => String(ie)) : [];
          new mt({
            item: k,
            category: ["stock"],
            message: B.message,
            params: z,
            field: V.length > 0 ? [V] : []
          });
        }
        return it(Y), !1;
      }
    }, X = function(x, S) {
      const k = Y.value.findIndex((W) => W.autoId === x);
      if (k === -1) return !1;
      const A = Y.value[k];
      return A.validate({ fields: [S], index: k }), it(Y), A.issues.length === 0;
    }, he = function() {
      if (!qe.value?.length) return !1;
      const x = qe.value.reduce(
        (k, A) => k + (A.shapeIds?.length ?? 0),
        0
      );
      return fl(qe.value, G.value), qe.value.reduce(
        (k, A) => k + (A.shapeIds?.length ?? 0),
        0
      ) < x;
    }, ue = function(x) {
      if (G.value.length === 1) return !1;
      const S = G.value.findIndex((k) => k.autoId === x);
      return S === -1 ? !1 : (G.value.splice(S, 1), he() && Ci().addNotice({
        type: "info",
        message: Cs("inputs.messages.part_removed_from_groups")
      }), !0);
    }, ae = function(x) {
      if (Y.value.length === 1) return !1;
      const S = Y.value.findIndex((k) => k.autoId === x);
      return S === -1 ? !1 : (Y.value.splice(S, 1), !0);
    }, me = function(x) {
      H.value = !0;
      const S = [];
      try {
        G.value.forEach((A) => A.issues.length = 0);
        for (let A = 0; A < G.value.length; A++) {
          const W = G.value[A];
          if (W.isNew || W.multiEdit)
            continue;
          const d = W.validate({
            inputStockList: Y.value,
            index: A,
            stockType: x?.stockType ?? null,
            partTrim: 0,
            useInventory: !1,
            saw: x
          });
          S.push(...d);
        }
        G.value.some((A) => Number(A.q) > 0) || new mt({
          category: ["part"],
          message: "errors.validation.no_parts",
          issues: S
        });
        const k = Number(x?.bladeWidth);
        if (Number.isFinite(k) && k > 0) {
          const A = G.value.filter((W) => !W.multiEdit).map((W) => Math.min(Number(W.l), Number(W.w))).filter((W) => Number.isFinite(W) && W > 0).sort((W, d) => W - d);
          if (A.length) {
            const W = A[Math.floor(A.length / 2)];
            k / W > pl && new mt({
              category: ["saw"],
              type: "warning",
              message: "errors.validation.blade_width_units",
              params: { blade: k },
              issues: S
            });
          }
        }
      } finally {
        H.value = !1;
      }
      return le.value = S, S;
    }, ye = function(x) {
      H.value = !0;
      const S = [];
      try {
        Y.value.forEach((k) => k.issues.length = 0);
        for (let k = 0; k < Y.value.length; k++) {
          const A = Y.value[k];
          if (A.multiEdit)
            continue;
          const W = A.validate({ saw: x }, k);
          S.push(...W);
        }
        Y.value.some((k) => Number(k.q) > 0 || k.autoAdd) || new mt({
          category: ["stock"],
          message: "errors.validation.no_stock",
          issues: S
        });
      } finally {
        H.value = !1;
      }
      return le.value = S, S;
    }, C = function(x, S, k) {
      new mt({
        category: [x],
        message: S,
        issues: le.value
      }), k && console.log("Validation details:", k);
    }, E = function() {
      le.value = [], G.value.forEach((x) => x.issues.length = 0), Y.value.forEach((x) => x.issues.length = 0);
    }, K = function(x = {}) {
      const S = [], k = [], A = x.inputShapesOverride ?? G.value;
      if (!A.length)
        return { shapeList: [], issues: [] };
      for (let W = 0; W < A.length; W++) {
        const d = A[W];
        if (!d.q) continue;
        d.createId(W), d.applyPartTrim(x.trim, x.stockType);
        const b = d.toShape();
        S.push(b), k.push(...b.issues);
      }
      return { shapeList: S, issues: k };
    }, U = function(x) {
      if (!Y.value.length)
        return { stockList: [], issues: [] };
      const S = [], k = [];
      for (let A = 0; A < Y.value.length; A++) {
        const W = Y.value[A];
        if (!W.q && !W.autoAdd) continue;
        W.createId(A), W.saw = x;
        const d = W.toStock();
        S.push(d), k.push(...d.issues);
      }
      return { stockList: S, issues: k };
    }, _ = function(x, S = rt) {
      const k = {
        saw: { success: !1, failed: !1 },
        shapes: { success: 0, failed: 0 },
        stock: { success: 0, failed: 0 },
        groups: { success: 0, failed: 0 }
      };
      if (Ie.value = [], x.saw) {
        const A = Ea(fn, n(x.saw));
        if (A.success && A.data) {
          const W = { ...A.data };
          x.saw?.autoId && (W.autoId = x.saw.autoId), Le.value = new un(W), k.saw.success = !0;
        } else
          console.error("Failed to parse input saw:", A.errors), k.saw.failed = !0;
      }
      if (x.shapes) {
        const A = t(x.shapes, S);
        k.shapes.success = A.length, k.shapes.failed = x.shapes.length - A.length, G.value = A, le.value = le.value.filter(
          (W) => !W.category.includes("part")
        );
      }
      if (x.stock) {
        const A = a(x.stock, S);
        k.stock.success = A.length, k.stock.failed = x.stock.length - A.length, Y.value = A, le.value = le.value.filter(
          (W) => !W.category.includes("stock")
        );
      }
      if (x.groups) {
        const A = s(x.groups);
        k.groups.success = A.length, k.groups.failed = x.groups.length - A.length, qe.value = A;
      }
      return x.extrasOptions && (_e.value = { ...x.extrasOptions }), x.materials && (Ie.value = x.materials.map((A) => fa.safeParse(A)).filter((A) => A.success).map((A) => A.data)), k;
    }, w = function() {
      return {
        shapes: G.value.map((x) => x.toData()),
        stock: Y.value.map((x) => x.toData()),
        inputUserGroups: qe.value.map((x) => x.toData()),
        extrasOptions: _e.value,
        materials: Ie.value
      };
    }, R = function() {
      G.value = [], Y.value = [], qe.value = [], E();
    }, de = function(x, S = {}) {
      const k = S.numberFormat ?? rt, A = (b, $) => (G.value.forEach((B, z) => B.createId(z)), { created: b, failed: $ });
      if (S.replace) {
        const b = _({ shapes: x }, k);
        return A([...G.value], b.shapes.failed);
      }
      const W = [];
      let d = 0;
      for (const b of x) {
        const $ = u(b);
        $ ? W.push($) : d++;
      }
      return A(W, d);
    }, Ae = function(x) {
      try {
        const S = (x.shapeIds ?? []).filter(Boolean);
        if (S.length < 2)
          return C("group", "A group needs at least two parts"), null;
        const k = new os({
          q: x.q ?? 1,
          shapeIds: S,
          positions: x.positions ?? [],
          ...x.name ? { name: x.name } : {}
        }), A = k.validateWithShapes(G.value).filter((W) => W.type === "error");
        return A.length ? (C("group", A[0].message), null) : (qe.value = [...qe.value, k], k);
      } catch (S) {
        return console.error("Group creation failed:", S), C("group", "Invalid group data"), null;
      }
    }, Be = function(x, S) {
      if (!(!x || !S?.length)) {
        x.machining || (x.machining = new vu());
        for (const k of S)
          x.machining.addHole(new yu({
            x: k.x,
            y: k.y,
            diameter: k.diameter,
            depth: void 0,
            face: 0,
            type: "regular",
            edge: null
          }));
      }
    }, vt = function(x, S = {}) {
      const k = S.replace ?? !1, A = S.numberFormat ?? rt, W = [...x.warnings];
      k || (G.value = G.value.filter((xe) => xe.l && xe.w && xe.q));
      let d = 0;
      for (const xe of x.merges) {
        const ke = xe.autoId ? G.value.find((Ct) => Ct.autoId === xe.autoId) : G.value[xe.index];
        if (!ke) {
          W.push("A matching part could not be found to merge into, so its quantity was not added.");
          continue;
        }
        ke.q = (Number(ke.q) || 0) + xe.addQuantity, d++;
      }
      const b = x.shapes.map(({ machiningHoles: xe, ...ke }) => ke), { created: $, failed: B } = de(b, { replace: k, numberFormat: A }), z = $.length === x.shapes.length;
      z ? x.shapes.forEach((xe, ke) => Be($[ke], xe.machiningHoles)) : x.shapes.some((xe) => xe.machiningHoles?.length) && W.push("Some parts could not be created, so their drilling was left off.");
      let V = [];
      x.stock.length && (V = Tc(x.stock, A), k && (Y.value.length = 0), Y.value.push(...V));
      const ie = [];
      if (z)
        for (const xe of x.groups) {
          const ke = xe.members.map((Oe) => $[Oe.rowIndex]);
          if (ke.some((Oe) => !Oe)) continue;
          const Ct = Ae({
            name: xe.name,
            q: xe.q,
            shapeIds: ke.map((Oe) => Oe.autoId),
            positions: xe.members.map((Oe, De) => ({
              autoId: ke[De].autoId,
              x: Oe.x,
              y: Oe.y
            }))
          });
          Ct ? ie.push(Ct) : W.push(`Group "${xe.name ?? ""}" could not be created, so its parts were imported ungrouped.`);
        }
      return it(G), it(Y), { shapes: $, failed: B, merged: d, stock: V, groups: ie, warnings: W };
    }, dt = function(x) {
      const S = { ...Le.value.toData(), ...x }, k = Ea(fn, S);
      return k.success && k.data ? (Le.value.update(k.data), !0) : (console.error("InputSaw update validation failed:", k.errors), C("saw", "Invalid saw update", k.errors), !1);
    }, He = function() {
      Le.value = new un({});
    }, Je = function() {
      const x = Le.value.validate();
      return le.value = [...le.value.filter((S) => S.category?.[0] !== "saw"), ...x], x;
    };
    const { numberFormat: rt = "decimal" } = e, G = Xn("inputs/inputShapes", [], {
      serializer: {
        read: (x) => {
          if (!x) return [];
          let S;
          try {
            S = JSON.parse(x);
          } catch (k) {
            return console.error("Failed to parse input shapes JSON:", k), [];
          }
          return t(S, rt);
        },
        write: (x) => {
          const k = x.filter((W) => !W?.multiEdit).map((W) => W.toData());
          return JSON.stringify(k);
        }
      },
      listenToStorageChanges: !1
    }), Y = Xn("inputs/inputStock", [], {
      serializer: {
        read: (x) => {
          if (!x) return [];
          let S;
          try {
            S = JSON.parse(x);
          } catch (A) {
            return console.error("  Failed to parse stock JSON:", A), [];
          }
          return a(S, rt);
        },
        write: (x) => {
          const k = x.filter((W) => !W?.multiEdit).map((W) => W.toData());
          return JSON.stringify(k);
        }
      },
      listenToStorageChanges: !1
    }), Le = Xn("inputs/inputSaw", new un({}), {
      serializer: {
        read: (x) => {
          if (!x) return new un({});
          try {
            const S = JSON.parse(x);
            return i(S);
          } catch (S) {
            return console.error("  Failed to parse saw JSON:", S), new un({});
          }
        },
        write: (x) => {
          if (!x)
            return JSON.stringify({});
          const S = x.toData();
          return JSON.stringify(S);
        }
      },
      listenToStorageChanges: !1
    }), qe = Xn("inputs/inputUserGroups", [], {
      serializer: {
        read: (x) => s(x ? JSON.parse(x) : []),
        write: (x) => JSON.stringify(x.map((S) => S.toData()))
      }
    }), _e = Xn("inputs/extrasOptions", {
      banding: { options: [] },
      finish: { options: [] },
      planing: { options: [] }
    }, {
      serializer: {
        read: (x) => {
          if (!x) return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          try {
            return JSON.parse(x);
          } catch {
            return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          }
        },
        write: (x) => JSON.stringify(x)
      }
    }), Ie = Xn("inputs/materials", [], {
      serializer: {
        read: (x) => {
          if (!x) return [];
          try {
            const S = JSON.parse(x);
            return Array.isArray(S) ? S.map((k) => fa.safeParse(k)).filter((k) => k.success).map((k) => k.data) : [];
          } catch (S) {
            return console.error("Failed to parse materials JSON:", S), [];
          }
        },
        write: (x) => JSON.stringify(x)
      },
      listenToStorageChanges: !1
    }), le = ee([]), H = ee(!1);
    G.value.length === 0 && (G.value = [new sa({ isNew: !0 })]), Y.value.length === 0 && (Y.value = [new ca({ isNew: !0 })]);
    const ce = M(() => bi(G.value)), Ve = M(() => bi(Y.value)), Ke = M(() => G.value.reduce((x, S) => S?.multiEdit ? x : x + 1, 0)), Ge = M(() => Y.value.reduce((x, S) => S?.multiEdit ? x : x + 1, 0)), $t = M(() => le.value.length > 0), Ft = () => [
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
    ], ht = ee(null), re = ee(null), oe = () => {
      ht.value = null;
    }, ze = E, Te = (x = null) => {
      const S = (x?.inputShapesOverride ?? G.value).filter((A) => !A.multiEdit), k = me(x?.saw || void 0);
      if (S.length) {
        el(S, Y.value, x?.saw || Le.value);
        const A = S.flatMap((W) => W.issues);
        return [...k, ...A];
      }
      return k;
    }, We = async (x, S = "decimal") => {
      const k = x?.inputSaw, A = x?.inputShapes, W = x?.inputStock, d = x?.inputUserGroups, b = _({
        saw: k,
        shapes: A,
        stock: W,
        groups: d,
        materials: x?.materials
      }, S);
      return it(G), it(Y), await jt(), b;
    }, nt = (x, S = "decimal") => _({ shapes: x }, S).shapes.success > 0, ft = (x, S = "decimal") => _({ stock: x }, S).stock.success > 0, bt = (x, S, k, A, W) => {
      S[0]?.length > 0 && (_e.value[x] || (_e.value[x] = { options: [] }), _e.value[x].options = [...S[0]]), k && A && S.length > 0 ? fs(x, {
        options: S,
        // Use all columns extracted from pricing
        labels: k,
        pricing: A,
        displayNames: W
      }) : S.length > 0 && console.warn("[setExtrasOptionsFromPricing] Missing data for centralized config:", { labels: k, pricingData: A, pricingOptionsLength: S.length });
    }, Nt = () => {
      if (!Object.values(_e.value).some(
        (k) => k.options.length > 0
      )) return;
      const S = (k, A) => {
        const W = {};
        for (const d of A)
          W[d] = [...k];
        return W;
      };
      return {
        banding: _e.value.banding.options.length > 0 ? {
          options: {
            sides: S(_e.value.banding.options, ["l1", "l2", "w1", "w2"])
          }
        } : void 0,
        finish: _e.value.finish.options.length > 0 ? {
          options: {
            faces: S(_e.value.finish.options, ["a", "b"])
          }
        } : void 0,
        planing: _e.value.planing.options.length > 0 ? {
          options: {
            sides: S(_e.value.planing.options, ["l1", "l2", "w1", "w2"]),
            faces: S(_e.value.planing.options, ["a", "b"])
          }
        } : void 0
      };
    }, Rt = (x) => {
      if (!Y.value.length) return "n";
      const S = x.material, k = x.t, A = Y.value.filter(($) => $.material === S && $.t === k);
      if (!A.length)
        return "n";
      let W = !1, d = !1, b = !1;
      for (const $ of A)
        $.grain === "l" ? (W = !0, d = !0) : $.grain === "w" && (W = !0, b = !0);
      return W ? d && b ? "y" : d ? "l" : b ? "w" : "n" : "n";
    }, yt = ({ stock: x = !0, shapes: S = !0 } = {}) => {
      x && (Y.value = [new ca({ l: 2440, w: 1220, q: 1 })]), S && (G.value = [
        new sa({ l: 500, w: 500, q: 1 }),
        new sa({ l: 400, w: 400, q: 1 })
      ]);
    }, qt = (x) => {
      for (const S of G.value)
        co(S, x);
      for (const S of Y.value)
        co(S, x);
    };
    let En = !1;
    tt(G, (x) => {
      En || !x.length || jt(() => {
        const S = ["banding", "finish", "planing"], k = [];
        S.forEach((A) => {
          const W = /* @__PURE__ */ new Set();
          if (x.forEach((d) => {
            const b = d.extras?.[A];
            b && (b.faces && Object.values(b.faces).forEach(($) => {
              typeof $ == "string" && $.trim() && $ !== "Y" && W.add($);
            }), b.sides && Object.values(b.sides).forEach(($) => {
              typeof $ == "string" && $.trim() && $ !== "Y" && W.add($);
            }));
          }), W.size > 0) {
            const d = bn(A);
            if (d) {
              const b = d.options[0];
              if (Array.isArray(b) && (b.length === 0 || typeof b[0] == "string")) {
                const $ = new Set(b), B = Array.from(W).filter((z) => !$.has(z));
                if (B.length > 0) {
                  const z = [...b, ...B];
                  fs(A, {
                    ...d,
                    options: [z, ...d.options.slice(1)]
                  });
                }
              }
            }
          }
        }), S.forEach((A) => {
          const W = $c(A, x);
          W.cleanedCount > 0 && k.push(
            `${A}: ${W.invalidOptions.join(", ")}`
          );
        }), k.length > 0 && (console.warn(
          `Some extras options no longer exist and have been reset:
` + k.join(`
`)
        ), typeof window < "u" && window.alert && setTimeout(() => {
          alert(
            `Some extras options no longer exist and have been reset:
` + k.join(`
`)
          );
        }, 500)), En = !0;
      });
    }, { immediate: !0 });
    const mn = Oa.length, Ye = (x) => (x ?? "").trim().toUpperCase(), ea = (x) => {
      const S = (x ?? "").trim(), k = S.match(/^ID:[0-9a-fA-F]+\s*:\s*(.+?)(?:\s*\|\s*([\d.]+))?\s*$/i);
      if (!k) return { name: S, thickness: null };
      const A = k[2] != null ? Number(k[2]) : null;
      return {
        name: k[1].trim() || S,
        thickness: A != null && Number.isFinite(A) && A > 0 ? A : null
      };
    }, yn = (x) => {
      if (x?.materialId) {
        const k = Ie.value.find((A) => A.id === x.materialId);
        if (k) return k;
      }
      const S = Ye(x?.material);
      if (S)
        return Ie.value.find((k) => Ye(k.name) === S);
    }, Tn = (x) => yn(x)?.saw ?? Le.value.toData(), kn = (x) => Tn(x).stockType, Et = (x) => Tn(x).cutType === "nesting", Tt = M(() => {
      const x = [...G.value, ...Y.value].filter((d) => !d.multiEdit), S = /* @__PURE__ */ new Set();
      let k = 0, A = 0;
      const W = (d) => {
        S.add(d.stockType ?? "sheet"), d.cutType === "nesting" ? k++ : A++;
      };
      if (!x.length)
        W(Le.value);
      else
        for (const d of x)
          W(yn(d)?.saw ?? Le.value);
      return {
        hasNesting: k > 0,
        allNesting: k > 0 && A === 0,
        hasRect: A > 0,
        typesInPlay: S
      };
    }), sn = M(() => Le.value?.cutType === "nesting" ? "nesting" : "rectangular"), Bt = (x = {}) => {
      const S = fa.parse({
        id: fo(),
        colorIndex: Ie.value.length % mn,
        ...x
      });
      return Ie.value = [...Ie.value, S], S;
    }, be = (x, S) => {
      for (const k of [...Y.value, ...G.value]) {
        if (k.materialId !== x) continue;
        const A = k.t;
        if (A == null || A === "") continue;
        const W = pe({ v: A });
        W != null && S.some((d) => Xa.equalTo(d, W)) && (k.t = null);
      }
    }, Ee = (x, S) => {
      for (const k of Y.value)
        k.materialId === x && (k.grain = S);
    }, ta = (x, S) => {
      const k = Ie.value.findIndex((z) => z.id === x);
      if (k === -1) return;
      const A = Ie.value[k];
      let W = S;
      if ("saw" in S && S.saw !== void 0) {
        const z = A.saw ?? Le.value.toData();
        W = { ...S, saw: Oc({ ...z, ...S.saw }) };
      }
      const d = fa.parse({ ...A, ...W, id: x }), b = A.thicknesses.filter(
        (z) => !d.thicknesses.some((V) => Xa.equalTo(V, z))
      ), $ = A.grain !== d.grain, B = [...Ie.value];
      B[k] = d, Ie.value = B, b.length && be(x, b), $ && Ee(x, d.grain), it(Y), it(G);
    }, na = (x) => {
      Ie.value = Ie.value.filter((S) => S.id !== x);
      for (const S of [...Y.value, ...G.value])
        S.materialId === x && (S.materialId = void 0, S.material = "", S.t = null);
      it(Y), it(G);
    }, On = (x, S, k = {}) => {
      const A = new Set(k.stock ?? []), W = new Set(k.shapes ?? []), d = x ? Ie.value.find((B) => B.id === x) : void 0, b = (B) => {
        if (!d) return null;
        if (S != null) return S;
        if (d.thicknesses.length === 1) return d.thicknesses[0];
        const z = B.t == null || B.t === "" ? null : pe({ v: B.t });
        return z != null && d.thicknesses.some((V) => Xa.equalTo(V, z)) ? z : null;
      }, $ = (B, z) => {
        d ? (B.materialId = d.id, B.material = Ye(d.name), B.t = b(B), z && (B.grain = d.grain), B.isNew = !1) : (B.materialId = void 0, B.material = "", B.t = null);
      };
      for (const B of Y.value) A.has(B.autoId) && $(B, !0);
      for (const B of G.value) W.has(B.autoId) && $(B, !1);
      it(Y), it(G);
    }, It = (x) => {
      const S = Ye(x), k = Ie.value.find((W) => Ye(W.name) === S);
      if (k) return k;
      const A = fa.parse({
        id: fo(),
        name: S,
        colorIndex: Ie.value.length % mn
      });
      return Ie.value = [...Ie.value, A], A;
    }, wn = (x, S, k = !1) => {
      const A = k ? Y : G, W = A.value.find((d) => d.autoId === x);
      if (W) {
        if (!Ye(S))
          W.materialId = void 0, W.material = "";
        else {
          const d = It(S);
          W.materialId = d.id, W.material = d.name;
        }
        it(A);
      }
    }, Bn = () => {
      const x = [...Y.value, ...G.value].filter((A) => !A.multiEdit);
      let S = 0, k = 0;
      for (const A of x) {
        const W = ea(A.material), d = Ye(W.name);
        if (!d) continue;
        const b = Ie.value.length, $ = It(d);
        Ie.value.length !== b && S++;
        const B = A.t, z = B == null || B === "" ? W.thickness : pe({ v: B });
        z != null && z > 0 && Number.isFinite(z) && !$.thicknesses.some((V) => Xa.equalTo(V, z)) && ($.thicknesses = [...$.thicknesses, z].sort((V, ie) => V - ie)), A.materialId !== $.id && (A.materialId = $.id, k++), A.material = $.name;
      }
      return it(Ie), it(Y), it(G), { created: S, mapped: k };
    };
    let on = !1;
    tt(
      [Ie, Y, G],
      () => {
        if (!on) {
          on = !0;
          try {
            const x = new Map(Ie.value.map((k) => [k.id, k]));
            let S = !1;
            for (const k of [...Y.value, ...G.value]) {
              if (!k.materialId) continue;
              const A = x.get(k.materialId);
              if (!A) {
                k.materialId = void 0, S = !0;
                continue;
              }
              const W = Ye(A.name);
              k.material !== W && (k.material = W, S = !0);
            }
            S && (it(Y), it(G));
          } finally {
            on = !1;
          }
        }
      },
      { deep: !0 }
    ), tt(
      [Y, G],
      () => {
        if (on) return;
        [...Y.value, ...G.value].some(
          (S) => !S.multiEdit && Ye(S.material) && !S.materialId
        ) && Bn();
      },
      { deep: !0, immediate: !0 }
    );
    let Sn = null;
    return {
      // Bundled object
      inputs: {
        inputStock: Y,
        inputShapes: G,
        inputUserGroups: qe,
        currentInputShape: ht,
        selectedSaw: re,
        inputSaw: Le,
        materials: Ie
      },
      // State
      inputShapes: G,
      inputStock: Y,
      inputUserGroups: qe,
      inputSaw: Le,
      currentInputShape: ht,
      selectedSaw: re,
      validationIssues: le,
      isValidating: H,
      // Computed
      totalInputShapes: ce,
      totalInputStock: Ve,
      totalInputShapeLines: Ke,
      totalInputStockLines: Ge,
      hasValidationIssues: $t,
      // Actions
      addInputShape: u,
      addInputShapes: de,
      addInputStock: c,
      addInputUserGroup: Ae,
      executeCommit: vt,
      cloneInputShape: p,
      cloneInputStock: f,
      duplicateInputShape: y,
      duplicateInputStock: I,
      updateInputShape: P,
      updateInputStock: j,
      updateInputSaw: dt,
      removeInputShape: ue,
      removeInputStock: ae,
      reset: oe,
      resetInputSaw: He,
      clear: R,
      clearIssues: ze,
      // Validation
      validateInputShapes: Te,
      validateInputShapeField: v,
      validateInputStock: ye,
      validateInputStockField: X,
      validateInputSaw: Je,
      clearValidationIssues: E,
      // Conversion
      createShapeList: K,
      createStockList: U,
      // Import/Export/Update
      importData: _,
      exportData: w,
      updateInputs: We,
      importInputShapes: nt,
      importInputStock: ft,
      // Additional functions
      getShapeGrainSummary: Rt,
      updateNumberFormat: qt,
      createTestData: yt,
      getSpecialShapeFields: Ft,
      // Extras Options Management
      extrasOptions: _e,
      setExtrasOptionsFromPricing: bt,
      getCentralizedOptions: Nt,
      // Materials list (CLE)
      materials: Ie,
      addMaterial: Bt,
      updateMaterial: ta,
      removeMaterial: na,
      assignMaterialToRows: On,
      linkRowMaterialByName: wn,
      generateMaterialsFromInputs: Bn,
      materialFor: yn,
      materialColorHex: xc,
      // Per-row saw resolution + job composition
      resolveSawForRow: Tn,
      rowStockType: kn,
      rowIsNesting: Et,
      jobComposition: Tt,
      defaultImportMode: sn,
      // Show part
      showPart: (x) => {
        Sn && Sn(x);
      },
      registerShowPart: (x) => {
        Sn = x;
      }
    };
  } catch (n) {
    throw console.error("[createInputs] Fatal error during initialization:", n), n;
  }
}
let Yi = null;
function ml(e = { numberFormat: "decimal" }) {
  try {
    return Yi || (Yi = qc(e)), Yi;
  } catch (n) {
    throw console.error("[useInputs] FATAL ERROR in useInputs:", n), console.error("[useInputs] Error stack:", n?.stack), n;
  }
}
const gl = {
  y1: "l1",
  y2: "l2",
  x1: "w1",
  x2: "w2"
}, Bc = {
  l1: "y1",
  l2: "y2",
  w1: "x1",
  w2: "x2"
};
function ms(e = !1) {
  return {
    l1: e,
    l2: e,
    w1: e,
    w2: e
  };
}
function Vc(e = !1) {
  return {
    x1: e,
    x2: e,
    y1: e,
    y2: e
  };
}
function vi(e = !1) {
  return {
    a: e,
    b: e
  };
}
function Uc(e = !1) {
  return {
    sides: ms(e),
    faces: vi(e)
  };
}
function jc(e = !1) {
  return {
    x1: e,
    x2: e,
    y1: e,
    y2: e,
    a: e,
    b: e
  };
}
function Gc(e) {
  const n = {};
  for (const [t, a] of Object.entries(gl))
    t in e && (n[a] = e[t]);
  return n;
}
function Wc(e) {
  const n = {};
  for (const [t, a] of Object.entries(Bc))
    t in e && (n[a] = e[t]);
  return n;
}
class To {
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
      const s = gl[a] ?? a;
      t[s] = i;
    }
    return t;
  }
  /**
   * Migrate banding from flat to nested structure
   * Also handles migration from old side names (x1/x2/y1/y2) to new names (l1/l2/w1/w2)
   */
  static migrateBanding(n) {
    const t = n.banding, a = "_banding" in n ? n._banding : void 0, i = st(n) ? n.bandingOptions : void 0;
    if (!t && !a && !i) return !1;
    if (t && t instanceof xa) {
      const y = t.sides;
      if (y && typeof y == "object" && ("x1" in y || "x2" in y || "y1" in y || "y2" in y)) {
        const P = this.migrateSideNames(y);
        return t.sides = P, !0;
      }
      return !1;
    }
    const s = {}, u = {}, c = { sides: {} };
    if (t && typeof t == "object") {
      const y = this.migrateSideNames(t);
      for (const [I, P] of Object.entries(y))
        Ia.includes(I) && (s[I] = P);
    }
    if (a && typeof a == "object") {
      const y = this.migrateSideNames(a);
      for (const [I, P] of Object.entries(y))
        Ia.includes(I) && (u[I] = P);
    }
    if (i && typeof i == "object") {
      i.all && (c.sides.all = i.all);
      for (const [y, I] of Object.entries(i))
        y !== "all" && Ia.includes(y) && I && (c.sides[y] = I);
    }
    const p = new xa(Object.keys(s).length > 0 ? { sides: s } : {}), f = Object.keys(u).length > 0 ? new xa({ sides: u }) : void 0;
    return "extras" in n && n.extras ? n.extras.banding = p : st(n) && (n.banding = p), f && "_banding" in n && (n._banding = f), st(n) && i && (n.bandingOptions = c), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(n) {
    const t = n.finish, a = "_finish" in n ? n._finish : void 0, i = st(n) ? n.finishOptions : void 0;
    if (!t && !a && !i || t && t instanceof Pa)
      return !1;
    const s = {}, u = {}, c = { faces: {} };
    if (t && typeof t == "object")
      for (const [y, I] of Object.entries(t))
        Ca.includes(y) && (s[y] = I);
    if (a && typeof a == "object")
      for (const [y, I] of Object.entries(a))
        Ca.includes(y) && (u[y] = I);
    if (i && typeof i == "object") {
      i.all && (c.faces.all = i.all);
      for (const [y, I] of Object.entries(i))
        y !== "all" && Ca.includes(y) && I && (c.faces[y] = I);
    }
    const p = new Pa(Object.keys(s).length > 0 ? { faces: s } : {}), f = Object.keys(u).length > 0 ? new Pa({ faces: u }) : void 0;
    return "extras" in n && n.extras ? n.extras.finish = p : st(n) && (n.finish = p), f && "_finish" in n && (n._finish = f), st(n) && i && (n.finishOptions = c), !0;
  }
  /**
   * Migrate storage format: Convert boolean true to option name strings in multi-column configs
   * This handles legacy data where single-option checkboxes stored boolean true instead of the option name
   */
  static migrateStorageFormat(n) {
    let t = !1;
    const a = "extras" in n && n.extras ? n.extras : n;
    if (a.banding) {
      const i = po("banding");
      if (i && i.labels && i.labels.length > 1)
        for (const s of Ia) {
          const u = `side.${s}`, c = ls(n, "banding", u);
          if (c && typeof c == "object" && !Array.isArray(c)) {
            let p = !1;
            const f = { ...c };
            for (const y of i.labels)
              if (f[y] === !0) {
                const P = i.labels.indexOf(y);
                if (P !== -1 && i.options[P] && Array.isArray(i.options[P])) {
                  const v = i.options[P];
                  v.length === 1 && (f[y] = v[0], p = !0);
                }
              }
            p && (mo(n, "banding", u, f), t = !0);
          }
        }
    }
    if (a.finish) {
      const i = po("finish");
      if (i && i.labels && i.labels.length > 1)
        for (const s of Ca) {
          const u = `face.${s}`, c = ls(n, "finish", u);
          if (c && typeof c == "object" && !Array.isArray(c)) {
            let p = !1;
            const f = { ...c };
            for (const y of i.labels)
              if (f[y] === !0) {
                const P = i.labels.indexOf(y);
                if (P !== -1 && i.options[P] && Array.isArray(i.options[P])) {
                  const v = i.options[P];
                  v.length === 1 && (f[y] = v[0], p = !0);
                }
              }
            p && (mo(n, "finish", u, f), t = !0);
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
    if (t && typeof t == "object" && !(t instanceof xa) && !("sides" in t) && !("faces" in t))
      return !0;
    if ("_banding" in n) {
      const i = n._banding;
      if (i && typeof i == "object" && !(i instanceof xa) && !("sides" in i) && !("faces" in i))
        return !0;
    }
    const a = n.finish;
    if (a && typeof a == "object" && !(a instanceof Pa) && !("sides" in a) && !("faces" in a))
      return !0;
    if ("_finish" in n) {
      const i = n._finish;
      if (i && typeof i == "object" && !(i instanceof Pa) && !("sides" in i) && !("faces" in i))
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
          const i = Object.keys(t.sides).filter((s) => !Ia.includes(s));
          if (i.length > 0)
            throw new Error(`Invalid side keys in banding: ${i.join(", ")}`);
        }
      }
      const a = n.finish;
      if (a) {
        if ("sides" in a && a.sides)
          throw new Error("Finish should not have sides property");
        if ("faces" in a && a.faces) {
          const i = Object.keys(a.faces).filter((s) => !Ca.includes(s));
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
    return "_banding" in n && n._banding && (t._banding = JSON.parse(JSON.stringify(n._banding))), "_finish" in n && n._finish && (t._finish = JSON.parse(JSON.stringify(n._finish))), st(n) && (n.bandingOptions && (t.bandingOptions = JSON.parse(JSON.stringify(n.bandingOptions))), n.finishOptions && (t.finishOptions = JSON.parse(JSON.stringify(n.finishOptions)))), t;
  }
  /**
   * Restore shape from backup
   */
  static restoreFromBackup(n, t) {
    "extras" in n && n.extras ? (t.banding && (n.extras.banding = t.banding), t.finish && (n.extras.finish = t.finish)) : st(n) && (t.banding && (n.banding = t.banding), t.finish && (n.finish = t.finish)), t._banding && "_banding" in n && (n._banding = t._banding), t._finish && "_finish" in n && (n._finish = t._finish), st(n) && (t.bandingOptions && (n.bandingOptions = t.bandingOptions), t.finishOptions && (n.finishOptions = t.finishOptions));
  }
}
function Zt(e) {
  return e === 1 ? !0 : e === 0 ? !1 : e;
}
function Pn(e) {
  if (!e) return e;
  const n = "x1" in e || "x2" in e || "y1" in e || "y2" in e, t = "l1" in e || "l2" in e || "w1" in e || "w2" in e;
  if (n && t && console.warn("Mixed side format detected in data - using old format (x/y) and ignoring new format (l/w)", e), n) {
    const i = Gc(e), s = {};
    return "l1" in i && (s.l1 = Zt(i.l1)), "l2" in i && (s.l2 = Zt(i.l2)), "w1" in i && (s.w1 = Zt(i.w1)), "w2" in i && (s.w2 = Zt(i.w2)), s;
  }
  const a = {};
  return "l1" in e && (a.l1 = Zt(e.l1)), "l2" in e && (a.l2 = Zt(e.l2)), "w1" in e && (a.w1 = Zt(e.w1)), "w2" in e && (a.w2 = Zt(e.w2)), Object.keys(a).length > 0 ? a : e;
}
function Kc(e) {
  return !e || typeof e != "string" ? e : {
    "side.x1": "side.w1",
    "side.x2": "side.w2",
    "side.y1": "side.l1",
    "side.y2": "side.l2"
  }[e] || e;
}
function oa(e) {
  return !e || !Array.isArray(e) ? e : e.map(Kc);
}
function zc(e) {
  const n = {};
  if (e.banding && typeof e.banding == "object")
    for (const [t, a] of Object.entries(e.banding))
      a === !0 || a === !1 ? n[t] = a : typeof a == "number" ? n[t] = Zt(a) : typeof a == "string" && a.length > 0 && (n[t] = a);
  if (e.bandingType && typeof e.bandingType == "object")
    for (const [t, a] of Object.entries(e.bandingType))
      if (e.banding) {
        const i = n[t];
        (i === !0 || typeof i == "string" && i.length > 0) && (typeof a == "string" && a.length > 0 ? n[t] = a : typeof a == "number" && a !== 0 && (n[t] = String(a)));
      } else
        typeof a == "string" && a.length > 0 ? n[t] = a : typeof a == "number" && a !== 0 && (n[t] = String(a));
  return Object.keys(n).length > 0 ? n : void 0;
}
function gs(e) {
  return e && Wc(e);
}
function Hc(e) {
  e?.type && delete e.type, Zc.call(this, e), Jc.call(this, e), Xc.call(this, e), e.shapes && Array.isArray(e.shapes) && e.shapes.forEach((n) => hs(n));
}
function Zc(e) {
  if (!e?.banding || typeof e.banding != "object") return;
  const n = Object.keys(e.banding);
  if (!n.length) return;
  const t = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  n.every((a) => t.includes(a)) || (e.banding = {
    labels: Object.keys(e.banding),
    pricing: e.bandingPricing || {}
  }, e.bandingPricing && delete e.bandingPricing);
}
function Jc(e) {
  if (!e?.finish || typeof e.finish != "object") return;
  const n = Object.keys(e.finish);
  if (!n.length) return;
  const t = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  n.every((a) => t.includes(a)) || (e.finish = {
    labels: Object.keys(e.finish),
    pricing: e.finishPricing || {}
  }, e.finishPricing && delete e.finishPricing);
}
function Xc(e) {
  if (!e?.planing || typeof e.planing != "object") return;
  const n = Object.keys(e.planing);
  if (!n.length) return;
  const t = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  n.every((a) => t.includes(a)) || (e.planing = {
    labels: Object.keys(e.planing),
    pricing: e.planingPricing || {}
  }, e.planingPricing && delete e.planingPricing);
}
function hs(e) {
  !e || typeof e != "object" || (To.needsMigration(e) && To.migrateShape(e), e._banding && delete e._banding, e._finish && delete e._finish, e._bandingType && delete e._bandingType);
}
function hl(e) {
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
function Eb(e) {
  if (!(!e || typeof e != "object")) {
    if (Hc(e), e.parts && Array.isArray(e.parts) && (e.parts = e.parts.map((n) => (n.extras?.banding?.sides && (n.extras.banding.sides = Pn(n.extras.banding.sides)), n.extras?.finish?.sides && (n.extras.finish.sides = Pn(n.extras.finish.sides)), n.extras?.planing?.sides && (n.extras.planing.sides = Pn(n.extras.planing.sides)), n))), e.stock && Array.isArray(e.stock) && (e.stock = e.stock.map((n) => n?.trim ? {
      ...n,
      trim: Pn(n.trim)
    } : n)), e.options) {
      if (hl(e.options), e.options.bandingLocations && (e.options.bandingLocations = oa(e.options.bandingLocations)), e.options.finishLocations && (e.options.finishLocations = oa(e.options.finishLocations)), e.options.planingLocations && (e.options.planingLocations = oa(e.options.planingLocations)), e.options.extrasLocationGroups)
        for (const n of ["banding", "finish", "planing"]) {
          const t = e.options.extrasLocationGroups[n];
          t && Array.isArray(t) && t.forEach((a) => {
            a.locations && (a.locations = oa(a.locations));
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
        t.locations && Array.isArray(t.locations) && (t.locations = oa(t.locations)), t.groups && Array.isArray(t.groups) && t.groups.forEach((a) => {
          a.locations && (a.locations = oa(a.locations));
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
    e.shapes && Array.isArray(e.shapes) && e.shapes.forEach((n) => hs(n)), (e.l !== void 0 || e.w !== void 0 || e.banding !== void 0) && hs(e);
  }
}
function Qc(e) {
  if (!e || typeof e != "object")
    return e;
  const n = { ...e };
  return n.saw && (n.saw = Yc(n.saw)), Array.isArray(n.stock) && (n.stock = n.stock.map(ed)), Array.isArray(n.parts) && (n.parts = n.parts.map(td)), n;
}
function Yc(e) {
  const n = { ...e };
  if (n.guillotineOptions && (n.guillotineOptions = { ...n.guillotineOptions }, n.guillotineOptions.strategy === "stock" && (n.guillotineOptions.strategy = "efficiency")), n.efficiencyOptions) {
    n.efficiencyOptions = { ...n.efficiencyOptions };
    const t = n.efficiencyOptions.primaryCompression;
    t === "x" ? n.efficiencyOptions.primaryCompression = "l" : t === "y" && (n.efficiencyOptions.primaryCompression = "w");
  }
  return n.bladeWidth !== void 0 && (n.bladeWidth = Number(n.bladeWidth)), n.stackHeight !== void 0 && (n.stackHeight = Number(n.stackHeight)), n.cutPreference === "" && (n.cutPreference = void 0), (n.cutPreference === null || n.cutPreference === void 0) && (n.cutType === "guillotine" || n.cutType === "beam") && (n.cutPreference = "l"), n;
}
function ed(e) {
  const n = { ...e };
  return delete n.numberFormatKeys, delete n.issues, delete n.warnings, n.trim && (n.trim = Pn(n.trim)), n.l !== void 0 && (n.l = Number(n.l)), n.w !== void 0 && (n.w = Number(n.w)), n.t !== void 0 && (n.t = Number(n.t)), n.q !== void 0 && (n.q = Number(n.q)), n.cost !== void 0 && (n.cost = Number(n.cost)), n;
}
function td(e) {
  const n = { ...e };
  if (delete n.numberFormatKeys, delete n.issues, delete n.warnings, n.banding || n.bandingType) {
    const t = zc(n);
    t && Object.keys(t).length > 0 && (n.extras || (n.extras = {}), n.extras.banding || (n.extras.banding = {}), n.extras.banding.sides = Pn(t)), delete n.banding, delete n.bandingType;
  }
  if (n.extras?.banding?.sides && (n.extras = { ...n.extras }, n.extras.banding = { ...n.extras.banding }, n.extras.banding.sides = Pn(n.extras.banding.sides)), n.finish && !n.extras?.finish) {
    if (n.extras || (n.extras = {}), n.extras.finish || (n.extras.finish = {}), n.finish.a !== void 0 || n.finish.b !== void 0) {
      const t = {};
      "a" in n.finish && (t.a = Zt(n.finish.a)), "b" in n.finish && (t.b = Zt(n.finish.b)), n.extras.finish.faces = t;
    } else
      n.extras.finish.sides = Pn(n.finish);
    delete n.finish;
  }
  if (n.extras?.finish?.sides && (n.extras = { ...n.extras }, n.extras.finish = { ...n.extras.finish }, n.extras.finish.sides = Pn(n.extras.finish.sides)), n.extras?.finish?.faces) {
    n.extras = { ...n.extras }, n.extras.finish = { ...n.extras.finish };
    const t = n.extras.finish.faces;
    "a" in t && (t.a = Zt(t.a)), "b" in t && (t.b = Zt(t.b));
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
function yi(e) {
  if (!e || typeof e != "object") return null;
  if (Array.isArray(e)) return e.map(yi);
  const n = {};
  for (const [t, a] of Object.entries(e))
    t === "__entityType" || t === "autoId" || t === "enabled" || t === "type" || t === "issues" || t === "warnings" || (n[t] = a && typeof a == "object" ? yi(a) : a);
  return Object.keys(n).length > 0 ? n : null;
}
function bl(e) {
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
function nd(e) {
  return e ? typeof e == "string" ? e : e.id ? e.id : e.autoId ? e.autoId : "" : "";
}
function ad(e) {
  return e.rot !== void 0 ? e.rot ? 1 : 0 : e.rotated !== void 0 ? e.rotated ? 1 : 0 : e.isRotated !== void 0 ? e.isRotated ? 1 : 0 : e.w > e.l ? 1 : 0;
}
const id = {
  successMetric: "efficiency"
}, sd = {
  // Populated by the rename-setting codemod as renames land (see docs/architecture/algorithm-settings.md).
  "secondRun.enabled": { to: "secondRun.enable" },
  "groups.efficiency.firstShapes": { to: "groups.efficiency.firstShape" },
  "groups.shapeAreaCutOff": { to: "groups.shapeAreaThreshold" },
  // `guillotine.viableShapeArea` → `viableShapeAreaThreshold` retired with the setting itself
  // (2026-08-18): the alias faithfully migrated a stored key onto a knob nothing read. Both
  // paths now drop as `unknown_path`, which is the honest report.
  "subset.shuffles": { to: "subset.efficiency.shuffles" },
  "evo.disable": { to: "evo.enable", transform: (e) => !e },
  // Saw-constraint surface (2026-08-18, `2dbe1d065`): `constraints.kerfRip`/`kerfCross` became
  // `bladeWidth`/`bladeWidthCross`, ending the grep collision with `ptx/parser.ts`'s
  // format-facing `PtxMaterial.kerfRip`. The rename shipped its `@aliases` JSDoc without these
  // runtime entries, so the catalogue resolved the old names and nothing else did.
  kerfRip: { to: "bladeWidth", surface: "saw-constraint" },
  kerfCross: { to: "bladeWidthCross", surface: "saw-constraint" }
};
function od(e) {
  const n = {};
  for (const [t, a] of Object.entries(sd))
    (a.surface ?? "config") === e && (n[t] = a);
  return n;
}
od("config");
T({
  // Context - using z.any() for complex external types
  job: Se().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: l().nullable().default(null).describe("Socket.io connection ID"),
  user: Se().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: Se().describe("Configuration object"),
  // Type: Config
  api: ne().nullable().default(null).describe("API mode flag"),
  app: ne().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: xs("Saw").describe("Saw configuration"),
  stockList: wt("Stock").default([]).describe("List of stock materials"),
  shapeList: Ui(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: wt("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: wt("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: wt("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: Ui(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: Ui(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: ku,
  // Results storage
  cutList: wt("Cut").default([]).describe("List of cuts to make"),
  segmentList: wt("Segment").default([]).describe("List of segments"),
  offcuts: wt("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: wt("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: ne().default(!1).describe("Use inventory system"),
  successMetric: l().default(id.successMetric).describe("Metric for optimization success"),
  enableEvo: ne().default(!0).describe("Enable evolutionary algorithm"),
  weighting: ve(l(), Se()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: Se().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: Se().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: T({
    placement: m().default(0),
    group: m().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  runningEvo: ne().default(!1).describe("Currently running evolution"),
  evolutionVisData: Z(ve(l(), ac())).default([]).describe("Evolution visualization data"),
  final: ne().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: ne().default(!1).describe("Has minimum spacing requirement")
});
const ld = Xe(["decimal", "fraction"]), es = T({
  sku: ve(l(), l()).optional(),
  name: ve(l(), l()).optional()
}), Ts = T({
  banding: es.optional(),
  finish: es.optional(),
  planing: es.optional()
}), vl = fn.extend({
  autoId: l().optional(),
  __entityType: l().optional()
}), yl = vl.extend({ id: l().min(1) }), rd = je([
  vl,
  Z(yl).min(1)
]), ud = T({
  id: l().optional(),
  // defaults to `name`
  name: l().min(1),
  type: Xe(["sheet", "linear", "roll"]).default("sheet"),
  sawId: l().optional(),
  saw: fn.optional(),
  thicknesses: Z(m().positive()).optional(),
  grain: Pi.optional()
}), cd = T({
  job: Se().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Extend with autoId/entityType so they survive Zod validation for worker reconstruction
  inputSaw: rd,
  inputShapes: Z(Yn.extend({ autoId: l().optional(), __entityType: l().optional() })),
  inputStock: Z(Cn.extend({ autoId: l().optional(), __entityType: l().optional() })),
  inputUserGroups: Z(tl.extend({ autoId: l().optional(), __entityType: l().optional() })).optional(),
  /**
   * Canonical identified-saw array (post-normalisation). Callers may send it explicitly
   * alongside a single `inputSaw`, or send `inputSaw` AS an array and let
   * `normaliseSawInput` populate this. Absent on single-saw jobs — never added for them,
   * so legacy payloads stay byte-identical (the worker's cache hash depends on this).
   */
  inputSaws: Z(yl).optional(),
  /** Materials with saw associations — the grouping the worker partitions a mixed job by. */
  inputMaterials: Z(ud).optional(),
  // Number format for conversion
  numberFormat: ld.optional(),
  // Algorithm configuration
  enableEvo: ne().default(!0),
  weighting: Se().optional(),
  successMetric: l().optional(),
  useInventory: ne().default(!1),
  // Context
  socketId: l().optional(),
  user: Se().optional(),
  // IUser type
  // Application flags
  widget: ne().optional(),
  api: ne().optional(),
  app: ne().optional(),
  domain: l().optional(),
  /**
   * Storefront identity for a PLATFORM-HOSTED shop (`ecommerce.slug` on the
   * Organisation). Custom-domain shops resolve server-side from the request host
   * via `api.domains`; a platform-hosted shop shares OUR hostname, so it asserts
   * its slug here and the server resolves the owning account from it. Mirror of
   * the field in the server copy (server/optimiser/classes/Optimiser.zod.ts).
   */
  orgSlug: l().optional(),
  // Extras options (centralized configuration)
  extrasOptions: T({
    banding: T({
      options: T({
        sides: ve(l(), Z(l())).optional()
      }).optional()
    }).optional(),
    finish: T({
      options: T({
        faces: ve(l(), Z(l())).optional()
      }).optional()
    }).optional(),
    planing: T({
      options: T({
        sides: ve(l(), Z(l())).optional(),
        faces: ve(l(), Z(l())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // Extras display-value resolution for the cutlist CSV (internal-only;
  // SKU → name → tuple). Storefront-supplied; never on the public /v3 API.
  extrasResolution: Ts.optional(),
  // API specific
  config: Se().optional(),
  v: m().optional(),
  // API version
  webhook: l().optional(),
  /**
   * Job-level label-printer fields — the socket wire's equivalent of the V3
   * request's top-level `labels` (the embedded calculator sends it from
   * `options.labels`). Part-level labels travel inside `inputShapes`; this
   * carries the job-level ones (today `customer` → PTX JOBS.CUSTOMER) to the
   * worker, which reads `data.labels` onto the job result. Without the
   * declaration zod strips the key and a storefront job could never set it.
   */
  labels: Ss.optional(),
  // Named optimisation MODEL (the solver approach). One naming convention — only the canonical ids
  // below are accepted (no aliases); the server maps the value to a config bundle. Canonical ids:
  // 'rectangle-guillotine-fast' (default) and the Max tiers 'rectangle-guillotine-max-1|2|3'.
  // NOTE: the Max tiers are currently BEAM-ONLY — a Max request on a non-beam saw (or a beam saw
  // without a recognised profile) is downgraded to Fast (see server/optimiser/models.ts
  // selectAlgorithm / maxModelBlockReason).
  model: l().optional().describe(
    "Optimisation model. Canonical ids only (no aliases): 'rectangle-guillotine-fast' (default) | 'rectangle-guillotine-max-1' | 'rectangle-guillotine-max-2' | 'rectangle-guillotine-max-3'. The Max tiers are currently BEAM-only and require a recognised beam saw profile; otherwise the job runs Fast. Unknown/absent → Fast."
  ),
  // Admin-only per-request config override (algolab smoke-testing from the UI). Carries experimental
  // flags / guillotine overrides for ONE calc; the server applies it ONLY when the requesting user is
  // an admin (server/workers/bull-process.ts), so a non-admin payload is ignored. Mirrors the
  // __configOverrides the batch-run/run-single tools use.
  __configOverrides: T({
    experimental: ve(l(), Jt()).optional(),
    guillotine: ve(l(), Jt()).optional()
  }).passthrough().optional(),
  //source
  sourceVersion: l().nullish(),
  source: l().optional()
});
T({
  job: Se().optional(),
  // Type: Job from BullMQ
  saw: Se(),
  // Runtime Saw instance
  shapeList: Z(Se()),
  // Runtime Shape instances
  stockList: Z(Se()),
  // Runtime Stock instances
  userGroups: Z(Se()).optional(),
  // Runtime Group instances
  enableEvo: ne(),
  weighting: Se().optional(),
  successMetric: l().optional(),
  useInventory: ne(),
  socketId: l().optional(),
  user: Se().optional(),
  widget: ne().optional(),
  api: ne().optional(),
  app: ne().optional(),
  domain: l().optional(),
  config: Se().optional(),
  v: m().optional(),
  webhook: l().optional()
});
const dd = T({
  id: l(),
  count: m(),
  name: l(),
  l: m(),
  w: m(),
  t: m(),
  material: l()
}), Os = T({
  inputStock: Z(Cn),
  inputShapes: Z(Yn),
  inputSaw: fn,
  inputUserGroups: Z(tl),
  // CLE materials list (project-scoped). Optional for back-compat with projects saved
  // before the materials feature — reverse-engineered from stock/parts on load if absent.
  materials: Z(fa).optional(),
  // Centralized extras options for UI dropdowns
  extrasOptions: T({
    banding: T({
      options: Z(l())
    }).optional(),
    finish: T({
      options: Z(l())
    }).optional(),
    planing: T({
      options: Z(l())
    }).optional()
  }).optional()
}).optional(), kl = T({
  // Banding metrics
  bandingLengthByType: ve(l(), m()).default({}),
  // Finish metrics (by face)
  finishAreaByType: ve(l(), m()).default({}),
  // Planing metrics (by type)
  planingAreaByType: ve(l(), m()).default({}),
  // Material summary with nested structure
  materialSummary: ve(
    l(),
    // material name
    ve(
      l(),
      // thickness
      T({
        used: m(),
        stacks: m(),
        bandingLengthByType: ve(l(), m())
      })
    )
  ).default({}),
  // Tallies
  usedStockTally: ve(l(), m()).default({}),
  addedPartTally: ve(l(), m()).default({}),
  // Cost metrics
  stockAreaCost: m().default(0),
  totalStockCost: m().default(0),
  // Machining metrics
  hasMachining: ne().default(!1),
  numHoles: m().default(0),
  numCorners: m().default(0),
  // Efficiency metrics
  totalBandingLength: m().default(0),
  totalFinishArea: m().default(0),
  totalPlaningArea: m().default(0),
  totalEfficiency: m().default(0),
  // Cutting metrics
  totalCutLength: m().default(0),
  totalStackedCutLength: m().default(0),
  totalCuts: m().default(0),
  totalStackedCuts: m().default(0),
  // Area metrics
  totalStockArea: m().default(0),
  totalStockUsedArea: m().default(0),
  totalStockUnusedArea: m().default(0),
  totalPartArea: m().optional(),
  // Legacy name
  totalPartsArea: m().default(0),
  totalUnusedPartsArea: m().default(0),
  totalOffcutsArea: m().default(0),
  totalOffcuts: m().default(0),
  totalBladeArea: m().default(0),
  totalTrimArea: m().default(0),
  // Additional metrics
  totalPartsProduced: m().optional(),
  totalUsedStock: m().optional(),
  totalRollLength: m().optional(),
  totalStockWeight: m().optional(),
  totalPartWeight: m().optional()
}), Da = kl.extend({
  bandingLengthByType: ve(l(), m()).default({}),
  // Authoritative "parts left out of the layout" list (superset of the top-level
  // unusableParts). Empty ⇒ every requested part placed. See unplacedShapeTallySchema.
  unplacedParts: Z(dd).default([]).describe('Every part not placed in the returned layout (attempted-but-unfitted PLUS the up-front-unusable parts). Authoritative completeness list — empty means all parts placed. Do not use the top-level unusableParts alone for completeness; it is only the "can never fit" subset.'),
  // Ecommerce pricing - calculated client-side
  offcutCost: m().optional()
}), fd = T({
  // Core optimization results
  stockList: wt("Stock"),
  shapeList: wt("Shape"),
  cutList: wt("Cut").optional(),
  segmentList: wt("Segment").optional(),
  offcuts: wt("Offcut").optional(),
  saw: xs("Saw"),
  unusableShapes: wt("Shape").optional(),
  unavailableStock: wt("Stock").optional(),
  evolutionVisData: Z(T({})).optional(),
  performance: l().optional(),
  algoMs: m().optional(),
  /** Named optimisation MODEL that actually produced this result (canonical id from
   *  composeModelSelection, e.g. `rectangle-guillotine-fast` / `…-max-1`). Recorded for
   *  telemetry — "which algorithm ran" + its speed (algoMs) on real jobs. */
  model: l().optional(),
  /** The model the CALLER asked for, before any gate downgraded it (`model` above is the
   *  post-downgrade id). Null when nothing was requested. */
  modelRequested: l().nullable().optional(),
  /** Set only when a requested model was NOT honoured — e.g. a Max tier refused because the saw
   *  carries no recognised beam profile. Without this a downgraded job is indistinguishable from
   *  one that never asked for Max, and the customer is never told they got Fast. */
  modelDowngrade: T({
    from: l(),
    to: l(),
    reason: l()
  }).optional(),
  /** Deterministic, machine-independent work count (placement-scoring evals) — the
   *  algorithm-lab gates regressions on this instead of wall-clock `algoMs`. */
  algoComplexity: m().optional(),
  // Per-stage timings for benchmark/debugging. Populated by the optimiser pipeline
  // and surfaced in the benchmark report as a stacked bar chart next to layouts.
  phaseTimings: Z(T({ phase: l(), ms: m() })).optional(),
  /** One record per GDRR search this job ran (flex runs the pipeline per cut direction, so a
   *  job can have several). `stopReason` is the load-invariance observable: anything other
   *  than `deadline` means an iteration/state bound fixed the answer, so the same inputs
   *  reproduce it on any machine. `deadline` means the wall clock truncated the search and
   *  this board count depends on how busy the box was. */
  gdrrRuns: Z(T({
    parts: m(),
    seedBoards: m(),
    planBoards: m().nullable().optional(),
    iterations: m(),
    ms: m(),
    stopReason: l().optional(),
    budgetMs: m().optional(),
    iterCap: m().optional(),
    oracleCalls: m().optional(),
    oracleMs: m().optional()
  })).optional(),
  apiVersion: m().optional(),
  // Renamed from 'v'
  metadata: Da.optional(),
  time: m().optional(),
  // billedMs — what the customer is charged for
  // CNC cutting plans per stock (keyed by stock autoId)
  cuttingPlans: ve(l(), Se()).optional(),
  // Saw-profile constraint violations — populated when the caller passes
  // `sawProfileId` in RuntimeCalculationData. Each entry describes a way
  // the produced layout cannot be faithfully emitted to the declared saw.
  // REPORT-ONLY today; downstream code can choose to refuse emission or
  // fall back to a different saw / format.
  sawViolations: Z(T({
    kind: l(),
    stockId: l(),
    message: l(),
    shapeIds: Z(l()).optional()
  })).optional(),
  /**
   * Mixed-job markers. A mixed job runs one sub-calculation per material group and
   * merges the outputs; `groups` records what ran. The job-level `saw` above is the
   * DEFAULT group's saw — per-stock truth is each stock's inlined `saw` snapshot.
   * Absent on single-group (legacy) jobs.
   */
  mixed: ne().optional(),
  groups: Z(T({
    key: l(),
    label: l(),
    materialId: l().optional(),
    sawId: l().optional(),
    taxonomy: l(),
    model: l().optional(),
    algoMs: m().optional(),
    stockAutoIds: Z(l()).optional()
  })).optional(),
  // Optional input data for debugging/API reporting
  inputs: Os
});
T({
  // Job execution metadata
  success: ne(),
  socketId: l().nullable().default(null),
  userId: l(),
  api: ne(),
  app: ne(),
  widget: ne().optional(),
  // Billed per compute-millisecond (a CLE calc by an API subscriber). Distinct from `api`
  // and `widget`, which carry their own semantics — see Optimiser.zod.ts::calculationDataSchema.
  metered: ne().optional(),
  // Raw request origin ('web' | 'checkout' | 'app' | …) — kept so telemetry can
  // distinguish web-app calcs from external-API calls (both have api=true).
  source: l().optional(),
  cached: ne().optional(),
  hash: l().optional(),
  webhook: l().optional(),
  config: Se().optional(),
  error: l().optional(),
  jobId: m().optional(),
  // Job-level label-printer fields (mirrors V3 request top-level `labels`).
  // Persisted so the export step (post-processor emit) can thread values
  // like JOBS.CUSTOMER into the PTX output without re-loading the request.
  labels: T({
    customer: l().max(100).optional()
  }).optional(),
  // Per-type SKU/name maps to resolve operator-meaningful cutlist labels at
  // export (internal-only; see optimiser.zod extrasResolutionSchema).
  extrasResolution: Ts.optional(),
  // Input data
  inputs: Os,
  // The actual optimization results
  optimisation: fd
});
T({
  // Database metadata
  jobId: m().optional(),
  // Job execution data
  success: ne(),
  socketId: l().nullable().default(null),
  userId: l(),
  api: ne(),
  app: ne(),
  widget: ne().optional(),
  // Billed per compute-millisecond (a CLE calc by an API subscriber). Distinct from `api`
  // and `widget`, which carry their own semantics — see Optimiser.zod.ts::calculationDataSchema.
  metered: ne().optional(),
  // Raw request origin (see `jobResultSchema.source`).
  source: l().optional(),
  cached: ne().optional(),
  hash: l().optional(),
  webhook: l().optional(),
  config: Se().optional(),
  error: l().optional(),
  // Job-level label-printer fields (see `jobResultSchema.labels`).
  labels: T({
    customer: l().max(100).optional()
  }).optional(),
  // Extras display-value resolution maps (see `jobResultSchema.extrasResolution`).
  extrasResolution: Ts.optional(),
  // Optimization results (flattened from optimization object)
  stockList: wt("Stock"),
  shapeList: wt("Shape"),
  cutList: wt("Cut").optional(),
  segmentList: wt("Segment").optional(),
  offcuts: wt("Offcut").optional(),
  saw: xs("Saw"),
  unusableShapes: wt("Shape").optional(),
  unavailableStock: wt("Stock").optional(),
  performance: l().optional(),
  algoMs: m().optional(),
  /** Named optimisation MODEL that produced this result (see optimisationOutputSchema.model) —
   *  flattened here so the telemetry performance query can group jobs by algorithm. */
  model: l().optional(),
  /** Deterministic, machine-independent work count (placement-scoring evals) — the
   *  algorithm-lab gates regressions on this instead of wall-clock `algoMs`. */
  algoComplexity: m().optional(),
  metadata: Da.optional(),
  apiVersion: m().optional(),
  time: m().optional(),
  // billedMs — what the customer is charged for
  // CNC cutting plans per stock (keyed by stock autoId)
  cuttingPlans: ve(l(), Se()).optional(),
  /** Mixed-job markers (see optimisationOutputSchema) — absent on single-group jobs. */
  mixed: ne().optional(),
  groups: Z(Se()).optional(),
  // Input data
  inputs: Os,
  // Computed fields for easier querying/display
  numParts: m().optional(),
  numStock: m().optional(),
  workerName: l().optional(),
  queueName: l().optional()
});
T({
  id: l().optional(),
  name: l().optional(),
  l: m(),
  w: m(),
  t: m().nullable().optional(),
  material: l().optional(),
  q: m().optional(),
  orientationLock: je([
    lt(""),
    lt("l"),
    lt("w")
  ]).nullable().optional(),
  // Basic extras for display
  banding: Se().optional(),
  finish: Se().optional(),
  planing: Se().optional()
});
const pd = T({
  issues: Z(l()),
  id: l(),
  duplicate: ne(),
  name: l(),
  added: ne(),
  x: m(),
  y: m(),
  l: m(),
  w: m(),
  t: m(),
  q: m().optional(),
  // Add quantity for checkout compatibility
  orientationLock: je([
    lt(""),
    lt("l"),
    lt("w")
  ]),
  trim: T({
    l1: m(),
    l2: m(),
    w1: m(),
    w2: m()
  }),
  material: l(),
  banding: Se(),
  // Using any for now, could use bandingPropertiesSchema
  bandingType: Se(),
  // Legacy field
  finish: Se(),
  // Using any for now, could use finishPropertiesSchema
  stock: T({ id: l() }),
  rot: ne(),
  notes: l(),
  customData: ve(l(), je([l(), m(), ne()]))
});
T({
  issues: Z(l()),
  id: l(),
  duplicate: ne().optional(),
  name: l(),
  l: m(),
  w: m(),
  t: m().nullable(),
  material: l(),
  cost: m(),
  used: ne(),
  grain: je([
    lt(""),
    lt("l"),
    lt("w"),
    ic()
  ]).nullable(),
  trim: T({
    l1: m(),
    l2: m(),
    w1: m(),
    w2: m()
  }),
  parts: Z(pd),
  efficiency: m(),
  notes: l().optional(),
  // Legacy V1 fields
  blade: T({
    width: m()
  }).optional(),
  cutPreference: je([
    lt("l"),
    lt("w")
  ]).optional(),
  // Analysis data
  analysis: T({
    partArea: m(),
    totalParts: m(),
    areaEfficiency: m(),
    cutLength: m(),
    bandingLength: m(),
    numberOfCuts: m(),
    rollLength: m().optional()
  }).optional(),
  // Stack info
  stack: Se().optional(),
  // Stock quantity for checkout compatibility
  q: m().optional()
});
const wl = fn.extend({
  id: l().min(1).describe("Identifier materials reference via sawId. The FIRST element of the saw array is the job's default saw")
}), md = je([
  fn,
  Z(wl).min(1)
]), Sl = T({
  id: l().optional().describe("Material identifier stock/parts reference via their materialId. Defaults to `name`"),
  name: l().min(1).describe("Material name. Stock/parts without a materialId attach by matching their `material` (and thickness, when `thicknesses` is set)"),
  type: Xe(["sheet", "linear", "roll"]).default("sheet").describe("Stock type of this material — must equal the associated saw's stockType"),
  sawId: l().optional().describe("Reference to an identified saw in the `saw` array. Mutually exclusive with inline `saw`; when neither is set the material runs on the job's default saw"),
  saw: fn.optional().describe("Inline saw for this material (hoisted to an identified saw with id = material id). Mutually exclusive with `sawId`"),
  thicknesses: Z(m().positive()).optional().describe("Thicknesses this material is available in — used for name-based association"),
  grain: Pi.optional().describe("Grain direction of the material")
});
T({
  // Job metadata
  jobId: m().describe("Job identifier"),
  calcTime: m().optional().describe("Calculation time in milliseconds"),
  // Input configuration (preserved)
  saw: fn.describe("Saw configuration used. On a mixed (multi-saw) job this is the job's DEFAULT saw — attribute each stock via its sawId and the `saws` echo"),
  // Mixed-job echoes — present ONLY on mixed jobs (single-saw responses are byte-identical)
  saws: Z(wl).optional().describe("The identified saws a mixed job ran with (the request's saw array plus any hoisted inline material saws). Present only on mixed jobs"),
  materials: Z(Sl).optional().describe("The materials a mixed job was partitioned by. Present only on mixed jobs"),
  // Result data (internal format - l1/l2/w1/w2)
  // Using actual schemas to strip internal-only fields
  stock: Z(wu.extend({
    sawId: l().optional().describe("Id of the saw this stock was optimised on (mixed jobs only — see `saws`)"),
    materialId: l().optional().describe("Id of the material this stock belongs to (mixed jobs only — see `materials`)")
  })).describe("Stock items"),
  parts: Z(go).describe("Parts with coordinates and properties"),
  cuts: Z(Iu).optional().describe("Cut instructions"),
  offcuts: Z(xu).optional().describe("Remaining offcut pieces"),
  unusableParts: Z(go).optional().describe('Parts rejected before optimisation because no available stock can ever hold them (too large for every stock size, or no matching material/thickness). The "can never fit" subset only — NOT a completeness signal. For "did every part place?" use metadata.unplacedParts (which also contains these) or compare placed vs. requested counts.'),
  // Complete metadata (ALL internal analysis fields)
  metadata: kl.describe("Complete analysis and metrics")
});
T({
  saw: md.describe("Saw configuration — a single saw (every stock cut on it; today's behaviour, unchanged) OR a non-empty ARRAY of identified saws for a mixed job. Array form: the FIRST element is the job's default saw; materials bind stock/parts to the others via sawId"),
  stock: Z(Cn).describe("Stock items"),
  parts: Z(Yn).describe("Parts to cut"),
  // Mixed jobs: materials with saw associations. Stock/parts attach to a material via
  // their existing `materialId` (or by material name + thickness); each material's group
  // is optimised on its associated saw. Absent → the whole job runs on `saw` (legacy).
  materials: Z(Sl).optional().describe("Materials with saw associations — the groups a MIXED job is partitioned and optimised by. Stock/parts attach to a material via their materialId (or by material name + thickness). Each material runs on its sawId / inline saw, or on the job's default saw when neither is set"),
  groups: Z(Pu).optional().describe("User-defined part groups with XY positions"),
  // Per-job optimisation MODEL — the same canonical ids as `saw.algorithm`, which this overrides for
  // this job only. Deliberately an open `z.string()`, not an enum: an unrecognised id must resolve to
  // null and fall back to the default model (selectAlgorithm), never fail the request — and the same
  // applies to a model that doesn't fit the job (a nesting tier on a beam saw, a Max tier the caller
  // isn't entitled to). The accepted values + their gating are published at `GET /v3/spec`.
  model: l().optional().describe("Optimisation model for this job (canonical id, e.g. `rectangle-guillotine-max-2` or `irregular-nesting-max-1`). Overrides `saw.algorithm`. Max tiers cost more compute time, which is billed. An unrecognised or ineligible model safely falls back to the default — it never fails the request. Full catalogue: GET /v3/spec."),
  webhook: l().url().optional().describe("Webhook URL for async result delivery"),
  // Job-level label-printer fields (distinct from /v3/labels printable PDFs).
  // `customer` maps to PTX JOBS.CUSTOMER. Mismatches with the chosen saw's
  // format(s) surface as warnings, not request failures.
  labels: Ss.describe("Job-level fields fed to the saw label printer. `customer` is printed as PTX JOBS.CUSTOMER.").optional()
});
T({
  error: l().describe("Error message"),
  details: Jt().optional().describe("Detailed error information (Zod validation errors, etc.)"),
  version: lt("V3").describe("API version"),
  help: l().optional().describe("Helpful migration guidance"),
  example: Jt().optional().describe("Example of correct format"),
  docs: l().url().optional().describe("Link to V3 documentation")
});
function gd(e) {
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
function hd(e, n) {
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
    analysis: gd(e.analysis),
    stack: e.stack?.number ?? 1,
    customData: Qt(e.customData),
    // Mixed-job attribution — see the `saws` / `materials` echoes on the response
    ...n?.sawId ? { sawId: n.sawId } : {},
    ...n?.materialId ? { materialId: n.materialId } : {}
  } : null;
}
function bd(e, n) {
  if (!e) return null;
  let t = null;
  const a = nd(e.stock);
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
    rot: ad(e),
    added: e.added ?? !1,
    notes: e.notes ?? "",
    code: e.code,
    stock: t,
    trim: Qt(e.trim),
    extras: yi(e.extras),
    customData: Qt(e.customData)
  };
  return e.machining && (i.machining = bl(e.machining)), i;
}
function vd(e) {
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
    extras: yi(e.extras),
    customData: Qt(e.customData)
  };
  return e.machining && (n.machining = bl(e.machining)), e.issues && Array.isArray(e.issues) && e.issues.length > 0 ? n.issues = e.issues.map((t) => ({
    message: Cs(t.message) || t.message,
    type: t.type,
    category: t.category,
    field: t.field
  })) : n.issues = [], n;
}
function yd(e) {
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
function kd(e) {
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
function xl(e, n) {
  const t = new Set(e.stockAutoIds ?? []);
  return n.find((i) => i.saw && (t.has(i.autoId) || t.has(i.id)))?.saw;
}
function wd(e, n) {
  const t = [], a = /* @__PURE__ */ new Set();
  for (const i of e) {
    if (!i.sawId || a.has(i.sawId)) continue;
    const s = xl(i, n);
    s && (a.add(i.sawId), t.push({ ...Qt(s), id: i.sawId }));
  }
  return t;
}
function Sd(e, n) {
  const t = [], a = /* @__PURE__ */ new Set();
  for (const i of e) {
    if (!i.materialId || a.has(i.materialId)) continue;
    a.add(i.materialId);
    const s = xl(i, n);
    t.push({
      id: i.materialId,
      name: i.label || i.materialId,
      type: s?.stockType ?? "sheet",
      ...i.sawId ? { sawId: i.sawId } : {}
    });
  }
  return t;
}
function xd(e) {
  const n = e.stockList || e.stock || [], t = /* @__PURE__ */ new Map();
  for (const I of n) {
    const P = { id: I.id || "" };
    I.code && (P.code = I.code), I.id && t.set(I.id, P), I.autoId && I.autoId !== I.id && t.set(I.autoId, P);
  }
  const a = e.mixed && Array.isArray(e.groups) ? e.groups : [], i = /* @__PURE__ */ new Map();
  for (const I of a)
    for (const P of I.stockAutoIds ?? []) i.set(P, I);
  const s = n.map((I) => hd(I, i.get(I.autoId) ?? i.get(I.id))), u = (e.shapeList || e.parts || []).map((I) => bd(I, t)), c = (e.unusableShapes || []).map(vd), p = (e.cutList || e.cuts || []).map(yd), f = (e.offcuts || []).map(kd), y = {
    jobId: e.jobId,
    // Billed compute ms (`time` on the stored result); raw algorithm ms covers
    // results saved before a billed value was recorded.
    calcTime: e.time ?? e.algoMs,
    saw: Qt(e.saw),
    stock: s,
    parts: u,
    cuts: p,
    offcuts: f,
    unusableParts: c,
    metadata: Qt(e.metadata)
  };
  if (a.length) {
    const I = wd(a, n);
    I.length && (y.saws = I);
    const P = Sd(a, n);
    P.length && (y.materials = P);
  }
  return y;
}
const Id = Su.pick({ x: !0, y: !0, diameter: !0, depth: !0, face: !0, type: !0 }).describe("A hole to drill. Every measurement is in the response's `units`, not necessarily mm"), Pd = T({
  name: l().describe("Part name, from the model where it had one"),
  l: m().describe("Length — the long side"),
  w: m().describe("Width — the short side"),
  t: m().describe("Thickness"),
  q: m().int().describe("Quantity. Above 1 when identical copies were merged into one row"),
  material: l().describe("Material name read from the model, or empty when the file carried none"),
  outline: Z(T({ x: m(), y: m() })).optional().describe("Closed polygon outline. Present for shaped parts; feed it to a nesting model"),
  holes: Z(Z(T({ x: m(), y: m() }))).optional().describe("Inner rings that are SHAPE — slots, cut-outs — in the outline's own frame. Round ones are drilling and come back in `machining.holes` instead, never in both"),
  machining: T({
    holes: Z(Id).describe("Array of holes")
  }).optional().describe("Machining read off the model, in `/v3/calculate`'s `machining` shape"),
  role: Xe(["rect", "nesting", "fixture"]).describe("What the part is FOR: a plain rectangle, a shape worth nesting, or a fitting that was never cut from sheet. Ignored by /v3/calculate")
}), Cd = T({
  code: l().describe("Stable machine-readable code, e.g. `open-mesh`, `fixture-detected`, `parts-overlap`"),
  severity: Xe(["info", "warning", "error"]).describe("How much it matters. `error` means the part cannot be cut as measured"),
  message: l().describe("Human-readable explanation"),
  partIndex: m().int().optional().describe("Index into `parts`. Absent for advice about the file as a whole"),
  otherPartIndex: m().int().optional().describe("The second part, for advice about a PAIR (overlaps)"),
  penetrationFraction: m().optional().describe("How deeply two parts overlap, as a fraction of the smaller part's smallest dimension"),
  wastePct: m().optional().describe("Fraction of the bounding rectangle that is waste, 0..1 — what nesting this part would save"),
  confidence: m().optional().describe("How sure the role verdict was, 0..1")
});
T({
  version: lt("3"),
  model: T({
    format: l().nullable().describe("Detected format: obj, stl, ply, gltf, 3mf, dae or step"),
    units: l().describe("The unit every number in this response is in"),
    sourceUnits: l().describe("The unit the geometry was read as — the `sourceUnits` you sent, else the unit the file declared, else `units`"),
    declaredUnits: l().nullable().describe("The unit the FILE itself declared, where the format carries one (3MF, Collada, STEP). Null otherwise"),
    suggestedUnits: l().optional().describe("A different `sourceUnits` that would make the model plausible against the `bladeWidth` you supplied. Only ever present when you supplied one"),
    stats: T({
      parts: m().int().describe("Rows in `parts`"),
      rectangular: m().int(),
      irregular: m().int(),
      unrecognised: m().int(),
      fixtures: m().int().describe("Parts judged to be fittings rather than sheet goods"),
      merged: m().int().describe("Identical parts collapsed into a quantity"),
      triangles: m().int(),
      components: m().int().describe("Separate solids found in the file"),
      debris: m().int().describe("Fragments too small to be parts, ignored"),
      modelDiagonal: m().describe("Bounding-box diagonal of the whole model, in `units`"),
      modelSize: T({ x: m(), y: m(), z: m() })
    })
  }),
  parts: Z(Pd),
  advice: Z(Cd),
  warnings: Z(l()).describe("Notes from the file reader itself, e.g. that an STL carries no part names")
});
const Ma = { minEdgeLength: 140, minPanelDepth: 70 };
function Ld(e, n, t, a, i = Ma) {
  const { minEdgeLength: s, minPanelDepth: u } = i, c = (me) => ({ allowed: !1, reason: me, recut: !1, cutLength: e, cutWidth: n, finalLength: e, finalWidth: n, sequence: [] });
  if (t === 2 && n < u)
    return c(`Both long sides requested but the short side is permanently under ${u}mm.`);
  if (a === 2 && e < u)
    return c(`Both short sides requested but the long side is permanently under ${u}mm.`);
  if (t === 2 && a === 2 && e < s && n < s)
    return c(`All four sides requested but both dimensions are under ${s}mm — no valid cutting order exists.`);
  const p = t > 0 ? s : a > 0 ? u : 0, f = a > 0 ? s : t > 0 ? u : 0, y = e < p, I = n < f;
  if (!y && !I)
    return { allowed: !0, recut: !1, cutLength: e, cutWidth: n, finalLength: e, finalWidth: n, sequence: [{ step: "band", edges: "all" }] };
  const P = y ? p : e, v = I ? f : n, j = [];
  y && j.push(`L${e}`), I && j.push(`W${n}`);
  const X = `**RC ${j.join(" ")}**`, he = t === 2 && I, ue = a === 2 && y, ae = [{ step: "cutBlank", length: P, width: v }];
  return a > 0 && !ue && ae.push({ step: "band", edges: "width" }), t > 0 && !he && ae.push({ step: "band", edges: "length" }), he ? (ae.push({ step: "recut", dimension: "width", to: n }), ae.push({ step: "band", edges: "length" }), y && ae.push({ step: "recut", dimension: "length", to: e })) : ue ? (ae.push({ step: "recut", dimension: "length", to: e }), ae.push({ step: "band", edges: "width" }), I && ae.push({ step: "recut", dimension: "width", to: n })) : (I && ae.push({ step: "recut", dimension: "width", to: n }), y && ae.push({ step: "recut", dimension: "length", to: e })), { allowed: !0, recut: !0, cutLength: P, cutWidth: v, finalLength: e, finalWidth: n, tag: X, sequence: ae };
}
const ni = (e) => e != null && e !== !1 && e !== "";
function bs(e, n = Ma) {
  const t = Number(e.l) || 0, a = Number(e.w) || 0, i = e.extras?.banding?.sides ?? {}, s = (ni(i.l1) ? 1 : 0) + (ni(i.l2) ? 1 : 0), u = (ni(i.w1) ? 1 : 0) + (ni(i.w2) ? 1 : 0);
  return Ld(t, a, s, u, n);
}
function Ed(e) {
  const n = Number(e?.minEdgeLength), t = Number(e?.minPanelDepth);
  return {
    minEdgeLength: Number.isFinite(n) && n > 0 ? n : Ma.minEdgeLength,
    minPanelDepth: Number.isFinite(t) && t > 0 ? t : Ma.minPanelDepth
  };
}
function Td(e, n) {
  const t = (n ?? "").trim();
  return t ? t.startsWith(e) ? t : `${e} ${t}` : e;
}
function Od(e, n = Ma) {
  const t = bs(e, n);
  if (!t.allowed || !t.recut) return t;
  e.l = t.cutLength, e.w = t.cutWidth, e.name = Td(t.tag, e.name);
  const a = {
    finalLength: t.finalLength,
    finalWidth: t.finalWidth,
    tag: t.tag,
    sequence: t.sequence
  };
  return e.customData = { ...e.customData ?? {}, edgeBandingRecut: a }, t;
}
const Oo = (e) => e == null || e === !1;
function Ad(e, n, t) {
  if (n > 0 && Oo(t[n - 1])) return [];
  const a = /* @__PURE__ */ new Set();
  for (const i of e) {
    if (i.length <= n) continue;
    let s = !0;
    for (let u = 0; u < n; u++) {
      const c = t[u];
      if (!Oo(c) && i[u] !== c) {
        s = !1;
        break;
      }
    }
    s && a.add(i[n]);
  }
  return [...a];
}
function Fd(e, n) {
  return e === !0 ? !0 : e === !1 ? !1 : n === !0;
}
class $n extends Error {
  constructor(n, t) {
    super(n), this.code = t, this.name = "FormulaError";
  }
}
class As {
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
      const c = this.evaluate(i[0], t);
      return c && this.evaluate(i[1], t);
    }
    if (a === "||") {
      const c = this.evaluate(i[0], t);
      return c || this.evaluate(i[1], t);
    }
    const [s, u] = i.map((c) => this.evaluate(c, t));
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
      if (t === 0) throw new $n("Division by zero", "DIVISION_BY_ZERO");
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
      const c = `${n}.${s}`;
      a.nodes.set(c, {
        panelKey: n,
        attribute: s,
        formula: u
      }), a.edges.set(c, this.isFormula(u) ? this.extractDependencies(this.stripFormulaPrefix(u.toString())) : /* @__PURE__ */ new Set());
    };
    return i("l", t.l), i("w", t.w), i("t", t.t), i("q", t.q), a;
  }
  resolveFormulas(n, t, a, i = {}) {
    const s = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Set(), c = (p) => {
      if (s.has(p))
        return s.get(p);
      const [f, y] = p.split(".");
      if (!n.nodes.has(p)) {
        const X = i[f];
        if (X)
          return y === "q" ? X.q : X[y];
        throw new Error(`Node not found: ${p}`);
      }
      if (u.has(p))
        throw new Error(`Circular dependency detected at ${p}`);
      const I = n.nodes.get(p);
      if (typeof I.formula == "number")
        return s.set(p, I.formula), I.formula;
      u.add(p);
      const P = n.edges.get(p) || /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Map();
      for (const X of P)
        if (X.startsWith("input.")) {
          const he = X.split(".")[1];
          v.set(X, a[he]);
        } else
          v.set(X, c(X));
      const j = this.evaluateFormulaWithDeps(I.formula, v, a);
      return s.set(p, j), u.delete(p), j;
    };
    for (const p of n.nodes.keys())
      c(p);
    return Object.fromEntries(s);
  }
  evaluateFormulaWithDeps(n, t, a, i) {
    if (!this.isFormula(n)) return n;
    let s = this.stripFormulaPrefix(n.toString());
    return s = s.replace(
      /inputs\.(\w+)/g,
      (u, c) => a[c]?.toString() || "0"
    ), s = s.replace(
      /panels\.(\w+)\.(\w+)/g,
      (u, c, p) => {
        if (c === i?.panelKey && i[p] !== void 0)
          return i[p].toString();
        if (t.has(`${c}.${p}`))
          return t.get(`${c}.${p}`).toString();
        throw new Error(`Undefined variable in formula: ${u}`);
      }
    ), this.evaluate(this.parse(s), a);
  }
  calculatePanels(n) {
    if (!this.spec?.panels) return {};
    const t = {};
    for (const [a, i] of Object.entries(this.spec.panels)) {
      const s = this.buildFormulaGraph(a, i), u = this.resolveFormulas(s, i, n, t), c = {
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
        orientationLock: i.orientationLock !== void 0 ? this.evaluateFormulaWithDeps(i.orientationLock, /* @__PURE__ */ new Map(), n, c) : void 0,
        ...c
      };
    }
    return t;
  }
  evaluateFormula(n, t, a = {}) {
    if (typeof n == "number") return n;
    if (typeof n == "string") {
      const i = n.replace(/inputs\.(\w+)/g, (u, c) => {
        if (!(c in t))
          throw new Error(`Input not found: ${c}`);
        return t[c].toString();
      }), s = i.match(/panels\.(\w+)\.(l|w|t|q)/);
      if (s) {
        const [, u, c] = s;
        if (!a[u])
          throw new Error(`Panel not found: ${u}`);
        return c === "q" ? a[u].q ?? 1 : a[u].dimensions[c];
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
    if (!this.spec?.inputs) throw new $n("No input specifications defined", "NO_INPUTS");
    for (const [t, a] of Object.entries(this.spec.inputs)) {
      const i = n[t];
      if (i === void 0)
        throw new $n(`Missing required input: ${t}`, "MISSING_INPUT");
      if (i < a.min || i > a.max)
        throw new $n(`Input ${t} value ${i} out of range [min: ${a.min}, max: ${a.max}]`, "INPUT_OUT_OF_RANGE");
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
      throw new $n("No input specifications defined", "NO_INPUTS");
    const t = Object.keys(this.spec.inputs);
    if (n.length !== t.length)
      throw new $n(`Expected ${t.length} fields, got ${n.length}`, "INVALID_FIELD_COUNT");
    let a = 0;
    for (const i of n) {
      const s = t[a], u = this.spec.inputs[s];
      if (i.value === null || i.value === void 0)
        throw new $n(`Missing value for field ${a}`, "MISSING_FIELD_VALUE");
      if (!!!u.optionsFrom && typeof u.min == "number" && typeof u.max == "number" && (i.value < u.min || i.value > u.max))
        throw new $n(`Field ${a} value ${i.value} out of range [min: ${u.min}, max: ${u.max}]`, "FIELD_OUT_OF_RANGE");
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
const Nd = new As({});
function Md(e) {
  const n = e.trim();
  return n.startsWith("=") ? n.substring(1).trim() : n;
}
function Fs(e, n) {
  const t = Md(e);
  if (!t) return null;
  try {
    const a = Nd.evaluateExpression(t, n), i = Number(a);
    return !Number.isFinite(i) || i < 0 ? null : i;
  } catch (a) {
    return console.error("[extras-formula] evaluation failed", { formula: e, err: a }), null;
  }
}
function $d(e, n) {
  return Fs(n, e);
}
function Dd(e, n) {
  return Fs(n, e);
}
function Ao(e, n) {
  return Fs(n, e);
}
const Ns = {
  stockL: 0,
  stockW: 0,
  stockCost: 0,
  stockDiscount: 0,
  stockDiscountedCost: 0
};
function _d(e, n, t, a) {
  return {
    length: n,
    edge: e,
    isLongEdge: e === "l1" || e === "l2" ? 1 : 0,
    partL: t.partL,
    partW: t.partW,
    partT: t.partT,
    partQuantity: t.partQuantity,
    ...Ns,
    ...a
  };
}
function Rd(e, n, t, a) {
  return {
    area: n,
    face: e,
    partL: t.partL,
    partW: t.partW,
    partT: t.partT,
    partQuantity: t.partQuantity,
    ...Ns,
    ...a
  };
}
function Fo(e, n, t, a, i, s) {
  return {
    area: n,
    length: t,
    target: e,
    isFace: a,
    partL: i.partL,
    partW: i.partW,
    partT: i.partT,
    partQuantity: i.partQuantity,
    ...Ns,
    ...s
  };
}
function qd(e) {
  let n = e;
  for (let t = 0; t < 16 && n; t++) {
    if (n instanceof ba) return n;
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
function Bd(e) {
  const n = e.shape ?? {};
  return Object.entries(n).filter(([, t]) => qd(t) instanceof ba).map(([t]) => t);
}
function No(e) {
  const t = (e.split(".").pop() ?? e).replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
}
Bd(Da);
function Ms(e) {
  const n = (s) => {
    const u = e.meta[s];
    return {
      name: s,
      label: u?.label ?? No(s),
      description: u?.description,
      group: u?.group ?? e.defaultGroup
    };
  }, t = e.handCuratedNames.map(n), a = e.relevantOrderKeys.map((s) => ({
    name: `order.${s}`,
    label: No(s),
    group: "Order"
  })), i = [...t, ...a];
  return { variables: i, variableNames: i.map((s) => s.name) };
}
const Vd = {
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
}, Ud = [
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
], jd = [
  "totalBandingLength",
  // the headline one for banding tiering
  "totalPartsProduced",
  "totalStockCost",
  "totalStockArea",
  "totalPartArea"
], { variableNames: Gd } = Ms({
  handCuratedNames: Ud,
  meta: Vd,
  relevantOrderKeys: jd,
  defaultGroup: "Edge"
}), Wd = Gd, Kd = {
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
}, zd = [
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
], Hd = [
  "totalFinishArea",
  "totalPartsProduced",
  "totalStockCost",
  "totalStockArea",
  "totalPartArea"
], { variableNames: Zd } = Ms({
  handCuratedNames: zd,
  meta: Kd,
  relevantOrderKeys: Hd,
  defaultGroup: "Face"
}), Jd = Zd, Xd = {
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
}, Qd = [
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
], Yd = [
  "totalPlaningArea",
  "totalPartsProduced",
  "totalStockCost",
  "totalStockArea",
  "totalPartArea"
], { variableNames: ef } = Ms({
  handCuratedNames: Qd,
  meta: Xd,
  relevantOrderKeys: Yd,
  defaultGroup: "Feature"
}), tf = ef, rn = ee(null);
let nf = 0;
function af(e) {
  const n = e || `action-menu-${++nf}-${Date.now()}`, t = M({
    get: () => rn.value === n,
    set: (y) => {
      y ? rn.value = n : rn.value === n && (rn.value = null);
    }
  }), a = () => {
    rn.value = n;
  }, i = () => {
    rn.value === n && (rn.value = null);
  }, s = () => {
    rn.value = null;
  }, u = () => {
    t.value = !t.value;
  }, c = M(() => rn.value !== null), p = M(() => rn.value), f = M(() => rn.value === n);
  return {
    // Instance-specific
    id: en(ee(n)),
    isOpen: t,
    open: a,
    close: i,
    toggle: u,
    isThisMenuOpen: f,
    // Global singleton state (shared across all instances)
    closeAll: s,
    isAnyMenuOpen: c,
    currentOpenMenuId: p
  };
}
const sf = { class: "action-menu" }, of = ["textContent"], lf = {
  key: 0,
  class: "menu-divider"
}, rf = {
  key: 1,
  class: "group-label"
}, uf = /* @__PURE__ */ St({
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
    const t = e, a = n, { isOpen: i, close: s, toggle: u } = af(t.menuId), c = ee(), p = ee(), f = M(() => t.disabled), y = M(() => t.label), I = M(() => t.showLabel), P = M(() => t.icon), { floatingStyles: v } = Ho(c, p, {
      placement: t.placement,
      whileElementsMounted: rl,
      middleware: [
        sl(t.offset),
        ol(),
        ll({ padding: 8 })
      ]
    }), j = (w) => {
      if (!w) return ["fas", "question"];
      if (typeof w == "function" && (w = w(t)), Array.isArray(w))
        return w;
      if (typeof w == "string") {
        const R = w.split(" ");
        if (R.length >= 2) {
          const de = R[0], Ae = R.slice(1).join("-").replace("fa-", "");
          return [de, Ae];
        }
        return ["fas", w.replace("fa-", "")];
      }
      return ["fas", "question"];
    }, X = M(() => j(P.value)), he = (w) => typeof w.active == "function" ? w.active(t) : typeof w.active == "boolean" ? w.active : !1, ue = (w) => {
      if (!w.href) return !1;
      try {
        const R = typeof w.href == "function" ? w.href(t) : w.href;
        return new URL(R, window.location.origin).origin !== window.location.origin;
      } catch {
        return !1;
      }
    }, ae = (w) => w.href ? "a" : "div", me = (w) => {
      const R = {};
      if (w.href) {
        const de = typeof w.href == "function" ? w.href(t) : w.href;
        if (R.href = de, ue(w)) {
          const Ae = typeof w.target == "function" ? w.target(t) : w.target;
          R.target = Ae || "_blank", R.rel = w.rel || "noopener noreferrer";
        } else if (w.target) {
          const Ae = typeof w.target == "function" ? w.target(t) : w.target;
          R.target = Ae;
        }
        w.rel && (R.rel = w.rel);
      }
      return w.attrs && Object.assign(R, w.attrs), R;
    }, ye = M(() => t.menuItems.map((w) => {
      const R = { ...w };
      return typeof w.href == "function" && (R.href = w.href(t)), typeof w.icon == "function" && (R.icon = w.icon(t)), typeof w.disabled == "function" && (R.disabled = w.disabled(t)), typeof w.label == "function" && (R.label = w.label(t)), typeof w.variant == "function" && (R.variant = w.variant(t)), typeof w.active == "function" && (R.active = w.active(t)), typeof w.target == "function" && (R.target = w.target(t)), typeof w.show == "function" && (R.show = w.show(t)), R;
    })), C = (w) => {
      w.stopPropagation(), w.preventDefault(), !f.value && u();
    }, E = (w, R) => {
      if (R.stopPropagation(), w.disabled && !w.href) {
        R.preventDefault();
        return;
      }
      if (typeof w.action == "function" && w.action(w) === !1 && w.href) {
        R.preventDefault();
        return;
      }
      a("action", {
        id: w.id,
        item: w
      }), w.href && t.closeOnLinkClick ? s() : w.href || s();
    }, K = (w) => {
      const R = [];
      if (w.variant) {
        const Ae = typeof w.variant == "function" ? w.variant(t) : w.variant;
        R.push(`variant-${Ae}`);
      }
      if ((typeof w.disabled == "function" ? w.disabled(t) : w.disabled) && !w.href && R.push("disabled"), he(w) && R.push("active"), w.href && R.push("menu-link"), ue(w) && R.push("external-link"), w.class) {
        const Ae = typeof w.class == "function" ? w.class(t) : w.class;
        R.push(Ae);
      }
      return R.join(" ");
    }, U = (w) => {
      const R = w.target;
      i.value && c.value && p.value && !c.value.contains(R) && !p.value.contains(R) && s();
    }, _ = (w) => {
      w.key === "Escape" && i.value && s();
    };
    return vn(() => {
      document.addEventListener("click", U), document.addEventListener("keydown", _);
    }), Si(() => {
      document.removeEventListener("click", U), document.removeEventListener("keydown", _);
    }), (w, R) => (D(), te("div", sf, [
      we("div", {
        ref_key: "trigger",
        ref: c,
        onClick: C,
        class: gt(["actions-btn", { active: N(i), disabled: f.value }])
      }, [
        P.value ? (D(), $e(N(hi), {
          key: 0,
          icon: X.value,
          class: "icon"
        }, null, 8, ["icon"])) : fe("", !0),
        I.value ? (D(), te("span", {
          key: 1,
          class: "label",
          textContent: Ce(y.value)
        }, null, 8, of)) : fe("", !0)
      ], 2),
      (D(), $e(xi, { to: "body" }, [
        N(i) && !f.value ? (D(), te("div", {
          key: 0,
          ref_key: "floating",
          ref: p,
          style: Xt(N(v)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: R[0] || (R[0] = Qn(() => {
          }, ["stop"]))
        }, [
          (D(!0), te(At, null, an(ye.value, (de, Ae) => (D(), te(At, { key: Ae }, [
            de.type === "divider" ? (D(), te("div", lf)) : de.type === "group" ? (D(), te("div", rf, Ce(de.label), 1)) : de.show !== !1 ? (D(), $e(au(ae(de)), tn({
              key: 2,
              ref_for: !0
            }, me(de), {
              onClick: (Be) => E(de, Be),
              id: de.id,
              class: ["menu-item", K(de)],
              disabled: de.disabled && !de.href
            }), {
              default: cn(() => [
                de.icon || he(de) ? (D(), $e(N(hi), {
                  key: 0,
                  icon: he(de) ? ["fass", "check"] : j(de.icon)
                }, null, 8, ["icon"])) : fe("", !0),
                we("span", null, Ce(de.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : fe("", !0)
          ], 64))), 128))
        ], 4)) : fe("", !0),
        N(i) && !f.value ? (D(), te("div", {
          key: 1,
          class: "backdrop",
          onClick: R[1] || (R[1] = //@ts-ignore
          (...de) => N(s) && N(s)(...de))
        })) : fe("", !0)
      ]))
    ]));
  }
}), cf = {
  key: 0,
  class: "extras-price-display"
}, df = { class: "extras-price-breakdown" }, ff = { class: "extras-price-rate" }, pf = {
  key: 0,
  class: "extras-price-label"
}, mf = {
  key: 1,
  class: "extras-price-op"
}, gf = {
  key: 0,
  class: "extras-price-total"
}, hf = /* @__PURE__ */ St({
  __name: "ExtrasPriceDisplay",
  props: {
    pricePerUnit: { default: void 0 },
    quantity: { default: void 0 },
    quantityUnit: { default: "m" },
    priceLabel: { default: "" },
    formatPrice: { type: Function, default: void 0 }
  },
  setup(e) {
    const n = e, t = M(() => n.quantity !== void 0 && n.quantity > 0), a = (i) => n.formatPrice ? n.formatPrice(i) : i.toFixed(2);
    return (i, s) => e.pricePerUnit !== void 0 ? (D(), te("span", cf, [
      we("span", df, [
        we("strong", ff, Ce(a(e.pricePerUnit)), 1),
        e.priceLabel ? (D(), te("span", pf, Ce(e.priceLabel), 1)) : fe("", !0),
        t.value ? (D(), te("span", mf, " × " + Ce(e.quantity.toFixed(2)) + Ce(e.quantityUnit ? " " + e.quantityUnit : "") + " = ", 1)) : fe("", !0)
      ]),
      t.value ? (D(), te("strong", gf, Ce(a(e.pricePerUnit * e.quantity)), 1)) : fe("", !0)
    ])) : fe("", !0);
  }
}), bf = /* @__PURE__ */ pn(hf, [["__scopeId", "data-v-2e4e7ac7"]]);
function $s(e) {
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
function Tb(e, n) {
  const t = $s(e);
  return t ? (0.299 * t.r + 0.587 * t.g + 0.114 * t.b) / 255 > 0.55 ? "#000000" : "#ffffff" : "#000000";
}
function vf(e, n = 30, t = 75) {
  const a = $s(e);
  if (!a) return e;
  const i = kf(a.r, a.g, a.b);
  if (i.l >= n && i.l <= t && i.s >= 25) return e;
  const u = Math.min(t, Math.max(n, i.l)), c = i.s < 25 ? 60 : i.s, [p, f, y] = wf(i.h, c, u);
  return "#" + [p, f, y].map((I) => I.toString(16).padStart(2, "0")).join("");
}
function Ob(e) {
  const n = yf(e);
  return n === null ? "white" : n > 0.55 ? "#cc1f8c" : "white";
}
function yf(e) {
  const n = $s(e);
  return n ? (0.299 * n.r + 0.587 * n.g + 0.114 * n.b) / 255 : null;
}
function kf(e, n, t) {
  const a = e / 255, i = n / 255, s = t / 255, u = Math.max(a, i, s), c = Math.min(a, i, s), p = (u + c) / 2;
  let f = 0, y = 0;
  if (u !== c) {
    const I = u - c;
    switch (y = p > 0.5 ? I / (2 - u - c) : I / (u + c), u) {
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
  return { h: f, s: y * 100, l: p * 100 };
}
function wf(e, n, t) {
  n /= 100, t /= 100;
  const a = (1 - Math.abs(2 * t - 1)) * n, i = a * (1 - Math.abs(e / 60 % 2 - 1)), s = t - a / 2;
  let u = 0, c = 0, p = 0;
  return e >= 0 && e < 60 ? (u = a, c = i, p = 0) : e >= 60 && e < 120 ? (u = i, c = a, p = 0) : e >= 120 && e < 180 ? (u = 0, c = a, p = i) : e >= 180 && e < 240 ? (u = 0, c = i, p = a) : e >= 240 && e < 300 ? (u = i, c = 0, p = a) : e >= 300 && e < 360 && (u = a, c = 0, p = i), [
    Math.round((u + s) * 255),
    Math.round((c + s) * 255),
    Math.round((p + s) * 255)
  ];
}
const Mo = (e, n, t) => {
  if (n === "unitDependent")
    if (t === "fraction") {
      if (/\/0$/.test(e))
        return {
          value: e,
          valid: !1,
          message: "division_by_zero"
        };
      const a = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(e), i = nl(e);
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
function Sf({
  props: e,
  emit: n,
  isMounted: t
}) {
  const a = ee({
    isTyping: !1,
    isMouseDown: !1,
    isComposing: !1,
    lastValidValue: String(e.value ?? "")
  }), i = (c, p = !1) => {
    if (c == null || c === "") {
      const y = e.required && !e.disableRequiredValidation;
      return e.type === "string" ? y ? { value: null, valid: !1, message: "field_required" } : { value: c === null ? null : "", valid: !0 } : Cu(c, "decimal", y);
    }
    const f = String(c);
    switch (e.type) {
      case "string":
        return { value: f, valid: !0 };
      case "unitDependent":
        if (p)
          return Mo(f, e.type, e.numberFormat);
        try {
          const y = pe({
            v: c,
            nf: e.numberFormat,
            dp: e.decimalPlaces,
            fr: e.fractionRoundTo
          });
          if (typeof y == "number") {
            let I = y, P = !0, v;
            return typeof e.min == "number" && I < e.min && (I = e.min, P = !1, v = "below_min"), typeof e.max == "number" && I > e.max && (I = e.max, P = !1, v = "above_max"), { value: I, valid: P, message: v };
          }
          return { value: y, valid: !0 };
        } catch (y) {
          return console.warn("Error converting value:", y), {
            value: null,
            valid: !1,
            message: "invalid_number"
          };
        }
      case "integer":
      case "float":
        if (p)
          return Mo(f, e.type);
        try {
          const I = pe({
            v: c,
            nf: "decimal"
          });
          if (I === null)
            return e.required && !e.disableRequiredValidation ? { value: null, valid: !1, message: "errors.validation.field.required" } : { value: null, valid: !0 };
          let P = I;
          if (e.type === "integer" && (P = Math.round(P)), e.allowZero === !1 && P === 0)
            return {
              value: P,
              valid: !1,
              message: "zero_not_allowed"
            };
          let v = !0, j;
          return typeof e.min == "number" && P < e.min && (P = e.min, v = !1, j = "below_min"), typeof e.max == "number" && P > e.max && (P = e.max, v = !1, j = "above_max"), { value: P, valid: v, message: j };
        } catch {
          return {
            value: null,
            valid: !1,
            message: "invalid_number"
          };
        }
      default:
        return { value: c, valid: !0 };
    }
  }, s = (c, p = !1) => p && e.type === "unitDependent" && e.numberFormat === "fraction" ? !1 : p && (e.type === "integer" || e.type === "float" || e.type === "unitDependent" && e.numberFormat === "decimal") ? typeof c.value == "number" && c.valid : !!(c.valid || c.message === "zero_not_allowed" || c.message === "below_min" || c.message === "above_max" || c.message === "errors.validation.field.required" && !e.disableRequiredValidation);
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
      handleInput: (c) => {
        if (!t.value) return;
        const p = c.target;
        if (a.value.isMouseDown) {
          const y = i(p.value, !1);
          s(y, !1) && (n("update:value", y.value), n("validation", y, e.id)), a.value.isMouseDown = !1;
          return;
        }
        a.value.isTyping = !0;
        const f = i(p.value, !0);
        n("validation", f, e.id), n("input", p.value), s(f, !0) && n("update:value", f.value);
      },
      handleBlur: (c) => {
        if (!t.value) return;
        a.value.isTyping = !1;
        const p = c.target, f = i(p.value, !1);
        n("validation", f, e.id), s(f) && (n("update:value", f.value), a.value.lastValidValue = String(f.value ?? "")), n("blur", c);
      },
      handleFocus: (c) => {
        t.value && (a.value.isTyping = !0, n("focus", c));
      },
      handleKeydown: (c) => {
        if (t.value && !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(c.key)) {
          if (!["Backspace", "Delete", "Tab", "Enter", "Escape"].includes(c.key))
            if (e.type === "unitDependent" && e.numberFormat === "fraction") {
              const p = c.target, f = p.value, y = p.selectionStart || 0, I = f.substring(0, y);
              if (c.key === "/" && f.includes("/")) {
                c.preventDefault();
                return;
              }
              if (c.key === " " && /\s$/.test(I)) {
                c.preventDefault();
                return;
              }
              /^[-0-9\s/]$/.test(c.key) || c.preventDefault();
            } else (e.type === "integer" || e.type === "float") && ((e.type === "integer" ? /^[-0-9]$/.test(c.key) : /^[-0-9.]$/.test(c.key)) || c.preventDefault());
          if (c.key === "Enter") {
            a.value.isTyping = !1;
            const p = c.target, f = i(p.value, !1);
            n("validation", f, e.id), s(f) && (n("update:value", f.value), a.value.lastValidValue = String(f.value ?? "")), n("enter", f);
          }
          c.key === "Escape" && (a.value.isTyping = !1, n("escape"));
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
      handleCompositionEnd: (c) => {
        a.value.isComposing = !1, a.value.isTyping = !1;
        const p = c.target, f = i(p.value, !1);
        n("validation", f, e.id), s(f) && (n("update:value", f.value), a.value.lastValidValue = String(f.value ?? ""));
      },
      handlePaste: (c) => {
        if (!t.value) return;
        const p = c.clipboardData?.getData("text")?.trim() || "";
        if (e.type === "unitDependent" && e.numberFormat === "fraction") {
          const f = p.replace(/[""'']/g, "").replace(/\s+/g, " ");
          if (!nl(f)) {
            c.preventDefault(), n("validation", {
              value: f,
              valid: !1,
              message: `Pasted text "${p}" is not a valid fraction format`
            }, e.id);
            return;
          }
          if (f !== p) {
            c.preventDefault();
            const y = c.target;
            y.value = f;
            const I = i(f, !0);
            n("validation", I, e.id), n("input", f);
          }
        }
        n("paste", c);
      }
    },
    processValue: i
  };
}
function xf({
  props: e,
  emit: n,
  isMounted: t
}) {
  const a = ee({
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
      return e.numberFormat && (e.numberFormat === "fraction" ? u = String(s) : u = Number(s)), e.options.some((p) => p.value === u) ? {
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
      const c = i(u.value);
      n("validation", c, e.id), c.valid && n("update:value", c.value);
    }
  };
}
function If({
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
const Pf = ["id", "name", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Cf = /* @__PURE__ */ St({
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
    const t = e, a = n, i = ee(!0), s = ee(null), u = M(() => t.value === t.trueValue), {
      handleCheckboxChange: c,
      handleFocus: p,
      handleBlur: f
    } = If({
      props: t,
      emit: a,
      isMounted: i
    });
    return (y, I) => (D(), te("input", {
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
      (...P) => N(c) && N(c)(...P)),
      onFocus: I[1] || (I[1] = //@ts-ignore
      (...P) => N(p) && N(p)(...P)),
      onBlur: I[2] || (I[2] = //@ts-ignore
      (...P) => N(f) && N(f)(...P))
    }, null, 40, Pf));
  }
}), Lf = ["for"], Aa = /* @__PURE__ */ St({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(e) {
    return (n, t) => (D(), te("label", {
      for: e.id,
      class: "input-label"
    }, [
      nn(n.$slots, "default", {}, () => [
        dn(Ce(e.label), 1)
      ])
    ], 8, Lf));
  }
}), fi = /* @__PURE__ */ new Set();
function Ef(e) {
  for (const n of fi)
    n !== e && n();
}
function Il(e, n, t = {}, a) {
  const i = ee(null);
  if (a) {
    const y = () => {
      a.value && (a.value = !1);
    };
    tt(a, (I) => {
      I ? (Ef(y), fi.add(y)) : fi.delete(y);
    }, { flush: "sync" }), Ii(() => {
      fi.delete(y);
    });
  }
  vn(() => {
    const y = e.value;
    i.value = y?.closest("dialog") ?? y?.closest(".smartcut-content") ?? document.body;
  });
  const s = [
    sl(t.offsetPx ?? 4),
    ol({ padding: t.padding ?? 8 }),
    ll({ padding: t.padding ?? 8 })
  ];
  t.sizeApply && s.push(gc({
    padding: t.padding ?? 8,
    apply: t.sizeApply
  })), t.extraMiddleware && s.push(...t.extraMiddleware);
  const { floatingStyles: u, isPositioned: c } = Ho(e, n, {
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
    whileElementsMounted: (y, I, P) => rl(y, I, P, { animationFrame: !0 }),
    // `transform: true` (the default) places the dropdown via
    // `transform: translate()`. We pair it with a short CSS transition
    // on transform in `useFloatingDropdownStyle` below so per-frame
    // position updates ease across small jumps instead of stuttering.
    transform: !0,
    middleware: s
  }), p = M(() => ({
    ...u.value,
    visibility: c.value ? "visible" : "hidden",
    opacity: c.value ? 1 : 0,
    transition: "opacity 80ms ease-out"
  }));
  function f() {
    if (!e.value || !n.value) return;
    const y = getComputedStyle(e.value), I = n.value;
    I.style.font = y.font, I.style.color = y.color;
  }
  return {
    floatingStyles: p,
    teleportTarget: i,
    syncFloatingFont: f
  };
}
const Tf = ["id", "disabled", "aria-label"], Of = { class: "multiselect__text" }, Af = { class: "multiselect__list" }, Ff = ["checked", "disabled", "onChange"], Nf = { class: "multiselect__option-label" }, Mf = {
  key: 0,
  class: "multiselect__no-results"
}, $f = /* @__PURE__ */ St({
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
    const t = e, a = n, i = ee(!1), s = ee(null), u = ee(), c = ee(), p = ee(null), f = ee(""), { floatingStyles: y, teleportTarget: I, syncFloatingFont: P } = Il(
      u,
      c,
      {
        sizeApply({ rects: ye, availableWidth: C, availableHeight: E, elements: K }) {
          const U = ye.reference.width, _ = Math.min(C, Math.max(U, 400));
          Object.assign(K.floating.style, {
            maxHeight: `${Math.max(200, E)}px`,
            minWidth: `${U}px`,
            maxWidth: `${_}px`
          });
        }
      },
      i
    ), v = M(() => {
      const ye = t.value;
      return ye ? Array.isArray(ye) ? new Set(ye.map(String)) : new Set(String(ye).split(",").filter(Boolean)) : /* @__PURE__ */ new Set();
    }), j = M(() => t.options.map((ye) => ({
      value: ye.value,
      label: ye.label ?? String(ye.value),
      hidden: ye.hidden ?? !1,
      disabled: ye.disabled ?? !1
    }))), X = M(() => {
      if (!f.value) return j.value;
      const ye = f.value.toLowerCase();
      return j.value.filter(
        (C) => (C.label ?? String(C.value)).toLowerCase().includes(ye)
      );
    }), he = M(() => {
      const ye = v.value.size;
      if (ye === 0) return t.placeholder || "All";
      if (ye === 1) {
        const C = [...v.value][0];
        return j.value.find((K) => String(K.value) === C)?.label || C;
      }
      return `${ye} selected`;
    });
    function ue() {
      t.disabled || (i.value = !i.value, i.value && (f.value = "", jt(() => {
        P(), t.searchable && p.value?.focus();
      })));
    }
    function ae(ye) {
      const C = String(ye), E = new Set(v.value);
      E.has(C) ? E.delete(C) : E.add(C), a("update:value", [...E]);
    }
    function me(ye) {
      const C = ye.target;
      s.value?.contains(C) || c.value?.contains(C) || (i.value = !1);
    }
    return vn(() => document.addEventListener("click", me)), Ii(() => document.removeEventListener("click", me)), (ye, C) => (D(), te("div", {
      class: "multiselect",
      ref_key: "rootRef",
      ref: s
    }, [
      we("button", {
        ref_key: "triggerRef",
        ref: u,
        type: "button",
        class: "multiselect__trigger",
        id: t.id,
        disabled: t.disabled,
        "aria-label": t.ariaLabel,
        onClick: ue
      }, [
        we("span", Of, Ce(he.value), 1)
      ], 8, Tf),
      (D(), $e(xi, {
        to: N(I),
        disabled: !N(I)
      }, [
        i.value ? (D(), te("div", {
          key: 0,
          ref_key: "floatingRef",
          ref: c,
          class: "multiselect__dropdown",
          style: Xt(N(y))
        }, [
          t.searchable ? ws((D(), te("input", {
            key: 0,
            ref_key: "searchRef",
            ref: p,
            "onUpdate:modelValue": C[0] || (C[0] = (E) => f.value = E),
            type: "text",
            class: "multiselect__search",
            placeholder: "Search...",
            onClick: C[1] || (C[1] = Qn(() => {
            }, ["stop"]))
          }, null, 512)), [
            [Zo, f.value]
          ]) : fe("", !0),
          we("div", Af, [
            (D(!0), te(At, null, an(X.value, (E) => (D(), te("label", {
              key: E.value,
              class: gt(["multiselect__option", { "multiselect__option--zero": E.hidden }])
            }, [
              we("input", {
                type: "checkbox",
                checked: v.value.has(String(E.value)),
                disabled: E.disabled,
                onChange: (K) => ae(E.value)
              }, null, 40, Ff),
              we("span", Nf, Ce(E.label), 1)
            ], 2))), 128)),
            t.searchable && X.value.length === 0 ? (D(), te("div", Mf, " No matches ")) : fe("", !0)
          ])
        ], 4)) : fe("", !0)
      ], 8, ["to", "disabled"]))
    ], 512));
  }
}), Df = /* @__PURE__ */ pn($f, [["__scopeId", "data-v-6d06505b"]]), _f = ["id", "name", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Rf = ["disabled", "selected"], qf = {
  key: 0,
  value: " "
}, Bf = ["hidden", "value", "disabled"], Vf = /* @__PURE__ */ St({
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
    const t = e, a = n, i = ee(!0), s = ee(null), u = M(() => t.options.map((p) => ({
      value: p.value,
      label: p.label?.toUpperCase() ?? p.value?.toString()?.toUpperCase(),
      hidden: p.hidden ?? !1,
      disabled: p.disabled ?? !1
    }))), {
      handleSelectChange: c
    } = xf({
      props: t,
      emit: a,
      isMounted: i
    });
    return (p, f) => (D(), te("select", tn(p.$attrs, {
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
      (...y) => N(c) && N(c)(...y))
    }), [
      we("option", {
        value: "",
        disabled: t.selectFirstOptionDisabled,
        selected: !t.value
      }, Ce(t.text?.select?.toUpperCase() ?? "SELECT"), 9, Rf),
      t.multiEdit ? (D(), te("option", qf, Ce(t.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : fe("", !0),
      (D(!0), te(At, null, an(u.value, (y) => (D(), te("option", {
        key: y.value,
        hidden: y.hidden,
        value: y.value,
        disabled: y.disabled
      }, Ce(y.label), 9, Bf))), 128))
    ], 16, _f));
  }
}), Uf = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "step", "autocomplete", "aria-label", "aria-invalid", "aria-describedby"], pi = /* @__PURE__ */ St({
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
    const t = e, a = n, i = ee(!0), s = ee(null), {
      handleInput: u,
      handleMouseDown: c,
      handleMouseUp: p,
      handleFocus: f,
      handleBlur: y,
      handleKeydown: I,
      handleCompositionStart: P,
      handleCompositionEnd: v,
      handlePaste: j
    } = Sf({
      props: t,
      emit: a,
      isMounted: i
    }), X = (he) => {
      const ue = he.getBoundingClientRect(), ae = window.getComputedStyle(he);
      return ue.width > 0 && ue.height > 0 && ae.display !== "none" && ae.visibility !== "hidden";
    };
    return vn(() => {
      pt(t.default) && (t.value === void 0 || t.value === null) && a("update:value", t.default), t.focus && s.value && X(s.value) && jt(() => s.value.focus());
    }), Si(() => {
      i.value = !1;
    }), (he, ue) => (D(), te("input", tn(he.$attrs, {
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
      onInput: ue[0] || (ue[0] = //@ts-ignore
      (...ae) => N(u) && N(u)(...ae)),
      onFocus: ue[1] || (ue[1] = //@ts-ignore
      (...ae) => N(f) && N(f)(...ae)),
      onBlur: ue[2] || (ue[2] = //@ts-ignore
      (...ae) => N(y) && N(y)(...ae)),
      onKeydown: ue[3] || (ue[3] = //@ts-ignore
      (...ae) => N(I) && N(I)(...ae)),
      onCompositionstart: ue[4] || (ue[4] = //@ts-ignore
      (...ae) => N(P) && N(P)(...ae)),
      onCompositionend: ue[5] || (ue[5] = //@ts-ignore
      (...ae) => N(v) && N(v)(...ae)),
      onPaste: ue[6] || (ue[6] = //@ts-ignore
      (...ae) => N(j) && N(j)(...ae)),
      onMousedown: ue[7] || (ue[7] = //@ts-ignore
      (...ae) => N(c) && N(c)(...ae)),
      onMouseup: ue[8] || (ue[8] = //@ts-ignore
      (...ae) => N(p) && N(p)(...ae))
    }), null, 16, Uf));
  }
}), jf = ["data-field-id"], Gf = {
  key: 0,
  class: "input-label-group"
}, Wf = {
  key: 1,
  class: "password-input-wrapper"
}, Kf = ["aria-label"], zf = {
  key: 2,
  class: "clearable-input-wrapper"
}, Hf = ["aria-label"], Zf = ["disabled", "selected"], Jf = {
  key: 0,
  value: " "
}, Xf = ["hidden", "value", "disabled"], Qf = ["id", "name", "value", "disabled"], Yf = {
  key: 7,
  class: "slider-wrapper"
}, ep = ["id", "name", "value", "min", "max", "step", "disabled", "readonly"], tp = ["for"], np = {
  key: 8,
  class: "clearable-input-wrapper clearable-input-wrapper--textarea"
}, ap = ["id", "name", "value", "placeholder", "disabled", "readonly", "required", "rows", "autocomplete"], ip = ["aria-label"], sp = ["id", "name", "value", "placeholder", "disabled", "readonly", "required", "rows", "autocomplete"], op = {
  key: 2,
  class: "help-text"
}, lp = /* @__PURE__ */ St({
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
    labelPosition: { default: void 0 },
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
    clearable: { type: Boolean, default: !1 },
    clampColor: { type: Boolean, default: !0 },
    spacing: { default: "default" }
  },
  emits: ["update:value", "validation", "blur"],
  setup(e, { emit: n }) {
    const t = n, a = e, i = ee(null), s = ee(null), u = ee(!0), c = ee(a.numberFormat), p = ee(!1), f = M(() => a.custom ? "custom-" + a.id : a.id), y = M(() => `${f.value}-error`), I = M(() => a.label || a.placeholder), P = M(() => Y(a.type, a.numberFormat, p.value)), v = M(() => Le(a.type, a.numberFormat)), j = M(() => typeof a.value == "string" && a.value.length > 0), X = (le) => a.clampColor ? vf(le) : le, he = M(() => j.value ? X(a.value) : "#ffffff"), ue = (le) => {
      const H = le.target.value;
      t("update:value", X(H));
    }, ae = () => {
      t("update:value", null);
    }, me = M(() => {
      const le = a.value;
      if (typeof le == "number" && Number.isFinite(le)) return le;
      const H = parseFloat(le);
      return Number.isFinite(H) ? H : typeof a.min == "number" ? a.min : 0;
    }), ye = (le) => {
      const H = le.target.value, ce = parseFloat(H);
      t("update:value", Number.isFinite(ce) ? ce : null);
    }, C = M(() => ["string", "integer", "float", "unitDependent", "password", "email", "tel"].includes(a.type)), E = M(() => a.value !== null && a.value !== void 0 && a.value !== "");
    function K() {
      const le = C.value && ["integer", "float", "unitDependent"].includes(a.type) ? null : "";
      t("update:value", le);
    }
    const U = M(() => {
      let le = a.value;
      if (a.multiEdit && (le === 0 || le === 1)) return null;
      if (a.type !== "unitDependent" || !le) return le;
      try {
        return pe({ v: le, nf: a.numberFormat });
      } catch {
        return a.numberFormat === "decimal" ? 0 : "0";
      }
    }), _ = M(() => a.options.map((le) => ({
      value: le.value,
      label: le.label || le.value?.toString(),
      hidden: le.hidden || !1,
      disabled: le.disabled || !1
    }))), w = M(() => _.value.map((le) => {
      const H = le.label ? Pe(le.label) : le.value?.toString();
      return {
        ...le,
        // Translate the label key first, then uppercase the translated result
        label: H?.toUpperCase() || le.value?.toString().toUpperCase()
      };
    })), R = M(() => ({
      input: !0,
      issue: a.issue || !u.value,
      warning: a.warning,
      required: a.required,
      disabled: a.disabled,
      // See the `spacing` prop. `field-spaced` predates it and is still set
      // directly by some callers, so the class is the contract, not the prop.
      "field-spaced": a.spacing === "spaced",
      "field-flush": a.spacing === "none"
    })), de = M(() => ({
      id: f.value,
      name: a.name,
      value: a.value,
      disabled: a.disabled,
      readonly: a.readonly,
      required: a.required,
      "aria-label": I.value,
      "aria-invalid": !!a.issue,
      "aria-describedby": a.issue ? y.value : void 0
    })), Ae = M(() => ({
      ...de.value,
      type: a.type,
      inputMode: v.value,
      inputType: P.value,
      placeholder: a.placeholder,
      allowZero: a.allowZero,
      min: a.min,
      max: a.max,
      focus: a.focus,
      numberFormat: a.numberFormat,
      default: a.default,
      disableRequiredValidation: a.disableRequiredValidation,
      autocomplete: a.autocomplete
    })), Be = M(() => ({
      ...de.value,
      trueValue: a.trueValue,
      falseValue: a.falseValue
    })), vt = M(() => ({
      ...de.value,
      options: w.value,
      selectFirstOptionDisabled: a.selectFirstOptionDisabled,
      multiEdit: a.multiEdit,
      numberFormat: a.numberFormat,
      text: a.text,
      output: a.output
    })), dt = M(() => (a.text?.select || "SELECT").toUpperCase()), He = M(() => (a.text?.delete || "DELETE").toUpperCase()), Je = (le) => {
      s.value = le;
    }, rt = M(() => a.labelPosition ?? (a.type === "checkbox" ? "last" : "first")), G = (le) => a.label && a.enableLabel && rt.value === le, Y = (le, H, ce) => {
      switch (le) {
        case "integer":
        case "float":
          return "number";
        case "unitDependent":
          return H === "fraction" ? "text" : "number";
        case "password":
          return ce ? "text" : "password";
        case "email":
          return "email";
        case "tel":
          return "tel";
        default:
          return "text";
      }
    }, Le = (le, H) => {
      if (le === "unitDependent")
        return H === "fraction" ? "text" : "decimal";
      switch (le) {
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
    }, qe = (le) => {
      t("update:value", le);
    }, _e = (le, H) => {
      le.valid === void 0 || le.valid === !0 ? (u.value = !0, t("validation", i.value, le)) : le.valid === !1 && le.message && (u.value = !1, console.warn(`Field validation error for field ${H} - ${le.message}`), t("validation", i.value, le));
    }, Ie = () => {
      t("blur");
    };
    return tt(() => a.numberFormat, (le, H) => {
      if (a.shouldConvertNumberFormat !== !1) {
        if (a.type === "unitDependent" && le !== H && a.value !== null && a.value !== void 0 && a.value !== "")
          try {
            const ce = pe({ v: a.value, nf: le });
            t("update:value", ce);
          } catch {
            t("update:value", le === "decimal" ? 0 : "0");
          }
        c.value = le;
      }
    }), (le, H) => (D(), te("div", {
      ref_key: "fieldRef",
      ref: i,
      class: gt(["input-wrapper", [R.value, le.$attrs.class]]),
      "data-field-id": f.value
    }, [
      e.type === "checkbox" ? (D(), te("div", Gf, [
        G("first") ? (D(), $e(Aa, {
          key: 0,
          id: f.value,
          label: e.label,
          required: e.required
        }, {
          default: cn(() => [
            nn(le.$slots, "label", {}, () => [
              dn(Ce(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : fe("", !0),
        e.type === "checkbox" ? (D(), $e(Cf, tn({
          key: 1,
          ref: Je,
          type: "checkbox"
        }, Be.value, {
          value: e.value,
          "onUpdate:value": H[0] || (H[0] = (ce) => t("update:value", ce))
        }), null, 16, ["value"])) : fe("", !0),
        G("last") ? (D(), $e(Aa, {
          key: 2,
          id: f.value,
          label: e.label,
          required: e.required
        }, {
          default: cn(() => [
            nn(le.$slots, "label", {}, () => [
              dn(Ce(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : fe("", !0)
      ])) : (D(), te(At, { key: 1 }, [
        G("first") ? (D(), $e(Aa, {
          key: 0,
          id: f.value,
          label: e.label,
          required: e.required
        }, {
          default: cn(() => [
            nn(le.$slots, "label", {}, () => [
              dn(Ce(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : fe("", !0),
        e.type === "password" ? (D(), te("div", Wf, [
          ct(pi, tn({ ref: Je }, Ae.value, {
            name: a.name,
            "input-type": P.value,
            "input-mode": v.value,
            value: U.value,
            "disable-required-validation": e.disableRequiredValidation,
            onValidation: _e,
            "onUpdate:value": qe,
            onBlur: Ie
          }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"]),
          we("button", {
            type: "button",
            class: "password-toggle c-btn--unstyled",
            "aria-label": p.value ? "Hide password" : "Show password",
            onClick: H[1] || (H[1] = (ce) => p.value = !p.value)
          }, Ce(p.value ? "🙈" : "👁"), 9, Kf)
        ])) : C.value && e.clearable ? (D(), te("div", zf, [
          ct(pi, tn({ ref: Je }, Ae.value, {
            name: a.name,
            "input-type": P.value,
            "input-mode": v.value,
            value: U.value,
            "disable-required-validation": e.disableRequiredValidation,
            onValidation: _e,
            "onUpdate:value": qe,
            onBlur: Ie
          }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"]),
          E.value && !e.disabled && !e.readonly ? (D(), te("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--xs c-btn--unstyled field-clear-btn clearable-input__clear",
            "aria-label": N(Pe)("actions.clear"),
            title: "Clear",
            onClick: K
          }, "×", 8, Hf)) : fe("", !0)
        ])) : C.value ? (D(), $e(pi, tn({
          key: 3,
          ref: Je
        }, Ae.value, {
          name: a.name,
          "input-type": P.value,
          "input-mode": v.value,
          value: U.value,
          "disable-required-validation": e.disableRequiredValidation,
          onValidation: _e,
          "onUpdate:value": qe,
          onBlur: Ie
        }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"])) : e.type === "select" ? (D(), $e(Vf, tn({
          key: 4,
          ref: Je
        }, vt.value, {
          name: a.name,
          "onUpdate:value": H[2] || (H[2] = (ce) => t("update:value", ce))
        }), {
          default: cn(() => [
            we("option", {
              value: "",
              disabled: e.selectFirstOptionDisabled,
              selected: !e.value
            }, Ce(dt.value), 9, Zf),
            e.multiEdit ? (D(), te("option", Jf, Ce(He.value), 1)) : fe("", !0),
            (D(!0), te(At, null, an(w.value, (ce) => (D(), te("option", {
              key: ce.value,
              hidden: ce.hidden,
              value: ce.value,
              disabled: ce.disabled
            }, Ce(ce.label), 9, Xf))), 128))
          ]),
          _: 1
        }, 16, ["name"])) : e.type === "multiselect" ? (D(), $e(Df, {
          key: 5,
          ref: Je,
          id: f.value,
          name: a.name,
          value: e.value,
          options: _.value,
          disabled: e.disabled,
          readonly: e.readonly,
          "aria-label": I.value,
          placeholder: e.placeholder,
          searchable: a.searchable,
          "onUpdate:value": H[3] || (H[3] = (ce) => t("update:value", ce))
        }, null, 8, ["id", "name", "value", "options", "disabled", "readonly", "aria-label", "placeholder", "searchable"])) : e.type === "color" ? (D(), te("input", {
          key: 6,
          id: f.value,
          name: a.name || f.value,
          ref: Je,
          type: "color",
          value: he.value,
          class: gt({ "color-input--empty": !j.value }),
          disabled: e.disabled,
          onChange: ue,
          onContextmenu: Qn(ae, ["prevent"])
        }, null, 42, Qf)) : e.type === "slider" ? (D(), te("div", Yf, [
          we("input", {
            id: f.value,
            name: a.name || f.value,
            ref: Je,
            type: "range",
            class: "slider-input",
            value: me.value,
            min: a.min ?? 0,
            max: a.max ?? 100,
            step: a.step ?? 1,
            disabled: e.disabled,
            readonly: e.readonly,
            onInput: ye
          }, null, 40, ep),
          we("output", {
            class: "slider-output",
            for: f.value
          }, Ce(me.value), 9, tp)
        ])) : e.type === "textarea" && e.clearable ? (D(), te("div", np, [
          we("textarea", {
            id: f.value,
            name: a.name || f.value,
            ref: Je,
            value: e.value,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            rows: e.rows,
            autocomplete: e.autocomplete,
            onInput: H[4] || (H[4] = (ce) => t("update:value", ce.target.value)),
            onBlur: Ie
          }, null, 40, ap),
          E.value && !e.disabled && !e.readonly ? (D(), te("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--xs c-btn--unstyled field-clear-btn clearable-input__clear",
            "aria-label": N(Pe)("actions.clear"),
            title: "Clear",
            onClick: K
          }, "×", 8, ip)) : fe("", !0)
        ])) : e.type === "textarea" ? (D(), te("textarea", {
          key: 9,
          id: f.value,
          name: a.name || f.value,
          ref: Je,
          value: e.value,
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: e.readonly,
          required: e.required,
          rows: e.rows,
          autocomplete: e.autocomplete,
          onInput: H[5] || (H[5] = (ce) => t("update:value", ce.target.value)),
          onBlur: Ie
        }, null, 40, sp)) : fe("", !0),
        G("last") ? (D(), $e(Aa, {
          key: 10,
          id: f.value,
          label: e.label,
          required: e.required
        }, {
          default: cn(() => [
            nn(le.$slots, "label", {}, () => [
              dn(Ce(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : fe("", !0)
      ], 64)),
      e.info ? (D(), te("small", op, Ce(e.info), 1)) : fe("", !0),
      nn(le.$slots, "default", {}, void 0, !0)
    ], 10, jf));
  }
}), Fa = /* @__PURE__ */ pn(lp, [["__scopeId", "data-v-6b69f309"]]), rp = {
  key: 0,
  class: "loading-spinner__label"
}, up = /* @__PURE__ */ St({
  __name: "LoadingSpinner",
  props: {
    size: { default: "medium" },
    label: { default: "" },
    block: { type: Boolean, default: !1 },
    fullPage: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (n, t) => (D(), te("div", {
      class: gt(["loading-spinner", [
        `loading-spinner--${e.size}`,
        {
          "loading-spinner--block": e.block || e.fullPage,
          "loading-spinner--full-page": e.fullPage
        }
      ]]),
      role: "status",
      "aria-live": "polite"
    }, [
      t[0] || (t[0] = we("span", {
        class: "loading-spinner__circle",
        "aria-hidden": "true"
      }, null, -1)),
      e.label ? (D(), te("span", rp, Ce(e.label), 1)) : fe("", !0)
    ], 2));
  }
}), Pl = /* @__PURE__ */ pn(up, [["__scopeId", "data-v-ef6d8370"]]), cp = {
  key: 0,
  class: "action-bar"
}, dp = { class: "add-custom" }, fp = ["disabled"], pp = {
  key: 0,
  class: "extras-row"
}, mp = { class: "c-field-action extras-field-group" }, gp = ["disabled", "title", "onClick"], hp = {
  key: 0,
  class: "price"
}, bp = {
  key: 0,
  class: "formula-price"
}, vp = {
  key: 0,
  class: "price-label"
}, yp = /* @__PURE__ */ St({
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
    const t = zt({
      loader: () => import("./CatalogueBandingExtra-C76JhYCP.js"),
      loadingComponent: () => iu(Pl, { size: "small", label: "Loading banding…" }),
      delay: 200
    }), a = zt(() => import("./ObjectViewer-IjOsrd1T.js")), i = !1, s = e, u = M(() => (s.extraType === "banding" || s.extraType === "finish" || s.extraType === "planing") && !!s.catalogueKey), c = n, {
      mode: p,
      shouldShowAll: f,
      supportsFaces: y,
      supportsSides: I,
      canDelete: P,
      getLocationLabel: v,
      getInputType: j,
      getInputConfigForLocation: X,
      getSelectOptions: he,
      getPriceDisplay: ue,
      getCalculatedPrice: ae,
      shouldShowDeleteButton: me,
      getLocationGroup: ye,
      isLocationVisible: C,
      handleInputChange: E,
      handleDelete: K
    } = Rc({
      shape: Yt(s, "shape"),
      extraType: s.extraType,
      allOptions: Yt(s, "allOptions"),
      labels: s.labels,
      userFriendlyFieldMap: s.userFriendlyFieldMap,
      allowCustomNames: s.allowCustomNames,
      customNames: Yt(s, "customNames"),
      enablePricing: s.enablePricing,
      pricing: s.pricing,
      displayNames: Yt(s, "displayNames"),
      orientationModel: s.orientationModel,
      stockGrain: s.stockGrain,
      getAvailablePricingOptions: s.getAvailablePricingOptions,
      getPrice: s.getPrice,
      formatPrice: s.formatPrice,
      findExtrasPrice: s.findExtrasPrice,
      locations: Yt(s, "locations"),
      locationGroups: Yt(s, "locationGroups")
    }), {
      newCustomName: U,
      canAddCustomName: _,
      isActionMenuDisabled: w,
      customNameActions: R,
      handleAddCustomName: de,
      handleCustomNameAction: Ae
    } = Dc({
      extraType: s.extraType,
      customNames: Yt(s, "customNames"),
      usedNames: Yt(s, "usedNames"),
      allowCustomNames: s.allowCustomNames,
      getSelectOptions: he,
      onCustomNameAdded: (re) => c("custom-name-added", s.extraType, re),
      onCustomNameDeleted: (re) => c("custom-name-deleted", s.extraType, re)
    }), {
      renderLocations: Be,
      getInputId: vt,
      getDeleteConfig: dt
    } = _c({
      extraType: s.extraType,
      allOptions: s.allOptions,
      labels: s.labels,
      shapeIndex: s.shapeIndex || 0,
      enablePricing: s.enablePricing,
      shouldShowAll: f,
      getInputType: j,
      getInputConfig: (re, oe) => X(re, oe),
      getAllInputConfig: (re) => X("all", re),
      getInputConfigForLocation: X,
      canDelete: P,
      getLocationLabel: v,
      shouldShowDeleteButton: me,
      locations: Yt(s, "locations"),
      locationGroups: Yt(s, "locationGroups"),
      shape: Yt(s, "shape"),
      orientationModel: s.orientationModel
    }), He = ee(!1), Je = ee(null), rt = ee("auto"), G = M(() => `${Be.value.filter((oe) => C(oe)).map((oe) => v(oe)).join("|")}::${JSON.stringify(s.allOptions)}`), Y = (re) => [...re.querySelectorAll(":scope > .c-field-action > .input-wrapper")], Le = async () => {
      const re = Je.value;
      if (!re) return;
      const oe = [...re.querySelectorAll(".extras-row")];
      rt.value = "auto", oe.forEach((nt) => Y(nt).forEach((ft) => ft.style.removeProperty("--col-w"))), await jt();
      let ze = 0;
      re.querySelectorAll(".extras-location-label").forEach((nt) => {
        ze = Math.max(ze, nt.offsetWidth);
      }), ze > 0 && (rt.value = `${Math.ceil(ze)}px`);
      const Te = [], We = oe.map(Y);
      We.forEach((nt) => nt.forEach((ft, bt) => {
        Te[bt] = Math.max(Te[bt] ?? 0, ft.offsetWidth);
      })), We.forEach((nt) => nt.forEach((ft, bt) => {
        ft.style.setProperty("--col-w", `${Math.ceil(Te[bt])}px`);
      }));
    };
    tt(G, () => {
      Le();
    }, { flush: "post" });
    const qe = M(() => (re) => {
      const oe = ye(re);
      return oe === "all" || oe === "faces" || oe === "sides";
    }), _e = M(() => (re) => ga(s.extraType).includes(re) ? Na(re) === "face" : !1), Ie = M(() => (re) => ga(s.extraType).includes(re) ? Na(re) === "side" : !1), le = (re) => {
      const oe = ue(re);
      return !!oe && oe !== "N/A";
    };
    function H(re) {
      const ze = s.shape?.extras?.[s.extraType];
      if (!ze) return null;
      if (re.startsWith("side.")) {
        const Te = re.replace(/^side\./, ""), We = ze.sides?.[Te];
        return typeof We == "string" && We ? We : null;
      }
      if (re.startsWith("face.")) {
        const Te = re.replace(/^face\./, ""), We = ze.faces?.[Te];
        return typeof We == "string" && We ? We : null;
      }
      return null;
    }
    const ce = (re) => {
      const oe = H(re);
      if (!oe) return null;
      const ze = s.formulas?.[oe];
      if (!ze) return null;
      const Te = Number(s.shape?.l) || 0, We = Number(s.shape?.w) || 0, nt = Number(s.shape?.t) || 0, ft = Number(s.shape?.q) || 1, bt = { partL: Te, partW: We, partT: nt, partQuantity: ft }, Nt = {}, Rt = s.extraType === "banding" ? Wd : s.extraType === "finish" ? Jd : s.extraType === "planing" ? tf : [];
      for (const yt of Rt)
        yt.startsWith("order.") && (Nt[yt] = 0);
      if (s.extraType === "banding" && re.startsWith("side.")) {
        const yt = re.replace(/^side\./, "");
        return $d(_d(yt, yt === "l1" || yt === "l2" ? Te : We, bt, Nt), ze);
      }
      if (s.extraType === "finish" && re.startsWith("face.")) {
        const yt = re.replace(/^face\./, "");
        return Dd(Rd(yt, Te * We, bt, Nt), ze);
      }
      if (s.extraType === "planing") {
        if (re.startsWith("face.")) {
          const yt = re.replace(/^face\./, "");
          return Ao(Fo(`face.${yt}`, Te * We, 0, 1, bt, Nt), ze);
        }
        if (re.startsWith("side.")) {
          const yt = re.replace(/^side\./, ""), qt = yt === "l1" || yt === "l2" ? Te : We;
          return Ao(Fo(`side.${yt}`, 0, qt, 0, bt, Nt), ze);
        }
      }
      return null;
    }, Ve = (re) => {
      const oe = ce(re);
      return typeof oe == "number" && Number.isFinite(oe);
    }, Ke = (re) => s.formatPrice ? s.formatPrice(re) : re.toFixed(2), Ge = (re) => {
      const oe = ae(re);
      return typeof oe == "number" && Number.isFinite(oe) ? oe : void 0;
    }, $t = (re) => {
      if (ga(s.extraType).includes(re))
        return ho(s.shape, re).quantity;
    }, Ft = (re) => ga(s.extraType).includes(re) ? ho(s.shape, re).unit : "m", ht = M(() => (re) => s.shape.issues?.some((oe) => oe.category?.includes("extras") && oe.field?.some((ze) => ze[0] === "extras" && ze[1] === s.extraType && ze[2] === re)) ?? !1);
    return vn(() => {
      const oe = s.shape.extras?.[s.extraType];
      if (!oe || typeof oe != "object") {
        He.value = !0, console.error(`Missing or invalid ${s.extraType} in shape`);
        return;
      }
      if (y.value && !("faces" in oe)) {
        He.value = !0, console.error(`Missing faces property in ${s.extraType}`);
        return;
      }
      if (I.value && !("sides" in oe)) {
        He.value = !0, console.error(`Missing sides property in ${s.extraType}`);
        return;
      }
      Le();
    }), (re, oe) => {
      const ze = ya("Icon");
      return He.value ? fe("", !0) : (D(), te("div", {
        key: 0,
        class: gt(["extras group", [e.extraType]]),
        style: Xt({ "grid-column-end": "span " + e.partColumns })
      }, [
        e.allowCustomNames ? (D(), te("div", cp, [
          we("div", dp, [
            ct(pi, {
              id: `${e.extraType}-custom-input-${e.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: N(U),
              placeholder: `Add ${e.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": oe[0] || (oe[0] = (Te) => U.value = Te || ""),
              onKeydown: Jo(N(de), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            we("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !N(_),
              onClick: oe[1] || (oe[1] = //@ts-ignore
              (...Te) => N(de) && N(de)(...Te))
            }, " Add ", 8, fp)
          ]),
          ct(uf, {
            "menu-items": N(R),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: N(w),
            onAction: N(Ae)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : fe("", !0),
        u.value ? (D(), $e(N(t), {
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
        }, null, 8, ["shape", "shape-index", "extra-type", "catalogue-key", "extra-id", "extra-name", "locations", "price-per-length", "pricing", "price-label", "format-price", "max-gap", "per-side", "orientation-model", "debug"])) : (D(), te("div", {
          key: 2,
          ref_key: "gridRef",
          ref: Je,
          class: gt(["inputs extras-grid grid-layout", { "has-pricing": e.enablePricing }]),
          style: Xt({ "--extras-label-w": rt.value })
        }, [
          (D(!0), te(At, null, an(N(Be), (Te) => (D(), te(At, { key: Te }, [
            N(C)(Te) ? (D(), te("div", pp, [
              we("div", mp, [
                we("label", {
                  class: gt(["extras-location-label", {
                    "group-label": qe.value(Te),
                    "face-label": _e.value(Te),
                    "side-label": Ie.value(Te),
                    "has-validation-issue": ht.value(Te)
                  }])
                }, Ce(N(v)(Te)), 3),
                (D(!0), te(At, null, an(e.allOptions, (We, nt) => (D(), $e(Fa, tn({
                  key: `${Te}-${nt}`,
                  id: N(vt)(Te, nt),
                  "data-field": `${e.extraType}-${Te}`,
                  "data-index": e.shapeIndex,
                  "data-option-index": nt
                }, { ref_for: !0 }, N(X)(Te, nt), {
                  "onUpdate:value": (ft) => N(E)(Te, nt, ft)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"]))), 128)),
                N(dt)(Te).show ? (D(), te("button", {
                  key: 0,
                  type: "button",
                  class: "c-btn c-btn--delete",
                  disabled: !N(dt)(Te).enabled,
                  title: N(dt)(Te).ariaLabel,
                  onClick: (We) => N(K)(Te)
                }, [
                  ct(ze, { icon: ["fass", "trash"] })
                ], 8, gp)) : fe("", !0)
              ]),
              e.enablePricing ? (D(), te("div", hp, [
                Ve(Te) ? (D(), te("span", bp, [
                  dn(Ce(Ke(ce(Te))), 1),
                  e.priceLabel ? (D(), te("span", vp, Ce(e.priceLabel), 1)) : fe("", !0)
                ])) : le(Te) ? (D(), $e(bf, {
                  key: 1,
                  "price-per-unit": Ge(Te),
                  quantity: $t(Te),
                  "quantity-unit": Ft(Te),
                  "price-label": e.priceLabel,
                  "format-price": s.formatPrice
                }, null, 8, ["price-per-unit", "quantity", "quantity-unit", "price-label", "format-price"])) : fe("", !0)
              ])) : fe("", !0)
            ])) : fe("", !0)
          ], 64))), 128))
        ], 6)),
        s.debug || i ? (D(), $e(N(a), {
          key: 3,
          title: `${e.extraType} debug`,
          data: [{
            extraType: e.extraType,
            mode: N(p),
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
        }, null, 8, ["title", "data", "paths"])) : fe("", !0)
      ], 6));
    };
  }
}), kp = /* @__PURE__ */ pn(yp, [["__scopeId", "data-v-d50e6e8d"]]);
function _t(e) {
  return typeof e == "string" && e.trim().length > 0 ? e.trim() : "";
}
function wp(e) {
  const t = (Array.isArray(e.availableThicknesses) && e.availableThicknesses.length > 0 ? e.availableThicknesses : Array.isArray(e.t) ? e.t : e.t != null ? [e.t] : []).map((a) => typeof a == "number" ? a : Number(a)).filter((a) => Number.isFinite(a));
  return [...new Set(t)].sort((a, i) => a - i);
}
function Cl(e, n, t, a, i) {
  const s = [], f = (!!i && !!e && e.toUpperCase() === i.toUpperCase() ? "" : e) || (n && !!i ? "" : a);
  if (n && s.push(n), f) {
    const y = n.toLowerCase(), I = f.toLowerCase();
    n && y.includes(I) || (n && I.startsWith(y + " ") ? s.push(f.slice(n.length).trimStart()) : s.push(f));
  }
  if (t) {
    const y = t.toLowerCase(), I = y.split(/\s+/)[0] ?? "", P = `${n} ${f}`.toLowerCase();
    !(P.includes(y) || I && P.split(/\s+/).includes(I)) && (f || n) && s.push(t);
  }
  return s;
}
function Sp(e, n, t, a, i, s, u, c) {
  const p = [];
  n && p.push(n);
  const f = Cl(e, t, a, i, s);
  for (const y of f)
    (!n || !n.toLowerCase().includes(y.toLowerCase())) && p.push(y);
  return p.length > 0 ? p.join(" ") : u || c;
}
function xp(e, n, t, a, i, s, u) {
  const c = Cl(e, n, t, a, i);
  return c.length > 0 ? c.join(" ") : s || u;
}
function ki(e) {
  if (!e) return {};
  const n = _t(e.customData?.stockName);
  return {
    name: _t(e.name) || n || void 0,
    brand: e.brand,
    variant: e.variant,
    material: e.material,
    finish: e.finish,
    code: e.code,
    displayName: e.displayName,
    imageUrl: e.imageUrl
  };
}
function va(e, n = {}) {
  const t = n.fallback ?? "(unnamed)";
  if (!e)
    return {
      name: t,
      fullLabel: t,
      productLabel: t,
      groupKey: "",
      thicknesses: []
    };
  const a = _t(e.name), i = _t(e.brand) || _t(n.inheritFrom?.brand), s = _t(e.material) || _t(n.inheritFrom?.material), u = _t(e.variant) || _t(n.inheritFrom?.variant), c = _t(e.finish), p = _t(e.code), f = _t(e.displayName), y = [i, s].filter(Boolean).join(" · ");
  let I;
  y && u ? I = `${y} → ${u}` : y ? I = y : u && (I = u);
  let P;
  a ? P = a : p ? P = p : u && !s && !i ? P = u : s && !u ? P = s : i && !u && !s ? P = i : P = t;
  const v = Sp(
    a,
    i,
    u,
    c,
    s,
    p,
    f,
    t
  ), j = xp(
    a,
    u,
    c,
    s,
    p,
    f,
    t
  ), X = (() => {
    if (p && !(!a && p.toUpperCase() === P.toUpperCase()) && p.toUpperCase() !== j.toUpperCase())
      return p;
  })(), he = `${i.toUpperCase()}|${u.toUpperCase()}|${(a || s).toUpperCase()}`, ue = _t(e.shortDescription) || _t(e.description) || void 0, ae = _t(e.imageUrl) || void 0;
  return {
    hierarchy: I,
    name: P,
    code: X,
    fullLabel: v,
    productLabel: j,
    groupKey: he,
    brand: i || void 0,
    material: s || void 0,
    variant: u || void 0,
    finish: c || void 0,
    description: ue,
    imageUrl: ae,
    thicknesses: wp(e)
  };
}
let Ht = null;
function Ip(e, n) {
  return Ht = Cp(e, n), Ht;
}
function Pp(e) {
  if (!Ht) throw new Error("Pagination not initialized");
  return {
    items: M(() => Ht.getItems(e)),
    currentPage: M(() => Ht.getCurrentPage(e)),
    currentIndex: M(() => Ht.getCurrentIndex(e)),
    totalPages: M(() => Ht.paginatedArrays.value.get(e)?.totalPages || 0),
    itemsPerPage: M(() => Ht.getItemsPerPage(e)),
    resetPagination: () => Ht.resetPagination(e),
    nextPage: () => Ht.nextPage(e),
    previousPage: () => Ht.previousPage(e),
    goToPage: (n) => Ht.goToPage(e, n),
    setItemsPerPage: (n) => Ht.setItemsPerPage(e, n)
  };
}
function Ab(e, n) {
  const t = Pp(e);
  return t.setItemsPerPage(n), t;
}
function Cp(e, n) {
  const t = /* @__PURE__ */ new Map(), a = ee({}), i = (C, E) => {
    if ("value" in E) {
      const K = n[C]?.alwaysInclude;
      tt(
        () => {
          const U = E.value;
          return K ? U.filter((_) => !K(_)).length : U.length;
        },
        (U, _) => {
          const w = a.value[C];
          if (!w) return;
          const R = Math.ceil(U / w.itemsPerPage);
          if (U > _) {
            const de = Math.ceil(U / w.itemsPerPage), Ae = w.currentPage * w.itemsPerPage;
            U > Ae && w.currentPage < de && (w.currentPage = de);
          } else U < _ && w.currentPage > R && (w.currentPage = Math.max(1, R));
        },
        { immediate: !1 }
      );
    }
  };
  Object.entries(e).forEach(([C, E]) => {
    const K = n[C];
    if (!K)
      throw new Error(`Missing pagination options for array: ${C}`);
    t.set(C, E), a.value[C] = {
      currentPage: K.initialPage || 1,
      itemsPerPage: K.itemsPerPage
    }, i(C, E);
  });
  const s = (C, E) => {
    const K = a.value[C];
    if (!K) return;
    const U = u(C);
    K.currentPage = Math.max(1, Math.min(E, U));
  }, u = (C) => {
    const E = t.get(C);
    if (!E) return 0;
    const K = N(E), U = a.value[C];
    if (!U) return 0;
    const _ = n[C], w = _?.alwaysInclude ? K.filter((R) => !_.alwaysInclude(R)) : K;
    return Math.max(1, Math.ceil(w.length / U.itemsPerPage));
  }, c = M(() => {
    const C = /* @__PURE__ */ new Map();
    return t.forEach((E, K) => {
      const U = N(E), _ = Array.isArray(U) ? U : [], w = a.value[K], R = n[K], de = R?.alwaysInclude ? _.filter(R.alwaysInclude) : [], Ae = R?.alwaysInclude ? _.filter((Je) => !R.alwaysInclude(Je)) : _, Be = Math.ceil(Ae.length / w.itemsPerPage), vt = (w.currentPage - 1) * w.itemsPerPage, dt = vt + w.itemsPerPage, He = [
        ...de,
        ...Ae.slice(vt, dt)
      ];
      C.set(K, {
        items: He,
        currentPage: w.currentPage,
        totalPages: Be,
        isLastPage: w.currentPage >= Be,
        hasNextPage: w.currentPage < Be,
        hasPreviousPage: w.currentPage > 1
      });
    }), C;
  });
  return {
    paginatedArrays: c,
    addArray: (C, E, K) => {
      t.set(C, E), a.value[C] = {
        currentPage: K.initialPage || 1,
        itemsPerPage: K.itemsPerPage
      }, n[C] = K, i(C, E);
    },
    removeArray: (C) => {
      t.delete(C);
      const E = { ...a.value };
      delete E[C], a.value = E;
    },
    hasArray: (C) => t.has(C),
    clearArrays: () => {
      t.clear(), a.value = {};
    },
    goToPage: s,
    nextPage: (C) => {
      const E = a.value[C];
      E && s(C, E.currentPage + 1);
    },
    previousPage: (C) => {
      const E = a.value[C];
      E && s(C, E.currentPage - 1);
    },
    resetPagination: (C) => {
      if (C) {
        const E = a.value[C];
        E && (E.currentPage = 1);
      } else
        Object.values(a.value).forEach((E) => {
          E.currentPage = 1;
        });
    },
    getCurrentPage: (C) => a.value[C]?.currentPage || 1,
    getCurrentIndex: (C) => {
      const E = a.value[C];
      return E ? (E.currentPage - 1) * E.itemsPerPage : 0;
    },
    getItemsPerPage: (C) => {
      const E = a.value[C];
      if (!E) throw new Error(`No pagination state found for key: ${C}`);
      return E.itemsPerPage;
    },
    setItemsPerPage: (C, E) => {
      const K = a.value[C];
      K && (K.itemsPerPage = E, s(C, K.currentPage));
    },
    getStartIndex: (C) => {
      const E = a.value[C];
      return E ? (E.currentPage - 1) * E.itemsPerPage : 0;
    },
    getItems: (C) => c.value.get(C)?.items || []
  };
}
const $o = ee({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function Ll() {
  return {
    progress: $o,
    reset: () => {
      $o.value = {
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
let ai = null;
function Lp() {
  const e = ee(null), n = ee(null), t = ee(null), a = ua([]), i = ua([]), s = ua([]), u = ua([]), c = ee([]), p = ee(null), f = ua([]), y = ee(null), I = ee(null), P = ee({});
  return {
    // All state
    jobId: e,
    saw: n,
    activeStockAutoId: t,
    shapeList: a,
    stockList: i,
    cutList: s,
    segmentList: u,
    offcuts: c,
    metadata: p,
    unusableShapes: f,
    currentCutIndex: y,
    activeShape: I,
    cuttingPlans: P,
    r: {
      saw: n,
      activeStockAutoId: t,
      jobId: e,
      shapeList: a,
      stockList: i,
      cutList: s,
      segmentList: u,
      offcuts: c,
      unusableShapes: f,
      metadata: p,
      currentCutIndex: y,
      cuttingPlans: P
    }
  };
}
function Ep() {
  if (ai) return ai;
  const e = Lp(), n = M(() => e.activeStockAutoId.value ? rt(e.activeStockAutoId.value) : []), t = M(() => !e.activeStockAutoId.value || !e.stockList.value?.length ? null : Je(e.activeStockAutoId.value)), a = M(() => !t.value || !e.cutList.value?.length ? [] : Y(t.value.autoId)), i = M(() => !t.value || !e.segmentList.value?.length ? [] : G(e.activeStockAutoId.value)), s = M(() => e.stockList.value?.length ? Le(e.stockList.value) : []), u = M(() => e.shapeList.value.filter((H) => H.added)), c = M(() => e.shapeList.value?.length ? e.shapeList.value.filter((H) => !H.added) : []), p = M(() => e.shapeList.value?.length ? hc(e.shapeList.value) : []), f = M(() => e.shapeList.value?.length ? e.shapeList.value.filter((H) => !H.duplicate) : []), y = M(() => f.value.filter((H) => H.added)), I = M(() => e.stockList.value?.length ? e.stockList.value.filter((H) => H.used && !H.duplicate) : []), P = M(() => I.value.filter((H) => H.used)), v = M(() => e.cutList.value?.length ? a.value.reduce((H, ce) => H + ce.area, 0) : 0), j = M(() => !e.stockList.value?.length || !t.value ? 0 : t.value ? t.value.area : 0), X = M(() => !e.shapeList.value?.length || !n.value ? 0 : n.value ? n.value.reduce((H, ce) => H + ce.area, 0) : 0), he = M(() => !e.cutList.value?.length || !t.value ? null : t.value.cutType), ue = M(() => e.stockList.value?.length ? e.stockList.value.filter((ce) => ce.used && !ce.isStacked) : []), ae = M(() => e.stockList.value?.length ? ul(t.value, e.stockList.value) : 0), me = M(() => {
    if (!e.stockList.value?.length) return 0;
    let H = j.value ? (v.value + X.value) / j.value : null;
    return H > 1 && (H = 1), H;
  }), ye = M(() => e.activeStockAutoId.value && e.cuttingPlans.value?.[e.activeStockAutoId.value] || null), C = (H) => H?.saw ?? e.saw.value, E = (H) => C(H)?.cutType === "nesting", K = M(() => {
    const H = s.value, ce = H.some((ht) => E(ht)), Ve = H.length > 0 && H.every((ht) => E(ht)), Ke = H.length > 0 && !Ve, Ge = H.some((ht) => C(ht)?.cutType === "beam"), $t = H.some((ht) => {
      const re = C(ht);
      return re?.cutType !== "nesting" && (re?.stockType ?? "sheet") === "sheet";
    });
    return { someNesting: ce, everyNesting: Ve, someRect: Ke, someBeam: Ge, someSheetRect: $t, isMixed: ce && Ke };
  }), U = M(() => C(t.value)?.cutType === "nesting"), _ = M(() => C(t.value)?.stockType ?? "sheet"), w = M(() => {
    const H = {};
    for (const Ve of s.value) {
      const Ke = C(Ve)?.stockType ?? "sheet";
      H[Ke] = (H[Ke] ?? 0) + 1;
    }
    return Object.entries(H).sort((Ve, Ke) => Ke[1] - Ve[1])[0]?.[0] ?? "sheet";
  }), R = () => {
    e.saw.value = null, e.shapeList.value.length = 0, e.stockList.value.length = 0, e.cutList.value.length = 0, e.segmentList.value.length = 0, e.offcuts.value.length = 0, e.unusableShapes.value.length = 0, e.currentCutIndex.value = null;
  }, de = () => {
    e.saw.value = null, e.activeStockAutoId.value = null, e.activeShape.value = null, e.metadata.value = null, e.shapeList.value = [], e.stockList.value = [], e.cutList.value = [], e.segmentList.value = [], e.offcuts.value = [], e.currentCutIndex.value = null, e.unusableShapes.value = [], e.cuttingPlans.value = {};
  }, Ae = (H, ce) => {
    H in this && this[H]?.sort(Eu[ce]);
  }, Be = (H) => {
    it(H);
  }, vt = () => {
    it(e.shapeList);
  }, dt = () => {
    it(e.stockList);
  }, He = (H) => {
    if (!H?.shapeList?.some((ce) => ce.added)) {
      de();
      return;
    }
    e.metadata.value = H.metadata, e.unusableShapes.value = H.unusableShapes || [];
    try {
      H?.saw && (e.saw.value = new da(H.saw));
      const ce = Pc(H, {
        preventAutoRotation: !0
      });
      e.stockList.value = ce.stockList, e.shapeList.value = ce.shapeList, e.cutList.value = ce.cutList, e.segmentList.value = ce.segmentList, e.offcuts.value = ce.offcuts, e.cuttingPlans.value = H.cuttingPlans || {}, ["saw", "stockList", "shapeList", "cutList", "segmentList"].forEach((Ke) => it(e[Ke])), e.activeStockAutoId.value = Le(e.stockList.value)?.[0]?.autoId || null;
    } catch (ce) {
      console.error("Error updating from result", ce);
    }
  }, Je = (H) => e.stockList.value?.length ? e.stockList.value.find((ce) => ce.autoId === H) : null, rt = (H) => e.shapeList.value?.length ? e.shapeList.value.filter((ce) => ce.added && ce?.stock?.autoId === H) : [], G = (H) => e.segmentList.value?.length ? e.segmentList.value.filter((Ve) => Ve?.stock?.autoId === H) : [], Y = (H) => {
    const ce = e?.cutList?.value;
    return !ce && !ce.length ? [] : ce.filter((Ve) => Ve?.stock?.autoId === H).sort((Ve, Ke) => Ve?.guillotineState?.order - Ke?.guillotineState?.order);
  }, Le = (H) => H?.length ? H.filter((ce) => ce.used === !0) : [], qe = (H) => {
    e.activeStockAutoId.value !== H && (e.activeShape.value = null, e.activeStockAutoId.value = H);
  }, _e = (H) => {
    if (H.id.endsWith(".0")) return H.autoId;
    const ce = H.parentId || Lu(H.id);
    return e.shapeList.value.find((Ke) => Ke.parentId === ce && Ke.id.endsWith(".0"))?.autoId || H.autoId;
  }, Ie = () => {
    e.saw.value = new da({
      bladeWidth: 3,
      stockType: "sheet",
      cutType: "beam",
      cutPreference: "l"
    });
    const H = {
      autoId: "1.0",
      l: 2440,
      w: 1220,
      t: 18,
      q: 1,
      used: !0
    }, ce = new Qa(H), Ve = new La({
      l: 500,
      w: 500,
      t: 18,
      q: 1,
      x: 0,
      y: 0,
      added: !0,
      id: "1.0"
    });
    Ve.addToStock(ce);
    const Ke = new La({
      l: 400,
      w: 400,
      t: 18,
      q: 1,
      x: 500,
      y: 0,
      added: !0,
      id: "2.0"
    });
    Ke.addToStock(ce);
    const Ge = (re) => ({
      ptxData: {
        function: 1,
        order: re,
        isDummy: !1,
        isFirst: re === 0,
        isLast: !1,
        technologyTable: "01"
      }
    }), Ft = [
      { x: 0, y: 0, l: 500, vertical: !0, stock: ce, ...Ge(0) },
      { x: 500, y: 0, l: 500, vertical: !1, stock: ce, ...Ge(1) },
      { x: 500, y: 500, l: 400, vertical: !0, stock: ce, ...Ge(2) },
      { x: 900, y: 500, l: 400, vertical: !1, stock: ce, ...Ge(3) }
    ].map((re) => new bo(re)), ht = new Ou({
      l: 1500,
      w: 720,
      t: 18,
      x: 940,
      y: 0
    });
    try {
      ht.addToStock?.(ce);
    } catch {
    }
    e.stockList.value = [ce], e.shapeList.value = [Ve, Ke], e.cutList.value = Ft, e.offcuts.value = [ht], e.activeStockAutoId.value = ce.autoId;
  }, le = () => {
    const H = new da({
      bladeWidth: 3,
      stockType: "sheet",
      cutType: "guillotine",
      cutPreference: "l"
    }), ce = new da({
      bladeWidth: 4,
      stockType: "roll",
      cutType: "nesting"
    }), Ve = new da({
      bladeWidth: 3,
      stockType: "linear",
      cutType: "efficiency"
    });
    e.saw.value = H;
    const Ke = new Qa({
      autoId: "1.0",
      l: 2440,
      w: 1220,
      t: 18,
      q: 1,
      used: !0,
      saw: H
    }), Ge = new La({
      l: 500,
      w: 500,
      t: 18,
      q: 1,
      x: 0,
      y: 0,
      added: !0,
      id: "1.0"
    });
    Ge.addToStock(Ke);
    const $t = new La({
      l: 400,
      w: 400,
      t: 18,
      q: 1,
      x: 500,
      y: 0,
      added: !0,
      id: "2.0"
    });
    $t.addToStock(Ke);
    const Ft = (bt) => ({
      ptxData: {
        function: 1,
        order: bt,
        isDummy: !1,
        isFirst: bt === 0,
        isLast: !1,
        technologyTable: "01"
      }
    }), re = [
      { x: 0, y: 0, l: 500, vertical: !0, stock: Ke, ...Ft(0) },
      { x: 500, y: 0, l: 500, vertical: !1, stock: Ke, ...Ft(1) }
    ].map((bt) => new bo(bt)), oe = new Qa({
      autoId: "2.0",
      l: 1e4,
      w: 1500,
      t: 10,
      q: 1,
      used: !0,
      saw: ce
    }), ze = [
      { x: 0, y: 0 },
      { x: 600, y: 0 },
      { x: 600, y: 300 },
      { x: 300, y: 400 },
      { x: 0, y: 300 }
    ], Te = [
      { x: 100, y: 100 },
      { x: 100, y: 200 },
      { x: 250, y: 200 },
      { x: 250, y: 100 }
    ], We = new Tu({
      l: 600,
      w: 400,
      t: 10,
      q: 1,
      x: 50,
      y: 50,
      added: !0,
      id: "3.0",
      outline: ze,
      holes: [Te]
    });
    We.addToStock(oe);
    const nt = new Qa({
      autoId: "3.0",
      l: 3e3,
      w: 90,
      t: 45,
      q: 1,
      used: !0,
      saw: Ve
    }), ft = new La({
      l: 800,
      w: 90,
      t: 45,
      q: 1,
      x: 0,
      y: 0,
      added: !0,
      id: "4.0"
    });
    ft.addToStock(nt), e.stockList.value = [Ke, oe, nt], e.shapeList.value = [Ge, $t, We, ft], e.cutList.value = re, e.offcuts.value = [], e.cuttingPlans.value = {
      [oe.autoId]: {
        contours: [
          {
            shapeId: We.id,
            label: We.id,
            isHole: !1,
            leadIn: [],
            contour: We.getPositionedOutline().map((bt) => ({ ...bt, type: "cut" })),
            leadOut: []
          }
        ],
        totalCutDistance: 0,
        totalRapidDistance: 0,
        commonLineSaved: 0,
        config: {}
      }
    }, e.activeStockAutoId.value = Ke.autoId;
  };
  return ai = {
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
    unplacedShapes: c,
    uniqueShapes: f,
    uniqueAddedShapes: y,
    unplacedShapeTally: p,
    uniqueStock: I,
    uniqueUsedStock: P,
    activeStock: t,
    activeCuts: a,
    activeCutsArea: v,
    activeCutType: he,
    usedStock: s,
    stackedStock: ue,
    activeStockArea: j,
    activeShapeArea: X,
    activeStockStackCount: ae,
    activeTotalArea: me,
    activeSegments: i,
    cuttingPlan: ye,
    resultComposition: K,
    activeStockIsNesting: U,
    activeStockType: _,
    majorityStockType: w,
    // methods
    getStockSaw: C,
    reset: R,
    clear: de,
    createTestData: Ie,
    createMixedTestData: le,
    sortItems: Ae,
    update: Be,
    updateShapes: vt,
    updateStock: dt,
    updateFromResult: He,
    getStock: Je,
    getShapes: rt,
    getSegments: G,
    getCuts: Y,
    setActiveStockAutoId: qe,
    getInputAutoId: _e
  }, ai;
}
const Tp = sc(() => T({
  // Full stock - purchase entire sheet without cutting (first field after ID)
  fullStock: O(
    ne().default(!1),
    {
      label: "fields.fullStock",
      propertyPath: "fullStock",
      group: "properties",
      order: -1
    }
  ),
  // Material field
  material: O(
    l().optional(),
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
  t: O(
    je([m(), l()]).optional(),
    {
      label: "fields.t",
      propertyPath: "t",
      group: "dimensions",
      order: 0,
      allowZero: !1
    }
  ),
  // Length field
  l: vo({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !1
  }),
  // Width field
  w: vo({
    label: "fields.w",
    placeholder: "fields.w",
    allowZero: !1
  }),
  // Quantity field
  q: O(
    m().int().positive().default(1),
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
  name: Au({
    placeholder: "fields.name"
  }),
  // Orientation lock field
  orientationLock: O(
    Xe(["n", "l", "w"]).default("n").optional(),
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
  banding: O(
    ne().default(!1),
    {
      label: "fields.banding",
      propertyPath: "banding",
      group: "extras",
      order: 0
    }
  ),
  // Finish options
  finish: O(
    T({
      enabled: ne().default(!1),
      type: l().optional(),
      sides: m().optional()
    }).optional(),
    {
      label: "fields.finish",
      propertyPath: "finish",
      group: "extras",
      order: 2
    }
  ),
  // Machining options
  machining: O(
    T({
      enabled: ne().default(!1),
      operations: Z(Se()).optional()
    }).optional(),
    {
      label: "fields.machining",
      propertyPath: "machining",
      group: "extras",
      order: 3
    }
  ),
  // Planing button
  planing: O(
    ne().default(!1),
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
function Op(e) {
  const n = Tp._def.getter();
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
class Ap {
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
    for (const [u, c] of Object.entries(s)) {
      if (u.startsWith("_") || this.isComputedField(c))
        continue;
      if (u === "trim" && this.isTrimField(c)) {
        const f = this.generateTrimFields(c);
        a.push(...f);
        continue;
      }
      const p = this.extractFieldMetadata(u, c);
      p && a.push(p);
    }
    return t?.sortByOrder ? a.sort((u, c) => (u.order || 999) - (c.order || 999)) : a;
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
      const p = {
        name: n,
        type: a.type || this.getFieldType(i),
        label: a.label || this.formatLabel(n),
        description: a.description,
        required: !this.isOptional(t),
        defaultValue: a.defaultValue ?? this.getDefaultValue(t),
        ...a
      };
      return this.extractTypeSpecificMetadata(p, i), p;
    }
    const s = i._def?.description, u = this.parseFieldDescription(s), c = {
      name: n,
      type: this.getFieldType(i),
      label: u.label || this.formatLabel(n),
      description: u.description,
      required: !this.isOptional(t),
      defaultValue: this.getDefaultValue(t),
      ...u
    };
    return this.extractTypeSpecificMetadata(c, i), c;
  }
  /**
   * Get the field type from a Zod schema
   */
  getFieldType(n) {
    const t = this.unwrapField(n);
    if (t instanceof So) {
      const a = t._def?.options || [];
      for (const i of a)
        if (i instanceof ba)
          return this.isIntegerNumber(i) ? "integer" : "number";
    }
    return t instanceof ba ? this.isIntegerNumber(t) ? "integer" : "number" : t instanceof oc ? "string" : t instanceof lc ? "boolean" : t instanceof xo || t._def?.typeName === "ZodNativeEnum" ? "enum" : t instanceof rc ? "array" : t instanceof ei ? "object" : "string";
  }
  /**
   * Extract constraints from a ZodNumber schema
   */
  extractNumberConstraints(n, t) {
    const a = t, i = (u) => u === Number.MAX_SAFE_INTEGER || u === Number.MIN_SAFE_INTEGER;
    if (a.minValue !== void 0 && a.minValue !== -1 / 0 && !i(a.minValue)) {
      n.min = a.minValue;
      const u = t._def?.checks?.find(
        (c) => c.constructor?.name === "$ZodCheckGreaterThan"
      );
      if (u && a.minValue === 0) {
        const c = u._zod?.def?.inclusive ?? u.inclusive;
        n.allowZero = c === !0;
      } else
        n.allowZero = a.minValue === 0;
    }
    a.maxValue !== void 0 && a.maxValue !== 1 / 0 && !i(a.maxValue) && (n.max = a.maxValue);
    const s = t._def?.checks || [];
    for (const u of s) {
      let c, p, f = !0;
      if (u.kind)
        c = u.kind, p = u.value, f = u.inclusive !== void 0 ? u.inclusive : !0;
      else if (u?._zod?.def) {
        const y = u._zod.def;
        c = y.check, p = y.value, f = y.inclusive !== void 0 ? y.inclusive : !0;
      } else
        continue;
      if (c === "min" || c === "greater_than")
        n.min === void 0 && (n.min = c === "greater_than" && !f ? p + 1e-6 : p, n.allowZero = n.min === 0);
      else if (c === "max" || c === "less_than")
        n.max === void 0 && (n.max = c === "less_than" && !f ? p - 1e-6 : p);
      else if (c === "int")
        n.step = 1;
      else if (c === "number_format") {
        const y = u?._zod?.def?.format ?? u?.format;
        (y === "safeint" || y === "int") && (n.step = 1);
      }
    }
  }
  /**
   * Extract type-specific metadata
   */
  extractTypeSpecificMetadata(n, t) {
    if (t instanceof So) {
      const a = t._def?.options || [];
      for (const i of a)
        if (i instanceof ba) {
          this.extractNumberConstraints(n, i), n.type = "number";
          break;
        }
    } else t instanceof ba && this.extractNumberConstraints(n, t);
    if (!n.options) {
      if (t instanceof xo) {
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
        const [u, c] = s.split(":").map((p) => p.trim());
        u === "group" && (t.group = c), u === "order" && (t.order = parseInt(c)), u === "units" && (t.units = c), u === "hidden" && (t.hidden = c === "true"), u === "readonly" && (t.readonly = c === "true"), u === "placeholder" && (t.placeholder = c);
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
    if (n instanceof zi || n instanceof Hi)
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
    return n._def?.typeName === "ZodEffects" ? this.isOptional(n._def?.schema) : n instanceof Zi ? this.isOptional(n._def?.innerType) : !1;
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
    if (n instanceof zi || n instanceof Hi)
      return this.unwrapField(n._def?.innerType);
    if (n instanceof Zi || a === "ZodDefault")
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
    if (n instanceof Zi) {
      const t = n._def?.defaultValue;
      return typeof t == "function" ? t() : t;
    }
    if (n.constructor?.name === "ZodPipe" || n._def?.type === "pipe") {
      const t = n._def?.in;
      if (t)
        return this.getDefaultValue(t);
    }
    if (n instanceof zi || n instanceof Hi) {
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
    return n instanceof ei;
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
        fields: s.sort((c, p) => (c.order || 999) - (p.order || 999))
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
    if (t instanceof ei) {
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
    if (!(a instanceof ei))
      return t;
    const i = a.shape, s = ["l1", "l2", "w1", "w2"];
    for (const u of s)
      if (u in i) {
        const c = i[u], p = this.extractFieldMetadata(`trim.${u}`, c);
        p && (p.propertyPath = `trim.${u}`, p.name = `trim.${u}`, p.group || (p.group = "trim"), t.push(p));
      }
    return t;
  }
}
const Do = new Ap();
function Fp(e, n = {}) {
  const t = ee([]), a = ee([]), i = ee(/* @__PURE__ */ new Map()), s = ee(/* @__PURE__ */ new Map()), u = (v) => {
    let j = Do.generateFields(e);
    n.overrides && (j = j.map((he) => {
      const ue = n.overrides[he.name];
      if (ue) {
        const ae = { ...he, ...ue };
        return ue.min === void 0 && he.min !== void 0 && (ae.min = he.min), ue.max === void 0 && he.max !== void 0 && (ae.max = he.max), ae;
      }
      return he;
    })), s.value.clear();
    for (const he of j)
      s.value.set(he.name, he);
    const X = v || n.allowedFieldIds;
    if (X && X.length > 0) {
      const he = X, ue = /* @__PURE__ */ new Map();
      for (const me of j)
        ue.set(me.name, me);
      const ae = [];
      for (const me of he) {
        const ye = ue.get(me);
        ye && ae.push(ye);
      }
      j = ae;
    }
    n.filter && (j = j.filter(n.filter)), t.value = j, i.value.clear();
    for (const he of j)
      i.value.set(he.name, he);
    n.grouped && (a.value = Do.groupFields(j));
  };
  u();
  const c = (v) => i.value.get(v), p = (v) => s.value.get(v), f = () => s.value, y = (v, j) => {
    const X = i.value.get(v);
    X && Object.assign(X, j);
  }, I = (v) => {
    const j = c(v);
    return !(!j || j.hidden);
  }, P = (v) => {
    const j = c(v);
    if (!j) return {};
    const X = {};
    return j.required && (X.required = !0), j.type === "number" && (j.min !== void 0 && (X.min = j.min), j.max !== void 0 && (X.max = j.max)), X;
  };
  return {
    fields: M(() => t.value),
    groups: M(() => a.value),
    fieldMap: M(() => i.value),
    allFieldsMap: M(() => s.value),
    getField: c,
    getFieldMetadata: p,
    getAllFieldMetadata: f,
    updateField: y,
    isFieldVisible: I,
    getFieldValidation: P,
    regenerateFields: u
  };
}
function Np(e) {
  const { stockType: n, materials: t = [], minDimension: a = 0 } = e, i = Op(n), s = {
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
  }), e.orientationModel === 0 && (s.l = { ...s.l, label: "fields.long", placeholder: "fields.long" }, s.w = { ...s.w, label: "fields.short", placeholder: "fields.short" }), Fp(i, {
    ...e,
    overrides: { ...s, ...e.overrides }
  });
}
const { progress: ut, reset: ii } = Ll(), Ds = "sc:inflight-job", Mp = 2 * 3600 * 1e3;
function _o(e, n) {
  try {
    localStorage.setItem(Ds, JSON.stringify({ jobId: e, socketId: n, queuedAt: Date.now() }));
  } catch {
  }
}
function pa() {
  try {
    localStorage.removeItem(Ds);
  } catch {
  }
}
function la() {
  try {
    const e = localStorage.getItem(Ds);
    if (!e) return null;
    const n = JSON.parse(e);
    return !n?.jobId || Date.now() - n.queuedAt > Mp ? (pa(), null) : n;
  } catch {
    return null;
  }
}
function $p(e) {
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
  ]), u = (P) => {
    const v = s.has(P?.message) ? "unreachable" : "rejected";
    P && typeof P == "object" && (P.endpoint = n, P.kind = v), console.error(
      v === "unreachable" ? `SmartCut: calculation server unreachable at ${n} — verify VITE_WS_SERVER targets the live API (not localhost) and the server is online` : `SmartCut: calculation server at ${n} rejected the connection (authentication / authorisation)`,
      {
        endpoint: n,
        kind: v,
        message: P?.message,
        description: P?.description,
        context: P?.context,
        data: P?.data
      }
    );
  }, c = () => {
    a = uc(n, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), a.on("connect", () => {
      e.refs?.connected && (e.refs.connected.value = !0);
      const P = la();
      P && !ut.value.complete && (i = P.jobId, ut.value.reattaching = !0, a.emit("reattach", P.jobId)), e.callbacks?.onConnect?.();
    }), a.on("connect_error", (P) => {
      u(P), e.refs?.connected && (e.refs.connected.value = !1), !ut.value.complete && la() ? ut.value.reattaching = !0 : e.refs?.thinking && (e.refs.thinking.value = !1), e.callbacks?.onConnectError?.(P);
    }), a.on("connect_timeout", (P) => {
      u(P), e.refs?.connected && (e.refs.connected.value = !1), !ut.value.complete && la() ? ut.value.reattaching = !0 : e.refs?.thinking && (e.refs.thinking.value = !1), e.callbacks?.onConnectError?.(P);
    }), a.on("disconnect", () => {
      e.refs?.connected && (e.refs.connected.value = !1), !ut.value.complete && la() && (ut.value.reattaching = !0), e.callbacks?.onDisconnect?.();
    }), a.on("result", (P) => {
      ut.value.complete = !0, ut.value.reattaching = !1, pa(), i = null, e.callbacks?.onResult?.(P), a.disconnect();
    }), a.on("queued", (P) => {
      ii(), ut.value.queued = !0, P && (i = P, _o(P, a.id ?? null));
    }), a.on("jobInProgess", (P) => {
      P && (i = P, _o(P, a.id ?? null), ut.value.queued = !0, ut.value.reattaching = !0, a.emit("reattach", P));
    }), a.on("reattached", () => {
      ut.value.reattaching = !1, ut.value.queued = !0;
    }), a.on("reattach-stale", (P) => {
      ut.value.reattaching = !1, pa(), i = null, ii(), e.callbacks?.onStale?.(P?.jobId);
    }), a.on("cancelled", () => {
      ut.value.reattaching = !1, pa(), i = null, ii();
    }), a.on("started", () => {
      ut.value.started = !0, ut.value.reattaching = !1;
    }), a.on("progress", (P) => {
      ut.value.reattaching = !1, P?.data?.message === "result" ? ut.value.resultCount++ : (ut.value.stockCount = P.data.stockCount, ut.value.shapeCount = P.data.shapeCount), P?.data?.phase && (ut.value.phase = P.data.phase), P?.data?.placed !== void 0 && (ut.value.placed = P.data.placed, ut.value.total = P.data.total);
    }), a.on("user", (P) => {
      e.callbacks?.onUser?.(P);
    }), a.on("error", (P) => {
      e.refs?.thinking && (e.refs.thinking.value = !1), pa(), i = null, ii(), e.callbacks?.onError?.(P);
    });
  }, p = () => a?.disconnect(), f = () => a?.connect(), y = (P) => {
    const v = P ?? i ?? la()?.jobId;
    v && (i = v, a?.connected ? a.emit("reattach", v) : a?.connect());
  }, I = () => {
    const P = la(), v = i ?? P?.jobId;
    if (v) {
      try {
        const j = P?.socketId ?? a?.id ?? "", X = j ? `?socketId=${encodeURIComponent(j)}` : "";
        navigator.sendBeacon?.(`${t}v3/job/${v}/cancel${X}`);
      } catch {
      }
      pa(), i = null;
    }
  };
  return c(), {
    socket: a,
    connect: f,
    disconnect: p,
    reattach: y,
    cancel: I
  };
}
const Dp = new As({});
function Zn(e) {
  return e != null && e !== !1 && e !== "";
}
function _p(e, n) {
  if (e.grain) return String(e.grain);
  if (!n) return "";
  const t = e.orientationLock;
  return t !== "l" && t !== "w" ? "" : t === n ? n : n === "l" ? "w" : "l";
}
function _s(e, n) {
  const t = Number(e.l) || 0, a = Number(e.w) || 0, i = Number(e.longSide) || Math.max(t, a), s = Number(e.shortSide) || Math.min(t, a), u = e.extras?.banding?.sides ?? {}, c = (Zn(u.l1) ? 1 : 0) + (Zn(u.l2) ? 1 : 0), p = (Zn(u.w1) ? 1 : 0) + (Zn(u.w2) ? 1 : 0), f = {
    // Core dimensions
    l: t,
    w: a,
    t: Number(e.t) || 0,
    q: Number(e.q) || 1,
    longSide: i,
    shortSide: s,
    // Basic properties
    material: e.material || e.selectedMaterial?.name || "",
    name: e.name || "",
    grain: _p(e, n?.stockGrain),
    fullStock: !!e.fullStock,
    // Banded-side counts (the feasibility surface)
    bandedLongSides: c,
    bandedShortSides: p,
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
    hasBanding: !!(e.extras?.banding?.sides && Object.values(e.extras.banding.sides).some((y) => Zn(y))),
    hasFinish: !!(e.extras?.finish?.faces && Object.values(e.extras.finish.faces).some((y) => Zn(y))),
    hasPlaning: !!(e.extras?.planing?.faces && Object.values(e.extras.planing.faces).some((y) => Zn(y))),
    hasMachining: !!e.machining,
    // Nested machining object for dot-notation access
    machining: {
      holes: e.machining?.holes?.length || 0,
      corners: e.machining?.corners?.length || 0
    }
  };
  return f["extras.banding.sides.l1"] = f.extras.banding.sides.l1, f["extras.banding.sides.l2"] = f.extras.banding.sides.l2, f["extras.banding.sides.w1"] = f.extras.banding.sides.w1, f["extras.banding.sides.w2"] = f.extras.banding.sides.w2, f["extras.finish.faces.a"] = f.extras.finish.faces.a, f["extras.finish.faces.b"] = f.extras.finish.faces.b, f["extras.planing.faces.a"] = f.extras.planing.faces.a, f["extras.planing.faces.b"] = f.extras.planing.faces.b, f["machining.holes"] = f.machining.holes, f["machining.corners"] = f.machining.corners, f;
}
function Rs(e, n) {
  const t = (e ?? "").trim();
  if (!t) return !0;
  const a = t.startsWith("=") ? t.substring(1).trim() : t;
  if (!a) return !0;
  try {
    return !!Dp.evaluateExpression(a, n);
  } catch (i) {
    return console.warn("[part-predicate] formula evaluation failed (passing fail-open):", { formula: e, err: i }), !0;
  }
}
const Ln = T({
  min: m().min(0).optional(),
  max: m().min(0).optional()
}).optional(), Rp = T({
  // Location identifier (e.g., 'side.l1', 'face.a')
  location: l().min(1),
  // Dimension constraints for this location
  longSide: Ln,
  shortSide: Ln,
  t: Ln,
  // Formula-based validation
  formula: l().optional(),
  // Custom message for this location
  message: l().optional()
}), ts = T({
  // Shape dimension constraints (type-level, apply to all locations by default)
  longSide: Ln,
  shortSide: Ln,
  t: Ln,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: l().optional(),
  // Custom validation message (optional)
  message: l().optional(),
  // Location-specific rules (override type-level rules for specific locations)
  locations: Z(Rp).optional()
}), qp = T({
  banding: ts.optional(),
  finish: ts.optional(),
  planing: ts.optional()
}).optional();
function Bp(e) {
  return e.formula ? "" : Is({
    dimensionName: Ps(e.dimension),
    constraint: e.constraint,
    limit: e.limit,
    value: e.value
  });
}
function Vp(e, n, t) {
  const a = n.charAt(0).toUpperCase() + n.slice(1);
  return e.formula ? `${a} does not meet the validation requirements` : Is({
    dimensionName: Ps(e.dimension),
    constraint: e.constraint,
    limit: e.limit,
    value: e.value,
    subject: a,
    location: e.location
  });
}
function Up(e, n, t) {
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
function jp(e, n, t, a, i) {
  const { rule: s, message: u, source: c } = Up(n, t, a), p = [], f = (I, P, v) => {
    P == null || v === void 0 || (v.min !== void 0 && P < v.min && p.push({
      valid: !1,
      dimension: I,
      value: P,
      constraint: "min",
      limit: v.min,
      location: t
    }), v.max !== void 0 && P > v.max && p.push({
      valid: !1,
      dimension: I,
      value: P,
      constraint: "max",
      limit: v.max,
      location: t
    }));
  };
  f("longSide", e.longSide, s.longSide), f("shortSide", e.shortSide, s.shortSide);
  const y = typeof e.t == "string" ? parseFloat(e.t) : e.t;
  return isNaN(y) || f("t", y, s.t), s.formula && (Rs(s.formula, _s(e, { stockGrain: i?.stockGrain })) || p.push({
    valid: !1,
    dimension: "longSide",
    // placeholder; `formula` is the real signal
    value: e.longSide || 0,
    constraint: "min",
    limit: 0,
    location: t,
    formula: !0
  })), {
    valid: p.length === 0,
    violations: p,
    message: u,
    source: c
  };
}
const { addNotice: ra } = Ci();
let ns = null;
function Gp() {
  return ns || (ns = ml()), ns;
}
function Ro(e) {
  return e.filter((n) => n?.l || n?.w);
}
function Wp(e) {
  return !!e && "locations" in e && Array.isArray(e.locations);
}
async function Kp(e) {
  const n = e.t, t = [];
  try {
    const { inputs: a, validateInputShapes: i, validateInputStock: s } = Gp(), u = e.inputShapes ?? a.inputShapes.value, c = e.inputStock ?? a.inputStock.value, p = e.inputUserGroups ?? a.inputUserGroups?.value ?? [], f = Ro(u), y = Ro(c);
    f.forEach((E) => E.isNew = !1), y.forEach((E) => E.isNew = !1);
    let I;
    if (e.useInventory && e.selectedSaw)
      I = e.selectedSaw;
    else if (e.inputSaw instanceof un) {
      const E = e.inputSaw.validate();
      t.push(...E), I = e.inputSaw.toData();
    } else {
      I = e.inputSaw;
      const E = new da(I);
      t.push(...E.issues);
    }
    const P = "__default", v = new Map((e.materials ?? []).map((E) => [E.id, E])), j = (E) => e.sawFor?.(E) ?? (E.materialId ? v.get(E.materialId)?.saw : void 0) ?? I, X = (E) => j(E)?.cutType === "nesting", he = (E) => E.materialId && v.get(E.materialId)?.saw ? E.materialId : P, ue = [...f, ...y].some((E) => he(E) !== P);
    if (!e.isAdmin && !e.shared) {
      const E = bi(f.filter((de) => !X(de))), K = bi(f.filter((de) => X(de))), U = e.maxRect ?? e.maxShapes ?? 1 / 0, _ = e.maxNesting ?? e.maxShapes ?? 1 / 0, w = U !== 1 / 0 && E > U, R = _ !== 1 / 0 && K > _;
      if (w || R)
        return ra({
          type: "error",
          message: n("errors.validation.above_max_parts"),
          // Name the bucket(s) that tripped so a mixed job isn't left
          // guessing which count to reduce.
          additional: [
            ...w ? [`Parts: ${E} / ${U}`] : [],
            ...R ? [`Nesting parts: ${K} / ${_}`] : []
          ]
        }), e.onLimit?.(), { valid: !1, issues: t };
    }
    if (!f.length)
      return ra({
        type: "error",
        message: n("errors.validation.no_parts_list")
      }), { valid: !1, issues: t };
    if (!e.useInventory && !y.length)
      return ra({
        type: "error",
        message: n("errors.validation.no_stock")
      }), { valid: !1, issues: t };
    if (e.materials?.length) {
      const E = new Set(
        [...f, ...y].map((K) => K.materialId).filter((K) => !!K)
      );
      for (const K of e.materials) {
        if (!K.saw || !E.has(K.id)) continue;
        const U = K.name || K.id;
        try {
          const _ = new un(K.saw), w = [..._.validate(), ..._.warnings ?? []];
          for (const R of w)
            t.push(new mt({
              category: ["saw"],
              type: R.type,
              message: `Material "${U}": ${n(R.message)}`,
              shouldTranslate: !1
            }));
        } catch (_) {
          t.push(new mt({
            category: ["saw"],
            message: `Material "${U}": invalid saw configuration — ${_?.message ?? "could not be parsed"}`,
            shouldTranslate: !1
          }));
        }
      }
    }
    const ae = (E) => E.outline;
    for (const E of f) {
      const K = ae(E);
      if (!(Array.isArray(K) && K.length >= 3)) continue;
      const _ = j(E)?.cutType;
      if (!_ || _ === "nesting") continue;
      const w = E.materialId ? v.get(E.materialId) : void 0;
      t.push(new mt({
        item: E,
        category: ["part"],
        message: w ? `This part has a shaped outline but its material ("${w.name || w.id}") is set to rectangular cutting — switch the material to nesting, or square the part off.` : "This part has a shaped outline but the job is set to rectangular cutting — switch the cutting style to nesting in Options, or square the part off.",
        shouldTranslate: !1
      }));
    }
    if (!e.useInventory && e.materials) {
      const E = new Set(
        y.map((w) => w.materialId).filter((w) => !!w)
      ), K = new Set(
        y.map((w) => String(w.material ?? "").trim().toLowerCase()).filter((w) => !!w)
      ), U = y.some((w) => !w.materialId || !v.get(w.materialId)?.saw), _ = /* @__PURE__ */ new Set();
      for (const w of f) {
        const R = w.materialId || null;
        if (!R) {
          U || _.add(null);
          continue;
        }
        if (E.has(R)) continue;
        const de = (v.get(R)?.name || String(w.material ?? "")).trim().toLowerCase();
        de && K.has(de) || _.add(R);
      }
      for (const w of _) {
        const R = w ? v.get(w)?.name || "this material" : null;
        t.push(new mt({
          category: ["stock"],
          message: w ? `No stock for material "${R}" — parts use it, so add at least one stock row on that material.` : "Some parts have no material — add at least one stock row without a material for them.",
          shouldTranslate: !1
        }));
      }
    }
    if (ue) {
      u.forEach((U) => {
        U.issues.length = 0;
      }), c.forEach((U) => {
        U.issues = [];
      });
      const E = /* @__PURE__ */ new Map(), K = (U) => {
        const _ = he(U);
        let w = E.get(_);
        if (!w) {
          const R = _ === P ? I : j(U);
          w = { saw: R, inputSaw: new un(R), shapes: [], stock: [] }, E.set(_, w);
        }
        return w;
      };
      f.forEach((U) => K(U).shapes.push(U)), y.forEach((U) => K(U).stock.push(U));
      for (const U of E.values()) {
        for (const w of U.shapes)
          w.validate({
            inputStockList: U.stock,
            index: f.indexOf(w),
            stockType: U.saw.stockType ?? null,
            partTrim: 0,
            useInventory: e.useInventory ?? !1,
            saw: U.inputSaw
          });
        if (U.shapes.length && el(U.shapes, U.stock, U.inputSaw), !e.useInventory)
          for (const w of U.stock)
            w.validate({ saw: U.saw }, y.indexOf(w));
        const _ = Number(U.saw?.bladeWidth);
        if (Number.isFinite(_) && _ > 0 && U.shapes.length) {
          const w = U.shapes.map((R) => Math.min(Number(R.l), Number(R.w))).filter((R) => Number.isFinite(R) && R > 0).sort((R, de) => R - de);
          if (w.length) {
            const R = w[Math.floor(w.length / 2)];
            _ / R > pl && t.push(new mt({
              category: ["saw"],
              type: "warning",
              message: "errors.validation.blade_width_units",
              params: { blade: _ }
            }));
          }
        }
      }
      t.push(...f.flatMap((U) => U.issues)), t.push(...y.flatMap((U) => U.issues)), !e.useInventory && !y.some((U) => Number(U.q) > 0 || U.autoAdd) && t.push(new mt({
        category: ["stock"],
        message: "errors.validation.no_stock"
      }));
    } else {
      const E = i({
        saw: I,
        partTrim: pe({ v: e.partTrim }),
        useInventory: e.useInventory,
        inputShapesOverride: f
      });
      if (t.push(...E), !e.useInventory) {
        const K = s(I);
        t.push(...K);
      }
    }
    if (e.useInventory && e.materialStore)
      for (const E of f)
        E.material || t.push(new mt({
          item: E,
          category: ["part"],
          message: "errors.validation.business.no_material"
        }));
    if (p.length > 0) {
      p.forEach((K) => K.populateParentID(f));
      const E = Ec(p, f);
      t.push(...E);
    }
    await Hp(f, e, t);
    const me = rs(t);
    if (me.length > 0) {
      const E = {
        saw: me.filter((K) => K.category?.includes("saw")),
        stock: me.filter((K) => K.category?.includes("stock")),
        part: me.filter((K) => K.category?.includes("part") && !K.category?.includes("extras")),
        extras: me.filter((K) => K.category?.includes("extras")),
        group: me.filter((K) => K.category?.includes("group"))
      };
      for (const [K, U] of Object.entries(E))
        U.length > 0 && ra({
          type: "error",
          message: n("errors.validation.inputs_issue", { 0: K }),
          additional: U.map((_) => n(_.message))
        });
      return { valid: !1, issues: t };
    }
    const ye = {
      inputSaw: I,
      inputShapes: f.map((E) => E.toData()),
      inputStock: y.map((E) => E.toData()),
      inputGroups: p.map((E) => E.toData()),
      enableEvo: !0,
      useInventory: e.useInventory || !1
    }, C = cd.safeParse(ye);
    return C.success ? {
      valid: !0,
      issues: t,
      sawData: I,
      cleanedShapes: f,
      cleanedStock: y
    } : (console.error("[Validation] Zod validation failed:", C.error.issues), ra({
      type: "error",
      message: n("errors.validation.invalid_data_structure"),
      additional: C.error.issues.map((E) => `${E.path.join(".")}: ${E.message}`)
    }), { valid: !1, issues: t });
  } catch (a) {
    return console.error("[Validation] error:", a), ra({
      type: "error",
      message: n("errors.general.unexpected"),
      additional: [a?.message ?? ""]
    }), { valid: !1, issues: t };
  }
}
function zp(e, n) {
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
async function Hp(e, n, t) {
  if (!n.findExtrasPrice)
    return;
  const a = [
    { type: "banding", pricing: n.bandingPricing },
    { type: "finish", pricing: n.finishPricing },
    { type: "planing", pricing: n.planingPricing }
  ];
  for (const i of e)
    for (const { type: s, pricing: u } of a) {
      const c = n.getShapeExtrasPricing?.(i, s) ?? u;
      if (n.extrasValidationRules && Fu.hasExtras(i, s)) {
        const I = n.extrasValidationRules?.[s], P = n.extrasLocationGroups?.[s], v = Wp(I) && I.locations.length > 0, j = P?.some((X) => X.rules);
        if (v || j) {
          const X = zp(i, s), he = (P || []).map((me) => ({
            id: me.id,
            locations: me.locations,
            rules: me.rules
          })), ue = I || {}, ae = /* @__PURE__ */ new Set();
          for (const me of X) {
            const ye = jp(
              i,
              ue,
              me,
              he,
              { stockGrain: n.stockGrainFor?.(i) ?? "" }
            );
            if (!ye.valid) {
              if (ye.source === "group") {
                const C = he.find(
                  (E) => E.rules && E.locations.includes(me)
                );
                if (C && ae.has(C.id))
                  continue;
                C && ae.add(C.id);
              }
              if (ye.message) {
                const C = new mt({
                  item: i,
                  category: ["part", "extras"],
                  message: yo(ye.violations.map(Bp), ye.message),
                  field: [["extras", s, me]],
                  shouldTranslate: !1
                });
                t.push(C);
              } else
                ye.violations.forEach((C) => {
                  const E = Vp(C, s), K = new mt({
                    item: i,
                    category: ["part", "extras"],
                    message: E,
                    field: [["extras", s, me]],
                    shouldTranslate: !1
                  });
                  t.push(K);
                });
            }
          }
        } else {
          const X = Nu(i, s, n.extrasValidationRules);
          if (!X.valid) {
            const he = (ue) => t.push(new mt({
              item: i,
              category: ["part", "extras"],
              message: ue,
              field: [["extras", s]],
              shouldTranslate: !1
            }));
            X.message ? he(yo(
              X.violations.map(Mu),
              X.message
            )) : X.violations.forEach((ue) => he($u(s, ue)));
          }
        }
      }
      if (!c || !Object.keys(c).length)
        continue;
      const p = n.getShapeExtrasCodes?.(i, s), f = Du(i, s, c, n.findExtrasPrice, p);
      f.valid || f.incompleteLocations.forEach((y) => {
        t.push(new mt({
          item: i,
          category: ["part", "extras"],
          message: "errors.extras.selection_incomplete",
          params: {
            extraType: `extras.${s}`,
            // Translation key for extra type (banding, finish, planing)
            location: _u(y, { returnKey: !0 })
            // Translation key for location
          },
          field: [["extras", s, y]]
        }));
      });
    }
}
const Zp = ["decor", "width", "thickness", "boardThickness"];
new Set(Zp);
const Jp = ["banding", "finish", "planing", "machining"], Xp = /* @__PURE__ */ new Set(["st", "p", "mm", "mb", "tm", "sm", "pm", "pa", "li", "ro", "r2"]), Qp = 15;
function vs(e) {
  return e.trim().toLowerCase().split(/[\s_-]+/).filter(Boolean);
}
function Yp(e) {
  return /[a-z]/.test(e) && /\d/.test(e);
}
function qo(e) {
  return vs(e).filter((n) => !Xp.has(n) && n.length > 1);
}
function em(e, n) {
  let t = 0;
  const a = Math.min(e.length, n.length);
  for (; t < a && e[t] === n[t]; ) t++;
  return t;
}
function tm(e) {
  return e ? typeof e == "string" ? { name: e } : e : {};
}
function Fb(e, n) {
  const t = tm(n);
  if (!t.name && !t.code && !t.material && !t.description || e.decors.length === 0) return null;
  if (t.name) {
    const p = t.name.trim().toLowerCase();
    if (p) {
      const f = e.decors.find((y) => y.value.toLowerCase() === p);
      if (f) return { value: f.value, score: 1e3, matchedOn: ["name"] };
    }
  }
  const a = /* @__PURE__ */ new Set();
  for (const p of [t.name, t.material, t.description, t.code])
    if (p)
      for (const f of qo(p)) a.add(f);
  const i = t.code || t.material ? vs(t.code || t.material || "") : [];
  let s = null, u = 0, c = [];
  for (const p of e.decors) {
    const f = qo(p.value);
    let y = 0;
    const I = [];
    if (t.name) {
      const v = t.name.trim().toLowerCase(), j = p.value.toLowerCase();
      v && (v.includes(j) || j.includes(v)) && (y += 200, I.push("name-substring"));
    }
    let P = 0;
    for (const v of f)
      a.has(v) && (y += Yp(v) ? 20 : 5, P++);
    if (P > 0 && I.push("tokens"), t.color && p.color && t.color.trim().toLowerCase() === p.color.trim().toLowerCase() && (y += 30, I.push("color")), i.length > 0) {
      let v = 0;
      for (const j of e.rows) {
        if ((j.decor?.name ?? "") !== p.value) continue;
        const X = em(i, vs(j.code));
        X > v && (v = X);
      }
      v >= 2 && (y += v * 15, I.push("code-prefix"));
    }
    y > u && (u = y, s = p, c = I);
  }
  return !s || u < Qp ? null : { value: s.value, score: u, matchedOn: c };
}
const ka = {
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
    queryable: { search: !0, sort: !0 },
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
  supplierCode: {
    label: "Supplier Code",
    // Material-level identity, separate from the shop's own `code`. Not
    // inherited onto stock and never shown to customers — its only job is to
    // carry the manufacturer's decor code so the decor-image matcher can
    // find a library picture even when the shop's own SKU doesn't resemble
    // one. See shared/decor/matchDecorImage.ts (it is scanned FIRST there).
    inputType: "string",
    scope: "material",
    importable: !0,
    csvColumn: "supplier_code",
    csvAliases: ["suppliercode", "supplier_sku", "manufacturer_code", "mfr_code", "decor_code", "decorcode"],
    csvDescription: 'Optional supplier / manufacturer code (e.g. the decor code "F037 ST76"), which may differ from your own Code. Used to match the material to an image in the decor library — when present it takes priority over Code for image matching. Not shown to customers.',
    // One value per template row. Only the catalogue-branded first row has a
    // real manufacturer decor code; own-brand rows leave it blank.
    csvExamples: ["F037 ST76", "", "", ""]
  },
  brand: {
    label: "Brand",
    inputType: "string",
    scope: "shared",
    inheritable: !0,
    queryable: { facet: !0, search: !0, sort: !0 },
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
    queryable: { facet: !0, search: !0, sort: !0 },
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
    // `shared` + `inheritable` so the description reaches the STOCK row the
    // storefront card renders. It was `scope: 'material'`, and since
    // `inheritable` is shared-scope-only it never propagated — so a shop
    // that wrote a description on its material got no "Details" button on
    // the card (CatalogueCard reads `stock.description`), while
    // library-sourced rows, which are projected WITH their description, did.
    // That made Details look library-only when nothing intended it to be.
    scope: "shared",
    inheritable: !0,
    queryable: { search: !0 },
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
    queryable: { range: !0 },
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
    queryable: { range: !0 },
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
    queryable: { facet: !0, range: !0 },
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
    // Catalogue-only: declared on MaterialCatalogueEntry, and on NEITHER
    // Material nor StockItem — a shop CSV filling this column had it dropped
    // by strict mode. Shops express thicknesses through `t` instead.
    csvTargets: ["catalogue"],
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
    queryable: { range: !0, sort: !0 },
    libraryOverridable: !0,
    importable: !0,
    defaultValue: 0,
    min: 0,
    csvAliases: ["price", "unit_price", "unitprice"],
    csvParse: "number",
    // One example carries a decimal so the downloadable template itself
    // demonstrates "." as the separator — every example was a whole number,
    // which taught the convention to nobody.
    csvDescription: 'Unit price per sheet. Use "." for decimals (45.50).',
    csvExamples: ["45.50", "90", "90", "32"]
  },
  discount: {
    label: "Discount",
    productKinds: ["material"],
    inputType: "float",
    scope: "shared",
    inheritable: !0,
    queryable: { sort: !0 },
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
    // An empty formula on a row under a material that HAS one means "price this size by the
    // global strategy instead" — a statement, not an omission.
    blankIsValue: !0,
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
  ecommerce: {
    label: "Available",
    productKinds: ["material"],
    inputType: "boolean",
    // Shared + inheritable so the storefront gate can be answered by ONE
    // stored value. `stock.ecommerce` is what every storefront query filters
    // on (see server/api/ecommerce.ts); declaring it on the material too
    // makes "hide this whole material" a single write that
    // `propagateMaterialToStocks` fans out to every non-overriding stock
    // row — which keeps the stored stock flag the resolved view, so no
    // storefront query needs a join to honour it. A stock row that sets its
    // own value pins `ecommerce` in `overrides[]` and stops following the
    // material, which is how "hide this one size" survives a later
    // material-level republish.
    scope: "shared",
    inheritable: !0,
    // Deliberately NOT libraryOverridable. Hiding a catalogue-backed entry
    // already has a purpose-built mechanism — the `exclude`/`include`
    // visibility actions, which are library-only (see
    // `sanitiseAction` in server/services/ecommerce/rule-sanitise.ts).
    // Letting a rule also set `ecommerce` would be a second way to express
    // the same intent, and `projectLibraryEntryAsStock` would then have to
    // arbitrate between them — it currently hard-codes `ecommerce: true`
    // on the row it projects, so a rule-set `false` would be silently
    // ignored. Two encodings of one rule drift; use exclude/include.
    libraryOverridable: !1,
    // Not a CSV column: the import paths set publication explicitly per
    // target, and adding a column here would change every existing
    // template. Publish after import via the editor, a rule, or the API.
    importable: !1
  },
  fullSizeOnly: {
    label: "Full size only",
    productKinds: ["material"],
    inputType: "boolean",
    scope: "shared",
    inheritable: !0,
    // Bottom rung of the ladder — every inheritable boolean needs one so the resolved value is
    // always a real boolean. Never written to a row (see `defaultValue` on the interface).
    defaultValue: !1,
    libraryOverridable: !0,
    importable: !0,
    csvAliases: ["full_size", "fullsize", "wholesheet", "whole_sheet"],
    csvParse: "boolean-yn",
    csvDescription: "Disable cut-to-size. When y, customers must purchase whole sheets only.",
    csvExamples: ["n", "n", "y", "n"]
  },
  allowExactFitShapes: {
    label: "Allow Exact Fit Shapes",
    // The per-row half of the full-stock feature. Two STORE-level switches
    // turn the feature on (`stockFilter.config.allowFullStockPurchase` for
    // the catalogue card, `options.enable.fullStock` for the cutlist column),
    // but the cutlist's full-stock toggle is gated per stock row by THIS
    // flag (isShapeFullStockAllowed in EcommerceCalculator). It was absent
    // here, so every CSV import landed `false` and each row had to be
    // toggled by hand in the inventory editor — unworkable for a real
    // catalogue, and it reads as "the full stock button is greyed out".
    inputType: "boolean",
    scope: "shared",
    inheritable: !0,
    // The store rung: a row / material with no opinion defers to the shop-wide switch. This one
    // declaration is what the catalogue card, the cutlist gate and the `resolved` cache all read.
    storeDefault: "stockFilter.config.allowFullStockPurchase",
    libraryOverridable: !0,
    importable: !0,
    csvAliases: ["allow_exact_fit", "exact_fit", "exactfit", "full_stock", "fullstock"],
    csvParse: "boolean-yn",
    csvDescription: "Allow this material to be bought as a whole sheet from the cutlist. When y, the customer can flip a part to full stock. Blank leaves the existing value.",
    csvExamples: ["y", "y", "n", "y"]
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
    queryable: { range: !0, sort: !0 },
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
    queryable: { facet: !0, sort: !0 },
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
    queryable: { facet: !0, sort: !0 },
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
    queryable: { facet: !0 },
    // `''` is the declared "None" option below — a row saying "no grain" under a grained
    // material is a real override, so a blank here is never normalised to inherit.
    blankIsValue: !0,
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
    queryable: { facet: !0, search: !0, sort: !0 },
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
    queryable: { search: !0 },
    // `[]` on a row under a tagged material is "this size carries no tags" — an override.
    blankIsValue: !0,
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
    // Leaf-granular in the ladder (`extras.banding` can be overridden while `extras.finish`
    // inherits); an explicit `null` leaf is an owned "none" — see resolveExtras in
    // shared/types/inheritance-ladder.ts.
    blankIsValue: !0,
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
}, El = Object.entries(ka).filter(([, e]) => e.inheritable).map(([e]) => e), nm = El.filter((e) => ka[e].storeDefault), am = Object.fromEntries(
  nm.map((e) => [e, ka[e].storeDefault])
);
new Set(
  Object.values(am).map((e) => e.split(".")[0])
);
new Set(
  El.filter((e) => ka[e].blankIsValue)
);
Object.entries(ka).filter(([, e]) => e.queryable && Object.values(e.queryable).some(Boolean)).map(([e]) => e);
const im = Object.entries(ka).filter(([, e]) => e.libraryOverridable).map(([e]) => e);
new Set(im);
const sm = [
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
new Set(sm);
const om = Jp, lm = (e) => e.charAt(0).toUpperCase() + e.slice(1), rm = om.map((e) => ({
  key: `extras.${e}`,
  label: lm(e),
  extrasType: e
}));
new Set(rm.map((e) => e.key));
const um = 4;
Array.from(
  { length: um },
  (e, n) => n + 1
);
function Tl(e) {
  return typeof e == "string" && e.includes(",");
}
function ys(e) {
  if (!Tl(e)) return null;
  const n = e.split(",").map((i) => parseFloat(i.trim()));
  if (n.length !== 2) return null;
  const [t, a] = n;
  return !Number.isFinite(t) || !Number.isFinite(a) || t <= 0 || a <= 0 ? null : { base: t, double: a };
}
function ma(e) {
  const n = e?.customData?.bondedThickness;
  return ys(n) ? n : Tl(e?.t) && ys(e?.t) ? e.t : null;
}
function cm(e) {
  const n = ys(ma(e));
  return n ? n.base : null;
}
function dm(e, n, t, a = (i) => Number(i)) {
  if (!(!n.length || !t.length))
    for (const i of e) {
      if (i.t === void 0 || i.t === null || i.t === "") continue;
      const s = a(i.t), u = n.findIndex((f) => a(f) === s);
      if (u === -1) continue;
      const c = t.find((f) => f.includes(u));
      if (!c) continue;
      const p = Math.min(...c.map((f) => a(n[f])));
      s > p && (i.q = a(i.q) * (s / p), i.notes = `Bond to form ${s}`, i.t = p);
    }
}
new As({});
function Bo(e, n, t) {
  const a = [], i = e.filter((s) => s.enabled !== !1);
  for (let s = 0; s < n.length; s++) {
    const u = n[s], c = _s(u, { stockGrain: t?.stockGrains?.[s] });
    for (const p of i)
      Rs(p.formula, c) || a.push({
        partIndex: s,
        partName: u.name || void 0,
        ruleName: p.name || void 0,
        message: p.message
      });
  }
  return {
    valid: a.length === 0,
    errors: a
  };
}
const Vo = [
  "barcode1",
  "barcode2",
  "room",
  "pallet",
  "drawing",
  "order",
  "colour",
  "productInfo",
  "productNumber"
], fm = Xe([
  "full_stock",
  "part_area",
  "cut_length",
  "full_stock_plus_cut_length",
  "full_stock_plus_num_parts",
  "full_stock_plus_part_perimeter",
  "roll_length"
]), Ne = (e) => ne().nullish().default(e);
T({
  // `required: true` is the FORM hint; the write accepts '' (new orgs are seeded with '' and the
  // save is debounced mid-typing). The `settings` validator reports a missing name / email.
  name: O(l().nullish(), {
    label: "Company Name",
    placeholder: "Enter your company name",
    info: "This will be displayed on your checkout page",
    required: !0,
    order: 1
  }),
  contactEmail: O(l().email().or(lt("")).nullish(), {
    label: "Contact Email",
    placeholder: "support@yourcompany.com",
    info: "Customer inquiries will be sent to this email",
    required: !0,
    order: 2
  }),
  phone: O(l().nullish(), {
    label: "Phone Number",
    placeholder: "+1 (555) 123-4567",
    info: "Optional phone number for customer contact",
    order: 3
  }),
  address: O(l().nullish(), {
    label: "Business Address",
    placeholder: "123 Main St, City, State ZIP",
    info: "Your business address (optional)",
    type: "textarea",
    order: 4
  })
});
const pm = T({
  button: O(l().nullish().default("#0e7fa6"), {
    label: "Button Color",
    info: "Primary button background color",
    type: "color",
    order: 1
  }),
  buttonText: O(l().nullish().default("#ffffff"), {
    label: "Button Text Color",
    info: "Text color on buttons",
    type: "color",
    order: 2
  }),
  headerBackground: O(l().nullish(), {
    label: "Header Background",
    info: "Background color for the header",
    type: "color",
    order: 3
  }),
  headerText: O(l().nullish(), {
    label: "Header Text Color",
    info: "Text color in the header",
    type: "color",
    order: 4
  }),
  partA: O(l().nullish(), {
    label: "Part Color A",
    info: "Primary color for parts",
    type: "color",
    order: 5
  }),
  partB: O(l().nullish(), {
    label: "Part Color B",
    info: "Secondary color for parts",
    type: "color",
    order: 6
  }),
  stock: O(l().nullish(), {
    label: "Stock Color",
    info: "Color for stock items",
    type: "color",
    order: 7
  })
});
T({
  logo: O(l().nullish(), {
    label: "Logo URL",
    placeholder: "https://yoursite.com/logo.png",
    info: "URL to your company logo image",
    order: 1
  }),
  // Live stores hold .png and .ico favicons; the write accepts any string. Whether a non-SVG
  // favicon renders is a coherence question for the `settings` validator, not a write gate.
  favicon: O(l().nullish(), {
    label: "Favicon URL",
    placeholder: "https://yoursite.com/favicon.svg",
    info: "URL to an SVG favicon.",
    order: 2
  }),
  colors: pm.nullish(),
  // Stored on every live store; no admin form control here.
  showCredit: ne().nullish()
});
const mm = Xe(["none", "flat", "per_sheet"]), Ol = Xe(["metric", "imperial"]), gm = Xe(["percentage", "free", "fixed"]), hm = Xe(["vat", "gst", "sales_tax", "none"]), bm = Xe(["exclusive", "inclusive"]), vm = T({
  enabled: O(Ne(!1), {
    label: "Enable Tax",
    info: "Apply tax to orders",
    order: 1
  }),
  type: O(hm.default("vat"), {
    label: "Tax Type",
    info: "Type of tax to apply",
    options: [
      { value: "vat", label: "VAT (Value Added Tax)" },
      { value: "gst", label: "GST (Goods & Services Tax)" },
      { value: "sales_tax", label: "Sales Tax" },
      { value: "none", label: "None" }
    ],
    order: 2
  }),
  rate: O(m().min(0).max(100).default(0), {
    label: "Tax Rate (%)",
    info: "Tax percentage to apply (e.g., 20 for 20%)",
    placeholder: "0",
    min: 0,
    max: 100,
    order: 3
  }),
  display: O(bm.default("exclusive"), {
    label: "Price Display",
    info: "How prices are displayed to customers",
    options: [
      { value: "exclusive", label: "Prices exclude tax (tax added at checkout)" },
      { value: "inclusive", label: "Prices include tax (tax shown in breakdown)" }
    ],
    order: 4
  }),
  number: O(l().nullish(), {
    label: "Tax Registration Number",
    placeholder: "e.g., GB123456789",
    info: "Your VAT/GST/Tax ID (shown on invoices)",
    order: 5
  }),
  label: O(l().nullish(), {
    label: "Tax Label",
    placeholder: "e.g., VAT, GST, Tax",
    info: "Custom label for tax (defaults to tax type)",
    order: 6
  })
});
T({
  strategy: O(fm.default("full_stock"), {
    label: "Pricing Strategy",
    info: "How to calculate prices for customer orders",
    options: [
      { value: "full_stock", label: "Full Stock Price", info: "Charge for entire stock sheets used" },
      { value: "part_area", label: "Part Area", info: "Charge based on area of parts cut" },
      { value: "cut_length", label: "Cut Length", info: "Charge based on total length of cuts" },
      { value: "full_stock_plus_cut_length", label: "Full Stock + Cut Length", info: "Combined stock and cutting charges" },
      { value: "full_stock_plus_num_parts", label: "Full Stock + Per Part", info: "Stock price plus per-part fee" },
      { value: "full_stock_plus_part_perimeter", label: "Full Stock + Part Perimeter", info: "Stock price plus a charge on the true perimeter of each part" },
      { value: "roll_length", label: "Roll Length", info: "For linear/roll stock materials" }
    ],
    order: 1
  }),
  cutLengthPrice: O(m().min(0).nullish(), {
    label: "Cut Length Price",
    info: "Price per unit of cut length",
    placeholder: "0.00",
    order: 3
  }),
  perPartPrice: O(m().min(0).nullish(), {
    label: "Per Part Price",
    info: "Additional price charged per part",
    placeholder: "0.00",
    order: 4
  }),
  // Product-level pricing formula override. Evaluated per stock at checkout
  // against the calculation result; when set, replaces the configured
  // strategy's per-stock STOCK-COST contribution only. Other strategy legs
  // (cut length, per part, perimeter) and extras (banding, finish,
  // surcharges, tax) still apply on top. Stocks with their own per-stock
  // pricingFormula (via rules / EntityEditor) take precedence. See
  // shared/formula/pricing-variables.ts for the available variable surface.
  pricingFormula: O(l().nullish(), {
    label: "Stock Pricing Formula",
    info: "Optional stock-cost override. Replaces the per-sheet stock cost only — cut-length / per-part / surcharge legs and extras still apply on top. Returns the price for ONE sheet (multiplied by quantity automatically). Example: usedFraction > 0.5 ? 150 : (usedFraction > 0.25 ? 120 : 100). Leave empty to use the strategy.",
    placeholder: "e.g. usedFraction > 0.5 ? 150 : 100",
    order: 4.5
  }),
  surchargeType: O(mm.default("none"), {
    label: "Surcharge Type",
    info: "Type of additional surcharge to apply",
    options: [
      { value: "none", label: "None" },
      { value: "flat", label: "Flat Rate" },
      { value: "per_sheet", label: "Per Sheet" }
    ],
    order: 5
  }),
  surcharge: O(m().min(0).nullish(), {
    label: "Surcharge Amount",
    info: "Amount to add as surcharge",
    placeholder: "0.00",
    order: 6
  }),
  enableOffcutPricing: O(ne().nullish(), {
    label: "Enable Offcut Pricing",
    info: "Allow selling usable offcuts at a discount",
    order: 7
  }),
  offcutMinLength: O(m().min(0).nullish(), {
    label: "Min Offcut Length",
    info: "Minimum length for sellable offcuts",
    order: 8
  }),
  offcutMinWidth: O(m().min(0).nullish(), {
    label: "Min Offcut Width",
    info: "Minimum width for sellable offcuts",
    order: 9
  }),
  offcutPricingMode: O(gm.default("percentage"), {
    label: "Offcut Pricing Mode",
    info: "How to calculate the price for sellable offcuts",
    options: [
      { value: "percentage", label: "Percentage of Stock Cost" },
      { value: "free", label: "Free" },
      { value: "fixed", label: "Fixed Price" }
    ],
    order: 10
  }),
  offcutPricingPercentage: O(m().min(0).max(100).default(100), {
    label: "Offcut Percentage",
    info: "Percentage of proportional stock cost to charge (0-100)",
    placeholder: "100",
    min: 0,
    max: 100,
    order: 11
  }),
  offcutFixedPrice: O(m().min(0).nullish(), {
    label: "Fixed Offcut Price",
    info: "Fixed price for all sellable offcuts",
    placeholder: "0.00",
    order: 12
  }),
  minBandingCharge: O(m().min(0).nullish(), {
    label: "Min Banding Charge",
    info: "Minimum charge for banding services",
    order: 13
  }),
  minFinishCharge: O(m().min(0).nullish(), {
    label: "Min Finish Charge",
    info: "Minimum charge for finishing services",
    order: 14
  }),
  minPlaningCharge: O(m().min(0).nullish(), {
    label: "Min Planing Charge",
    info: "Minimum charge for planing services",
    order: 15
  }),
  minMachiningCharge: O(m().min(0).nullish(), {
    label: "Min Machining Charge",
    info: "Minimum charge for machining services",
    order: 16
  }),
  minOrderAmount: O(m().min(0).nullish(), {
    label: "Minimum Order Amount",
    info: "Minimum order subtotal required to proceed to checkout",
    placeholder: "0.00",
    order: 17
  }),
  minOrderBehavior: O(Xe(["block", "charge"]).default("block"), {
    label: "Minimum Order Behaviour",
    info: "What happens when the order is below the minimum amount",
    options: [
      { value: "block", label: "Block checkout", info: "Prevent checkout until the minimum is reached" },
      { value: "charge", label: "Charge minimum", info: "Top up the order to the minimum amount automatically" }
    ],
    order: 18
  }),
  tax: vm.nullish(),
  // Legacy key still present on three live stores (the unit system now lives in options).
  unitSystem: Ol.nullish()
});
const ym = Xe(["km", "miles"]), km = Xe(["kg", "lbs"]), wm = [
  { value: "", label: "Select region..." },
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
  { value: "GB", label: "United Kingdom" },
  { value: "GB-ENG", label: "England" },
  { value: "GB-SCT", label: "Scotland" },
  { value: "GB-WLS", label: "Wales" },
  { value: "GB-NIR", label: "Northern Ireland" },
  { value: "IM", label: "Isle of Man" },
  { value: "JE", label: "Jersey" },
  { value: "GG", label: "Guernsey" },
  { value: "GI", label: "Gibraltar" },
  { value: "AU", label: "Australia" },
  { value: "DE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "IT", label: "Italy" },
  { value: "ES", label: "Spain" },
  { value: "NL", label: "Netherlands" },
  { value: "BE", label: "Belgium" },
  { value: "AT", label: "Austria" },
  { value: "CH", label: "Switzerland" },
  { value: "SE", label: "Sweden" },
  { value: "NO", label: "Norway" },
  { value: "DK", label: "Denmark" },
  { value: "FI", label: "Finland" },
  { value: "IE", label: "Ireland" },
  { value: "NZ", label: "New Zealand" },
  { value: "PL", label: "Poland" },
  { value: "PT", label: "Portugal" },
  { value: "CZ", label: "Czech Republic" },
  { value: "JP", label: "Japan" },
  { value: "BR", label: "Brazil" },
  { value: "MX", label: "Mexico" },
  { value: "ZA", label: "South Africa" },
  { value: "IN", label: "India" }
];
T({
  enabled: O(Ne(!1), {
    label: "Enable Shipping",
    info: "Allow shipping options for orders",
    order: 1
  }),
  originPostalCode: O(l().nullish(), {
    label: "Origin Postal Code",
    placeholder: "12345",
    info: "Your shipping origin postal/zip code",
    order: 2
  }),
  originCountry: O(l().nullish(), {
    label: "Origin Country",
    info: "Your shipping origin country",
    options: wm,
    order: 3
  }),
  distanceUnit: O(ym.default("km"), {
    label: "Distance Unit",
    info: "Unit for distance calculations",
    options: [
      { value: "km", label: "Kilometers (km)" },
      { value: "miles", label: "Miles" }
    ],
    order: 4
  }),
  weightUnit: O(km.default("kg"), {
    label: "Weight Unit",
    info: "Unit for weight calculations",
    options: [
      { value: "kg", label: "Kilograms (kg)" },
      { value: "lbs", label: "Pounds (lbs)" }
    ],
    order: 5
  }),
  requireAddress: O(ne().nullish(), {
    label: "Require Full Address",
    info: "Require complete address instead of just postal code",
    order: 6
  }),
  allowedCountries: O(Z(l()).nullish(), {
    label: "Allowed Regions",
    info: "Regions you ship to (leave empty to allow all)",
    order: 7
  }),
  restrictionMessage: O(l().nullish(), {
    label: "Region Restriction Message",
    placeholder: "We do not currently ship to your region",
    info: "Message shown when shipping is not available for a region",
    order: 8
  }),
  // Server-managed (stored encrypted by the shipping route); no admin form control.
  zipcodebaseApiKey: l().nullish()
});
const Sm = Xe(["decimal", "fraction"]), Uo = je([
  lt(0),
  lt(1),
  lt(2)
]), xm = T({
  locale: O(l().default("en-US"), {
    label: "Locale",
    info: "Language and region for formatting",
    options: [
      { value: "en-US", label: "English (US)" },
      { value: "en-GB", label: "English (UK)" },
      { value: "en-AU", label: "English (Australia)" },
      { value: "de-DE", label: "Deutsch (Germany)" },
      { value: "fr-FR", label: "Français (France)" },
      { value: "es-ES", label: "Español (Spain)" },
      { value: "it-IT", label: "Italiano (Italy)" },
      { value: "nl-NL", label: "Nederlands (Netherlands)" },
      { value: "pt-BR", label: "Português (Brazil)" },
      { value: "pl-PL", label: "Polski (Poland)" },
      { value: "sv-SE", label: "Svenska (Sweden)" },
      { value: "da-DK", label: "Dansk (Denmark)" },
      { value: "nb-NO", label: "Norsk (Norway)" },
      { value: "fi-FI", label: "Suomi (Finland)" }
    ],
    order: 1
  }),
  currency: O(l().default("USD"), {
    label: "Currency",
    info: "Currency for pricing display",
    options: [
      { value: "USD", label: "USD - US Dollar" },
      { value: "EUR", label: "EUR - Euro" },
      { value: "GBP", label: "GBP - British Pound" },
      { value: "CAD", label: "CAD - Canadian Dollar" },
      { value: "AUD", label: "AUD - Australian Dollar" },
      { value: "NZD", label: "NZD - New Zealand Dollar" },
      { value: "CHF", label: "CHF - Swiss Franc" },
      { value: "SEK", label: "SEK - Swedish Krona" },
      { value: "NOK", label: "NOK - Norwegian Krone" },
      { value: "DKK", label: "DKK - Danish Krone" },
      { value: "PLN", label: "PLN - Polish Zloty" },
      { value: "JPY", label: "JPY - Japanese Yen" }
    ],
    order: 2
  }),
  unitSystem: O(Ol.default("metric"), {
    label: "Unit System",
    info: "Measurement units for display and pricing",
    options: [
      { value: "metric", label: "Metric (mm)" },
      { value: "imperial", label: "Imperial (inches)" }
    ],
    order: 3
  }),
  numberFormat: O(Sm.default("decimal"), {
    label: "Number Format",
    info: "How to display measurements",
    options: [
      { value: "decimal", label: "Decimal (e.g., 25.4)" },
      { value: "fraction", label: 'Fraction (e.g., 1")' }
    ],
    order: 3
  }),
  decimalPlaces: O(m().int().min(0).max(10).nullish().default(2), {
    label: "Decimal Places",
    info: "Number of decimal places for measurements",
    min: 0,
    max: 10,
    order: 4
  }),
  fractionRoundTo: O(m().int().nullish().default(0), {
    label: "Fraction Round To",
    info: "Denominator for fraction rounding (e.g., 16 for 1/16)",
    order: 5
  }),
  orientationModel: O(Uo.nullish().default(0), {
    label: "Orientation Model",
    info: "How parts are oriented relative to grain",
    options: [
      { value: 0, label: "0 - Default", info: "Used by the API. Part orientation is defined by the orientationLock property; the l and w values do not affect rotation. orientationLock = 'l' aligns the longer side of the part with the longer side of the stock." },
      { value: 1, label: "1 - Orientation controlled by L/W", info: "Orientation is driven by the part's l and w properties — the part is rotated so the side defined by l is aligned with the longer side of the stock. The rotation button allows free rotation, overriding the l/w-defined orientation. Sides are not mapped in outputs." },
      { value: 2, label: "2 - Grain controlled by L/W", info: "The l property determines the grain dimension. The rotation button allows free rotation, overriding the l/w-defined orientation. Banding L values match the L column values, and L/W columns are updated in exports (e.g. CSV) to match local expectations. Sides are not mapped in outputs." }
    ],
    order: 6
  }),
  maxParts: O(m().int().min(0).nullish().default(0), {
    label: "Max Parts",
    info: "Maximum number of parts per order (0 = unlimited)",
    min: 0,
    order: 7
  }),
  minDimension: O(m().min(0).nullish().default(0), {
    label: "Min Dimension",
    info: "Minimum allowed part dimension",
    min: 0,
    order: 8
  }),
  partsPerPage: O(Re((e) => e ?? void 0, m().int().min(1).default(10)), {
    label: "Parts Per Page",
    info: "Number of parts to show per page",
    min: 1,
    order: 9
  }),
  resultOrientationModel: O(Uo.nullish().default(0), {
    label: "Result Orientation Model",
    info: "Orientation model used for result display",
    options: [
      { value: 0, label: "0 - Default" },
      { value: 1, label: "1 - Orientation controlled by L/W" },
      { value: 2, label: "2 - Grain controlled by L/W" }
    ],
    order: 10
  }),
  partTrim: O(m().min(0).nullish().default(0), {
    label: "Part Trim",
    info: "Amount to trim from parts (mm)",
    min: 0,
    order: 11
  }),
  // Stored as an ARRAY on live stores (the admin writes one); the comma-separated string is the
  // embed-attribute form. Both are accepted.
  fieldOrder: O(je([l(), Z(l())]).nullish(), {
    label: "Field Order",
    placeholder: "material, t, l, w, q, name",
    info: "Comma-separated list of field IDs to control display order",
    order: 12
  })
}), Al = T({
  banding: O(Ne(!1), {
    label: "Enable Banding",
    info: "Allow edge banding options",
    order: 1
  }),
  finish: O(Ne(!1), {
    label: "Enable Finish",
    info: "Allow finishing options",
    order: 2
  }),
  planing: O(Ne(!1), {
    label: "Enable Planing",
    info: "Allow planing options",
    order: 3
  }),
  machining: O(Ne(!1), {
    label: "Enable Machining",
    info: "Allow machining operations (holes, corners)",
    order: 4
  }),
  orientation: O(Ne(!0), {
    label: "Enable Orientation",
    info: "Allow part orientation control",
    order: 5
  }),
  diagram: O(Ne(!0), {
    label: "Show Diagram",
    info: "Display cutting diagram",
    order: 6
  }),
  partName: O(Ne(!0), {
    label: "Enable Part Names",
    info: "Allow naming individual parts",
    order: 7
  }),
  csvImport: O(Ne(!1), {
    label: "Enable CSV Import",
    info: "Allow importing parts from CSV",
    order: 8
  }),
  csvTemplate: O(Ne(!1), {
    label: "Show CSV Template Link",
    info: 'Show a "Download CSV template" link next to the parts CSV import. Requires CSV Import to be enabled.',
    order: 8.5
  }),
  duplicate: O(Ne(!1), {
    label: "Enable Duplicate Part",
    info: "Show a duplicate button on each part row, copying it into the list below the original",
    order: 8.7
  }),
  groups: O(Ne(!1), {
    label: "Enable Part Groups",
    info: "Let customers define groups of parts that should be cut together from the same stock piece",
    order: 8.6
  }),
  pagination: O(Ne(!1), {
    label: "Enable Pagination",
    info: "Paginate parts list",
    order: 9
  }),
  progressNumber: O(Ne(!0), {
    label: "Show Progress Numbers",
    info: "Display progress/step numbers in the UI",
    order: 10
  }),
  debug: O(Ne(!1), {
    label: "Debug Mode",
    info: "Enable debug output for troubleshooting (not recommended for production)",
    order: 11
  }),
  fullStock: O(Ne(!1), {
    label: "Enable Full Stock",
    info: "Allow customers to purchase entire stock sheets without cutting",
    order: 12
  }),
  offcuts: O(Ne(!1), {
    label: "Enable Offcuts",
    info: "Allow offcuts to be used in checkout calculations",
    order: 14
  }),
  projectReference: O(Ne(!1), {
    label: "Enable Project Reference",
    info: "Let customers label each basket item with their own project or job name. The reference follows the item into the order, the PDF and any order webhook.",
    order: 15
  }),
  // Storefront-only (embed attributes / WordPress settings); no admin control.
  focus: Ne(!0),
  click: Ne(!0),
  imageUpload: Ne(!1),
  diagramNav: Ne(!1)
});
xm.extend({
  enable: Al.nullish()
});
T({
  enabled: O(Ne(!1), {
    label: "Enable Stripe",
    info: "Enable Stripe payment processing",
    order: 1
  }),
  publishableKey: O(l().nullish(), {
    label: "Publishable Key",
    placeholder: "pk_live_...",
    info: "Your Stripe publishable key",
    order: 2
  }),
  secretKey: O(l().nullish(), {
    label: "Secret Key",
    placeholder: "sk_live_...",
    info: "Your Stripe secret key (stored encrypted)",
    order: 3
  })
});
T({
  // Ids are tested TRIMMED: one live store holds "       GTM-…" and a rejected save would lock
  // the admin out of the very tab that fixes it. The validator reports the whitespace.
  gaMeasurementId: O(l().nullish().refine(
    (e) => !e || /^G-[A-Z0-9]+$/.test(e.trim()),
    { message: "GA Measurement ID must be in format G-XXXXXXXX" }
  ), {
    label: "GA Measurement ID",
    placeholder: "G-XXXXXXXX",
    info: "Google Analytics 4 Measurement ID",
    order: 1
  }),
  enabled: O(Ne(!0), {
    label: "Enable Tracking",
    info: "Enable or disable analytics tracking",
    order: 2
  }),
  gtmContainerId: O(l().nullish().refine(
    (e) => !e || /^GTM-[A-Z0-9]+$/.test(e.trim()),
    { message: "GTM Container ID must be in format GTM-XXXXXXX" }
  ), {
    label: "GTM Container ID",
    placeholder: "GTM-XXXXXXX",
    info: "Google Tag Manager Container ID",
    order: 3
  }),
  gtmEnabled: O(Ne(!1), {
    label: "Enable Google Tag Manager",
    info: "Enable or disable Google Tag Manager",
    order: 4
  })
});
const Im = Xe(["postmark", "gmail"]), Pm = T({
  pending: O(Ne(!1), {
    label: "Status: Pending",
    info: 'Notify the customer when the order is set to "pending"',
    order: 1
  }),
  cut: O(Ne(!1), {
    label: "Status: Cut",
    info: "Notify the customer when their parts have been cut",
    order: 2
  }),
  complete: O(Ne(!0), {
    label: "Status: Complete",
    info: "Notify the customer when the order is marked complete",
    order: 3
  }),
  dispatched: O(Ne(!0), {
    label: "Status: Dispatched",
    info: "Notify the customer when the order has been dispatched/shipped",
    order: 4
  }),
  cancelled: O(Ne(!0), {
    label: "Status: Cancelled",
    info: "Notify the customer when the order is cancelled",
    order: 5
  })
}), Cm = T({
  orderPlaced: O(Ne(!0), {
    label: "Order Placed",
    info: "Send the customer a confirmation when an order is placed (recommended)",
    order: 1
  }),
  companyOrderNotification: O(Ne(!0), {
    label: "Internal Order Notification",
    info: "Send your company a notification when an order is placed",
    order: 2
  }),
  quoteSent: O(Ne(!0), {
    label: "Quote Sent",
    info: "Send the customer their quote when generated",
    order: 3
  }),
  refundIssued: O(Ne(!0), {
    label: "Refund Issued",
    info: "Notify the customer when a refund is issued",
    order: 4
  }),
  statusChanges: Pm.default({
    pending: !1,
    cut: !1,
    complete: !0,
    dispatched: !0,
    cancelled: !0
  })
});
T({
  enabled: O(Ne(!1), {
    label: "Enable Email",
    info: "Enable email notifications for orders",
    order: 1
  }),
  provider: O(Im.default("postmark"), {
    label: "Email Provider",
    info: "Select your email service provider",
    options: [
      { value: "postmark", label: "Postmark" },
      { value: "gmail", label: "Gmail (Google Workspace)" }
    ],
    order: 2
  }),
  // Postmark-specific fields
  apiKey: O(l().nullish(), {
    label: "Server Token",
    placeholder: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    info: "Your Postmark Server Token (stored encrypted)",
    type: "password",
    order: 3
  }),
  // Gmail-specific fields (OAuth2)
  clientId: O(l().nullish(), {
    label: "Client ID",
    placeholder: "xxxxxxxxxxxx.apps.googleusercontent.com",
    info: "Google OAuth2 Client ID from your Cloud Console",
    order: 4
  }),
  clientSecret: O(l().nullish(), {
    label: "Client Secret",
    placeholder: "GOCSPX-xxxxxxxxxxxxxxxxxx",
    info: "Google OAuth2 Client Secret (stored encrypted)",
    type: "password",
    order: 5
  }),
  refreshToken: O(l().nullish(), {
    label: "Refresh Token",
    placeholder: "1//xxxxxxxxxxxxxxxxxxxxxxxxxx",
    info: "OAuth2 Refresh Token from OAuth Playground",
    type: "password",
    order: 6
  }),
  // Common fields
  fromEmail: O(l().email().or(lt("")).nullish(), {
    label: "From Email",
    placeholder: "orders@yourcompany.com",
    info: "Sender email address",
    order: 7
  }),
  fromName: O(l().nullish(), {
    label: "From Name",
    placeholder: "Your Company",
    info: "Display name for the sender",
    order: 8
  }),
  notifications: Cm.default({
    orderPlaced: !0,
    companyOrderNotification: !0,
    quoteSent: !0,
    refundIssued: !0,
    statusChanges: {
      pending: !1,
      cut: !1,
      complete: !0,
      dispatched: !0,
      cancelled: !0
    }
  })
});
const Fl = Xe(["select", "multiselect", "range", "boolean", "search"]), Nl = Xe(["grid", "list"]), Ml = Xe(["asc", "desc"]), Lm = T({
  field: O(l(), {
    label: "Field",
    info: "Property name to filter on (e.g., material, t, cost, color)",
    placeholder: "material",
    required: !0,
    order: 1
  }),
  type: O(Fl, {
    label: "Filter Type",
    info: "Type of filter control",
    options: [
      { value: "select", label: "Single Select" },
      { value: "multiselect", label: "Multi Select" },
      { value: "range", label: "Range Slider" },
      { value: "boolean", label: "Checkbox" },
      { value: "search", label: "Search" }
    ],
    order: 2
  }),
  label: O(l(), {
    label: "Label",
    info: "Display label for the filter",
    placeholder: "Material",
    required: !0,
    order: 3
  }),
  custom: O(Ne(!1), {
    label: "Custom Property",
    info: "Whether this is a custom property (not standard stock field)",
    order: 4
  }),
  min: O(m().nullish(), {
    label: "Min Value",
    info: "Minimum value for range filter",
    order: 5
  }),
  max: O(m().nullish(), {
    label: "Max Value",
    info: "Maximum value for range filter",
    order: 6
  }),
  step: O(m().nullish(), {
    label: "Step",
    info: "Step size for range filter",
    order: 7
  }),
  visible: O(Ne(!0), {
    label: "Visible",
    info: "Whether filter is visible to customers",
    order: 8
  }),
  order: O(m().int().nullish(), {
    label: "Display Order",
    info: "Order in which filter appears",
    order: 9
  }),
  // Storefront-side controls with no admin form control (excluded there).
  options: Z(T({
    label: l(),
    value: Jt()
  })).nullish(),
  collapsible: Ne(!0)
}), Em = T({
  field: O(l().default("cost"), {
    label: "Sort Field",
    info: "Default field to sort by",
    order: 1
  }),
  order: O(Ml.default("asc"), {
    label: "Sort Order",
    info: "Default sort direction",
    options: [
      { value: "asc", label: "Ascending" },
      { value: "desc", label: "Descending" }
    ],
    order: 2
  }),
  label: l().nullish()
}), $a = T({
  availableFilters: Z(Lm).default([]),
  sortOptions: Z(l()).default(["cost", "material", "t"]),
  defaultSort: Em.default({ field: "cost", order: "asc" }),
  displayMode: O(Nl.default("grid"), {
    label: "Display Mode",
    info: "Default display mode for stock items",
    options: [
      { value: "grid", label: "Grid View" },
      { value: "list", label: "List View" }
    ],
    order: 1
  }),
  itemsPerPage: O(m().int().positive().default(20), {
    label: "Items Per Page",
    info: "Number of stock items to show per page",
    min: 1,
    max: 100,
    order: 2
  }),
  enableSearch: O(Ne(!0), {
    label: "Enable Search",
    info: "Allow customers to search stock items",
    order: 3
  }),
  allowMultipleSelection: O(Ne(!0), {
    label: "Allow Multiple Selection",
    info: "Allow selecting multiple stock items",
    order: 4
  }),
  maxSelection: O(m().int().positive().nullish(), {
    label: "Max Selection",
    info: "Maximum number of stock items that can be selected",
    order: 5
  }),
  // Full-stock purchase: when enabled, catalogue cards show an "Add sheet" button + quantity
  // stepper to buy whole/uncut sheets straight to the basket, skipping the cut-list step. This
  // is the store rung of the `allowExactFitShapes` inheritance ladder (see ecommerce-fields.ts
  // `storeDefault`) — off by default so cut-to-size-only stores are unaffected.
  allowFullStockPurchase: O(Ne(!1), {
    label: "Allow Full Stock Purchase",
    info: "Let customers buy whole, uncut sheets straight from the catalogue",
    order: 6
  }),
  // Present on live stores; the storefront reads it. No admin control.
  mode: l().nullish()
});
T({
  // The default IS the section's own defaults — a hand-written literal drifts the moment a key
  // gains a default (zod v4 types `.default()` against the OUTPUT, so it also stopped compiling).
  config: $a.default(() => $a.parse({})),
  // Present on live stores alongside `config`.
  enabled: ne().nullish(),
  serverMode: ne().nullish()
});
T({
  enabled: O(Ne(!1), {
    label: "Enable Configurator",
    info: "When enabled, customers enter parameters and the configurator builds panels/hardware from a spec",
    order: 1
  }),
  source: O(Xe(["url", "inline"]).default("inline"), {
    label: "Configurator Source",
    info: "Where the configurator specification is stored",
    options: [
      { value: "inline", label: "Inline (stored in settings)" },
      { value: "url", label: "External URL" }
    ],
    order: 2
  }),
  url: O(l().url().or(lt("")).nullish(), {
    label: "Configurator URL",
    placeholder: "https://example.com/spec.json",
    info: "URL to external configurator specification JSON file",
    order: 3
  }),
  spec: Jt().nullish()
});
const jo = T({
  min: O(m().min(0).nullish(), {
    label: "Min",
    info: "Minimum value",
    min: 0,
    order: 1
  }),
  max: O(m().min(0).nullish(), {
    label: "Max",
    info: "Maximum value",
    min: 0,
    order: 2
  })
}).nullish(), Tm = T({
  primaryMin: O(m().min(0).nullish(), {
    label: "Primary Min",
    info: "At least one side must be ≥ this value",
    min: 0,
    order: 1
  }),
  secondaryMin: O(m().min(0).nullish(), {
    label: "Secondary Min",
    info: "The other side must be ≥ this value",
    min: 0,
    order: 2
  })
});
T({
  enabled: O(Ne(!1), {
    label: "Enable Part Rules",
    info: "Apply dimension constraints to customer parts",
    order: 0
  }),
  longSide: jo,
  shortSide: jo,
  crossDimensionalRule: Tm.nullish(),
  formula: O(l().nullish(), {
    label: "Validation Formula",
    placeholder: "(l * w) > 100",
    info: "JavaScript expression using l, w, longSide, shortSide. Must evaluate to true to pass.",
    order: 1
  }),
  message: O(l().nullish(), {
    label: "Custom Error Message",
    placeholder: "Part dimensions do not meet requirements",
    info: "Custom message shown when validation fails",
    order: 2
  })
});
const Om = Xe(["string", "float", "integer", "select", "checkbox"]);
T({
  // `required: true` is the form hint; a freshly added row autosaves with '' before it is typed.
  id: O(l(), {
    label: "Field ID",
    placeholder: "custom_field_1",
    info: "Unique identifier for this field (no spaces)",
    required: !0,
    order: 1
  }),
  label: O(l(), {
    label: "Display Label",
    placeholder: "My Custom Field",
    info: "Label shown to customers",
    required: !0,
    order: 2
  }),
  type: O(Om.default("string"), {
    label: "Field Type",
    info: "Type of input control",
    options: [
      { value: "string", label: "Text" },
      { value: "float", label: "Decimal Number" },
      { value: "integer", label: "Whole Number" },
      { value: "select", label: "Dropdown" },
      { value: "checkbox", label: "Checkbox" }
    ],
    order: 3
  }),
  placeholder: O(l().nullish(), {
    label: "Placeholder",
    placeholder: "Enter value...",
    info: "Hint text shown in empty field",
    order: 4
  }),
  defaultValue: O(je([l(), m(), ne()]).nullish(), {
    label: "Default Value",
    info: "Initial value for the field",
    order: 5
  }),
  required: O(Ne(!1), {
    label: "Required",
    info: "Whether this field must be filled",
    order: 6
  }),
  min: O(m().nullish(), {
    label: "Min Value",
    info: "Minimum value (for numeric fields)",
    order: 7
  }),
  max: O(m().nullish(), {
    label: "Max Value",
    info: "Maximum value (for numeric fields)",
    order: 8
  }),
  options: O(Z(T({
    value: l(),
    label: l()
  })).nullish(), {
    label: "Options",
    info: "Choices for dropdown fields",
    order: 9
  })
});
T({
  enabled: O(Ne(!1), {
    label: "Enable Inventory Management",
    info: "When enabled, you can optionally deduct stock quantities when marking orders as cut",
    order: 1
  })
});
const Am = T({
  id: O(l(), {
    label: "Rule ID",
    info: "Unique identifier for this rule",
    required: !0,
    order: 1
  }),
  enabled: O(Ne(!0), {
    label: "Enabled",
    info: "Whether this rule is active",
    order: 2
  }),
  name: O(l().nullish(), {
    label: "Rule Name",
    placeholder: "Minimum Part Size",
    info: "User-friendly name for this rule",
    order: 3
  }),
  formula: O(l(), {
    label: "Formula",
    placeholder: "l > 100 && w > 50",
    info: "Condition that must evaluate to true for part to be valid",
    required: !0,
    order: 4
  }),
  message: O(l(), {
    label: "Error Message",
    placeholder: "Parts must be at least 100mm x 50mm",
    info: "Message shown when validation fails",
    required: !0,
    order: 5
  })
});
T({
  enabled: O(Ne(!1), {
    label: "Enable Custom Validation",
    info: "Enable formula-based validation rules for parts",
    order: 1
  }),
  rules: Z(Am).default([])
});
l().nullish(), l().nullish(), m().nonnegative().nullish(), m().nonnegative().nullish();
const Fm = T({
  longSide: Ln,
  shortSide: Ln,
  t: Ln,
  formula: l().optional(),
  message: l().optional()
}).optional(), mi = T({
  // Unique identifier for this group (used internally)
  id: l().min(1),
  // Display label for the group (shown in UI)
  label: l().min(1),
  // Array of location strings in this group
  // Examples: ['side.l1', 'side.l2'], ['face.a', 'face.b']
  locations: Z(l().min(1)).min(1),
  // Optional price override for this group
  // When set, this price will be used instead of calculating from individual locations
  price: m().optional(),
  // Hide individual location inputs when this group is enabled
  // When true, only shows the group control, hiding the individual face/side inputs
  hideIndividualLocations: ne().optional().default(!1),
  // Validation rules that apply when using this group
  // These rules apply when any location in the group is selected
  rules: Fm
}), Nm = T({
  banding: Z(mi).optional(),
  finish: Z(mi).optional(),
  planing: Z(mi).optional()
}).optional(), Mm = Xe(["decimal", "fraction"]), $m = Xe(["metric", "imperial"]), Qe = (e) => e ?? void 0, _n = (e) => {
  if (e == null) return;
  if (typeof e != "string" || e.trim() === "") return e;
  const n = Number(e);
  return Number.isFinite(n) ? n : e;
}, Dm = (e) => {
  if (e != null)
    return typeof e == "string" ? e.split(",").map((n) => n.trim()).filter(Boolean) : e;
}, Go = 50, _m = Re(
  // A bare string is the common case — `labelFields: [ 'room', 'order' ]`.
  (e) => typeof e == "string" ? { id: e } : e,
  T({
    id: l().refine(
      (e) => Vo.includes(e),
      { message: `Unknown label field — expected one of: ${Vo.join(", ")}` }
    ),
    label: Re(Qe, l().optional())
  })
), Rm = Xe(Ru), Wo = Re(_n, je([
  lt(0),
  lt(1),
  lt(2)
]).catch(0)), qm = T({
  // Base diagram colors (these would come from @FE/diagram/main).
  // Stored nulls clear to "unset" — see the read-side leniency note above.
  partA: Re(Qe, l().optional()),
  partB: Re(Qe, l().optional()),
  partSelected: Re(Qe, l().optional()),
  stock: Re(Qe, l().optional()),
  text: Re(Qe, l().optional()),
  // Checkout-specific colors. The write contract's `brandingColorsSchema`
  // leaves are `.nullish()` (clearing a colour stores `null`; a never-set
  // store omits the key) and `Ecommerce.vue`'s initCheckout copies
  // `branding.colors` onto `options.colors` verbatim — so a bare `z.string()`
  // here threw the whole storefront init for a contract-legal store.
  // Defaulting (rather than `.optional()`) because the consumer does NOT
  // handle undefined: EcommerceCalculator.vue's containerStyles calls
  // `adjustColor( options.colors.button, -8 )`, which does `.replace` on the
  // value. The pair matches the write gate's defaults and EcommerceAdmin.vue's
  // wholly-falsy-colors backfill exactly.
  button: Re(Qe, l().default("#0e7fa6")),
  buttonText: Re(Qe, l().default("#ffffff"))
}), Bm = T({
  // Localization
  locale: Re(Qe, l().default("en-US")),
  currency: Re(Qe, l().default("USD")),
  apiVersion: Re(_n, m().min(2).default(3)),
  // Unit system (metric or imperial)
  unitSystem: Re(Qe, $m.default("metric")),
  // Number formatting
  numberFormat: Re(Qe, Mm.default("decimal")),
  decimalPlaces: Re(_n, m().min(0).max(10).default(2)),
  fractionRoundTo: Re(_n, m().default(0)),
  // Stock configuration
  stockSelection: Re(Qe, Rm.optional()),
  stockGrain: Re(Qe, Pi.optional()),
  // Part configuration
  minSpacing: Re(Qe, al.optional()),
  maxParts: Re(_n, m().min(0).default(0)),
  orientationModel: Wo.default(0),
  resultOrientationModel: Wo.default(0),
  minDimension: Re(_n, m().min(0).default(0)),
  partTrim: Re(_n, m().min(0).optional()),
  partsPerPage: Re(_n, m().min(1).default(10)),
  // UI configuration
  debug: Re(Qe, ne().default(!1)),
  enable: Re(Qe, Al.default({
    banding: !1,
    finish: !1,
    planing: !1,
    orientation: !0,
    diagram: !0,
    focus: !0,
    machining: !1,
    csvImport: !1,
    csvTemplate: !1,
    duplicate: !1,
    groups: !1,
    click: !0,
    partName: !0,
    progressNumber: !0,
    pagination: !1,
    fullStock: !1,
    imageUpload: !1,
    diagramNav: !1,
    offcuts: !1,
    projectReference: !1,
    debug: !1
  })),
  colors: Re(Qe, qm.default({
    button: "#0e7fa6",
    buttonText: "#ffffff"
  })),
  // Custom fields
  customFields: Re(Qe, Z(Se()).optional()),
  fieldOrder: Re(Dm, Z(l()).optional()),
  // Saw label-printer fields offered as per-part columns
  labelFields: Re(Qe, Z(_m).optional()),
  /**
   * JOB-level saw label-printer fields — the host sets these, the customer
   * never types them, so they belong here rather than in `labelFields` (which
   * is only the per-part column config). Same shape as the V3 request's
   * top-level `labels`; sent verbatim with the calculation, so a storefront
   * order and an API job produce the same PTX JOBS.CUSTOMER.
   */
  labels: Re(Qe, Ss.optional()),
  // Extras location filtering
  bandingLocations: Re(Qe, Z(ji).optional()),
  finishLocations: Re(Qe, Z(ji).optional()),
  planingLocations: Re(Qe, Z(ji).optional()),
  // Extras location groups
  extrasLocationGroups: Re(Qe, Nm),
  // Extras validation rules
  extrasValidationRules: Re(Qe, qp),
  /**
   * Store-wide "customers may buy whole/uncut sheets"
   * (`stockFilter.config.allowFullStockPurchase`), shipped to the calculator
   * so the cutlist's full-stock toggle can default from it. A stock row's
   * tri-state `allowExactFitShapes` overrides it in either direction.
   */
  allowFullStockPurchase: Re(Qe, ne().optional())
}), Ta = T({
  min: m().min(0).nullable().optional(),
  max: m().min(0).nullable().optional()
}).nullable().optional(), Vm = T({
  // Master toggle for the feature. Server gates on this; consumers don't need to.
  // The write contract stores `flag( false )` = `boolean().nullish()` — a cleared
  // admin toggle is `null` and must read as unset (consumers use `=== true` /
  // truthy semantics), not throw the storefront init.
  enabled: Re(Qe, ne().optional()),
  // Orientation-independent dimension constraints
  // longSide = the larger of l/w, shortSide = the smaller of l/w
  longSide: Ta,
  shortSide: Ta,
  // Direct dimension constraints (as stored by admin panel)
  l: Ta,
  w: Ta,
  t: Ta,
  // Cross-dimensional rules
  // For complex scenarios like "one side must be >= 100mm, the other >= 50mm"
  crossDimensionalRule: T({
    // At least one side must be >= primaryMin
    primaryMin: m().min(0).nullable().optional(),
    // The other side must be >= secondaryMin
    secondaryMin: m().min(0).nullable().optional()
  }).nullable().optional(),
  // Formula-based validation using JavaScript expression
  // Formula can reference: l, w, longSide, shortSide
  // Examples: "(l * w) > 100", "longSide >= 50"
  formula: l().nullable().optional(),
  // Custom validation message (optional)
  message: l().nullable().optional()
});
function Um(e, n, t) {
  const a = [], i = e.l || 0, s = e.w || 0, u = e.longSide ?? Math.max(i, s), c = e.shortSide ?? Math.min(i, s), p = (f, y, I) => {
    I != null && (I.min !== void 0 && I.min !== null && y < I.min && a.push({
      valid: !1,
      dimension: f,
      value: y,
      constraint: "min",
      limit: I.min
    }), I.max !== void 0 && I.max !== null && y > I.max && a.push({
      valid: !1,
      dimension: f,
      value: y,
      constraint: "max",
      limit: I.max
    }));
  };
  if (p("longSide", u, n.longSide), p("shortSide", c, n.shortSide), p("longSide", i, n.l), p("shortSide", s, n.w), p("t", Number(e.t) || 0, n.t), n.crossDimensionalRule) {
    const { primaryMin: f, secondaryMin: y } = n.crossDimensionalRule, I = e.l || 0, P = e.w || 0;
    if (f != null && y != null) {
      const v = I >= f && P >= y, j = P >= f && I >= y;
      !v && !j && a.push({
        valid: !1,
        dimension: "crossDimensional",
        constraint: "crossDimensional",
        message: n.message || `At least one side must be ≥ ${f} mm and the other side must be ≥ ${y} mm`
      });
    }
  }
  return n.formula && (Rs(n.formula, _s(e, { stockGrain: t?.stockGrain })) || a.push({
    valid: !1,
    dimension: "longSide",
    value: e.longSide || 0,
    constraint: "min",
    limit: 0,
    message: n.message || "Part does not meet validation requirements"
  })), {
    valid: a.length === 0,
    violations: a
  };
}
function jm(e) {
  if (e.message)
    return e.message;
  if (e.constraint === "crossDimensional")
    return "Part dimensions do not meet requirements";
  const n = Ps(String(e.dimension));
  return Is({
    dimensionName: n,
    constraint: e.constraint === "max" ? "max" : "min",
    limit: e.limit ?? 0,
    value: e.value ?? 0,
    subject: "Part"
  });
}
const Gm = ve(
  l(),
  m().min(0)
).default({}), Wm = T({
  banding: l().optional(),
  finish: l().optional(),
  planing: l().optional(),
  machining: l().optional()
}).optional(), Km = T({
  name: l().trim().min(1),
  db_id: l().optional(),
  code: l().optional(),
  brand: l().optional(),
  variant: l().optional(),
  finish: l().optional(),
  // Raw `material` label from source stock — preserved when the source
  // data uses it as the friendly product name (typical WordPress / widget
  // shape: `material: "Birch Plywood", name: "SKU-123"`). The catalogue
  // flow doesn't set this; it carries identity on `name` + `code` instead.
  material: l().optional(),
  displayName: l().optional(),
  imageUrl: l().optional(),
  color: l().optional(),
  colorHex: l().optional(),
  thicknesses: Z(
    je([
      l().transform((e) => {
        const n = parseFloat(e);
        return isNaN(n) ? e : n;
      }),
      m()
    ])
  ).min(1),
  widths: Z(
    je([
      l().transform((e) => {
        const n = parseFloat(e);
        return isNaN(n) ? e : n;
      }),
      m()
    ])
  ).optional(),
  // Unique (l, w) sheet sizes available for this material across all
  // thicknesses. Populated for panel stock only — linear stock uses `widths`
  // above for its single-dimension variant axis. The full-stock dialog uses
  // this list to let the customer pick which sheet size they're buying when
  // more than one is available for the chosen material + thickness.
  dimensions: Z(T({
    l: m(),
    w: m()
  })).optional(),
  extras: Wm,
  fullSizeOnly: ne().optional()
}), as = T({
  labels: Z(l()).default([]),
  pricing: ve(l(), m().min(0)).default({}),
  options: Se().optional(),
  keys: Z(l()).optional(),
  // if not all the default keys should be set
  locations: Z(l()).optional(),
  // available locations for this extras type
  groups: Z(mi).optional(),
  // custom location groups
  rules: Se().optional(),
  // validation rules for this extras type
  displayNames: ve(l(), l()).optional(),
  // slug key → product name for dropdown display
  codes: ve(l(), l()).optional(),
  // tuple key → SKU (WC flow: built from variation SKUs for the cutlist CSV)
  maxGap: m().optional(),
  // banding-only: max gap (mm) between part thickness and strip width (catalogue picker)
  perSide: ne().optional(),
  // banding-only: catalogue picker renders one decor cascade per edge instead of one shared SKU
  // banding-only, per-org opt-in: oversize-and-recut for parts too small to band
  // directly. When enabled, the storefront blocks only the hard blocks (spec §3
  // A/B/C) and silently feeds an oversized BLANK to the optimiser + tags the cut
  // file for recoverable parts (data/utils/extras/edge-banding-recut.ts). Limits
  // default to the machine's 140mm edge / 70mm depth.
  recut: T({
    enabled: ne().optional(),
    minEdgeLength: m().optional(),
    minPanelDepth: m().optional()
  }).optional(),
  defaultPrice: m().optional(),
  // fallback per-metre rate for catalogue-linked banding SKUs not in `pricing`
  // True when the server included any catalogue-linked extra (sourceCatalogueKey set) of this type.
  // Drives the storefront calculator out of legacy-global fallback mode so the org's full catalogue
  // (e.g. ~1,700 Egger SKUs in `pricing`, kept for cart-side lookup) doesn't leak onto materials
  // that never linked it. See `getShapeExtrasConfig` in EcommerceCalculator.vue.
  containsCatalogueLinked: ne().optional(),
  // Compound-key pricing for group-mode extras, keyed `<extraKey>|<groupId>`.
  // Kept in a sibling field (not merged into `pricing`) so `validateExtrasCompleteness`
  // doesn't see the `|` and mis-derive `maxPricingLevels` — see the EcommerceCalculator
  // `initExtra` comment. Consumed at the cart-total site, not by the widget itself.
  groupPricing: ve(l(), m()).optional(),
  // Per-code pricing formulas. When a formula exists for a code, both the
  // inline per-feature preview AND the cart total evaluate the formula
  // instead of multiplying the flat rate. Fanned out per-code by the
  // server's `buildExtrasConfig` so one Extra → many code entries.
  formulas: ve(l(), l()).optional()
});
T({
  success: ne(),
  price: m().optional(),
  error: l().optional(),
  cacheHit: ne().optional()
});
T({
  valid: ne(),
  errors: Z(l()),
  warnings: Z(l())
});
T({
  pricing: Gm,
  labels: Z(l()),
  options: Z(Z(l())),
  // Simplified to string arrays only
  keys: Z(l()),
  maxLevels: m().min(1)
});
T({
  enableCaching: ne().default(!0),
  enableLogging: ne().default(!1),
  maxCacheSize: m().min(1).default(1e3)
});
const si = T({
  _id: l(),
  name: l(),
  code: l().optional(),
  labels: Z(l()).optional(),
  pricing: ve(l(), m()).optional(),
  price: m().optional(),
  // Catalogue link — when set, the customer renders a Decor × Type ×
  // Width × Thickness picker against /catalogues/<key>/banding-axes.
  sourceCatalogueKey: l().optional(),
  // Per-axis pricing rules — preserved so per-shape inline price hints
  // can compute against the rule that matches.
  pricingRules: Z(T({
    materials: Z(l()).optional(),
    widths: Z(m()).optional(),
    thicknesses: Z(m()).optional(),
    price: m()
  })).optional()
}), zm = T({
  banding: si.optional(),
  finish: si.optional(),
  planing: si.optional(),
  machining: si.optional()
}).optional(), Hm = T({
  enabled: ne(),
  price: m(),
  description: l().optional(),
  maxQuantity: m().optional()
}).optional(), $l = T({
  id: l(),
  label: l(),
  price: m()
});
$l.extend({
  quantity: m().int().min(1).default(1)
});
const Zm = T({
  // Visual (Note: color, weight, imageUrl, tags, available are now in InputStock base schema)
  colorHex: qu,
  name: l().optional().describe("User-friendly display name"),
  description: l().optional().describe("Detailed description"),
  code: l().optional().describe("Internal material/product code"),
  // Categorization
  category: l().optional().describe("Stock category"),
  // Surface finish (e.g., "High Gloss", "Matt", "Satin")
  finish: l().optional().describe("Surface finish"),
  // Available extras from material (resolved from material.extras)
  extras: zm.describe("Available extras for this stock"),
  // Sample ordering configuration (from material)
  sample: Hm.describe("Sample ordering configuration"),
  // External links — supplier-supplied datasheets, asset bundles, 3D viewer
  // URLs etc. surfaced in the customer-side Details dialog. Populated for
  // library-sourced rows from the catalogue entry's `urls` field; absent
  // or empty for shop-owned stock until the editor populates it.
  urls: Z(T({
    label: l(),
    url: l()
  })).optional().describe("Supplier external links (datasheets, asset bundle, …)"),
  // UI metadata
  minQuantity: m().int().positive().nullable().optional().describe("Minimum order quantity"),
  // Priced add-on options (e.g. "CNC", "Spray") offered when this stock is
  // bought as a full/uncut sheet. Configured at the material/stock level and
  // surfaced on the catalogue card's full-stock buy flow; also the options a
  // store admin can toggle + price-override when building a quote.
  fullStockOptions: Z($l).optional().describe("Priced options (cnc, spray, …) for full-sheet ordering")
});
Cn.merge(Zm).describe("Stock option with filtering and display metadata");
const Jm = T({
  field: l(),
  value: Se(),
  type: Fl
});
T({
  // Active filters
  activeFilters: Z(Jm).default([]).describe("Currently active filters"),
  // Search
  searchQuery: l().default("").describe("Current search query"),
  // Sort
  sortBy: l().default("cost").describe("Current sort field"),
  sortOrder: Ml.default("asc").describe("Current sort order"),
  // Display
  displayMode: Nl.default("grid").describe("Current display mode"),
  currentPage: m().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: Z(l()).default([]).describe("IDs of selected stock items")
});
function Nb() {
  return $a.parse({});
}
const Dl = T({}).passthrough(), _l = T({
  l: m(),
  w: m(),
  t: m().nullable(),
  q: m(),
  stockId: l()
}), qs = Bu.partial(), Rl = T({
  q: m().optional(),
  analysis: qs.nullable().optional()
}), ql = T({
  holes: Z(T({
    x: m(),
    y: m(),
    diameter: m(),
    depth: m().optional(),
    face: m().optional(),
    type: l().optional()
  })).optional(),
  hingeHoles: Z(T({
    position: m(),
    side: l(),
    face: m().optional(),
    numHoles: m().optional(),
    diameter: m().optional(),
    depth: m().optional(),
    hingeLength: m().optional(),
    distanceFromEdge: m().optional(),
    outerSpacing: m().optional()
  })).optional(),
  corners: Z(T({
    index: m(),
    type: l().nullable().optional(),
    size: m().nullable().optional()
  })).optional()
}), Bl = T({
  bladeWidth: m().optional(),
  cutType: l().optional(),
  cutPreference: l().optional(),
  stackHeight: m().optional()
}), Xm = T({
  l: m(),
  w: m(),
  t: m().nullable(),
  material: l().nullable(),
  orientationLock: il.nullable(),
  q: m(),
  name: l().nullable(),
  // V2 format: flat banding/finish (x1/x2/y1/y2 for banding, a/b for finish)
  banding: ve(l(), je([l(), ne()])).nullable().optional(),
  finish: ve(l(), je([l(), ne()])).nullable().optional(),
  planing: ve(l(), je([l(), ne()])).nullable().optional(),
  customData: ve(l(), Se()).nullable().optional()
}), Qm = T({
  id: l(),
  name: l().nullable(),
  l: m(),
  w: m(),
  t: m().nullable(),
  material: l().nullable(),
  q: m(),
  trim: T({
    x1: m(),
    x2: m(),
    y1: m(),
    y2: m()
  }).nullable().optional(),
  cost: m().nullable().optional(),
  /** Configured percentage discount (0–100) — surfaced to pricing formulas. */
  discount: m().nullable().optional(),
  /** Per-stock pricing override evaluated at checkout — see
   *  shared/formula/pricing-variables.ts for the available variable surface. */
  pricingFormula: l().nullable().optional(),
  db_id: l().nullable().optional(),
  code: l().nullable().optional(),
  analysis: qs.nullable().optional(),
  /** Per-sheet analysis — present when the cut server emits per-sheet data.
   *  Pricing formulas iterate these when set so usedFraction reflects each
   *  physical sheet, not the order-wide average. */
  sheets: Z(Rl).nullable().optional(),
  customData: ve(l(), Se()).nullable().optional()
}), Ym = T({
  id: l().optional(),
  name: l().optional(),
  l: m(),
  w: m(),
  t: m().nullable().optional(),
  material: l().optional(),
  q: m().optional(),
  orientationLock: je([
    lt(""),
    lt("l"),
    lt("w")
  ]).nullable().optional(),
  // V2 format: flat banding/finish
  banding: ve(l(), je([l(), ne()])).nullable().optional(),
  finish: ve(l(), je([l(), ne()])).nullable().optional(),
  planing: ve(l(), je([l(), ne()])).nullable().optional(),
  // V3 nested extras also stored on inputs even for V2 results (see mapToCheckoutResultV2)
  extras: T({
    banding: T({
      sides: ve(l(), je([l(), ne()]))
    }).nullable().optional(),
    finish: T({
      faces: ve(l(), je([l(), ne()]))
    }).nullable().optional(),
    planing: T({
      sides: ve(l(), je([l(), ne()])).optional(),
      faces: ve(l(), je([l(), ne()])).optional()
    }).nullable().optional()
  }).optional(),
  machining: ql.optional(),
  stock: T({
    db_id: l().optional(),
    code: l().optional(),
    material: l().optional(),
    thickness: m().optional()
  }).nullable().optional(),
  customData: ve(l(), Se()).nullable().optional()
});
T({
  jobId: m(),
  metadata: Da.optional(),
  parts: Z(Xm),
  stock: Z(Qm),
  offcuts: Z(_l),
  inputs: T({
    parts: Z(Ym),
    saw: Bl.optional()
  }),
  apiResultV3: Dl.optional()
});
const eg = T({
  l: m(),
  w: m(),
  t: m().nullable(),
  material: l().nullable(),
  orientationLock: il.nullable(),
  q: m(),
  name: l().nullable(),
  // V3 format: nested extras structure
  extras: T({
    banding: T({
      sides: ve(l(), je([l(), ne()]))
    }).nullable().optional(),
    finish: T({
      faces: ve(l(), je([l(), ne()]))
    }).nullable().optional(),
    planing: T({
      sides: ve(l(), je([l(), ne()])).optional(),
      faces: ve(l(), je([l(), ne()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: ve(l(), Se()).nullable().optional()
}), tg = T({
  id: l(),
  name: l().nullable(),
  l: m(),
  w: m(),
  t: m().nullable(),
  material: l().nullable(),
  q: m(),
  trim: T({
    l1: m().optional(),
    l2: m().optional(),
    w1: m().optional(),
    w2: m().optional()
  }).nullable().optional(),
  cost: m().nullable().optional(),
  /** Configured percentage discount (0–100) — surfaced to pricing formulas. */
  discount: m().nullable().optional(),
  /** Per-stock pricing override evaluated at checkout — see
   *  shared/formula/pricing-variables.ts for the available variable surface. */
  pricingFormula: l().nullable().optional(),
  db_id: l().nullable().optional(),
  code: l().nullable().optional(),
  analysis: qs.nullable().optional(),
  /** Per-sheet analysis — present when the cut server emits per-sheet data.
   *  Pricing formulas iterate these when set so usedFraction reflects each
   *  physical sheet, not the order-wide average. */
  sheets: Z(Rl).nullable().optional(),
  // New stock fields
  color: Vu.nullable(),
  weight: m().positive().nullable().optional(),
  imageUrl: l().nullable().optional(),
  tags: Z(l()).nullable().optional(),
  available: ne().nullable().optional(),
  customData: ve(l(), Se()).nullable().optional()
}), ng = T({
  id: l().optional(),
  name: l().optional(),
  l: m(),
  w: m(),
  t: m().nullable().optional(),
  material: l().optional(),
  q: m().optional(),
  orientationLock: je([
    lt(""),
    lt("l"),
    lt("w")
  ]).nullable().optional(),
  // V3 format: nested extras structure
  extras: T({
    banding: T({
      sides: ve(l(), je([l(), ne()]))
    }).nullable().optional(),
    finish: T({
      faces: ve(l(), je([l(), ne()]))
    }).nullable().optional(),
    planing: T({
      sides: ve(l(), je([l(), ne()])).optional(),
      faces: ve(l(), je([l(), ne()])).optional()
    }).nullable().optional()
  }).optional(),
  machining: ql.optional(),
  stock: T({
    db_id: l().optional(),
    code: l().optional(),
    material: l().optional(),
    thickness: m().optional()
  }).nullable().optional(),
  customData: ve(l(), Se()).nullable().optional()
});
T({
  jobId: m(),
  metadata: Da.optional(),
  parts: Z(eg),
  stock: Z(tg),
  offcuts: Z(_l),
  inputs: T({
    parts: Z(ng),
    saw: Bl.optional()
  }),
  apiResultV3: Dl.optional()
});
function Vl(e) {
  return {
    l: e.l,
    w: e.w,
    t: e.t ?? null,
    q: e.q,
    // Use stock.id to match the id property in the result's stock array
    stockId: e?.stock?.id || e?.stock?.parentId || ""
  };
}
function Ul(e) {
  const n = /* @__PURE__ */ new Map();
  for (const t of e)
    t?.parentId && (n.has(t.parentId) || n.set(t.parentId, []), n.get(t.parentId).push({
      q: t.q ?? 1,
      analysis: t.analysis ?? null
    }));
  return n;
}
function jl(e) {
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
      const u = n.get(i), c = t.get(i) + 1;
      t.set(i, c), n.set(i, {
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
const ag = T({
  stockSelection: Zu.optional(),
  stackingMode: Hu.optional(),
  minSpacing: al.optional()
}).optional(), ig = T({
  stockType: Xe([...us]).optional(),
  bladeWidth: je([
    zu,
    l()
  ]).optional(),
  cutType: Wu,
  cutPreference: Gu,
  stackHeight: ju,
  guillotineOptions: Uu,
  efficiencyOptions: Ku.optional(),
  options: ag
}).optional(), sg = T({
  holes: m().min(0).nullable().optional(),
  corners: m().min(0).nullable().optional()
}).optional(), og = Yn.pick({
  l: !0,
  w: !0,
  t: !0,
  q: !0,
  name: !0,
  material: !0,
  orientationLock: !0,
  customData: !0,
  // Typed saw label-printer fields, the same per-part `labels` object the V3
  // API's Part model documents. Picked so a host integration can supply them
  // on `init` exactly as it would on an API job — without this the key is
  // stripped here and the values never reach the emitter. `options.labelFields`
  // is only the column config for values the CUSTOMER types; these are the
  // values the HOST already knows.
  labels: !0,
  stock: !0
}).extend({
  // Checkout-specific: flattened extras (not in extras container)
  banding: Qu.nullable().optional(),
  finish: Xu.nullable().optional(),
  planing: Ju.nullable().optional(),
  stockId: l().nullable().optional()
}), lg = T({
  stock: Z(Cn).default([]),
  parts: Z(og).optional(),
  options: Bm,
  type: l().optional(),
  // variable | simple
  materials: Z(Km).optional(),
  banding: as.nullable().optional(),
  finish: as.nullable().optional(),
  planing: as.nullable().optional(),
  machining: Se().optional(),
  machiningPricing: sg,
  // DEPRECATED: bandingPricing, finishPricing, planingPricing are now in banding.pricing, finish.pricing, planing.pricing
  variations: Se().optional(),
  partRules: Vm.optional(),
  // Read-forgiving (read-forgiving, write-strict — see options.zod.ts): the
  // write contract's `customValidationSchema` is `enabled: flag( false )` +
  // `rules` defaulted to `[]`, so stored `enabled: null` and an absent `rules`
  // are contract-legal shapes that must read as the write defaults instead of
  // throwing the whole storefront init.
  customValidation: Re(Qe, T({
    enabled: Re(Qe, ne().default(!1)),
    rules: Re(Qe, Z(Se()).default([]))
  }).optional()),
  saw: ig,
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
  sawsById: ve(l(), Se()).optional(),
  stockFilter: T({
    enabled: ne().optional(),
    serverMode: ne().optional(),
    config: $a.optional()
  }).optional(),
  // Product catalog configuration
  products: T({
    enabled: ne().optional(),
    showCategories: ne().optional()
  }).optional(),
  // API configuration (for order lookup and other API features)
  api: T({
    baseUrl: l(),
    orgSlug: l(),
    isCustomDomain: ne().optional(),
    // WebSocket origin + org id for the storefront's inventory-change watcher
    // (Vanilla.vue startInventoryWatch). Host integrations inject these from
    // the /config response wrapper (`orgId`) and their deploy env.
    wsServer: l().optional(),
    orgId: l().optional()
  }).optional(),
  // Admin configuration (configurator, etc.)
  config: T({
    configurator: T({
      enabled: ne(),
      url: l().nullable().optional(),
      spec: Se().nullable().optional()
    }).optional()
  }).optional()
});
T({
  slug: l().optional(),
  company: T({
    name: l(),
    contactEmail: l(),
    phone: l().optional(),
    address: l().optional()
  }),
  branding: T({
    logo: l().optional(),
    favicon: l().optional(),
    colors: T({
      button: l(),
      buttonText: l(),
      headerBackground: l().optional(),
      headerText: l().optional(),
      partA: l().optional(),
      partB: l().optional(),
      partSelected: l().optional(),
      stock: l().optional(),
      text: l().optional()
    }),
    showCredit: ne().optional()
  }),
  config: T({
    stockCount: m().optional(),
    stock: Z(Se()).optional(),
    materials: Z(Se()).optional(),
    options: Se().optional(),
    pricing: Se().optional(),
    banding: Se().optional(),
    finish: Se().optional(),
    planing: Se().optional(),
    machining: Se().optional(),
    bandingPricing: ve(l(), m()).optional(),
    finishPricing: ve(l(), m()).optional(),
    planingPricing: ve(l(), m()).optional(),
    machiningPricing: ve(l(), m()).optional(),
    saw: Se().optional(),
    shipping: T({
      enabled: ne(),
      originCountry: l().optional()
    }).optional(),
    stockFilter: T({
      config: $a.optional()
    }).optional(),
    partRules: Se().optional(),
    customFields: Z(Se()).optional(),
    termsUrl: l().optional(),
    termsContent: l().optional(),
    tracking: T({
      gaMeasurementId: l().optional(),
      gtmContainerId: l().optional()
    }).optional(),
    customValidation: T({
      enabled: ne(),
      rules: Z(Se())
    }).optional(),
    importSettings: T({
      grouping: Xe(["material", "material-variant", "auto"]).optional(),
      codeRegex: l().optional()
    }).optional()
  }),
  stripe: T({
    enabled: ne(),
    publishableKey: l().optional(),
    currency: l().optional()
  }).optional(),
  invoice: T({
    enabled: ne(),
    terms: l().optional()
  }).optional(),
  customerAccounts: T({
    enabled: ne(),
    requireForCheckout: ne().optional()
  }).optional()
});
function rg(e) {
  const n = lg.safeParse(e);
  return {
    success: n.success,
    data: n.success ? n.data : void 0,
    error: n.success ? void 0 : n.error
  };
}
function ug(e) {
  const n = rg(e);
  if (!n.success) {
    const t = n.error?.issues.map((a) => `${a.path.join(".")}: ${a.message}`).join(", ") || "Unknown validation error";
    throw console.error("Invalid checkout data:", JSON.stringify(e, null, 2)), console.error("Validation errors:", t), new Error(`Invalid checkout data: ${t}`);
  }
  return n.data;
}
const cg = T({
  name: l().trim(),
  price: l().trim().default("0"),
  sku: l().trim().optional(),
  options: ve(l(), Z(l()))
}), dg = ve(l(), cg), fg = T({
  name: l().trim(),
  // Simple-product SKU, sent alongside `options` (whose key is SKU-or-slug).
  // Lets getExtrasData build a tuple→SKU `codes` entry so the cutlist CSV
  // shows the SKU first — mirroring the per-variation `sku` above. Variable
  // products carry their SKUs on each variation instead.
  sku: l().trim().optional(),
  options: ve(
    l(),
    je([l(), Z(l())])
  ).optional(),
  variations: dg.optional(),
  price: l().trim().default("0"),
  type: Xe(["simple", "variable"]).optional()
}), Ko = ve(l(), fg);
T({
  env: l().default("production"),
  showDevInfo: ne().default(!1),
  debug: ne().default(!1),
  el: ve(l(), Jt()).default({}),
  inputType: Xe(["manual", "formula"]).default("manual"),
  settings: ve(l(), Jt()).default({}),
  // Note: HTMLInputElement cannot be validated with Zod, using unknown
  inputs: ve(l(), Jt()).default({}),
  formatting: ve(l(), Jt()).default({}),
  product: ve(l(), Jt()).default({}),
  stock: Z(Cn).default([]),
  variations: Z(Jt()).default([]),
  selectedVariation: ve(l(), Jt()).default({}),
  machiningPricing: Se().optional(),
  quantityPricing: ne().default(!1),
  extrasData: T({
    banding: Ko,
    finish: Ko
  }).default({
    banding: {},
    finish: {}
  }),
  formulaURL: l().url().optional().or(l().default("")),
  formulaSpec: l().default(""),
  hardwareResult: ve(l(), Se()).default({}),
  // HardwareResult type from formula.ts
  metadata: Se().optional()
  // Metadata from optimize/main
});
const Gl = T({
  source: O(Xe(["inline", "url"]), {
    label: "Source Type",
    info: "Choose whether to enter the formula specification inline or load it from an external URL",
    order: 1
  }),
  url: O(l().url().optional(), {
    label: "Formula Specification URL",
    placeholder: "https://example.com/formula.json",
    info: "URL to a JSON file containing the formula specification",
    order: 2
  }),
  spec: Se().optional(),
  // The formula specification object
  // Optional linkage back to a Model Library template. Set when the
  // admin loads a template via "Browse model templates…". Combined with
  // `sourceClean`, this lets the server overlay the LIVE template spec
  // at fetch-time so curator improvements automatically flow into
  // products that haven't been edited since load (snapshot defaults to
  // frozen; live-inheritance is opt-in via `sourceClean`).
  sourceKey: l().optional(),
  // Template version captured at load time. Used by the editor to
  // detect drift ("template advanced to vN, you're on vM").
  sourceVersion: m().int().optional(),
  // True when the spec hasn't been edited since the template was loaded
  // — the server overlay swaps in `template.formula` / `template.assembly`
  // at fetch time. Any explicit spec edit flips this to false so the
  // admin's local changes aren't silently stomped by a curator update.
  sourceClean: ne().optional()
}), Wl = T({
  source: O(Xe(["inline", "url"]).default("inline"), {
    label: "Source Type",
    info: "Inline JSON or load from a URL",
    order: 1
  }),
  url: O(l().url().optional(), {
    label: "Assembly Specification URL",
    placeholder: "https://example.com/assembly.json",
    info: "URL to a JSON assembly spec",
    order: 2
  }),
  spec: Se().optional(),
  // The AssemblySpec object (validated at use time)
  // See formulaSpecSchema for the rationale on these three.
  // `sourceKey`/`sourceVersion` link the assembly back to a Model Library
  // template; `sourceClean` flips to false the first time the admin edits
  // the assembly so curator updates stop overlaying.
  sourceKey: l().optional(),
  sourceVersion: m().int().optional(),
  sourceClean: ne().optional()
}), Kl = T({
  price: O(m().min(0), {
    label: "Price",
    info: "Fixed price for this product",
    type: "float",
    required: !0,
    order: 1
  }),
  discount: O(m().min(0).max(100).default(0), {
    label: "Discount %",
    info: "Discount percentage (0-100)",
    type: "float",
    order: 2
  }),
  code: O(l().optional(), {
    label: "Code/SKU",
    placeholder: "PROD-001",
    info: "Internal material or product code",
    order: 3
  }),
  trackInventory: O(ne().default(!1), {
    label: "Track Inventory",
    info: "Whether to track stock levels",
    type: "checkbox",
    order: 4
  }),
  quantity: O(m().int().min(0).default(0), {
    label: "Quantity",
    info: "Available quantity (if tracking)",
    type: "integer",
    order: 5
  }),
  unlimitedQuantity: O(ne().default(!0), {
    label: "Unlimited Quantity",
    info: "Never runs out of stock",
    type: "checkbox",
    order: 6
  }),
  weight: O(m().min(0).optional(), {
    label: "Weight",
    info: "Weight for shipping calculations (in kg)",
    type: "float",
    order: 7
  }),
  requiresShipping: O(ne().default(!0), {
    label: "Requires Shipping",
    info: "Physical product that needs shipping",
    type: "checkbox",
    order: 8
  })
}), zl = Xe(["formula", "simple", "bundle"]), Hl = T({
  _id: l().optional(),
  // Basic info
  name: O(l().min(1), {
    label: "Product Name",
    placeholder: "Enter product name",
    info: "Name displayed to customers",
    required: !0,
    order: 1
  }),
  slug: O(l().optional(), {
    label: "URL Slug",
    placeholder: "product-name",
    info: "URL-friendly identifier (auto-generated from name if empty)",
    order: 2
  }),
  description: O(l().optional(), {
    label: "Description",
    placeholder: "Full product description...",
    info: "Detailed product description",
    type: "textarea",
    order: 3
  }),
  shortDescription: O(l().optional(), {
    label: "Short Description",
    placeholder: "Brief summary...",
    info: "Short summary shown in product cards",
    order: 4
  }),
  // Categorization
  category: O(l().optional(), {
    label: "Category",
    info: "Product category for filtering",
    type: "select",
    order: 5
  }),
  tags: O(Z(l()).default([]), {
    label: "Tags",
    info: "Tags for search and filtering",
    order: 6
  }),
  // Media
  imageUrl: O(l().url().optional(), {
    label: "Product Image",
    placeholder: "https://example.com/image.jpg",
    info: "Main product image URL",
    order: 7
  }),
  images: O(Z(l()).default([]), {
    label: "Gallery Images",
    info: "Additional product images",
    order: 8
  }),
  // Pricing (applies to all product types as base/display price)
  cost: O(m().min(0).default(0), {
    label: "Base Price",
    info: "Base price for this product (used for display and catalog)",
    type: "float",
    order: 9
  }),
  discount: O(m().min(0).max(100).default(0), {
    label: "Discount %",
    info: "Discount percentage (0-100)",
    type: "float",
    order: 10
  }),
  // Product type
  type: O(zl, {
    label: "Product Type",
    info: "Type of product: formula (calculated), simple (fixed price), or bundle",
    type: "select",
    required: !0,
    order: 11
  }),
  // Type-specific config
  formulaSpec: Gl.optional(),
  // Optional 3D layout — paired with formula products to drive the
  // ProductVisualiser preview on the storefront.
  assemblySpec: Wl.optional(),
  simpleConfig: Kl.optional(),
  // Visibility & Status
  published: O(ne().default(!1), {
    label: "Published",
    info: "Whether this product is visible",
    type: "checkbox",
    order: 12
  }),
  featured: O(ne().default(!1), {
    label: "Featured",
    info: "Highlight in catalog",
    type: "checkbox",
    order: 14
  }),
  displayOrder: O(m().int().default(0), {
    label: "Display Order",
    info: "Manual ordering (lower numbers appear first)",
    type: "integer",
    order: 15
  }),
  // Top-level material groups — lifted out of formulaSpec.spec so URL-
  // based formulas (which can't carry our extension on the remote JSON)
  // can still have customer-pickable materials. Inline-spec products may
  // also use this location (preferred); legacy data nested under
  // formulaSpec.spec.materialGroups continues to be readable client-side.
  // Shape mirrors the `MaterialGroup` interface from FormulaCalculator.
  materialGroups: ve(l(), Se()).optional(),
  // Timestamps (read-only)
  createdAt: gi().optional(),
  updatedAt: gi().optional()
}), Zl = T({
  _id: l().optional(),
  name: O(l().min(1), {
    label: "Category Name",
    placeholder: "Enter category name",
    info: "Name displayed to customers",
    required: !0,
    order: 1
  }),
  slug: O(l().optional(), {
    label: "URL Slug",
    placeholder: "category-name",
    info: "URL-friendly identifier (auto-generated from name if empty)",
    order: 2
  }),
  description: O(l().optional(), {
    label: "Description",
    placeholder: "Category description...",
    info: "Brief description of this category",
    type: "textarea",
    order: 3
  }),
  imageUrl: O(l().url().optional(), {
    label: "Category Image",
    placeholder: "https://example.com/image.jpg",
    info: "Image representing this category",
    order: 4
  }),
  displayOrder: O(m().int().default(0), {
    label: "Display Order",
    info: "Manual ordering (lower numbers appear first)",
    type: "integer",
    order: 5
  }),
  published: O(ne().default(!0), {
    label: "Published",
    info: "Whether this category is visible",
    type: "checkbox",
    order: 6
  }),
  // Timestamps (read-only)
  createdAt: gi().optional(),
  updatedAt: gi().optional()
});
Hl.omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
Hl.partial().omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
T({
  name: l().min(1, "Name is required").optional(),
  slug: l().optional(),
  description: l().optional(),
  shortDescription: l().optional(),
  category: l().optional(),
  tags: Z(l()).optional(),
  imageUrl: l().optional(),
  cost: m().min(0, "Cost cannot be negative").optional(),
  discount: m().min(0).max(100).optional(),
  type: zl.optional(),
  formulaSpec: Gl.partial().optional(),
  assemblySpec: Wl.partial().optional(),
  simpleConfig: Kl.partial().optional(),
  published: ne().optional(),
  featured: ne().optional(),
  displayOrder: m().int().optional()
});
Zl.omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
Zl.partial().omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
function hn(e) {
  return e == null ? !1 : typeof e == "object" && e.value !== void 0 ? e.value : e;
}
function pg(e) {
  if (e.extras?.banding?.sides) {
    const n = e.extras.banding.sides, t = {};
    if (pt(n.a) || pt(n.b) || pt(n.c) || pt(n.d))
      t.x1 = pt(n.a) ? hn(n.a) : !1, t.y1 = pt(n.b) ? hn(n.b) : !1, t.x2 = pt(n.c) ? hn(n.c) : !1, t.y2 = pt(n.d) ? hn(n.d) : !1;
    else {
      const i = gs(n);
      t.x1 = pt(i.x1) ? hn(i.x1) : !1, t.x2 = pt(i.x2) ? hn(i.x2) : !1, t.y1 = pt(i.y1) ? hn(i.y1) : !1, t.y2 = pt(i.y2) ? hn(i.y2) : !1;
    }
    e.banding = t;
  }
  if (e.extras?.finish?.faces) {
    const n = e.extras.finish.faces, t = {};
    t.a = pt(n.a) ? hn(n.a) : !1, t.b = pt(n.b) ? hn(n.b) : !1, e.finish = t;
  }
  if (e.extras?.planing) {
    const n = e.extras.planing, t = {}, a = gs(n.sides || {});
    n.sides && (pt(a.x1) && (t.x1 = a.x1), pt(a.x2) && (t.x2 = a.x2), pt(a.y1) && (t.y1 = a.y1), pt(a.y2) && (t.y2 = a.y2)), n.faces && (pt(n.faces.a) && (t.a = n.faces.a), pt(n.faces.b) && (t.b = n.faces.b)), Object.keys(t).length > 0 && (e.planing = t);
  }
  (e.extras?.banding || e.extras?.finish || e.extras?.planing) && delete e.extras;
}
function mg(e, n = 0) {
  if (n === 0)
    return e;
  if (n === 1 || n === 2) {
    const t = Math.max(e.l, e.w), a = Math.min(e.l, e.w);
    e.w > e.l && (e.l = t, e.w = a);
  }
  return e;
}
function Jl(e, n = 0) {
  return n === 0 || e.forEach((t) => mg(t, n)), e;
}
function gg(e) {
  const n = typeof e.weight == "number" && Number.isFinite(e.weight) && e.weight > 0 ? e.weight : null;
  if (n !== null) return n;
  const t = typeof e.density == "number" && Number.isFinite(e.density) && e.density > 0 ? e.density : null, a = typeof e.l == "number" ? e.l : null, i = typeof e.w == "number" ? e.w : null, s = typeof e.t == "number" ? e.t : null;
  if (!t || !a || !i || !s) return null;
  const u = a / 1e3 * (i / 1e3) * (s / 1e3);
  return Math.round(t * u * 100) / 100;
}
function Xl(e) {
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
function hg(e, n, t, a, i, s, u, c) {
  const p = jl(a), f = Ul(a), y = n.map((v) => {
    const j = {
      l: v.l,
      w: v.w,
      t: v?.t ?? null,
      material: v.material ?? null,
      orientationLock: v.orientationLock ?? null,
      q: u?.addedPartTally?.[v.parentId] || v.q,
      name: v.name ?? null,
      customData: v.customData ?? null,
      // Always include extras properties even if not set (using API format)
      banding: Vc(),
      finish: vi(),
      planing: jc()
    }, X = { ...v };
    return pg(X), X.banding && (j.banding = X.banding), X.finish && (j.finish = X.finish), X.planing && (j.planing = X.planing), j;
  }), I = t.map((v) => {
    const j = {
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
      analysis: p.get(v.parentId) ?? null,
      sheets: f.get(v.parentId) ?? null,
      customData: v?.customData ?? null
    };
    return v?.trim && (j.trim = gs(v.trim)), j;
  }), P = {
    parts: s.map((v) => {
      const j = {
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
      v.extras && (j.extras = {}, v.extras.banding?.sides && (j.extras.banding = { sides: v.extras.banding.sides }), v.extras.finish?.faces && (j.extras.finish = { faces: v.extras.finish.faces }), v.extras.planing && (j.extras.planing = {
        ...v.extras.planing.sides && { sides: v.extras.planing.sides },
        ...v.extras.planing.faces && { faces: v.extras.planing.faces }
      }));
      const X = Xl(v);
      return X && (j.machining = X), j;
    })
  };
  return c && Jl(y, c), {
    jobId: e,
    metadata: u,
    parts: y,
    stock: I,
    offcuts: i?.map(Vl) || [],
    inputs: P
  };
}
function bg(e, n, t, a, i, s, u, c) {
  const p = jl(a), f = Ul(a), y = n.map((v) => {
    const j = {
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
        banding: { sides: ms() },
        finish: { faces: vi() },
        planing: Uc()
      }
    };
    return v.extras && (v.extras.banding?.sides && (j.extras.banding = { sides: v.extras.banding.sides }), v.extras.finish?.faces && (j.extras.finish = { faces: v.extras.finish.faces }), v.extras.planing && (j.extras.planing = {
      sides: v.extras.planing.sides || ms(),
      faces: v.extras.planing.faces || vi()
    })), j;
  }), I = t.map((v) => ({
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
    analysis: p.get(v.parentId) ?? null,
    sheets: f.get(v.parentId) ?? null,
    // New stock fields
    color: v?.color ?? null,
    density: v?.density ?? null,
    weight: gg(v),
    imageUrl: v?.imageUrl ?? null,
    tags: v?.tags ?? null,
    available: v?.available ?? null,
    customData: v?.customData ?? null
  })), P = {
    parts: s.map((v) => {
      const j = {
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
      v.extras && (j.extras = {}, v.extras.banding?.sides && (j.extras.banding = { sides: v.extras.banding.sides }), v.extras.finish?.faces && (j.extras.finish = { faces: v.extras.finish.faces }), v.extras.planing && (j.extras.planing = {
        ...v.extras.planing.sides && { sides: v.extras.planing.sides },
        ...v.extras.planing.faces && { faces: v.extras.planing.faces }
      }));
      const X = Xl(v);
      return X && (j.machining = X), j;
    })
  };
  return c && Jl(y, c), {
    jobId: e,
    metadata: u,
    parts: y,
    stock: I,
    offcuts: i?.map(Vl) || [],
    inputs: P
  };
}
function vg(e) {
  return e ? !!e.code || !!e.name || !!e.sourceCatalogueKey || Array.isArray(e.groups) && e.groups.length > 0 || Array.isArray(e.labels) && e.labels.length > 0 || !!e.pricing && typeof e.pricing == "object" && Object.keys(e.pricing).length > 0 : !1;
}
function yg(e, n, t) {
  const a = e.sourceCatalogueKey ? n?.pricing || {} : {};
  return e.pricing && typeof e.pricing == "object" ? { ...a, ...e.pricing } : t ? { ...a, [t]: e.price ?? 0 } : { ...a };
}
const kg = "stockExtras";
function Mb(e, n) {
  !n || typeof n != "object" || (e.resolvedExtras = n);
}
function ks(e) {
  const n = e?.resolvedExtras;
  if (n && typeof n == "object") return n;
  const t = e?.customData?.[kg];
  if (t && typeof t == "object") return t;
}
function Ql(e, n) {
  return ks(e)?.[n];
}
function wg(e) {
  const t = Ql(e, "banding")?.sourceCatalogueKey;
  return typeof t == "string" && t ? t : null;
}
function Sg(e, n) {
  if (n !== "banding") return !1;
  const t = e?.sourceCatalogueKey;
  return typeof t == "string" && t.length > 0;
}
function xg(e) {
  return ki(e);
}
function Ig(e, n) {
  return va(xg(e), n);
}
function Pg(e) {
  return {
    materialKey: e.name,
    ...ki({
      name: e.displayName || e.name,
      material: e.material || void 0,
      brand: e.brand,
      variant: e.variant,
      finish: e.finish,
      code: e.code || void 0,
      displayName: e.displayName,
      imageUrl: e.imageUrl
    }),
    color: e.color,
    colorHex: e.colorHex
  };
}
function is(e) {
  const n = (e.variant || "").trim(), t = (e.material || "").trim(), a = (e.name || "").trim();
  if (n && a && t && n.toUpperCase() !== a.toUpperCase())
    return `${n} ${a}`.toUpperCase();
  if (n && t) return n.toUpperCase();
  const i = (e.code || "").trim();
  return a && t && i && a.toUpperCase() !== i.toUpperCase() ? a.toUpperCase() : t ? t.toUpperCase() : i ? i.toUpperCase() : (Ig(e, { fallback: "" }).fullLabel || "").toUpperCase();
}
function Cg(e) {
  if (e && typeof e == "object" && "resolvedExtras" in e) {
    const { resolvedExtras: n, ...t } = e;
    return t;
  }
  return e;
}
const Lg = ["id", "data-index"], Eg = /* @__PURE__ */ St({
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
    const t = e, a = n, i = ee({
      l1: !1,
      l2: !1,
      w1: !1,
      w2: !1
    }), s = () => {
      if (!t.inputShape) return;
      let p = {
        l1: ha(t.inputShape, "banding", "side.l1"),
        l2: ha(t.inputShape, "banding", "side.l2"),
        w1: ha(t.inputShape, "banding", "side.w1"),
        w2: ha(t.inputShape, "banding", "side.w2")
      };
      const f = kc(
        t.orientationModel,
        t.stockGrain,
        t.inputShape
      );
      f && (p = Sc(p, f)), i.value = p;
    };
    tt([
      () => t.inputShape,
      // Watching the entire inputShape for deep changes
      () => t.orientationModel,
      () => t.stockGrain,
      () => t.inputShape?.orientationLock
      // Still watch orientationLock explicitly if it triggers a re-evaluation
    ], () => {
      s();
    }, { deep: !0, immediate: !0 });
    const u = (p) => {
      (p.key === "Enter" || p.key === " ") && c();
    }, c = () => {
      t.disabled || a("clicked");
    };
    return vn(() => {
      document.getElementById(t.id)?.addEventListener("keydown", u);
    }), Si(() => {
      document.getElementById(t.id)?.removeEventListener("keydown", u);
    }), (p, f) => (D(), te("div", {
      id: e.id,
      class: gt(["banding-button", { open: e.open, disabled: e.disabled }]),
      "data-field": "banding",
      "data-index": e.index,
      tabindex: "0",
      onClick: c
    }, [
      we("div", {
        class: gt(["outer", {
          l1: i.value.l1,
          l2: i.value.l2,
          w1: i.value.w1,
          w2: i.value.w2
        }])
      }, [...f[0] || (f[0] = [
        we("div", { class: "inner" }, null, -1)
      ])], 2)
    ], 10, Lg));
  }
}), Tg = /* @__PURE__ */ pn(Eg, [["__scopeId", "data-v-60b62a98"]]), Og = {
  key: 0,
  class: "material-picker__selected"
}, Ag = ["src", "alt"], Fg = ["title"], Ng = { class: "material-picker__selected-stack" }, Mg = { class: "material-picker__selected-line" }, $g = { class: "material-picker__selected-name" }, Dg = {
  key: 0,
  class: "c-badge c-badge--light c-badge--sm material-picker__brand"
}, _g = {
  key: 1,
  class: "c-badge c-badge--light c-badge--sm material-picker__saw-badge"
}, Rg = ["title"], qg = {
  key: 0,
  class: "material-picker__selected-code"
}, Bg = {
  key: 1,
  class: "material-picker__placeholder"
}, Vg = { class: "material-picker__search-wrap" }, Ug = ["placeholder"], jg = {
  key: 0,
  class: "material-picker__search-spinner",
  "aria-hidden": "true"
}, Gg = {
  class: "material-picker__list",
  role: "listbox"
}, Wg = {
  key: 0,
  class: "material-picker__empty"
}, Kg = ["aria-selected", "onMousedown", "onMouseenter"], zg = ["src", "alt"], Hg = ["title"], Zg = { class: "material-picker__selected-stack" }, Jg = { class: "material-picker__selected-line" }, Xg = { class: "material-picker__selected-name" }, Qg = {
  key: 0,
  class: "c-badge c-badge--light c-badge--sm material-picker__brand"
}, Yg = {
  key: 0,
  class: "material-picker__selected-code"
}, eh = /* @__PURE__ */ St({
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
    allowClear: { type: Boolean, default: !0 },
    nestingBadge: { default: "" },
    typeBadge: { default: "" }
  },
  emits: ["update:modelValue", "update:value", "select", "loaded", "clear"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = ee(), s = ee(), u = ee(), c = ee(!1), p = ee(""), f = ee(0), y = ee(!1);
    let I = null, P = null;
    const v = ee([]), j = /* @__PURE__ */ new Map(), X = ee(null), he = M(() => t.id || `material-picker-${Math.random().toString(36).slice(2, 8)}`), ue = M(() => t.modelValue !== void 0 && t.modelValue !== null ? t.modelValue : t.value !== void 0 && t.value !== null ? t.value : null), { floatingStyles: ae, teleportTarget: me, syncFloatingFont: ye } = Il(
      i,
      s,
      {
        sizeApply({ rects: G, availableWidth: Y, availableHeight: Le, elements: qe }) {
          const _e = G.reference.width, Ie = Math.min(Y, Math.max(_e, 360));
          Object.assign(qe.floating.style, {
            maxHeight: `${Math.max(200, Le)}px`,
            minWidth: `${_e}px`,
            width: `${Ie}px`,
            maxWidth: `${Y}px`
          });
        }
      },
      c
    ), C = M(() => Array.isArray(t.options));
    function E(G) {
      return G.map((Y, Le) => {
        const qe = va(ki(Y), { fallback: Y.name }), _e = [qe.fullLabel, Y.code, Y.displayName].filter(Boolean).join(" ").toLowerCase(), Ie = Y._id || `idx-${Le}`;
        return { ...Y, _key: `${qe.groupKey}|${Ie}`, _summary: qe, _haystack: _e };
      });
    }
    const K = M(() => C.value ? E(t.options ?? []) : []), U = M(() => C.value ? [] : E(v.value)), _ = M(() => {
      if (C.value) {
        const G = p.value.trim().toLowerCase();
        return G ? K.value.filter((Y) => Y._haystack.includes(G)) : K.value;
      }
      return U.value;
    }), w = M(() => {
      const G = ue.value;
      if (!G) return null;
      if (C.value) {
        const qe = G.toUpperCase(), Ie = K.value.find(
          (le) => typeof le.code == "string" && le.code.toUpperCase() === qe
        ) || K.value.find((le) => R(le) === G);
        if (Ie) return Ie;
      } else if (X.value && R(X.value) === G)
        return E([X.value])[0];
      const Y = { name: G }, Le = va(ki(Y), { fallback: G });
      return { ...Y, _key: `${Le.groupKey}|stub`, _summary: Le, _haystack: "" };
    });
    function R(G) {
      const Y = G[t.valueKey];
      return Y != null ? String(Y) : null;
    }
    function de(G) {
      return R(G) === ue.value;
    }
    function Ae() {
      t.disabled || t.readonly || (c.value = !c.value, c.value && (p.value = "", f.value = 0, jt(() => {
        ye(), u.value?.focus(), !C.value && v.value.length === 0 && dt("");
      })));
    }
    function Be(G) {
      X.value = G;
      const Y = R(G);
      a("update:modelValue", Y), a("update:value", Y), a("select", G), c.value = !1, p.value = "";
    }
    function vt() {
      X.value = null, a("update:modelValue", null), a("update:value", null), a("clear");
    }
    async function dt(G) {
      if (!t.searchFn) return;
      const Y = G.toLowerCase(), Le = j.get(Y);
      if (Le) {
        v.value = Le;
        return;
      }
      if (G.length > 0 && G.length < t.minQueryLength) {
        v.value = [];
        return;
      }
      P && P.abort(), P = new AbortController(), y.value = !0;
      try {
        const qe = await t.searchFn(G);
        j.set(Y, qe), v.value = qe;
      } catch (qe) {
        if (qe?.name === "CanceledError" || qe?.code === "ERR_CANCELED") return;
        v.value = [];
      } finally {
        y.value = !1;
      }
    }
    function He() {
      C.value || (I && clearTimeout(I), I = setTimeout(
        () => dt(p.value),
        t.debounceMs
      ));
    }
    tt(ue, async (G) => {
      if (!C.value) {
        if (!G || !t.loadFn) {
          X.value = null;
          return;
        }
        if (R(X.value ?? {}) !== G)
          try {
            const Y = await t.loadFn(G);
            Y && (X.value = Y, a("loaded", Y));
          } catch {
          }
      }
    }, { immediate: !0 }), vn(() => {
      if (C.value && ue.value) {
        const G = K.value.find((Y) => R(Y) === ue.value);
        G && a("loaded", G);
      }
    });
    function Je(G) {
      switch (G.key) {
        case "ArrowDown":
          G.preventDefault(), f.value < _.value.length - 1 && f.value++;
          break;
        case "ArrowUp":
          G.preventDefault(), f.value > 0 && f.value--;
          break;
        case "Enter":
          G.preventDefault(), _.value[f.value] && Be(_.value[f.value]);
          break;
        case "Escape":
          G.preventDefault(), c.value = !1;
          break;
      }
    }
    function rt(G) {
      if (!c.value) return;
      const Y = G.target;
      i.value?.contains(Y) || s.value?.contains(Y) || (c.value = !1);
    }
    return tt(c, (G) => {
      G ? document.addEventListener("mousedown", rt) : document.removeEventListener("mousedown", rt);
    }), Ii(() => {
      document.removeEventListener("mousedown", rt), I && clearTimeout(I), P && P.abort();
    }), tt(_, () => {
      f.value = 0;
    }), (G, Y) => (D(), te("div", {
      class: gt(["input-wrapper material-picker", { issue: e.issue, required: e.required, disabled: e.disabled, focused: c.value }])
    }, [
      e.label && e.enableLabel ? (D(), $e(Aa, {
        key: 0,
        id: he.value,
        label: e.label,
        required: e.required
      }, {
        default: cn(() => [
          nn(G.$slots, "label", {}, () => [
            dn(Ce(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["id", "label", "required"])) : fe("", !0),
      we("div", {
        ref_key: "triggerRef",
        ref: i,
        class: gt(["material-picker__wrapper", { focused: c.value, empty: !w.value }]),
        onClick: Ae
      }, [
        w.value ? (D(), te("div", Og, [
          w.value._summary.imageUrl ? (D(), te("img", {
            key: 0,
            src: w.value._summary.imageUrl,
            class: "material-picker__thumb material-picker__thumb--lazy",
            loading: "lazy",
            alt: w.value._summary.productLabel,
            onLoad: Y[0] || (Y[0] = (Le) => Le.target.classList.add("material-picker__thumb--loaded"))
          }, null, 40, Ag)) : w.value.colorHex ? (D(), te("span", {
            key: 1,
            class: "material-picker__swatch",
            style: Xt({ background: w.value.colorHex }),
            title: w.value.color || "",
            "aria-hidden": "true"
          }, null, 12, Fg)) : fe("", !0),
          we("span", Ng, [
            we("span", Mg, [
              we("span", $g, Ce(w.value._summary.productLabel), 1),
              w.value._summary.brand ? (D(), te("span", Dg, Ce(w.value._summary.brand), 1)) : fe("", !0),
              e.typeBadge ? (D(), te("span", _g, Ce(e.typeBadge), 1)) : fe("", !0),
              e.nestingBadge ? (D(), te("span", {
                key: 2,
                class: "c-badge c-badge--light c-badge--sm material-picker__saw-badge",
                title: e.nestingBadge
              }, Ce(e.nestingBadge), 9, Rg)) : fe("", !0)
            ]),
            w.value._summary.code ? (D(), te("span", qg, Ce(w.value._summary.code), 1)) : fe("", !0)
          ])
        ])) : (D(), te("span", Bg, Ce(e.placeholder || "Select…"), 1)),
        w.value && !e.disabled && e.allowClear ? (D(), te("button", {
          key: 2,
          type: "button",
          class: "c-btn c-btn--xs c-btn--unstyled field-clear-btn material-picker__clear",
          "aria-label": "Clear selection",
          onClick: Qn(vt, ["stop"])
        }, "×")) : fe("", !0)
      ], 2),
      (D(), $e(xi, {
        to: N(me),
        disabled: !N(me)
      }, [
        c.value ? (D(), te("div", {
          key: 0,
          ref_key: "floatingRef",
          ref: s,
          class: "material-picker__dropdown",
          style: Xt(N(ae)),
          onMousedown: Y[4] || (Y[4] = Qn(() => {
          }, ["prevent"]))
        }, [
          we("div", Vg, [
            Y[5] || (Y[5] = we("span", {
              class: "material-picker__search-icon",
              "aria-hidden": "true"
            }, "⌕", -1)),
            ws(we("input", {
              ref_key: "searchRef",
              ref: u,
              "onUpdate:modelValue": Y[1] || (Y[1] = (Le) => p.value = Le),
              type: "text",
              class: "material-picker__search",
              placeholder: e.searchPlaceholder,
              onMousedown: Y[2] || (Y[2] = Qn(() => {
              }, ["stop"])),
              onInput: He,
              onKeydown: Je
            }, null, 40, Ug), [
              [Zo, p.value]
            ]),
            y.value ? (D(), te("span", jg, "…")) : fe("", !0)
          ]),
          we("div", Gg, [
            _.value.length === 0 ? (D(), te("div", Wg, Ce(e.emptyMessage), 1)) : fe("", !0),
            (D(!0), te(At, null, an(_.value, (Le, qe) => (D(), te("div", {
              key: Le._key,
              class: gt(["material-picker__option", {
                highlighted: qe === f.value,
                selected: de(Le)
              }]),
              role: "option",
              "aria-selected": de(Le),
              onMousedown: Qn((_e) => Be(Le), ["prevent"]),
              onMouseenter: (_e) => f.value = qe
            }, [
              Le._summary.imageUrl ? (D(), te("img", {
                key: 0,
                src: Le._summary.imageUrl,
                class: "material-picker__thumb material-picker__thumb--lazy",
                loading: "lazy",
                alt: Le._summary.productLabel,
                onLoad: Y[3] || (Y[3] = (_e) => _e.target.classList.add("material-picker__thumb--loaded"))
              }, null, 40, zg)) : Le.colorHex ? (D(), te("span", {
                key: 1,
                class: "material-picker__swatch",
                style: Xt({ background: Le.colorHex }),
                title: Le.color || "",
                "aria-hidden": "true"
              }, null, 12, Hg)) : fe("", !0),
              we("span", Zg, [
                we("span", Jg, [
                  we("span", Xg, Ce(Le._summary.productLabel), 1),
                  Le._summary.brand ? (D(), te("span", Qg, Ce(Le._summary.brand), 1)) : fe("", !0)
                ]),
                Le._summary.code ? (D(), te("span", Yg, Ce(Le._summary.code), 1)) : fe("", !0)
              ])
            ], 42, Kg))), 128))
          ])
        ], 36)) : fe("", !0)
      ], 8, ["to", "disabled"]))
    ], 2));
  }
}), th = /* @__PURE__ */ pn(eh, [["__scopeId", "data-v-b7c414ab"]]), nh = ["id", "data-field", "data-index", "disabled"], Yl = /* @__PURE__ */ St({
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
    const t = e, a = n, i = M(() => t.type === "finish" ? ["fass", "spray-can"] : ["fass", "planing"]), s = M(() => !!t.inputShape && ha(t.inputShape, t.type, "face.a")), u = M(() => !!t.inputShape && ha(t.inputShape, t.type, "face.b")), c = () => {
      t.disabled || a("clicked");
    };
    return (p, f) => {
      const y = ya("Icon");
      return D(), te("button", {
        id: e.id,
        class: gt(["c-btn", [`${e.type}-button`, {
          "face-a": s.value,
          "face-b": u.value,
          selected: e.open
        }]]),
        "data-field": e.type,
        "data-index": e.index,
        type: "button",
        tabindex: "0",
        disabled: e.disabled,
        onClick: c
      }, [
        ct(y, { icon: i.value }, null, 8, ["icon"])
      ], 10, nh);
    };
  }
}), ah = { inheritAttrs: !1 }, ih = /* @__PURE__ */ St({
  ...ah,
  __name: "FinishButton",
  setup(e) {
    return (n, t) => (D(), $e(Yl, tn({ type: "finish" }, n.$attrs), null, 16));
  }
});
function sh(e) {
  return e.machining ? "toData" in e.machining ? e.machining.toData() : e.machining : { holes: [], hingeHoles: [], corners: {} };
}
function oh(e) {
  const n = sh(e);
  return n ? !!(n.holes && n.holes.length > 0 || n.hingeHoles && n.hingeHoles.length > 0 || n.corners && Object.values(n.corners).some((t) => t && t.type && t.size > 0)) : !1;
}
const lh = St({
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
      return oh(this.inputShape);
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
}), rh = ["id", "disabled"];
function uh(e, n, t, a, i, s) {
  const u = ya("Icon");
  return D(), te("button", {
    id: e.id,
    class: gt(["c-btn machining-button", { selected: e.hasMachining }]),
    type: "button",
    disabled: e.disabled,
    onClick: n[0] || (n[0] = (...c) => e.openMachining && e.openMachining(...c))
  }, [
    ct(u, { icon: ["fass", "machining"] })
  ], 10, rh);
}
const ch = /* @__PURE__ */ pn(lh, [["render", uh]]), dh = St({
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
}), fh = ["id", "disabled"];
function ph(e, n, t, a, i, s) {
  const u = ya("Icon");
  return D(), te("button", {
    id: e.id,
    class: gt(["c-btn custom-products-button", { selected: e.hasSelections }]),
    type: "button",
    disabled: e.disabled,
    onClick: n[0] || (n[0] = (...c) => e.open && e.open(...c))
  }, [
    ct(u, { icon: ["fass", "box"] })
  ], 10, fh);
}
const mh = /* @__PURE__ */ pn(dh, [["render", ph]]), gh = ["id"], hh = /* @__PURE__ */ St({
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
    const t = e, a = n, i = ee(0), s = ee(!1), u = (_, w, R, de) => {
      if (!st(R) || w === 0)
        return _;
      const Ae = c();
      return w === 1 || w === 2 && de !== "n" && _ ? Ae : _;
    }, c = (_) => {
      const w = { ...t, ..._ };
      return !w.rectangle || !st(w.rectangle) ? "" : w.orientationModel === 0 ? me.value : wc(
        w.orientationModel,
        w.stockGrain,
        w.rectangle.l,
        w.rectangle.w
      );
    }, p = () => {
      if (t.disabled || ue.value.length <= 1)
        return;
      const _ = f(me.value);
      "multiEdit" in t.rectangle && t.rectangle.multiEdit && me.value === "" && i.value !== _ && i.value === 0 && (i.value = _);
      let R = null;
      [1, 2].includes(t.orientationModel) ? R = I() : R = y(), i.value = R;
    }, f = (_) => {
      const w = ue.value.findIndex((R) => R === _);
      return w === -1 ? 0 : w;
    }, y = () => {
      let _ = i.value + 1;
      return _ > ue.value.length - 1 && (_ = 0), _;
    }, I = () => {
      let _ = 0;
      if (me.value === "") {
        const w = c();
        _ = ue.value.findIndex((R) => R === w);
      } else
        _ = ue.value.findIndex((w) => w === "");
      return _;
    }, P = (_) => {
      a("updateOrientation", _);
    }, v = () => {
      const _ = me.value;
      if ("multiEdit" in t.rectangle && t.rectangle.multiEdit)
        return _ === " " ? " " : _ === "" ? "" : _ === "l" ? "l" : _ === "w" ? "w" : "default";
      switch (t.orientationModel) {
        case 0:
          return _ === " " ? " " : _ ? t.stockGrain === "n" ? _ || t.shapeOrientation || "default" : t.stockGrain === "w" ? _ === "w" ? "w" : "l" : _ === "l" ? "l" : "w" : "default";
        case 1:
          return _ === " " ? " " : _ ? t.stockGrain === "n" ? _ || t.shapeOrientation || "default" : t.stockGrain === "w" ? _ === "w" ? "w" : "l" : _ === "l" ? "l" : "w" : "default";
        case 2:
          return _ === " " ? " " : _ ? t.stockGrain === "n" ? _ || t.shapeOrientation || "default" : t.stockGrain === "w" ? _ === "w" ? "w" : "l" : _ === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, j = () => {
      if (!t.rectangle)
        return;
      if ("multiEdit" in t.rectangle && t.rectangle.multiEdit && !me.value) {
        he("");
        return;
      }
      const _ = u(
        me.value,
        t.orientationModel,
        t.rectangle,
        t.stockGrain
      );
      if (_ !== me.value) {
        he(_);
        return;
      }
      if (!s.value || i.value === -1) {
        const w = f(me.value);
        i.value = w;
      }
      if (st(t.rectangle)) {
        if (t.orientationModel === 1) {
          const w = C.value ? c() : me.value;
          he(w);
          return;
        }
        if (t.orientationModel === 2) {
          let w;
          C.value ? w = t.stockGrain !== "n" ? c() : "" : w = me.value, he(w);
        }
      }
    }, X = ee(!1), he = (_) => {
      const w = f(_);
      X.value = !0, i.value = w, X.value = !1, P(_);
    }, ue = M(() => {
      if (!t.rectangle) return ["l", "w"];
      if (qn(t.rectangle)) return ["l", "w"];
      let _ = ["", "l", "w"];
      return t.rectangle.multiEdit ? [" ", "", "l", "w"] : (ae.value && (_ = _.filter((w) => w !== "w")), _);
    }), ae = M(() => st(t.rectangle) || Gi(t.rectangle) ? t.rectangle.isSquare : t.rectangleType && t.rectangle?.l && t.rectangle?.w ? t.rectangle?.l === t.rectangle?.w : !1), me = M(() => {
      let _ = "";
      if (qn(t.rectangle))
        _ = t.rectangle.direction === "horizontal" ? "l" : "w";
      else if (st(t.rectangle)) {
        const w = t.rectangle.orientationLock;
        _ = w === null ? "" : w;
      } else if (Gi(t.rectangle)) {
        const R = t.rectangle.grain ?? "";
        R === "l" || R === "w" || R === "" || R === " " ? _ = R : _ = "";
      }
      return _;
    }), ye = M(() => qn(t.rectangle) || !t.rectangle ? {
      l: null,
      w: null
    } : {
      l: t.rectangle.l,
      w: t.rectangle.w
    }), C = M(() => !ye.value.l && !ye.value.w), E = M(() => qn(t.rectangle) ? !1 : ui(
      t.orientationModel,
      t.stockGrain,
      t.rectangle,
      t.rectangleType,
      t.shapeOrientation
    )), K = M(() => {
      if (!t.rectangle)
        return t.shapeOrientation ? "noGrain" : "freeRotation";
      if (Gi(t.rectangle) || t.rectangleType === "stock") {
        const Ae = t.rectangle.grain;
        return "multiEdit" in t.rectangle && t.rectangle.multiEdit ? {
          " ": "noGrain",
          // Clear to no grain
          "": "noChange",
          // No change
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[Ae] || "noGrain" : {
          "": "noGrain",
          // No grain
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[Ae] || "noGrain";
      }
      const _ = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, w = t.stockGrain || "default";
      let R = "default";
      st(t.rectangle) || t.rectangleType === "shape" ? R = v() : qn(t.rectangle) && (R = t.rectangle.direction || "default");
      const de = _[w]?.[R];
      return de || _[w]?.default || "freeRotation";
    }), U = M(() => ({
      delete: "trash",
      noChange: "no-change",
      freeRotation: "arrows-rotate",
      leftRight: "arrows-left-right",
      topBottom: "arrows-up-down",
      grainLeftRight: "grain-h",
      grainTopBottom: "grain-v",
      noGrain: "no-grain"
    })[K.value]);
    return tt(i, (_, w) => {
      s.value && w !== void 0 && (X.value || P(ue.value[_]));
    }, { immediate: !1 }), tt(ye, (_, w) => {
      if (!t.rectangle || t.orientationModel === 0 || !st(t.rectangle) || st(t.rectangle) && (t.orientationModel === 2 && w.l && w.w && !me.value || t.stockGrain === "n" && !me.value))
        return;
      const R = c();
      me.value !== R && P(R);
    }, { immediate: !1 }), tt(() => t.stockGrain, (_, w) => {
      _ !== w && j();
    }, { immediate: !0 }), vn(() => {
      j(), jt(() => s.value = !0);
    }), (_, w) => {
      const R = ya("Icon");
      return D(), te("button", {
        type: "button",
        id: e.id,
        class: gt(["c-btn orientation-button", { rot: E.value, square: ae.value, disabled: e.disabled, [K.value]: !0 }]),
        tabindex: "0",
        "aria-label": "Part orientation",
        onClick: p
      }, [
        ct(R, { name: U.value }, null, 8, ["name"])
      ], 10, gh);
    };
  }
}), bh = { inheritAttrs: !1 }, vh = /* @__PURE__ */ St({
  ...bh,
  __name: "PlaningButton",
  setup(e) {
    return (n, t) => (D(), $e(Yl, tn({ type: "planing" }, n.$attrs), null, 16));
  }
});
function yh(e, n, t) {
  let a = null;
  tt(
    () => e.value ? { l: e.value.l, w: e.value.w } : null,
    (i) => {
      const s = typeof n == "number" ? n : n.value;
      if (!vc(s) || !i || !e.value) return;
      const u = i.w > i.l;
      if (a === null) {
        a = u;
        return;
      }
      if (a !== u) {
        const c = yc(s);
        for (const p of c)
          Yu(e.value, p);
        a = u;
      }
    },
    { immediate: !0 }
  );
}
const kh = {
  key: 0,
  class: "info"
}, wh = ["disabled"], Sh = /* @__PURE__ */ St({
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
    const t = e, a = n, i = M(() => t.field.name === "banding" && st(t.item) ? t.item : null);
    yh(i, Yt(t, "orientationModel"));
    const s = ["orientationLock", "banding", "bandingOptions", "machining", "finish", "planing", "imageUpload"], u = M(() => s.includes(t.field.name) || t.field.name === "material" && t.typePrefix === "part" || t.field.name === "t" && t.thicknessOptions?.length > 0 || t.field.name === "w" && t.widthOptions?.length > 0), c = M(() => {
      try {
        const C = t.field.propertyPath || t.field.name;
        return C.includes(".") ? Kt(t.item, C) ?? null : t.item[C] ?? null;
      } catch (C) {
        return console.error("[CheckoutField] Error getting field value:", C), null;
      }
    }), p = M(() => {
      if (t.field.custom && t.field.type) {
        const K = t.field.type;
        if (["checkbox", "select", "string", "integer", "unitDependent"].includes(K))
          return K;
      }
      const C = {
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
      const E = C[t.field.type];
      return E || "string";
    }), f = M(() => t.field.output ? t.field.output : null), y = M(() => t.field.options || []), I = M(() => !!(t.readonly || t.item?.readonly || t.fullStockDisabled)), P = M(() => t.item.isNew ? !1 : ko(t.item, [t.field.name])), v = M(() => t.item.isNew ? !1 : ko(t.item, [t.field.name], !0)), j = M(() => t.multiEdit || t.item.isNew || !1), X = M(() => t.materialOptions?.length > 0 && st(t.item) ? !t.item.material : !1), he = M(() => t.widthOptions?.length === 1), ue = M(() => t.field.info ? typeof t.field.info == "string" ? t.field.info : typeof t.field.info == "object" && c.value !== null && t.field.info[c.value] || null : null), ae = (C) => {
      a("update", C);
    }, me = (C, E) => {
      a("validation", C, E);
    }, ye = () => {
      a("blur");
    };
    return (C, E) => u.value ? (D(), te(At, { key: 1 }, [
      e.field.name === "orientationLock" ? (D(), $e(hh, {
        key: 0,
        rectangle: e.item,
        "stock-grain": e.stockGrain,
        "orientation-model": e.orientationModel,
        "button-background": "#2c8d8f",
        disabled: I.value,
        onUpdateOrientation: ae
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : e.field.name === "banding" ? (D(), $e(Tg, {
        key: 1,
        "input-shape": N(st)(e.item) ? e.item : null,
        open: e.bandingEnabled?.autoId === e.item.autoId,
        "stock-grain": e.stockGrain,
        "orientation-model": e.orientationModel,
        index: e.index,
        disabled: I.value || e.materialExtrasDisabled?.banding,
        onClicked: E[0] || (E[0] = (K) => C.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "orientation-model", "index", "disabled"])) : e.field.name === "finish" ? (D(), $e(ih, {
        key: 2,
        "input-shape": N(st)(e.item) ? e.item : null,
        open: !1,
        index: e.index,
        disabled: I.value || e.materialExtrasDisabled?.finish,
        onClicked: E[1] || (E[1] = (K) => C.$emit("open-finish"))
      }, null, 8, ["input-shape", "index", "disabled"])) : e.field.name === "planing" ? (D(), $e(vh, {
        key: 3,
        "input-shape": N(st)(e.item) ? e.item : null,
        open: !1,
        index: e.index,
        disabled: I.value || e.materialExtrasDisabled?.planing,
        onClicked: E[2] || (E[2] = (K) => C.$emit("open-planing"))
      }, null, 8, ["input-shape", "index", "disabled"])) : e.field.name === "machining" ? (D(), $e(ch, {
        key: 4,
        "input-shape": N(st)(e.item) ? e.item : null,
        disabled: I.value || e.materialExtrasDisabled?.machining,
        onOpen: E[3] || (E[3] = (K) => C.$emit("open-machining"))
      }, null, 8, ["input-shape", "disabled"])) : e.field.name === "customProducts" ? (D(), $e(mh, {
        key: 5,
        "input-shape": N(st)(e.item) ? e.item : null,
        disabled: I.value,
        onOpen: E[4] || (E[4] = (K) => C.$emit("open-custom-products"))
      }, null, 8, ["input-shape", "disabled"])) : e.field.name === "material" && e.typePrefix === "part" && e.materialItems && e.materialItems.length > 0 ? (D(), $e(th, {
        key: 6,
        id: `${e.typePrefix}-material-${e.index}`,
        value: c.value,
        options: e.materialItems,
        "value-key": "materialKey",
        label: N(Pe)(e.field.label || "fields.material"),
        placeholder: N(Pe)(e.field.placeholder || "fields.material"),
        "enable-label": !1,
        disabled: e.field.disabled || I.value || e.readonly,
        required: e.field.required || !1,
        issue: P.value,
        "allow-clear": !1,
        "onUpdate:value": ae
      }, null, 8, ["id", "value", "options", "label", "placeholder", "disabled", "required", "issue"])) : e.field.name === "material" && e.typePrefix === "part" ? (D(), $e(Fa, {
        key: 7,
        id: `${e.typePrefix}-material-${e.index}`,
        "data-field": e.field.name,
        "data-index": e.index,
        type: "select",
        value: c.value,
        label: N(Pe)(e.field.label || "fields.material"),
        placeholder: N(Pe)(e.field.placeholder || "fields.material"),
        "enable-label": !1,
        output: "string",
        options: e.materialOptions,
        "select-first-option-disabled": !0,
        disabled: !e.materialOptions?.length,
        required: !1,
        text: {
          select: N(Pe)("actions.select"),
          delete: N(Pe)("actions.delete")
        },
        "onUpdate:value": ae,
        onValidation: me
      }, {
        default: cn(() => [
          nn(C.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : e.field.name === "t" && e.thicknessOptions?.length > 0 ? (D(), $e(Fa, {
        key: 8,
        id: `${e.typePrefix}-${e.field.name}-${e.index}`,
        "data-field": e.field.name,
        "data-index": e.index,
        type: "select",
        value: c.value,
        label: N(Pe)(e.field.label || "fields.t"),
        "enable-label": !1,
        options: e.thicknessOptions,
        readonly: e.readonly,
        disabled: X.value,
        required: e.field.required || !1,
        "number-format": e.numberFormat,
        text: {
          select: N(Pe)("actions.select"),
          delete: N(Pe)("actions.delete")
        },
        output: "number",
        "onUpdate:value": ae,
        onValidation: me
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : e.field.name === "w" && e.widthOptions?.length > 0 ? (D(), $e(Fa, {
        key: 9,
        id: `${e.typePrefix}-${e.field.name}-${e.index}`,
        "data-field": e.field.name,
        "data-index": e.index,
        type: "select",
        value: c.value,
        label: N(Pe)(e.field.label || "fields.w"),
        "enable-label": !1,
        options: e.widthOptions,
        readonly: e.readonly,
        disabled: he.value,
        required: e.field.required || !1,
        "number-format": e.numberFormat,
        text: {
          select: N(Pe)("actions.select"),
          delete: N(Pe)("actions.delete")
        },
        output: "number",
        "onUpdate:value": ae,
        onValidation: me
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : e.field.name === "imageUpload" ? (D(), te("button", {
        key: 10,
        type: "button",
        disabled: e.readonly,
        onClick: E[5] || (E[5] = (K) => C.$emit("open-image-upload"))
      }, [
        ct(N(hi), { icon: ["fass", "image"] })
      ], 8, wh)) : fe("", !0)
    ], 64)) : (D(), $e(Fa, {
      key: 0,
      id: `${e.typePrefix}-${e.field.name}-${e.index}`,
      "data-field": e.field.name,
      "data-index": e.index,
      type: p.value,
      value: c.value,
      label: N(Pe)(e.field.label || e.field.name),
      placeholder: N(Pe)(e.field.placeholder || e.field.name),
      "enable-label": e.enableLabel,
      output: f.value,
      options: y.value,
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
      issue: P.value,
      warning: v.value,
      "disable-required-validation": j.value,
      "onUpdate:value": ae,
      onValidation: me,
      onBlur: ye
    }, {
      default: cn(() => [
        ue.value ? (D(), te("p", kh, [
          ct(N(hi), { icon: ["fass", "info-circle"] }),
          dn(" " + Ce(ue.value), 1)
        ])) : fe("", !0),
        nn(C.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "data-field", "data-index", "type", "value", "label", "placeholder", "enable-label", "output", "options", "select-first-option-disabled", "disabled", "readonly", "required", "allow-zero", "true-value", "false-value", "default", "number-format", "min", "max", "multi-edit", "text", "issue", "warning", "disable-required-validation"]));
  }
}), Rn = window.__topLayerDialogStack ?? (window.__topLayerDialogStack = ee([]));
function oi(e) {
  return !!e && (e.matches?.(":popover-open") || e.open);
}
const wi = /* @__PURE__ */ new Set();
function zo(e, n) {
  e.inert = n, n ? wi.add(e) : wi.delete(e);
}
function xh(e) {
  const n = [];
  let t = e.parentElement;
  for (; t && t !== document.body; )
    n.push(t), t = t.parentElement;
  return n;
}
function ss() {
  for (const u of wi) u.inert = !1;
  wi.clear();
  const e = Rn.value, n = e[e.length - 1], t = n?.el ?? null, a = !!n?.modal, i = t ? new Set(xh(t)) : /* @__PURE__ */ new Set(), s = (u) => {
    for (const c of Array.from(u.children)) {
      const p = c;
      if (p === t) {
        p.inert = !1;
        continue;
      }
      if (i.has(p)) {
        p.inert = !1, s(p);
        continue;
      }
      if (p.matches?.(":popover-open")) {
        p.inert = !1;
        continue;
      }
      zo(p, a);
    }
  };
  s(document.body);
  for (const u of e)
    u.el && u !== n && zo(u.el, !0);
}
function Ih() {
  const e = document.getElementById("smartcut-notices");
  e?.matches(":popover-open") && (e.hidePopover(), e.showPopover());
}
function Ph(e, n = {}) {
  const t = /* @__PURE__ */ Symbol("top-layer-dialog"), a = M(() => Rn.value.findIndex((f) => f.token === t));
  function i() {
    const f = e.value;
    if (!f || oi(f)) return;
    typeof f.showPopover == "function" ? f.showPopover() : typeof f.showModal == "function" ? f.showModal() : f.setAttribute("open", "");
    const y = n.modal ? n.modal() : !0;
    Rn.value.some((I) => I.token === t) || Rn.value.push({ token: t, el: f, modal: y }), ss(), Ih();
  }
  function s() {
    const f = e.value;
    !f || !oi(f) || (f.matches?.(":popover-open") && typeof f.hidePopover == "function" ? f.hidePopover() : f.open ? f.close() : f.removeAttribute("open"));
  }
  function u() {
    const f = Rn.value.findIndex((I) => I.token === t);
    if (f < 0) return !1;
    const [y] = Rn.value.splice(f, 1);
    return y?.el && (y.el.inert = !1), ss(), !0;
  }
  function c(f) {
    return f.newState === "closed" ? u() : !1;
  }
  function p() {
    const f = e.value;
    f && oi(f) && s();
    const y = Rn.value.findIndex((I) => I.token === t);
    y >= 0 && Rn.value.splice(y, 1), f && (f.inert = !1), ss();
  }
  return { show: i, close: s, onClosed: u, onToggle: c, cleanup: p, isShown: oi, stackIndex: a };
}
const Ch = {
  key: 0,
  class: "base-dialog__header"
}, Lh = {
  key: 1,
  class: "base-dialog__footer"
}, Eh = /* @__PURE__ */ St({
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
    const a = e, i = t, s = ee(null), u = ee(null), c = ee(null), p = ee({}), f = !1;
    function y() {
      const U = c.value;
      if (!U) return;
      const _ = getComputedStyle(U);
      p.value = {
        "font-family": _.fontFamily,
        "font-size": _.fontSize,
        "line-height": _.lineHeight,
        color: _.color
      };
    }
    const {
      show: I,
      close: P,
      onClosed: v,
      cleanup: j,
      isShown: X,
      stackIndex: he
    } = Ph(s, { modal: () => a.modal }), ue = M(() => ({
      "base-dialog__body--form": a.bodyForm,
      "smartcut-content": a.compact
    })), ae = M(() => ({ ...p.value }));
    function me() {
      const U = s.value;
      !U || X(U) || (y(), I(), i("opened"));
    }
    function ye() {
      v() && (i("update:open", !1), i("closed"));
    }
    function C(U) {
      U.newState === "closed" && ye();
    }
    function E() {
      P();
    }
    function K(U) {
      a.closeOnBackdrop && U.target === s.value && P();
    }
    return tt(() => a.open, (U, _) => {
      U !== void 0 && (U && !_ ? me() : !U && _ && P());
    }), vn(() => {
      a.open === !0 && me();
    }), Ii(() => {
      j();
    }), n({
      show: me,
      close: P,
      dialogRef: s,
      bodyRef: u
    }), (U, _) => (D(), te(At, null, [
      we("span", {
        ref_key: "anchorRef",
        ref: c,
        class: "base-dialog__anchor",
        "aria-hidden": "true"
      }, null, 512),
      (D(), $e(xi, {
        to: "body",
        disabled: f
      }, [
        we("dialog", {
          ref_key: "dialogRef",
          ref: s,
          popover: "manual",
          class: gt(["base-dialog", [`base-dialog--${e.size}`, { "base-dialog--compact": e.compact, "base-dialog--stacked": N(he) > 0 }]]),
          style: Xt(ae.value),
          onClick: K,
          onToggle: C,
          onClose: ye,
          onKeydown: Jo(E, ["esc"])
        }, [
          U.$slots.header || e.title ? (D(), te("header", Ch, [
            nn(U.$slots, "header", {}, () => [
              we("h3", null, Ce(e.title), 1),
              we("button", {
                type: "button",
                class: "base-dialog__close",
                "aria-label": "Close",
                onClick: _[0] || (_[0] = //@ts-ignore
                (...w) => N(P) && N(P)(...w))
              }, "×")
            ])
          ])) : fe("", !0),
          we("div", {
            ref_key: "bodyRef",
            ref: u,
            class: gt(["base-dialog__body", ue.value])
          }, [
            nn(U.$slots, "default")
          ], 2),
          U.$slots.footer ? (D(), te("footer", Lh, [
            nn(U.$slots, "footer", { close: N(P) })
          ])) : fe("", !0)
        ], 38)
      ]))
    ], 64));
  }
}), Th = { class: "full-stock-dialog__intro" }, Oh = { class: "full-stock-dialog__options" }, Ah = ["onClick"], Fh = { class: "full-stock-dialog__dim" }, Nh = {
  key: 0,
  class: "full-stock-dialog__price"
}, Mh = ["onClick"], $h = /* @__PURE__ */ St({
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
    const t = e, a = n, i = M({
      get: () => t.open,
      set: (y) => a("update:open", y)
    }), s = M(() => Pe("ecommerce.fullStock.title")), u = M(() => {
      const y = [];
      t.materialLabel && y.push(t.materialLabel), t.thickness != null && t.thickness !== "" && y.push(`${t.thickness}mm`);
      const I = y.join(" · ");
      return I ? ri("ecommerce.fullStock.hint_for", { context: I }) : Pe("ecommerce.fullStock.hint");
    });
    let c = !1;
    function p(y) {
      c = !0, a("pick", y), a("update:open", !1);
    }
    function f() {
      c || a("cancel"), c = !1;
    }
    return (y, I) => (D(), $e(Eh, {
      open: i.value,
      "onUpdate:open": I[0] || (I[0] = (P) => i.value = P),
      title: s.value,
      size: "sm",
      onClosed: f
    }, {
      footer: cn(({ close: P }) => [
        we("button", {
          type: "button",
          class: "c-btn c-btn--ghost",
          onClick: P
        }, Ce(N(Pe)("actions.cancel")), 9, Mh)
      ]),
      default: cn(() => [
        we("div", Th, Ce(u.value), 1),
        we("ul", Oh, [
          (D(!0), te(At, null, an(e.options, (P) => (D(), te("li", {
            key: `${P.l}x${P.w}`,
            class: "full-stock-dialog__option"
          }, [
            we("button", {
              type: "button",
              class: "full-stock-dialog__option-btn",
              onClick: (v) => p(P)
            }, [
              we("span", Fh, Ce(P.l) + " × " + Ce(P.w), 1),
              P.cost != null && e.formatPrice ? (D(), te("span", Nh, Ce(e.formatPrice(P.cost)), 1)) : fe("", !0)
            ], 8, Ah)
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title"]));
  }
}), Dh = /* @__PURE__ */ pn($h, [["__scopeId", "data-v-2dbce177"]]), _h = { class: "checkout-calculator-wrapper" }, Rh = {
  key: 0,
  class: "row table-heading"
}, qh = {
  key: 0,
  class: "cell center"
}, Bh = {
  key: 1,
  class: "cell del"
}, Vh = ["onClick"], Uh = {
  key: 0,
  class: "cell"
}, jh = ["onClick"], Gh = {
  key: 1,
  class: "cell"
}, Wh = ["disabled", "aria-label", "title", "onClick"], Kh = { class: "cell" }, zh = ["disabled", "aria-label", "onClick"], Hh = { class: "button-wrapper main" }, Zh = ["aria-label"], Jh = ["aria-label", "title", "disabled"], Xh = ["aria-label"], Qh = { id: "part-count" }, Yh = {
  key: 5,
  class: "pagination-controls"
}, eb = { class: "c-btn-group" }, tb = ["disabled"], nb = ["disabled"], ab = { class: "pagination-info" }, ib = ["disabled"], sb = ["disabled"], ob = {
  key: 7,
  id: "messages"
}, lb = {
  key: 0,
  class: "heading"
}, rb = { class: "content" }, ub = {
  key: 8,
  id: "progress"
}, cb = { id: "diagram-wrapper" }, db = {
  key: 0,
  id: "stack"
}, fb = {
  key: 3,
  class: "debug"
}, pb = /* @__PURE__ */ St({
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
    // This shop's `ecommerce.slug`, sent with the calculation so the server can
    // bind the job to the account behind the shop. Only a PLATFORM-hosted shop
    // needs it — a custom-domain shop is resolved from the request host — so it
    // is empty on the WordPress shell and harmless when absent.
    orgSlug: {
      type: String,
      default: ""
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
    const a = zt(() => import("./InputIssues-BRpH2Ki5.js")), i = zt(() => import("./Machining-DlKzYtV0.js")), s = zt(() => import("./CustomProducts-Db-vJHH8.js")), u = zt(() => import("./ImportCSV-CAuUwKID.js")), c = zt(() => import("./ObjectViewer-IjOsrd1T.js")), p = zt(() => import("./ImageUpload-BW6zXrqU.js")), f = zt(() => import("./EcommerceGroups-DZaAmzc0.js")), y = () => import("./Diagram-TUUrkGbG.js"), I = () => import("./Navigation-BVDQhTcX.js"), P = () => import("./StockNavigation-DvyfKNgk.js"), v = () => import("./CalculationSpinner-B0sCiimd.js"), j = zt(y), X = zt(I), he = zt(P), ue = zt(v);
    let ae = !1;
    const me = ee(!1);
    function ye() {
      ae || (ae = !0, y().then(() => {
        me.value = !0;
      }), I(), P(), v());
    }
    const {
      inputs: C,
      totalInputShapes: E,
      getShapeGrainSummary: K,
      updateNumberFormat: U,
      validateInputStock: _,
      // validateInputShapeField,
      // validateInputStockField,
      removeInputShape: w,
      addInputShape: R,
      duplicateInputShape: de,
      addInputStock: Ae,
      cloneInputShape: Be,
      updateInputShape: vt,
      linkRowMaterialByName: dt,
      validationIssues: He,
      setExtrasOptionsFromPricing: Je,
      getCentralizedOptions: rt
    } = ml(), { r: G, updateFromResult: Y, stackedStock: Le, uniqueAddedShapes: qe, uniqueUsedStock: _e, usedStock: Ie, activeStockAutoId: le, activeStock: H, setActiveStockAutoId: ce } = Ep();
    Ip({
      stockList: G.stockList
    }, {
      stockList: { itemsPerPage: 10 }
    });
    const { progress: Ve, reset: Ke } = Ll(), { addNotice: Ge } = Ci();
    tt(() => C.inputStock.value?.length ?? 0, (o) => {
      o > 0 && ye();
    }, { immediate: !0 }), tt(
      () => C.inputStock.value?.[0]?.db_sawId ?? null,
      (o) => {
        if (!o || String(o) === ta.value) return;
        const r = na.value?.[String(o)];
        r && On(r);
      }
    );
    const $t = ee(!1);
    tt(() => Ve.value.complete, (o) => {
      o && ($t.value = !0);
    }, { immediate: !0 });
    const Ft = M(() => C.inputShapes.value.filter(st)), ht = (o) => !o || !Array.isArray(o) ? [] : o.map((r) => Qc({ parts: [r] }).parts?.[0] || r), re = e, oe = t, ze = ee(!1), Te = ee(navigator?.language || "en-US"), We = ua(null), nt = window.location.hostname, ft = ee(!1), bt = ee(!0), Nt = su("Checkout/currentURL", window.location.href), Rt = ee([]), yt = ee(null), qt = ee(null), En = ee(!1), mn = ee(!1), Ye = ee(!1), ea = ee(!1), yn = ee(!1), Tn = ee(bc()), kn = ee(!1), Et = ee(1), Tt = ee(10), { socket: sn } = $p({
      refs: {
        connected: ft,
        thinking: Ye
      },
      callbacks: {
        onResult(o) {
          const r = o.optimisation;
          if (Y(r), !r.shapeList?.length || !r.stockList?.length) {
            Ke(), Ge({
              type: "error",
              message: Pe("errors.calculation.no_result"),
              additional: [Pe("errors.validation.check_inputs")]
            }), Ye.value = !1;
            return;
          }
          if ((be.apiVersion || 3) === 2 ? qt.value = hg(
            o.jobId,
            qe.value,
            _e.value,
            Ie.value,
            G.offcuts?.value || [],
            C.inputShapes.value,
            G.metadata.value,
            be.resultOrientationModel
          ) : qt.value = bg(
            o.jobId,
            qe.value,
            _e.value,
            Ie.value,
            G.offcuts?.value || [],
            C.inputShapes.value,
            G.metadata.value,
            be.resultOrientationModel
          ), G?.metadata?.value?.unplacedParts?.length) {
            const g = G.metadata.value.unplacedParts.map((L) => L.id).join();
            Ge({
              type: "warning",
              message: Pe("errors.validation.parts_not_fit", { count: G.metadata.value.unplacedParts.length }) + ": " + g
            });
          }
          qt.value && (qt.value.apiResultV3 = xd({
            jobId: o.jobId,
            saw: r.saw,
            stockList: r.stockList,
            shapeList: r.shapeList,
            cutList: r.cutList,
            offcuts: G.offcuts?.value || [],
            unusableShapes: r.unusableShapes,
            metadata: G.metadata.value
          }), oe("result", qt.value)), Ye.value = !1;
        },
        onUser(o) {
          We.value = o;
        },
        onConnectError(o) {
          const r = o?.kind === "rejected", h = o?.endpoint;
          Ge({
            type: "error",
            message: r ? Pe("errors.general.server") : Pe("errors.network.cannot_connect"),
            additional: h ? [h, o] : [o]
          });
        },
        onError(o) {
          Ge({
            type: "error",
            message: Pe("errors.general.error_occurred"),
            additional: [o]
          });
        }
      }
    }), Bt = {
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
        duplicate: !1,
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
    }, be = gn(Bt), Ee = gn({
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
    }), ta = ee(null), na = ee({});
    function On(o) {
      if (o) {
        if (o.stockType !== void 0 && (us.includes(o.stockType) || console.warn(`${o.stockType} is not a valid stockType, expected ${us.join("|")}`), Ee.stockType = o.stockType), o.bladeWidth !== void 0) {
          const r = typeof o.bladeWidth == "string" ? parseFloat(o.bladeWidth) : o.bladeWidth;
          r >= 0 ? Ee.bladeWidth = r : console.warn(`SmartCut - you provided an incorrect blade width of: ${o.bladeWidth}`);
        }
        if (o.cutType !== void 0 && (Ee.cutType = o.cutType), o.cutPreference !== void 0 && (wo.includes(o.cutPreference) ? Ee.cutPreference = o.cutPreference : console.warn(`SmartCut - cut preference ${o.cutPreference || "N/A"} is not valid. Expected: ${wo.join("|")}`)), o.guillotineOptions !== void 0 && typeof o.guillotineOptions == "object" && Object.assign(Ee.guillotineOptions, o.guillotineOptions), o.stackHeight !== void 0) {
          const r = typeof o.stackHeight == "string" ? parseFloat(o.stackHeight) : o.stackHeight;
          Ee.stackHeight = r;
        }
        o.efficiencyOptions !== void 0 && typeof o.efficiencyOptions == "object" && Object.assign(Ee.efficiencyOptions, o.efficiencyOptions), o.options !== void 0 && typeof o.options == "object" && (o.options.stockSelection !== void 0 && (Ee.options.stockSelection = o.options.stockSelection), o.options.stackingMode !== void 0 && (Ee.options.stackingMode = o.options.stackingMode), o.options.minSpacing !== void 0 && (Ee.options.minSpacing = o.options.minSpacing)), o.db_id && (ta.value = String(o.db_id)), ec(Ee, { door: "input", source: "EcommerceCalculator" });
      }
    }
    const It = ee(null), wn = M(() => !!be.enable?.groups && !re.readonly), Bn = ee(null), on = ee(0), Sn = ee(null), _a = M(() => {
      const o = C.inputStock.value.map((r) => r.grain).filter((r) => !!r);
      return o.length ? o.every((r) => r === "l") ? "l" : o.every((r) => r === "w") ? "w" : o.some((r) => r === "l" || r === "w") ? "y" : "n" : "n";
    }), Ra = M(() => ({
      numberFormat: be.numberFormat,
      decimalPlaces: be.decimalPlaces ?? 2,
      fractionRoundTo: be.fractionRoundTo ?? 0
    })), qa = (o) => {
      Sn.value?.currentGroup && (Bn.value = o, on.value++);
    }, x = (o) => {
      It.value = C.inputShapes.value.find((r) => r.autoId === o) ?? null;
    }, S = () => {
    }, k = ee(!1), A = ee(""), W = ee(""), d = ee(!1), b = ee(null);
    function $(o) {
      const r = b.value;
      if (d.value = !1, b.value = null, !r) return;
      const h = { fullStock: !0, l: o.l, w: o.w };
      if (vt(r.shape.autoId, h) || (r.shape.fullStock = !0, r.shape.l = o.l, r.shape.w = o.w, r.shape.isNew || r.shape.validate({ fields: ["fullStock", "l", "w"] })), o.db_id || o.code) {
        const L = r.shape.stock || {};
        r.shape.stock = {
          ...L,
          ...o.db_id ? { db_id: o.db_id } : {},
          ...o.code ? { code: o.code } : {}
        };
      }
    }
    function B() {
      d.value = !1, b.value = null;
    }
    tt(He, (o) => {
      o?.length > 0 ? (k.value = !0, A.value = "Validation Errors", W.value = o.map((r) => `${li(r.message, r.context || r.params)} (${r.category.join(", ")})`).join(`

`)) : A.value === "Validation Errors" && (k.value = !1, A.value = "", W.value = "");
    }, { deep: !0 });
    const z = gn({
      banding: null,
      finish: null,
      info: null,
      planing: null,
      machining: null,
      addon: null
      // imageUpload: null
    }), V = ee([]), ie = ee([]), xe = ee([]), ke = ee([]);
    function Ct(o) {
      if (o.length > 1) return !0;
      if (o.length === 0) return !1;
      const r = o[0];
      return !!(r.brand || r.variant || r.displayName && r.displayName !== r.name);
    }
    const Oe = gn({
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
    }), De = gn({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["l1", "l2", "w1", "w2"]
    }), Ue = gn({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["a", "b"]
    }), ot = gn({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]
      // All sides and faces by default
    }), kt = ee(null), Pt = gn({}), ln = gn({}), xn = gn({}), Vn = ee(null), Un = ee(null), Li = M(() => ({
      banding: Pt.rules,
      finish: ln.rules,
      planing: xn.rules
    })), jn = M(() => {
      const o = Pt.recut;
      return o?.enabled ? { limits: Ed(o) } : null;
    }), aa = M(() => Np({
      stockType: Ee.stockType || "sheet",
      materials: V.value,
      minDimension: be.minDimension,
      orientationModel: be.orientationModel,
      ...be.fieldOrder && be.fieldOrder.length > 0 ? { allowedFieldIds: be.fieldOrder } : {}
    })), Gn = ee([]), Ze = M(
      () => (be.labelFields || []).map((o) => ({
        custom: !0,
        id: `labels.${o.id}`,
        name: `labels.${o.id}`,
        // No invented gloss — the raw field id unless the merchant names it.
        label: o.label || o.id,
        type: "string",
        output: "string",
        maxlength: Go,
        propertyPath: `labels.${o.id}`,
        fieldMap: `labels.${o.id}`
      }))
    ), Mt = ee({
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
    }), Wn = (o, r) => r ? Ir(r, o).length > 0 ? !0 : o === "banding" ? !!Ni(r) : !!Vt(r, o)?.sourceCatalogueKey : !1, er = ["banding", "finish", "planing"], tr = (o) => be.enable?.[o] ? C.inputShapes.value.some((r) => Wn(o, r)) : !1, Bs = (o) => er.includes(o) ? tr(o) : Mt.value[o] ?? !0, Ba = M(() => {
      const o = aa.value.fields.value, r = aa.value.allFieldsMap.value, h = o.filter((Q) => Bs(Q.name)), g = ["orientationLock", "banding", "finish", "planing", "machining", "imageUpload"], L = [];
      let F = null;
      const J = h.filter((Q) => Q.name !== "fullStock");
      Mt.value.fullStock && (F = h.find((Q) => Q.name === "fullStock") || r.get("fullStock"));
      for (const Q of g) {
        const ge = Bs(Q), Me = J.find((Fe) => Fe.name === Q);
        if (ge && !Me) {
          const Fe = r.get(Q);
          Fe && L.push(Fe);
        }
      }
      const q = Gn.value || [];
      return [
        ...F ? [F] : [],
        ...J,
        ...L,
        ...Ze.value,
        ...q
      ];
    }), Va = M(() => !!be.enable?.duplicate && !re.readonly), Ua = M(() => {
      let o = Ba.value.length + 2;
      return xt.value && o++, Va.value && o++, o;
    }), nr = M(() => {
      const o = {
        id: 34,
        del: 32,
        info: 32
      }, r = {
        id: `${o.id}px`,
        del: `${o.del}px`,
        info: `${o.info}px`
      }, h = [];
      for (const g of Ba.value) {
        if (g.name === "trim") continue;
        const L = g.w ?? "minmax(20px, 1fr)";
        h.push(L);
      }
      return h.unshift(r.id), xt.value && h.push(r.info), Va.value && h.push(r.del), h.push(r.del), h.join(" ");
    }), wa = M(() => be.enable?.pagination), Vs = M(() => re.diagramNav || be.enable?.diagramNav), Kn = M(() => wa.value ? Math.ceil(Ft.value.length / Tt.value) : 1), ar = M(() => {
      if (!wa.value) return Ft.value;
      const o = (Et.value - 1) * Tt.value, r = o + Tt.value;
      return Ft.value.slice(o, r);
    }), ir = M(() => wa.value ? (Et.value - 1) * Tt.value : 0), ja = (o) => {
      o < 1 && (o = 1), o > Kn.value && (o = Kn.value), Et.value = o;
    }, sr = () => ja(1), or = () => ja(Et.value - 1), lr = () => ja(Et.value + 1), rr = () => ja(Kn.value), xt = M(() => re.debug || be.debug || be.enable?.debug), ur = M(() => {
      try {
        const o = localStorage.getItem("inputs/inputStock");
        if (!o) return "(empty)";
        const r = JSON.parse(o);
        return JSON.stringify(r.map((h) => ({ material: h.material, db_id: h.db_id, l: h.l, w: h.w, t: h.t })), null, 2);
      } catch {
        return "(parse error)";
      }
    }), cr = M(() => {
      try {
        const o = localStorage.getItem("stock-filter-selections");
        return o || "(empty)";
      } catch {
        return "(read error)";
      }
    }), dr = M(() => ({
      "--btn-color": be.colors.buttonText,
      "--btn-bg": be.colors.button,
      "--btn-hover-bg": fr(be.colors.button, -8),
      "--btn-focus-ring": be.colors.button
    }));
    function fr(o, r) {
      const h = o.replace("#", ""), g = parseInt(h, 16), L = Math.round(2.55 * r), F = (g >> 16) + L, J = (g >> 8 & 255) + L, q = (g & 255) + L;
      return `#${(16777216 + (F < 255 ? F < 1 ? 0 : F : 255) * 65536 + (J < 255 ? J < 1 ? 0 : J : 255) * 256 + (q < 255 ? q < 1 ? 0 : q : 255)).toString(16).slice(1)}`;
    }
    const pr = {
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
    }, Us = M(() => re.showCredit !== void 0 ? re.showCredit : We.value ? !(We.value && We.value?.api?.whiteLabel) : !0), Ga = {
      // @deprecated Use saw.options.stockSelection instead
      stockSelection: (o) => {
        const r = ["efficiency", "smallest"];
        o && !r.includes(o) ? console.warn(`${o} is not a valid stockSelection, expected ${r.join("|")}`) : Ee.options.stockSelection = o;
      },
      // @deprecated Use saw.options.minSpacing instead
      minSpacing: (o) => {
        Ee.options.minSpacing = o;
      },
      maxParts: (o) => {
        be.maxParts = o;
      },
      partsPerPage: (o) => {
        o && o > 0 && (Tt.value = o, be.partsPerPage = o);
      },
      locale: (o) => {
        Te.value = o.replace(/_/g, "-");
      },
      enable: (o) => {
        const r = {
          name: "partName",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload",
          fullStock: "fullStock"
        };
        if (o) {
          for (const h in Bt.enable)
            h in o && (be.enable[h] = o[h]);
          for (const h in r) {
            const g = r[h], L = Kt(o, [g]), F = Bt.enable[g];
            Dt(h, L !== void 0 ? L : F);
          }
          yn.value = Kt(o, ["csvImport"]) ?? Bt.enable?.csvImport;
        }
      },
      colors: (o) => {
        if (o)
          for (const r in Bt.colors)
            r in o && (be.colors[r] = o[r]);
      },
      orientationModel: (o) => {
        if (![0, 1, 2].includes(o)) {
          be.orientationModel = 0;
          return;
        }
        be.orientationModel = o;
      },
      numberFormat: (o) => {
        if (!["decimal", "fraction"].includes(o)) {
          be.numberFormat = "decimal";
          return;
        }
        be.numberFormat = o;
      },
      customFields: (o) => {
        if (!Array.isArray(o) || !o?.length)
          return;
        const r = [];
        o.forEach((h) => {
          const g = js(h.id), L = {
            ...h,
            custom: !0,
            id: g,
            name: g,
            // CheckoutField expects 'name' property
            propertyPath: "customData." + g,
            fieldMap: "customData." + g
          };
          h.type === "checkbox" && (L.w = "32px"), h.type === "integer" || h.type === "float" ? L.output = h.output ?? "number" : h.type === "select" && (L.output = h.output ?? "string", L.options = h.options), r.push(L);
        }), Gn.value = r, jt(() => {
          for (const h of C.inputShapes.value)
            h.customData = o.reduce((g, L) => {
              const F = js(L.id);
              return g[F] = h.customData?.[F] || L.default || "", g;
            }, {});
        });
      }
    }, mr = (o) => {
      xt.value && oe("log", ["checkout init...", o]), o?.stockFilterEnabled && localStorage.removeItem("inputs/inputStock"), o?.parts && (o.parts = ht(o.parts));
      let r;
      try {
        r = ug(o);
      } catch (g) {
        console.error("[init] validation FAILED:", g.message), oe("error", g.message || "Invalid init data");
        return;
      }
      if (r.saw && On(r.saw), r.sawsById && (na.value = r.sawsById), r?.options) {
        const g = r.options;
        hl(g);
        const L = ["stockType", "bladeWidth"];
        if (!r.saw && !o?.stockFilterEnabled)
          oe("error", `Saw configuration is required. Missing properties: ${L.join(", ")}`);
        else if (r.saw) {
          const J = L.filter((q) => !(q in r.saw));
          J.length > 0 && oe("error", `Missing required saw properties: ${J.join(", ")}`);
        }
        const F = ["enable", "colors"];
        for (const J in g)
          F.includes(J) || (be[J] = g[J]), J in Ga && Ga[J]?.(g[J]);
      }
      if (r.options.colors && "colors" in Ga && Ga.colors(r.options.colors), r.banding) {
        const g = r.banding;
        "locations" in g && g.locations && (Pt.locations = g.locations), "groups" in g && g.groups && (Pt.groups = g.groups), "rules" in g && g.rules && (Pt.rules = g.rules), "maxGap" in g && typeof g.maxGap == "number" && (Pt.maxGap = g.maxGap), "perSide" in g && typeof g.perSide == "boolean" && (Pt.perSide = g.perSide), "recut" in g && g.recut && (Pt.recut = g.recut);
      }
      if (r.finish) {
        const g = r.finish;
        "locations" in g && g.locations && (ln.locations = g.locations), "groups" in g && g.groups && (ln.groups = g.groups), "rules" in g && g.rules && (ln.rules = g.rules);
      }
      if (r.planing) {
        const g = r.planing;
        "locations" in g && g.locations && (xn.locations = g.locations), "groups" in g && g.groups && (xn.groups = g.groups), "rules" in g && g.rules && (xn.rules = g.rules);
      }
      r.partRules && (Vn.value = r.partRules), r.customValidation && (Un.value = r.customValidation), Ri("banding", r), Ri("finish", r), Ri("planing", r);
      for (const g of ["banding", "finish", "planing"]) {
        const L = !!Kt(r, ["options", "enable", g]), F = !!Kt(r, [g, "containsCatalogueLinked"]), J = Object.keys(Kt(r, [g, "pricing"]) || {}), q = (Fi(g)?.labels?.length ?? 0) > 0;
        L && !F && J.length > 0 && !q && Ge({
          type: "error",
          message: ri("ecommerce.calculator.extras_load_failed", { type: Ki(g) }),
          additional: [Pe("ecommerce.calculator.extras_load_failed_hint")]
        });
      }
      vr(r), Qs(r), C.inputShapes.value.length && no(), mn.value = !0, xt.value && oe("log", ["init complete"]);
      const h = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(h), jt(() => {
        Us.value && !Mr() && alert(Pe("ecommerce.calculator.credit_tampered"));
      }), r.parts?.length && jt(() => {
        xt.value && oe("log", ["loading parts via init..."]), C.inputShapes.value.length = 0;
        let g = 0;
        for (const F of r.parts) {
          const J = Ka(F);
          J ? J.issues?.length && xt.value && oe("log", [`SmartCut - issues found while importing part at index ${g}`, J.issues]) : xt.value && oe("log", [`SmartCut - error loading part at index ${g}`, F]), g++;
        }
        C.inputShapes.value.flatMap((F) => rs(F.issues)).length && Ge({
          type: "error",
          message: Pe("errors.general.issues_found")
        }), xt.value && oe("log", [`loaded ${C.inputShapes.value.length} parts via init`]);
      });
    }, Dt = (o, r = !1) => {
      Mt.value[o] = r;
    }, js = (o) => o ? dc(o)?.toLowerCase() : null, gr = (o, r, h) => {
      try {
        if (!o || !r) return;
        r.startsWith("labels.") && typeof h == "string" && (h = h.slice(0, Go));
        const L = h !== null && h !== "" && h !== void 0 && !["orientationLock"].includes(r), F = (Q, ge) => {
          if (!vt(Q.autoId, ge)) {
            for (const [Fe, at] of Object.entries(ge))
              Xi(Q, Fe, at);
            Q.isNew || Q.validate({ fields: Object.keys(ge) });
          }
          "material" in ge && dt(Q.autoId, ge.material);
        }, J = (Q, ge, Me) => {
          const Fe = ge ?? Q.material, at = Me ?? Q.t, Ot = Fe ? String(Fe).toUpperCase() : null, et = C.inputStock.value.find((Lt) => {
            const Gt = !Ot || In(Lt) === Ot, Hn = at == null || pe({ v: Lt.t }) === pe({ v: at });
            return Gt && Hn;
          });
          return et ? { l: pe({ v: et.l }), w: pe({ v: et.w }) } : null;
        }, q = (Q, ge) => {
          if (!Q) return [];
          const Me = String(Q).toUpperCase(), Fe = ge != null ? pe({ v: ge }) : null, at = /* @__PURE__ */ new Set(), Ot = [];
          for (const et of C.inputStock.value) {
            if (In(et) !== Me || Fe != null && pe({ v: et.t }) !== Fe) continue;
            const Lt = pe({ v: et.l }), Gt = pe({ v: et.w });
            if (typeof Lt != "number" || typeof Gt != "number") continue;
            const Hn = `${Lt}x${Gt}`;
            at.has(Hn) || (at.add(Hn), Ot.push({
              l: Lt,
              w: Gt,
              db_id: et.db_id,
              code: et.code,
              cost: typeof et.cost == "number" ? et.cost : null
            }));
          }
          return Ot;
        };
        if (r === "material" && (!h || h === "")) {
          const Q = { material: null, t: null };
          Ee.stockType === "linear" && (Q.w = null), F(o, Q);
          return;
        }
        if (r === "material" && h && V.value?.length) {
          const Q = V.value.find((ge) => ge.name === h);
          if (Q) {
            const ge = { material: h }, Me = Hs(h), Fe = o.t != null ? pe({ v: o.t }) : null;
            if (!(Fe != null && Me.includes(Fe)) && Me.length > 0 && (Me.length === 1 || Fe != null) && (ge.t = Me[0]), Ee.stockType === "linear" && o.w != null && Q.widths) {
              const et = pe({ v: o.w });
              !Q.widths.some((Lt) => pe({ v: Lt }) === et) && Q.widths.length > 0 && (ge.w = pe({ v: Q.widths[0] }));
            }
            if (Q.fullSizeOnly) {
              const et = J(
                o,
                h,
                ge.t != null ? ge.t : o.t
              );
              ge.fullStock = !0, et && (ge.l = et.l, ge.w = et.w);
            } else o.fullStock && (ge.fullStock = !1);
            F(o, ge), An(o, Q), ia(o);
            const Ot = C.inputShapes.value.indexOf(o);
            for (const et of ["banding", "finish", "planing"]) {
              if (z[et] !== Ot) continue;
              const Lt = zn(o, et), Gt = et === "banding" && !!Ni(o);
              if (!Lt.options.length && !Gt) {
                z[et] = null;
                continue;
              }
              Je(et, Lt.options, Lt.labels, Lt.pricing);
            }
            return;
          }
        }
        if (r === "fullStock") {
          if (h !== !0 && Xs(o) || h === !0 && !Mi(o))
            return;
          if (h === !0) {
            const Q = q(o.material, o.t);
            if (Q.length > 1) {
              b.value = { shape: o, options: Q }, d.value = !0;
              return;
            }
            const ge = J(o);
            if (ge) {
              F(o, { fullStock: !0, l: ge.l, w: ge.w });
              return;
            }
          } else {
            F(o, { fullStock: !1, l: null, w: null });
            return;
          }
        }
        if ((r === "material" || r === "t") && o.fullStock) {
          const Q = {
            ...o,
            material: r === "material" ? h : o.material,
            t: r === "t" ? h : o.t
          };
          if (!Mi(Q)) {
            F(o, { [r]: h, fullStock: !1, l: null, w: null });
            return;
          }
          const ge = J(
            o,
            r === "material" ? h : void 0,
            r === "t" ? h : void 0
          );
          if (ge) {
            F(o, { [r]: h, l: ge.l, w: ge.w });
            return;
          }
        }
        if (o.isNew)
          if (L)
            o.isNew = !1;
          else {
            Xi(o, r, h);
            return;
          }
        let se;
        if (r.includes(".")) {
          const Q = r.split("."), ge = Q[0], Me = Q.slice(1).join("."), at = { ...o[ge] || {} };
          Xi(at, Me, h), se = { [ge]: at };
        } else
          se = { [r]: h };
        if (F(o, se), r === "t" && V.value?.length && o.material) {
          const Q = V.value.find((ge) => ge.name === o.material);
          Q && An(o, Q);
        }
        r === "t" && Ee.stockType === "linear" && V.value?.length && o.material && jt(() => {
          const Q = Zs(o);
          if (Q.length > 0 && o.w != null) {
            const ge = pe({ v: o.w });
            Q.some((Me) => pe({ v: Me }) === ge) || F(o, { w: pe({ v: Q[0] }) });
          }
        });
      } catch (g) {
        console.error("[CHECKOUT] Error updating field:", g);
      }
    }, hr = () => {
    }, br = (o, r) => {
      o?.isNew && (o.isNew = !1), o.validate({ fields: [r] }), ["l", "w", "t"].includes(r) && Gs(o), Ti(o);
    }, Ei = (o) => {
      const r = K(o);
      return r === "l" || r === "w" ? r : "";
    }, Ti = (o) => {
      if (!o || o.isNew) return;
      const r = Un.value, h = jn.value, g = !!(r?.enabled && r.rules?.length);
      if (!(!g && !h)) {
        o.issues && (o.issues = o.issues.filter((L) => !L.category?.includes("custom")));
        try {
          if (g) {
            const L = Bo(r.rules, [o.toData()], { stockGrains: [Ei(o)] });
            for (const F of L.errors)
              new mt({
                item: o,
                type: "error",
                category: ["custom"],
                field: [["banding"]],
                message: F.message,
                shouldTranslate: !1
              });
          }
          if (h) {
            const L = bs(o.toData(), h.limits);
            !L.allowed && L.reason && new mt({
              item: o,
              type: "error",
              category: ["custom"],
              field: [["banding"]],
              message: L.reason,
              shouldTranslate: !1
            });
          }
        } catch (L) {
          console.error("[CHECKOUT] Error validating custom rules:", L);
        }
      }
    };
    tt(
      () => C.inputShapes.value.map(
        (o) => JSON.stringify(o.extras?.banding?.sides ?? {})
      ).join("|"),
      () => {
        for (const o of C.inputShapes.value) Ti(o);
      }
    );
    const Gs = (o) => {
      if (Vn.value && o && !o.isNew && !(!o.l && !o.w))
        try {
          const r = Um(o, Vn.value, { stockGrain: Ei(o) });
          if (o.issues && (o.issues = o.issues.filter((h) => !h.category?.includes("part"))), !r.valid && r.violations.length > 0)
            for (const h of r.violations) {
              const g = jm(h), L = h.dimension === "longSide" ? "l" : h.dimension === "shortSide" ? "w" : h.dimension === "t" ? "t" : null;
              new mt({
                item: o,
                type: "error",
                category: ["part"],
                field: L ? [[L]] : [],
                message: g,
                shouldTranslate: !1
              });
            }
        } catch (r) {
          console.error("[CHECKOUT] Error validating part:", r);
        }
    }, vr = (o) => {
      if (Kt(be, ["enable", "machining"]) && o?.machining) {
        for (const r in Oe)
          o.machining[r] && (Oe[r] = o.machining[r]);
        if (["holes", "hingeHoles"].forEach((r) => {
          o?.machining?.[r] && (Oe[r].enabled = o?.machining?.[r].enabled);
        }), o?.machining?.corners?.types?.length && (Oe.corners.enabled = !0, Oe.corners.types = o.machining.corners.types), o.banding && o?.options?.enable?.banding) {
          if (!De) return;
          Oe.banding = {
            enabled: !0
          }, De.options.length && (Oe.banding.options = De.options), De.labels.length && (Oe.banding.labels = De.labels), Po(De.pricing) && (Oe.banding.pricing = De.pricing);
        }
      }
    }, yr = (o = null) => {
      It.value = o, o && st(o) && o.l && o.w ? ze.value = !0 : alert(Pe("machining.enter_dimensions_first"));
    }, kr = () => {
      ze.value = !1;
    }, Oi = ee(!1), wr = (o = null) => {
      It.value = o, o && (Oi.value = !0);
    }, Sr = () => {
      Oi.value = !1;
    }, Ws = (o) => {
      if (!o) return [];
      const r = o.stockId ?? o.stock?.id, h = r ? C.inputStock.value?.find((L) => String(L.id) === String(r)) : null;
      return (h?.extras?.customProducts ?? h?.material?.extras?.customProducts ?? []).length ? [] : [];
    }, xr = (o) => Ws(o).filter((r) => r.type === "machining"), Ks = (o = []) => {
      if (ie.value = [], xe.value = [], Dt("t", !1), !!o.length) {
        for (const r of o) {
          if (!r?.t) continue;
          const h = ma(r);
          if (h) {
            const g = Wa(h, !0);
            g.length === 2 ? (Lr(g), Dt("t", !0), r.t = ie.value[0]) : oe("error", "bonded thickness found which does not have 2 options");
          } else ie.value.includes(r.t) || ie.value.push(r.t);
        }
        ie.value.length > 1 && Dt("t", !0);
      }
    }, Ai = (o = []) => {
      if (ke.value = [], !o.length) {
        Dt("w", !1);
        return;
      }
      for (const r of o) {
        if (!r?.w) continue;
        const h = pe({ v: r.w });
        ke.value.includes(h) || ke.value.push(h);
      }
      ke.value.length >= 1 ? Dt("w", !0) : Dt("w", !1);
    }, zs = (o) => {
      if (!o) return { thicknesses: [], bondedThicknesses: [] };
      if (!V.value?.length)
        return {
          thicknesses: ie.value,
          bondedThicknesses: []
        };
      if (!o.material)
        return {
          thicknesses: ie.value,
          bondedThicknesses: []
        };
      const r = V.value.find((Q) => Q.name === o.material);
      let h;
      if (r)
        h = [...r.thicknesses];
      else {
        const Q = String(o.material).trim().toUpperCase(), ge = /* @__PURE__ */ new Set();
        for (const Me of C.inputStock.value) {
          if (is(Me) !== Q || Me.t == null) continue;
          const Fe = ma(Me);
          ge.add(Fe || pe({ v: Me.t }));
        }
        h = Array.from(ge).sort((Me, Fe) => pe({ v: Me }) - pe({ v: Fe }));
      }
      const g = [...h], L = [];
      for (let Q = 0; Q < g.length; Q++) {
        const ge = g[Q], Me = Wa(ge), Fe = [];
        if (Me.length) {
          for (const at of Me)
            g[Q] = at, Fe.push(Q);
          Q++;
        }
        Fe.length && L.push(Fe);
      }
      const F = String(o.material).trim().toUpperCase(), J = /* @__PURE__ */ new Set();
      for (const Q of C.inputStock.value)
        is(Q) === F && Q.t != null && (ma(Q) || J.add(pe({ v: Q.t })));
      const q = g.map((Q) => pe({ v: Q }));
      return {
        thicknesses: g.filter((Q) => {
          const ge = pe({ v: Q });
          return J.has(ge) ? !0 : !xe.value.some((Fe) => {
            if (Fe.length !== 2) return !1;
            const at = pe({ v: ie.value[Fe[0]] }), Ot = pe({ v: ie.value[Fe[1]] }), et = Math.min(at, Ot), Lt = Math.max(at, Ot);
            return ge === et && q.includes(Lt);
          });
        }),
        bondedThicknesses: L
      };
    }, Hs = (o) => o ? zs({ material: o }).thicknesses.map((r) => pe({ v: r })).filter((r) => typeof r == "number" && Number.isFinite(r)) : [], Zs = (o) => {
      if (!o) return [];
      if (!V.value?.length || !o.material)
        return ke.value;
      const r = V.value.find((h) => h.name === o.material);
      if (!r)
        return ke.value;
      if (o.t != null && C.inputStock?.value?.length) {
        const h = pe({ v: o.t }), g = /* @__PURE__ */ new Set();
        for (const L of C.inputStock.value)
          In(L) === String(o.material).toUpperCase() && pe({ v: L.t }) === h && L.w != null && g.add(pe({ v: L.w }));
        if (g.size > 0)
          return Array.from(g).sort((L, F) => L - F);
      }
      return r.widths || ke.value;
    }, Fi = (o) => o === "banding" ? De : o === "finish" ? Ue : o === "planing" ? ot : null, Vt = (o, r) => Ql(za(o?.stock?.db_id) || null, r), Ni = (o) => wg(za(o?.stock?.db_id) || null), Js = (o) => {
      switch (o) {
        case "banding":
          return Pt.groups;
        case "finish":
          return ln.groups;
        case "planing":
          return xn.groups;
        default:
          return;
      }
    }, zn = (o, r) => {
      const h = Fi(r), g = Js(r), L = h?.formulas, F = {
        options: h?.options ?? [],
        labels: h?.labels ?? [],
        pricing: h?.pricing ?? {},
        ...L && { formulas: L },
        displayNames: h?.displayNames ?? {},
        ...g?.length && { locationGroups: g }
      }, J = { options: [], labels: [], pricing: {}, displayNames: {} };
      if (!o?.material) return F;
      const q = Vt(o, r);
      if (!vg(q))
        return h?.containsCatalogueLinked ? J : F;
      const se = q.code || q.name, Q = q.groups;
      if (Q && Q.length > 0) {
        const Lt = Js(r) || [], Gt = {};
        for (const Wt of Q)
          typeof Wt.price == "number" && (Gt[Wt.id] = Wt.price);
        const Hn = Lt.filter((Wt) => Gt[Wt.id] !== void 0).map((Wt) => ({ ...Wt, price: Gt[Wt.id] })), so = {}, oo = [], lo = {}, qi = {}, Bi = q.pricingFormula;
        for (const Wt of Hn) {
          const Za = `${se}|${Wt.id}`;
          so[Za] = Wt.price, oo.push(Za), Wt.label && (lo[Za] = Wt.label), typeof Bi == "string" && Bi.trim() && (qi[Za] = Bi.trim());
        }
        const nu = [Ki(r)];
        return {
          options: [oo],
          labels: nu,
          pricing: so,
          ...Object.keys(qi).length && { formulas: qi },
          displayNames: lo,
          locations: [],
          // empty so render path applies hideIndividualLocations filter
          locationGroups: Hn
        };
      }
      const ge = yg(q, h, se), Me = q.labels?.length ? q.labels : [Ki(r)], Fe = Sg(q, r) ? [] : ao(ge, Me), at = q.displayNames && typeof q.displayNames == "object" ? { ...q.displayNames } : { ...h?.displayNames ?? {} };
      q.code && q.name && q.code !== q.name && (at[q.code] = q.name);
      const Ot = { ...L || {} }, et = q.pricingFormula;
      if (typeof et == "string" && et.trim()) {
        const Lt = et.trim();
        for (const Gt of Object.keys(ge)) Ot[Gt] = Lt;
      }
      return {
        options: Fe,
        labels: Me,
        pricing: ge,
        ...Object.keys(Ot).length && { formulas: Ot },
        displayNames: at,
        locations: q.locations?.length ? q.locations : void 0
      };
    }, Ir = (o, r) => zn(o, r).options, Xs = (o) => !o?.material || !V.value?.length ? !1 : !!V.value.find((h) => h.name === o.material)?.fullSizeOnly, Mi = (o) => {
      if (!o?.material) return !1;
      const r = String(o.material).toUpperCase(), h = o.t != null ? pe({ v: o.t }) : null, g = be.allowFullStockPurchase === !0;
      return C.inputStock.value.some((L) => In(L) !== r || h != null && pe({ v: L.t }) !== h ? !1 : Fd(L.allowExactFitShapes, g));
    }, Sa = (o, r) => {
      if (!r.fullSizeOnly) return;
      const h = o.t, g = C.inputStock.value.find((L) => In(L) === r.name.toUpperCase() && (h == null || pe({ v: L.t }) === pe({ v: h })));
      o.fullStock = !0, g && (o.l = pe({ v: g.l }), o.w = pe({ v: g.w }));
    }, Pr = (o) => {
      const r = { banding: !1, finish: !1, planing: !1, machining: !1 };
      if (!o?.material || !(De?.containsCatalogueLinked || Ue?.containsCatalogueLinked || ot?.containsCatalogueLinked)) return r;
      const g = za(o?.stock?.db_id), L = ks(g || null) || {};
      return {
        banding: !L.banding,
        finish: !L.finish,
        planing: !L.planing,
        machining: !L.machining
      };
    }, Qs = (o) => {
      if (o?.stock?.some((r) => r?.material)) {
        V.value = [], ie.value = [], xe.value = [];
        const r = /* @__PURE__ */ new Map();
        for (const L of o.stock) {
          if (!L.material) continue;
          const F = In(L), J = (L.code || L.name || "").toString().trim(), q = L.name || L.customData?.stockName || L.material || F;
          if (r.has(F) ? L.fullSizeOnly && (r.get(F).fullSizeOnly = !0) : r.set(F, {
            displayName: q,
            material: L.customData?.materialLabel || L.material,
            db_id: L.db_id,
            codes: /* @__PURE__ */ new Set(),
            brand: L.brand,
            variant: L.variant,
            finish: L.finish,
            imageUrl: L.imageUrl,
            color: typeof L.color == "string" ? L.color : void 0,
            fullSizeOnly: !!L.fullSizeOnly,
            thicknesses: /* @__PURE__ */ new Set(),
            widths: /* @__PURE__ */ new Set(),
            dimensions: /* @__PURE__ */ new Set()
          }), J && r.get(F).codes.add(J), L.t != null) {
            const se = ma(L);
            se ? r.get(F)?.thicknesses.add(se) : r.get(F)?.thicknesses.add(pe({ v: L.t }));
          }
          if (Ee.stockType === "linear" && L.w != null && r.get(F)?.widths.add(pe({ v: L.w })), Ee.stockType !== "linear" && L.l != null && L.w != null) {
            const se = pe({ v: L.l }), Q = pe({ v: L.w });
            r.get(F)?.dimensions.add(`${se}x${Q}`);
          }
        }
        const h = Array.from(r.entries()).map(([L, F]) => {
          const J = [], q = [];
          for (const se of F.thicknesses)
            typeof se == "string" && se.includes(",") ? q.push(se) : J.push(pe({ v: se }));
          return { name: L, sets: F, regularThicknesses: J, bondedStrings: q };
        });
        V.value = h.map(({ name: L, sets: F, regularThicknesses: J }) => {
          const q = F.codes.size === 1 ? [...F.codes][0] : void 0, se = {
            name: L,
            displayName: F.displayName,
            material: F.material,
            db_id: F.db_id,
            code: q,
            brand: F.brand,
            variant: F.variant,
            finish: F.finish,
            imageUrl: F.imageUrl,
            color: F.color,
            fullSizeOnly: F.fullSizeOnly,
            thicknesses: J.sort((Q, ge) => Q - ge)
          };
          return Ee.stockType === "linear" && F.widths.size > 0 && (se.widths = Array.from(F.widths).sort((Q, ge) => Q - ge)), Ee.stockType !== "linear" && F.dimensions.size > 0 && (se.dimensions = Array.from(F.dimensions).map((Q) => {
            const [ge, Me] = Q.split("x").map((Fe) => Number(Fe));
            return { l: ge, w: Me };
          })), se;
        });
        const g = /* @__PURE__ */ new Set();
        for (const L of V.value)
          for (const F of L.thicknesses)
            g.add(pe({ v: F }));
        ie.value = Array.from(g).sort((L, F) => L - F);
        for (let L = 0; L < h.length; L++) {
          const { bondedStrings: F } = h[L], J = V.value[L];
          for (const q of F) {
            const se = Wa(q, !0);
            if (se.length !== 2) continue;
            const Q = [];
            for (const ge of se) {
              const Me = pe({ v: ge });
              let Fe = ie.value.findIndex((at) => pe({ v: at }) === Me);
              Fe === -1 ? (ie.value.push(Me), J.thicknesses.push(Me), Fe = ie.value.length - 1) : J.thicknesses.some((at) => pe({ v: at }) === Me) || J.thicknesses.push(Me), Q.push(Fe);
            }
            xe.value.push(Q);
          }
        }
        if (Ee.stockType === "linear") {
          const L = /* @__PURE__ */ new Set();
          for (const F of V.value)
            if (F.widths)
              for (const J of F.widths)
                L.add(pe({ v: J }));
          ke.value = Array.from(L).sort((F, J) => F - J);
        }
        Dt("material", Ct(V.value)), ie.value.length > 1 ? Dt("t", !0) : Dt("t", !1), Ee.stockType === "linear" && ke.value.length > 1 ? Dt("w", !0) : Ee.stockType === "linear" && Dt("w", !1);
      } else
        Ks(o.stock);
      Ee.stockType === "linear" && !V.value?.length && Ai(o.stock);
    }, Cr = (o) => {
      if (!o?.length) {
        V.value = [], ie.value = [], ke.value = [];
        return;
      }
      if (o.some((h) => h?.material)) {
        const h = /* @__PURE__ */ new Map();
        xe.value = [];
        for (const F of o) {
          if (!F.material) continue;
          const J = In(F), q = (F.code || F.name || "").toString().trim(), se = F.name || F.customData?.stockName || F.material || J;
          if (h.has(J) ? F.fullSizeOnly && (h.get(J).fullSizeOnly = !0) : h.set(J, {
            displayName: se,
            material: F.customData?.materialLabel || F.material,
            db_id: F.db_id,
            codes: /* @__PURE__ */ new Set(),
            brand: F.brand,
            variant: F.variant,
            finish: F.finish,
            imageUrl: F.imageUrl,
            color: typeof F.color == "string" ? F.color : void 0,
            fullSizeOnly: !!F.fullSizeOnly,
            thicknesses: /* @__PURE__ */ new Set(),
            widths: /* @__PURE__ */ new Set(),
            dimensions: /* @__PURE__ */ new Set()
          }), q && h.get(J).codes.add(q), F.t != null) {
            const Q = ma(F);
            Q ? h.get(J)?.thicknesses.add(Q) : h.get(J)?.thicknesses.add(pe({ v: F.t }));
          }
          if (Ee.stockType === "linear" && F.w != null && h.get(J)?.widths.add(pe({ v: F.w })), Ee.stockType !== "linear" && F.l != null && F.w != null) {
            const Q = pe({ v: F.l }), ge = pe({ v: F.w });
            h.get(J)?.dimensions.add(`${Q}x${ge}`);
          }
        }
        const g = Array.from(h.entries()).map(([F, J]) => {
          const q = [], se = [];
          for (const Q of J.thicknesses)
            typeof Q == "string" && Q.includes(",") ? se.push(Q) : q.push(pe({ v: Q }));
          return { name: F, sets: J, regularThicknesses: q, bondedStrings: se };
        });
        V.value = g.map(({ name: F, sets: J, regularThicknesses: q }) => {
          const se = J.codes.size === 1 ? [...J.codes][0] : void 0, Q = {
            name: F,
            displayName: J.displayName,
            material: J.material,
            db_id: J.db_id,
            code: se,
            brand: J.brand,
            variant: J.variant,
            finish: J.finish,
            imageUrl: J.imageUrl,
            color: J.color,
            fullSizeOnly: J.fullSizeOnly,
            thicknesses: q.sort((ge, Me) => ge - Me)
          };
          return Ee.stockType === "linear" && J.widths.size > 0 && (Q.widths = Array.from(J.widths).sort((ge, Me) => ge - Me)), Ee.stockType !== "linear" && J.dimensions.size > 0 && (Q.dimensions = Array.from(J.dimensions).map((ge) => {
            const [Me, Fe] = ge.split("x").map((at) => Number(at));
            return { l: Me, w: Fe };
          })), Q;
        });
        const L = /* @__PURE__ */ new Set();
        for (const F of V.value)
          for (const J of F.thicknesses)
            L.add(pe({ v: J }));
        ie.value = Array.from(L).sort((F, J) => F - J);
        for (let F = 0; F < g.length; F++) {
          const { bondedStrings: J } = g[F], q = V.value[F];
          for (const se of J) {
            const Q = Wa(se, !0);
            if (Q.length !== 2) continue;
            const ge = [];
            for (const Me of Q) {
              const Fe = pe({ v: Me });
              let at = ie.value.findIndex((Ot) => pe({ v: Ot }) === Fe);
              at === -1 ? (ie.value.push(Fe), q.thicknesses.push(Fe), at = ie.value.length - 1) : q.thicknesses.some((Ot) => pe({ v: Ot }) === Fe) || q.thicknesses.push(Fe), ge.push(at);
            }
            xe.value.push(ge);
          }
        }
        if (Ee.stockType === "linear") {
          const F = /* @__PURE__ */ new Set();
          for (const J of V.value)
            if (J.widths)
              for (const q of J.widths)
                F.add(pe({ v: q }));
          ke.value = Array.from(F).sort((J, q) => J - q);
        }
        Dt("material", Ct(V.value)), Dt("t", ie.value.length > 1), Ee.stockType === "linear" && Dt("w", ke.value.length > 1);
      } else
        Ks(o), Ee.stockType === "linear" && Ai(o);
    }, Lr = (o, r = null) => {
      if (!Array.isArray(o)) {
        oe("error", "addBondedThicknesses expects an array");
        return;
      }
      const h = [];
      for (let g of o)
        be.numberFormat === "decimal" && (g = parseFloat(g)), ie.value.push(g), r && r.thicknesses.push(g), h.push(ie.value.length - 1);
      xe.value.push(h);
    }, Er = (o) => {
      const { thicknesses: r } = zs(o);
      return r?.length ? r.map((h) => ({
        label: h?.toString(),
        value: h
      })) : [];
    };
    function Tr(o) {
      return o?.length ? o.map((r) => Pg(r)) : [];
    }
    const Or = (o) => {
      const r = Zs(o);
      return r?.length ? r.map((h) => ({
        label: h?.toString(),
        value: h
      })) : [];
    }, Wa = (o, r = !1) => {
      if (typeof o == "string" && o.includes(",")) {
        const h = o.split(",");
        if (h.length === 2) {
          const g = parseFloat(h[0]), L = parseFloat(h[1]);
          !isNaN(g) && !isNaN(L) && L !== g * 2 && Ge({
            type: "warning",
            message: ri("ecommerce.calculator.bonded_thickness_pattern", { value: o })
          });
        }
        return r ? h.map((g) => pe({ v: g })) : h;
      }
      return [];
    }, Ar = () => {
      kn.value ? Nr() : Fr();
    }, Fr = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), kn.value = !0;
    }, Nr = () => {
      document.exitFullscreen && document.exitFullscreen(), kn.value = !1;
    }, Mr = () => {
      if (We.value?.api?.whiteLabel) return !0;
      let o = !0;
      const r = document.querySelector("#smartcut-checkout a#credit");
      if (!r) return o = !1;
      const h = window.getComputedStyle(r);
      return h.display === "none" || h.display === "hidden" || h.opacity === "0" || h.color === "transparent" || h.position !== "absolute" || h.color !== "#4e4e4e" && h.color !== "rgb(78, 78, 78)" ? o = !1 : (bt.value = o, o);
    }, $r = M(() => typeof re.findExtrasPrice == "function"), Dr = M(() => be.unitSystem === "imperial" ? "/ square ft" : "/ square m"), _r = M(() => be.unitSystem === "imperial" ? "/ ft" : "/ m"), Rr = M(() => [
      {
        type: "banding",
        keys: De.keys,
        fallbackLocations: Pt.locations,
        show: (o) => Wn("banding", o),
        extraProps: (o) => ({
          priceLabel: _r.value,
          catalogueKey: Ni(o) || "",
          // The resolved extra's id drives the picker's on-demand
          // `/extras/:id/levels` fetch. Present whenever the catalogue picker
          // renders (catalogue-linked stock carries a resolved extra with _id).
          catalogueExtraId: String(Vt(o, "banding")?._id || ""),
          catalogueMaxGap: Pt.maxGap,
          cataloguePerSide: Pt.perSide,
          extraName: Vt(o, "banding")?.name,
          pricePerLength: Vt(o, "banding")?.price
        })
      },
      {
        type: "finish",
        keys: Ue.keys,
        fallbackLocations: ln.locations,
        show: (o) => Wn("finish", o),
        extraProps: (o) => ({
          priceLabel: Dr.value,
          catalogueKey: Vt(o, "finish")?.sourceCatalogueKey || "",
          catalogueExtraId: String(Vt(o, "finish")?._id || ""),
          extraName: Vt(o, "finish")?.name,
          pricePerLength: Vt(o, "finish")?.price
        })
      },
      {
        type: "planing",
        keys: ot.keys,
        fallbackLocations: xn.locations,
        show: (o) => Wn("planing", o),
        extraProps: (o) => ({
          catalogueKey: Vt(o, "planing")?.sourceCatalogueKey || "",
          catalogueExtraId: String(Vt(o, "planing")?._id || ""),
          extraName: Vt(o, "planing")?.name,
          pricePerLength: Vt(o, "planing")?.price
        })
      }
    ]), qr = (o, r) => {
      const h = zn(o, r.type);
      return {
        allOptions: h.options,
        pricing: h.pricing,
        formulas: h.formulas,
        displayNames: h.displayNames,
        labels: h.labels,
        locations: h.locations || r.fallbackLocations,
        locationGroups: h.locationGroups || []
      };
    }, Ys = (o, r) => {
      let h, g;
      switch (r) {
        case "banding":
          h = De.options, g = De.labels;
          break;
        case "finish":
          h = Ue.options, g = Ue.labels;
          break;
        case "planing":
          h = ot.options, g = ot.labels;
          break;
        default:
          h = [], g = [];
      }
      Dn(o, r, h, g);
    }, eo = (o) => {
      const r = Object.keys(o);
      return r.length ? Math.max(...r.map((h) => h.split("|").length)) : 0;
    }, $i = (o, r, h) => o ? Ad(
      Object.keys(o).map((g) => g.split("|")),
      h,
      r
    ) : [], Br = (o, r, h, g) => {
      const L = zn(o, r);
      return Wi(o, r, h, (J, q) => {
        const se = q.filter((Q) => Q?.trim()).join("|");
        return se && L.pricing[se] !== void 0 ? L.pricing[se] : g ? g(J, q) : null;
      }, L.options, L.labels);
    }, Vr = (o, r, h) => {
      let g, L;
      switch (r) {
        case "banding":
          g = De.options, L = De.labels;
          break;
        case "finish":
          g = Ue.options, L = Ue.labels;
          break;
        case "planing":
          g = ot.options, L = ot.labels;
          break;
        default:
          g = [], L = [];
      }
      return Wi(o, r, h, re.findExtrasPrice, g, L);
    }, Ur = ee({}), jr = (o) => {
      const r = Rt.value.findIndex((h) => h.shapeId === o.shapeId);
      r !== -1 ? Rt.value[r] = o : Rt.value.push(o), window.smartcutImages = Rt.value;
    }, Gr = (o) => {
      Rt.value = Rt.value.filter((r) => r.shapeId !== o), window.smartcutImages = Rt.value;
    }, Wr = (o) => {
      yt.value = yt.value === o ? null : o;
    }, Kr = (o) => {
      be.maxParts > 0 && E.value >= be.maxParts || de(o);
    }, Di = (o = 1) => {
      for (let r = o; r--; ) {
        let h = {
          l: null,
          w: Ee.stockType === "linear" && ke.value.length === 1 ? ke.value[0] : null,
          t: ie.value.length ? ie.value[0] : null,
          q: 1,
          material: V.value?.length === 1 ? V.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (C.inputShapes.value.length > 0) {
          const L = C.inputShapes.value[C.inputShapes.value.length - 1];
          h.material = L.material, h.materialId = L.materialId, h.t = L.t, L.stock && (h.stock = { ...L.stock }), Ee.stockType === "linear" && L.w && (h.w = L.w);
        }
        const g = R(h);
        g && (De?.labels?.length && Dn(g, "banding", De.options, De.labels), Ue?.labels?.length && Dn(g, "finish", Ue.options, Ue.labels), ot?.labels?.length && Dn(g, "planing", ot.options, ot.labels));
      }
    }, Ka = (o = {}) => {
      const r = {
        q: 1,
        // Always set quantity to 1
        ...o
      }, h = R(r);
      return h && (Ee.stockType === "linear" && ke.value.length === 1 && !h.w && (h.w = ke.value[0]), ie.value.length && !h.t && (h.t = ie.value[0]), V.value?.length === 1 && !h.material && dt(h.autoId, V.value[0].name), De?.labels?.length && Dn(h, "banding", De.options, De.labels), Ue?.labels?.length && Dn(h, "finish", Ue.options, Ue.labels), ot?.labels?.length && Dn(h, "planing", ot.options, ot.labels)), h;
    }, zr = (o) => {
      dm(
        o,
        ie.value,
        xe.value,
        (r) => pe({ v: r })
      );
    }, to = () => {
      Ke(), ce(null), G.stockList.value = [], G.shapeList.value = [], G.cutList.value = [];
    }, _i = () => {
      C.inputShapes.value.length = 0, re.inputType !== "formula" && jt(() => Di());
    }, za = (o) => {
      if (o)
        return C.inputStock.value.find((r) => r.db_id === o);
    }, ia = (o) => {
      o.extras && (o.extras.banding = null, o.extras.finish = null, o.extras.planing = null);
    }, Hr = (o, r) => {
      const h = zn(o, r);
      return tc(h.pricing);
    }, Zr = (o) => {
      const r = { pruned: !1, types: /* @__PURE__ */ new Set() };
      if (!o?.extras) return r;
      const h = ["banding", "finish", "planing"];
      for (const g of h) {
        const L = o.extras[g];
        if (!L || Vt(o, g)?.sourceCatalogueKey) continue;
        const J = Hr(o, g);
        if (L.faces)
          for (const q of ["a", "b"]) {
            const se = L.faces[q];
            typeof se == "string" && se !== "" && !J.has(se) && (L.faces[q] = "", r.pruned = !0, r.types.add(g));
          }
        if (L.sides)
          for (const q of ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]) {
            const se = L.sides[q];
            typeof se == "string" && se !== "" && !J.has(se) && (L.sides[q] = "", r.pruned = !0, r.types.add(g));
          }
      }
      return r;
    }, In = (o) => is(o), Jr = (o, r) => {
      const h = o.toUpperCase();
      return C.inputStock.value.find((g) => In(g) === h && pe({ v: g.t }) === r);
    }, An = (o, r) => {
      const h = pe({ v: o.t }), g = Jr(r.name, h), L = {
        db_id: g?.db_id || r.db_id,
        code: g?.code || r.code,
        material: r.displayName || r.name
      };
      typeof h == "number" && Number.isFinite(h) && (L.thickness = h), o.stock = L;
    }, no = () => {
      const o = /* @__PURE__ */ new Set();
      for (const r of C.inputShapes.value) {
        const h = r.stock, g = r.material?.toUpperCase();
        let L = null;
        if (h?.db_id) {
          const q = za(h.db_id);
          q && (L = V.value.find((se) => se.name === In(q))), L || (L = V.value.find((se) => se.db_id && se.db_id === h.db_id));
        }
        if (!L && h?.code && (L = V.value.find((q) => q.code && q.code === h.code)), !L && g && (L = V.value.find((q) => q.name === g)), L)
          r.material = L.name, An(r, L), r.t != null && !L.thicknesses.includes(pe({ v: r.t })) && (r.t = null, r.stock = null, ia(r)), Sa(r, L);
        else {
          if ((h?.db_id || h?.code) && !V.value?.length)
            continue;
          if (V.value?.length === 1) {
            const q = V.value[0], se = r.material !== q.name;
            r.material = q.name, q.thicknesses.includes(pe({ v: r.t })) || (r.t = pe({ v: q.thicknesses[0] })), An(r, q), se && ia(r), Sa(r, q);
          } else if (V.value?.length > 1 && r.t) {
            const q = V.value.find((se) => se.thicknesses.some((Q) => pe({ v: Q }) === pe({ v: r.t })));
            q ? (r.material !== q.name && ia(r), r.material = q.name, An(r, q), Sa(r, q)) : (ia(r), r.material = V.value[0].name, r.t = pe({ v: V.value[0].thicknesses[0] }), An(r, V.value[0]), Sa(r, V.value[0]));
          } else V.value?.length > 1 ? (ia(r), r.material = V.value[0].name, r.t = pe({ v: V.value[0].thicknesses[0] }), An(r, V.value[0]), Sa(r, V.value[0])) : !r.t && C.inputStock.value[0]?.t && (r.t = pe({ v: C.inputStock.value[0].t }));
        }
        dt(r.autoId, r.material);
        const { pruned: F, types: J } = Zr(r);
        F && J.forEach((q) => o.add(q));
      }
      if (o.size > 0) {
        const r = [...o].join(", ");
        Ge({
          type: "warning",
          message: ri("ecommerce.calculator.extras_cleared", { types: r })
        });
      }
    }, Xr = async () => {
      if (ye(), oe("calculating"), Ye.value) return !1;
      Ye.value = !0, ea.value = !1, no();
      const o = await Kp({
        t: Pe,
        partTrim: be.partTrim,
        maxShapes: be.maxParts || 1e3,
        inputSaw: C.inputSaw.value,
        // Extras validation data
        bandingPricing: De.pricing,
        finishPricing: Ue.pricing,
        planingPricing: ot.pricing,
        findExtrasPrice: re.findExtrasPrice,
        getShapeExtrasPricing: (q, se) => zn(q, se).pricing,
        // Banding is tuple-canonical on the client: the shape stores the axis
        // tuple, so completeness validates against the tuple-keyed pricing alone —
        // no per-shape SKU codes needed (the SKU is a server-side lookup).
        extrasValidationRules: Li.value,
        extrasLocationGroups: {
          banding: Pt.groups,
          finish: ln.groups,
          planing: xn.groups
        },
        onLimit: () => {
          Ge({
            type: "error",
            message: Pe("limits.max_parts") + " " + be.maxParts
          });
        }
      }), r = o.cleanedShapes ?? C.inputShapes.value, h = o.cleanedStock ?? C.inputStock.value;
      if (Vn.value)
        for (const q of r)
          Gs(q);
      for (const q of r)
        Ti(q);
      const g = r.flatMap((q) => q.issues || []).filter((q) => q.type === "error" && q.category?.includes("part") && !q.category?.includes("extras"));
      if (g.length > 0) {
        Ge({
          type: "error",
          message: Pe("errors.validation.inputs_issue", { 0: "part" }),
          additional: g.map((q) => li(q.message, q.context || q.params))
        }), oe("validation-error"), Ye.value = !1;
        return;
      }
      if (!o.valid) {
        oe("validation-error"), Ye.value = !1;
        return;
      }
      to(), r.forEach((q, se) => {
        q.createId(se);
      }), h.forEach((q, se) => {
        q.createId(se);
      });
      const L = r.map((q) => Be(q)).filter(Boolean);
      if (L.length !== r.length)
        return Ge({
          type: "error",
          message: Pe("ecommerce.calculator.parts_invalid"),
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), Ye.value = !1, !1;
      if (zr(L), jn.value)
        for (const q of L) Od(q, jn.value.limits);
      xt.value && oe("log", [
        "SmartCut - calculating",
        "stock",
        h.map((q) => ({ l: q.l, w: q.w })),
        "parts",
        L.map((q) => ({ l: q.l, w: q.w }))
      ]);
      const F = {
        inputSaw: C.inputSaw.value.toData(),
        inputShapes: L.map((q) => q.toData()),
        inputStock: h.map((q) => {
          const se = Cg(q.toData()), Q = cm(q);
          return Q != null && (se.t = Q), se;
        }),
        inputUserGroups: wn.value ? C.inputUserGroups.value.map((q) => q.toData()) : [],
        enableEvo: !0,
        useInventory: !1,
        domain: nt,
        // Identifies WHICH shop this is when `domain` can't — a platform-hosted
        // storefront shares the platform's hostname. Server-side the slug is only
        // consulted when the host lookup finds no account.
        ...re.orgSlug ? { orgSlug: re.orgSlug } : {},
        // Job-level saw label fields (host-supplied via `options.labels`).
        // Added conditionally so a shop that sets none sends a payload
        // byte-identical to before — the worker's cache hash depends on it.
        ...be.labels?.customer ? { labels: { customer: be.labels.customer } } : {},
        extrasOptions: rt(),
        // SKU/name maps for the cutlist CSV's operator-meaningful labels
        // (internal-only; resolved server-side as SKU → name → tuple). WC
        // ships sku (variation SKUs) + name; DB-flow ships name only (its
        // codes are resolved from Extra docs at export, never shipped here).
        extrasResolution: {
          banding: { sku: De.codes, name: De.displayNames },
          finish: { sku: Ue.codes, name: Ue.displayNames },
          planing: { sku: ot.codes, name: ot.displayNames }
        },
        source: "checkout",
        sourceVersion: "4.6.4"
      };
      if (Un.value?.enabled && Un.value?.rules?.length > 0) {
        const q = Bo(
          Un.value.rules,
          r.map((se) => se.toData()),
          { stockGrains: r.map((se) => Ei(se)) }
        );
        if (!q.valid) {
          for (const se of q.errors) {
            const Q = se.partName ? `Part "${se.partName}"` : `Part ${se.partIndex + 1}`;
            Ge({
              type: "error",
              message: `${Q}: ${se.message}`
            });
          }
          oe("validation-error"), Ye.value = !1;
          return;
        }
      }
      if (jn.value) {
        const q = jn.value.limits, se = r.map((Q, ge) => ({ shape: Q, index: ge, plan: bs(Q.toData(), q) })).filter((Q) => !Q.plan.allowed);
        if (se.length > 0) {
          for (const { shape: Q, index: ge, plan: Me } of se) {
            const Fe = Q.name ? `Part "${Q.name}"` : `Part ${ge + 1}`;
            Ge({ type: "error", message: `${Fe}: ${Me.reason}` });
          }
          oe("validation-error"), Ye.value = !1;
          return;
        }
      }
      oe("before-calculate", F);
      const J = new CustomEvent("smartcut/beforeCalculate", {
        cancelable: !0,
        detail: {
          data: F,
          error: null
        }
      });
      if (window.dispatchEvent(J), J.defaultPrevented) {
        J.detail.error && Ge({
          type: "error",
          message: J.detail.error
        }), Ye.value = !1;
        return;
      }
      await sn.connect(), sn.emit("calculate", F);
    }, Qr = (o, r) => {
      const h = [o, "pricing"];
      if (!Io(r, h))
        return oe("error", `${h.join(".")} not found in sent data`), null;
      const g = Kt(r, h);
      if (typeof g != "object")
        return oe("error", `${h.join(".")} data must be an object`), null;
      if (!Po(g))
        return oe("error", `if provided, ${h.join(".")} data must contain some values`), null;
      const L = Object.keys(g);
      if (!L.length)
        return oe("error", `no ${h.join(".")} pricing found`), null;
      if (L.some((se) => /,/.test(se)))
        return oe("error", `${h.join(".")} keys must not contain commas and should only be separated by a pipe (|)`), null;
      if (Object.values(g).some((se) => isNaN(se)))
        return oe("error", `${h.join(".")} values must be a number`), null;
      const F = [o, "labels"];
      if (!Io(r, F))
        return oe("error", `${F.join(".")} not found`), null;
      const J = Kt(r, F);
      if (!J)
        return oe("error", `${F.join(".")} data not provided`), null;
      if (!Array.isArray(J))
        return oe("error", `${F.join(".")} data must be an array`), null;
      if (!J.length)
        return oe("error", `if provided, ${F.join(".")} data must contain values`), null;
      const q = eo(g);
      return J.length !== q ? (oe("error", `${F.join(".")} length (${J.length}) must match the number of levels in ${h.join(".")} (${q})`), null) : { pricing: g, labels: J };
    }, Ri = (o, r) => {
      const h = r?.[o], g = !!h?.containsCatalogueLinked;
      if (!o || !h || !Kt(be, ["enable", o])) return;
      let L = h.pricing ?? {}, F = h.labels ?? [];
      if (!g) {
        const se = Qr(o, r);
        if (!se) return;
        L = se.pricing, F = se.labels;
      }
      const J = Kt(r, [o, "displayNames"]) || void 0, q = Kt(r, [o, "formulas"]);
      if (o === "banding" || o === "finish" || o === "planing") {
        const se = Fi(o);
        se.labels = F, se.pricing = L, se.displayNames = J || {}, se.codes = Kt(r, [o, "codes"]) || {}, se.containsCatalogueLinked = g, se.formulas = q;
        const Q = ao(L, F);
        se.options = Q, Je(o, Q, F, L, J);
      }
      if (kt.value = rt(), !!C.inputShapes.value?.length)
        for (const se of C.inputShapes.value) Ys(se, o);
    }, ao = (o, r) => {
      const h = Object.keys(o);
      if (!h.length) return [];
      const g = r?.length || eo(o);
      if (g <= 1) return [[...h]];
      const L = [];
      for (let F = g; F--; ) L.push(/* @__PURE__ */ new Set());
      for (const F of h)
        F.split("|").forEach((q, se) => {
          se < g && L[se].add(q);
        });
      return L.map((F) => Array.from(F));
    }, Ha = (o, r) => {
      if (!r) return;
      o !== "info" && Object.keys(z).forEach((g) => {
        g !== o && g !== "info" && (z[g] = null);
      });
      const h = C.inputShapes.value.indexOf(r);
      if (z[o] === h)
        It.value = null, z[o] = null, Ur.value[o] = void 0;
      else if (It.value = r, z[o] = h, o !== "info") {
        const g = zn(r, o);
        g.options.length && Je(
          o,
          g.options,
          g.labels,
          g.pricing
        );
      }
    }, io = (o) => {
      xt.value && oe("log", ["load event received"]), mn.value && Yr(o.detail);
    }, Yr = (o) => {
      if (xt.value && oe("log", ["loading parts..."]), !o || !o?.inputs?.parts?.length) {
        xt.value && oe("log", ["could not find any parts to import"]);
        return;
      }
      C.inputShapes.value.length = 0;
      let r = 0;
      for (const g of o.inputs.parts) {
        const L = Ka(g);
        L ? L.issues?.length && xt.value && oe("log", [`SmartCut - issues found while importing part at index ${r}`, L.issues]) : xt.value && oe("log", [`SmartCut - error loading part at index ${r}`, g]), r++;
      }
      C.inputShapes.value.flatMap((g) => rs(g.issues)).length && Ge({
        type: "error",
        message: Pe("errors.general.issues_found")
      }), xt.value && oe("log", [`loaded ${C.inputShapes.value.length} parts`]);
    }, eu = (o) => {
      C.inputShapes.value.length = 0, jt(() => {
        for (const r of o)
          r.t = C.inputStock.value?.[0]?.t ?? null, Ee.stockType === "linear" && ke.value.length === 1 && !r.w && (r.w = ke.value[0]), Ka(r);
      });
    };
    tt(() => re.inputStock, (o) => {
      if (to(), Array.isArray(o) || console.warn("SmartCut - stock must be passed as an array"), !o?.length) return;
      C.inputStock.value.length = 0;
      const r = o.map((h) => h.toData());
      Cr(r);
      for (const h of o)
        Ae({
          ...h.toData(),
          autoAdd: !0,
          q: 1
        }) || (console.error("Failed to add stock item:", h), Ge({
          type: "error",
          message: Pe("ecommerce.calculator.stock_add_failed")
        }));
      if (C.inputStock.value.length) {
        if (!C.inputShapes.value.length)
          re.inputType !== "formula" && jt(() => {
            C.inputShapes.value.length || Di();
          });
        else if (V.value.length === 1) {
          const g = V.value[0];
          for (const L of C.inputShapes.value)
            L.material || (dt(L.autoId, g.name), (L.t == null || !g.thicknesses.includes(pe({ v: L.t }))) && (L.t = pe({ v: g.thicknesses[0] })), An(L, g));
        }
        const h = _(C.inputSaw.value);
        h.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(h))), Ge({
          type: "error",
          message: Pe("errors.validation.stock_issue"),
          additional: h.map((g) => li(g.message, g.context || g.params))
        }));
      }
    }, { immediate: !0 }), tt(C.inputShapes, (o) => {
      oe("inputs-changed"), o.forEach((r) => {
        if (Ee.stockType === "linear" && ke.value.length && (!r.w || !ke.value.includes(pe({ v: r.w }))) && (r.w = ke.value[0]), r.material) {
          const h = Hs(r.material);
          h.length && !h.includes(pe({ v: r.t })) && (r.t = h[0]);
        }
      });
    }, { deep: !0 }), tt(() => Ft.value.length, (o, r) => {
      if (wa.value) {
        if (o > r) {
          const h = Math.ceil(o / Tt.value);
          Et.value < h && (Et.value = h);
        } else if (o < r) {
          const h = Math.ceil(o / Tt.value);
          Et.value > h && (Et.value = Math.max(1, h));
        }
      }
    }), tt(() => be.numberFormat, (o) => {
      U(o);
    }), tt(C.inputStock, (o) => {
      Ee.stockType === "linear" && Ai(o.map((r) => r.toData()));
    }, { deep: !0 }), tt(() => Ee, (o) => {
      C.inputSaw.value = new un(o);
    }, { deep: !0 }), vn(async () => {
      if (En.value) return;
      En.value = !0;
      const o = new URL(window.location.href), r = o.searchParams.toString(), h = o.origin + o.pathname + (r ? `?${r}` : "");
      Nt.value !== h && _i(), Nt.value = h, Te.value = be.locale, await sn.connect(), sn.emit("getUserFromDomain"), window.addEventListener("smartcut/load", io);
    });
    const tu = () => {
      sn && sn.disconnect();
    };
    return Si(() => {
      window.removeEventListener("smartcut/load", io), tu(), delete window.smartcutCheckout;
    }), n({
      init: mr,
      clear: _i,
      getAvailablePricingOptions: $i,
      getExtrasPrice: Vr,
      formatPrice: re.formatPrice,
      findExtrasPrice: re.findExtrasPrice,
      inputShapes: C.inputShapes,
      initExtrasOptions: Ys,
      createAndAddInputShape: Ka,
      initMaterialsThicknesses: Qs
    }), (o, r) => {
      const h = ya("Icon");
      return D(), te("div", _h, [
        xt.value ? (D(), $e(N(c), {
          key: 0,
          title: "Ecommerce Calculator Debug",
          data: [{
            inputStock: N(C).inputStock.value.map((g) => ({ name: N(va)(g).fullLabel, materialKey: g.material, db_id: g.db_id || null, code: g.code || null, l: g.l, w: g.w, t: g.t, db_sawId: g.db_sawId || null, stockExtras: N(ks)(g) })),
            materials: V.value.map((g) => ({ name: N(va)(g).fullLabel, materialKey: g.name, thicknesses: g.thicknesses, db_id: g.db_id, code: g.code })),
            inputShapesStockRefs: N(C).inputShapes.value.map((g) => ({ material: g.material || "?", t: g.t, stock: g.stock || null })),
            saw: {
              inputSaw: N(C).inputSaw.value ? {
                name: N(C).inputSaw.value.name || null,
                db_id: N(C).inputSaw.value.db_id || null,
                stockType: N(C).inputSaw.value.stockType || null,
                bladeWidth: N(C).inputSaw.value.bladeWidth ?? null,
                bladeWidthEnd: N(C).inputSaw.value.bladeWidthEnd ?? null,
                cutPreference: N(C).inputSaw.value.cutPreference || null
              } : null,
              stockSawIds: N(C).inputStock.value.map((g) => ({ name: N(va)(g).fullLabel, db_sawId: g.db_sawId || null })),
              resultSaw: N(G).saw ? { name: N(G).saw.name || null, db_id: N(G).saw.db_id || null } : null
            },
            localStorage: { inputStock: ur.value, stockFilterSelections: cr.value }
          }],
          paths: ["ecommerce-calculator"],
          root: !1
        }, null, 8, ["data"])) : fe("", !0),
        mn.value ? fe("", !0) : (D(), $e(Pl, {
          key: 1,
          size: "large",
          label: N(Pe)("ecommerce.common.loading"),
          block: ""
        }, null, 8, ["label"])),
        mn.value ? (D(), te("section", {
          key: 2,
          id: "smartcut-checkout",
          class: gt(["smartcut-content", { fullscreen: kn.value }]),
          style: Xt(dr.value)
        }, [
          It.value?.machining && ze.value ? (D(), $e(N(i), {
            key: 0,
            "input-shape": It.value,
            "onUpdate:inputShape": r[0] || (r[0] = (g) => It.value = g),
            translate: !0,
            options: Oe,
            "find-extras-price": e.findExtrasPrice,
            "get-extras-price": N(Wi),
            "get-available-pricing-options": $i,
            "format-price": e.formatPrice,
            "custom-machining-products": xr(It.value),
            onClose: kr
          }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price", "custom-machining-products"])) : fe("", !0),
          It.value && Oi.value ? (D(), $e(N(s), {
            key: 1,
            "input-shape": It.value,
            "onUpdate:inputShape": r[1] || (r[1] = (g) => It.value = g),
            products: Ws(It.value),
            "find-extras-price": e.findExtrasPrice,
            "format-price": e.formatPrice,
            onClose: Sr
          }, null, 8, ["input-shape", "products", "find-extras-price", "format-price"])) : fe("", !0),
          Tn.value && !e.readonly ? (D(), te("button", {
            key: 2,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            onClick: r[2] || (r[2] = (g) => Ar())
          }, [
            ct(h, { icon: ["fass", "expand"] }),
            dn(" " + Ce(N(Pe)("general.full_screen")), 1)
          ])) : fe("", !0),
          Us.value ? (D(), te("a", {
            key: 3,
            id: "credit",
            style: pr,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, Ce(N(cc)(N(Pe)("general.powered_by"))), 1)) : fe("", !0),
          we("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: Xt({ "grid-template-columns": nr.value })
          }, [
            N(C).inputShapes.value.length ? (D(), te("div", Rh, [
              r[8] || (r[8] = we("div", { class: "cell id" }, null, -1)),
              (D(!0), te(At, null, an(Ba.value, (g) => (D(), te("div", {
                key: g.name,
                class: gt(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(g.name) || g.type === "boolean" }])
              }, Ce(N(Pe)(g.label)), 3))), 128)),
              xt.value ? (D(), te("div", qh, " Info ")) : fe("", !0),
              Va.value ? (D(), te("div", Bh)) : fe("", !0),
              r[9] || (r[9] = we("div", { class: "cell del" }, null, -1))
            ])) : fe("", !0),
            (D(!0), te(At, null, an(ar.value, (g, L) => (D(), te("div", {
              key: g.autoId,
              class: gt(["row inputs", { "group-pickable": wn.value, "row--readonly": !!g.readonly }])
            }, [
              we("div", {
                class: gt(["cell", { clickable: wn.value }]),
                onClick: (F) => wn.value && qa(g)
              }, [
                we("div", {
                  class: "id",
                  style: Xt({
                    background: be.colors.partA,
                    color: be.colors.text
                  })
                }, Ce(ir.value + L + 1), 5)
              ], 10, Vh),
              (D(!0), te(At, null, an(Ba.value, (F) => (D(), te("div", {
                key: F.name,
                class: "cell"
              }, [
                g ? (D(), $e(Sh, {
                  key: 0,
                  field: F,
                  item: g,
                  index: L,
                  "type-prefix": "part",
                  readonly: e.readonly || !!g.readonly,
                  "number-format": be.numberFormat,
                  "orientation-model": be.orientationModel,
                  "stock-grain": N(K)(g),
                  "material-options": V.value?.map((J) => ({ label: J.displayName || J.name, value: J.name })) || [],
                  "material-items": Tr(V.value),
                  "thickness-options": F.name === "t" ? Er(g) : [],
                  "width-options": F.name === "w" && Ee.stockType === "linear" ? Or(g) : [],
                  "banding-enabled": z.banding === L ? g : null,
                  "full-stock-disabled": g.fullStock && !["material", "t", "q", "fullStock"].includes(F.name) || F.name === "fullStock" && (Xs(g) || !g.fullStock && !Mi(g)),
                  "material-extras-disabled": Pr(g),
                  onUpdate: (J) => gr(g, F.propertyPath || F.fieldMap || F.name, J),
                  onValidation: r[3] || (r[3] = (J, q) => hr()),
                  onBlur: () => br(g, F.name),
                  onOpenBanding: (J) => Ha("banding", g),
                  onOpenMachining: (J) => yr(g),
                  onOpenCustomProducts: (J) => wr(g),
                  onOpenFinish: (J) => Ha("finish", g),
                  onOpenPlaning: (J) => Ha("planing", g),
                  onOpenImageUpload: (J) => Wr(L)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "orientation-model", "stock-grain", "material-options", "material-items", "thickness-options", "width-options", "banding-enabled", "full-stock-disabled", "material-extras-disabled", "onUpdate", "onBlur", "onOpenBanding", "onOpenMachining", "onOpenCustomProducts", "onOpenFinish", "onOpenPlaning", "onOpenImageUpload"])) : fe("", !0)
              ]))), 128)),
              xt.value ? (D(), te("div", Uh, [
                we("button", {
                  class: gt(["c-btn", { selected: z.info === L }]),
                  type: "button",
                  onClick: (F) => Ha("info", g)
                }, " i ", 10, jh)
              ])) : fe("", !0),
              Va.value ? (D(), te("div", Gh, [
                we("button", {
                  disabled: !!g.readonly || be.maxParts > 0 && N(E) >= be.maxParts,
                  type: "button",
                  class: "c-btn duplicate",
                  "aria-label": `${N(Pe)("actions.duplicate")} ${N(ti)(N(Pe)("woodwork.part"))}`,
                  title: N(Pe)("actions.duplicate"),
                  onClick: (F) => Kr(g.autoId)
                }, [
                  ct(h, { icon: ["fass", "copy"] })
                ], 8, Wh)
              ])) : fe("", !0),
              we("div", Kh, [
                we("button", {
                  disabled: N(C).inputShapes.value.length <= 1 || e.readonly || !!g.readonly,
                  type: "button",
                  class: "c-btn delete",
                  "aria-label": `${N(Pe)("actions.remove")} ${N(ti)(N(Pe)("woodwork.part"))}`,
                  onClick: (F) => N(w)(g.autoId)
                }, [
                  ct(h, { icon: ["fass", "trash"] })
                ], 8, zh)
              ]),
              ct(N(a), {
                item: g,
                "num-columns": Ua.value
              }, null, 8, ["item", "num-columns"]),
              (D(!0), te(At, null, an(Rr.value, (F) => (D(), te(At, {
                key: F.type + "-" + (g?.material || "")
              }, [
                z[F.type] === L && $r.value && F.show(g) ? (D(), $e(kp, tn({
                  key: 0,
                  shape: g,
                  "shape-index": L,
                  "extra-type": F.type,
                  "extra-label": F.type,
                  "extra-keys": F.keys,
                  "user-friendly-field-map": N(nc),
                  "part-columns": Ua.value,
                  "format-price": e.formatPrice,
                  "find-extras-price": re.findExtrasPrice,
                  "get-price": Br,
                  "orientation-model": be.orientationModel,
                  "stock-grain": N(K)(g),
                  "get-available-pricing-options": $i,
                  "allow-custom-names": !1,
                  debug: xt.value
                }, { ref_for: !0 }, { ...qr(g, F), ...F.extraProps(g) }), null, 16, ["shape", "shape-index", "extra-type", "extra-label", "extra-keys", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain", "debug"])) : fe("", !0)
              ], 64))), 128)),
              z.info === L ? (D(), te("div", {
                key: 2,
                id: "shape-info",
                style: Xt({ "grid-column-end": "span " + Ua.value })
              }, [
                we("div", null, Ce(g?.banding), 1),
                we("div", null, Ce(kt.value?.banding?.options || "No options"), 1)
              ], 4)) : fe("", !0),
              yt.value === L ? (D(), $e(N(p), {
                key: 3,
                prefix: (L + 1).toString(),
                "unique-id": g.autoId,
                "shape-id": g.autoId,
                style: Xt({ "grid-column-end": "span " + Ua.value }),
                images: Rt.value,
                debug: xt.value,
                onUpdate: jr,
                onRemove: Gr
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images", "debug"])) : fe("", !0)
            ], 2))), 128))
          ], 4),
          we("div", Hh, [
            e.readonly ? fe("", !0) : (D(), te("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${N(Pe)("actions.add")} ${N(ti)(N(Pe)("woodwork.part"))}`,
              onClick: r[4] || (r[4] = (g) => Di())
            }, [
              ct(h, { icon: ["fass", "plus-large"] }),
              dn(" " + Ce(`${N(Pe)("actions.add")} ${N(ti)(N(Pe)("woodwork.part"))}`), 1)
            ], 8, Zh)),
            we("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": N(Pe)("actions.calculate"),
              title: e.calculateDisabled && e.calculateDisabledReason ? e.calculateDisabledReason : void 0,
              disabled: !N(C).inputStock.value?.length || Ye.value || e.calculateDisabled,
              onClick: r[5] || (r[5] = (g) => Xr())
            }, [
              ct(h, { icon: ["fass", "calculator"] }),
              dn(Ce(N(Pe)("actions.calculate")), 1)
            ], 8, Jh),
            e.readonly ? fe("", !0) : (D(), te("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": N(Pe)("actions.clear"),
              onClick: r[6] || (r[6] = (g) => _i())
            }, [
              ct(h, { icon: ["fass", "trash"] })
            ], 8, Xh)),
            we("div", Qh, Ce(N(E)) + Ce(be?.maxParts ? "/" + be.maxParts : ""), 1)
          ]),
          wn.value && !e.readonly ? (D(), $e(N(f), {
            key: 4,
            ref_key: "groupsRef",
            ref: Sn,
            "selected-shape": Bn.value,
            "selected-shape-counter": on.value,
            "stock-grain": _a.value,
            "format-options": Ra.value,
            onHighlightShape: x,
            onClearHighlight: S
          }, null, 8, ["selected-shape", "selected-shape-counter", "stock-grain", "format-options"])) : fe("", !0),
          wa.value && Kn.value > 1 ? (D(), te("div", Yh, [
            we("div", eb, [
              we("button", {
                type: "button",
                class: "c-btn",
                disabled: Et.value === 1,
                onClick: sr
              }, [
                ct(h, { icon: ["fass", "chevrons-left"] })
              ], 8, tb),
              we("button", {
                type: "button",
                class: "c-btn",
                disabled: Et.value === 1,
                onClick: or
              }, [
                ct(h, { icon: ["fass", "chevron-left"] })
              ], 8, nb),
              we("span", ab, Ce(Et.value) + " / " + Ce(Kn.value), 1),
              we("button", {
                type: "button",
                class: "c-btn",
                disabled: Et.value >= Kn.value,
                onClick: lr
              }, [
                ct(h, { icon: ["fass", "chevron-right"] })
              ], 8, ib),
              we("button", {
                type: "button",
                class: "c-btn",
                disabled: Et.value >= Kn.value,
                onClick: rr
              }, [
                ct(h, { icon: ["fass", "chevrons-right"] })
              ], 8, sb)
            ])
          ])) : fe("", !0),
          yn.value && !e.readonly ? (D(), $e(N(u), {
            key: 6,
            ref: "import",
            "number-format": be.numberFormat,
            "custom-fields": Gn.value,
            "banding-options": De.options,
            "banding-labels": De.labels,
            "finish-options": Ue.options,
            "finish-labels": Ue.labels,
            "show-template": be.enable?.csvTemplate !== !1,
            onImport: eu
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels", "show-template"])) : fe("", !0),
          k.value ? (D(), te("div", ob, [
            A.value ? (D(), te("div", lb, Ce(A.value), 1)) : fe("", !0),
            we("pre", rb, Ce(W.value), 1)
          ])) : fe("", !0),
          (be.enable?.diagram ? Ye.value && !N(Ve).complete || N(Ve).complete && !me.value : Ye.value || N(Ve).complete) ? (D(), te("div", ub, [
            ct(N(ue), {
              size: 50,
              number: N(Ve).shapeCount,
              complete: N(Ve).complete,
              "show-number": be.enable?.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : fe("", !0),
          ws(we("div", cb, [
            N(H)?.saw?.stockType !== "roll" ? (D(), te("div", db, Ce(N(H)?.stack?.number ? N(H).stack.number : 1), 1)) : fe("", !0),
            $t.value ? (D(), $e(N(j), {
              key: 1,
              "element-id": "diagram",
              "number-format": be.numberFormat,
              "decimal-places": be.decimalPlaces,
              colors: be.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])) : fe("", !0)
          ], 512), [
            [ou, be.enable?.diagram && N(Ve).complete && me.value]
          ]),
          Vs.value && be.enable?.diagram && N(Le).length > 1 && N(Ve).complete ? (D(), $e(N(X), {
            key: 9,
            display: !0,
            "use-stack": !0,
            "show-sorting": !1,
            onShow: N(ce)
          }, null, 8, ["onShow"])) : fe("", !0),
          !Vs.value && be.enable?.diagram && N(Le).length > 1 && N(Ve).complete ? (D(), $e(N(he), {
            key: 10,
            ref: "stockNavigation",
            "active-stock-id": N(le),
            "stock-list": N(Le),
            "primary-color": be.colors.stock?.replace("#", ""),
            "secondary-color": be.colors.partA?.replace("#", ""),
            onShowStock: N(ce)
          }, null, 8, ["active-stock-id", "stock-list", "primary-color", "secondary-color", "onShowStock"])) : fe("", !0)
        ], 6)) : fe("", !0),
        xt.value ? (D(), te("div", fb, [
          ct(N(c), {
            data: [N(C)?.inputShapes?.value?.[0]],
            paths: ["inputShapes"]
          }, null, 8, ["data"]),
          r[10] || (r[10] = we("div", null, "Result data", -1)),
          ct(N(c), {
            data: [qt.value],
            paths: ["checkoutResult"]
          }, null, 8, ["data"])
        ])) : fe("", !0),
        ct(Dh, {
          open: d.value,
          "onUpdate:open": r[7] || (r[7] = (g) => d.value = g),
          options: b.value?.options || [],
          "material-label": b.value?.shape?.material || "",
          thickness: b.value?.shape?.t,
          "format-price": re.formatPrice,
          onPick: $,
          onCancel: B
        }, null, 8, ["open", "options", "material-label", "thickness", "format-price"])
      ]);
    };
  }
}), $b = /* @__PURE__ */ pn(pb, [["__scopeId", "data-v-f1de3f7f"]]);
export {
  Tb as A,
  ma as B,
  Mb as C,
  Ob as D,
  bf as E,
  As as F,
  Sc as G,
  Fa as I,
  Pl as L,
  Df as M,
  Jp as S,
  Eh as _,
  Ph as a,
  ml as b,
  kp as c,
  Nb as d,
  $b as e,
  Io as f,
  Kt as g,
  oh as h,
  Lb as i,
  Ab as j,
  Ep as k,
  Pp as l,
  Eb as m,
  Bd as n,
  Po as o,
  Cb as p,
  gg as q,
  fl as r,
  Xi as s,
  Da as t,
  Ci as u,
  Ec as v,
  Ad as w,
  Il as x,
  Fb as y,
  va as z
};

import { r as z, w as Ke, c as F, Y as xt, Z as vt, W as Zs, n as Ct, K as qn, d as lt, o as An, E as Da, _ as nl, H as Bt, a as D, b as O, q as je, $ as il, M as ci, f as K, j as Ae, u as I, e as ae, a0 as Ri, t as pe, s as sl, x as Vs, l as Lt, F as it, k as gt, C as al, a1 as xn, p as wn, O as Sn, A as ct, v as ol, y as Wi, z as ll, g as Ge, m as On, J as Ds, P as rl, a2 as Ot, h as Tn, I as cl, U as ul, V as dl } from "./vendor-vue-BYiwvu61.js";
import { bh as qe, bi as kn, aT as fl, be as ja, bj as bn, bk as si, bl as Ra, bm as Ga, bn as qa, bo as Gi, bp as hn, bq as Js, br as pl, bs as hl, bt as gl, bu as _a, bv as Ua, bw as cs, bx as ml, by as Pi, bz as qi, bA as vl, bd as Ci, I as Ii, w as Un, bc as en, y as Wn, i as En, H as Ut, aX as bl, bB as Ys, bC as yl, b6 as Jn, bD as Yn, b9 as Xn, F as Qn, bE as Xs, bF as Qs, bG as wl, m as ea, A as Sl, _ as kl, aR as xl, bH as Pl, aQ as Wa, bI as Cl, a8 as Bi, bJ as Il, bK as Al, aJ as Ol, bL as Ll, aK as $l, aM as Fl, aO as Tl, aN as El, aL as jn, c as ve, v as tt, bM as Ai, bN as Nl, bO as za, bP as Ml, f as Xt, bQ as Bl, bR as ta, x as Vl, e as gn, r as Dl, t as us, z as jl, q as Rl, bS as Gl, bT as Os, b8 as ql, bU as _l, bV as Ul, bW as Wl, bX as zl, bY as Ha, bZ as Hl, b_ as Kl, b$ as ds, c0 as Zl, c1 as Jl, c2 as Ka, c3 as Za, c4 as Yl, c5 as Xl, c6 as Ql, c7 as er, c8 as tr, c9 as nr, ca as Ls, cb as ir, cc as sr, cd as ar, ce as or, cf as lr, cg as rr, ch as Pn, ci as fs, cj as cr, g as yn, ck as na, cl as ps, cm as ur, cn as ia, o as sa, b as aa, u as hs, s as gs } from "./result.zod-C4CRDjtE.js";
import { s as ms, d as dr, u as fr, l as vs, b as pr } from "./i18n-B29Te7vQ.js";
import { H as ai, Z as Oi, A as ft, D as at, x as Cn, C as Fe, I as oa, J as hr, K as gr, w as Ye, y as Ja, L as mr, B as rt, M as la, N as Li, O as vr, Q as br, S as ra, T as yr, U as $i, V as bs, W as ys, X as ws, l as wr, o as Q, j as xe, i as P, t as U, F as _n, G as Sr, n as Ie, u as Xe, k as ln, Y as sn, m as We, h as De } from "./vendor-BIa5gMP2.js";
import "./vendor-i18next-DIDhOEvY.js";
import { f as kr, d as xr, l as _t, e as $s, c as Fs, i as ot, r as qt, g as Vi, h as Pr } from "./vendor-d3-DNaL3zcO.js";
import { a as Cr } from "./vendor-lodash-Dh7YE4In.js";
import { o as Ir, f as Ar, s as Or, a as Lr } from "./vendor-floating-ui-DZfk4g77.js";
import { t as ke } from "./i18n-BrgccvNc.js";
import { _ as Hn } from "./Launch-m3MPHA_z.js";
import { b as oi } from "./environment-BeBZzWz6.js";
function Ya(t, e = "cc") {
  if (!t) return t;
  const n = {
    l1: "w2",
    l2: "w1",
    w1: "l1",
    w2: "l2"
  }, i = {
    x1: "y1",
    x2: "y2",
    y1: "x2",
    y2: "x1"
  }, s = {
    a: "d",
    // bottom left -> bottom right
    b: "a",
    // top left -> bottom left
    c: "b",
    // top right -> top left
    d: "c"
    // bottom right -> top right
  }, a = {}, l = Object.keys(t).some((r) => ["x1", "x2", "y1", "y2"].includes(r)) ? i : n;
  if (e === "cc") {
    for (const [r, h] of Object.entries(l))
      r in t && (a[h] = t[r]);
    for (const [r, h] of Object.entries(s))
      r in t && (a[h] = t[r]);
  } else {
    for (const [r, h] of Object.entries(l))
      h in t && (a[r] = t[h]);
    for (const [r, h] of Object.entries(s))
      h in t && (a[r] = t[h]);
  }
  return a;
}
const Xa = {
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
    calculateOrientationLock: (t, e, n) => e >= n ? t === "n" ? "l" : t === "y" ? "" : t : t === "n" ? "w" : t === "y" ? "" : t === "l" ? "w" : "l",
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
    calculateOrientationLock: (t, e, n) => t === "n" || t === "y" ? "" : e >= n ? t : t === "l" ? "w" : "l",
    defaultOrientationLock: (t) => t === "n" || t === "y" ? "" : "l"
  }
};
function $r(t) {
  return t !== 0 && t !== 1 && t !== 2 ? !1 : Xa[t].sidesLMatchShapeL;
}
function Fr(t) {
  return t !== 0 && t !== 1 && t !== 2 ? [] : Xa[t].affectedExtraTypes;
}
function Di(t = 0, e, n = null, i = null, s = null) {
  if (!qe(n) && !kn || i === "stock") return !1;
  let a, o;
  if (qe(n) ? a = n.orientationLock : kn(n) ? a = "l" : i === "shape" && (a = s), t === 0 || kn(n))
    switch (e) {
      case "n":
        o = a === "w" || s === "w";
        break;
      case "l":
      case "y":
        o = a === "w" || s === "w";
        break;
      case "w":
        o = a === "l" || s === "l";
        break;
      default:
        o = s === "w";
    }
  else if (t === 1)
    if (n) o = n.w > n.l;
    else return !1;
  else if (t === 2) {
    if (!n) return !1;
    switch (e) {
      case "n":
        o = n.w > n.l;
        break;
      case "y":
      case "l":
        o = n.w > n.l;
        break;
      case "w":
        o = n.l >= n.w;
        break;
      default:
        o = !1;
    }
  }
  return o;
}
function Tr(t, e, n = null, i = null, s = null) {
  if (!qe(n) || i === "shape") return !1;
  let a;
  return t === 0 || t === 1 || t === 2 ? Di(t, e, n, i, s) ? "cc" : !1 : a;
}
function Er(t, e = []) {
  if (!t?.length) return [];
  const n = t.map((i) => i && typeof i.getType == "function" ? i : fl(i)).filter((i) => i instanceof ja);
  return e.length && Nr(n, e), n;
}
function Nr(t = [], e = []) {
  t.length && e.length && t.forEach((n) => {
    n.shapeIds = n.shapeIds.filter((i) => e.find((s) => s.autoId === i));
  });
}
let In = null;
if (oi())
  try {
    In = require("~/helpers/applicationSettings").applicationSettings;
  } catch (t) {
    console.error("[useCrossPlatformStorage] Failed to load ApplicationSettings:", t);
  }
function ei(t, e, n = {}) {
  const {
    serializer: i = {
      read: (a) => {
        try {
          return JSON.parse(a);
        } catch {
          return a;
        }
      },
      write: (a) => JSON.stringify(a)
    }
  } = n;
  if (!oi()) {
    const o = z((() => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const l = localStorage.getItem(t);
          if (l)
            return i.read(l);
        }
      } catch (l) {
        console.error("[useCrossPlatformStorage] Failed to load", t, "from localStorage:", l);
      }
      return e;
    })());
    return Ke(o, (l) => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const r = i.write(l);
          localStorage.setItem(t, r);
        }
      } catch (r) {
        console.error("[useCrossPlatformStorage] Failed to save", t, "to localStorage:", r);
      }
    }, { deep: !0 }), o;
  }
  if (oi()) {
    if (!In)
      return console.error("[useCrossPlatformStorage] ApplicationSettings not available! Using in-memory fallback."), z(e);
    const o = z((() => {
      try {
        const l = In.getString(t);
        if (l)
          return i.read(l);
      } catch (l) {
        console.error("[useCrossPlatformStorage] Failed to load", t, "from ApplicationSettings:", l);
      }
      return e;
    })());
    return Ke(o, (l) => {
      try {
        const r = i.write(l);
        In.setString(t, r);
      } catch (r) {
        console.error("[useCrossPlatformStorage] Failed to save", t, "to ApplicationSettings:", r);
      }
    }, { deep: !0 }), o;
  }
  return console.warn("[useCrossPlatformStorage] No storage available for key", t, "- using in-memory fallback"), z(e);
}
function ca(t) {
  try {
    return oi() ? In ? In.getString(t) : null : typeof window < "u" && window.localStorage ? localStorage.getItem(t) : null;
  } catch (e) {
    return console.error(`[getStorageValue] Error getting storage value for key ${t}:`, e), null;
  }
}
function ua(t) {
  try {
    oi() ? In && In.remove(t) : typeof window < "u" && window.localStorage && localStorage.removeItem(t);
  } catch (e) {
    console.error(`[removeStorageValue] Error removing storage value for key ${t}:`, e);
  }
}
function Mr() {
  const t = Date.now(), e = Math.random().toString(36).substring(2, 15), n = Math.random().toString(36).substring(2, 15);
  return `${t.toString(36)}-${e}-${n}`;
}
const mn = z([]), Br = 6;
function js() {
  const t = ({
    message: n,
    type: i = "info",
    additional: s = [],
    options: a = {},
    action: o = () => {
    }
  }) => {
    Array.isArray(s) || (console.warn("addNotice - additional must be an array"), s = []);
    const l = {
      id: Mr(),
      message: ms(n),
      additional: s.length > 5 ? s.slice(0, 5).map((h) => ms(h)).join("<br>") + "<br>..." : s.slice(0, 5).map((h) => ms(h)).join("<br>"),
      type: i,
      persistent: a.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: o
    }, r = a.maxNotices ?? Br;
    if (mn.value.length >= r) {
      const h = mn.value.findIndex((b) => !b.persistent);
      if (h !== -1)
        mn.value.splice(h, 1);
      else if (!l.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), l.id;
    }
    return mn.value.push(l), !l.persistent && a.timeout !== 0 && setTimeout(() => e(l.id), a.timeout || 6e3), l.id;
  }, e = (n) => {
    mn.value.findIndex((s) => s.id === n) !== -1 && (mn.value = mn.value.filter((s) => s.id !== n));
  };
  return {
    notices: mn,
    addNotice: t,
    dismissNotice: e
  };
}
const da = /* @__PURE__ */ new Set(), Qa = "cle-extras-config", Vr = () => {
  try {
    const t = localStorage.getItem(Qa);
    return t ? JSON.parse(t) : {};
  } catch {
    return {};
  }
}, Dr = (t) => {
  try {
    localStorage.setItem(Qa, JSON.stringify(t));
  } catch {
  }
}, li = z(Vr()), Ts = (t, e) => {
  li.value[t] = e, Dr(li.value);
}, tn = (t) => li.value[t] || null, jr = () => li.value;
let fa = !1;
const Rr = () => {
  fa || (vl({
    getExtrasConfig: tn,
    getAllExtrasConfigs: jr,
    setExtrasConfig: Ts
  }), fa = !0);
}, Gr = (t, e) => {
  const n = tn(t);
  if (!n || !n.options || n.options.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const i = n.options[0], s = Array.isArray(i) && typeof i[0] == "string" ? i : [];
  if (s.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const a = (r) => n.options.length > 1 ? r.includes("|") ? n.pricing && Object.keys(n.pricing).length > 0 ? Object.prototype.hasOwnProperty.call(n.pricing, r) ? !0 : Object.keys(n.pricing).some((S) => S.startsWith(r + "|") || S === r) : r.split("|").every((b, S) => {
    if (S >= n.options.length) return !1;
    const p = n.options[S];
    return Array.isArray(p) && typeof p[0] == "string" && p.includes(b);
  }) : n.options.some((h) => Array.isArray(h) && typeof h[0] == "string" && h.includes(r)) : s.includes(r), o = /* @__PURE__ */ new Set();
  let l = 0;
  return e.forEach((r) => {
    if (!r.extras?.[t]) return;
    const h = r.extras[t].sides || {};
    Object.entries(h).forEach(([S, p]) => {
      typeof p == "string" && p && !a(p) && (o.add(p), h[S] = "", l++);
    });
    const b = r.extras[t].faces || {};
    Object.entries(b).forEach(([S, p]) => {
      typeof p == "string" && p && !a(p) && (o.add(p), b[S] = "", l++);
    });
  }), {
    cleanedCount: l,
    invalidOptions: Array.from(o)
  };
}, qr = (t) => {
  Rr();
  const {
    shape: e,
    extraType: n,
    allOptions: i,
    labels: s,
    userFriendlyFieldMap: a,
    allowCustomNames: o,
    customNames: l = z([]),
    enablePricing: r = !1,
    pricing: h,
    displayNames: b,
    locations: S = z([]),
    locationGroups: p = z([]),
    orientationModel: $ = 0,
    getAvailablePricingOptions: C,
    getPrice: M,
    findExtrasPrice: E,
    formatPrice: V
  } = t, G = F(() => Zs(i) ? i.value : i), Z = F(() => Zs(b) ? b.value : b), he = () => {
    const f = tn(n), y = G.value?.length ? G.value : f?.options || [], B = f?.labels || s;
    bn(e.value, n, y, B, l.value);
  };
  he(), Ke(
    () => e.value?.extras?.[n],
    (f) => {
      if (f) {
        const y = f?.sides || {}, B = f?.options?.sides || {};
        let _ = !1;
        for (const [W, te] of Object.entries(y))
          if (typeof te == "string") {
            if (te.includes("|") && !B[W]) {
              _ = !0;
              break;
            } else if (te !== "" && !B[W]) {
              _ = !0;
              break;
            }
          }
        _ && he();
      }
    },
    { immediate: !1 }
  );
  const T = F(() => li.value[n] || null), N = F(() => {
    const f = G.value?.length ? G.value : T.value?.options || [];
    if (f.length > 1)
      return "multiple";
    const B = (f[0] || []).filter((fe) => typeof fe == "string"), _ = (l.value || []).filter((fe) => typeof fe == "string"), te = Array.from(/* @__PURE__ */ new Set([...B, ..._])).length;
    return te === 0 ? "boolean" : te === 1 ? "single" : "multiple";
  }), ee = F(() => qi(n)), w = F(() => S.value && S.value.length > 0 ? S.value.filter((f) => f !== "all" && f !== "faces" && f !== "sides") : ee.value), j = F(() => w.value.filter((f) => si(f) === "face")), x = F(() => w.value.filter((f) => si(f) === "side")), H = F(() => Ga(n)), se = F(() => Ra(n)), re = F(() => qa(n)), oe = () => T.value?.options && T.value.options.length > 1, Be = (f, y, B) => {
    const { singleOption: _ = Ze(), operation: W } = B;
    switch (y) {
      case "boolean":
        return !!f;
      case "single":
        return _ ? W === "process" || W === "set" ? f && _ ? _ : "" : f === _ ? _ : "" : !!f;
      case "multiple":
        return f || "";
      default:
        return f;
    }
  }, Y = (f, y, B) => Be(y, B, { operation: "process" }), ce = (f, y, B, _, W, te) => {
    switch (te) {
      case "boolean":
        Pi(f, y, B, _, !!W);
        break;
      case "single": {
        const fe = Ze();
        Pi(f, y, B, _, W ? fe : "");
        break;
      }
      case "multiple":
        Pi(f, y, B, _, W || "");
        break;
    }
  }, Ce = (f, y, B = {}) => {
    const _ = B.singleOption || Ze();
    return B.allowCustomNames, Be(f, y, {
      operation: "get",
      singleOption: _
    });
  }, J = (f, y, B, _) => {
    switch (_) {
      case "boolean":
        return !!f;
      case "single": {
        const W = Ze();
        if (W) {
          const te = y.map((me) => hn(e.value, n, me, B)), fe = te.every((me) => me === W || me === !0), Le = te.every((me) => !me || me === "");
          return fe ? W : Le ? "" : null;
        }
        return !!f;
      }
      case "multiple":
        return typeof f == "string" ? f : f || "";
      default:
        return f;
    }
  }, le = (f, y, B, _ = !1) => {
    if (_)
      f.forEach((W) => nt(W, y, B));
    else {
      const W = s[y] || "", te = Y(W, B, N.value);
      f.forEach((fe) => {
        ce(e.value, n, fe, W, te, N.value);
      });
    }
  }, ge = (f, y) => {
    if (oe()) {
      const B = s[y] || "", _ = f.map((Le) => {
        const me = hn(e.value, n, Le, B);
        return me === !0 ? dt(y)[0] || "" : String(me || "");
      }), W = _[0] || "";
      return _.every((Le) => Le === W) ? W : null;
    } else {
      const B = s[y] || "";
      if (N.value === "single") {
        const W = Ze();
        if (W) {
          const te = f.map((me) => hn(e.value, n, me, B)), fe = te.every((me) => me === W || me === !0), Le = te.every((me) => !me || me === "");
          return fe ? W : Le ? "" : null;
        }
      }
      const _ = Js(e.value, n, f, B, N.value);
      return N.value === "multiple" && _ === !1 && f.every((te) => {
        const fe = hn(e.value, n, te, B, N.value);
        return fe === "" || fe === !1 || fe === null || fe === void 0;
      }) ? "" : _;
    }
  }, $e = (f) => {
    const { location: y, locationType: B = "single", optionIndex: _, stateValue: W, isAggregate: te = !1 } = f, fe = dt(_), Le = te && y !== void 0 && _e(y), me = te ? Ee(_, y && _e(y) ? y : B) : Ee(_, y), pt = r && fe.length > 1 && me.length === 0, be = !Le && fe.length > 1 && !pt ? "select" : "checkbox";
    if (pt && y) {
      const et = `${n}:${y}:${_}`;
      da.has(et) || (da.add(et), js().addNotice({
        type: "warning",
        message: `No price set for ${n} at ${y}. This option is not currently available.`
      }));
    }
    const Me = N.value === "multiple" && me.length === 1 && r && _ > 0;
    if (Me && me[0]) {
      if (te) {
        let et = [];
        B === "all" ? et = w.value : B === "faces" ? et = j.value : B === "sides" ? et = x.value : y && _e(y) && (et = ut(y)), et.forEach((pn) => {
          const mi = ze(pn, _);
          (!mi || mi !== me[0]) && nt(pn, _, me[0]);
        });
      } else if (y) {
        const et = ze(y, _);
        (!et || et !== me[0]) && nt(y, _, me[0]);
      }
    }
    let Ue = !1;
    const jt = tn(n);
    if (jt?.optionLocations && y && y !== "all" && be === "checkbox" && fe.length === 1) {
      const et = jt.optionLocations[fe[0]];
      et && !et.includes(y) && (Ue = !0);
    }
    const Rt = pt || N.value === "multiple" && (me.length === 0 || Me), Mn = W !== void 0 ? W : y ? ze(y, _) : null, gi = be === "select" ? Qe(y || B, _) : void 0, Qi = (et) => (Z.value ?? T.value?.displayNames)?.[et] || et, es = be === "checkbox" ? Le ? f.customLabel : fe.length === 1 ? Qi(fe[0]) : void 0 : void 0;
    let Bn, Fn;
    if (be === "checkbox")
      if (Le && fe.length > 1) {
        const et = fe.find((pn) => pn.endsWith(`|${y}`));
        et && (Bn = et, Fn = "");
      } else fe.length === 1 && (Bn = fe[0], Fn = "");
    return {
      inputType: be,
      // Alias for backward compatibility
      type: be,
      value: Mn,
      options: gi,
      disabled: Rt,
      hidden: Ue,
      label: es,
      indeterminate: Mn === null && be === "checkbox",
      trueValue: Bn,
      falseValue: Fn
    };
  }, It = (f, y, B) => $e({
    locationType: f,
    optionIndex: y,
    stateValue: B,
    isAggregate: !0
  }), nt = (f, y, B) => {
    const _ = s[y] || "";
    if (oe()) {
      const W = Pe(f, y);
      let te;
      if (W === "checkbox") {
        const Le = dt(y)[0];
        te = B ? Le : "";
      } else
        te = B || "";
      Pi(e.value, n, f, _, te);
    } else
      ce(e.value, n, f, _, B, N.value);
  }, ze = (f, y) => {
    const B = s[y] || "";
    if (oe()) {
      const _ = hn(e.value, n, f, B);
      if (Pe(f, y) === "checkbox") {
        const fe = dt(y)[0];
        return _ === !0 || _ === fe ? fe : "";
      } else
        return _ || "";
    } else {
      const _ = hn(e.value, n, f, B, N.value);
      return Ce(_, N.value);
    }
  }, Ft = (f, y) => {
    le(w.value, f, y, oe());
  }, yt = (f) => {
    if (oe()) {
      const y = s[f] || "", B = w.value.map((te) => {
        const fe = hn(e.value, n, te, y);
        return fe === !0 ? dt(f)[0] || "" : String(fe || "");
      }), _ = B[0] || "";
      return B.every((te) => te === _) ? _ : null;
    } else {
      const y = s[f] || "", B = Js(e.value, n, w.value, y, N.value);
      return J(B, w.value, y, N.value);
    }
  }, rn = () => {
    cs(e.value, n, w.value, N.value), vt(e);
  }, Tt = (f) => f === "faces" ? {
    locations: j.value,
    isSupported: H.value
  } : {
    locations: x.value,
    isSupported: se.value
  }, mt = (f, y, B) => {
    const { locations: _, isSupported: W } = Tt(f);
    W && le(_, y, B, oe());
  }, Et = (f, y) => {
    const { locations: B, isSupported: _ } = Tt(f);
    return _ ? ge(B, y) : null;
  }, wt = (f) => {
    const { locations: y, isSupported: B } = Tt(f);
    B && (cs(e.value, n, y, N.value), vt(e));
  }, cn = (f, y) => {
    const { isSupported: B } = Tt(f);
    if (!B) return { type: "checkbox", value: !1 };
    const _ = Et(f, y);
    return It(f, y, _);
  }, Nt = (f, y) => {
    mt("faces", f, y);
  }, st = (f, y) => {
    mt("sides", f, y);
  }, Wt = (f) => Et("faces", f), Vt = (f) => Et("sides", f), un = () => {
    wt("faces");
  }, de = () => {
    wt("sides");
  }, Re = (f) => p.value.find((y) => y.id === f), _e = (f) => ["all", "faces", "sides"].includes(f) ? !1 : !f.includes("."), ut = (f) => {
    const y = Re(f);
    return y ? y.locations.filter((B) => w.value.includes(B)) : [];
  }, A = (f, y, B) => {
    const _ = ut(f);
    _.length !== 0 && (_.forEach((W) => nt(W, y, B)), vt(e));
  }, v = (f, y) => {
    const B = ut(f);
    if (B.length === 0) return null;
    if (!oe()) {
      const te = dt(y).find((fe) => fe.endsWith(`|${f}`));
      if (te) {
        const fe = s[y] || "", Le = B.map((be) => hn(e.value, n, be, fe)), me = Le.every((be) => be === te), pt = Le.some((be) => be === te);
        return me ? te : pt ? null : "";
      }
    }
    const _ = ge(B, y);
    return !oe() && (_ === null || _ === !1 || _ === "") ? "" : _;
  }, m = (f) => {
    const y = ut(f);
    y.length !== 0 && (cs(e.value, n, y, N.value), vt(e));
  }, q = (f, y) => {
    const B = v(f, y), _ = Re(f);
    return $e({
      location: f,
      optionIndex: y,
      stateValue: B,
      isAggregate: !0,
      customLabel: _?.label
    });
  }, ie = (f) => {
    ml(e.value, n, f, N.value), vt(e);
  }, Se = (f) => f === "all" ? w.value.some((y) => !!ze(y, 0)) : f === "faces" && H.value ? j.value.some((y) => !!ze(y, 0)) : f === "sides" && se.value ? x.value.some((y) => !!ze(y, 0)) : _e(f) ? ut(f).some((B) => !!ze(B, 0)) : w.value.includes(f) ? !!ze(f, 0) : !1, ye = (f) => {
    if (f === "all") return ke("general.all");
    if (f === "faces") return `${ke("general.all")} ${ke("machining.face_other")}`;
    if (f === "sides") return `${ke("general.all")} ${ke("woodwork.edge_other")}`;
    if (_e(f)) {
      const _ = Re(f);
      if (_) return _.label;
    }
    if (f.startsWith("face.")) {
      const W = `faces.${f.replace("face.", "")}`;
      return ke(W);
    }
    if (f.startsWith("side.")) {
      let _ = f.replace("side.", "");
      ($ === 1 || $ === 2) && e.value && e.value.w > e.value.l && (_ = { l1: "w1", l2: "w2", w1: "l1", w2: "l2" }[_] || _);
      const W = `sides.${_}`;
      return ke(W);
    }
    const y = `fields.${f}`, B = ke(y);
    return B !== y ? B : a?.[f] ? a[f] : f;
  }, Pe = (f, y) => N.value === "boolean" ? "checkbox" : dt(y).length > 1 ? "select" : "checkbox", we = (f, y) => $e({
    location: f,
    optionIndex: y,
    isAggregate: !1
  }), Te = (f) => {
    const y = yt(f);
    return It("all", f, y);
  }, Dt = (f) => cn("faces", f), He = (f) => cn("sides", f), At = (f, y) => f === "all" ? Te(y) : f === "faces" ? Dt(y) : f === "sides" ? He(y) : _e(f) ? q(f, y) : we(f, y), Ee = (f, y) => {
    const B = tn(n), W = (G.value?.length ? G.value : B?.options || [])[f];
    if (!W || W[0] === !0)
      return [];
    const te = y && typeof y == "string" && (y.startsWith("face.") || y.startsWith("side.")), fe = y && typeof y == "string" && _e(y), Le = !te && (y === "all" || y === "faces" || y === "sides" || fe);
    if (Array.isArray(W) && W.length === 1 && typeof W[0] == "string" && !(r && C && (te || Le) && f > 0))
      return W;
    if (r && C && te) {
      const be = [];
      if (f > 0)
        for (let Me = 0; Me < f; Me++) {
          const Ue = ze(y, Me);
          if (typeof Ue == "string" && Ue)
            be.push(Ue);
          else if (typeof Ue == "boolean")
            be.push(Ue);
          else {
            const jt = tn(n), Rt = Gi(e.value, n, y);
            return Rt && typeof Rt == "object" && !Array.isArray(Rt) && Object.keys(Rt).length > 1 && jt?.options[f] ? jt.options[f] : [];
          }
        }
      return C(h, be, f);
    }
    if (r && C && Le) {
      const be = [];
      if (f > 0)
        for (let Me = 0; Me < f; Me++) {
          let Ue;
          if (y === "all" ? Ue = yt(Me) : y === "faces" ? Ue = Wt(Me) : y === "sides" ? Ue = Vt(Me) : fe && typeof y == "string" && (Ue = v(y, Me)), typeof Ue == "string" && Ue)
            be.push(Ue);
          else if (typeof Ue == "boolean")
            be.push(Ue);
          else
            return [];
        }
      return C(h, be, f);
    }
    const me = W, pt = o ? (l.value || []).filter((be) => typeof be == "string") : [];
    return [.../* @__PURE__ */ new Set([...me, ...pt])];
  }, Qe = (f, y) => {
    const B = tn(n), W = (G.value?.length ? G.value : B?.options)?.[y] || [], te = o && l.value ? l.value.filter((Me) => typeof Me == "string") : [];
    let fe = [.../* @__PURE__ */ new Set([...W, ...te])];
    B?.optionLocations && f && f !== "all" && (fe = fe.filter((Me) => {
      const Ue = B.optionLocations[Me];
      return Ue ? Ue.includes(f) : !0;
    }));
    const Le = Ee(y, f), me = new Set(Le), pt = Z.value ?? B?.displayNames;
    return fe.map((Me) => ({
      value: Me,
      label: pt?.[Me] || Me,
      disabled: !me.has(Me)
    }));
  }, Ze = () => {
    const f = Ee(0);
    return f.length === 1 ? f[0] : void 0;
  }, ui = (f) => {
    const y = Ee(f);
    return y.length === 1 ? y[0] : void 0;
  }, dt = (f) => {
    const y = tn(n), B = G.value?.length ? G.value : y?.options;
    let _ = [];
    if (B && B[f] && Array.isArray(B[f])) {
      const te = B[f];
      Array.isArray(te) && te.every((fe) => typeof fe == "string") && (_ = te);
    }
    const W = o && l.value ? l.value.filter((te) => typeof te == "string") : [];
    return [.../* @__PURE__ */ new Set([..._, ...W])];
  }, zt = (f, y = 0) => {
    if (f === "all" || f === "faces" || f === "sides")
      return "";
    if (_e(f)) {
      const _ = Re(f);
      return _?.price !== void 0 && v(f, y) ? V ? V(_.price) : _.price.toString() : "";
    }
    if (!r || !M)
      return "";
    if (!w.value.includes(f))
      return "N/A";
    const B = M(e.value, n, f, E);
    return B ? V ? V(B) : B.toString() : "N/A";
  }, Ht = (f) => !r || !M ? !1 : M(e.value, n, f, E), Kt = F(() => w.value.length > 1), Zt = F(() => ee.value.length > 1), di = () => {
    if (S.value && S.value.length > 0) {
      const W = [];
      return p.value && p.value.length > 0 && p.value.forEach((te) => W.push(te.id)), W.push(...S.value), W;
    }
    const f = [], y = p.value && p.value.length > 0;
    y && p.value.forEach((W) => f.push(W.id)), y || (Kt.value && f.push("all"), Zt.value && (_a(n).length > 0 && f.push("faces"), Ua(n).length > 0 && f.push("sides")));
    const B = /* @__PURE__ */ new Set();
    p.value && p.value.length > 0 && p.value.forEach((W) => {
      W.hideIndividualLocations && W.locations.forEach((te) => B.add(te));
    });
    const _ = ee.value.filter((W) => !B.has(W));
    return f.push(..._), f;
  }, fi = () => N.value === "multiple", Kn = () => {
    const f = 1 + G.value.length, y = N.value === "multiple", B = r, _ = f + (y ? 1 : 0) + (B ? 1 : 0);
    return {
      columns: _,
      style: `repeat(${_}, max-content)`
    };
  }, dn = (f) => f === "all" ? "all" : f === "faces" ? "faces" : f === "sides" ? "sides" : "individual", Ln = (f) => si(f), fn = (f) => {
    if (f === "all")
      return Kt.value;
    if (_e(f))
      return Re(f) ? ut(f).length > 0 : !1;
    if (S.value && S.value.length > 0)
      return S.value.includes(f);
    const y = dn(f);
    return y === "all" ? Kt.value : y === "faces" || y === "sides" ? y === "faces" && H.value && j.value.length > 0 || y === "sides" && se.value && x.value.length > 0 ? Zt.value : !1 : ee.value.includes(f);
  }, Ki = (f) => {
    gl(f, n, l);
  }, $n = (f) => {
    hl([e.value], n, f, s);
  }, pi = (f) => {
    pl([e.value], n, f);
  }, Jt = (f, y, B) => {
    if (f === "all")
      Ft(y, B);
    else if (f === "faces")
      Nt(y, B);
    else if (f === "sides")
      st(y, B);
    else if (_e(f)) {
      let W = B;
      if (!oe() && typeof B == "boolean") {
        const te = dt(y), fe = te.find((Le) => Le.endsWith(`|${f}`));
        fe ? W = B ? fe : "" : te.length === 1 && (W = B ? te[0] : "");
      }
      if (!oe() && W) {
        const te = ut(f), fe = new Set(te);
        p.value && (p.value.forEach((Le) => {
          Le.id !== f && ut(Le.id).filter((be) => !fe.has(be)).forEach((be) => {
            nt(be, y, "");
          });
        }), vt(e));
      }
      A(f, y, W);
    } else
      nt(f, y, B), oe() || vt(e);
    const _ = s.length;
    for (let W = y + 1; W < _; W++) {
      let te;
      if (f === "all" ? te = yt(W) : f === "faces" ? te = Wt(W) : f === "sides" ? te = Vt(W) : _e(f) ? te = v(f, W) : te = ze(f, W), !te)
        continue;
      const fe = Ee(W, f);
      let Le = !1;
      if (typeof te == "string" ? Le = fe.includes(te) : typeof te == "boolean" && te === !0 && (Le = fe.length > 0), !Le) {
        const me = Pe(f, W) === "checkbox" ? !1 : "";
        f === "all" ? Ft(W, me) : f === "faces" ? Nt(W, me) : f === "sides" ? st(W, me) : _e(f) ? A(f, W, me) : nt(f, W, me);
      }
    }
  }, Zi = (f, y = !0) => y && !confirm(`Delete ${n} for ${ye(f)}?`) ? !1 : (f === "all" ? rn() : f === "faces" ? un() : f === "sides" ? de() : _e(f) ? m(f) : ie(f), !0), Ji = () => {
    const f = e.value[n], y = e.value[`${n}Options`];
    return !(!f || typeof f != "object" || !y || typeof y != "object" || H.value && (!("faces" in f) || !("faces" in y)) || se.value && (!("sides" in f) || !("sides" in y)));
  }, Nn = () => {
    const f = [], y = e.value[n], B = e.value[`${n}Options`];
    return !y || typeof y != "object" ? f.push(`Missing or invalid ${n} property in shape`) : (H.value && !("faces" in y) && f.push(`Missing faces property in ${n}`), se.value && !("sides" in y) && f.push(`Missing sides property in ${n}`)), !B || typeof B != "object" ? f.push(`Missing or invalid ${n}Options property in shape`) : (H.value && !("faces" in B) && f.push(`Missing faces property in ${n}Options`), se.value && !("sides" in B) && f.push(`Missing sides property in ${n}Options`)), f;
  }, hi = (f) => {
    const y = [];
    if (!f || !Object.keys(f).length)
      return { valid: !0, errors: y };
    const B = Object.keys(f), _ = Math.max(...B.map((W) => W.split("|").length));
    if (_ <= 1)
      return { valid: !0, errors: y };
    for (const W of w.value) {
      let te;
      if (oe()) {
        const me = Gi(e.value, n, W);
        me && typeof me == "object" && !Array.isArray(me) ? te = s.map((be) => {
          const Me = me[be];
          if (Me === !0) {
            const Ue = s.indexOf(be);
            return dt(Ue)[0] || "";
          }
          return String(Me || "");
        }).join("|") : te = "";
      } else {
        const me = ze(W, 0);
        te = typeof me == "string" ? me : "";
      }
      if (!te || te === "")
        continue;
      const fe = te.includes("|") ? te.split("|") : [te], Le = fe.filter((me) => me.trim() !== "").length;
      if (Le > 0 && Le < _) {
        const me = fe.join("|"), pt = B.some((Me) => Me.startsWith(me + "|")), be = B.includes(me);
        if (pt && !be) {
          const Me = _ - Le, Ue = fe.filter((Rt) => Rt.trim() !== "").join(", "), jt = ye(W);
          y.push(`${n} selection incomplete for ${jt}. Selected: "${Ue}" but ${Me} more level${Me > 1 ? "s" : ""} required.`);
        }
      }
    }
    return { valid: y.length === 0, errors: y };
  }, Yi = (f) => hi(f).errors, Xi = F(() => di().map((f) => ({
    location: f,
    label: ye(f),
    isAggregate: ["all", "faces", "sides"].includes(f) || _e(f)
  })));
  return {
    // State - provide raw computed refs for other composables
    mode: N,
    // Raw computed ref (not readonly wrapped)
    allLocations: xt(w),
    faceLocations: xt(j),
    sideLocations: xt(x),
    shouldShowAll: Kt,
    // Raw computed ref (not readonly wrapped)
    shouldShowGroupControls: xt(Zt),
    renderLocations: xt(Xi),
    // Expose computed renderLocations
    // Support flags
    supportsFaces: xt(H),
    supportsSides: xt(se),
    supportsBoth: xt(re),
    // Core operations
    setValue: nt,
    getValue: ze,
    setAll: Ft,
    getAll: yt,
    getAllState: yt,
    // Alias for backward compatibility
    deleteSingle: ie,
    deleteAll: rn,
    canDelete: Se,
    // Group-specific operations
    setAllFaces: Nt,
    setAllSides: st,
    getAllFaces: Wt,
    getAllSides: Vt,
    deleteAllFaces: un,
    deleteAllSides: de,
    // UI helpers
    getLocationLabel: ye,
    getInputType: Pe,
    getInputConfig: we,
    getAllInputConfig: Te,
    getAllFacesInputConfig: Dt,
    getAllSidesInputConfig: He,
    getInputConfigForLocation: At,
    getSelectOptions: Qe,
    getSingleOptionLabel: ui,
    // Pricing
    getPriceDisplay: zt,
    getCalculatedPrice: Ht,
    // Layout & rendering
    getRenderLocations: di,
    shouldShowDeleteButton: fi,
    getGridConfig: Kn,
    getLocationGroup: dn,
    getLocationScope: Ln,
    isLocationVisible: fn,
    // Options management
    getAvailableOptions: Ee,
    getSingleAvailableOption: Ze,
    // Initialization & migration
    initialize: he,
    initializeExtra: he,
    // Alias for backward compatibility
    initializeCustomNames: Ki,
    migrateToSingle: $n,
    migrateToBoolean: pi,
    // Event handlers
    handleInputChange: Jt,
    handleDelete: Zi,
    // Validation
    validateShape: Ji,
    getValidationErrors: Nn,
    validateIncompleteSelections: hi,
    getIncompleteSelectionErrors: Yi,
    // Debug helpers (development only)
    getDebugInfo: (f, y) => ({
      mode: N.value,
      location: f,
      optionIndex: y,
      value: w.value.includes(f) ? ze(f, y) : "N/A",
      inputType: Pe(f, y),
      canDelete: Se(f),
      allState: yt(y),
      availableOptions: Ee(y),
      locationGroup: dn(f),
      config: T.value,
      supportsFaces: H.value,
      supportsSides: se.value,
      supportsBoth: re.value,
      ...H.value && {
        allFacesState: Wt(y)
      },
      ...se.value && {
        allSidesState: Vt(y)
      },
      ...w.value.includes(f) && {
        locationScope: Ln(f)
      }
    })
  };
}, _r = (t) => {
  const {
    customNames: e,
    usedNames: n,
    allowCustomNames: i,
    getSelectOptions: s,
    onCustomNameAdded: a,
    onCustomNameDeleted: o
  } = t, l = z(""), r = F(() => i && l.value?.trim()), h = F(() => !i || !e.value || e.value.length === 0 || e.value.length === 1 && e.value[0] === !0 ? !0 : e.value.filter((C) => typeof C == "string").every((C) => n.value.includes(C))), b = F(() => {
    const $ = [];
    if (i && e.value && e.value.length > 0) {
      if (e.value.length === 1 && e.value[0] === !0)
        return $;
      const M = [...e.value.filter((E) => typeof E == "string")].sort();
      $.push({
        id: "delete-header",
        type: "group",
        label: "Delete Type"
      }), M.forEach((E) => {
        (n.value?.includes(E) ?? !1) || $.push({
          id: `delete-${E}`,
          label: `Delete "${E}"`,
          icon: ["fass", "trash"],
          class: "del"
        });
      });
    }
    return $;
  }), S = () => {
    const $ = l.value?.trim();
    if (!$) return;
    if (s("", 0).map((M) => M.value).includes($)) {
      l.value = "";
      return;
    }
    a($), l.value = "";
  }, p = ($) => {
    const C = $.item || $;
    if (C.id?.startsWith("delete-")) {
      const M = C.id.replace("delete-", "");
      if (n.value?.includes(M)) {
        console.warn(`Cannot delete ${t.extraType} type "${M}" - it is currently in use`);
        return;
      }
      o(M);
    }
  };
  return {
    newCustomName: l,
    canAddCustomName: xt(r),
    isActionMenuDisabled: xt(h),
    customNameActions: b,
    handleAddCustomName: S,
    handleCustomNameAction: p
  };
}, Ur = (t) => {
  const {
    extraType: e,
    labels: n,
    shapeIndex: i,
    enablePricing: s,
    shouldShowAll: a,
    locations: o,
    locationGroups: l = z([]),
    shape: r = z(null),
    orientationModel: h = 0,
    getInputType: b,
    getInputConfig: S,
    getAllInputConfig: p,
    getInputConfigForLocation: $,
    canDelete: C,
    getLocationLabel: M,
    shouldShowDeleteButton: E
  } = t, V = F(() => {
    const ee = [], w = l.value && l.value.length > 0, j = /* @__PURE__ */ new Set();
    if (w && l.value.forEach((H) => {
      H.hideIndividualLocations && H.locations.forEach((se) => j.add(se));
    }), w && l.value.forEach((H) => ee.push(H.id)), !w && a.value && ee.push("all"), o.value && o.value.length > 0)
      ee.push(...o.value.filter((H) => H !== "all" && !j.has(H)));
    else {
      const H = qi(e), se = qa(e), re = Ga(e), oe = Ra(e);
      !w && (se && re && oe) && (_a(e).length > 0 && ee.push("faces"), Ua(e).length > 0 && ee.push("sides")), ee.push(...H.filter((Y) => !j.has(Y)));
    }
    let x = Array.from(new Set(ee));
    if ((h === 1 || h === 2) && r.value && r.value.w > r.value.l) {
      const H = ["side.l1", "side.l2", "side.w1", "side.w2"], se = x.map((re, oe) => ({ loc: re, i: oe })).filter((re) => H.includes(re.loc));
      if (se.length > 0) {
        const re = se[0].i, oe = se.filter((ce) => ce.loc.includes(".w")).sort((ce, Ce) => ce.loc.localeCompare(Ce.loc)), Be = se.filter((ce) => ce.loc.includes(".l")).sort((ce, Ce) => ce.loc.localeCompare(Ce.loc)), Y = [...oe.map((ce) => ce.loc), ...Be.map((ce) => ce.loc)];
        x = x.filter((ce) => !H.includes(ce)), x.splice(re, 0, ...Y);
      }
    }
    return x;
  }), G = F(() => `1fr${s ? " max-content" : ""}`), Z = (ee, w) => `${e}-${ee}-${n[w]}-${w}-${i}`, he = (ee) => {
    const w = M(ee);
    return `Delete ${e} for ${w}`;
  }, T = (ee) => ({
    show: E(ee),
    enabled: C(ee),
    ariaLabel: he(ee)
  }), N = (ee, w) => b(ee, w);
  return {
    renderLocations: xt(V),
    gridStyle: xt(G),
    getInputId: Z,
    getDeleteAriaLabel: he,
    getInputConfigForLocation: $,
    getDeleteConfig: T,
    getInputTypeForLocation: N,
    // Re-export the passed functions for consistency
    getInputType: b,
    getInputConfig: S,
    getAllInputConfig: p,
    canDelete: C,
    shouldShowDeleteButton: E,
    getLocationLabel: M
  };
};
function eo(t) {
  const e = {}, n = t, i = n.code;
  if (i === "invalid_type") {
    let s = "unknown";
    if ("input" in n)
      s = typeof n.input;
    else if ("received" in n) {
      const a = n.received;
      s = typeof a == "string" ? a : typeof a;
    }
    e.expected = n.expected, e.received = s;
  } else i === "too_small" ? (e.minimum = n.minimum, e.min = n.minimum, e.inclusive = n.inclusive) : i === "too_big" ? (e.maximum = n.maximum, e.max = n.maximum, e.inclusive = n.inclusive) : i === "invalid_string" && (e.validation = n.validation);
  return e;
}
function Wr(t) {
  return t.map((e) => {
    const n = e.path.length > 0 ? e.path.join(".") : "root", i = eo(e), s = yl(e.message, i);
    return `[${n}] ${s}`;
  });
}
function ti(t, e) {
  const n = t.safeParse(e);
  return {
    success: n.success,
    data: n.success ? n.data : void 0,
    errors: n.success ? void 0 : n.error.issues
  };
}
function zr(t = {}) {
  try {
    let e = function(A) {
      if (!A || typeof A != "object") return A;
      const v = { ...A };
      if (delete v.issues, delete v.warnings, v.trim && typeof v.trim == "object") {
        const m = v.trim;
        ("x1" in m || "x2" in m || "y1" in m || "y2" in m) && (v.trim = {
          l1: m.y1 ?? m.l1 ?? 0,
          l2: m.y2 ?? m.l2 ?? 0,
          w1: m.x1 ?? m.w1 ?? 0,
          w2: m.x2 ?? m.w2 ?? 0
        });
      }
      if (v.extras?.banding?.sides && typeof v.extras.banding.sides == "object") {
        const m = v.extras.banding.sides;
        ("x1" in m || "x2" in m || "y1" in m || "y2" in m) && (v.extras.banding.sides = {
          l1: m.y1 ?? m.l1,
          l2: m.y2 ?? m.l2,
          w1: m.x1 ?? m.w1,
          w2: m.x2 ?? m.w2
        });
      }
      if (v.extras?.finish?.sides && typeof v.extras.finish.sides == "object") {
        const m = v.extras.finish.sides;
        ("x1" in m || "x2" in m || "y1" in m || "y2" in m) && (v.extras.finish.sides = {
          l1: m.y1 ?? m.l1,
          l2: m.y2 ?? m.l2,
          w1: m.x1 ?? m.w1,
          w2: m.x2 ?? m.w2
        });
      }
      if (v.extras?.planing?.sides && typeof v.extras.planing.sides == "object") {
        const m = v.extras.planing.sides;
        ("x1" in m || "x2" in m || "y1" in m || "y2" in m) && (v.extras.planing.sides = {
          l1: m.y1 ?? m.l1,
          l2: m.y2 ?? m.l2,
          w1: m.x1 ?? m.w1,
          w2: m.x2 ?? m.w2
        });
      }
      if (v.efficiencyOptions?.primaryCompression) {
        const m = v.efficiencyOptions.primaryCompression;
        m === "x" ? v.efficiencyOptions = {
          ...v.efficiencyOptions,
          primaryCompression: "l"
        } : m === "y" && (v.efficiencyOptions = {
          ...v.efficiencyOptions,
          primaryCompression: "w"
        });
      }
      for (const m in v)
        v[m] === null && delete v[m];
      return v;
    }, n = function(A, v) {
      if (!Array.isArray(A))
        return [];
      const m = [];
      for (let q = 0; q < A.length; q++) {
        const ie = A[q], Se = e(ie);
        try {
          const ye = {
            ...Se,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored shapes as new to avoid showing validation errors immediately
          };
          ie.autoId && (ye.autoId = ie.autoId), delete ye.issues, delete ye.warnings;
          const Pe = new Ci(ye, v);
          m.push(Pe);
        } catch (ye) {
          console.error(`Failed to create InputShape at index ${q}:`, ye);
        }
      }
      return m;
    }, i = function(A, v) {
      if (!Array.isArray(A)) return [];
      const m = [];
      for (let q = 0; q < A.length; q++) {
        const ie = A[q], Se = e(ie);
        try {
          const ye = {
            ...Se,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored stock as new to avoid showing validation errors immediately
          };
          ie.autoId && (ye.autoId = ie.autoId);
          const Pe = new Ii(ye, v);
          m.push(Pe);
        } catch (ye) {
          console.error(`Failed to create InputStock at index ${q}:`, ye);
        }
      }
      return m;
    }, s = function(A) {
      const v = e(A), m = ti(Un, v);
      if (m.success && m.data) {
        const q = {
          ...m.data,
          issues: [],
          warnings: []
        };
        return A?.autoId && (q.autoId = A.autoId), new en(q);
      } else
        return console.error("Failed to parse input saw:", m.errors), new en({});
    }, a = function(A, v) {
      return Array.isArray(A) ? v && v.length ? Er(A, v) : A.map((m) => new ja(m)).filter(Boolean) : [];
    }, o = function(A = {}) {
      try {
        const q = { ...ai(
          (Se) => {
            if (typeof Se != "object" || Se === null) return Se;
            const ye = { ...Se };
            for (const Pe in ye)
              ye[Pe] === null && delete ye[Pe];
            return ye;
          },
          Wn
        ).parse(A), isNew: !0 }, ie = new Ci(q, se);
        return ie.createId(re.value.length), re.value.push(ie), ie;
      } catch (v) {
        return v instanceof Oi && (console.error("Shape validation failed:", v.issues), G("part", "Invalid shape data", v.issues)), null;
      }
    }, l = function(A = {}) {
      try {
        const m = { ...En.parse(A), isNew: !0 }, q = new Ii(m, se);
        return q.createId(oe.value.length), oe.value.push(q), q;
      } catch (v) {
        return v instanceof Oi && (console.error("Stock validation failed:", v.issues), G("stock", "Invalid stock data", v.issues)), null;
      }
    }, r = function(A) {
      try {
        const v = A.toData(), m = Wn.parse(v);
        return new Ci(m, se);
      } catch (v) {
        return v instanceof Oi && (console.error("Shape clone validation failed:", v.issues), G("part", "Invalid shape data during cloning", v.issues)), null;
      }
    }, h = function(A) {
      try {
        const v = A.toData(), m = En.parse(v);
        return new Ii(m, se);
      } catch (v) {
        return v instanceof Oi && (console.error("Stock clone validation failed:", v.issues), G("stock", "Invalid stock data during cloning", v.issues)), null;
      }
    }, b = function(A, v) {
      const m = re.value.findIndex((ye) => ye.autoId === A);
      if (m === -1) return !1;
      const q = re.value[m], ie = { ...q.toData(), ...v }, Se = ti(Wn, ie);
      if (Se.success && Se.data) {
        if (q.update(Se.data), !q.isNew) {
          const ye = Object.keys(v);
          q.validate({ fields: ye, index: m });
        }
        return !0;
      } else {
        const ye = Se.errors ? Wr(Se.errors) : [];
        console.error("Shape update validation failed:", ye);
        const Pe = Se.errors?.[0];
        if (Pe) {
          const we = eo(Pe);
          new Ut({
            category: ["part"],
            message: Pe.message,
            // This is the translation key from Zod error map
            params: we,
            issues: Ce.value
          });
        } else
          G("part", "Invalid shape update");
        return !1;
      }
    }, S = function(A, v) {
      const m = re.value.findIndex((ie) => ie.autoId === A);
      if (m === -1) return !1;
      const q = re.value[m];
      return q.validate({ fields: [v], index: m }), q.issues.length === 0;
    }, p = function(A, v) {
      const m = oe.value.find((Se) => Se.autoId === A);
      if (!m) return !1;
      const q = { ...m.toData(), ...v }, ie = ti(En, q);
      return ie.success && ie.data ? (m.update(ie.data), m.isNew || V(), !0) : (console.error("Stock update validation failed:", ie.errors), G("stock", "Invalid stock update", ie.errors), !1);
    }, $ = function(A, v) {
      const m = oe.value.findIndex((ie) => ie.autoId === A);
      if (m === -1) return !1;
      const q = oe.value[m];
      return q.validate({ fields: [v], index: m }), vt(oe), q.issues.length === 0;
    }, C = function(A) {
      if (re.value.length === 1) return !1;
      const v = re.value.findIndex((m) => m.autoId === A);
      return v === -1 ? !1 : (re.value.splice(v, 1), !0);
    }, M = function(A) {
      if (oe.value.length === 1) return !1;
      const v = oe.value.findIndex((m) => m.autoId === A);
      return v === -1 ? !1 : (oe.value.splice(v, 1), !0);
    }, E = function(A) {
      J.value = !0;
      const v = [];
      try {
        re.value.forEach((m) => m.issues.length = 0);
        for (let m = 0; m < re.value.length; m++) {
          const q = re.value[m];
          if (q.isNew)
            continue;
          const ie = q.validate({
            inputStockList: oe.value,
            index: m,
            stockType: A?.stockType ?? null,
            partTrim: 0,
            useInventory: !1,
            saw: A
          });
          v.push(...ie);
        }
        re.value.some((m) => Number(m.q) > 0) || new Ut({
          category: ["part"],
          message: "errors.validation.no_parts",
          issues: v
        });
      } finally {
        J.value = !1;
      }
      return Ce.value = v, v;
    }, V = function(A) {
      J.value = !0;
      const v = [];
      try {
        oe.value.forEach((m) => m.issues.length = 0);
        for (let m = 0; m < oe.value.length; m++) {
          const ie = oe.value[m].validate({ saw: A }, m);
          v.push(...ie);
        }
        oe.value.some((m) => Number(m.q) > 0 || m.autoAdd) || new Ut({
          category: ["stock"],
          message: "errors.validation.no_stock",
          issues: v
        });
      } finally {
        J.value = !1;
      }
      return Ce.value = v, v;
    }, G = function(A, v, m) {
      new Ut({
        category: [A],
        message: v,
        issues: Ce.value
      }), m && console.log("Validation details:", m);
    }, Z = function() {
      Ce.value = [], re.value.forEach((A) => A.issues.length = 0), oe.value.forEach((A) => A.issues.length = 0);
    }, he = function(A = {}) {
      const v = [], m = [], q = A.inputShapesOverride ?? re.value;
      if (!q.length)
        return { shapeList: [], issues: [] };
      for (let ie = 0; ie < q.length; ie++) {
        const Se = q[ie];
        if (!Se.q) continue;
        Se.createId(ie), Se.applyPartTrim(A.trim, A.stockType);
        const ye = Se.toShape();
        v.push(ye), m.push(...ye.issues);
      }
      return { shapeList: v, issues: m };
    }, T = function(A) {
      if (!oe.value.length)
        return { stockList: [], issues: [] };
      const v = [], m = [];
      for (let q = 0; q < oe.value.length; q++) {
        const ie = oe.value[q];
        if (!ie.q && !ie.autoAdd) continue;
        ie.createId(q), ie.saw = A;
        const Se = ie.toStock();
        v.push(Se), m.push(...Se.issues);
      }
      return { stockList: v, issues: m };
    }, N = function(A, v = se) {
      const m = {
        saw: { success: !1, failed: !1 },
        shapes: { success: 0, failed: 0 },
        stock: { success: 0, failed: 0 },
        groups: { success: 0, failed: 0 }
      };
      if (A.saw) {
        const q = ti(Un, e(A.saw));
        if (q.success && q.data) {
          const ie = { ...q.data };
          A.saw?.autoId && (ie.autoId = A.saw.autoId), Be.value = new en(ie), m.saw.success = !0;
        } else
          console.error("Failed to parse input saw:", q.errors), m.saw.failed = !0;
      }
      if (A.shapes) {
        const q = n(A.shapes, v);
        m.shapes.success = q.length, m.shapes.failed = A.shapes.length - q.length, re.value = q;
      }
      if (A.stock) {
        const q = i(A.stock, v);
        m.stock.success = q.length, m.stock.failed = A.stock.length - q.length, oe.value = q;
      }
      if (A.groups) {
        const q = a(A.groups);
        m.groups.success = q.length, m.groups.failed = A.groups.length - q.length, Y.value = q;
      }
      return A.extrasOptions && (ce.value = { ...A.extrasOptions }), m;
    }, ee = function() {
      return {
        shapes: re.value.map((A) => A.toData()),
        stock: oe.value.map((A) => A.toData()),
        inputUserGroups: Y.value.map((A) => A.toData()),
        extrasOptions: ce.value
      };
    }, w = function() {
      re.value = [], oe.value = [], Y.value = [], Z();
    }, j = function(A) {
      const v = { ...Be.value.toData(), ...A }, m = ti(Un, v);
      return m.success && m.data ? (Be.value.update(m.data), !0) : (console.error("InputSaw update validation failed:", m.errors), G("saw", "Invalid saw update", m.errors), !1);
    }, x = function() {
      Be.value = new en({});
    }, H = function() {
      const A = Be.value.validate();
      return Ce.value = [...Ce.value.filter((v) => v.category?.[0] !== "saw"), ...A], A;
    };
    const { numberFormat: se = "decimal" } = t, re = ei("inputs/inputShapes", [], {
      serializer: {
        read: (A) => {
          if (!A) {
            const q = "GlobalStore/inputShapes", ie = ca(q);
            if (ie)
              A = ie, ua(q);
            else return [];
          }
          let v;
          try {
            v = JSON.parse(A);
          } catch (q) {
            return console.error("Failed to parse input shapes JSON:", q), [];
          }
          return n(v, se);
        },
        write: (A) => {
          const m = A.filter((ie) => !ie?.multiEdit).map((ie) => ie.toData());
          return JSON.stringify(m);
        }
      },
      listenToStorageChanges: !1
    }), oe = ei("inputs/inputStock", [], {
      serializer: {
        read: (A) => {
          if (!A) return [];
          let v;
          try {
            v = JSON.parse(A);
          } catch (q) {
            return console.error("  Failed to parse stock JSON:", q), [];
          }
          return i(v, se);
        },
        write: (A) => {
          const m = A.filter((ie) => !ie?.multiEdit).map((ie) => ie.toData());
          return JSON.stringify(m);
        }
      },
      listenToStorageChanges: !1
    }), Be = ei("inputs/inputSaw", new en({}), {
      serializer: {
        read: (A) => {
          if (!A) {
            const m = ca("saw");
            if (m)
              A = m, ua("saw");
            else return new en({});
          }
          try {
            const v = JSON.parse(A);
            return s(v);
          } catch (v) {
            return console.error("  Failed to parse saw JSON:", v), new en({});
          }
        },
        write: (A) => {
          if (!A)
            return JSON.stringify({});
          const v = A.toData();
          return JSON.stringify(v);
        }
      },
      listenToStorageChanges: !1
    }), Y = ei("inputs/inputUserGroups", [], {
      serializer: {
        read: (A) => a(A ? JSON.parse(A) : []),
        write: (A) => JSON.stringify(A.map((v) => v.toData()))
      }
    }), ce = ei("inputs/extrasOptions", {
      banding: { options: [] },
      finish: { options: [] },
      planing: { options: [] }
    }, {
      serializer: {
        read: (A) => {
          if (!A) return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          try {
            return JSON.parse(A);
          } catch {
            return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          }
        },
        write: (A) => JSON.stringify(A)
      }
    }), Ce = z([]), J = z(!1);
    re.value.length === 0 && (re.value = [new Ci({ isNew: !0 })]), oe.value.length === 0 && (oe.value = [new Ii({ isNew: !0 })]);
    const le = F(() => re.value.reduce((A, v) => {
      const m = Number(v?.q);
      return m && m > 0 && !v?.multiEdit ? A + m : A;
    }, 0)), ge = F(() => oe.value.reduce((A, v) => {
      const m = Number(v?.q);
      return m && m > 0 && !v?.multiEdit ? A + m : A;
    }, 0)), $e = F(() => re.value.reduce((A, v) => v?.multiEdit ? A : A + 1, 0)), It = F(() => oe.value.reduce((A, v) => v?.multiEdit ? A : A + 1, 0)), nt = F(() => Ce.value.length > 0), ze = () => [
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
    ], Ft = z(null), yt = z(null), rn = () => {
      Ft.value = null;
    }, Tt = Z, mt = (A = null) => {
      const v = A?.inputShapesOverride ?? re.value, m = E(A?.saw || void 0);
      if (v.length) {
        bl(v, oe.value, A?.saw || Be.value);
        const q = v.flatMap((ie) => ie.issues);
        return [...m, ...q];
      }
      return m;
    }, Et = async (A, v = "decimal") => {
      const m = A?.inputSaw, q = A?.inputShapes, ie = A?.inputStock, Se = A?.inputUserGroups, ye = N({
        saw: m,
        shapes: q,
        stock: ie,
        groups: Se
      }, v);
      return vt(re), vt(oe), await Ct(), ye;
    }, wt = (A, v = "decimal") => N({ shapes: A }, v).shapes.success > 0, cn = (A, v = "decimal") => N({ stock: A }, v).stock.success > 0, Nt = (A, v, m, q, ie) => {
      v[0]?.length > 0 && (ce.value[A] || (ce.value[A] = { options: [] }), ce.value[A].options = [...v[0]]), m && q && v.length > 0 ? Ts(A, {
        options: v,
        // Use all columns extracted from pricing
        labels: m,
        pricing: q,
        displayNames: ie
      }) : console.warn("[setExtrasOptionsFromPricing] Missing data for centralized config:", { labels: m, pricingData: q, pricingOptionsLength: v.length });
    }, st = () => {
      if (!Object.values(ce.value).some(
        (m) => m.options.length > 0
      )) return;
      const v = (m, q) => {
        const ie = {};
        for (const Se of q)
          ie[Se] = [...m];
        return ie;
      };
      return {
        banding: ce.value.banding.options.length > 0 ? {
          options: {
            sides: v(ce.value.banding.options, ["l1", "l2", "w1", "w2"])
          }
        } : void 0,
        finish: ce.value.finish.options.length > 0 ? {
          options: {
            faces: v(ce.value.finish.options, ["a", "b"])
          }
        } : void 0,
        planing: ce.value.planing.options.length > 0 ? {
          options: {
            sides: v(ce.value.planing.options, ["l1", "l2", "w1", "w2"]),
            faces: v(ce.value.planing.options, ["a", "b"])
          }
        } : void 0
      };
    }, Wt = (A) => {
      if (!oe.value.length) return "n";
      const v = A.material, m = A.t, q = oe.value.filter((Pe) => Pe.material === v && Pe.t === m);
      if (!q.length)
        return "n";
      let ie = !1, Se = !1, ye = !1;
      for (const Pe of q)
        Pe.grain === "l" ? (ie = !0, Se = !0) : Pe.grain === "w" && (ie = !0, ye = !0);
      return ie ? Se && ye ? "y" : Se ? "l" : ye ? "w" : "n" : "n";
    }, Vt = (A) => {
      for (const v of re.value)
        Ys(v, A);
      for (const v of oe.value)
        Ys(v, A);
    };
    let un = !1;
    Ke(re, (A) => {
      un || !A.length || Ct(() => {
        const v = ["banding", "finish", "planing"], m = [];
        v.forEach((q) => {
          const ie = /* @__PURE__ */ new Set();
          if (A.forEach((Se) => {
            const ye = Se.extras?.[q];
            ye && (ye.faces && Object.values(ye.faces).forEach((Pe) => {
              typeof Pe == "string" && Pe.trim() && Pe !== "Y" && ie.add(Pe);
            }), ye.sides && Object.values(ye.sides).forEach((Pe) => {
              typeof Pe == "string" && Pe.trim() && Pe !== "Y" && ie.add(Pe);
            }));
          }), ie.size > 0) {
            const Se = tn(q);
            if (Se) {
              const ye = Se.options[0];
              if (Array.isArray(ye) && (ye.length === 0 || typeof ye[0] == "string")) {
                const Pe = new Set(ye), we = Array.from(ie).filter((Te) => !Pe.has(Te));
                if (we.length > 0) {
                  const Te = [...ye, ...we];
                  Ts(q, {
                    ...Se,
                    options: [Te, ...Se.options.slice(1)]
                  });
                }
              }
            }
          }
        }), v.forEach((q) => {
          const ie = Gr(q, A);
          ie.cleanedCount > 0 && m.push(
            `${q}: ${ie.invalidOptions.join(", ")}`
          );
        }), m.length > 0 && (console.warn(
          `Some extras options no longer exist and have been reset:
` + m.join(`
`)
        ), typeof window < "u" && window.alert && setTimeout(() => {
          alert(
            `Some extras options no longer exist and have been reset:
` + m.join(`
`)
          );
        }, 500)), un = !0;
      });
    }, { immediate: !0 });
    let de = null;
    return {
      // Bundled object
      inputs: {
        inputStock: oe,
        inputShapes: re,
        inputUserGroups: Y,
        currentInputShape: Ft,
        selectedSaw: yt,
        inputSaw: Be
      },
      // State
      inputShapes: re,
      inputStock: oe,
      inputUserGroups: Y,
      inputSaw: Be,
      currentInputShape: Ft,
      selectedSaw: yt,
      validationIssues: Ce,
      isValidating: J,
      // Computed
      totalInputShapes: le,
      totalInputStock: ge,
      totalInputShapeLines: $e,
      totalInputStockLines: It,
      hasValidationIssues: nt,
      // Actions
      addInputShape: o,
      addInputStock: l,
      cloneInputShape: r,
      cloneInputStock: h,
      updateInputShape: b,
      updateInputStock: p,
      updateInputSaw: j,
      removeInputShape: C,
      removeInputStock: M,
      reset: rn,
      resetInputSaw: x,
      clear: w,
      clearIssues: Tt,
      // Validation
      validateInputShapes: mt,
      validateInputShapeField: S,
      validateInputStock: V,
      validateInputStockField: $,
      validateInputSaw: H,
      clearValidationIssues: Z,
      // Conversion
      createShapeList: he,
      createStockList: T,
      // Import/Export/Update
      importData: N,
      exportData: ee,
      updateInputs: Et,
      importInputShapes: wt,
      importInputStock: cn,
      // Additional functions
      getShapeGrainSummary: Wt,
      updateNumberFormat: Vt,
      getSpecialShapeFields: ze,
      // Extras Options Management
      extrasOptions: ce,
      setExtrasOptionsFromPricing: Nt,
      getCentralizedOptions: st,
      // Show part
      showPart: (A) => {
        de && de(A);
      },
      registerShowPart: (A) => {
        de = A;
      }
    };
  } catch (e) {
    throw console.error("[createInputs] Fatal error during initialization:", e), e;
  }
}
let Ss = null;
function to(t = { numberFormat: "decimal" }) {
  try {
    return Ss || (Ss = zr(t)), Ss;
  } catch (e) {
    throw console.error("[useInputs] FATAL ERROR in useInputs:", e), console.error("[useInputs] Error stack:", e?.stack), e;
  }
}
class pa {
  /**
   * Migrate a single shape from old structure to new structure
   */
  static migrateShape(e) {
    this.migrateBanding(e), this.migrateFinish(e), this.migrateStorageFormat(e);
  }
  /**
   * Migrate multiple shapes at once
   */
  static migrateShapes(e) {
    e.forEach((n) => {
      const i = Object.keys(n);
      this.migrateShape(n);
      const s = Object.keys(n);
      i.length, s.length;
    });
  }
  /**
   * Migrate old side format (x1/x2/y1/y2) to new format (l1/l2/w1/w2)
   */
  static migrateSideNames(e) {
    const n = {};
    for (const [i, s] of Object.entries(e)) {
      let a = i;
      i === "x1" ? a = "l1" : i === "x2" ? a = "l2" : i === "y1" ? a = "w1" : i === "y2" && (a = "w2"), n[a] = s;
    }
    return n;
  }
  /**
   * Migrate banding from flat to nested structure
   * Also handles migration from old side names (x1/x2/y1/y2) to new names (l1/l2/w1/w2)
   */
  static migrateBanding(e) {
    const n = e.banding, i = "_banding" in e ? e._banding : void 0, s = qe(e) ? e.bandingOptions : void 0;
    if (!n && !i && !s) return !1;
    if (n && n instanceof Jn) {
      const b = n.sides;
      if (b && typeof b == "object" && ("x1" in b || "x2" in b || "y1" in b || "y2" in b)) {
        const p = this.migrateSideNames(b);
        return n.sides = p, !0;
      }
      return !1;
    }
    const a = {}, o = {}, l = { sides: {} };
    if (n && typeof n == "object") {
      const b = this.migrateSideNames(n);
      for (const [S, p] of Object.entries(b))
        Yn.includes(S) && (a[S] = p);
    }
    if (i && typeof i == "object") {
      const b = this.migrateSideNames(i);
      for (const [S, p] of Object.entries(b))
        Yn.includes(S) && (o[S] = p);
    }
    if (s && typeof s == "object") {
      s.all && (l.sides.all = s.all);
      for (const [b, S] of Object.entries(s))
        b !== "all" && Yn.includes(b) && S && (l.sides[b] = S);
    }
    const r = new Jn(Object.keys(a).length > 0 ? { sides: a } : {}), h = Object.keys(o).length > 0 ? new Jn({ sides: o }) : void 0;
    return "extras" in e && e.extras ? e.extras.banding = r : qe(e) && (e.banding = r), h && "_banding" in e && (e._banding = h), qe(e) && s && (e.bandingOptions = l), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(e) {
    const n = e.finish, i = "_finish" in e ? e._finish : void 0, s = qe(e) ? e.finishOptions : void 0;
    if (!n && !i && !s || n && n instanceof Xn)
      return !1;
    const a = {}, o = {}, l = { faces: {} };
    if (n && typeof n == "object")
      for (const [b, S] of Object.entries(n))
        Qn.includes(b) && (a[b] = S);
    if (i && typeof i == "object")
      for (const [b, S] of Object.entries(i))
        Qn.includes(b) && (o[b] = S);
    if (s && typeof s == "object") {
      s.all && (l.faces.all = s.all);
      for (const [b, S] of Object.entries(s))
        b !== "all" && Qn.includes(b) && S && (l.faces[b] = S);
    }
    const r = new Xn(Object.keys(a).length > 0 ? { faces: a } : {}), h = Object.keys(o).length > 0 ? new Xn({ faces: o }) : void 0;
    return "extras" in e && e.extras ? e.extras.finish = r : qe(e) && (e.finish = r), h && "_finish" in e && (e._finish = h), qe(e) && s && (e.finishOptions = l), !0;
  }
  /**
   * Migrate storage format: Convert boolean true to option name strings in multi-column configs
   * This handles legacy data where single-option checkboxes stored boolean true instead of the option name
   */
  static migrateStorageFormat(e) {
    let n = !1;
    const i = "extras" in e && e.extras ? e.extras : e;
    if (i.banding) {
      const s = Xs("banding");
      if (s && s.labels && s.labels.length > 1)
        for (const a of Yn) {
          const o = `side.${a}`, l = Gi(e, "banding", o);
          if (l && typeof l == "object" && !Array.isArray(l)) {
            let r = !1;
            const h = { ...l };
            for (const b of s.labels)
              if (h[b] === !0) {
                const p = s.labels.indexOf(b);
                if (p !== -1 && s.options[p] && Array.isArray(s.options[p])) {
                  const $ = s.options[p];
                  $.length === 1 && (h[b] = $[0], r = !0);
                }
              }
            r && (Qs(e, "banding", o, h), n = !0);
          }
        }
    }
    if (i.finish) {
      const s = Xs("finish");
      if (s && s.labels && s.labels.length > 1)
        for (const a of Qn) {
          const o = `face.${a}`, l = Gi(e, "finish", o);
          if (l && typeof l == "object" && !Array.isArray(l)) {
            let r = !1;
            const h = { ...l };
            for (const b of s.labels)
              if (h[b] === !0) {
                const p = s.labels.indexOf(b);
                if (p !== -1 && s.options[p] && Array.isArray(s.options[p])) {
                  const $ = s.options[p];
                  $.length === 1 && (h[b] = $[0], r = !0);
                }
              }
            r && (Qs(e, "finish", o, h), n = !0);
          }
        }
    }
    return n;
  }
  /**
   * Check if shape needs migration (has old structure)
   */
  static needsMigration(e) {
    const n = e.banding;
    if (n && typeof n == "object" && !(n instanceof Jn) && !("sides" in n) && !("faces" in n))
      return !0;
    if ("_banding" in e) {
      const s = e._banding;
      if (s && typeof s == "object" && !(s instanceof Jn) && !("sides" in s) && !("faces" in s))
        return !0;
    }
    const i = e.finish;
    if (i && typeof i == "object" && !(i instanceof Xn) && !("sides" in i) && !("faces" in i))
      return !0;
    if ("_finish" in e) {
      const s = e._finish;
      if (s && typeof s == "object" && !(s instanceof Xn) && !("sides" in s) && !("faces" in s))
        return !0;
    }
    return !1;
  }
  /**
   * Validate that migrated data is in correct new format
   */
  static validateMigratedShape(e) {
    try {
      const n = e.banding;
      if (n) {
        if ("faces" in n && n.faces)
          throw new Error("Banding should not have faces property");
        if ("sides" in n && n.sides) {
          const s = Object.keys(n.sides).filter((a) => !Yn.includes(a));
          if (s.length > 0)
            throw new Error(`Invalid side keys in banding: ${s.join(", ")}`);
        }
      }
      const i = e.finish;
      if (i) {
        if ("sides" in i && i.sides)
          throw new Error("Finish should not have sides property");
        if ("faces" in i && i.faces) {
          const s = Object.keys(i.faces).filter((a) => !Qn.includes(a));
          if (s.length > 0)
            throw new Error(`Invalid face keys in finish: ${s.join(", ")}`);
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
  static getMigrationSummary(e) {
    const n = {
      totalShapes: e.length,
      shapesNeedingMigration: 0,
      shapesWithBanding: 0,
      shapesWithFinish: 0,
      shapesAlreadyMigrated: 0
    };
    return e.forEach((i) => {
      this.needsMigration(i) ? n.shapesNeedingMigration++ : (i.banding || i.finish) && n.shapesAlreadyMigrated++, i.banding && n.shapesWithBanding++, i.finish && n.shapesWithFinish++;
    }), n;
  }
  /**
   * Create backup of shape before migration
   */
  static createBackup(e) {
    const n = {
      banding: e.banding ? JSON.parse(JSON.stringify(e.banding)) : void 0,
      finish: e.finish ? JSON.parse(JSON.stringify(e.finish)) : void 0
    };
    return "_banding" in e && e._banding && (n._banding = JSON.parse(JSON.stringify(e._banding))), "_finish" in e && e._finish && (n._finish = JSON.parse(JSON.stringify(e._finish))), qe(e) && (e.bandingOptions && (n.bandingOptions = JSON.parse(JSON.stringify(e.bandingOptions))), e.finishOptions && (n.finishOptions = JSON.parse(JSON.stringify(e.finishOptions)))), n;
  }
  /**
   * Restore shape from backup
   */
  static restoreFromBackup(e, n) {
    "extras" in e && e.extras ? (n.banding && (e.extras.banding = n.banding), n.finish && (e.extras.finish = n.finish)) : qe(e) && (n.banding && (e.banding = n.banding), n.finish && (e.finish = n.finish)), n._banding && "_banding" in e && (e._banding = n._banding), n._finish && "_finish" in e && (e._finish = n._finish), qe(e) && (n.bandingOptions && (e.bandingOptions = n.bandingOptions), n.finishOptions && (e.finishOptions = n.finishOptions));
  }
}
const Hr = {
  y1: "l1",
  y2: "l2",
  x1: "w1",
  x2: "w2"
}, Kr = {
  l1: "y1",
  l2: "y2",
  w1: "x1",
  w2: "x2"
};
function Es(t = !1) {
  return {
    l1: t,
    l2: t,
    w1: t,
    w2: t
  };
}
function Zr(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t
  };
}
function _i(t = !1) {
  return {
    a: t,
    b: t
  };
}
function Jr(t = !1) {
  return {
    sides: Es(t),
    faces: _i(t)
  };
}
function Yr(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t,
    a: t,
    b: t
  };
}
function Xr(t) {
  const e = {};
  for (const [n, i] of Object.entries(Hr))
    n in t && (e[i] = t[n]);
  return e;
}
function Qr(t) {
  const e = {};
  for (const [n, i] of Object.entries(Kr))
    n in t && (e[i] = t[n]);
  return e;
}
function Pt(t) {
  return t === 1 ? !0 : t === 0 ? !1 : t;
}
function nn(t) {
  if (!t) return t;
  const e = "x1" in t || "x2" in t || "y1" in t || "y2" in t, n = "l1" in t || "l2" in t || "w1" in t || "w2" in t;
  if (e && n && console.warn("Mixed side format detected in data - using old format (x/y) and ignoring new format (l/w)", t), e) {
    const s = Xr(t), a = {};
    return "l1" in s && (a.l1 = Pt(s.l1)), "l2" in s && (a.l2 = Pt(s.l2)), "w1" in s && (a.w1 = Pt(s.w1)), "w2" in s && (a.w2 = Pt(s.w2)), a;
  }
  const i = {};
  return "l1" in t && (i.l1 = Pt(t.l1)), "l2" in t && (i.l2 = Pt(t.l2)), "w1" in t && (i.w1 = Pt(t.w1)), "w2" in t && (i.w2 = Pt(t.w2)), Object.keys(i).length > 0 ? i : t;
}
function ec(t) {
  return !t || typeof t != "string" ? t : {
    "side.x1": "side.w1",
    "side.x2": "side.w2",
    "side.y1": "side.l1",
    "side.y2": "side.l2"
  }[t] || t;
}
function Rn(t) {
  return !t || !Array.isArray(t) ? t : t.map(ec);
}
function tc(t) {
  const e = {};
  if (t.banding && typeof t.banding == "object")
    for (const [n, i] of Object.entries(t.banding))
      i === !0 || i === !1 ? e[n] = i : typeof i == "number" ? e[n] = Pt(i) : typeof i == "string" && i.length > 0 && (e[n] = i);
  if (t.bandingType && typeof t.bandingType == "object")
    for (const [n, i] of Object.entries(t.bandingType))
      if (t.banding) {
        const s = e[n];
        (s === !0 || typeof s == "string" && s.length > 0) && (typeof i == "string" && i.length > 0 ? e[n] = i : typeof i == "number" && i !== 0 && (e[n] = String(i)));
      } else
        typeof i == "string" && i.length > 0 ? e[n] = i : typeof i == "number" && i !== 0 && (e[n] = String(i));
  return Object.keys(e).length > 0 ? e : void 0;
}
function Ns(t) {
  return t && Qr(t);
}
function nc(t) {
  t?.type && delete t.type, ic.call(this, t), sc.call(this, t), ac.call(this, t), t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => Ms(e));
}
function ic(t) {
  if (!t?.banding || typeof t.banding != "object") return;
  const e = Object.keys(t.banding);
  if (!e.length) return;
  const n = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((i) => n.includes(i)) || (t.banding = {
    labels: Object.keys(t.banding),
    pricing: t.bandingPricing || {}
  }, t.bandingPricing && delete t.bandingPricing);
}
function sc(t) {
  if (!t?.finish || typeof t.finish != "object") return;
  const e = Object.keys(t.finish);
  if (!e.length) return;
  const n = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((i) => n.includes(i)) || (t.finish = {
    labels: Object.keys(t.finish),
    pricing: t.finishPricing || {}
  }, t.finishPricing && delete t.finishPricing);
}
function ac(t) {
  if (!t?.planing || typeof t.planing != "object") return;
  const e = Object.keys(t.planing);
  if (!e.length) return;
  const n = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((i) => n.includes(i)) || (t.planing = {
    labels: Object.keys(t.planing),
    pricing: t.planingPricing || {}
  }, t.planingPricing && delete t.planingPricing);
}
function Ms(t) {
  !t || typeof t != "object" || (pa.needsMigration(t) && pa.migrateShape(t), t._banding && delete t._banding, t._finish && delete t._finish, t._bandingType && delete t._bandingType);
}
function no(t) {
  if (t?.enable) return;
  t.enable = {};
  const e = {
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
  for (const n of Object.keys(e))
    if (n in t) {
      const i = e[n];
      t.enable[i.new] = i.map === "reverse" ? !t[n] : t[n], delete t[n];
    }
}
function vh(t) {
  if (!(!t || typeof t != "object")) {
    if (nc(t), t.parts && Array.isArray(t.parts) && (t.parts = t.parts.map((e) => (e.extras?.banding?.sides && (e.extras.banding.sides = nn(e.extras.banding.sides)), e.extras?.finish?.sides && (e.extras.finish.sides = nn(e.extras.finish.sides)), e.extras?.planing?.sides && (e.extras.planing.sides = nn(e.extras.planing.sides)), e))), t.stock && Array.isArray(t.stock) && (t.stock = t.stock.map((e) => e?.trim ? {
      ...e,
      trim: nn(e.trim)
    } : e)), t.options) {
      if (no(t.options), t.options.bandingLocations && (t.options.bandingLocations = Rn(t.options.bandingLocations)), t.options.finishLocations && (t.options.finishLocations = Rn(t.options.finishLocations)), t.options.planingLocations && (t.options.planingLocations = Rn(t.options.planingLocations)), t.options.extrasLocationGroups)
        for (const e of ["banding", "finish", "planing"]) {
          const n = t.options.extrasLocationGroups[e];
          n && Array.isArray(n) && n.forEach((i) => {
            i.locations && (i.locations = Rn(i.locations));
          });
        }
      if (!t.saw) {
        const e = {}, n = ["bladeWidth", "cutType", "cutPreference", "guillotineOptions", "stackHeight", "stockType"];
        for (const i of n)
          i in t.options && (e[i] = t.options[i], delete t.options[i]);
        Object.keys(e).length > 0 && (console.log("[migrateLegacyData] Migrating saw properties from options to saw:", e), t.saw = e);
      }
    }
    for (const e of ["banding", "finish", "planing"])
      if (t[e]) {
        const n = t[e];
        n.locations && Array.isArray(n.locations) && (n.locations = Rn(n.locations)), n.groups && Array.isArray(n.groups) && n.groups.forEach((i) => {
          i.locations && (i.locations = Rn(i.locations));
        });
      }
    if (t.saw?.cutPreference && ["efficiency", "length", "width", "beam"].includes(t.saw.cutPreference)) {
      const i = {
        efficiency: { cutType: "guillotine", cutPreference: null },
        length: { cutType: "guillotine", cutPreference: "l" },
        width: { cutType: "guillotine", cutPreference: "w" },
        beam: { cutType: "beam", cutPreference: "l" }
      }[t.saw.cutPreference];
      i && (t.saw.cutType = i.cutType, t.saw.cutPreference = i.cutPreference);
    }
    t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => Ms(e)), (t.l !== void 0 || t.w !== void 0 || t.banding !== void 0) && Ms(t);
  }
}
function oc(t) {
  if (!t || typeof t != "object")
    return t;
  const e = { ...t };
  return e.saw && (e.saw = lc(e.saw)), Array.isArray(e.stock) && (e.stock = e.stock.map(rc)), Array.isArray(e.parts) && (e.parts = e.parts.map(cc)), e;
}
function lc(t) {
  const e = { ...t };
  if (e.guillotineOptions && (e.guillotineOptions = { ...e.guillotineOptions }, e.guillotineOptions.strategy === "stock" && (e.guillotineOptions.strategy = "efficiency")), e.efficiencyOptions) {
    e.efficiencyOptions = { ...e.efficiencyOptions };
    const n = e.efficiencyOptions.primaryCompression;
    n === "x" ? e.efficiencyOptions.primaryCompression = "l" : n === "y" && (e.efficiencyOptions.primaryCompression = "w");
  }
  return e.bladeWidth !== void 0 && (e.bladeWidth = Number(e.bladeWidth)), e.stackHeight !== void 0 && (e.stackHeight = Number(e.stackHeight)), e.cutPreference === "flex" ? e.cutPreference = "l" : e.cutPreference === "" && (e.cutPreference = void 0), (e.cutPreference === null || e.cutPreference === void 0) && (e.cutType === "guillotine" || e.cutType === "beam") && (e.cutPreference = "l"), e;
}
function rc(t) {
  const e = { ...t };
  return delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.trim && (e.trim = nn(e.trim)), e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e.cost !== void 0 && (e.cost = Number(e.cost)), e;
}
function cc(t) {
  const e = { ...t };
  if (delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.banding || e.bandingType) {
    const n = tc(e);
    n && Object.keys(n).length > 0 && (e.extras || (e.extras = {}), e.extras.banding || (e.extras.banding = {}), e.extras.banding.sides = nn(n)), delete e.banding, delete e.bandingType;
  }
  if (e.extras?.banding?.sides && (e.extras = { ...e.extras }, e.extras.banding = { ...e.extras.banding }, e.extras.banding.sides = nn(e.extras.banding.sides)), e.finish && !e.extras?.finish) {
    if (e.extras || (e.extras = {}), e.extras.finish || (e.extras.finish = {}), e.finish.a !== void 0 || e.finish.b !== void 0) {
      const n = {};
      "a" in e.finish && (n.a = Pt(e.finish.a)), "b" in e.finish && (n.b = Pt(e.finish.b)), e.extras.finish.faces = n;
    } else
      e.extras.finish.sides = nn(e.finish);
    delete e.finish;
  }
  if (e.extras?.finish?.sides && (e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish }, e.extras.finish.sides = nn(e.extras.finish.sides)), e.extras?.finish?.faces) {
    e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish };
    const n = e.extras.finish.faces;
    "a" in n && (n.a = Pt(n.a)), "b" in n && (n.b = Pt(n.b));
  }
  return e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e;
}
function $t(t) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t)) return t.map($t);
  const e = {};
  for (const [n, i] of Object.entries(t))
    n === "__entityType" || n === "autoId" || (e[n] = $t(i));
  return e;
}
function Ui(t) {
  if (!t || typeof t != "object") return null;
  if (Array.isArray(t)) return t.map(Ui);
  const e = {};
  for (const [n, i] of Object.entries(t))
    n === "__entityType" || n === "autoId" || n === "enabled" || n === "type" || n === "issues" || n === "warnings" || (e[n] = i && typeof i == "object" ? Ui(i) : i);
  return Object.keys(e).length > 0 ? e : null;
}
function io(t) {
  if (!t) return null;
  const {
    enabled: e,
    __entityType: n,
    autoId: i,
    issues: s,
    warnings: a,
    ...o
  } = t;
  return $t(o);
}
function uc(t) {
  return t ? typeof t == "string" ? t : t.id ? t.id : t.autoId ? t.autoId : "" : "";
}
function dc(t) {
  return t.rot !== void 0 ? t.rot ? 1 : 0 : t.rotated !== void 0 ? t.rotated ? 1 : 0 : t.isRotated !== void 0 ? t.isRotated ? 1 : 0 : t.w > t.l ? 1 : 0;
}
ft({
  // Job metadata
  jobId: Cn().describe("Job identifier"),
  // Input configuration (preserved)
  saw: Un.describe("Saw configuration used"),
  // Result data (internal format - l1/l2/w1/w2)
  // Using actual schemas to strip internal-only fields
  stock: at(xl).describe("Stock items"),
  parts: at(ea).describe("Parts with coordinates and properties"),
  cuts: at(kl).optional().describe("Cut instructions"),
  offcuts: at(Sl).optional().describe("Remaining offcut pieces"),
  unusableParts: at(ea).optional().describe("Parts that could not be placed"),
  // Complete metadata (ALL internal analysis fields)
  metadata: wl.describe("Complete analysis and metrics")
});
ft({
  saw: Un.describe("Saw configuration"),
  stock: at(En).describe("Stock items"),
  parts: at(Wn).describe("Parts to cut"),
  groups: at(Pl).optional().describe("User-defined part groups with XY positions"),
  webhook: Fe().url().optional().describe("Webhook URL for async result delivery")
});
ft({
  error: Fe().describe("Error message"),
  details: oa().optional().describe("Detailed error information (Zod validation errors, etc.)"),
  version: hr("V3").describe("API version"),
  help: Fe().optional().describe("Helpful migration guidance"),
  example: oa().optional().describe("Example of correct format"),
  docs: Fe().url().optional().describe("Link to V3 documentation")
});
function fc(t) {
  if (!t) return null;
  const {
    fitsAll: e,
    fitsAny: n,
    largestShape: i,
    smallestShape: s,
    ...a
  } = t;
  return $t(a);
}
function pc(t) {
  return t ? {
    id: t.id,
    name: t.name,
    l: t.l,
    w: t.w,
    t: t.t,
    material: t.material,
    grain: t.grain ?? null,
    type: t.type ?? "sheet",
    used: t.used ?? !1,
    trim: $t(t.trim),
    cost: t.cost ?? 0,
    notes: t.notes ?? "",
    code: t.code,
    analysis: fc(t.analysis),
    stack: t.stack?.number ?? 1,
    customData: $t(t.customData)
  } : null;
}
function hc(t, e) {
  if (!t) return null;
  let n = null;
  const i = uc(t.stock);
  if (i && e) {
    const a = e.get(i);
    a && (n = { ...a });
  } else i && (n = { id: i });
  const s = {
    id: t.id,
    name: t.name,
    l: t.l,
    w: t.w,
    t: t.t,
    material: t.material ?? "",
    x: t.x,
    y: t.y,
    rot: dc(t),
    added: t.added ?? !1,
    notes: t.notes ?? "",
    code: t.code,
    stock: n,
    trim: $t(t.trim),
    extras: Ui(t.extras),
    customData: $t(t.customData)
  };
  return t.machining && (s.machining = io(t.machining)), s;
}
function gc(t) {
  if (!t) return null;
  const e = {
    id: t.id,
    name: t.name,
    l: t.l,
    w: t.w,
    t: t.t,
    material: t.material ?? "",
    notes: t.notes ?? "",
    trim: $t(t.trim),
    extras: Ui(t.extras),
    customData: $t(t.customData)
  };
  return t.machining && (e.machining = io(t.machining)), t.issues && Array.isArray(t.issues) && t.issues.length > 0 ? e.issues = t.issues.map((n) => ({
    message: dr(n.message) || n.message,
    type: n.type,
    category: n.category,
    field: n.field
  })) : e.issues = [], e;
}
function mc(t) {
  return t ? {
    x1: t.x1,
    x2: t.x2,
    y1: t.y1,
    y2: t.y2,
    dimension: t.dimension,
    position: t.position,
    isTrim: t.isTrim ?? !1,
    order: t.order ?? null,
    stock: t.stock ? { id: t.stock.id || t.stock.autoId } : null
  } : null;
}
function vc(t) {
  return t ? {
    id: t.id,
    l: t.l,
    w: t.w,
    t: t.t,
    x: t.x,
    y: t.y,
    q: t.q ?? 1,
    material: t.material,
    grain: t.grain ?? null,
    stock: t.stock ? { id: t.stock.id || t.stock.autoId } : null
  } : null;
}
function bc(t) {
  const e = t.stockList || t.stock || [], n = /* @__PURE__ */ new Map();
  for (const h of e) {
    const b = { id: h.id || "" };
    h.code && (b.code = h.code), h.id && n.set(h.id, b), h.autoId && h.autoId !== h.id && n.set(h.autoId, b);
  }
  const i = e.map(pc), s = (t.shapeList || t.parts || []).map((h) => hc(h, n)), a = (t.unusableShapes || []).map(gc), o = (t.cutList || t.cuts || []).map(mc), l = (t.offcuts || []).map(vc);
  return {
    jobId: t.jobId,
    saw: $t(t.saw),
    stock: i,
    parts: s,
    cuts: o,
    offcuts: l,
    unusableParts: a,
    metadata: $t(t.metadata)
  };
}
let Fi = null;
function yc() {
  const t = z(null), e = z(null), n = z(null), i = qn([]), s = qn([]), a = qn([]), o = qn([]), l = z([]), r = z(null), h = qn([]), b = z(null), S = z(null), p = z({});
  return {
    // All state
    jobId: t,
    saw: e,
    activeStockAutoId: n,
    shapeList: i,
    stockList: s,
    cutList: a,
    segmentList: o,
    offcuts: l,
    metadata: r,
    unusableShapes: h,
    currentCutIndex: b,
    activeShape: S,
    cuttingPlans: p,
    r: {
      saw: e,
      activeStockAutoId: n,
      jobId: t,
      shapeList: i,
      stockList: s,
      cutList: a,
      segmentList: o,
      offcuts: l,
      unusableShapes: h,
      metadata: r,
      currentCutIndex: b,
      cuttingPlans: p
    }
  };
}
function zi() {
  if (Fi) return Fi;
  const t = yc(), e = F(() => t.activeStockAutoId.value ? re(t.activeStockAutoId.value) : []), n = F(() => !t.activeStockAutoId.value || !t.stockList.value?.length ? null : se(t.activeStockAutoId.value)), i = F(() => !n.value || !t.cutList.value?.length ? [] : Be(n.value.autoId)), s = F(() => !n.value || !t.segmentList.value?.length ? [] : oe(t.activeStockAutoId.value)), a = F(() => t.stockList.value?.length ? Y(t.stockList.value) : []), o = F(() => t.shapeList.value.filter((J) => J.added)), l = F(() => t.shapeList.value?.length ? t.shapeList.value.filter((J) => !J.added) : []), r = F(() => t.shapeList.value?.length ? Al(t.shapeList.value) : []), h = F(() => t.shapeList.value?.length ? t.shapeList.value.filter((J) => !J.duplicate) : []), b = F(() => h.value.filter((J) => J.added)), S = F(() => t.stockList.value?.length ? t.stockList.value.filter((J) => J.used && !J.duplicate) : []), p = F(() => S.value.filter((J) => J.used)), $ = F(() => t.cutList.value?.length ? i.value.reduce((J, le) => J + le.area, 0) : 0), C = F(() => !t.stockList.value?.length || !n.value ? 0 : n.value ? n.value.area : 0), M = F(() => !t.shapeList.value?.length || !e.value ? 0 : e.value ? e.value.reduce((J, le) => J + le.area, 0) : 0), E = F(() => !t.cutList.value?.length || !n.value ? null : n.value.cutType), V = F(() => t.stockList.value?.length ? t.stockList.value.filter((le) => le.used && !le.isStacked) : []), G = F(() => t.stockList.value?.length ? Il(n.value, t.stockList.value) : 0), Z = F(() => {
    if (!t.stockList.value?.length) return 0;
    let J = C.value ? ($.value + M.value) / C.value : null;
    return J > 1 && (J = 1), J;
  }), he = F(() => t.activeStockAutoId.value && t.cuttingPlans.value?.[t.activeStockAutoId.value] || null), T = () => {
    t.saw.value = null, t.shapeList.value.length = 0, t.stockList.value.length = 0, t.cutList.value.length = 0, t.segmentList.value.length = 0, t.offcuts.value.length = 0, t.unusableShapes.value.length = 0, t.currentCutIndex.value = null;
  }, N = () => {
    t.saw.value = null, t.activeStockAutoId.value = null, t.activeShape.value = null, t.metadata.value = null, t.shapeList.value = [], t.stockList.value = [], t.cutList.value = [], t.segmentList.value = [], t.offcuts.value = [], t.currentCutIndex.value = null, t.unusableShapes.value = [], t.cuttingPlans.value = {};
  }, ee = (J, le) => {
    J in this && this[J]?.sort(Bi[le]);
  }, w = (J) => {
    vt(J);
  }, j = () => {
    vt(t.shapeList);
  }, x = () => {
    vt(t.stockList);
  }, H = (J) => {
    if (!J?.shapeList?.some((le) => le.added)) {
      N();
      return;
    }
    t.metadata.value = J.metadata, t.unusableShapes.value = J.unusableShapes || [];
    try {
      J?.saw && (t.saw.value = new Wa(J.saw));
      const le = Cl(J, {
        preventAutoRotation: !0
      });
      t.stockList.value = le.stockList, t.shapeList.value = le.shapeList, t.cutList.value = le.cutList, t.segmentList.value = le.segmentList, t.offcuts.value = le.offcuts, t.cuttingPlans.value = J.cuttingPlans || {}, ["saw", "stockList", "shapeList", "cutList", "segmentList"].forEach(($e) => vt(t[$e])), t.activeStockAutoId.value = Y(t.stockList.value)?.[0]?.autoId || null;
    } catch (le) {
      console.error("Error updating from result", le);
    }
  }, se = (J) => t.stockList.value?.length ? t.stockList.value.find((le) => le.autoId === J) : null, re = (J) => t.shapeList.value?.length ? t.shapeList.value.filter((le) => le.added && le?.stock?.autoId === J) : [], oe = (J) => t.segmentList.value?.length ? t.segmentList.value.filter((ge) => ge?.stock?.autoId === J) : [], Be = (J) => {
    const le = t?.cutList?.value;
    return !le && !le.length ? [] : le.filter((ge) => ge?.stock?.autoId === J).sort((ge, $e) => ge?.guillotineState?.order - $e?.guillotineState?.order);
  }, Y = (J) => J?.length ? J.filter((le) => le.used === !0) : [], ce = (J) => {
    t.activeStockAutoId.value !== J && (t.activeShape.value = null, t.activeStockAutoId.value = J);
  }, Ce = (J) => J.id.endsWith(".0") ? J.autoId : t.shapeList.value.find((ge) => ge.parentId === J.parentId && ge.id.endsWith(".0"))?.autoId || J.autoId;
  return Fi = {
    // all result items for convenience
    r: t.r,
    // state
    activeStockAutoId: t.activeStockAutoId,
    saw: t.saw,
    shapeList: t.shapeList,
    stockList: t.stockList,
    cutList: t.cutList,
    segmentList: t.segmentList,
    offcuts: t.offcuts,
    unusableShapes: t.unusableShapes,
    currentCutIndex: t.currentCutIndex,
    activeShape: t.activeShape,
    cuttingPlans: t.cuttingPlans,
    // computed
    addedShapes: o,
    activeShapes: e,
    unplacedShapes: l,
    uniqueShapes: h,
    uniqueAddedShapes: b,
    unplacedShapeTally: r,
    uniqueStock: S,
    uniqueUsedStock: p,
    activeStock: n,
    activeCuts: i,
    activeCutsArea: $,
    activeCutType: E,
    usedStock: a,
    stackedStock: V,
    activeStockArea: C,
    activeShapeArea: M,
    activeStockStackCount: G,
    activeTotalArea: Z,
    activeSegments: s,
    cuttingPlan: he,
    // methods
    reset: T,
    clear: N,
    sortItems: ee,
    update: w,
    updateShapes: j,
    updateStock: x,
    updateFromResult: H,
    getStock: se,
    getShapes: re,
    getSegments: oe,
    getCuts: Be,
    setActiveStockAutoId: ce,
    getInputAutoId: Ce
  }, Fi;
}
function wc(t) {
  const e = t.x, n = t.x + t.l, i = _t().domain([e, n]).range([this.scales.xPositionScale(e), this.scales.xPositionScale(n)]), s = t.y, a = t.y + t.w, o = _t().domain([s, a]).range([this.scales.yPositionScale(s), this.scales.yPositionScale(a)]), l = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).call($s(i).tickValues(i.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).attr("class", "axis shape x").call($s(i).tickValues(i.domain()).tickSize(4).tickFormat(this.formatNumber)), t?.stock?.saw?.stockType !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - l}, 0)`).call(Fs(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - l}, 0)`).attr("class", "axis shape y").call(Fs(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Sc() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((e) => {
    e.transition().duration(0).call(kr(this.scales.xScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dy", -5);
  });
  const t = this.requiresStretch(this.props.stock.value);
  (!t || t && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((e) => {
    e.transition().duration(0).call(xr(this.scales.yAxisScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dx", 5);
  });
}
function so(t, e, n) {
  !n || !t?.length || t.forEach((i, s) => {
    const [a, o] = i;
    n === "x" ? kc.call(this, a, o, e[s]) : xc.call(this, a, o, e[s]);
  });
}
function kc(t, e, n) {
  const i = _t().domain([t, e]).range([
    this.scales.xPositionScale(t),
    this.scales.xPositionScale(e)
  ]), s = ao(i.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call($s(i).tickValues([s]).tickSize(4).tickFormat(() => this.formatNumber(n)));
  a.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, l, r) => r[l]?.getBBox()?.height + 10), this.axes.cutMeasurementXAxes.push(a);
}
function xc(t, e, n) {
  const i = _t().domain([t, e]).range([
    this.scales.yPositionScale(t),
    this.scales.yPositionScale(e)
  ]), s = ao(i.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(Fs(i).tickValues([s]).tickSize(4).tickFormat(() => this.formatNumber(n)));
  Pc(a), this.axes.cutMeasurementYAxes.push(a);
}
function ao(t) {
  return (t[1] - t[0]) / 2 + t[0];
}
function Pc(t) {
  t.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (e, n, i) => i[n]?.getBBox()?.height + 10).attr("dx", (e, n, i) => i[n]?.getBBox()?.width / 4).attr("transform", (e, n, i) => "rotate(90) translate(" + i[n]?.getBBox()?.width / 4 + ")");
}
function ri() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Cc() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function Hi() {
  this.axes.cutMeasurementXAxes?.length && (this.axes.cutMeasurementXAxes.forEach((t) => t.remove()), this.axes.cutMeasurementXAxes.length = 0), this.axes.cutMeasurementYAxes?.length && (this.axes.cutMeasurementYAxes.forEach((t) => t.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function Rs(t) {
  return t.autoId;
}
function Ic(t, e) {
  const n = /* @__PURE__ */ new Set();
  function i(s) {
    if (!(!s || n.has(s.autoId))) {
      if (n.add(s.autoId), s.autoId === e)
        return s;
      if (s.children && Array.isArray(s.children)) {
        for (const a of s.children)
          if (a && a.autoId !== s.autoId) {
            const o = i(a);
            if (o) return o;
          }
      }
    }
  }
  return i(t);
}
function ks({ parent: t, near: e, far: n, offcuts: i = [] }) {
  if (!this.props.containerWidth)
    return !1;
  const s = [t, e, n, ...i].filter((a) => a);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(s, Rs).join(
    (a) => a.append("rect").attr("class", "segment").call((o) => ha.call(this, o)),
    (a) => a.call((o) => ha.call(this, o)),
    (a) => a.remove()
  ), this.state.env === "development" && Ac.call(this, s), !this.settings.app && this.state.env === "development" && Oc.call(this);
}
function ha(t) {
  return t.classed("offcut", (e) => e.offcut).classed("near", (e) => e.type === "near").classed("far", (e) => e.type === "far").classed("parent", (e, n) => e.id !== "root" && n === 0).attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e));
}
function Ac(t) {
  this.selections.segmentGroup.selectAll("text").data(t, Rs).join(
    (e) => e.append("text").attr("class", "segment-text").call((n) => ga.call(this, n)),
    (e) => e.call((n) => ga.call(this, n)),
    (e) => e.remove()
  );
}
function ga(t) {
  return t.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function Oc() {
  this.selections.segmentRectangles.on("mousedown", function(t, e) {
    console.log("segment", `[${e?.parentId || "-"}]->[${e.id}] {P${e.phase}} ${e.l}x${e.w} ${e.cutDirection} ${e.hasHeadCut ? "HEAD" : "NORM"}`), console.log(e);
  });
}
function oo(t) {
  const e = t?.guillotineState?.parentSegmentID;
  if (!this.props.segments?.value?.length)
    return !1;
  let n;
  if (e) {
    for (const s of this.props.segments.value)
      if (n = Ic(s, e), n) break;
  } else {
    const s = t?.stock?.autoId;
    n = this.props.segments.value.find((a) => a.stock?.autoId === s);
  }
  if (n === void 0)
    return !1;
  const i = n?.children;
  return i?.length ? {
    parent: n,
    children: i
  } : !1;
}
function lo(t, e = []) {
  if (!t) return e;
  if (t.offcut && e.push(t), t.children && Array.isArray(t.children))
    for (const n of t.children)
      lo(n, e);
  return e;
}
function Lc() {
  if (!this.props.containerWidth || !this.props.segments?.value?.length)
    return;
  const t = [];
  for (const n of this.props.segments.value)
    lo(n, t);
  if (!t.length) return;
  this.selections.segmentGroup.attr("display", "block");
  const e = (n) => n.attr("x", (i) => this.getRectangleCoordinate(i, "x")).attr("y", (i) => this.getRectangleCoordinate(i, "y")).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i));
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(t, Rs).join(
    (n) => n.append("rect").attr("class", "segment offcut").call(e),
    (n) => n.call(e),
    (n) => n.remove()
  );
}
const { currentCutIndex: $c } = zi();
function Fc() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (t, e) => e).join(
    (t) => t.append("line").attr("class", "cut").call((e) => ma.call(this, e)),
    (t) => t.call((e) => ma.call(this, e)),
    (t) => t.remove()
  ), uo.call(this));
}
function ma(t) {
  return t.attr("stroke-width", (e) => {
    const n = this.scales.measurementScale(this.getBladeWidth(e.stock));
    return n < 1 ? 1 : Math.ceil(n);
  }).attr("x1", (e) => {
    let n = e.x1;
    if (e.isTrim && e.stock?.cutType === "beam") {
      const i = this.getBladeWidth(e.stock) / 2;
      e.x1 === e.x2 && (n = e.x1 < e.stock.l / 2 ? e.x1 - i : e.x1 + i);
    }
    return this.scales.xPositionScale(n);
  }).attr("x2", (e) => {
    let n = e.x2;
    if (e.isTrim && e.stock?.cutType === "beam") {
      const i = this.getBladeWidth(e.stock) / 2;
      e.x1 === e.x2 && (n = e.x2 < e.stock.l / 2 ? e.x2 - i : e.x2 + i);
    }
    return this.scales.xPositionScale(n);
  }).attr("y1", (e) => {
    let n = e.y1;
    if (e.isTrim && e.stock?.cutType === "beam") {
      const i = this.getBladeWidth(e.stock) / 2;
      e.y1 === e.y2 && (n = e.y1 < e.stock.w / 2 ? e.y1 - i : e.y1 + i);
    }
    return this.scales.yPositionScale(n);
  }).attr("y2", (e) => {
    let n = e.y2;
    if (e.isTrim && e.stock?.cutType === "beam") {
      const i = this.getBladeWidth(e.stock) / 2;
      e.y1 === e.y2 && (n = e.y2 < e.stock.w / 2 ? e.y2 - i : e.y2 + i);
    }
    return this.scales.yPositionScale(n);
  }).classed("trim", (e) => e.isTrim).classed("head", (e) => e.isHead);
}
function ro(t, e, n) {
  return t.guillotineState.parentSegmentID === e && n && t.guillotineState.segmentCutOrder < n;
}
function co(t, e) {
  return t.guillotineState?.parentSegmentID !== null && !t?.isTrim ? t.guillotineState.parentSegmentID === e : !1;
}
function Tc(t, e, n) {
  this.selections.cutLines.style("visibility", (i) => typeof t.guillotineState?.[n] == "number" && typeof i.guillotineState?.[n] == "number" && i.guillotineState[n] <= t.guillotineState[n] ? "visible" : "hidden"), this.selections.cutLines.classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("offcut-cut", !1), this.selections.cutLines.classed("offcut-cut", (i, s) => s === e);
}
function Ec(t, e, n, i) {
  this.selections.cutLines.style("visibility", (a) => typeof t.guillotineState[n] == "number" && a.guillotineState[n] <= t.guillotineState[n] || !i && a.guillotineState.parentSegmentID === e ? "visible" : "hidden"), $c.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (a) => typeof t.guillotineState[n] == "number" && a.guillotineState[n] <= t.guillotineState[n] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (a) => typeof t.guillotineState[n] == "number" && a.guillotineState[n] <= t.guillotineState[n] ? "visible" : "hidden")), this.selections.cutLines.classed("offcut-cut", !1), this.selections.cutLines.classed("highlight", (a) => t.stock.cutType === "guillotine" && a.isTrim ? a.position === t.type : a.guillotineState[n] === t.guillotineState[n]), this.selections.cutLines.classed("ptx-dummy", (a) => a?.ptxData?.isDummy), i || Mc.call(this, t, e);
}
function Nc(t, e, n, i, s) {
  this.selections.cutLines.style("visibility", (o, l) => l <= e ? "visible" : "hidden"), this.state.env === "development" && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (o, l) => l <= e ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (o, l) => l <= e ? "visible" : "hidden"));
  let a;
  if (t?.dimension === "l" ? a = [
    [0 + (n.l1 ?? 0), t.y1 - s],
    [t.y1 + s, t.stock.w - (n?.y2 ? n.y2 : 0)]
  ] : t?.dimension === "w" && (a = [
    [0 + (n.w1 ?? 0), t.x1 - s],
    [t.x1 + s, t.stock.l - (n?.x2 ? n.x2 : 0)]
  ]), a?.length) {
    const o = [
      a[0][1] - a[0][0],
      a[1][1] - a[1][0]
    ];
    this.state.device === "desktop" && !t.isTrim && so.call(this, a, o, i);
  }
  this.selections.cutLines.classed("offcut-cut", !1), this.selections.cutLines.classed("highlight", (o, l) => l === e);
}
function uo() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1).classed("offcut-cut", !1), this.selections?.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), this.selections?.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return Math.max(1, Math.ceil(e));
  }), ri.call(this), Hi.call(this);
}
function Mc(t, e) {
  const n = t?.guillotineState?.segmentCutOrder;
  if (n == null) return;
  this.selections.cutLines.classed("completed", (S) => ro(S, e, n)), this.selections.cutLines.classed("inside-segment", (S) => co(S, e));
  const i = oo.call(this, t);
  if (i === !1) return;
  const { parent: s, children: a } = i, { near: o } = fo(t, a);
  if (!o) return;
  let l = [], r;
  const h = this.getHalfBladeWidth(t.stock), b = t.dimension === "l" ? "y" : "x";
  t?.dimension === "l" ? (l = [
    [
      o.y,
      o.y + o.w
    ],
    [
      t.y1 + h,
      s.y + s.w
    ]
  ], r = [t?.distances?.bottom, t?.distances.top]) : t?.dimension === "w" && (l = [
    [
      o.x,
      o.x + o.l
    ],
    [
      t.x1 + h,
      s.x + s.l
    ]
  ], r = [t?.distances?.left, t?.distances?.right]), this.state.device === "desktop" && !t.isTrim && r && so.call(this, l, r, b);
}
function Bc(t = null, e = "") {
  if (t === null || this.selections.cutLines.empty()) return;
  const n = this.props.cuts.value[t];
  if (!n) return;
  if (ri.call(this), Hi.call(this), t !== null && t >= 0 && t < this.selections.cutLines.size()) {
    const C = this.selections.cutLines.nodes()[t].parentElement;
    if (!C) return;
    ot(C).raise();
  }
  const i = n.guillotineState?.parentSegmentID, s = this.getHalfBladeWidth(n.stock), a = n.dimension === "l" ? "y" : "x", o = n?.stock?.trim, l = e === "ptx" ? "ptxOrder" : "order";
  if (n.isTrim && ["guillotine", "beam"].includes(n?.stock?.cutType)) {
    Tc.call(this, n, t, l), va.call(this, n, t, i), this.removeSegments();
    return;
  }
  if (["guillotine", "beam"].includes(n?.stock?.cutType) && i !== null && typeof i < "u" ? Ec.call(this, n, i, l, e) : Nc.call(this, n, t, o, a, s), va.call(this, n, t, i), e === "ptx") {
    this.removeSegments();
    return;
  }
  const r = oo.call(this, n);
  if (r === !1)
    return;
  const { parent: h, children: b } = r;
  if (!n?.guillotineState?.parentSegmentID)
    return ks.call(this, { parent: h });
  if (n.stock?.cutType === "beam" && h.phase === 0) {
    const M = this.props.segments.value.find((N) => N.stock?.autoId === n.stock?.autoId)?.children || b, E = M.find((N) => N.offcut === !0 && N.y === 0 && N.isTrimOffcut === !0), V = M.find((N) => N.offcut === !0 && N !== E && N.y + N.w >= n.stock.w - (n.stock.trim?.l2 || 0)), G = M.filter((N) => !N.offcut), Z = G.find((N) => N.type === "near"), he = G.find((N) => N.type === "far"), T = [E, V].filter(Boolean);
    return ks.call(this, { parent: h, near: Z, far: he, offcuts: T });
  }
  const { near: S, far: p, offcuts: $ } = fo(n, b);
  ks.call(this, { parent: h, near: S, far: p, offcuts: $ });
}
function fo(t, e) {
  const n = t.dimension === "l" ? "y" : "x", i = t.dimension === "l" ? "w" : "l", s = t.stock?.cutType === "beam";
  let a, o;
  if (s)
    a = e.find((r) => r.type === "near" && !r.offcut), o = e.find((r) => r.type === "far" && !r.offcut);
  else {
    const h = t[n + "1"], b = t.stock.halfBladeWidth;
    a = e.find((S) => S.type === "near" && Math.abs(S[n] + S[i] - (h - b)) < 1e-6), o = e.find((S) => S.type === "far" && Math.abs(S[n] - (h + b)) < 1e-6);
  }
  const l = e.filter((r) => r.offcut === !0 && r !== a && r !== o);
  return { near: a, far: o, offcuts: l };
}
function va(t, e, n) {
  this.selections.cutLines.attr("stroke-width", (i, s) => {
    const a = this.scales.measurementScale(this.getBladeWidth(i.stock));
    let o = Math.max(1, Math.ceil(a));
    const l = t?.guillotineState?.segmentCutOrder;
    return (ro(i, n, l) || co(i, n)) && (o += 1), s === e && Math.ceil(this.scales.measurementScale(this.getBladeWidth(i.stock))) < 5 && (o = 5), o;
  });
}
function Vc() {
  if (!this.settings.main || !this.props.cuttingPlan?.value) return;
  const t = this.props.cuttingPlan.value;
  if (!t.contours?.length) return;
  this.selections.cuttingPathGroup || (this.selections.cuttingPathGroup = this.selections.svgCanvas.append("g").attr("class", "cutting-path")), this.selections.cuttingPathGroup.selectAll("*").remove();
  const e = this.scales.xPositionScale, n = this.scales.yPositionScale;
  let i = null;
  t.contours.forEach((s, a) => {
    const o = s.leadIn.length > 0 ? s.leadIn[0] : s.contour[0];
    if (!o) return;
    i && a > 0 && this.selections.cuttingPathGroup.append("line").attr("x1", e(i.x)).attr("y1", n(i.y)).attr("x2", e(o.x)).attr("y2", n(o.y)).attr("stroke", "#000").attr("stroke-width", 0.5).attr("stroke-dasharray", "2,3").attr("fill", "none"), i = s.leadOut.length > 0 ? s.leadOut[s.leadOut.length - 1] : s.contour.length > 0 ? s.contour[s.contour.length - 1] : o;
  }), t.contours.forEach((s) => {
    const a = [
      ...s.leadIn,
      ...s.contour,
      ...s.leadOut
    ];
    if (a.length < 2) return;
    const o = a.map(
      (l, r) => `${r === 0 ? "M" : "L"} ${e(l.x)} ${n(l.y)}`
    ).join(" ");
    this.selections.cuttingPathGroup.append("path").attr("d", o).attr("stroke", "#ff00ff").attr("stroke-width", 1).attr("fill", "none");
  });
}
function Dc(t) {
  if (this.selections.cuttingPathGroup) {
    if (t === null) {
      this.selections.cuttingPathGroup.selectAll(".contour").style("opacity", 1);
      return;
    }
    this.selections.cuttingPathGroup.selectAll(".contour").style("opacity", (e, n) => n <= t ? 1 : 0.15), this.selections.cuttingPathGroup.selectAll(".contour").classed("active", (e, n) => n === t);
  }
}
function jc() {
  po.call(this), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.remove(), this.selections.cuttingPathGroup = null);
}
const on = /* @__PURE__ */ new WeakMap();
function Rc(t, e, n) {
  const i = [];
  let s = 0, a = e(0), o = n(0);
  const l = (r, h, b) => {
    const S = r - a, p = h - o;
    s += Math.sqrt(S * S + p * p), i.push({ sx: r, sy: h, type: b, cumDist: s }), a = r, o = h;
  };
  return i.push({ sx: a, sy: o, type: "rapid", cumDist: 0 }), t.contours.forEach((r, h) => {
    const b = r.leadIn.length > 0 ? r.leadIn[0] : r.contour[0];
    if (!b) return;
    l(e(b.x), n(b.y), "rapid");
    const S = [
      ...r.leadIn,
      ...r.contour,
      ...r.leadOut
    ];
    for (let p = 1; p < S.length; p++) {
      const $ = S[p];
      l(e($.x), n($.y), "cutting");
    }
  }), i;
}
function Gc(t, e) {
  if (e <= 0) return { sx: t[0].sx, sy: t[0].sy, type: t[0].type };
  for (let i = 1; i < t.length; i++)
    if (t[i].cumDist >= e) {
      const s = t[i - 1], a = t[i], o = a.cumDist - s.cumDist;
      if (o === 0) return { sx: a.sx, sy: a.sy, type: a.type };
      const l = (e - s.cumDist) / o;
      return {
        sx: s.sx + (a.sx - s.sx) * l,
        sy: s.sy + (a.sy - s.sy) * l,
        type: a.type
      };
    }
  const n = t[t.length - 1];
  return { sx: n.sx, sy: n.sy, type: n.type };
}
function qc() {
  if (!this.props.cuttingPlan?.value || !this.selections.cuttingPathGroup) return;
  const t = this.props.cuttingPlan.value;
  if (!t.contours?.length) return;
  let e = on.get(this);
  if (!e || !e.waypoints.length) {
    const a = this.scales.xPositionScale, o = this.scales.yPositionScale, l = Rc(t, a, o);
    if (l.length < 2) return;
    const r = l[l.length - 1].cumDist;
    e = {
      waypoints: l,
      totalDistance: r,
      progress: 0,
      playing: !0,
      speed: 1 / 8,
      // complete full path in ~8 seconds
      rafId: null,
      lastTime: null
    }, on.set(this, e);
  } else
    e.playing = !0, e.lastTime = null;
  this.selections.cuttingPathGroup.select(".cutting-path-dot").empty() && this.selections.cuttingPathGroup.append("circle").attr("class", "cutting-path-dot").attr("r", 4).attr("fill", "#000").attr("stroke", "#fff").attr("stroke-width", 1.5), this.selections.cuttingPathGroup.select(".cutting-path-trail-cut").empty() && this.selections.cuttingPathGroup.append("path").attr("class", "cutting-path-trail-cut").attr("fill", "none").attr("stroke-width", 2).attr("stroke", "#000").attr("opacity", 0.6), this.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").empty() && this.selections.cuttingPathGroup.append("path").attr("class", "cutting-path-trail-rapid").attr("fill", "none").attr("stroke-width", 1.5).attr("stroke", "#000").attr("stroke-dasharray", "2,3").attr("opacity", 0.6);
  const i = this, s = (a) => {
    if (!e.playing) return;
    e.lastTime === null && (e.lastTime = a);
    const o = (a - e.lastTime) / 1e3;
    e.lastTime = a, e.progress += e.speed * o, e.progress >= 1 && (e.progress = 1, e.playing = !1);
    const l = e.progress * e.totalDistance, r = Gc(e.waypoints, l);
    i.selections.cuttingPathGroup.select(".cutting-path-dot").attr("cx", r.sx).attr("cy", r.sy).attr("fill", "#000");
    let b = "", S = "", p = null;
    for (let $ = 0; $ < e.waypoints.length; $++) {
      const C = e.waypoints[$];
      if (C.cumDist > l) break;
      C.type === "cutting" ? ((!p || p.type !== "cutting") && (b += ` M ${p ? p.sx : C.sx} ${p ? p.sy : C.sy}`), b += ` L ${C.sx} ${C.sy}`) : ((!p || p.type !== "rapid") && (S += ` M ${p ? p.sx : C.sx} ${p ? p.sy : C.sy}`), S += ` L ${C.sx} ${C.sy}`), p = C;
    }
    e.progress < 1 && p && (r.type === "cutting" ? b += ` L ${r.sx} ${r.sy}` : S += ` L ${r.sx} ${r.sy}`), i.selections.cuttingPathGroup.select(".cutting-path-trail-cut").attr("d", b), i.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").attr("d", S), e.playing && (e.rafId = requestAnimationFrame(s));
  };
  e.rafId && cancelAnimationFrame(e.rafId), e.rafId = requestAnimationFrame(s);
}
function _c() {
  const t = on.get(this);
  t && (t.playing = !1, t.rafId && (cancelAnimationFrame(t.rafId), t.rafId = null), t.lastTime = null);
}
function po() {
  const t = on.get(this);
  t && (t.playing = !1, t.rafId && (cancelAnimationFrame(t.rafId), t.rafId = null), on.delete(this)), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.select(".cutting-path-dot").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-cut").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").remove());
}
function Uc() {
  const t = on.get(this);
  t && (t.playing = !1, t.rafId && (cancelAnimationFrame(t.rafId), t.rafId = null), t.lastTime = null), on.delete(this), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.select(".cutting-path-dot").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-cut").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").remove());
}
function Wc() {
  return on.get(this)?.playing ?? !1;
}
function zc(t) {
  const e = on.get(this);
  e && (e.speed = t);
}
function Hc(t) {
  if (console.log("[Diagram] drawPositions called:", {
    shapeId: t?.id,
    shapeRot: t?.rot,
    stockId: this.props.stock?.value?.id,
    hasStock: !!this.props.stock,
    isMain: this.settings.main
  }), !this.props.stock)
    return console.warn("[Diagram] drawPositions: no stock"), !1;
  if (!t || !this.settings.main)
    return console.warn("[Diagram] drawPositions: no shape or not main", {
      hasShape: !!t,
      isMain: this.settings.main
    }), !1;
  let e;
  const n = t.willItFit(this.props.stock.value, t.rot);
  if (console.log("[Diagram] drawPositions: willItFit check:", {
    willFit: n,
    shapeL: t.l,
    shapeW: t.w,
    shapeRot: t.rot,
    stockL: this.props.stock.value.l,
    stockW: this.props.stock.value.w
  }), !n) return !1;
  const i = Ol(
    null,
    this.props.shapes.value,
    this.props.stock.value
  );
  let s;
  if (this.props.stock.value.cutType === "efficiency") {
    if (this.state.env === "development") {
      let o = function(b) {
        return `${b.x1}-${b.y1}-${b.x2}-${b.y2}`;
      }, l = function(b) {
        b.attr("class", "ray").attr("x1", (S) => this.scales.xPositionScale(S.x1)).attr("x2", (S) => this.scales.xPositionScale(S.x2)).attr("y1", (S) => this.scales.yPositionScale(S.y1)).attr("y2", (S) => this.scales.yPositionScale(S.y2));
      };
      if (this.state.env !== "development") return;
      const h = Ll(this.props.shapes.value, this.props.stock.value).flatMap((b) => Object.values(b.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(h, o).join(
        (b) => b.append("line").call((S) => l.call(this, S)),
        (b) => b.call((S) => l.call(this, S)),
        (b) => b.remove()
      );
    }
    s = $l(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const a = new Fl();
  for (const o of i.toArray()) {
    const l = Tl(t, o, this.props.stock.value);
    l && a.addPoints(l.toArray());
  }
  if (s) {
    const o = s.toArray();
    for (const l of o) {
      const r = El(t, l, this.props.stock.value);
      r && a.addPoints(r.toArray());
    }
  }
  if (this.props.stock.value.cutType === "efficiency") {
    const o = this.props.stock.value;
    [
      new jn(o.trim.w1 ?? 0, o.trim.l1 ?? 0),
      new jn(o.trim.w1 ?? 0, o.trim.l1 ?? 0),
      new jn(
        o.l - t.l - (o.trim.w2 ?? 0),
        o.trim.l1 ?? 0
      ),
      new jn(
        o.trim.w1 ?? 0,
        o.w - t.w - (o.trim.l2 ?? 0)
      ),
      new jn(
        o.l - t.l - (o.trim.w2 ?? 0),
        o.w - t.w - (o.trim.l2 ?? 0)
      )
    ].forEach((l) => a.add(l)), e = a.toArray();
  } else {
    const o = this.props.stock.value;
    a.add(new jn(o.trim.w1 ?? 0, o.trim.l1 ?? 0)), e = a.toArray();
  }
  for (let o = e.length; o--; ) {
    const l = e[o];
    t.x = l.x, t.y = l.y;
    for (const r of this.props.shapes.value)
      if (this.collision(t, r, this.props.stock.value)) {
        e.splice(o, 1);
        break;
      }
  }
  return console.log("[Diagram] drawPositions: filtered positions count:", e?.length), Kc.call(this, e, t), Zc.call(this, e, t), e?.length ? (console.log("[Diagram] drawPositions: success, returning true"), !0) : (console.warn("[Diagram] drawPositions: no valid positions after filtering"), !1);
}
function Kc(t, e) {
  function n(s) {
    return `${s.x}-${s.y}`;
  }
  function i(s, a) {
    s.attr("data-id", (o, l) => l).attr("class", "shape ghost").attr("x", (o) => (a.x = o.x, this.getRectangleCoordinate(a, "x"))).attr("y", (o) => (a.y = o.y, this.getRectangleCoordinate(a, "y"))).attr("width", this.getWidthAttribute(a)).attr("height", this.getHeightAttribute(a)).on("mousedown", (o, l) => {
      console.log("[Diagram] ghostShape mousedown (position click):", {
        shapeId: a.id,
        shapeParentId: a.parentId,
        position: { x: l.x, y: l.y },
        shapeRot: a.rot
      }), this.callbacks.onMoveShape(a, l);
    });
  }
  this.selections.ghostShapeGroup.selectAll("rect").data(t, n).join(
    (s) => s.append("rect").call((a) => i.call(this, a, e)),
    (s) => s.call((a) => i.call(this, a, e)),
    (s) => s.remove()
  ), this.state.hasTouch || this.selections.ghostShapeGroup.selectAll("rect").on(
    "mouseover",
    function(s) {
      s.stopPropagation(), ot(this).classed("hover", !0), ot(this).raise();
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(s) {
      s.stopPropagation(), ot(this).classed("hover", !1);
    },
    {
      passive: !0
    }
  );
}
function Zc(t, e) {
  function n(s) {
    return `${s.x}-${s.y}`;
  }
  function i(s) {
    s.attr("class", "dot").attr("cx", (a) => this.scales.xPositionScale(a.x)).attr("cy", (a) => this.scales.yPositionScale(a.y)).attr("r", 6).on("mousedown", (a, o) => {
      this.callbacks.onMoveShape(e, o);
    });
  }
  this.selections.dotGroup.selectAll("circle").data(t, n).join(
    (s) => s.append("circle").call((a) => i.call(this, a)),
    (s) => s.call((a) => i.call(this, a)),
    (s) => s.remove()
  ), e.x = 0, e.y = 0, this.state.hasTouch || this.selections.dotGroup.selectAll("circle").on(
    "mouseover",
    function(s) {
      s.stopPropagation(), ot(this).classed("hover", !0);
      const a = ot(this).attr("data-id"), o = ot(`.ghost[data-id="${a}"]`);
      o.raise(), o.classed("highlight", !0);
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(s) {
      s.stopPropagation(), ot(this).classed("hover", !1);
      const a = ot(this).attr("data-id");
      ot(`.ghost[data-id="${a}"]`).classed(
        "highlight",
        !1
      );
    },
    {
      passive: !0
    }
  );
}
function Ti(t) {
  return t.outline && Array.isArray(t.outline) && t.outline.length >= 3;
}
function Jc() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((t) => Ti(t) ? [] : [t]).join(
    (t) => t.append("text").attr("class", "shape-text id").text((e) => ba.call(this, e)).classed("hidden", (e, n, i) => this.isTextHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1),
    (t) => t.classed("hidden", !1).text((e) => ba.call(this, e)).classed("hidden", (e, n, i) => this.isTextHidden(e, n, i)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((t) => Ti(t) ? [] : [t]).join(
    (t) => t.append("text").attr("class", "shape-text name").text((e) => ya.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, n, i) => this.isNameHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const s = i[n];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(s.getBBox().height / 2 + 1)
      );
    }),
    (t) => t.classed("hidden", !1).text((e) => ya.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, n, i) => this.isNameHidden(e, n, i)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const s = i[n];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(s.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((t) => Ti(t) ? [] : [t]).join(
    (t) => t.append("text").attr("class", "shape-text length").text((e) => wa.call(this, e)).classed("hidden", (e, n, i) => this.isLengthHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const a = i[n].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    }),
    (t) => t.classed("hidden", !1).text((e) => wa.call(this, e)).classed("hidden", (e, n, i) => this.isLengthHidden(e, n, i)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const a = i[n].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((t) => Ti(t) ? [] : [t]).join(
    (t) => t.append("text").attr("class", "shape-text width").text((e) => Sa.call(this, e)).classed("hidden", (e, n, i) => this.isWidthHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (e, n, i) => {
      const s = i[n], a = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(s.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(e, "y", "center"), l = this.state.device === "mobile" ? 90 : -90;
      return `translate(${a},${o}) rotate(${l})`;
    }),
    (t) => t.classed("hidden", !1).text((e) => Sa.call(this, e)).classed("hidden", (e, n, i) => this.isWidthHidden(e, n, i)).attr("transform", (e, n, i) => {
      const s = i[n], a = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(s.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(e, "y", "center"), l = this.state.device === "mobile" ? 90 : -90;
      return `translate(${a},${o}) rotate(${l})`;
    })
  );
}
function ba(t) {
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        {
          const e = t.guillotineState.myStripDirection, n = t.group.addedAsGroup;
          let i = "";
          if (e === "l" ? i = `→ ${t.id}` : e === "w" && (i = `↑ ${t.id}`), t?.priority?.[t?.stock?.parentId] && (i += "P"), n && (i += "G"), i.length) return i;
        }
        break;
      case "groups":
        {
          const e = t.group.reference, n = t.group.addedAsGroup;
          let i = null;
          if (e?.id ? i = e.id : n && (i = n.id.split(".")[0]), i) {
            const s = i.replace(/-[hv]$/, "").toUpperCase();
            return i.endsWith("-h") ? `→ ${s}` : i.endsWith("-v") ? `↑ ${s}` : s;
          }
        }
        break;
      case "positions":
        return t.id;
      case "placementOrder":
        return t.placementOrder?.toString() || "";
    }
  return t.parentId, t.parentId;
}
function ya(t) {
  return !t?.name || typeof t?.name != "string" ? null : t.name.toUpperCase().trim();
}
function wa(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : ve({ v: t.l, o: this.numberConfig }).toString();
}
function Sa(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : ve({ v: t.w, o: this.numberConfig }).toString();
}
function Yc() {
  const t = this.props.shapes.value;
  if (!t?.length) {
    this.removeGroups();
    return;
  }
  const e = /* @__PURE__ */ new Map();
  for (const i of t) {
    const s = i?.group?.addedAsGroup;
    if (!s || !(typeof s == "object" ? s.__entityType === "userGroup" || s.type === "user" : i?.group?.reference?.type === "user")) continue;
    const o = typeof s == "string" ? s : s.autoId || s.id;
    o && (e.has(o) || e.set(o, []), e.get(o).push(i));
  }
  if (e.size === 0) {
    this.removeGroups();
    return;
  }
  const n = [];
  for (const [, i] of e) {
    const s = Math.min(...i.map((r) => r.x)), a = Math.min(...i.map((r) => r.y)), o = Math.max(...i.map((r) => r.x + r.l)) - s, l = Math.max(...i.map((r) => r.y + r.w)) - a;
    n.push({ x: s, y: a, l: o, w: l, shapes: i });
  }
  this.initGroups(n);
}
const Xc = (t) => t.id;
function Qc() {
  if (!this.props.containerWidth) return;
  ri.call(this);
  const t = this.props.shapes.value.reduce((e, n) => {
    const i = parseInt(n.parentId);
    return i > e ? i : e;
  }, 0);
  this.scales.shapeColorScale.domain([1, t]), this.state.env === "development" && tu.call(this), eu.call(this), Yc.call(this);
}
function eu() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, Xc).join(
    (t) => {
      const e = t.append("g").attr("class", "shape-group");
      return ka.call(this, e), xa.call(this, e), e.on("mousedown", Pa.bind(this)), e;
    },
    (t) => (ka.call(this, t), xa.call(this, t), t.on("mousedown", Pa.bind(this)), t),
    (t) => t.remove()
  ), cu.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => Jc.call(this)), this.selections.shapeWrappers.size() > 0;
}
function tu() {
  let t = 1 / 0, e = -1 / 0;
  for (const s of this.props.shapes.value) {
    const a = s?.bestScore?.total;
    if (a !== 0 && a !== null && a !== void 0) {
      t = a, e = a;
      break;
    }
  }
  const n = this.props.shapes.value.reduce((s, a) => {
    const o = a?.bestScore?.total;
    return o === 0 || o === null || o === void 0 ? s : o < s ? o : s;
  }, t), i = this.props.shapes.value.reduce((s, a) => {
    const o = a?.bestScore?.total;
    return o == null ? s : o > s ? o : s;
  }, e);
  this.scales.scoreColorScale = Vi([qt(251, 224, 255), qt(122, 0, 138)]).domain([n, i]);
}
function nu(t) {
  return t.outline && Array.isArray(t.outline) && t.outline.length >= 3;
}
function iu(t, e) {
  const n = e.outline;
  if (!n || n.length < 3) return "";
  const i = e.nestingRotation || 0;
  let s;
  if (e.holes?.length) {
    let C = 1 / 0, M = 1 / 0, E = -1 / 0, V = -1 / 0;
    for (const G of n)
      G.x < C && (C = G.x), G.y < M && (M = G.y), G.x > E && (E = G.x), G.y > V && (V = G.y);
    s = [
      { x: C, y: M },
      { x: E, y: M },
      { x: E, y: V },
      { x: C, y: V },
      { x: C, y: M }
    ];
  } else
    s = n;
  const a = [s];
  if (e.holes?.length)
    for (const C of e.holes)
      C.length >= 3 && a.push(C);
  let o = 0, l = 0;
  for (const C of n)
    o += C.x, l += C.y;
  o /= n.length, l /= n.length;
  const r = Math.cos(i), h = Math.sin(i), b = a.map(
    (C) => C.map((M) => {
      if (i === 0) return { x: M.x, y: M.y };
      const E = M.x - o, V = M.y - l;
      return {
        x: r * E - h * V + o,
        y: h * E + r * V + l
      };
    })
  );
  let S = 1 / 0, p = 1 / 0;
  for (const C of b)
    for (const M of C)
      M.x < S && (S = M.x), M.y < p && (p = M.y);
  return b.map((C) => C.map((E) => ({
    x: t.scales.xPositionScale(E.x - S + (e.x || 0)),
    y: t.scales.yPositionScale(E.y - p + (e.y || 0))
  })).map(
    (E, V) => (V === 0 ? "M" : "L") + ` ${E.x} ${E.y}`
  ).join(" ") + " Z").join(" ");
}
function ka(t) {
  const e = this;
  t.selectAll(".shape").remove(), t.each(function(i) {
    const s = ot(this);
    nu(i) ? s.insert("path", ":first-child").datum(i).attr("class", "shape").attr("d", (a) => iu(e, a)).attr("fill-rule", "evenodd").style("fill", (a) => zn.call(e, a)) : s.insert("rect", ":first-child").datum(i).attr("class", "shape").attr("x", (a) => e.getRectangleCoordinate(a, "x")).attr("y", (a) => e.getRectangleCoordinate(a, "y")).attr("width", (a) => e.getWidthAttribute(a)).attr("height", (a) => e.getHeightAttribute(a)).style("fill", (a) => zn.call(e, a));
  });
  const n = t.selectAll(".shape");
  this.selections.shapeRectangles ? this.selections.shapeRectangles = Pr(
    this.selections.shapeRectangles.nodes().concat(n.nodes())
  ) : this.selections.shapeRectangles = n;
}
function xa(t) {
  !this.settings.main || this.settings.app || this.state.hasTouch || t.on("mouseover", (e) => {
    if (this?.props.moveMode && this.state.moving) return;
    const n = ot(e.target);
    n.classed("hover", !0), n.classed("selected") || n.style("fill", this.config.colors.partSelected.toString());
  }, { passive: !0 }).on("mouseout", (e, n) => {
    const i = ot(e.target);
    i.classed("hover", !1), i.classed("selected") || i.style("fill", zn.call(this, n));
  }, { passive: !0 });
}
function Pa(t, e) {
  if (this.state.moving || !this.settings.main)
    return !1;
  this.state.env === "development" && !this.props.moveMode.value && su.call(this, t, e), (this.settings.app || this.settings.embed) && lu.call(this, t, e), this.state.device === "desktop" && !this.props.moveMode.value && (Hi.call(this), wc.call(this, e)), this.props.moveMode.value ? (console.log("[Diagram] handleShapeClick: calling onAddToPartsBin", {
    shapeId: e.id
  }), this.callbacks.onAddToPartsBin(e)) : (console.log("[Diagram] handleShapeClick: calling findShape", {
    shapeId: e.id
  }), this.findShape.call(this, e.id));
}
function su(t, e) {
  if (e) {
    let n;
    switch (this.state.debug) {
      case "guillotine":
        n = [
          "id",
          "placementOrder",
          "priority",
          "guillotineState.myPhase",
          "guillotineState.myStripDirection",
          "guillotineState.myStripParent.id",
          "group.addedAsGroup"
        ], ou.call(this, e);
        break;
      case "groups":
        n = ["id", "placementOrder", "group.addedAsGroup", "group.reference"];
        break;
      case "score":
        n = ["id", "placementOrder", "bestScore.score"];
        break;
      default:
        n = ["id", "placementOrder", "priority", "group.addedAsGroup", "bestScore.score", "upDirection"];
    }
    console.table(au(e, n));
  }
}
function au(t, e) {
  return e.reduce((n, i) => {
    const s = hu(t, i);
    return n[i] = Array.isArray(s) ? s.join(", ") : s, n;
  }, {});
}
function ou(t) {
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const e = t.guillotineState?.myStripParent;
  e && this.selections.shapeWrappers.filter((s) => s.id === e || s.group.addedAsGroup === e).select(".shape").classed("highlight-a", !0);
  const n = this.props.shapes.value.find((i) => i.id === e)?.guillotineState?.myStripParent;
  n && this.selections.shapeWrappers.filter((s) => s.id === n || s.group.addedAsGroup === e).select(".shape").classed("highlight-b", !0);
}
function lu(t, e) {
  if (this.settings.app || this.settings.embed) {
    const n = {
      name: e.name,
      id: e.id,
      x: e.x,
      y: e.y,
      l: e.l,
      w: e.w,
      banding: e?.extras?.banding && typeof e.extras.banding == "object" ? e.extras.banding : null,
      rot: e.rot,
      stock: e?.stock?.id,
      color: zn.call(this, e),
      notes: e?.notes
    };
    if (typeof this.callbacks.onPartClick == "function" && this.callbacks.onPartClick(n), this.settings.app) return !1;
  }
  if (this.settings.app) return !1;
}
function zn(t) {
  const e = qt(204, 204, 204);
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        if (t.group.addedAsGroup)
          return qt(43, 156, 16);
        if (t.firstShape.isFirstShape)
          return qt(255, 171, 231);
        if (typeof t.guillotineState.myPhase == "number") {
          const s = [0, 115, 255], a = [176, 255, 231];
          return `rgb(${s.map((l, r) => Math.round(l + t.guillotineState.myPhase / 5 * (a[r] - l))).join(",")})`;
        }
        break;
      case "groups":
        if (t.group.addedAsGroup)
          return qt(43, 156, 16);
        break;
      case "priorityShapes":
        if (t?.priority && t.priority?.[t.stock.parentId])
          return qt(139, 171, 46);
        break;
      case "placementOrder": {
        const s = this.props.shapes.value.reduce((a, o) => {
          const l = o.placementOrder ?? 0;
          return l > a ? l : a;
        }, 0);
        if (s > 0 && typeof t.placementOrder == "number") {
          const a = [0, 115, 255], o = [255, 50, 50], l = t.placementOrder / s;
          return `rgb(${a.map((h, b) => Math.round(h + l * (o[b] - h))).join(",")})`;
        }
        break;
      }
      case "score": {
        const s = t?.bestScore?.total ? this.scales.scoreColorScale(t.bestScore.total) : null;
        if (s != null && typeof s.toString == "function")
          return s;
        if (s != null && typeof s.r == "number" && typeof s.g == "number" && typeof s.b == "number")
          return console.warn("Detected corrupted score color object from scale:", s, "for shape:", t), qt(s.r, s.g, s.b, s.opacity ?? 1);
      }
    }
  const n = parseInt(t.parentId);
  let i;
  return this.scales.shapeColorScale && typeof this.scales.shapeColorScale == "function" ? i = this.scales.shapeColorScale(n) : (console.error("shapeColorScale is not initialized or is not a function!", this.scales.shapeColorScale), i = null), i != null && typeof i.toString == "function" ? i : i != null && typeof i.r == "number" && typeof i.g == "number" && typeof i.b == "number" ? qt(i.r, i.g, i.b, i.opacity ?? 1) : (console.warn("Shape color scale returned null, undefined, or unexpected non-color value for shape:", t, i), e);
}
const Ca = 3;
function ru(t) {
  const e = [];
  for (const n of t) {
    const i = n.extras?.banding;
    if (n.added && i?.sides)
      for (const [s, a] of Object.entries(i.sides)) {
        if (!a || ["a", "b", "c", "d"].includes(s)) continue;
        let o = s;
        if (n.rot) {
          const r = Ya({ [s]: !0 }, "cc");
          o = Object.keys(r)[0];
        }
        const l = uu.call(this, n, o);
        l && e.push(l);
      }
  }
  return e;
}
function Ia(t) {
  const e = Ca / 2;
  return t.attr("class", "banding").attr("x1", (n) => this.scales.xPositionScale(n.l1) + Ei.call(this, n.type, "x", e)).attr("x2", (n) => this.scales.xPositionScale(n.l2) + Ei.call(this, n.type, "x", e)).attr("y1", (n) => this.scales.yPositionScale(n.w1) + Ei.call(this, n.type, "y", e)).attr("y2", (n) => this.scales.yPositionScale(n.w2) + Ei.call(this, n.type, "y", e)).attr("stroke-width", Ca).attr("stroke", "white");
}
function cu(t) {
  if (!this.settings.main) return;
  const e = ru.call(this, t);
  if (e.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(e, (n, i) => i).join(
    (n) => n.append("line").call((i) => Ia.call(this, i)),
    (n) => n.call((i) => Ia.call(this, i)),
    (n) => n.remove()
  );
}
function Ei(t, e, n) {
  return {
    l1: { x: 0, y: (this.flipY, -n) },
    // length side 1 (bottom): move up in screen space (inward)
    l2: { x: 0, y: (this.flipY, n) },
    // length side 2 (top): move down in screen space (inward)
    w1: { x: this.flipX ? -n : n, y: 0 },
    // width side 1 (left): move right (inward)
    w2: { x: this.flipX ? n : -n, y: 0 }
    // width side 2 (right): move left (inward)
  }[t]?.[e] ?? 0;
}
function uu(t, e) {
  const n = {
    l1: t.x,
    l2: t.x,
    w1: t.y,
    w2: t.y,
    type: e
  };
  switch (e) {
    case "l1":
      n.w1 = n.w2 = t.y, n.l2 = t.x + t.l;
      break;
    case "l2":
      n.w1 = n.w2 = t.y + t.w, n.l2 = t.x + t.l;
      break;
    case "w1":
      n.l1 = n.l2 = t.x, n.w2 = t.y + t.w;
      break;
    case "w2":
      n.l1 = n.l2 = t.x + t.l, n.w2 = t.y + t.w;
      break;
    default:
      return null;
  }
  return n;
}
function du(t) {
  this.selections.shapeWrappers.style("visibility", (e) => e?.placementOrder >= t ? "hidden" : "visible");
}
const Aa = (t) => t.id;
function Oa(t) {
  return t.style("fill", this.config.colors.stock).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function La(t) {
  return t.style("fill", (e) => `url(#grain-${e.grain || "n"})`).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function fu() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), Sc.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], Aa).join(
    (t) => t.append("rect").attr("class", "background stock").call((e) => Oa.call(this, e)),
    (t) => t.call((e) => Oa.call(this, e)),
    (t) => t.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], Aa).join(
    (t) => t.append("rect").attr("class", "stock-pattern").call((e) => La.call(this, e)),
    (t) => t.call((e) => La.call(this, e)),
    (t) => t.remove()
  );
}
function pu(t) {
  return typeof t == "string" && t.length === 6 && !isNaN(+("0x" + t.replace("#", "")));
}
function hu(t, e) {
  return Cr(t, e);
}
class gu {
  config;
  props;
  settings;
  options;
  numberConfig;
  callbacks;
  selections;
  state;
  scales;
  axes;
  constructor(e) {
    if (this.config = e, this.selections = {}, !e.elementID || (this.selections.el = ot(e.elementID), this.selections.el === null)) return;
    const n = this.selections.el.node();
    n !== null && (this.selections.htmlEl = n, this.scales = {
      xScale: _t(),
      yScale: _t(),
      yPositionScale: _t(),
      xPositionScale: _t(),
      yAxisScale: _t(),
      measurementScale: _t(),
      shapeColorScale: Vi(),
      scoreColorScale: Vi()
    }, this.axes = {
      cutMeasurementXAxes: [],
      cutMeasurementYAxes: []
    }, this.state = {
      env: "production",
      device: "desktop",
      debug: "",
      hasTouch: !1,
      stretched: !1,
      moving: !1,
      moveRotation: !1,
      highlightguillotine: !1,
      width: 0,
      height: 0,
      w: 0,
      h: 0,
      padding: 0,
      mobileBreakpoint: 768,
      axisSpacing: 20,
      shapeColors: {}
    }, this.props = e.props, this.settings = e.settings, this.options = e.options, this.callbacks = e.callbacks, this.numberConfig = e.numberConfig, this.initColors(e), this.initNumbers(e), this.init());
  }
  initColors(e) {
    const n = {
      partA: "#1d9bc4",
      partB: "#127da1",
      partSelected: "#1bc319",
      stock: "#ffd166",
      text: "#ffffff"
    }, i = (s, a) => qt("#" + (pu(s?.replace("#", "")) ? s.replace("#", "") : a.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(n).map(([s, a]) => [
        s,
        i(e.colors?.[s], a)
      ])
    ), this.scales.shapeColorScale = Vi([
      this.config.colors.partA,
      this.config.colors.partB
    ]);
  }
  initNumbers(e) {
    this.numberConfig = e.numberConfig, (this.numberConfig.decimalPlaces === null || this.numberConfig.decimalPlaces === void 0 || isNaN(this.numberConfig.decimalPlaces)) && (this.numberConfig.decimalPlaces = 2), (this.numberConfig.fractionRoundTo === null || this.numberConfig.fractionRoundTo === void 0 || isNaN(this.numberConfig.fractionRoundTo)) && (this.numberConfig.fractionRoundTo = 0);
  }
  init() {
    this.state.hasTouch = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    const e = this.selections.htmlEl.querySelector("svg");
    if (e === null) {
      const n = this.selections.el.append("svg").attr("class", "vis");
      if (n === null) return;
      n.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), n.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(90)").attr("id", "grain-l").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), n.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("id", "grain-w").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), n.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "grain-n").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), this.selections.svgCanvas = n;
    } else
      this.selections.svgCanvas = ot(e);
    this.selections.axisGroup = this.selections.svgCanvas.append("g").attr("class", "axis-group"), this.axes.xAxis = this.selections.axisGroup.append("g").attr("class", "axis stock x"), this.axes.yAxis = this.selections.axisGroup.append("g").attr("class", "axis stock y"), this.selections.stockGroup = this.selections.svgCanvas.append("g").attr("class", "stock-group"), this.selections.shapeGroup = this.selections.svgCanvas.append("g").attr("class", "shapes"), this.selections.bandingGroup = this.selections.svgCanvas.append("g").attr("class", "banding-group"), this.selections.cutGroup = this.selections.svgCanvas.append("g").attr("class", "cuts"), this.selections.segmentGroup = this.selections.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.selections.groupGroup = this.selections.svgCanvas.append("g").attr("class", "groups").attr("display", "none"), this.selections.ghostShapeGroup = this.selections.svgCanvas.append("g").attr("class", "positions"), this.selections.dotGroup = this.selections.svgCanvas.append("g").attr("class", "dots"), this.state.env === "development" && (this.selections.positionGroup = this.selections.svgCanvas.append("g").attr("class", "placements"));
  }
  updateNumberFormat(e, n, i) {
    this.numberConfig && (e && (this.numberConfig.numberFormat = e), n && (this.numberConfig.decimalPlaces = n), i && (this.numberConfig.fractionRoundTo = i));
  }
  formatNumber = (e) => {
    const n = ve({
      v: e,
      o: this.numberConfig
    });
    if (n !== null) return n.toString();
  };
  trimNameToFit(e, n) {
    function i(s, a, o) {
      const l = o[a], r = ot(l);
      r.text(s.name);
      let h = r.text();
      const b = r.node();
      if (!b) return;
      let S = b.getComputedTextLength();
      const p = this.getWidthAttribute(s) - 20;
      for (; S > p && h.length > 0; )
        h = h.slice(0, -1), r.text(h.length ? h + "..." : ""), S = r.node().getComputedTextLength();
    }
    e.each(i.bind(n));
  }
  setDevice() {
    if (!(!this.selections.htmlEl || this.selections.htmlEl.style.display === "none") && this.selections.htmlEl.offsetWidth) {
      if (this.props.containerWidth.value === 0) return !1;
      this.settings.main ? this.props.containerWidth.value <= this.state.mobileBreakpoint || this.settings.app ? (this.state.device = "mobile", this.state.padding = 0) : (this.state.device = "desktop", this.state.padding = 50) : this.state.padding = 0, this.state.w = this.props.containerWidth.value;
    }
  }
  // find the largest dimensions of all the stock (not just the active one)
  findLargestStockDimensions() {
    const e = this.props.stockList.value.filter((s) => s.used);
    if (!e) return [null, null];
    const n = e.reduce((s, a) => s.l > a.l ? s : a), i = e.reduce((s, a) => s.w > a.w ? s : a);
    return [n, i];
  }
  debounce(e, n, i = !1) {
    let s;
    return (...a) => new Promise((o) => {
      const l = () => {
        s = null, i || o(e.apply(this, a));
      };
      clearTimeout(s), i && !s && o(e.apply(this, a)), s = setTimeout(l, n);
    });
  }
  requiresStretch(e, n = null) {
    return e ? (n === null && (n = e.w / e.l), n < 0.15) : !1;
  }
  setAspectRatio() {
    if (!this.props.stock || !this.props.stock.value || !this.selections.htmlEl) return;
    const e = this.props.stock.value, n = this.props.containerWidth.value;
    if (n <= 0) return;
    const i = n - 2 * this.state.padding;
    if (i <= 0) return;
    this.scales.xScale.domain([0, e.l]), this.scales.yScale.domain([0, e.w]), this.scales.yAxisScale.domain(this.settings.flipY ? [0, e.w] : [e.w, 0]), this.scales.xPositionScale.domain([0, e.l]), this.scales.yPositionScale.domain([0, e.w]), this.scales.measurementScale.domain([0, e.l]);
    const s = e.l > 0 ? i * e.w / e.l : 0;
    this.state.w = i + 2 * this.state.padding, this.state.h = s + 2 * this.state.padding;
    const a = e.l > 0 ? e.w / e.l : 0;
    this.state.stretched = !1, this.requiresStretch(e, a) && this.options.enableStretch && (this.state.h = n * 0.15 + this.state.padding * 2, this.state.stretched = !0), this.scales.xScale.range([this.state.padding, this.state.w - this.state.padding]), this.scales.yScale.range([this.state.padding, this.state.h - this.state.padding]), this.scales.yAxisScale.range([this.state.padding, this.state.h - this.state.padding]), this.scales.xPositionScale.range(
      this.settings.flipX ? [this.state.w - this.state.padding, this.state.padding] : [this.state.padding, this.state.w - this.state.padding]
    ), this.scales.yPositionScale.range(
      this.settings.flipY ? [this.state.padding, this.state.h - this.state.padding] : [this.state.h - this.state.padding, this.state.padding]
      // Use calculated h
    ), this.scales.measurementScale.range([0, this.state.w - this.state.padding * 2]), this.state.w > 0 && this.state.h > 0 ? (this.selections.el.style("height", this.state.h + "px"), this.props.containerHeight.value = this.state.h, this.selections.svgCanvas.attr("width", this.state.w).attr("height", this.state.h).attr("viewBox", `0 0 ${this.state.w} ${this.state.h}`)) : (this.selections.el.style("height", null), this.props.containerHeight.value = 0, this.selections.svgCanvas.attr("width", null).attr("height", null).attr("viewBox", null));
  }
  //--------------------------------------------------------
  // FIND
  //--------------------------------------------------------
  findShapeElement(e) {
    const n = this.selections.shapeWrappers.filter((i) => i.id === e || i.autoId === e);
    return n.empty() ? null : n.node();
  }
  findShape(e) {
    const n = this.findShapeElement.call(this, e);
    n && this.selectShape.call(this, n);
  }
  selectShape(e) {
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (i) => zn.call(this, i));
    const n = ot(e).select(".shape");
    if (n) {
      n.classed("selected", !0), n.style("fill", this.config.colors.partSelected.toString());
      const i = ot(e).datum();
      this.callbacks.onShapeSelect(i, e);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    Qc.call(this);
  }
  drawStock() {
    fu.call(this);
  }
  drawCuts() {
    Fc.call(this);
  }
  drawCuttingPath() {
    Vc.call(this);
  }
  removeCuttingPath() {
    jc.call(this);
  }
  showCuttingPathStep(e) {
    Dc.call(this, e);
  }
  animateCuttingPath() {
    qc.call(this);
  }
  pauseCuttingPathAnimation() {
    _c.call(this);
  }
  stopCuttingPathAnimation() {
    po.call(this);
  }
  resetCuttingPathAnimation() {
    Uc.call(this);
  }
  isCuttingPathAnimating() {
    return Wc.call(this);
  }
  setCuttingPathAnimationSpeed(e) {
    zc.call(this, e);
  }
  drawAllOffcuts() {
    Lc.call(this);
  }
  drawAll() {
    this.drawStock(), this.drawShapes(), this.drawCuts(), this.drawCuttingPath(), this.state.debug === "offcuts" && this.drawAllOffcuts();
  }
  // Measurement & Calculation Methods
  getWidthAttribute(e) {
    return e?.l ? this.scales.xScale(e.l) - this.state.padding : 0;
  }
  getHeightAttribute(e) {
    return e?.w ? this.scales.yScale(e.w) - this.state.padding : 0;
  }
  getRectangleCoordinate(e, n, i, s) {
    let a;
    if (n === "x") {
      let o;
      switch (i) {
        case "center":
          o = this.scales.xPositionScale(e.x + e.l / 2), s && (o += s);
          break;
        case "right":
          o = this.scales.xPositionScale(e.x + e.l), s && (o -= s);
          break;
        default:
          o = this.scales.xPositionScale(this.settings.flipX ? e.x - e.l : e.x), s && (o -= s);
      }
      a = o;
    } else if (n === "y") {
      let o;
      switch (i) {
        case "center":
          o = this.scales.yPositionScale(e.y + e.w / 2), s && (o += s);
          break;
        case "bottom":
          o = this.scales.yPositionScale(this.settings.flipY ? e.y + e.w : e.y), s && (o += s);
          break;
        default:
          o = this.scales.yPositionScale(this.settings.flipY ? e.y : e.y + e.w), s && (o -= s);
      }
      a = o;
    }
    return a;
  }
  // Blade Width Methods
  getBladeWidth(e = null) {
    return tt(e) && e !== null ? e.bladeWidth : 0;
  }
  getHalfBladeWidth(e = null) {
    const n = e.bladeWidth;
    return n !== void 0 && n > 0 ? n / 2 : 0;
  }
  // Reset Methods
  removeShapes() {
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), ri.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), Cc.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), Hi.call(this);
  }
  removeSegments() {
    this.selections.segmentGroup && this.selections.segmentGroup.selectAll("*").remove();
  }
  removeGroups() {
    this.selections.groupGroup && this.selections.groupGroup.selectAll("*").remove();
  }
  removePositions() {
    this.selections.ghostShapeGroup && this.selections.ghostShapeGroup.selectAll("*").remove(), this.removePlacementPositions();
  }
  removePlacementPositions() {
    this.selections.dotGroup && this.selections.dotGroup.selectAll("*").remove();
  }
  removeAll() {
    this.removePositions(), this.removePlacementPositions(), this.removeShapes(), this.removeStock(), this.removeCuts(), this.removeSegments();
  }
  // Collision Detection
  collision(e, n, i) {
    if (e.id === n.id)
      throw new Error("collision comparing to self");
    return (
      // 1 left
      e.x < n.x + n.l + this.getBladeWidth(i) && // 2 right
      e.x + e.l + this.getBladeWidth(i) > n.x && // 3 bottom
      e.y < n.y + n.w + this.getBladeWidth(i) && // 4 top
      e.y + e.w + this.getBladeWidth(i) > n.y
    );
  }
  // TOGGLE
  //--------------------------------------------------------
  toggleShapes(e = !1) {
    this.selections.shapeGroup && (e ? (this.selections.shapeGroup.attr("display", "block"), this.selections.bandingGroup.attr("display", "block")) : (this.selections.shapeGroup.attr("display", "none"), this.selections.bandingGroup.attr("display", "none")));
  }
  toggleSegments(e = !0) {
    this.selections.segmentGroup && (e ? this.selections.segmentGroup.attr("display", "block") : this.selections.segmentGroup.attr("display", "none"));
  }
  toggleCuts(e = !0) {
    this.selections.cutGroup && (e ? this.selections.cutGroup.attr("display", "block") : this.selections.cutGroup.attr("display", "none"));
  }
  // Padding Helper
  addPadding(e) {
    return e + this.state.padding;
  }
  // Text Visibility Helpers
  isTextHidden(e, n, i) {
    if (Ai(e) && e.outline?.length >= 3)
      return !0;
    const s = i[n];
    if (!s)
      return !0;
    const a = s.getBBox();
    if (a.width === 0 && a.height === 0)
      return !1;
    const o = this.scales.measurementScale(e.l), l = this.scales.yScale(e.w);
    return a.width >= o || a.height >= l - this.state.padding;
  }
  isNameHidden(e, n, i) {
    if (Ai(e) && e.outline?.length >= 3) return !0;
    const s = i[n];
    if (!s) return !0;
    const a = s.getBBox();
    if (a.width === 0 && a.height === 0) return !1;
    const o = this.scales.measurementScale(e.l), l = this.scales.measurementScale(e.w);
    return a.width >= o || l < 40;
  }
  isLengthHidden(e, n, i) {
    if (Ai(e) && e.outline?.length >= 3) return !0;
    if (this.settings.app) {
      const r = this.scales.measurementScale(e.l), h = this.scales.measurementScale(e.w);
      return r < 50 || h < 50;
    }
    if (e?.stock?.saw?.stockType === "linear") return !1;
    const s = i[n];
    if (!s) return !0;
    const a = s.getBBox();
    if (a.width === 0 && a.height === 0) return !1;
    const o = this.scales.measurementScale(e.l), l = this.scales.measurementScale(e.w);
    return a.width >= o || l < 30;
  }
  isWidthHidden(e, n, i) {
    if (Ai(e) && e.outline?.length >= 3) return !0;
    if (this.settings.app)
      return this.scales.measurementScale(e.l) < 50 || this.scales.measurementScale(e.w) < 50;
    const a = i[n].getBBox();
    return a.width === 0 && a.height === 0 ? !1 : this.scales.measurementScale(e.l) < 30 || a.height >= this.scales.measurementScale(e.w);
  }
  // Group Management
  initGroups(e) {
    if (!e || !e?.length || !this.settings.main || !this.props.containerWidth)
      return !1;
    this.removeGroups(), this.selections.groupRectangles = this.selections.groupGroup.selectAll("rect").data(e).join("rect").attr("class", "group").attr("x", (n) => this.getRectangleCoordinate(n, "x")).attr("y", (n) => this.getRectangleCoordinate(n, "y")).attr("width", (n) => this.getWidthAttribute(n)).attr("height", (n) => this.getHeightAttribute(n)), this.selections.groupGroup.attr("display", "block"), this.state.env === "development" && this.setupGroupDebugEvents();
  }
  setupGroupDebugEvents() {
    this.state.hasTouch || this.selections.groupRectangles.on("mouseover", function() {
      ot(this).classed("hover", !0);
    }).on("mouseout", function() {
      ot(this).classed("hover", !1);
    });
  }
  // Clear Selection
  clearSelection() {
    this?.selections?.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (e) => zn.call(this, e)), this?.selections?.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (e) => {
      const n = this.scales.measurementScale(this.getBladeWidth(e.stock));
      return n < 1 ? 1 : Math.ceil(n);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    ri.call(this);
  }
  updateShapeVisibility() {
    du.call(this);
  }
  drawPositions(e) {
    return Hc.call(this, e);
  }
  showCut(e) {
    Bc.call(this, e);
  }
  resetCuts() {
    uo.call(this);
  }
}
const mu = ["id"], vu = /* @__PURE__ */ lt({
  __name: "Diagram",
  props: {
    elementId: {},
    app: { type: Boolean, default: !1 },
    embed: { type: Boolean },
    numberFormat: { default: "decimal" },
    decimalPlaces: { default: 2 },
    main: { type: Boolean, default: !0 },
    stockAutoId: { default: null },
    colors: { default: null },
    disableClick: { type: Boolean, default: !1 },
    enableStretch: { type: Boolean, default: !0 },
    flipY: { type: Boolean, default: !1 },
    moveMode: { default: () => z(!1) }
  },
  emits: ["shape-select", "shape-colour-update", "add-to-parts-bin", "move-shape", "part-click", "resize"],
  setup(t, { expose: e, emit: n }) {
    const {
      r: i,
      activeStock: s,
      activeShapes: a,
      activeCuts: o,
      activeSegments: l,
      currentCutIndex: r,
      getStock: h,
      getShapes: b,
      getSegments: S,
      getCuts: p,
      cuttingPlan: $
    } = zi(), C = t, M = n, E = (de) => {
      M("part-click", de);
    }, V = (de) => {
      M("shape-colour-update", de);
    }, G = (de, Re) => {
      de?.autoId && M("shape-select", de.autoId, Re);
    }, Z = (de) => {
      de && M("add-to-parts-bin", de);
    }, he = (de, Re) => {
      de && M("move-shape", de, Re);
    }, T = z(0), N = z(0), ee = z(null);
    let w, j = z(!1);
    const x = Bt({
      debug: "",
      stretched: !1
    }), H = () => {
      w?.state && (x.stretched = w.state.stretched);
    };
    An(() => Ce());
    const se = F(() => ({
      format: C.numberFormat,
      decimals: C.decimalPlaces
    })), re = F(() => C.stockAutoId ? h(C.stockAutoId) : s.value), oe = F(() => C.stockAutoId ? b(C.stockAutoId) : a.value), Be = F(() => C.main ? C.stockAutoId ? p(C.stockAutoId) : o.value : []), Y = F(() => C.main ? C.stockAutoId ? S(C.stockAutoId) : l.value : []);
    Da(ee, (de) => {
      const Re = de[0], { width: _e, height: ut } = Re.contentRect;
      _e > 0 && (T.value = _e), M("resize", { width: _e, height: ut });
    }), nl(
      T,
      (de) => {
        w && (de <= 0 || (w.setDevice(), w.resetShapeAxes(), w.removeCuttingPath(), w.drawAll(), H(), r.value !== null && (w.toggleSegments(!0), w.showCut(r.value))));
      },
      { throttle: 100 }
    );
    let ce = !1;
    Ke(() => re.value, (de) => {
      de && (T.value <= 0 || (ce = !0, w.setDevice(), w.resetCuts(), w.removeSegments(), w.resetShapeAxes(), w.removeCuttingPath(), w.drawAll(), H(), Ct(() => ce = !1)));
    }, { immediate: !1 }), Ke(() => oe.value, (de) => {
      ce || de && (T.value <= 0 || (w.setDevice(), w.drawShapes()));
    }, { immediate: !1, deep: !0 }), C.main && (Ke(() => Be.value, () => {
      ce || T.value <= 0 || w.drawCuts();
    }, { immediate: !1, deep: !0 }), Ke(r, () => {
      r.value !== null && (T.value <= 0 || (w.toggleSegments(!0), w.showCut(r.value)));
    }, { immediate: !1 }), Ke(se, (de) => {
      w.updateNumberFormat(de.format, de.decimals, null);
    }, { immediate: !1 }));
    const Ce = () => {
      const de = {
        // STATIC
        //--------------------------------------------------------
        elementID: `#${C.elementId}`,
        env: "production",
        numberConfig: {
          numberFormat: C.numberFormat,
          decimalPlaces: C.decimalPlaces,
          fractionRoundTo: 0
        },
        colors: C.colors || null,
        settings: {
          main: C.main,
          app: C.app,
          embed: C.embed,
          flipY: C.flipY,
          flipX: !1
        },
        props: {
          containerHeight: N,
          containerWidth: T,
          stock: re,
          shapes: oe,
          cuts: Be,
          segments: Y,
          stockList: i.stockList,
          cuttingPlan: $,
          moveMode: C.moveMode,
          app: C.app
        },
        options: {
          disableClick: C.disableClick,
          enableStretch: C.enableStretch
        },
        // EVENTS
        //--------------------------------------------------------
        callbacks: {
          onShapeColourUpdate: V,
          onShapeSelect: G,
          onAddToPartsBin: Z,
          onMoveShape: he,
          onPartClick: E
        }
      };
      w = new gu(de), x.debug = w.state.debug, j.value = !0;
    }, J = (de = !1) => {
      w && w.toggleShapes(de);
    }, le = (de = !1) => {
      w && w.toggleCuts(de);
    }, ge = (de = !1) => {
      w && w.toggleSegments(de);
    }, $e = () => {
      w && w.drawShapes();
    }, It = () => {
      w && (w.drawStock(), H());
    }, nt = () => {
      w && (w.toggleSegments(!1), w.resetCuts());
    }, ze = (de) => {
      w && (w.toggleSegments(!0), w.showCut(de));
    }, Ft = (de) => w ? w.drawPositions(de) : !1, yt = () => {
      w && w.removePositions();
    }, rn = (de) => {
      w && w.findShape(de);
    }, Tt = () => {
      w && w.clearSelection();
    }, mt = (de) => w ? w.requiresStretch(de) : !1, Et = (de) => {
      w?.options && (w.options.enableStretch = de, w.setAspectRatio(), w.drawAll(), H());
    }, wt = () => w?.options?.enableStretch ?? !0;
    return Ke(() => C.flipY, (de) => {
      w?.settings && (w.settings.flipY = de, w.setAspectRatio(), w.drawAll());
    }), Ke(() => x.debug, (de) => {
      w?.state && (w.state.debug = de);
    }), e({
      loaded: j,
      toggleShapes: J,
      toggleCuts: le,
      toggleSegments: ge,
      drawShapes: $e,
      drawStock: It,
      drawPositions: Ft,
      resetPositions: yt,
      findShape: rn,
      clearSelection: Tt,
      resetCuts: nt,
      showCut: ze,
      requiresStretch: mt,
      setEnableStretch: Et,
      getEnableStretch: wt,
      animateCuttingPath: () => {
        w && w.animateCuttingPath();
      },
      pauseCuttingPathAnimation: () => {
        w && w.pauseCuttingPathAnimation();
      },
      stopCuttingPathAnimation: () => {
        w && w.stopCuttingPathAnimation();
      },
      resetCuttingPathAnimation: () => {
        w && w.resetCuttingPathAnimation();
      },
      isCuttingPathAnimating: () => w?.isCuttingPathAnimating() ?? !1,
      setCuttingPathAnimationSpeed: (de) => {
        w && w.setCuttingPathAnimationSpeed(de);
      },
      state: x,
      get stretched() {
        return x.stretched;
      },
      set moving(de) {
        w?.state && (w.state.moving = de);
      }
    }), (de, Re) => (O(), D("div", {
      id: t.elementId,
      ref_key: "diagramContainerRef",
      ref: ee,
      class: je([{ app: t.app }, "diagram-container"])
    }, null, 10, mu));
  }
}), Mt = z(null);
let bu = 0;
function yu(t) {
  const e = t || `action-menu-${++bu}-${Date.now()}`, n = F({
    get: () => Mt.value === e,
    set: (b) => {
      b ? Mt.value = e : Mt.value === e && (Mt.value = null);
    }
  }), i = () => {
    Mt.value = e;
  }, s = () => {
    Mt.value === e && (Mt.value = null);
  }, a = () => {
    Mt.value = null;
  }, o = () => {
    n.value = !n.value;
  }, l = F(() => Mt.value !== null), r = F(() => Mt.value), h = F(() => Mt.value === e);
  return {
    // Instance-specific
    id: xt(z(e)),
    isOpen: n,
    open: i,
    close: s,
    toggle: o,
    isThisMenuOpen: h,
    // Global singleton state (shared across all instances)
    closeAll: a,
    isAnyMenuOpen: l,
    currentOpenMenuId: r
  };
}
const wu = { class: "action-menu" }, Su = ["textContent"], ku = {
  key: 0,
  class: "menu-divider"
}, xu = {
  key: 1,
  class: "group-label"
}, Pu = /* @__PURE__ */ lt({
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
  setup(t, { emit: e }) {
    const n = t, i = e, { isOpen: s, close: a, toggle: o } = yu(n.menuId), l = z(), r = z(), h = F(() => n.disabled), b = F(() => n.label), S = F(() => n.showLabel), p = F(() => n.icon), { floatingStyles: $ } = il(l, r, {
      placement: n.placement,
      whileElementsMounted: Lr,
      middleware: [
        Ir(n.offset),
        Ar(),
        Or({ padding: 8 })
      ]
    }), C = (x) => {
      if (!x) return ["fas", "question"];
      if (typeof x == "function" && (x = x(n)), Array.isArray(x))
        return x;
      if (typeof x == "string") {
        const H = x.split(" ");
        if (H.length >= 2) {
          const se = H[0], re = H.slice(1).join("-").replace("fa-", "");
          return [se, re];
        }
        return ["fas", x.replace("fa-", "")];
      }
      return ["fas", "question"];
    }, M = F(() => C(p.value)), E = (x) => typeof x.active == "function" ? x.active(n) : typeof x.active == "boolean" ? x.active : !1, V = (x) => {
      if (!x.href) return !1;
      try {
        const H = typeof x.href == "function" ? x.href(n) : x.href;
        return new URL(H, window.location.origin).origin !== window.location.origin;
      } catch {
        return !1;
      }
    }, G = (x) => x.href ? "a" : "div", Z = (x) => {
      const H = {};
      if (x.href) {
        const se = typeof x.href == "function" ? x.href(n) : x.href;
        if (H.href = se, V(x)) {
          const re = typeof x.target == "function" ? x.target(n) : x.target;
          H.target = re || "_blank", H.rel = x.rel || "noopener noreferrer";
        } else if (x.target) {
          const re = typeof x.target == "function" ? x.target(n) : x.target;
          H.target = re;
        }
        x.rel && (H.rel = x.rel);
      }
      return x.attrs && Object.assign(H, x.attrs), H;
    }, he = F(() => n.menuItems.map((x) => {
      const H = { ...x };
      return typeof x.href == "function" && (H.href = x.href(n)), typeof x.icon == "function" && (H.icon = x.icon(n)), typeof x.disabled == "function" && (H.disabled = x.disabled(n)), typeof x.label == "function" && (H.label = x.label(n)), typeof x.variant == "function" && (H.variant = x.variant(n)), typeof x.active == "function" && (H.active = x.active(n)), typeof x.target == "function" && (H.target = x.target(n)), typeof x.show == "function" && (H.show = x.show(n)), H;
    })), T = (x) => {
      x.stopPropagation(), x.preventDefault(), !h.value && o();
    }, N = (x, H) => {
      if (H.stopPropagation(), x.disabled && !x.href) {
        H.preventDefault();
        return;
      }
      if (typeof x.action == "function" && x.action(x) === !1 && x.href) {
        H.preventDefault();
        return;
      }
      i("action", {
        id: x.id,
        item: x
      }), x.href && n.closeOnLinkClick ? a() : x.href || a();
    }, ee = (x) => {
      const H = [];
      if (x.variant) {
        const re = typeof x.variant == "function" ? x.variant(n) : x.variant;
        H.push(`variant-${re}`);
      }
      if ((typeof x.disabled == "function" ? x.disabled(n) : x.disabled) && !x.href && H.push("disabled"), E(x) && H.push("active"), x.href && H.push("menu-link"), V(x) && H.push("external-link"), x.class) {
        const re = typeof x.class == "function" ? x.class(n) : x.class;
        H.push(re);
      }
      return H.join(" ");
    }, w = (x) => {
      const H = x.target;
      s.value && l.value && r.value && !l.value.contains(H) && !r.value.contains(H) && a();
    }, j = (x) => {
      x.key === "Escape" && s.value && a();
    };
    return An(() => {
      document.addEventListener("click", w), document.addEventListener("keydown", j);
    }), ci(() => {
      document.removeEventListener("click", w), document.removeEventListener("keydown", j);
    }), (x, H) => (O(), D("div", wu, [
      K("div", {
        ref_key: "trigger",
        ref: l,
        onClick: T,
        class: je(["actions-btn", { active: I(s), disabled: h.value }])
      }, [
        p.value ? (O(), Ae(I(Ri), {
          key: 0,
          icon: M.value,
          class: "icon"
        }, null, 8, ["icon"])) : ae("", !0),
        S.value ? (O(), D("span", {
          key: 1,
          class: "label",
          textContent: pe(b.value)
        }, null, 8, Su)) : ae("", !0)
      ], 2),
      (O(), Ae(sl, { to: "body" }, [
        I(s) && !h.value ? (O(), D("div", {
          key: 0,
          ref_key: "floating",
          ref: r,
          style: Lt(I($)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: H[0] || (H[0] = Vs(() => {
          }, ["stop"]))
        }, [
          (O(!0), D(it, null, gt(he.value, (se, re) => (O(), D(it, { key: re }, [
            se.type === "divider" ? (O(), D("div", ku)) : se.type === "group" ? (O(), D("div", xu, pe(se.label), 1)) : se.show !== !1 ? (O(), Ae(al(G(se)), xn({
              key: 2,
              ref_for: !0
            }, Z(se), {
              onClick: (oe) => N(se, oe),
              id: se.id,
              class: ["menu-item", ee(se)],
              disabled: se.disabled && !se.href
            }), {
              default: wn(() => [
                se.icon || E(se) ? (O(), Ae(I(Ri), {
                  key: 0,
                  icon: E(se) ? ["fass", "check"] : C(se.icon)
                }, null, 8, ["icon"])) : ae("", !0),
                K("span", null, pe(se.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : ae("", !0)
          ], 64))), 128))
        ], 4)) : ae("", !0),
        I(s) && !h.value ? (O(), D("div", {
          key: 1,
          class: "backdrop",
          onClick: H[1] || (H[1] = //@ts-ignore
          (...se) => I(a) && I(a)(...se))
        })) : ae("", !0)
      ]))
    ]));
  }
}), $a = (t, e, n) => {
  if (e === "unitDependent")
    if (n === "fraction") {
      if (/\/0$/.test(t))
        return {
          value: t,
          valid: !1,
          message: "division_by_zero"
        };
      const i = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(t), s = za(t);
      return {
        value: t,
        valid: i || s
      };
    } else {
      const s = /^-?\d*\.?\d*$/.test(t);
      if (s && t !== "" && t !== "-" && t !== "." && !t.endsWith(".")) {
        const a = parseFloat(t);
        if (!isNaN(a))
          return {
            value: a,
            valid: !0
          };
      }
      return {
        value: t,
        // Keep as string for partial inputs
        valid: s
      };
    }
  if (e === "integer") {
    const s = /^-?\d*$/.test(t);
    if (s && t !== "" && t !== "-") {
      const a = parseInt(t, 10);
      if (!isNaN(a))
        return {
          value: a,
          valid: !0
        };
    }
    return {
      value: t,
      // Keep as string for partial inputs
      valid: s
    };
  }
  if (e === "float") {
    const s = /^-?\d*\.?\d*$/.test(t);
    if (s && t !== "" && t !== "-" && t !== "." && !t.endsWith(".")) {
      const a = parseFloat(t);
      if (!isNaN(a))
        return {
          value: a,
          valid: !0
        };
    }
    return {
      value: t,
      // Keep as string for partial inputs
      valid: s
    };
  }
  return { value: t, valid: !0 };
};
function Cu({
  props: t,
  emit: e,
  isMounted: n
}) {
  const i = z({
    isTyping: !1,
    isMouseDown: !1,
    isComposing: !1,
    lastValidValue: String(t.value ?? "")
  }), s = (l, r = !1) => {
    if (l == null || l === "") {
      const b = t.required && !t.disableRequiredValidation;
      return t.type === "string" ? b ? { value: null, valid: !1, message: "field_required" } : { value: l === null ? null : "", valid: !0 } : Nl(l, "decimal", b);
    }
    const h = String(l);
    switch (t.type) {
      case "string":
        return { value: h, valid: !0 };
      case "unitDependent":
        if (r)
          return $a(h, t.type, t.numberFormat);
        try {
          const b = ve({
            v: l,
            nf: t.numberFormat,
            dp: t.decimalPlaces,
            fr: t.fractionRoundTo
          });
          if (typeof b == "number") {
            let S = b, p = !0, $;
            return typeof t.min == "number" && S < t.min && (S = t.min, p = !1, $ = "below_min"), typeof t.max == "number" && S > t.max && (S = t.max, p = !1, $ = "above_max"), { value: S, valid: p, message: $ };
          }
          return { value: b, valid: !0 };
        } catch (b) {
          return console.warn("Error converting value:", b), {
            value: null,
            valid: !1,
            message: "invalid_number"
          };
        }
      case "integer":
      case "float":
        if (r)
          return $a(h, t.type);
        try {
          const S = ve({
            v: l,
            nf: "decimal"
          });
          if (S === null)
            return t.required && !t.disableRequiredValidation ? { value: null, valid: !1, message: "errors.validation.field.required" } : { value: null, valid: !0 };
          let p = S;
          if (t.type === "integer" && (p = Math.round(p)), t.allowZero === !1 && p === 0)
            return {
              value: p,
              valid: !1,
              message: "zero_not_allowed"
            };
          let $ = !0, C;
          return typeof t.min == "number" && p < t.min && (p = t.min, $ = !1, C = "below_min"), typeof t.max == "number" && p > t.max && (p = t.max, $ = !1, C = "above_max"), { value: p, valid: $, message: C };
        } catch {
          return {
            value: null,
            valid: !1,
            message: "invalid_number"
          };
        }
      default:
        return { value: l, valid: !0 };
    }
  }, a = (l, r = !1) => r && t.type === "unitDependent" && t.numberFormat === "fraction" ? !1 : r && (t.type === "integer" || t.type === "float" || t.type === "unitDependent" && t.numberFormat === "decimal") ? typeof l.value == "number" && l.valid : !!(l.valid || l.message === "zero_not_allowed" || l.message === "below_min" || l.message === "above_max" || l.message === "errors.validation.field.required" && !t.disableRequiredValidation);
  return {
    state: i,
    ...{
      //Handler to set the flag on mouse down
      handleMouseDown: () => {
        n.value && (i.value.isMouseDown = !0);
      },
      //Handler to reset the flag on mouse up
      handleMouseUp: () => {
        n.value && (i.value.isMouseDown = !1);
      },
      handleInput: (l) => {
        if (!n.value) return;
        const r = l.target;
        if (i.value.isMouseDown) {
          const b = s(r.value, !1);
          a(b, !1) && (e("update:value", b.value), e("validation", b, t.id)), i.value.isMouseDown = !1;
          return;
        }
        i.value.isTyping = !0;
        const h = s(r.value, !0);
        e("validation", h, t.id), e("input", r.value), a(h, !0) && e("update:value", h.value);
      },
      handleBlur: (l) => {
        if (!n.value) return;
        i.value.isTyping = !1;
        const r = l.target, h = s(r.value, !1);
        e("validation", h, t.id), a(h) && (e("update:value", h.value), i.value.lastValidValue = String(h.value ?? "")), e("blur", l);
      },
      handleFocus: (l) => {
        n.value && (i.value.isTyping = !0, e("focus", l));
      },
      handleKeydown: (l) => {
        if (n.value && !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(l.key)) {
          if (!["Backspace", "Delete", "Tab", "Enter", "Escape"].includes(l.key))
            if (t.type === "unitDependent" && t.numberFormat === "fraction") {
              const r = l.target, h = r.value, b = r.selectionStart || 0, S = h.substring(0, b);
              if (l.key === "/" && h.includes("/")) {
                l.preventDefault();
                return;
              }
              if (l.key === " " && /\s$/.test(S)) {
                l.preventDefault();
                return;
              }
              /^[-0-9\s/]$/.test(l.key) || l.preventDefault();
            } else (t.type === "integer" || t.type === "float") && ((t.type === "integer" ? /^[-0-9]$/.test(l.key) : /^[-0-9.]$/.test(l.key)) || l.preventDefault());
          if (l.key === "Enter") {
            i.value.isTyping = !1;
            const r = l.target, h = s(r.value, !1);
            e("validation", h, t.id), a(h) && (e("update:value", h.value), i.value.lastValidValue = String(h.value ?? "")), e("enter", h);
          }
          l.key === "Escape" && (i.value.isTyping = !1, e("escape"));
        }
      },
      // Better input pattern for HTML validation
      getInputPattern: () => {
        switch (t.type) {
          case "integer":
            return "-?[0-9]*";
          case "float":
            return "-?[0-9]*\\.?[0-9]*";
          case "unitDependent":
            return t.numberFormat === "fraction" ? "-?([0-9]+( [0-9]+)?)?(/[0-9]+)?" : "-?[0-9]*\\.?[0-9]*";
          default:
            return;
        }
      },
      getInputMode: () => {
        switch (t.type) {
          case "integer":
            return "numeric";
          case "float":
            return "decimal";
          case "unitDependent":
            return t.numberFormat === "fraction" ? "numeric" : "decimal";
          default:
            return "text";
        }
      },
      handleCompositionStart: () => {
        i.value.isComposing = !0;
      },
      handleCompositionEnd: (l) => {
        i.value.isComposing = !1, i.value.isTyping = !1;
        const r = l.target, h = s(r.value, !1);
        e("validation", h, t.id), a(h) && (e("update:value", h.value), i.value.lastValidValue = String(h.value ?? ""));
      },
      handlePaste: (l) => {
        if (!n.value) return;
        const r = l.clipboardData?.getData("text")?.trim() || "";
        if (t.type === "unitDependent" && t.numberFormat === "fraction") {
          const h = r.replace(/[""'']/g, "").replace(/\s+/g, " ");
          if (!za(h)) {
            l.preventDefault(), e("validation", {
              value: h,
              valid: !1,
              message: `Pasted text "${r}" is not a valid fraction format`
            }, t.id);
            return;
          }
          if (h !== r) {
            l.preventDefault();
            const b = l.target;
            b.value = h;
            const S = s(h, !0);
            e("validation", S, t.id), e("input", h);
          }
        }
        e("paste", l);
      }
    },
    processValue: s
  };
}
function Iu({
  props: t,
  emit: e,
  isMounted: n
}) {
  const i = z({
    isTyping: !1,
    isComposing: !1,
    lastValidValue: String(t.value ?? "")
  }), s = (a) => {
    if (!t?.output || t.output === "string")
      return {
        value: a,
        valid: !0
      };
    if (t.options && t.options.length > 0) {
      let o = a;
      return t.numberFormat && (t.numberFormat === "fraction" ? o = String(a) : o = Number(a)), t.options.some((r) => r.value === o) ? {
        value: o,
        valid: !0
      } : {
        value: o,
        valid: !1,
        message: "invalid_option"
      };
    }
    return {
      value: a,
      valid: !0
    };
  };
  return {
    state: i,
    processValue: s,
    handleSelectChange: (a) => {
      if (!n.value) return;
      const o = a.target;
      if (t.multiEdit && o.value === " ") {
        e("update:value", null);
        return;
      }
      const l = s(o.value);
      e("validation", l, t.id), l.valid && e("update:value", l.value);
    }
  };
}
function Au({
  props: t,
  emit: e,
  isMounted: n
}) {
  return {
    handleCheckboxChange: (i) => {
      if (!n.value) return;
      const a = i.target.checked ? t.trueValue : t.falseValue;
      if (a === void 0) {
        console.warn("Checkbox true/false values not properly configured");
        return;
      }
      e("update:value", a);
    },
    handleFocus: (i) => {
      n.value && e("focus", i);
    },
    handleBlur: (i) => {
      n.value && e("blur", i);
    }
  };
}
const Ou = ["id", "name", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Lu = /* @__PURE__ */ lt({
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
  setup(t, { emit: e }) {
    const n = t, i = e, s = z(!0), a = z(null), o = F(() => n.value === n.trueValue), {
      handleCheckboxChange: l,
      handleFocus: r,
      handleBlur: h
    } = Au({
      props: n,
      emit: i,
      isMounted: s
    });
    return (b, S) => (O(), D("input", {
      id: n.id,
      name: n.name || n.id,
      ref_key: "inputRef",
      ref: a,
      type: "checkbox",
      checked: o.value,
      disabled: n.readonly || n.disabled,
      required: n.required,
      "aria-label": n.ariaLabel,
      "aria-invalid": !!n.issue,
      "aria-describedby": n.errorId,
      onChange: S[0] || (S[0] = //@ts-ignore
      (...p) => I(l) && I(l)(...p)),
      onFocus: S[1] || (S[1] = //@ts-ignore
      (...p) => I(r) && I(r)(...p)),
      onBlur: S[2] || (S[2] = //@ts-ignore
      (...p) => I(h) && I(h)(...p))
    }, null, 40, Ou));
  }
}), $u = ["for"], Ni = /* @__PURE__ */ lt({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (O(), D("label", {
      for: t.id,
      class: "input-label"
    }, [
      Sn(e.$slots, "default", {}, () => [
        ct(pe(t.label), 1)
      ])
    ], 8, $u));
  }
}), Fu = ["id", "disabled", "aria-label"], Tu = { class: "multiselect__text" }, Eu = {
  key: 0,
  class: "multiselect__dropdown"
}, Nu = ["checked", "disabled", "onChange"], Mu = { class: "multiselect__option-label" }, Bu = {
  key: 1,
  class: "multiselect__no-results"
}, Vu = /* @__PURE__ */ lt({
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
  setup(t, { emit: e }) {
    const n = t, i = e, s = z(!1), a = z(null), o = z(null), l = z(""), r = F(() => {
      const M = n.value;
      return M ? Array.isArray(M) ? new Set(M.map(String)) : new Set(String(M).split(",").filter(Boolean)) : /* @__PURE__ */ new Set();
    }), h = F(() => n.options.map((M) => ({
      value: M.value,
      label: M.label ?? String(M.value),
      hidden: M.hidden ?? !1,
      disabled: M.disabled ?? !1
    }))), b = F(() => {
      if (!l.value) return h.value;
      const M = l.value.toLowerCase();
      return h.value.filter(
        (E) => (E.label ?? String(E.value)).toLowerCase().includes(M)
      );
    }), S = F(() => {
      const M = r.value.size;
      if (M === 0) return n.placeholder || "All";
      if (M === 1) {
        const E = [...r.value][0];
        return h.value.find((G) => String(G.value) === E)?.label || E;
      }
      return `${M} selected`;
    });
    function p() {
      n.disabled || (s.value = !s.value, s.value && (l.value = "", n.searchable && Ct(() => o.value?.focus())));
    }
    function $(M) {
      const E = String(M), V = new Set(r.value);
      V.has(E) ? V.delete(E) : V.add(E), i("update:value", [...V]);
    }
    function C(M) {
      a.value && !a.value.contains(M.target) && (s.value = !1);
    }
    return An(() => document.addEventListener("click", C)), ol(() => document.removeEventListener("click", C)), (M, E) => (O(), D("div", {
      class: "multiselect",
      ref_key: "rootRef",
      ref: a
    }, [
      K("button", {
        type: "button",
        class: "multiselect__trigger",
        id: n.id,
        disabled: n.disabled,
        "aria-label": n.ariaLabel,
        onClick: p
      }, [
        K("span", Tu, pe(S.value), 1)
      ], 8, Fu),
      s.value ? (O(), D("div", Eu, [
        n.searchable ? Wi((O(), D("input", {
          key: 0,
          ref_key: "searchRef",
          ref: o,
          "onUpdate:modelValue": E[0] || (E[0] = (V) => l.value = V),
          type: "text",
          class: "multiselect__search",
          placeholder: "Search...",
          onClick: E[1] || (E[1] = Vs(() => {
          }, ["stop"]))
        }, null, 512)), [
          [ll, l.value]
        ]) : ae("", !0),
        (O(!0), D(it, null, gt(b.value, (V) => (O(), D("label", {
          key: V.value,
          class: je(["multiselect__option", { "multiselect__option--zero": V.hidden }])
        }, [
          K("input", {
            type: "checkbox",
            checked: r.value.has(String(V.value)),
            disabled: V.disabled,
            onChange: (G) => $(V.value)
          }, null, 40, Nu),
          K("span", Mu, pe(V.label), 1)
        ], 2))), 128)),
        n.searchable && b.value.length === 0 ? (O(), D("div", Bu, " No matches ")) : ae("", !0)
      ])) : ae("", !0)
    ], 512));
  }
}), Du = /* @__PURE__ */ Hn(Vu, [["__scopeId", "data-v-75036be8"]]), ju = ["id", "name", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Ru = ["disabled", "selected"], Gu = {
  key: 0,
  value: " "
}, qu = ["hidden", "value", "disabled"], _u = /* @__PURE__ */ lt({
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
  setup(t, { emit: e }) {
    const n = t, i = e, s = z(!0), a = z(null), o = F(() => n.options.map((r) => ({
      value: r.value,
      label: r.label?.toUpperCase() ?? r.value?.toString()?.toUpperCase(),
      hidden: r.hidden ?? !1,
      disabled: r.disabled ?? !1
    }))), {
      handleSelectChange: l
    } = Iu({
      props: n,
      emit: i,
      isMounted: s
    });
    return (r, h) => (O(), D("select", xn(r.$attrs, {
      id: n.id,
      name: n.name || n.id,
      ref_key: "inputRef",
      ref: a,
      value: n.value,
      disabled: n.readonly || n.disabled,
      required: n.required,
      "aria-label": n.ariaLabel,
      "aria-invalid": !!n.issue,
      "aria-describedby": n.errorId,
      onChange: h[0] || (h[0] = //@ts-ignore
      (...b) => I(l) && I(l)(...b))
    }), [
      K("option", {
        value: "",
        disabled: n.selectFirstOptionDisabled,
        selected: !n.value
      }, pe(n.text?.select?.toUpperCase() ?? "SELECT"), 9, Ru),
      n.multiEdit ? (O(), D("option", Gu, pe(n.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : ae("", !0),
      (O(!0), D(it, null, gt(o.value, (b) => (O(), D("option", {
        key: b.value,
        hidden: b.hidden,
        value: b.value,
        disabled: b.disabled
      }, pe(b.label), 9, qu))), 128))
    ], 16, ju));
  }
}), Uu = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "autocomplete", "aria-label", "aria-invalid", "aria-describedby"], Bs = /* @__PURE__ */ lt({
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
  setup(t, { emit: e }) {
    const n = t, i = e, s = z(!0), a = z(null), {
      handleInput: o,
      handleMouseDown: l,
      handleMouseUp: r,
      handleFocus: h,
      handleBlur: b,
      handleKeydown: S,
      handleCompositionStart: p,
      handleCompositionEnd: $,
      handlePaste: C
    } = Cu({
      props: n,
      emit: i,
      isMounted: s
    }), M = (E) => {
      const V = E.getBoundingClientRect(), G = window.getComputedStyle(E);
      return V.width > 0 && V.height > 0 && G.display !== "none" && G.visibility !== "hidden";
    };
    return An(() => {
      tt(n.default) && (n.value === void 0 || n.value === null) && i("update:value", n.default), n.focus && a.value && M(a.value) && Ct(() => a.value.focus());
    }), ci(() => {
      s.value = !1;
    }), (E, V) => (O(), D("input", xn(E.$attrs, {
      id: n.id,
      name: n.name || n.id,
      ref_key: "inputRef",
      ref: a,
      value: n.value,
      inputmode: n.inputMode,
      type: n.inputType,
      placeholder: n.placeholder,
      disabled: n.disabled,
      default: n.default,
      readonly: n.readonly,
      min: n.min,
      max: n.max,
      autocomplete: n.autocomplete,
      "aria-label": n.ariaLabel,
      "aria-invalid": !!n.issue,
      "aria-describedby": n.errorId,
      onInput: V[0] || (V[0] = //@ts-ignore
      (...G) => I(o) && I(o)(...G)),
      onFocus: V[1] || (V[1] = //@ts-ignore
      (...G) => I(h) && I(h)(...G)),
      onBlur: V[2] || (V[2] = //@ts-ignore
      (...G) => I(b) && I(b)(...G)),
      onKeydown: V[3] || (V[3] = //@ts-ignore
      (...G) => I(S) && I(S)(...G)),
      onCompositionstart: V[4] || (V[4] = //@ts-ignore
      (...G) => I(p) && I(p)(...G)),
      onCompositionend: V[5] || (V[5] = //@ts-ignore
      (...G) => I($) && I($)(...G)),
      onPaste: V[6] || (V[6] = //@ts-ignore
      (...G) => I(C) && I(C)(...G)),
      onMousedown: V[7] || (V[7] = //@ts-ignore
      (...G) => I(l) && I(l)(...G)),
      onMouseup: V[8] || (V[8] = //@ts-ignore
      (...G) => I(r) && I(r)(...G))
    }), null, 16, Uu));
  }
}), Wu = ["data-field-id"], zu = {
  key: 0,
  class: "input-label-group"
}, Hu = {
  key: 1,
  class: "password-input-wrapper"
}, Ku = ["aria-label"], Zu = ["disabled", "selected"], Ju = {
  key: 0,
  value: " "
}, Yu = ["hidden", "value", "disabled"], Xu = ["id", "name", "value", "disabled"], Qu = ["id", "name", "value", "placeholder", "disabled", "readonly", "required", "rows", "autocomplete"], ed = {
  key: 2,
  class: "help-text"
}, ii = /* @__PURE__ */ lt({
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
    info: { default: "" }
  },
  emits: ["update:value", "validation", "blur"],
  setup(t, { emit: e }) {
    const n = e, i = t, s = z(null), a = z(null), o = z(!0), l = z(i.numberFormat), r = z(!1), h = F(() => i.custom ? "custom-" + i.id : i.id), b = F(() => `${h.value}-error`), S = F(() => i.label || i.placeholder), p = F(() => H(i.type, i.numberFormat, r.value)), $ = F(() => se(i.type, i.numberFormat)), C = F(() => ["string", "integer", "float", "unitDependent", "password", "email", "tel"].includes(i.type)), M = F(() => {
      let Y = i.value;
      if (i.multiEdit && (Y === 0 || Y === 1)) return null;
      if (i.type !== "unitDependent" || !Y) return Y;
      try {
        return ve({ v: Y, nf: i.numberFormat });
      } catch {
        return i.numberFormat === "decimal" ? 0 : "0";
      }
    }), E = F(() => i.options.map((Y) => ({
      value: Y.value,
      label: Y.label || Y.value?.toString(),
      hidden: Y.hidden || !1,
      disabled: Y.disabled || !1
    }))), V = F(() => E.value.map((Y) => {
      const ce = Y.label ? ke(Y.label) : Y.value?.toString();
      return {
        ...Y,
        // Translate the label key first, then uppercase the translated result
        label: ce?.toUpperCase() || Y.value?.toString().toUpperCase()
      };
    })), G = F(() => ({
      input: !0,
      issue: i.issue || !o.value,
      warning: i.warning,
      required: i.required,
      disabled: i.disabled
    })), Z = F(() => ({
      id: h.value,
      name: i.name,
      value: i.value,
      disabled: i.disabled,
      readonly: i.readonly,
      required: i.required,
      "aria-label": S.value,
      "aria-invalid": !!i.issue,
      "aria-describedby": i.issue ? b.value : void 0
    })), he = F(() => ({
      ...Z.value,
      type: i.type,
      inputMode: $.value,
      inputType: p.value,
      placeholder: i.placeholder,
      allowZero: i.allowZero,
      min: i.min,
      max: i.max,
      focus: i.focus,
      numberFormat: i.numberFormat,
      default: i.default,
      disableRequiredValidation: i.disableRequiredValidation,
      autocomplete: i.autocomplete
    })), T = F(() => ({
      ...Z.value,
      trueValue: i.trueValue,
      falseValue: i.falseValue
    })), N = F(() => ({
      ...Z.value,
      options: V.value,
      selectFirstOptionDisabled: i.selectFirstOptionDisabled,
      multiEdit: i.multiEdit,
      numberFormat: i.numberFormat,
      text: i.text,
      output: i.output
    })), ee = F(() => (i.text?.select || "SELECT").toUpperCase()), w = F(() => (i.text?.delete || "DELETE").toUpperCase()), j = (Y) => {
      a.value = Y;
    }, x = (Y) => i.label && i.enableLabel && i.labelPosition === Y, H = (Y, ce, Ce) => {
      switch (Y) {
        case "integer":
        case "float":
          return "number";
        case "unitDependent":
          return ce === "fraction" ? "text" : "number";
        case "password":
          return Ce ? "text" : "password";
        case "email":
          return "email";
        case "tel":
          return "tel";
        default:
          return "text";
      }
    }, se = (Y, ce) => {
      if (Y === "unitDependent")
        return ce === "fraction" ? "text" : "decimal";
      switch (Y) {
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
    }, re = (Y) => {
      n("update:value", Y);
    }, oe = (Y, ce) => {
      Y.valid === void 0 || Y.valid === !0 ? (o.value = !0, n("validation", s.value, Y)) : Y.valid === !1 && Y.message && (o.value = !1, console.warn(`Field validation error for field ${ce} - ${Y.message}`), n("validation", s.value, Y));
    }, Be = () => {
      n("blur");
    };
    return Ke(() => i.numberFormat, (Y, ce) => {
      if (i.shouldConvertNumberFormat !== !1) {
        if (i.type === "unitDependent" && Y !== ce && i.value !== null && i.value !== void 0 && i.value !== "")
          try {
            const Ce = ve({ v: i.value, nf: Y });
            n("update:value", Ce);
          } catch {
            n("update:value", Y === "decimal" ? 0 : "0");
          }
        l.value = Y;
      }
    }), (Y, ce) => (O(), D("div", {
      ref_key: "fieldRef",
      ref: s,
      class: je(["input-wrapper", G.value]),
      "data-field-id": h.value
    }, [
      t.type === "checkbox" ? (O(), D("div", zu, [
        x("first") ? (O(), Ae(Ni, {
          key: 0,
          id: h.value,
          label: t.label,
          required: t.required
        }, {
          default: wn(() => [
            Sn(Y.$slots, "label", {}, () => [
              ct(pe(t.label), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ae("", !0),
        t.type === "checkbox" ? (O(), Ae(Lu, xn({
          key: 1,
          ref: j,
          type: "checkbox"
        }, T.value, {
          value: t.value,
          "onUpdate:value": ce[0] || (ce[0] = (Ce) => n("update:value", Ce))
        }), null, 16, ["value"])) : ae("", !0),
        x("last") ? (O(), Ae(Ni, {
          key: 2,
          id: h.value,
          label: t.label,
          required: t.required
        }, {
          default: wn(() => [
            Sn(Y.$slots, "label", {}, () => [
              ct(pe(t.label), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ae("", !0)
      ])) : (O(), D(it, { key: 1 }, [
        x("first") ? (O(), Ae(Ni, {
          key: 0,
          id: h.value,
          label: t.label,
          required: t.required
        }, {
          default: wn(() => [
            Sn(Y.$slots, "label", {}, () => [
              ct(pe(t.label), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ae("", !0),
        t.type === "password" ? (O(), D("div", Hu, [
          Ge(Bs, xn({ ref: j }, he.value, {
            name: i.name,
            "input-type": p.value,
            "input-mode": $.value,
            value: M.value,
            "disable-required-validation": t.disableRequiredValidation,
            onValidation: oe,
            "onUpdate:value": re,
            onBlur: Be
          }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"]),
          K("button", {
            type: "button",
            class: "password-toggle c-btn--unstyled",
            "aria-label": r.value ? "Hide password" : "Show password",
            onClick: ce[1] || (ce[1] = (Ce) => r.value = !r.value)
          }, pe(r.value ? "🙈" : "👁"), 9, Ku)
        ])) : C.value ? (O(), Ae(Bs, xn({
          key: 2,
          ref: j
        }, he.value, {
          name: i.name,
          "input-type": p.value,
          "input-mode": $.value,
          value: M.value,
          "disable-required-validation": t.disableRequiredValidation,
          onValidation: oe,
          "onUpdate:value": re,
          onBlur: Be
        }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"])) : t.type === "select" ? (O(), Ae(_u, xn({
          key: 3,
          ref: j
        }, N.value, {
          name: i.name,
          "onUpdate:value": ce[2] || (ce[2] = (Ce) => n("update:value", Ce))
        }), {
          default: wn(() => [
            K("option", {
              value: "",
              disabled: t.selectFirstOptionDisabled,
              selected: !t.value
            }, pe(ee.value), 9, Zu),
            t.multiEdit ? (O(), D("option", Ju, pe(w.value), 1)) : ae("", !0),
            (O(!0), D(it, null, gt(V.value, (Ce) => (O(), D("option", {
              key: Ce.value,
              hidden: Ce.hidden,
              value: Ce.value,
              disabled: Ce.disabled
            }, pe(Ce.label), 9, Yu))), 128))
          ]),
          _: 1
        }, 16, ["name"])) : t.type === "multiselect" ? (O(), Ae(Du, {
          key: 4,
          ref: j,
          id: h.value,
          name: i.name,
          value: t.value,
          options: E.value,
          disabled: t.disabled,
          readonly: t.readonly,
          "aria-label": S.value,
          placeholder: t.placeholder,
          searchable: i.searchable,
          "onUpdate:value": ce[3] || (ce[3] = (Ce) => n("update:value", Ce))
        }, null, 8, ["id", "name", "value", "options", "disabled", "readonly", "aria-label", "placeholder", "searchable"])) : t.type === "color" ? (O(), D("input", {
          key: 5,
          id: h.value,
          name: i.name || h.value,
          ref: j,
          type: "color",
          value: t.value,
          disabled: t.disabled,
          onInput: ce[4] || (ce[4] = (Ce) => n("update:value", Ce.target.value))
        }, null, 40, Xu)) : t.type === "textarea" ? (O(), D("textarea", {
          key: 6,
          id: h.value,
          name: i.name || h.value,
          ref: j,
          value: t.value,
          placeholder: t.placeholder,
          disabled: t.disabled,
          readonly: t.readonly,
          required: t.required,
          rows: t.rows,
          autocomplete: t.autocomplete,
          onInput: ce[5] || (ce[5] = (Ce) => n("update:value", Ce.target.value)),
          onBlur: Be
        }, null, 40, Qu)) : ae("", !0),
        x("last") ? (O(), Ae(Ni, {
          key: 7,
          id: h.value,
          label: t.label,
          required: t.required
        }, {
          default: wn(() => [
            Sn(Y.$slots, "label", {}, () => [
              ct(pe(t.label), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ae("", !0)
      ], 64)),
      t.info ? (O(), D("small", ed, pe(t.info), 1)) : ae("", !0),
      Sn(Y.$slots, "default")
    ], 10, Wu));
  }
}), td = {
  name: "ObjectViewer",
  props: {
    data: {
      type: Array,
      required: !0
    },
    paths: {
      type: Array,
      required: !0
    },
    root: {
      type: Boolean,
      default: !0
    },
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      expanded: {},
      hasScroll: !1,
      atBottom: !0
    };
  },
  created() {
    this.data.forEach((t, e) => {
      this.expanded[e] = this.root || this.data.length === 1;
    });
  },
  mounted() {
    this.$nextTick(() => this.checkScroll());
  },
  methods: {
    checkScroll() {
      const t = this.$refs.container;
      t && (this.hasScroll = t.scrollHeight > t.clientHeight, this.atBottom = t.scrollTop + t.clientHeight >= t.scrollHeight - 10);
    },
    handleScroll() {
      this.checkScroll();
    },
    toggle(t) {
      this.expanded[t] = !this.expanded[t], this.$nextTick(() => this.checkScroll());
    },
    copyToClipboard(t, e) {
      const n = JSON.stringify({ [e]: t }, null, 2);
      navigator.clipboard.writeText(n);
    },
    getValueType(t) {
      return t === null ? "null" : Array.isArray(t) ? "array" : typeof t;
    },
    isObjectOrArray(t) {
      return t && typeof t == "object";
    },
    isSimpleArray(t) {
      return Array.isArray(t) && t.every((e) => !e || typeof e != "object");
    },
    getArrayPaths(t, e) {
      return Array.isArray(t) ? t.map((n, i) => i) : [e];
    },
    formatValue(t) {
      return t === null ? "null" : t === void 0 ? "undefined" : typeof t == "boolean" ? t.toString() : typeof t != "object" ? typeof t == "string" ? `'${t}'` : String(t) : "";
    }
  }
}, nd = {
  key: 0,
  class: "title"
}, id = ["onClick"], sd = { class: "ov-label" }, ad = {
  key: 0,
  class: "ov-count"
}, od = ["onClick"], ld = { class: "ov-body" }, rd = {
  key: 0,
  class: "ov-row"
}, cd = { class: "ov-key" }, ud = ["onClick"], dd = {
  key: 0,
  class: "ov-inline-array"
}, fd = ["onClick"], pd = {
  key: 2,
  class: "ov-null"
}, hd = { key: 3 };
function gd(t, e, n, i, s, a) {
  const o = On("ObjectViewer", !0);
  return O(), D("div", {
    ref: "container",
    class: je(["smartcut-object-viewer main", { "has-scroll": s.hasScroll, "at-bottom": s.atBottom }]),
    onScroll: e[0] || (e[0] = (...l) => a.handleScroll && a.handleScroll(...l))
  }, [
    n.title ? (O(), D("div", nd, pe(n.title), 1)) : ae("", !0),
    (O(!0), D(it, null, gt(n.data, (l, r) => (O(), D("div", {
      key: r,
      class: "ov-node"
    }, [
      K("div", {
        class: "ov-header",
        onClick: (h) => a.toggle(r)
      }, [
        (O(), D("svg", {
          class: je(["ov-chevron", { "is-open": s.expanded[r] }]),
          width: "10",
          height: "10",
          viewBox: "0 0 10 10"
        }, [...e[1] || (e[1] = [
          K("path", {
            d: "M3 1 L7 5 L3 9",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])], 2)),
        K("span", sd, pe(n.paths[r] ?? r), 1),
        a.isObjectOrArray(l) ? (O(), D("span", ad, pe(Object.keys(l).length), 1)) : ae("", !0),
        K("span", {
          class: "ov-copy",
          title: "Copy as JSON",
          onClick: Vs((h) => a.copyToClipboard(l, n.paths[r] ?? r), ["stop"])
        }, [...e[2] || (e[2] = [
          K("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 16 16",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            K("rect", {
              x: "5",
              y: "5",
              width: "9",
              height: "9",
              rx: "1"
            }),
            K("path", { d: "M3 11 H2 a1 1 0 0 1-1-1 V2 a1 1 0 0 1 1-1 h8 a1 1 0 0 1 1 1 v1" })
          ], -1)
        ])], 8, od)
      ], 8, id),
      Wi(K("div", ld, [
        a.isObjectOrArray(l) ? (O(!0), D(it, { key: 1 }, gt(l, (h, b) => (O(), D("div", {
          key: b,
          class: "ov-row"
        }, [
          K("span", cd, pe(b) + ":", 1),
          a.isObjectOrArray(h) && h !== null && !a.isSimpleArray(h) ? (O(), D("span", {
            key: 0,
            class: "ov-copy ov-copy-inline",
            title: "Copy all as JSON",
            onClick: (S) => a.copyToClipboard(h, b)
          }, [...e[3] || (e[3] = [
            K("svg", {
              width: "10",
              height: "10",
              viewBox: "0 0 16 16",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              K("rect", {
                x: "5",
                y: "5",
                width: "9",
                height: "9",
                rx: "1"
              }),
              K("path", { d: "M3 11 H2 a1 1 0 0 1-1-1 V2 a1 1 0 0 1 1-1 h8 a1 1 0 0 1 1 1 v1" })
            ], -1)
          ])], 8, ud)) : ae("", !0),
          K("span", {
            class: je(["ov-val", a.getValueType(h)])
          }, [
            a.isSimpleArray(h) ? (O(), D("span", dd, [
              ct(" [" + pe(h.map((S) => a.formatValue(S)).join(", ")) + "] ", 1),
              K("span", {
                class: "ov-copy ov-copy-inline",
                title: "Copy as JSON",
                onClick: (S) => a.copyToClipboard(h, b)
              }, [...e[4] || (e[4] = [
                K("svg", {
                  width: "10",
                  height: "10",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  K("rect", {
                    x: "5",
                    y: "5",
                    width: "9",
                    height: "9",
                    rx: "1"
                  }),
                  K("path", { d: "M3 11 H2 a1 1 0 0 1-1-1 V2 a1 1 0 0 1 1-1 h8 a1 1 0 0 1 1 1 v1" })
                ], -1)
              ])], 8, fd)
            ])) : a.isObjectOrArray(h) && h !== null ? (O(), Ae(o, {
              key: 1,
              data: Array.isArray(h) ? h : [h],
              paths: a.getArrayPaths(h, b),
              root: !1
            }, null, 8, ["data", "paths"])) : h === null ? (O(), D("span", pd, "null")) : (O(), D("span", hd, pe(a.formatValue(h)), 1))
          ], 2)
        ]))), 128)) : (O(), D("div", rd, [
          K("span", {
            class: je(["ov-val", a.getValueType(l)])
          }, pe(a.formatValue(l)), 3)
        ]))
      ], 512), [
        [Ds, s.expanded[r]]
      ])
    ]))), 128))
  ], 34);
}
const ho = /* @__PURE__ */ Hn(td, [["render", gd]]), md = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: ho }, Symbol.toStringTag, { value: "Module" })), vd = {
  key: 0,
  class: "action-bar"
}, bd = { class: "add-custom" }, yd = ["disabled"], wd = { class: "c-field-action extras-field-group" }, Sd = ["disabled", "title", "onClick"], kd = {
  key: 0,
  class: "price"
}, xd = {
  key: 0,
  class: "price-label"
}, Pd = /* @__PURE__ */ lt({
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
    displayNames: { default: () => ({}) },
    locations: { default: () => [] },
    locationGroups: { default: () => [] },
    getPrice: {},
    formatPrice: {},
    getAvailablePricingOptions: {},
    findExtrasPrice: {},
    debug: { type: Boolean, default: !1 }
  },
  emits: ["update-all", "set", "custom-name-added", "custom-name-deleted"],
  setup(t, { emit: e }) {
    const i = t, s = e, {
      mode: a,
      shouldShowAll: o,
      supportsFaces: l,
      supportsSides: r,
      canDelete: h,
      getLocationLabel: b,
      getInputType: S,
      getInputConfigForLocation: p,
      getSelectOptions: $,
      getPriceDisplay: C,
      shouldShowDeleteButton: M,
      getLocationGroup: E,
      isLocationVisible: V,
      handleInputChange: G,
      handleDelete: Z
    } = qr({
      shape: Ot(i, "shape"),
      extraType: i.extraType,
      allOptions: Ot(i, "allOptions"),
      labels: i.labels,
      userFriendlyFieldMap: i.userFriendlyFieldMap,
      allowCustomNames: i.allowCustomNames,
      customNames: Ot(i, "customNames"),
      enablePricing: i.enablePricing,
      pricing: i.pricing,
      displayNames: Ot(i, "displayNames"),
      orientationModel: i.orientationModel,
      stockGrain: i.stockGrain,
      getAvailablePricingOptions: i.getAvailablePricingOptions,
      getPrice: i.getPrice,
      formatPrice: i.formatPrice,
      findExtrasPrice: i.findExtrasPrice,
      locations: Ot(i, "locations"),
      locationGroups: Ot(i, "locationGroups")
    }), {
      newCustomName: he,
      canAddCustomName: T,
      isActionMenuDisabled: N,
      customNameActions: ee,
      handleAddCustomName: w,
      handleCustomNameAction: j
    } = _r({
      extraType: i.extraType,
      customNames: Ot(i, "customNames"),
      usedNames: Ot(i, "usedNames"),
      allowCustomNames: i.allowCustomNames,
      getSelectOptions: $,
      onCustomNameAdded: (J) => s("custom-name-added", i.extraType, J),
      onCustomNameDeleted: (J) => s("custom-name-deleted", i.extraType, J)
    }), {
      renderLocations: x,
      getInputId: H,
      getDeleteConfig: se
    } = Ur({
      extraType: i.extraType,
      allOptions: i.allOptions,
      labels: i.labels,
      shapeIndex: i.shapeIndex || 0,
      enablePricing: i.enablePricing,
      shouldShowAll: o,
      getInputType: S,
      getInputConfig: (J, le) => p(J, le),
      getAllInputConfig: (J) => p("all", J),
      getInputConfigForLocation: p,
      canDelete: h,
      getLocationLabel: b,
      shouldShowDeleteButton: M,
      locations: Ot(i, "locations"),
      locationGroups: Ot(i, "locationGroups"),
      shape: Ot(i, "shape"),
      orientationModel: i.orientationModel
    }), re = z(!1), oe = F(() => (J) => {
      const le = E(J);
      return le === "all" || le === "faces" || le === "sides";
    }), Be = F(() => (J) => qi(i.extraType).includes(J) ? si(J) === "face" : !1), Y = F(() => (J) => qi(i.extraType).includes(J) ? si(J) === "side" : !1), ce = (J) => {
      const le = C(J);
      return !!le && le !== "N/A";
    }, Ce = F(() => (J) => i.shape.issues?.some((le) => le.category?.includes("extras") && le.field?.some((ge) => ge[0] === "extras" && ge[1] === i.extraType && ge[2] === J)) ?? !1);
    return An(() => {
      const le = i.shape.extras?.[i.extraType];
      if (!le || typeof le != "object") {
        re.value = !0, console.error(`Missing or invalid ${i.extraType} in shape`);
        return;
      }
      if (l.value && !("faces" in le)) {
        re.value = !0, console.error(`Missing faces property in ${i.extraType}`);
        return;
      }
      if (r.value && !("sides" in le)) {
        re.value = !0, console.error(`Missing sides property in ${i.extraType}`);
        return;
      }
    }), (J, le) => {
      const ge = On("FontAwesomeIcon");
      return re.value ? ae("", !0) : (O(), D("div", {
        key: 0,
        class: je(["extras group", [t.extraType]]),
        style: Lt({ "grid-column-end": "span " + t.partColumns })
      }, [
        t.allowCustomNames ? (O(), D("div", vd, [
          K("div", bd, [
            Ge(Bs, {
              id: `${t.extraType}-custom-input-${t.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: I(he),
              placeholder: `Add ${t.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": le[0] || (le[0] = ($e) => he.value = $e || ""),
              onKeydown: rl(I(w), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            K("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !I(T),
              onClick: le[1] || (le[1] = //@ts-ignore
              (...$e) => I(w) && I(w)(...$e))
            }, " Add ", 8, yd)
          ]),
          Ge(Pu, {
            "menu-items": I(ee),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: I(N),
            onAction: I(j)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : ae("", !0),
        K("div", {
          class: "inputs extras-grid grid-layout",
          style: Lt({ "grid-template-columns": t.enablePricing ? "1fr max-content" : "1fr" })
        }, [
          (O(!0), D(it, null, gt(I(x), ($e) => (O(), D(it, { key: $e }, [
            I(V)($e) ? (O(), D(it, { key: 0 }, [
              K("div", wd, [
                K("label", {
                  class: je(["extras-location-label", {
                    "group-label": oe.value($e),
                    "face-label": Be.value($e),
                    "side-label": Y.value($e),
                    "has-validation-issue": Ce.value($e)
                  }])
                }, pe(I(b)($e)), 3),
                (O(!0), D(it, null, gt(t.allOptions, (It, nt) => (O(), Ae(ii, xn({
                  key: `${$e}-${nt}`,
                  id: I(H)($e, nt),
                  "data-field": `${t.extraType}-${$e}`,
                  "data-index": t.shapeIndex,
                  "data-option-index": nt
                }, { ref_for: !0 }, I(p)($e, nt), {
                  "onUpdate:value": (ze) => I(G)($e, nt, ze)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"]))), 128)),
                I(se)($e).show ? (O(), D("button", {
                  key: 0,
                  type: "button",
                  class: "c-btn c-btn--delete",
                  disabled: !I(se)($e).enabled,
                  title: I(se)($e).ariaLabel,
                  onClick: (It) => I(Z)($e)
                }, [
                  Ge(ge, { icon: ["fass", "trash"] })
                ], 8, Sd)) : ae("", !0)
              ]),
              t.enablePricing ? (O(), D("div", kd, [
                ct(pe(I(C)($e)), 1),
                t.priceLabel && ce($e) ? (O(), D("span", xd, pe(t.priceLabel), 1)) : ae("", !0)
              ])) : ae("", !0)
            ], 64)) : ae("", !0)
          ], 64))), 128))
        ], 4),
        i.debug ? (O(), Ae(ho, {
          key: 1,
          title: `${t.extraType} debug`,
          data: [{
            extraType: t.extraType,
            mode: I(a),
            allOptions: i.allOptions,
            labels: i.labels,
            pricing: i.pricing,
            displayNames: i.displayNames,
            enablePricing: i.enablePricing,
            shapeMaterial: i.shape?.material,
            shapeStockDbId: i.shape?.stock?.db_id,
            hasGetPrice: !!i.getPrice,
            hasFindExtrasPrice: !!i.findExtrasPrice,
            locationsProp: i.locations,
            locationGroupsProp: i.locationGroups
          }],
          paths: [`${t.extraType}`],
          root: !1
        }, null, 8, ["title", "data", "paths"])) : ae("", !0)
      ], 6));
    };
  }
}), xs = /* @__PURE__ */ Hn(Pd, [["__scopeId", "data-v-c335bf5d"]]);
let kt = null;
function Cd(t, e) {
  return kt = Ad(t, e), kt;
}
function go(t) {
  if (!kt) throw new Error("Pagination not initialized");
  return {
    items: F(() => kt.getItems(t)),
    currentPage: F(() => kt.getCurrentPage(t)),
    currentIndex: F(() => kt.getCurrentIndex(t)),
    totalPages: F(() => kt.paginatedArrays.value.get(t)?.totalPages || 0),
    itemsPerPage: F(() => kt.getItemsPerPage(t)),
    resetPagination: () => kt.resetPagination(t),
    nextPage: () => kt.nextPage(t),
    previousPage: () => kt.previousPage(t),
    goToPage: (e) => kt.goToPage(t, e),
    setItemsPerPage: (e) => kt.setItemsPerPage(t, e)
  };
}
function Id(t, e) {
  const n = go(t);
  return n.setItemsPerPage(e), n;
}
function Ad(t, e) {
  const n = /* @__PURE__ */ new Map(), i = z({}), s = (T, N) => {
    if ("value" in N) {
      const ee = e[T]?.alwaysInclude;
      Ke(
        () => {
          const w = N.value;
          return ee ? w.filter((j) => !ee(j)).length : w.length;
        },
        (w, j) => {
          const x = i.value[T];
          if (!x) return;
          const H = Math.ceil(w / x.itemsPerPage);
          if (w > j) {
            const se = Math.ceil(w / x.itemsPerPage), re = x.currentPage * x.itemsPerPage;
            w > re && x.currentPage < se && (x.currentPage = se);
          } else w < j && x.currentPage > H && (x.currentPage = Math.max(1, H));
        },
        { immediate: !1 }
      );
    }
  };
  Object.entries(t).forEach(([T, N]) => {
    const ee = e[T];
    if (!ee)
      throw new Error(`Missing pagination options for array: ${T}`);
    n.set(T, N), i.value[T] = {
      currentPage: ee.initialPage || 1,
      itemsPerPage: ee.itemsPerPage
    }, s(T, N);
  });
  const a = (T, N) => {
    const ee = i.value[T];
    if (!ee) return;
    const w = o(T);
    ee.currentPage = Math.max(1, Math.min(N, w));
  }, o = (T) => {
    const N = n.get(T);
    if (!N) return 0;
    const ee = I(N), w = i.value[T];
    if (!w) return 0;
    const j = e[T], x = j?.alwaysInclude ? ee.filter((H) => !j.alwaysInclude(H)) : ee;
    return Math.max(1, Math.ceil(x.length / w.itemsPerPage));
  }, l = F(() => {
    const T = /* @__PURE__ */ new Map();
    return n.forEach((N, ee) => {
      const w = I(N), j = Array.isArray(w) ? w : [], x = i.value[ee], H = e[ee], se = H?.alwaysInclude ? j.filter(H.alwaysInclude) : [], re = H?.alwaysInclude ? j.filter((Ce) => !H.alwaysInclude(Ce)) : j, oe = Math.ceil(re.length / x.itemsPerPage), Be = (x.currentPage - 1) * x.itemsPerPage, Y = Be + x.itemsPerPage, ce = [
        ...se,
        ...re.slice(Be, Y)
      ];
      T.set(ee, {
        items: ce,
        currentPage: x.currentPage,
        totalPages: oe,
        isLastPage: x.currentPage >= oe,
        hasNextPage: x.currentPage < oe,
        hasPreviousPage: x.currentPage > 1
      });
    }), T;
  });
  return {
    paginatedArrays: l,
    addArray: (T, N, ee) => {
      n.set(T, N), i.value[T] = {
        currentPage: ee.initialPage || 1,
        itemsPerPage: ee.itemsPerPage
      }, e[T] = ee, s(T, N);
    },
    removeArray: (T) => {
      n.delete(T);
      const N = { ...i.value };
      delete N[T], i.value = N;
    },
    hasArray: (T) => n.has(T),
    clearArrays: () => {
      n.clear(), i.value = {};
    },
    goToPage: a,
    nextPage: (T) => {
      const N = i.value[T];
      N && a(T, N.currentPage + 1);
    },
    previousPage: (T) => {
      const N = i.value[T];
      N && a(T, N.currentPage - 1);
    },
    resetPagination: (T) => {
      if (T) {
        const N = i.value[T];
        N && (N.currentPage = 1);
      } else
        Object.values(i.value).forEach((N) => {
          N.currentPage = 1;
        });
    },
    getCurrentPage: (T) => i.value[T]?.currentPage || 1,
    getCurrentIndex: (T) => {
      const N = i.value[T];
      return N ? (N.currentPage - 1) * N.itemsPerPage : 0;
    },
    getItemsPerPage: (T) => {
      const N = i.value[T];
      if (!N) throw new Error(`No pagination state found for key: ${T}`);
      return N.itemsPerPage;
    },
    setItemsPerPage: (T, N) => {
      const ee = i.value[T];
      ee && (ee.itemsPerPage = N, a(T, ee.currentPage));
    },
    getStartIndex: (T) => {
      const N = i.value[T];
      return N ? (N.currentPage - 1) * N.itemsPerPage : 0;
    },
    getItems: (T) => l.value.get(T)?.items || []
  };
}
const Od = {
  key: 0,
  class: "menu pagination"
}, Ld = { class: "c-btn-group" }, $d = { class: "pagination-info font-sm" }, Fd = /* @__PURE__ */ lt({
  __name: "Pagination",
  props: {
    arrayKey: {},
    disabled: { type: Boolean, default: !1 },
    maxPage: { default: 0 },
    itemsPerPage: { default: 20 }
  },
  setup(t) {
    const e = t, { currentPage: n, totalPages: i, goToPage: s } = Id(e.arrayKey, e.itemsPerPage), a = () => {
      e.disabled || n.value === 1 || s(1);
    }, o = () => {
      e.disabled || n.value === 1 || s(n.value - 1);
    }, l = () => {
      e.disabled || n.value >= i.value || e.maxPage > 0 && n.value >= e.maxPage || s(n.value + 1);
    }, r = () => {
      if (e.disabled || n.value >= i.value || e.maxPage > 0 && n.value >= e.maxPage) return;
      const h = e.maxPage > 0 ? Math.min(e.maxPage, i.value) : i.value;
      s(h);
    };
    return (h, b) => {
      const S = On("FontAwesomeIcon");
      return I(i) > 1 ? (O(), D("div", Od, [
        K("div", Ld, [
          K("button", {
            type: "button",
            class: je(["c-btn first", { disabled: t.disabled || I(n) === 1 }]),
            onClick: a
          }, [
            Ge(S, { icon: ["fass", "chevrons-left"] }),
            ct(pe(I(ke)("pagination.first")), 1)
          ], 2),
          K("button", {
            type: "button",
            class: je(["c-btn prev", { disabled: t.disabled || I(n) === 1 }]),
            onClick: o
          }, [
            Ge(S, { icon: ["fass", "chevron-left"] }),
            ct(pe(I(ke)("pagination.previous")), 1)
          ], 2),
          K("button", {
            type: "button",
            class: je(["c-btn next", { disabled: t.disabled || I(n) >= I(i) || t.maxPage > 0 && I(n) >= t.maxPage }]),
            onClick: l
          }, [
            ct(pe(I(ke)("pagination.next")), 1),
            Ge(S, { icon: ["fass", "chevron-right"] })
          ], 2),
          K("button", {
            type: "button",
            class: je(["c-btn last", { disabled: t.disabled || I(n) >= I(i) || t.maxPage > 0 && I(n) >= t.maxPage }]),
            onClick: r
          }, [
            ct(pe(I(ke)("pagination.last")), 1),
            Ge(S, { icon: ["fass", "chevrons-right"] })
          ], 2)
        ]),
        K("div", $d, pe(I(ke)("pagination.page")) + " " + pe(I(n)) + " / " + pe(I(i)), 1)
      ])) : ae("", !0);
    };
  }
});
function Td(t) {
  const e = z({
    key: null,
    function: null,
    sortingKey: null,
    definition: null
  }), n = z("asc"), i = z(!1), s = (l, r) => l == null && r == null ? 0 : l == null ? 1 : r == null ? -1 : typeof l == "string" && typeof r == "string" ? l.localeCompare(r) : typeof l == "number" && typeof r == "number" ? l - r : String(l).localeCompare(String(r)), a = (l) => typeof l == "function" ? (e.value = { ...e.value, function: l, key: null, sortingKey: null }, l) : typeof l == "string" && l in Bi ? (e.value = { ...e.value, sortingKey: l, key: null, function: null }, Bi[l]) : Array.isArray(l) ? (e.value = { ...e.value, definition: l, key: null, function: null, sortingKey: null }, Ml(l)) : (e.value = { ...e.value, key: l, function: null, sortingKey: null }, (r, h) => {
    const b = r[l], S = h[l];
    return s(b, S);
  });
  return {
    sort: (l) => {
      const r = typeof l == "function" && l === e.value.function || typeof l == "string" && l in Bi && l === e.value.sortingKey || Array.isArray(l) && JSON.stringify(l) === JSON.stringify(e.value.definition) || l === e.value.key;
      i.value ? r ? n.value = n.value === "asc" ? "desc" : "asc" : n.value = "desc" : (n.value = "desc", i.value = !0);
      const h = a(l);
      t.value.sort((b, S) => {
        const p = h(b, S);
        return n.value === "desc" ? -p : p;
      }), vt(t);
    },
    key: F(() => e.value.key),
    direction: F(() => n.value),
    sortingKey: F(() => e.value.sortingKey),
    sortFn: F(() => e.value.function),
    definition: F(() => e.value.definition)
  };
}
const Ed = (t) => ![
  "AA",
  "AD",
  // Area Ascending/Descending
  "AAID",
  "ADID",
  // Area with ID
  "ID",
  "IDDesc",
  // ID Ascending/Descending
  "WDLD",
  "WALA",
  // Width/Length combinations
  "LDWD",
  "LAWA",
  // Length/Width combinations
  "WD",
  "LD"
  // Single dimension sorts
].includes(t), Nd = { class: "label" }, Md = { class: "c-btn-group" }, Bd = ["onClick"], Vd = ["onClick"], Dd = ["onClick"], jd = /* @__PURE__ */ lt({
  __name: "Sorting",
  props: {
    list: {},
    disabled: { type: Boolean, default: !1 },
    sortFunctions: { default: () => [] },
    sortKeys: { default: () => [] },
    objectKeys: { default: () => [] },
    label: { default: "" }
  },
  setup(t) {
    const e = t, { sort: n, key: i, direction: s, sortingKey: a, sortFn: o } = Td(e.list), l = (b) => b.replace(/([A-Z])/g, " $1").replace(/^./, (S) => S.toUpperCase()).trim(), r = (b) => b.replace(/([A-Z])/g, " $1").replace(/^./, (S) => S.toUpperCase()).trim(), h = (b) => {
      e.disabled || n(b);
    };
    return (b, S) => {
      const p = On("FontAwesomeIcon");
      return O(), D("div", {
        class: je(["menu sorting", { disabled: t.disabled }])
      }, [
        K("div", Nd, pe(e.label), 1),
        K("div", Md, [
          (O(!0), D(it, null, gt(t.sortKeys, ($) => (O(), D("button", {
            type: "button",
            key: $.key,
            class: je(["c-btn", {
              selected: I(a) === $.key
            }]),
            onClick: (C) => h($.key)
          }, [
            I(a) === $.key && I(Ed)($.key) ? (O(), Ae(p, {
              key: 0,
              icon: ["fass", I(s) === "asc" ? "chevron-up" : "chevron-down"]
            }, null, 8, ["icon"])) : ae("", !0),
            ct(" " + pe($.label || l($.key)), 1)
          ], 10, Bd))), 128)),
          (O(!0), D(it, null, gt(t.objectKeys, ($) => (O(), D("button", {
            type: "button",
            key: $.key,
            class: je(["c-btn", {
              selected: I(i) === $.key
            }]),
            onClick: (C) => h($.key)
          }, [
            I(i) === $.key ? (O(), Ae(p, {
              key: 0,
              icon: ["fass", I(s) === "asc" ? "chevron-up" : "chevron-down"]
            }, null, 8, ["icon"])) : ae("", !0),
            ct(" " + pe($.label || r($.key)), 1)
          ], 10, Vd))), 128)),
          (O(!0), D(it, null, gt(t.sortFunctions, ($, C) => (O(), D("button", {
            type: "button",
            key: C,
            class: je(["c-btn", {
              selected: I(o) === $.function
            }]),
            onClick: (M) => h($.function)
          }, [
            I(o) === $.function ? (O(), Ae(p, {
              key: 0,
              icon: ["fass", I(s) === "asc" ? "chevron-up" : "chevron-down"]
            }, null, 8, ["icon"])) : ae("", !0),
            ct(" " + pe($.label || `${t.label} ${C + 1}`), 1)
          ], 10, Dd))), 128))
        ])
      ], 2);
    };
  }
}), Rd = {
  key: 1,
  class: "active-stock-info"
}, Gd = {
  key: 0,
  style: { color: "grey" }
}, qd = ["onMousedown"], _d = {
  key: 0,
  class: "stack font-sm"
}, Ud = { class: "name" }, Wd = /* @__PURE__ */ lt({
  __name: "Navigation",
  props: {
    useStack: { type: Boolean, default: !0 },
    display: { type: Boolean, default: !0 },
    flipY: { type: Boolean, default: !1 },
    showSorting: { type: Boolean, default: !0 }
  },
  emits: ["show"],
  setup(t, { emit: e }) {
    const { r: n, stackedStock: i, activeStock: s } = zi(), { items: a } = go("stockList"), o = Tn(() => import("./Diagram--hDBz00I.js")), l = Tn(() => import("./StockNavigation-CgI17AXU.js")), r = z(null), h = z(null), b = z(null), S = t, p = z(0), { stop: $ } = Da(r, cl((Z) => {
      const he = Z[0], { width: T } = he.contentRect;
      T > 0 && (p.value = T);
    }, 100)), C = F(() => {
      const Z = s.value;
      if (!Z) return "";
      const he = [Z.id];
      return Z.name && he.push(Z.name), Z.material && he.push(Z.material), he.join(" • ");
    }), M = F(() => {
      const T = Math.floor((p.value + 10) / 210);
      return Math.max(T, 1);
    }), E = (Z) => {
      let he = "";
      return Z.t && (he = Z.t.toString()), Z.name ? `${Z.id}: ${Z.name.toUpperCase()}${he ? "-" + he : ""}` : Z.material ? `${Z.id}: ${Z.material.toUpperCase()}${he ? "-" + he : ""}` : Z.id;
    }, V = e, G = (Z) => {
      V("show", Z);
    };
    return ci(() => $()), (Z, he) => S.display ? (O(), D("div", {
      key: 0,
      id: "navigation",
      ref_key: "navigationRef",
      ref: r
    }, [
      S.showSorting ? (O(), Ae(jd, {
        key: 0,
        list: I(n).stockList,
        label: "Sort stock",
        "object-keys": [{ key: "id", label: "ID" }, { key: "l", label: "Length" }, { key: "w", label: "Width" }]
      }, null, 8, ["list"])) : ae("", !0),
      I(s) ? (O(), D("div", Rd, [
        ct(pe(C.value) + " ", 1),
        I(s).code ? (O(), D("div", Gd, pe(I(s).code), 1)) : ae("", !0)
      ])) : ae("", !0),
      p.value <= 900 ? (O(), Ae(I(l), {
        key: 2,
        ref_key: "stockNavigationRef",
        ref: h,
        "stock-list": I(i),
        embed: !1,
        "use-stack": S.useStack,
        "active-stock-id": I(n).activeStockAutoId.value,
        onShowStock: G
      }, null, 8, ["stock-list", "use-stack", "active-stock-id"])) : ae("", !0),
      p.value > 900 ? (O(), D("div", {
        key: 3,
        id: "navigation-wrapper",
        style: Lt({ gridTemplateColumns: `repeat(${M.value}, 1fr)` })
      }, [
        (O(!0), D(it, null, gt(I(a), (T, N) => (O(), D("div", {
          key: T.autoId,
          onMousedown: (ee) => G(T.autoId),
          class: je({ selected: T.autoId === I(n).activeStockAutoId.value })
        }, [
          typeof T?.stack?.number == "number" && T.stack.number > 1 ? (O(), D("div", _d, pe(T.stack.number), 1)) : ae("", !0),
          Ge(I(o), {
            "element-id": `nav-diagram-${N}`,
            main: !1,
            "stock-auto-id": T.autoId,
            "flip-y": S.flipY
          }, null, 8, ["element-id", "stock-auto-id", "flip-y"]),
          K("div", Ud, pe(E(T)), 1)
        ], 42, qd))), 128))
      ], 4)) : ae("", !0),
      p.value > 900 ? (O(), Ae(Fd, {
        key: 4,
        ref_key: "paginationRef",
        ref: b,
        "array-key": "stockList",
        "items-per-page": 10
      }, null, 512)) : ae("", !0)
    ], 512)) : ae("", !0);
  }
}), zd = {
  name: "Spinner",
  props: {
    size: {
      type: Number,
      default: 100
    },
    showNumber: {
      type: Boolean,
      default: !0
    },
    number: {
      type: Number,
      default: 0
    },
    complete: {
      type: Boolean,
      default: !1
    }
  }
}, Hd = { id: "spinner" }, Kd = ["width", "height"], Zd = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function Jd(t, e, n, i, s, a) {
  return O(), D("div", Hd, [
    n.complete ? ae("", !0) : (O(), D("svg", {
      key: 0,
      class: "loading",
      style: Lt({ width: n.size + "px", height: n.size + "px" }),
      width: n.size,
      height: n.size,
      viewBox: "0 0 300 300"
    }, [...e[0] || (e[0] = [
      ul('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ])], 12, Kd)),
    n.complete ? (O(), D("svg", {
      key: 1,
      class: "complete",
      style: Lt({ width: n.size + "px", height: n.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[1] || (e[1] = [
      K("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ])], 4)) : ae("", !0),
    n.showNumber ? (O(), D("div", Zd, pe(n.number), 1)) : ae("", !0)
  ]);
}
const Fa = /* @__PURE__ */ Hn(zd, [["render", Jd]]), Yd = { id: "mini-stock-nav" }, Xd = ["onMousedown"], Qd = { class: "id" }, ef = /* @__PURE__ */ lt({
  __name: "StockNavigation",
  props: {
    stockList: {
      type: Array,
      default: () => []
    },
    primaryColor: {
      type: String,
      default: ""
    },
    secondaryColor: {
      type: String,
      default: ""
    },
    activeStockId: {
      type: String,
      default: null
    }
  },
  emits: ["show-stock"],
  setup(t, { emit: e }) {
    const n = t, i = e, s = (a) => {
      i("show-stock", a);
    };
    return (a, o) => (O(), D("div", Yd, [
      (O(!0), D(it, null, gt(n.stockList, (l, r) => (O(), D("button", {
        type: "button",
        key: r,
        class: je(["c-btn c-btn--col-4 c-btn--sm", { selected: l.autoId === n.activeStockId }]),
        style: Lt({
          backgroundColor: l.autoId === n.activeStockId ? "#" + n.secondaryColor : "#" + n.primaryColor
        }),
        onMousedown: (h) => s(l.autoId)
      }, [
        K("div", Qd, pe(r + 1), 1),
        Wi(K("div", { class: "stack" }, pe(l.stack.number), 513), [
          [Ds, typeof l?.stack?.number == "number" && l.stack.number > 1]
        ])
      ], 46, Xd))), 128))
    ]));
  }
}), Ta = z({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function mo() {
  return {
    progress: Ta,
    reset: () => {
      Ta.value = {
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
const tf = gr(() => ft({
  // Full stock - purchase entire sheet without cutting (first field after ID)
  fullStock: Xt(
    Ye().default(!1),
    {
      label: "fields.fullStock",
      propertyPath: "fullStock",
      group: "properties",
      order: -1
    }
  ),
  // Material field
  material: Xt(
    Fe().optional(),
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
  t: Xt(
    mr([Cn(), Fe()]).optional(),
    {
      label: "fields.t",
      propertyPath: "t",
      group: "dimensions",
      order: 0,
      allowZero: !1
    }
  ),
  // Length field
  l: ta({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !1
  }),
  // Width field
  w: ta({
    label: "fields.w",
    placeholder: "fields.w",
    allowZero: !1
  }),
  // Quantity field
  q: Xt(
    Cn().int().positive().default(1),
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
  name: Bl({
    placeholder: "fields.name"
  }),
  // Orientation lock field
  orientationLock: Xt(
    Ja(["n", "l", "w"]).default("n").optional(),
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
  banding: Xt(
    Ye().default(!1),
    {
      label: "fields.banding",
      propertyPath: "banding",
      group: "extras",
      order: 0
    }
  ),
  // Finish options
  finish: Xt(
    ft({
      enabled: Ye().default(!1),
      type: Fe().optional(),
      sides: Cn().optional()
    }).optional(),
    {
      label: "fields.finish",
      propertyPath: "finish",
      group: "extras",
      order: 2
    }
  ),
  // Machining options
  machining: Xt(
    ft({
      enabled: Ye().default(!1),
      operations: at(rt()).optional()
    }).optional(),
    {
      label: "fields.machining",
      propertyPath: "machining",
      group: "extras",
      order: 3
    }
  ),
  // Planing button
  planing: Xt(
    Ye().default(!1),
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
function nf(t) {
  const e = tf._def.getter();
  return t === "linear" ? e.omit({
    orientationLock: !0,
    banding: !0,
    machining: !0,
    planing: !0
  }) : t === "roll" ? e.omit({
    banding: !0,
    machining: !0,
    planing: !0
  }) : e;
}
class sf {
  /**
   * Generate field metadata from a Zod schema
   * @param schema - The Zod schema to extract fields from
   * @param options - Options for field generation
   */
  generateFields(e, n) {
    const i = [], s = this.unwrapSchema(e);
    if (!this.isZodObject(s))
      return console.warn("Schema is not a ZodObject:", s), i;
    const a = s.shape;
    for (const [o, l] of Object.entries(a)) {
      if (o.startsWith("_") || this.isComputedField(l))
        continue;
      if (o === "trim" && this.isTrimField(l)) {
        const h = this.generateTrimFields(l);
        i.push(...h);
        continue;
      }
      const r = this.extractFieldMetadata(o, l);
      r && i.push(r);
    }
    return n?.sortByOrder ? i.sort((o, l) => (o.order || 999) - (l.order || 999)) : i;
  }
  /**
   * Extract metadata from a single field
   */
  extractFieldMetadata(e, n) {
    let i = n._metadata;
    const s = this.unwrapField(n);
    if (i || (i = s._metadata), i) {
      if (i.hidden)
        return null;
      const r = {
        name: e,
        type: i.type || this.getFieldType(s),
        label: i.label || this.formatLabel(e),
        description: i.description,
        required: !this.isOptional(n),
        defaultValue: i.defaultValue ?? this.getDefaultValue(n),
        ...i
      };
      return this.extractTypeSpecificMetadata(r, s), r;
    }
    const a = s._def?.description, o = this.parseFieldDescription(a), l = {
      name: e,
      type: this.getFieldType(s),
      label: o.label || this.formatLabel(e),
      description: o.description,
      required: !this.isOptional(n),
      defaultValue: this.getDefaultValue(n),
      ...o
    };
    return this.extractTypeSpecificMetadata(l, s), l;
  }
  /**
   * Get the field type from a Zod schema
   */
  getFieldType(e) {
    const n = this.unwrapField(e);
    if (n instanceof la) {
      const i = n._def?.options || [];
      for (const s of i)
        if (s instanceof Li)
          return this.isIntegerNumber(s) ? "integer" : "number";
    }
    return n instanceof Li ? this.isIntegerNumber(n) ? "integer" : "number" : n instanceof vr ? "string" : n instanceof br ? "boolean" : n instanceof ra || n._def?.typeName === "ZodNativeEnum" ? "enum" : n instanceof yr ? "array" : n instanceof $i ? "object" : "string";
  }
  /**
   * Extract constraints from a ZodNumber schema
   */
  extractNumberConstraints(e, n) {
    const i = n;
    if (i.minValue !== void 0 && i.minValue !== -1 / 0) {
      e.min = i.minValue;
      const a = n._def?.checks?.find(
        (o) => o.constructor?.name === "$ZodCheckGreaterThan"
      );
      if (a && i.minValue === 0) {
        const o = a._zod?.def?.inclusive ?? a.inclusive;
        e.allowZero = o === !0;
      } else
        e.allowZero = i.minValue === 0;
    }
    i.maxValue !== void 0 && i.maxValue !== 1 / 0 && (e.max = i.maxValue);
    const s = n._def?.checks || [];
    for (const a of s) {
      let o, l, r = !0;
      if (a.kind)
        o = a.kind, l = a.value, r = a.inclusive !== void 0 ? a.inclusive : !0;
      else if (a?._zod?.def) {
        const h = a._zod.def;
        o = h.check, l = h.value, r = h.inclusive !== void 0 ? h.inclusive : !0;
      } else
        continue;
      o === "min" || o === "greater_than" ? e.min === void 0 && (e.min = o === "greater_than" && !r ? l + 1e-6 : l, e.allowZero = e.min === 0) : o === "max" || o === "less_than" ? e.max === void 0 && (e.max = o === "less_than" && !r ? l - 1e-6 : l) : o === "int" && (e.step = 1);
    }
  }
  /**
   * Extract type-specific metadata
   */
  extractTypeSpecificMetadata(e, n) {
    if (n instanceof la) {
      const i = n._def?.options || [];
      for (const s of i)
        if (s instanceof Li) {
          this.extractNumberConstraints(e, s), e.type = "number";
          break;
        }
    } else n instanceof Li && this.extractNumberConstraints(e, n);
    if (!e.options) {
      if (n instanceof ra) {
        const i = n._def?.values;
        Array.isArray(i) ? e.options = i.map((s) => ({
          value: s,
          label: this.formatLabel(String(s))
        })) : i ? e.options = Object.values(i).map((s) => ({
          value: s,
          label: this.formatLabel(String(s))
        })) : e.options = [];
      }
      if (n._def?.typeName === "ZodNativeEnum") {
        const i = n._def?.values || {};
        e.options = Object.entries(i).filter(([s]) => isNaN(Number(s))).map(([s, a]) => ({
          value: a,
          label: this.formatLabel(s)
        }));
      }
    }
  }
  /**
   * Parse field description for metadata
   */
  parseFieldDescription(e) {
    if (!e) return {};
    const n = {}, i = e.match(/^(.+?)\s*\[(.+?)\]\s*$/);
    if (i) {
      n.description = i[1].trim();
      const s = i[2].split(",");
      for (const a of s) {
        const [o, l] = a.split(":").map((r) => r.trim());
        o === "group" && (n.group = l), o === "order" && (n.order = parseInt(l)), o === "units" && (n.units = l), o === "hidden" && (n.hidden = l === "true"), o === "readonly" && (n.readonly = l === "true"), o === "placeholder" && (n.placeholder = l);
      }
    } else
      n.description = e;
    return n;
  }
  /**
   * Format a field name as a label
   */
  formatLabel(e) {
    return e.replace(/([A-Z])/g, " $1").replace(/^./, (n) => n.toUpperCase()).replace(/_/g, " ").trim();
  }
  /**
   * Check if a field is optional
   */
  isOptional(e) {
    if (e instanceof bs || e instanceof ys)
      return !0;
    if (e.constructor?.name === "ZodPipe" || e._def?.type === "pipe") {
      const n = e._def?.out, i = e._def?.in;
      if (n) {
        const s = this.isOptional(n);
        if (s) return s;
      }
      if (i) {
        const s = this.isOptional(i);
        if (s) return s;
      }
    }
    return e._def?.typeName === "ZodEffects" ? this.isOptional(e._def?.schema) : e instanceof ws ? this.isOptional(e._def?.innerType) : !1;
  }
  /**
   * Check if a field is computed
   */
  isComputedField(e) {
    return e?._def?.typeName === "ZodComputed" || e?._def?.isComputed === !0;
  }
  /**
   * Unwrap schema from effects/transforms
   */
  unwrapSchema(e) {
    if (e._def?.typeName === "ZodEffects")
      return this.unwrapSchema(e._def?.schema);
    if (e._def?.typeName === "ZodLazy" || e._def?.type === "lazy") {
      const n = e._def?.getter;
      if (typeof n == "function")
        return this.unwrapSchema(n());
    }
    return e;
  }
  /**
   * Unwrap a field schema
   */
  unwrapField(e) {
    const n = e._def?.typeName, i = e.constructor.name;
    if (e instanceof bs || e instanceof ys)
      return this.unwrapField(e._def?.innerType);
    if (e instanceof ws || i === "ZodDefault")
      return this.unwrapField(e._def?.innerType);
    if (n === "ZodEffects")
      return this.unwrapField(e._def?.schema);
    if (i === "ZodPipe" || e._def?.type === "pipe") {
      const s = e._def?.out;
      if (s)
        return this.unwrapField(s);
    }
    return e;
  }
  /**
   * Get default value from schema
   */
  getDefaultValue(e) {
    if (e instanceof ws) {
      const n = e._def?.defaultValue;
      return typeof n == "function" ? n() : n;
    }
    if (e.constructor?.name === "ZodPipe" || e._def?.type === "pipe") {
      const n = e._def?.in;
      if (n)
        return this.getDefaultValue(n);
    }
    if (e instanceof bs || e instanceof ys) {
      const n = e._def?.innerType;
      if (n)
        return this.getDefaultValue(n);
    }
    if (e._def?.typeName === "ZodEffects") {
      const n = e._def?.schema;
      if (n)
        return this.getDefaultValue(n);
    }
    if ("_def" in e && "defaultValue" in e._def) {
      const n = e._def?.defaultValue;
      return typeof n == "function" ? n() : n;
    }
  }
  /**
   * Check if a ZodNumber schema has integer constraints
   */
  isIntegerNumber(e) {
    return e.isInt === !0 ? !0 : (e._def?.checks || []).some((i) => i.kind === "int");
  }
  /**
   * Check if schema is a ZodObject
   */
  isZodObject(e) {
    return e instanceof $i;
  }
  /**
   * Group fields by their group metadata
   */
  groupFields(e) {
    const n = /* @__PURE__ */ new Map(), i = [];
    for (const a of e)
      a.group ? (n.has(a.group) || n.set(a.group, []), n.get(a.group).push(a)) : i.push(a);
    const s = [];
    return n.forEach((a, o) => {
      s.push({
        name: o,
        label: this.formatLabel(o),
        fields: a.sort((l, r) => (l.order || 999) - (r.order || 999))
      });
    }), i.length > 0 && s.push({
      name: "general",
      label: "General",
      fields: i.sort((a, o) => (a.order || 999) - (o.order || 999))
    }), s.sort((a, o) => (a.order || 999) - (o.order || 999));
  }
  /**
   * Check if a field is a trim object (has l1, l2, w1, w2 properties)
   */
  isTrimField(e) {
    const n = this.unwrapField(e);
    if (n instanceof $i) {
      const i = n.shape;
      return "l1" in i && "l2" in i && "w1" in i && "w2" in i;
    }
    return !1;
  }
  /**
   * Generate individual field metadata for trim sides (l1, l2, w1, w2)
   */
  generateTrimFields(e) {
    const n = [], i = this.unwrapField(e);
    if (!(i instanceof $i))
      return n;
    const s = i.shape, a = ["l1", "l2", "w1", "w2"];
    for (const o of a)
      if (o in s) {
        const l = s[o], r = this.extractFieldMetadata(`trim.${o}`, l);
        r && (r.propertyPath = `trim.${o}`, r.name = `trim.${o}`, r.group || (r.group = "trim"), n.push(r));
      }
    return n;
  }
}
const Ea = new sf();
function af(t, e = {}) {
  const n = z([]), i = z([]), s = z(/* @__PURE__ */ new Map()), a = z(/* @__PURE__ */ new Map()), o = ($) => {
    let C = Ea.generateFields(t);
    e.overrides && (C = C.map((E) => {
      const V = e.overrides[E.name];
      if (V) {
        const G = { ...E, ...V };
        return V.min === void 0 && E.min !== void 0 && (G.min = E.min), V.max === void 0 && E.max !== void 0 && (G.max = E.max), G;
      }
      return E;
    })), a.value.clear();
    for (const E of C)
      a.value.set(E.name, E);
    const M = $ || e.allowedFieldIds;
    if (M && M.length > 0) {
      const E = M, V = /* @__PURE__ */ new Map();
      for (const Z of C)
        V.set(Z.name, Z);
      const G = [];
      for (const Z of E) {
        const he = V.get(Z);
        he && G.push(he);
      }
      C = G;
    }
    e.filter && (C = C.filter(e.filter)), n.value = C, s.value.clear();
    for (const E of C)
      s.value.set(E.name, E);
    e.grouped && (i.value = Ea.groupFields(C));
  };
  o();
  const l = ($) => s.value.get($), r = ($) => a.value.get($), h = () => a.value, b = ($, C) => {
    const M = s.value.get($);
    M && Object.assign(M, C);
  }, S = ($) => {
    const C = l($);
    return !(!C || C.hidden);
  }, p = ($) => {
    const C = l($);
    if (!C) return {};
    const M = {};
    return C.required && (M.required = !0), C.type === "number" && (C.min !== void 0 && (M.min = C.min), C.max !== void 0 && (M.max = C.max)), M;
  };
  return {
    fields: F(() => n.value),
    groups: F(() => i.value),
    fieldMap: F(() => s.value),
    allFieldsMap: F(() => a.value),
    getField: l,
    getFieldMetadata: r,
    getAllFieldMetadata: h,
    updateField: b,
    isFieldVisible: S,
    getFieldValidation: p,
    regenerateFields: o
  };
}
function of(t) {
  const { stockType: e, materials: n = [], minDimension: i = 0 } = t, s = nf(e), a = {
    // Add minimum dimensions for length/width
    l: {
      min: i,
      w: "1fr"
      // Full width for length field
    },
    w: {
      min: i,
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
  return n.length > 0 && (a.material = {
    ...a.material,
    type: "enum",
    options: n.map((o) => ({ value: o.name, label: o.name })),
    defaultValue: n[0]?.name
  }), af(s, {
    ...t,
    overrides: { ...a, ...t.overrides }
  });
}
const { progress: Qt, reset: Na } = mo();
function lf(t) {
  const e = "https://api.cutlistevo.com/";
  let n;
  const i = () => {
    n = wr(e, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), n.on("connect", () => {
      t.refs?.connected && (t.refs.connected.value = !0), t.callbacks?.onConnect?.();
    }), n.on("connect_error", (o) => {
      t.refs?.connected && (t.refs.connected.value = !1), t.refs?.thinking && (t.refs.thinking.value = !1), t.callbacks?.onConnectError?.(o);
    }), n.on("connect_timeout", (o) => {
      t.refs?.connected && (t.refs.connected.value = !1), t.refs?.thinking && (t.refs.thinking.value = !1), t.callbacks?.onConnectError?.(o);
    }), n.on("result", (o) => {
      Qt.value.complete = !0, t.callbacks?.onResult?.(o), n.disconnect();
    }), n.on("queued", () => {
      Na(), Qt.value.queued = !0;
    }), n.on("started", () => {
      Qt.value.started = !0;
    }), n.on("progress", (o) => {
      o?.data?.message === "result" ? Qt.value.resultCount++ : (Qt.value.stockCount = o.data.stockCount, Qt.value.shapeCount = o.data.shapeCount), o?.data?.phase && (Qt.value.phase = o.data.phase), o?.data?.placed !== void 0 && (Qt.value.placed = o.data.placed, Qt.value.total = o.data.total);
    }), n.on("user", (o) => {
      t.callbacks?.onUser?.(o);
    }), n.on("error", (o) => {
      t.refs?.thinking && (t.refs.thinking.value = !1), Na(), t.callbacks?.onError?.(o);
    });
  }, s = () => n?.disconnect(), a = () => n?.connect();
  return i(), {
    socket: n,
    connect: a,
    disconnect: s
  };
}
class vn extends Error {
  constructor(e, n) {
    super(e), this.code = n, this.name = "FormulaError";
  }
}
class Gs {
  url;
  spec;
  // private formulaCache: FormulaCache = new Map();
  // Update the evaluate method to use the type guard
  evaluate(e, n = {}) {
    if (typeof e == "number" || typeof e == "boolean") return e;
    if (typeof e == "string") {
      if (this.isStringLiteral(e))
        return e.slice(1, -1);
      if (e.includes("."))
        return this.resolveNestedVariable(e, n);
      if (!(e in n))
        throw new Error(`Undefined variable: ${e}`);
      return n[e];
    }
    const { operation: i, operands: s } = e;
    if (!i)
      throw new Error("Invalid formula structure");
    if (!this.isFormulaOperation(i))
      throw new Error(`Invalid operation: ${i}`);
    if (i === "ternary") {
      const l = this.evaluate(e.condition, n), r = this.evaluate(e.trueExpr, n), h = this.evaluate(e.falseExpr, n);
      return l ? r : h;
    }
    if (i === "!") {
      if (!s || !Array.isArray(s) || s.length !== 1)
        throw new Error("Invalid unary NOT expression");
      return !this.evaluate(s[0], n);
    }
    if (!s || !Array.isArray(s) || s.length !== 2)
      throw new Error("Invalid formula structure");
    const [a, o] = s.map((l) => this.evaluate(l, n));
    return [">", "<", ">=", "<=", "=="].includes(i) ? this.evaluateComparison(i, a, o) : i === "&&" || i === "||" ? this.operations[i](a, o) : this.operations[i](a, o);
  }
  /**
   * Resolve nested variable access via dot-notation
   * e.g., "extras.banding.sides.l1" -> variables.extras.banding.sides.l1
   */
  resolveNestedVariable(e, n) {
    const i = e.split(".");
    let s = n;
    for (const a of i) {
      if (s == null)
        return;
      if (typeof s != "object" || !(a in s)) {
        if (e in n)
          return n[e];
        throw new Error(`Undefined variable: ${e}`);
      }
      s = s[a];
    }
    return s;
  }
  // Update the operations object to use the FormulaOperation type
  operations = {
    add: (e, n) => e + n,
    subtract: (e, n) => e - n,
    multiply: (e, n) => e * n,
    divide: (e, n) => {
      if (n === 0) throw new vn("Division by zero", "DIVISION_BY_ZERO");
      return e / n;
    },
    ">": (e, n) => e > n,
    "<": (e, n) => e < n,
    ">=": (e, n) => e >= n,
    "<=": (e, n) => e <= n,
    "==": (e, n) => e === n,
    "&&": (e, n) => e && n,
    "||": (e, n) => e || n
  };
  // Update getOperation to use the type guard
  getOperation(e) {
    const i = {
      "+": "add",
      "-": "subtract",
      "*": "multiply",
      "/": "divide",
      ">": ">",
      "<": "<",
      ">=": ">=",
      "<=": "<=",
      "==": "==",
      "&&": "&&",
      "||": "||",
      "!": "!",
      "?:": "ternary"
    }[e];
    if (!this.isFormulaOperation(i))
      throw new Error(`Unsupported operator: ${e}`);
    return i;
  }
  precedence = {
    "||": 1,
    "&&": 2,
    "+": 4,
    "-": 4,
    "*": 5,
    "/": 5,
    "!": 6,
    ">": 3,
    "<": 3,
    ">=": 3,
    "<=": 3,
    "==": 3,
    "?": 2,
    ":": 2
  };
  constructor({ url: e = null, spec: n = null }) {
    e && (this.url = e), n && (this.spec = n);
  }
  isFormulaOperation(e) {
    return ["add", "subtract", "multiply", "divide", ">", "<", ">=", "<=", "==", "&&", "||", "!", "ternary"].includes(e);
  }
  isFormula(e) {
    return typeof e == "string" && e.startsWith("=");
  }
  stripFormulaPrefix(e) {
    return e.substring(1);
  }
  evaluateValue(e, n, i = {}) {
    return typeof e == "number" || !this.isFormula(e) ? e : this.evaluateFormula(this.stripFormulaPrefix(e), n, i);
  }
  extractDependencies(e) {
    const n = /* @__PURE__ */ new Set();
    if (typeof e == "string") {
      const i = Array.from(e.matchAll(/panels\.(\w+)\.([lwt])/g));
      for (const o of i)
        n.add(`${o[1]}.${o[2]}`);
      const s = Array.from(e.matchAll(/inputs\.(\w+)/g));
      for (const o of s)
        n.add(`input.${o[1]}`);
      const a = /* @__PURE__ */ new Set(["width", "depth", "height", "quantity"]);
      for (const o of a)
        e.includes(o) && n.add(`input.${o}`);
    }
    return n;
  }
  buildFormulaGraph(e, n) {
    const i = {
      nodes: /* @__PURE__ */ new Map(),
      edges: /* @__PURE__ */ new Map()
    }, s = (a, o) => {
      const l = `${e}.${a}`;
      i.nodes.set(l, {
        panelKey: e,
        attribute: a,
        formula: o
      }), i.edges.set(l, this.isFormula(o) ? this.extractDependencies(this.stripFormulaPrefix(o.toString())) : /* @__PURE__ */ new Set());
    };
    return s("l", n.l), s("w", n.w), s("t", n.t), s("q", n.q), i;
  }
  resolveFormulas(e, n, i, s = {}) {
    const a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = (r) => {
      if (a.has(r))
        return a.get(r);
      const [h, b] = r.split(".");
      if (!e.nodes.has(r)) {
        const M = s[h];
        if (M)
          return b === "q" ? M.q : M[b];
        throw new Error(`Node not found: ${r}`);
      }
      if (o.has(r))
        throw new Error(`Circular dependency detected at ${r}`);
      const S = e.nodes.get(r);
      if (typeof S.formula == "number")
        return a.set(r, S.formula), S.formula;
      o.add(r);
      const p = e.edges.get(r) || /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Map();
      for (const M of p)
        if (M.startsWith("input.")) {
          const E = M.split(".")[1];
          $.set(M, i[E]);
        } else
          $.set(M, l(M));
      const C = this.evaluateFormulaWithDeps(S.formula, $, i);
      return a.set(r, C), o.delete(r), C;
    };
    for (const r of e.nodes.keys())
      l(r);
    return Object.fromEntries(a);
  }
  evaluateFormulaWithDeps(e, n, i, s) {
    if (!this.isFormula(e)) return e;
    let a = this.stripFormulaPrefix(e.toString());
    return a = a.replace(
      /inputs\.(\w+)/g,
      (o, l) => i[l]?.toString() || "0"
    ), a = a.replace(
      /panels\.(\w+)\.(\w+)/g,
      (o, l, r) => {
        if (l === s?.panelKey && s[r] !== void 0)
          return s[r].toString();
        if (n.has(`${l}.${r}`))
          return n.get(`${l}.${r}`).toString();
        throw new Error(`Undefined variable in formula: ${o}`);
      }
    ), this.evaluate(this.parse(a), i);
  }
  calculatePanels(e) {
    if (!this.spec?.panels) return {};
    const n = {};
    for (const [i, s] of Object.entries(this.spec.panels)) {
      const a = this.buildFormulaGraph(i, s), o = this.resolveFormulas(a, s, e, n), l = {
        panelKey: i,
        l: o[`${i}.l`],
        w: o[`${i}.w`],
        t: o[`${i}.t`],
        q: o[`${i}.q`] || 1
      };
      n[i] = {
        name: s.name,
        material: s.material,
        bandingOptions: s.bandingOptions ?? {},
        finishOptions: s.finishOptions ?? {},
        orientationLock: s.orientationLock !== void 0 ? this.evaluateFormulaWithDeps(s.orientationLock, /* @__PURE__ */ new Map(), e, l) : void 0,
        ...l
      };
    }
    return n;
  }
  evaluateFormula(e, n, i = {}) {
    if (typeof e == "number") return e;
    if (typeof e == "string") {
      const s = e.replace(/inputs\.(\w+)/g, (o, l) => {
        if (!(l in n))
          throw new Error(`Input not found: ${l}`);
        return n[l].toString();
      }), a = s.match(/panels\.(\w+)\.(l|w|t|q)/);
      if (a) {
        const [, o, l] = a;
        if (!i[o])
          throw new Error(`Panel not found: ${o}`);
        return l === "q" ? i[o].q ?? 1 : i[o].dimensions[l];
      }
      return this.evaluate(this.parse(s), n);
    }
    throw new Error("Invalid formula type");
  }
  tokenize(e) {
    const n = /('(?:\\'|[^'])*'|[0-9.]+|>=|<=|==|!=|&&|\|\||\+|-|\*|\/|>|<|\?|:|\(|\)|!|[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)*)/g;
    return e.match(n) || [];
  }
  isValidToken(e) {
    return this.isNumber(e) || this.isVariable(e) || e in this.precedence || e === "(" || e === ")" || this.isIdentifier(e);
  }
  isIdentifier(e) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)*$/.test(e);
  }
  evaluateComparison(e, n, i) {
    switch (e) {
      case ">":
        return n > i;
      case "<":
        return n < i;
      case ">=":
        return n >= i;
      case "<=":
        return n <= i;
      case "==":
        return n === i;
      default:
        throw new Error(`Unsupported comparison operator: ${e}`);
    }
  }
  isNumber(e) {
    return !isNaN(Number(e));
  }
  isVariable(e) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)*$/.test(e);
  }
  toPostfix(e) {
    const n = [], i = [];
    for (let s = 0; s < e.length; s++) {
      const a = e[s];
      if (this.isNumber(a) || this.isStringLiteral(a) || this.isIdentifier(a))
        n.push(this.isNumber(a) ? Number(a) : a);
      else if (a === "(")
        i.push(a);
      else if (a === ")") {
        for (; i.length && i[i.length - 1] !== "("; )
          n.push(i.pop());
        if (i.length === 0)
          throw new Error("Mismatched parentheses");
        i.pop();
      } else if (a === "!") {
        for (; i.length && i[i.length - 1] !== "(" && this.precedence[i[i.length - 1]] > this.precedence[a]; )
          n.push(i.pop());
        i.push("UNARY_NOT");
      } else if (a === "?") {
        for (; i.length && this.precedence[i[i.length - 1]] > this.precedence[a]; )
          n.push(i.pop());
        i.push(a);
      } else if (a === ":") {
        for (; i.length && i[i.length - 1] !== "?"; )
          n.push(i.pop());
        if (i.length === 0)
          throw new Error("Mismatched ternary operator");
        i.pop(), i.push("?:");
      } else if (a in this.precedence) {
        for (; i.length && i[i.length - 1] !== "(" && this.precedence[i[i.length - 1]] >= this.precedence[a]; )
          n.push(i.pop());
        i.push(a);
      } else
        throw new Error(`Invalid token: ${a}`);
    }
    for (; i.length; ) {
      const s = i.pop();
      if (s === "(" || s === ")")
        throw new Error("Mismatched parentheses");
      n.push(s);
    }
    return n;
  }
  parse(e) {
    if (typeof e != "string")
      throw new Error("Parse input must be a string");
    if (!e.trim())
      throw new Error("Empty input");
    const n = this.tokenize(e), i = this.toPostfix(n);
    return this.toFormulaJSON(i);
  }
  isStringLiteral(e) {
    return /^'.*'$/.test(e);
  }
  toFormulaJSON(e) {
    const n = [];
    for (const i of e)
      if (typeof i == "number" || this.isStringLiteral(i.toString()) || this.isVariable(i.toString()))
        n.push(i);
      else if (i === "?:") {
        if (n.length < 3)
          throw new Error("Invalid ternary expression");
        const s = n.pop(), a = n.pop(), o = n.pop();
        n.push({
          operation: "ternary",
          condition: o,
          trueExpr: a,
          falseExpr: s
        });
      } else if (i === "UNARY_NOT") {
        if (n.length < 1)
          throw new Error("Invalid expression: insufficient operands for NOT");
        const s = n.pop();
        n.push({
          operation: "!",
          operands: [s]
        });
      } else {
        if (n.length < 2)
          throw new Error("Invalid expression: insufficient operands");
        const s = n.pop(), a = n.pop();
        n.push({
          operation: this.getOperation(i.toString()),
          operands: [a, s]
        });
      }
    if (n.length !== 1)
      throw new Error("Invalid expression: too many operands");
    return n[0];
  }
  calculateHardware(e) {
    return this.spec?.hardware ? Object.entries(this.spec.hardware).reduce((n, [i, s]) => {
      const a = this.evaluateValue(s.q, e);
      return n[i] = {
        name: s.name,
        q: Math.ceil(a),
        totalCost: Math.ceil(a) * s.cost
      }, n;
    }, {}) : {};
  }
  calculateAll(e) {
    this.validateInputs(e);
    const n = this.calculatePanels(e), i = this.calculateHardware(e);
    return {
      inputs: e,
      panels: n,
      hardware: i
    };
  }
  validateInputs(e) {
    if (!this.spec?.inputs) throw new vn("No input specifications defined", "NO_INPUTS");
    for (const [n, i] of Object.entries(this.spec.inputs)) {
      const s = e[n];
      if (s === void 0)
        throw new vn(`Missing required input: ${n}`, "MISSING_INPUT");
      if (s < i.min || s > i.max)
        throw new vn(`Input ${n} value ${s} out of range [min: ${i.min}, max: ${i.max}]`, "INPUT_OUT_OF_RANGE");
    }
  }
  async getSpec() {
    if (this.spec)
      return this.validateSpec(), this.spec;
    if (!this.url) return null;
    try {
      const e = await fetch(this.url);
      if (!e.ok)
        throw new Error(`HTTP error! status: ${e.status}`);
      const n = await e.json();
      return this.spec = n, this.validateSpec(), n;
    } catch (e) {
      return console.error("Error fetching or parsing JSON file:", e), null;
    }
  }
  validateSpec() {
    const e = [];
    return this.spec ? ((!this.spec.inputs || Object.keys(this.spec.inputs).length === 0) && e.push("Specification must contain inputs"), { isValid: e.length === 0, errors: e }) : (e.push("Specification is required"), { isValid: !1, errors: e });
  }
  validateFields(e) {
    if (!this.spec?.inputs)
      throw new vn("No input specifications defined", "NO_INPUTS");
    const n = Object.keys(this.spec.inputs);
    if (e.length !== n.length)
      throw new vn(`Expected ${n.length} fields, got ${e.length}`, "INVALID_FIELD_COUNT");
    let i = 0;
    for (const s of e) {
      const a = n[i], o = this.spec.inputs[a];
      if (s.value === null || s.value === void 0)
        throw new vn(`Missing value for field ${i}`, "MISSING_FIELD_VALUE");
      if (s.value < o.min || s.value > o.max)
        throw new vn(`Field ${i} value ${s.value} out of range [min: ${o.min}, max: ${o.max}]`, "FIELD_OUT_OF_RANGE");
      i++;
    }
  }
  fieldsToInputs(e) {
    const n = Object.keys(this.spec?.inputs || {});
    return e.reduce((i, s, a) => {
      const o = n[a];
      return o && (i[o] = s.value), i;
    }, {});
  }
  getEmptyFields() {
    const e = {};
    return this.spec?.inputs && Object.keys(this.spec.inputs).forEach((n, i) => {
      e[i] = { value: 0 };
    }), e;
  }
  getDefaultFields() {
    const e = {};
    return this.spec?.inputs && Object.values(this.spec.inputs).forEach((n, i) => {
      e[i] = { value: n.default };
    }), e;
  }
  calculatePanelsFromFields(e) {
    this.validateFields(e);
    const n = this.fieldsToInputs(e);
    return this.calculatePanels(n);
  }
  calculateHardwareFromFields(e) {
    this.validateFields(e);
    const n = this.fieldsToInputs(e);
    return this.calculateHardware(n);
  }
  calculateAllFromFields(e) {
    this.validateFields(e);
    const n = this.fieldsToInputs(e);
    return this.calculateAll(n);
  }
  getFieldMetadata() {
    const e = [];
    return this.spec?.inputs && Object.entries(this.spec.inputs).forEach(([n, i], s) => {
      e.push({
        index: s,
        name: n,
        label: i.label,
        type: i.type,
        min: i.min,
        max: i.max,
        default: i.default
      });
    }), e;
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
  evaluateExpression(e, n = {}) {
    const i = this.parse(e);
    return this.evaluate(i, n);
  }
  /**
   * Validate formula syntax without evaluating
   * Returns validation result with any syntax errors
   *
   * @param formula - Formula string to validate
   * @returns Object with isValid flag and error message if invalid
   */
  validateFormula(e) {
    try {
      return this.parse(e), { isValid: !0 };
    } catch (n) {
      return {
        isValid: !1,
        error: n instanceof Error ? n.message : "Invalid formula"
      };
    }
  }
}
const an = Q({
  min: U().min(0).optional(),
  max: U().min(0).optional()
}).optional(), rf = Q({
  // Location identifier (e.g., 'side.l1', 'face.a')
  location: P().min(1),
  // Dimension constraints for this location
  longSide: an,
  shortSide: an,
  t: an,
  // Formula-based validation
  formula: P().optional(),
  // Custom message for this location
  message: P().optional()
}), Ps = Q({
  // Shape dimension constraints (type-level, apply to all locations by default)
  longSide: an,
  shortSide: an,
  t: an,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: P().optional(),
  // Custom validation message (optional)
  message: P().optional(),
  // Location-specific rules (override type-level rules for specific locations)
  locations: xe(rf).optional()
}), cf = Q({
  banding: Ps.optional(),
  finish: Ps.optional(),
  planing: Ps.optional()
}).optional();
function uf(t, e) {
  try {
    const n = new Gs({}), i = n.parse(t);
    return !!n.evaluate(i, {
      longSide: e.longSide || 0,
      shortSide: e.shortSide || 0,
      t: e.t || 0
    });
  } catch (n) {
    return console.warn("Formula evaluation error:", n, "Formula:", t), !0;
  }
}
function df(t, e, n) {
  const i = t.dimension === "t" ? "thickness" : t.dimension === "longSide" ? "long side" : "short side", s = t.constraint === "min" ? "minimum" : "maximum";
  return `${t.location ? `${t.location}: ` : ""}${e.charAt(0).toUpperCase() + e.slice(1)} requires ${i} ${s} of ${t.limit} (current: ${t.value})`;
}
function ff(t, e, n) {
  if (t?.locations?.length) {
    const i = t.locations.find((s) => s.location === e);
    if (i)
      return { rule: i, message: i.message, source: "location" };
  }
  if (n?.length) {
    for (const i of n)
      if (i.rules && i.locations.includes(e))
        return { rule: i.rules, message: i.rules.message, source: "group" };
  }
  return { rule: t || {}, message: t?.message, source: "type" };
}
function pf(t, e, n, i) {
  const { rule: s, message: a, source: o } = ff(e, n, i), l = [], r = (b, S, p) => {
    S == null || p === void 0 || (p.min !== void 0 && S < p.min && l.push({
      valid: !1,
      dimension: b,
      value: S,
      constraint: "min",
      limit: p.min,
      location: n
    }), p.max !== void 0 && S > p.max && l.push({
      valid: !1,
      dimension: b,
      value: S,
      constraint: "max",
      limit: p.max,
      location: n
    }));
  };
  r("longSide", t.longSide, s.longSide), r("shortSide", t.shortSide, s.shortSide);
  const h = typeof t.t == "string" ? parseFloat(t.t) : t.t;
  return isNaN(h) || r("t", h, s.t), s.formula && (uf(s.formula, {
    longSide: t.longSide,
    shortSide: t.shortSide,
    t: h
  }) || l.push({
    valid: !1,
    dimension: "longSide",
    value: t.longSide || 0,
    constraint: "min",
    limit: 0,
    location: n
  })), {
    valid: l.length === 0,
    violations: l,
    message: a,
    source: o
  };
}
ft({
  // Context - using z.any() for complex external types
  job: rt().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: Fe().nullable().default(null).describe("Socket.io connection ID"),
  user: rt().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: rt().describe("Configuration object"),
  // Type: Config
  api: Ye().nullable().default(null).describe("API mode flag"),
  app: Ye().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: jl("Saw").describe("Saw configuration"),
  stockList: gn("Stock").default([]).describe("List of stock materials"),
  shapeList: us(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: gn("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: gn("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: gn("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: us(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: us(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: Dl,
  // Results storage
  cutList: gn("Cut").default([]).describe("List of cuts to make"),
  segmentList: gn("Segment").default([]).describe("List of segments"),
  offcuts: gn("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: gn("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: Ye().default(!1).describe("Use inventory system"),
  successMetric: Fe().default(Rl.successMetric).describe("Metric for optimization success"),
  enableEvo: Ye().default(!0).describe("Enable evolutionary algorithm"),
  weighting: _n(Fe(), rt()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: rt().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: rt().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: ft({
    placement: Cn().default(0),
    group: Cn().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: Ye().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: Ye().default(!1).describe("Run guillotine second pass"),
  runningEvo: Ye().default(!1).describe("Currently running evolution"),
  evolutionVisData: at(_n(Fe(), Sr())).default([]).describe("Evolution visualization data"),
  final: Ye().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: Ye().default(!1).describe("Has minimum spacing requirement")
});
const hf = Ja(["decimal", "fraction"]), gf = ft({
  job: rt().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Extend with autoId/entityType so they survive Zod validation for worker reconstruction
  inputSaw: Un.extend({ autoId: Fe().optional(), __entityType: Fe().optional() }),
  inputShapes: at(Wn.extend({ autoId: Fe().optional(), __entityType: Fe().optional() })),
  inputStock: at(En.extend({ autoId: Fe().optional(), __entityType: Fe().optional() })),
  inputUserGroups: at(Vl.extend({ autoId: Fe().optional(), __entityType: Fe().optional() })).optional(),
  // Number format for conversion
  numberFormat: hf.optional(),
  // Algorithm configuration
  enableEvo: Ye().default(!0),
  weighting: rt().optional(),
  successMetric: Fe().optional(),
  useInventory: Ye().default(!1),
  // Context
  socketId: Fe().optional(),
  user: rt().optional(),
  // IUser type
  // Application flags
  widget: Ye().optional(),
  api: Ye().optional(),
  app: Ye().optional(),
  domain: Fe().optional(),
  // Extras options (centralized configuration)
  extrasOptions: ft({
    banding: ft({
      options: ft({
        sides: _n(Fe(), at(Fe())).optional()
      }).optional()
    }).optional(),
    finish: ft({
      options: ft({
        faces: _n(Fe(), at(Fe())).optional()
      }).optional()
    }).optional(),
    planing: ft({
      options: ft({
        sides: _n(Fe(), at(Fe())).optional(),
        faces: _n(Fe(), at(Fe())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // API specific
  config: rt().optional(),
  v: Cn().optional(),
  // API version
  webhook: Fe().optional(),
  //source
  sourceVersion: Fe().nullish(),
  source: Fe().optional()
});
ft({
  job: rt().optional(),
  // Type: Job from BullMQ
  saw: rt(),
  // Runtime Saw instance
  shapeList: at(rt()),
  // Runtime Shape instances
  stockList: at(rt()),
  // Runtime Stock instances
  userGroups: at(rt()).optional(),
  // Runtime Group instances
  enableEvo: Ye(),
  weighting: rt().optional(),
  successMetric: Fe().optional(),
  useInventory: Ye(),
  socketId: Fe().optional(),
  user: rt().optional(),
  widget: Ye().optional(),
  api: Ye().optional(),
  app: Ye().optional(),
  domain: Fe().optional(),
  config: rt().optional(),
  v: Cn().optional(),
  webhook: Fe().optional()
});
const { addNotice: Gn } = js();
let Cs = null;
function mf() {
  return Cs || (Cs = to()), Cs;
}
function Ma(t) {
  return t.filter((e) => e?.l || e?.w);
}
async function vf(t) {
  const e = t.t, n = [];
  try {
    const { inputs: i, validateInputShapes: s, validateInputStock: a } = mf(), o = t.inputShapes ?? i.inputShapes.value, l = t.inputStock ?? i.inputStock.value, r = t.inputUserGroups ?? i.inputUserGroups?.value ?? [], h = Ma(o), b = Ma(l);
    if (h.forEach((E) => E.isNew = !1), b.forEach((E) => E.isNew = !1), !t.isAdmin && !t.shared && t.maxShapes !== 1 / 0) {
      const E = h.reduce((G, Z) => G + (Z.q || 1), 0), V = b.reduce((G, Z) => G + (Z.q || 1), 0);
      if (E > t.maxShapes || V > t.maxStock)
        return Gn({
          type: "error",
          message: e("errors.validation.above_max_parts")
        }), t.onLimit?.(), { valid: !1, issues: n };
    }
    if (!h.length)
      return Gn({
        type: "error",
        message: e("errors.validation.no_parts_list")
      }), { valid: !1, issues: n };
    if (!t.useInventory && !b.length)
      return Gn({
        type: "error",
        message: e("errors.validation.no_stock")
      }), { valid: !1, issues: n };
    let S;
    if (t.useInventory && t.selectedSaw)
      S = t.selectedSaw;
    else if (t.inputSaw instanceof en) {
      const E = t.inputSaw.validate();
      n.push(...E), S = t.inputSaw.toData();
    } else {
      S = t.inputSaw;
      const E = new Wa(S);
      n.push(...E.issues);
    }
    const p = s({
      saw: S,
      partTrim: ve({ v: t.partTrim }),
      useInventory: t.useInventory,
      inputShapesOverride: h
    });
    if (n.push(...p), t.useInventory) {
      if (t.materialStore)
        for (const E of h)
          E.material || n.push(new Ut({
            item: E,
            category: ["part"],
            message: "errors.validation.business.no_material"
          }));
    } else {
      const E = a(S);
      n.push(...E);
    }
    if (r.length > 0) {
      r.forEach((V) => V.populateParentID(h));
      const E = Gl(r, h);
      n.push(...E);
    }
    await yf(h, t, n);
    const $ = Os(n);
    if ($.length > 0) {
      const E = {
        saw: $.filter((V) => V.category?.includes("saw")),
        stock: $.filter((V) => V.category?.includes("stock")),
        part: $.filter((V) => V.category?.includes("part") && !V.category?.includes("extras")),
        extras: $.filter((V) => V.category?.includes("extras")),
        group: $.filter((V) => V.category?.includes("group"))
      };
      for (const [V, G] of Object.entries(E))
        if (G.length > 0) {
          Gn({
            type: "error",
            message: e("errors.validation.inputs_issue", { 0: V }),
            additional: G.map((Z) => e(Z.message))
          });
          break;
        }
      return { valid: !1, issues: n };
    }
    const C = {
      inputSaw: S,
      inputShapes: h.map((E) => E.toData()),
      inputStock: b.map((E) => E.toData()),
      inputGroups: r.map((E) => E.toData()),
      enableEvo: !0,
      useInventory: t.useInventory || !1
    }, M = gf.safeParse(C);
    return M.success ? {
      valid: !0,
      issues: n,
      sawData: S
    } : (console.error("[Validation] Zod validation failed:", M.error.issues), Gn({
      type: "error",
      message: e("errors.validation.invalid_data_structure"),
      additional: M.error.issues.map((E) => `${E.path.join(".")}: ${E.message}`)
    }), { valid: !1, issues: n });
  } catch (i) {
    return console.error("[Validation] error:", i), Gn({
      type: "error",
      message: e("errors.general.unexpected"),
      additional: [i?.message ?? ""]
    }), { valid: !1, issues: n };
  }
}
function bf(t, e) {
  const n = [], i = t.extras;
  if (!i) return n;
  if (e === "banding" && i.banding?.sides)
    for (const [s, a] of Object.entries(i.banding.sides))
      a !== void 0 && a !== !1 && a !== "" && n.push(`side.${s}`);
  else if (e === "finish" && i.finish?.faces)
    for (const [s, a] of Object.entries(i.finish.faces))
      a !== void 0 && a !== !1 && a !== "" && n.push(`face.${s}`);
  else if (e === "planing") {
    if (i.planing?.faces)
      for (const [s, a] of Object.entries(i.planing.faces))
        a !== void 0 && a !== !1 && a !== "" && n.push(`face.${s}`);
    if (i.planing?.sides)
      for (const [s, a] of Object.entries(i.planing.sides))
        a !== void 0 && a !== !1 && a !== "" && n.push(`side.${s}`);
  }
  return n;
}
async function yf(t, e, n) {
  if (!e.findExtrasPrice)
    return;
  const i = [
    { type: "banding", pricing: e.bandingPricing },
    { type: "finish", pricing: e.finishPricing },
    { type: "planing", pricing: e.planingPricing }
  ];
  for (const s of t)
    for (const { type: a, pricing: o } of i) {
      const l = e.getShapeExtrasPricing?.(s, a) ?? o;
      if (e.extrasValidationRules && ql.hasExtras(s, a)) {
        const b = e.extrasValidationRules?.[a], S = e.extrasLocationGroups?.[a], p = b?.locations && b.locations.length > 0, $ = S?.some((C) => C.rules);
        if (p || $) {
          const C = bf(s, a), M = (S || []).map((G) => ({
            id: G.id,
            locations: G.locations,
            rules: G.rules
          })), E = b || {}, V = /* @__PURE__ */ new Set();
          for (const G of C) {
            const Z = pf(
              s,
              E,
              G,
              M
            );
            if (!Z.valid) {
              if (Z.source === "group") {
                const he = M.find(
                  (T) => T.rules && T.locations.includes(G)
                );
                if (he && V.has(he.id))
                  continue;
                he && V.add(he.id);
              }
              if (Z.message) {
                const he = new Ut({
                  item: s,
                  category: ["part", "extras"],
                  message: Z.message,
                  field: [["extras", a, G]],
                  shouldTranslate: !1
                });
                n.push(he);
              } else
                Z.violations.forEach((he) => {
                  const T = df(he, a), N = new Ut({
                    item: s,
                    category: ["part", "extras"],
                    message: T,
                    field: [["extras", a, G]],
                    shouldTranslate: !1
                  });
                  n.push(N);
                });
            }
          }
        } else {
          const C = _l(s, a, e.extrasValidationRules);
          C.valid || C.violations.forEach((M) => {
            const E = Ul(a, M, C.message);
            n.push(new Ut({
              item: s,
              category: ["part", "extras"],
              message: E,
              field: [["extras", a]],
              shouldTranslate: !1
            }));
          });
        }
      }
      if (!l || !Object.keys(l).length)
        continue;
      const r = Wl(s, a, l, e.findExtrasPrice);
      r.valid || r.incompleteLocations.forEach((h) => {
        n.push(new Ut({
          item: s,
          category: ["part", "extras"],
          message: "errors.extras.selection_incomplete",
          params: {
            extraType: `extras.${a}`,
            // Translation key for extra type (banding, finish, planing)
            location: zl(h, { returnKey: !0 })
            // Translation key for location
          },
          field: [["extras", a, h]]
        }));
      });
    }
}
const wf = new Gs({});
function Sf(t) {
  const e = Number(t.l) || 0, n = Number(t.w) || 0, i = {
    // Core dimensions
    l: e,
    w: n,
    t: Number(t.t) || 0,
    q: Number(t.q) || 1,
    longSide: Math.max(e, n),
    shortSide: Math.min(e, n),
    // Basic properties
    material: t.material || t.selectedMaterial?.name || "",
    name: t.name || "",
    grain: t.grain || "",
    // Nested extras object for dot-notation access
    extras: {
      banding: {
        sides: {
          l1: t.extras?.banding?.sides?.l1 || "",
          l2: t.extras?.banding?.sides?.l2 || "",
          w1: t.extras?.banding?.sides?.w1 || "",
          w2: t.extras?.banding?.sides?.w2 || ""
        }
      },
      finish: {
        faces: {
          a: t.extras?.finish?.faces?.a || "",
          b: t.extras?.finish?.faces?.b || ""
        }
      },
      planing: {
        faces: {
          a: t.extras?.planing?.faces?.a || "",
          b: t.extras?.planing?.faces?.b || ""
        }
      }
    },
    // Convenience boolean flags
    hasBanding: !!(t.extras?.banding?.sides && Object.values(t.extras.banding.sides).some((s) => s)),
    hasFinish: !!(t.extras?.finish?.faces && Object.values(t.extras.finish.faces).some((s) => s)),
    hasPlaning: !!(t.extras?.planing?.faces && Object.values(t.extras.planing.faces).some((s) => s)),
    hasMachining: !!t.machining,
    // Nested machining object for dot-notation access
    machining: {
      holes: t.machining?.holes?.length || 0,
      corners: t.machining?.corners?.length || 0
    },
    // Full stock flag
    fullStock: !!t.fullStock
  };
  return i["extras.banding.sides.l1"] = i.extras.banding.sides.l1, i["extras.banding.sides.l2"] = i.extras.banding.sides.l2, i["extras.banding.sides.w1"] = i.extras.banding.sides.w1, i["extras.banding.sides.w2"] = i.extras.banding.sides.w2, i["extras.finish.faces.a"] = i.extras.finish.faces.a, i["extras.finish.faces.b"] = i.extras.finish.faces.b, i["extras.planing.faces.a"] = i.extras.planing.faces.a, i["extras.planing.faces.b"] = i.extras.planing.faces.b, i["machining.holes"] = i.machining.holes, i["machining.corners"] = i.machining.corners, i;
}
function kf(t, e) {
  const n = [], i = t.filter((s) => s.enabled !== !1);
  for (let s = 0; s < e.length; s++) {
    const a = e[s], o = Sf(a);
    for (const l of i)
      try {
        wf.evaluateExpression(l.formula, o) || n.push({
          partIndex: s,
          partName: a.name || void 0,
          ruleName: l.name || void 0,
          message: l.message
        });
      } catch (r) {
        n.push({
          partIndex: s,
          partName: a.name || void 0,
          ruleName: l.name || void 0,
          message: `Validation error: ${r instanceof Error ? r.message : "Unknown error"}`
        });
      }
  }
  return {
    valid: n.length === 0,
    errors: n
  };
}
const xf = Q({
  longSide: an,
  shortSide: an,
  t: an,
  formula: P().optional(),
  message: P().optional()
}).optional(), ji = Q({
  // Unique identifier for this group (used internally)
  id: P().min(1),
  // Display label for the group (shown in UI)
  label: P().min(1),
  // Array of location strings in this group
  // Examples: ['side.l1', 'side.l2'], ['face.a', 'face.b']
  locations: xe(P().min(1)).min(1),
  // Optional price override for this group
  // When set, this price will be used instead of calculating from individual locations
  price: U().optional(),
  // Hide individual location inputs when this group is enabled
  // When true, only shows the group control, hiding the individual face/side inputs
  hideIndividualLocations: Ie().optional().default(!1),
  // Validation rules that apply when using this group
  // These rules apply when any location in the group is selected
  rules: xf
}), Pf = Q({
  banding: xe(ji).optional(),
  finish: xe(ji).optional(),
  planing: xe(ji).optional()
}).optional(), Cf = ln(["decimal", "fraction"]), If = ln(["metric", "imperial"]), Af = ln(Kl), Ba = Xe([
  sn(0),
  sn(1),
  sn(2)
]).catch(0), Of = Q({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: P().optional(),
  partB: P().optional(),
  partSelected: P().optional(),
  stock: P().optional(),
  text: P().optional(),
  // Checkout-specific colors
  button: P(),
  buttonText: P()
}), ht = (t) => ai((e) => e ?? t, Ie()), Lf = Q({
  banding: ht(!1),
  finish: ht(!1),
  planing: ht(!1),
  orientation: ht(!0),
  diagram: ht(!0),
  focus: ht(!0),
  machining: ht(!1),
  csvImport: ht(!1),
  click: ht(!0),
  partName: ht(!0),
  progressNumber: ht(!0),
  pagination: ht(!1),
  fullStock: ht(!1),
  imageUpload: ht(!1),
  diagramNav: ht(!1),
  debug: ht(!1)
}), $f = Q({
  // Localization
  locale: P().default("en-US"),
  currency: P().default("USD"),
  apiVersion: U().min(2).default(3),
  // Unit system (metric or imperial)
  unitSystem: If.default("metric"),
  // Number formatting
  numberFormat: Cf.default("decimal"),
  decimalPlaces: U().min(0).max(10).default(2),
  fractionRoundTo: U().default(0),
  // Stock configuration
  stockSelection: Af.optional(),
  stockGrain: Hl.optional(),
  // Part configuration
  minSpacing: Ha.optional(),
  maxParts: U().min(0).default(0),
  orientationModel: Ba.default(0),
  resultOrientationModel: Ba.default(0),
  minDimension: U().min(0).default(0),
  partTrim: ai((t) => t ?? void 0, U().min(0).optional()),
  partsPerPage: ai((t) => t ?? void 0, U().min(1).default(10)),
  // UI configuration
  debug: Ie().default(!1),
  enable: Lf.default({
    banding: !1,
    finish: !1,
    planing: !1,
    orientation: !0,
    diagram: !0,
    focus: !0,
    machining: !1,
    csvImport: !1,
    click: !0,
    partName: !0,
    progressNumber: !0,
    pagination: !1,
    fullStock: !1,
    imageUpload: !1,
    diagramNav: !1,
    debug: !1
  }),
  colors: Of.default({
    button: "#118ab2",
    buttonText: "#ffffff"
  }),
  // Custom fields
  customFields: xe(We()).optional(),
  fieldOrder: ai((t) => t ?? void 0, xe(P()).optional()),
  // Extras location filtering
  bandingLocations: xe(ds).optional(),
  finishLocations: xe(ds).optional(),
  planingLocations: xe(ds).optional(),
  // Extras location groups
  extrasLocationGroups: Pf,
  // Extras validation rules
  extrasValidationRules: cf
}), ni = Q({
  min: U().min(0).nullable().optional(),
  max: U().min(0).nullable().optional()
}).nullable().optional(), Ff = Q({
  // Orientation-independent dimension constraints
  // longSide = the larger of l/w, shortSide = the smaller of l/w
  longSide: ni,
  shortSide: ni,
  // Direct dimension constraints (as stored by admin panel)
  l: ni,
  w: ni,
  t: ni,
  // Cross-dimensional rules
  // For complex scenarios like "one side must be >= 100mm, the other >= 50mm"
  crossDimensionalRule: Q({
    // At least one side must be >= primaryMin
    primaryMin: U().min(0).nullable().optional(),
    // The other side must be >= secondaryMin
    secondaryMin: U().min(0).nullable().optional()
  }).nullable().optional(),
  // Formula-based validation using JavaScript expression
  // Formula can reference: l, w, longSide, shortSide
  // Examples: "(l * w) > 100", "longSide >= 50"
  formula: P().nullable().optional(),
  // Custom validation message (optional)
  message: P().nullable().optional()
});
function Tf(t, e) {
  const n = [], i = t.l || 0, s = t.w || 0, a = t.longSide ?? Math.max(i, s), o = t.shortSide ?? Math.min(i, s), l = (r, h, b) => {
    b != null && (b.min !== void 0 && b.min !== null && h < b.min && n.push({
      valid: !1,
      dimension: r,
      value: h,
      constraint: "min",
      limit: b.min
    }), b.max !== void 0 && b.max !== null && h > b.max && n.push({
      valid: !1,
      dimension: r,
      value: h,
      constraint: "max",
      limit: b.max
    }));
  };
  if (l("longSide", a, e.longSide), l("shortSide", o, e.shortSide), l("longSide", i, e.l), l("shortSide", s, e.w), e.crossDimensionalRule) {
    const { primaryMin: r, secondaryMin: h } = e.crossDimensionalRule, b = t.l || 0, S = t.w || 0;
    if (r != null && h != null) {
      const p = b >= r && S >= h, $ = S >= r && b >= h;
      !p && !$ && n.push({
        valid: !1,
        dimension: "crossDimensional",
        constraint: "crossDimensional",
        message: e.message || `At least one side must be ≥ ${r} mm and the other side must be ≥ ${h} mm`
      });
    }
  }
  return e.formula && (Ef(e.formula, {
    l: t.l,
    w: t.w,
    longSide: t.longSide,
    shortSide: t.shortSide
  }) || n.push({
    valid: !1,
    dimension: "longSide",
    value: t.longSide || 0,
    constraint: "min",
    limit: 0,
    message: e.message || "Part does not meet validation requirements"
  })), {
    valid: n.length === 0,
    violations: n
  };
}
function Ef(t, e) {
  try {
    const n = new Gs({}), i = n.parse(t);
    return !!n.evaluate(i, {
      l: e.l || 0,
      w: e.w || 0,
      longSide: e.longSide || 0,
      shortSide: e.shortSide || 0
    });
  } catch (n) {
    return console.warn("Formula evaluation error:", n, "Formula:", t), !0;
  }
}
function Nf(t) {
  if (t.message)
    return t.message;
  if (t.constraint === "crossDimensional")
    return t.message || "Part dimensions do not meet requirements";
  const e = t.dimension === "longSide" ? "long side" : t.dimension === "shortSide" ? "short side" : t.dimension, n = t.constraint === "min" ? "minimum" : "maximum";
  return `Part requires ${e} ${n} of ${t.limit} (current: ${t.value})`;
}
ln([
  "full_stock",
  "part_area",
  "cut_length",
  "full_stock_plus_cut_length",
  "full_stock_plus_num_parts",
  "full_stock_plus_part_perimeter",
  "roll_length"
]);
const Mf = De(
  P(),
  U().min(0)
).default({}), Bf = Q({
  banding: P().optional(),
  finish: P().optional(),
  planing: P().optional(),
  machining: P().optional()
}).optional(), Vf = Q({
  name: P().trim().min(1),
  db_id: P().optional(),
  code: P().optional(),
  thicknesses: xe(
    Xe([
      P().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      U()
    ])
  ).min(1),
  widths: xe(
    Xe([
      P().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      U()
    ])
  ).optional(),
  extras: Bf
}), Is = Q({
  labels: xe(P()).default([]),
  pricing: De(P(), U().min(0)).default({}),
  options: We().optional(),
  keys: xe(P()).optional(),
  // if not all the default keys should be set
  locations: xe(P()).optional(),
  // available locations for this extras type
  groups: xe(ji).optional(),
  // custom location groups
  rules: We().optional(),
  // validation rules for this extras type
  displayNames: De(P(), P()).optional()
  // slug key → product name for dropdown display
});
Q({
  success: Ie(),
  price: U().optional(),
  error: P().optional(),
  cacheHit: Ie().optional()
});
Q({
  valid: Ie(),
  errors: xe(P()),
  warnings: xe(P())
});
Q({
  pricing: Mf,
  labels: xe(P()),
  options: xe(xe(P())),
  // Simplified to string arrays only
  keys: xe(P()),
  maxLevels: U().min(1)
});
Q({
  enableCaching: Ie().default(!0),
  enableLogging: Ie().default(!1),
  maxCacheSize: U().min(1).default(1e3)
});
const vo = ln(["select", "multiselect", "range", "boolean", "search"]), bo = ln(["asc", "desc"]), yo = ln(["grid", "list"]), Mi = Q({
  _id: P(),
  name: P(),
  labels: xe(P()).optional(),
  pricing: De(P(), U()).optional(),
  price: U().optional()
}), Df = Q({
  banding: Mi.optional(),
  finish: Mi.optional(),
  planing: Mi.optional(),
  machining: Mi.optional()
}).optional(), jf = Q({
  enabled: Ie(),
  price: U(),
  description: P().optional(),
  maxQuantity: U().optional()
}).optional(), Rf = Q({
  // Visual (Note: color, weight, imageUrl, tags, available are now in InputStock base schema)
  colorHex: Zl,
  name: P().optional().describe("User-friendly display name"),
  description: P().optional().describe("Detailed description"),
  code: P().optional().describe("Internal material/product code"),
  // Categorization
  category: P().optional().describe("Stock category"),
  // Surface finish (e.g., "High Gloss", "Matt", "Satin")
  finish: P().optional().describe("Surface finish"),
  // Available extras from material (resolved from material.extras)
  extras: Df.describe("Available extras for this stock"),
  // Sample ordering configuration (from material)
  sample: jf.describe("Sample ordering configuration"),
  // UI metadata
  minQuantity: U().int().positive().nullable().optional().describe("Minimum order quantity")
});
En.merge(Rf).describe("Stock option with filtering and display metadata");
const Gf = Q({
  field: P().describe("Property name to filter on"),
  type: vo,
  label: P().describe("Display label"),
  custom: Ie().default(!1).describe("Whether this is a custom property"),
  // Range filter options
  min: U().nullable().optional().describe("Minimum value for range filter"),
  max: U().nullable().optional().describe("Maximum value for range filter"),
  step: U().nullable().optional().describe("Step size for range filter"),
  // Select filter options
  options: xe(Q({
    label: P(),
    value: We()
  })).optional().describe("Predefined options for select filters"),
  // Display options
  visible: Ie().default(!0).describe("Whether filter is visible"),
  collapsible: Ie().default(!0).describe("Whether filter panel is collapsible"),
  order: U().int().nullable().optional().describe("Display order")
}), qf = Q({
  field: P().describe("Field to sort by"),
  order: bo,
  label: P().optional().describe("Display label for sort option")
}), qs = Q({
  // Filter configuration
  availableFilters: xe(Gf).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: xe(P()).default(["cost", "material", "t"]).describe("Sortable fields"),
  defaultSort: qf.default({
    field: "cost",
    order: "asc"
  }).describe("Default sort configuration"),
  // Display configuration
  mode: P().default("stock").optional().describe("Filter mode"),
  displayMode: yo.default("grid").describe("Default display mode"),
  itemsPerPage: U().int().positive().default(20).describe("Items per page for pagination"),
  // Feature toggles
  enableSearch: Ie().default(!0).describe("Enable search functionality"),
  // Selection behavior
  allowMultipleSelection: Ie().default(!0).describe("Allow multiple stock selection"),
  maxSelection: U().int().positive().nullable().optional().describe("Maximum number of stock items to select")
}), _f = Q({
  field: P(),
  value: We(),
  type: vo
});
Q({
  // Active filters
  activeFilters: xe(_f).default([]).describe("Currently active filters"),
  // Search
  searchQuery: P().default("").describe("Current search query"),
  // Sort
  sortBy: P().default("cost").describe("Current sort field"),
  sortOrder: bo.default("asc").describe("Current sort order"),
  // Display
  displayMode: yo.default("grid").describe("Current display mode"),
  currentPage: U().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: xe(P()).default([]).describe("IDs of selected stock items")
});
function bh() {
  return qs.parse({});
}
const wo = Q({}).passthrough(), So = Q({
  l: U(),
  w: U(),
  t: U().nullable(),
  q: U(),
  stockId: P()
}), ko = Jl.partial(), xo = Q({
  holes: xe(Q({
    x: U(),
    y: U(),
    diameter: U(),
    depth: U().optional(),
    face: U().optional(),
    type: P().optional()
  })).optional(),
  hingeHoles: xe(Q({
    position: U(),
    side: P(),
    face: U().optional(),
    numHoles: U().optional(),
    diameter: U().optional(),
    depth: U().optional(),
    hingeLength: U().optional(),
    distanceFromEdge: U().optional(),
    outerSpacing: U().optional()
  })).optional(),
  corners: xe(Q({
    index: U(),
    type: P().nullable().optional(),
    size: U().nullable().optional()
  })).optional()
}), Po = Q({
  bladeWidth: U().optional(),
  cutType: P().optional(),
  cutPreference: P().optional(),
  stackHeight: U().optional()
}), Uf = Q({
  l: U(),
  w: U(),
  t: U().nullable(),
  material: P().nullable(),
  orientationLock: Ka.nullable(),
  q: U(),
  name: P().nullable(),
  // V2 format: flat banding/finish (x1/x2/y1/y2 for banding, a/b for finish)
  banding: De(P(), Xe([P(), Ie()])).nullable().optional(),
  finish: De(P(), Xe([P(), Ie()])).nullable().optional(),
  planing: De(P(), Xe([P(), Ie()])).nullable().optional(),
  customData: De(P(), We()).nullable().optional()
}), Wf = Q({
  id: P(),
  name: P().nullable(),
  l: U(),
  w: U(),
  t: U().nullable(),
  material: P().nullable(),
  q: U(),
  trim: Q({
    x1: U(),
    x2: U(),
    y1: U(),
    y2: U()
  }).nullable().optional(),
  cost: U().nullable().optional(),
  db_id: P().nullable().optional(),
  code: P().nullable().optional(),
  analysis: ko.nullable().optional(),
  customData: De(P(), We()).nullable().optional()
}), zf = Q({
  id: P().optional(),
  name: P().optional(),
  l: U(),
  w: U(),
  t: U().nullable().optional(),
  material: P().optional(),
  q: U().optional(),
  orientationLock: Xe([
    sn(""),
    sn("l"),
    sn("w")
  ]).nullable().optional(),
  // V2 format: flat banding/finish
  banding: De(P(), Xe([P(), Ie()])).nullable().optional(),
  finish: De(P(), Xe([P(), Ie()])).nullable().optional(),
  planing: De(P(), Xe([P(), Ie()])).nullable().optional(),
  // V3 nested extras also stored on inputs even for V2 results (see mapToCheckoutResultV2)
  extras: Q({
    banding: Q({
      sides: De(P(), Xe([P(), Ie()]))
    }).nullable().optional(),
    finish: Q({
      faces: De(P(), Xe([P(), Ie()]))
    }).nullable().optional(),
    planing: Q({
      sides: De(P(), Xe([P(), Ie()])).optional(),
      faces: De(P(), Xe([P(), Ie()])).optional()
    }).nullable().optional()
  }).optional(),
  machining: xo.optional(),
  stock: Q({
    db_id: P().optional(),
    code: P().optional(),
    material: P().optional(),
    thickness: U().optional()
  }).nullable().optional(),
  customData: De(P(), We()).nullable().optional()
});
Q({
  jobId: U(),
  metadata: Za.optional(),
  parts: xe(Uf),
  stock: xe(Wf),
  offcuts: xe(So),
  inputs: Q({
    parts: xe(zf),
    saw: Po.optional()
  }),
  apiResultV3: wo.optional()
});
const Hf = Q({
  l: U(),
  w: U(),
  t: U().nullable(),
  material: P().nullable(),
  orientationLock: Ka.nullable(),
  q: U(),
  name: P().nullable(),
  // V3 format: nested extras structure
  extras: Q({
    banding: Q({
      sides: De(P(), Xe([P(), Ie()]))
    }).nullable().optional(),
    finish: Q({
      faces: De(P(), Xe([P(), Ie()]))
    }).nullable().optional(),
    planing: Q({
      sides: De(P(), Xe([P(), Ie()])).optional(),
      faces: De(P(), Xe([P(), Ie()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: De(P(), We()).nullable().optional()
}), Kf = Q({
  id: P(),
  name: P().nullable(),
  l: U(),
  w: U(),
  t: U().nullable(),
  material: P().nullable(),
  q: U(),
  trim: Q({
    l1: U().optional(),
    l2: U().optional(),
    w1: U().optional(),
    w2: U().optional()
  }).nullable().optional(),
  cost: U().nullable().optional(),
  db_id: P().nullable().optional(),
  code: P().nullable().optional(),
  analysis: ko.nullable().optional(),
  // New stock fields
  color: Yl.nullable(),
  weight: U().positive().nullable().optional(),
  imageUrl: P().nullable().optional(),
  tags: xe(P()).nullable().optional(),
  available: Ie().nullable().optional(),
  customData: De(P(), We()).nullable().optional()
}), Zf = Q({
  id: P().optional(),
  name: P().optional(),
  l: U(),
  w: U(),
  t: U().nullable().optional(),
  material: P().optional(),
  q: U().optional(),
  orientationLock: Xe([
    sn(""),
    sn("l"),
    sn("w")
  ]).nullable().optional(),
  // V3 format: nested extras structure
  extras: Q({
    banding: Q({
      sides: De(P(), Xe([P(), Ie()]))
    }).nullable().optional(),
    finish: Q({
      faces: De(P(), Xe([P(), Ie()]))
    }).nullable().optional(),
    planing: Q({
      sides: De(P(), Xe([P(), Ie()])).optional(),
      faces: De(P(), Xe([P(), Ie()])).optional()
    }).nullable().optional()
  }).optional(),
  machining: xo.optional(),
  stock: Q({
    db_id: P().optional(),
    code: P().optional(),
    material: P().optional(),
    thickness: U().optional()
  }).nullable().optional(),
  customData: De(P(), We()).nullable().optional()
});
Q({
  jobId: U(),
  metadata: Za.optional(),
  parts: xe(Hf),
  stock: xe(Kf),
  offcuts: xe(So),
  inputs: Q({
    parts: xe(Zf),
    saw: Po.optional()
  }),
  apiResultV3: wo.optional()
});
function Co(t) {
  return {
    l: t.l,
    w: t.w,
    t: t.t ?? null,
    q: t.q,
    // Use stock.id to match the id property in the result's stock array
    stockId: t?.stock?.id || t?.stock?.parentId || ""
  };
}
function Io(t) {
  const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  for (const i of t) {
    if (!i?.analysis || !i?.parentId) continue;
    const s = i.parentId, a = i.analysis;
    if (!e.has(s))
      e.set(s, {
        areaEfficiency: a.areaEfficiency ?? 0,
        finishArea: a.finishArea ?? 0,
        bandingLength: a.bandingLength ?? 0,
        partArea: a.partArea ?? 0,
        totalParts: a.totalParts ?? 0,
        stackedNumberOfCuts: a.stackedNumberOfCuts ?? 0,
        numberOfCuts: a.numberOfCuts ?? 0,
        stackedCutLength: a.stackedCutLength ?? 0,
        cutLength: a.cutLength ?? 0,
        rollLength: a.rollLength ?? 0
      }), n.set(s, 1);
    else {
      const o = e.get(s), l = n.get(s) + 1;
      n.set(s, l), e.set(s, {
        // Sum for areaEfficiency (we'll average it at the end)
        areaEfficiency: o.areaEfficiency + (a.areaEfficiency ?? 0),
        // Sum all other fields
        finishArea: o.finishArea + (a.finishArea ?? 0),
        bandingLength: o.bandingLength + (a.bandingLength ?? 0),
        partArea: o.partArea + (a.partArea ?? 0),
        totalParts: o.totalParts + (a.totalParts ?? 0),
        stackedNumberOfCuts: o.stackedNumberOfCuts + (a.stackedNumberOfCuts ?? 0),
        numberOfCuts: o.numberOfCuts + (a.numberOfCuts ?? 0),
        stackedCutLength: o.stackedCutLength + (a.stackedCutLength ?? 0),
        cutLength: o.cutLength + (a.cutLength ?? 0),
        rollLength: o.rollLength + (a.rollLength ?? 0)
      });
    }
  }
  for (const [i, s] of e) {
    const a = n.get(i) ?? 1;
    s.areaEfficiency = Math.round(s.areaEfficiency / a * 100) / 100;
  }
  return e;
}
const Jf = Q({
  stockSelection: sr.optional(),
  stackingMode: ir.optional(),
  minSpacing: Ha.optional()
}).optional(), Yf = Q({
  stockType: ln([...Ls]).optional(),
  bladeWidth: Xe([
    ar,
    P()
  ]).optional(),
  cutType: nr,
  cutPreference: tr,
  stackHeight: er,
  guillotineOptions: Ql,
  efficiencyOptions: Xl.optional(),
  options: Jf
}).optional(), Xf = Q({
  holes: U().min(0).nullable().optional(),
  corners: U().min(0).nullable().optional()
}).optional(), Qf = Wn.pick({
  l: !0,
  w: !0,
  t: !0,
  q: !0,
  name: !0,
  material: !0,
  orientationLock: !0,
  customData: !0,
  order_id: !0,
  stock: !0
}).extend({
  // Checkout-specific: flattened extras (not in extras container)
  banding: rr.nullable().optional(),
  finish: lr.nullable().optional(),
  planing: or.nullable().optional(),
  stockId: P().nullable().optional()
}), ep = Q({
  stock: xe(En).default([]),
  parts: xe(Qf).optional(),
  options: $f,
  type: P().optional(),
  // variable | simple
  materials: xe(Vf).optional(),
  banding: Is.nullable().optional(),
  finish: Is.nullable().optional(),
  planing: Is.nullable().optional(),
  machining: We().optional(),
  machiningPricing: Xf,
  // DEPRECATED: bandingPricing, finishPricing, planingPricing are now in banding.pricing, finish.pricing, planing.pricing
  variations: We().optional(),
  partRules: Ff.optional(),
  customValidation: Q({
    enabled: Ie(),
    rules: xe(We())
  }).optional(),
  saw: Yf,
  stockFilter: Q({
    enabled: Ie().optional(),
    serverMode: Ie().optional(),
    config: qs.optional()
  }).optional(),
  // Product catalog configuration
  products: Q({
    enabled: Ie().optional(),
    showCategories: Ie().optional()
  }).optional(),
  // API configuration (for order lookup and other API features)
  api: Q({
    baseUrl: P(),
    orgSlug: P(),
    isCustomDomain: Ie().optional()
  }).optional(),
  // Admin configuration (formula pricing, etc.)
  config: Q({
    formulaPricing: Q({
      enabled: Ie(),
      url: P().nullable().optional(),
      spec: We().nullable().optional()
    }).optional()
  }).optional()
});
Q({
  slug: P().optional(),
  company: Q({
    name: P(),
    contactEmail: P(),
    phone: P().optional(),
    address: P().optional()
  }),
  branding: Q({
    logo: P().optional(),
    favicon: P().optional(),
    colors: Q({
      button: P(),
      buttonText: P(),
      headerBackground: P().optional(),
      headerText: P().optional(),
      partA: P().optional(),
      partB: P().optional(),
      partSelected: P().optional(),
      stock: P().optional(),
      text: P().optional()
    }),
    showCredit: Ie().optional()
  }),
  config: Q({
    stockCount: U().optional(),
    stock: xe(We()).optional(),
    materials: xe(We()).optional(),
    options: We().optional(),
    pricing: We().optional(),
    banding: We().optional(),
    finish: We().optional(),
    planing: We().optional(),
    machining: We().optional(),
    bandingPricing: De(P(), U()).optional(),
    finishPricing: De(P(), U()).optional(),
    planingPricing: De(P(), U()).optional(),
    machiningPricing: De(P(), U()).optional(),
    saw: We().optional(),
    shipping: Q({
      enabled: Ie(),
      originCountry: P().optional()
    }).optional(),
    stockFilter: Q({
      config: qs.optional()
    }).optional(),
    partRules: We().optional(),
    customFields: xe(We()).optional(),
    termsUrl: P().optional(),
    termsContent: P().optional(),
    tracking: Q({
      gaMeasurementId: P().optional(),
      gtmContainerId: P().optional()
    }).optional(),
    customValidation: Q({
      enabled: Ie(),
      rules: xe(We())
    }).optional(),
    importSettings: Q({
      grouping: ln(["material", "material-variant", "auto"]).optional(),
      codeRegex: P().optional()
    }).optional()
  }),
  stripe: Q({
    enabled: Ie(),
    publishableKey: P().optional(),
    currency: P().optional()
  }).optional()
});
function tp(t) {
  const e = ep.safeParse(t);
  return {
    success: e.success,
    data: e.success ? e.data : void 0,
    error: e.success ? void 0 : e.error
  };
}
function np(t) {
  const e = tp(t);
  if (!e.success) {
    const n = e.error?.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join(", ") || "Unknown validation error";
    throw console.error("Invalid checkout data:", JSON.stringify(t, null, 2)), console.error("Validation errors:", n), new Error(`Invalid checkout data: ${n}`);
  }
  return e.data;
}
function Gt(t) {
  return t == null ? !1 : typeof t == "object" && t.value !== void 0 ? t.value : t;
}
function ip(t) {
  if (t.extras?.banding?.sides) {
    const e = t.extras.banding.sides, n = {};
    if (tt(e.a) || tt(e.b) || tt(e.c) || tt(e.d))
      n.x1 = tt(e.a) ? Gt(e.a) : !1, n.y1 = tt(e.b) ? Gt(e.b) : !1, n.x2 = tt(e.c) ? Gt(e.c) : !1, n.y2 = tt(e.d) ? Gt(e.d) : !1;
    else {
      const s = Ns(e);
      n.x1 = tt(s.x1) ? Gt(s.x1) : !1, n.x2 = tt(s.x2) ? Gt(s.x2) : !1, n.y1 = tt(s.y1) ? Gt(s.y1) : !1, n.y2 = tt(s.y2) ? Gt(s.y2) : !1;
    }
    t.banding = n;
  }
  if (t.extras?.finish?.faces) {
    const e = t.extras.finish.faces, n = {};
    n.a = tt(e.a) ? Gt(e.a) : !1, n.b = tt(e.b) ? Gt(e.b) : !1, t.finish = n;
  }
  if (t.extras?.planing) {
    const e = t.extras.planing, n = {}, i = Ns(e.sides || {});
    e.sides && (tt(i.x1) && (n.x1 = i.x1), tt(i.x2) && (n.x2 = i.x2), tt(i.y1) && (n.y1 = i.y1), tt(i.y2) && (n.y2 = i.y2)), e.faces && (tt(e.faces.a) && (n.a = e.faces.a), tt(e.faces.b) && (n.b = e.faces.b)), Object.keys(n).length > 0 && (t.planing = n);
  }
  (t.extras?.banding || t.extras?.finish || t.extras?.planing) && delete t.extras;
}
function sp(t, e = 0) {
  if (e === 0)
    return t;
  if (e === 1 || e === 2) {
    const n = Math.max(t.l, t.w), i = Math.min(t.l, t.w);
    t.w > t.l && (t.l = n, t.w = i);
  }
  return t;
}
function Ao(t, e = 0) {
  debugger;
  return e === 0 || t.forEach((n) => sp(n, e)), t;
}
function Oo(t) {
  const e = t.machining;
  if (!e) return;
  const n = {};
  return e.holes?.length && (n.holes = e.holes.map((i) => ({
    x: i.x,
    y: i.y,
    diameter: i.diameter,
    ...i.depth != null && { depth: i.depth },
    face: i.face ?? 0,
    type: i.type ?? "regular"
  }))), e.hingeHoles?.length && (n.hingeHoles = e.hingeHoles.map((i) => ({
    position: i.position,
    side: i.side,
    face: i.face ?? 0,
    numHoles: i.numHoles,
    diameter: i.diameter,
    depth: i.depth,
    hingeLength: i.hingeLength,
    distanceFromEdge: i.distanceFromEdge,
    outerSpacing: i.outerSpacing
  }))), e.corners?.length && (n.corners = e.corners.map((i) => ({
    index: i.index,
    type: i.type ?? null,
    size: i.size ?? null
  }))), Object.keys(n).length > 0 ? n : void 0;
}
function ap(t, e, n, i, s, a, o, l) {
  const r = Io(i), h = e.map((p) => {
    const $ = {
      l: p.l,
      w: p.w,
      t: p?.t ?? null,
      material: p.material ?? null,
      orientationLock: p.orientationLock ?? null,
      q: o?.addedPartTally?.[p.parentId] || p.q,
      name: p.name ?? null,
      customData: p.customData ?? null,
      // Always include extras properties even if not set (using API format)
      banding: Zr(),
      finish: _i(),
      planing: Yr()
    }, C = { ...p };
    return ip(C), C.banding && ($.banding = C.banding), C.finish && ($.finish = C.finish), C.planing && ($.planing = C.planing), $;
  }), b = n.map((p) => {
    const $ = {
      id: p.id,
      name: p?.name ?? null,
      l: p.l,
      w: p.w,
      t: p?.t ?? null,
      material: p.material ?? null,
      code: p?.code ?? null,
      q: o?.usedStockTally?.[p.parentId] || p.q,
      cost: p?.cost ?? null,
      analysis: r.get(p.parentId) ?? null,
      customData: p?.customData ?? null
    };
    return p?.trim && ($.trim = Ns(p.trim)), $;
  }), S = {
    parts: a.map((p) => {
      const $ = {
        id: p.id ? String(p.id).split(".")[0] : p.id,
        name: p.name,
        l: p.l,
        w: p.w,
        t: p.t ?? null,
        material: p.material,
        q: p.q,
        orientationLock: p.orientationLock ?? null,
        stock: p.stock ?? null,
        customData: p.customData ?? null
      };
      p.extras && ($.extras = {}, p.extras.banding?.sides && ($.extras.banding = { sides: p.extras.banding.sides }), p.extras.finish?.faces && ($.extras.finish = { faces: p.extras.finish.faces }), p.extras.planing && ($.extras.planing = {
        ...p.extras.planing.sides && { sides: p.extras.planing.sides },
        ...p.extras.planing.faces && { faces: p.extras.planing.faces }
      }));
      const C = Oo(p);
      return C && ($.machining = C), $;
    })
  };
  return l && Ao(h, l), {
    jobId: t,
    metadata: o,
    parts: h,
    stock: b,
    offcuts: s?.map(Co) || [],
    inputs: S
  };
}
function op(t, e, n, i, s, a, o, l) {
  const r = Io(i), h = e.map((p) => {
    const $ = {
      l: p.l,
      w: p.w,
      t: p?.t ?? null,
      material: p.material ?? null,
      orientationLock: p.orientationLock ?? null,
      q: o?.addedPartTally?.[p.parentId] || p.q,
      name: p.name ?? null,
      customData: p.customData ?? null,
      // Always include extras structure even if not set (using internal format)
      extras: {
        banding: { sides: Es() },
        finish: { faces: _i() },
        planing: Jr()
      }
    };
    return p.extras && (p.extras.banding?.sides && ($.extras.banding = { sides: p.extras.banding.sides }), p.extras.finish?.faces && ($.extras.finish = { faces: p.extras.finish.faces }), p.extras.planing && ($.extras.planing = {
      sides: p.extras.planing.sides || Es(),
      faces: p.extras.planing.faces || _i()
    })), $;
  }), b = n.map((p) => ({
    id: p.id,
    name: p?.name ?? null,
    l: p.l,
    w: p.w,
    t: p?.t ?? null,
    material: p.material ?? null,
    code: p?.code ?? null,
    q: o?.usedStockTally?.[p.parentId] || p.q,
    trim: p?.trim ?? null,
    // Keep internal format (l1/l2/w1/w2)
    cost: p?.cost ?? null,
    analysis: r.get(p.parentId) ?? null,
    // New stock fields
    color: p?.color ?? null,
    weight: p?.weight ?? null,
    imageUrl: p?.imageUrl ?? null,
    tags: p?.tags ?? null,
    available: p?.available ?? null,
    customData: p?.customData ?? null
  })), S = {
    parts: a.map((p) => {
      const $ = {
        id: p.id ? String(p.id).split(".")[0] : p.id,
        name: p.name,
        l: p.l,
        w: p.w,
        t: p.t ?? null,
        material: p.material,
        q: p.q,
        orientationLock: p.orientationLock ?? null,
        stock: p.stock ?? null,
        customData: p.customData ?? null
      };
      p.extras && ($.extras = {}, p.extras.banding?.sides && ($.extras.banding = { sides: p.extras.banding.sides }), p.extras.finish?.faces && ($.extras.finish = { faces: p.extras.finish.faces }), p.extras.planing && ($.extras.planing = {
        ...p.extras.planing.sides && { sides: p.extras.planing.sides },
        ...p.extras.planing.faces && { faces: p.extras.planing.faces }
      }));
      const C = Oo(p);
      return C && ($.machining = C), $;
    })
  };
  return l && Ao(h, l), {
    jobId: t,
    metadata: o,
    parts: h,
    stock: b,
    offcuts: s?.map(Co) || [],
    inputs: S
  };
}
const lp = ["id", "data-index"], rp = /* @__PURE__ */ lt({
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
  setup(t, { emit: e }) {
    const n = t, i = e, s = z({
      l1: !1,
      l2: !1,
      w1: !1,
      w2: !1
    }), a = () => {
      if (!n.inputShape) return;
      let r = {
        l1: Pn(n.inputShape, "banding", "side.l1"),
        l2: Pn(n.inputShape, "banding", "side.l2"),
        w1: Pn(n.inputShape, "banding", "side.w1"),
        w2: Pn(n.inputShape, "banding", "side.w2")
      };
      const h = Tr(
        n.orientationModel,
        n.stockGrain,
        n.inputShape
      );
      h && (r = Ya(r, h)), s.value = r;
    };
    Ke([
      () => n.inputShape,
      // Watching the entire inputShape for deep changes
      () => n.orientationModel,
      () => n.stockGrain,
      () => n.inputShape?.orientationLock
      // Still watch orientationLock explicitly if it triggers a re-evaluation
    ], () => {
      a();
    }, { deep: !0, immediate: !0 });
    const o = (r) => {
      (r.key === "Enter" || r.key === " ") && l();
    }, l = () => {
      n.disabled || i("clicked");
    };
    return An(() => {
      document.getElementById(n.id)?.addEventListener("keydown", o);
    }), ci(() => {
      document.getElementById(n.id)?.removeEventListener("keydown", o);
    }), (r, h) => (O(), D("div", {
      id: t.id,
      class: je(["banding-button", { open: t.open, disabled: t.disabled }]),
      "data-field": "banding",
      "data-index": t.index,
      tabindex: "0",
      onClick: l
    }, [
      K("div", {
        class: je(["outer", {
          l1: s.value.l1,
          l2: s.value.l2,
          w1: s.value.w1,
          w2: s.value.w2
        }])
      }, [...h[0] || (h[0] = [
        K("div", { class: "inner" }, null, -1)
      ])], 2)
    ], 10, lp));
  }
}), cp = ["id", "data-index", "disabled"], up = /* @__PURE__ */ lt({
  __name: "FinishButton",
  props: {
    inputShape: { default: null },
    open: { type: Boolean, default: !1 },
    id: { default: "" },
    disabled: { type: Boolean, default: !1 },
    index: { default: 0 }
  },
  emits: ["clicked"],
  setup(t, { emit: e }) {
    const n = t, i = e, s = F(() => n.inputShape ? Pn(n.inputShape, "finish", "face.a") : !1), a = F(() => n.inputShape ? Pn(n.inputShape, "finish", "face.b") : !1), o = () => {
      n.disabled || i("clicked");
    };
    return (l, r) => {
      const h = On("FontAwesomeIcon");
      return O(), D("button", {
        id: t.id,
        class: je(["c-btn finish-button", {
          "face-a": s.value,
          // Use computed property
          "face-b": a.value,
          // Use computed property
          selected: t.open
        }]),
        "data-field": "finish",
        "data-index": t.index,
        type: "button",
        tabindex: "0",
        disabled: t.disabled,
        onClick: o
      }, [
        Ge(h, { icon: ["fass", "spray-can"] })
      ], 10, cp);
    };
  }
});
function dp(t) {
  return t.machining ? "toData" in t.machining ? t.machining.toData() : t.machining : { holes: [], hingeHoles: [], corners: {} };
}
function fp(t) {
  const e = dp(t);
  return e ? !!(e.holes && e.holes.length > 0 || e.hingeHoles && e.hingeHoles.length > 0 || e.corners && Object.values(e.corners).some((n) => n && n.type && n.size > 0)) : !1;
}
const pp = lt({
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
      return fp(this.inputShape);
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
}), hp = ["id", "disabled"];
function gp(t, e, n, i, s, a) {
  const o = On("FontAwesomeIcon");
  return O(), D("button", {
    id: t.id,
    class: je(["c-btn machining-button", { selected: t.hasMachining }]),
    type: "button",
    disabled: t.disabled,
    onClick: e[0] || (e[0] = (...l) => t.openMachining && t.openMachining(...l))
  }, [
    Ge(o, { icon: ["fass", "hammer"] })
  ], 10, hp);
}
const mp = /* @__PURE__ */ Hn(pp, [["render", gp]]), vp = ["id"], bp = {
  key: 0,
  class: "del",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, yp = {
  key: 1,
  class: "no-change",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, wp = {
  key: 2,
  class: "arrow",
  viewBox: "0 0 67 63",
  xmlns: "http://www.w3.org/2000/svg"
}, Sp = {
  key: 3,
  class: "arrow",
  viewBox: "0 0 72 39",
  xmlns: "http://www.w3.org/2000/svg"
}, kp = {
  key: 4,
  class: "arrow",
  viewBox: "0 0 39 72",
  xmlns: "http://www.w3.org/2000/svg"
}, xp = {
  key: 5,
  class: "grain",
  viewBox: "0 0 106 64",
  xmlns: "http://www.w3.org/2000/svg"
}, Pp = {
  key: 6,
  class: "grain",
  viewBox: "0 0 64 106",
  xmlns: "http://www.w3.org/2000/svg"
}, Va = /* @__PURE__ */ lt({
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
  setup(t, { emit: e }) {
    const n = t, i = e, s = z(0), a = z(!1), o = (w, j, x, H) => {
      if (!qe(x) || j === 0)
        return w;
      const se = l();
      return j === 1 || j === 2 && H !== "n" && w ? se : w;
    }, l = (w) => {
      const j = { ...n, ...w };
      if (!j.rectangle || !qe(j.rectangle)) return "";
      let x = "";
      switch (j.orientationModel) {
        case 0:
          x = Z.value;
          break;
        case 1:
          j.stockGrain === "y" || j.stockGrain === "n" ? x = j.rectangle.l >= j.rectangle.w ? "l" : "w" : j.rectangle.l >= j.rectangle.w ? x = j.stockGrain : x = x = j.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          x = j.rectangle.l >= j.rectangle.w ? "l" : "w";
          break;
      }
      return x;
    }, r = () => {
      if (n.disabled || V.value.length <= 1)
        return;
      const w = h(Z.value);
      "multiEdit" in n.rectangle && n.rectangle.multiEdit && Z.value === "" && s.value !== w && s.value === 0 && (s.value = w);
      let x = null;
      [1, 2].includes(n.orientationModel) ? x = S() : x = b(), s.value = x;
    }, h = (w) => {
      const j = V.value.findIndex((x) => x === w);
      return j === -1 ? 0 : j;
    }, b = () => {
      let w = s.value + 1;
      return w > V.value.length - 1 && (w = 0), w;
    }, S = () => {
      let w = 0;
      if (Z.value === "") {
        const j = l();
        w = V.value.findIndex((x) => x === j);
      } else
        w = V.value.findIndex((j) => j === "");
      return w;
    }, p = (w) => {
      i("updateOrientation", w);
    }, $ = () => {
      const w = Z.value;
      if ("multiEdit" in n.rectangle && n.rectangle.multiEdit)
        return w === " " ? " " : w === "" ? "" : w === "l" ? "l" : w === "w" ? "w" : "default";
      switch (n.orientationModel) {
        case 0:
          return w === " " ? " " : w ? n.stockGrain === "n" ? w || n.shapeOrientation || "default" : n.stockGrain === "w" ? w === "w" ? "w" : "l" : w === "l" ? "l" : "w" : "default";
        case 1:
          return w === " " ? " " : w ? n.stockGrain === "n" ? w || n.shapeOrientation || "default" : n.stockGrain === "w" ? w === "w" ? "w" : "l" : w === "l" ? "l" : "w" : "default";
        case 2:
          return w === " " ? " " : w ? n.stockGrain === "n" ? w || n.shapeOrientation || "default" : n.stockGrain === "w" ? w === "w" ? "w" : "l" : w === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, C = () => {
      if (!n.rectangle)
        return;
      if ("multiEdit" in n.rectangle && n.rectangle.multiEdit && !Z.value) {
        E("");
        return;
      }
      const w = o(
        Z.value,
        n.orientationModel,
        n.rectangle,
        n.stockGrain
      );
      if (w !== Z.value) {
        E(w);
        return;
      }
      if (!a.value || s.value === -1) {
        const j = h(Z.value);
        s.value = j;
      }
      if (qe(n.rectangle)) {
        if (n.orientationModel === 1) {
          const j = T.value ? l() : Z.value;
          E(j);
          return;
        }
        if (n.orientationModel === 2) {
          let j;
          T.value ? j = n.stockGrain !== "n" ? l() : "" : j = Z.value, E(j);
        }
      }
    }, M = z(!1), E = (w) => {
      const j = h(w);
      M.value = !0, s.value = j, M.value = !1, p(w);
    }, V = F(() => {
      if (!n.rectangle) return ["l", "w"];
      if (kn(n.rectangle)) return ["l", "w"];
      let w = ["", "l", "w"];
      return n.rectangle.multiEdit ? [" ", "", "l", "w"] : (G.value && (w = w.filter((j) => j !== "w")), w);
    }), G = F(() => qe(n.rectangle) || fs(n.rectangle) ? n.rectangle.isSquare : n.rectangleType && n.rectangle?.l && n.rectangle?.w ? n.rectangle?.l === n.rectangle?.w : !1), Z = F(() => {
      let w = "";
      if (kn(n.rectangle))
        w = n.rectangle.direction === "horizontal" ? "l" : "w";
      else if (qe(n.rectangle)) {
        const j = n.rectangle.orientationLock;
        w = j === null ? "" : j;
      } else if (fs(n.rectangle)) {
        const x = n.rectangle.grain ?? "";
        x === "l" || x === "w" || x === "" || x === " " ? w = x : w = "";
      }
      return w;
    }), he = F(() => kn(n.rectangle) || !n.rectangle ? {
      l: null,
      w: null
    } : {
      l: n.rectangle.l,
      w: n.rectangle.w
    }), T = F(() => !he.value.l && !he.value.w), N = F(() => kn(n.rectangle) ? !1 : Di(
      n.orientationModel,
      n.stockGrain,
      n.rectangle,
      n.rectangleType,
      n.shapeOrientation
    )), ee = F(() => {
      if (!n.rectangle)
        return n.shapeOrientation ? "noGrain" : "freeRotation";
      if (fs(n.rectangle) || n.rectangleType === "stock") {
        const se = n.rectangle.grain;
        return "multiEdit" in n.rectangle && n.rectangle.multiEdit ? {
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
      const w = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, j = n.stockGrain || "default";
      let x = "default";
      qe(n.rectangle) || n.rectangleType === "shape" ? x = $() : kn(n.rectangle) && (x = n.rectangle.direction || "default");
      const H = w[j]?.[x];
      return H || w[j]?.default || "freeRotation";
    });
    return Ke(s, (w, j) => {
      a.value && j !== void 0 && (M.value || p(V.value[w]));
    }, { immediate: !1 }), Ke(he, (w, j) => {
      if (!n.rectangle || n.orientationModel === 0 || !qe(n.rectangle) || qe(n.rectangle) && (n.orientationModel === 2 && j.l && j.w && !Z.value || n.stockGrain === "n" && !Z.value))
        return;
      const x = l();
      Z.value !== x && p(x);
    }, { immediate: !1 }), Ke(() => n.stockGrain, (w, j) => {
      w !== j && C();
    }, { immediate: !0 }), An(() => {
      C(), Ct(() => a.value = !0);
    }), (w, j) => (O(), D("button", {
      type: "button",
      id: t.id,
      class: je(["c-btn orientation-button", { rot: N.value, square: G.value, disabled: t.disabled, [ee.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      onClick: r
    }, [
      ee.value === "delete" ? (O(), D("svg", bp, [...j[0] || (j[0] = [
        K("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ])])) : ae("", !0),
      ee.value === "noChange" ? (O(), D("svg", yp, [...j[1] || (j[1] = [
        K("path", {
          d: "M5 12h14",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        }, null, -1)
      ])])) : ae("", !0),
      ee.value === "freeRotation" ? (O(), D("svg", wp, [...j[2] || (j[2] = [
        K("g", null, [
          K("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          K("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          K("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          K("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ])])) : ae("", !0),
      ee.value === "leftRight" ? (O(), D("svg", Sp, [...j[3] || (j[3] = [
        K("g", null, [
          K("path", { d: "m5.408 19.408h61.095" }),
          K("g", null, [
            K("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            K("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ])])) : ae("", !0),
      ee.value === "topBottom" ? (O(), D("svg", kp, [...j[4] || (j[4] = [
        K("g", null, [
          K("path", { d: "m19.408 66.503v-61.095" }),
          K("g", null, [
            K("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            K("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ])])) : ae("", !0),
      ee.value === "grainLeftRight" ? (O(), D("svg", xp, [...j[5] || (j[5] = [
        K("g", null, [
          K("path", { d: "m3 3h99.887" }),
          K("path", { d: "m3.113 32h99.887" }),
          K("path", { d: "m3.113 61h99.887" })
        ], -1)
      ])])) : ae("", !0),
      ee.value === "grainTopBottom" ? (O(), D("svg", Pp, [...j[6] || (j[6] = [
        K("g", null, [
          K("path", { d: "m61 3v99.887" }),
          K("path", { d: "m32 3.113v99.887" }),
          K("path", { d: "m3 3.113v99.887" })
        ], -1)
      ])])) : ae("", !0)
    ], 10, vp));
  }
}), Cp = ["id", "data-index", "disabled"], Ip = /* @__PURE__ */ lt({
  __name: "PlaningButton",
  props: {
    inputShape: { default: null },
    open: { type: Boolean, default: !1 },
    id: { default: "" },
    disabled: { type: Boolean, default: !1 },
    index: { default: 0 }
  },
  emits: ["clicked"],
  setup(t, { emit: e }) {
    const n = t, i = e, s = F(() => n.inputShape ? Pn(n.inputShape, "planing", "face.a") : !1), a = F(() => n.inputShape ? Pn(n.inputShape, "planing", "face.b") : !1), o = () => {
      n.disabled || i("clicked");
    };
    return (l, r) => {
      const h = On("FontAwesomeIcon");
      return O(), D("button", {
        id: t.id,
        class: je(["c-btn planing-button", {
          "face-a": s.value,
          "face-b": a.value,
          selected: t.open
        }]),
        "data-field": "planing",
        "data-index": t.index,
        type: "button",
        tabindex: "0",
        disabled: t.disabled,
        onClick: o
      }, [
        Ge(h, { icon: ["fass", "hammer"] })
      ], 10, Cp);
    };
  }
});
function Ap(t, e, n) {
  let i = null;
  Ke(
    () => t.value ? { l: t.value.l, w: t.value.w } : null,
    (s) => {
      const a = typeof e == "number" ? e : e.value;
      if (!$r(a) || !s || !t.value) return;
      const o = s.w > s.l;
      if (i === null) {
        i = o;
        return;
      }
      if (i !== o) {
        const l = Fr(a);
        for (const r of l)
          cr(t.value, r);
        i = o;
      }
    },
    { immediate: !0 }
  );
}
const Op = {
  key: 0,
  class: "info"
}, Lp = ["disabled"], $p = /* @__PURE__ */ lt({
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
  emits: ["update", "validation", "blur", "open-banding", "open-machining", "open-finish", "open-planing", "open-image-upload"],
  setup(t, { emit: e }) {
    const n = t, i = e, s = F(() => n.field.name === "banding" && qe(n.item) ? n.item : null);
    Ap(s, Ot(n, "orientationModel"));
    const a = ["orientationLock", "grain", "banding", "bandingOptions", "machining", "finish", "planing", "imageUpload"], o = F(() => a.includes(n.field.name) || n.field.name === "material" && n.typePrefix === "part" || n.field.name === "t" && n.thicknessOptions?.length > 0 || n.field.name === "w" && n.widthOptions?.length > 0), l = F(() => {
      try {
        const T = n.field.propertyPath || n.field.name;
        return T.includes(".") ? yn(n.item, T) ?? null : n.item[T] ?? null;
      } catch (T) {
        return console.error("[CheckoutField] Error getting field value:", T), null;
      }
    }), r = F(() => {
      if (n.field.custom && n.field.type) {
        const ee = n.field.type;
        if (["checkbox", "select", "string", "integer", "unitDependent"].includes(ee))
          return ee;
      }
      const T = {
        number: "unitDependent",
        integer: "integer",
        string: "string",
        boolean: "checkbox",
        enum: "select"
      };
      if (n.field.name === "q") return "integer";
      if (n.field.name === "cost") return "string";
      if (n.field.name === "autoAdd") return "checkbox";
      if (n.field.name === "material" && n.typePrefix === "stock") return "string";
      if (["l", "w", "t", "trim"].includes(n.field.name)) return "unitDependent";
      const N = T[n.field.type];
      return N || "string";
    }), h = F(() => n.field.output ? n.field.output : null), b = F(() => n.field.options || []), S = F(() => !!n.fullStockDisabled), p = F(() => n.item.isNew ? !1 : na(n.item, [n.field.name])), $ = F(() => n.item.isNew ? !1 : na(n.item, [n.field.name], !0)), C = F(() => n.multiEdit || n.item.isNew || !1), M = F(() => n.materialOptions?.length > 0 && qe(n.item) ? !n.item.material : !1), E = F(() => n.widthOptions?.length === 1), V = F(() => n.field.info ? typeof n.field.info == "string" ? n.field.info : typeof n.field.info == "object" && l.value !== null && n.field.info[l.value] || null : null), G = (T) => {
      i("update", T);
    }, Z = (T, N) => {
      i("validation", T, N);
    }, he = () => {
      i("blur");
    };
    return (T, N) => o.value ? (O(), D(it, { key: 1 }, [
      t.field.name === "orientationLock" ? (O(), Ae(Va, {
        key: 0,
        rectangle: t.item,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        "button-background": "#2c8d8f",
        disabled: S.value,
        onUpdateOrientation: G
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : t.field.name === "grain" ? (O(), Ae(Va, {
        key: 1,
        rectangle: t.item,
        "button-background": "#2c8d8f",
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        disabled: S.value,
        onUpdateOrientation: G
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : t.field.name === "banding" ? (O(), Ae(rp, {
        key: 2,
        "input-shape": I(qe)(t.item) ? t.item : null,
        open: t.bandingEnabled?.autoId === t.item.autoId,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        index: t.index,
        disabled: S.value || t.materialExtrasDisabled?.banding,
        onClicked: N[0] || (N[0] = (ee) => T.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "orientation-model", "index", "disabled"])) : t.field.name === "finish" ? (O(), Ae(up, {
        key: 3,
        "input-shape": I(qe)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        disabled: S.value || t.materialExtrasDisabled?.finish,
        onClicked: N[1] || (N[1] = (ee) => T.$emit("open-finish"))
      }, null, 8, ["input-shape", "index", "disabled"])) : t.field.name === "planing" ? (O(), Ae(Ip, {
        key: 4,
        "input-shape": I(qe)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        disabled: S.value || t.materialExtrasDisabled?.planing,
        onClicked: N[2] || (N[2] = (ee) => T.$emit("open-planing"))
      }, null, 8, ["input-shape", "index", "disabled"])) : t.field.name === "machining" ? (O(), Ae(mp, {
        key: 5,
        "input-shape": I(qe)(t.item) ? t.item : null,
        disabled: S.value || t.materialExtrasDisabled?.machining,
        onOpen: N[3] || (N[3] = (ee) => T.$emit("open-machining"))
      }, null, 8, ["input-shape", "disabled"])) : t.field.name === "material" && t.typePrefix === "part" ? (O(), Ae(ii, {
        key: 6,
        id: `${t.typePrefix}-material-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: l.value,
        label: I(ke)(t.field.label || "fields.material"),
        placeholder: I(ke)(t.field.placeholder || "fields.material"),
        "enable-label": !1,
        output: "string",
        options: t.materialOptions,
        "select-first-option-disabled": !0,
        disabled: !t.materialOptions?.length,
        required: !1,
        text: {
          select: I(ke)("actions.select"),
          delete: I(ke)("actions.delete")
        },
        "onUpdate:value": G,
        onValidation: Z
      }, {
        default: wn(() => [
          Sn(T.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : t.field.name === "t" && t.thicknessOptions?.length > 0 ? (O(), Ae(ii, {
        key: 7,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: l.value,
        label: I(ke)(t.field.label || "fields.t"),
        "enable-label": !1,
        options: t.thicknessOptions,
        readonly: t.readonly,
        disabled: M.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: I(ke)("actions.select"),
          delete: I(ke)("actions.delete")
        },
        output: "number",
        "onUpdate:value": G,
        onValidation: Z
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "w" && t.widthOptions?.length > 0 ? (O(), Ae(ii, {
        key: 8,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: l.value,
        label: I(ke)(t.field.label || "fields.w"),
        "enable-label": !1,
        options: t.widthOptions,
        readonly: t.readonly,
        disabled: E.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: I(ke)("actions.select"),
          delete: I(ke)("actions.delete")
        },
        output: "number",
        "onUpdate:value": G,
        onValidation: Z
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "imageUpload" ? (O(), D("button", {
        key: 9,
        type: "button",
        disabled: t.readonly,
        onClick: N[4] || (N[4] = (ee) => T.$emit("open-image-upload"))
      }, [
        Ge(I(Ri), { icon: ["fass", "image"] })
      ], 8, Lp)) : ae("", !0)
    ], 64)) : (O(), Ae(ii, {
      key: 0,
      id: `${t.typePrefix}-${t.field.name}-${t.index}`,
      "data-field": t.field.name,
      "data-index": t.index,
      type: r.value,
      value: l.value,
      label: I(ke)(t.field.label || t.field.name),
      placeholder: I(ke)(t.field.placeholder || t.field.name),
      "enable-label": t.enableLabel,
      output: h.value,
      options: b.value,
      "select-first-option-disabled": t.field.selectFirstOptionDisabled ?? !0,
      disabled: t.field.disabled || S.value,
      readonly: t.readonly || t.field.readonly,
      required: t.field.required || !1,
      "allow-zero": t.field.allowZero ?? !1,
      "true-value": t.field.trueValue ?? !0,
      "false-value": t.field.falseValue ?? !1,
      default: t.field.defaultValue,
      "number-format": t.numberFormat,
      min: t.field.min || null,
      max: t.field.max || null,
      "multi-edit": t.multiEdit,
      text: t.field.text,
      issue: p.value,
      warning: $.value,
      "disable-required-validation": C.value,
      "onUpdate:value": G,
      onValidation: Z,
      onBlur: he
    }, {
      default: wn(() => [
        V.value ? (O(), D("p", Op, [
          Ge(I(Ri), { icon: ["fass", "info-circle"] }),
          ct(" " + pe(V.value), 1)
        ])) : ae("", !0),
        Sn(T.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "data-field", "data-index", "type", "value", "label", "placeholder", "enable-label", "output", "options", "select-first-option-disabled", "disabled", "readonly", "required", "allow-zero", "true-value", "false-value", "default", "number-format", "min", "max", "multi-edit", "text", "issue", "warning", "disable-required-validation"]));
  }
}), Fp = { class: "checkout-calculator-wrapper" }, Tp = {
  key: 0,
  class: "row table-heading"
}, Ep = {
  key: 0,
  class: "cell center"
}, Np = { class: "cell" }, Mp = {
  key: 0,
  class: "cell"
}, Bp = ["onClick"], Vp = { class: "cell" }, Dp = ["disabled", "aria-label", "onClick"], jp = { class: "button-wrapper main" }, Rp = ["aria-label"], Gp = ["aria-label", "disabled"], qp = ["aria-label"], _p = { id: "part-count" }, Up = {
  key: 2,
  class: "pagination-controls"
}, Wp = { class: "c-btn-group" }, zp = ["disabled"], Hp = ["disabled"], Kp = { class: "pagination-info" }, Zp = ["disabled"], Jp = ["disabled"], Yp = {
  key: 4,
  id: "messages"
}, Xp = {
  key: 0,
  class: "heading"
}, Qp = { class: "content" }, eh = {
  key: 5,
  id: "progress"
}, th = { id: "diagram-wrapper" }, nh = {
  key: 0,
  id: "stack"
}, ih = {
  key: 4,
  class: "debug"
}, As = !1, sh = /* @__PURE__ */ lt({
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
    }
  },
  emits: ["inputs-changed", "calculating", "validation-error", "before-calculate", "result", "no-result", "log", "error"],
  setup(t, { expose: e, emit: n }) {
    const i = Tn(() => import("./InputIssues-DOLdBgLy.js")), s = Tn(() => import("./Machining-QCKo0yAc.js")), a = Tn(() => import("./ImportCSV-DwCdH-jy.js")), o = Tn(() => Promise.resolve().then(() => md)), l = Tn(() => import("./ImageUpload-B3J35MW6.js")), {
      inputs: r,
      totalInputShapes: h,
      getShapeGrainSummary: b,
      updateNumberFormat: S,
      validateInputStock: p,
      // validateInputShapeField,
      // validateInputStockField,
      removeInputShape: $,
      addInputShape: C,
      addInputStock: M,
      cloneInputShape: E,
      updateInputShape: V,
      validationIssues: G,
      setExtrasOptionsFromPricing: Z,
      getCentralizedOptions: he
    } = to(), { r: T, updateFromResult: N, stackedStock: ee, uniqueAddedShapes: w, uniqueUsedStock: j, usedStock: x, activeStockAutoId: H, activeStock: se, setActiveStockAutoId: re } = zi();
    Cd({
      stockList: T.stockList
    }, {
      stockList: { itemsPerPage: 10 }
    });
    const { progress: oe, reset: Be } = mo(), { addNotice: Y } = js(), ce = F(() => r.inputShapes.value.filter(qe)), Ce = (c) => !c || !Array.isArray(c) ? [] : c.map((u) => oc({ parts: [u] }).parts?.[0] || u), J = !1, le = t, ge = n, $e = z(!1), It = "production", nt = z(navigator?.language || "en-US"), ze = qn(null), Ft = window.location.hostname, yt = z(!1), rn = z(!0), Tt = dl("Checkout/currentURL", window.location.href), mt = z([]), Et = z(null), wt = z(null), cn = z(!1), Nt = z(!1), st = z(!1), Wt = z(!1), Vt = z(!1), un = z(ur()), de = z(!1), Re = z(1), _e = z(10), { socket: ut } = lf({
      refs: {
        connected: yt,
        thinking: st
      },
      callbacks: {
        onResult(c) {
          const u = c.optimisation;
          if (N(u), !u.shapeList?.length || !u.stockList?.length) {
            Be(), Y({
              type: "error",
              message: ke("errors.calculation.no_result"),
              additional: [ke("errors.validation.check_inputs")]
            }), st.value = !1;
            return;
          }
          if ((v.apiVersion || 3) === 2 ? wt.value = ap(
            c.jobId,
            w.value,
            j.value,
            x.value,
            T.offcuts?.value || [],
            r.inputShapes.value,
            T.metadata.value,
            v.resultOrientationModel
          ) : wt.value = op(
            c.jobId,
            w.value,
            j.value,
            x.value,
            T.offcuts?.value || [],
            r.inputShapes.value,
            T.metadata.value,
            v.resultOrientationModel
          ), T?.metadata?.value?.unplacedParts?.length) {
            const d = T.metadata.value.unplacedParts.map((k) => k.id).join();
            Y({
              type: "warning",
              message: ke("errors.validation.parts_not_fit", { count: T.metadata.value.unplacedParts.length }) + ": " + d
            });
          }
          wt.value && (wt.value.apiResultV3 = bc({
            jobId: c.jobId,
            saw: u.saw,
            stockList: u.stockList,
            shapeList: u.shapeList,
            cutList: u.cutList,
            offcuts: T.offcuts?.value || [],
            unusableShapes: u.unusableShapes,
            metadata: T.metadata.value
          }), ge("result", wt.value)), st.value = !1;
        },
        onUser(c) {
          ze.value = c;
        },
        onConnectError(c) {
          Y({
            type: "error",
            message: ke("errors.network.cannot_connect"),
            additional: [c]
          });
        },
        onError(c) {
          Y({
            type: "error",
            message: ke("errors.general.error_occurred"),
            additional: [c]
          });
        }
      }
    }), A = {
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
    }, v = Bt(A), m = Bt({
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
    }), q = z(null), ie = z(!1), Se = z(""), ye = z("");
    Ke(G, (c) => {
      c?.length > 0 ? (ie.value = !0, Se.value = "Validation Errors", ye.value = c.map((u) => `${u.message} (${u.category.join(", ")})`).join(`

`)) : Se.value === "Validation Errors" && (ie.value = !1, Se.value = "", ye.value = "");
    }, { deep: !0 });
    const Pe = Bt({
      banding: null,
      finish: null,
      info: null,
      planing: null
      // imageUpload: null
    }), we = z([]), Te = z([]), Dt = z([]), He = z([]), At = Bt({
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
    }), Ee = Bt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["l1", "l2", "w1", "w2"]
    }), Qe = Bt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["a", "b"]
    }), Ze = Bt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]
      // All sides and faces by default
    }), ui = z(null), dt = Bt({}), zt = Bt({}), Ht = Bt({}), Kt = z(null), Zt = z(null), di = F(() => ({
      banding: dt.rules,
      finish: zt.rules,
      planing: Ht.rules
    })), fi = F(() => of({
      stockType: m.stockType || "sheet",
      materials: we.value,
      minDimension: v.minDimension,
      ...v.fieldOrder && v.fieldOrder.length > 0 ? { allowedFieldIds: v.fieldOrder } : {}
    })), Kn = z([]), dn = z({
      material: !1,
      l: !0,
      w: !0,
      t: !1,
      q: !0,
      name: !0,
      banding: !1,
      orientationLock: !0,
      finish: !1,
      planing: !1,
      machining: !1,
      imageUpload: !1,
      fullStock: !1
    }), Ln = F(() => {
      const c = fi.value.fields.value, u = fi.value.allFieldsMap.value, g = c.filter((ue) => dn.value[ue.name] ?? !0), d = ["orientationLock", "banding", "finish", "planing", "machining", "imageUpload"], k = [];
      let L = null;
      const R = g.filter((ue) => ue.name !== "fullStock");
      dn.value.fullStock && (L = g.find((ue) => ue.name === "fullStock") || u.get("fullStock"));
      for (const ue of d) {
        const Ve = dn.value[ue], Oe = R.find((Ne) => Ne.name === ue);
        if (Ve && !Oe) {
          const Ne = u.get(ue);
          Ne && k.push(Ne);
        }
      }
      const ne = Kn.value || [];
      return [
        ...L ? [L] : [],
        ...R,
        ...k,
        ...ne
      ];
    }), fn = F(() => Ln.value.length + 2), Ki = F(() => {
      const c = {
        id: 34,
        del: 32
      }, u = {
        id: `${c.id}px`,
        del: `${c.del}px`
      }, g = [];
      for (const d of Ln.value) {
        if (d.name === "trim") continue;
        const k = d.w ?? "minmax(20px, 1fr)";
        g.push(k);
      }
      return g.unshift(u.id), g.push(u.del), g.join(" ");
    }), $n = F(() => v.enable?.pagination), pi = F(() => le.diagramNav || v.enable?.diagramNav), Jt = F(() => $n.value ? Math.ceil(ce.value.length / _e.value) : 1), Zi = F(() => {
      if (!$n.value) return ce.value;
      const c = (Re.value - 1) * _e.value, u = c + _e.value;
      return ce.value.slice(c, u);
    }), Ji = F(() => $n.value ? (Re.value - 1) * _e.value : 0), Nn = (c) => {
      c < 1 && (c = 1), c > Jt.value && (c = Jt.value), Re.value = c;
    }, hi = () => Nn(1), Yi = () => Nn(Re.value - 1), Xi = () => Nn(Re.value + 1), f = () => Nn(Jt.value), y = F(() => v.debug || v.enable?.debug), B = F(() => {
      try {
        const c = localStorage.getItem("inputs/inputStock");
        if (!c) return "(empty)";
        const u = JSON.parse(c);
        return JSON.stringify(u.map((g) => ({ material: g.material, db_id: g.db_id, l: g.l, w: g.w, t: g.t })), null, 2);
      } catch {
        return "(parse error)";
      }
    }), _ = F(() => {
      try {
        const c = localStorage.getItem("stock-filter-selections");
        return c || "(empty)";
      } catch {
        return "(read error)";
      }
    }), W = F(() => ({
      "--btn-color": v.colors.buttonText,
      "--btn-bg": v.colors.button,
      "--btn-hover-bg": te(v.colors.button, -8),
      "--btn-focus-ring": v.colors.button
    }));
    function te(c, u) {
      const g = c.replace("#", ""), d = parseInt(g, 16), k = Math.round(2.55 * u), L = (d >> 16) + k, R = (d >> 8 & 255) + k, ne = (d & 255) + k;
      return `#${(16777216 + (L < 255 ? L < 1 ? 0 : L : 255) * 65536 + (R < 255 ? R < 1 ? 0 : R : 255) * 256 + (ne < 255 ? ne < 1 ? 0 : ne : 255)).toString(16).slice(1)}`;
    }
    const fe = {
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
    }, Le = F(() => le.showCredit !== void 0 ? le.showCredit : ze.value ? !(ze.value && ze.value?.api?.whiteLabel) : !0), me = {
      // @deprecated Use saw.options.stockSelection instead
      stockSelection: (c) => {
        const u = ["efficiency", "smallest"];
        c && !u.includes(c) ? console.warn(`${c} is not a valid stockSelection, expected ${u.join("|")}`) : m.options.stockSelection = c;
      },
      // @deprecated Use saw.options.minSpacing instead
      minSpacing: (c) => {
        m.options.minSpacing = c;
      },
      maxParts: (c) => {
        v.maxParts = c;
      },
      partsPerPage: (c) => {
        c && c > 0 && (_e.value = c, v.partsPerPage = c);
      },
      locale: (c) => {
        nt.value = c.replace(/_/g, "-");
      },
      enable: (c) => {
        const u = {
          banding: "banding",
          name: "partName",
          finish: "finish",
          planing: "planing",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload",
          fullStock: "fullStock"
        };
        if (c) {
          for (const g in A.enable)
            g in c && (v.enable[g] = c[g]);
          for (const g in u) {
            const d = u[g], k = yn(c, [d]), L = A.enable[d];
            be(g, k !== void 0 ? k : L);
          }
          Vt.value = yn(c, ["csvImport"]) ?? A.enable?.csvImport;
        }
      },
      colors: (c) => {
        if (c)
          for (const u in A.colors)
            u in c && (v.colors[u] = c[u]);
      },
      orientationModel: (c) => {
        if (![0, 1, 2].includes(c)) {
          v.orientationModel = 0;
          return;
        }
        v.orientationModel = c;
      },
      numberFormat: (c) => {
        if (!["decimal", "fraction"].includes(c)) {
          v.numberFormat = "decimal";
          return;
        }
        v.numberFormat = c;
      },
      customFields: (c) => {
        if (!Array.isArray(c) || !c?.length)
          return;
        const u = [];
        c.forEach((g) => {
          const d = Me(g.id), k = {
            ...g,
            custom: !0,
            id: d,
            name: d,
            // CheckoutField expects 'name' property
            propertyPath: "customData." + d,
            fieldMap: "customData." + d
          };
          g.type === "checkbox" && (k.w = "32px"), g.type === "integer" || g.type === "float" ? k.output = g.output ?? "number" : g.type === "select" && (k.output = g.output ?? "string", k.options = g.options), u.push(k);
        }), Kn.value = u, Ct(() => {
          for (const g of r.inputShapes.value)
            g.customData = c.reduce((d, k) => {
              const L = Me(k.id);
              return d[L] = g.customData?.[L] || k.default || "", d;
            }, {});
        });
      }
    }, pt = (c) => {
      y.value && ge("log", ["checkout init...", c]), c?.stockFilterEnabled && localStorage.removeItem("inputs/inputStock"), c?.parts && (c.parts = Ce(c.parts));
      let u;
      try {
        u = np(c);
      } catch (d) {
        console.error("[init] validation FAILED:", d.message), ge("error", d.message || "Invalid init data");
        return;
      }
      if (u.saw) {
        const d = u.saw;
        if (d.stockType !== void 0 && (Ls.includes(d.stockType) || console.warn(`${d.stockType} is not a valid stockType, expected ${Ls.join("|")}`), m.stockType = d.stockType, d.stockType === "linear" && (m.cutType = void 0, m.cutPreference = void 0)), d.bladeWidth !== void 0) {
          const k = typeof d.bladeWidth == "string" ? parseFloat(d.bladeWidth) : d.bladeWidth;
          k >= 0 ? m.bladeWidth = k : console.warn(`SmartCut - you provided an incorrect blade width of: ${d.bladeWidth}`);
        }
        if (d.cutType !== void 0 && (m.cutType = d.cutType), d.cutPreference !== void 0 && (ia.includes(d.cutPreference) ? m.cutPreference = d.cutPreference : console.warn(`SmartCut - cut preference ${d.cutPreference || "N/A"} is not valid. Expected: ${ia.join("|")}`)), d.guillotineOptions !== void 0 && typeof d.guillotineOptions == "object" && Object.assign(m.guillotineOptions, d.guillotineOptions), d.stackHeight !== void 0) {
          const k = typeof d.stackHeight == "string" ? parseFloat(d.stackHeight) : d.stackHeight;
          m.stackHeight = k;
        }
        d.efficiencyOptions !== void 0 && typeof d.efficiencyOptions == "object" && Object.assign(m.efficiencyOptions, d.efficiencyOptions), d.options !== void 0 && typeof d.options == "object" && (d.options.stockSelection !== void 0 && (m.options.stockSelection = d.options.stockSelection), d.options.stackingMode !== void 0 && (m.options.stackingMode = d.options.stackingMode), d.options.minSpacing !== void 0 && (m.options.minSpacing = d.options.minSpacing));
      }
      if (u?.options) {
        const d = u.options;
        no(d);
        const k = ["stockType", "bladeWidth"];
        if (!u.saw && !c?.stockFilterEnabled)
          ge("error", `Saw configuration is required. Missing properties: ${k.join(", ")}`);
        else if (u.saw) {
          const R = k.filter((ne) => !(ne in u.saw));
          R.length > 0 && ge("error", `Missing required saw properties: ${R.join(", ")}`), (u.saw.cutType === "guillotine" || u.saw.cutType === "beam") && !("cutPreference" in u.saw) && ge("error", "cutPreference is a required saw property for guillotine and beam cut types");
        }
        const L = ["enable", "colors"];
        for (const R in d)
          L.includes(R) || (v[R] = d[R]), R in me && me[R]?.(d[R]);
      }
      if (u.options.colors && "colors" in me && me.colors(u.options.colors), u.banding) {
        const d = u.banding;
        "locations" in d && d.locations && (dt.locations = d.locations), "groups" in d && d.groups && (dt.groups = d.groups), "rules" in d && d.rules && (dt.rules = d.rules);
      }
      if (u.finish) {
        const d = u.finish;
        "locations" in d && d.locations && (zt.locations = d.locations), "groups" in d && d.groups && (zt.groups = d.groups), "rules" in d && d.rules && (zt.rules = d.rules);
      }
      if (u.planing) {
        const d = u.planing;
        "locations" in d && d.locations && (Ht.locations = d.locations), "groups" in d && d.groups && (Ht.groups = d.groups), "rules" in d && d.rules && (Ht.rules = d.rules);
      }
      u.partRules && (Kt.value = u.partRules), u.customValidation && (Zt.value = u.customValidation), ls("banding", u), ls("finish", u), ls("planing", u), gi(u), _s(u), r.inputShapes.value.length && Hs(), Nt.value = !0, y.value && ge("log", ["init complete"]);
      const g = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(g), Ct(() => {
        Le.value && !jo() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      }), u.parts?.length && Ct(() => {
        y.value && ge("log", ["loading parts via init..."]), r.inputShapes.value.length = 0;
        let d = 0;
        for (const L of u.parts) {
          const R = bi(L);
          R ? R.issues?.length && y.value && ge("log", [`SmartCut - issues found while importing part at index ${d}`, R.issues]) : y.value && ge("log", [`SmartCut - error loading part at index ${d}`, L]), d++;
        }
        r.inputShapes.value.flatMap((L) => Os(L.issues)).length && Y({
          type: "error",
          message: ke("errors.general.issues_found")
        }), y.value && ge("log", [`loaded ${r.inputShapes.value.length} parts via init`]);
      });
    }, be = (c, u = !1) => {
      dn.value[c] = u;
    }, Me = (c) => c ? pr(c)?.toLowerCase() : null, Ue = (c, u, g) => {
      try {
        if (!c || !u) return;
        const k = g !== null && g !== "" && g !== void 0 && !["orientationLock", "grain"].includes(u), L = (X, ue) => {
          if (!V(X.autoId, ue)) {
            for (const [Oe, Ne] of Object.entries(ue))
              gs(X, Oe, Ne);
            X.isNew || X.validate({ fields: Object.keys(ue) });
          }
        }, R = (X, ue, Ve) => {
          const Oe = ue ?? X.material, Ne = Ve ?? X.t, bt = r.inputStock.value.find((Yt) => {
            const ki = !Oe || Yt.material === Oe, xi = Ne == null || ve({ v: Yt.t }) === ve({ v: Ne });
            return ki && xi;
          });
          return bt ? { l: ve({ v: bt.l }), w: ve({ v: bt.w }) } : null;
        };
        if (u === "material" && (!g || g === "")) {
          const X = { material: null, t: null };
          m.stockType === "linear" && (X.w = null), L(c, X);
          return;
        }
        if (u === "material" && g && we.value?.length) {
          const X = we.value.find((ue) => ue.name === g);
          if (X) {
            const ue = { material: g };
            if (c.t != null) {
              const Oe = ve({ v: c.t });
              !X.thicknesses.some((Ne) => ve({ v: Ne }) === Oe) && X.thicknesses.length > 0 && (ue.t = ve({ v: X.thicknesses[0] }));
            }
            if (m.stockType === "linear" && c.w != null && X.widths) {
              const Oe = ve({ v: c.w });
              !X.widths.some((Ne) => ve({ v: Ne }) === Oe) && X.widths.length > 0 && (ue.w = ve({ v: X.widths[0] }));
            }
            L(c, ue), Dn(c, X), Vn(c);
            const Ve = r.inputShapes.value.indexOf(c);
            for (const Oe of ["banding", "finish", "planing"])
              if (Pe[Oe] === Ve) {
                const Ne = Je(c, Oe);
                Ne.options.length && Z(Oe, Ne.options, Ne.labels, Ne.pricing);
              }
            return;
          }
        }
        if (u === "fullStock")
          if (g === !0) {
            const X = R(c);
            if (X) {
              L(c, { fullStock: !0, l: X.l, w: X.w });
              return;
            }
          } else {
            L(c, { fullStock: !1, l: null, w: null });
            return;
          }
        if ((u === "material" || u === "t") && c.fullStock) {
          const X = R(
            c,
            u === "material" ? g : void 0,
            u === "t" ? g : void 0
          );
          if (X) {
            L(c, { [u]: g, l: X.l, w: X.w });
            return;
          }
        }
        if (c.isNew)
          if (k)
            c.isNew = !1;
          else {
            gs(c, u, g);
            return;
          }
        let ne;
        if (u.includes(".")) {
          const X = u.split("."), ue = X[0], Ve = X.slice(1).join("."), Ne = { ...c[ue] || {} };
          gs(Ne, Ve, g), ne = { [ue]: Ne };
        } else
          ne = { [u]: g };
        L(c, ne), u === "t" && m.stockType === "linear" && we.value?.length && c.material && Ct(() => {
          const X = pn(c);
          if (X.length > 0 && c.w != null) {
            const ue = ve({ v: c.w });
            X.some((Ve) => ve({ v: Ve }) === ue) || L(c, { w: ve({ v: X[0] }) });
          }
        });
      } catch (d) {
        console.error("[CHECKOUT] Error updating field:", d);
      }
    }, jt = () => {
    }, Rt = (c, u) => {
      c?.isNew && (c.isNew = !1), c.validate({ fields: [u] }), ["l", "w", "t"].includes(u) && Mn(c);
    }, Mn = (c) => {
      if (Kt.value && c && !c.isNew && !(!c.l && !c.w))
        try {
          const u = Tf(c, Kt.value);
          if (c.issues && (c.issues = c.issues.filter((g) => !g.category?.includes("part"))), !u.valid && u.violations.length > 0)
            for (const g of u.violations) {
              const d = Nf(g), k = g.dimension === "longSide" ? "l" : g.dimension === "shortSide" ? "w" : null;
              new Ut({
                item: c,
                type: "error",
                category: ["part"],
                field: k ? [[k]] : [],
                message: d,
                shouldTranslate: !1
              });
            }
        } catch (u) {
          console.error("[CHECKOUT] Error validating part:", u);
        }
    }, gi = (c) => {
      if (yn(v, ["enable", "machining"]) && c?.machining) {
        for (const u in At)
          c.machining[u] && (At[u] = c.machining[u]);
        if (["holes", "hingeHoles"].forEach((u) => {
          c?.machining?.[u] && (At[u].enabled = c?.machining?.[u].enabled);
        }), c?.machining?.corners?.types?.length && (At.corners.enabled = !0, At.corners.types = c.machining.corners.types), c.banding && c?.options?.enable?.banding) {
          if (!Ee) return;
          At.banding = {
            enabled: !0
          }, Ee.options.length && (At.banding.options = Ee.options), Ee.labels.length && (At.banding.labels = Ee.labels), sa(Ee.pricing) && (At.banding.pricing = Ee.pricing);
        }
      }
    }, Qi = (c = null) => {
      q.value = c, c && qe(c) && c.l && c.w ? $e.value = !0 : alert(ke("machining.enter_dimensions_first"));
    }, es = () => {
      $e.value = !1;
    }, Bn = (c = []) => {
      if (Te.value = [], Dt.value = [], be("t", !1), !!c.length) {
        for (const u of c)
          if (u?.t)
            if (typeof u.t == "string" && u.t.includes(",")) {
              const g = vi(u.t, !0);
              g.length === 2 ? (Eo(g), be("t", !0), u.t = Te.value[0]) : ge("error", "bonded thickness found which does not have 2 options");
            } else Te.value.includes(u.t) || Te.value.push(u.t);
        Te.value.length > 1 && be("t", !0);
      }
    }, Fn = (c = []) => {
      if (He.value = [], !c.length) {
        be("w", !1);
        return;
      }
      for (const u of c) {
        if (!u?.w) continue;
        const g = ve({ v: u.w });
        He.value.includes(g) || He.value.push(g);
      }
      He.value.length >= 1 ? be("w", !0) : be("w", !1);
    }, et = (c) => {
      if (!c) return { thicknesses: [], bondedThicknesses: [] };
      if (!we.value?.length)
        return {
          thicknesses: Te.value,
          bondedThicknesses: []
        };
      if (!c.material)
        return {
          thicknesses: Te.value,
          bondedThicknesses: []
        };
      const u = we.value.find((k) => k.name === c.material);
      if (!u)
        return {
          thicknesses: Te.value,
          bondedThicknesses: []
        };
      const g = [...u.thicknesses], d = [];
      for (let k = 0; k < g.length; k++) {
        const L = g[k], R = vi(L), ne = [];
        if (R.length) {
          for (const X of R)
            g[k] = X, ne.push(k);
          k++;
        }
        ne.length && d.push(ne);
      }
      return {
        thicknesses: g,
        bondedThicknesses: d
      };
    }, pn = (c) => {
      if (!c) return [];
      if (!we.value?.length || !c.material)
        return He.value;
      const u = we.value.find((g) => g.name === c.material);
      if (!u)
        return He.value;
      if (c.t != null && r.inputStock?.value?.length) {
        const g = ve({ v: c.t }), d = /* @__PURE__ */ new Set();
        for (const k of r.inputStock.value)
          k.material?.toUpperCase() === c.material && ve({ v: k.t }) === g && k.w != null && d.add(ve({ v: k.w }));
        if (d.size > 0)
          return Array.from(d).sort((k, L) => k - L);
      }
      return u.widths || He.value;
    }, mi = (c) => c === "banding" ? Ee : c === "finish" ? Qe : c === "planing" ? Ze : null, Lo = (c, u) => os(c?.stock?.db_id)?.customData?.stockExtras?.[u], $o = (c) => {
      switch (c) {
        case "banding":
          return dt.groups;
        case "finish":
          return zt.groups;
        case "planing":
          return Ht.groups;
        default:
          return;
      }
    }, Je = (c, u) => {
      const g = mi(u), d = {
        options: g?.options ?? [],
        labels: g?.labels ?? [],
        pricing: g?.pricing ?? {},
        displayNames: g?.displayNames ?? {}
      };
      if (!c?.material) return d;
      const k = Lo(c, u);
      if (!k) return d;
      const L = k.code || k.name, R = k.groups;
      if (R && R.length > 0) {
        const Oe = $o(u) || [], Ne = {};
        for (const St of R)
          typeof St.price == "number" && (Ne[St.id] = St.price);
        const bt = Oe.filter((St) => Ne[St.id] !== void 0).map((St) => ({ ...St, price: Ne[St.id] })), Yt = {}, ki = [], xi = {};
        for (const St of bt) {
          const rs = `${L}|${St.id}`;
          Yt[rs] = St.price, ki.push(rs), St.label && (xi[rs] = St.label);
        }
        const tl = [u.charAt(0).toUpperCase() + u.slice(1)];
        return {
          options: [ki],
          labels: tl,
          pricing: Yt,
          displayNames: xi,
          locations: [],
          // empty so render path applies hideIndividualLocations filter
          locationGroups: bt
        };
      }
      const ne = k.pricing && typeof k.pricing == "object" ? k.pricing : { [L]: k.price ?? 0 }, X = k.labels?.length ? k.labels : [u.charAt(0).toUpperCase() + u.slice(1)], ue = wi(ne), Ve = k.displayNames && typeof k.displayNames == "object" ? { ...k.displayNames } : { ...g?.displayNames ?? {} };
      return k.code && k.name && k.code !== k.name && (Ve[k.code] = k.name), { options: ue, labels: X, pricing: ne, displayNames: Ve, locations: k.locations?.length ? k.locations : void 0 };
    }, ts = (c, u) => Je(c, u).options, Fo = (c) => {
      const u = { banding: !1, finish: !1, planing: !1, machining: !1 };
      if (!c?.material) return u;
      const d = os(c?.stock?.db_id)?.customData?.stockExtras;
      return d ? {
        banding: !d.banding,
        finish: !d.finish,
        planing: !d.planing,
        machining: !d.machining
      } : u;
    }, _s = (c) => {
      if (c?.stock?.some((u) => u?.material)) {
        we.value = [], Te.value = [], Dt.value = [];
        const u = /* @__PURE__ */ new Map();
        for (const k of c.stock) {
          if (!k.material) continue;
          const L = yi(k);
          u.has(L) || u.set(L, { db_id: k.db_id, code: k.code, thicknesses: /* @__PURE__ */ new Set(), widths: /* @__PURE__ */ new Set() }), k.t != null && (typeof k.t == "string" && k.t.includes(",") ? u.get(L)?.thicknesses.add(k.t) : u.get(L)?.thicknesses.add(ve({ v: k.t }))), m.stockType === "linear" && k.w != null && u.get(L)?.widths.add(ve({ v: k.w }));
        }
        const g = Array.from(u.entries()).map(([k, L]) => {
          const R = [], ne = [];
          for (const X of L.thicknesses)
            typeof X == "string" && X.includes(",") ? ne.push(X) : R.push(ve({ v: X }));
          return { name: k, sets: L, regularThicknesses: R, bondedStrings: ne };
        });
        we.value = g.map(({ name: k, sets: L, regularThicknesses: R }) => {
          const ne = {
            name: k,
            db_id: L.db_id,
            code: L.code,
            thicknesses: R.sort((X, ue) => X - ue)
          };
          return m.stockType === "linear" && L.widths.size > 0 && (ne.widths = Array.from(L.widths).sort((X, ue) => X - ue)), ne;
        });
        const d = /* @__PURE__ */ new Set();
        for (const k of we.value)
          for (const L of k.thicknesses)
            d.add(ve({ v: L }));
        Te.value = Array.from(d).sort((k, L) => k - L);
        for (let k = 0; k < g.length; k++) {
          const { bondedStrings: L } = g[k], R = we.value[k];
          for (const ne of L) {
            const X = vi(ne, !0);
            if (X.length !== 2) continue;
            const ue = [];
            for (const Ve of X) {
              const Oe = ve({ v: Ve });
              let Ne = Te.value.findIndex((bt) => ve({ v: bt }) === Oe);
              Ne === -1 ? (Te.value.push(Oe), R.thicknesses.push(Oe), Ne = Te.value.length - 1) : R.thicknesses.some((bt) => ve({ v: bt }) === Oe) || R.thicknesses.push(Oe), ue.push(Ne);
            }
            Dt.value.push(ue);
          }
        }
        if (m.stockType === "linear") {
          const k = /* @__PURE__ */ new Set();
          for (const L of we.value)
            if (L.widths)
              for (const R of L.widths)
                k.add(ve({ v: R }));
          He.value = Array.from(k).sort((L, R) => L - R);
        }
        we.value.length > 1 ? be("material", !0) : be("material", !1), Te.value.length > 1 ? be("t", !0) : be("t", !1), m.stockType === "linear" && He.value.length > 1 ? be("w", !0) : m.stockType === "linear" && be("w", !1);
      } else
        Bn(c.stock);
      m.stockType === "linear" && !we.value?.length && Fn(c.stock);
    }, To = (c) => {
      if (!c?.length) {
        we.value = [], Te.value = [], He.value = [];
        return;
      }
      if (c.some((g) => g?.material)) {
        const g = /* @__PURE__ */ new Map();
        Dt.value = [];
        for (const L of c) {
          if (!L.material) continue;
          const R = yi(L);
          g.has(R) || g.set(R, { db_id: L.db_id, code: L.code, thicknesses: /* @__PURE__ */ new Set(), widths: /* @__PURE__ */ new Set() }), L.t != null && (typeof L.t == "string" && L.t.includes(",") ? g.get(R)?.thicknesses.add(L.t) : g.get(R)?.thicknesses.add(ve({ v: L.t }))), m.stockType === "linear" && L.w != null && g.get(R)?.widths.add(ve({ v: L.w }));
        }
        const d = Array.from(g.entries()).map(([L, R]) => {
          const ne = [], X = [];
          for (const ue of R.thicknesses)
            typeof ue == "string" && ue.includes(",") ? X.push(ue) : ne.push(ve({ v: ue }));
          return { name: L, sets: R, regularThicknesses: ne, bondedStrings: X };
        });
        we.value = d.map(({ name: L, sets: R, regularThicknesses: ne }) => {
          const X = {
            name: L,
            db_id: R.db_id,
            code: R.code,
            thicknesses: ne.sort((ue, Ve) => ue - Ve)
          };
          return m.stockType === "linear" && R.widths.size > 0 && (X.widths = Array.from(R.widths).sort((ue, Ve) => ue - Ve)), X;
        });
        const k = /* @__PURE__ */ new Set();
        for (const L of we.value)
          for (const R of L.thicknesses)
            k.add(ve({ v: R }));
        Te.value = Array.from(k).sort((L, R) => L - R);
        for (let L = 0; L < d.length; L++) {
          const { bondedStrings: R } = d[L], ne = we.value[L];
          for (const X of R) {
            const ue = vi(X, !0);
            if (ue.length !== 2) continue;
            const Ve = [];
            for (const Oe of ue) {
              const Ne = ve({ v: Oe });
              let bt = Te.value.findIndex((Yt) => ve({ v: Yt }) === Ne);
              bt === -1 ? (Te.value.push(Ne), ne.thicknesses.push(Ne), bt = Te.value.length - 1) : ne.thicknesses.some((Yt) => ve({ v: Yt }) === Ne) || ne.thicknesses.push(Ne), Ve.push(bt);
            }
            Dt.value.push(Ve);
          }
        }
        if (m.stockType === "linear") {
          const L = /* @__PURE__ */ new Set();
          for (const R of we.value)
            if (R.widths)
              for (const ne of R.widths)
                L.add(ve({ v: ne }));
          He.value = Array.from(L).sort((R, ne) => R - ne);
        }
        be("material", we.value.length > 1), be("t", Te.value.length > 1), m.stockType === "linear" && be("w", He.value.length > 1);
      } else
        Bn(c), m.stockType === "linear" && Fn(c);
    }, Eo = (c, u = null) => {
      if (!Array.isArray(c)) {
        ge("error", "addBondedThicknesses expects an array");
        return;
      }
      const g = [];
      for (let d of c)
        v.numberFormat === "decimal" && (d = parseFloat(d)), Te.value.push(d), u && u.thicknesses.push(d), g.push(Te.value.length - 1);
      Dt.value.push(g);
    }, No = (c) => {
      const { thicknesses: u } = et(c);
      return u?.length ? u.map((g) => ({
        label: g?.toString(),
        value: g
      })) : [];
    }, Mo = (c) => {
      const u = pn(c);
      return u?.length ? u.map((g) => ({
        label: g?.toString(),
        value: g
      })) : [];
    }, vi = (c, u = !1) => {
      if (typeof c == "string" && c.includes(",")) {
        const g = c.split(",");
        if (g.length === 2) {
          const d = parseFloat(g[0]), k = parseFloat(g[1]);
          !isNaN(d) && !isNaN(k) && k !== d * 2 && Y({
            type: "warning",
            message: `Bonded thickness "${c}" does not follow the expected pattern (second value should be double the first)`
          });
        }
        return u ? g.map((d) => ve({ v: d })) : g;
      }
      return [];
    }, Bo = () => {
      de.value ? Do() : Vo();
    }, Vo = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), de.value = !0;
    }, Do = () => {
      document.exitFullscreen && document.exitFullscreen(), de.value = !1;
    }, jo = () => {
      if (ze.value?.api?.whiteLabel) return !0;
      let c = !0;
      const u = document.querySelector("#smartcut-checkout a#credit");
      if (!u) return c = !1;
      const g = window.getComputedStyle(u);
      return g.display === "none" || g.display === "hidden" || g.opacity === "0" || g.color === "transparent" || g.position !== "absolute" || g.color !== "#4e4e4e" && g.color !== "rgb(78, 78, 78)" ? c = !1 : (rn.value = c, c);
    }, ns = F(() => typeof le.findExtrasPrice == "function"), Ro = F(
      () => v.unitSystem === "imperial" ? "/ square ft" : "/ square m"
    ), Go = F(
      () => v.unitSystem === "imperial" ? "/ ft" : "/ m"
    ), Us = (c, u) => {
      let g, d;
      switch (u) {
        case "banding":
          g = Ee.options, d = Ee.labels;
          break;
        case "finish":
          g = Qe.options, d = Qe.labels;
          break;
        case "planing":
          g = Ze.options, d = Ze.labels;
          break;
        default:
          g = [], d = [];
      }
      bn(c, u, g, d);
    }, Ws = (c) => {
      const u = Object.keys(c);
      return Math.max(...u.map((d) => d.split("|").length));
    }, Zn = (c, u, g) => {
      if (!c)
        return [];
      if (g > 0 && !u[g - 1])
        return [];
      const d = /* @__PURE__ */ new Set();
      for (const L of Object.keys(c)) {
        const R = L.split("|");
        if (R.length > g) {
          let ne = !0;
          for (let X = 0; X < g; X++) {
            const ue = u[X], Ve = R[X];
            if (ue && ue !== Ve) {
              ne = !1;
              break;
            }
          }
          ne && d.add(R[g]);
        }
      }
      return Array.from(d);
    }, is = (c, u, g, d) => {
      const k = Je(c, u);
      return ps(c, u, g, (R, ne) => {
        const X = ne.filter((ue) => ue?.trim()).join("|");
        return X && k.pricing[X] !== void 0 ? k.pricing[X] : d ? d(R, ne) : null;
      }, k.options, k.labels);
    }, qo = (c, u, g) => {
      let d, k;
      switch (u) {
        case "banding":
          d = Ee.options, k = Ee.labels;
          break;
        case "finish":
          d = Qe.options, k = Qe.labels;
          break;
        case "planing":
          d = Ze.options, k = Ze.labels;
          break;
        default:
          d = [], k = [];
      }
      return ps(c, u, g, le.findExtrasPrice, d, k);
    }, _o = z({}), Uo = (c) => {
      const u = mt.value.findIndex((g) => g.shapeId === c.shapeId);
      u !== -1 ? mt.value[u] = c : mt.value.push(c), window.smartcutImages = mt.value;
    }, Wo = (c) => {
      mt.value = mt.value.filter((u) => u.shapeId !== c), window.smartcutImages = mt.value;
    }, zo = (c) => {
      Et.value = Et.value === c ? null : c;
    }, ss = (c = 1) => {
      for (let u = c; u--; ) {
        let g = {
          l: null,
          w: m.stockType === "linear" && He.value.length === 1 ? He.value[0] : null,
          t: Te.value.length ? Te.value[0] : null,
          q: 1,
          material: we.value?.length === 1 ? we.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (r.inputShapes.value.length > 0) {
          const k = r.inputShapes.value[r.inputShapes.value.length - 1];
          g.material = k.material, g.t = k.t, k.stock && (g.stock = { ...k.stock }), m.stockType === "linear" && k.w && (g.w = k.w);
        }
        const d = C(g);
        d && (Ee?.labels?.length && bn(d, "banding", Ee.options, Ee.labels), Qe?.labels?.length && bn(d, "finish", Qe.options, Qe.labels), Ze?.labels?.length && bn(d, "planing", Ze.options, Ze.labels));
      }
    }, bi = (c = {}) => {
      const u = {
        q: 1,
        // Always set quantity to 1
        ...c
      }, g = C(u);
      return g && (m.stockType === "linear" && He.value.length === 1 && !g.w && (g.w = He.value[0]), Te.value.length && !g.t && (g.t = Te.value[0]), we.value?.length === 1 && !g.material && (g.material = we.value[0].name), Ee?.labels?.length && bn(g, "banding", Ee.options, Ee.labels), Qe?.labels?.length && bn(g, "finish", Qe.options, Qe.labels), Ze?.labels?.length && bn(g, "planing", Ze.options, Ze.labels)), g;
    }, Ho = (c) => {
      if (Te.value.length)
        for (const u of c) {
          if (!u.t) continue;
          const g = Te.value.findIndex(
            (L) => ve({ v: L }) === u.t
          ), d = Dt.value.find((L) => L.includes(g));
          if (!d) continue;
          const k = Math.min(
            ...d.map((L) => Te.value[L])
          );
          ve({ v: u.t }) > k && (u.q = Number(u.q) * (ve({ v: u.t }) / k), u.notes = `Bond to form ${u.t.valueOf()}`, u.t = k);
        }
    }, zs = () => {
      Be(), re(null), T.stockList.value = [], T.shapeList.value = [], T.cutList.value = [];
    }, as = () => {
      r.inputShapes.value.length = 0, le.inputType !== "formula" && Ct(() => ss());
    }, os = (c) => {
      if (c)
        return r.inputStock.value.find((u) => u.db_id === c);
    }, Vn = (c) => {
      c.extras && (c.extras.banding = null, c.extras.finish = null, c.extras.planing = null);
    }, Ko = (c, u) => {
      const g = Je(c, u);
      return new Set(Object.keys(g.pricing || {}));
    }, Zo = (c) => {
      const u = { pruned: !1, types: /* @__PURE__ */ new Set() };
      if (!c?.extras) return u;
      const g = ["banding", "finish", "planing"];
      for (const d of g) {
        const k = c.extras[d];
        if (!k) continue;
        const L = Ko(c, d);
        if (k.faces)
          for (const R of ["a", "b"]) {
            const ne = k.faces[R];
            typeof ne == "string" && ne !== "" && !L.has(ne) && (k.faces[R] = "", u.pruned = !0, u.types.add(d));
          }
        if (k.sides)
          for (const R of ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]) {
            const ne = k.sides[R];
            typeof ne == "string" && ne !== "" && !L.has(ne) && (k.sides[R] = "", u.pruned = !0, u.types.add(d));
          }
      }
      return u;
    }, yi = (c) => (c.customData?.stockName || c.material || "").toUpperCase(), Jo = (c, u) => {
      const g = c.toUpperCase();
      return r.inputStock.value.find((d) => yi(d) === g && ve({ v: d.t }) === u);
    }, Dn = (c, u) => {
      const g = ve({ v: c.t }), d = Jo(u.name, g);
      c.stock = {
        db_id: d?.db_id || u.db_id,
        code: d?.code || u.code,
        material: u.name,
        thickness: g
      };
    }, Hs = () => {
      const c = /* @__PURE__ */ new Set();
      for (const u of r.inputShapes.value) {
        const g = u.stock, d = u.material?.toUpperCase();
        let k = null;
        if (g?.db_id) {
          const ne = os(g.db_id);
          ne && (k = we.value.find((X) => X.name === yi(ne))), k || (k = we.value.find((X) => X.db_id && X.db_id === g.db_id));
        }
        if (!k && g?.code && (k = we.value.find((ne) => ne.code && ne.code === g.code)), !k && d && (k = we.value.find((ne) => ne.name === d)), k)
          u.material = k.name, Dn(u, k), u.t != null && !k.thicknesses.includes(ve({ v: u.t })) && (u.t = null, u.stock = null, Vn(u));
        else {
          if ((g?.db_id || g?.code) && !we.value?.length)
            continue;
          if (we.value?.length === 1) {
            const ne = we.value[0], X = u.material !== ne.name;
            u.material = ne.name, ne.thicknesses.includes(ve({ v: u.t })) || (u.t = ve({ v: ne.thicknesses[0] })), Dn(u, ne), X && Vn(u);
          } else if (we.value?.length > 1 && u.t) {
            const ne = we.value.find((X) => X.thicknesses.some((ue) => ve({ v: ue }) === ve({ v: u.t })));
            ne ? (u.material !== ne.name && Vn(u), u.material = ne.name, Dn(u, ne)) : (Vn(u), u.material = we.value[0].name, u.t = ve({ v: we.value[0].thicknesses[0] }), Dn(u, we.value[0]));
          } else we.value?.length > 1 ? (Vn(u), u.material = we.value[0].name, u.t = ve({ v: we.value[0].thicknesses[0] }), Dn(u, we.value[0])) : !u.t && r.inputStock.value[0]?.t && (u.t = ve({ v: r.inputStock.value[0].t }));
        }
        const { pruned: L, types: R } = Zo(u);
        L && R.forEach((ne) => c.add(ne));
      }
      if (c.size > 0) {
        const u = [...c].join(", ");
        Y({
          type: "warning",
          message: `Some previously selected ${u} options are no longer available and have been cleared. Please review your selection.`
        });
      }
    }, Yo = async () => {
      if (ge("calculating"), st.value) return !1;
      st.value = !0, Wt.value = !1, Hs();
      const c = await vf({
        t: ke,
        partTrim: v.partTrim,
        maxShapes: v.maxParts || 1e3,
        maxStock: 1 / 0,
        // CheckoutCalculator doesn't have stock limits
        inputSaw: r.inputSaw.value,
        // Extras validation data
        bandingPricing: Ee.pricing,
        finishPricing: Qe.pricing,
        planingPricing: Ze.pricing,
        findExtrasPrice: le.findExtrasPrice,
        getShapeExtrasPricing: (L, R) => Je(L, R).pricing,
        extrasValidationRules: di.value,
        extrasLocationGroups: {
          banding: dt.groups,
          finish: zt.groups,
          planing: Ht.groups
        },
        onLimit: () => {
          Y({
            type: "error",
            message: ke("limits.max_parts") + " " + v.maxParts
          });
        }
      });
      if (Kt.value)
        for (const L of r.inputShapes.value)
          Mn(L);
      const u = r.inputShapes.value.flatMap((L) => L.issues || []).filter((L) => L.type === "error" && L.category?.includes("part") && !L.category?.includes("extras"));
      if (u.length > 0) {
        Y({
          type: "error",
          message: ke("errors.validation.inputs_issue", { 0: "part" }),
          additional: u.map((L) => L.message)
        }), ge("validation-error"), st.value = !1;
        return;
      }
      if (!c.valid) {
        ge("validation-error"), st.value = !1;
        return;
      }
      zs(), r.inputShapes.value.forEach((L, R) => {
        L.createId(R);
      }), r.inputStock.value.forEach((L, R) => {
        L.createId(R);
      });
      const g = r.inputShapes.value.map((L) => E(L)).filter(Boolean);
      if (g.length !== r.inputShapes.value.length)
        return Y({
          type: "error",
          message: "Some parts have validation errors and cannot be processed",
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), st.value = !1, !1;
      Ho(g), y.value && ge("log", [
        "SmartCut - calculating",
        "stock",
        r.inputStock.value.map((L) => ({ l: L.l, w: L.w })),
        "parts",
        g.map((L) => ({ l: L.l, w: L.w }))
      ]);
      const d = {
        inputSaw: r.inputSaw.value.toData(),
        inputShapes: g.map((L) => L.toData()),
        inputStock: r.inputStock.value.map((L) => L.toData()),
        inputUserGroups: [],
        enableEvo: !0,
        useInventory: !1,
        domain: Ft,
        extrasOptions: he(),
        source: "checkout",
        sourceVersion: "4.1.28"
      };
      if (Zt.value?.enabled && Zt.value?.rules?.length > 0) {
        const L = kf(
          Zt.value.rules,
          r.inputShapes.value.map((R) => R.toData())
        );
        if (!L.valid) {
          for (const R of L.errors) {
            const ne = R.partName ? `Part "${R.partName}"` : `Part ${R.partIndex + 1}`;
            Y({
              type: "error",
              message: `${ne}: ${R.message}`
            });
          }
          st.value = !1;
          return;
        }
      }
      ge("before-calculate", d);
      const k = new CustomEvent("smartcut/beforeCalculate", {
        cancelable: !0,
        detail: {
          data: d,
          error: null
        }
      });
      if (window.dispatchEvent(k), k.defaultPrevented) {
        k.detail.error && Y({
          type: "error",
          message: k.detail.error
        }), st.value = !1;
        return;
      }
      await ut.connect(), ut.emit("calculate", d);
    }, ls = (c, u) => {
      if (be(c, !1), !c || !u || !u?.[c] || !yn(v, ["enable", c]))
        return;
      const g = [c, "pricing"];
      if (!aa(u, g)) {
        ge("error", `${g.join(".")} not found in sent data`);
        return;
      }
      const d = yn(u, g);
      if (typeof d != "object") {
        ge("error", `${g.join(".")} data must be an object`);
        return;
      }
      if (!sa(d)) {
        ge("error", `if provided, ${g.join(".")} data must contain some values`);
        return;
      }
      const k = Object.keys(d), L = Object.values(d);
      if (!k.length) {
        ge("error", `no ${g.join(".")} pricing found`);
        return;
      }
      const R = /,/;
      for (const Oe of k)
        if (R.test(Oe)) {
          ge("error", `${g} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (L.some((Oe) => isNaN(Oe))) {
        ge("error", `${g} values must be a number`);
        return;
      }
      const ne = Ws(d), X = [c, "labels"];
      let ue = [];
      if (aa(u, X))
        ue = yn(u, X);
      else {
        ge("error", `${X.join(".")} not found`);
        return;
      }
      if (!ue) {
        ge("error", `${X.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(ue)) {
        ge("error", `${X.join(".")} data must be an array`);
        return;
      }
      if (!ue?.length) {
        ge("error", `if provided, ${X.join(".")} data must contain values`);
        return;
      }
      if (ue.length !== ne) {
        ge("error", `${X.join(".")} length (${ue.length}) must match the number of levels in ${g.join(".")} (${ne})`);
        return;
      }
      const Ve = yn(u, [c, "displayNames"]) || void 0;
      switch (c) {
        case "banding": {
          Ee.labels = ue, Ee.pricing = d, Ee.displayNames = Ve || {};
          const Oe = wi(d);
          Ee.options = Oe, Z("banding", Oe, ue, d, Ve);
          break;
        }
        case "finish": {
          Qe.labels = ue, Qe.pricing = d, Qe.displayNames = Ve || {};
          const Oe = wi(d);
          Qe.options = Oe, Z("finish", Oe, ue, d, Ve);
          break;
        }
        case "planing": {
          Ze.labels = ue, Ze.pricing = d, Ze.displayNames = Ve || {};
          const Oe = wi(d);
          Ze.options = Oe, Z("planing", Oe, ue, d, Ve);
          break;
        }
      }
      if (ui.value = he(), be(c, !0), !!r.inputShapes.value?.length)
        for (const Oe of r.inputShapes.value)
          Us(Oe, c);
    }, wi = (c) => {
      const u = [], g = Object.keys(c), d = Ws(c);
      for (let k = d; k--; ) u.push(/* @__PURE__ */ new Set());
      for (const k of g) {
        const L = k.split("|");
        d > 1 && L.length !== d || L.forEach((R, ne) => u[ne].add(R));
      }
      for (let k = 0; k < d; k++)
        u[k] = Array.from(u[k]);
      return u;
    }, Si = (c, u) => {
      if (!u) return;
      c !== "info" && Object.keys(Pe).forEach((d) => {
        d !== c && d !== "info" && (Pe[d] = null);
      });
      const g = r.inputShapes.value.indexOf(u);
      if (Pe[c] === g)
        q.value = null, Pe[c] = null, _o.value[c] = void 0;
      else if (q.value = u, Pe[c] = g, c !== "info") {
        const d = Je(u, c);
        d.options.length && Z(
          c,
          d.options,
          d.labels,
          d.pricing
        );
      }
    }, Ks = (c) => {
      y.value && ge("log", ["load event received"]), Nt.value && Xo(c.detail);
    }, Xo = (c) => {
      if (y.value && ge("log", ["loading parts..."]), !c || !c?.inputs?.parts?.length) {
        y.value && ge("log", ["could not find any parts to import"]);
        return;
      }
      r.inputShapes.value.length = 0;
      let u = 0;
      for (const d of c.inputs.parts) {
        const k = bi(d);
        k ? k.issues?.length && y.value && ge("log", [`SmartCut - issues found while importing part at index ${u}`, k.issues]) : y.value && ge("log", [`SmartCut - error loading part at index ${u}`, d]), u++;
      }
      r.inputShapes.value.flatMap((d) => Os(d.issues)).length && Y({
        type: "error",
        message: ke("errors.general.issues_found")
      }), y.value && ge("log", [`loaded ${r.inputShapes.value.length} parts`]);
    }, Qo = (c) => {
      r.inputShapes.value.length = 0, Ct(() => {
        for (const u of c)
          u.t = r.inputStock.value?.[0]?.t ?? null, m.stockType === "linear" && He.value.length === 1 && !u.w && (u.w = He.value[0]), bi(u);
      });
    };
    Ke(() => le.inputStock, (c) => {
      if (zs(), Array.isArray(c) || console.warn("SmartCut - stock must be passed as an array"), !c?.length) return;
      r.inputStock.value.length = 0;
      const u = c.map((g) => g.toData());
      To(u);
      for (const g of c)
        M({
          ...g.toData(),
          autoAdd: !0,
          q: 1
        }) || (console.error("Failed to add stock item:", g), Y({
          type: "error",
          message: "Failed to add some stock items due to validation errors"
        }));
      if (r.inputStock.value.length) {
        r.inputShapes.value.length || le.inputType !== "formula" && Ct(() => {
          r.inputShapes.value.length || ss();
        });
        const g = p(r.inputSaw.value);
        g.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(g))), Y({
          type: "error",
          message: ke("errors.validation.stock_issue"),
          additional: g.map((d) => d.message)
        }));
      }
    }, { immediate: !0 }), Ke(r.inputShapes, (c) => {
      ge("inputs-changed"), c.forEach((u) => {
        m.stockType === "linear" && He.value.length && (!u.w || !He.value.includes(ve({ v: u.w }))) && (u.w = He.value[0]);
        const g = we.value.find((d) => d.name === u.material);
        g && (g.thicknesses.includes(ve({ v: u.t })) || (u.t = ve({ v: g.thicknesses[0] })));
      });
    }, { deep: !0 }), Ke(() => ce.value.length, (c, u) => {
      if ($n.value) {
        if (c > u) {
          const g = Math.ceil(c / _e.value);
          Re.value < g && (Re.value = g);
        } else if (c < u) {
          const g = Math.ceil(c / _e.value);
          Re.value > g && (Re.value = Math.max(1, g));
        }
      }
    }), Ke(() => v.numberFormat, (c) => {
      S(c);
    }), Ke(r.inputStock, (c) => {
      m.stockType === "linear" && Fn(c.map((u) => u.toData()));
    }, { deep: !0 }), Ke(() => m, (c) => {
      r.inputSaw.value = new en(c);
    }, { deep: !0 }), An(async () => {
      if (cn.value) return;
      cn.value = !0;
      const c = new URL(window.location.href), u = c.searchParams.toString(), g = c.origin + c.pathname + (u ? `?${u}` : "");
      Tt.value !== g && as(), Tt.value = g, nt.value = v.locale, await ut.connect(), ut.emit("getUserFromDomain"), window.addEventListener("smartcut/load", Ks);
    });
    const el = () => {
      ut && ut.disconnect();
    };
    return ci(() => {
      window.removeEventListener("smartcut/load", Ks), el(), delete window.smartcutCheckout;
    }), e({
      init: pt,
      clear: as,
      getAvailablePricingOptions: Zn,
      getExtrasPrice: qo,
      formatPrice: le.formatPrice,
      findExtrasPrice: le.findExtrasPrice,
      inputShapes: r.inputShapes,
      initExtrasOptions: Us,
      createAndAddInputShape: bi,
      initMaterialsThicknesses: _s
    }), (c, u) => {
      const g = On("FontAwesomeIcon");
      return O(), D("div", Fp, [
        y.value || J ? (O(), Ae(I(o), {
          key: 0,
          title: "Ecommerce Calculator Debug",
          data: [{
            inputStock: I(r).inputStock.value.map((d) => ({ material: d.material, db_id: d.db_id || null, code: d.code || null, l: d.l, w: d.w, t: d.t, stockExtras: d.customData?.stockExtras })),
            materials: we.value.map((d) => ({ name: d.name, thicknesses: d.thicknesses, db_id: d.db_id, code: d.code })),
            inputShapesStockRefs: I(r).inputShapes.value.map((d) => ({ material: d.material || "?", t: d.t, stock: d.stock || null })),
            localStorage: { inputStock: B.value, stockFilterSelections: _.value }
          }],
          paths: ["ecommerce-calculator"],
          root: !1
        }, null, 8, ["data"])) : ae("", !0),
        Nt.value ? ae("", !0) : (O(), Ae(Fa, {
          key: 1,
          size: 50,
          "show-number": !1
        })),
        q.value?.machining && $e.value ? (O(), Ae(I(s), {
          key: 2,
          "input-shape": q.value,
          "onUpdate:inputShape": u[0] || (u[0] = (d) => q.value = d),
          translate: !0,
          options: At,
          "find-extras-price": t.findExtrasPrice,
          "get-extras-price": I(ps),
          "get-available-pricing-options": Zn,
          "format-price": t.formatPrice,
          onClose: es
        }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price"])) : ae("", !0),
        Nt.value ? (O(), D("section", {
          key: 3,
          id: "smartcut-checkout",
          class: je(["smartcut-content", { fullscreen: de.value }]),
          style: Lt(W.value)
        }, [
          un.value && !t.readonly ? (O(), D("button", {
            key: 0,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            onClick: u[1] || (u[1] = (d) => Bo())
          }, [
            Ge(g, { icon: ["fass", "expand"] }),
            ct(" " + pe(I(ke)("general.full_screen")), 1)
          ])) : ae("", !0),
          Le.value ? (O(), D("a", {
            key: 1,
            id: "credit",
            style: fe,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, pe(I(fr)(I(ke)("general.powered_by"))), 1)) : ae("", !0),
          K("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: Lt({ "grid-template-columns": Ki.value })
          }, [
            I(r).inputShapes.value.length ? (O(), D("div", Tp, [
              u[6] || (u[6] = K("div", { class: "cell id" }, null, -1)),
              (O(!0), D(it, null, gt(Ln.value, (d) => (O(), D("div", {
                key: d.name,
                class: je(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(d.name) || d.type === "boolean" }])
              }, pe(I(ke)(d.label)), 3))), 128)),
              I(It) === "development" && As ? (O(), D("div", Ep, " Info ")) : ae("", !0),
              u[7] || (u[7] = K("div", { class: "cell del" }, null, -1))
            ])) : ae("", !0),
            (O(!0), D(it, null, gt(Zi.value, (d, k) => (O(), D("div", {
              key: d.autoId,
              class: "row inputs"
            }, [
              K("div", Np, [
                K("div", {
                  class: "id",
                  style: Lt({
                    background: v.colors.partA,
                    color: v.colors.text
                  })
                }, pe(Ji.value + k + 1), 5)
              ]),
              (O(!0), D(it, null, gt(Ln.value, (L) => (O(), D("div", {
                key: L.name,
                class: "cell"
              }, [
                d ? (O(), Ae($p, {
                  key: 0,
                  field: L,
                  item: d,
                  index: k,
                  "type-prefix": "part",
                  readonly: t.readonly,
                  "number-format": v.numberFormat,
                  "orientation-model": v.orientationModel,
                  "stock-grain": I(b)(d),
                  "material-options": we.value?.map((R) => ({ label: R.name, value: R.name })) || [],
                  "thickness-options": L.name === "t" ? No(d) : [],
                  "width-options": L.name === "w" && m.stockType === "linear" ? Mo(d) : [],
                  "banding-enabled": Pe.banding === k ? d : null,
                  "full-stock-disabled": d.fullStock && !["material", "t", "q", "fullStock"].includes(L.name),
                  "material-extras-disabled": Fo(d),
                  onUpdate: (R) => Ue(d, L.propertyPath || L.fieldMap || L.name, R),
                  onValidation: u[2] || (u[2] = (R, ne) => jt()),
                  onBlur: () => Rt(d, L.name),
                  onOpenBanding: (R) => Si("banding", d),
                  onOpenMachining: (R) => Qi(d),
                  onOpenFinish: (R) => Si("finish", d),
                  onOpenPlaning: (R) => Si("planing", d),
                  onOpenImageUpload: (R) => zo(k)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "orientation-model", "stock-grain", "material-options", "thickness-options", "width-options", "banding-enabled", "full-stock-disabled", "material-extras-disabled", "onUpdate", "onBlur", "onOpenBanding", "onOpenMachining", "onOpenFinish", "onOpenPlaning", "onOpenImageUpload"])) : ae("", !0)
              ]))), 128)),
              I(It) === "development" && As ? (O(), D("div", Mp, [
                K("button", {
                  class: je(["c-btn", { selected: Pe.info === k }]),
                  type: "button",
                  onClick: (L) => Si("info", d)
                }, " i ", 10, Bp)
              ])) : ae("", !0),
              K("div", Vp, [
                K("button", {
                  disabled: I(r).inputShapes.value.length <= 1,
                  type: "button",
                  class: "c-btn delete",
                  "aria-label": `${I(ke)("actions.remove")} ${I(vs)(I(ke)("woodwork.part"))}`,
                  onClick: (L) => I($)(d.autoId)
                }, [
                  Ge(g, { icon: ["fass", "trash"] })
                ], 8, Dp)
              ]),
              Ge(I(i), {
                item: d,
                "num-columns": fn.value
              }, null, 8, ["item", "num-columns"]),
              Pe.banding === k && ts(d, "banding").length > 0 && ns.value ? (O(), Ae(xs, {
                key: "banding-" + (d?.material || ""),
                shape: d,
                "shape-index": k,
                "extra-type": "banding",
                "extra-label": "banding",
                "price-label": Go.value,
                "extra-keys": Ee.keys,
                "all-options": Je(d, "banding").options,
                pricing: Je(d, "banding").pricing,
                "display-names": Je(d, "banding").displayNames,
                labels: Je(d, "banding").labels,
                locations: Je(d, "banding").locations || dt.locations,
                "location-groups": Je(d, "banding").locationGroups || [],
                "user-friendly-field-map": I(hs),
                "part-columns": fn.value,
                "format-price": t.formatPrice,
                "find-extras-price": le.findExtrasPrice,
                "get-price": is,
                "orientation-model": v.orientationModel,
                "stock-grain": I(b)(d),
                "get-available-pricing-options": Zn,
                "allow-custom-names": !1,
                debug: y.value
              }, null, 8, ["shape", "shape-index", "price-label", "extra-keys", "all-options", "pricing", "display-names", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain", "debug"])) : ae("", !0),
              Pe.finish === k && ts(d, "finish").length > 0 && ns.value ? (O(), Ae(xs, {
                key: "finish-" + (d?.material || ""),
                shape: d,
                "shape-index": k,
                "extra-type": "finish",
                "extra-label": "finish",
                "price-label": Ro.value,
                "extra-keys": Qe.keys,
                "all-options": Je(d, "finish").options,
                pricing: Je(d, "finish").pricing,
                "display-names": Je(d, "finish").displayNames,
                labels: Je(d, "finish").labels,
                locations: Je(d, "finish").locations || zt.locations,
                "location-groups": Je(d, "finish").locationGroups || [],
                "user-friendly-field-map": I(hs),
                "part-columns": fn.value,
                "format-price": t.formatPrice,
                "find-extras-price": le.findExtrasPrice,
                "get-price": is,
                "orientation-model": v.orientationModel,
                "stock-grain": I(b)(d),
                "get-available-pricing-options": Zn,
                "allow-custom-names": !1,
                debug: y.value
              }, null, 8, ["shape", "shape-index", "price-label", "extra-keys", "all-options", "pricing", "display-names", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain", "debug"])) : ae("", !0),
              Pe.planing === k && ts(d, "planing").length > 0 && ns.value ? (O(), Ae(xs, {
                key: "planing-" + (d?.material || ""),
                shape: d,
                "shape-index": k,
                "extra-type": "planing",
                "extra-label": "planing",
                "extra-keys": Ze.keys,
                "all-options": Je(d, "planing").options,
                pricing: Je(d, "planing").pricing,
                "display-names": Je(d, "planing").displayNames,
                labels: Je(d, "planing").labels,
                locations: Je(d, "planing").locations || Ht.locations,
                "location-groups": Je(d, "planing").locationGroups || [],
                "user-friendly-field-map": I(hs),
                "part-columns": fn.value,
                "format-price": t.formatPrice,
                "find-extras-price": le.findExtrasPrice,
                "get-price": is,
                "orientation-model": v.orientationModel,
                "stock-grain": I(b)(d),
                "get-available-pricing-options": Zn,
                "allow-custom-names": !1,
                debug: y.value
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "display-names", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain", "debug"])) : ae("", !0),
              Pe.info === k ? (O(), D("div", {
                key: 4,
                id: "shape-info",
                style: Lt({ "grid-column-end": "span " + fn.value })
              }, [
                K("div", null, pe(d?.banding), 1),
                K("div", null, pe(ui.value?.banding?.options || "No options"), 1)
              ], 4)) : ae("", !0),
              Et.value === k ? (O(), Ae(I(l), {
                key: 5,
                prefix: (k + 1).toString(),
                "unique-id": d.autoId,
                "shape-id": d.autoId,
                style: Lt({ "grid-column-end": "span " + fn.value }),
                images: mt.value,
                onUpdate: Uo,
                onRemove: Wo
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images"])) : ae("", !0)
            ]))), 128))
          ], 4),
          K("div", jp, [
            t.readonly ? ae("", !0) : (O(), D("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${I(ke)("actions.add")} ${I(vs)(I(ke)("woodwork.part"))}`,
              onClick: u[3] || (u[3] = (d) => ss())
            }, [
              Ge(g, { icon: ["fass", "plus-large"] }),
              ct(" " + pe(`${I(ke)("actions.add")} ${I(vs)(I(ke)("woodwork.part"))}`), 1)
            ], 8, Rp)),
            K("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": I(ke)("actions.calculate"),
              disabled: !I(r).inputStock.value?.length || st.value,
              onClick: u[4] || (u[4] = (d) => Yo())
            }, [
              Ge(g, { icon: ["fass", "calculator"] }),
              ct(pe(I(ke)("actions.calculate")), 1)
            ], 8, Gp),
            t.readonly ? ae("", !0) : (O(), D("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": I(ke)("actions.clear"),
              onClick: u[5] || (u[5] = (d) => as())
            }, [
              Ge(g, { icon: ["fass", "trash"] })
            ], 8, qp)),
            K("div", _p, pe(I(h)) + pe(v?.maxParts ? "/" + v.maxParts : ""), 1)
          ]),
          $n.value && Jt.value > 1 ? (O(), D("div", Up, [
            K("div", Wp, [
              K("button", {
                type: "button",
                class: "c-btn",
                disabled: Re.value === 1,
                onClick: hi
              }, [
                Ge(g, { icon: ["fass", "chevrons-left"] })
              ], 8, zp),
              K("button", {
                type: "button",
                class: "c-btn",
                disabled: Re.value === 1,
                onClick: Yi
              }, [
                Ge(g, { icon: ["fass", "chevron-left"] })
              ], 8, Hp),
              K("span", Kp, pe(Re.value) + " / " + pe(Jt.value), 1),
              K("button", {
                type: "button",
                class: "c-btn",
                disabled: Re.value >= Jt.value,
                onClick: Xi
              }, [
                Ge(g, { icon: ["fass", "chevron-right"] })
              ], 8, Zp),
              K("button", {
                type: "button",
                class: "c-btn",
                disabled: Re.value >= Jt.value,
                onClick: f
              }, [
                Ge(g, { icon: ["fass", "chevrons-right"] })
              ], 8, Jp)
            ])
          ])) : ae("", !0),
          Vt.value && !t.readonly ? (O(), Ae(I(a), {
            key: 3,
            ref: "import",
            "number-format": v.numberFormat,
            "custom-fields": Kn.value,
            "banding-options": Ee.options,
            "banding-labels": Ee.labels,
            "finish-options": Qe.options,
            "finish-labels": Qe.labels,
            onImport: Qo
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : ae("", !0),
          ie.value ? (O(), D("div", Yp, [
            Se.value ? (O(), D("div", Xp, pe(Se.value), 1)) : ae("", !0),
            K("pre", Qp, pe(ye.value), 1)
          ])) : ae("", !0),
          (v.enable?.diagram ? st.value && !I(oe).complete : st.value || I(oe).complete) ? (O(), D("div", eh, [
            Ge(Fa, {
              size: 50,
              number: I(oe).shapeCount,
              complete: I(oe).complete,
              "show-number": v.enable?.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : ae("", !0),
          Wi(K("div", th, [
            I(se)?.saw?.stockType !== "roll" ? (O(), D("div", nh, pe(I(se)?.stack?.number ? I(se).stack.number : 1), 1)) : ae("", !0),
            Ge(vu, {
              "element-id": "diagram",
              "number-format": v.numberFormat,
              "decimal-places": v.decimalPlaces,
              colors: v.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [Ds, v.enable?.diagram && I(oe).complete]
          ]),
          pi.value && v.enable?.diagram && I(ee).length > 1 && I(oe).complete ? (O(), Ae(Wd, {
            key: 6,
            display: !0,
            "use-stack": !0,
            "show-sorting": !1,
            onShow: I(re)
          }, null, 8, ["onShow"])) : ae("", !0),
          !pi.value && v.enable?.diagram && I(ee).length > 1 && I(oe).complete ? (O(), Ae(ef, {
            key: 7,
            ref: "stockNavigation",
            "active-stock-id": I(H),
            "stock-list": I(ee),
            "primary-color": v.colors.stock?.replace("#", ""),
            "secondary-color": v.colors.partA?.replace("#", ""),
            onShowStock: I(re)
          }, null, 8, ["active-stock-id", "stock-list", "primary-color", "secondary-color", "onShowStock"])) : ae("", !0)
        ], 6)) : ae("", !0),
        I(It) === "development" && As ? (O(), D("div", ih, [
          Ge(I(o), {
            data: [I(r)?.inputShapes?.value?.[0]],
            paths: ["inputShapes"]
          }, null, 8, ["data"]),
          u[8] || (u[8] = K("div", null, "Result data", -1)),
          Ge(I(o), {
            data: [wt.value],
            paths: ["checkoutResult"]
          }, null, 8, ["data"])
        ])) : ae("", !0)
      ]);
    };
  }
}), yh = /* @__PURE__ */ Hn(sh, [["__scopeId", "data-v-374207fa"]]);
export {
  xs as E,
  Gs as F,
  md as O,
  vu as _,
  ef as a,
  ii as b,
  to as c,
  yh as d,
  bh as e,
  fp as h,
  vh as m,
  js as u
};

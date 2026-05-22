import { r as U, w as at, m as E, _ as _t, L as $t, Y as ks, H as jt, d as ft, $ as Hs, f as on, M as Xa, c as M, o as C, b as W, h as Ee, l as Xe, u as F, a as ae, V as Ha, t as he, p as ei, v as Fn, n as Ht, F as kt, k as Rt, G as Fo, a0 as hn, j as tn, D as qt, S as Zt, x as ti, z as ni, C as Zs, i as it, g as zn, A as Js, N as Eo, y as Wt, B as Ao, a1 as Kt, O as Qn, X as $o, J as an } from "./vendor-vue-Tt3m9hlc.js";
import { bp as Ye, bq as Ln, a_ as No, I as Qs, br as In, bs as Un, bt as Ys, bu as Xs, bv as el, bw as Za, bx as xn, by as ws, bz as To, bA as Mo, bB as Vo, bC as tl, bD as nl, bE as xi, bF as _o, bG as Ma, bH as Xn, bI as Do, bm as Hn, p as fa, X as ta, bl as mn, Z as na, x as Gn, a0 as Bt, b1 as jo, bJ as Ss, t as Ra, be as pa, bK as ma, bh as ga, F as ha, bL as xs, bM as Ps, bN as Bo, K as Cs, bO as qo, ae as Ro, aY as Uo, bP as Go, bQ as Sa, bR as zo, e as pe, bS as al, h as dt, aX as qi, bT as Wo, k as Ko, aZ as Ho, a1 as Os, a2 as Va, bd as Zo, bU as Jo, bV as Qo, y as fn, bW as Yo, bX as Is, Y as Xo, C as Pn, V as er, W as Pi, z as tr, U as nr, c as ar, bY as Ri, bg as ir, bZ as sr, f as lr, b_ as or, b$ as rr, c0 as il, c1 as ur, c2 as cr, c3 as Ci, c4 as dr, c5 as fr, c6 as sl, c7 as pr, c8 as mr, c9 as gr, ca as hr, cb as vr, cc as br, cd as yr, ce as Ui, cf as kr, cg as wr, ch as Sr, ci as xr, cj as Pr, ck as En, cl as Oi, cm as Cr, j as ln, cn as Ls, co as Fs, cp as Ii, cq as Or, w as Es, q as As, u as Li, s as Fi } from "./result.zod-B0Qqh9wj.js";
import { s as Ei, t as ll, u as Ir, l as Ai, d as Lr } from "./i18n-uloQAa9l.js";
import { M as wa, Z as _a, o as xt, J as pt, G as An, i as qe, N as $s, O as Fr, Q as ol, S as Er, F as lt, H as rl, u as Ar, I as vt, T as Ns, U as Da, V as $r, W as Nr, X as Ts, Y as Tr, $ as ja, a0 as $i, a1 as Ni, a2 as Ti, l as Mr, j as te, q as we, n as y, A as z, h as ea, L as Vr, x as Le, v as ot, t as kn, C as bn, w as tt, k as Ue } from "./vendor-CN6j6kBQ.js";
import { o as ul, f as cl, s as dl, a as fl, d as _r } from "./vendor-floating-ui-CCq0hEoe.js";
import { _ as Qt } from "./Launch-Br9fQuik.js";
import { t as Ie } from "./i18n-BEBY52oR.js";
import { b as Gi } from "./environment-BeBZzWz6.js";
import "./vendor-i18next-DIDhOEvY.js";
function Dr(e, n = "cc") {
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
  }, l = {}, r = Object.keys(e).some((f) => ["x1", "x2", "y1", "y2"].includes(f)) ? a : t;
  if (n === "cc") {
    for (const [f, p] of Object.entries(r))
      f in e && (l[p] = e[f]);
    for (const [f, p] of Object.entries(i))
      f in e && (l[p] = e[f]);
  } else {
    for (const [f, p] of Object.entries(r))
      p in e && (l[f] = e[p]);
    for (const [f, p] of Object.entries(i))
      p in e && (l[f] = e[p]);
  }
  return l;
}
const pl = {
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
function jr(e) {
  return e !== 0 && e !== 1 && e !== 2 ? !1 : pl[e].sidesLMatchShapeL;
}
function Br(e) {
  return e !== 0 && e !== 1 && e !== 2 ? [] : pl[e].affectedExtraTypes;
}
function Ua(e = 0, n, t = null, a = null, i = null) {
  if (!Ye(t) && !Ln || a === "stock") return !1;
  let l, u;
  if (Ye(t) ? l = t.orientationLock : Ln(t) ? l = "l" : a === "shape" && (l = i), e === 0 || Ln(t))
    switch (n) {
      case "n":
        u = l === "w" || i === "w";
        break;
      case "l":
      case "y":
        u = l === "w" || i === "w";
        break;
      case "w":
        u = l === "l" || i === "l";
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
function qr(e, n, t = null, a = null, i = null) {
  if (!Ye(t) || a === "shape") return !1;
  let l;
  return e === 0 || e === 1 || e === 2 ? Ua(e, n, t, a, i) ? "cc" : !1 : l;
}
function Rr(e, n = []) {
  if (!e?.length) return [];
  const t = e.map((a) => a && typeof a.getType == "function" ? a : No(a)).filter((a) => a instanceof Qs);
  return n.length && Ur(t, n), t;
}
function Ur(e = [], n = []) {
  e.length && n.length && e.forEach((t) => {
    t.shapeIds = t.shapeIds.filter((a) => n.find((i) => i.autoId === a));
  });
}
let Ga = null;
if (Gi())
  try {
    Ga = require("~/helpers/applicationSettings").applicationSettings;
  } catch (e) {
    console.error("[useCrossPlatformStorage] Failed to load ApplicationSettings:", e);
  }
function Yn(e, n, t = {}) {
  const {
    serializer: a = {
      read: (l) => {
        try {
          return JSON.parse(l);
        } catch {
          return l;
        }
      },
      write: (l) => JSON.stringify(l)
    }
  } = t;
  if (!Gi()) {
    const u = U((() => {
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
    return at(u, (r) => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const f = a.write(r);
          localStorage.setItem(e, f);
        }
      } catch (f) {
        console.error("[useCrossPlatformStorage] Failed to save", e, "to localStorage:", f);
      }
    }, { deep: !0 }), u;
  }
  if (Gi()) {
    if (!Ga)
      return console.error("[useCrossPlatformStorage] ApplicationSettings not available! Using in-memory fallback."), U(n);
    const u = U((() => {
      try {
        const r = Ga.getString(e);
        if (r)
          return a.read(r);
      } catch (r) {
        console.error("[useCrossPlatformStorage] Failed to load", e, "from ApplicationSettings:", r);
      }
      return n;
    })());
    return at(u, (r) => {
      try {
        const f = a.write(r);
        Ga.setString(e, f);
      } catch (f) {
        console.error("[useCrossPlatformStorage] Failed to save", e, "to ApplicationSettings:", f);
      }
    }, { deep: !0 }), u;
  }
  return console.warn("[useCrossPlatformStorage] No storage available for key", e, "- using in-memory fallback"), U(n);
}
function Mi(e) {
  if (typeof e != "string" || !e || !(e.startsWith("errors.") || e.startsWith("fields.") || e.startsWith("extras.") || e.startsWith("woodwork.") || e.startsWith("validation."))) return e;
  const t = ll(e);
  return t && t !== e ? t : e;
}
function Gr() {
  const e = Date.now(), n = Math.random().toString(36).substring(2, 15), t = Math.random().toString(36).substring(2, 15);
  return `${e.toString(36)}-${n}-${t}`;
}
const Cn = U([]), zr = 6;
function Ji() {
  const e = ({
    message: t,
    type: a = "info",
    additional: i = [],
    options: l = {},
    action: u = () => {
    }
  }) => {
    Array.isArray(i) || (console.warn("addNotice - additional must be an array"), i = []);
    const r = {
      id: Gr(),
      message: Ei(Mi(t)),
      additional: i.length > 5 ? i.slice(0, 5).map((p) => Ei(Mi(p))).join("<br>") + "<br>..." : i.slice(0, 5).map((p) => Ei(Mi(p))).join("<br>"),
      type: a,
      persistent: l.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: u
    }, f = l.maxNotices ?? zr;
    if (Cn.value.length >= f) {
      const p = Cn.value.findIndex((b) => !b.persistent);
      if (p !== -1)
        Cn.value.splice(p, 1);
      else if (!r.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), r.id;
    }
    return Cn.value.push(r), !r.persistent && l.timeout !== 0 && setTimeout(() => n(r.id), l.timeout || 6e3), r.id;
  }, n = (t) => {
    Cn.value.findIndex((i) => i.id === t) !== -1 && (Cn.value = Cn.value.filter((i) => i.id !== t));
  };
  return {
    notices: Cn,
    addNotice: e,
    dismissNotice: n
  };
}
const Ms = /* @__PURE__ */ new Set(), ai = Yn("cle-extras-config", {}), zi = (e, n) => {
  ai.value[e] = n;
}, gn = (e) => ai.value[e] || null, Wr = () => ai.value;
let Vs = !1;
const Kr = () => {
  Vs || (Do({
    getExtrasConfig: gn,
    getAllExtrasConfigs: Wr,
    setExtrasConfig: zi
  }), Vs = !0);
}, Hr = (e, n) => {
  const t = gn(e);
  if (!t || !t.options || t.options.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const a = t.options[0], i = Array.isArray(a) && typeof a[0] == "string" ? a : [];
  if (i.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const l = (f) => t.options.length > 1 ? f.includes("|") ? t.pricing && Object.keys(t.pricing).length > 0 ? Object.prototype.hasOwnProperty.call(t.pricing, f) ? !0 : Object.keys(t.pricing).some((P) => P.startsWith(f + "|") || P === f) : f.split("|").every((b, P) => {
    if (P >= t.options.length) return !1;
    const L = t.options[P];
    return Array.isArray(L) && typeof L[0] == "string" && L.includes(b);
  }) : t.options.some((p) => Array.isArray(p) && typeof p[0] == "string" && p.includes(f)) : i.includes(f), u = /* @__PURE__ */ new Set();
  let r = 0;
  return n.forEach((f) => {
    if (!f.extras?.[e]) return;
    const p = f.extras[e].sides || {};
    Object.entries(p).forEach(([P, L]) => {
      typeof L == "string" && L && !l(L) && (u.add(L), p[P] = "", r++);
    });
    const b = f.extras[e].faces || {};
    Object.entries(b).forEach(([P, L]) => {
      typeof L == "string" && L && !l(L) && (u.add(L), b[P] = "", r++);
    });
  }), {
    cleanedCount: r,
    invalidOptions: Array.from(u)
  };
}, Zr = (e) => {
  Kr();
  const {
    shape: n,
    extraType: t,
    allOptions: a,
    labels: i,
    userFriendlyFieldMap: l,
    allowCustomNames: u,
    customNames: r = U([]),
    enablePricing: f = !1,
    pricing: p,
    displayNames: b,
    locations: P = U([]),
    locationGroups: L = U([]),
    orientationModel: h = 0,
    getAvailablePricingOptions: A,
    getPrice: J,
    findExtrasPrice: ue,
    formatPrice: D
  } = e, B = E(() => ks(a) ? a.value : a), me = E(() => ks(b) ? b.value : b), Q = () => {
    const d = gn(t), g = B.value?.length ? B.value : d?.options || [], j = d?.labels || i;
    In(n.value, t, g, j, r.value);
  };
  Q(), at(
    () => n.value?.extras?.[t],
    (d) => {
      if (d) {
        const g = d?.sides || {}, j = d?.options?.sides || {};
        let R = !1;
        for (const [T, K] of Object.entries(g))
          if (typeof K == "string") {
            if (K.includes("|") && !j[T]) {
              R = !0;
              break;
            } else if (K !== "" && !j[T]) {
              R = !0;
              break;
            }
          }
        R && Q();
      }
    },
    { immediate: !1 }
  );
  const v = E(() => ai.value[t] || null), N = E(() => {
    const d = B.value?.length ? B.value : v.value?.options || [];
    if (d.length > 1)
      return "multiple";
    const j = (d[0] || []).filter((ie) => typeof ie == "string"), R = (r.value || []).filter((ie) => typeof ie == "string"), K = Array.from(/* @__PURE__ */ new Set([...j, ...R])).length;
    return K === 0 ? "boolean" : K === 1 ? "single" : "multiple";
  }), X = E(() => Xn(t)), $ = E(() => P.value && P.value.length > 0 ? P.value.filter((d) => d !== "all" && d !== "faces" && d !== "sides") : X.value), G = E(() => $.value.filter((d) => Un(d) === "face")), x = E(() => $.value.filter((d) => Un(d) === "side")), Z = E(() => Xs(t)), le = E(() => Ys(t)), fe = E(() => el(t)), oe = () => {
    const d = B.value?.length ? B.value : v.value?.options;
    return !!d && d.length > 1;
  }, Je = (d, g, j) => {
    const { singleOption: R = un(), operation: T } = j;
    switch (g) {
      case "boolean":
        return !!d;
      case "single":
        return R ? T === "process" || T === "set" ? d && R ? R : "" : d === R ? R : "" : !!d;
      case "multiple":
        return d || "";
      default:
        return d;
    }
  }, Ke = (d, g, j) => Je(g, j, { operation: "process" }), Se = (d, g, j, R, T, K) => {
    switch (K) {
      case "boolean":
        Ma(d, g, j, R, !!T);
        break;
      case "single": {
        const ie = un();
        Ma(d, g, j, R, T ? ie : "");
        break;
      }
      case "multiple":
        Ma(d, g, j, R, T || "");
        break;
    }
  }, Fe = (d, g, j = {}) => {
    const R = j.singleOption || un();
    return j.allowCustomNames, Je(d, g, {
      operation: "get",
      singleOption: R
    });
  }, mt = (d, g, j, R) => {
    switch (R) {
      case "boolean":
        return !!d;
      case "single": {
        const T = un();
        if (T) {
          const K = g.map((ke) => xn(n.value, t, ke, j)), ie = K.every((ke) => ke === T || ke === !0), je = K.every((ke) => !ke || ke === "");
          return ie ? T : je ? "" : null;
        }
        return !!d;
      }
      case "multiple":
        return typeof d == "string" ? d : d || "";
      default:
        return d;
    }
  }, _ = (d, g, j, R = !1) => {
    if (R)
      d.forEach((T) => ne(T, g, j));
    else {
      const T = i[g] || "", K = Ke(T, j, N.value);
      d.forEach((ie) => {
        Se(n.value, t, ie, T, K, N.value);
      });
    }
  }, ee = (d, g) => {
    if (oe()) {
      const j = i[g] || "", R = d.map((je) => {
        const ke = xn(n.value, t, je, j);
        return ke === !0 ? Gt(g)[0] || "" : String(ke || "");
      }), T = R[0] || "";
      return R.every((je) => je === T) ? T : null;
    } else {
      const j = i[g] || "";
      if (N.value === "single") {
        const T = un();
        if (T) {
          const K = d.map((ke) => xn(n.value, t, ke, j)), ie = K.every((ke) => ke === T || ke === !0), je = K.every((ke) => !ke || ke === "");
          return ie ? T : je ? "" : null;
        }
      }
      const R = ws(n.value, t, d, j, N.value);
      return N.value === "multiple" && R === !1 && d.every((K) => {
        const ie = xn(n.value, t, K, j, N.value);
        return ie === "" || ie === !1 || ie === null || ie === void 0;
      }) ? "" : R;
    }
  }, be = (d) => {
    const { location: g, locationType: j = "single", optionIndex: R, stateValue: T, isAggregate: K = !1 } = d, ie = Gt(R), je = K && g !== void 0 && ht(g), ke = je && ie.some((We) => typeof We == "string" && We.endsWith(`|${g}`)), ct = je && (ie.length <= 1 || ke), _e = K ? ce(R, g && ht(g) ? g : j) : ce(R, g), Be = f && ie.length > 1 && _e.length === 0, Qe = (() => {
      if (!Be || R === 0 || !g) return !1;
      for (let We = 0; We < R; We++) {
        let wt = null;
        if (je && typeof g == "string" ? wt = O(g, We) : K ? g === "all" ? wt = ut(We) : g === "faces" ? wt = Lt(We) : g === "sides" && (wt = gt(We)) : wt = ve(g, We), !wt) return !0;
      }
      return !1;
    })(), Et = !ct && ie.length > 1 && (!Be || Qe) ? "select" : "checkbox";
    if (Be && g && !Qe) {
      const We = `${t}:${g}:${R}`;
      Ms.has(We) || (Ms.add(We), Ji().addNotice({
        type: "warning",
        message: `No price set for ${t} at ${g}. This option is not currently available.`
      }));
    }
    const zt = N.value === "multiple" && _e.length === 1 && f && R > 0;
    if (zt && _e[0]) {
      if (K) {
        let We = [];
        j === "all" ? We = $.value : j === "faces" ? We = G.value : j === "sides" ? We = x.value : g && ht(g) && (We = bt(g)), We.forEach((wt) => {
          const Oa = ve(wt, R);
          (!Oa || Oa !== _e[0]) && ne(wt, R, _e[0]);
        });
      } else if (g) {
        const We = ve(g, R);
        (!We || We !== _e[0]) && ne(g, R, _e[0]);
      }
    }
    let Dn = !1;
    const Sn = gn(t);
    if (Sn?.optionLocations && g && g !== "all" && Et === "checkbox" && ie.length === 1) {
      const We = Sn.optionLocations[ie[0]];
      We && !We.includes(g) && (Dn = !0);
    }
    const Wn = Be || N.value === "multiple" && (_e.length === 0 || zt), dn = T !== void 0 ? T : g ? ve(g, R) : null, ci = Et === "select" ? Ve(g || j, R) : void 0, jn = (We) => (me.value ?? v.value?.displayNames)?.[We] || We, Ca = Et === "checkbox" ? ct ? d.customLabel : ie.length === 1 ? jn(ie[0]) : void 0 : void 0;
    let Yt, ua;
    if (Et === "checkbox")
      if (ct && ie.length > 1) {
        const We = ie.find((wt) => wt.endsWith(`|${g}`));
        We && (Yt = We, ua = "");
      } else ie.length === 1 && (Yt = ie[0], ua = "");
    return {
      inputType: Et,
      // Alias for backward compatibility
      type: Et,
      value: dn,
      options: ci,
      disabled: Wn,
      hidden: Dn,
      label: Ca,
      indeterminate: dn === null && Et === "checkbox",
      trueValue: Yt,
      falseValue: ua
    };
  }, De = (d, g, j) => be({
    locationType: d,
    optionIndex: g,
    stateValue: j,
    isAggregate: !0
  }), ne = (d, g, j) => {
    const R = i[g] || "";
    if (oe()) {
      const T = Pe(d, g);
      let K;
      if (T === "checkbox") {
        const je = Gt(g)[0];
        K = j ? je : "";
      } else
        K = j || "";
      Ma(n.value, t, d, R, K);
    } else
      Se(n.value, t, d, R, j, N.value);
  }, ve = (d, g) => {
    const j = i[g] || "";
    if (oe()) {
      const R = xn(n.value, t, d, j);
      if (Pe(d, g) === "checkbox") {
        const ie = Gt(g)[0];
        return R === !0 || R === ie ? ie : "";
      } else
        return R || "";
    } else {
      const R = xn(n.value, t, d, j, N.value);
      return Fe(R, N.value);
    }
  }, Ne = (d, g) => {
    _($.value, d, g, oe());
  }, ut = (d) => {
    if (oe()) {
      const g = i[d] || "", j = $.value.map((K) => {
        const ie = xn(n.value, t, K, g);
        return ie === !0 ? Gt(d)[0] || "" : String(ie || "");
      }), R = j[0] || "";
      return j.every((K) => K === R) ? R : null;
    } else {
      const g = i[d] || "", j = ws(n.value, t, $.value, g, N.value);
      return mt(j, $.value, g, N.value);
    }
  }, rn = () => {
    xi(n.value, t, $.value, N.value), $t(n);
  }, re = (d) => d === "faces" ? {
    locations: G.value,
    isSupported: Z.value
  } : {
    locations: x.value,
    isSupported: le.value
  }, Te = (d, g, j) => {
    const { locations: R, isSupported: T } = re(d);
    T && _(R, g, j, oe());
  }, ze = (d, g) => {
    const { locations: j, isSupported: R } = re(d);
    return R ? ee(j, g) : null;
  }, xe = (d) => {
    const { locations: g, isSupported: j } = re(d);
    j && (xi(n.value, t, g, N.value), $t(n));
  }, Me = (d, g) => {
    const { isSupported: j } = re(d);
    if (!j) return { type: "checkbox", value: !1 };
    const R = ze(d, g);
    return De(d, g, R);
  }, ye = (d, g) => {
    Te("faces", d, g);
  }, Pt = (d, g) => {
    Te("sides", d, g);
  }, Lt = (d) => ze("faces", d), gt = (d) => ze("sides", d), wn = () => {
    xe("faces");
  }, st = () => {
    xe("sides");
  }, Nt = (d) => L.value.find((g) => g.id === d), ht = (d) => ["all", "faces", "sides"].includes(d) ? !1 : !d.includes("."), bt = (d) => {
    const g = Nt(d);
    return g ? g.locations.filter((j) => $.value.includes(j)) : [];
  }, $n = (d, g, j) => {
    const R = bt(d);
    R.length !== 0 && (R.forEach((T) => ne(T, g, j)), $t(n));
  }, O = (d, g) => {
    const j = bt(d);
    if (j.length === 0) return null;
    if (!oe()) {
      const K = Gt(g).find((ie) => ie.endsWith(`|${d}`));
      if (K) {
        const ie = i[g] || "", je = j.map((_e) => xn(n.value, t, _e, ie)), ke = je.every((_e) => _e === K), ct = je.some((_e) => _e === K);
        return ke ? K : ct ? null : "";
      }
    }
    const R = ee(j, g);
    return !oe() && (R === null || R === !1 || R === "") ? "" : R;
  }, I = (d) => {
    const g = bt(d);
    g.length !== 0 && (xi(n.value, t, g, N.value), $t(n));
  }, w = (d, g) => {
    const j = O(d, g), R = Nt(d);
    return be({
      location: d,
      optionIndex: g,
      stateValue: j,
      isAggregate: !0,
      customLabel: R?.label
    });
  }, q = (d) => {
    _o(n.value, t, d, N.value), $t(n);
  }, se = (d) => d === "all" ? $.value.some((g) => !!ve(g, 0)) : d === "faces" && Z.value ? G.value.some((g) => !!ve(g, 0)) : d === "sides" && le.value ? x.value.some((g) => !!ve(g, 0)) : ht(d) ? bt(d).some((j) => !!ve(j, 0)) : $.value.includes(d) ? !!ve(d, 0) : !1, Oe = (d) => {
    if (d === "all") return Ie("general.all");
    if (d === "faces") return `${Ie("general.all")} ${Ie("machining.face_other")}`;
    if (d === "sides") return `${Ie("general.all")} ${Ie("woodwork.edge_other")}`;
    if (ht(d)) {
      const R = Nt(d);
      if (R) return R.label;
    }
    if (d.startsWith("face.")) {
      const T = `faces.${d.replace("face.", "")}`;
      return Ie(T);
    }
    if (d.startsWith("side.")) {
      let R = d.replace("side.", "");
      (h === 1 || h === 2) && n.value && n.value.w > n.value.l && (R = { l1: "w1", l2: "w2", w1: "l1", w2: "l2" }[R] || R);
      const T = `sides.${R}`;
      return Ie(T);
    }
    const g = `fields.${d}`, j = Ie(g);
    return j !== g ? j : l?.[d] ? l[d] : d;
  }, Pe = (d, g) => N.value === "boolean" ? "checkbox" : Gt(g).length > 1 ? "select" : "checkbox", Re = (d, g) => be({
    location: d,
    optionIndex: g,
    isAggregate: !1
  }), He = (d) => {
    const g = ut(d);
    return De("all", d, g);
  }, et = (d) => Me("faces", d), Ct = (d) => Me("sides", d), Ut = (d, g) => d === "all" ? He(g) : d === "faces" ? et(g) : d === "sides" ? Ct(g) : ht(d) ? w(d, g) : Re(d, g), ce = (d, g) => {
    const j = gn(t), T = (B.value?.length ? B.value : j?.options || [])[d];
    if (!T || T[0] === !0)
      return [];
    const K = g && typeof g == "string" && (g.startsWith("face.") || g.startsWith("side.")), ie = g && typeof g == "string" && ht(g), je = !K && (g === "all" || g === "faces" || g === "sides" || ie);
    if (Array.isArray(T) && T.length === 1 && typeof T[0] == "string" && !(f && A && (K || je) && d > 0))
      return T;
    if (f && A && K) {
      const _e = [];
      if (d > 0)
        for (let Be = 0; Be < d; Be++) {
          const Qe = ve(g, Be);
          if (typeof Qe == "string" && Qe)
            _e.push(Qe);
          else if (typeof Qe == "boolean")
            _e.push(Qe);
          else {
            const Et = gn(t), zt = Za(n.value, t, g);
            return zt && typeof zt == "object" && !Array.isArray(zt) && Object.keys(zt).length > 1 && Et?.options[d] ? Et.options[d] : [];
          }
        }
      return A(p, _e, d);
    }
    if (f && A && je) {
      const _e = [];
      if (d > 0)
        for (let Be = 0; Be < d; Be++) {
          let Qe;
          if (g === "all" ? Qe = ut(Be) : g === "faces" ? Qe = Lt(Be) : g === "sides" ? Qe = gt(Be) : ie && typeof g == "string" && (Qe = O(g, Be)), typeof Qe == "string" && Qe)
            _e.push(Qe);
          else if (typeof Qe == "boolean")
            _e.push(Qe);
          else
            return [];
        }
      return A(p, _e, d);
    }
    const ke = T, ct = u ? (r.value || []).filter((_e) => typeof _e == "string") : [];
    return [.../* @__PURE__ */ new Set([...ke, ...ct])];
  }, Ve = (d, g) => {
    const j = gn(t), T = (B.value?.length ? B.value : j?.options)?.[g] || [], K = u && r.value ? r.value.filter((Be) => typeof Be == "string") : [];
    let ie = [.../* @__PURE__ */ new Set([...T, ...K])];
    j?.optionLocations && d && d !== "all" && (ie = ie.filter((Be) => {
      const Qe = j.optionLocations[Be];
      return Qe ? Qe.includes(d) : !0;
    }));
    const je = ce(g, d), ke = new Set(je), ct = me.value ?? j?.displayNames;
    return ie.map((Be) => ({
      value: Be,
      label: ct?.[Be] || Be,
      disabled: !ke.has(Be)
    }));
  }, un = () => {
    const d = ce(0);
    return d.length === 1 ? d[0] : void 0;
  }, xa = (d) => {
    const g = ce(d);
    return g.length === 1 ? g[0] : void 0;
  }, Gt = (d) => {
    const g = gn(t), j = B.value?.length ? B.value : g?.options;
    let R = [];
    if (j && j[d] && Array.isArray(j[d])) {
      const K = j[d];
      Array.isArray(K) && K.every((ie) => typeof ie == "string") && (R = K);
    }
    const T = u && r.value ? r.value.filter((K) => typeof K == "string") : [];
    return [.../* @__PURE__ */ new Set([...R, ...T])];
  }, Ft = (d, g = 0) => {
    if (d === "all" || d === "faces" || d === "sides")
      return "";
    if (ht(d)) {
      const R = Nt(d);
      return R?.price !== void 0 && O(d, g) ? D ? D(R.price) : R.price.toString() : "";
    }
    if (!f || !J)
      return "";
    if (!$.value.includes(d))
      return "N/A";
    const j = J(n.value, t, d, ue);
    return j ? D ? D(j) : j.toString() : "N/A";
  }, Nn = (d) => {
    if (!f || !J) return !1;
    if (typeof d == "string" && ht(d)) {
      const g = Nt(d);
      return typeof g?.price == "number" ? g.price : !1;
    }
    return J(n.value, t, d, ue);
  }, Tn = E(() => $.value.length > 1), Mn = E(() => X.value.length > 1), sa = () => {
    if (P.value && P.value.length > 0) {
      const T = [];
      return L.value && L.value.length > 0 && L.value.forEach((K) => T.push(K.id)), T.push(...P.value), T;
    }
    const d = [], g = L.value && L.value.length > 0;
    g && L.value.forEach((T) => d.push(T.id)), g || (Tn.value && d.push("all"), Mn.value && (tl(t).length > 0 && d.push("faces"), nl(t).length > 0 && d.push("sides")));
    const j = /* @__PURE__ */ new Set();
    L.value && L.value.length > 0 && L.value.forEach((T) => {
      T.hideIndividualLocations && T.locations.forEach((K) => j.add(K));
    });
    const R = X.value.filter((T) => !j.has(T));
    return d.push(...R), d;
  }, si = () => N.value === "multiple", li = () => {
    const d = 1 + B.value.length, g = N.value === "multiple", j = f, R = d + (g ? 1 : 0) + (j ? 1 : 0);
    return {
      columns: R,
      style: `repeat(${R}, max-content)`
    };
  }, la = (d) => d === "all" ? "all" : d === "faces" ? "faces" : d === "sides" ? "sides" : "individual", Pa = (d) => Un(d), oi = (d) => {
    if (d === "all")
      return Tn.value;
    if (ht(d))
      return Nt(d) ? bt(d).length > 0 : !1;
    if (P.value && P.value.length > 0)
      return P.value.includes(d);
    const g = la(d);
    return g === "all" ? Tn.value : g === "faces" || g === "sides" ? g === "faces" && Z.value && G.value.length > 0 || g === "sides" && le.value && x.value.length > 0 ? Mn.value : !1 : X.value.includes(d);
  }, oa = (d) => {
    Vo(d, t, r);
  }, Vn = (d) => {
    Mo([n.value], t, d, i);
  }, ra = (d) => {
    To([n.value], t, d);
  }, _n = (d, g, j) => {
    if (d === "all")
      Ne(g, j);
    else if (d === "faces")
      ye(g, j);
    else if (d === "sides")
      Pt(g, j);
    else if (ht(d)) {
      let T = j;
      if (!oe() && typeof j == "boolean") {
        const K = Gt(g), ie = K.find((je) => je.endsWith(`|${d}`));
        ie ? T = j ? ie : "" : K.length === 1 && (T = j ? K[0] : "");
      }
      if (!oe() && T) {
        const K = bt(d), ie = new Set(K);
        L.value && (L.value.forEach((je) => {
          je.id !== d && bt(je.id).filter((_e) => !ie.has(_e)).forEach((_e) => {
            ne(_e, g, "");
          });
        }), $t(n));
      }
      $n(d, g, T);
    } else
      ne(d, g, j), oe() || $t(n);
    const R = i.length;
    for (let T = g + 1; T < R; T++) {
      let K;
      if (d === "all" ? K = ut(T) : d === "faces" ? K = Lt(T) : d === "sides" ? K = gt(T) : ht(d) ? K = O(d, T) : K = ve(d, T), !K)
        continue;
      const ie = ce(T, d);
      let je = !1;
      if (typeof K == "string" ? je = ie.includes(K) : typeof K == "boolean" && K === !0 && (je = ie.length > 0), !je) {
        const ke = Pe(d, T) === "checkbox" ? !1 : "";
        d === "all" ? Ne(T, ke) : d === "faces" ? ye(T, ke) : d === "sides" ? Pt(T, ke) : ht(d) ? $n(d, T, ke) : ne(d, T, ke);
      }
    }
  }, cn = (d, g = !0) => g && !confirm(`Delete ${t} for ${Oe(d)}?`) ? !1 : (d === "all" ? rn() : d === "faces" ? wn() : d === "sides" ? st() : ht(d) ? I(d) : q(d), !0), ri = () => {
    const d = n.value[t], g = n.value[`${t}Options`];
    return !(!d || typeof d != "object" || !g || typeof g != "object" || Z.value && (!("faces" in d) || !("faces" in g)) || le.value && (!("sides" in d) || !("sides" in g)));
  }, ui = () => {
    const d = [], g = n.value[t], j = n.value[`${t}Options`];
    return !g || typeof g != "object" ? d.push(`Missing or invalid ${t} property in shape`) : (Z.value && !("faces" in g) && d.push(`Missing faces property in ${t}`), le.value && !("sides" in g) && d.push(`Missing sides property in ${t}`)), !j || typeof j != "object" ? d.push(`Missing or invalid ${t}Options property in shape`) : (Z.value && !("faces" in j) && d.push(`Missing faces property in ${t}Options`), le.value && !("sides" in j) && d.push(`Missing sides property in ${t}Options`)), d;
  }, Ot = (d) => {
    const g = [];
    if (!d || !Object.keys(d).length)
      return { valid: !0, errors: g };
    const j = Object.keys(d), R = Math.max(...j.map((T) => T.split("|").length));
    if (R <= 1)
      return { valid: !0, errors: g };
    for (const T of $.value) {
      let K;
      if (oe()) {
        const ke = Za(n.value, t, T);
        ke && typeof ke == "object" && !Array.isArray(ke) ? K = i.map((_e) => {
          const Be = ke[_e];
          if (Be === !0) {
            const Qe = i.indexOf(_e);
            return Gt(Qe)[0] || "";
          }
          return String(Be || "");
        }).join("|") : K = "";
      } else {
        const ke = ve(T, 0);
        K = typeof ke == "string" ? ke : "";
      }
      if (!K || K === "")
        continue;
      const ie = K.includes("|") ? K.split("|") : [K], je = ie.filter((ke) => ke.trim() !== "").length;
      if (je > 0 && je < R) {
        const ke = ie.join("|"), ct = j.some((Be) => Be.startsWith(ke + "|")), _e = j.includes(ke);
        if (ct && !_e) {
          const Be = R - je, Qe = ie.filter((zt) => zt.trim() !== "").join(", "), Et = Oe(T);
          g.push(`${t} selection incomplete for ${Et}. Selected: "${Qe}" but ${Be} more level${Be > 1 ? "s" : ""} required.`);
        }
      }
    }
    return { valid: g.length === 0, errors: g };
  }, Ce = (d) => Ot(d).errors, Ze = E(() => sa().map((d) => ({
    location: d,
    label: Oe(d),
    isAggregate: ["all", "faces", "sides"].includes(d) || ht(d)
  })));
  return {
    // State - provide raw computed refs for other composables
    mode: N,
    // Raw computed ref (not readonly wrapped)
    allLocations: _t($),
    faceLocations: _t(G),
    sideLocations: _t(x),
    shouldShowAll: Tn,
    // Raw computed ref (not readonly wrapped)
    shouldShowGroupControls: _t(Mn),
    renderLocations: _t(Ze),
    // Expose computed renderLocations
    // Support flags
    supportsFaces: _t(Z),
    supportsSides: _t(le),
    supportsBoth: _t(fe),
    // Core operations
    setValue: ne,
    getValue: ve,
    setAll: Ne,
    getAll: ut,
    getAllState: ut,
    // Alias for backward compatibility
    deleteSingle: q,
    deleteAll: rn,
    canDelete: se,
    // Group-specific operations
    setAllFaces: ye,
    setAllSides: Pt,
    getAllFaces: Lt,
    getAllSides: gt,
    deleteAllFaces: wn,
    deleteAllSides: st,
    // UI helpers
    getLocationLabel: Oe,
    getInputType: Pe,
    getInputConfig: Re,
    getAllInputConfig: He,
    getAllFacesInputConfig: et,
    getAllSidesInputConfig: Ct,
    getInputConfigForLocation: Ut,
    getSelectOptions: Ve,
    getSingleOptionLabel: xa,
    // Pricing
    getPriceDisplay: Ft,
    getCalculatedPrice: Nn,
    // Layout & rendering
    getRenderLocations: sa,
    shouldShowDeleteButton: si,
    getGridConfig: li,
    getLocationGroup: la,
    getLocationScope: Pa,
    isLocationVisible: oi,
    // Options management
    getAvailableOptions: ce,
    getSingleAvailableOption: un,
    // Initialization & migration
    initialize: Q,
    initializeExtra: Q,
    // Alias for backward compatibility
    initializeCustomNames: oa,
    migrateToSingle: Vn,
    migrateToBoolean: ra,
    // Event handlers
    handleInputChange: _n,
    handleDelete: cn,
    // Validation
    validateShape: ri,
    getValidationErrors: ui,
    validateIncompleteSelections: Ot,
    getIncompleteSelectionErrors: Ce,
    // Debug helpers (development only)
    getDebugInfo: (d, g) => ({
      mode: N.value,
      location: d,
      optionIndex: g,
      value: $.value.includes(d) ? ve(d, g) : "N/A",
      inputType: Pe(d, g),
      canDelete: se(d),
      allState: ut(g),
      availableOptions: ce(g),
      locationGroup: la(d),
      config: v.value,
      supportsFaces: Z.value,
      supportsSides: le.value,
      supportsBoth: fe.value,
      ...Z.value && {
        allFacesState: Lt(g)
      },
      ...le.value && {
        allSidesState: gt(g)
      },
      ...$.value.includes(d) && {
        locationScope: Pa(d)
      }
    })
  };
}, Jr = (e) => {
  const {
    customNames: n,
    usedNames: t,
    allowCustomNames: a,
    getSelectOptions: i,
    onCustomNameAdded: l,
    onCustomNameDeleted: u
  } = e, r = U(""), f = E(() => a && r.value?.trim()), p = E(() => !a || !n.value || n.value.length === 0 || n.value.length === 1 && n.value[0] === !0 ? !0 : n.value.filter((A) => typeof A == "string").every((A) => t.value.includes(A))), b = E(() => {
    const h = [];
    if (a && n.value && n.value.length > 0) {
      if (n.value.length === 1 && n.value[0] === !0)
        return h;
      const ue = [...n.value.filter((D) => typeof D == "string")].sort().filter(
        (D) => !(t.value?.includes(D) ?? !1)
      );
      h.push({
        id: "delete-header",
        type: "group",
        label: "Delete Type"
      }), ue.length > 1 && h.push({
        id: "delete-all-custom-names",
        label: "Delete all",
        icon: ["fass", "trash"],
        class: "del"
      }), ue.forEach((D) => {
        h.push({
          id: `delete-${D}`,
          label: `Delete "${D}"`,
          icon: ["fass", "trash"],
          class: "del"
        });
      });
    }
    return h;
  }), P = () => {
    const h = r.value?.trim();
    if (!h) return;
    if (i("", 0).map((J) => J.value).includes(h)) {
      r.value = "";
      return;
    }
    l(h), r.value = "";
  }, L = (h) => {
    const A = h.item || h;
    if (A.id === "delete-all-custom-names") {
      n.value.filter((J) => typeof J == "string").filter((J) => !(t.value?.includes(J) ?? !1)).forEach((J) => u(J));
      return;
    }
    if (A.id?.startsWith("delete-")) {
      const J = A.id.replace("delete-", "");
      if (t.value?.includes(J)) {
        console.warn(`Cannot delete ${e.extraType} type "${J}" - it is currently in use`);
        return;
      }
      u(J);
    }
  };
  return {
    newCustomName: r,
    canAddCustomName: _t(f),
    isActionMenuDisabled: _t(p),
    customNameActions: b,
    handleAddCustomName: P,
    handleCustomNameAction: L
  };
}, Qr = (e) => {
  const {
    extraType: n,
    labels: t,
    shapeIndex: a,
    enablePricing: i,
    shouldShowAll: l,
    locations: u,
    locationGroups: r = U([]),
    shape: f = U(null),
    orientationModel: p = 0,
    getInputType: b,
    getInputConfig: P,
    getAllInputConfig: L,
    getInputConfigForLocation: h,
    canDelete: A,
    getLocationLabel: J,
    shouldShowDeleteButton: ue
  } = e, D = E(() => {
    const X = [], $ = r.value && r.value.length > 0, G = /* @__PURE__ */ new Set();
    if ($ && r.value.forEach((Z) => {
      Z.hideIndividualLocations && Z.locations.forEach((le) => G.add(le));
    }), $ && r.value.forEach((Z) => X.push(Z.id)), !$ && l.value && X.push("all"), u.value && u.value.length > 0)
      X.push(...u.value.filter((Z) => Z !== "all" && !G.has(Z)));
    else {
      const Z = Xn(n), le = el(n), fe = Xs(n), oe = Ys(n);
      !$ && (le && fe && oe) && (tl(n).length > 0 && X.push("faces"), nl(n).length > 0 && X.push("sides")), X.push(...Z.filter((Ke) => !G.has(Ke)));
    }
    let x = Array.from(new Set(X));
    if ((p === 1 || p === 2) && f.value && f.value.w > f.value.l) {
      const Z = ["side.l1", "side.l2", "side.w1", "side.w2"], le = x.map((fe, oe) => ({ loc: fe, i: oe })).filter((fe) => Z.includes(fe.loc));
      if (le.length > 0) {
        const fe = le[0].i, oe = le.filter((Se) => Se.loc.includes(".w")).sort((Se, Fe) => Se.loc.localeCompare(Fe.loc)), Je = le.filter((Se) => Se.loc.includes(".l")).sort((Se, Fe) => Se.loc.localeCompare(Fe.loc)), Ke = [...oe.map((Se) => Se.loc), ...Je.map((Se) => Se.loc)];
        x = x.filter((Se) => !Z.includes(Se)), x.splice(fe, 0, ...Ke);
      }
    }
    return x;
  }), B = E(() => `1fr${i ? " max-content" : ""}`), me = (X, $) => `${n}-${X}-${t[$]}-${$}-${a}`, Q = (X) => {
    const $ = J(X);
    return `Delete ${n} for ${$}`;
  }, v = (X) => ({
    show: ue(X),
    enabled: A(X),
    ariaLabel: Q(X)
  }), N = (X, $) => b(X, $);
  return {
    renderLocations: _t(D),
    gridStyle: _t(B),
    getInputId: me,
    getDeleteAriaLabel: Q,
    getInputConfigForLocation: h,
    getDeleteConfig: v,
    getInputTypeForLocation: N,
    // Re-export the passed functions for consistency
    getInputType: b,
    getInputConfig: P,
    getAllInputConfig: L,
    canDelete: A,
    shouldShowDeleteButton: ue,
    getLocationLabel: J
  };
};
function Wi(e) {
  const n = {}, t = e, a = t.code;
  if (a === "invalid_type") {
    let i = "unknown";
    if ("input" in t)
      i = typeof t.input;
    else if ("received" in t) {
      const l = t.received;
      i = typeof l == "string" ? l : typeof l;
    }
    n.expected = t.expected, n.received = i;
  } else a === "too_small" ? (n.minimum = t.minimum, n.min = t.minimum, n.inclusive = t.inclusive) : a === "too_big" ? (n.maximum = t.maximum, n.max = t.maximum, n.inclusive = t.inclusive) : a === "invalid_string" && (n.validation = t.validation);
  if (a === "too_small" || a === "too_big" || a === "invalid_type") {
    const i = t.path, l = Array.isArray(i) && i.length > 0 ? String(i[i.length - 1]) : "field";
    n.field = `fields.${l}`;
  }
  return n;
}
function _s(e) {
  return e.map((n) => {
    const t = n.path.length > 0 ? n.path.join(".") : "root", a = Wi(n), i = Ra(n.message, a);
    return `[${t}] ${i}`;
  });
}
function va(e, n) {
  const t = e.safeParse(n);
  return {
    success: t.success,
    data: t.success ? t.data : void 0,
    errors: t.success ? void 0 : t.error.issues
  };
}
function Yr(e = {}) {
  try {
    let n = function(O) {
      if (!O || typeof O != "object") return O;
      const I = { ...O };
      if (delete I.issues, delete I.warnings, I.trim && typeof I.trim == "object") {
        const w = I.trim;
        ("x1" in w || "x2" in w || "y1" in w || "y2" in w) && (I.trim = {
          l1: w.y1 ?? w.l1 ?? 0,
          l2: w.y2 ?? w.l2 ?? 0,
          w1: w.x1 ?? w.w1 ?? 0,
          w2: w.x2 ?? w.w2 ?? 0
        });
      }
      if (I.extras?.banding?.sides && typeof I.extras.banding.sides == "object") {
        const w = I.extras.banding.sides;
        ("x1" in w || "x2" in w || "y1" in w || "y2" in w) && (I.extras.banding.sides = {
          l1: w.y1 ?? w.l1,
          l2: w.y2 ?? w.l2,
          w1: w.x1 ?? w.w1,
          w2: w.x2 ?? w.w2
        });
      }
      if (I.extras?.finish?.sides && typeof I.extras.finish.sides == "object") {
        const w = I.extras.finish.sides;
        ("x1" in w || "x2" in w || "y1" in w || "y2" in w) && (I.extras.finish.sides = {
          l1: w.y1 ?? w.l1,
          l2: w.y2 ?? w.l2,
          w1: w.x1 ?? w.w1,
          w2: w.x2 ?? w.w2
        });
      }
      if (I.extras?.planing?.sides && typeof I.extras.planing.sides == "object") {
        const w = I.extras.planing.sides;
        ("x1" in w || "x2" in w || "y1" in w || "y2" in w) && (I.extras.planing.sides = {
          l1: w.y1 ?? w.l1,
          l2: w.y2 ?? w.l2,
          w1: w.x1 ?? w.w1,
          w2: w.x2 ?? w.w2
        });
      }
      if (I.efficiencyOptions?.primaryCompression) {
        const w = I.efficiencyOptions.primaryCompression;
        w === "x" ? I.efficiencyOptions = {
          ...I.efficiencyOptions,
          primaryCompression: "l"
        } : w === "y" && (I.efficiencyOptions = {
          ...I.efficiencyOptions,
          primaryCompression: "w"
        });
      }
      for (const w in I)
        I[w] === null && delete I[w];
      return I;
    }, t = function(O, I) {
      if (!Array.isArray(O))
        return [];
      const w = [];
      for (let q = 0; q < O.length; q++) {
        const se = O[q], Oe = n(se);
        try {
          const Pe = {
            ...Oe,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored shapes as new to avoid showing validation errors immediately
          };
          se.autoId && (Pe.autoId = se.autoId), delete Pe.issues, delete Pe.warnings;
          const Re = new Hn(Pe, I);
          w.push(Re);
        } catch (Pe) {
          console.error(`Failed to create InputShape at index ${q}:`, Pe);
        }
      }
      return w;
    }, a = function(O, I) {
      if (!Array.isArray(O)) return [];
      const w = [];
      for (let q = 0; q < O.length; q++) {
        const se = O[q], Oe = n(se);
        try {
          const Pe = {
            ...Oe,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored stock as new to avoid showing validation errors immediately
          };
          se.autoId && (Pe.autoId = se.autoId);
          const Re = new fa(Pe, I);
          w.push(Re);
        } catch (Pe) {
          console.error(`Failed to create InputStock at index ${q}:`, Pe);
        }
      }
      return w;
    }, i = function(O) {
      const I = n(O), w = va(ta, I);
      if (w.success && w.data) {
        const q = {
          ...w.data,
          issues: [],
          warnings: []
        };
        return O?.autoId && (q.autoId = O.autoId), new mn(q);
      } else
        return console.error("Failed to parse input saw:", w.errors), new mn({});
    }, l = function(O, I) {
      return Array.isArray(O) ? I && I.length ? Rr(O, I) : O.map((w) => new Qs(w)).filter(Boolean) : [];
    }, u = function(O = {}) {
      try {
        const q = { ...wa(
          (Oe) => {
            if (typeof Oe != "object" || Oe === null) return Oe;
            const Pe = { ...Oe };
            for (const Re in Pe)
              Pe[Re] === null && delete Pe[Re];
            return Pe;
          },
          na
        ).parse(O), isNew: !0 }, se = new Hn(q, le);
        return se.createId(fe.value.length), fe.value.push(se), se;
      } catch (I) {
        return I instanceof _a && (console.error("Shape validation failed:", I.issues), B("part", "Invalid shape data", I.issues)), null;
      }
    }, r = function(O = {}) {
      try {
        const w = { ...Gn.parse(O), isNew: !0 }, q = new fa(w, le);
        return q.createId(oe.value.length), oe.value.push(q), q;
      } catch (I) {
        return I instanceof _a && (console.error("Stock validation failed:", I.issues), B("stock", "Invalid stock data", I.issues)), null;
      }
    }, f = function(O) {
      try {
        const I = O.toData(), w = na.parse(I);
        return new Hn(w, le);
      } catch (I) {
        return I instanceof _a && (console.error("Shape clone validation failed:", I.issues), B("part", "Invalid shape data during cloning", I.issues)), null;
      }
    }, p = function(O) {
      try {
        const I = O.toData(), w = Gn.parse(I);
        return new fa(w, le);
      } catch (I) {
        return I instanceof _a && (console.error("Stock clone validation failed:", I.issues), B("stock", "Invalid stock data during cloning", I.issues)), null;
      }
    }, b = function(O, I) {
      const w = fe.value.findIndex((Pe) => Pe.autoId === O);
      if (w === -1) return !1;
      const q = fe.value[w], se = { ...q.toData(), ...I }, Oe = va(na, se);
      if (Oe.success && Oe.data) {
        if (q.update(Oe.data), !q.isNew) {
          const Pe = Object.keys(I);
          q.validate({ fields: Pe, index: w });
        }
        return !0;
      } else {
        const Pe = Oe.errors ? _s(Oe.errors) : [];
        console.error("Shape update validation failed:", Pe);
        const Re = Oe.errors || [], He = Object.keys(I);
        for (let et = q.issues.length - 1; et >= 0; et--)
          q.issues[et].field.some((Ct) => He.includes(Ct[0])) && q.issues.splice(et, 1);
        for (const et of Re) {
          const Ct = Wi(et), Ut = Array.isArray(et.path) ? et.path.map((ce) => String(ce)) : [];
          new Bt({
            item: q,
            category: ["part"],
            message: et.message,
            params: Ct,
            field: Ut.length > 0 ? [Ut] : []
          });
        }
        return !1;
      }
    }, P = function(O, I) {
      const w = fe.value.findIndex((se) => se.autoId === O);
      if (w === -1) return !1;
      const q = fe.value[w];
      return q.validate({ fields: [I], index: w }), q.issues.length === 0;
    }, L = function(O, I) {
      const w = oe.value.find((Oe) => Oe.autoId === O);
      if (!w) return !1;
      const q = { ...w.toData(), ...I }, se = va(Gn, q);
      if (se.success && se.data)
        return w.update(se.data), w.isNew || D(), !0;
      {
        const Oe = se.errors ? _s(se.errors) : [];
        console.error("Stock update validation failed:", Oe);
        const Pe = se.errors || [], Re = Object.keys(I);
        for (let He = w.issues.length - 1; He >= 0; He--)
          w.issues[He].field.some((et) => Re.includes(et[0])) && w.issues.splice(He, 1);
        for (const He of Pe) {
          const et = Wi(He), Ct = Array.isArray(He.path) ? He.path.map((Ut) => String(Ut)) : [];
          new Bt({
            item: w,
            category: ["stock"],
            message: He.message,
            params: et,
            field: Ct.length > 0 ? [Ct] : []
          });
        }
        return $t(oe), !1;
      }
    }, h = function(O, I) {
      const w = oe.value.findIndex((se) => se.autoId === O);
      if (w === -1) return !1;
      const q = oe.value[w];
      return q.validate({ fields: [I], index: w }), $t(oe), q.issues.length === 0;
    }, A = function(O) {
      if (fe.value.length === 1) return !1;
      const I = fe.value.findIndex((w) => w.autoId === O);
      return I === -1 ? !1 : (fe.value.splice(I, 1), !0);
    }, J = function(O) {
      if (oe.value.length === 1) return !1;
      const I = oe.value.findIndex((w) => w.autoId === O);
      return I === -1 ? !1 : (oe.value.splice(I, 1), !0);
    }, ue = function(O) {
      mt.value = !0;
      const I = [];
      try {
        fe.value.forEach((w) => w.issues.length = 0);
        for (let w = 0; w < fe.value.length; w++) {
          const q = fe.value[w];
          if (q.isNew || q.multiEdit)
            continue;
          const se = q.validate({
            inputStockList: oe.value,
            index: w,
            stockType: O?.stockType ?? null,
            partTrim: 0,
            useInventory: !1,
            saw: O
          });
          I.push(...se);
        }
        fe.value.some((w) => Number(w.q) > 0) || new Bt({
          category: ["part"],
          message: "errors.validation.no_parts",
          issues: I
        });
      } finally {
        mt.value = !1;
      }
      return Fe.value = I, I;
    }, D = function(O) {
      mt.value = !0;
      const I = [];
      try {
        oe.value.forEach((w) => w.issues.length = 0);
        for (let w = 0; w < oe.value.length; w++) {
          const q = oe.value[w];
          if (q.multiEdit)
            continue;
          const se = q.validate({ saw: O }, w);
          I.push(...se);
        }
        oe.value.some((w) => Number(w.q) > 0 || w.autoAdd) || new Bt({
          category: ["stock"],
          message: "errors.validation.no_stock",
          issues: I
        });
      } finally {
        mt.value = !1;
      }
      return Fe.value = I, I;
    }, B = function(O, I, w) {
      new Bt({
        category: [O],
        message: I,
        issues: Fe.value
      }), w && console.log("Validation details:", w);
    }, me = function() {
      Fe.value = [], fe.value.forEach((O) => O.issues.length = 0), oe.value.forEach((O) => O.issues.length = 0);
    }, Q = function(O = {}) {
      const I = [], w = [], q = O.inputShapesOverride ?? fe.value;
      if (!q.length)
        return { shapeList: [], issues: [] };
      for (let se = 0; se < q.length; se++) {
        const Oe = q[se];
        if (!Oe.q) continue;
        Oe.createId(se), Oe.applyPartTrim(O.trim, O.stockType);
        const Pe = Oe.toShape();
        I.push(Pe), w.push(...Pe.issues);
      }
      return { shapeList: I, issues: w };
    }, v = function(O) {
      if (!oe.value.length)
        return { stockList: [], issues: [] };
      const I = [], w = [];
      for (let q = 0; q < oe.value.length; q++) {
        const se = oe.value[q];
        if (!se.q && !se.autoAdd) continue;
        se.createId(q), se.saw = O;
        const Oe = se.toStock();
        I.push(Oe), w.push(...Oe.issues);
      }
      return { stockList: I, issues: w };
    }, N = function(O, I = le) {
      const w = {
        saw: { success: !1, failed: !1 },
        shapes: { success: 0, failed: 0 },
        stock: { success: 0, failed: 0 },
        groups: { success: 0, failed: 0 }
      };
      if (O.saw) {
        const q = va(ta, n(O.saw));
        if (q.success && q.data) {
          const se = { ...q.data };
          O.saw?.autoId && (se.autoId = O.saw.autoId), Je.value = new mn(se), w.saw.success = !0;
        } else
          console.error("Failed to parse input saw:", q.errors), w.saw.failed = !0;
      }
      if (O.shapes) {
        const q = t(O.shapes, I);
        w.shapes.success = q.length, w.shapes.failed = O.shapes.length - q.length, fe.value = q, Fe.value = Fe.value.filter(
          (se) => !se.category.includes("part")
        );
      }
      if (O.stock) {
        const q = a(O.stock, I);
        w.stock.success = q.length, w.stock.failed = O.stock.length - q.length, oe.value = q, Fe.value = Fe.value.filter(
          (se) => !se.category.includes("stock")
        );
      }
      if (O.groups) {
        const q = l(O.groups);
        w.groups.success = q.length, w.groups.failed = O.groups.length - q.length, Ke.value = q;
      }
      return O.extrasOptions && (Se.value = { ...O.extrasOptions }), w;
    }, X = function() {
      return {
        shapes: fe.value.map((O) => O.toData()),
        stock: oe.value.map((O) => O.toData()),
        inputUserGroups: Ke.value.map((O) => O.toData()),
        extrasOptions: Se.value
      };
    }, $ = function() {
      fe.value = [], oe.value = [], Ke.value = [], me();
    }, G = function(O) {
      const I = { ...Je.value.toData(), ...O }, w = va(ta, I);
      return w.success && w.data ? (Je.value.update(w.data), !0) : (console.error("InputSaw update validation failed:", w.errors), B("saw", "Invalid saw update", w.errors), !1);
    }, x = function() {
      Je.value = new mn({});
    }, Z = function() {
      const O = Je.value.validate();
      return Fe.value = [...Fe.value.filter((I) => I.category?.[0] !== "saw"), ...O], O;
    };
    const { numberFormat: le = "decimal" } = e, fe = Yn("inputs/inputShapes", [], {
      serializer: {
        read: (O) => {
          if (!O) return [];
          let I;
          try {
            I = JSON.parse(O);
          } catch (w) {
            return console.error("Failed to parse input shapes JSON:", w), [];
          }
          return t(I, le);
        },
        write: (O) => {
          const w = O.filter((se) => !se?.multiEdit).map((se) => se.toData());
          return JSON.stringify(w);
        }
      },
      listenToStorageChanges: !1
    }), oe = Yn("inputs/inputStock", [], {
      serializer: {
        read: (O) => {
          if (!O) return [];
          let I;
          try {
            I = JSON.parse(O);
          } catch (q) {
            return console.error("  Failed to parse stock JSON:", q), [];
          }
          return a(I, le);
        },
        write: (O) => {
          const w = O.filter((se) => !se?.multiEdit).map((se) => se.toData());
          return JSON.stringify(w);
        }
      },
      listenToStorageChanges: !1
    }), Je = Yn("inputs/inputSaw", new mn({}), {
      serializer: {
        read: (O) => {
          if (!O) return new mn({});
          try {
            const I = JSON.parse(O);
            return i(I);
          } catch (I) {
            return console.error("  Failed to parse saw JSON:", I), new mn({});
          }
        },
        write: (O) => {
          if (!O)
            return JSON.stringify({});
          const I = O.toData();
          return JSON.stringify(I);
        }
      },
      listenToStorageChanges: !1
    }), Ke = Yn("inputs/inputUserGroups", [], {
      serializer: {
        read: (O) => l(O ? JSON.parse(O) : []),
        write: (O) => JSON.stringify(O.map((I) => I.toData()))
      }
    }), Se = Yn("inputs/extrasOptions", {
      banding: { options: [] },
      finish: { options: [] },
      planing: { options: [] }
    }, {
      serializer: {
        read: (O) => {
          if (!O) return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          try {
            return JSON.parse(O);
          } catch {
            return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          }
        },
        write: (O) => JSON.stringify(O)
      }
    }), Fe = U([]), mt = U(!1);
    fe.value.length === 0 && (fe.value = [new Hn({ isNew: !0 })]), oe.value.length === 0 && (oe.value = [new fa({ isNew: !0 })]);
    const _ = E(() => fe.value.reduce((O, I) => {
      const w = Number(I?.q);
      return w && w > 0 && !I?.multiEdit ? O + w : O;
    }, 0)), ee = E(() => oe.value.reduce((O, I) => {
      const w = Number(I?.q);
      return w && w > 0 && !I?.multiEdit ? O + w : O;
    }, 0)), be = E(() => fe.value.reduce((O, I) => I?.multiEdit ? O : O + 1, 0)), De = E(() => oe.value.reduce((O, I) => I?.multiEdit ? O : O + 1, 0)), ne = E(() => Fe.value.length > 0), ve = () => [
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
    ], Ne = U(null), ut = U(null), rn = () => {
      Ne.value = null;
    }, re = me, Te = (O = null) => {
      const I = (O?.inputShapesOverride ?? fe.value).filter((q) => !q.multiEdit), w = ue(O?.saw || void 0);
      if (I.length) {
        jo(I, oe.value, O?.saw || Je.value);
        const q = I.flatMap((se) => se.issues);
        return [...w, ...q];
      }
      return w;
    }, ze = async (O, I = "decimal") => {
      const w = O?.inputSaw, q = O?.inputShapes, se = O?.inputStock, Oe = O?.inputUserGroups, Pe = N({
        saw: w,
        shapes: q,
        stock: se,
        groups: Oe
      }, I);
      return $t(fe), $t(oe), await jt(), Pe;
    }, xe = (O, I = "decimal") => N({ shapes: O }, I).shapes.success > 0, Me = (O, I = "decimal") => N({ stock: O }, I).stock.success > 0, ye = (O, I, w, q, se) => {
      I[0]?.length > 0 && (Se.value[O] || (Se.value[O] = { options: [] }), Se.value[O].options = [...I[0]]), w && q && I.length > 0 ? zi(O, {
        options: I,
        // Use all columns extracted from pricing
        labels: w,
        pricing: q,
        displayNames: se
      }) : console.warn("[setExtrasOptionsFromPricing] Missing data for centralized config:", { labels: w, pricingData: q, pricingOptionsLength: I.length });
    }, Pt = () => {
      if (!Object.values(Se.value).some(
        (w) => w.options.length > 0
      )) return;
      const I = (w, q) => {
        const se = {};
        for (const Oe of q)
          se[Oe] = [...w];
        return se;
      };
      return {
        banding: Se.value.banding.options.length > 0 ? {
          options: {
            sides: I(Se.value.banding.options, ["l1", "l2", "w1", "w2"])
          }
        } : void 0,
        finish: Se.value.finish.options.length > 0 ? {
          options: {
            faces: I(Se.value.finish.options, ["a", "b"])
          }
        } : void 0,
        planing: Se.value.planing.options.length > 0 ? {
          options: {
            sides: I(Se.value.planing.options, ["l1", "l2", "w1", "w2"]),
            faces: I(Se.value.planing.options, ["a", "b"])
          }
        } : void 0
      };
    }, Lt = (O) => {
      if (!oe.value.length) return "n";
      const I = O.material, w = O.t, q = oe.value.filter((Re) => Re.material === I && Re.t === w);
      if (!q.length)
        return "n";
      let se = !1, Oe = !1, Pe = !1;
      for (const Re of q)
        Re.grain === "l" ? (se = !0, Oe = !0) : Re.grain === "w" && (se = !0, Pe = !0);
      return se ? Oe && Pe ? "y" : Oe ? "l" : Pe ? "w" : "n" : "n";
    }, gt = ({ stock: O = !0, shapes: I = !0 } = {}) => {
      O && (oe.value = [new fa({ l: 2440, w: 1220, q: 1 })]), I && (fe.value = [
        new Hn({ l: 500, w: 500, q: 1 }),
        new Hn({ l: 400, w: 400, q: 1 })
      ]);
    }, wn = (O) => {
      for (const I of fe.value)
        Ss(I, O);
      for (const I of oe.value)
        Ss(I, O);
    };
    let st = !1;
    at(fe, (O) => {
      st || !O.length || jt(() => {
        const I = ["banding", "finish", "planing"], w = [];
        I.forEach((q) => {
          const se = /* @__PURE__ */ new Set();
          if (O.forEach((Oe) => {
            const Pe = Oe.extras?.[q];
            Pe && (Pe.faces && Object.values(Pe.faces).forEach((Re) => {
              typeof Re == "string" && Re.trim() && Re !== "Y" && se.add(Re);
            }), Pe.sides && Object.values(Pe.sides).forEach((Re) => {
              typeof Re == "string" && Re.trim() && Re !== "Y" && se.add(Re);
            }));
          }), se.size > 0) {
            const Oe = gn(q);
            if (Oe) {
              const Pe = Oe.options[0];
              if (Array.isArray(Pe) && (Pe.length === 0 || typeof Pe[0] == "string")) {
                const Re = new Set(Pe), He = Array.from(se).filter((et) => !Re.has(et));
                if (He.length > 0) {
                  const et = [...Pe, ...He];
                  zi(q, {
                    ...Oe,
                    options: [et, ...Oe.options.slice(1)]
                  });
                }
              }
            }
          }
        }), I.forEach((q) => {
          const se = Hr(q, O);
          se.cleanedCount > 0 && w.push(
            `${q}: ${se.invalidOptions.join(", ")}`
          );
        }), w.length > 0 && (console.warn(
          `Some extras options no longer exist and have been reset:
` + w.join(`
`)
        ), typeof window < "u" && window.alert && setTimeout(() => {
          alert(
            `Some extras options no longer exist and have been reset:
` + w.join(`
`)
          );
        }, 500)), st = !0;
      });
    }, { immediate: !0 });
    let Nt = null;
    return {
      // Bundled object
      inputs: {
        inputStock: oe,
        inputShapes: fe,
        inputUserGroups: Ke,
        currentInputShape: Ne,
        selectedSaw: ut,
        inputSaw: Je
      },
      // State
      inputShapes: fe,
      inputStock: oe,
      inputUserGroups: Ke,
      inputSaw: Je,
      currentInputShape: Ne,
      selectedSaw: ut,
      validationIssues: Fe,
      isValidating: mt,
      // Computed
      totalInputShapes: _,
      totalInputStock: ee,
      totalInputShapeLines: be,
      totalInputStockLines: De,
      hasValidationIssues: ne,
      // Actions
      addInputShape: u,
      addInputStock: r,
      cloneInputShape: f,
      cloneInputStock: p,
      updateInputShape: b,
      updateInputStock: L,
      updateInputSaw: G,
      removeInputShape: A,
      removeInputStock: J,
      reset: rn,
      resetInputSaw: x,
      clear: $,
      clearIssues: re,
      // Validation
      validateInputShapes: Te,
      validateInputShapeField: P,
      validateInputStock: D,
      validateInputStockField: h,
      validateInputSaw: Z,
      clearValidationIssues: me,
      // Conversion
      createShapeList: Q,
      createStockList: v,
      // Import/Export/Update
      importData: N,
      exportData: X,
      updateInputs: ze,
      importInputShapes: xe,
      importInputStock: Me,
      // Additional functions
      getShapeGrainSummary: Lt,
      updateNumberFormat: wn,
      createTestData: gt,
      getSpecialShapeFields: ve,
      // Extras Options Management
      extrasOptions: Se,
      setExtrasOptionsFromPricing: ye,
      getCentralizedOptions: Pt,
      // Show part
      showPart: (O) => {
        Nt && Nt(O);
      },
      registerShowPart: (O) => {
        Nt = O;
      }
    };
  } catch (n) {
    throw console.error("[createInputs] Fatal error during initialization:", n), n;
  }
}
let Vi = null;
function ml(e = { numberFormat: "decimal" }) {
  try {
    return Vi || (Vi = Yr(e)), Vi;
  } catch (n) {
    throw console.error("[useInputs] FATAL ERROR in useInputs:", n), console.error("[useInputs] Error stack:", n?.stack), n;
  }
}
class Ds {
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
   * Migrate old side format (x1/x2/y1/y2) to new format (l1/l2/w1/w2)
   */
  static migrateSideNames(n) {
    const t = {};
    for (const [a, i] of Object.entries(n)) {
      let l = a;
      a === "x1" ? l = "l1" : a === "x2" ? l = "l2" : a === "y1" ? l = "w1" : a === "y2" && (l = "w2"), t[l] = i;
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
    if (t && t instanceof pa) {
      const b = t.sides;
      if (b && typeof b == "object" && ("x1" in b || "x2" in b || "y1" in b || "y2" in b)) {
        const L = this.migrateSideNames(b);
        return t.sides = L, !0;
      }
      return !1;
    }
    const l = {}, u = {}, r = { sides: {} };
    if (t && typeof t == "object") {
      const b = this.migrateSideNames(t);
      for (const [P, L] of Object.entries(b))
        ma.includes(P) && (l[P] = L);
    }
    if (a && typeof a == "object") {
      const b = this.migrateSideNames(a);
      for (const [P, L] of Object.entries(b))
        ma.includes(P) && (u[P] = L);
    }
    if (i && typeof i == "object") {
      i.all && (r.sides.all = i.all);
      for (const [b, P] of Object.entries(i))
        b !== "all" && ma.includes(b) && P && (r.sides[b] = P);
    }
    const f = new pa(Object.keys(l).length > 0 ? { sides: l } : {}), p = Object.keys(u).length > 0 ? new pa({ sides: u }) : void 0;
    return "extras" in n && n.extras ? n.extras.banding = f : Ye(n) && (n.banding = f), p && "_banding" in n && (n._banding = p), Ye(n) && i && (n.bandingOptions = r), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(n) {
    const t = n.finish, a = "_finish" in n ? n._finish : void 0, i = Ye(n) ? n.finishOptions : void 0;
    if (!t && !a && !i || t && t instanceof ga)
      return !1;
    const l = {}, u = {}, r = { faces: {} };
    if (t && typeof t == "object")
      for (const [b, P] of Object.entries(t))
        ha.includes(b) && (l[b] = P);
    if (a && typeof a == "object")
      for (const [b, P] of Object.entries(a))
        ha.includes(b) && (u[b] = P);
    if (i && typeof i == "object") {
      i.all && (r.faces.all = i.all);
      for (const [b, P] of Object.entries(i))
        b !== "all" && ha.includes(b) && P && (r.faces[b] = P);
    }
    const f = new ga(Object.keys(l).length > 0 ? { faces: l } : {}), p = Object.keys(u).length > 0 ? new ga({ faces: u }) : void 0;
    return "extras" in n && n.extras ? n.extras.finish = f : Ye(n) && (n.finish = f), p && "_finish" in n && (n._finish = p), Ye(n) && i && (n.finishOptions = r), !0;
  }
  /**
   * Migrate storage format: Convert boolean true to option name strings in multi-column configs
   * This handles legacy data where single-option checkboxes stored boolean true instead of the option name
   */
  static migrateStorageFormat(n) {
    let t = !1;
    const a = "extras" in n && n.extras ? n.extras : n;
    if (a.banding) {
      const i = xs("banding");
      if (i && i.labels && i.labels.length > 1)
        for (const l of ma) {
          const u = `side.${l}`, r = Za(n, "banding", u);
          if (r && typeof r == "object" && !Array.isArray(r)) {
            let f = !1;
            const p = { ...r };
            for (const b of i.labels)
              if (p[b] === !0) {
                const L = i.labels.indexOf(b);
                if (L !== -1 && i.options[L] && Array.isArray(i.options[L])) {
                  const h = i.options[L];
                  h.length === 1 && (p[b] = h[0], f = !0);
                }
              }
            f && (Ps(n, "banding", u, p), t = !0);
          }
        }
    }
    if (a.finish) {
      const i = xs("finish");
      if (i && i.labels && i.labels.length > 1)
        for (const l of ha) {
          const u = `face.${l}`, r = Za(n, "finish", u);
          if (r && typeof r == "object" && !Array.isArray(r)) {
            let f = !1;
            const p = { ...r };
            for (const b of i.labels)
              if (p[b] === !0) {
                const L = i.labels.indexOf(b);
                if (L !== -1 && i.options[L] && Array.isArray(i.options[L])) {
                  const h = i.options[L];
                  h.length === 1 && (p[b] = h[0], f = !0);
                }
              }
            f && (Ps(n, "finish", u, p), t = !0);
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
    if (t && typeof t == "object" && !(t instanceof pa) && !("sides" in t) && !("faces" in t))
      return !0;
    if ("_banding" in n) {
      const i = n._banding;
      if (i && typeof i == "object" && !(i instanceof pa) && !("sides" in i) && !("faces" in i))
        return !0;
    }
    const a = n.finish;
    if (a && typeof a == "object" && !(a instanceof ga) && !("sides" in a) && !("faces" in a))
      return !0;
    if ("_finish" in n) {
      const i = n._finish;
      if (i && typeof i == "object" && !(i instanceof ga) && !("sides" in i) && !("faces" in i))
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
          const i = Object.keys(t.sides).filter((l) => !ma.includes(l));
          if (i.length > 0)
            throw new Error(`Invalid side keys in banding: ${i.join(", ")}`);
        }
      }
      const a = n.finish;
      if (a) {
        if ("sides" in a && a.sides)
          throw new Error("Finish should not have sides property");
        if ("faces" in a && a.faces) {
          const i = Object.keys(a.faces).filter((l) => !ha.includes(l));
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
const Xr = {
  y1: "l1",
  y2: "l2",
  x1: "w1",
  x2: "w2"
}, eu = {
  l1: "y1",
  l2: "y2",
  w1: "x1",
  w2: "x2"
};
function Ki(e = !1) {
  return {
    l1: e,
    l2: e,
    w1: e,
    w2: e
  };
}
function tu(e = !1) {
  return {
    x1: e,
    x2: e,
    y1: e,
    y2: e
  };
}
function Ja(e = !1) {
  return {
    a: e,
    b: e
  };
}
function nu(e = !1) {
  return {
    sides: Ki(e),
    faces: Ja(e)
  };
}
function au(e = !1) {
  return {
    x1: e,
    x2: e,
    y1: e,
    y2: e,
    a: e,
    b: e
  };
}
function iu(e) {
  const n = {};
  for (const [t, a] of Object.entries(Xr))
    t in e && (n[a] = e[t]);
  return n;
}
function su(e) {
  const n = {};
  for (const [t, a] of Object.entries(eu))
    t in e && (n[a] = e[t]);
  return n;
}
function Dt(e) {
  return e === 1 ? !0 : e === 0 ? !1 : e;
}
function vn(e) {
  if (!e) return e;
  const n = "x1" in e || "x2" in e || "y1" in e || "y2" in e, t = "l1" in e || "l2" in e || "w1" in e || "w2" in e;
  if (n && t && console.warn("Mixed side format detected in data - using old format (x/y) and ignoring new format (l/w)", e), n) {
    const i = iu(e), l = {};
    return "l1" in i && (l.l1 = Dt(i.l1)), "l2" in i && (l.l2 = Dt(i.l2)), "w1" in i && (l.w1 = Dt(i.w1)), "w2" in i && (l.w2 = Dt(i.w2)), l;
  }
  const a = {};
  return "l1" in e && (a.l1 = Dt(e.l1)), "l2" in e && (a.l2 = Dt(e.l2)), "w1" in e && (a.w1 = Dt(e.w1)), "w2" in e && (a.w2 = Dt(e.w2)), Object.keys(a).length > 0 ? a : e;
}
function lu(e) {
  return !e || typeof e != "string" ? e : {
    "side.x1": "side.w1",
    "side.x2": "side.w2",
    "side.y1": "side.l1",
    "side.y2": "side.l2"
  }[e] || e;
}
function Zn(e) {
  return !e || !Array.isArray(e) ? e : e.map(lu);
}
function ou(e) {
  const n = {};
  if (e.banding && typeof e.banding == "object")
    for (const [t, a] of Object.entries(e.banding))
      a === !0 || a === !1 ? n[t] = a : typeof a == "number" ? n[t] = Dt(a) : typeof a == "string" && a.length > 0 && (n[t] = a);
  if (e.bandingType && typeof e.bandingType == "object")
    for (const [t, a] of Object.entries(e.bandingType))
      if (e.banding) {
        const i = n[t];
        (i === !0 || typeof i == "string" && i.length > 0) && (typeof a == "string" && a.length > 0 ? n[t] = a : typeof a == "number" && a !== 0 && (n[t] = String(a)));
      } else
        typeof a == "string" && a.length > 0 ? n[t] = a : typeof a == "number" && a !== 0 && (n[t] = String(a));
  return Object.keys(n).length > 0 ? n : void 0;
}
function Hi(e) {
  return e && su(e);
}
function ru(e) {
  e?.type && delete e.type, uu.call(this, e), cu.call(this, e), du.call(this, e), e.shapes && Array.isArray(e.shapes) && e.shapes.forEach((n) => Zi(n));
}
function uu(e) {
  if (!e?.banding || typeof e.banding != "object") return;
  const n = Object.keys(e.banding);
  if (!n.length) return;
  const t = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  n.every((a) => t.includes(a)) || (e.banding = {
    labels: Object.keys(e.banding),
    pricing: e.bandingPricing || {}
  }, e.bandingPricing && delete e.bandingPricing);
}
function cu(e) {
  if (!e?.finish || typeof e.finish != "object") return;
  const n = Object.keys(e.finish);
  if (!n.length) return;
  const t = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  n.every((a) => t.includes(a)) || (e.finish = {
    labels: Object.keys(e.finish),
    pricing: e.finishPricing || {}
  }, e.finishPricing && delete e.finishPricing);
}
function du(e) {
  if (!e?.planing || typeof e.planing != "object") return;
  const n = Object.keys(e.planing);
  if (!n.length) return;
  const t = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  n.every((a) => t.includes(a)) || (e.planing = {
    labels: Object.keys(e.planing),
    pricing: e.planingPricing || {}
  }, e.planingPricing && delete e.planingPricing);
}
function Zi(e) {
  !e || typeof e != "object" || (Ds.needsMigration(e) && Ds.migrateShape(e), e._banding && delete e._banding, e._finish && delete e._finish, e._bandingType && delete e._bandingType);
}
function gl(e) {
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
function Hm(e) {
  if (!(!e || typeof e != "object")) {
    if (ru(e), e.parts && Array.isArray(e.parts) && (e.parts = e.parts.map((n) => (n.extras?.banding?.sides && (n.extras.banding.sides = vn(n.extras.banding.sides)), n.extras?.finish?.sides && (n.extras.finish.sides = vn(n.extras.finish.sides)), n.extras?.planing?.sides && (n.extras.planing.sides = vn(n.extras.planing.sides)), n))), e.stock && Array.isArray(e.stock) && (e.stock = e.stock.map((n) => n?.trim ? {
      ...n,
      trim: vn(n.trim)
    } : n)), e.options) {
      if (gl(e.options), e.options.bandingLocations && (e.options.bandingLocations = Zn(e.options.bandingLocations)), e.options.finishLocations && (e.options.finishLocations = Zn(e.options.finishLocations)), e.options.planingLocations && (e.options.planingLocations = Zn(e.options.planingLocations)), e.options.extrasLocationGroups)
        for (const n of ["banding", "finish", "planing"]) {
          const t = e.options.extrasLocationGroups[n];
          t && Array.isArray(t) && t.forEach((a) => {
            a.locations && (a.locations = Zn(a.locations));
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
        t.locations && Array.isArray(t.locations) && (t.locations = Zn(t.locations)), t.groups && Array.isArray(t.groups) && t.groups.forEach((a) => {
          a.locations && (a.locations = Zn(a.locations));
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
    e.shapes && Array.isArray(e.shapes) && e.shapes.forEach((n) => Zi(n)), (e.l !== void 0 || e.w !== void 0 || e.banding !== void 0) && Zi(e);
  }
}
function fu(e) {
  if (!e || typeof e != "object")
    return e;
  const n = { ...e };
  return n.saw && (n.saw = pu(n.saw)), Array.isArray(n.stock) && (n.stock = n.stock.map(mu)), Array.isArray(n.parts) && (n.parts = n.parts.map(gu)), n;
}
function pu(e) {
  const n = { ...e };
  if (n.guillotineOptions && (n.guillotineOptions = { ...n.guillotineOptions }, n.guillotineOptions.strategy === "stock" && (n.guillotineOptions.strategy = "efficiency")), n.efficiencyOptions) {
    n.efficiencyOptions = { ...n.efficiencyOptions };
    const t = n.efficiencyOptions.primaryCompression;
    t === "x" ? n.efficiencyOptions.primaryCompression = "l" : t === "y" && (n.efficiencyOptions.primaryCompression = "w");
  }
  return n.bladeWidth !== void 0 && (n.bladeWidth = Number(n.bladeWidth)), n.stackHeight !== void 0 && (n.stackHeight = Number(n.stackHeight)), n.cutPreference === "flex" ? n.cutPreference = "l" : n.cutPreference === "" && (n.cutPreference = void 0), (n.cutPreference === null || n.cutPreference === void 0) && (n.cutType === "guillotine" || n.cutType === "beam") && (n.cutPreference = "l"), n;
}
function mu(e) {
  const n = { ...e };
  return delete n.numberFormatKeys, delete n.issues, delete n.warnings, n.trim && (n.trim = vn(n.trim)), n.l !== void 0 && (n.l = Number(n.l)), n.w !== void 0 && (n.w = Number(n.w)), n.t !== void 0 && (n.t = Number(n.t)), n.q !== void 0 && (n.q = Number(n.q)), n.cost !== void 0 && (n.cost = Number(n.cost)), n;
}
function gu(e) {
  const n = { ...e };
  if (delete n.numberFormatKeys, delete n.issues, delete n.warnings, n.banding || n.bandingType) {
    const t = ou(n);
    t && Object.keys(t).length > 0 && (n.extras || (n.extras = {}), n.extras.banding || (n.extras.banding = {}), n.extras.banding.sides = vn(t)), delete n.banding, delete n.bandingType;
  }
  if (n.extras?.banding?.sides && (n.extras = { ...n.extras }, n.extras.banding = { ...n.extras.banding }, n.extras.banding.sides = vn(n.extras.banding.sides)), n.finish && !n.extras?.finish) {
    if (n.extras || (n.extras = {}), n.extras.finish || (n.extras.finish = {}), n.finish.a !== void 0 || n.finish.b !== void 0) {
      const t = {};
      "a" in n.finish && (t.a = Dt(n.finish.a)), "b" in n.finish && (t.b = Dt(n.finish.b)), n.extras.finish.faces = t;
    } else
      n.extras.finish.sides = vn(n.finish);
    delete n.finish;
  }
  if (n.extras?.finish?.sides && (n.extras = { ...n.extras }, n.extras.finish = { ...n.extras.finish }, n.extras.finish.sides = vn(n.extras.finish.sides)), n.extras?.finish?.faces) {
    n.extras = { ...n.extras }, n.extras.finish = { ...n.extras.finish };
    const t = n.extras.finish.faces;
    "a" in t && (t.a = Dt(t.a)), "b" in t && (t.b = Dt(t.b));
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
function Qa(e) {
  if (!e || typeof e != "object") return null;
  if (Array.isArray(e)) return e.map(Qa);
  const n = {};
  for (const [t, a] of Object.entries(e))
    t === "__entityType" || t === "autoId" || t === "enabled" || t === "type" || t === "issues" || t === "warnings" || (n[t] = a && typeof a == "object" ? Qa(a) : a);
  return Object.keys(n).length > 0 ? n : null;
}
function hl(e) {
  if (!e) return null;
  const {
    enabled: n,
    __entityType: t,
    autoId: a,
    issues: i,
    warnings: l,
    ...u
  } = e;
  return Jt(u);
}
function hu(e) {
  return e ? typeof e == "string" ? e : e.id ? e.id : e.autoId ? e.autoId : "" : "";
}
function vu(e) {
  return e.rot !== void 0 ? e.rot ? 1 : 0 : e.rotated !== void 0 ? e.rotated ? 1 : 0 : e.isRotated !== void 0 ? e.isRotated ? 1 : 0 : e.w > e.l ? 1 : 0;
}
xt({
  // Job metadata
  jobId: An().describe("Job identifier"),
  // Input configuration (preserved)
  saw: ta.describe("Saw configuration used"),
  // Result data (internal format - l1/l2/w1/w2)
  // Using actual schemas to strip internal-only fields
  stock: pt(Uo).describe("Stock items"),
  parts: pt(Cs).describe("Parts with coordinates and properties"),
  cuts: pt(Ro).optional().describe("Cut instructions"),
  offcuts: pt(qo).optional().describe("Remaining offcut pieces"),
  unusableParts: pt(Cs).optional().describe("Parts that could not be placed"),
  // Complete metadata (ALL internal analysis fields)
  metadata: Bo.describe("Complete analysis and metrics")
});
xt({
  saw: ta.describe("Saw configuration"),
  stock: pt(Gn).describe("Stock items"),
  parts: pt(na).describe("Parts to cut"),
  groups: pt(Go).optional().describe("User-defined part groups with XY positions"),
  webhook: qe().url().optional().describe("Webhook URL for async result delivery")
});
xt({
  error: qe().describe("Error message"),
  details: $s().optional().describe("Detailed error information (Zod validation errors, etc.)"),
  version: Fr("V3").describe("API version"),
  help: qe().optional().describe("Helpful migration guidance"),
  example: $s().optional().describe("Example of correct format"),
  docs: qe().url().optional().describe("Link to V3 documentation")
});
function bu(e) {
  if (!e) return null;
  const {
    fitsAll: n,
    fitsAny: t,
    largestShape: a,
    smallestShape: i,
    ...l
  } = e;
  return Jt(l);
}
function yu(e) {
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
    analysis: bu(e.analysis),
    stack: e.stack?.number ?? 1,
    customData: Jt(e.customData)
  } : null;
}
function ku(e, n) {
  if (!e) return null;
  let t = null;
  const a = hu(e.stock);
  if (a && n) {
    const l = n.get(a);
    l && (t = { ...l });
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
    rot: vu(e),
    added: e.added ?? !1,
    notes: e.notes ?? "",
    code: e.code,
    stock: t,
    trim: Jt(e.trim),
    extras: Qa(e.extras),
    customData: Jt(e.customData)
  };
  return e.machining && (i.machining = hl(e.machining)), i;
}
function wu(e) {
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
    extras: Qa(e.extras),
    customData: Jt(e.customData)
  };
  return e.machining && (n.machining = hl(e.machining)), e.issues && Array.isArray(e.issues) && e.issues.length > 0 ? n.issues = e.issues.map((t) => ({
    message: ll(t.message) || t.message,
    type: t.type,
    category: t.category,
    field: t.field
  })) : n.issues = [], n;
}
function Su(e) {
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
function xu(e) {
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
function Pu(e) {
  const n = e.stockList || e.stock || [], t = /* @__PURE__ */ new Map();
  for (const p of n) {
    const b = { id: p.id || "" };
    p.code && (b.code = p.code), p.id && t.set(p.id, b), p.autoId && p.autoId !== p.id && t.set(p.autoId, b);
  }
  const a = n.map(yu), i = (e.shapeList || e.parts || []).map((p) => ku(p, t)), l = (e.unusableShapes || []).map(wu), u = (e.cutList || e.cuts || []).map(Su), r = (e.offcuts || []).map(xu);
  return {
    jobId: e.jobId,
    saw: Jt(e.saw),
    stock: a,
    parts: i,
    cuts: u,
    offcuts: r,
    unusableParts: l,
    metadata: Jt(e.metadata)
  };
}
class On extends Error {
  constructor(n, t) {
    super(n), this.code = t, this.name = "FormulaError";
  }
}
class ii {
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
    const [l, u] = i.map((r) => this.evaluate(r, t));
    return [">", "<", ">=", "<=", "==", "!="].includes(a) ? this.evaluateComparison(a, l, u) : this.operations[a](l, u);
  }
  /**
   * Resolve nested variable access via dot-notation
   * e.g., "extras.banding.sides.l1" -> variables.extras.banding.sides.l1
   */
  resolveNestedVariable(n, t) {
    const a = n.split(".");
    let i = t;
    for (const l of a) {
      if (i == null)
        return;
      if (typeof i != "object" || !(l in i)) {
        if (n in t)
          return t[n];
        throw new Error(`Undefined variable: ${n}`);
      }
      i = i[l];
    }
    return i;
  }
  // Update the operations object to use the FormulaOperation type
  operations = {
    add: (n, t) => n + t,
    subtract: (n, t) => n - t,
    multiply: (n, t) => n * t,
    divide: (n, t) => {
      if (t === 0) throw new On("Division by zero", "DIVISION_BY_ZERO");
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
      const l = /* @__PURE__ */ new Set(["width", "depth", "height", "quantity"]);
      for (const u of l)
        n.includes(u) && t.add(`input.${u}`);
    }
    return t;
  }
  buildFormulaGraph(n, t) {
    const a = {
      nodes: /* @__PURE__ */ new Map(),
      edges: /* @__PURE__ */ new Map()
    }, i = (l, u) => {
      const r = `${n}.${l}`;
      a.nodes.set(r, {
        panelKey: n,
        attribute: l,
        formula: u
      }), a.edges.set(r, this.isFormula(u) ? this.extractDependencies(this.stripFormulaPrefix(u.toString())) : /* @__PURE__ */ new Set());
    };
    return i("l", t.l), i("w", t.w), i("t", t.t), i("q", t.q), a;
  }
  resolveFormulas(n, t, a, i = {}) {
    const l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Set(), r = (f) => {
      if (l.has(f))
        return l.get(f);
      const [p, b] = f.split(".");
      if (!n.nodes.has(f)) {
        const J = i[p];
        if (J)
          return b === "q" ? J.q : J[b];
        throw new Error(`Node not found: ${f}`);
      }
      if (u.has(f))
        throw new Error(`Circular dependency detected at ${f}`);
      const P = n.nodes.get(f);
      if (typeof P.formula == "number")
        return l.set(f, P.formula), P.formula;
      u.add(f);
      const L = n.edges.get(f) || /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map();
      for (const J of L)
        if (J.startsWith("input.")) {
          const ue = J.split(".")[1];
          h.set(J, a[ue]);
        } else
          h.set(J, r(J));
      const A = this.evaluateFormulaWithDeps(P.formula, h, a);
      return l.set(f, A), u.delete(f), A;
    };
    for (const f of n.nodes.keys())
      r(f);
    return Object.fromEntries(l);
  }
  evaluateFormulaWithDeps(n, t, a, i) {
    if (!this.isFormula(n)) return n;
    let l = this.stripFormulaPrefix(n.toString());
    return l = l.replace(
      /inputs\.(\w+)/g,
      (u, r) => a[r]?.toString() || "0"
    ), l = l.replace(
      /panels\.(\w+)\.(\w+)/g,
      (u, r, f) => {
        if (r === i?.panelKey && i[f] !== void 0)
          return i[f].toString();
        if (t.has(`${r}.${f}`))
          return t.get(`${r}.${f}`).toString();
        throw new Error(`Undefined variable in formula: ${u}`);
      }
    ), this.evaluate(this.parse(l), a);
  }
  calculatePanels(n) {
    if (!this.spec?.panels) return {};
    const t = {};
    for (const [a, i] of Object.entries(this.spec.panels)) {
      const l = this.buildFormulaGraph(a, i), u = this.resolveFormulas(l, i, n, t), r = {
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
      }), l = i.match(/panels\.(\w+)\.(l|w|t|q)/);
      if (l) {
        const [, u, r] = l;
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
    for (let l = 0; l < n.length; l++) {
      const u = n[l];
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
      const l = a.pop();
      if (l === "(" || l === ")")
        throw new Error("Mismatched parentheses");
      t.push(l);
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
        const i = t.pop(), l = t.pop(), u = t.pop();
        t.push({
          operation: "ternary",
          condition: u,
          trueExpr: l,
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
        const i = t.pop(), l = t.pop();
        t.push({
          operation: this.getOperation(a.toString()),
          operands: [l, i]
        });
      }
    }
    if (t.length !== 1)
      throw new Error("Invalid expression: too many operands");
    return t[0];
  }
  calculateHardware(n) {
    return this.spec?.hardware ? Object.entries(this.spec.hardware).reduce((t, [a, i]) => {
      const l = this.evaluateValue(i.q, n), u = this.evaluateValue(i.cost, n);
      return t[a] = {
        name: i.name,
        q: Math.ceil(l),
        totalCost: Math.ceil(l) * u
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
    if (!this.spec?.inputs) throw new On("No input specifications defined", "NO_INPUTS");
    for (const [t, a] of Object.entries(this.spec.inputs)) {
      const i = n[t];
      if (i === void 0)
        throw new On(`Missing required input: ${t}`, "MISSING_INPUT");
      if (i < a.min || i > a.max)
        throw new On(`Input ${t} value ${i} out of range [min: ${a.min}, max: ${a.max}]`, "INPUT_OUT_OF_RANGE");
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
      throw new On("No input specifications defined", "NO_INPUTS");
    const t = Object.keys(this.spec.inputs);
    if (n.length !== t.length)
      throw new On(`Expected ${t.length} fields, got ${n.length}`, "INVALID_FIELD_COUNT");
    let a = 0;
    for (const i of n) {
      const l = t[a], u = this.spec.inputs[l];
      if (i.value === null || i.value === void 0)
        throw new On(`Missing value for field ${a}`, "MISSING_FIELD_VALUE");
      if (!!!u.optionsFrom && typeof u.min == "number" && typeof u.max == "number" && (i.value < u.min || i.value > u.max))
        throw new On(`Field ${a} value ${i.value} out of range [min: ${u.min}, max: ${u.max}]`, "FIELD_OUT_OF_RANGE");
      a++;
    }
  }
  fieldsToInputs(n) {
    const t = Object.keys(this.spec?.inputs || {});
    return n.reduce((a, i, l) => {
      const u = t[l];
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
      let l;
      typeof i == "number" ? l = i : typeof i == "boolean" ? l = i ? 1 : 0 : l = 0, n[a] = { value: l };
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
const Cu = new ii({});
function Ou(e) {
  const n = e.trim();
  return n.startsWith("=") ? n.substring(1).trim() : n;
}
function Qi(e, n) {
  const t = Ou(e);
  if (!t) return null;
  try {
    const a = Cu.evaluateExpression(t, n), i = Number(a);
    return !Number.isFinite(i) || i < 0 ? null : i;
  } catch (a) {
    return console.error("[extras-formula] evaluation failed", { formula: e, err: a }), null;
  }
}
function Iu(e, n) {
  return Qi(n, e);
}
function Lu(e, n) {
  return Qi(n, e);
}
function js(e, n) {
  return Qi(n, e);
}
function Fu(e) {
  let n = e;
  for (let t = 0; t < 16 && n; t++) {
    if (n instanceof ol) return n;
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
function Yi(e) {
  const n = e.shape ?? {};
  return Object.entries(n).filter(([, t]) => Fu(t) instanceof ol).map(([t]) => t);
}
function ia(e) {
  const t = (e.split(".").pop() ?? e).replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
}
const Eu = {
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
}, Au = [
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
], $u = [
  "totalBandingLength",
  // the headline one for banding tiering
  "totalPartsProduced",
  "totalStockCost",
  "totalStockArea",
  "totalPartArea"
];
Yi(Sa);
function Nu(e, n) {
  const t = Eu[e];
  return {
    name: e,
    label: t?.label ?? ia(e),
    description: t?.description,
    group: t?.group ?? n
  };
}
const Tu = Au.map((e) => Nu(e, "Edge")), Mu = $u.map((e) => ({
  name: `order.${e}`,
  label: ia(e),
  group: "Order"
})), Vu = [...Tu, ...Mu], _u = Vu.map((e) => e.name), Du = {
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
}, ju = [
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
], Bu = [
  "totalFinishArea",
  "totalPartsProduced",
  "totalStockCost",
  "totalStockArea",
  "totalPartArea"
];
Yi(Sa);
function qu(e, n) {
  const t = Du[e];
  return {
    name: e,
    label: t?.label ?? ia(e),
    description: t?.description,
    group: t?.group ?? n
  };
}
const Ru = ju.map((e) => qu(e, "Face")), Uu = Bu.map((e) => ({
  name: `order.${e}`,
  label: ia(e),
  group: "Order"
})), Gu = [...Ru, ...Uu], zu = Gu.map((e) => e.name), Wu = {
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
}, Ku = [
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
], Hu = [
  "totalPlaningArea",
  "totalPartsProduced",
  "totalStockCost",
  "totalStockArea",
  "totalPartArea"
];
Yi(Sa);
function Zu(e, n) {
  const t = Wu[e];
  return {
    name: e,
    label: t?.label ?? ia(e),
    description: t?.description,
    group: t?.group ?? n
  };
}
const Ju = Ku.map((e) => Zu(e, "Feature")), Qu = Hu.map((e) => ({
  name: `order.${e}`,
  label: ia(e),
  group: "Order"
})), Yu = [...Ju, ...Qu], Xu = Yu.map((e) => e.name), en = U(null);
let ec = 0;
function tc(e) {
  const n = e || `action-menu-${++ec}-${Date.now()}`, t = E({
    get: () => en.value === n,
    set: (b) => {
      b ? en.value = n : en.value === n && (en.value = null);
    }
  }), a = () => {
    en.value = n;
  }, i = () => {
    en.value === n && (en.value = null);
  }, l = () => {
    en.value = null;
  }, u = () => {
    t.value = !t.value;
  }, r = E(() => en.value !== null), f = E(() => en.value), p = E(() => en.value === n);
  return {
    // Instance-specific
    id: _t(U(n)),
    isOpen: t,
    open: a,
    close: i,
    toggle: u,
    isThisMenuOpen: p,
    // Global singleton state (shared across all instances)
    closeAll: l,
    isAnyMenuOpen: r,
    currentOpenMenuId: f
  };
}
const nc = { class: "action-menu" }, ac = ["textContent"], ic = {
  key: 0,
  class: "menu-divider"
}, sc = {
  key: 1,
  class: "group-label"
}, lc = /* @__PURE__ */ ft({
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
    const t = e, a = n, { isOpen: i, close: l, toggle: u } = tc(t.menuId), r = U(), f = U(), p = E(() => t.disabled), b = E(() => t.label), P = E(() => t.showLabel), L = E(() => t.icon), { floatingStyles: h } = Hs(r, f, {
      placement: t.placement,
      whileElementsMounted: fl,
      middleware: [
        ul(t.offset),
        cl(),
        dl({ padding: 8 })
      ]
    }), A = (x) => {
      if (!x) return ["fas", "question"];
      if (typeof x == "function" && (x = x(t)), Array.isArray(x))
        return x;
      if (typeof x == "string") {
        const Z = x.split(" ");
        if (Z.length >= 2) {
          const le = Z[0], fe = Z.slice(1).join("-").replace("fa-", "");
          return [le, fe];
        }
        return ["fas", x.replace("fa-", "")];
      }
      return ["fas", "question"];
    }, J = E(() => A(L.value)), ue = (x) => typeof x.active == "function" ? x.active(t) : typeof x.active == "boolean" ? x.active : !1, D = (x) => {
      if (!x.href) return !1;
      try {
        const Z = typeof x.href == "function" ? x.href(t) : x.href;
        return new URL(Z, window.location.origin).origin !== window.location.origin;
      } catch {
        return !1;
      }
    }, B = (x) => x.href ? "a" : "div", me = (x) => {
      const Z = {};
      if (x.href) {
        const le = typeof x.href == "function" ? x.href(t) : x.href;
        if (Z.href = le, D(x)) {
          const fe = typeof x.target == "function" ? x.target(t) : x.target;
          Z.target = fe || "_blank", Z.rel = x.rel || "noopener noreferrer";
        } else if (x.target) {
          const fe = typeof x.target == "function" ? x.target(t) : x.target;
          Z.target = fe;
        }
        x.rel && (Z.rel = x.rel);
      }
      return x.attrs && Object.assign(Z, x.attrs), Z;
    }, Q = E(() => t.menuItems.map((x) => {
      const Z = { ...x };
      return typeof x.href == "function" && (Z.href = x.href(t)), typeof x.icon == "function" && (Z.icon = x.icon(t)), typeof x.disabled == "function" && (Z.disabled = x.disabled(t)), typeof x.label == "function" && (Z.label = x.label(t)), typeof x.variant == "function" && (Z.variant = x.variant(t)), typeof x.active == "function" && (Z.active = x.active(t)), typeof x.target == "function" && (Z.target = x.target(t)), typeof x.show == "function" && (Z.show = x.show(t)), Z;
    })), v = (x) => {
      x.stopPropagation(), x.preventDefault(), !p.value && u();
    }, N = (x, Z) => {
      if (Z.stopPropagation(), x.disabled && !x.href) {
        Z.preventDefault();
        return;
      }
      if (typeof x.action == "function" && x.action(x) === !1 && x.href) {
        Z.preventDefault();
        return;
      }
      a("action", {
        id: x.id,
        item: x
      }), x.href && t.closeOnLinkClick ? l() : x.href || l();
    }, X = (x) => {
      const Z = [];
      if (x.variant) {
        const fe = typeof x.variant == "function" ? x.variant(t) : x.variant;
        Z.push(`variant-${fe}`);
      }
      if ((typeof x.disabled == "function" ? x.disabled(t) : x.disabled) && !x.href && Z.push("disabled"), ue(x) && Z.push("active"), x.href && Z.push("menu-link"), D(x) && Z.push("external-link"), x.class) {
        const fe = typeof x.class == "function" ? x.class(t) : x.class;
        Z.push(fe);
      }
      return Z.join(" ");
    }, $ = (x) => {
      const Z = x.target;
      i.value && r.value && f.value && !r.value.contains(Z) && !f.value.contains(Z) && l();
    }, G = (x) => {
      x.key === "Escape" && i.value && l();
    };
    return on(() => {
      document.addEventListener("click", $), document.addEventListener("keydown", G);
    }), Xa(() => {
      document.removeEventListener("click", $), document.removeEventListener("keydown", G);
    }), (x, Z) => (C(), M("div", nc, [
      W("div", {
        ref_key: "trigger",
        ref: r,
        onClick: v,
        class: Xe(["actions-btn", { active: F(i), disabled: p.value }])
      }, [
        L.value ? (C(), Ee(F(Ha), {
          key: 0,
          icon: J.value,
          class: "icon"
        }, null, 8, ["icon"])) : ae("", !0),
        P.value ? (C(), M("span", {
          key: 1,
          class: "label",
          textContent: he(b.value)
        }, null, 8, ac)) : ae("", !0)
      ], 2),
      (C(), Ee(ei, { to: "body" }, [
        F(i) && !p.value ? (C(), M("div", {
          key: 0,
          ref_key: "floating",
          ref: f,
          style: Ht(F(h)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: Z[0] || (Z[0] = Fn(() => {
          }, ["stop"]))
        }, [
          (C(!0), M(kt, null, Rt(Q.value, (le, fe) => (C(), M(kt, { key: fe }, [
            le.type === "divider" ? (C(), M("div", ic)) : le.type === "group" ? (C(), M("div", sc, he(le.label), 1)) : le.show !== !1 ? (C(), Ee(Fo(B(le)), hn({
              key: 2,
              ref_for: !0
            }, me(le), {
              onClick: (oe) => N(le, oe),
              id: le.id,
              class: ["menu-item", X(le)],
              disabled: le.disabled && !le.href
            }), {
              default: tn(() => [
                le.icon || ue(le) ? (C(), Ee(F(Ha), {
                  key: 0,
                  icon: ue(le) ? ["fass", "check"] : A(le.icon)
                }, null, 8, ["icon"])) : ae("", !0),
                W("span", null, he(le.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : ae("", !0)
          ], 64))), 128))
        ], 4)) : ae("", !0),
        F(i) && !p.value ? (C(), M("div", {
          key: 1,
          class: "backdrop",
          onClick: Z[1] || (Z[1] = //@ts-ignore
          (...le) => F(l) && F(l)(...le))
        })) : ae("", !0)
      ]))
    ]));
  }
}), oc = {
  key: 0,
  class: "extras-price-display"
}, rc = { class: "extras-price-rate" }, uc = {
  key: 0,
  class: "extras-price-label"
}, cc = {
  key: 1,
  class: "extras-price-detail"
}, dc = /* @__PURE__ */ ft({
  __name: "ExtrasPriceDisplay",
  props: {
    pricePerUnit: { default: void 0 },
    quantity: { default: void 0 },
    quantityUnit: { default: "m" },
    priceLabel: { default: "" },
    formatPrice: { type: Function, default: void 0 }
  },
  setup(e) {
    const n = e, t = (a) => n.formatPrice ? n.formatPrice(a) : a.toFixed(2);
    return (a, i) => e.pricePerUnit !== void 0 ? (C(), M("span", oc, [
      W("strong", rc, he(t(e.pricePerUnit)), 1),
      e.priceLabel ? (C(), M("span", uc, he(e.priceLabel), 1)) : ae("", !0),
      e.quantity !== void 0 && e.quantity > 0 ? (C(), M("span", cc, [
        qt(" × " + he(e.quantity.toFixed(2)) + he(e.quantityUnit ? " " + e.quantityUnit : "") + " = ", 1),
        W("strong", null, he(t(e.pricePerUnit * e.quantity)), 1)
      ])) : ae("", !0)
    ])) : ae("", !0);
  }
}), fc = /* @__PURE__ */ Qt(dc, [["__scopeId", "data-v-2b730358"]]);
function Xi(e) {
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
function Zm(e, n) {
  const t = Xi(e);
  return t ? (0.299 * t.r + 0.587 * t.g + 0.114 * t.b) / 255 > 0.55 ? "#000000" : "#ffffff" : "#000000";
}
function Bs(e, n = 30, t = 75) {
  const a = Xi(e);
  if (!a) return e;
  const i = mc(a.r, a.g, a.b);
  if (i.l >= n && i.l <= t && i.s >= 25) return e;
  const u = Math.min(t, Math.max(n, i.l)), r = i.s < 25 ? 60 : i.s, [f, p, b] = gc(i.h, r, u);
  return "#" + [f, p, b].map((P) => P.toString(16).padStart(2, "0")).join("");
}
function Jm(e) {
  const n = pc(e);
  return n === null ? "white" : n > 0.55 ? "#cc1f8c" : "white";
}
function pc(e) {
  const n = Xi(e);
  return n ? (0.299 * n.r + 0.587 * n.g + 0.114 * n.b) / 255 : null;
}
function mc(e, n, t) {
  const a = e / 255, i = n / 255, l = t / 255, u = Math.max(a, i, l), r = Math.min(a, i, l), f = (u + r) / 2;
  let p = 0, b = 0;
  if (u !== r) {
    const P = u - r;
    switch (b = f > 0.5 ? P / (2 - u - r) : P / (u + r), u) {
      case a:
        p = (i - l) / P + (i < l ? 6 : 0);
        break;
      case i:
        p = (l - a) / P + 2;
        break;
      case l:
        p = (a - i) / P + 4;
        break;
    }
    p *= 60;
  }
  return { h: p, s: b * 100, l: f * 100 };
}
function gc(e, n, t) {
  n /= 100, t /= 100;
  const a = (1 - Math.abs(2 * t - 1)) * n, i = a * (1 - Math.abs(e / 60 % 2 - 1)), l = t - a / 2;
  let u = 0, r = 0, f = 0;
  return e >= 0 && e < 60 ? (u = a, r = i, f = 0) : e >= 60 && e < 120 ? (u = i, r = a, f = 0) : e >= 120 && e < 180 ? (u = 0, r = a, f = i) : e >= 180 && e < 240 ? (u = 0, r = i, f = a) : e >= 240 && e < 300 ? (u = i, r = 0, f = a) : e >= 300 && e < 360 && (u = a, r = 0, f = i), [
    Math.round((u + l) * 255),
    Math.round((r + l) * 255),
    Math.round((f + l) * 255)
  ];
}
const qs = (e, n, t) => {
  if (n === "unitDependent")
    if (t === "fraction") {
      if (/\/0$/.test(e))
        return {
          value: e,
          valid: !1,
          message: "division_by_zero"
        };
      const a = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(e), i = al(e);
      return {
        value: e,
        valid: a || i
      };
    } else {
      const i = /^-?\d*\.?\d*$/.test(e);
      if (i && e !== "" && e !== "-" && e !== "." && !e.endsWith(".")) {
        const l = parseFloat(e);
        if (!isNaN(l))
          return {
            value: l,
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
      const l = parseInt(e, 10);
      if (!isNaN(l))
        return {
          value: l,
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
      const l = parseFloat(e);
      if (!isNaN(l))
        return {
          value: l,
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
function hc({
  props: e,
  emit: n,
  isMounted: t
}) {
  const a = U({
    isTyping: !1,
    isMouseDown: !1,
    isComposing: !1,
    lastValidValue: String(e.value ?? "")
  }), i = (r, f = !1) => {
    if (r == null || r === "") {
      const b = e.required && !e.disableRequiredValidation;
      return e.type === "string" ? b ? { value: null, valid: !1, message: "field_required" } : { value: r === null ? null : "", valid: !0 } : zo(r, "decimal", b);
    }
    const p = String(r);
    switch (e.type) {
      case "string":
        return { value: p, valid: !0 };
      case "unitDependent":
        if (f)
          return qs(p, e.type, e.numberFormat);
        try {
          const b = pe({
            v: r,
            nf: e.numberFormat,
            dp: e.decimalPlaces,
            fr: e.fractionRoundTo
          });
          if (typeof b == "number") {
            let P = b, L = !0, h;
            return typeof e.min == "number" && P < e.min && (P = e.min, L = !1, h = "below_min"), typeof e.max == "number" && P > e.max && (P = e.max, L = !1, h = "above_max"), { value: P, valid: L, message: h };
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
        if (f)
          return qs(p, e.type);
        try {
          const P = pe({
            v: r,
            nf: "decimal"
          });
          if (P === null)
            return e.required && !e.disableRequiredValidation ? { value: null, valid: !1, message: "errors.validation.field.required" } : { value: null, valid: !0 };
          let L = P;
          if (e.type === "integer" && (L = Math.round(L)), e.allowZero === !1 && L === 0)
            return {
              value: L,
              valid: !1,
              message: "zero_not_allowed"
            };
          let h = !0, A;
          return typeof e.min == "number" && L < e.min && (L = e.min, h = !1, A = "below_min"), typeof e.max == "number" && L > e.max && (L = e.max, h = !1, A = "above_max"), { value: L, valid: h, message: A };
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
  }, l = (r, f = !1) => f && e.type === "unitDependent" && e.numberFormat === "fraction" ? !1 : f && (e.type === "integer" || e.type === "float" || e.type === "unitDependent" && e.numberFormat === "decimal") ? typeof r.value == "number" && r.valid : !!(r.valid || r.message === "zero_not_allowed" || r.message === "below_min" || r.message === "above_max" || r.message === "errors.validation.field.required" && !e.disableRequiredValidation);
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
        const f = r.target;
        if (a.value.isMouseDown) {
          const b = i(f.value, !1);
          l(b, !1) && (n("update:value", b.value), n("validation", b, e.id)), a.value.isMouseDown = !1;
          return;
        }
        a.value.isTyping = !0;
        const p = i(f.value, !0);
        n("validation", p, e.id), n("input", f.value), l(p, !0) && n("update:value", p.value);
      },
      handleBlur: (r) => {
        if (!t.value) return;
        a.value.isTyping = !1;
        const f = r.target, p = i(f.value, !1);
        n("validation", p, e.id), l(p) && (n("update:value", p.value), a.value.lastValidValue = String(p.value ?? "")), n("blur", r);
      },
      handleFocus: (r) => {
        t.value && (a.value.isTyping = !0, n("focus", r));
      },
      handleKeydown: (r) => {
        if (t.value && !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(r.key)) {
          if (!["Backspace", "Delete", "Tab", "Enter", "Escape"].includes(r.key))
            if (e.type === "unitDependent" && e.numberFormat === "fraction") {
              const f = r.target, p = f.value, b = f.selectionStart || 0, P = p.substring(0, b);
              if (r.key === "/" && p.includes("/")) {
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
            const f = r.target, p = i(f.value, !1);
            n("validation", p, e.id), l(p) && (n("update:value", p.value), a.value.lastValidValue = String(p.value ?? "")), n("enter", p);
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
        const f = r.target, p = i(f.value, !1);
        n("validation", p, e.id), l(p) && (n("update:value", p.value), a.value.lastValidValue = String(p.value ?? ""));
      },
      handlePaste: (r) => {
        if (!t.value) return;
        const f = r.clipboardData?.getData("text")?.trim() || "";
        if (e.type === "unitDependent" && e.numberFormat === "fraction") {
          const p = f.replace(/[""'']/g, "").replace(/\s+/g, " ");
          if (!al(p)) {
            r.preventDefault(), n("validation", {
              value: p,
              valid: !1,
              message: `Pasted text "${f}" is not a valid fraction format`
            }, e.id);
            return;
          }
          if (p !== f) {
            r.preventDefault();
            const b = r.target;
            b.value = p;
            const P = i(p, !0);
            n("validation", P, e.id), n("input", p);
          }
        }
        n("paste", r);
      }
    },
    processValue: i
  };
}
function vc({
  props: e,
  emit: n,
  isMounted: t
}) {
  const a = U({
    isTyping: !1,
    isComposing: !1,
    lastValidValue: String(e.value ?? "")
  }), i = (l) => {
    if (!e?.output || e.output === "string")
      return {
        value: l,
        valid: !0
      };
    if (e.options && e.options.length > 0) {
      let u = l;
      return e.numberFormat && (e.numberFormat === "fraction" ? u = String(l) : u = Number(l)), e.options.some((f) => f.value === u) ? {
        value: u,
        valid: !0
      } : {
        value: u,
        valid: !1,
        message: "invalid_option"
      };
    }
    return {
      value: l,
      valid: !0
    };
  };
  return {
    state: a,
    processValue: i,
    handleSelectChange: (l) => {
      if (!t.value) return;
      const u = l.target;
      if (e.multiEdit && u.value === " ") {
        n("update:value", null);
        return;
      }
      const r = i(u.value);
      n("validation", r, e.id), r.valid && n("update:value", r.value);
    }
  };
}
function bc({
  props: e,
  emit: n,
  isMounted: t
}) {
  return {
    handleCheckboxChange: (a) => {
      if (!t.value) return;
      const l = a.target.checked ? e.trueValue : e.falseValue;
      if (l === void 0) {
        console.warn("Checkbox true/false values not properly configured");
        return;
      }
      n("update:value", l);
    },
    handleFocus: (a) => {
      t.value && n("focus", a);
    },
    handleBlur: (a) => {
      t.value && n("blur", a);
    }
  };
}
const yc = ["id", "name", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], kc = /* @__PURE__ */ ft({
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
    const t = e, a = n, i = U(!0), l = U(null), u = E(() => t.value === t.trueValue), {
      handleCheckboxChange: r,
      handleFocus: f,
      handleBlur: p
    } = bc({
      props: t,
      emit: a,
      isMounted: i
    });
    return (b, P) => (C(), M("input", {
      id: t.id,
      name: t.name || t.id,
      ref_key: "inputRef",
      ref: l,
      type: "checkbox",
      checked: u.value,
      disabled: t.readonly || t.disabled,
      required: t.required,
      "aria-label": t.ariaLabel,
      "aria-invalid": !!t.issue,
      "aria-describedby": t.errorId,
      onChange: P[0] || (P[0] = //@ts-ignore
      (...L) => F(r) && F(r)(...L)),
      onFocus: P[1] || (P[1] = //@ts-ignore
      (...L) => F(f) && F(f)(...L)),
      onBlur: P[2] || (P[2] = //@ts-ignore
      (...L) => F(p) && F(p)(...L))
    }, null, 40, yc));
  }
}), wc = ["for"], ya = /* @__PURE__ */ ft({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(e) {
    return (n, t) => (C(), M("label", {
      for: e.id,
      class: "input-label"
    }, [
      Zt(n.$slots, "default", {}, () => [
        qt(he(e.label), 1)
      ])
    ], 8, wc));
  }
}), za = /* @__PURE__ */ new Set();
function Sc(e) {
  for (const n of za)
    n !== e && n();
}
function vl(e, n, t = {}, a) {
  const i = U(null);
  if (a) {
    const b = () => {
      a.value && (a.value = !1);
    };
    at(a, (P) => {
      P ? (Sc(b), za.add(b)) : za.delete(b);
    }, { flush: "sync" }), ti(() => {
      za.delete(b);
    });
  }
  on(() => {
    const b = e.value;
    i.value = b?.closest("dialog") ?? b?.closest(".smartcut-content") ?? document.body;
  });
  const l = [
    ul(t.offsetPx ?? 4),
    cl({ padding: t.padding ?? 8 }),
    dl({ padding: t.padding ?? 8 })
  ];
  t.sizeApply && l.push(_r({
    padding: t.padding ?? 8,
    apply: t.sizeApply
  })), t.extraMiddleware && l.push(...t.extraMiddleware);
  const { floatingStyles: u, isPositioned: r } = Hs(e, n, {
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
    whileElementsMounted: (b, P, L) => fl(b, P, L, { animationFrame: !0 }),
    // `transform: true` (the default) places the dropdown via
    // `transform: translate()`. We pair it with a short CSS transition
    // on transform in `useFloatingDropdownStyle` below so per-frame
    // position updates ease across small jumps instead of stuttering.
    transform: !0,
    middleware: l
  }), f = E(() => ({
    ...u.value,
    visibility: r.value ? "visible" : "hidden",
    opacity: r.value ? 1 : 0,
    transition: "opacity 80ms ease-out"
  }));
  function p() {
    if (!e.value || !n.value) return;
    const b = getComputedStyle(e.value), P = n.value;
    P.style.font = b.font, P.style.color = b.color;
  }
  return {
    floatingStyles: f,
    teleportTarget: i,
    syncFloatingFont: p
  };
}
const xc = ["id", "disabled", "aria-label"], Pc = { class: "multiselect__text" }, Cc = { class: "multiselect__list" }, Oc = ["checked", "disabled", "onChange"], Ic = { class: "multiselect__option-label" }, Lc = {
  key: 0,
  class: "multiselect__no-results"
}, Fc = /* @__PURE__ */ ft({
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
    const t = e, a = n, i = U(!1), l = U(null), u = U(), r = U(), f = U(null), p = U(""), { floatingStyles: b, teleportTarget: P, syncFloatingFont: L } = vl(
      u,
      r,
      {
        sizeApply({ rects: Q, availableWidth: v, availableHeight: N, elements: X }) {
          const $ = Q.reference.width, G = Math.min(v, Math.max($, 400));
          Object.assign(X.floating.style, {
            maxHeight: `${Math.max(200, N)}px`,
            minWidth: `${$}px`,
            maxWidth: `${G}px`
          });
        }
      },
      i
    ), h = E(() => {
      const Q = t.value;
      return Q ? Array.isArray(Q) ? new Set(Q.map(String)) : new Set(String(Q).split(",").filter(Boolean)) : /* @__PURE__ */ new Set();
    }), A = E(() => t.options.map((Q) => ({
      value: Q.value,
      label: Q.label ?? String(Q.value),
      hidden: Q.hidden ?? !1,
      disabled: Q.disabled ?? !1
    }))), J = E(() => {
      if (!p.value) return A.value;
      const Q = p.value.toLowerCase();
      return A.value.filter(
        (v) => (v.label ?? String(v.value)).toLowerCase().includes(Q)
      );
    }), ue = E(() => {
      const Q = h.value.size;
      if (Q === 0) return t.placeholder || "All";
      if (Q === 1) {
        const v = [...h.value][0];
        return A.value.find((X) => String(X.value) === v)?.label || v;
      }
      return `${Q} selected`;
    });
    function D() {
      t.disabled || (i.value = !i.value, i.value && (p.value = "", jt(() => {
        L(), t.searchable && f.value?.focus();
      })));
    }
    function B(Q) {
      const v = String(Q), N = new Set(h.value);
      N.has(v) ? N.delete(v) : N.add(v), a("update:value", [...N]);
    }
    function me(Q) {
      const v = Q.target;
      l.value?.contains(v) || r.value?.contains(v) || (i.value = !1);
    }
    return on(() => document.addEventListener("click", me)), ti(() => document.removeEventListener("click", me)), (Q, v) => (C(), M("div", {
      class: "multiselect",
      ref_key: "rootRef",
      ref: l
    }, [
      W("button", {
        ref_key: "triggerRef",
        ref: u,
        type: "button",
        class: "multiselect__trigger",
        id: t.id,
        disabled: t.disabled,
        "aria-label": t.ariaLabel,
        onClick: D
      }, [
        W("span", Pc, he(ue.value), 1)
      ], 8, xc),
      (C(), Ee(ei, {
        to: F(P),
        disabled: !F(P)
      }, [
        i.value ? (C(), M("div", {
          key: 0,
          ref_key: "floatingRef",
          ref: r,
          class: "multiselect__dropdown",
          style: Ht(F(b))
        }, [
          t.searchable ? ni((C(), M("input", {
            key: 0,
            ref_key: "searchRef",
            ref: f,
            "onUpdate:modelValue": v[0] || (v[0] = (N) => p.value = N),
            type: "text",
            class: "multiselect__search",
            placeholder: "Search...",
            onClick: v[1] || (v[1] = Fn(() => {
            }, ["stop"]))
          }, null, 512)), [
            [Zs, p.value]
          ]) : ae("", !0),
          W("div", Cc, [
            (C(!0), M(kt, null, Rt(J.value, (N) => (C(), M("label", {
              key: N.value,
              class: Xe(["multiselect__option", { "multiselect__option--zero": N.hidden }])
            }, [
              W("input", {
                type: "checkbox",
                checked: h.value.has(String(N.value)),
                disabled: N.disabled,
                onChange: (X) => B(N.value)
              }, null, 40, Oc),
              W("span", Ic, he(N.label), 1)
            ], 2))), 128)),
            t.searchable && J.value.length === 0 ? (C(), M("div", Lc, " No matches ")) : ae("", !0)
          ])
        ], 4)) : ae("", !0)
      ], 8, ["to", "disabled"]))
    ], 512));
  }
}), Ec = /* @__PURE__ */ Qt(Fc, [["__scopeId", "data-v-50e58ba3"]]), Ac = ["id", "name", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], $c = ["disabled", "selected"], Nc = {
  key: 0,
  value: " "
}, Tc = ["hidden", "value", "disabled"], Mc = /* @__PURE__ */ ft({
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
    const t = e, a = n, i = U(!0), l = U(null), u = E(() => t.options.map((f) => ({
      value: f.value,
      label: f.label?.toUpperCase() ?? f.value?.toString()?.toUpperCase(),
      hidden: f.hidden ?? !1,
      disabled: f.disabled ?? !1
    }))), {
      handleSelectChange: r
    } = vc({
      props: t,
      emit: a,
      isMounted: i
    });
    return (f, p) => (C(), M("select", hn(f.$attrs, {
      id: t.id,
      name: t.name || t.id,
      ref_key: "inputRef",
      ref: l,
      value: t.value,
      disabled: t.readonly || t.disabled,
      required: t.required,
      "aria-label": t.ariaLabel,
      "aria-invalid": !!t.issue,
      "aria-describedby": t.errorId,
      onChange: p[0] || (p[0] = //@ts-ignore
      (...b) => F(r) && F(r)(...b))
    }), [
      W("option", {
        value: "",
        disabled: t.selectFirstOptionDisabled,
        selected: !t.value
      }, he(t.text?.select?.toUpperCase() ?? "SELECT"), 9, $c),
      t.multiEdit ? (C(), M("option", Nc, he(t.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : ae("", !0),
      (C(!0), M(kt, null, Rt(u.value, (b) => (C(), M("option", {
        key: b.value,
        hidden: b.hidden,
        value: b.value,
        disabled: b.disabled
      }, he(b.label), 9, Tc))), 128))
    ], 16, Ac));
  }
}), Vc = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "autocomplete", "aria-label", "aria-invalid", "aria-describedby"], Wa = /* @__PURE__ */ ft({
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
    const t = e, a = n, i = U(!0), l = U(null), {
      handleInput: u,
      handleMouseDown: r,
      handleMouseUp: f,
      handleFocus: p,
      handleBlur: b,
      handleKeydown: P,
      handleCompositionStart: L,
      handleCompositionEnd: h,
      handlePaste: A
    } = hc({
      props: t,
      emit: a,
      isMounted: i
    }), J = (ue) => {
      const D = ue.getBoundingClientRect(), B = window.getComputedStyle(ue);
      return D.width > 0 && D.height > 0 && B.display !== "none" && B.visibility !== "hidden";
    };
    return on(() => {
      dt(t.default) && (t.value === void 0 || t.value === null) && a("update:value", t.default), t.focus && l.value && J(l.value) && jt(() => l.value.focus());
    }), Xa(() => {
      i.value = !1;
    }), (ue, D) => (C(), M("input", hn(ue.$attrs, {
      id: t.id,
      name: t.name || t.id,
      ref_key: "inputRef",
      ref: l,
      value: t.value,
      inputmode: t.inputMode,
      type: t.inputType,
      placeholder: t.placeholder,
      disabled: t.disabled,
      default: t.default,
      readonly: t.readonly,
      min: t.min,
      max: t.max,
      autocomplete: t.autocomplete,
      "aria-label": t.ariaLabel,
      "aria-invalid": !!t.issue,
      "aria-describedby": t.errorId,
      onInput: D[0] || (D[0] = //@ts-ignore
      (...B) => F(u) && F(u)(...B)),
      onFocus: D[1] || (D[1] = //@ts-ignore
      (...B) => F(p) && F(p)(...B)),
      onBlur: D[2] || (D[2] = //@ts-ignore
      (...B) => F(b) && F(b)(...B)),
      onKeydown: D[3] || (D[3] = //@ts-ignore
      (...B) => F(P) && F(P)(...B)),
      onCompositionstart: D[4] || (D[4] = //@ts-ignore
      (...B) => F(L) && F(L)(...B)),
      onCompositionend: D[5] || (D[5] = //@ts-ignore
      (...B) => F(h) && F(h)(...B)),
      onPaste: D[6] || (D[6] = //@ts-ignore
      (...B) => F(A) && F(A)(...B)),
      onMousedown: D[7] || (D[7] = //@ts-ignore
      (...B) => F(r) && F(r)(...B)),
      onMouseup: D[8] || (D[8] = //@ts-ignore
      (...B) => F(f) && F(f)(...B))
    }), null, 16, Vc));
  }
}), _c = ["data-field-id"], Dc = {
  key: 0,
  class: "input-label-group"
}, jc = {
  key: 1,
  class: "password-input-wrapper"
}, Bc = ["aria-label"], qc = {
  key: 2,
  class: "clearable-input-wrapper"
}, Rc = ["aria-label"], Uc = ["disabled", "selected"], Gc = {
  key: 0,
  value: " "
}, zc = ["hidden", "value", "disabled"], Wc = ["id", "name", "value", "disabled"], Kc = {
  key: 7,
  class: "slider-wrapper"
}, Hc = ["id", "name", "value", "min", "max", "step", "disabled", "readonly"], Zc = ["for"], Jc = {
  key: 8,
  class: "clearable-input-wrapper clearable-input-wrapper--textarea"
}, Qc = ["id", "name", "value", "placeholder", "disabled", "readonly", "required", "rows", "autocomplete"], Yc = ["aria-label"], Xc = ["id", "name", "value", "placeholder", "disabled", "readonly", "required", "rows", "autocomplete"], ed = {
  key: 2,
  class: "help-text"
}, td = /* @__PURE__ */ ft({
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
    const t = n, a = e, i = U(null), l = U(null), u = U(!0), r = U(a.numberFormat), f = U(!1), p = E(() => a.custom ? "custom-" + a.id : a.id), b = E(() => `${p.value}-error`), P = E(() => a.label || a.placeholder), L = E(() => mt(a.type, a.numberFormat, f.value)), h = E(() => _(a.type, a.numberFormat)), A = E(() => typeof a.value == "string" && a.value.length > 0), J = E(() => A.value ? Bs(a.value) : "#ffffff"), ue = (ne) => {
      const ve = ne.target.value;
      t("update:value", Bs(ve));
    }, D = () => {
      t("update:value", null);
    }, B = E(() => {
      const ne = a.value;
      if (typeof ne == "number" && Number.isFinite(ne)) return ne;
      const ve = parseFloat(ne);
      return Number.isFinite(ve) ? ve : typeof a.min == "number" ? a.min : 0;
    }), me = (ne) => {
      const ve = ne.target.value, Ne = parseFloat(ve);
      t("update:value", Number.isFinite(Ne) ? Ne : null);
    }, Q = E(() => ["string", "integer", "float", "unitDependent", "password", "email", "tel"].includes(a.type)), v = E(() => a.value !== null && a.value !== void 0 && a.value !== "");
    function N() {
      const ne = Q.value && ["integer", "float", "unitDependent"].includes(a.type) ? null : "";
      t("update:value", ne);
    }
    const X = E(() => {
      let ne = a.value;
      if (a.multiEdit && (ne === 0 || ne === 1)) return null;
      if (a.type !== "unitDependent" || !ne) return ne;
      try {
        return pe({ v: ne, nf: a.numberFormat });
      } catch {
        return a.numberFormat === "decimal" ? 0 : "0";
      }
    }), $ = E(() => a.options.map((ne) => ({
      value: ne.value,
      label: ne.label || ne.value?.toString(),
      hidden: ne.hidden || !1,
      disabled: ne.disabled || !1
    }))), G = E(() => $.value.map((ne) => {
      const ve = ne.label ? Ie(ne.label) : ne.value?.toString();
      return {
        ...ne,
        // Translate the label key first, then uppercase the translated result
        label: ve?.toUpperCase() || ne.value?.toString().toUpperCase()
      };
    })), x = E(() => ({
      input: !0,
      issue: a.issue || !u.value,
      warning: a.warning,
      required: a.required,
      disabled: a.disabled
    })), Z = E(() => ({
      id: p.value,
      name: a.name,
      value: a.value,
      disabled: a.disabled,
      readonly: a.readonly,
      required: a.required,
      "aria-label": P.value,
      "aria-invalid": !!a.issue,
      "aria-describedby": a.issue ? b.value : void 0
    })), le = E(() => ({
      ...Z.value,
      type: a.type,
      inputMode: h.value,
      inputType: L.value,
      placeholder: a.placeholder,
      allowZero: a.allowZero,
      min: a.min,
      max: a.max,
      focus: a.focus,
      numberFormat: a.numberFormat,
      default: a.default,
      disableRequiredValidation: a.disableRequiredValidation,
      autocomplete: a.autocomplete
    })), fe = E(() => ({
      ...Z.value,
      trueValue: a.trueValue,
      falseValue: a.falseValue
    })), oe = E(() => ({
      ...Z.value,
      options: G.value,
      selectFirstOptionDisabled: a.selectFirstOptionDisabled,
      multiEdit: a.multiEdit,
      numberFormat: a.numberFormat,
      text: a.text,
      output: a.output
    })), Je = E(() => (a.text?.select || "SELECT").toUpperCase()), Ke = E(() => (a.text?.delete || "DELETE").toUpperCase()), Se = (ne) => {
      l.value = ne;
    }, Fe = (ne) => a.label && a.enableLabel && a.labelPosition === ne, mt = (ne, ve, Ne) => {
      switch (ne) {
        case "integer":
        case "float":
          return "number";
        case "unitDependent":
          return ve === "fraction" ? "text" : "number";
        case "password":
          return Ne ? "text" : "password";
        case "email":
          return "email";
        case "tel":
          return "tel";
        default:
          return "text";
      }
    }, _ = (ne, ve) => {
      if (ne === "unitDependent")
        return ve === "fraction" ? "text" : "decimal";
      switch (ne) {
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
    }, ee = (ne) => {
      t("update:value", ne);
    }, be = (ne, ve) => {
      ne.valid === void 0 || ne.valid === !0 ? (u.value = !0, t("validation", i.value, ne)) : ne.valid === !1 && ne.message && (u.value = !1, console.warn(`Field validation error for field ${ve} - ${ne.message}`), t("validation", i.value, ne));
    }, De = () => {
      t("blur");
    };
    return at(() => a.numberFormat, (ne, ve) => {
      if (a.shouldConvertNumberFormat !== !1) {
        if (a.type === "unitDependent" && ne !== ve && a.value !== null && a.value !== void 0 && a.value !== "")
          try {
            const Ne = pe({ v: a.value, nf: ne });
            t("update:value", Ne);
          } catch {
            t("update:value", ne === "decimal" ? 0 : "0");
          }
        r.value = ne;
      }
    }), (ne, ve) => (C(), M("div", {
      ref_key: "fieldRef",
      ref: i,
      class: Xe(["input-wrapper", [x.value, ne.$attrs.class]]),
      "data-field-id": p.value
    }, [
      e.type === "checkbox" ? (C(), M("div", Dc, [
        Fe("first") ? (C(), Ee(ya, {
          key: 0,
          id: p.value,
          label: e.label,
          required: e.required
        }, {
          default: tn(() => [
            Zt(ne.$slots, "label", {}, () => [
              qt(he(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ae("", !0),
        e.type === "checkbox" ? (C(), Ee(kc, hn({
          key: 1,
          ref: Se,
          type: "checkbox"
        }, fe.value, {
          value: e.value,
          "onUpdate:value": ve[0] || (ve[0] = (Ne) => t("update:value", Ne))
        }), null, 16, ["value"])) : ae("", !0),
        Fe("last") ? (C(), Ee(ya, {
          key: 2,
          id: p.value,
          label: e.label,
          required: e.required
        }, {
          default: tn(() => [
            Zt(ne.$slots, "label", {}, () => [
              qt(he(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ae("", !0)
      ])) : (C(), M(kt, { key: 1 }, [
        Fe("first") ? (C(), Ee(ya, {
          key: 0,
          id: p.value,
          label: e.label,
          required: e.required
        }, {
          default: tn(() => [
            Zt(ne.$slots, "label", {}, () => [
              qt(he(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ae("", !0),
        e.type === "password" ? (C(), M("div", jc, [
          it(Wa, hn({ ref: Se }, le.value, {
            name: a.name,
            "input-type": L.value,
            "input-mode": h.value,
            value: X.value,
            "disable-required-validation": e.disableRequiredValidation,
            onValidation: be,
            "onUpdate:value": ee,
            onBlur: De
          }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"]),
          W("button", {
            type: "button",
            class: "password-toggle c-btn--unstyled",
            "aria-label": f.value ? "Hide password" : "Show password",
            onClick: ve[1] || (ve[1] = (Ne) => f.value = !f.value)
          }, he(f.value ? "🙈" : "👁"), 9, Bc)
        ])) : Q.value && e.clearable ? (C(), M("div", qc, [
          it(Wa, hn({ ref: Se }, le.value, {
            name: a.name,
            "input-type": L.value,
            "input-mode": h.value,
            value: X.value,
            "disable-required-validation": e.disableRequiredValidation,
            onValidation: be,
            "onUpdate:value": ee,
            onBlur: De
          }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"]),
          v.value && !e.disabled && !e.readonly ? (C(), M("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--xs c-btn--unstyled field-clear-btn clearable-input__clear",
            "aria-label": F(Ie)("actions.clear"),
            title: "Clear",
            onClick: N
          }, "×", 8, Rc)) : ae("", !0)
        ])) : Q.value ? (C(), Ee(Wa, hn({
          key: 3,
          ref: Se
        }, le.value, {
          name: a.name,
          "input-type": L.value,
          "input-mode": h.value,
          value: X.value,
          "disable-required-validation": e.disableRequiredValidation,
          onValidation: be,
          "onUpdate:value": ee,
          onBlur: De
        }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"])) : e.type === "select" ? (C(), Ee(Mc, hn({
          key: 4,
          ref: Se
        }, oe.value, {
          name: a.name,
          "onUpdate:value": ve[2] || (ve[2] = (Ne) => t("update:value", Ne))
        }), {
          default: tn(() => [
            W("option", {
              value: "",
              disabled: e.selectFirstOptionDisabled,
              selected: !e.value
            }, he(Je.value), 9, Uc),
            e.multiEdit ? (C(), M("option", Gc, he(Ke.value), 1)) : ae("", !0),
            (C(!0), M(kt, null, Rt(G.value, (Ne) => (C(), M("option", {
              key: Ne.value,
              hidden: Ne.hidden,
              value: Ne.value,
              disabled: Ne.disabled
            }, he(Ne.label), 9, zc))), 128))
          ]),
          _: 1
        }, 16, ["name"])) : e.type === "multiselect" ? (C(), Ee(Ec, {
          key: 5,
          ref: Se,
          id: p.value,
          name: a.name,
          value: e.value,
          options: $.value,
          disabled: e.disabled,
          readonly: e.readonly,
          "aria-label": P.value,
          placeholder: e.placeholder,
          searchable: a.searchable,
          "onUpdate:value": ve[3] || (ve[3] = (Ne) => t("update:value", Ne))
        }, null, 8, ["id", "name", "value", "options", "disabled", "readonly", "aria-label", "placeholder", "searchable"])) : e.type === "color" ? (C(), M("input", {
          key: 6,
          id: p.value,
          name: a.name || p.value,
          ref: Se,
          type: "color",
          value: J.value,
          class: Xe({ "color-input--empty": !A.value }),
          disabled: e.disabled,
          onChange: ue,
          onContextmenu: Fn(D, ["prevent"])
        }, null, 42, Wc)) : e.type === "slider" ? (C(), M("div", Kc, [
          W("input", {
            id: p.value,
            name: a.name || p.value,
            ref: Se,
            type: "range",
            class: "slider-input",
            value: B.value,
            min: a.min ?? 0,
            max: a.max ?? 100,
            step: a.step ?? 1,
            disabled: e.disabled,
            readonly: e.readonly,
            onInput: me
          }, null, 40, Hc),
          W("output", {
            class: "slider-output",
            for: p.value
          }, he(B.value), 9, Zc)
        ])) : e.type === "textarea" && e.clearable ? (C(), M("div", Jc, [
          W("textarea", {
            id: p.value,
            name: a.name || p.value,
            ref: Se,
            value: e.value,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            rows: e.rows,
            autocomplete: e.autocomplete,
            onInput: ve[4] || (ve[4] = (Ne) => t("update:value", Ne.target.value)),
            onBlur: De
          }, null, 40, Qc),
          v.value && !e.disabled && !e.readonly ? (C(), M("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--xs c-btn--unstyled field-clear-btn clearable-input__clear",
            "aria-label": F(Ie)("actions.clear"),
            title: "Clear",
            onClick: N
          }, "×", 8, Yc)) : ae("", !0)
        ])) : e.type === "textarea" ? (C(), M("textarea", {
          key: 9,
          id: p.value,
          name: a.name || p.value,
          ref: Se,
          value: e.value,
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: e.readonly,
          required: e.required,
          rows: e.rows,
          autocomplete: e.autocomplete,
          onInput: ve[5] || (ve[5] = (Ne) => t("update:value", Ne.target.value)),
          onBlur: De
        }, null, 40, Xc)) : ae("", !0),
        Fe("last") ? (C(), Ee(ya, {
          key: 10,
          id: p.value,
          label: e.label,
          required: e.required
        }, {
          default: tn(() => [
            Zt(ne.$slots, "label", {}, () => [
              qt(he(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ae("", !0)
      ], 64)),
      e.info ? (C(), M("small", ed, he(e.info), 1)) : ae("", !0),
      Zt(ne.$slots, "default", {}, void 0, !0)
    ], 10, _c));
  }
}), ka = /* @__PURE__ */ Qt(td, [["__scopeId", "data-v-0c816cd2"]]), nd = {
  key: 0,
  class: "loading-spinner__label"
}, ad = /* @__PURE__ */ ft({
  __name: "LoadingSpinner",
  props: {
    size: { default: "medium" },
    label: { default: "" },
    block: { type: Boolean, default: !1 },
    fullPage: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (n, t) => (C(), M("div", {
      class: Xe(["loading-spinner", [
        `loading-spinner--${e.size}`,
        {
          "loading-spinner--block": e.block || e.fullPage,
          "loading-spinner--full-page": e.fullPage
        }
      ]]),
      role: "status",
      "aria-live": "polite"
    }, [
      t[0] || (t[0] = W("span", {
        class: "loading-spinner__circle",
        "aria-hidden": "true"
      }, null, -1)),
      e.label ? (C(), M("span", nd, he(e.label), 1)) : ae("", !0)
    ], 2));
  }
}), bl = /* @__PURE__ */ Qt(ad, [["__scopeId", "data-v-ef6d8370"]]), id = {
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
    },
    ancestors: {
      type: Object,
      default: () => /* @__PURE__ */ new Set()
    }
  },
  data() {
    return {
      expanded: {},
      hasScroll: !1,
      atBottom: !0
    };
  },
  computed: {
    childAncestors() {
      const e = new Set(this.ancestors);
      for (const n of this.data)
        n && typeof n == "object" && e.add(n);
      return e;
    }
  },
  created() {
    this.data.forEach((e, n) => {
      this.expanded[n] = this.root || this.data.length === 1;
    });
  },
  mounted() {
    this.$nextTick(() => this.checkScroll());
  },
  methods: {
    checkScroll() {
      const e = this.$refs.container;
      e && (this.hasScroll = e.scrollHeight > e.clientHeight, this.atBottom = e.scrollTop + e.clientHeight >= e.scrollHeight - 10);
    },
    handleScroll() {
      this.checkScroll();
    },
    toggle(e) {
      this.expanded[e] = !this.expanded[e], this.$nextTick(() => this.checkScroll());
    },
    copyToClipboard(e, n) {
      const t = JSON.stringify({ [n]: e }, null, 2);
      navigator.clipboard.writeText(t);
    },
    getValueType(e) {
      return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
    },
    isObjectOrArray(e) {
      return e && typeof e == "object";
    },
    isSimpleArray(e) {
      return Array.isArray(e) && e.every((n) => !n || typeof n != "object");
    },
    getArrayPaths(e, n) {
      return Array.isArray(e) ? e.map((t, a) => a) : [n];
    },
    formatValue(e) {
      return e === null ? "null" : e === void 0 ? "undefined" : typeof e == "boolean" ? e.toString() : typeof e != "object" ? typeof e == "string" ? `'${e}'` : String(e) : "";
    }
  }
}, sd = {
  key: 0,
  class: "title"
}, ld = ["onClick"], od = { class: "ov-label" }, rd = {
  key: 0,
  class: "ov-count"
}, ud = ["onClick"], cd = { class: "ov-body" }, dd = {
  key: 0,
  class: "ov-row"
}, fd = { class: "ov-key" }, pd = ["onClick"], md = {
  key: 0,
  class: "ov-inline-array"
}, gd = ["onClick"], hd = {
  key: 2,
  class: "ov-circular"
}, vd = {
  key: 3,
  class: "ov-null"
}, bd = { key: 4 };
function yd(e, n, t, a, i, l) {
  const u = zn("ObjectViewer", !0);
  return C(), M("div", {
    ref: "container",
    class: Xe(["smartcut-object-viewer main", { "has-scroll": i.hasScroll, "at-bottom": i.atBottom }]),
    onScroll: n[0] || (n[0] = (...r) => l.handleScroll && l.handleScroll(...r))
  }, [
    t.title ? (C(), M("div", sd, he(t.title), 1)) : ae("", !0),
    (C(!0), M(kt, null, Rt(t.data, (r, f) => (C(), M("div", {
      key: f,
      class: "ov-node"
    }, [
      W("div", {
        class: "ov-header",
        onClick: (p) => l.toggle(f)
      }, [
        (C(), M("svg", {
          class: Xe(["ov-chevron", { "is-open": i.expanded[f] }]),
          width: "10",
          height: "10",
          viewBox: "0 0 10 10"
        }, [...n[1] || (n[1] = [
          W("path", {
            d: "M3 1 L7 5 L3 9",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])], 2)),
        W("span", od, he(t.paths[f] ?? f), 1),
        l.isObjectOrArray(r) ? (C(), M("span", rd, he(Object.keys(r).length), 1)) : ae("", !0),
        W("span", {
          class: "ov-copy",
          title: "Copy as JSON",
          onClick: Fn((p) => l.copyToClipboard(r, t.paths[f] ?? f), ["stop"])
        }, [...n[2] || (n[2] = [
          W("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 16 16",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            W("rect", {
              x: "5",
              y: "5",
              width: "9",
              height: "9",
              rx: "1"
            }),
            W("path", { d: "M3 11 H2 a1 1 0 0 1-1-1 V2 a1 1 0 0 1 1-1 h8 a1 1 0 0 1 1 1 v1" })
          ], -1)
        ])], 8, ud)
      ], 8, ld),
      ni(W("div", cd, [
        l.isObjectOrArray(r) ? (C(!0), M(kt, { key: 1 }, Rt(r, (p, b) => (C(), M("div", {
          key: b,
          class: "ov-row"
        }, [
          W("span", fd, he(b) + ":", 1),
          l.isObjectOrArray(p) && p !== null && !l.isSimpleArray(p) ? (C(), M("span", {
            key: 0,
            class: "ov-copy ov-copy-inline",
            title: "Copy all as JSON",
            onClick: (P) => l.copyToClipboard(p, b)
          }, [...n[3] || (n[3] = [
            W("svg", {
              width: "10",
              height: "10",
              viewBox: "0 0 16 16",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              W("rect", {
                x: "5",
                y: "5",
                width: "9",
                height: "9",
                rx: "1"
              }),
              W("path", { d: "M3 11 H2 a1 1 0 0 1-1-1 V2 a1 1 0 0 1 1-1 h8 a1 1 0 0 1 1 1 v1" })
            ], -1)
          ])], 8, pd)) : ae("", !0),
          W("span", {
            class: Xe(["ov-val", l.getValueType(p)])
          }, [
            l.isSimpleArray(p) ? (C(), M("span", md, [
              qt(" [" + he(p.map((P) => l.formatValue(P)).join(", ")) + "] ", 1),
              W("span", {
                class: "ov-copy ov-copy-inline",
                title: "Copy as JSON",
                onClick: (P) => l.copyToClipboard(p, b)
              }, [...n[4] || (n[4] = [
                W("svg", {
                  width: "10",
                  height: "10",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  W("rect", {
                    x: "5",
                    y: "5",
                    width: "9",
                    height: "9",
                    rx: "1"
                  }),
                  W("path", { d: "M3 11 H2 a1 1 0 0 1-1-1 V2 a1 1 0 0 1 1-1 h8 a1 1 0 0 1 1 1 v1" })
                ], -1)
              ])], 8, gd)
            ])) : l.isObjectOrArray(p) && p !== null && !l.childAncestors.has(p) ? (C(), Ee(u, {
              key: 1,
              data: Array.isArray(p) ? p : [p],
              paths: l.getArrayPaths(p, b),
              root: !1,
              ancestors: l.childAncestors
            }, null, 8, ["data", "paths", "ancestors"])) : l.isObjectOrArray(p) && p !== null ? (C(), M("span", hd, "[Circular]")) : p === null ? (C(), M("span", vd, "null")) : (C(), M("span", bd, he(l.formatValue(p)), 1))
          ], 2)
        ]))), 128)) : (C(), M("div", dd, [
          W("span", {
            class: Xe(["ov-val", l.getValueType(r)])
          }, he(l.formatValue(r)), 3)
        ]))
      ], 512), [
        [Js, i.expanded[f]]
      ])
    ]))), 128))
  ], 34);
}
const yl = /* @__PURE__ */ Qt(id, [["render", yd]]), kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: yl }, Symbol.toStringTag, { value: "Module" })), wd = {
  key: 0,
  class: "action-bar"
}, Sd = { class: "add-custom" }, xd = ["disabled"], Pd = {
  key: 0,
  class: "extras-row"
}, Cd = { class: "c-field-action extras-field-group" }, Od = ["disabled", "title", "onClick"], Id = {
  key: 0,
  class: "price"
}, Ld = {
  key: 0,
  class: "formula-price"
}, Fd = {
  key: 0,
  class: "price-label"
}, Ed = /* @__PURE__ */ ft({
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
    extraName: { default: "" },
    pricePerLength: { default: void 0 },
    catalogueMaxGap: { default: void 0 }
  },
  emits: ["update-all", "set", "custom-name-added", "custom-name-deleted"],
  setup(e, { emit: n }) {
    const t = Wt({
      loader: () => import("./CatalogueBandingExtra-73D-qNr8.js"),
      loadingComponent: () => Ao(bl, { size: "small", label: "Loading banding…" }),
      delay: 200
    }), a = !1, i = e, l = E(() => i.extraType === "banding" && !!i.catalogueKey), u = n, {
      mode: r,
      shouldShowAll: f,
      supportsFaces: p,
      supportsSides: b,
      canDelete: P,
      getLocationLabel: L,
      getInputType: h,
      getInputConfigForLocation: A,
      getSelectOptions: J,
      getPriceDisplay: ue,
      getCalculatedPrice: D,
      shouldShowDeleteButton: B,
      getLocationGroup: me,
      isLocationVisible: Q,
      handleInputChange: v,
      handleDelete: N
    } = Zr({
      shape: Kt(i, "shape"),
      extraType: i.extraType,
      allOptions: Kt(i, "allOptions"),
      labels: i.labels,
      userFriendlyFieldMap: i.userFriendlyFieldMap,
      allowCustomNames: i.allowCustomNames,
      customNames: Kt(i, "customNames"),
      enablePricing: i.enablePricing,
      pricing: i.pricing,
      displayNames: Kt(i, "displayNames"),
      orientationModel: i.orientationModel,
      stockGrain: i.stockGrain,
      getAvailablePricingOptions: i.getAvailablePricingOptions,
      getPrice: i.getPrice,
      formatPrice: i.formatPrice,
      findExtrasPrice: i.findExtrasPrice,
      locations: Kt(i, "locations"),
      locationGroups: Kt(i, "locationGroups")
    }), {
      newCustomName: X,
      canAddCustomName: $,
      isActionMenuDisabled: G,
      customNameActions: x,
      handleAddCustomName: Z,
      handleCustomNameAction: le
    } = Jr({
      extraType: i.extraType,
      customNames: Kt(i, "customNames"),
      usedNames: Kt(i, "usedNames"),
      allowCustomNames: i.allowCustomNames,
      getSelectOptions: J,
      onCustomNameAdded: (re) => u("custom-name-added", i.extraType, re),
      onCustomNameDeleted: (re) => u("custom-name-deleted", i.extraType, re)
    }), {
      renderLocations: fe,
      getInputId: oe,
      getDeleteConfig: Je
    } = Qr({
      extraType: i.extraType,
      allOptions: i.allOptions,
      labels: i.labels,
      shapeIndex: i.shapeIndex || 0,
      enablePricing: i.enablePricing,
      shouldShowAll: f,
      getInputType: h,
      getInputConfig: (re, Te) => A(re, Te),
      getAllInputConfig: (re) => A("all", re),
      getInputConfigForLocation: A,
      canDelete: P,
      getLocationLabel: L,
      shouldShowDeleteButton: B,
      locations: Kt(i, "locations"),
      locationGroups: Kt(i, "locationGroups"),
      shape: Kt(i, "shape"),
      orientationModel: i.orientationModel
    }), Ke = U(!1), Se = E(() => (re) => {
      const Te = me(re);
      return Te === "all" || Te === "faces" || Te === "sides";
    }), Fe = E(() => (re) => Xn(i.extraType).includes(re) ? Un(re) === "face" : !1), mt = E(() => (re) => Xn(i.extraType).includes(re) ? Un(re) === "side" : !1), _ = (re) => {
      const Te = ue(re);
      return !!Te && Te !== "N/A";
    };
    function ee(re) {
      const ze = i.shape?.extras?.[i.extraType];
      if (!ze) return null;
      if (re.startsWith("side.")) {
        const xe = re.replace(/^side\./, ""), Me = ze.sides?.[xe];
        return typeof Me == "string" && Me ? Me : null;
      }
      if (re.startsWith("face.")) {
        const xe = re.replace(/^face\./, ""), Me = ze.faces?.[xe];
        return typeof Me == "string" && Me ? Me : null;
      }
      return null;
    }
    const be = (re) => {
      const Te = ee(re);
      if (!Te) return null;
      const ze = i.formulas?.[Te];
      if (!ze) return null;
      const xe = Number(i.shape?.l) || 0, Me = Number(i.shape?.w) || 0, ye = Number(i.shape?.t) || 0, Pt = Number(i.shape?.q) || 1, Lt = { stockL: 0, stockW: 0, stockCost: 0, stockDiscount: 0, stockDiscountedCost: 0 }, gt = {}, wn = i.extraType === "banding" ? _u : i.extraType === "finish" ? zu : i.extraType === "planing" ? Xu : [];
      for (const st of wn)
        st.startsWith("order.") && (gt[st] = 0);
      if (i.extraType === "banding" && re.startsWith("side.")) {
        const st = re.replace(/^side\./, "");
        return Iu({
          length: st === "l1" || st === "l2" ? xe : Me,
          edge: st,
          isLongEdge: st === "l1" || st === "l2" ? 1 : 0,
          partL: xe,
          partW: Me,
          partT: ye,
          partQuantity: Pt,
          ...Lt,
          ...gt
        }, ze);
      }
      if (i.extraType === "finish" && re.startsWith("face.")) {
        const st = re.replace(/^face\./, "");
        return Lu({
          area: xe * Me,
          face: st,
          partL: xe,
          partW: Me,
          partT: ye,
          partQuantity: Pt,
          ...Lt,
          ...gt
        }, ze);
      }
      if (i.extraType === "planing") {
        if (re.startsWith("face.")) {
          const st = re.replace(/^face\./, "");
          return js({
            area: xe * Me,
            length: 0,
            target: `face.${st}`,
            isFace: 1,
            partL: xe,
            partW: Me,
            partT: ye,
            partQuantity: Pt,
            ...Lt,
            ...gt
          }, ze);
        }
        if (re.startsWith("side.")) {
          const st = re.replace(/^side\./, "");
          return js({
            area: 0,
            length: st === "l1" || st === "l2" ? xe : Me,
            target: `side.${st}`,
            isFace: 0,
            partL: xe,
            partW: Me,
            partT: ye,
            partQuantity: Pt,
            ...Lt,
            ...gt
          }, ze);
        }
      }
      return null;
    }, De = (re) => {
      const Te = be(re);
      return typeof Te == "number" && Number.isFinite(Te);
    }, ne = (re) => i.formatPrice ? i.formatPrice(re) : re.toFixed(2), ve = (re) => {
      const Te = D(re);
      return typeof Te == "number" && Number.isFinite(Te) ? Te : void 0;
    }, Ne = (re) => {
      if (!Xn(i.extraType).includes(re)) return;
      const ze = Number(i.shape?.l), xe = Number(i.shape?.w), Me = Un(re);
      if (Me === "side") {
        const ye = re.replace(/^side\./, "");
        return ye === "l1" || ye === "l2" ? Number.isFinite(ze) && ze > 0 ? ze / 1e3 : void 0 : (ye === "w1" || ye === "w2") && Number.isFinite(xe) && xe > 0 ? xe / 1e3 : void 0;
      }
      if (Me === "face" && Number.isFinite(ze) && Number.isFinite(xe) && ze > 0 && xe > 0)
        return ze * xe / 1e6;
    }, ut = (re) => Xn(i.extraType).includes(re) && Un(re) === "face" ? "m²" : "m", rn = E(() => (re) => i.shape.issues?.some((Te) => Te.category?.includes("extras") && Te.field?.some((ze) => ze[0] === "extras" && ze[1] === i.extraType && ze[2] === re)) ?? !1);
    return on(() => {
      const Te = i.shape.extras?.[i.extraType];
      if (!Te || typeof Te != "object") {
        Ke.value = !0, console.error(`Missing or invalid ${i.extraType} in shape`);
        return;
      }
      if (p.value && !("faces" in Te)) {
        Ke.value = !0, console.error(`Missing faces property in ${i.extraType}`);
        return;
      }
      if (b.value && !("sides" in Te)) {
        Ke.value = !0, console.error(`Missing sides property in ${i.extraType}`);
        return;
      }
    }), (re, Te) => {
      const ze = zn("FontAwesomeIcon");
      return Ke.value ? ae("", !0) : (C(), M("div", {
        key: 0,
        class: Xe(["extras group", [e.extraType]]),
        style: Ht({ "grid-column-end": "span " + e.partColumns })
      }, [
        e.allowCustomNames ? (C(), M("div", wd, [
          W("div", Sd, [
            it(Wa, {
              id: `${e.extraType}-custom-input-${e.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: F(X),
              placeholder: `Add ${e.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": Te[0] || (Te[0] = (xe) => X.value = xe || ""),
              onKeydown: Eo(F(Z), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            W("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !F($),
              onClick: Te[1] || (Te[1] = //@ts-ignore
              (...xe) => F(Z) && F(Z)(...xe))
            }, " Add ", 8, xd)
          ]),
          it(lc, {
            "menu-items": F(x),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: F(G),
            onAction: F(le)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : ae("", !0),
        l.value ? (C(), Ee(F(t), {
          key: 1,
          shape: i.shape,
          "shape-index": i.shapeIndex,
          "catalogue-key": i.catalogueKey,
          "extra-name": i.extraName,
          locations: i.locations,
          "price-per-length": i.pricePerLength,
          pricing: i.pricing,
          "price-label": i.priceLabel,
          "format-price": i.formatPrice,
          "max-gap": i.catalogueMaxGap,
          debug: i.debug || a
        }, null, 8, ["shape", "shape-index", "catalogue-key", "extra-name", "locations", "price-per-length", "pricing", "price-label", "format-price", "max-gap", "debug"])) : (C(), M("div", {
          key: 2,
          class: Xe(["inputs extras-grid grid-layout", { "has-pricing": e.enablePricing }])
        }, [
          (C(!0), M(kt, null, Rt(F(fe), (xe) => (C(), M(kt, { key: xe }, [
            F(Q)(xe) ? (C(), M("div", Pd, [
              W("div", Cd, [
                W("label", {
                  class: Xe(["extras-location-label", {
                    "group-label": Se.value(xe),
                    "face-label": Fe.value(xe),
                    "side-label": mt.value(xe),
                    "has-validation-issue": rn.value(xe)
                  }])
                }, he(F(L)(xe)), 3),
                (C(!0), M(kt, null, Rt(e.allOptions, (Me, ye) => (C(), Ee(ka, hn({
                  key: `${xe}-${ye}`,
                  id: F(oe)(xe, ye),
                  "data-field": `${e.extraType}-${xe}`,
                  "data-index": e.shapeIndex,
                  "data-option-index": ye
                }, { ref_for: !0 }, F(A)(xe, ye), {
                  "onUpdate:value": (Pt) => F(v)(xe, ye, Pt)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"]))), 128)),
                F(Je)(xe).show ? (C(), M("button", {
                  key: 0,
                  type: "button",
                  class: "c-btn c-btn--delete",
                  disabled: !F(Je)(xe).enabled,
                  title: F(Je)(xe).ariaLabel,
                  onClick: (Me) => F(N)(xe)
                }, [
                  it(ze, { icon: ["fass", "trash"] })
                ], 8, Od)) : ae("", !0)
              ]),
              e.enablePricing ? (C(), M("div", Id, [
                De(xe) ? (C(), M("span", Ld, [
                  qt(he(ne(be(xe))), 1),
                  e.priceLabel ? (C(), M("span", Fd, he(e.priceLabel), 1)) : ae("", !0)
                ])) : _(xe) ? (C(), Ee(fc, {
                  key: 1,
                  "price-per-unit": ve(xe),
                  quantity: Ne(xe),
                  "quantity-unit": ut(xe),
                  "price-label": e.priceLabel,
                  "format-price": i.formatPrice
                }, null, 8, ["price-per-unit", "quantity", "quantity-unit", "price-label", "format-price"])) : ae("", !0)
              ])) : ae("", !0)
            ])) : ae("", !0)
          ], 64))), 128))
        ], 2)),
        i.debug || a ? (C(), Ee(yl, {
          key: 3,
          title: `${e.extraType} debug`,
          data: [{
            extraType: e.extraType,
            mode: F(r),
            catalogueKey: i.catalogueKey,
            useCataloguePicker: l.value,
            allOptions: i.allOptions,
            labels: i.labels,
            pricing: i.pricing,
            displayNames: i.displayNames,
            enablePricing: i.enablePricing,
            shapeMaterial: i.shape?.material,
            shapeStockDbId: i.shape?.stock?.db_id,
            stockExtras: i.shape?.stock?.customData?.stockExtras,
            hasGetPrice: !!i.getPrice,
            hasFindExtrasPrice: !!i.findExtrasPrice,
            locationsProp: i.locations,
            locationGroupsProp: i.locationGroups
          }],
          paths: [`${e.extraType}`],
          root: !1
        }, null, 8, ["title", "data", "paths"])) : ae("", !0)
      ], 6));
    };
  }
}), _i = /* @__PURE__ */ Qt(Ed, [["__scopeId", "data-v-039eb7ee"]]);
function Mt(e) {
  return typeof e == "string" && e.trim().length > 0 ? e.trim() : "";
}
function Ad(e) {
  const t = (Array.isArray(e.availableThicknesses) && e.availableThicknesses.length > 0 ? e.availableThicknesses : Array.isArray(e.t) ? e.t : e.t != null ? [e.t] : []).map((a) => typeof a == "number" ? a : Number(a)).filter((a) => Number.isFinite(a));
  return [...new Set(t)].sort((a, i) => a - i);
}
function kl(e, n, t, a, i) {
  const l = [], p = (!!i && !!e && e.toUpperCase() === i.toUpperCase() ? "" : e) || (n && !!i ? "" : a);
  if (n && l.push(n), p && (!n || !n.toLowerCase().includes(p.toLowerCase())) && l.push(p), t) {
    const b = t.toLowerCase(), P = b.split(/\s+/)[0] ?? "", L = `${n} ${p}`.toLowerCase();
    !(L.includes(b) || P && L.split(/\s+/).includes(P)) && (p || n) && l.push(t);
  }
  return l;
}
function $d(e, n, t, a, i, l, u, r) {
  const f = [];
  n && f.push(n);
  const p = kl(e, t, a, i, l);
  for (const b of p)
    (!n || !n.toLowerCase().includes(b.toLowerCase())) && f.push(b);
  return f.length > 0 ? f.join(" ") : u || r;
}
function Nd(e, n, t, a, i, l, u) {
  const r = kl(e, n, t, a, i);
  return r.length > 0 ? r.join(" ") : l || u;
}
function aa(e, n = {}) {
  const t = n.fallback ?? "(unnamed)";
  if (!e)
    return {
      name: t,
      fullLabel: t,
      productLabel: t,
      groupKey: "",
      thicknesses: []
    };
  const a = Mt(e.name), i = Mt(e.brand) || Mt(n.inheritFrom?.brand), l = Mt(e.material) || Mt(n.inheritFrom?.material), u = Mt(e.variant) || Mt(n.inheritFrom?.variant), r = Mt(e.finish), f = Mt(e.code), p = Mt(e.displayName), b = [i, l].filter(Boolean).join(" · ");
  let P;
  b && u ? P = `${b} → ${u}` : b ? P = b : u && (P = u);
  let L;
  a ? L = a : f ? L = f : u && !l && !i ? L = u : l && !u ? L = l : i && !u && !l ? L = i : L = t;
  const h = $d(
    a,
    i,
    u,
    r,
    l,
    f,
    p,
    t
  ), A = Nd(
    a,
    u,
    r,
    l,
    f,
    p,
    t
  ), J = (() => {
    if (f && !(!a && f.toUpperCase() === L.toUpperCase()) && f.toUpperCase() !== A.toUpperCase())
      return f;
  })(), ue = `${i.toUpperCase()}|${u.toUpperCase()}|${(a || l).toUpperCase()}`, D = Mt(e.shortDescription) || Mt(e.description) || void 0, B = Mt(e.imageUrl) || void 0;
  return {
    hierarchy: P,
    name: L,
    code: J,
    fullLabel: h,
    productLabel: A,
    groupKey: ue,
    brand: i || void 0,
    material: l || void 0,
    variant: u || void 0,
    finish: r || void 0,
    description: D,
    imageUrl: B,
    thicknesses: Ad(e)
  };
}
let Vt = null;
function Td(e, n) {
  return Vt = Vd(e, n), Vt;
}
function Md(e) {
  if (!Vt) throw new Error("Pagination not initialized");
  return {
    items: E(() => Vt.getItems(e)),
    currentPage: E(() => Vt.getCurrentPage(e)),
    currentIndex: E(() => Vt.getCurrentIndex(e)),
    totalPages: E(() => Vt.paginatedArrays.value.get(e)?.totalPages || 0),
    itemsPerPage: E(() => Vt.getItemsPerPage(e)),
    resetPagination: () => Vt.resetPagination(e),
    nextPage: () => Vt.nextPage(e),
    previousPage: () => Vt.previousPage(e),
    goToPage: (n) => Vt.goToPage(e, n),
    setItemsPerPage: (n) => Vt.setItemsPerPage(e, n)
  };
}
function Qm(e, n) {
  const t = Md(e);
  return t.setItemsPerPage(n), t;
}
function Vd(e, n) {
  const t = /* @__PURE__ */ new Map(), a = U({}), i = (v, N) => {
    if ("value" in N) {
      const X = n[v]?.alwaysInclude;
      at(
        () => {
          const $ = N.value;
          return X ? $.filter((G) => !X(G)).length : $.length;
        },
        ($, G) => {
          const x = a.value[v];
          if (!x) return;
          const Z = Math.ceil($ / x.itemsPerPage);
          if ($ > G) {
            const le = Math.ceil($ / x.itemsPerPage), fe = x.currentPage * x.itemsPerPage;
            $ > fe && x.currentPage < le && (x.currentPage = le);
          } else $ < G && x.currentPage > Z && (x.currentPage = Math.max(1, Z));
        },
        { immediate: !1 }
      );
    }
  };
  Object.entries(e).forEach(([v, N]) => {
    const X = n[v];
    if (!X)
      throw new Error(`Missing pagination options for array: ${v}`);
    t.set(v, N), a.value[v] = {
      currentPage: X.initialPage || 1,
      itemsPerPage: X.itemsPerPage
    }, i(v, N);
  });
  const l = (v, N) => {
    const X = a.value[v];
    if (!X) return;
    const $ = u(v);
    X.currentPage = Math.max(1, Math.min(N, $));
  }, u = (v) => {
    const N = t.get(v);
    if (!N) return 0;
    const X = F(N), $ = a.value[v];
    if (!$) return 0;
    const G = n[v], x = G?.alwaysInclude ? X.filter((Z) => !G.alwaysInclude(Z)) : X;
    return Math.max(1, Math.ceil(x.length / $.itemsPerPage));
  }, r = E(() => {
    const v = /* @__PURE__ */ new Map();
    return t.forEach((N, X) => {
      const $ = F(N), G = Array.isArray($) ? $ : [], x = a.value[X], Z = n[X], le = Z?.alwaysInclude ? G.filter(Z.alwaysInclude) : [], fe = Z?.alwaysInclude ? G.filter((Fe) => !Z.alwaysInclude(Fe)) : G, oe = Math.ceil(fe.length / x.itemsPerPage), Je = (x.currentPage - 1) * x.itemsPerPage, Ke = Je + x.itemsPerPage, Se = [
        ...le,
        ...fe.slice(Je, Ke)
      ];
      v.set(X, {
        items: Se,
        currentPage: x.currentPage,
        totalPages: oe,
        isLastPage: x.currentPage >= oe,
        hasNextPage: x.currentPage < oe,
        hasPreviousPage: x.currentPage > 1
      });
    }), v;
  });
  return {
    paginatedArrays: r,
    addArray: (v, N, X) => {
      t.set(v, N), a.value[v] = {
        currentPage: X.initialPage || 1,
        itemsPerPage: X.itemsPerPage
      }, n[v] = X, i(v, N);
    },
    removeArray: (v) => {
      t.delete(v);
      const N = { ...a.value };
      delete N[v], a.value = N;
    },
    hasArray: (v) => t.has(v),
    clearArrays: () => {
      t.clear(), a.value = {};
    },
    goToPage: l,
    nextPage: (v) => {
      const N = a.value[v];
      N && l(v, N.currentPage + 1);
    },
    previousPage: (v) => {
      const N = a.value[v];
      N && l(v, N.currentPage - 1);
    },
    resetPagination: (v) => {
      if (v) {
        const N = a.value[v];
        N && (N.currentPage = 1);
      } else
        Object.values(a.value).forEach((N) => {
          N.currentPage = 1;
        });
    },
    getCurrentPage: (v) => a.value[v]?.currentPage || 1,
    getCurrentIndex: (v) => {
      const N = a.value[v];
      return N ? (N.currentPage - 1) * N.itemsPerPage : 0;
    },
    getItemsPerPage: (v) => {
      const N = a.value[v];
      if (!N) throw new Error(`No pagination state found for key: ${v}`);
      return N.itemsPerPage;
    },
    setItemsPerPage: (v, N) => {
      const X = a.value[v];
      X && (X.itemsPerPage = N, l(v, X.currentPage));
    },
    getStartIndex: (v) => {
      const N = a.value[v];
      return N ? (N.currentPage - 1) * N.itemsPerPage : 0;
    },
    getItems: (v) => r.value.get(v)?.items || []
  };
}
const Rs = U({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function wl() {
  return {
    progress: Rs,
    reset: () => {
      Rs.value = {
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
let Ba = null;
function _d() {
  const e = U(null), n = U(null), t = U(null), a = Qn([]), i = Qn([]), l = Qn([]), u = Qn([]), r = U([]), f = U(null), p = Qn([]), b = U(null), P = U(null), L = U({});
  return {
    // All state
    jobId: e,
    saw: n,
    activeStockAutoId: t,
    shapeList: a,
    stockList: i,
    cutList: l,
    segmentList: u,
    offcuts: r,
    metadata: f,
    unusableShapes: p,
    currentCutIndex: b,
    activeShape: P,
    cuttingPlans: L,
    r: {
      saw: n,
      activeStockAutoId: t,
      jobId: e,
      shapeList: a,
      stockList: i,
      cutList: l,
      segmentList: u,
      offcuts: r,
      unusableShapes: p,
      metadata: f,
      currentCutIndex: b,
      cuttingPlans: L
    }
  };
}
function Dd() {
  if (Ba) return Ba;
  const e = _d(), n = E(() => e.activeStockAutoId.value ? fe(e.activeStockAutoId.value) : []), t = E(() => !e.activeStockAutoId.value || !e.stockList.value?.length ? null : le(e.activeStockAutoId.value)), a = E(() => !t.value || !e.cutList.value?.length ? [] : Je(t.value.autoId)), i = E(() => !t.value || !e.segmentList.value?.length ? [] : oe(e.activeStockAutoId.value)), l = E(() => e.stockList.value?.length ? Ke(e.stockList.value) : []), u = E(() => e.shapeList.value.filter((_) => _.added)), r = E(() => e.shapeList.value?.length ? e.shapeList.value.filter((_) => !_.added) : []), f = E(() => e.shapeList.value?.length ? Qo(e.shapeList.value) : []), p = E(() => e.shapeList.value?.length ? e.shapeList.value.filter((_) => !_.duplicate) : []), b = E(() => p.value.filter((_) => _.added)), P = E(() => e.stockList.value?.length ? e.stockList.value.filter((_) => _.used && !_.duplicate) : []), L = E(() => P.value.filter((_) => _.used)), h = E(() => e.cutList.value?.length ? a.value.reduce((_, ee) => _ + ee.area, 0) : 0), A = E(() => !e.stockList.value?.length || !t.value ? 0 : t.value ? t.value.area : 0), J = E(() => !e.shapeList.value?.length || !n.value ? 0 : n.value ? n.value.reduce((_, ee) => _ + ee.area, 0) : 0), ue = E(() => !e.cutList.value?.length || !t.value ? null : t.value.cutType), D = E(() => e.stockList.value?.length ? e.stockList.value.filter((ee) => ee.used && !ee.isStacked) : []), B = E(() => e.stockList.value?.length ? Jo(t.value, e.stockList.value) : 0), me = E(() => {
    if (!e.stockList.value?.length) return 0;
    let _ = A.value ? (h.value + J.value) / A.value : null;
    return _ > 1 && (_ = 1), _;
  }), Q = E(() => e.activeStockAutoId.value && e.cuttingPlans.value?.[e.activeStockAutoId.value] || null), v = () => {
    e.saw.value = null, e.shapeList.value.length = 0, e.stockList.value.length = 0, e.cutList.value.length = 0, e.segmentList.value.length = 0, e.offcuts.value.length = 0, e.unusableShapes.value.length = 0, e.currentCutIndex.value = null;
  }, N = () => {
    e.saw.value = null, e.activeStockAutoId.value = null, e.activeShape.value = null, e.metadata.value = null, e.shapeList.value = [], e.stockList.value = [], e.cutList.value = [], e.segmentList.value = [], e.offcuts.value = [], e.currentCutIndex.value = null, e.unusableShapes.value = [], e.cuttingPlans.value = {};
  }, X = (_, ee) => {
    _ in this && this[_]?.sort(Ko[ee]);
  }, $ = (_) => {
    $t(_);
  }, G = () => {
    $t(e.shapeList);
  }, x = () => {
    $t(e.stockList);
  }, Z = (_) => {
    if (!_?.shapeList?.some((ee) => ee.added)) {
      N();
      return;
    }
    e.metadata.value = _.metadata, e.unusableShapes.value = _.unusableShapes || [];
    try {
      _?.saw && (e.saw.value = new qi(_.saw));
      const ee = Wo(_, {
        preventAutoRotation: !0
      });
      e.stockList.value = ee.stockList, e.shapeList.value = ee.shapeList, e.cutList.value = ee.cutList, e.segmentList.value = ee.segmentList, e.offcuts.value = ee.offcuts, e.cuttingPlans.value = _.cuttingPlans || {}, ["saw", "stockList", "shapeList", "cutList", "segmentList"].forEach((De) => $t(e[De])), e.activeStockAutoId.value = Ke(e.stockList.value)?.[0]?.autoId || null;
    } catch (ee) {
      console.error("Error updating from result", ee);
    }
  }, le = (_) => e.stockList.value?.length ? e.stockList.value.find((ee) => ee.autoId === _) : null, fe = (_) => e.shapeList.value?.length ? e.shapeList.value.filter((ee) => ee.added && ee?.stock?.autoId === _) : [], oe = (_) => e.segmentList.value?.length ? e.segmentList.value.filter((be) => be?.stock?.autoId === _) : [], Je = (_) => {
    const ee = e?.cutList?.value;
    return !ee && !ee.length ? [] : ee.filter((be) => be?.stock?.autoId === _).sort((be, De) => be?.guillotineState?.order - De?.guillotineState?.order);
  }, Ke = (_) => _?.length ? _.filter((ee) => ee.used === !0) : [], Se = (_) => {
    e.activeStockAutoId.value !== _ && (e.activeShape.value = null, e.activeStockAutoId.value = _);
  }, Fe = (_) => _.id.endsWith(".0") ? _.autoId : e.shapeList.value.find((be) => be.parentId === _.parentId && be.id.endsWith(".0"))?.autoId || _.autoId, mt = () => {
    e.saw.value = new qi({
      bladeWidth: 3,
      stockType: "sheet",
      cutType: "beam",
      cutPreference: "l"
    });
    const _ = new Ho({
      autoId: "1.0",
      l: 2440,
      w: 1220,
      t: 18,
      q: 1,
      used: !0
    }), ee = new Os({
      l: 500,
      w: 500,
      t: 18,
      q: 1,
      x: 0,
      y: 0,
      added: !0,
      id: "1.0"
    });
    ee.addToStock(_);
    const be = new Os({
      l: 400,
      w: 400,
      t: 18,
      q: 1,
      x: 500,
      y: 0,
      added: !0,
      id: "2.0"
    });
    be.addToStock(_);
    const De = (Ne) => ({
      ptxData: {
        function: 1,
        order: Ne,
        isDummy: !1,
        isFirst: Ne === 0,
        isLast: !1,
        technologyTable: "01"
      }
    }), ne = [
      new Va({ x: 0, y: 0, l: 500, vertical: !0, stock: _, ...De(0) }),
      new Va({ x: 500, y: 0, l: 500, vertical: !1, stock: _, ...De(1) }),
      new Va({ x: 500, y: 500, l: 400, vertical: !0, stock: _, ...De(2) }),
      new Va({ x: 900, y: 500, l: 400, vertical: !1, stock: _, ...De(3) })
    ], ve = new Zo({
      l: 1500,
      w: 720,
      t: 18,
      x: 940,
      y: 0
    });
    try {
      ve.addToStock?.(_);
    } catch {
    }
    e.stockList.value = [_], e.shapeList.value = [ee, be], e.cutList.value = ne, e.offcuts.value = [ve], e.activeStockAutoId.value = _.autoId;
  };
  return Ba = {
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
    uniqueShapes: p,
    uniqueAddedShapes: b,
    unplacedShapeTally: f,
    uniqueStock: P,
    uniqueUsedStock: L,
    activeStock: t,
    activeCuts: a,
    activeCutsArea: h,
    activeCutType: ue,
    usedStock: l,
    stackedStock: D,
    activeStockArea: A,
    activeShapeArea: J,
    activeStockStackCount: B,
    activeTotalArea: me,
    activeSegments: i,
    cuttingPlan: Q,
    // methods
    reset: v,
    clear: N,
    createTestData: mt,
    sortItems: X,
    update: $,
    updateShapes: G,
    updateStock: x,
    updateFromResult: Z,
    getStock: le,
    getShapes: fe,
    getSegments: oe,
    getCuts: Je,
    setActiveStockAutoId: Se,
    getInputAutoId: Fe
  }, Ba;
}
const jd = Er(() => xt({
  // Full stock - purchase entire sheet without cutting (first field after ID)
  fullStock: fn(
    lt().default(!1),
    {
      label: "fields.fullStock",
      propertyPath: "fullStock",
      group: "properties",
      order: -1
    }
  ),
  // Material field
  material: fn(
    qe().optional(),
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
  t: fn(
    Ar([An(), qe()]).optional(),
    {
      label: "fields.t",
      propertyPath: "t",
      group: "dimensions",
      order: 0,
      allowZero: !1
    }
  ),
  // Length field
  l: Is({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !1
  }),
  // Width field
  w: Is({
    label: "fields.w",
    placeholder: "fields.w",
    allowZero: !1
  }),
  // Quantity field
  q: fn(
    An().int().positive().default(1),
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
  name: Yo({
    placeholder: "fields.name"
  }),
  // Orientation lock field
  orientationLock: fn(
    rl(["n", "l", "w"]).default("n").optional(),
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
  banding: fn(
    lt().default(!1),
    {
      label: "fields.banding",
      propertyPath: "banding",
      group: "extras",
      order: 0
    }
  ),
  // Finish options
  finish: fn(
    xt({
      enabled: lt().default(!1),
      type: qe().optional(),
      sides: An().optional()
    }).optional(),
    {
      label: "fields.finish",
      propertyPath: "finish",
      group: "extras",
      order: 2
    }
  ),
  // Machining options
  machining: fn(
    xt({
      enabled: lt().default(!1),
      operations: pt(vt()).optional()
    }).optional(),
    {
      label: "fields.machining",
      propertyPath: "machining",
      group: "extras",
      order: 3
    }
  ),
  // Planing button
  planing: fn(
    lt().default(!1),
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
function Bd(e) {
  const n = jd._def.getter();
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
class qd {
  /**
   * Generate field metadata from a Zod schema
   * @param schema - The Zod schema to extract fields from
   * @param options - Options for field generation
   */
  generateFields(n, t) {
    const a = [], i = this.unwrapSchema(n);
    if (!this.isZodObject(i))
      return console.warn("Schema is not a ZodObject:", i), a;
    const l = i.shape;
    for (const [u, r] of Object.entries(l)) {
      if (u.startsWith("_") || this.isComputedField(r))
        continue;
      if (u === "trim" && this.isTrimField(r)) {
        const p = this.generateTrimFields(r);
        a.push(...p);
        continue;
      }
      const f = this.extractFieldMetadata(u, r);
      f && a.push(f);
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
      const f = {
        name: n,
        type: a.type || this.getFieldType(i),
        label: a.label || this.formatLabel(n),
        description: a.description,
        required: !this.isOptional(t),
        defaultValue: a.defaultValue ?? this.getDefaultValue(t),
        ...a
      };
      return this.extractTypeSpecificMetadata(f, i), f;
    }
    const l = i._def?.description, u = this.parseFieldDescription(l), r = {
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
    if (t instanceof Ns) {
      const a = t._def?.options || [];
      for (const i of a)
        if (i instanceof Da)
          return this.isIntegerNumber(i) ? "integer" : "number";
    }
    return t instanceof Da ? this.isIntegerNumber(t) ? "integer" : "number" : t instanceof $r ? "string" : t instanceof Nr ? "boolean" : t instanceof Ts || t._def?.typeName === "ZodNativeEnum" ? "enum" : t instanceof Tr ? "array" : t instanceof ja ? "object" : "string";
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
    const l = t._def?.checks || [];
    for (const u of l) {
      let r, f, p = !0;
      if (u.kind)
        r = u.kind, f = u.value, p = u.inclusive !== void 0 ? u.inclusive : !0;
      else if (u?._zod?.def) {
        const b = u._zod.def;
        r = b.check, f = b.value, p = b.inclusive !== void 0 ? b.inclusive : !0;
      } else
        continue;
      if (r === "min" || r === "greater_than")
        n.min === void 0 && (n.min = r === "greater_than" && !p ? f + 1e-6 : f, n.allowZero = n.min === 0);
      else if (r === "max" || r === "less_than")
        n.max === void 0 && (n.max = r === "less_than" && !p ? f - 1e-6 : f);
      else if (r === "int")
        n.step = 1;
      else if (r === "number_format") {
        const b = u?._zod?.def?.format ?? u?.format;
        (b === "safeint" || b === "int") && (n.step = 1);
      }
    }
  }
  /**
   * Extract type-specific metadata
   */
  extractTypeSpecificMetadata(n, t) {
    if (t instanceof Ns) {
      const a = t._def?.options || [];
      for (const i of a)
        if (i instanceof Da) {
          this.extractNumberConstraints(n, i), n.type = "number";
          break;
        }
    } else t instanceof Da && this.extractNumberConstraints(n, t);
    if (!n.options) {
      if (t instanceof Ts) {
        const a = t._def || {}, i = a.entries ?? a.values ?? t.options;
        Array.isArray(i) ? n.options = i.map((l) => ({
          value: l,
          label: this.formatLabel(String(l))
        })) : i && typeof i == "object" ? n.options = Object.values(i).map((l) => ({
          value: l,
          label: this.formatLabel(String(l))
        })) : n.options = [];
      }
      if (t._def?.typeName === "ZodNativeEnum") {
        const a = t._def?.values || {};
        n.options = Object.entries(a).filter(([i]) => isNaN(Number(i))).map(([i, l]) => ({
          value: l,
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
      for (const l of i) {
        const [u, r] = l.split(":").map((f) => f.trim());
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
    if (n instanceof $i || n instanceof Ni)
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
    return n._def?.typeName === "ZodEffects" ? this.isOptional(n._def?.schema) : n instanceof Ti ? this.isOptional(n._def?.innerType) : !1;
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
    if (n instanceof $i || n instanceof Ni)
      return this.unwrapField(n._def?.innerType);
    if (n instanceof Ti || a === "ZodDefault")
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
    if (n instanceof Ti) {
      const t = n._def?.defaultValue;
      return typeof t == "function" ? t() : t;
    }
    if (n.constructor?.name === "ZodPipe" || n._def?.type === "pipe") {
      const t = n._def?.in;
      if (t)
        return this.getDefaultValue(t);
    }
    if (n instanceof $i || n instanceof Ni) {
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
    return n instanceof ja;
  }
  /**
   * Group fields by their group metadata
   */
  groupFields(n) {
    const t = /* @__PURE__ */ new Map(), a = [];
    for (const l of n)
      l.group ? (t.has(l.group) || t.set(l.group, []), t.get(l.group).push(l)) : a.push(l);
    const i = [];
    return t.forEach((l, u) => {
      i.push({
        name: u,
        label: this.formatLabel(u),
        fields: l.sort((r, f) => (r.order || 999) - (f.order || 999))
      });
    }), a.length > 0 && i.push({
      name: "general",
      label: "General",
      fields: a.sort((l, u) => (l.order || 999) - (u.order || 999))
    }), i.sort((l, u) => (l.order || 999) - (u.order || 999));
  }
  /**
   * Check if a field is a trim object (has l1, l2, w1, w2 properties)
   */
  isTrimField(n) {
    const t = this.unwrapField(n);
    if (t instanceof ja) {
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
    if (!(a instanceof ja))
      return t;
    const i = a.shape, l = ["l1", "l2", "w1", "w2"];
    for (const u of l)
      if (u in i) {
        const r = i[u], f = this.extractFieldMetadata(`trim.${u}`, r);
        f && (f.propertyPath = `trim.${u}`, f.name = `trim.${u}`, f.group || (f.group = "trim"), t.push(f));
      }
    return t;
  }
}
const Us = new qd();
function Rd(e, n = {}) {
  const t = U([]), a = U([]), i = U(/* @__PURE__ */ new Map()), l = U(/* @__PURE__ */ new Map()), u = (h) => {
    let A = Us.generateFields(e);
    n.overrides && (A = A.map((ue) => {
      const D = n.overrides[ue.name];
      if (D) {
        const B = { ...ue, ...D };
        return D.min === void 0 && ue.min !== void 0 && (B.min = ue.min), D.max === void 0 && ue.max !== void 0 && (B.max = ue.max), B;
      }
      return ue;
    })), l.value.clear();
    for (const ue of A)
      l.value.set(ue.name, ue);
    const J = h || n.allowedFieldIds;
    if (J && J.length > 0) {
      const ue = J, D = /* @__PURE__ */ new Map();
      for (const me of A)
        D.set(me.name, me);
      const B = [];
      for (const me of ue) {
        const Q = D.get(me);
        Q && B.push(Q);
      }
      A = B;
    }
    n.filter && (A = A.filter(n.filter)), t.value = A, i.value.clear();
    for (const ue of A)
      i.value.set(ue.name, ue);
    n.grouped && (a.value = Us.groupFields(A));
  };
  u();
  const r = (h) => i.value.get(h), f = (h) => l.value.get(h), p = () => l.value, b = (h, A) => {
    const J = i.value.get(h);
    J && Object.assign(J, A);
  }, P = (h) => {
    const A = r(h);
    return !(!A || A.hidden);
  }, L = (h) => {
    const A = r(h);
    if (!A) return {};
    const J = {};
    return A.required && (J.required = !0), A.type === "number" && (A.min !== void 0 && (J.min = A.min), A.max !== void 0 && (J.max = A.max)), J;
  };
  return {
    fields: E(() => t.value),
    groups: E(() => a.value),
    fieldMap: E(() => i.value),
    allFieldsMap: E(() => l.value),
    getField: r,
    getFieldMetadata: f,
    getAllFieldMetadata: p,
    updateField: b,
    isFieldVisible: P,
    getFieldValidation: L,
    regenerateFields: u
  };
}
function Ud(e) {
  const { stockType: n, materials: t = [], minDimension: a = 0 } = e, i = Bd(n), l = {
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
  return t.length > 0 && (l.material = {
    ...l.material,
    type: "enum",
    options: t.map((u) => ({ value: u.name, label: u.name })),
    defaultValue: t[0]?.name
  }), Rd(i, {
    ...e,
    overrides: { ...l, ...e.overrides }
  });
}
const { progress: pn, reset: Gs } = wl();
function Gd(e) {
  const n = "https://api.cutlistevo.com/";
  let t;
  const a = () => {
    t = Mr(n, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), t.on("connect", () => {
      e.refs?.connected && (e.refs.connected.value = !0), e.callbacks?.onConnect?.();
    }), t.on("connect_error", (u) => {
      e.refs?.connected && (e.refs.connected.value = !1), e.refs?.thinking && (e.refs.thinking.value = !1), e.callbacks?.onConnectError?.(u);
    }), t.on("connect_timeout", (u) => {
      e.refs?.connected && (e.refs.connected.value = !1), e.refs?.thinking && (e.refs.thinking.value = !1), e.callbacks?.onConnectError?.(u);
    }), t.on("result", (u) => {
      pn.value.complete = !0, e.callbacks?.onResult?.(u), t.disconnect();
    }), t.on("queued", () => {
      Gs(), pn.value.queued = !0;
    }), t.on("started", () => {
      pn.value.started = !0;
    }), t.on("progress", (u) => {
      u?.data?.message === "result" ? pn.value.resultCount++ : (pn.value.stockCount = u.data.stockCount, pn.value.shapeCount = u.data.shapeCount), u?.data?.phase && (pn.value.phase = u.data.phase), u?.data?.placed !== void 0 && (pn.value.placed = u.data.placed, pn.value.total = u.data.total);
    }), t.on("user", (u) => {
      e.callbacks?.onUser?.(u);
    }), t.on("error", (u) => {
      e.refs?.thinking && (e.refs.thinking.value = !1), Gs(), e.callbacks?.onError?.(u);
    });
  }, i = () => t?.disconnect(), l = () => t?.connect();
  return a(), {
    socket: t,
    connect: l,
    disconnect: i
  };
}
const yn = te({
  min: z().min(0).optional(),
  max: z().min(0).optional()
}).optional(), zd = te({
  // Location identifier (e.g., 'side.l1', 'face.a')
  location: y().min(1),
  // Dimension constraints for this location
  longSide: yn,
  shortSide: yn,
  t: yn,
  // Formula-based validation
  formula: y().optional(),
  // Custom message for this location
  message: y().optional()
}), Di = te({
  // Shape dimension constraints (type-level, apply to all locations by default)
  longSide: yn,
  shortSide: yn,
  t: yn,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: y().optional(),
  // Custom validation message (optional)
  message: y().optional(),
  // Location-specific rules (override type-level rules for specific locations)
  locations: we(zd).optional()
}), Wd = te({
  banding: Di.optional(),
  finish: Di.optional(),
  planing: Di.optional()
}).optional();
function Kd(e, n) {
  try {
    const t = new ii({}), a = t.parse(e);
    return !!t.evaluate(a, {
      longSide: n.longSide || 0,
      shortSide: n.shortSide || 0,
      t: n.t || 0
    });
  } catch (t) {
    return console.warn("Formula evaluation error:", t, "Formula:", e), !0;
  }
}
function Hd(e, n, t) {
  const a = e.dimension === "t" ? "thickness" : e.dimension === "longSide" ? "long side" : "short side", i = e.constraint === "min" ? "minimum" : "maximum";
  return `${e.location ? `${e.location}: ` : ""}${n.charAt(0).toUpperCase() + n.slice(1)} requires ${a} ${i} of ${e.limit} (current: ${e.value})`;
}
function Zd(e, n, t) {
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
function Jd(e, n, t, a) {
  const { rule: i, message: l, source: u } = Zd(n, t, a), r = [], f = (b, P, L) => {
    P == null || L === void 0 || (L.min !== void 0 && P < L.min && r.push({
      valid: !1,
      dimension: b,
      value: P,
      constraint: "min",
      limit: L.min,
      location: t
    }), L.max !== void 0 && P > L.max && r.push({
      valid: !1,
      dimension: b,
      value: P,
      constraint: "max",
      limit: L.max,
      location: t
    }));
  };
  f("longSide", e.longSide, i.longSide), f("shortSide", e.shortSide, i.shortSide);
  const p = typeof e.t == "string" ? parseFloat(e.t) : e.t;
  return isNaN(p) || f("t", p, i.t), i.formula && (Kd(i.formula, {
    longSide: e.longSide,
    shortSide: e.shortSide,
    t: p
  }) || r.push({
    valid: !1,
    dimension: "longSide",
    value: e.longSide || 0,
    constraint: "min",
    limit: 0,
    location: t
  })), {
    valid: r.length === 0,
    violations: r,
    message: l,
    source: u
  };
}
xt({
  // Context - using z.any() for complex external types
  job: vt().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: qe().nullable().default(null).describe("Socket.io connection ID"),
  user: vt().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: vt().describe("Configuration object"),
  // Type: Config
  api: lt().nullable().default(null).describe("API mode flag"),
  app: lt().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: tr("Saw").describe("Saw configuration"),
  stockList: Pn("Stock").default([]).describe("List of stock materials"),
  shapeList: Pi(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: Pn("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: Pn("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: Pn("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: Pi(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: Pi(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: er,
  // Results storage
  cutList: Pn("Cut").default([]).describe("List of cuts to make"),
  segmentList: Pn("Segment").default([]).describe("List of segments"),
  offcuts: Pn("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: Pn("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: lt().default(!1).describe("Use inventory system"),
  successMetric: qe().default(nr.successMetric).describe("Metric for optimization success"),
  enableEvo: lt().default(!0).describe("Enable evolutionary algorithm"),
  weighting: ea(qe(), vt()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: vt().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: vt().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: xt({
    placement: An().default(0),
    group: An().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: lt().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: lt().default(!1).describe("Run guillotine second pass"),
  runningEvo: lt().default(!1).describe("Currently running evolution"),
  evolutionVisData: pt(ea(qe(), Vr())).default([]).describe("Evolution visualization data"),
  final: lt().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: lt().default(!1).describe("Has minimum spacing requirement")
});
const Qd = rl(["decimal", "fraction"]), Yd = xt({
  job: vt().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Extend with autoId/entityType so they survive Zod validation for worker reconstruction
  inputSaw: ta.extend({ autoId: qe().optional(), __entityType: qe().optional() }),
  inputShapes: pt(na.extend({ autoId: qe().optional(), __entityType: qe().optional() })),
  inputStock: pt(Gn.extend({ autoId: qe().optional(), __entityType: qe().optional() })),
  inputUserGroups: pt(Xo.extend({ autoId: qe().optional(), __entityType: qe().optional() })).optional(),
  // Number format for conversion
  numberFormat: Qd.optional(),
  // Algorithm configuration
  enableEvo: lt().default(!0),
  weighting: vt().optional(),
  successMetric: qe().optional(),
  useInventory: lt().default(!1),
  // Context
  socketId: qe().optional(),
  user: vt().optional(),
  // IUser type
  // Application flags
  widget: lt().optional(),
  api: lt().optional(),
  app: lt().optional(),
  domain: qe().optional(),
  // Extras options (centralized configuration)
  extrasOptions: xt({
    banding: xt({
      options: xt({
        sides: ea(qe(), pt(qe())).optional()
      }).optional()
    }).optional(),
    finish: xt({
      options: xt({
        faces: ea(qe(), pt(qe())).optional()
      }).optional()
    }).optional(),
    planing: xt({
      options: xt({
        sides: ea(qe(), pt(qe())).optional(),
        faces: ea(qe(), pt(qe())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // API specific
  config: vt().optional(),
  v: An().optional(),
  // API version
  webhook: qe().optional(),
  //source
  sourceVersion: qe().nullish(),
  source: qe().optional()
});
xt({
  job: vt().optional(),
  // Type: Job from BullMQ
  saw: vt(),
  // Runtime Saw instance
  shapeList: pt(vt()),
  // Runtime Shape instances
  stockList: pt(vt()),
  // Runtime Stock instances
  userGroups: pt(vt()).optional(),
  // Runtime Group instances
  enableEvo: lt(),
  weighting: vt().optional(),
  successMetric: qe().optional(),
  useInventory: lt(),
  socketId: qe().optional(),
  user: vt().optional(),
  widget: lt().optional(),
  api: lt().optional(),
  app: lt().optional(),
  domain: qe().optional(),
  config: vt().optional(),
  v: An().optional(),
  webhook: qe().optional()
});
const { addNotice: Jn } = Ji();
let ji = null;
function Xd() {
  return ji || (ji = ml()), ji;
}
function zs(e) {
  return e.filter((n) => n?.l || n?.w);
}
async function ef(e) {
  const n = e.t, t = [];
  try {
    const { inputs: a, validateInputShapes: i, validateInputStock: l } = Xd(), u = e.inputShapes ?? a.inputShapes.value, r = e.inputStock ?? a.inputStock.value, f = e.inputUserGroups ?? a.inputUserGroups?.value ?? [], p = zs(u), b = zs(r);
    if (p.forEach((D) => D.isNew = !1), b.forEach((D) => D.isNew = !1), !e.isAdmin && !e.shared && e.maxShapes !== 1 / 0) {
      const D = p.reduce((me, Q) => me + (Q.q || 1), 0), B = b.reduce((me, Q) => me + (Q.q || 1), 0);
      if (D > e.maxShapes || B > e.maxStock)
        return Jn({
          type: "error",
          message: n("errors.validation.above_max_parts")
        }), e.onLimit?.(), { valid: !1, issues: t };
    }
    if (!p.length)
      return Jn({
        type: "error",
        message: n("errors.validation.no_parts_list")
      }), { valid: !1, issues: t };
    if (!e.useInventory && !b.length)
      return Jn({
        type: "error",
        message: n("errors.validation.no_stock")
      }), { valid: !1, issues: t };
    let P;
    if (e.useInventory && e.selectedSaw)
      P = e.selectedSaw;
    else if (e.inputSaw instanceof mn) {
      const D = e.inputSaw.validate();
      t.push(...D), P = e.inputSaw.toData();
    } else {
      P = e.inputSaw;
      const D = new qi(P);
      t.push(...D.issues);
    }
    const L = P?.cutType;
    if (L === "nesting") {
      const D = p.filter(
        (B) => !Array.isArray(B.outline) || B.outline.length < 3
      );
      if (D.length)
        for (const B of D)
          t.push(new Bt({
            item: B,
            category: ["part"],
            message: "Nesting mode requires a polygon outline — import this part via DXF or switch to Rectangular mode.",
            shouldTranslate: !1
          }));
    } else if (L) {
      const D = p.filter(
        (B) => Array.isArray(B.outline) && B.outline.length >= 3
      );
      if (D.length)
        for (const B of D)
          t.push(new Bt({
            item: B,
            category: ["part"],
            message: "This part has a polygon outline and can only be used in Nesting mode — switch mode or remove the outlined parts.",
            shouldTranslate: !1
          }));
    }
    const h = i({
      saw: P,
      partTrim: pe({ v: e.partTrim }),
      useInventory: e.useInventory,
      inputShapesOverride: p
    });
    if (t.push(...h), e.useInventory) {
      if (e.materialStore)
        for (const D of p)
          D.material || t.push(new Bt({
            item: D,
            category: ["part"],
            message: "errors.validation.business.no_material"
          }));
    } else {
      const D = l(P);
      t.push(...D);
    }
    if (f.length > 0) {
      f.forEach((B) => B.populateParentID(p));
      const D = ar(f, p);
      t.push(...D);
    }
    await nf(p, e, t);
    const A = Ri(t);
    if (A.length > 0) {
      const D = {
        saw: A.filter((B) => B.category?.includes("saw")),
        stock: A.filter((B) => B.category?.includes("stock")),
        part: A.filter((B) => B.category?.includes("part") && !B.category?.includes("extras")),
        extras: A.filter((B) => B.category?.includes("extras")),
        group: A.filter((B) => B.category?.includes("group"))
      };
      for (const [B, me] of Object.entries(D))
        if (me.length > 0) {
          Jn({
            type: "error",
            message: n("errors.validation.inputs_issue", { 0: B }),
            additional: me.map((Q) => n(Q.message))
          });
          break;
        }
      return { valid: !1, issues: t };
    }
    const J = {
      inputSaw: P,
      inputShapes: p.map((D) => D.toData()),
      inputStock: b.map((D) => D.toData()),
      inputGroups: f.map((D) => D.toData()),
      enableEvo: !0,
      useInventory: e.useInventory || !1
    }, ue = Yd.safeParse(J);
    return ue.success ? {
      valid: !0,
      issues: t,
      sawData: P
    } : (console.error("[Validation] Zod validation failed:", ue.error.issues), Jn({
      type: "error",
      message: n("errors.validation.invalid_data_structure"),
      additional: ue.error.issues.map((D) => `${D.path.join(".")}: ${D.message}`)
    }), { valid: !1, issues: t });
  } catch (a) {
    return console.error("[Validation] error:", a), Jn({
      type: "error",
      message: n("errors.general.unexpected"),
      additional: [a?.message ?? ""]
    }), { valid: !1, issues: t };
  }
}
function tf(e, n) {
  const t = [], a = e.extras;
  if (!a) return t;
  if (n === "banding" && a.banding?.sides)
    for (const [i, l] of Object.entries(a.banding.sides))
      l !== void 0 && l !== !1 && l !== "" && t.push(`side.${i}`);
  else if (n === "finish" && a.finish?.faces)
    for (const [i, l] of Object.entries(a.finish.faces))
      l !== void 0 && l !== !1 && l !== "" && t.push(`face.${i}`);
  else if (n === "planing") {
    if (a.planing?.faces)
      for (const [i, l] of Object.entries(a.planing.faces))
        l !== void 0 && l !== !1 && l !== "" && t.push(`face.${i}`);
    if (a.planing?.sides)
      for (const [i, l] of Object.entries(a.planing.sides))
        l !== void 0 && l !== !1 && l !== "" && t.push(`side.${i}`);
  }
  return t;
}
async function nf(e, n, t) {
  if (!n.findExtrasPrice)
    return;
  const a = [
    { type: "banding", pricing: n.bandingPricing },
    { type: "finish", pricing: n.finishPricing },
    { type: "planing", pricing: n.planingPricing }
  ];
  for (const i of e)
    for (const { type: l, pricing: u } of a) {
      const r = n.getShapeExtrasPricing?.(i, l) ?? u;
      if (n.extrasValidationRules && ir.hasExtras(i, l)) {
        const b = n.extrasValidationRules?.[l], P = n.extrasLocationGroups?.[l], L = b?.locations && b.locations.length > 0, h = P?.some((A) => A.rules);
        if (L || h) {
          const A = tf(i, l), J = (P || []).map((B) => ({
            id: B.id,
            locations: B.locations,
            rules: B.rules
          })), ue = b || {}, D = /* @__PURE__ */ new Set();
          for (const B of A) {
            const me = Jd(
              i,
              ue,
              B,
              J
            );
            if (!me.valid) {
              if (me.source === "group") {
                const Q = J.find(
                  (v) => v.rules && v.locations.includes(B)
                );
                if (Q && D.has(Q.id))
                  continue;
                Q && D.add(Q.id);
              }
              if (me.message) {
                const Q = new Bt({
                  item: i,
                  category: ["part", "extras"],
                  message: me.message,
                  field: [["extras", l, B]],
                  shouldTranslate: !1
                });
                t.push(Q);
              } else
                me.violations.forEach((Q) => {
                  const v = Hd(Q, l), N = new Bt({
                    item: i,
                    category: ["part", "extras"],
                    message: v,
                    field: [["extras", l, B]],
                    shouldTranslate: !1
                  });
                  t.push(N);
                });
            }
          }
        } else {
          const A = sr(i, l, n.extrasValidationRules);
          A.valid || A.violations.forEach((J) => {
            const ue = lr(l, J, A.message);
            t.push(new Bt({
              item: i,
              category: ["part", "extras"],
              message: ue,
              field: [["extras", l]],
              shouldTranslate: !1
            }));
          });
        }
      }
      if (!r || !Object.keys(r).length)
        continue;
      const f = or(i, l, r, n.findExtrasPrice);
      f.valid || f.incompleteLocations.forEach((p) => {
        t.push(new Bt({
          item: i,
          category: ["part", "extras"],
          message: "errors.extras.selection_incomplete",
          params: {
            extraType: `extras.${l}`,
            // Translation key for extra type (banding, finish, planing)
            location: rr(p, { returnKey: !0 })
            // Translation key for location
          },
          field: [["extras", l, p]]
        }));
      });
    }
}
const af = new ii({});
function sf(e) {
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
function lf(e, n) {
  const t = [], a = e.filter((i) => i.enabled !== !1);
  for (let i = 0; i < n.length; i++) {
    const l = n[i], u = sf(l);
    for (const r of a)
      try {
        af.evaluateExpression(r.formula, u) || t.push({
          partIndex: i,
          partName: l.name || void 0,
          ruleName: r.name || void 0,
          message: r.message
        });
      } catch (f) {
        t.push({
          partIndex: i,
          partName: l.name || void 0,
          ruleName: r.name || void 0,
          message: `Validation error: ${f instanceof Error ? f.message : "Unknown error"}`
        });
      }
  }
  return {
    valid: t.length === 0,
    errors: t
  };
}
const of = te({
  longSide: yn,
  shortSide: yn,
  t: yn,
  formula: y().optional(),
  message: y().optional()
}).optional(), Ka = te({
  // Unique identifier for this group (used internally)
  id: y().min(1),
  // Display label for the group (shown in UI)
  label: y().min(1),
  // Array of location strings in this group
  // Examples: ['side.l1', 'side.l2'], ['face.a', 'face.b']
  locations: we(y().min(1)).min(1),
  // Optional price override for this group
  // When set, this price will be used instead of calculating from individual locations
  price: z().optional(),
  // Hide individual location inputs when this group is enabled
  // When true, only shows the group control, hiding the individual face/side inputs
  hideIndividualLocations: Le().optional().default(!1),
  // Validation rules that apply when using this group
  // These rules apply when any location in the group is selected
  rules: of
}), rf = te({
  banding: we(Ka).optional(),
  finish: we(Ka).optional(),
  planing: we(Ka).optional()
}).optional(), uf = kn(["decimal", "fraction"]), cf = kn(["metric", "imperial"]), df = kn(cr), Ws = ot([
  bn(0),
  bn(1),
  bn(2)
]).catch(0), ff = te({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: y().optional(),
  partB: y().optional(),
  partSelected: y().optional(),
  stock: y().optional(),
  text: y().optional(),
  // Checkout-specific colors
  button: y(),
  buttonText: y()
}), yt = (e) => wa((n) => n ?? e, Le()), pf = te({
  banding: yt(!1),
  finish: yt(!1),
  planing: yt(!1),
  orientation: yt(!0),
  diagram: yt(!0),
  focus: yt(!0),
  machining: yt(!1),
  csvImport: yt(!1),
  csvTemplate: yt(!1),
  groups: yt(!1),
  click: yt(!0),
  partName: yt(!0),
  progressNumber: yt(!0),
  pagination: yt(!1),
  fullStock: yt(!1),
  imageUpload: yt(!1),
  diagramNav: yt(!1),
  debug: yt(!1)
}), mf = te({
  // Localization
  locale: y().default("en-US"),
  currency: y().default("USD"),
  apiVersion: z().min(2).default(3),
  // Unit system (metric or imperial)
  unitSystem: cf.default("metric"),
  // Number formatting
  numberFormat: uf.default("decimal"),
  decimalPlaces: z().min(0).max(10).default(2),
  fractionRoundTo: z().default(0),
  // Stock configuration
  stockSelection: df.optional(),
  stockGrain: ur.optional(),
  // Part configuration
  minSpacing: il.optional(),
  maxParts: z().min(0).default(0),
  orientationModel: Ws.default(0),
  resultOrientationModel: Ws.default(0),
  minDimension: z().min(0).default(0),
  partTrim: wa((e) => e ?? void 0, z().min(0).optional()),
  partsPerPage: wa((e) => e ?? void 0, z().min(1).default(10)),
  // UI configuration
  debug: Le().default(!1),
  enable: pf.default({
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
  colors: ff.default({
    button: "#118ab2",
    buttonText: "#ffffff"
  }),
  // Custom fields
  customFields: we(tt()).optional(),
  fieldOrder: wa((e) => e ?? void 0, we(y()).optional()),
  // Extras location filtering
  bandingLocations: we(Ci).optional(),
  finishLocations: we(Ci).optional(),
  planingLocations: we(Ci).optional(),
  // Extras location groups
  extrasLocationGroups: rf,
  // Extras validation rules
  extrasValidationRules: Wd
}), ba = te({
  min: z().min(0).nullable().optional(),
  max: z().min(0).nullable().optional()
}).nullable().optional(), gf = te({
  // Master toggle for the feature. Server gates on this; consumers don't need to.
  enabled: Le().optional(),
  // Orientation-independent dimension constraints
  // longSide = the larger of l/w, shortSide = the smaller of l/w
  longSide: ba,
  shortSide: ba,
  // Direct dimension constraints (as stored by admin panel)
  l: ba,
  w: ba,
  t: ba,
  // Cross-dimensional rules
  // For complex scenarios like "one side must be >= 100mm, the other >= 50mm"
  crossDimensionalRule: te({
    // At least one side must be >= primaryMin
    primaryMin: z().min(0).nullable().optional(),
    // The other side must be >= secondaryMin
    secondaryMin: z().min(0).nullable().optional()
  }).nullable().optional(),
  // Formula-based validation using JavaScript expression
  // Formula can reference: l, w, longSide, shortSide
  // Examples: "(l * w) > 100", "longSide >= 50"
  formula: y().nullable().optional(),
  // Custom validation message (optional)
  message: y().nullable().optional()
});
function hf(e, n) {
  const t = [], a = e.l || 0, i = e.w || 0, l = e.longSide ?? Math.max(a, i), u = e.shortSide ?? Math.min(a, i), r = (f, p, b) => {
    b != null && (b.min !== void 0 && b.min !== null && p < b.min && t.push({
      valid: !1,
      dimension: f,
      value: p,
      constraint: "min",
      limit: b.min
    }), b.max !== void 0 && b.max !== null && p > b.max && t.push({
      valid: !1,
      dimension: f,
      value: p,
      constraint: "max",
      limit: b.max
    }));
  };
  if (r("longSide", l, n.longSide), r("shortSide", u, n.shortSide), r("longSide", a, n.l), r("shortSide", i, n.w), n.crossDimensionalRule) {
    const { primaryMin: f, secondaryMin: p } = n.crossDimensionalRule, b = e.l || 0, P = e.w || 0;
    if (f != null && p != null) {
      const L = b >= f && P >= p, h = P >= f && b >= p;
      !L && !h && t.push({
        valid: !1,
        dimension: "crossDimensional",
        constraint: "crossDimensional",
        message: n.message || `At least one side must be ≥ ${f} mm and the other side must be ≥ ${p} mm`
      });
    }
  }
  return n.formula && (vf(n.formula, {
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
function vf(e, n) {
  try {
    const t = new ii({}), a = t.parse(e);
    return !!t.evaluate(a, {
      l: n.l || 0,
      w: n.w || 0,
      longSide: n.longSide || 0,
      shortSide: n.shortSide || 0
    });
  } catch (t) {
    return console.warn("Formula evaluation error:", t, "Formula:", e), !0;
  }
}
function bf(e) {
  if (e.message)
    return e.message;
  if (e.constraint === "crossDimensional")
    return e.message || "Part dimensions do not meet requirements";
  const n = e.dimension === "longSide" ? "long side" : e.dimension === "shortSide" ? "short side" : e.dimension, t = e.constraint === "min" ? "minimum" : "maximum";
  return `Part requires ${n} ${t} of ${e.limit} (current: ${e.value})`;
}
kn([
  "full_stock",
  "part_area",
  "cut_length",
  "full_stock_plus_cut_length",
  "full_stock_plus_num_parts",
  "full_stock_plus_part_perimeter",
  "roll_length"
]);
const yf = Ue(
  y(),
  z().min(0)
).default({}), kf = te({
  banding: y().optional(),
  finish: y().optional(),
  planing: y().optional(),
  machining: y().optional()
}).optional(), wf = te({
  name: y().trim().min(1),
  db_id: y().optional(),
  code: y().optional(),
  brand: y().optional(),
  variant: y().optional(),
  finish: y().optional(),
  // Raw `material` label from source stock — preserved when the source
  // data uses it as the friendly product name (typical WordPress / widget
  // shape: `material: "Birch Plywood", name: "SKU-123"`). The catalogue
  // flow doesn't set this; it carries identity on `name` + `code` instead.
  material: y().optional(),
  displayName: y().optional(),
  imageUrl: y().optional(),
  color: y().optional(),
  colorHex: y().optional(),
  thicknesses: we(
    ot([
      y().transform((e) => {
        const n = parseFloat(e);
        return isNaN(n) ? e : n;
      }),
      z()
    ])
  ).min(1),
  widths: we(
    ot([
      y().transform((e) => {
        const n = parseFloat(e);
        return isNaN(n) ? e : n;
      }),
      z()
    ])
  ).optional(),
  // Unique (l, w) sheet sizes available for this material across all
  // thicknesses. Populated for panel stock only — linear stock uses `widths`
  // above for its single-dimension variant axis. The full-stock dialog uses
  // this list to let the customer pick which sheet size they're buying when
  // more than one is available for the chosen material + thickness.
  dimensions: we(te({
    l: z(),
    w: z()
  })).optional(),
  extras: kf,
  fullSizeOnly: Le().optional()
}), Bi = te({
  labels: we(y()).default([]),
  pricing: Ue(y(), z().min(0)).default({}),
  options: tt().optional(),
  keys: we(y()).optional(),
  // if not all the default keys should be set
  locations: we(y()).optional(),
  // available locations for this extras type
  groups: we(Ka).optional(),
  // custom location groups
  rules: tt().optional(),
  // validation rules for this extras type
  displayNames: Ue(y(), y()).optional(),
  // slug key → product name for dropdown display
  maxGap: z().optional(),
  // banding-only: max gap (mm) between part thickness and strip width (catalogue picker)
  defaultPrice: z().optional(),
  // fallback per-metre rate for catalogue-linked banding SKUs not in `pricing`
  // True when the server included any catalogue-linked extra (sourceCatalogueKey set) of this type.
  // Drives the storefront calculator out of legacy-global fallback mode so the org's full catalogue
  // (e.g. ~1,700 Egger SKUs in `pricing`, kept for cart-side lookup) doesn't leak onto materials
  // that never linked it. See `getShapeExtrasConfig` in EcommerceCalculator.vue.
  containsCatalogueLinked: Le().optional(),
  // Compound-key pricing for group-mode extras, keyed `<extraKey>|<groupId>`.
  // Kept in a sibling field (not merged into `pricing`) so `validateExtrasCompleteness`
  // doesn't see the `|` and mis-derive `maxPricingLevels` — see the EcommerceCalculator
  // `initExtra` comment. Consumed at the cart-total site, not by the widget itself.
  groupPricing: Ue(y(), z()).optional(),
  // Per-code pricing formulas. When a formula exists for a code, both the
  // inline per-feature preview AND the cart total evaluate the formula
  // instead of multiplying the flat rate. Fanned out per-code by the
  // server's `buildExtrasConfig` so one Extra → many code entries.
  formulas: Ue(y(), y()).optional()
});
te({
  success: Le(),
  price: z().optional(),
  error: y().optional(),
  cacheHit: Le().optional()
});
te({
  valid: Le(),
  errors: we(y()),
  warnings: we(y())
});
te({
  pricing: yf,
  labels: we(y()),
  options: we(we(y())),
  // Simplified to string arrays only
  keys: we(y()),
  maxLevels: z().min(1)
});
te({
  enableCaching: Le().default(!0),
  enableLogging: Le().default(!1),
  maxCacheSize: z().min(1).default(1e3)
});
const Sl = kn(["select", "multiselect", "range", "boolean", "search"]), xl = kn(["asc", "desc"]), Pl = kn(["grid", "list"]), qa = te({
  _id: y(),
  name: y(),
  code: y().optional(),
  labels: we(y()).optional(),
  pricing: Ue(y(), z()).optional(),
  price: z().optional(),
  // Catalogue link — when set, the customer renders a Decor × Type ×
  // Width × Thickness picker against /catalogues/<key>/banding-axes.
  sourceCatalogueKey: y().optional(),
  // Per-axis pricing rules — preserved so per-shape inline price hints
  // can compute against the rule that matches.
  pricingRules: we(te({
    materials: we(y()).optional(),
    widths: we(z()).optional(),
    thicknesses: we(z()).optional(),
    price: z()
  })).optional()
}), Sf = te({
  banding: qa.optional(),
  finish: qa.optional(),
  planing: qa.optional(),
  machining: qa.optional()
}).optional(), xf = te({
  enabled: Le(),
  price: z(),
  description: y().optional(),
  maxQuantity: z().optional()
}).optional(), Pf = te({
  // Visual (Note: color, weight, imageUrl, tags, available are now in InputStock base schema)
  colorHex: dr,
  name: y().optional().describe("User-friendly display name"),
  description: y().optional().describe("Detailed description"),
  code: y().optional().describe("Internal material/product code"),
  // Categorization
  category: y().optional().describe("Stock category"),
  // Surface finish (e.g., "High Gloss", "Matt", "Satin")
  finish: y().optional().describe("Surface finish"),
  // Available extras from material (resolved from material.extras)
  extras: Sf.describe("Available extras for this stock"),
  // Sample ordering configuration (from material)
  sample: xf.describe("Sample ordering configuration"),
  // External links — supplier-supplied datasheets, asset bundles, 3D viewer
  // URLs etc. surfaced in the customer-side Details dialog. Populated for
  // library-sourced rows from the catalogue entry's `urls` field; absent
  // or empty for shop-owned stock until the editor populates it.
  urls: we(te({
    label: y(),
    url: y()
  })).optional().describe("Supplier external links (datasheets, asset bundle, …)"),
  // UI metadata
  minQuantity: z().int().positive().nullable().optional().describe("Minimum order quantity")
});
Gn.merge(Pf).describe("Stock option with filtering and display metadata");
const Cf = te({
  field: y().describe("Property name to filter on"),
  type: Sl,
  label: y().describe("Display label"),
  custom: Le().default(!1).describe("Whether this is a custom property"),
  // Range filter options
  min: z().nullable().optional().describe("Minimum value for range filter"),
  max: z().nullable().optional().describe("Maximum value for range filter"),
  step: z().nullable().optional().describe("Step size for range filter"),
  // Select filter options
  options: we(te({
    label: y(),
    value: tt()
  })).optional().describe("Predefined options for select filters"),
  // Display options
  visible: Le().default(!0).describe("Whether filter is visible"),
  collapsible: Le().default(!0).describe("Whether filter panel is collapsible"),
  order: z().int().nullable().optional().describe("Display order")
}), Of = te({
  field: y().describe("Field to sort by"),
  order: xl,
  label: y().optional().describe("Display label for sort option")
}), es = te({
  // Filter configuration
  availableFilters: we(Cf).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: we(y()).default(["cost", "material", "t"]).describe("Sortable fields"),
  defaultSort: Of.default({
    field: "cost",
    order: "asc"
  }).describe("Default sort configuration"),
  // Display configuration
  displayMode: Pl.default("grid").describe("Default display mode"),
  itemsPerPage: z().int().positive().default(20).describe("Items per page for pagination"),
  // Feature toggles
  enableSearch: Le().default(!0).describe("Enable search functionality"),
  // Selection behavior
  allowMultipleSelection: Le().default(!0).describe("Allow multiple stock selection"),
  maxSelection: z().int().positive().nullable().optional().describe("Maximum number of stock items to select")
}), If = te({
  field: y(),
  value: tt(),
  type: Sl
});
te({
  // Active filters
  activeFilters: we(If).default([]).describe("Currently active filters"),
  // Search
  searchQuery: y().default("").describe("Current search query"),
  // Sort
  sortBy: y().default("cost").describe("Current sort field"),
  sortOrder: xl.default("asc").describe("Current sort order"),
  // Display
  displayMode: Pl.default("grid").describe("Current display mode"),
  currentPage: z().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: we(y()).default([]).describe("IDs of selected stock items")
});
function Ym() {
  return es.parse({});
}
const Cl = te({}).passthrough(), Ol = te({
  l: z(),
  w: z(),
  t: z().nullable(),
  q: z(),
  stockId: y()
}), ts = fr.partial(), Il = te({
  q: z().optional(),
  analysis: ts.nullable().optional()
}), Ll = te({
  holes: we(te({
    x: z(),
    y: z(),
    diameter: z(),
    depth: z().optional(),
    face: z().optional(),
    type: y().optional()
  })).optional(),
  hingeHoles: we(te({
    position: z(),
    side: y(),
    face: z().optional(),
    numHoles: z().optional(),
    diameter: z().optional(),
    depth: z().optional(),
    hingeLength: z().optional(),
    distanceFromEdge: z().optional(),
    outerSpacing: z().optional()
  })).optional(),
  corners: we(te({
    index: z(),
    type: y().nullable().optional(),
    size: z().nullable().optional()
  })).optional()
}), Fl = te({
  bladeWidth: z().optional(),
  cutType: y().optional(),
  cutPreference: y().optional(),
  stackHeight: z().optional()
}), Lf = te({
  l: z(),
  w: z(),
  t: z().nullable(),
  material: y().nullable(),
  orientationLock: sl.nullable(),
  q: z(),
  name: y().nullable(),
  // V2 format: flat banding/finish (x1/x2/y1/y2 for banding, a/b for finish)
  banding: Ue(y(), ot([y(), Le()])).nullable().optional(),
  finish: Ue(y(), ot([y(), Le()])).nullable().optional(),
  planing: Ue(y(), ot([y(), Le()])).nullable().optional(),
  customData: Ue(y(), tt()).nullable().optional()
}), Ff = te({
  id: y(),
  name: y().nullable(),
  l: z(),
  w: z(),
  t: z().nullable(),
  material: y().nullable(),
  q: z(),
  trim: te({
    x1: z(),
    x2: z(),
    y1: z(),
    y2: z()
  }).nullable().optional(),
  cost: z().nullable().optional(),
  /** Configured percentage discount (0–100) — surfaced to pricing formulas. */
  discount: z().nullable().optional(),
  /** Per-stock pricing override evaluated at checkout — see
   *  shared/formula/pricing-variables.ts for the available variable surface. */
  pricingFormula: y().nullable().optional(),
  db_id: y().nullable().optional(),
  code: y().nullable().optional(),
  analysis: ts.nullable().optional(),
  /** Per-sheet analysis — present when the cut server emits per-sheet data.
   *  Pricing formulas iterate these when set so usedFraction reflects each
   *  physical sheet, not the order-wide average. */
  sheets: we(Il).nullable().optional(),
  customData: Ue(y(), tt()).nullable().optional()
}), Ef = te({
  id: y().optional(),
  name: y().optional(),
  l: z(),
  w: z(),
  t: z().nullable().optional(),
  material: y().optional(),
  q: z().optional(),
  orientationLock: ot([
    bn(""),
    bn("l"),
    bn("w")
  ]).nullable().optional(),
  // V2 format: flat banding/finish
  banding: Ue(y(), ot([y(), Le()])).nullable().optional(),
  finish: Ue(y(), ot([y(), Le()])).nullable().optional(),
  planing: Ue(y(), ot([y(), Le()])).nullable().optional(),
  // V3 nested extras also stored on inputs even for V2 results (see mapToCheckoutResultV2)
  extras: te({
    banding: te({
      sides: Ue(y(), ot([y(), Le()]))
    }).nullable().optional(),
    finish: te({
      faces: Ue(y(), ot([y(), Le()]))
    }).nullable().optional(),
    planing: te({
      sides: Ue(y(), ot([y(), Le()])).optional(),
      faces: Ue(y(), ot([y(), Le()])).optional()
    }).nullable().optional()
  }).optional(),
  machining: Ll.optional(),
  stock: te({
    db_id: y().optional(),
    code: y().optional(),
    material: y().optional(),
    thickness: z().optional()
  }).nullable().optional(),
  customData: Ue(y(), tt()).nullable().optional()
});
te({
  jobId: z(),
  metadata: Sa.optional(),
  parts: we(Lf),
  stock: we(Ff),
  offcuts: we(Ol),
  inputs: te({
    parts: we(Ef),
    saw: Fl.optional()
  }),
  apiResultV3: Cl.optional()
});
const Af = te({
  l: z(),
  w: z(),
  t: z().nullable(),
  material: y().nullable(),
  orientationLock: sl.nullable(),
  q: z(),
  name: y().nullable(),
  // V3 format: nested extras structure
  extras: te({
    banding: te({
      sides: Ue(y(), ot([y(), Le()]))
    }).nullable().optional(),
    finish: te({
      faces: Ue(y(), ot([y(), Le()]))
    }).nullable().optional(),
    planing: te({
      sides: Ue(y(), ot([y(), Le()])).optional(),
      faces: Ue(y(), ot([y(), Le()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: Ue(y(), tt()).nullable().optional()
}), $f = te({
  id: y(),
  name: y().nullable(),
  l: z(),
  w: z(),
  t: z().nullable(),
  material: y().nullable(),
  q: z(),
  trim: te({
    l1: z().optional(),
    l2: z().optional(),
    w1: z().optional(),
    w2: z().optional()
  }).nullable().optional(),
  cost: z().nullable().optional(),
  /** Configured percentage discount (0–100) — surfaced to pricing formulas. */
  discount: z().nullable().optional(),
  /** Per-stock pricing override evaluated at checkout — see
   *  shared/formula/pricing-variables.ts for the available variable surface. */
  pricingFormula: y().nullable().optional(),
  db_id: y().nullable().optional(),
  code: y().nullable().optional(),
  analysis: ts.nullable().optional(),
  /** Per-sheet analysis — present when the cut server emits per-sheet data.
   *  Pricing formulas iterate these when set so usedFraction reflects each
   *  physical sheet, not the order-wide average. */
  sheets: we(Il).nullable().optional(),
  // New stock fields
  color: pr.nullable(),
  weight: z().positive().nullable().optional(),
  imageUrl: y().nullable().optional(),
  tags: we(y()).nullable().optional(),
  available: Le().nullable().optional(),
  customData: Ue(y(), tt()).nullable().optional()
}), Nf = te({
  id: y().optional(),
  name: y().optional(),
  l: z(),
  w: z(),
  t: z().nullable().optional(),
  material: y().optional(),
  q: z().optional(),
  orientationLock: ot([
    bn(""),
    bn("l"),
    bn("w")
  ]).nullable().optional(),
  // V3 format: nested extras structure
  extras: te({
    banding: te({
      sides: Ue(y(), ot([y(), Le()]))
    }).nullable().optional(),
    finish: te({
      faces: Ue(y(), ot([y(), Le()]))
    }).nullable().optional(),
    planing: te({
      sides: Ue(y(), ot([y(), Le()])).optional(),
      faces: Ue(y(), ot([y(), Le()])).optional()
    }).nullable().optional()
  }).optional(),
  machining: Ll.optional(),
  stock: te({
    db_id: y().optional(),
    code: y().optional(),
    material: y().optional(),
    thickness: z().optional()
  }).nullable().optional(),
  customData: Ue(y(), tt()).nullable().optional()
});
te({
  jobId: z(),
  metadata: Sa.optional(),
  parts: we(Af),
  stock: we($f),
  offcuts: we(Ol),
  inputs: te({
    parts: we(Nf),
    saw: Fl.optional()
  }),
  apiResultV3: Cl.optional()
});
function El(e) {
  return {
    l: e.l,
    w: e.w,
    t: e.t ?? null,
    q: e.q,
    // Use stock.id to match the id property in the result's stock array
    stockId: e?.stock?.id || e?.stock?.parentId || ""
  };
}
function Al(e) {
  const n = /* @__PURE__ */ new Map();
  for (const t of e)
    t?.parentId && (n.has(t.parentId) || n.set(t.parentId, []), n.get(t.parentId).push({
      q: t.q ?? 1,
      analysis: t.analysis ?? null
    }));
  return n;
}
function $l(e) {
  const n = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  for (const a of e) {
    if (!a?.analysis || !a?.parentId) continue;
    const i = a.parentId, l = a.analysis;
    if (!n.has(i))
      n.set(i, {
        areaEfficiency: l.areaEfficiency ?? 0,
        finishArea: l.finishArea ?? 0,
        bandingLength: l.bandingLength ?? 0,
        partArea: l.partArea ?? 0,
        totalParts: l.totalParts ?? 0,
        stackedNumberOfCuts: l.stackedNumberOfCuts ?? 0,
        numberOfCuts: l.numberOfCuts ?? 0,
        stackedCutLength: l.stackedCutLength ?? 0,
        cutLength: l.cutLength ?? 0,
        rollLength: l.rollLength ?? 0
      }), t.set(i, 1);
    else {
      const u = n.get(i), r = t.get(i) + 1;
      t.set(i, r), n.set(i, {
        // Sum for areaEfficiency (we'll average it at the end)
        areaEfficiency: u.areaEfficiency + (l.areaEfficiency ?? 0),
        // Sum all other fields
        finishArea: u.finishArea + (l.finishArea ?? 0),
        bandingLength: u.bandingLength + (l.bandingLength ?? 0),
        partArea: u.partArea + (l.partArea ?? 0),
        totalParts: u.totalParts + (l.totalParts ?? 0),
        stackedNumberOfCuts: u.stackedNumberOfCuts + (l.stackedNumberOfCuts ?? 0),
        numberOfCuts: u.numberOfCuts + (l.numberOfCuts ?? 0),
        stackedCutLength: u.stackedCutLength + (l.stackedCutLength ?? 0),
        cutLength: u.cutLength + (l.cutLength ?? 0),
        rollLength: u.rollLength + (l.rollLength ?? 0)
      });
    }
  }
  for (const [a, i] of n) {
    const l = t.get(a) ?? 1;
    i.areaEfficiency = Math.round(i.areaEfficiency / l * 100) / 100;
  }
  return n;
}
const Tf = te({
  stockSelection: wr.optional(),
  stackingMode: kr.optional(),
  minSpacing: il.optional()
}).optional(), Mf = te({
  stockType: kn([...Ui]).optional(),
  bladeWidth: ot([
    yr,
    y()
  ]).optional(),
  cutType: br,
  cutPreference: vr,
  stackHeight: hr,
  guillotineOptions: gr,
  efficiencyOptions: mr.optional(),
  options: Tf
}).optional(), Vf = te({
  holes: z().min(0).nullable().optional(),
  corners: z().min(0).nullable().optional()
}).optional(), _f = na.pick({
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
  banding: Pr.nullable().optional(),
  finish: xr.nullable().optional(),
  planing: Sr.nullable().optional(),
  stockId: y().nullable().optional()
}), Df = te({
  stock: we(Gn).default([]),
  parts: we(_f).optional(),
  options: mf,
  type: y().optional(),
  // variable | simple
  materials: we(wf).optional(),
  banding: Bi.nullable().optional(),
  finish: Bi.nullable().optional(),
  planing: Bi.nullable().optional(),
  machining: tt().optional(),
  machiningPricing: Vf,
  // DEPRECATED: bandingPricing, finishPricing, planingPricing are now in banding.pricing, finish.pricing, planing.pricing
  variations: tt().optional(),
  partRules: gf.optional(),
  customValidation: te({
    enabled: Le(),
    rules: we(tt())
  }).optional(),
  saw: Mf,
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
  sawsById: Ue(y(), tt()).optional(),
  stockFilter: te({
    enabled: Le().optional(),
    serverMode: Le().optional(),
    config: es.optional()
  }).optional(),
  // Product catalog configuration
  products: te({
    enabled: Le().optional(),
    showCategories: Le().optional()
  }).optional(),
  // API configuration (for order lookup and other API features)
  api: te({
    baseUrl: y(),
    orgSlug: y(),
    isCustomDomain: Le().optional(),
    // WebSocket origin + org id for the storefront's inventory-change watcher
    // (Vanilla.vue startInventoryWatch). Host integrations inject these from
    // the /config response wrapper (`orgId`) and their deploy env.
    wsServer: y().optional(),
    orgId: y().optional()
  }).optional(),
  // Admin configuration (configurator, etc.)
  config: te({
    configurator: te({
      enabled: Le(),
      url: y().nullable().optional(),
      spec: tt().nullable().optional()
    }).optional()
  }).optional()
});
te({
  slug: y().optional(),
  company: te({
    name: y(),
    contactEmail: y(),
    phone: y().optional(),
    address: y().optional()
  }),
  branding: te({
    logo: y().optional(),
    favicon: y().optional(),
    colors: te({
      button: y(),
      buttonText: y(),
      headerBackground: y().optional(),
      headerText: y().optional(),
      partA: y().optional(),
      partB: y().optional(),
      partSelected: y().optional(),
      stock: y().optional(),
      text: y().optional()
    }),
    showCredit: Le().optional()
  }),
  config: te({
    stockCount: z().optional(),
    stock: we(tt()).optional(),
    materials: we(tt()).optional(),
    options: tt().optional(),
    pricing: tt().optional(),
    banding: tt().optional(),
    finish: tt().optional(),
    planing: tt().optional(),
    machining: tt().optional(),
    bandingPricing: Ue(y(), z()).optional(),
    finishPricing: Ue(y(), z()).optional(),
    planingPricing: Ue(y(), z()).optional(),
    machiningPricing: Ue(y(), z()).optional(),
    saw: tt().optional(),
    shipping: te({
      enabled: Le(),
      originCountry: y().optional()
    }).optional(),
    stockFilter: te({
      config: es.optional()
    }).optional(),
    partRules: tt().optional(),
    customFields: we(tt()).optional(),
    termsUrl: y().optional(),
    termsContent: y().optional(),
    tracking: te({
      gaMeasurementId: y().optional(),
      gtmContainerId: y().optional()
    }).optional(),
    customValidation: te({
      enabled: Le(),
      rules: we(tt())
    }).optional(),
    importSettings: te({
      grouping: kn(["material", "material-variant", "auto"]).optional(),
      codeRegex: y().optional()
    }).optional()
  }),
  stripe: te({
    enabled: Le(),
    publishableKey: y().optional(),
    currency: y().optional()
  }).optional(),
  customerAccounts: te({
    enabled: Le(),
    requireForCheckout: Le().optional()
  }).optional()
});
function jf(e) {
  const n = Df.safeParse(e);
  return {
    success: n.success,
    data: n.success ? n.data : void 0,
    error: n.success ? void 0 : n.error
  };
}
function Bf(e) {
  const n = jf(e);
  if (!n.success) {
    const t = n.error?.issues.map((a) => `${a.path.join(".")}: ${a.message}`).join(", ") || "Unknown validation error";
    throw console.error("Invalid checkout data:", JSON.stringify(e, null, 2)), console.error("Validation errors:", t), new Error(`Invalid checkout data: ${t}`);
  }
  return n.data;
}
function sn(e) {
  return e == null ? !1 : typeof e == "object" && e.value !== void 0 ? e.value : e;
}
function qf(e) {
  if (e.extras?.banding?.sides) {
    const n = e.extras.banding.sides, t = {};
    if (dt(n.a) || dt(n.b) || dt(n.c) || dt(n.d))
      t.x1 = dt(n.a) ? sn(n.a) : !1, t.y1 = dt(n.b) ? sn(n.b) : !1, t.x2 = dt(n.c) ? sn(n.c) : !1, t.y2 = dt(n.d) ? sn(n.d) : !1;
    else {
      const i = Hi(n);
      t.x1 = dt(i.x1) ? sn(i.x1) : !1, t.x2 = dt(i.x2) ? sn(i.x2) : !1, t.y1 = dt(i.y1) ? sn(i.y1) : !1, t.y2 = dt(i.y2) ? sn(i.y2) : !1;
    }
    e.banding = t;
  }
  if (e.extras?.finish?.faces) {
    const n = e.extras.finish.faces, t = {};
    t.a = dt(n.a) ? sn(n.a) : !1, t.b = dt(n.b) ? sn(n.b) : !1, e.finish = t;
  }
  if (e.extras?.planing) {
    const n = e.extras.planing, t = {}, a = Hi(n.sides || {});
    n.sides && (dt(a.x1) && (t.x1 = a.x1), dt(a.x2) && (t.x2 = a.x2), dt(a.y1) && (t.y1 = a.y1), dt(a.y2) && (t.y2 = a.y2)), n.faces && (dt(n.faces.a) && (t.a = n.faces.a), dt(n.faces.b) && (t.b = n.faces.b)), Object.keys(t).length > 0 && (e.planing = t);
  }
  (e.extras?.banding || e.extras?.finish || e.extras?.planing) && delete e.extras;
}
function Rf(e, n = 0) {
  if (n === 0)
    return e;
  if (n === 1 || n === 2) {
    const t = Math.max(e.l, e.w), a = Math.min(e.l, e.w);
    e.w > e.l && (e.l = t, e.w = a);
  }
  return e;
}
function Nl(e, n = 0) {
  debugger;
  return n === 0 || e.forEach((t) => Rf(t, n)), e;
}
function Uf(e) {
  const n = typeof e.weight == "number" && Number.isFinite(e.weight) && e.weight > 0 ? e.weight : null;
  if (n !== null) return n;
  const t = typeof e.density == "number" && Number.isFinite(e.density) && e.density > 0 ? e.density : null, a = typeof e.l == "number" ? e.l : null, i = typeof e.w == "number" ? e.w : null, l = typeof e.t == "number" ? e.t : null;
  if (!t || !a || !i || !l) return null;
  const u = a / 1e3 * (i / 1e3) * (l / 1e3);
  return Math.round(t * u * 100) / 100;
}
function Tl(e) {
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
function Gf(e, n, t, a, i, l, u, r) {
  const f = $l(a), p = Al(a), b = n.map((h) => {
    const A = {
      l: h.l,
      w: h.w,
      t: h?.t ?? null,
      material: h.material ?? null,
      orientationLock: h.orientationLock ?? null,
      q: u?.addedPartTally?.[h.parentId] || h.q,
      name: h.name ?? null,
      customData: h.customData ?? null,
      // Always include extras properties even if not set (using API format)
      banding: tu(),
      finish: Ja(),
      planing: au()
    }, J = { ...h };
    return qf(J), J.banding && (A.banding = J.banding), J.finish && (A.finish = J.finish), J.planing && (A.planing = J.planing), A;
  }), P = t.map((h) => {
    const A = {
      id: h.id,
      name: h?.name ?? null,
      l: h.l,
      w: h.w,
      t: h?.t ?? null,
      material: h.material ?? null,
      code: h?.code ?? null,
      q: u?.usedStockTally?.[h.parentId] || h.q,
      cost: h?.cost ?? null,
      discount: h?.discount ?? null,
      pricingFormula: h?.pricingFormula ?? null,
      analysis: f.get(h.parentId) ?? null,
      sheets: p.get(h.parentId) ?? null,
      customData: h?.customData ?? null
    };
    return h?.trim && (A.trim = Hi(h.trim)), A;
  }), L = {
    parts: l.map((h) => {
      const A = {
        id: h.id ? String(h.id).split(".")[0] : h.id,
        name: h.name,
        l: h.l,
        w: h.w,
        t: h.t ?? null,
        material: h.material,
        q: h.q,
        orientationLock: h.orientationLock ?? null,
        stock: h.stock ?? null,
        customData: h.customData ?? null
      };
      h.extras && (A.extras = {}, h.extras.banding?.sides && (A.extras.banding = { sides: h.extras.banding.sides }), h.extras.finish?.faces && (A.extras.finish = { faces: h.extras.finish.faces }), h.extras.planing && (A.extras.planing = {
        ...h.extras.planing.sides && { sides: h.extras.planing.sides },
        ...h.extras.planing.faces && { faces: h.extras.planing.faces }
      }));
      const J = Tl(h);
      return J && (A.machining = J), A;
    })
  };
  return r && Nl(b, r), {
    jobId: e,
    metadata: u,
    parts: b,
    stock: P,
    offcuts: i?.map(El) || [],
    inputs: L
  };
}
function zf(e, n, t, a, i, l, u, r) {
  const f = $l(a), p = Al(a), b = n.map((h) => {
    const A = {
      l: h.l,
      w: h.w,
      t: h?.t ?? null,
      material: h.material ?? null,
      orientationLock: h.orientationLock ?? null,
      q: u?.addedPartTally?.[h.parentId] || h.q,
      name: h.name ?? null,
      customData: h.customData ?? null,
      // Always include extras structure even if not set (using internal format)
      extras: {
        banding: { sides: Ki() },
        finish: { faces: Ja() },
        planing: nu()
      }
    };
    return h.extras && (h.extras.banding?.sides && (A.extras.banding = { sides: h.extras.banding.sides }), h.extras.finish?.faces && (A.extras.finish = { faces: h.extras.finish.faces }), h.extras.planing && (A.extras.planing = {
      sides: h.extras.planing.sides || Ki(),
      faces: h.extras.planing.faces || Ja()
    })), A;
  }), P = t.map((h) => ({
    id: h.id,
    name: h?.name ?? null,
    l: h.l,
    w: h.w,
    t: h?.t ?? null,
    material: h.material ?? null,
    code: h?.code ?? null,
    q: u?.usedStockTally?.[h.parentId] || h.q,
    trim: h?.trim ?? null,
    // Keep internal format (l1/l2/w1/w2)
    cost: h?.cost ?? null,
    discount: h?.discount ?? null,
    pricingFormula: h?.pricingFormula ?? null,
    analysis: f.get(h.parentId) ?? null,
    sheets: p.get(h.parentId) ?? null,
    // New stock fields
    color: h?.color ?? null,
    density: h?.density ?? null,
    weight: Uf(h),
    imageUrl: h?.imageUrl ?? null,
    tags: h?.tags ?? null,
    available: h?.available ?? null,
    customData: h?.customData ?? null
  })), L = {
    parts: l.map((h) => {
      const A = {
        id: h.id ? String(h.id).split(".")[0] : h.id,
        name: h.name,
        l: h.l,
        w: h.w,
        t: h.t ?? null,
        material: h.material,
        q: h.q,
        orientationLock: h.orientationLock ?? null,
        stock: h.stock ?? null,
        customData: h.customData ?? null
      };
      h.extras && (A.extras = {}, h.extras.banding?.sides && (A.extras.banding = { sides: h.extras.banding.sides }), h.extras.finish?.faces && (A.extras.finish = { faces: h.extras.finish.faces }), h.extras.planing && (A.extras.planing = {
        ...h.extras.planing.sides && { sides: h.extras.planing.sides },
        ...h.extras.planing.faces && { faces: h.extras.planing.faces }
      }));
      const J = Tl(h);
      return J && (A.machining = J), A;
    })
  };
  return r && Nl(b, r), {
    jobId: e,
    metadata: u,
    parts: b,
    stock: P,
    offcuts: i?.map(El) || [],
    inputs: L
  };
}
function Wf(e, n, t) {
  const a = e.sourceCatalogueKey ? n?.pricing || {} : {};
  return e.pricing && typeof e.pricing == "object" ? { ...a, ...e.pricing } : { ...a, [t]: e.price ?? 0 };
}
const Kf = "stockExtras";
function Xm(e, n) {
  !n || typeof n != "object" || (e.resolvedExtras = n);
}
function Ya(e) {
  const n = e?.resolvedExtras;
  if (n && typeof n == "object") return n;
  const t = e?.customData?.[Kf];
  if (t && typeof t == "object") return t;
}
function Ml(e, n) {
  return Ya(e)?.[n];
}
function Hf(e) {
  const n = Ya(e);
  if (!n) return !1;
  for (const t of ["banding", "finish", "planing", "machining"])
    if (n[t]) return !0;
  return !1;
}
function Zf(e) {
  const t = Ml(e, "banding")?.sourceCatalogueKey;
  return typeof t == "string" && t ? t : null;
}
function Jf(e, n) {
  if (n !== "banding") return !1;
  const t = e?.sourceCatalogueKey;
  return typeof t == "string" && t.length > 0;
}
function Qf(e) {
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
function Yf(e) {
  const n = (e.variant || "").trim(), t = (e.material || "").trim();
  if (n && t) return n.toUpperCase();
  if (t) return t.toUpperCase();
  const a = (e.code || "").trim();
  return a ? a.toUpperCase() : (aa(Qf(e), { fallback: "" }).fullLabel || "").toUpperCase();
}
function Xf(e) {
  if (e && typeof e == "object" && "resolvedExtras" in e) {
    const { resolvedExtras: n, ...t } = e;
    return t;
  }
  return e;
}
const ep = ["id", "data-index"], tp = /* @__PURE__ */ ft({
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
    const t = e, a = n, i = U({
      l1: !1,
      l2: !1,
      w1: !1,
      w2: !1
    }), l = () => {
      if (!t.inputShape) return;
      let f = {
        l1: En(t.inputShape, "banding", "side.l1"),
        l2: En(t.inputShape, "banding", "side.l2"),
        w1: En(t.inputShape, "banding", "side.w1"),
        w2: En(t.inputShape, "banding", "side.w2")
      };
      const p = qr(
        t.orientationModel,
        t.stockGrain,
        t.inputShape
      );
      p && (f = Dr(f, p)), i.value = f;
    };
    at([
      () => t.inputShape,
      // Watching the entire inputShape for deep changes
      () => t.orientationModel,
      () => t.stockGrain,
      () => t.inputShape?.orientationLock
      // Still watch orientationLock explicitly if it triggers a re-evaluation
    ], () => {
      l();
    }, { deep: !0, immediate: !0 });
    const u = (f) => {
      (f.key === "Enter" || f.key === " ") && r();
    }, r = () => {
      t.disabled || a("clicked");
    };
    return on(() => {
      document.getElementById(t.id)?.addEventListener("keydown", u);
    }), Xa(() => {
      document.getElementById(t.id)?.removeEventListener("keydown", u);
    }), (f, p) => (C(), M("div", {
      id: e.id,
      class: Xe(["banding-button", { open: e.open, disabled: e.disabled }]),
      "data-field": "banding",
      "data-index": e.index,
      tabindex: "0",
      onClick: r
    }, [
      W("div", {
        class: Xe(["outer", {
          l1: i.value.l1,
          l2: i.value.l2,
          w1: i.value.w1,
          w2: i.value.w2
        }])
      }, [...p[0] || (p[0] = [
        W("div", { class: "inner" }, null, -1)
      ])], 2)
    ], 10, ep));
  }
}), np = /* @__PURE__ */ Qt(tp, [["__scopeId", "data-v-00282421"]]), ap = {
  key: 0,
  class: "material-picker__selected"
}, ip = ["src", "alt"], sp = ["title"], lp = { class: "material-picker__selected-stack" }, op = { class: "material-picker__selected-line" }, rp = { class: "material-picker__selected-name" }, up = {
  key: 0,
  class: "c-badge c-badge--light c-badge--sm material-picker__brand"
}, cp = {
  key: 0,
  class: "material-picker__selected-code"
}, dp = {
  key: 1,
  class: "material-picker__placeholder"
}, fp = { class: "material-picker__search-wrap" }, pp = ["placeholder"], mp = {
  key: 0,
  class: "material-picker__search-spinner",
  "aria-hidden": "true"
}, gp = {
  class: "material-picker__list",
  role: "listbox"
}, hp = {
  key: 0,
  class: "material-picker__empty"
}, vp = ["aria-selected", "onMousedown", "onMouseenter"], bp = ["src", "alt"], yp = ["title"], kp = { class: "material-picker__selected-stack" }, wp = { class: "material-picker__selected-line" }, Sp = { class: "material-picker__selected-name" }, xp = {
  key: 0,
  class: "c-badge c-badge--light c-badge--sm material-picker__brand"
}, Pp = {
  key: 0,
  class: "material-picker__selected-code"
}, Cp = /* @__PURE__ */ ft({
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
    const t = e, a = n, i = U(), l = U(), u = U(), r = U(!1), f = U(""), p = U(0), b = U(!1);
    let P = null, L = null;
    const h = U([]), A = /* @__PURE__ */ new Map(), J = U(null), ue = E(() => t.id || `material-picker-${Math.random().toString(36).slice(2, 8)}`), D = E(() => t.modelValue !== void 0 && t.modelValue !== null ? t.modelValue : t.value !== void 0 && t.value !== null ? t.value : null), { floatingStyles: B, teleportTarget: me, syncFloatingFont: Q } = vl(
      i,
      l,
      {
        sizeApply({ rects: _, availableWidth: ee, availableHeight: be, elements: De }) {
          const ne = _.reference.width, ve = Math.min(ee, Math.max(ne, 360));
          Object.assign(De.floating.style, {
            maxHeight: `${Math.max(200, be)}px`,
            minWidth: `${ne}px`,
            width: `${ve}px`,
            maxWidth: `${ee}px`
          });
        }
      },
      r
    ), v = E(() => Array.isArray(t.options));
    function N(_) {
      return _.map((ee, be) => {
        const De = aa(ee, { fallback: ee.name }), ne = [De.fullLabel, ee.code, ee.displayName].filter(Boolean).join(" ").toLowerCase(), ve = ee._id || `idx-${be}`;
        return { ...ee, _key: `${De.groupKey}|${ve}`, _summary: De, _haystack: ne };
      });
    }
    const X = E(() => v.value ? N(t.options ?? []) : []), $ = E(() => v.value ? [] : N(h.value)), G = E(() => {
      if (v.value) {
        const _ = f.value.trim().toLowerCase();
        return _ ? X.value.filter((ee) => ee._haystack.includes(_)) : X.value;
      }
      return $.value;
    }), x = E(() => {
      const _ = D.value;
      if (!_) return null;
      if (v.value) {
        const De = _.toUpperCase(), ve = X.value.find(
          (Ne) => typeof Ne.code == "string" && Ne.code.toUpperCase() === De
        ) || X.value.find((Ne) => Z(Ne) === _);
        if (ve) return ve;
      } else if (J.value && Z(J.value) === _)
        return N([J.value])[0];
      const ee = { name: _ }, be = aa(ee, { fallback: _ });
      return { ...ee, _key: `${be.groupKey}|stub`, _summary: be, _haystack: "" };
    });
    function Z(_) {
      const ee = t.valueKey === "_id" ? _._id : _.name;
      return ee != null ? String(ee) : null;
    }
    function le(_) {
      return Z(_) === D.value;
    }
    function fe() {
      t.disabled || t.readonly || (r.value = !r.value, r.value && (f.value = "", p.value = 0, jt(() => {
        Q(), u.value?.focus(), !v.value && h.value.length === 0 && Ke("");
      })));
    }
    function oe(_) {
      J.value = _;
      const ee = Z(_);
      a("update:modelValue", ee), a("update:value", ee), a("select", _), r.value = !1, f.value = "";
    }
    function Je() {
      J.value = null, a("update:modelValue", null), a("update:value", null), a("clear");
    }
    async function Ke(_) {
      if (!t.searchFn) return;
      const ee = _.toLowerCase(), be = A.get(ee);
      if (be) {
        h.value = be;
        return;
      }
      if (_.length > 0 && _.length < t.minQueryLength) {
        h.value = [];
        return;
      }
      L && L.abort(), L = new AbortController(), b.value = !0;
      try {
        const De = await t.searchFn(_);
        A.set(ee, De), h.value = De;
      } catch (De) {
        if (De?.name === "CanceledError" || De?.code === "ERR_CANCELED") return;
        h.value = [];
      } finally {
        b.value = !1;
      }
    }
    function Se() {
      v.value || (P && clearTimeout(P), P = setTimeout(
        () => Ke(f.value),
        t.debounceMs
      ));
    }
    at(D, async (_) => {
      if (!v.value) {
        if (!_ || !t.loadFn) {
          J.value = null;
          return;
        }
        if (Z(J.value ?? {}) !== _)
          try {
            const ee = await t.loadFn(_);
            ee && (J.value = ee, a("loaded", ee));
          } catch {
          }
      }
    }, { immediate: !0 }), on(() => {
      if (v.value && D.value) {
        const _ = X.value.find((ee) => Z(ee) === D.value);
        _ && a("loaded", _);
      }
    });
    function Fe(_) {
      switch (_.key) {
        case "ArrowDown":
          _.preventDefault(), p.value < G.value.length - 1 && p.value++;
          break;
        case "ArrowUp":
          _.preventDefault(), p.value > 0 && p.value--;
          break;
        case "Enter":
          _.preventDefault(), G.value[p.value] && oe(G.value[p.value]);
          break;
        case "Escape":
          _.preventDefault(), r.value = !1;
          break;
      }
    }
    function mt(_) {
      if (!r.value) return;
      const ee = _.target;
      i.value?.contains(ee) || l.value?.contains(ee) || (r.value = !1);
    }
    return at(r, (_) => {
      _ ? document.addEventListener("mousedown", mt) : document.removeEventListener("mousedown", mt);
    }), ti(() => {
      document.removeEventListener("mousedown", mt), P && clearTimeout(P), L && L.abort();
    }), at(G, () => {
      p.value = 0;
    }), (_, ee) => (C(), M("div", {
      class: Xe(["input-wrapper material-picker", { issue: e.issue, required: e.required, disabled: e.disabled, focused: r.value }])
    }, [
      e.label && e.enableLabel ? (C(), Ee(ya, {
        key: 0,
        id: ue.value,
        label: e.label,
        required: e.required
      }, {
        default: tn(() => [
          Zt(_.$slots, "label", {}, () => [
            qt(he(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["id", "label", "required"])) : ae("", !0),
      W("div", {
        ref_key: "triggerRef",
        ref: i,
        class: Xe(["material-picker__wrapper", { focused: r.value, empty: !x.value }]),
        onClick: fe
      }, [
        x.value ? (C(), M("div", ap, [
          x.value._summary.imageUrl ? (C(), M("img", {
            key: 0,
            src: x.value._summary.imageUrl,
            class: "material-picker__thumb material-picker__thumb--lazy",
            loading: "lazy",
            alt: x.value._summary.productLabel,
            onLoad: ee[0] || (ee[0] = (be) => be.target.classList.add("material-picker__thumb--loaded"))
          }, null, 40, ip)) : x.value.colorHex ? (C(), M("span", {
            key: 1,
            class: "material-picker__swatch",
            style: Ht({ background: x.value.colorHex }),
            title: x.value.color || "",
            "aria-hidden": "true"
          }, null, 12, sp)) : ae("", !0),
          W("span", lp, [
            W("span", op, [
              W("span", rp, he(x.value._summary.productLabel), 1),
              x.value._summary.brand ? (C(), M("span", up, he(x.value._summary.brand), 1)) : ae("", !0)
            ]),
            x.value._summary.code ? (C(), M("span", cp, he(x.value._summary.code), 1)) : ae("", !0)
          ])
        ])) : (C(), M("span", dp, he(e.placeholder || "Select…"), 1)),
        x.value && !e.disabled && e.allowClear ? (C(), M("button", {
          key: 2,
          type: "button",
          class: "c-btn c-btn--xs c-btn--unstyled field-clear-btn material-picker__clear",
          "aria-label": "Clear selection",
          onClick: Fn(Je, ["stop"])
        }, "×")) : ae("", !0)
      ], 2),
      (C(), Ee(ei, {
        to: F(me),
        disabled: !F(me)
      }, [
        r.value ? (C(), M("div", {
          key: 0,
          ref_key: "floatingRef",
          ref: l,
          class: "material-picker__dropdown",
          style: Ht(F(B)),
          onMousedown: ee[4] || (ee[4] = Fn(() => {
          }, ["prevent"]))
        }, [
          W("div", fp, [
            ee[5] || (ee[5] = W("span", {
              class: "material-picker__search-icon",
              "aria-hidden": "true"
            }, "⌕", -1)),
            ni(W("input", {
              ref_key: "searchRef",
              ref: u,
              "onUpdate:modelValue": ee[1] || (ee[1] = (be) => f.value = be),
              type: "text",
              class: "material-picker__search",
              placeholder: e.searchPlaceholder,
              onMousedown: ee[2] || (ee[2] = Fn(() => {
              }, ["stop"])),
              onInput: Se,
              onKeydown: Fe
            }, null, 40, pp), [
              [Zs, f.value]
            ]),
            b.value ? (C(), M("span", mp, "…")) : ae("", !0)
          ]),
          W("div", gp, [
            G.value.length === 0 ? (C(), M("div", hp, he(e.emptyMessage), 1)) : ae("", !0),
            (C(!0), M(kt, null, Rt(G.value, (be, De) => (C(), M("div", {
              key: be._key,
              class: Xe(["material-picker__option", {
                highlighted: De === p.value,
                selected: le(be)
              }]),
              role: "option",
              "aria-selected": le(be),
              onMousedown: Fn((ne) => oe(be), ["prevent"]),
              onMouseenter: (ne) => p.value = De
            }, [
              be._summary.imageUrl ? (C(), M("img", {
                key: 0,
                src: be._summary.imageUrl,
                class: "material-picker__thumb material-picker__thumb--lazy",
                loading: "lazy",
                alt: be._summary.productLabel,
                onLoad: ee[3] || (ee[3] = (ne) => ne.target.classList.add("material-picker__thumb--loaded"))
              }, null, 40, bp)) : be.colorHex ? (C(), M("span", {
                key: 1,
                class: "material-picker__swatch",
                style: Ht({ background: be.colorHex }),
                title: be.color || "",
                "aria-hidden": "true"
              }, null, 12, yp)) : ae("", !0),
              W("span", kp, [
                W("span", wp, [
                  W("span", Sp, he(be._summary.productLabel), 1),
                  be._summary.brand ? (C(), M("span", xp, he(be._summary.brand), 1)) : ae("", !0)
                ]),
                be._summary.code ? (C(), M("span", Pp, he(be._summary.code), 1)) : ae("", !0)
              ])
            ], 42, vp))), 128))
          ])
        ], 36)) : ae("", !0)
      ], 8, ["to", "disabled"]))
    ], 2));
  }
}), Op = /* @__PURE__ */ Qt(Cp, [["__scopeId", "data-v-f53d72d8"]]), Ip = ["id", "data-index", "disabled"], Lp = /* @__PURE__ */ ft({
  __name: "FinishButton",
  props: {
    inputShape: { default: null },
    open: { type: Boolean, default: !1 },
    id: { default: "" },
    disabled: { type: Boolean, default: !1 },
    index: { default: 0 }
  },
  emits: ["clicked"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = E(() => t.inputShape ? En(t.inputShape, "finish", "face.a") : !1), l = E(() => t.inputShape ? En(t.inputShape, "finish", "face.b") : !1), u = () => {
      t.disabled || a("clicked");
    };
    return (r, f) => {
      const p = zn("FontAwesomeIcon");
      return C(), M("button", {
        id: e.id,
        class: Xe(["c-btn finish-button", {
          "face-a": i.value,
          // Use computed property
          "face-b": l.value,
          // Use computed property
          selected: e.open
        }]),
        "data-field": "finish",
        "data-index": e.index,
        type: "button",
        tabindex: "0",
        disabled: e.disabled,
        onClick: u
      }, [
        it(p, { icon: ["fass", "spray-can"] })
      ], 10, Ip);
    };
  }
});
function Fp(e) {
  return e.machining ? "toData" in e.machining ? e.machining.toData() : e.machining : { holes: [], hingeHoles: [], corners: {} };
}
function Ep(e) {
  const n = Fp(e);
  return n ? !!(n.holes && n.holes.length > 0 || n.hingeHoles && n.hingeHoles.length > 0 || n.corners && Object.values(n.corners).some((t) => t && t.type && t.size > 0)) : !1;
}
const Ap = ft({
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
      return Ep(this.inputShape);
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
}), $p = ["id", "disabled"];
function Np(e, n, t, a, i, l) {
  const u = zn("FontAwesomeIcon");
  return C(), M("button", {
    id: e.id,
    class: Xe(["c-btn machining-button", { selected: e.hasMachining }]),
    type: "button",
    disabled: e.disabled,
    onClick: n[0] || (n[0] = (...r) => e.openMachining && e.openMachining(...r))
  }, [
    it(u, { icon: ["fass", "hammer"] })
  ], 10, $p);
}
const Tp = /* @__PURE__ */ Qt(Ap, [["render", Np]]), Mp = ft({
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
}), Vp = ["id", "disabled"];
function _p(e, n, t, a, i, l) {
  const u = zn("FontAwesomeIcon");
  return C(), M("button", {
    id: e.id,
    class: Xe(["c-btn custom-products-button", { selected: e.hasSelections }]),
    type: "button",
    disabled: e.disabled,
    onClick: n[0] || (n[0] = (...r) => e.open && e.open(...r))
  }, [
    it(u, { icon: ["fass", "box"] })
  ], 10, Vp);
}
const Dp = /* @__PURE__ */ Qt(Mp, [["render", _p]]), jp = ["id"], Bp = {
  key: 0,
  class: "del",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, qp = {
  key: 1,
  class: "no-change",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Rp = {
  key: 2,
  class: "arrow",
  viewBox: "0 0 67 63",
  xmlns: "http://www.w3.org/2000/svg"
}, Up = {
  key: 3,
  class: "arrow",
  viewBox: "0 0 72 39",
  xmlns: "http://www.w3.org/2000/svg"
}, Gp = {
  key: 4,
  class: "arrow",
  viewBox: "0 0 39 72",
  xmlns: "http://www.w3.org/2000/svg"
}, zp = {
  key: 5,
  class: "grain",
  viewBox: "0 0 106 64",
  xmlns: "http://www.w3.org/2000/svg"
}, Wp = {
  key: 6,
  class: "grain",
  viewBox: "0 0 64 106",
  xmlns: "http://www.w3.org/2000/svg"
}, Ks = /* @__PURE__ */ ft({
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
    const t = e, a = n, i = U(0), l = U(!1), u = ($, G, x, Z) => {
      if (!Ye(x) || G === 0)
        return $;
      const le = r();
      return G === 1 || G === 2 && Z !== "n" && $ ? le : $;
    }, r = ($) => {
      const G = { ...t, ...$ };
      if (!G.rectangle || !Ye(G.rectangle)) return "";
      let x = "";
      switch (G.orientationModel) {
        case 0:
          x = me.value;
          break;
        case 1:
          G.stockGrain === "y" || G.stockGrain === "n" ? x = G.rectangle.l >= G.rectangle.w ? "l" : "w" : G.rectangle.l >= G.rectangle.w ? x = G.stockGrain : x = x = G.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          x = G.rectangle.l >= G.rectangle.w ? "l" : "w";
          break;
      }
      return x;
    }, f = () => {
      if (t.disabled || D.value.length <= 1)
        return;
      const $ = p(me.value);
      "multiEdit" in t.rectangle && t.rectangle.multiEdit && me.value === "" && i.value !== $ && i.value === 0 && (i.value = $);
      let x = null;
      [1, 2].includes(t.orientationModel) ? x = P() : x = b(), i.value = x;
    }, p = ($) => {
      const G = D.value.findIndex((x) => x === $);
      return G === -1 ? 0 : G;
    }, b = () => {
      let $ = i.value + 1;
      return $ > D.value.length - 1 && ($ = 0), $;
    }, P = () => {
      let $ = 0;
      if (me.value === "") {
        const G = r();
        $ = D.value.findIndex((x) => x === G);
      } else
        $ = D.value.findIndex((G) => G === "");
      return $;
    }, L = ($) => {
      a("updateOrientation", $);
    }, h = () => {
      const $ = me.value;
      if ("multiEdit" in t.rectangle && t.rectangle.multiEdit)
        return $ === " " ? " " : $ === "" ? "" : $ === "l" ? "l" : $ === "w" ? "w" : "default";
      switch (t.orientationModel) {
        case 0:
          return $ === " " ? " " : $ ? t.stockGrain === "n" ? $ || t.shapeOrientation || "default" : t.stockGrain === "w" ? $ === "w" ? "w" : "l" : $ === "l" ? "l" : "w" : "default";
        case 1:
          return $ === " " ? " " : $ ? t.stockGrain === "n" ? $ || t.shapeOrientation || "default" : t.stockGrain === "w" ? $ === "w" ? "w" : "l" : $ === "l" ? "l" : "w" : "default";
        case 2:
          return $ === " " ? " " : $ ? t.stockGrain === "n" ? $ || t.shapeOrientation || "default" : t.stockGrain === "w" ? $ === "w" ? "w" : "l" : $ === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, A = () => {
      if (!t.rectangle)
        return;
      if ("multiEdit" in t.rectangle && t.rectangle.multiEdit && !me.value) {
        ue("");
        return;
      }
      const $ = u(
        me.value,
        t.orientationModel,
        t.rectangle,
        t.stockGrain
      );
      if ($ !== me.value) {
        ue($);
        return;
      }
      if (!l.value || i.value === -1) {
        const G = p(me.value);
        i.value = G;
      }
      if (Ye(t.rectangle)) {
        if (t.orientationModel === 1) {
          const G = v.value ? r() : me.value;
          ue(G);
          return;
        }
        if (t.orientationModel === 2) {
          let G;
          v.value ? G = t.stockGrain !== "n" ? r() : "" : G = me.value, ue(G);
        }
      }
    }, J = U(!1), ue = ($) => {
      const G = p($);
      J.value = !0, i.value = G, J.value = !1, L($);
    }, D = E(() => {
      if (!t.rectangle) return ["l", "w"];
      if (Ln(t.rectangle)) return ["l", "w"];
      let $ = ["", "l", "w"];
      return t.rectangle.multiEdit ? [" ", "", "l", "w"] : (B.value && ($ = $.filter((G) => G !== "w")), $);
    }), B = E(() => Ye(t.rectangle) || Oi(t.rectangle) ? t.rectangle.isSquare : t.rectangleType && t.rectangle?.l && t.rectangle?.w ? t.rectangle?.l === t.rectangle?.w : !1), me = E(() => {
      let $ = "";
      if (Ln(t.rectangle))
        $ = t.rectangle.direction === "horizontal" ? "l" : "w";
      else if (Ye(t.rectangle)) {
        const G = t.rectangle.orientationLock;
        $ = G === null ? "" : G;
      } else if (Oi(t.rectangle)) {
        const x = t.rectangle.grain ?? "";
        x === "l" || x === "w" || x === "" || x === " " ? $ = x : $ = "";
      }
      return $;
    }), Q = E(() => Ln(t.rectangle) || !t.rectangle ? {
      l: null,
      w: null
    } : {
      l: t.rectangle.l,
      w: t.rectangle.w
    }), v = E(() => !Q.value.l && !Q.value.w), N = E(() => Ln(t.rectangle) ? !1 : Ua(
      t.orientationModel,
      t.stockGrain,
      t.rectangle,
      t.rectangleType,
      t.shapeOrientation
    )), X = E(() => {
      if (!t.rectangle)
        return t.shapeOrientation ? "noGrain" : "freeRotation";
      if (Oi(t.rectangle) || t.rectangleType === "stock") {
        const le = t.rectangle.grain;
        return "multiEdit" in t.rectangle && t.rectangle.multiEdit ? {
          " ": "noGrain",
          // Clear to no grain
          "": "noChange",
          // No change
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[le] || "noGrain" : {
          "": "noGrain",
          // No grain
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[le] || "noGrain";
      }
      const $ = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, G = t.stockGrain || "default";
      let x = "default";
      Ye(t.rectangle) || t.rectangleType === "shape" ? x = h() : Ln(t.rectangle) && (x = t.rectangle.direction || "default");
      const Z = $[G]?.[x];
      return Z || $[G]?.default || "freeRotation";
    });
    return at(i, ($, G) => {
      l.value && G !== void 0 && (J.value || L(D.value[$]));
    }, { immediate: !1 }), at(Q, ($, G) => {
      if (!t.rectangle || t.orientationModel === 0 || !Ye(t.rectangle) || Ye(t.rectangle) && (t.orientationModel === 2 && G.l && G.w && !me.value || t.stockGrain === "n" && !me.value))
        return;
      const x = r();
      me.value !== x && L(x);
    }, { immediate: !1 }), at(() => t.stockGrain, ($, G) => {
      $ !== G && A();
    }, { immediate: !0 }), on(() => {
      A(), jt(() => l.value = !0);
    }), ($, G) => (C(), M("button", {
      type: "button",
      id: e.id,
      class: Xe(["c-btn orientation-button", { rot: N.value, square: B.value, disabled: e.disabled, [X.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      onClick: f
    }, [
      X.value === "delete" ? (C(), M("svg", Bp, [...G[0] || (G[0] = [
        W("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ])])) : ae("", !0),
      X.value === "noChange" ? (C(), M("svg", qp, [...G[1] || (G[1] = [
        W("path", {
          d: "M5 12h14",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        }, null, -1)
      ])])) : ae("", !0),
      X.value === "freeRotation" ? (C(), M("svg", Rp, [...G[2] || (G[2] = [
        W("g", null, [
          W("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          W("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          W("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          W("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ])])) : ae("", !0),
      X.value === "leftRight" ? (C(), M("svg", Up, [...G[3] || (G[3] = [
        W("g", null, [
          W("path", { d: "m5.408 19.408h61.095" }),
          W("g", null, [
            W("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            W("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ])])) : ae("", !0),
      X.value === "topBottom" ? (C(), M("svg", Gp, [...G[4] || (G[4] = [
        W("g", null, [
          W("path", { d: "m19.408 66.503v-61.095" }),
          W("g", null, [
            W("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            W("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ])])) : ae("", !0),
      X.value === "grainLeftRight" ? (C(), M("svg", zp, [...G[5] || (G[5] = [
        W("g", null, [
          W("path", { d: "m3 3h99.887" }),
          W("path", { d: "m3.113 32h99.887" }),
          W("path", { d: "m3.113 61h99.887" })
        ], -1)
      ])])) : ae("", !0),
      X.value === "grainTopBottom" ? (C(), M("svg", Wp, [...G[6] || (G[6] = [
        W("g", null, [
          W("path", { d: "m61 3v99.887" }),
          W("path", { d: "m32 3.113v99.887" }),
          W("path", { d: "m3 3.113v99.887" })
        ], -1)
      ])])) : ae("", !0)
    ], 10, jp));
  }
}), Kp = ["id", "data-index", "disabled"], Hp = /* @__PURE__ */ ft({
  __name: "PlaningButton",
  props: {
    inputShape: { default: null },
    open: { type: Boolean, default: !1 },
    id: { default: "" },
    disabled: { type: Boolean, default: !1 },
    index: { default: 0 }
  },
  emits: ["clicked"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = E(() => t.inputShape ? En(t.inputShape, "planing", "face.a") : !1), l = E(() => t.inputShape ? En(t.inputShape, "planing", "face.b") : !1), u = () => {
      t.disabled || a("clicked");
    };
    return (r, f) => {
      const p = zn("FontAwesomeIcon");
      return C(), M("button", {
        id: e.id,
        class: Xe(["c-btn planing-button", {
          "face-a": i.value,
          "face-b": l.value,
          selected: e.open
        }]),
        "data-field": "planing",
        "data-index": e.index,
        type: "button",
        tabindex: "0",
        disabled: e.disabled,
        onClick: u
      }, [
        it(p, { icon: ["fass", "hammer"] })
      ], 10, Kp);
    };
  }
});
function Zp(e, n, t) {
  let a = null;
  at(
    () => e.value ? { l: e.value.l, w: e.value.w } : null,
    (i) => {
      const l = typeof n == "number" ? n : n.value;
      if (!jr(l) || !i || !e.value) return;
      const u = i.w > i.l;
      if (a === null) {
        a = u;
        return;
      }
      if (a !== u) {
        const r = Br(l);
        for (const f of r)
          Cr(e.value, f);
        a = u;
      }
    },
    { immediate: !0 }
  );
}
const Jp = {
  key: 0,
  class: "info"
}, Qp = ["disabled"], Yp = /* @__PURE__ */ ft({
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
    const t = e, a = n, i = E(() => t.field.name === "banding" && Ye(t.item) ? t.item : null);
    Zp(i, Kt(t, "orientationModel"));
    const l = ["orientationLock", "grain", "banding", "bandingOptions", "machining", "finish", "planing", "imageUpload"], u = E(() => l.includes(t.field.name) || t.field.name === "material" && t.typePrefix === "part" || t.field.name === "t" && t.thicknessOptions?.length > 0 || t.field.name === "w" && t.widthOptions?.length > 0), r = E(() => {
      try {
        const v = t.field.propertyPath || t.field.name;
        return v.includes(".") ? ln(t.item, v) ?? null : t.item[v] ?? null;
      } catch (v) {
        return console.error("[CheckoutField] Error getting field value:", v), null;
      }
    }), f = E(() => {
      if (t.field.custom && t.field.type) {
        const X = t.field.type;
        if (["checkbox", "select", "string", "integer", "unitDependent"].includes(X))
          return X;
      }
      const v = {
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
      const N = v[t.field.type];
      return N || "string";
    }), p = E(() => t.field.output ? t.field.output : null), b = E(() => t.field.options || []), P = E(() => !!(t.readonly || t.item?.readonly || t.fullStockDisabled)), L = E(() => t.item.isNew ? !1 : Ls(t.item, [t.field.name])), h = E(() => t.item.isNew ? !1 : Ls(t.item, [t.field.name], !0)), A = E(() => t.multiEdit || t.item.isNew || !1), J = E(() => t.materialOptions?.length > 0 && Ye(t.item) ? !t.item.material : !1), ue = E(() => t.widthOptions?.length === 1), D = E(() => t.field.info ? typeof t.field.info == "string" ? t.field.info : typeof t.field.info == "object" && r.value !== null && t.field.info[r.value] || null : null), B = (v) => {
      a("update", v);
    }, me = (v, N) => {
      a("validation", v, N);
    }, Q = () => {
      a("blur");
    };
    return (v, N) => u.value ? (C(), M(kt, { key: 1 }, [
      e.field.name === "orientationLock" ? (C(), Ee(Ks, {
        key: 0,
        rectangle: e.item,
        "stock-grain": e.stockGrain,
        "orientation-model": e.orientationModel,
        "button-background": "#2c8d8f",
        disabled: P.value,
        onUpdateOrientation: B
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : e.field.name === "grain" ? (C(), Ee(Ks, {
        key: 1,
        rectangle: e.item,
        "button-background": "#2c8d8f",
        "stock-grain": e.stockGrain,
        "orientation-model": e.orientationModel,
        disabled: P.value,
        onUpdateOrientation: B
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : e.field.name === "banding" ? (C(), Ee(np, {
        key: 2,
        "input-shape": F(Ye)(e.item) ? e.item : null,
        open: e.bandingEnabled?.autoId === e.item.autoId,
        "stock-grain": e.stockGrain,
        "orientation-model": e.orientationModel,
        index: e.index,
        disabled: P.value || e.materialExtrasDisabled?.banding,
        onClicked: N[0] || (N[0] = (X) => v.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "orientation-model", "index", "disabled"])) : e.field.name === "finish" ? (C(), Ee(Lp, {
        key: 3,
        "input-shape": F(Ye)(e.item) ? e.item : null,
        open: !1,
        index: e.index,
        disabled: P.value || e.materialExtrasDisabled?.finish,
        onClicked: N[1] || (N[1] = (X) => v.$emit("open-finish"))
      }, null, 8, ["input-shape", "index", "disabled"])) : e.field.name === "planing" ? (C(), Ee(Hp, {
        key: 4,
        "input-shape": F(Ye)(e.item) ? e.item : null,
        open: !1,
        index: e.index,
        disabled: P.value || e.materialExtrasDisabled?.planing,
        onClicked: N[2] || (N[2] = (X) => v.$emit("open-planing"))
      }, null, 8, ["input-shape", "index", "disabled"])) : e.field.name === "machining" ? (C(), Ee(Tp, {
        key: 5,
        "input-shape": F(Ye)(e.item) ? e.item : null,
        disabled: P.value || e.materialExtrasDisabled?.machining,
        onOpen: N[3] || (N[3] = (X) => v.$emit("open-machining"))
      }, null, 8, ["input-shape", "disabled"])) : e.field.name === "customProducts" ? (C(), Ee(Dp, {
        key: 6,
        "input-shape": F(Ye)(e.item) ? e.item : null,
        disabled: P.value,
        onOpen: N[4] || (N[4] = (X) => v.$emit("open-custom-products"))
      }, null, 8, ["input-shape", "disabled"])) : e.field.name === "material" && e.typePrefix === "part" && e.materialItems && e.materialItems.length > 0 ? (C(), Ee(Op, {
        key: 7,
        id: `${e.typePrefix}-material-${e.index}`,
        value: r.value,
        options: e.materialItems,
        "value-key": "name",
        label: F(Ie)(e.field.label || "fields.material"),
        placeholder: F(Ie)(e.field.placeholder || "fields.material"),
        "enable-label": !1,
        disabled: e.field.disabled || P.value || e.readonly,
        required: e.field.required || !1,
        issue: L.value,
        "allow-clear": !1,
        "onUpdate:value": B
      }, null, 8, ["id", "value", "options", "label", "placeholder", "disabled", "required", "issue"])) : e.field.name === "material" && e.typePrefix === "part" ? (C(), Ee(ka, {
        key: 8,
        id: `${e.typePrefix}-material-${e.index}`,
        "data-field": e.field.name,
        "data-index": e.index,
        type: "select",
        value: r.value,
        label: F(Ie)(e.field.label || "fields.material"),
        placeholder: F(Ie)(e.field.placeholder || "fields.material"),
        "enable-label": !1,
        output: "string",
        options: e.materialOptions,
        "select-first-option-disabled": !0,
        disabled: !e.materialOptions?.length,
        required: !1,
        text: {
          select: F(Ie)("actions.select"),
          delete: F(Ie)("actions.delete")
        },
        "onUpdate:value": B,
        onValidation: me
      }, {
        default: tn(() => [
          Zt(v.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : e.field.name === "t" && e.thicknessOptions?.length > 0 ? (C(), Ee(ka, {
        key: 9,
        id: `${e.typePrefix}-${e.field.name}-${e.index}`,
        "data-field": e.field.name,
        "data-index": e.index,
        type: "select",
        value: r.value,
        label: F(Ie)(e.field.label || "fields.t"),
        "enable-label": !1,
        options: e.thicknessOptions,
        readonly: e.readonly,
        disabled: J.value,
        required: e.field.required || !1,
        "number-format": e.numberFormat,
        text: {
          select: F(Ie)("actions.select"),
          delete: F(Ie)("actions.delete")
        },
        output: "number",
        "onUpdate:value": B,
        onValidation: me
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : e.field.name === "w" && e.widthOptions?.length > 0 ? (C(), Ee(ka, {
        key: 10,
        id: `${e.typePrefix}-${e.field.name}-${e.index}`,
        "data-field": e.field.name,
        "data-index": e.index,
        type: "select",
        value: r.value,
        label: F(Ie)(e.field.label || "fields.w"),
        "enable-label": !1,
        options: e.widthOptions,
        readonly: e.readonly,
        disabled: ue.value,
        required: e.field.required || !1,
        "number-format": e.numberFormat,
        text: {
          select: F(Ie)("actions.select"),
          delete: F(Ie)("actions.delete")
        },
        output: "number",
        "onUpdate:value": B,
        onValidation: me
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : e.field.name === "imageUpload" ? (C(), M("button", {
        key: 11,
        type: "button",
        disabled: e.readonly,
        onClick: N[5] || (N[5] = (X) => v.$emit("open-image-upload"))
      }, [
        it(F(Ha), { icon: ["fass", "image"] })
      ], 8, Qp)) : ae("", !0)
    ], 64)) : (C(), Ee(ka, {
      key: 0,
      id: `${e.typePrefix}-${e.field.name}-${e.index}`,
      "data-field": e.field.name,
      "data-index": e.index,
      type: f.value,
      value: r.value,
      label: F(Ie)(e.field.label || e.field.name),
      placeholder: F(Ie)(e.field.placeholder || e.field.name),
      "enable-label": e.enableLabel,
      output: p.value,
      options: b.value,
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
      issue: L.value,
      warning: h.value,
      "disable-required-validation": A.value,
      "onUpdate:value": B,
      onValidation: me,
      onBlur: Q
    }, {
      default: tn(() => [
        D.value ? (C(), M("p", Jp, [
          it(F(Ha), { icon: ["fass", "info-circle"] }),
          qt(" " + he(D.value), 1)
        ])) : ae("", !0),
        Zt(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "data-field", "data-index", "type", "value", "label", "placeholder", "enable-label", "output", "options", "select-first-option-disabled", "disabled", "readonly", "required", "allow-zero", "true-value", "false-value", "default", "number-format", "min", "max", "multi-edit", "text", "issue", "warning", "disable-required-validation"]));
  }
}), Xp = {
  key: 0,
  class: "base-dialog__header"
}, em = {
  key: 1,
  class: "base-dialog__footer"
}, tm = /* @__PURE__ */ ft({
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
    const a = e, i = t, l = U(null), u = U(null), r = U(null), f = U({}), p = !1;
    function b() {
      const Q = r.value;
      if (!Q) return;
      const v = getComputedStyle(Q);
      f.value = {
        "font-family": v.fontFamily,
        "font-size": v.fontSize,
        "line-height": v.lineHeight,
        color: v.color
      };
    }
    const P = window.__baseDialogStack ?? (window.__baseDialogStack = U([])), L = /* @__PURE__ */ Symbol("base-dialog"), h = E(() => P.value.indexOf(L)), A = E(() => ({
      "base-dialog__body--form": a.bodyForm,
      "smartcut-content": a.compact
    })), J = E(() => ({ ...f.value }));
    function ue() {
      const Q = l.value;
      if (!Q || Q.open) return;
      b(), Q.showModal(), P.value.includes(L) || P.value.push(L);
      const v = document.getElementById("smartcut-notices");
      v?.matches(":popover-open") && (v.hidePopover(), v.showPopover()), i("opened");
    }
    function D() {
      const Q = l.value;
      !Q || !Q.open || Q.close();
    }
    function B() {
      const Q = P.value.indexOf(L);
      Q >= 0 && P.value.splice(Q, 1), i("update:open", !1), i("closed");
    }
    function me(Q) {
      a.closeOnBackdrop && Q.target === l.value && D();
    }
    return at(() => a.open, (Q, v) => {
      Q !== void 0 && (Q && !v ? ue() : !Q && v && D());
    }), on(() => {
      a.open === !0 && ue();
    }), ti(() => {
      l.value?.open && l.value.close();
      const Q = P.value.indexOf(L);
      Q >= 0 && P.value.splice(Q, 1);
    }), n({
      show: ue,
      close: D,
      dialogRef: l,
      bodyRef: u
    }), (Q, v) => (C(), M(kt, null, [
      W("span", {
        ref_key: "anchorRef",
        ref: r,
        class: "base-dialog__anchor",
        "aria-hidden": "true"
      }, null, 512),
      (C(), Ee(ei, {
        to: "body",
        disabled: p
      }, [
        W("dialog", {
          ref_key: "dialogRef",
          ref: l,
          class: Xe(["base-dialog", [`base-dialog--${e.size}`, { "base-dialog--compact": e.compact, "base-dialog--stacked": h.value > 0 }]]),
          style: Ht(J.value),
          onClick: me,
          onClose: B
        }, [
          Q.$slots.header || e.title ? (C(), M("header", Xp, [
            Zt(Q.$slots, "header", {}, () => [
              W("h3", null, he(e.title), 1),
              W("button", {
                type: "button",
                class: "base-dialog__close",
                "aria-label": "Close",
                onClick: D
              }, "×")
            ])
          ])) : ae("", !0),
          W("div", {
            ref_key: "bodyRef",
            ref: u,
            class: Xe(["base-dialog__body", A.value])
          }, [
            Zt(Q.$slots, "default")
          ], 2),
          Q.$slots.footer ? (C(), M("footer", em, [
            Zt(Q.$slots, "footer", { close: D })
          ])) : ae("", !0)
        ], 38)
      ]))
    ], 64));
  }
}), nm = { class: "full-stock-dialog__intro" }, am = { class: "full-stock-dialog__options" }, im = ["onClick"], sm = { class: "full-stock-dialog__dim" }, lm = {
  key: 0,
  class: "full-stock-dialog__price"
}, om = ["onClick"], rm = /* @__PURE__ */ ft({
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
    const t = e, a = n, i = E({
      get: () => t.open,
      set: (b) => a("update:open", b)
    }), l = E(() => "Choose sheet size"), u = E(() => {
      const b = [];
      t.materialLabel && b.push(t.materialLabel), t.thickness != null && t.thickness !== "" && b.push(`${t.thickness}mm`);
      const P = b.join(" · ");
      return P ? `Multiple sheet sizes available for ${P}. Pick the one you want to buy.` : "Multiple sheet sizes available. Pick the one you want to buy.";
    });
    let r = !1;
    function f(b) {
      r = !0, a("pick", b), a("update:open", !1);
    }
    function p() {
      r || a("cancel"), r = !1;
    }
    return (b, P) => (C(), Ee(tm, {
      open: i.value,
      "onUpdate:open": P[0] || (P[0] = (L) => i.value = L),
      title: l.value,
      size: "sm",
      onClosed: p
    }, {
      footer: tn(({ close: L }) => [
        W("button", {
          type: "button",
          class: "c-btn c-btn--ghost",
          onClick: L
        }, "Cancel", 8, om)
      ]),
      default: tn(() => [
        W("div", nm, he(u.value), 1),
        W("ul", am, [
          (C(!0), M(kt, null, Rt(e.options, (L) => (C(), M("li", {
            key: `${L.l}x${L.w}`,
            class: "full-stock-dialog__option"
          }, [
            W("button", {
              type: "button",
              class: "full-stock-dialog__option-btn",
              onClick: (h) => f(L)
            }, [
              W("span", sm, he(L.l) + " × " + he(L.w), 1),
              L.cost != null && e.formatPrice ? (C(), M("span", lm, he(e.formatPrice(L.cost)), 1)) : ae("", !0)
            ], 8, im)
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title"]));
  }
}), um = /* @__PURE__ */ Qt(rm, [["__scopeId", "data-v-6f2d3506"]]), cm = { class: "checkout-calculator-wrapper" }, dm = {
  key: 0,
  class: "row table-heading"
}, fm = {
  key: 0,
  class: "cell center"
}, pm = ["onClick"], mm = {
  key: 0,
  class: "cell"
}, gm = ["onClick"], hm = { class: "cell" }, vm = ["disabled", "aria-label", "onClick"], bm = { class: "button-wrapper main" }, ym = ["aria-label"], km = ["aria-label", "title", "disabled"], wm = ["aria-label"], Sm = { id: "part-count" }, xm = {
  key: 5,
  class: "pagination-controls"
}, Pm = { class: "c-btn-group" }, Cm = ["disabled"], Om = ["disabled"], Im = { class: "pagination-info" }, Lm = ["disabled"], Fm = ["disabled"], Em = {
  key: 7,
  id: "messages"
}, Am = {
  key: 0,
  class: "heading"
}, $m = { class: "content" }, Nm = {
  key: 8,
  id: "progress"
}, Tm = { id: "diagram-wrapper" }, Mm = {
  key: 0,
  id: "stack"
}, Vm = {
  key: 3,
  class: "debug"
}, _m = /* @__PURE__ */ ft({
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
    const a = Wt(() => import("./InputIssues-3pgUamxo.js")), i = Wt(() => import("./Machining-CVE5znX-.js")), l = Wt(() => import("./CustomProducts-D1B_vzOf.js")), u = Wt(() => import("./ImportCSV-b72VM5Gx.js")), r = Wt(() => Promise.resolve().then(() => kd)), f = Wt(() => import("./ImageUpload-Cmp-K1Ny.js")), p = Wt(() => import("./EcommerceGroups-ZlzZO2yH.js")), b = () => import("./Diagram-BmaEKkEf.js"), P = () => import("./Navigation-CQJOWOQw.js"), L = () => import("./StockNavigation-B9z043-f.js"), h = () => import("./CalculationSpinner-CmBMtfAj.js"), A = Wt(b), J = Wt(P), ue = Wt(L), D = Wt(h);
    let B = !1;
    const me = U(!1);
    function Q() {
      B || (B = !0, b().then(() => {
        me.value = !0;
      }), P(), L(), h());
    }
    const {
      inputs: v,
      totalInputShapes: N,
      getShapeGrainSummary: X,
      updateNumberFormat: $,
      validateInputStock: G,
      // validateInputShapeField,
      // validateInputStockField,
      removeInputShape: x,
      addInputShape: Z,
      addInputStock: le,
      cloneInputShape: fe,
      updateInputShape: oe,
      validationIssues: Je,
      setExtrasOptionsFromPricing: Ke,
      getCentralizedOptions: Se
    } = ml(), { r: Fe, updateFromResult: mt, stackedStock: _, uniqueAddedShapes: ee, uniqueUsedStock: be, usedStock: De, activeStockAutoId: ne, activeStock: ve, setActiveStockAutoId: Ne } = Dd();
    Td({
      stockList: Fe.stockList
    }, {
      stockList: { itemsPerPage: 10 }
    });
    const { progress: ut, reset: rn } = wl(), { addNotice: re } = Ji();
    at(() => v.inputStock.value?.length ?? 0, (s) => {
      s > 0 && Q();
    }, { immediate: !0 }), at(
      () => v.inputStock.value?.[0]?.db_sawId ?? null,
      (s) => {
        if (!s || String(s) === un.value) return;
        const o = xa.value?.[String(s)];
        o && Gt(o);
      }
    );
    const Te = U(!1);
    at(() => ut.value.complete, (s) => {
      s && (Te.value = !0);
    }, { immediate: !0 });
    const ze = E(() => v.inputShapes.value.filter(Ye)), xe = (s) => !s || !Array.isArray(s) ? [] : s.map((o) => fu({ parts: [o] }).parts?.[0] || o), Me = e, ye = t, Pt = U(!1), Lt = U(navigator?.language || "en-US"), gt = Qn(null), wn = window.location.hostname, st = U(!1), Nt = U(!0), ht = $o("Checkout/currentURL", window.location.href), bt = U([]), $n = U(null), O = U(null), I = U(!1), w = U(!1), q = U(!1), se = U(!1), Oe = U(!1), Pe = U(Or()), Re = U(!1), He = U(1), et = U(10), { socket: Ct } = Gd({
      refs: {
        connected: st,
        thinking: q
      },
      callbacks: {
        onResult(s) {
          const o = s.optimisation;
          if (mt(o), !o.shapeList?.length || !o.stockList?.length) {
            rn(), re({
              type: "error",
              message: Ie("errors.calculation.no_result"),
              additional: [Ie("errors.validation.check_inputs")]
            }), q.value = !1;
            return;
          }
          if ((ce.apiVersion || 3) === 2 ? O.value = Gf(
            s.jobId,
            ee.value,
            be.value,
            De.value,
            Fe.offcuts?.value || [],
            v.inputShapes.value,
            Fe.metadata.value,
            ce.resultOrientationModel
          ) : O.value = zf(
            s.jobId,
            ee.value,
            be.value,
            De.value,
            Fe.offcuts?.value || [],
            v.inputShapes.value,
            Fe.metadata.value,
            ce.resultOrientationModel
          ), Fe?.metadata?.value?.unplacedParts?.length) {
            const c = Fe.metadata.value.unplacedParts.map((k) => k.id).join();
            re({
              type: "warning",
              message: Ie("errors.validation.parts_not_fit", { count: Fe.metadata.value.unplacedParts.length }) + ": " + c
            });
          }
          O.value && (O.value.apiResultV3 = Pu({
            jobId: s.jobId,
            saw: o.saw,
            stockList: o.stockList,
            shapeList: o.shapeList,
            cutList: o.cutList,
            offcuts: Fe.offcuts?.value || [],
            unusableShapes: o.unusableShapes,
            metadata: Fe.metadata.value
          }), ye("result", O.value)), q.value = !1;
        },
        onUser(s) {
          gt.value = s;
        },
        onConnectError(s) {
          re({
            type: "error",
            message: Ie("errors.network.cannot_connect"),
            additional: [s]
          });
        },
        onError(s) {
          re({
            type: "error",
            message: Ie("errors.general.error_occurred"),
            additional: [s]
          });
        }
      }
    }), Ut = {
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
    }, ce = an(Ut), Ve = an({
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
    }), un = U(null), xa = U({});
    function Gt(s) {
      if (s) {
        if (s.stockType !== void 0 && (Ui.includes(s.stockType) || console.warn(`${s.stockType} is not a valid stockType, expected ${Ui.join("|")}`), Ve.stockType = s.stockType, s.stockType === "linear" && (Ve.cutType = void 0, Ve.cutPreference = void 0)), s.bladeWidth !== void 0) {
          const o = typeof s.bladeWidth == "string" ? parseFloat(s.bladeWidth) : s.bladeWidth;
          o >= 0 ? Ve.bladeWidth = o : console.warn(`SmartCut - you provided an incorrect blade width of: ${s.bladeWidth}`);
        }
        if (s.cutType !== void 0 && (Ve.cutType = s.cutType), s.cutPreference !== void 0 && (Fs.includes(s.cutPreference) ? Ve.cutPreference = s.cutPreference : console.warn(`SmartCut - cut preference ${s.cutPreference || "N/A"} is not valid. Expected: ${Fs.join("|")}`)), s.guillotineOptions !== void 0 && typeof s.guillotineOptions == "object" && Object.assign(Ve.guillotineOptions, s.guillotineOptions), s.stackHeight !== void 0) {
          const o = typeof s.stackHeight == "string" ? parseFloat(s.stackHeight) : s.stackHeight;
          Ve.stackHeight = o;
        }
        s.efficiencyOptions !== void 0 && typeof s.efficiencyOptions == "object" && Object.assign(Ve.efficiencyOptions, s.efficiencyOptions), s.options !== void 0 && typeof s.options == "object" && (s.options.stockSelection !== void 0 && (Ve.options.stockSelection = s.options.stockSelection), s.options.stackingMode !== void 0 && (Ve.options.stackingMode = s.options.stackingMode), s.options.minSpacing !== void 0 && (Ve.options.minSpacing = s.options.minSpacing)), s.db_id && (un.value = String(s.db_id));
      }
    }
    const Ft = U(null), Nn = E(() => !!ce.enable?.groups && !Me.readonly), Tn = U(null), Mn = U(0), sa = U(null), si = E(() => {
      const s = v.inputStock.value.map((o) => o.grain).filter((o) => !!o);
      return s.length ? s.every((o) => o === "l") ? "l" : s.every((o) => o === "w") ? "w" : s.some((o) => o === "l" || o === "w") ? "y" : "n" : "n";
    }), li = E(() => ({
      numberFormat: ce.numberFormat,
      decimalPlaces: ce.decimalPlaces ?? 2,
      fractionRoundTo: ce.fractionRoundTo ?? 0
    })), la = (s) => {
      sa.value?.currentGroup && (Tn.value = s, Mn.value++);
    }, Pa = (s) => {
      Ft.value = v.inputShapes.value.find((o) => o.autoId === s) ?? null;
    }, oi = () => {
    }, oa = U(!1), Vn = U(""), ra = U(""), _n = U(!1), cn = U(null);
    function ri(s) {
      const o = cn.value;
      if (_n.value = !1, cn.value = null, !o) return;
      const m = { fullStock: !0, l: s.l, w: s.w };
      if (oe(o.shape.autoId, m) || (o.shape.fullStock = !0, o.shape.l = s.l, o.shape.w = s.w, o.shape.isNew || o.shape.validate({ fields: ["fullStock", "l", "w"] })), s.db_id || s.code) {
        const k = o.shape.stock || {};
        o.shape.stock = {
          ...k,
          ...s.db_id ? { db_id: s.db_id } : {},
          ...s.code ? { code: s.code } : {}
        };
      }
    }
    function ui() {
      _n.value = !1, cn.value = null;
    }
    at(Je, (s) => {
      s?.length > 0 ? (oa.value = !0, Vn.value = "Validation Errors", ra.value = s.map((o) => `${Ra(o.message, o.context || o.params)} (${o.category.join(", ")})`).join(`

`)) : Vn.value === "Validation Errors" && (oa.value = !1, Vn.value = "", ra.value = "");
    }, { deep: !0 });
    const Ot = an({
      banding: null,
      finish: null,
      info: null,
      planing: null,
      machining: null,
      addon: null
      // imageUpload: null
    }), Ce = U([]), Ze = U([]), d = U([]), g = U([]);
    function j(s) {
      if (s.length > 1) return !0;
      if (s.length === 0) return !1;
      const o = s[0];
      return !!(o.brand || o.variant || o.displayName && o.displayName !== o.name);
    }
    const R = an({
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
    }), T = an({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["l1", "l2", "w1", "w2"]
    }), K = an({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["a", "b"]
    }), ie = an({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]
      // All sides and faces by default
    }), je = U(null), ke = an({}), ct = an({}), _e = an({}), Be = U(null), Qe = U(null), Et = E(() => ({
      banding: ke.rules,
      finish: ct.rules,
      planing: _e.rules
    })), zt = E(() => Ud({
      stockType: Ve.stockType || "sheet",
      materials: Ce.value,
      minDimension: ce.minDimension,
      ...ce.fieldOrder && ce.fieldOrder.length > 0 ? { allowedFieldIds: ce.fieldOrder } : {}
    })), Dn = U([]), Sn = U({
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
    }), Wn = E(() => {
      const s = zt.value.fields.value, o = zt.value.allFieldsMap.value, m = s.filter((Y) => Sn.value[Y.name] ?? !0), c = ["orientationLock", "banding", "finish", "planing", "machining", "imageUpload"], k = [];
      let S = null;
      const V = m.filter((Y) => Y.name !== "fullStock");
      Sn.value.fullStock && (S = m.find((Y) => Y.name === "fullStock") || o.get("fullStock"));
      for (const Y of c) {
        const de = Sn.value[Y], Ge = V.find((Ae) => Ae.name === Y);
        if (de && !Ge) {
          const Ae = o.get(Y);
          Ae && k.push(Ae);
        }
      }
      const H = Dn.value || [];
      return [
        ...S ? [S] : [],
        ...V,
        ...k,
        ...H
      ];
    }), dn = E(() => {
      let s = Wn.value.length + 2;
      return rt.value && s++, s;
    }), ci = E(() => {
      const s = {
        id: 34,
        del: 32,
        info: 32
      }, o = {
        id: `${s.id}px`,
        del: `${s.del}px`,
        info: `${s.info}px`
      }, m = [];
      for (const c of Wn.value) {
        if (c.name === "trim") continue;
        const k = c.w ?? "minmax(20px, 1fr)";
        m.push(k);
      }
      return m.unshift(o.id), rt.value && m.push(o.info), m.push(o.del), m.join(" ");
    }), jn = E(() => ce.enable?.pagination), Ca = E(() => Me.diagramNav || ce.enable?.diagramNav), Yt = E(() => jn.value ? Math.ceil(ze.value.length / et.value) : 1), ua = E(() => {
      if (!jn.value) return ze.value;
      const s = (He.value - 1) * et.value, o = s + et.value;
      return ze.value.slice(s, o);
    }), We = E(() => jn.value ? (He.value - 1) * et.value : 0), wt = (s) => {
      s < 1 && (s = 1), s > Yt.value && (s = Yt.value), He.value = s;
    }, Oa = () => wt(1), Vl = () => wt(He.value - 1), _l = () => wt(He.value + 1), Dl = () => wt(Yt.value), rt = E(() => Me.debug || ce.debug || ce.enable?.debug), jl = E(() => {
      try {
        const s = localStorage.getItem("inputs/inputStock");
        if (!s) return "(empty)";
        const o = JSON.parse(s);
        return JSON.stringify(o.map((m) => ({ material: m.material, db_id: m.db_id, l: m.l, w: m.w, t: m.t })), null, 2);
      } catch {
        return "(parse error)";
      }
    }), Bl = E(() => {
      try {
        const s = localStorage.getItem("stock-filter-selections");
        return s || "(empty)";
      } catch {
        return "(read error)";
      }
    }), ql = E(() => ({
      "--btn-color": ce.colors.buttonText,
      "--btn-bg": ce.colors.button,
      "--btn-hover-bg": Rl(ce.colors.button, -8),
      "--btn-focus-ring": ce.colors.button
    }));
    function Rl(s, o) {
      const m = s.replace("#", ""), c = parseInt(m, 16), k = Math.round(2.55 * o), S = (c >> 16) + k, V = (c >> 8 & 255) + k, H = (c & 255) + k;
      return `#${(16777216 + (S < 255 ? S < 1 ? 0 : S : 255) * 65536 + (V < 255 ? V < 1 ? 0 : V : 255) * 256 + (H < 255 ? H < 1 ? 0 : H : 255)).toString(16).slice(1)}`;
    }
    const Ul = {
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
    }, ns = E(() => Me.showCredit !== void 0 ? Me.showCredit : gt.value ? !(gt.value && gt.value?.api?.whiteLabel) : !0), Ia = {
      // @deprecated Use saw.options.stockSelection instead
      stockSelection: (s) => {
        const o = ["efficiency", "smallest"];
        s && !o.includes(s) ? console.warn(`${s} is not a valid stockSelection, expected ${o.join("|")}`) : Ve.options.stockSelection = s;
      },
      // @deprecated Use saw.options.minSpacing instead
      minSpacing: (s) => {
        Ve.options.minSpacing = s;
      },
      maxParts: (s) => {
        ce.maxParts = s;
      },
      partsPerPage: (s) => {
        s && s > 0 && (et.value = s, ce.partsPerPage = s);
      },
      locale: (s) => {
        Lt.value = s.replace(/_/g, "-");
      },
      enable: (s) => {
        const o = {
          banding: "banding",
          name: "partName",
          finish: "finish",
          planing: "planing",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload",
          fullStock: "fullStock"
        };
        if (s) {
          for (const m in Ut.enable)
            m in s && (ce.enable[m] = s[m]);
          for (const m in o) {
            const c = o[m], k = ln(s, [c]), S = Ut.enable[c];
            St(m, k !== void 0 ? k : S);
          }
          Oe.value = ln(s, ["csvImport"]) ?? Ut.enable?.csvImport;
        }
      },
      colors: (s) => {
        if (s)
          for (const o in Ut.colors)
            o in s && (ce.colors[o] = s[o]);
      },
      orientationModel: (s) => {
        if (![0, 1, 2].includes(s)) {
          ce.orientationModel = 0;
          return;
        }
        ce.orientationModel = s;
      },
      numberFormat: (s) => {
        if (!["decimal", "fraction"].includes(s)) {
          ce.numberFormat = "decimal";
          return;
        }
        ce.numberFormat = s;
      },
      customFields: (s) => {
        if (!Array.isArray(s) || !s?.length)
          return;
        const o = [];
        s.forEach((m) => {
          const c = as(m.id), k = {
            ...m,
            custom: !0,
            id: c,
            name: c,
            // CheckoutField expects 'name' property
            propertyPath: "customData." + c,
            fieldMap: "customData." + c
          };
          m.type === "checkbox" && (k.w = "32px"), m.type === "integer" || m.type === "float" ? k.output = m.output ?? "number" : m.type === "select" && (k.output = m.output ?? "string", k.options = m.options), o.push(k);
        }), Dn.value = o, jt(() => {
          for (const m of v.inputShapes.value)
            m.customData = s.reduce((c, k) => {
              const S = as(k.id);
              return c[S] = m.customData?.[S] || k.default || "", c;
            }, {});
        });
      }
    }, Gl = (s) => {
      rt.value && ye("log", ["checkout init...", s]), s?.stockFilterEnabled && localStorage.removeItem("inputs/inputStock"), s?.parts && (s.parts = xe(s.parts));
      let o;
      try {
        o = Bf(s);
      } catch (c) {
        console.error("[init] validation FAILED:", c.message), ye("error", c.message || "Invalid init data");
        return;
      }
      if (o.saw && Gt(o.saw), o.sawsById && (xa.value = o.sawsById), o?.options) {
        const c = o.options;
        gl(c);
        const k = ["stockType", "bladeWidth"];
        if (!o.saw && !s?.stockFilterEnabled)
          ye("error", `Saw configuration is required. Missing properties: ${k.join(", ")}`);
        else if (o.saw) {
          const V = k.filter((H) => !(H in o.saw));
          V.length > 0 && ye("error", `Missing required saw properties: ${V.join(", ")}`), (o.saw.cutType === "guillotine" || o.saw.cutType === "beam") && !("cutPreference" in o.saw) && ye("error", "cutPreference is a required saw property for guillotine and beam cut types");
        }
        const S = ["enable", "colors"];
        for (const V in c)
          S.includes(V) || (ce[V] = c[V]), V in Ia && Ia[V]?.(c[V]);
      }
      if (o.options.colors && "colors" in Ia && Ia.colors(o.options.colors), o.banding) {
        const c = o.banding;
        "locations" in c && c.locations && (ke.locations = c.locations), "groups" in c && c.groups && (ke.groups = c.groups), "rules" in c && c.rules && (ke.rules = c.rules), "maxGap" in c && typeof c.maxGap == "number" && (ke.maxGap = c.maxGap);
      }
      if (o.finish) {
        const c = o.finish;
        "locations" in c && c.locations && (ct.locations = c.locations), "groups" in c && c.groups && (ct.groups = c.groups), "rules" in c && c.rules && (ct.rules = c.rules);
      }
      if (o.planing) {
        const c = o.planing;
        "locations" in c && c.locations && (_e.locations = c.locations), "groups" in c && c.groups && (_e.groups = c.groups), "rules" in c && c.rules && (_e.rules = c.rules);
      }
      o.partRules && (Be.value = o.partRules), o.customValidation && (Qe.value = o.customValidation), ki("banding", o), ki("finish", o), ki("planing", o), Hl(o), ds(o), v.inputShapes.value.length && gs(), w.value = !0, rt.value && ye("log", ["init complete"]);
      const m = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(m), jt(() => {
        ns.value && !fo() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      }), o.parts?.length && jt(() => {
        rt.value && ye("log", ["loading parts via init..."]), v.inputShapes.value.length = 0;
        let c = 0;
        for (const S of o.parts) {
          const V = Ea(S);
          V ? V.issues?.length && rt.value && ye("log", [`SmartCut - issues found while importing part at index ${c}`, V.issues]) : rt.value && ye("log", [`SmartCut - error loading part at index ${c}`, S]), c++;
        }
        v.inputShapes.value.flatMap((S) => Ri(S.issues)).length && re({
          type: "error",
          message: Ie("errors.general.issues_found")
        }), rt.value && ye("log", [`loaded ${v.inputShapes.value.length} parts via init`]);
      });
    }, St = (s, o = !1) => {
      Sn.value[s] = o;
    }, as = (s) => s ? Lr(s)?.toLowerCase() : null, zl = (s, o, m) => {
      try {
        if (!s || !o) return;
        const k = m !== null && m !== "" && m !== void 0 && !["orientationLock", "grain"].includes(o), S = (Y, de) => {
          if (!oe(Y.autoId, de)) {
            for (const [Ae, $e] of Object.entries(de))
              Fi(Y, Ae, $e);
            Y.isNew || Y.validate({ fields: Object.keys(de) });
          }
        }, V = (Y, de, Ge) => {
          const Ae = de ?? Y.material, $e = Ge ?? Y.t, At = Ae ? String(Ae).toUpperCase() : null, It = v.inputStock.value.find((nn) => {
            const Xt = !At || Bn(nn) === At, Rn = $e == null || pe({ v: nn.t }) === pe({ v: $e });
            return Xt && Rn;
          });
          return It ? { l: pe({ v: It.l }), w: pe({ v: It.w }) } : null;
        }, H = (Y, de) => {
          if (!Y) return [];
          const Ge = String(Y).toUpperCase(), Ae = de != null ? pe({ v: de }) : null, $e = /* @__PURE__ */ new Set(), At = [];
          for (const It of v.inputStock.value) {
            if (Bn(It) !== Ge || Ae != null && pe({ v: It.t }) !== Ae) continue;
            const nn = pe({ v: It.l }), Xt = pe({ v: It.w });
            if (typeof nn != "number" || typeof Xt != "number") continue;
            const Rn = `${nn}x${Xt}`;
            $e.has(Rn) || ($e.add(Rn), At.push({
              l: nn,
              w: Xt,
              db_id: It.db_id,
              code: It.code,
              cost: typeof It.cost == "number" ? It.cost : null
            }));
          }
          return At;
        };
        if (o === "material" && (!m || m === "")) {
          const Y = { material: null, t: null };
          Ve.stockType === "linear" && (Y.w = null), S(s, Y);
          return;
        }
        if (o === "material" && m && Ce.value?.length) {
          const Y = Ce.value.find((de) => de.name === m);
          if (Y) {
            const de = { material: m };
            if (s.t != null) {
              const Ae = pe({ v: s.t });
              !Y.thicknesses.some(($e) => pe({ v: $e }) === Ae) && Y.thicknesses.length > 0 && (de.t = pe({ v: Y.thicknesses[0] }));
            }
            if (Ve.stockType === "linear" && s.w != null && Y.widths) {
              const Ae = pe({ v: s.w });
              !Y.widths.some(($e) => pe({ v: $e }) === Ae) && Y.widths.length > 0 && (de.w = pe({ v: Y.widths[0] }));
            }
            if (Y.fullSizeOnly) {
              const Ae = V(
                s,
                m,
                de.t != null ? de.t : s.t
              );
              de.fullStock = !0, Ae && (de.l = Ae.l, de.w = Ae.w);
            } else s.fullStock && (de.fullStock = !1);
            S(s, de), qn(s, Y), Kn(s);
            const Ge = v.inputShapes.value.indexOf(s);
            for (const Ae of ["banding", "finish", "planing"]) {
              if (Ot[Ae] !== Ge) continue;
              const $e = nt(s, Ae), At = Ae === "banding" && !!pi(s);
              if (!$e.options.length && !At) {
                Ot[Ae] = null;
                continue;
              }
              Ke(Ae, $e.options, $e.labels, $e.pricing);
            }
            return;
          }
        }
        if (o === "fullStock") {
          if (m !== !0 && cs(s) || m === !0 && !gi(s))
            return;
          if (m === !0) {
            const Y = H(s.material, s.t);
            if (Y.length > 1) {
              cn.value = { shape: s, options: Y }, _n.value = !0;
              return;
            }
            const de = V(s);
            if (de) {
              S(s, { fullStock: !0, l: de.l, w: de.w });
              return;
            }
          } else {
            S(s, { fullStock: !1, l: null, w: null });
            return;
          }
        }
        if ((o === "material" || o === "t") && s.fullStock) {
          const Y = {
            ...s,
            material: o === "material" ? m : s.material,
            t: o === "t" ? m : s.t
          };
          if (!gi(Y)) {
            S(s, { [o]: m, fullStock: !1, l: null, w: null });
            return;
          }
          const de = V(
            s,
            o === "material" ? m : void 0,
            o === "t" ? m : void 0
          );
          if (de) {
            S(s, { [o]: m, l: de.l, w: de.w });
            return;
          }
        }
        if (s.isNew)
          if (k)
            s.isNew = !1;
          else {
            Fi(s, o, m);
            return;
          }
        let ge;
        if (o.includes(".")) {
          const Y = o.split("."), de = Y[0], Ge = Y.slice(1).join("."), $e = { ...s[de] || {} };
          Fi($e, Ge, m), ge = { [de]: $e };
        } else
          ge = { [o]: m };
        if (S(s, ge), o === "t" && Ce.value?.length && s.material) {
          const Y = Ce.value.find((de) => de.name === s.material);
          Y && qn(s, Y);
        }
        o === "t" && Ve.stockType === "linear" && Ce.value?.length && s.material && jt(() => {
          const Y = os(s);
          if (Y.length > 0 && s.w != null) {
            const de = pe({ v: s.w });
            Y.some((Ge) => pe({ v: Ge }) === de) || S(s, { w: pe({ v: Y[0] }) });
          }
        });
      } catch (c) {
        console.error("[CHECKOUT] Error updating field:", c);
      }
    }, Wl = () => {
    }, Kl = (s, o) => {
      s?.isNew && (s.isNew = !1), s.validate({ fields: [o] }), ["l", "w", "t"].includes(o) && is(s);
    }, is = (s) => {
      if (Be.value && s && !s.isNew && !(!s.l && !s.w))
        try {
          const o = hf(s, Be.value);
          if (s.issues && (s.issues = s.issues.filter((m) => !m.category?.includes("part"))), !o.valid && o.violations.length > 0)
            for (const m of o.violations) {
              const c = bf(m), k = m.dimension === "longSide" ? "l" : m.dimension === "shortSide" ? "w" : null;
              new Bt({
                item: s,
                type: "error",
                category: ["part"],
                field: k ? [[k]] : [],
                message: c,
                shouldTranslate: !1
              });
            }
        } catch (o) {
          console.error("[CHECKOUT] Error validating part:", o);
        }
    }, Hl = (s) => {
      if (ln(ce, ["enable", "machining"]) && s?.machining) {
        for (const o in R)
          s.machining[o] && (R[o] = s.machining[o]);
        if (["holes", "hingeHoles"].forEach((o) => {
          s?.machining?.[o] && (R[o].enabled = s?.machining?.[o].enabled);
        }), s?.machining?.corners?.types?.length && (R.corners.enabled = !0, R.corners.types = s.machining.corners.types), s.banding && s?.options?.enable?.banding) {
          if (!T) return;
          R.banding = {
            enabled: !0
          }, T.options.length && (R.banding.options = T.options), T.labels.length && (R.banding.labels = T.labels), Es(T.pricing) && (R.banding.pricing = T.pricing);
        }
      }
    }, Zl = (s = null) => {
      Ft.value = s, s && Ye(s) && s.l && s.w ? Pt.value = !0 : alert(Ie("machining.enter_dimensions_first"));
    }, Jl = () => {
      Pt.value = !1;
    }, di = U(!1), Ql = (s = null) => {
      Ft.value = s, s && (di.value = !0);
    }, Yl = () => {
      di.value = !1;
    }, ss = (s) => {
      if (!s) return [];
      const o = s.stockId ?? s.stock?.id, m = o ? v.inputStock.value?.find((k) => String(k.id) === String(o)) : null;
      return (m?.extras?.customProducts ?? m?.material?.extras?.customProducts ?? []).length ? [] : [];
    }, Xl = (s) => ss(s).filter((o) => o.type === "machining"), ls = (s = []) => {
      if (Ze.value = [], d.value = [], St("t", !1), !!s.length) {
        for (const o of s)
          if (o?.t)
            if (typeof o.t == "string" && o.t.includes(",")) {
              const m = Fa(o.t, !0);
              m.length === 2 ? (io(m), St("t", !0), o.t = Ze.value[0]) : ye("error", "bonded thickness found which does not have 2 options");
            } else Ze.value.includes(o.t) || Ze.value.push(o.t);
        Ze.value.length > 1 && St("t", !0);
      }
    }, fi = (s = []) => {
      if (g.value = [], !s.length) {
        St("w", !1);
        return;
      }
      for (const o of s) {
        if (!o?.w) continue;
        const m = pe({ v: o.w });
        g.value.includes(m) || g.value.push(m);
      }
      g.value.length >= 1 ? St("w", !0) : St("w", !1);
    }, eo = (s) => {
      if (!s) return { thicknesses: [], bondedThicknesses: [] };
      if (!Ce.value?.length)
        return {
          thicknesses: Ze.value,
          bondedThicknesses: []
        };
      if (!s.material)
        return {
          thicknesses: Ze.value,
          bondedThicknesses: []
        };
      const o = Ce.value.find((k) => k.name === s.material);
      if (!o)
        return {
          thicknesses: Ze.value,
          bondedThicknesses: []
        };
      const m = [...o.thicknesses], c = [];
      for (let k = 0; k < m.length; k++) {
        const S = m[k], V = Fa(S), H = [];
        if (V.length) {
          for (const ge of V)
            m[k] = ge, H.push(k);
          k++;
        }
        H.length && c.push(H);
      }
      return {
        thicknesses: m,
        bondedThicknesses: c
      };
    }, os = (s) => {
      if (!s) return [];
      if (!Ce.value?.length || !s.material)
        return g.value;
      const o = Ce.value.find((m) => m.name === s.material);
      if (!o)
        return g.value;
      if (s.t != null && v.inputStock?.value?.length) {
        const m = pe({ v: s.t }), c = /* @__PURE__ */ new Set();
        for (const k of v.inputStock.value)
          k.material?.toUpperCase() === s.material && pe({ v: k.t }) === m && k.w != null && c.add(pe({ v: k.w }));
        if (c.size > 0)
          return Array.from(c).sort((k, S) => k - S);
      }
      return o.widths || g.value;
    }, to = (s) => s === "banding" ? T : s === "finish" ? K : s === "planing" ? ie : null, La = (s, o) => Ml(Aa(s?.stock?.db_id) || null, o), pi = (s) => Zf(Aa(s?.stock?.db_id) || null), rs = (s) => {
      switch (s) {
        case "banding":
          return ke.groups;
        case "finish":
          return ct.groups;
        case "planing":
          return _e.groups;
        default:
          return;
      }
    }, us = () => v.inputStock.value.some((s) => Hf(s)), nt = (s, o) => {
      const m = to(o), c = rs(o), k = m?.formulas, S = {
        options: m?.options ?? [],
        labels: m?.labels ?? [],
        pricing: m?.pricing ?? {},
        ...k && { formulas: k },
        displayNames: m?.displayNames ?? {},
        ...c?.length && { locationGroups: c }
      }, V = { options: [], labels: [], pricing: {}, displayNames: {} };
      if (!s?.material) return S;
      const H = La(s, o);
      if (!H)
        return m?.containsCatalogueLinked || us() ? V : S;
      const ge = H.code || H.name, Y = H.groups;
      if (Y && Y.length > 0) {
        const nn = rs(o) || [], Xt = {};
        for (const Tt of Y)
          typeof Tt.price == "number" && (Xt[Tt.id] = Tt.price);
        const Rn = nn.filter((Tt) => Xt[Tt.id] !== void 0).map((Tt) => ({ ...Tt, price: Xt[Tt.id] })), vs = {}, bs = [], ys = {}, wi = {}, Si = H.pricingFormula;
        for (const Tt of Rn) {
          const Ta = `${ge}|${Tt.id}`;
          vs[Ta] = Tt.price, bs.push(Ta), Tt.label && (ys[Ta] = Tt.label), typeof Si == "string" && Si.trim() && (wi[Ta] = Si.trim());
        }
        const Lo = [o.charAt(0).toUpperCase() + o.slice(1)];
        return {
          options: [bs],
          labels: Lo,
          pricing: vs,
          ...Object.keys(wi).length && { formulas: wi },
          displayNames: ys,
          locations: [],
          // empty so render path applies hideIndividualLocations filter
          locationGroups: Rn
        };
      }
      const de = Wf(H, m, ge), Ge = H.labels?.length ? H.labels : [o.charAt(0).toUpperCase() + o.slice(1)], Ae = Jf(H, o) ? [] : $a(de), $e = H.displayNames && typeof H.displayNames == "object" ? { ...H.displayNames } : { ...m?.displayNames ?? {} };
      H.code && H.name && H.code !== H.name && ($e[H.code] = H.name);
      const At = { ...k || {} }, It = H.pricingFormula;
      if (typeof It == "string" && It.trim()) {
        const nn = It.trim();
        for (const Xt of Object.keys(de)) At[Xt] = nn;
      }
      return {
        options: Ae,
        labels: Ge,
        pricing: de,
        ...Object.keys(At).length && { formulas: At },
        displayNames: $e,
        locations: H.locations?.length ? H.locations : void 0
      };
    }, mi = (s, o) => nt(s, o).options, cs = (s) => !s?.material || !Ce.value?.length ? !1 : !!Ce.value.find((m) => m.name === s.material)?.fullSizeOnly, gi = (s) => {
      if (!s?.material) return !1;
      const o = String(s.material).toUpperCase(), m = s.t != null ? pe({ v: s.t }) : null;
      return v.inputStock.value.some((c) => Bn(c) !== o || m != null && pe({ v: c.t }) !== m ? !1 : !!c.allowExactFitShapes);
    }, ca = (s, o) => {
      if (!o.fullSizeOnly) return;
      const m = s.t, c = v.inputStock.value.find((k) => k.material === o.name && (m == null || pe({ v: k.t }) === pe({ v: m })));
      s.fullStock = !0, c && (s.l = pe({ v: c.l }), s.w = pe({ v: c.w }));
    }, no = (s) => {
      const o = { banding: !1, finish: !1, planing: !1, machining: !1 };
      if (!s?.material || !(T?.containsCatalogueLinked || K?.containsCatalogueLinked || ie?.containsCatalogueLinked || us())) return o;
      const c = Aa(s?.stock?.db_id), k = Ya(c || null) || {};
      return {
        banding: !k.banding,
        finish: !k.finish,
        planing: !k.planing,
        machining: !k.machining
      };
    }, ds = (s) => {
      if (s?.stock?.some((o) => o?.material)) {
        Ce.value = [], Ze.value = [], d.value = [];
        const o = /* @__PURE__ */ new Map();
        for (const k of s.stock) {
          if (!k.material) continue;
          const S = Bn(k), V = (k.code || k.name || "").toString().trim(), H = k.name || k.customData?.stockName || k.material || S;
          if (o.has(S) ? k.fullSizeOnly && (o.get(S).fullSizeOnly = !0) : o.set(S, {
            displayName: H,
            material: k.customData?.materialLabel || k.material,
            db_id: k.db_id,
            codes: /* @__PURE__ */ new Set(),
            brand: k.brand,
            variant: k.variant,
            imageUrl: k.imageUrl,
            color: typeof k.color == "string" ? k.color : void 0,
            fullSizeOnly: !!k.fullSizeOnly,
            thicknesses: /* @__PURE__ */ new Set(),
            widths: /* @__PURE__ */ new Set(),
            dimensions: /* @__PURE__ */ new Set()
          }), V && o.get(S).codes.add(V), k.t != null && (typeof k.t == "string" && k.t.includes(",") ? o.get(S)?.thicknesses.add(k.t) : o.get(S)?.thicknesses.add(pe({ v: k.t }))), Ve.stockType === "linear" && k.w != null && o.get(S)?.widths.add(pe({ v: k.w })), Ve.stockType !== "linear" && k.l != null && k.w != null) {
            const ge = pe({ v: k.l }), Y = pe({ v: k.w });
            o.get(S)?.dimensions.add(`${ge}x${Y}`);
          }
        }
        const m = Array.from(o.entries()).map(([k, S]) => {
          const V = [], H = [];
          for (const ge of S.thicknesses)
            typeof ge == "string" && ge.includes(",") ? H.push(ge) : V.push(pe({ v: ge }));
          return { name: k, sets: S, regularThicknesses: V, bondedStrings: H };
        });
        Ce.value = m.map(({ name: k, sets: S, regularThicknesses: V }) => {
          const H = S.codes.size === 1 ? [...S.codes][0] : void 0, ge = {
            name: k,
            displayName: S.displayName,
            material: S.material,
            db_id: S.db_id,
            code: H,
            brand: S.brand,
            variant: S.variant,
            imageUrl: S.imageUrl,
            color: S.color,
            fullSizeOnly: S.fullSizeOnly,
            thicknesses: V.sort((Y, de) => Y - de)
          };
          return Ve.stockType === "linear" && S.widths.size > 0 && (ge.widths = Array.from(S.widths).sort((Y, de) => Y - de)), Ve.stockType !== "linear" && S.dimensions.size > 0 && (ge.dimensions = Array.from(S.dimensions).map((Y) => {
            const [de, Ge] = Y.split("x").map((Ae) => Number(Ae));
            return { l: de, w: Ge };
          })), ge;
        });
        const c = /* @__PURE__ */ new Set();
        for (const k of Ce.value)
          for (const S of k.thicknesses)
            c.add(pe({ v: S }));
        Ze.value = Array.from(c).sort((k, S) => k - S);
        for (let k = 0; k < m.length; k++) {
          const { bondedStrings: S } = m[k], V = Ce.value[k];
          for (const H of S) {
            const ge = Fa(H, !0);
            if (ge.length !== 2) continue;
            const Y = [];
            for (const de of ge) {
              const Ge = pe({ v: de });
              let Ae = Ze.value.findIndex(($e) => pe({ v: $e }) === Ge);
              Ae === -1 ? (Ze.value.push(Ge), V.thicknesses.push(Ge), Ae = Ze.value.length - 1) : V.thicknesses.some(($e) => pe({ v: $e }) === Ge) || V.thicknesses.push(Ge), Y.push(Ae);
            }
            d.value.push(Y);
          }
        }
        if (Ve.stockType === "linear") {
          const k = /* @__PURE__ */ new Set();
          for (const S of Ce.value)
            if (S.widths)
              for (const V of S.widths)
                k.add(pe({ v: V }));
          g.value = Array.from(k).sort((S, V) => S - V);
        }
        St("material", j(Ce.value)), Ze.value.length > 1 ? St("t", !0) : St("t", !1), Ve.stockType === "linear" && g.value.length > 1 ? St("w", !0) : Ve.stockType === "linear" && St("w", !1);
      } else
        ls(s.stock);
      Ve.stockType === "linear" && !Ce.value?.length && fi(s.stock);
    }, ao = (s) => {
      if (!s?.length) {
        Ce.value = [], Ze.value = [], g.value = [];
        return;
      }
      if (s.some((m) => m?.material)) {
        const m = /* @__PURE__ */ new Map();
        d.value = [];
        for (const S of s) {
          if (!S.material) continue;
          const V = Bn(S), H = (S.code || S.name || "").toString().trim(), ge = (S.material || V).toString();
          if (m.has(V) ? S.fullSizeOnly && (m.get(V).fullSizeOnly = !0) : m.set(V, {
            displayName: ge,
            material: S.customData?.materialLabel || S.material,
            db_id: S.db_id,
            codes: /* @__PURE__ */ new Set(),
            brand: S.brand,
            variant: S.variant,
            imageUrl: S.imageUrl,
            color: typeof S.color == "string" ? S.color : void 0,
            fullSizeOnly: !!S.fullSizeOnly,
            thicknesses: /* @__PURE__ */ new Set(),
            widths: /* @__PURE__ */ new Set(),
            dimensions: /* @__PURE__ */ new Set()
          }), H && m.get(V).codes.add(H), S.t != null && (typeof S.t == "string" && S.t.includes(",") ? m.get(V)?.thicknesses.add(S.t) : m.get(V)?.thicknesses.add(pe({ v: S.t }))), Ve.stockType === "linear" && S.w != null && m.get(V)?.widths.add(pe({ v: S.w })), Ve.stockType !== "linear" && S.l != null && S.w != null) {
            const Y = pe({ v: S.l }), de = pe({ v: S.w });
            m.get(V)?.dimensions.add(`${Y}x${de}`);
          }
        }
        const c = Array.from(m.entries()).map(([S, V]) => {
          const H = [], ge = [];
          for (const Y of V.thicknesses)
            typeof Y == "string" && Y.includes(",") ? ge.push(Y) : H.push(pe({ v: Y }));
          return { name: S, sets: V, regularThicknesses: H, bondedStrings: ge };
        });
        Ce.value = c.map(({ name: S, sets: V, regularThicknesses: H }) => {
          const ge = V.codes.size === 1 ? [...V.codes][0] : void 0, Y = {
            name: S,
            displayName: V.displayName,
            material: V.material,
            db_id: V.db_id,
            code: ge,
            brand: V.brand,
            variant: V.variant,
            imageUrl: V.imageUrl,
            color: V.color,
            fullSizeOnly: V.fullSizeOnly,
            thicknesses: H.sort((de, Ge) => de - Ge)
          };
          return Ve.stockType === "linear" && V.widths.size > 0 && (Y.widths = Array.from(V.widths).sort((de, Ge) => de - Ge)), Ve.stockType !== "linear" && V.dimensions.size > 0 && (Y.dimensions = Array.from(V.dimensions).map((de) => {
            const [Ge, Ae] = de.split("x").map(($e) => Number($e));
            return { l: Ge, w: Ae };
          })), Y;
        });
        const k = /* @__PURE__ */ new Set();
        for (const S of Ce.value)
          for (const V of S.thicknesses)
            k.add(pe({ v: V }));
        Ze.value = Array.from(k).sort((S, V) => S - V);
        for (let S = 0; S < c.length; S++) {
          const { bondedStrings: V } = c[S], H = Ce.value[S];
          for (const ge of V) {
            const Y = Fa(ge, !0);
            if (Y.length !== 2) continue;
            const de = [];
            for (const Ge of Y) {
              const Ae = pe({ v: Ge });
              let $e = Ze.value.findIndex((At) => pe({ v: At }) === Ae);
              $e === -1 ? (Ze.value.push(Ae), H.thicknesses.push(Ae), $e = Ze.value.length - 1) : H.thicknesses.some((At) => pe({ v: At }) === Ae) || H.thicknesses.push(Ae), de.push($e);
            }
            d.value.push(de);
          }
        }
        if (Ve.stockType === "linear") {
          const S = /* @__PURE__ */ new Set();
          for (const V of Ce.value)
            if (V.widths)
              for (const H of V.widths)
                S.add(pe({ v: H }));
          g.value = Array.from(S).sort((V, H) => V - H);
        }
        St("material", j(Ce.value)), St("t", Ze.value.length > 1), Ve.stockType === "linear" && St("w", g.value.length > 1);
      } else
        ls(s), Ve.stockType === "linear" && fi(s);
    }, io = (s, o = null) => {
      if (!Array.isArray(s)) {
        ye("error", "addBondedThicknesses expects an array");
        return;
      }
      const m = [];
      for (let c of s)
        ce.numberFormat === "decimal" && (c = parseFloat(c)), Ze.value.push(c), o && o.thicknesses.push(c), m.push(Ze.value.length - 1);
      d.value.push(m);
    }, so = (s) => {
      const { thicknesses: o } = eo(s);
      return o?.length ? o.map((m) => ({
        label: m?.toString(),
        value: m
      })) : [];
    };
    function lo(s) {
      return s?.length ? s.map((o) => ({
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
    const oo = (s) => {
      const o = os(s);
      return o?.length ? o.map((m) => ({
        label: m?.toString(),
        value: m
      })) : [];
    }, Fa = (s, o = !1) => {
      if (typeof s == "string" && s.includes(",")) {
        const m = s.split(",");
        if (m.length === 2) {
          const c = parseFloat(m[0]), k = parseFloat(m[1]);
          !isNaN(c) && !isNaN(k) && k !== c * 2 && re({
            type: "warning",
            message: `Bonded thickness "${s}" does not follow the expected pattern (second value should be double the first)`
          });
        }
        return o ? m.map((c) => pe({ v: c })) : m;
      }
      return [];
    }, ro = () => {
      Re.value ? co() : uo();
    }, uo = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), Re.value = !0;
    }, co = () => {
      document.exitFullscreen && document.exitFullscreen(), Re.value = !1;
    }, fo = () => {
      if (gt.value?.api?.whiteLabel) return !0;
      let s = !0;
      const o = document.querySelector("#smartcut-checkout a#credit");
      if (!o) return s = !1;
      const m = window.getComputedStyle(o);
      return m.display === "none" || m.display === "hidden" || m.opacity === "0" || m.color === "transparent" || m.position !== "absolute" || m.color !== "#4e4e4e" && m.color !== "rgb(78, 78, 78)" ? s = !1 : (Nt.value = s, s);
    }, hi = E(() => typeof Me.findExtrasPrice == "function"), po = E(() => ce.unitSystem === "imperial" ? "/ square ft" : "/ square m"), mo = E(() => ce.unitSystem === "imperial" ? "/ ft" : "/ m"), fs = (s, o) => {
      let m, c;
      switch (o) {
        case "banding":
          m = T.options, c = T.labels;
          break;
        case "finish":
          m = K.options, c = K.labels;
          break;
        case "planing":
          m = ie.options, c = ie.labels;
          break;
        default:
          m = [], c = [];
      }
      In(s, o, m, c);
    }, ps = (s) => {
      const o = Object.keys(s);
      return Math.max(...o.map((c) => c.split("|").length));
    }, da = (s, o, m) => {
      if (!s)
        return [];
      if (m > 0 && !o[m - 1])
        return [];
      const c = /* @__PURE__ */ new Set();
      for (const S of Object.keys(s)) {
        const V = S.split("|");
        if (V.length > m) {
          let H = !0;
          for (let ge = 0; ge < m; ge++) {
            const Y = o[ge], de = V[ge];
            if (Y && Y !== de) {
              H = !1;
              break;
            }
          }
          H && c.add(V[m]);
        }
      }
      return Array.from(c);
    }, vi = (s, o, m, c) => {
      const k = nt(s, o);
      return Ii(s, o, m, (V, H) => {
        const ge = H.filter((Y) => Y?.trim()).join("|");
        return ge && k.pricing[ge] !== void 0 ? k.pricing[ge] : c ? c(V, H) : null;
      }, k.options, k.labels);
    }, go = (s, o, m) => {
      let c, k;
      switch (o) {
        case "banding":
          c = T.options, k = T.labels;
          break;
        case "finish":
          c = K.options, k = K.labels;
          break;
        case "planing":
          c = ie.options, k = ie.labels;
          break;
        default:
          c = [], k = [];
      }
      return Ii(s, o, m, Me.findExtrasPrice, c, k);
    }, ho = U({}), vo = (s) => {
      const o = bt.value.findIndex((m) => m.shapeId === s.shapeId);
      o !== -1 ? bt.value[o] = s : bt.value.push(s), window.smartcutImages = bt.value;
    }, bo = (s) => {
      bt.value = bt.value.filter((o) => o.shapeId !== s), window.smartcutImages = bt.value;
    }, yo = (s) => {
      $n.value = $n.value === s ? null : s;
    }, bi = (s = 1) => {
      for (let o = s; o--; ) {
        let m = {
          l: null,
          w: Ve.stockType === "linear" && g.value.length === 1 ? g.value[0] : null,
          t: Ze.value.length ? Ze.value[0] : null,
          q: 1,
          material: Ce.value?.length === 1 ? Ce.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (v.inputShapes.value.length > 0) {
          const k = v.inputShapes.value[v.inputShapes.value.length - 1];
          m.material = k.material, m.t = k.t, k.stock && (m.stock = { ...k.stock }), Ve.stockType === "linear" && k.w && (m.w = k.w);
        }
        const c = Z(m);
        c && (T?.labels?.length && In(c, "banding", T.options, T.labels), K?.labels?.length && In(c, "finish", K.options, K.labels), ie?.labels?.length && In(c, "planing", ie.options, ie.labels));
      }
    }, Ea = (s = {}) => {
      const o = {
        q: 1,
        // Always set quantity to 1
        ...s
      }, m = Z(o);
      return m && (Ve.stockType === "linear" && g.value.length === 1 && !m.w && (m.w = g.value[0]), Ze.value.length && !m.t && (m.t = Ze.value[0]), Ce.value?.length === 1 && !m.material && (m.material = Ce.value[0].name), T?.labels?.length && In(m, "banding", T.options, T.labels), K?.labels?.length && In(m, "finish", K.options, K.labels), ie?.labels?.length && In(m, "planing", ie.options, ie.labels)), m;
    }, ko = (s) => {
      if (Ze.value.length)
        for (const o of s) {
          if (!o.t) continue;
          const m = Ze.value.findIndex(
            (S) => pe({ v: S }) === o.t
          ), c = d.value.find((S) => S.includes(m));
          if (!c) continue;
          const k = Math.min(
            ...c.map((S) => Ze.value[S])
          );
          pe({ v: o.t }) > k && (o.q = Number(o.q) * (pe({ v: o.t }) / k), o.notes = `Bond to form ${o.t.valueOf()}`, o.t = k);
        }
    }, ms = () => {
      rn(), Ne(null), Fe.stockList.value = [], Fe.shapeList.value = [], Fe.cutList.value = [];
    }, yi = () => {
      v.inputShapes.value.length = 0, Me.inputType !== "formula" && jt(() => bi());
    }, Aa = (s) => {
      if (s)
        return v.inputStock.value.find((o) => o.db_id === s);
    }, Kn = (s) => {
      s.extras && (s.extras.banding = null, s.extras.finish = null, s.extras.planing = null);
    }, wo = (s, o) => {
      const m = nt(s, o);
      return new Set(Object.keys(m.pricing || {}));
    }, So = (s) => {
      const o = { pruned: !1, types: /* @__PURE__ */ new Set() };
      if (!s?.extras) return o;
      const m = ["banding", "finish", "planing"];
      for (const c of m) {
        const k = s.extras[c];
        if (!k || La(s, c)?.sourceCatalogueKey) continue;
        const V = wo(s, c);
        if (k.faces)
          for (const H of ["a", "b"]) {
            const ge = k.faces[H];
            typeof ge == "string" && ge !== "" && !V.has(ge) && (k.faces[H] = "", o.pruned = !0, o.types.add(c));
          }
        if (k.sides)
          for (const H of ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]) {
            const ge = k.sides[H];
            typeof ge == "string" && ge !== "" && !V.has(ge) && (k.sides[H] = "", o.pruned = !0, o.types.add(c));
          }
      }
      return o;
    }, Bn = (s) => Yf(s), xo = (s, o) => {
      const m = s.toUpperCase();
      return v.inputStock.value.find((c) => Bn(c) === m && pe({ v: c.t }) === o);
    }, qn = (s, o) => {
      const m = pe({ v: s.t }), c = xo(o.name, m);
      s.stock = {
        db_id: c?.db_id || o.db_id,
        code: c?.code || o.code,
        material: o.displayName || o.name,
        thickness: m
      };
    }, gs = () => {
      const s = /* @__PURE__ */ new Set();
      for (const o of v.inputShapes.value) {
        const m = o.stock, c = o.material?.toUpperCase();
        let k = null;
        if (m?.db_id) {
          const H = Aa(m.db_id);
          H && (k = Ce.value.find((ge) => ge.name === Bn(H))), k || (k = Ce.value.find((ge) => ge.db_id && ge.db_id === m.db_id));
        }
        if (!k && m?.code && (k = Ce.value.find((H) => H.code && H.code === m.code)), !k && c && (k = Ce.value.find((H) => H.name === c)), k)
          o.material = k.name, qn(o, k), o.t != null && !k.thicknesses.includes(pe({ v: o.t })) && (o.t = null, o.stock = null, Kn(o)), ca(o, k);
        else {
          if ((m?.db_id || m?.code) && !Ce.value?.length)
            continue;
          if (Ce.value?.length === 1) {
            const H = Ce.value[0], ge = o.material !== H.name;
            o.material = H.name, H.thicknesses.includes(pe({ v: o.t })) || (o.t = pe({ v: H.thicknesses[0] })), qn(o, H), ge && Kn(o), ca(o, H);
          } else if (Ce.value?.length > 1 && o.t) {
            const H = Ce.value.find((ge) => ge.thicknesses.some((Y) => pe({ v: Y }) === pe({ v: o.t })));
            H ? (o.material !== H.name && Kn(o), o.material = H.name, qn(o, H), ca(o, H)) : (Kn(o), o.material = Ce.value[0].name, o.t = pe({ v: Ce.value[0].thicknesses[0] }), qn(o, Ce.value[0]), ca(o, Ce.value[0]));
          } else Ce.value?.length > 1 ? (Kn(o), o.material = Ce.value[0].name, o.t = pe({ v: Ce.value[0].thicknesses[0] }), qn(o, Ce.value[0]), ca(o, Ce.value[0])) : !o.t && v.inputStock.value[0]?.t && (o.t = pe({ v: v.inputStock.value[0].t }));
        }
        const { pruned: S, types: V } = So(o);
        S && V.forEach((H) => s.add(H));
      }
      if (s.size > 0) {
        const o = [...s].join(", ");
        re({
          type: "warning",
          message: `Some previously selected ${o} options are no longer available and have been cleared. Please review your selection.`
        });
      }
    }, Po = async () => {
      if (Q(), ye("calculating"), q.value) return !1;
      q.value = !0, se.value = !1, gs();
      const s = await ef({
        t: Ie,
        partTrim: ce.partTrim,
        maxShapes: ce.maxParts || 1e3,
        maxStock: 1 / 0,
        // CheckoutCalculator doesn't have stock limits
        inputSaw: v.inputSaw.value,
        // Extras validation data
        bandingPricing: T.pricing,
        finishPricing: K.pricing,
        planingPricing: ie.pricing,
        findExtrasPrice: Me.findExtrasPrice,
        getShapeExtrasPricing: (S, V) => nt(S, V).pricing,
        extrasValidationRules: Et.value,
        extrasLocationGroups: {
          banding: ke.groups,
          finish: ct.groups,
          planing: _e.groups
        },
        onLimit: () => {
          re({
            type: "error",
            message: Ie("limits.max_parts") + " " + ce.maxParts
          });
        }
      });
      if (Be.value)
        for (const S of v.inputShapes.value)
          is(S);
      const o = v.inputShapes.value.flatMap((S) => S.issues || []).filter((S) => S.type === "error" && S.category?.includes("part") && !S.category?.includes("extras"));
      if (o.length > 0) {
        re({
          type: "error",
          message: Ie("errors.validation.inputs_issue", { 0: "part" }),
          additional: o.map((S) => Ra(S.message, S.context || S.params))
        }), ye("validation-error"), q.value = !1;
        return;
      }
      if (!s.valid) {
        ye("validation-error"), q.value = !1;
        return;
      }
      ms(), v.inputShapes.value.forEach((S, V) => {
        S.createId(V);
      }), v.inputStock.value.forEach((S, V) => {
        S.createId(V);
      });
      const m = v.inputShapes.value.map((S) => fe(S)).filter(Boolean);
      if (m.length !== v.inputShapes.value.length)
        return re({
          type: "error",
          message: "Some parts have validation errors and cannot be processed",
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), q.value = !1, !1;
      ko(m), rt.value && ye("log", [
        "SmartCut - calculating",
        "stock",
        v.inputStock.value.map((S) => ({ l: S.l, w: S.w })),
        "parts",
        m.map((S) => ({ l: S.l, w: S.w }))
      ]);
      const c = {
        inputSaw: v.inputSaw.value.toData(),
        inputShapes: m.map((S) => S.toData()),
        inputStock: v.inputStock.value.map((S) => Xf(S.toData())),
        inputUserGroups: Nn.value ? v.inputUserGroups.value.map((S) => S.toData()) : [],
        enableEvo: !0,
        useInventory: !1,
        domain: wn,
        extrasOptions: Se(),
        source: "checkout",
        sourceVersion: "4.2.3"
      };
      if (Qe.value?.enabled && Qe.value?.rules?.length > 0) {
        const S = lf(
          Qe.value.rules,
          v.inputShapes.value.map((V) => V.toData())
        );
        if (!S.valid) {
          for (const V of S.errors) {
            const H = V.partName ? `Part "${V.partName}"` : `Part ${V.partIndex + 1}`;
            re({
              type: "error",
              message: `${H}: ${V.message}`
            });
          }
          q.value = !1;
          return;
        }
      }
      ye("before-calculate", c);
      const k = new CustomEvent("smartcut/beforeCalculate", {
        cancelable: !0,
        detail: {
          data: c,
          error: null
        }
      });
      if (window.dispatchEvent(k), k.defaultPrevented) {
        k.detail.error && re({
          type: "error",
          message: k.detail.error
        }), q.value = !1;
        return;
      }
      await Ct.connect(), Ct.emit("calculate", c);
    }, ki = (s, o) => {
      if (St(s, !1), !s || !o || !o?.[s] || !ln(ce, ["enable", s]))
        return;
      const m = [s, "pricing"];
      if (!As(o, m)) {
        ye("error", `${m.join(".")} not found in sent data`);
        return;
      }
      const c = ln(o, m);
      if (typeof c != "object") {
        ye("error", `${m.join(".")} data must be an object`);
        return;
      }
      if (!Es(c)) {
        ye("error", `if provided, ${m.join(".")} data must contain some values`);
        return;
      }
      const k = Object.keys(c), S = Object.values(c);
      if (!k.length) {
        ye("error", `no ${m.join(".")} pricing found`);
        return;
      }
      const V = /,/;
      for (const $e of k)
        if (V.test($e)) {
          ye("error", `${m} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (S.some(($e) => isNaN($e))) {
        ye("error", `${m} values must be a number`);
        return;
      }
      const H = ps(c), ge = [s, "labels"];
      let Y = [];
      if (As(o, ge))
        Y = ln(o, ge);
      else {
        ye("error", `${ge.join(".")} not found`);
        return;
      }
      if (!Y) {
        ye("error", `${ge.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(Y)) {
        ye("error", `${ge.join(".")} data must be an array`);
        return;
      }
      if (!Y?.length) {
        ye("error", `if provided, ${ge.join(".")} data must contain values`);
        return;
      }
      if (Y.length !== H) {
        ye("error", `${ge.join(".")} length (${Y.length}) must match the number of levels in ${m.join(".")} (${H})`);
        return;
      }
      const de = ln(o, [s, "displayNames"]) || void 0, Ge = ln(o, [s, "formulas"]), Ae = !!ln(o, [s, "containsCatalogueLinked"]);
      switch (s) {
        case "banding": {
          T.labels = Y, T.pricing = c, T.displayNames = de || {}, T.containsCatalogueLinked = Ae, T.formulas = Ge;
          const $e = $a(c);
          T.options = $e, Ke("banding", $e, Y, c, de);
          break;
        }
        case "finish": {
          K.labels = Y, K.pricing = c, K.displayNames = de || {}, K.containsCatalogueLinked = Ae, K.formulas = Ge;
          const $e = $a(c);
          K.options = $e, Ke("finish", $e, Y, c, de);
          break;
        }
        case "planing": {
          ie.labels = Y, ie.pricing = c, ie.displayNames = de || {}, ie.containsCatalogueLinked = Ae, ie.formulas = Ge;
          const $e = $a(c);
          ie.options = $e, Ke("planing", $e, Y, c, de);
          break;
        }
      }
      if (je.value = Se(), St(s, !0), !!v.inputShapes.value?.length)
        for (const $e of v.inputShapes.value)
          fs($e, s);
    }, $a = (s) => {
      const o = [], m = Object.keys(s), c = ps(s);
      for (let k = c; k--; ) o.push(/* @__PURE__ */ new Set());
      for (const k of m) {
        const S = k.split("|");
        c > 1 && S.length === 1 || S.forEach((V, H) => {
          H < c && o[H].add(V);
        });
      }
      for (let k = 0; k < c; k++)
        o[k] = Array.from(o[k]);
      return o;
    }, Na = (s, o) => {
      if (!o) return;
      s !== "info" && Object.keys(Ot).forEach((c) => {
        c !== s && c !== "info" && (Ot[c] = null);
      });
      const m = v.inputShapes.value.indexOf(o);
      if (Ot[s] === m)
        Ft.value = null, Ot[s] = null, ho.value[s] = void 0;
      else if (Ft.value = o, Ot[s] = m, s !== "info") {
        const c = nt(o, s);
        c.options.length && Ke(
          s,
          c.options,
          c.labels,
          c.pricing
        );
      }
    }, hs = (s) => {
      rt.value && ye("log", ["load event received"]), w.value && Co(s.detail);
    }, Co = (s) => {
      if (rt.value && ye("log", ["loading parts..."]), !s || !s?.inputs?.parts?.length) {
        rt.value && ye("log", ["could not find any parts to import"]);
        return;
      }
      v.inputShapes.value.length = 0;
      let o = 0;
      for (const c of s.inputs.parts) {
        const k = Ea(c);
        k ? k.issues?.length && rt.value && ye("log", [`SmartCut - issues found while importing part at index ${o}`, k.issues]) : rt.value && ye("log", [`SmartCut - error loading part at index ${o}`, c]), o++;
      }
      v.inputShapes.value.flatMap((c) => Ri(c.issues)).length && re({
        type: "error",
        message: Ie("errors.general.issues_found")
      }), rt.value && ye("log", [`loaded ${v.inputShapes.value.length} parts`]);
    }, Oo = (s) => {
      v.inputShapes.value.length = 0, jt(() => {
        for (const o of s)
          o.t = v.inputStock.value?.[0]?.t ?? null, Ve.stockType === "linear" && g.value.length === 1 && !o.w && (o.w = g.value[0]), Ea(o);
      });
    };
    at(() => Me.inputStock, (s) => {
      if (ms(), Array.isArray(s) || console.warn("SmartCut - stock must be passed as an array"), !s?.length) return;
      v.inputStock.value.length = 0;
      const o = s.map((m) => m.toData());
      ao(o);
      for (const m of s)
        le({
          ...m.toData(),
          autoAdd: !0,
          q: 1
        }) || (console.error("Failed to add stock item:", m), re({
          type: "error",
          message: "Failed to add some stock items due to validation errors"
        }));
      if (v.inputStock.value.length) {
        v.inputShapes.value.length || Me.inputType !== "formula" && jt(() => {
          v.inputShapes.value.length || bi();
        });
        const m = G(v.inputSaw.value);
        m.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(m))), re({
          type: "error",
          message: Ie("errors.validation.stock_issue"),
          additional: m.map((c) => Ra(c.message, c.context || c.params))
        }));
      }
    }, { immediate: !0 }), at(v.inputShapes, (s) => {
      ye("inputs-changed"), s.forEach((o) => {
        Ve.stockType === "linear" && g.value.length && (!o.w || !g.value.includes(pe({ v: o.w }))) && (o.w = g.value[0]);
        const m = Ce.value.find((c) => c.name === o.material);
        m && (m.thicknesses.includes(pe({ v: o.t })) || (o.t = pe({ v: m.thicknesses[0] })));
      });
    }, { deep: !0 }), at(() => ze.value.length, (s, o) => {
      if (jn.value) {
        if (s > o) {
          const m = Math.ceil(s / et.value);
          He.value < m && (He.value = m);
        } else if (s < o) {
          const m = Math.ceil(s / et.value);
          He.value > m && (He.value = Math.max(1, m));
        }
      }
    }), at(() => ce.numberFormat, (s) => {
      $(s);
    }), at(v.inputStock, (s) => {
      Ve.stockType === "linear" && fi(s.map((o) => o.toData()));
    }, { deep: !0 }), at(() => Ve, (s) => {
      v.inputSaw.value = new mn(s);
    }, { deep: !0 }), on(async () => {
      if (I.value) return;
      I.value = !0;
      const s = new URL(window.location.href), o = s.searchParams.toString(), m = s.origin + s.pathname + (o ? `?${o}` : "");
      ht.value !== m && yi(), ht.value = m, Lt.value = ce.locale, await Ct.connect(), Ct.emit("getUserFromDomain"), window.addEventListener("smartcut/load", hs);
    });
    const Io = () => {
      Ct && Ct.disconnect();
    };
    return Xa(() => {
      window.removeEventListener("smartcut/load", hs), Io(), delete window.smartcutCheckout;
    }), n({
      init: Gl,
      clear: yi,
      getAvailablePricingOptions: da,
      getExtrasPrice: go,
      formatPrice: Me.formatPrice,
      findExtrasPrice: Me.findExtrasPrice,
      inputShapes: v.inputShapes,
      initExtrasOptions: fs,
      createAndAddInputShape: Ea,
      initMaterialsThicknesses: ds
    }), (s, o) => {
      const m = zn("FontAwesomeIcon");
      return C(), M("div", cm, [
        rt.value ? (C(), Ee(F(r), {
          key: 0,
          title: "Ecommerce Calculator Debug",
          data: [{
            inputStock: F(v).inputStock.value.map((c) => ({ name: F(aa)(c).fullLabel, materialKey: c.material, db_id: c.db_id || null, code: c.code || null, l: c.l, w: c.w, t: c.t, db_sawId: c.db_sawId || null, stockExtras: F(Ya)(c) })),
            materials: Ce.value.map((c) => ({ name: F(aa)(c).fullLabel, materialKey: c.name, thicknesses: c.thicknesses, db_id: c.db_id, code: c.code })),
            inputShapesStockRefs: F(v).inputShapes.value.map((c) => ({ material: c.material || "?", t: c.t, stock: c.stock || null })),
            saw: {
              inputSaw: F(v).inputSaw.value ? {
                name: F(v).inputSaw.value.name || null,
                db_id: F(v).inputSaw.value.db_id || null,
                stockType: F(v).inputSaw.value.stockType || null,
                bladeWidth: F(v).inputSaw.value.bladeWidth ?? null,
                bladeWidthEnd: F(v).inputSaw.value.bladeWidthEnd ?? null,
                cutPreference: F(v).inputSaw.value.cutPreference || null
              } : null,
              stockSawIds: F(v).inputStock.value.map((c) => ({ name: F(aa)(c).fullLabel, db_sawId: c.db_sawId || null })),
              resultSaw: F(Fe).saw ? { name: F(Fe).saw.name || null, db_id: F(Fe).saw.db_id || null } : null
            },
            localStorage: { inputStock: jl.value, stockFilterSelections: Bl.value }
          }],
          paths: ["ecommerce-calculator"],
          root: !1
        }, null, 8, ["data"])) : ae("", !0),
        w.value ? ae("", !0) : (C(), Ee(bl, {
          key: 1,
          size: "large",
          label: "Loading...",
          block: ""
        })),
        w.value ? (C(), M("section", {
          key: 2,
          id: "smartcut-checkout",
          class: Xe(["smartcut-content", { fullscreen: Re.value }]),
          style: Ht(ql.value)
        }, [
          Ft.value?.machining && Pt.value ? (C(), Ee(F(i), {
            key: 0,
            "input-shape": Ft.value,
            "onUpdate:inputShape": o[0] || (o[0] = (c) => Ft.value = c),
            translate: !0,
            options: R,
            "find-extras-price": e.findExtrasPrice,
            "get-extras-price": F(Ii),
            "get-available-pricing-options": da,
            "format-price": e.formatPrice,
            "custom-machining-products": Xl(Ft.value),
            onClose: Jl
          }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price", "custom-machining-products"])) : ae("", !0),
          Ft.value && di.value ? (C(), Ee(F(l), {
            key: 1,
            "input-shape": Ft.value,
            "onUpdate:inputShape": o[1] || (o[1] = (c) => Ft.value = c),
            products: ss(Ft.value),
            "find-extras-price": e.findExtrasPrice,
            "format-price": e.formatPrice,
            onClose: Yl
          }, null, 8, ["input-shape", "products", "find-extras-price", "format-price"])) : ae("", !0),
          Pe.value && !e.readonly ? (C(), M("button", {
            key: 2,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            onClick: o[2] || (o[2] = (c) => ro())
          }, [
            it(m, { icon: ["fass", "expand"] }),
            qt(" " + he(F(Ie)("general.full_screen")), 1)
          ])) : ae("", !0),
          ns.value ? (C(), M("a", {
            key: 3,
            id: "credit",
            style: Ul,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, he(F(Ir)(F(Ie)("general.powered_by"))), 1)) : ae("", !0),
          W("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: Ht({ "grid-template-columns": ci.value })
          }, [
            F(v).inputShapes.value.length ? (C(), M("div", dm, [
              o[8] || (o[8] = W("div", { class: "cell id" }, null, -1)),
              (C(!0), M(kt, null, Rt(Wn.value, (c) => (C(), M("div", {
                key: c.name,
                class: Xe(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(c.name) || c.type === "boolean" }])
              }, he(F(Ie)(c.label)), 3))), 128)),
              rt.value ? (C(), M("div", fm, " Info ")) : ae("", !0),
              o[9] || (o[9] = W("div", { class: "cell del" }, null, -1))
            ])) : ae("", !0),
            (C(!0), M(kt, null, Rt(ua.value, (c, k) => (C(), M("div", {
              key: c.autoId,
              class: Xe(["row inputs", { "group-pickable": Nn.value, "row--readonly": !!c.readonly }])
            }, [
              W("div", {
                class: Xe(["cell", { clickable: Nn.value }]),
                onClick: (S) => Nn.value && la(c)
              }, [
                W("div", {
                  class: "id",
                  style: Ht({
                    background: ce.colors.partA,
                    color: ce.colors.text
                  })
                }, he(We.value + k + 1), 5)
              ], 10, pm),
              (C(!0), M(kt, null, Rt(Wn.value, (S) => (C(), M("div", {
                key: S.name,
                class: "cell"
              }, [
                c ? (C(), Ee(Yp, {
                  key: 0,
                  field: S,
                  item: c,
                  index: k,
                  "type-prefix": "part",
                  readonly: e.readonly || !!c.readonly,
                  "number-format": ce.numberFormat,
                  "orientation-model": ce.orientationModel,
                  "stock-grain": F(X)(c),
                  "material-options": Ce.value?.map((V) => ({ label: V.displayName || V.name, value: V.name })) || [],
                  "material-items": lo(Ce.value),
                  "thickness-options": S.name === "t" ? so(c) : [],
                  "width-options": S.name === "w" && Ve.stockType === "linear" ? oo(c) : [],
                  "banding-enabled": Ot.banding === k ? c : null,
                  "full-stock-disabled": c.fullStock && !["material", "t", "q", "fullStock"].includes(S.name) || S.name === "fullStock" && (cs(c) || !c.fullStock && !gi(c)),
                  "material-extras-disabled": no(c),
                  onUpdate: (V) => zl(c, S.propertyPath || S.fieldMap || S.name, V),
                  onValidation: o[3] || (o[3] = (V, H) => Wl()),
                  onBlur: () => Kl(c, S.name),
                  onOpenBanding: (V) => Na("banding", c),
                  onOpenMachining: (V) => Zl(c),
                  onOpenCustomProducts: (V) => Ql(c),
                  onOpenFinish: (V) => Na("finish", c),
                  onOpenPlaning: (V) => Na("planing", c),
                  onOpenImageUpload: (V) => yo(k)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "orientation-model", "stock-grain", "material-options", "material-items", "thickness-options", "width-options", "banding-enabled", "full-stock-disabled", "material-extras-disabled", "onUpdate", "onBlur", "onOpenBanding", "onOpenMachining", "onOpenCustomProducts", "onOpenFinish", "onOpenPlaning", "onOpenImageUpload"])) : ae("", !0)
              ]))), 128)),
              rt.value ? (C(), M("div", mm, [
                W("button", {
                  class: Xe(["c-btn", { selected: Ot.info === k }]),
                  type: "button",
                  onClick: (S) => Na("info", c)
                }, " i ", 10, gm)
              ])) : ae("", !0),
              W("div", hm, [
                W("button", {
                  disabled: F(v).inputShapes.value.length <= 1 || e.readonly || !!c.readonly,
                  type: "button",
                  class: "c-btn delete",
                  "aria-label": `${F(Ie)("actions.remove")} ${F(Ai)(F(Ie)("woodwork.part"))}`,
                  onClick: (S) => F(x)(c.autoId)
                }, [
                  it(m, { icon: ["fass", "trash"] })
                ], 8, vm)
              ]),
              it(F(a), {
                item: c,
                "num-columns": dn.value
              }, null, 8, ["item", "num-columns"]),
              Ot.banding === k && hi.value && (mi(c, "banding").length > 0 || pi(c)) ? (C(), Ee(_i, {
                key: "banding-" + (c?.material || ""),
                shape: c,
                "shape-index": k,
                "extra-type": "banding",
                "extra-label": "banding",
                "price-label": mo.value,
                "extra-keys": T.keys,
                "all-options": nt(c, "banding").options,
                pricing: nt(c, "banding").pricing,
                formulas: nt(c, "banding").formulas,
                "display-names": nt(c, "banding").displayNames,
                labels: nt(c, "banding").labels,
                locations: nt(c, "banding").locations || ke.locations,
                "location-groups": nt(c, "banding").locationGroups || [],
                "catalogue-key": pi(c) || "",
                "catalogue-max-gap": ke.maxGap,
                "extra-name": La(c, "banding")?.name,
                "price-per-length": La(c, "banding")?.price,
                "user-friendly-field-map": F(Li),
                "part-columns": dn.value,
                "format-price": e.formatPrice,
                "find-extras-price": Me.findExtrasPrice,
                "get-price": vi,
                "orientation-model": ce.orientationModel,
                "stock-grain": F(X)(c),
                "get-available-pricing-options": da,
                "allow-custom-names": !1,
                debug: rt.value
              }, null, 8, ["shape", "shape-index", "price-label", "extra-keys", "all-options", "pricing", "formulas", "display-names", "labels", "locations", "location-groups", "catalogue-key", "catalogue-max-gap", "extra-name", "price-per-length", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain", "debug"])) : ae("", !0),
              Ot.finish === k && mi(c, "finish").length > 0 && hi.value ? (C(), Ee(_i, {
                key: "finish-" + (c?.material || ""),
                shape: c,
                "shape-index": k,
                "extra-type": "finish",
                "extra-label": "finish",
                "price-label": po.value,
                "extra-keys": K.keys,
                "all-options": nt(c, "finish").options,
                pricing: nt(c, "finish").pricing,
                formulas: nt(c, "finish").formulas,
                "display-names": nt(c, "finish").displayNames,
                labels: nt(c, "finish").labels,
                locations: nt(c, "finish").locations || ct.locations,
                "location-groups": nt(c, "finish").locationGroups || [],
                "user-friendly-field-map": F(Li),
                "part-columns": dn.value,
                "format-price": e.formatPrice,
                "find-extras-price": Me.findExtrasPrice,
                "get-price": vi,
                "orientation-model": ce.orientationModel,
                "stock-grain": F(X)(c),
                "get-available-pricing-options": da,
                "allow-custom-names": !1,
                debug: rt.value
              }, null, 8, ["shape", "shape-index", "price-label", "extra-keys", "all-options", "pricing", "formulas", "display-names", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain", "debug"])) : ae("", !0),
              Ot.planing === k && mi(c, "planing").length > 0 && hi.value ? (C(), Ee(_i, {
                key: "planing-" + (c?.material || ""),
                shape: c,
                "shape-index": k,
                "extra-type": "planing",
                "extra-label": "planing",
                "extra-keys": ie.keys,
                "all-options": nt(c, "planing").options,
                pricing: nt(c, "planing").pricing,
                formulas: nt(c, "planing").formulas,
                "display-names": nt(c, "planing").displayNames,
                labels: nt(c, "planing").labels,
                locations: nt(c, "planing").locations || _e.locations,
                "location-groups": nt(c, "planing").locationGroups || [],
                "user-friendly-field-map": F(Li),
                "part-columns": dn.value,
                "format-price": e.formatPrice,
                "find-extras-price": Me.findExtrasPrice,
                "get-price": vi,
                "orientation-model": ce.orientationModel,
                "stock-grain": F(X)(c),
                "get-available-pricing-options": da,
                "allow-custom-names": !1,
                debug: rt.value
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "formulas", "display-names", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain", "debug"])) : ae("", !0),
              Ot.info === k ? (C(), M("div", {
                key: 4,
                id: "shape-info",
                style: Ht({ "grid-column-end": "span " + dn.value })
              }, [
                W("div", null, he(c?.banding), 1),
                W("div", null, he(je.value?.banding?.options || "No options"), 1)
              ], 4)) : ae("", !0),
              $n.value === k ? (C(), Ee(F(f), {
                key: 5,
                prefix: (k + 1).toString(),
                "unique-id": c.autoId,
                "shape-id": c.autoId,
                style: Ht({ "grid-column-end": "span " + dn.value }),
                images: bt.value,
                debug: rt.value,
                onUpdate: vo,
                onRemove: bo
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images", "debug"])) : ae("", !0)
            ], 2))), 128))
          ], 4),
          W("div", bm, [
            e.readonly ? ae("", !0) : (C(), M("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${F(Ie)("actions.add")} ${F(Ai)(F(Ie)("woodwork.part"))}`,
              onClick: o[4] || (o[4] = (c) => bi())
            }, [
              it(m, { icon: ["fass", "plus-large"] }),
              qt(" " + he(`${F(Ie)("actions.add")} ${F(Ai)(F(Ie)("woodwork.part"))}`), 1)
            ], 8, ym)),
            W("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": F(Ie)("actions.calculate"),
              title: e.calculateDisabled && e.calculateDisabledReason ? e.calculateDisabledReason : void 0,
              disabled: !F(v).inputStock.value?.length || q.value || e.calculateDisabled,
              onClick: o[5] || (o[5] = (c) => Po())
            }, [
              it(m, { icon: ["fass", "calculator"] }),
              qt(he(F(Ie)("actions.calculate")), 1)
            ], 8, km),
            e.readonly ? ae("", !0) : (C(), M("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": F(Ie)("actions.clear"),
              onClick: o[6] || (o[6] = (c) => yi())
            }, [
              it(m, { icon: ["fass", "trash"] })
            ], 8, wm)),
            W("div", Sm, he(F(N)) + he(ce?.maxParts ? "/" + ce.maxParts : ""), 1)
          ]),
          Nn.value && !e.readonly ? (C(), Ee(F(p), {
            key: 4,
            ref_key: "groupsRef",
            ref: sa,
            "selected-shape": Tn.value,
            "selected-shape-counter": Mn.value,
            "stock-grain": si.value,
            "format-options": li.value,
            onHighlightShape: Pa,
            onClearHighlight: oi
          }, null, 8, ["selected-shape", "selected-shape-counter", "stock-grain", "format-options"])) : ae("", !0),
          jn.value && Yt.value > 1 ? (C(), M("div", xm, [
            W("div", Pm, [
              W("button", {
                type: "button",
                class: "c-btn",
                disabled: He.value === 1,
                onClick: Oa
              }, [
                it(m, { icon: ["fass", "chevrons-left"] })
              ], 8, Cm),
              W("button", {
                type: "button",
                class: "c-btn",
                disabled: He.value === 1,
                onClick: Vl
              }, [
                it(m, { icon: ["fass", "chevron-left"] })
              ], 8, Om),
              W("span", Im, he(He.value) + " / " + he(Yt.value), 1),
              W("button", {
                type: "button",
                class: "c-btn",
                disabled: He.value >= Yt.value,
                onClick: _l
              }, [
                it(m, { icon: ["fass", "chevron-right"] })
              ], 8, Lm),
              W("button", {
                type: "button",
                class: "c-btn",
                disabled: He.value >= Yt.value,
                onClick: Dl
              }, [
                it(m, { icon: ["fass", "chevrons-right"] })
              ], 8, Fm)
            ])
          ])) : ae("", !0),
          Oe.value && !e.readonly ? (C(), Ee(F(u), {
            key: 6,
            ref: "import",
            "number-format": ce.numberFormat,
            "custom-fields": Dn.value,
            "banding-options": T.options,
            "banding-labels": T.labels,
            "finish-options": K.options,
            "finish-labels": K.labels,
            "show-template": ce.enable?.csvTemplate !== !1,
            onImport: Oo
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels", "show-template"])) : ae("", !0),
          oa.value ? (C(), M("div", Em, [
            Vn.value ? (C(), M("div", Am, he(Vn.value), 1)) : ae("", !0),
            W("pre", $m, he(ra.value), 1)
          ])) : ae("", !0),
          (ce.enable?.diagram ? q.value && !F(ut).complete || F(ut).complete && !me.value : q.value || F(ut).complete) ? (C(), M("div", Nm, [
            it(F(D), {
              size: 50,
              number: F(ut).shapeCount,
              complete: F(ut).complete,
              "show-number": ce.enable?.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : ae("", !0),
          ni(W("div", Tm, [
            F(ve)?.saw?.stockType !== "roll" ? (C(), M("div", Mm, he(F(ve)?.stack?.number ? F(ve).stack.number : 1), 1)) : ae("", !0),
            Te.value ? (C(), Ee(F(A), {
              key: 1,
              "element-id": "diagram",
              "number-format": ce.numberFormat,
              "decimal-places": ce.decimalPlaces,
              colors: ce.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])) : ae("", !0)
          ], 512), [
            [Js, ce.enable?.diagram && F(ut).complete && me.value]
          ]),
          Ca.value && ce.enable?.diagram && F(_).length > 1 && F(ut).complete ? (C(), Ee(F(J), {
            key: 9,
            display: !0,
            "use-stack": !0,
            "show-sorting": !1,
            onShow: F(Ne)
          }, null, 8, ["onShow"])) : ae("", !0),
          !Ca.value && ce.enable?.diagram && F(_).length > 1 && F(ut).complete ? (C(), Ee(F(ue), {
            key: 10,
            ref: "stockNavigation",
            "active-stock-id": F(ne),
            "stock-list": F(_),
            "primary-color": ce.colors.stock?.replace("#", ""),
            "secondary-color": ce.colors.partA?.replace("#", ""),
            onShowStock: F(Ne)
          }, null, 8, ["active-stock-id", "stock-list", "primary-color", "secondary-color", "onShowStock"])) : ae("", !0)
        ], 6)) : ae("", !0),
        rt.value ? (C(), M("div", Vm, [
          it(F(r), {
            data: [F(v)?.inputShapes?.value?.[0]],
            paths: ["inputShapes"]
          }, null, 8, ["data"]),
          o[10] || (o[10] = W("div", null, "Result data", -1)),
          it(F(r), {
            data: [O.value],
            paths: ["checkoutResult"]
          }, null, 8, ["data"])
        ])) : ae("", !0),
        it(um, {
          open: _n.value,
          "onUpdate:open": o[7] || (o[7] = (c) => _n.value = c),
          options: cn.value?.options || [],
          "material-label": cn.value?.shape?.material || "",
          thickness: cn.value?.shape?.t,
          "format-price": Me.formatPrice,
          onPick: ri,
          onCancel: ui
        }, null, 8, ["open", "options", "material-label", "thickness", "format-price"])
      ]);
    };
  }
}), eg = /* @__PURE__ */ Qt(_m, [["__scopeId", "data-v-b7661e36"]]);
export {
  fc as E,
  ii as F,
  ka as I,
  bl as L,
  Ec as M,
  yl as O,
  tm as _,
  ml as a,
  _i as b,
  Qm as c,
  Dd as d,
  Md as e,
  Uf as f,
  eg as g,
  Ep as h,
  Ym as i,
  vl as j,
  Zm as k,
  Jm as l,
  Hm as m,
  aa as n,
  kd as o,
  Dr as r,
  Xm as s,
  Ji as u
};
